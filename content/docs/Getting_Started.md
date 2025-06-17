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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H2ZMIY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB67Ba0UJiMGC3ilTswnPFEcVptwRRs20ysO7XEW%2BiGWAiEAk488IBfIlYJIVQffVkkLHMuIUDAUF4Rzk3XQtosnh5Aq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMOVFkeuWO%2FHu7SCRCrcA%2BcCWpn0LCOvLW9A%2FcWHMIHLq%2FJjmSi%2F808waJ4jtSxgPoobYWNg7SHKyP6GvycY2gtJEWXPocOGF6glk1dNnJSTFhs4gy59SaRojMWW59OGp5oiXCmX6T5QqZguCKdDViDAT2giJLz2c%2BOOKw1i%2FttkljBYdHz3UEKjp4EcWrdLySqXF%2FAmHfOn1PqY4Y%2B9%2FEg%2FT09a054G47pzUiYIIwuIjl1h8pP%2BNwxBQgIEngI3oIXQa9LSAIVEFazyYmhrt5aK9M6a87ziTWdZSZAjKC9AUTpJvBqCM7%2FxhhqXf9eEBsxfJaeWyCutZ9q%2FWPYMGXtFtkvFrR2Qxb6Xpgl04BxUL5O0f2viDBVisltyYtvz%2FT7O%2Bu%2F%2BtNGfPjQJXbHCeKaMvP%2Bptq6gtjqNmG%2BAubCcqqiNN1yovotkunj9dLAVt0uRdc7vCzL%2FzVoPK4I8q1ELd3xMzI%2BUWNuzrq3EiNHwQZACtbvG3eW4Sc1kuyk%2FNppRcLJ3WEk3nf76qdOz1eh7G%2FKG141%2FPQ%2F2R6aEP9HQYrJLh1rC7OH7Y1Hi5dYilQIvDVUd34QnC45%2F%2FyjeNChe9SrBVwZFZ%2BawV7k4JPuQwef2MSi6rlhEjkkQJldLTE8Ynp9oNkytxzF2MIW1xsIGOqUBjg00DXJKGTB1YNp2h6Nbu8qD%2Fyl9tntEU%2FDkRSLMQXNO58Oj294n1YUGnM4W79lUyxXj6kNISqE7Ch6sFWszIS6PAVHmRGR9fZVy6OiljAdDl4eTp5IkeWjZ5kbleHBtdM5XN3VOsqFaEU2%2FinWhzz8cF68zSnuyGW7ZxQ%2BGTGhXbsyeGXH9ImhOXDSsRnRTBOnt5PZ6lx3Wt5aCwht9VDDUSqz1&X-Amz-Signature=2dead7e781d371a582fb8cf6f2d53bb4172984b7ca92971c6dee8df0eab87bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H2ZMIY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB67Ba0UJiMGC3ilTswnPFEcVptwRRs20ysO7XEW%2BiGWAiEAk488IBfIlYJIVQffVkkLHMuIUDAUF4Rzk3XQtosnh5Aq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMOVFkeuWO%2FHu7SCRCrcA%2BcCWpn0LCOvLW9A%2FcWHMIHLq%2FJjmSi%2F808waJ4jtSxgPoobYWNg7SHKyP6GvycY2gtJEWXPocOGF6glk1dNnJSTFhs4gy59SaRojMWW59OGp5oiXCmX6T5QqZguCKdDViDAT2giJLz2c%2BOOKw1i%2FttkljBYdHz3UEKjp4EcWrdLySqXF%2FAmHfOn1PqY4Y%2B9%2FEg%2FT09a054G47pzUiYIIwuIjl1h8pP%2BNwxBQgIEngI3oIXQa9LSAIVEFazyYmhrt5aK9M6a87ziTWdZSZAjKC9AUTpJvBqCM7%2FxhhqXf9eEBsxfJaeWyCutZ9q%2FWPYMGXtFtkvFrR2Qxb6Xpgl04BxUL5O0f2viDBVisltyYtvz%2FT7O%2Bu%2F%2BtNGfPjQJXbHCeKaMvP%2Bptq6gtjqNmG%2BAubCcqqiNN1yovotkunj9dLAVt0uRdc7vCzL%2FzVoPK4I8q1ELd3xMzI%2BUWNuzrq3EiNHwQZACtbvG3eW4Sc1kuyk%2FNppRcLJ3WEk3nf76qdOz1eh7G%2FKG141%2FPQ%2F2R6aEP9HQYrJLh1rC7OH7Y1Hi5dYilQIvDVUd34QnC45%2F%2FyjeNChe9SrBVwZFZ%2BawV7k4JPuQwef2MSi6rlhEjkkQJldLTE8Ynp9oNkytxzF2MIW1xsIGOqUBjg00DXJKGTB1YNp2h6Nbu8qD%2Fyl9tntEU%2FDkRSLMQXNO58Oj294n1YUGnM4W79lUyxXj6kNISqE7Ch6sFWszIS6PAVHmRGR9fZVy6OiljAdDl4eTp5IkeWjZ5kbleHBtdM5XN3VOsqFaEU2%2FinWhzz8cF68zSnuyGW7ZxQ%2BGTGhXbsyeGXH9ImhOXDSsRnRTBOnt5PZ6lx3Wt5aCwht9VDDUSqz1&X-Amz-Signature=86f3e796da247cd6f4d6ea468ec4e821663e78fc380930017768b486400aabc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H2ZMIY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB67Ba0UJiMGC3ilTswnPFEcVptwRRs20ysO7XEW%2BiGWAiEAk488IBfIlYJIVQffVkkLHMuIUDAUF4Rzk3XQtosnh5Aq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMOVFkeuWO%2FHu7SCRCrcA%2BcCWpn0LCOvLW9A%2FcWHMIHLq%2FJjmSi%2F808waJ4jtSxgPoobYWNg7SHKyP6GvycY2gtJEWXPocOGF6glk1dNnJSTFhs4gy59SaRojMWW59OGp5oiXCmX6T5QqZguCKdDViDAT2giJLz2c%2BOOKw1i%2FttkljBYdHz3UEKjp4EcWrdLySqXF%2FAmHfOn1PqY4Y%2B9%2FEg%2FT09a054G47pzUiYIIwuIjl1h8pP%2BNwxBQgIEngI3oIXQa9LSAIVEFazyYmhrt5aK9M6a87ziTWdZSZAjKC9AUTpJvBqCM7%2FxhhqXf9eEBsxfJaeWyCutZ9q%2FWPYMGXtFtkvFrR2Qxb6Xpgl04BxUL5O0f2viDBVisltyYtvz%2FT7O%2Bu%2F%2BtNGfPjQJXbHCeKaMvP%2Bptq6gtjqNmG%2BAubCcqqiNN1yovotkunj9dLAVt0uRdc7vCzL%2FzVoPK4I8q1ELd3xMzI%2BUWNuzrq3EiNHwQZACtbvG3eW4Sc1kuyk%2FNppRcLJ3WEk3nf76qdOz1eh7G%2FKG141%2FPQ%2F2R6aEP9HQYrJLh1rC7OH7Y1Hi5dYilQIvDVUd34QnC45%2F%2FyjeNChe9SrBVwZFZ%2BawV7k4JPuQwef2MSi6rlhEjkkQJldLTE8Ynp9oNkytxzF2MIW1xsIGOqUBjg00DXJKGTB1YNp2h6Nbu8qD%2Fyl9tntEU%2FDkRSLMQXNO58Oj294n1YUGnM4W79lUyxXj6kNISqE7Ch6sFWszIS6PAVHmRGR9fZVy6OiljAdDl4eTp5IkeWjZ5kbleHBtdM5XN3VOsqFaEU2%2FinWhzz8cF68zSnuyGW7ZxQ%2BGTGhXbsyeGXH9ImhOXDSsRnRTBOnt5PZ6lx3Wt5aCwht9VDDUSqz1&X-Amz-Signature=eac5ca98c24030856dd1958d9d7f2fe10c6583e20d21dc489cfb1ab65aa5772e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKU6WQGJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFioxXoh1PpqLFObfskBHAgkXvH1WmLFzKvDZ4TMECdTAiEA2KfUnAk27BQR81obC0VbIXXtsRqOuJjXex%2BDmUeHU00q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDN0okIb9jpI3gbUGrSrcA7AA0yixSV1mIWf%2Ba1RPTTVv3U1D84VSF%2B2eTsfsvMCOQvqSKDwPJKt4TRIc2LRxWo%2BtGvbIFo9EsB6UN9Cy83EZdHV8nRObuOqp2cpxooAarFuIHBstI1153zOpptCfVxGVfWuConrcHEtw8rH%2FyElX2mjaGA3SP8cxVET3HDID6u9in4kHj4yG0fH0Kj%2Bx2VKLe%2FhHZtXQtxDzO4IDXACcjVlkbZGEYI3ceEXOJOhSjGPmOe0cOsgGWcjzrT%2BkvegJXB%2FBILvb5U56McIcYX90kckKhxXk62S%2B8kkKZ%2FP9S78iRwOEEqOof8VdI0pwYv550dV1%2B9QjyAA%2FS2ZVjIcb9mCf1sSHwkT%2FgMAiuTGFPqBZVMyjW5h3NUqFNqybOXs4QeF4lJ7orKnUbl2SRgdeua6FXE8RqdS%2BOY1WTvchCXX%2BVhtrGzOvfjY89gOyNn%2BnGElqK8WhjJ%2BnT3zRLn0Cwkij7yLENo61n9OvoiQWGjgTjPmMoZprwlCnsRsz1%2BIvazXxHaTub1uImH%2FdngKeFClWED9SBMxjVvmt3%2Bhpoz4MnMLY6pSysLkx7L%2BItMAEM0UkEKeg5ox1QolBH7u55%2BSLJp1wInv%2F961y5mc84K5CJz%2BcjqvH%2FhH5MIa1xsIGOqUBwTh6ry5xIJ5G4N%2BxjUf8P5ChTMk4Oxj8GpWTkvcwyhC666ci1S3aeRy059%2Fy288mGuexLVI2qT6ghxH6kMYm%2FOe8IfXo%2FlEjpEqTHAjy2vV6f4lSoArTlcM2xCLY3L3BBGpzL6Kh2A3pcwJtlqMYoR2GkzNb%2BBgb0gH8HwWnottvYbhmZM85aecWsYmpK7KdHZDXnq5AWLjdEywVz9mR7mHG9z%2FN&X-Amz-Signature=2779ede6e372eb2da06b167079c2881f7078a9b336f5f4646cf8c647333f5b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673NZR2EC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzCfHxBcVuCMCID%2B%2FVY978%2BGNs%2BrwOijgKmskyFwYd9AIgZ88PJYwle5Hxy7XqA7daae1zfWSIukGo8pSlp8P72mcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIKwT2JRs8irrF1doSrcA2bJRBgF3zVuOWRvJZa6Kx9HQztvHt%2B0Xu2GE0yEQkjoK1aQIxIyx6CgrEicEGEi5iYSITV76Tj6KacxCUZ4CSw8j%2By9rPVsJ%2BUjLGsH8fJXSOQIqp5IdLudkvgB7CfcvYUlaXTj%2F7yWaXJfz%2FPigAXLTKqC4mWaKXoycj%2FD%2Blm%2BGcURkTSJuiDFD9gT0DpOVkyGgSjCOV61ysmRhzCmYj65E1B5EuTOxOyhfho96wvOnU59NKuysnP8otYP8FW2DgInRX%2BXQ6Lt6cIq%2FHYmnQ2FJS1rFWIfDLmtSphvxpYF4uOx9rxL7Jj0VH9IBfA8VX959qo6nEgeNE5MwVYfIFM7WgewdmOAh%2FJd7bZGkYAeM1HII1hf5FYafO%2Bj43dgZW0JDkkHWo9i6WM5b46srT%2Fjv3WIp9EqQBSG21PMjvJ6I4snUjQ%2BnbEUnVKV4rv6IMJ9Q5u4vjQkBpghlnuqgb47s0xi2jXbs6mbWl58G1ZF0vuTKMSG1OPzG84%2BPFtsYRb%2F%2FM75Wasj6aCFGXF%2Fv6jEigmAD5%2BzU%2BWYiyX2RD%2FJ%2BixufiFh60tANnq7frtJ6RcYE1w1UFU63BVKrD7IZXDIRnSSXyAzGoaTk4xMiF7HEKvlK%2FLqW%2BdD8eSgMIK1xsIGOqUBdD0CI1KZSc0TK%2FstcX2zXWnCHzVysrNcctdCbHznFegopeSbnO6DhUfc9h8Ft7svSfpg3OfemPZMom6WSiGpX2PlEfUuSXcB7BmlWCIZzucK8U4a0rJEJKX4SD5fCEZJW1mKQq6im15kDV8Z7enE5dFoYxNj7iDZRWTlF3TlsvgzuAe8n6PSEe%2FgjpqUQ35ZW5xurCTqApvXtQ%2BHVJHPked9hjIf&X-Amz-Signature=061b6fd49c934f4eb7750a5eca4d2bb91d4fe262c873099b4669242a427a5ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H2ZMIY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB67Ba0UJiMGC3ilTswnPFEcVptwRRs20ysO7XEW%2BiGWAiEAk488IBfIlYJIVQffVkkLHMuIUDAUF4Rzk3XQtosnh5Aq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMOVFkeuWO%2FHu7SCRCrcA%2BcCWpn0LCOvLW9A%2FcWHMIHLq%2FJjmSi%2F808waJ4jtSxgPoobYWNg7SHKyP6GvycY2gtJEWXPocOGF6glk1dNnJSTFhs4gy59SaRojMWW59OGp5oiXCmX6T5QqZguCKdDViDAT2giJLz2c%2BOOKw1i%2FttkljBYdHz3UEKjp4EcWrdLySqXF%2FAmHfOn1PqY4Y%2B9%2FEg%2FT09a054G47pzUiYIIwuIjl1h8pP%2BNwxBQgIEngI3oIXQa9LSAIVEFazyYmhrt5aK9M6a87ziTWdZSZAjKC9AUTpJvBqCM7%2FxhhqXf9eEBsxfJaeWyCutZ9q%2FWPYMGXtFtkvFrR2Qxb6Xpgl04BxUL5O0f2viDBVisltyYtvz%2FT7O%2Bu%2F%2BtNGfPjQJXbHCeKaMvP%2Bptq6gtjqNmG%2BAubCcqqiNN1yovotkunj9dLAVt0uRdc7vCzL%2FzVoPK4I8q1ELd3xMzI%2BUWNuzrq3EiNHwQZACtbvG3eW4Sc1kuyk%2FNppRcLJ3WEk3nf76qdOz1eh7G%2FKG141%2FPQ%2F2R6aEP9HQYrJLh1rC7OH7Y1Hi5dYilQIvDVUd34QnC45%2F%2FyjeNChe9SrBVwZFZ%2BawV7k4JPuQwef2MSi6rlhEjkkQJldLTE8Ynp9oNkytxzF2MIW1xsIGOqUBjg00DXJKGTB1YNp2h6Nbu8qD%2Fyl9tntEU%2FDkRSLMQXNO58Oj294n1YUGnM4W79lUyxXj6kNISqE7Ch6sFWszIS6PAVHmRGR9fZVy6OiljAdDl4eTp5IkeWjZ5kbleHBtdM5XN3VOsqFaEU2%2FinWhzz8cF68zSnuyGW7ZxQ%2BGTGhXbsyeGXH9ImhOXDSsRnRTBOnt5PZ6lx3Wt5aCwht9VDDUSqz1&X-Amz-Signature=45e5c6f6785bd8b43d5872313de3e6bd00a03f021430becdf51839646d337b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
