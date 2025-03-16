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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644K5G6ZG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlsn2ErrRiVHPqmrTmjH7Pc9l4mc1piw0ZJ8WtCUrEwIhAI5%2F%2F9bwFPa38sg4pRQIGsQRk1DwKF19Ss455Xk%2FZpQtKv8DCC8QABoMNjM3NDIzMTgzODA1Igxd3%2B7UY65WOpEA6p0q3AMl75NaCLrnYXgsBuujSqDDRsrC%2F3%2FvP7%2F5VG%2BPBBad4VX0GULsOh4ZFRkspzJNOvx%2BG62NwU3rXxaKHKlXP98OApDUwPAkPifrANLX3YL8u0OAv%2BhOE6JnoDXZywwV8a%2Fk64ReLpps%2BfTJVIz7KsIf8Y70ISoBRQ6WPVJjirIzg0HxX3havb4cKeontJtNHKjaX4DWHvmNGoT8cxkqhl6xm7pMOBdo70hcHN25btSl%2BwLLEA0lXERKzRSzS3fD%2FwZVoUM7u9evT8DoQLPxCIp42sdWI9dT6fVOSt6WW82iDydbMVwg8zQq8y37O0lC0C9IzTGN54kZQ%2FriKD7AASLXF0QByFEV%2FV5hWRjbyT2A%2Fzn4KfSZ1mcjzByfkwL3bCkjZDhSN2lCdJP4PoJLnDbqn3ism%2FeKqMSGTuMhPRVEMR9dZxiDYtLCB6wE%2FFi%2F1MhS0lZBLA3u2MXHC57BiPxrHv9SLQcIo2ERjfqYzl9HOzGAuu2N2JcoLKwSo9LYtSGy1xy8uePs3hDRTeH2fbIbxZrq4tuL5TSfL5z2c3FQcGcL8OgUjvpmmwoJ3is67j6WPV7V6pMUNq3udXoZxtpYhHwsIHNiXxkiw72I8i%2FKeexHWphBIWvYcBqK%2FjC6vdu%2BBjqkARPEgJ7%2FtUyRlo4tLlOrkvVbVB0a7EjW6hzfjQdQY9p4K%2FbTFsYnGr1n4NB3bLm6jqt%2FBgHxn3ejb%2FMzXLC8yTRu40UhEFg2xwDwDVBQwIggZD1My%2Fdxnbtz%2B5xDMJo0hmLm%2F78k%2BYbB59txsXfXNSjmxkOrX%2FzpYC19%2FJBDK7V0HnmoNQSE1LxgA%2BwO8rjCbUpgCV7AOxuUYGdiploj4Ok4Cm9v&X-Amz-Signature=94f129f258ed6c81a99ecbdfcd080998687941062a07cb28c1d9694593d96f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644K5G6ZG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlsn2ErrRiVHPqmrTmjH7Pc9l4mc1piw0ZJ8WtCUrEwIhAI5%2F%2F9bwFPa38sg4pRQIGsQRk1DwKF19Ss455Xk%2FZpQtKv8DCC8QABoMNjM3NDIzMTgzODA1Igxd3%2B7UY65WOpEA6p0q3AMl75NaCLrnYXgsBuujSqDDRsrC%2F3%2FvP7%2F5VG%2BPBBad4VX0GULsOh4ZFRkspzJNOvx%2BG62NwU3rXxaKHKlXP98OApDUwPAkPifrANLX3YL8u0OAv%2BhOE6JnoDXZywwV8a%2Fk64ReLpps%2BfTJVIz7KsIf8Y70ISoBRQ6WPVJjirIzg0HxX3havb4cKeontJtNHKjaX4DWHvmNGoT8cxkqhl6xm7pMOBdo70hcHN25btSl%2BwLLEA0lXERKzRSzS3fD%2FwZVoUM7u9evT8DoQLPxCIp42sdWI9dT6fVOSt6WW82iDydbMVwg8zQq8y37O0lC0C9IzTGN54kZQ%2FriKD7AASLXF0QByFEV%2FV5hWRjbyT2A%2Fzn4KfSZ1mcjzByfkwL3bCkjZDhSN2lCdJP4PoJLnDbqn3ism%2FeKqMSGTuMhPRVEMR9dZxiDYtLCB6wE%2FFi%2F1MhS0lZBLA3u2MXHC57BiPxrHv9SLQcIo2ERjfqYzl9HOzGAuu2N2JcoLKwSo9LYtSGy1xy8uePs3hDRTeH2fbIbxZrq4tuL5TSfL5z2c3FQcGcL8OgUjvpmmwoJ3is67j6WPV7V6pMUNq3udXoZxtpYhHwsIHNiXxkiw72I8i%2FKeexHWphBIWvYcBqK%2FjC6vdu%2BBjqkARPEgJ7%2FtUyRlo4tLlOrkvVbVB0a7EjW6hzfjQdQY9p4K%2FbTFsYnGr1n4NB3bLm6jqt%2FBgHxn3ejb%2FMzXLC8yTRu40UhEFg2xwDwDVBQwIggZD1My%2Fdxnbtz%2B5xDMJo0hmLm%2F78k%2BYbB59txsXfXNSjmxkOrX%2FzpYC19%2FJBDK7V0HnmoNQSE1LxgA%2BwO8rjCbUpgCV7AOxuUYGdiploj4Ok4Cm9v&X-Amz-Signature=1eacf4583872fc9494451931e1a34ec13ebe3642b88e026afa3950e78218f75b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644K5G6ZG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlsn2ErrRiVHPqmrTmjH7Pc9l4mc1piw0ZJ8WtCUrEwIhAI5%2F%2F9bwFPa38sg4pRQIGsQRk1DwKF19Ss455Xk%2FZpQtKv8DCC8QABoMNjM3NDIzMTgzODA1Igxd3%2B7UY65WOpEA6p0q3AMl75NaCLrnYXgsBuujSqDDRsrC%2F3%2FvP7%2F5VG%2BPBBad4VX0GULsOh4ZFRkspzJNOvx%2BG62NwU3rXxaKHKlXP98OApDUwPAkPifrANLX3YL8u0OAv%2BhOE6JnoDXZywwV8a%2Fk64ReLpps%2BfTJVIz7KsIf8Y70ISoBRQ6WPVJjirIzg0HxX3havb4cKeontJtNHKjaX4DWHvmNGoT8cxkqhl6xm7pMOBdo70hcHN25btSl%2BwLLEA0lXERKzRSzS3fD%2FwZVoUM7u9evT8DoQLPxCIp42sdWI9dT6fVOSt6WW82iDydbMVwg8zQq8y37O0lC0C9IzTGN54kZQ%2FriKD7AASLXF0QByFEV%2FV5hWRjbyT2A%2Fzn4KfSZ1mcjzByfkwL3bCkjZDhSN2lCdJP4PoJLnDbqn3ism%2FeKqMSGTuMhPRVEMR9dZxiDYtLCB6wE%2FFi%2F1MhS0lZBLA3u2MXHC57BiPxrHv9SLQcIo2ERjfqYzl9HOzGAuu2N2JcoLKwSo9LYtSGy1xy8uePs3hDRTeH2fbIbxZrq4tuL5TSfL5z2c3FQcGcL8OgUjvpmmwoJ3is67j6WPV7V6pMUNq3udXoZxtpYhHwsIHNiXxkiw72I8i%2FKeexHWphBIWvYcBqK%2FjC6vdu%2BBjqkARPEgJ7%2FtUyRlo4tLlOrkvVbVB0a7EjW6hzfjQdQY9p4K%2FbTFsYnGr1n4NB3bLm6jqt%2FBgHxn3ejb%2FMzXLC8yTRu40UhEFg2xwDwDVBQwIggZD1My%2Fdxnbtz%2B5xDMJo0hmLm%2F78k%2BYbB59txsXfXNSjmxkOrX%2FzpYC19%2FJBDK7V0HnmoNQSE1LxgA%2BwO8rjCbUpgCV7AOxuUYGdiploj4Ok4Cm9v&X-Amz-Signature=ff43215f2eb6798036f7811a3b55d6c4b5bdc83a5d9d807497b9f633a98e3125&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644K5G6ZG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlsn2ErrRiVHPqmrTmjH7Pc9l4mc1piw0ZJ8WtCUrEwIhAI5%2F%2F9bwFPa38sg4pRQIGsQRk1DwKF19Ss455Xk%2FZpQtKv8DCC8QABoMNjM3NDIzMTgzODA1Igxd3%2B7UY65WOpEA6p0q3AMl75NaCLrnYXgsBuujSqDDRsrC%2F3%2FvP7%2F5VG%2BPBBad4VX0GULsOh4ZFRkspzJNOvx%2BG62NwU3rXxaKHKlXP98OApDUwPAkPifrANLX3YL8u0OAv%2BhOE6JnoDXZywwV8a%2Fk64ReLpps%2BfTJVIz7KsIf8Y70ISoBRQ6WPVJjirIzg0HxX3havb4cKeontJtNHKjaX4DWHvmNGoT8cxkqhl6xm7pMOBdo70hcHN25btSl%2BwLLEA0lXERKzRSzS3fD%2FwZVoUM7u9evT8DoQLPxCIp42sdWI9dT6fVOSt6WW82iDydbMVwg8zQq8y37O0lC0C9IzTGN54kZQ%2FriKD7AASLXF0QByFEV%2FV5hWRjbyT2A%2Fzn4KfSZ1mcjzByfkwL3bCkjZDhSN2lCdJP4PoJLnDbqn3ism%2FeKqMSGTuMhPRVEMR9dZxiDYtLCB6wE%2FFi%2F1MhS0lZBLA3u2MXHC57BiPxrHv9SLQcIo2ERjfqYzl9HOzGAuu2N2JcoLKwSo9LYtSGy1xy8uePs3hDRTeH2fbIbxZrq4tuL5TSfL5z2c3FQcGcL8OgUjvpmmwoJ3is67j6WPV7V6pMUNq3udXoZxtpYhHwsIHNiXxkiw72I8i%2FKeexHWphBIWvYcBqK%2FjC6vdu%2BBjqkARPEgJ7%2FtUyRlo4tLlOrkvVbVB0a7EjW6hzfjQdQY9p4K%2FbTFsYnGr1n4NB3bLm6jqt%2FBgHxn3ejb%2FMzXLC8yTRu40UhEFg2xwDwDVBQwIggZD1My%2Fdxnbtz%2B5xDMJo0hmLm%2F78k%2BYbB59txsXfXNSjmxkOrX%2FzpYC19%2FJBDK7V0HnmoNQSE1LxgA%2BwO8rjCbUpgCV7AOxuUYGdiploj4Ok4Cm9v&X-Amz-Signature=212cb31e04d16b5eb71d691bc407aaaf705ac8d71314fe3b80bde94f11cb5685&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644K5G6ZG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlsn2ErrRiVHPqmrTmjH7Pc9l4mc1piw0ZJ8WtCUrEwIhAI5%2F%2F9bwFPa38sg4pRQIGsQRk1DwKF19Ss455Xk%2FZpQtKv8DCC8QABoMNjM3NDIzMTgzODA1Igxd3%2B7UY65WOpEA6p0q3AMl75NaCLrnYXgsBuujSqDDRsrC%2F3%2FvP7%2F5VG%2BPBBad4VX0GULsOh4ZFRkspzJNOvx%2BG62NwU3rXxaKHKlXP98OApDUwPAkPifrANLX3YL8u0OAv%2BhOE6JnoDXZywwV8a%2Fk64ReLpps%2BfTJVIz7KsIf8Y70ISoBRQ6WPVJjirIzg0HxX3havb4cKeontJtNHKjaX4DWHvmNGoT8cxkqhl6xm7pMOBdo70hcHN25btSl%2BwLLEA0lXERKzRSzS3fD%2FwZVoUM7u9evT8DoQLPxCIp42sdWI9dT6fVOSt6WW82iDydbMVwg8zQq8y37O0lC0C9IzTGN54kZQ%2FriKD7AASLXF0QByFEV%2FV5hWRjbyT2A%2Fzn4KfSZ1mcjzByfkwL3bCkjZDhSN2lCdJP4PoJLnDbqn3ism%2FeKqMSGTuMhPRVEMR9dZxiDYtLCB6wE%2FFi%2F1MhS0lZBLA3u2MXHC57BiPxrHv9SLQcIo2ERjfqYzl9HOzGAuu2N2JcoLKwSo9LYtSGy1xy8uePs3hDRTeH2fbIbxZrq4tuL5TSfL5z2c3FQcGcL8OgUjvpmmwoJ3is67j6WPV7V6pMUNq3udXoZxtpYhHwsIHNiXxkiw72I8i%2FKeexHWphBIWvYcBqK%2FjC6vdu%2BBjqkARPEgJ7%2FtUyRlo4tLlOrkvVbVB0a7EjW6hzfjQdQY9p4K%2FbTFsYnGr1n4NB3bLm6jqt%2FBgHxn3ejb%2FMzXLC8yTRu40UhEFg2xwDwDVBQwIggZD1My%2Fdxnbtz%2B5xDMJo0hmLm%2F78k%2BYbB59txsXfXNSjmxkOrX%2FzpYC19%2FJBDK7V0HnmoNQSE1LxgA%2BwO8rjCbUpgCV7AOxuUYGdiploj4Ok4Cm9v&X-Amz-Signature=b10d1531292cb5b44e79573d0cf46cf959296fa9df301c14e15080c15fb42605&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644K5G6ZG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlsn2ErrRiVHPqmrTmjH7Pc9l4mc1piw0ZJ8WtCUrEwIhAI5%2F%2F9bwFPa38sg4pRQIGsQRk1DwKF19Ss455Xk%2FZpQtKv8DCC8QABoMNjM3NDIzMTgzODA1Igxd3%2B7UY65WOpEA6p0q3AMl75NaCLrnYXgsBuujSqDDRsrC%2F3%2FvP7%2F5VG%2BPBBad4VX0GULsOh4ZFRkspzJNOvx%2BG62NwU3rXxaKHKlXP98OApDUwPAkPifrANLX3YL8u0OAv%2BhOE6JnoDXZywwV8a%2Fk64ReLpps%2BfTJVIz7KsIf8Y70ISoBRQ6WPVJjirIzg0HxX3havb4cKeontJtNHKjaX4DWHvmNGoT8cxkqhl6xm7pMOBdo70hcHN25btSl%2BwLLEA0lXERKzRSzS3fD%2FwZVoUM7u9evT8DoQLPxCIp42sdWI9dT6fVOSt6WW82iDydbMVwg8zQq8y37O0lC0C9IzTGN54kZQ%2FriKD7AASLXF0QByFEV%2FV5hWRjbyT2A%2Fzn4KfSZ1mcjzByfkwL3bCkjZDhSN2lCdJP4PoJLnDbqn3ism%2FeKqMSGTuMhPRVEMR9dZxiDYtLCB6wE%2FFi%2F1MhS0lZBLA3u2MXHC57BiPxrHv9SLQcIo2ERjfqYzl9HOzGAuu2N2JcoLKwSo9LYtSGy1xy8uePs3hDRTeH2fbIbxZrq4tuL5TSfL5z2c3FQcGcL8OgUjvpmmwoJ3is67j6WPV7V6pMUNq3udXoZxtpYhHwsIHNiXxkiw72I8i%2FKeexHWphBIWvYcBqK%2FjC6vdu%2BBjqkARPEgJ7%2FtUyRlo4tLlOrkvVbVB0a7EjW6hzfjQdQY9p4K%2FbTFsYnGr1n4NB3bLm6jqt%2FBgHxn3ejb%2FMzXLC8yTRu40UhEFg2xwDwDVBQwIggZD1My%2Fdxnbtz%2B5xDMJo0hmLm%2F78k%2BYbB59txsXfXNSjmxkOrX%2FzpYC19%2FJBDK7V0HnmoNQSE1LxgA%2BwO8rjCbUpgCV7AOxuUYGdiploj4Ok4Cm9v&X-Amz-Signature=47edb392a131faf619e36ca0016d57d633b7bc8bdfa71d29b7a6c5a56e76199a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644K5G6ZG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlsn2ErrRiVHPqmrTmjH7Pc9l4mc1piw0ZJ8WtCUrEwIhAI5%2F%2F9bwFPa38sg4pRQIGsQRk1DwKF19Ss455Xk%2FZpQtKv8DCC8QABoMNjM3NDIzMTgzODA1Igxd3%2B7UY65WOpEA6p0q3AMl75NaCLrnYXgsBuujSqDDRsrC%2F3%2FvP7%2F5VG%2BPBBad4VX0GULsOh4ZFRkspzJNOvx%2BG62NwU3rXxaKHKlXP98OApDUwPAkPifrANLX3YL8u0OAv%2BhOE6JnoDXZywwV8a%2Fk64ReLpps%2BfTJVIz7KsIf8Y70ISoBRQ6WPVJjirIzg0HxX3havb4cKeontJtNHKjaX4DWHvmNGoT8cxkqhl6xm7pMOBdo70hcHN25btSl%2BwLLEA0lXERKzRSzS3fD%2FwZVoUM7u9evT8DoQLPxCIp42sdWI9dT6fVOSt6WW82iDydbMVwg8zQq8y37O0lC0C9IzTGN54kZQ%2FriKD7AASLXF0QByFEV%2FV5hWRjbyT2A%2Fzn4KfSZ1mcjzByfkwL3bCkjZDhSN2lCdJP4PoJLnDbqn3ism%2FeKqMSGTuMhPRVEMR9dZxiDYtLCB6wE%2FFi%2F1MhS0lZBLA3u2MXHC57BiPxrHv9SLQcIo2ERjfqYzl9HOzGAuu2N2JcoLKwSo9LYtSGy1xy8uePs3hDRTeH2fbIbxZrq4tuL5TSfL5z2c3FQcGcL8OgUjvpmmwoJ3is67j6WPV7V6pMUNq3udXoZxtpYhHwsIHNiXxkiw72I8i%2FKeexHWphBIWvYcBqK%2FjC6vdu%2BBjqkARPEgJ7%2FtUyRlo4tLlOrkvVbVB0a7EjW6hzfjQdQY9p4K%2FbTFsYnGr1n4NB3bLm6jqt%2FBgHxn3ejb%2FMzXLC8yTRu40UhEFg2xwDwDVBQwIggZD1My%2Fdxnbtz%2B5xDMJo0hmLm%2F78k%2BYbB59txsXfXNSjmxkOrX%2FzpYC19%2FJBDK7V0HnmoNQSE1LxgA%2BwO8rjCbUpgCV7AOxuUYGdiploj4Ok4Cm9v&X-Amz-Signature=da3bdb54b4ba2e532abac1adbaae400eb10a841d4428ac2fca4252b78678ea4d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
