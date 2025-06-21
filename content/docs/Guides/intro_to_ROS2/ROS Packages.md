---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZVCY7J%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1XIiEV3i1B%2FDcCgK1O0DSM0h4IHmzfC73AhMZ%2FH%2F6wIhAPD0vYGSssHaaiiAyzaL3dobFs9ZQguDhAVTqTaQAhQRKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpWyaW3cpPxs%2BsfKYq3APJAZdCEChxhm4jbVwxq5l8lus16Iv1y3JbzupVm9JZnmElbdG6Le7JnyMpUhK6KG2UzLtdDPgvuKud99ou3EP0xY4aoqvkEq1NsEwzRd9HFyC%2F54lo%2FrgxuljmOY8SkAczAQfu9h7NKbe8T5e9NogXyITr6G0t4HVNojcSou28YfEGOWZalwJhzgQsZ%2BrCLsaKeHAzR1nfApFcUvH4Syy6uF6gEsk7LRGA3CNRxcq44UgrKaDostLYGLYhKC9eypDon4fuh2dpo%2FgmPXGRHqiKIAdHxFXzooCsr%2FiUzBnOTteZOAnm%2BxER76zrikGpNURSFdaN60LkJNZPMaAJMgOgIY7g5EOoZrXoqDaiOoAa6MKzKUgdsWtGOKQb6xHXED8t6s5GuqXBRp3RaENSPF5WlwjdbpMJmUXq%2B%2Bmr6u6DECTs3%2BTbNEi6UktDniQ%2FWZsEHnjxrrlYRsj50DxR%2FEcgT3u%2FHcZfJLw3Gr0NPgLllsFOb5J%2FR0kuY3Ce7Fa%2B7b17xBIppzD33wXQ8qgR4eOZP3WJcqaQ3pfsLw4k0WWEKLGredlpywAT%2BP2lpfV9%2Fo9G50V6wml4cOp3K4bnesDTsLwZUC7XB4jV1%2F48ssoPJnMxHh4raSwCKRlXeTDVydnCBjqkAQImywPS4yUiJuYcRTAbfW12MTMnO0NQBU%2Fu9tUmJSd3N4a%2BiNb0ZEfVHEV14UbTSWMcHnF5bQNG2tluUiANPFB2wHucDL9GXrcNcWeekG59WbHOGl%2BFv4Kx3AVFwqiGj%2Boz2wIQK4t3NDMI4uCWZ92kbljdtcIPuP4wi%2F5d4I4XPRbcmEQC1s4NYTuFPtofMMvNAMZfhPhicycIb5bSj%2FZbdv1z&X-Amz-Signature=5dc2fd4a34cda194a68ff929ec4cb7f49fd85bdf3bb1d4d0275ec544fc9503c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZVCY7J%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1XIiEV3i1B%2FDcCgK1O0DSM0h4IHmzfC73AhMZ%2FH%2F6wIhAPD0vYGSssHaaiiAyzaL3dobFs9ZQguDhAVTqTaQAhQRKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpWyaW3cpPxs%2BsfKYq3APJAZdCEChxhm4jbVwxq5l8lus16Iv1y3JbzupVm9JZnmElbdG6Le7JnyMpUhK6KG2UzLtdDPgvuKud99ou3EP0xY4aoqvkEq1NsEwzRd9HFyC%2F54lo%2FrgxuljmOY8SkAczAQfu9h7NKbe8T5e9NogXyITr6G0t4HVNojcSou28YfEGOWZalwJhzgQsZ%2BrCLsaKeHAzR1nfApFcUvH4Syy6uF6gEsk7LRGA3CNRxcq44UgrKaDostLYGLYhKC9eypDon4fuh2dpo%2FgmPXGRHqiKIAdHxFXzooCsr%2FiUzBnOTteZOAnm%2BxER76zrikGpNURSFdaN60LkJNZPMaAJMgOgIY7g5EOoZrXoqDaiOoAa6MKzKUgdsWtGOKQb6xHXED8t6s5GuqXBRp3RaENSPF5WlwjdbpMJmUXq%2B%2Bmr6u6DECTs3%2BTbNEi6UktDniQ%2FWZsEHnjxrrlYRsj50DxR%2FEcgT3u%2FHcZfJLw3Gr0NPgLllsFOb5J%2FR0kuY3Ce7Fa%2B7b17xBIppzD33wXQ8qgR4eOZP3WJcqaQ3pfsLw4k0WWEKLGredlpywAT%2BP2lpfV9%2Fo9G50V6wml4cOp3K4bnesDTsLwZUC7XB4jV1%2F48ssoPJnMxHh4raSwCKRlXeTDVydnCBjqkAQImywPS4yUiJuYcRTAbfW12MTMnO0NQBU%2Fu9tUmJSd3N4a%2BiNb0ZEfVHEV14UbTSWMcHnF5bQNG2tluUiANPFB2wHucDL9GXrcNcWeekG59WbHOGl%2BFv4Kx3AVFwqiGj%2Boz2wIQK4t3NDMI4uCWZ92kbljdtcIPuP4wi%2F5d4I4XPRbcmEQC1s4NYTuFPtofMMvNAMZfhPhicycIb5bSj%2FZbdv1z&X-Amz-Signature=7a4f1e97201e05c2452b829e850977df38b91e65314f26bf0d8c8eac3068af49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZVCY7J%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1XIiEV3i1B%2FDcCgK1O0DSM0h4IHmzfC73AhMZ%2FH%2F6wIhAPD0vYGSssHaaiiAyzaL3dobFs9ZQguDhAVTqTaQAhQRKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpWyaW3cpPxs%2BsfKYq3APJAZdCEChxhm4jbVwxq5l8lus16Iv1y3JbzupVm9JZnmElbdG6Le7JnyMpUhK6KG2UzLtdDPgvuKud99ou3EP0xY4aoqvkEq1NsEwzRd9HFyC%2F54lo%2FrgxuljmOY8SkAczAQfu9h7NKbe8T5e9NogXyITr6G0t4HVNojcSou28YfEGOWZalwJhzgQsZ%2BrCLsaKeHAzR1nfApFcUvH4Syy6uF6gEsk7LRGA3CNRxcq44UgrKaDostLYGLYhKC9eypDon4fuh2dpo%2FgmPXGRHqiKIAdHxFXzooCsr%2FiUzBnOTteZOAnm%2BxER76zrikGpNURSFdaN60LkJNZPMaAJMgOgIY7g5EOoZrXoqDaiOoAa6MKzKUgdsWtGOKQb6xHXED8t6s5GuqXBRp3RaENSPF5WlwjdbpMJmUXq%2B%2Bmr6u6DECTs3%2BTbNEi6UktDniQ%2FWZsEHnjxrrlYRsj50DxR%2FEcgT3u%2FHcZfJLw3Gr0NPgLllsFOb5J%2FR0kuY3Ce7Fa%2B7b17xBIppzD33wXQ8qgR4eOZP3WJcqaQ3pfsLw4k0WWEKLGredlpywAT%2BP2lpfV9%2Fo9G50V6wml4cOp3K4bnesDTsLwZUC7XB4jV1%2F48ssoPJnMxHh4raSwCKRlXeTDVydnCBjqkAQImywPS4yUiJuYcRTAbfW12MTMnO0NQBU%2Fu9tUmJSd3N4a%2BiNb0ZEfVHEV14UbTSWMcHnF5bQNG2tluUiANPFB2wHucDL9GXrcNcWeekG59WbHOGl%2BFv4Kx3AVFwqiGj%2Boz2wIQK4t3NDMI4uCWZ92kbljdtcIPuP4wi%2F5d4I4XPRbcmEQC1s4NYTuFPtofMMvNAMZfhPhicycIb5bSj%2FZbdv1z&X-Amz-Signature=904659dd6d20ddaf2a7ac31b420e950d1da6b1f14bc46af43bd6b195604ad305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZVCY7J%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1XIiEV3i1B%2FDcCgK1O0DSM0h4IHmzfC73AhMZ%2FH%2F6wIhAPD0vYGSssHaaiiAyzaL3dobFs9ZQguDhAVTqTaQAhQRKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpWyaW3cpPxs%2BsfKYq3APJAZdCEChxhm4jbVwxq5l8lus16Iv1y3JbzupVm9JZnmElbdG6Le7JnyMpUhK6KG2UzLtdDPgvuKud99ou3EP0xY4aoqvkEq1NsEwzRd9HFyC%2F54lo%2FrgxuljmOY8SkAczAQfu9h7NKbe8T5e9NogXyITr6G0t4HVNojcSou28YfEGOWZalwJhzgQsZ%2BrCLsaKeHAzR1nfApFcUvH4Syy6uF6gEsk7LRGA3CNRxcq44UgrKaDostLYGLYhKC9eypDon4fuh2dpo%2FgmPXGRHqiKIAdHxFXzooCsr%2FiUzBnOTteZOAnm%2BxER76zrikGpNURSFdaN60LkJNZPMaAJMgOgIY7g5EOoZrXoqDaiOoAa6MKzKUgdsWtGOKQb6xHXED8t6s5GuqXBRp3RaENSPF5WlwjdbpMJmUXq%2B%2Bmr6u6DECTs3%2BTbNEi6UktDniQ%2FWZsEHnjxrrlYRsj50DxR%2FEcgT3u%2FHcZfJLw3Gr0NPgLllsFOb5J%2FR0kuY3Ce7Fa%2B7b17xBIppzD33wXQ8qgR4eOZP3WJcqaQ3pfsLw4k0WWEKLGredlpywAT%2BP2lpfV9%2Fo9G50V6wml4cOp3K4bnesDTsLwZUC7XB4jV1%2F48ssoPJnMxHh4raSwCKRlXeTDVydnCBjqkAQImywPS4yUiJuYcRTAbfW12MTMnO0NQBU%2Fu9tUmJSd3N4a%2BiNb0ZEfVHEV14UbTSWMcHnF5bQNG2tluUiANPFB2wHucDL9GXrcNcWeekG59WbHOGl%2BFv4Kx3AVFwqiGj%2Boz2wIQK4t3NDMI4uCWZ92kbljdtcIPuP4wi%2F5d4I4XPRbcmEQC1s4NYTuFPtofMMvNAMZfhPhicycIb5bSj%2FZbdv1z&X-Amz-Signature=5bf627cc2339bf76809c3d3d15f94fe2a9220c1956d6dbebf67c1267ea9d4f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZVCY7J%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1XIiEV3i1B%2FDcCgK1O0DSM0h4IHmzfC73AhMZ%2FH%2F6wIhAPD0vYGSssHaaiiAyzaL3dobFs9ZQguDhAVTqTaQAhQRKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpWyaW3cpPxs%2BsfKYq3APJAZdCEChxhm4jbVwxq5l8lus16Iv1y3JbzupVm9JZnmElbdG6Le7JnyMpUhK6KG2UzLtdDPgvuKud99ou3EP0xY4aoqvkEq1NsEwzRd9HFyC%2F54lo%2FrgxuljmOY8SkAczAQfu9h7NKbe8T5e9NogXyITr6G0t4HVNojcSou28YfEGOWZalwJhzgQsZ%2BrCLsaKeHAzR1nfApFcUvH4Syy6uF6gEsk7LRGA3CNRxcq44UgrKaDostLYGLYhKC9eypDon4fuh2dpo%2FgmPXGRHqiKIAdHxFXzooCsr%2FiUzBnOTteZOAnm%2BxER76zrikGpNURSFdaN60LkJNZPMaAJMgOgIY7g5EOoZrXoqDaiOoAa6MKzKUgdsWtGOKQb6xHXED8t6s5GuqXBRp3RaENSPF5WlwjdbpMJmUXq%2B%2Bmr6u6DECTs3%2BTbNEi6UktDniQ%2FWZsEHnjxrrlYRsj50DxR%2FEcgT3u%2FHcZfJLw3Gr0NPgLllsFOb5J%2FR0kuY3Ce7Fa%2B7b17xBIppzD33wXQ8qgR4eOZP3WJcqaQ3pfsLw4k0WWEKLGredlpywAT%2BP2lpfV9%2Fo9G50V6wml4cOp3K4bnesDTsLwZUC7XB4jV1%2F48ssoPJnMxHh4raSwCKRlXeTDVydnCBjqkAQImywPS4yUiJuYcRTAbfW12MTMnO0NQBU%2Fu9tUmJSd3N4a%2BiNb0ZEfVHEV14UbTSWMcHnF5bQNG2tluUiANPFB2wHucDL9GXrcNcWeekG59WbHOGl%2BFv4Kx3AVFwqiGj%2Boz2wIQK4t3NDMI4uCWZ92kbljdtcIPuP4wi%2F5d4I4XPRbcmEQC1s4NYTuFPtofMMvNAMZfhPhicycIb5bSj%2FZbdv1z&X-Amz-Signature=919139f2347dbdce335b9687247e9810904fd40aa9232e6149b956a28a3e1c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZVCY7J%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1XIiEV3i1B%2FDcCgK1O0DSM0h4IHmzfC73AhMZ%2FH%2F6wIhAPD0vYGSssHaaiiAyzaL3dobFs9ZQguDhAVTqTaQAhQRKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpWyaW3cpPxs%2BsfKYq3APJAZdCEChxhm4jbVwxq5l8lus16Iv1y3JbzupVm9JZnmElbdG6Le7JnyMpUhK6KG2UzLtdDPgvuKud99ou3EP0xY4aoqvkEq1NsEwzRd9HFyC%2F54lo%2FrgxuljmOY8SkAczAQfu9h7NKbe8T5e9NogXyITr6G0t4HVNojcSou28YfEGOWZalwJhzgQsZ%2BrCLsaKeHAzR1nfApFcUvH4Syy6uF6gEsk7LRGA3CNRxcq44UgrKaDostLYGLYhKC9eypDon4fuh2dpo%2FgmPXGRHqiKIAdHxFXzooCsr%2FiUzBnOTteZOAnm%2BxER76zrikGpNURSFdaN60LkJNZPMaAJMgOgIY7g5EOoZrXoqDaiOoAa6MKzKUgdsWtGOKQb6xHXED8t6s5GuqXBRp3RaENSPF5WlwjdbpMJmUXq%2B%2Bmr6u6DECTs3%2BTbNEi6UktDniQ%2FWZsEHnjxrrlYRsj50DxR%2FEcgT3u%2FHcZfJLw3Gr0NPgLllsFOb5J%2FR0kuY3Ce7Fa%2B7b17xBIppzD33wXQ8qgR4eOZP3WJcqaQ3pfsLw4k0WWEKLGredlpywAT%2BP2lpfV9%2Fo9G50V6wml4cOp3K4bnesDTsLwZUC7XB4jV1%2F48ssoPJnMxHh4raSwCKRlXeTDVydnCBjqkAQImywPS4yUiJuYcRTAbfW12MTMnO0NQBU%2Fu9tUmJSd3N4a%2BiNb0ZEfVHEV14UbTSWMcHnF5bQNG2tluUiANPFB2wHucDL9GXrcNcWeekG59WbHOGl%2BFv4Kx3AVFwqiGj%2Boz2wIQK4t3NDMI4uCWZ92kbljdtcIPuP4wi%2F5d4I4XPRbcmEQC1s4NYTuFPtofMMvNAMZfhPhicycIb5bSj%2FZbdv1z&X-Amz-Signature=dff80e78243efe1f5f02076727f0cc90b4ce6ada006a21412e91c235a250f9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZVCY7J%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1XIiEV3i1B%2FDcCgK1O0DSM0h4IHmzfC73AhMZ%2FH%2F6wIhAPD0vYGSssHaaiiAyzaL3dobFs9ZQguDhAVTqTaQAhQRKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpWyaW3cpPxs%2BsfKYq3APJAZdCEChxhm4jbVwxq5l8lus16Iv1y3JbzupVm9JZnmElbdG6Le7JnyMpUhK6KG2UzLtdDPgvuKud99ou3EP0xY4aoqvkEq1NsEwzRd9HFyC%2F54lo%2FrgxuljmOY8SkAczAQfu9h7NKbe8T5e9NogXyITr6G0t4HVNojcSou28YfEGOWZalwJhzgQsZ%2BrCLsaKeHAzR1nfApFcUvH4Syy6uF6gEsk7LRGA3CNRxcq44UgrKaDostLYGLYhKC9eypDon4fuh2dpo%2FgmPXGRHqiKIAdHxFXzooCsr%2FiUzBnOTteZOAnm%2BxER76zrikGpNURSFdaN60LkJNZPMaAJMgOgIY7g5EOoZrXoqDaiOoAa6MKzKUgdsWtGOKQb6xHXED8t6s5GuqXBRp3RaENSPF5WlwjdbpMJmUXq%2B%2Bmr6u6DECTs3%2BTbNEi6UktDniQ%2FWZsEHnjxrrlYRsj50DxR%2FEcgT3u%2FHcZfJLw3Gr0NPgLllsFOb5J%2FR0kuY3Ce7Fa%2B7b17xBIppzD33wXQ8qgR4eOZP3WJcqaQ3pfsLw4k0WWEKLGredlpywAT%2BP2lpfV9%2Fo9G50V6wml4cOp3K4bnesDTsLwZUC7XB4jV1%2F48ssoPJnMxHh4raSwCKRlXeTDVydnCBjqkAQImywPS4yUiJuYcRTAbfW12MTMnO0NQBU%2Fu9tUmJSd3N4a%2BiNb0ZEfVHEV14UbTSWMcHnF5bQNG2tluUiANPFB2wHucDL9GXrcNcWeekG59WbHOGl%2BFv4Kx3AVFwqiGj%2Boz2wIQK4t3NDMI4uCWZ92kbljdtcIPuP4wi%2F5d4I4XPRbcmEQC1s4NYTuFPtofMMvNAMZfhPhicycIb5bSj%2FZbdv1z&X-Amz-Signature=f798db9cede800697eda90bcac91ab13d566855d709826173b2c904182c14566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
