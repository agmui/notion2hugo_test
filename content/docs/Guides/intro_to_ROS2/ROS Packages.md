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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYDZKMX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCJvHzdGj0P1pZQolFIQEftcnVS41YO4o%2BwGT87ovN%2BMwIgU%2F%2FJLvXEdlKQ38KiJZ3%2BPZHdhdn5ixIwKy%2FWqls5rswq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBOpHCesCWOoOA1oECrcA8g0%2Ftekx1BXDDOtObsmdXbvcgmcZnxhjkEtQkU7FJ%2Ftw3XaxMMBRb9v63EI4op0H4AYp8NVRAADJSXN5p%2FqZTgRgU0vR1f%2F4JGxAhp%2FP%2FivvuA0wl43at%2F4cpA2YmcscUR1LWbTei8NSDuZC0szjlCymZQtxmthzvjeVrX6UIbPSeQRx58dO7YKVum46O8fBrNg5ygbF5ZWNwVqmZDCYhWjh07H9ReQBqpDNPjApnbnH0GKueMdceQrP2BiAJ0Yxm4ULTWTcKQCg4zzFa0q%2FSzuE2Hu0a2p5Nxk5XizvRtdeeEZ%2FxxvQsqxTgzkxWLbV6eG5XPA7wDrvstU63DmKJx30LhMM%2FfXm0zdSQMyp0r2JpfynT0UgG9C7R%2B73eThIrzyLQDAkjvq1VDotsg5U7d3l6895iRlT9x0xOfiMMUcrvsTflTvm07BbAukQYf5RmS8%2FrRlQ9sme4VCUGdbUkRJyn2HU9Wpqc3m3BKCzosmhUhWHDByZImkwPVvtfb%2BiPhaWlQJBk9Z7iV32tufVkJoWuBYyFTHaJlnpNal9W3zUxUlqMVmMMzVv3I5gykbXshYFhrdS9b3szq4rmuNh1ALWFlxJyzjlRBhThZYUWRNywZ7xMhBrvGsdnSDMLD%2BvcIGOqUBBsc87YqK18dfV9RYf6GPRY7g%2Bc9yafxbdwAt5BPFSoVRKxRed1O4kh%2ByOeSSPHAhG4d2ISUKIJ%2FmZ3wQk0%2FpN%2BqV9o92p%2FG4Wf2sR33QIcmegd%2FZtbDvOz68lhoSK06WnexcrA2ftRtDIV7lEpMDnfQyUbaQeWgMiajGPswXfoiIJS5YbUCVFS%2FqJTK55xWFSj61o8MnWgMFk%2FbrjsLmEQPASGRM&X-Amz-Signature=193977c160ea1400bef089150f853a0c9785c7959b4d8940fce8944a67a9c453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYDZKMX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCJvHzdGj0P1pZQolFIQEftcnVS41YO4o%2BwGT87ovN%2BMwIgU%2F%2FJLvXEdlKQ38KiJZ3%2BPZHdhdn5ixIwKy%2FWqls5rswq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBOpHCesCWOoOA1oECrcA8g0%2Ftekx1BXDDOtObsmdXbvcgmcZnxhjkEtQkU7FJ%2Ftw3XaxMMBRb9v63EI4op0H4AYp8NVRAADJSXN5p%2FqZTgRgU0vR1f%2F4JGxAhp%2FP%2FivvuA0wl43at%2F4cpA2YmcscUR1LWbTei8NSDuZC0szjlCymZQtxmthzvjeVrX6UIbPSeQRx58dO7YKVum46O8fBrNg5ygbF5ZWNwVqmZDCYhWjh07H9ReQBqpDNPjApnbnH0GKueMdceQrP2BiAJ0Yxm4ULTWTcKQCg4zzFa0q%2FSzuE2Hu0a2p5Nxk5XizvRtdeeEZ%2FxxvQsqxTgzkxWLbV6eG5XPA7wDrvstU63DmKJx30LhMM%2FfXm0zdSQMyp0r2JpfynT0UgG9C7R%2B73eThIrzyLQDAkjvq1VDotsg5U7d3l6895iRlT9x0xOfiMMUcrvsTflTvm07BbAukQYf5RmS8%2FrRlQ9sme4VCUGdbUkRJyn2HU9Wpqc3m3BKCzosmhUhWHDByZImkwPVvtfb%2BiPhaWlQJBk9Z7iV32tufVkJoWuBYyFTHaJlnpNal9W3zUxUlqMVmMMzVv3I5gykbXshYFhrdS9b3szq4rmuNh1ALWFlxJyzjlRBhThZYUWRNywZ7xMhBrvGsdnSDMLD%2BvcIGOqUBBsc87YqK18dfV9RYf6GPRY7g%2Bc9yafxbdwAt5BPFSoVRKxRed1O4kh%2ByOeSSPHAhG4d2ISUKIJ%2FmZ3wQk0%2FpN%2BqV9o92p%2FG4Wf2sR33QIcmegd%2FZtbDvOz68lhoSK06WnexcrA2ftRtDIV7lEpMDnfQyUbaQeWgMiajGPswXfoiIJS5YbUCVFS%2FqJTK55xWFSj61o8MnWgMFk%2FbrjsLmEQPASGRM&X-Amz-Signature=be6823105bb5de5bf2c47cd65e7ad962b4fb0d1efaf7a839234c265f362d60cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYDZKMX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCJvHzdGj0P1pZQolFIQEftcnVS41YO4o%2BwGT87ovN%2BMwIgU%2F%2FJLvXEdlKQ38KiJZ3%2BPZHdhdn5ixIwKy%2FWqls5rswq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBOpHCesCWOoOA1oECrcA8g0%2Ftekx1BXDDOtObsmdXbvcgmcZnxhjkEtQkU7FJ%2Ftw3XaxMMBRb9v63EI4op0H4AYp8NVRAADJSXN5p%2FqZTgRgU0vR1f%2F4JGxAhp%2FP%2FivvuA0wl43at%2F4cpA2YmcscUR1LWbTei8NSDuZC0szjlCymZQtxmthzvjeVrX6UIbPSeQRx58dO7YKVum46O8fBrNg5ygbF5ZWNwVqmZDCYhWjh07H9ReQBqpDNPjApnbnH0GKueMdceQrP2BiAJ0Yxm4ULTWTcKQCg4zzFa0q%2FSzuE2Hu0a2p5Nxk5XizvRtdeeEZ%2FxxvQsqxTgzkxWLbV6eG5XPA7wDrvstU63DmKJx30LhMM%2FfXm0zdSQMyp0r2JpfynT0UgG9C7R%2B73eThIrzyLQDAkjvq1VDotsg5U7d3l6895iRlT9x0xOfiMMUcrvsTflTvm07BbAukQYf5RmS8%2FrRlQ9sme4VCUGdbUkRJyn2HU9Wpqc3m3BKCzosmhUhWHDByZImkwPVvtfb%2BiPhaWlQJBk9Z7iV32tufVkJoWuBYyFTHaJlnpNal9W3zUxUlqMVmMMzVv3I5gykbXshYFhrdS9b3szq4rmuNh1ALWFlxJyzjlRBhThZYUWRNywZ7xMhBrvGsdnSDMLD%2BvcIGOqUBBsc87YqK18dfV9RYf6GPRY7g%2Bc9yafxbdwAt5BPFSoVRKxRed1O4kh%2ByOeSSPHAhG4d2ISUKIJ%2FmZ3wQk0%2FpN%2BqV9o92p%2FG4Wf2sR33QIcmegd%2FZtbDvOz68lhoSK06WnexcrA2ftRtDIV7lEpMDnfQyUbaQeWgMiajGPswXfoiIJS5YbUCVFS%2FqJTK55xWFSj61o8MnWgMFk%2FbrjsLmEQPASGRM&X-Amz-Signature=56ecfc55fb3ee39ce14b52ce3121de436250949cdb081be2fed2553563038e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYDZKMX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCJvHzdGj0P1pZQolFIQEftcnVS41YO4o%2BwGT87ovN%2BMwIgU%2F%2FJLvXEdlKQ38KiJZ3%2BPZHdhdn5ixIwKy%2FWqls5rswq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBOpHCesCWOoOA1oECrcA8g0%2Ftekx1BXDDOtObsmdXbvcgmcZnxhjkEtQkU7FJ%2Ftw3XaxMMBRb9v63EI4op0H4AYp8NVRAADJSXN5p%2FqZTgRgU0vR1f%2F4JGxAhp%2FP%2FivvuA0wl43at%2F4cpA2YmcscUR1LWbTei8NSDuZC0szjlCymZQtxmthzvjeVrX6UIbPSeQRx58dO7YKVum46O8fBrNg5ygbF5ZWNwVqmZDCYhWjh07H9ReQBqpDNPjApnbnH0GKueMdceQrP2BiAJ0Yxm4ULTWTcKQCg4zzFa0q%2FSzuE2Hu0a2p5Nxk5XizvRtdeeEZ%2FxxvQsqxTgzkxWLbV6eG5XPA7wDrvstU63DmKJx30LhMM%2FfXm0zdSQMyp0r2JpfynT0UgG9C7R%2B73eThIrzyLQDAkjvq1VDotsg5U7d3l6895iRlT9x0xOfiMMUcrvsTflTvm07BbAukQYf5RmS8%2FrRlQ9sme4VCUGdbUkRJyn2HU9Wpqc3m3BKCzosmhUhWHDByZImkwPVvtfb%2BiPhaWlQJBk9Z7iV32tufVkJoWuBYyFTHaJlnpNal9W3zUxUlqMVmMMzVv3I5gykbXshYFhrdS9b3szq4rmuNh1ALWFlxJyzjlRBhThZYUWRNywZ7xMhBrvGsdnSDMLD%2BvcIGOqUBBsc87YqK18dfV9RYf6GPRY7g%2Bc9yafxbdwAt5BPFSoVRKxRed1O4kh%2ByOeSSPHAhG4d2ISUKIJ%2FmZ3wQk0%2FpN%2BqV9o92p%2FG4Wf2sR33QIcmegd%2FZtbDvOz68lhoSK06WnexcrA2ftRtDIV7lEpMDnfQyUbaQeWgMiajGPswXfoiIJS5YbUCVFS%2FqJTK55xWFSj61o8MnWgMFk%2FbrjsLmEQPASGRM&X-Amz-Signature=4d18fd8d52ad9da6e555e952cfc59ed3a915c687ae7320f28745463826acc794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYDZKMX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCJvHzdGj0P1pZQolFIQEftcnVS41YO4o%2BwGT87ovN%2BMwIgU%2F%2FJLvXEdlKQ38KiJZ3%2BPZHdhdn5ixIwKy%2FWqls5rswq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBOpHCesCWOoOA1oECrcA8g0%2Ftekx1BXDDOtObsmdXbvcgmcZnxhjkEtQkU7FJ%2Ftw3XaxMMBRb9v63EI4op0H4AYp8NVRAADJSXN5p%2FqZTgRgU0vR1f%2F4JGxAhp%2FP%2FivvuA0wl43at%2F4cpA2YmcscUR1LWbTei8NSDuZC0szjlCymZQtxmthzvjeVrX6UIbPSeQRx58dO7YKVum46O8fBrNg5ygbF5ZWNwVqmZDCYhWjh07H9ReQBqpDNPjApnbnH0GKueMdceQrP2BiAJ0Yxm4ULTWTcKQCg4zzFa0q%2FSzuE2Hu0a2p5Nxk5XizvRtdeeEZ%2FxxvQsqxTgzkxWLbV6eG5XPA7wDrvstU63DmKJx30LhMM%2FfXm0zdSQMyp0r2JpfynT0UgG9C7R%2B73eThIrzyLQDAkjvq1VDotsg5U7d3l6895iRlT9x0xOfiMMUcrvsTflTvm07BbAukQYf5RmS8%2FrRlQ9sme4VCUGdbUkRJyn2HU9Wpqc3m3BKCzosmhUhWHDByZImkwPVvtfb%2BiPhaWlQJBk9Z7iV32tufVkJoWuBYyFTHaJlnpNal9W3zUxUlqMVmMMzVv3I5gykbXshYFhrdS9b3szq4rmuNh1ALWFlxJyzjlRBhThZYUWRNywZ7xMhBrvGsdnSDMLD%2BvcIGOqUBBsc87YqK18dfV9RYf6GPRY7g%2Bc9yafxbdwAt5BPFSoVRKxRed1O4kh%2ByOeSSPHAhG4d2ISUKIJ%2FmZ3wQk0%2FpN%2BqV9o92p%2FG4Wf2sR33QIcmegd%2FZtbDvOz68lhoSK06WnexcrA2ftRtDIV7lEpMDnfQyUbaQeWgMiajGPswXfoiIJS5YbUCVFS%2FqJTK55xWFSj61o8MnWgMFk%2FbrjsLmEQPASGRM&X-Amz-Signature=b32012f0a9d970d06247b72b8ec8ae8bae4802890f9eaf01a1f8663614c522e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYDZKMX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCJvHzdGj0P1pZQolFIQEftcnVS41YO4o%2BwGT87ovN%2BMwIgU%2F%2FJLvXEdlKQ38KiJZ3%2BPZHdhdn5ixIwKy%2FWqls5rswq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBOpHCesCWOoOA1oECrcA8g0%2Ftekx1BXDDOtObsmdXbvcgmcZnxhjkEtQkU7FJ%2Ftw3XaxMMBRb9v63EI4op0H4AYp8NVRAADJSXN5p%2FqZTgRgU0vR1f%2F4JGxAhp%2FP%2FivvuA0wl43at%2F4cpA2YmcscUR1LWbTei8NSDuZC0szjlCymZQtxmthzvjeVrX6UIbPSeQRx58dO7YKVum46O8fBrNg5ygbF5ZWNwVqmZDCYhWjh07H9ReQBqpDNPjApnbnH0GKueMdceQrP2BiAJ0Yxm4ULTWTcKQCg4zzFa0q%2FSzuE2Hu0a2p5Nxk5XizvRtdeeEZ%2FxxvQsqxTgzkxWLbV6eG5XPA7wDrvstU63DmKJx30LhMM%2FfXm0zdSQMyp0r2JpfynT0UgG9C7R%2B73eThIrzyLQDAkjvq1VDotsg5U7d3l6895iRlT9x0xOfiMMUcrvsTflTvm07BbAukQYf5RmS8%2FrRlQ9sme4VCUGdbUkRJyn2HU9Wpqc3m3BKCzosmhUhWHDByZImkwPVvtfb%2BiPhaWlQJBk9Z7iV32tufVkJoWuBYyFTHaJlnpNal9W3zUxUlqMVmMMzVv3I5gykbXshYFhrdS9b3szq4rmuNh1ALWFlxJyzjlRBhThZYUWRNywZ7xMhBrvGsdnSDMLD%2BvcIGOqUBBsc87YqK18dfV9RYf6GPRY7g%2Bc9yafxbdwAt5BPFSoVRKxRed1O4kh%2ByOeSSPHAhG4d2ISUKIJ%2FmZ3wQk0%2FpN%2BqV9o92p%2FG4Wf2sR33QIcmegd%2FZtbDvOz68lhoSK06WnexcrA2ftRtDIV7lEpMDnfQyUbaQeWgMiajGPswXfoiIJS5YbUCVFS%2FqJTK55xWFSj61o8MnWgMFk%2FbrjsLmEQPASGRM&X-Amz-Signature=b037c9c7f2901e8ec3f4a2ba12015ecdd8cafdeaa4cac2604a323fdeca69d645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYDZKMX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCJvHzdGj0P1pZQolFIQEftcnVS41YO4o%2BwGT87ovN%2BMwIgU%2F%2FJLvXEdlKQ38KiJZ3%2BPZHdhdn5ixIwKy%2FWqls5rswq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBOpHCesCWOoOA1oECrcA8g0%2Ftekx1BXDDOtObsmdXbvcgmcZnxhjkEtQkU7FJ%2Ftw3XaxMMBRb9v63EI4op0H4AYp8NVRAADJSXN5p%2FqZTgRgU0vR1f%2F4JGxAhp%2FP%2FivvuA0wl43at%2F4cpA2YmcscUR1LWbTei8NSDuZC0szjlCymZQtxmthzvjeVrX6UIbPSeQRx58dO7YKVum46O8fBrNg5ygbF5ZWNwVqmZDCYhWjh07H9ReQBqpDNPjApnbnH0GKueMdceQrP2BiAJ0Yxm4ULTWTcKQCg4zzFa0q%2FSzuE2Hu0a2p5Nxk5XizvRtdeeEZ%2FxxvQsqxTgzkxWLbV6eG5XPA7wDrvstU63DmKJx30LhMM%2FfXm0zdSQMyp0r2JpfynT0UgG9C7R%2B73eThIrzyLQDAkjvq1VDotsg5U7d3l6895iRlT9x0xOfiMMUcrvsTflTvm07BbAukQYf5RmS8%2FrRlQ9sme4VCUGdbUkRJyn2HU9Wpqc3m3BKCzosmhUhWHDByZImkwPVvtfb%2BiPhaWlQJBk9Z7iV32tufVkJoWuBYyFTHaJlnpNal9W3zUxUlqMVmMMzVv3I5gykbXshYFhrdS9b3szq4rmuNh1ALWFlxJyzjlRBhThZYUWRNywZ7xMhBrvGsdnSDMLD%2BvcIGOqUBBsc87YqK18dfV9RYf6GPRY7g%2Bc9yafxbdwAt5BPFSoVRKxRed1O4kh%2ByOeSSPHAhG4d2ISUKIJ%2FmZ3wQk0%2FpN%2BqV9o92p%2FG4Wf2sR33QIcmegd%2FZtbDvOz68lhoSK06WnexcrA2ftRtDIV7lEpMDnfQyUbaQeWgMiajGPswXfoiIJS5YbUCVFS%2FqJTK55xWFSj61o8MnWgMFk%2FbrjsLmEQPASGRM&X-Amz-Signature=5912da25d7829870d33587c338f312b37c3c05afc094427500879a212d958a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
