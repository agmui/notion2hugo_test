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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFLTJKU%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1RQ51tndf631AVDTqvsB5nRh8pm8fFkXLmCxS8FoQHAIhAL%2FClmRBnXc9VyQ8psvrjgyKKfG3DBbzFxOUZRmAGGNHKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnHO7SBH5cqx1mHvUq3AO5YqL5DH6cQSM8kf%2BJEI8zCj7pNVGLj1h%2FB57k%2BNFI4wYBJ%2FcE8krRPTC3whx2R5Vw352a9YRIweAbR8gAzeEAFWjRGo8ikNt%2B1hwvkCt99gDXbqomt%2BePRHulM%2F8FPs5xQPk8izu9BFbrbF6D%2FlWABMM7i544yI1STGX%2BBOln%2BygdnsfTPTMZ6zCJeuKcDlBscNMD2325XN%2BHVFXySkE%2BvzHaCBoqQA%2F%2FP4WcTY8tmsTo6tj%2F0RUDpHqP%2BpCte3ft7%2FR6WMOgVzn5kB%2BN6iGLumlU6%2B8Z8z%2BbdEk8GlGaL%2FK149%2BTds6EIT1bQ1liOo%2F%2BrGMZA9p3rp4ye5pCbS2kjGFD2Iyb6xXZIH5EUX1%2FgHn3IGFWrwAn0gEcst7jgfnL1DtSoksRb48zb62kJ50Xuj1QSJRVLBxvBJEGT%2FFuM%2F5Iity%2FOfi3N9qb1OLcV8oZXdq4JddRwngS%2FjQ59bYlHxWHuYT8WAP1vdH8DBO3phmvoXTQ7YzLCIRMYy4Ay%2FiDtVVF07SNYSF9%2Fm1NCNdvRsNu6tzrQnFfVzXP0JECDQ%2BOeP9vYhHSTXZBhccs2Y%2FFLxrOHoA5GEs22zzM7ilfs6jylcE3yEl3uJSrd3MOAXuxqX12RcDYiU3Z%2FTDKg6O9BjqkAbG0JDS%2BDEODbYbiBTfWTRnHyFLqpynuU547wzvI8TjAqvGkDZPwfF3jGwoeL77MdjsHHsAy%2BtSNPx5dRphnWbP7LdLHoiM4Ae%2B0DP%2BDrDdWKa9i%2FCeQ9sRIaFw%2FnMyBUkx2C%2Fj49VnnyiCkyS2944x1NXDHA4%2F4XWIMrknLlpFKIIgb58ADaY7NulD6xkF%2BaMCDuW5vBft2tKiE%2FYy62dJbT%2Ba7&X-Amz-Signature=3c0b11df9fcd65dd38238e833c1e8a293c6b1fa7c37a6bfe062d849089ce19de&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFLTJKU%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1RQ51tndf631AVDTqvsB5nRh8pm8fFkXLmCxS8FoQHAIhAL%2FClmRBnXc9VyQ8psvrjgyKKfG3DBbzFxOUZRmAGGNHKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnHO7SBH5cqx1mHvUq3AO5YqL5DH6cQSM8kf%2BJEI8zCj7pNVGLj1h%2FB57k%2BNFI4wYBJ%2FcE8krRPTC3whx2R5Vw352a9YRIweAbR8gAzeEAFWjRGo8ikNt%2B1hwvkCt99gDXbqomt%2BePRHulM%2F8FPs5xQPk8izu9BFbrbF6D%2FlWABMM7i544yI1STGX%2BBOln%2BygdnsfTPTMZ6zCJeuKcDlBscNMD2325XN%2BHVFXySkE%2BvzHaCBoqQA%2F%2FP4WcTY8tmsTo6tj%2F0RUDpHqP%2BpCte3ft7%2FR6WMOgVzn5kB%2BN6iGLumlU6%2B8Z8z%2BbdEk8GlGaL%2FK149%2BTds6EIT1bQ1liOo%2F%2BrGMZA9p3rp4ye5pCbS2kjGFD2Iyb6xXZIH5EUX1%2FgHn3IGFWrwAn0gEcst7jgfnL1DtSoksRb48zb62kJ50Xuj1QSJRVLBxvBJEGT%2FFuM%2F5Iity%2FOfi3N9qb1OLcV8oZXdq4JddRwngS%2FjQ59bYlHxWHuYT8WAP1vdH8DBO3phmvoXTQ7YzLCIRMYy4Ay%2FiDtVVF07SNYSF9%2Fm1NCNdvRsNu6tzrQnFfVzXP0JECDQ%2BOeP9vYhHSTXZBhccs2Y%2FFLxrOHoA5GEs22zzM7ilfs6jylcE3yEl3uJSrd3MOAXuxqX12RcDYiU3Z%2FTDKg6O9BjqkAbG0JDS%2BDEODbYbiBTfWTRnHyFLqpynuU547wzvI8TjAqvGkDZPwfF3jGwoeL77MdjsHHsAy%2BtSNPx5dRphnWbP7LdLHoiM4Ae%2B0DP%2BDrDdWKa9i%2FCeQ9sRIaFw%2FnMyBUkx2C%2Fj49VnnyiCkyS2944x1NXDHA4%2F4XWIMrknLlpFKIIgb58ADaY7NulD6xkF%2BaMCDuW5vBft2tKiE%2FYy62dJbT%2Ba7&X-Amz-Signature=7fed0d8d9560a85b0cfa268feced3cf18a75059693f33cad1eb4efe176ca6731&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q47E32EI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZKALPhtgunoRcAXF5liLfJ7Z3f2xewZ%2BNdoYvxmz3AwIgcQc49q7jpYD7ale1spnFRhAEIxNhfmDP2IC4DGa12GMqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyXnUmZrhT7Flee8yrcA0cZwqf%2FCUTtKWGPeZ7cGZCQDQ5guIr5iTfXwHtr%2BwkORSUTEotzz4RVSShhKKVffR5lWUBFQoUtSt%2B0NXxgEELV5EBKPAfVaYGSwwfY%2BL5xH6JwIRcEccAcOZwT8I0FNgoBNb0rp06VYAYi0ZVTb8qZWyf%2B6plFMhmPVJU4pfI%2BwKIlq7e24kbeH6upirbfs8MBdCKZjby1SzPFIXGuru2iNDKMFOqYrMEVLTap3jpRnG0%2FVGg8h8Ye4%2FupWA6y2qQXuIZHdL5T5sg%2BdY1xzzC7rMCPMBn3ewZP4OzapklMwpYUT4vmRoXYU%2BYQ6eyxmsDKhyQAShKQihRmIP1J%2FxZznqMG4ATBvdCwCEKhE8tlKeno6rBCrvDLj%2FBAOetUxREiir%2BNi05hQGl8YRnEjXDIWjsdl6%2FTAZmtIdO5IhykkWg5aLrLAe%2FjJpsjuzYhIffkI02oljr5dNp%2Fl2ji%2F4AE13bw6qMTU9cxpMmSvQSDVfBNkIuedcL9dZmbK5XN1ejGX52npx6fEH4e%2BQ14lxeXJugOii%2B510JdKqP8Q7Bj3oDXif9kGbT01xRHoKX2wYJUidBpJ6V33sWeob9uyzR8CXHNznhPNYNhvzJnEtkXVu7epAWb3FTKWgOMMM6Fo70GOqUBnLK9TAxy2EDPTQN8OnWyW3zfMLyYBdNDSVlTNTqkbRiUqVKRKCkXAUJCpQys1HImpoqpoUb2nchRf8oCgfRJrWEqceJEoRyF9a8fhj5cymjLdwkgZNK2zzcYSlcYbwwK9PYaNAcvKJf7j7NtXMpIw0Le2jEs18%2FB8ERD8fpQgZBiJT5vHKwHLfCjWoRujVx3Ow1J0Tfh2CD04oXgX0Hi33d8mdqm&X-Amz-Signature=06968280bd893ec91f4cf20e95937b9c9e14604dc9dac4213caa0ff12aa69797&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJB22RVS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD8OG8goLmolOsnoWWSPyMz%2Fkz%2BoUD81XovirLVmhYBAiEAqqOi94iWEWi3WUNfZbNFX4jkvi2VTDg43BA1IIj2YPsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9ftnAFMsiOMKzFByrcA59PnFzQ%2F%2BjkRaf7Fs0WLResf9FFkHY94VSvgXlDLEsLoVZKdQRlbAtt5MxjY%2FWZ7c2XCUtS2pBN%2FFEsRB0k1qo5xd66JtUcvf1%2FO%2BQUum%2FvkIh%2FttuWdvFNrwrtzN5FB9e88NlsBTSP%2BXLPpP9LTBdLV0H%2FRE%2BIiQl36oR%2FampwhL8KR6CXioEGZezkfywJkEe%2BFtOhx7g3ujQoYbHzdBO2A8omYqZDX1vYYYySucnZwSp7Qh6elQWbpAdGF8C85cuIHilSm4%2B20o%2BSksWKAL3jzs8a0rxMMSf%2FHuNMwMCxy6cOLkZujbKgVQEil5sLfLgNDOq%2B5ifG71MBY%2F0beofeNPLn0Dk3xE0%2FIlayMd9gji4U8uFk4sglLBOzl6oogJaI16IknZXdWn9EohOnujzDK%2BE8J%2BV5ntVyR3aUFrOYZ831TTaVrVXLvYz4ZkDnedR78Vb6ybVmvwSM9QEA5gmMvFB1c%2Fr7D4U5E6QRwSiWrMHgD4XGKGD43%2FIQsTq73kEDnaHnKnqypPRI9B7DZFzCdSqtVwhMzrCPd8%2FGpRAh6UWHnnJL0sKSUL5okrbv7IYsku3ZdLtNCSP6FX5vLH3gGurLZBRtaYxXKhVYhC0uqKW3fB5WWR%2BHbdeUMMqDo70GOqUBLwdDG07XKhA6vh8YiRh7Knw9xR6Ls4Jpwdj6SXkfdbIBRoYdh2mxmxdsQUf1Ek3NGxYZVILg45gJw7lTi7%2FEaUkKzQxqUTqbb9UUpPieZsHsaEffFNk%2BOWjgqrj0Z7PX%2BFG73mTNanm%2FVHP94lOz2PnBO1lgQlB%2BAzBYgrcK%2Fs7WEwS%2BSiBXldqDsXcn7%2Fs03VVSrnAoWjHMj3ASh%2FN84AFMX5zA&X-Amz-Signature=86fc254f221f7aa794fbaf9b8aee38585adb98669d8ef454ce29f1b0e58259d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFLTJKU%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1RQ51tndf631AVDTqvsB5nRh8pm8fFkXLmCxS8FoQHAIhAL%2FClmRBnXc9VyQ8psvrjgyKKfG3DBbzFxOUZRmAGGNHKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnHO7SBH5cqx1mHvUq3AO5YqL5DH6cQSM8kf%2BJEI8zCj7pNVGLj1h%2FB57k%2BNFI4wYBJ%2FcE8krRPTC3whx2R5Vw352a9YRIweAbR8gAzeEAFWjRGo8ikNt%2B1hwvkCt99gDXbqomt%2BePRHulM%2F8FPs5xQPk8izu9BFbrbF6D%2FlWABMM7i544yI1STGX%2BBOln%2BygdnsfTPTMZ6zCJeuKcDlBscNMD2325XN%2BHVFXySkE%2BvzHaCBoqQA%2F%2FP4WcTY8tmsTo6tj%2F0RUDpHqP%2BpCte3ft7%2FR6WMOgVzn5kB%2BN6iGLumlU6%2B8Z8z%2BbdEk8GlGaL%2FK149%2BTds6EIT1bQ1liOo%2F%2BrGMZA9p3rp4ye5pCbS2kjGFD2Iyb6xXZIH5EUX1%2FgHn3IGFWrwAn0gEcst7jgfnL1DtSoksRb48zb62kJ50Xuj1QSJRVLBxvBJEGT%2FFuM%2F5Iity%2FOfi3N9qb1OLcV8oZXdq4JddRwngS%2FjQ59bYlHxWHuYT8WAP1vdH8DBO3phmvoXTQ7YzLCIRMYy4Ay%2FiDtVVF07SNYSF9%2Fm1NCNdvRsNu6tzrQnFfVzXP0JECDQ%2BOeP9vYhHSTXZBhccs2Y%2FFLxrOHoA5GEs22zzM7ilfs6jylcE3yEl3uJSrd3MOAXuxqX12RcDYiU3Z%2FTDKg6O9BjqkAbG0JDS%2BDEODbYbiBTfWTRnHyFLqpynuU547wzvI8TjAqvGkDZPwfF3jGwoeL77MdjsHHsAy%2BtSNPx5dRphnWbP7LdLHoiM4Ae%2B0DP%2BDrDdWKa9i%2FCeQ9sRIaFw%2FnMyBUkx2C%2Fj49VnnyiCkyS2944x1NXDHA4%2F4XWIMrknLlpFKIIgb58ADaY7NulD6xkF%2BaMCDuW5vBft2tKiE%2FYy62dJbT%2Ba7&X-Amz-Signature=4b8641d82ff047cae5690a5b49aa437f5459552b989523f612edc2cf153d0925&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
