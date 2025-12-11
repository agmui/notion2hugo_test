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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOWPCSE%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQChd9PFH%2BtuVNCfh49yOJnFNhEMzo4m2J8VVPzt2o%2B34QIhAKU799hNSplJgE5tTFbU7pijyr5aX84DrewWBrI3zQGoKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDxE4hR274azhL6H8q3APz0G2Z8TGhD9UaBjMb1Gokfi%2F%2BxGNxImUqnNzVej5ibS%2FmoXS3k9c%2BtQeZpP7diOXNCTIvzHvCI63V8PfLcLMYRQ%2Bi53Q2UXWs4R%2FgDfOf27VeLKvjhM2QJhIwkgb9LX3YAH5Sw1RnKUw3P7PDf9tCZ3KcrYERmYT9gLP%2BCDuzrdJomPPOJTM9O5iW8B0G4S6NKvSywmfrNUEeFeJxN6DFTGao%2BmGfiGCn4Jtr%2B3n62lQEur44%2BnOPQ6QT64mP6dYNHDoYiSi%2FbAfrNdr7Ik1XCal0VynGZrHnJ80ImeAWHxL8AwAb9oS%2FPPpka%2B33LjwOYX%2BQ1HboaJA%2FMX5Jor2Qkk%2FgWSVKpD1b4PqtD8f6GsgkUG1BuL9W274jDT3pPM0fSLl10UgG5Rsa34AJrGmMrFLifuE%2F%2FIlpmXooaIE1xQNUhQ%2FKg1uY7BM5ptBtMAMaQnCCCUe8uo9iWFhToFMO6ReMJXX26TFESC5LlDHW7RmfCvAmEjsMLaqlFqkT0AHsSo27aHd6KKDjk2lC4UMj1oGg%2FyH5dhCEQcLPPr6%2Fo1UzEeEHfBa7pOMqXK2n%2FViW%2BcCujU%2FWKHs46Wdhqfl81zI4AjnqSyqOKS6asmMYp1b0BDW7u09PxYY8djCQtejJBjqkATx%2FHDDEjyu%2BmZCCwhhdiSxk0G3bm9SnhfgHC6msbv9McWeqW4zXASCxcyH3S%2B08Jqsf2Hiiv%2B%2FPBbwF8yQFtIrPYkydNiSt5BFZWBdl66JDx0YTObwAy%2B2EuSBz0E3Mn%2B3LZSceYV0fm%2FAUrRARWa1QNGDU4awQ%2FZw%2FGs%2F2KVy3rBREs%2BaTyxaBpotyVat6v4y35Fz1PxJ9pXl%2FNYWPcYLjmG4h&X-Amz-Signature=f782ed4e10f41d3426bfaa0aabc35f977bbba1a4b185ccc3490a1ac486490b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOWPCSE%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQChd9PFH%2BtuVNCfh49yOJnFNhEMzo4m2J8VVPzt2o%2B34QIhAKU799hNSplJgE5tTFbU7pijyr5aX84DrewWBrI3zQGoKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDxE4hR274azhL6H8q3APz0G2Z8TGhD9UaBjMb1Gokfi%2F%2BxGNxImUqnNzVej5ibS%2FmoXS3k9c%2BtQeZpP7diOXNCTIvzHvCI63V8PfLcLMYRQ%2Bi53Q2UXWs4R%2FgDfOf27VeLKvjhM2QJhIwkgb9LX3YAH5Sw1RnKUw3P7PDf9tCZ3KcrYERmYT9gLP%2BCDuzrdJomPPOJTM9O5iW8B0G4S6NKvSywmfrNUEeFeJxN6DFTGao%2BmGfiGCn4Jtr%2B3n62lQEur44%2BnOPQ6QT64mP6dYNHDoYiSi%2FbAfrNdr7Ik1XCal0VynGZrHnJ80ImeAWHxL8AwAb9oS%2FPPpka%2B33LjwOYX%2BQ1HboaJA%2FMX5Jor2Qkk%2FgWSVKpD1b4PqtD8f6GsgkUG1BuL9W274jDT3pPM0fSLl10UgG5Rsa34AJrGmMrFLifuE%2F%2FIlpmXooaIE1xQNUhQ%2FKg1uY7BM5ptBtMAMaQnCCCUe8uo9iWFhToFMO6ReMJXX26TFESC5LlDHW7RmfCvAmEjsMLaqlFqkT0AHsSo27aHd6KKDjk2lC4UMj1oGg%2FyH5dhCEQcLPPr6%2Fo1UzEeEHfBa7pOMqXK2n%2FViW%2BcCujU%2FWKHs46Wdhqfl81zI4AjnqSyqOKS6asmMYp1b0BDW7u09PxYY8djCQtejJBjqkATx%2FHDDEjyu%2BmZCCwhhdiSxk0G3bm9SnhfgHC6msbv9McWeqW4zXASCxcyH3S%2B08Jqsf2Hiiv%2B%2FPBbwF8yQFtIrPYkydNiSt5BFZWBdl66JDx0YTObwAy%2B2EuSBz0E3Mn%2B3LZSceYV0fm%2FAUrRARWa1QNGDU4awQ%2FZw%2FGs%2F2KVy3rBREs%2BaTyxaBpotyVat6v4y35Fz1PxJ9pXl%2FNYWPcYLjmG4h&X-Amz-Signature=165b84080289fd0c93fbd72f2d53ae8cbaace1df4c6c3c00815ee5f564b62110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOWPCSE%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQChd9PFH%2BtuVNCfh49yOJnFNhEMzo4m2J8VVPzt2o%2B34QIhAKU799hNSplJgE5tTFbU7pijyr5aX84DrewWBrI3zQGoKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDxE4hR274azhL6H8q3APz0G2Z8TGhD9UaBjMb1Gokfi%2F%2BxGNxImUqnNzVej5ibS%2FmoXS3k9c%2BtQeZpP7diOXNCTIvzHvCI63V8PfLcLMYRQ%2Bi53Q2UXWs4R%2FgDfOf27VeLKvjhM2QJhIwkgb9LX3YAH5Sw1RnKUw3P7PDf9tCZ3KcrYERmYT9gLP%2BCDuzrdJomPPOJTM9O5iW8B0G4S6NKvSywmfrNUEeFeJxN6DFTGao%2BmGfiGCn4Jtr%2B3n62lQEur44%2BnOPQ6QT64mP6dYNHDoYiSi%2FbAfrNdr7Ik1XCal0VynGZrHnJ80ImeAWHxL8AwAb9oS%2FPPpka%2B33LjwOYX%2BQ1HboaJA%2FMX5Jor2Qkk%2FgWSVKpD1b4PqtD8f6GsgkUG1BuL9W274jDT3pPM0fSLl10UgG5Rsa34AJrGmMrFLifuE%2F%2FIlpmXooaIE1xQNUhQ%2FKg1uY7BM5ptBtMAMaQnCCCUe8uo9iWFhToFMO6ReMJXX26TFESC5LlDHW7RmfCvAmEjsMLaqlFqkT0AHsSo27aHd6KKDjk2lC4UMj1oGg%2FyH5dhCEQcLPPr6%2Fo1UzEeEHfBa7pOMqXK2n%2FViW%2BcCujU%2FWKHs46Wdhqfl81zI4AjnqSyqOKS6asmMYp1b0BDW7u09PxYY8djCQtejJBjqkATx%2FHDDEjyu%2BmZCCwhhdiSxk0G3bm9SnhfgHC6msbv9McWeqW4zXASCxcyH3S%2B08Jqsf2Hiiv%2B%2FPBbwF8yQFtIrPYkydNiSt5BFZWBdl66JDx0YTObwAy%2B2EuSBz0E3Mn%2B3LZSceYV0fm%2FAUrRARWa1QNGDU4awQ%2FZw%2FGs%2F2KVy3rBREs%2BaTyxaBpotyVat6v4y35Fz1PxJ9pXl%2FNYWPcYLjmG4h&X-Amz-Signature=9d01faa19eaf7163e9181373bc10a519ea54751de049b0ead528960b798c2486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFT6HHOA%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBAVknkQnFMDf9Y0jDIQl4nKzkzv0XvCByzgrM%2FCT1RbAiEA8yxUqY3cKMePFcQwGNLw%2BVBaf7lmclSelBSMlMyjNIMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlDCXy9oOgtuJho6ircA8YExeS1mw%2F7azYrEAq2j%2BwYQ704lvYpdpuvEsEO%2BYgauVAWBJwqciBFASfVDKAviVnG%2BwoT56V2jmgc3ITw2XezHx5t5cVwblelStMjjsm%2BDLbAkdwtKvNHFMxQVmKuAdQNuAa6IpmsjBaGLyMexXt%2Frp8%2BhfBQFuRj1NRDGlsHJ%2BIutSJTu2zA%2FaHiCgQyCeqIPo8GV6D4mfPX1O1VtaYjbDd%2BQgTfocOFwgDfdZuaq8sXIdzYSjIv5f4615SPe0P5iopstBg1VYBFlqWnOND6rY4Ah2pHc6V7bA7gXX1JWjlm4AC8Fl1wV4Kcs%2Bg6BJ3%2BCYG6ag2SFUomabEPNqhqB4rGMLLyHYs8Hq4iwSklvj5OqNqad0wUc0KyfAaOnBLZvqqsEHjk5cbW%2BBoN%2FDOB77f9y0AUwhCaoE7%2BAnQI7kQpT0uvU35aUjaxdXd3B3H1KfaIqnur5JAj3hHVJWI4ARKuDVW5jsTeZN4zPSOZA7qAIbm1sarOZaEUbNrTwzlybbQs8yyVA4xBzjWJ8ncJn2FQybve7EWaPweHWD4iHVFwPJ6L2lpnBnRKB6k7CP%2FyqDiR%2FwigArHnC9vnRqm5KP6JztUF%2BCEsjhWrVkO4wsT3uhkptNJqo2%2BwMMW16MkGOqUBH6eICTaNQDdaYDvQpEtGH6TAGUL7LMZpZNHPGcw116BQYYxwtqFobyvHoUde315dqtVFpASAF%2FEsCvcnYo803jVAaA9FF1dvLflpCvHaZDwoiy%2BvAZTW8eIqZ%2F7I88KmIWoC2e8CJMnsU7VtX05ykufu0%2BfRcNt7CmguX4UrdQ94%2B8%2BEOqb74QE%2B%2Ftte%2FLCFqFdZLuvCun2b61CsShWAtuCDa5ku&X-Amz-Signature=dee8f5803d4c673231154e49841c0658f7f29ab77ed6c6007399fa4c4697a7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3GPAFS5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAUU8bpIKEmzDmWwSZpK5qdnQikFOLvziII%2BQadeHhbDAiBv5gPE85pr5K87wp9xG%2F91qzWtg%2Bv1IeN3sdyuuEuYKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeaHLAZgZrUO2xhROKtwDx0ltdMEV2zJpj85MM%2FHPGzbE11lBLpfRMWWy82muE5cS%2Be%2F0YCJIgj5%2FObn3e%2FGUmtnuY2qhofgDQdvm6Z3GfBunKvLBHSPaOkz2xeXDg9jKXsmA1FOTqXmkAPozK4wF0fzmi2hnv9Mrw4Ysm3FRcbq%2B4bRd1t4Y4jTzuKuWvyrXtfEMvX%2FtOfllZmkuA5S%2FxlOQu6bP%2BjMLBGzUTuvRPG11wDGlL1xe2xzcsDQntJvO1uexVMxqc0JGjg3N1ljNfyR4W4hmOTKIbKs4jz42h0kVJG5S4z8oVrc2s625Mc1JcfktAspUsgGOKOvdkLkgGlbhpxnc%2BQ2uzqkkKLtwTZxkBlVeBVXg1ASmG2Z%2B6QHnq8Ab%2BYj1ccEfUpyTPh60Ejq59cYBw%2Flymh9gNak1bHXWHNadaU%2F%2FrFMjhPUdpOxQNmZl1gTtEC6m1VDkFPIrjleeD52Imr0bRJ5Zx%2FuJBJIPbFNkAABGzFvxD%2FE%2BJpxCGxNKfjn4q9Xvlus642d7XwpM4jztYm3IeS7i0etRaPv45z1xzUSBd%2BXnsLWklrXsxARYVCARkNx2mYvDofwcB0ofpa%2BIS58SKYL%2BdufUHl6JYSFZPDbS%2BrMN9Jl2PBbiP73u%2F7pxycep%2BAcwwLboyQY6pgHf41ARbYwUyzuTZBbqbfMDEMV9fYwKoKCh6sWEsc8EdJbbVcea4SgZemobZk%2BrCUuCgb3G5Jw85zgVXsHS4PloS2%2BhxA6qjYaXp%2BeGR5pY07obnsms06oX%2FMmEE9AMIdDFjog%2B166H7CvWi746v4DUuix2grDN2sm5rak1Igs%2FqDLSsRk8T2zC2E5l59ggkLesmpVh5L8KnMsbiQINvQpoAPY1P5tp&X-Amz-Signature=e2ed593a20530def2a613274ebb95afd90afc4c33ca72681022bb7cd5b6fa22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOWPCSE%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQChd9PFH%2BtuVNCfh49yOJnFNhEMzo4m2J8VVPzt2o%2B34QIhAKU799hNSplJgE5tTFbU7pijyr5aX84DrewWBrI3zQGoKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDxE4hR274azhL6H8q3APz0G2Z8TGhD9UaBjMb1Gokfi%2F%2BxGNxImUqnNzVej5ibS%2FmoXS3k9c%2BtQeZpP7diOXNCTIvzHvCI63V8PfLcLMYRQ%2Bi53Q2UXWs4R%2FgDfOf27VeLKvjhM2QJhIwkgb9LX3YAH5Sw1RnKUw3P7PDf9tCZ3KcrYERmYT9gLP%2BCDuzrdJomPPOJTM9O5iW8B0G4S6NKvSywmfrNUEeFeJxN6DFTGao%2BmGfiGCn4Jtr%2B3n62lQEur44%2BnOPQ6QT64mP6dYNHDoYiSi%2FbAfrNdr7Ik1XCal0VynGZrHnJ80ImeAWHxL8AwAb9oS%2FPPpka%2B33LjwOYX%2BQ1HboaJA%2FMX5Jor2Qkk%2FgWSVKpD1b4PqtD8f6GsgkUG1BuL9W274jDT3pPM0fSLl10UgG5Rsa34AJrGmMrFLifuE%2F%2FIlpmXooaIE1xQNUhQ%2FKg1uY7BM5ptBtMAMaQnCCCUe8uo9iWFhToFMO6ReMJXX26TFESC5LlDHW7RmfCvAmEjsMLaqlFqkT0AHsSo27aHd6KKDjk2lC4UMj1oGg%2FyH5dhCEQcLPPr6%2Fo1UzEeEHfBa7pOMqXK2n%2FViW%2BcCujU%2FWKHs46Wdhqfl81zI4AjnqSyqOKS6asmMYp1b0BDW7u09PxYY8djCQtejJBjqkATx%2FHDDEjyu%2BmZCCwhhdiSxk0G3bm9SnhfgHC6msbv9McWeqW4zXASCxcyH3S%2B08Jqsf2Hiiv%2B%2FPBbwF8yQFtIrPYkydNiSt5BFZWBdl66JDx0YTObwAy%2B2EuSBz0E3Mn%2B3LZSceYV0fm%2FAUrRARWa1QNGDU4awQ%2FZw%2FGs%2F2KVy3rBREs%2BaTyxaBpotyVat6v4y35Fz1PxJ9pXl%2FNYWPcYLjmG4h&X-Amz-Signature=c7c72a5113702783995464ee6cfe56a5c980f8ae7caa7a045fca59cc6e5e33dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
