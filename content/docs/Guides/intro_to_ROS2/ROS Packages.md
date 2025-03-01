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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCHGNKW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDCHc%2Fw67jxWdzvd0Iuz01M1AMw2In0zZ7dyTF1oRBz%2FAiBY0kF5rNz%2Fgv6ay47rk9Iy%2FZmBCqaP1giYEjJIpZjQ7SqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIV5N4MVfV7CPMXpxKtwDd%2F7a41%2Fv8iIGCIXXpB%2FmTkXgT4%2FFwvfKy7x8CYHDnEkwSqK5lyikfi%2Bvydg4yW%2FPQCx%2Fn7dZtdhGPFMitodsNJ5u6OVE%2FeaK1ZsgJH6um5nXzZCW34wESSp0y4sIE0rh8o%2FLsPz0%2F8CkzvdZcwGu2ET50hlhstmgqtpITbywOW8EHm4WpWR5O9X4ls6e9J7RoksEzZa5KlXsc5jkeVGtyvRgwBOT%2FweB7qY5gBV9flsrYGTuDeTp9QawA9Cr00vcQPs5aAFsM%2FiN5l8z03I4YZc1jjGUKctN7RxQxyl2HhuHggwChU90rKYk%2Bhf8wjTkNxAomdu2YGsGhItevpibHmNev7XFw9ALO9fWKnoBA5xbvY2O%2FCptjc8ZVx3kMAeVM0tCw53J6BrTUKjNDuFa%2Fucp%2BS3UdYS4evwKrGKkBOV0ctSZCg90KPp05p7thA5ydYNUO%2B3OLROmuB0XCjsKL86gs34tkLcm0jokb2FpYIGD2O2MIBZqqDXKucebfXAVjTCFaE9Mjz%2FOVg3uwvQ5pCuiV6sL2fg50bv33V3lh%2FX%2B5qhtTiySMj29yupW%2BYw%2BVUSGuEmNbX2%2B9exxFW9XdZPc6WrY5SUwGWwZV4Aqm5HTf8oihn1cw1omnXww9ZCKvgY6pgF4jfkGIWidDpwVpdVg%2FW2QMj%2BqOChDAxSXQorKTe8BQI6m982AMWB6Irjo2eTCfw%2B6DRPuhXeuv3JzxTqMMrvdoI4oIkfXXtBHIm34%2FmMf6vw6DAP65tous4qF%2FVuSr1ueEK5mkJZwhDzND%2Bzf%2BsVHeTg6AgoQy7nsWXzSf0jx5%2FHnq%2FUMpbGUNEKO6imHXmo3iT0fF4X7Nw7kpBeR1cxvC4Ym4VTq&X-Amz-Signature=530898ba2677e3011243237f6a1e10934b748c6f54f7535886e6d599a7376d76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCHGNKW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDCHc%2Fw67jxWdzvd0Iuz01M1AMw2In0zZ7dyTF1oRBz%2FAiBY0kF5rNz%2Fgv6ay47rk9Iy%2FZmBCqaP1giYEjJIpZjQ7SqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIV5N4MVfV7CPMXpxKtwDd%2F7a41%2Fv8iIGCIXXpB%2FmTkXgT4%2FFwvfKy7x8CYHDnEkwSqK5lyikfi%2Bvydg4yW%2FPQCx%2Fn7dZtdhGPFMitodsNJ5u6OVE%2FeaK1ZsgJH6um5nXzZCW34wESSp0y4sIE0rh8o%2FLsPz0%2F8CkzvdZcwGu2ET50hlhstmgqtpITbywOW8EHm4WpWR5O9X4ls6e9J7RoksEzZa5KlXsc5jkeVGtyvRgwBOT%2FweB7qY5gBV9flsrYGTuDeTp9QawA9Cr00vcQPs5aAFsM%2FiN5l8z03I4YZc1jjGUKctN7RxQxyl2HhuHggwChU90rKYk%2Bhf8wjTkNxAomdu2YGsGhItevpibHmNev7XFw9ALO9fWKnoBA5xbvY2O%2FCptjc8ZVx3kMAeVM0tCw53J6BrTUKjNDuFa%2Fucp%2BS3UdYS4evwKrGKkBOV0ctSZCg90KPp05p7thA5ydYNUO%2B3OLROmuB0XCjsKL86gs34tkLcm0jokb2FpYIGD2O2MIBZqqDXKucebfXAVjTCFaE9Mjz%2FOVg3uwvQ5pCuiV6sL2fg50bv33V3lh%2FX%2B5qhtTiySMj29yupW%2BYw%2BVUSGuEmNbX2%2B9exxFW9XdZPc6WrY5SUwGWwZV4Aqm5HTf8oihn1cw1omnXww9ZCKvgY6pgF4jfkGIWidDpwVpdVg%2FW2QMj%2BqOChDAxSXQorKTe8BQI6m982AMWB6Irjo2eTCfw%2B6DRPuhXeuv3JzxTqMMrvdoI4oIkfXXtBHIm34%2FmMf6vw6DAP65tous4qF%2FVuSr1ueEK5mkJZwhDzND%2Bzf%2BsVHeTg6AgoQy7nsWXzSf0jx5%2FHnq%2FUMpbGUNEKO6imHXmo3iT0fF4X7Nw7kpBeR1cxvC4Ym4VTq&X-Amz-Signature=804a0d016b4219827967614628773cf6ff94fe931df0d01eb27f9c0c5473fb29&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCHGNKW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDCHc%2Fw67jxWdzvd0Iuz01M1AMw2In0zZ7dyTF1oRBz%2FAiBY0kF5rNz%2Fgv6ay47rk9Iy%2FZmBCqaP1giYEjJIpZjQ7SqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIV5N4MVfV7CPMXpxKtwDd%2F7a41%2Fv8iIGCIXXpB%2FmTkXgT4%2FFwvfKy7x8CYHDnEkwSqK5lyikfi%2Bvydg4yW%2FPQCx%2Fn7dZtdhGPFMitodsNJ5u6OVE%2FeaK1ZsgJH6um5nXzZCW34wESSp0y4sIE0rh8o%2FLsPz0%2F8CkzvdZcwGu2ET50hlhstmgqtpITbywOW8EHm4WpWR5O9X4ls6e9J7RoksEzZa5KlXsc5jkeVGtyvRgwBOT%2FweB7qY5gBV9flsrYGTuDeTp9QawA9Cr00vcQPs5aAFsM%2FiN5l8z03I4YZc1jjGUKctN7RxQxyl2HhuHggwChU90rKYk%2Bhf8wjTkNxAomdu2YGsGhItevpibHmNev7XFw9ALO9fWKnoBA5xbvY2O%2FCptjc8ZVx3kMAeVM0tCw53J6BrTUKjNDuFa%2Fucp%2BS3UdYS4evwKrGKkBOV0ctSZCg90KPp05p7thA5ydYNUO%2B3OLROmuB0XCjsKL86gs34tkLcm0jokb2FpYIGD2O2MIBZqqDXKucebfXAVjTCFaE9Mjz%2FOVg3uwvQ5pCuiV6sL2fg50bv33V3lh%2FX%2B5qhtTiySMj29yupW%2BYw%2BVUSGuEmNbX2%2B9exxFW9XdZPc6WrY5SUwGWwZV4Aqm5HTf8oihn1cw1omnXww9ZCKvgY6pgF4jfkGIWidDpwVpdVg%2FW2QMj%2BqOChDAxSXQorKTe8BQI6m982AMWB6Irjo2eTCfw%2B6DRPuhXeuv3JzxTqMMrvdoI4oIkfXXtBHIm34%2FmMf6vw6DAP65tous4qF%2FVuSr1ueEK5mkJZwhDzND%2Bzf%2BsVHeTg6AgoQy7nsWXzSf0jx5%2FHnq%2FUMpbGUNEKO6imHXmo3iT0fF4X7Nw7kpBeR1cxvC4Ym4VTq&X-Amz-Signature=b1313c58182fdf0818ae5c1c9e1ec49b2680f8a8552050889a9b97c9040e775e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCHGNKW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDCHc%2Fw67jxWdzvd0Iuz01M1AMw2In0zZ7dyTF1oRBz%2FAiBY0kF5rNz%2Fgv6ay47rk9Iy%2FZmBCqaP1giYEjJIpZjQ7SqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIV5N4MVfV7CPMXpxKtwDd%2F7a41%2Fv8iIGCIXXpB%2FmTkXgT4%2FFwvfKy7x8CYHDnEkwSqK5lyikfi%2Bvydg4yW%2FPQCx%2Fn7dZtdhGPFMitodsNJ5u6OVE%2FeaK1ZsgJH6um5nXzZCW34wESSp0y4sIE0rh8o%2FLsPz0%2F8CkzvdZcwGu2ET50hlhstmgqtpITbywOW8EHm4WpWR5O9X4ls6e9J7RoksEzZa5KlXsc5jkeVGtyvRgwBOT%2FweB7qY5gBV9flsrYGTuDeTp9QawA9Cr00vcQPs5aAFsM%2FiN5l8z03I4YZc1jjGUKctN7RxQxyl2HhuHggwChU90rKYk%2Bhf8wjTkNxAomdu2YGsGhItevpibHmNev7XFw9ALO9fWKnoBA5xbvY2O%2FCptjc8ZVx3kMAeVM0tCw53J6BrTUKjNDuFa%2Fucp%2BS3UdYS4evwKrGKkBOV0ctSZCg90KPp05p7thA5ydYNUO%2B3OLROmuB0XCjsKL86gs34tkLcm0jokb2FpYIGD2O2MIBZqqDXKucebfXAVjTCFaE9Mjz%2FOVg3uwvQ5pCuiV6sL2fg50bv33V3lh%2FX%2B5qhtTiySMj29yupW%2BYw%2BVUSGuEmNbX2%2B9exxFW9XdZPc6WrY5SUwGWwZV4Aqm5HTf8oihn1cw1omnXww9ZCKvgY6pgF4jfkGIWidDpwVpdVg%2FW2QMj%2BqOChDAxSXQorKTe8BQI6m982AMWB6Irjo2eTCfw%2B6DRPuhXeuv3JzxTqMMrvdoI4oIkfXXtBHIm34%2FmMf6vw6DAP65tous4qF%2FVuSr1ueEK5mkJZwhDzND%2Bzf%2BsVHeTg6AgoQy7nsWXzSf0jx5%2FHnq%2FUMpbGUNEKO6imHXmo3iT0fF4X7Nw7kpBeR1cxvC4Ym4VTq&X-Amz-Signature=eb3f457dd2c20092545f8c53e6a34fb123904214f089d2bf7b93e8eac3ddc421&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCHGNKW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDCHc%2Fw67jxWdzvd0Iuz01M1AMw2In0zZ7dyTF1oRBz%2FAiBY0kF5rNz%2Fgv6ay47rk9Iy%2FZmBCqaP1giYEjJIpZjQ7SqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIV5N4MVfV7CPMXpxKtwDd%2F7a41%2Fv8iIGCIXXpB%2FmTkXgT4%2FFwvfKy7x8CYHDnEkwSqK5lyikfi%2Bvydg4yW%2FPQCx%2Fn7dZtdhGPFMitodsNJ5u6OVE%2FeaK1ZsgJH6um5nXzZCW34wESSp0y4sIE0rh8o%2FLsPz0%2F8CkzvdZcwGu2ET50hlhstmgqtpITbywOW8EHm4WpWR5O9X4ls6e9J7RoksEzZa5KlXsc5jkeVGtyvRgwBOT%2FweB7qY5gBV9flsrYGTuDeTp9QawA9Cr00vcQPs5aAFsM%2FiN5l8z03I4YZc1jjGUKctN7RxQxyl2HhuHggwChU90rKYk%2Bhf8wjTkNxAomdu2YGsGhItevpibHmNev7XFw9ALO9fWKnoBA5xbvY2O%2FCptjc8ZVx3kMAeVM0tCw53J6BrTUKjNDuFa%2Fucp%2BS3UdYS4evwKrGKkBOV0ctSZCg90KPp05p7thA5ydYNUO%2B3OLROmuB0XCjsKL86gs34tkLcm0jokb2FpYIGD2O2MIBZqqDXKucebfXAVjTCFaE9Mjz%2FOVg3uwvQ5pCuiV6sL2fg50bv33V3lh%2FX%2B5qhtTiySMj29yupW%2BYw%2BVUSGuEmNbX2%2B9exxFW9XdZPc6WrY5SUwGWwZV4Aqm5HTf8oihn1cw1omnXww9ZCKvgY6pgF4jfkGIWidDpwVpdVg%2FW2QMj%2BqOChDAxSXQorKTe8BQI6m982AMWB6Irjo2eTCfw%2B6DRPuhXeuv3JzxTqMMrvdoI4oIkfXXtBHIm34%2FmMf6vw6DAP65tous4qF%2FVuSr1ueEK5mkJZwhDzND%2Bzf%2BsVHeTg6AgoQy7nsWXzSf0jx5%2FHnq%2FUMpbGUNEKO6imHXmo3iT0fF4X7Nw7kpBeR1cxvC4Ym4VTq&X-Amz-Signature=f8520f4b965f86c1fefa5f5ad424c853d4685df9973e40c51a9a61ef5d0fffbe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCHGNKW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDCHc%2Fw67jxWdzvd0Iuz01M1AMw2In0zZ7dyTF1oRBz%2FAiBY0kF5rNz%2Fgv6ay47rk9Iy%2FZmBCqaP1giYEjJIpZjQ7SqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIV5N4MVfV7CPMXpxKtwDd%2F7a41%2Fv8iIGCIXXpB%2FmTkXgT4%2FFwvfKy7x8CYHDnEkwSqK5lyikfi%2Bvydg4yW%2FPQCx%2Fn7dZtdhGPFMitodsNJ5u6OVE%2FeaK1ZsgJH6um5nXzZCW34wESSp0y4sIE0rh8o%2FLsPz0%2F8CkzvdZcwGu2ET50hlhstmgqtpITbywOW8EHm4WpWR5O9X4ls6e9J7RoksEzZa5KlXsc5jkeVGtyvRgwBOT%2FweB7qY5gBV9flsrYGTuDeTp9QawA9Cr00vcQPs5aAFsM%2FiN5l8z03I4YZc1jjGUKctN7RxQxyl2HhuHggwChU90rKYk%2Bhf8wjTkNxAomdu2YGsGhItevpibHmNev7XFw9ALO9fWKnoBA5xbvY2O%2FCptjc8ZVx3kMAeVM0tCw53J6BrTUKjNDuFa%2Fucp%2BS3UdYS4evwKrGKkBOV0ctSZCg90KPp05p7thA5ydYNUO%2B3OLROmuB0XCjsKL86gs34tkLcm0jokb2FpYIGD2O2MIBZqqDXKucebfXAVjTCFaE9Mjz%2FOVg3uwvQ5pCuiV6sL2fg50bv33V3lh%2FX%2B5qhtTiySMj29yupW%2BYw%2BVUSGuEmNbX2%2B9exxFW9XdZPc6WrY5SUwGWwZV4Aqm5HTf8oihn1cw1omnXww9ZCKvgY6pgF4jfkGIWidDpwVpdVg%2FW2QMj%2BqOChDAxSXQorKTe8BQI6m982AMWB6Irjo2eTCfw%2B6DRPuhXeuv3JzxTqMMrvdoI4oIkfXXtBHIm34%2FmMf6vw6DAP65tous4qF%2FVuSr1ueEK5mkJZwhDzND%2Bzf%2BsVHeTg6AgoQy7nsWXzSf0jx5%2FHnq%2FUMpbGUNEKO6imHXmo3iT0fF4X7Nw7kpBeR1cxvC4Ym4VTq&X-Amz-Signature=ddfd64678b182f21e2e93ef5cd7343e505be0e63b07e540b615a54ba5fd9a946&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCHGNKW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDCHc%2Fw67jxWdzvd0Iuz01M1AMw2In0zZ7dyTF1oRBz%2FAiBY0kF5rNz%2Fgv6ay47rk9Iy%2FZmBCqaP1giYEjJIpZjQ7SqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIV5N4MVfV7CPMXpxKtwDd%2F7a41%2Fv8iIGCIXXpB%2FmTkXgT4%2FFwvfKy7x8CYHDnEkwSqK5lyikfi%2Bvydg4yW%2FPQCx%2Fn7dZtdhGPFMitodsNJ5u6OVE%2FeaK1ZsgJH6um5nXzZCW34wESSp0y4sIE0rh8o%2FLsPz0%2F8CkzvdZcwGu2ET50hlhstmgqtpITbywOW8EHm4WpWR5O9X4ls6e9J7RoksEzZa5KlXsc5jkeVGtyvRgwBOT%2FweB7qY5gBV9flsrYGTuDeTp9QawA9Cr00vcQPs5aAFsM%2FiN5l8z03I4YZc1jjGUKctN7RxQxyl2HhuHggwChU90rKYk%2Bhf8wjTkNxAomdu2YGsGhItevpibHmNev7XFw9ALO9fWKnoBA5xbvY2O%2FCptjc8ZVx3kMAeVM0tCw53J6BrTUKjNDuFa%2Fucp%2BS3UdYS4evwKrGKkBOV0ctSZCg90KPp05p7thA5ydYNUO%2B3OLROmuB0XCjsKL86gs34tkLcm0jokb2FpYIGD2O2MIBZqqDXKucebfXAVjTCFaE9Mjz%2FOVg3uwvQ5pCuiV6sL2fg50bv33V3lh%2FX%2B5qhtTiySMj29yupW%2BYw%2BVUSGuEmNbX2%2B9exxFW9XdZPc6WrY5SUwGWwZV4Aqm5HTf8oihn1cw1omnXww9ZCKvgY6pgF4jfkGIWidDpwVpdVg%2FW2QMj%2BqOChDAxSXQorKTe8BQI6m982AMWB6Irjo2eTCfw%2B6DRPuhXeuv3JzxTqMMrvdoI4oIkfXXtBHIm34%2FmMf6vw6DAP65tous4qF%2FVuSr1ueEK5mkJZwhDzND%2Bzf%2BsVHeTg6AgoQy7nsWXzSf0jx5%2FHnq%2FUMpbGUNEKO6imHXmo3iT0fF4X7Nw7kpBeR1cxvC4Ym4VTq&X-Amz-Signature=248fa9c265d213c172fcdd68ea377852fde33f57b730039590ab5d478194308a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
