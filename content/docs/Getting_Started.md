---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4ZCKJX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnF738vOOknjDf3EAMy8NmLRp1nm5StJOcmr3K%2FzY0owIhAIAvhncJP7CLTm5ruH12F7jm5TACW82jo2BviVBoz6odKv8DCCIQABoMNjM3NDIzMTgzODA1IgxXuPIaN0pSEU3%2BVtIq3ANWHCdbaZCs%2FAbSL908ZInzHTO2KJJfWeOeAdzYbCWzargBqxTrrfiY0Km05t0B1BnmeCKnfd0tuXSaJoV1k71mIDZAqrhrvyHGV183SInWOpZ33sWClhM%2FZEVe1sqFpOIFy0vP0pgDFds%2BIjwWX%2F2RqZp6ZzW14b3trs5FTjXi1sbhHDKZhv%2FocNMQk3N21xfNfWg8w3iTND9OlFWmirEu%2Fu%2FhmMgAqv2FbADNzDOT6IrSEk0Hmsg70%2Fp4ivDBW6rf%2B3mqRIwDqzM2olqhLy55n4a2PFA5J6xsmzbSH61%2FN8TQj%2Fgg8oxiIr736LqWZfROUKrdhxdqG%2BwxdpPVZjZIu%2Ff3R2Prbj9%2B%2FEOFHZ9qxPiGJfCYNzbKrs3PcsnwZ4zQejS%2FYY%2BJOEFWMJVBFL5CKARZJ7fphMVPwUPOhkZ1e1EoPd3q8rVec2MKjc6GlRen2UT8NTAfqAExqEkwXVoRhMkmrsIxY5ZEmy7fVHA9udIbneTvYuO9stfh2iqQDEx%2FNAb2p%2Bziib9qQzHR1waWvFQXf7oR4mD02Nq12SIZjm3NVpOUDXQnNYa1Zl1EpcR7kx2PSTfAllFxXOrAjFDxs8kH%2BdBFZyvk%2F1hGjHPKN9wAg%2B%2BXNFNLNct7ozD80va%2FBjqkAYo%2BkXQQK2PFZvfeKciflE5v5dORJfJHh0Z2DdPruAAetYjE1xCEda7CqHamIAb9cz%2FREwhrxU0l7Rg78zvfufzwEH4zDSsLmFqdAiScOlP2rw5iXw1%2BhAjVXWNvfC3AeSNARtXII3iLxpzJHn%2BevRzIWakXe9F6AWXLCAiwsj9oUftYejC4ZCVYZ3TQysbXKy2iEeyPyGAIG8y%2BEz5WayO1DeI7&X-Amz-Signature=2d4c45044b3a5e63ed9be5b6c4f21bfd7f0c5f1e072c64b8fbb7d80dfd259168&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4ZCKJX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnF738vOOknjDf3EAMy8NmLRp1nm5StJOcmr3K%2FzY0owIhAIAvhncJP7CLTm5ruH12F7jm5TACW82jo2BviVBoz6odKv8DCCIQABoMNjM3NDIzMTgzODA1IgxXuPIaN0pSEU3%2BVtIq3ANWHCdbaZCs%2FAbSL908ZInzHTO2KJJfWeOeAdzYbCWzargBqxTrrfiY0Km05t0B1BnmeCKnfd0tuXSaJoV1k71mIDZAqrhrvyHGV183SInWOpZ33sWClhM%2FZEVe1sqFpOIFy0vP0pgDFds%2BIjwWX%2F2RqZp6ZzW14b3trs5FTjXi1sbhHDKZhv%2FocNMQk3N21xfNfWg8w3iTND9OlFWmirEu%2Fu%2FhmMgAqv2FbADNzDOT6IrSEk0Hmsg70%2Fp4ivDBW6rf%2B3mqRIwDqzM2olqhLy55n4a2PFA5J6xsmzbSH61%2FN8TQj%2Fgg8oxiIr736LqWZfROUKrdhxdqG%2BwxdpPVZjZIu%2Ff3R2Prbj9%2B%2FEOFHZ9qxPiGJfCYNzbKrs3PcsnwZ4zQejS%2FYY%2BJOEFWMJVBFL5CKARZJ7fphMVPwUPOhkZ1e1EoPd3q8rVec2MKjc6GlRen2UT8NTAfqAExqEkwXVoRhMkmrsIxY5ZEmy7fVHA9udIbneTvYuO9stfh2iqQDEx%2FNAb2p%2Bziib9qQzHR1waWvFQXf7oR4mD02Nq12SIZjm3NVpOUDXQnNYa1Zl1EpcR7kx2PSTfAllFxXOrAjFDxs8kH%2BdBFZyvk%2F1hGjHPKN9wAg%2B%2BXNFNLNct7ozD80va%2FBjqkAYo%2BkXQQK2PFZvfeKciflE5v5dORJfJHh0Z2DdPruAAetYjE1xCEda7CqHamIAb9cz%2FREwhrxU0l7Rg78zvfufzwEH4zDSsLmFqdAiScOlP2rw5iXw1%2BhAjVXWNvfC3AeSNARtXII3iLxpzJHn%2BevRzIWakXe9F6AWXLCAiwsj9oUftYejC4ZCVYZ3TQysbXKy2iEeyPyGAIG8y%2BEz5WayO1DeI7&X-Amz-Signature=cb0a94bba44001cb037f40484e7eb0f938cf28bc41297c50753c042489e78cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3KVHAS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHm7GcrYslGJHClmvBIBhLp7iO70iiGwpBt%2Bh44gQQAAiEAyH81YbGTKcfinUkT0LgLnRhGGm9FAVigx99j%2BqUFyoUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBi5ATD1zyo5VM%2FYdCrcAyyBbgRJ5UShxptJdV31wTlo%2BXBzF1SQc3%2Fk8o7Ga5O8EC%2BGlw5y2LXvLsT%2BtAWSIwNsuKsD4q6%2B9Mfvjt6rGBvY5NCKn5LeHz27PgLRHrLXGym%2BDJnPN9VQSy%2BzdeUkROlhE%2FIJD3mcky4g3dd5ZJ37ctfQoxTeasuuhizilYIoIR5lLSpSjf5Px7JQgTK985V5SzxspzijoxuZrR%2FmLtygEzdg9Bj1Pto4%2F5fd8cTepJNsFye%2B18Ac%2Bxgez70UnO5afhUcetl8oEKOJGrBUKDvAsCNfcbD7Q0C%2B2l4W%2FUr8iQNOqNM0xJUHkwFfnYXHjN7j2DFHwY4HHJmFkHgJIYyewnJeGqqxVV64TPvq5N1HFaSeYwcSdQmYntPmxUhFFvAsm%2FAef5QpgXkSpmEFY1xYr2L3pO7BLXHKheUmJpfiNM3DSkw4vt5we%2Fg6Ir1KchoIm8AEKP%2FB%2Fto1LKEqziDxfBlzn%2BDfmZQJ7x95VneP6DcrS61EMra3Fqh7ReertvIYixJwAWAksNBKmuYRAZt6nYb6MiFe1suaZGgBollsqNjxyWK05Lpv3YHtTMpUpeMoqV2hkyeA34l%2BbddMl0HBdfEK8JYEr4ZVScmJIK9iTIop%2FxhkAWnCGOEMKvT9r8GOqUBEW1GInmYatn4BporQxO9zne8MBkE8nUHBN%2FoGs9ZH54LOoWAxkk7NaBivvZY7sfRHqD2F0zKoKkkQ9iFaXz%2FkRX%2F1H5iR6jnTdMp1UjQhoYtEv9jnnWwTbo4moqLE03D0%2FlTv3SXBmzYx6HGGU8sXEMd1XGOaZEPdbSBETyQ4%2Fw4ejHLis0eo4qxWqepNo4OkuR50VdvGYkE0a9MPCahAjrvUWof&X-Amz-Signature=ef107b224b90a4e7e3f65466564eed2c1d49d5ca3425019b7642734d25e23bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN4PITQ4%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCax0MQBibghMklrTWSsJwUWTKkIPiCFxxlUl0e2QgxigIhAP2omDU6FwrPawh%2BckUz5lL03ZEHe6hgsayvqyVOGv5FKv8DCCIQABoMNjM3NDIzMTgzODA1IgwqgcEs8bWCy5ku854q3ANaG8DfcXsESwNiGzdS5V9oX1QOPc0MhmX%2BBK5%2BtoB8l8HkKrZtdWVKK2qqtBwQB3tSbVaX2hiH7cNu9zzHEONMNOGHMwZKiMroY1BwOEw21%2BSHl13KdEVi2%2FCLRKWH3cnznSNoVylvZPmhKLcdq%2Fh01PjfFaNxaq1o3ziMvYbiDJGNZb6ixECp8vbODENFz7rUYvF3z27ioZcKmMUZ8P2tCX5z4Ok1GAQwXGADN0FC2gP7RGt4J4FcAysjNN303RTsJIcPHh99mC2gPCGUJq0Zdsx85CV13j9FfmYnYcl66qbePslJ6%2F%2BEfE5qO4%2B1g6nUXcryWyIJtdI11dohuK0kZkZoGmiYdJudvEylpfNRrdT6azsxbQCP7EKAsjHeDN4BSwGh%2B2tMjHVMiUuZ6RCqCUhTY9bx%2FEzYAXQuKxxu8pIJmdyMsQDs96Lfn9fKbJNL0r9np9CJ9af0tv0uKd4L2mfTqLiJgrBveuj7KVPTCCgf%2BUqWEXt5CVuERWqSQDtmIhkbJMN8F4fGmmq7E%2Fod6n9xTq2jqhUP3UwPpdAGPMP66P4CX807S%2FJGztjVy69ejaktkRsB0PSSuqVFFKM5VvZF916ATPgplKfnFEwZChXlGEp4ltTGYdv3UjCc0va%2FBjqkAQg7zZZoMfbT%2FfOXlK2Dz%2BTv7EGEYEnQvyUtlcRv56Rt9DBf%2FvZzDRQrLdRAShLUzoxsyiKgWi2a26Wm%2FkClKWDDdw1BiFtd0r35Ytuf8Cnoa3ayT0auPN4jtQKPOVJyCzv9YzK7lTjJ6uuksDsTBufPXmc9vvybZBn%2FPD0G4QkNRumgRm3uDXf3uHqlCgmFV%2BG86SvnmHpVUA5bwWzyC2Uy7scE&X-Amz-Signature=ac2ba41ee58bb74a6a4a49c1f74980b9c6bcf8925a69a173f2bd947f037c529d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4ZCKJX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnF738vOOknjDf3EAMy8NmLRp1nm5StJOcmr3K%2FzY0owIhAIAvhncJP7CLTm5ruH12F7jm5TACW82jo2BviVBoz6odKv8DCCIQABoMNjM3NDIzMTgzODA1IgxXuPIaN0pSEU3%2BVtIq3ANWHCdbaZCs%2FAbSL908ZInzHTO2KJJfWeOeAdzYbCWzargBqxTrrfiY0Km05t0B1BnmeCKnfd0tuXSaJoV1k71mIDZAqrhrvyHGV183SInWOpZ33sWClhM%2FZEVe1sqFpOIFy0vP0pgDFds%2BIjwWX%2F2RqZp6ZzW14b3trs5FTjXi1sbhHDKZhv%2FocNMQk3N21xfNfWg8w3iTND9OlFWmirEu%2Fu%2FhmMgAqv2FbADNzDOT6IrSEk0Hmsg70%2Fp4ivDBW6rf%2B3mqRIwDqzM2olqhLy55n4a2PFA5J6xsmzbSH61%2FN8TQj%2Fgg8oxiIr736LqWZfROUKrdhxdqG%2BwxdpPVZjZIu%2Ff3R2Prbj9%2B%2FEOFHZ9qxPiGJfCYNzbKrs3PcsnwZ4zQejS%2FYY%2BJOEFWMJVBFL5CKARZJ7fphMVPwUPOhkZ1e1EoPd3q8rVec2MKjc6GlRen2UT8NTAfqAExqEkwXVoRhMkmrsIxY5ZEmy7fVHA9udIbneTvYuO9stfh2iqQDEx%2FNAb2p%2Bziib9qQzHR1waWvFQXf7oR4mD02Nq12SIZjm3NVpOUDXQnNYa1Zl1EpcR7kx2PSTfAllFxXOrAjFDxs8kH%2BdBFZyvk%2F1hGjHPKN9wAg%2B%2BXNFNLNct7ozD80va%2FBjqkAYo%2BkXQQK2PFZvfeKciflE5v5dORJfJHh0Z2DdPruAAetYjE1xCEda7CqHamIAb9cz%2FREwhrxU0l7Rg78zvfufzwEH4zDSsLmFqdAiScOlP2rw5iXw1%2BhAjVXWNvfC3AeSNARtXII3iLxpzJHn%2BevRzIWakXe9F6AWXLCAiwsj9oUftYejC4ZCVYZ3TQysbXKy2iEeyPyGAIG8y%2BEz5WayO1DeI7&X-Amz-Signature=9a5ef933139237b3031dc1e94144c3438b9494bb0d7afea4607775498453963d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
