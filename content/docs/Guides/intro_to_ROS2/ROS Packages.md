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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAPVEJB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4FFGH0Tqr4BOEBLX%2FAawCxxpj0I8zRh%2BNQqrUN%2FpIZQIgb6suLfhOqOGoTtrqjSGRGKtK0VFhGUvAzp6actkG%2Fx8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOdRSE7ZQ1yhmrBKgircA6AxWnJbg1v5aN9OUkoXrUuvdMdYB%2BPFv6xHXxO95LcHuJWR29wVI2bFxZj7AXJFzjSTLPL14nZ7gAOMdfobqTi691f9HKHGnpcfO1aJvxwIWZyghLc%2BB%2B7K1qC7Me%2Bm3fUnxal2ko69hswaXZYn4HdbfEZACl%2FQnPhJc%2F3Rp7OARnOEWw%2BIkIDGoLJiDAh9C7zQEAbsx1Ji5Unxn5bWD3tLo%2BspeOEVmeLw7ytd8ROSbiK%2BHEOvNQ7%2BRCGs2bRLkuO9%2Bn%2FC3dvPcIo8A%2BHKhSkkU05bT6Wj4eqvP5xv8eFedq8PJh2xBGSyc20wEu2oeMsn5PjqDbpD8ET4LGwQyoXnkJ3eRma5IfyaQc%2BgUdC2T1bQik6Ga45w%2B2Uo0Pd%2BL09%2FZxnURsNz7VdD8kCtw7kiW8rJRXhVs7VqEAxgwVrvQyOn3rWP8pp2cdul%2F%2BRHv%2FPNy%2BE4JdpMvOWf0Bhv5LR%2BWJ9ig6X7Zcwzt%2BnDToPBZdcDjW12zxqEIca6PleUbYut8vL398EjUam61%2BbQkg3LqVVoaDi1WnwvfEGgAgvya96DcTR4Bgp5kPenHWM8M01ullqwVUgcMTtJtYfGSa1aehGMZyJAeDtohBX6BenPyF9xixqixIff25MhMKOujs0GOqUB%2FSivvjVJ5yFVu1kk8aBtT0R6Z6MmtOAyY7gZL2%2B300OZPb6LOXJd%2BUFZo1%2FW6URqcGf8rWJTq6QbWLtg1UIJYAhz9i3kyXlGc4r4Oo2NRqIh0%2FOMoeNbKZcv6ygLy10ZwWQauEK%2FamjO9GTxCfKXOk2RTclI%2B7zC1%2F36NJEYHG%2B9RUGN9trO93Ex3RDDvgaU98vzrJ%2FfPChmerDrNUVddatQLRiS&X-Amz-Signature=92180bef784741c2875bfdca31de304f435212bcab59d9f174f8dc2cf89b1261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAPVEJB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4FFGH0Tqr4BOEBLX%2FAawCxxpj0I8zRh%2BNQqrUN%2FpIZQIgb6suLfhOqOGoTtrqjSGRGKtK0VFhGUvAzp6actkG%2Fx8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOdRSE7ZQ1yhmrBKgircA6AxWnJbg1v5aN9OUkoXrUuvdMdYB%2BPFv6xHXxO95LcHuJWR29wVI2bFxZj7AXJFzjSTLPL14nZ7gAOMdfobqTi691f9HKHGnpcfO1aJvxwIWZyghLc%2BB%2B7K1qC7Me%2Bm3fUnxal2ko69hswaXZYn4HdbfEZACl%2FQnPhJc%2F3Rp7OARnOEWw%2BIkIDGoLJiDAh9C7zQEAbsx1Ji5Unxn5bWD3tLo%2BspeOEVmeLw7ytd8ROSbiK%2BHEOvNQ7%2BRCGs2bRLkuO9%2Bn%2FC3dvPcIo8A%2BHKhSkkU05bT6Wj4eqvP5xv8eFedq8PJh2xBGSyc20wEu2oeMsn5PjqDbpD8ET4LGwQyoXnkJ3eRma5IfyaQc%2BgUdC2T1bQik6Ga45w%2B2Uo0Pd%2BL09%2FZxnURsNz7VdD8kCtw7kiW8rJRXhVs7VqEAxgwVrvQyOn3rWP8pp2cdul%2F%2BRHv%2FPNy%2BE4JdpMvOWf0Bhv5LR%2BWJ9ig6X7Zcwzt%2BnDToPBZdcDjW12zxqEIca6PleUbYut8vL398EjUam61%2BbQkg3LqVVoaDi1WnwvfEGgAgvya96DcTR4Bgp5kPenHWM8M01ullqwVUgcMTtJtYfGSa1aehGMZyJAeDtohBX6BenPyF9xixqixIff25MhMKOujs0GOqUB%2FSivvjVJ5yFVu1kk8aBtT0R6Z6MmtOAyY7gZL2%2B300OZPb6LOXJd%2BUFZo1%2FW6URqcGf8rWJTq6QbWLtg1UIJYAhz9i3kyXlGc4r4Oo2NRqIh0%2FOMoeNbKZcv6ygLy10ZwWQauEK%2FamjO9GTxCfKXOk2RTclI%2B7zC1%2F36NJEYHG%2B9RUGN9trO93Ex3RDDvgaU98vzrJ%2FfPChmerDrNUVddatQLRiS&X-Amz-Signature=6ad11953d4c65b04e739fe2676f58162aa4715495ac5b968cef44aa8d00e3477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAPVEJB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4FFGH0Tqr4BOEBLX%2FAawCxxpj0I8zRh%2BNQqrUN%2FpIZQIgb6suLfhOqOGoTtrqjSGRGKtK0VFhGUvAzp6actkG%2Fx8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOdRSE7ZQ1yhmrBKgircA6AxWnJbg1v5aN9OUkoXrUuvdMdYB%2BPFv6xHXxO95LcHuJWR29wVI2bFxZj7AXJFzjSTLPL14nZ7gAOMdfobqTi691f9HKHGnpcfO1aJvxwIWZyghLc%2BB%2B7K1qC7Me%2Bm3fUnxal2ko69hswaXZYn4HdbfEZACl%2FQnPhJc%2F3Rp7OARnOEWw%2BIkIDGoLJiDAh9C7zQEAbsx1Ji5Unxn5bWD3tLo%2BspeOEVmeLw7ytd8ROSbiK%2BHEOvNQ7%2BRCGs2bRLkuO9%2Bn%2FC3dvPcIo8A%2BHKhSkkU05bT6Wj4eqvP5xv8eFedq8PJh2xBGSyc20wEu2oeMsn5PjqDbpD8ET4LGwQyoXnkJ3eRma5IfyaQc%2BgUdC2T1bQik6Ga45w%2B2Uo0Pd%2BL09%2FZxnURsNz7VdD8kCtw7kiW8rJRXhVs7VqEAxgwVrvQyOn3rWP8pp2cdul%2F%2BRHv%2FPNy%2BE4JdpMvOWf0Bhv5LR%2BWJ9ig6X7Zcwzt%2BnDToPBZdcDjW12zxqEIca6PleUbYut8vL398EjUam61%2BbQkg3LqVVoaDi1WnwvfEGgAgvya96DcTR4Bgp5kPenHWM8M01ullqwVUgcMTtJtYfGSa1aehGMZyJAeDtohBX6BenPyF9xixqixIff25MhMKOujs0GOqUB%2FSivvjVJ5yFVu1kk8aBtT0R6Z6MmtOAyY7gZL2%2B300OZPb6LOXJd%2BUFZo1%2FW6URqcGf8rWJTq6QbWLtg1UIJYAhz9i3kyXlGc4r4Oo2NRqIh0%2FOMoeNbKZcv6ygLy10ZwWQauEK%2FamjO9GTxCfKXOk2RTclI%2B7zC1%2F36NJEYHG%2B9RUGN9trO93Ex3RDDvgaU98vzrJ%2FfPChmerDrNUVddatQLRiS&X-Amz-Signature=5548b58186b9c32986cdb5edb263e5b44173d5df5a1788cd7653851e359b1523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAPVEJB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4FFGH0Tqr4BOEBLX%2FAawCxxpj0I8zRh%2BNQqrUN%2FpIZQIgb6suLfhOqOGoTtrqjSGRGKtK0VFhGUvAzp6actkG%2Fx8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOdRSE7ZQ1yhmrBKgircA6AxWnJbg1v5aN9OUkoXrUuvdMdYB%2BPFv6xHXxO95LcHuJWR29wVI2bFxZj7AXJFzjSTLPL14nZ7gAOMdfobqTi691f9HKHGnpcfO1aJvxwIWZyghLc%2BB%2B7K1qC7Me%2Bm3fUnxal2ko69hswaXZYn4HdbfEZACl%2FQnPhJc%2F3Rp7OARnOEWw%2BIkIDGoLJiDAh9C7zQEAbsx1Ji5Unxn5bWD3tLo%2BspeOEVmeLw7ytd8ROSbiK%2BHEOvNQ7%2BRCGs2bRLkuO9%2Bn%2FC3dvPcIo8A%2BHKhSkkU05bT6Wj4eqvP5xv8eFedq8PJh2xBGSyc20wEu2oeMsn5PjqDbpD8ET4LGwQyoXnkJ3eRma5IfyaQc%2BgUdC2T1bQik6Ga45w%2B2Uo0Pd%2BL09%2FZxnURsNz7VdD8kCtw7kiW8rJRXhVs7VqEAxgwVrvQyOn3rWP8pp2cdul%2F%2BRHv%2FPNy%2BE4JdpMvOWf0Bhv5LR%2BWJ9ig6X7Zcwzt%2BnDToPBZdcDjW12zxqEIca6PleUbYut8vL398EjUam61%2BbQkg3LqVVoaDi1WnwvfEGgAgvya96DcTR4Bgp5kPenHWM8M01ullqwVUgcMTtJtYfGSa1aehGMZyJAeDtohBX6BenPyF9xixqixIff25MhMKOujs0GOqUB%2FSivvjVJ5yFVu1kk8aBtT0R6Z6MmtOAyY7gZL2%2B300OZPb6LOXJd%2BUFZo1%2FW6URqcGf8rWJTq6QbWLtg1UIJYAhz9i3kyXlGc4r4Oo2NRqIh0%2FOMoeNbKZcv6ygLy10ZwWQauEK%2FamjO9GTxCfKXOk2RTclI%2B7zC1%2F36NJEYHG%2B9RUGN9trO93Ex3RDDvgaU98vzrJ%2FfPChmerDrNUVddatQLRiS&X-Amz-Signature=09b77b675fbb393fead1e062f46dbbb5b0eb1d3a2419217d8450496f0f6d064d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAPVEJB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4FFGH0Tqr4BOEBLX%2FAawCxxpj0I8zRh%2BNQqrUN%2FpIZQIgb6suLfhOqOGoTtrqjSGRGKtK0VFhGUvAzp6actkG%2Fx8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOdRSE7ZQ1yhmrBKgircA6AxWnJbg1v5aN9OUkoXrUuvdMdYB%2BPFv6xHXxO95LcHuJWR29wVI2bFxZj7AXJFzjSTLPL14nZ7gAOMdfobqTi691f9HKHGnpcfO1aJvxwIWZyghLc%2BB%2B7K1qC7Me%2Bm3fUnxal2ko69hswaXZYn4HdbfEZACl%2FQnPhJc%2F3Rp7OARnOEWw%2BIkIDGoLJiDAh9C7zQEAbsx1Ji5Unxn5bWD3tLo%2BspeOEVmeLw7ytd8ROSbiK%2BHEOvNQ7%2BRCGs2bRLkuO9%2Bn%2FC3dvPcIo8A%2BHKhSkkU05bT6Wj4eqvP5xv8eFedq8PJh2xBGSyc20wEu2oeMsn5PjqDbpD8ET4LGwQyoXnkJ3eRma5IfyaQc%2BgUdC2T1bQik6Ga45w%2B2Uo0Pd%2BL09%2FZxnURsNz7VdD8kCtw7kiW8rJRXhVs7VqEAxgwVrvQyOn3rWP8pp2cdul%2F%2BRHv%2FPNy%2BE4JdpMvOWf0Bhv5LR%2BWJ9ig6X7Zcwzt%2BnDToPBZdcDjW12zxqEIca6PleUbYut8vL398EjUam61%2BbQkg3LqVVoaDi1WnwvfEGgAgvya96DcTR4Bgp5kPenHWM8M01ullqwVUgcMTtJtYfGSa1aehGMZyJAeDtohBX6BenPyF9xixqixIff25MhMKOujs0GOqUB%2FSivvjVJ5yFVu1kk8aBtT0R6Z6MmtOAyY7gZL2%2B300OZPb6LOXJd%2BUFZo1%2FW6URqcGf8rWJTq6QbWLtg1UIJYAhz9i3kyXlGc4r4Oo2NRqIh0%2FOMoeNbKZcv6ygLy10ZwWQauEK%2FamjO9GTxCfKXOk2RTclI%2B7zC1%2F36NJEYHG%2B9RUGN9trO93Ex3RDDvgaU98vzrJ%2FfPChmerDrNUVddatQLRiS&X-Amz-Signature=7717e66dc9aa56750616a0403b466b0a22401394a54c15c3eb7ec26bc1d8fbfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAPVEJB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4FFGH0Tqr4BOEBLX%2FAawCxxpj0I8zRh%2BNQqrUN%2FpIZQIgb6suLfhOqOGoTtrqjSGRGKtK0VFhGUvAzp6actkG%2Fx8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOdRSE7ZQ1yhmrBKgircA6AxWnJbg1v5aN9OUkoXrUuvdMdYB%2BPFv6xHXxO95LcHuJWR29wVI2bFxZj7AXJFzjSTLPL14nZ7gAOMdfobqTi691f9HKHGnpcfO1aJvxwIWZyghLc%2BB%2B7K1qC7Me%2Bm3fUnxal2ko69hswaXZYn4HdbfEZACl%2FQnPhJc%2F3Rp7OARnOEWw%2BIkIDGoLJiDAh9C7zQEAbsx1Ji5Unxn5bWD3tLo%2BspeOEVmeLw7ytd8ROSbiK%2BHEOvNQ7%2BRCGs2bRLkuO9%2Bn%2FC3dvPcIo8A%2BHKhSkkU05bT6Wj4eqvP5xv8eFedq8PJh2xBGSyc20wEu2oeMsn5PjqDbpD8ET4LGwQyoXnkJ3eRma5IfyaQc%2BgUdC2T1bQik6Ga45w%2B2Uo0Pd%2BL09%2FZxnURsNz7VdD8kCtw7kiW8rJRXhVs7VqEAxgwVrvQyOn3rWP8pp2cdul%2F%2BRHv%2FPNy%2BE4JdpMvOWf0Bhv5LR%2BWJ9ig6X7Zcwzt%2BnDToPBZdcDjW12zxqEIca6PleUbYut8vL398EjUam61%2BbQkg3LqVVoaDi1WnwvfEGgAgvya96DcTR4Bgp5kPenHWM8M01ullqwVUgcMTtJtYfGSa1aehGMZyJAeDtohBX6BenPyF9xixqixIff25MhMKOujs0GOqUB%2FSivvjVJ5yFVu1kk8aBtT0R6Z6MmtOAyY7gZL2%2B300OZPb6LOXJd%2BUFZo1%2FW6URqcGf8rWJTq6QbWLtg1UIJYAhz9i3kyXlGc4r4Oo2NRqIh0%2FOMoeNbKZcv6ygLy10ZwWQauEK%2FamjO9GTxCfKXOk2RTclI%2B7zC1%2F36NJEYHG%2B9RUGN9trO93Ex3RDDvgaU98vzrJ%2FfPChmerDrNUVddatQLRiS&X-Amz-Signature=f8c839c2984b9fc452f957f75201b2d498b938af98f87d348ba5e720b6a85c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAPVEJB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4FFGH0Tqr4BOEBLX%2FAawCxxpj0I8zRh%2BNQqrUN%2FpIZQIgb6suLfhOqOGoTtrqjSGRGKtK0VFhGUvAzp6actkG%2Fx8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOdRSE7ZQ1yhmrBKgircA6AxWnJbg1v5aN9OUkoXrUuvdMdYB%2BPFv6xHXxO95LcHuJWR29wVI2bFxZj7AXJFzjSTLPL14nZ7gAOMdfobqTi691f9HKHGnpcfO1aJvxwIWZyghLc%2BB%2B7K1qC7Me%2Bm3fUnxal2ko69hswaXZYn4HdbfEZACl%2FQnPhJc%2F3Rp7OARnOEWw%2BIkIDGoLJiDAh9C7zQEAbsx1Ji5Unxn5bWD3tLo%2BspeOEVmeLw7ytd8ROSbiK%2BHEOvNQ7%2BRCGs2bRLkuO9%2Bn%2FC3dvPcIo8A%2BHKhSkkU05bT6Wj4eqvP5xv8eFedq8PJh2xBGSyc20wEu2oeMsn5PjqDbpD8ET4LGwQyoXnkJ3eRma5IfyaQc%2BgUdC2T1bQik6Ga45w%2B2Uo0Pd%2BL09%2FZxnURsNz7VdD8kCtw7kiW8rJRXhVs7VqEAxgwVrvQyOn3rWP8pp2cdul%2F%2BRHv%2FPNy%2BE4JdpMvOWf0Bhv5LR%2BWJ9ig6X7Zcwzt%2BnDToPBZdcDjW12zxqEIca6PleUbYut8vL398EjUam61%2BbQkg3LqVVoaDi1WnwvfEGgAgvya96DcTR4Bgp5kPenHWM8M01ullqwVUgcMTtJtYfGSa1aehGMZyJAeDtohBX6BenPyF9xixqixIff25MhMKOujs0GOqUB%2FSivvjVJ5yFVu1kk8aBtT0R6Z6MmtOAyY7gZL2%2B300OZPb6LOXJd%2BUFZo1%2FW6URqcGf8rWJTq6QbWLtg1UIJYAhz9i3kyXlGc4r4Oo2NRqIh0%2FOMoeNbKZcv6ygLy10ZwWQauEK%2FamjO9GTxCfKXOk2RTclI%2B7zC1%2F36NJEYHG%2B9RUGN9trO93Ex3RDDvgaU98vzrJ%2FfPChmerDrNUVddatQLRiS&X-Amz-Signature=02a51c34943b6852f762ab9b8b915cfc1f0d6eb6ff52b5943500b3f48f0b2052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
