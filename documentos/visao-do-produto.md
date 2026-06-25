# Visão do Produto — Design System Guardião

## 1. Missão do Produto
Desenvolver soluções mobile que simplifiquem o compartilhamento e a gestão de informações do cotidiano entre pessoas, com autonomia e simplicidade, reduzindo a dependência de terceiros para acessar dados e credenciais compartilhadas.

## 2. Promessa de Valor Emocional
O Guardião devolve ao usuário a tranquilidade de ter as informações familiares sempre à mão, sem depender da memória ou da disponibilidade de terceiros. Ele transforma a sobrecarga cognitiva e o atrito da dependência em autonomia e simplicidade, oferecendo a sensação de que a organização da família não é um fardo, mas um suporte silencioso e confiável no cotidiano.

## 3. Público-Alvo (Resumido)
Famílias multigeracionais que enfrentam dependência na gestão de informações cotidianas — onde um membro centraliza dados, senhas e documentos, enquanto outros dependem dele para acessá-los. O Guardião atende tanto quem organiza quanto quem consulta, restaurando a autonomia de todos os lados.

## 4. Atributos da Marca
1. **Simples** – direto ao ponto, sem burocracia ou passos desnecessários.
2. **Acessível** – compreensível para todas as idades e níveis de habilidade digital.
3. **Confiável** – seguro e discreto no trato com as informações da família.
4. **Assertivo** – resolve o problema com clareza e sem ruído.
5. **Equilibrado** – apoia o cotidiano sem competir pela atenção do usuário.

## 5. Linguagem Visual (Formas e Curvas)

O Guardião adota formas suaves e cantos arredondados como padrão visual. Essa escolha não é apenas estética: baseia-se na psicologia das formas geométricas, em que círculos e curvas estimulam impressões de harmonia, empatia, suavidade, centralidade e acolhimento — qualidades que ressoam diretamente com a promessa de um suporte silencioso e equilibrado para a família.

O arredondamento é aplicado com consistência em toda a interface, evitando arestas agressivas que possam parecer técnicas ou frias.

**Componentes com arredondamento padrão:** botões, cards, inputs, modais, tooltips, avatares e containers — com raios diferenciados (médio para interativos, grande para superfícies).

**Exceções:** separadores, bordas de tabelas, ícones de ação e elementos de grade podem usar cantos retos ou raio mínimo, quando justificados por necessidade de contraste ou legibilidade. Essas exceções são documentadas e não devem ser replicadas sem validação.

## 6. Sentimentos Desejados
O Guardião desperta no usuário a sensação de **autonomia** — a certeza de que pode acessar e gerenciar as informações da família por conta própria, sem depender da memória ou da disponibilidade de terceiros. Transmite também **segurança** e **confiança**, ao saber que os dados estão organizados, acessíveis e sob seu controle. Ao mesmo tempo, proporciona **tranquilidade** e **alívio**, reduzindo a sobrecarga mental de quem precisa guardar e lembrar de tudo. Por fim, reforça o sentimento de **cuidado** e **conexão familiar**, especialmente entre gerações e à distância.

## 7. Princípios de Design

Os princípios de design do Guardião orientam decisões de UI/UX e foram selecionados entre os 12 princípios clássicos do design visual.

1. **Balanço** — Distribua o peso visual para que nenhuma área sobrecarregue as demais, transmitindo ordem e calma.

2. **Contraste** — Garanta diferença clara entre fundo, texto e elementos interativos para assegurar legibilidade a todos, especialmente aos mais velhos.

3. **Hierarquia** — Organize a informação por ordem de importância, guiando o olhar do mais relevante ao secundário para reduzir o esforço cognitivo.

4. **Proporção** — Escale os elementos conforme sua importância. Priorize alvos de toque generosos e facilidade de uso sobre a densidade de informação.

5. **Unidade** — Todos os componentes devem formar uma família visual coesa, onde cores, formas e comportamentos trabalham em conjunto para transmitir confiabilidade.


## 8. Território Cromático

O Guardião adota o azul e o verde como cores principais, formando uma paleta que equilibra tecnologia e acolhimento.

