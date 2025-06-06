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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GK6PXXQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDoARAjYLeM3JF4ZT%2Ba%2FP515w6FSKy2qwE6Dj%2FQ3L%2BU7gIhAKBSHVIKDZ3rY6WZONi9Xch5mZkIDcCSH2JL7Xeq2yyLKv8DCFQQABoMNjM3NDIzMTgzODA1Igz2HcXjMDzNzN2vRC4q3AMjx0S4I4AOificGy%2FbuSAd7ZMEZoj6Noj2N4u9iCE0y8Rg%2FnWI1iOwoPbZ8mCFuQrefx5NchweJLOEXLPwBQWiYWMhjw6HfU9eauRknqGs%2FZuLDrH0wRLqHsJT%2FPzfKKQZvQbuVV5d3f%2B%2FYng8UlJH1duem5cQIASu1h8t%2FUthTIuT8G9Mrk5m0N3XDa7p8e2IkOtUms76n0w5DsyIr%2B5ysLBWhN1tuvS4qpRuz6c8Lk41CKVqI8GWo9FsiD0kvrV%2BOc1Sqv4sWEEdfwjQK5ik817qfHFr7KRkEs4cV%2FBV9mUobYEqvSn1ZKsovNY4sY6CKvLQT6ojKR8wy4tTDzlj0ca%2Fz83EkMhZDQMboELg%2BaFHpdMfMQgGOzlfxz%2BuKzDKt7wuebtUwUuNlTOWbEgFT1vN7uPnEe0XyhMrBWZAAroE6A%2BEOBWwFQfoGHMfUhBlKJ%2FtlGI4KDbjxfrEOde1KLmqE9silkdZc8sQM54hKNzGVa%2BQp6M7UBqVeYgn%2FwtCWSOvT2%2FVElp%2FUgMs4MKXZYD9SiBMwKgcasfe1k4Twl%2FovI9EQoyLGSpHUxOczuvLslomw6IUz3x%2F6z9m4PEbK29Syqo0Dk8%2BhUVuXI2be8gsh6GdJjoaQvRaIjC0qInCBjqkAbfKKmPnEQHxd79U4Rb82qMD4EhZVw4OD5yOYHVN%2By8UTVqgIwfgke68%2BvDnr%2FmmvOajbYkpG29g7uz%2FS2CLzxSQidqQ7g4QCLmdqlsPgHvBLBF%2BdHU2lzgKDvJSCpV%2F0C%2BwY8vXI7DNHWlF5cPzg45A3ZYwcZPJCcz1jjEAyrxFLalS9u52%2BlugpaNdn4LdF3AU%2BjL4mEBfVUC0HT%2Frt4MbgQFW&X-Amz-Signature=5f3b73d9bce6effcad16268a4db466c5868cc29db598742e53a489c63e0b381c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GK6PXXQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDoARAjYLeM3JF4ZT%2Ba%2FP515w6FSKy2qwE6Dj%2FQ3L%2BU7gIhAKBSHVIKDZ3rY6WZONi9Xch5mZkIDcCSH2JL7Xeq2yyLKv8DCFQQABoMNjM3NDIzMTgzODA1Igz2HcXjMDzNzN2vRC4q3AMjx0S4I4AOificGy%2FbuSAd7ZMEZoj6Noj2N4u9iCE0y8Rg%2FnWI1iOwoPbZ8mCFuQrefx5NchweJLOEXLPwBQWiYWMhjw6HfU9eauRknqGs%2FZuLDrH0wRLqHsJT%2FPzfKKQZvQbuVV5d3f%2B%2FYng8UlJH1duem5cQIASu1h8t%2FUthTIuT8G9Mrk5m0N3XDa7p8e2IkOtUms76n0w5DsyIr%2B5ysLBWhN1tuvS4qpRuz6c8Lk41CKVqI8GWo9FsiD0kvrV%2BOc1Sqv4sWEEdfwjQK5ik817qfHFr7KRkEs4cV%2FBV9mUobYEqvSn1ZKsovNY4sY6CKvLQT6ojKR8wy4tTDzlj0ca%2Fz83EkMhZDQMboELg%2BaFHpdMfMQgGOzlfxz%2BuKzDKt7wuebtUwUuNlTOWbEgFT1vN7uPnEe0XyhMrBWZAAroE6A%2BEOBWwFQfoGHMfUhBlKJ%2FtlGI4KDbjxfrEOde1KLmqE9silkdZc8sQM54hKNzGVa%2BQp6M7UBqVeYgn%2FwtCWSOvT2%2FVElp%2FUgMs4MKXZYD9SiBMwKgcasfe1k4Twl%2FovI9EQoyLGSpHUxOczuvLslomw6IUz3x%2F6z9m4PEbK29Syqo0Dk8%2BhUVuXI2be8gsh6GdJjoaQvRaIjC0qInCBjqkAbfKKmPnEQHxd79U4Rb82qMD4EhZVw4OD5yOYHVN%2By8UTVqgIwfgke68%2BvDnr%2FmmvOajbYkpG29g7uz%2FS2CLzxSQidqQ7g4QCLmdqlsPgHvBLBF%2BdHU2lzgKDvJSCpV%2F0C%2BwY8vXI7DNHWlF5cPzg45A3ZYwcZPJCcz1jjEAyrxFLalS9u52%2BlugpaNdn4LdF3AU%2BjL4mEBfVUC0HT%2Frt4MbgQFW&X-Amz-Signature=e8f256aa47ba66f07ab24b82f2e294c64ab8ab270e0dc2fdeb28cfee845426f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GK6PXXQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDoARAjYLeM3JF4ZT%2Ba%2FP515w6FSKy2qwE6Dj%2FQ3L%2BU7gIhAKBSHVIKDZ3rY6WZONi9Xch5mZkIDcCSH2JL7Xeq2yyLKv8DCFQQABoMNjM3NDIzMTgzODA1Igz2HcXjMDzNzN2vRC4q3AMjx0S4I4AOificGy%2FbuSAd7ZMEZoj6Noj2N4u9iCE0y8Rg%2FnWI1iOwoPbZ8mCFuQrefx5NchweJLOEXLPwBQWiYWMhjw6HfU9eauRknqGs%2FZuLDrH0wRLqHsJT%2FPzfKKQZvQbuVV5d3f%2B%2FYng8UlJH1duem5cQIASu1h8t%2FUthTIuT8G9Mrk5m0N3XDa7p8e2IkOtUms76n0w5DsyIr%2B5ysLBWhN1tuvS4qpRuz6c8Lk41CKVqI8GWo9FsiD0kvrV%2BOc1Sqv4sWEEdfwjQK5ik817qfHFr7KRkEs4cV%2FBV9mUobYEqvSn1ZKsovNY4sY6CKvLQT6ojKR8wy4tTDzlj0ca%2Fz83EkMhZDQMboELg%2BaFHpdMfMQgGOzlfxz%2BuKzDKt7wuebtUwUuNlTOWbEgFT1vN7uPnEe0XyhMrBWZAAroE6A%2BEOBWwFQfoGHMfUhBlKJ%2FtlGI4KDbjxfrEOde1KLmqE9silkdZc8sQM54hKNzGVa%2BQp6M7UBqVeYgn%2FwtCWSOvT2%2FVElp%2FUgMs4MKXZYD9SiBMwKgcasfe1k4Twl%2FovI9EQoyLGSpHUxOczuvLslomw6IUz3x%2F6z9m4PEbK29Syqo0Dk8%2BhUVuXI2be8gsh6GdJjoaQvRaIjC0qInCBjqkAbfKKmPnEQHxd79U4Rb82qMD4EhZVw4OD5yOYHVN%2By8UTVqgIwfgke68%2BvDnr%2FmmvOajbYkpG29g7uz%2FS2CLzxSQidqQ7g4QCLmdqlsPgHvBLBF%2BdHU2lzgKDvJSCpV%2F0C%2BwY8vXI7DNHWlF5cPzg45A3ZYwcZPJCcz1jjEAyrxFLalS9u52%2BlugpaNdn4LdF3AU%2BjL4mEBfVUC0HT%2Frt4MbgQFW&X-Amz-Signature=1695c6eb6d4607090353a4e4f8caf284b2dc08a87e613dffa0cc4a26751a3cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4YC3IAA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIDsXpCKDwQlWT03aRRqgJc7zOj%2Bvv9iV2DsGMVP4dqzTAiBdCWYGLi26iePkc0Tq8Nyq6vYynalqJImKxps3OO2ywir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMfqP3%2Bo1rlnVd%2F9JwKtwD9q45eTdTARzSo%2FEKWgG%2FmTKl%2BTu028ToEf0xqCnaO1K%2Bdri%2BO3yECUsMxN1g2ZXN0mbGwWY3qxJxXUa6bns6vgBv7sD77%2FptBpJOJwu8TYOE6oISvl1OPMhua%2FbK0Vc3mw5eH7i6pBlxJIfN1sqnrG6%2Bq37w%2FP%2F7MokNXMNBOUKn6ttEGBVnXthDIRvK44%2BoR7ow2IzyfN%2Fpy2ybvp2e3uICGZEbq6pJRX8VGZMqkTqv1mSrJDIffYbCd0PJotTFmS%2BvR%2B5LazZIJaKNjDrauTgKo12kO5yHyJzriqkJ38jk%2FpNQ6iKM6Wvi%2BaJ%2Fldxf5CruAjgYD9nDphjpfpzddeezjP6fmUaQGgJBPXBPqYRRoWRgnNxVljJWgs9UiZET3fMkhwtx%2BiOpkEFtlgnDMMOzRqkRaS1Yqc9KYSG7w0LqqES4sB5Eln5KzRPuQuEFHIiNm8e6IovazbVAENRgVf0IJuEMkQH6v31wOqnwbh9t%2BgiHMdsTWOy7ztHvIvmn0Hv30gTyUrH8DXp4vz2RFBB%2B9p5Qv5U7i9lAupxoWPeYRcH1s%2FWY5h%2Fgd2YscWBknm0yxfIxp9GSl7RhvuzeSvZwloHpc%2FLEZ9NyEmIjoE92oJCCcZ2KnIgqb3ow9PeIwgY6pgHXAhuG%2FrCSeFy4SKiqnxDd9Sdnx%2FySU52G7qHMO%2F8c7Y9lU8huY%2BzlNEbTJJQkWf0NPQ5tyLHHRWx3IGmOQF0n6Wg8xAN5ACOa3vJ0QnpdzKZkH1w0ZJu3fsQbnv%2BuV%2FqRfH9dmZWtGTHbqs2fqF6dfnEibmJm%2FxPncgppwy2%2F7eTKyQ2PYurFIYjnUDQiHFbpgyM4AotOCeC5QpjAvzol0ug5wl6q&X-Amz-Signature=16c1af81e5ba7e3aeef91397f190467e3d4b5358e2ff48614344870130be8bd1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QH4WFTT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDVVMUWQoKQORV%2F0Ns5F3ZQ7HVvGYncJOYRRkMpW2C7aAiEAyuDallMlu2sqGUdgDRdm7NA2nieVjzI%2BzO3WmVMKS44q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPVuJcS6s5uBrXzpMCrcA4cT1vFIjGclYfNXSGs7MmxDgw1X3oXpRYSx5L%2BFIz55CXQA1874qQ98F69d0d7j8KISXNFO0P%2Fw%2B17wsYqCFse0L2zZHmPQw%2Bn5NC9gIGE72C5dIz9rh%2F7l56ltAsbwq6sJT8HMq8JtSaXUDV0Q8Nc7TYX4k6MK8H5MhJupEjqfys7vXsVnicv3y%2FWtyCA7vB8gnqAvNNQL%2Fp30Eg4Y2mb1%2F8d067Yv8IcnZgbthW%2FNVWq61JuWhXReq7otgJQ8okDLezZTKyQKW2ubyrHZIjXfYdTjcnavf9lPrR%2B6k0fyBrdmmk7T3R03VHPfbzqrfN3MXDtGK2esgyQaUNRAQlrbwSGQAh47sUt5cAsRl4cpks2L5c2AHgQS0lMoh3WtNoC2a71C%2FOfiIzY8bhOsXgNG88oQrwZ0nOEr9XhT8rCfW3diAoCrwdzRtCu5HfLk1kJ95P56qH5pFM1ZkaJYdTj7qKMoDNthv9X1%2Fn6pngKRtmeEOTjFwLPJOs9NTYcD1jRPuLfF9E988gs%2BexQORgrElj4AqdORmVnbiN4%2BiRq0M4r4JmnKTnWq8pds8XFXy58NGDaB%2B1ZvVY1o%2B9xXJWQDQ48gcM8J2ucOQ0GkdedPUDXtoqkB17zEysFMMOj4iMIGOqUBXsVJ184VXIRFHb5ff0BzOrcTEQgHkJD58RC5nupbUAYMLg5vrwtC7eJmwbg1zlJGs8OvU5GOND%2BmU6ixlUo1hH5H4VZuhujTyKHYECmWgnZ%2FhNWVuYKLiNZtE7HyexEB8c12DUOJqbZcunBFmmdJ0nQ9%2F8LWKlbGWE%2BLBK%2FaFaHwscG0oxq5WfJ1o6W6IPfsXuwc4RKREsna34JamTlRXLCSyiJN&X-Amz-Signature=21e8ba7d10fa4912e36414329864a5b42fdde6bf7d4b5ca8ac9fdf9d4681b2df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GK6PXXQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDoARAjYLeM3JF4ZT%2Ba%2FP515w6FSKy2qwE6Dj%2FQ3L%2BU7gIhAKBSHVIKDZ3rY6WZONi9Xch5mZkIDcCSH2JL7Xeq2yyLKv8DCFQQABoMNjM3NDIzMTgzODA1Igz2HcXjMDzNzN2vRC4q3AMjx0S4I4AOificGy%2FbuSAd7ZMEZoj6Noj2N4u9iCE0y8Rg%2FnWI1iOwoPbZ8mCFuQrefx5NchweJLOEXLPwBQWiYWMhjw6HfU9eauRknqGs%2FZuLDrH0wRLqHsJT%2FPzfKKQZvQbuVV5d3f%2B%2FYng8UlJH1duem5cQIASu1h8t%2FUthTIuT8G9Mrk5m0N3XDa7p8e2IkOtUms76n0w5DsyIr%2B5ysLBWhN1tuvS4qpRuz6c8Lk41CKVqI8GWo9FsiD0kvrV%2BOc1Sqv4sWEEdfwjQK5ik817qfHFr7KRkEs4cV%2FBV9mUobYEqvSn1ZKsovNY4sY6CKvLQT6ojKR8wy4tTDzlj0ca%2Fz83EkMhZDQMboELg%2BaFHpdMfMQgGOzlfxz%2BuKzDKt7wuebtUwUuNlTOWbEgFT1vN7uPnEe0XyhMrBWZAAroE6A%2BEOBWwFQfoGHMfUhBlKJ%2FtlGI4KDbjxfrEOde1KLmqE9silkdZc8sQM54hKNzGVa%2BQp6M7UBqVeYgn%2FwtCWSOvT2%2FVElp%2FUgMs4MKXZYD9SiBMwKgcasfe1k4Twl%2FovI9EQoyLGSpHUxOczuvLslomw6IUz3x%2F6z9m4PEbK29Syqo0Dk8%2BhUVuXI2be8gsh6GdJjoaQvRaIjC0qInCBjqkAbfKKmPnEQHxd79U4Rb82qMD4EhZVw4OD5yOYHVN%2By8UTVqgIwfgke68%2BvDnr%2FmmvOajbYkpG29g7uz%2FS2CLzxSQidqQ7g4QCLmdqlsPgHvBLBF%2BdHU2lzgKDvJSCpV%2F0C%2BwY8vXI7DNHWlF5cPzg45A3ZYwcZPJCcz1jjEAyrxFLalS9u52%2BlugpaNdn4LdF3AU%2BjL4mEBfVUC0HT%2Frt4MbgQFW&X-Amz-Signature=b2fdf3585d865072ee70d9718abcd007efbdca5488ad18f4a9ce5c930dd73762&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
