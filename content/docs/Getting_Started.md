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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FJ2RRAE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvh21UUNiQ7oB38T%2FLp1SaSZWSZSzjNqSiJwAKAPmtIAiBjDB3GnG5crIv91%2BFB0W2mNxHXfFXqt%2Fh2c0WbqKlH%2FiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpQre9LoD37r1qTxKtwDnV%2BDKYQmGnCi3i8sV86dtuurTIv5YAeWz7mgaR1gbYfEo4VqVE%2B50Sy4uKdnCK0xyvlDuhaP3FdQYRArzOVxbIEwbs8hqRS3ZgKNSeZsT1NoYq%2FNnXxYq8EE5%2FCIO9YfWL6KD3MoTKn6NPkwAhL0jGbZYcWnfGCHZfG3XOjh1N5F0QYDfB03QrXujcAAqFr8abOF1a%2Bm6hrfCzeXTLsCSKiO4lRefQUSYxah3d2Uyz8%2FHE%2FSGkCeTA75%2F3TQyYZOShzN%2F2DN3Lb6FyB%2BnHHDAtpVCPykXEo3ynTRe9hcM2yPqmxhNGbLFap0GVQ2mZi3io%2FTcqq1nGAJIv3F6N%2Baz72zfPOoANXIC0oTV3EDyHOKTgcmQj7%2FsDY%2FVVqwP6o%2FZWzik41ROdkjDbZ5lNbFcbv6cf5TKYFIh03ZX1xYqjcbTNiu%2Fg8nh5kI3wcneK7s%2B25Nmm0JCcm6CTFWbkIxCDGJJqVoGayVosuiNk1YtomG096qQpsJrxICFsDu13u7mf9OybwI2HpgQ%2FLX4248O8Fpken1l%2BbCNOHK%2FX1ZqtTWNI0PAq4v9jux9x07EBG%2BPt5rH%2B9Hw0xmMtKKZIfdWD8ICYGcBhj9EEGCoR49fJxogCR%2FsYzL0EdGwXAw%2BqSbvgY6pgE7kfKCIaTXxNQxVQQsE1ubuk%2BTCduRUV7Bisqiev8FinPM%2BFfn5rS4nIle2FaLmT0MsUaEvoth7euDEQ0tkUHyO5LiAyax%2BFOyQT5WcEqaFlQ751YHEHN5Awntnw4cr98Ac014SjmOoFOvtfR31tUTx%2FBpdhtyBa2tlgA7CraaS7UIAfQYBngLA7zVXcSJ3nnryrDr99yPyHot2CuTNJRvMjLP0H2t&X-Amz-Signature=b6b98ef5c899bfb3375f27f4a6351c7a58d27a57755e348f31611c833a197f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FJ2RRAE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvh21UUNiQ7oB38T%2FLp1SaSZWSZSzjNqSiJwAKAPmtIAiBjDB3GnG5crIv91%2BFB0W2mNxHXfFXqt%2Fh2c0WbqKlH%2FiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpQre9LoD37r1qTxKtwDnV%2BDKYQmGnCi3i8sV86dtuurTIv5YAeWz7mgaR1gbYfEo4VqVE%2B50Sy4uKdnCK0xyvlDuhaP3FdQYRArzOVxbIEwbs8hqRS3ZgKNSeZsT1NoYq%2FNnXxYq8EE5%2FCIO9YfWL6KD3MoTKn6NPkwAhL0jGbZYcWnfGCHZfG3XOjh1N5F0QYDfB03QrXujcAAqFr8abOF1a%2Bm6hrfCzeXTLsCSKiO4lRefQUSYxah3d2Uyz8%2FHE%2FSGkCeTA75%2F3TQyYZOShzN%2F2DN3Lb6FyB%2BnHHDAtpVCPykXEo3ynTRe9hcM2yPqmxhNGbLFap0GVQ2mZi3io%2FTcqq1nGAJIv3F6N%2Baz72zfPOoANXIC0oTV3EDyHOKTgcmQj7%2FsDY%2FVVqwP6o%2FZWzik41ROdkjDbZ5lNbFcbv6cf5TKYFIh03ZX1xYqjcbTNiu%2Fg8nh5kI3wcneK7s%2B25Nmm0JCcm6CTFWbkIxCDGJJqVoGayVosuiNk1YtomG096qQpsJrxICFsDu13u7mf9OybwI2HpgQ%2FLX4248O8Fpken1l%2BbCNOHK%2FX1ZqtTWNI0PAq4v9jux9x07EBG%2BPt5rH%2B9Hw0xmMtKKZIfdWD8ICYGcBhj9EEGCoR49fJxogCR%2FsYzL0EdGwXAw%2BqSbvgY6pgE7kfKCIaTXxNQxVQQsE1ubuk%2BTCduRUV7Bisqiev8FinPM%2BFfn5rS4nIle2FaLmT0MsUaEvoth7euDEQ0tkUHyO5LiAyax%2BFOyQT5WcEqaFlQ751YHEHN5Awntnw4cr98Ac014SjmOoFOvtfR31tUTx%2FBpdhtyBa2tlgA7CraaS7UIAfQYBngLA7zVXcSJ3nnryrDr99yPyHot2CuTNJRvMjLP0H2t&X-Amz-Signature=48b915f32d1fdb28b4e1c5a82000806dc950f63b7d1450b22f67cc9833166b73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HE3JZYV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFCpDnumEbHuzmTExvKTpO%2FMiEEII2xPzq1bU53lztAAiEAuoPznsN6VzrCO%2B34Kp9P1Ogi2IS8aJJ6g7PfYfl%2FpoEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy4hMsWlxOi3qAEZSrcA4SAaZTs3LOezp%2FJPYg98iG8gm6ICDzBvGU530UQSnuNcsynRA6uF3JxIGvGA2vGbM%2F7ncQ3FGx1stbJaIxJYp2QY5jGG%2BVM9BgbBYBrosvbb7CiWs%2Be9vc6JDatVXO76P62rgnB%2BX3bzEUWVxBVAA0jnGmwhJabct%2BmSjaxPIWF5ZTPE5RvzBisKi7KnMAW1mnIBL62zq9iuInKfWHlzJOXkj6lpd3%2FmSoGBv8XzLNq0jKStqMvJs%2Fv9lquqMVhUP6J2Mm%2FWTPzWZzB4GGXYQToWecNPtW4ic3oWDgIb%2B1PQDLgIUbckJL6vd%2FRaEewrfrDYHo1hQ7ktONlEM2f4ba0eiy0p0rDhk2E%2BtXrweTej88KuLYGzJM00aOeeLoSxmvtG5LYLYbOoeV0f%2FEyt%2BaHwTw9IHcOoXOc%2FSgDMfE0pVY8sZsv0pl1WMeE5tx12BMzrxBvEXFXWdhySlO8mSwsJGdnCQT9QtTFbTo%2Fv7mh%2F%2FGM2GoC1D1IML57El8JIEkIPFIQkRwGTmEAAIigbyMflaw5iofPoDcKt1q14CAy9Gq2iTDVxObGSI9qyOr25FvIao%2FR4da2r%2F8WaAFky5MTXJQPewHP5kBcUXpBf5WYzsxrXEKHHlogn%2BHoMIOkm74GOqUBB%2FqLxTXyEnOzQ%2F5MJkufnAXpU7UYf5VjDzT4EaHb4L%2FN3xg7AKxOHqUe97b0AZw%2BM6advxc6Uv%2FuEib%2FR2Tnb1UKzTFLiaPgPEk5slnzfOCddwtflKHPxSPXcBYieHPLu2medcT0xcjlwU9YrRLjhpCK2OYyGWEUqZqWX7q8qbhS11C4UI9CHyYNnyq3RHIf%2BtuuNnPRax0qUPU48BcXOSE%2BXsFh&X-Amz-Signature=14a10b528438329166c093db3e5e649f43a24eca68c24b36e020cae3c3b4ac8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64GYVLI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrdrQBwD7AcQff38Nf31NViJmj%2FPJ744lXrDuF2qZ%2BVwIgO3pYU%2B%2FSSybMahL2L6%2F3rxdMHxqSfMiKHdCDCi5rrZwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItYgl2kVZZVNVW8xCrcA%2BMN1cmksEKhoHPCxfwg%2BTu2WXh%2BICSLmnW7rZD1YSta5Z%2FE%2BwJWGdFw6HL3wIVOqBFv6%2FCeGj1m%2F03gqealvPRPM17RVIYkEMWmMASxZlWcb5NPrdwzMbiTsGll6xlvK6dMKeGSpoNp1uFVog%2Bh136WnYZGnMaKE6GfKUpCvPTvOlwiMBZqfxuywIYMEYwQdUfrX%2BmTeYxKExZN8TttunWmxB5mEF38BXaLdwlURTnTEMSJHoYlADaVWRuFeOngrpWFZ8iPdTEkFYmA34KngJYEzpUD8IIA%2B0FxvmLxkC8S9zMJpY%2Fu9YJ%2BIsFds43TF%2B5%2BPAvtdS%2FHl7vWwz6u5KA4Eah9FnPz00VLKjoCppdTGwLfDxHBKGZSk1HCSEGvzGIPYAUDVqNEwhqOdSAdr%2Bo4NkJq2P563dibtpOfjKZkTAnQMr5b7w51ZXIanYJuPs7ih8DLI0eDdSG1X%2BHhv6woqxIgesU8MAngmtDrXxHf2IA7V%2Bui62AHhXE2V2YzXkMzrra3S8pbl3B%2FKOwIUWJ4gdFFWFckyO1m%2FWc5CMm3pFBmn%2BmcK1GSV%2Bej8isDLaAdYGU%2F%2F4IW%2Ba3G8jM9UUJJh8XufFmLDfVjMXPdFtustT1rLYWlKrAo4NYoMI6km74GOqUBR1Gj%2FMLw985Bah%2BnJBF7Sz1%2FZ9UFc76%2FEzkHqkM6Fcxck1zsUkwZuYmH6JLvrklz2jgGKUXJxQCaFt7Ruf0kySeWKosdDVzPEApZwed2vF71xff109ymA3bcxp83oelT4clwh9CNcV3TGAiFji3SKaNQTPLWsWOZxTU4T9q7OYVfTRzX9fzQJvMxft5jV%2FXMMBY3KjRLYKiuqEzec5MURPuSCbCu&X-Amz-Signature=ecf01228070f619d4742a1ae289b6a06e9b3a386b195a39e73a9b4587f980f16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FJ2RRAE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvh21UUNiQ7oB38T%2FLp1SaSZWSZSzjNqSiJwAKAPmtIAiBjDB3GnG5crIv91%2BFB0W2mNxHXfFXqt%2Fh2c0WbqKlH%2FiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpQre9LoD37r1qTxKtwDnV%2BDKYQmGnCi3i8sV86dtuurTIv5YAeWz7mgaR1gbYfEo4VqVE%2B50Sy4uKdnCK0xyvlDuhaP3FdQYRArzOVxbIEwbs8hqRS3ZgKNSeZsT1NoYq%2FNnXxYq8EE5%2FCIO9YfWL6KD3MoTKn6NPkwAhL0jGbZYcWnfGCHZfG3XOjh1N5F0QYDfB03QrXujcAAqFr8abOF1a%2Bm6hrfCzeXTLsCSKiO4lRefQUSYxah3d2Uyz8%2FHE%2FSGkCeTA75%2F3TQyYZOShzN%2F2DN3Lb6FyB%2BnHHDAtpVCPykXEo3ynTRe9hcM2yPqmxhNGbLFap0GVQ2mZi3io%2FTcqq1nGAJIv3F6N%2Baz72zfPOoANXIC0oTV3EDyHOKTgcmQj7%2FsDY%2FVVqwP6o%2FZWzik41ROdkjDbZ5lNbFcbv6cf5TKYFIh03ZX1xYqjcbTNiu%2Fg8nh5kI3wcneK7s%2B25Nmm0JCcm6CTFWbkIxCDGJJqVoGayVosuiNk1YtomG096qQpsJrxICFsDu13u7mf9OybwI2HpgQ%2FLX4248O8Fpken1l%2BbCNOHK%2FX1ZqtTWNI0PAq4v9jux9x07EBG%2BPt5rH%2B9Hw0xmMtKKZIfdWD8ICYGcBhj9EEGCoR49fJxogCR%2FsYzL0EdGwXAw%2BqSbvgY6pgE7kfKCIaTXxNQxVQQsE1ubuk%2BTCduRUV7Bisqiev8FinPM%2BFfn5rS4nIle2FaLmT0MsUaEvoth7euDEQ0tkUHyO5LiAyax%2BFOyQT5WcEqaFlQ751YHEHN5Awntnw4cr98Ac014SjmOoFOvtfR31tUTx%2FBpdhtyBa2tlgA7CraaS7UIAfQYBngLA7zVXcSJ3nnryrDr99yPyHot2CuTNJRvMjLP0H2t&X-Amz-Signature=5d8281ce52cdb27ca9959934379abac86cc9642a9b04a022fe6852050962a572&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
