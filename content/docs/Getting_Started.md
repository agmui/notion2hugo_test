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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUACUIZT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDWBL%2F6u6wGCMSqjsMPJTEOOgc1ySjFOXLWxsBJLYSIwwIhAPouJ%2B3fYZRB3MaBai7%2BpR%2BfAPMXk2%2BuWXgzfl%2BcRyeEKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8agYevqvcP8Lac2gq3AMHaqJCc0bsYt3d3QbGkN%2FccZWxoJ%2FsH15vvlG08lXC%2B%2BbnWQoRWJNkw3QSVydTSaslo1Xdmrz8qMDnRn%2B7gQgOdRqGd2%2FUHOR3j864kja0Bfgh8gbC1W5XTpGtIHgiDd01t7x85KZZhi9i7EzOnjaxDVXtiFc3VAju35FpW8hMJShyNt1h0cwXNkmoMP8wRO9Ywn4BPe6BYe86YqhRuqG10TOd8wtNSPihF9v3rJOv8vp4YvH8ZFnU4LuliHCu8cANDJZmqsmn7B1UzLiLRJeh8%2FpMRMpOolMovy8im3FbqPisoY40mHIHqEyr0QbcaS6X1ZnpF%2Bkcb44DHZ95%2Fgcv6l24ytW1bz9GBXHDlLszxetOu8NagABSAo7wtjKB4Ni2FxmxaIgNfRyfGx1NutVMJlOOW9yZ1q7TwvT6zMr1UqqRCg%2Fxi09HYrwIudhs7cFYfAtV1M43cCC0rz%2BDAIDALLFR6N0q76lsB0u0L6SJEaJ8rhI45yZM%2BdURP%2BRujnNI96pNlYG3qxfCeisCL3MMJa%2FTiZHT70OgD8KUEKOqJMsK4tzbC%2BhwO%2B0hKUJeL5j3W3QsIFZk8cw7et7myVBi1a%2FhPNY4U0kAWAdwop3NSgKq3jAHx7ANJjz71jDE%2BrS%2FBjqkAX1p3KmR9xA9PiI1ErfhYvtT%2FNsSvx0kOrF3wjurVbPt4xmry2SXttwIc4bHGXLQIOPhjQEOMrRf6Xe7IsUe25GzQuNs0gb%2FTTZbMBYARACXt8m1doARfrTsT7rVE9PsyQXPSC0k3leYONNJ2fgcS4S%2FvbwH6nN1Gj4alLGFKwe994RBKmZyJbGlgDyPraOUu8LO9302pFDGPdkA1AdzJ9OQXC8g&X-Amz-Signature=f62d466a1d1e2167adff015625aece3d0b26388a89be1746391ffd9e2de1ad49&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUACUIZT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDWBL%2F6u6wGCMSqjsMPJTEOOgc1ySjFOXLWxsBJLYSIwwIhAPouJ%2B3fYZRB3MaBai7%2BpR%2BfAPMXk2%2BuWXgzfl%2BcRyeEKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8agYevqvcP8Lac2gq3AMHaqJCc0bsYt3d3QbGkN%2FccZWxoJ%2FsH15vvlG08lXC%2B%2BbnWQoRWJNkw3QSVydTSaslo1Xdmrz8qMDnRn%2B7gQgOdRqGd2%2FUHOR3j864kja0Bfgh8gbC1W5XTpGtIHgiDd01t7x85KZZhi9i7EzOnjaxDVXtiFc3VAju35FpW8hMJShyNt1h0cwXNkmoMP8wRO9Ywn4BPe6BYe86YqhRuqG10TOd8wtNSPihF9v3rJOv8vp4YvH8ZFnU4LuliHCu8cANDJZmqsmn7B1UzLiLRJeh8%2FpMRMpOolMovy8im3FbqPisoY40mHIHqEyr0QbcaS6X1ZnpF%2Bkcb44DHZ95%2Fgcv6l24ytW1bz9GBXHDlLszxetOu8NagABSAo7wtjKB4Ni2FxmxaIgNfRyfGx1NutVMJlOOW9yZ1q7TwvT6zMr1UqqRCg%2Fxi09HYrwIudhs7cFYfAtV1M43cCC0rz%2BDAIDALLFR6N0q76lsB0u0L6SJEaJ8rhI45yZM%2BdURP%2BRujnNI96pNlYG3qxfCeisCL3MMJa%2FTiZHT70OgD8KUEKOqJMsK4tzbC%2BhwO%2B0hKUJeL5j3W3QsIFZk8cw7et7myVBi1a%2FhPNY4U0kAWAdwop3NSgKq3jAHx7ANJjz71jDE%2BrS%2FBjqkAX1p3KmR9xA9PiI1ErfhYvtT%2FNsSvx0kOrF3wjurVbPt4xmry2SXttwIc4bHGXLQIOPhjQEOMrRf6Xe7IsUe25GzQuNs0gb%2FTTZbMBYARACXt8m1doARfrTsT7rVE9PsyQXPSC0k3leYONNJ2fgcS4S%2FvbwH6nN1Gj4alLGFKwe994RBKmZyJbGlgDyPraOUu8LO9302pFDGPdkA1AdzJ9OQXC8g&X-Amz-Signature=7d766aacc91c035063e4eb919c1639c382f8413e9eb165484a43c52fa7c167f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYKRNZZ7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDNl3ZKcXF8u3AqBGCJS55Ih1xrPSBVjMRqbgD89Sc3HQIgIcPgF9Ux1sKGe%2Fl6L1sKfIzz8mKB2tBYA9DVX3Co%2FiMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXuxbnmHOT3QwAnCCrcA1WSsSUPnEd2FDgG1ER7COizz%2B1HIr9CYJzQhi2ULpYzSaLONFUeWPF5YxXHzL4BNckO5pSs%2BrcoCrcBufTaNdkSX2AGvUYrTZOV3xWUR9xz4Dh5K8AotwJUQePKVwRAD3%2FhGozDNfISr0rpNpRkDOt%2BVUufW3BrleXxzjK83bnsdwJceurrLuKe%2BJm%2FL8z7H%2Blu13tVOQkgIV%2Ff8Zq4HcK3UN3QsBtCQoBVcHa9kTiNtPB7ngCov8AXWziCMj21k%2BgungWo26JqlQ2F6INk8qDvuIHjmYrpR1dKofCLp6zUkVPR3xs8YjOmZh%2F1p7MZ3XZSSy5P9vH5ampk0FmoiTwCcT3TfPthR04ovMoNJlzERsCuhpMqgLBXf6k8kHyfBl5VdwJHXNA5tqZ%2FlHPJlLtGLvnODpxMxhUXCuyZtEuzwrzb1GtGNVk0LS9CJ1kkG0jQ8tIgOa%2BncxaDqaGePA1v2X%2B7FmQBG3tNv8sugt5vRigGOdqG7sDHNKIZUPaQqTh1%2BOTAy9OEpdtNo%2F339mBCra2MUlz3EXXRSnlWQZJXwvieS0L0wui%2BBAMH1%2Bl1gLhhNB61rCoyaPxrPE%2BxNlnD905jTcO8BzWPUnDqElcerqgxoNuwD3cii9%2FBMMT6tL8GOqUBupBgN3FVqnV%2FZkkAF5pwmOzuz4b7QFPoH2GUDS%2BUJRF%2Fz1OXMPyEjFJVucPvX3knjEioosAXXykNGf6nzRZ%2Fneeb2PmxE6TP4fbUydPXuSbFgf5EogquIH7mOPUiFMIMW%2B49hv9uUF7BW8kwGNbyTWNM1%2B%2B4obIIz%2Fi69ntfHr5DA36%2BCmW5zQWqPNkqXERXc5aEDqIh8cv0nLuqCTB4YpSPwPoy&X-Amz-Signature=ceedf8793013a4010a498545608070998a73c5f10a010a098918927392b39fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YVY7SRV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDO%2BpO%2F7NOgc9M5l4cv%2FfGTEnDl3sL6naPpuNq91ZLuaQIgBBZRBKybU%2FAQMfc2TXu02gbMHfSVEWNIiAyBmjgOzGIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM88YQLrQ5kUToBX1CrcA9p3vlOYmPlKnyziKZVKUpjqN1Pk5yti%2FyWwKCT0GszDXvdsAUh%2FeeymYQb7ZytPw2s3G4NbKqKEVUIluFiAkM3apfqamgvmjAjc%2BG52snDo%2BceIwWd9cJc4Wp8nz%2F4cj3qkKkASkB%2FNJCEpG4F%2F7bTWfzuThj2uL%2FN8rnZwwpipyjew2gjK0xzKn9W%2Bje07wU64ZVGqEXwu3tc8MMw%2FH7da9pgg7HgF0PnO9PhrB4j3D2PCtMPPUg72Om8qXol9G4CEeP2kql%2BhpHQba9itlaweRVSKc7UxKVJORJ9HOAitMo4se42aGc9nUP0GuHzP9ofxZZ8KI5YTJWf9kbcmLTzkTHylJPk%2FlJBXdtBqLKrOok%2BZuAbvxyhSoJr1YCfQ6h3yb0pPIRg908QZDbDqP8l9yEx4kr%2BVBFehIG4D%2FzFcHyaBz5drODRF3eY62z2PT%2Ff1FIWEHAx7yPp%2BQDwWNJ1xrAK0duOkI58P%2BBFcgLqFD4UEbgSDukp7Jy28uGL6T%2BiMtfK4vsIKEgOwHiuIAgmCoqc8n%2BEVdbRKge0S6LNwooPIFHyhXhB9j9SSWzMKj0vtM9GLhnJ8h8zEgwgz6tuOOKHOBoBZizT4S90Fans5B0Ub92CDUkSMua%2FjMKH7tL8GOqUBmrZwwTgcy5%2BgdFagk6LrKpLh6PZLu0u2U1xxGu3ufwe%2B7guChFBCGFd3dzvyjb0dVdu2pVc0qISyB%2FcfBcU%2B6f4XrQZdkLlp2Lgge8GhUVxPB674pjb%2BlgfgFYXccb%2B9aiQoDQxc4I8LpW2eFjMwG9wYAu3xyHZIJEMFw%2B0YoIW4OxQ0msNzvtQxJ7R5yUdWBj3wIcl2ZftIaj9A0WIhZRzQbl2F&X-Amz-Signature=6d55b8316f1a78bcb0898a13aa7141dc26745afd2046ee40ac4c2e5fdb76deda&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUACUIZT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDWBL%2F6u6wGCMSqjsMPJTEOOgc1ySjFOXLWxsBJLYSIwwIhAPouJ%2B3fYZRB3MaBai7%2BpR%2BfAPMXk2%2BuWXgzfl%2BcRyeEKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8agYevqvcP8Lac2gq3AMHaqJCc0bsYt3d3QbGkN%2FccZWxoJ%2FsH15vvlG08lXC%2B%2BbnWQoRWJNkw3QSVydTSaslo1Xdmrz8qMDnRn%2B7gQgOdRqGd2%2FUHOR3j864kja0Bfgh8gbC1W5XTpGtIHgiDd01t7x85KZZhi9i7EzOnjaxDVXtiFc3VAju35FpW8hMJShyNt1h0cwXNkmoMP8wRO9Ywn4BPe6BYe86YqhRuqG10TOd8wtNSPihF9v3rJOv8vp4YvH8ZFnU4LuliHCu8cANDJZmqsmn7B1UzLiLRJeh8%2FpMRMpOolMovy8im3FbqPisoY40mHIHqEyr0QbcaS6X1ZnpF%2Bkcb44DHZ95%2Fgcv6l24ytW1bz9GBXHDlLszxetOu8NagABSAo7wtjKB4Ni2FxmxaIgNfRyfGx1NutVMJlOOW9yZ1q7TwvT6zMr1UqqRCg%2Fxi09HYrwIudhs7cFYfAtV1M43cCC0rz%2BDAIDALLFR6N0q76lsB0u0L6SJEaJ8rhI45yZM%2BdURP%2BRujnNI96pNlYG3qxfCeisCL3MMJa%2FTiZHT70OgD8KUEKOqJMsK4tzbC%2BhwO%2B0hKUJeL5j3W3QsIFZk8cw7et7myVBi1a%2FhPNY4U0kAWAdwop3NSgKq3jAHx7ANJjz71jDE%2BrS%2FBjqkAX1p3KmR9xA9PiI1ErfhYvtT%2FNsSvx0kOrF3wjurVbPt4xmry2SXttwIc4bHGXLQIOPhjQEOMrRf6Xe7IsUe25GzQuNs0gb%2FTTZbMBYARACXt8m1doARfrTsT7rVE9PsyQXPSC0k3leYONNJ2fgcS4S%2FvbwH6nN1Gj4alLGFKwe994RBKmZyJbGlgDyPraOUu8LO9302pFDGPdkA1AdzJ9OQXC8g&X-Amz-Signature=b7685faecb5a34d1b23b8d970c185fdbda72feebd1382feedd2b2bd73733ca15&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
