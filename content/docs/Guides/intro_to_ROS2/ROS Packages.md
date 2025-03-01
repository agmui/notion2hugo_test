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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDE5WU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCdqeec6C4HKGRPkh1vwuABK0QPZdTF1UhXNY15lQ%2BNXgIhAO%2Bh4VTt3rt8qD%2BGuf81PvH4pP0RZ4tYv8ZAzY0BUgFYKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo6cNY3MoFK8NR284q3AMc0R2BBvuUCUmavrTa%2BBIvyQtQ1%2B8GdQDYHgMPh44X9jb24bCVEnPlOwd9%2B4jKDvDOdE0mV4IvoZlHGsloMy3q2rzcOeAQozkwgYL%2BgpoNYZyy97kqbLdE19qMdrXcA6R4TSewghwoKjMiABAGhXJz%2F3NtZhCioZsP7K%2BPyFed1vigONOFHVmDFhfd8s1xbI%2F5kgZlT%2FY8QGLjFD6yw%2F35Szyw7minEe%2BSQkRUP2JsQ7D0wx4NRqmnva8AQWpuPjKSU9eWJFQo8TbPWWPRj3UKZoXXOyTY0ZGxpEtgXmPrTVmDDO2MTkdBY6hm8J7oOkjmNLnGZx%2F%2BguR9Wp1NQ1qEkBZNtea2pYjAHrC6%2ByELYd5zbtlbAy9lE1of4t3SWjKeZ2u0Sx5YaaW0LGPD53kA7lajb1h1DJHXHWdeEdpQFBIfT2ijSqw%2Fsq1BtoWe2RNNUPVeSuIskGMImF1OrGNUw5yx04sxYitNR%2FzpwviZYafN10wAzPnCIZ0cBpL9A%2BiUBWFzsKcFcNfcC4vPXAtvPiXk5ZuEObwGlIcMzHcE5UvbxGjmrmgdosxasAdyyuN3EgZuFudng8Nj2MKBFFQk3ggX8Y%2BjnS4YcKoQqUlGY2QrVgZtoFlBU5gMRzCUx42%2BBjqkAeguPrvbFNih9Ept9eYax3JoEHbZUXwvicvOEyXvwCENLswejrYKQB17bxglky0SzGTCd6i6emVnEL8lnf6zareOp60myYwIKyr7VLXsj9EMl3N4UWfJtueWmhjsdZDII0aA2QYefzD7BZ20WdjbrolMUryf8Qn%2FbQRWNKPVHVvG7jTgj0S1zi6V9OdVqLE4lquk26vgGLpJE2%2BpuxBaUg4GnL5Z&X-Amz-Signature=d8637158bd8d939b5535909f2d8638f34587b19d35e54643ffc3bc41caf6f944&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDE5WU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCdqeec6C4HKGRPkh1vwuABK0QPZdTF1UhXNY15lQ%2BNXgIhAO%2Bh4VTt3rt8qD%2BGuf81PvH4pP0RZ4tYv8ZAzY0BUgFYKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo6cNY3MoFK8NR284q3AMc0R2BBvuUCUmavrTa%2BBIvyQtQ1%2B8GdQDYHgMPh44X9jb24bCVEnPlOwd9%2B4jKDvDOdE0mV4IvoZlHGsloMy3q2rzcOeAQozkwgYL%2BgpoNYZyy97kqbLdE19qMdrXcA6R4TSewghwoKjMiABAGhXJz%2F3NtZhCioZsP7K%2BPyFed1vigONOFHVmDFhfd8s1xbI%2F5kgZlT%2FY8QGLjFD6yw%2F35Szyw7minEe%2BSQkRUP2JsQ7D0wx4NRqmnva8AQWpuPjKSU9eWJFQo8TbPWWPRj3UKZoXXOyTY0ZGxpEtgXmPrTVmDDO2MTkdBY6hm8J7oOkjmNLnGZx%2F%2BguR9Wp1NQ1qEkBZNtea2pYjAHrC6%2ByELYd5zbtlbAy9lE1of4t3SWjKeZ2u0Sx5YaaW0LGPD53kA7lajb1h1DJHXHWdeEdpQFBIfT2ijSqw%2Fsq1BtoWe2RNNUPVeSuIskGMImF1OrGNUw5yx04sxYitNR%2FzpwviZYafN10wAzPnCIZ0cBpL9A%2BiUBWFzsKcFcNfcC4vPXAtvPiXk5ZuEObwGlIcMzHcE5UvbxGjmrmgdosxasAdyyuN3EgZuFudng8Nj2MKBFFQk3ggX8Y%2BjnS4YcKoQqUlGY2QrVgZtoFlBU5gMRzCUx42%2BBjqkAeguPrvbFNih9Ept9eYax3JoEHbZUXwvicvOEyXvwCENLswejrYKQB17bxglky0SzGTCd6i6emVnEL8lnf6zareOp60myYwIKyr7VLXsj9EMl3N4UWfJtueWmhjsdZDII0aA2QYefzD7BZ20WdjbrolMUryf8Qn%2FbQRWNKPVHVvG7jTgj0S1zi6V9OdVqLE4lquk26vgGLpJE2%2BpuxBaUg4GnL5Z&X-Amz-Signature=c9fc1955a5c7a83479f697503603d4c2689be818c4ee8c9b051b99a324046c40&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDE5WU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCdqeec6C4HKGRPkh1vwuABK0QPZdTF1UhXNY15lQ%2BNXgIhAO%2Bh4VTt3rt8qD%2BGuf81PvH4pP0RZ4tYv8ZAzY0BUgFYKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo6cNY3MoFK8NR284q3AMc0R2BBvuUCUmavrTa%2BBIvyQtQ1%2B8GdQDYHgMPh44X9jb24bCVEnPlOwd9%2B4jKDvDOdE0mV4IvoZlHGsloMy3q2rzcOeAQozkwgYL%2BgpoNYZyy97kqbLdE19qMdrXcA6R4TSewghwoKjMiABAGhXJz%2F3NtZhCioZsP7K%2BPyFed1vigONOFHVmDFhfd8s1xbI%2F5kgZlT%2FY8QGLjFD6yw%2F35Szyw7minEe%2BSQkRUP2JsQ7D0wx4NRqmnva8AQWpuPjKSU9eWJFQo8TbPWWPRj3UKZoXXOyTY0ZGxpEtgXmPrTVmDDO2MTkdBY6hm8J7oOkjmNLnGZx%2F%2BguR9Wp1NQ1qEkBZNtea2pYjAHrC6%2ByELYd5zbtlbAy9lE1of4t3SWjKeZ2u0Sx5YaaW0LGPD53kA7lajb1h1DJHXHWdeEdpQFBIfT2ijSqw%2Fsq1BtoWe2RNNUPVeSuIskGMImF1OrGNUw5yx04sxYitNR%2FzpwviZYafN10wAzPnCIZ0cBpL9A%2BiUBWFzsKcFcNfcC4vPXAtvPiXk5ZuEObwGlIcMzHcE5UvbxGjmrmgdosxasAdyyuN3EgZuFudng8Nj2MKBFFQk3ggX8Y%2BjnS4YcKoQqUlGY2QrVgZtoFlBU5gMRzCUx42%2BBjqkAeguPrvbFNih9Ept9eYax3JoEHbZUXwvicvOEyXvwCENLswejrYKQB17bxglky0SzGTCd6i6emVnEL8lnf6zareOp60myYwIKyr7VLXsj9EMl3N4UWfJtueWmhjsdZDII0aA2QYefzD7BZ20WdjbrolMUryf8Qn%2FbQRWNKPVHVvG7jTgj0S1zi6V9OdVqLE4lquk26vgGLpJE2%2BpuxBaUg4GnL5Z&X-Amz-Signature=3b6b5759a8564c779072581521c32bcc0ef883579d608e8522c2a5878a3bfdf7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDE5WU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCdqeec6C4HKGRPkh1vwuABK0QPZdTF1UhXNY15lQ%2BNXgIhAO%2Bh4VTt3rt8qD%2BGuf81PvH4pP0RZ4tYv8ZAzY0BUgFYKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo6cNY3MoFK8NR284q3AMc0R2BBvuUCUmavrTa%2BBIvyQtQ1%2B8GdQDYHgMPh44X9jb24bCVEnPlOwd9%2B4jKDvDOdE0mV4IvoZlHGsloMy3q2rzcOeAQozkwgYL%2BgpoNYZyy97kqbLdE19qMdrXcA6R4TSewghwoKjMiABAGhXJz%2F3NtZhCioZsP7K%2BPyFed1vigONOFHVmDFhfd8s1xbI%2F5kgZlT%2FY8QGLjFD6yw%2F35Szyw7minEe%2BSQkRUP2JsQ7D0wx4NRqmnva8AQWpuPjKSU9eWJFQo8TbPWWPRj3UKZoXXOyTY0ZGxpEtgXmPrTVmDDO2MTkdBY6hm8J7oOkjmNLnGZx%2F%2BguR9Wp1NQ1qEkBZNtea2pYjAHrC6%2ByELYd5zbtlbAy9lE1of4t3SWjKeZ2u0Sx5YaaW0LGPD53kA7lajb1h1DJHXHWdeEdpQFBIfT2ijSqw%2Fsq1BtoWe2RNNUPVeSuIskGMImF1OrGNUw5yx04sxYitNR%2FzpwviZYafN10wAzPnCIZ0cBpL9A%2BiUBWFzsKcFcNfcC4vPXAtvPiXk5ZuEObwGlIcMzHcE5UvbxGjmrmgdosxasAdyyuN3EgZuFudng8Nj2MKBFFQk3ggX8Y%2BjnS4YcKoQqUlGY2QrVgZtoFlBU5gMRzCUx42%2BBjqkAeguPrvbFNih9Ept9eYax3JoEHbZUXwvicvOEyXvwCENLswejrYKQB17bxglky0SzGTCd6i6emVnEL8lnf6zareOp60myYwIKyr7VLXsj9EMl3N4UWfJtueWmhjsdZDII0aA2QYefzD7BZ20WdjbrolMUryf8Qn%2FbQRWNKPVHVvG7jTgj0S1zi6V9OdVqLE4lquk26vgGLpJE2%2BpuxBaUg4GnL5Z&X-Amz-Signature=f546187c48a6dc09859ea2b2c19bfceb3ff62699c5af50fa66750c40a2c71298&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDE5WU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCdqeec6C4HKGRPkh1vwuABK0QPZdTF1UhXNY15lQ%2BNXgIhAO%2Bh4VTt3rt8qD%2BGuf81PvH4pP0RZ4tYv8ZAzY0BUgFYKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo6cNY3MoFK8NR284q3AMc0R2BBvuUCUmavrTa%2BBIvyQtQ1%2B8GdQDYHgMPh44X9jb24bCVEnPlOwd9%2B4jKDvDOdE0mV4IvoZlHGsloMy3q2rzcOeAQozkwgYL%2BgpoNYZyy97kqbLdE19qMdrXcA6R4TSewghwoKjMiABAGhXJz%2F3NtZhCioZsP7K%2BPyFed1vigONOFHVmDFhfd8s1xbI%2F5kgZlT%2FY8QGLjFD6yw%2F35Szyw7minEe%2BSQkRUP2JsQ7D0wx4NRqmnva8AQWpuPjKSU9eWJFQo8TbPWWPRj3UKZoXXOyTY0ZGxpEtgXmPrTVmDDO2MTkdBY6hm8J7oOkjmNLnGZx%2F%2BguR9Wp1NQ1qEkBZNtea2pYjAHrC6%2ByELYd5zbtlbAy9lE1of4t3SWjKeZ2u0Sx5YaaW0LGPD53kA7lajb1h1DJHXHWdeEdpQFBIfT2ijSqw%2Fsq1BtoWe2RNNUPVeSuIskGMImF1OrGNUw5yx04sxYitNR%2FzpwviZYafN10wAzPnCIZ0cBpL9A%2BiUBWFzsKcFcNfcC4vPXAtvPiXk5ZuEObwGlIcMzHcE5UvbxGjmrmgdosxasAdyyuN3EgZuFudng8Nj2MKBFFQk3ggX8Y%2BjnS4YcKoQqUlGY2QrVgZtoFlBU5gMRzCUx42%2BBjqkAeguPrvbFNih9Ept9eYax3JoEHbZUXwvicvOEyXvwCENLswejrYKQB17bxglky0SzGTCd6i6emVnEL8lnf6zareOp60myYwIKyr7VLXsj9EMl3N4UWfJtueWmhjsdZDII0aA2QYefzD7BZ20WdjbrolMUryf8Qn%2FbQRWNKPVHVvG7jTgj0S1zi6V9OdVqLE4lquk26vgGLpJE2%2BpuxBaUg4GnL5Z&X-Amz-Signature=c6da8a61ae011f9f69f949c18a2f89c20cf944ced9a98f05f1a69b542d097c17&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDE5WU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCdqeec6C4HKGRPkh1vwuABK0QPZdTF1UhXNY15lQ%2BNXgIhAO%2Bh4VTt3rt8qD%2BGuf81PvH4pP0RZ4tYv8ZAzY0BUgFYKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo6cNY3MoFK8NR284q3AMc0R2BBvuUCUmavrTa%2BBIvyQtQ1%2B8GdQDYHgMPh44X9jb24bCVEnPlOwd9%2B4jKDvDOdE0mV4IvoZlHGsloMy3q2rzcOeAQozkwgYL%2BgpoNYZyy97kqbLdE19qMdrXcA6R4TSewghwoKjMiABAGhXJz%2F3NtZhCioZsP7K%2BPyFed1vigONOFHVmDFhfd8s1xbI%2F5kgZlT%2FY8QGLjFD6yw%2F35Szyw7minEe%2BSQkRUP2JsQ7D0wx4NRqmnva8AQWpuPjKSU9eWJFQo8TbPWWPRj3UKZoXXOyTY0ZGxpEtgXmPrTVmDDO2MTkdBY6hm8J7oOkjmNLnGZx%2F%2BguR9Wp1NQ1qEkBZNtea2pYjAHrC6%2ByELYd5zbtlbAy9lE1of4t3SWjKeZ2u0Sx5YaaW0LGPD53kA7lajb1h1DJHXHWdeEdpQFBIfT2ijSqw%2Fsq1BtoWe2RNNUPVeSuIskGMImF1OrGNUw5yx04sxYitNR%2FzpwviZYafN10wAzPnCIZ0cBpL9A%2BiUBWFzsKcFcNfcC4vPXAtvPiXk5ZuEObwGlIcMzHcE5UvbxGjmrmgdosxasAdyyuN3EgZuFudng8Nj2MKBFFQk3ggX8Y%2BjnS4YcKoQqUlGY2QrVgZtoFlBU5gMRzCUx42%2BBjqkAeguPrvbFNih9Ept9eYax3JoEHbZUXwvicvOEyXvwCENLswejrYKQB17bxglky0SzGTCd6i6emVnEL8lnf6zareOp60myYwIKyr7VLXsj9EMl3N4UWfJtueWmhjsdZDII0aA2QYefzD7BZ20WdjbrolMUryf8Qn%2FbQRWNKPVHVvG7jTgj0S1zi6V9OdVqLE4lquk26vgGLpJE2%2BpuxBaUg4GnL5Z&X-Amz-Signature=6034f8798c49cc672043d24c640e70e94d4a18d1c7cfcc9dcc2c74fc57044a14&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDE5WU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCdqeec6C4HKGRPkh1vwuABK0QPZdTF1UhXNY15lQ%2BNXgIhAO%2Bh4VTt3rt8qD%2BGuf81PvH4pP0RZ4tYv8ZAzY0BUgFYKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo6cNY3MoFK8NR284q3AMc0R2BBvuUCUmavrTa%2BBIvyQtQ1%2B8GdQDYHgMPh44X9jb24bCVEnPlOwd9%2B4jKDvDOdE0mV4IvoZlHGsloMy3q2rzcOeAQozkwgYL%2BgpoNYZyy97kqbLdE19qMdrXcA6R4TSewghwoKjMiABAGhXJz%2F3NtZhCioZsP7K%2BPyFed1vigONOFHVmDFhfd8s1xbI%2F5kgZlT%2FY8QGLjFD6yw%2F35Szyw7minEe%2BSQkRUP2JsQ7D0wx4NRqmnva8AQWpuPjKSU9eWJFQo8TbPWWPRj3UKZoXXOyTY0ZGxpEtgXmPrTVmDDO2MTkdBY6hm8J7oOkjmNLnGZx%2F%2BguR9Wp1NQ1qEkBZNtea2pYjAHrC6%2ByELYd5zbtlbAy9lE1of4t3SWjKeZ2u0Sx5YaaW0LGPD53kA7lajb1h1DJHXHWdeEdpQFBIfT2ijSqw%2Fsq1BtoWe2RNNUPVeSuIskGMImF1OrGNUw5yx04sxYitNR%2FzpwviZYafN10wAzPnCIZ0cBpL9A%2BiUBWFzsKcFcNfcC4vPXAtvPiXk5ZuEObwGlIcMzHcE5UvbxGjmrmgdosxasAdyyuN3EgZuFudng8Nj2MKBFFQk3ggX8Y%2BjnS4YcKoQqUlGY2QrVgZtoFlBU5gMRzCUx42%2BBjqkAeguPrvbFNih9Ept9eYax3JoEHbZUXwvicvOEyXvwCENLswejrYKQB17bxglky0SzGTCd6i6emVnEL8lnf6zareOp60myYwIKyr7VLXsj9EMl3N4UWfJtueWmhjsdZDII0aA2QYefzD7BZ20WdjbrolMUryf8Qn%2FbQRWNKPVHVvG7jTgj0S1zi6V9OdVqLE4lquk26vgGLpJE2%2BpuxBaUg4GnL5Z&X-Amz-Signature=3ded179661891d6d2f593b03449e91d89b7c6f6f7d1a449d3afcfabc1fcd939b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
