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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYC7SET%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDtfO%2FcphJ9NUms1EmKMyNVypGS3sRWi91ei3cs4mIpSgIhAO5xEw%2Bp3qOwJ%2FfIaOFgk85j%2BH%2FzZ%2B7xBkTEnhvYivNTKv8DCF8QABoMNjM3NDIzMTgzODA1IgwdZ752vlePfHteDBQq3ANeycIcK84%2Fri8V1rwZVAO%2FGRndt6BnfbtlK8yp8UZVGZR9dKMfWHqjNPbZLlt6GeV%2BsJvvtXz76KYmTPw6GbXMNL9Wchg4Yot5Ai4gHFpbIaCbnLHF0adLmgIs5wYZeinbteQk8nY5qlV0WC7KBv9KAOykutrRJCF3GNA3UhobSQE21PUnj0hbYyS9MERcmiaeM55ufbJwj9aw3XZBtzweJzBuTam3v0fATKLni1ofRm7HklR%2B3oD9JBpSCQptqR5CMCmYXlySO5YCXJFgjXmWrlcW3CpoQM7Q9FF%2FL6mQTd1t%2B3cmTFnVl%2BykjrU8R7l2UlMpporhc1I8DJez6DTTMTVC0K%2F8VtKLLs3ibAychjGSv9OwKu2I9okNIQ7bINoQr%2FnOWJNEGPkKeZ8aBOKO6ByBwIItLkAdMb7yN1%2F25WgGyUfs98%2Fnnvc6O50yGWl8m6TOSVx9EsR3WqntcnERPsAhli9XHj7f2kFkjbdnv4L0wjp4PcYPcc5MsAvUpjwVLDTR8D4klOUftb%2FMfh447znyA7XRtmMQysiLtvDflWLpgNuvAhdYq03MhrShDo0wez%2Bd78fT7oCC5KEg8uO8uDLO28u39tusVrYZCNjGBdDKTyDKV%2FNDB%2FfONzCMycDCBjqkAZ42Faasjfss6k9%2BmXsMpVsosge0KuKejsSJOj090fRFlc4VNxaBZyncpxN6LWO7dX9P%2FXL5f0It3wS6lwecYt1rZ2qwkfETztMUIZvJJUY%2FTOgIqt2LtMMi1p7bPGfjNGVoCHea%2Bsqaop85r7%2FBBe3xGuxqdoR3Y9Wg%2BUUXVj8fuKeqHShwze2flnFAUNVhK4gwJr%2Bsioq%2FMWWH0%2BNcwAygeDne&X-Amz-Signature=625cf0a35142777e9d6393f9fc9737ef1cc8edae30b5332b2ef5f37cdc239d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYC7SET%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDtfO%2FcphJ9NUms1EmKMyNVypGS3sRWi91ei3cs4mIpSgIhAO5xEw%2Bp3qOwJ%2FfIaOFgk85j%2BH%2FzZ%2B7xBkTEnhvYivNTKv8DCF8QABoMNjM3NDIzMTgzODA1IgwdZ752vlePfHteDBQq3ANeycIcK84%2Fri8V1rwZVAO%2FGRndt6BnfbtlK8yp8UZVGZR9dKMfWHqjNPbZLlt6GeV%2BsJvvtXz76KYmTPw6GbXMNL9Wchg4Yot5Ai4gHFpbIaCbnLHF0adLmgIs5wYZeinbteQk8nY5qlV0WC7KBv9KAOykutrRJCF3GNA3UhobSQE21PUnj0hbYyS9MERcmiaeM55ufbJwj9aw3XZBtzweJzBuTam3v0fATKLni1ofRm7HklR%2B3oD9JBpSCQptqR5CMCmYXlySO5YCXJFgjXmWrlcW3CpoQM7Q9FF%2FL6mQTd1t%2B3cmTFnVl%2BykjrU8R7l2UlMpporhc1I8DJez6DTTMTVC0K%2F8VtKLLs3ibAychjGSv9OwKu2I9okNIQ7bINoQr%2FnOWJNEGPkKeZ8aBOKO6ByBwIItLkAdMb7yN1%2F25WgGyUfs98%2Fnnvc6O50yGWl8m6TOSVx9EsR3WqntcnERPsAhli9XHj7f2kFkjbdnv4L0wjp4PcYPcc5MsAvUpjwVLDTR8D4klOUftb%2FMfh447znyA7XRtmMQysiLtvDflWLpgNuvAhdYq03MhrShDo0wez%2Bd78fT7oCC5KEg8uO8uDLO28u39tusVrYZCNjGBdDKTyDKV%2FNDB%2FfONzCMycDCBjqkAZ42Faasjfss6k9%2BmXsMpVsosge0KuKejsSJOj090fRFlc4VNxaBZyncpxN6LWO7dX9P%2FXL5f0It3wS6lwecYt1rZ2qwkfETztMUIZvJJUY%2FTOgIqt2LtMMi1p7bPGfjNGVoCHea%2Bsqaop85r7%2FBBe3xGuxqdoR3Y9Wg%2BUUXVj8fuKeqHShwze2flnFAUNVhK4gwJr%2Bsioq%2FMWWH0%2BNcwAygeDne&X-Amz-Signature=a388aade8b26a1b840250c179a15e958aa41c5dca6242329bee21825b828de6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYC7SET%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDtfO%2FcphJ9NUms1EmKMyNVypGS3sRWi91ei3cs4mIpSgIhAO5xEw%2Bp3qOwJ%2FfIaOFgk85j%2BH%2FzZ%2B7xBkTEnhvYivNTKv8DCF8QABoMNjM3NDIzMTgzODA1IgwdZ752vlePfHteDBQq3ANeycIcK84%2Fri8V1rwZVAO%2FGRndt6BnfbtlK8yp8UZVGZR9dKMfWHqjNPbZLlt6GeV%2BsJvvtXz76KYmTPw6GbXMNL9Wchg4Yot5Ai4gHFpbIaCbnLHF0adLmgIs5wYZeinbteQk8nY5qlV0WC7KBv9KAOykutrRJCF3GNA3UhobSQE21PUnj0hbYyS9MERcmiaeM55ufbJwj9aw3XZBtzweJzBuTam3v0fATKLni1ofRm7HklR%2B3oD9JBpSCQptqR5CMCmYXlySO5YCXJFgjXmWrlcW3CpoQM7Q9FF%2FL6mQTd1t%2B3cmTFnVl%2BykjrU8R7l2UlMpporhc1I8DJez6DTTMTVC0K%2F8VtKLLs3ibAychjGSv9OwKu2I9okNIQ7bINoQr%2FnOWJNEGPkKeZ8aBOKO6ByBwIItLkAdMb7yN1%2F25WgGyUfs98%2Fnnvc6O50yGWl8m6TOSVx9EsR3WqntcnERPsAhli9XHj7f2kFkjbdnv4L0wjp4PcYPcc5MsAvUpjwVLDTR8D4klOUftb%2FMfh447znyA7XRtmMQysiLtvDflWLpgNuvAhdYq03MhrShDo0wez%2Bd78fT7oCC5KEg8uO8uDLO28u39tusVrYZCNjGBdDKTyDKV%2FNDB%2FfONzCMycDCBjqkAZ42Faasjfss6k9%2BmXsMpVsosge0KuKejsSJOj090fRFlc4VNxaBZyncpxN6LWO7dX9P%2FXL5f0It3wS6lwecYt1rZ2qwkfETztMUIZvJJUY%2FTOgIqt2LtMMi1p7bPGfjNGVoCHea%2Bsqaop85r7%2FBBe3xGuxqdoR3Y9Wg%2BUUXVj8fuKeqHShwze2flnFAUNVhK4gwJr%2Bsioq%2FMWWH0%2BNcwAygeDne&X-Amz-Signature=ab3d71b7baee41a823ab5df91fa6e67065dafe41854701672d4e336f2a15747e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKGRJIPE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC6%2FgIL76iCNOGqaJk8AxgiElCzMVivGoOb6RDHDnAyRgIgDtRjh2Vm3wnvgj3D8oj%2FqV5Q%2BdOBAc7Cao8uWXD4nqQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH%2BXdHla7nR0S48qlyrcA%2BoMeqUYcuKJTd09xUHslRldQvor9i8WQbylgChUWEGbOQbLykrlHusBJ1bNrHnfGktkXHtPxAoBACCfSs0BMsKwCXYIS9B0MpRVqiVbSD2E2vrnyvFnuKqBJV61nVBTYWlTQ524jmq2ZXkebKi4trpvuOkVEi76D43qIEa%2B0fot7s3%2F1Pal%2FvqLGIEZcRFbJ3SxfYH5OC2fJ5DwbwOwZRvcdaeY7jdrFfdIKRbQmpXXDQR0qXU7xR%2BvMviLnzDuSmgW26N0Uu2l1Che6ecGFtTiwscj0PDdHIn5kW3IhZkwCK%2FtSuy9yJV5%2FuDgeagcXlxTDCpTQtGTIVBOX%2FQS49OupX25m1XwhbNbQU6Jll6v3j8Uxq5vGq8ho9ZO%2B104mX7QzoVC1y%2F0oNGFm2QfsEq0oABXQDgUmPZUDWXOUyc8AhIV6ONofNKfFaUTRQoVFbOkMTsirglPQtXu5O8EEEIJIP86A9WzE2KyTqqUj5TINW%2Fay3PXQVB3xcp2uxmmyhv3SllPGqbrRZR%2B3H4HsOh7PrmkotdGiOoBe6mnFk3XMFIXAgU8GD3WahdCrfVw0GHVM2GvgWVlbwjEadmaZ4IC75yc1lxdskhu3DFQk1oyMTGZ3cGD3zt6ldm6MIzIwMIGOqUBzvlkYYA8TnbSJNio6%2BoVT2LGsxx8bRHVW0vSwkepK7NKc%2BjzgsDNI%2BV7oImuwecji3gemciECe7ZFcNqVo4ava6aZCFO7aHwd%2FF8tkrxKUJWx9RuYhIWVmMqKzdRTneljK9AYA4BvUmfO8NAt8D%2BLeQabwa%2BWikkdb3Mq%2BpQUjfKtjQHpuowzwDCSskQwvv9GNd%2F%2Bpn%2Fiu6zUeUzdbXXa7k8YagL&X-Amz-Signature=fcb3ddde89e54aa051a5e75da349175bb9a4390e886a7cb45642f6e405e4b9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJKFTBYS%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFgbLiviJNY4cb6wZhoj2yUcbYnU9W5wFj24lIa8mtZ4AiBG2H6WgQBCHSknWEMvKLQQTZ42E93BFb9lJz8R7e5zeyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMgo0Xiw%2FZENr7v0YuKtwDhnQAB1U3DqLv9JJJxglahEG7hgosX2%2Fd6xH5pl4QaaMaDlwJGuNsUO6k5LUNA7s8XF35Uf4lUmLigAcvaBsn8tt6hvPfh9mj56mHqWd%2BPNzKKO1dMGobm%2BV%2FUCWlZaR2dMhRtMHsmCfZ6T8kCCu4oXt01i4UQ0FofGz6tqWkUAURO7ihxN7itOE02EcMlom5odHz8bm9s7gi%2FY7MawfS%2B1QnpIokr1DkVQZTMp%2BmqdooiKdMSYGGl4xKy6VXCqMePq8xyNozHLfxjKJxu76HcKXRv7CFPab9SM0euvrYMMiTtW6vlLDDp%2BjNe%2Fth%2FMzXPtuF3PquGIPSusWQGNa6wzELJIV%2ByjpW1Hbj7OR3BhnAjVLrkVerOxSDfyqWDGxhIUKmVoyqBAV5KkGbDKPRdcHF0uIp2bIX5n4BsOnpxUGpY5tL6YwSJa0WIUUu4XUq%2BGvQm%2FM3SCB0fdpiaGmAtqgWGiNGNpcROO0Jl5Hp0sVdfS7ZyPmreqQmPrV%2Bze%2FikjckZiWWiidhpW9%2FZ0ZdoIjJqxU29sZhxf6z61rQCsuyK%2FvKHGAjqGUH%2FCt4LES9jB9NXBzlXWilAzKFF4qZchZo1bGdQlGuFTeZuRh26zMAkAfxF46fuDM6JNgwqMnAwgY6pgHy6o696pcVhG4%2F3Dir4%2BC54c8kg2n2A8XWpce423cE9CEPEg92ztQDQN2qpa58ol0PfmMO4J9Hhp5KOlW%2FZwQ0myyz28D46hFGUgWmP1ASa5EeYM9KS8qf1SsRiQYHA%2Fea9R6V1AHgCeuQ%2FZ5IvtzC2J8nWz4O7E03mwxdzoFLQfQirMm%2B6R2ZH8lhpENoN5ayrXbxGsH%2F6eXPycjLcWjgon1dsIEp&X-Amz-Signature=f4b1b77a182973a453fba43e49cb7c19827113507443b916f0c15f6df9d29eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYC7SET%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDtfO%2FcphJ9NUms1EmKMyNVypGS3sRWi91ei3cs4mIpSgIhAO5xEw%2Bp3qOwJ%2FfIaOFgk85j%2BH%2FzZ%2B7xBkTEnhvYivNTKv8DCF8QABoMNjM3NDIzMTgzODA1IgwdZ752vlePfHteDBQq3ANeycIcK84%2Fri8V1rwZVAO%2FGRndt6BnfbtlK8yp8UZVGZR9dKMfWHqjNPbZLlt6GeV%2BsJvvtXz76KYmTPw6GbXMNL9Wchg4Yot5Ai4gHFpbIaCbnLHF0adLmgIs5wYZeinbteQk8nY5qlV0WC7KBv9KAOykutrRJCF3GNA3UhobSQE21PUnj0hbYyS9MERcmiaeM55ufbJwj9aw3XZBtzweJzBuTam3v0fATKLni1ofRm7HklR%2B3oD9JBpSCQptqR5CMCmYXlySO5YCXJFgjXmWrlcW3CpoQM7Q9FF%2FL6mQTd1t%2B3cmTFnVl%2BykjrU8R7l2UlMpporhc1I8DJez6DTTMTVC0K%2F8VtKLLs3ibAychjGSv9OwKu2I9okNIQ7bINoQr%2FnOWJNEGPkKeZ8aBOKO6ByBwIItLkAdMb7yN1%2F25WgGyUfs98%2Fnnvc6O50yGWl8m6TOSVx9EsR3WqntcnERPsAhli9XHj7f2kFkjbdnv4L0wjp4PcYPcc5MsAvUpjwVLDTR8D4klOUftb%2FMfh447znyA7XRtmMQysiLtvDflWLpgNuvAhdYq03MhrShDo0wez%2Bd78fT7oCC5KEg8uO8uDLO28u39tusVrYZCNjGBdDKTyDKV%2FNDB%2FfONzCMycDCBjqkAZ42Faasjfss6k9%2BmXsMpVsosge0KuKejsSJOj090fRFlc4VNxaBZyncpxN6LWO7dX9P%2FXL5f0It3wS6lwecYt1rZ2qwkfETztMUIZvJJUY%2FTOgIqt2LtMMi1p7bPGfjNGVoCHea%2Bsqaop85r7%2FBBe3xGuxqdoR3Y9Wg%2BUUXVj8fuKeqHShwze2flnFAUNVhK4gwJr%2Bsioq%2FMWWH0%2BNcwAygeDne&X-Amz-Signature=f757c6a9d672e0ade6e3f31d51208d2a8a92622f9e396800487e93cf0b4609ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
