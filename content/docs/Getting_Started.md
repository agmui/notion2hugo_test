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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KM7ACB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE9oZ8CvnyCzzT9yCmEGR86XMUyw2zofnI0sFhhxIsHAIgG9vy2APSQjqneZYepGBDfTzhNhpar1pOM50a%2FJVQ0gEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiyg%2F0bmATLEAmKZircA1zP3U%2FWVS489QPtjgMMuk9xb4dyX%2Bg%2FFrqMO0230JnqclxNLjrrb8htgARoa8PTE0CmB7LpT8prigFfCj5qSvv2RfepkDzD98JgJYaXL7l7gWmShmwavuzdp%2BFQQxvy1U8dxVcxDqJ1K5nkoGQtgU6m3ZmkZXjFhlPzrPLPrL2EHkvRhQF%2BzPte0OjppfVNK0eyD%2FLcXH3Um7wGrUyKMspwO6fVKIbPi4FgiO5lcS8QxcMRZSUXiJ0j029O4jnmMG9xS8OW4VhdR0oplkiwNxj9gQ4Ptf6l5dIFntH4xI%2BFf%2FC3l2fehaEbwveQoxzBFuX%2BAqmU1sOWDLyYL4HcnbIj1UxDXWeJtex%2FYwf38Ks7fOsWkXOjZdYBW1u%2BAV%2Fl%2F1TbSKB30ezlk3aKUTS34fFpCJztyRmYnborc%2BqGW5hseic4asgxxS6l8IGtvGEHy04OEHWy6qIYGSY8LJ%2BilVePsNl4YPYk%2BTERxPUxUYE3mc8uyuuUe1zxiQthKKkKjTlYqoGLp9K62uxvhqOfdK0KU3Pp1Twan7jysCLJylcGJtcb7ifInsFuf3iJG%2F8oBSTbzG5rsWTzvxLT548MErK7e39HhNaB5ZZnamfkhgK5vIzR%2F0AsOr9HsjJRMOS15r0GOqUBkvRQfoAz4DYCuSMy1V6Pq9%2F3eS17uVJBdVdLiW9%2FnKPG9rrjzB9HrlZhyCQyXtGPKr8aoHhBZCT5XvR9BN%2FN6xw0xK4rPpR2zinAXU8KLNJ0C6JUBzZfcMThl5GLnoFtddjIKQQXrpW2lmz57cAeMDqUUdunb8CmfP70QMOb120PFN2Pu%2Fhddlj4OHBX27SpfPG4j0mFoPZCNKXwdjO%2F4bLWjznt&X-Amz-Signature=8437cb0e456cbe28523d19fe8fa11beef9415ac49448fd87abc92a13cd5154bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KM7ACB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE9oZ8CvnyCzzT9yCmEGR86XMUyw2zofnI0sFhhxIsHAIgG9vy2APSQjqneZYepGBDfTzhNhpar1pOM50a%2FJVQ0gEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiyg%2F0bmATLEAmKZircA1zP3U%2FWVS489QPtjgMMuk9xb4dyX%2Bg%2FFrqMO0230JnqclxNLjrrb8htgARoa8PTE0CmB7LpT8prigFfCj5qSvv2RfepkDzD98JgJYaXL7l7gWmShmwavuzdp%2BFQQxvy1U8dxVcxDqJ1K5nkoGQtgU6m3ZmkZXjFhlPzrPLPrL2EHkvRhQF%2BzPte0OjppfVNK0eyD%2FLcXH3Um7wGrUyKMspwO6fVKIbPi4FgiO5lcS8QxcMRZSUXiJ0j029O4jnmMG9xS8OW4VhdR0oplkiwNxj9gQ4Ptf6l5dIFntH4xI%2BFf%2FC3l2fehaEbwveQoxzBFuX%2BAqmU1sOWDLyYL4HcnbIj1UxDXWeJtex%2FYwf38Ks7fOsWkXOjZdYBW1u%2BAV%2Fl%2F1TbSKB30ezlk3aKUTS34fFpCJztyRmYnborc%2BqGW5hseic4asgxxS6l8IGtvGEHy04OEHWy6qIYGSY8LJ%2BilVePsNl4YPYk%2BTERxPUxUYE3mc8uyuuUe1zxiQthKKkKjTlYqoGLp9K62uxvhqOfdK0KU3Pp1Twan7jysCLJylcGJtcb7ifInsFuf3iJG%2F8oBSTbzG5rsWTzvxLT548MErK7e39HhNaB5ZZnamfkhgK5vIzR%2F0AsOr9HsjJRMOS15r0GOqUBkvRQfoAz4DYCuSMy1V6Pq9%2F3eS17uVJBdVdLiW9%2FnKPG9rrjzB9HrlZhyCQyXtGPKr8aoHhBZCT5XvR9BN%2FN6xw0xK4rPpR2zinAXU8KLNJ0C6JUBzZfcMThl5GLnoFtddjIKQQXrpW2lmz57cAeMDqUUdunb8CmfP70QMOb120PFN2Pu%2Fhddlj4OHBX27SpfPG4j0mFoPZCNKXwdjO%2F4bLWjznt&X-Amz-Signature=93f97a641c7bdb4b577a2a818ec83232e6bd613e0874e960f0ee35bab2433af3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVO5TI4V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgP3%2F5WROem%2BNT%2FkZqcUpx2fSvHeX%2FYH2Fkcf9qLN6%2BwIhAMfUEZp4jUyTLNS7If0mK5MfcHJMs2nmqKkiNgywY6liKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzlG7oHXnUJAqeXF4q3AOAI%2FKukcrrON62xsrP08dXhvuXJYUSUP5qPVeN7q8kVXI8r%2Bdp5vZ3JG227YKEHpsu%2BuYbCIjrh0duqMLsETVwSpWJxMwWmH5mal6gdOrq34gkWcsGFT7tWLcybs6L5043%2Fxp1L5zIkZS0nCQRespnh3DE%2FUrNHmKNKDiC47ApJjv0Gc0Q4UgLDUOhLMwC%2FdJMbmiIBR%2FFOZjC29dn4e10cQ2JwaM6Bn%2FtwKEKSuwo02bGj4a7Kwc5bFFsmWcNsxzcEHuopWFTyHACSjqB1MdSD%2F0onQHh2TxyinH66WmUrJwshm0tOJ1r5FtBQOkxrm5bA%2BjM6pIPHM2gkW8Je7nKCerCLVa6QSSKyB%2FNpgDSpyLaXjDGkTK7jlzNFdLSmj6mchqSORfcMqg17x7b%2FfwxZ%2Bv%2FjOFlCtXlWkVG2KckYbzosNf1lmnHfMdgX7Nf6iuFnKLozDglBMBnmolncJxPj2xC3hccw%2BT6b0IQmgcS3O%2BIInDDJOBygoKyU%2F8xJBa0PLfuF7iqlg%2BPZHTQO12AwPwfgbxO09Al7lqKZq9AXQSAGj5iT5hHhRmAl8KgPnX%2FRLXtH2PfRZOl2%2F8w49rloxE7T23SQAa7zNAFAdj1LSMb4QIIJLAOEpdjYDCd6%2Ba9BjqkAUkCR5u86n5R%2BLU%2Bbrf0baP9mEH3r5STaBE%2FS7wdg8GPUeqc%2B5V5h%2Fiaz82RvNQTUJObfpOueK1HiiHJ1cAoQ9XzbMWWOwL8V9%2BthnEWWj0aPovqASKdAy3wvvL0gEiKrQ6eq2n0zAzxByjoBLpK%2BoJffqkwG%2BFAIK62cW4xWGZvED31hxhaZOPE0XzHhZ8JzLVRXC6FJkNFVGLEHH3zT8AfJqg7&X-Amz-Signature=c0c73b852322bde289e1dd8dffc11ce0b8c2bba08d5ffc527e50a4391bfce4e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMYR3KC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Wwrn4e%2FMpOQsUWufyGt7gsb4aR1R0FLnnHHIsQz2jwIgYv9EKL0%2FgLgIk4KT8Go%2F8Y%2FUpxJQImsOLA46CGKlCH8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwVNol9tl5RmSMeIyrcA6ndjzQ0vwirpHy%2FbnTIQTZKCkPJwDwYpNQbuCe8JeY0PvWc5V9dogmuXmmx0uBi2DzyN0MdgcdKiRzCPuzaIq4qE6iIAdNZN6htqh4KQZnQiyiUc1bATdc1G8gdk5O%2FHmm%2B%2B1%2BDD76LQQF%2FBmI0XKTAY3UrUiplE%2BfrZGGfUSERVcCry%2FtRLddPVEz6KdBbBmcDNcpUODslVhe16ZeaNyWlrXwmbOYZC4I%2Ft3hy1hXh4wQwgf%2BvJT0KkkzQ2AYkzJ1tuI2tbwzDfP46oifnnKYcPd4Lqpcsy5o%2BVxRs4ItYAx2hRNbv286laeLwUaSFAf9PWsn7OnQ%2Fu2NO0%2BhYWiA8oYU6S0OJJqjpfa1kvZk16apKQVb9%2F01USV8MGHGvsBiW1qCkGstNDBkqsqEX4SThcETqZ1M7TRPuqpikOyqpGMBaTpqn6X2TN2kmrJZxtFmFB71otlcpH2sqrm5rkxB40Xm%2FuWDVHGP%2BuZffUrsGP555B1TboGnkVs8qvizZr%2FSyhaSe89CflHvkY%2BzpTUBYo%2FEZi5AaFTOPuaKQNW9UqQxgFU6IoBW2NzormqLUTSS8COUsKtlPsr%2Fce82SO23uevRUz%2Ba8U%2BITQeRdKmFuX1QtcV82d55s9RSWMLfs5r0GOqUB2CpykdDB9hSKFgMCx88%2Bmb6PHtiDpGe%2B%2BIjFHGok03sAWUVBPm37tYfAs6GvtTomaZXd8wCr%2BuShLk51poXVROHdegf%2FyWaOPMyXX2eSqUMYJsoX3Z82VbN2TcTPRU7uDA3CVJVpQmcO47ITiuOjRFeERbN1wqlzn1b9D%2FdkMjlFXBa6huLNaOZOWHhczlhqz0FdrztM7HDCak9lUtUKf3zf5b9w&X-Amz-Signature=c46b6f5b0d74b6810c022bdff5b58a2d5aae8eb8003790d85e9edbdffa954497&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KM7ACB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE9oZ8CvnyCzzT9yCmEGR86XMUyw2zofnI0sFhhxIsHAIgG9vy2APSQjqneZYepGBDfTzhNhpar1pOM50a%2FJVQ0gEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiyg%2F0bmATLEAmKZircA1zP3U%2FWVS489QPtjgMMuk9xb4dyX%2Bg%2FFrqMO0230JnqclxNLjrrb8htgARoa8PTE0CmB7LpT8prigFfCj5qSvv2RfepkDzD98JgJYaXL7l7gWmShmwavuzdp%2BFQQxvy1U8dxVcxDqJ1K5nkoGQtgU6m3ZmkZXjFhlPzrPLPrL2EHkvRhQF%2BzPte0OjppfVNK0eyD%2FLcXH3Um7wGrUyKMspwO6fVKIbPi4FgiO5lcS8QxcMRZSUXiJ0j029O4jnmMG9xS8OW4VhdR0oplkiwNxj9gQ4Ptf6l5dIFntH4xI%2BFf%2FC3l2fehaEbwveQoxzBFuX%2BAqmU1sOWDLyYL4HcnbIj1UxDXWeJtex%2FYwf38Ks7fOsWkXOjZdYBW1u%2BAV%2Fl%2F1TbSKB30ezlk3aKUTS34fFpCJztyRmYnborc%2BqGW5hseic4asgxxS6l8IGtvGEHy04OEHWy6qIYGSY8LJ%2BilVePsNl4YPYk%2BTERxPUxUYE3mc8uyuuUe1zxiQthKKkKjTlYqoGLp9K62uxvhqOfdK0KU3Pp1Twan7jysCLJylcGJtcb7ifInsFuf3iJG%2F8oBSTbzG5rsWTzvxLT548MErK7e39HhNaB5ZZnamfkhgK5vIzR%2F0AsOr9HsjJRMOS15r0GOqUBkvRQfoAz4DYCuSMy1V6Pq9%2F3eS17uVJBdVdLiW9%2FnKPG9rrjzB9HrlZhyCQyXtGPKr8aoHhBZCT5XvR9BN%2FN6xw0xK4rPpR2zinAXU8KLNJ0C6JUBzZfcMThl5GLnoFtddjIKQQXrpW2lmz57cAeMDqUUdunb8CmfP70QMOb120PFN2Pu%2Fhddlj4OHBX27SpfPG4j0mFoPZCNKXwdjO%2F4bLWjznt&X-Amz-Signature=ba3dde58b656cb3d7e5194e8f64d4df3fd0ea346484880afe0e9704508f13c23&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
