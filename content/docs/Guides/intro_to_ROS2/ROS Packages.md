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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZO3HVAI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcOoBLeSf3gNpUKeKHuGLo7RNJbZv%2FO%2BGmDOQ55d43NwIgBau1%2B4zWzWPUwzojBMoQPfpevH%2BA2q19hBlHIZ8ZQDYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHH7n9oJ7RY%2BmxEVCyrcA2sXhUtnZLvK9dvRpbraUFZhsHI5oMJZ0qvgV5XP%2FjkOj7e5A%2FcGo9T6jHwFtOs2abQp0OaleyKyb1sJffM8RESwpJwS96up2jnVTq%2BcDWTbysY6Q%2BXXwWQVjAQ0qYxwfruBB2WgOjg%2BpxY6oqLH7bVdehM68tlOsmhBL6K0uy5qhpM54YiwtPSl3pQriOsgzEeKhKZuquVF5ysoSNS1jvZiQD5TskdNBgKts7oA7ZmloGHc4x7Kn43tDTXoZWJFqV8WYTP9TETViqD45UpuWHNcjyuJBk3XcdINoPjS8btWvNd1aj3ZKrwjDDS7E%2FIrlwbrwWW91%2BlKtgriKGFWMBKK2e4Cw7GUhrCNJJ6Gk82ajQmIcv0sxp%2Fzr9bSNmdCfbdTp5ilGuKI7LcOhyQpMeGehii6SUYcZikGkKsypJ6n%2B%2BKiEArVdZhgePVHU43Sob27tVRPwf7EF%2BxqWQlo0ND6QYtMtu5Y3i8oFj5thBuQOGuJ%2FKnFZVJvtIGe%2Fs10SLSpr%2BDNHxSaIAyImfb50mGWWpZhe0tQroIIisZb1L1IsEztQg3y8JX%2B4TA55Mj8pcD7t251gMg4n4uJurx8g%2BEA5g5IZoyUIwoLZK363N2tKvgr5WikBpn4uho7MIPtzr8GOqUBZMLrywGt4jCxj%2BGXWIad2bIw0BzulzWzv79JxsEBJrZ2%2B%2F5biyLh1ke0J6sm9a4POvy03bY66JZSd5DHSl9IHK3i7vmL6GeGALhbjsIhvaNpGd9zUFyIvOYUWVbPZEjLJ%2B8ChuQDVBjBCyYOoGXQg53QevkzL3g5b7M6vtmZqm5vbV3ys2qiEGjBxqTk5EVnEkwHPRDqVQHkBut0z3DN4cnDRxtG&X-Amz-Signature=3a119fddcc3927df9283708fe5a43aa8cfd83b3b46256a89e2112f0a553e00b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZO3HVAI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcOoBLeSf3gNpUKeKHuGLo7RNJbZv%2FO%2BGmDOQ55d43NwIgBau1%2B4zWzWPUwzojBMoQPfpevH%2BA2q19hBlHIZ8ZQDYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHH7n9oJ7RY%2BmxEVCyrcA2sXhUtnZLvK9dvRpbraUFZhsHI5oMJZ0qvgV5XP%2FjkOj7e5A%2FcGo9T6jHwFtOs2abQp0OaleyKyb1sJffM8RESwpJwS96up2jnVTq%2BcDWTbysY6Q%2BXXwWQVjAQ0qYxwfruBB2WgOjg%2BpxY6oqLH7bVdehM68tlOsmhBL6K0uy5qhpM54YiwtPSl3pQriOsgzEeKhKZuquVF5ysoSNS1jvZiQD5TskdNBgKts7oA7ZmloGHc4x7Kn43tDTXoZWJFqV8WYTP9TETViqD45UpuWHNcjyuJBk3XcdINoPjS8btWvNd1aj3ZKrwjDDS7E%2FIrlwbrwWW91%2BlKtgriKGFWMBKK2e4Cw7GUhrCNJJ6Gk82ajQmIcv0sxp%2Fzr9bSNmdCfbdTp5ilGuKI7LcOhyQpMeGehii6SUYcZikGkKsypJ6n%2B%2BKiEArVdZhgePVHU43Sob27tVRPwf7EF%2BxqWQlo0ND6QYtMtu5Y3i8oFj5thBuQOGuJ%2FKnFZVJvtIGe%2Fs10SLSpr%2BDNHxSaIAyImfb50mGWWpZhe0tQroIIisZb1L1IsEztQg3y8JX%2B4TA55Mj8pcD7t251gMg4n4uJurx8g%2BEA5g5IZoyUIwoLZK363N2tKvgr5WikBpn4uho7MIPtzr8GOqUBZMLrywGt4jCxj%2BGXWIad2bIw0BzulzWzv79JxsEBJrZ2%2B%2F5biyLh1ke0J6sm9a4POvy03bY66JZSd5DHSl9IHK3i7vmL6GeGALhbjsIhvaNpGd9zUFyIvOYUWVbPZEjLJ%2B8ChuQDVBjBCyYOoGXQg53QevkzL3g5b7M6vtmZqm5vbV3ys2qiEGjBxqTk5EVnEkwHPRDqVQHkBut0z3DN4cnDRxtG&X-Amz-Signature=3b9538c25ead0927dc4d15bf251a949c25ae00613ee11f36d39c18539c6ce58c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZO3HVAI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcOoBLeSf3gNpUKeKHuGLo7RNJbZv%2FO%2BGmDOQ55d43NwIgBau1%2B4zWzWPUwzojBMoQPfpevH%2BA2q19hBlHIZ8ZQDYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHH7n9oJ7RY%2BmxEVCyrcA2sXhUtnZLvK9dvRpbraUFZhsHI5oMJZ0qvgV5XP%2FjkOj7e5A%2FcGo9T6jHwFtOs2abQp0OaleyKyb1sJffM8RESwpJwS96up2jnVTq%2BcDWTbysY6Q%2BXXwWQVjAQ0qYxwfruBB2WgOjg%2BpxY6oqLH7bVdehM68tlOsmhBL6K0uy5qhpM54YiwtPSl3pQriOsgzEeKhKZuquVF5ysoSNS1jvZiQD5TskdNBgKts7oA7ZmloGHc4x7Kn43tDTXoZWJFqV8WYTP9TETViqD45UpuWHNcjyuJBk3XcdINoPjS8btWvNd1aj3ZKrwjDDS7E%2FIrlwbrwWW91%2BlKtgriKGFWMBKK2e4Cw7GUhrCNJJ6Gk82ajQmIcv0sxp%2Fzr9bSNmdCfbdTp5ilGuKI7LcOhyQpMeGehii6SUYcZikGkKsypJ6n%2B%2BKiEArVdZhgePVHU43Sob27tVRPwf7EF%2BxqWQlo0ND6QYtMtu5Y3i8oFj5thBuQOGuJ%2FKnFZVJvtIGe%2Fs10SLSpr%2BDNHxSaIAyImfb50mGWWpZhe0tQroIIisZb1L1IsEztQg3y8JX%2B4TA55Mj8pcD7t251gMg4n4uJurx8g%2BEA5g5IZoyUIwoLZK363N2tKvgr5WikBpn4uho7MIPtzr8GOqUBZMLrywGt4jCxj%2BGXWIad2bIw0BzulzWzv79JxsEBJrZ2%2B%2F5biyLh1ke0J6sm9a4POvy03bY66JZSd5DHSl9IHK3i7vmL6GeGALhbjsIhvaNpGd9zUFyIvOYUWVbPZEjLJ%2B8ChuQDVBjBCyYOoGXQg53QevkzL3g5b7M6vtmZqm5vbV3ys2qiEGjBxqTk5EVnEkwHPRDqVQHkBut0z3DN4cnDRxtG&X-Amz-Signature=674903946ff8cbe1d71aac092c321d27732bc8fd72a67bf3162c45bdaa21b01f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZO3HVAI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcOoBLeSf3gNpUKeKHuGLo7RNJbZv%2FO%2BGmDOQ55d43NwIgBau1%2B4zWzWPUwzojBMoQPfpevH%2BA2q19hBlHIZ8ZQDYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHH7n9oJ7RY%2BmxEVCyrcA2sXhUtnZLvK9dvRpbraUFZhsHI5oMJZ0qvgV5XP%2FjkOj7e5A%2FcGo9T6jHwFtOs2abQp0OaleyKyb1sJffM8RESwpJwS96up2jnVTq%2BcDWTbysY6Q%2BXXwWQVjAQ0qYxwfruBB2WgOjg%2BpxY6oqLH7bVdehM68tlOsmhBL6K0uy5qhpM54YiwtPSl3pQriOsgzEeKhKZuquVF5ysoSNS1jvZiQD5TskdNBgKts7oA7ZmloGHc4x7Kn43tDTXoZWJFqV8WYTP9TETViqD45UpuWHNcjyuJBk3XcdINoPjS8btWvNd1aj3ZKrwjDDS7E%2FIrlwbrwWW91%2BlKtgriKGFWMBKK2e4Cw7GUhrCNJJ6Gk82ajQmIcv0sxp%2Fzr9bSNmdCfbdTp5ilGuKI7LcOhyQpMeGehii6SUYcZikGkKsypJ6n%2B%2BKiEArVdZhgePVHU43Sob27tVRPwf7EF%2BxqWQlo0ND6QYtMtu5Y3i8oFj5thBuQOGuJ%2FKnFZVJvtIGe%2Fs10SLSpr%2BDNHxSaIAyImfb50mGWWpZhe0tQroIIisZb1L1IsEztQg3y8JX%2B4TA55Mj8pcD7t251gMg4n4uJurx8g%2BEA5g5IZoyUIwoLZK363N2tKvgr5WikBpn4uho7MIPtzr8GOqUBZMLrywGt4jCxj%2BGXWIad2bIw0BzulzWzv79JxsEBJrZ2%2B%2F5biyLh1ke0J6sm9a4POvy03bY66JZSd5DHSl9IHK3i7vmL6GeGALhbjsIhvaNpGd9zUFyIvOYUWVbPZEjLJ%2B8ChuQDVBjBCyYOoGXQg53QevkzL3g5b7M6vtmZqm5vbV3ys2qiEGjBxqTk5EVnEkwHPRDqVQHkBut0z3DN4cnDRxtG&X-Amz-Signature=91cc29901137c80d0781ab841a86ad9810dd31ffaf3ed5babe935c2c1214db95&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZO3HVAI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcOoBLeSf3gNpUKeKHuGLo7RNJbZv%2FO%2BGmDOQ55d43NwIgBau1%2B4zWzWPUwzojBMoQPfpevH%2BA2q19hBlHIZ8ZQDYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHH7n9oJ7RY%2BmxEVCyrcA2sXhUtnZLvK9dvRpbraUFZhsHI5oMJZ0qvgV5XP%2FjkOj7e5A%2FcGo9T6jHwFtOs2abQp0OaleyKyb1sJffM8RESwpJwS96up2jnVTq%2BcDWTbysY6Q%2BXXwWQVjAQ0qYxwfruBB2WgOjg%2BpxY6oqLH7bVdehM68tlOsmhBL6K0uy5qhpM54YiwtPSl3pQriOsgzEeKhKZuquVF5ysoSNS1jvZiQD5TskdNBgKts7oA7ZmloGHc4x7Kn43tDTXoZWJFqV8WYTP9TETViqD45UpuWHNcjyuJBk3XcdINoPjS8btWvNd1aj3ZKrwjDDS7E%2FIrlwbrwWW91%2BlKtgriKGFWMBKK2e4Cw7GUhrCNJJ6Gk82ajQmIcv0sxp%2Fzr9bSNmdCfbdTp5ilGuKI7LcOhyQpMeGehii6SUYcZikGkKsypJ6n%2B%2BKiEArVdZhgePVHU43Sob27tVRPwf7EF%2BxqWQlo0ND6QYtMtu5Y3i8oFj5thBuQOGuJ%2FKnFZVJvtIGe%2Fs10SLSpr%2BDNHxSaIAyImfb50mGWWpZhe0tQroIIisZb1L1IsEztQg3y8JX%2B4TA55Mj8pcD7t251gMg4n4uJurx8g%2BEA5g5IZoyUIwoLZK363N2tKvgr5WikBpn4uho7MIPtzr8GOqUBZMLrywGt4jCxj%2BGXWIad2bIw0BzulzWzv79JxsEBJrZ2%2B%2F5biyLh1ke0J6sm9a4POvy03bY66JZSd5DHSl9IHK3i7vmL6GeGALhbjsIhvaNpGd9zUFyIvOYUWVbPZEjLJ%2B8ChuQDVBjBCyYOoGXQg53QevkzL3g5b7M6vtmZqm5vbV3ys2qiEGjBxqTk5EVnEkwHPRDqVQHkBut0z3DN4cnDRxtG&X-Amz-Signature=4f131f1fe8f585a73e00114320c8ee56d2549ff0998c3252e2317d793710722d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZO3HVAI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcOoBLeSf3gNpUKeKHuGLo7RNJbZv%2FO%2BGmDOQ55d43NwIgBau1%2B4zWzWPUwzojBMoQPfpevH%2BA2q19hBlHIZ8ZQDYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHH7n9oJ7RY%2BmxEVCyrcA2sXhUtnZLvK9dvRpbraUFZhsHI5oMJZ0qvgV5XP%2FjkOj7e5A%2FcGo9T6jHwFtOs2abQp0OaleyKyb1sJffM8RESwpJwS96up2jnVTq%2BcDWTbysY6Q%2BXXwWQVjAQ0qYxwfruBB2WgOjg%2BpxY6oqLH7bVdehM68tlOsmhBL6K0uy5qhpM54YiwtPSl3pQriOsgzEeKhKZuquVF5ysoSNS1jvZiQD5TskdNBgKts7oA7ZmloGHc4x7Kn43tDTXoZWJFqV8WYTP9TETViqD45UpuWHNcjyuJBk3XcdINoPjS8btWvNd1aj3ZKrwjDDS7E%2FIrlwbrwWW91%2BlKtgriKGFWMBKK2e4Cw7GUhrCNJJ6Gk82ajQmIcv0sxp%2Fzr9bSNmdCfbdTp5ilGuKI7LcOhyQpMeGehii6SUYcZikGkKsypJ6n%2B%2BKiEArVdZhgePVHU43Sob27tVRPwf7EF%2BxqWQlo0ND6QYtMtu5Y3i8oFj5thBuQOGuJ%2FKnFZVJvtIGe%2Fs10SLSpr%2BDNHxSaIAyImfb50mGWWpZhe0tQroIIisZb1L1IsEztQg3y8JX%2B4TA55Mj8pcD7t251gMg4n4uJurx8g%2BEA5g5IZoyUIwoLZK363N2tKvgr5WikBpn4uho7MIPtzr8GOqUBZMLrywGt4jCxj%2BGXWIad2bIw0BzulzWzv79JxsEBJrZ2%2B%2F5biyLh1ke0J6sm9a4POvy03bY66JZSd5DHSl9IHK3i7vmL6GeGALhbjsIhvaNpGd9zUFyIvOYUWVbPZEjLJ%2B8ChuQDVBjBCyYOoGXQg53QevkzL3g5b7M6vtmZqm5vbV3ys2qiEGjBxqTk5EVnEkwHPRDqVQHkBut0z3DN4cnDRxtG&X-Amz-Signature=b8b440c30e03d0b29934194390151da6d1f92722b2be87ce5f4f0968bcb19868&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZO3HVAI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcOoBLeSf3gNpUKeKHuGLo7RNJbZv%2FO%2BGmDOQ55d43NwIgBau1%2B4zWzWPUwzojBMoQPfpevH%2BA2q19hBlHIZ8ZQDYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHH7n9oJ7RY%2BmxEVCyrcA2sXhUtnZLvK9dvRpbraUFZhsHI5oMJZ0qvgV5XP%2FjkOj7e5A%2FcGo9T6jHwFtOs2abQp0OaleyKyb1sJffM8RESwpJwS96up2jnVTq%2BcDWTbysY6Q%2BXXwWQVjAQ0qYxwfruBB2WgOjg%2BpxY6oqLH7bVdehM68tlOsmhBL6K0uy5qhpM54YiwtPSl3pQriOsgzEeKhKZuquVF5ysoSNS1jvZiQD5TskdNBgKts7oA7ZmloGHc4x7Kn43tDTXoZWJFqV8WYTP9TETViqD45UpuWHNcjyuJBk3XcdINoPjS8btWvNd1aj3ZKrwjDDS7E%2FIrlwbrwWW91%2BlKtgriKGFWMBKK2e4Cw7GUhrCNJJ6Gk82ajQmIcv0sxp%2Fzr9bSNmdCfbdTp5ilGuKI7LcOhyQpMeGehii6SUYcZikGkKsypJ6n%2B%2BKiEArVdZhgePVHU43Sob27tVRPwf7EF%2BxqWQlo0ND6QYtMtu5Y3i8oFj5thBuQOGuJ%2FKnFZVJvtIGe%2Fs10SLSpr%2BDNHxSaIAyImfb50mGWWpZhe0tQroIIisZb1L1IsEztQg3y8JX%2B4TA55Mj8pcD7t251gMg4n4uJurx8g%2BEA5g5IZoyUIwoLZK363N2tKvgr5WikBpn4uho7MIPtzr8GOqUBZMLrywGt4jCxj%2BGXWIad2bIw0BzulzWzv79JxsEBJrZ2%2B%2F5biyLh1ke0J6sm9a4POvy03bY66JZSd5DHSl9IHK3i7vmL6GeGALhbjsIhvaNpGd9zUFyIvOYUWVbPZEjLJ%2B8ChuQDVBjBCyYOoGXQg53QevkzL3g5b7M6vtmZqm5vbV3ys2qiEGjBxqTk5EVnEkwHPRDqVQHkBut0z3DN4cnDRxtG&X-Amz-Signature=03069d0e9f9c668fd88964f32851a258cec76c0a800bb22578d28be8f51b3ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
