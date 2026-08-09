---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKHXXZQC%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYnYtJyax0J%2F7MpHOeqXFG%2F74rusuanBk2EFOX1jM6AIgI47Yj1DHGFuOsoLnnmDuZsfXbSh%2BgXRRsijMdXqAsosq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDC5fdFTutn4GO2C%2FDircA6l%2F3SOWyvrSQDesI32WDZLsywfpQozvfkenShjNnrC2bxoMhBLHACKTqGqqJ1UePdm3yaitAQ1nHX0dR759dUe7G4X%2Bs1N2SkQLuDCWlP%2F3XKga6HLsfLZZsfRhZua1SH%2FL2JyvGbTlv%2FLhWZ21C4oMlmvw9yns6iLM9nXeUC1DyW1KTCcNP%2BQzhC%2BCX1TxHJYi%2F8CLsAMECFy4uPlUuPSYabJgdVA0n1Jjy4%2FCa3tf41iSi6z%2B4pIgbP5bfhmgZtgAv%2BlhERn6%2B9%2B5Yzx%2FvHdQD6909vlHrJW5LYdf3c3KL3DqryLYGvatSOgUtIU0ntBQtDhZfMeeXBLJP%2Bb5CSMHf2rjysvXY82T3FhRh7dFntDIlQbp5JmT9JxpTHgbfbG4dHBKXaS%2F37UXQgxcPWD0qMs6w608KHSGa%2BN6KpmJzeUrVNCHXR33nMf%2B%2BldteZ3%2FYQJi23j0AVNe2XIwVPkhD5Vzk9ODE8TAOp%2Bek3H8a78ZsHaI1vN4rPlhZSjWyMx9HCl73tn1RCu96ftWeOCLE9h%2BzoYfa%2BCWyDTgoNcJ4adTwEP1hGychVH1khfoOTIYBImo%2BiKZ1Oc2b5oJykNlMB56fBvJ8rviFXoXfb5Fdb2BcXGd0r06LeAcMI7W3tMGOqUBxJfU%2FLvyfh9KqRAd9gfyZFeBwkxMmakrLrfKDRYsh%2FUbz%2FUG4tdJTj90npT272OEuWas5wVMytRNeyor9vkARis4z5XJQ4XbdsO5n3wogTMA9IWU1%2Fhvun9%2F3j5GsmsV5GOSAEU7qhgq%2BM9Xh4y1EiGBdmi8v24kiS5Yj4F%2FZxthQAeOGXShB8W2wG7ND7d70syCvWCk9nwMEM96%2B2hKa18dwTvc&X-Amz-Signature=92c7e2187492845a2b41ef4986aa3b2f1ef3060d21e1ac9dde0bbfe59181dd09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKHXXZQC%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYnYtJyax0J%2F7MpHOeqXFG%2F74rusuanBk2EFOX1jM6AIgI47Yj1DHGFuOsoLnnmDuZsfXbSh%2BgXRRsijMdXqAsosq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDC5fdFTutn4GO2C%2FDircA6l%2F3SOWyvrSQDesI32WDZLsywfpQozvfkenShjNnrC2bxoMhBLHACKTqGqqJ1UePdm3yaitAQ1nHX0dR759dUe7G4X%2Bs1N2SkQLuDCWlP%2F3XKga6HLsfLZZsfRhZua1SH%2FL2JyvGbTlv%2FLhWZ21C4oMlmvw9yns6iLM9nXeUC1DyW1KTCcNP%2BQzhC%2BCX1TxHJYi%2F8CLsAMECFy4uPlUuPSYabJgdVA0n1Jjy4%2FCa3tf41iSi6z%2B4pIgbP5bfhmgZtgAv%2BlhERn6%2B9%2B5Yzx%2FvHdQD6909vlHrJW5LYdf3c3KL3DqryLYGvatSOgUtIU0ntBQtDhZfMeeXBLJP%2Bb5CSMHf2rjysvXY82T3FhRh7dFntDIlQbp5JmT9JxpTHgbfbG4dHBKXaS%2F37UXQgxcPWD0qMs6w608KHSGa%2BN6KpmJzeUrVNCHXR33nMf%2B%2BldteZ3%2FYQJi23j0AVNe2XIwVPkhD5Vzk9ODE8TAOp%2Bek3H8a78ZsHaI1vN4rPlhZSjWyMx9HCl73tn1RCu96ftWeOCLE9h%2BzoYfa%2BCWyDTgoNcJ4adTwEP1hGychVH1khfoOTIYBImo%2BiKZ1Oc2b5oJykNlMB56fBvJ8rviFXoXfb5Fdb2BcXGd0r06LeAcMI7W3tMGOqUBxJfU%2FLvyfh9KqRAd9gfyZFeBwkxMmakrLrfKDRYsh%2FUbz%2FUG4tdJTj90npT272OEuWas5wVMytRNeyor9vkARis4z5XJQ4XbdsO5n3wogTMA9IWU1%2Fhvun9%2F3j5GsmsV5GOSAEU7qhgq%2BM9Xh4y1EiGBdmi8v24kiS5Yj4F%2FZxthQAeOGXShB8W2wG7ND7d70syCvWCk9nwMEM96%2B2hKa18dwTvc&X-Amz-Signature=b2bb5848614d9cde1d9aab6aea72494a27c9113a5c1c3d7ff9844c15a75804ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKHXXZQC%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYnYtJyax0J%2F7MpHOeqXFG%2F74rusuanBk2EFOX1jM6AIgI47Yj1DHGFuOsoLnnmDuZsfXbSh%2BgXRRsijMdXqAsosq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDC5fdFTutn4GO2C%2FDircA6l%2F3SOWyvrSQDesI32WDZLsywfpQozvfkenShjNnrC2bxoMhBLHACKTqGqqJ1UePdm3yaitAQ1nHX0dR759dUe7G4X%2Bs1N2SkQLuDCWlP%2F3XKga6HLsfLZZsfRhZua1SH%2FL2JyvGbTlv%2FLhWZ21C4oMlmvw9yns6iLM9nXeUC1DyW1KTCcNP%2BQzhC%2BCX1TxHJYi%2F8CLsAMECFy4uPlUuPSYabJgdVA0n1Jjy4%2FCa3tf41iSi6z%2B4pIgbP5bfhmgZtgAv%2BlhERn6%2B9%2B5Yzx%2FvHdQD6909vlHrJW5LYdf3c3KL3DqryLYGvatSOgUtIU0ntBQtDhZfMeeXBLJP%2Bb5CSMHf2rjysvXY82T3FhRh7dFntDIlQbp5JmT9JxpTHgbfbG4dHBKXaS%2F37UXQgxcPWD0qMs6w608KHSGa%2BN6KpmJzeUrVNCHXR33nMf%2B%2BldteZ3%2FYQJi23j0AVNe2XIwVPkhD5Vzk9ODE8TAOp%2Bek3H8a78ZsHaI1vN4rPlhZSjWyMx9HCl73tn1RCu96ftWeOCLE9h%2BzoYfa%2BCWyDTgoNcJ4adTwEP1hGychVH1khfoOTIYBImo%2BiKZ1Oc2b5oJykNlMB56fBvJ8rviFXoXfb5Fdb2BcXGd0r06LeAcMI7W3tMGOqUBxJfU%2FLvyfh9KqRAd9gfyZFeBwkxMmakrLrfKDRYsh%2FUbz%2FUG4tdJTj90npT272OEuWas5wVMytRNeyor9vkARis4z5XJQ4XbdsO5n3wogTMA9IWU1%2Fhvun9%2F3j5GsmsV5GOSAEU7qhgq%2BM9Xh4y1EiGBdmi8v24kiS5Yj4F%2FZxthQAeOGXShB8W2wG7ND7d70syCvWCk9nwMEM96%2B2hKa18dwTvc&X-Amz-Signature=2af732c4f37b80ddd5abadf318ab1a14ce1764932c2105e9f6908fb3969eca6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZT2453X%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN4j4wBS%2B%2B4K4pGiLqZpYzkQa2joMyLbfSBubDyjjCPAiEA0QC3Phw34mz6VJdD3dpKbVMOzqTSHr8VElA99tTco%2Fkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH66JFanbJzKarQ%2FiCrcA3jZGs7TmDWJLdSx5pIQFy%2FF3FudCkpGWuWuugtIsogNx3ny2r2ES8HY9rf6keF6GZ%2FixxjA9ZyeFBzs3DREvC%2BoIQ3o5oIzIGtpuBOLVJaK2ObrUCXMwS%2BLbxzgqb3pGcNAqVIerDFvhJ9rWClHtSwdW0a6Ids3NCXatFTPpDZKf%2BAsbKjXf16e8zWVAEdB7H3IjFoyXQXdNHVEjR2wkcBTRjbIJcVhjsOTM5kly3Aw8XXrvn0YfMX8pCVXNqqENg7Jw7BQSuJEiopGCIY5nkQf%2B8QHDcUWgXk0FX%2F1eFrAFknhuW4e20NXeEQcePttVAeFelcgYwDEWJgHskmo%2FF7RlcHab%2B4wNjYCvirRWNxmE4SOBJhz5s5JLcoQxNySujgR9rwtzWWR79QGB1E5r5vKVdOE%2BwkJxXqG97CaAIVgktJuHsGJH4Cp2WMSu6YYZdrYqY6EFsvEbi%2BsMtZ5iFVDqFKenTwO47C4Fg8J7x3ELi85bfEy8OYghV6%2FdnVII4PQo7etUJ1IV3EqHujHiYi5n8FXA2FrmpMDuB22I5wAunNnyMb2cmZucHE%2FPK4ISWrJYwHYdAfOkqREfzWlIpVWrFYDN5KrEGVu6Pv%2FSocU08IQBsfm0Rodw72QMKbT3tMGOqUBstDCxdWMVHbyMC2UokWMTM605X0fCE3ivAg0QbF6pfMKxXcOxqtanBizvm%2BqghL2hdiq8P0pDPbFN5WGEgs2ucUc%2BJzAMxjgDSCOBb%2B9q3%2Bj7f%2FjDLG4piy5DbKUOJCS6BP%2Bm8hneOAIWW47ki3lQ6MZPyNqNbPxeQqTqJWLfdkxRF8JKX4PaalxLyNBhfTUZz7Od0JzJOAsDhD7bHyi18kL62XC&X-Amz-Signature=d9d3b2ffa60c4fca8d1e2ebb756d9f5786ae59f14c4b346923a4b70dd44422d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6KAHUX%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq2WsBwvtq%2BIn79vUTgDzgXLnBVJlBhDolAHdylu1RnAiEAgD6S%2BMvs1thGKuwnOv1lyCFvyhSQs6rhATSaukdT0SEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBp22%2BP1Rkl6BoFA%2BCrcAziD2EWEEzbOx7Mjnnwcb37ZS4VlBs1wG6cGEOD0frSlnkpEr60%2FisFsr78NkPp2kVkqveyFS5Atvpm%2B27JoMi0r2Y0Xgtf7bOfenNN6wKnT%2B874SMrTLQu2opmrTNwwGsnROujxNAwC0lJwpFfJfhO6NnuMt8pZ1bgunMm6ygaXF8xzCCoRhjGCAp9mmg6pGmSFW674tyNXnsRDsN7uY6gyjNbKyO3Me22cH7WQFWhEuhwL%2B7UU9IVwzf%2BNy6hlqcwuqi%2BECfj5uWyD0QH5UUc5z2YVVrKEvVycYvlPmrfii7Bc6JoyWyG9kovMuYcpsqvmRzh526iBun5JhcelDzqN0eRzM1Grc%2BLJ0dk3UGswAjlS9GR9pdM3N8USjYH8v9FvBOWpMF8oUk8v%2BGWXw8SDyU0pdzZypeRydYuzcSVeKeDroEkWbdjWMDCft84vduOSXs1Akj08ToGLdCmRNv5VLozGgXgwwweCJNjP%2BjOEHe5oRKq72N0cOXDbHF5wKSpSZ1MmWP67MsTfL9sujtXe9p1bXeQBQA1dPZ5FkVSXVXakX2DeEpuJelWnm4baDJ6bInP1Sg0mxDjpSWyynhBU%2F5UGWGE%2FuVGrsIYnmDw0FJeON%2Bzmv0CH4E0jMPLU3tMGOqUB23CHtswbjuVaHk9gXRXyHs8LCcktLfHp6wfNO4iEsyoebs8lDC28YxbqfXMG5VAwEWWdIxrLEzVDKIOQS5oYky8AJUYPYgPlpyqsDRzBXScZkonPSH7aUjWbXM3MnzBdmpRVk%2FCML7iXdgkQci1hUr0I%2F4H0gpG1nceSxDuzXmpy8rBzBRUqTI3Y93hv1eyDntkzeb9%2FJNl0cAhVd3eNp%2Fdr4xdE&X-Amz-Signature=cc597315508d2f1d13896dd78f22f2c9a869a5db0af352375ba6e6cac814829c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKHXXZQC%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYnYtJyax0J%2F7MpHOeqXFG%2F74rusuanBk2EFOX1jM6AIgI47Yj1DHGFuOsoLnnmDuZsfXbSh%2BgXRRsijMdXqAsosq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDC5fdFTutn4GO2C%2FDircA6l%2F3SOWyvrSQDesI32WDZLsywfpQozvfkenShjNnrC2bxoMhBLHACKTqGqqJ1UePdm3yaitAQ1nHX0dR759dUe7G4X%2Bs1N2SkQLuDCWlP%2F3XKga6HLsfLZZsfRhZua1SH%2FL2JyvGbTlv%2FLhWZ21C4oMlmvw9yns6iLM9nXeUC1DyW1KTCcNP%2BQzhC%2BCX1TxHJYi%2F8CLsAMECFy4uPlUuPSYabJgdVA0n1Jjy4%2FCa3tf41iSi6z%2B4pIgbP5bfhmgZtgAv%2BlhERn6%2B9%2B5Yzx%2FvHdQD6909vlHrJW5LYdf3c3KL3DqryLYGvatSOgUtIU0ntBQtDhZfMeeXBLJP%2Bb5CSMHf2rjysvXY82T3FhRh7dFntDIlQbp5JmT9JxpTHgbfbG4dHBKXaS%2F37UXQgxcPWD0qMs6w608KHSGa%2BN6KpmJzeUrVNCHXR33nMf%2B%2BldteZ3%2FYQJi23j0AVNe2XIwVPkhD5Vzk9ODE8TAOp%2Bek3H8a78ZsHaI1vN4rPlhZSjWyMx9HCl73tn1RCu96ftWeOCLE9h%2BzoYfa%2BCWyDTgoNcJ4adTwEP1hGychVH1khfoOTIYBImo%2BiKZ1Oc2b5oJykNlMB56fBvJ8rviFXoXfb5Fdb2BcXGd0r06LeAcMI7W3tMGOqUBxJfU%2FLvyfh9KqRAd9gfyZFeBwkxMmakrLrfKDRYsh%2FUbz%2FUG4tdJTj90npT272OEuWas5wVMytRNeyor9vkARis4z5XJQ4XbdsO5n3wogTMA9IWU1%2Fhvun9%2F3j5GsmsV5GOSAEU7qhgq%2BM9Xh4y1EiGBdmi8v24kiS5Yj4F%2FZxthQAeOGXShB8W2wG7ND7d70syCvWCk9nwMEM96%2B2hKa18dwTvc&X-Amz-Signature=0c316272ca810dd4d9b16a52ef05203ddbdf475045cbb5fbcad66168041e0c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
