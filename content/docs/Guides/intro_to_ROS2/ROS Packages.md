---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWWJ2NR%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCnzlzH0FZv59b77PsBFqTNkQnfuWhbaw%2BMP2dxscXuHQIgWnaw%2B9D8wdN5PIA8G0w%2B2ssRmv58f7TLP6PkTmxT5Acq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKhzjGm9y6XBwAVKLCrcA0ZULG42FPMGTFR72WwhoznAYGVJKQq8lMoc5lDWRUkWuKFVfsExtBfrs2wfsFkNLJDOH5woleEbAGLrM0%2Flhvh2YGlD4YUFtaKN3coitGfhdwJ8ptQTJ3VfdxE2ltpAa384kKmfPFleVpyobWTW4MZA71CqmZkNr4Kr91RkFNHZ%2Bns7lHdQ4SEXpzppu0b9YHOIixwmtR8qSjmgWIel%2FSi8Vi3FScYUxUu3siOJNJKCqR2OGCwLHdCWR4vHzWAJrgOD2J%2FTIAYPE8zyfHAbabyaUKqk5dB2lov8TZaSFLl%2F3LJKrGJW%2B1vO4YsRG5qr1ZY6jHwdCmFWLo4u5fuq7dwXR8UEv7q2qvWBH6r2V9vTITEN0Ktitq%2FVuJjZzDHnW8rDTqP3cF%2BRBI10n7cCfN6idaB%2B%2Fusw7cHwEjaTtghHJT5y051%2BzRAEv3T0j4Q0KMa9lK6Xvr5VhkRQoMsCwst3UPtWzg8VC195F%2FaEfElfDXw%2BUe3ZYoBVxPjg%2FqBnn5aXM9bbtFE%2F%2FOA49TOrBDYOOGr8eGfeMfiWDJ9wbtHklA5LZGhTn5r%2F8Ws6fOPobYFIghXwTXpSoHuqR2c5NFTizCV%2B4SDY7N7zqQnyxMfzeZhXyZpT9tF4oYUwMNSA%2F8gGOqUBevJEugC9YNvICJlyNpH38D5plWWMwSyBw12s1FrT5MOZmFLkJTjJza3L49rRqELwHIv8GNMbY072PKhmc9iep2Az7yqETAicUbEjD3OALf5LBF37NJLGHUiG3kDizQanXR4rhCHILG18YOJ9JYM10Qb%2FfG46TbnL%2FsboiuySdQaNktsGv7q5FKCsevAB1ILxOsSCV3tJnI%2FK3IhQ411lTGSmzwus&X-Amz-Signature=7f16c382c2d28a5921759887771542e3ced47b48acf98584f948f0ec541bf9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWWJ2NR%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCnzlzH0FZv59b77PsBFqTNkQnfuWhbaw%2BMP2dxscXuHQIgWnaw%2B9D8wdN5PIA8G0w%2B2ssRmv58f7TLP6PkTmxT5Acq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKhzjGm9y6XBwAVKLCrcA0ZULG42FPMGTFR72WwhoznAYGVJKQq8lMoc5lDWRUkWuKFVfsExtBfrs2wfsFkNLJDOH5woleEbAGLrM0%2Flhvh2YGlD4YUFtaKN3coitGfhdwJ8ptQTJ3VfdxE2ltpAa384kKmfPFleVpyobWTW4MZA71CqmZkNr4Kr91RkFNHZ%2Bns7lHdQ4SEXpzppu0b9YHOIixwmtR8qSjmgWIel%2FSi8Vi3FScYUxUu3siOJNJKCqR2OGCwLHdCWR4vHzWAJrgOD2J%2FTIAYPE8zyfHAbabyaUKqk5dB2lov8TZaSFLl%2F3LJKrGJW%2B1vO4YsRG5qr1ZY6jHwdCmFWLo4u5fuq7dwXR8UEv7q2qvWBH6r2V9vTITEN0Ktitq%2FVuJjZzDHnW8rDTqP3cF%2BRBI10n7cCfN6idaB%2B%2Fusw7cHwEjaTtghHJT5y051%2BzRAEv3T0j4Q0KMa9lK6Xvr5VhkRQoMsCwst3UPtWzg8VC195F%2FaEfElfDXw%2BUe3ZYoBVxPjg%2FqBnn5aXM9bbtFE%2F%2FOA49TOrBDYOOGr8eGfeMfiWDJ9wbtHklA5LZGhTn5r%2F8Ws6fOPobYFIghXwTXpSoHuqR2c5NFTizCV%2B4SDY7N7zqQnyxMfzeZhXyZpT9tF4oYUwMNSA%2F8gGOqUBevJEugC9YNvICJlyNpH38D5plWWMwSyBw12s1FrT5MOZmFLkJTjJza3L49rRqELwHIv8GNMbY072PKhmc9iep2Az7yqETAicUbEjD3OALf5LBF37NJLGHUiG3kDizQanXR4rhCHILG18YOJ9JYM10Qb%2FfG46TbnL%2FsboiuySdQaNktsGv7q5FKCsevAB1ILxOsSCV3tJnI%2FK3IhQ411lTGSmzwus&X-Amz-Signature=266e39394d90ff0cab9aabf7819bd9de2da6ed138e8e49658d4252f3a4691db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWWJ2NR%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCnzlzH0FZv59b77PsBFqTNkQnfuWhbaw%2BMP2dxscXuHQIgWnaw%2B9D8wdN5PIA8G0w%2B2ssRmv58f7TLP6PkTmxT5Acq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKhzjGm9y6XBwAVKLCrcA0ZULG42FPMGTFR72WwhoznAYGVJKQq8lMoc5lDWRUkWuKFVfsExtBfrs2wfsFkNLJDOH5woleEbAGLrM0%2Flhvh2YGlD4YUFtaKN3coitGfhdwJ8ptQTJ3VfdxE2ltpAa384kKmfPFleVpyobWTW4MZA71CqmZkNr4Kr91RkFNHZ%2Bns7lHdQ4SEXpzppu0b9YHOIixwmtR8qSjmgWIel%2FSi8Vi3FScYUxUu3siOJNJKCqR2OGCwLHdCWR4vHzWAJrgOD2J%2FTIAYPE8zyfHAbabyaUKqk5dB2lov8TZaSFLl%2F3LJKrGJW%2B1vO4YsRG5qr1ZY6jHwdCmFWLo4u5fuq7dwXR8UEv7q2qvWBH6r2V9vTITEN0Ktitq%2FVuJjZzDHnW8rDTqP3cF%2BRBI10n7cCfN6idaB%2B%2Fusw7cHwEjaTtghHJT5y051%2BzRAEv3T0j4Q0KMa9lK6Xvr5VhkRQoMsCwst3UPtWzg8VC195F%2FaEfElfDXw%2BUe3ZYoBVxPjg%2FqBnn5aXM9bbtFE%2F%2FOA49TOrBDYOOGr8eGfeMfiWDJ9wbtHklA5LZGhTn5r%2F8Ws6fOPobYFIghXwTXpSoHuqR2c5NFTizCV%2B4SDY7N7zqQnyxMfzeZhXyZpT9tF4oYUwMNSA%2F8gGOqUBevJEugC9YNvICJlyNpH38D5plWWMwSyBw12s1FrT5MOZmFLkJTjJza3L49rRqELwHIv8GNMbY072PKhmc9iep2Az7yqETAicUbEjD3OALf5LBF37NJLGHUiG3kDizQanXR4rhCHILG18YOJ9JYM10Qb%2FfG46TbnL%2FsboiuySdQaNktsGv7q5FKCsevAB1ILxOsSCV3tJnI%2FK3IhQ411lTGSmzwus&X-Amz-Signature=1607412160dbe33be1c5a65683a07f2a787e84709088b2983775e26c5cf41877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWWJ2NR%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCnzlzH0FZv59b77PsBFqTNkQnfuWhbaw%2BMP2dxscXuHQIgWnaw%2B9D8wdN5PIA8G0w%2B2ssRmv58f7TLP6PkTmxT5Acq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKhzjGm9y6XBwAVKLCrcA0ZULG42FPMGTFR72WwhoznAYGVJKQq8lMoc5lDWRUkWuKFVfsExtBfrs2wfsFkNLJDOH5woleEbAGLrM0%2Flhvh2YGlD4YUFtaKN3coitGfhdwJ8ptQTJ3VfdxE2ltpAa384kKmfPFleVpyobWTW4MZA71CqmZkNr4Kr91RkFNHZ%2Bns7lHdQ4SEXpzppu0b9YHOIixwmtR8qSjmgWIel%2FSi8Vi3FScYUxUu3siOJNJKCqR2OGCwLHdCWR4vHzWAJrgOD2J%2FTIAYPE8zyfHAbabyaUKqk5dB2lov8TZaSFLl%2F3LJKrGJW%2B1vO4YsRG5qr1ZY6jHwdCmFWLo4u5fuq7dwXR8UEv7q2qvWBH6r2V9vTITEN0Ktitq%2FVuJjZzDHnW8rDTqP3cF%2BRBI10n7cCfN6idaB%2B%2Fusw7cHwEjaTtghHJT5y051%2BzRAEv3T0j4Q0KMa9lK6Xvr5VhkRQoMsCwst3UPtWzg8VC195F%2FaEfElfDXw%2BUe3ZYoBVxPjg%2FqBnn5aXM9bbtFE%2F%2FOA49TOrBDYOOGr8eGfeMfiWDJ9wbtHklA5LZGhTn5r%2F8Ws6fOPobYFIghXwTXpSoHuqR2c5NFTizCV%2B4SDY7N7zqQnyxMfzeZhXyZpT9tF4oYUwMNSA%2F8gGOqUBevJEugC9YNvICJlyNpH38D5plWWMwSyBw12s1FrT5MOZmFLkJTjJza3L49rRqELwHIv8GNMbY072PKhmc9iep2Az7yqETAicUbEjD3OALf5LBF37NJLGHUiG3kDizQanXR4rhCHILG18YOJ9JYM10Qb%2FfG46TbnL%2FsboiuySdQaNktsGv7q5FKCsevAB1ILxOsSCV3tJnI%2FK3IhQ411lTGSmzwus&X-Amz-Signature=c07fe14e2ef144519617debdd00baf8bf820bf87b9ca7fcb7b4deffece44db3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWWJ2NR%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCnzlzH0FZv59b77PsBFqTNkQnfuWhbaw%2BMP2dxscXuHQIgWnaw%2B9D8wdN5PIA8G0w%2B2ssRmv58f7TLP6PkTmxT5Acq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKhzjGm9y6XBwAVKLCrcA0ZULG42FPMGTFR72WwhoznAYGVJKQq8lMoc5lDWRUkWuKFVfsExtBfrs2wfsFkNLJDOH5woleEbAGLrM0%2Flhvh2YGlD4YUFtaKN3coitGfhdwJ8ptQTJ3VfdxE2ltpAa384kKmfPFleVpyobWTW4MZA71CqmZkNr4Kr91RkFNHZ%2Bns7lHdQ4SEXpzppu0b9YHOIixwmtR8qSjmgWIel%2FSi8Vi3FScYUxUu3siOJNJKCqR2OGCwLHdCWR4vHzWAJrgOD2J%2FTIAYPE8zyfHAbabyaUKqk5dB2lov8TZaSFLl%2F3LJKrGJW%2B1vO4YsRG5qr1ZY6jHwdCmFWLo4u5fuq7dwXR8UEv7q2qvWBH6r2V9vTITEN0Ktitq%2FVuJjZzDHnW8rDTqP3cF%2BRBI10n7cCfN6idaB%2B%2Fusw7cHwEjaTtghHJT5y051%2BzRAEv3T0j4Q0KMa9lK6Xvr5VhkRQoMsCwst3UPtWzg8VC195F%2FaEfElfDXw%2BUe3ZYoBVxPjg%2FqBnn5aXM9bbtFE%2F%2FOA49TOrBDYOOGr8eGfeMfiWDJ9wbtHklA5LZGhTn5r%2F8Ws6fOPobYFIghXwTXpSoHuqR2c5NFTizCV%2B4SDY7N7zqQnyxMfzeZhXyZpT9tF4oYUwMNSA%2F8gGOqUBevJEugC9YNvICJlyNpH38D5plWWMwSyBw12s1FrT5MOZmFLkJTjJza3L49rRqELwHIv8GNMbY072PKhmc9iep2Az7yqETAicUbEjD3OALf5LBF37NJLGHUiG3kDizQanXR4rhCHILG18YOJ9JYM10Qb%2FfG46TbnL%2FsboiuySdQaNktsGv7q5FKCsevAB1ILxOsSCV3tJnI%2FK3IhQ411lTGSmzwus&X-Amz-Signature=bafde4b46ebeddc24d2afb28ff62561e0971bee9320ea4e7dba2c359887a9fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWWJ2NR%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCnzlzH0FZv59b77PsBFqTNkQnfuWhbaw%2BMP2dxscXuHQIgWnaw%2B9D8wdN5PIA8G0w%2B2ssRmv58f7TLP6PkTmxT5Acq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKhzjGm9y6XBwAVKLCrcA0ZULG42FPMGTFR72WwhoznAYGVJKQq8lMoc5lDWRUkWuKFVfsExtBfrs2wfsFkNLJDOH5woleEbAGLrM0%2Flhvh2YGlD4YUFtaKN3coitGfhdwJ8ptQTJ3VfdxE2ltpAa384kKmfPFleVpyobWTW4MZA71CqmZkNr4Kr91RkFNHZ%2Bns7lHdQ4SEXpzppu0b9YHOIixwmtR8qSjmgWIel%2FSi8Vi3FScYUxUu3siOJNJKCqR2OGCwLHdCWR4vHzWAJrgOD2J%2FTIAYPE8zyfHAbabyaUKqk5dB2lov8TZaSFLl%2F3LJKrGJW%2B1vO4YsRG5qr1ZY6jHwdCmFWLo4u5fuq7dwXR8UEv7q2qvWBH6r2V9vTITEN0Ktitq%2FVuJjZzDHnW8rDTqP3cF%2BRBI10n7cCfN6idaB%2B%2Fusw7cHwEjaTtghHJT5y051%2BzRAEv3T0j4Q0KMa9lK6Xvr5VhkRQoMsCwst3UPtWzg8VC195F%2FaEfElfDXw%2BUe3ZYoBVxPjg%2FqBnn5aXM9bbtFE%2F%2FOA49TOrBDYOOGr8eGfeMfiWDJ9wbtHklA5LZGhTn5r%2F8Ws6fOPobYFIghXwTXpSoHuqR2c5NFTizCV%2B4SDY7N7zqQnyxMfzeZhXyZpT9tF4oYUwMNSA%2F8gGOqUBevJEugC9YNvICJlyNpH38D5plWWMwSyBw12s1FrT5MOZmFLkJTjJza3L49rRqELwHIv8GNMbY072PKhmc9iep2Az7yqETAicUbEjD3OALf5LBF37NJLGHUiG3kDizQanXR4rhCHILG18YOJ9JYM10Qb%2FfG46TbnL%2FsboiuySdQaNktsGv7q5FKCsevAB1ILxOsSCV3tJnI%2FK3IhQ411lTGSmzwus&X-Amz-Signature=6d48a93adfd06637a073f03885f2b93b855b58fcf0f151df9bd5a8b9081ce46f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWWJ2NR%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCnzlzH0FZv59b77PsBFqTNkQnfuWhbaw%2BMP2dxscXuHQIgWnaw%2B9D8wdN5PIA8G0w%2B2ssRmv58f7TLP6PkTmxT5Acq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKhzjGm9y6XBwAVKLCrcA0ZULG42FPMGTFR72WwhoznAYGVJKQq8lMoc5lDWRUkWuKFVfsExtBfrs2wfsFkNLJDOH5woleEbAGLrM0%2Flhvh2YGlD4YUFtaKN3coitGfhdwJ8ptQTJ3VfdxE2ltpAa384kKmfPFleVpyobWTW4MZA71CqmZkNr4Kr91RkFNHZ%2Bns7lHdQ4SEXpzppu0b9YHOIixwmtR8qSjmgWIel%2FSi8Vi3FScYUxUu3siOJNJKCqR2OGCwLHdCWR4vHzWAJrgOD2J%2FTIAYPE8zyfHAbabyaUKqk5dB2lov8TZaSFLl%2F3LJKrGJW%2B1vO4YsRG5qr1ZY6jHwdCmFWLo4u5fuq7dwXR8UEv7q2qvWBH6r2V9vTITEN0Ktitq%2FVuJjZzDHnW8rDTqP3cF%2BRBI10n7cCfN6idaB%2B%2Fusw7cHwEjaTtghHJT5y051%2BzRAEv3T0j4Q0KMa9lK6Xvr5VhkRQoMsCwst3UPtWzg8VC195F%2FaEfElfDXw%2BUe3ZYoBVxPjg%2FqBnn5aXM9bbtFE%2F%2FOA49TOrBDYOOGr8eGfeMfiWDJ9wbtHklA5LZGhTn5r%2F8Ws6fOPobYFIghXwTXpSoHuqR2c5NFTizCV%2B4SDY7N7zqQnyxMfzeZhXyZpT9tF4oYUwMNSA%2F8gGOqUBevJEugC9YNvICJlyNpH38D5plWWMwSyBw12s1FrT5MOZmFLkJTjJza3L49rRqELwHIv8GNMbY072PKhmc9iep2Az7yqETAicUbEjD3OALf5LBF37NJLGHUiG3kDizQanXR4rhCHILG18YOJ9JYM10Qb%2FfG46TbnL%2FsboiuySdQaNktsGv7q5FKCsevAB1ILxOsSCV3tJnI%2FK3IhQ411lTGSmzwus&X-Amz-Signature=ac0fe188a154a5e7fed31cbdd9b75e160633fafe1cc73e6244798bf35ffb79ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
