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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RY7FY4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhZD4NwZh%2FfEOHCCWx8pFt5Dj3eI9x3Ec%2F25PGpWEigIhAOh2hOQGkQ3CWGs5ekmelvaslFSOWgxWeaSDdK9OdOZ4Kv8DCCgQABoMNjM3NDIzMTgzODA1IgxNbu8YLvTU6DCVfhgq3AM98qv8eeD%2Fjkpr0Ao7aPzeoJqtr6lK%2FCDK0%2FXj2VXtdaNM06W7Dn9ccCgxjZwUPEEf6f0QP58ivdgPzOplrvGMoTaLfk6osgJUqv%2Bj6ptlI%2FcMOikaKWVvmbTP9tU3JzvkanC7bAHV%2F0CPOCebMVB63yjHRq6MceXDQ1xvFWDBX0YQFQ1vjYeWb6RtrYr87GB1OsMKeGMOMIcI0YMVMq3T5mr15xxtwzExWwFqfT3HfmO0bQlc%2B3J%2BWS8u7hjU6tgDoVTdimIbVhIwZYtrC7fxBIdypmWTI%2ByV3ZQZyTtV8xG4amnUN%2BMmIx1VU4EVEDKN6zk3CWBXPs52FE%2FBwVDTeWhlnW%2FFqU21w6tkR3C3IGPxPVWGjju8Zp7ntQmahvLSMKeHoMemg0XDB0NHcWldnKwkyeHcYZMLbnKrTdlZWDU5gzeFPN9zQAxWR%2FA7Pp6pAVUnstCbNqO%2FwKLqtuElXCXshijvpAXEDB9mefq6Mr0ONjLWF0gkmDICaTOlTWYEy3Q7KXRwQmdmgxGyZqyRN5cSl2gutVC28IQKsDdRliDd7S6mUf5I0g0W1pkBLmB4toBGf9SOQnOZcPg01LDsdUpKJ1ZMq3P9Ia0Y4A7PQh3I%2F0DnSGQik0WcVDC%2Bl6W%2BBjqkAcYgkmKIdiZW7u0Slicjf66392ejqYmx5wFZLo8ZCyke8NWw9GCfsxt1o48pC7%2BVcSwykB26mq0vu0Dd0HIW%2F1FSYHJ7Vp8HEoxoQAblfRCiR43KPdmB%2BFgOuWrgWhTNt7y3nAFVHjI7Vpu%2F3xkyFGvQOqal4IvOCu4M5VMO74kAO5vSdZSMaTHW4%2BmqmBfB2MU8nhhxpfsZqW6bq%2BOm%2BLshQbUk&X-Amz-Signature=9dc841222c92af9d86a257bfdd585cb54a09776dfe4602303a9643991f62f926&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RY7FY4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhZD4NwZh%2FfEOHCCWx8pFt5Dj3eI9x3Ec%2F25PGpWEigIhAOh2hOQGkQ3CWGs5ekmelvaslFSOWgxWeaSDdK9OdOZ4Kv8DCCgQABoMNjM3NDIzMTgzODA1IgxNbu8YLvTU6DCVfhgq3AM98qv8eeD%2Fjkpr0Ao7aPzeoJqtr6lK%2FCDK0%2FXj2VXtdaNM06W7Dn9ccCgxjZwUPEEf6f0QP58ivdgPzOplrvGMoTaLfk6osgJUqv%2Bj6ptlI%2FcMOikaKWVvmbTP9tU3JzvkanC7bAHV%2F0CPOCebMVB63yjHRq6MceXDQ1xvFWDBX0YQFQ1vjYeWb6RtrYr87GB1OsMKeGMOMIcI0YMVMq3T5mr15xxtwzExWwFqfT3HfmO0bQlc%2B3J%2BWS8u7hjU6tgDoVTdimIbVhIwZYtrC7fxBIdypmWTI%2ByV3ZQZyTtV8xG4amnUN%2BMmIx1VU4EVEDKN6zk3CWBXPs52FE%2FBwVDTeWhlnW%2FFqU21w6tkR3C3IGPxPVWGjju8Zp7ntQmahvLSMKeHoMemg0XDB0NHcWldnKwkyeHcYZMLbnKrTdlZWDU5gzeFPN9zQAxWR%2FA7Pp6pAVUnstCbNqO%2FwKLqtuElXCXshijvpAXEDB9mefq6Mr0ONjLWF0gkmDICaTOlTWYEy3Q7KXRwQmdmgxGyZqyRN5cSl2gutVC28IQKsDdRliDd7S6mUf5I0g0W1pkBLmB4toBGf9SOQnOZcPg01LDsdUpKJ1ZMq3P9Ia0Y4A7PQh3I%2F0DnSGQik0WcVDC%2Bl6W%2BBjqkAcYgkmKIdiZW7u0Slicjf66392ejqYmx5wFZLo8ZCyke8NWw9GCfsxt1o48pC7%2BVcSwykB26mq0vu0Dd0HIW%2F1FSYHJ7Vp8HEoxoQAblfRCiR43KPdmB%2BFgOuWrgWhTNt7y3nAFVHjI7Vpu%2F3xkyFGvQOqal4IvOCu4M5VMO74kAO5vSdZSMaTHW4%2BmqmBfB2MU8nhhxpfsZqW6bq%2BOm%2BLshQbUk&X-Amz-Signature=18d84bf0f8edb24ae0c9f4e1e3bed4cf835c8c92fa68e1036caed00636039dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RY7FY4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhZD4NwZh%2FfEOHCCWx8pFt5Dj3eI9x3Ec%2F25PGpWEigIhAOh2hOQGkQ3CWGs5ekmelvaslFSOWgxWeaSDdK9OdOZ4Kv8DCCgQABoMNjM3NDIzMTgzODA1IgxNbu8YLvTU6DCVfhgq3AM98qv8eeD%2Fjkpr0Ao7aPzeoJqtr6lK%2FCDK0%2FXj2VXtdaNM06W7Dn9ccCgxjZwUPEEf6f0QP58ivdgPzOplrvGMoTaLfk6osgJUqv%2Bj6ptlI%2FcMOikaKWVvmbTP9tU3JzvkanC7bAHV%2F0CPOCebMVB63yjHRq6MceXDQ1xvFWDBX0YQFQ1vjYeWb6RtrYr87GB1OsMKeGMOMIcI0YMVMq3T5mr15xxtwzExWwFqfT3HfmO0bQlc%2B3J%2BWS8u7hjU6tgDoVTdimIbVhIwZYtrC7fxBIdypmWTI%2ByV3ZQZyTtV8xG4amnUN%2BMmIx1VU4EVEDKN6zk3CWBXPs52FE%2FBwVDTeWhlnW%2FFqU21w6tkR3C3IGPxPVWGjju8Zp7ntQmahvLSMKeHoMemg0XDB0NHcWldnKwkyeHcYZMLbnKrTdlZWDU5gzeFPN9zQAxWR%2FA7Pp6pAVUnstCbNqO%2FwKLqtuElXCXshijvpAXEDB9mefq6Mr0ONjLWF0gkmDICaTOlTWYEy3Q7KXRwQmdmgxGyZqyRN5cSl2gutVC28IQKsDdRliDd7S6mUf5I0g0W1pkBLmB4toBGf9SOQnOZcPg01LDsdUpKJ1ZMq3P9Ia0Y4A7PQh3I%2F0DnSGQik0WcVDC%2Bl6W%2BBjqkAcYgkmKIdiZW7u0Slicjf66392ejqYmx5wFZLo8ZCyke8NWw9GCfsxt1o48pC7%2BVcSwykB26mq0vu0Dd0HIW%2F1FSYHJ7Vp8HEoxoQAblfRCiR43KPdmB%2BFgOuWrgWhTNt7y3nAFVHjI7Vpu%2F3xkyFGvQOqal4IvOCu4M5VMO74kAO5vSdZSMaTHW4%2BmqmBfB2MU8nhhxpfsZqW6bq%2BOm%2BLshQbUk&X-Amz-Signature=7c69b948310463716b643eabbd92edcf044eaca7e6caaca62289999eb0f3ccda&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RY7FY4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhZD4NwZh%2FfEOHCCWx8pFt5Dj3eI9x3Ec%2F25PGpWEigIhAOh2hOQGkQ3CWGs5ekmelvaslFSOWgxWeaSDdK9OdOZ4Kv8DCCgQABoMNjM3NDIzMTgzODA1IgxNbu8YLvTU6DCVfhgq3AM98qv8eeD%2Fjkpr0Ao7aPzeoJqtr6lK%2FCDK0%2FXj2VXtdaNM06W7Dn9ccCgxjZwUPEEf6f0QP58ivdgPzOplrvGMoTaLfk6osgJUqv%2Bj6ptlI%2FcMOikaKWVvmbTP9tU3JzvkanC7bAHV%2F0CPOCebMVB63yjHRq6MceXDQ1xvFWDBX0YQFQ1vjYeWb6RtrYr87GB1OsMKeGMOMIcI0YMVMq3T5mr15xxtwzExWwFqfT3HfmO0bQlc%2B3J%2BWS8u7hjU6tgDoVTdimIbVhIwZYtrC7fxBIdypmWTI%2ByV3ZQZyTtV8xG4amnUN%2BMmIx1VU4EVEDKN6zk3CWBXPs52FE%2FBwVDTeWhlnW%2FFqU21w6tkR3C3IGPxPVWGjju8Zp7ntQmahvLSMKeHoMemg0XDB0NHcWldnKwkyeHcYZMLbnKrTdlZWDU5gzeFPN9zQAxWR%2FA7Pp6pAVUnstCbNqO%2FwKLqtuElXCXshijvpAXEDB9mefq6Mr0ONjLWF0gkmDICaTOlTWYEy3Q7KXRwQmdmgxGyZqyRN5cSl2gutVC28IQKsDdRliDd7S6mUf5I0g0W1pkBLmB4toBGf9SOQnOZcPg01LDsdUpKJ1ZMq3P9Ia0Y4A7PQh3I%2F0DnSGQik0WcVDC%2Bl6W%2BBjqkAcYgkmKIdiZW7u0Slicjf66392ejqYmx5wFZLo8ZCyke8NWw9GCfsxt1o48pC7%2BVcSwykB26mq0vu0Dd0HIW%2F1FSYHJ7Vp8HEoxoQAblfRCiR43KPdmB%2BFgOuWrgWhTNt7y3nAFVHjI7Vpu%2F3xkyFGvQOqal4IvOCu4M5VMO74kAO5vSdZSMaTHW4%2BmqmBfB2MU8nhhxpfsZqW6bq%2BOm%2BLshQbUk&X-Amz-Signature=ac8b1699e03583a42bbb5d900f3d39565ae0a5e743b6f709d6f5379fc74e2c31&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RY7FY4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhZD4NwZh%2FfEOHCCWx8pFt5Dj3eI9x3Ec%2F25PGpWEigIhAOh2hOQGkQ3CWGs5ekmelvaslFSOWgxWeaSDdK9OdOZ4Kv8DCCgQABoMNjM3NDIzMTgzODA1IgxNbu8YLvTU6DCVfhgq3AM98qv8eeD%2Fjkpr0Ao7aPzeoJqtr6lK%2FCDK0%2FXj2VXtdaNM06W7Dn9ccCgxjZwUPEEf6f0QP58ivdgPzOplrvGMoTaLfk6osgJUqv%2Bj6ptlI%2FcMOikaKWVvmbTP9tU3JzvkanC7bAHV%2F0CPOCebMVB63yjHRq6MceXDQ1xvFWDBX0YQFQ1vjYeWb6RtrYr87GB1OsMKeGMOMIcI0YMVMq3T5mr15xxtwzExWwFqfT3HfmO0bQlc%2B3J%2BWS8u7hjU6tgDoVTdimIbVhIwZYtrC7fxBIdypmWTI%2ByV3ZQZyTtV8xG4amnUN%2BMmIx1VU4EVEDKN6zk3CWBXPs52FE%2FBwVDTeWhlnW%2FFqU21w6tkR3C3IGPxPVWGjju8Zp7ntQmahvLSMKeHoMemg0XDB0NHcWldnKwkyeHcYZMLbnKrTdlZWDU5gzeFPN9zQAxWR%2FA7Pp6pAVUnstCbNqO%2FwKLqtuElXCXshijvpAXEDB9mefq6Mr0ONjLWF0gkmDICaTOlTWYEy3Q7KXRwQmdmgxGyZqyRN5cSl2gutVC28IQKsDdRliDd7S6mUf5I0g0W1pkBLmB4toBGf9SOQnOZcPg01LDsdUpKJ1ZMq3P9Ia0Y4A7PQh3I%2F0DnSGQik0WcVDC%2Bl6W%2BBjqkAcYgkmKIdiZW7u0Slicjf66392ejqYmx5wFZLo8ZCyke8NWw9GCfsxt1o48pC7%2BVcSwykB26mq0vu0Dd0HIW%2F1FSYHJ7Vp8HEoxoQAblfRCiR43KPdmB%2BFgOuWrgWhTNt7y3nAFVHjI7Vpu%2F3xkyFGvQOqal4IvOCu4M5VMO74kAO5vSdZSMaTHW4%2BmqmBfB2MU8nhhxpfsZqW6bq%2BOm%2BLshQbUk&X-Amz-Signature=c43196a6410c02132415ee2fe4ace602d899ba47592f46d40f6b172ca9a8b0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RY7FY4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhZD4NwZh%2FfEOHCCWx8pFt5Dj3eI9x3Ec%2F25PGpWEigIhAOh2hOQGkQ3CWGs5ekmelvaslFSOWgxWeaSDdK9OdOZ4Kv8DCCgQABoMNjM3NDIzMTgzODA1IgxNbu8YLvTU6DCVfhgq3AM98qv8eeD%2Fjkpr0Ao7aPzeoJqtr6lK%2FCDK0%2FXj2VXtdaNM06W7Dn9ccCgxjZwUPEEf6f0QP58ivdgPzOplrvGMoTaLfk6osgJUqv%2Bj6ptlI%2FcMOikaKWVvmbTP9tU3JzvkanC7bAHV%2F0CPOCebMVB63yjHRq6MceXDQ1xvFWDBX0YQFQ1vjYeWb6RtrYr87GB1OsMKeGMOMIcI0YMVMq3T5mr15xxtwzExWwFqfT3HfmO0bQlc%2B3J%2BWS8u7hjU6tgDoVTdimIbVhIwZYtrC7fxBIdypmWTI%2ByV3ZQZyTtV8xG4amnUN%2BMmIx1VU4EVEDKN6zk3CWBXPs52FE%2FBwVDTeWhlnW%2FFqU21w6tkR3C3IGPxPVWGjju8Zp7ntQmahvLSMKeHoMemg0XDB0NHcWldnKwkyeHcYZMLbnKrTdlZWDU5gzeFPN9zQAxWR%2FA7Pp6pAVUnstCbNqO%2FwKLqtuElXCXshijvpAXEDB9mefq6Mr0ONjLWF0gkmDICaTOlTWYEy3Q7KXRwQmdmgxGyZqyRN5cSl2gutVC28IQKsDdRliDd7S6mUf5I0g0W1pkBLmB4toBGf9SOQnOZcPg01LDsdUpKJ1ZMq3P9Ia0Y4A7PQh3I%2F0DnSGQik0WcVDC%2Bl6W%2BBjqkAcYgkmKIdiZW7u0Slicjf66392ejqYmx5wFZLo8ZCyke8NWw9GCfsxt1o48pC7%2BVcSwykB26mq0vu0Dd0HIW%2F1FSYHJ7Vp8HEoxoQAblfRCiR43KPdmB%2BFgOuWrgWhTNt7y3nAFVHjI7Vpu%2F3xkyFGvQOqal4IvOCu4M5VMO74kAO5vSdZSMaTHW4%2BmqmBfB2MU8nhhxpfsZqW6bq%2BOm%2BLshQbUk&X-Amz-Signature=edfb587bbbcea6c4d3c33fe7e525e7e37f6bbbf4d560945b98beea2be9f90dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RY7FY4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhZD4NwZh%2FfEOHCCWx8pFt5Dj3eI9x3Ec%2F25PGpWEigIhAOh2hOQGkQ3CWGs5ekmelvaslFSOWgxWeaSDdK9OdOZ4Kv8DCCgQABoMNjM3NDIzMTgzODA1IgxNbu8YLvTU6DCVfhgq3AM98qv8eeD%2Fjkpr0Ao7aPzeoJqtr6lK%2FCDK0%2FXj2VXtdaNM06W7Dn9ccCgxjZwUPEEf6f0QP58ivdgPzOplrvGMoTaLfk6osgJUqv%2Bj6ptlI%2FcMOikaKWVvmbTP9tU3JzvkanC7bAHV%2F0CPOCebMVB63yjHRq6MceXDQ1xvFWDBX0YQFQ1vjYeWb6RtrYr87GB1OsMKeGMOMIcI0YMVMq3T5mr15xxtwzExWwFqfT3HfmO0bQlc%2B3J%2BWS8u7hjU6tgDoVTdimIbVhIwZYtrC7fxBIdypmWTI%2ByV3ZQZyTtV8xG4amnUN%2BMmIx1VU4EVEDKN6zk3CWBXPs52FE%2FBwVDTeWhlnW%2FFqU21w6tkR3C3IGPxPVWGjju8Zp7ntQmahvLSMKeHoMemg0XDB0NHcWldnKwkyeHcYZMLbnKrTdlZWDU5gzeFPN9zQAxWR%2FA7Pp6pAVUnstCbNqO%2FwKLqtuElXCXshijvpAXEDB9mefq6Mr0ONjLWF0gkmDICaTOlTWYEy3Q7KXRwQmdmgxGyZqyRN5cSl2gutVC28IQKsDdRliDd7S6mUf5I0g0W1pkBLmB4toBGf9SOQnOZcPg01LDsdUpKJ1ZMq3P9Ia0Y4A7PQh3I%2F0DnSGQik0WcVDC%2Bl6W%2BBjqkAcYgkmKIdiZW7u0Slicjf66392ejqYmx5wFZLo8ZCyke8NWw9GCfsxt1o48pC7%2BVcSwykB26mq0vu0Dd0HIW%2F1FSYHJ7Vp8HEoxoQAblfRCiR43KPdmB%2BFgOuWrgWhTNt7y3nAFVHjI7Vpu%2F3xkyFGvQOqal4IvOCu4M5VMO74kAO5vSdZSMaTHW4%2BmqmBfB2MU8nhhxpfsZqW6bq%2BOm%2BLshQbUk&X-Amz-Signature=9a2380a258298986e354cf304152df7afa80f7b5214ad0ecf51eaa1cfce619b6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
