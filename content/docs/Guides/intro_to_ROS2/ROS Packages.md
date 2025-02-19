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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4LA4OK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDkkG8mnb56KbTl7SbLxyG8c0x5%2BzFQQcQgBdnJzeT9fQIhAIrYKP3fVZUGsSWPd999D29jn8NYvzAwbt87S2WJleqgKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyscox4iha8LcWiiQ8q3ANOvuABjt0s%2Bq8RXq9FroYy7MsNVtjnjBC3IOvjnJNtqBlcQQQiZdYLfJqWrsxJZMZvvLzEZEfsCidQ5pw43z4ABn%2BaNdGL4WpHkJy8uGEcL7J83dgVlKXxuHz6sxMNLMcOmMGWgXWBIfANzkIeczyI%2FUIOIxHRwpEcy4JqjwiMXQZTbZOk%2F10WehKQzTJtwc0iSqoEqqPFQQ3ktQ%2FNkxGyuOyI2yfeT6YflLCMRagWLY0Hy2G8wVVtd9TiR64I6caWDXs6i%2BkHjSzwLWLrMbhAFUIuHQ3yzJiG5ROSzSnhqC3gxhDN4zflJ%2FaNXwwTXk3UI1w9H3RaPmqh1HmO4VnGYnw1cFrucxsWYnKqQdVuljn9i45osxHvtlAsjQ%2B0utcU3SN0jDQcUtk4%2FCjpvOsHMK%2FiELokn%2FOi6kdfd4dfnXI1wtcsJUqzAt0h1wqp3%2B%2FI9jDpkL%2BbvBl1n5SjYw8FkpTjd6ZGqKCYUAaKzKQzk9Xjwt5jNkdrp5TKNUPQ%2BAV0VN8VkQgGtqzGGlZmWzQX%2Bkm0bi%2FhCg88tHd4S0NaoRnY8oVMR6%2FZXgZ6U0WLMV2yUXJ%2Ba5bhEvBYTSWcE5Iw4hWiQddWWeJEPDF3Nz5gDaqSMvXTLQTh39E3BTCUhtW9BjqkAUo%2F7%2BEL%2BmJY25Ure2rp%2BomKswlX1T3%2Fo%2BMwQzU%2BX7IKbo3m5TlNgiT8MWTCRHg%2Fuxa2Tib4mlLakZtPFtbihp7TNdR2lOlNueXPYCXugxvKu1TOqAqsME9fkwJyiPfoAwVJa8EKPQ2x9BDNfFh3ce4wZRrokfmT15s0Jb%2B3UNf0qNBuoYlOVVW0Ck30zhUIRxDOTnPFmarzKvOmtGUFx%2FUW1AtC&X-Amz-Signature=ea4203784929f41bed5a9652237791c7506bd105e79d5f1f3823196258e1de16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4LA4OK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDkkG8mnb56KbTl7SbLxyG8c0x5%2BzFQQcQgBdnJzeT9fQIhAIrYKP3fVZUGsSWPd999D29jn8NYvzAwbt87S2WJleqgKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyscox4iha8LcWiiQ8q3ANOvuABjt0s%2Bq8RXq9FroYy7MsNVtjnjBC3IOvjnJNtqBlcQQQiZdYLfJqWrsxJZMZvvLzEZEfsCidQ5pw43z4ABn%2BaNdGL4WpHkJy8uGEcL7J83dgVlKXxuHz6sxMNLMcOmMGWgXWBIfANzkIeczyI%2FUIOIxHRwpEcy4JqjwiMXQZTbZOk%2F10WehKQzTJtwc0iSqoEqqPFQQ3ktQ%2FNkxGyuOyI2yfeT6YflLCMRagWLY0Hy2G8wVVtd9TiR64I6caWDXs6i%2BkHjSzwLWLrMbhAFUIuHQ3yzJiG5ROSzSnhqC3gxhDN4zflJ%2FaNXwwTXk3UI1w9H3RaPmqh1HmO4VnGYnw1cFrucxsWYnKqQdVuljn9i45osxHvtlAsjQ%2B0utcU3SN0jDQcUtk4%2FCjpvOsHMK%2FiELokn%2FOi6kdfd4dfnXI1wtcsJUqzAt0h1wqp3%2B%2FI9jDpkL%2BbvBl1n5SjYw8FkpTjd6ZGqKCYUAaKzKQzk9Xjwt5jNkdrp5TKNUPQ%2BAV0VN8VkQgGtqzGGlZmWzQX%2Bkm0bi%2FhCg88tHd4S0NaoRnY8oVMR6%2FZXgZ6U0WLMV2yUXJ%2Ba5bhEvBYTSWcE5Iw4hWiQddWWeJEPDF3Nz5gDaqSMvXTLQTh39E3BTCUhtW9BjqkAUo%2F7%2BEL%2BmJY25Ure2rp%2BomKswlX1T3%2Fo%2BMwQzU%2BX7IKbo3m5TlNgiT8MWTCRHg%2Fuxa2Tib4mlLakZtPFtbihp7TNdR2lOlNueXPYCXugxvKu1TOqAqsME9fkwJyiPfoAwVJa8EKPQ2x9BDNfFh3ce4wZRrokfmT15s0Jb%2B3UNf0qNBuoYlOVVW0Ck30zhUIRxDOTnPFmarzKvOmtGUFx%2FUW1AtC&X-Amz-Signature=f2ce7d0cb139c9fc2e5012f61254d602fcc658403397b8c297db591fdc510740&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4LA4OK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDkkG8mnb56KbTl7SbLxyG8c0x5%2BzFQQcQgBdnJzeT9fQIhAIrYKP3fVZUGsSWPd999D29jn8NYvzAwbt87S2WJleqgKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyscox4iha8LcWiiQ8q3ANOvuABjt0s%2Bq8RXq9FroYy7MsNVtjnjBC3IOvjnJNtqBlcQQQiZdYLfJqWrsxJZMZvvLzEZEfsCidQ5pw43z4ABn%2BaNdGL4WpHkJy8uGEcL7J83dgVlKXxuHz6sxMNLMcOmMGWgXWBIfANzkIeczyI%2FUIOIxHRwpEcy4JqjwiMXQZTbZOk%2F10WehKQzTJtwc0iSqoEqqPFQQ3ktQ%2FNkxGyuOyI2yfeT6YflLCMRagWLY0Hy2G8wVVtd9TiR64I6caWDXs6i%2BkHjSzwLWLrMbhAFUIuHQ3yzJiG5ROSzSnhqC3gxhDN4zflJ%2FaNXwwTXk3UI1w9H3RaPmqh1HmO4VnGYnw1cFrucxsWYnKqQdVuljn9i45osxHvtlAsjQ%2B0utcU3SN0jDQcUtk4%2FCjpvOsHMK%2FiELokn%2FOi6kdfd4dfnXI1wtcsJUqzAt0h1wqp3%2B%2FI9jDpkL%2BbvBl1n5SjYw8FkpTjd6ZGqKCYUAaKzKQzk9Xjwt5jNkdrp5TKNUPQ%2BAV0VN8VkQgGtqzGGlZmWzQX%2Bkm0bi%2FhCg88tHd4S0NaoRnY8oVMR6%2FZXgZ6U0WLMV2yUXJ%2Ba5bhEvBYTSWcE5Iw4hWiQddWWeJEPDF3Nz5gDaqSMvXTLQTh39E3BTCUhtW9BjqkAUo%2F7%2BEL%2BmJY25Ure2rp%2BomKswlX1T3%2Fo%2BMwQzU%2BX7IKbo3m5TlNgiT8MWTCRHg%2Fuxa2Tib4mlLakZtPFtbihp7TNdR2lOlNueXPYCXugxvKu1TOqAqsME9fkwJyiPfoAwVJa8EKPQ2x9BDNfFh3ce4wZRrokfmT15s0Jb%2B3UNf0qNBuoYlOVVW0Ck30zhUIRxDOTnPFmarzKvOmtGUFx%2FUW1AtC&X-Amz-Signature=60699a9800f47d50676984493582d5945ae70378fad437214405c47c3ee379ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4LA4OK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDkkG8mnb56KbTl7SbLxyG8c0x5%2BzFQQcQgBdnJzeT9fQIhAIrYKP3fVZUGsSWPd999D29jn8NYvzAwbt87S2WJleqgKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyscox4iha8LcWiiQ8q3ANOvuABjt0s%2Bq8RXq9FroYy7MsNVtjnjBC3IOvjnJNtqBlcQQQiZdYLfJqWrsxJZMZvvLzEZEfsCidQ5pw43z4ABn%2BaNdGL4WpHkJy8uGEcL7J83dgVlKXxuHz6sxMNLMcOmMGWgXWBIfANzkIeczyI%2FUIOIxHRwpEcy4JqjwiMXQZTbZOk%2F10WehKQzTJtwc0iSqoEqqPFQQ3ktQ%2FNkxGyuOyI2yfeT6YflLCMRagWLY0Hy2G8wVVtd9TiR64I6caWDXs6i%2BkHjSzwLWLrMbhAFUIuHQ3yzJiG5ROSzSnhqC3gxhDN4zflJ%2FaNXwwTXk3UI1w9H3RaPmqh1HmO4VnGYnw1cFrucxsWYnKqQdVuljn9i45osxHvtlAsjQ%2B0utcU3SN0jDQcUtk4%2FCjpvOsHMK%2FiELokn%2FOi6kdfd4dfnXI1wtcsJUqzAt0h1wqp3%2B%2FI9jDpkL%2BbvBl1n5SjYw8FkpTjd6ZGqKCYUAaKzKQzk9Xjwt5jNkdrp5TKNUPQ%2BAV0VN8VkQgGtqzGGlZmWzQX%2Bkm0bi%2FhCg88tHd4S0NaoRnY8oVMR6%2FZXgZ6U0WLMV2yUXJ%2Ba5bhEvBYTSWcE5Iw4hWiQddWWeJEPDF3Nz5gDaqSMvXTLQTh39E3BTCUhtW9BjqkAUo%2F7%2BEL%2BmJY25Ure2rp%2BomKswlX1T3%2Fo%2BMwQzU%2BX7IKbo3m5TlNgiT8MWTCRHg%2Fuxa2Tib4mlLakZtPFtbihp7TNdR2lOlNueXPYCXugxvKu1TOqAqsME9fkwJyiPfoAwVJa8EKPQ2x9BDNfFh3ce4wZRrokfmT15s0Jb%2B3UNf0qNBuoYlOVVW0Ck30zhUIRxDOTnPFmarzKvOmtGUFx%2FUW1AtC&X-Amz-Signature=5faf877545f2388c23fb7bb25a0e47c89f070ef55ede2b3e0a7d1040c330d623&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4LA4OK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDkkG8mnb56KbTl7SbLxyG8c0x5%2BzFQQcQgBdnJzeT9fQIhAIrYKP3fVZUGsSWPd999D29jn8NYvzAwbt87S2WJleqgKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyscox4iha8LcWiiQ8q3ANOvuABjt0s%2Bq8RXq9FroYy7MsNVtjnjBC3IOvjnJNtqBlcQQQiZdYLfJqWrsxJZMZvvLzEZEfsCidQ5pw43z4ABn%2BaNdGL4WpHkJy8uGEcL7J83dgVlKXxuHz6sxMNLMcOmMGWgXWBIfANzkIeczyI%2FUIOIxHRwpEcy4JqjwiMXQZTbZOk%2F10WehKQzTJtwc0iSqoEqqPFQQ3ktQ%2FNkxGyuOyI2yfeT6YflLCMRagWLY0Hy2G8wVVtd9TiR64I6caWDXs6i%2BkHjSzwLWLrMbhAFUIuHQ3yzJiG5ROSzSnhqC3gxhDN4zflJ%2FaNXwwTXk3UI1w9H3RaPmqh1HmO4VnGYnw1cFrucxsWYnKqQdVuljn9i45osxHvtlAsjQ%2B0utcU3SN0jDQcUtk4%2FCjpvOsHMK%2FiELokn%2FOi6kdfd4dfnXI1wtcsJUqzAt0h1wqp3%2B%2FI9jDpkL%2BbvBl1n5SjYw8FkpTjd6ZGqKCYUAaKzKQzk9Xjwt5jNkdrp5TKNUPQ%2BAV0VN8VkQgGtqzGGlZmWzQX%2Bkm0bi%2FhCg88tHd4S0NaoRnY8oVMR6%2FZXgZ6U0WLMV2yUXJ%2Ba5bhEvBYTSWcE5Iw4hWiQddWWeJEPDF3Nz5gDaqSMvXTLQTh39E3BTCUhtW9BjqkAUo%2F7%2BEL%2BmJY25Ure2rp%2BomKswlX1T3%2Fo%2BMwQzU%2BX7IKbo3m5TlNgiT8MWTCRHg%2Fuxa2Tib4mlLakZtPFtbihp7TNdR2lOlNueXPYCXugxvKu1TOqAqsME9fkwJyiPfoAwVJa8EKPQ2x9BDNfFh3ce4wZRrokfmT15s0Jb%2B3UNf0qNBuoYlOVVW0Ck30zhUIRxDOTnPFmarzKvOmtGUFx%2FUW1AtC&X-Amz-Signature=c007b3792a2a376a178ab37f57891ae9f456b98507ac05fa950746bf9a4e9842&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4LA4OK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDkkG8mnb56KbTl7SbLxyG8c0x5%2BzFQQcQgBdnJzeT9fQIhAIrYKP3fVZUGsSWPd999D29jn8NYvzAwbt87S2WJleqgKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyscox4iha8LcWiiQ8q3ANOvuABjt0s%2Bq8RXq9FroYy7MsNVtjnjBC3IOvjnJNtqBlcQQQiZdYLfJqWrsxJZMZvvLzEZEfsCidQ5pw43z4ABn%2BaNdGL4WpHkJy8uGEcL7J83dgVlKXxuHz6sxMNLMcOmMGWgXWBIfANzkIeczyI%2FUIOIxHRwpEcy4JqjwiMXQZTbZOk%2F10WehKQzTJtwc0iSqoEqqPFQQ3ktQ%2FNkxGyuOyI2yfeT6YflLCMRagWLY0Hy2G8wVVtd9TiR64I6caWDXs6i%2BkHjSzwLWLrMbhAFUIuHQ3yzJiG5ROSzSnhqC3gxhDN4zflJ%2FaNXwwTXk3UI1w9H3RaPmqh1HmO4VnGYnw1cFrucxsWYnKqQdVuljn9i45osxHvtlAsjQ%2B0utcU3SN0jDQcUtk4%2FCjpvOsHMK%2FiELokn%2FOi6kdfd4dfnXI1wtcsJUqzAt0h1wqp3%2B%2FI9jDpkL%2BbvBl1n5SjYw8FkpTjd6ZGqKCYUAaKzKQzk9Xjwt5jNkdrp5TKNUPQ%2BAV0VN8VkQgGtqzGGlZmWzQX%2Bkm0bi%2FhCg88tHd4S0NaoRnY8oVMR6%2FZXgZ6U0WLMV2yUXJ%2Ba5bhEvBYTSWcE5Iw4hWiQddWWeJEPDF3Nz5gDaqSMvXTLQTh39E3BTCUhtW9BjqkAUo%2F7%2BEL%2BmJY25Ure2rp%2BomKswlX1T3%2Fo%2BMwQzU%2BX7IKbo3m5TlNgiT8MWTCRHg%2Fuxa2Tib4mlLakZtPFtbihp7TNdR2lOlNueXPYCXugxvKu1TOqAqsME9fkwJyiPfoAwVJa8EKPQ2x9BDNfFh3ce4wZRrokfmT15s0Jb%2B3UNf0qNBuoYlOVVW0Ck30zhUIRxDOTnPFmarzKvOmtGUFx%2FUW1AtC&X-Amz-Signature=722f6bee6b8ab0d37e6af5d837f6b8bd2b6885ed3e7e4d4886c984f67c09ecd4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4LA4OK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDkkG8mnb56KbTl7SbLxyG8c0x5%2BzFQQcQgBdnJzeT9fQIhAIrYKP3fVZUGsSWPd999D29jn8NYvzAwbt87S2WJleqgKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyscox4iha8LcWiiQ8q3ANOvuABjt0s%2Bq8RXq9FroYy7MsNVtjnjBC3IOvjnJNtqBlcQQQiZdYLfJqWrsxJZMZvvLzEZEfsCidQ5pw43z4ABn%2BaNdGL4WpHkJy8uGEcL7J83dgVlKXxuHz6sxMNLMcOmMGWgXWBIfANzkIeczyI%2FUIOIxHRwpEcy4JqjwiMXQZTbZOk%2F10WehKQzTJtwc0iSqoEqqPFQQ3ktQ%2FNkxGyuOyI2yfeT6YflLCMRagWLY0Hy2G8wVVtd9TiR64I6caWDXs6i%2BkHjSzwLWLrMbhAFUIuHQ3yzJiG5ROSzSnhqC3gxhDN4zflJ%2FaNXwwTXk3UI1w9H3RaPmqh1HmO4VnGYnw1cFrucxsWYnKqQdVuljn9i45osxHvtlAsjQ%2B0utcU3SN0jDQcUtk4%2FCjpvOsHMK%2FiELokn%2FOi6kdfd4dfnXI1wtcsJUqzAt0h1wqp3%2B%2FI9jDpkL%2BbvBl1n5SjYw8FkpTjd6ZGqKCYUAaKzKQzk9Xjwt5jNkdrp5TKNUPQ%2BAV0VN8VkQgGtqzGGlZmWzQX%2Bkm0bi%2FhCg88tHd4S0NaoRnY8oVMR6%2FZXgZ6U0WLMV2yUXJ%2Ba5bhEvBYTSWcE5Iw4hWiQddWWeJEPDF3Nz5gDaqSMvXTLQTh39E3BTCUhtW9BjqkAUo%2F7%2BEL%2BmJY25Ure2rp%2BomKswlX1T3%2Fo%2BMwQzU%2BX7IKbo3m5TlNgiT8MWTCRHg%2Fuxa2Tib4mlLakZtPFtbihp7TNdR2lOlNueXPYCXugxvKu1TOqAqsME9fkwJyiPfoAwVJa8EKPQ2x9BDNfFh3ce4wZRrokfmT15s0Jb%2B3UNf0qNBuoYlOVVW0Ck30zhUIRxDOTnPFmarzKvOmtGUFx%2FUW1AtC&X-Amz-Signature=f06c8debf1c186a314008ab957b8e4a03784fbcbf3a91e8caa958cb9997e6dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
