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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JKOUWEU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCtB6I8ACZT8aJYuryXbuv4HQVHHWmpn1Gcs0C0rk%2B4KgIgdT1WAkqZw%2Bfdz%2FSz%2FfsoizFK0MNcDMIq9rzDRfA8WiQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzuhapMyAXr1ChMVCrcAxnm5mh6YL8C8eYOJGdfh7aOInfTEeBSAilS3ITMDRwl%2BvH4FZET2%2FLJHxWUoCB86cPJPxgyYz7uBjzs%2BjsHusmP6Zv4H%2BI9aB6R6xRes8COP0X8353SM56hfHMnyo9XqWgcl5yUJFenDyVCdLxVKU2v1WRl4oFvPW3XM3zoTVYfqYjAHf7fHYnIp9pQMKNgJfT2N0ffy2eVrTWx6XJUS25ikGVwzZscJfVwmXEhguI%2BdGIm4qMxKD%2BP9TNE4UoIUfTGQekR4Fhgoq9COFkNpfK7ZZ0af0Aeg6MSd0k7rz2ctD838cAxKGtAxQO1WDQgT9oMuu624fig%2FtyXMlKTDDpUjGa7OoHYl%2Fi1pMn22zHfWTz5rKhSbLHOnZQ4q9HTsUWhlRE1IZpmcEoa41SF2ohdRQaEXBmO6MQTy2qHoGehTKgyQ4aJrgxarmE1CS%2FaFhB9HGn3fzXzoyR3LqNK%2F0j9a%2BHe9kQCjGIuklFlMWEJWhu3HY6qQsJ9f1utvM8VXxzpCWFqUcyeF7%2B1kzkoEXuiaiJUtlgZj0TwTl0JMWX5rJnqB4eUlKOOxj0Zwm95uY3rOu2NItgiD6QK%2FwHESRAxpRrJVxVBL0K%2FF%2BO0QYzzlWsGVboK%2FwY%2BQmr%2BMJfZwcEGOqUBbzS3PAeIESlCOymJ5VhC2xsmlQVDPkaZ4KOUklNQU8Fc3jJSF9JgYoER4KRkDk0W5txA9RFYFDpFBg53o6aePWSQabfFbfzCFHOCY%2FbfRcjzIqlcds3UpqZvuXq98gRGW7HanCZNphLPL3ST5sZl0rnh6ndIFBFptctqd54d5JcC0n8bYqZ46DtKaFdjpTQNn6Rq9GQn7G8yFqlEhCMTr2fh7Byu&X-Amz-Signature=6a45b1debc2777e91355f4e4618b7cf8dfd435174f80aeb618f6367d28f1e4be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JKOUWEU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCtB6I8ACZT8aJYuryXbuv4HQVHHWmpn1Gcs0C0rk%2B4KgIgdT1WAkqZw%2Bfdz%2FSz%2FfsoizFK0MNcDMIq9rzDRfA8WiQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzuhapMyAXr1ChMVCrcAxnm5mh6YL8C8eYOJGdfh7aOInfTEeBSAilS3ITMDRwl%2BvH4FZET2%2FLJHxWUoCB86cPJPxgyYz7uBjzs%2BjsHusmP6Zv4H%2BI9aB6R6xRes8COP0X8353SM56hfHMnyo9XqWgcl5yUJFenDyVCdLxVKU2v1WRl4oFvPW3XM3zoTVYfqYjAHf7fHYnIp9pQMKNgJfT2N0ffy2eVrTWx6XJUS25ikGVwzZscJfVwmXEhguI%2BdGIm4qMxKD%2BP9TNE4UoIUfTGQekR4Fhgoq9COFkNpfK7ZZ0af0Aeg6MSd0k7rz2ctD838cAxKGtAxQO1WDQgT9oMuu624fig%2FtyXMlKTDDpUjGa7OoHYl%2Fi1pMn22zHfWTz5rKhSbLHOnZQ4q9HTsUWhlRE1IZpmcEoa41SF2ohdRQaEXBmO6MQTy2qHoGehTKgyQ4aJrgxarmE1CS%2FaFhB9HGn3fzXzoyR3LqNK%2F0j9a%2BHe9kQCjGIuklFlMWEJWhu3HY6qQsJ9f1utvM8VXxzpCWFqUcyeF7%2B1kzkoEXuiaiJUtlgZj0TwTl0JMWX5rJnqB4eUlKOOxj0Zwm95uY3rOu2NItgiD6QK%2FwHESRAxpRrJVxVBL0K%2FF%2BO0QYzzlWsGVboK%2FwY%2BQmr%2BMJfZwcEGOqUBbzS3PAeIESlCOymJ5VhC2xsmlQVDPkaZ4KOUklNQU8Fc3jJSF9JgYoER4KRkDk0W5txA9RFYFDpFBg53o6aePWSQabfFbfzCFHOCY%2FbfRcjzIqlcds3UpqZvuXq98gRGW7HanCZNphLPL3ST5sZl0rnh6ndIFBFptctqd54d5JcC0n8bYqZ46DtKaFdjpTQNn6Rq9GQn7G8yFqlEhCMTr2fh7Byu&X-Amz-Signature=54633cfbeeb10b3c1ad92ed63c92e1ac6b82c14633040985a16b42635c5b1ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JKOUWEU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCtB6I8ACZT8aJYuryXbuv4HQVHHWmpn1Gcs0C0rk%2B4KgIgdT1WAkqZw%2Bfdz%2FSz%2FfsoizFK0MNcDMIq9rzDRfA8WiQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzuhapMyAXr1ChMVCrcAxnm5mh6YL8C8eYOJGdfh7aOInfTEeBSAilS3ITMDRwl%2BvH4FZET2%2FLJHxWUoCB86cPJPxgyYz7uBjzs%2BjsHusmP6Zv4H%2BI9aB6R6xRes8COP0X8353SM56hfHMnyo9XqWgcl5yUJFenDyVCdLxVKU2v1WRl4oFvPW3XM3zoTVYfqYjAHf7fHYnIp9pQMKNgJfT2N0ffy2eVrTWx6XJUS25ikGVwzZscJfVwmXEhguI%2BdGIm4qMxKD%2BP9TNE4UoIUfTGQekR4Fhgoq9COFkNpfK7ZZ0af0Aeg6MSd0k7rz2ctD838cAxKGtAxQO1WDQgT9oMuu624fig%2FtyXMlKTDDpUjGa7OoHYl%2Fi1pMn22zHfWTz5rKhSbLHOnZQ4q9HTsUWhlRE1IZpmcEoa41SF2ohdRQaEXBmO6MQTy2qHoGehTKgyQ4aJrgxarmE1CS%2FaFhB9HGn3fzXzoyR3LqNK%2F0j9a%2BHe9kQCjGIuklFlMWEJWhu3HY6qQsJ9f1utvM8VXxzpCWFqUcyeF7%2B1kzkoEXuiaiJUtlgZj0TwTl0JMWX5rJnqB4eUlKOOxj0Zwm95uY3rOu2NItgiD6QK%2FwHESRAxpRrJVxVBL0K%2FF%2BO0QYzzlWsGVboK%2FwY%2BQmr%2BMJfZwcEGOqUBbzS3PAeIESlCOymJ5VhC2xsmlQVDPkaZ4KOUklNQU8Fc3jJSF9JgYoER4KRkDk0W5txA9RFYFDpFBg53o6aePWSQabfFbfzCFHOCY%2FbfRcjzIqlcds3UpqZvuXq98gRGW7HanCZNphLPL3ST5sZl0rnh6ndIFBFptctqd54d5JcC0n8bYqZ46DtKaFdjpTQNn6Rq9GQn7G8yFqlEhCMTr2fh7Byu&X-Amz-Signature=8bbe8c8d8e9ca0402f85c09e8205e0459eb8a94763ecaec0df4e1915f811e551&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JKOUWEU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCtB6I8ACZT8aJYuryXbuv4HQVHHWmpn1Gcs0C0rk%2B4KgIgdT1WAkqZw%2Bfdz%2FSz%2FfsoizFK0MNcDMIq9rzDRfA8WiQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzuhapMyAXr1ChMVCrcAxnm5mh6YL8C8eYOJGdfh7aOInfTEeBSAilS3ITMDRwl%2BvH4FZET2%2FLJHxWUoCB86cPJPxgyYz7uBjzs%2BjsHusmP6Zv4H%2BI9aB6R6xRes8COP0X8353SM56hfHMnyo9XqWgcl5yUJFenDyVCdLxVKU2v1WRl4oFvPW3XM3zoTVYfqYjAHf7fHYnIp9pQMKNgJfT2N0ffy2eVrTWx6XJUS25ikGVwzZscJfVwmXEhguI%2BdGIm4qMxKD%2BP9TNE4UoIUfTGQekR4Fhgoq9COFkNpfK7ZZ0af0Aeg6MSd0k7rz2ctD838cAxKGtAxQO1WDQgT9oMuu624fig%2FtyXMlKTDDpUjGa7OoHYl%2Fi1pMn22zHfWTz5rKhSbLHOnZQ4q9HTsUWhlRE1IZpmcEoa41SF2ohdRQaEXBmO6MQTy2qHoGehTKgyQ4aJrgxarmE1CS%2FaFhB9HGn3fzXzoyR3LqNK%2F0j9a%2BHe9kQCjGIuklFlMWEJWhu3HY6qQsJ9f1utvM8VXxzpCWFqUcyeF7%2B1kzkoEXuiaiJUtlgZj0TwTl0JMWX5rJnqB4eUlKOOxj0Zwm95uY3rOu2NItgiD6QK%2FwHESRAxpRrJVxVBL0K%2FF%2BO0QYzzlWsGVboK%2FwY%2BQmr%2BMJfZwcEGOqUBbzS3PAeIESlCOymJ5VhC2xsmlQVDPkaZ4KOUklNQU8Fc3jJSF9JgYoER4KRkDk0W5txA9RFYFDpFBg53o6aePWSQabfFbfzCFHOCY%2FbfRcjzIqlcds3UpqZvuXq98gRGW7HanCZNphLPL3ST5sZl0rnh6ndIFBFptctqd54d5JcC0n8bYqZ46DtKaFdjpTQNn6Rq9GQn7G8yFqlEhCMTr2fh7Byu&X-Amz-Signature=5ac128b3496ad9a57ce2911f8a06d89af6509f737b696c9b9c670b590c537eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JKOUWEU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCtB6I8ACZT8aJYuryXbuv4HQVHHWmpn1Gcs0C0rk%2B4KgIgdT1WAkqZw%2Bfdz%2FSz%2FfsoizFK0MNcDMIq9rzDRfA8WiQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzuhapMyAXr1ChMVCrcAxnm5mh6YL8C8eYOJGdfh7aOInfTEeBSAilS3ITMDRwl%2BvH4FZET2%2FLJHxWUoCB86cPJPxgyYz7uBjzs%2BjsHusmP6Zv4H%2BI9aB6R6xRes8COP0X8353SM56hfHMnyo9XqWgcl5yUJFenDyVCdLxVKU2v1WRl4oFvPW3XM3zoTVYfqYjAHf7fHYnIp9pQMKNgJfT2N0ffy2eVrTWx6XJUS25ikGVwzZscJfVwmXEhguI%2BdGIm4qMxKD%2BP9TNE4UoIUfTGQekR4Fhgoq9COFkNpfK7ZZ0af0Aeg6MSd0k7rz2ctD838cAxKGtAxQO1WDQgT9oMuu624fig%2FtyXMlKTDDpUjGa7OoHYl%2Fi1pMn22zHfWTz5rKhSbLHOnZQ4q9HTsUWhlRE1IZpmcEoa41SF2ohdRQaEXBmO6MQTy2qHoGehTKgyQ4aJrgxarmE1CS%2FaFhB9HGn3fzXzoyR3LqNK%2F0j9a%2BHe9kQCjGIuklFlMWEJWhu3HY6qQsJ9f1utvM8VXxzpCWFqUcyeF7%2B1kzkoEXuiaiJUtlgZj0TwTl0JMWX5rJnqB4eUlKOOxj0Zwm95uY3rOu2NItgiD6QK%2FwHESRAxpRrJVxVBL0K%2FF%2BO0QYzzlWsGVboK%2FwY%2BQmr%2BMJfZwcEGOqUBbzS3PAeIESlCOymJ5VhC2xsmlQVDPkaZ4KOUklNQU8Fc3jJSF9JgYoER4KRkDk0W5txA9RFYFDpFBg53o6aePWSQabfFbfzCFHOCY%2FbfRcjzIqlcds3UpqZvuXq98gRGW7HanCZNphLPL3ST5sZl0rnh6ndIFBFptctqd54d5JcC0n8bYqZ46DtKaFdjpTQNn6Rq9GQn7G8yFqlEhCMTr2fh7Byu&X-Amz-Signature=8042072b6f86e97e89e8578df78003e446cd28cb364f0be588ef2cf4c8f5ffe6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JKOUWEU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCtB6I8ACZT8aJYuryXbuv4HQVHHWmpn1Gcs0C0rk%2B4KgIgdT1WAkqZw%2Bfdz%2FSz%2FfsoizFK0MNcDMIq9rzDRfA8WiQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzuhapMyAXr1ChMVCrcAxnm5mh6YL8C8eYOJGdfh7aOInfTEeBSAilS3ITMDRwl%2BvH4FZET2%2FLJHxWUoCB86cPJPxgyYz7uBjzs%2BjsHusmP6Zv4H%2BI9aB6R6xRes8COP0X8353SM56hfHMnyo9XqWgcl5yUJFenDyVCdLxVKU2v1WRl4oFvPW3XM3zoTVYfqYjAHf7fHYnIp9pQMKNgJfT2N0ffy2eVrTWx6XJUS25ikGVwzZscJfVwmXEhguI%2BdGIm4qMxKD%2BP9TNE4UoIUfTGQekR4Fhgoq9COFkNpfK7ZZ0af0Aeg6MSd0k7rz2ctD838cAxKGtAxQO1WDQgT9oMuu624fig%2FtyXMlKTDDpUjGa7OoHYl%2Fi1pMn22zHfWTz5rKhSbLHOnZQ4q9HTsUWhlRE1IZpmcEoa41SF2ohdRQaEXBmO6MQTy2qHoGehTKgyQ4aJrgxarmE1CS%2FaFhB9HGn3fzXzoyR3LqNK%2F0j9a%2BHe9kQCjGIuklFlMWEJWhu3HY6qQsJ9f1utvM8VXxzpCWFqUcyeF7%2B1kzkoEXuiaiJUtlgZj0TwTl0JMWX5rJnqB4eUlKOOxj0Zwm95uY3rOu2NItgiD6QK%2FwHESRAxpRrJVxVBL0K%2FF%2BO0QYzzlWsGVboK%2FwY%2BQmr%2BMJfZwcEGOqUBbzS3PAeIESlCOymJ5VhC2xsmlQVDPkaZ4KOUklNQU8Fc3jJSF9JgYoER4KRkDk0W5txA9RFYFDpFBg53o6aePWSQabfFbfzCFHOCY%2FbfRcjzIqlcds3UpqZvuXq98gRGW7HanCZNphLPL3ST5sZl0rnh6ndIFBFptctqd54d5JcC0n8bYqZ46DtKaFdjpTQNn6Rq9GQn7G8yFqlEhCMTr2fh7Byu&X-Amz-Signature=8e29f1ac24b4c7205a4747768cf03c666f8e023ffb4763b70744d08e59564451&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JKOUWEU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCtB6I8ACZT8aJYuryXbuv4HQVHHWmpn1Gcs0C0rk%2B4KgIgdT1WAkqZw%2Bfdz%2FSz%2FfsoizFK0MNcDMIq9rzDRfA8WiQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzuhapMyAXr1ChMVCrcAxnm5mh6YL8C8eYOJGdfh7aOInfTEeBSAilS3ITMDRwl%2BvH4FZET2%2FLJHxWUoCB86cPJPxgyYz7uBjzs%2BjsHusmP6Zv4H%2BI9aB6R6xRes8COP0X8353SM56hfHMnyo9XqWgcl5yUJFenDyVCdLxVKU2v1WRl4oFvPW3XM3zoTVYfqYjAHf7fHYnIp9pQMKNgJfT2N0ffy2eVrTWx6XJUS25ikGVwzZscJfVwmXEhguI%2BdGIm4qMxKD%2BP9TNE4UoIUfTGQekR4Fhgoq9COFkNpfK7ZZ0af0Aeg6MSd0k7rz2ctD838cAxKGtAxQO1WDQgT9oMuu624fig%2FtyXMlKTDDpUjGa7OoHYl%2Fi1pMn22zHfWTz5rKhSbLHOnZQ4q9HTsUWhlRE1IZpmcEoa41SF2ohdRQaEXBmO6MQTy2qHoGehTKgyQ4aJrgxarmE1CS%2FaFhB9HGn3fzXzoyR3LqNK%2F0j9a%2BHe9kQCjGIuklFlMWEJWhu3HY6qQsJ9f1utvM8VXxzpCWFqUcyeF7%2B1kzkoEXuiaiJUtlgZj0TwTl0JMWX5rJnqB4eUlKOOxj0Zwm95uY3rOu2NItgiD6QK%2FwHESRAxpRrJVxVBL0K%2FF%2BO0QYzzlWsGVboK%2FwY%2BQmr%2BMJfZwcEGOqUBbzS3PAeIESlCOymJ5VhC2xsmlQVDPkaZ4KOUklNQU8Fc3jJSF9JgYoER4KRkDk0W5txA9RFYFDpFBg53o6aePWSQabfFbfzCFHOCY%2FbfRcjzIqlcds3UpqZvuXq98gRGW7HanCZNphLPL3ST5sZl0rnh6ndIFBFptctqd54d5JcC0n8bYqZ46DtKaFdjpTQNn6Rq9GQn7G8yFqlEhCMTr2fh7Byu&X-Amz-Signature=f5dbc14a0bb4dde665d219d430be51c8fc9c292643f08014bebae99439308465&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
