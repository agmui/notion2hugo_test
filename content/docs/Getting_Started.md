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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AAXGMGE%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC0UHtubd2dnd8y%2F%2Bue9jxxMpvz6Hm0ffZ9MJLboh8glwIhALR%2BPwvENeycyRx0m3Ag%2FIVCGKmnY4cSHs7ounXv0ZHrKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCA0wrj6uYKyzkoEUq3APWPA1I3mhqyin4YtE1OrPARoud7JJ82z74wvH7k9pzEyo2DQCRUBvLq26DZ6kxO3w%2F3%2Fu1uT%2FondZwEHs0p6sTRKN3B7Ms%2F7eP4u0NjP1FHGFSvpd%2FSvJPaj0xTsQz0fhUt4swEfUfUY%2BBbxpEyg%2BGg8ElFgmPO82Jo5ByCdtJRmbk4EvfXBV7iwEAsUqa4AdvR%2B5J0K5winpq8ChcnbSSnpXJ4NhxidQUKb%2FV4e0jOrFHjRXJ%2Fb4t%2BWHJOntNH3mH3hWLkUMZ9s5%2FsLNmsQZFGoJVDVP4eoOntxkpjM65yFo6iXxUTcvrpa559QpWh1934VtY8OPzvVoINIYwAh8gIBo7Niye7SU4a0aKXJXUryKa0xhyZ68Tf6267lW4ywLw05aNQssPIQRfBHLnLMQ87vOgRn60l19z3ezGoy37%2FcZMTTuv1wzc6rZp84wTXX%2FtKl7htSCZYMAIBjDilzAywHmIIzvRCLDA6O4P5fNq0za29HoY0xxQvtx4h9q5hMXI3ygHaGyKE%2BuHH2dC9MRC6Itx2ej2i%2B8SWHoaKYYp9aAv4FPPpOGpR%2Fx%2FF2wtkrMjhxyF7Lh2JIBFh%2FGr%2BJA1SgvOhBeOWJ3ffzfw0zdTE0tvNJb0k2khBbPBYDCl75%2FABjqkAbVQk4UW6HN%2BjuVAGeGNXruJDBbgsd0O44mEW3MDRfBdzO%2F1HRFxxOR1k8F6Z8aeeKO0YGAX3shlUeyQ3eKJKAkZne4kjMC8O821L60aEf%2FhQhcahbtRrx%2BVeDx81BZVH08ixib4EA1L6NBJPjJ938fVytuIYVfee%2Bza9J6YOwQXOOYR6S2gpqzNnOEsdfHh2Q2amY%2FY%2ByvpNMcwRzz9j1iLabxX&X-Amz-Signature=602c0d58c4722256f38f015c9abb3f32dd1b601fddaba3ced441745453bffb26&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AAXGMGE%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC0UHtubd2dnd8y%2F%2Bue9jxxMpvz6Hm0ffZ9MJLboh8glwIhALR%2BPwvENeycyRx0m3Ag%2FIVCGKmnY4cSHs7ounXv0ZHrKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCA0wrj6uYKyzkoEUq3APWPA1I3mhqyin4YtE1OrPARoud7JJ82z74wvH7k9pzEyo2DQCRUBvLq26DZ6kxO3w%2F3%2Fu1uT%2FondZwEHs0p6sTRKN3B7Ms%2F7eP4u0NjP1FHGFSvpd%2FSvJPaj0xTsQz0fhUt4swEfUfUY%2BBbxpEyg%2BGg8ElFgmPO82Jo5ByCdtJRmbk4EvfXBV7iwEAsUqa4AdvR%2B5J0K5winpq8ChcnbSSnpXJ4NhxidQUKb%2FV4e0jOrFHjRXJ%2Fb4t%2BWHJOntNH3mH3hWLkUMZ9s5%2FsLNmsQZFGoJVDVP4eoOntxkpjM65yFo6iXxUTcvrpa559QpWh1934VtY8OPzvVoINIYwAh8gIBo7Niye7SU4a0aKXJXUryKa0xhyZ68Tf6267lW4ywLw05aNQssPIQRfBHLnLMQ87vOgRn60l19z3ezGoy37%2FcZMTTuv1wzc6rZp84wTXX%2FtKl7htSCZYMAIBjDilzAywHmIIzvRCLDA6O4P5fNq0za29HoY0xxQvtx4h9q5hMXI3ygHaGyKE%2BuHH2dC9MRC6Itx2ej2i%2B8SWHoaKYYp9aAv4FPPpOGpR%2Fx%2FF2wtkrMjhxyF7Lh2JIBFh%2FGr%2BJA1SgvOhBeOWJ3ffzfw0zdTE0tvNJb0k2khBbPBYDCl75%2FABjqkAbVQk4UW6HN%2BjuVAGeGNXruJDBbgsd0O44mEW3MDRfBdzO%2F1HRFxxOR1k8F6Z8aeeKO0YGAX3shlUeyQ3eKJKAkZne4kjMC8O821L60aEf%2FhQhcahbtRrx%2BVeDx81BZVH08ixib4EA1L6NBJPjJ938fVytuIYVfee%2Bza9J6YOwQXOOYR6S2gpqzNnOEsdfHh2Q2amY%2FY%2ByvpNMcwRzz9j1iLabxX&X-Amz-Signature=72fdffa41591cc93bc93a6f7ca9646f3cffd936316d3f0a1a0226638052d3cab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNE74OTD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDCEqZIL0JHE%2F385bqzZtPOWeVLaVCqkAa0y%2BnWtvJWiQIhAKGDGUuC4kk%2Bw9Ux%2BkYZpV8mvmtNptoD8MTvj%2BJtbKYAKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSXdIwbMc2YEGhV84q3AOpBB79VygXqcJopNmW89bgP4%2FU7v2BSzW%2FrpQeAkG7nTrGqFM0WGT3JUBYi8xVv0%2BkHLmM2eh42C8MErAd%2FMbHtO3j9W49kW7TaJ4CPeAniQbWRgjXpw8cBvQU5ugqn3VIsUi%2BcrVPcUS%2FcYuzZ5CU4wBDHTr20JZh6kqhuCiwAGE0BbF0B0GpTAlMgl72Iqgon%2Ff9zMdc5NDheplfe9pzBwaj0RjNjXKgCo0YBav2fvotVLwytSu45bFBMcTknh2qxP8eyfSrlbgo9QLK0a3hqwVpdIAmd6bGWKvJCiPc1%2BdOtuBHIdW%2FL1yc7qMx%2BnANxFXTCHZnCFMxjin46Fj3Sp0xOiBzpT9Xy0jyeqc0ZOAi6B9awWUaPXZ3%2Fc3gZ%2Ffe5dH2i%2B9O6T%2FHMmbWOoFgUu%2FaoEMb5aDGpKe7R2z9rfP%2BbK%2B92AQcCYX9h%2BIkLeDpIY3sN%2FaoReV8M0wAD9lz%2B%2F1KP69CGiOFz%2BCdrXb5hbf6FCJKKUyKgnRTwQh5kByEx7aBQE4c59REnqrb5ExnNGwNyexABUDBpxprqkRqjAFdLKLruh%2FvX0fRcbonaIJRa%2Fnmbt1SzRgIWpX%2BJLL37%2Bdgqgb5hEtfI%2BEq5DQ8j%2Bc2X3SRzKPFxU6mSDDiiaDABjqkAezDvvveo9SAnpRP7OIO2uVh1U7OEFp0ATz%2FR0RK4Fn0ej9%2Bk0uNOSCRpgrtkgKVHqc9WGPYfvBWSXkGmamy6H0fFK9xTCKgmW8wCecyj1c8g7oH0qaXH%2BSPeBAmdJLoVnE6lorVGYTgYm2Iqn09awufls2oxfB1yybqSjJUWcDDGBuWszNjCHVVd%2Bfai%2BzqfjcWofwTY7MIPGiwdSqul6TpxJSQ&X-Amz-Signature=b0e89b9879f315a250ec8bf9580a91a9aac4086fcde0ab71348b7ef001821897&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQSXUS3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC8ZU74pRF9jOWjRW7sPJ8hGMpP7IinZLh8jl40maCFsQIhAIbim6b%2B520nK8NYvQyUV8M8q1khpMdHU4MkRoc1CrLkKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiM3kGRqnS%2FLZpaCcq3AOUAujnCyzwLP5gcUJWYWSPQ6aFXKJj6vtcxiOHTgzcP%2BWngSBMEz6u%2FQkvw7UQs3Qgx3P6%2Bxc%2F2ZrUsycbZQLi%2BYX8rCtdrbQeUFsLc56kQDM8Jvr5vr21OO5BtqlPCDb5mn3LtIpe1pR35ut%2Bzwaa0BsbJR5g3kh4bp2NPWgq8ptVF1XQDoQ8WioPQ4aVOEgpOOrIz3hn%2F%2B95wwaFEEAgZSr1PXZ5grvdxkaGJOZvjbef2XSlw6ojjrKDOzjp7vFMbyd2G7eVukmLZxgjaivQEqi1n%2F1qJ72bAuUhwF4vI3YWZj8EIoNFZ6x8uXuxekOTRZcZo%2FKt%2Bz%2BbcMn16BqFWklcoQEWtMDym29C9ujFw4%2B%2B%2B9N%2FBNQnU92sJ9yuO9DY9wz6Pu6ZHShIqjxcf%2F1Lp47Z3R2J3yjOMzG3bF7ITAyIwRqXveS3m247kk6asaZdMlBePL4I%2BQhgda6bPukQu19kGjUFJg8GbeCJ%2BIzkFj5vyZbPgNpUae1KJlUPuWB7zLEQJcQL2jRPAl4tDoohJgZkdWgclXYQT2NRFS8tfb0vwrK3vZY5PJjvCcDQcANHLT9toj9fWEzLxCV0rHdvQ5IqJLsGx6Wc56dWAxDaGztjPgI%2BBX%2BzuSuJdzCp75%2FABjqkAYB7D00YgzDfzlo4fh%2FS8AJCtdCQvearJ%2B5AYULGauC2MM1v8plaMl1KoLhsKrwIn%2FtMi3RgdMilB%2F44T1bCL7ODF%2BODiltsPOqD%2Fj%2FpZJJT8nqlbuowJz%2FpLbUhYvgpUMXlIFF4rBG6%2Bn0dQlB4fImnSrqWsof6xe4Z8DYWC6%2BtQIHXw4giVvRJtix6sBa90%2FMBCkayONPSvl102cUbWh%2BbOHEz&X-Amz-Signature=fd21aef85db1b72d5e762c007db92ca92ee5d9db061f580012d2078e6d47c875&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AAXGMGE%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC0UHtubd2dnd8y%2F%2Bue9jxxMpvz6Hm0ffZ9MJLboh8glwIhALR%2BPwvENeycyRx0m3Ag%2FIVCGKmnY4cSHs7ounXv0ZHrKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCA0wrj6uYKyzkoEUq3APWPA1I3mhqyin4YtE1OrPARoud7JJ82z74wvH7k9pzEyo2DQCRUBvLq26DZ6kxO3w%2F3%2Fu1uT%2FondZwEHs0p6sTRKN3B7Ms%2F7eP4u0NjP1FHGFSvpd%2FSvJPaj0xTsQz0fhUt4swEfUfUY%2BBbxpEyg%2BGg8ElFgmPO82Jo5ByCdtJRmbk4EvfXBV7iwEAsUqa4AdvR%2B5J0K5winpq8ChcnbSSnpXJ4NhxidQUKb%2FV4e0jOrFHjRXJ%2Fb4t%2BWHJOntNH3mH3hWLkUMZ9s5%2FsLNmsQZFGoJVDVP4eoOntxkpjM65yFo6iXxUTcvrpa559QpWh1934VtY8OPzvVoINIYwAh8gIBo7Niye7SU4a0aKXJXUryKa0xhyZ68Tf6267lW4ywLw05aNQssPIQRfBHLnLMQ87vOgRn60l19z3ezGoy37%2FcZMTTuv1wzc6rZp84wTXX%2FtKl7htSCZYMAIBjDilzAywHmIIzvRCLDA6O4P5fNq0za29HoY0xxQvtx4h9q5hMXI3ygHaGyKE%2BuHH2dC9MRC6Itx2ej2i%2B8SWHoaKYYp9aAv4FPPpOGpR%2Fx%2FF2wtkrMjhxyF7Lh2JIBFh%2FGr%2BJA1SgvOhBeOWJ3ffzfw0zdTE0tvNJb0k2khBbPBYDCl75%2FABjqkAbVQk4UW6HN%2BjuVAGeGNXruJDBbgsd0O44mEW3MDRfBdzO%2F1HRFxxOR1k8F6Z8aeeKO0YGAX3shlUeyQ3eKJKAkZne4kjMC8O821L60aEf%2FhQhcahbtRrx%2BVeDx81BZVH08ixib4EA1L6NBJPjJ938fVytuIYVfee%2Bza9J6YOwQXOOYR6S2gpqzNnOEsdfHh2Q2amY%2FY%2ByvpNMcwRzz9j1iLabxX&X-Amz-Signature=43234c0c25d0d1e4a79ecafac1bc2a8c551a986bcaacca7912d15d8c28ca0d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
