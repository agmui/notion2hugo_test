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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N2RQJCY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCibs5XusaomTkLh%2B8tzKmLs%2BWDbR6nyPXYtTn3tOG05QIhAIDSv8bvMxS7jiY4Flg7UsOvrc4%2FAXFXTeqGYEifLceXKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFo85ve6BMVtS%2Bfroq3AOnw3fnBSsbgDuuzZkKwchg292bWUMugC2MuSkjFyHhOppCRVCAb2DCFYGu%2FTbFZEaGn427jva5dkSc91JEnp6anXTfavo3EyW9AwU4c%2Bckeqqf4rLpeUtfQKaH6LFhCTE0IQlEwWPA2glVUt1oqJTEZDu8iE7%2FBUXAPgQ5mmannmw7DjfnlJ8z8%2B6SdDJUjJg0fhG6rBzw5187hbtbudZR5YZBXEKhqa6M9WkLyaK1xpl8PD8qHOi7rmzZyytCnxKg7IOrKvbyeyEYAxoBWJhC76R7T%2BsR%2FRZfJv38xgV3ZXqwl4RUKZmZ4PL%2Fi8P%2BQ8KGtSZOFowiap9v0dkaZtSN%2F4JbM3ZebmimiqNm9fcN2ZKlUCSHSTnBBqiLRlsmbjFqEVwiq%2FB0c8MrmwCdGJBTDJNNbeceLrxX0cqF%2Ff6fmM992mtPKbwuNh7UQu9pctxgSKaNXSarIbvu6H7jwC%2FR7tNcnc1mtW7WEPuhdx%2FiWZH4oA6HyGRiMwcSKixKu9iYyh6MxzjYiawdNJoqo2J083AEz3u1t98rnlDQrCGiH%2F5LXUYLhHWzyK%2B1RB50K%2Fc0ys5I6T1qqiTC5Usp%2BWI3tZqDgN0%2B%2BqagnPoF4SVxVz7zyPCKW2iZ4rk4ljDm0%2Be%2FBjqkARN0s1ghys1wLKl6uPqPn4RmgiP1k2B3309%2FfvneXhYrC%2BMQWy9tPgJzOFXF3duEbd6x7QCNGvu%2F%2FDhWEU%2BukhopODu1%2FF64hqhOw9Q9YOoQHQh8KrfXCYVg%2FgFiu9fi2JAUyfhOEjlvgyrwF4rORDg2g%2BTunNV52pfvHQbQ7etetsWyiJvRz2MyIAQAzM4DKc1zzCaN3zPjJ9%2FzudPyYXl6VFAS&X-Amz-Signature=c04308447641b2d08aa77b6ebd98273fefa8f0abb198a60f1b6413c66aa16cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N2RQJCY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCibs5XusaomTkLh%2B8tzKmLs%2BWDbR6nyPXYtTn3tOG05QIhAIDSv8bvMxS7jiY4Flg7UsOvrc4%2FAXFXTeqGYEifLceXKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFo85ve6BMVtS%2Bfroq3AOnw3fnBSsbgDuuzZkKwchg292bWUMugC2MuSkjFyHhOppCRVCAb2DCFYGu%2FTbFZEaGn427jva5dkSc91JEnp6anXTfavo3EyW9AwU4c%2Bckeqqf4rLpeUtfQKaH6LFhCTE0IQlEwWPA2glVUt1oqJTEZDu8iE7%2FBUXAPgQ5mmannmw7DjfnlJ8z8%2B6SdDJUjJg0fhG6rBzw5187hbtbudZR5YZBXEKhqa6M9WkLyaK1xpl8PD8qHOi7rmzZyytCnxKg7IOrKvbyeyEYAxoBWJhC76R7T%2BsR%2FRZfJv38xgV3ZXqwl4RUKZmZ4PL%2Fi8P%2BQ8KGtSZOFowiap9v0dkaZtSN%2F4JbM3ZebmimiqNm9fcN2ZKlUCSHSTnBBqiLRlsmbjFqEVwiq%2FB0c8MrmwCdGJBTDJNNbeceLrxX0cqF%2Ff6fmM992mtPKbwuNh7UQu9pctxgSKaNXSarIbvu6H7jwC%2FR7tNcnc1mtW7WEPuhdx%2FiWZH4oA6HyGRiMwcSKixKu9iYyh6MxzjYiawdNJoqo2J083AEz3u1t98rnlDQrCGiH%2F5LXUYLhHWzyK%2B1RB50K%2Fc0ys5I6T1qqiTC5Usp%2BWI3tZqDgN0%2B%2BqagnPoF4SVxVz7zyPCKW2iZ4rk4ljDm0%2Be%2FBjqkARN0s1ghys1wLKl6uPqPn4RmgiP1k2B3309%2FfvneXhYrC%2BMQWy9tPgJzOFXF3duEbd6x7QCNGvu%2F%2FDhWEU%2BukhopODu1%2FF64hqhOw9Q9YOoQHQh8KrfXCYVg%2FgFiu9fi2JAUyfhOEjlvgyrwF4rORDg2g%2BTunNV52pfvHQbQ7etetsWyiJvRz2MyIAQAzM4DKc1zzCaN3zPjJ9%2FzudPyYXl6VFAS&X-Amz-Signature=7b41d3f71a9686447b1a7aa35b332272703ed92a64826a732dd0a5220f7c8691&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N2RQJCY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCibs5XusaomTkLh%2B8tzKmLs%2BWDbR6nyPXYtTn3tOG05QIhAIDSv8bvMxS7jiY4Flg7UsOvrc4%2FAXFXTeqGYEifLceXKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFo85ve6BMVtS%2Bfroq3AOnw3fnBSsbgDuuzZkKwchg292bWUMugC2MuSkjFyHhOppCRVCAb2DCFYGu%2FTbFZEaGn427jva5dkSc91JEnp6anXTfavo3EyW9AwU4c%2Bckeqqf4rLpeUtfQKaH6LFhCTE0IQlEwWPA2glVUt1oqJTEZDu8iE7%2FBUXAPgQ5mmannmw7DjfnlJ8z8%2B6SdDJUjJg0fhG6rBzw5187hbtbudZR5YZBXEKhqa6M9WkLyaK1xpl8PD8qHOi7rmzZyytCnxKg7IOrKvbyeyEYAxoBWJhC76R7T%2BsR%2FRZfJv38xgV3ZXqwl4RUKZmZ4PL%2Fi8P%2BQ8KGtSZOFowiap9v0dkaZtSN%2F4JbM3ZebmimiqNm9fcN2ZKlUCSHSTnBBqiLRlsmbjFqEVwiq%2FB0c8MrmwCdGJBTDJNNbeceLrxX0cqF%2Ff6fmM992mtPKbwuNh7UQu9pctxgSKaNXSarIbvu6H7jwC%2FR7tNcnc1mtW7WEPuhdx%2FiWZH4oA6HyGRiMwcSKixKu9iYyh6MxzjYiawdNJoqo2J083AEz3u1t98rnlDQrCGiH%2F5LXUYLhHWzyK%2B1RB50K%2Fc0ys5I6T1qqiTC5Usp%2BWI3tZqDgN0%2B%2BqagnPoF4SVxVz7zyPCKW2iZ4rk4ljDm0%2Be%2FBjqkARN0s1ghys1wLKl6uPqPn4RmgiP1k2B3309%2FfvneXhYrC%2BMQWy9tPgJzOFXF3duEbd6x7QCNGvu%2F%2FDhWEU%2BukhopODu1%2FF64hqhOw9Q9YOoQHQh8KrfXCYVg%2FgFiu9fi2JAUyfhOEjlvgyrwF4rORDg2g%2BTunNV52pfvHQbQ7etetsWyiJvRz2MyIAQAzM4DKc1zzCaN3zPjJ9%2FzudPyYXl6VFAS&X-Amz-Signature=da510f62c0ba004c1c33097d07566507e19e4ffaffae8159199fc9e9fc0969a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N2RQJCY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCibs5XusaomTkLh%2B8tzKmLs%2BWDbR6nyPXYtTn3tOG05QIhAIDSv8bvMxS7jiY4Flg7UsOvrc4%2FAXFXTeqGYEifLceXKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFo85ve6BMVtS%2Bfroq3AOnw3fnBSsbgDuuzZkKwchg292bWUMugC2MuSkjFyHhOppCRVCAb2DCFYGu%2FTbFZEaGn427jva5dkSc91JEnp6anXTfavo3EyW9AwU4c%2Bckeqqf4rLpeUtfQKaH6LFhCTE0IQlEwWPA2glVUt1oqJTEZDu8iE7%2FBUXAPgQ5mmannmw7DjfnlJ8z8%2B6SdDJUjJg0fhG6rBzw5187hbtbudZR5YZBXEKhqa6M9WkLyaK1xpl8PD8qHOi7rmzZyytCnxKg7IOrKvbyeyEYAxoBWJhC76R7T%2BsR%2FRZfJv38xgV3ZXqwl4RUKZmZ4PL%2Fi8P%2BQ8KGtSZOFowiap9v0dkaZtSN%2F4JbM3ZebmimiqNm9fcN2ZKlUCSHSTnBBqiLRlsmbjFqEVwiq%2FB0c8MrmwCdGJBTDJNNbeceLrxX0cqF%2Ff6fmM992mtPKbwuNh7UQu9pctxgSKaNXSarIbvu6H7jwC%2FR7tNcnc1mtW7WEPuhdx%2FiWZH4oA6HyGRiMwcSKixKu9iYyh6MxzjYiawdNJoqo2J083AEz3u1t98rnlDQrCGiH%2F5LXUYLhHWzyK%2B1RB50K%2Fc0ys5I6T1qqiTC5Usp%2BWI3tZqDgN0%2B%2BqagnPoF4SVxVz7zyPCKW2iZ4rk4ljDm0%2Be%2FBjqkARN0s1ghys1wLKl6uPqPn4RmgiP1k2B3309%2FfvneXhYrC%2BMQWy9tPgJzOFXF3duEbd6x7QCNGvu%2F%2FDhWEU%2BukhopODu1%2FF64hqhOw9Q9YOoQHQh8KrfXCYVg%2FgFiu9fi2JAUyfhOEjlvgyrwF4rORDg2g%2BTunNV52pfvHQbQ7etetsWyiJvRz2MyIAQAzM4DKc1zzCaN3zPjJ9%2FzudPyYXl6VFAS&X-Amz-Signature=d36e961217db1de4cbeddfe17f4a60c22f6df98664157c8ab0379991a8226891&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N2RQJCY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCibs5XusaomTkLh%2B8tzKmLs%2BWDbR6nyPXYtTn3tOG05QIhAIDSv8bvMxS7jiY4Flg7UsOvrc4%2FAXFXTeqGYEifLceXKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFo85ve6BMVtS%2Bfroq3AOnw3fnBSsbgDuuzZkKwchg292bWUMugC2MuSkjFyHhOppCRVCAb2DCFYGu%2FTbFZEaGn427jva5dkSc91JEnp6anXTfavo3EyW9AwU4c%2Bckeqqf4rLpeUtfQKaH6LFhCTE0IQlEwWPA2glVUt1oqJTEZDu8iE7%2FBUXAPgQ5mmannmw7DjfnlJ8z8%2B6SdDJUjJg0fhG6rBzw5187hbtbudZR5YZBXEKhqa6M9WkLyaK1xpl8PD8qHOi7rmzZyytCnxKg7IOrKvbyeyEYAxoBWJhC76R7T%2BsR%2FRZfJv38xgV3ZXqwl4RUKZmZ4PL%2Fi8P%2BQ8KGtSZOFowiap9v0dkaZtSN%2F4JbM3ZebmimiqNm9fcN2ZKlUCSHSTnBBqiLRlsmbjFqEVwiq%2FB0c8MrmwCdGJBTDJNNbeceLrxX0cqF%2Ff6fmM992mtPKbwuNh7UQu9pctxgSKaNXSarIbvu6H7jwC%2FR7tNcnc1mtW7WEPuhdx%2FiWZH4oA6HyGRiMwcSKixKu9iYyh6MxzjYiawdNJoqo2J083AEz3u1t98rnlDQrCGiH%2F5LXUYLhHWzyK%2B1RB50K%2Fc0ys5I6T1qqiTC5Usp%2BWI3tZqDgN0%2B%2BqagnPoF4SVxVz7zyPCKW2iZ4rk4ljDm0%2Be%2FBjqkARN0s1ghys1wLKl6uPqPn4RmgiP1k2B3309%2FfvneXhYrC%2BMQWy9tPgJzOFXF3duEbd6x7QCNGvu%2F%2FDhWEU%2BukhopODu1%2FF64hqhOw9Q9YOoQHQh8KrfXCYVg%2FgFiu9fi2JAUyfhOEjlvgyrwF4rORDg2g%2BTunNV52pfvHQbQ7etetsWyiJvRz2MyIAQAzM4DKc1zzCaN3zPjJ9%2FzudPyYXl6VFAS&X-Amz-Signature=5cf8bae86e4a0f06f9dee3fc1bc7244a140887ca91d34fc89f13baa45a5d8452&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N2RQJCY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCibs5XusaomTkLh%2B8tzKmLs%2BWDbR6nyPXYtTn3tOG05QIhAIDSv8bvMxS7jiY4Flg7UsOvrc4%2FAXFXTeqGYEifLceXKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFo85ve6BMVtS%2Bfroq3AOnw3fnBSsbgDuuzZkKwchg292bWUMugC2MuSkjFyHhOppCRVCAb2DCFYGu%2FTbFZEaGn427jva5dkSc91JEnp6anXTfavo3EyW9AwU4c%2Bckeqqf4rLpeUtfQKaH6LFhCTE0IQlEwWPA2glVUt1oqJTEZDu8iE7%2FBUXAPgQ5mmannmw7DjfnlJ8z8%2B6SdDJUjJg0fhG6rBzw5187hbtbudZR5YZBXEKhqa6M9WkLyaK1xpl8PD8qHOi7rmzZyytCnxKg7IOrKvbyeyEYAxoBWJhC76R7T%2BsR%2FRZfJv38xgV3ZXqwl4RUKZmZ4PL%2Fi8P%2BQ8KGtSZOFowiap9v0dkaZtSN%2F4JbM3ZebmimiqNm9fcN2ZKlUCSHSTnBBqiLRlsmbjFqEVwiq%2FB0c8MrmwCdGJBTDJNNbeceLrxX0cqF%2Ff6fmM992mtPKbwuNh7UQu9pctxgSKaNXSarIbvu6H7jwC%2FR7tNcnc1mtW7WEPuhdx%2FiWZH4oA6HyGRiMwcSKixKu9iYyh6MxzjYiawdNJoqo2J083AEz3u1t98rnlDQrCGiH%2F5LXUYLhHWzyK%2B1RB50K%2Fc0ys5I6T1qqiTC5Usp%2BWI3tZqDgN0%2B%2BqagnPoF4SVxVz7zyPCKW2iZ4rk4ljDm0%2Be%2FBjqkARN0s1ghys1wLKl6uPqPn4RmgiP1k2B3309%2FfvneXhYrC%2BMQWy9tPgJzOFXF3duEbd6x7QCNGvu%2F%2FDhWEU%2BukhopODu1%2FF64hqhOw9Q9YOoQHQh8KrfXCYVg%2FgFiu9fi2JAUyfhOEjlvgyrwF4rORDg2g%2BTunNV52pfvHQbQ7etetsWyiJvRz2MyIAQAzM4DKc1zzCaN3zPjJ9%2FzudPyYXl6VFAS&X-Amz-Signature=e95ed08e5d43ce8c0543cc36d3e0fc3e49eed9880b947d7cd90960d20b34b35f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N2RQJCY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCibs5XusaomTkLh%2B8tzKmLs%2BWDbR6nyPXYtTn3tOG05QIhAIDSv8bvMxS7jiY4Flg7UsOvrc4%2FAXFXTeqGYEifLceXKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFo85ve6BMVtS%2Bfroq3AOnw3fnBSsbgDuuzZkKwchg292bWUMugC2MuSkjFyHhOppCRVCAb2DCFYGu%2FTbFZEaGn427jva5dkSc91JEnp6anXTfavo3EyW9AwU4c%2Bckeqqf4rLpeUtfQKaH6LFhCTE0IQlEwWPA2glVUt1oqJTEZDu8iE7%2FBUXAPgQ5mmannmw7DjfnlJ8z8%2B6SdDJUjJg0fhG6rBzw5187hbtbudZR5YZBXEKhqa6M9WkLyaK1xpl8PD8qHOi7rmzZyytCnxKg7IOrKvbyeyEYAxoBWJhC76R7T%2BsR%2FRZfJv38xgV3ZXqwl4RUKZmZ4PL%2Fi8P%2BQ8KGtSZOFowiap9v0dkaZtSN%2F4JbM3ZebmimiqNm9fcN2ZKlUCSHSTnBBqiLRlsmbjFqEVwiq%2FB0c8MrmwCdGJBTDJNNbeceLrxX0cqF%2Ff6fmM992mtPKbwuNh7UQu9pctxgSKaNXSarIbvu6H7jwC%2FR7tNcnc1mtW7WEPuhdx%2FiWZH4oA6HyGRiMwcSKixKu9iYyh6MxzjYiawdNJoqo2J083AEz3u1t98rnlDQrCGiH%2F5LXUYLhHWzyK%2B1RB50K%2Fc0ys5I6T1qqiTC5Usp%2BWI3tZqDgN0%2B%2BqagnPoF4SVxVz7zyPCKW2iZ4rk4ljDm0%2Be%2FBjqkARN0s1ghys1wLKl6uPqPn4RmgiP1k2B3309%2FfvneXhYrC%2BMQWy9tPgJzOFXF3duEbd6x7QCNGvu%2F%2FDhWEU%2BukhopODu1%2FF64hqhOw9Q9YOoQHQh8KrfXCYVg%2FgFiu9fi2JAUyfhOEjlvgyrwF4rORDg2g%2BTunNV52pfvHQbQ7etetsWyiJvRz2MyIAQAzM4DKc1zzCaN3zPjJ9%2FzudPyYXl6VFAS&X-Amz-Signature=4e039e21adfac954286c8444259b17948c26db15cc4f737094da4cbed8ae4375&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