**Azul** — Transmite confiança, segurança e estabilidade. Comunica a solidez técnica do app e a confiabilidade de que as informações estão organizadas e acessíveis.

**Verde** — Evoca harmonia, equilíbrio e cuidado. Reforça a conexão com o ambiente familiar e a sensação de que o app é um suporte presente, não um obstáculo.

Juntas, as cores criam um território cromático que comunica **tranquilidade** e **autonomia**.

**Diretriz de acessibilidade:** O verde não será utilizado como único indicador de estado ou ação. Toda informação transmitida por cor terá reforço visual complementar — ícones, texto ou variação de forma — garantindo que usuários com daltonismo ou baixa visão não sejam excluídos da experiência. O contraste entre texto e fundo seguirá as diretrizes WCAG (nível AA), assegurando legibilidade a todos os perfis.


## 9. Diretrizes de Tom de Voz (UX Writing)

O Guardião se comunica com clareza, respeito e simplicidade.

1. **Claro e direto** — Comunique o estado, não a causa. Ofereça uma ação ou um tempo de espera. Prefira "Tente de novo" a "Verifique sua conexão". Após 2 tentativas falhas, redirecione para uma tela de erro com orientações claras.

2. **Empático e sem julgamento** — Descreva o fato e a ação possível. Adjetivos emocionais são permitidos apenas em contextos de acolhimento e conexão familiar (ex: boas-vindas, mensagens de compartilhamento), vedados em mensagens de erro, alerta ou validação.

3. **Confiável e transparente** — Especifique o que aconteceu e o que o usuário pode esperar. Quando uma ação for irreversível, alerte antes e indique os impactados (ex: "Isso também será removido de João, Maria e Pedro").

4. **Autônomo e direto** — Use o usuário como sujeito. Use imperativo para ações primárias (ex: "Compartilhar", "Salvar", "Excluir"). Use opções quando houver caminhos igualmente válidos.

5. **Consistente** — Um termo por conceito. Se "memória" é a unidade principal, não use "lembrança", "recordação" ou "momento" como sinônimos.

6. **Feedback positivo** — Utilize snackbar para confirmações de ações concluídas (ex: "Documento salvo", "Compartilhado com 3 pessoas").

7. **Falhas de IA** — Utilize tom neutro, atribuindo a falha ao sistema, não ao usuário (ex: "Não foi possível ler esta imagem" em vez de "Você enviou uma imagem ilegível").

8. **Espera longa** — Comunique processamento com mensagens de estado, sem atribuir sujeito: "Só mais alguns segundos..." ou "Carregando documentos".

## 10. Limites do Produto

O Guardião atua exclusivamente na gestão de informações não críticas do cotidiano familiar. Não gerencia dados bancários, de saúde ou quaisquer outras informações sujeitas a regulações específicas. Sua função é centralizar e organizar o que a família decide compartilhar, não executar transações ou serviços em nome do usuário.

A geolocalização é usada apenas para alertas contextuais entre membros do mesmo núcleo familiar, nunca como serviço de rastreamento genérico. O app notifica, mas não permite conversação. Não é um mensageiro.

O app organiza informações fornecidas pelos usuários, mas não gera conteúdo automaticamente nem toma decisões automatizadas. Toda ação relevante — compartilhamento, exclusão, inclusão de membros — requer consentimento ou confirmação explícita.

O Guardião é mobile-first e nativo para Android. Qualquer expectativa de uso em outras plataformas (web, iOS, desktop) está fora do escopo atual. O app não é um serviço de emergência — não realiza chamadas para polícia, bombeiros ou qualquer outro órgão. Ele apoia a organização familiar, mas não substitui o discernimento e a responsabilidade dos seus membros.

## 11. Meta do Design System

O Design System do Guardião existe para garantir consistência, acessibilidade e eficiência na construção da interface do app.

Ele documenta e padroniza decisões visuais, comportamentais e de comunicação — desde cores e formas até tom de voz — assegurando que qualquer tela ou componente reflita a identidade da marca e sirva ao público multigeracional sem esforço cognitivo desnecessário.

Seu propósito final é reduzir o retrabalho e o tempo de decisão do time, permitindo que o foco esteja na resolução de problemas reais dos usuários, não na reinvenção de padrões a cada nova tela.