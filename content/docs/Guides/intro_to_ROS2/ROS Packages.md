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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZAILYR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxJ3e8DLcM%2Bv93TcJZV27K7q3U4DbpSZi6T3Jcj7cw3gIgHfu%2FXDX%2Fj6NFONnAQOpACqQxGn9dfqXrVrSriKZry7gq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO7CEQaQqKo1WoxZpSrcA1fLMNt4rvcQpGggYqWq1HRPSTSkKbgZoxOHrIOTWRvhv4bYz%2Fo9hFOiQjzY1ZKbkf%2FSWym%2FzQfiSuN6O4hOVsWRzH%2FM%2BhyA9uq1xnW21Y%2B6lOSuqdOj5xTFL4kueEKrFB8J0VQb2APK1u6H%2FiMbXSe63XwLjz3baRLyPWTKOOlbk9Nlk18XXu7mZ7ZrFkUuWUsrhYLc2HbCETf1QGFqz7F%2BK9Mgde2rfck2%2BZbThrecSwTgXQEI1VUWGjIAdaFbXqQ8%2F2kalN9AD0Ni4jH41HMjeIFinsqLe%2F%2BMx7LE0GniMYG8WRLOhSoRfRULebGixUrFTPGwk7FfKvBprZ9zsgR6nzxvddwXJJiF4Q%2FD8RvE74UpARz8EQnd6yXlnny65iC8z37FTr7NSCwQUTNWRnIjgtwHK1VPdZJm%2FLCOuQB6lKQXpgKTLnuelu86%2BmjF4Z3LbgkHbeCcq0eeM1vcIKa7vNnbAhTklapVay%2FGYBJuAmORj6izFxzyLch5w2JVZYdecq1872pIQ7jMmibKsSI4AISWGfB6N%2FBW%2FNQqpsSU0ixi0Ub3Zgx3r9vZtW5z%2FJKGVye5VdEuXxhjBisICLSl3ikZTlmutgLhU5ZllQCzTKfZvJOptT6fbwPvMKaxmr8GOqUB%2F6Ndyx5GNXAQYSUIFZtXjZh3rVySePnNUAixNrHWFIFE0K5e2qw8O4h4JhQBWnePCsTiv1CUsQx9l62LEh1F6rqW0DkRM7mU6wZSqAtTz%2BEkAyyUtjKNRakptHuQgNyDZEtF0UEYhk73GoKQiJSNEj2AVAW19%2B%2FfbIWSnJkN%2B%2FB%2BKtE95DG6m6aBDGJxmTas7s6jNPs5uQnVZ5DEPv2tOg%2BcDxuo&X-Amz-Signature=fd92d689da846a1d896381e1fd6ee8e3db1351e89bd728c298b50fc68e1c6184&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZAILYR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxJ3e8DLcM%2Bv93TcJZV27K7q3U4DbpSZi6T3Jcj7cw3gIgHfu%2FXDX%2Fj6NFONnAQOpACqQxGn9dfqXrVrSriKZry7gq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO7CEQaQqKo1WoxZpSrcA1fLMNt4rvcQpGggYqWq1HRPSTSkKbgZoxOHrIOTWRvhv4bYz%2Fo9hFOiQjzY1ZKbkf%2FSWym%2FzQfiSuN6O4hOVsWRzH%2FM%2BhyA9uq1xnW21Y%2B6lOSuqdOj5xTFL4kueEKrFB8J0VQb2APK1u6H%2FiMbXSe63XwLjz3baRLyPWTKOOlbk9Nlk18XXu7mZ7ZrFkUuWUsrhYLc2HbCETf1QGFqz7F%2BK9Mgde2rfck2%2BZbThrecSwTgXQEI1VUWGjIAdaFbXqQ8%2F2kalN9AD0Ni4jH41HMjeIFinsqLe%2F%2BMx7LE0GniMYG8WRLOhSoRfRULebGixUrFTPGwk7FfKvBprZ9zsgR6nzxvddwXJJiF4Q%2FD8RvE74UpARz8EQnd6yXlnny65iC8z37FTr7NSCwQUTNWRnIjgtwHK1VPdZJm%2FLCOuQB6lKQXpgKTLnuelu86%2BmjF4Z3LbgkHbeCcq0eeM1vcIKa7vNnbAhTklapVay%2FGYBJuAmORj6izFxzyLch5w2JVZYdecq1872pIQ7jMmibKsSI4AISWGfB6N%2FBW%2FNQqpsSU0ixi0Ub3Zgx3r9vZtW5z%2FJKGVye5VdEuXxhjBisICLSl3ikZTlmutgLhU5ZllQCzTKfZvJOptT6fbwPvMKaxmr8GOqUB%2F6Ndyx5GNXAQYSUIFZtXjZh3rVySePnNUAixNrHWFIFE0K5e2qw8O4h4JhQBWnePCsTiv1CUsQx9l62LEh1F6rqW0DkRM7mU6wZSqAtTz%2BEkAyyUtjKNRakptHuQgNyDZEtF0UEYhk73GoKQiJSNEj2AVAW19%2B%2FfbIWSnJkN%2B%2FB%2BKtE95DG6m6aBDGJxmTas7s6jNPs5uQnVZ5DEPv2tOg%2BcDxuo&X-Amz-Signature=d3365dbaf7b2970cea5472a08fc7a63b81b75b3bd3de89ef3adae2389a119138&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZAILYR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxJ3e8DLcM%2Bv93TcJZV27K7q3U4DbpSZi6T3Jcj7cw3gIgHfu%2FXDX%2Fj6NFONnAQOpACqQxGn9dfqXrVrSriKZry7gq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO7CEQaQqKo1WoxZpSrcA1fLMNt4rvcQpGggYqWq1HRPSTSkKbgZoxOHrIOTWRvhv4bYz%2Fo9hFOiQjzY1ZKbkf%2FSWym%2FzQfiSuN6O4hOVsWRzH%2FM%2BhyA9uq1xnW21Y%2B6lOSuqdOj5xTFL4kueEKrFB8J0VQb2APK1u6H%2FiMbXSe63XwLjz3baRLyPWTKOOlbk9Nlk18XXu7mZ7ZrFkUuWUsrhYLc2HbCETf1QGFqz7F%2BK9Mgde2rfck2%2BZbThrecSwTgXQEI1VUWGjIAdaFbXqQ8%2F2kalN9AD0Ni4jH41HMjeIFinsqLe%2F%2BMx7LE0GniMYG8WRLOhSoRfRULebGixUrFTPGwk7FfKvBprZ9zsgR6nzxvddwXJJiF4Q%2FD8RvE74UpARz8EQnd6yXlnny65iC8z37FTr7NSCwQUTNWRnIjgtwHK1VPdZJm%2FLCOuQB6lKQXpgKTLnuelu86%2BmjF4Z3LbgkHbeCcq0eeM1vcIKa7vNnbAhTklapVay%2FGYBJuAmORj6izFxzyLch5w2JVZYdecq1872pIQ7jMmibKsSI4AISWGfB6N%2FBW%2FNQqpsSU0ixi0Ub3Zgx3r9vZtW5z%2FJKGVye5VdEuXxhjBisICLSl3ikZTlmutgLhU5ZllQCzTKfZvJOptT6fbwPvMKaxmr8GOqUB%2F6Ndyx5GNXAQYSUIFZtXjZh3rVySePnNUAixNrHWFIFE0K5e2qw8O4h4JhQBWnePCsTiv1CUsQx9l62LEh1F6rqW0DkRM7mU6wZSqAtTz%2BEkAyyUtjKNRakptHuQgNyDZEtF0UEYhk73GoKQiJSNEj2AVAW19%2B%2FfbIWSnJkN%2B%2FB%2BKtE95DG6m6aBDGJxmTas7s6jNPs5uQnVZ5DEPv2tOg%2BcDxuo&X-Amz-Signature=f8e39186b5ef4581e2e97aefdb8c0fcd136b48309efd92027ee71960b0a1625a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZAILYR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxJ3e8DLcM%2Bv93TcJZV27K7q3U4DbpSZi6T3Jcj7cw3gIgHfu%2FXDX%2Fj6NFONnAQOpACqQxGn9dfqXrVrSriKZry7gq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO7CEQaQqKo1WoxZpSrcA1fLMNt4rvcQpGggYqWq1HRPSTSkKbgZoxOHrIOTWRvhv4bYz%2Fo9hFOiQjzY1ZKbkf%2FSWym%2FzQfiSuN6O4hOVsWRzH%2FM%2BhyA9uq1xnW21Y%2B6lOSuqdOj5xTFL4kueEKrFB8J0VQb2APK1u6H%2FiMbXSe63XwLjz3baRLyPWTKOOlbk9Nlk18XXu7mZ7ZrFkUuWUsrhYLc2HbCETf1QGFqz7F%2BK9Mgde2rfck2%2BZbThrecSwTgXQEI1VUWGjIAdaFbXqQ8%2F2kalN9AD0Ni4jH41HMjeIFinsqLe%2F%2BMx7LE0GniMYG8WRLOhSoRfRULebGixUrFTPGwk7FfKvBprZ9zsgR6nzxvddwXJJiF4Q%2FD8RvE74UpARz8EQnd6yXlnny65iC8z37FTr7NSCwQUTNWRnIjgtwHK1VPdZJm%2FLCOuQB6lKQXpgKTLnuelu86%2BmjF4Z3LbgkHbeCcq0eeM1vcIKa7vNnbAhTklapVay%2FGYBJuAmORj6izFxzyLch5w2JVZYdecq1872pIQ7jMmibKsSI4AISWGfB6N%2FBW%2FNQqpsSU0ixi0Ub3Zgx3r9vZtW5z%2FJKGVye5VdEuXxhjBisICLSl3ikZTlmutgLhU5ZllQCzTKfZvJOptT6fbwPvMKaxmr8GOqUB%2F6Ndyx5GNXAQYSUIFZtXjZh3rVySePnNUAixNrHWFIFE0K5e2qw8O4h4JhQBWnePCsTiv1CUsQx9l62LEh1F6rqW0DkRM7mU6wZSqAtTz%2BEkAyyUtjKNRakptHuQgNyDZEtF0UEYhk73GoKQiJSNEj2AVAW19%2B%2FfbIWSnJkN%2B%2FB%2BKtE95DG6m6aBDGJxmTas7s6jNPs5uQnVZ5DEPv2tOg%2BcDxuo&X-Amz-Signature=7c2ccf340d0d06b527ae4ce380a60b1f4f16cf992e2121be290b7a636bf63eee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZAILYR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxJ3e8DLcM%2Bv93TcJZV27K7q3U4DbpSZi6T3Jcj7cw3gIgHfu%2FXDX%2Fj6NFONnAQOpACqQxGn9dfqXrVrSriKZry7gq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO7CEQaQqKo1WoxZpSrcA1fLMNt4rvcQpGggYqWq1HRPSTSkKbgZoxOHrIOTWRvhv4bYz%2Fo9hFOiQjzY1ZKbkf%2FSWym%2FzQfiSuN6O4hOVsWRzH%2FM%2BhyA9uq1xnW21Y%2B6lOSuqdOj5xTFL4kueEKrFB8J0VQb2APK1u6H%2FiMbXSe63XwLjz3baRLyPWTKOOlbk9Nlk18XXu7mZ7ZrFkUuWUsrhYLc2HbCETf1QGFqz7F%2BK9Mgde2rfck2%2BZbThrecSwTgXQEI1VUWGjIAdaFbXqQ8%2F2kalN9AD0Ni4jH41HMjeIFinsqLe%2F%2BMx7LE0GniMYG8WRLOhSoRfRULebGixUrFTPGwk7FfKvBprZ9zsgR6nzxvddwXJJiF4Q%2FD8RvE74UpARz8EQnd6yXlnny65iC8z37FTr7NSCwQUTNWRnIjgtwHK1VPdZJm%2FLCOuQB6lKQXpgKTLnuelu86%2BmjF4Z3LbgkHbeCcq0eeM1vcIKa7vNnbAhTklapVay%2FGYBJuAmORj6izFxzyLch5w2JVZYdecq1872pIQ7jMmibKsSI4AISWGfB6N%2FBW%2FNQqpsSU0ixi0Ub3Zgx3r9vZtW5z%2FJKGVye5VdEuXxhjBisICLSl3ikZTlmutgLhU5ZllQCzTKfZvJOptT6fbwPvMKaxmr8GOqUB%2F6Ndyx5GNXAQYSUIFZtXjZh3rVySePnNUAixNrHWFIFE0K5e2qw8O4h4JhQBWnePCsTiv1CUsQx9l62LEh1F6rqW0DkRM7mU6wZSqAtTz%2BEkAyyUtjKNRakptHuQgNyDZEtF0UEYhk73GoKQiJSNEj2AVAW19%2B%2FfbIWSnJkN%2B%2FB%2BKtE95DG6m6aBDGJxmTas7s6jNPs5uQnVZ5DEPv2tOg%2BcDxuo&X-Amz-Signature=41339684ce92dd83faf2501995e604a3b4f46bcea2243192c8661a96eb0b1e65&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZAILYR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxJ3e8DLcM%2Bv93TcJZV27K7q3U4DbpSZi6T3Jcj7cw3gIgHfu%2FXDX%2Fj6NFONnAQOpACqQxGn9dfqXrVrSriKZry7gq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO7CEQaQqKo1WoxZpSrcA1fLMNt4rvcQpGggYqWq1HRPSTSkKbgZoxOHrIOTWRvhv4bYz%2Fo9hFOiQjzY1ZKbkf%2FSWym%2FzQfiSuN6O4hOVsWRzH%2FM%2BhyA9uq1xnW21Y%2B6lOSuqdOj5xTFL4kueEKrFB8J0VQb2APK1u6H%2FiMbXSe63XwLjz3baRLyPWTKOOlbk9Nlk18XXu7mZ7ZrFkUuWUsrhYLc2HbCETf1QGFqz7F%2BK9Mgde2rfck2%2BZbThrecSwTgXQEI1VUWGjIAdaFbXqQ8%2F2kalN9AD0Ni4jH41HMjeIFinsqLe%2F%2BMx7LE0GniMYG8WRLOhSoRfRULebGixUrFTPGwk7FfKvBprZ9zsgR6nzxvddwXJJiF4Q%2FD8RvE74UpARz8EQnd6yXlnny65iC8z37FTr7NSCwQUTNWRnIjgtwHK1VPdZJm%2FLCOuQB6lKQXpgKTLnuelu86%2BmjF4Z3LbgkHbeCcq0eeM1vcIKa7vNnbAhTklapVay%2FGYBJuAmORj6izFxzyLch5w2JVZYdecq1872pIQ7jMmibKsSI4AISWGfB6N%2FBW%2FNQqpsSU0ixi0Ub3Zgx3r9vZtW5z%2FJKGVye5VdEuXxhjBisICLSl3ikZTlmutgLhU5ZllQCzTKfZvJOptT6fbwPvMKaxmr8GOqUB%2F6Ndyx5GNXAQYSUIFZtXjZh3rVySePnNUAixNrHWFIFE0K5e2qw8O4h4JhQBWnePCsTiv1CUsQx9l62LEh1F6rqW0DkRM7mU6wZSqAtTz%2BEkAyyUtjKNRakptHuQgNyDZEtF0UEYhk73GoKQiJSNEj2AVAW19%2B%2FfbIWSnJkN%2B%2FB%2BKtE95DG6m6aBDGJxmTas7s6jNPs5uQnVZ5DEPv2tOg%2BcDxuo&X-Amz-Signature=a2c8e12b8b00056d0c7eb8afa7b676d73cf2caaf0db2c391a93213ac8118f4d1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZAILYR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxJ3e8DLcM%2Bv93TcJZV27K7q3U4DbpSZi6T3Jcj7cw3gIgHfu%2FXDX%2Fj6NFONnAQOpACqQxGn9dfqXrVrSriKZry7gq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDO7CEQaQqKo1WoxZpSrcA1fLMNt4rvcQpGggYqWq1HRPSTSkKbgZoxOHrIOTWRvhv4bYz%2Fo9hFOiQjzY1ZKbkf%2FSWym%2FzQfiSuN6O4hOVsWRzH%2FM%2BhyA9uq1xnW21Y%2B6lOSuqdOj5xTFL4kueEKrFB8J0VQb2APK1u6H%2FiMbXSe63XwLjz3baRLyPWTKOOlbk9Nlk18XXu7mZ7ZrFkUuWUsrhYLc2HbCETf1QGFqz7F%2BK9Mgde2rfck2%2BZbThrecSwTgXQEI1VUWGjIAdaFbXqQ8%2F2kalN9AD0Ni4jH41HMjeIFinsqLe%2F%2BMx7LE0GniMYG8WRLOhSoRfRULebGixUrFTPGwk7FfKvBprZ9zsgR6nzxvddwXJJiF4Q%2FD8RvE74UpARz8EQnd6yXlnny65iC8z37FTr7NSCwQUTNWRnIjgtwHK1VPdZJm%2FLCOuQB6lKQXpgKTLnuelu86%2BmjF4Z3LbgkHbeCcq0eeM1vcIKa7vNnbAhTklapVay%2FGYBJuAmORj6izFxzyLch5w2JVZYdecq1872pIQ7jMmibKsSI4AISWGfB6N%2FBW%2FNQqpsSU0ixi0Ub3Zgx3r9vZtW5z%2FJKGVye5VdEuXxhjBisICLSl3ikZTlmutgLhU5ZllQCzTKfZvJOptT6fbwPvMKaxmr8GOqUB%2F6Ndyx5GNXAQYSUIFZtXjZh3rVySePnNUAixNrHWFIFE0K5e2qw8O4h4JhQBWnePCsTiv1CUsQx9l62LEh1F6rqW0DkRM7mU6wZSqAtTz%2BEkAyyUtjKNRakptHuQgNyDZEtF0UEYhk73GoKQiJSNEj2AVAW19%2B%2FfbIWSnJkN%2B%2FB%2BKtE95DG6m6aBDGJxmTas7s6jNPs5uQnVZ5DEPv2tOg%2BcDxuo&X-Amz-Signature=76a6b7732321ba2c4e21d76f394d3a11c62487af37a0e36da96f01853c99bd64&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
