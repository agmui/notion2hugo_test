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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXFVEUI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXGUkC0t7BLluhS8%2Fcu%2BlgJMLbC3KN7pbkDQzPVCT6HwIgUEFLLQuih1dsJwvcU1fGEOfee4nWLo6NWskLspMfCGwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrxkykCGtjX2Wv0XircA3E5pxbDxo0QVH8qe6iU%2F7l9cHKouSBU9aC6%2F%2FehIuSc4M8bBZ0RMdw0ccGTnKNE26lNqg4q2U4rJ29CP7U7Knh5vVbURRYPaoBqwTgqPkL01yYX2wKiQ57%2BIPSwvAMUSf0y48I4lbJvPhGzgM0xn4IFGVnJXPCLBMSLzbAnedfKMJpOJ%2FFTOiDTqNhihLF3qI16hMbIkwmanXuX%2B2Entzsf5A20Rv4EAoj%2B6RiH2DDa1kHpuU7gV7R7GbLJ1ySmtMzl%2BNMF19KQZD9erdPdCU%2Bjwmval%2FLtiNHBSWLDLa0nAfO9%2FuekVgCDqieZxPymCZlbyCZlKdp4Mb%2BD5sOsh85dDpkXygUWwLujLewPZIy0SWVf8s5RbQPUzCbHdLp2bRBDM8iLks20KOd5IJoNpZ1qINBgB1dWMxSDiYjVUjhQadpYRGzov2jPVOd35JduPf2saSwwc2q%2BbcGciO1J4GcvqqKckCbVi6Dlet2xwSRZviKxfX1Ke8lRJABcsFQAYntUJdCBN3I55mIMeNN1iAyHwbUga5hA3y8JKkDtY1doJv3VB%2FJUXlyLaLBt8WfnRujy9dhueshJY%2BtXvykvWS%2Fx5qUt9D8n2CaXeu1mtZcANeZGOZK%2B8%2FnfYVJSMILWxcMGOqUBlW0G15eywPGaNjIf8aJ9GWqYPeVxVeVGdT2BHEqJJq1Ui7N9HLKtY9j6LELbzcODAwq08On9GF7U6%2BbqcgzQ986Dx5i%2B2uhtUx8FXJ3A%2B8tYcVAO8UelIjRZEUx8h32L%2FjY1hWh2eN4nSC22ATFJiIanCKXQmFjZEittqZa3nLo%2FCr7XD5d6mnpqQ0b8hJKbq%2F81EHB39L3X5dXZEI5z7baW9vxR&X-Amz-Signature=a32dfbef38ad0b6954b3f6b1c4f9a1e4cecfb168cb0ee5a7098e037dba126412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXFVEUI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXGUkC0t7BLluhS8%2Fcu%2BlgJMLbC3KN7pbkDQzPVCT6HwIgUEFLLQuih1dsJwvcU1fGEOfee4nWLo6NWskLspMfCGwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrxkykCGtjX2Wv0XircA3E5pxbDxo0QVH8qe6iU%2F7l9cHKouSBU9aC6%2F%2FehIuSc4M8bBZ0RMdw0ccGTnKNE26lNqg4q2U4rJ29CP7U7Knh5vVbURRYPaoBqwTgqPkL01yYX2wKiQ57%2BIPSwvAMUSf0y48I4lbJvPhGzgM0xn4IFGVnJXPCLBMSLzbAnedfKMJpOJ%2FFTOiDTqNhihLF3qI16hMbIkwmanXuX%2B2Entzsf5A20Rv4EAoj%2B6RiH2DDa1kHpuU7gV7R7GbLJ1ySmtMzl%2BNMF19KQZD9erdPdCU%2Bjwmval%2FLtiNHBSWLDLa0nAfO9%2FuekVgCDqieZxPymCZlbyCZlKdp4Mb%2BD5sOsh85dDpkXygUWwLujLewPZIy0SWVf8s5RbQPUzCbHdLp2bRBDM8iLks20KOd5IJoNpZ1qINBgB1dWMxSDiYjVUjhQadpYRGzov2jPVOd35JduPf2saSwwc2q%2BbcGciO1J4GcvqqKckCbVi6Dlet2xwSRZviKxfX1Ke8lRJABcsFQAYntUJdCBN3I55mIMeNN1iAyHwbUga5hA3y8JKkDtY1doJv3VB%2FJUXlyLaLBt8WfnRujy9dhueshJY%2BtXvykvWS%2Fx5qUt9D8n2CaXeu1mtZcANeZGOZK%2B8%2FnfYVJSMILWxcMGOqUBlW0G15eywPGaNjIf8aJ9GWqYPeVxVeVGdT2BHEqJJq1Ui7N9HLKtY9j6LELbzcODAwq08On9GF7U6%2BbqcgzQ986Dx5i%2B2uhtUx8FXJ3A%2B8tYcVAO8UelIjRZEUx8h32L%2FjY1hWh2eN4nSC22ATFJiIanCKXQmFjZEittqZa3nLo%2FCr7XD5d6mnpqQ0b8hJKbq%2F81EHB39L3X5dXZEI5z7baW9vxR&X-Amz-Signature=1c7219bdb89cab56f42ed7c56870ee15d2230e54b53e1dae496c2f0c7d5b58c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXFVEUI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXGUkC0t7BLluhS8%2Fcu%2BlgJMLbC3KN7pbkDQzPVCT6HwIgUEFLLQuih1dsJwvcU1fGEOfee4nWLo6NWskLspMfCGwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrxkykCGtjX2Wv0XircA3E5pxbDxo0QVH8qe6iU%2F7l9cHKouSBU9aC6%2F%2FehIuSc4M8bBZ0RMdw0ccGTnKNE26lNqg4q2U4rJ29CP7U7Knh5vVbURRYPaoBqwTgqPkL01yYX2wKiQ57%2BIPSwvAMUSf0y48I4lbJvPhGzgM0xn4IFGVnJXPCLBMSLzbAnedfKMJpOJ%2FFTOiDTqNhihLF3qI16hMbIkwmanXuX%2B2Entzsf5A20Rv4EAoj%2B6RiH2DDa1kHpuU7gV7R7GbLJ1ySmtMzl%2BNMF19KQZD9erdPdCU%2Bjwmval%2FLtiNHBSWLDLa0nAfO9%2FuekVgCDqieZxPymCZlbyCZlKdp4Mb%2BD5sOsh85dDpkXygUWwLujLewPZIy0SWVf8s5RbQPUzCbHdLp2bRBDM8iLks20KOd5IJoNpZ1qINBgB1dWMxSDiYjVUjhQadpYRGzov2jPVOd35JduPf2saSwwc2q%2BbcGciO1J4GcvqqKckCbVi6Dlet2xwSRZviKxfX1Ke8lRJABcsFQAYntUJdCBN3I55mIMeNN1iAyHwbUga5hA3y8JKkDtY1doJv3VB%2FJUXlyLaLBt8WfnRujy9dhueshJY%2BtXvykvWS%2Fx5qUt9D8n2CaXeu1mtZcANeZGOZK%2B8%2FnfYVJSMILWxcMGOqUBlW0G15eywPGaNjIf8aJ9GWqYPeVxVeVGdT2BHEqJJq1Ui7N9HLKtY9j6LELbzcODAwq08On9GF7U6%2BbqcgzQ986Dx5i%2B2uhtUx8FXJ3A%2B8tYcVAO8UelIjRZEUx8h32L%2FjY1hWh2eN4nSC22ATFJiIanCKXQmFjZEittqZa3nLo%2FCr7XD5d6mnpqQ0b8hJKbq%2F81EHB39L3X5dXZEI5z7baW9vxR&X-Amz-Signature=a9c62ef69e4a9e89e627a883c5ba147297d8121ca2a190223527d9c9feff6446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXFVEUI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXGUkC0t7BLluhS8%2Fcu%2BlgJMLbC3KN7pbkDQzPVCT6HwIgUEFLLQuih1dsJwvcU1fGEOfee4nWLo6NWskLspMfCGwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrxkykCGtjX2Wv0XircA3E5pxbDxo0QVH8qe6iU%2F7l9cHKouSBU9aC6%2F%2FehIuSc4M8bBZ0RMdw0ccGTnKNE26lNqg4q2U4rJ29CP7U7Knh5vVbURRYPaoBqwTgqPkL01yYX2wKiQ57%2BIPSwvAMUSf0y48I4lbJvPhGzgM0xn4IFGVnJXPCLBMSLzbAnedfKMJpOJ%2FFTOiDTqNhihLF3qI16hMbIkwmanXuX%2B2Entzsf5A20Rv4EAoj%2B6RiH2DDa1kHpuU7gV7R7GbLJ1ySmtMzl%2BNMF19KQZD9erdPdCU%2Bjwmval%2FLtiNHBSWLDLa0nAfO9%2FuekVgCDqieZxPymCZlbyCZlKdp4Mb%2BD5sOsh85dDpkXygUWwLujLewPZIy0SWVf8s5RbQPUzCbHdLp2bRBDM8iLks20KOd5IJoNpZ1qINBgB1dWMxSDiYjVUjhQadpYRGzov2jPVOd35JduPf2saSwwc2q%2BbcGciO1J4GcvqqKckCbVi6Dlet2xwSRZviKxfX1Ke8lRJABcsFQAYntUJdCBN3I55mIMeNN1iAyHwbUga5hA3y8JKkDtY1doJv3VB%2FJUXlyLaLBt8WfnRujy9dhueshJY%2BtXvykvWS%2Fx5qUt9D8n2CaXeu1mtZcANeZGOZK%2B8%2FnfYVJSMILWxcMGOqUBlW0G15eywPGaNjIf8aJ9GWqYPeVxVeVGdT2BHEqJJq1Ui7N9HLKtY9j6LELbzcODAwq08On9GF7U6%2BbqcgzQ986Dx5i%2B2uhtUx8FXJ3A%2B8tYcVAO8UelIjRZEUx8h32L%2FjY1hWh2eN4nSC22ATFJiIanCKXQmFjZEittqZa3nLo%2FCr7XD5d6mnpqQ0b8hJKbq%2F81EHB39L3X5dXZEI5z7baW9vxR&X-Amz-Signature=443e51c90ed86cc7968b0ff0324fec055094de1c6c418bfecd3172b465159f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXFVEUI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXGUkC0t7BLluhS8%2Fcu%2BlgJMLbC3KN7pbkDQzPVCT6HwIgUEFLLQuih1dsJwvcU1fGEOfee4nWLo6NWskLspMfCGwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrxkykCGtjX2Wv0XircA3E5pxbDxo0QVH8qe6iU%2F7l9cHKouSBU9aC6%2F%2FehIuSc4M8bBZ0RMdw0ccGTnKNE26lNqg4q2U4rJ29CP7U7Knh5vVbURRYPaoBqwTgqPkL01yYX2wKiQ57%2BIPSwvAMUSf0y48I4lbJvPhGzgM0xn4IFGVnJXPCLBMSLzbAnedfKMJpOJ%2FFTOiDTqNhihLF3qI16hMbIkwmanXuX%2B2Entzsf5A20Rv4EAoj%2B6RiH2DDa1kHpuU7gV7R7GbLJ1ySmtMzl%2BNMF19KQZD9erdPdCU%2Bjwmval%2FLtiNHBSWLDLa0nAfO9%2FuekVgCDqieZxPymCZlbyCZlKdp4Mb%2BD5sOsh85dDpkXygUWwLujLewPZIy0SWVf8s5RbQPUzCbHdLp2bRBDM8iLks20KOd5IJoNpZ1qINBgB1dWMxSDiYjVUjhQadpYRGzov2jPVOd35JduPf2saSwwc2q%2BbcGciO1J4GcvqqKckCbVi6Dlet2xwSRZviKxfX1Ke8lRJABcsFQAYntUJdCBN3I55mIMeNN1iAyHwbUga5hA3y8JKkDtY1doJv3VB%2FJUXlyLaLBt8WfnRujy9dhueshJY%2BtXvykvWS%2Fx5qUt9D8n2CaXeu1mtZcANeZGOZK%2B8%2FnfYVJSMILWxcMGOqUBlW0G15eywPGaNjIf8aJ9GWqYPeVxVeVGdT2BHEqJJq1Ui7N9HLKtY9j6LELbzcODAwq08On9GF7U6%2BbqcgzQ986Dx5i%2B2uhtUx8FXJ3A%2B8tYcVAO8UelIjRZEUx8h32L%2FjY1hWh2eN4nSC22ATFJiIanCKXQmFjZEittqZa3nLo%2FCr7XD5d6mnpqQ0b8hJKbq%2F81EHB39L3X5dXZEI5z7baW9vxR&X-Amz-Signature=c598f9435ab81704a11d3597f10b88b17959029ee3f1be8aef09a0f0000c2d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXFVEUI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXGUkC0t7BLluhS8%2Fcu%2BlgJMLbC3KN7pbkDQzPVCT6HwIgUEFLLQuih1dsJwvcU1fGEOfee4nWLo6NWskLspMfCGwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrxkykCGtjX2Wv0XircA3E5pxbDxo0QVH8qe6iU%2F7l9cHKouSBU9aC6%2F%2FehIuSc4M8bBZ0RMdw0ccGTnKNE26lNqg4q2U4rJ29CP7U7Knh5vVbURRYPaoBqwTgqPkL01yYX2wKiQ57%2BIPSwvAMUSf0y48I4lbJvPhGzgM0xn4IFGVnJXPCLBMSLzbAnedfKMJpOJ%2FFTOiDTqNhihLF3qI16hMbIkwmanXuX%2B2Entzsf5A20Rv4EAoj%2B6RiH2DDa1kHpuU7gV7R7GbLJ1ySmtMzl%2BNMF19KQZD9erdPdCU%2Bjwmval%2FLtiNHBSWLDLa0nAfO9%2FuekVgCDqieZxPymCZlbyCZlKdp4Mb%2BD5sOsh85dDpkXygUWwLujLewPZIy0SWVf8s5RbQPUzCbHdLp2bRBDM8iLks20KOd5IJoNpZ1qINBgB1dWMxSDiYjVUjhQadpYRGzov2jPVOd35JduPf2saSwwc2q%2BbcGciO1J4GcvqqKckCbVi6Dlet2xwSRZviKxfX1Ke8lRJABcsFQAYntUJdCBN3I55mIMeNN1iAyHwbUga5hA3y8JKkDtY1doJv3VB%2FJUXlyLaLBt8WfnRujy9dhueshJY%2BtXvykvWS%2Fx5qUt9D8n2CaXeu1mtZcANeZGOZK%2B8%2FnfYVJSMILWxcMGOqUBlW0G15eywPGaNjIf8aJ9GWqYPeVxVeVGdT2BHEqJJq1Ui7N9HLKtY9j6LELbzcODAwq08On9GF7U6%2BbqcgzQ986Dx5i%2B2uhtUx8FXJ3A%2B8tYcVAO8UelIjRZEUx8h32L%2FjY1hWh2eN4nSC22ATFJiIanCKXQmFjZEittqZa3nLo%2FCr7XD5d6mnpqQ0b8hJKbq%2F81EHB39L3X5dXZEI5z7baW9vxR&X-Amz-Signature=25b0bbeb091fa07863f4f1f51eb400dc2ba2e7d71e36251fb019f5433bac3ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXFVEUI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXGUkC0t7BLluhS8%2Fcu%2BlgJMLbC3KN7pbkDQzPVCT6HwIgUEFLLQuih1dsJwvcU1fGEOfee4nWLo6NWskLspMfCGwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrxkykCGtjX2Wv0XircA3E5pxbDxo0QVH8qe6iU%2F7l9cHKouSBU9aC6%2F%2FehIuSc4M8bBZ0RMdw0ccGTnKNE26lNqg4q2U4rJ29CP7U7Knh5vVbURRYPaoBqwTgqPkL01yYX2wKiQ57%2BIPSwvAMUSf0y48I4lbJvPhGzgM0xn4IFGVnJXPCLBMSLzbAnedfKMJpOJ%2FFTOiDTqNhihLF3qI16hMbIkwmanXuX%2B2Entzsf5A20Rv4EAoj%2B6RiH2DDa1kHpuU7gV7R7GbLJ1ySmtMzl%2BNMF19KQZD9erdPdCU%2Bjwmval%2FLtiNHBSWLDLa0nAfO9%2FuekVgCDqieZxPymCZlbyCZlKdp4Mb%2BD5sOsh85dDpkXygUWwLujLewPZIy0SWVf8s5RbQPUzCbHdLp2bRBDM8iLks20KOd5IJoNpZ1qINBgB1dWMxSDiYjVUjhQadpYRGzov2jPVOd35JduPf2saSwwc2q%2BbcGciO1J4GcvqqKckCbVi6Dlet2xwSRZviKxfX1Ke8lRJABcsFQAYntUJdCBN3I55mIMeNN1iAyHwbUga5hA3y8JKkDtY1doJv3VB%2FJUXlyLaLBt8WfnRujy9dhueshJY%2BtXvykvWS%2Fx5qUt9D8n2CaXeu1mtZcANeZGOZK%2B8%2FnfYVJSMILWxcMGOqUBlW0G15eywPGaNjIf8aJ9GWqYPeVxVeVGdT2BHEqJJq1Ui7N9HLKtY9j6LELbzcODAwq08On9GF7U6%2BbqcgzQ986Dx5i%2B2uhtUx8FXJ3A%2B8tYcVAO8UelIjRZEUx8h32L%2FjY1hWh2eN4nSC22ATFJiIanCKXQmFjZEittqZa3nLo%2FCr7XD5d6mnpqQ0b8hJKbq%2F81EHB39L3X5dXZEI5z7baW9vxR&X-Amz-Signature=8b1918b8bf87893b1a0f089473bc609b406083d07040f42229651d4255eab911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
