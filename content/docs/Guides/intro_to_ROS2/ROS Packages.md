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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDI3KLMH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYn1ai8TmkXGv4%2BcbVYd7dECyiKSIjD%2FiK4jc0gA1L6AiAKLosJPvF1tUrsxEG%2BkQlWL0pKT5hqBNXlTH93pLVf%2FCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FWZeHreQPE0lFkUcKtwDETUHWUZJtqeI29jmdiTtGRNkTw4bLTCfRWqXjcekD42T0dxfKJsn5Fdg3Gw80VSp61xFAPJ3hUeY0I%2BQaTZxOceaHBxN1BqTytt89qw1UYJ5PVavARmD9XVeGkBBG6V%2FXJDmWa8rfHd3%2Bf%2B5p0NKtBQV9bna0C1uxC%2BiJHxpkFrgQGnYXEKC0cPwRvp5%2BDLvJvYfiyGsC31Pmkc0IbdkXJq01LLvu5XclsfL8%2BZWDxjTGUq57d%2BsDvoTN%2FxgDPfPLguboec47O40z6iu1T269YjrQzmpCy%2B1knY9%2B%2FLHr%2FwiU%2FEJYf4G7ygiF0%2FiIOHOG2b1ID2BtkGaUHmYHg1ACv71ozVVkdz7%2B4r7V7WwYm3InL3Iet8xnNw6zgoRjOwf1e%2F0SzOaluROpkBfLCFF8ZHLwrw8OUjdvDA7MHfNm%2BKhZmJSviHPMlPT9O%2BMP3dTxGZv2NH32VkQf0Z5parRR0%2BK6JJ0oE%2BbE3r%2Bi6WNDsIR2VjY%2F9M6XFhrAZW4EDw5X8ifFPSbbJ8RGFllbgI2mIIv4hQssKcbhZCbSmdGLmco0bx70AaJdLF5KfsCwVr1Bxs1kWwnCR1YTUZeWbDk8T4Km2o%2BoBsnj1yYVE7pN6lL6g0ZsVbHl%2FRsvKwwp9yuxAY6pgF3LBWn91cD9QQ47JjvWdk254DUIIM1edkg3stBaSkGKEFOAGlF9Dh5AhtPMda7G8yjNY4R2CAJ4H3fNBW0PPdpa03vo5Ky%2BXBny0%2BhCWf%2BK7b2MUBLXefsGP89suZNU0OcuebBczWrmZwrzOA%2B%2BA5XVk6gLnNTl02JCmp05qx7cHRhz3wkvBs67LUdJfuZZLiyxALwcbxD5pavHVpy%2BYu5LjIJb2Jy&X-Amz-Signature=47b43326992bf5f5070ffdc9cc125d404f851bcace2494f94d13363b46feeaa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDI3KLMH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYn1ai8TmkXGv4%2BcbVYd7dECyiKSIjD%2FiK4jc0gA1L6AiAKLosJPvF1tUrsxEG%2BkQlWL0pKT5hqBNXlTH93pLVf%2FCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FWZeHreQPE0lFkUcKtwDETUHWUZJtqeI29jmdiTtGRNkTw4bLTCfRWqXjcekD42T0dxfKJsn5Fdg3Gw80VSp61xFAPJ3hUeY0I%2BQaTZxOceaHBxN1BqTytt89qw1UYJ5PVavARmD9XVeGkBBG6V%2FXJDmWa8rfHd3%2Bf%2B5p0NKtBQV9bna0C1uxC%2BiJHxpkFrgQGnYXEKC0cPwRvp5%2BDLvJvYfiyGsC31Pmkc0IbdkXJq01LLvu5XclsfL8%2BZWDxjTGUq57d%2BsDvoTN%2FxgDPfPLguboec47O40z6iu1T269YjrQzmpCy%2B1knY9%2B%2FLHr%2FwiU%2FEJYf4G7ygiF0%2FiIOHOG2b1ID2BtkGaUHmYHg1ACv71ozVVkdz7%2B4r7V7WwYm3InL3Iet8xnNw6zgoRjOwf1e%2F0SzOaluROpkBfLCFF8ZHLwrw8OUjdvDA7MHfNm%2BKhZmJSviHPMlPT9O%2BMP3dTxGZv2NH32VkQf0Z5parRR0%2BK6JJ0oE%2BbE3r%2Bi6WNDsIR2VjY%2F9M6XFhrAZW4EDw5X8ifFPSbbJ8RGFllbgI2mIIv4hQssKcbhZCbSmdGLmco0bx70AaJdLF5KfsCwVr1Bxs1kWwnCR1YTUZeWbDk8T4Km2o%2BoBsnj1yYVE7pN6lL6g0ZsVbHl%2FRsvKwwp9yuxAY6pgF3LBWn91cD9QQ47JjvWdk254DUIIM1edkg3stBaSkGKEFOAGlF9Dh5AhtPMda7G8yjNY4R2CAJ4H3fNBW0PPdpa03vo5Ky%2BXBny0%2BhCWf%2BK7b2MUBLXefsGP89suZNU0OcuebBczWrmZwrzOA%2B%2BA5XVk6gLnNTl02JCmp05qx7cHRhz3wkvBs67LUdJfuZZLiyxALwcbxD5pavHVpy%2BYu5LjIJb2Jy&X-Amz-Signature=a99b95695aee1b3af0091a42837bd3b0761ac413a3b0a82838b925e15b820ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDI3KLMH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYn1ai8TmkXGv4%2BcbVYd7dECyiKSIjD%2FiK4jc0gA1L6AiAKLosJPvF1tUrsxEG%2BkQlWL0pKT5hqBNXlTH93pLVf%2FCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FWZeHreQPE0lFkUcKtwDETUHWUZJtqeI29jmdiTtGRNkTw4bLTCfRWqXjcekD42T0dxfKJsn5Fdg3Gw80VSp61xFAPJ3hUeY0I%2BQaTZxOceaHBxN1BqTytt89qw1UYJ5PVavARmD9XVeGkBBG6V%2FXJDmWa8rfHd3%2Bf%2B5p0NKtBQV9bna0C1uxC%2BiJHxpkFrgQGnYXEKC0cPwRvp5%2BDLvJvYfiyGsC31Pmkc0IbdkXJq01LLvu5XclsfL8%2BZWDxjTGUq57d%2BsDvoTN%2FxgDPfPLguboec47O40z6iu1T269YjrQzmpCy%2B1knY9%2B%2FLHr%2FwiU%2FEJYf4G7ygiF0%2FiIOHOG2b1ID2BtkGaUHmYHg1ACv71ozVVkdz7%2B4r7V7WwYm3InL3Iet8xnNw6zgoRjOwf1e%2F0SzOaluROpkBfLCFF8ZHLwrw8OUjdvDA7MHfNm%2BKhZmJSviHPMlPT9O%2BMP3dTxGZv2NH32VkQf0Z5parRR0%2BK6JJ0oE%2BbE3r%2Bi6WNDsIR2VjY%2F9M6XFhrAZW4EDw5X8ifFPSbbJ8RGFllbgI2mIIv4hQssKcbhZCbSmdGLmco0bx70AaJdLF5KfsCwVr1Bxs1kWwnCR1YTUZeWbDk8T4Km2o%2BoBsnj1yYVE7pN6lL6g0ZsVbHl%2FRsvKwwp9yuxAY6pgF3LBWn91cD9QQ47JjvWdk254DUIIM1edkg3stBaSkGKEFOAGlF9Dh5AhtPMda7G8yjNY4R2CAJ4H3fNBW0PPdpa03vo5Ky%2BXBny0%2BhCWf%2BK7b2MUBLXefsGP89suZNU0OcuebBczWrmZwrzOA%2B%2BA5XVk6gLnNTl02JCmp05qx7cHRhz3wkvBs67LUdJfuZZLiyxALwcbxD5pavHVpy%2BYu5LjIJb2Jy&X-Amz-Signature=d0bdf22967547381be8720f8a497e7b9f98279f0ca9a658194e78bdf50c818a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDI3KLMH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYn1ai8TmkXGv4%2BcbVYd7dECyiKSIjD%2FiK4jc0gA1L6AiAKLosJPvF1tUrsxEG%2BkQlWL0pKT5hqBNXlTH93pLVf%2FCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FWZeHreQPE0lFkUcKtwDETUHWUZJtqeI29jmdiTtGRNkTw4bLTCfRWqXjcekD42T0dxfKJsn5Fdg3Gw80VSp61xFAPJ3hUeY0I%2BQaTZxOceaHBxN1BqTytt89qw1UYJ5PVavARmD9XVeGkBBG6V%2FXJDmWa8rfHd3%2Bf%2B5p0NKtBQV9bna0C1uxC%2BiJHxpkFrgQGnYXEKC0cPwRvp5%2BDLvJvYfiyGsC31Pmkc0IbdkXJq01LLvu5XclsfL8%2BZWDxjTGUq57d%2BsDvoTN%2FxgDPfPLguboec47O40z6iu1T269YjrQzmpCy%2B1knY9%2B%2FLHr%2FwiU%2FEJYf4G7ygiF0%2FiIOHOG2b1ID2BtkGaUHmYHg1ACv71ozVVkdz7%2B4r7V7WwYm3InL3Iet8xnNw6zgoRjOwf1e%2F0SzOaluROpkBfLCFF8ZHLwrw8OUjdvDA7MHfNm%2BKhZmJSviHPMlPT9O%2BMP3dTxGZv2NH32VkQf0Z5parRR0%2BK6JJ0oE%2BbE3r%2Bi6WNDsIR2VjY%2F9M6XFhrAZW4EDw5X8ifFPSbbJ8RGFllbgI2mIIv4hQssKcbhZCbSmdGLmco0bx70AaJdLF5KfsCwVr1Bxs1kWwnCR1YTUZeWbDk8T4Km2o%2BoBsnj1yYVE7pN6lL6g0ZsVbHl%2FRsvKwwp9yuxAY6pgF3LBWn91cD9QQ47JjvWdk254DUIIM1edkg3stBaSkGKEFOAGlF9Dh5AhtPMda7G8yjNY4R2CAJ4H3fNBW0PPdpa03vo5Ky%2BXBny0%2BhCWf%2BK7b2MUBLXefsGP89suZNU0OcuebBczWrmZwrzOA%2B%2BA5XVk6gLnNTl02JCmp05qx7cHRhz3wkvBs67LUdJfuZZLiyxALwcbxD5pavHVpy%2BYu5LjIJb2Jy&X-Amz-Signature=996a380df0945ed9bcf8130202e4c617450bedbad6f16e225eacb7f75f9898ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDI3KLMH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYn1ai8TmkXGv4%2BcbVYd7dECyiKSIjD%2FiK4jc0gA1L6AiAKLosJPvF1tUrsxEG%2BkQlWL0pKT5hqBNXlTH93pLVf%2FCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FWZeHreQPE0lFkUcKtwDETUHWUZJtqeI29jmdiTtGRNkTw4bLTCfRWqXjcekD42T0dxfKJsn5Fdg3Gw80VSp61xFAPJ3hUeY0I%2BQaTZxOceaHBxN1BqTytt89qw1UYJ5PVavARmD9XVeGkBBG6V%2FXJDmWa8rfHd3%2Bf%2B5p0NKtBQV9bna0C1uxC%2BiJHxpkFrgQGnYXEKC0cPwRvp5%2BDLvJvYfiyGsC31Pmkc0IbdkXJq01LLvu5XclsfL8%2BZWDxjTGUq57d%2BsDvoTN%2FxgDPfPLguboec47O40z6iu1T269YjrQzmpCy%2B1knY9%2B%2FLHr%2FwiU%2FEJYf4G7ygiF0%2FiIOHOG2b1ID2BtkGaUHmYHg1ACv71ozVVkdz7%2B4r7V7WwYm3InL3Iet8xnNw6zgoRjOwf1e%2F0SzOaluROpkBfLCFF8ZHLwrw8OUjdvDA7MHfNm%2BKhZmJSviHPMlPT9O%2BMP3dTxGZv2NH32VkQf0Z5parRR0%2BK6JJ0oE%2BbE3r%2Bi6WNDsIR2VjY%2F9M6XFhrAZW4EDw5X8ifFPSbbJ8RGFllbgI2mIIv4hQssKcbhZCbSmdGLmco0bx70AaJdLF5KfsCwVr1Bxs1kWwnCR1YTUZeWbDk8T4Km2o%2BoBsnj1yYVE7pN6lL6g0ZsVbHl%2FRsvKwwp9yuxAY6pgF3LBWn91cD9QQ47JjvWdk254DUIIM1edkg3stBaSkGKEFOAGlF9Dh5AhtPMda7G8yjNY4R2CAJ4H3fNBW0PPdpa03vo5Ky%2BXBny0%2BhCWf%2BK7b2MUBLXefsGP89suZNU0OcuebBczWrmZwrzOA%2B%2BA5XVk6gLnNTl02JCmp05qx7cHRhz3wkvBs67LUdJfuZZLiyxALwcbxD5pavHVpy%2BYu5LjIJb2Jy&X-Amz-Signature=a5649ea2c580343b44adea456d55e8fd1e4e0e25a981552467270aeb0f56cac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDI3KLMH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYn1ai8TmkXGv4%2BcbVYd7dECyiKSIjD%2FiK4jc0gA1L6AiAKLosJPvF1tUrsxEG%2BkQlWL0pKT5hqBNXlTH93pLVf%2FCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FWZeHreQPE0lFkUcKtwDETUHWUZJtqeI29jmdiTtGRNkTw4bLTCfRWqXjcekD42T0dxfKJsn5Fdg3Gw80VSp61xFAPJ3hUeY0I%2BQaTZxOceaHBxN1BqTytt89qw1UYJ5PVavARmD9XVeGkBBG6V%2FXJDmWa8rfHd3%2Bf%2B5p0NKtBQV9bna0C1uxC%2BiJHxpkFrgQGnYXEKC0cPwRvp5%2BDLvJvYfiyGsC31Pmkc0IbdkXJq01LLvu5XclsfL8%2BZWDxjTGUq57d%2BsDvoTN%2FxgDPfPLguboec47O40z6iu1T269YjrQzmpCy%2B1knY9%2B%2FLHr%2FwiU%2FEJYf4G7ygiF0%2FiIOHOG2b1ID2BtkGaUHmYHg1ACv71ozVVkdz7%2B4r7V7WwYm3InL3Iet8xnNw6zgoRjOwf1e%2F0SzOaluROpkBfLCFF8ZHLwrw8OUjdvDA7MHfNm%2BKhZmJSviHPMlPT9O%2BMP3dTxGZv2NH32VkQf0Z5parRR0%2BK6JJ0oE%2BbE3r%2Bi6WNDsIR2VjY%2F9M6XFhrAZW4EDw5X8ifFPSbbJ8RGFllbgI2mIIv4hQssKcbhZCbSmdGLmco0bx70AaJdLF5KfsCwVr1Bxs1kWwnCR1YTUZeWbDk8T4Km2o%2BoBsnj1yYVE7pN6lL6g0ZsVbHl%2FRsvKwwp9yuxAY6pgF3LBWn91cD9QQ47JjvWdk254DUIIM1edkg3stBaSkGKEFOAGlF9Dh5AhtPMda7G8yjNY4R2CAJ4H3fNBW0PPdpa03vo5Ky%2BXBny0%2BhCWf%2BK7b2MUBLXefsGP89suZNU0OcuebBczWrmZwrzOA%2B%2BA5XVk6gLnNTl02JCmp05qx7cHRhz3wkvBs67LUdJfuZZLiyxALwcbxD5pavHVpy%2BYu5LjIJb2Jy&X-Amz-Signature=4007ebd188171a0eb921fcf42d4d1c2d8df23c76fd0dd6f6d269ad4f588d7c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDI3KLMH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYn1ai8TmkXGv4%2BcbVYd7dECyiKSIjD%2FiK4jc0gA1L6AiAKLosJPvF1tUrsxEG%2BkQlWL0pKT5hqBNXlTH93pLVf%2FCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FWZeHreQPE0lFkUcKtwDETUHWUZJtqeI29jmdiTtGRNkTw4bLTCfRWqXjcekD42T0dxfKJsn5Fdg3Gw80VSp61xFAPJ3hUeY0I%2BQaTZxOceaHBxN1BqTytt89qw1UYJ5PVavARmD9XVeGkBBG6V%2FXJDmWa8rfHd3%2Bf%2B5p0NKtBQV9bna0C1uxC%2BiJHxpkFrgQGnYXEKC0cPwRvp5%2BDLvJvYfiyGsC31Pmkc0IbdkXJq01LLvu5XclsfL8%2BZWDxjTGUq57d%2BsDvoTN%2FxgDPfPLguboec47O40z6iu1T269YjrQzmpCy%2B1knY9%2B%2FLHr%2FwiU%2FEJYf4G7ygiF0%2FiIOHOG2b1ID2BtkGaUHmYHg1ACv71ozVVkdz7%2B4r7V7WwYm3InL3Iet8xnNw6zgoRjOwf1e%2F0SzOaluROpkBfLCFF8ZHLwrw8OUjdvDA7MHfNm%2BKhZmJSviHPMlPT9O%2BMP3dTxGZv2NH32VkQf0Z5parRR0%2BK6JJ0oE%2BbE3r%2Bi6WNDsIR2VjY%2F9M6XFhrAZW4EDw5X8ifFPSbbJ8RGFllbgI2mIIv4hQssKcbhZCbSmdGLmco0bx70AaJdLF5KfsCwVr1Bxs1kWwnCR1YTUZeWbDk8T4Km2o%2BoBsnj1yYVE7pN6lL6g0ZsVbHl%2FRsvKwwp9yuxAY6pgF3LBWn91cD9QQ47JjvWdk254DUIIM1edkg3stBaSkGKEFOAGlF9Dh5AhtPMda7G8yjNY4R2CAJ4H3fNBW0PPdpa03vo5Ky%2BXBny0%2BhCWf%2BK7b2MUBLXefsGP89suZNU0OcuebBczWrmZwrzOA%2B%2BA5XVk6gLnNTl02JCmp05qx7cHRhz3wkvBs67LUdJfuZZLiyxALwcbxD5pavHVpy%2BYu5LjIJb2Jy&X-Amz-Signature=bb1f747d537e77aec112b2b4b92f8ef10d6a6304474bef876149a5b516d4fa80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
