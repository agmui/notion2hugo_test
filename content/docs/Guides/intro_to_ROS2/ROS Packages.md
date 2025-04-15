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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWVH7AH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuKYTCkwGhWAY%2BVFrM5OZnycMiwFQNlTO3vCTp1Ob15gIhAOivyX4B2Nlt99evowZxc%2Fd2wGULkwZDTggvAtipDwtDKv8DCDQQABoMNjM3NDIzMTgzODA1Igz9cMMgazRuh9X5t5Uq3AM7I1xBvrlIAwEpyvggRmrN1WHjDi9%2BQv2bgkAhHgUrif5K9wUPP6u2ce9rYf2yVQN8Ra3PXqIzzDi%2FSFK3gMESFY4yBc27VZrnvsYmD7EVuDjmlPMKDyef%2Fo6PZB9ghvcBok%2F79t7lmD7H9%2BggUbuk9jRRfHwPypgzFSq76voRE8rulVYOubU6CniRxRZT9wXC91K2QIL77ZdLdjrJTeisRDWm3kkTodvmVfGj4zZ%2BhvxeQNnfBrnInUFnl5V8M1x6LEzVFhAoqi%2FrFBJaZm7CbZ0StURhlNhW0QsFFJJbZdWTw%2FTn8a4RS9OrYB6eDGw%2FvsXwAmP9xN5pDBbrU%2B5aArLqI3jDycIkD5VHoayk1N7LvjlnJgYie43MckD9THoGjPrD3mpdEKTqqj6VO3EtDsYPUnI1WaoMTa%2B6UcZnbACBbBOENj2zfyYEYI5Rtrxv7pfyJlLyGwuIJ5q1M5w4H7pqrRyGScR8tqEKFVQ55s6FPGlCQ9JMo8xFbSnBDitOo4taDmUC9E9D0UopNWCLvQ4SG%2BmIxtwOJ5Awwiipg4N9vji5ZWhXEIT%2BC%2Fs4mvq%2FWCLES15mHjfbKg9mrA5BHQrzD6xWPcFVJXoj5CupFdIYpgoPuktl6Wv8vDD91fq%2FBjqkAaTvpc0WVALtDuc%2F09CJmYDJv8r4U2mSPrzGH3VNqfwOMAJQdri4eXVkhPndqS5jQ%2FUWETmG%2B3oXKSGzeIjBt3HUtEdszDQlYRnHj%2F0cilNgkyQvliMN0dP2kUfuUsfOmcy2eekzRPtaleB3%2BK9qND7TEpQfcj2mo%2B%2BM21vlVUQQw5p3kEaS7Y65ESiksEEkbDbtOUwEQuVtbjrtIrJ%2BQYpK4rDX&X-Amz-Signature=18b2effedc7a14e8b246f19eb7632fc97e67850b50bd15fd49ab0ecdb3995072&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWVH7AH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuKYTCkwGhWAY%2BVFrM5OZnycMiwFQNlTO3vCTp1Ob15gIhAOivyX4B2Nlt99evowZxc%2Fd2wGULkwZDTggvAtipDwtDKv8DCDQQABoMNjM3NDIzMTgzODA1Igz9cMMgazRuh9X5t5Uq3AM7I1xBvrlIAwEpyvggRmrN1WHjDi9%2BQv2bgkAhHgUrif5K9wUPP6u2ce9rYf2yVQN8Ra3PXqIzzDi%2FSFK3gMESFY4yBc27VZrnvsYmD7EVuDjmlPMKDyef%2Fo6PZB9ghvcBok%2F79t7lmD7H9%2BggUbuk9jRRfHwPypgzFSq76voRE8rulVYOubU6CniRxRZT9wXC91K2QIL77ZdLdjrJTeisRDWm3kkTodvmVfGj4zZ%2BhvxeQNnfBrnInUFnl5V8M1x6LEzVFhAoqi%2FrFBJaZm7CbZ0StURhlNhW0QsFFJJbZdWTw%2FTn8a4RS9OrYB6eDGw%2FvsXwAmP9xN5pDBbrU%2B5aArLqI3jDycIkD5VHoayk1N7LvjlnJgYie43MckD9THoGjPrD3mpdEKTqqj6VO3EtDsYPUnI1WaoMTa%2B6UcZnbACBbBOENj2zfyYEYI5Rtrxv7pfyJlLyGwuIJ5q1M5w4H7pqrRyGScR8tqEKFVQ55s6FPGlCQ9JMo8xFbSnBDitOo4taDmUC9E9D0UopNWCLvQ4SG%2BmIxtwOJ5Awwiipg4N9vji5ZWhXEIT%2BC%2Fs4mvq%2FWCLES15mHjfbKg9mrA5BHQrzD6xWPcFVJXoj5CupFdIYpgoPuktl6Wv8vDD91fq%2FBjqkAaTvpc0WVALtDuc%2F09CJmYDJv8r4U2mSPrzGH3VNqfwOMAJQdri4eXVkhPndqS5jQ%2FUWETmG%2B3oXKSGzeIjBt3HUtEdszDQlYRnHj%2F0cilNgkyQvliMN0dP2kUfuUsfOmcy2eekzRPtaleB3%2BK9qND7TEpQfcj2mo%2B%2BM21vlVUQQw5p3kEaS7Y65ESiksEEkbDbtOUwEQuVtbjrtIrJ%2BQYpK4rDX&X-Amz-Signature=dad67ca09fe24e62ccd66fbb549ccb840c004b059ae8edd7b5caa7f8c538afa1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWVH7AH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuKYTCkwGhWAY%2BVFrM5OZnycMiwFQNlTO3vCTp1Ob15gIhAOivyX4B2Nlt99evowZxc%2Fd2wGULkwZDTggvAtipDwtDKv8DCDQQABoMNjM3NDIzMTgzODA1Igz9cMMgazRuh9X5t5Uq3AM7I1xBvrlIAwEpyvggRmrN1WHjDi9%2BQv2bgkAhHgUrif5K9wUPP6u2ce9rYf2yVQN8Ra3PXqIzzDi%2FSFK3gMESFY4yBc27VZrnvsYmD7EVuDjmlPMKDyef%2Fo6PZB9ghvcBok%2F79t7lmD7H9%2BggUbuk9jRRfHwPypgzFSq76voRE8rulVYOubU6CniRxRZT9wXC91K2QIL77ZdLdjrJTeisRDWm3kkTodvmVfGj4zZ%2BhvxeQNnfBrnInUFnl5V8M1x6LEzVFhAoqi%2FrFBJaZm7CbZ0StURhlNhW0QsFFJJbZdWTw%2FTn8a4RS9OrYB6eDGw%2FvsXwAmP9xN5pDBbrU%2B5aArLqI3jDycIkD5VHoayk1N7LvjlnJgYie43MckD9THoGjPrD3mpdEKTqqj6VO3EtDsYPUnI1WaoMTa%2B6UcZnbACBbBOENj2zfyYEYI5Rtrxv7pfyJlLyGwuIJ5q1M5w4H7pqrRyGScR8tqEKFVQ55s6FPGlCQ9JMo8xFbSnBDitOo4taDmUC9E9D0UopNWCLvQ4SG%2BmIxtwOJ5Awwiipg4N9vji5ZWhXEIT%2BC%2Fs4mvq%2FWCLES15mHjfbKg9mrA5BHQrzD6xWPcFVJXoj5CupFdIYpgoPuktl6Wv8vDD91fq%2FBjqkAaTvpc0WVALtDuc%2F09CJmYDJv8r4U2mSPrzGH3VNqfwOMAJQdri4eXVkhPndqS5jQ%2FUWETmG%2B3oXKSGzeIjBt3HUtEdszDQlYRnHj%2F0cilNgkyQvliMN0dP2kUfuUsfOmcy2eekzRPtaleB3%2BK9qND7TEpQfcj2mo%2B%2BM21vlVUQQw5p3kEaS7Y65ESiksEEkbDbtOUwEQuVtbjrtIrJ%2BQYpK4rDX&X-Amz-Signature=77b1fef4e2bf76244c2ecc5548e2e38c6fd6406e6193e4da5004c4a6392b1deb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWVH7AH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuKYTCkwGhWAY%2BVFrM5OZnycMiwFQNlTO3vCTp1Ob15gIhAOivyX4B2Nlt99evowZxc%2Fd2wGULkwZDTggvAtipDwtDKv8DCDQQABoMNjM3NDIzMTgzODA1Igz9cMMgazRuh9X5t5Uq3AM7I1xBvrlIAwEpyvggRmrN1WHjDi9%2BQv2bgkAhHgUrif5K9wUPP6u2ce9rYf2yVQN8Ra3PXqIzzDi%2FSFK3gMESFY4yBc27VZrnvsYmD7EVuDjmlPMKDyef%2Fo6PZB9ghvcBok%2F79t7lmD7H9%2BggUbuk9jRRfHwPypgzFSq76voRE8rulVYOubU6CniRxRZT9wXC91K2QIL77ZdLdjrJTeisRDWm3kkTodvmVfGj4zZ%2BhvxeQNnfBrnInUFnl5V8M1x6LEzVFhAoqi%2FrFBJaZm7CbZ0StURhlNhW0QsFFJJbZdWTw%2FTn8a4RS9OrYB6eDGw%2FvsXwAmP9xN5pDBbrU%2B5aArLqI3jDycIkD5VHoayk1N7LvjlnJgYie43MckD9THoGjPrD3mpdEKTqqj6VO3EtDsYPUnI1WaoMTa%2B6UcZnbACBbBOENj2zfyYEYI5Rtrxv7pfyJlLyGwuIJ5q1M5w4H7pqrRyGScR8tqEKFVQ55s6FPGlCQ9JMo8xFbSnBDitOo4taDmUC9E9D0UopNWCLvQ4SG%2BmIxtwOJ5Awwiipg4N9vji5ZWhXEIT%2BC%2Fs4mvq%2FWCLES15mHjfbKg9mrA5BHQrzD6xWPcFVJXoj5CupFdIYpgoPuktl6Wv8vDD91fq%2FBjqkAaTvpc0WVALtDuc%2F09CJmYDJv8r4U2mSPrzGH3VNqfwOMAJQdri4eXVkhPndqS5jQ%2FUWETmG%2B3oXKSGzeIjBt3HUtEdszDQlYRnHj%2F0cilNgkyQvliMN0dP2kUfuUsfOmcy2eekzRPtaleB3%2BK9qND7TEpQfcj2mo%2B%2BM21vlVUQQw5p3kEaS7Y65ESiksEEkbDbtOUwEQuVtbjrtIrJ%2BQYpK4rDX&X-Amz-Signature=9c8d57085c437a0372a9574c5a2c627fcfd4381e96c6830805744548514f3ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWVH7AH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuKYTCkwGhWAY%2BVFrM5OZnycMiwFQNlTO3vCTp1Ob15gIhAOivyX4B2Nlt99evowZxc%2Fd2wGULkwZDTggvAtipDwtDKv8DCDQQABoMNjM3NDIzMTgzODA1Igz9cMMgazRuh9X5t5Uq3AM7I1xBvrlIAwEpyvggRmrN1WHjDi9%2BQv2bgkAhHgUrif5K9wUPP6u2ce9rYf2yVQN8Ra3PXqIzzDi%2FSFK3gMESFY4yBc27VZrnvsYmD7EVuDjmlPMKDyef%2Fo6PZB9ghvcBok%2F79t7lmD7H9%2BggUbuk9jRRfHwPypgzFSq76voRE8rulVYOubU6CniRxRZT9wXC91K2QIL77ZdLdjrJTeisRDWm3kkTodvmVfGj4zZ%2BhvxeQNnfBrnInUFnl5V8M1x6LEzVFhAoqi%2FrFBJaZm7CbZ0StURhlNhW0QsFFJJbZdWTw%2FTn8a4RS9OrYB6eDGw%2FvsXwAmP9xN5pDBbrU%2B5aArLqI3jDycIkD5VHoayk1N7LvjlnJgYie43MckD9THoGjPrD3mpdEKTqqj6VO3EtDsYPUnI1WaoMTa%2B6UcZnbACBbBOENj2zfyYEYI5Rtrxv7pfyJlLyGwuIJ5q1M5w4H7pqrRyGScR8tqEKFVQ55s6FPGlCQ9JMo8xFbSnBDitOo4taDmUC9E9D0UopNWCLvQ4SG%2BmIxtwOJ5Awwiipg4N9vji5ZWhXEIT%2BC%2Fs4mvq%2FWCLES15mHjfbKg9mrA5BHQrzD6xWPcFVJXoj5CupFdIYpgoPuktl6Wv8vDD91fq%2FBjqkAaTvpc0WVALtDuc%2F09CJmYDJv8r4U2mSPrzGH3VNqfwOMAJQdri4eXVkhPndqS5jQ%2FUWETmG%2B3oXKSGzeIjBt3HUtEdszDQlYRnHj%2F0cilNgkyQvliMN0dP2kUfuUsfOmcy2eekzRPtaleB3%2BK9qND7TEpQfcj2mo%2B%2BM21vlVUQQw5p3kEaS7Y65ESiksEEkbDbtOUwEQuVtbjrtIrJ%2BQYpK4rDX&X-Amz-Signature=6ce3cdd7485998e00537254f42bc6c5fe9048fe2eee9b618c6cc0e1129698269&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWVH7AH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuKYTCkwGhWAY%2BVFrM5OZnycMiwFQNlTO3vCTp1Ob15gIhAOivyX4B2Nlt99evowZxc%2Fd2wGULkwZDTggvAtipDwtDKv8DCDQQABoMNjM3NDIzMTgzODA1Igz9cMMgazRuh9X5t5Uq3AM7I1xBvrlIAwEpyvggRmrN1WHjDi9%2BQv2bgkAhHgUrif5K9wUPP6u2ce9rYf2yVQN8Ra3PXqIzzDi%2FSFK3gMESFY4yBc27VZrnvsYmD7EVuDjmlPMKDyef%2Fo6PZB9ghvcBok%2F79t7lmD7H9%2BggUbuk9jRRfHwPypgzFSq76voRE8rulVYOubU6CniRxRZT9wXC91K2QIL77ZdLdjrJTeisRDWm3kkTodvmVfGj4zZ%2BhvxeQNnfBrnInUFnl5V8M1x6LEzVFhAoqi%2FrFBJaZm7CbZ0StURhlNhW0QsFFJJbZdWTw%2FTn8a4RS9OrYB6eDGw%2FvsXwAmP9xN5pDBbrU%2B5aArLqI3jDycIkD5VHoayk1N7LvjlnJgYie43MckD9THoGjPrD3mpdEKTqqj6VO3EtDsYPUnI1WaoMTa%2B6UcZnbACBbBOENj2zfyYEYI5Rtrxv7pfyJlLyGwuIJ5q1M5w4H7pqrRyGScR8tqEKFVQ55s6FPGlCQ9JMo8xFbSnBDitOo4taDmUC9E9D0UopNWCLvQ4SG%2BmIxtwOJ5Awwiipg4N9vji5ZWhXEIT%2BC%2Fs4mvq%2FWCLES15mHjfbKg9mrA5BHQrzD6xWPcFVJXoj5CupFdIYpgoPuktl6Wv8vDD91fq%2FBjqkAaTvpc0WVALtDuc%2F09CJmYDJv8r4U2mSPrzGH3VNqfwOMAJQdri4eXVkhPndqS5jQ%2FUWETmG%2B3oXKSGzeIjBt3HUtEdszDQlYRnHj%2F0cilNgkyQvliMN0dP2kUfuUsfOmcy2eekzRPtaleB3%2BK9qND7TEpQfcj2mo%2B%2BM21vlVUQQw5p3kEaS7Y65ESiksEEkbDbtOUwEQuVtbjrtIrJ%2BQYpK4rDX&X-Amz-Signature=16945d194b0ee0c7289e337e32f4b89bcfec38400dd55766650d60504001a2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWVH7AH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuKYTCkwGhWAY%2BVFrM5OZnycMiwFQNlTO3vCTp1Ob15gIhAOivyX4B2Nlt99evowZxc%2Fd2wGULkwZDTggvAtipDwtDKv8DCDQQABoMNjM3NDIzMTgzODA1Igz9cMMgazRuh9X5t5Uq3AM7I1xBvrlIAwEpyvggRmrN1WHjDi9%2BQv2bgkAhHgUrif5K9wUPP6u2ce9rYf2yVQN8Ra3PXqIzzDi%2FSFK3gMESFY4yBc27VZrnvsYmD7EVuDjmlPMKDyef%2Fo6PZB9ghvcBok%2F79t7lmD7H9%2BggUbuk9jRRfHwPypgzFSq76voRE8rulVYOubU6CniRxRZT9wXC91K2QIL77ZdLdjrJTeisRDWm3kkTodvmVfGj4zZ%2BhvxeQNnfBrnInUFnl5V8M1x6LEzVFhAoqi%2FrFBJaZm7CbZ0StURhlNhW0QsFFJJbZdWTw%2FTn8a4RS9OrYB6eDGw%2FvsXwAmP9xN5pDBbrU%2B5aArLqI3jDycIkD5VHoayk1N7LvjlnJgYie43MckD9THoGjPrD3mpdEKTqqj6VO3EtDsYPUnI1WaoMTa%2B6UcZnbACBbBOENj2zfyYEYI5Rtrxv7pfyJlLyGwuIJ5q1M5w4H7pqrRyGScR8tqEKFVQ55s6FPGlCQ9JMo8xFbSnBDitOo4taDmUC9E9D0UopNWCLvQ4SG%2BmIxtwOJ5Awwiipg4N9vji5ZWhXEIT%2BC%2Fs4mvq%2FWCLES15mHjfbKg9mrA5BHQrzD6xWPcFVJXoj5CupFdIYpgoPuktl6Wv8vDD91fq%2FBjqkAaTvpc0WVALtDuc%2F09CJmYDJv8r4U2mSPrzGH3VNqfwOMAJQdri4eXVkhPndqS5jQ%2FUWETmG%2B3oXKSGzeIjBt3HUtEdszDQlYRnHj%2F0cilNgkyQvliMN0dP2kUfuUsfOmcy2eekzRPtaleB3%2BK9qND7TEpQfcj2mo%2B%2BM21vlVUQQw5p3kEaS7Y65ESiksEEkbDbtOUwEQuVtbjrtIrJ%2BQYpK4rDX&X-Amz-Signature=c75d0ff302de5ad28b49fb95ae97df14a3c138d34a09e42ca88be179da7d15e1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
