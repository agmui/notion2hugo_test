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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TPW4IU2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDdFvKzySiu4Mi5993PCqZkZYoE5XFs0FQrhmop7%2BjYngIgC5PcEMvO3ROnjCSQovDWUmfgSATQ79Xx4ACtHkmppewq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDL%2FZ0fgGFaIbsngR7CrcA83z9VAKJ%2Fn77cXwTeeC3bzDV8g74pPZ2ubCxdGHGUanW9yu7U0idxNGOoomcKC%2B7dbI7BAhpPZIU%2FKtZFkS0Dg1LPtSHNCorCKXgrUYAYq8vCM%2BpsRex%2BuRuUUF%2BavVQJqalnAdoPHdLFC361N6RxgBYRG69298Mh7PArYgZ6VGZ0GcZkSZfqBaZf4tkkw2XTmQSpOPmef12rFZe2FfstvNKCaGsIk4YQxMQBOejRDftZ0Sceevsr9ItN6s%2FSpBY0m1tpon0sDXgGPZ361zbpwPHFUCjB0YERca8ylrYGliv%2BMQhuO6zXksWAERcOBqWEKWTkR9UVKIPB1ZUovfpWRK18VQ9bdWKSa7EIfC6ewVq8Ls1DEIF6DpZtj%2BoznEWdlAXppivFiuIMQEytd%2F2hRdBlfuBNY4WZEFo%2FjalIjbMKLDxA0wM%2BFbgZ9oYyyb2K7JSOAySigiF4i6xaMq4MQpP0YUrE%2BjF7E0IRE9wODmMwfPr4kFB7RAaHHW5r%2B65bZBzMh%2FMfcmN8yqk1Ek6gD%2FMpV3HFjlgBDnIG6xPeEVC8Jg3E8XEa4PwEN2lR%2BDmv8NqV84%2FJ%2FfFzusoEEhfrBXXGC2Vjt3OY3jdeZRX0fe%2B%2BYjY%2B%2FS5RBWIKykMMXBtcIGOqUBSqKz4nnxfTooHDKmM1uFCMirfgsb%2BBV7nJatqL9%2BkN%2FIn6OX%2BXHIoa%2FRaC%2BnLrXfwAGYPFydo0BBy6SEG3wWAdnWdu6%2FQN8UXUUINjbZDsyJoEWvG%2BqpiSzddM2TiSdAuMVaeiexDie37%2B%2F2wJOuaxbz%2BQYfjaBLp%2Fw7jPz90fCjIYxhnXU7LudT0aA82S4HxZxKBS7kIJVH97%2FSCFhG2TjAQ7Jz&X-Amz-Signature=8a49bb6f84dc4dee7986ae81c4d9eff01ad89e76ecab1f882d3e5fec059bc042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TPW4IU2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDdFvKzySiu4Mi5993PCqZkZYoE5XFs0FQrhmop7%2BjYngIgC5PcEMvO3ROnjCSQovDWUmfgSATQ79Xx4ACtHkmppewq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDL%2FZ0fgGFaIbsngR7CrcA83z9VAKJ%2Fn77cXwTeeC3bzDV8g74pPZ2ubCxdGHGUanW9yu7U0idxNGOoomcKC%2B7dbI7BAhpPZIU%2FKtZFkS0Dg1LPtSHNCorCKXgrUYAYq8vCM%2BpsRex%2BuRuUUF%2BavVQJqalnAdoPHdLFC361N6RxgBYRG69298Mh7PArYgZ6VGZ0GcZkSZfqBaZf4tkkw2XTmQSpOPmef12rFZe2FfstvNKCaGsIk4YQxMQBOejRDftZ0Sceevsr9ItN6s%2FSpBY0m1tpon0sDXgGPZ361zbpwPHFUCjB0YERca8ylrYGliv%2BMQhuO6zXksWAERcOBqWEKWTkR9UVKIPB1ZUovfpWRK18VQ9bdWKSa7EIfC6ewVq8Ls1DEIF6DpZtj%2BoznEWdlAXppivFiuIMQEytd%2F2hRdBlfuBNY4WZEFo%2FjalIjbMKLDxA0wM%2BFbgZ9oYyyb2K7JSOAySigiF4i6xaMq4MQpP0YUrE%2BjF7E0IRE9wODmMwfPr4kFB7RAaHHW5r%2B65bZBzMh%2FMfcmN8yqk1Ek6gD%2FMpV3HFjlgBDnIG6xPeEVC8Jg3E8XEa4PwEN2lR%2BDmv8NqV84%2FJ%2FfFzusoEEhfrBXXGC2Vjt3OY3jdeZRX0fe%2B%2BYjY%2B%2FS5RBWIKykMMXBtcIGOqUBSqKz4nnxfTooHDKmM1uFCMirfgsb%2BBV7nJatqL9%2BkN%2FIn6OX%2BXHIoa%2FRaC%2BnLrXfwAGYPFydo0BBy6SEG3wWAdnWdu6%2FQN8UXUUINjbZDsyJoEWvG%2BqpiSzddM2TiSdAuMVaeiexDie37%2B%2F2wJOuaxbz%2BQYfjaBLp%2Fw7jPz90fCjIYxhnXU7LudT0aA82S4HxZxKBS7kIJVH97%2FSCFhG2TjAQ7Jz&X-Amz-Signature=9ce1d512e413490b234202b2aa58fdb572b474a079b4e746b41ad0bbe6ca65a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TPW4IU2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDdFvKzySiu4Mi5993PCqZkZYoE5XFs0FQrhmop7%2BjYngIgC5PcEMvO3ROnjCSQovDWUmfgSATQ79Xx4ACtHkmppewq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDL%2FZ0fgGFaIbsngR7CrcA83z9VAKJ%2Fn77cXwTeeC3bzDV8g74pPZ2ubCxdGHGUanW9yu7U0idxNGOoomcKC%2B7dbI7BAhpPZIU%2FKtZFkS0Dg1LPtSHNCorCKXgrUYAYq8vCM%2BpsRex%2BuRuUUF%2BavVQJqalnAdoPHdLFC361N6RxgBYRG69298Mh7PArYgZ6VGZ0GcZkSZfqBaZf4tkkw2XTmQSpOPmef12rFZe2FfstvNKCaGsIk4YQxMQBOejRDftZ0Sceevsr9ItN6s%2FSpBY0m1tpon0sDXgGPZ361zbpwPHFUCjB0YERca8ylrYGliv%2BMQhuO6zXksWAERcOBqWEKWTkR9UVKIPB1ZUovfpWRK18VQ9bdWKSa7EIfC6ewVq8Ls1DEIF6DpZtj%2BoznEWdlAXppivFiuIMQEytd%2F2hRdBlfuBNY4WZEFo%2FjalIjbMKLDxA0wM%2BFbgZ9oYyyb2K7JSOAySigiF4i6xaMq4MQpP0YUrE%2BjF7E0IRE9wODmMwfPr4kFB7RAaHHW5r%2B65bZBzMh%2FMfcmN8yqk1Ek6gD%2FMpV3HFjlgBDnIG6xPeEVC8Jg3E8XEa4PwEN2lR%2BDmv8NqV84%2FJ%2FfFzusoEEhfrBXXGC2Vjt3OY3jdeZRX0fe%2B%2BYjY%2B%2FS5RBWIKykMMXBtcIGOqUBSqKz4nnxfTooHDKmM1uFCMirfgsb%2BBV7nJatqL9%2BkN%2FIn6OX%2BXHIoa%2FRaC%2BnLrXfwAGYPFydo0BBy6SEG3wWAdnWdu6%2FQN8UXUUINjbZDsyJoEWvG%2BqpiSzddM2TiSdAuMVaeiexDie37%2B%2F2wJOuaxbz%2BQYfjaBLp%2Fw7jPz90fCjIYxhnXU7LudT0aA82S4HxZxKBS7kIJVH97%2FSCFhG2TjAQ7Jz&X-Amz-Signature=9ef7026df8f972c3838dffdde9bfc21e3c38924a8016950d6cb5cf96f38cbbda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUPY6DK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDL6CHoa9E9lKjS644qA60czuaTNlXyBEeev8vyovaQVwIhAJg7y1zm9oLbKYKQ%2FyKcyssnCJC7D1Dquo4yeHKXkg%2FIKv8DCC0QABoMNjM3NDIzMTgzODA1IgxsFSEjEYE1vxZB9B8q3AOHVzfS%2BAdgjeHZtf4Ia%2B5l%2BewmpFtJJV0CueOERpUpmIeTlmHhseVNq%2BFr9kzE3zRldZwLl2Qifk3c1sMyp7S2gmN6lVswDKmxunhfyEYV4CsOAsHveEFHMt1iEDwxhTH3I0J6DtazEPlCymBTWALc2Oja%2BsOXfIC8bgRtVKOWzRTPNLToj790%2FVNaAborGrmVPhkrmUEUadDQjUecS4jGX9knJkOKeqSBKBY18VVGizr8EBOQr801PB1v6%2Bu5dCNavP13AWx7FQtCt%2FK1yMflj7Q%2BcUQryuRKQdlZAsU8baqa8xyKCq5PMyKB%2BpNeJCwaQfo%2Ft%2B5erPAQNfaM7ncLcGb%2Bx7wUkThm2T1k3%2B%2FvBFcCujBQD1MMeJB%2BE74G96%2FEo4L4QPMrNFAr7%2B065oQAH11o2lP99sJihRkhXB2d5eqZ4xZIvKM3gKk4mNhg4IUooUL0CPcVy3qgSEvXduf8rXL8f%2BL4lLt8z4kCpfm93aLSlrY5HcVryZ2R3laoLmixPNWZ0TZF2w8ObKKBjnHJdGA96bE455KPO1bAwyWcVg6L56jhszL79g37fphEvFSfuEdK%2B%2B%2FSAppMcwyMWSko95S5ZSRCYqf7rW%2F5L%2FHY66nN9OmnSTiEsyOvNjCNwbXCBjqkASH5p4jI3fTYKiUmrX6HEF2Dj7J0So%2FfmoOZ2CsEYm8dxNKz8xwWB0cu9ZPv3zk140RmeNe6JjX%2F%2FpdWtZDw4n3mKmxOANB5tIjJjlPdxZ6UZrhsxu%2FtaHZ6k5JfIAqkU%2BtBPvghK6jVWwrwYdL8Up6HiUNBfAEMuzWiarCoP9tEjgjf5s4kb0zY21%2FEoXxBDSYyVTEg2ai1B6pE2N5LQTdzy1vN&X-Amz-Signature=9e94f5b6ff0bb6acc00d119164af35a32f5432b09b00687407561f7472cae814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLLYNS44%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIQCc1uBKzYVSsIlCGMGm1Yd6%2FtrNhv8AAAejDd0RxHtp2wIfLmXTKEtCXOjq4wy%2FNppxgBA8oRMyKGHzYwHfAB9PHSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMlRNog4lCca8isid6KtwDAERCPPhvdNqXblUBu0stACzHV4SWNdXGNKzDOcTSnPss0DQzvC%2BHLRlm6AlyshkCZ1KkBiMCBN1Kh92D76tDdp19RhTauvGMm30EbfyZdcc2CjZqRIx3DQF%2FbcxzDPM3EnLhFhFoEmeckLgyYqzTJ0AK7oboq2nXMrtX93By1Zx%2BV2rrZVnE0IeHNI4m%2BEM9ZM2jlOt1iNHPfNNU8HnvHTkXn5Qw5hYXRrRNCQABoT2D4%2BPVQ1SZ%2B4YxiY4EzBGSFLDzIXcp0GHBPyUolJL%2B%2B9NSsqr1qsqD65xcMFgwwclS6bFQZ02LwLUa9IWesCH%2B4Z7zZ01UlUB4PZT2VY5V5iBJddr1C4TkI7coibTBCg9jlfCF5RtLTD5glfOIuW%2BRpOEiZeozYR9d95tB5V8qzYzy3P2rvkDPW5jffVQYCidDkzJDrRJI8CrHKHczP4Ox2M3XU%2Fa3jRaYj%2FSFWoYhD78PUDpkI%2BegWBs45BkZaAhtmkMrog%2BUXH71dGyjct9aVfWTcD64HP90aYgZN3KTWwPZZfh3gvkpb%2BilUHlamuqh68zpZTWlvCuZ%2FyXXOC5G8BQnTK01E7mhLZhZFlh2Ud9NN7D%2Bk9klh0DwE4OO1VuxBmOiC4F9FqrEqVYw98G1wgY6pgHg978OzsPWbKr0P%2FrKoSgHO6YZIlH3eoktn8fzHCQPHWGpBa7VmpGrbdBJCqYEKLFsthi0etzpB4UocePwV2AU83qk5EN1LECFnkEEc9qRhA1XQttyT4%2B9uoCKqtRnbEBALPBKulqDLEE1Nhb8srhkbV%2B6qGXre5Q0TEoZ2ehQwg%2FrfqzhKrunH%2BIuvrg5pXC9XX2RDInuAb0d8wGldg9ppF3hdbaU&X-Amz-Signature=51cbb0a6906795817c12b24e1c1b54ce9977d6d719c74a842af7c7fe35612d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TPW4IU2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDdFvKzySiu4Mi5993PCqZkZYoE5XFs0FQrhmop7%2BjYngIgC5PcEMvO3ROnjCSQovDWUmfgSATQ79Xx4ACtHkmppewq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDL%2FZ0fgGFaIbsngR7CrcA83z9VAKJ%2Fn77cXwTeeC3bzDV8g74pPZ2ubCxdGHGUanW9yu7U0idxNGOoomcKC%2B7dbI7BAhpPZIU%2FKtZFkS0Dg1LPtSHNCorCKXgrUYAYq8vCM%2BpsRex%2BuRuUUF%2BavVQJqalnAdoPHdLFC361N6RxgBYRG69298Mh7PArYgZ6VGZ0GcZkSZfqBaZf4tkkw2XTmQSpOPmef12rFZe2FfstvNKCaGsIk4YQxMQBOejRDftZ0Sceevsr9ItN6s%2FSpBY0m1tpon0sDXgGPZ361zbpwPHFUCjB0YERca8ylrYGliv%2BMQhuO6zXksWAERcOBqWEKWTkR9UVKIPB1ZUovfpWRK18VQ9bdWKSa7EIfC6ewVq8Ls1DEIF6DpZtj%2BoznEWdlAXppivFiuIMQEytd%2F2hRdBlfuBNY4WZEFo%2FjalIjbMKLDxA0wM%2BFbgZ9oYyyb2K7JSOAySigiF4i6xaMq4MQpP0YUrE%2BjF7E0IRE9wODmMwfPr4kFB7RAaHHW5r%2B65bZBzMh%2FMfcmN8yqk1Ek6gD%2FMpV3HFjlgBDnIG6xPeEVC8Jg3E8XEa4PwEN2lR%2BDmv8NqV84%2FJ%2FfFzusoEEhfrBXXGC2Vjt3OY3jdeZRX0fe%2B%2BYjY%2B%2FS5RBWIKykMMXBtcIGOqUBSqKz4nnxfTooHDKmM1uFCMirfgsb%2BBV7nJatqL9%2BkN%2FIn6OX%2BXHIoa%2FRaC%2BnLrXfwAGYPFydo0BBy6SEG3wWAdnWdu6%2FQN8UXUUINjbZDsyJoEWvG%2BqpiSzddM2TiSdAuMVaeiexDie37%2B%2F2wJOuaxbz%2BQYfjaBLp%2Fw7jPz90fCjIYxhnXU7LudT0aA82S4HxZxKBS7kIJVH97%2FSCFhG2TjAQ7Jz&X-Amz-Signature=aebdf7137a33f78738d53a355fc5f2e3f94706db4c612ea5b7000225b02b6419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
