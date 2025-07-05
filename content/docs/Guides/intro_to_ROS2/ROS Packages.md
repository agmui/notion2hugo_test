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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=c3348e9fc664e535a055850b2bb8636312105845b9d42ed3bf0c10d684d61c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=14d6b2e7d6961271585b21fa4deca5a777ad298a497bd3ec97443ca544f49397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=749e3055fcd6d35935cafe26f5ee6cec22d5e4e481ae342449180f283e731a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=5dc263ee01fba9ddecb8292a364e6b2ee1c4bc2e532f56da68030d85445ac6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=4bcd3aec8d28f6dfaac307a7241e6660b66d1fdc48bb256dde24f936f688eba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=ec1f6644402d3578c33db31049e3b449fafda49d2894b2d3c12392f01594caa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=7ae3d00b6fc2cd6a65f4860bc0b31b4f187c09a03b5892d94bf77627c02c50d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
