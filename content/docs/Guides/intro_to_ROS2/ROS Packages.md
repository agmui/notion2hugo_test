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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEO6E52%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJXa00PAc4f1vV5FILWIeMlUgjrTyhoNk6oITJb0FTcAIhAOzJv%2Bke0GarliB%2FtXusz9gXUCs3OZ7V3nB9R3HqJzJ5KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2FmD7wTDSgK6ZHe8q3AMdiGho090E5VA%2FT53pmk8gNyOqk5eMXMBxzaBv3NzBtSP1asY5lRj5SO02aVwOhYk1p3R1ObVmq3SJVzA8vPjK0lL%2FEFYKL8%2B4YSB8M72n5ApkZxZhXVYilLgmyLtYTdw34oBcAO9vhLFiIpXN2emGPVVvED09KdMOLiW2UcnZn6WTWzR5wVIuvI%2BWR6P2fSBmSsgqU705M5Ux8D8tvhQ7ixL%2BuwKEO3RJ7VvtgChHFyhoYO6fS1SVfemgDDOe%2FK4vYEedYEvc6sNlY3wpE14lmakIiOXHSA%2F4oBD%2F%2FE2e0SiCn04rnwxMh%2FNGRlyvpw9fxZ4MiWPdgWkfFaYx1GQjOYQmskTO2biiXv9MoOI4qoEJ1UY3O9UXw0KIEe%2BLC%2FVeC6CzHvN74xscWv7JD8XvZlmxJzWWH2Qnkw%2FvZLrJEZliMNahwr2TT0Mzl9meouYuBtQ1nvBbfwLSTmzm7uw6MqKb%2Bk6JPmmt4L6moHLUc5%2F3XqaVRDdp22DedQRnXPC9xH%2F6U2Cf%2BireXtQPqE%2FTIcpsLmnGKgTfR%2BNHWhk99hSb7Co4oYDhDfbRl%2FN6lpbYfALaf%2BQFIudbQ4WcT7oiYKuryb3B%2BWsmRQebuv3nhJl4Au4JCe%2FtTmKAjDCeq9O%2BBjqkAaZIVQP3hW9MLtgQTrAz%2FCGyIaCUjAYHh7TAjkjDniMg1hNa3QOeCFUXuCwjexDZRLE8pyvIxhOv2VX1cLg9q8Xvgvo%2FmLfq7EcAl67CUU7Ttis9oXqocIrA9gxy41p7TG4p8bIsnDNxPXGIHImEyZcW8jNmAz11p3tnPBGXnodvsEeCveaHC84w5Lld09jhcWVK3Hy%2FDOaYMA7%2FFCh2ZIXvcg6%2F&X-Amz-Signature=3eafeb99af0d019ce2f457afa9e4c4864f3af4a91f2fd21f37628f778b34400d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEO6E52%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJXa00PAc4f1vV5FILWIeMlUgjrTyhoNk6oITJb0FTcAIhAOzJv%2Bke0GarliB%2FtXusz9gXUCs3OZ7V3nB9R3HqJzJ5KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2FmD7wTDSgK6ZHe8q3AMdiGho090E5VA%2FT53pmk8gNyOqk5eMXMBxzaBv3NzBtSP1asY5lRj5SO02aVwOhYk1p3R1ObVmq3SJVzA8vPjK0lL%2FEFYKL8%2B4YSB8M72n5ApkZxZhXVYilLgmyLtYTdw34oBcAO9vhLFiIpXN2emGPVVvED09KdMOLiW2UcnZn6WTWzR5wVIuvI%2BWR6P2fSBmSsgqU705M5Ux8D8tvhQ7ixL%2BuwKEO3RJ7VvtgChHFyhoYO6fS1SVfemgDDOe%2FK4vYEedYEvc6sNlY3wpE14lmakIiOXHSA%2F4oBD%2F%2FE2e0SiCn04rnwxMh%2FNGRlyvpw9fxZ4MiWPdgWkfFaYx1GQjOYQmskTO2biiXv9MoOI4qoEJ1UY3O9UXw0KIEe%2BLC%2FVeC6CzHvN74xscWv7JD8XvZlmxJzWWH2Qnkw%2FvZLrJEZliMNahwr2TT0Mzl9meouYuBtQ1nvBbfwLSTmzm7uw6MqKb%2Bk6JPmmt4L6moHLUc5%2F3XqaVRDdp22DedQRnXPC9xH%2F6U2Cf%2BireXtQPqE%2FTIcpsLmnGKgTfR%2BNHWhk99hSb7Co4oYDhDfbRl%2FN6lpbYfALaf%2BQFIudbQ4WcT7oiYKuryb3B%2BWsmRQebuv3nhJl4Au4JCe%2FtTmKAjDCeq9O%2BBjqkAaZIVQP3hW9MLtgQTrAz%2FCGyIaCUjAYHh7TAjkjDniMg1hNa3QOeCFUXuCwjexDZRLE8pyvIxhOv2VX1cLg9q8Xvgvo%2FmLfq7EcAl67CUU7Ttis9oXqocIrA9gxy41p7TG4p8bIsnDNxPXGIHImEyZcW8jNmAz11p3tnPBGXnodvsEeCveaHC84w5Lld09jhcWVK3Hy%2FDOaYMA7%2FFCh2ZIXvcg6%2F&X-Amz-Signature=68542d3ef3b6fffbfa096228de994d1aa05e3e1a926d3a8c04c4eeb44323429f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEO6E52%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJXa00PAc4f1vV5FILWIeMlUgjrTyhoNk6oITJb0FTcAIhAOzJv%2Bke0GarliB%2FtXusz9gXUCs3OZ7V3nB9R3HqJzJ5KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2FmD7wTDSgK6ZHe8q3AMdiGho090E5VA%2FT53pmk8gNyOqk5eMXMBxzaBv3NzBtSP1asY5lRj5SO02aVwOhYk1p3R1ObVmq3SJVzA8vPjK0lL%2FEFYKL8%2B4YSB8M72n5ApkZxZhXVYilLgmyLtYTdw34oBcAO9vhLFiIpXN2emGPVVvED09KdMOLiW2UcnZn6WTWzR5wVIuvI%2BWR6P2fSBmSsgqU705M5Ux8D8tvhQ7ixL%2BuwKEO3RJ7VvtgChHFyhoYO6fS1SVfemgDDOe%2FK4vYEedYEvc6sNlY3wpE14lmakIiOXHSA%2F4oBD%2F%2FE2e0SiCn04rnwxMh%2FNGRlyvpw9fxZ4MiWPdgWkfFaYx1GQjOYQmskTO2biiXv9MoOI4qoEJ1UY3O9UXw0KIEe%2BLC%2FVeC6CzHvN74xscWv7JD8XvZlmxJzWWH2Qnkw%2FvZLrJEZliMNahwr2TT0Mzl9meouYuBtQ1nvBbfwLSTmzm7uw6MqKb%2Bk6JPmmt4L6moHLUc5%2F3XqaVRDdp22DedQRnXPC9xH%2F6U2Cf%2BireXtQPqE%2FTIcpsLmnGKgTfR%2BNHWhk99hSb7Co4oYDhDfbRl%2FN6lpbYfALaf%2BQFIudbQ4WcT7oiYKuryb3B%2BWsmRQebuv3nhJl4Au4JCe%2FtTmKAjDCeq9O%2BBjqkAaZIVQP3hW9MLtgQTrAz%2FCGyIaCUjAYHh7TAjkjDniMg1hNa3QOeCFUXuCwjexDZRLE8pyvIxhOv2VX1cLg9q8Xvgvo%2FmLfq7EcAl67CUU7Ttis9oXqocIrA9gxy41p7TG4p8bIsnDNxPXGIHImEyZcW8jNmAz11p3tnPBGXnodvsEeCveaHC84w5Lld09jhcWVK3Hy%2FDOaYMA7%2FFCh2ZIXvcg6%2F&X-Amz-Signature=5098b25aec7bed285895748a803672e36d114b8f21347292d76ad513feb856f5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEO6E52%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJXa00PAc4f1vV5FILWIeMlUgjrTyhoNk6oITJb0FTcAIhAOzJv%2Bke0GarliB%2FtXusz9gXUCs3OZ7V3nB9R3HqJzJ5KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2FmD7wTDSgK6ZHe8q3AMdiGho090E5VA%2FT53pmk8gNyOqk5eMXMBxzaBv3NzBtSP1asY5lRj5SO02aVwOhYk1p3R1ObVmq3SJVzA8vPjK0lL%2FEFYKL8%2B4YSB8M72n5ApkZxZhXVYilLgmyLtYTdw34oBcAO9vhLFiIpXN2emGPVVvED09KdMOLiW2UcnZn6WTWzR5wVIuvI%2BWR6P2fSBmSsgqU705M5Ux8D8tvhQ7ixL%2BuwKEO3RJ7VvtgChHFyhoYO6fS1SVfemgDDOe%2FK4vYEedYEvc6sNlY3wpE14lmakIiOXHSA%2F4oBD%2F%2FE2e0SiCn04rnwxMh%2FNGRlyvpw9fxZ4MiWPdgWkfFaYx1GQjOYQmskTO2biiXv9MoOI4qoEJ1UY3O9UXw0KIEe%2BLC%2FVeC6CzHvN74xscWv7JD8XvZlmxJzWWH2Qnkw%2FvZLrJEZliMNahwr2TT0Mzl9meouYuBtQ1nvBbfwLSTmzm7uw6MqKb%2Bk6JPmmt4L6moHLUc5%2F3XqaVRDdp22DedQRnXPC9xH%2F6U2Cf%2BireXtQPqE%2FTIcpsLmnGKgTfR%2BNHWhk99hSb7Co4oYDhDfbRl%2FN6lpbYfALaf%2BQFIudbQ4WcT7oiYKuryb3B%2BWsmRQebuv3nhJl4Au4JCe%2FtTmKAjDCeq9O%2BBjqkAaZIVQP3hW9MLtgQTrAz%2FCGyIaCUjAYHh7TAjkjDniMg1hNa3QOeCFUXuCwjexDZRLE8pyvIxhOv2VX1cLg9q8Xvgvo%2FmLfq7EcAl67CUU7Ttis9oXqocIrA9gxy41p7TG4p8bIsnDNxPXGIHImEyZcW8jNmAz11p3tnPBGXnodvsEeCveaHC84w5Lld09jhcWVK3Hy%2FDOaYMA7%2FFCh2ZIXvcg6%2F&X-Amz-Signature=77ecd7c8fc89dfc22e9e84264e7f3240e7a241f6ca2933b65f947650ce7072fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEO6E52%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJXa00PAc4f1vV5FILWIeMlUgjrTyhoNk6oITJb0FTcAIhAOzJv%2Bke0GarliB%2FtXusz9gXUCs3OZ7V3nB9R3HqJzJ5KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2FmD7wTDSgK6ZHe8q3AMdiGho090E5VA%2FT53pmk8gNyOqk5eMXMBxzaBv3NzBtSP1asY5lRj5SO02aVwOhYk1p3R1ObVmq3SJVzA8vPjK0lL%2FEFYKL8%2B4YSB8M72n5ApkZxZhXVYilLgmyLtYTdw34oBcAO9vhLFiIpXN2emGPVVvED09KdMOLiW2UcnZn6WTWzR5wVIuvI%2BWR6P2fSBmSsgqU705M5Ux8D8tvhQ7ixL%2BuwKEO3RJ7VvtgChHFyhoYO6fS1SVfemgDDOe%2FK4vYEedYEvc6sNlY3wpE14lmakIiOXHSA%2F4oBD%2F%2FE2e0SiCn04rnwxMh%2FNGRlyvpw9fxZ4MiWPdgWkfFaYx1GQjOYQmskTO2biiXv9MoOI4qoEJ1UY3O9UXw0KIEe%2BLC%2FVeC6CzHvN74xscWv7JD8XvZlmxJzWWH2Qnkw%2FvZLrJEZliMNahwr2TT0Mzl9meouYuBtQ1nvBbfwLSTmzm7uw6MqKb%2Bk6JPmmt4L6moHLUc5%2F3XqaVRDdp22DedQRnXPC9xH%2F6U2Cf%2BireXtQPqE%2FTIcpsLmnGKgTfR%2BNHWhk99hSb7Co4oYDhDfbRl%2FN6lpbYfALaf%2BQFIudbQ4WcT7oiYKuryb3B%2BWsmRQebuv3nhJl4Au4JCe%2FtTmKAjDCeq9O%2BBjqkAaZIVQP3hW9MLtgQTrAz%2FCGyIaCUjAYHh7TAjkjDniMg1hNa3QOeCFUXuCwjexDZRLE8pyvIxhOv2VX1cLg9q8Xvgvo%2FmLfq7EcAl67CUU7Ttis9oXqocIrA9gxy41p7TG4p8bIsnDNxPXGIHImEyZcW8jNmAz11p3tnPBGXnodvsEeCveaHC84w5Lld09jhcWVK3Hy%2FDOaYMA7%2FFCh2ZIXvcg6%2F&X-Amz-Signature=a9cdf961732b2e6d11f9a5f74ca475fded2f342b2b611ea7b362d490b4219579&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEO6E52%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJXa00PAc4f1vV5FILWIeMlUgjrTyhoNk6oITJb0FTcAIhAOzJv%2Bke0GarliB%2FtXusz9gXUCs3OZ7V3nB9R3HqJzJ5KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2FmD7wTDSgK6ZHe8q3AMdiGho090E5VA%2FT53pmk8gNyOqk5eMXMBxzaBv3NzBtSP1asY5lRj5SO02aVwOhYk1p3R1ObVmq3SJVzA8vPjK0lL%2FEFYKL8%2B4YSB8M72n5ApkZxZhXVYilLgmyLtYTdw34oBcAO9vhLFiIpXN2emGPVVvED09KdMOLiW2UcnZn6WTWzR5wVIuvI%2BWR6P2fSBmSsgqU705M5Ux8D8tvhQ7ixL%2BuwKEO3RJ7VvtgChHFyhoYO6fS1SVfemgDDOe%2FK4vYEedYEvc6sNlY3wpE14lmakIiOXHSA%2F4oBD%2F%2FE2e0SiCn04rnwxMh%2FNGRlyvpw9fxZ4MiWPdgWkfFaYx1GQjOYQmskTO2biiXv9MoOI4qoEJ1UY3O9UXw0KIEe%2BLC%2FVeC6CzHvN74xscWv7JD8XvZlmxJzWWH2Qnkw%2FvZLrJEZliMNahwr2TT0Mzl9meouYuBtQ1nvBbfwLSTmzm7uw6MqKb%2Bk6JPmmt4L6moHLUc5%2F3XqaVRDdp22DedQRnXPC9xH%2F6U2Cf%2BireXtQPqE%2FTIcpsLmnGKgTfR%2BNHWhk99hSb7Co4oYDhDfbRl%2FN6lpbYfALaf%2BQFIudbQ4WcT7oiYKuryb3B%2BWsmRQebuv3nhJl4Au4JCe%2FtTmKAjDCeq9O%2BBjqkAaZIVQP3hW9MLtgQTrAz%2FCGyIaCUjAYHh7TAjkjDniMg1hNa3QOeCFUXuCwjexDZRLE8pyvIxhOv2VX1cLg9q8Xvgvo%2FmLfq7EcAl67CUU7Ttis9oXqocIrA9gxy41p7TG4p8bIsnDNxPXGIHImEyZcW8jNmAz11p3tnPBGXnodvsEeCveaHC84w5Lld09jhcWVK3Hy%2FDOaYMA7%2FFCh2ZIXvcg6%2F&X-Amz-Signature=a8f61d4c1b0277e14d86380c258e302c3987e889f3f4e0e9dbe68314892a849b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEO6E52%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJXa00PAc4f1vV5FILWIeMlUgjrTyhoNk6oITJb0FTcAIhAOzJv%2Bke0GarliB%2FtXusz9gXUCs3OZ7V3nB9R3HqJzJ5KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2FmD7wTDSgK6ZHe8q3AMdiGho090E5VA%2FT53pmk8gNyOqk5eMXMBxzaBv3NzBtSP1asY5lRj5SO02aVwOhYk1p3R1ObVmq3SJVzA8vPjK0lL%2FEFYKL8%2B4YSB8M72n5ApkZxZhXVYilLgmyLtYTdw34oBcAO9vhLFiIpXN2emGPVVvED09KdMOLiW2UcnZn6WTWzR5wVIuvI%2BWR6P2fSBmSsgqU705M5Ux8D8tvhQ7ixL%2BuwKEO3RJ7VvtgChHFyhoYO6fS1SVfemgDDOe%2FK4vYEedYEvc6sNlY3wpE14lmakIiOXHSA%2F4oBD%2F%2FE2e0SiCn04rnwxMh%2FNGRlyvpw9fxZ4MiWPdgWkfFaYx1GQjOYQmskTO2biiXv9MoOI4qoEJ1UY3O9UXw0KIEe%2BLC%2FVeC6CzHvN74xscWv7JD8XvZlmxJzWWH2Qnkw%2FvZLrJEZliMNahwr2TT0Mzl9meouYuBtQ1nvBbfwLSTmzm7uw6MqKb%2Bk6JPmmt4L6moHLUc5%2F3XqaVRDdp22DedQRnXPC9xH%2F6U2Cf%2BireXtQPqE%2FTIcpsLmnGKgTfR%2BNHWhk99hSb7Co4oYDhDfbRl%2FN6lpbYfALaf%2BQFIudbQ4WcT7oiYKuryb3B%2BWsmRQebuv3nhJl4Au4JCe%2FtTmKAjDCeq9O%2BBjqkAaZIVQP3hW9MLtgQTrAz%2FCGyIaCUjAYHh7TAjkjDniMg1hNa3QOeCFUXuCwjexDZRLE8pyvIxhOv2VX1cLg9q8Xvgvo%2FmLfq7EcAl67CUU7Ttis9oXqocIrA9gxy41p7TG4p8bIsnDNxPXGIHImEyZcW8jNmAz11p3tnPBGXnodvsEeCveaHC84w5Lld09jhcWVK3Hy%2FDOaYMA7%2FFCh2ZIXvcg6%2F&X-Amz-Signature=cf55ccaffdef1be57dbb5bbeb0db824eb521488ad195486615eccd6db1a148e3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
