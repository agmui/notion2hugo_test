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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2RDZGQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP7oS7veMy0Qx6GwbI5FoaNB0TOPkv02CqKhqTJ1q7RAiAcjz1GHGGOZZ0iHpaH8U%2BZgsGXt%2B%2FAcU66aiBSz73U7Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2Fw%2Fn5qO8v%2FggqXRzKtwD6WZSr%2FnQkTYfgUwhrXhWKFiMbqcvWmFz1igzlIQsDe21VNSTy2SgZqg9TNHjHici1csQXFd5B8lHHV1Q8YHtOj%2Fu4%2F2sXLp%2BvReMN3LFcon6acTLW%2BBPJHLk7lGYQK2YjpJNxQoGEuzNbeYuK3sfXIipyj8XxpuxqkcgkHEd1Yddv9jbx8ZuJ5V918oalJa0V4LDhs8a6OIP2Zm8YsennrbhSExi8Bt%2BrzNLIvpySqcEL2MLazC4BtFvAJqe7dM5pozxskTOkfM6O8ckE9A37UeHi1ilTzZVSiWTJoqBqMwAx8RVLCUX1gfVCYhaysf8yDvIIp5Z1BoKrkOTjVkZtEkwCQbiksqQHFn%2Fbp6fVHDBQIbv2pBbtZCzqD0E1Dbt73MkdW5iOibGYwzBvDOYptXS7wx9EKYpfhyyMfOZh%2FiVJ0AeLyjhDqlkCTIrhNtefyDvMrvG2hHTxjMjN5nhazEfrm0srJyFr7%2BSz5%2FMnK%2FvH2bjmqlQAXDHNPt3x5mDJHAhu8AUGkqiW83ZwoZ5Y1bWZVxObxjZsnU7xi8V4vPIb4EbfKmdapT5rTWPdqwwnD3rUfEhDtXuOXZt6WulUXn2QJNU4IVHo3UJjP1y4zwpnRqSeharVCZo7Nkwk5ahvgY6pgFboxqCuSZm%2FQGSXRHRTjp5AKLHy0qTlznEXd8x%2Fny2HASMLITLN1bwe5m8fe9829xgzKIjvY1ij2VOWFJXqZN5JcXD2k%2FuF2RcAxM04i60lk4z%2FzoY7EbDNfT%2FryZ63BB2peknrF1RSR9eFbsOZnpaTe6wEYZ4VJ5bGatWpgbcdVoJEjoEpsu13jYscFPbsjktI4AxCKIwAs0810R8K5zawYvxGoG3&X-Amz-Signature=695ab34da7b62d9f18829a10003dd315188278261a51a96ef13eed468bf1696f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2RDZGQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP7oS7veMy0Qx6GwbI5FoaNB0TOPkv02CqKhqTJ1q7RAiAcjz1GHGGOZZ0iHpaH8U%2BZgsGXt%2B%2FAcU66aiBSz73U7Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2Fw%2Fn5qO8v%2FggqXRzKtwD6WZSr%2FnQkTYfgUwhrXhWKFiMbqcvWmFz1igzlIQsDe21VNSTy2SgZqg9TNHjHici1csQXFd5B8lHHV1Q8YHtOj%2Fu4%2F2sXLp%2BvReMN3LFcon6acTLW%2BBPJHLk7lGYQK2YjpJNxQoGEuzNbeYuK3sfXIipyj8XxpuxqkcgkHEd1Yddv9jbx8ZuJ5V918oalJa0V4LDhs8a6OIP2Zm8YsennrbhSExi8Bt%2BrzNLIvpySqcEL2MLazC4BtFvAJqe7dM5pozxskTOkfM6O8ckE9A37UeHi1ilTzZVSiWTJoqBqMwAx8RVLCUX1gfVCYhaysf8yDvIIp5Z1BoKrkOTjVkZtEkwCQbiksqQHFn%2Fbp6fVHDBQIbv2pBbtZCzqD0E1Dbt73MkdW5iOibGYwzBvDOYptXS7wx9EKYpfhyyMfOZh%2FiVJ0AeLyjhDqlkCTIrhNtefyDvMrvG2hHTxjMjN5nhazEfrm0srJyFr7%2BSz5%2FMnK%2FvH2bjmqlQAXDHNPt3x5mDJHAhu8AUGkqiW83ZwoZ5Y1bWZVxObxjZsnU7xi8V4vPIb4EbfKmdapT5rTWPdqwwnD3rUfEhDtXuOXZt6WulUXn2QJNU4IVHo3UJjP1y4zwpnRqSeharVCZo7Nkwk5ahvgY6pgFboxqCuSZm%2FQGSXRHRTjp5AKLHy0qTlznEXd8x%2Fny2HASMLITLN1bwe5m8fe9829xgzKIjvY1ij2VOWFJXqZN5JcXD2k%2FuF2RcAxM04i60lk4z%2FzoY7EbDNfT%2FryZ63BB2peknrF1RSR9eFbsOZnpaTe6wEYZ4VJ5bGatWpgbcdVoJEjoEpsu13jYscFPbsjktI4AxCKIwAs0810R8K5zawYvxGoG3&X-Amz-Signature=9ddd916ca53234d0630ddf3abbbe5286a88cbee655b238807a5feb999e8e2aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2RDZGQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP7oS7veMy0Qx6GwbI5FoaNB0TOPkv02CqKhqTJ1q7RAiAcjz1GHGGOZZ0iHpaH8U%2BZgsGXt%2B%2FAcU66aiBSz73U7Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2Fw%2Fn5qO8v%2FggqXRzKtwD6WZSr%2FnQkTYfgUwhrXhWKFiMbqcvWmFz1igzlIQsDe21VNSTy2SgZqg9TNHjHici1csQXFd5B8lHHV1Q8YHtOj%2Fu4%2F2sXLp%2BvReMN3LFcon6acTLW%2BBPJHLk7lGYQK2YjpJNxQoGEuzNbeYuK3sfXIipyj8XxpuxqkcgkHEd1Yddv9jbx8ZuJ5V918oalJa0V4LDhs8a6OIP2Zm8YsennrbhSExi8Bt%2BrzNLIvpySqcEL2MLazC4BtFvAJqe7dM5pozxskTOkfM6O8ckE9A37UeHi1ilTzZVSiWTJoqBqMwAx8RVLCUX1gfVCYhaysf8yDvIIp5Z1BoKrkOTjVkZtEkwCQbiksqQHFn%2Fbp6fVHDBQIbv2pBbtZCzqD0E1Dbt73MkdW5iOibGYwzBvDOYptXS7wx9EKYpfhyyMfOZh%2FiVJ0AeLyjhDqlkCTIrhNtefyDvMrvG2hHTxjMjN5nhazEfrm0srJyFr7%2BSz5%2FMnK%2FvH2bjmqlQAXDHNPt3x5mDJHAhu8AUGkqiW83ZwoZ5Y1bWZVxObxjZsnU7xi8V4vPIb4EbfKmdapT5rTWPdqwwnD3rUfEhDtXuOXZt6WulUXn2QJNU4IVHo3UJjP1y4zwpnRqSeharVCZo7Nkwk5ahvgY6pgFboxqCuSZm%2FQGSXRHRTjp5AKLHy0qTlznEXd8x%2Fny2HASMLITLN1bwe5m8fe9829xgzKIjvY1ij2VOWFJXqZN5JcXD2k%2FuF2RcAxM04i60lk4z%2FzoY7EbDNfT%2FryZ63BB2peknrF1RSR9eFbsOZnpaTe6wEYZ4VJ5bGatWpgbcdVoJEjoEpsu13jYscFPbsjktI4AxCKIwAs0810R8K5zawYvxGoG3&X-Amz-Signature=6a418e1f2c4a4ac201209ace87467c0f297c6527f28cc3792db5f3455ce93cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2RDZGQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP7oS7veMy0Qx6GwbI5FoaNB0TOPkv02CqKhqTJ1q7RAiAcjz1GHGGOZZ0iHpaH8U%2BZgsGXt%2B%2FAcU66aiBSz73U7Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2Fw%2Fn5qO8v%2FggqXRzKtwD6WZSr%2FnQkTYfgUwhrXhWKFiMbqcvWmFz1igzlIQsDe21VNSTy2SgZqg9TNHjHici1csQXFd5B8lHHV1Q8YHtOj%2Fu4%2F2sXLp%2BvReMN3LFcon6acTLW%2BBPJHLk7lGYQK2YjpJNxQoGEuzNbeYuK3sfXIipyj8XxpuxqkcgkHEd1Yddv9jbx8ZuJ5V918oalJa0V4LDhs8a6OIP2Zm8YsennrbhSExi8Bt%2BrzNLIvpySqcEL2MLazC4BtFvAJqe7dM5pozxskTOkfM6O8ckE9A37UeHi1ilTzZVSiWTJoqBqMwAx8RVLCUX1gfVCYhaysf8yDvIIp5Z1BoKrkOTjVkZtEkwCQbiksqQHFn%2Fbp6fVHDBQIbv2pBbtZCzqD0E1Dbt73MkdW5iOibGYwzBvDOYptXS7wx9EKYpfhyyMfOZh%2FiVJ0AeLyjhDqlkCTIrhNtefyDvMrvG2hHTxjMjN5nhazEfrm0srJyFr7%2BSz5%2FMnK%2FvH2bjmqlQAXDHNPt3x5mDJHAhu8AUGkqiW83ZwoZ5Y1bWZVxObxjZsnU7xi8V4vPIb4EbfKmdapT5rTWPdqwwnD3rUfEhDtXuOXZt6WulUXn2QJNU4IVHo3UJjP1y4zwpnRqSeharVCZo7Nkwk5ahvgY6pgFboxqCuSZm%2FQGSXRHRTjp5AKLHy0qTlznEXd8x%2Fny2HASMLITLN1bwe5m8fe9829xgzKIjvY1ij2VOWFJXqZN5JcXD2k%2FuF2RcAxM04i60lk4z%2FzoY7EbDNfT%2FryZ63BB2peknrF1RSR9eFbsOZnpaTe6wEYZ4VJ5bGatWpgbcdVoJEjoEpsu13jYscFPbsjktI4AxCKIwAs0810R8K5zawYvxGoG3&X-Amz-Signature=69d9acc8b4c077548832a54dad13cfa6fb66900ceae862efc3faa0aa351eb1aa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2RDZGQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP7oS7veMy0Qx6GwbI5FoaNB0TOPkv02CqKhqTJ1q7RAiAcjz1GHGGOZZ0iHpaH8U%2BZgsGXt%2B%2FAcU66aiBSz73U7Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2Fw%2Fn5qO8v%2FggqXRzKtwD6WZSr%2FnQkTYfgUwhrXhWKFiMbqcvWmFz1igzlIQsDe21VNSTy2SgZqg9TNHjHici1csQXFd5B8lHHV1Q8YHtOj%2Fu4%2F2sXLp%2BvReMN3LFcon6acTLW%2BBPJHLk7lGYQK2YjpJNxQoGEuzNbeYuK3sfXIipyj8XxpuxqkcgkHEd1Yddv9jbx8ZuJ5V918oalJa0V4LDhs8a6OIP2Zm8YsennrbhSExi8Bt%2BrzNLIvpySqcEL2MLazC4BtFvAJqe7dM5pozxskTOkfM6O8ckE9A37UeHi1ilTzZVSiWTJoqBqMwAx8RVLCUX1gfVCYhaysf8yDvIIp5Z1BoKrkOTjVkZtEkwCQbiksqQHFn%2Fbp6fVHDBQIbv2pBbtZCzqD0E1Dbt73MkdW5iOibGYwzBvDOYptXS7wx9EKYpfhyyMfOZh%2FiVJ0AeLyjhDqlkCTIrhNtefyDvMrvG2hHTxjMjN5nhazEfrm0srJyFr7%2BSz5%2FMnK%2FvH2bjmqlQAXDHNPt3x5mDJHAhu8AUGkqiW83ZwoZ5Y1bWZVxObxjZsnU7xi8V4vPIb4EbfKmdapT5rTWPdqwwnD3rUfEhDtXuOXZt6WulUXn2QJNU4IVHo3UJjP1y4zwpnRqSeharVCZo7Nkwk5ahvgY6pgFboxqCuSZm%2FQGSXRHRTjp5AKLHy0qTlznEXd8x%2Fny2HASMLITLN1bwe5m8fe9829xgzKIjvY1ij2VOWFJXqZN5JcXD2k%2FuF2RcAxM04i60lk4z%2FzoY7EbDNfT%2FryZ63BB2peknrF1RSR9eFbsOZnpaTe6wEYZ4VJ5bGatWpgbcdVoJEjoEpsu13jYscFPbsjktI4AxCKIwAs0810R8K5zawYvxGoG3&X-Amz-Signature=5200b1b09a91a2ef1ba525b1f72c3eeecb844af24763e8728ea78fca3f237484&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2RDZGQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP7oS7veMy0Qx6GwbI5FoaNB0TOPkv02CqKhqTJ1q7RAiAcjz1GHGGOZZ0iHpaH8U%2BZgsGXt%2B%2FAcU66aiBSz73U7Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2Fw%2Fn5qO8v%2FggqXRzKtwD6WZSr%2FnQkTYfgUwhrXhWKFiMbqcvWmFz1igzlIQsDe21VNSTy2SgZqg9TNHjHici1csQXFd5B8lHHV1Q8YHtOj%2Fu4%2F2sXLp%2BvReMN3LFcon6acTLW%2BBPJHLk7lGYQK2YjpJNxQoGEuzNbeYuK3sfXIipyj8XxpuxqkcgkHEd1Yddv9jbx8ZuJ5V918oalJa0V4LDhs8a6OIP2Zm8YsennrbhSExi8Bt%2BrzNLIvpySqcEL2MLazC4BtFvAJqe7dM5pozxskTOkfM6O8ckE9A37UeHi1ilTzZVSiWTJoqBqMwAx8RVLCUX1gfVCYhaysf8yDvIIp5Z1BoKrkOTjVkZtEkwCQbiksqQHFn%2Fbp6fVHDBQIbv2pBbtZCzqD0E1Dbt73MkdW5iOibGYwzBvDOYptXS7wx9EKYpfhyyMfOZh%2FiVJ0AeLyjhDqlkCTIrhNtefyDvMrvG2hHTxjMjN5nhazEfrm0srJyFr7%2BSz5%2FMnK%2FvH2bjmqlQAXDHNPt3x5mDJHAhu8AUGkqiW83ZwoZ5Y1bWZVxObxjZsnU7xi8V4vPIb4EbfKmdapT5rTWPdqwwnD3rUfEhDtXuOXZt6WulUXn2QJNU4IVHo3UJjP1y4zwpnRqSeharVCZo7Nkwk5ahvgY6pgFboxqCuSZm%2FQGSXRHRTjp5AKLHy0qTlznEXd8x%2Fny2HASMLITLN1bwe5m8fe9829xgzKIjvY1ij2VOWFJXqZN5JcXD2k%2FuF2RcAxM04i60lk4z%2FzoY7EbDNfT%2FryZ63BB2peknrF1RSR9eFbsOZnpaTe6wEYZ4VJ5bGatWpgbcdVoJEjoEpsu13jYscFPbsjktI4AxCKIwAs0810R8K5zawYvxGoG3&X-Amz-Signature=93c3eeb8a8ed4ab2cd000fa9335346e661fafcdc7e8f5fefc70055c2548e54d4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2RDZGQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP7oS7veMy0Qx6GwbI5FoaNB0TOPkv02CqKhqTJ1q7RAiAcjz1GHGGOZZ0iHpaH8U%2BZgsGXt%2B%2FAcU66aiBSz73U7Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2Fw%2Fn5qO8v%2FggqXRzKtwD6WZSr%2FnQkTYfgUwhrXhWKFiMbqcvWmFz1igzlIQsDe21VNSTy2SgZqg9TNHjHici1csQXFd5B8lHHV1Q8YHtOj%2Fu4%2F2sXLp%2BvReMN3LFcon6acTLW%2BBPJHLk7lGYQK2YjpJNxQoGEuzNbeYuK3sfXIipyj8XxpuxqkcgkHEd1Yddv9jbx8ZuJ5V918oalJa0V4LDhs8a6OIP2Zm8YsennrbhSExi8Bt%2BrzNLIvpySqcEL2MLazC4BtFvAJqe7dM5pozxskTOkfM6O8ckE9A37UeHi1ilTzZVSiWTJoqBqMwAx8RVLCUX1gfVCYhaysf8yDvIIp5Z1BoKrkOTjVkZtEkwCQbiksqQHFn%2Fbp6fVHDBQIbv2pBbtZCzqD0E1Dbt73MkdW5iOibGYwzBvDOYptXS7wx9EKYpfhyyMfOZh%2FiVJ0AeLyjhDqlkCTIrhNtefyDvMrvG2hHTxjMjN5nhazEfrm0srJyFr7%2BSz5%2FMnK%2FvH2bjmqlQAXDHNPt3x5mDJHAhu8AUGkqiW83ZwoZ5Y1bWZVxObxjZsnU7xi8V4vPIb4EbfKmdapT5rTWPdqwwnD3rUfEhDtXuOXZt6WulUXn2QJNU4IVHo3UJjP1y4zwpnRqSeharVCZo7Nkwk5ahvgY6pgFboxqCuSZm%2FQGSXRHRTjp5AKLHy0qTlznEXd8x%2Fny2HASMLITLN1bwe5m8fe9829xgzKIjvY1ij2VOWFJXqZN5JcXD2k%2FuF2RcAxM04i60lk4z%2FzoY7EbDNfT%2FryZ63BB2peknrF1RSR9eFbsOZnpaTe6wEYZ4VJ5bGatWpgbcdVoJEjoEpsu13jYscFPbsjktI4AxCKIwAs0810R8K5zawYvxGoG3&X-Amz-Signature=115100fa6ae44532c7ca89d187bc1c565c09e8fa265eadb303b12291eb369345&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
