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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDD2ZAJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8bIUmefadhDIbUOOC38FVQQIqnMMTUWfRTgmbKFl%2FgQIgLxnRjj5PxXW4yrPVgIEtRAA6iU%2F2lDNdj7dgUN9y3UsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk4DtPShFHHSMGWJSrcA6oDD%2FvAxJ2D6KuXy4gffXfxHZiNUl7OHzGcnxk%2F5Ni79LF0Xv7iji2Tci8zdQ37kBfDc7ekF6kTVNpHY5B8knEn3BLrgh%2B7KKh7fc9Cx%2FB2u%2FXuCPx9PGNFyE6zLTI%2FOZ9Nzi1bvQ%2BY0%2FBvA9vOnn2Ly0%2B0tF%2FY6buD5fRz4PhwZ8zGOxU3akSezjZS%2F%2FqqogRNOyeRaQxuLzDFaUa8kKx6sBvqQvqSH5%2BEnyYh7d2LJ1G6VGgr9mC8NuY5C62e5ZaSRnkXGcvWxndb2zvwZoDRjhMadqs6zPOHgKt7D3OSNWDOKuxvxsuX3iwzagRAasW3D5eGg1Ct465TshaiKNyZdudqB5bZa2uQtwtciNxVgbNZ%2FnqFN5bCLRz4JnYY1OBsguvTAu826wXJiSTlG8LSXT7nfqojVkMs16sIDk4OEJ7PeJGNgAyQfjUE%2FhkgJ48Llkv5JVScVW7NSFpSBqxuJi1U%2F0kAEj4sAw274rgFvCL1%2FkOw0pBuOI7ORZuIR%2FFD3e%2FpCuYoWuUzc8TVBmWJtz%2BglCVt%2FJMOv%2FHbCvrdo9iKDaiMcNjuKPgc2sKu7nWQmb7w%2FGdi3BvhcwbI%2B8C1%2BkiHVVd4W8LAWjOPR0xPocLceEN7pmlWOMGoMPfx1MIGOqUBSOw4eTCB0BRUtxQki0ixr1ZJ3I6kavsq%2BEHW6HLbpGtyFe30PrJxDAIg%2BtsqQIFx2eJoUfAR8uIzyMHD8juH2xsxCq2FvTEqLH%2FLhfY1l6ql2I%2FIIqA%2BIL9KL%2Bg7KsexkJf7RNuaaVHDhkMffwvFsj1d6hQQXtGO8MVhPNCwYTXPLkmMLeIQcciaReU8%2F8fPhTcmWOvhRUzaBks0LpwZg8bI%2FOGf&X-Amz-Signature=d418e126d2e9eebf9a378a2379522c6343cee163d72eff12c41f96befc2e26a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDD2ZAJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8bIUmefadhDIbUOOC38FVQQIqnMMTUWfRTgmbKFl%2FgQIgLxnRjj5PxXW4yrPVgIEtRAA6iU%2F2lDNdj7dgUN9y3UsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk4DtPShFHHSMGWJSrcA6oDD%2FvAxJ2D6KuXy4gffXfxHZiNUl7OHzGcnxk%2F5Ni79LF0Xv7iji2Tci8zdQ37kBfDc7ekF6kTVNpHY5B8knEn3BLrgh%2B7KKh7fc9Cx%2FB2u%2FXuCPx9PGNFyE6zLTI%2FOZ9Nzi1bvQ%2BY0%2FBvA9vOnn2Ly0%2B0tF%2FY6buD5fRz4PhwZ8zGOxU3akSezjZS%2F%2FqqogRNOyeRaQxuLzDFaUa8kKx6sBvqQvqSH5%2BEnyYh7d2LJ1G6VGgr9mC8NuY5C62e5ZaSRnkXGcvWxndb2zvwZoDRjhMadqs6zPOHgKt7D3OSNWDOKuxvxsuX3iwzagRAasW3D5eGg1Ct465TshaiKNyZdudqB5bZa2uQtwtciNxVgbNZ%2FnqFN5bCLRz4JnYY1OBsguvTAu826wXJiSTlG8LSXT7nfqojVkMs16sIDk4OEJ7PeJGNgAyQfjUE%2FhkgJ48Llkv5JVScVW7NSFpSBqxuJi1U%2F0kAEj4sAw274rgFvCL1%2FkOw0pBuOI7ORZuIR%2FFD3e%2FpCuYoWuUzc8TVBmWJtz%2BglCVt%2FJMOv%2FHbCvrdo9iKDaiMcNjuKPgc2sKu7nWQmb7w%2FGdi3BvhcwbI%2B8C1%2BkiHVVd4W8LAWjOPR0xPocLceEN7pmlWOMGoMPfx1MIGOqUBSOw4eTCB0BRUtxQki0ixr1ZJ3I6kavsq%2BEHW6HLbpGtyFe30PrJxDAIg%2BtsqQIFx2eJoUfAR8uIzyMHD8juH2xsxCq2FvTEqLH%2FLhfY1l6ql2I%2FIIqA%2BIL9KL%2Bg7KsexkJf7RNuaaVHDhkMffwvFsj1d6hQQXtGO8MVhPNCwYTXPLkmMLeIQcciaReU8%2F8fPhTcmWOvhRUzaBks0LpwZg8bI%2FOGf&X-Amz-Signature=841f3c6d9fff3151f86127d5bacfd119b51748e58a674a1178606afd17249bb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDD2ZAJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8bIUmefadhDIbUOOC38FVQQIqnMMTUWfRTgmbKFl%2FgQIgLxnRjj5PxXW4yrPVgIEtRAA6iU%2F2lDNdj7dgUN9y3UsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk4DtPShFHHSMGWJSrcA6oDD%2FvAxJ2D6KuXy4gffXfxHZiNUl7OHzGcnxk%2F5Ni79LF0Xv7iji2Tci8zdQ37kBfDc7ekF6kTVNpHY5B8knEn3BLrgh%2B7KKh7fc9Cx%2FB2u%2FXuCPx9PGNFyE6zLTI%2FOZ9Nzi1bvQ%2BY0%2FBvA9vOnn2Ly0%2B0tF%2FY6buD5fRz4PhwZ8zGOxU3akSezjZS%2F%2FqqogRNOyeRaQxuLzDFaUa8kKx6sBvqQvqSH5%2BEnyYh7d2LJ1G6VGgr9mC8NuY5C62e5ZaSRnkXGcvWxndb2zvwZoDRjhMadqs6zPOHgKt7D3OSNWDOKuxvxsuX3iwzagRAasW3D5eGg1Ct465TshaiKNyZdudqB5bZa2uQtwtciNxVgbNZ%2FnqFN5bCLRz4JnYY1OBsguvTAu826wXJiSTlG8LSXT7nfqojVkMs16sIDk4OEJ7PeJGNgAyQfjUE%2FhkgJ48Llkv5JVScVW7NSFpSBqxuJi1U%2F0kAEj4sAw274rgFvCL1%2FkOw0pBuOI7ORZuIR%2FFD3e%2FpCuYoWuUzc8TVBmWJtz%2BglCVt%2FJMOv%2FHbCvrdo9iKDaiMcNjuKPgc2sKu7nWQmb7w%2FGdi3BvhcwbI%2B8C1%2BkiHVVd4W8LAWjOPR0xPocLceEN7pmlWOMGoMPfx1MIGOqUBSOw4eTCB0BRUtxQki0ixr1ZJ3I6kavsq%2BEHW6HLbpGtyFe30PrJxDAIg%2BtsqQIFx2eJoUfAR8uIzyMHD8juH2xsxCq2FvTEqLH%2FLhfY1l6ql2I%2FIIqA%2BIL9KL%2Bg7KsexkJf7RNuaaVHDhkMffwvFsj1d6hQQXtGO8MVhPNCwYTXPLkmMLeIQcciaReU8%2F8fPhTcmWOvhRUzaBks0LpwZg8bI%2FOGf&X-Amz-Signature=1c859325bc69e8afddbdb5407c0a9bf5f7770abe8a1922aa05bc012e5b169101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDD2ZAJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8bIUmefadhDIbUOOC38FVQQIqnMMTUWfRTgmbKFl%2FgQIgLxnRjj5PxXW4yrPVgIEtRAA6iU%2F2lDNdj7dgUN9y3UsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk4DtPShFHHSMGWJSrcA6oDD%2FvAxJ2D6KuXy4gffXfxHZiNUl7OHzGcnxk%2F5Ni79LF0Xv7iji2Tci8zdQ37kBfDc7ekF6kTVNpHY5B8knEn3BLrgh%2B7KKh7fc9Cx%2FB2u%2FXuCPx9PGNFyE6zLTI%2FOZ9Nzi1bvQ%2BY0%2FBvA9vOnn2Ly0%2B0tF%2FY6buD5fRz4PhwZ8zGOxU3akSezjZS%2F%2FqqogRNOyeRaQxuLzDFaUa8kKx6sBvqQvqSH5%2BEnyYh7d2LJ1G6VGgr9mC8NuY5C62e5ZaSRnkXGcvWxndb2zvwZoDRjhMadqs6zPOHgKt7D3OSNWDOKuxvxsuX3iwzagRAasW3D5eGg1Ct465TshaiKNyZdudqB5bZa2uQtwtciNxVgbNZ%2FnqFN5bCLRz4JnYY1OBsguvTAu826wXJiSTlG8LSXT7nfqojVkMs16sIDk4OEJ7PeJGNgAyQfjUE%2FhkgJ48Llkv5JVScVW7NSFpSBqxuJi1U%2F0kAEj4sAw274rgFvCL1%2FkOw0pBuOI7ORZuIR%2FFD3e%2FpCuYoWuUzc8TVBmWJtz%2BglCVt%2FJMOv%2FHbCvrdo9iKDaiMcNjuKPgc2sKu7nWQmb7w%2FGdi3BvhcwbI%2B8C1%2BkiHVVd4W8LAWjOPR0xPocLceEN7pmlWOMGoMPfx1MIGOqUBSOw4eTCB0BRUtxQki0ixr1ZJ3I6kavsq%2BEHW6HLbpGtyFe30PrJxDAIg%2BtsqQIFx2eJoUfAR8uIzyMHD8juH2xsxCq2FvTEqLH%2FLhfY1l6ql2I%2FIIqA%2BIL9KL%2Bg7KsexkJf7RNuaaVHDhkMffwvFsj1d6hQQXtGO8MVhPNCwYTXPLkmMLeIQcciaReU8%2F8fPhTcmWOvhRUzaBks0LpwZg8bI%2FOGf&X-Amz-Signature=1edcf55bf6d4d32bf203108d9b6b7db3ed425a21657122e4cf6cd29fd9570f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDD2ZAJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8bIUmefadhDIbUOOC38FVQQIqnMMTUWfRTgmbKFl%2FgQIgLxnRjj5PxXW4yrPVgIEtRAA6iU%2F2lDNdj7dgUN9y3UsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk4DtPShFHHSMGWJSrcA6oDD%2FvAxJ2D6KuXy4gffXfxHZiNUl7OHzGcnxk%2F5Ni79LF0Xv7iji2Tci8zdQ37kBfDc7ekF6kTVNpHY5B8knEn3BLrgh%2B7KKh7fc9Cx%2FB2u%2FXuCPx9PGNFyE6zLTI%2FOZ9Nzi1bvQ%2BY0%2FBvA9vOnn2Ly0%2B0tF%2FY6buD5fRz4PhwZ8zGOxU3akSezjZS%2F%2FqqogRNOyeRaQxuLzDFaUa8kKx6sBvqQvqSH5%2BEnyYh7d2LJ1G6VGgr9mC8NuY5C62e5ZaSRnkXGcvWxndb2zvwZoDRjhMadqs6zPOHgKt7D3OSNWDOKuxvxsuX3iwzagRAasW3D5eGg1Ct465TshaiKNyZdudqB5bZa2uQtwtciNxVgbNZ%2FnqFN5bCLRz4JnYY1OBsguvTAu826wXJiSTlG8LSXT7nfqojVkMs16sIDk4OEJ7PeJGNgAyQfjUE%2FhkgJ48Llkv5JVScVW7NSFpSBqxuJi1U%2F0kAEj4sAw274rgFvCL1%2FkOw0pBuOI7ORZuIR%2FFD3e%2FpCuYoWuUzc8TVBmWJtz%2BglCVt%2FJMOv%2FHbCvrdo9iKDaiMcNjuKPgc2sKu7nWQmb7w%2FGdi3BvhcwbI%2B8C1%2BkiHVVd4W8LAWjOPR0xPocLceEN7pmlWOMGoMPfx1MIGOqUBSOw4eTCB0BRUtxQki0ixr1ZJ3I6kavsq%2BEHW6HLbpGtyFe30PrJxDAIg%2BtsqQIFx2eJoUfAR8uIzyMHD8juH2xsxCq2FvTEqLH%2FLhfY1l6ql2I%2FIIqA%2BIL9KL%2Bg7KsexkJf7RNuaaVHDhkMffwvFsj1d6hQQXtGO8MVhPNCwYTXPLkmMLeIQcciaReU8%2F8fPhTcmWOvhRUzaBks0LpwZg8bI%2FOGf&X-Amz-Signature=e679f02dcd78bc7f8ada399537742e67a5546fb18af7e35a7a1eca47b885e0fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDD2ZAJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8bIUmefadhDIbUOOC38FVQQIqnMMTUWfRTgmbKFl%2FgQIgLxnRjj5PxXW4yrPVgIEtRAA6iU%2F2lDNdj7dgUN9y3UsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk4DtPShFHHSMGWJSrcA6oDD%2FvAxJ2D6KuXy4gffXfxHZiNUl7OHzGcnxk%2F5Ni79LF0Xv7iji2Tci8zdQ37kBfDc7ekF6kTVNpHY5B8knEn3BLrgh%2B7KKh7fc9Cx%2FB2u%2FXuCPx9PGNFyE6zLTI%2FOZ9Nzi1bvQ%2BY0%2FBvA9vOnn2Ly0%2B0tF%2FY6buD5fRz4PhwZ8zGOxU3akSezjZS%2F%2FqqogRNOyeRaQxuLzDFaUa8kKx6sBvqQvqSH5%2BEnyYh7d2LJ1G6VGgr9mC8NuY5C62e5ZaSRnkXGcvWxndb2zvwZoDRjhMadqs6zPOHgKt7D3OSNWDOKuxvxsuX3iwzagRAasW3D5eGg1Ct465TshaiKNyZdudqB5bZa2uQtwtciNxVgbNZ%2FnqFN5bCLRz4JnYY1OBsguvTAu826wXJiSTlG8LSXT7nfqojVkMs16sIDk4OEJ7PeJGNgAyQfjUE%2FhkgJ48Llkv5JVScVW7NSFpSBqxuJi1U%2F0kAEj4sAw274rgFvCL1%2FkOw0pBuOI7ORZuIR%2FFD3e%2FpCuYoWuUzc8TVBmWJtz%2BglCVt%2FJMOv%2FHbCvrdo9iKDaiMcNjuKPgc2sKu7nWQmb7w%2FGdi3BvhcwbI%2B8C1%2BkiHVVd4W8LAWjOPR0xPocLceEN7pmlWOMGoMPfx1MIGOqUBSOw4eTCB0BRUtxQki0ixr1ZJ3I6kavsq%2BEHW6HLbpGtyFe30PrJxDAIg%2BtsqQIFx2eJoUfAR8uIzyMHD8juH2xsxCq2FvTEqLH%2FLhfY1l6ql2I%2FIIqA%2BIL9KL%2Bg7KsexkJf7RNuaaVHDhkMffwvFsj1d6hQQXtGO8MVhPNCwYTXPLkmMLeIQcciaReU8%2F8fPhTcmWOvhRUzaBks0LpwZg8bI%2FOGf&X-Amz-Signature=a2e1ad0039f622385783b8d03b8fe3b6ac5287e04158997257181d20e2cddae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDD2ZAJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8bIUmefadhDIbUOOC38FVQQIqnMMTUWfRTgmbKFl%2FgQIgLxnRjj5PxXW4yrPVgIEtRAA6iU%2F2lDNdj7dgUN9y3UsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk4DtPShFHHSMGWJSrcA6oDD%2FvAxJ2D6KuXy4gffXfxHZiNUl7OHzGcnxk%2F5Ni79LF0Xv7iji2Tci8zdQ37kBfDc7ekF6kTVNpHY5B8knEn3BLrgh%2B7KKh7fc9Cx%2FB2u%2FXuCPx9PGNFyE6zLTI%2FOZ9Nzi1bvQ%2BY0%2FBvA9vOnn2Ly0%2B0tF%2FY6buD5fRz4PhwZ8zGOxU3akSezjZS%2F%2FqqogRNOyeRaQxuLzDFaUa8kKx6sBvqQvqSH5%2BEnyYh7d2LJ1G6VGgr9mC8NuY5C62e5ZaSRnkXGcvWxndb2zvwZoDRjhMadqs6zPOHgKt7D3OSNWDOKuxvxsuX3iwzagRAasW3D5eGg1Ct465TshaiKNyZdudqB5bZa2uQtwtciNxVgbNZ%2FnqFN5bCLRz4JnYY1OBsguvTAu826wXJiSTlG8LSXT7nfqojVkMs16sIDk4OEJ7PeJGNgAyQfjUE%2FhkgJ48Llkv5JVScVW7NSFpSBqxuJi1U%2F0kAEj4sAw274rgFvCL1%2FkOw0pBuOI7ORZuIR%2FFD3e%2FpCuYoWuUzc8TVBmWJtz%2BglCVt%2FJMOv%2FHbCvrdo9iKDaiMcNjuKPgc2sKu7nWQmb7w%2FGdi3BvhcwbI%2B8C1%2BkiHVVd4W8LAWjOPR0xPocLceEN7pmlWOMGoMPfx1MIGOqUBSOw4eTCB0BRUtxQki0ixr1ZJ3I6kavsq%2BEHW6HLbpGtyFe30PrJxDAIg%2BtsqQIFx2eJoUfAR8uIzyMHD8juH2xsxCq2FvTEqLH%2FLhfY1l6ql2I%2FIIqA%2BIL9KL%2Bg7KsexkJf7RNuaaVHDhkMffwvFsj1d6hQQXtGO8MVhPNCwYTXPLkmMLeIQcciaReU8%2F8fPhTcmWOvhRUzaBks0LpwZg8bI%2FOGf&X-Amz-Signature=c3203ddb5833215efc3d60e457ef8e6d5fffe7c9e463ce45865b6c19ea10f80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
