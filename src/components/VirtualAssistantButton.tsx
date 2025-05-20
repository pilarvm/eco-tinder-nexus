
import { useState } from "react";
import { Recycle } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Botón asistente virtual: abre un modal explicando la funcionalidad
const VirtualAssistantButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex gap-2 items-center">
          <Recycle className="text-green-600" size={20} /> Asistente Virtual
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Asistente Virtual Inteligente</DialogTitle>
        <DialogDescription>
          En el futuro, un asistente automatizado analizará los datos de entradas y salidas de tu empresa y te recomendará de manera inteligente nuevas oportunidades de sinergia y reutilización con otras MYPES cercanas.<br /><br />
          Esto permitirá identificar patrones, optimizar recursos y facilitar la cooperación, avanzando hacia una economía circular más eficiente y sostenible.
        </DialogDescription>
        <div className="flex justify-end w-full mt-2">
          <Button variant="secondary" onClick={() => setOpen(false)}>Cerrar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VirtualAssistantButton;

