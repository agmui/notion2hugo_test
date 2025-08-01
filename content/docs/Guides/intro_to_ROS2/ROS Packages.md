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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLAZZFW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvcpZIwQNwuXWdn6VEg70o8VLkANNHq4w091MlQ%2BphRQIgFf9Fg21XPhxmVdWeak%2FfCQipZrJ99kbTLQekcz2Y5JMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOweoph8kV2ZTNK%2BNSrcA7XlXDr6XsUf1Dm26jkYE8DamD81PWzsOAipdQOUUPYaqUhN%2FGUHj63Wx%2FeoA1nL4kgCl1b3Pp4DLHRgPyntjtYuHmikYRxU9uLpehcRCTlhGqlHkFqE5iqcwiujuzrLHJnbOXNgO%2Fe%2FA4PPVWYEOIm8XcwRl6zaj1VLTfTXyHCE6oGBbtPONOMcxhyBzXTdStuAyS6ww2%2BFwXAAjVDfKyRLUR6a5DD6%2F0Sq6btEMa5ID87ez2e6INcRihxbw0UZfxdr1uf%2Bp5YmRlpUPg2GHCyGiqxCYFBmILU7fKTkCFnWBYLCz0yE2AsljXSOXywgnhYR0Tangdj%2B4NkcMMaCcGMI47%2Fwusi598tceeguTEPwgLkq%2FILLuKTZ%2FjOkChcoc7L9GgtbB7bqom7fdLDKWfN6%2B4%2BXL1U9jQ8bEZon8jF40oKdfJjg1DvAhnn3011n7TziFiBY%2FlWTOrIaImbFjjas80U3zxmbfOYUNNloXj7tW8lU0zxshKyzZX5Z6%2FzFiZSsf%2BmMwEuEbR5llNG6ciJCLFfK6ynPBrDaTYVP7svSkZyS2C2JScQoICr5D8V%2FglKTK2e%2B4caDxbjwFrx%2BWFCTbdOgXDy4hqk1NVUds3XsITioQmCQcSAsuFLQMNnLsMQGOqUB8F10%2FewWeldv0Hi2HC%2Bd78JMsc9X3eNkW5CRscywkepT1d3sypiFg%2BzBaNdjjT3SndFccy4Abv91swb0BZlCFa3ZWBrZfed%2BGJV4f4IIJy5LHNKIS5LgTGAqw8avllamjOk8zLyx9iL9L3ifQYKESKKxE%2BAbX5Oyn5pDvQYYHif%2BGFDKHEql5ALMidG0YX4Vx3L6YU4yMjbVdHqxnE2b7BThozQK&X-Amz-Signature=ba693661ede5367fdff154769e440345306646612b26d6d43a683a74745d266f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLAZZFW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvcpZIwQNwuXWdn6VEg70o8VLkANNHq4w091MlQ%2BphRQIgFf9Fg21XPhxmVdWeak%2FfCQipZrJ99kbTLQekcz2Y5JMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOweoph8kV2ZTNK%2BNSrcA7XlXDr6XsUf1Dm26jkYE8DamD81PWzsOAipdQOUUPYaqUhN%2FGUHj63Wx%2FeoA1nL4kgCl1b3Pp4DLHRgPyntjtYuHmikYRxU9uLpehcRCTlhGqlHkFqE5iqcwiujuzrLHJnbOXNgO%2Fe%2FA4PPVWYEOIm8XcwRl6zaj1VLTfTXyHCE6oGBbtPONOMcxhyBzXTdStuAyS6ww2%2BFwXAAjVDfKyRLUR6a5DD6%2F0Sq6btEMa5ID87ez2e6INcRihxbw0UZfxdr1uf%2Bp5YmRlpUPg2GHCyGiqxCYFBmILU7fKTkCFnWBYLCz0yE2AsljXSOXywgnhYR0Tangdj%2B4NkcMMaCcGMI47%2Fwusi598tceeguTEPwgLkq%2FILLuKTZ%2FjOkChcoc7L9GgtbB7bqom7fdLDKWfN6%2B4%2BXL1U9jQ8bEZon8jF40oKdfJjg1DvAhnn3011n7TziFiBY%2FlWTOrIaImbFjjas80U3zxmbfOYUNNloXj7tW8lU0zxshKyzZX5Z6%2FzFiZSsf%2BmMwEuEbR5llNG6ciJCLFfK6ynPBrDaTYVP7svSkZyS2C2JScQoICr5D8V%2FglKTK2e%2B4caDxbjwFrx%2BWFCTbdOgXDy4hqk1NVUds3XsITioQmCQcSAsuFLQMNnLsMQGOqUB8F10%2FewWeldv0Hi2HC%2Bd78JMsc9X3eNkW5CRscywkepT1d3sypiFg%2BzBaNdjjT3SndFccy4Abv91swb0BZlCFa3ZWBrZfed%2BGJV4f4IIJy5LHNKIS5LgTGAqw8avllamjOk8zLyx9iL9L3ifQYKESKKxE%2BAbX5Oyn5pDvQYYHif%2BGFDKHEql5ALMidG0YX4Vx3L6YU4yMjbVdHqxnE2b7BThozQK&X-Amz-Signature=dca5bd865e6126cebb307f0ebb0dad55041323c262d9f5d7be1f32ed8180f471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLAZZFW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvcpZIwQNwuXWdn6VEg70o8VLkANNHq4w091MlQ%2BphRQIgFf9Fg21XPhxmVdWeak%2FfCQipZrJ99kbTLQekcz2Y5JMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOweoph8kV2ZTNK%2BNSrcA7XlXDr6XsUf1Dm26jkYE8DamD81PWzsOAipdQOUUPYaqUhN%2FGUHj63Wx%2FeoA1nL4kgCl1b3Pp4DLHRgPyntjtYuHmikYRxU9uLpehcRCTlhGqlHkFqE5iqcwiujuzrLHJnbOXNgO%2Fe%2FA4PPVWYEOIm8XcwRl6zaj1VLTfTXyHCE6oGBbtPONOMcxhyBzXTdStuAyS6ww2%2BFwXAAjVDfKyRLUR6a5DD6%2F0Sq6btEMa5ID87ez2e6INcRihxbw0UZfxdr1uf%2Bp5YmRlpUPg2GHCyGiqxCYFBmILU7fKTkCFnWBYLCz0yE2AsljXSOXywgnhYR0Tangdj%2B4NkcMMaCcGMI47%2Fwusi598tceeguTEPwgLkq%2FILLuKTZ%2FjOkChcoc7L9GgtbB7bqom7fdLDKWfN6%2B4%2BXL1U9jQ8bEZon8jF40oKdfJjg1DvAhnn3011n7TziFiBY%2FlWTOrIaImbFjjas80U3zxmbfOYUNNloXj7tW8lU0zxshKyzZX5Z6%2FzFiZSsf%2BmMwEuEbR5llNG6ciJCLFfK6ynPBrDaTYVP7svSkZyS2C2JScQoICr5D8V%2FglKTK2e%2B4caDxbjwFrx%2BWFCTbdOgXDy4hqk1NVUds3XsITioQmCQcSAsuFLQMNnLsMQGOqUB8F10%2FewWeldv0Hi2HC%2Bd78JMsc9X3eNkW5CRscywkepT1d3sypiFg%2BzBaNdjjT3SndFccy4Abv91swb0BZlCFa3ZWBrZfed%2BGJV4f4IIJy5LHNKIS5LgTGAqw8avllamjOk8zLyx9iL9L3ifQYKESKKxE%2BAbX5Oyn5pDvQYYHif%2BGFDKHEql5ALMidG0YX4Vx3L6YU4yMjbVdHqxnE2b7BThozQK&X-Amz-Signature=8fb9900506c52f77aa10277cc6659b75251a901cb3e6a48aa2a9677a14371e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLAZZFW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvcpZIwQNwuXWdn6VEg70o8VLkANNHq4w091MlQ%2BphRQIgFf9Fg21XPhxmVdWeak%2FfCQipZrJ99kbTLQekcz2Y5JMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOweoph8kV2ZTNK%2BNSrcA7XlXDr6XsUf1Dm26jkYE8DamD81PWzsOAipdQOUUPYaqUhN%2FGUHj63Wx%2FeoA1nL4kgCl1b3Pp4DLHRgPyntjtYuHmikYRxU9uLpehcRCTlhGqlHkFqE5iqcwiujuzrLHJnbOXNgO%2Fe%2FA4PPVWYEOIm8XcwRl6zaj1VLTfTXyHCE6oGBbtPONOMcxhyBzXTdStuAyS6ww2%2BFwXAAjVDfKyRLUR6a5DD6%2F0Sq6btEMa5ID87ez2e6INcRihxbw0UZfxdr1uf%2Bp5YmRlpUPg2GHCyGiqxCYFBmILU7fKTkCFnWBYLCz0yE2AsljXSOXywgnhYR0Tangdj%2B4NkcMMaCcGMI47%2Fwusi598tceeguTEPwgLkq%2FILLuKTZ%2FjOkChcoc7L9GgtbB7bqom7fdLDKWfN6%2B4%2BXL1U9jQ8bEZon8jF40oKdfJjg1DvAhnn3011n7TziFiBY%2FlWTOrIaImbFjjas80U3zxmbfOYUNNloXj7tW8lU0zxshKyzZX5Z6%2FzFiZSsf%2BmMwEuEbR5llNG6ciJCLFfK6ynPBrDaTYVP7svSkZyS2C2JScQoICr5D8V%2FglKTK2e%2B4caDxbjwFrx%2BWFCTbdOgXDy4hqk1NVUds3XsITioQmCQcSAsuFLQMNnLsMQGOqUB8F10%2FewWeldv0Hi2HC%2Bd78JMsc9X3eNkW5CRscywkepT1d3sypiFg%2BzBaNdjjT3SndFccy4Abv91swb0BZlCFa3ZWBrZfed%2BGJV4f4IIJy5LHNKIS5LgTGAqw8avllamjOk8zLyx9iL9L3ifQYKESKKxE%2BAbX5Oyn5pDvQYYHif%2BGFDKHEql5ALMidG0YX4Vx3L6YU4yMjbVdHqxnE2b7BThozQK&X-Amz-Signature=57638e87fc80e88be9f8934bba28d24abaea8ac2448c55d99690a1916f85d0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLAZZFW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvcpZIwQNwuXWdn6VEg70o8VLkANNHq4w091MlQ%2BphRQIgFf9Fg21XPhxmVdWeak%2FfCQipZrJ99kbTLQekcz2Y5JMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOweoph8kV2ZTNK%2BNSrcA7XlXDr6XsUf1Dm26jkYE8DamD81PWzsOAipdQOUUPYaqUhN%2FGUHj63Wx%2FeoA1nL4kgCl1b3Pp4DLHRgPyntjtYuHmikYRxU9uLpehcRCTlhGqlHkFqE5iqcwiujuzrLHJnbOXNgO%2Fe%2FA4PPVWYEOIm8XcwRl6zaj1VLTfTXyHCE6oGBbtPONOMcxhyBzXTdStuAyS6ww2%2BFwXAAjVDfKyRLUR6a5DD6%2F0Sq6btEMa5ID87ez2e6INcRihxbw0UZfxdr1uf%2Bp5YmRlpUPg2GHCyGiqxCYFBmILU7fKTkCFnWBYLCz0yE2AsljXSOXywgnhYR0Tangdj%2B4NkcMMaCcGMI47%2Fwusi598tceeguTEPwgLkq%2FILLuKTZ%2FjOkChcoc7L9GgtbB7bqom7fdLDKWfN6%2B4%2BXL1U9jQ8bEZon8jF40oKdfJjg1DvAhnn3011n7TziFiBY%2FlWTOrIaImbFjjas80U3zxmbfOYUNNloXj7tW8lU0zxshKyzZX5Z6%2FzFiZSsf%2BmMwEuEbR5llNG6ciJCLFfK6ynPBrDaTYVP7svSkZyS2C2JScQoICr5D8V%2FglKTK2e%2B4caDxbjwFrx%2BWFCTbdOgXDy4hqk1NVUds3XsITioQmCQcSAsuFLQMNnLsMQGOqUB8F10%2FewWeldv0Hi2HC%2Bd78JMsc9X3eNkW5CRscywkepT1d3sypiFg%2BzBaNdjjT3SndFccy4Abv91swb0BZlCFa3ZWBrZfed%2BGJV4f4IIJy5LHNKIS5LgTGAqw8avllamjOk8zLyx9iL9L3ifQYKESKKxE%2BAbX5Oyn5pDvQYYHif%2BGFDKHEql5ALMidG0YX4Vx3L6YU4yMjbVdHqxnE2b7BThozQK&X-Amz-Signature=1e0c0ae9215c77a98c28824d32744a80ab39e8e3b2de5c2c698d80c7845d7e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLAZZFW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvcpZIwQNwuXWdn6VEg70o8VLkANNHq4w091MlQ%2BphRQIgFf9Fg21XPhxmVdWeak%2FfCQipZrJ99kbTLQekcz2Y5JMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOweoph8kV2ZTNK%2BNSrcA7XlXDr6XsUf1Dm26jkYE8DamD81PWzsOAipdQOUUPYaqUhN%2FGUHj63Wx%2FeoA1nL4kgCl1b3Pp4DLHRgPyntjtYuHmikYRxU9uLpehcRCTlhGqlHkFqE5iqcwiujuzrLHJnbOXNgO%2Fe%2FA4PPVWYEOIm8XcwRl6zaj1VLTfTXyHCE6oGBbtPONOMcxhyBzXTdStuAyS6ww2%2BFwXAAjVDfKyRLUR6a5DD6%2F0Sq6btEMa5ID87ez2e6INcRihxbw0UZfxdr1uf%2Bp5YmRlpUPg2GHCyGiqxCYFBmILU7fKTkCFnWBYLCz0yE2AsljXSOXywgnhYR0Tangdj%2B4NkcMMaCcGMI47%2Fwusi598tceeguTEPwgLkq%2FILLuKTZ%2FjOkChcoc7L9GgtbB7bqom7fdLDKWfN6%2B4%2BXL1U9jQ8bEZon8jF40oKdfJjg1DvAhnn3011n7TziFiBY%2FlWTOrIaImbFjjas80U3zxmbfOYUNNloXj7tW8lU0zxshKyzZX5Z6%2FzFiZSsf%2BmMwEuEbR5llNG6ciJCLFfK6ynPBrDaTYVP7svSkZyS2C2JScQoICr5D8V%2FglKTK2e%2B4caDxbjwFrx%2BWFCTbdOgXDy4hqk1NVUds3XsITioQmCQcSAsuFLQMNnLsMQGOqUB8F10%2FewWeldv0Hi2HC%2Bd78JMsc9X3eNkW5CRscywkepT1d3sypiFg%2BzBaNdjjT3SndFccy4Abv91swb0BZlCFa3ZWBrZfed%2BGJV4f4IIJy5LHNKIS5LgTGAqw8avllamjOk8zLyx9iL9L3ifQYKESKKxE%2BAbX5Oyn5pDvQYYHif%2BGFDKHEql5ALMidG0YX4Vx3L6YU4yMjbVdHqxnE2b7BThozQK&X-Amz-Signature=9de2470fc316680090382f1d8651e8235207ff041b031e51928c36ec2fff7816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLAZZFW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvcpZIwQNwuXWdn6VEg70o8VLkANNHq4w091MlQ%2BphRQIgFf9Fg21XPhxmVdWeak%2FfCQipZrJ99kbTLQekcz2Y5JMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOweoph8kV2ZTNK%2BNSrcA7XlXDr6XsUf1Dm26jkYE8DamD81PWzsOAipdQOUUPYaqUhN%2FGUHj63Wx%2FeoA1nL4kgCl1b3Pp4DLHRgPyntjtYuHmikYRxU9uLpehcRCTlhGqlHkFqE5iqcwiujuzrLHJnbOXNgO%2Fe%2FA4PPVWYEOIm8XcwRl6zaj1VLTfTXyHCE6oGBbtPONOMcxhyBzXTdStuAyS6ww2%2BFwXAAjVDfKyRLUR6a5DD6%2F0Sq6btEMa5ID87ez2e6INcRihxbw0UZfxdr1uf%2Bp5YmRlpUPg2GHCyGiqxCYFBmILU7fKTkCFnWBYLCz0yE2AsljXSOXywgnhYR0Tangdj%2B4NkcMMaCcGMI47%2Fwusi598tceeguTEPwgLkq%2FILLuKTZ%2FjOkChcoc7L9GgtbB7bqom7fdLDKWfN6%2B4%2BXL1U9jQ8bEZon8jF40oKdfJjg1DvAhnn3011n7TziFiBY%2FlWTOrIaImbFjjas80U3zxmbfOYUNNloXj7tW8lU0zxshKyzZX5Z6%2FzFiZSsf%2BmMwEuEbR5llNG6ciJCLFfK6ynPBrDaTYVP7svSkZyS2C2JScQoICr5D8V%2FglKTK2e%2B4caDxbjwFrx%2BWFCTbdOgXDy4hqk1NVUds3XsITioQmCQcSAsuFLQMNnLsMQGOqUB8F10%2FewWeldv0Hi2HC%2Bd78JMsc9X3eNkW5CRscywkepT1d3sypiFg%2BzBaNdjjT3SndFccy4Abv91swb0BZlCFa3ZWBrZfed%2BGJV4f4IIJy5LHNKIS5LgTGAqw8avllamjOk8zLyx9iL9L3ifQYKESKKxE%2BAbX5Oyn5pDvQYYHif%2BGFDKHEql5ALMidG0YX4Vx3L6YU4yMjbVdHqxnE2b7BThozQK&X-Amz-Signature=dded0c3615e880952347fab52fd9a4ecddc10d24db35a94c732df94a2e962fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
