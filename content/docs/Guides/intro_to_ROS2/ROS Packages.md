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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSTN26U%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIvJCi1dNY6w8fVvXCamETyTYb9HUtX0xeyvzmMivM2QIgA%2BzwnNB4Ky89%2BUCU64tTRp1%2FUkUIIS58W2j0VmsxJ68q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI0OI%2FZ20VDZeIB1pircA8NlNk3eqW3TK02rkS6J00Hjtq3%2Bonx%2BcYdJKcPJtYCs3gkeuGGUP4YAo0%2Fg6U8wSadf2AvFqpCg%2B18G1oqFqtA18qF%2FBr0wcE6sJCuZRzN%2B7B%2BSKKncXeJsrdX%2BBNo9QLXBXGxG1xUOId%2FA49Ac16qo06CGtb1Oj1JpkkIr8YuxEfk7QmmymqCwnzv9khfsv2W0DBp%2BIqNUcsSgGk4HrXAJNKcuHbu8AfNLF9JdVj%2B9w%2Bxa9ZQxwgm5CqFxEXGlWGIFAeqbNvu0yWXHt90ZxbzH1vOrNbfgFPi9ZRzus9zzQzISsA2IKMkA9afjdyuYZbO%2FanecGPBIuZT9%2FwfbZ9tlyw9vtMRIwEG%2FinqQv1bhQTvJa8hZp2zPKSJuBD9OEn%2FjnFMcDdqNSqvUoZwzXva6ou%2ButLXONTjSmU9hsFzVt7oZEbJtIQ4Wz6UOrlY9dOsEOn0LBFPONsPVZbU690KFsJHmzSp21m8sKIQ4xaTU5csIqwQ%2FF1A%2BJuVKtjLLCSdt4A%2BZ0F%2FffwfWOypiWOhrfWsQcwOM1sMvnMUV%2BsXqVRfWw1Du5rR2jQc%2B61BnBOwTaGGX6hNElXMg7q0H9YYjdb5NhtptGngT0nw6IRbOB5Bd69wrpQk33cddMPfmqb4GOqUB0pIxyV%2Fd9maEmzyFXBH775QYO4aBKypUG8GE8O7nEcpYI9EZ5J2DUoaSOkT08OxUwXVS00KdeZMKR%2B6%2BqLBM%2ByRcLiSZySfL%2BDDZeFI5vB9qclq1UyWlYyxZ4ziKU%2BVQkrXyGHMrECWBJ%2FGsyekfL0Muw%2BNsf6%2FzjE8xIlIvKkCVg88TuAFxxHzwRfvwFudEZV7rpfu3QZNuK8vJrvAN%2FE5erW9m&X-Amz-Signature=280ebfc676888ae0829d6ef6e35f3a84ed523e6182e154b5d125bc9cdb8b4664&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSTN26U%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIvJCi1dNY6w8fVvXCamETyTYb9HUtX0xeyvzmMivM2QIgA%2BzwnNB4Ky89%2BUCU64tTRp1%2FUkUIIS58W2j0VmsxJ68q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI0OI%2FZ20VDZeIB1pircA8NlNk3eqW3TK02rkS6J00Hjtq3%2Bonx%2BcYdJKcPJtYCs3gkeuGGUP4YAo0%2Fg6U8wSadf2AvFqpCg%2B18G1oqFqtA18qF%2FBr0wcE6sJCuZRzN%2B7B%2BSKKncXeJsrdX%2BBNo9QLXBXGxG1xUOId%2FA49Ac16qo06CGtb1Oj1JpkkIr8YuxEfk7QmmymqCwnzv9khfsv2W0DBp%2BIqNUcsSgGk4HrXAJNKcuHbu8AfNLF9JdVj%2B9w%2Bxa9ZQxwgm5CqFxEXGlWGIFAeqbNvu0yWXHt90ZxbzH1vOrNbfgFPi9ZRzus9zzQzISsA2IKMkA9afjdyuYZbO%2FanecGPBIuZT9%2FwfbZ9tlyw9vtMRIwEG%2FinqQv1bhQTvJa8hZp2zPKSJuBD9OEn%2FjnFMcDdqNSqvUoZwzXva6ou%2ButLXONTjSmU9hsFzVt7oZEbJtIQ4Wz6UOrlY9dOsEOn0LBFPONsPVZbU690KFsJHmzSp21m8sKIQ4xaTU5csIqwQ%2FF1A%2BJuVKtjLLCSdt4A%2BZ0F%2FffwfWOypiWOhrfWsQcwOM1sMvnMUV%2BsXqVRfWw1Du5rR2jQc%2B61BnBOwTaGGX6hNElXMg7q0H9YYjdb5NhtptGngT0nw6IRbOB5Bd69wrpQk33cddMPfmqb4GOqUB0pIxyV%2Fd9maEmzyFXBH775QYO4aBKypUG8GE8O7nEcpYI9EZ5J2DUoaSOkT08OxUwXVS00KdeZMKR%2B6%2BqLBM%2ByRcLiSZySfL%2BDDZeFI5vB9qclq1UyWlYyxZ4ziKU%2BVQkrXyGHMrECWBJ%2FGsyekfL0Muw%2BNsf6%2FzjE8xIlIvKkCVg88TuAFxxHzwRfvwFudEZV7rpfu3QZNuK8vJrvAN%2FE5erW9m&X-Amz-Signature=aa7e3a50cec0fddba948b8113300897a364fe1b0e0208d1dde6d3a20196fb75c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSTN26U%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIvJCi1dNY6w8fVvXCamETyTYb9HUtX0xeyvzmMivM2QIgA%2BzwnNB4Ky89%2BUCU64tTRp1%2FUkUIIS58W2j0VmsxJ68q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI0OI%2FZ20VDZeIB1pircA8NlNk3eqW3TK02rkS6J00Hjtq3%2Bonx%2BcYdJKcPJtYCs3gkeuGGUP4YAo0%2Fg6U8wSadf2AvFqpCg%2B18G1oqFqtA18qF%2FBr0wcE6sJCuZRzN%2B7B%2BSKKncXeJsrdX%2BBNo9QLXBXGxG1xUOId%2FA49Ac16qo06CGtb1Oj1JpkkIr8YuxEfk7QmmymqCwnzv9khfsv2W0DBp%2BIqNUcsSgGk4HrXAJNKcuHbu8AfNLF9JdVj%2B9w%2Bxa9ZQxwgm5CqFxEXGlWGIFAeqbNvu0yWXHt90ZxbzH1vOrNbfgFPi9ZRzus9zzQzISsA2IKMkA9afjdyuYZbO%2FanecGPBIuZT9%2FwfbZ9tlyw9vtMRIwEG%2FinqQv1bhQTvJa8hZp2zPKSJuBD9OEn%2FjnFMcDdqNSqvUoZwzXva6ou%2ButLXONTjSmU9hsFzVt7oZEbJtIQ4Wz6UOrlY9dOsEOn0LBFPONsPVZbU690KFsJHmzSp21m8sKIQ4xaTU5csIqwQ%2FF1A%2BJuVKtjLLCSdt4A%2BZ0F%2FffwfWOypiWOhrfWsQcwOM1sMvnMUV%2BsXqVRfWw1Du5rR2jQc%2B61BnBOwTaGGX6hNElXMg7q0H9YYjdb5NhtptGngT0nw6IRbOB5Bd69wrpQk33cddMPfmqb4GOqUB0pIxyV%2Fd9maEmzyFXBH775QYO4aBKypUG8GE8O7nEcpYI9EZ5J2DUoaSOkT08OxUwXVS00KdeZMKR%2B6%2BqLBM%2ByRcLiSZySfL%2BDDZeFI5vB9qclq1UyWlYyxZ4ziKU%2BVQkrXyGHMrECWBJ%2FGsyekfL0Muw%2BNsf6%2FzjE8xIlIvKkCVg88TuAFxxHzwRfvwFudEZV7rpfu3QZNuK8vJrvAN%2FE5erW9m&X-Amz-Signature=d2d2d65a3b34fe6c69cee5175de467b2da94a5262213b29dbab0ebce485ba8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSTN26U%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIvJCi1dNY6w8fVvXCamETyTYb9HUtX0xeyvzmMivM2QIgA%2BzwnNB4Ky89%2BUCU64tTRp1%2FUkUIIS58W2j0VmsxJ68q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI0OI%2FZ20VDZeIB1pircA8NlNk3eqW3TK02rkS6J00Hjtq3%2Bonx%2BcYdJKcPJtYCs3gkeuGGUP4YAo0%2Fg6U8wSadf2AvFqpCg%2B18G1oqFqtA18qF%2FBr0wcE6sJCuZRzN%2B7B%2BSKKncXeJsrdX%2BBNo9QLXBXGxG1xUOId%2FA49Ac16qo06CGtb1Oj1JpkkIr8YuxEfk7QmmymqCwnzv9khfsv2W0DBp%2BIqNUcsSgGk4HrXAJNKcuHbu8AfNLF9JdVj%2B9w%2Bxa9ZQxwgm5CqFxEXGlWGIFAeqbNvu0yWXHt90ZxbzH1vOrNbfgFPi9ZRzus9zzQzISsA2IKMkA9afjdyuYZbO%2FanecGPBIuZT9%2FwfbZ9tlyw9vtMRIwEG%2FinqQv1bhQTvJa8hZp2zPKSJuBD9OEn%2FjnFMcDdqNSqvUoZwzXva6ou%2ButLXONTjSmU9hsFzVt7oZEbJtIQ4Wz6UOrlY9dOsEOn0LBFPONsPVZbU690KFsJHmzSp21m8sKIQ4xaTU5csIqwQ%2FF1A%2BJuVKtjLLCSdt4A%2BZ0F%2FffwfWOypiWOhrfWsQcwOM1sMvnMUV%2BsXqVRfWw1Du5rR2jQc%2B61BnBOwTaGGX6hNElXMg7q0H9YYjdb5NhtptGngT0nw6IRbOB5Bd69wrpQk33cddMPfmqb4GOqUB0pIxyV%2Fd9maEmzyFXBH775QYO4aBKypUG8GE8O7nEcpYI9EZ5J2DUoaSOkT08OxUwXVS00KdeZMKR%2B6%2BqLBM%2ByRcLiSZySfL%2BDDZeFI5vB9qclq1UyWlYyxZ4ziKU%2BVQkrXyGHMrECWBJ%2FGsyekfL0Muw%2BNsf6%2FzjE8xIlIvKkCVg88TuAFxxHzwRfvwFudEZV7rpfu3QZNuK8vJrvAN%2FE5erW9m&X-Amz-Signature=ce7d687c6f1d9dd22e463aeac9650bcbd9cbcd72c2c6a2dae625a3631d336478&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSTN26U%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIvJCi1dNY6w8fVvXCamETyTYb9HUtX0xeyvzmMivM2QIgA%2BzwnNB4Ky89%2BUCU64tTRp1%2FUkUIIS58W2j0VmsxJ68q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI0OI%2FZ20VDZeIB1pircA8NlNk3eqW3TK02rkS6J00Hjtq3%2Bonx%2BcYdJKcPJtYCs3gkeuGGUP4YAo0%2Fg6U8wSadf2AvFqpCg%2B18G1oqFqtA18qF%2FBr0wcE6sJCuZRzN%2B7B%2BSKKncXeJsrdX%2BBNo9QLXBXGxG1xUOId%2FA49Ac16qo06CGtb1Oj1JpkkIr8YuxEfk7QmmymqCwnzv9khfsv2W0DBp%2BIqNUcsSgGk4HrXAJNKcuHbu8AfNLF9JdVj%2B9w%2Bxa9ZQxwgm5CqFxEXGlWGIFAeqbNvu0yWXHt90ZxbzH1vOrNbfgFPi9ZRzus9zzQzISsA2IKMkA9afjdyuYZbO%2FanecGPBIuZT9%2FwfbZ9tlyw9vtMRIwEG%2FinqQv1bhQTvJa8hZp2zPKSJuBD9OEn%2FjnFMcDdqNSqvUoZwzXva6ou%2ButLXONTjSmU9hsFzVt7oZEbJtIQ4Wz6UOrlY9dOsEOn0LBFPONsPVZbU690KFsJHmzSp21m8sKIQ4xaTU5csIqwQ%2FF1A%2BJuVKtjLLCSdt4A%2BZ0F%2FffwfWOypiWOhrfWsQcwOM1sMvnMUV%2BsXqVRfWw1Du5rR2jQc%2B61BnBOwTaGGX6hNElXMg7q0H9YYjdb5NhtptGngT0nw6IRbOB5Bd69wrpQk33cddMPfmqb4GOqUB0pIxyV%2Fd9maEmzyFXBH775QYO4aBKypUG8GE8O7nEcpYI9EZ5J2DUoaSOkT08OxUwXVS00KdeZMKR%2B6%2BqLBM%2ByRcLiSZySfL%2BDDZeFI5vB9qclq1UyWlYyxZ4ziKU%2BVQkrXyGHMrECWBJ%2FGsyekfL0Muw%2BNsf6%2FzjE8xIlIvKkCVg88TuAFxxHzwRfvwFudEZV7rpfu3QZNuK8vJrvAN%2FE5erW9m&X-Amz-Signature=1930d9f9f05d086a59e173a1eea771f25dc70cd1282ae5b420c8d524df13fc92&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSTN26U%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIvJCi1dNY6w8fVvXCamETyTYb9HUtX0xeyvzmMivM2QIgA%2BzwnNB4Ky89%2BUCU64tTRp1%2FUkUIIS58W2j0VmsxJ68q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI0OI%2FZ20VDZeIB1pircA8NlNk3eqW3TK02rkS6J00Hjtq3%2Bonx%2BcYdJKcPJtYCs3gkeuGGUP4YAo0%2Fg6U8wSadf2AvFqpCg%2B18G1oqFqtA18qF%2FBr0wcE6sJCuZRzN%2B7B%2BSKKncXeJsrdX%2BBNo9QLXBXGxG1xUOId%2FA49Ac16qo06CGtb1Oj1JpkkIr8YuxEfk7QmmymqCwnzv9khfsv2W0DBp%2BIqNUcsSgGk4HrXAJNKcuHbu8AfNLF9JdVj%2B9w%2Bxa9ZQxwgm5CqFxEXGlWGIFAeqbNvu0yWXHt90ZxbzH1vOrNbfgFPi9ZRzus9zzQzISsA2IKMkA9afjdyuYZbO%2FanecGPBIuZT9%2FwfbZ9tlyw9vtMRIwEG%2FinqQv1bhQTvJa8hZp2zPKSJuBD9OEn%2FjnFMcDdqNSqvUoZwzXva6ou%2ButLXONTjSmU9hsFzVt7oZEbJtIQ4Wz6UOrlY9dOsEOn0LBFPONsPVZbU690KFsJHmzSp21m8sKIQ4xaTU5csIqwQ%2FF1A%2BJuVKtjLLCSdt4A%2BZ0F%2FffwfWOypiWOhrfWsQcwOM1sMvnMUV%2BsXqVRfWw1Du5rR2jQc%2B61BnBOwTaGGX6hNElXMg7q0H9YYjdb5NhtptGngT0nw6IRbOB5Bd69wrpQk33cddMPfmqb4GOqUB0pIxyV%2Fd9maEmzyFXBH775QYO4aBKypUG8GE8O7nEcpYI9EZ5J2DUoaSOkT08OxUwXVS00KdeZMKR%2B6%2BqLBM%2ByRcLiSZySfL%2BDDZeFI5vB9qclq1UyWlYyxZ4ziKU%2BVQkrXyGHMrECWBJ%2FGsyekfL0Muw%2BNsf6%2FzjE8xIlIvKkCVg88TuAFxxHzwRfvwFudEZV7rpfu3QZNuK8vJrvAN%2FE5erW9m&X-Amz-Signature=43648fe7ed4eed67d2682bf85d897f2ab01dedc45db15276b447985205d2c9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSTN26U%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIvJCi1dNY6w8fVvXCamETyTYb9HUtX0xeyvzmMivM2QIgA%2BzwnNB4Ky89%2BUCU64tTRp1%2FUkUIIS58W2j0VmsxJ68q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI0OI%2FZ20VDZeIB1pircA8NlNk3eqW3TK02rkS6J00Hjtq3%2Bonx%2BcYdJKcPJtYCs3gkeuGGUP4YAo0%2Fg6U8wSadf2AvFqpCg%2B18G1oqFqtA18qF%2FBr0wcE6sJCuZRzN%2B7B%2BSKKncXeJsrdX%2BBNo9QLXBXGxG1xUOId%2FA49Ac16qo06CGtb1Oj1JpkkIr8YuxEfk7QmmymqCwnzv9khfsv2W0DBp%2BIqNUcsSgGk4HrXAJNKcuHbu8AfNLF9JdVj%2B9w%2Bxa9ZQxwgm5CqFxEXGlWGIFAeqbNvu0yWXHt90ZxbzH1vOrNbfgFPi9ZRzus9zzQzISsA2IKMkA9afjdyuYZbO%2FanecGPBIuZT9%2FwfbZ9tlyw9vtMRIwEG%2FinqQv1bhQTvJa8hZp2zPKSJuBD9OEn%2FjnFMcDdqNSqvUoZwzXva6ou%2ButLXONTjSmU9hsFzVt7oZEbJtIQ4Wz6UOrlY9dOsEOn0LBFPONsPVZbU690KFsJHmzSp21m8sKIQ4xaTU5csIqwQ%2FF1A%2BJuVKtjLLCSdt4A%2BZ0F%2FffwfWOypiWOhrfWsQcwOM1sMvnMUV%2BsXqVRfWw1Du5rR2jQc%2B61BnBOwTaGGX6hNElXMg7q0H9YYjdb5NhtptGngT0nw6IRbOB5Bd69wrpQk33cddMPfmqb4GOqUB0pIxyV%2Fd9maEmzyFXBH775QYO4aBKypUG8GE8O7nEcpYI9EZ5J2DUoaSOkT08OxUwXVS00KdeZMKR%2B6%2BqLBM%2ByRcLiSZySfL%2BDDZeFI5vB9qclq1UyWlYyxZ4ziKU%2BVQkrXyGHMrECWBJ%2FGsyekfL0Muw%2BNsf6%2FzjE8xIlIvKkCVg88TuAFxxHzwRfvwFudEZV7rpfu3QZNuK8vJrvAN%2FE5erW9m&X-Amz-Signature=e13a1c3b9162dfa8728b4a3872ec7d77eaad0d9146a1dee82246ce7bb15700a1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
