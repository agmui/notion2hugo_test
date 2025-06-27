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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JP3FXX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCh0k8%2FUIrJ5mZjf%2BUJVSiP3xM9CGoRz1dYb7yYCfkO%2FwIhAPcGzOQb0fVMebKJHFiE5gMrJcPqx8kB5Tsj4eZpRxXRKv8DCG0QABoMNjM3NDIzMTgzODA1IgwxAUzELY3aot5bz8Yq3AM5YMaAFC15a%2Fou4JIX4yz36V8wcD1Zuv%2F1GeO%2Flz1YnN0MRhZvzSTSB05XdI8%2FM607r1%2FcdUs3VTxz%2BlTX9Eu1Y%2FoX308blaQVVoHjGR5v41TaNYyEQLJco%2FFzVHxde1v4bm%2FMUs7ew1Z0gN9%2FK3N3nxs%2FW3zGUbuq8Guuke3kYGCIkaybuh9QAIS579F4sQ2rjlTOTusqGh3Wda%2B9VDS8WOAYxDzudvY3J21te5%2FaEvHCXoydm6lBs4HdecL%2FcUI%2FX16Q%2FHUh6HWWx9upM%2FU526CavIf%2FO2vH5FkoEAASmkM32tz7O8d8osFbbMQOJ11qj7KykU4LkVu1NOq6CEZ6sPTwXAg2c7LPhirTcrODnljAn27yFDwK4rj3WNB1keOXJcaOroLPn5KTyU4DQHaql8mPrY3fXBCjn1FXQRVunIwwvywvpYjQ4vXDvwgbXS7eoUiR%2FbGvfzHerDmZLBsYfMkgO1sumG9dblqxIQJb%2BPsjurMMPzLiJ4tygZtAFBJeVRgHJVh0%2Fu892EfEf4w3opnL6tkpfTLNmapsJTqHbocdtkDKZNbBGJhRCNaO%2FW46LBV6RtTXmkvtisiDaAyRloeugXRaE%2FdFoMdx0pAiEX5MC%2F2SMGhCCg8zdzCKoPjCBjqkAaZS03p2L%2B3YKXRoEAMucLesv0hIZcKnNeviaw7fdi1hbpJX42GA1SMQdKi58VUI%2BvpPmqXk3YeCNE2J2V2BhJsNkq5SovRkyZcKv4lNeKI9XMPP5LfvcFcTd5B%2FIdxuuCOiOafjefVDOkUsTyi8mBflJoL3N6OdnGWIuvQt%2BgHrBnZ39xPL6nAywNJhU9pnvgDTDGy9NritXnpEU6SgnvRySoyQ&X-Amz-Signature=88e4519bade61c5c4d1641c21a700d40a8eaa3ae77a3369dbf7f65dab1a2de13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JP3FXX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCh0k8%2FUIrJ5mZjf%2BUJVSiP3xM9CGoRz1dYb7yYCfkO%2FwIhAPcGzOQb0fVMebKJHFiE5gMrJcPqx8kB5Tsj4eZpRxXRKv8DCG0QABoMNjM3NDIzMTgzODA1IgwxAUzELY3aot5bz8Yq3AM5YMaAFC15a%2Fou4JIX4yz36V8wcD1Zuv%2F1GeO%2Flz1YnN0MRhZvzSTSB05XdI8%2FM607r1%2FcdUs3VTxz%2BlTX9Eu1Y%2FoX308blaQVVoHjGR5v41TaNYyEQLJco%2FFzVHxde1v4bm%2FMUs7ew1Z0gN9%2FK3N3nxs%2FW3zGUbuq8Guuke3kYGCIkaybuh9QAIS579F4sQ2rjlTOTusqGh3Wda%2B9VDS8WOAYxDzudvY3J21te5%2FaEvHCXoydm6lBs4HdecL%2FcUI%2FX16Q%2FHUh6HWWx9upM%2FU526CavIf%2FO2vH5FkoEAASmkM32tz7O8d8osFbbMQOJ11qj7KykU4LkVu1NOq6CEZ6sPTwXAg2c7LPhirTcrODnljAn27yFDwK4rj3WNB1keOXJcaOroLPn5KTyU4DQHaql8mPrY3fXBCjn1FXQRVunIwwvywvpYjQ4vXDvwgbXS7eoUiR%2FbGvfzHerDmZLBsYfMkgO1sumG9dblqxIQJb%2BPsjurMMPzLiJ4tygZtAFBJeVRgHJVh0%2Fu892EfEf4w3opnL6tkpfTLNmapsJTqHbocdtkDKZNbBGJhRCNaO%2FW46LBV6RtTXmkvtisiDaAyRloeugXRaE%2FdFoMdx0pAiEX5MC%2F2SMGhCCg8zdzCKoPjCBjqkAaZS03p2L%2B3YKXRoEAMucLesv0hIZcKnNeviaw7fdi1hbpJX42GA1SMQdKi58VUI%2BvpPmqXk3YeCNE2J2V2BhJsNkq5SovRkyZcKv4lNeKI9XMPP5LfvcFcTd5B%2FIdxuuCOiOafjefVDOkUsTyi8mBflJoL3N6OdnGWIuvQt%2BgHrBnZ39xPL6nAywNJhU9pnvgDTDGy9NritXnpEU6SgnvRySoyQ&X-Amz-Signature=099686058aa876c13240b8cfbc53d382f375c258c05114375dbc9636f5b16076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JP3FXX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCh0k8%2FUIrJ5mZjf%2BUJVSiP3xM9CGoRz1dYb7yYCfkO%2FwIhAPcGzOQb0fVMebKJHFiE5gMrJcPqx8kB5Tsj4eZpRxXRKv8DCG0QABoMNjM3NDIzMTgzODA1IgwxAUzELY3aot5bz8Yq3AM5YMaAFC15a%2Fou4JIX4yz36V8wcD1Zuv%2F1GeO%2Flz1YnN0MRhZvzSTSB05XdI8%2FM607r1%2FcdUs3VTxz%2BlTX9Eu1Y%2FoX308blaQVVoHjGR5v41TaNYyEQLJco%2FFzVHxde1v4bm%2FMUs7ew1Z0gN9%2FK3N3nxs%2FW3zGUbuq8Guuke3kYGCIkaybuh9QAIS579F4sQ2rjlTOTusqGh3Wda%2B9VDS8WOAYxDzudvY3J21te5%2FaEvHCXoydm6lBs4HdecL%2FcUI%2FX16Q%2FHUh6HWWx9upM%2FU526CavIf%2FO2vH5FkoEAASmkM32tz7O8d8osFbbMQOJ11qj7KykU4LkVu1NOq6CEZ6sPTwXAg2c7LPhirTcrODnljAn27yFDwK4rj3WNB1keOXJcaOroLPn5KTyU4DQHaql8mPrY3fXBCjn1FXQRVunIwwvywvpYjQ4vXDvwgbXS7eoUiR%2FbGvfzHerDmZLBsYfMkgO1sumG9dblqxIQJb%2BPsjurMMPzLiJ4tygZtAFBJeVRgHJVh0%2Fu892EfEf4w3opnL6tkpfTLNmapsJTqHbocdtkDKZNbBGJhRCNaO%2FW46LBV6RtTXmkvtisiDaAyRloeugXRaE%2FdFoMdx0pAiEX5MC%2F2SMGhCCg8zdzCKoPjCBjqkAaZS03p2L%2B3YKXRoEAMucLesv0hIZcKnNeviaw7fdi1hbpJX42GA1SMQdKi58VUI%2BvpPmqXk3YeCNE2J2V2BhJsNkq5SovRkyZcKv4lNeKI9XMPP5LfvcFcTd5B%2FIdxuuCOiOafjefVDOkUsTyi8mBflJoL3N6OdnGWIuvQt%2BgHrBnZ39xPL6nAywNJhU9pnvgDTDGy9NritXnpEU6SgnvRySoyQ&X-Amz-Signature=3998b00a2fef0dde2b943be7244569503525b4ff4481304c93ba533550e9f76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNHWHRVX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDCyTUDzAM4UhLWzIBwxpHYDGi%2F3peU5sj0XoJrNpRpvgIhAM7qcoWCjt%2BEh%2B2VEM9GbUKuFRBdjhPU%2Fyl1gdhe4479Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzrRGq5hGtSdngw3T8q3AP72udXAZw3wa0yxxfZ6dz4gVJzIi0SVr%2FD5no0ZJypVCS55gI2QBIL70qZ6jGrBocYhVQdnwqu9vjD8LmrbmrnyGZgzksy9Nk3aJKTMItybZG%2Bzm1K4afQZmglZqrl%2BUUlntULoEirvl7o7biWJI5yYKlTNwEhKuoGyC2IU1Vjwk7d7eOnj17fnnQbxJNa0RRBASmxNRFx%2BF6NuQocOq2c5Y2ZnHHQSl71X3OROtGrqajf3XVYtdiADvhKqZId6RYe7OGrOOkm3Zzpg7WX7haJCWxq7DDYZfiUxfBJ645Gin8hHN%2FkQLlZEdJK787o6HOFBwSY%2FQuS0Uvb%2B%2F3qNvBVnomPwmw0qeS0t9NQlOfX%2BbWi1mgRNqX34e92fVOTBGXKhS4Zw6HuuGEatX9Chp1IMMgIglhLhEjJ5hVmV%2BDyUj7Eo1B2dBIY4SqCAyiGISKcXIRxxjYn0KpQii7m2oiQmgBvc3AFEq6H%2BipyFIg%2BUrCiJ15XdRZflqeVTrtChEKz%2FpgpFnS1RQCuvY%2Fgye05C0ZzteWxkuf%2F30eVgtjuCiKm9X%2BONBe3gBIzDcqxZO8K94M4NeGaKBcvMAmIoNbRhTeRsOdso3QjLefH1dE59FmfF3i9lunYbA6WBzDZn%2FjCBjqkAXRjlSemhiBXM%2BSdDkB2iG5rlBGx2veJhOGrMiXQiITzvx5cAvIQ5jRxhpOwqD4kaiFU62IwLw7prOxtJYsU9BWFYi90XxcomC3%2BsB5fio9m5HdBYubXgQJ%2Bsmj7Bssz2lCVP7MgZnQQOLS7jnyAXq5IWgEkurUAnO2lrJjx56rznrbWmFoIG3zCHcMyHG64EoT%2BMwmRNyyR2BYUPS3w3b0TlpCT&X-Amz-Signature=d4032b0caf630f9a1be07f8d7193b30bbb8ecc64ff9aaa9677add38f71545905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IW55GL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDbShf5JCWBpVqDKlpqcbZrz2E8coCf5X2o7H01TKsJswIgX7IRxFaWT39xpj7yUyjIK4Pe5I6y898kugWV%2FxeHtJAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLqCFZS8UhIPdL6fsSrcA4peGE9GbXpGYBmmeZYHn9vw9v%2Blzc8IFfsz1WfLxQDSD08r0Cc2MGRUG%2B6H%2FoQjKamGEloj51jNgbpk0cOpDpByCSNUnZ3TOBCFoXYlUyFFMe%2F3y%2FbO52S9lseV2SA4XMui3hDmGuT0QJ2K3g%2FgQkbhfKLbmdvSCQZmdl9M44P24o%2BaFvQGYyD1st4Cp18xCNWEsTxjdiHrVtdEUyP%2BqKzi0%2FcMknYv7uP1TcXBM%2BaPHd9Y58zcXU%2Fg5mhHD61M6TmPqng%2BC1n4eynhpg388otZ88E%2FxbXvrCoJW7mNkGh4FJfG%2BFNuYl%2BV2IPW4ivZXQTuevAXnZcG6BoG31%2FPgeNzym%2Byl84LtiIle2XVp2u%2B%2F6KDFuQkaxfPeILox%2By4dRXdwNb4zDqWKZAg1ywxzjH8J6C1BQFgxYRhZC1SDQDmfwCXqE40LcswUVdnUvrajcawgkzbBUwpmRJzzSTpk3hS2z9VAiSRXS5C84c2n501VO6nK4hOeiNS0awBGm46gOoAUWhGYbvrgrCF1sbY9bSWnHRkbTsvLNIm9hgtPfHbqd%2FvrzzegMohh4OXnhOgk7XGmOwxNEObU0CS8yJH4E%2Fq9cy%2F5CWK4SArNLgIKFyDZwqtthBwOVy84ycFMPuf%2BMIGOqUBRwS%2F%2FDN%2F50oSQquW%2FRcOE7D7t9wZEBqWZPzDNLRsGhERIPG94wsobmzzWtR6OhwhUA8aWQnnEHvQ0ttRrSbOWjTTNqvVDri%2BTJmbDDg3V59RHqiso32ItOP4rQRYo%2BXyR8tfLSaG2z9qdyopY395Jw%2FCIZPgy5C5qnDK1LHy%2BjEj0gi10eS76JpdbqrjSa9BJInsDVSfJWMRWSVOa04z6zAa1bdX&X-Amz-Signature=8e39b24b1056f1e625730baeb85c51490ba1d4ae593c0c901f72e68877574416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JP3FXX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCh0k8%2FUIrJ5mZjf%2BUJVSiP3xM9CGoRz1dYb7yYCfkO%2FwIhAPcGzOQb0fVMebKJHFiE5gMrJcPqx8kB5Tsj4eZpRxXRKv8DCG0QABoMNjM3NDIzMTgzODA1IgwxAUzELY3aot5bz8Yq3AM5YMaAFC15a%2Fou4JIX4yz36V8wcD1Zuv%2F1GeO%2Flz1YnN0MRhZvzSTSB05XdI8%2FM607r1%2FcdUs3VTxz%2BlTX9Eu1Y%2FoX308blaQVVoHjGR5v41TaNYyEQLJco%2FFzVHxde1v4bm%2FMUs7ew1Z0gN9%2FK3N3nxs%2FW3zGUbuq8Guuke3kYGCIkaybuh9QAIS579F4sQ2rjlTOTusqGh3Wda%2B9VDS8WOAYxDzudvY3J21te5%2FaEvHCXoydm6lBs4HdecL%2FcUI%2FX16Q%2FHUh6HWWx9upM%2FU526CavIf%2FO2vH5FkoEAASmkM32tz7O8d8osFbbMQOJ11qj7KykU4LkVu1NOq6CEZ6sPTwXAg2c7LPhirTcrODnljAn27yFDwK4rj3WNB1keOXJcaOroLPn5KTyU4DQHaql8mPrY3fXBCjn1FXQRVunIwwvywvpYjQ4vXDvwgbXS7eoUiR%2FbGvfzHerDmZLBsYfMkgO1sumG9dblqxIQJb%2BPsjurMMPzLiJ4tygZtAFBJeVRgHJVh0%2Fu892EfEf4w3opnL6tkpfTLNmapsJTqHbocdtkDKZNbBGJhRCNaO%2FW46LBV6RtTXmkvtisiDaAyRloeugXRaE%2FdFoMdx0pAiEX5MC%2F2SMGhCCg8zdzCKoPjCBjqkAaZS03p2L%2B3YKXRoEAMucLesv0hIZcKnNeviaw7fdi1hbpJX42GA1SMQdKi58VUI%2BvpPmqXk3YeCNE2J2V2BhJsNkq5SovRkyZcKv4lNeKI9XMPP5LfvcFcTd5B%2FIdxuuCOiOafjefVDOkUsTyi8mBflJoL3N6OdnGWIuvQt%2BgHrBnZ39xPL6nAywNJhU9pnvgDTDGy9NritXnpEU6SgnvRySoyQ&X-Amz-Signature=2c914ec6f0bc394bcfc8b99a0c6060ad0ada6f7e3a740684a3f946ff08216336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
