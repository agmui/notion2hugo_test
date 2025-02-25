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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2P7V2NA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDN5mES7muOeOoSl9Fl%2F9Zt7d73SsODyibfQTCQd%2FQoGgIhALLQFlMxTB5jjr8PaIRL5bMnS5mTkLQbBz5kKsNbsVz%2FKv8DCD4QABoMNjM3NDIzMTgzODA1IgzOT4U8m1cQGDLWkJcq3ANjaeLEZTwzAsuPbpNOqfMwo7OvS1BPH%2FPKVuYdVj6pOGWtHJV9YnLACcdfpx8wQCbxCMBTcPyRH3X4DCB8g3ncHKvpol4ZHcms5Qk%2Fkk5q2wd59PjgtfhIXNIq23rC9aTOyFS4JBHQOlea8XepnuBrAnx2i877AXBC5cHD97rJ7Hx7NTwZKpv3szoZrhP4D6zF%2BMz5nwOvxdjx3zKVFbl5kDCaL5vIxK%2BkkNttHurPQ1z9FcVLB9sD2VWm5ylzDVV7rMX%2BQc9%2F9bOOP0LJuxrUY7KhQPFfUzW9Rq8PmNoV2zjBum4QUOf6IutvuTKxsauXodrxOxH8xoxXhMDNw0YadGOYrAX5dPBdu%2FyXcgNvnaDy7UJJl9x%2FyZDLJXxEa5k73rYoBY%2BlAMaFOEuXc5PmnAxqdX5%2FxX9C0bDpkNN%2BRh9XXjyTqPx9tNTYGNaxMyKH6vLIfOkHrXtfeFUEGu61QQLdk0UPyltkqXl86%2FKrV8jIpHCAqdNpad1MgvkTrDcKBE6Y29zEu7xbyXqaZ%2BtkssZLX7CsXOTZbKbfsgcOAxbS3ERWyYBkwAiXlwjPJ%2Bm%2Bp%2Bn%2BWkbnI%2FFbWarlqP5xWbZYUHej9iy5Jfxp9GFrXsG0UvWHQ%2BU14p9tLjDFj%2FW9BjqkATkQVZUWem%2BNheOoUjEcvc74kgO5WPtyZlT0P4o7exF%2FCVKQWQuzpOQi4a2icYhSOJrFtY2WZCyNhC2aQHhWxaYSqG7gijmRPvtxxEGs1MKmhApehFyzLEOxflRTk8sb1CxENf6YYEkezW7aTANO0JrQA902%2B%2F1lgL1VthAPutH9MxVxXl0UCSHphJO4MQOZ8jq5aYW%2FW5Gi%2Bkde5lTa0eX8omPH&X-Amz-Signature=976732de10a78f585b9964b5b8c8753c093c9dfcf4aa00484f59b7ecd2c00f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2P7V2NA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDN5mES7muOeOoSl9Fl%2F9Zt7d73SsODyibfQTCQd%2FQoGgIhALLQFlMxTB5jjr8PaIRL5bMnS5mTkLQbBz5kKsNbsVz%2FKv8DCD4QABoMNjM3NDIzMTgzODA1IgzOT4U8m1cQGDLWkJcq3ANjaeLEZTwzAsuPbpNOqfMwo7OvS1BPH%2FPKVuYdVj6pOGWtHJV9YnLACcdfpx8wQCbxCMBTcPyRH3X4DCB8g3ncHKvpol4ZHcms5Qk%2Fkk5q2wd59PjgtfhIXNIq23rC9aTOyFS4JBHQOlea8XepnuBrAnx2i877AXBC5cHD97rJ7Hx7NTwZKpv3szoZrhP4D6zF%2BMz5nwOvxdjx3zKVFbl5kDCaL5vIxK%2BkkNttHurPQ1z9FcVLB9sD2VWm5ylzDVV7rMX%2BQc9%2F9bOOP0LJuxrUY7KhQPFfUzW9Rq8PmNoV2zjBum4QUOf6IutvuTKxsauXodrxOxH8xoxXhMDNw0YadGOYrAX5dPBdu%2FyXcgNvnaDy7UJJl9x%2FyZDLJXxEa5k73rYoBY%2BlAMaFOEuXc5PmnAxqdX5%2FxX9C0bDpkNN%2BRh9XXjyTqPx9tNTYGNaxMyKH6vLIfOkHrXtfeFUEGu61QQLdk0UPyltkqXl86%2FKrV8jIpHCAqdNpad1MgvkTrDcKBE6Y29zEu7xbyXqaZ%2BtkssZLX7CsXOTZbKbfsgcOAxbS3ERWyYBkwAiXlwjPJ%2Bm%2Bp%2Bn%2BWkbnI%2FFbWarlqP5xWbZYUHej9iy5Jfxp9GFrXsG0UvWHQ%2BU14p9tLjDFj%2FW9BjqkATkQVZUWem%2BNheOoUjEcvc74kgO5WPtyZlT0P4o7exF%2FCVKQWQuzpOQi4a2icYhSOJrFtY2WZCyNhC2aQHhWxaYSqG7gijmRPvtxxEGs1MKmhApehFyzLEOxflRTk8sb1CxENf6YYEkezW7aTANO0JrQA902%2B%2F1lgL1VthAPutH9MxVxXl0UCSHphJO4MQOZ8jq5aYW%2FW5Gi%2Bkde5lTa0eX8omPH&X-Amz-Signature=0d158d8b46e926a257b1815c4cd9dc8649724eab4744a415db235f98f6bf6b90&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2P7V2NA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDN5mES7muOeOoSl9Fl%2F9Zt7d73SsODyibfQTCQd%2FQoGgIhALLQFlMxTB5jjr8PaIRL5bMnS5mTkLQbBz5kKsNbsVz%2FKv8DCD4QABoMNjM3NDIzMTgzODA1IgzOT4U8m1cQGDLWkJcq3ANjaeLEZTwzAsuPbpNOqfMwo7OvS1BPH%2FPKVuYdVj6pOGWtHJV9YnLACcdfpx8wQCbxCMBTcPyRH3X4DCB8g3ncHKvpol4ZHcms5Qk%2Fkk5q2wd59PjgtfhIXNIq23rC9aTOyFS4JBHQOlea8XepnuBrAnx2i877AXBC5cHD97rJ7Hx7NTwZKpv3szoZrhP4D6zF%2BMz5nwOvxdjx3zKVFbl5kDCaL5vIxK%2BkkNttHurPQ1z9FcVLB9sD2VWm5ylzDVV7rMX%2BQc9%2F9bOOP0LJuxrUY7KhQPFfUzW9Rq8PmNoV2zjBum4QUOf6IutvuTKxsauXodrxOxH8xoxXhMDNw0YadGOYrAX5dPBdu%2FyXcgNvnaDy7UJJl9x%2FyZDLJXxEa5k73rYoBY%2BlAMaFOEuXc5PmnAxqdX5%2FxX9C0bDpkNN%2BRh9XXjyTqPx9tNTYGNaxMyKH6vLIfOkHrXtfeFUEGu61QQLdk0UPyltkqXl86%2FKrV8jIpHCAqdNpad1MgvkTrDcKBE6Y29zEu7xbyXqaZ%2BtkssZLX7CsXOTZbKbfsgcOAxbS3ERWyYBkwAiXlwjPJ%2Bm%2Bp%2Bn%2BWkbnI%2FFbWarlqP5xWbZYUHej9iy5Jfxp9GFrXsG0UvWHQ%2BU14p9tLjDFj%2FW9BjqkATkQVZUWem%2BNheOoUjEcvc74kgO5WPtyZlT0P4o7exF%2FCVKQWQuzpOQi4a2icYhSOJrFtY2WZCyNhC2aQHhWxaYSqG7gijmRPvtxxEGs1MKmhApehFyzLEOxflRTk8sb1CxENf6YYEkezW7aTANO0JrQA902%2B%2F1lgL1VthAPutH9MxVxXl0UCSHphJO4MQOZ8jq5aYW%2FW5Gi%2Bkde5lTa0eX8omPH&X-Amz-Signature=1751b72e2c072370c85a61fbf78bc96926d0785e8a67dd0a7f34b75f92056158&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2P7V2NA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDN5mES7muOeOoSl9Fl%2F9Zt7d73SsODyibfQTCQd%2FQoGgIhALLQFlMxTB5jjr8PaIRL5bMnS5mTkLQbBz5kKsNbsVz%2FKv8DCD4QABoMNjM3NDIzMTgzODA1IgzOT4U8m1cQGDLWkJcq3ANjaeLEZTwzAsuPbpNOqfMwo7OvS1BPH%2FPKVuYdVj6pOGWtHJV9YnLACcdfpx8wQCbxCMBTcPyRH3X4DCB8g3ncHKvpol4ZHcms5Qk%2Fkk5q2wd59PjgtfhIXNIq23rC9aTOyFS4JBHQOlea8XepnuBrAnx2i877AXBC5cHD97rJ7Hx7NTwZKpv3szoZrhP4D6zF%2BMz5nwOvxdjx3zKVFbl5kDCaL5vIxK%2BkkNttHurPQ1z9FcVLB9sD2VWm5ylzDVV7rMX%2BQc9%2F9bOOP0LJuxrUY7KhQPFfUzW9Rq8PmNoV2zjBum4QUOf6IutvuTKxsauXodrxOxH8xoxXhMDNw0YadGOYrAX5dPBdu%2FyXcgNvnaDy7UJJl9x%2FyZDLJXxEa5k73rYoBY%2BlAMaFOEuXc5PmnAxqdX5%2FxX9C0bDpkNN%2BRh9XXjyTqPx9tNTYGNaxMyKH6vLIfOkHrXtfeFUEGu61QQLdk0UPyltkqXl86%2FKrV8jIpHCAqdNpad1MgvkTrDcKBE6Y29zEu7xbyXqaZ%2BtkssZLX7CsXOTZbKbfsgcOAxbS3ERWyYBkwAiXlwjPJ%2Bm%2Bp%2Bn%2BWkbnI%2FFbWarlqP5xWbZYUHej9iy5Jfxp9GFrXsG0UvWHQ%2BU14p9tLjDFj%2FW9BjqkATkQVZUWem%2BNheOoUjEcvc74kgO5WPtyZlT0P4o7exF%2FCVKQWQuzpOQi4a2icYhSOJrFtY2WZCyNhC2aQHhWxaYSqG7gijmRPvtxxEGs1MKmhApehFyzLEOxflRTk8sb1CxENf6YYEkezW7aTANO0JrQA902%2B%2F1lgL1VthAPutH9MxVxXl0UCSHphJO4MQOZ8jq5aYW%2FW5Gi%2Bkde5lTa0eX8omPH&X-Amz-Signature=86c13d1f64001e0d75f009841ec1c7df48412004664453d1c5fd3f60d2fef173&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2P7V2NA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDN5mES7muOeOoSl9Fl%2F9Zt7d73SsODyibfQTCQd%2FQoGgIhALLQFlMxTB5jjr8PaIRL5bMnS5mTkLQbBz5kKsNbsVz%2FKv8DCD4QABoMNjM3NDIzMTgzODA1IgzOT4U8m1cQGDLWkJcq3ANjaeLEZTwzAsuPbpNOqfMwo7OvS1BPH%2FPKVuYdVj6pOGWtHJV9YnLACcdfpx8wQCbxCMBTcPyRH3X4DCB8g3ncHKvpol4ZHcms5Qk%2Fkk5q2wd59PjgtfhIXNIq23rC9aTOyFS4JBHQOlea8XepnuBrAnx2i877AXBC5cHD97rJ7Hx7NTwZKpv3szoZrhP4D6zF%2BMz5nwOvxdjx3zKVFbl5kDCaL5vIxK%2BkkNttHurPQ1z9FcVLB9sD2VWm5ylzDVV7rMX%2BQc9%2F9bOOP0LJuxrUY7KhQPFfUzW9Rq8PmNoV2zjBum4QUOf6IutvuTKxsauXodrxOxH8xoxXhMDNw0YadGOYrAX5dPBdu%2FyXcgNvnaDy7UJJl9x%2FyZDLJXxEa5k73rYoBY%2BlAMaFOEuXc5PmnAxqdX5%2FxX9C0bDpkNN%2BRh9XXjyTqPx9tNTYGNaxMyKH6vLIfOkHrXtfeFUEGu61QQLdk0UPyltkqXl86%2FKrV8jIpHCAqdNpad1MgvkTrDcKBE6Y29zEu7xbyXqaZ%2BtkssZLX7CsXOTZbKbfsgcOAxbS3ERWyYBkwAiXlwjPJ%2Bm%2Bp%2Bn%2BWkbnI%2FFbWarlqP5xWbZYUHej9iy5Jfxp9GFrXsG0UvWHQ%2BU14p9tLjDFj%2FW9BjqkATkQVZUWem%2BNheOoUjEcvc74kgO5WPtyZlT0P4o7exF%2FCVKQWQuzpOQi4a2icYhSOJrFtY2WZCyNhC2aQHhWxaYSqG7gijmRPvtxxEGs1MKmhApehFyzLEOxflRTk8sb1CxENf6YYEkezW7aTANO0JrQA902%2B%2F1lgL1VthAPutH9MxVxXl0UCSHphJO4MQOZ8jq5aYW%2FW5Gi%2Bkde5lTa0eX8omPH&X-Amz-Signature=66e1062e0f945f88469ffb991fbc20f93b453b6b8adea1086b9ad278a1487ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2P7V2NA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDN5mES7muOeOoSl9Fl%2F9Zt7d73SsODyibfQTCQd%2FQoGgIhALLQFlMxTB5jjr8PaIRL5bMnS5mTkLQbBz5kKsNbsVz%2FKv8DCD4QABoMNjM3NDIzMTgzODA1IgzOT4U8m1cQGDLWkJcq3ANjaeLEZTwzAsuPbpNOqfMwo7OvS1BPH%2FPKVuYdVj6pOGWtHJV9YnLACcdfpx8wQCbxCMBTcPyRH3X4DCB8g3ncHKvpol4ZHcms5Qk%2Fkk5q2wd59PjgtfhIXNIq23rC9aTOyFS4JBHQOlea8XepnuBrAnx2i877AXBC5cHD97rJ7Hx7NTwZKpv3szoZrhP4D6zF%2BMz5nwOvxdjx3zKVFbl5kDCaL5vIxK%2BkkNttHurPQ1z9FcVLB9sD2VWm5ylzDVV7rMX%2BQc9%2F9bOOP0LJuxrUY7KhQPFfUzW9Rq8PmNoV2zjBum4QUOf6IutvuTKxsauXodrxOxH8xoxXhMDNw0YadGOYrAX5dPBdu%2FyXcgNvnaDy7UJJl9x%2FyZDLJXxEa5k73rYoBY%2BlAMaFOEuXc5PmnAxqdX5%2FxX9C0bDpkNN%2BRh9XXjyTqPx9tNTYGNaxMyKH6vLIfOkHrXtfeFUEGu61QQLdk0UPyltkqXl86%2FKrV8jIpHCAqdNpad1MgvkTrDcKBE6Y29zEu7xbyXqaZ%2BtkssZLX7CsXOTZbKbfsgcOAxbS3ERWyYBkwAiXlwjPJ%2Bm%2Bp%2Bn%2BWkbnI%2FFbWarlqP5xWbZYUHej9iy5Jfxp9GFrXsG0UvWHQ%2BU14p9tLjDFj%2FW9BjqkATkQVZUWem%2BNheOoUjEcvc74kgO5WPtyZlT0P4o7exF%2FCVKQWQuzpOQi4a2icYhSOJrFtY2WZCyNhC2aQHhWxaYSqG7gijmRPvtxxEGs1MKmhApehFyzLEOxflRTk8sb1CxENf6YYEkezW7aTANO0JrQA902%2B%2F1lgL1VthAPutH9MxVxXl0UCSHphJO4MQOZ8jq5aYW%2FW5Gi%2Bkde5lTa0eX8omPH&X-Amz-Signature=d06c632545ba5573caf96949825916e93e4fa8a221e48d4d148be7cb424d8df9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2P7V2NA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDN5mES7muOeOoSl9Fl%2F9Zt7d73SsODyibfQTCQd%2FQoGgIhALLQFlMxTB5jjr8PaIRL5bMnS5mTkLQbBz5kKsNbsVz%2FKv8DCD4QABoMNjM3NDIzMTgzODA1IgzOT4U8m1cQGDLWkJcq3ANjaeLEZTwzAsuPbpNOqfMwo7OvS1BPH%2FPKVuYdVj6pOGWtHJV9YnLACcdfpx8wQCbxCMBTcPyRH3X4DCB8g3ncHKvpol4ZHcms5Qk%2Fkk5q2wd59PjgtfhIXNIq23rC9aTOyFS4JBHQOlea8XepnuBrAnx2i877AXBC5cHD97rJ7Hx7NTwZKpv3szoZrhP4D6zF%2BMz5nwOvxdjx3zKVFbl5kDCaL5vIxK%2BkkNttHurPQ1z9FcVLB9sD2VWm5ylzDVV7rMX%2BQc9%2F9bOOP0LJuxrUY7KhQPFfUzW9Rq8PmNoV2zjBum4QUOf6IutvuTKxsauXodrxOxH8xoxXhMDNw0YadGOYrAX5dPBdu%2FyXcgNvnaDy7UJJl9x%2FyZDLJXxEa5k73rYoBY%2BlAMaFOEuXc5PmnAxqdX5%2FxX9C0bDpkNN%2BRh9XXjyTqPx9tNTYGNaxMyKH6vLIfOkHrXtfeFUEGu61QQLdk0UPyltkqXl86%2FKrV8jIpHCAqdNpad1MgvkTrDcKBE6Y29zEu7xbyXqaZ%2BtkssZLX7CsXOTZbKbfsgcOAxbS3ERWyYBkwAiXlwjPJ%2Bm%2Bp%2Bn%2BWkbnI%2FFbWarlqP5xWbZYUHej9iy5Jfxp9GFrXsG0UvWHQ%2BU14p9tLjDFj%2FW9BjqkATkQVZUWem%2BNheOoUjEcvc74kgO5WPtyZlT0P4o7exF%2FCVKQWQuzpOQi4a2icYhSOJrFtY2WZCyNhC2aQHhWxaYSqG7gijmRPvtxxEGs1MKmhApehFyzLEOxflRTk8sb1CxENf6YYEkezW7aTANO0JrQA902%2B%2F1lgL1VthAPutH9MxVxXl0UCSHphJO4MQOZ8jq5aYW%2FW5Gi%2Bkde5lTa0eX8omPH&X-Amz-Signature=e92f5e13a5671578853ced3e6e482a83330dc9bf783ec21fab10982aebdcb7b9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
