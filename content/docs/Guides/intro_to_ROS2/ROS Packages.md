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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKPNVG6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7daQVnKvVU2VGBXx6wThjrLifrhnOFxdHuN5iNEWaBQIhALazWhDtLunSnKZiNKqG2joqKkMTHS2mKaA1fycx8tGaKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fz6e9oFYS4%2FVoCgq3AOrOGkyTpE9687q7i2vpag6DRHDsOM8h%2BUHun1UZLVxWlV5ZfsV1OH6b6kJIGQyoQ4zpNpI9iwNMT0qJktKfUsK%2FeiyhajNdlTRTFS8Pvk%2BzOPPsM2sZRjpgvUbYFc2EqGVx6WESJY099JBCNghyl94WuptaIQdE8TJSJ6O4s9ijJ3QlGKUxIFIIMTjJYzY%2Bu8JDKBjElX7DfHqGhDLiu5yW5h1F8ihCA2v22YWZ8pzkqo%2Bw3s%2FAFQA%2FalAsiodWzeJwFbHlIppNb8dJJYxV7e33pQf7udY5BhUkT0QXc9Z75SnhFdATEJcfJfSbWwOHJU8LrV3XVOfF6A5FLNmBbGdtEk1lGxCj3qKCUw8HreH9J%2FUC0U%2FOPQ5y26inxFdwo9el%2BjgZJAOIK7CWSdx1wH5EjR30klbF5IYwrARUoW15HIfKnwcmeeoij0DMmagFMl1ZlvkFRJAKCJal9snNpyf29MwMfybzyQeYV5l%2BTD9WhYumMVZsAwh5vLJIcA9GY5KDB%2BDcvzcu%2BSMKjQAQu6kvP6svv%2Fp6rTcT9rpT0rGtNGew600Ww0LZooqtQ%2FoJbeJhYBdyRavzIAEnR8AyPUkUQhe%2FZHjqc0b6dB%2BuoAdK69ckfNN8CYA4zIj9jDf4%2FPDBjqkAdCS%2BYSbzZ4pfOUOXNPpg2zBdeSs5gVnli%2FILXa1dZJQpaN4ew6GbtZVm5VhdhExiZjrctibkja7V%2BUwBQcCPX4hu7LB%2FCpifhy6oYw70FcDE8%2FL%2FV4GIdPkyTImT%2FieO7QlxesrEqemVK3ZjBctR0UZcha889GAvGARKAd2PJiOxwn6HUulzBuYvHmovjCyOlgbIk69zpw4jN3YniTB2mW4lcah&X-Amz-Signature=c7d81ea835657449d2451a4ca3ecf843df237939d0349a9e0e76919fa9eb4f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKPNVG6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7daQVnKvVU2VGBXx6wThjrLifrhnOFxdHuN5iNEWaBQIhALazWhDtLunSnKZiNKqG2joqKkMTHS2mKaA1fycx8tGaKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fz6e9oFYS4%2FVoCgq3AOrOGkyTpE9687q7i2vpag6DRHDsOM8h%2BUHun1UZLVxWlV5ZfsV1OH6b6kJIGQyoQ4zpNpI9iwNMT0qJktKfUsK%2FeiyhajNdlTRTFS8Pvk%2BzOPPsM2sZRjpgvUbYFc2EqGVx6WESJY099JBCNghyl94WuptaIQdE8TJSJ6O4s9ijJ3QlGKUxIFIIMTjJYzY%2Bu8JDKBjElX7DfHqGhDLiu5yW5h1F8ihCA2v22YWZ8pzkqo%2Bw3s%2FAFQA%2FalAsiodWzeJwFbHlIppNb8dJJYxV7e33pQf7udY5BhUkT0QXc9Z75SnhFdATEJcfJfSbWwOHJU8LrV3XVOfF6A5FLNmBbGdtEk1lGxCj3qKCUw8HreH9J%2FUC0U%2FOPQ5y26inxFdwo9el%2BjgZJAOIK7CWSdx1wH5EjR30klbF5IYwrARUoW15HIfKnwcmeeoij0DMmagFMl1ZlvkFRJAKCJal9snNpyf29MwMfybzyQeYV5l%2BTD9WhYumMVZsAwh5vLJIcA9GY5KDB%2BDcvzcu%2BSMKjQAQu6kvP6svv%2Fp6rTcT9rpT0rGtNGew600Ww0LZooqtQ%2FoJbeJhYBdyRavzIAEnR8AyPUkUQhe%2FZHjqc0b6dB%2BuoAdK69ckfNN8CYA4zIj9jDf4%2FPDBjqkAdCS%2BYSbzZ4pfOUOXNPpg2zBdeSs5gVnli%2FILXa1dZJQpaN4ew6GbtZVm5VhdhExiZjrctibkja7V%2BUwBQcCPX4hu7LB%2FCpifhy6oYw70FcDE8%2FL%2FV4GIdPkyTImT%2FieO7QlxesrEqemVK3ZjBctR0UZcha889GAvGARKAd2PJiOxwn6HUulzBuYvHmovjCyOlgbIk69zpw4jN3YniTB2mW4lcah&X-Amz-Signature=c41fceb63af314b9fc789160ed4cd786af47af5e35c08667d8955729b276138b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKPNVG6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7daQVnKvVU2VGBXx6wThjrLifrhnOFxdHuN5iNEWaBQIhALazWhDtLunSnKZiNKqG2joqKkMTHS2mKaA1fycx8tGaKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fz6e9oFYS4%2FVoCgq3AOrOGkyTpE9687q7i2vpag6DRHDsOM8h%2BUHun1UZLVxWlV5ZfsV1OH6b6kJIGQyoQ4zpNpI9iwNMT0qJktKfUsK%2FeiyhajNdlTRTFS8Pvk%2BzOPPsM2sZRjpgvUbYFc2EqGVx6WESJY099JBCNghyl94WuptaIQdE8TJSJ6O4s9ijJ3QlGKUxIFIIMTjJYzY%2Bu8JDKBjElX7DfHqGhDLiu5yW5h1F8ihCA2v22YWZ8pzkqo%2Bw3s%2FAFQA%2FalAsiodWzeJwFbHlIppNb8dJJYxV7e33pQf7udY5BhUkT0QXc9Z75SnhFdATEJcfJfSbWwOHJU8LrV3XVOfF6A5FLNmBbGdtEk1lGxCj3qKCUw8HreH9J%2FUC0U%2FOPQ5y26inxFdwo9el%2BjgZJAOIK7CWSdx1wH5EjR30klbF5IYwrARUoW15HIfKnwcmeeoij0DMmagFMl1ZlvkFRJAKCJal9snNpyf29MwMfybzyQeYV5l%2BTD9WhYumMVZsAwh5vLJIcA9GY5KDB%2BDcvzcu%2BSMKjQAQu6kvP6svv%2Fp6rTcT9rpT0rGtNGew600Ww0LZooqtQ%2FoJbeJhYBdyRavzIAEnR8AyPUkUQhe%2FZHjqc0b6dB%2BuoAdK69ckfNN8CYA4zIj9jDf4%2FPDBjqkAdCS%2BYSbzZ4pfOUOXNPpg2zBdeSs5gVnli%2FILXa1dZJQpaN4ew6GbtZVm5VhdhExiZjrctibkja7V%2BUwBQcCPX4hu7LB%2FCpifhy6oYw70FcDE8%2FL%2FV4GIdPkyTImT%2FieO7QlxesrEqemVK3ZjBctR0UZcha889GAvGARKAd2PJiOxwn6HUulzBuYvHmovjCyOlgbIk69zpw4jN3YniTB2mW4lcah&X-Amz-Signature=6427882af0b6c5779749f9e8f2fa37683944f7dfd5b84fd4af9dca226fc5cc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKPNVG6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7daQVnKvVU2VGBXx6wThjrLifrhnOFxdHuN5iNEWaBQIhALazWhDtLunSnKZiNKqG2joqKkMTHS2mKaA1fycx8tGaKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fz6e9oFYS4%2FVoCgq3AOrOGkyTpE9687q7i2vpag6DRHDsOM8h%2BUHun1UZLVxWlV5ZfsV1OH6b6kJIGQyoQ4zpNpI9iwNMT0qJktKfUsK%2FeiyhajNdlTRTFS8Pvk%2BzOPPsM2sZRjpgvUbYFc2EqGVx6WESJY099JBCNghyl94WuptaIQdE8TJSJ6O4s9ijJ3QlGKUxIFIIMTjJYzY%2Bu8JDKBjElX7DfHqGhDLiu5yW5h1F8ihCA2v22YWZ8pzkqo%2Bw3s%2FAFQA%2FalAsiodWzeJwFbHlIppNb8dJJYxV7e33pQf7udY5BhUkT0QXc9Z75SnhFdATEJcfJfSbWwOHJU8LrV3XVOfF6A5FLNmBbGdtEk1lGxCj3qKCUw8HreH9J%2FUC0U%2FOPQ5y26inxFdwo9el%2BjgZJAOIK7CWSdx1wH5EjR30klbF5IYwrARUoW15HIfKnwcmeeoij0DMmagFMl1ZlvkFRJAKCJal9snNpyf29MwMfybzyQeYV5l%2BTD9WhYumMVZsAwh5vLJIcA9GY5KDB%2BDcvzcu%2BSMKjQAQu6kvP6svv%2Fp6rTcT9rpT0rGtNGew600Ww0LZooqtQ%2FoJbeJhYBdyRavzIAEnR8AyPUkUQhe%2FZHjqc0b6dB%2BuoAdK69ckfNN8CYA4zIj9jDf4%2FPDBjqkAdCS%2BYSbzZ4pfOUOXNPpg2zBdeSs5gVnli%2FILXa1dZJQpaN4ew6GbtZVm5VhdhExiZjrctibkja7V%2BUwBQcCPX4hu7LB%2FCpifhy6oYw70FcDE8%2FL%2FV4GIdPkyTImT%2FieO7QlxesrEqemVK3ZjBctR0UZcha889GAvGARKAd2PJiOxwn6HUulzBuYvHmovjCyOlgbIk69zpw4jN3YniTB2mW4lcah&X-Amz-Signature=da98fa64b0404378555d4280ec5897dbdb2ff795b87880084ef2d03e471c09d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKPNVG6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7daQVnKvVU2VGBXx6wThjrLifrhnOFxdHuN5iNEWaBQIhALazWhDtLunSnKZiNKqG2joqKkMTHS2mKaA1fycx8tGaKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fz6e9oFYS4%2FVoCgq3AOrOGkyTpE9687q7i2vpag6DRHDsOM8h%2BUHun1UZLVxWlV5ZfsV1OH6b6kJIGQyoQ4zpNpI9iwNMT0qJktKfUsK%2FeiyhajNdlTRTFS8Pvk%2BzOPPsM2sZRjpgvUbYFc2EqGVx6WESJY099JBCNghyl94WuptaIQdE8TJSJ6O4s9ijJ3QlGKUxIFIIMTjJYzY%2Bu8JDKBjElX7DfHqGhDLiu5yW5h1F8ihCA2v22YWZ8pzkqo%2Bw3s%2FAFQA%2FalAsiodWzeJwFbHlIppNb8dJJYxV7e33pQf7udY5BhUkT0QXc9Z75SnhFdATEJcfJfSbWwOHJU8LrV3XVOfF6A5FLNmBbGdtEk1lGxCj3qKCUw8HreH9J%2FUC0U%2FOPQ5y26inxFdwo9el%2BjgZJAOIK7CWSdx1wH5EjR30klbF5IYwrARUoW15HIfKnwcmeeoij0DMmagFMl1ZlvkFRJAKCJal9snNpyf29MwMfybzyQeYV5l%2BTD9WhYumMVZsAwh5vLJIcA9GY5KDB%2BDcvzcu%2BSMKjQAQu6kvP6svv%2Fp6rTcT9rpT0rGtNGew600Ww0LZooqtQ%2FoJbeJhYBdyRavzIAEnR8AyPUkUQhe%2FZHjqc0b6dB%2BuoAdK69ckfNN8CYA4zIj9jDf4%2FPDBjqkAdCS%2BYSbzZ4pfOUOXNPpg2zBdeSs5gVnli%2FILXa1dZJQpaN4ew6GbtZVm5VhdhExiZjrctibkja7V%2BUwBQcCPX4hu7LB%2FCpifhy6oYw70FcDE8%2FL%2FV4GIdPkyTImT%2FieO7QlxesrEqemVK3ZjBctR0UZcha889GAvGARKAd2PJiOxwn6HUulzBuYvHmovjCyOlgbIk69zpw4jN3YniTB2mW4lcah&X-Amz-Signature=21b95d622a06dbb09760711ec4326e4f9425dfd534f9c06e36e720d28415bc36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKPNVG6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7daQVnKvVU2VGBXx6wThjrLifrhnOFxdHuN5iNEWaBQIhALazWhDtLunSnKZiNKqG2joqKkMTHS2mKaA1fycx8tGaKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fz6e9oFYS4%2FVoCgq3AOrOGkyTpE9687q7i2vpag6DRHDsOM8h%2BUHun1UZLVxWlV5ZfsV1OH6b6kJIGQyoQ4zpNpI9iwNMT0qJktKfUsK%2FeiyhajNdlTRTFS8Pvk%2BzOPPsM2sZRjpgvUbYFc2EqGVx6WESJY099JBCNghyl94WuptaIQdE8TJSJ6O4s9ijJ3QlGKUxIFIIMTjJYzY%2Bu8JDKBjElX7DfHqGhDLiu5yW5h1F8ihCA2v22YWZ8pzkqo%2Bw3s%2FAFQA%2FalAsiodWzeJwFbHlIppNb8dJJYxV7e33pQf7udY5BhUkT0QXc9Z75SnhFdATEJcfJfSbWwOHJU8LrV3XVOfF6A5FLNmBbGdtEk1lGxCj3qKCUw8HreH9J%2FUC0U%2FOPQ5y26inxFdwo9el%2BjgZJAOIK7CWSdx1wH5EjR30klbF5IYwrARUoW15HIfKnwcmeeoij0DMmagFMl1ZlvkFRJAKCJal9snNpyf29MwMfybzyQeYV5l%2BTD9WhYumMVZsAwh5vLJIcA9GY5KDB%2BDcvzcu%2BSMKjQAQu6kvP6svv%2Fp6rTcT9rpT0rGtNGew600Ww0LZooqtQ%2FoJbeJhYBdyRavzIAEnR8AyPUkUQhe%2FZHjqc0b6dB%2BuoAdK69ckfNN8CYA4zIj9jDf4%2FPDBjqkAdCS%2BYSbzZ4pfOUOXNPpg2zBdeSs5gVnli%2FILXa1dZJQpaN4ew6GbtZVm5VhdhExiZjrctibkja7V%2BUwBQcCPX4hu7LB%2FCpifhy6oYw70FcDE8%2FL%2FV4GIdPkyTImT%2FieO7QlxesrEqemVK3ZjBctR0UZcha889GAvGARKAd2PJiOxwn6HUulzBuYvHmovjCyOlgbIk69zpw4jN3YniTB2mW4lcah&X-Amz-Signature=b175308b3bd811493db18658e350822a686b488cccbec57747ff52e653ed5ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKPNVG6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7daQVnKvVU2VGBXx6wThjrLifrhnOFxdHuN5iNEWaBQIhALazWhDtLunSnKZiNKqG2joqKkMTHS2mKaA1fycx8tGaKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fz6e9oFYS4%2FVoCgq3AOrOGkyTpE9687q7i2vpag6DRHDsOM8h%2BUHun1UZLVxWlV5ZfsV1OH6b6kJIGQyoQ4zpNpI9iwNMT0qJktKfUsK%2FeiyhajNdlTRTFS8Pvk%2BzOPPsM2sZRjpgvUbYFc2EqGVx6WESJY099JBCNghyl94WuptaIQdE8TJSJ6O4s9ijJ3QlGKUxIFIIMTjJYzY%2Bu8JDKBjElX7DfHqGhDLiu5yW5h1F8ihCA2v22YWZ8pzkqo%2Bw3s%2FAFQA%2FalAsiodWzeJwFbHlIppNb8dJJYxV7e33pQf7udY5BhUkT0QXc9Z75SnhFdATEJcfJfSbWwOHJU8LrV3XVOfF6A5FLNmBbGdtEk1lGxCj3qKCUw8HreH9J%2FUC0U%2FOPQ5y26inxFdwo9el%2BjgZJAOIK7CWSdx1wH5EjR30klbF5IYwrARUoW15HIfKnwcmeeoij0DMmagFMl1ZlvkFRJAKCJal9snNpyf29MwMfybzyQeYV5l%2BTD9WhYumMVZsAwh5vLJIcA9GY5KDB%2BDcvzcu%2BSMKjQAQu6kvP6svv%2Fp6rTcT9rpT0rGtNGew600Ww0LZooqtQ%2FoJbeJhYBdyRavzIAEnR8AyPUkUQhe%2FZHjqc0b6dB%2BuoAdK69ckfNN8CYA4zIj9jDf4%2FPDBjqkAdCS%2BYSbzZ4pfOUOXNPpg2zBdeSs5gVnli%2FILXa1dZJQpaN4ew6GbtZVm5VhdhExiZjrctibkja7V%2BUwBQcCPX4hu7LB%2FCpifhy6oYw70FcDE8%2FL%2FV4GIdPkyTImT%2FieO7QlxesrEqemVK3ZjBctR0UZcha889GAvGARKAd2PJiOxwn6HUulzBuYvHmovjCyOlgbIk69zpw4jN3YniTB2mW4lcah&X-Amz-Signature=173878d9d52e05c842672d755afff5b93493088d8fe641e9ea24bff268a87990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
