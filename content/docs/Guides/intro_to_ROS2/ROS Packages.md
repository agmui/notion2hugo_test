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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z65LEEE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzU98PH6RUVl%2BrOoww2nrothZQAc0O8m13ez%2BqGRFeeQIgEDfiZCL3VjDBcINEZHLuq2IkBbz%2FXjcUww5cQflZMaQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGO6AGqSX7ZDNYJ79SrcA8TJS3%2BH3cQYHhlgmTWo7kH7jgy%2B%2F649ccgwR%2FAtSSg6R8ooyi%2FwrNp%2BuvzXfMN7GCTM1OuTTfzrCZ06%2BJaUkxiSVskZkAISG33M2wi89O77LHd7QzfwPUDhOB%2B%2Bg6UxNrn2aaqUWhQVXgbAw%2BOf3Bep5ARim6bKD%2BhWGSTO1j3BxDGILNQE%2BtY%2Fx%2F8nGGAUeF0lqj7OuK%2FxkBG2LBYzYBcKfzLGKFA8EdQIltmjex7FelzE142vTSoATyyz%2BeErupcaxix8pstcnKy37yITCWF7VbmoyaOiwkYsHYae3L6w%2BimKVcOUCBzC%2BqO8oLtPCxdbWTaje0pwx2I7qqmQQULZwWfMzUnN0Bbr%2BSRVpeAQydLCKU8%2BDP7NrehI87SNCEvuQGaGSAeMrHarOlDRZY8quupDSX%2BgkmHxPj%2Be2H3GxAvxNPho5ipQXx%2FUpbqinlDKlnFSBIpw8T%2Bwk7ekGV344k%2BDuStK9AGW8OKAl2jOUK0SpFJoXk4xjKChmNh9sNooAm0LXAjh0Z8IRI3IKAzxhUAiizYN8cc73Y0ziRAZou8E6w%2BnpqEZjsE%2F6oa5abD7inguXq50yfotNy7ttmD1HnJmIoAQusCtT%2FOMwbG0MX3MkHpW3L6ZpJ8nMIrgzsIGOqUBEjppt0E8fIBb7k20u%2BdNWsg4pFQTcrFqDc1IMwxYM0DM2dlNPmlpoOp7APqiqny%2FJGfDf5hEaPmu%2FGZo9s1IJIo%2BxEIfNQ8Nm5NQGynC2jdzB1ozq0I%2BEXPw4mTZ7WktBAbXgGhHeUJcQMur7ptK%2Feqw95gAf0cCC2KEF7YJg85q8rTFrZW7mJn8vtES82Ojv1MELVqrW8lnclOjPlINrdLh4BLa&X-Amz-Signature=91a57b749e97c995d4306553fc06f246200f6e2f4ed94adc938494605a23faa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z65LEEE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzU98PH6RUVl%2BrOoww2nrothZQAc0O8m13ez%2BqGRFeeQIgEDfiZCL3VjDBcINEZHLuq2IkBbz%2FXjcUww5cQflZMaQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGO6AGqSX7ZDNYJ79SrcA8TJS3%2BH3cQYHhlgmTWo7kH7jgy%2B%2F649ccgwR%2FAtSSg6R8ooyi%2FwrNp%2BuvzXfMN7GCTM1OuTTfzrCZ06%2BJaUkxiSVskZkAISG33M2wi89O77LHd7QzfwPUDhOB%2B%2Bg6UxNrn2aaqUWhQVXgbAw%2BOf3Bep5ARim6bKD%2BhWGSTO1j3BxDGILNQE%2BtY%2Fx%2F8nGGAUeF0lqj7OuK%2FxkBG2LBYzYBcKfzLGKFA8EdQIltmjex7FelzE142vTSoATyyz%2BeErupcaxix8pstcnKy37yITCWF7VbmoyaOiwkYsHYae3L6w%2BimKVcOUCBzC%2BqO8oLtPCxdbWTaje0pwx2I7qqmQQULZwWfMzUnN0Bbr%2BSRVpeAQydLCKU8%2BDP7NrehI87SNCEvuQGaGSAeMrHarOlDRZY8quupDSX%2BgkmHxPj%2Be2H3GxAvxNPho5ipQXx%2FUpbqinlDKlnFSBIpw8T%2Bwk7ekGV344k%2BDuStK9AGW8OKAl2jOUK0SpFJoXk4xjKChmNh9sNooAm0LXAjh0Z8IRI3IKAzxhUAiizYN8cc73Y0ziRAZou8E6w%2BnpqEZjsE%2F6oa5abD7inguXq50yfotNy7ttmD1HnJmIoAQusCtT%2FOMwbG0MX3MkHpW3L6ZpJ8nMIrgzsIGOqUBEjppt0E8fIBb7k20u%2BdNWsg4pFQTcrFqDc1IMwxYM0DM2dlNPmlpoOp7APqiqny%2FJGfDf5hEaPmu%2FGZo9s1IJIo%2BxEIfNQ8Nm5NQGynC2jdzB1ozq0I%2BEXPw4mTZ7WktBAbXgGhHeUJcQMur7ptK%2Feqw95gAf0cCC2KEF7YJg85q8rTFrZW7mJn8vtES82Ojv1MELVqrW8lnclOjPlINrdLh4BLa&X-Amz-Signature=38b227549c2924bf02ebf20c725e6ad7910349f24902ef2985b02cac796faed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z65LEEE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzU98PH6RUVl%2BrOoww2nrothZQAc0O8m13ez%2BqGRFeeQIgEDfiZCL3VjDBcINEZHLuq2IkBbz%2FXjcUww5cQflZMaQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGO6AGqSX7ZDNYJ79SrcA8TJS3%2BH3cQYHhlgmTWo7kH7jgy%2B%2F649ccgwR%2FAtSSg6R8ooyi%2FwrNp%2BuvzXfMN7GCTM1OuTTfzrCZ06%2BJaUkxiSVskZkAISG33M2wi89O77LHd7QzfwPUDhOB%2B%2Bg6UxNrn2aaqUWhQVXgbAw%2BOf3Bep5ARim6bKD%2BhWGSTO1j3BxDGILNQE%2BtY%2Fx%2F8nGGAUeF0lqj7OuK%2FxkBG2LBYzYBcKfzLGKFA8EdQIltmjex7FelzE142vTSoATyyz%2BeErupcaxix8pstcnKy37yITCWF7VbmoyaOiwkYsHYae3L6w%2BimKVcOUCBzC%2BqO8oLtPCxdbWTaje0pwx2I7qqmQQULZwWfMzUnN0Bbr%2BSRVpeAQydLCKU8%2BDP7NrehI87SNCEvuQGaGSAeMrHarOlDRZY8quupDSX%2BgkmHxPj%2Be2H3GxAvxNPho5ipQXx%2FUpbqinlDKlnFSBIpw8T%2Bwk7ekGV344k%2BDuStK9AGW8OKAl2jOUK0SpFJoXk4xjKChmNh9sNooAm0LXAjh0Z8IRI3IKAzxhUAiizYN8cc73Y0ziRAZou8E6w%2BnpqEZjsE%2F6oa5abD7inguXq50yfotNy7ttmD1HnJmIoAQusCtT%2FOMwbG0MX3MkHpW3L6ZpJ8nMIrgzsIGOqUBEjppt0E8fIBb7k20u%2BdNWsg4pFQTcrFqDc1IMwxYM0DM2dlNPmlpoOp7APqiqny%2FJGfDf5hEaPmu%2FGZo9s1IJIo%2BxEIfNQ8Nm5NQGynC2jdzB1ozq0I%2BEXPw4mTZ7WktBAbXgGhHeUJcQMur7ptK%2Feqw95gAf0cCC2KEF7YJg85q8rTFrZW7mJn8vtES82Ojv1MELVqrW8lnclOjPlINrdLh4BLa&X-Amz-Signature=f416437f818dd941d0fd79c4b260d30c372c4932c92e71727345127e28facf37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z65LEEE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzU98PH6RUVl%2BrOoww2nrothZQAc0O8m13ez%2BqGRFeeQIgEDfiZCL3VjDBcINEZHLuq2IkBbz%2FXjcUww5cQflZMaQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGO6AGqSX7ZDNYJ79SrcA8TJS3%2BH3cQYHhlgmTWo7kH7jgy%2B%2F649ccgwR%2FAtSSg6R8ooyi%2FwrNp%2BuvzXfMN7GCTM1OuTTfzrCZ06%2BJaUkxiSVskZkAISG33M2wi89O77LHd7QzfwPUDhOB%2B%2Bg6UxNrn2aaqUWhQVXgbAw%2BOf3Bep5ARim6bKD%2BhWGSTO1j3BxDGILNQE%2BtY%2Fx%2F8nGGAUeF0lqj7OuK%2FxkBG2LBYzYBcKfzLGKFA8EdQIltmjex7FelzE142vTSoATyyz%2BeErupcaxix8pstcnKy37yITCWF7VbmoyaOiwkYsHYae3L6w%2BimKVcOUCBzC%2BqO8oLtPCxdbWTaje0pwx2I7qqmQQULZwWfMzUnN0Bbr%2BSRVpeAQydLCKU8%2BDP7NrehI87SNCEvuQGaGSAeMrHarOlDRZY8quupDSX%2BgkmHxPj%2Be2H3GxAvxNPho5ipQXx%2FUpbqinlDKlnFSBIpw8T%2Bwk7ekGV344k%2BDuStK9AGW8OKAl2jOUK0SpFJoXk4xjKChmNh9sNooAm0LXAjh0Z8IRI3IKAzxhUAiizYN8cc73Y0ziRAZou8E6w%2BnpqEZjsE%2F6oa5abD7inguXq50yfotNy7ttmD1HnJmIoAQusCtT%2FOMwbG0MX3MkHpW3L6ZpJ8nMIrgzsIGOqUBEjppt0E8fIBb7k20u%2BdNWsg4pFQTcrFqDc1IMwxYM0DM2dlNPmlpoOp7APqiqny%2FJGfDf5hEaPmu%2FGZo9s1IJIo%2BxEIfNQ8Nm5NQGynC2jdzB1ozq0I%2BEXPw4mTZ7WktBAbXgGhHeUJcQMur7ptK%2Feqw95gAf0cCC2KEF7YJg85q8rTFrZW7mJn8vtES82Ojv1MELVqrW8lnclOjPlINrdLh4BLa&X-Amz-Signature=1c181f01564bc98c15285301a10d5d9f7c39510e2db2016abaaa29006c5d5a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z65LEEE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzU98PH6RUVl%2BrOoww2nrothZQAc0O8m13ez%2BqGRFeeQIgEDfiZCL3VjDBcINEZHLuq2IkBbz%2FXjcUww5cQflZMaQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGO6AGqSX7ZDNYJ79SrcA8TJS3%2BH3cQYHhlgmTWo7kH7jgy%2B%2F649ccgwR%2FAtSSg6R8ooyi%2FwrNp%2BuvzXfMN7GCTM1OuTTfzrCZ06%2BJaUkxiSVskZkAISG33M2wi89O77LHd7QzfwPUDhOB%2B%2Bg6UxNrn2aaqUWhQVXgbAw%2BOf3Bep5ARim6bKD%2BhWGSTO1j3BxDGILNQE%2BtY%2Fx%2F8nGGAUeF0lqj7OuK%2FxkBG2LBYzYBcKfzLGKFA8EdQIltmjex7FelzE142vTSoATyyz%2BeErupcaxix8pstcnKy37yITCWF7VbmoyaOiwkYsHYae3L6w%2BimKVcOUCBzC%2BqO8oLtPCxdbWTaje0pwx2I7qqmQQULZwWfMzUnN0Bbr%2BSRVpeAQydLCKU8%2BDP7NrehI87SNCEvuQGaGSAeMrHarOlDRZY8quupDSX%2BgkmHxPj%2Be2H3GxAvxNPho5ipQXx%2FUpbqinlDKlnFSBIpw8T%2Bwk7ekGV344k%2BDuStK9AGW8OKAl2jOUK0SpFJoXk4xjKChmNh9sNooAm0LXAjh0Z8IRI3IKAzxhUAiizYN8cc73Y0ziRAZou8E6w%2BnpqEZjsE%2F6oa5abD7inguXq50yfotNy7ttmD1HnJmIoAQusCtT%2FOMwbG0MX3MkHpW3L6ZpJ8nMIrgzsIGOqUBEjppt0E8fIBb7k20u%2BdNWsg4pFQTcrFqDc1IMwxYM0DM2dlNPmlpoOp7APqiqny%2FJGfDf5hEaPmu%2FGZo9s1IJIo%2BxEIfNQ8Nm5NQGynC2jdzB1ozq0I%2BEXPw4mTZ7WktBAbXgGhHeUJcQMur7ptK%2Feqw95gAf0cCC2KEF7YJg85q8rTFrZW7mJn8vtES82Ojv1MELVqrW8lnclOjPlINrdLh4BLa&X-Amz-Signature=7c2234c57a99c6cae6e31804918debb393030783f9dafa18b98c7ba7f2624184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z65LEEE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzU98PH6RUVl%2BrOoww2nrothZQAc0O8m13ez%2BqGRFeeQIgEDfiZCL3VjDBcINEZHLuq2IkBbz%2FXjcUww5cQflZMaQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGO6AGqSX7ZDNYJ79SrcA8TJS3%2BH3cQYHhlgmTWo7kH7jgy%2B%2F649ccgwR%2FAtSSg6R8ooyi%2FwrNp%2BuvzXfMN7GCTM1OuTTfzrCZ06%2BJaUkxiSVskZkAISG33M2wi89O77LHd7QzfwPUDhOB%2B%2Bg6UxNrn2aaqUWhQVXgbAw%2BOf3Bep5ARim6bKD%2BhWGSTO1j3BxDGILNQE%2BtY%2Fx%2F8nGGAUeF0lqj7OuK%2FxkBG2LBYzYBcKfzLGKFA8EdQIltmjex7FelzE142vTSoATyyz%2BeErupcaxix8pstcnKy37yITCWF7VbmoyaOiwkYsHYae3L6w%2BimKVcOUCBzC%2BqO8oLtPCxdbWTaje0pwx2I7qqmQQULZwWfMzUnN0Bbr%2BSRVpeAQydLCKU8%2BDP7NrehI87SNCEvuQGaGSAeMrHarOlDRZY8quupDSX%2BgkmHxPj%2Be2H3GxAvxNPho5ipQXx%2FUpbqinlDKlnFSBIpw8T%2Bwk7ekGV344k%2BDuStK9AGW8OKAl2jOUK0SpFJoXk4xjKChmNh9sNooAm0LXAjh0Z8IRI3IKAzxhUAiizYN8cc73Y0ziRAZou8E6w%2BnpqEZjsE%2F6oa5abD7inguXq50yfotNy7ttmD1HnJmIoAQusCtT%2FOMwbG0MX3MkHpW3L6ZpJ8nMIrgzsIGOqUBEjppt0E8fIBb7k20u%2BdNWsg4pFQTcrFqDc1IMwxYM0DM2dlNPmlpoOp7APqiqny%2FJGfDf5hEaPmu%2FGZo9s1IJIo%2BxEIfNQ8Nm5NQGynC2jdzB1ozq0I%2BEXPw4mTZ7WktBAbXgGhHeUJcQMur7ptK%2Feqw95gAf0cCC2KEF7YJg85q8rTFrZW7mJn8vtES82Ojv1MELVqrW8lnclOjPlINrdLh4BLa&X-Amz-Signature=750763d0ea7bc3c1a0dd34b56478f3fe1f6fe1b2bc1501ed14d5638ed5272341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z65LEEE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzU98PH6RUVl%2BrOoww2nrothZQAc0O8m13ez%2BqGRFeeQIgEDfiZCL3VjDBcINEZHLuq2IkBbz%2FXjcUww5cQflZMaQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGO6AGqSX7ZDNYJ79SrcA8TJS3%2BH3cQYHhlgmTWo7kH7jgy%2B%2F649ccgwR%2FAtSSg6R8ooyi%2FwrNp%2BuvzXfMN7GCTM1OuTTfzrCZ06%2BJaUkxiSVskZkAISG33M2wi89O77LHd7QzfwPUDhOB%2B%2Bg6UxNrn2aaqUWhQVXgbAw%2BOf3Bep5ARim6bKD%2BhWGSTO1j3BxDGILNQE%2BtY%2Fx%2F8nGGAUeF0lqj7OuK%2FxkBG2LBYzYBcKfzLGKFA8EdQIltmjex7FelzE142vTSoATyyz%2BeErupcaxix8pstcnKy37yITCWF7VbmoyaOiwkYsHYae3L6w%2BimKVcOUCBzC%2BqO8oLtPCxdbWTaje0pwx2I7qqmQQULZwWfMzUnN0Bbr%2BSRVpeAQydLCKU8%2BDP7NrehI87SNCEvuQGaGSAeMrHarOlDRZY8quupDSX%2BgkmHxPj%2Be2H3GxAvxNPho5ipQXx%2FUpbqinlDKlnFSBIpw8T%2Bwk7ekGV344k%2BDuStK9AGW8OKAl2jOUK0SpFJoXk4xjKChmNh9sNooAm0LXAjh0Z8IRI3IKAzxhUAiizYN8cc73Y0ziRAZou8E6w%2BnpqEZjsE%2F6oa5abD7inguXq50yfotNy7ttmD1HnJmIoAQusCtT%2FOMwbG0MX3MkHpW3L6ZpJ8nMIrgzsIGOqUBEjppt0E8fIBb7k20u%2BdNWsg4pFQTcrFqDc1IMwxYM0DM2dlNPmlpoOp7APqiqny%2FJGfDf5hEaPmu%2FGZo9s1IJIo%2BxEIfNQ8Nm5NQGynC2jdzB1ozq0I%2BEXPw4mTZ7WktBAbXgGhHeUJcQMur7ptK%2Feqw95gAf0cCC2KEF7YJg85q8rTFrZW7mJn8vtES82Ojv1MELVqrW8lnclOjPlINrdLh4BLa&X-Amz-Signature=40529e6e58debd33cb4ed8ebdb139be44cefee8362d23fda0bb4090cf62d3a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
