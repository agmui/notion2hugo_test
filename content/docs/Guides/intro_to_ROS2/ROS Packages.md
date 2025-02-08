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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DJM2A54%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICKUiLSEVX4lIMB1Z0Z%2F05b9smLn6a9fXyjNQAC1fbwTAiEAxx6AhyuGtEDFMw4tpcEiLi%2BE3ZzFrLk59Xl%2BjInB4oQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODg9bNYlkLbikzwPCrcA1OFzPMyBirZgeh36o%2Fd4kwOkKxJdcTKz9x%2FQg5jjXggCfmY8Ba26YBhDRdCZq2cX41eVtpTNCi5AQJGhWNKgDl7yHYc47NlM8CAZCr68114P6VaIaQCB9omX9xzAuQae6XXqqDzKZmpD0kNp8BqF6vd%2FN6%2FKTt3TElmqRbpvsMim1JBBQ0NeqeR2KyNbh43GWqXPeaZiBhdEFR56%2FBfXvP2WQqcTViMBG4jw4J4wMMVFKns7QHSfflKHU17KUFx5VFURSn%2F1GE2ZP0BNdtH1rjmNc5W75sCukaxfIjvz6Ari4Gndn8fDaDYRuIpm22efiHnbEgdwTBbu9ALBZV9YuyuaBHK40DcwZQOCzzE%2Bd4kCsT13frKBCaWNXVzNzws4i12MFPlb7LjCyye0V0xDJJjZJ3hw7T5OzRYLu7hcceu3puO84OOkIBOBFjKJldlz5BXY1zKudut2J9TeqvLduhGjcXifyLOf4DBAGtFqxWjBqnk8mPq0jsxnBboB88rQ8eJ6GT85CDsMCMt%2F33MgRBEcxHG%2Bw7769VzWDHykYNd1o2TAg2OVkni4ajhiZ4npogESvJFOs5XqMetJjwWwP%2FOs%2FvlmGREbz%2FEREe8Fkiq7BU2nRGNRGl92LLlMLnBnr0GOqUBSP7QMHCGZ70puamrjV6bbAqW8RqYgOTHK0LRtWAY4SoIHxysm2yMukp2YmmloSpB4qB8HqEKML3JzwH8j%2BeRBSZt2Vy1JAh4YMjVVL%2FWiW0Zllw4LihieLeChVGbpGAYedCAnCmlBoQKT7IGWeZYu8yrgA4Tavc%2BBZLNduIT6tV0PvgHNPIgbYVFxHRcFGqZtbNJO1Gdyl%2FItmpgJyDYsp3dDEEJ&X-Amz-Signature=43e889bdecbb6d72f4efe695012d736cf4b91f46b940a3db04ca04d99e2cd65e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DJM2A54%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICKUiLSEVX4lIMB1Z0Z%2F05b9smLn6a9fXyjNQAC1fbwTAiEAxx6AhyuGtEDFMw4tpcEiLi%2BE3ZzFrLk59Xl%2BjInB4oQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODg9bNYlkLbikzwPCrcA1OFzPMyBirZgeh36o%2Fd4kwOkKxJdcTKz9x%2FQg5jjXggCfmY8Ba26YBhDRdCZq2cX41eVtpTNCi5AQJGhWNKgDl7yHYc47NlM8CAZCr68114P6VaIaQCB9omX9xzAuQae6XXqqDzKZmpD0kNp8BqF6vd%2FN6%2FKTt3TElmqRbpvsMim1JBBQ0NeqeR2KyNbh43GWqXPeaZiBhdEFR56%2FBfXvP2WQqcTViMBG4jw4J4wMMVFKns7QHSfflKHU17KUFx5VFURSn%2F1GE2ZP0BNdtH1rjmNc5W75sCukaxfIjvz6Ari4Gndn8fDaDYRuIpm22efiHnbEgdwTBbu9ALBZV9YuyuaBHK40DcwZQOCzzE%2Bd4kCsT13frKBCaWNXVzNzws4i12MFPlb7LjCyye0V0xDJJjZJ3hw7T5OzRYLu7hcceu3puO84OOkIBOBFjKJldlz5BXY1zKudut2J9TeqvLduhGjcXifyLOf4DBAGtFqxWjBqnk8mPq0jsxnBboB88rQ8eJ6GT85CDsMCMt%2F33MgRBEcxHG%2Bw7769VzWDHykYNd1o2TAg2OVkni4ajhiZ4npogESvJFOs5XqMetJjwWwP%2FOs%2FvlmGREbz%2FEREe8Fkiq7BU2nRGNRGl92LLlMLnBnr0GOqUBSP7QMHCGZ70puamrjV6bbAqW8RqYgOTHK0LRtWAY4SoIHxysm2yMukp2YmmloSpB4qB8HqEKML3JzwH8j%2BeRBSZt2Vy1JAh4YMjVVL%2FWiW0Zllw4LihieLeChVGbpGAYedCAnCmlBoQKT7IGWeZYu8yrgA4Tavc%2BBZLNduIT6tV0PvgHNPIgbYVFxHRcFGqZtbNJO1Gdyl%2FItmpgJyDYsp3dDEEJ&X-Amz-Signature=d3658cc05acd9c131c2f5d5c121185196bc86eadcbdd305be9a5e54b8563c118&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DJM2A54%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICKUiLSEVX4lIMB1Z0Z%2F05b9smLn6a9fXyjNQAC1fbwTAiEAxx6AhyuGtEDFMw4tpcEiLi%2BE3ZzFrLk59Xl%2BjInB4oQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODg9bNYlkLbikzwPCrcA1OFzPMyBirZgeh36o%2Fd4kwOkKxJdcTKz9x%2FQg5jjXggCfmY8Ba26YBhDRdCZq2cX41eVtpTNCi5AQJGhWNKgDl7yHYc47NlM8CAZCr68114P6VaIaQCB9omX9xzAuQae6XXqqDzKZmpD0kNp8BqF6vd%2FN6%2FKTt3TElmqRbpvsMim1JBBQ0NeqeR2KyNbh43GWqXPeaZiBhdEFR56%2FBfXvP2WQqcTViMBG4jw4J4wMMVFKns7QHSfflKHU17KUFx5VFURSn%2F1GE2ZP0BNdtH1rjmNc5W75sCukaxfIjvz6Ari4Gndn8fDaDYRuIpm22efiHnbEgdwTBbu9ALBZV9YuyuaBHK40DcwZQOCzzE%2Bd4kCsT13frKBCaWNXVzNzws4i12MFPlb7LjCyye0V0xDJJjZJ3hw7T5OzRYLu7hcceu3puO84OOkIBOBFjKJldlz5BXY1zKudut2J9TeqvLduhGjcXifyLOf4DBAGtFqxWjBqnk8mPq0jsxnBboB88rQ8eJ6GT85CDsMCMt%2F33MgRBEcxHG%2Bw7769VzWDHykYNd1o2TAg2OVkni4ajhiZ4npogESvJFOs5XqMetJjwWwP%2FOs%2FvlmGREbz%2FEREe8Fkiq7BU2nRGNRGl92LLlMLnBnr0GOqUBSP7QMHCGZ70puamrjV6bbAqW8RqYgOTHK0LRtWAY4SoIHxysm2yMukp2YmmloSpB4qB8HqEKML3JzwH8j%2BeRBSZt2Vy1JAh4YMjVVL%2FWiW0Zllw4LihieLeChVGbpGAYedCAnCmlBoQKT7IGWeZYu8yrgA4Tavc%2BBZLNduIT6tV0PvgHNPIgbYVFxHRcFGqZtbNJO1Gdyl%2FItmpgJyDYsp3dDEEJ&X-Amz-Signature=f8e94e1d9d78078f5fd0db414d1d367cff72340bacacd928b0094162a8cd3307&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DJM2A54%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICKUiLSEVX4lIMB1Z0Z%2F05b9smLn6a9fXyjNQAC1fbwTAiEAxx6AhyuGtEDFMw4tpcEiLi%2BE3ZzFrLk59Xl%2BjInB4oQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODg9bNYlkLbikzwPCrcA1OFzPMyBirZgeh36o%2Fd4kwOkKxJdcTKz9x%2FQg5jjXggCfmY8Ba26YBhDRdCZq2cX41eVtpTNCi5AQJGhWNKgDl7yHYc47NlM8CAZCr68114P6VaIaQCB9omX9xzAuQae6XXqqDzKZmpD0kNp8BqF6vd%2FN6%2FKTt3TElmqRbpvsMim1JBBQ0NeqeR2KyNbh43GWqXPeaZiBhdEFR56%2FBfXvP2WQqcTViMBG4jw4J4wMMVFKns7QHSfflKHU17KUFx5VFURSn%2F1GE2ZP0BNdtH1rjmNc5W75sCukaxfIjvz6Ari4Gndn8fDaDYRuIpm22efiHnbEgdwTBbu9ALBZV9YuyuaBHK40DcwZQOCzzE%2Bd4kCsT13frKBCaWNXVzNzws4i12MFPlb7LjCyye0V0xDJJjZJ3hw7T5OzRYLu7hcceu3puO84OOkIBOBFjKJldlz5BXY1zKudut2J9TeqvLduhGjcXifyLOf4DBAGtFqxWjBqnk8mPq0jsxnBboB88rQ8eJ6GT85CDsMCMt%2F33MgRBEcxHG%2Bw7769VzWDHykYNd1o2TAg2OVkni4ajhiZ4npogESvJFOs5XqMetJjwWwP%2FOs%2FvlmGREbz%2FEREe8Fkiq7BU2nRGNRGl92LLlMLnBnr0GOqUBSP7QMHCGZ70puamrjV6bbAqW8RqYgOTHK0LRtWAY4SoIHxysm2yMukp2YmmloSpB4qB8HqEKML3JzwH8j%2BeRBSZt2Vy1JAh4YMjVVL%2FWiW0Zllw4LihieLeChVGbpGAYedCAnCmlBoQKT7IGWeZYu8yrgA4Tavc%2BBZLNduIT6tV0PvgHNPIgbYVFxHRcFGqZtbNJO1Gdyl%2FItmpgJyDYsp3dDEEJ&X-Amz-Signature=67e3fbda60ba2062ffaf1346c6b55247c1eacde4995d117f1ec30355fb3e8daa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DJM2A54%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICKUiLSEVX4lIMB1Z0Z%2F05b9smLn6a9fXyjNQAC1fbwTAiEAxx6AhyuGtEDFMw4tpcEiLi%2BE3ZzFrLk59Xl%2BjInB4oQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODg9bNYlkLbikzwPCrcA1OFzPMyBirZgeh36o%2Fd4kwOkKxJdcTKz9x%2FQg5jjXggCfmY8Ba26YBhDRdCZq2cX41eVtpTNCi5AQJGhWNKgDl7yHYc47NlM8CAZCr68114P6VaIaQCB9omX9xzAuQae6XXqqDzKZmpD0kNp8BqF6vd%2FN6%2FKTt3TElmqRbpvsMim1JBBQ0NeqeR2KyNbh43GWqXPeaZiBhdEFR56%2FBfXvP2WQqcTViMBG4jw4J4wMMVFKns7QHSfflKHU17KUFx5VFURSn%2F1GE2ZP0BNdtH1rjmNc5W75sCukaxfIjvz6Ari4Gndn8fDaDYRuIpm22efiHnbEgdwTBbu9ALBZV9YuyuaBHK40DcwZQOCzzE%2Bd4kCsT13frKBCaWNXVzNzws4i12MFPlb7LjCyye0V0xDJJjZJ3hw7T5OzRYLu7hcceu3puO84OOkIBOBFjKJldlz5BXY1zKudut2J9TeqvLduhGjcXifyLOf4DBAGtFqxWjBqnk8mPq0jsxnBboB88rQ8eJ6GT85CDsMCMt%2F33MgRBEcxHG%2Bw7769VzWDHykYNd1o2TAg2OVkni4ajhiZ4npogESvJFOs5XqMetJjwWwP%2FOs%2FvlmGREbz%2FEREe8Fkiq7BU2nRGNRGl92LLlMLnBnr0GOqUBSP7QMHCGZ70puamrjV6bbAqW8RqYgOTHK0LRtWAY4SoIHxysm2yMukp2YmmloSpB4qB8HqEKML3JzwH8j%2BeRBSZt2Vy1JAh4YMjVVL%2FWiW0Zllw4LihieLeChVGbpGAYedCAnCmlBoQKT7IGWeZYu8yrgA4Tavc%2BBZLNduIT6tV0PvgHNPIgbYVFxHRcFGqZtbNJO1Gdyl%2FItmpgJyDYsp3dDEEJ&X-Amz-Signature=f8674acf05ad9e8789499b30b9a8426ff239a0bcf5910033eab1f39fa758974d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DJM2A54%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICKUiLSEVX4lIMB1Z0Z%2F05b9smLn6a9fXyjNQAC1fbwTAiEAxx6AhyuGtEDFMw4tpcEiLi%2BE3ZzFrLk59Xl%2BjInB4oQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODg9bNYlkLbikzwPCrcA1OFzPMyBirZgeh36o%2Fd4kwOkKxJdcTKz9x%2FQg5jjXggCfmY8Ba26YBhDRdCZq2cX41eVtpTNCi5AQJGhWNKgDl7yHYc47NlM8CAZCr68114P6VaIaQCB9omX9xzAuQae6XXqqDzKZmpD0kNp8BqF6vd%2FN6%2FKTt3TElmqRbpvsMim1JBBQ0NeqeR2KyNbh43GWqXPeaZiBhdEFR56%2FBfXvP2WQqcTViMBG4jw4J4wMMVFKns7QHSfflKHU17KUFx5VFURSn%2F1GE2ZP0BNdtH1rjmNc5W75sCukaxfIjvz6Ari4Gndn8fDaDYRuIpm22efiHnbEgdwTBbu9ALBZV9YuyuaBHK40DcwZQOCzzE%2Bd4kCsT13frKBCaWNXVzNzws4i12MFPlb7LjCyye0V0xDJJjZJ3hw7T5OzRYLu7hcceu3puO84OOkIBOBFjKJldlz5BXY1zKudut2J9TeqvLduhGjcXifyLOf4DBAGtFqxWjBqnk8mPq0jsxnBboB88rQ8eJ6GT85CDsMCMt%2F33MgRBEcxHG%2Bw7769VzWDHykYNd1o2TAg2OVkni4ajhiZ4npogESvJFOs5XqMetJjwWwP%2FOs%2FvlmGREbz%2FEREe8Fkiq7BU2nRGNRGl92LLlMLnBnr0GOqUBSP7QMHCGZ70puamrjV6bbAqW8RqYgOTHK0LRtWAY4SoIHxysm2yMukp2YmmloSpB4qB8HqEKML3JzwH8j%2BeRBSZt2Vy1JAh4YMjVVL%2FWiW0Zllw4LihieLeChVGbpGAYedCAnCmlBoQKT7IGWeZYu8yrgA4Tavc%2BBZLNduIT6tV0PvgHNPIgbYVFxHRcFGqZtbNJO1Gdyl%2FItmpgJyDYsp3dDEEJ&X-Amz-Signature=8465ff6056d892ed8670716d2218fadc3b9dfea3573d5ce26091626d93001758&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DJM2A54%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICKUiLSEVX4lIMB1Z0Z%2F05b9smLn6a9fXyjNQAC1fbwTAiEAxx6AhyuGtEDFMw4tpcEiLi%2BE3ZzFrLk59Xl%2BjInB4oQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODg9bNYlkLbikzwPCrcA1OFzPMyBirZgeh36o%2Fd4kwOkKxJdcTKz9x%2FQg5jjXggCfmY8Ba26YBhDRdCZq2cX41eVtpTNCi5AQJGhWNKgDl7yHYc47NlM8CAZCr68114P6VaIaQCB9omX9xzAuQae6XXqqDzKZmpD0kNp8BqF6vd%2FN6%2FKTt3TElmqRbpvsMim1JBBQ0NeqeR2KyNbh43GWqXPeaZiBhdEFR56%2FBfXvP2WQqcTViMBG4jw4J4wMMVFKns7QHSfflKHU17KUFx5VFURSn%2F1GE2ZP0BNdtH1rjmNc5W75sCukaxfIjvz6Ari4Gndn8fDaDYRuIpm22efiHnbEgdwTBbu9ALBZV9YuyuaBHK40DcwZQOCzzE%2Bd4kCsT13frKBCaWNXVzNzws4i12MFPlb7LjCyye0V0xDJJjZJ3hw7T5OzRYLu7hcceu3puO84OOkIBOBFjKJldlz5BXY1zKudut2J9TeqvLduhGjcXifyLOf4DBAGtFqxWjBqnk8mPq0jsxnBboB88rQ8eJ6GT85CDsMCMt%2F33MgRBEcxHG%2Bw7769VzWDHykYNd1o2TAg2OVkni4ajhiZ4npogESvJFOs5XqMetJjwWwP%2FOs%2FvlmGREbz%2FEREe8Fkiq7BU2nRGNRGl92LLlMLnBnr0GOqUBSP7QMHCGZ70puamrjV6bbAqW8RqYgOTHK0LRtWAY4SoIHxysm2yMukp2YmmloSpB4qB8HqEKML3JzwH8j%2BeRBSZt2Vy1JAh4YMjVVL%2FWiW0Zllw4LihieLeChVGbpGAYedCAnCmlBoQKT7IGWeZYu8yrgA4Tavc%2BBZLNduIT6tV0PvgHNPIgbYVFxHRcFGqZtbNJO1Gdyl%2FItmpgJyDYsp3dDEEJ&X-Amz-Signature=b3dbbdb8f973b109eb0f6f2e3fef0d8e1686924f8d7b13f8d3308779fb32e082&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
