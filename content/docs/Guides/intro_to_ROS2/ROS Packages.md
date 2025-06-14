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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4F33WS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQD5LR%2FQdEnLhwV27w%2B9h1wXP3EyIAt%2BIV%2ByslKr%2BJ8YlwIhAI9MaLxI4a9tYqGhxXohRbcXPtL9xFTgeW03tg8JS3E8Kv8DCCgQABoMNjM3NDIzMTgzODA1IgzxX3g1PvGMO7FK9DEq3APWWUoJQv0zVuBv2Euw%2BAK%2B0dPyGQWk%2BVEDhthMnbR51u8g8ij7WAIvbi5Th8vC7O0ftg0fnHjNRlP5seekfoQjonWUVrofaq%2FOkHNQpj3dm0XkQyQ78OvuvRWOLclb1hZLEeJfU%2BvdLkU682o%2BHShkzScoruuNS%2FlANICl6VIscar0GPVz7mwiUGm1f4EMtciGNY2CNXCsP6oOA7PMvPSSuKoM0v6arRxmlp8PuaUtgh0%2Bfwm5o0ctzLGw9PlFFjL3vWtOH34Xg4sfVSRDK0d7IAZw5SyY3lRRZZrK0Wp71jth8zs2%2FJ6f3gWEEz7cdaXM1TF51y2TtzoCSzt7twKVXqGMQqLfELsLRALvDu5YgcRSJyI6et25awa5BJF8Lz2KUnQ7jcsS86jXByH37uGFaDJjJqQ1o0a5SurYKLSR5BnAnIioXsjAQ%2BP%2FmMfGPUKS%2BTQUB5B8MDBqEIKP1Dz%2FLt%2Bxou4UunmsErV5dDnHkwK%2BpB2w9r%2BS%2BWdFi3mqGUF1LnLb8HbF4Sl8cCwgx7euz76KAdJ0JT7X6gAApH07O%2FAYOhZXcMdQQ8OjQzWhWo6Yqk7MbwRXOYU3Xb3pZMTWaNSy%2FiaXRJ4A8tH1lv%2Bv5nVILzAoDrm5TOgwqDD%2Fu7TCBjqkAbMkwO87gSApTxA0v9lWoyRy4jWunZjyQ18GPI85mUWNYiNhM62uyRcgTiFh16YfyR7ekn5NBi5jNXUlBzb2lqYlywnpM6DxTKIxPqCSnEmRChdSqpRRMrCtia%2FRChL%2B4AHEwcDFiA1GwDsPWwaFHo7bWF%2BY5XozTG6igeK%2BQRCSkC2fADHxdTJwc1GOy1eUG9nmn4ISwPYrr1%2FgI1MP4q8ACGvq&X-Amz-Signature=df45ec004d2b43f373603b0366357d319ec9c63b3f20e6157da828532a9f5d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4F33WS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQD5LR%2FQdEnLhwV27w%2B9h1wXP3EyIAt%2BIV%2ByslKr%2BJ8YlwIhAI9MaLxI4a9tYqGhxXohRbcXPtL9xFTgeW03tg8JS3E8Kv8DCCgQABoMNjM3NDIzMTgzODA1IgzxX3g1PvGMO7FK9DEq3APWWUoJQv0zVuBv2Euw%2BAK%2B0dPyGQWk%2BVEDhthMnbR51u8g8ij7WAIvbi5Th8vC7O0ftg0fnHjNRlP5seekfoQjonWUVrofaq%2FOkHNQpj3dm0XkQyQ78OvuvRWOLclb1hZLEeJfU%2BvdLkU682o%2BHShkzScoruuNS%2FlANICl6VIscar0GPVz7mwiUGm1f4EMtciGNY2CNXCsP6oOA7PMvPSSuKoM0v6arRxmlp8PuaUtgh0%2Bfwm5o0ctzLGw9PlFFjL3vWtOH34Xg4sfVSRDK0d7IAZw5SyY3lRRZZrK0Wp71jth8zs2%2FJ6f3gWEEz7cdaXM1TF51y2TtzoCSzt7twKVXqGMQqLfELsLRALvDu5YgcRSJyI6et25awa5BJF8Lz2KUnQ7jcsS86jXByH37uGFaDJjJqQ1o0a5SurYKLSR5BnAnIioXsjAQ%2BP%2FmMfGPUKS%2BTQUB5B8MDBqEIKP1Dz%2FLt%2Bxou4UunmsErV5dDnHkwK%2BpB2w9r%2BS%2BWdFi3mqGUF1LnLb8HbF4Sl8cCwgx7euz76KAdJ0JT7X6gAApH07O%2FAYOhZXcMdQQ8OjQzWhWo6Yqk7MbwRXOYU3Xb3pZMTWaNSy%2FiaXRJ4A8tH1lv%2Bv5nVILzAoDrm5TOgwqDD%2Fu7TCBjqkAbMkwO87gSApTxA0v9lWoyRy4jWunZjyQ18GPI85mUWNYiNhM62uyRcgTiFh16YfyR7ekn5NBi5jNXUlBzb2lqYlywnpM6DxTKIxPqCSnEmRChdSqpRRMrCtia%2FRChL%2B4AHEwcDFiA1GwDsPWwaFHo7bWF%2BY5XozTG6igeK%2BQRCSkC2fADHxdTJwc1GOy1eUG9nmn4ISwPYrr1%2FgI1MP4q8ACGvq&X-Amz-Signature=fd94e225ef96b8b474e05f55995798202cd5112da7ef3471352a9d48dfed47c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4F33WS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQD5LR%2FQdEnLhwV27w%2B9h1wXP3EyIAt%2BIV%2ByslKr%2BJ8YlwIhAI9MaLxI4a9tYqGhxXohRbcXPtL9xFTgeW03tg8JS3E8Kv8DCCgQABoMNjM3NDIzMTgzODA1IgzxX3g1PvGMO7FK9DEq3APWWUoJQv0zVuBv2Euw%2BAK%2B0dPyGQWk%2BVEDhthMnbR51u8g8ij7WAIvbi5Th8vC7O0ftg0fnHjNRlP5seekfoQjonWUVrofaq%2FOkHNQpj3dm0XkQyQ78OvuvRWOLclb1hZLEeJfU%2BvdLkU682o%2BHShkzScoruuNS%2FlANICl6VIscar0GPVz7mwiUGm1f4EMtciGNY2CNXCsP6oOA7PMvPSSuKoM0v6arRxmlp8PuaUtgh0%2Bfwm5o0ctzLGw9PlFFjL3vWtOH34Xg4sfVSRDK0d7IAZw5SyY3lRRZZrK0Wp71jth8zs2%2FJ6f3gWEEz7cdaXM1TF51y2TtzoCSzt7twKVXqGMQqLfELsLRALvDu5YgcRSJyI6et25awa5BJF8Lz2KUnQ7jcsS86jXByH37uGFaDJjJqQ1o0a5SurYKLSR5BnAnIioXsjAQ%2BP%2FmMfGPUKS%2BTQUB5B8MDBqEIKP1Dz%2FLt%2Bxou4UunmsErV5dDnHkwK%2BpB2w9r%2BS%2BWdFi3mqGUF1LnLb8HbF4Sl8cCwgx7euz76KAdJ0JT7X6gAApH07O%2FAYOhZXcMdQQ8OjQzWhWo6Yqk7MbwRXOYU3Xb3pZMTWaNSy%2FiaXRJ4A8tH1lv%2Bv5nVILzAoDrm5TOgwqDD%2Fu7TCBjqkAbMkwO87gSApTxA0v9lWoyRy4jWunZjyQ18GPI85mUWNYiNhM62uyRcgTiFh16YfyR7ekn5NBi5jNXUlBzb2lqYlywnpM6DxTKIxPqCSnEmRChdSqpRRMrCtia%2FRChL%2B4AHEwcDFiA1GwDsPWwaFHo7bWF%2BY5XozTG6igeK%2BQRCSkC2fADHxdTJwc1GOy1eUG9nmn4ISwPYrr1%2FgI1MP4q8ACGvq&X-Amz-Signature=05adf00a40ffe92e56034a805916ded29b0beaa8fe840960c7b9bab4abc08d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4F33WS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQD5LR%2FQdEnLhwV27w%2B9h1wXP3EyIAt%2BIV%2ByslKr%2BJ8YlwIhAI9MaLxI4a9tYqGhxXohRbcXPtL9xFTgeW03tg8JS3E8Kv8DCCgQABoMNjM3NDIzMTgzODA1IgzxX3g1PvGMO7FK9DEq3APWWUoJQv0zVuBv2Euw%2BAK%2B0dPyGQWk%2BVEDhthMnbR51u8g8ij7WAIvbi5Th8vC7O0ftg0fnHjNRlP5seekfoQjonWUVrofaq%2FOkHNQpj3dm0XkQyQ78OvuvRWOLclb1hZLEeJfU%2BvdLkU682o%2BHShkzScoruuNS%2FlANICl6VIscar0GPVz7mwiUGm1f4EMtciGNY2CNXCsP6oOA7PMvPSSuKoM0v6arRxmlp8PuaUtgh0%2Bfwm5o0ctzLGw9PlFFjL3vWtOH34Xg4sfVSRDK0d7IAZw5SyY3lRRZZrK0Wp71jth8zs2%2FJ6f3gWEEz7cdaXM1TF51y2TtzoCSzt7twKVXqGMQqLfELsLRALvDu5YgcRSJyI6et25awa5BJF8Lz2KUnQ7jcsS86jXByH37uGFaDJjJqQ1o0a5SurYKLSR5BnAnIioXsjAQ%2BP%2FmMfGPUKS%2BTQUB5B8MDBqEIKP1Dz%2FLt%2Bxou4UunmsErV5dDnHkwK%2BpB2w9r%2BS%2BWdFi3mqGUF1LnLb8HbF4Sl8cCwgx7euz76KAdJ0JT7X6gAApH07O%2FAYOhZXcMdQQ8OjQzWhWo6Yqk7MbwRXOYU3Xb3pZMTWaNSy%2FiaXRJ4A8tH1lv%2Bv5nVILzAoDrm5TOgwqDD%2Fu7TCBjqkAbMkwO87gSApTxA0v9lWoyRy4jWunZjyQ18GPI85mUWNYiNhM62uyRcgTiFh16YfyR7ekn5NBi5jNXUlBzb2lqYlywnpM6DxTKIxPqCSnEmRChdSqpRRMrCtia%2FRChL%2B4AHEwcDFiA1GwDsPWwaFHo7bWF%2BY5XozTG6igeK%2BQRCSkC2fADHxdTJwc1GOy1eUG9nmn4ISwPYrr1%2FgI1MP4q8ACGvq&X-Amz-Signature=706a4bf630774e44d2b9e62153f708785b3e6fe93fb70542e47fff1f018dc843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4F33WS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQD5LR%2FQdEnLhwV27w%2B9h1wXP3EyIAt%2BIV%2ByslKr%2BJ8YlwIhAI9MaLxI4a9tYqGhxXohRbcXPtL9xFTgeW03tg8JS3E8Kv8DCCgQABoMNjM3NDIzMTgzODA1IgzxX3g1PvGMO7FK9DEq3APWWUoJQv0zVuBv2Euw%2BAK%2B0dPyGQWk%2BVEDhthMnbR51u8g8ij7WAIvbi5Th8vC7O0ftg0fnHjNRlP5seekfoQjonWUVrofaq%2FOkHNQpj3dm0XkQyQ78OvuvRWOLclb1hZLEeJfU%2BvdLkU682o%2BHShkzScoruuNS%2FlANICl6VIscar0GPVz7mwiUGm1f4EMtciGNY2CNXCsP6oOA7PMvPSSuKoM0v6arRxmlp8PuaUtgh0%2Bfwm5o0ctzLGw9PlFFjL3vWtOH34Xg4sfVSRDK0d7IAZw5SyY3lRRZZrK0Wp71jth8zs2%2FJ6f3gWEEz7cdaXM1TF51y2TtzoCSzt7twKVXqGMQqLfELsLRALvDu5YgcRSJyI6et25awa5BJF8Lz2KUnQ7jcsS86jXByH37uGFaDJjJqQ1o0a5SurYKLSR5BnAnIioXsjAQ%2BP%2FmMfGPUKS%2BTQUB5B8MDBqEIKP1Dz%2FLt%2Bxou4UunmsErV5dDnHkwK%2BpB2w9r%2BS%2BWdFi3mqGUF1LnLb8HbF4Sl8cCwgx7euz76KAdJ0JT7X6gAApH07O%2FAYOhZXcMdQQ8OjQzWhWo6Yqk7MbwRXOYU3Xb3pZMTWaNSy%2FiaXRJ4A8tH1lv%2Bv5nVILzAoDrm5TOgwqDD%2Fu7TCBjqkAbMkwO87gSApTxA0v9lWoyRy4jWunZjyQ18GPI85mUWNYiNhM62uyRcgTiFh16YfyR7ekn5NBi5jNXUlBzb2lqYlywnpM6DxTKIxPqCSnEmRChdSqpRRMrCtia%2FRChL%2B4AHEwcDFiA1GwDsPWwaFHo7bWF%2BY5XozTG6igeK%2BQRCSkC2fADHxdTJwc1GOy1eUG9nmn4ISwPYrr1%2FgI1MP4q8ACGvq&X-Amz-Signature=e84061ca34adbb698230190aeeca196fe1b69331656b954345a36d151a561a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4F33WS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQD5LR%2FQdEnLhwV27w%2B9h1wXP3EyIAt%2BIV%2ByslKr%2BJ8YlwIhAI9MaLxI4a9tYqGhxXohRbcXPtL9xFTgeW03tg8JS3E8Kv8DCCgQABoMNjM3NDIzMTgzODA1IgzxX3g1PvGMO7FK9DEq3APWWUoJQv0zVuBv2Euw%2BAK%2B0dPyGQWk%2BVEDhthMnbR51u8g8ij7WAIvbi5Th8vC7O0ftg0fnHjNRlP5seekfoQjonWUVrofaq%2FOkHNQpj3dm0XkQyQ78OvuvRWOLclb1hZLEeJfU%2BvdLkU682o%2BHShkzScoruuNS%2FlANICl6VIscar0GPVz7mwiUGm1f4EMtciGNY2CNXCsP6oOA7PMvPSSuKoM0v6arRxmlp8PuaUtgh0%2Bfwm5o0ctzLGw9PlFFjL3vWtOH34Xg4sfVSRDK0d7IAZw5SyY3lRRZZrK0Wp71jth8zs2%2FJ6f3gWEEz7cdaXM1TF51y2TtzoCSzt7twKVXqGMQqLfELsLRALvDu5YgcRSJyI6et25awa5BJF8Lz2KUnQ7jcsS86jXByH37uGFaDJjJqQ1o0a5SurYKLSR5BnAnIioXsjAQ%2BP%2FmMfGPUKS%2BTQUB5B8MDBqEIKP1Dz%2FLt%2Bxou4UunmsErV5dDnHkwK%2BpB2w9r%2BS%2BWdFi3mqGUF1LnLb8HbF4Sl8cCwgx7euz76KAdJ0JT7X6gAApH07O%2FAYOhZXcMdQQ8OjQzWhWo6Yqk7MbwRXOYU3Xb3pZMTWaNSy%2FiaXRJ4A8tH1lv%2Bv5nVILzAoDrm5TOgwqDD%2Fu7TCBjqkAbMkwO87gSApTxA0v9lWoyRy4jWunZjyQ18GPI85mUWNYiNhM62uyRcgTiFh16YfyR7ekn5NBi5jNXUlBzb2lqYlywnpM6DxTKIxPqCSnEmRChdSqpRRMrCtia%2FRChL%2B4AHEwcDFiA1GwDsPWwaFHo7bWF%2BY5XozTG6igeK%2BQRCSkC2fADHxdTJwc1GOy1eUG9nmn4ISwPYrr1%2FgI1MP4q8ACGvq&X-Amz-Signature=1b6625d8a0cedece71ecad9bbc50d288c61b247bf98a0d5c2caa9dbb2f7b20ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4F33WS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQD5LR%2FQdEnLhwV27w%2B9h1wXP3EyIAt%2BIV%2ByslKr%2BJ8YlwIhAI9MaLxI4a9tYqGhxXohRbcXPtL9xFTgeW03tg8JS3E8Kv8DCCgQABoMNjM3NDIzMTgzODA1IgzxX3g1PvGMO7FK9DEq3APWWUoJQv0zVuBv2Euw%2BAK%2B0dPyGQWk%2BVEDhthMnbR51u8g8ij7WAIvbi5Th8vC7O0ftg0fnHjNRlP5seekfoQjonWUVrofaq%2FOkHNQpj3dm0XkQyQ78OvuvRWOLclb1hZLEeJfU%2BvdLkU682o%2BHShkzScoruuNS%2FlANICl6VIscar0GPVz7mwiUGm1f4EMtciGNY2CNXCsP6oOA7PMvPSSuKoM0v6arRxmlp8PuaUtgh0%2Bfwm5o0ctzLGw9PlFFjL3vWtOH34Xg4sfVSRDK0d7IAZw5SyY3lRRZZrK0Wp71jth8zs2%2FJ6f3gWEEz7cdaXM1TF51y2TtzoCSzt7twKVXqGMQqLfELsLRALvDu5YgcRSJyI6et25awa5BJF8Lz2KUnQ7jcsS86jXByH37uGFaDJjJqQ1o0a5SurYKLSR5BnAnIioXsjAQ%2BP%2FmMfGPUKS%2BTQUB5B8MDBqEIKP1Dz%2FLt%2Bxou4UunmsErV5dDnHkwK%2BpB2w9r%2BS%2BWdFi3mqGUF1LnLb8HbF4Sl8cCwgx7euz76KAdJ0JT7X6gAApH07O%2FAYOhZXcMdQQ8OjQzWhWo6Yqk7MbwRXOYU3Xb3pZMTWaNSy%2FiaXRJ4A8tH1lv%2Bv5nVILzAoDrm5TOgwqDD%2Fu7TCBjqkAbMkwO87gSApTxA0v9lWoyRy4jWunZjyQ18GPI85mUWNYiNhM62uyRcgTiFh16YfyR7ekn5NBi5jNXUlBzb2lqYlywnpM6DxTKIxPqCSnEmRChdSqpRRMrCtia%2FRChL%2B4AHEwcDFiA1GwDsPWwaFHo7bWF%2BY5XozTG6igeK%2BQRCSkC2fADHxdTJwc1GOy1eUG9nmn4ISwPYrr1%2FgI1MP4q8ACGvq&X-Amz-Signature=6bbbfc6e5d9da700293091c348365aac098f112a509ff8980552ea8822db0ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
