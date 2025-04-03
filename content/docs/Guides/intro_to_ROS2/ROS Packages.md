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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWWPPVA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO892Dx%2F44rb3slpI0qhFV34tEXgXpb%2FWPSTO7YltdewIhAJ0aeyZZZtm%2BHmQ2v1E%2FbuNhyQkUDk2hmFcXQC4nnyZqKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1%2BCBK5Zh3AfqHz4Mq3APSXn6TkgzE%2B3SO1K%2FCrrsxjDay84XFdqrTRWP8bI%2FxobC7dgpYf1YmhVQhZ%2FP5m6t5nJGB7M%2B502hiftU1BbryhEC6%2B59LLKRpqueuNhJhswiwk5vU%2FUzvJRG2Jz3kTcvEtXgiI8zHiT0WBkaJc49WnVCbZHA6ti18rR622c9PREpwzgxRgbpef2G%2Fwo2ozj1p%2BkylgExV9ktc9uqJAwDWQQmmj1WNuj8h8PXKx0TKcSii3%2FFrj1HV%2Bj9wRVfVXXNeokgw4XFOwYmc7SdObRXKAdgf3WYS6cdrGYIUEQP4xSU0HVVyBg9ojft5qvaZ%2B%2F2NIuM07N6xaISCtSOx3A36knbnclofSN3XzLYEc%2BYHPzUAfSTc5jVgTp80%2F1P4%2BZdqqUitstN4IOiVSwVBCJEqXX6WQuN1JGGsjOC7WyQP5lHe0Ti4y4SaBTl0B6rWplLHYD%2FQxh%2FS%2BIoWe8RuHTcBsiWovdCO2TcfCrEVX901Rb7njjX6V1LhLzb02u%2BPrtYd%2BhYrR%2FU8B5nNMIMfUyH6nkiJOZ%2BWuHmnDmWcyCxQPbrHXwOUH1F3pspWzV3tB6fmrFGiHxXb%2BJ%2Fi6ICpRVjIm0qGoB1SLGEOodfZOW0suyuXnJNF5HhoUXFIyzDZ47m%2FBjqkAWjpue764Qzka5Og71gFbgbfC%2FNwKPro2eryu61j3MDGFOHeSgP9uLepdVY8WoSIJ7ZL7lBaHaAaS0gl7wvARoz%2B8tbPvmiLhXmnojtC5Q3zUqyCa5kVX1UFxYzv7YVsoxAlyh046GUmYgAIsx4rRBx96G6orXIDH5xkpVg%2Bp4e5187ysB2memjyOiBvhff19hTpkFT45%2B%2BttTrx%2BNU%2BkmoJw9I1&X-Amz-Signature=44326baafc77564fa95482cdadaf9e122891f6271a671372cb13a6822d98cb3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWWPPVA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO892Dx%2F44rb3slpI0qhFV34tEXgXpb%2FWPSTO7YltdewIhAJ0aeyZZZtm%2BHmQ2v1E%2FbuNhyQkUDk2hmFcXQC4nnyZqKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1%2BCBK5Zh3AfqHz4Mq3APSXn6TkgzE%2B3SO1K%2FCrrsxjDay84XFdqrTRWP8bI%2FxobC7dgpYf1YmhVQhZ%2FP5m6t5nJGB7M%2B502hiftU1BbryhEC6%2B59LLKRpqueuNhJhswiwk5vU%2FUzvJRG2Jz3kTcvEtXgiI8zHiT0WBkaJc49WnVCbZHA6ti18rR622c9PREpwzgxRgbpef2G%2Fwo2ozj1p%2BkylgExV9ktc9uqJAwDWQQmmj1WNuj8h8PXKx0TKcSii3%2FFrj1HV%2Bj9wRVfVXXNeokgw4XFOwYmc7SdObRXKAdgf3WYS6cdrGYIUEQP4xSU0HVVyBg9ojft5qvaZ%2B%2F2NIuM07N6xaISCtSOx3A36knbnclofSN3XzLYEc%2BYHPzUAfSTc5jVgTp80%2F1P4%2BZdqqUitstN4IOiVSwVBCJEqXX6WQuN1JGGsjOC7WyQP5lHe0Ti4y4SaBTl0B6rWplLHYD%2FQxh%2FS%2BIoWe8RuHTcBsiWovdCO2TcfCrEVX901Rb7njjX6V1LhLzb02u%2BPrtYd%2BhYrR%2FU8B5nNMIMfUyH6nkiJOZ%2BWuHmnDmWcyCxQPbrHXwOUH1F3pspWzV3tB6fmrFGiHxXb%2BJ%2Fi6ICpRVjIm0qGoB1SLGEOodfZOW0suyuXnJNF5HhoUXFIyzDZ47m%2FBjqkAWjpue764Qzka5Og71gFbgbfC%2FNwKPro2eryu61j3MDGFOHeSgP9uLepdVY8WoSIJ7ZL7lBaHaAaS0gl7wvARoz%2B8tbPvmiLhXmnojtC5Q3zUqyCa5kVX1UFxYzv7YVsoxAlyh046GUmYgAIsx4rRBx96G6orXIDH5xkpVg%2Bp4e5187ysB2memjyOiBvhff19hTpkFT45%2B%2BttTrx%2BNU%2BkmoJw9I1&X-Amz-Signature=e18aea87a238223991d6ef65022b8cca079edc1603ab21b1c2e46d2499d6dee0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWWPPVA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO892Dx%2F44rb3slpI0qhFV34tEXgXpb%2FWPSTO7YltdewIhAJ0aeyZZZtm%2BHmQ2v1E%2FbuNhyQkUDk2hmFcXQC4nnyZqKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1%2BCBK5Zh3AfqHz4Mq3APSXn6TkgzE%2B3SO1K%2FCrrsxjDay84XFdqrTRWP8bI%2FxobC7dgpYf1YmhVQhZ%2FP5m6t5nJGB7M%2B502hiftU1BbryhEC6%2B59LLKRpqueuNhJhswiwk5vU%2FUzvJRG2Jz3kTcvEtXgiI8zHiT0WBkaJc49WnVCbZHA6ti18rR622c9PREpwzgxRgbpef2G%2Fwo2ozj1p%2BkylgExV9ktc9uqJAwDWQQmmj1WNuj8h8PXKx0TKcSii3%2FFrj1HV%2Bj9wRVfVXXNeokgw4XFOwYmc7SdObRXKAdgf3WYS6cdrGYIUEQP4xSU0HVVyBg9ojft5qvaZ%2B%2F2NIuM07N6xaISCtSOx3A36knbnclofSN3XzLYEc%2BYHPzUAfSTc5jVgTp80%2F1P4%2BZdqqUitstN4IOiVSwVBCJEqXX6WQuN1JGGsjOC7WyQP5lHe0Ti4y4SaBTl0B6rWplLHYD%2FQxh%2FS%2BIoWe8RuHTcBsiWovdCO2TcfCrEVX901Rb7njjX6V1LhLzb02u%2BPrtYd%2BhYrR%2FU8B5nNMIMfUyH6nkiJOZ%2BWuHmnDmWcyCxQPbrHXwOUH1F3pspWzV3tB6fmrFGiHxXb%2BJ%2Fi6ICpRVjIm0qGoB1SLGEOodfZOW0suyuXnJNF5HhoUXFIyzDZ47m%2FBjqkAWjpue764Qzka5Og71gFbgbfC%2FNwKPro2eryu61j3MDGFOHeSgP9uLepdVY8WoSIJ7ZL7lBaHaAaS0gl7wvARoz%2B8tbPvmiLhXmnojtC5Q3zUqyCa5kVX1UFxYzv7YVsoxAlyh046GUmYgAIsx4rRBx96G6orXIDH5xkpVg%2Bp4e5187ysB2memjyOiBvhff19hTpkFT45%2B%2BttTrx%2BNU%2BkmoJw9I1&X-Amz-Signature=75cc33b8ef833ccee6cdc0e855b699c7c604dea14cf10aac5c795c93c02b4c92&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWWPPVA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO892Dx%2F44rb3slpI0qhFV34tEXgXpb%2FWPSTO7YltdewIhAJ0aeyZZZtm%2BHmQ2v1E%2FbuNhyQkUDk2hmFcXQC4nnyZqKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1%2BCBK5Zh3AfqHz4Mq3APSXn6TkgzE%2B3SO1K%2FCrrsxjDay84XFdqrTRWP8bI%2FxobC7dgpYf1YmhVQhZ%2FP5m6t5nJGB7M%2B502hiftU1BbryhEC6%2B59LLKRpqueuNhJhswiwk5vU%2FUzvJRG2Jz3kTcvEtXgiI8zHiT0WBkaJc49WnVCbZHA6ti18rR622c9PREpwzgxRgbpef2G%2Fwo2ozj1p%2BkylgExV9ktc9uqJAwDWQQmmj1WNuj8h8PXKx0TKcSii3%2FFrj1HV%2Bj9wRVfVXXNeokgw4XFOwYmc7SdObRXKAdgf3WYS6cdrGYIUEQP4xSU0HVVyBg9ojft5qvaZ%2B%2F2NIuM07N6xaISCtSOx3A36knbnclofSN3XzLYEc%2BYHPzUAfSTc5jVgTp80%2F1P4%2BZdqqUitstN4IOiVSwVBCJEqXX6WQuN1JGGsjOC7WyQP5lHe0Ti4y4SaBTl0B6rWplLHYD%2FQxh%2FS%2BIoWe8RuHTcBsiWovdCO2TcfCrEVX901Rb7njjX6V1LhLzb02u%2BPrtYd%2BhYrR%2FU8B5nNMIMfUyH6nkiJOZ%2BWuHmnDmWcyCxQPbrHXwOUH1F3pspWzV3tB6fmrFGiHxXb%2BJ%2Fi6ICpRVjIm0qGoB1SLGEOodfZOW0suyuXnJNF5HhoUXFIyzDZ47m%2FBjqkAWjpue764Qzka5Og71gFbgbfC%2FNwKPro2eryu61j3MDGFOHeSgP9uLepdVY8WoSIJ7ZL7lBaHaAaS0gl7wvARoz%2B8tbPvmiLhXmnojtC5Q3zUqyCa5kVX1UFxYzv7YVsoxAlyh046GUmYgAIsx4rRBx96G6orXIDH5xkpVg%2Bp4e5187ysB2memjyOiBvhff19hTpkFT45%2B%2BttTrx%2BNU%2BkmoJw9I1&X-Amz-Signature=fb445869f77362cdff05ba62b9abc3f77a7171375e309b007b1e3cf90f55ab5b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWWPPVA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO892Dx%2F44rb3slpI0qhFV34tEXgXpb%2FWPSTO7YltdewIhAJ0aeyZZZtm%2BHmQ2v1E%2FbuNhyQkUDk2hmFcXQC4nnyZqKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1%2BCBK5Zh3AfqHz4Mq3APSXn6TkgzE%2B3SO1K%2FCrrsxjDay84XFdqrTRWP8bI%2FxobC7dgpYf1YmhVQhZ%2FP5m6t5nJGB7M%2B502hiftU1BbryhEC6%2B59LLKRpqueuNhJhswiwk5vU%2FUzvJRG2Jz3kTcvEtXgiI8zHiT0WBkaJc49WnVCbZHA6ti18rR622c9PREpwzgxRgbpef2G%2Fwo2ozj1p%2BkylgExV9ktc9uqJAwDWQQmmj1WNuj8h8PXKx0TKcSii3%2FFrj1HV%2Bj9wRVfVXXNeokgw4XFOwYmc7SdObRXKAdgf3WYS6cdrGYIUEQP4xSU0HVVyBg9ojft5qvaZ%2B%2F2NIuM07N6xaISCtSOx3A36knbnclofSN3XzLYEc%2BYHPzUAfSTc5jVgTp80%2F1P4%2BZdqqUitstN4IOiVSwVBCJEqXX6WQuN1JGGsjOC7WyQP5lHe0Ti4y4SaBTl0B6rWplLHYD%2FQxh%2FS%2BIoWe8RuHTcBsiWovdCO2TcfCrEVX901Rb7njjX6V1LhLzb02u%2BPrtYd%2BhYrR%2FU8B5nNMIMfUyH6nkiJOZ%2BWuHmnDmWcyCxQPbrHXwOUH1F3pspWzV3tB6fmrFGiHxXb%2BJ%2Fi6ICpRVjIm0qGoB1SLGEOodfZOW0suyuXnJNF5HhoUXFIyzDZ47m%2FBjqkAWjpue764Qzka5Og71gFbgbfC%2FNwKPro2eryu61j3MDGFOHeSgP9uLepdVY8WoSIJ7ZL7lBaHaAaS0gl7wvARoz%2B8tbPvmiLhXmnojtC5Q3zUqyCa5kVX1UFxYzv7YVsoxAlyh046GUmYgAIsx4rRBx96G6orXIDH5xkpVg%2Bp4e5187ysB2memjyOiBvhff19hTpkFT45%2B%2BttTrx%2BNU%2BkmoJw9I1&X-Amz-Signature=92210927ed4d92b7875b563f3079ba69460f4f0c27148e238cbe5fe26c11d87f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWWPPVA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO892Dx%2F44rb3slpI0qhFV34tEXgXpb%2FWPSTO7YltdewIhAJ0aeyZZZtm%2BHmQ2v1E%2FbuNhyQkUDk2hmFcXQC4nnyZqKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1%2BCBK5Zh3AfqHz4Mq3APSXn6TkgzE%2B3SO1K%2FCrrsxjDay84XFdqrTRWP8bI%2FxobC7dgpYf1YmhVQhZ%2FP5m6t5nJGB7M%2B502hiftU1BbryhEC6%2B59LLKRpqueuNhJhswiwk5vU%2FUzvJRG2Jz3kTcvEtXgiI8zHiT0WBkaJc49WnVCbZHA6ti18rR622c9PREpwzgxRgbpef2G%2Fwo2ozj1p%2BkylgExV9ktc9uqJAwDWQQmmj1WNuj8h8PXKx0TKcSii3%2FFrj1HV%2Bj9wRVfVXXNeokgw4XFOwYmc7SdObRXKAdgf3WYS6cdrGYIUEQP4xSU0HVVyBg9ojft5qvaZ%2B%2F2NIuM07N6xaISCtSOx3A36knbnclofSN3XzLYEc%2BYHPzUAfSTc5jVgTp80%2F1P4%2BZdqqUitstN4IOiVSwVBCJEqXX6WQuN1JGGsjOC7WyQP5lHe0Ti4y4SaBTl0B6rWplLHYD%2FQxh%2FS%2BIoWe8RuHTcBsiWovdCO2TcfCrEVX901Rb7njjX6V1LhLzb02u%2BPrtYd%2BhYrR%2FU8B5nNMIMfUyH6nkiJOZ%2BWuHmnDmWcyCxQPbrHXwOUH1F3pspWzV3tB6fmrFGiHxXb%2BJ%2Fi6ICpRVjIm0qGoB1SLGEOodfZOW0suyuXnJNF5HhoUXFIyzDZ47m%2FBjqkAWjpue764Qzka5Og71gFbgbfC%2FNwKPro2eryu61j3MDGFOHeSgP9uLepdVY8WoSIJ7ZL7lBaHaAaS0gl7wvARoz%2B8tbPvmiLhXmnojtC5Q3zUqyCa5kVX1UFxYzv7YVsoxAlyh046GUmYgAIsx4rRBx96G6orXIDH5xkpVg%2Bp4e5187ysB2memjyOiBvhff19hTpkFT45%2B%2BttTrx%2BNU%2BkmoJw9I1&X-Amz-Signature=0ff2825e6309fe0d9a2c76198db3ed9bdf919f32d95e1198867b0638b9a762b4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWWPPVA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO892Dx%2F44rb3slpI0qhFV34tEXgXpb%2FWPSTO7YltdewIhAJ0aeyZZZtm%2BHmQ2v1E%2FbuNhyQkUDk2hmFcXQC4nnyZqKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1%2BCBK5Zh3AfqHz4Mq3APSXn6TkgzE%2B3SO1K%2FCrrsxjDay84XFdqrTRWP8bI%2FxobC7dgpYf1YmhVQhZ%2FP5m6t5nJGB7M%2B502hiftU1BbryhEC6%2B59LLKRpqueuNhJhswiwk5vU%2FUzvJRG2Jz3kTcvEtXgiI8zHiT0WBkaJc49WnVCbZHA6ti18rR622c9PREpwzgxRgbpef2G%2Fwo2ozj1p%2BkylgExV9ktc9uqJAwDWQQmmj1WNuj8h8PXKx0TKcSii3%2FFrj1HV%2Bj9wRVfVXXNeokgw4XFOwYmc7SdObRXKAdgf3WYS6cdrGYIUEQP4xSU0HVVyBg9ojft5qvaZ%2B%2F2NIuM07N6xaISCtSOx3A36knbnclofSN3XzLYEc%2BYHPzUAfSTc5jVgTp80%2F1P4%2BZdqqUitstN4IOiVSwVBCJEqXX6WQuN1JGGsjOC7WyQP5lHe0Ti4y4SaBTl0B6rWplLHYD%2FQxh%2FS%2BIoWe8RuHTcBsiWovdCO2TcfCrEVX901Rb7njjX6V1LhLzb02u%2BPrtYd%2BhYrR%2FU8B5nNMIMfUyH6nkiJOZ%2BWuHmnDmWcyCxQPbrHXwOUH1F3pspWzV3tB6fmrFGiHxXb%2BJ%2Fi6ICpRVjIm0qGoB1SLGEOodfZOW0suyuXnJNF5HhoUXFIyzDZ47m%2FBjqkAWjpue764Qzka5Og71gFbgbfC%2FNwKPro2eryu61j3MDGFOHeSgP9uLepdVY8WoSIJ7ZL7lBaHaAaS0gl7wvARoz%2B8tbPvmiLhXmnojtC5Q3zUqyCa5kVX1UFxYzv7YVsoxAlyh046GUmYgAIsx4rRBx96G6orXIDH5xkpVg%2Bp4e5187ysB2memjyOiBvhff19hTpkFT45%2B%2BttTrx%2BNU%2BkmoJw9I1&X-Amz-Signature=3d68aba9c205405bd1d933874975d25d58792b3787ce4c09ab86b3df8d5c366c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
