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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKIPJKB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBoRa6LwvaQ5D9YqJIfdQj2Rw9%2FPS60nuywXAZUsfdk1AiBZm86XWimH8zHAJbhiue%2BaprIcdPjTz%2BJmpM0E%2F329uyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO7K7qcavJpPUmeoNKtwD7jqvp79cjACmZgOBQtgh6%2FAI9nNlP87EL8emjZy8BsZ4euIPk5aWDzOZ5ncohC%2FifTfVzwZFgcOOBtkmigDrxaMzwFnzEhh04zR8Pgf9wYGVwFUsNF0IUKkPHCEgDoO0iLn8YdS%2FkreplEbrFxk9lsqNMTpgVHxx7jSQNkxP1Y%2BO1pLl6m%2FXUSI%2BEx7A94XoiDN5PkyM27fY3ke9DAW4O68NVuuANUv5H1vkjMfN5tl4efQIzQmaTxoI2AAcrFyr1CJhgS%2BYUfJrvjct%2BHDP%2Bw0E6%2FrZmjnGFkxxNfzl8lg%2BTGXFiA2xiOr5Ll8djHCoCpcfcoqMWWwahc7rnruYPWTuzYAl7TMqn3L%2BbwvNek1UlrQrubt4Jjan1tOihuITGMcnaelHxaQriFxiy6IU%2FqLdQw%2BGBGz%2BZmX8zPIfkH3qWKLDufHKMkpXtcFxm0NKHnQm%2BtTUmxjDd%2Bs9j6tN4B1P6Uq7%2FVj5UHH0rsnYWQ%2BBj8LRGKxqn3PJ8gGgNjPv8pF9JYUyO3o%2B0BqWe2cHHzQaj1aWJgYqPubC2Q8dI4FMhN9YykRYjDWpQDEiErUlOvLbA19qaILW3ZLd8nxuUJ5VXTBPRKLLvR2jdhzY3pfoKf3ltnzzkG9JjLswpduVwAY6pgFbU9vhdwqsDLYJXX6TxU3z2H0ofuoOGLAlE9l6l%2FcsEaSwGaLE5dU0R2v1xowPFOs4P5jhxhkpKgq7%2FXBAzPplRk5p8DhyoeWB0EqVcAxUtOiVaMDpOaYvR9NKkDrnqfplyDWkZlApRhi3jpdf8OYeOVAuA9JieWIMFFZLv6%2BmpFdYEAQOoOnIUG5qwUZ8YS1HVGNvcEd6j9aBVV%2Fij5bdx4OgeXUv&X-Amz-Signature=ac5e1c50c1e1d9278b64dad021ae42c78b7e46e548c5aff95d44f2e83ef3316c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKIPJKB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBoRa6LwvaQ5D9YqJIfdQj2Rw9%2FPS60nuywXAZUsfdk1AiBZm86XWimH8zHAJbhiue%2BaprIcdPjTz%2BJmpM0E%2F329uyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO7K7qcavJpPUmeoNKtwD7jqvp79cjACmZgOBQtgh6%2FAI9nNlP87EL8emjZy8BsZ4euIPk5aWDzOZ5ncohC%2FifTfVzwZFgcOOBtkmigDrxaMzwFnzEhh04zR8Pgf9wYGVwFUsNF0IUKkPHCEgDoO0iLn8YdS%2FkreplEbrFxk9lsqNMTpgVHxx7jSQNkxP1Y%2BO1pLl6m%2FXUSI%2BEx7A94XoiDN5PkyM27fY3ke9DAW4O68NVuuANUv5H1vkjMfN5tl4efQIzQmaTxoI2AAcrFyr1CJhgS%2BYUfJrvjct%2BHDP%2Bw0E6%2FrZmjnGFkxxNfzl8lg%2BTGXFiA2xiOr5Ll8djHCoCpcfcoqMWWwahc7rnruYPWTuzYAl7TMqn3L%2BbwvNek1UlrQrubt4Jjan1tOihuITGMcnaelHxaQriFxiy6IU%2FqLdQw%2BGBGz%2BZmX8zPIfkH3qWKLDufHKMkpXtcFxm0NKHnQm%2BtTUmxjDd%2Bs9j6tN4B1P6Uq7%2FVj5UHH0rsnYWQ%2BBj8LRGKxqn3PJ8gGgNjPv8pF9JYUyO3o%2B0BqWe2cHHzQaj1aWJgYqPubC2Q8dI4FMhN9YykRYjDWpQDEiErUlOvLbA19qaILW3ZLd8nxuUJ5VXTBPRKLLvR2jdhzY3pfoKf3ltnzzkG9JjLswpduVwAY6pgFbU9vhdwqsDLYJXX6TxU3z2H0ofuoOGLAlE9l6l%2FcsEaSwGaLE5dU0R2v1xowPFOs4P5jhxhkpKgq7%2FXBAzPplRk5p8DhyoeWB0EqVcAxUtOiVaMDpOaYvR9NKkDrnqfplyDWkZlApRhi3jpdf8OYeOVAuA9JieWIMFFZLv6%2BmpFdYEAQOoOnIUG5qwUZ8YS1HVGNvcEd6j9aBVV%2Fij5bdx4OgeXUv&X-Amz-Signature=ecd0d77d2d26c080891680988969a228957a7db2aa8b81456b9bb796614e4eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKIPJKB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBoRa6LwvaQ5D9YqJIfdQj2Rw9%2FPS60nuywXAZUsfdk1AiBZm86XWimH8zHAJbhiue%2BaprIcdPjTz%2BJmpM0E%2F329uyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO7K7qcavJpPUmeoNKtwD7jqvp79cjACmZgOBQtgh6%2FAI9nNlP87EL8emjZy8BsZ4euIPk5aWDzOZ5ncohC%2FifTfVzwZFgcOOBtkmigDrxaMzwFnzEhh04zR8Pgf9wYGVwFUsNF0IUKkPHCEgDoO0iLn8YdS%2FkreplEbrFxk9lsqNMTpgVHxx7jSQNkxP1Y%2BO1pLl6m%2FXUSI%2BEx7A94XoiDN5PkyM27fY3ke9DAW4O68NVuuANUv5H1vkjMfN5tl4efQIzQmaTxoI2AAcrFyr1CJhgS%2BYUfJrvjct%2BHDP%2Bw0E6%2FrZmjnGFkxxNfzl8lg%2BTGXFiA2xiOr5Ll8djHCoCpcfcoqMWWwahc7rnruYPWTuzYAl7TMqn3L%2BbwvNek1UlrQrubt4Jjan1tOihuITGMcnaelHxaQriFxiy6IU%2FqLdQw%2BGBGz%2BZmX8zPIfkH3qWKLDufHKMkpXtcFxm0NKHnQm%2BtTUmxjDd%2Bs9j6tN4B1P6Uq7%2FVj5UHH0rsnYWQ%2BBj8LRGKxqn3PJ8gGgNjPv8pF9JYUyO3o%2B0BqWe2cHHzQaj1aWJgYqPubC2Q8dI4FMhN9YykRYjDWpQDEiErUlOvLbA19qaILW3ZLd8nxuUJ5VXTBPRKLLvR2jdhzY3pfoKf3ltnzzkG9JjLswpduVwAY6pgFbU9vhdwqsDLYJXX6TxU3z2H0ofuoOGLAlE9l6l%2FcsEaSwGaLE5dU0R2v1xowPFOs4P5jhxhkpKgq7%2FXBAzPplRk5p8DhyoeWB0EqVcAxUtOiVaMDpOaYvR9NKkDrnqfplyDWkZlApRhi3jpdf8OYeOVAuA9JieWIMFFZLv6%2BmpFdYEAQOoOnIUG5qwUZ8YS1HVGNvcEd6j9aBVV%2Fij5bdx4OgeXUv&X-Amz-Signature=05b4906c735eb9fba01bf38226b633ec02a86889b8a433952953afc90e45b840&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKIPJKB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBoRa6LwvaQ5D9YqJIfdQj2Rw9%2FPS60nuywXAZUsfdk1AiBZm86XWimH8zHAJbhiue%2BaprIcdPjTz%2BJmpM0E%2F329uyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO7K7qcavJpPUmeoNKtwD7jqvp79cjACmZgOBQtgh6%2FAI9nNlP87EL8emjZy8BsZ4euIPk5aWDzOZ5ncohC%2FifTfVzwZFgcOOBtkmigDrxaMzwFnzEhh04zR8Pgf9wYGVwFUsNF0IUKkPHCEgDoO0iLn8YdS%2FkreplEbrFxk9lsqNMTpgVHxx7jSQNkxP1Y%2BO1pLl6m%2FXUSI%2BEx7A94XoiDN5PkyM27fY3ke9DAW4O68NVuuANUv5H1vkjMfN5tl4efQIzQmaTxoI2AAcrFyr1CJhgS%2BYUfJrvjct%2BHDP%2Bw0E6%2FrZmjnGFkxxNfzl8lg%2BTGXFiA2xiOr5Ll8djHCoCpcfcoqMWWwahc7rnruYPWTuzYAl7TMqn3L%2BbwvNek1UlrQrubt4Jjan1tOihuITGMcnaelHxaQriFxiy6IU%2FqLdQw%2BGBGz%2BZmX8zPIfkH3qWKLDufHKMkpXtcFxm0NKHnQm%2BtTUmxjDd%2Bs9j6tN4B1P6Uq7%2FVj5UHH0rsnYWQ%2BBj8LRGKxqn3PJ8gGgNjPv8pF9JYUyO3o%2B0BqWe2cHHzQaj1aWJgYqPubC2Q8dI4FMhN9YykRYjDWpQDEiErUlOvLbA19qaILW3ZLd8nxuUJ5VXTBPRKLLvR2jdhzY3pfoKf3ltnzzkG9JjLswpduVwAY6pgFbU9vhdwqsDLYJXX6TxU3z2H0ofuoOGLAlE9l6l%2FcsEaSwGaLE5dU0R2v1xowPFOs4P5jhxhkpKgq7%2FXBAzPplRk5p8DhyoeWB0EqVcAxUtOiVaMDpOaYvR9NKkDrnqfplyDWkZlApRhi3jpdf8OYeOVAuA9JieWIMFFZLv6%2BmpFdYEAQOoOnIUG5qwUZ8YS1HVGNvcEd6j9aBVV%2Fij5bdx4OgeXUv&X-Amz-Signature=472ffd636ef87514aeec7d0d6276e2e73b3c05a0b5d85a2a3462a92e6c2da7d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKIPJKB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBoRa6LwvaQ5D9YqJIfdQj2Rw9%2FPS60nuywXAZUsfdk1AiBZm86XWimH8zHAJbhiue%2BaprIcdPjTz%2BJmpM0E%2F329uyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO7K7qcavJpPUmeoNKtwD7jqvp79cjACmZgOBQtgh6%2FAI9nNlP87EL8emjZy8BsZ4euIPk5aWDzOZ5ncohC%2FifTfVzwZFgcOOBtkmigDrxaMzwFnzEhh04zR8Pgf9wYGVwFUsNF0IUKkPHCEgDoO0iLn8YdS%2FkreplEbrFxk9lsqNMTpgVHxx7jSQNkxP1Y%2BO1pLl6m%2FXUSI%2BEx7A94XoiDN5PkyM27fY3ke9DAW4O68NVuuANUv5H1vkjMfN5tl4efQIzQmaTxoI2AAcrFyr1CJhgS%2BYUfJrvjct%2BHDP%2Bw0E6%2FrZmjnGFkxxNfzl8lg%2BTGXFiA2xiOr5Ll8djHCoCpcfcoqMWWwahc7rnruYPWTuzYAl7TMqn3L%2BbwvNek1UlrQrubt4Jjan1tOihuITGMcnaelHxaQriFxiy6IU%2FqLdQw%2BGBGz%2BZmX8zPIfkH3qWKLDufHKMkpXtcFxm0NKHnQm%2BtTUmxjDd%2Bs9j6tN4B1P6Uq7%2FVj5UHH0rsnYWQ%2BBj8LRGKxqn3PJ8gGgNjPv8pF9JYUyO3o%2B0BqWe2cHHzQaj1aWJgYqPubC2Q8dI4FMhN9YykRYjDWpQDEiErUlOvLbA19qaILW3ZLd8nxuUJ5VXTBPRKLLvR2jdhzY3pfoKf3ltnzzkG9JjLswpduVwAY6pgFbU9vhdwqsDLYJXX6TxU3z2H0ofuoOGLAlE9l6l%2FcsEaSwGaLE5dU0R2v1xowPFOs4P5jhxhkpKgq7%2FXBAzPplRk5p8DhyoeWB0EqVcAxUtOiVaMDpOaYvR9NKkDrnqfplyDWkZlApRhi3jpdf8OYeOVAuA9JieWIMFFZLv6%2BmpFdYEAQOoOnIUG5qwUZ8YS1HVGNvcEd6j9aBVV%2Fij5bdx4OgeXUv&X-Amz-Signature=39f37411693a21b2e12a49008d22d3b51176e05b96212be73c98cb3a448afa5c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKIPJKB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBoRa6LwvaQ5D9YqJIfdQj2Rw9%2FPS60nuywXAZUsfdk1AiBZm86XWimH8zHAJbhiue%2BaprIcdPjTz%2BJmpM0E%2F329uyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO7K7qcavJpPUmeoNKtwD7jqvp79cjACmZgOBQtgh6%2FAI9nNlP87EL8emjZy8BsZ4euIPk5aWDzOZ5ncohC%2FifTfVzwZFgcOOBtkmigDrxaMzwFnzEhh04zR8Pgf9wYGVwFUsNF0IUKkPHCEgDoO0iLn8YdS%2FkreplEbrFxk9lsqNMTpgVHxx7jSQNkxP1Y%2BO1pLl6m%2FXUSI%2BEx7A94XoiDN5PkyM27fY3ke9DAW4O68NVuuANUv5H1vkjMfN5tl4efQIzQmaTxoI2AAcrFyr1CJhgS%2BYUfJrvjct%2BHDP%2Bw0E6%2FrZmjnGFkxxNfzl8lg%2BTGXFiA2xiOr5Ll8djHCoCpcfcoqMWWwahc7rnruYPWTuzYAl7TMqn3L%2BbwvNek1UlrQrubt4Jjan1tOihuITGMcnaelHxaQriFxiy6IU%2FqLdQw%2BGBGz%2BZmX8zPIfkH3qWKLDufHKMkpXtcFxm0NKHnQm%2BtTUmxjDd%2Bs9j6tN4B1P6Uq7%2FVj5UHH0rsnYWQ%2BBj8LRGKxqn3PJ8gGgNjPv8pF9JYUyO3o%2B0BqWe2cHHzQaj1aWJgYqPubC2Q8dI4FMhN9YykRYjDWpQDEiErUlOvLbA19qaILW3ZLd8nxuUJ5VXTBPRKLLvR2jdhzY3pfoKf3ltnzzkG9JjLswpduVwAY6pgFbU9vhdwqsDLYJXX6TxU3z2H0ofuoOGLAlE9l6l%2FcsEaSwGaLE5dU0R2v1xowPFOs4P5jhxhkpKgq7%2FXBAzPplRk5p8DhyoeWB0EqVcAxUtOiVaMDpOaYvR9NKkDrnqfplyDWkZlApRhi3jpdf8OYeOVAuA9JieWIMFFZLv6%2BmpFdYEAQOoOnIUG5qwUZ8YS1HVGNvcEd6j9aBVV%2Fij5bdx4OgeXUv&X-Amz-Signature=60eb274812d7da6ccf8ab16ff006f9adb53fcd6061f28ba38f8e7625b8f21b11&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKIPJKB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBoRa6LwvaQ5D9YqJIfdQj2Rw9%2FPS60nuywXAZUsfdk1AiBZm86XWimH8zHAJbhiue%2BaprIcdPjTz%2BJmpM0E%2F329uyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO7K7qcavJpPUmeoNKtwD7jqvp79cjACmZgOBQtgh6%2FAI9nNlP87EL8emjZy8BsZ4euIPk5aWDzOZ5ncohC%2FifTfVzwZFgcOOBtkmigDrxaMzwFnzEhh04zR8Pgf9wYGVwFUsNF0IUKkPHCEgDoO0iLn8YdS%2FkreplEbrFxk9lsqNMTpgVHxx7jSQNkxP1Y%2BO1pLl6m%2FXUSI%2BEx7A94XoiDN5PkyM27fY3ke9DAW4O68NVuuANUv5H1vkjMfN5tl4efQIzQmaTxoI2AAcrFyr1CJhgS%2BYUfJrvjct%2BHDP%2Bw0E6%2FrZmjnGFkxxNfzl8lg%2BTGXFiA2xiOr5Ll8djHCoCpcfcoqMWWwahc7rnruYPWTuzYAl7TMqn3L%2BbwvNek1UlrQrubt4Jjan1tOihuITGMcnaelHxaQriFxiy6IU%2FqLdQw%2BGBGz%2BZmX8zPIfkH3qWKLDufHKMkpXtcFxm0NKHnQm%2BtTUmxjDd%2Bs9j6tN4B1P6Uq7%2FVj5UHH0rsnYWQ%2BBj8LRGKxqn3PJ8gGgNjPv8pF9JYUyO3o%2B0BqWe2cHHzQaj1aWJgYqPubC2Q8dI4FMhN9YykRYjDWpQDEiErUlOvLbA19qaILW3ZLd8nxuUJ5VXTBPRKLLvR2jdhzY3pfoKf3ltnzzkG9JjLswpduVwAY6pgFbU9vhdwqsDLYJXX6TxU3z2H0ofuoOGLAlE9l6l%2FcsEaSwGaLE5dU0R2v1xowPFOs4P5jhxhkpKgq7%2FXBAzPplRk5p8DhyoeWB0EqVcAxUtOiVaMDpOaYvR9NKkDrnqfplyDWkZlApRhi3jpdf8OYeOVAuA9JieWIMFFZLv6%2BmpFdYEAQOoOnIUG5qwUZ8YS1HVGNvcEd6j9aBVV%2Fij5bdx4OgeXUv&X-Amz-Signature=f74e241ee5c2fca608e4a7dbe987d56eb639370534af49d43289c53c6976529f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
