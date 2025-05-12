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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBUPVAN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCFMrBrBIxsF92o63qX9dSW923YzfZK4wO9nFSr2v6WhgIhAKSx%2B5l9q%2FDnswulA5arn7JenP3ku98XSokPcZecsOvKKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1zTMXxT9hICYsuO8q3AOVFoTOrJhr35PprvoO3OgJs%2B75lEOMREq3KW3Cljjsy2xQqQRwjUNF68ang%2FQ3nra5E1wjEbQJ1BlXtA2yOU7b0KwGcdXdTAUzfuOtFoe6%2FtSR4s4vpYEwJRXHo7FTtrJHVnIabyZ4wrVE7f0FxD1I1NibljlxOycn5gZdRqiDLdKdY3ZMHzxRRYklq4vYgbpKwVoj3yCZD0J4j7%2FWepFgotcrmz3s%2FBO5ZitkhZHjZhgll1%2F3NdI8J5neEeK%2BsLALxfAhDgKeLaYYDIuyAbwDiwUmtj5PLVpeW7KXO%2BELyfWtEhWIW1CeHYHkYLtwS4PhEGW6BBSxr3mPVdYLGqnFtuYkyDxgmEqaAeRE6xxcITOLL98jzs0%2Bi0VSMSYYqM%2BYCBMAvQH%2BFIEig%2BS2HK37wFS8robCWpqdbLEBXVU79dJPOBvBjigE7NefwZDBuf9m0cH7ijAYGLSuWNvM5QNtYTQmCUyVFke6h%2FD86M3RTUL3eKBENelF%2B4WaFcs%2F3RnL4VsX9bsecrAeIKReLOa1rJiVmibu7KaSXjn%2BmpKQLhNpN%2BKjd22I0Ptaee52RUVrNV81wNPpBsfjDq2bvnXDV6Q%2FQOM4vs5lctgWu4MRgri69tQeJ0%2FC9o3XjTClqYnBBjqkAf6qB9M5yclikFzfnLS4PGqQEtvn1wLnyMl6ppgXOR1r8wrQ0UC4849kEqDLnoHCeissMus62WNmWDPl2QQoZ8DvyXcrnpXd%2FzKT%2FN5N%2Fp3tuEGHtzSD4FUmhzhVMWlOvYMGbVWTwAS6n7iBOdRf6k4akClOG3mOXG0A4SE3SeivHZJFS07eb3VfVWds9rxm%2BC9KdgnqJzqwURrqgXgR5cY80Hxv&X-Amz-Signature=e7b2c1a79b1241b11a8ea3ebd6e80824e98c63eedd50fccbfe8bed299945c6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBUPVAN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCFMrBrBIxsF92o63qX9dSW923YzfZK4wO9nFSr2v6WhgIhAKSx%2B5l9q%2FDnswulA5arn7JenP3ku98XSokPcZecsOvKKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1zTMXxT9hICYsuO8q3AOVFoTOrJhr35PprvoO3OgJs%2B75lEOMREq3KW3Cljjsy2xQqQRwjUNF68ang%2FQ3nra5E1wjEbQJ1BlXtA2yOU7b0KwGcdXdTAUzfuOtFoe6%2FtSR4s4vpYEwJRXHo7FTtrJHVnIabyZ4wrVE7f0FxD1I1NibljlxOycn5gZdRqiDLdKdY3ZMHzxRRYklq4vYgbpKwVoj3yCZD0J4j7%2FWepFgotcrmz3s%2FBO5ZitkhZHjZhgll1%2F3NdI8J5neEeK%2BsLALxfAhDgKeLaYYDIuyAbwDiwUmtj5PLVpeW7KXO%2BELyfWtEhWIW1CeHYHkYLtwS4PhEGW6BBSxr3mPVdYLGqnFtuYkyDxgmEqaAeRE6xxcITOLL98jzs0%2Bi0VSMSYYqM%2BYCBMAvQH%2BFIEig%2BS2HK37wFS8robCWpqdbLEBXVU79dJPOBvBjigE7NefwZDBuf9m0cH7ijAYGLSuWNvM5QNtYTQmCUyVFke6h%2FD86M3RTUL3eKBENelF%2B4WaFcs%2F3RnL4VsX9bsecrAeIKReLOa1rJiVmibu7KaSXjn%2BmpKQLhNpN%2BKjd22I0Ptaee52RUVrNV81wNPpBsfjDq2bvnXDV6Q%2FQOM4vs5lctgWu4MRgri69tQeJ0%2FC9o3XjTClqYnBBjqkAf6qB9M5yclikFzfnLS4PGqQEtvn1wLnyMl6ppgXOR1r8wrQ0UC4849kEqDLnoHCeissMus62WNmWDPl2QQoZ8DvyXcrnpXd%2FzKT%2FN5N%2Fp3tuEGHtzSD4FUmhzhVMWlOvYMGbVWTwAS6n7iBOdRf6k4akClOG3mOXG0A4SE3SeivHZJFS07eb3VfVWds9rxm%2BC9KdgnqJzqwURrqgXgR5cY80Hxv&X-Amz-Signature=0c1e0ad0e41ad910c3140cdec39a3d4bd5c5ee0a3a3fa2383c025d83ccc86345&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBUPVAN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCFMrBrBIxsF92o63qX9dSW923YzfZK4wO9nFSr2v6WhgIhAKSx%2B5l9q%2FDnswulA5arn7JenP3ku98XSokPcZecsOvKKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1zTMXxT9hICYsuO8q3AOVFoTOrJhr35PprvoO3OgJs%2B75lEOMREq3KW3Cljjsy2xQqQRwjUNF68ang%2FQ3nra5E1wjEbQJ1BlXtA2yOU7b0KwGcdXdTAUzfuOtFoe6%2FtSR4s4vpYEwJRXHo7FTtrJHVnIabyZ4wrVE7f0FxD1I1NibljlxOycn5gZdRqiDLdKdY3ZMHzxRRYklq4vYgbpKwVoj3yCZD0J4j7%2FWepFgotcrmz3s%2FBO5ZitkhZHjZhgll1%2F3NdI8J5neEeK%2BsLALxfAhDgKeLaYYDIuyAbwDiwUmtj5PLVpeW7KXO%2BELyfWtEhWIW1CeHYHkYLtwS4PhEGW6BBSxr3mPVdYLGqnFtuYkyDxgmEqaAeRE6xxcITOLL98jzs0%2Bi0VSMSYYqM%2BYCBMAvQH%2BFIEig%2BS2HK37wFS8robCWpqdbLEBXVU79dJPOBvBjigE7NefwZDBuf9m0cH7ijAYGLSuWNvM5QNtYTQmCUyVFke6h%2FD86M3RTUL3eKBENelF%2B4WaFcs%2F3RnL4VsX9bsecrAeIKReLOa1rJiVmibu7KaSXjn%2BmpKQLhNpN%2BKjd22I0Ptaee52RUVrNV81wNPpBsfjDq2bvnXDV6Q%2FQOM4vs5lctgWu4MRgri69tQeJ0%2FC9o3XjTClqYnBBjqkAf6qB9M5yclikFzfnLS4PGqQEtvn1wLnyMl6ppgXOR1r8wrQ0UC4849kEqDLnoHCeissMus62WNmWDPl2QQoZ8DvyXcrnpXd%2FzKT%2FN5N%2Fp3tuEGHtzSD4FUmhzhVMWlOvYMGbVWTwAS6n7iBOdRf6k4akClOG3mOXG0A4SE3SeivHZJFS07eb3VfVWds9rxm%2BC9KdgnqJzqwURrqgXgR5cY80Hxv&X-Amz-Signature=fc1aa5c34e0b2e80514f4dc6d52d1996df68171e7affd97b77d0a77b92197e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJ5PWDR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHUKTdtMLAhEvJVnThGd9dTyaCbVKNkZD8FP3q51aeduAiApdAff5A1gThSxaFFBL5XIH0f7GaG0qOBeew0qSwP%2BgCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZxtt83t7bLg3RES4KtwDNOY6TYXbIegs2XSI5Px%2BgW6FyCoTuePKqbncNKuaQMJ7LSXLWkJ2EYvOUXdVB9eqJ8i9SdQJnMTcbwGqoWI9pUBAY%2FWQqzhx7d6Adw14WyaNxZuff5w1bhHAw1bFgH6OZygsG7x5FPRLoQoN%2B8o3hQ6lAgFC1HbYFq2ITZzsZNGBhfdlCw9Ie6zbNReCU1YcQb0ehCS7JLGUIr4XQ5RtilQ0dPCZFON1gZ6iDHpJtf4eglGi1V0ytcE816Tc3DBuQ2nWpulzEzDq92Ax84Aa%2BzSDWCzpyufkdbtb6k1F7N9tCmYEwso1bI9BX2WWASQBkj7HMJOaNyTxtyeWkvsYb%2FPA%2B6gXS85QCEhX8%2FCJCXVODkzZDdxxmfjlx2Wt0pTL8iIFpeg11sfcUqQZnNwLk%2BDf5wxG1gjLn6kGRB6k%2FSqCkLe%2B8cN4%2BdUQvL4vY46T6SX2IretGH%2FQKBrzjj89fnK0L3YILliZhIisqiaEm2HRAWJ2r9Uk9u5QvavV%2FBx2J0ivOICZfZK4dC6PCMlns3XpuIUlY%2FYhzB9HsshA6xKwVj6e%2BfOmPsjK2dTIVBxTiR0EjaI3x%2FgpVQu2oUjioFQgICkBQSuYa86GY%2FiS7No0Mo%2F%2BZ97V68BOPWkwkKqJwQY6pgFS8FiRvk7rnJwiNHf58f43ROl5Uwi5FFspV3Xo%2FplhGpMVMiMEOL1Ak13BN7tsKCB88o%2BVz5FEjwd0QYMw6CjX8FcfIOYQ9GsFcit3hkIB3eWTAovuSQTGPBvPvUYL7G%2FxzVQwr%2BAJuLZpQG28MXIYFlgk%2FyFzdlbsyxBfaTranZuA%2BzPvYy%2FIantGxh27Vbzaco2W1jv5LZdHiqBM3fqJnxVYgpKT&X-Amz-Signature=31b237fb4eb360a69a96602d0a70b7e9c421cb13cc3a5a4b90e7b34f7c7368e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB7D3E7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBZkhk2mucuNWSNOuUDM5t0eHGAlkurHpnUdarwoSaExAiBd2bLWBAvmzBwOjh3FsOKZ9rEk09eE4tAqs5ZN7Trb0CqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM807sxfHIjK7AlkAuKtwDK%2BQOF%2FusK3doJIWPwruXTLuLoOoBtCt0UiGrM8L%2F4SZntocsLRGdEt3%2FkhIB0F8zodLPBAKfUtEZvfDzuHmfmEKhKJjzN6Bx8f66AEdoPSnB2RBBTcOQJEVYdtE6VGIypqqFo%2BZjWYMmLsn1wseVb%2FUxTnrgrCsr0Lau2wPohSGbW7M5D6uwRPIlMKG73pg9DVm1cOQizypJJ%2BjuE2bUGWCjG4J46x4ORcpKPrlcHrsWjCv6uf4e82NR2xVwRSFYxoQeswyCLZxr9O0DJwyUDIKfRS%2FDmbiFag2Pw4zuH0160sG2rDngDAwTuf8R5AAKVCkjlDJN7xuJo%2FKZjB4Jep23DYCSZcUCMz2wWreMLi3Yt%2FSeGXkrFj%2BX2jDkypD1ezbOyC0rEzT0ToTjtjlaqoaKFqZfgVb7kBM4fsreYPpJMnNkmFRnSlEnfMIbI7avUK3AhZ28i%2FucClj0OIDqJUPXDfktr5BwthyCPjlMh2HaMo1qEe%2BZWYlhvnwBNVh86RcHnvcJCQN%2B8yTHoZS0UzpSn6JNgl5l67LAtKx8B12jYidMn7Vb486nQxb1GmgSximzXq%2BfJf%2FZYVtmnkuxOfn1xQXIfaODq%2BK2a8OkaWNBo8B0%2BtRU1QgHINgwx6mJwQY6pgGtZyD5SpPiTqe%2B7N6Nc3rIO0%2FPcredJKa9gBwC%2F8BvM6GrQ78hBZG8DknY4AesNT%2B%2BU4HoDdNwgw%2BWcfaeJmNU4uNwgUkYJtrZ3UirE9JhTlsuZhvcPy6QvZ39PINM%2BdG%2BUjfzHHBFsx3eaqs1mLQeRIU8ZLYsGWVFtYEC4Kycc79SEGwI3c0%2FUF3xOBY5w8Dc%2BD8d8xcGN6KUA%2BH0SZy%2BvfvCuCOI&X-Amz-Signature=8346436055a0399cb48f7d4d0f040f429e685baa05724ce5a592405d1c00dabf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBUPVAN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCFMrBrBIxsF92o63qX9dSW923YzfZK4wO9nFSr2v6WhgIhAKSx%2B5l9q%2FDnswulA5arn7JenP3ku98XSokPcZecsOvKKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1zTMXxT9hICYsuO8q3AOVFoTOrJhr35PprvoO3OgJs%2B75lEOMREq3KW3Cljjsy2xQqQRwjUNF68ang%2FQ3nra5E1wjEbQJ1BlXtA2yOU7b0KwGcdXdTAUzfuOtFoe6%2FtSR4s4vpYEwJRXHo7FTtrJHVnIabyZ4wrVE7f0FxD1I1NibljlxOycn5gZdRqiDLdKdY3ZMHzxRRYklq4vYgbpKwVoj3yCZD0J4j7%2FWepFgotcrmz3s%2FBO5ZitkhZHjZhgll1%2F3NdI8J5neEeK%2BsLALxfAhDgKeLaYYDIuyAbwDiwUmtj5PLVpeW7KXO%2BELyfWtEhWIW1CeHYHkYLtwS4PhEGW6BBSxr3mPVdYLGqnFtuYkyDxgmEqaAeRE6xxcITOLL98jzs0%2Bi0VSMSYYqM%2BYCBMAvQH%2BFIEig%2BS2HK37wFS8robCWpqdbLEBXVU79dJPOBvBjigE7NefwZDBuf9m0cH7ijAYGLSuWNvM5QNtYTQmCUyVFke6h%2FD86M3RTUL3eKBENelF%2B4WaFcs%2F3RnL4VsX9bsecrAeIKReLOa1rJiVmibu7KaSXjn%2BmpKQLhNpN%2BKjd22I0Ptaee52RUVrNV81wNPpBsfjDq2bvnXDV6Q%2FQOM4vs5lctgWu4MRgri69tQeJ0%2FC9o3XjTClqYnBBjqkAf6qB9M5yclikFzfnLS4PGqQEtvn1wLnyMl6ppgXOR1r8wrQ0UC4849kEqDLnoHCeissMus62WNmWDPl2QQoZ8DvyXcrnpXd%2FzKT%2FN5N%2Fp3tuEGHtzSD4FUmhzhVMWlOvYMGbVWTwAS6n7iBOdRf6k4akClOG3mOXG0A4SE3SeivHZJFS07eb3VfVWds9rxm%2BC9KdgnqJzqwURrqgXgR5cY80Hxv&X-Amz-Signature=7d9bf4b05dc21c1db00738bd0a10525e39ea60ab78d003c8c686e56f175d84c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
