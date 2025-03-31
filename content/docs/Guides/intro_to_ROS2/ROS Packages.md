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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISKP74W%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEMm2rf76srECpLTCo7%2F8kqmqnggmxJ4yfx7KdprlY4YAiEAwSbEN5Lm1CDc5wEY%2B2Z0NGkeRqagdpstrI6LpZ2XlnoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIHdhBLd9SBQhFOcSrcA1SNZu%2B%2BBBmJnW5E3lET5Qx8Q7TlcZFqq%2B8AhUHypndOy7tlmvZSctd6%2FzKqa6BfDAXIsrgnIhTekcxnmazgot%2Bo4W7F2TGtzqfyWQQ%2BvlWVMpLapd7BmwF32uPTCvdVyi9iuvG4%2FHlWsQ3gMHKlL9BAMK1c72ycLEzExvMnTF6zW9auXGaukeERQE1ZaHnntz3wyaffFUWUdg9sfIulK7ERjgusRMgiz2L5R0t3Ubqe%2Bh8btIWmhk3gtuh%2F8NXb%2FmhGw8htPYwL6j%2BXpFg0Z67J%2FprElBUI88xzB6bMpK%2BK5jw0XZ5rNiILbH94MPor3Lh3Wjami3U%2FgUSm%2BJm8uQUIAb9GrNGDDwqD84D5qq28UyRU%2BM6FOU8w2Ep%2FLeSaioqA2ol95alMwKIfn929EaXhpsz2u%2BJ6H3dcjDW83FEe3iZLa14qBwt8Ltr%2FBpycJpLhDZnFHdNJlRFEK8YnAXzST2Aoj8oWH5%2FRlL0tffxt6BCGO%2FKcl17Pes9wVLLBRwXmIaEqW%2BfrzK6yZObR1UwtzqEEzHwUJncuGxMJbr5sv9X4VnslBzhDDBp%2FRymnf9zJMfufYCRe3MUEMXmgqDIM6ujrap4dLpcgiqbPznRV88pW%2BU91wLtspIj4MIHkqL8GOqUBNZ6oZkoLPzVM5OkK6fa3C7dN00KG%2BWfJPxNBmLqf3YxkBK0omcBCIYSPXzwZavUNnvhQqvfOxDxVoaNuPUQTYU1B0sUVYgtHODo7AWF0%2Bzi9ImmZgs1jzhbFRKFQZRYyBOyExESt690%2BNl%2F5XvdYcDnGpAYjgUTwzQPNN7%2BXrtzgN7ch6bzlEROQ25zDkROyU2CMwNr0fkj3sTQr2wTf%2FqCV9Qqb&X-Amz-Signature=28ebe0182003f6abfcfc9f7a9f3b846bdf5f40a8a19587a17d3089c9285e1edf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISKP74W%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEMm2rf76srECpLTCo7%2F8kqmqnggmxJ4yfx7KdprlY4YAiEAwSbEN5Lm1CDc5wEY%2B2Z0NGkeRqagdpstrI6LpZ2XlnoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIHdhBLd9SBQhFOcSrcA1SNZu%2B%2BBBmJnW5E3lET5Qx8Q7TlcZFqq%2B8AhUHypndOy7tlmvZSctd6%2FzKqa6BfDAXIsrgnIhTekcxnmazgot%2Bo4W7F2TGtzqfyWQQ%2BvlWVMpLapd7BmwF32uPTCvdVyi9iuvG4%2FHlWsQ3gMHKlL9BAMK1c72ycLEzExvMnTF6zW9auXGaukeERQE1ZaHnntz3wyaffFUWUdg9sfIulK7ERjgusRMgiz2L5R0t3Ubqe%2Bh8btIWmhk3gtuh%2F8NXb%2FmhGw8htPYwL6j%2BXpFg0Z67J%2FprElBUI88xzB6bMpK%2BK5jw0XZ5rNiILbH94MPor3Lh3Wjami3U%2FgUSm%2BJm8uQUIAb9GrNGDDwqD84D5qq28UyRU%2BM6FOU8w2Ep%2FLeSaioqA2ol95alMwKIfn929EaXhpsz2u%2BJ6H3dcjDW83FEe3iZLa14qBwt8Ltr%2FBpycJpLhDZnFHdNJlRFEK8YnAXzST2Aoj8oWH5%2FRlL0tffxt6BCGO%2FKcl17Pes9wVLLBRwXmIaEqW%2BfrzK6yZObR1UwtzqEEzHwUJncuGxMJbr5sv9X4VnslBzhDDBp%2FRymnf9zJMfufYCRe3MUEMXmgqDIM6ujrap4dLpcgiqbPznRV88pW%2BU91wLtspIj4MIHkqL8GOqUBNZ6oZkoLPzVM5OkK6fa3C7dN00KG%2BWfJPxNBmLqf3YxkBK0omcBCIYSPXzwZavUNnvhQqvfOxDxVoaNuPUQTYU1B0sUVYgtHODo7AWF0%2Bzi9ImmZgs1jzhbFRKFQZRYyBOyExESt690%2BNl%2F5XvdYcDnGpAYjgUTwzQPNN7%2BXrtzgN7ch6bzlEROQ25zDkROyU2CMwNr0fkj3sTQr2wTf%2FqCV9Qqb&X-Amz-Signature=58087b903198250b95bb9610903e38208ff91dd98eeaf42a3fa8c77143d9f3f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISKP74W%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEMm2rf76srECpLTCo7%2F8kqmqnggmxJ4yfx7KdprlY4YAiEAwSbEN5Lm1CDc5wEY%2B2Z0NGkeRqagdpstrI6LpZ2XlnoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIHdhBLd9SBQhFOcSrcA1SNZu%2B%2BBBmJnW5E3lET5Qx8Q7TlcZFqq%2B8AhUHypndOy7tlmvZSctd6%2FzKqa6BfDAXIsrgnIhTekcxnmazgot%2Bo4W7F2TGtzqfyWQQ%2BvlWVMpLapd7BmwF32uPTCvdVyi9iuvG4%2FHlWsQ3gMHKlL9BAMK1c72ycLEzExvMnTF6zW9auXGaukeERQE1ZaHnntz3wyaffFUWUdg9sfIulK7ERjgusRMgiz2L5R0t3Ubqe%2Bh8btIWmhk3gtuh%2F8NXb%2FmhGw8htPYwL6j%2BXpFg0Z67J%2FprElBUI88xzB6bMpK%2BK5jw0XZ5rNiILbH94MPor3Lh3Wjami3U%2FgUSm%2BJm8uQUIAb9GrNGDDwqD84D5qq28UyRU%2BM6FOU8w2Ep%2FLeSaioqA2ol95alMwKIfn929EaXhpsz2u%2BJ6H3dcjDW83FEe3iZLa14qBwt8Ltr%2FBpycJpLhDZnFHdNJlRFEK8YnAXzST2Aoj8oWH5%2FRlL0tffxt6BCGO%2FKcl17Pes9wVLLBRwXmIaEqW%2BfrzK6yZObR1UwtzqEEzHwUJncuGxMJbr5sv9X4VnslBzhDDBp%2FRymnf9zJMfufYCRe3MUEMXmgqDIM6ujrap4dLpcgiqbPznRV88pW%2BU91wLtspIj4MIHkqL8GOqUBNZ6oZkoLPzVM5OkK6fa3C7dN00KG%2BWfJPxNBmLqf3YxkBK0omcBCIYSPXzwZavUNnvhQqvfOxDxVoaNuPUQTYU1B0sUVYgtHODo7AWF0%2Bzi9ImmZgs1jzhbFRKFQZRYyBOyExESt690%2BNl%2F5XvdYcDnGpAYjgUTwzQPNN7%2BXrtzgN7ch6bzlEROQ25zDkROyU2CMwNr0fkj3sTQr2wTf%2FqCV9Qqb&X-Amz-Signature=f4ecfddd0af1e93383ca608adaacd015711023c82fedbfbe3d13acfdc8167876&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISKP74W%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEMm2rf76srECpLTCo7%2F8kqmqnggmxJ4yfx7KdprlY4YAiEAwSbEN5Lm1CDc5wEY%2B2Z0NGkeRqagdpstrI6LpZ2XlnoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIHdhBLd9SBQhFOcSrcA1SNZu%2B%2BBBmJnW5E3lET5Qx8Q7TlcZFqq%2B8AhUHypndOy7tlmvZSctd6%2FzKqa6BfDAXIsrgnIhTekcxnmazgot%2Bo4W7F2TGtzqfyWQQ%2BvlWVMpLapd7BmwF32uPTCvdVyi9iuvG4%2FHlWsQ3gMHKlL9BAMK1c72ycLEzExvMnTF6zW9auXGaukeERQE1ZaHnntz3wyaffFUWUdg9sfIulK7ERjgusRMgiz2L5R0t3Ubqe%2Bh8btIWmhk3gtuh%2F8NXb%2FmhGw8htPYwL6j%2BXpFg0Z67J%2FprElBUI88xzB6bMpK%2BK5jw0XZ5rNiILbH94MPor3Lh3Wjami3U%2FgUSm%2BJm8uQUIAb9GrNGDDwqD84D5qq28UyRU%2BM6FOU8w2Ep%2FLeSaioqA2ol95alMwKIfn929EaXhpsz2u%2BJ6H3dcjDW83FEe3iZLa14qBwt8Ltr%2FBpycJpLhDZnFHdNJlRFEK8YnAXzST2Aoj8oWH5%2FRlL0tffxt6BCGO%2FKcl17Pes9wVLLBRwXmIaEqW%2BfrzK6yZObR1UwtzqEEzHwUJncuGxMJbr5sv9X4VnslBzhDDBp%2FRymnf9zJMfufYCRe3MUEMXmgqDIM6ujrap4dLpcgiqbPznRV88pW%2BU91wLtspIj4MIHkqL8GOqUBNZ6oZkoLPzVM5OkK6fa3C7dN00KG%2BWfJPxNBmLqf3YxkBK0omcBCIYSPXzwZavUNnvhQqvfOxDxVoaNuPUQTYU1B0sUVYgtHODo7AWF0%2Bzi9ImmZgs1jzhbFRKFQZRYyBOyExESt690%2BNl%2F5XvdYcDnGpAYjgUTwzQPNN7%2BXrtzgN7ch6bzlEROQ25zDkROyU2CMwNr0fkj3sTQr2wTf%2FqCV9Qqb&X-Amz-Signature=0d060fb56a7aa7fc1ebf9f47ae65d0e50d0475743730c3904aff3179a6d045ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISKP74W%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEMm2rf76srECpLTCo7%2F8kqmqnggmxJ4yfx7KdprlY4YAiEAwSbEN5Lm1CDc5wEY%2B2Z0NGkeRqagdpstrI6LpZ2XlnoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIHdhBLd9SBQhFOcSrcA1SNZu%2B%2BBBmJnW5E3lET5Qx8Q7TlcZFqq%2B8AhUHypndOy7tlmvZSctd6%2FzKqa6BfDAXIsrgnIhTekcxnmazgot%2Bo4W7F2TGtzqfyWQQ%2BvlWVMpLapd7BmwF32uPTCvdVyi9iuvG4%2FHlWsQ3gMHKlL9BAMK1c72ycLEzExvMnTF6zW9auXGaukeERQE1ZaHnntz3wyaffFUWUdg9sfIulK7ERjgusRMgiz2L5R0t3Ubqe%2Bh8btIWmhk3gtuh%2F8NXb%2FmhGw8htPYwL6j%2BXpFg0Z67J%2FprElBUI88xzB6bMpK%2BK5jw0XZ5rNiILbH94MPor3Lh3Wjami3U%2FgUSm%2BJm8uQUIAb9GrNGDDwqD84D5qq28UyRU%2BM6FOU8w2Ep%2FLeSaioqA2ol95alMwKIfn929EaXhpsz2u%2BJ6H3dcjDW83FEe3iZLa14qBwt8Ltr%2FBpycJpLhDZnFHdNJlRFEK8YnAXzST2Aoj8oWH5%2FRlL0tffxt6BCGO%2FKcl17Pes9wVLLBRwXmIaEqW%2BfrzK6yZObR1UwtzqEEzHwUJncuGxMJbr5sv9X4VnslBzhDDBp%2FRymnf9zJMfufYCRe3MUEMXmgqDIM6ujrap4dLpcgiqbPznRV88pW%2BU91wLtspIj4MIHkqL8GOqUBNZ6oZkoLPzVM5OkK6fa3C7dN00KG%2BWfJPxNBmLqf3YxkBK0omcBCIYSPXzwZavUNnvhQqvfOxDxVoaNuPUQTYU1B0sUVYgtHODo7AWF0%2Bzi9ImmZgs1jzhbFRKFQZRYyBOyExESt690%2BNl%2F5XvdYcDnGpAYjgUTwzQPNN7%2BXrtzgN7ch6bzlEROQ25zDkROyU2CMwNr0fkj3sTQr2wTf%2FqCV9Qqb&X-Amz-Signature=46371f1e4499479c26ad1bc7ec8c2165e6b7f8b6d5d70e0ee6339779235a5f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISKP74W%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEMm2rf76srECpLTCo7%2F8kqmqnggmxJ4yfx7KdprlY4YAiEAwSbEN5Lm1CDc5wEY%2B2Z0NGkeRqagdpstrI6LpZ2XlnoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIHdhBLd9SBQhFOcSrcA1SNZu%2B%2BBBmJnW5E3lET5Qx8Q7TlcZFqq%2B8AhUHypndOy7tlmvZSctd6%2FzKqa6BfDAXIsrgnIhTekcxnmazgot%2Bo4W7F2TGtzqfyWQQ%2BvlWVMpLapd7BmwF32uPTCvdVyi9iuvG4%2FHlWsQ3gMHKlL9BAMK1c72ycLEzExvMnTF6zW9auXGaukeERQE1ZaHnntz3wyaffFUWUdg9sfIulK7ERjgusRMgiz2L5R0t3Ubqe%2Bh8btIWmhk3gtuh%2F8NXb%2FmhGw8htPYwL6j%2BXpFg0Z67J%2FprElBUI88xzB6bMpK%2BK5jw0XZ5rNiILbH94MPor3Lh3Wjami3U%2FgUSm%2BJm8uQUIAb9GrNGDDwqD84D5qq28UyRU%2BM6FOU8w2Ep%2FLeSaioqA2ol95alMwKIfn929EaXhpsz2u%2BJ6H3dcjDW83FEe3iZLa14qBwt8Ltr%2FBpycJpLhDZnFHdNJlRFEK8YnAXzST2Aoj8oWH5%2FRlL0tffxt6BCGO%2FKcl17Pes9wVLLBRwXmIaEqW%2BfrzK6yZObR1UwtzqEEzHwUJncuGxMJbr5sv9X4VnslBzhDDBp%2FRymnf9zJMfufYCRe3MUEMXmgqDIM6ujrap4dLpcgiqbPznRV88pW%2BU91wLtspIj4MIHkqL8GOqUBNZ6oZkoLPzVM5OkK6fa3C7dN00KG%2BWfJPxNBmLqf3YxkBK0omcBCIYSPXzwZavUNnvhQqvfOxDxVoaNuPUQTYU1B0sUVYgtHODo7AWF0%2Bzi9ImmZgs1jzhbFRKFQZRYyBOyExESt690%2BNl%2F5XvdYcDnGpAYjgUTwzQPNN7%2BXrtzgN7ch6bzlEROQ25zDkROyU2CMwNr0fkj3sTQr2wTf%2FqCV9Qqb&X-Amz-Signature=e13b3a28dd8717ca74b45ac2c3be539fab26600161f3d1c6821cb0cd49fe5b74&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISKP74W%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEMm2rf76srECpLTCo7%2F8kqmqnggmxJ4yfx7KdprlY4YAiEAwSbEN5Lm1CDc5wEY%2B2Z0NGkeRqagdpstrI6LpZ2XlnoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIHdhBLd9SBQhFOcSrcA1SNZu%2B%2BBBmJnW5E3lET5Qx8Q7TlcZFqq%2B8AhUHypndOy7tlmvZSctd6%2FzKqa6BfDAXIsrgnIhTekcxnmazgot%2Bo4W7F2TGtzqfyWQQ%2BvlWVMpLapd7BmwF32uPTCvdVyi9iuvG4%2FHlWsQ3gMHKlL9BAMK1c72ycLEzExvMnTF6zW9auXGaukeERQE1ZaHnntz3wyaffFUWUdg9sfIulK7ERjgusRMgiz2L5R0t3Ubqe%2Bh8btIWmhk3gtuh%2F8NXb%2FmhGw8htPYwL6j%2BXpFg0Z67J%2FprElBUI88xzB6bMpK%2BK5jw0XZ5rNiILbH94MPor3Lh3Wjami3U%2FgUSm%2BJm8uQUIAb9GrNGDDwqD84D5qq28UyRU%2BM6FOU8w2Ep%2FLeSaioqA2ol95alMwKIfn929EaXhpsz2u%2BJ6H3dcjDW83FEe3iZLa14qBwt8Ltr%2FBpycJpLhDZnFHdNJlRFEK8YnAXzST2Aoj8oWH5%2FRlL0tffxt6BCGO%2FKcl17Pes9wVLLBRwXmIaEqW%2BfrzK6yZObR1UwtzqEEzHwUJncuGxMJbr5sv9X4VnslBzhDDBp%2FRymnf9zJMfufYCRe3MUEMXmgqDIM6ujrap4dLpcgiqbPznRV88pW%2BU91wLtspIj4MIHkqL8GOqUBNZ6oZkoLPzVM5OkK6fa3C7dN00KG%2BWfJPxNBmLqf3YxkBK0omcBCIYSPXzwZavUNnvhQqvfOxDxVoaNuPUQTYU1B0sUVYgtHODo7AWF0%2Bzi9ImmZgs1jzhbFRKFQZRYyBOyExESt690%2BNl%2F5XvdYcDnGpAYjgUTwzQPNN7%2BXrtzgN7ch6bzlEROQ25zDkROyU2CMwNr0fkj3sTQr2wTf%2FqCV9Qqb&X-Amz-Signature=5250c61df996673fcd80f4e4d7e379e3012171cf7363a2786b4fff607cb6d951&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
