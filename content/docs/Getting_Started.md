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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IH7YQP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC92hmIFMKXot0Y%2FtIHpDXbgVzlfuJcwZIqEUMMfYEMZQIhAOiWqjKvwHzGTr%2FTShynJYcHCUjntpgfxwrJyGNeT939KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoobrIQscnEm5CnhIq3APR4WqdaGQAJfJvc0Cc5iIgL2ebPaC4tuvpMKGTqYOGYibfckxx0FXV4DUs7uR4Y5rXv1Zd8DJo%2Bi051pJI4lEvXqr527yQ9%2B%2FzR%2FPIjbPfZ%2FH7o43P%2BSB0iS2Cjg7SOGMT%2FcULOQDfvzi5bk5HjVE5bhWrpYQBlsv3dfmKs5Sro9DTFeBp%2FuIRF3k5refXhK1mux%2Fyos57BhNCmtdoZ457kCKuFgp%2FJEUY5Ky1MKVCJz9PrkUax0z6rpiJu3dl5MuNY%2Fp3tNRsLFuQxqMhzUlpPMZVQF7G%2BPIRi5ydF%2FcCxcCd887GfRZbpr3N57ThjkRJkRi6AAzDlTwPYdZQSpQdEQ8v%2BuGCd%2FegVO716ZkwRnl0P5qM7uwLDJ8O5SPwLCVPDUVXQ3vMm0wI3R9MQ8hMUFUeZSt3%2F%2FNHE478bPqZ%2FOFJu5cxNJvmH07qLneUw8ZgXiiK1%2Blam4TXFMSvb6kgJ9HRNBlvHSrYgNgLPiRNED0dAj%2BlIgHrC1zjECZI98ZIc5oUUP0ZpINN0lPqB8iFZ%2BFuTzxCMCpf7dOCWgrqtJjrkqox2%2B%2Bj0N%2FycquLbqseHqJjvwwb52xDH6YQF2%2FOTL8X3rypclgptaolWXbROtuuakuWszq7UI6WoTClp%2Bi%2FBjqkAf0wbO0%2BXbquEALShbTRdtHDOX6gDZpVKW40ZWqhcE680q%2BKQTit8JPuL2NWKFKMDXLxEUYlPm8VSiy%2Fqti8a%2FDOhQvl4ZQY3qaaJzRr%2BztawBGV67w5nD7UdTLp2i%2FGSRVoOZhFkw8o7qdiLScjQDMqGeJpFtNLuAkSTDaJJI1PgzjsQIHSkAQFvH%2FC%2Bdegio6cZU4z6qFN7iThxVTFALxRp4Qb&X-Amz-Signature=41584df85fe5d2c183618680fcfec13d6d22e5dfc626bd1b2de6edcd8d623abf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IH7YQP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC92hmIFMKXot0Y%2FtIHpDXbgVzlfuJcwZIqEUMMfYEMZQIhAOiWqjKvwHzGTr%2FTShynJYcHCUjntpgfxwrJyGNeT939KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoobrIQscnEm5CnhIq3APR4WqdaGQAJfJvc0Cc5iIgL2ebPaC4tuvpMKGTqYOGYibfckxx0FXV4DUs7uR4Y5rXv1Zd8DJo%2Bi051pJI4lEvXqr527yQ9%2B%2FzR%2FPIjbPfZ%2FH7o43P%2BSB0iS2Cjg7SOGMT%2FcULOQDfvzi5bk5HjVE5bhWrpYQBlsv3dfmKs5Sro9DTFeBp%2FuIRF3k5refXhK1mux%2Fyos57BhNCmtdoZ457kCKuFgp%2FJEUY5Ky1MKVCJz9PrkUax0z6rpiJu3dl5MuNY%2Fp3tNRsLFuQxqMhzUlpPMZVQF7G%2BPIRi5ydF%2FcCxcCd887GfRZbpr3N57ThjkRJkRi6AAzDlTwPYdZQSpQdEQ8v%2BuGCd%2FegVO716ZkwRnl0P5qM7uwLDJ8O5SPwLCVPDUVXQ3vMm0wI3R9MQ8hMUFUeZSt3%2F%2FNHE478bPqZ%2FOFJu5cxNJvmH07qLneUw8ZgXiiK1%2Blam4TXFMSvb6kgJ9HRNBlvHSrYgNgLPiRNED0dAj%2BlIgHrC1zjECZI98ZIc5oUUP0ZpINN0lPqB8iFZ%2BFuTzxCMCpf7dOCWgrqtJjrkqox2%2B%2Bj0N%2FycquLbqseHqJjvwwb52xDH6YQF2%2FOTL8X3rypclgptaolWXbROtuuakuWszq7UI6WoTClp%2Bi%2FBjqkAf0wbO0%2BXbquEALShbTRdtHDOX6gDZpVKW40ZWqhcE680q%2BKQTit8JPuL2NWKFKMDXLxEUYlPm8VSiy%2Fqti8a%2FDOhQvl4ZQY3qaaJzRr%2BztawBGV67w5nD7UdTLp2i%2FGSRVoOZhFkw8o7qdiLScjQDMqGeJpFtNLuAkSTDaJJI1PgzjsQIHSkAQFvH%2FC%2Bdegio6cZU4z6qFN7iThxVTFALxRp4Qb&X-Amz-Signature=612b1b266db6d8afdbc8d8ecb88309691b489372b55bc4bb62d58651df8f4280&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULUU75F%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIF7rGnHvujwE%2BQuLpPif13aPtiRJtNmXfotXJg3KQqrpAiEAiZgGaDsNdlWpYjqk29vXTz3PbW9BEw6R695i0y2V%2BToqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDWdFv5P0qH3Shu3yrcA0BpCpItbOqlSTL52iDg1eXKLb4LHDr2DF0x2igUbenDrZ13gwyVwpL0%2FeVZvlwLtDr6zaatnfAv4VeimgpUX5YPS9eM6RoGwcn6ueKr9geHAlAVolvE7YRE23JVp7obmbeXacsK1CX7W1CuvQrrug30wG1%2BfovMQpJJilQ20YiESQb9v4pFZdRN1AYduieQEGvSDyAyvOcx1sgOOjKDeSMz4s5bcaPatiYPs2EBYz0wrA4pYb71B2ST9FAUSM8I8B%2FgLnRZXvPRkBCZB24xyCd9i4VhKS4oly9GZV6eSM6ayqg755H0xrN%2BQQ6NpNqSV0eSUDJMfIpKhXwUprq%2B0STyHvDLbbydX5ooTIk%2F%2FXPmqUvEB0vuEw4iTPoN0RA1xks0osP%2BkrEoVh%2Fn10eLOYR%2FMrY39fzVIgB2BNunpTi2c%2BrmmmnfdfolEa72S6m%2FhMhvVuPLW92ZEB95wAJYpdR6KI06SY9UkoeBLL8hjh9BxD02hhjx6xgQc4fODhAwIyue4UahDqyUpPylUQwaKRHj9QpN%2BRwZxYydzaN7gAf1Vw6gphekIHFU25F5PYXxrAUoB0ejFxfnIx760XrF%2F%2BNvVXY%2FcI821SWK3cLfk9dEcqDASZpwR4qrydzlMI2o6L8GOqUBTEDunHpHcyScOov5sdissDmV%2Beri9Q3zDoS9t%2FHcAK5RTYhNvrg2YK9PxHG3SVFQE70H8dEVpJDHLRSP%2FMjY65jAM775TrhHuChuQuvJA%2B572Rr8z3%2FOpQBp5%2F76MVYEP2ioeZX94ifytAPJegAVIDb4TC9LT5sY6mD%2Fk8cPDa0QjWNKjs8kMGLlPBkr%2BdH%2BZirwpamN6oKI3idgbVmZ1eiERmQt&X-Amz-Signature=f4532973efefb6a4ba1ede9696fab485f6abdcb5be832a25b9713cd5bed5a97c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZ2LDQS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC5r8rmRt0cJcChWr5bHBP9LM%2FqF7rCbtEZAJIk4tpAuQIgCnCHM9J7vbU9nkgyLGgvyy48ShEdXiZENG7kx%2Fv%2BtNoqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgyrTTKoUV35507hCrcA94bNws8J4RI9e7L22UjlUUvBM9UKVZK91s%2BVak6%2BY%2BX3paum%2FMnLru4wWUtDXTCkX2xiKF1hocYiwfTpRz9KuDzeUCb4XSYq4pBeCi1ACTVQ7GBRA%2F%2BvjIuGRs8cFasabxEw0euWvxa4ej5h9Aexu9T2B8q8mYI%2BYRjOPssj7R9hnzvp26DSp5UHqEH7ZRhS9eMLhm6hiU7rRu1wmJOzsjtjq9heJ7z1oszXhVjV2mpgsfl96P7ja4wUuCeELqVO2rxopeJt1sJOfTzLo8HIyJD589dISQxkpZKajKUC2BMLLtrPxQ3klY5QQCZuj4On6xOL9JxkZgd1FHR4vVVukQG8ytJLn3V9LjnHZ%2F2F2VIvxKYsfNHwzj1o%2FmQ1L5y9%2FcnKwuUxOo5EmnheSX9%2BFreC8s9yHrNpbmFgKYZKfpc3EG7LGUqCJhcISPU50Uzdc1bSxoQgZshq7hoOTTw2NWsZf%2By4hf8q2Sk67fYWfGItTKmvZI0aHzSPHX%2BRqFZx8%2BPf45%2F9haDJ%2FpQRfQPYkXdKP%2B7oeHf6ap0y6wTeCyoy%2FLIgof9drZw1%2B91%2FB6qMBawWQCmDWtDEqDLQpQdXicJ9qp4ZZ2iomnH28eVjckv9JQzKX7FYILz8IdzMI6o6L8GOqUB0zjAZ4eiBvqrbMj44EQVN4nReYmsC9r1zFGfhGoXXQKr0vcXYjLkNaopjlxaIqdW3gBrIprm1j35Sa1KbVEnMtZESAWnVP8p8q1CU%2FJRenRIPTKqSWR0CVRXqAr1%2F726hCedr2oT5O5gqMcrz%2BGwzatcmGI5prRFeejYTFkuC7k2ELDFxD6VWIagrRpI72sg%2F%2F2JtMcLCSrcVIkdbGotEgiVZkI%2F&X-Amz-Signature=cfc63e83464be9eb7f4cfc7a8d2ed50bcd8c0b9ed317f87ce5be3eb372bc9822&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IH7YQP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC92hmIFMKXot0Y%2FtIHpDXbgVzlfuJcwZIqEUMMfYEMZQIhAOiWqjKvwHzGTr%2FTShynJYcHCUjntpgfxwrJyGNeT939KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoobrIQscnEm5CnhIq3APR4WqdaGQAJfJvc0Cc5iIgL2ebPaC4tuvpMKGTqYOGYibfckxx0FXV4DUs7uR4Y5rXv1Zd8DJo%2Bi051pJI4lEvXqr527yQ9%2B%2FzR%2FPIjbPfZ%2FH7o43P%2BSB0iS2Cjg7SOGMT%2FcULOQDfvzi5bk5HjVE5bhWrpYQBlsv3dfmKs5Sro9DTFeBp%2FuIRF3k5refXhK1mux%2Fyos57BhNCmtdoZ457kCKuFgp%2FJEUY5Ky1MKVCJz9PrkUax0z6rpiJu3dl5MuNY%2Fp3tNRsLFuQxqMhzUlpPMZVQF7G%2BPIRi5ydF%2FcCxcCd887GfRZbpr3N57ThjkRJkRi6AAzDlTwPYdZQSpQdEQ8v%2BuGCd%2FegVO716ZkwRnl0P5qM7uwLDJ8O5SPwLCVPDUVXQ3vMm0wI3R9MQ8hMUFUeZSt3%2F%2FNHE478bPqZ%2FOFJu5cxNJvmH07qLneUw8ZgXiiK1%2Blam4TXFMSvb6kgJ9HRNBlvHSrYgNgLPiRNED0dAj%2BlIgHrC1zjECZI98ZIc5oUUP0ZpINN0lPqB8iFZ%2BFuTzxCMCpf7dOCWgrqtJjrkqox2%2B%2Bj0N%2FycquLbqseHqJjvwwb52xDH6YQF2%2FOTL8X3rypclgptaolWXbROtuuakuWszq7UI6WoTClp%2Bi%2FBjqkAf0wbO0%2BXbquEALShbTRdtHDOX6gDZpVKW40ZWqhcE680q%2BKQTit8JPuL2NWKFKMDXLxEUYlPm8VSiy%2Fqti8a%2FDOhQvl4ZQY3qaaJzRr%2BztawBGV67w5nD7UdTLp2i%2FGSRVoOZhFkw8o7qdiLScjQDMqGeJpFtNLuAkSTDaJJI1PgzjsQIHSkAQFvH%2FC%2Bdegio6cZU4z6qFN7iThxVTFALxRp4Qb&X-Amz-Signature=261b6238c5e71aabd78fece69f0b6f578756d7c09bde1b2cbbab9de75ee2ec8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
