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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4PCWM4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN0A%2FkJDoSLucw6CHPTm23vuyQULV3pujpxOaQHencAQIhAK58d00bGVfq3USQU63jEwFGtL6g9lekAmMmr7GMeVCxKv8DCE4QABoMNjM3NDIzMTgzODA1IgxehPDKOb7RQK%2FFsPUq3APWlNLCIzQpA2dqrYdjM3ZATujNSGSxiMQ2ntU3%2FFPmr76lAI2cJKVZiRmBjThWXh4LSK3e4HOv5gswtw6HV0MmJSv%2BCKURvxhmuQwClBP%2BHdHKwJnSD9B59Smx2tu%2BV6WN8aDn3ZWNTVGnbKuPsYi%2BajGjeECOZn2Zm3sNj2BaOEOtrcqO7aMx9Ga8W2V0zu9iYODD58Ba8I2c2%2FwgY2NzRumGf0O7NUL7a9AlnaRvQkx1v8IfRwnWC9VYMh1fXERba7A7p8E8bmRo9KnhPBvznBk%2Fg88qmiXi15269cYMnt1OLKGPuMG%2Flc5ieq18lh5u2Zss1LAVVLMkmRsSzn%2FxLM7eyA2fDDKYaKTLK80AfuZQwi8l%2FvZy3KtAYO9Qh7vXudY0Fx51H2wtK3VDP%2FxgXcjsCQYL%2FOpKBCej9bKKx%2BGKYLcyNm3nNn%2BPrDesaPn6%2B8fWXF%2FcEzWXgWm4LV4pTIBGsCq8itpe%2F0fpbzfgdfd3x6NUB0O0fJWCR539%2Bsmx6RIdOyVlKPDmXlqmaI4up1eqndhVlmkD9gbzoukTaR%2BytLRamduVP5zUR1SjG0VPciCKhLEUhYGWPg3vKT3g4p3TavtN5fwBUmaK%2Fk7lbn%2Bi66HB2W46eFyATDD3xJ7BBjqkARTZTCX8fnx1jkOymhgO6kumq4NmKz52vFk4sVOrre20nQVVv8HzsGaaGSCg4oXPPOFAv1SD7NJPRDKx%2Fo4IqV%2BKfTbd0edvqdB1fe5b5VofIV12kk1ha2t7MdjXZPzhLH5ZlXa174OJUlk120%2FLkgeKuFiKVG1QaUF7cNExwZ8bHzcDY0zqBZjQNyl8lzh6flBoGONNQlc4v34zmLeWPkP79Cx6&X-Amz-Signature=3856a750a3d98ddb02f89fa77850fb8b4e179f01f95c3fb09d13307b0e129017&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4PCWM4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN0A%2FkJDoSLucw6CHPTm23vuyQULV3pujpxOaQHencAQIhAK58d00bGVfq3USQU63jEwFGtL6g9lekAmMmr7GMeVCxKv8DCE4QABoMNjM3NDIzMTgzODA1IgxehPDKOb7RQK%2FFsPUq3APWlNLCIzQpA2dqrYdjM3ZATujNSGSxiMQ2ntU3%2FFPmr76lAI2cJKVZiRmBjThWXh4LSK3e4HOv5gswtw6HV0MmJSv%2BCKURvxhmuQwClBP%2BHdHKwJnSD9B59Smx2tu%2BV6WN8aDn3ZWNTVGnbKuPsYi%2BajGjeECOZn2Zm3sNj2BaOEOtrcqO7aMx9Ga8W2V0zu9iYODD58Ba8I2c2%2FwgY2NzRumGf0O7NUL7a9AlnaRvQkx1v8IfRwnWC9VYMh1fXERba7A7p8E8bmRo9KnhPBvznBk%2Fg88qmiXi15269cYMnt1OLKGPuMG%2Flc5ieq18lh5u2Zss1LAVVLMkmRsSzn%2FxLM7eyA2fDDKYaKTLK80AfuZQwi8l%2FvZy3KtAYO9Qh7vXudY0Fx51H2wtK3VDP%2FxgXcjsCQYL%2FOpKBCej9bKKx%2BGKYLcyNm3nNn%2BPrDesaPn6%2B8fWXF%2FcEzWXgWm4LV4pTIBGsCq8itpe%2F0fpbzfgdfd3x6NUB0O0fJWCR539%2Bsmx6RIdOyVlKPDmXlqmaI4up1eqndhVlmkD9gbzoukTaR%2BytLRamduVP5zUR1SjG0VPciCKhLEUhYGWPg3vKT3g4p3TavtN5fwBUmaK%2Fk7lbn%2Bi66HB2W46eFyATDD3xJ7BBjqkARTZTCX8fnx1jkOymhgO6kumq4NmKz52vFk4sVOrre20nQVVv8HzsGaaGSCg4oXPPOFAv1SD7NJPRDKx%2Fo4IqV%2BKfTbd0edvqdB1fe5b5VofIV12kk1ha2t7MdjXZPzhLH5ZlXa174OJUlk120%2FLkgeKuFiKVG1QaUF7cNExwZ8bHzcDY0zqBZjQNyl8lzh6flBoGONNQlc4v34zmLeWPkP79Cx6&X-Amz-Signature=eb12133e055dfb973cd3060045beeac585543ba45ad33d1d5a1492f5f49bf055&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4PCWM4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN0A%2FkJDoSLucw6CHPTm23vuyQULV3pujpxOaQHencAQIhAK58d00bGVfq3USQU63jEwFGtL6g9lekAmMmr7GMeVCxKv8DCE4QABoMNjM3NDIzMTgzODA1IgxehPDKOb7RQK%2FFsPUq3APWlNLCIzQpA2dqrYdjM3ZATujNSGSxiMQ2ntU3%2FFPmr76lAI2cJKVZiRmBjThWXh4LSK3e4HOv5gswtw6HV0MmJSv%2BCKURvxhmuQwClBP%2BHdHKwJnSD9B59Smx2tu%2BV6WN8aDn3ZWNTVGnbKuPsYi%2BajGjeECOZn2Zm3sNj2BaOEOtrcqO7aMx9Ga8W2V0zu9iYODD58Ba8I2c2%2FwgY2NzRumGf0O7NUL7a9AlnaRvQkx1v8IfRwnWC9VYMh1fXERba7A7p8E8bmRo9KnhPBvznBk%2Fg88qmiXi15269cYMnt1OLKGPuMG%2Flc5ieq18lh5u2Zss1LAVVLMkmRsSzn%2FxLM7eyA2fDDKYaKTLK80AfuZQwi8l%2FvZy3KtAYO9Qh7vXudY0Fx51H2wtK3VDP%2FxgXcjsCQYL%2FOpKBCej9bKKx%2BGKYLcyNm3nNn%2BPrDesaPn6%2B8fWXF%2FcEzWXgWm4LV4pTIBGsCq8itpe%2F0fpbzfgdfd3x6NUB0O0fJWCR539%2Bsmx6RIdOyVlKPDmXlqmaI4up1eqndhVlmkD9gbzoukTaR%2BytLRamduVP5zUR1SjG0VPciCKhLEUhYGWPg3vKT3g4p3TavtN5fwBUmaK%2Fk7lbn%2Bi66HB2W46eFyATDD3xJ7BBjqkARTZTCX8fnx1jkOymhgO6kumq4NmKz52vFk4sVOrre20nQVVv8HzsGaaGSCg4oXPPOFAv1SD7NJPRDKx%2Fo4IqV%2BKfTbd0edvqdB1fe5b5VofIV12kk1ha2t7MdjXZPzhLH5ZlXa174OJUlk120%2FLkgeKuFiKVG1QaUF7cNExwZ8bHzcDY0zqBZjQNyl8lzh6flBoGONNQlc4v34zmLeWPkP79Cx6&X-Amz-Signature=52c837ce429bbf071e4ad20f68923d545255db60d648defa20843e9a13904663&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4PCWM4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN0A%2FkJDoSLucw6CHPTm23vuyQULV3pujpxOaQHencAQIhAK58d00bGVfq3USQU63jEwFGtL6g9lekAmMmr7GMeVCxKv8DCE4QABoMNjM3NDIzMTgzODA1IgxehPDKOb7RQK%2FFsPUq3APWlNLCIzQpA2dqrYdjM3ZATujNSGSxiMQ2ntU3%2FFPmr76lAI2cJKVZiRmBjThWXh4LSK3e4HOv5gswtw6HV0MmJSv%2BCKURvxhmuQwClBP%2BHdHKwJnSD9B59Smx2tu%2BV6WN8aDn3ZWNTVGnbKuPsYi%2BajGjeECOZn2Zm3sNj2BaOEOtrcqO7aMx9Ga8W2V0zu9iYODD58Ba8I2c2%2FwgY2NzRumGf0O7NUL7a9AlnaRvQkx1v8IfRwnWC9VYMh1fXERba7A7p8E8bmRo9KnhPBvznBk%2Fg88qmiXi15269cYMnt1OLKGPuMG%2Flc5ieq18lh5u2Zss1LAVVLMkmRsSzn%2FxLM7eyA2fDDKYaKTLK80AfuZQwi8l%2FvZy3KtAYO9Qh7vXudY0Fx51H2wtK3VDP%2FxgXcjsCQYL%2FOpKBCej9bKKx%2BGKYLcyNm3nNn%2BPrDesaPn6%2B8fWXF%2FcEzWXgWm4LV4pTIBGsCq8itpe%2F0fpbzfgdfd3x6NUB0O0fJWCR539%2Bsmx6RIdOyVlKPDmXlqmaI4up1eqndhVlmkD9gbzoukTaR%2BytLRamduVP5zUR1SjG0VPciCKhLEUhYGWPg3vKT3g4p3TavtN5fwBUmaK%2Fk7lbn%2Bi66HB2W46eFyATDD3xJ7BBjqkARTZTCX8fnx1jkOymhgO6kumq4NmKz52vFk4sVOrre20nQVVv8HzsGaaGSCg4oXPPOFAv1SD7NJPRDKx%2Fo4IqV%2BKfTbd0edvqdB1fe5b5VofIV12kk1ha2t7MdjXZPzhLH5ZlXa174OJUlk120%2FLkgeKuFiKVG1QaUF7cNExwZ8bHzcDY0zqBZjQNyl8lzh6flBoGONNQlc4v34zmLeWPkP79Cx6&X-Amz-Signature=d6658ba6d5bf1ba8eb25597a87853292feda5fb4b0c12f11d62d341ee2389165&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4PCWM4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN0A%2FkJDoSLucw6CHPTm23vuyQULV3pujpxOaQHencAQIhAK58d00bGVfq3USQU63jEwFGtL6g9lekAmMmr7GMeVCxKv8DCE4QABoMNjM3NDIzMTgzODA1IgxehPDKOb7RQK%2FFsPUq3APWlNLCIzQpA2dqrYdjM3ZATujNSGSxiMQ2ntU3%2FFPmr76lAI2cJKVZiRmBjThWXh4LSK3e4HOv5gswtw6HV0MmJSv%2BCKURvxhmuQwClBP%2BHdHKwJnSD9B59Smx2tu%2BV6WN8aDn3ZWNTVGnbKuPsYi%2BajGjeECOZn2Zm3sNj2BaOEOtrcqO7aMx9Ga8W2V0zu9iYODD58Ba8I2c2%2FwgY2NzRumGf0O7NUL7a9AlnaRvQkx1v8IfRwnWC9VYMh1fXERba7A7p8E8bmRo9KnhPBvznBk%2Fg88qmiXi15269cYMnt1OLKGPuMG%2Flc5ieq18lh5u2Zss1LAVVLMkmRsSzn%2FxLM7eyA2fDDKYaKTLK80AfuZQwi8l%2FvZy3KtAYO9Qh7vXudY0Fx51H2wtK3VDP%2FxgXcjsCQYL%2FOpKBCej9bKKx%2BGKYLcyNm3nNn%2BPrDesaPn6%2B8fWXF%2FcEzWXgWm4LV4pTIBGsCq8itpe%2F0fpbzfgdfd3x6NUB0O0fJWCR539%2Bsmx6RIdOyVlKPDmXlqmaI4up1eqndhVlmkD9gbzoukTaR%2BytLRamduVP5zUR1SjG0VPciCKhLEUhYGWPg3vKT3g4p3TavtN5fwBUmaK%2Fk7lbn%2Bi66HB2W46eFyATDD3xJ7BBjqkARTZTCX8fnx1jkOymhgO6kumq4NmKz52vFk4sVOrre20nQVVv8HzsGaaGSCg4oXPPOFAv1SD7NJPRDKx%2Fo4IqV%2BKfTbd0edvqdB1fe5b5VofIV12kk1ha2t7MdjXZPzhLH5ZlXa174OJUlk120%2FLkgeKuFiKVG1QaUF7cNExwZ8bHzcDY0zqBZjQNyl8lzh6flBoGONNQlc4v34zmLeWPkP79Cx6&X-Amz-Signature=695af88afc77c626840ab57c6150d163b68052aa9beaabb73d1cbcb2acc809fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4PCWM4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN0A%2FkJDoSLucw6CHPTm23vuyQULV3pujpxOaQHencAQIhAK58d00bGVfq3USQU63jEwFGtL6g9lekAmMmr7GMeVCxKv8DCE4QABoMNjM3NDIzMTgzODA1IgxehPDKOb7RQK%2FFsPUq3APWlNLCIzQpA2dqrYdjM3ZATujNSGSxiMQ2ntU3%2FFPmr76lAI2cJKVZiRmBjThWXh4LSK3e4HOv5gswtw6HV0MmJSv%2BCKURvxhmuQwClBP%2BHdHKwJnSD9B59Smx2tu%2BV6WN8aDn3ZWNTVGnbKuPsYi%2BajGjeECOZn2Zm3sNj2BaOEOtrcqO7aMx9Ga8W2V0zu9iYODD58Ba8I2c2%2FwgY2NzRumGf0O7NUL7a9AlnaRvQkx1v8IfRwnWC9VYMh1fXERba7A7p8E8bmRo9KnhPBvznBk%2Fg88qmiXi15269cYMnt1OLKGPuMG%2Flc5ieq18lh5u2Zss1LAVVLMkmRsSzn%2FxLM7eyA2fDDKYaKTLK80AfuZQwi8l%2FvZy3KtAYO9Qh7vXudY0Fx51H2wtK3VDP%2FxgXcjsCQYL%2FOpKBCej9bKKx%2BGKYLcyNm3nNn%2BPrDesaPn6%2B8fWXF%2FcEzWXgWm4LV4pTIBGsCq8itpe%2F0fpbzfgdfd3x6NUB0O0fJWCR539%2Bsmx6RIdOyVlKPDmXlqmaI4up1eqndhVlmkD9gbzoukTaR%2BytLRamduVP5zUR1SjG0VPciCKhLEUhYGWPg3vKT3g4p3TavtN5fwBUmaK%2Fk7lbn%2Bi66HB2W46eFyATDD3xJ7BBjqkARTZTCX8fnx1jkOymhgO6kumq4NmKz52vFk4sVOrre20nQVVv8HzsGaaGSCg4oXPPOFAv1SD7NJPRDKx%2Fo4IqV%2BKfTbd0edvqdB1fe5b5VofIV12kk1ha2t7MdjXZPzhLH5ZlXa174OJUlk120%2FLkgeKuFiKVG1QaUF7cNExwZ8bHzcDY0zqBZjQNyl8lzh6flBoGONNQlc4v34zmLeWPkP79Cx6&X-Amz-Signature=8ded925369a7654353403566464489d50ff72880ee08a1d276b37e21e1457ade&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4PCWM4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN0A%2FkJDoSLucw6CHPTm23vuyQULV3pujpxOaQHencAQIhAK58d00bGVfq3USQU63jEwFGtL6g9lekAmMmr7GMeVCxKv8DCE4QABoMNjM3NDIzMTgzODA1IgxehPDKOb7RQK%2FFsPUq3APWlNLCIzQpA2dqrYdjM3ZATujNSGSxiMQ2ntU3%2FFPmr76lAI2cJKVZiRmBjThWXh4LSK3e4HOv5gswtw6HV0MmJSv%2BCKURvxhmuQwClBP%2BHdHKwJnSD9B59Smx2tu%2BV6WN8aDn3ZWNTVGnbKuPsYi%2BajGjeECOZn2Zm3sNj2BaOEOtrcqO7aMx9Ga8W2V0zu9iYODD58Ba8I2c2%2FwgY2NzRumGf0O7NUL7a9AlnaRvQkx1v8IfRwnWC9VYMh1fXERba7A7p8E8bmRo9KnhPBvznBk%2Fg88qmiXi15269cYMnt1OLKGPuMG%2Flc5ieq18lh5u2Zss1LAVVLMkmRsSzn%2FxLM7eyA2fDDKYaKTLK80AfuZQwi8l%2FvZy3KtAYO9Qh7vXudY0Fx51H2wtK3VDP%2FxgXcjsCQYL%2FOpKBCej9bKKx%2BGKYLcyNm3nNn%2BPrDesaPn6%2B8fWXF%2FcEzWXgWm4LV4pTIBGsCq8itpe%2F0fpbzfgdfd3x6NUB0O0fJWCR539%2Bsmx6RIdOyVlKPDmXlqmaI4up1eqndhVlmkD9gbzoukTaR%2BytLRamduVP5zUR1SjG0VPciCKhLEUhYGWPg3vKT3g4p3TavtN5fwBUmaK%2Fk7lbn%2Bi66HB2W46eFyATDD3xJ7BBjqkARTZTCX8fnx1jkOymhgO6kumq4NmKz52vFk4sVOrre20nQVVv8HzsGaaGSCg4oXPPOFAv1SD7NJPRDKx%2Fo4IqV%2BKfTbd0edvqdB1fe5b5VofIV12kk1ha2t7MdjXZPzhLH5ZlXa174OJUlk120%2FLkgeKuFiKVG1QaUF7cNExwZ8bHzcDY0zqBZjQNyl8lzh6flBoGONNQlc4v34zmLeWPkP79Cx6&X-Amz-Signature=83d3e1ce9ba9fe76bff800aeedd51e159687dbf57968edaa801a4e6aba29e4a4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
