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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCM6KK7Z%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLIwY02%2BvVyEmTlr7I2mwc59iN44xxXy3qx8L8NzFBAgIgIJgXjFYGhRv2MKxrxTfC4ME76Hb4L3aSFezqbi%2BTVCgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGrzYQwaAH7nksBvircA60VqxM8dElKyz9Am4NAeV4ozVTdl8tqDG3UuZdBmeg8T9ch3oe%2Brg2irnCY4WFurxXkdd5%2FR%2B3Bs33M4K%2BG4YPeLHMglt6x5UW9WOf7g1baMjBHrED91b5fnKI974x2oZE0E6Qz%2BP1sbgwiNDG%2BN5r0yuDG1dg38NmxeQFtmcFlszdbEqL69dX3nG%2Fm%2FNWeXHQJXdwxwHmiwekp5gBqBrKioRXJqgFEsko3bgK2UX7SKiaehAltH%2FLBZlOHzbzGiEZCKh41iCEhs9rr6BebEHDlvtVjid6%2FdrFAzKMi48aKZiFwuIL%2BisqrJ1G4lkVzbkSi3WHCNAKMAOU5y3UgtAZVW%2BtEmOxtwY1RZKqZc50uRjJf1FEXDpS5ySJTKghddU6MNhog0rqD7tCWXp2gNamGOnhgUhp7QeIDygPeLUv5%2FDkT18MFslHDvYgPKkP6PngQ%2B3osxlGtBXvK7ouAQWkS8tecVctBV0MCY1yPqDlMYwRdSn3duj8%2BzA5QqhaWMrnmClgpd599amMg96Y%2BU9AOq69u7iYaPniAHFUOXfdJQZzYqPYBuYdXbOWqXSFiSveTJjhIMthrfJqzDF5n4xP5V6rW1hUQkzYSE%2BRnJy0nT4%2Bqm6PiRyLMS5xxMPWKpb8GOqUBznDO%2FPGuuSXeWh9ZogZHg1%2B8THZ%2F%2BXVbVjXUB4dndbQ%2Fv0iqjUm6zI2bdlF2Y%2BBCzAE6NGioBlmnzZxFKjDp8ZWmVs2aQ8ga8zmjIxMM8Q8CSe7uAoTNXIlPfF%2BDSJKe2KcKo9dgT6xelauHDyCV%2BD3yKqF9Yj23A2q4LsezjxVALo33Pu%2BKyLqVIbHGCHxekMDJaQHNeiLj8ywMLg%2FQuWmxC2vP&X-Amz-Signature=ac6fe12ea3c233891544fca5973e3da7f96b97a2a980bc85ce3f08854a169a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCM6KK7Z%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLIwY02%2BvVyEmTlr7I2mwc59iN44xxXy3qx8L8NzFBAgIgIJgXjFYGhRv2MKxrxTfC4ME76Hb4L3aSFezqbi%2BTVCgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGrzYQwaAH7nksBvircA60VqxM8dElKyz9Am4NAeV4ozVTdl8tqDG3UuZdBmeg8T9ch3oe%2Brg2irnCY4WFurxXkdd5%2FR%2B3Bs33M4K%2BG4YPeLHMglt6x5UW9WOf7g1baMjBHrED91b5fnKI974x2oZE0E6Qz%2BP1sbgwiNDG%2BN5r0yuDG1dg38NmxeQFtmcFlszdbEqL69dX3nG%2Fm%2FNWeXHQJXdwxwHmiwekp5gBqBrKioRXJqgFEsko3bgK2UX7SKiaehAltH%2FLBZlOHzbzGiEZCKh41iCEhs9rr6BebEHDlvtVjid6%2FdrFAzKMi48aKZiFwuIL%2BisqrJ1G4lkVzbkSi3WHCNAKMAOU5y3UgtAZVW%2BtEmOxtwY1RZKqZc50uRjJf1FEXDpS5ySJTKghddU6MNhog0rqD7tCWXp2gNamGOnhgUhp7QeIDygPeLUv5%2FDkT18MFslHDvYgPKkP6PngQ%2B3osxlGtBXvK7ouAQWkS8tecVctBV0MCY1yPqDlMYwRdSn3duj8%2BzA5QqhaWMrnmClgpd599amMg96Y%2BU9AOq69u7iYaPniAHFUOXfdJQZzYqPYBuYdXbOWqXSFiSveTJjhIMthrfJqzDF5n4xP5V6rW1hUQkzYSE%2BRnJy0nT4%2Bqm6PiRyLMS5xxMPWKpb8GOqUBznDO%2FPGuuSXeWh9ZogZHg1%2B8THZ%2F%2BXVbVjXUB4dndbQ%2Fv0iqjUm6zI2bdlF2Y%2BBCzAE6NGioBlmnzZxFKjDp8ZWmVs2aQ8ga8zmjIxMM8Q8CSe7uAoTNXIlPfF%2BDSJKe2KcKo9dgT6xelauHDyCV%2BD3yKqF9Yj23A2q4LsezjxVALo33Pu%2BKyLqVIbHGCHxekMDJaQHNeiLj8ywMLg%2FQuWmxC2vP&X-Amz-Signature=7f8bab8db31c4e2fdd4584e0804fffd7fcea9036789bea7a0be9d262aadd90c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCM6KK7Z%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLIwY02%2BvVyEmTlr7I2mwc59iN44xxXy3qx8L8NzFBAgIgIJgXjFYGhRv2MKxrxTfC4ME76Hb4L3aSFezqbi%2BTVCgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGrzYQwaAH7nksBvircA60VqxM8dElKyz9Am4NAeV4ozVTdl8tqDG3UuZdBmeg8T9ch3oe%2Brg2irnCY4WFurxXkdd5%2FR%2B3Bs33M4K%2BG4YPeLHMglt6x5UW9WOf7g1baMjBHrED91b5fnKI974x2oZE0E6Qz%2BP1sbgwiNDG%2BN5r0yuDG1dg38NmxeQFtmcFlszdbEqL69dX3nG%2Fm%2FNWeXHQJXdwxwHmiwekp5gBqBrKioRXJqgFEsko3bgK2UX7SKiaehAltH%2FLBZlOHzbzGiEZCKh41iCEhs9rr6BebEHDlvtVjid6%2FdrFAzKMi48aKZiFwuIL%2BisqrJ1G4lkVzbkSi3WHCNAKMAOU5y3UgtAZVW%2BtEmOxtwY1RZKqZc50uRjJf1FEXDpS5ySJTKghddU6MNhog0rqD7tCWXp2gNamGOnhgUhp7QeIDygPeLUv5%2FDkT18MFslHDvYgPKkP6PngQ%2B3osxlGtBXvK7ouAQWkS8tecVctBV0MCY1yPqDlMYwRdSn3duj8%2BzA5QqhaWMrnmClgpd599amMg96Y%2BU9AOq69u7iYaPniAHFUOXfdJQZzYqPYBuYdXbOWqXSFiSveTJjhIMthrfJqzDF5n4xP5V6rW1hUQkzYSE%2BRnJy0nT4%2Bqm6PiRyLMS5xxMPWKpb8GOqUBznDO%2FPGuuSXeWh9ZogZHg1%2B8THZ%2F%2BXVbVjXUB4dndbQ%2Fv0iqjUm6zI2bdlF2Y%2BBCzAE6NGioBlmnzZxFKjDp8ZWmVs2aQ8ga8zmjIxMM8Q8CSe7uAoTNXIlPfF%2BDSJKe2KcKo9dgT6xelauHDyCV%2BD3yKqF9Yj23A2q4LsezjxVALo33Pu%2BKyLqVIbHGCHxekMDJaQHNeiLj8ywMLg%2FQuWmxC2vP&X-Amz-Signature=fdd709aed83f59635edf6f0a96ca8c82e1d7473ba466daf6b9c984cf4265f5cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCM6KK7Z%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLIwY02%2BvVyEmTlr7I2mwc59iN44xxXy3qx8L8NzFBAgIgIJgXjFYGhRv2MKxrxTfC4ME76Hb4L3aSFezqbi%2BTVCgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGrzYQwaAH7nksBvircA60VqxM8dElKyz9Am4NAeV4ozVTdl8tqDG3UuZdBmeg8T9ch3oe%2Brg2irnCY4WFurxXkdd5%2FR%2B3Bs33M4K%2BG4YPeLHMglt6x5UW9WOf7g1baMjBHrED91b5fnKI974x2oZE0E6Qz%2BP1sbgwiNDG%2BN5r0yuDG1dg38NmxeQFtmcFlszdbEqL69dX3nG%2Fm%2FNWeXHQJXdwxwHmiwekp5gBqBrKioRXJqgFEsko3bgK2UX7SKiaehAltH%2FLBZlOHzbzGiEZCKh41iCEhs9rr6BebEHDlvtVjid6%2FdrFAzKMi48aKZiFwuIL%2BisqrJ1G4lkVzbkSi3WHCNAKMAOU5y3UgtAZVW%2BtEmOxtwY1RZKqZc50uRjJf1FEXDpS5ySJTKghddU6MNhog0rqD7tCWXp2gNamGOnhgUhp7QeIDygPeLUv5%2FDkT18MFslHDvYgPKkP6PngQ%2B3osxlGtBXvK7ouAQWkS8tecVctBV0MCY1yPqDlMYwRdSn3duj8%2BzA5QqhaWMrnmClgpd599amMg96Y%2BU9AOq69u7iYaPniAHFUOXfdJQZzYqPYBuYdXbOWqXSFiSveTJjhIMthrfJqzDF5n4xP5V6rW1hUQkzYSE%2BRnJy0nT4%2Bqm6PiRyLMS5xxMPWKpb8GOqUBznDO%2FPGuuSXeWh9ZogZHg1%2B8THZ%2F%2BXVbVjXUB4dndbQ%2Fv0iqjUm6zI2bdlF2Y%2BBCzAE6NGioBlmnzZxFKjDp8ZWmVs2aQ8ga8zmjIxMM8Q8CSe7uAoTNXIlPfF%2BDSJKe2KcKo9dgT6xelauHDyCV%2BD3yKqF9Yj23A2q4LsezjxVALo33Pu%2BKyLqVIbHGCHxekMDJaQHNeiLj8ywMLg%2FQuWmxC2vP&X-Amz-Signature=f3c363bd9568090179c4801a27fcb429c9f86bfd47d3d9189dc3e98aaf8ba807&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCM6KK7Z%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLIwY02%2BvVyEmTlr7I2mwc59iN44xxXy3qx8L8NzFBAgIgIJgXjFYGhRv2MKxrxTfC4ME76Hb4L3aSFezqbi%2BTVCgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGrzYQwaAH7nksBvircA60VqxM8dElKyz9Am4NAeV4ozVTdl8tqDG3UuZdBmeg8T9ch3oe%2Brg2irnCY4WFurxXkdd5%2FR%2B3Bs33M4K%2BG4YPeLHMglt6x5UW9WOf7g1baMjBHrED91b5fnKI974x2oZE0E6Qz%2BP1sbgwiNDG%2BN5r0yuDG1dg38NmxeQFtmcFlszdbEqL69dX3nG%2Fm%2FNWeXHQJXdwxwHmiwekp5gBqBrKioRXJqgFEsko3bgK2UX7SKiaehAltH%2FLBZlOHzbzGiEZCKh41iCEhs9rr6BebEHDlvtVjid6%2FdrFAzKMi48aKZiFwuIL%2BisqrJ1G4lkVzbkSi3WHCNAKMAOU5y3UgtAZVW%2BtEmOxtwY1RZKqZc50uRjJf1FEXDpS5ySJTKghddU6MNhog0rqD7tCWXp2gNamGOnhgUhp7QeIDygPeLUv5%2FDkT18MFslHDvYgPKkP6PngQ%2B3osxlGtBXvK7ouAQWkS8tecVctBV0MCY1yPqDlMYwRdSn3duj8%2BzA5QqhaWMrnmClgpd599amMg96Y%2BU9AOq69u7iYaPniAHFUOXfdJQZzYqPYBuYdXbOWqXSFiSveTJjhIMthrfJqzDF5n4xP5V6rW1hUQkzYSE%2BRnJy0nT4%2Bqm6PiRyLMS5xxMPWKpb8GOqUBznDO%2FPGuuSXeWh9ZogZHg1%2B8THZ%2F%2BXVbVjXUB4dndbQ%2Fv0iqjUm6zI2bdlF2Y%2BBCzAE6NGioBlmnzZxFKjDp8ZWmVs2aQ8ga8zmjIxMM8Q8CSe7uAoTNXIlPfF%2BDSJKe2KcKo9dgT6xelauHDyCV%2BD3yKqF9Yj23A2q4LsezjxVALo33Pu%2BKyLqVIbHGCHxekMDJaQHNeiLj8ywMLg%2FQuWmxC2vP&X-Amz-Signature=409e27c2a3d1180bbd3c6c38082456af3b575f72a75f6af03e472a314f607c77&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCM6KK7Z%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLIwY02%2BvVyEmTlr7I2mwc59iN44xxXy3qx8L8NzFBAgIgIJgXjFYGhRv2MKxrxTfC4ME76Hb4L3aSFezqbi%2BTVCgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGrzYQwaAH7nksBvircA60VqxM8dElKyz9Am4NAeV4ozVTdl8tqDG3UuZdBmeg8T9ch3oe%2Brg2irnCY4WFurxXkdd5%2FR%2B3Bs33M4K%2BG4YPeLHMglt6x5UW9WOf7g1baMjBHrED91b5fnKI974x2oZE0E6Qz%2BP1sbgwiNDG%2BN5r0yuDG1dg38NmxeQFtmcFlszdbEqL69dX3nG%2Fm%2FNWeXHQJXdwxwHmiwekp5gBqBrKioRXJqgFEsko3bgK2UX7SKiaehAltH%2FLBZlOHzbzGiEZCKh41iCEhs9rr6BebEHDlvtVjid6%2FdrFAzKMi48aKZiFwuIL%2BisqrJ1G4lkVzbkSi3WHCNAKMAOU5y3UgtAZVW%2BtEmOxtwY1RZKqZc50uRjJf1FEXDpS5ySJTKghddU6MNhog0rqD7tCWXp2gNamGOnhgUhp7QeIDygPeLUv5%2FDkT18MFslHDvYgPKkP6PngQ%2B3osxlGtBXvK7ouAQWkS8tecVctBV0MCY1yPqDlMYwRdSn3duj8%2BzA5QqhaWMrnmClgpd599amMg96Y%2BU9AOq69u7iYaPniAHFUOXfdJQZzYqPYBuYdXbOWqXSFiSveTJjhIMthrfJqzDF5n4xP5V6rW1hUQkzYSE%2BRnJy0nT4%2Bqm6PiRyLMS5xxMPWKpb8GOqUBznDO%2FPGuuSXeWh9ZogZHg1%2B8THZ%2F%2BXVbVjXUB4dndbQ%2Fv0iqjUm6zI2bdlF2Y%2BBCzAE6NGioBlmnzZxFKjDp8ZWmVs2aQ8ga8zmjIxMM8Q8CSe7uAoTNXIlPfF%2BDSJKe2KcKo9dgT6xelauHDyCV%2BD3yKqF9Yj23A2q4LsezjxVALo33Pu%2BKyLqVIbHGCHxekMDJaQHNeiLj8ywMLg%2FQuWmxC2vP&X-Amz-Signature=fa8c4945e3b490182d0a7af04586f9cf36fd71eedb718a7f3d1a085d0ddbe540&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCM6KK7Z%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLIwY02%2BvVyEmTlr7I2mwc59iN44xxXy3qx8L8NzFBAgIgIJgXjFYGhRv2MKxrxTfC4ME76Hb4L3aSFezqbi%2BTVCgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGrzYQwaAH7nksBvircA60VqxM8dElKyz9Am4NAeV4ozVTdl8tqDG3UuZdBmeg8T9ch3oe%2Brg2irnCY4WFurxXkdd5%2FR%2B3Bs33M4K%2BG4YPeLHMglt6x5UW9WOf7g1baMjBHrED91b5fnKI974x2oZE0E6Qz%2BP1sbgwiNDG%2BN5r0yuDG1dg38NmxeQFtmcFlszdbEqL69dX3nG%2Fm%2FNWeXHQJXdwxwHmiwekp5gBqBrKioRXJqgFEsko3bgK2UX7SKiaehAltH%2FLBZlOHzbzGiEZCKh41iCEhs9rr6BebEHDlvtVjid6%2FdrFAzKMi48aKZiFwuIL%2BisqrJ1G4lkVzbkSi3WHCNAKMAOU5y3UgtAZVW%2BtEmOxtwY1RZKqZc50uRjJf1FEXDpS5ySJTKghddU6MNhog0rqD7tCWXp2gNamGOnhgUhp7QeIDygPeLUv5%2FDkT18MFslHDvYgPKkP6PngQ%2B3osxlGtBXvK7ouAQWkS8tecVctBV0MCY1yPqDlMYwRdSn3duj8%2BzA5QqhaWMrnmClgpd599amMg96Y%2BU9AOq69u7iYaPniAHFUOXfdJQZzYqPYBuYdXbOWqXSFiSveTJjhIMthrfJqzDF5n4xP5V6rW1hUQkzYSE%2BRnJy0nT4%2Bqm6PiRyLMS5xxMPWKpb8GOqUBznDO%2FPGuuSXeWh9ZogZHg1%2B8THZ%2F%2BXVbVjXUB4dndbQ%2Fv0iqjUm6zI2bdlF2Y%2BBCzAE6NGioBlmnzZxFKjDp8ZWmVs2aQ8ga8zmjIxMM8Q8CSe7uAoTNXIlPfF%2BDSJKe2KcKo9dgT6xelauHDyCV%2BD3yKqF9Yj23A2q4LsezjxVALo33Pu%2BKyLqVIbHGCHxekMDJaQHNeiLj8ywMLg%2FQuWmxC2vP&X-Amz-Signature=55ace6d63b82ab959cc223c0468af91127d810ae20b81823915dfece0bbbd5b7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
