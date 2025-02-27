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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFPAUHP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHGDGqEhsaftXilUCPnSnnwK8%2BQ0MGupijsnYMjk5SaOAiEApB0gAjVtnqGc%2BPDDSaivF6X3%2FfI6VoFze0q18%2BtM5E4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPl5KdJfRHJwL%2B9LOCrcA9SBSJEAXbhWDH9jUDmrEkST42uvxx1M5uqxyBrVakv4w4hrvXe2BHfSJWQzYIJ3ufcwo3EhJtjSgAzKT22rLDVmf0SsHggS5QLkOWTUaZ6c%2BTfIK8rHeZVD%2BWO6HebQnnwFTVPHFBm4%2BwaC%2By0r9anmssjHFAb89C1FC6%2FkNRXzum8tvr8Bna8xhMM9jRvBlVsqJ9HFXDvolKSXzj8SB4BWfL7iQjWbkNlrNAqlANpW%2FwTZxEwkW9S3VzvUOVw3uw1gUpnsq6cqzLqXebqbh5GaUmh2FI6fJO%2B7t4UqcbwiIzytW6QrFnSdNtpCzG7aoAzzpI11aSuFhZMl%2Fx1auNnCyDx4tDx2ADvxUM0ltBzoR4%2F68sx2MI7K5Pj1UN6CjG%2BTFJPOMjwZOurL%2F0HxsKaO9dt0mdabPVV9hiBcIvBtXVF%2FSBT9ZBjqZ%2FijZ69xdsbOIkYU%2BOab5W4tbLmZ7SoPMVwi%2FljD11tnZBSY%2B8cF6gs0MOyiY2Tqv5W5ohOKgols8xLuriauQHoLtXbCoNhVIwM4JEH8QWvZxNGOy2GVo%2F%2BKAKRtjU8o%2B3%2BDyYeGbVWkWO7TI09j9kv5Dkvixt8AzAt1PTiJBzCXJe5eHdG1D5mqp5Cr6X9YNvYcMPaMgr4GOqUBgoKyuCoV0KoK3ni9gq3F4uWuR%2BRrJC8jBj2dIcm8zfJt0N%2B%2Fhbs%2B%2FV8hr8kZZZzSwqfhAIV3QPiO7irv7dvPxsaWiDgudKKJggvSPM3bI%2FhXfWFfvPRIws1JHmrSWM96SYoy%2BazhS57LjiHF56Xp6ZOqou13BnUMldOelJHh%2BSgX3G%2F54EczQLw%2BL%2BiIpIjy4P3uS90hSMjYAzkmK8GvGnIeAJD%2B&X-Amz-Signature=10f45e2337719d040a9314d8d0110310de2912ed9f746c7bc2e195d8dc4733bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFPAUHP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHGDGqEhsaftXilUCPnSnnwK8%2BQ0MGupijsnYMjk5SaOAiEApB0gAjVtnqGc%2BPDDSaivF6X3%2FfI6VoFze0q18%2BtM5E4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPl5KdJfRHJwL%2B9LOCrcA9SBSJEAXbhWDH9jUDmrEkST42uvxx1M5uqxyBrVakv4w4hrvXe2BHfSJWQzYIJ3ufcwo3EhJtjSgAzKT22rLDVmf0SsHggS5QLkOWTUaZ6c%2BTfIK8rHeZVD%2BWO6HebQnnwFTVPHFBm4%2BwaC%2By0r9anmssjHFAb89C1FC6%2FkNRXzum8tvr8Bna8xhMM9jRvBlVsqJ9HFXDvolKSXzj8SB4BWfL7iQjWbkNlrNAqlANpW%2FwTZxEwkW9S3VzvUOVw3uw1gUpnsq6cqzLqXebqbh5GaUmh2FI6fJO%2B7t4UqcbwiIzytW6QrFnSdNtpCzG7aoAzzpI11aSuFhZMl%2Fx1auNnCyDx4tDx2ADvxUM0ltBzoR4%2F68sx2MI7K5Pj1UN6CjG%2BTFJPOMjwZOurL%2F0HxsKaO9dt0mdabPVV9hiBcIvBtXVF%2FSBT9ZBjqZ%2FijZ69xdsbOIkYU%2BOab5W4tbLmZ7SoPMVwi%2FljD11tnZBSY%2B8cF6gs0MOyiY2Tqv5W5ohOKgols8xLuriauQHoLtXbCoNhVIwM4JEH8QWvZxNGOy2GVo%2F%2BKAKRtjU8o%2B3%2BDyYeGbVWkWO7TI09j9kv5Dkvixt8AzAt1PTiJBzCXJe5eHdG1D5mqp5Cr6X9YNvYcMPaMgr4GOqUBgoKyuCoV0KoK3ni9gq3F4uWuR%2BRrJC8jBj2dIcm8zfJt0N%2B%2Fhbs%2B%2FV8hr8kZZZzSwqfhAIV3QPiO7irv7dvPxsaWiDgudKKJggvSPM3bI%2FhXfWFfvPRIws1JHmrSWM96SYoy%2BazhS57LjiHF56Xp6ZOqou13BnUMldOelJHh%2BSgX3G%2F54EczQLw%2BL%2BiIpIjy4P3uS90hSMjYAzkmK8GvGnIeAJD%2B&X-Amz-Signature=c43bf117fd53af07942d272afb18705332a2b577927c6497a85f3dd822c37f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFPAUHP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHGDGqEhsaftXilUCPnSnnwK8%2BQ0MGupijsnYMjk5SaOAiEApB0gAjVtnqGc%2BPDDSaivF6X3%2FfI6VoFze0q18%2BtM5E4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPl5KdJfRHJwL%2B9LOCrcA9SBSJEAXbhWDH9jUDmrEkST42uvxx1M5uqxyBrVakv4w4hrvXe2BHfSJWQzYIJ3ufcwo3EhJtjSgAzKT22rLDVmf0SsHggS5QLkOWTUaZ6c%2BTfIK8rHeZVD%2BWO6HebQnnwFTVPHFBm4%2BwaC%2By0r9anmssjHFAb89C1FC6%2FkNRXzum8tvr8Bna8xhMM9jRvBlVsqJ9HFXDvolKSXzj8SB4BWfL7iQjWbkNlrNAqlANpW%2FwTZxEwkW9S3VzvUOVw3uw1gUpnsq6cqzLqXebqbh5GaUmh2FI6fJO%2B7t4UqcbwiIzytW6QrFnSdNtpCzG7aoAzzpI11aSuFhZMl%2Fx1auNnCyDx4tDx2ADvxUM0ltBzoR4%2F68sx2MI7K5Pj1UN6CjG%2BTFJPOMjwZOurL%2F0HxsKaO9dt0mdabPVV9hiBcIvBtXVF%2FSBT9ZBjqZ%2FijZ69xdsbOIkYU%2BOab5W4tbLmZ7SoPMVwi%2FljD11tnZBSY%2B8cF6gs0MOyiY2Tqv5W5ohOKgols8xLuriauQHoLtXbCoNhVIwM4JEH8QWvZxNGOy2GVo%2F%2BKAKRtjU8o%2B3%2BDyYeGbVWkWO7TI09j9kv5Dkvixt8AzAt1PTiJBzCXJe5eHdG1D5mqp5Cr6X9YNvYcMPaMgr4GOqUBgoKyuCoV0KoK3ni9gq3F4uWuR%2BRrJC8jBj2dIcm8zfJt0N%2B%2Fhbs%2B%2FV8hr8kZZZzSwqfhAIV3QPiO7irv7dvPxsaWiDgudKKJggvSPM3bI%2FhXfWFfvPRIws1JHmrSWM96SYoy%2BazhS57LjiHF56Xp6ZOqou13BnUMldOelJHh%2BSgX3G%2F54EczQLw%2BL%2BiIpIjy4P3uS90hSMjYAzkmK8GvGnIeAJD%2B&X-Amz-Signature=dcac0380e9991361b86949f91f7f1ecd7bf142a25dbba7f516725f386bfb15a9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFPAUHP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHGDGqEhsaftXilUCPnSnnwK8%2BQ0MGupijsnYMjk5SaOAiEApB0gAjVtnqGc%2BPDDSaivF6X3%2FfI6VoFze0q18%2BtM5E4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPl5KdJfRHJwL%2B9LOCrcA9SBSJEAXbhWDH9jUDmrEkST42uvxx1M5uqxyBrVakv4w4hrvXe2BHfSJWQzYIJ3ufcwo3EhJtjSgAzKT22rLDVmf0SsHggS5QLkOWTUaZ6c%2BTfIK8rHeZVD%2BWO6HebQnnwFTVPHFBm4%2BwaC%2By0r9anmssjHFAb89C1FC6%2FkNRXzum8tvr8Bna8xhMM9jRvBlVsqJ9HFXDvolKSXzj8SB4BWfL7iQjWbkNlrNAqlANpW%2FwTZxEwkW9S3VzvUOVw3uw1gUpnsq6cqzLqXebqbh5GaUmh2FI6fJO%2B7t4UqcbwiIzytW6QrFnSdNtpCzG7aoAzzpI11aSuFhZMl%2Fx1auNnCyDx4tDx2ADvxUM0ltBzoR4%2F68sx2MI7K5Pj1UN6CjG%2BTFJPOMjwZOurL%2F0HxsKaO9dt0mdabPVV9hiBcIvBtXVF%2FSBT9ZBjqZ%2FijZ69xdsbOIkYU%2BOab5W4tbLmZ7SoPMVwi%2FljD11tnZBSY%2B8cF6gs0MOyiY2Tqv5W5ohOKgols8xLuriauQHoLtXbCoNhVIwM4JEH8QWvZxNGOy2GVo%2F%2BKAKRtjU8o%2B3%2BDyYeGbVWkWO7TI09j9kv5Dkvixt8AzAt1PTiJBzCXJe5eHdG1D5mqp5Cr6X9YNvYcMPaMgr4GOqUBgoKyuCoV0KoK3ni9gq3F4uWuR%2BRrJC8jBj2dIcm8zfJt0N%2B%2Fhbs%2B%2FV8hr8kZZZzSwqfhAIV3QPiO7irv7dvPxsaWiDgudKKJggvSPM3bI%2FhXfWFfvPRIws1JHmrSWM96SYoy%2BazhS57LjiHF56Xp6ZOqou13BnUMldOelJHh%2BSgX3G%2F54EczQLw%2BL%2BiIpIjy4P3uS90hSMjYAzkmK8GvGnIeAJD%2B&X-Amz-Signature=e4e3af444e7272cb00f53d1fdfa3491471bfda3a691d5ece8e7e6fc19a3e6261&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFPAUHP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHGDGqEhsaftXilUCPnSnnwK8%2BQ0MGupijsnYMjk5SaOAiEApB0gAjVtnqGc%2BPDDSaivF6X3%2FfI6VoFze0q18%2BtM5E4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPl5KdJfRHJwL%2B9LOCrcA9SBSJEAXbhWDH9jUDmrEkST42uvxx1M5uqxyBrVakv4w4hrvXe2BHfSJWQzYIJ3ufcwo3EhJtjSgAzKT22rLDVmf0SsHggS5QLkOWTUaZ6c%2BTfIK8rHeZVD%2BWO6HebQnnwFTVPHFBm4%2BwaC%2By0r9anmssjHFAb89C1FC6%2FkNRXzum8tvr8Bna8xhMM9jRvBlVsqJ9HFXDvolKSXzj8SB4BWfL7iQjWbkNlrNAqlANpW%2FwTZxEwkW9S3VzvUOVw3uw1gUpnsq6cqzLqXebqbh5GaUmh2FI6fJO%2B7t4UqcbwiIzytW6QrFnSdNtpCzG7aoAzzpI11aSuFhZMl%2Fx1auNnCyDx4tDx2ADvxUM0ltBzoR4%2F68sx2MI7K5Pj1UN6CjG%2BTFJPOMjwZOurL%2F0HxsKaO9dt0mdabPVV9hiBcIvBtXVF%2FSBT9ZBjqZ%2FijZ69xdsbOIkYU%2BOab5W4tbLmZ7SoPMVwi%2FljD11tnZBSY%2B8cF6gs0MOyiY2Tqv5W5ohOKgols8xLuriauQHoLtXbCoNhVIwM4JEH8QWvZxNGOy2GVo%2F%2BKAKRtjU8o%2B3%2BDyYeGbVWkWO7TI09j9kv5Dkvixt8AzAt1PTiJBzCXJe5eHdG1D5mqp5Cr6X9YNvYcMPaMgr4GOqUBgoKyuCoV0KoK3ni9gq3F4uWuR%2BRrJC8jBj2dIcm8zfJt0N%2B%2Fhbs%2B%2FV8hr8kZZZzSwqfhAIV3QPiO7irv7dvPxsaWiDgudKKJggvSPM3bI%2FhXfWFfvPRIws1JHmrSWM96SYoy%2BazhS57LjiHF56Xp6ZOqou13BnUMldOelJHh%2BSgX3G%2F54EczQLw%2BL%2BiIpIjy4P3uS90hSMjYAzkmK8GvGnIeAJD%2B&X-Amz-Signature=0aa18a9ecef449021e5cdf542a3d2eaeb0b83e77d1a8c25071dbd8cbdcae990c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFPAUHP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHGDGqEhsaftXilUCPnSnnwK8%2BQ0MGupijsnYMjk5SaOAiEApB0gAjVtnqGc%2BPDDSaivF6X3%2FfI6VoFze0q18%2BtM5E4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPl5KdJfRHJwL%2B9LOCrcA9SBSJEAXbhWDH9jUDmrEkST42uvxx1M5uqxyBrVakv4w4hrvXe2BHfSJWQzYIJ3ufcwo3EhJtjSgAzKT22rLDVmf0SsHggS5QLkOWTUaZ6c%2BTfIK8rHeZVD%2BWO6HebQnnwFTVPHFBm4%2BwaC%2By0r9anmssjHFAb89C1FC6%2FkNRXzum8tvr8Bna8xhMM9jRvBlVsqJ9HFXDvolKSXzj8SB4BWfL7iQjWbkNlrNAqlANpW%2FwTZxEwkW9S3VzvUOVw3uw1gUpnsq6cqzLqXebqbh5GaUmh2FI6fJO%2B7t4UqcbwiIzytW6QrFnSdNtpCzG7aoAzzpI11aSuFhZMl%2Fx1auNnCyDx4tDx2ADvxUM0ltBzoR4%2F68sx2MI7K5Pj1UN6CjG%2BTFJPOMjwZOurL%2F0HxsKaO9dt0mdabPVV9hiBcIvBtXVF%2FSBT9ZBjqZ%2FijZ69xdsbOIkYU%2BOab5W4tbLmZ7SoPMVwi%2FljD11tnZBSY%2B8cF6gs0MOyiY2Tqv5W5ohOKgols8xLuriauQHoLtXbCoNhVIwM4JEH8QWvZxNGOy2GVo%2F%2BKAKRtjU8o%2B3%2BDyYeGbVWkWO7TI09j9kv5Dkvixt8AzAt1PTiJBzCXJe5eHdG1D5mqp5Cr6X9YNvYcMPaMgr4GOqUBgoKyuCoV0KoK3ni9gq3F4uWuR%2BRrJC8jBj2dIcm8zfJt0N%2B%2Fhbs%2B%2FV8hr8kZZZzSwqfhAIV3QPiO7irv7dvPxsaWiDgudKKJggvSPM3bI%2FhXfWFfvPRIws1JHmrSWM96SYoy%2BazhS57LjiHF56Xp6ZOqou13BnUMldOelJHh%2BSgX3G%2F54EczQLw%2BL%2BiIpIjy4P3uS90hSMjYAzkmK8GvGnIeAJD%2B&X-Amz-Signature=b3550ef489b5a61faafea37c668895ec005fa89e83c2c11402607a33fda5a3ca&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFPAUHP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHGDGqEhsaftXilUCPnSnnwK8%2BQ0MGupijsnYMjk5SaOAiEApB0gAjVtnqGc%2BPDDSaivF6X3%2FfI6VoFze0q18%2BtM5E4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPl5KdJfRHJwL%2B9LOCrcA9SBSJEAXbhWDH9jUDmrEkST42uvxx1M5uqxyBrVakv4w4hrvXe2BHfSJWQzYIJ3ufcwo3EhJtjSgAzKT22rLDVmf0SsHggS5QLkOWTUaZ6c%2BTfIK8rHeZVD%2BWO6HebQnnwFTVPHFBm4%2BwaC%2By0r9anmssjHFAb89C1FC6%2FkNRXzum8tvr8Bna8xhMM9jRvBlVsqJ9HFXDvolKSXzj8SB4BWfL7iQjWbkNlrNAqlANpW%2FwTZxEwkW9S3VzvUOVw3uw1gUpnsq6cqzLqXebqbh5GaUmh2FI6fJO%2B7t4UqcbwiIzytW6QrFnSdNtpCzG7aoAzzpI11aSuFhZMl%2Fx1auNnCyDx4tDx2ADvxUM0ltBzoR4%2F68sx2MI7K5Pj1UN6CjG%2BTFJPOMjwZOurL%2F0HxsKaO9dt0mdabPVV9hiBcIvBtXVF%2FSBT9ZBjqZ%2FijZ69xdsbOIkYU%2BOab5W4tbLmZ7SoPMVwi%2FljD11tnZBSY%2B8cF6gs0MOyiY2Tqv5W5ohOKgols8xLuriauQHoLtXbCoNhVIwM4JEH8QWvZxNGOy2GVo%2F%2BKAKRtjU8o%2B3%2BDyYeGbVWkWO7TI09j9kv5Dkvixt8AzAt1PTiJBzCXJe5eHdG1D5mqp5Cr6X9YNvYcMPaMgr4GOqUBgoKyuCoV0KoK3ni9gq3F4uWuR%2BRrJC8jBj2dIcm8zfJt0N%2B%2Fhbs%2B%2FV8hr8kZZZzSwqfhAIV3QPiO7irv7dvPxsaWiDgudKKJggvSPM3bI%2FhXfWFfvPRIws1JHmrSWM96SYoy%2BazhS57LjiHF56Xp6ZOqou13BnUMldOelJHh%2BSgX3G%2F54EczQLw%2BL%2BiIpIjy4P3uS90hSMjYAzkmK8GvGnIeAJD%2B&X-Amz-Signature=69fba1f5b0a737f3376a23fa3fdd43a3edfc4dc05b18927a9a23b4e253e325b9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
