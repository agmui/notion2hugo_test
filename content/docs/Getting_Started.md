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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QL7K6HD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfhV33TSIa%2FKgyIDKbGNYKXjpF5T6OaV7esoKCJh5lUAIgZH6%2BrrJDRQdxJM0wl5lLaK%2FxS0WyPQyS9sF47LEF5r8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrNGt3b8QBa%2BA3AeircA8Zf7Ser3VmzjovhCOEIX%2FRb3Ccg1R%2FzvVpdMRvynnVxALjLBKZuFKpXwQHn6XPMUM52RbQLV6IOp8bhgzGmN8Cy7nQzsS0zG2I%2FIh5d0HmRJBmk%2BWyzSPK%2BReTmLnAN%2B9jgSzTUnesM2OlSXFE%2FcPkzW4JGS92VlEBj41mjlaWBhDB7Z7SnmWngIYhUglYClKNy0dxjTJfpo%2F%2Bu%2B%2FPnTGiOVKshcQuYHnQB8u8qayz1wI6BvPEsBUDvNyKEwfCUkhpLN%2FFViISmLtGm4WKxJgH6QVlNWK0Qjz7HMN2SBq4f6FUzYldfsRjLZAajRndVNvEFoeaA9yy14dvObq7NwNEM8zd8x20NtNR2b9isCjWt8TRegR55SwlqEyCl2jJVa4e6AwsiNi6oHsAkJ5wSfLs6ImtkbntRQGgMZPG5sXzyGEtUkpk7tv8YK%2FD19yFo2POKzD8TNHD%2Fcqmj%2FfcEjx3kgBo40BmtHaseAFySpnZK8pXExvkMMn16v%2BqGBqRxoiduQc1mnQCMtXJKqkbp8eQM8kvT4IBNFBOxiH7qrPxck12sDtVFp8l4JAU7BW4Cnpcos7v6REsg90jqst5WKbeiaiTl%2B9%2BBcBcJ1Rm2YGCirRIqb36Eq82AOySMMJjS8LwGOqUBunV1pDz5Od0%2Ft4I05S7pPAQKyahftD%2FYFHZb0BsVEoaVLFLp7qJk9BLHza0rb8m%2F6fj%2Bw8Y11HNergma3KqHWIH71Ei2z%2FX1678UoznFopf7jjsj2Jiy7B2efSkAoCvQT77J2%2F0Rau7r%2FwshE60JDS1Fl7rRWVsT4arWcUqb63J13PzHgdIb5fS00gWkY0X0gsHDISea6z9Y%2BQUF61Vouj%2BnxCGh&X-Amz-Signature=91612bc8a3ba6a6edd34c255adb477a9c23a5a403cfac61950b2f32950061de2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QL7K6HD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfhV33TSIa%2FKgyIDKbGNYKXjpF5T6OaV7esoKCJh5lUAIgZH6%2BrrJDRQdxJM0wl5lLaK%2FxS0WyPQyS9sF47LEF5r8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrNGt3b8QBa%2BA3AeircA8Zf7Ser3VmzjovhCOEIX%2FRb3Ccg1R%2FzvVpdMRvynnVxALjLBKZuFKpXwQHn6XPMUM52RbQLV6IOp8bhgzGmN8Cy7nQzsS0zG2I%2FIh5d0HmRJBmk%2BWyzSPK%2BReTmLnAN%2B9jgSzTUnesM2OlSXFE%2FcPkzW4JGS92VlEBj41mjlaWBhDB7Z7SnmWngIYhUglYClKNy0dxjTJfpo%2F%2Bu%2B%2FPnTGiOVKshcQuYHnQB8u8qayz1wI6BvPEsBUDvNyKEwfCUkhpLN%2FFViISmLtGm4WKxJgH6QVlNWK0Qjz7HMN2SBq4f6FUzYldfsRjLZAajRndVNvEFoeaA9yy14dvObq7NwNEM8zd8x20NtNR2b9isCjWt8TRegR55SwlqEyCl2jJVa4e6AwsiNi6oHsAkJ5wSfLs6ImtkbntRQGgMZPG5sXzyGEtUkpk7tv8YK%2FD19yFo2POKzD8TNHD%2Fcqmj%2FfcEjx3kgBo40BmtHaseAFySpnZK8pXExvkMMn16v%2BqGBqRxoiduQc1mnQCMtXJKqkbp8eQM8kvT4IBNFBOxiH7qrPxck12sDtVFp8l4JAU7BW4Cnpcos7v6REsg90jqst5WKbeiaiTl%2B9%2BBcBcJ1Rm2YGCirRIqb36Eq82AOySMMJjS8LwGOqUBunV1pDz5Od0%2Ft4I05S7pPAQKyahftD%2FYFHZb0BsVEoaVLFLp7qJk9BLHza0rb8m%2F6fj%2Bw8Y11HNergma3KqHWIH71Ei2z%2FX1678UoznFopf7jjsj2Jiy7B2efSkAoCvQT77J2%2F0Rau7r%2FwshE60JDS1Fl7rRWVsT4arWcUqb63J13PzHgdIb5fS00gWkY0X0gsHDISea6z9Y%2BQUF61Vouj%2BnxCGh&X-Amz-Signature=b481be92921b7b4e10fbe473313c9dcd307b6cef8d594cbda2d79f10eb5b4be0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLV5A4U3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvRRLPPUAlpNRRXL0W7cqMLHncnJNdR64DFJkKQ9CcfAiEAzk2sJMQDd%2B8FynqJGCqAXNCpraVNx0Rzev0FwVqiqEIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl%2B7h2SBdGQfLZghyrcA5T8Q2fxFC4KnhnH9PkGvh%2FOHFAO0lweCbbqNgdUxRjh1tPEyndJ3jx7JS96IZg0KpRLCLI5p3xYNuFCYzt5rIlpbcp5hiKUF2HqUU6UzS1V%2BF6Hqja01ejfq6TUz9ML4SuNSO3g6mNMeeePZB8neRu2I411v8BSeVE9aCi3dXRWIlTIspSiTMqfX2N89nt4jngjdk70yYMssaMTHZbNwtceZUFLhuvsZSj6vL%2FGu9wwSwBe%2FOuO%2BvalZ%2FTqhPt%2BKGIhmMuxaNrUsqnpP2u053%2BLR9J4ppPJrp7jBTNcstrqENgqZgYNZpQf7Y9b%2FP0qDARgn%2B8%2FKUOElPKmr5DSdEKcKWK%2BiPkPP8dguB2EYBQtkzfo5eW95HyLzP1gXMaN%2B5CXarlKl5pTxTU2Ahyy2juN2zrSTl95vCmjTIv0IXHXuXE77MODMs8sC0rheg3iTTWldDXpXQ2NpgqBFtNZ3N9rKVekaPHyrAGsDX7VSr2gNpedFOlDhfo6D5BafPO%2F6LAP0yoLL95QxX8Oizl4FJ1eDqF7HpuIk1TjyoEOmT1hCKb%2Bsj7SzeC5YMK%2BAjYq7Yc9%2F2EduyL4XT6JPXfHhuHZhgC3r4AEitxmPlyC9%2B3I1cJKA%2B319vSpNvWlMOvR8LwGOqUBaBp9WA1RW44ibATYHmZTMh6NWop882jBTrTGbNFo6Kq%2FIfQJyr4asV3rkSBt5c%2Fi4FrQvibTG3YLDVJmXZBRC4qL2SgS1cLN2TopOm%2BT7vX7vJGEoJc0tS%2BJgwTlXtLbYg9E0cKbuTkrBmEjxqKdtUQvxc%2BRCB7kuuZpXe1uVksDSe6%2B06UmBiuf2TnTtD1DRmAYpQgp%2Fuauub1Dn8kD%2B7iCP2Gu&X-Amz-Signature=4572b7d77f4ec7cf4f91d46dc411bd77477e740be063e83fb58736df6540bd6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQMWT4W%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAc7CDD6n0frvVwmBw2ajgMaBpoHR7RbulMX7c0Nu1E8AiBp%2FgUk3jBOKK5bUx43nfLHNmd67VGfUcXmmP9KzpMsBiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMviKl5KOIYfjOrCgnKtwDUy0X9sRrZqQOJLGuxLsVm6FYO6otxWhkKVcZlXcYrQXsU7c%2FhzYjn1T0pqmC1j%2FQ4BWD566%2BiOgPhc70j9nd3g1JslBRERGo9MIfqhvyCdVktXBgas%2FND%2Fczm7V5aPWRUjnkOzhJGFyOWgcI1v4pm6mtN4aF%2B4DxsWBomVNg49g54onVfXljtsZpRx9EJV%2Bb9Ef9U5wSCfsPiR%2F7VgvxI42TJOg4pwIEGI4gNx7X6rz4tU%2BMw2KocMnxmLz7ykM34BOwBf6rfpkArcqQDDkmjn%2Fy%2BPc3r1jB2Xghc3JRuPzghPQN%2FwrqxO9t6%2BwtVkN%2BN7sXyme7P8M6yHMyk3pM9vH1pKDmRy1DVHxVg4awsXIwxYgufeUC1cEZbPVgZpeV3NRC6CCkzYNgq2IyFNYhYU%2B5vMGDYfLk7riwMdI0AVWnPiB2AVMuqp%2BFkwDRVn8Z5prDPfWyS7f5aRJ4eMAIc7CCJIbfLlzt1In3M1z6KkcasKdg8seDinLd0MHif3e%2Fm1qnRy94%2BM%2Bogf7XG0jB7oFYIOgBXb6NuD4VyrxF4WXAW34%2FIm84ZpMMhHxHGXkUlFA%2FaK7tKV5FJIWuIir1Vm7JtiIKbShInkN%2FXqtjzLYlfzo07CMoYOfg2wYw09HwvAY6pgFqI19Vv2W2pidLUGTtnyMzRx7MbL9TTAOxYcQwSUvzYRCOg6NCta9L%2BCxVAezQWZ0f2Mea73lDcFcGxCJG%2BZ%2BOFlJuuZLR%2Bt%2FnODWxbMY5Tq7VZgDfH3k1t6WzGZtN28w03abwwwpZ8hcyDwz6vJ%2F1t62vubX4R7xJrfbTmuf1KpFxM%2BQb0oweJPb05BrkO%2Fls0c%2BHCz2Tc3OHx3jFHZZUrcrbwkvv&X-Amz-Signature=176ec25dec10937f0d6dd2e994573c651737f32f027065166442411fa4da1c12&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QL7K6HD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfhV33TSIa%2FKgyIDKbGNYKXjpF5T6OaV7esoKCJh5lUAIgZH6%2BrrJDRQdxJM0wl5lLaK%2FxS0WyPQyS9sF47LEF5r8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrNGt3b8QBa%2BA3AeircA8Zf7Ser3VmzjovhCOEIX%2FRb3Ccg1R%2FzvVpdMRvynnVxALjLBKZuFKpXwQHn6XPMUM52RbQLV6IOp8bhgzGmN8Cy7nQzsS0zG2I%2FIh5d0HmRJBmk%2BWyzSPK%2BReTmLnAN%2B9jgSzTUnesM2OlSXFE%2FcPkzW4JGS92VlEBj41mjlaWBhDB7Z7SnmWngIYhUglYClKNy0dxjTJfpo%2F%2Bu%2B%2FPnTGiOVKshcQuYHnQB8u8qayz1wI6BvPEsBUDvNyKEwfCUkhpLN%2FFViISmLtGm4WKxJgH6QVlNWK0Qjz7HMN2SBq4f6FUzYldfsRjLZAajRndVNvEFoeaA9yy14dvObq7NwNEM8zd8x20NtNR2b9isCjWt8TRegR55SwlqEyCl2jJVa4e6AwsiNi6oHsAkJ5wSfLs6ImtkbntRQGgMZPG5sXzyGEtUkpk7tv8YK%2FD19yFo2POKzD8TNHD%2Fcqmj%2FfcEjx3kgBo40BmtHaseAFySpnZK8pXExvkMMn16v%2BqGBqRxoiduQc1mnQCMtXJKqkbp8eQM8kvT4IBNFBOxiH7qrPxck12sDtVFp8l4JAU7BW4Cnpcos7v6REsg90jqst5WKbeiaiTl%2B9%2BBcBcJ1Rm2YGCirRIqb36Eq82AOySMMJjS8LwGOqUBunV1pDz5Od0%2Ft4I05S7pPAQKyahftD%2FYFHZb0BsVEoaVLFLp7qJk9BLHza0rb8m%2F6fj%2Bw8Y11HNergma3KqHWIH71Ei2z%2FX1678UoznFopf7jjsj2Jiy7B2efSkAoCvQT77J2%2F0Rau7r%2FwshE60JDS1Fl7rRWVsT4arWcUqb63J13PzHgdIb5fS00gWkY0X0gsHDISea6z9Y%2BQUF61Vouj%2BnxCGh&X-Amz-Signature=0d494d4e0ffe99f344c0fc224c82a8b2eec7ea20c52e26b6608e92d17b4cb05f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
