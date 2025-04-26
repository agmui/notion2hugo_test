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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYH3EJ7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8LxmAORNfh6LkgUoECr6oOD3qr4JjcySnB4Ozbo07JAiAyRiRPtNoZ1LAB8m58cXJWBO1%2B3HMAcLF%2BucKryc7CjSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMOOGx%2BJwuSGZr4%2FeBKtwDVLHj93fcvQAKYdlcbQ46Msvh4j61vI0iOY%2BzQP6ezYhIcbjtDzDFAGI6u3VJVz4JpoI0HPcMt4gNKaWI9a%2FemLQF8bn3KCAKe1KPaFnx9V4XUofuOtwUSkW1aQrI6sS7NDCa%2BtlB95ONqUe7BnUb0Upe0LU9sVOpLopTFjDhUzSB%2BEhez7jHCcKJh%2Fq7R8%2BQyf3DTbPOqbgNh97VLeKVfiQeHzKaJxloFxu4b9O%2FXCc8%2BW7KeW65HkR7FLNOxxkF1Ffkw9MVlltTTA3YducHe3dba1M9pkox1aTLF%2BfkOD2oB6cn2%2Fh%2Bv34s7TclsT8JAhIsnyBdlEJfNT5Ao8VbSqluwyZs6zrRGM0MAnqwwQ8UL56FaqoVFkNL5zu7vaKPz5IHNm%2B%2BvZsz4RMGqZPzUVBVzV5nW25MD2RozZ8il8VDn99hFRAImzcdx7%2Bmn%2FVjYjnCpWVLxXmMM8WJmp0GRJV8Pfr5oTeydCxrMh0I5GYB7p6tE%2FV3L6AIVY9Q0qnWMOpBbscx%2FgQuZ3mzInLkuTYYC1aIRYu8liBQIX0%2BSoOXqcSewsao7obp9PJVdsp6GRvOwqRynNzpFm7l%2FjQPxLmE3yfrSoZtnJegJaAeXBoJP8Lu7XqVYZF2AVEw8MixwAY6pgFAPrSh8Xg%2BXYJorV6vFJCkeZZ9EJKM4TFAJzGFg9Uio5pTcWYy89Bxf%2BTje3TJQdjmyw3hwBdbta8JQ6AoI3cWIeWz09PNgii005SWRAYFA%2BZaSMMYq1ysPD33IWnp0JwXk7BHQ6%2FKTYssLxzl1niBkTocYSh81COdwIguRhlbzuFX96v5dEESzmYkLAdwch42Xf1QMEw8Ix4yZ4VRBP42wLMaGdjR&X-Amz-Signature=ac5791ad2e3a1d61a82dc2dfc147f75abcbb1e21a0e264eefb32c5d07a6ea357&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYH3EJ7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8LxmAORNfh6LkgUoECr6oOD3qr4JjcySnB4Ozbo07JAiAyRiRPtNoZ1LAB8m58cXJWBO1%2B3HMAcLF%2BucKryc7CjSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMOOGx%2BJwuSGZr4%2FeBKtwDVLHj93fcvQAKYdlcbQ46Msvh4j61vI0iOY%2BzQP6ezYhIcbjtDzDFAGI6u3VJVz4JpoI0HPcMt4gNKaWI9a%2FemLQF8bn3KCAKe1KPaFnx9V4XUofuOtwUSkW1aQrI6sS7NDCa%2BtlB95ONqUe7BnUb0Upe0LU9sVOpLopTFjDhUzSB%2BEhez7jHCcKJh%2Fq7R8%2BQyf3DTbPOqbgNh97VLeKVfiQeHzKaJxloFxu4b9O%2FXCc8%2BW7KeW65HkR7FLNOxxkF1Ffkw9MVlltTTA3YducHe3dba1M9pkox1aTLF%2BfkOD2oB6cn2%2Fh%2Bv34s7TclsT8JAhIsnyBdlEJfNT5Ao8VbSqluwyZs6zrRGM0MAnqwwQ8UL56FaqoVFkNL5zu7vaKPz5IHNm%2B%2BvZsz4RMGqZPzUVBVzV5nW25MD2RozZ8il8VDn99hFRAImzcdx7%2Bmn%2FVjYjnCpWVLxXmMM8WJmp0GRJV8Pfr5oTeydCxrMh0I5GYB7p6tE%2FV3L6AIVY9Q0qnWMOpBbscx%2FgQuZ3mzInLkuTYYC1aIRYu8liBQIX0%2BSoOXqcSewsao7obp9PJVdsp6GRvOwqRynNzpFm7l%2FjQPxLmE3yfrSoZtnJegJaAeXBoJP8Lu7XqVYZF2AVEw8MixwAY6pgFAPrSh8Xg%2BXYJorV6vFJCkeZZ9EJKM4TFAJzGFg9Uio5pTcWYy89Bxf%2BTje3TJQdjmyw3hwBdbta8JQ6AoI3cWIeWz09PNgii005SWRAYFA%2BZaSMMYq1ysPD33IWnp0JwXk7BHQ6%2FKTYssLxzl1niBkTocYSh81COdwIguRhlbzuFX96v5dEESzmYkLAdwch42Xf1QMEw8Ix4yZ4VRBP42wLMaGdjR&X-Amz-Signature=668c3ab08f8cc8ae2b34d87f59ba35ad3748656379907f08b4382d51ef5dd5ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6KVAMGL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCyfYB1dELZGmPXY9t8fHSnu6PMKlquUb6J7h6Y3qrgAIgex7pvuftyBoeDwDAvfifDmtLglNJKrKIMZrQC9WPDpgq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHj%2BvTKrwmUL3kjpvSrcA%2BNFIK9nJ26YrSSloYVRrFve5psnarbCRFm44R%2FM8X5q7mFSPBGYh4JXOeyMH1%2FsWQKDhXnnfz5zfIUhogCaEfdGHXYv89XNe0T74CJfYQ23vVQAWvivNdCnYv4%2FRjh%2BLKK8QQ50m%2By%2BKLakQ9uf6LJht4gQQSKHpzZHTOSB%2F1vJj1ulz8JgYfnRFFWicJeAruCHfd%2FKkP9tDiDZHql6o5NyGvFj5YaeP014SwsOyjnC%2F8hQ7iQrHXROosmFAYXBEqptlLE5ohOpeMYj2QVm%2BO%2B%2FGpAI13irAdBfsgxKjuPkU8LADK1YlsbbkcpzeuTpxlcBG5NZUyJaxZuss1eXgQwiTxLfLlkSPZp4d2vAejZQxk4AHwAd1Od4E4JEH%2Ft2Im3HTEeAJG9ZEqqT8%2FsGyKh4uDifEX7f8I%2BE1cB32z4JiAgWDowFYV5wAwztYPgtG1nB%2F73mcuDOQGgTzivBUBydMrH4v94fDYntUoz%2B28RxCj5HymIj3sWI89DniL%2Byuqp5GIKMD%2FePXBTbUSmDNXYO6rZJcsQaFq5qQbGGL7OFcGXHuxTCx10ey5ism3njXWksAPcDiCbXw7lYe2CYQtTV9KTtfyvlRw3%2Br62c%2BVlGVx7%2BQi5cXsBYtKR8MMnIscAGOqUBKhZfqHF%2BjcAf1TP1AqVa0Q3OoCV4ZqLxvW8MK06dX60HPEIlmZpeF7qyI%2BICG1HN0cawMT81I77w9Rg%2FCwjydBNDOyXj0wWydY1zEleppIOtnx%2BB%2BYPm8jCjiUIywNmIG5NB%2Fdy%2Fg9HAOToW7CYaL%2FneU7sAxlmw58oGFnhrUkoxPCY6qvpxsJkHwK%2BN3lOfkAwvA1rJADu89irk%2FQBbukyLkQtM&X-Amz-Signature=6593956ae6747c396ae6c71ae804007821e5f8a3f94ce8db985c33d845ca2b37&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEWVWL3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTAs%2FTq207rvRcp%2FKNXmBprnYRhPYk4XgDfZPXKV3BEAIhAOG31Vz3FglAjoBAD82VXG2UTI%2FKOva3xz%2B7vgcmUGLbKv8DCD4QABoMNjM3NDIzMTgzODA1Igzl4xHPsMMT%2FfwEMCMq3ANTsGzdDcWLYBsjNCUcBQwW8cbwW9amPnlfDRRTLfG9bGsCBpHH1tH6DwLxgjTvy5Qvkmf9akXaqdQZhfH%2BTkdeqL9ltWQsjc8sGZ6sBwr4VcpjLtU9o7cy0vRLlJG%2BSZfhW4GL26lzT0IkWxRQ9DUjEaOsphBxKXnDNzeM2x8o2pTUEq1pMoyf1HAc1xtKFoTeyfg8gljZb%2BE8A3jpswMYMz2TIhogAdONqqaUtT8yxe5N3XtMHvzbufh3rtlG8Y4XZGGvI8s91Bnrj9YJLF8rROpCUb%2FOcgr7dOTsYXvTBMLYnMgIbFPp53R1%2Bad0gRr%2BQTe7t7KrHJAbxU9ms3Z33TSvJ0TsZWWCWiWkkWnwhsSSNHL8Fdw6H3Vy69sTezCUYQU%2FaXce2Chk2wXEuCepZnfw43dlnqA1HZGSTB%2BHHR9U1RVc7tuVxUkHLucuRn4paOt9qoezzLMu1BYfY0p2YdpboN77MwGxiUtCgC2irJ9WW89pTfDxkp7mr9vtS8%2BM9ucefmZYWs1VZqQNweAbGrBSgLkaPUrJgsn4k9CGAjMlSbJxy4N9riqtT5VeXyIcaKNMLEv3MVRoZ4yOg%2Fhg9s1WoLfaeXHu3nQG204uZsX1IfY0AsYrUUTUpTDJyLHABjqkAZz3qiCp%2BazP2C44iEiTVBar51scvCyBn0Q7KlrudSNnRJo2EB8hcsDaQWjvtvBXsST8L68Z4RabDqAmG2KHRiHuwTakyM9CK3%2FlHk257QXXbM624ibn%2BCwR1ZctZql7G6OD8xDEB27vkjk7pVTam2%2BbjvPccXfd1Lt20C2u79ZcS1nGtgzRJJrQhoHu2wj8yYg08zpPxXqvtRlFCYqvAg6ynBX2&X-Amz-Signature=001a2feb4e9cfd0fa8f834f29d1b1654414958554bf2c57298176c4b8ccb5661&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYH3EJ7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8LxmAORNfh6LkgUoECr6oOD3qr4JjcySnB4Ozbo07JAiAyRiRPtNoZ1LAB8m58cXJWBO1%2B3HMAcLF%2BucKryc7CjSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMOOGx%2BJwuSGZr4%2FeBKtwDVLHj93fcvQAKYdlcbQ46Msvh4j61vI0iOY%2BzQP6ezYhIcbjtDzDFAGI6u3VJVz4JpoI0HPcMt4gNKaWI9a%2FemLQF8bn3KCAKe1KPaFnx9V4XUofuOtwUSkW1aQrI6sS7NDCa%2BtlB95ONqUe7BnUb0Upe0LU9sVOpLopTFjDhUzSB%2BEhez7jHCcKJh%2Fq7R8%2BQyf3DTbPOqbgNh97VLeKVfiQeHzKaJxloFxu4b9O%2FXCc8%2BW7KeW65HkR7FLNOxxkF1Ffkw9MVlltTTA3YducHe3dba1M9pkox1aTLF%2BfkOD2oB6cn2%2Fh%2Bv34s7TclsT8JAhIsnyBdlEJfNT5Ao8VbSqluwyZs6zrRGM0MAnqwwQ8UL56FaqoVFkNL5zu7vaKPz5IHNm%2B%2BvZsz4RMGqZPzUVBVzV5nW25MD2RozZ8il8VDn99hFRAImzcdx7%2Bmn%2FVjYjnCpWVLxXmMM8WJmp0GRJV8Pfr5oTeydCxrMh0I5GYB7p6tE%2FV3L6AIVY9Q0qnWMOpBbscx%2FgQuZ3mzInLkuTYYC1aIRYu8liBQIX0%2BSoOXqcSewsao7obp9PJVdsp6GRvOwqRynNzpFm7l%2FjQPxLmE3yfrSoZtnJegJaAeXBoJP8Lu7XqVYZF2AVEw8MixwAY6pgFAPrSh8Xg%2BXYJorV6vFJCkeZZ9EJKM4TFAJzGFg9Uio5pTcWYy89Bxf%2BTje3TJQdjmyw3hwBdbta8JQ6AoI3cWIeWz09PNgii005SWRAYFA%2BZaSMMYq1ysPD33IWnp0JwXk7BHQ6%2FKTYssLxzl1niBkTocYSh81COdwIguRhlbzuFX96v5dEESzmYkLAdwch42Xf1QMEw8Ix4yZ4VRBP42wLMaGdjR&X-Amz-Signature=072436c62373c26658bc9d145490823168b369cadecafce4965a899614f1d94c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
