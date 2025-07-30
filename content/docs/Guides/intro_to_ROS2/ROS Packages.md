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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFPH5B3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2B5T0TDWXB7%2FhNKXnD%2FQv1Y9D96%2F4P8%2FhuJO4bFH3KAiARjh5lxEJeB4jxIfnHgnhDl0LaTa7zWRuYF%2FJXYyO56SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu8SUH0iX9rYeSo7tKtwDgq4PMIdINYLuDyfvmtnROdfQ43F2QqOI05GRUbj0JQyMJz7eAHlhjvkOrl%2BUufFc44ZZTIuMbC7ImFbmOHvcM4mBoiNslDMrRyKc5MCgrn7Fixw%2FHNEO4ZAgQzIj1NXkpiXM7yRFKvBUzBRHRElsY2puleDwpIxCxi0E7mSr9xf6Pe1Dt7Wnv6bYDwYpErvkXVZo4FTScEO3ryVwiVhPKRP711WzxSMSxdulFXzNmZDiUQ8taOJtsS37AecbE0FP%2FdpkwaIb28ooAl7u3OyIFmyB4Gs1pKlzlpWFyZpwAWkMrFZ%2FAepI%2BedrmO7uR3A3VSCYDBDn5dFxwcg1DzTaB5BLRJRUuuYNZpOwXMwoh0fEv7CxsbJaWgaJAEFWDpZbF3Pr%2FoZ3Ez9NB%2Fmdbg7o7hrItLr7zx4kQhdbly6EaykDeHPN88F5DO2gkiwBQhsuyCoVABb%2FJki5mkhg3eTwzje7M%2BK%2F0w3K%2F0Czl3VQFVJUZAly1SzO%2BMjIzKVgHWt1forZQA3pJIiNlU%2BQymbG0%2FNgkSvV%2FZQAnCmKd%2BBvvagpO0jgfqlah4U1%2F32b%2Basq%2BzteBtr9oF0HxU31aRPezDRgLNmCz7dfuF5j7QfzkasKMUZhsyT2kIy1VzMwgKOoxAY6pgEy8%2FNSbHfd7LexliJ%2BT%2B%2Fw3mtE%2FeHs0KlFMoWgrDvH4vDAmjQpluDe6yQ9o0RCWg2xvbFtIWelZfqn8U0AVVCnFSEJysojkPyq2%2BR8lknsTbxtYLMao%2BVTB9IyUVE7woJKhx2v9Vzl4YMW7btchDZCpAzTLp78dByMnyYposjvKVPPS9P20KR%2BZAe8uMal1sr1EDBZWNs9NNUGpzgsNxjujF1wTNX9&X-Amz-Signature=f12adf0a0e2a7004ab5634eea05110a5cbe3ff1891946e05a12b8d0eb65fd9ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFPH5B3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2B5T0TDWXB7%2FhNKXnD%2FQv1Y9D96%2F4P8%2FhuJO4bFH3KAiARjh5lxEJeB4jxIfnHgnhDl0LaTa7zWRuYF%2FJXYyO56SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu8SUH0iX9rYeSo7tKtwDgq4PMIdINYLuDyfvmtnROdfQ43F2QqOI05GRUbj0JQyMJz7eAHlhjvkOrl%2BUufFc44ZZTIuMbC7ImFbmOHvcM4mBoiNslDMrRyKc5MCgrn7Fixw%2FHNEO4ZAgQzIj1NXkpiXM7yRFKvBUzBRHRElsY2puleDwpIxCxi0E7mSr9xf6Pe1Dt7Wnv6bYDwYpErvkXVZo4FTScEO3ryVwiVhPKRP711WzxSMSxdulFXzNmZDiUQ8taOJtsS37AecbE0FP%2FdpkwaIb28ooAl7u3OyIFmyB4Gs1pKlzlpWFyZpwAWkMrFZ%2FAepI%2BedrmO7uR3A3VSCYDBDn5dFxwcg1DzTaB5BLRJRUuuYNZpOwXMwoh0fEv7CxsbJaWgaJAEFWDpZbF3Pr%2FoZ3Ez9NB%2Fmdbg7o7hrItLr7zx4kQhdbly6EaykDeHPN88F5DO2gkiwBQhsuyCoVABb%2FJki5mkhg3eTwzje7M%2BK%2F0w3K%2F0Czl3VQFVJUZAly1SzO%2BMjIzKVgHWt1forZQA3pJIiNlU%2BQymbG0%2FNgkSvV%2FZQAnCmKd%2BBvvagpO0jgfqlah4U1%2F32b%2Basq%2BzteBtr9oF0HxU31aRPezDRgLNmCz7dfuF5j7QfzkasKMUZhsyT2kIy1VzMwgKOoxAY6pgEy8%2FNSbHfd7LexliJ%2BT%2B%2Fw3mtE%2FeHs0KlFMoWgrDvH4vDAmjQpluDe6yQ9o0RCWg2xvbFtIWelZfqn8U0AVVCnFSEJysojkPyq2%2BR8lknsTbxtYLMao%2BVTB9IyUVE7woJKhx2v9Vzl4YMW7btchDZCpAzTLp78dByMnyYposjvKVPPS9P20KR%2BZAe8uMal1sr1EDBZWNs9NNUGpzgsNxjujF1wTNX9&X-Amz-Signature=6b1f6a8f2e0c5e078731ee59844510ef82ffb0d6ceaecaa6d9fb1c8937550ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFPH5B3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2B5T0TDWXB7%2FhNKXnD%2FQv1Y9D96%2F4P8%2FhuJO4bFH3KAiARjh5lxEJeB4jxIfnHgnhDl0LaTa7zWRuYF%2FJXYyO56SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu8SUH0iX9rYeSo7tKtwDgq4PMIdINYLuDyfvmtnROdfQ43F2QqOI05GRUbj0JQyMJz7eAHlhjvkOrl%2BUufFc44ZZTIuMbC7ImFbmOHvcM4mBoiNslDMrRyKc5MCgrn7Fixw%2FHNEO4ZAgQzIj1NXkpiXM7yRFKvBUzBRHRElsY2puleDwpIxCxi0E7mSr9xf6Pe1Dt7Wnv6bYDwYpErvkXVZo4FTScEO3ryVwiVhPKRP711WzxSMSxdulFXzNmZDiUQ8taOJtsS37AecbE0FP%2FdpkwaIb28ooAl7u3OyIFmyB4Gs1pKlzlpWFyZpwAWkMrFZ%2FAepI%2BedrmO7uR3A3VSCYDBDn5dFxwcg1DzTaB5BLRJRUuuYNZpOwXMwoh0fEv7CxsbJaWgaJAEFWDpZbF3Pr%2FoZ3Ez9NB%2Fmdbg7o7hrItLr7zx4kQhdbly6EaykDeHPN88F5DO2gkiwBQhsuyCoVABb%2FJki5mkhg3eTwzje7M%2BK%2F0w3K%2F0Czl3VQFVJUZAly1SzO%2BMjIzKVgHWt1forZQA3pJIiNlU%2BQymbG0%2FNgkSvV%2FZQAnCmKd%2BBvvagpO0jgfqlah4U1%2F32b%2Basq%2BzteBtr9oF0HxU31aRPezDRgLNmCz7dfuF5j7QfzkasKMUZhsyT2kIy1VzMwgKOoxAY6pgEy8%2FNSbHfd7LexliJ%2BT%2B%2Fw3mtE%2FeHs0KlFMoWgrDvH4vDAmjQpluDe6yQ9o0RCWg2xvbFtIWelZfqn8U0AVVCnFSEJysojkPyq2%2BR8lknsTbxtYLMao%2BVTB9IyUVE7woJKhx2v9Vzl4YMW7btchDZCpAzTLp78dByMnyYposjvKVPPS9P20KR%2BZAe8uMal1sr1EDBZWNs9NNUGpzgsNxjujF1wTNX9&X-Amz-Signature=c3548e67e8c77c49821107efb506b96e56240306801ad6d65fc84682fef0f6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFPH5B3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2B5T0TDWXB7%2FhNKXnD%2FQv1Y9D96%2F4P8%2FhuJO4bFH3KAiARjh5lxEJeB4jxIfnHgnhDl0LaTa7zWRuYF%2FJXYyO56SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu8SUH0iX9rYeSo7tKtwDgq4PMIdINYLuDyfvmtnROdfQ43F2QqOI05GRUbj0JQyMJz7eAHlhjvkOrl%2BUufFc44ZZTIuMbC7ImFbmOHvcM4mBoiNslDMrRyKc5MCgrn7Fixw%2FHNEO4ZAgQzIj1NXkpiXM7yRFKvBUzBRHRElsY2puleDwpIxCxi0E7mSr9xf6Pe1Dt7Wnv6bYDwYpErvkXVZo4FTScEO3ryVwiVhPKRP711WzxSMSxdulFXzNmZDiUQ8taOJtsS37AecbE0FP%2FdpkwaIb28ooAl7u3OyIFmyB4Gs1pKlzlpWFyZpwAWkMrFZ%2FAepI%2BedrmO7uR3A3VSCYDBDn5dFxwcg1DzTaB5BLRJRUuuYNZpOwXMwoh0fEv7CxsbJaWgaJAEFWDpZbF3Pr%2FoZ3Ez9NB%2Fmdbg7o7hrItLr7zx4kQhdbly6EaykDeHPN88F5DO2gkiwBQhsuyCoVABb%2FJki5mkhg3eTwzje7M%2BK%2F0w3K%2F0Czl3VQFVJUZAly1SzO%2BMjIzKVgHWt1forZQA3pJIiNlU%2BQymbG0%2FNgkSvV%2FZQAnCmKd%2BBvvagpO0jgfqlah4U1%2F32b%2Basq%2BzteBtr9oF0HxU31aRPezDRgLNmCz7dfuF5j7QfzkasKMUZhsyT2kIy1VzMwgKOoxAY6pgEy8%2FNSbHfd7LexliJ%2BT%2B%2Fw3mtE%2FeHs0KlFMoWgrDvH4vDAmjQpluDe6yQ9o0RCWg2xvbFtIWelZfqn8U0AVVCnFSEJysojkPyq2%2BR8lknsTbxtYLMao%2BVTB9IyUVE7woJKhx2v9Vzl4YMW7btchDZCpAzTLp78dByMnyYposjvKVPPS9P20KR%2BZAe8uMal1sr1EDBZWNs9NNUGpzgsNxjujF1wTNX9&X-Amz-Signature=674e63ec3e71585e930f1caf5fcc163868c792ceafac6e46ce78db2aa9e9e9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFPH5B3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2B5T0TDWXB7%2FhNKXnD%2FQv1Y9D96%2F4P8%2FhuJO4bFH3KAiARjh5lxEJeB4jxIfnHgnhDl0LaTa7zWRuYF%2FJXYyO56SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu8SUH0iX9rYeSo7tKtwDgq4PMIdINYLuDyfvmtnROdfQ43F2QqOI05GRUbj0JQyMJz7eAHlhjvkOrl%2BUufFc44ZZTIuMbC7ImFbmOHvcM4mBoiNslDMrRyKc5MCgrn7Fixw%2FHNEO4ZAgQzIj1NXkpiXM7yRFKvBUzBRHRElsY2puleDwpIxCxi0E7mSr9xf6Pe1Dt7Wnv6bYDwYpErvkXVZo4FTScEO3ryVwiVhPKRP711WzxSMSxdulFXzNmZDiUQ8taOJtsS37AecbE0FP%2FdpkwaIb28ooAl7u3OyIFmyB4Gs1pKlzlpWFyZpwAWkMrFZ%2FAepI%2BedrmO7uR3A3VSCYDBDn5dFxwcg1DzTaB5BLRJRUuuYNZpOwXMwoh0fEv7CxsbJaWgaJAEFWDpZbF3Pr%2FoZ3Ez9NB%2Fmdbg7o7hrItLr7zx4kQhdbly6EaykDeHPN88F5DO2gkiwBQhsuyCoVABb%2FJki5mkhg3eTwzje7M%2BK%2F0w3K%2F0Czl3VQFVJUZAly1SzO%2BMjIzKVgHWt1forZQA3pJIiNlU%2BQymbG0%2FNgkSvV%2FZQAnCmKd%2BBvvagpO0jgfqlah4U1%2F32b%2Basq%2BzteBtr9oF0HxU31aRPezDRgLNmCz7dfuF5j7QfzkasKMUZhsyT2kIy1VzMwgKOoxAY6pgEy8%2FNSbHfd7LexliJ%2BT%2B%2Fw3mtE%2FeHs0KlFMoWgrDvH4vDAmjQpluDe6yQ9o0RCWg2xvbFtIWelZfqn8U0AVVCnFSEJysojkPyq2%2BR8lknsTbxtYLMao%2BVTB9IyUVE7woJKhx2v9Vzl4YMW7btchDZCpAzTLp78dByMnyYposjvKVPPS9P20KR%2BZAe8uMal1sr1EDBZWNs9NNUGpzgsNxjujF1wTNX9&X-Amz-Signature=6975871e76c76a2d776f13cb0ad059cbd4b6290b6019f4e3339c4d7abd558e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFPH5B3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2B5T0TDWXB7%2FhNKXnD%2FQv1Y9D96%2F4P8%2FhuJO4bFH3KAiARjh5lxEJeB4jxIfnHgnhDl0LaTa7zWRuYF%2FJXYyO56SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu8SUH0iX9rYeSo7tKtwDgq4PMIdINYLuDyfvmtnROdfQ43F2QqOI05GRUbj0JQyMJz7eAHlhjvkOrl%2BUufFc44ZZTIuMbC7ImFbmOHvcM4mBoiNslDMrRyKc5MCgrn7Fixw%2FHNEO4ZAgQzIj1NXkpiXM7yRFKvBUzBRHRElsY2puleDwpIxCxi0E7mSr9xf6Pe1Dt7Wnv6bYDwYpErvkXVZo4FTScEO3ryVwiVhPKRP711WzxSMSxdulFXzNmZDiUQ8taOJtsS37AecbE0FP%2FdpkwaIb28ooAl7u3OyIFmyB4Gs1pKlzlpWFyZpwAWkMrFZ%2FAepI%2BedrmO7uR3A3VSCYDBDn5dFxwcg1DzTaB5BLRJRUuuYNZpOwXMwoh0fEv7CxsbJaWgaJAEFWDpZbF3Pr%2FoZ3Ez9NB%2Fmdbg7o7hrItLr7zx4kQhdbly6EaykDeHPN88F5DO2gkiwBQhsuyCoVABb%2FJki5mkhg3eTwzje7M%2BK%2F0w3K%2F0Czl3VQFVJUZAly1SzO%2BMjIzKVgHWt1forZQA3pJIiNlU%2BQymbG0%2FNgkSvV%2FZQAnCmKd%2BBvvagpO0jgfqlah4U1%2F32b%2Basq%2BzteBtr9oF0HxU31aRPezDRgLNmCz7dfuF5j7QfzkasKMUZhsyT2kIy1VzMwgKOoxAY6pgEy8%2FNSbHfd7LexliJ%2BT%2B%2Fw3mtE%2FeHs0KlFMoWgrDvH4vDAmjQpluDe6yQ9o0RCWg2xvbFtIWelZfqn8U0AVVCnFSEJysojkPyq2%2BR8lknsTbxtYLMao%2BVTB9IyUVE7woJKhx2v9Vzl4YMW7btchDZCpAzTLp78dByMnyYposjvKVPPS9P20KR%2BZAe8uMal1sr1EDBZWNs9NNUGpzgsNxjujF1wTNX9&X-Amz-Signature=a64dc0c1f3d5ce2528163a1eb632a08d69c63da08b4482fc86f3088a10609cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFPH5B3B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2B5T0TDWXB7%2FhNKXnD%2FQv1Y9D96%2F4P8%2FhuJO4bFH3KAiARjh5lxEJeB4jxIfnHgnhDl0LaTa7zWRuYF%2FJXYyO56SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu8SUH0iX9rYeSo7tKtwDgq4PMIdINYLuDyfvmtnROdfQ43F2QqOI05GRUbj0JQyMJz7eAHlhjvkOrl%2BUufFc44ZZTIuMbC7ImFbmOHvcM4mBoiNslDMrRyKc5MCgrn7Fixw%2FHNEO4ZAgQzIj1NXkpiXM7yRFKvBUzBRHRElsY2puleDwpIxCxi0E7mSr9xf6Pe1Dt7Wnv6bYDwYpErvkXVZo4FTScEO3ryVwiVhPKRP711WzxSMSxdulFXzNmZDiUQ8taOJtsS37AecbE0FP%2FdpkwaIb28ooAl7u3OyIFmyB4Gs1pKlzlpWFyZpwAWkMrFZ%2FAepI%2BedrmO7uR3A3VSCYDBDn5dFxwcg1DzTaB5BLRJRUuuYNZpOwXMwoh0fEv7CxsbJaWgaJAEFWDpZbF3Pr%2FoZ3Ez9NB%2Fmdbg7o7hrItLr7zx4kQhdbly6EaykDeHPN88F5DO2gkiwBQhsuyCoVABb%2FJki5mkhg3eTwzje7M%2BK%2F0w3K%2F0Czl3VQFVJUZAly1SzO%2BMjIzKVgHWt1forZQA3pJIiNlU%2BQymbG0%2FNgkSvV%2FZQAnCmKd%2BBvvagpO0jgfqlah4U1%2F32b%2Basq%2BzteBtr9oF0HxU31aRPezDRgLNmCz7dfuF5j7QfzkasKMUZhsyT2kIy1VzMwgKOoxAY6pgEy8%2FNSbHfd7LexliJ%2BT%2B%2Fw3mtE%2FeHs0KlFMoWgrDvH4vDAmjQpluDe6yQ9o0RCWg2xvbFtIWelZfqn8U0AVVCnFSEJysojkPyq2%2BR8lknsTbxtYLMao%2BVTB9IyUVE7woJKhx2v9Vzl4YMW7btchDZCpAzTLp78dByMnyYposjvKVPPS9P20KR%2BZAe8uMal1sr1EDBZWNs9NNUGpzgsNxjujF1wTNX9&X-Amz-Signature=c6f5a82bc3c3900166f43f04af9323533274cb83627499ed6927aceb63023f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
