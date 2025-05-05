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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP76IIHY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD9wkfpC4vuNQ9TQ4uWHz%2FYO6EeqmhKfKl3OKnJyP0mVgIgbhOJKn608OlV4f78G3MPhnCXMtJ7ZzpRmAVwBfOzMLYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDONv5YhUsZN1LorxKyrcAy02n%2BbMJgU94%2BnET%2Bm3B9Xsiy7Fj3Ema8c5CCqe7pABKtlb%2Bkh5LPOS9ZiQbOpEIVdD%2FAprlmuwMMOf0iIu5EnNvVR9vNBwjQb%2FRoR8qHBhJZoIiTaR5ZDuYQAFe1j%2FGoBhcsHEHFpON5Al6ddkz5Rl4MNzcSRQoa932R4%2FiYffrxhcluzVt33iptlBOmJ%2FitZ1nsSugrzlEHdZYlafXslxmC3ZVqhe%2BpKCWTtf3bdJyik7ttjtgsw7CRB9K2PUqA4qtHr9Tpp1wx2lwBN7ls6asCneBN2ERWrX2fsDIUC5YmQEE5agmM9z%2F03BnKlHt3CV%2Bpqbg8bxxgQ0FUoBHJRCiICVJDg9PfsDA8idk1T7Bf5fs7jsJJ8pWxumhbn9B3s8A0%2BqfBLh3TnfSH8SYniuqZ0nNpDwBYbaFikEIX60jtUEBo%2B64%2FTTfhW5eVZtXztMtUinhQ9B35PBICj2qSvqcpwwWF12OSR%2BYO3RjXy7Cz0W0VfsgZHlGqHXucu%2BFBmpbdhJj1zxdkG8V7xUKW6mE9WbDho7Avydt5d7c%2BmxY%2BENeEc8pj5TkYyMIFpIii4qvnYITWUAwT78Aw4%2FyVR%2BG2C59Ib5jvYbxYn4bafZ26gfxX7dByu5%2FhAwMMWa4cAGOqUB5skUlBDyiW2uu7qZKqSI1YNQccQuRP%2FE21jcELJ2eHHVsdUk8ZHRl4CehRk5doprXkEap9kAisZjPBTIDwQEHRjYuehPJcg8utUVTh890vIILADVP35kfzuJfRpvE9CJq1sMRe5QVQQ8VrDqO4h7Lexx9UVAdwRwI1a5RJWgRMnB9iQO1t3YnKqIogSknz%2FAZxVjEg3hslNNhix%2F9DL7d9eAMy0w&X-Amz-Signature=0ef10af0a540e6a5847a85aa7e419fcf67298bcbc3d360cb547b5c1f920acbd3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP76IIHY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD9wkfpC4vuNQ9TQ4uWHz%2FYO6EeqmhKfKl3OKnJyP0mVgIgbhOJKn608OlV4f78G3MPhnCXMtJ7ZzpRmAVwBfOzMLYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDONv5YhUsZN1LorxKyrcAy02n%2BbMJgU94%2BnET%2Bm3B9Xsiy7Fj3Ema8c5CCqe7pABKtlb%2Bkh5LPOS9ZiQbOpEIVdD%2FAprlmuwMMOf0iIu5EnNvVR9vNBwjQb%2FRoR8qHBhJZoIiTaR5ZDuYQAFe1j%2FGoBhcsHEHFpON5Al6ddkz5Rl4MNzcSRQoa932R4%2FiYffrxhcluzVt33iptlBOmJ%2FitZ1nsSugrzlEHdZYlafXslxmC3ZVqhe%2BpKCWTtf3bdJyik7ttjtgsw7CRB9K2PUqA4qtHr9Tpp1wx2lwBN7ls6asCneBN2ERWrX2fsDIUC5YmQEE5agmM9z%2F03BnKlHt3CV%2Bpqbg8bxxgQ0FUoBHJRCiICVJDg9PfsDA8idk1T7Bf5fs7jsJJ8pWxumhbn9B3s8A0%2BqfBLh3TnfSH8SYniuqZ0nNpDwBYbaFikEIX60jtUEBo%2B64%2FTTfhW5eVZtXztMtUinhQ9B35PBICj2qSvqcpwwWF12OSR%2BYO3RjXy7Cz0W0VfsgZHlGqHXucu%2BFBmpbdhJj1zxdkG8V7xUKW6mE9WbDho7Avydt5d7c%2BmxY%2BENeEc8pj5TkYyMIFpIii4qvnYITWUAwT78Aw4%2FyVR%2BG2C59Ib5jvYbxYn4bafZ26gfxX7dByu5%2FhAwMMWa4cAGOqUB5skUlBDyiW2uu7qZKqSI1YNQccQuRP%2FE21jcELJ2eHHVsdUk8ZHRl4CehRk5doprXkEap9kAisZjPBTIDwQEHRjYuehPJcg8utUVTh890vIILADVP35kfzuJfRpvE9CJq1sMRe5QVQQ8VrDqO4h7Lexx9UVAdwRwI1a5RJWgRMnB9iQO1t3YnKqIogSknz%2FAZxVjEg3hslNNhix%2F9DL7d9eAMy0w&X-Amz-Signature=f707aef361b0cd1d294163458afdf233c46e84bce265279783a25f7494edd054&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP76IIHY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD9wkfpC4vuNQ9TQ4uWHz%2FYO6EeqmhKfKl3OKnJyP0mVgIgbhOJKn608OlV4f78G3MPhnCXMtJ7ZzpRmAVwBfOzMLYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDONv5YhUsZN1LorxKyrcAy02n%2BbMJgU94%2BnET%2Bm3B9Xsiy7Fj3Ema8c5CCqe7pABKtlb%2Bkh5LPOS9ZiQbOpEIVdD%2FAprlmuwMMOf0iIu5EnNvVR9vNBwjQb%2FRoR8qHBhJZoIiTaR5ZDuYQAFe1j%2FGoBhcsHEHFpON5Al6ddkz5Rl4MNzcSRQoa932R4%2FiYffrxhcluzVt33iptlBOmJ%2FitZ1nsSugrzlEHdZYlafXslxmC3ZVqhe%2BpKCWTtf3bdJyik7ttjtgsw7CRB9K2PUqA4qtHr9Tpp1wx2lwBN7ls6asCneBN2ERWrX2fsDIUC5YmQEE5agmM9z%2F03BnKlHt3CV%2Bpqbg8bxxgQ0FUoBHJRCiICVJDg9PfsDA8idk1T7Bf5fs7jsJJ8pWxumhbn9B3s8A0%2BqfBLh3TnfSH8SYniuqZ0nNpDwBYbaFikEIX60jtUEBo%2B64%2FTTfhW5eVZtXztMtUinhQ9B35PBICj2qSvqcpwwWF12OSR%2BYO3RjXy7Cz0W0VfsgZHlGqHXucu%2BFBmpbdhJj1zxdkG8V7xUKW6mE9WbDho7Avydt5d7c%2BmxY%2BENeEc8pj5TkYyMIFpIii4qvnYITWUAwT78Aw4%2FyVR%2BG2C59Ib5jvYbxYn4bafZ26gfxX7dByu5%2FhAwMMWa4cAGOqUB5skUlBDyiW2uu7qZKqSI1YNQccQuRP%2FE21jcELJ2eHHVsdUk8ZHRl4CehRk5doprXkEap9kAisZjPBTIDwQEHRjYuehPJcg8utUVTh890vIILADVP35kfzuJfRpvE9CJq1sMRe5QVQQ8VrDqO4h7Lexx9UVAdwRwI1a5RJWgRMnB9iQO1t3YnKqIogSknz%2FAZxVjEg3hslNNhix%2F9DL7d9eAMy0w&X-Amz-Signature=868df108c99fcc5e6c4f7bd71872d1c72d627d2291bf0162bd0fc2b8b542a4bb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YTJD7AA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDagIKicoJL0uIhcfONBDyBX7qVy2cxizFuqDT9ZQAOnAIhANXzUidiqYFCaEo3Acgk7CHJoonoZmrU%2BQqzz6rS%2BBDzKv8DCCcQABoMNjM3NDIzMTgzODA1IgyDGawGxWWXKyrg%2BWgq3AOd%2Bx5kUqgwoLLHY0n%2FoL0SEUkoMWIwmhCHGyAS62ULkMCriVL0%2BD8QgwNZfKugrlvameCNoYCV4u9femJAw1GfCqdznND%2FCjFfT3rqxzJXyndb%2BgSZNBjVWxx20zgrN8Ww1YQJ4NGZKDybdLoBvcSxHjsFuRwMNaULAv2cedo%2Fdq5h1o2XYL2hphcPBM%2FkCyXFVHxmTGve%2BqV99jeh%2FvfikheqdutRAsVOJpj5xFdPAIEeH7pTjwWDaVYxUPCXmo1Jni6y1LND8snSF9hXW4O2nqaVpVKcltMRP3AK1CCjSqaEeZ03LBiSlr8dnr4xhL52t4wJ89d4eO6KgIcJniT1hus2Rq87CKPu7rXEX2kCH%2Fhh3ayRiCDXkPfhYxjnPm9XPQK4vgAjeYzZqr%2BEi1Suj7OTg%2B2U%2BJTi1TdiJEs8fH%2FObAZxgTI3hwevDPGZLdxcRIAQBCREAxtqA11aNEXjI%2BM%2Blk0dmk6WinilKv0LigETLeTy7E5rddkRErFix4anpyRrHj40%2FKxj3NMAcgmHU16igb2gV3xEeg9TrW9ozb1bnmZM1Qchq8WomtCSmaj1eE%2FnCG4qByuxlO8kz7lbXcG7LRWoHmL6VXkzPUZ0awv%2FHGcaU1NmH%2BfDtDCqoOHABjqkAVFsZLcmOPC7CjCOOD87MnqWsypaRllPoO9LqjN7hpcAjgsBkkFpIir57onqXfbOwPOyXqFsSQb1K0FHGgqMSoHHFmg8pQ%2BHhyL0NZ6BVuGpeGzA6S%2F6nLfV8KXu07fE6ygaKACR1xXlBiaKan3pwj4GuQBxOHvUco5xwsXE6eXFILvcMNV6ZwqR7p98Oa3V2KKsxV9DuhX8L68YDuJeJYYtAgMA&X-Amz-Signature=599e0716425f34240ce4253c0fff916d76626603a66d11eeb84c4c810a58b520&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IWAN6VO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFEor7y3UE4528RNPuQlOk7I1W2TBGZnN%2Bazb%2Bul7V9xAiBv9wgoAp6dKxMpXkcgrpG5VPqpOh%2F9B2eG%2FOa7GHdTAir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM%2B%2BMpZK%2BBO36lim87KtwDD%2FbBashhMLki%2BKhoVOfozcvDuTDb%2FRrUreo%2FHXZiys1bJ4qitNAcHgPLYCxPu2gak%2FprHVSjhQNsvdx%2BcCTdN8YGU78jhQJ0k6G68joZEzZb%2BYJgAuWe60B1aosgBVvCfdh53p8r7Khkdb3aNv6VFi%2BJB8m49ZvYk7z83KDuQNBuA3oqMxHfdpBkcbfSvzcuvH0hL3iq3sv6N%2BQylcrJkHacErHc3KflLyPhyMWJ8Uze%2Fr5ovzLg%2FdaIILkP5CqNH5macEyogCqw9f4j%2FZKZYaPVaLRPyMRAe6A%2FtXvcrUKbfcT9at%2BcJ5rrad5Z6bCzDgIbO9ViSPvVrd7fPz%2Bwgi2uQVM6919CeY5ySglgufMHpV%2BYGD9hztqlBots6KKn5PKtdAxMJv1EJhZ7C1wNnA%2FgBApoVPFj1oMX6V2NfNcui%2F9y6XogMFDtwKuoVoW4hLz9KFjU4c0yM2p9n0APaW8%2BPiQXUT5Proe%2Bn8ZArjB%2BDy5V0emFv1UgEfctFH6kjOK9PZKmP%2Bj59crBVmNN5GTxjm88B3RoxfXrY58ogjnod9JPd45UIhVOPsfjVHa3pSaCl%2BF8IHrMy4qbaQpKqwnMGOQMBDcwxJ8Z%2BGwf1J7S6f6cxDPz3mEMUBswuZrhwAY6pgGct0fQYnqd3ATOZFOou%2BTwF%2FjTfYFHiD1fbAlkfQ2PWLuLOiu8lRUveA07q708ZwkN4KdaeeJrK1gCSgd5Q3AC9aWGOq7VZI54YCA1TlNj2qBYH%2BG96OTdiXElsB0WnC%2FVymaHRGmFlgx9fwKh9ibwz6frm4ZY%2BnZbHQDKvwrrlIH2I2U5%2B2cPgkGPSOH8gL0k%2BEC1u5FA%2FB1gqU069C1CGRv1np6z&X-Amz-Signature=bbb2004cf8d70150a584d1e9ac599b6acdbc63f9de60593ef09fb141647cda19&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP76IIHY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD9wkfpC4vuNQ9TQ4uWHz%2FYO6EeqmhKfKl3OKnJyP0mVgIgbhOJKn608OlV4f78G3MPhnCXMtJ7ZzpRmAVwBfOzMLYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDONv5YhUsZN1LorxKyrcAy02n%2BbMJgU94%2BnET%2Bm3B9Xsiy7Fj3Ema8c5CCqe7pABKtlb%2Bkh5LPOS9ZiQbOpEIVdD%2FAprlmuwMMOf0iIu5EnNvVR9vNBwjQb%2FRoR8qHBhJZoIiTaR5ZDuYQAFe1j%2FGoBhcsHEHFpON5Al6ddkz5Rl4MNzcSRQoa932R4%2FiYffrxhcluzVt33iptlBOmJ%2FitZ1nsSugrzlEHdZYlafXslxmC3ZVqhe%2BpKCWTtf3bdJyik7ttjtgsw7CRB9K2PUqA4qtHr9Tpp1wx2lwBN7ls6asCneBN2ERWrX2fsDIUC5YmQEE5agmM9z%2F03BnKlHt3CV%2Bpqbg8bxxgQ0FUoBHJRCiICVJDg9PfsDA8idk1T7Bf5fs7jsJJ8pWxumhbn9B3s8A0%2BqfBLh3TnfSH8SYniuqZ0nNpDwBYbaFikEIX60jtUEBo%2B64%2FTTfhW5eVZtXztMtUinhQ9B35PBICj2qSvqcpwwWF12OSR%2BYO3RjXy7Cz0W0VfsgZHlGqHXucu%2BFBmpbdhJj1zxdkG8V7xUKW6mE9WbDho7Avydt5d7c%2BmxY%2BENeEc8pj5TkYyMIFpIii4qvnYITWUAwT78Aw4%2FyVR%2BG2C59Ib5jvYbxYn4bafZ26gfxX7dByu5%2FhAwMMWa4cAGOqUB5skUlBDyiW2uu7qZKqSI1YNQccQuRP%2FE21jcELJ2eHHVsdUk8ZHRl4CehRk5doprXkEap9kAisZjPBTIDwQEHRjYuehPJcg8utUVTh890vIILADVP35kfzuJfRpvE9CJq1sMRe5QVQQ8VrDqO4h7Lexx9UVAdwRwI1a5RJWgRMnB9iQO1t3YnKqIogSknz%2FAZxVjEg3hslNNhix%2F9DL7d9eAMy0w&X-Amz-Signature=60a42152c4e3ba5589160f1f37b385f0287810273181b62f93079dc6810f834c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
