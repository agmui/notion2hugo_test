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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAU2IHO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDqZhE9TPdJQWpr%2FaDv%2FJTcZjvquNT%2BxcKKS0BMojf0kgIgXIu1mVEp8RzKcXtz2mUZWQ3qqaFGqkmb%2FdOIp8U2Z9kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEp8DcE0LT8tgLC%2FwCrcA46TEa0mElNKcZKiSeB%2F0HWU%2B1TUR%2BcFsusXZcQL0yXQAGATIFG0sNr7HwnzabMrI9qvccrR23URgsuY%2BkDmxkvv7OLrFVZxPk8fDNIx%2BpTXnW7QCQoSgBPfapiMcsSwWVFfrN2ZSw1OyH2Ay15JMB%2FIfXKHp5fZQBkgUikL%2BdmTiJR5yDYYco7N0xEGhFJZiLbHEZ2KTRYONDGPs8RZTFqF%2Bsd9bsxwWTKHBeTG13hjbc%2B8XX95xHA%2FJSL40LvdZTASLrS7gSDrmoTNad2ztD281RCK1OiQlU5J1C5BFbW0ab1X1s2PfNY56JCiTAnSV9my6hrkUVKg2O5vtO7Aw5324dHnVLGHbnQ3Vg3vPfRuwMccTKnMjVQ1V%2BcQj9epZB28KSmHc78zSjwn3qVpiwHD0sWLbTfEc53d2Dx5ltcNNd4nln5UMejh3Qds%2F7Q7tXepWp3W0Uew82K%2BxnSQcNfil9wdprRe0HkL9fZocSbNTkGELEMXctWkEuDW8e%2F59t3%2FCUtw4NIBh%2FlP%2FMQsQxU4T5k9iuas30i5cAGjgJWEm%2BBm214zApk9SXTWITQuKxk6%2FnwrBumxTET5VHbqLZkbJY5LHpil6wsQSmHHDSGE9tDLzC1Q9Nt7JHK3MIHfxb0GOqUBdIWNXrHFIycjRJ1ApGu5zSTfS2%2FA%2BPcxOo3dT8X6cXPxPlq270y2rFG%2Btz2WIOwEjH1pI%2Bp9XjAM5z5lyQoZVZNd8XG03aIcCDWFED5O2zl7fi%2BJn6SH%2B4nD4LAPDwnY%2FD8PasJtS5MWFnfh48NcQnGr54Y2e3zew1B7X63BXNgKbpWlBzsMgmuUFbnC1EI%2BQdqUe0q93zhCuQp3sHXA2xte8bUI&X-Amz-Signature=daf019815510ad0b0053da9192e0d0fc62b2c5615d094ee637201eb13711f3d2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAU2IHO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDqZhE9TPdJQWpr%2FaDv%2FJTcZjvquNT%2BxcKKS0BMojf0kgIgXIu1mVEp8RzKcXtz2mUZWQ3qqaFGqkmb%2FdOIp8U2Z9kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEp8DcE0LT8tgLC%2FwCrcA46TEa0mElNKcZKiSeB%2F0HWU%2B1TUR%2BcFsusXZcQL0yXQAGATIFG0sNr7HwnzabMrI9qvccrR23URgsuY%2BkDmxkvv7OLrFVZxPk8fDNIx%2BpTXnW7QCQoSgBPfapiMcsSwWVFfrN2ZSw1OyH2Ay15JMB%2FIfXKHp5fZQBkgUikL%2BdmTiJR5yDYYco7N0xEGhFJZiLbHEZ2KTRYONDGPs8RZTFqF%2Bsd9bsxwWTKHBeTG13hjbc%2B8XX95xHA%2FJSL40LvdZTASLrS7gSDrmoTNad2ztD281RCK1OiQlU5J1C5BFbW0ab1X1s2PfNY56JCiTAnSV9my6hrkUVKg2O5vtO7Aw5324dHnVLGHbnQ3Vg3vPfRuwMccTKnMjVQ1V%2BcQj9epZB28KSmHc78zSjwn3qVpiwHD0sWLbTfEc53d2Dx5ltcNNd4nln5UMejh3Qds%2F7Q7tXepWp3W0Uew82K%2BxnSQcNfil9wdprRe0HkL9fZocSbNTkGELEMXctWkEuDW8e%2F59t3%2FCUtw4NIBh%2FlP%2FMQsQxU4T5k9iuas30i5cAGjgJWEm%2BBm214zApk9SXTWITQuKxk6%2FnwrBumxTET5VHbqLZkbJY5LHpil6wsQSmHHDSGE9tDLzC1Q9Nt7JHK3MIHfxb0GOqUBdIWNXrHFIycjRJ1ApGu5zSTfS2%2FA%2BPcxOo3dT8X6cXPxPlq270y2rFG%2Btz2WIOwEjH1pI%2Bp9XjAM5z5lyQoZVZNd8XG03aIcCDWFED5O2zl7fi%2BJn6SH%2B4nD4LAPDwnY%2FD8PasJtS5MWFnfh48NcQnGr54Y2e3zew1B7X63BXNgKbpWlBzsMgmuUFbnC1EI%2BQdqUe0q93zhCuQp3sHXA2xte8bUI&X-Amz-Signature=974d40307b8b69051313a62e4dbf0d790829d32e54a1a07044db7ea633471ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642O67I4N%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCXUgGdJqnu%2BjirbHfAgVP3ww97k6lDY6FUZlFXHmkW3AIgSr6r0a7lsDdk23Bq0YHUPOHYhaBUdVDZ0bBGVqzmxykq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNIx2O8Q5Fgha82vhSrcA1pXMAbgXVys7hzbx8FDbBjPaQEm0LdHGdw7IDzO%2FPCCZqYmhZ08Ax3Li9xiKwtN5tHqXXxXbB0TXn%2B19fdtw6lS9oLzwEE6tzRvZCpZdsuBGmtBKnp0l6VFZDdlGnEv2eWzF9zjVkOav5c0gQuLbuqn9gdSiSoAeJ8GMRB7K6kZtSRrse1yWh4LLfEjRKXzyGeuw7iZhh%2FlAEIr2hsvLVzzz%2BhC1eDi0pCZyFtJfdOLlVc6qLaCmEhHPQJzRwcADhMS7XOU57ftWd0n39qX%2BPZdCv0BPBQ8ePrXKHGlnq0VXj4AAAXgoJf19%2BWLFInBy5As4kv3Xa32aUivu3sS3Hy%2FmYRGkdyjZh%2BURCl0gFWQNlth0YB88agREB4N1yhu4%2BAXj0ugZ4zUzEbPHiUb71ye6ifm2gQbXvCteNKhxSmyHzSDsqBK443RZEk8KlMVeyQ29SWbTiCOXSMYrK5wV0nY0ZiTUtWYuYv5TPltWnRx2qW6WtEQxONivsYJbddMiu1s8GKe1MdxYsC9evsDht%2F%2FRl4uL%2FHm2mbUtyg5bCBcVQcsKO2daohkuqHdx1vLvHCHvLlf%2BRllVADv90AoR9Depa0sUp79Eftf%2B8Qf0f7KFhj8w8ZCEZlfZQuMMLbfxb0GOqUBaPDz1oyTF5fNeSDBTO52MnvNdpccESAbJ79%2F%2BBMVvYVQtBGQFE3CLpeKPyQJ%2FVDuhBwt8BOJ1cu3O137o7N8oyqfylN9b%2FfQ2aKKgM8TPP9i%2Bx86OKjEBDdAMMd4ZSTTWI2H3l%2BKlV3ZOA0YVgGwN3tmwN%2ByGY5xqUTDbGKMlqtjF5BGjfUuEDBjNfcEXcMEQmUj%2FwFhkFAbdXMxcJCoxEFqtdZc&X-Amz-Signature=9a850feb372c494760b47c05153473ff185249e21768d063a44cc2706a4a3a80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UK5NAMQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCPhh5RmzahOrBiguWrS1KWIK2zpNzcN3CH7RjTDMGvPAIgGHkc%2FIfjKry5kwr9u6sM%2FcFX%2F8T9tge%2FTVM%2BUxvJs6Iq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJdG73my22G4oGuHHSrcAzRfdOZYFQh1TJRPym66bV6uN4mILWJI%2BSSGLuZwWcJO8f%2B3i74P6fH1qdJ5ZcnEzzV3nTMgVEf8fPQb9Ijncinh4Bup%2FmMLCSlr50H8bRtxFmWJlF32LSgTxFUZ8G1OvZfEpCsvK9GWsiXFpgrxC9wklevJ5PaMQnObPMLvQSpB48LczhLv6qXgl3Fol8daVXYPwcnBqqUxyRIsC0QINZgBTNNuRFaQRzBKVEq%2FkPTU5WHlGOFpL7koiOpNDWSjHl7xA9fol%2B4ySdaJm8QGJOjYQ1sdLPLMduzVMy8xSWne1IFESdd%2FQcWl3UFvf2kPkv2t6GPjKo08oqxMsEay44oNzMIjxIMjD7zGAPP6G12aJpkeRgZ2ppZI9QOGKYNfEK50ZN2jPKQ0sqCvYp5%2Fz%2Bblcku%2BOVoXjd%2FG4Q8yoiH7ATmXlEsIBd%2BveupGwJZdPXZKJ92Nl3h1CbUbtpF00RvIMKZl8ZqywqU8R%2F2r68KNZvAiJJGya7qZEzyrsZbWvR8ke7oEIVeNN3GtP1b87NXd1psGQimzHTXpaUWcydGUJiPc2wI571V9Z0ZKjapaAKyAWrsHFLE2FX6DOOWewVFsh9%2FadTDT2yAMvln3rNdohvi3cb5Q7KIF0XNtMPrexb0GOqUB5WQmgYlOjGMwlhTpFxLKkMTOpkCHaUecpkOwXofl25WhdXYYiCu3HxkUxtxoMYOtC8pkils329cNkek2olsfCWUCP2vVTlzkmrXGajwYczZJpPVNmT%2F3jn6RPEfdoPlN3mzSUpo442gvK2Y%2FbgJac01TRVKat4y%2FmZbXUGIzkLcekBEltByhgehNyAAZZWNN2f5sICPwJbuToJ34SOOSAxtcKDvn&X-Amz-Signature=8343c3301060b684534b3118ed923ea71461c5a2c257a6272bc76e4a98d012bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAU2IHO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDqZhE9TPdJQWpr%2FaDv%2FJTcZjvquNT%2BxcKKS0BMojf0kgIgXIu1mVEp8RzKcXtz2mUZWQ3qqaFGqkmb%2FdOIp8U2Z9kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEp8DcE0LT8tgLC%2FwCrcA46TEa0mElNKcZKiSeB%2F0HWU%2B1TUR%2BcFsusXZcQL0yXQAGATIFG0sNr7HwnzabMrI9qvccrR23URgsuY%2BkDmxkvv7OLrFVZxPk8fDNIx%2BpTXnW7QCQoSgBPfapiMcsSwWVFfrN2ZSw1OyH2Ay15JMB%2FIfXKHp5fZQBkgUikL%2BdmTiJR5yDYYco7N0xEGhFJZiLbHEZ2KTRYONDGPs8RZTFqF%2Bsd9bsxwWTKHBeTG13hjbc%2B8XX95xHA%2FJSL40LvdZTASLrS7gSDrmoTNad2ztD281RCK1OiQlU5J1C5BFbW0ab1X1s2PfNY56JCiTAnSV9my6hrkUVKg2O5vtO7Aw5324dHnVLGHbnQ3Vg3vPfRuwMccTKnMjVQ1V%2BcQj9epZB28KSmHc78zSjwn3qVpiwHD0sWLbTfEc53d2Dx5ltcNNd4nln5UMejh3Qds%2F7Q7tXepWp3W0Uew82K%2BxnSQcNfil9wdprRe0HkL9fZocSbNTkGELEMXctWkEuDW8e%2F59t3%2FCUtw4NIBh%2FlP%2FMQsQxU4T5k9iuas30i5cAGjgJWEm%2BBm214zApk9SXTWITQuKxk6%2FnwrBumxTET5VHbqLZkbJY5LHpil6wsQSmHHDSGE9tDLzC1Q9Nt7JHK3MIHfxb0GOqUBdIWNXrHFIycjRJ1ApGu5zSTfS2%2FA%2BPcxOo3dT8X6cXPxPlq270y2rFG%2Btz2WIOwEjH1pI%2Bp9XjAM5z5lyQoZVZNd8XG03aIcCDWFED5O2zl7fi%2BJn6SH%2B4nD4LAPDwnY%2FD8PasJtS5MWFnfh48NcQnGr54Y2e3zew1B7X63BXNgKbpWlBzsMgmuUFbnC1EI%2BQdqUe0q93zhCuQp3sHXA2xte8bUI&X-Amz-Signature=b3fbe78ef86f68be6add146578b4d420977358463d56fc771a4b41885ecf33db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
