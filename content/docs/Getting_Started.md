---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQSJVLS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkErTLNpQPjhoDQSH%2FhkE142DWKF2xiobpGoqKNRvu0AiEAtr1yTGQCgGbb%2FMueAVAwVuUkuDddo%2F7WUhl4JDxqU6cqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhRMkQsEJvlD%2BT3DCrcA7Mj9wmVnI0J%2BQ7T2djDC0Lw7YIAJbu%2B%2BRAU421Svyk40laq7VsCEEcI6NFxHNGJbOkhyMpGVyyNMImZxqi3O3dK%2F7rANJT1StyEkz6qPeO7uvW8oTx7oTxWlcxBMaG9qzAHwEQR2jKCwBS82nsTWK5PRpB4tL6FVJ39H6iS6nBho9AO2JgTIH6uJBBPUbDiPu9bWOsBvru%2B4MrY4MKcCT7KZnL7EFx6QfLINjIneUC0XDBTTji%2F%2F2ymrf56MWSUOOeZ5pZZygJmVLKX8gUAMM%2FuWc%2F%2FUzl1ytwg%2F4rAYbXoNxV3k2bZR5H6z3DDFBZ5kURLw%2FQVXnSop2Mwl%2B%2FzkfaEp1aKywzdJvimB34r%2BazncNBRfXOKj7c%2FNVRtVhDCetR%2BKpyRLxHHJugjnE48dLnhHZd9V7NN5oJrgz%2FXxsgyAdZe%2FHbagYIS%2BN%2B2c7Lix9zOmH7wDSL9jYnUaK9RLKubBUbWrVikNdSXV86jKXO%2FSTdEhfnzNIYYAL2UxlomUKxnveLIv653my7yehHY88xMxorjm0QVx5ERx%2F%2B%2FVRX0wEBOt%2Bopwwtx4zuYoEWmGCMoJGI9M83dDASBcoquLb%2FS77Hvhhf5pv52duqKoKEQFluOmNTSPnfLKQbqMM6kjcMGOqUBKXboCZq9bTzeyNBjgGKoceVfVsUAZ8lODoOT6V1x8hZ6qM4OxW1lfCqlXHJdXMjwRt0Nh06E4C6nearYIGOAVAiJmn6FaU1%2Fv1gInRhsRRHG%2FDSMR3q5XU8nlslsCCKFkJTPGIsJ8ng7z%2FoAh33ZW5GWR9GQ1nWMvyqhcPD90kDqJ8KczbgbOGsrqRNdBmhBBkddc4GC4L6LJG2LVgAtGJs8bKlq&X-Amz-Signature=d01ee2e81fb490590b1e78dd3473176b9f8a5c7e9605013cf664530ceb17fb43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQSJVLS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkErTLNpQPjhoDQSH%2FhkE142DWKF2xiobpGoqKNRvu0AiEAtr1yTGQCgGbb%2FMueAVAwVuUkuDddo%2F7WUhl4JDxqU6cqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhRMkQsEJvlD%2BT3DCrcA7Mj9wmVnI0J%2BQ7T2djDC0Lw7YIAJbu%2B%2BRAU421Svyk40laq7VsCEEcI6NFxHNGJbOkhyMpGVyyNMImZxqi3O3dK%2F7rANJT1StyEkz6qPeO7uvW8oTx7oTxWlcxBMaG9qzAHwEQR2jKCwBS82nsTWK5PRpB4tL6FVJ39H6iS6nBho9AO2JgTIH6uJBBPUbDiPu9bWOsBvru%2B4MrY4MKcCT7KZnL7EFx6QfLINjIneUC0XDBTTji%2F%2F2ymrf56MWSUOOeZ5pZZygJmVLKX8gUAMM%2FuWc%2F%2FUzl1ytwg%2F4rAYbXoNxV3k2bZR5H6z3DDFBZ5kURLw%2FQVXnSop2Mwl%2B%2FzkfaEp1aKywzdJvimB34r%2BazncNBRfXOKj7c%2FNVRtVhDCetR%2BKpyRLxHHJugjnE48dLnhHZd9V7NN5oJrgz%2FXxsgyAdZe%2FHbagYIS%2BN%2B2c7Lix9zOmH7wDSL9jYnUaK9RLKubBUbWrVikNdSXV86jKXO%2FSTdEhfnzNIYYAL2UxlomUKxnveLIv653my7yehHY88xMxorjm0QVx5ERx%2F%2B%2FVRX0wEBOt%2Bopwwtx4zuYoEWmGCMoJGI9M83dDASBcoquLb%2FS77Hvhhf5pv52duqKoKEQFluOmNTSPnfLKQbqMM6kjcMGOqUBKXboCZq9bTzeyNBjgGKoceVfVsUAZ8lODoOT6V1x8hZ6qM4OxW1lfCqlXHJdXMjwRt0Nh06E4C6nearYIGOAVAiJmn6FaU1%2Fv1gInRhsRRHG%2FDSMR3q5XU8nlslsCCKFkJTPGIsJ8ng7z%2FoAh33ZW5GWR9GQ1nWMvyqhcPD90kDqJ8KczbgbOGsrqRNdBmhBBkddc4GC4L6LJG2LVgAtGJs8bKlq&X-Amz-Signature=f35d7cb86761fb54857a683b711fbcfec4578cee8cd2ecb60f0a2d70cf3edf26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQSJVLS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkErTLNpQPjhoDQSH%2FhkE142DWKF2xiobpGoqKNRvu0AiEAtr1yTGQCgGbb%2FMueAVAwVuUkuDddo%2F7WUhl4JDxqU6cqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhRMkQsEJvlD%2BT3DCrcA7Mj9wmVnI0J%2BQ7T2djDC0Lw7YIAJbu%2B%2BRAU421Svyk40laq7VsCEEcI6NFxHNGJbOkhyMpGVyyNMImZxqi3O3dK%2F7rANJT1StyEkz6qPeO7uvW8oTx7oTxWlcxBMaG9qzAHwEQR2jKCwBS82nsTWK5PRpB4tL6FVJ39H6iS6nBho9AO2JgTIH6uJBBPUbDiPu9bWOsBvru%2B4MrY4MKcCT7KZnL7EFx6QfLINjIneUC0XDBTTji%2F%2F2ymrf56MWSUOOeZ5pZZygJmVLKX8gUAMM%2FuWc%2F%2FUzl1ytwg%2F4rAYbXoNxV3k2bZR5H6z3DDFBZ5kURLw%2FQVXnSop2Mwl%2B%2FzkfaEp1aKywzdJvimB34r%2BazncNBRfXOKj7c%2FNVRtVhDCetR%2BKpyRLxHHJugjnE48dLnhHZd9V7NN5oJrgz%2FXxsgyAdZe%2FHbagYIS%2BN%2B2c7Lix9zOmH7wDSL9jYnUaK9RLKubBUbWrVikNdSXV86jKXO%2FSTdEhfnzNIYYAL2UxlomUKxnveLIv653my7yehHY88xMxorjm0QVx5ERx%2F%2B%2FVRX0wEBOt%2Bopwwtx4zuYoEWmGCMoJGI9M83dDASBcoquLb%2FS77Hvhhf5pv52duqKoKEQFluOmNTSPnfLKQbqMM6kjcMGOqUBKXboCZq9bTzeyNBjgGKoceVfVsUAZ8lODoOT6V1x8hZ6qM4OxW1lfCqlXHJdXMjwRt0Nh06E4C6nearYIGOAVAiJmn6FaU1%2Fv1gInRhsRRHG%2FDSMR3q5XU8nlslsCCKFkJTPGIsJ8ng7z%2FoAh33ZW5GWR9GQ1nWMvyqhcPD90kDqJ8KczbgbOGsrqRNdBmhBBkddc4GC4L6LJG2LVgAtGJs8bKlq&X-Amz-Signature=49d9727e7766cda056e9b7de195b2995ce6e77d7e0407383e7bed0d310168218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEH7DZJA%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsH1ZIcL6kNJGN8PeOHkd0%2BlobJzGB7Fd7MRFNEZdu%2BAIgBEzF9Bl8Ws%2F9d2ED15qrSC%2FyZ8tFHxK6STABWKyHod0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnCazLQJ8a5HuaqACrcAzaGJDWyhbUmSKohk6bjMz0zD6yZcGWXArcGmYeYOVRtnaxWLJc8YpJ1qcxe8Kar1zSyrqBmTXM56ICUFeWy9GRkTb4oJI%2B%2FnAaD0xKnXLO%2BO7xjYpVvcZfQwl3PSx%2BOBtavw7VwEz8Ut6xHhG0GgdbOvMxLx93GPUJFAAeo0yQQ%2BUIYnAIaXtw7uOWR3Xxo5goRLshDXc9DRaTA%2BQjMrYbjWpVI07Y%2B6iySyb1B4altZcXXJu50yWAXALm9YnUKVIsoVNpPVkw%2FwfJwPvDP3xnvbOWijenwBDe3xYlOeRXpHHtiUsxxpOyL8NhFSh%2B1x6F8l1vDOG9A120kmj2e6g3AoVwsEKyeKTzIGQeheCwdaPqMI5IAqJ51m%2BFfKJSrO48aEfPZjhuPQsVMq5BBzsxSZDOUrh5AZzo94ub6hcvZRb4iG6y0cKO2jRKLqXd7HKAHH5wBB1IK%2BmO%2FBp%2F0zVlZI31rZapxTHn4v3%2BkB7yuGpTdbMf%2F%2FQOQ1n9vhC0wBNe%2F8kUL41W4dEMg%2BQrwEECaKFVSQeYSSb5DWrZMyktZXSG9thkkmVz2LKeqjlzVM0RpyidFiDy0UOPHD6%2FBmfo9hwzqQNQwF%2FaA%2FQKeu4pIHIMssJIynHgRybGRMNCjjcMGOqUBDsBWZbXZr%2Fke0ZZ3LMhtj6PSfn9Vc2rWt9voZGDLoyoCrVoTVyWMnw0SYPb%2F37n9Q9aaVr1Uj7ptWMK3luXS9mKBOXGKJUJVs%2FvZ7Wh1h1NHcRUuzNL06%2Bh1M7CKwL5%2BVGcs8tht1GeIBT%2BCiqQM5%2BSAy2QqhNtX31lptG8M%2BWZSEWHy8w5vlBmPyHVzwQoBHFdznS%2Fu0%2ByxnKqkS8%2FpzXJaLA4I&X-Amz-Signature=eb165b0bd9b97422ec3b2b513e42cf5d71ed6e94b43c55c1d4943c83bfb4f269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLDCRAQ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFhijdrTjQePMEpW15gVis3TkvAERAOXCNHNNFnFSSQIgDzrcXzPHReolze0ADSA5SaAQDt0uVSV3nPl5ZMJzQY4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrpOt8qKlM7W03czircAxZwbIniNuoq2VeVUjdKyiVy2iy8erVpYh5DXlqjnPwpRoT1eAi6OzeFsoXy%2BqBFXWwL%2F9494FNajnXfdTj2fLhpTEaV2I5AuwA3UM4nGoepa4P%2F0%2FJdJihzQyz0GghEyCItT2hqFOg9flB4opc%2BClgE6K2xZHU%2FUdaaiB%2BDYEXdhk1B2apSFlWILdd9RxvkwAmBrzQfZn5H0NMD%2FeGFKfG1Y%2BVlAdzXsfYDQsmp5Ok6bzJZb6DZnuyw6uIxnuUZxiGUCPivvLU3hlKH9YahY9jm%2BMhaNnyrrYJTB5zAtbhtwJbIFuse%2FoO5%2F3P9Kne%2FF4BhXGqVdTxwzBtTPJdgCRN8vQ84DcZ7WYVFA01Tk8BC9fYTs0yWXFz11UD6S15ZV7F2pQrJlnOaY3yNpVtwrOy4JmBUR9ttAecOM3czfqTgYxKZInFfhCsiW0LOUQk3PuajoROGaF5oPkW8B3kkzYGxAjQZHNFRcHKZxPCIHNU4i0UXVxCqfVNZsMVtP%2FPpVqBUqcHpCHaKH275rZKPD6wybMMKEl0lr17wZg%2FRzZSHmMeHggXiMWZsAPUjqYaoEBD%2Bp1c3KfKaiRasUU1SX9R%2BkZYAFhbKzNvGRuKRzPZrCNOySW5Cq24at4sSMMKjjcMGOqUB03Z0B2XIxpJPFUANgNHRvHTuX61gwV%2Bpt3iEz38TK9ArS17nmouosAmnj8PBujkOerzJV%2FQrJnU%2BvKU87e%2FqDKopL7MOXxLH0B6Nih9pp7uk%2BeTnYDe7hvhcVBTwrEjL8UeEOMrEKXTX2Y45o6WuMKGxJtEsIynyaMbPNcb5P7IVz1xhU05atNEiQ1J5eDL83aiEQrmGu6106cWCylI7CqjyoAXQ&X-Amz-Signature=a62c5eeed0727ccb103950a472bfc36fbca21a46ece4aa74bbeba47011089a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQSJVLS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkErTLNpQPjhoDQSH%2FhkE142DWKF2xiobpGoqKNRvu0AiEAtr1yTGQCgGbb%2FMueAVAwVuUkuDddo%2F7WUhl4JDxqU6cqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhRMkQsEJvlD%2BT3DCrcA7Mj9wmVnI0J%2BQ7T2djDC0Lw7YIAJbu%2B%2BRAU421Svyk40laq7VsCEEcI6NFxHNGJbOkhyMpGVyyNMImZxqi3O3dK%2F7rANJT1StyEkz6qPeO7uvW8oTx7oTxWlcxBMaG9qzAHwEQR2jKCwBS82nsTWK5PRpB4tL6FVJ39H6iS6nBho9AO2JgTIH6uJBBPUbDiPu9bWOsBvru%2B4MrY4MKcCT7KZnL7EFx6QfLINjIneUC0XDBTTji%2F%2F2ymrf56MWSUOOeZ5pZZygJmVLKX8gUAMM%2FuWc%2F%2FUzl1ytwg%2F4rAYbXoNxV3k2bZR5H6z3DDFBZ5kURLw%2FQVXnSop2Mwl%2B%2FzkfaEp1aKywzdJvimB34r%2BazncNBRfXOKj7c%2FNVRtVhDCetR%2BKpyRLxHHJugjnE48dLnhHZd9V7NN5oJrgz%2FXxsgyAdZe%2FHbagYIS%2BN%2B2c7Lix9zOmH7wDSL9jYnUaK9RLKubBUbWrVikNdSXV86jKXO%2FSTdEhfnzNIYYAL2UxlomUKxnveLIv653my7yehHY88xMxorjm0QVx5ERx%2F%2B%2FVRX0wEBOt%2Bopwwtx4zuYoEWmGCMoJGI9M83dDASBcoquLb%2FS77Hvhhf5pv52duqKoKEQFluOmNTSPnfLKQbqMM6kjcMGOqUBKXboCZq9bTzeyNBjgGKoceVfVsUAZ8lODoOT6V1x8hZ6qM4OxW1lfCqlXHJdXMjwRt0Nh06E4C6nearYIGOAVAiJmn6FaU1%2Fv1gInRhsRRHG%2FDSMR3q5XU8nlslsCCKFkJTPGIsJ8ng7z%2FoAh33ZW5GWR9GQ1nWMvyqhcPD90kDqJ8KczbgbOGsrqRNdBmhBBkddc4GC4L6LJG2LVgAtGJs8bKlq&X-Amz-Signature=2820381a843f5934a086325b016763c782807002a78a169951d30e8a77c64731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
