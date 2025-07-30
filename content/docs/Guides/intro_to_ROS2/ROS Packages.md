---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNOCOSZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5yO21iYom%2BleofvGimnLIfbp0vkTVXXA7kSJ6OThX1wIhALK6VJsSqRJ0%2FgyRPNOK9BB0cBqsoft6FTs%2B6CjE417vKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBkHJDNbItB8M8bWcq3AMjen%2BwgABvRBrHWLACu%2FDHJ9tKFw2MyzXC6XYxzt0%2BWsjTHyBK22WENkKdS5c0U%2FevHQ0FMqfDclLS1lvdqfwdCPayhib0Xmbuy8kQgKxwum23JJC7C6w29yyAmDXRla%2FRt6QErqCpShCdXvYpok%2FLHwCm34s1wz5bqcg5ORh7gjHn33LIgvM9WcernnL4JbDRQTdRcNQ%2BbvaXs0UWY%2B0%2FDn18mjH0YTqb0mNIi9tkoLghahC4iICp7wok8TkRekgRpmwVznhMRuJ4t7yK9zXmW%2Bpo0gsDWr49eVk5rR4BgVSiUrMZfJ6HwdpJx75mqGR1hp86%2FGxD8odyW4SRUsko9Ko6m24wiRT107TjvtMFvTOKMnQndR9nxlMkpJJ%2BPGj%2FOoHO9fb6lg5280sH8z6cIUdeOixrEYXXcTiXaOU80wxrQR9crqJUHjzIs9Qj0Vd%2BC0rr2lZj%2FU%2B5zUbuY%2BP%2B4BasT5tjn44QN8pM3XTESC0J7oQWD4%2FX1ferksnBSZ6PdPt%2FxzIwudjd4q%2B8xpSudSdIDh%2Flg7BrYG1E2Lfak79ZI%2FEVn1jYaxaHA4unDEsCx9p%2BGKF7ldMQEJH1zo88L1Yler2GYJ5OedkBmu0fH%2B6ktAnvrlhRycErXDDx8qXEBjqkAero5Gp%2BFitDCwWc3I5UXbigSLwcmoe3POVFwvrUcmAKg6rpRWHl80ZCs5aBmRUSUB5Sq3dDH1nopTc4Hxe60F38c%2BM%2BLMWo4DXgPKYEt8PXdksiD8gVndiAplypvy%2BtWTiPhwMvpsoVSkKX0RTWDaukQETlX1JKIa88i9tk4Nu9HMazKoxAxGruZ8IPNZaX6a4ldHwSNRb2vW%2FsS7lkh9OnnUDq&X-Amz-Signature=24fa876c56df7f7e92380d5be75dd42c3dddf66cd5a9f41b7759adecdc3f0552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNOCOSZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5yO21iYom%2BleofvGimnLIfbp0vkTVXXA7kSJ6OThX1wIhALK6VJsSqRJ0%2FgyRPNOK9BB0cBqsoft6FTs%2B6CjE417vKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBkHJDNbItB8M8bWcq3AMjen%2BwgABvRBrHWLACu%2FDHJ9tKFw2MyzXC6XYxzt0%2BWsjTHyBK22WENkKdS5c0U%2FevHQ0FMqfDclLS1lvdqfwdCPayhib0Xmbuy8kQgKxwum23JJC7C6w29yyAmDXRla%2FRt6QErqCpShCdXvYpok%2FLHwCm34s1wz5bqcg5ORh7gjHn33LIgvM9WcernnL4JbDRQTdRcNQ%2BbvaXs0UWY%2B0%2FDn18mjH0YTqb0mNIi9tkoLghahC4iICp7wok8TkRekgRpmwVznhMRuJ4t7yK9zXmW%2Bpo0gsDWr49eVk5rR4BgVSiUrMZfJ6HwdpJx75mqGR1hp86%2FGxD8odyW4SRUsko9Ko6m24wiRT107TjvtMFvTOKMnQndR9nxlMkpJJ%2BPGj%2FOoHO9fb6lg5280sH8z6cIUdeOixrEYXXcTiXaOU80wxrQR9crqJUHjzIs9Qj0Vd%2BC0rr2lZj%2FU%2B5zUbuY%2BP%2B4BasT5tjn44QN8pM3XTESC0J7oQWD4%2FX1ferksnBSZ6PdPt%2FxzIwudjd4q%2B8xpSudSdIDh%2Flg7BrYG1E2Lfak79ZI%2FEVn1jYaxaHA4unDEsCx9p%2BGKF7ldMQEJH1zo88L1Yler2GYJ5OedkBmu0fH%2B6ktAnvrlhRycErXDDx8qXEBjqkAero5Gp%2BFitDCwWc3I5UXbigSLwcmoe3POVFwvrUcmAKg6rpRWHl80ZCs5aBmRUSUB5Sq3dDH1nopTc4Hxe60F38c%2BM%2BLMWo4DXgPKYEt8PXdksiD8gVndiAplypvy%2BtWTiPhwMvpsoVSkKX0RTWDaukQETlX1JKIa88i9tk4Nu9HMazKoxAxGruZ8IPNZaX6a4ldHwSNRb2vW%2FsS7lkh9OnnUDq&X-Amz-Signature=8cfab47eaeafb5e12debfbb0c6beb043bbd3627c925e2128fba24cfd9696b168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNOCOSZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5yO21iYom%2BleofvGimnLIfbp0vkTVXXA7kSJ6OThX1wIhALK6VJsSqRJ0%2FgyRPNOK9BB0cBqsoft6FTs%2B6CjE417vKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBkHJDNbItB8M8bWcq3AMjen%2BwgABvRBrHWLACu%2FDHJ9tKFw2MyzXC6XYxzt0%2BWsjTHyBK22WENkKdS5c0U%2FevHQ0FMqfDclLS1lvdqfwdCPayhib0Xmbuy8kQgKxwum23JJC7C6w29yyAmDXRla%2FRt6QErqCpShCdXvYpok%2FLHwCm34s1wz5bqcg5ORh7gjHn33LIgvM9WcernnL4JbDRQTdRcNQ%2BbvaXs0UWY%2B0%2FDn18mjH0YTqb0mNIi9tkoLghahC4iICp7wok8TkRekgRpmwVznhMRuJ4t7yK9zXmW%2Bpo0gsDWr49eVk5rR4BgVSiUrMZfJ6HwdpJx75mqGR1hp86%2FGxD8odyW4SRUsko9Ko6m24wiRT107TjvtMFvTOKMnQndR9nxlMkpJJ%2BPGj%2FOoHO9fb6lg5280sH8z6cIUdeOixrEYXXcTiXaOU80wxrQR9crqJUHjzIs9Qj0Vd%2BC0rr2lZj%2FU%2B5zUbuY%2BP%2B4BasT5tjn44QN8pM3XTESC0J7oQWD4%2FX1ferksnBSZ6PdPt%2FxzIwudjd4q%2B8xpSudSdIDh%2Flg7BrYG1E2Lfak79ZI%2FEVn1jYaxaHA4unDEsCx9p%2BGKF7ldMQEJH1zo88L1Yler2GYJ5OedkBmu0fH%2B6ktAnvrlhRycErXDDx8qXEBjqkAero5Gp%2BFitDCwWc3I5UXbigSLwcmoe3POVFwvrUcmAKg6rpRWHl80ZCs5aBmRUSUB5Sq3dDH1nopTc4Hxe60F38c%2BM%2BLMWo4DXgPKYEt8PXdksiD8gVndiAplypvy%2BtWTiPhwMvpsoVSkKX0RTWDaukQETlX1JKIa88i9tk4Nu9HMazKoxAxGruZ8IPNZaX6a4ldHwSNRb2vW%2FsS7lkh9OnnUDq&X-Amz-Signature=6a7ad2c10692b7d84ed55d0f906ca6664cb88b372695cfda58a88c00e8f7902a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNOCOSZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5yO21iYom%2BleofvGimnLIfbp0vkTVXXA7kSJ6OThX1wIhALK6VJsSqRJ0%2FgyRPNOK9BB0cBqsoft6FTs%2B6CjE417vKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBkHJDNbItB8M8bWcq3AMjen%2BwgABvRBrHWLACu%2FDHJ9tKFw2MyzXC6XYxzt0%2BWsjTHyBK22WENkKdS5c0U%2FevHQ0FMqfDclLS1lvdqfwdCPayhib0Xmbuy8kQgKxwum23JJC7C6w29yyAmDXRla%2FRt6QErqCpShCdXvYpok%2FLHwCm34s1wz5bqcg5ORh7gjHn33LIgvM9WcernnL4JbDRQTdRcNQ%2BbvaXs0UWY%2B0%2FDn18mjH0YTqb0mNIi9tkoLghahC4iICp7wok8TkRekgRpmwVznhMRuJ4t7yK9zXmW%2Bpo0gsDWr49eVk5rR4BgVSiUrMZfJ6HwdpJx75mqGR1hp86%2FGxD8odyW4SRUsko9Ko6m24wiRT107TjvtMFvTOKMnQndR9nxlMkpJJ%2BPGj%2FOoHO9fb6lg5280sH8z6cIUdeOixrEYXXcTiXaOU80wxrQR9crqJUHjzIs9Qj0Vd%2BC0rr2lZj%2FU%2B5zUbuY%2BP%2B4BasT5tjn44QN8pM3XTESC0J7oQWD4%2FX1ferksnBSZ6PdPt%2FxzIwudjd4q%2B8xpSudSdIDh%2Flg7BrYG1E2Lfak79ZI%2FEVn1jYaxaHA4unDEsCx9p%2BGKF7ldMQEJH1zo88L1Yler2GYJ5OedkBmu0fH%2B6ktAnvrlhRycErXDDx8qXEBjqkAero5Gp%2BFitDCwWc3I5UXbigSLwcmoe3POVFwvrUcmAKg6rpRWHl80ZCs5aBmRUSUB5Sq3dDH1nopTc4Hxe60F38c%2BM%2BLMWo4DXgPKYEt8PXdksiD8gVndiAplypvy%2BtWTiPhwMvpsoVSkKX0RTWDaukQETlX1JKIa88i9tk4Nu9HMazKoxAxGruZ8IPNZaX6a4ldHwSNRb2vW%2FsS7lkh9OnnUDq&X-Amz-Signature=72fd6e15a81e76f1e821b03616dd67ff94cfcd93777c8ff49ab00101b144c080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNOCOSZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5yO21iYom%2BleofvGimnLIfbp0vkTVXXA7kSJ6OThX1wIhALK6VJsSqRJ0%2FgyRPNOK9BB0cBqsoft6FTs%2B6CjE417vKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBkHJDNbItB8M8bWcq3AMjen%2BwgABvRBrHWLACu%2FDHJ9tKFw2MyzXC6XYxzt0%2BWsjTHyBK22WENkKdS5c0U%2FevHQ0FMqfDclLS1lvdqfwdCPayhib0Xmbuy8kQgKxwum23JJC7C6w29yyAmDXRla%2FRt6QErqCpShCdXvYpok%2FLHwCm34s1wz5bqcg5ORh7gjHn33LIgvM9WcernnL4JbDRQTdRcNQ%2BbvaXs0UWY%2B0%2FDn18mjH0YTqb0mNIi9tkoLghahC4iICp7wok8TkRekgRpmwVznhMRuJ4t7yK9zXmW%2Bpo0gsDWr49eVk5rR4BgVSiUrMZfJ6HwdpJx75mqGR1hp86%2FGxD8odyW4SRUsko9Ko6m24wiRT107TjvtMFvTOKMnQndR9nxlMkpJJ%2BPGj%2FOoHO9fb6lg5280sH8z6cIUdeOixrEYXXcTiXaOU80wxrQR9crqJUHjzIs9Qj0Vd%2BC0rr2lZj%2FU%2B5zUbuY%2BP%2B4BasT5tjn44QN8pM3XTESC0J7oQWD4%2FX1ferksnBSZ6PdPt%2FxzIwudjd4q%2B8xpSudSdIDh%2Flg7BrYG1E2Lfak79ZI%2FEVn1jYaxaHA4unDEsCx9p%2BGKF7ldMQEJH1zo88L1Yler2GYJ5OedkBmu0fH%2B6ktAnvrlhRycErXDDx8qXEBjqkAero5Gp%2BFitDCwWc3I5UXbigSLwcmoe3POVFwvrUcmAKg6rpRWHl80ZCs5aBmRUSUB5Sq3dDH1nopTc4Hxe60F38c%2BM%2BLMWo4DXgPKYEt8PXdksiD8gVndiAplypvy%2BtWTiPhwMvpsoVSkKX0RTWDaukQETlX1JKIa88i9tk4Nu9HMazKoxAxGruZ8IPNZaX6a4ldHwSNRb2vW%2FsS7lkh9OnnUDq&X-Amz-Signature=a115ec97592c2968afb6648cf33f31055d19216d8c2a603f2ce3c719330c655e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNOCOSZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5yO21iYom%2BleofvGimnLIfbp0vkTVXXA7kSJ6OThX1wIhALK6VJsSqRJ0%2FgyRPNOK9BB0cBqsoft6FTs%2B6CjE417vKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBkHJDNbItB8M8bWcq3AMjen%2BwgABvRBrHWLACu%2FDHJ9tKFw2MyzXC6XYxzt0%2BWsjTHyBK22WENkKdS5c0U%2FevHQ0FMqfDclLS1lvdqfwdCPayhib0Xmbuy8kQgKxwum23JJC7C6w29yyAmDXRla%2FRt6QErqCpShCdXvYpok%2FLHwCm34s1wz5bqcg5ORh7gjHn33LIgvM9WcernnL4JbDRQTdRcNQ%2BbvaXs0UWY%2B0%2FDn18mjH0YTqb0mNIi9tkoLghahC4iICp7wok8TkRekgRpmwVznhMRuJ4t7yK9zXmW%2Bpo0gsDWr49eVk5rR4BgVSiUrMZfJ6HwdpJx75mqGR1hp86%2FGxD8odyW4SRUsko9Ko6m24wiRT107TjvtMFvTOKMnQndR9nxlMkpJJ%2BPGj%2FOoHO9fb6lg5280sH8z6cIUdeOixrEYXXcTiXaOU80wxrQR9crqJUHjzIs9Qj0Vd%2BC0rr2lZj%2FU%2B5zUbuY%2BP%2B4BasT5tjn44QN8pM3XTESC0J7oQWD4%2FX1ferksnBSZ6PdPt%2FxzIwudjd4q%2B8xpSudSdIDh%2Flg7BrYG1E2Lfak79ZI%2FEVn1jYaxaHA4unDEsCx9p%2BGKF7ldMQEJH1zo88L1Yler2GYJ5OedkBmu0fH%2B6ktAnvrlhRycErXDDx8qXEBjqkAero5Gp%2BFitDCwWc3I5UXbigSLwcmoe3POVFwvrUcmAKg6rpRWHl80ZCs5aBmRUSUB5Sq3dDH1nopTc4Hxe60F38c%2BM%2BLMWo4DXgPKYEt8PXdksiD8gVndiAplypvy%2BtWTiPhwMvpsoVSkKX0RTWDaukQETlX1JKIa88i9tk4Nu9HMazKoxAxGruZ8IPNZaX6a4ldHwSNRb2vW%2FsS7lkh9OnnUDq&X-Amz-Signature=0032edf1141f1f2b4e4b4c44b27c4259b88b71aa47b317dd58129976dde17048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNOCOSZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5yO21iYom%2BleofvGimnLIfbp0vkTVXXA7kSJ6OThX1wIhALK6VJsSqRJ0%2FgyRPNOK9BB0cBqsoft6FTs%2B6CjE417vKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBkHJDNbItB8M8bWcq3AMjen%2BwgABvRBrHWLACu%2FDHJ9tKFw2MyzXC6XYxzt0%2BWsjTHyBK22WENkKdS5c0U%2FevHQ0FMqfDclLS1lvdqfwdCPayhib0Xmbuy8kQgKxwum23JJC7C6w29yyAmDXRla%2FRt6QErqCpShCdXvYpok%2FLHwCm34s1wz5bqcg5ORh7gjHn33LIgvM9WcernnL4JbDRQTdRcNQ%2BbvaXs0UWY%2B0%2FDn18mjH0YTqb0mNIi9tkoLghahC4iICp7wok8TkRekgRpmwVznhMRuJ4t7yK9zXmW%2Bpo0gsDWr49eVk5rR4BgVSiUrMZfJ6HwdpJx75mqGR1hp86%2FGxD8odyW4SRUsko9Ko6m24wiRT107TjvtMFvTOKMnQndR9nxlMkpJJ%2BPGj%2FOoHO9fb6lg5280sH8z6cIUdeOixrEYXXcTiXaOU80wxrQR9crqJUHjzIs9Qj0Vd%2BC0rr2lZj%2FU%2B5zUbuY%2BP%2B4BasT5tjn44QN8pM3XTESC0J7oQWD4%2FX1ferksnBSZ6PdPt%2FxzIwudjd4q%2B8xpSudSdIDh%2Flg7BrYG1E2Lfak79ZI%2FEVn1jYaxaHA4unDEsCx9p%2BGKF7ldMQEJH1zo88L1Yler2GYJ5OedkBmu0fH%2B6ktAnvrlhRycErXDDx8qXEBjqkAero5Gp%2BFitDCwWc3I5UXbigSLwcmoe3POVFwvrUcmAKg6rpRWHl80ZCs5aBmRUSUB5Sq3dDH1nopTc4Hxe60F38c%2BM%2BLMWo4DXgPKYEt8PXdksiD8gVndiAplypvy%2BtWTiPhwMvpsoVSkKX0RTWDaukQETlX1JKIa88i9tk4Nu9HMazKoxAxGruZ8IPNZaX6a4ldHwSNRb2vW%2FsS7lkh9OnnUDq&X-Amz-Signature=ab27ef2eea8d2acc077b05aa61add8d32392a3218f274bad66a088047126cb15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
