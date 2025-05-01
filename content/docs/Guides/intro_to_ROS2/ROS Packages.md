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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GTN47W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGGjKgSu54rRyQZGY5RDjoMPyYBIr4v3hW3dWzyaHAUDAiEAquRSG%2FVFDFNJYoZ6s2zk%2FQPOYcack0BQly6yOHVDyTEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbTC1MM9xZhyrY70CrcA%2F0%2BM%2FrczKvR3q3akSQkrNHpEN%2FXFC6V1%2FuAr2RL8dZGdh55ka1VoIbZI5RMnjeppKjD5Id05kmExDQoC4vQlkm7HjEWAXMC8%2FlNR80RQxiy8SoxxytVlhUl%2BedAEAkt7Njpx4evhn0QYJR4UAlGXwm1hG4mwUkwyq16hdiwNcCh8CHMxhdnuzXU9dbbRaTsoS1WJCO9uWjXcyD%2FPemdAWWvWLNbnpBmVozTVZw15UFNGfJAesvR%2F1ai7ooDQNCkaw5DqE03nIDMZQwy0n0gZ%2Bw0NGQCOFN17jSEQZTsU1VZjhzjZNrV5CVEyYujKh%2FN%2B5TZndAFbO2LtAKSDizP3H95v7kMoi0MaBFgRJ9rUwQkQup5Cm0%2B96oMLA4CgX%2B80qXMOfugVNT397Hq5t2tfPMQUxnltvbTV0mNMyotSKH2gt1fHHVUoGvOXeYRfjnq7oBHhqjs43%2FVPYuZxODNf8%2F%2Flpy4vLmQzLgD0xrZjA1feSvjSwuAFFtPbBRbAfayG6sx3bbXKzhae8fUPewrs9n5sf4f3nm%2Ba%2B9X4VKXgLwGNwU95ODQfiupx7qD5tOxzg%2Fqic76QocLLuSz3UlfzfK0iD%2BMf1wfzDtW%2BVvdXkMdmjdmoAg2ZExQnrWuMNaUzMAGOqUBfM%2FroxMvUdsySKdSGK93z5EmHVQiK7sg7dUJZl1ppZgE3GjsUDOS4UvrPPTmSVBoJuJyleoeF7DevExfQ0ddE49okyvo%2BrZQXiIVB1AhFlY%2BhO%2B5LMPO8Eovwa6pm0831UTIJIvqnxHw6alvYeY6xN7oo4I4Eb1Y%2FKv%2BWn5Ooot6WBxNcZ3ujjZsDRPcmNoLFqYJgHDzF016eNKwYmZBFAsX4Lk4&X-Amz-Signature=09014a06908cad565953caf064eb7251becda7dff17c2a073022f00c0ab28963&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GTN47W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGGjKgSu54rRyQZGY5RDjoMPyYBIr4v3hW3dWzyaHAUDAiEAquRSG%2FVFDFNJYoZ6s2zk%2FQPOYcack0BQly6yOHVDyTEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbTC1MM9xZhyrY70CrcA%2F0%2BM%2FrczKvR3q3akSQkrNHpEN%2FXFC6V1%2FuAr2RL8dZGdh55ka1VoIbZI5RMnjeppKjD5Id05kmExDQoC4vQlkm7HjEWAXMC8%2FlNR80RQxiy8SoxxytVlhUl%2BedAEAkt7Njpx4evhn0QYJR4UAlGXwm1hG4mwUkwyq16hdiwNcCh8CHMxhdnuzXU9dbbRaTsoS1WJCO9uWjXcyD%2FPemdAWWvWLNbnpBmVozTVZw15UFNGfJAesvR%2F1ai7ooDQNCkaw5DqE03nIDMZQwy0n0gZ%2Bw0NGQCOFN17jSEQZTsU1VZjhzjZNrV5CVEyYujKh%2FN%2B5TZndAFbO2LtAKSDizP3H95v7kMoi0MaBFgRJ9rUwQkQup5Cm0%2B96oMLA4CgX%2B80qXMOfugVNT397Hq5t2tfPMQUxnltvbTV0mNMyotSKH2gt1fHHVUoGvOXeYRfjnq7oBHhqjs43%2FVPYuZxODNf8%2F%2Flpy4vLmQzLgD0xrZjA1feSvjSwuAFFtPbBRbAfayG6sx3bbXKzhae8fUPewrs9n5sf4f3nm%2Ba%2B9X4VKXgLwGNwU95ODQfiupx7qD5tOxzg%2Fqic76QocLLuSz3UlfzfK0iD%2BMf1wfzDtW%2BVvdXkMdmjdmoAg2ZExQnrWuMNaUzMAGOqUBfM%2FroxMvUdsySKdSGK93z5EmHVQiK7sg7dUJZl1ppZgE3GjsUDOS4UvrPPTmSVBoJuJyleoeF7DevExfQ0ddE49okyvo%2BrZQXiIVB1AhFlY%2BhO%2B5LMPO8Eovwa6pm0831UTIJIvqnxHw6alvYeY6xN7oo4I4Eb1Y%2FKv%2BWn5Ooot6WBxNcZ3ujjZsDRPcmNoLFqYJgHDzF016eNKwYmZBFAsX4Lk4&X-Amz-Signature=b719e53c4e45df15da2a1d8e0e375fcdddb2cd9d862f0fcd84cc2cc2b9323de9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GTN47W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGGjKgSu54rRyQZGY5RDjoMPyYBIr4v3hW3dWzyaHAUDAiEAquRSG%2FVFDFNJYoZ6s2zk%2FQPOYcack0BQly6yOHVDyTEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbTC1MM9xZhyrY70CrcA%2F0%2BM%2FrczKvR3q3akSQkrNHpEN%2FXFC6V1%2FuAr2RL8dZGdh55ka1VoIbZI5RMnjeppKjD5Id05kmExDQoC4vQlkm7HjEWAXMC8%2FlNR80RQxiy8SoxxytVlhUl%2BedAEAkt7Njpx4evhn0QYJR4UAlGXwm1hG4mwUkwyq16hdiwNcCh8CHMxhdnuzXU9dbbRaTsoS1WJCO9uWjXcyD%2FPemdAWWvWLNbnpBmVozTVZw15UFNGfJAesvR%2F1ai7ooDQNCkaw5DqE03nIDMZQwy0n0gZ%2Bw0NGQCOFN17jSEQZTsU1VZjhzjZNrV5CVEyYujKh%2FN%2B5TZndAFbO2LtAKSDizP3H95v7kMoi0MaBFgRJ9rUwQkQup5Cm0%2B96oMLA4CgX%2B80qXMOfugVNT397Hq5t2tfPMQUxnltvbTV0mNMyotSKH2gt1fHHVUoGvOXeYRfjnq7oBHhqjs43%2FVPYuZxODNf8%2F%2Flpy4vLmQzLgD0xrZjA1feSvjSwuAFFtPbBRbAfayG6sx3bbXKzhae8fUPewrs9n5sf4f3nm%2Ba%2B9X4VKXgLwGNwU95ODQfiupx7qD5tOxzg%2Fqic76QocLLuSz3UlfzfK0iD%2BMf1wfzDtW%2BVvdXkMdmjdmoAg2ZExQnrWuMNaUzMAGOqUBfM%2FroxMvUdsySKdSGK93z5EmHVQiK7sg7dUJZl1ppZgE3GjsUDOS4UvrPPTmSVBoJuJyleoeF7DevExfQ0ddE49okyvo%2BrZQXiIVB1AhFlY%2BhO%2B5LMPO8Eovwa6pm0831UTIJIvqnxHw6alvYeY6xN7oo4I4Eb1Y%2FKv%2BWn5Ooot6WBxNcZ3ujjZsDRPcmNoLFqYJgHDzF016eNKwYmZBFAsX4Lk4&X-Amz-Signature=e8c70226cf4cee8f7bea6c098cf561db8f665e19c1ad9bc923c746150370b7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GTN47W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGGjKgSu54rRyQZGY5RDjoMPyYBIr4v3hW3dWzyaHAUDAiEAquRSG%2FVFDFNJYoZ6s2zk%2FQPOYcack0BQly6yOHVDyTEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbTC1MM9xZhyrY70CrcA%2F0%2BM%2FrczKvR3q3akSQkrNHpEN%2FXFC6V1%2FuAr2RL8dZGdh55ka1VoIbZI5RMnjeppKjD5Id05kmExDQoC4vQlkm7HjEWAXMC8%2FlNR80RQxiy8SoxxytVlhUl%2BedAEAkt7Njpx4evhn0QYJR4UAlGXwm1hG4mwUkwyq16hdiwNcCh8CHMxhdnuzXU9dbbRaTsoS1WJCO9uWjXcyD%2FPemdAWWvWLNbnpBmVozTVZw15UFNGfJAesvR%2F1ai7ooDQNCkaw5DqE03nIDMZQwy0n0gZ%2Bw0NGQCOFN17jSEQZTsU1VZjhzjZNrV5CVEyYujKh%2FN%2B5TZndAFbO2LtAKSDizP3H95v7kMoi0MaBFgRJ9rUwQkQup5Cm0%2B96oMLA4CgX%2B80qXMOfugVNT397Hq5t2tfPMQUxnltvbTV0mNMyotSKH2gt1fHHVUoGvOXeYRfjnq7oBHhqjs43%2FVPYuZxODNf8%2F%2Flpy4vLmQzLgD0xrZjA1feSvjSwuAFFtPbBRbAfayG6sx3bbXKzhae8fUPewrs9n5sf4f3nm%2Ba%2B9X4VKXgLwGNwU95ODQfiupx7qD5tOxzg%2Fqic76QocLLuSz3UlfzfK0iD%2BMf1wfzDtW%2BVvdXkMdmjdmoAg2ZExQnrWuMNaUzMAGOqUBfM%2FroxMvUdsySKdSGK93z5EmHVQiK7sg7dUJZl1ppZgE3GjsUDOS4UvrPPTmSVBoJuJyleoeF7DevExfQ0ddE49okyvo%2BrZQXiIVB1AhFlY%2BhO%2B5LMPO8Eovwa6pm0831UTIJIvqnxHw6alvYeY6xN7oo4I4Eb1Y%2FKv%2BWn5Ooot6WBxNcZ3ujjZsDRPcmNoLFqYJgHDzF016eNKwYmZBFAsX4Lk4&X-Amz-Signature=80512698e7e41ceb205d75ca8a77e091ffcae9b57658ef35293b2de9af344045&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GTN47W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGGjKgSu54rRyQZGY5RDjoMPyYBIr4v3hW3dWzyaHAUDAiEAquRSG%2FVFDFNJYoZ6s2zk%2FQPOYcack0BQly6yOHVDyTEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbTC1MM9xZhyrY70CrcA%2F0%2BM%2FrczKvR3q3akSQkrNHpEN%2FXFC6V1%2FuAr2RL8dZGdh55ka1VoIbZI5RMnjeppKjD5Id05kmExDQoC4vQlkm7HjEWAXMC8%2FlNR80RQxiy8SoxxytVlhUl%2BedAEAkt7Njpx4evhn0QYJR4UAlGXwm1hG4mwUkwyq16hdiwNcCh8CHMxhdnuzXU9dbbRaTsoS1WJCO9uWjXcyD%2FPemdAWWvWLNbnpBmVozTVZw15UFNGfJAesvR%2F1ai7ooDQNCkaw5DqE03nIDMZQwy0n0gZ%2Bw0NGQCOFN17jSEQZTsU1VZjhzjZNrV5CVEyYujKh%2FN%2B5TZndAFbO2LtAKSDizP3H95v7kMoi0MaBFgRJ9rUwQkQup5Cm0%2B96oMLA4CgX%2B80qXMOfugVNT397Hq5t2tfPMQUxnltvbTV0mNMyotSKH2gt1fHHVUoGvOXeYRfjnq7oBHhqjs43%2FVPYuZxODNf8%2F%2Flpy4vLmQzLgD0xrZjA1feSvjSwuAFFtPbBRbAfayG6sx3bbXKzhae8fUPewrs9n5sf4f3nm%2Ba%2B9X4VKXgLwGNwU95ODQfiupx7qD5tOxzg%2Fqic76QocLLuSz3UlfzfK0iD%2BMf1wfzDtW%2BVvdXkMdmjdmoAg2ZExQnrWuMNaUzMAGOqUBfM%2FroxMvUdsySKdSGK93z5EmHVQiK7sg7dUJZl1ppZgE3GjsUDOS4UvrPPTmSVBoJuJyleoeF7DevExfQ0ddE49okyvo%2BrZQXiIVB1AhFlY%2BhO%2B5LMPO8Eovwa6pm0831UTIJIvqnxHw6alvYeY6xN7oo4I4Eb1Y%2FKv%2BWn5Ooot6WBxNcZ3ujjZsDRPcmNoLFqYJgHDzF016eNKwYmZBFAsX4Lk4&X-Amz-Signature=b0880143c42fc9d4a3965ca52f5a9a356a80902047f5b082daad198099c8a910&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GTN47W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGGjKgSu54rRyQZGY5RDjoMPyYBIr4v3hW3dWzyaHAUDAiEAquRSG%2FVFDFNJYoZ6s2zk%2FQPOYcack0BQly6yOHVDyTEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbTC1MM9xZhyrY70CrcA%2F0%2BM%2FrczKvR3q3akSQkrNHpEN%2FXFC6V1%2FuAr2RL8dZGdh55ka1VoIbZI5RMnjeppKjD5Id05kmExDQoC4vQlkm7HjEWAXMC8%2FlNR80RQxiy8SoxxytVlhUl%2BedAEAkt7Njpx4evhn0QYJR4UAlGXwm1hG4mwUkwyq16hdiwNcCh8CHMxhdnuzXU9dbbRaTsoS1WJCO9uWjXcyD%2FPemdAWWvWLNbnpBmVozTVZw15UFNGfJAesvR%2F1ai7ooDQNCkaw5DqE03nIDMZQwy0n0gZ%2Bw0NGQCOFN17jSEQZTsU1VZjhzjZNrV5CVEyYujKh%2FN%2B5TZndAFbO2LtAKSDizP3H95v7kMoi0MaBFgRJ9rUwQkQup5Cm0%2B96oMLA4CgX%2B80qXMOfugVNT397Hq5t2tfPMQUxnltvbTV0mNMyotSKH2gt1fHHVUoGvOXeYRfjnq7oBHhqjs43%2FVPYuZxODNf8%2F%2Flpy4vLmQzLgD0xrZjA1feSvjSwuAFFtPbBRbAfayG6sx3bbXKzhae8fUPewrs9n5sf4f3nm%2Ba%2B9X4VKXgLwGNwU95ODQfiupx7qD5tOxzg%2Fqic76QocLLuSz3UlfzfK0iD%2BMf1wfzDtW%2BVvdXkMdmjdmoAg2ZExQnrWuMNaUzMAGOqUBfM%2FroxMvUdsySKdSGK93z5EmHVQiK7sg7dUJZl1ppZgE3GjsUDOS4UvrPPTmSVBoJuJyleoeF7DevExfQ0ddE49okyvo%2BrZQXiIVB1AhFlY%2BhO%2B5LMPO8Eovwa6pm0831UTIJIvqnxHw6alvYeY6xN7oo4I4Eb1Y%2FKv%2BWn5Ooot6WBxNcZ3ujjZsDRPcmNoLFqYJgHDzF016eNKwYmZBFAsX4Lk4&X-Amz-Signature=ffef6e8e4d1b40779f012c4c3c9a610b281bc2ea0a7a6dcfe451030a964e76d3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GTN47W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGGjKgSu54rRyQZGY5RDjoMPyYBIr4v3hW3dWzyaHAUDAiEAquRSG%2FVFDFNJYoZ6s2zk%2FQPOYcack0BQly6yOHVDyTEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbTC1MM9xZhyrY70CrcA%2F0%2BM%2FrczKvR3q3akSQkrNHpEN%2FXFC6V1%2FuAr2RL8dZGdh55ka1VoIbZI5RMnjeppKjD5Id05kmExDQoC4vQlkm7HjEWAXMC8%2FlNR80RQxiy8SoxxytVlhUl%2BedAEAkt7Njpx4evhn0QYJR4UAlGXwm1hG4mwUkwyq16hdiwNcCh8CHMxhdnuzXU9dbbRaTsoS1WJCO9uWjXcyD%2FPemdAWWvWLNbnpBmVozTVZw15UFNGfJAesvR%2F1ai7ooDQNCkaw5DqE03nIDMZQwy0n0gZ%2Bw0NGQCOFN17jSEQZTsU1VZjhzjZNrV5CVEyYujKh%2FN%2B5TZndAFbO2LtAKSDizP3H95v7kMoi0MaBFgRJ9rUwQkQup5Cm0%2B96oMLA4CgX%2B80qXMOfugVNT397Hq5t2tfPMQUxnltvbTV0mNMyotSKH2gt1fHHVUoGvOXeYRfjnq7oBHhqjs43%2FVPYuZxODNf8%2F%2Flpy4vLmQzLgD0xrZjA1feSvjSwuAFFtPbBRbAfayG6sx3bbXKzhae8fUPewrs9n5sf4f3nm%2Ba%2B9X4VKXgLwGNwU95ODQfiupx7qD5tOxzg%2Fqic76QocLLuSz3UlfzfK0iD%2BMf1wfzDtW%2BVvdXkMdmjdmoAg2ZExQnrWuMNaUzMAGOqUBfM%2FroxMvUdsySKdSGK93z5EmHVQiK7sg7dUJZl1ppZgE3GjsUDOS4UvrPPTmSVBoJuJyleoeF7DevExfQ0ddE49okyvo%2BrZQXiIVB1AhFlY%2BhO%2B5LMPO8Eovwa6pm0831UTIJIvqnxHw6alvYeY6xN7oo4I4Eb1Y%2FKv%2BWn5Ooot6WBxNcZ3ujjZsDRPcmNoLFqYJgHDzF016eNKwYmZBFAsX4Lk4&X-Amz-Signature=ce4c8387a76061f98307432af9418ecfe61d59666770622af035929bb062ae9d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
