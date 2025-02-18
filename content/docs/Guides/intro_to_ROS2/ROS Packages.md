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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNND46C%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDHMbDNtiEYHuc2pqEPXNLvTY1aIwEfqkeXD%2F5PYKH7KQIhAKQKeDTxguocSfP4OLJeajzEMR39q0%2BL89AtYIRO11nDKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygpaf4ZkShzcQndxwq3AOpM%2BTzPDKhZheqfByRisgVL%2BNBMKs9oq7fOirIAYPrluJPJeHUdB%2FV3TNOccyLoLaK1zWRGwkeaEq6vkK05aTVSmhNAWa8SQlAQqn0PtJgIhdgobIBcVnVHi3nTiYTVHo4jGmYZc7WK87vrka3%2BugddeNBLFjlqZM8%2FjrpYnJIjHVKg6VwD2BxGHHeNXMb6V0RV88djZ%2Fpa73EBEpcOz5ksBRgL%2Fb2Z0UT%2BFLkATn7zSvyhhH%2FSyL0mXhZwjUvZUxvs6Fn1Xn8KC1onLEf%2Bg%2BG2WOybpLlt7rvvcOxexHNsxj7E5qeH%2BH0SeoUuSR5FJuRkIQzDsh5HIsVjebysrelTYXzcbdd1KJem8TOrd6eZnAgE9aaNJ1DJLjcG11Zlze4LsWgVONdoNtL9lQBpPzDSmOTWRk%2F9bLpTfDL4W8uAunub6%2F%2Bhxp1cwoFizgwn0a7rcz3ZwfGmZaFxxKOSy5IO%2BF6jrLQgDH%2FLfK0I3YpLJ%2FRCt4iQMMRwhNf%2BM7rwAxE4YApOKMcb9S8lP%2BskK9BDu1TmH%2Ff1sW2c8usZZ%2Bn5PFUSvPwkOl96VKa2ZvdrdfDZz%2BLPZ4B4gkgEeADWgdUVl3%2BM8Q83LFhFZvJFHf9mQaB0etXSGsDGgO%2BqTCP29O9BjqkAQvrQYqfRNAAfOI%2FnCNB883sEEsbjl2VApJzjlf28OTTdZLa3UJ3eow%2Bc8Nmo5%2BbLr3C9pJtvYFr4P9H2OBHmgcZBfiA2N43u4z1HsSnHvSjfbJskt75uLngbIxbZQX4TspdF5Wwo%2F6wwu%2FIsqmJLBEa4za%2BjY4UIKh1fMJVNwhM0Tc9%2FId%2Bw2WqZ3ST4hSoexDLxtxLzU5esFTyA6MstnteykRy&X-Amz-Signature=31e1fac4ff5fa236762a6021ab3857afc9fe0b32fe96661448673fe57d8e1ae3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNND46C%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDHMbDNtiEYHuc2pqEPXNLvTY1aIwEfqkeXD%2F5PYKH7KQIhAKQKeDTxguocSfP4OLJeajzEMR39q0%2BL89AtYIRO11nDKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygpaf4ZkShzcQndxwq3AOpM%2BTzPDKhZheqfByRisgVL%2BNBMKs9oq7fOirIAYPrluJPJeHUdB%2FV3TNOccyLoLaK1zWRGwkeaEq6vkK05aTVSmhNAWa8SQlAQqn0PtJgIhdgobIBcVnVHi3nTiYTVHo4jGmYZc7WK87vrka3%2BugddeNBLFjlqZM8%2FjrpYnJIjHVKg6VwD2BxGHHeNXMb6V0RV88djZ%2Fpa73EBEpcOz5ksBRgL%2Fb2Z0UT%2BFLkATn7zSvyhhH%2FSyL0mXhZwjUvZUxvs6Fn1Xn8KC1onLEf%2Bg%2BG2WOybpLlt7rvvcOxexHNsxj7E5qeH%2BH0SeoUuSR5FJuRkIQzDsh5HIsVjebysrelTYXzcbdd1KJem8TOrd6eZnAgE9aaNJ1DJLjcG11Zlze4LsWgVONdoNtL9lQBpPzDSmOTWRk%2F9bLpTfDL4W8uAunub6%2F%2Bhxp1cwoFizgwn0a7rcz3ZwfGmZaFxxKOSy5IO%2BF6jrLQgDH%2FLfK0I3YpLJ%2FRCt4iQMMRwhNf%2BM7rwAxE4YApOKMcb9S8lP%2BskK9BDu1TmH%2Ff1sW2c8usZZ%2Bn5PFUSvPwkOl96VKa2ZvdrdfDZz%2BLPZ4B4gkgEeADWgdUVl3%2BM8Q83LFhFZvJFHf9mQaB0etXSGsDGgO%2BqTCP29O9BjqkAQvrQYqfRNAAfOI%2FnCNB883sEEsbjl2VApJzjlf28OTTdZLa3UJ3eow%2Bc8Nmo5%2BbLr3C9pJtvYFr4P9H2OBHmgcZBfiA2N43u4z1HsSnHvSjfbJskt75uLngbIxbZQX4TspdF5Wwo%2F6wwu%2FIsqmJLBEa4za%2BjY4UIKh1fMJVNwhM0Tc9%2FId%2Bw2WqZ3ST4hSoexDLxtxLzU5esFTyA6MstnteykRy&X-Amz-Signature=d1805a72cf95b50fd0a78c14169f210786bafca868d004852301b009c4f1ca0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNND46C%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDHMbDNtiEYHuc2pqEPXNLvTY1aIwEfqkeXD%2F5PYKH7KQIhAKQKeDTxguocSfP4OLJeajzEMR39q0%2BL89AtYIRO11nDKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygpaf4ZkShzcQndxwq3AOpM%2BTzPDKhZheqfByRisgVL%2BNBMKs9oq7fOirIAYPrluJPJeHUdB%2FV3TNOccyLoLaK1zWRGwkeaEq6vkK05aTVSmhNAWa8SQlAQqn0PtJgIhdgobIBcVnVHi3nTiYTVHo4jGmYZc7WK87vrka3%2BugddeNBLFjlqZM8%2FjrpYnJIjHVKg6VwD2BxGHHeNXMb6V0RV88djZ%2Fpa73EBEpcOz5ksBRgL%2Fb2Z0UT%2BFLkATn7zSvyhhH%2FSyL0mXhZwjUvZUxvs6Fn1Xn8KC1onLEf%2Bg%2BG2WOybpLlt7rvvcOxexHNsxj7E5qeH%2BH0SeoUuSR5FJuRkIQzDsh5HIsVjebysrelTYXzcbdd1KJem8TOrd6eZnAgE9aaNJ1DJLjcG11Zlze4LsWgVONdoNtL9lQBpPzDSmOTWRk%2F9bLpTfDL4W8uAunub6%2F%2Bhxp1cwoFizgwn0a7rcz3ZwfGmZaFxxKOSy5IO%2BF6jrLQgDH%2FLfK0I3YpLJ%2FRCt4iQMMRwhNf%2BM7rwAxE4YApOKMcb9S8lP%2BskK9BDu1TmH%2Ff1sW2c8usZZ%2Bn5PFUSvPwkOl96VKa2ZvdrdfDZz%2BLPZ4B4gkgEeADWgdUVl3%2BM8Q83LFhFZvJFHf9mQaB0etXSGsDGgO%2BqTCP29O9BjqkAQvrQYqfRNAAfOI%2FnCNB883sEEsbjl2VApJzjlf28OTTdZLa3UJ3eow%2Bc8Nmo5%2BbLr3C9pJtvYFr4P9H2OBHmgcZBfiA2N43u4z1HsSnHvSjfbJskt75uLngbIxbZQX4TspdF5Wwo%2F6wwu%2FIsqmJLBEa4za%2BjY4UIKh1fMJVNwhM0Tc9%2FId%2Bw2WqZ3ST4hSoexDLxtxLzU5esFTyA6MstnteykRy&X-Amz-Signature=3fee5dfa829e364ce2b11213ee5814cdc8d6b27526659e6b6659857913f7b44f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNND46C%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDHMbDNtiEYHuc2pqEPXNLvTY1aIwEfqkeXD%2F5PYKH7KQIhAKQKeDTxguocSfP4OLJeajzEMR39q0%2BL89AtYIRO11nDKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygpaf4ZkShzcQndxwq3AOpM%2BTzPDKhZheqfByRisgVL%2BNBMKs9oq7fOirIAYPrluJPJeHUdB%2FV3TNOccyLoLaK1zWRGwkeaEq6vkK05aTVSmhNAWa8SQlAQqn0PtJgIhdgobIBcVnVHi3nTiYTVHo4jGmYZc7WK87vrka3%2BugddeNBLFjlqZM8%2FjrpYnJIjHVKg6VwD2BxGHHeNXMb6V0RV88djZ%2Fpa73EBEpcOz5ksBRgL%2Fb2Z0UT%2BFLkATn7zSvyhhH%2FSyL0mXhZwjUvZUxvs6Fn1Xn8KC1onLEf%2Bg%2BG2WOybpLlt7rvvcOxexHNsxj7E5qeH%2BH0SeoUuSR5FJuRkIQzDsh5HIsVjebysrelTYXzcbdd1KJem8TOrd6eZnAgE9aaNJ1DJLjcG11Zlze4LsWgVONdoNtL9lQBpPzDSmOTWRk%2F9bLpTfDL4W8uAunub6%2F%2Bhxp1cwoFizgwn0a7rcz3ZwfGmZaFxxKOSy5IO%2BF6jrLQgDH%2FLfK0I3YpLJ%2FRCt4iQMMRwhNf%2BM7rwAxE4YApOKMcb9S8lP%2BskK9BDu1TmH%2Ff1sW2c8usZZ%2Bn5PFUSvPwkOl96VKa2ZvdrdfDZz%2BLPZ4B4gkgEeADWgdUVl3%2BM8Q83LFhFZvJFHf9mQaB0etXSGsDGgO%2BqTCP29O9BjqkAQvrQYqfRNAAfOI%2FnCNB883sEEsbjl2VApJzjlf28OTTdZLa3UJ3eow%2Bc8Nmo5%2BbLr3C9pJtvYFr4P9H2OBHmgcZBfiA2N43u4z1HsSnHvSjfbJskt75uLngbIxbZQX4TspdF5Wwo%2F6wwu%2FIsqmJLBEa4za%2BjY4UIKh1fMJVNwhM0Tc9%2FId%2Bw2WqZ3ST4hSoexDLxtxLzU5esFTyA6MstnteykRy&X-Amz-Signature=80a90fab3cad5d25fe4be33a68b002442940b68f8dfb2733a8df579f579b4dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNND46C%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDHMbDNtiEYHuc2pqEPXNLvTY1aIwEfqkeXD%2F5PYKH7KQIhAKQKeDTxguocSfP4OLJeajzEMR39q0%2BL89AtYIRO11nDKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygpaf4ZkShzcQndxwq3AOpM%2BTzPDKhZheqfByRisgVL%2BNBMKs9oq7fOirIAYPrluJPJeHUdB%2FV3TNOccyLoLaK1zWRGwkeaEq6vkK05aTVSmhNAWa8SQlAQqn0PtJgIhdgobIBcVnVHi3nTiYTVHo4jGmYZc7WK87vrka3%2BugddeNBLFjlqZM8%2FjrpYnJIjHVKg6VwD2BxGHHeNXMb6V0RV88djZ%2Fpa73EBEpcOz5ksBRgL%2Fb2Z0UT%2BFLkATn7zSvyhhH%2FSyL0mXhZwjUvZUxvs6Fn1Xn8KC1onLEf%2Bg%2BG2WOybpLlt7rvvcOxexHNsxj7E5qeH%2BH0SeoUuSR5FJuRkIQzDsh5HIsVjebysrelTYXzcbdd1KJem8TOrd6eZnAgE9aaNJ1DJLjcG11Zlze4LsWgVONdoNtL9lQBpPzDSmOTWRk%2F9bLpTfDL4W8uAunub6%2F%2Bhxp1cwoFizgwn0a7rcz3ZwfGmZaFxxKOSy5IO%2BF6jrLQgDH%2FLfK0I3YpLJ%2FRCt4iQMMRwhNf%2BM7rwAxE4YApOKMcb9S8lP%2BskK9BDu1TmH%2Ff1sW2c8usZZ%2Bn5PFUSvPwkOl96VKa2ZvdrdfDZz%2BLPZ4B4gkgEeADWgdUVl3%2BM8Q83LFhFZvJFHf9mQaB0etXSGsDGgO%2BqTCP29O9BjqkAQvrQYqfRNAAfOI%2FnCNB883sEEsbjl2VApJzjlf28OTTdZLa3UJ3eow%2Bc8Nmo5%2BbLr3C9pJtvYFr4P9H2OBHmgcZBfiA2N43u4z1HsSnHvSjfbJskt75uLngbIxbZQX4TspdF5Wwo%2F6wwu%2FIsqmJLBEa4za%2BjY4UIKh1fMJVNwhM0Tc9%2FId%2Bw2WqZ3ST4hSoexDLxtxLzU5esFTyA6MstnteykRy&X-Amz-Signature=c1810a6b92eafd5ef8fed1c1f5878a9a8731ed17d4c8dca701d0e4fa8e903b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNND46C%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDHMbDNtiEYHuc2pqEPXNLvTY1aIwEfqkeXD%2F5PYKH7KQIhAKQKeDTxguocSfP4OLJeajzEMR39q0%2BL89AtYIRO11nDKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygpaf4ZkShzcQndxwq3AOpM%2BTzPDKhZheqfByRisgVL%2BNBMKs9oq7fOirIAYPrluJPJeHUdB%2FV3TNOccyLoLaK1zWRGwkeaEq6vkK05aTVSmhNAWa8SQlAQqn0PtJgIhdgobIBcVnVHi3nTiYTVHo4jGmYZc7WK87vrka3%2BugddeNBLFjlqZM8%2FjrpYnJIjHVKg6VwD2BxGHHeNXMb6V0RV88djZ%2Fpa73EBEpcOz5ksBRgL%2Fb2Z0UT%2BFLkATn7zSvyhhH%2FSyL0mXhZwjUvZUxvs6Fn1Xn8KC1onLEf%2Bg%2BG2WOybpLlt7rvvcOxexHNsxj7E5qeH%2BH0SeoUuSR5FJuRkIQzDsh5HIsVjebysrelTYXzcbdd1KJem8TOrd6eZnAgE9aaNJ1DJLjcG11Zlze4LsWgVONdoNtL9lQBpPzDSmOTWRk%2F9bLpTfDL4W8uAunub6%2F%2Bhxp1cwoFizgwn0a7rcz3ZwfGmZaFxxKOSy5IO%2BF6jrLQgDH%2FLfK0I3YpLJ%2FRCt4iQMMRwhNf%2BM7rwAxE4YApOKMcb9S8lP%2BskK9BDu1TmH%2Ff1sW2c8usZZ%2Bn5PFUSvPwkOl96VKa2ZvdrdfDZz%2BLPZ4B4gkgEeADWgdUVl3%2BM8Q83LFhFZvJFHf9mQaB0etXSGsDGgO%2BqTCP29O9BjqkAQvrQYqfRNAAfOI%2FnCNB883sEEsbjl2VApJzjlf28OTTdZLa3UJ3eow%2Bc8Nmo5%2BbLr3C9pJtvYFr4P9H2OBHmgcZBfiA2N43u4z1HsSnHvSjfbJskt75uLngbIxbZQX4TspdF5Wwo%2F6wwu%2FIsqmJLBEa4za%2BjY4UIKh1fMJVNwhM0Tc9%2FId%2Bw2WqZ3ST4hSoexDLxtxLzU5esFTyA6MstnteykRy&X-Amz-Signature=21aa94186ff6be2d99d0d9f32408df51b5c1014cb1bc24d8ef257e47ee9d40e3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNND46C%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDHMbDNtiEYHuc2pqEPXNLvTY1aIwEfqkeXD%2F5PYKH7KQIhAKQKeDTxguocSfP4OLJeajzEMR39q0%2BL89AtYIRO11nDKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygpaf4ZkShzcQndxwq3AOpM%2BTzPDKhZheqfByRisgVL%2BNBMKs9oq7fOirIAYPrluJPJeHUdB%2FV3TNOccyLoLaK1zWRGwkeaEq6vkK05aTVSmhNAWa8SQlAQqn0PtJgIhdgobIBcVnVHi3nTiYTVHo4jGmYZc7WK87vrka3%2BugddeNBLFjlqZM8%2FjrpYnJIjHVKg6VwD2BxGHHeNXMb6V0RV88djZ%2Fpa73EBEpcOz5ksBRgL%2Fb2Z0UT%2BFLkATn7zSvyhhH%2FSyL0mXhZwjUvZUxvs6Fn1Xn8KC1onLEf%2Bg%2BG2WOybpLlt7rvvcOxexHNsxj7E5qeH%2BH0SeoUuSR5FJuRkIQzDsh5HIsVjebysrelTYXzcbdd1KJem8TOrd6eZnAgE9aaNJ1DJLjcG11Zlze4LsWgVONdoNtL9lQBpPzDSmOTWRk%2F9bLpTfDL4W8uAunub6%2F%2Bhxp1cwoFizgwn0a7rcz3ZwfGmZaFxxKOSy5IO%2BF6jrLQgDH%2FLfK0I3YpLJ%2FRCt4iQMMRwhNf%2BM7rwAxE4YApOKMcb9S8lP%2BskK9BDu1TmH%2Ff1sW2c8usZZ%2Bn5PFUSvPwkOl96VKa2ZvdrdfDZz%2BLPZ4B4gkgEeADWgdUVl3%2BM8Q83LFhFZvJFHf9mQaB0etXSGsDGgO%2BqTCP29O9BjqkAQvrQYqfRNAAfOI%2FnCNB883sEEsbjl2VApJzjlf28OTTdZLa3UJ3eow%2Bc8Nmo5%2BbLr3C9pJtvYFr4P9H2OBHmgcZBfiA2N43u4z1HsSnHvSjfbJskt75uLngbIxbZQX4TspdF5Wwo%2F6wwu%2FIsqmJLBEa4za%2BjY4UIKh1fMJVNwhM0Tc9%2FId%2Bw2WqZ3ST4hSoexDLxtxLzU5esFTyA6MstnteykRy&X-Amz-Signature=a986eddfe061d8af1a92139cb741602351afb5cd5277a5f582729f54842a1bff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
