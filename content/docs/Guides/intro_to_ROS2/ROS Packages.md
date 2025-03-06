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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P75IR3B%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauegtQjS77izegBibP0V0eXR8HZTlNwVHVasuWtXlwIgSbXaZSJDcijCHhr0UwBTbkRUH5rMRFIEv6CQ3akOKBwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGcpv%2BzFvrSxNxdezSrcAxijIJvZDfs7%2FWDMuGTmfjemdEKPUSRWRNg%2BdU%2B6iOPWFziie7Z2TlS9lsm0bEbijjNzrREcCBhsFAydfciiY%2F%2FyTQ2LrH9k78GOFPS76EBnAtSdFoRicyIezqq2%2B5YbIOL8FPkiUcIgR35bM1SjoMx%2BZvDM7KuJsurNUg1CIIKGLKwD1yq3sOnviqr8t%2BairEAzT8lhWSmNaluC%2FnDv39aLNtflP8jATNnNSKEt98fM2wLZVcYcuznfw6sXAh0%2FlSaaY6KpCuT97rlmTtTjVJKCtSWoQLgwn%2FrtS3acP8JnQsZfErs6bE%2BNYfAHWzD20%2B%2BMagujJtkl82uw6kXPV4joe31soxfh3Nr0S06jcItoBelbM4xC%2FMkXhQrUd5WEWZABPPqMyd1iW%2FOb5VL%2BnjkzdtpwO3Z1U9yrn2x%2FgxiEZRAA1%2F12940WHK7UwEB3Q1MqnZSJuC0F5eNbIMsf0govWoO1j4eJRLK0zch7pQ3CEZ2P9FddrbnfJd2U9WY4H50qJVWXS8QLgIh1aSEt4hGOvQBhOPmewmuA1EzxgJU9VDOCHvtAZneX3LYdoE6VfdJqrwmMW4FHuFfdFjmf6PfT8vqatOxYeiFi%2BpV%2BlwSqzvP3exzvKvxXOBWdMOrPpr4GOqUBde4azBzJPvMrdlFzBL5%2FTxxR8%2BsPWg1KFuLDzofsGz1gtwlG5arqzUQX5O%2BfuiL40H8zIzBenL8%2FoZ1Uaj7zqMW7dcGT505VGgXFAEmhGY5%2BUbVtMxrWI%2F0jQ7nJj088YqtW3V6Qrmk7E4%2B5yY6Mm2zPm8Ea05ad2esSCsVANsapdTHffidolb24m2egpygUORMSRIwot651Hu9uNYEqgUYh0Yxl&X-Amz-Signature=ed6cd6d9ca83546cc0fe5f1c33e727b5f5788923a420d518d05bd89f60352738&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P75IR3B%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauegtQjS77izegBibP0V0eXR8HZTlNwVHVasuWtXlwIgSbXaZSJDcijCHhr0UwBTbkRUH5rMRFIEv6CQ3akOKBwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGcpv%2BzFvrSxNxdezSrcAxijIJvZDfs7%2FWDMuGTmfjemdEKPUSRWRNg%2BdU%2B6iOPWFziie7Z2TlS9lsm0bEbijjNzrREcCBhsFAydfciiY%2F%2FyTQ2LrH9k78GOFPS76EBnAtSdFoRicyIezqq2%2B5YbIOL8FPkiUcIgR35bM1SjoMx%2BZvDM7KuJsurNUg1CIIKGLKwD1yq3sOnviqr8t%2BairEAzT8lhWSmNaluC%2FnDv39aLNtflP8jATNnNSKEt98fM2wLZVcYcuznfw6sXAh0%2FlSaaY6KpCuT97rlmTtTjVJKCtSWoQLgwn%2FrtS3acP8JnQsZfErs6bE%2BNYfAHWzD20%2B%2BMagujJtkl82uw6kXPV4joe31soxfh3Nr0S06jcItoBelbM4xC%2FMkXhQrUd5WEWZABPPqMyd1iW%2FOb5VL%2BnjkzdtpwO3Z1U9yrn2x%2FgxiEZRAA1%2F12940WHK7UwEB3Q1MqnZSJuC0F5eNbIMsf0govWoO1j4eJRLK0zch7pQ3CEZ2P9FddrbnfJd2U9WY4H50qJVWXS8QLgIh1aSEt4hGOvQBhOPmewmuA1EzxgJU9VDOCHvtAZneX3LYdoE6VfdJqrwmMW4FHuFfdFjmf6PfT8vqatOxYeiFi%2BpV%2BlwSqzvP3exzvKvxXOBWdMOrPpr4GOqUBde4azBzJPvMrdlFzBL5%2FTxxR8%2BsPWg1KFuLDzofsGz1gtwlG5arqzUQX5O%2BfuiL40H8zIzBenL8%2FoZ1Uaj7zqMW7dcGT505VGgXFAEmhGY5%2BUbVtMxrWI%2F0jQ7nJj088YqtW3V6Qrmk7E4%2B5yY6Mm2zPm8Ea05ad2esSCsVANsapdTHffidolb24m2egpygUORMSRIwot651Hu9uNYEqgUYh0Yxl&X-Amz-Signature=5f0b7fb65c2dbb915c5cc8664bd3f7c9e07d2074e5b5502ceb4898a0af8edec4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P75IR3B%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauegtQjS77izegBibP0V0eXR8HZTlNwVHVasuWtXlwIgSbXaZSJDcijCHhr0UwBTbkRUH5rMRFIEv6CQ3akOKBwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGcpv%2BzFvrSxNxdezSrcAxijIJvZDfs7%2FWDMuGTmfjemdEKPUSRWRNg%2BdU%2B6iOPWFziie7Z2TlS9lsm0bEbijjNzrREcCBhsFAydfciiY%2F%2FyTQ2LrH9k78GOFPS76EBnAtSdFoRicyIezqq2%2B5YbIOL8FPkiUcIgR35bM1SjoMx%2BZvDM7KuJsurNUg1CIIKGLKwD1yq3sOnviqr8t%2BairEAzT8lhWSmNaluC%2FnDv39aLNtflP8jATNnNSKEt98fM2wLZVcYcuznfw6sXAh0%2FlSaaY6KpCuT97rlmTtTjVJKCtSWoQLgwn%2FrtS3acP8JnQsZfErs6bE%2BNYfAHWzD20%2B%2BMagujJtkl82uw6kXPV4joe31soxfh3Nr0S06jcItoBelbM4xC%2FMkXhQrUd5WEWZABPPqMyd1iW%2FOb5VL%2BnjkzdtpwO3Z1U9yrn2x%2FgxiEZRAA1%2F12940WHK7UwEB3Q1MqnZSJuC0F5eNbIMsf0govWoO1j4eJRLK0zch7pQ3CEZ2P9FddrbnfJd2U9WY4H50qJVWXS8QLgIh1aSEt4hGOvQBhOPmewmuA1EzxgJU9VDOCHvtAZneX3LYdoE6VfdJqrwmMW4FHuFfdFjmf6PfT8vqatOxYeiFi%2BpV%2BlwSqzvP3exzvKvxXOBWdMOrPpr4GOqUBde4azBzJPvMrdlFzBL5%2FTxxR8%2BsPWg1KFuLDzofsGz1gtwlG5arqzUQX5O%2BfuiL40H8zIzBenL8%2FoZ1Uaj7zqMW7dcGT505VGgXFAEmhGY5%2BUbVtMxrWI%2F0jQ7nJj088YqtW3V6Qrmk7E4%2B5yY6Mm2zPm8Ea05ad2esSCsVANsapdTHffidolb24m2egpygUORMSRIwot651Hu9uNYEqgUYh0Yxl&X-Amz-Signature=01117b976d41930c9cdc9935b18f2626227a86ce95573d151a79ecc974662abb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P75IR3B%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauegtQjS77izegBibP0V0eXR8HZTlNwVHVasuWtXlwIgSbXaZSJDcijCHhr0UwBTbkRUH5rMRFIEv6CQ3akOKBwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGcpv%2BzFvrSxNxdezSrcAxijIJvZDfs7%2FWDMuGTmfjemdEKPUSRWRNg%2BdU%2B6iOPWFziie7Z2TlS9lsm0bEbijjNzrREcCBhsFAydfciiY%2F%2FyTQ2LrH9k78GOFPS76EBnAtSdFoRicyIezqq2%2B5YbIOL8FPkiUcIgR35bM1SjoMx%2BZvDM7KuJsurNUg1CIIKGLKwD1yq3sOnviqr8t%2BairEAzT8lhWSmNaluC%2FnDv39aLNtflP8jATNnNSKEt98fM2wLZVcYcuznfw6sXAh0%2FlSaaY6KpCuT97rlmTtTjVJKCtSWoQLgwn%2FrtS3acP8JnQsZfErs6bE%2BNYfAHWzD20%2B%2BMagujJtkl82uw6kXPV4joe31soxfh3Nr0S06jcItoBelbM4xC%2FMkXhQrUd5WEWZABPPqMyd1iW%2FOb5VL%2BnjkzdtpwO3Z1U9yrn2x%2FgxiEZRAA1%2F12940WHK7UwEB3Q1MqnZSJuC0F5eNbIMsf0govWoO1j4eJRLK0zch7pQ3CEZ2P9FddrbnfJd2U9WY4H50qJVWXS8QLgIh1aSEt4hGOvQBhOPmewmuA1EzxgJU9VDOCHvtAZneX3LYdoE6VfdJqrwmMW4FHuFfdFjmf6PfT8vqatOxYeiFi%2BpV%2BlwSqzvP3exzvKvxXOBWdMOrPpr4GOqUBde4azBzJPvMrdlFzBL5%2FTxxR8%2BsPWg1KFuLDzofsGz1gtwlG5arqzUQX5O%2BfuiL40H8zIzBenL8%2FoZ1Uaj7zqMW7dcGT505VGgXFAEmhGY5%2BUbVtMxrWI%2F0jQ7nJj088YqtW3V6Qrmk7E4%2B5yY6Mm2zPm8Ea05ad2esSCsVANsapdTHffidolb24m2egpygUORMSRIwot651Hu9uNYEqgUYh0Yxl&X-Amz-Signature=d84062a3c06623e7171f6e8be6d5e2f9981a440c44b30bb6a865bfd1bfdf73ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P75IR3B%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauegtQjS77izegBibP0V0eXR8HZTlNwVHVasuWtXlwIgSbXaZSJDcijCHhr0UwBTbkRUH5rMRFIEv6CQ3akOKBwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGcpv%2BzFvrSxNxdezSrcAxijIJvZDfs7%2FWDMuGTmfjemdEKPUSRWRNg%2BdU%2B6iOPWFziie7Z2TlS9lsm0bEbijjNzrREcCBhsFAydfciiY%2F%2FyTQ2LrH9k78GOFPS76EBnAtSdFoRicyIezqq2%2B5YbIOL8FPkiUcIgR35bM1SjoMx%2BZvDM7KuJsurNUg1CIIKGLKwD1yq3sOnviqr8t%2BairEAzT8lhWSmNaluC%2FnDv39aLNtflP8jATNnNSKEt98fM2wLZVcYcuznfw6sXAh0%2FlSaaY6KpCuT97rlmTtTjVJKCtSWoQLgwn%2FrtS3acP8JnQsZfErs6bE%2BNYfAHWzD20%2B%2BMagujJtkl82uw6kXPV4joe31soxfh3Nr0S06jcItoBelbM4xC%2FMkXhQrUd5WEWZABPPqMyd1iW%2FOb5VL%2BnjkzdtpwO3Z1U9yrn2x%2FgxiEZRAA1%2F12940WHK7UwEB3Q1MqnZSJuC0F5eNbIMsf0govWoO1j4eJRLK0zch7pQ3CEZ2P9FddrbnfJd2U9WY4H50qJVWXS8QLgIh1aSEt4hGOvQBhOPmewmuA1EzxgJU9VDOCHvtAZneX3LYdoE6VfdJqrwmMW4FHuFfdFjmf6PfT8vqatOxYeiFi%2BpV%2BlwSqzvP3exzvKvxXOBWdMOrPpr4GOqUBde4azBzJPvMrdlFzBL5%2FTxxR8%2BsPWg1KFuLDzofsGz1gtwlG5arqzUQX5O%2BfuiL40H8zIzBenL8%2FoZ1Uaj7zqMW7dcGT505VGgXFAEmhGY5%2BUbVtMxrWI%2F0jQ7nJj088YqtW3V6Qrmk7E4%2B5yY6Mm2zPm8Ea05ad2esSCsVANsapdTHffidolb24m2egpygUORMSRIwot651Hu9uNYEqgUYh0Yxl&X-Amz-Signature=2e0fd86418b56518b515ca28c5f211a1f40b6dfcb2a0bd7b60e38da1af00c5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P75IR3B%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauegtQjS77izegBibP0V0eXR8HZTlNwVHVasuWtXlwIgSbXaZSJDcijCHhr0UwBTbkRUH5rMRFIEv6CQ3akOKBwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGcpv%2BzFvrSxNxdezSrcAxijIJvZDfs7%2FWDMuGTmfjemdEKPUSRWRNg%2BdU%2B6iOPWFziie7Z2TlS9lsm0bEbijjNzrREcCBhsFAydfciiY%2F%2FyTQ2LrH9k78GOFPS76EBnAtSdFoRicyIezqq2%2B5YbIOL8FPkiUcIgR35bM1SjoMx%2BZvDM7KuJsurNUg1CIIKGLKwD1yq3sOnviqr8t%2BairEAzT8lhWSmNaluC%2FnDv39aLNtflP8jATNnNSKEt98fM2wLZVcYcuznfw6sXAh0%2FlSaaY6KpCuT97rlmTtTjVJKCtSWoQLgwn%2FrtS3acP8JnQsZfErs6bE%2BNYfAHWzD20%2B%2BMagujJtkl82uw6kXPV4joe31soxfh3Nr0S06jcItoBelbM4xC%2FMkXhQrUd5WEWZABPPqMyd1iW%2FOb5VL%2BnjkzdtpwO3Z1U9yrn2x%2FgxiEZRAA1%2F12940WHK7UwEB3Q1MqnZSJuC0F5eNbIMsf0govWoO1j4eJRLK0zch7pQ3CEZ2P9FddrbnfJd2U9WY4H50qJVWXS8QLgIh1aSEt4hGOvQBhOPmewmuA1EzxgJU9VDOCHvtAZneX3LYdoE6VfdJqrwmMW4FHuFfdFjmf6PfT8vqatOxYeiFi%2BpV%2BlwSqzvP3exzvKvxXOBWdMOrPpr4GOqUBde4azBzJPvMrdlFzBL5%2FTxxR8%2BsPWg1KFuLDzofsGz1gtwlG5arqzUQX5O%2BfuiL40H8zIzBenL8%2FoZ1Uaj7zqMW7dcGT505VGgXFAEmhGY5%2BUbVtMxrWI%2F0jQ7nJj088YqtW3V6Qrmk7E4%2B5yY6Mm2zPm8Ea05ad2esSCsVANsapdTHffidolb24m2egpygUORMSRIwot651Hu9uNYEqgUYh0Yxl&X-Amz-Signature=a5d40cbeddb3f3ee0df00bafc563eb72616453a8b31c4073bc7a76fa2b8aa620&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P75IR3B%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYauegtQjS77izegBibP0V0eXR8HZTlNwVHVasuWtXlwIgSbXaZSJDcijCHhr0UwBTbkRUH5rMRFIEv6CQ3akOKBwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGcpv%2BzFvrSxNxdezSrcAxijIJvZDfs7%2FWDMuGTmfjemdEKPUSRWRNg%2BdU%2B6iOPWFziie7Z2TlS9lsm0bEbijjNzrREcCBhsFAydfciiY%2F%2FyTQ2LrH9k78GOFPS76EBnAtSdFoRicyIezqq2%2B5YbIOL8FPkiUcIgR35bM1SjoMx%2BZvDM7KuJsurNUg1CIIKGLKwD1yq3sOnviqr8t%2BairEAzT8lhWSmNaluC%2FnDv39aLNtflP8jATNnNSKEt98fM2wLZVcYcuznfw6sXAh0%2FlSaaY6KpCuT97rlmTtTjVJKCtSWoQLgwn%2FrtS3acP8JnQsZfErs6bE%2BNYfAHWzD20%2B%2BMagujJtkl82uw6kXPV4joe31soxfh3Nr0S06jcItoBelbM4xC%2FMkXhQrUd5WEWZABPPqMyd1iW%2FOb5VL%2BnjkzdtpwO3Z1U9yrn2x%2FgxiEZRAA1%2F12940WHK7UwEB3Q1MqnZSJuC0F5eNbIMsf0govWoO1j4eJRLK0zch7pQ3CEZ2P9FddrbnfJd2U9WY4H50qJVWXS8QLgIh1aSEt4hGOvQBhOPmewmuA1EzxgJU9VDOCHvtAZneX3LYdoE6VfdJqrwmMW4FHuFfdFjmf6PfT8vqatOxYeiFi%2BpV%2BlwSqzvP3exzvKvxXOBWdMOrPpr4GOqUBde4azBzJPvMrdlFzBL5%2FTxxR8%2BsPWg1KFuLDzofsGz1gtwlG5arqzUQX5O%2BfuiL40H8zIzBenL8%2FoZ1Uaj7zqMW7dcGT505VGgXFAEmhGY5%2BUbVtMxrWI%2F0jQ7nJj088YqtW3V6Qrmk7E4%2B5yY6Mm2zPm8Ea05ad2esSCsVANsapdTHffidolb24m2egpygUORMSRIwot651Hu9uNYEqgUYh0Yxl&X-Amz-Signature=f67723d912a9c53d94ea69cf3d322b891c413425ee5676affe146f4681099469&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
