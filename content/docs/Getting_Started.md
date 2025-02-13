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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQKMC7G%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAeIBbf%2B5OCMUq%2BbOKgajxgt%2F4I8%2FgoKZ9DO5ZtRkzkAiEAs3EYyA9FV7Zl0qZjzRsR61%2B0KnWUtHbTTTC9N27QVhIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNjod43Gvo%2BPunPJHircA1Vx5zjY260%2B0NO98hzSld952j1dYPo1AknqjVPVhZD9hnJ1KRdV6jqL0pVa%2BzAqqUk1I7og6xpfNrh%2BxXHbDuC7fi%2BamsaNtgo%2F788rmxTwBW7w41sO3VYhCxCfF4m6D9sLxx24uXJWKKjwnGXB%2FiYj%2B49HDZMXN63ckcqmBkP1yiziEjKAzShHQ6d5hEiy4RY5%2FsE9RWRdKF%2Fd%2B8naJ0Cr%2FlrUxGXIi4081ICxIWKDkYXNkFX0MdZ568VRez9TrrMC6acrME6rlWsvr%2BnleR%2Fat%2FbOZ%2FJVQvd2bcANyQ5RxbrbxbXICztPFho%2FM6mj2f2aZ8MBSkX3qHXBwX9Ax9YpaWiooeiMnUsAtEcP4b016LMoFasHiCKJUuxV4nlI9jAAz9rKh3gWj6l7gzzfGDozVjezePiLK0SJfZwlo0OdUsqit4GiuGY1tFJR%2F4YvImHdCddmaGHbOOwJIBmGixtXd7wOVlUpd9jnP%2BUzvk0EOS%2Fj%2FifPYCS4Ocy5b7JnX6D9S%2FxQ6u32QpfU7uZscPFetCHaw0Zk0cL5Sx7qmLtMQZ4stOR5WgboopaysUA26vte%2F8vkv8DdSSqEvsE5Gyyufx0UIRAtMKeT3uDSDXt0rwwtEwRkzCwXAdUQMOWht70GOqUBTqnJOGDwGqtX3QSYc%2BurYFF1BNSovcttI7tM8%2F4envKQJYzJMVWWSPUWmQnJDlIL5Mqyg0aQg%2FS2fq42SQdrHmluwyjupyvLU0O0Jdvxu7whlKfORayzs0IqyVbd9dAFwcejT75L2WxN%2B2xTKLaialkwJ01mJBXq%2BCSrVL7v%2BbyQxgB9zbJY2rbRSSUfRu67n5ZT7JmbfeH%2FI4ppYu7VEVm66Xey&X-Amz-Signature=a773b73f8b9ebdfbc7977b12cdc6383b1fd78db5c307908066b20b3ce4be563c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQKMC7G%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAeIBbf%2B5OCMUq%2BbOKgajxgt%2F4I8%2FgoKZ9DO5ZtRkzkAiEAs3EYyA9FV7Zl0qZjzRsR61%2B0KnWUtHbTTTC9N27QVhIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNjod43Gvo%2BPunPJHircA1Vx5zjY260%2B0NO98hzSld952j1dYPo1AknqjVPVhZD9hnJ1KRdV6jqL0pVa%2BzAqqUk1I7og6xpfNrh%2BxXHbDuC7fi%2BamsaNtgo%2F788rmxTwBW7w41sO3VYhCxCfF4m6D9sLxx24uXJWKKjwnGXB%2FiYj%2B49HDZMXN63ckcqmBkP1yiziEjKAzShHQ6d5hEiy4RY5%2FsE9RWRdKF%2Fd%2B8naJ0Cr%2FlrUxGXIi4081ICxIWKDkYXNkFX0MdZ568VRez9TrrMC6acrME6rlWsvr%2BnleR%2Fat%2FbOZ%2FJVQvd2bcANyQ5RxbrbxbXICztPFho%2FM6mj2f2aZ8MBSkX3qHXBwX9Ax9YpaWiooeiMnUsAtEcP4b016LMoFasHiCKJUuxV4nlI9jAAz9rKh3gWj6l7gzzfGDozVjezePiLK0SJfZwlo0OdUsqit4GiuGY1tFJR%2F4YvImHdCddmaGHbOOwJIBmGixtXd7wOVlUpd9jnP%2BUzvk0EOS%2Fj%2FifPYCS4Ocy5b7JnX6D9S%2FxQ6u32QpfU7uZscPFetCHaw0Zk0cL5Sx7qmLtMQZ4stOR5WgboopaysUA26vte%2F8vkv8DdSSqEvsE5Gyyufx0UIRAtMKeT3uDSDXt0rwwtEwRkzCwXAdUQMOWht70GOqUBTqnJOGDwGqtX3QSYc%2BurYFF1BNSovcttI7tM8%2F4envKQJYzJMVWWSPUWmQnJDlIL5Mqyg0aQg%2FS2fq42SQdrHmluwyjupyvLU0O0Jdvxu7whlKfORayzs0IqyVbd9dAFwcejT75L2WxN%2B2xTKLaialkwJ01mJBXq%2BCSrVL7v%2BbyQxgB9zbJY2rbRSSUfRu67n5ZT7JmbfeH%2FI4ppYu7VEVm66Xey&X-Amz-Signature=7c2d55d2be02b2ffb415718f4d0f87dbfd87d3840bcb73d1c237ff3043945365&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSQDJTMD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh5mz0ZhDb4aOu7WAytmurv7FaCR4PFTlYwvc4V5H97QIhANAvwyrWIs5UXWmRWUXWwlsZQwXmPke9ccy1VRBSHOnzKv8DCBMQABoMNjM3NDIzMTgzODA1IgyCW92BDzXjfFlEaL8q3AM3vEWuDaeAYQxFfTsYkyUEWk%2FFfH%2BfWBYPriwwA0DxXIGio8KGqBZ2upd7lSJqLvbJd2R9boBtLmdMOfMtoKbBKyndR%2FMw84Jww06HzeFkrIM67D2oivN4RkttSjaxjdkNadJQjtZiMwpCU2CSgdjp76BKUK6EDTKb6vx7YtnUyleZw0lSvBP3x3xtYahEtDxERp1MkBQ54FKnAEUd8M0z4EUs50uCOPhJHXjPv%2BPGjSDzqMo3RaiFA2tT8lvLJAsO3eQI7%2BkRqVYIEiX6w6ndzaS9pAdBkMZ7%2F6WVFpOT0jirEoRvSupYncy4Y56mIFlQyZU35nsmr8Ae%2F7HUBCURXJzi7MVt1NafROWu1VCvA3cKTYo7hze9VTHfuRah9Bra1TB46OCJwE%2BMQV1ZVEpl5JkGMBXGf1Sxr8QQqbSZYYCf9o%2B82SaG%2F%2FMqtbn7OFFaciHBcVNH1kjk%2FrZyGmVLuNNV6xpQAR%2FWNlDe9h5LGF2v9Gru7CLexnZlQf%2Fzwjb0mz55XO8Eo7gUKfNmUmbPekBF1CSqE84ffmmLQHhQ%2Bp4nFT%2BEQP0lVg8qroFlQusrORyXktWrd9prCevq%2ByrrmF1EASQTUcCluFEZnukW3cIZpjQLcfvyheXYbzCThre9BjqkAQBpoSGWxR%2Fpg8RPb86tjfVPJJm3HWPfmjTalQnCrvo5jRTIyvetYxMKMxFW2GX1wT5Kpe2Le327UJEXkn4PetSDPuSsCcYWnQA%2FQCgj%2F071kciEcd5fnzde7ZtFzD7NNd84vRO0HlKW%2FYwztH%2Fcvz4g14yMJkhT2jxkz2dhaGejDMViByce0tTZ4fn2sv%2BN2%2BByrCgpKZTw8DGrV18lmy92ezDv&X-Amz-Signature=f6293649a9d7adf279d16101c919406c8a133231b3136189a5e09ce1c861a87b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXLWWQ2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFTnKqX11linMusJ8c3ra6eq3O35xgF50uWCvNnqfWHAiEA4EyGEnIjHOce1RdzjQh4%2Fa7d1w7usWwD71N7IYk0c5cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDKZZHxToW1D8%2B25juSrcAzsuNh9f6SYkIhjv8TTuGndksvikdpNPrPsTZyHvZBR7Iuv%2B4tnhb1GikR%2F9BiYvxZmBE5bfhje%2BEuOeNvxREhSAU4XFGpqzkJNPWqf%2BgeOMthMLu67MCZSkJxT6QWELh7OQExsB52xW4lB0IQu0kEiSvxMsfujjqKRIWEZKyTqxfB3JevmfyzfS1ylmwxbFqiU4TCW2fNx5Mefo7mw%2BL%2Fp3vNTDbKTLgogmG4Ky6dyFqyFC1Nujz8O%2BTrLtKIeDdVvIjNe9PXC%2BYnSqRA%2Fk67DRzxoN3o9lHRreRksMtupxGLVpy0LpNsfhYajt%2BYx4MzaafaDhlHPHgHw8KIFulKQYzxXzNVLwBHZe1Lz3kGK%2FBnsCCJ9VqfydUvQdVsXWphkY72ouDTpuWrAbFYGQn1FdioNyGrZ3VLFTZQUPLxXPzjS%2F9APh1UtRZDEZ8f9a3Y68f0wdoW0xreqDp3dZgac4QwDS%2FQhBPFlXWIJ7ZfIZkm4z40PXGahL0MTztWfez0Ybg4huhrYmuEQTeOHSwoVBw8BARGJFab8WYSDxR%2BVdmcD1vT1nh08RpkFgV6aDylJ8iAnaIJoSYoX%2FElQCe%2FgXFWR4EHskxUVpUT4YnnTMOhJ%2BUTOVCzv4ytFcMNuGt70GOqUBqv6mISTmKMq4Kjt9Vn7A5VLHnhzkCa7FdSHStNdMIQtOF5FQq6ej04QtwPhAnibUHXUI9RAcDk6a3mHVYNfyjn04cOvtkR7fdl4OKaubnQm5IXAKObxI3ruixQh%2FXWCaV6RH9VujS1GBvzfBqpqNGZG5lBGS7hoh10SiCUAOyR9z2YZgXZbPucw%2BgefuiWsZSOALoXvLS1XPGrHiBtMdf%2FQ5816F&X-Amz-Signature=2e36811776bf17c4e296a949b83270706c93f96dfa86fbb2be3dbb05fa1e5390&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQKMC7G%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAeIBbf%2B5OCMUq%2BbOKgajxgt%2F4I8%2FgoKZ9DO5ZtRkzkAiEAs3EYyA9FV7Zl0qZjzRsR61%2B0KnWUtHbTTTC9N27QVhIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNjod43Gvo%2BPunPJHircA1Vx5zjY260%2B0NO98hzSld952j1dYPo1AknqjVPVhZD9hnJ1KRdV6jqL0pVa%2BzAqqUk1I7og6xpfNrh%2BxXHbDuC7fi%2BamsaNtgo%2F788rmxTwBW7w41sO3VYhCxCfF4m6D9sLxx24uXJWKKjwnGXB%2FiYj%2B49HDZMXN63ckcqmBkP1yiziEjKAzShHQ6d5hEiy4RY5%2FsE9RWRdKF%2Fd%2B8naJ0Cr%2FlrUxGXIi4081ICxIWKDkYXNkFX0MdZ568VRez9TrrMC6acrME6rlWsvr%2BnleR%2Fat%2FbOZ%2FJVQvd2bcANyQ5RxbrbxbXICztPFho%2FM6mj2f2aZ8MBSkX3qHXBwX9Ax9YpaWiooeiMnUsAtEcP4b016LMoFasHiCKJUuxV4nlI9jAAz9rKh3gWj6l7gzzfGDozVjezePiLK0SJfZwlo0OdUsqit4GiuGY1tFJR%2F4YvImHdCddmaGHbOOwJIBmGixtXd7wOVlUpd9jnP%2BUzvk0EOS%2Fj%2FifPYCS4Ocy5b7JnX6D9S%2FxQ6u32QpfU7uZscPFetCHaw0Zk0cL5Sx7qmLtMQZ4stOR5WgboopaysUA26vte%2F8vkv8DdSSqEvsE5Gyyufx0UIRAtMKeT3uDSDXt0rwwtEwRkzCwXAdUQMOWht70GOqUBTqnJOGDwGqtX3QSYc%2BurYFF1BNSovcttI7tM8%2F4envKQJYzJMVWWSPUWmQnJDlIL5Mqyg0aQg%2FS2fq42SQdrHmluwyjupyvLU0O0Jdvxu7whlKfORayzs0IqyVbd9dAFwcejT75L2WxN%2B2xTKLaialkwJ01mJBXq%2BCSrVL7v%2BbyQxgB9zbJY2rbRSSUfRu67n5ZT7JmbfeH%2FI4ppYu7VEVm66Xey&X-Amz-Signature=5ee7ebdc406056fe202d0dce2c0237cd1393f46e7254ce8d157ac2718d82baaf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
