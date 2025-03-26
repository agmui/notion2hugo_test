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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVAEYF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwyDeZqn0JiGHvGMgcjTI8SnHRVuyLUF%2FOQSQZ%2BZDRWwIgJdf27MDR%2FOTOOb8pBmrf4oGyqgvVd5houTEl4DQ8Bmgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMo2lkjwyYypXX9j8ircA%2BT1ZW8LGa7mv4267okWmysE5%2Fl1vKBusXtV93kWA5PX%2B%2FEIN5eXYwJ0frWjFZ39XzWjGsNLi%2Frf0tnd5R%2Bt0DrRzuSyM7xW6HJ25pBKmQUw818nPVYfQUQ%2BkE%2FzlnHeKp42ycglT8msfOdG7QRyRycCnuwoOplDhQHhy3gf97gzI6l2McR2P%2FD4unFCXjax3rLbeCU4LUqRwPC4EFxCbxB0RfDlTWLk1MPSlK4PhbS7PiZ0qaO8iTIpsE53cr1NGBgQXfbejY1XkjnJZTuv6xautWUPyW9a1Gihefs%2BRNS1lztghi1j0oRLcbKh%2FsIBU4hXS%2BuP6CvJ%2BKQYQIDnxPi93CDaBM19uE71oVErfRshNmPh2%2BThaIbG5jhptUAhfn0e5FNR4NJyPWY77TutbJNDaKpUKw4j%2B%2F9MGyI38l3FW8uTLDrPmBMy3WRnYxltq0AH4YMf3cZIShecpcM0%2BZr8nJMGJ9jJfWnB6EGd%2Blx6p1OaHl55bSYxVTnbhEjj3V%2BaEwzYneTvv90OetCsfwjiI%2B2FMnaUeoykHmGBhH7aNhsbvQ5FqsMWZq69ZRygrE4FhDevGIB%2FLetr6V2nPD4lHgagAAjHdovA36uw1BLeU78vSr0FGELpyTwiMJaOjb8GOqUB3sSodlZJN8vf7OcuytunJY0HrMvOlBGybZjRB%2FrtM2grNFdjjczi1HxjdAPzJfaaTQMfvuWMrRV4HaSiWGGRQ5S80hhgD024FDoV7OYaFRv6jHIhb8tCiyBwTP%2B6h1uUMg6WkmSpMeH3O7BFGXwETfM0ujLxmMB08OIXYICmzBmvja5H1QOI7QnjSmgtzZjRs4JzICGIpFXC8t3sfM354WQc33CD&X-Amz-Signature=9d2f194ce41db625dcd4d78861e9d8c81ae66c30e10ec7cf45d018f8ac3ca751&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVAEYF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwyDeZqn0JiGHvGMgcjTI8SnHRVuyLUF%2FOQSQZ%2BZDRWwIgJdf27MDR%2FOTOOb8pBmrf4oGyqgvVd5houTEl4DQ8Bmgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMo2lkjwyYypXX9j8ircA%2BT1ZW8LGa7mv4267okWmysE5%2Fl1vKBusXtV93kWA5PX%2B%2FEIN5eXYwJ0frWjFZ39XzWjGsNLi%2Frf0tnd5R%2Bt0DrRzuSyM7xW6HJ25pBKmQUw818nPVYfQUQ%2BkE%2FzlnHeKp42ycglT8msfOdG7QRyRycCnuwoOplDhQHhy3gf97gzI6l2McR2P%2FD4unFCXjax3rLbeCU4LUqRwPC4EFxCbxB0RfDlTWLk1MPSlK4PhbS7PiZ0qaO8iTIpsE53cr1NGBgQXfbejY1XkjnJZTuv6xautWUPyW9a1Gihefs%2BRNS1lztghi1j0oRLcbKh%2FsIBU4hXS%2BuP6CvJ%2BKQYQIDnxPi93CDaBM19uE71oVErfRshNmPh2%2BThaIbG5jhptUAhfn0e5FNR4NJyPWY77TutbJNDaKpUKw4j%2B%2F9MGyI38l3FW8uTLDrPmBMy3WRnYxltq0AH4YMf3cZIShecpcM0%2BZr8nJMGJ9jJfWnB6EGd%2Blx6p1OaHl55bSYxVTnbhEjj3V%2BaEwzYneTvv90OetCsfwjiI%2B2FMnaUeoykHmGBhH7aNhsbvQ5FqsMWZq69ZRygrE4FhDevGIB%2FLetr6V2nPD4lHgagAAjHdovA36uw1BLeU78vSr0FGELpyTwiMJaOjb8GOqUB3sSodlZJN8vf7OcuytunJY0HrMvOlBGybZjRB%2FrtM2grNFdjjczi1HxjdAPzJfaaTQMfvuWMrRV4HaSiWGGRQ5S80hhgD024FDoV7OYaFRv6jHIhb8tCiyBwTP%2B6h1uUMg6WkmSpMeH3O7BFGXwETfM0ujLxmMB08OIXYICmzBmvja5H1QOI7QnjSmgtzZjRs4JzICGIpFXC8t3sfM354WQc33CD&X-Amz-Signature=be5a8aace7e7de3af95db3676bf68ea09f4fda03797be91f7a3e382d29a7a766&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVAEYF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwyDeZqn0JiGHvGMgcjTI8SnHRVuyLUF%2FOQSQZ%2BZDRWwIgJdf27MDR%2FOTOOb8pBmrf4oGyqgvVd5houTEl4DQ8Bmgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMo2lkjwyYypXX9j8ircA%2BT1ZW8LGa7mv4267okWmysE5%2Fl1vKBusXtV93kWA5PX%2B%2FEIN5eXYwJ0frWjFZ39XzWjGsNLi%2Frf0tnd5R%2Bt0DrRzuSyM7xW6HJ25pBKmQUw818nPVYfQUQ%2BkE%2FzlnHeKp42ycglT8msfOdG7QRyRycCnuwoOplDhQHhy3gf97gzI6l2McR2P%2FD4unFCXjax3rLbeCU4LUqRwPC4EFxCbxB0RfDlTWLk1MPSlK4PhbS7PiZ0qaO8iTIpsE53cr1NGBgQXfbejY1XkjnJZTuv6xautWUPyW9a1Gihefs%2BRNS1lztghi1j0oRLcbKh%2FsIBU4hXS%2BuP6CvJ%2BKQYQIDnxPi93CDaBM19uE71oVErfRshNmPh2%2BThaIbG5jhptUAhfn0e5FNR4NJyPWY77TutbJNDaKpUKw4j%2B%2F9MGyI38l3FW8uTLDrPmBMy3WRnYxltq0AH4YMf3cZIShecpcM0%2BZr8nJMGJ9jJfWnB6EGd%2Blx6p1OaHl55bSYxVTnbhEjj3V%2BaEwzYneTvv90OetCsfwjiI%2B2FMnaUeoykHmGBhH7aNhsbvQ5FqsMWZq69ZRygrE4FhDevGIB%2FLetr6V2nPD4lHgagAAjHdovA36uw1BLeU78vSr0FGELpyTwiMJaOjb8GOqUB3sSodlZJN8vf7OcuytunJY0HrMvOlBGybZjRB%2FrtM2grNFdjjczi1HxjdAPzJfaaTQMfvuWMrRV4HaSiWGGRQ5S80hhgD024FDoV7OYaFRv6jHIhb8tCiyBwTP%2B6h1uUMg6WkmSpMeH3O7BFGXwETfM0ujLxmMB08OIXYICmzBmvja5H1QOI7QnjSmgtzZjRs4JzICGIpFXC8t3sfM354WQc33CD&X-Amz-Signature=a96ce015a46640d82a5f852ffc661f2ffb0ff714b0da74d5a98b8cb19b482322&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVAEYF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwyDeZqn0JiGHvGMgcjTI8SnHRVuyLUF%2FOQSQZ%2BZDRWwIgJdf27MDR%2FOTOOb8pBmrf4oGyqgvVd5houTEl4DQ8Bmgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMo2lkjwyYypXX9j8ircA%2BT1ZW8LGa7mv4267okWmysE5%2Fl1vKBusXtV93kWA5PX%2B%2FEIN5eXYwJ0frWjFZ39XzWjGsNLi%2Frf0tnd5R%2Bt0DrRzuSyM7xW6HJ25pBKmQUw818nPVYfQUQ%2BkE%2FzlnHeKp42ycglT8msfOdG7QRyRycCnuwoOplDhQHhy3gf97gzI6l2McR2P%2FD4unFCXjax3rLbeCU4LUqRwPC4EFxCbxB0RfDlTWLk1MPSlK4PhbS7PiZ0qaO8iTIpsE53cr1NGBgQXfbejY1XkjnJZTuv6xautWUPyW9a1Gihefs%2BRNS1lztghi1j0oRLcbKh%2FsIBU4hXS%2BuP6CvJ%2BKQYQIDnxPi93CDaBM19uE71oVErfRshNmPh2%2BThaIbG5jhptUAhfn0e5FNR4NJyPWY77TutbJNDaKpUKw4j%2B%2F9MGyI38l3FW8uTLDrPmBMy3WRnYxltq0AH4YMf3cZIShecpcM0%2BZr8nJMGJ9jJfWnB6EGd%2Blx6p1OaHl55bSYxVTnbhEjj3V%2BaEwzYneTvv90OetCsfwjiI%2B2FMnaUeoykHmGBhH7aNhsbvQ5FqsMWZq69ZRygrE4FhDevGIB%2FLetr6V2nPD4lHgagAAjHdovA36uw1BLeU78vSr0FGELpyTwiMJaOjb8GOqUB3sSodlZJN8vf7OcuytunJY0HrMvOlBGybZjRB%2FrtM2grNFdjjczi1HxjdAPzJfaaTQMfvuWMrRV4HaSiWGGRQ5S80hhgD024FDoV7OYaFRv6jHIhb8tCiyBwTP%2B6h1uUMg6WkmSpMeH3O7BFGXwETfM0ujLxmMB08OIXYICmzBmvja5H1QOI7QnjSmgtzZjRs4JzICGIpFXC8t3sfM354WQc33CD&X-Amz-Signature=98e579ddcc1566732a883f721b5237af691a631881128a788ce4296bafa45f14&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVAEYF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwyDeZqn0JiGHvGMgcjTI8SnHRVuyLUF%2FOQSQZ%2BZDRWwIgJdf27MDR%2FOTOOb8pBmrf4oGyqgvVd5houTEl4DQ8Bmgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMo2lkjwyYypXX9j8ircA%2BT1ZW8LGa7mv4267okWmysE5%2Fl1vKBusXtV93kWA5PX%2B%2FEIN5eXYwJ0frWjFZ39XzWjGsNLi%2Frf0tnd5R%2Bt0DrRzuSyM7xW6HJ25pBKmQUw818nPVYfQUQ%2BkE%2FzlnHeKp42ycglT8msfOdG7QRyRycCnuwoOplDhQHhy3gf97gzI6l2McR2P%2FD4unFCXjax3rLbeCU4LUqRwPC4EFxCbxB0RfDlTWLk1MPSlK4PhbS7PiZ0qaO8iTIpsE53cr1NGBgQXfbejY1XkjnJZTuv6xautWUPyW9a1Gihefs%2BRNS1lztghi1j0oRLcbKh%2FsIBU4hXS%2BuP6CvJ%2BKQYQIDnxPi93CDaBM19uE71oVErfRshNmPh2%2BThaIbG5jhptUAhfn0e5FNR4NJyPWY77TutbJNDaKpUKw4j%2B%2F9MGyI38l3FW8uTLDrPmBMy3WRnYxltq0AH4YMf3cZIShecpcM0%2BZr8nJMGJ9jJfWnB6EGd%2Blx6p1OaHl55bSYxVTnbhEjj3V%2BaEwzYneTvv90OetCsfwjiI%2B2FMnaUeoykHmGBhH7aNhsbvQ5FqsMWZq69ZRygrE4FhDevGIB%2FLetr6V2nPD4lHgagAAjHdovA36uw1BLeU78vSr0FGELpyTwiMJaOjb8GOqUB3sSodlZJN8vf7OcuytunJY0HrMvOlBGybZjRB%2FrtM2grNFdjjczi1HxjdAPzJfaaTQMfvuWMrRV4HaSiWGGRQ5S80hhgD024FDoV7OYaFRv6jHIhb8tCiyBwTP%2B6h1uUMg6WkmSpMeH3O7BFGXwETfM0ujLxmMB08OIXYICmzBmvja5H1QOI7QnjSmgtzZjRs4JzICGIpFXC8t3sfM354WQc33CD&X-Amz-Signature=61670fbaa521a873393000e40f8a495d0ad90f81b01c7d10c682778a63d97481&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVAEYF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwyDeZqn0JiGHvGMgcjTI8SnHRVuyLUF%2FOQSQZ%2BZDRWwIgJdf27MDR%2FOTOOb8pBmrf4oGyqgvVd5houTEl4DQ8Bmgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMo2lkjwyYypXX9j8ircA%2BT1ZW8LGa7mv4267okWmysE5%2Fl1vKBusXtV93kWA5PX%2B%2FEIN5eXYwJ0frWjFZ39XzWjGsNLi%2Frf0tnd5R%2Bt0DrRzuSyM7xW6HJ25pBKmQUw818nPVYfQUQ%2BkE%2FzlnHeKp42ycglT8msfOdG7QRyRycCnuwoOplDhQHhy3gf97gzI6l2McR2P%2FD4unFCXjax3rLbeCU4LUqRwPC4EFxCbxB0RfDlTWLk1MPSlK4PhbS7PiZ0qaO8iTIpsE53cr1NGBgQXfbejY1XkjnJZTuv6xautWUPyW9a1Gihefs%2BRNS1lztghi1j0oRLcbKh%2FsIBU4hXS%2BuP6CvJ%2BKQYQIDnxPi93CDaBM19uE71oVErfRshNmPh2%2BThaIbG5jhptUAhfn0e5FNR4NJyPWY77TutbJNDaKpUKw4j%2B%2F9MGyI38l3FW8uTLDrPmBMy3WRnYxltq0AH4YMf3cZIShecpcM0%2BZr8nJMGJ9jJfWnB6EGd%2Blx6p1OaHl55bSYxVTnbhEjj3V%2BaEwzYneTvv90OetCsfwjiI%2B2FMnaUeoykHmGBhH7aNhsbvQ5FqsMWZq69ZRygrE4FhDevGIB%2FLetr6V2nPD4lHgagAAjHdovA36uw1BLeU78vSr0FGELpyTwiMJaOjb8GOqUB3sSodlZJN8vf7OcuytunJY0HrMvOlBGybZjRB%2FrtM2grNFdjjczi1HxjdAPzJfaaTQMfvuWMrRV4HaSiWGGRQ5S80hhgD024FDoV7OYaFRv6jHIhb8tCiyBwTP%2B6h1uUMg6WkmSpMeH3O7BFGXwETfM0ujLxmMB08OIXYICmzBmvja5H1QOI7QnjSmgtzZjRs4JzICGIpFXC8t3sfM354WQc33CD&X-Amz-Signature=203c7654c85c6fdc4e4df7fef18cefe2d836328f030872dcadd151de8ca4f168&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVAEYF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwyDeZqn0JiGHvGMgcjTI8SnHRVuyLUF%2FOQSQZ%2BZDRWwIgJdf27MDR%2FOTOOb8pBmrf4oGyqgvVd5houTEl4DQ8Bmgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMo2lkjwyYypXX9j8ircA%2BT1ZW8LGa7mv4267okWmysE5%2Fl1vKBusXtV93kWA5PX%2B%2FEIN5eXYwJ0frWjFZ39XzWjGsNLi%2Frf0tnd5R%2Bt0DrRzuSyM7xW6HJ25pBKmQUw818nPVYfQUQ%2BkE%2FzlnHeKp42ycglT8msfOdG7QRyRycCnuwoOplDhQHhy3gf97gzI6l2McR2P%2FD4unFCXjax3rLbeCU4LUqRwPC4EFxCbxB0RfDlTWLk1MPSlK4PhbS7PiZ0qaO8iTIpsE53cr1NGBgQXfbejY1XkjnJZTuv6xautWUPyW9a1Gihefs%2BRNS1lztghi1j0oRLcbKh%2FsIBU4hXS%2BuP6CvJ%2BKQYQIDnxPi93CDaBM19uE71oVErfRshNmPh2%2BThaIbG5jhptUAhfn0e5FNR4NJyPWY77TutbJNDaKpUKw4j%2B%2F9MGyI38l3FW8uTLDrPmBMy3WRnYxltq0AH4YMf3cZIShecpcM0%2BZr8nJMGJ9jJfWnB6EGd%2Blx6p1OaHl55bSYxVTnbhEjj3V%2BaEwzYneTvv90OetCsfwjiI%2B2FMnaUeoykHmGBhH7aNhsbvQ5FqsMWZq69ZRygrE4FhDevGIB%2FLetr6V2nPD4lHgagAAjHdovA36uw1BLeU78vSr0FGELpyTwiMJaOjb8GOqUB3sSodlZJN8vf7OcuytunJY0HrMvOlBGybZjRB%2FrtM2grNFdjjczi1HxjdAPzJfaaTQMfvuWMrRV4HaSiWGGRQ5S80hhgD024FDoV7OYaFRv6jHIhb8tCiyBwTP%2B6h1uUMg6WkmSpMeH3O7BFGXwETfM0ujLxmMB08OIXYICmzBmvja5H1QOI7QnjSmgtzZjRs4JzICGIpFXC8t3sfM354WQc33CD&X-Amz-Signature=0e94dfbb707e8395a4f7ddf8edc3d6b33e2c073c931f49bf6ff0e79315cb6181&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
