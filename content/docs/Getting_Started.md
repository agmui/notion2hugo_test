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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVUFRXR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEBunbZX21QK3qnEZG7opJRZfmgLXRjvvVfna3pAviycAiEA9oQ88awZauzbayKbY7BTeLZ7QajbS8yh%2F7BT6Mh5uyMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFFOp2crXF3%2FSVifyrcA7tmnQbsR%2B1w%2B4BF5kShlux1y3dUsXVp4rrZ5qdHhwPDR0ydoFvGl13dYyVPKWVxAvLsiRhEQaE5hPPOF%2FpWbrt5xNG4V7ZeH1VEKXRYyiWt73Y0gNr6tr8ET9iNLDCxW6Gty5kkpFKc%2BcSjcQ%2F6kyPpiL%2FAC9%2FnmnPZlzYTUHbebURRz6yJIPKZHQZLb%2FhICEy%2Fl9Wepb2TcfKaUBccAHrk6c8pnH40iVPPNsZGRjv3i85vL6ywISjGmUpiRgZKxPn4LIBTzK6fUvozHlFSb7tXUTUQFOI4vS5LJJdlqq24w9H46Q0DAyQ8Mz%2FSC1%2FKaeyYsTOcNhtze%2BZbTxh2lxNH024iGGza%2Btbqprqdp8qMY62vBIKFlmr24bOqAOqK29zyV7qVVP%2Bl%2BiYikAyRJr5EKmWjZiCH23zMKUOcYSPv%2BSwMPqbdcM0HUkadQvVju%2BZ%2FjB4msfOvtyFNsWPKfV%2F09pK0mQfIy%2FJEBJpak9dPlx%2B3nSeoZw9cY91wj3GMszEP4229HmrhdluIG6NRust7id%2BbrMZ8MoH7zyDps7ml%2FfLebYukaJOb5hKXH9BaZ9su3UIxhI9Ejrk7qW%2BqgCZyAg%2BFxIhS41Psa%2BsK1JCy06yzNCVY02nfmQbhML73isEGOqUBQBQM6tnIPFfnMHOieNucNB4WaaodjQmEqRIlQMfjTpKvhIBtjLQIkO5iLbYhm3zzCgr%2B2Ht3jQb34tVZMV5fmmEM14nTsTkXCFclVxpyNVV71uxzj4eoDq6Uzh%2BwG1DCZmDlrGrsS8z8GfiKgZ2VXGd2wGC4u1neA%2BWiSH%2B%2FnnNI8Zm88FU1nqDYJQbK5mnIXo5REpFz%2BnUFNwp%2BWoLzgC5rJ2Kb&X-Amz-Signature=4453255b6b6fea4cbc88b463f1175216751f7e4e18e12b41cbf8317239595709&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVUFRXR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEBunbZX21QK3qnEZG7opJRZfmgLXRjvvVfna3pAviycAiEA9oQ88awZauzbayKbY7BTeLZ7QajbS8yh%2F7BT6Mh5uyMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFFOp2crXF3%2FSVifyrcA7tmnQbsR%2B1w%2B4BF5kShlux1y3dUsXVp4rrZ5qdHhwPDR0ydoFvGl13dYyVPKWVxAvLsiRhEQaE5hPPOF%2FpWbrt5xNG4V7ZeH1VEKXRYyiWt73Y0gNr6tr8ET9iNLDCxW6Gty5kkpFKc%2BcSjcQ%2F6kyPpiL%2FAC9%2FnmnPZlzYTUHbebURRz6yJIPKZHQZLb%2FhICEy%2Fl9Wepb2TcfKaUBccAHrk6c8pnH40iVPPNsZGRjv3i85vL6ywISjGmUpiRgZKxPn4LIBTzK6fUvozHlFSb7tXUTUQFOI4vS5LJJdlqq24w9H46Q0DAyQ8Mz%2FSC1%2FKaeyYsTOcNhtze%2BZbTxh2lxNH024iGGza%2Btbqprqdp8qMY62vBIKFlmr24bOqAOqK29zyV7qVVP%2Bl%2BiYikAyRJr5EKmWjZiCH23zMKUOcYSPv%2BSwMPqbdcM0HUkadQvVju%2BZ%2FjB4msfOvtyFNsWPKfV%2F09pK0mQfIy%2FJEBJpak9dPlx%2B3nSeoZw9cY91wj3GMszEP4229HmrhdluIG6NRust7id%2BbrMZ8MoH7zyDps7ml%2FfLebYukaJOb5hKXH9BaZ9su3UIxhI9Ejrk7qW%2BqgCZyAg%2BFxIhS41Psa%2BsK1JCy06yzNCVY02nfmQbhML73isEGOqUBQBQM6tnIPFfnMHOieNucNB4WaaodjQmEqRIlQMfjTpKvhIBtjLQIkO5iLbYhm3zzCgr%2B2Ht3jQb34tVZMV5fmmEM14nTsTkXCFclVxpyNVV71uxzj4eoDq6Uzh%2BwG1DCZmDlrGrsS8z8GfiKgZ2VXGd2wGC4u1neA%2BWiSH%2B%2FnnNI8Zm88FU1nqDYJQbK5mnIXo5REpFz%2BnUFNwp%2BWoLzgC5rJ2Kb&X-Amz-Signature=b0c66c2f6d43c46f997fc9e83ff9e52302e8b0e74eb8e2d04549752d4a6927a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVUFRXR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEBunbZX21QK3qnEZG7opJRZfmgLXRjvvVfna3pAviycAiEA9oQ88awZauzbayKbY7BTeLZ7QajbS8yh%2F7BT6Mh5uyMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFFOp2crXF3%2FSVifyrcA7tmnQbsR%2B1w%2B4BF5kShlux1y3dUsXVp4rrZ5qdHhwPDR0ydoFvGl13dYyVPKWVxAvLsiRhEQaE5hPPOF%2FpWbrt5xNG4V7ZeH1VEKXRYyiWt73Y0gNr6tr8ET9iNLDCxW6Gty5kkpFKc%2BcSjcQ%2F6kyPpiL%2FAC9%2FnmnPZlzYTUHbebURRz6yJIPKZHQZLb%2FhICEy%2Fl9Wepb2TcfKaUBccAHrk6c8pnH40iVPPNsZGRjv3i85vL6ywISjGmUpiRgZKxPn4LIBTzK6fUvozHlFSb7tXUTUQFOI4vS5LJJdlqq24w9H46Q0DAyQ8Mz%2FSC1%2FKaeyYsTOcNhtze%2BZbTxh2lxNH024iGGza%2Btbqprqdp8qMY62vBIKFlmr24bOqAOqK29zyV7qVVP%2Bl%2BiYikAyRJr5EKmWjZiCH23zMKUOcYSPv%2BSwMPqbdcM0HUkadQvVju%2BZ%2FjB4msfOvtyFNsWPKfV%2F09pK0mQfIy%2FJEBJpak9dPlx%2B3nSeoZw9cY91wj3GMszEP4229HmrhdluIG6NRust7id%2BbrMZ8MoH7zyDps7ml%2FfLebYukaJOb5hKXH9BaZ9su3UIxhI9Ejrk7qW%2BqgCZyAg%2BFxIhS41Psa%2BsK1JCy06yzNCVY02nfmQbhML73isEGOqUBQBQM6tnIPFfnMHOieNucNB4WaaodjQmEqRIlQMfjTpKvhIBtjLQIkO5iLbYhm3zzCgr%2B2Ht3jQb34tVZMV5fmmEM14nTsTkXCFclVxpyNVV71uxzj4eoDq6Uzh%2BwG1DCZmDlrGrsS8z8GfiKgZ2VXGd2wGC4u1neA%2BWiSH%2B%2FnnNI8Zm88FU1nqDYJQbK5mnIXo5REpFz%2BnUFNwp%2BWoLzgC5rJ2Kb&X-Amz-Signature=f68f97a6a6f597bc7ef2016f3f7c40ff5107252074d64b6ceba8c1a05864589a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PA3UEUE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCb0HY%2F%2FUs8XooqXd3eMWX6Tz0TiP89H2M%2FBBciOxlT9QIhAOAtSLvMqHeM4p5C3Ru%2FUHDDh%2FmOsx9tMdVRd7kstal9KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypY1vP9zHq7JGT0m0q3AMz71ANJEjo1IDXqoYAr%2B62nPojbji5gxO9Eusdjptm7V8FdjiI%2FbIYZQpXtum4KHFCjRI36vnxOtx5P%2FHS0DQmrkigsqJNcu65EfAvErl15aZLdofcB%2Bg%2FaDZIS8Zze9lWBuBnJUUwUTWQc5EyJpKPmQ%2FiPan2EJoQKOmlsFzGWmiAlKUThhlo93PBhrnI3GeR7A0gwJbYF1BDA%2FyvIcjkQb40Uzgvg1SbXKNCaYIT%2FBYg3lr5NCUJQ0HBI%2F5QWV%2FVQHfJuAxISJ46ByZaZFIgU8KuSYxsAERVXLVGl63pzPa0iuMKmGL06A%2BrkeKbp3RrhZ6hzCdOnGnB7Q%2F9KzfgNPjZFmnOJ%2FWr6Oo%2FVnT%2BQsjqk1GORksVjAhOhXnRw%2F7yeI2IY2c4PEt0DutS0EfUxvfj2OMePf%2B90CgK6L8gtSwpJt%2B3bpTsjVvWEedmxHCe1ObIsxiv2Ap7UM3OMWyfsw0XQAcrXL0TrkI8mqOLowQh63cLS1fKJMQPxstimqrClnJMxaMJ6OSKnYqm4V2yf5AwjjDOGpPwYpXiwTlj4fjiFECG%2F%2BMnM4YlsJr6aKb5DCt9qso4vUGXoCoMpSHDwbMixcD1DhfvibZd2lxW9JcBHvmkq90Ok3gWSDC%2F94rBBjqkAWbLq6CltckbG4Hg%2BhnVW3vR1ikIOB4Hpu7sdrAJZDg79JSENc0OzZswhKDa0pprwLLXn3JJCNFU%2F5a3j567A0MlivhefQOP7jWwN8snUFzzfBKLYSiJfTRD5UDuUlrmhSQDOB7k0dG%2BjeCL8hk5uznOw7IY2FFD0N%2BrVp3F5XTCvCFN%2BHzQSO9FA7CyXpPrHasCCnJ%2FFjyu25UEC1Bv2v2owC5R&X-Amz-Signature=e46f950d993df617067b3dabf212d5e073b1e2667209272d07190e7038b83d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYPXLQK%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIF8KY23Ur7QcdhKF6Zonf8BsWUuHKA4yxzBRSd0AekYYAiBnhx3Z7FXORqCbNbSITFOO%2BzCzAL1ArJJqX9GMt4aMRSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnoVSGxAOm5rgXs%2ByKtwDaBOpYDoiDNsIs9uTyqOccUr1RyZxokW8qW8EqmWgDZemv8sqWxK9o%2BQ%2F%2BbX8cofh4LSAPnEhP%2BjqkAjDEiHRamFnEMQm85kxaGRZndStdSnjhDnqp0X7zzgBAjZ%2BeJ7kjHWk3wrus0VMXTAOFnefExEZ%2FxzJCYSWrFtBDkIVTR2T8iq34cOrge%2FMJFyelfEJ9XMTYM9rp0ff2RfrWXANQyG6gZeBarkWQEqcjdMTqTFq5Bsp6EVLm6B8FWfA3qNrjma1QHH2EBcxlqFhMjPMoODO4DdwDVwoiFEv%2BjwzEVH0fRAD9fWA9LVGI6GIf6YDN4GLKrHTfS6cpLfuOoNkEfEVWO9j1WPABUuqpIkRzhlmka0EwFrNz%2ByQwy%2FvxbUP4LV%2FgcKyAQGrY7cdjl4ycyIWjD044BLWvtGNZCdMzR3RSzCULVWeJI5hvJGNTEVZiQ7c3gHSKQ89px10X6xF3lBn1rj6TyNT8pubknlQbJq0qOwkoYx%2FNTCoCp5wCmGAq2Tuvyk4%2FyWLuqq%2BtyzEFyIP%2BDNdCqWDr0d1aq2bKO8uAvm2reuPodtvTR%2BYequaGmpMHX5XbX%2BYKM5vgW9sKRZ87kngNi3fyxL79eWyHR0o8Fv8uyPRGx5A%2FeUwvveKwQY6pgH3taCDMsgePSQKVwx4YrL429lFlQrBAUuv90RzNj3XkaF6W3eY28lBC7gZ%2FU%2BBGn9vEkyDCaBnVaHZIuxXbzp4UN6cuBze8E42v9dSt27rT0IgVaXXPmMqQOXRReEkRH9MME4JeoVIm5QtJNVV%2FvSPKqg4enn8%2F%2FhGDjhTjrFKg7mGR8YC3QPCXKRR2FLtqjX8hB5WZCo5Uz18TPnWNOVWaTnMWeoZ&X-Amz-Signature=5f90f12b248f18da7f1f75e03d78dae74dcc414216d8dc8efe1aac598cfd45fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVUFRXR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEBunbZX21QK3qnEZG7opJRZfmgLXRjvvVfna3pAviycAiEA9oQ88awZauzbayKbY7BTeLZ7QajbS8yh%2F7BT6Mh5uyMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFFOp2crXF3%2FSVifyrcA7tmnQbsR%2B1w%2B4BF5kShlux1y3dUsXVp4rrZ5qdHhwPDR0ydoFvGl13dYyVPKWVxAvLsiRhEQaE5hPPOF%2FpWbrt5xNG4V7ZeH1VEKXRYyiWt73Y0gNr6tr8ET9iNLDCxW6Gty5kkpFKc%2BcSjcQ%2F6kyPpiL%2FAC9%2FnmnPZlzYTUHbebURRz6yJIPKZHQZLb%2FhICEy%2Fl9Wepb2TcfKaUBccAHrk6c8pnH40iVPPNsZGRjv3i85vL6ywISjGmUpiRgZKxPn4LIBTzK6fUvozHlFSb7tXUTUQFOI4vS5LJJdlqq24w9H46Q0DAyQ8Mz%2FSC1%2FKaeyYsTOcNhtze%2BZbTxh2lxNH024iGGza%2Btbqprqdp8qMY62vBIKFlmr24bOqAOqK29zyV7qVVP%2Bl%2BiYikAyRJr5EKmWjZiCH23zMKUOcYSPv%2BSwMPqbdcM0HUkadQvVju%2BZ%2FjB4msfOvtyFNsWPKfV%2F09pK0mQfIy%2FJEBJpak9dPlx%2B3nSeoZw9cY91wj3GMszEP4229HmrhdluIG6NRust7id%2BbrMZ8MoH7zyDps7ml%2FfLebYukaJOb5hKXH9BaZ9su3UIxhI9Ejrk7qW%2BqgCZyAg%2BFxIhS41Psa%2BsK1JCy06yzNCVY02nfmQbhML73isEGOqUBQBQM6tnIPFfnMHOieNucNB4WaaodjQmEqRIlQMfjTpKvhIBtjLQIkO5iLbYhm3zzCgr%2B2Ht3jQb34tVZMV5fmmEM14nTsTkXCFclVxpyNVV71uxzj4eoDq6Uzh%2BwG1DCZmDlrGrsS8z8GfiKgZ2VXGd2wGC4u1neA%2BWiSH%2B%2FnnNI8Zm88FU1nqDYJQbK5mnIXo5REpFz%2BnUFNwp%2BWoLzgC5rJ2Kb&X-Amz-Signature=398e37e006d8e7a1d8e770d20200617dce2763e8fef7c53fb9404c23a6fceeae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
