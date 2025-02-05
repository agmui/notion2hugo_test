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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXDUCS66%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDu2O6CzOl6%2BEh0aH6Moc7ND1wajum%2BDbRJnSLKxOMy0AIgJlorJvlvP2WgjSc2an47eJchNDmwb4JGtNfhtSchgpoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD%2BsS63iqrSvW7vdWSrcA%2FRg3iQjyIeBO0ooGvoV1JVDqPtYUWIEzb9J2QynQmPcULQWvss6gmQzXRhD4rO6ZRdVAkWdTyMlSC13DHl5KPx7Go2jkQg3Oq3uqYiiV1nYSJJVloiEN6wSX23Qa%2BTONsUK7ZrmKYNObRIsobupImHpRBoNBRRTnUA8s6wL%2Br7oUzjvKaWh4c%2F02ISAqtqEzBXT2%2BFghL1PIVgtBdHbtCmb7WN1eZbq0x2nwwBeLHg1Oq%2Fsbrkqh5CXrOECKE%2BZUF7qZe41%2F40s6zbWWbxEwoJgVV7L0zlYhpnOxFL1a2D9fp9BZKCBNugeB0%2BGkmI96so0szsDKUN8j3RlfMuxG1miBZf%2BqNJqRzfzZd7Jc9490Zc556zTqpJv2cYgBpToa%2FpZS8vn8hjiSVnOpSTQeChxR8s72ZQb%2BzofUJ%2Bdk5bfgR9Y%2FS42163LRrXfgilvS3TzIpKnXQVNIJ0qWIO1K%2BwdmjKRTjjdFQ6mbpbl7v7K5YDRS2g3V5Hq%2F8idfKP90QwPtHwb57Oq1LCiOtMyswyWdfAJvIioh2vjk3ZR4ZOPNqdH8H2aQVhGohwVKsCRprlQJ3a1%2B7h4e55CXHtsrPFHObg70NGGxpc8OMifGbNTXZ7V%2FVgBJYqTYGBUMLy7jr0GOqUBHURPaLRcxR9jIVXzzqjxALbBJ5sRDTuw9cOo6CF8nzvJhg4v3HAN13gZgzP0TBxNi26rBg1NP0jR5LnHVAubwS6b8eMHAy%2BhsqoTBoAnK60wX64QBQTEu9bfmhaVg68zbxd0vahDnspgSyyZrRtynCN2uxmrcz0f5CJExs1E1MddgK%2BmbhNWCJKJqd6rc1Gz6v1a4jXxAa%2BMkQR8Mf%2F9cxvGPh9K&X-Amz-Signature=5d207f246c9beed1deb92ab6c310ee936061c505b15597dffdcd777af1a5f9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXDUCS66%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDu2O6CzOl6%2BEh0aH6Moc7ND1wajum%2BDbRJnSLKxOMy0AIgJlorJvlvP2WgjSc2an47eJchNDmwb4JGtNfhtSchgpoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD%2BsS63iqrSvW7vdWSrcA%2FRg3iQjyIeBO0ooGvoV1JVDqPtYUWIEzb9J2QynQmPcULQWvss6gmQzXRhD4rO6ZRdVAkWdTyMlSC13DHl5KPx7Go2jkQg3Oq3uqYiiV1nYSJJVloiEN6wSX23Qa%2BTONsUK7ZrmKYNObRIsobupImHpRBoNBRRTnUA8s6wL%2Br7oUzjvKaWh4c%2F02ISAqtqEzBXT2%2BFghL1PIVgtBdHbtCmb7WN1eZbq0x2nwwBeLHg1Oq%2Fsbrkqh5CXrOECKE%2BZUF7qZe41%2F40s6zbWWbxEwoJgVV7L0zlYhpnOxFL1a2D9fp9BZKCBNugeB0%2BGkmI96so0szsDKUN8j3RlfMuxG1miBZf%2BqNJqRzfzZd7Jc9490Zc556zTqpJv2cYgBpToa%2FpZS8vn8hjiSVnOpSTQeChxR8s72ZQb%2BzofUJ%2Bdk5bfgR9Y%2FS42163LRrXfgilvS3TzIpKnXQVNIJ0qWIO1K%2BwdmjKRTjjdFQ6mbpbl7v7K5YDRS2g3V5Hq%2F8idfKP90QwPtHwb57Oq1LCiOtMyswyWdfAJvIioh2vjk3ZR4ZOPNqdH8H2aQVhGohwVKsCRprlQJ3a1%2B7h4e55CXHtsrPFHObg70NGGxpc8OMifGbNTXZ7V%2FVgBJYqTYGBUMLy7jr0GOqUBHURPaLRcxR9jIVXzzqjxALbBJ5sRDTuw9cOo6CF8nzvJhg4v3HAN13gZgzP0TBxNi26rBg1NP0jR5LnHVAubwS6b8eMHAy%2BhsqoTBoAnK60wX64QBQTEu9bfmhaVg68zbxd0vahDnspgSyyZrRtynCN2uxmrcz0f5CJExs1E1MddgK%2BmbhNWCJKJqd6rc1Gz6v1a4jXxAa%2BMkQR8Mf%2F9cxvGPh9K&X-Amz-Signature=e8614f27019fbe81ed09dded21cc1fd92b6aeee2289de1bb52f7cd19b2e74fce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6AMKP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDDKRurmLEEMA%2B6spFoCf6xudAhkSg7HxQxIX2MJTGRUgIhAKKgBrODj5KMeMXu47RWrdwq829%2FzG0vXyX0EIJ76df1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzMQAbIkBujSeHsL54q3ANVl776xuFrx6YoKTb9EcLvb0XZngQqXjGMFzrayVdmZlYLxQhtFf7%2FO3fClvovnzc9xVc3cQemXQ7p4R%2BjJIq19KES1ByjrPZRuBseb54hWCh8zBWoJUvRRA4aOsggWbNC9v3QQST%2BajE9x99SUODSWmELu3b1ePCF9Bu6OTcLsD9Ivc3iTi7vv9sgu%2F%2FKPkmZdbzFO3d6KXH97N4zJQvBkEeZWoMxoXptNSZ9g5ad%2FBtNFvzfyyz9fJukFFITXY4vuh5CQ0G5hMFtBTteZt4lf9WHmMLRRuvjIGietXKo4JOGGRkECMpoCiz%2Fv5pYzr%2B087Kius%2Fnham%2FVcoCm9qxzfoboLi0ikcfaEhV0%2BliIZSvOxwiqsicYa9yIDL0uZZb%2BOo9UQZW%2Fz0YzCABDZ8nKEN24PkpH%2Bv72P7DQ%2B82w3CFNP0gSGdl3oEHFEKiM0m9fFYOrN7QF%2FOPMLk%2FE5hiYVjuFsEQnyReUcNE4tX5ORknJdpLbQdKLIkw%2Fj62qPIFYU8Pur9r%2FgRK8xcAbxaua60umsPYNe5sctgiHqTOuPB%2FiwqM%2FG0nzAZZ0u7Ct5uY%2FrrJMG7VJtvVGZXnNHTcpsLlOKekMqwGan0rCl79F85Cl6r1u7OTpRs2nDDBu469BjqkAaSJ8iKdYQjht%2BDuC8s7EpHb0jy0VnJRIZ4U%2BOYAxsVcm4iHRW0F6Y9Lg2Hy7gc0ZfXgL3nGenIcVAIhaNXmu94IXMD87%2BCKve1sKDxNA%2F5z%2FYUs1BVdNjadQk8ev5Vz8UtKkQXiOoNEP49g8DBC7UA49O5W%2BxGybjGezGKA1%2Ba7s3uTpaVu8Pwkzke8DtZbcxeWhZBJ2zLiMouqpi1WahXrfAYT&X-Amz-Signature=33efbdb8aaebe79f4a54d6135c7ef15e2e86c46ecacbdbe6574a02f557f7ea6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NGWVANQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDDFxNihgtLW1C8IOLqgaG6nA9OJ%2FL01eIqzXRWUUWiWgIgFQPOoq5Q8%2B5RK0%2Bj2flBS7eBWYOtKhczSctsOSqSbyUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHuBiqi0DNpEM3GVUircAz2ekjFOV8SgVzOgKs8M7ZZvHYzwRPbeMsDRYcR75Vw6YSHUTpaX25DI5Xcop6rZrasrFKZCAZPuhqozboOWymWpxu0W8lgZfQ9qNM0LypmLjJT9m1Dey1OlaHuLXAma0vULbpsD4yBg9HHgqG%2FOrglDS4r3ZYZ8uotY9ldJbOO6eHIFwwFYBMbjUz8yjFQx1txhuh8jugLcjlq36Hw7B%2Fsu1vHQSkaYFodA6hcvRVmQCtmgdny2wdjaFJZgBKPnBOWiBIteioIE%2BoSElGeTizeexIsvKz7rz8mS4o%2Fp3zXVACKJw7a85FN6uOxsf1oYFj4lTc8XBeQMKrh4H6mZ3gI5R3Gb6ygZbGqav2sX7lVD7GZOsM77J6gZcoFqzqhafWOavWlCwJQvklSP1%2FwPKAQIB5yOMtbC7JsaKnxG2M0v%2FBh9iEQk0Esri90I61Tuv1uPEPwsNRAAxLFLjuW2DwaoimSmR5ahDJaSjmypmzSZ7YTpB0hO9M9NxX3%2F0wqLqb1Bwrr2%2BIkgfLmZIqPy0GSMRolBE5iAj3SqKn7hS0yOsEHTmZHZ1W9emv4cBr%2B81qeK%2FZ4jFppUnzw6UR7FT7j1JImzA8Jl2qkYDuYwDWzgQcjJb%2BOkCOtV%2Fyq8MJq8jr0GOqUBAo9hR%2B%2B551CzI3Fd6YoZv%2BL1JJzQ3Lwaa%2FCziLmhXtTxQfbYdd8q0opDWAHupUlvo9J%2FnPMNAUwCJ8q%2F49qJLu%2B0Z75svFR4JCj%2FUfU7WFPl%2F8%2B6HrEl2oW0qL%2BoCUlzBRt8CGoNno4Cbi0xHf%2Btt8iH1h9tvJaPG7q8DXJYCsnwyQg1ruES0N3g14jGdcTBdH6qje%2BfFTJhJ660ciKnaaPekcmA&X-Amz-Signature=846a28ec41f17ccc144964e2bec092cec9473b14b3d4682dffe898b6d71730e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXDUCS66%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDu2O6CzOl6%2BEh0aH6Moc7ND1wajum%2BDbRJnSLKxOMy0AIgJlorJvlvP2WgjSc2an47eJchNDmwb4JGtNfhtSchgpoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD%2BsS63iqrSvW7vdWSrcA%2FRg3iQjyIeBO0ooGvoV1JVDqPtYUWIEzb9J2QynQmPcULQWvss6gmQzXRhD4rO6ZRdVAkWdTyMlSC13DHl5KPx7Go2jkQg3Oq3uqYiiV1nYSJJVloiEN6wSX23Qa%2BTONsUK7ZrmKYNObRIsobupImHpRBoNBRRTnUA8s6wL%2Br7oUzjvKaWh4c%2F02ISAqtqEzBXT2%2BFghL1PIVgtBdHbtCmb7WN1eZbq0x2nwwBeLHg1Oq%2Fsbrkqh5CXrOECKE%2BZUF7qZe41%2F40s6zbWWbxEwoJgVV7L0zlYhpnOxFL1a2D9fp9BZKCBNugeB0%2BGkmI96so0szsDKUN8j3RlfMuxG1miBZf%2BqNJqRzfzZd7Jc9490Zc556zTqpJv2cYgBpToa%2FpZS8vn8hjiSVnOpSTQeChxR8s72ZQb%2BzofUJ%2Bdk5bfgR9Y%2FS42163LRrXfgilvS3TzIpKnXQVNIJ0qWIO1K%2BwdmjKRTjjdFQ6mbpbl7v7K5YDRS2g3V5Hq%2F8idfKP90QwPtHwb57Oq1LCiOtMyswyWdfAJvIioh2vjk3ZR4ZOPNqdH8H2aQVhGohwVKsCRprlQJ3a1%2B7h4e55CXHtsrPFHObg70NGGxpc8OMifGbNTXZ7V%2FVgBJYqTYGBUMLy7jr0GOqUBHURPaLRcxR9jIVXzzqjxALbBJ5sRDTuw9cOo6CF8nzvJhg4v3HAN13gZgzP0TBxNi26rBg1NP0jR5LnHVAubwS6b8eMHAy%2BhsqoTBoAnK60wX64QBQTEu9bfmhaVg68zbxd0vahDnspgSyyZrRtynCN2uxmrcz0f5CJExs1E1MddgK%2BmbhNWCJKJqd6rc1Gz6v1a4jXxAa%2BMkQR8Mf%2F9cxvGPh9K&X-Amz-Signature=f731bb4e557d661e16cb617104c0dfc519d2965466fdb176ee08fd092202fef0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
