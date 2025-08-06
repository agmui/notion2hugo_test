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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKRPLMOD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCu2ebGGHO%2Br5ZDcDmJIXiFbvhTq1GMMIZMQUQS8zenzAIgJGync7Sw9U4gzYkf128SHsZUlQAhrYpuMewkS0ueQdEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOxddbkNsle5jTsR1SrcA3VuuLOu7rsgKbLK5yffv8ybwmqZlWPs%2BMwKCE3Sd7oG4hA8IfZApw8p2c%2BgwuXwM6GDGSR%2BB27uf95D%2B%2FQzeT1feDlft9eiC6VdJkKSUSZ4nBgJilmQHMR4xPalEszZXdXugR8KS5jvzPCiQ8YLV0afUlLJybGOH%2B%2BbXPzwjYm530tEzEeB61oHYKi%2B3Ks0WsXsgOKoeTJD9tQNueCrrTwTgJg5xwnnJFm6wAIu4FykkeDVE3fS6ZvAgk2AQvzKmFvHe4mDwbLTtNz2czI5t3zhZe%2BQpF6cXnx3Q2ARW4ukdGTeVEGyJPNTrjc15QmNszQHPn4fZ6Tc55U32jiWeqqGYur%2FKpsRTbYYAEXsiSQA0eFoRE6YqK5TcrcV46DgxWKWhGjYJ1ndqat3nYjq4%2F0GoyRogn7By70JmbexYbEXZQa40Ix%2BCTfmgnK7%2BkeWg7pSkjpAY6PP4FIYcT9qQFvTeQOCtVqJuYEM7v07KND21RFBpGtlMzwfwyIjS6vSv2ZwA1pLKoUnC7PvmmY9ZBKahAk7wi2uk4Jh7Y6Y1LArGSc%2F%2BljVXHaziTFXC9lAvKDGjnau%2Fo3i%2BNpuIyhm5gj8V9nLUeYlFjWWX0QvT0D8e3t9VrSlX11hA5fzMLCXzMQGOqUBQ8KJrDBm2dCJrxfsw0toTGEct4NhZhOrHE4gXdYcEFfUJUvZd%2F8Qp5%2FdqwUSMnnoLbacsUIEjd1DLs%2BpKmPAxiZQgTt0v9eQeFZGk7GXe4XuDypY6WKqZiBfkiPhIG6ZNtGwAZp%2FmAb4YDy4qd3nIUt6pU7IuSYk7gij%2F8QeYJZ7ekJfeS7uuRVCvI24vTf8fSS345eCNMKEuv4WUMZjqGywqXrU&X-Amz-Signature=968fc537abf85f62cb1a44442966f37d86cf8de448bcc480181e12a929e0f543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKRPLMOD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCu2ebGGHO%2Br5ZDcDmJIXiFbvhTq1GMMIZMQUQS8zenzAIgJGync7Sw9U4gzYkf128SHsZUlQAhrYpuMewkS0ueQdEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOxddbkNsle5jTsR1SrcA3VuuLOu7rsgKbLK5yffv8ybwmqZlWPs%2BMwKCE3Sd7oG4hA8IfZApw8p2c%2BgwuXwM6GDGSR%2BB27uf95D%2B%2FQzeT1feDlft9eiC6VdJkKSUSZ4nBgJilmQHMR4xPalEszZXdXugR8KS5jvzPCiQ8YLV0afUlLJybGOH%2B%2BbXPzwjYm530tEzEeB61oHYKi%2B3Ks0WsXsgOKoeTJD9tQNueCrrTwTgJg5xwnnJFm6wAIu4FykkeDVE3fS6ZvAgk2AQvzKmFvHe4mDwbLTtNz2czI5t3zhZe%2BQpF6cXnx3Q2ARW4ukdGTeVEGyJPNTrjc15QmNszQHPn4fZ6Tc55U32jiWeqqGYur%2FKpsRTbYYAEXsiSQA0eFoRE6YqK5TcrcV46DgxWKWhGjYJ1ndqat3nYjq4%2F0GoyRogn7By70JmbexYbEXZQa40Ix%2BCTfmgnK7%2BkeWg7pSkjpAY6PP4FIYcT9qQFvTeQOCtVqJuYEM7v07KND21RFBpGtlMzwfwyIjS6vSv2ZwA1pLKoUnC7PvmmY9ZBKahAk7wi2uk4Jh7Y6Y1LArGSc%2F%2BljVXHaziTFXC9lAvKDGjnau%2Fo3i%2BNpuIyhm5gj8V9nLUeYlFjWWX0QvT0D8e3t9VrSlX11hA5fzMLCXzMQGOqUBQ8KJrDBm2dCJrxfsw0toTGEct4NhZhOrHE4gXdYcEFfUJUvZd%2F8Qp5%2FdqwUSMnnoLbacsUIEjd1DLs%2BpKmPAxiZQgTt0v9eQeFZGk7GXe4XuDypY6WKqZiBfkiPhIG6ZNtGwAZp%2FmAb4YDy4qd3nIUt6pU7IuSYk7gij%2F8QeYJZ7ekJfeS7uuRVCvI24vTf8fSS345eCNMKEuv4WUMZjqGywqXrU&X-Amz-Signature=981c9848643cc45b5fbf8d1c70b54ce7469f28a6c7b79597c024873129871bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKRPLMOD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCu2ebGGHO%2Br5ZDcDmJIXiFbvhTq1GMMIZMQUQS8zenzAIgJGync7Sw9U4gzYkf128SHsZUlQAhrYpuMewkS0ueQdEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOxddbkNsle5jTsR1SrcA3VuuLOu7rsgKbLK5yffv8ybwmqZlWPs%2BMwKCE3Sd7oG4hA8IfZApw8p2c%2BgwuXwM6GDGSR%2BB27uf95D%2B%2FQzeT1feDlft9eiC6VdJkKSUSZ4nBgJilmQHMR4xPalEszZXdXugR8KS5jvzPCiQ8YLV0afUlLJybGOH%2B%2BbXPzwjYm530tEzEeB61oHYKi%2B3Ks0WsXsgOKoeTJD9tQNueCrrTwTgJg5xwnnJFm6wAIu4FykkeDVE3fS6ZvAgk2AQvzKmFvHe4mDwbLTtNz2czI5t3zhZe%2BQpF6cXnx3Q2ARW4ukdGTeVEGyJPNTrjc15QmNszQHPn4fZ6Tc55U32jiWeqqGYur%2FKpsRTbYYAEXsiSQA0eFoRE6YqK5TcrcV46DgxWKWhGjYJ1ndqat3nYjq4%2F0GoyRogn7By70JmbexYbEXZQa40Ix%2BCTfmgnK7%2BkeWg7pSkjpAY6PP4FIYcT9qQFvTeQOCtVqJuYEM7v07KND21RFBpGtlMzwfwyIjS6vSv2ZwA1pLKoUnC7PvmmY9ZBKahAk7wi2uk4Jh7Y6Y1LArGSc%2F%2BljVXHaziTFXC9lAvKDGjnau%2Fo3i%2BNpuIyhm5gj8V9nLUeYlFjWWX0QvT0D8e3t9VrSlX11hA5fzMLCXzMQGOqUBQ8KJrDBm2dCJrxfsw0toTGEct4NhZhOrHE4gXdYcEFfUJUvZd%2F8Qp5%2FdqwUSMnnoLbacsUIEjd1DLs%2BpKmPAxiZQgTt0v9eQeFZGk7GXe4XuDypY6WKqZiBfkiPhIG6ZNtGwAZp%2FmAb4YDy4qd3nIUt6pU7IuSYk7gij%2F8QeYJZ7ekJfeS7uuRVCvI24vTf8fSS345eCNMKEuv4WUMZjqGywqXrU&X-Amz-Signature=d0cc6c0a605cbcd5f2161c667fdb8cc407ed7672be27a21781a82badf103551d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6J4H55%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDQXBp1JjFo%2B1emqxoiPf5fm2iVAjpTRNErqyV5dasSqwIgKKdBWZv%2FnuqTtGumuVwzZgT0gux1IwY5BKEU0ZwISwkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOcHNmI8MhXkEavtRyrcA6xhx1myY13HyYfr1K43OtvsJ6NGMDoXg8T9Nyxe8zvV6NrZOIsC8p23Qtd%2BknhmtOsdmGWg3hgYXhy0Ca3myJnqb4DVHWIrRaFX18dAZqfuCsz1PMQPISKU2i49sAoHMbpxOmku8rluac%2B%2BBqEGKYT%2FxoKOJtgSe03H8xD7EPFN3SXfTZO1ZK4LlAnKTBLJP5AY7nMSWbGkhiT%2BHvYzS8ZSaPFzY02ZGRD967gP9sUPylWLXUXSi9wgnJFzDvwjvbJLEppvwQB%2B2CCzjHMbBQfFhq4ASpts3NZEikLvmipKFWoIXPkjezdew1ghlKOjeRnu1mQ8vqQM%2BNqsSGvcfgHNLoRb%2FWT5NG6tgzu0X0At%2FT7S8QNTD8uYSGXT%2BiDYhRpZ8g30BF30FyLFLcLqLRkD57VSCm9sZqHf%2B86OlVmf%2BjMRgOS78WDlqBcK%2FfNqtzSKbN4hsir%2Bszex%2Fpzyk3AH1%2Bg7WrQ9lXYg5uunVuUEJbCnPI%2FewaDro7tOkrG0a26hGapizxJNY%2Bu%2FhxhWIkFqlmK0Tru21c0PdT2tc%2FMlgNVoYdpCI%2Fj0dRdoKWpzUFcIjkYRvzDOwS7PM17W5xuIEvpSS%2FONS1HOf1ZdlyPt0yEpJ%2FXBToWWR%2BvkMKGWzMQGOqUBrLq1C5z%2Fgl9JUZoUboe%2FWXbosaZkbhjpF%2BWmoyjcfDF6SpLTvVCVBdessw8hPYkPWpQKROWXylem7P41i5EJ7PmrycNvn2xS1h8NdXvqwkv3h2r0TfiEM4hthzWruTT4sePM6CCQfqFEEg4oYZHzp83VoplIE6xY7W42Z11uXn%2Bw8UH%2Ft1Gr0n1%2FblZeLPYv%2Bqe%2Bhz08VoZNJXep6AxtMujvI9%2FC&X-Amz-Signature=331459a860f563d7822dd0190f8497a118f27415ecddacf6a4daed11dce032cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4PNLM67%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIG4s2fKvwp3UImU9amXxx9CqU9mMxywcPWGmv7ryuGzpAiEA1vpCS4X%2BY2GRc2I%2B7eLjNhrb%2FNWbH3OwWYJkJryewXEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIGgneuNyDgKDbU6sCrcA6Bz9w2OkhVX057poFDGLR5BhAjTw16KNoAh%2F72wuUuPbhON5mgOqdb9Y83%2BJkYrdXDTo%2FZiCZdtzQPETtX0AxPaQLyr5Y75BGOm37Ojp5M2fV5N3I7cbCB34P%2BUFdj%2F4a4WbycA9bMX2OV61hLV%2BELR2CDPiorJ8PiNnUwb94Khmkm%2Byee6L9ffF%2FDBItNGNPwm%2BV90EE%2Bl0wAu7MeqavnZKCnsOwtJbEKN3oLfmwaIqW%2Fo%2BV8HXAM5rhYAP9C9znLg9X4PvZ5oZHGsbuWf6YBLmdWnSaOfHItUeul%2By06topUJ3IZWS3%2FNemiSvL2hQdNODFZWV9uBh%2FbXZzoKZcj3sY9PzKQTGIW5gvQLV%2FBq56ix%2B1LZMyk4QspTqJJj2RiCJ3t7spTudLJ%2BLHP4wauaa1fiPpbyH5%2BIYgKzBtQ8jP0MiBICK092ejfd3K%2Fc47MbujeJffP5GNAcsb9cgozInNM6zJdVc77B9B69juca9L9Q3ZFRiRXYk56sXmC6iJtm2KyCVLW3UnyG%2BCnRN9g1rFjPafMA3YrGxgdAxuNegOaIZt%2FB2RJit9fPj%2BY7pMNm7ifQmF7NEcEYwf83fSRRoF2QulgSmCXdGyqrY98isnW0J9SeNuXRykRPMMWWzMQGOqUBzrCKTpvAXT%2BX7f3dA5DYHiTEbmV7cW4n%2Bco0gU6RVRo%2FxcenaOrjGjHDOyvCwvfHDMyiTq%2Frpw9J9fleEoLIs3mgUymGKBKAZW5SK8AGYeSS8OUkZEnc60UYKG8W%2BbYIHbbkQeIP7Puxjs04t336QVq8xEXPeR76vFtQjnwhCxfHkj14RDDFBAybA%2FMLQFA2X80ibQMWjCsFw8inwhcTmC30SYXW&X-Amz-Signature=5a7176ff6ecff0fe208ee06e8c3497b15c6aa26ce72cb9f217d2ed2ecf64fdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKRPLMOD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCu2ebGGHO%2Br5ZDcDmJIXiFbvhTq1GMMIZMQUQS8zenzAIgJGync7Sw9U4gzYkf128SHsZUlQAhrYpuMewkS0ueQdEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOxddbkNsle5jTsR1SrcA3VuuLOu7rsgKbLK5yffv8ybwmqZlWPs%2BMwKCE3Sd7oG4hA8IfZApw8p2c%2BgwuXwM6GDGSR%2BB27uf95D%2B%2FQzeT1feDlft9eiC6VdJkKSUSZ4nBgJilmQHMR4xPalEszZXdXugR8KS5jvzPCiQ8YLV0afUlLJybGOH%2B%2BbXPzwjYm530tEzEeB61oHYKi%2B3Ks0WsXsgOKoeTJD9tQNueCrrTwTgJg5xwnnJFm6wAIu4FykkeDVE3fS6ZvAgk2AQvzKmFvHe4mDwbLTtNz2czI5t3zhZe%2BQpF6cXnx3Q2ARW4ukdGTeVEGyJPNTrjc15QmNszQHPn4fZ6Tc55U32jiWeqqGYur%2FKpsRTbYYAEXsiSQA0eFoRE6YqK5TcrcV46DgxWKWhGjYJ1ndqat3nYjq4%2F0GoyRogn7By70JmbexYbEXZQa40Ix%2BCTfmgnK7%2BkeWg7pSkjpAY6PP4FIYcT9qQFvTeQOCtVqJuYEM7v07KND21RFBpGtlMzwfwyIjS6vSv2ZwA1pLKoUnC7PvmmY9ZBKahAk7wi2uk4Jh7Y6Y1LArGSc%2F%2BljVXHaziTFXC9lAvKDGjnau%2Fo3i%2BNpuIyhm5gj8V9nLUeYlFjWWX0QvT0D8e3t9VrSlX11hA5fzMLCXzMQGOqUBQ8KJrDBm2dCJrxfsw0toTGEct4NhZhOrHE4gXdYcEFfUJUvZd%2F8Qp5%2FdqwUSMnnoLbacsUIEjd1DLs%2BpKmPAxiZQgTt0v9eQeFZGk7GXe4XuDypY6WKqZiBfkiPhIG6ZNtGwAZp%2FmAb4YDy4qd3nIUt6pU7IuSYk7gij%2F8QeYJZ7ekJfeS7uuRVCvI24vTf8fSS345eCNMKEuv4WUMZjqGywqXrU&X-Amz-Signature=538a2442e103742f0035a4e475e96f93e9e31e2b517ad30a49e9b216ca362632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
