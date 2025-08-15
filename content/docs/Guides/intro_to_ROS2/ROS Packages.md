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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG53OJ7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDif%2B3WGrTl%2FdylRHcBWCpI188rn63d1gmkTK5zm4Y%2BLAIgIowsWD8tCgn4tSa%2FiwHiSeuMGjF2bTJBooZTgfMLR34q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE6oR%2BT8oO8g4RGSRyrcA%2ByA8c%2BByff6C%2FJS3iNNfHKDUuDF8HtnHpv56UsQ03QPu2Zd8TCQY2v6YwVp25QxHGNMSMiBGt9IX0R2uv2lm0ycWaLXN4OKxeWDGwZNLyrgHf6dw34pVuY%2B6vQ7a4X3C%2FyIYFwI%2BFQtK12e6tbx8DI3edILu9MTktHe8C%2BB5loCfuI95pEE8BelUZdp7wJ6U%2BrZFkhskfIcIMUJqB7l5yV0gGIXSblCsx8RrUIVlsAy%2Bo3GR1gpJFI16nX35cOyPqrhkmb4hySkbG%2BePJZOujvlMcYnSoLZLuha%2By9vgkW%2Fr%2FT0uDiEcz%2FdEbCSUSbb6%2BKay37uVXFhz%2BkxvkshLfjDp79z1VnQaLB1PHK19X1Lp0%2BhYNUnPTqw6PKgbMN3blwzdRBiA9r0uIpoBH%2FBnIsL87mIvrdOSUfuRdqAc%2F5d0p0ivQlPBGCBG2jdiV17KhuIPTQUHq6Jl7jN9fxcmS0TSnTG60qmBbzZi%2FiWrxKIhavmb2z0U%2FGiyYNapTv5HPztGzTx%2Bnpo1mL%2F9ViHk9xEDLlz3DukuB1v9UOZX98ax4fbEtINKc%2FN0HYfrQdDcnK0bJ6vrtNVpKgDaVuM0%2B16gb2wpe7V1FrUE%2Fdho%2BSiR7dg%2BehoHz5FP0auMJy3%2FMQGOqUBMUfrR1HLaMSdweW6v4gqkkdKSTIG8dcGFfrIDw%2FRLocwuMaPzV1qJZDEK%2BC5aihbmkcAU0Sz4zCJhEFJg8OcR6y8hkvYpkDnEwcJjWu3IIfm0mxPvBYE6Mt5ah9MdvNJq%2F5GG6rhVd9LuGEqS0l5i60oz1bQhUvmYGnycglZQumJiN8KXo36NOVWdEgRrzos0q3bitOf8neIJGBR1I5a2X2sE8Dg&X-Amz-Signature=8577fa28d70a53ad85b95d633965b6f51479fcd9469d9f7528b767ba62fbddf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG53OJ7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDif%2B3WGrTl%2FdylRHcBWCpI188rn63d1gmkTK5zm4Y%2BLAIgIowsWD8tCgn4tSa%2FiwHiSeuMGjF2bTJBooZTgfMLR34q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE6oR%2BT8oO8g4RGSRyrcA%2ByA8c%2BByff6C%2FJS3iNNfHKDUuDF8HtnHpv56UsQ03QPu2Zd8TCQY2v6YwVp25QxHGNMSMiBGt9IX0R2uv2lm0ycWaLXN4OKxeWDGwZNLyrgHf6dw34pVuY%2B6vQ7a4X3C%2FyIYFwI%2BFQtK12e6tbx8DI3edILu9MTktHe8C%2BB5loCfuI95pEE8BelUZdp7wJ6U%2BrZFkhskfIcIMUJqB7l5yV0gGIXSblCsx8RrUIVlsAy%2Bo3GR1gpJFI16nX35cOyPqrhkmb4hySkbG%2BePJZOujvlMcYnSoLZLuha%2By9vgkW%2Fr%2FT0uDiEcz%2FdEbCSUSbb6%2BKay37uVXFhz%2BkxvkshLfjDp79z1VnQaLB1PHK19X1Lp0%2BhYNUnPTqw6PKgbMN3blwzdRBiA9r0uIpoBH%2FBnIsL87mIvrdOSUfuRdqAc%2F5d0p0ivQlPBGCBG2jdiV17KhuIPTQUHq6Jl7jN9fxcmS0TSnTG60qmBbzZi%2FiWrxKIhavmb2z0U%2FGiyYNapTv5HPztGzTx%2Bnpo1mL%2F9ViHk9xEDLlz3DukuB1v9UOZX98ax4fbEtINKc%2FN0HYfrQdDcnK0bJ6vrtNVpKgDaVuM0%2B16gb2wpe7V1FrUE%2Fdho%2BSiR7dg%2BehoHz5FP0auMJy3%2FMQGOqUBMUfrR1HLaMSdweW6v4gqkkdKSTIG8dcGFfrIDw%2FRLocwuMaPzV1qJZDEK%2BC5aihbmkcAU0Sz4zCJhEFJg8OcR6y8hkvYpkDnEwcJjWu3IIfm0mxPvBYE6Mt5ah9MdvNJq%2F5GG6rhVd9LuGEqS0l5i60oz1bQhUvmYGnycglZQumJiN8KXo36NOVWdEgRrzos0q3bitOf8neIJGBR1I5a2X2sE8Dg&X-Amz-Signature=be58814927dbf9f0312139b1b63074823cb640ad3e01f50789cf991d936e6720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG53OJ7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDif%2B3WGrTl%2FdylRHcBWCpI188rn63d1gmkTK5zm4Y%2BLAIgIowsWD8tCgn4tSa%2FiwHiSeuMGjF2bTJBooZTgfMLR34q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE6oR%2BT8oO8g4RGSRyrcA%2ByA8c%2BByff6C%2FJS3iNNfHKDUuDF8HtnHpv56UsQ03QPu2Zd8TCQY2v6YwVp25QxHGNMSMiBGt9IX0R2uv2lm0ycWaLXN4OKxeWDGwZNLyrgHf6dw34pVuY%2B6vQ7a4X3C%2FyIYFwI%2BFQtK12e6tbx8DI3edILu9MTktHe8C%2BB5loCfuI95pEE8BelUZdp7wJ6U%2BrZFkhskfIcIMUJqB7l5yV0gGIXSblCsx8RrUIVlsAy%2Bo3GR1gpJFI16nX35cOyPqrhkmb4hySkbG%2BePJZOujvlMcYnSoLZLuha%2By9vgkW%2Fr%2FT0uDiEcz%2FdEbCSUSbb6%2BKay37uVXFhz%2BkxvkshLfjDp79z1VnQaLB1PHK19X1Lp0%2BhYNUnPTqw6PKgbMN3blwzdRBiA9r0uIpoBH%2FBnIsL87mIvrdOSUfuRdqAc%2F5d0p0ivQlPBGCBG2jdiV17KhuIPTQUHq6Jl7jN9fxcmS0TSnTG60qmBbzZi%2FiWrxKIhavmb2z0U%2FGiyYNapTv5HPztGzTx%2Bnpo1mL%2F9ViHk9xEDLlz3DukuB1v9UOZX98ax4fbEtINKc%2FN0HYfrQdDcnK0bJ6vrtNVpKgDaVuM0%2B16gb2wpe7V1FrUE%2Fdho%2BSiR7dg%2BehoHz5FP0auMJy3%2FMQGOqUBMUfrR1HLaMSdweW6v4gqkkdKSTIG8dcGFfrIDw%2FRLocwuMaPzV1qJZDEK%2BC5aihbmkcAU0Sz4zCJhEFJg8OcR6y8hkvYpkDnEwcJjWu3IIfm0mxPvBYE6Mt5ah9MdvNJq%2F5GG6rhVd9LuGEqS0l5i60oz1bQhUvmYGnycglZQumJiN8KXo36NOVWdEgRrzos0q3bitOf8neIJGBR1I5a2X2sE8Dg&X-Amz-Signature=618ccaead0dc2106358b276f99c6ea75e23eff1ca7c2fbffe1e3299e569d163a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG53OJ7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDif%2B3WGrTl%2FdylRHcBWCpI188rn63d1gmkTK5zm4Y%2BLAIgIowsWD8tCgn4tSa%2FiwHiSeuMGjF2bTJBooZTgfMLR34q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE6oR%2BT8oO8g4RGSRyrcA%2ByA8c%2BByff6C%2FJS3iNNfHKDUuDF8HtnHpv56UsQ03QPu2Zd8TCQY2v6YwVp25QxHGNMSMiBGt9IX0R2uv2lm0ycWaLXN4OKxeWDGwZNLyrgHf6dw34pVuY%2B6vQ7a4X3C%2FyIYFwI%2BFQtK12e6tbx8DI3edILu9MTktHe8C%2BB5loCfuI95pEE8BelUZdp7wJ6U%2BrZFkhskfIcIMUJqB7l5yV0gGIXSblCsx8RrUIVlsAy%2Bo3GR1gpJFI16nX35cOyPqrhkmb4hySkbG%2BePJZOujvlMcYnSoLZLuha%2By9vgkW%2Fr%2FT0uDiEcz%2FdEbCSUSbb6%2BKay37uVXFhz%2BkxvkshLfjDp79z1VnQaLB1PHK19X1Lp0%2BhYNUnPTqw6PKgbMN3blwzdRBiA9r0uIpoBH%2FBnIsL87mIvrdOSUfuRdqAc%2F5d0p0ivQlPBGCBG2jdiV17KhuIPTQUHq6Jl7jN9fxcmS0TSnTG60qmBbzZi%2FiWrxKIhavmb2z0U%2FGiyYNapTv5HPztGzTx%2Bnpo1mL%2F9ViHk9xEDLlz3DukuB1v9UOZX98ax4fbEtINKc%2FN0HYfrQdDcnK0bJ6vrtNVpKgDaVuM0%2B16gb2wpe7V1FrUE%2Fdho%2BSiR7dg%2BehoHz5FP0auMJy3%2FMQGOqUBMUfrR1HLaMSdweW6v4gqkkdKSTIG8dcGFfrIDw%2FRLocwuMaPzV1qJZDEK%2BC5aihbmkcAU0Sz4zCJhEFJg8OcR6y8hkvYpkDnEwcJjWu3IIfm0mxPvBYE6Mt5ah9MdvNJq%2F5GG6rhVd9LuGEqS0l5i60oz1bQhUvmYGnycglZQumJiN8KXo36NOVWdEgRrzos0q3bitOf8neIJGBR1I5a2X2sE8Dg&X-Amz-Signature=9169b205f8c9ea79eb9427a3c9f6d5bddc22d3a4e59893c3bd6681289a8f6009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG53OJ7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDif%2B3WGrTl%2FdylRHcBWCpI188rn63d1gmkTK5zm4Y%2BLAIgIowsWD8tCgn4tSa%2FiwHiSeuMGjF2bTJBooZTgfMLR34q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE6oR%2BT8oO8g4RGSRyrcA%2ByA8c%2BByff6C%2FJS3iNNfHKDUuDF8HtnHpv56UsQ03QPu2Zd8TCQY2v6YwVp25QxHGNMSMiBGt9IX0R2uv2lm0ycWaLXN4OKxeWDGwZNLyrgHf6dw34pVuY%2B6vQ7a4X3C%2FyIYFwI%2BFQtK12e6tbx8DI3edILu9MTktHe8C%2BB5loCfuI95pEE8BelUZdp7wJ6U%2BrZFkhskfIcIMUJqB7l5yV0gGIXSblCsx8RrUIVlsAy%2Bo3GR1gpJFI16nX35cOyPqrhkmb4hySkbG%2BePJZOujvlMcYnSoLZLuha%2By9vgkW%2Fr%2FT0uDiEcz%2FdEbCSUSbb6%2BKay37uVXFhz%2BkxvkshLfjDp79z1VnQaLB1PHK19X1Lp0%2BhYNUnPTqw6PKgbMN3blwzdRBiA9r0uIpoBH%2FBnIsL87mIvrdOSUfuRdqAc%2F5d0p0ivQlPBGCBG2jdiV17KhuIPTQUHq6Jl7jN9fxcmS0TSnTG60qmBbzZi%2FiWrxKIhavmb2z0U%2FGiyYNapTv5HPztGzTx%2Bnpo1mL%2F9ViHk9xEDLlz3DukuB1v9UOZX98ax4fbEtINKc%2FN0HYfrQdDcnK0bJ6vrtNVpKgDaVuM0%2B16gb2wpe7V1FrUE%2Fdho%2BSiR7dg%2BehoHz5FP0auMJy3%2FMQGOqUBMUfrR1HLaMSdweW6v4gqkkdKSTIG8dcGFfrIDw%2FRLocwuMaPzV1qJZDEK%2BC5aihbmkcAU0Sz4zCJhEFJg8OcR6y8hkvYpkDnEwcJjWu3IIfm0mxPvBYE6Mt5ah9MdvNJq%2F5GG6rhVd9LuGEqS0l5i60oz1bQhUvmYGnycglZQumJiN8KXo36NOVWdEgRrzos0q3bitOf8neIJGBR1I5a2X2sE8Dg&X-Amz-Signature=636edddedea00f0eecd6ed49a8e6e5153322324e26a9c9f214e695d4d1e1e461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG53OJ7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDif%2B3WGrTl%2FdylRHcBWCpI188rn63d1gmkTK5zm4Y%2BLAIgIowsWD8tCgn4tSa%2FiwHiSeuMGjF2bTJBooZTgfMLR34q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE6oR%2BT8oO8g4RGSRyrcA%2ByA8c%2BByff6C%2FJS3iNNfHKDUuDF8HtnHpv56UsQ03QPu2Zd8TCQY2v6YwVp25QxHGNMSMiBGt9IX0R2uv2lm0ycWaLXN4OKxeWDGwZNLyrgHf6dw34pVuY%2B6vQ7a4X3C%2FyIYFwI%2BFQtK12e6tbx8DI3edILu9MTktHe8C%2BB5loCfuI95pEE8BelUZdp7wJ6U%2BrZFkhskfIcIMUJqB7l5yV0gGIXSblCsx8RrUIVlsAy%2Bo3GR1gpJFI16nX35cOyPqrhkmb4hySkbG%2BePJZOujvlMcYnSoLZLuha%2By9vgkW%2Fr%2FT0uDiEcz%2FdEbCSUSbb6%2BKay37uVXFhz%2BkxvkshLfjDp79z1VnQaLB1PHK19X1Lp0%2BhYNUnPTqw6PKgbMN3blwzdRBiA9r0uIpoBH%2FBnIsL87mIvrdOSUfuRdqAc%2F5d0p0ivQlPBGCBG2jdiV17KhuIPTQUHq6Jl7jN9fxcmS0TSnTG60qmBbzZi%2FiWrxKIhavmb2z0U%2FGiyYNapTv5HPztGzTx%2Bnpo1mL%2F9ViHk9xEDLlz3DukuB1v9UOZX98ax4fbEtINKc%2FN0HYfrQdDcnK0bJ6vrtNVpKgDaVuM0%2B16gb2wpe7V1FrUE%2Fdho%2BSiR7dg%2BehoHz5FP0auMJy3%2FMQGOqUBMUfrR1HLaMSdweW6v4gqkkdKSTIG8dcGFfrIDw%2FRLocwuMaPzV1qJZDEK%2BC5aihbmkcAU0Sz4zCJhEFJg8OcR6y8hkvYpkDnEwcJjWu3IIfm0mxPvBYE6Mt5ah9MdvNJq%2F5GG6rhVd9LuGEqS0l5i60oz1bQhUvmYGnycglZQumJiN8KXo36NOVWdEgRrzos0q3bitOf8neIJGBR1I5a2X2sE8Dg&X-Amz-Signature=ac485e59abc722cd0377df3c3b5e01b5a98408c2f4f1cb51b3fe4286bc1d7b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG53OJ7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDif%2B3WGrTl%2FdylRHcBWCpI188rn63d1gmkTK5zm4Y%2BLAIgIowsWD8tCgn4tSa%2FiwHiSeuMGjF2bTJBooZTgfMLR34q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE6oR%2BT8oO8g4RGSRyrcA%2ByA8c%2BByff6C%2FJS3iNNfHKDUuDF8HtnHpv56UsQ03QPu2Zd8TCQY2v6YwVp25QxHGNMSMiBGt9IX0R2uv2lm0ycWaLXN4OKxeWDGwZNLyrgHf6dw34pVuY%2B6vQ7a4X3C%2FyIYFwI%2BFQtK12e6tbx8DI3edILu9MTktHe8C%2BB5loCfuI95pEE8BelUZdp7wJ6U%2BrZFkhskfIcIMUJqB7l5yV0gGIXSblCsx8RrUIVlsAy%2Bo3GR1gpJFI16nX35cOyPqrhkmb4hySkbG%2BePJZOujvlMcYnSoLZLuha%2By9vgkW%2Fr%2FT0uDiEcz%2FdEbCSUSbb6%2BKay37uVXFhz%2BkxvkshLfjDp79z1VnQaLB1PHK19X1Lp0%2BhYNUnPTqw6PKgbMN3blwzdRBiA9r0uIpoBH%2FBnIsL87mIvrdOSUfuRdqAc%2F5d0p0ivQlPBGCBG2jdiV17KhuIPTQUHq6Jl7jN9fxcmS0TSnTG60qmBbzZi%2FiWrxKIhavmb2z0U%2FGiyYNapTv5HPztGzTx%2Bnpo1mL%2F9ViHk9xEDLlz3DukuB1v9UOZX98ax4fbEtINKc%2FN0HYfrQdDcnK0bJ6vrtNVpKgDaVuM0%2B16gb2wpe7V1FrUE%2Fdho%2BSiR7dg%2BehoHz5FP0auMJy3%2FMQGOqUBMUfrR1HLaMSdweW6v4gqkkdKSTIG8dcGFfrIDw%2FRLocwuMaPzV1qJZDEK%2BC5aihbmkcAU0Sz4zCJhEFJg8OcR6y8hkvYpkDnEwcJjWu3IIfm0mxPvBYE6Mt5ah9MdvNJq%2F5GG6rhVd9LuGEqS0l5i60oz1bQhUvmYGnycglZQumJiN8KXo36NOVWdEgRrzos0q3bitOf8neIJGBR1I5a2X2sE8Dg&X-Amz-Signature=66dc2f064de051ed8236bf08a5f47ea682a2274d27e215aaaa98cee6f420cfad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
