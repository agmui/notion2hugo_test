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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BAPZ6IV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIB1PbHAA0nfQJjLquK2%2BatWePyhKlpy7gBO9tZ24XHe%2FAiEA5Jlr9s6VvnFsH0TuxCzoVdtzo70%2B5uIr%2FoGeaafi0ogq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDH0maacDUUTBPuzWrircA9atprxzKsVV0G6DNd1Wj%2Fu%2FmTnJgwyYixCYKSlZ%2F%2B9yftZe9l0BOnm%2FHzCqljDU4zC2u6UyDN75zaTVyZQyAm68CSUk8Yhthm6nowVV6n75Nzpk6Ftgq0uRh6ScZXYmC4VRGQgSE2crTCW00BiDPwsfx7ysy0uolN9mePkujfbf74xfoMJgf9x8nGR%2FwoovTtsCFfz5dUUmCEPQV8bW5etBujM3eR%2By0y8iJ6v4n5DUem%2Fi6d8rC3%2FAcEOMrHkyMoDY4%2FeX3yt6AkTkrl9fm82VkvVZk9TSNh0ZdLCY%2F29aRRw6g9Kdwg42AWcTOyOzQEage%2Fbh7SRwxAuI8XslHhvNrlflY13RHMU98acoO8aV6ws55uh0RMOZh%2Behfeu7zUxIV4Ddoi0BXiftL%2FrVC931dXp2JLiPOuac9mfmZbfLfrCCHjnxLAHR9C5c31hFeB4Nv3YRX3f01p449iWyl8aODG8%2F9X4IEW%2Fro1MM4XYSZBSDT%2FwupOzuhRqW4Ft0S%2FR1MXxQJnxkhMT1f5jFolhef3cYZ7lLxGj4cYIEw9%2B7ru021WA6EbKCd%2BYYA%2FV1aFfsDFl0MQ574RrM4UYauFMZuaB7N80afMpohXjBV34EHWgFbxxDFNUajXudMLf0p8MGOqUBRe6vR3wZp0Y8rjOhhjd%2B8siAJUB7YVrb8KH65aYdGeEHYOB6HKD%2BFQmUqUgu%2FbjZaRo1xjqavTiVWVaHL4I%2Bsfqn3A0bY48Dt8LCSF3DjVX94Dm6ebyTmGedtNp7OYaydqCrgVWlPIF9GiiwYw04fJVO4gIAiiN4Ud1J%2BdEljMP2N0f2cvNWmtmS8jpyo0qFVvCxxI9dupX7WQKFURNLRwrocr%2B1&X-Amz-Signature=2c010205327a21e76ffcef99099c47c7bca5e0bd6bb5bbc27f5d60e4535ecc95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BAPZ6IV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIB1PbHAA0nfQJjLquK2%2BatWePyhKlpy7gBO9tZ24XHe%2FAiEA5Jlr9s6VvnFsH0TuxCzoVdtzo70%2B5uIr%2FoGeaafi0ogq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDH0maacDUUTBPuzWrircA9atprxzKsVV0G6DNd1Wj%2Fu%2FmTnJgwyYixCYKSlZ%2F%2B9yftZe9l0BOnm%2FHzCqljDU4zC2u6UyDN75zaTVyZQyAm68CSUk8Yhthm6nowVV6n75Nzpk6Ftgq0uRh6ScZXYmC4VRGQgSE2crTCW00BiDPwsfx7ysy0uolN9mePkujfbf74xfoMJgf9x8nGR%2FwoovTtsCFfz5dUUmCEPQV8bW5etBujM3eR%2By0y8iJ6v4n5DUem%2Fi6d8rC3%2FAcEOMrHkyMoDY4%2FeX3yt6AkTkrl9fm82VkvVZk9TSNh0ZdLCY%2F29aRRw6g9Kdwg42AWcTOyOzQEage%2Fbh7SRwxAuI8XslHhvNrlflY13RHMU98acoO8aV6ws55uh0RMOZh%2Behfeu7zUxIV4Ddoi0BXiftL%2FrVC931dXp2JLiPOuac9mfmZbfLfrCCHjnxLAHR9C5c31hFeB4Nv3YRX3f01p449iWyl8aODG8%2F9X4IEW%2Fro1MM4XYSZBSDT%2FwupOzuhRqW4Ft0S%2FR1MXxQJnxkhMT1f5jFolhef3cYZ7lLxGj4cYIEw9%2B7ru021WA6EbKCd%2BYYA%2FV1aFfsDFl0MQ574RrM4UYauFMZuaB7N80afMpohXjBV34EHWgFbxxDFNUajXudMLf0p8MGOqUBRe6vR3wZp0Y8rjOhhjd%2B8siAJUB7YVrb8KH65aYdGeEHYOB6HKD%2BFQmUqUgu%2FbjZaRo1xjqavTiVWVaHL4I%2Bsfqn3A0bY48Dt8LCSF3DjVX94Dm6ebyTmGedtNp7OYaydqCrgVWlPIF9GiiwYw04fJVO4gIAiiN4Ud1J%2BdEljMP2N0f2cvNWmtmS8jpyo0qFVvCxxI9dupX7WQKFURNLRwrocr%2B1&X-Amz-Signature=44bc1b34342139afaa36f96942bfcd602d297d3f04fc7a73eb16ad8bf5920fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BAPZ6IV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIB1PbHAA0nfQJjLquK2%2BatWePyhKlpy7gBO9tZ24XHe%2FAiEA5Jlr9s6VvnFsH0TuxCzoVdtzo70%2B5uIr%2FoGeaafi0ogq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDH0maacDUUTBPuzWrircA9atprxzKsVV0G6DNd1Wj%2Fu%2FmTnJgwyYixCYKSlZ%2F%2B9yftZe9l0BOnm%2FHzCqljDU4zC2u6UyDN75zaTVyZQyAm68CSUk8Yhthm6nowVV6n75Nzpk6Ftgq0uRh6ScZXYmC4VRGQgSE2crTCW00BiDPwsfx7ysy0uolN9mePkujfbf74xfoMJgf9x8nGR%2FwoovTtsCFfz5dUUmCEPQV8bW5etBujM3eR%2By0y8iJ6v4n5DUem%2Fi6d8rC3%2FAcEOMrHkyMoDY4%2FeX3yt6AkTkrl9fm82VkvVZk9TSNh0ZdLCY%2F29aRRw6g9Kdwg42AWcTOyOzQEage%2Fbh7SRwxAuI8XslHhvNrlflY13RHMU98acoO8aV6ws55uh0RMOZh%2Behfeu7zUxIV4Ddoi0BXiftL%2FrVC931dXp2JLiPOuac9mfmZbfLfrCCHjnxLAHR9C5c31hFeB4Nv3YRX3f01p449iWyl8aODG8%2F9X4IEW%2Fro1MM4XYSZBSDT%2FwupOzuhRqW4Ft0S%2FR1MXxQJnxkhMT1f5jFolhef3cYZ7lLxGj4cYIEw9%2B7ru021WA6EbKCd%2BYYA%2FV1aFfsDFl0MQ574RrM4UYauFMZuaB7N80afMpohXjBV34EHWgFbxxDFNUajXudMLf0p8MGOqUBRe6vR3wZp0Y8rjOhhjd%2B8siAJUB7YVrb8KH65aYdGeEHYOB6HKD%2BFQmUqUgu%2FbjZaRo1xjqavTiVWVaHL4I%2Bsfqn3A0bY48Dt8LCSF3DjVX94Dm6ebyTmGedtNp7OYaydqCrgVWlPIF9GiiwYw04fJVO4gIAiiN4Ud1J%2BdEljMP2N0f2cvNWmtmS8jpyo0qFVvCxxI9dupX7WQKFURNLRwrocr%2B1&X-Amz-Signature=39b1323c6bf6b7203e50a2e9109f16e5cb5b60da560f7922901ce8cba867ced7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBHODNU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC1U1dPskDLEoaXz2Pr3eKF5wNKfWSWwx5EZXhnN4vaNwIhAP9viF6lTg%2B1wzigedJI6xHc%2FBIlEbwN4VHOHq7fPSKBKv8DCFgQABoMNjM3NDIzMTgzODA1IgzusP63ebO0gdYM%2FHMq3AMEz%2B7UIZ1C70La0Pi19TcoyfmexvMxPSUraTEflVcZEMONKRr9L6%2FSpilT43hW%2FgrPKAhD4Y3IHZChxhd4jpcvjr%2BdZJRu%2BvcJcVEiqwpM3JT0Xy%2FCzU6HWgutqVLra6ReHibwfIf4dts%2Fi%2FbBrcry5l5EShGoNRruY3AfU9%2BsvQnOJokimm1J6KlWxXsoK93YdBglYoRprBCPmdPUlkA7HAVCG283lDsc6RFMdS3e4%2BKbPPS1DrHYxuGqB0qMxVFNCNiB5aQ9bi1sCJF4cnjhVloSwT%2BRgyv9dHz2gxkrmBPmy5NcSrKWcWYy9AL1r8hm5qKySdT65WbUhNwnvB1M6kXAIIkwdHBn5F2rcUgdSyFxLGeW2Pe%2BbLXZuOct%2BugsxxcWvM8C6QhOMr7rHXCCEmRDoZXwCC9qqOvnBhUNYVVU%2BYNvhhZi6CEBhNFCbYhS1KUsonaD8IQIzO9KHEYkg9AaLTZhHN9x%2BYOwK1GmZPMVgw3PRKpm8SwIap6IjA34tGgK4E9mcHMwYKEJSqZr1o%2FLo6sK8PF%2Fba3hOKfO%2BHbgJxZiR1M7FIsNAukJQtqOhnCZF3xjQ3O7wgcWKT5JCNY6lt6tDRr5yhYb0QA9ecL1OIKhHRW%2BfeItszDfrKjDBjqkAfZFGucGM2df%2BywZIXUpixp5z7WC5K6uCfEhPOoVJCNgK43gbhMJMs19qY5qbqba1sS9pG33lLMmGnUgRZpO%2BQMA7juV2zsCwqNDRYJm4oaYoGdMDBln2lifvi%2Fk04HT9m2O62qbhpYXeS6iF7wo5nSm%2F9%2BAutnqlROf%2Bz0CGeMHFJHW27QWhjFFErLMqNJUhox5vnniK8%2Fjfr%2BQpuWw%2BXm57TEE&X-Amz-Signature=45731b0f600abcfe610ff6c20cc2e98f74f5d235b01ceba3d0e4f207a044049d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFEDOLZP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIDEF4YrjRbiRcK818SzTNGflQo%2FMHxdsBHtigYBh4pQ1AiEA5FavVkyUcbKrSBi8YrPOrGqIxYnr2lVxTN%2FrD1qLg2sq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGgq9V1hzujykBaffCrcA2RXA4BWZ2F3wH0RR1jCk5EhQlFQywATULqNd5FMKJbYqBWnouRIqVKPaYgoXzEhtz4dgvNnszxKqWgxziRN9ysnthdvOb83SSuyCVnWRYw8%2BiNTiDgEHK8vt6jppF3YlxKzbPsZ6dHk26ES2CQkVZCwsR9kLJKAnmxWG98ScghyoJc2PeyCDaUwFoZM8T6E%2FH4CCSfMmdF6uGKIcqPA6zvfa%2BMm6aC4x4dsQRbZNfgT2OuTbrefj%2BMZS1FYQ6YPHvkXvmM6PVWDynh6gkh8uD5uZFS1uAyujyc%2BeVzq71AhN9N%2B6Nj6HRhlLU%2FzAqYqFd10wWUdEQk0xBCX2sgluyzmHjI1UZwnqqCWezBshI%2FeI0Y1kpmIzDzqA6IRdWuXAnjlpfJIatrz6vzOzpYWxIynp98ExLCu56fxAl25WJTZ7iFsyhlpoRRvaH2ILJw2UTsi%2FyHqbfdc3D6xmmCvSQVxlZegYI0vhjswqFMAieMcs7zDPVej%2BfikssWzZtI1OMFklA1xFnO0OQZps5BDJQJmtgEb2yg6Gn48SVt5K48HiwibWRzwrkKX832j%2Bf16%2F4KVrn3n8yttIGYMpvNTO%2BELpXq%2BzRYbMAu4Z3Qy7bgRC8M%2FZAfH74z6teiVMMCoqMMGOqUBbFfaLE6ccdno%2Fqp7tImqMPVMcPHmRUd12Uti5yaN5LBGzqZ2kl6t9p31IXMu140ZNPPp7wCN1S66qPPl1OiY6LuNMbj%2BRj0ExeO%2FbzXE2c3JsEDq9h836fFocuicjH18qJlczga%2FI1gsM%2B6osGEbk1x%2BCXHYuJTNRNUFvnF75VDbbM7Lb6ULWOunFsPbZIH1SgisPfduDND5dCn4lDbAwB6z077M&X-Amz-Signature=3d4af9755f396253f786969ec3eac84f2e0bd93ee0e7490e5bd839ea55280878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BAPZ6IV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIB1PbHAA0nfQJjLquK2%2BatWePyhKlpy7gBO9tZ24XHe%2FAiEA5Jlr9s6VvnFsH0TuxCzoVdtzo70%2B5uIr%2FoGeaafi0ogq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDH0maacDUUTBPuzWrircA9atprxzKsVV0G6DNd1Wj%2Fu%2FmTnJgwyYixCYKSlZ%2F%2B9yftZe9l0BOnm%2FHzCqljDU4zC2u6UyDN75zaTVyZQyAm68CSUk8Yhthm6nowVV6n75Nzpk6Ftgq0uRh6ScZXYmC4VRGQgSE2crTCW00BiDPwsfx7ysy0uolN9mePkujfbf74xfoMJgf9x8nGR%2FwoovTtsCFfz5dUUmCEPQV8bW5etBujM3eR%2By0y8iJ6v4n5DUem%2Fi6d8rC3%2FAcEOMrHkyMoDY4%2FeX3yt6AkTkrl9fm82VkvVZk9TSNh0ZdLCY%2F29aRRw6g9Kdwg42AWcTOyOzQEage%2Fbh7SRwxAuI8XslHhvNrlflY13RHMU98acoO8aV6ws55uh0RMOZh%2Behfeu7zUxIV4Ddoi0BXiftL%2FrVC931dXp2JLiPOuac9mfmZbfLfrCCHjnxLAHR9C5c31hFeB4Nv3YRX3f01p449iWyl8aODG8%2F9X4IEW%2Fro1MM4XYSZBSDT%2FwupOzuhRqW4Ft0S%2FR1MXxQJnxkhMT1f5jFolhef3cYZ7lLxGj4cYIEw9%2B7ru021WA6EbKCd%2BYYA%2FV1aFfsDFl0MQ574RrM4UYauFMZuaB7N80afMpohXjBV34EHWgFbxxDFNUajXudMLf0p8MGOqUBRe6vR3wZp0Y8rjOhhjd%2B8siAJUB7YVrb8KH65aYdGeEHYOB6HKD%2BFQmUqUgu%2FbjZaRo1xjqavTiVWVaHL4I%2Bsfqn3A0bY48Dt8LCSF3DjVX94Dm6ebyTmGedtNp7OYaydqCrgVWlPIF9GiiwYw04fJVO4gIAiiN4Ud1J%2BdEljMP2N0f2cvNWmtmS8jpyo0qFVvCxxI9dupX7WQKFURNLRwrocr%2B1&X-Amz-Signature=2649c20aac37506993bf41629e2d26bbd5d8e4ef3c2aef34cd457ee7341e8202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
