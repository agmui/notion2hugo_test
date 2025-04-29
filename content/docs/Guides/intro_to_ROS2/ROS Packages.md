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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJRTIAG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCWm0v%2FTvUW3gCQzfTekS2S%2FCRYYnNEeabjPnuney88AiBn49VDCI9jx3FjkzDRY33fR5KjBII87UzBD1RJqOoNkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqeXTcDsfEX7okLgKtwD0s2cEWWEKaRgsE4RUTl9afQABSpV4aRNETRGbFBloi%2BPkvUV4%2BznpcOsVv5t0fWm0tCxc7pkDjOXKXkIOLoRgZqAonXXIVzN4vn%2BAVH9YD5GSVtKH1VXje4EbD2H0%2FW3vUwZHBlrSZMEK62uEbqCf5vKO4AzjdQRP1%2Bx1JQMxxlLzSsUEz0Pd%2FpI84JUJBfdWrN0xgWqA3l4ZvTX5RHcTnM8oaeO5jBOwiVdVGSwgWNDIZAExQNviKQhijdCgkWvYp4TAxRe61A9%2FHDnIKdT025ryhl0Gd3N7MekKBWM%2BCvn8s%2BxP5vYZarf9HYNNUUKTVHuJnskgfpchZpXEjzFRaJ1dMjmCaVkXFB%2FlPOm6puBXSQH1d2FQYMNXVODEo1Yeb8ha9X8jl5NUjk5fZw7kKdVtT7CSpZGDOYi6TU4OvsqPhYxfMt11V1GoBcYHkkKq64awa6oHfyHP2c%2BR5D%2BpUX6G5%2BfA0zgJQH5p3uzFIygOXbyFyKkLC9ws3TFC8xJKGPFVyuy7K7EUJGrfm8KGGfQbvhYQq%2FnUsqn77WlL%2FJ7I%2Bhf9cVZ8i7tpZI78Jeh%2Fs1RKOIpzR%2FNqA%2BiMI7Xh1z2M20fajDaXa%2FZW0eJHBOMLpcWdqu3cb9uGxAw4u3BwAY6pgEXNDoy11sFJSXJbNzmEqN1Jh0E5CycisWWKskVyqOMKG6QvzuwKs5SP772cOLuWUjXahjxnmZ9RPNjzTI6kRoc2J%2BWnBvCOhZZDlVm21iLqJQpr6qazUyGJ3wBt23p3BH378wf76QjVXk0dkFcqH8Sd%2FxCREuI2SIl2u3KiO3jsCAP%2FylnNOoSqP0MBPDVpgaDZ8lCCp5ZfuLWbb81aYCiQWMqRW6g&X-Amz-Signature=6aa257313236f0bf228822f75edf45a5dc807fb1003fc4fd7904dfaecad44794&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJRTIAG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCWm0v%2FTvUW3gCQzfTekS2S%2FCRYYnNEeabjPnuney88AiBn49VDCI9jx3FjkzDRY33fR5KjBII87UzBD1RJqOoNkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqeXTcDsfEX7okLgKtwD0s2cEWWEKaRgsE4RUTl9afQABSpV4aRNETRGbFBloi%2BPkvUV4%2BznpcOsVv5t0fWm0tCxc7pkDjOXKXkIOLoRgZqAonXXIVzN4vn%2BAVH9YD5GSVtKH1VXje4EbD2H0%2FW3vUwZHBlrSZMEK62uEbqCf5vKO4AzjdQRP1%2Bx1JQMxxlLzSsUEz0Pd%2FpI84JUJBfdWrN0xgWqA3l4ZvTX5RHcTnM8oaeO5jBOwiVdVGSwgWNDIZAExQNviKQhijdCgkWvYp4TAxRe61A9%2FHDnIKdT025ryhl0Gd3N7MekKBWM%2BCvn8s%2BxP5vYZarf9HYNNUUKTVHuJnskgfpchZpXEjzFRaJ1dMjmCaVkXFB%2FlPOm6puBXSQH1d2FQYMNXVODEo1Yeb8ha9X8jl5NUjk5fZw7kKdVtT7CSpZGDOYi6TU4OvsqPhYxfMt11V1GoBcYHkkKq64awa6oHfyHP2c%2BR5D%2BpUX6G5%2BfA0zgJQH5p3uzFIygOXbyFyKkLC9ws3TFC8xJKGPFVyuy7K7EUJGrfm8KGGfQbvhYQq%2FnUsqn77WlL%2FJ7I%2Bhf9cVZ8i7tpZI78Jeh%2Fs1RKOIpzR%2FNqA%2BiMI7Xh1z2M20fajDaXa%2FZW0eJHBOMLpcWdqu3cb9uGxAw4u3BwAY6pgEXNDoy11sFJSXJbNzmEqN1Jh0E5CycisWWKskVyqOMKG6QvzuwKs5SP772cOLuWUjXahjxnmZ9RPNjzTI6kRoc2J%2BWnBvCOhZZDlVm21iLqJQpr6qazUyGJ3wBt23p3BH378wf76QjVXk0dkFcqH8Sd%2FxCREuI2SIl2u3KiO3jsCAP%2FylnNOoSqP0MBPDVpgaDZ8lCCp5ZfuLWbb81aYCiQWMqRW6g&X-Amz-Signature=958a14657bfd7838368b8cb70c26e92232f010d23c3c720596479953620743a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJRTIAG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCWm0v%2FTvUW3gCQzfTekS2S%2FCRYYnNEeabjPnuney88AiBn49VDCI9jx3FjkzDRY33fR5KjBII87UzBD1RJqOoNkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqeXTcDsfEX7okLgKtwD0s2cEWWEKaRgsE4RUTl9afQABSpV4aRNETRGbFBloi%2BPkvUV4%2BznpcOsVv5t0fWm0tCxc7pkDjOXKXkIOLoRgZqAonXXIVzN4vn%2BAVH9YD5GSVtKH1VXje4EbD2H0%2FW3vUwZHBlrSZMEK62uEbqCf5vKO4AzjdQRP1%2Bx1JQMxxlLzSsUEz0Pd%2FpI84JUJBfdWrN0xgWqA3l4ZvTX5RHcTnM8oaeO5jBOwiVdVGSwgWNDIZAExQNviKQhijdCgkWvYp4TAxRe61A9%2FHDnIKdT025ryhl0Gd3N7MekKBWM%2BCvn8s%2BxP5vYZarf9HYNNUUKTVHuJnskgfpchZpXEjzFRaJ1dMjmCaVkXFB%2FlPOm6puBXSQH1d2FQYMNXVODEo1Yeb8ha9X8jl5NUjk5fZw7kKdVtT7CSpZGDOYi6TU4OvsqPhYxfMt11V1GoBcYHkkKq64awa6oHfyHP2c%2BR5D%2BpUX6G5%2BfA0zgJQH5p3uzFIygOXbyFyKkLC9ws3TFC8xJKGPFVyuy7K7EUJGrfm8KGGfQbvhYQq%2FnUsqn77WlL%2FJ7I%2Bhf9cVZ8i7tpZI78Jeh%2Fs1RKOIpzR%2FNqA%2BiMI7Xh1z2M20fajDaXa%2FZW0eJHBOMLpcWdqu3cb9uGxAw4u3BwAY6pgEXNDoy11sFJSXJbNzmEqN1Jh0E5CycisWWKskVyqOMKG6QvzuwKs5SP772cOLuWUjXahjxnmZ9RPNjzTI6kRoc2J%2BWnBvCOhZZDlVm21iLqJQpr6qazUyGJ3wBt23p3BH378wf76QjVXk0dkFcqH8Sd%2FxCREuI2SIl2u3KiO3jsCAP%2FylnNOoSqP0MBPDVpgaDZ8lCCp5ZfuLWbb81aYCiQWMqRW6g&X-Amz-Signature=c013d360ed904a23f61c62cec80d211c3524bd9d52ca4f78b0ad33ac504b50cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJRTIAG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCWm0v%2FTvUW3gCQzfTekS2S%2FCRYYnNEeabjPnuney88AiBn49VDCI9jx3FjkzDRY33fR5KjBII87UzBD1RJqOoNkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqeXTcDsfEX7okLgKtwD0s2cEWWEKaRgsE4RUTl9afQABSpV4aRNETRGbFBloi%2BPkvUV4%2BznpcOsVv5t0fWm0tCxc7pkDjOXKXkIOLoRgZqAonXXIVzN4vn%2BAVH9YD5GSVtKH1VXje4EbD2H0%2FW3vUwZHBlrSZMEK62uEbqCf5vKO4AzjdQRP1%2Bx1JQMxxlLzSsUEz0Pd%2FpI84JUJBfdWrN0xgWqA3l4ZvTX5RHcTnM8oaeO5jBOwiVdVGSwgWNDIZAExQNviKQhijdCgkWvYp4TAxRe61A9%2FHDnIKdT025ryhl0Gd3N7MekKBWM%2BCvn8s%2BxP5vYZarf9HYNNUUKTVHuJnskgfpchZpXEjzFRaJ1dMjmCaVkXFB%2FlPOm6puBXSQH1d2FQYMNXVODEo1Yeb8ha9X8jl5NUjk5fZw7kKdVtT7CSpZGDOYi6TU4OvsqPhYxfMt11V1GoBcYHkkKq64awa6oHfyHP2c%2BR5D%2BpUX6G5%2BfA0zgJQH5p3uzFIygOXbyFyKkLC9ws3TFC8xJKGPFVyuy7K7EUJGrfm8KGGfQbvhYQq%2FnUsqn77WlL%2FJ7I%2Bhf9cVZ8i7tpZI78Jeh%2Fs1RKOIpzR%2FNqA%2BiMI7Xh1z2M20fajDaXa%2FZW0eJHBOMLpcWdqu3cb9uGxAw4u3BwAY6pgEXNDoy11sFJSXJbNzmEqN1Jh0E5CycisWWKskVyqOMKG6QvzuwKs5SP772cOLuWUjXahjxnmZ9RPNjzTI6kRoc2J%2BWnBvCOhZZDlVm21iLqJQpr6qazUyGJ3wBt23p3BH378wf76QjVXk0dkFcqH8Sd%2FxCREuI2SIl2u3KiO3jsCAP%2FylnNOoSqP0MBPDVpgaDZ8lCCp5ZfuLWbb81aYCiQWMqRW6g&X-Amz-Signature=8953e0c5ceb62f5c9fdd773249169d7d51c99f4a8b6bac31ad1da7ffe44558c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJRTIAG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCWm0v%2FTvUW3gCQzfTekS2S%2FCRYYnNEeabjPnuney88AiBn49VDCI9jx3FjkzDRY33fR5KjBII87UzBD1RJqOoNkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqeXTcDsfEX7okLgKtwD0s2cEWWEKaRgsE4RUTl9afQABSpV4aRNETRGbFBloi%2BPkvUV4%2BznpcOsVv5t0fWm0tCxc7pkDjOXKXkIOLoRgZqAonXXIVzN4vn%2BAVH9YD5GSVtKH1VXje4EbD2H0%2FW3vUwZHBlrSZMEK62uEbqCf5vKO4AzjdQRP1%2Bx1JQMxxlLzSsUEz0Pd%2FpI84JUJBfdWrN0xgWqA3l4ZvTX5RHcTnM8oaeO5jBOwiVdVGSwgWNDIZAExQNviKQhijdCgkWvYp4TAxRe61A9%2FHDnIKdT025ryhl0Gd3N7MekKBWM%2BCvn8s%2BxP5vYZarf9HYNNUUKTVHuJnskgfpchZpXEjzFRaJ1dMjmCaVkXFB%2FlPOm6puBXSQH1d2FQYMNXVODEo1Yeb8ha9X8jl5NUjk5fZw7kKdVtT7CSpZGDOYi6TU4OvsqPhYxfMt11V1GoBcYHkkKq64awa6oHfyHP2c%2BR5D%2BpUX6G5%2BfA0zgJQH5p3uzFIygOXbyFyKkLC9ws3TFC8xJKGPFVyuy7K7EUJGrfm8KGGfQbvhYQq%2FnUsqn77WlL%2FJ7I%2Bhf9cVZ8i7tpZI78Jeh%2Fs1RKOIpzR%2FNqA%2BiMI7Xh1z2M20fajDaXa%2FZW0eJHBOMLpcWdqu3cb9uGxAw4u3BwAY6pgEXNDoy11sFJSXJbNzmEqN1Jh0E5CycisWWKskVyqOMKG6QvzuwKs5SP772cOLuWUjXahjxnmZ9RPNjzTI6kRoc2J%2BWnBvCOhZZDlVm21iLqJQpr6qazUyGJ3wBt23p3BH378wf76QjVXk0dkFcqH8Sd%2FxCREuI2SIl2u3KiO3jsCAP%2FylnNOoSqP0MBPDVpgaDZ8lCCp5ZfuLWbb81aYCiQWMqRW6g&X-Amz-Signature=8d7eb7c0e5e9c6cf461d9b3d1bddce572d6ea498563b9f46c039915e2e62c92c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJRTIAG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCWm0v%2FTvUW3gCQzfTekS2S%2FCRYYnNEeabjPnuney88AiBn49VDCI9jx3FjkzDRY33fR5KjBII87UzBD1RJqOoNkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqeXTcDsfEX7okLgKtwD0s2cEWWEKaRgsE4RUTl9afQABSpV4aRNETRGbFBloi%2BPkvUV4%2BznpcOsVv5t0fWm0tCxc7pkDjOXKXkIOLoRgZqAonXXIVzN4vn%2BAVH9YD5GSVtKH1VXje4EbD2H0%2FW3vUwZHBlrSZMEK62uEbqCf5vKO4AzjdQRP1%2Bx1JQMxxlLzSsUEz0Pd%2FpI84JUJBfdWrN0xgWqA3l4ZvTX5RHcTnM8oaeO5jBOwiVdVGSwgWNDIZAExQNviKQhijdCgkWvYp4TAxRe61A9%2FHDnIKdT025ryhl0Gd3N7MekKBWM%2BCvn8s%2BxP5vYZarf9HYNNUUKTVHuJnskgfpchZpXEjzFRaJ1dMjmCaVkXFB%2FlPOm6puBXSQH1d2FQYMNXVODEo1Yeb8ha9X8jl5NUjk5fZw7kKdVtT7CSpZGDOYi6TU4OvsqPhYxfMt11V1GoBcYHkkKq64awa6oHfyHP2c%2BR5D%2BpUX6G5%2BfA0zgJQH5p3uzFIygOXbyFyKkLC9ws3TFC8xJKGPFVyuy7K7EUJGrfm8KGGfQbvhYQq%2FnUsqn77WlL%2FJ7I%2Bhf9cVZ8i7tpZI78Jeh%2Fs1RKOIpzR%2FNqA%2BiMI7Xh1z2M20fajDaXa%2FZW0eJHBOMLpcWdqu3cb9uGxAw4u3BwAY6pgEXNDoy11sFJSXJbNzmEqN1Jh0E5CycisWWKskVyqOMKG6QvzuwKs5SP772cOLuWUjXahjxnmZ9RPNjzTI6kRoc2J%2BWnBvCOhZZDlVm21iLqJQpr6qazUyGJ3wBt23p3BH378wf76QjVXk0dkFcqH8Sd%2FxCREuI2SIl2u3KiO3jsCAP%2FylnNOoSqP0MBPDVpgaDZ8lCCp5ZfuLWbb81aYCiQWMqRW6g&X-Amz-Signature=3b35b674d397a3618c4ca2e83ea35487f2040d9506f800c8c240ff701dba83a4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJRTIAG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCWm0v%2FTvUW3gCQzfTekS2S%2FCRYYnNEeabjPnuney88AiBn49VDCI9jx3FjkzDRY33fR5KjBII87UzBD1RJqOoNkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqeXTcDsfEX7okLgKtwD0s2cEWWEKaRgsE4RUTl9afQABSpV4aRNETRGbFBloi%2BPkvUV4%2BznpcOsVv5t0fWm0tCxc7pkDjOXKXkIOLoRgZqAonXXIVzN4vn%2BAVH9YD5GSVtKH1VXje4EbD2H0%2FW3vUwZHBlrSZMEK62uEbqCf5vKO4AzjdQRP1%2Bx1JQMxxlLzSsUEz0Pd%2FpI84JUJBfdWrN0xgWqA3l4ZvTX5RHcTnM8oaeO5jBOwiVdVGSwgWNDIZAExQNviKQhijdCgkWvYp4TAxRe61A9%2FHDnIKdT025ryhl0Gd3N7MekKBWM%2BCvn8s%2BxP5vYZarf9HYNNUUKTVHuJnskgfpchZpXEjzFRaJ1dMjmCaVkXFB%2FlPOm6puBXSQH1d2FQYMNXVODEo1Yeb8ha9X8jl5NUjk5fZw7kKdVtT7CSpZGDOYi6TU4OvsqPhYxfMt11V1GoBcYHkkKq64awa6oHfyHP2c%2BR5D%2BpUX6G5%2BfA0zgJQH5p3uzFIygOXbyFyKkLC9ws3TFC8xJKGPFVyuy7K7EUJGrfm8KGGfQbvhYQq%2FnUsqn77WlL%2FJ7I%2Bhf9cVZ8i7tpZI78Jeh%2Fs1RKOIpzR%2FNqA%2BiMI7Xh1z2M20fajDaXa%2FZW0eJHBOMLpcWdqu3cb9uGxAw4u3BwAY6pgEXNDoy11sFJSXJbNzmEqN1Jh0E5CycisWWKskVyqOMKG6QvzuwKs5SP772cOLuWUjXahjxnmZ9RPNjzTI6kRoc2J%2BWnBvCOhZZDlVm21iLqJQpr6qazUyGJ3wBt23p3BH378wf76QjVXk0dkFcqH8Sd%2FxCREuI2SIl2u3KiO3jsCAP%2FylnNOoSqP0MBPDVpgaDZ8lCCp5ZfuLWbb81aYCiQWMqRW6g&X-Amz-Signature=fc68b1969a1e56be0a9eb3861c73e4cdf82a54e98a6d8997ffd3514ff0c70a35&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
