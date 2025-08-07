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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KB5OAFK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD2LvMvATwVq6C6wERk%2BX4XpiNfo05%2Bi8Psfi5aQSI0iwIgAI3U3ZklOCF74bl7XuqWSJF0CvoxPukd5MHXlkNHi90qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA%2BhBUwqmyvwaRTgyrcA%2BZJ5QWBICo9AWZZrYf3HKdyQ4nDc2Tw1tv72erTGa9MzBgyQKSE1FH1OI5eCcqR8LzjkB0bpPa%2F4v6QFb8nnN34xkKSnKp%2FJoggDHYMXjr6nasBIZYevYHox6qpLyI%2BcjPiSMK15PL8F5G7iQn2ah%2BddC3JkoGbJrvC%2FOLWNXtRlv3tGxduXxsLIX2CDNfiLZM1XGihwXGd7MysJ3XbRdY29pRC8vPtG102URHTxl5s8kbV80VX5180w%2Bhiocj%2BBMaNPgHGomEeB%2FYfuDPPl78yNnd75H1v7LLExtpsQItFXEvllyCoTkn7CiyLTa2f9nl8spYrmvRAq3CqEVZb96qIsAquK%2BzYckjs46ICv3%2F8wxZZ%2BCVslH6wZi6e9jA7adCMPrx7j%2Bymjeka5w8qIZbqw7v3P%2BVz65aGuiJoV8ngSDq9wIESZm%2FcvUWLuNcWZhhZbV%2BmejyM%2BqHeEdxdh4r0lGtdQH2fFk3m9X%2BNRkqy5igiN%2FYXmx49jz7M5JMdd6ZG2yI0TVt0taYXF5gKxVkUb6PW5FJzhiUOOVQ5Bpjgt1D2Hhpk3L3%2F4WQPJkZTKQRsCTDqWm2%2FaRQNLCaP%2F7rW%2BzS1ipLsMgRjueVzD0pL89mm2w1sxAddEbREMLLu08QGOqUBuzxM8xwU7pm0HU4b6veWblrb8lDX%2Fb44WLNbhMb2KDzfZy%2FB%2FM1766ohU7qCyax8GwsiAOsGhfqK%2FUbhIDh4TsptJuhf7mUx43jvGrGvnHDeecDSagPfpo%2FgGS49dqBPpPRWJVYU5hpoc3DUgYMqpOzwM%2F5AcuyzvOpgm7J1vFFEw1gSolh3As8xzEu6hMexn7ngld4HnpyaGN6%2BdBzK3mePlvaH&X-Amz-Signature=8d4944876e0bd8112142ad95f38e1fd565c071b1d9f68112ea5406496f250069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KB5OAFK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD2LvMvATwVq6C6wERk%2BX4XpiNfo05%2Bi8Psfi5aQSI0iwIgAI3U3ZklOCF74bl7XuqWSJF0CvoxPukd5MHXlkNHi90qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA%2BhBUwqmyvwaRTgyrcA%2BZJ5QWBICo9AWZZrYf3HKdyQ4nDc2Tw1tv72erTGa9MzBgyQKSE1FH1OI5eCcqR8LzjkB0bpPa%2F4v6QFb8nnN34xkKSnKp%2FJoggDHYMXjr6nasBIZYevYHox6qpLyI%2BcjPiSMK15PL8F5G7iQn2ah%2BddC3JkoGbJrvC%2FOLWNXtRlv3tGxduXxsLIX2CDNfiLZM1XGihwXGd7MysJ3XbRdY29pRC8vPtG102URHTxl5s8kbV80VX5180w%2Bhiocj%2BBMaNPgHGomEeB%2FYfuDPPl78yNnd75H1v7LLExtpsQItFXEvllyCoTkn7CiyLTa2f9nl8spYrmvRAq3CqEVZb96qIsAquK%2BzYckjs46ICv3%2F8wxZZ%2BCVslH6wZi6e9jA7adCMPrx7j%2Bymjeka5w8qIZbqw7v3P%2BVz65aGuiJoV8ngSDq9wIESZm%2FcvUWLuNcWZhhZbV%2BmejyM%2BqHeEdxdh4r0lGtdQH2fFk3m9X%2BNRkqy5igiN%2FYXmx49jz7M5JMdd6ZG2yI0TVt0taYXF5gKxVkUb6PW5FJzhiUOOVQ5Bpjgt1D2Hhpk3L3%2F4WQPJkZTKQRsCTDqWm2%2FaRQNLCaP%2F7rW%2BzS1ipLsMgRjueVzD0pL89mm2w1sxAddEbREMLLu08QGOqUBuzxM8xwU7pm0HU4b6veWblrb8lDX%2Fb44WLNbhMb2KDzfZy%2FB%2FM1766ohU7qCyax8GwsiAOsGhfqK%2FUbhIDh4TsptJuhf7mUx43jvGrGvnHDeecDSagPfpo%2FgGS49dqBPpPRWJVYU5hpoc3DUgYMqpOzwM%2F5AcuyzvOpgm7J1vFFEw1gSolh3As8xzEu6hMexn7ngld4HnpyaGN6%2BdBzK3mePlvaH&X-Amz-Signature=cad01974220ab7e6c3814f99caefa3f3604ff16e3a5cd16e2b651b4711258993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KB5OAFK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD2LvMvATwVq6C6wERk%2BX4XpiNfo05%2Bi8Psfi5aQSI0iwIgAI3U3ZklOCF74bl7XuqWSJF0CvoxPukd5MHXlkNHi90qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA%2BhBUwqmyvwaRTgyrcA%2BZJ5QWBICo9AWZZrYf3HKdyQ4nDc2Tw1tv72erTGa9MzBgyQKSE1FH1OI5eCcqR8LzjkB0bpPa%2F4v6QFb8nnN34xkKSnKp%2FJoggDHYMXjr6nasBIZYevYHox6qpLyI%2BcjPiSMK15PL8F5G7iQn2ah%2BddC3JkoGbJrvC%2FOLWNXtRlv3tGxduXxsLIX2CDNfiLZM1XGihwXGd7MysJ3XbRdY29pRC8vPtG102URHTxl5s8kbV80VX5180w%2Bhiocj%2BBMaNPgHGomEeB%2FYfuDPPl78yNnd75H1v7LLExtpsQItFXEvllyCoTkn7CiyLTa2f9nl8spYrmvRAq3CqEVZb96qIsAquK%2BzYckjs46ICv3%2F8wxZZ%2BCVslH6wZi6e9jA7adCMPrx7j%2Bymjeka5w8qIZbqw7v3P%2BVz65aGuiJoV8ngSDq9wIESZm%2FcvUWLuNcWZhhZbV%2BmejyM%2BqHeEdxdh4r0lGtdQH2fFk3m9X%2BNRkqy5igiN%2FYXmx49jz7M5JMdd6ZG2yI0TVt0taYXF5gKxVkUb6PW5FJzhiUOOVQ5Bpjgt1D2Hhpk3L3%2F4WQPJkZTKQRsCTDqWm2%2FaRQNLCaP%2F7rW%2BzS1ipLsMgRjueVzD0pL89mm2w1sxAddEbREMLLu08QGOqUBuzxM8xwU7pm0HU4b6veWblrb8lDX%2Fb44WLNbhMb2KDzfZy%2FB%2FM1766ohU7qCyax8GwsiAOsGhfqK%2FUbhIDh4TsptJuhf7mUx43jvGrGvnHDeecDSagPfpo%2FgGS49dqBPpPRWJVYU5hpoc3DUgYMqpOzwM%2F5AcuyzvOpgm7J1vFFEw1gSolh3As8xzEu6hMexn7ngld4HnpyaGN6%2BdBzK3mePlvaH&X-Amz-Signature=45fb7516e551d0e3052f0cf3d1eb4b2025e5f6660f59350ac4314cae27c1e39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KB5OAFK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD2LvMvATwVq6C6wERk%2BX4XpiNfo05%2Bi8Psfi5aQSI0iwIgAI3U3ZklOCF74bl7XuqWSJF0CvoxPukd5MHXlkNHi90qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA%2BhBUwqmyvwaRTgyrcA%2BZJ5QWBICo9AWZZrYf3HKdyQ4nDc2Tw1tv72erTGa9MzBgyQKSE1FH1OI5eCcqR8LzjkB0bpPa%2F4v6QFb8nnN34xkKSnKp%2FJoggDHYMXjr6nasBIZYevYHox6qpLyI%2BcjPiSMK15PL8F5G7iQn2ah%2BddC3JkoGbJrvC%2FOLWNXtRlv3tGxduXxsLIX2CDNfiLZM1XGihwXGd7MysJ3XbRdY29pRC8vPtG102URHTxl5s8kbV80VX5180w%2Bhiocj%2BBMaNPgHGomEeB%2FYfuDPPl78yNnd75H1v7LLExtpsQItFXEvllyCoTkn7CiyLTa2f9nl8spYrmvRAq3CqEVZb96qIsAquK%2BzYckjs46ICv3%2F8wxZZ%2BCVslH6wZi6e9jA7adCMPrx7j%2Bymjeka5w8qIZbqw7v3P%2BVz65aGuiJoV8ngSDq9wIESZm%2FcvUWLuNcWZhhZbV%2BmejyM%2BqHeEdxdh4r0lGtdQH2fFk3m9X%2BNRkqy5igiN%2FYXmx49jz7M5JMdd6ZG2yI0TVt0taYXF5gKxVkUb6PW5FJzhiUOOVQ5Bpjgt1D2Hhpk3L3%2F4WQPJkZTKQRsCTDqWm2%2FaRQNLCaP%2F7rW%2BzS1ipLsMgRjueVzD0pL89mm2w1sxAddEbREMLLu08QGOqUBuzxM8xwU7pm0HU4b6veWblrb8lDX%2Fb44WLNbhMb2KDzfZy%2FB%2FM1766ohU7qCyax8GwsiAOsGhfqK%2FUbhIDh4TsptJuhf7mUx43jvGrGvnHDeecDSagPfpo%2FgGS49dqBPpPRWJVYU5hpoc3DUgYMqpOzwM%2F5AcuyzvOpgm7J1vFFEw1gSolh3As8xzEu6hMexn7ngld4HnpyaGN6%2BdBzK3mePlvaH&X-Amz-Signature=caa37543935cbc9dceeca8a836d8a895edd512de40393bbc02a26b45b76c63d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KB5OAFK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD2LvMvATwVq6C6wERk%2BX4XpiNfo05%2Bi8Psfi5aQSI0iwIgAI3U3ZklOCF74bl7XuqWSJF0CvoxPukd5MHXlkNHi90qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA%2BhBUwqmyvwaRTgyrcA%2BZJ5QWBICo9AWZZrYf3HKdyQ4nDc2Tw1tv72erTGa9MzBgyQKSE1FH1OI5eCcqR8LzjkB0bpPa%2F4v6QFb8nnN34xkKSnKp%2FJoggDHYMXjr6nasBIZYevYHox6qpLyI%2BcjPiSMK15PL8F5G7iQn2ah%2BddC3JkoGbJrvC%2FOLWNXtRlv3tGxduXxsLIX2CDNfiLZM1XGihwXGd7MysJ3XbRdY29pRC8vPtG102URHTxl5s8kbV80VX5180w%2Bhiocj%2BBMaNPgHGomEeB%2FYfuDPPl78yNnd75H1v7LLExtpsQItFXEvllyCoTkn7CiyLTa2f9nl8spYrmvRAq3CqEVZb96qIsAquK%2BzYckjs46ICv3%2F8wxZZ%2BCVslH6wZi6e9jA7adCMPrx7j%2Bymjeka5w8qIZbqw7v3P%2BVz65aGuiJoV8ngSDq9wIESZm%2FcvUWLuNcWZhhZbV%2BmejyM%2BqHeEdxdh4r0lGtdQH2fFk3m9X%2BNRkqy5igiN%2FYXmx49jz7M5JMdd6ZG2yI0TVt0taYXF5gKxVkUb6PW5FJzhiUOOVQ5Bpjgt1D2Hhpk3L3%2F4WQPJkZTKQRsCTDqWm2%2FaRQNLCaP%2F7rW%2BzS1ipLsMgRjueVzD0pL89mm2w1sxAddEbREMLLu08QGOqUBuzxM8xwU7pm0HU4b6veWblrb8lDX%2Fb44WLNbhMb2KDzfZy%2FB%2FM1766ohU7qCyax8GwsiAOsGhfqK%2FUbhIDh4TsptJuhf7mUx43jvGrGvnHDeecDSagPfpo%2FgGS49dqBPpPRWJVYU5hpoc3DUgYMqpOzwM%2F5AcuyzvOpgm7J1vFFEw1gSolh3As8xzEu6hMexn7ngld4HnpyaGN6%2BdBzK3mePlvaH&X-Amz-Signature=dce820e2a7de6425f687266eb6e7ca003ec870dd232dc8e298c398ad82675f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KB5OAFK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD2LvMvATwVq6C6wERk%2BX4XpiNfo05%2Bi8Psfi5aQSI0iwIgAI3U3ZklOCF74bl7XuqWSJF0CvoxPukd5MHXlkNHi90qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA%2BhBUwqmyvwaRTgyrcA%2BZJ5QWBICo9AWZZrYf3HKdyQ4nDc2Tw1tv72erTGa9MzBgyQKSE1FH1OI5eCcqR8LzjkB0bpPa%2F4v6QFb8nnN34xkKSnKp%2FJoggDHYMXjr6nasBIZYevYHox6qpLyI%2BcjPiSMK15PL8F5G7iQn2ah%2BddC3JkoGbJrvC%2FOLWNXtRlv3tGxduXxsLIX2CDNfiLZM1XGihwXGd7MysJ3XbRdY29pRC8vPtG102URHTxl5s8kbV80VX5180w%2Bhiocj%2BBMaNPgHGomEeB%2FYfuDPPl78yNnd75H1v7LLExtpsQItFXEvllyCoTkn7CiyLTa2f9nl8spYrmvRAq3CqEVZb96qIsAquK%2BzYckjs46ICv3%2F8wxZZ%2BCVslH6wZi6e9jA7adCMPrx7j%2Bymjeka5w8qIZbqw7v3P%2BVz65aGuiJoV8ngSDq9wIESZm%2FcvUWLuNcWZhhZbV%2BmejyM%2BqHeEdxdh4r0lGtdQH2fFk3m9X%2BNRkqy5igiN%2FYXmx49jz7M5JMdd6ZG2yI0TVt0taYXF5gKxVkUb6PW5FJzhiUOOVQ5Bpjgt1D2Hhpk3L3%2F4WQPJkZTKQRsCTDqWm2%2FaRQNLCaP%2F7rW%2BzS1ipLsMgRjueVzD0pL89mm2w1sxAddEbREMLLu08QGOqUBuzxM8xwU7pm0HU4b6veWblrb8lDX%2Fb44WLNbhMb2KDzfZy%2FB%2FM1766ohU7qCyax8GwsiAOsGhfqK%2FUbhIDh4TsptJuhf7mUx43jvGrGvnHDeecDSagPfpo%2FgGS49dqBPpPRWJVYU5hpoc3DUgYMqpOzwM%2F5AcuyzvOpgm7J1vFFEw1gSolh3As8xzEu6hMexn7ngld4HnpyaGN6%2BdBzK3mePlvaH&X-Amz-Signature=6a73bed1c335cd1231692a0365f85147e9a4f1f2242cdfc5774a6f4dba56d09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KB5OAFK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD2LvMvATwVq6C6wERk%2BX4XpiNfo05%2Bi8Psfi5aQSI0iwIgAI3U3ZklOCF74bl7XuqWSJF0CvoxPukd5MHXlkNHi90qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA%2BhBUwqmyvwaRTgyrcA%2BZJ5QWBICo9AWZZrYf3HKdyQ4nDc2Tw1tv72erTGa9MzBgyQKSE1FH1OI5eCcqR8LzjkB0bpPa%2F4v6QFb8nnN34xkKSnKp%2FJoggDHYMXjr6nasBIZYevYHox6qpLyI%2BcjPiSMK15PL8F5G7iQn2ah%2BddC3JkoGbJrvC%2FOLWNXtRlv3tGxduXxsLIX2CDNfiLZM1XGihwXGd7MysJ3XbRdY29pRC8vPtG102URHTxl5s8kbV80VX5180w%2Bhiocj%2BBMaNPgHGomEeB%2FYfuDPPl78yNnd75H1v7LLExtpsQItFXEvllyCoTkn7CiyLTa2f9nl8spYrmvRAq3CqEVZb96qIsAquK%2BzYckjs46ICv3%2F8wxZZ%2BCVslH6wZi6e9jA7adCMPrx7j%2Bymjeka5w8qIZbqw7v3P%2BVz65aGuiJoV8ngSDq9wIESZm%2FcvUWLuNcWZhhZbV%2BmejyM%2BqHeEdxdh4r0lGtdQH2fFk3m9X%2BNRkqy5igiN%2FYXmx49jz7M5JMdd6ZG2yI0TVt0taYXF5gKxVkUb6PW5FJzhiUOOVQ5Bpjgt1D2Hhpk3L3%2F4WQPJkZTKQRsCTDqWm2%2FaRQNLCaP%2F7rW%2BzS1ipLsMgRjueVzD0pL89mm2w1sxAddEbREMLLu08QGOqUBuzxM8xwU7pm0HU4b6veWblrb8lDX%2Fb44WLNbhMb2KDzfZy%2FB%2FM1766ohU7qCyax8GwsiAOsGhfqK%2FUbhIDh4TsptJuhf7mUx43jvGrGvnHDeecDSagPfpo%2FgGS49dqBPpPRWJVYU5hpoc3DUgYMqpOzwM%2F5AcuyzvOpgm7J1vFFEw1gSolh3As8xzEu6hMexn7ngld4HnpyaGN6%2BdBzK3mePlvaH&X-Amz-Signature=8114b29fbd98c3263d1e1b48b3b5d70b00218a140d9c7c3f3c1f502212972b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
