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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSUCMJWS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEd6%2B09tR%2FvzU99hQw08JEHEUzbbjlQJlBaJBsCwMaJjAiBeHgN5CW%2FjB%2BM1%2B7cAkcbeXIu%2BsWEK0tzu%2BnBBaV0dKCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMr1UGerNOqYEqdDXcKtwDI3dIAkiGtJ8l2gn52Hz1B%2BAY3kqB9Uinl0sA%2BjbTxe3SMWiqlRGolpLxzlH48JHPTcAFXh7zendmwKcY%2BZsJtM6mvMsZea2O0cQKJCXCO2NqRrStXUWCdot5mcSw9HQI1szxrWOSfUEgpVAjDRdhd2v1uHnSdFX72VWOZcLNP9jXgzgami2Moon1mG5Z%2F4UPlQVwdFCGdGzM29nURPGDc40hcIokufnswcyVRKziSHUQpWT32eFBA4%2F5PesQ0jSwBW2QiLjucIlu%2FdvLRAh%2BciCTHW1ACD0WMbLRKRFalhSYrrfjX6Vs0gJUq2IgqkMbGsceZutk16Gr4zRQ%2B4bgxUIsjKc5QlWKzQhE5YNDqbD%2FPRXFGD7YO3b%2FiXrictRhNYyRF8YeMKvoGQUfBuMaJmOk%2BnpD5CJgn61vsBCmzS08KmD90QJZm54Dj0uPt7AFy4Pa7pFCP27P797vERm4QhqVi2Bj44ybI4SEctjOJs51mcswu8zXksRlyrO9I5MHkTNvRyqZs0yeX1ox8CAQKlQUFoI%2BB9ntnVhT3BeVIkBka8BUuHn%2Fcc3f5ORBOQfNjT%2FSZsCfHy0rekMW6uc%2FTA6LZNGrj9BArnsvjDdV97tzm2fMrK7twkdoTWww85XIwQY6pgF0FDUxgK2iVVEwKDiAsFvS2L%2BGk%2BAvmwp4pZdAnmOMDRnEPsVvQTSFRFu0h9wUB24cFjJXcYv4ka6KAU9qp%2Fkje%2B3IrD8tNa8WV3l6am9yPnHGZL1MiBNR1yCEfWGng4pjHyVuVsTL9lmy%2FW%2BsU9eSayj%2F45xSwdwnZaUMB95GcwwM2tErKyMxBVu5cGcZBM39P2GRm7hPNarOL3jOxiK3Ev%2BGIfhj&X-Amz-Signature=665c38b9dfc2e37ad8aaa526c2275dfd0baebef62926b9e7ea2264746b0e3927&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSUCMJWS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEd6%2B09tR%2FvzU99hQw08JEHEUzbbjlQJlBaJBsCwMaJjAiBeHgN5CW%2FjB%2BM1%2B7cAkcbeXIu%2BsWEK0tzu%2BnBBaV0dKCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMr1UGerNOqYEqdDXcKtwDI3dIAkiGtJ8l2gn52Hz1B%2BAY3kqB9Uinl0sA%2BjbTxe3SMWiqlRGolpLxzlH48JHPTcAFXh7zendmwKcY%2BZsJtM6mvMsZea2O0cQKJCXCO2NqRrStXUWCdot5mcSw9HQI1szxrWOSfUEgpVAjDRdhd2v1uHnSdFX72VWOZcLNP9jXgzgami2Moon1mG5Z%2F4UPlQVwdFCGdGzM29nURPGDc40hcIokufnswcyVRKziSHUQpWT32eFBA4%2F5PesQ0jSwBW2QiLjucIlu%2FdvLRAh%2BciCTHW1ACD0WMbLRKRFalhSYrrfjX6Vs0gJUq2IgqkMbGsceZutk16Gr4zRQ%2B4bgxUIsjKc5QlWKzQhE5YNDqbD%2FPRXFGD7YO3b%2FiXrictRhNYyRF8YeMKvoGQUfBuMaJmOk%2BnpD5CJgn61vsBCmzS08KmD90QJZm54Dj0uPt7AFy4Pa7pFCP27P797vERm4QhqVi2Bj44ybI4SEctjOJs51mcswu8zXksRlyrO9I5MHkTNvRyqZs0yeX1ox8CAQKlQUFoI%2BB9ntnVhT3BeVIkBka8BUuHn%2Fcc3f5ORBOQfNjT%2FSZsCfHy0rekMW6uc%2FTA6LZNGrj9BArnsvjDdV97tzm2fMrK7twkdoTWww85XIwQY6pgF0FDUxgK2iVVEwKDiAsFvS2L%2BGk%2BAvmwp4pZdAnmOMDRnEPsVvQTSFRFu0h9wUB24cFjJXcYv4ka6KAU9qp%2Fkje%2B3IrD8tNa8WV3l6am9yPnHGZL1MiBNR1yCEfWGng4pjHyVuVsTL9lmy%2FW%2BsU9eSayj%2F45xSwdwnZaUMB95GcwwM2tErKyMxBVu5cGcZBM39P2GRm7hPNarOL3jOxiK3Ev%2BGIfhj&X-Amz-Signature=878075a63458338e0869a9755c306bece0a06cf18149a51841a8df51fc31b6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSUCMJWS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEd6%2B09tR%2FvzU99hQw08JEHEUzbbjlQJlBaJBsCwMaJjAiBeHgN5CW%2FjB%2BM1%2B7cAkcbeXIu%2BsWEK0tzu%2BnBBaV0dKCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMr1UGerNOqYEqdDXcKtwDI3dIAkiGtJ8l2gn52Hz1B%2BAY3kqB9Uinl0sA%2BjbTxe3SMWiqlRGolpLxzlH48JHPTcAFXh7zendmwKcY%2BZsJtM6mvMsZea2O0cQKJCXCO2NqRrStXUWCdot5mcSw9HQI1szxrWOSfUEgpVAjDRdhd2v1uHnSdFX72VWOZcLNP9jXgzgami2Moon1mG5Z%2F4UPlQVwdFCGdGzM29nURPGDc40hcIokufnswcyVRKziSHUQpWT32eFBA4%2F5PesQ0jSwBW2QiLjucIlu%2FdvLRAh%2BciCTHW1ACD0WMbLRKRFalhSYrrfjX6Vs0gJUq2IgqkMbGsceZutk16Gr4zRQ%2B4bgxUIsjKc5QlWKzQhE5YNDqbD%2FPRXFGD7YO3b%2FiXrictRhNYyRF8YeMKvoGQUfBuMaJmOk%2BnpD5CJgn61vsBCmzS08KmD90QJZm54Dj0uPt7AFy4Pa7pFCP27P797vERm4QhqVi2Bj44ybI4SEctjOJs51mcswu8zXksRlyrO9I5MHkTNvRyqZs0yeX1ox8CAQKlQUFoI%2BB9ntnVhT3BeVIkBka8BUuHn%2Fcc3f5ORBOQfNjT%2FSZsCfHy0rekMW6uc%2FTA6LZNGrj9BArnsvjDdV97tzm2fMrK7twkdoTWww85XIwQY6pgF0FDUxgK2iVVEwKDiAsFvS2L%2BGk%2BAvmwp4pZdAnmOMDRnEPsVvQTSFRFu0h9wUB24cFjJXcYv4ka6KAU9qp%2Fkje%2B3IrD8tNa8WV3l6am9yPnHGZL1MiBNR1yCEfWGng4pjHyVuVsTL9lmy%2FW%2BsU9eSayj%2F45xSwdwnZaUMB95GcwwM2tErKyMxBVu5cGcZBM39P2GRm7hPNarOL3jOxiK3Ev%2BGIfhj&X-Amz-Signature=af0c6f4d05b9b060e35b183bb89943985861b152611738047d60374c568203f7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWROWCAF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCILsKOdWzuV5cBkhxcs4oeB7Y1AyGH%2BHiL0w0TjowYsgIgFGuofKq7v%2F0%2FgGjP8%2BkKf6pKdc9Dl6FSILFKhLmK0yUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGXyoQlzwCmsfZM6aircA%2FyM8hX7WWMUccOIF%2FUwFpzFvI9hiN8Vn%2FzKKvNvIpaFy%2F4d7PF4hfg%2FsuNeaYhvcWuJn2ya2ZXQJcHTsMui8nxmUlrzB8%2BrycI5LrAZVQS2n9Op7loYrReMgokUVTh%2FzX8W5rC2ha%2Bh%2FIKdZjBaBdKCpYoqMrB33hSeRmXLYmkuv%2BuFZ5JPo4aexj8%2FlQuCnZG3kxTQoJbOmyfDw%2FoopjcoEHh7QksGFJ26QLegA1Qdd3NP%2BH5BQacdG7jU6Ft5yolG7ShipIUBq7pVOuhd9f0XL6KLYhVPNENIrZW%2BtuKaxTQNuNYY5kaKIuJnrZNur1eJPthfDk59s4nhjmt4czPmEFBPjx%2F9mXzS20qWYJD7uwEjJJ%2FldLhc6ilaL4dzpjUmANcVZF%2FSXW3jS9%2FnrkSq2Wk76Rj41a4fJLeM0pdRklU%2BrUwxzv9%2FqtWI7Ehhol6wCdqYQMey4MWQje6XT6ZZOQsb1ozpBU9x8ZNrufpAfytyR9MVod7%2FYJDLhTq3fzeD5k%2Frl3X0SAtP2CXZuEZdE90KI9oyyi1b0BDgqpGN%2BoIG%2F6FJXoCLXLd5fNxPg6mCAW5u7O9%2FhnrMH1MJfwiUKs0hIVIXGgWi0cGd3DeV1wTC8GCv5U%2FCWWgzMIyWyMEGOqUBgo4l7rBRsmYAOErRTnl0P3Jnx%2FQpTTkjhgvYLAckxVeEohAht8ulfzgJQSixQTymb0T1%2FI9S%2FEtCWUlHbIuDoDt%2F3kthGvH04uxZjW%2BGo%2FR74OACW0clPlnTXRlpBdeVZC%2B1q5jqI7kvoCIUT%2FLVS146SwflnyJlbq%2BesYsBcDCnI%2BHlF%2Fzw%2FRvV0f2wTRjpxzAiGUtWD6NS%2BWEG81zioNJddG7a&X-Amz-Signature=a105b39e3a9ed03ec87bce3a9307dfc49cef1386f74d68cf67998cacfa3c2259&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGK5QX6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGygArRUFsJSAu9n2jAP2kPS3f%2BA5vVAQWv8rlOigOKcAiEA74mapAUU4feyCMybqBW9AKnQvdbpPOq1bnSMaE8Qnr0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE2l6tTopVEz4zYBdircA9TxxNz7boCd40u9sm7Bj2C%2BbNP5uQCpmWlW1DdxZ7j8weSW2DFySXrabTLT54RiPqfj01VjQipuVwJcefcNLavUzLubic8%2BfGO3FVYLhWjZq7KnSybHqeIJV1cJj3%2BDixnqJoBIBCeulYR8BHsBOEot3lV4fG7gyzGJIoyIVu2%2FtPUXIB7f3QuMrmrEaRjKZT3k1ahUtpK6TV5gG7hBwREp895BLyScObdsE%2BTr5hiQHTy529Xh06DiefuCzJW551P38jGVHYeCBvZKADFuxC4HMBimJ7KXtdjy2D7UYSf%2FgA4zruDgaS%2Fdc%2FLqdvu7OT0kWXRSTpJf9GbeLwsb5DUJ22eRuXrtqega5zrYHB7GsTuSd4zNv0HOTGOt3CJx6RVrX3IOYIjBeFM7NRIDAczK3fQIMUb5uMDRybukzqYfd6rFgSS9jKrj1jnhsF0Y%2B0O3LUABJ3CYU46fhggrB9UudLc1GClm6Kjue1NO0dYeo%2FEeFWOPYblMj6Mw0iuOEfoGvI6DDmxSV1RU3Byl%2FQQloy8VzHPdsx58MnKZDDA1M90nmXin0Aa5qWA0TSnsz9KWXW1LKoLd%2BsA8h9of3RPupmj54oiQiKCmDLgidvfCfBr5tN1oH6%2BObUYHMN2VyMEGOqUBhB5TNEmlsTyjH28izjQ17uMf3T5z1fXtHpXDalfIB5sCyk2RY5acq60Q8Clej39XWNuI4jV8LuU4kY%2BDq97SFwCXHBL3dw4mhD1Vuorc6JqEieCvq%2F36FKXQDb4uvNiLIRgegOag%2Bmsngo7zJLY0wCrPzMPSy%2FsHAFaIbhJHPH0UPKFDrrLFlcW8oV5%2Bk7%2F8qvC1OgcyNx4XPX%2FklrPODtSZZ8aH&X-Amz-Signature=38c7b144cba9df78612f9df1156fcd60ff2128bf24830e5f452e3c3fc7037490&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSUCMJWS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEd6%2B09tR%2FvzU99hQw08JEHEUzbbjlQJlBaJBsCwMaJjAiBeHgN5CW%2FjB%2BM1%2B7cAkcbeXIu%2BsWEK0tzu%2BnBBaV0dKCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMr1UGerNOqYEqdDXcKtwDI3dIAkiGtJ8l2gn52Hz1B%2BAY3kqB9Uinl0sA%2BjbTxe3SMWiqlRGolpLxzlH48JHPTcAFXh7zendmwKcY%2BZsJtM6mvMsZea2O0cQKJCXCO2NqRrStXUWCdot5mcSw9HQI1szxrWOSfUEgpVAjDRdhd2v1uHnSdFX72VWOZcLNP9jXgzgami2Moon1mG5Z%2F4UPlQVwdFCGdGzM29nURPGDc40hcIokufnswcyVRKziSHUQpWT32eFBA4%2F5PesQ0jSwBW2QiLjucIlu%2FdvLRAh%2BciCTHW1ACD0WMbLRKRFalhSYrrfjX6Vs0gJUq2IgqkMbGsceZutk16Gr4zRQ%2B4bgxUIsjKc5QlWKzQhE5YNDqbD%2FPRXFGD7YO3b%2FiXrictRhNYyRF8YeMKvoGQUfBuMaJmOk%2BnpD5CJgn61vsBCmzS08KmD90QJZm54Dj0uPt7AFy4Pa7pFCP27P797vERm4QhqVi2Bj44ybI4SEctjOJs51mcswu8zXksRlyrO9I5MHkTNvRyqZs0yeX1ox8CAQKlQUFoI%2BB9ntnVhT3BeVIkBka8BUuHn%2Fcc3f5ORBOQfNjT%2FSZsCfHy0rekMW6uc%2FTA6LZNGrj9BArnsvjDdV97tzm2fMrK7twkdoTWww85XIwQY6pgF0FDUxgK2iVVEwKDiAsFvS2L%2BGk%2BAvmwp4pZdAnmOMDRnEPsVvQTSFRFu0h9wUB24cFjJXcYv4ka6KAU9qp%2Fkje%2B3IrD8tNa8WV3l6am9yPnHGZL1MiBNR1yCEfWGng4pjHyVuVsTL9lmy%2FW%2BsU9eSayj%2F45xSwdwnZaUMB95GcwwM2tErKyMxBVu5cGcZBM39P2GRm7hPNarOL3jOxiK3Ev%2BGIfhj&X-Amz-Signature=6a2ebcea97adf52491c6083c1eeb4bcee9b87464d2a1e26e0b497076847011bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
