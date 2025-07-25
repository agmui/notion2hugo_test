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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPN43W7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDMMHTP%2FuAoSvNwFqzn4LKd8EfKiRhxL58jSBFczaWRTQIgZmXom%2BpNIt3q2xyNyNj3cWcfulRPaY5sXLAi4clVYNMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFuadGF%2FgQfC89quuircA7UavPUosWpXsfKhpAeNlKrJUhmvw9ywfIotNITvvFtM9ZSlRLXYeT4I9yseVJMEjmg3f0Pq6efydZBcDferOnER4nKlc1ZfKhjaSTB4vovWQF3RRfz8g4amYw9RbdLsli3%2BQ%2Fm9HdjP5qI9MSVrxFG8a7A3FTOdu2FiBAlgMxRYZB9Ygwub5VQ8gVDPDX5UBDne%2Bvq4YgjSV6pH%2B%2B7ks8JhhjRn7skfAzZSHqIWTSfnS4XmAKghi8w5Mlsc0VODJFlTD6TPVP5zvanmqJZIjmxakiR90tBFzInCh7BluIY2vu64CsJpUbfJOtMEfKmzoDGlreBJoQc7D22A5blN4yhYl6NvstNjA6f6%2BrSa4nHVxSbocsoaQQ%2BnBb9BAfk0Of33dfvgwl57rM%2BSaxFIXJ3cTWIuaODxeYax6s04YbnGKlG2QOibSMMVeFznpbujz1WmHMYNkEGqbhqpSawI3vWyX0WXguoTT8i%2BZ1RsdPyXKkBOUcI%2FPXqkHy2PM2xpsw2Ki9xjejk7Ei1QiyzsxFosCKOCG11fbYYGbpJ%2FP%2BGnLeOX3dJz9%2FcRjoHKcBVFnyNp6toT85JnLZf3bUAD7slfMj%2BzZJgT5gD%2B3sYuL4ntaiSfq%2Fgn8wpFAT3jMNOcjMQGOqUBs7YYJ5m2JKpStvUnJLN3a99r0TL0Dbmrw%2F1OyPNrK3q5hC%2Fz3tX9RrcbpqHR%2F50PM0KEkwgkCj%2B3M10Rv%2Bb9q5jPDUkl34oAijyjqNQfi4HuPkGKW0mFE8RDvjfGMyDsGAXeQGB5ji0p6bqe8dHHw0eJieqQt1txU9OaIowZUiulzItzHsdqwXSrKuiaKutiOlVjrJUO3SFDs%2F1Xhgn3JllF%2Bb8D&X-Amz-Signature=1d32cfd7b06773363b536167ade5d663ed9d6429eb63d5b6cdfa4741656778c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPN43W7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDMMHTP%2FuAoSvNwFqzn4LKd8EfKiRhxL58jSBFczaWRTQIgZmXom%2BpNIt3q2xyNyNj3cWcfulRPaY5sXLAi4clVYNMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFuadGF%2FgQfC89quuircA7UavPUosWpXsfKhpAeNlKrJUhmvw9ywfIotNITvvFtM9ZSlRLXYeT4I9yseVJMEjmg3f0Pq6efydZBcDferOnER4nKlc1ZfKhjaSTB4vovWQF3RRfz8g4amYw9RbdLsli3%2BQ%2Fm9HdjP5qI9MSVrxFG8a7A3FTOdu2FiBAlgMxRYZB9Ygwub5VQ8gVDPDX5UBDne%2Bvq4YgjSV6pH%2B%2B7ks8JhhjRn7skfAzZSHqIWTSfnS4XmAKghi8w5Mlsc0VODJFlTD6TPVP5zvanmqJZIjmxakiR90tBFzInCh7BluIY2vu64CsJpUbfJOtMEfKmzoDGlreBJoQc7D22A5blN4yhYl6NvstNjA6f6%2BrSa4nHVxSbocsoaQQ%2BnBb9BAfk0Of33dfvgwl57rM%2BSaxFIXJ3cTWIuaODxeYax6s04YbnGKlG2QOibSMMVeFznpbujz1WmHMYNkEGqbhqpSawI3vWyX0WXguoTT8i%2BZ1RsdPyXKkBOUcI%2FPXqkHy2PM2xpsw2Ki9xjejk7Ei1QiyzsxFosCKOCG11fbYYGbpJ%2FP%2BGnLeOX3dJz9%2FcRjoHKcBVFnyNp6toT85JnLZf3bUAD7slfMj%2BzZJgT5gD%2B3sYuL4ntaiSfq%2Fgn8wpFAT3jMNOcjMQGOqUBs7YYJ5m2JKpStvUnJLN3a99r0TL0Dbmrw%2F1OyPNrK3q5hC%2Fz3tX9RrcbpqHR%2F50PM0KEkwgkCj%2B3M10Rv%2Bb9q5jPDUkl34oAijyjqNQfi4HuPkGKW0mFE8RDvjfGMyDsGAXeQGB5ji0p6bqe8dHHw0eJieqQt1txU9OaIowZUiulzItzHsdqwXSrKuiaKutiOlVjrJUO3SFDs%2F1Xhgn3JllF%2Bb8D&X-Amz-Signature=ae396b0076ebc35ddd252970bf1b6118b1f165fbb0a8fafb7a72cc7ad81d3a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPN43W7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDMMHTP%2FuAoSvNwFqzn4LKd8EfKiRhxL58jSBFczaWRTQIgZmXom%2BpNIt3q2xyNyNj3cWcfulRPaY5sXLAi4clVYNMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFuadGF%2FgQfC89quuircA7UavPUosWpXsfKhpAeNlKrJUhmvw9ywfIotNITvvFtM9ZSlRLXYeT4I9yseVJMEjmg3f0Pq6efydZBcDferOnER4nKlc1ZfKhjaSTB4vovWQF3RRfz8g4amYw9RbdLsli3%2BQ%2Fm9HdjP5qI9MSVrxFG8a7A3FTOdu2FiBAlgMxRYZB9Ygwub5VQ8gVDPDX5UBDne%2Bvq4YgjSV6pH%2B%2B7ks8JhhjRn7skfAzZSHqIWTSfnS4XmAKghi8w5Mlsc0VODJFlTD6TPVP5zvanmqJZIjmxakiR90tBFzInCh7BluIY2vu64CsJpUbfJOtMEfKmzoDGlreBJoQc7D22A5blN4yhYl6NvstNjA6f6%2BrSa4nHVxSbocsoaQQ%2BnBb9BAfk0Of33dfvgwl57rM%2BSaxFIXJ3cTWIuaODxeYax6s04YbnGKlG2QOibSMMVeFznpbujz1WmHMYNkEGqbhqpSawI3vWyX0WXguoTT8i%2BZ1RsdPyXKkBOUcI%2FPXqkHy2PM2xpsw2Ki9xjejk7Ei1QiyzsxFosCKOCG11fbYYGbpJ%2FP%2BGnLeOX3dJz9%2FcRjoHKcBVFnyNp6toT85JnLZf3bUAD7slfMj%2BzZJgT5gD%2B3sYuL4ntaiSfq%2Fgn8wpFAT3jMNOcjMQGOqUBs7YYJ5m2JKpStvUnJLN3a99r0TL0Dbmrw%2F1OyPNrK3q5hC%2Fz3tX9RrcbpqHR%2F50PM0KEkwgkCj%2B3M10Rv%2Bb9q5jPDUkl34oAijyjqNQfi4HuPkGKW0mFE8RDvjfGMyDsGAXeQGB5ji0p6bqe8dHHw0eJieqQt1txU9OaIowZUiulzItzHsdqwXSrKuiaKutiOlVjrJUO3SFDs%2F1Xhgn3JllF%2Bb8D&X-Amz-Signature=dcc890e158bab30cf0d804748cf9e9cf4161c033116ef1ac2f16d7bf73f8558e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPN43W7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDMMHTP%2FuAoSvNwFqzn4LKd8EfKiRhxL58jSBFczaWRTQIgZmXom%2BpNIt3q2xyNyNj3cWcfulRPaY5sXLAi4clVYNMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFuadGF%2FgQfC89quuircA7UavPUosWpXsfKhpAeNlKrJUhmvw9ywfIotNITvvFtM9ZSlRLXYeT4I9yseVJMEjmg3f0Pq6efydZBcDferOnER4nKlc1ZfKhjaSTB4vovWQF3RRfz8g4amYw9RbdLsli3%2BQ%2Fm9HdjP5qI9MSVrxFG8a7A3FTOdu2FiBAlgMxRYZB9Ygwub5VQ8gVDPDX5UBDne%2Bvq4YgjSV6pH%2B%2B7ks8JhhjRn7skfAzZSHqIWTSfnS4XmAKghi8w5Mlsc0VODJFlTD6TPVP5zvanmqJZIjmxakiR90tBFzInCh7BluIY2vu64CsJpUbfJOtMEfKmzoDGlreBJoQc7D22A5blN4yhYl6NvstNjA6f6%2BrSa4nHVxSbocsoaQQ%2BnBb9BAfk0Of33dfvgwl57rM%2BSaxFIXJ3cTWIuaODxeYax6s04YbnGKlG2QOibSMMVeFznpbujz1WmHMYNkEGqbhqpSawI3vWyX0WXguoTT8i%2BZ1RsdPyXKkBOUcI%2FPXqkHy2PM2xpsw2Ki9xjejk7Ei1QiyzsxFosCKOCG11fbYYGbpJ%2FP%2BGnLeOX3dJz9%2FcRjoHKcBVFnyNp6toT85JnLZf3bUAD7slfMj%2BzZJgT5gD%2B3sYuL4ntaiSfq%2Fgn8wpFAT3jMNOcjMQGOqUBs7YYJ5m2JKpStvUnJLN3a99r0TL0Dbmrw%2F1OyPNrK3q5hC%2Fz3tX9RrcbpqHR%2F50PM0KEkwgkCj%2B3M10Rv%2Bb9q5jPDUkl34oAijyjqNQfi4HuPkGKW0mFE8RDvjfGMyDsGAXeQGB5ji0p6bqe8dHHw0eJieqQt1txU9OaIowZUiulzItzHsdqwXSrKuiaKutiOlVjrJUO3SFDs%2F1Xhgn3JllF%2Bb8D&X-Amz-Signature=941deb0bcd143ab9e3937ff010a32288c10160343f66e23a1dc6c06e6f2cb11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPN43W7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDMMHTP%2FuAoSvNwFqzn4LKd8EfKiRhxL58jSBFczaWRTQIgZmXom%2BpNIt3q2xyNyNj3cWcfulRPaY5sXLAi4clVYNMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFuadGF%2FgQfC89quuircA7UavPUosWpXsfKhpAeNlKrJUhmvw9ywfIotNITvvFtM9ZSlRLXYeT4I9yseVJMEjmg3f0Pq6efydZBcDferOnER4nKlc1ZfKhjaSTB4vovWQF3RRfz8g4amYw9RbdLsli3%2BQ%2Fm9HdjP5qI9MSVrxFG8a7A3FTOdu2FiBAlgMxRYZB9Ygwub5VQ8gVDPDX5UBDne%2Bvq4YgjSV6pH%2B%2B7ks8JhhjRn7skfAzZSHqIWTSfnS4XmAKghi8w5Mlsc0VODJFlTD6TPVP5zvanmqJZIjmxakiR90tBFzInCh7BluIY2vu64CsJpUbfJOtMEfKmzoDGlreBJoQc7D22A5blN4yhYl6NvstNjA6f6%2BrSa4nHVxSbocsoaQQ%2BnBb9BAfk0Of33dfvgwl57rM%2BSaxFIXJ3cTWIuaODxeYax6s04YbnGKlG2QOibSMMVeFznpbujz1WmHMYNkEGqbhqpSawI3vWyX0WXguoTT8i%2BZ1RsdPyXKkBOUcI%2FPXqkHy2PM2xpsw2Ki9xjejk7Ei1QiyzsxFosCKOCG11fbYYGbpJ%2FP%2BGnLeOX3dJz9%2FcRjoHKcBVFnyNp6toT85JnLZf3bUAD7slfMj%2BzZJgT5gD%2B3sYuL4ntaiSfq%2Fgn8wpFAT3jMNOcjMQGOqUBs7YYJ5m2JKpStvUnJLN3a99r0TL0Dbmrw%2F1OyPNrK3q5hC%2Fz3tX9RrcbpqHR%2F50PM0KEkwgkCj%2B3M10Rv%2Bb9q5jPDUkl34oAijyjqNQfi4HuPkGKW0mFE8RDvjfGMyDsGAXeQGB5ji0p6bqe8dHHw0eJieqQt1txU9OaIowZUiulzItzHsdqwXSrKuiaKutiOlVjrJUO3SFDs%2F1Xhgn3JllF%2Bb8D&X-Amz-Signature=d074ee2b00376f71988bb142d26263e00a72ff210b57b71b47878c0cbdae3708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPN43W7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDMMHTP%2FuAoSvNwFqzn4LKd8EfKiRhxL58jSBFczaWRTQIgZmXom%2BpNIt3q2xyNyNj3cWcfulRPaY5sXLAi4clVYNMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFuadGF%2FgQfC89quuircA7UavPUosWpXsfKhpAeNlKrJUhmvw9ywfIotNITvvFtM9ZSlRLXYeT4I9yseVJMEjmg3f0Pq6efydZBcDferOnER4nKlc1ZfKhjaSTB4vovWQF3RRfz8g4amYw9RbdLsli3%2BQ%2Fm9HdjP5qI9MSVrxFG8a7A3FTOdu2FiBAlgMxRYZB9Ygwub5VQ8gVDPDX5UBDne%2Bvq4YgjSV6pH%2B%2B7ks8JhhjRn7skfAzZSHqIWTSfnS4XmAKghi8w5Mlsc0VODJFlTD6TPVP5zvanmqJZIjmxakiR90tBFzInCh7BluIY2vu64CsJpUbfJOtMEfKmzoDGlreBJoQc7D22A5blN4yhYl6NvstNjA6f6%2BrSa4nHVxSbocsoaQQ%2BnBb9BAfk0Of33dfvgwl57rM%2BSaxFIXJ3cTWIuaODxeYax6s04YbnGKlG2QOibSMMVeFznpbujz1WmHMYNkEGqbhqpSawI3vWyX0WXguoTT8i%2BZ1RsdPyXKkBOUcI%2FPXqkHy2PM2xpsw2Ki9xjejk7Ei1QiyzsxFosCKOCG11fbYYGbpJ%2FP%2BGnLeOX3dJz9%2FcRjoHKcBVFnyNp6toT85JnLZf3bUAD7slfMj%2BzZJgT5gD%2B3sYuL4ntaiSfq%2Fgn8wpFAT3jMNOcjMQGOqUBs7YYJ5m2JKpStvUnJLN3a99r0TL0Dbmrw%2F1OyPNrK3q5hC%2Fz3tX9RrcbpqHR%2F50PM0KEkwgkCj%2B3M10Rv%2Bb9q5jPDUkl34oAijyjqNQfi4HuPkGKW0mFE8RDvjfGMyDsGAXeQGB5ji0p6bqe8dHHw0eJieqQt1txU9OaIowZUiulzItzHsdqwXSrKuiaKutiOlVjrJUO3SFDs%2F1Xhgn3JllF%2Bb8D&X-Amz-Signature=5828ab9b4e1b211066e92a001a4f33a8a471904dd71cf122f256fdf2b513a661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPN43W7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDMMHTP%2FuAoSvNwFqzn4LKd8EfKiRhxL58jSBFczaWRTQIgZmXom%2BpNIt3q2xyNyNj3cWcfulRPaY5sXLAi4clVYNMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFuadGF%2FgQfC89quuircA7UavPUosWpXsfKhpAeNlKrJUhmvw9ywfIotNITvvFtM9ZSlRLXYeT4I9yseVJMEjmg3f0Pq6efydZBcDferOnER4nKlc1ZfKhjaSTB4vovWQF3RRfz8g4amYw9RbdLsli3%2BQ%2Fm9HdjP5qI9MSVrxFG8a7A3FTOdu2FiBAlgMxRYZB9Ygwub5VQ8gVDPDX5UBDne%2Bvq4YgjSV6pH%2B%2B7ks8JhhjRn7skfAzZSHqIWTSfnS4XmAKghi8w5Mlsc0VODJFlTD6TPVP5zvanmqJZIjmxakiR90tBFzInCh7BluIY2vu64CsJpUbfJOtMEfKmzoDGlreBJoQc7D22A5blN4yhYl6NvstNjA6f6%2BrSa4nHVxSbocsoaQQ%2BnBb9BAfk0Of33dfvgwl57rM%2BSaxFIXJ3cTWIuaODxeYax6s04YbnGKlG2QOibSMMVeFznpbujz1WmHMYNkEGqbhqpSawI3vWyX0WXguoTT8i%2BZ1RsdPyXKkBOUcI%2FPXqkHy2PM2xpsw2Ki9xjejk7Ei1QiyzsxFosCKOCG11fbYYGbpJ%2FP%2BGnLeOX3dJz9%2FcRjoHKcBVFnyNp6toT85JnLZf3bUAD7slfMj%2BzZJgT5gD%2B3sYuL4ntaiSfq%2Fgn8wpFAT3jMNOcjMQGOqUBs7YYJ5m2JKpStvUnJLN3a99r0TL0Dbmrw%2F1OyPNrK3q5hC%2Fz3tX9RrcbpqHR%2F50PM0KEkwgkCj%2B3M10Rv%2Bb9q5jPDUkl34oAijyjqNQfi4HuPkGKW0mFE8RDvjfGMyDsGAXeQGB5ji0p6bqe8dHHw0eJieqQt1txU9OaIowZUiulzItzHsdqwXSrKuiaKutiOlVjrJUO3SFDs%2F1Xhgn3JllF%2Bb8D&X-Amz-Signature=2c6e474b7025108aedf6f475ffe4d71f783177fb72674db1ef4766f159e0a40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
