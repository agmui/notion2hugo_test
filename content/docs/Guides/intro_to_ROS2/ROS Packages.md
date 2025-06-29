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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZCKXTZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe99gM5skApQ14sqtg6vX8U4f7gR7v6VO5X5HffHEyswIgGlE7QUmLBmybcRULylKVU4bPKw4oNCl4gvEdUH%2FvZpoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEG1nleAi2GGKUJOMyrcA7uQEJ8zS%2BoLPC1cFTzTEYhkhonDdDkdVMPeY6VAVdlnM3TbEz8anAofkaG0Hjkzc6Jjg6ByaY%2BlqWq7Cst2lzSReRVDzaeQEJNijpevw%2BXBinZ%2BFwT6Nru2wzZxjzKHd09G9I4BHa6kbglHCskiafC4UYNLcva%2Fl%2BstfYiU7KRq3bT3nUkQ4ZgmOB8gyrvNw9NvhNrXACpIopTKOxvOG%2FX4NRctwI5Ia2Ro%2FkKor4rP%2FDWuH%2BJr%2F52%2F8zghGki7EmCQbB9GLnJBeLVekQIXd7I2246Bnagd6zuZlt1%2B0qkXVXt1LBkGLTSYPtX5quvQBo93blt2bneZnR7Y0ZEaVHALhKhT23GoJqRQ%2FTcVb9zjcnMTjeKJFd0aPIBJQRnIEzKT5HVbc%2FFOnqyFc9FGJgG0%2FmQxgGTHkg%2B4wn0%2BFwVrIkVSbvmxMwX4gMUVIsFj5vbobrtUnv2Y9BqnIJwWpP7GKJUKGVbBncj5ENHqYrP94WdmLYBuwso7LFmo85xaZq4gGvD0LxWV1UyT2XGBeRi94ZRfQeTW6FnkFJN4B%2BVODTVUpmO6Fug5NFMt7Q7Howh%2Fz26nsdFfmDHxe29XsEOct6MfeX50UqFEfD%2FHoa2uZ%2BPTYi3FmIq0yaJZMPTMhsMGOqUB%2F5mBlcrL4VFqx83G9wixYCjf9MAd7gjufTwwoBZNeswqhSb4qty0mYf8oX0a9tVe32BXFtD%2FVUGnTRvKR4uVrbsOCMqVB%2BI3fKEvAVyg1xEwznCJF4yjPFMYhC8NNylw87URH9Hy7Mu8y9LDiRCnRYaQgbhwy0KK9ehzytbZpRGM7pyQj5ZidaTNSkXZ49FZXwOLKtPsLUfEamGcgix2XzupZAl4&X-Amz-Signature=501a1720a80a4a3ababd91723e85db71449f16f8929717502e417ae66b9b6a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZCKXTZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe99gM5skApQ14sqtg6vX8U4f7gR7v6VO5X5HffHEyswIgGlE7QUmLBmybcRULylKVU4bPKw4oNCl4gvEdUH%2FvZpoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEG1nleAi2GGKUJOMyrcA7uQEJ8zS%2BoLPC1cFTzTEYhkhonDdDkdVMPeY6VAVdlnM3TbEz8anAofkaG0Hjkzc6Jjg6ByaY%2BlqWq7Cst2lzSReRVDzaeQEJNijpevw%2BXBinZ%2BFwT6Nru2wzZxjzKHd09G9I4BHa6kbglHCskiafC4UYNLcva%2Fl%2BstfYiU7KRq3bT3nUkQ4ZgmOB8gyrvNw9NvhNrXACpIopTKOxvOG%2FX4NRctwI5Ia2Ro%2FkKor4rP%2FDWuH%2BJr%2F52%2F8zghGki7EmCQbB9GLnJBeLVekQIXd7I2246Bnagd6zuZlt1%2B0qkXVXt1LBkGLTSYPtX5quvQBo93blt2bneZnR7Y0ZEaVHALhKhT23GoJqRQ%2FTcVb9zjcnMTjeKJFd0aPIBJQRnIEzKT5HVbc%2FFOnqyFc9FGJgG0%2FmQxgGTHkg%2B4wn0%2BFwVrIkVSbvmxMwX4gMUVIsFj5vbobrtUnv2Y9BqnIJwWpP7GKJUKGVbBncj5ENHqYrP94WdmLYBuwso7LFmo85xaZq4gGvD0LxWV1UyT2XGBeRi94ZRfQeTW6FnkFJN4B%2BVODTVUpmO6Fug5NFMt7Q7Howh%2Fz26nsdFfmDHxe29XsEOct6MfeX50UqFEfD%2FHoa2uZ%2BPTYi3FmIq0yaJZMPTMhsMGOqUB%2F5mBlcrL4VFqx83G9wixYCjf9MAd7gjufTwwoBZNeswqhSb4qty0mYf8oX0a9tVe32BXFtD%2FVUGnTRvKR4uVrbsOCMqVB%2BI3fKEvAVyg1xEwznCJF4yjPFMYhC8NNylw87URH9Hy7Mu8y9LDiRCnRYaQgbhwy0KK9ehzytbZpRGM7pyQj5ZidaTNSkXZ49FZXwOLKtPsLUfEamGcgix2XzupZAl4&X-Amz-Signature=9e9b47bbc3044814ef61dd7b990508ee94d6c4d977287f24c60151e8d8e4e50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZCKXTZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe99gM5skApQ14sqtg6vX8U4f7gR7v6VO5X5HffHEyswIgGlE7QUmLBmybcRULylKVU4bPKw4oNCl4gvEdUH%2FvZpoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEG1nleAi2GGKUJOMyrcA7uQEJ8zS%2BoLPC1cFTzTEYhkhonDdDkdVMPeY6VAVdlnM3TbEz8anAofkaG0Hjkzc6Jjg6ByaY%2BlqWq7Cst2lzSReRVDzaeQEJNijpevw%2BXBinZ%2BFwT6Nru2wzZxjzKHd09G9I4BHa6kbglHCskiafC4UYNLcva%2Fl%2BstfYiU7KRq3bT3nUkQ4ZgmOB8gyrvNw9NvhNrXACpIopTKOxvOG%2FX4NRctwI5Ia2Ro%2FkKor4rP%2FDWuH%2BJr%2F52%2F8zghGki7EmCQbB9GLnJBeLVekQIXd7I2246Bnagd6zuZlt1%2B0qkXVXt1LBkGLTSYPtX5quvQBo93blt2bneZnR7Y0ZEaVHALhKhT23GoJqRQ%2FTcVb9zjcnMTjeKJFd0aPIBJQRnIEzKT5HVbc%2FFOnqyFc9FGJgG0%2FmQxgGTHkg%2B4wn0%2BFwVrIkVSbvmxMwX4gMUVIsFj5vbobrtUnv2Y9BqnIJwWpP7GKJUKGVbBncj5ENHqYrP94WdmLYBuwso7LFmo85xaZq4gGvD0LxWV1UyT2XGBeRi94ZRfQeTW6FnkFJN4B%2BVODTVUpmO6Fug5NFMt7Q7Howh%2Fz26nsdFfmDHxe29XsEOct6MfeX50UqFEfD%2FHoa2uZ%2BPTYi3FmIq0yaJZMPTMhsMGOqUB%2F5mBlcrL4VFqx83G9wixYCjf9MAd7gjufTwwoBZNeswqhSb4qty0mYf8oX0a9tVe32BXFtD%2FVUGnTRvKR4uVrbsOCMqVB%2BI3fKEvAVyg1xEwznCJF4yjPFMYhC8NNylw87URH9Hy7Mu8y9LDiRCnRYaQgbhwy0KK9ehzytbZpRGM7pyQj5ZidaTNSkXZ49FZXwOLKtPsLUfEamGcgix2XzupZAl4&X-Amz-Signature=9cda8b0e9a060f15e75a1231709eeba5f12238095f73db94e4e97ea4705b5fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZCKXTZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe99gM5skApQ14sqtg6vX8U4f7gR7v6VO5X5HffHEyswIgGlE7QUmLBmybcRULylKVU4bPKw4oNCl4gvEdUH%2FvZpoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEG1nleAi2GGKUJOMyrcA7uQEJ8zS%2BoLPC1cFTzTEYhkhonDdDkdVMPeY6VAVdlnM3TbEz8anAofkaG0Hjkzc6Jjg6ByaY%2BlqWq7Cst2lzSReRVDzaeQEJNijpevw%2BXBinZ%2BFwT6Nru2wzZxjzKHd09G9I4BHa6kbglHCskiafC4UYNLcva%2Fl%2BstfYiU7KRq3bT3nUkQ4ZgmOB8gyrvNw9NvhNrXACpIopTKOxvOG%2FX4NRctwI5Ia2Ro%2FkKor4rP%2FDWuH%2BJr%2F52%2F8zghGki7EmCQbB9GLnJBeLVekQIXd7I2246Bnagd6zuZlt1%2B0qkXVXt1LBkGLTSYPtX5quvQBo93blt2bneZnR7Y0ZEaVHALhKhT23GoJqRQ%2FTcVb9zjcnMTjeKJFd0aPIBJQRnIEzKT5HVbc%2FFOnqyFc9FGJgG0%2FmQxgGTHkg%2B4wn0%2BFwVrIkVSbvmxMwX4gMUVIsFj5vbobrtUnv2Y9BqnIJwWpP7GKJUKGVbBncj5ENHqYrP94WdmLYBuwso7LFmo85xaZq4gGvD0LxWV1UyT2XGBeRi94ZRfQeTW6FnkFJN4B%2BVODTVUpmO6Fug5NFMt7Q7Howh%2Fz26nsdFfmDHxe29XsEOct6MfeX50UqFEfD%2FHoa2uZ%2BPTYi3FmIq0yaJZMPTMhsMGOqUB%2F5mBlcrL4VFqx83G9wixYCjf9MAd7gjufTwwoBZNeswqhSb4qty0mYf8oX0a9tVe32BXFtD%2FVUGnTRvKR4uVrbsOCMqVB%2BI3fKEvAVyg1xEwznCJF4yjPFMYhC8NNylw87URH9Hy7Mu8y9LDiRCnRYaQgbhwy0KK9ehzytbZpRGM7pyQj5ZidaTNSkXZ49FZXwOLKtPsLUfEamGcgix2XzupZAl4&X-Amz-Signature=6782f9e0605c58640ebaa5dbe58106a3860353d86a5662e77e45f916c9707aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZCKXTZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe99gM5skApQ14sqtg6vX8U4f7gR7v6VO5X5HffHEyswIgGlE7QUmLBmybcRULylKVU4bPKw4oNCl4gvEdUH%2FvZpoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEG1nleAi2GGKUJOMyrcA7uQEJ8zS%2BoLPC1cFTzTEYhkhonDdDkdVMPeY6VAVdlnM3TbEz8anAofkaG0Hjkzc6Jjg6ByaY%2BlqWq7Cst2lzSReRVDzaeQEJNijpevw%2BXBinZ%2BFwT6Nru2wzZxjzKHd09G9I4BHa6kbglHCskiafC4UYNLcva%2Fl%2BstfYiU7KRq3bT3nUkQ4ZgmOB8gyrvNw9NvhNrXACpIopTKOxvOG%2FX4NRctwI5Ia2Ro%2FkKor4rP%2FDWuH%2BJr%2F52%2F8zghGki7EmCQbB9GLnJBeLVekQIXd7I2246Bnagd6zuZlt1%2B0qkXVXt1LBkGLTSYPtX5quvQBo93blt2bneZnR7Y0ZEaVHALhKhT23GoJqRQ%2FTcVb9zjcnMTjeKJFd0aPIBJQRnIEzKT5HVbc%2FFOnqyFc9FGJgG0%2FmQxgGTHkg%2B4wn0%2BFwVrIkVSbvmxMwX4gMUVIsFj5vbobrtUnv2Y9BqnIJwWpP7GKJUKGVbBncj5ENHqYrP94WdmLYBuwso7LFmo85xaZq4gGvD0LxWV1UyT2XGBeRi94ZRfQeTW6FnkFJN4B%2BVODTVUpmO6Fug5NFMt7Q7Howh%2Fz26nsdFfmDHxe29XsEOct6MfeX50UqFEfD%2FHoa2uZ%2BPTYi3FmIq0yaJZMPTMhsMGOqUB%2F5mBlcrL4VFqx83G9wixYCjf9MAd7gjufTwwoBZNeswqhSb4qty0mYf8oX0a9tVe32BXFtD%2FVUGnTRvKR4uVrbsOCMqVB%2BI3fKEvAVyg1xEwznCJF4yjPFMYhC8NNylw87URH9Hy7Mu8y9LDiRCnRYaQgbhwy0KK9ehzytbZpRGM7pyQj5ZidaTNSkXZ49FZXwOLKtPsLUfEamGcgix2XzupZAl4&X-Amz-Signature=f2265aa13862368aa637ec5842184c0ff08d36009f5a2fb50144b62966b02eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZCKXTZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe99gM5skApQ14sqtg6vX8U4f7gR7v6VO5X5HffHEyswIgGlE7QUmLBmybcRULylKVU4bPKw4oNCl4gvEdUH%2FvZpoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEG1nleAi2GGKUJOMyrcA7uQEJ8zS%2BoLPC1cFTzTEYhkhonDdDkdVMPeY6VAVdlnM3TbEz8anAofkaG0Hjkzc6Jjg6ByaY%2BlqWq7Cst2lzSReRVDzaeQEJNijpevw%2BXBinZ%2BFwT6Nru2wzZxjzKHd09G9I4BHa6kbglHCskiafC4UYNLcva%2Fl%2BstfYiU7KRq3bT3nUkQ4ZgmOB8gyrvNw9NvhNrXACpIopTKOxvOG%2FX4NRctwI5Ia2Ro%2FkKor4rP%2FDWuH%2BJr%2F52%2F8zghGki7EmCQbB9GLnJBeLVekQIXd7I2246Bnagd6zuZlt1%2B0qkXVXt1LBkGLTSYPtX5quvQBo93blt2bneZnR7Y0ZEaVHALhKhT23GoJqRQ%2FTcVb9zjcnMTjeKJFd0aPIBJQRnIEzKT5HVbc%2FFOnqyFc9FGJgG0%2FmQxgGTHkg%2B4wn0%2BFwVrIkVSbvmxMwX4gMUVIsFj5vbobrtUnv2Y9BqnIJwWpP7GKJUKGVbBncj5ENHqYrP94WdmLYBuwso7LFmo85xaZq4gGvD0LxWV1UyT2XGBeRi94ZRfQeTW6FnkFJN4B%2BVODTVUpmO6Fug5NFMt7Q7Howh%2Fz26nsdFfmDHxe29XsEOct6MfeX50UqFEfD%2FHoa2uZ%2BPTYi3FmIq0yaJZMPTMhsMGOqUB%2F5mBlcrL4VFqx83G9wixYCjf9MAd7gjufTwwoBZNeswqhSb4qty0mYf8oX0a9tVe32BXFtD%2FVUGnTRvKR4uVrbsOCMqVB%2BI3fKEvAVyg1xEwznCJF4yjPFMYhC8NNylw87URH9Hy7Mu8y9LDiRCnRYaQgbhwy0KK9ehzytbZpRGM7pyQj5ZidaTNSkXZ49FZXwOLKtPsLUfEamGcgix2XzupZAl4&X-Amz-Signature=a27faa987152d6c2a891530ca62cb7a4f982520f1c62ba8cfca5bf5a430a7a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZCKXTZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe99gM5skApQ14sqtg6vX8U4f7gR7v6VO5X5HffHEyswIgGlE7QUmLBmybcRULylKVU4bPKw4oNCl4gvEdUH%2FvZpoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEG1nleAi2GGKUJOMyrcA7uQEJ8zS%2BoLPC1cFTzTEYhkhonDdDkdVMPeY6VAVdlnM3TbEz8anAofkaG0Hjkzc6Jjg6ByaY%2BlqWq7Cst2lzSReRVDzaeQEJNijpevw%2BXBinZ%2BFwT6Nru2wzZxjzKHd09G9I4BHa6kbglHCskiafC4UYNLcva%2Fl%2BstfYiU7KRq3bT3nUkQ4ZgmOB8gyrvNw9NvhNrXACpIopTKOxvOG%2FX4NRctwI5Ia2Ro%2FkKor4rP%2FDWuH%2BJr%2F52%2F8zghGki7EmCQbB9GLnJBeLVekQIXd7I2246Bnagd6zuZlt1%2B0qkXVXt1LBkGLTSYPtX5quvQBo93blt2bneZnR7Y0ZEaVHALhKhT23GoJqRQ%2FTcVb9zjcnMTjeKJFd0aPIBJQRnIEzKT5HVbc%2FFOnqyFc9FGJgG0%2FmQxgGTHkg%2B4wn0%2BFwVrIkVSbvmxMwX4gMUVIsFj5vbobrtUnv2Y9BqnIJwWpP7GKJUKGVbBncj5ENHqYrP94WdmLYBuwso7LFmo85xaZq4gGvD0LxWV1UyT2XGBeRi94ZRfQeTW6FnkFJN4B%2BVODTVUpmO6Fug5NFMt7Q7Howh%2Fz26nsdFfmDHxe29XsEOct6MfeX50UqFEfD%2FHoa2uZ%2BPTYi3FmIq0yaJZMPTMhsMGOqUB%2F5mBlcrL4VFqx83G9wixYCjf9MAd7gjufTwwoBZNeswqhSb4qty0mYf8oX0a9tVe32BXFtD%2FVUGnTRvKR4uVrbsOCMqVB%2BI3fKEvAVyg1xEwznCJF4yjPFMYhC8NNylw87URH9Hy7Mu8y9LDiRCnRYaQgbhwy0KK9ehzytbZpRGM7pyQj5ZidaTNSkXZ49FZXwOLKtPsLUfEamGcgix2XzupZAl4&X-Amz-Signature=5465c02fa73c087a8af31de31922c750fb81607a0b825a3ca3eb39325b7b790e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
