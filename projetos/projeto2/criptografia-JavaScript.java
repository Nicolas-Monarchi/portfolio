import javax.swing.JOptionPane;

public class CriptografiaSimples {
    public static void main(String[] args) {
        // Lê a sequência de caracteres do usuário
        String mensagemOriginal = JOptionPane.showInputDialog("Digite a mensagem a ser criptografada:");

        // Converte a mensagem para um vetor de caracteres
        char[] caracteres = mensagemOriginal.toCharArray();

        // Cria um vetor para armazenar os números inteiros criptografados
        int[] numerosCriptografados = new int[caracteres.length];

        // Realiza a criptografia (soma 10 aos valores ASCII)
        for (int i = 0; i < caracteres.length; i++) {
            int valorAscii = (int) caracteres[i];
            int valorCriptografado = valorAscii + 10;
            numerosCriptografados[i] = valorCriptografado;
        }

        // Converte os números inteiros criptografados de volta para uma string
        StringBuilder mensagemCriptografada = new StringBuilder();
        for (int numero : numerosCriptografados) {
            mensagemCriptografada.append((char) numero);
        }

        // Mostra a mensagem criptografada
        JOptionPane.showMessageDialog(null, "Mensagem criptografada: " + mensagemCriptografada.toString());
    }
}
