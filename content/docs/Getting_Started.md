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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7MKKN5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDblXxHzvJikKQab%2FGnrnPsGfM4%2B3XdT7SFpqtHZXubiAIgcYIKel5wENTnaXqzRBpPvM%2FOJ3U1YoDeth5frRjdi5gq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA25d%2FwgEocXC5harircAzG3gefrX6jgM3ZtBeR0hkxvuwwfsvzc0EAkLrODuWNn9pKibUwY7HJ7%2FXyjCKfZNBFkUjc25ycXMFzfLXfptIDo31QS%2B4cmcMtekQLAFHdE1Us2qryKvLja%2F73aatlvqB0c9qPG9BpJfy4KUnN64LMw3X02jNaEw9UIewkOo80ZplOgQu2JxQeH0aO1HUcvs7qunyrqHht0vKAmDfPdE1LKUhFClbDRQwUCBXnfJGsYAFampk4Z%2Bj7kiZtawKrRqAHyty%2FVb92UIIMMctMXzTfv9wxFPSrRCQS6WZZw9fMQpJBzYb331FsLULzTAqcBlPI5PVWD1uc8T6eAHLDq1DFp%2F2ZZcIEA5LTdlhGwXuezQKNzrhhrs32szOCO1e5%2B0MG13wyjFDoRH%2FxiGuhxHuTSUcRw%2FGxFsogLk6ByB5%2B3gWvpqHlLqE7aNT%2B%2BkU7TPWn8j2mNYqo0Yq6mQVPe%2F8sRU5AcoMbTKh2lJu1vMiNdCnba0UxBOdk4V0o6y4TeUsn7zZylXUx8M3xsUsbqNTT8931nOvDAT4sYyCX7deeyjhbdWqlfhL6FPZm3gSfBn4t1JdAV8j06kxA77yaNPNX%2BfNvTn1lTLKqHYC8KGSLv0w%2B9Hd5pDBbJyv8UMLuju8QGOqUBqYg25MayNdwTogPK%2Bm5Szs%2F%2Fk7SNEofOcs3e%2BcITFQ%2Fzc7bzoiE8dnSke%2BFdDwKiUoJI%2Bsag8NSmnU9omjvN7f%2Fr3y1Yhuo0Y8mAd%2F9k7OjIr36B8AWbXEKfluDZAe7fT71s%2BXVrp%2FSZihi4rKZ5PO93zsoZ0xICagkrFL5DvWYOG5%2ByhHA1AECY%2FBSjeCMpNUaXzcF37WJvyC246hj9j1P2U0wX&X-Amz-Signature=63ccd05b34398e7e4f39b61ff9910f406d6efb9ffbf318d5fcb062e3e0064686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7MKKN5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDblXxHzvJikKQab%2FGnrnPsGfM4%2B3XdT7SFpqtHZXubiAIgcYIKel5wENTnaXqzRBpPvM%2FOJ3U1YoDeth5frRjdi5gq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA25d%2FwgEocXC5harircAzG3gefrX6jgM3ZtBeR0hkxvuwwfsvzc0EAkLrODuWNn9pKibUwY7HJ7%2FXyjCKfZNBFkUjc25ycXMFzfLXfptIDo31QS%2B4cmcMtekQLAFHdE1Us2qryKvLja%2F73aatlvqB0c9qPG9BpJfy4KUnN64LMw3X02jNaEw9UIewkOo80ZplOgQu2JxQeH0aO1HUcvs7qunyrqHht0vKAmDfPdE1LKUhFClbDRQwUCBXnfJGsYAFampk4Z%2Bj7kiZtawKrRqAHyty%2FVb92UIIMMctMXzTfv9wxFPSrRCQS6WZZw9fMQpJBzYb331FsLULzTAqcBlPI5PVWD1uc8T6eAHLDq1DFp%2F2ZZcIEA5LTdlhGwXuezQKNzrhhrs32szOCO1e5%2B0MG13wyjFDoRH%2FxiGuhxHuTSUcRw%2FGxFsogLk6ByB5%2B3gWvpqHlLqE7aNT%2B%2BkU7TPWn8j2mNYqo0Yq6mQVPe%2F8sRU5AcoMbTKh2lJu1vMiNdCnba0UxBOdk4V0o6y4TeUsn7zZylXUx8M3xsUsbqNTT8931nOvDAT4sYyCX7deeyjhbdWqlfhL6FPZm3gSfBn4t1JdAV8j06kxA77yaNPNX%2BfNvTn1lTLKqHYC8KGSLv0w%2B9Hd5pDBbJyv8UMLuju8QGOqUBqYg25MayNdwTogPK%2Bm5Szs%2F%2Fk7SNEofOcs3e%2BcITFQ%2Fzc7bzoiE8dnSke%2BFdDwKiUoJI%2Bsag8NSmnU9omjvN7f%2Fr3y1Yhuo0Y8mAd%2F9k7OjIr36B8AWbXEKfluDZAe7fT71s%2BXVrp%2FSZihi4rKZ5PO93zsoZ0xICagkrFL5DvWYOG5%2ByhHA1AECY%2FBSjeCMpNUaXzcF37WJvyC246hj9j1P2U0wX&X-Amz-Signature=40be563330f4a1c5baf51d98d887fa1e122e3adbf715988513d86956bafbf292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7MKKN5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDblXxHzvJikKQab%2FGnrnPsGfM4%2B3XdT7SFpqtHZXubiAIgcYIKel5wENTnaXqzRBpPvM%2FOJ3U1YoDeth5frRjdi5gq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA25d%2FwgEocXC5harircAzG3gefrX6jgM3ZtBeR0hkxvuwwfsvzc0EAkLrODuWNn9pKibUwY7HJ7%2FXyjCKfZNBFkUjc25ycXMFzfLXfptIDo31QS%2B4cmcMtekQLAFHdE1Us2qryKvLja%2F73aatlvqB0c9qPG9BpJfy4KUnN64LMw3X02jNaEw9UIewkOo80ZplOgQu2JxQeH0aO1HUcvs7qunyrqHht0vKAmDfPdE1LKUhFClbDRQwUCBXnfJGsYAFampk4Z%2Bj7kiZtawKrRqAHyty%2FVb92UIIMMctMXzTfv9wxFPSrRCQS6WZZw9fMQpJBzYb331FsLULzTAqcBlPI5PVWD1uc8T6eAHLDq1DFp%2F2ZZcIEA5LTdlhGwXuezQKNzrhhrs32szOCO1e5%2B0MG13wyjFDoRH%2FxiGuhxHuTSUcRw%2FGxFsogLk6ByB5%2B3gWvpqHlLqE7aNT%2B%2BkU7TPWn8j2mNYqo0Yq6mQVPe%2F8sRU5AcoMbTKh2lJu1vMiNdCnba0UxBOdk4V0o6y4TeUsn7zZylXUx8M3xsUsbqNTT8931nOvDAT4sYyCX7deeyjhbdWqlfhL6FPZm3gSfBn4t1JdAV8j06kxA77yaNPNX%2BfNvTn1lTLKqHYC8KGSLv0w%2B9Hd5pDBbJyv8UMLuju8QGOqUBqYg25MayNdwTogPK%2Bm5Szs%2F%2Fk7SNEofOcs3e%2BcITFQ%2Fzc7bzoiE8dnSke%2BFdDwKiUoJI%2Bsag8NSmnU9omjvN7f%2Fr3y1Yhuo0Y8mAd%2F9k7OjIr36B8AWbXEKfluDZAe7fT71s%2BXVrp%2FSZihi4rKZ5PO93zsoZ0xICagkrFL5DvWYOG5%2ByhHA1AECY%2FBSjeCMpNUaXzcF37WJvyC246hj9j1P2U0wX&X-Amz-Signature=eac91d448bc426431c58e32017d45f9dd151a58abf65e32431385184c47ca363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPODOTPZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuyQPFhe0u6V68knZwDIogQChwdtgYLDzX%2FBS4M8lCxwIgL6IK8L6xQ7b3AQY00Tg2c0pTm38qdwZZOWewPxfNmWYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDLIWQVEu34HRDT0RzircA3Lf8nnkXVlKyk6%2Fgal43diXInP3JlSEgAPxJUawi453nIbpfwLRmSgZi71Ud6f3Axn7SBasdm7p2y5QDEmo%2Fbum5k05DALPvfP9FUEYFDypgMwaxs6DwUBVcC6Y69T108opLKjvA0GGsx9wboCru5TMv7JK9PbvorsV6KVC17OOAN6TeUopnXo7tR0ykovt4Dw8W8wt80pq2Lg0kNC8JbsOKUCS%2BUhz8sZD29Kg9g0YJpUwmgWawN%2Bhtw2rRY8RCJWg5BMibAt7L5VEFhBzkrMzH%2BCCvOklCrOremsOF8b0ei44zpmagc9HoAN2saVBkiIyQvTm307RoTapCUckVu%2BIQkXuPEjqSiBn83maF%2B4s9QKrMYPyjmPyJdZns6BF6zwphd%2FESJ1qbMcf%2B6KeaFndbj2koeuksSEbBPZlVkc%2FSpmcS5XIsB1cDE1nSvAe3y5hDmNG%2FKmEHB7nCSGXLQa5%2FLFz0a2lCqWASPeGEA8r%2FvvWxUo72cDdBmi5Mut0HNuFeX9gR%2BtyiD%2Bdv9LOfq5eAbUAXq1zQr%2BdyN%2FB9Nhv3XwxWhk021UdwMNuzMfwUZmQGSYIeIWS82UjA8ofq%2FUMamThQxw9cTI%2BEydqMZw0MNxNbfCwPJDIRUXOMNCCvMQGOqUB7rEg84pIXPWBASo%2BobaBtuExvGZqIv5yLc0wVx3vz6uBa5KoYJvRsrUFKvQElayMskz4kgqP5MP%2FS62o%2FgWBcn4KLsxE%2FH98ohy5jLBP%2FPorY4a6Gcxw62WsYUy%2BXjW%2F3yhJwZgFOXz5XuDdgpJaKDmTXARvwC8YnuWX8gHYXjQjFPuNzy%2FogZoPSIebs77GWzXwozUJ0J1ZY5bgo6Ibbw1fyAi1&X-Amz-Signature=34d1b6d86b412a30d69ebbd36b391ae71559b8280e1a1023b057fdb9af199b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4MWSZC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX76BOE2j4nLCtQKc074YgU%2BmK5k8RMOzLJldynj3t9QIgL%2BgKhfedhswmbIWombzgtsaahI7iO5JE%2BCgY8etr2swq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDODNTUFws66ruE7K8CrcAwubejfhqKEYxV16IIBfoWgAcL%2FOToN5SJN73Bcg8hEqZg%2BVvsuc%2BsqCk0Hl6QfYfKQcKrKwCWinGwFwq9n1XVIJY2IjDV9SmmrrQE786mRkKDwyVWHxqR47CSnfAKoDvP0r29JZrs4W8JCtl0n9qnSmpGasIFzhUq0oTixsGOShMHOZh5ooyaSzv%2Bp3M7mxkyddglYozMCB4uQuTUttc0leFyntGcLAvwcmIksRSvdyFNm%2BRG%2FNaVXFf5SU2V0PnnehVh61W0vxrXjSnyfk6bsPZvHdLuf5t1nzzRFZ1NaBCsh239P2DWoIQlKV%2FNPlYWETVahReoqMPhzFkohb27K869dNRXhIXdE6BWQumwCS%2FiQzyLgNnohEItqHpqqTo32vbDot%2FV9iV9oUwXQAYbfPf8j3W8BbEFVB6h%2FhF2F78GLr%2B7yzPBz%2FIG10%2BhdYGj%2FTwU%2FyPbayMXZFxUEYWtvSZIu955rdC%2BwFl7csJCtn95h7E3vcS3iHTB%2BSKYIyTmpLapDD39TYFjbZsZqTG3YMpxUaErnhEDAfhKyhqVxATqmxb9rwZbhvsUTiop7un1GJdlbZs065xIHZ%2FQvxPvTYF%2BXAtaiImRyS%2FngMDmcdfTQustPe4MMMvWnaMJGiu8QGOqUBlcNb7hCItfa9sHczwSRSRgZbP4rKTicycI1Oad95kT9bzeCsJUrTbowIhG2jRb28JKLzzqbf5grrOXDMhZiviBoVQsyum%2BOQ6YMkSm%2FhtuT8%2BTWTTt3yd6UYeV8BSriEfAZM7Pb4RFqu99u9ZWhmErMecVzjpB50%2FTN6l%2BOBn4u8WPViFAExd43S8fh80ezuYqQvag5aoLnD%2BvajUGlXO7eAJfqr&X-Amz-Signature=bcecf72116214f945d680fd58327bcf670fac4c113106d41f3a889b305b8d598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7MKKN5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDblXxHzvJikKQab%2FGnrnPsGfM4%2B3XdT7SFpqtHZXubiAIgcYIKel5wENTnaXqzRBpPvM%2FOJ3U1YoDeth5frRjdi5gq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA25d%2FwgEocXC5harircAzG3gefrX6jgM3ZtBeR0hkxvuwwfsvzc0EAkLrODuWNn9pKibUwY7HJ7%2FXyjCKfZNBFkUjc25ycXMFzfLXfptIDo31QS%2B4cmcMtekQLAFHdE1Us2qryKvLja%2F73aatlvqB0c9qPG9BpJfy4KUnN64LMw3X02jNaEw9UIewkOo80ZplOgQu2JxQeH0aO1HUcvs7qunyrqHht0vKAmDfPdE1LKUhFClbDRQwUCBXnfJGsYAFampk4Z%2Bj7kiZtawKrRqAHyty%2FVb92UIIMMctMXzTfv9wxFPSrRCQS6WZZw9fMQpJBzYb331FsLULzTAqcBlPI5PVWD1uc8T6eAHLDq1DFp%2F2ZZcIEA5LTdlhGwXuezQKNzrhhrs32szOCO1e5%2B0MG13wyjFDoRH%2FxiGuhxHuTSUcRw%2FGxFsogLk6ByB5%2B3gWvpqHlLqE7aNT%2B%2BkU7TPWn8j2mNYqo0Yq6mQVPe%2F8sRU5AcoMbTKh2lJu1vMiNdCnba0UxBOdk4V0o6y4TeUsn7zZylXUx8M3xsUsbqNTT8931nOvDAT4sYyCX7deeyjhbdWqlfhL6FPZm3gSfBn4t1JdAV8j06kxA77yaNPNX%2BfNvTn1lTLKqHYC8KGSLv0w%2B9Hd5pDBbJyv8UMLuju8QGOqUBqYg25MayNdwTogPK%2Bm5Szs%2F%2Fk7SNEofOcs3e%2BcITFQ%2Fzc7bzoiE8dnSke%2BFdDwKiUoJI%2Bsag8NSmnU9omjvN7f%2Fr3y1Yhuo0Y8mAd%2F9k7OjIr36B8AWbXEKfluDZAe7fT71s%2BXVrp%2FSZihi4rKZ5PO93zsoZ0xICagkrFL5DvWYOG5%2ByhHA1AECY%2FBSjeCMpNUaXzcF37WJvyC246hj9j1P2U0wX&X-Amz-Signature=f3497eb2b489def9ca3ea6afb3e8ecfa7e985679526d0d6c51767a79a7a22b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
