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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646N7L37U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIG%2BW48fu9mOrCG%2BKl4HsPqjsPPEthM6usW0j0cKprUhjAiEAvKcpDiWba1n6se3onVPxYutj%2FcMxBdixM4O91wrlWpYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDifHuTKYOHRr1aI0ircAyA5i51Ye%2FfxOw%2BVtlMAXKBrU%2F0zJcdPC3cbnjM7HwXgHTDOZgoYDwf8iJVb00UksuJQPGH605%2BZDLsu%2FDVgoyCCnpJbTkF2PBEmFTuqPl0fJcikmo0%2BAJnQe9TAgrTAbG%2BYUl0mtP3D320reEBQZOkfn%2BW53XGTQnmmuQRS%2BG3QivK6hkdB9UY7N%2B%2FrpoLyDJeeoD5A4urPyslMUG4Ulx695yp4iq7iaGde0v62gqRcb5aRaDcwe5sqLuMKZ3WANUqVhIExm1EwKTs7R0U9%2FTqwFTkg3rdGRep5c5NE2KPX7oWmLSEo2Gg09DRI5yQjK9FG3mWUlahqMf8wFVNcDnHxhNbnLg4P1D1dS1MN8eziz%2FtxtgyNNZZFAtYIYu%2BtDlATOohinehz7RPVG%2F3kQc17%2BfI1SWE7T8xLxZHGYjfjZbwsUuUTAkA%2BGBuWIE%2BfGFAPS9xtEOJpMAtwGQIfFuMQ%2FLZ%2F11kUpffTrzuHRPZ9UoXWOQ7LF659Sk8%2BVjFRRZM4RrXtz6aWStifzSnfnAnqimPtxFGfDZvZ7Yu7js1fj%2BDybyTbKcc2YWC%2FI34qQ1v6kiIinvPF0QY7XQoEZ8KpMXm8IcOqjhWB6SpzIrzmVEltVGJuemyIdyNQMO%2BF8r4GOqUBmeOZA%2FMYHx03HoGSP26tJkbodumcnzQ%2FtVwNBgg8Lj9mDf0MrMtZAdp%2FMIRICyRr24JuDaeUmczLHq41Y1l0gFlojRB36KKl7yu8WeRqBFsZKHh094I9tEq1qW%2BZPw52KwUDt4ToyN7BdUgue9c3yoIenrqbS%2F0kFAmFQ8UwaKyq3EdRnA4VTaZ9eaNJUMJbG6oWXRgkdW%2B3FTjsuo8yJ4%2FjybZj&X-Amz-Signature=dd24f3390a34a527e5afb6fa44ef972170e7e703b0376779b9868f8bf5880da3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646N7L37U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIG%2BW48fu9mOrCG%2BKl4HsPqjsPPEthM6usW0j0cKprUhjAiEAvKcpDiWba1n6se3onVPxYutj%2FcMxBdixM4O91wrlWpYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDifHuTKYOHRr1aI0ircAyA5i51Ye%2FfxOw%2BVtlMAXKBrU%2F0zJcdPC3cbnjM7HwXgHTDOZgoYDwf8iJVb00UksuJQPGH605%2BZDLsu%2FDVgoyCCnpJbTkF2PBEmFTuqPl0fJcikmo0%2BAJnQe9TAgrTAbG%2BYUl0mtP3D320reEBQZOkfn%2BW53XGTQnmmuQRS%2BG3QivK6hkdB9UY7N%2B%2FrpoLyDJeeoD5A4urPyslMUG4Ulx695yp4iq7iaGde0v62gqRcb5aRaDcwe5sqLuMKZ3WANUqVhIExm1EwKTs7R0U9%2FTqwFTkg3rdGRep5c5NE2KPX7oWmLSEo2Gg09DRI5yQjK9FG3mWUlahqMf8wFVNcDnHxhNbnLg4P1D1dS1MN8eziz%2FtxtgyNNZZFAtYIYu%2BtDlATOohinehz7RPVG%2F3kQc17%2BfI1SWE7T8xLxZHGYjfjZbwsUuUTAkA%2BGBuWIE%2BfGFAPS9xtEOJpMAtwGQIfFuMQ%2FLZ%2F11kUpffTrzuHRPZ9UoXWOQ7LF659Sk8%2BVjFRRZM4RrXtz6aWStifzSnfnAnqimPtxFGfDZvZ7Yu7js1fj%2BDybyTbKcc2YWC%2FI34qQ1v6kiIinvPF0QY7XQoEZ8KpMXm8IcOqjhWB6SpzIrzmVEltVGJuemyIdyNQMO%2BF8r4GOqUBmeOZA%2FMYHx03HoGSP26tJkbodumcnzQ%2FtVwNBgg8Lj9mDf0MrMtZAdp%2FMIRICyRr24JuDaeUmczLHq41Y1l0gFlojRB36KKl7yu8WeRqBFsZKHh094I9tEq1qW%2BZPw52KwUDt4ToyN7BdUgue9c3yoIenrqbS%2F0kFAmFQ8UwaKyq3EdRnA4VTaZ9eaNJUMJbG6oWXRgkdW%2B3FTjsuo8yJ4%2FjybZj&X-Amz-Signature=ad57717efdb5091deb7fe478fe39d2573e028eb89aecd3f5ef40b29352a06f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646N7L37U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIG%2BW48fu9mOrCG%2BKl4HsPqjsPPEthM6usW0j0cKprUhjAiEAvKcpDiWba1n6se3onVPxYutj%2FcMxBdixM4O91wrlWpYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDifHuTKYOHRr1aI0ircAyA5i51Ye%2FfxOw%2BVtlMAXKBrU%2F0zJcdPC3cbnjM7HwXgHTDOZgoYDwf8iJVb00UksuJQPGH605%2BZDLsu%2FDVgoyCCnpJbTkF2PBEmFTuqPl0fJcikmo0%2BAJnQe9TAgrTAbG%2BYUl0mtP3D320reEBQZOkfn%2BW53XGTQnmmuQRS%2BG3QivK6hkdB9UY7N%2B%2FrpoLyDJeeoD5A4urPyslMUG4Ulx695yp4iq7iaGde0v62gqRcb5aRaDcwe5sqLuMKZ3WANUqVhIExm1EwKTs7R0U9%2FTqwFTkg3rdGRep5c5NE2KPX7oWmLSEo2Gg09DRI5yQjK9FG3mWUlahqMf8wFVNcDnHxhNbnLg4P1D1dS1MN8eziz%2FtxtgyNNZZFAtYIYu%2BtDlATOohinehz7RPVG%2F3kQc17%2BfI1SWE7T8xLxZHGYjfjZbwsUuUTAkA%2BGBuWIE%2BfGFAPS9xtEOJpMAtwGQIfFuMQ%2FLZ%2F11kUpffTrzuHRPZ9UoXWOQ7LF659Sk8%2BVjFRRZM4RrXtz6aWStifzSnfnAnqimPtxFGfDZvZ7Yu7js1fj%2BDybyTbKcc2YWC%2FI34qQ1v6kiIinvPF0QY7XQoEZ8KpMXm8IcOqjhWB6SpzIrzmVEltVGJuemyIdyNQMO%2BF8r4GOqUBmeOZA%2FMYHx03HoGSP26tJkbodumcnzQ%2FtVwNBgg8Lj9mDf0MrMtZAdp%2FMIRICyRr24JuDaeUmczLHq41Y1l0gFlojRB36KKl7yu8WeRqBFsZKHh094I9tEq1qW%2BZPw52KwUDt4ToyN7BdUgue9c3yoIenrqbS%2F0kFAmFQ8UwaKyq3EdRnA4VTaZ9eaNJUMJbG6oWXRgkdW%2B3FTjsuo8yJ4%2FjybZj&X-Amz-Signature=0f6d8a58a8d36303bfb58b6dbb3519dc1465ef55e3a34898b6fc8d38cfc561f2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646N7L37U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIG%2BW48fu9mOrCG%2BKl4HsPqjsPPEthM6usW0j0cKprUhjAiEAvKcpDiWba1n6se3onVPxYutj%2FcMxBdixM4O91wrlWpYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDifHuTKYOHRr1aI0ircAyA5i51Ye%2FfxOw%2BVtlMAXKBrU%2F0zJcdPC3cbnjM7HwXgHTDOZgoYDwf8iJVb00UksuJQPGH605%2BZDLsu%2FDVgoyCCnpJbTkF2PBEmFTuqPl0fJcikmo0%2BAJnQe9TAgrTAbG%2BYUl0mtP3D320reEBQZOkfn%2BW53XGTQnmmuQRS%2BG3QivK6hkdB9UY7N%2B%2FrpoLyDJeeoD5A4urPyslMUG4Ulx695yp4iq7iaGde0v62gqRcb5aRaDcwe5sqLuMKZ3WANUqVhIExm1EwKTs7R0U9%2FTqwFTkg3rdGRep5c5NE2KPX7oWmLSEo2Gg09DRI5yQjK9FG3mWUlahqMf8wFVNcDnHxhNbnLg4P1D1dS1MN8eziz%2FtxtgyNNZZFAtYIYu%2BtDlATOohinehz7RPVG%2F3kQc17%2BfI1SWE7T8xLxZHGYjfjZbwsUuUTAkA%2BGBuWIE%2BfGFAPS9xtEOJpMAtwGQIfFuMQ%2FLZ%2F11kUpffTrzuHRPZ9UoXWOQ7LF659Sk8%2BVjFRRZM4RrXtz6aWStifzSnfnAnqimPtxFGfDZvZ7Yu7js1fj%2BDybyTbKcc2YWC%2FI34qQ1v6kiIinvPF0QY7XQoEZ8KpMXm8IcOqjhWB6SpzIrzmVEltVGJuemyIdyNQMO%2BF8r4GOqUBmeOZA%2FMYHx03HoGSP26tJkbodumcnzQ%2FtVwNBgg8Lj9mDf0MrMtZAdp%2FMIRICyRr24JuDaeUmczLHq41Y1l0gFlojRB36KKl7yu8WeRqBFsZKHh094I9tEq1qW%2BZPw52KwUDt4ToyN7BdUgue9c3yoIenrqbS%2F0kFAmFQ8UwaKyq3EdRnA4VTaZ9eaNJUMJbG6oWXRgkdW%2B3FTjsuo8yJ4%2FjybZj&X-Amz-Signature=5ce06565b540fa6bf7bf85ceefc1cce70aca66b1ba90d95005031dda93586548&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646N7L37U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIG%2BW48fu9mOrCG%2BKl4HsPqjsPPEthM6usW0j0cKprUhjAiEAvKcpDiWba1n6se3onVPxYutj%2FcMxBdixM4O91wrlWpYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDifHuTKYOHRr1aI0ircAyA5i51Ye%2FfxOw%2BVtlMAXKBrU%2F0zJcdPC3cbnjM7HwXgHTDOZgoYDwf8iJVb00UksuJQPGH605%2BZDLsu%2FDVgoyCCnpJbTkF2PBEmFTuqPl0fJcikmo0%2BAJnQe9TAgrTAbG%2BYUl0mtP3D320reEBQZOkfn%2BW53XGTQnmmuQRS%2BG3QivK6hkdB9UY7N%2B%2FrpoLyDJeeoD5A4urPyslMUG4Ulx695yp4iq7iaGde0v62gqRcb5aRaDcwe5sqLuMKZ3WANUqVhIExm1EwKTs7R0U9%2FTqwFTkg3rdGRep5c5NE2KPX7oWmLSEo2Gg09DRI5yQjK9FG3mWUlahqMf8wFVNcDnHxhNbnLg4P1D1dS1MN8eziz%2FtxtgyNNZZFAtYIYu%2BtDlATOohinehz7RPVG%2F3kQc17%2BfI1SWE7T8xLxZHGYjfjZbwsUuUTAkA%2BGBuWIE%2BfGFAPS9xtEOJpMAtwGQIfFuMQ%2FLZ%2F11kUpffTrzuHRPZ9UoXWOQ7LF659Sk8%2BVjFRRZM4RrXtz6aWStifzSnfnAnqimPtxFGfDZvZ7Yu7js1fj%2BDybyTbKcc2YWC%2FI34qQ1v6kiIinvPF0QY7XQoEZ8KpMXm8IcOqjhWB6SpzIrzmVEltVGJuemyIdyNQMO%2BF8r4GOqUBmeOZA%2FMYHx03HoGSP26tJkbodumcnzQ%2FtVwNBgg8Lj9mDf0MrMtZAdp%2FMIRICyRr24JuDaeUmczLHq41Y1l0gFlojRB36KKl7yu8WeRqBFsZKHh094I9tEq1qW%2BZPw52KwUDt4ToyN7BdUgue9c3yoIenrqbS%2F0kFAmFQ8UwaKyq3EdRnA4VTaZ9eaNJUMJbG6oWXRgkdW%2B3FTjsuo8yJ4%2FjybZj&X-Amz-Signature=a01be6342fd4b4ece3314ba137a34a55f44a03938110ad99e5fedf35f66b69c3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646N7L37U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIG%2BW48fu9mOrCG%2BKl4HsPqjsPPEthM6usW0j0cKprUhjAiEAvKcpDiWba1n6se3onVPxYutj%2FcMxBdixM4O91wrlWpYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDifHuTKYOHRr1aI0ircAyA5i51Ye%2FfxOw%2BVtlMAXKBrU%2F0zJcdPC3cbnjM7HwXgHTDOZgoYDwf8iJVb00UksuJQPGH605%2BZDLsu%2FDVgoyCCnpJbTkF2PBEmFTuqPl0fJcikmo0%2BAJnQe9TAgrTAbG%2BYUl0mtP3D320reEBQZOkfn%2BW53XGTQnmmuQRS%2BG3QivK6hkdB9UY7N%2B%2FrpoLyDJeeoD5A4urPyslMUG4Ulx695yp4iq7iaGde0v62gqRcb5aRaDcwe5sqLuMKZ3WANUqVhIExm1EwKTs7R0U9%2FTqwFTkg3rdGRep5c5NE2KPX7oWmLSEo2Gg09DRI5yQjK9FG3mWUlahqMf8wFVNcDnHxhNbnLg4P1D1dS1MN8eziz%2FtxtgyNNZZFAtYIYu%2BtDlATOohinehz7RPVG%2F3kQc17%2BfI1SWE7T8xLxZHGYjfjZbwsUuUTAkA%2BGBuWIE%2BfGFAPS9xtEOJpMAtwGQIfFuMQ%2FLZ%2F11kUpffTrzuHRPZ9UoXWOQ7LF659Sk8%2BVjFRRZM4RrXtz6aWStifzSnfnAnqimPtxFGfDZvZ7Yu7js1fj%2BDybyTbKcc2YWC%2FI34qQ1v6kiIinvPF0QY7XQoEZ8KpMXm8IcOqjhWB6SpzIrzmVEltVGJuemyIdyNQMO%2BF8r4GOqUBmeOZA%2FMYHx03HoGSP26tJkbodumcnzQ%2FtVwNBgg8Lj9mDf0MrMtZAdp%2FMIRICyRr24JuDaeUmczLHq41Y1l0gFlojRB36KKl7yu8WeRqBFsZKHh094I9tEq1qW%2BZPw52KwUDt4ToyN7BdUgue9c3yoIenrqbS%2F0kFAmFQ8UwaKyq3EdRnA4VTaZ9eaNJUMJbG6oWXRgkdW%2B3FTjsuo8yJ4%2FjybZj&X-Amz-Signature=8de8218c9da04b736ec2196208be4b7756ab015a018d98f2e7915577df3de311&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646N7L37U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIG%2BW48fu9mOrCG%2BKl4HsPqjsPPEthM6usW0j0cKprUhjAiEAvKcpDiWba1n6se3onVPxYutj%2FcMxBdixM4O91wrlWpYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDifHuTKYOHRr1aI0ircAyA5i51Ye%2FfxOw%2BVtlMAXKBrU%2F0zJcdPC3cbnjM7HwXgHTDOZgoYDwf8iJVb00UksuJQPGH605%2BZDLsu%2FDVgoyCCnpJbTkF2PBEmFTuqPl0fJcikmo0%2BAJnQe9TAgrTAbG%2BYUl0mtP3D320reEBQZOkfn%2BW53XGTQnmmuQRS%2BG3QivK6hkdB9UY7N%2B%2FrpoLyDJeeoD5A4urPyslMUG4Ulx695yp4iq7iaGde0v62gqRcb5aRaDcwe5sqLuMKZ3WANUqVhIExm1EwKTs7R0U9%2FTqwFTkg3rdGRep5c5NE2KPX7oWmLSEo2Gg09DRI5yQjK9FG3mWUlahqMf8wFVNcDnHxhNbnLg4P1D1dS1MN8eziz%2FtxtgyNNZZFAtYIYu%2BtDlATOohinehz7RPVG%2F3kQc17%2BfI1SWE7T8xLxZHGYjfjZbwsUuUTAkA%2BGBuWIE%2BfGFAPS9xtEOJpMAtwGQIfFuMQ%2FLZ%2F11kUpffTrzuHRPZ9UoXWOQ7LF659Sk8%2BVjFRRZM4RrXtz6aWStifzSnfnAnqimPtxFGfDZvZ7Yu7js1fj%2BDybyTbKcc2YWC%2FI34qQ1v6kiIinvPF0QY7XQoEZ8KpMXm8IcOqjhWB6SpzIrzmVEltVGJuemyIdyNQMO%2BF8r4GOqUBmeOZA%2FMYHx03HoGSP26tJkbodumcnzQ%2FtVwNBgg8Lj9mDf0MrMtZAdp%2FMIRICyRr24JuDaeUmczLHq41Y1l0gFlojRB36KKl7yu8WeRqBFsZKHh094I9tEq1qW%2BZPw52KwUDt4ToyN7BdUgue9c3yoIenrqbS%2F0kFAmFQ8UwaKyq3EdRnA4VTaZ9eaNJUMJbG6oWXRgkdW%2B3FTjsuo8yJ4%2FjybZj&X-Amz-Signature=e3595286b8d6c550164d67f1224dbfd8d82937734945657aa6cffad83c9c4632&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
