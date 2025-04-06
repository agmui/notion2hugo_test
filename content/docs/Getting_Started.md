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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q322JZ4V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgZmhj8iCyiSvew%2BG92KT6S1tUcD7L4HD4tFGTVdakJAiBw19NTBmOOVCVSnBNh13QlDDddqafjV4goPhXBTNXz2Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMclaXfckW7ERPwCa%2FKtwDc8KPnFM%2FtZe3EKhIgo7jcxc1jeodGyxZIxw4QBCpwGg5PIJv9eAqyRZQwllvIDdZMvZPWB%2Fas%2Bv5b36bmDvgWe0r9jKp3%2BVDVKD2kC1YdIpuxr6tQwA0Zlf272w0sngX%2BGw680fpoCS3kCqYg7kGcLcKnGXzQ9Ma0JrAqQiRlEPV2%2FbxUXRlapC2ENOecSMOKn%2FUoIbZzDeuxFacYMySdIUDj0Vr4d%2F0RgtT4Zuk3akXISezTqtKi5i5VXUQY6BrKlTBA51V3h9HyUqEyky6ZdRpoxjpv1lTcnOzvVKy%2FhWwZ5HEexr3Jq8iIdzg6DhkOEZoxwkih46B5QKrF1psKhJNz%2BoeBomu33EASBbDKOAAmCJqm2FfzySZgS5sQjqUxgDH2Qwqy%2BwdjWHP0w4UZycb8U8PQBMJb2DKGyqUP3OoLBpAvWCY8LdGKcIXVzPIsyNisqQEchTEMqcSvqrrF%2BYr3tcSpfkjATKX4stxy3ygjqwguuEagL8%2FlySPOZMnzeTOLIAiQMRHg3FR6c0ZTZ%2FXvqFj63YKFy4MXnTxlWNvJ6x8OT4YrJEEd8uxXe8pkKqdxMQP1KV12RXfNPf1497K%2BnXlphbfOc9nfhzOpUeGiMQ1fc1f41xChw8wqp7KvwY6pgGJ8eU2I4NptiFyspuWFn6fXvm%2BHAFd45MndNpZnYtQaiFqq3Yn3XJTw2wJr0X2fwI4dXf1NNeSADXS247bk3mFYweiYpBEU5LO7bdaMUhIkPO11ESkTu8bZbecZ7CdM8kO2EWLw3zu2hokrY2xL5EJ%2BghP8kw4nDiAU9pTJjdn21ARdmx9DH%2BN9CGjxtLOVHtSn0TugZm1npvampbJIf2%2F26qeKbxI&X-Amz-Signature=6e44c170d8e6d25a5d659188ff21baa6a8f0fe8374ab6ee4488b5e2ecdd80587&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q322JZ4V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgZmhj8iCyiSvew%2BG92KT6S1tUcD7L4HD4tFGTVdakJAiBw19NTBmOOVCVSnBNh13QlDDddqafjV4goPhXBTNXz2Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMclaXfckW7ERPwCa%2FKtwDc8KPnFM%2FtZe3EKhIgo7jcxc1jeodGyxZIxw4QBCpwGg5PIJv9eAqyRZQwllvIDdZMvZPWB%2Fas%2Bv5b36bmDvgWe0r9jKp3%2BVDVKD2kC1YdIpuxr6tQwA0Zlf272w0sngX%2BGw680fpoCS3kCqYg7kGcLcKnGXzQ9Ma0JrAqQiRlEPV2%2FbxUXRlapC2ENOecSMOKn%2FUoIbZzDeuxFacYMySdIUDj0Vr4d%2F0RgtT4Zuk3akXISezTqtKi5i5VXUQY6BrKlTBA51V3h9HyUqEyky6ZdRpoxjpv1lTcnOzvVKy%2FhWwZ5HEexr3Jq8iIdzg6DhkOEZoxwkih46B5QKrF1psKhJNz%2BoeBomu33EASBbDKOAAmCJqm2FfzySZgS5sQjqUxgDH2Qwqy%2BwdjWHP0w4UZycb8U8PQBMJb2DKGyqUP3OoLBpAvWCY8LdGKcIXVzPIsyNisqQEchTEMqcSvqrrF%2BYr3tcSpfkjATKX4stxy3ygjqwguuEagL8%2FlySPOZMnzeTOLIAiQMRHg3FR6c0ZTZ%2FXvqFj63YKFy4MXnTxlWNvJ6x8OT4YrJEEd8uxXe8pkKqdxMQP1KV12RXfNPf1497K%2BnXlphbfOc9nfhzOpUeGiMQ1fc1f41xChw8wqp7KvwY6pgGJ8eU2I4NptiFyspuWFn6fXvm%2BHAFd45MndNpZnYtQaiFqq3Yn3XJTw2wJr0X2fwI4dXf1NNeSADXS247bk3mFYweiYpBEU5LO7bdaMUhIkPO11ESkTu8bZbecZ7CdM8kO2EWLw3zu2hokrY2xL5EJ%2BghP8kw4nDiAU9pTJjdn21ARdmx9DH%2BN9CGjxtLOVHtSn0TugZm1npvampbJIf2%2F26qeKbxI&X-Amz-Signature=42d1f70b8a6c82ab10b2a5e48f829afa7893feb14ad0afb6c928892147421983&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWBLPRT3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTIHrmMJ1fRUcqrTKYZGu3SYOJHIF%2BnHwT5JLMDi3GgAiEAtY1b%2B1p3LbrgFmturLrhGfh5nDX3bEwcXaJZWbL9c5oq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOYrrjeKZbeImrHepCrcA9fWMtezrVO1WKtYNnWiqzQcfjiqaR5Em5fknXJXyXTLKBX7VjLRj4s2sPqD5iA01lAHJ8HOLA1Jj7baqeWZjv7YgoD85XBD66I65k2Wj78EFAIiOfvsCDvHNPehw9N%2FJG3Zlqww%2BDpD1uTcc%2BQr%2BkLzoD0%2BeDDKNFcgLHRYdWWLoRxEluy0lj20Xtzhj%2FI2vwFvJ3XOnwMBvUhQr8mUF%2BQYGDmlkwfRa%2FzD%2Fz4uSjXXGXMn%2FUrvObbqlJtHfBy%2B9BMj2r8SDqaKRx7ZpVXnrCC2q71nfkZV2v591TKvZVSNcBARi6SvegZRA6FLVh7MTolUauZSAeb1nwqa%2B0Y%2FQRX%2BNG9Q%2BRY58UO51RsHW1mSyGM979DilKpwBDECuRwlhsillHRrz7Pdtsl%2BMxQ4PHU0YtJCkldNMu6%2By96DWaA%2FwBvVSpA6VxKBQv3c9qAOdMEwiVMLBw6feyw2ZXXDCH27ItWgnHIRih%2BIYd5mwLrmmtiG32s2Y2IajTheDsaSWq%2FjhplWMGhG5Xfua89JJV4sgbtCeqHIgQuvO3n1c5fDySbQVIXs%2BythdZv8RA6B3Wo0IvSQGnpQu5CKAmBtHK46GGId317rOvhB1LBWKn8BL9u4JMhrF90usszEMOyiyr8GOqUBt2sNBjrHvfukgHo7V8LmwhQPsKyae6tcnPby9TxJ6Jktqw5E%2B4mA3Xe9mfpkQh7GxA%2B5cY9pc88%2FDloCJZm6VfPiga8KziozphibcdEUubF%2F2EF7d4oPYZUlEb0hKEL9q%2FyxMBJ6nMwJHAXrlcB3g6RMrRXQSEYr92koFWwEYfTa5uE4zlxfdz1XUZNVEJG5xUyr30Um260M1A0y248DWZjPHt6A&X-Amz-Signature=213b515214d89ca91ea4c38ece10e73c06a584268f01fa742673090cb9306c08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOG4IQDT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHqzbDD%2BHt1ZSNptFSCWM%2F%2BEXjNic4O2PULrpnfnv6GAiA5jsTXnJ8U1uteocC7rIHKNdon9I8pNFfwR%2F10R%2BvJYir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLoNqgrD31L8eid1TKtwDHlGzKE%2BvSnsVR8KS5e5T4vdOK8JL9RD9K92IxlR8ERUuxJreVDYJrnb5NYCCAI%2FAjlWaCoNNQe4hL51z3GJcQz%2F0Kn1XhCku1fmhv9xWxzaMEZHuOQi4C0AwmmybOPh0Kha7YNnQGD%2FSy0OOuQykMyWWeVEJCWBQhMY2%2Bt03LSa3N0IB51FB%2FWXn21P89ISiy4LHYxy7Al6KIvz1QNp6LTrOy5PXIdWUIWks7ytCBvRdWPUhp30H%2FS7YAlmcfeZhTBKIfocF6ak0WhCkQs6Ej6wVfDdhUj2ERbB0I6Mdk9dLWAU1ohd%2BT%2Bsun7POfvkyAQAJ4J7z2vBFcCc9H9unJpXK6UcmKbUWxLXXfx%2BJgZ9G4enwjPolEvGLNuncb3SAEPRypaCBqRf4xYFMWQZDVzHnDWpSa7gFPQoYKGZRmqicJJPcjE0P4u9TEXrB0nbGNfgcpyKU%2F4OXdD2LzqgJJrc6DPDvNlYEVz4C7evdVOJZECpxjhJ%2B47fa8dOCQzZSdatlAAAVi2vIiYCnhpl76l%2FpNM6qtZozibHwOHG45gu%2FfmO4NeiZUlO0T1x65hTIdfPVwQrNyEuX2PUtYgOp91mATCmT5BJi3e%2F0cqhzYz0OvXWXrcRlJslk4TMwyp%2FKvwY6pgGKYS6QLV%2FXvOs%2FFz9GXcv6zpNOhbrZQKtr%2FCr9OSe0wwINd5OI2F3CoW6LztYVfxwSKPxDxBiRYdTCpNuOf05mEixSsl7lGdxwAF5ToT2S5wWN0IgzfrA89yEO4Dgxx1EzPi%2BPdS%2B%2F%2FeyM%2BqY2VUEsW9KkDOuo75ThKi1%2F6iyTW5R99R3U8TS5OROQtGpffwf6ClKp%2Fm%2B8RioIUjSswZ87R5h2c9cf&X-Amz-Signature=fd155edb0b3eac4814a0712548833bd53bdae11209b07619d74846f80a220470&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q322JZ4V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgZmhj8iCyiSvew%2BG92KT6S1tUcD7L4HD4tFGTVdakJAiBw19NTBmOOVCVSnBNh13QlDDddqafjV4goPhXBTNXz2Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMclaXfckW7ERPwCa%2FKtwDc8KPnFM%2FtZe3EKhIgo7jcxc1jeodGyxZIxw4QBCpwGg5PIJv9eAqyRZQwllvIDdZMvZPWB%2Fas%2Bv5b36bmDvgWe0r9jKp3%2BVDVKD2kC1YdIpuxr6tQwA0Zlf272w0sngX%2BGw680fpoCS3kCqYg7kGcLcKnGXzQ9Ma0JrAqQiRlEPV2%2FbxUXRlapC2ENOecSMOKn%2FUoIbZzDeuxFacYMySdIUDj0Vr4d%2F0RgtT4Zuk3akXISezTqtKi5i5VXUQY6BrKlTBA51V3h9HyUqEyky6ZdRpoxjpv1lTcnOzvVKy%2FhWwZ5HEexr3Jq8iIdzg6DhkOEZoxwkih46B5QKrF1psKhJNz%2BoeBomu33EASBbDKOAAmCJqm2FfzySZgS5sQjqUxgDH2Qwqy%2BwdjWHP0w4UZycb8U8PQBMJb2DKGyqUP3OoLBpAvWCY8LdGKcIXVzPIsyNisqQEchTEMqcSvqrrF%2BYr3tcSpfkjATKX4stxy3ygjqwguuEagL8%2FlySPOZMnzeTOLIAiQMRHg3FR6c0ZTZ%2FXvqFj63YKFy4MXnTxlWNvJ6x8OT4YrJEEd8uxXe8pkKqdxMQP1KV12RXfNPf1497K%2BnXlphbfOc9nfhzOpUeGiMQ1fc1f41xChw8wqp7KvwY6pgGJ8eU2I4NptiFyspuWFn6fXvm%2BHAFd45MndNpZnYtQaiFqq3Yn3XJTw2wJr0X2fwI4dXf1NNeSADXS247bk3mFYweiYpBEU5LO7bdaMUhIkPO11ESkTu8bZbecZ7CdM8kO2EWLw3zu2hokrY2xL5EJ%2BghP8kw4nDiAU9pTJjdn21ARdmx9DH%2BN9CGjxtLOVHtSn0TugZm1npvampbJIf2%2F26qeKbxI&X-Amz-Signature=0773fa4d92a691aeb10387827670da74ef7d54826020314ed015541bb0f750bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
