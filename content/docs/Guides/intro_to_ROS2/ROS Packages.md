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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44NL7NP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABxAoS9lUYgF72h9bNiKKzo4PdM0gcYGx%2FIY7NoW7uwIhAIVejHWWTQb%2Ft7icFxa4dScF9TyBW4mbetP1QVRer%2Be1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgwB7gdympb%2F48%2BOlRUq3AMX9%2FGZ7aR8ZVPNPRBwG2ltm1hj15GaqPfF1h%2BpCWff3CnDiUpuYBwzoSWMcaT3Pmmydiy8bzgekyB%2FMRUbpT3dlNbJ7CEe%2BvTbS5%2BjvE8fTCu%2FQjcUPQTKLGK2BPqQSW31%2B27q8a0XabwDbHavfws3ZLBSN9r2qMa%2BxDQ5aKFXgwdKn0%2FkLDZypf1dXSClH7FPgrRyEdpAioep5aUwpHnZymF13Y94i%2B8jXhfzMyXQFJ9EY0UMY29uincSuxt7Ip24fdIx8whY3WqXCSdbtJ78PjnxjZWdZCnSjbhRaow9qfmQQ8IUoJbeik%2B%2B7PpRggcyyP9BIivRx1rSK4y1INdWpD37tmlR6sFsvDHn0yOF2OJsm5dnNb5VHTzid1FFqh60Wmj87zhlLiJuqL93Ndjg1OemDPdRt7k4MZbybftF5eeQ7VhoHZJ%2FqKewNYvci3XRsB50ax7q9H2i7S09TkrVQ5TeYME3ASn8YczCef4wE7JGj7MrRmQED%2Be6h4QLljwxCkmd9isw3Bxm2%2B4qYCOEKyFImoNyvsM3M0bKvFH2VhTtAm6jYx6igfLwPRyXK2rJnza944Pb041xWDmdzXFNMsgQmTJfmW1yik4f00Jmo1m08bbaImIlLdYI1jD8yL6%2FBjqkAeUvWuiIcNVTXQBVPgELk1N7nTh01Z16TiY8nbhzJFKArsf%2F35%2BBmk4MfVHH41HY8eT46RcLvwwEoR0MVmV2RScJh7E7D67s8Wdlx%2FWbYC8RFOlO8JH0wswxIo%2FxmyU%2BkwJHuGHQ0fhPmtiNIbwkMJS1GcIpJDuzvnbKR0txuhf2%2BzNd9471LFX0zsiIZ1cpmax%2BHJuj3uvE2ZBTcRQb8USqyetr&X-Amz-Signature=1817e7f3d07f61213c44a5ac86bf91bc689fe17c0dd8c4025b4f217e645c53b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44NL7NP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABxAoS9lUYgF72h9bNiKKzo4PdM0gcYGx%2FIY7NoW7uwIhAIVejHWWTQb%2Ft7icFxa4dScF9TyBW4mbetP1QVRer%2Be1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgwB7gdympb%2F48%2BOlRUq3AMX9%2FGZ7aR8ZVPNPRBwG2ltm1hj15GaqPfF1h%2BpCWff3CnDiUpuYBwzoSWMcaT3Pmmydiy8bzgekyB%2FMRUbpT3dlNbJ7CEe%2BvTbS5%2BjvE8fTCu%2FQjcUPQTKLGK2BPqQSW31%2B27q8a0XabwDbHavfws3ZLBSN9r2qMa%2BxDQ5aKFXgwdKn0%2FkLDZypf1dXSClH7FPgrRyEdpAioep5aUwpHnZymF13Y94i%2B8jXhfzMyXQFJ9EY0UMY29uincSuxt7Ip24fdIx8whY3WqXCSdbtJ78PjnxjZWdZCnSjbhRaow9qfmQQ8IUoJbeik%2B%2B7PpRggcyyP9BIivRx1rSK4y1INdWpD37tmlR6sFsvDHn0yOF2OJsm5dnNb5VHTzid1FFqh60Wmj87zhlLiJuqL93Ndjg1OemDPdRt7k4MZbybftF5eeQ7VhoHZJ%2FqKewNYvci3XRsB50ax7q9H2i7S09TkrVQ5TeYME3ASn8YczCef4wE7JGj7MrRmQED%2Be6h4QLljwxCkmd9isw3Bxm2%2B4qYCOEKyFImoNyvsM3M0bKvFH2VhTtAm6jYx6igfLwPRyXK2rJnza944Pb041xWDmdzXFNMsgQmTJfmW1yik4f00Jmo1m08bbaImIlLdYI1jD8yL6%2FBjqkAeUvWuiIcNVTXQBVPgELk1N7nTh01Z16TiY8nbhzJFKArsf%2F35%2BBmk4MfVHH41HY8eT46RcLvwwEoR0MVmV2RScJh7E7D67s8Wdlx%2FWbYC8RFOlO8JH0wswxIo%2FxmyU%2BkwJHuGHQ0fhPmtiNIbwkMJS1GcIpJDuzvnbKR0txuhf2%2BzNd9471LFX0zsiIZ1cpmax%2BHJuj3uvE2ZBTcRQb8USqyetr&X-Amz-Signature=ae7080da522060c00022c6358610e15a58b409be9b6c84a9a4f9840fba536035&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44NL7NP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABxAoS9lUYgF72h9bNiKKzo4PdM0gcYGx%2FIY7NoW7uwIhAIVejHWWTQb%2Ft7icFxa4dScF9TyBW4mbetP1QVRer%2Be1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgwB7gdympb%2F48%2BOlRUq3AMX9%2FGZ7aR8ZVPNPRBwG2ltm1hj15GaqPfF1h%2BpCWff3CnDiUpuYBwzoSWMcaT3Pmmydiy8bzgekyB%2FMRUbpT3dlNbJ7CEe%2BvTbS5%2BjvE8fTCu%2FQjcUPQTKLGK2BPqQSW31%2B27q8a0XabwDbHavfws3ZLBSN9r2qMa%2BxDQ5aKFXgwdKn0%2FkLDZypf1dXSClH7FPgrRyEdpAioep5aUwpHnZymF13Y94i%2B8jXhfzMyXQFJ9EY0UMY29uincSuxt7Ip24fdIx8whY3WqXCSdbtJ78PjnxjZWdZCnSjbhRaow9qfmQQ8IUoJbeik%2B%2B7PpRggcyyP9BIivRx1rSK4y1INdWpD37tmlR6sFsvDHn0yOF2OJsm5dnNb5VHTzid1FFqh60Wmj87zhlLiJuqL93Ndjg1OemDPdRt7k4MZbybftF5eeQ7VhoHZJ%2FqKewNYvci3XRsB50ax7q9H2i7S09TkrVQ5TeYME3ASn8YczCef4wE7JGj7MrRmQED%2Be6h4QLljwxCkmd9isw3Bxm2%2B4qYCOEKyFImoNyvsM3M0bKvFH2VhTtAm6jYx6igfLwPRyXK2rJnza944Pb041xWDmdzXFNMsgQmTJfmW1yik4f00Jmo1m08bbaImIlLdYI1jD8yL6%2FBjqkAeUvWuiIcNVTXQBVPgELk1N7nTh01Z16TiY8nbhzJFKArsf%2F35%2BBmk4MfVHH41HY8eT46RcLvwwEoR0MVmV2RScJh7E7D67s8Wdlx%2FWbYC8RFOlO8JH0wswxIo%2FxmyU%2BkwJHuGHQ0fhPmtiNIbwkMJS1GcIpJDuzvnbKR0txuhf2%2BzNd9471LFX0zsiIZ1cpmax%2BHJuj3uvE2ZBTcRQb8USqyetr&X-Amz-Signature=55dbb001fbf11778594c5a7f366bc83145becc1e0ed4eaae4d658cbe017e4e55&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44NL7NP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABxAoS9lUYgF72h9bNiKKzo4PdM0gcYGx%2FIY7NoW7uwIhAIVejHWWTQb%2Ft7icFxa4dScF9TyBW4mbetP1QVRer%2Be1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgwB7gdympb%2F48%2BOlRUq3AMX9%2FGZ7aR8ZVPNPRBwG2ltm1hj15GaqPfF1h%2BpCWff3CnDiUpuYBwzoSWMcaT3Pmmydiy8bzgekyB%2FMRUbpT3dlNbJ7CEe%2BvTbS5%2BjvE8fTCu%2FQjcUPQTKLGK2BPqQSW31%2B27q8a0XabwDbHavfws3ZLBSN9r2qMa%2BxDQ5aKFXgwdKn0%2FkLDZypf1dXSClH7FPgrRyEdpAioep5aUwpHnZymF13Y94i%2B8jXhfzMyXQFJ9EY0UMY29uincSuxt7Ip24fdIx8whY3WqXCSdbtJ78PjnxjZWdZCnSjbhRaow9qfmQQ8IUoJbeik%2B%2B7PpRggcyyP9BIivRx1rSK4y1INdWpD37tmlR6sFsvDHn0yOF2OJsm5dnNb5VHTzid1FFqh60Wmj87zhlLiJuqL93Ndjg1OemDPdRt7k4MZbybftF5eeQ7VhoHZJ%2FqKewNYvci3XRsB50ax7q9H2i7S09TkrVQ5TeYME3ASn8YczCef4wE7JGj7MrRmQED%2Be6h4QLljwxCkmd9isw3Bxm2%2B4qYCOEKyFImoNyvsM3M0bKvFH2VhTtAm6jYx6igfLwPRyXK2rJnza944Pb041xWDmdzXFNMsgQmTJfmW1yik4f00Jmo1m08bbaImIlLdYI1jD8yL6%2FBjqkAeUvWuiIcNVTXQBVPgELk1N7nTh01Z16TiY8nbhzJFKArsf%2F35%2BBmk4MfVHH41HY8eT46RcLvwwEoR0MVmV2RScJh7E7D67s8Wdlx%2FWbYC8RFOlO8JH0wswxIo%2FxmyU%2BkwJHuGHQ0fhPmtiNIbwkMJS1GcIpJDuzvnbKR0txuhf2%2BzNd9471LFX0zsiIZ1cpmax%2BHJuj3uvE2ZBTcRQb8USqyetr&X-Amz-Signature=507e695ba67e8b5222cd38c207c8e881f88352cbde752478efec163ffd7a20cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44NL7NP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABxAoS9lUYgF72h9bNiKKzo4PdM0gcYGx%2FIY7NoW7uwIhAIVejHWWTQb%2Ft7icFxa4dScF9TyBW4mbetP1QVRer%2Be1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgwB7gdympb%2F48%2BOlRUq3AMX9%2FGZ7aR8ZVPNPRBwG2ltm1hj15GaqPfF1h%2BpCWff3CnDiUpuYBwzoSWMcaT3Pmmydiy8bzgekyB%2FMRUbpT3dlNbJ7CEe%2BvTbS5%2BjvE8fTCu%2FQjcUPQTKLGK2BPqQSW31%2B27q8a0XabwDbHavfws3ZLBSN9r2qMa%2BxDQ5aKFXgwdKn0%2FkLDZypf1dXSClH7FPgrRyEdpAioep5aUwpHnZymF13Y94i%2B8jXhfzMyXQFJ9EY0UMY29uincSuxt7Ip24fdIx8whY3WqXCSdbtJ78PjnxjZWdZCnSjbhRaow9qfmQQ8IUoJbeik%2B%2B7PpRggcyyP9BIivRx1rSK4y1INdWpD37tmlR6sFsvDHn0yOF2OJsm5dnNb5VHTzid1FFqh60Wmj87zhlLiJuqL93Ndjg1OemDPdRt7k4MZbybftF5eeQ7VhoHZJ%2FqKewNYvci3XRsB50ax7q9H2i7S09TkrVQ5TeYME3ASn8YczCef4wE7JGj7MrRmQED%2Be6h4QLljwxCkmd9isw3Bxm2%2B4qYCOEKyFImoNyvsM3M0bKvFH2VhTtAm6jYx6igfLwPRyXK2rJnza944Pb041xWDmdzXFNMsgQmTJfmW1yik4f00Jmo1m08bbaImIlLdYI1jD8yL6%2FBjqkAeUvWuiIcNVTXQBVPgELk1N7nTh01Z16TiY8nbhzJFKArsf%2F35%2BBmk4MfVHH41HY8eT46RcLvwwEoR0MVmV2RScJh7E7D67s8Wdlx%2FWbYC8RFOlO8JH0wswxIo%2FxmyU%2BkwJHuGHQ0fhPmtiNIbwkMJS1GcIpJDuzvnbKR0txuhf2%2BzNd9471LFX0zsiIZ1cpmax%2BHJuj3uvE2ZBTcRQb8USqyetr&X-Amz-Signature=d6a3d73e68240ec1216032481eac3d3098f22c71d707060cb314f3ed9a041e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44NL7NP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABxAoS9lUYgF72h9bNiKKzo4PdM0gcYGx%2FIY7NoW7uwIhAIVejHWWTQb%2Ft7icFxa4dScF9TyBW4mbetP1QVRer%2Be1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgwB7gdympb%2F48%2BOlRUq3AMX9%2FGZ7aR8ZVPNPRBwG2ltm1hj15GaqPfF1h%2BpCWff3CnDiUpuYBwzoSWMcaT3Pmmydiy8bzgekyB%2FMRUbpT3dlNbJ7CEe%2BvTbS5%2BjvE8fTCu%2FQjcUPQTKLGK2BPqQSW31%2B27q8a0XabwDbHavfws3ZLBSN9r2qMa%2BxDQ5aKFXgwdKn0%2FkLDZypf1dXSClH7FPgrRyEdpAioep5aUwpHnZymF13Y94i%2B8jXhfzMyXQFJ9EY0UMY29uincSuxt7Ip24fdIx8whY3WqXCSdbtJ78PjnxjZWdZCnSjbhRaow9qfmQQ8IUoJbeik%2B%2B7PpRggcyyP9BIivRx1rSK4y1INdWpD37tmlR6sFsvDHn0yOF2OJsm5dnNb5VHTzid1FFqh60Wmj87zhlLiJuqL93Ndjg1OemDPdRt7k4MZbybftF5eeQ7VhoHZJ%2FqKewNYvci3XRsB50ax7q9H2i7S09TkrVQ5TeYME3ASn8YczCef4wE7JGj7MrRmQED%2Be6h4QLljwxCkmd9isw3Bxm2%2B4qYCOEKyFImoNyvsM3M0bKvFH2VhTtAm6jYx6igfLwPRyXK2rJnza944Pb041xWDmdzXFNMsgQmTJfmW1yik4f00Jmo1m08bbaImIlLdYI1jD8yL6%2FBjqkAeUvWuiIcNVTXQBVPgELk1N7nTh01Z16TiY8nbhzJFKArsf%2F35%2BBmk4MfVHH41HY8eT46RcLvwwEoR0MVmV2RScJh7E7D67s8Wdlx%2FWbYC8RFOlO8JH0wswxIo%2FxmyU%2BkwJHuGHQ0fhPmtiNIbwkMJS1GcIpJDuzvnbKR0txuhf2%2BzNd9471LFX0zsiIZ1cpmax%2BHJuj3uvE2ZBTcRQb8USqyetr&X-Amz-Signature=55ba7a8246563ffc0d9b2a8c9d959165c4168ab7b1bc228eb649fb011b41f978&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44NL7NP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABxAoS9lUYgF72h9bNiKKzo4PdM0gcYGx%2FIY7NoW7uwIhAIVejHWWTQb%2Ft7icFxa4dScF9TyBW4mbetP1QVRer%2Be1Kv8DCBIQABoMNjM3NDIzMTgzODA1IgwB7gdympb%2F48%2BOlRUq3AMX9%2FGZ7aR8ZVPNPRBwG2ltm1hj15GaqPfF1h%2BpCWff3CnDiUpuYBwzoSWMcaT3Pmmydiy8bzgekyB%2FMRUbpT3dlNbJ7CEe%2BvTbS5%2BjvE8fTCu%2FQjcUPQTKLGK2BPqQSW31%2B27q8a0XabwDbHavfws3ZLBSN9r2qMa%2BxDQ5aKFXgwdKn0%2FkLDZypf1dXSClH7FPgrRyEdpAioep5aUwpHnZymF13Y94i%2B8jXhfzMyXQFJ9EY0UMY29uincSuxt7Ip24fdIx8whY3WqXCSdbtJ78PjnxjZWdZCnSjbhRaow9qfmQQ8IUoJbeik%2B%2B7PpRggcyyP9BIivRx1rSK4y1INdWpD37tmlR6sFsvDHn0yOF2OJsm5dnNb5VHTzid1FFqh60Wmj87zhlLiJuqL93Ndjg1OemDPdRt7k4MZbybftF5eeQ7VhoHZJ%2FqKewNYvci3XRsB50ax7q9H2i7S09TkrVQ5TeYME3ASn8YczCef4wE7JGj7MrRmQED%2Be6h4QLljwxCkmd9isw3Bxm2%2B4qYCOEKyFImoNyvsM3M0bKvFH2VhTtAm6jYx6igfLwPRyXK2rJnza944Pb041xWDmdzXFNMsgQmTJfmW1yik4f00Jmo1m08bbaImIlLdYI1jD8yL6%2FBjqkAeUvWuiIcNVTXQBVPgELk1N7nTh01Z16TiY8nbhzJFKArsf%2F35%2BBmk4MfVHH41HY8eT46RcLvwwEoR0MVmV2RScJh7E7D67s8Wdlx%2FWbYC8RFOlO8JH0wswxIo%2FxmyU%2BkwJHuGHQ0fhPmtiNIbwkMJS1GcIpJDuzvnbKR0txuhf2%2BzNd9471LFX0zsiIZ1cpmax%2BHJuj3uvE2ZBTcRQb8USqyetr&X-Amz-Signature=635097afad75ca3603d55b1935fc639d7deb7b21de69fa47a2ace68bdc3b634d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
