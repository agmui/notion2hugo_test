---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUAJ4CP%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FH7w%2FRskP%2Bm7u1tIqFpaqI3%2FugJ1KEZKLJaB78XkLswIgYrimsqrDs6ICNqMAix6tzIO9fSSn291i5rsZZ4gGOrQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwM5UEAP1FEeldgeircA5HvUWp3%2FI9YFgxb%2B2LaV13q13WRE40mDmbW%2BVzJ4hvcRlWr8brZdMIxBt9OJOTP8v7wGXBb7C27IHNHSVpfLHja2JIpQ8H1IyiyMCp0IXugwdYowRTjkNcwGqeK0yyvl8IQWuLwOrJlZAmN2YAU1nA7B7AS%2FwByjNV%2BgED9nC%2F5xa7p2bgPNNCDsZJMFetqBuwsuTySo9yoWmIDY%2Bz%2FZrAnxjWUmD1Z8i72tNZ%2B4bjWTFtVTpgWcVPsG3vrVit8y4tuGQwxfU%2FFzy7K25Plc88HtMAM4jkU6is0vmyvcY5YWJRVBLhvpPxESNIbs6KPqlQq4xOEQ15PSmqkmHSapnxDLNfCpaXn5nUsLJL9d8e%2BhbzwMROOVo%2F5RbMiWMEBx%2FpE5R6gD2mZdTRW%2F%2FPS2Z%2BnlQLa7LhB62UFsxOgjiDtBB9nREcPvYWwaRdulLK5r5gYusoiW6eQizsnpy8ZZbf9NT7YnKWJjUI7hn8WXTV5loGLLbwk8QVYKw%2FYP3WAbUyrBC59B3vOO48OOAKVrzqdieyYcfG8MF3czWCIOMpLq0UpxaIBeryRKDmrT6PZQ%2FQvJ3%2BYjASJzlSfYYv9b5SeZbAYC%2F6TIO4apgppa55I9Cea%2BEaI3fhKsbLdML%2BwzdEGOqUBxGHNLNHr%2BAmSanIXWdZSWSRGORYNTzGCvdqvS%2Bq84w9%2BmC%2B4V34ugiwBAvls7KHzUIbSTnVK4nTVymBGc53yIVda8Soa9wfkgmaJzLXxrfsGBZMaOgwkYsoXEUk64NtQ%2BefhDFP0xMHItVaUo2B3J%2Bku9RjdURGu%2BdeLASRudkTH8gYp1m1SzH5Mdy4HbL5GEqbpd1u%2BwZpw6fMTNq1kz23OiPbg&X-Amz-Signature=b1ad58f39a58e39d74f04bd6059453993b5303d66a75509295454db5381a330e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUAJ4CP%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FH7w%2FRskP%2Bm7u1tIqFpaqI3%2FugJ1KEZKLJaB78XkLswIgYrimsqrDs6ICNqMAix6tzIO9fSSn291i5rsZZ4gGOrQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwM5UEAP1FEeldgeircA5HvUWp3%2FI9YFgxb%2B2LaV13q13WRE40mDmbW%2BVzJ4hvcRlWr8brZdMIxBt9OJOTP8v7wGXBb7C27IHNHSVpfLHja2JIpQ8H1IyiyMCp0IXugwdYowRTjkNcwGqeK0yyvl8IQWuLwOrJlZAmN2YAU1nA7B7AS%2FwByjNV%2BgED9nC%2F5xa7p2bgPNNCDsZJMFetqBuwsuTySo9yoWmIDY%2Bz%2FZrAnxjWUmD1Z8i72tNZ%2B4bjWTFtVTpgWcVPsG3vrVit8y4tuGQwxfU%2FFzy7K25Plc88HtMAM4jkU6is0vmyvcY5YWJRVBLhvpPxESNIbs6KPqlQq4xOEQ15PSmqkmHSapnxDLNfCpaXn5nUsLJL9d8e%2BhbzwMROOVo%2F5RbMiWMEBx%2FpE5R6gD2mZdTRW%2F%2FPS2Z%2BnlQLa7LhB62UFsxOgjiDtBB9nREcPvYWwaRdulLK5r5gYusoiW6eQizsnpy8ZZbf9NT7YnKWJjUI7hn8WXTV5loGLLbwk8QVYKw%2FYP3WAbUyrBC59B3vOO48OOAKVrzqdieyYcfG8MF3czWCIOMpLq0UpxaIBeryRKDmrT6PZQ%2FQvJ3%2BYjASJzlSfYYv9b5SeZbAYC%2F6TIO4apgppa55I9Cea%2BEaI3fhKsbLdML%2BwzdEGOqUBxGHNLNHr%2BAmSanIXWdZSWSRGORYNTzGCvdqvS%2Bq84w9%2BmC%2B4V34ugiwBAvls7KHzUIbSTnVK4nTVymBGc53yIVda8Soa9wfkgmaJzLXxrfsGBZMaOgwkYsoXEUk64NtQ%2BefhDFP0xMHItVaUo2B3J%2Bku9RjdURGu%2BdeLASRudkTH8gYp1m1SzH5Mdy4HbL5GEqbpd1u%2BwZpw6fMTNq1kz23OiPbg&X-Amz-Signature=9ccde1de0a6613eefbd516a43dc6a176c14a7dbff0a23ed59e98dc6dd60f56a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUAJ4CP%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FH7w%2FRskP%2Bm7u1tIqFpaqI3%2FugJ1KEZKLJaB78XkLswIgYrimsqrDs6ICNqMAix6tzIO9fSSn291i5rsZZ4gGOrQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwM5UEAP1FEeldgeircA5HvUWp3%2FI9YFgxb%2B2LaV13q13WRE40mDmbW%2BVzJ4hvcRlWr8brZdMIxBt9OJOTP8v7wGXBb7C27IHNHSVpfLHja2JIpQ8H1IyiyMCp0IXugwdYowRTjkNcwGqeK0yyvl8IQWuLwOrJlZAmN2YAU1nA7B7AS%2FwByjNV%2BgED9nC%2F5xa7p2bgPNNCDsZJMFetqBuwsuTySo9yoWmIDY%2Bz%2FZrAnxjWUmD1Z8i72tNZ%2B4bjWTFtVTpgWcVPsG3vrVit8y4tuGQwxfU%2FFzy7K25Plc88HtMAM4jkU6is0vmyvcY5YWJRVBLhvpPxESNIbs6KPqlQq4xOEQ15PSmqkmHSapnxDLNfCpaXn5nUsLJL9d8e%2BhbzwMROOVo%2F5RbMiWMEBx%2FpE5R6gD2mZdTRW%2F%2FPS2Z%2BnlQLa7LhB62UFsxOgjiDtBB9nREcPvYWwaRdulLK5r5gYusoiW6eQizsnpy8ZZbf9NT7YnKWJjUI7hn8WXTV5loGLLbwk8QVYKw%2FYP3WAbUyrBC59B3vOO48OOAKVrzqdieyYcfG8MF3czWCIOMpLq0UpxaIBeryRKDmrT6PZQ%2FQvJ3%2BYjASJzlSfYYv9b5SeZbAYC%2F6TIO4apgppa55I9Cea%2BEaI3fhKsbLdML%2BwzdEGOqUBxGHNLNHr%2BAmSanIXWdZSWSRGORYNTzGCvdqvS%2Bq84w9%2BmC%2B4V34ugiwBAvls7KHzUIbSTnVK4nTVymBGc53yIVda8Soa9wfkgmaJzLXxrfsGBZMaOgwkYsoXEUk64NtQ%2BefhDFP0xMHItVaUo2B3J%2Bku9RjdURGu%2BdeLASRudkTH8gYp1m1SzH5Mdy4HbL5GEqbpd1u%2BwZpw6fMTNq1kz23OiPbg&X-Amz-Signature=0e84307660e93ed2034b6c75ff394e17c6c4f54a59703da973ebae638b72747b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUAJ4CP%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FH7w%2FRskP%2Bm7u1tIqFpaqI3%2FugJ1KEZKLJaB78XkLswIgYrimsqrDs6ICNqMAix6tzIO9fSSn291i5rsZZ4gGOrQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwM5UEAP1FEeldgeircA5HvUWp3%2FI9YFgxb%2B2LaV13q13WRE40mDmbW%2BVzJ4hvcRlWr8brZdMIxBt9OJOTP8v7wGXBb7C27IHNHSVpfLHja2JIpQ8H1IyiyMCp0IXugwdYowRTjkNcwGqeK0yyvl8IQWuLwOrJlZAmN2YAU1nA7B7AS%2FwByjNV%2BgED9nC%2F5xa7p2bgPNNCDsZJMFetqBuwsuTySo9yoWmIDY%2Bz%2FZrAnxjWUmD1Z8i72tNZ%2B4bjWTFtVTpgWcVPsG3vrVit8y4tuGQwxfU%2FFzy7K25Plc88HtMAM4jkU6is0vmyvcY5YWJRVBLhvpPxESNIbs6KPqlQq4xOEQ15PSmqkmHSapnxDLNfCpaXn5nUsLJL9d8e%2BhbzwMROOVo%2F5RbMiWMEBx%2FpE5R6gD2mZdTRW%2F%2FPS2Z%2BnlQLa7LhB62UFsxOgjiDtBB9nREcPvYWwaRdulLK5r5gYusoiW6eQizsnpy8ZZbf9NT7YnKWJjUI7hn8WXTV5loGLLbwk8QVYKw%2FYP3WAbUyrBC59B3vOO48OOAKVrzqdieyYcfG8MF3czWCIOMpLq0UpxaIBeryRKDmrT6PZQ%2FQvJ3%2BYjASJzlSfYYv9b5SeZbAYC%2F6TIO4apgppa55I9Cea%2BEaI3fhKsbLdML%2BwzdEGOqUBxGHNLNHr%2BAmSanIXWdZSWSRGORYNTzGCvdqvS%2Bq84w9%2BmC%2B4V34ugiwBAvls7KHzUIbSTnVK4nTVymBGc53yIVda8Soa9wfkgmaJzLXxrfsGBZMaOgwkYsoXEUk64NtQ%2BefhDFP0xMHItVaUo2B3J%2Bku9RjdURGu%2BdeLASRudkTH8gYp1m1SzH5Mdy4HbL5GEqbpd1u%2BwZpw6fMTNq1kz23OiPbg&X-Amz-Signature=9d8212a5eb1006ea0f4bf5f2b5494c3b46b5238f1a5fa2071bbb84e4258daca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUAJ4CP%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FH7w%2FRskP%2Bm7u1tIqFpaqI3%2FugJ1KEZKLJaB78XkLswIgYrimsqrDs6ICNqMAix6tzIO9fSSn291i5rsZZ4gGOrQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwM5UEAP1FEeldgeircA5HvUWp3%2FI9YFgxb%2B2LaV13q13WRE40mDmbW%2BVzJ4hvcRlWr8brZdMIxBt9OJOTP8v7wGXBb7C27IHNHSVpfLHja2JIpQ8H1IyiyMCp0IXugwdYowRTjkNcwGqeK0yyvl8IQWuLwOrJlZAmN2YAU1nA7B7AS%2FwByjNV%2BgED9nC%2F5xa7p2bgPNNCDsZJMFetqBuwsuTySo9yoWmIDY%2Bz%2FZrAnxjWUmD1Z8i72tNZ%2B4bjWTFtVTpgWcVPsG3vrVit8y4tuGQwxfU%2FFzy7K25Plc88HtMAM4jkU6is0vmyvcY5YWJRVBLhvpPxESNIbs6KPqlQq4xOEQ15PSmqkmHSapnxDLNfCpaXn5nUsLJL9d8e%2BhbzwMROOVo%2F5RbMiWMEBx%2FpE5R6gD2mZdTRW%2F%2FPS2Z%2BnlQLa7LhB62UFsxOgjiDtBB9nREcPvYWwaRdulLK5r5gYusoiW6eQizsnpy8ZZbf9NT7YnKWJjUI7hn8WXTV5loGLLbwk8QVYKw%2FYP3WAbUyrBC59B3vOO48OOAKVrzqdieyYcfG8MF3czWCIOMpLq0UpxaIBeryRKDmrT6PZQ%2FQvJ3%2BYjASJzlSfYYv9b5SeZbAYC%2F6TIO4apgppa55I9Cea%2BEaI3fhKsbLdML%2BwzdEGOqUBxGHNLNHr%2BAmSanIXWdZSWSRGORYNTzGCvdqvS%2Bq84w9%2BmC%2B4V34ugiwBAvls7KHzUIbSTnVK4nTVymBGc53yIVda8Soa9wfkgmaJzLXxrfsGBZMaOgwkYsoXEUk64NtQ%2BefhDFP0xMHItVaUo2B3J%2Bku9RjdURGu%2BdeLASRudkTH8gYp1m1SzH5Mdy4HbL5GEqbpd1u%2BwZpw6fMTNq1kz23OiPbg&X-Amz-Signature=3fb6b6c05c2da52373da55e1983d01d99b572618d22c1788275990da58808268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUAJ4CP%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FH7w%2FRskP%2Bm7u1tIqFpaqI3%2FugJ1KEZKLJaB78XkLswIgYrimsqrDs6ICNqMAix6tzIO9fSSn291i5rsZZ4gGOrQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwM5UEAP1FEeldgeircA5HvUWp3%2FI9YFgxb%2B2LaV13q13WRE40mDmbW%2BVzJ4hvcRlWr8brZdMIxBt9OJOTP8v7wGXBb7C27IHNHSVpfLHja2JIpQ8H1IyiyMCp0IXugwdYowRTjkNcwGqeK0yyvl8IQWuLwOrJlZAmN2YAU1nA7B7AS%2FwByjNV%2BgED9nC%2F5xa7p2bgPNNCDsZJMFetqBuwsuTySo9yoWmIDY%2Bz%2FZrAnxjWUmD1Z8i72tNZ%2B4bjWTFtVTpgWcVPsG3vrVit8y4tuGQwxfU%2FFzy7K25Plc88HtMAM4jkU6is0vmyvcY5YWJRVBLhvpPxESNIbs6KPqlQq4xOEQ15PSmqkmHSapnxDLNfCpaXn5nUsLJL9d8e%2BhbzwMROOVo%2F5RbMiWMEBx%2FpE5R6gD2mZdTRW%2F%2FPS2Z%2BnlQLa7LhB62UFsxOgjiDtBB9nREcPvYWwaRdulLK5r5gYusoiW6eQizsnpy8ZZbf9NT7YnKWJjUI7hn8WXTV5loGLLbwk8QVYKw%2FYP3WAbUyrBC59B3vOO48OOAKVrzqdieyYcfG8MF3czWCIOMpLq0UpxaIBeryRKDmrT6PZQ%2FQvJ3%2BYjASJzlSfYYv9b5SeZbAYC%2F6TIO4apgppa55I9Cea%2BEaI3fhKsbLdML%2BwzdEGOqUBxGHNLNHr%2BAmSanIXWdZSWSRGORYNTzGCvdqvS%2Bq84w9%2BmC%2B4V34ugiwBAvls7KHzUIbSTnVK4nTVymBGc53yIVda8Soa9wfkgmaJzLXxrfsGBZMaOgwkYsoXEUk64NtQ%2BefhDFP0xMHItVaUo2B3J%2Bku9RjdURGu%2BdeLASRudkTH8gYp1m1SzH5Mdy4HbL5GEqbpd1u%2BwZpw6fMTNq1kz23OiPbg&X-Amz-Signature=4baf3cab80aa954c331326d10df6b3770b59ceeb19b52343fc998af3a2f7f21d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUAJ4CP%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FH7w%2FRskP%2Bm7u1tIqFpaqI3%2FugJ1KEZKLJaB78XkLswIgYrimsqrDs6ICNqMAix6tzIO9fSSn291i5rsZZ4gGOrQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwM5UEAP1FEeldgeircA5HvUWp3%2FI9YFgxb%2B2LaV13q13WRE40mDmbW%2BVzJ4hvcRlWr8brZdMIxBt9OJOTP8v7wGXBb7C27IHNHSVpfLHja2JIpQ8H1IyiyMCp0IXugwdYowRTjkNcwGqeK0yyvl8IQWuLwOrJlZAmN2YAU1nA7B7AS%2FwByjNV%2BgED9nC%2F5xa7p2bgPNNCDsZJMFetqBuwsuTySo9yoWmIDY%2Bz%2FZrAnxjWUmD1Z8i72tNZ%2B4bjWTFtVTpgWcVPsG3vrVit8y4tuGQwxfU%2FFzy7K25Plc88HtMAM4jkU6is0vmyvcY5YWJRVBLhvpPxESNIbs6KPqlQq4xOEQ15PSmqkmHSapnxDLNfCpaXn5nUsLJL9d8e%2BhbzwMROOVo%2F5RbMiWMEBx%2FpE5R6gD2mZdTRW%2F%2FPS2Z%2BnlQLa7LhB62UFsxOgjiDtBB9nREcPvYWwaRdulLK5r5gYusoiW6eQizsnpy8ZZbf9NT7YnKWJjUI7hn8WXTV5loGLLbwk8QVYKw%2FYP3WAbUyrBC59B3vOO48OOAKVrzqdieyYcfG8MF3czWCIOMpLq0UpxaIBeryRKDmrT6PZQ%2FQvJ3%2BYjASJzlSfYYv9b5SeZbAYC%2F6TIO4apgppa55I9Cea%2BEaI3fhKsbLdML%2BwzdEGOqUBxGHNLNHr%2BAmSanIXWdZSWSRGORYNTzGCvdqvS%2Bq84w9%2BmC%2B4V34ugiwBAvls7KHzUIbSTnVK4nTVymBGc53yIVda8Soa9wfkgmaJzLXxrfsGBZMaOgwkYsoXEUk64NtQ%2BefhDFP0xMHItVaUo2B3J%2Bku9RjdURGu%2BdeLASRudkTH8gYp1m1SzH5Mdy4HbL5GEqbpd1u%2BwZpw6fMTNq1kz23OiPbg&X-Amz-Signature=866b2fdff4ec512704e9c4a3693fa4fd80efe1b37572a2cf741cd35a75863a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
