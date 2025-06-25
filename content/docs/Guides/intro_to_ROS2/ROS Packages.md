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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDNCYJR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFXJX8eWLWq2RoUT7WKuHbe6ZjlMxc1T1xnbBmewIVpOAiAOj7Uwn%2F7br3P%2BjwNQMTaaK0EsZO1RRC1cYBG5APEAeCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMl%2FAzMsijx1DHAx5bKtwDSwJTp8tLFDHJ4N87ES%2BU1uZ72jHBDBZ49Ase8ktW4DdV6CqFX2KlFi6rsrp3f21z9YSEDb7IeeSIXcrOhaciZOZrbV1jT7flvVADyS%2F3j8pjOj%2BBUuBtn69sVRWvawNDgY2%2FqrlpUDM4cHw0bbp6noabVqBOP1KUQRzVFjRRi4RBVuuLpr5TfmWw353uWJrwHVh%2BtqePAvWSQeX9U43HlktXl0eqClnNzZ5%2FvHP6umIaZjMBlEYkLhVf6ebc51BlMIFbeUT6RhGG%2BKMdlcus3HSll%2FGtJVYMva27fFId21OprLL%2FZ0ObuAtx71KndbK7x7NKl%2BvoNFTUq5UtnCjO5ihdlcPg2QkWrMZbuDIdZ2YIOaGI2fBCSND1VU8AvK8fLtnRrjh%2BX4JIV%2BG9siRT2g41mAf2USVhaNHFcAKEWMKIETYbHpw6dM0N1rpXOTCGIAEaseCiXEcornz4ZABST8noe9nF8%2FRNntw6EWzNmeoQhdT%2FAye3sbZEmcXNKtUyCHxDnWUYsNwLFYbD4nNtqpwgshtx8Gg%2BsTRncl35onWtCTKT8eYut2I%2FnLCrJS1GxK2KSWQ%2BF0Zec2WBtV2VrxTYcVKK6kduu0w%2FguBm2UmiXRJR0hVGslF85XMw%2FbnxwgY6pgGSakyJcnbLsTn%2FwqSiljPmhv%2Fn%2F5Nf5LdSdyg2mzAJBTQKx1pxsQBK1cSToGMjaWUG25Tw9gzincG6%2FJlLLCaF96SQA0wjhuk%2FSm9GUIytbfoJuaYBGJ1UwSV6Zo1%2BUCmEbefyOkW91TIu5FpY1jhPU%2F9sZoD5b5nsfjECMDozVSnCAZliIyvHBRztI7cw5ffKMDCvpYJqMspJo1qnZVgbWM6iBgVf&X-Amz-Signature=eeb7b35bf6bb527ffbfa1c97ebd5cdc2876eb2b960890297beb91dae130b5b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDNCYJR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFXJX8eWLWq2RoUT7WKuHbe6ZjlMxc1T1xnbBmewIVpOAiAOj7Uwn%2F7br3P%2BjwNQMTaaK0EsZO1RRC1cYBG5APEAeCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMl%2FAzMsijx1DHAx5bKtwDSwJTp8tLFDHJ4N87ES%2BU1uZ72jHBDBZ49Ase8ktW4DdV6CqFX2KlFi6rsrp3f21z9YSEDb7IeeSIXcrOhaciZOZrbV1jT7flvVADyS%2F3j8pjOj%2BBUuBtn69sVRWvawNDgY2%2FqrlpUDM4cHw0bbp6noabVqBOP1KUQRzVFjRRi4RBVuuLpr5TfmWw353uWJrwHVh%2BtqePAvWSQeX9U43HlktXl0eqClnNzZ5%2FvHP6umIaZjMBlEYkLhVf6ebc51BlMIFbeUT6RhGG%2BKMdlcus3HSll%2FGtJVYMva27fFId21OprLL%2FZ0ObuAtx71KndbK7x7NKl%2BvoNFTUq5UtnCjO5ihdlcPg2QkWrMZbuDIdZ2YIOaGI2fBCSND1VU8AvK8fLtnRrjh%2BX4JIV%2BG9siRT2g41mAf2USVhaNHFcAKEWMKIETYbHpw6dM0N1rpXOTCGIAEaseCiXEcornz4ZABST8noe9nF8%2FRNntw6EWzNmeoQhdT%2FAye3sbZEmcXNKtUyCHxDnWUYsNwLFYbD4nNtqpwgshtx8Gg%2BsTRncl35onWtCTKT8eYut2I%2FnLCrJS1GxK2KSWQ%2BF0Zec2WBtV2VrxTYcVKK6kduu0w%2FguBm2UmiXRJR0hVGslF85XMw%2FbnxwgY6pgGSakyJcnbLsTn%2FwqSiljPmhv%2Fn%2F5Nf5LdSdyg2mzAJBTQKx1pxsQBK1cSToGMjaWUG25Tw9gzincG6%2FJlLLCaF96SQA0wjhuk%2FSm9GUIytbfoJuaYBGJ1UwSV6Zo1%2BUCmEbefyOkW91TIu5FpY1jhPU%2F9sZoD5b5nsfjECMDozVSnCAZliIyvHBRztI7cw5ffKMDCvpYJqMspJo1qnZVgbWM6iBgVf&X-Amz-Signature=2c5cdb1ddca00cf8dfe0a8b5247d5de695c284f26c77553a9ba48cb6e58ae72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDNCYJR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFXJX8eWLWq2RoUT7WKuHbe6ZjlMxc1T1xnbBmewIVpOAiAOj7Uwn%2F7br3P%2BjwNQMTaaK0EsZO1RRC1cYBG5APEAeCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMl%2FAzMsijx1DHAx5bKtwDSwJTp8tLFDHJ4N87ES%2BU1uZ72jHBDBZ49Ase8ktW4DdV6CqFX2KlFi6rsrp3f21z9YSEDb7IeeSIXcrOhaciZOZrbV1jT7flvVADyS%2F3j8pjOj%2BBUuBtn69sVRWvawNDgY2%2FqrlpUDM4cHw0bbp6noabVqBOP1KUQRzVFjRRi4RBVuuLpr5TfmWw353uWJrwHVh%2BtqePAvWSQeX9U43HlktXl0eqClnNzZ5%2FvHP6umIaZjMBlEYkLhVf6ebc51BlMIFbeUT6RhGG%2BKMdlcus3HSll%2FGtJVYMva27fFId21OprLL%2FZ0ObuAtx71KndbK7x7NKl%2BvoNFTUq5UtnCjO5ihdlcPg2QkWrMZbuDIdZ2YIOaGI2fBCSND1VU8AvK8fLtnRrjh%2BX4JIV%2BG9siRT2g41mAf2USVhaNHFcAKEWMKIETYbHpw6dM0N1rpXOTCGIAEaseCiXEcornz4ZABST8noe9nF8%2FRNntw6EWzNmeoQhdT%2FAye3sbZEmcXNKtUyCHxDnWUYsNwLFYbD4nNtqpwgshtx8Gg%2BsTRncl35onWtCTKT8eYut2I%2FnLCrJS1GxK2KSWQ%2BF0Zec2WBtV2VrxTYcVKK6kduu0w%2FguBm2UmiXRJR0hVGslF85XMw%2FbnxwgY6pgGSakyJcnbLsTn%2FwqSiljPmhv%2Fn%2F5Nf5LdSdyg2mzAJBTQKx1pxsQBK1cSToGMjaWUG25Tw9gzincG6%2FJlLLCaF96SQA0wjhuk%2FSm9GUIytbfoJuaYBGJ1UwSV6Zo1%2BUCmEbefyOkW91TIu5FpY1jhPU%2F9sZoD5b5nsfjECMDozVSnCAZliIyvHBRztI7cw5ffKMDCvpYJqMspJo1qnZVgbWM6iBgVf&X-Amz-Signature=a55de5c8a59a6c3870285363de04236673830a27b47ccb70df497923abbf75fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDNCYJR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFXJX8eWLWq2RoUT7WKuHbe6ZjlMxc1T1xnbBmewIVpOAiAOj7Uwn%2F7br3P%2BjwNQMTaaK0EsZO1RRC1cYBG5APEAeCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMl%2FAzMsijx1DHAx5bKtwDSwJTp8tLFDHJ4N87ES%2BU1uZ72jHBDBZ49Ase8ktW4DdV6CqFX2KlFi6rsrp3f21z9YSEDb7IeeSIXcrOhaciZOZrbV1jT7flvVADyS%2F3j8pjOj%2BBUuBtn69sVRWvawNDgY2%2FqrlpUDM4cHw0bbp6noabVqBOP1KUQRzVFjRRi4RBVuuLpr5TfmWw353uWJrwHVh%2BtqePAvWSQeX9U43HlktXl0eqClnNzZ5%2FvHP6umIaZjMBlEYkLhVf6ebc51BlMIFbeUT6RhGG%2BKMdlcus3HSll%2FGtJVYMva27fFId21OprLL%2FZ0ObuAtx71KndbK7x7NKl%2BvoNFTUq5UtnCjO5ihdlcPg2QkWrMZbuDIdZ2YIOaGI2fBCSND1VU8AvK8fLtnRrjh%2BX4JIV%2BG9siRT2g41mAf2USVhaNHFcAKEWMKIETYbHpw6dM0N1rpXOTCGIAEaseCiXEcornz4ZABST8noe9nF8%2FRNntw6EWzNmeoQhdT%2FAye3sbZEmcXNKtUyCHxDnWUYsNwLFYbD4nNtqpwgshtx8Gg%2BsTRncl35onWtCTKT8eYut2I%2FnLCrJS1GxK2KSWQ%2BF0Zec2WBtV2VrxTYcVKK6kduu0w%2FguBm2UmiXRJR0hVGslF85XMw%2FbnxwgY6pgGSakyJcnbLsTn%2FwqSiljPmhv%2Fn%2F5Nf5LdSdyg2mzAJBTQKx1pxsQBK1cSToGMjaWUG25Tw9gzincG6%2FJlLLCaF96SQA0wjhuk%2FSm9GUIytbfoJuaYBGJ1UwSV6Zo1%2BUCmEbefyOkW91TIu5FpY1jhPU%2F9sZoD5b5nsfjECMDozVSnCAZliIyvHBRztI7cw5ffKMDCvpYJqMspJo1qnZVgbWM6iBgVf&X-Amz-Signature=058a67493f0e8fc8247e35ef2ea893b4ada76796f4463403843a68418755cfa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDNCYJR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFXJX8eWLWq2RoUT7WKuHbe6ZjlMxc1T1xnbBmewIVpOAiAOj7Uwn%2F7br3P%2BjwNQMTaaK0EsZO1RRC1cYBG5APEAeCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMl%2FAzMsijx1DHAx5bKtwDSwJTp8tLFDHJ4N87ES%2BU1uZ72jHBDBZ49Ase8ktW4DdV6CqFX2KlFi6rsrp3f21z9YSEDb7IeeSIXcrOhaciZOZrbV1jT7flvVADyS%2F3j8pjOj%2BBUuBtn69sVRWvawNDgY2%2FqrlpUDM4cHw0bbp6noabVqBOP1KUQRzVFjRRi4RBVuuLpr5TfmWw353uWJrwHVh%2BtqePAvWSQeX9U43HlktXl0eqClnNzZ5%2FvHP6umIaZjMBlEYkLhVf6ebc51BlMIFbeUT6RhGG%2BKMdlcus3HSll%2FGtJVYMva27fFId21OprLL%2FZ0ObuAtx71KndbK7x7NKl%2BvoNFTUq5UtnCjO5ihdlcPg2QkWrMZbuDIdZ2YIOaGI2fBCSND1VU8AvK8fLtnRrjh%2BX4JIV%2BG9siRT2g41mAf2USVhaNHFcAKEWMKIETYbHpw6dM0N1rpXOTCGIAEaseCiXEcornz4ZABST8noe9nF8%2FRNntw6EWzNmeoQhdT%2FAye3sbZEmcXNKtUyCHxDnWUYsNwLFYbD4nNtqpwgshtx8Gg%2BsTRncl35onWtCTKT8eYut2I%2FnLCrJS1GxK2KSWQ%2BF0Zec2WBtV2VrxTYcVKK6kduu0w%2FguBm2UmiXRJR0hVGslF85XMw%2FbnxwgY6pgGSakyJcnbLsTn%2FwqSiljPmhv%2Fn%2F5Nf5LdSdyg2mzAJBTQKx1pxsQBK1cSToGMjaWUG25Tw9gzincG6%2FJlLLCaF96SQA0wjhuk%2FSm9GUIytbfoJuaYBGJ1UwSV6Zo1%2BUCmEbefyOkW91TIu5FpY1jhPU%2F9sZoD5b5nsfjECMDozVSnCAZliIyvHBRztI7cw5ffKMDCvpYJqMspJo1qnZVgbWM6iBgVf&X-Amz-Signature=64f5cbde43f914f2e9dacdd639077a06dba85676eafb3dae6b176266cd3ffdf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDNCYJR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFXJX8eWLWq2RoUT7WKuHbe6ZjlMxc1T1xnbBmewIVpOAiAOj7Uwn%2F7br3P%2BjwNQMTaaK0EsZO1RRC1cYBG5APEAeCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMl%2FAzMsijx1DHAx5bKtwDSwJTp8tLFDHJ4N87ES%2BU1uZ72jHBDBZ49Ase8ktW4DdV6CqFX2KlFi6rsrp3f21z9YSEDb7IeeSIXcrOhaciZOZrbV1jT7flvVADyS%2F3j8pjOj%2BBUuBtn69sVRWvawNDgY2%2FqrlpUDM4cHw0bbp6noabVqBOP1KUQRzVFjRRi4RBVuuLpr5TfmWw353uWJrwHVh%2BtqePAvWSQeX9U43HlktXl0eqClnNzZ5%2FvHP6umIaZjMBlEYkLhVf6ebc51BlMIFbeUT6RhGG%2BKMdlcus3HSll%2FGtJVYMva27fFId21OprLL%2FZ0ObuAtx71KndbK7x7NKl%2BvoNFTUq5UtnCjO5ihdlcPg2QkWrMZbuDIdZ2YIOaGI2fBCSND1VU8AvK8fLtnRrjh%2BX4JIV%2BG9siRT2g41mAf2USVhaNHFcAKEWMKIETYbHpw6dM0N1rpXOTCGIAEaseCiXEcornz4ZABST8noe9nF8%2FRNntw6EWzNmeoQhdT%2FAye3sbZEmcXNKtUyCHxDnWUYsNwLFYbD4nNtqpwgshtx8Gg%2BsTRncl35onWtCTKT8eYut2I%2FnLCrJS1GxK2KSWQ%2BF0Zec2WBtV2VrxTYcVKK6kduu0w%2FguBm2UmiXRJR0hVGslF85XMw%2FbnxwgY6pgGSakyJcnbLsTn%2FwqSiljPmhv%2Fn%2F5Nf5LdSdyg2mzAJBTQKx1pxsQBK1cSToGMjaWUG25Tw9gzincG6%2FJlLLCaF96SQA0wjhuk%2FSm9GUIytbfoJuaYBGJ1UwSV6Zo1%2BUCmEbefyOkW91TIu5FpY1jhPU%2F9sZoD5b5nsfjECMDozVSnCAZliIyvHBRztI7cw5ffKMDCvpYJqMspJo1qnZVgbWM6iBgVf&X-Amz-Signature=8d547fd00bdb90f33832288de7e86399a0c0842351681763fe49ed936b1e033e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDNCYJR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFXJX8eWLWq2RoUT7WKuHbe6ZjlMxc1T1xnbBmewIVpOAiAOj7Uwn%2F7br3P%2BjwNQMTaaK0EsZO1RRC1cYBG5APEAeCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMl%2FAzMsijx1DHAx5bKtwDSwJTp8tLFDHJ4N87ES%2BU1uZ72jHBDBZ49Ase8ktW4DdV6CqFX2KlFi6rsrp3f21z9YSEDb7IeeSIXcrOhaciZOZrbV1jT7flvVADyS%2F3j8pjOj%2BBUuBtn69sVRWvawNDgY2%2FqrlpUDM4cHw0bbp6noabVqBOP1KUQRzVFjRRi4RBVuuLpr5TfmWw353uWJrwHVh%2BtqePAvWSQeX9U43HlktXl0eqClnNzZ5%2FvHP6umIaZjMBlEYkLhVf6ebc51BlMIFbeUT6RhGG%2BKMdlcus3HSll%2FGtJVYMva27fFId21OprLL%2FZ0ObuAtx71KndbK7x7NKl%2BvoNFTUq5UtnCjO5ihdlcPg2QkWrMZbuDIdZ2YIOaGI2fBCSND1VU8AvK8fLtnRrjh%2BX4JIV%2BG9siRT2g41mAf2USVhaNHFcAKEWMKIETYbHpw6dM0N1rpXOTCGIAEaseCiXEcornz4ZABST8noe9nF8%2FRNntw6EWzNmeoQhdT%2FAye3sbZEmcXNKtUyCHxDnWUYsNwLFYbD4nNtqpwgshtx8Gg%2BsTRncl35onWtCTKT8eYut2I%2FnLCrJS1GxK2KSWQ%2BF0Zec2WBtV2VrxTYcVKK6kduu0w%2FguBm2UmiXRJR0hVGslF85XMw%2FbnxwgY6pgGSakyJcnbLsTn%2FwqSiljPmhv%2Fn%2F5Nf5LdSdyg2mzAJBTQKx1pxsQBK1cSToGMjaWUG25Tw9gzincG6%2FJlLLCaF96SQA0wjhuk%2FSm9GUIytbfoJuaYBGJ1UwSV6Zo1%2BUCmEbefyOkW91TIu5FpY1jhPU%2F9sZoD5b5nsfjECMDozVSnCAZliIyvHBRztI7cw5ffKMDCvpYJqMspJo1qnZVgbWM6iBgVf&X-Amz-Signature=ef81994b82db578935df8181c1992f5a7dc622e47bb3c12c5d330713f653f52c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
