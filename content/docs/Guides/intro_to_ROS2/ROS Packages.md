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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXAB2I6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC4bd%2FlMupPkT%2BMbh4ClAyRyJ9cph1h%2Foo64YRhrTYDwIgQHjGtBYAPANPjVh5Xb3kuz2ZSzNou7rqnFftMZ%2BRpvkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXcYDC2k%2FP37pFAircA1tG%2BHXbsTTn1jVJ6pQJ58rVwfVTq%2Bab%2BB7kIS4L%2BiZpwc8W2Z3Vuay7XNSpSUsfbzAuKh0F79KOhBZiDYC22AaLosOuxImAnqy5HP2NcexSB%2B9ZrJbfleN6f71YNT2ryCO5mrv2MsQRWc%2Bi%2FIdMpfy6qHjWOJpdKZP4YH0AWCc%2BOAZGOXdXMgF%2BPhxgWA13bA4tifBlc0x4MHugbmt43S2lqPSu4abQwYbokNbhtMBRvdrK95mYKmKAYyuq23AvvM8PLwxnn%2FqamL8s4EzHNdS2X1xIdlnCWaYEoFw0O2qqPJOm4xAEOTCUqlqITc7YHBWdw9Qqi0FTlD6v4XiY6TsLEMZU4%2FUwum8jLRhQ65yaYIplQDzMXuXUhJ5KKo6cVQxwcVmIfJuuj3a5sTOGkeOMOhE%2FIfsyratVzaT8gL2u9mv877pt%2F1Otti1C2gQigjKbz0xPD8HInZ4BSPXktyaGiSL14yYdwNBbekmVF2ZixkwC5ARNC8oI7ULSOQi1JSZqcWBSkUTx9Ry1Ra%2FxGtJ9oYgy2LY5%2Fvx9f4%2F8Tn69KktqxAbJ0K64CdCu58%2BtAB%2BOug9zafAK9T%2BgQq2ZJzJ1ygmgvYTiFwhLYwXm3MkP69zId2hX%2FCDbsm72MMD%2B77wGOqUBy%2F%2FAqMOlcQeb0NRwZMUDduDL3gWARrn%2BfeL4kmOYqO%2BJOxkJ06J4iTkMV3dbjlp%2F%2Fp5EPiBIwpt4sLoZ3lbOMQfNjBuGgzw7TQ7y0oMaHvVTdOVWExhC8UhRjN0gqLduVL0Y3EdH0jj7lhEaTjLCQ3ozOZ%2B5v3TQP6dHObNUWbGs0lx%2FSNYJHfOy4Vzp3UK8j5dPggy9aEOFCuxv4wX956i9uA3X&X-Amz-Signature=bc3d78badfc852190a068e1ca6bf5de5a76f521c02c4a90578fb2921c69bc940&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXAB2I6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC4bd%2FlMupPkT%2BMbh4ClAyRyJ9cph1h%2Foo64YRhrTYDwIgQHjGtBYAPANPjVh5Xb3kuz2ZSzNou7rqnFftMZ%2BRpvkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXcYDC2k%2FP37pFAircA1tG%2BHXbsTTn1jVJ6pQJ58rVwfVTq%2Bab%2BB7kIS4L%2BiZpwc8W2Z3Vuay7XNSpSUsfbzAuKh0F79KOhBZiDYC22AaLosOuxImAnqy5HP2NcexSB%2B9ZrJbfleN6f71YNT2ryCO5mrv2MsQRWc%2Bi%2FIdMpfy6qHjWOJpdKZP4YH0AWCc%2BOAZGOXdXMgF%2BPhxgWA13bA4tifBlc0x4MHugbmt43S2lqPSu4abQwYbokNbhtMBRvdrK95mYKmKAYyuq23AvvM8PLwxnn%2FqamL8s4EzHNdS2X1xIdlnCWaYEoFw0O2qqPJOm4xAEOTCUqlqITc7YHBWdw9Qqi0FTlD6v4XiY6TsLEMZU4%2FUwum8jLRhQ65yaYIplQDzMXuXUhJ5KKo6cVQxwcVmIfJuuj3a5sTOGkeOMOhE%2FIfsyratVzaT8gL2u9mv877pt%2F1Otti1C2gQigjKbz0xPD8HInZ4BSPXktyaGiSL14yYdwNBbekmVF2ZixkwC5ARNC8oI7ULSOQi1JSZqcWBSkUTx9Ry1Ra%2FxGtJ9oYgy2LY5%2Fvx9f4%2F8Tn69KktqxAbJ0K64CdCu58%2BtAB%2BOug9zafAK9T%2BgQq2ZJzJ1ygmgvYTiFwhLYwXm3MkP69zId2hX%2FCDbsm72MMD%2B77wGOqUBy%2F%2FAqMOlcQeb0NRwZMUDduDL3gWARrn%2BfeL4kmOYqO%2BJOxkJ06J4iTkMV3dbjlp%2F%2Fp5EPiBIwpt4sLoZ3lbOMQfNjBuGgzw7TQ7y0oMaHvVTdOVWExhC8UhRjN0gqLduVL0Y3EdH0jj7lhEaTjLCQ3ozOZ%2B5v3TQP6dHObNUWbGs0lx%2FSNYJHfOy4Vzp3UK8j5dPggy9aEOFCuxv4wX956i9uA3X&X-Amz-Signature=1e57b132b36656d815bd884384922307e6fb725192542d91e4d77a401d1de6cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXAB2I6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC4bd%2FlMupPkT%2BMbh4ClAyRyJ9cph1h%2Foo64YRhrTYDwIgQHjGtBYAPANPjVh5Xb3kuz2ZSzNou7rqnFftMZ%2BRpvkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXcYDC2k%2FP37pFAircA1tG%2BHXbsTTn1jVJ6pQJ58rVwfVTq%2Bab%2BB7kIS4L%2BiZpwc8W2Z3Vuay7XNSpSUsfbzAuKh0F79KOhBZiDYC22AaLosOuxImAnqy5HP2NcexSB%2B9ZrJbfleN6f71YNT2ryCO5mrv2MsQRWc%2Bi%2FIdMpfy6qHjWOJpdKZP4YH0AWCc%2BOAZGOXdXMgF%2BPhxgWA13bA4tifBlc0x4MHugbmt43S2lqPSu4abQwYbokNbhtMBRvdrK95mYKmKAYyuq23AvvM8PLwxnn%2FqamL8s4EzHNdS2X1xIdlnCWaYEoFw0O2qqPJOm4xAEOTCUqlqITc7YHBWdw9Qqi0FTlD6v4XiY6TsLEMZU4%2FUwum8jLRhQ65yaYIplQDzMXuXUhJ5KKo6cVQxwcVmIfJuuj3a5sTOGkeOMOhE%2FIfsyratVzaT8gL2u9mv877pt%2F1Otti1C2gQigjKbz0xPD8HInZ4BSPXktyaGiSL14yYdwNBbekmVF2ZixkwC5ARNC8oI7ULSOQi1JSZqcWBSkUTx9Ry1Ra%2FxGtJ9oYgy2LY5%2Fvx9f4%2F8Tn69KktqxAbJ0K64CdCu58%2BtAB%2BOug9zafAK9T%2BgQq2ZJzJ1ygmgvYTiFwhLYwXm3MkP69zId2hX%2FCDbsm72MMD%2B77wGOqUBy%2F%2FAqMOlcQeb0NRwZMUDduDL3gWARrn%2BfeL4kmOYqO%2BJOxkJ06J4iTkMV3dbjlp%2F%2Fp5EPiBIwpt4sLoZ3lbOMQfNjBuGgzw7TQ7y0oMaHvVTdOVWExhC8UhRjN0gqLduVL0Y3EdH0jj7lhEaTjLCQ3ozOZ%2B5v3TQP6dHObNUWbGs0lx%2FSNYJHfOy4Vzp3UK8j5dPggy9aEOFCuxv4wX956i9uA3X&X-Amz-Signature=e270ccbd1c386dad13760a8bdf2c81b548910609a9b8be0290c6db8a5f4be28e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXAB2I6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC4bd%2FlMupPkT%2BMbh4ClAyRyJ9cph1h%2Foo64YRhrTYDwIgQHjGtBYAPANPjVh5Xb3kuz2ZSzNou7rqnFftMZ%2BRpvkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXcYDC2k%2FP37pFAircA1tG%2BHXbsTTn1jVJ6pQJ58rVwfVTq%2Bab%2BB7kIS4L%2BiZpwc8W2Z3Vuay7XNSpSUsfbzAuKh0F79KOhBZiDYC22AaLosOuxImAnqy5HP2NcexSB%2B9ZrJbfleN6f71YNT2ryCO5mrv2MsQRWc%2Bi%2FIdMpfy6qHjWOJpdKZP4YH0AWCc%2BOAZGOXdXMgF%2BPhxgWA13bA4tifBlc0x4MHugbmt43S2lqPSu4abQwYbokNbhtMBRvdrK95mYKmKAYyuq23AvvM8PLwxnn%2FqamL8s4EzHNdS2X1xIdlnCWaYEoFw0O2qqPJOm4xAEOTCUqlqITc7YHBWdw9Qqi0FTlD6v4XiY6TsLEMZU4%2FUwum8jLRhQ65yaYIplQDzMXuXUhJ5KKo6cVQxwcVmIfJuuj3a5sTOGkeOMOhE%2FIfsyratVzaT8gL2u9mv877pt%2F1Otti1C2gQigjKbz0xPD8HInZ4BSPXktyaGiSL14yYdwNBbekmVF2ZixkwC5ARNC8oI7ULSOQi1JSZqcWBSkUTx9Ry1Ra%2FxGtJ9oYgy2LY5%2Fvx9f4%2F8Tn69KktqxAbJ0K64CdCu58%2BtAB%2BOug9zafAK9T%2BgQq2ZJzJ1ygmgvYTiFwhLYwXm3MkP69zId2hX%2FCDbsm72MMD%2B77wGOqUBy%2F%2FAqMOlcQeb0NRwZMUDduDL3gWARrn%2BfeL4kmOYqO%2BJOxkJ06J4iTkMV3dbjlp%2F%2Fp5EPiBIwpt4sLoZ3lbOMQfNjBuGgzw7TQ7y0oMaHvVTdOVWExhC8UhRjN0gqLduVL0Y3EdH0jj7lhEaTjLCQ3ozOZ%2B5v3TQP6dHObNUWbGs0lx%2FSNYJHfOy4Vzp3UK8j5dPggy9aEOFCuxv4wX956i9uA3X&X-Amz-Signature=6768c9b5be2e1546fea0e33becf3834ce45617d81bb831d4a200409cd1fac653&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXAB2I6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC4bd%2FlMupPkT%2BMbh4ClAyRyJ9cph1h%2Foo64YRhrTYDwIgQHjGtBYAPANPjVh5Xb3kuz2ZSzNou7rqnFftMZ%2BRpvkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXcYDC2k%2FP37pFAircA1tG%2BHXbsTTn1jVJ6pQJ58rVwfVTq%2Bab%2BB7kIS4L%2BiZpwc8W2Z3Vuay7XNSpSUsfbzAuKh0F79KOhBZiDYC22AaLosOuxImAnqy5HP2NcexSB%2B9ZrJbfleN6f71YNT2ryCO5mrv2MsQRWc%2Bi%2FIdMpfy6qHjWOJpdKZP4YH0AWCc%2BOAZGOXdXMgF%2BPhxgWA13bA4tifBlc0x4MHugbmt43S2lqPSu4abQwYbokNbhtMBRvdrK95mYKmKAYyuq23AvvM8PLwxnn%2FqamL8s4EzHNdS2X1xIdlnCWaYEoFw0O2qqPJOm4xAEOTCUqlqITc7YHBWdw9Qqi0FTlD6v4XiY6TsLEMZU4%2FUwum8jLRhQ65yaYIplQDzMXuXUhJ5KKo6cVQxwcVmIfJuuj3a5sTOGkeOMOhE%2FIfsyratVzaT8gL2u9mv877pt%2F1Otti1C2gQigjKbz0xPD8HInZ4BSPXktyaGiSL14yYdwNBbekmVF2ZixkwC5ARNC8oI7ULSOQi1JSZqcWBSkUTx9Ry1Ra%2FxGtJ9oYgy2LY5%2Fvx9f4%2F8Tn69KktqxAbJ0K64CdCu58%2BtAB%2BOug9zafAK9T%2BgQq2ZJzJ1ygmgvYTiFwhLYwXm3MkP69zId2hX%2FCDbsm72MMD%2B77wGOqUBy%2F%2FAqMOlcQeb0NRwZMUDduDL3gWARrn%2BfeL4kmOYqO%2BJOxkJ06J4iTkMV3dbjlp%2F%2Fp5EPiBIwpt4sLoZ3lbOMQfNjBuGgzw7TQ7y0oMaHvVTdOVWExhC8UhRjN0gqLduVL0Y3EdH0jj7lhEaTjLCQ3ozOZ%2B5v3TQP6dHObNUWbGs0lx%2FSNYJHfOy4Vzp3UK8j5dPggy9aEOFCuxv4wX956i9uA3X&X-Amz-Signature=e96ea1b440c838954c3f221a81d6cf3649bad88db5fd54978ff3d91f7ec35a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXAB2I6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC4bd%2FlMupPkT%2BMbh4ClAyRyJ9cph1h%2Foo64YRhrTYDwIgQHjGtBYAPANPjVh5Xb3kuz2ZSzNou7rqnFftMZ%2BRpvkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXcYDC2k%2FP37pFAircA1tG%2BHXbsTTn1jVJ6pQJ58rVwfVTq%2Bab%2BB7kIS4L%2BiZpwc8W2Z3Vuay7XNSpSUsfbzAuKh0F79KOhBZiDYC22AaLosOuxImAnqy5HP2NcexSB%2B9ZrJbfleN6f71YNT2ryCO5mrv2MsQRWc%2Bi%2FIdMpfy6qHjWOJpdKZP4YH0AWCc%2BOAZGOXdXMgF%2BPhxgWA13bA4tifBlc0x4MHugbmt43S2lqPSu4abQwYbokNbhtMBRvdrK95mYKmKAYyuq23AvvM8PLwxnn%2FqamL8s4EzHNdS2X1xIdlnCWaYEoFw0O2qqPJOm4xAEOTCUqlqITc7YHBWdw9Qqi0FTlD6v4XiY6TsLEMZU4%2FUwum8jLRhQ65yaYIplQDzMXuXUhJ5KKo6cVQxwcVmIfJuuj3a5sTOGkeOMOhE%2FIfsyratVzaT8gL2u9mv877pt%2F1Otti1C2gQigjKbz0xPD8HInZ4BSPXktyaGiSL14yYdwNBbekmVF2ZixkwC5ARNC8oI7ULSOQi1JSZqcWBSkUTx9Ry1Ra%2FxGtJ9oYgy2LY5%2Fvx9f4%2F8Tn69KktqxAbJ0K64CdCu58%2BtAB%2BOug9zafAK9T%2BgQq2ZJzJ1ygmgvYTiFwhLYwXm3MkP69zId2hX%2FCDbsm72MMD%2B77wGOqUBy%2F%2FAqMOlcQeb0NRwZMUDduDL3gWARrn%2BfeL4kmOYqO%2BJOxkJ06J4iTkMV3dbjlp%2F%2Fp5EPiBIwpt4sLoZ3lbOMQfNjBuGgzw7TQ7y0oMaHvVTdOVWExhC8UhRjN0gqLduVL0Y3EdH0jj7lhEaTjLCQ3ozOZ%2B5v3TQP6dHObNUWbGs0lx%2FSNYJHfOy4Vzp3UK8j5dPggy9aEOFCuxv4wX956i9uA3X&X-Amz-Signature=be64a163f58b532290cecc7a9f44199d320051dde6b0564c926431f43789f8c5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXAB2I6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC4bd%2FlMupPkT%2BMbh4ClAyRyJ9cph1h%2Foo64YRhrTYDwIgQHjGtBYAPANPjVh5Xb3kuz2ZSzNou7rqnFftMZ%2BRpvkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXcYDC2k%2FP37pFAircA1tG%2BHXbsTTn1jVJ6pQJ58rVwfVTq%2Bab%2BB7kIS4L%2BiZpwc8W2Z3Vuay7XNSpSUsfbzAuKh0F79KOhBZiDYC22AaLosOuxImAnqy5HP2NcexSB%2B9ZrJbfleN6f71YNT2ryCO5mrv2MsQRWc%2Bi%2FIdMpfy6qHjWOJpdKZP4YH0AWCc%2BOAZGOXdXMgF%2BPhxgWA13bA4tifBlc0x4MHugbmt43S2lqPSu4abQwYbokNbhtMBRvdrK95mYKmKAYyuq23AvvM8PLwxnn%2FqamL8s4EzHNdS2X1xIdlnCWaYEoFw0O2qqPJOm4xAEOTCUqlqITc7YHBWdw9Qqi0FTlD6v4XiY6TsLEMZU4%2FUwum8jLRhQ65yaYIplQDzMXuXUhJ5KKo6cVQxwcVmIfJuuj3a5sTOGkeOMOhE%2FIfsyratVzaT8gL2u9mv877pt%2F1Otti1C2gQigjKbz0xPD8HInZ4BSPXktyaGiSL14yYdwNBbekmVF2ZixkwC5ARNC8oI7ULSOQi1JSZqcWBSkUTx9Ry1Ra%2FxGtJ9oYgy2LY5%2Fvx9f4%2F8Tn69KktqxAbJ0K64CdCu58%2BtAB%2BOug9zafAK9T%2BgQq2ZJzJ1ygmgvYTiFwhLYwXm3MkP69zId2hX%2FCDbsm72MMD%2B77wGOqUBy%2F%2FAqMOlcQeb0NRwZMUDduDL3gWARrn%2BfeL4kmOYqO%2BJOxkJ06J4iTkMV3dbjlp%2F%2Fp5EPiBIwpt4sLoZ3lbOMQfNjBuGgzw7TQ7y0oMaHvVTdOVWExhC8UhRjN0gqLduVL0Y3EdH0jj7lhEaTjLCQ3ozOZ%2B5v3TQP6dHObNUWbGs0lx%2FSNYJHfOy4Vzp3UK8j5dPggy9aEOFCuxv4wX956i9uA3X&X-Amz-Signature=43560d0ae77141713cb698889d6833e268762c38863be994299761c8a8db6877&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
