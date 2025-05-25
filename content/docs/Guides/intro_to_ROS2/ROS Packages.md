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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5V5PKG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCAIc5IKnX6waqM7xvjl0R7TlO2hAb8V5JLi%2FjYSYxkpgIgA%2FxIb9Vjs2RLI8r63z%2FMEnJt%2BVmc4DecbNHItsAhOJcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDtQ9bWdYa3nrAbCQyrcAzY3QjqmVgCoagX3UyLxT3kHlJJoC9ZAxyWpCLKqgo0HM8xFK1tCkTt2kKEwydMj9N%2FBX9uu30SbREVKJnweuZAMFZ9NKx3pmGhiS3j9Maw1YiOlW%2BAAKUniJZzj5hbZe%2BzDk3zKXDmgD0rmXTeSDbMEKFtGYPqKpmruKHg4FYRxjim0vjLWVilPnr90U3tSd25R9vS7pdYOa8YoYacrkiSk1CRV5aDWKF5vhGENRJF0WZ5DgAWBepI0bJZPE%2FBuRh60JoBpaYvLdUSaPRf%2FQMkCwrFcSgZ6bq2xYEmJw7prhRKcDZUfORXlu7RpJ5lGdOth%2FeiNI9bVqbjf756CU06UB%2FQ0UXEGZ4OhRfZSZ49fBBCyMmWegU98av%2FGf00soybuXuV7l%2Bu5M3gE1HPXMzkd%2F%2BzvhrInD%2B5J6eK4orlLt9l%2BiioC137Ow2J8fstPqKtzC7baXvxsIHur%2FEMAj7suaujZYxQXU3LMxUyUSlflQvXLz7shrpKKyTe8uCzGiddgi2u0BXFvxzq7mWbgcAzbo9DS8t2%2Fhzi4nIllHGJojvgd%2FkFmD5DmUz0ROx9DMy74dAqsQ%2F%2FtEp5EoviqeBNFClnXkc5ggN3tgP0oo35tdCDpQbxZg4U7IC4IMKD1zcEGOqUBYsVS23OnOUcz4bBf2QQRlQuey1v1G5JPa4vWY3uqGpkmpfElQYKYleqvpOC1nvoHmmR1qGjYtHG0hFye2TLADKn6869sT2fZy9bULDJl%2B9aYHW6InFZ8MBOf50NpEWF6hPyUo7%2FdlMHwpDpw7AOkepXfD%2FmJ1q1FXw47AclXHDfakz5F5cx%2Fn7zpW%2BXc7lmgsIPTCv%2Frq0IPEu0mk3ikXkLvcw%2Fv&X-Amz-Signature=04167296eb2d0383bfe90424efd172396ae0eb16c78f49be7db122f35da62a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5V5PKG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCAIc5IKnX6waqM7xvjl0R7TlO2hAb8V5JLi%2FjYSYxkpgIgA%2FxIb9Vjs2RLI8r63z%2FMEnJt%2BVmc4DecbNHItsAhOJcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDtQ9bWdYa3nrAbCQyrcAzY3QjqmVgCoagX3UyLxT3kHlJJoC9ZAxyWpCLKqgo0HM8xFK1tCkTt2kKEwydMj9N%2FBX9uu30SbREVKJnweuZAMFZ9NKx3pmGhiS3j9Maw1YiOlW%2BAAKUniJZzj5hbZe%2BzDk3zKXDmgD0rmXTeSDbMEKFtGYPqKpmruKHg4FYRxjim0vjLWVilPnr90U3tSd25R9vS7pdYOa8YoYacrkiSk1CRV5aDWKF5vhGENRJF0WZ5DgAWBepI0bJZPE%2FBuRh60JoBpaYvLdUSaPRf%2FQMkCwrFcSgZ6bq2xYEmJw7prhRKcDZUfORXlu7RpJ5lGdOth%2FeiNI9bVqbjf756CU06UB%2FQ0UXEGZ4OhRfZSZ49fBBCyMmWegU98av%2FGf00soybuXuV7l%2Bu5M3gE1HPXMzkd%2F%2BzvhrInD%2B5J6eK4orlLt9l%2BiioC137Ow2J8fstPqKtzC7baXvxsIHur%2FEMAj7suaujZYxQXU3LMxUyUSlflQvXLz7shrpKKyTe8uCzGiddgi2u0BXFvxzq7mWbgcAzbo9DS8t2%2Fhzi4nIllHGJojvgd%2FkFmD5DmUz0ROx9DMy74dAqsQ%2F%2FtEp5EoviqeBNFClnXkc5ggN3tgP0oo35tdCDpQbxZg4U7IC4IMKD1zcEGOqUBYsVS23OnOUcz4bBf2QQRlQuey1v1G5JPa4vWY3uqGpkmpfElQYKYleqvpOC1nvoHmmR1qGjYtHG0hFye2TLADKn6869sT2fZy9bULDJl%2B9aYHW6InFZ8MBOf50NpEWF6hPyUo7%2FdlMHwpDpw7AOkepXfD%2FmJ1q1FXw47AclXHDfakz5F5cx%2Fn7zpW%2BXc7lmgsIPTCv%2Frq0IPEu0mk3ikXkLvcw%2Fv&X-Amz-Signature=8a5b2093700e0cfdfa5680da702cbed8f9e17b7b05eeb44c4c8e1a1b44e5cc11&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5V5PKG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCAIc5IKnX6waqM7xvjl0R7TlO2hAb8V5JLi%2FjYSYxkpgIgA%2FxIb9Vjs2RLI8r63z%2FMEnJt%2BVmc4DecbNHItsAhOJcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDtQ9bWdYa3nrAbCQyrcAzY3QjqmVgCoagX3UyLxT3kHlJJoC9ZAxyWpCLKqgo0HM8xFK1tCkTt2kKEwydMj9N%2FBX9uu30SbREVKJnweuZAMFZ9NKx3pmGhiS3j9Maw1YiOlW%2BAAKUniJZzj5hbZe%2BzDk3zKXDmgD0rmXTeSDbMEKFtGYPqKpmruKHg4FYRxjim0vjLWVilPnr90U3tSd25R9vS7pdYOa8YoYacrkiSk1CRV5aDWKF5vhGENRJF0WZ5DgAWBepI0bJZPE%2FBuRh60JoBpaYvLdUSaPRf%2FQMkCwrFcSgZ6bq2xYEmJw7prhRKcDZUfORXlu7RpJ5lGdOth%2FeiNI9bVqbjf756CU06UB%2FQ0UXEGZ4OhRfZSZ49fBBCyMmWegU98av%2FGf00soybuXuV7l%2Bu5M3gE1HPXMzkd%2F%2BzvhrInD%2B5J6eK4orlLt9l%2BiioC137Ow2J8fstPqKtzC7baXvxsIHur%2FEMAj7suaujZYxQXU3LMxUyUSlflQvXLz7shrpKKyTe8uCzGiddgi2u0BXFvxzq7mWbgcAzbo9DS8t2%2Fhzi4nIllHGJojvgd%2FkFmD5DmUz0ROx9DMy74dAqsQ%2F%2FtEp5EoviqeBNFClnXkc5ggN3tgP0oo35tdCDpQbxZg4U7IC4IMKD1zcEGOqUBYsVS23OnOUcz4bBf2QQRlQuey1v1G5JPa4vWY3uqGpkmpfElQYKYleqvpOC1nvoHmmR1qGjYtHG0hFye2TLADKn6869sT2fZy9bULDJl%2B9aYHW6InFZ8MBOf50NpEWF6hPyUo7%2FdlMHwpDpw7AOkepXfD%2FmJ1q1FXw47AclXHDfakz5F5cx%2Fn7zpW%2BXc7lmgsIPTCv%2Frq0IPEu0mk3ikXkLvcw%2Fv&X-Amz-Signature=35203dbc01ae18ec367cdb4606010d835e2e7189e0ccf615cbb95c40bcf3f7a9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5V5PKG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCAIc5IKnX6waqM7xvjl0R7TlO2hAb8V5JLi%2FjYSYxkpgIgA%2FxIb9Vjs2RLI8r63z%2FMEnJt%2BVmc4DecbNHItsAhOJcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDtQ9bWdYa3nrAbCQyrcAzY3QjqmVgCoagX3UyLxT3kHlJJoC9ZAxyWpCLKqgo0HM8xFK1tCkTt2kKEwydMj9N%2FBX9uu30SbREVKJnweuZAMFZ9NKx3pmGhiS3j9Maw1YiOlW%2BAAKUniJZzj5hbZe%2BzDk3zKXDmgD0rmXTeSDbMEKFtGYPqKpmruKHg4FYRxjim0vjLWVilPnr90U3tSd25R9vS7pdYOa8YoYacrkiSk1CRV5aDWKF5vhGENRJF0WZ5DgAWBepI0bJZPE%2FBuRh60JoBpaYvLdUSaPRf%2FQMkCwrFcSgZ6bq2xYEmJw7prhRKcDZUfORXlu7RpJ5lGdOth%2FeiNI9bVqbjf756CU06UB%2FQ0UXEGZ4OhRfZSZ49fBBCyMmWegU98av%2FGf00soybuXuV7l%2Bu5M3gE1HPXMzkd%2F%2BzvhrInD%2B5J6eK4orlLt9l%2BiioC137Ow2J8fstPqKtzC7baXvxsIHur%2FEMAj7suaujZYxQXU3LMxUyUSlflQvXLz7shrpKKyTe8uCzGiddgi2u0BXFvxzq7mWbgcAzbo9DS8t2%2Fhzi4nIllHGJojvgd%2FkFmD5DmUz0ROx9DMy74dAqsQ%2F%2FtEp5EoviqeBNFClnXkc5ggN3tgP0oo35tdCDpQbxZg4U7IC4IMKD1zcEGOqUBYsVS23OnOUcz4bBf2QQRlQuey1v1G5JPa4vWY3uqGpkmpfElQYKYleqvpOC1nvoHmmR1qGjYtHG0hFye2TLADKn6869sT2fZy9bULDJl%2B9aYHW6InFZ8MBOf50NpEWF6hPyUo7%2FdlMHwpDpw7AOkepXfD%2FmJ1q1FXw47AclXHDfakz5F5cx%2Fn7zpW%2BXc7lmgsIPTCv%2Frq0IPEu0mk3ikXkLvcw%2Fv&X-Amz-Signature=7a3c36de928c13fa0afc7a06749363bf540b240aca8304f642cc3bf95ad024f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5V5PKG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCAIc5IKnX6waqM7xvjl0R7TlO2hAb8V5JLi%2FjYSYxkpgIgA%2FxIb9Vjs2RLI8r63z%2FMEnJt%2BVmc4DecbNHItsAhOJcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDtQ9bWdYa3nrAbCQyrcAzY3QjqmVgCoagX3UyLxT3kHlJJoC9ZAxyWpCLKqgo0HM8xFK1tCkTt2kKEwydMj9N%2FBX9uu30SbREVKJnweuZAMFZ9NKx3pmGhiS3j9Maw1YiOlW%2BAAKUniJZzj5hbZe%2BzDk3zKXDmgD0rmXTeSDbMEKFtGYPqKpmruKHg4FYRxjim0vjLWVilPnr90U3tSd25R9vS7pdYOa8YoYacrkiSk1CRV5aDWKF5vhGENRJF0WZ5DgAWBepI0bJZPE%2FBuRh60JoBpaYvLdUSaPRf%2FQMkCwrFcSgZ6bq2xYEmJw7prhRKcDZUfORXlu7RpJ5lGdOth%2FeiNI9bVqbjf756CU06UB%2FQ0UXEGZ4OhRfZSZ49fBBCyMmWegU98av%2FGf00soybuXuV7l%2Bu5M3gE1HPXMzkd%2F%2BzvhrInD%2B5J6eK4orlLt9l%2BiioC137Ow2J8fstPqKtzC7baXvxsIHur%2FEMAj7suaujZYxQXU3LMxUyUSlflQvXLz7shrpKKyTe8uCzGiddgi2u0BXFvxzq7mWbgcAzbo9DS8t2%2Fhzi4nIllHGJojvgd%2FkFmD5DmUz0ROx9DMy74dAqsQ%2F%2FtEp5EoviqeBNFClnXkc5ggN3tgP0oo35tdCDpQbxZg4U7IC4IMKD1zcEGOqUBYsVS23OnOUcz4bBf2QQRlQuey1v1G5JPa4vWY3uqGpkmpfElQYKYleqvpOC1nvoHmmR1qGjYtHG0hFye2TLADKn6869sT2fZy9bULDJl%2B9aYHW6InFZ8MBOf50NpEWF6hPyUo7%2FdlMHwpDpw7AOkepXfD%2FmJ1q1FXw47AclXHDfakz5F5cx%2Fn7zpW%2BXc7lmgsIPTCv%2Frq0IPEu0mk3ikXkLvcw%2Fv&X-Amz-Signature=08dc22ff03720bbfb6bc15cecec809c331022bc10ca2543cb2bfdb1b9c060a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5V5PKG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCAIc5IKnX6waqM7xvjl0R7TlO2hAb8V5JLi%2FjYSYxkpgIgA%2FxIb9Vjs2RLI8r63z%2FMEnJt%2BVmc4DecbNHItsAhOJcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDtQ9bWdYa3nrAbCQyrcAzY3QjqmVgCoagX3UyLxT3kHlJJoC9ZAxyWpCLKqgo0HM8xFK1tCkTt2kKEwydMj9N%2FBX9uu30SbREVKJnweuZAMFZ9NKx3pmGhiS3j9Maw1YiOlW%2BAAKUniJZzj5hbZe%2BzDk3zKXDmgD0rmXTeSDbMEKFtGYPqKpmruKHg4FYRxjim0vjLWVilPnr90U3tSd25R9vS7pdYOa8YoYacrkiSk1CRV5aDWKF5vhGENRJF0WZ5DgAWBepI0bJZPE%2FBuRh60JoBpaYvLdUSaPRf%2FQMkCwrFcSgZ6bq2xYEmJw7prhRKcDZUfORXlu7RpJ5lGdOth%2FeiNI9bVqbjf756CU06UB%2FQ0UXEGZ4OhRfZSZ49fBBCyMmWegU98av%2FGf00soybuXuV7l%2Bu5M3gE1HPXMzkd%2F%2BzvhrInD%2B5J6eK4orlLt9l%2BiioC137Ow2J8fstPqKtzC7baXvxsIHur%2FEMAj7suaujZYxQXU3LMxUyUSlflQvXLz7shrpKKyTe8uCzGiddgi2u0BXFvxzq7mWbgcAzbo9DS8t2%2Fhzi4nIllHGJojvgd%2FkFmD5DmUz0ROx9DMy74dAqsQ%2F%2FtEp5EoviqeBNFClnXkc5ggN3tgP0oo35tdCDpQbxZg4U7IC4IMKD1zcEGOqUBYsVS23OnOUcz4bBf2QQRlQuey1v1G5JPa4vWY3uqGpkmpfElQYKYleqvpOC1nvoHmmR1qGjYtHG0hFye2TLADKn6869sT2fZy9bULDJl%2B9aYHW6InFZ8MBOf50NpEWF6hPyUo7%2FdlMHwpDpw7AOkepXfD%2FmJ1q1FXw47AclXHDfakz5F5cx%2Fn7zpW%2BXc7lmgsIPTCv%2Frq0IPEu0mk3ikXkLvcw%2Fv&X-Amz-Signature=014030c2e01ec1e64c8c75f0a586b585e39a2a08122c4f173737aa4e46ba7d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5V5PKG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCAIc5IKnX6waqM7xvjl0R7TlO2hAb8V5JLi%2FjYSYxkpgIgA%2FxIb9Vjs2RLI8r63z%2FMEnJt%2BVmc4DecbNHItsAhOJcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDtQ9bWdYa3nrAbCQyrcAzY3QjqmVgCoagX3UyLxT3kHlJJoC9ZAxyWpCLKqgo0HM8xFK1tCkTt2kKEwydMj9N%2FBX9uu30SbREVKJnweuZAMFZ9NKx3pmGhiS3j9Maw1YiOlW%2BAAKUniJZzj5hbZe%2BzDk3zKXDmgD0rmXTeSDbMEKFtGYPqKpmruKHg4FYRxjim0vjLWVilPnr90U3tSd25R9vS7pdYOa8YoYacrkiSk1CRV5aDWKF5vhGENRJF0WZ5DgAWBepI0bJZPE%2FBuRh60JoBpaYvLdUSaPRf%2FQMkCwrFcSgZ6bq2xYEmJw7prhRKcDZUfORXlu7RpJ5lGdOth%2FeiNI9bVqbjf756CU06UB%2FQ0UXEGZ4OhRfZSZ49fBBCyMmWegU98av%2FGf00soybuXuV7l%2Bu5M3gE1HPXMzkd%2F%2BzvhrInD%2B5J6eK4orlLt9l%2BiioC137Ow2J8fstPqKtzC7baXvxsIHur%2FEMAj7suaujZYxQXU3LMxUyUSlflQvXLz7shrpKKyTe8uCzGiddgi2u0BXFvxzq7mWbgcAzbo9DS8t2%2Fhzi4nIllHGJojvgd%2FkFmD5DmUz0ROx9DMy74dAqsQ%2F%2FtEp5EoviqeBNFClnXkc5ggN3tgP0oo35tdCDpQbxZg4U7IC4IMKD1zcEGOqUBYsVS23OnOUcz4bBf2QQRlQuey1v1G5JPa4vWY3uqGpkmpfElQYKYleqvpOC1nvoHmmR1qGjYtHG0hFye2TLADKn6869sT2fZy9bULDJl%2B9aYHW6InFZ8MBOf50NpEWF6hPyUo7%2FdlMHwpDpw7AOkepXfD%2FmJ1q1FXw47AclXHDfakz5F5cx%2Fn7zpW%2BXc7lmgsIPTCv%2Frq0IPEu0mk3ikXkLvcw%2Fv&X-Amz-Signature=f730d95200ce342f94c96654c19441df42bad9ed2fc7b92cd416c27c83dd3bda&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
