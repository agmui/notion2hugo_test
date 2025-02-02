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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SUO4YE7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHl0SgXDhDRLdFD5QsLRr3XEq%2FNhJDgjGkKdAjY7envgIgfW%2Feqt0qKLrQIW3X4%2B9SGeSlnL0Knd2Trs%2FgkVivgswqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2XeBE05xcWXj8eNircA0QQ%2F0oyw7nOhCqHDlS0acsly17YOy3h2eWzYBcv1wGPbSUnMzuEVdjo3Kl0zezWT4VpHUw4CYh%2ByKwbCyuAT2VNSG%2BLnG7HrLDxgaOoECGQobG9R4XCLhZ4%2Bx9khPizVfcY6mjRlPF2aT8xMe1yi4kt50ZwnjnJnNiv6VW4%2BKoK%2B8YyfY1aVNLliT72WTdint62K5Z3zaLy4KArG%2BnmKj1EGzRuQL6b3ZMH4irgBquqTuAhaBzotWel7EbwWQxfk56IDsLYJczsMDpKQG4vbb%2FzZrMhPWIvVZK8Ldw%2BefjceO%2BNyTwgYgiDaDuAOVCJuwt6Jkw8BZXiqRLgEtMVP1qg8WVOJZKgOp751mtewDdo%2BeidRqG%2B%2BMQx1EunMu9zAdlPYA%2B1JRprHy23woJtdQIFwYfQBVQ69BhSBL7rhXuJ%2Fi6RkMD7%2BlOHXanBo7C8%2BwlwgLDLSwCDI%2Br8Bkt33VvDaMm98It2mYQm4eVmkJ%2ByMJlZ6e03%2BSwy%2FrBTQNIVvSyp4W0yog3vwNWCFunBNHuCXcaaDU9M7ssdCWjPpA%2BA0JvfmUWysB%2BtVghPx%2Fkq8orvFU2MLqKN79ZMl5jNPuSmF04Br3KX39szXueruyHP9A1UIPc%2F3Tq3sBSFMKm8%2B7wGOqUBqGME5f%2FSmem0so%2FDV%2FquW7WWqSvYNgZ%2FVFlmh087cqH8SnS9akQDzzMkIFF30vNgvuiC3fFXOHbHzp9gzDL7bvwIcVQqVZYh%2BhYoKChvDbHarHXLZEsTzoWEEQaCUwGK7zhLji4LHLHvRx53fB5GMVjGYPONn0wDS3pSAexnJuTKtwGHcpWy3ZshpDHbe34azM3eLJwwikkgyc%2F4Yg3rs3CDWfXL&X-Amz-Signature=b6a5e0456e329ec0d7f067147a5b70a72e79fba81f3414f2a9786342fe84ac3e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SUO4YE7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHl0SgXDhDRLdFD5QsLRr3XEq%2FNhJDgjGkKdAjY7envgIgfW%2Feqt0qKLrQIW3X4%2B9SGeSlnL0Knd2Trs%2FgkVivgswqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2XeBE05xcWXj8eNircA0QQ%2F0oyw7nOhCqHDlS0acsly17YOy3h2eWzYBcv1wGPbSUnMzuEVdjo3Kl0zezWT4VpHUw4CYh%2ByKwbCyuAT2VNSG%2BLnG7HrLDxgaOoECGQobG9R4XCLhZ4%2Bx9khPizVfcY6mjRlPF2aT8xMe1yi4kt50ZwnjnJnNiv6VW4%2BKoK%2B8YyfY1aVNLliT72WTdint62K5Z3zaLy4KArG%2BnmKj1EGzRuQL6b3ZMH4irgBquqTuAhaBzotWel7EbwWQxfk56IDsLYJczsMDpKQG4vbb%2FzZrMhPWIvVZK8Ldw%2BefjceO%2BNyTwgYgiDaDuAOVCJuwt6Jkw8BZXiqRLgEtMVP1qg8WVOJZKgOp751mtewDdo%2BeidRqG%2B%2BMQx1EunMu9zAdlPYA%2B1JRprHy23woJtdQIFwYfQBVQ69BhSBL7rhXuJ%2Fi6RkMD7%2BlOHXanBo7C8%2BwlwgLDLSwCDI%2Br8Bkt33VvDaMm98It2mYQm4eVmkJ%2ByMJlZ6e03%2BSwy%2FrBTQNIVvSyp4W0yog3vwNWCFunBNHuCXcaaDU9M7ssdCWjPpA%2BA0JvfmUWysB%2BtVghPx%2Fkq8orvFU2MLqKN79ZMl5jNPuSmF04Br3KX39szXueruyHP9A1UIPc%2F3Tq3sBSFMKm8%2B7wGOqUBqGME5f%2FSmem0so%2FDV%2FquW7WWqSvYNgZ%2FVFlmh087cqH8SnS9akQDzzMkIFF30vNgvuiC3fFXOHbHzp9gzDL7bvwIcVQqVZYh%2BhYoKChvDbHarHXLZEsTzoWEEQaCUwGK7zhLji4LHLHvRx53fB5GMVjGYPONn0wDS3pSAexnJuTKtwGHcpWy3ZshpDHbe34azM3eLJwwikkgyc%2F4Yg3rs3CDWfXL&X-Amz-Signature=3a57b32c5672268f634ac3f01ada1751308d56826767e47968c07256134e9fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2GSHT4%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeqVJPPGrodlUM4orpLVUtJSXj65h8NSjFzjx6pWiONAiAAyCeysTl5YEXI5uiSD2bT4ieeBZm4TKhTvhPmpC%2FzbCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVa13q5%2BQWacOH%2BxVKtwDQY48IsY7E4TAbtn02Q7o1dJ%2F98wv6RL6XTCRLVYRLhHXthmrPFfkJiO2MW7mdCep6MmCIVSC6ugdSK%2FEBk%2FZU0thAhSIfkCeKQWxk3fEMjonAI7gnHjHDrZEg9qyAZQqyHPOzGp%2BVMS2a69reXk%2FlyHBnkUCtQZTq%2B24zT3vxiTvgx6qlJXrLHuzNbVEhmyq%2BPy7k6yL0BhCl7l6LJ97jQiebgtiSg2FWSep7Bps0B6B%2F7wyMZOudXAPeIkKWplEgTVfI4JHwLL1RsYJMugOskKuWq6ZuiRmIhFbkQJ0MimyFjQlk9GncmlziZHuOMCZ6K7XUs8I%2BTt9KbF75l4Tnpj%2BWMr7CbNH9Th4ifgVbLXVxKbOOKr2LacD30Hhb4GRZZya9LyYuX3zKV4XHXCpHcLtzs4YvPF7Dea4zGPPgkfsZxRESCXxnB8fYGrBwXFeQ2oZm0EOL%2BBUAuBVGRvqF416s62uWfKNBZ2P1FeZrSSL6J3hmLWIMfsJE%2BEQYNCMikpJZoRfWCMgf5lv2J2eaNooY%2Behcg%2FD1i12psueqMPVkCELYY51SHTvtNBGnUfDRyrAil7wloyKQbvvirVABLC8GtxdljJLJGzgv6SlVasl4pPNq29NyHLdxPwwurz7vAY6pgFbXCQQLJX0Nxwy01ywxQfHSrsQs4RSuRPWNuCI3NbmQysK8%2Flw4QqRXBeKuC%2BChFePzrJ8pRQ0a%2FzSwiVbDQk4XRswyz9xOXBSuRt6RerBzutTxVlo6KGBE8FvqFQsGmB9jecOHtfK09nGkjpgWdYG3d333GVgoY%2FkBuNQblHWEHpW9foDZfwSMQN64BR%2Ftyk%2FyV%2Fe7YIQM8JYtFJBE0Ky0HdOnnr4&X-Amz-Signature=3a373fe9c2f40a09ebb1b2b243af6e39bd69af5ae29848ee07c08f5adcc722f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQFKDXT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FJatQ1kaXpb%2ByaSDeMK%2B7u5IwcavGAPCGvRcvHzhPIAiEA8G9tDTCbBI0ZMr8eCxYGJd2dS1f4F0OAonOim1CrMqAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRoFggg2ta%2FB0ImlCrcA0yX5w%2FZYYgYG%2BsOFYBgQG1OFMRDSVQu%2BdTKgUA%2Bz8deHkyYbGJuUBERLcxZONMZGdtD2h1Dbn%2FDLL31hTNTbDX7kG6uToJo7YfsDnJ6KxBUeeEbcJw8etaphR57PFaK05YlzG1fO2PBG8726%2FXxd2oLEq7kskvTZbmvATyXFntBz6xcoR2Zk3skrWKY1LNI7etbUcfRyBOAoJbv9qj2uMiYuLUqFjXwAo3GqFWWfX4dak05Jo%2FYBeOPyXfTP7D3mlxk%2FAEWpMrN6I4ozldmPVA0Q0KAb8FqbjZtw53KzcfOD39jau4ZmCeHh3OQiMJGYTsZWz%2Fmj%2FLgjDbmPdWxE4TpyExxV8LpP30Kt2SQKZopX9I7w%2BDohAo1LX2FjZLif2lP0as%2Fu84zdGz2g8eHTrWKOJ%2F2bAvGpw6JL4dSt%2B8w9bhn6bEgxO8rBliojIe%2BcaZe0D4xW8FGNAmsxw6%2BVpcyTAkkGi0oSACVRQBTW6AXKnMINWOZo1XhLmtSW2Y3sTnkJuJfCD6himCOrMX0rVabXJbal%2Fux83df312E891ARozuB2i0kiAjvbofcNxI%2FBK%2F9v4MjqIIDF7hYWTEK0dpCjfJpwEvTehmUwunWREmkeu5o5C3AOHgEW5tMJe9%2B7wGOqUB7FPYsGPhOjOD7jVUuBZHY4UmTf62WmWL%2Fzf0A4FmT8FXVwLbxiK7nv%2FmJigvUnllbhAz9gcTvhi%2Fe%2B2%2FRdyrphuXA2SaZ01XW0RLnTBxN85fZwelifAfuSwXpO%2BfOjKQLZrh%2F6e7bQkqnmruZ7b3oCIwcVMR7jC5oF7b5U1ocMduMv%2FYuU6Q2oICzazKbRIRIRlnQhZx3PswzVWab1I43Rl0lMYq&X-Amz-Signature=58ca5f843c389a16469eedb97dd0be785dc99f045f9b48c6e99b2e27b9a5b5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SUO4YE7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHl0SgXDhDRLdFD5QsLRr3XEq%2FNhJDgjGkKdAjY7envgIgfW%2Feqt0qKLrQIW3X4%2B9SGeSlnL0Knd2Trs%2FgkVivgswqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2XeBE05xcWXj8eNircA0QQ%2F0oyw7nOhCqHDlS0acsly17YOy3h2eWzYBcv1wGPbSUnMzuEVdjo3Kl0zezWT4VpHUw4CYh%2ByKwbCyuAT2VNSG%2BLnG7HrLDxgaOoECGQobG9R4XCLhZ4%2Bx9khPizVfcY6mjRlPF2aT8xMe1yi4kt50ZwnjnJnNiv6VW4%2BKoK%2B8YyfY1aVNLliT72WTdint62K5Z3zaLy4KArG%2BnmKj1EGzRuQL6b3ZMH4irgBquqTuAhaBzotWel7EbwWQxfk56IDsLYJczsMDpKQG4vbb%2FzZrMhPWIvVZK8Ldw%2BefjceO%2BNyTwgYgiDaDuAOVCJuwt6Jkw8BZXiqRLgEtMVP1qg8WVOJZKgOp751mtewDdo%2BeidRqG%2B%2BMQx1EunMu9zAdlPYA%2B1JRprHy23woJtdQIFwYfQBVQ69BhSBL7rhXuJ%2Fi6RkMD7%2BlOHXanBo7C8%2BwlwgLDLSwCDI%2Br8Bkt33VvDaMm98It2mYQm4eVmkJ%2ByMJlZ6e03%2BSwy%2FrBTQNIVvSyp4W0yog3vwNWCFunBNHuCXcaaDU9M7ssdCWjPpA%2BA0JvfmUWysB%2BtVghPx%2Fkq8orvFU2MLqKN79ZMl5jNPuSmF04Br3KX39szXueruyHP9A1UIPc%2F3Tq3sBSFMKm8%2B7wGOqUBqGME5f%2FSmem0so%2FDV%2FquW7WWqSvYNgZ%2FVFlmh087cqH8SnS9akQDzzMkIFF30vNgvuiC3fFXOHbHzp9gzDL7bvwIcVQqVZYh%2BhYoKChvDbHarHXLZEsTzoWEEQaCUwGK7zhLji4LHLHvRx53fB5GMVjGYPONn0wDS3pSAexnJuTKtwGHcpWy3ZshpDHbe34azM3eLJwwikkgyc%2F4Yg3rs3CDWfXL&X-Amz-Signature=7d1b932f8a0a594b7d917ef5be7a07a4be5670d20c2c0840fc243fce0c2514b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
