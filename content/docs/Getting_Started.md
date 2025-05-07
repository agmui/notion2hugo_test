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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5OB53MX%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqlvtRiN9XuVJFXDyWBPTBNEoBT6giKbS%2BGmQ%2F%2BiS%2BQIgc4Q1QUIWr5B3xGGyc0EqhwbDDuXI0gmYjsXSNhMtHk0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLdwCkznlJtJcJX0hyrcA76i8xzv3CbvwFoMyaHadQneIx4kAlSYlodJqM7Ym3%2BQ%2BZe80ES0IPjs5oExiycVuG6JTUwyRbnsbtIWyLE%2Bn9Q3hm7AjeujijxNkzvsiFi4ft53Ge4OowJl7ju%2F5KBtIackeDRpr2MbA4LwDHllgCF40aDgxsSxh%2B2JX0Ca%2FYpAkIzwAlYK9IFlFVZIEsffWVtvGsmqOejDoB%2BDApSVEi4aNz7zeC3U%2By5uvZJK5RIzCjBGUv7jRv%2Fk3wkH9UjP2onIBaxBq%2FlROuYkbp75wRUpeQO%2B%2BE0%2FtBoITJOy0E1Htd8n4%2BHFziu7ELwq75v2obkun6kMXXe4nPkFMwmxuVxsN8AaJFyscChlKSSUsj%2BpYdN76zeTHqJkVdXx%2FXd%2B%2FLKmFekc0inZeUEWqRYa6qHiZorFaczqAfx8O8xSdQR%2B%2FV6f6y7Seb%2F2fIlMScYXZ6OtzZZ0b9EdwgCxqaXc2%2BM7Fve1%2FLl835Y7lkaubwDXiGwiJbBxzUgLnISfRUYZioscZ96Mc%2F3dNKPBL6sq7rAr6rv4DJfn6fGxTq7ZPCy6ro6V2bViAbfXUvZk3%2BRBxXuHM4SPsvojacKCF9HKVrA%2B0ABGwyo60dbzNQ6L1E7TebECsV%2B8LdDadaWDML7p7sAGOqUBhao1F7D0IzDvuOcC8UnLDB62Du%2FpA%2B4%2BZlqwMEU1q9kgIAxxfm0ihQBzLVwjC7XtD7un313FHhqbCqzanJ3SVcZD4yT%2BxBYvFj%2BAS6AKdkdbEKJzclZN0dj1eA6dyN5b51P6Jk5YO9SPL9AaB676PIRTaV6mZuCdBPlocQTEc9RqfqvlnoNNofWljteeNhdcZzl2AQSGXpf06NHQZ7FB6c%2BJjhw1&X-Amz-Signature=78a01d3363bdce12a852bc97fa805c4f552f320e52d92c29d3b90df88f287951&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5OB53MX%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqlvtRiN9XuVJFXDyWBPTBNEoBT6giKbS%2BGmQ%2F%2BiS%2BQIgc4Q1QUIWr5B3xGGyc0EqhwbDDuXI0gmYjsXSNhMtHk0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLdwCkznlJtJcJX0hyrcA76i8xzv3CbvwFoMyaHadQneIx4kAlSYlodJqM7Ym3%2BQ%2BZe80ES0IPjs5oExiycVuG6JTUwyRbnsbtIWyLE%2Bn9Q3hm7AjeujijxNkzvsiFi4ft53Ge4OowJl7ju%2F5KBtIackeDRpr2MbA4LwDHllgCF40aDgxsSxh%2B2JX0Ca%2FYpAkIzwAlYK9IFlFVZIEsffWVtvGsmqOejDoB%2BDApSVEi4aNz7zeC3U%2By5uvZJK5RIzCjBGUv7jRv%2Fk3wkH9UjP2onIBaxBq%2FlROuYkbp75wRUpeQO%2B%2BE0%2FtBoITJOy0E1Htd8n4%2BHFziu7ELwq75v2obkun6kMXXe4nPkFMwmxuVxsN8AaJFyscChlKSSUsj%2BpYdN76zeTHqJkVdXx%2FXd%2B%2FLKmFekc0inZeUEWqRYa6qHiZorFaczqAfx8O8xSdQR%2B%2FV6f6y7Seb%2F2fIlMScYXZ6OtzZZ0b9EdwgCxqaXc2%2BM7Fve1%2FLl835Y7lkaubwDXiGwiJbBxzUgLnISfRUYZioscZ96Mc%2F3dNKPBL6sq7rAr6rv4DJfn6fGxTq7ZPCy6ro6V2bViAbfXUvZk3%2BRBxXuHM4SPsvojacKCF9HKVrA%2B0ABGwyo60dbzNQ6L1E7TebECsV%2B8LdDadaWDML7p7sAGOqUBhao1F7D0IzDvuOcC8UnLDB62Du%2FpA%2B4%2BZlqwMEU1q9kgIAxxfm0ihQBzLVwjC7XtD7un313FHhqbCqzanJ3SVcZD4yT%2BxBYvFj%2BAS6AKdkdbEKJzclZN0dj1eA6dyN5b51P6Jk5YO9SPL9AaB676PIRTaV6mZuCdBPlocQTEc9RqfqvlnoNNofWljteeNhdcZzl2AQSGXpf06NHQZ7FB6c%2BJjhw1&X-Amz-Signature=26b6c83fff16e87e88d0f0904c94da395ffceb2629fc14cdd8669ee0c2ff4d13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5OB53MX%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqlvtRiN9XuVJFXDyWBPTBNEoBT6giKbS%2BGmQ%2F%2BiS%2BQIgc4Q1QUIWr5B3xGGyc0EqhwbDDuXI0gmYjsXSNhMtHk0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLdwCkznlJtJcJX0hyrcA76i8xzv3CbvwFoMyaHadQneIx4kAlSYlodJqM7Ym3%2BQ%2BZe80ES0IPjs5oExiycVuG6JTUwyRbnsbtIWyLE%2Bn9Q3hm7AjeujijxNkzvsiFi4ft53Ge4OowJl7ju%2F5KBtIackeDRpr2MbA4LwDHllgCF40aDgxsSxh%2B2JX0Ca%2FYpAkIzwAlYK9IFlFVZIEsffWVtvGsmqOejDoB%2BDApSVEi4aNz7zeC3U%2By5uvZJK5RIzCjBGUv7jRv%2Fk3wkH9UjP2onIBaxBq%2FlROuYkbp75wRUpeQO%2B%2BE0%2FtBoITJOy0E1Htd8n4%2BHFziu7ELwq75v2obkun6kMXXe4nPkFMwmxuVxsN8AaJFyscChlKSSUsj%2BpYdN76zeTHqJkVdXx%2FXd%2B%2FLKmFekc0inZeUEWqRYa6qHiZorFaczqAfx8O8xSdQR%2B%2FV6f6y7Seb%2F2fIlMScYXZ6OtzZZ0b9EdwgCxqaXc2%2BM7Fve1%2FLl835Y7lkaubwDXiGwiJbBxzUgLnISfRUYZioscZ96Mc%2F3dNKPBL6sq7rAr6rv4DJfn6fGxTq7ZPCy6ro6V2bViAbfXUvZk3%2BRBxXuHM4SPsvojacKCF9HKVrA%2B0ABGwyo60dbzNQ6L1E7TebECsV%2B8LdDadaWDML7p7sAGOqUBhao1F7D0IzDvuOcC8UnLDB62Du%2FpA%2B4%2BZlqwMEU1q9kgIAxxfm0ihQBzLVwjC7XtD7un313FHhqbCqzanJ3SVcZD4yT%2BxBYvFj%2BAS6AKdkdbEKJzclZN0dj1eA6dyN5b51P6Jk5YO9SPL9AaB676PIRTaV6mZuCdBPlocQTEc9RqfqvlnoNNofWljteeNhdcZzl2AQSGXpf06NHQZ7FB6c%2BJjhw1&X-Amz-Signature=5bfff209e2e472628490d27420475577644e49dddd57fac3e5d819083128aa7d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJCRBDO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdX7q%2BbuM%2FT%2F%2FJaWHVb8rLQbeT7wOp4IAJNuH%2BVkTuOAiB669%2FaFramWvqoI4Eqj9sioa2GlNtkbBpLo7px%2BL3W7yr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMr6mQKfBq7P69cNWEKtwDzIGyJ%2Bp6x04%2Bd3pf6vbUaoo0gdD3xraC1jLhn%2FXDp0Mf90dpboouERzrF4fs8yKkfpl56rNR4MpwEoz3FpUJ%2FEEWqxjUxs13cxuAVT0zctY2CSMVj4jdzRsXE9xLFWTN8S%2FONS0Ft83YHreXVC5SBAoP5JuqGhGXckjKfddJ95n0psS04I1o9aITGev0GFyZ6SrwIDXYjypOkJhvB0s7ipM2LybnlYIBq2I5NFXf2%2Bvi2tkgcrWl7VArrTydShQ5ODPGSQ3x5qYi2KOphLEH9jBGAqOtD4yD08COyjmp9qwAKIQ848Rd7BAMTLfbihjvES9Cb%2BJbkEJnMx6WdZ7AOG8W9F3xpKBw2p0N9XxR4JDYc89qbrBVb%2Fmg4E5aAeh4gbqwTCEZA40Fy0BOkhIFu0pE8scIAXY5zqh35UtRdueWjzGKsAfRZ3BNNXs%2F0euc5%2BBu6wjMQow80FzNyNNcSPy79%2F4O4t2TmCkIvgRxVsCvheRknSJMeQ%2FxaRLkEJifyR5Kl0rTtF1sfW7kuHQbbO1c7hXekTOOjiKE%2FSpgeedNTiuza4qqP5b63GSJw%2B8x%2FpxJjKAUf7ZsJz24CHealop93g6mmDcD6ZZJZOxVFhTnN95RpdcxJS%2Fcp18w2%2BnuwAY6pgHH0rOUF9Gqy2DWX4jM0iD9s5TG4%2F3Sj7ToMloVECs7cp9dW0rVBQ2hXkvl6fxa0Muu1oeOUmumZMLR1BonjcB%2BJGdJyYVTaZl6u2ziyFAj97w2O94DQuqVz2iec0l1YdHPjIbrtU%2BZ%2FCdtPVj1fqxsI0VmHVnKKgwiYQj4y2cvyGwqqRVP9Sxk5Rn%2FnhBjNJ4Rz5%2FTrYr8w%2FbKG9bFQIYIG%2FY69B3h&X-Amz-Signature=a344d74542f0f64cd7edb4f9731241c72ea5b921e69faa25063eca4db27cc46a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOBNIZ3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5ejJcUFMXB2NtmDqWODJUuyrc1m7WC0neVhCLint7JAiEA8RswOE3A%2BlNh52Clvbt%2FPkQJ%2FN80x3t9dZ77OXPUI%2Bcq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDI%2Bu9OrqGM8r2pXPCSrcAzQPESSP%2BoKD8Vbzh6lR%2BdQj4kPGmcQR4YTZPpVPul%2BpLnEcTFZX5Rm1rso220ubSoUw6Idiahmg9YjBiu5H3qqbNoRhvzEBMizzRjNCwrJHWBxoyMeCR4%2FbEqsbzo%2Bv4IREUWGIYN%2FCP9MNkXA68tbjlM5aDo0Mj7MNMufg93BzCYvc6Z9wRqxaBx0q66wI3CiwFPdN2zwb8eS%2FRNKwoWE8JCgMI439Ohj73TTrluhWStCmli2bktrMaJWjWPkY1csOmePFawbsczSHkrChXLHkptEGakXqciwFoDggJlFyaWbn1QSGnJFcec17q7SoIAKaV8HS42QAnroreIFODCdHUpLNBS%2F5Q9xbsuqZ5uR71mcQyPeeXw5aHWBRqeC0J29sa%2FBy3ABYp7GeifuuWhv915yLCax%2BdjtXN6Af41TdaRJDJK2NPgagHLCwKaHm74WTW7LyXMZUhKz1IaHLSlDEMmWmEHCs1fRA0vmQiIBApSkMOz6ZHOlBtS2i0hYLPbk9qHwIZjaFb%2BfDDTtw8qPTDnpQEMfkkT04oCInPuXUEZez1aMV3CYc%2F85Dendq01%2BUtMoY9Lm0n257bhjhslszCsXdB27F%2BR9WXk6TASs%2FwvXkLoUoAk3SEB2nMPLp7sAGOqUBBHhGDqjWMuQfCLlhz1xvY3610Fytyl%2FJCMlEopt920Di7gdtsT%2Fzv1o3oaW98hFD%2BkE6gZCWqgBhIywDb1%2BcKwRCQktkqjvZzYrqy1IgXYLqCBj6OamY0v%2FNL3wQYlS%2B1RPYgn849sx0SW5lWjONgdYsXqEL94d%2F5Gj4ZTtu1jn5oSAnpIZe%2Bvvn4QU5GousJ8q0OouNqsGf1URSvwsrU99syFhX&X-Amz-Signature=15861b78f523ae7a918b77771eca1147b144f961ad98ac80f7bd62a3e411def1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5OB53MX%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqlvtRiN9XuVJFXDyWBPTBNEoBT6giKbS%2BGmQ%2F%2BiS%2BQIgc4Q1QUIWr5B3xGGyc0EqhwbDDuXI0gmYjsXSNhMtHk0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLdwCkznlJtJcJX0hyrcA76i8xzv3CbvwFoMyaHadQneIx4kAlSYlodJqM7Ym3%2BQ%2BZe80ES0IPjs5oExiycVuG6JTUwyRbnsbtIWyLE%2Bn9Q3hm7AjeujijxNkzvsiFi4ft53Ge4OowJl7ju%2F5KBtIackeDRpr2MbA4LwDHllgCF40aDgxsSxh%2B2JX0Ca%2FYpAkIzwAlYK9IFlFVZIEsffWVtvGsmqOejDoB%2BDApSVEi4aNz7zeC3U%2By5uvZJK5RIzCjBGUv7jRv%2Fk3wkH9UjP2onIBaxBq%2FlROuYkbp75wRUpeQO%2B%2BE0%2FtBoITJOy0E1Htd8n4%2BHFziu7ELwq75v2obkun6kMXXe4nPkFMwmxuVxsN8AaJFyscChlKSSUsj%2BpYdN76zeTHqJkVdXx%2FXd%2B%2FLKmFekc0inZeUEWqRYa6qHiZorFaczqAfx8O8xSdQR%2B%2FV6f6y7Seb%2F2fIlMScYXZ6OtzZZ0b9EdwgCxqaXc2%2BM7Fve1%2FLl835Y7lkaubwDXiGwiJbBxzUgLnISfRUYZioscZ96Mc%2F3dNKPBL6sq7rAr6rv4DJfn6fGxTq7ZPCy6ro6V2bViAbfXUvZk3%2BRBxXuHM4SPsvojacKCF9HKVrA%2B0ABGwyo60dbzNQ6L1E7TebECsV%2B8LdDadaWDML7p7sAGOqUBhao1F7D0IzDvuOcC8UnLDB62Du%2FpA%2B4%2BZlqwMEU1q9kgIAxxfm0ihQBzLVwjC7XtD7un313FHhqbCqzanJ3SVcZD4yT%2BxBYvFj%2BAS6AKdkdbEKJzclZN0dj1eA6dyN5b51P6Jk5YO9SPL9AaB676PIRTaV6mZuCdBPlocQTEc9RqfqvlnoNNofWljteeNhdcZzl2AQSGXpf06NHQZ7FB6c%2BJjhw1&X-Amz-Signature=fca122e8c8e75f24350e0d6749d25779d84e971f824e6173fdcb139871774c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
