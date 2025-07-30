---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKE4EDPY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVPxMFfQ4MxAHa5l8g1a1TRXTjsRsGZL9apAqMELnnwIgeicpSkXCOYe3chPT5J%2BJjJ7F0ZoWxwgllSE1xTxMmw4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcQJX7GVDjwvd4NkircA0ldgZT4jSAycJu9F3I%2FDo0kNzbibiLmmk%2F%2Fr4OOINm8enrWK0k3aGh4u5S%2F6T2buN4qLiTJpTihDYagfO6ceDHLqOYtAZRs84EdhRgrosxuBig9vcy9Dp%2BiUN2qVg%2FrG0zhULmGAA39YJlVGPE382icbwFuAg4FNAqbTkF8uL343956dNUO8J5AzWKbTMz1HWDnLeTOYhuJLySekNk09m3WVsfyUXMLx78ecdBhPp0ewnX%2BhXQtAPPSrjrvarMrppsRKveEHtnb2JAmca9Zrtv8bbFS9xUJZoYfS%2FxCAmC6EeWpTZ%2FXARqcRH6xzcq3hv8a6ySyWzIM2Lb5tafQHXneOatoJzHGDnu2WNB32N7OWmhOcEhe2zTmLkfZYoe7hlCn5rfpGfWi1D2bczBytToI58X7a9%2FJameX%2FImtuSzsU%2BzT0aYy1eaeWKKB0RHhY00afGQHGPgqvGpoHeJWwd4vn9CI6f8%2FufyZH0sNd9lqmF0z6lFm5EtCsiZfKqmlzBVGHsini7InleAJE46gXvy1eXPlyVPpV5jGbg0qyeKnwtrY%2FfXTrr4OLQZRniyVjqx52P5wjiG9niPYqx%2Bb1tnNixclCVR7eX6iml1SCMp9kGQAl7NApLBhEJQ0MJvypcQGOqUBlgLQ8QeHhVdZ1qwHNfbEDwr9KVsPTfVqL%2FKgH3%2Fa8hLd2eISxbKLDgJGYbwRISRt8FJWRSZ1OnVciQADONERHvJCO4ToBQu6h2CJ4TXVLHBO6yNMNDK3ZK5fFLoLl%2BUMhpQkkAfxYVEkkYYUtPpNeTQLGUVLE6DXvFjDZgabbzrPQ4uqpxid%2BX1MMggSd%2BJiGZpGaKXL3XCnhYuhmWkt3lIpKwF5&X-Amz-Signature=eaba83e485484406b87229ee4d46bf702fa8cc33b5e44d0e236e5b1f45bbc6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKE4EDPY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVPxMFfQ4MxAHa5l8g1a1TRXTjsRsGZL9apAqMELnnwIgeicpSkXCOYe3chPT5J%2BJjJ7F0ZoWxwgllSE1xTxMmw4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcQJX7GVDjwvd4NkircA0ldgZT4jSAycJu9F3I%2FDo0kNzbibiLmmk%2F%2Fr4OOINm8enrWK0k3aGh4u5S%2F6T2buN4qLiTJpTihDYagfO6ceDHLqOYtAZRs84EdhRgrosxuBig9vcy9Dp%2BiUN2qVg%2FrG0zhULmGAA39YJlVGPE382icbwFuAg4FNAqbTkF8uL343956dNUO8J5AzWKbTMz1HWDnLeTOYhuJLySekNk09m3WVsfyUXMLx78ecdBhPp0ewnX%2BhXQtAPPSrjrvarMrppsRKveEHtnb2JAmca9Zrtv8bbFS9xUJZoYfS%2FxCAmC6EeWpTZ%2FXARqcRH6xzcq3hv8a6ySyWzIM2Lb5tafQHXneOatoJzHGDnu2WNB32N7OWmhOcEhe2zTmLkfZYoe7hlCn5rfpGfWi1D2bczBytToI58X7a9%2FJameX%2FImtuSzsU%2BzT0aYy1eaeWKKB0RHhY00afGQHGPgqvGpoHeJWwd4vn9CI6f8%2FufyZH0sNd9lqmF0z6lFm5EtCsiZfKqmlzBVGHsini7InleAJE46gXvy1eXPlyVPpV5jGbg0qyeKnwtrY%2FfXTrr4OLQZRniyVjqx52P5wjiG9niPYqx%2Bb1tnNixclCVR7eX6iml1SCMp9kGQAl7NApLBhEJQ0MJvypcQGOqUBlgLQ8QeHhVdZ1qwHNfbEDwr9KVsPTfVqL%2FKgH3%2Fa8hLd2eISxbKLDgJGYbwRISRt8FJWRSZ1OnVciQADONERHvJCO4ToBQu6h2CJ4TXVLHBO6yNMNDK3ZK5fFLoLl%2BUMhpQkkAfxYVEkkYYUtPpNeTQLGUVLE6DXvFjDZgabbzrPQ4uqpxid%2BX1MMggSd%2BJiGZpGaKXL3XCnhYuhmWkt3lIpKwF5&X-Amz-Signature=9f0f3f79820e743a800da7c8d6497848587c781cffb30ee26b80e028e9bfdd5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKE4EDPY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVPxMFfQ4MxAHa5l8g1a1TRXTjsRsGZL9apAqMELnnwIgeicpSkXCOYe3chPT5J%2BJjJ7F0ZoWxwgllSE1xTxMmw4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcQJX7GVDjwvd4NkircA0ldgZT4jSAycJu9F3I%2FDo0kNzbibiLmmk%2F%2Fr4OOINm8enrWK0k3aGh4u5S%2F6T2buN4qLiTJpTihDYagfO6ceDHLqOYtAZRs84EdhRgrosxuBig9vcy9Dp%2BiUN2qVg%2FrG0zhULmGAA39YJlVGPE382icbwFuAg4FNAqbTkF8uL343956dNUO8J5AzWKbTMz1HWDnLeTOYhuJLySekNk09m3WVsfyUXMLx78ecdBhPp0ewnX%2BhXQtAPPSrjrvarMrppsRKveEHtnb2JAmca9Zrtv8bbFS9xUJZoYfS%2FxCAmC6EeWpTZ%2FXARqcRH6xzcq3hv8a6ySyWzIM2Lb5tafQHXneOatoJzHGDnu2WNB32N7OWmhOcEhe2zTmLkfZYoe7hlCn5rfpGfWi1D2bczBytToI58X7a9%2FJameX%2FImtuSzsU%2BzT0aYy1eaeWKKB0RHhY00afGQHGPgqvGpoHeJWwd4vn9CI6f8%2FufyZH0sNd9lqmF0z6lFm5EtCsiZfKqmlzBVGHsini7InleAJE46gXvy1eXPlyVPpV5jGbg0qyeKnwtrY%2FfXTrr4OLQZRniyVjqx52P5wjiG9niPYqx%2Bb1tnNixclCVR7eX6iml1SCMp9kGQAl7NApLBhEJQ0MJvypcQGOqUBlgLQ8QeHhVdZ1qwHNfbEDwr9KVsPTfVqL%2FKgH3%2Fa8hLd2eISxbKLDgJGYbwRISRt8FJWRSZ1OnVciQADONERHvJCO4ToBQu6h2CJ4TXVLHBO6yNMNDK3ZK5fFLoLl%2BUMhpQkkAfxYVEkkYYUtPpNeTQLGUVLE6DXvFjDZgabbzrPQ4uqpxid%2BX1MMggSd%2BJiGZpGaKXL3XCnhYuhmWkt3lIpKwF5&X-Amz-Signature=4cdfd0748beb354fbebdde8e878fbfa010056f1562659884f3337a626b25aa2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKE4EDPY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVPxMFfQ4MxAHa5l8g1a1TRXTjsRsGZL9apAqMELnnwIgeicpSkXCOYe3chPT5J%2BJjJ7F0ZoWxwgllSE1xTxMmw4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcQJX7GVDjwvd4NkircA0ldgZT4jSAycJu9F3I%2FDo0kNzbibiLmmk%2F%2Fr4OOINm8enrWK0k3aGh4u5S%2F6T2buN4qLiTJpTihDYagfO6ceDHLqOYtAZRs84EdhRgrosxuBig9vcy9Dp%2BiUN2qVg%2FrG0zhULmGAA39YJlVGPE382icbwFuAg4FNAqbTkF8uL343956dNUO8J5AzWKbTMz1HWDnLeTOYhuJLySekNk09m3WVsfyUXMLx78ecdBhPp0ewnX%2BhXQtAPPSrjrvarMrppsRKveEHtnb2JAmca9Zrtv8bbFS9xUJZoYfS%2FxCAmC6EeWpTZ%2FXARqcRH6xzcq3hv8a6ySyWzIM2Lb5tafQHXneOatoJzHGDnu2WNB32N7OWmhOcEhe2zTmLkfZYoe7hlCn5rfpGfWi1D2bczBytToI58X7a9%2FJameX%2FImtuSzsU%2BzT0aYy1eaeWKKB0RHhY00afGQHGPgqvGpoHeJWwd4vn9CI6f8%2FufyZH0sNd9lqmF0z6lFm5EtCsiZfKqmlzBVGHsini7InleAJE46gXvy1eXPlyVPpV5jGbg0qyeKnwtrY%2FfXTrr4OLQZRniyVjqx52P5wjiG9niPYqx%2Bb1tnNixclCVR7eX6iml1SCMp9kGQAl7NApLBhEJQ0MJvypcQGOqUBlgLQ8QeHhVdZ1qwHNfbEDwr9KVsPTfVqL%2FKgH3%2Fa8hLd2eISxbKLDgJGYbwRISRt8FJWRSZ1OnVciQADONERHvJCO4ToBQu6h2CJ4TXVLHBO6yNMNDK3ZK5fFLoLl%2BUMhpQkkAfxYVEkkYYUtPpNeTQLGUVLE6DXvFjDZgabbzrPQ4uqpxid%2BX1MMggSd%2BJiGZpGaKXL3XCnhYuhmWkt3lIpKwF5&X-Amz-Signature=8b7342951a9f21d28b0ed158f1378e47e12b0894eba0bec41c2fd1063398dac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKE4EDPY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVPxMFfQ4MxAHa5l8g1a1TRXTjsRsGZL9apAqMELnnwIgeicpSkXCOYe3chPT5J%2BJjJ7F0ZoWxwgllSE1xTxMmw4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcQJX7GVDjwvd4NkircA0ldgZT4jSAycJu9F3I%2FDo0kNzbibiLmmk%2F%2Fr4OOINm8enrWK0k3aGh4u5S%2F6T2buN4qLiTJpTihDYagfO6ceDHLqOYtAZRs84EdhRgrosxuBig9vcy9Dp%2BiUN2qVg%2FrG0zhULmGAA39YJlVGPE382icbwFuAg4FNAqbTkF8uL343956dNUO8J5AzWKbTMz1HWDnLeTOYhuJLySekNk09m3WVsfyUXMLx78ecdBhPp0ewnX%2BhXQtAPPSrjrvarMrppsRKveEHtnb2JAmca9Zrtv8bbFS9xUJZoYfS%2FxCAmC6EeWpTZ%2FXARqcRH6xzcq3hv8a6ySyWzIM2Lb5tafQHXneOatoJzHGDnu2WNB32N7OWmhOcEhe2zTmLkfZYoe7hlCn5rfpGfWi1D2bczBytToI58X7a9%2FJameX%2FImtuSzsU%2BzT0aYy1eaeWKKB0RHhY00afGQHGPgqvGpoHeJWwd4vn9CI6f8%2FufyZH0sNd9lqmF0z6lFm5EtCsiZfKqmlzBVGHsini7InleAJE46gXvy1eXPlyVPpV5jGbg0qyeKnwtrY%2FfXTrr4OLQZRniyVjqx52P5wjiG9niPYqx%2Bb1tnNixclCVR7eX6iml1SCMp9kGQAl7NApLBhEJQ0MJvypcQGOqUBlgLQ8QeHhVdZ1qwHNfbEDwr9KVsPTfVqL%2FKgH3%2Fa8hLd2eISxbKLDgJGYbwRISRt8FJWRSZ1OnVciQADONERHvJCO4ToBQu6h2CJ4TXVLHBO6yNMNDK3ZK5fFLoLl%2BUMhpQkkAfxYVEkkYYUtPpNeTQLGUVLE6DXvFjDZgabbzrPQ4uqpxid%2BX1MMggSd%2BJiGZpGaKXL3XCnhYuhmWkt3lIpKwF5&X-Amz-Signature=90eaee17938d6e6cc009cdae5cf4391c6cc2d912259183b62a828124d724b0d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKE4EDPY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVPxMFfQ4MxAHa5l8g1a1TRXTjsRsGZL9apAqMELnnwIgeicpSkXCOYe3chPT5J%2BJjJ7F0ZoWxwgllSE1xTxMmw4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcQJX7GVDjwvd4NkircA0ldgZT4jSAycJu9F3I%2FDo0kNzbibiLmmk%2F%2Fr4OOINm8enrWK0k3aGh4u5S%2F6T2buN4qLiTJpTihDYagfO6ceDHLqOYtAZRs84EdhRgrosxuBig9vcy9Dp%2BiUN2qVg%2FrG0zhULmGAA39YJlVGPE382icbwFuAg4FNAqbTkF8uL343956dNUO8J5AzWKbTMz1HWDnLeTOYhuJLySekNk09m3WVsfyUXMLx78ecdBhPp0ewnX%2BhXQtAPPSrjrvarMrppsRKveEHtnb2JAmca9Zrtv8bbFS9xUJZoYfS%2FxCAmC6EeWpTZ%2FXARqcRH6xzcq3hv8a6ySyWzIM2Lb5tafQHXneOatoJzHGDnu2WNB32N7OWmhOcEhe2zTmLkfZYoe7hlCn5rfpGfWi1D2bczBytToI58X7a9%2FJameX%2FImtuSzsU%2BzT0aYy1eaeWKKB0RHhY00afGQHGPgqvGpoHeJWwd4vn9CI6f8%2FufyZH0sNd9lqmF0z6lFm5EtCsiZfKqmlzBVGHsini7InleAJE46gXvy1eXPlyVPpV5jGbg0qyeKnwtrY%2FfXTrr4OLQZRniyVjqx52P5wjiG9niPYqx%2Bb1tnNixclCVR7eX6iml1SCMp9kGQAl7NApLBhEJQ0MJvypcQGOqUBlgLQ8QeHhVdZ1qwHNfbEDwr9KVsPTfVqL%2FKgH3%2Fa8hLd2eISxbKLDgJGYbwRISRt8FJWRSZ1OnVciQADONERHvJCO4ToBQu6h2CJ4TXVLHBO6yNMNDK3ZK5fFLoLl%2BUMhpQkkAfxYVEkkYYUtPpNeTQLGUVLE6DXvFjDZgabbzrPQ4uqpxid%2BX1MMggSd%2BJiGZpGaKXL3XCnhYuhmWkt3lIpKwF5&X-Amz-Signature=703c8bc09ecd68b12bb57f5669b503ab371155aa1fb7135848e0eddc610cd0d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKE4EDPY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVPxMFfQ4MxAHa5l8g1a1TRXTjsRsGZL9apAqMELnnwIgeicpSkXCOYe3chPT5J%2BJjJ7F0ZoWxwgllSE1xTxMmw4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcQJX7GVDjwvd4NkircA0ldgZT4jSAycJu9F3I%2FDo0kNzbibiLmmk%2F%2Fr4OOINm8enrWK0k3aGh4u5S%2F6T2buN4qLiTJpTihDYagfO6ceDHLqOYtAZRs84EdhRgrosxuBig9vcy9Dp%2BiUN2qVg%2FrG0zhULmGAA39YJlVGPE382icbwFuAg4FNAqbTkF8uL343956dNUO8J5AzWKbTMz1HWDnLeTOYhuJLySekNk09m3WVsfyUXMLx78ecdBhPp0ewnX%2BhXQtAPPSrjrvarMrppsRKveEHtnb2JAmca9Zrtv8bbFS9xUJZoYfS%2FxCAmC6EeWpTZ%2FXARqcRH6xzcq3hv8a6ySyWzIM2Lb5tafQHXneOatoJzHGDnu2WNB32N7OWmhOcEhe2zTmLkfZYoe7hlCn5rfpGfWi1D2bczBytToI58X7a9%2FJameX%2FImtuSzsU%2BzT0aYy1eaeWKKB0RHhY00afGQHGPgqvGpoHeJWwd4vn9CI6f8%2FufyZH0sNd9lqmF0z6lFm5EtCsiZfKqmlzBVGHsini7InleAJE46gXvy1eXPlyVPpV5jGbg0qyeKnwtrY%2FfXTrr4OLQZRniyVjqx52P5wjiG9niPYqx%2Bb1tnNixclCVR7eX6iml1SCMp9kGQAl7NApLBhEJQ0MJvypcQGOqUBlgLQ8QeHhVdZ1qwHNfbEDwr9KVsPTfVqL%2FKgH3%2Fa8hLd2eISxbKLDgJGYbwRISRt8FJWRSZ1OnVciQADONERHvJCO4ToBQu6h2CJ4TXVLHBO6yNMNDK3ZK5fFLoLl%2BUMhpQkkAfxYVEkkYYUtPpNeTQLGUVLE6DXvFjDZgabbzrPQ4uqpxid%2BX1MMggSd%2BJiGZpGaKXL3XCnhYuhmWkt3lIpKwF5&X-Amz-Signature=8b08b4777469042a63922fa10a7a4c767d5f7efa33955eee629c9731ca9b8e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
