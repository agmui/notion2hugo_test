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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4UZ5RY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCP0Zi8BDX%2FjR564Ne%2Fe5hfsfZnAhyvnWw5j%2BrQgE9rIwIga%2Bjg4di1KaGsZI8Lf1qM0ymu5np517LKG7XuXs1CI8EqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4a913NGL97MXBKqyrcA%2F0gYbifa7lGKRRSvfwcPnMpIMpSHv0nQ%2FLyWd2qsDNYeRZy6zoJZHKDn3JYkhxgkdabq20IC9voxHgY5UnprGQtuqzN4mQBCMROAIlUDdoyXx1Ks9t8zQzwwETLtJu5u5bYrPH9LX6R1HBqukqWE3qS8kN82rQKap6Spr%2FNinBXcZcH6mJdGjQsM5F1mOl7Arv3DB9mCMf9F5sKrxkD7H0TNNeeS4J8JwgFQOQdQHt61EW67FIk7en8VKL1CP7oXQvG%2FA5ZruMIGOaSqiV2SyAJ5%2FaoVABqaNj0J3bxpSKXknWhjDDmyQw82%2Bhr0mI6HPLkIq5VCribnj7Y%2BfvTCDojNxsCy5F7yC73eWvWjM55momVKipwvuntZM%2BKQsFH5IsuLZXf18vTCQYLD5NU%2F2jX%2FgFqTEBUj%2Ffq1s2OIbDE1izvrULyKewZjGlOX6yov%2FVc0SiyNTCFNhGWU2UDDL9I9wjvTOOobafRBJBsVM%2F1%2BQdvgYFXc3Gnto%2F9Ti2swakmkuan8iDHldtJVH5ymSR%2FqvjgPA8Z1E1FkkQwio7xA5%2FWgZW6irmyJi7okngO0Odd%2BiUafInktw9j4fTgqv9%2FR2svuSznS3t9r1lP6XAfbbYb5yAS0Ix9HAuAML6cxb4GOqUBbruXzSyDyEEiLjUn2R9uT5kTAIw9IdAGWw7iPrsJ8pJLmDVZDhR5tZYqm9e7NS3T%2B5fCw99hZTtaLxPAzkonsPpIq89QyHQorA2UUzZdarcNV3npVbivZDd6HxVu0GOWqZ1Y%2FXc19AoHOiaASKlb572dg%2F8Xg59grpB9M8nYOiSgb6ec%2B6A2Q9KxAyPJ%2FA38sycTeSBBrgQVE1R1P9bIRxdlggTP&X-Amz-Signature=de6aa14f4300cfa035022e4edee9595ea16b13e9fed7b1a2dd2f77c2aa9b252e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4UZ5RY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCP0Zi8BDX%2FjR564Ne%2Fe5hfsfZnAhyvnWw5j%2BrQgE9rIwIga%2Bjg4di1KaGsZI8Lf1qM0ymu5np517LKG7XuXs1CI8EqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4a913NGL97MXBKqyrcA%2F0gYbifa7lGKRRSvfwcPnMpIMpSHv0nQ%2FLyWd2qsDNYeRZy6zoJZHKDn3JYkhxgkdabq20IC9voxHgY5UnprGQtuqzN4mQBCMROAIlUDdoyXx1Ks9t8zQzwwETLtJu5u5bYrPH9LX6R1HBqukqWE3qS8kN82rQKap6Spr%2FNinBXcZcH6mJdGjQsM5F1mOl7Arv3DB9mCMf9F5sKrxkD7H0TNNeeS4J8JwgFQOQdQHt61EW67FIk7en8VKL1CP7oXQvG%2FA5ZruMIGOaSqiV2SyAJ5%2FaoVABqaNj0J3bxpSKXknWhjDDmyQw82%2Bhr0mI6HPLkIq5VCribnj7Y%2BfvTCDojNxsCy5F7yC73eWvWjM55momVKipwvuntZM%2BKQsFH5IsuLZXf18vTCQYLD5NU%2F2jX%2FgFqTEBUj%2Ffq1s2OIbDE1izvrULyKewZjGlOX6yov%2FVc0SiyNTCFNhGWU2UDDL9I9wjvTOOobafRBJBsVM%2F1%2BQdvgYFXc3Gnto%2F9Ti2swakmkuan8iDHldtJVH5ymSR%2FqvjgPA8Z1E1FkkQwio7xA5%2FWgZW6irmyJi7okngO0Odd%2BiUafInktw9j4fTgqv9%2FR2svuSznS3t9r1lP6XAfbbYb5yAS0Ix9HAuAML6cxb4GOqUBbruXzSyDyEEiLjUn2R9uT5kTAIw9IdAGWw7iPrsJ8pJLmDVZDhR5tZYqm9e7NS3T%2B5fCw99hZTtaLxPAzkonsPpIq89QyHQorA2UUzZdarcNV3npVbivZDd6HxVu0GOWqZ1Y%2FXc19AoHOiaASKlb572dg%2F8Xg59grpB9M8nYOiSgb6ec%2B6A2Q9KxAyPJ%2FA38sycTeSBBrgQVE1R1P9bIRxdlggTP&X-Amz-Signature=749ee4b248890c6ecff7501ab7d4952dee4b550d91c86acdbb4b426e4af3ac46&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7ZIVVD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCcMEthfpRZTPCa8RD7%2FtfB8JP8z3Dc31xqEl64q7q2wwIhAIvZD8xj1XlWjm8Orqo%2BumYex64XY8z9Yo85AWOs9hiAKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlbFqS1cfZOin%2Flh4q3APBNrrcZ%2FM9%2BNszc4PYleH%2BZoL9zk1R4Xz6dTW610lSBh%2FLKwD0tg0rGEDHXprocKazj2Z9Qzpm8AdzG8qEuOIu56%2BaP0HrkD3jvtQXer0uVNZrTVso1GlQAj2V2EQ4o21S0bzjmUcdungOqIKLj5NZZRmmdET7kEJljBVzHVeI1TuZSRn59eotcLSi3esCKN2o72GaA%2BiIm3qKQeCTtEOM1EAsUhTYVtdEISOAd5jHNKc1H9WqnYfaKGqt5QggxMSLnQJRDJJm82K%2B4al1AQsITcR7Vw2ipF2%2BAc7HNCRj8FwTMZt6X1vhR2V1V%2BdFZC2TJljP%2FGLALcfkkq%2FgAAi52GILjZIOxY0woOgG65O%2FmHu%2BjZTQtltdXGMFulF2og2hBShQAB95OCqPFWH2Zw4pp%2BPQsdBM9zQksHSF9%2BWqDe2QUAb1cfXkVUeiafPXknz5%2BXn6jJuM6v%2Fm4UlRhrsT%2FqBqrJbgyaZ8dHHROVGFSj2uXJpID%2FEGjuD%2B7TR2NqIQAo%2B2XD5nxzN4DQjs8gq00JRYxzw6vQ0IR%2FNMq7QjvtIJ4WkusaJAfnOzJENnhVvX8fKvL%2FF6h011vIf3Xo0biTHRn2g1A2TgSslJk1ehNKHXoV2zWo1VZehPoDC%2B%2B8S%2BBjqkAYGgxr3X8RSetweoVz8s5%2FhLlTcVxX6Z51WgsJOJu5qTIp2qR%2BW2MO8VbnoNcRNUNV50VnqfNiE2LzWlFRoqcgQHncz0quXRMGRhzi7oWf92aTKrQdtJR8Jt8%2BmftdSuFzIIZADjcaKkGO2%2Fm2nWnkrueSBC2Inl%2BE5IO4%2FsN5guawGwKL3PNg%2Fu%2BFcc3pUV9i978kXs59eKYSEzTHdBgcRUydIq&X-Amz-Signature=6abf9ffde2bb3f04b4e210475bd03b98cf1841e487a75b597b6c07854fb2e7d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABUDRNI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDlw2h29DIlVQ1VQGkpZ4EjsPOReihFadLPTikwFPrK5AIgM%2F8U0Vm240SS%2B6vCrjRfCk6rDyGg3JNFiHpcOXfUnyoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzUQs%2BVUZx8lfDC1yrcA01%2BEZef6sKA5BvgusdTho8CZiQARgKkvprloDaGCObdsVrO33xReF7AGkyLBoVqxJVkKYhGb92KlMDj5MBKgToeKXOJrVPKND%2BL5%2FmWvOcXk1b0clw6RtWLjE0C9DKIQiYhipuMHrAc7LczwfDCDhVZ8W3bn8FvIvanRjURQeAqNnCBAnQs51PR%2FXLyiK%2FTm5xdrLuZE8g95kxRETmqpEsLKn%2FLLmIuziVO0HZxm9EkoGOuxGKNni0YzBPTEVgshGKeHQLjh8YICcWfJnpe191JXjo0LO0be6NfAUI8NDfMPTW2udyd8peb%2BoZlxXKIozUs4Bedtmn3M5pGg6MYS2SsHglWb8nUh2bUR8K4zjydqLFJoam%2BrajTZGBw0hdPPkLImjuVP7taBQpu8KMMbehmmBRwlGoNEWMw7QQot1nyhGb48m%2BwaJi9e2SfKaYnRpIU%2FGd49tjl0qROg4Kzctsacxsa0EqhUGPCtFl6QFN5M9Tlpr4eTB9%2Bg9W%2F5BDQHej73afgFgW8XhEnUPOuKRuPV4wQHG3IuQfVAAZ1VYFNpf5MyYLgvJxdcfqYYXc%2BQl7LIYb8d1jRtH386mWje7cYUrh3t%2BwLHkv9cwCzpNIPRwy0ROotUty8DF2HMKubxb4GOqUB%2F7kpGYgNkDdrg2dB8GYImlwkZKjVdgo74lFrw40LjlF2J6lg%2Fp%2FSSfbqm71quIAj9s3cebTSGyklz98%2FV00hvfx1QqVFDX2TOJgYHUhCIg%2FpzH0%2BAeed0i3L%2BlmSwXEsrzbNosVrRUiN8KyTlIbbTsK3qps%2FsGYNaGonfRTI96h7YCHYjWaE%2B1jI1rWYSYoa%2FpRLPeQi927dkBHt2JXh%2BmOX9%2Bfe&X-Amz-Signature=5a62f594a010693a67c2a51b41524cda5e804a2b4974de523b08faa3c1ecab19&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4UZ5RY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCP0Zi8BDX%2FjR564Ne%2Fe5hfsfZnAhyvnWw5j%2BrQgE9rIwIga%2Bjg4di1KaGsZI8Lf1qM0ymu5np517LKG7XuXs1CI8EqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4a913NGL97MXBKqyrcA%2F0gYbifa7lGKRRSvfwcPnMpIMpSHv0nQ%2FLyWd2qsDNYeRZy6zoJZHKDn3JYkhxgkdabq20IC9voxHgY5UnprGQtuqzN4mQBCMROAIlUDdoyXx1Ks9t8zQzwwETLtJu5u5bYrPH9LX6R1HBqukqWE3qS8kN82rQKap6Spr%2FNinBXcZcH6mJdGjQsM5F1mOl7Arv3DB9mCMf9F5sKrxkD7H0TNNeeS4J8JwgFQOQdQHt61EW67FIk7en8VKL1CP7oXQvG%2FA5ZruMIGOaSqiV2SyAJ5%2FaoVABqaNj0J3bxpSKXknWhjDDmyQw82%2Bhr0mI6HPLkIq5VCribnj7Y%2BfvTCDojNxsCy5F7yC73eWvWjM55momVKipwvuntZM%2BKQsFH5IsuLZXf18vTCQYLD5NU%2F2jX%2FgFqTEBUj%2Ffq1s2OIbDE1izvrULyKewZjGlOX6yov%2FVc0SiyNTCFNhGWU2UDDL9I9wjvTOOobafRBJBsVM%2F1%2BQdvgYFXc3Gnto%2F9Ti2swakmkuan8iDHldtJVH5ymSR%2FqvjgPA8Z1E1FkkQwio7xA5%2FWgZW6irmyJi7okngO0Odd%2BiUafInktw9j4fTgqv9%2FR2svuSznS3t9r1lP6XAfbbYb5yAS0Ix9HAuAML6cxb4GOqUBbruXzSyDyEEiLjUn2R9uT5kTAIw9IdAGWw7iPrsJ8pJLmDVZDhR5tZYqm9e7NS3T%2B5fCw99hZTtaLxPAzkonsPpIq89QyHQorA2UUzZdarcNV3npVbivZDd6HxVu0GOWqZ1Y%2FXc19AoHOiaASKlb572dg%2F8Xg59grpB9M8nYOiSgb6ec%2B6A2Q9KxAyPJ%2FA38sycTeSBBrgQVE1R1P9bIRxdlggTP&X-Amz-Signature=7715e6e9e006ec5d2acd7ab1471b7183377eaf6835eb43ebc1e9339a86dbc866&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
