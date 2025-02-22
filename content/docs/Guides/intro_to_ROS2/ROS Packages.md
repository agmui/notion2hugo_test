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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN22J42C%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxwDQnEXF1e2Hlmm7tyS4mTVdq9SdKD6Ed4yzTtLYhjAiEArYL%2BUsFTs8N7zKajYhDT8bYyIu12hS8vbC1YM%2BEHsd8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGALJeEUHEcP12C6USrcAyRXSGlbSUo2U8bzdX3ERnezS9K6v80f0R2R81FThpRlnNr%2BwcNkxjlrEVH44nSe3DuSLSfM9ppX2ZWvHZYtAtOk6bSYsGNXsgEoaYQcN58mF%2FEHOsOoYBVhduEKj6ruqxewZkqWPzCXzXii74TJmxBM3vDG8lC1%2FHy6HeHgbb2YZ4D8ikrLMmXD3oUfKZG8GlI2%2FTh5jFvx0E5vIsjxV0SvPSKp%2FWQ%2BvKIzgFG7QUN8fez8WO0CJqKJRC5U5Fu9zvPJaVy0NBAEqF%2BJZ3tCUzHpgNa2sq%2F%2FcwwQgqdv0%2FMmHvK%2BCnn%2F%2BC5te9V9NKFnfsQFH0ZkJZX%2BY43zINQ6EuJnHq7FtPKvzStBXF2GpxIBsod5heyL%2BbRPWPhMY4YPmCMswgc8KxE%2F7sAbXmfdqC1MgeXLMLumw3FiZpsVGXgmmRVxAlnarff0GAxnp9m25IfMInhDUnskKSYvKbsUvJwg%2BTA1jPcErgFXUOorZrOXaFnR67RphZMiPj8GntvUvWozvXKp1tGwDtjk2cwHsXpbfwlu9A3gkQAStxK0PS2PMjCEI1YmCCH144j4htpV84xP%2FhL7bH8%2BNW1ixqZn6W1V6QOo3SMMxoOrk7doTRpNcIhk1kp4O7NUHGq8MNzO5L0GOqUB%2BGRxMLuIJOY80tWjUroweQAVtfwjLZ3i2FopsgbiW4Pxt3pvCsajQ8%2FJqjCryE7GIxF%2FkGAud3JAWtmSSiZOahlfVenLiWYa%2BI9qFSD%2FizwTCD%2BNfBx3rIzCoLO99V3BwKhMT8u7B6u2zwkvsfCd2DlGHD8%2FYtgxyPSUtVtlhlXpl1Nr9o5rsVq7e1zvF9Ot0pasgOmxRJix1bBlIXeQh4xU0WPW&X-Amz-Signature=891648086d088158c74b3789a2b09d92af92985b56401980e51ef5f92be1ea49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN22J42C%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxwDQnEXF1e2Hlmm7tyS4mTVdq9SdKD6Ed4yzTtLYhjAiEArYL%2BUsFTs8N7zKajYhDT8bYyIu12hS8vbC1YM%2BEHsd8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGALJeEUHEcP12C6USrcAyRXSGlbSUo2U8bzdX3ERnezS9K6v80f0R2R81FThpRlnNr%2BwcNkxjlrEVH44nSe3DuSLSfM9ppX2ZWvHZYtAtOk6bSYsGNXsgEoaYQcN58mF%2FEHOsOoYBVhduEKj6ruqxewZkqWPzCXzXii74TJmxBM3vDG8lC1%2FHy6HeHgbb2YZ4D8ikrLMmXD3oUfKZG8GlI2%2FTh5jFvx0E5vIsjxV0SvPSKp%2FWQ%2BvKIzgFG7QUN8fez8WO0CJqKJRC5U5Fu9zvPJaVy0NBAEqF%2BJZ3tCUzHpgNa2sq%2F%2FcwwQgqdv0%2FMmHvK%2BCnn%2F%2BC5te9V9NKFnfsQFH0ZkJZX%2BY43zINQ6EuJnHq7FtPKvzStBXF2GpxIBsod5heyL%2BbRPWPhMY4YPmCMswgc8KxE%2F7sAbXmfdqC1MgeXLMLumw3FiZpsVGXgmmRVxAlnarff0GAxnp9m25IfMInhDUnskKSYvKbsUvJwg%2BTA1jPcErgFXUOorZrOXaFnR67RphZMiPj8GntvUvWozvXKp1tGwDtjk2cwHsXpbfwlu9A3gkQAStxK0PS2PMjCEI1YmCCH144j4htpV84xP%2FhL7bH8%2BNW1ixqZn6W1V6QOo3SMMxoOrk7doTRpNcIhk1kp4O7NUHGq8MNzO5L0GOqUB%2BGRxMLuIJOY80tWjUroweQAVtfwjLZ3i2FopsgbiW4Pxt3pvCsajQ8%2FJqjCryE7GIxF%2FkGAud3JAWtmSSiZOahlfVenLiWYa%2BI9qFSD%2FizwTCD%2BNfBx3rIzCoLO99V3BwKhMT8u7B6u2zwkvsfCd2DlGHD8%2FYtgxyPSUtVtlhlXpl1Nr9o5rsVq7e1zvF9Ot0pasgOmxRJix1bBlIXeQh4xU0WPW&X-Amz-Signature=9036fe4abe0dcf59f3f73a4be24fcd92e184b1bfd5d11de9db08539a95404e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN22J42C%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxwDQnEXF1e2Hlmm7tyS4mTVdq9SdKD6Ed4yzTtLYhjAiEArYL%2BUsFTs8N7zKajYhDT8bYyIu12hS8vbC1YM%2BEHsd8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGALJeEUHEcP12C6USrcAyRXSGlbSUo2U8bzdX3ERnezS9K6v80f0R2R81FThpRlnNr%2BwcNkxjlrEVH44nSe3DuSLSfM9ppX2ZWvHZYtAtOk6bSYsGNXsgEoaYQcN58mF%2FEHOsOoYBVhduEKj6ruqxewZkqWPzCXzXii74TJmxBM3vDG8lC1%2FHy6HeHgbb2YZ4D8ikrLMmXD3oUfKZG8GlI2%2FTh5jFvx0E5vIsjxV0SvPSKp%2FWQ%2BvKIzgFG7QUN8fez8WO0CJqKJRC5U5Fu9zvPJaVy0NBAEqF%2BJZ3tCUzHpgNa2sq%2F%2FcwwQgqdv0%2FMmHvK%2BCnn%2F%2BC5te9V9NKFnfsQFH0ZkJZX%2BY43zINQ6EuJnHq7FtPKvzStBXF2GpxIBsod5heyL%2BbRPWPhMY4YPmCMswgc8KxE%2F7sAbXmfdqC1MgeXLMLumw3FiZpsVGXgmmRVxAlnarff0GAxnp9m25IfMInhDUnskKSYvKbsUvJwg%2BTA1jPcErgFXUOorZrOXaFnR67RphZMiPj8GntvUvWozvXKp1tGwDtjk2cwHsXpbfwlu9A3gkQAStxK0PS2PMjCEI1YmCCH144j4htpV84xP%2FhL7bH8%2BNW1ixqZn6W1V6QOo3SMMxoOrk7doTRpNcIhk1kp4O7NUHGq8MNzO5L0GOqUB%2BGRxMLuIJOY80tWjUroweQAVtfwjLZ3i2FopsgbiW4Pxt3pvCsajQ8%2FJqjCryE7GIxF%2FkGAud3JAWtmSSiZOahlfVenLiWYa%2BI9qFSD%2FizwTCD%2BNfBx3rIzCoLO99V3BwKhMT8u7B6u2zwkvsfCd2DlGHD8%2FYtgxyPSUtVtlhlXpl1Nr9o5rsVq7e1zvF9Ot0pasgOmxRJix1bBlIXeQh4xU0WPW&X-Amz-Signature=a527cc98aa573104b0740ba67ecd660e28aefa57574bf85e3f6346b9966cd5cc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN22J42C%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxwDQnEXF1e2Hlmm7tyS4mTVdq9SdKD6Ed4yzTtLYhjAiEArYL%2BUsFTs8N7zKajYhDT8bYyIu12hS8vbC1YM%2BEHsd8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGALJeEUHEcP12C6USrcAyRXSGlbSUo2U8bzdX3ERnezS9K6v80f0R2R81FThpRlnNr%2BwcNkxjlrEVH44nSe3DuSLSfM9ppX2ZWvHZYtAtOk6bSYsGNXsgEoaYQcN58mF%2FEHOsOoYBVhduEKj6ruqxewZkqWPzCXzXii74TJmxBM3vDG8lC1%2FHy6HeHgbb2YZ4D8ikrLMmXD3oUfKZG8GlI2%2FTh5jFvx0E5vIsjxV0SvPSKp%2FWQ%2BvKIzgFG7QUN8fez8WO0CJqKJRC5U5Fu9zvPJaVy0NBAEqF%2BJZ3tCUzHpgNa2sq%2F%2FcwwQgqdv0%2FMmHvK%2BCnn%2F%2BC5te9V9NKFnfsQFH0ZkJZX%2BY43zINQ6EuJnHq7FtPKvzStBXF2GpxIBsod5heyL%2BbRPWPhMY4YPmCMswgc8KxE%2F7sAbXmfdqC1MgeXLMLumw3FiZpsVGXgmmRVxAlnarff0GAxnp9m25IfMInhDUnskKSYvKbsUvJwg%2BTA1jPcErgFXUOorZrOXaFnR67RphZMiPj8GntvUvWozvXKp1tGwDtjk2cwHsXpbfwlu9A3gkQAStxK0PS2PMjCEI1YmCCH144j4htpV84xP%2FhL7bH8%2BNW1ixqZn6W1V6QOo3SMMxoOrk7doTRpNcIhk1kp4O7NUHGq8MNzO5L0GOqUB%2BGRxMLuIJOY80tWjUroweQAVtfwjLZ3i2FopsgbiW4Pxt3pvCsajQ8%2FJqjCryE7GIxF%2FkGAud3JAWtmSSiZOahlfVenLiWYa%2BI9qFSD%2FizwTCD%2BNfBx3rIzCoLO99V3BwKhMT8u7B6u2zwkvsfCd2DlGHD8%2FYtgxyPSUtVtlhlXpl1Nr9o5rsVq7e1zvF9Ot0pasgOmxRJix1bBlIXeQh4xU0WPW&X-Amz-Signature=2aa7a69e289756135e8f5ef0597573f21600f78fcd6577a57a0c81becf5dbafc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN22J42C%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxwDQnEXF1e2Hlmm7tyS4mTVdq9SdKD6Ed4yzTtLYhjAiEArYL%2BUsFTs8N7zKajYhDT8bYyIu12hS8vbC1YM%2BEHsd8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGALJeEUHEcP12C6USrcAyRXSGlbSUo2U8bzdX3ERnezS9K6v80f0R2R81FThpRlnNr%2BwcNkxjlrEVH44nSe3DuSLSfM9ppX2ZWvHZYtAtOk6bSYsGNXsgEoaYQcN58mF%2FEHOsOoYBVhduEKj6ruqxewZkqWPzCXzXii74TJmxBM3vDG8lC1%2FHy6HeHgbb2YZ4D8ikrLMmXD3oUfKZG8GlI2%2FTh5jFvx0E5vIsjxV0SvPSKp%2FWQ%2BvKIzgFG7QUN8fez8WO0CJqKJRC5U5Fu9zvPJaVy0NBAEqF%2BJZ3tCUzHpgNa2sq%2F%2FcwwQgqdv0%2FMmHvK%2BCnn%2F%2BC5te9V9NKFnfsQFH0ZkJZX%2BY43zINQ6EuJnHq7FtPKvzStBXF2GpxIBsod5heyL%2BbRPWPhMY4YPmCMswgc8KxE%2F7sAbXmfdqC1MgeXLMLumw3FiZpsVGXgmmRVxAlnarff0GAxnp9m25IfMInhDUnskKSYvKbsUvJwg%2BTA1jPcErgFXUOorZrOXaFnR67RphZMiPj8GntvUvWozvXKp1tGwDtjk2cwHsXpbfwlu9A3gkQAStxK0PS2PMjCEI1YmCCH144j4htpV84xP%2FhL7bH8%2BNW1ixqZn6W1V6QOo3SMMxoOrk7doTRpNcIhk1kp4O7NUHGq8MNzO5L0GOqUB%2BGRxMLuIJOY80tWjUroweQAVtfwjLZ3i2FopsgbiW4Pxt3pvCsajQ8%2FJqjCryE7GIxF%2FkGAud3JAWtmSSiZOahlfVenLiWYa%2BI9qFSD%2FizwTCD%2BNfBx3rIzCoLO99V3BwKhMT8u7B6u2zwkvsfCd2DlGHD8%2FYtgxyPSUtVtlhlXpl1Nr9o5rsVq7e1zvF9Ot0pasgOmxRJix1bBlIXeQh4xU0WPW&X-Amz-Signature=e6bb792553e1a17efa77be2f1d58447c6f94b10ff191e471125556730c3cb69e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN22J42C%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxwDQnEXF1e2Hlmm7tyS4mTVdq9SdKD6Ed4yzTtLYhjAiEArYL%2BUsFTs8N7zKajYhDT8bYyIu12hS8vbC1YM%2BEHsd8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGALJeEUHEcP12C6USrcAyRXSGlbSUo2U8bzdX3ERnezS9K6v80f0R2R81FThpRlnNr%2BwcNkxjlrEVH44nSe3DuSLSfM9ppX2ZWvHZYtAtOk6bSYsGNXsgEoaYQcN58mF%2FEHOsOoYBVhduEKj6ruqxewZkqWPzCXzXii74TJmxBM3vDG8lC1%2FHy6HeHgbb2YZ4D8ikrLMmXD3oUfKZG8GlI2%2FTh5jFvx0E5vIsjxV0SvPSKp%2FWQ%2BvKIzgFG7QUN8fez8WO0CJqKJRC5U5Fu9zvPJaVy0NBAEqF%2BJZ3tCUzHpgNa2sq%2F%2FcwwQgqdv0%2FMmHvK%2BCnn%2F%2BC5te9V9NKFnfsQFH0ZkJZX%2BY43zINQ6EuJnHq7FtPKvzStBXF2GpxIBsod5heyL%2BbRPWPhMY4YPmCMswgc8KxE%2F7sAbXmfdqC1MgeXLMLumw3FiZpsVGXgmmRVxAlnarff0GAxnp9m25IfMInhDUnskKSYvKbsUvJwg%2BTA1jPcErgFXUOorZrOXaFnR67RphZMiPj8GntvUvWozvXKp1tGwDtjk2cwHsXpbfwlu9A3gkQAStxK0PS2PMjCEI1YmCCH144j4htpV84xP%2FhL7bH8%2BNW1ixqZn6W1V6QOo3SMMxoOrk7doTRpNcIhk1kp4O7NUHGq8MNzO5L0GOqUB%2BGRxMLuIJOY80tWjUroweQAVtfwjLZ3i2FopsgbiW4Pxt3pvCsajQ8%2FJqjCryE7GIxF%2FkGAud3JAWtmSSiZOahlfVenLiWYa%2BI9qFSD%2FizwTCD%2BNfBx3rIzCoLO99V3BwKhMT8u7B6u2zwkvsfCd2DlGHD8%2FYtgxyPSUtVtlhlXpl1Nr9o5rsVq7e1zvF9Ot0pasgOmxRJix1bBlIXeQh4xU0WPW&X-Amz-Signature=513111e1b7581472afed126f2aa44d3f5dba10e664e45b6f035ddfeb2bd13270&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN22J42C%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxwDQnEXF1e2Hlmm7tyS4mTVdq9SdKD6Ed4yzTtLYhjAiEArYL%2BUsFTs8N7zKajYhDT8bYyIu12hS8vbC1YM%2BEHsd8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGALJeEUHEcP12C6USrcAyRXSGlbSUo2U8bzdX3ERnezS9K6v80f0R2R81FThpRlnNr%2BwcNkxjlrEVH44nSe3DuSLSfM9ppX2ZWvHZYtAtOk6bSYsGNXsgEoaYQcN58mF%2FEHOsOoYBVhduEKj6ruqxewZkqWPzCXzXii74TJmxBM3vDG8lC1%2FHy6HeHgbb2YZ4D8ikrLMmXD3oUfKZG8GlI2%2FTh5jFvx0E5vIsjxV0SvPSKp%2FWQ%2BvKIzgFG7QUN8fez8WO0CJqKJRC5U5Fu9zvPJaVy0NBAEqF%2BJZ3tCUzHpgNa2sq%2F%2FcwwQgqdv0%2FMmHvK%2BCnn%2F%2BC5te9V9NKFnfsQFH0ZkJZX%2BY43zINQ6EuJnHq7FtPKvzStBXF2GpxIBsod5heyL%2BbRPWPhMY4YPmCMswgc8KxE%2F7sAbXmfdqC1MgeXLMLumw3FiZpsVGXgmmRVxAlnarff0GAxnp9m25IfMInhDUnskKSYvKbsUvJwg%2BTA1jPcErgFXUOorZrOXaFnR67RphZMiPj8GntvUvWozvXKp1tGwDtjk2cwHsXpbfwlu9A3gkQAStxK0PS2PMjCEI1YmCCH144j4htpV84xP%2FhL7bH8%2BNW1ixqZn6W1V6QOo3SMMxoOrk7doTRpNcIhk1kp4O7NUHGq8MNzO5L0GOqUB%2BGRxMLuIJOY80tWjUroweQAVtfwjLZ3i2FopsgbiW4Pxt3pvCsajQ8%2FJqjCryE7GIxF%2FkGAud3JAWtmSSiZOahlfVenLiWYa%2BI9qFSD%2FizwTCD%2BNfBx3rIzCoLO99V3BwKhMT8u7B6u2zwkvsfCd2DlGHD8%2FYtgxyPSUtVtlhlXpl1Nr9o5rsVq7e1zvF9Ot0pasgOmxRJix1bBlIXeQh4xU0WPW&X-Amz-Signature=329ad388f283f726a4c109a4f9751eba4e7ccf4419b7b9dde433a3a1cf37af6e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
