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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG6VRTBA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4CLzFNGM7YEYk9wRG8Yv6Jgezpeswk%2FXbOIH2%2Bewu6gIhAKHjHjQM5fv8tdr6cJ85s1wsWajy4AHJvw%2FKHgbXOtTxKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLLHH%2B93%2BdLIPFUYQq3AP5sguYGw72PJefKzfekZ32K95xZcFEaSi4PFzU5%2FJdk%2BBfD8JT73e3EQrNBC19A56aMCRGTEUiXdyGy0z7pOUD8iQQ%2BCI1%2B4pTelkd54%2B5iQoafEno16hauUBUA%2FvIWdHxY5ZMh8Vne%2BwodWxxX3dLfL3SpSSQFiVMiE0FTLsVvGZFuKwEOg25Z%2FPs1OZtNNcHyup%2FsyfJyVAk3cRXsggxgAMSFZ5SqS9EkcufhSKwFAMpLvgYfvihzMZyo5hoCjzG3rKF3k5ivlYp5RQkXrMepvomiWEq9AFD6a0Ha1yhNWJGHkxNDviQUfMmz27s1J7LpcDCgra40gLkmDTpayIbERBIbjZVS%2BdELYdfwqDB1EfVFwd5waijMxdTHp8%2Bdd1pkI5LdfH8Jf%2BmT9%2BKhJaBtod8DW2U5LquYDWXxGq5RCXpB5dUEwTLPCXnEmSkjwK8tgBO3%2FSZbuzT4aWgSpA6AIqFfk1qAbkyibmGZiCKdt%2BUavgtNgovyaftI6m%2BSA8Iw9zs2oi34669HadKdoEnufEDLQLhnuPFNGUZhzNhjyotCj8rChJR2AH13A9Eav0JpYnGw7WwtWzjBlcjC%2BGHVrnS3Ayjxc%2FI3zLBURlJezIvwEnGwIQNfKPVNTCLh5XCBjqkARlCbb%2BgaknDBUxAzYKGQXskKV6G5hkJ4kxCUk6SEiRMHSJoWf2twLw77JOFpqBYXkQEYdiKaQ0M8JQdvuJEqJqbCZk17c4jE2wIxE%2FjEXonCl%2BZ7jeFBFjhbgCULICFPoq1k5e0ENuC3rEChF3GP8t%2FMYQLdNByiiUfGM0TEWht4HDbp0r2ucBCyYeOmGxwyma78LJMiikMh0gfHhFKceU93VL2&X-Amz-Signature=a0b103e748a6cd816c89c9deb2087203763b36a3dd24bdc9b976b49112684789&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG6VRTBA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4CLzFNGM7YEYk9wRG8Yv6Jgezpeswk%2FXbOIH2%2Bewu6gIhAKHjHjQM5fv8tdr6cJ85s1wsWajy4AHJvw%2FKHgbXOtTxKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLLHH%2B93%2BdLIPFUYQq3AP5sguYGw72PJefKzfekZ32K95xZcFEaSi4PFzU5%2FJdk%2BBfD8JT73e3EQrNBC19A56aMCRGTEUiXdyGy0z7pOUD8iQQ%2BCI1%2B4pTelkd54%2B5iQoafEno16hauUBUA%2FvIWdHxY5ZMh8Vne%2BwodWxxX3dLfL3SpSSQFiVMiE0FTLsVvGZFuKwEOg25Z%2FPs1OZtNNcHyup%2FsyfJyVAk3cRXsggxgAMSFZ5SqS9EkcufhSKwFAMpLvgYfvihzMZyo5hoCjzG3rKF3k5ivlYp5RQkXrMepvomiWEq9AFD6a0Ha1yhNWJGHkxNDviQUfMmz27s1J7LpcDCgra40gLkmDTpayIbERBIbjZVS%2BdELYdfwqDB1EfVFwd5waijMxdTHp8%2Bdd1pkI5LdfH8Jf%2BmT9%2BKhJaBtod8DW2U5LquYDWXxGq5RCXpB5dUEwTLPCXnEmSkjwK8tgBO3%2FSZbuzT4aWgSpA6AIqFfk1qAbkyibmGZiCKdt%2BUavgtNgovyaftI6m%2BSA8Iw9zs2oi34669HadKdoEnufEDLQLhnuPFNGUZhzNhjyotCj8rChJR2AH13A9Eav0JpYnGw7WwtWzjBlcjC%2BGHVrnS3Ayjxc%2FI3zLBURlJezIvwEnGwIQNfKPVNTCLh5XCBjqkARlCbb%2BgaknDBUxAzYKGQXskKV6G5hkJ4kxCUk6SEiRMHSJoWf2twLw77JOFpqBYXkQEYdiKaQ0M8JQdvuJEqJqbCZk17c4jE2wIxE%2FjEXonCl%2BZ7jeFBFjhbgCULICFPoq1k5e0ENuC3rEChF3GP8t%2FMYQLdNByiiUfGM0TEWht4HDbp0r2ucBCyYeOmGxwyma78LJMiikMh0gfHhFKceU93VL2&X-Amz-Signature=94d37780527e898c95c11421fdea5398e620bf5b65f75ec50a30ce940510974d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG6VRTBA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4CLzFNGM7YEYk9wRG8Yv6Jgezpeswk%2FXbOIH2%2Bewu6gIhAKHjHjQM5fv8tdr6cJ85s1wsWajy4AHJvw%2FKHgbXOtTxKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLLHH%2B93%2BdLIPFUYQq3AP5sguYGw72PJefKzfekZ32K95xZcFEaSi4PFzU5%2FJdk%2BBfD8JT73e3EQrNBC19A56aMCRGTEUiXdyGy0z7pOUD8iQQ%2BCI1%2B4pTelkd54%2B5iQoafEno16hauUBUA%2FvIWdHxY5ZMh8Vne%2BwodWxxX3dLfL3SpSSQFiVMiE0FTLsVvGZFuKwEOg25Z%2FPs1OZtNNcHyup%2FsyfJyVAk3cRXsggxgAMSFZ5SqS9EkcufhSKwFAMpLvgYfvihzMZyo5hoCjzG3rKF3k5ivlYp5RQkXrMepvomiWEq9AFD6a0Ha1yhNWJGHkxNDviQUfMmz27s1J7LpcDCgra40gLkmDTpayIbERBIbjZVS%2BdELYdfwqDB1EfVFwd5waijMxdTHp8%2Bdd1pkI5LdfH8Jf%2BmT9%2BKhJaBtod8DW2U5LquYDWXxGq5RCXpB5dUEwTLPCXnEmSkjwK8tgBO3%2FSZbuzT4aWgSpA6AIqFfk1qAbkyibmGZiCKdt%2BUavgtNgovyaftI6m%2BSA8Iw9zs2oi34669HadKdoEnufEDLQLhnuPFNGUZhzNhjyotCj8rChJR2AH13A9Eav0JpYnGw7WwtWzjBlcjC%2BGHVrnS3Ayjxc%2FI3zLBURlJezIvwEnGwIQNfKPVNTCLh5XCBjqkARlCbb%2BgaknDBUxAzYKGQXskKV6G5hkJ4kxCUk6SEiRMHSJoWf2twLw77JOFpqBYXkQEYdiKaQ0M8JQdvuJEqJqbCZk17c4jE2wIxE%2FjEXonCl%2BZ7jeFBFjhbgCULICFPoq1k5e0ENuC3rEChF3GP8t%2FMYQLdNByiiUfGM0TEWht4HDbp0r2ucBCyYeOmGxwyma78LJMiikMh0gfHhFKceU93VL2&X-Amz-Signature=60da4d29f809fb060e1c951e8f21d0f24d031b2a08c524d7124b082660aa5b37&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY532O2F%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD8V4%2BAe4IT3BnQJZF%2BaOBsBYz4fzzJWqubsHJu3LY8QIgJSbv9WmSHCmQmW%2FNP%2FrApU%2Beh%2BveJduKyQeJeu5AuyYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3Ado1Es2STzuBvJCrcA%2B3Z7X5%2BOmcZ8NKgh4rPU1HeIUQz3nDDvlRBsVUcEp4BOBdFyvXeckqyuMe0rluN%2FSijU7gZWaxw1LlDol0SuzlmQ%2B5XnaF33kDRCI48xhlaXLjQpWsAdH%2BkaH3%2Fy6H3%2BkpWqUYWyI6r%2F7KydeZAdhxWb9lX8ZSC8Zr9ERA0VtETzXTZY4LylPyHAuVAzg9r0EJ1tOu8VWpgxWssz%2BedSXRuSIro8dYJ23kbZ8br%2FCBG0yU11MDpRGtQqfLaTpsd%2FdWHc14VslmSH0Rfiq4ScSnqgWVjhba2OCXdvegyLqU%2BlwHEjj9xBiPd8%2FEOokqg8MHnLP1LbQIRkSTlAMbxH92YL0bJ8fP%2F25Lv4eo59ciSyEa3vAdOVMznb16d5RuaaSnmUCps4%2BmS64YzmavUKEwWa9S3zzo5Fq2IFTLN%2BvYYfq0xSSQNJDnPEp%2Fiqi9t2KYMOcHTe8THV6gQM3a6%2BMYwSZhj3lSkRhBbMCrHmJKqOI6bytCNghlNG02c12ZciIuqjZeAoQqh9MnSjRoNWnaAkXxeDQjkC6dR1mIq7l3DJrLlHFGsgMLcSq3KM%2BcHcvNCDwpZXtQvryxyVkRIuKst%2BIfd5k%2FVbMhS4RpKk9roqosCiLuRNd8dOZxsMOf3lMIGOqUBN1aieNzbVWW%2FF5d%2B0RkSiKVrQ5BnJo%2FAtFiaIRgGunWJszHvbBjp2XnJ4cVk%2BYJhCbbpZuKeuIFv0GE6Ac6rjwXhnV9lGcVqAQFJkk5yLJoCAUa8OU1HjLDH5xp78kfSQ2R9%2FAxnrG6uO0kHLgMM%2F0xIOW0moqhzMRE%2B30Lg4XPL%2F4n%2BSou2E%2BRku3Qjoa3j5LkkSTAmGtuzGXxJ1KSRFEuOhodz&X-Amz-Signature=be212aa90cea533b2157db46ea7286679a9fdde8e4d6e81eb845a50c372cbdbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWULC23P%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4ro67ILt5QFTOVKBout4cC5cvrKVziAJtAvuyy%2FabmwIhAL4TmrLKB9d2pivUP5KuMdPukw%2FlnYLCbToThioyGETXKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz93vchjT%2FQlqnbsB0q3AOIqzHgeVGaIyBXz%2FAaEKrq1F36rfjsdcppv%2B8bzl%2FKM9t6NhHDIHj6JM2GzDPMUdGqUSpgU5JR9th3DFPpIL8iwwhLzXi3C2ft4%2BLpEgdegEmKi%2BP40EgVADzSqrWO7lPVx3W4k4tiPxwhJ8yp2uk7U12ITYF%2Bk65sL4r%2BN2FHH1NYxEjDwT8P%2Bgf9pIdTK8be52Z10dsQopwOtXnA4%2F98wAh7V5jt6PMsTZLHzYGRZE4Vg7tzUEUUf65GgeaYAUWz3DBb2M2F2zbsDAq6FlNSPjsanwEJIju%2BREHDY3WjuyuCjbSqCCXjzoR1tM3r8XaBjbeEz1wlb8LlmJvkYIDsGB03ry8lV%2FxHSbsIvHu6d3Ohi40xSs5wUo80JaA1o8nV5ig6LOU4letNZtH63eN90AICBaHrzez%2FNvWHhQ5WX7LCoSg93mi6d1BLjegds1pzJHGoqND6U8wfaUd40u%2FzIlQ3ORDZBEhEyp6o50sAYCkcQAy4EB7PgkKiu9IuKv0pKD0MatmMD%2FDmb8%2FT3utdZdrSp6KREAO5PIoeM%2B1HhJqfzuqin%2BsYsw0qNE6riQwGuLP37Qiaa%2FyFDNE%2FiT3erpZsEMPHBLagQzNeiz921OzTN1RmaSVEoLmK6DC88pTCBjqkAYQYm9EkypajBRKuRG59WPS4v1aFSrG5%2Bq1HsJq3VlFpnsx0AfJfVwIp4udVWZhtRKxcmQnbF0LvSZQdHTl2QiWOcqVwtD9PUsdQDgqwF1dScTIMKRSMtZf7KOHbavJLUQg4WlaHstqHbp4Qg2RKEOT0us5dQBTklLUjI6WHC7O1FnEDK4hXWCsNpj%2F%2FiQ1nfIaOXJMLwe3oiNMFL6giqn49FIKe&X-Amz-Signature=57e325d98a333fcfd16acfa684034baf80fa377052a4c26fc99eb6798b863835&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG6VRTBA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4CLzFNGM7YEYk9wRG8Yv6Jgezpeswk%2FXbOIH2%2Bewu6gIhAKHjHjQM5fv8tdr6cJ85s1wsWajy4AHJvw%2FKHgbXOtTxKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLLHH%2B93%2BdLIPFUYQq3AP5sguYGw72PJefKzfekZ32K95xZcFEaSi4PFzU5%2FJdk%2BBfD8JT73e3EQrNBC19A56aMCRGTEUiXdyGy0z7pOUD8iQQ%2BCI1%2B4pTelkd54%2B5iQoafEno16hauUBUA%2FvIWdHxY5ZMh8Vne%2BwodWxxX3dLfL3SpSSQFiVMiE0FTLsVvGZFuKwEOg25Z%2FPs1OZtNNcHyup%2FsyfJyVAk3cRXsggxgAMSFZ5SqS9EkcufhSKwFAMpLvgYfvihzMZyo5hoCjzG3rKF3k5ivlYp5RQkXrMepvomiWEq9AFD6a0Ha1yhNWJGHkxNDviQUfMmz27s1J7LpcDCgra40gLkmDTpayIbERBIbjZVS%2BdELYdfwqDB1EfVFwd5waijMxdTHp8%2Bdd1pkI5LdfH8Jf%2BmT9%2BKhJaBtod8DW2U5LquYDWXxGq5RCXpB5dUEwTLPCXnEmSkjwK8tgBO3%2FSZbuzT4aWgSpA6AIqFfk1qAbkyibmGZiCKdt%2BUavgtNgovyaftI6m%2BSA8Iw9zs2oi34669HadKdoEnufEDLQLhnuPFNGUZhzNhjyotCj8rChJR2AH13A9Eav0JpYnGw7WwtWzjBlcjC%2BGHVrnS3Ayjxc%2FI3zLBURlJezIvwEnGwIQNfKPVNTCLh5XCBjqkARlCbb%2BgaknDBUxAzYKGQXskKV6G5hkJ4kxCUk6SEiRMHSJoWf2twLw77JOFpqBYXkQEYdiKaQ0M8JQdvuJEqJqbCZk17c4jE2wIxE%2FjEXonCl%2BZ7jeFBFjhbgCULICFPoq1k5e0ENuC3rEChF3GP8t%2FMYQLdNByiiUfGM0TEWht4HDbp0r2ucBCyYeOmGxwyma78LJMiikMh0gfHhFKceU93VL2&X-Amz-Signature=ddb8b72bc9624358bde4038450fc764ad947747fc64ce467f48416c40612e87b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
