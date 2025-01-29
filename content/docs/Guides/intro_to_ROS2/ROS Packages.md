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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZ4RHJ3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDhWhi1bHYDcG4YendrNh2oEnUufDvF6t9fE1aO%2BpMeIAiEAk2s1PeVn8%2BEHEdM%2BYeX66mPb0HW8tqSdBZjapJM5rl4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGczpCKL%2BE6%2FVX%2BU7yrcA4E0Bg2mAqyJCQ4tF6pfq%2F8g8CtqK47YkrRhRjQmIC1JXV0ZZEj5tioGotF%2FnofRMM9f0y64Z9r6YHMAbUceLFS8p7uJQ6wTmu4noC1Xm%2F%2FYya4U8TwNCUQdTqjhSVnXNoymw7LsgsqvzWMBO6zC%2FRo%2FICxE9g14u1NfU5dtfolUFKo2Fsbq8YDFmLFatFP%2FjIuVEPYhy20VfYwfL8vxI7pwAckf5u40Byn3MWx%2Bi5hTj40bMD1ecdOXZNRGfOvTxOe2PNcMkx2%2B9BZdVHeV5ZxeV%2BR%2BR8nRj67taF7guKnIQpJGqMvUM5rUo1Y3ZO76spIOOVmBqyCJXoAmdHFX7ssO03SbO2Uh2qWCQzTzu2VFZhz4vMiavN2vWpVhVryGxegvCMvdlsG3Rs8AMEbV%2F21u8NLSyUcKg%2FyeIpOyWo7wsg5ChFAzOWVmNJ6sAR5zTKloB8py6iLxFwboSwRIYMKb%2FRZUA%2Fmh3zScXJFywH9J01zpSOHsA40GaPYoXETYkwfiBfDcygfRhe67d5IgB0DH%2ByAN82L%2B8d%2F7cTE%2BLZsZJxyKQ3Iyfe1x7DbKYgDw0vBQ3u6TJosM4vKWFx8%2BymINFTy7x8yQ%2F%2BasWKC46jsUcVcpxkZUZmqE0gJMMIK85rwGOqUBHTKxbhDjXnhCp%2BbxnosEniAm0uGFVAsA6NYSk0fmBpTqdQlp69uu1rLf5CqK0qrbkqiEyeu16hOzlyA%2B%2F1aXj6gXU1zsfCHf4vxSx6uURG7AkBfHNPE5z2S6fnhnw6RSYnskFzHyqE4OpQREkwq1F2X%2FMwXORvrpmS8vmifOGdyXCVZmQ5YzZkeB5ZMQQZhj1rXUnid5pFMlJFp4%2FCiCY2TMMCSN&X-Amz-Signature=5d2ee64e1af666d7448c970888c5d12798757cc69fe8a69db09005e6ed95842a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZ4RHJ3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDhWhi1bHYDcG4YendrNh2oEnUufDvF6t9fE1aO%2BpMeIAiEAk2s1PeVn8%2BEHEdM%2BYeX66mPb0HW8tqSdBZjapJM5rl4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGczpCKL%2BE6%2FVX%2BU7yrcA4E0Bg2mAqyJCQ4tF6pfq%2F8g8CtqK47YkrRhRjQmIC1JXV0ZZEj5tioGotF%2FnofRMM9f0y64Z9r6YHMAbUceLFS8p7uJQ6wTmu4noC1Xm%2F%2FYya4U8TwNCUQdTqjhSVnXNoymw7LsgsqvzWMBO6zC%2FRo%2FICxE9g14u1NfU5dtfolUFKo2Fsbq8YDFmLFatFP%2FjIuVEPYhy20VfYwfL8vxI7pwAckf5u40Byn3MWx%2Bi5hTj40bMD1ecdOXZNRGfOvTxOe2PNcMkx2%2B9BZdVHeV5ZxeV%2BR%2BR8nRj67taF7guKnIQpJGqMvUM5rUo1Y3ZO76spIOOVmBqyCJXoAmdHFX7ssO03SbO2Uh2qWCQzTzu2VFZhz4vMiavN2vWpVhVryGxegvCMvdlsG3Rs8AMEbV%2F21u8NLSyUcKg%2FyeIpOyWo7wsg5ChFAzOWVmNJ6sAR5zTKloB8py6iLxFwboSwRIYMKb%2FRZUA%2Fmh3zScXJFywH9J01zpSOHsA40GaPYoXETYkwfiBfDcygfRhe67d5IgB0DH%2ByAN82L%2B8d%2F7cTE%2BLZsZJxyKQ3Iyfe1x7DbKYgDw0vBQ3u6TJosM4vKWFx8%2BymINFTy7x8yQ%2F%2BasWKC46jsUcVcpxkZUZmqE0gJMMIK85rwGOqUBHTKxbhDjXnhCp%2BbxnosEniAm0uGFVAsA6NYSk0fmBpTqdQlp69uu1rLf5CqK0qrbkqiEyeu16hOzlyA%2B%2F1aXj6gXU1zsfCHf4vxSx6uURG7AkBfHNPE5z2S6fnhnw6RSYnskFzHyqE4OpQREkwq1F2X%2FMwXORvrpmS8vmifOGdyXCVZmQ5YzZkeB5ZMQQZhj1rXUnid5pFMlJFp4%2FCiCY2TMMCSN&X-Amz-Signature=9ba0dd0e800e6e4535da8b00f157192c1c84ab6b058c62b7fd38a9726fd25670&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZ4RHJ3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDhWhi1bHYDcG4YendrNh2oEnUufDvF6t9fE1aO%2BpMeIAiEAk2s1PeVn8%2BEHEdM%2BYeX66mPb0HW8tqSdBZjapJM5rl4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGczpCKL%2BE6%2FVX%2BU7yrcA4E0Bg2mAqyJCQ4tF6pfq%2F8g8CtqK47YkrRhRjQmIC1JXV0ZZEj5tioGotF%2FnofRMM9f0y64Z9r6YHMAbUceLFS8p7uJQ6wTmu4noC1Xm%2F%2FYya4U8TwNCUQdTqjhSVnXNoymw7LsgsqvzWMBO6zC%2FRo%2FICxE9g14u1NfU5dtfolUFKo2Fsbq8YDFmLFatFP%2FjIuVEPYhy20VfYwfL8vxI7pwAckf5u40Byn3MWx%2Bi5hTj40bMD1ecdOXZNRGfOvTxOe2PNcMkx2%2B9BZdVHeV5ZxeV%2BR%2BR8nRj67taF7guKnIQpJGqMvUM5rUo1Y3ZO76spIOOVmBqyCJXoAmdHFX7ssO03SbO2Uh2qWCQzTzu2VFZhz4vMiavN2vWpVhVryGxegvCMvdlsG3Rs8AMEbV%2F21u8NLSyUcKg%2FyeIpOyWo7wsg5ChFAzOWVmNJ6sAR5zTKloB8py6iLxFwboSwRIYMKb%2FRZUA%2Fmh3zScXJFywH9J01zpSOHsA40GaPYoXETYkwfiBfDcygfRhe67d5IgB0DH%2ByAN82L%2B8d%2F7cTE%2BLZsZJxyKQ3Iyfe1x7DbKYgDw0vBQ3u6TJosM4vKWFx8%2BymINFTy7x8yQ%2F%2BasWKC46jsUcVcpxkZUZmqE0gJMMIK85rwGOqUBHTKxbhDjXnhCp%2BbxnosEniAm0uGFVAsA6NYSk0fmBpTqdQlp69uu1rLf5CqK0qrbkqiEyeu16hOzlyA%2B%2F1aXj6gXU1zsfCHf4vxSx6uURG7AkBfHNPE5z2S6fnhnw6RSYnskFzHyqE4OpQREkwq1F2X%2FMwXORvrpmS8vmifOGdyXCVZmQ5YzZkeB5ZMQQZhj1rXUnid5pFMlJFp4%2FCiCY2TMMCSN&X-Amz-Signature=f30749a2a931f820673b1ceeb8e857efde9fb9e17453cf017c67b770c0809fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZ4RHJ3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDhWhi1bHYDcG4YendrNh2oEnUufDvF6t9fE1aO%2BpMeIAiEAk2s1PeVn8%2BEHEdM%2BYeX66mPb0HW8tqSdBZjapJM5rl4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGczpCKL%2BE6%2FVX%2BU7yrcA4E0Bg2mAqyJCQ4tF6pfq%2F8g8CtqK47YkrRhRjQmIC1JXV0ZZEj5tioGotF%2FnofRMM9f0y64Z9r6YHMAbUceLFS8p7uJQ6wTmu4noC1Xm%2F%2FYya4U8TwNCUQdTqjhSVnXNoymw7LsgsqvzWMBO6zC%2FRo%2FICxE9g14u1NfU5dtfolUFKo2Fsbq8YDFmLFatFP%2FjIuVEPYhy20VfYwfL8vxI7pwAckf5u40Byn3MWx%2Bi5hTj40bMD1ecdOXZNRGfOvTxOe2PNcMkx2%2B9BZdVHeV5ZxeV%2BR%2BR8nRj67taF7guKnIQpJGqMvUM5rUo1Y3ZO76spIOOVmBqyCJXoAmdHFX7ssO03SbO2Uh2qWCQzTzu2VFZhz4vMiavN2vWpVhVryGxegvCMvdlsG3Rs8AMEbV%2F21u8NLSyUcKg%2FyeIpOyWo7wsg5ChFAzOWVmNJ6sAR5zTKloB8py6iLxFwboSwRIYMKb%2FRZUA%2Fmh3zScXJFywH9J01zpSOHsA40GaPYoXETYkwfiBfDcygfRhe67d5IgB0DH%2ByAN82L%2B8d%2F7cTE%2BLZsZJxyKQ3Iyfe1x7DbKYgDw0vBQ3u6TJosM4vKWFx8%2BymINFTy7x8yQ%2F%2BasWKC46jsUcVcpxkZUZmqE0gJMMIK85rwGOqUBHTKxbhDjXnhCp%2BbxnosEniAm0uGFVAsA6NYSk0fmBpTqdQlp69uu1rLf5CqK0qrbkqiEyeu16hOzlyA%2B%2F1aXj6gXU1zsfCHf4vxSx6uURG7AkBfHNPE5z2S6fnhnw6RSYnskFzHyqE4OpQREkwq1F2X%2FMwXORvrpmS8vmifOGdyXCVZmQ5YzZkeB5ZMQQZhj1rXUnid5pFMlJFp4%2FCiCY2TMMCSN&X-Amz-Signature=410192051f0c267004f653916a5e7c558b47d961cb4c6feb7f22ac9adcc07f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZ4RHJ3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDhWhi1bHYDcG4YendrNh2oEnUufDvF6t9fE1aO%2BpMeIAiEAk2s1PeVn8%2BEHEdM%2BYeX66mPb0HW8tqSdBZjapJM5rl4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGczpCKL%2BE6%2FVX%2BU7yrcA4E0Bg2mAqyJCQ4tF6pfq%2F8g8CtqK47YkrRhRjQmIC1JXV0ZZEj5tioGotF%2FnofRMM9f0y64Z9r6YHMAbUceLFS8p7uJQ6wTmu4noC1Xm%2F%2FYya4U8TwNCUQdTqjhSVnXNoymw7LsgsqvzWMBO6zC%2FRo%2FICxE9g14u1NfU5dtfolUFKo2Fsbq8YDFmLFatFP%2FjIuVEPYhy20VfYwfL8vxI7pwAckf5u40Byn3MWx%2Bi5hTj40bMD1ecdOXZNRGfOvTxOe2PNcMkx2%2B9BZdVHeV5ZxeV%2BR%2BR8nRj67taF7guKnIQpJGqMvUM5rUo1Y3ZO76spIOOVmBqyCJXoAmdHFX7ssO03SbO2Uh2qWCQzTzu2VFZhz4vMiavN2vWpVhVryGxegvCMvdlsG3Rs8AMEbV%2F21u8NLSyUcKg%2FyeIpOyWo7wsg5ChFAzOWVmNJ6sAR5zTKloB8py6iLxFwboSwRIYMKb%2FRZUA%2Fmh3zScXJFywH9J01zpSOHsA40GaPYoXETYkwfiBfDcygfRhe67d5IgB0DH%2ByAN82L%2B8d%2F7cTE%2BLZsZJxyKQ3Iyfe1x7DbKYgDw0vBQ3u6TJosM4vKWFx8%2BymINFTy7x8yQ%2F%2BasWKC46jsUcVcpxkZUZmqE0gJMMIK85rwGOqUBHTKxbhDjXnhCp%2BbxnosEniAm0uGFVAsA6NYSk0fmBpTqdQlp69uu1rLf5CqK0qrbkqiEyeu16hOzlyA%2B%2F1aXj6gXU1zsfCHf4vxSx6uURG7AkBfHNPE5z2S6fnhnw6RSYnskFzHyqE4OpQREkwq1F2X%2FMwXORvrpmS8vmifOGdyXCVZmQ5YzZkeB5ZMQQZhj1rXUnid5pFMlJFp4%2FCiCY2TMMCSN&X-Amz-Signature=30aa08b4bc666c09864b4a0f79ea014b755e927f195c1982a95a980c0c1cb8db&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZ4RHJ3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDhWhi1bHYDcG4YendrNh2oEnUufDvF6t9fE1aO%2BpMeIAiEAk2s1PeVn8%2BEHEdM%2BYeX66mPb0HW8tqSdBZjapJM5rl4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGczpCKL%2BE6%2FVX%2BU7yrcA4E0Bg2mAqyJCQ4tF6pfq%2F8g8CtqK47YkrRhRjQmIC1JXV0ZZEj5tioGotF%2FnofRMM9f0y64Z9r6YHMAbUceLFS8p7uJQ6wTmu4noC1Xm%2F%2FYya4U8TwNCUQdTqjhSVnXNoymw7LsgsqvzWMBO6zC%2FRo%2FICxE9g14u1NfU5dtfolUFKo2Fsbq8YDFmLFatFP%2FjIuVEPYhy20VfYwfL8vxI7pwAckf5u40Byn3MWx%2Bi5hTj40bMD1ecdOXZNRGfOvTxOe2PNcMkx2%2B9BZdVHeV5ZxeV%2BR%2BR8nRj67taF7guKnIQpJGqMvUM5rUo1Y3ZO76spIOOVmBqyCJXoAmdHFX7ssO03SbO2Uh2qWCQzTzu2VFZhz4vMiavN2vWpVhVryGxegvCMvdlsG3Rs8AMEbV%2F21u8NLSyUcKg%2FyeIpOyWo7wsg5ChFAzOWVmNJ6sAR5zTKloB8py6iLxFwboSwRIYMKb%2FRZUA%2Fmh3zScXJFywH9J01zpSOHsA40GaPYoXETYkwfiBfDcygfRhe67d5IgB0DH%2ByAN82L%2B8d%2F7cTE%2BLZsZJxyKQ3Iyfe1x7DbKYgDw0vBQ3u6TJosM4vKWFx8%2BymINFTy7x8yQ%2F%2BasWKC46jsUcVcpxkZUZmqE0gJMMIK85rwGOqUBHTKxbhDjXnhCp%2BbxnosEniAm0uGFVAsA6NYSk0fmBpTqdQlp69uu1rLf5CqK0qrbkqiEyeu16hOzlyA%2B%2F1aXj6gXU1zsfCHf4vxSx6uURG7AkBfHNPE5z2S6fnhnw6RSYnskFzHyqE4OpQREkwq1F2X%2FMwXORvrpmS8vmifOGdyXCVZmQ5YzZkeB5ZMQQZhj1rXUnid5pFMlJFp4%2FCiCY2TMMCSN&X-Amz-Signature=41c46d56fe4800f7922fef2eff89b27dc0a40005eba84a709641b8ddb4b8cd1d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZ4RHJ3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDhWhi1bHYDcG4YendrNh2oEnUufDvF6t9fE1aO%2BpMeIAiEAk2s1PeVn8%2BEHEdM%2BYeX66mPb0HW8tqSdBZjapJM5rl4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGczpCKL%2BE6%2FVX%2BU7yrcA4E0Bg2mAqyJCQ4tF6pfq%2F8g8CtqK47YkrRhRjQmIC1JXV0ZZEj5tioGotF%2FnofRMM9f0y64Z9r6YHMAbUceLFS8p7uJQ6wTmu4noC1Xm%2F%2FYya4U8TwNCUQdTqjhSVnXNoymw7LsgsqvzWMBO6zC%2FRo%2FICxE9g14u1NfU5dtfolUFKo2Fsbq8YDFmLFatFP%2FjIuVEPYhy20VfYwfL8vxI7pwAckf5u40Byn3MWx%2Bi5hTj40bMD1ecdOXZNRGfOvTxOe2PNcMkx2%2B9BZdVHeV5ZxeV%2BR%2BR8nRj67taF7guKnIQpJGqMvUM5rUo1Y3ZO76spIOOVmBqyCJXoAmdHFX7ssO03SbO2Uh2qWCQzTzu2VFZhz4vMiavN2vWpVhVryGxegvCMvdlsG3Rs8AMEbV%2F21u8NLSyUcKg%2FyeIpOyWo7wsg5ChFAzOWVmNJ6sAR5zTKloB8py6iLxFwboSwRIYMKb%2FRZUA%2Fmh3zScXJFywH9J01zpSOHsA40GaPYoXETYkwfiBfDcygfRhe67d5IgB0DH%2ByAN82L%2B8d%2F7cTE%2BLZsZJxyKQ3Iyfe1x7DbKYgDw0vBQ3u6TJosM4vKWFx8%2BymINFTy7x8yQ%2F%2BasWKC46jsUcVcpxkZUZmqE0gJMMIK85rwGOqUBHTKxbhDjXnhCp%2BbxnosEniAm0uGFVAsA6NYSk0fmBpTqdQlp69uu1rLf5CqK0qrbkqiEyeu16hOzlyA%2B%2F1aXj6gXU1zsfCHf4vxSx6uURG7AkBfHNPE5z2S6fnhnw6RSYnskFzHyqE4OpQREkwq1F2X%2FMwXORvrpmS8vmifOGdyXCVZmQ5YzZkeB5ZMQQZhj1rXUnid5pFMlJFp4%2FCiCY2TMMCSN&X-Amz-Signature=69005ec511d86e09548d6012195a02d055b63927267cdab563feab92e05a1ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
