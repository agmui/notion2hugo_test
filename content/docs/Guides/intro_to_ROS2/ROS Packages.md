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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXOMHOUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2BSPllGrmHeGnH3NsDLggWzrWPb2W9I1oOai%2FYDK8GvwIhAInl3Fdz62qpQnXcEA0lmDcq59lNs%2Bo9SLmYqqR3%2F9uXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzuAXXbnfx5H1p%2FblEq3ANLBfPPHOUrJaKmdC3M%2BwEJ5TkQbg3IDx8JFmIVKdNekfxtzaGlg16e18j4073UCUc4LwyzFkdNzSYikFCZTYxQyhw8wMJGGHdFJMvDTmvVyimEZIO9SWBTErvzVZ5aVdAnjwJramT2lKPJ8mQApupTcf2elnuX2zPaEBQy65OJ6GHxlTd60bPYzVFP%2BBeCqgZV4j8QIlu61heeNLuOhNjOnv8jQRjCzXFTh70QXoi56IHvsRj9EhjjCpV3F8NFe%2BgXFmw6RrS8bXSCkssyCgHGk%2FYva7SZBTjienMBwiULEOAL3whd7fOYINJZAtLxqCA8HiGSTAmzEuu0ZHEm6etzUWXi9kMG8QAVKXFoX81gqx83a%2B1TDTybP6zvFAsyOHTyLd8pzmVCmNUs8NnBJpQEoclD1B9bVr%2BXkh2TLYofuAQM%2FJsKAXaDF7PdO8f1%2BWEOqB%2BPAW5Gwqopu1HdG1UhcE%2F%2B0Fw%2BMCYzFNrwYSaYpEPZ8pX5KrV63YiHoFZUqiqh1SR566bc2W2o6fRSUL9vlr2Tgyb%2FQAcx%2B1nknoF74zlHHDWgeiAFXKfQhGbvWNncj%2F41%2Bx1EHucZDVKwqpw%2Bfq6L0GB%2FawQqgwlPRZeXbMpgRbKFi78C4dB1IDCXose9BjqkAYyj2z8WGa4OL2PSHJb4hDIM8XjVI6Uwjg%2Fx90Ezp5ztlJKF8myPBUWYmmp6wFKLv%2BKNvlDcRqDr3xkPhLzpmbWIeVHKJ2vaEGwU6kGEFPHQc6b4V%2BbrxeHF7S1kMVp68DRCPKzsSvYoCjnUbVdJa5voQ52JGvZ%2BU5bHshYA6j8ASoj7Yqf7Zq9NoZqE1GqM9sbVo%2FWgek8mJNngt2H0FZw%2BKKHf&X-Amz-Signature=7b24c0ec8a0f7335ea1c1006765c0706708dda99cc9ee116b4ea72bad7adad5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXOMHOUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2BSPllGrmHeGnH3NsDLggWzrWPb2W9I1oOai%2FYDK8GvwIhAInl3Fdz62qpQnXcEA0lmDcq59lNs%2Bo9SLmYqqR3%2F9uXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzuAXXbnfx5H1p%2FblEq3ANLBfPPHOUrJaKmdC3M%2BwEJ5TkQbg3IDx8JFmIVKdNekfxtzaGlg16e18j4073UCUc4LwyzFkdNzSYikFCZTYxQyhw8wMJGGHdFJMvDTmvVyimEZIO9SWBTErvzVZ5aVdAnjwJramT2lKPJ8mQApupTcf2elnuX2zPaEBQy65OJ6GHxlTd60bPYzVFP%2BBeCqgZV4j8QIlu61heeNLuOhNjOnv8jQRjCzXFTh70QXoi56IHvsRj9EhjjCpV3F8NFe%2BgXFmw6RrS8bXSCkssyCgHGk%2FYva7SZBTjienMBwiULEOAL3whd7fOYINJZAtLxqCA8HiGSTAmzEuu0ZHEm6etzUWXi9kMG8QAVKXFoX81gqx83a%2B1TDTybP6zvFAsyOHTyLd8pzmVCmNUs8NnBJpQEoclD1B9bVr%2BXkh2TLYofuAQM%2FJsKAXaDF7PdO8f1%2BWEOqB%2BPAW5Gwqopu1HdG1UhcE%2F%2B0Fw%2BMCYzFNrwYSaYpEPZ8pX5KrV63YiHoFZUqiqh1SR566bc2W2o6fRSUL9vlr2Tgyb%2FQAcx%2B1nknoF74zlHHDWgeiAFXKfQhGbvWNncj%2F41%2Bx1EHucZDVKwqpw%2Bfq6L0GB%2FawQqgwlPRZeXbMpgRbKFi78C4dB1IDCXose9BjqkAYyj2z8WGa4OL2PSHJb4hDIM8XjVI6Uwjg%2Fx90Ezp5ztlJKF8myPBUWYmmp6wFKLv%2BKNvlDcRqDr3xkPhLzpmbWIeVHKJ2vaEGwU6kGEFPHQc6b4V%2BbrxeHF7S1kMVp68DRCPKzsSvYoCjnUbVdJa5voQ52JGvZ%2BU5bHshYA6j8ASoj7Yqf7Zq9NoZqE1GqM9sbVo%2FWgek8mJNngt2H0FZw%2BKKHf&X-Amz-Signature=34169fafe903e2b5aa20e8927ff68ff7483eb9a9257dee1b2676bb97015faf8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXOMHOUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2BSPllGrmHeGnH3NsDLggWzrWPb2W9I1oOai%2FYDK8GvwIhAInl3Fdz62qpQnXcEA0lmDcq59lNs%2Bo9SLmYqqR3%2F9uXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzuAXXbnfx5H1p%2FblEq3ANLBfPPHOUrJaKmdC3M%2BwEJ5TkQbg3IDx8JFmIVKdNekfxtzaGlg16e18j4073UCUc4LwyzFkdNzSYikFCZTYxQyhw8wMJGGHdFJMvDTmvVyimEZIO9SWBTErvzVZ5aVdAnjwJramT2lKPJ8mQApupTcf2elnuX2zPaEBQy65OJ6GHxlTd60bPYzVFP%2BBeCqgZV4j8QIlu61heeNLuOhNjOnv8jQRjCzXFTh70QXoi56IHvsRj9EhjjCpV3F8NFe%2BgXFmw6RrS8bXSCkssyCgHGk%2FYva7SZBTjienMBwiULEOAL3whd7fOYINJZAtLxqCA8HiGSTAmzEuu0ZHEm6etzUWXi9kMG8QAVKXFoX81gqx83a%2B1TDTybP6zvFAsyOHTyLd8pzmVCmNUs8NnBJpQEoclD1B9bVr%2BXkh2TLYofuAQM%2FJsKAXaDF7PdO8f1%2BWEOqB%2BPAW5Gwqopu1HdG1UhcE%2F%2B0Fw%2BMCYzFNrwYSaYpEPZ8pX5KrV63YiHoFZUqiqh1SR566bc2W2o6fRSUL9vlr2Tgyb%2FQAcx%2B1nknoF74zlHHDWgeiAFXKfQhGbvWNncj%2F41%2Bx1EHucZDVKwqpw%2Bfq6L0GB%2FawQqgwlPRZeXbMpgRbKFi78C4dB1IDCXose9BjqkAYyj2z8WGa4OL2PSHJb4hDIM8XjVI6Uwjg%2Fx90Ezp5ztlJKF8myPBUWYmmp6wFKLv%2BKNvlDcRqDr3xkPhLzpmbWIeVHKJ2vaEGwU6kGEFPHQc6b4V%2BbrxeHF7S1kMVp68DRCPKzsSvYoCjnUbVdJa5voQ52JGvZ%2BU5bHshYA6j8ASoj7Yqf7Zq9NoZqE1GqM9sbVo%2FWgek8mJNngt2H0FZw%2BKKHf&X-Amz-Signature=51738a41584f1337c720ef938c4561f1e92b889003543e5b1382a6c216d43dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXOMHOUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2BSPllGrmHeGnH3NsDLggWzrWPb2W9I1oOai%2FYDK8GvwIhAInl3Fdz62qpQnXcEA0lmDcq59lNs%2Bo9SLmYqqR3%2F9uXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzuAXXbnfx5H1p%2FblEq3ANLBfPPHOUrJaKmdC3M%2BwEJ5TkQbg3IDx8JFmIVKdNekfxtzaGlg16e18j4073UCUc4LwyzFkdNzSYikFCZTYxQyhw8wMJGGHdFJMvDTmvVyimEZIO9SWBTErvzVZ5aVdAnjwJramT2lKPJ8mQApupTcf2elnuX2zPaEBQy65OJ6GHxlTd60bPYzVFP%2BBeCqgZV4j8QIlu61heeNLuOhNjOnv8jQRjCzXFTh70QXoi56IHvsRj9EhjjCpV3F8NFe%2BgXFmw6RrS8bXSCkssyCgHGk%2FYva7SZBTjienMBwiULEOAL3whd7fOYINJZAtLxqCA8HiGSTAmzEuu0ZHEm6etzUWXi9kMG8QAVKXFoX81gqx83a%2B1TDTybP6zvFAsyOHTyLd8pzmVCmNUs8NnBJpQEoclD1B9bVr%2BXkh2TLYofuAQM%2FJsKAXaDF7PdO8f1%2BWEOqB%2BPAW5Gwqopu1HdG1UhcE%2F%2B0Fw%2BMCYzFNrwYSaYpEPZ8pX5KrV63YiHoFZUqiqh1SR566bc2W2o6fRSUL9vlr2Tgyb%2FQAcx%2B1nknoF74zlHHDWgeiAFXKfQhGbvWNncj%2F41%2Bx1EHucZDVKwqpw%2Bfq6L0GB%2FawQqgwlPRZeXbMpgRbKFi78C4dB1IDCXose9BjqkAYyj2z8WGa4OL2PSHJb4hDIM8XjVI6Uwjg%2Fx90Ezp5ztlJKF8myPBUWYmmp6wFKLv%2BKNvlDcRqDr3xkPhLzpmbWIeVHKJ2vaEGwU6kGEFPHQc6b4V%2BbrxeHF7S1kMVp68DRCPKzsSvYoCjnUbVdJa5voQ52JGvZ%2BU5bHshYA6j8ASoj7Yqf7Zq9NoZqE1GqM9sbVo%2FWgek8mJNngt2H0FZw%2BKKHf&X-Amz-Signature=ed6356b42756d34389378f6b7f89b35169e2eff5017a02378cb913c939313828&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXOMHOUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2BSPllGrmHeGnH3NsDLggWzrWPb2W9I1oOai%2FYDK8GvwIhAInl3Fdz62qpQnXcEA0lmDcq59lNs%2Bo9SLmYqqR3%2F9uXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzuAXXbnfx5H1p%2FblEq3ANLBfPPHOUrJaKmdC3M%2BwEJ5TkQbg3IDx8JFmIVKdNekfxtzaGlg16e18j4073UCUc4LwyzFkdNzSYikFCZTYxQyhw8wMJGGHdFJMvDTmvVyimEZIO9SWBTErvzVZ5aVdAnjwJramT2lKPJ8mQApupTcf2elnuX2zPaEBQy65OJ6GHxlTd60bPYzVFP%2BBeCqgZV4j8QIlu61heeNLuOhNjOnv8jQRjCzXFTh70QXoi56IHvsRj9EhjjCpV3F8NFe%2BgXFmw6RrS8bXSCkssyCgHGk%2FYva7SZBTjienMBwiULEOAL3whd7fOYINJZAtLxqCA8HiGSTAmzEuu0ZHEm6etzUWXi9kMG8QAVKXFoX81gqx83a%2B1TDTybP6zvFAsyOHTyLd8pzmVCmNUs8NnBJpQEoclD1B9bVr%2BXkh2TLYofuAQM%2FJsKAXaDF7PdO8f1%2BWEOqB%2BPAW5Gwqopu1HdG1UhcE%2F%2B0Fw%2BMCYzFNrwYSaYpEPZ8pX5KrV63YiHoFZUqiqh1SR566bc2W2o6fRSUL9vlr2Tgyb%2FQAcx%2B1nknoF74zlHHDWgeiAFXKfQhGbvWNncj%2F41%2Bx1EHucZDVKwqpw%2Bfq6L0GB%2FawQqgwlPRZeXbMpgRbKFi78C4dB1IDCXose9BjqkAYyj2z8WGa4OL2PSHJb4hDIM8XjVI6Uwjg%2Fx90Ezp5ztlJKF8myPBUWYmmp6wFKLv%2BKNvlDcRqDr3xkPhLzpmbWIeVHKJ2vaEGwU6kGEFPHQc6b4V%2BbrxeHF7S1kMVp68DRCPKzsSvYoCjnUbVdJa5voQ52JGvZ%2BU5bHshYA6j8ASoj7Yqf7Zq9NoZqE1GqM9sbVo%2FWgek8mJNngt2H0FZw%2BKKHf&X-Amz-Signature=028ffd73c9f5615cd15053f7349d697478056eb408ce1b48a969dbc03de2fde7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXOMHOUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2BSPllGrmHeGnH3NsDLggWzrWPb2W9I1oOai%2FYDK8GvwIhAInl3Fdz62qpQnXcEA0lmDcq59lNs%2Bo9SLmYqqR3%2F9uXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzuAXXbnfx5H1p%2FblEq3ANLBfPPHOUrJaKmdC3M%2BwEJ5TkQbg3IDx8JFmIVKdNekfxtzaGlg16e18j4073UCUc4LwyzFkdNzSYikFCZTYxQyhw8wMJGGHdFJMvDTmvVyimEZIO9SWBTErvzVZ5aVdAnjwJramT2lKPJ8mQApupTcf2elnuX2zPaEBQy65OJ6GHxlTd60bPYzVFP%2BBeCqgZV4j8QIlu61heeNLuOhNjOnv8jQRjCzXFTh70QXoi56IHvsRj9EhjjCpV3F8NFe%2BgXFmw6RrS8bXSCkssyCgHGk%2FYva7SZBTjienMBwiULEOAL3whd7fOYINJZAtLxqCA8HiGSTAmzEuu0ZHEm6etzUWXi9kMG8QAVKXFoX81gqx83a%2B1TDTybP6zvFAsyOHTyLd8pzmVCmNUs8NnBJpQEoclD1B9bVr%2BXkh2TLYofuAQM%2FJsKAXaDF7PdO8f1%2BWEOqB%2BPAW5Gwqopu1HdG1UhcE%2F%2B0Fw%2BMCYzFNrwYSaYpEPZ8pX5KrV63YiHoFZUqiqh1SR566bc2W2o6fRSUL9vlr2Tgyb%2FQAcx%2B1nknoF74zlHHDWgeiAFXKfQhGbvWNncj%2F41%2Bx1EHucZDVKwqpw%2Bfq6L0GB%2FawQqgwlPRZeXbMpgRbKFi78C4dB1IDCXose9BjqkAYyj2z8WGa4OL2PSHJb4hDIM8XjVI6Uwjg%2Fx90Ezp5ztlJKF8myPBUWYmmp6wFKLv%2BKNvlDcRqDr3xkPhLzpmbWIeVHKJ2vaEGwU6kGEFPHQc6b4V%2BbrxeHF7S1kMVp68DRCPKzsSvYoCjnUbVdJa5voQ52JGvZ%2BU5bHshYA6j8ASoj7Yqf7Zq9NoZqE1GqM9sbVo%2FWgek8mJNngt2H0FZw%2BKKHf&X-Amz-Signature=c9004c9f3b2a890b395174351c14e9fcb202e90377c728be92ac818022bdfc33&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXOMHOUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2BSPllGrmHeGnH3NsDLggWzrWPb2W9I1oOai%2FYDK8GvwIhAInl3Fdz62qpQnXcEA0lmDcq59lNs%2Bo9SLmYqqR3%2F9uXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzuAXXbnfx5H1p%2FblEq3ANLBfPPHOUrJaKmdC3M%2BwEJ5TkQbg3IDx8JFmIVKdNekfxtzaGlg16e18j4073UCUc4LwyzFkdNzSYikFCZTYxQyhw8wMJGGHdFJMvDTmvVyimEZIO9SWBTErvzVZ5aVdAnjwJramT2lKPJ8mQApupTcf2elnuX2zPaEBQy65OJ6GHxlTd60bPYzVFP%2BBeCqgZV4j8QIlu61heeNLuOhNjOnv8jQRjCzXFTh70QXoi56IHvsRj9EhjjCpV3F8NFe%2BgXFmw6RrS8bXSCkssyCgHGk%2FYva7SZBTjienMBwiULEOAL3whd7fOYINJZAtLxqCA8HiGSTAmzEuu0ZHEm6etzUWXi9kMG8QAVKXFoX81gqx83a%2B1TDTybP6zvFAsyOHTyLd8pzmVCmNUs8NnBJpQEoclD1B9bVr%2BXkh2TLYofuAQM%2FJsKAXaDF7PdO8f1%2BWEOqB%2BPAW5Gwqopu1HdG1UhcE%2F%2B0Fw%2BMCYzFNrwYSaYpEPZ8pX5KrV63YiHoFZUqiqh1SR566bc2W2o6fRSUL9vlr2Tgyb%2FQAcx%2B1nknoF74zlHHDWgeiAFXKfQhGbvWNncj%2F41%2Bx1EHucZDVKwqpw%2Bfq6L0GB%2FawQqgwlPRZeXbMpgRbKFi78C4dB1IDCXose9BjqkAYyj2z8WGa4OL2PSHJb4hDIM8XjVI6Uwjg%2Fx90Ezp5ztlJKF8myPBUWYmmp6wFKLv%2BKNvlDcRqDr3xkPhLzpmbWIeVHKJ2vaEGwU6kGEFPHQc6b4V%2BbrxeHF7S1kMVp68DRCPKzsSvYoCjnUbVdJa5voQ52JGvZ%2BU5bHshYA6j8ASoj7Yqf7Zq9NoZqE1GqM9sbVo%2FWgek8mJNngt2H0FZw%2BKKHf&X-Amz-Signature=c90b52472a972f6ffcc2936862a689e197d85243c7bf90edfcd6c6baa4a58953&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
