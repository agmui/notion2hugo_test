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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWWZPV7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0xMbEo8Z8%2BlyjrpYPMSmz7b2R%2Ba%2Bd%2BkIfWbXt10wPTAIgCoacW0NpI%2FAVOwcFnyIGYpkCY7n9cXNFAKdog2HwZjAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELDeQLS1iPYK3NSqircA3kgbOcMTp1SXPUdUiQelITe4Cj1FrEjjpHQw7t2%2FAHJdqx1Az91SxY2pTqb1m%2FnbIvqqlWI4FSNXQ%2FQWVmyvTKZfHFfmcJvF%2Fb0v%2FPv677LZ0VkSotqejsBDYK%2BFU4q0yaHmWyfGCzZyfRVVYs8zYxO%2Fr1IeM%2BjeR4m6mIUtA4fyKx0Luzqw1dMBbRqMQrCZaJGF5Z1ZWyCI4QBdsSKWkszBnId1F%2Fums50akx0i1xZnFwEWDnwUnY4RWHqV%2BlC%2BXXvYrh11utm6rsrXMyGm3d%2BXc3IjU76awKrCYG12LDjLz18v4vE%2B3yghIEMNXp3L9p06JS7boFuvAnJmzM1ggjhmEsDDnHzK6Vs4vHgUzaHVMMDX5dHQ0%2FIXpzXsRGfzacCPuPuvoV3cp5mlZiBLhGkL1INipFOKS0vr6DC9DFnEn%2B60gEvq7dRCY2XaPaKdbpK4drcdyePAe44aVq969Rwg85mMe1SzPS0aKgMjyj7apTPo5TXeQpDFnPczdLChFcQ8J5%2FCKhgyygHFuCKjCYPEVWdYpv8%2BFX6xOV1GOUNrJE9cw1KcRfxQaCvB7QEnAlAf%2FAAk%2BjN7XvkCEGwTU2fIx%2FchgUxHssvl5c%2BVs4ZSydmVwnVIUQlQqNCMNmpicEGOqUBHtnIvEUt2osT5CT8uvy%2BTR3dV5cTBYLLjHQ%2FIc0ts5v%2FBVGD8xrNjq4LwsxX7pmNWKWg7ae%2BSzzwMvg565uOxMpmPkvt5GjVg5Nyslf8w%2B2guCmFyTW32w99FonljGml0fBw25onNVmMgIWAC4MfAYhlkvUrAZycwzkahCYtw9d%2BjxZaVJg5JZXL4JvNc%2BvDsS0Z21aMYhCSFZwM0k%2FGGMJwC3eL&X-Amz-Signature=59fd618fc5c3d53e931c942e1ca828d5291b246a12b0e7d65d0db131ff91fd2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWWZPV7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0xMbEo8Z8%2BlyjrpYPMSmz7b2R%2Ba%2Bd%2BkIfWbXt10wPTAIgCoacW0NpI%2FAVOwcFnyIGYpkCY7n9cXNFAKdog2HwZjAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELDeQLS1iPYK3NSqircA3kgbOcMTp1SXPUdUiQelITe4Cj1FrEjjpHQw7t2%2FAHJdqx1Az91SxY2pTqb1m%2FnbIvqqlWI4FSNXQ%2FQWVmyvTKZfHFfmcJvF%2Fb0v%2FPv677LZ0VkSotqejsBDYK%2BFU4q0yaHmWyfGCzZyfRVVYs8zYxO%2Fr1IeM%2BjeR4m6mIUtA4fyKx0Luzqw1dMBbRqMQrCZaJGF5Z1ZWyCI4QBdsSKWkszBnId1F%2Fums50akx0i1xZnFwEWDnwUnY4RWHqV%2BlC%2BXXvYrh11utm6rsrXMyGm3d%2BXc3IjU76awKrCYG12LDjLz18v4vE%2B3yghIEMNXp3L9p06JS7boFuvAnJmzM1ggjhmEsDDnHzK6Vs4vHgUzaHVMMDX5dHQ0%2FIXpzXsRGfzacCPuPuvoV3cp5mlZiBLhGkL1INipFOKS0vr6DC9DFnEn%2B60gEvq7dRCY2XaPaKdbpK4drcdyePAe44aVq969Rwg85mMe1SzPS0aKgMjyj7apTPo5TXeQpDFnPczdLChFcQ8J5%2FCKhgyygHFuCKjCYPEVWdYpv8%2BFX6xOV1GOUNrJE9cw1KcRfxQaCvB7QEnAlAf%2FAAk%2BjN7XvkCEGwTU2fIx%2FchgUxHssvl5c%2BVs4ZSydmVwnVIUQlQqNCMNmpicEGOqUBHtnIvEUt2osT5CT8uvy%2BTR3dV5cTBYLLjHQ%2FIc0ts5v%2FBVGD8xrNjq4LwsxX7pmNWKWg7ae%2BSzzwMvg565uOxMpmPkvt5GjVg5Nyslf8w%2B2guCmFyTW32w99FonljGml0fBw25onNVmMgIWAC4MfAYhlkvUrAZycwzkahCYtw9d%2BjxZaVJg5JZXL4JvNc%2BvDsS0Z21aMYhCSFZwM0k%2FGGMJwC3eL&X-Amz-Signature=897e1e1e462885780848a94533cd0a5c0359690c457cc1e268a14583a45ea5a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWWZPV7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0xMbEo8Z8%2BlyjrpYPMSmz7b2R%2Ba%2Bd%2BkIfWbXt10wPTAIgCoacW0NpI%2FAVOwcFnyIGYpkCY7n9cXNFAKdog2HwZjAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELDeQLS1iPYK3NSqircA3kgbOcMTp1SXPUdUiQelITe4Cj1FrEjjpHQw7t2%2FAHJdqx1Az91SxY2pTqb1m%2FnbIvqqlWI4FSNXQ%2FQWVmyvTKZfHFfmcJvF%2Fb0v%2FPv677LZ0VkSotqejsBDYK%2BFU4q0yaHmWyfGCzZyfRVVYs8zYxO%2Fr1IeM%2BjeR4m6mIUtA4fyKx0Luzqw1dMBbRqMQrCZaJGF5Z1ZWyCI4QBdsSKWkszBnId1F%2Fums50akx0i1xZnFwEWDnwUnY4RWHqV%2BlC%2BXXvYrh11utm6rsrXMyGm3d%2BXc3IjU76awKrCYG12LDjLz18v4vE%2B3yghIEMNXp3L9p06JS7boFuvAnJmzM1ggjhmEsDDnHzK6Vs4vHgUzaHVMMDX5dHQ0%2FIXpzXsRGfzacCPuPuvoV3cp5mlZiBLhGkL1INipFOKS0vr6DC9DFnEn%2B60gEvq7dRCY2XaPaKdbpK4drcdyePAe44aVq969Rwg85mMe1SzPS0aKgMjyj7apTPo5TXeQpDFnPczdLChFcQ8J5%2FCKhgyygHFuCKjCYPEVWdYpv8%2BFX6xOV1GOUNrJE9cw1KcRfxQaCvB7QEnAlAf%2FAAk%2BjN7XvkCEGwTU2fIx%2FchgUxHssvl5c%2BVs4ZSydmVwnVIUQlQqNCMNmpicEGOqUBHtnIvEUt2osT5CT8uvy%2BTR3dV5cTBYLLjHQ%2FIc0ts5v%2FBVGD8xrNjq4LwsxX7pmNWKWg7ae%2BSzzwMvg565uOxMpmPkvt5GjVg5Nyslf8w%2B2guCmFyTW32w99FonljGml0fBw25onNVmMgIWAC4MfAYhlkvUrAZycwzkahCYtw9d%2BjxZaVJg5JZXL4JvNc%2BvDsS0Z21aMYhCSFZwM0k%2FGGMJwC3eL&X-Amz-Signature=f1e19e7c63a909dc6c37b65ee17611a76e656db4144f918b56d66549a536fd1a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWWZPV7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0xMbEo8Z8%2BlyjrpYPMSmz7b2R%2Ba%2Bd%2BkIfWbXt10wPTAIgCoacW0NpI%2FAVOwcFnyIGYpkCY7n9cXNFAKdog2HwZjAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELDeQLS1iPYK3NSqircA3kgbOcMTp1SXPUdUiQelITe4Cj1FrEjjpHQw7t2%2FAHJdqx1Az91SxY2pTqb1m%2FnbIvqqlWI4FSNXQ%2FQWVmyvTKZfHFfmcJvF%2Fb0v%2FPv677LZ0VkSotqejsBDYK%2BFU4q0yaHmWyfGCzZyfRVVYs8zYxO%2Fr1IeM%2BjeR4m6mIUtA4fyKx0Luzqw1dMBbRqMQrCZaJGF5Z1ZWyCI4QBdsSKWkszBnId1F%2Fums50akx0i1xZnFwEWDnwUnY4RWHqV%2BlC%2BXXvYrh11utm6rsrXMyGm3d%2BXc3IjU76awKrCYG12LDjLz18v4vE%2B3yghIEMNXp3L9p06JS7boFuvAnJmzM1ggjhmEsDDnHzK6Vs4vHgUzaHVMMDX5dHQ0%2FIXpzXsRGfzacCPuPuvoV3cp5mlZiBLhGkL1INipFOKS0vr6DC9DFnEn%2B60gEvq7dRCY2XaPaKdbpK4drcdyePAe44aVq969Rwg85mMe1SzPS0aKgMjyj7apTPo5TXeQpDFnPczdLChFcQ8J5%2FCKhgyygHFuCKjCYPEVWdYpv8%2BFX6xOV1GOUNrJE9cw1KcRfxQaCvB7QEnAlAf%2FAAk%2BjN7XvkCEGwTU2fIx%2FchgUxHssvl5c%2BVs4ZSydmVwnVIUQlQqNCMNmpicEGOqUBHtnIvEUt2osT5CT8uvy%2BTR3dV5cTBYLLjHQ%2FIc0ts5v%2FBVGD8xrNjq4LwsxX7pmNWKWg7ae%2BSzzwMvg565uOxMpmPkvt5GjVg5Nyslf8w%2B2guCmFyTW32w99FonljGml0fBw25onNVmMgIWAC4MfAYhlkvUrAZycwzkahCYtw9d%2BjxZaVJg5JZXL4JvNc%2BvDsS0Z21aMYhCSFZwM0k%2FGGMJwC3eL&X-Amz-Signature=f61f94f97a28998bc20d15efe459d985cc84237f5dcdb2783b981e7de8ad058a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWWZPV7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0xMbEo8Z8%2BlyjrpYPMSmz7b2R%2Ba%2Bd%2BkIfWbXt10wPTAIgCoacW0NpI%2FAVOwcFnyIGYpkCY7n9cXNFAKdog2HwZjAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELDeQLS1iPYK3NSqircA3kgbOcMTp1SXPUdUiQelITe4Cj1FrEjjpHQw7t2%2FAHJdqx1Az91SxY2pTqb1m%2FnbIvqqlWI4FSNXQ%2FQWVmyvTKZfHFfmcJvF%2Fb0v%2FPv677LZ0VkSotqejsBDYK%2BFU4q0yaHmWyfGCzZyfRVVYs8zYxO%2Fr1IeM%2BjeR4m6mIUtA4fyKx0Luzqw1dMBbRqMQrCZaJGF5Z1ZWyCI4QBdsSKWkszBnId1F%2Fums50akx0i1xZnFwEWDnwUnY4RWHqV%2BlC%2BXXvYrh11utm6rsrXMyGm3d%2BXc3IjU76awKrCYG12LDjLz18v4vE%2B3yghIEMNXp3L9p06JS7boFuvAnJmzM1ggjhmEsDDnHzK6Vs4vHgUzaHVMMDX5dHQ0%2FIXpzXsRGfzacCPuPuvoV3cp5mlZiBLhGkL1INipFOKS0vr6DC9DFnEn%2B60gEvq7dRCY2XaPaKdbpK4drcdyePAe44aVq969Rwg85mMe1SzPS0aKgMjyj7apTPo5TXeQpDFnPczdLChFcQ8J5%2FCKhgyygHFuCKjCYPEVWdYpv8%2BFX6xOV1GOUNrJE9cw1KcRfxQaCvB7QEnAlAf%2FAAk%2BjN7XvkCEGwTU2fIx%2FchgUxHssvl5c%2BVs4ZSydmVwnVIUQlQqNCMNmpicEGOqUBHtnIvEUt2osT5CT8uvy%2BTR3dV5cTBYLLjHQ%2FIc0ts5v%2FBVGD8xrNjq4LwsxX7pmNWKWg7ae%2BSzzwMvg565uOxMpmPkvt5GjVg5Nyslf8w%2B2guCmFyTW32w99FonljGml0fBw25onNVmMgIWAC4MfAYhlkvUrAZycwzkahCYtw9d%2BjxZaVJg5JZXL4JvNc%2BvDsS0Z21aMYhCSFZwM0k%2FGGMJwC3eL&X-Amz-Signature=579ec3b06d80381955fe5399491e9d1eac74e4ae81a168630a30fd2763870a95&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWWZPV7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0xMbEo8Z8%2BlyjrpYPMSmz7b2R%2Ba%2Bd%2BkIfWbXt10wPTAIgCoacW0NpI%2FAVOwcFnyIGYpkCY7n9cXNFAKdog2HwZjAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELDeQLS1iPYK3NSqircA3kgbOcMTp1SXPUdUiQelITe4Cj1FrEjjpHQw7t2%2FAHJdqx1Az91SxY2pTqb1m%2FnbIvqqlWI4FSNXQ%2FQWVmyvTKZfHFfmcJvF%2Fb0v%2FPv677LZ0VkSotqejsBDYK%2BFU4q0yaHmWyfGCzZyfRVVYs8zYxO%2Fr1IeM%2BjeR4m6mIUtA4fyKx0Luzqw1dMBbRqMQrCZaJGF5Z1ZWyCI4QBdsSKWkszBnId1F%2Fums50akx0i1xZnFwEWDnwUnY4RWHqV%2BlC%2BXXvYrh11utm6rsrXMyGm3d%2BXc3IjU76awKrCYG12LDjLz18v4vE%2B3yghIEMNXp3L9p06JS7boFuvAnJmzM1ggjhmEsDDnHzK6Vs4vHgUzaHVMMDX5dHQ0%2FIXpzXsRGfzacCPuPuvoV3cp5mlZiBLhGkL1INipFOKS0vr6DC9DFnEn%2B60gEvq7dRCY2XaPaKdbpK4drcdyePAe44aVq969Rwg85mMe1SzPS0aKgMjyj7apTPo5TXeQpDFnPczdLChFcQ8J5%2FCKhgyygHFuCKjCYPEVWdYpv8%2BFX6xOV1GOUNrJE9cw1KcRfxQaCvB7QEnAlAf%2FAAk%2BjN7XvkCEGwTU2fIx%2FchgUxHssvl5c%2BVs4ZSydmVwnVIUQlQqNCMNmpicEGOqUBHtnIvEUt2osT5CT8uvy%2BTR3dV5cTBYLLjHQ%2FIc0ts5v%2FBVGD8xrNjq4LwsxX7pmNWKWg7ae%2BSzzwMvg565uOxMpmPkvt5GjVg5Nyslf8w%2B2guCmFyTW32w99FonljGml0fBw25onNVmMgIWAC4MfAYhlkvUrAZycwzkahCYtw9d%2BjxZaVJg5JZXL4JvNc%2BvDsS0Z21aMYhCSFZwM0k%2FGGMJwC3eL&X-Amz-Signature=bdb299e59e1366b919c4138d7599d6d7a348e23ab591e4c6544703bd6cca619c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWWZPV7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0xMbEo8Z8%2BlyjrpYPMSmz7b2R%2Ba%2Bd%2BkIfWbXt10wPTAIgCoacW0NpI%2FAVOwcFnyIGYpkCY7n9cXNFAKdog2HwZjAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELDeQLS1iPYK3NSqircA3kgbOcMTp1SXPUdUiQelITe4Cj1FrEjjpHQw7t2%2FAHJdqx1Az91SxY2pTqb1m%2FnbIvqqlWI4FSNXQ%2FQWVmyvTKZfHFfmcJvF%2Fb0v%2FPv677LZ0VkSotqejsBDYK%2BFU4q0yaHmWyfGCzZyfRVVYs8zYxO%2Fr1IeM%2BjeR4m6mIUtA4fyKx0Luzqw1dMBbRqMQrCZaJGF5Z1ZWyCI4QBdsSKWkszBnId1F%2Fums50akx0i1xZnFwEWDnwUnY4RWHqV%2BlC%2BXXvYrh11utm6rsrXMyGm3d%2BXc3IjU76awKrCYG12LDjLz18v4vE%2B3yghIEMNXp3L9p06JS7boFuvAnJmzM1ggjhmEsDDnHzK6Vs4vHgUzaHVMMDX5dHQ0%2FIXpzXsRGfzacCPuPuvoV3cp5mlZiBLhGkL1INipFOKS0vr6DC9DFnEn%2B60gEvq7dRCY2XaPaKdbpK4drcdyePAe44aVq969Rwg85mMe1SzPS0aKgMjyj7apTPo5TXeQpDFnPczdLChFcQ8J5%2FCKhgyygHFuCKjCYPEVWdYpv8%2BFX6xOV1GOUNrJE9cw1KcRfxQaCvB7QEnAlAf%2FAAk%2BjN7XvkCEGwTU2fIx%2FchgUxHssvl5c%2BVs4ZSydmVwnVIUQlQqNCMNmpicEGOqUBHtnIvEUt2osT5CT8uvy%2BTR3dV5cTBYLLjHQ%2FIc0ts5v%2FBVGD8xrNjq4LwsxX7pmNWKWg7ae%2BSzzwMvg565uOxMpmPkvt5GjVg5Nyslf8w%2B2guCmFyTW32w99FonljGml0fBw25onNVmMgIWAC4MfAYhlkvUrAZycwzkahCYtw9d%2BjxZaVJg5JZXL4JvNc%2BvDsS0Z21aMYhCSFZwM0k%2FGGMJwC3eL&X-Amz-Signature=895c56bbdcd5d68e6cdd28b971e378f54684ede728c92ad1c1dba98b89b7e3cd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
