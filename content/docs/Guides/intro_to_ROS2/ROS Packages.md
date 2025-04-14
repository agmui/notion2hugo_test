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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQWFOHSZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpKFJr8MOF%2Fcss6wSgkKaillY%2BK%2Bb%2B0S8xwKe%2FqK1YygIgJUPpEqJ%2BDAFs47PvSlgwyKo7jRqFB9V92DwFbZXNjBsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCU9taeh6X4LiWInpSrcAyE6v3qmSu0em%2FUJYvKGqr%2F7RdhjbDREvGN%2FtFkhtFwiXJXrzSAE8XqizR1FUzbBpcoiLG0mtRKWeYFjlWm1enaT1fneLEaLuAzc3V74WZHXI4gdgvos6eQBHgXhXXJd7YXODv9aQkIVdJ8DKOy0xfl4wlGjzzUHNM2X%2F0ixYcbR6eFkt0xXEElRsWusFl4RJYYFMARLf61gs%2Bxg9fRCiQULxGkWpqmuF4dLjrcfEIIlXQwGOZr7aCikMZLO4ZTXqGnw%2Fsg9HV226Os7FulcSDUlAzQur3tursjKXfMYn%2BuOy8eOrXybX8atUkNa1bLRaF3Sw5epeoZPeAPwNVghBNjxD3N25rBJOKcEFWhBbfA48Cc2VmlIIYfA33cb39AvM%2BbqoO3AeQieNvaezRCvNOOjUc%2F4IwyGnSjqDYyWVoOedAtpaYuc%2F9GyJvN3BZfkbt%2ByS%2F6zwNLvGoe8pYEq7RlfdG4xFUmHmmzL7X2yS3E%2FrwlO1zQVAxLoFBGHOx0AVjU5PAV79BOL71BZ8O672z0Qc8DlC7GnZkfC8b2JJjuvveEfWgzbGrGl88KcIYBFPIxmU83PYECHIl9ExrWZ5OrBnPAEBB8wvBojLSxxgWD%2Fm8mM2v0bPB455bxCMNeC9r8GOqUBixjv41OUXHdR18fimvVGHd3nGF1nEtbKzl1ryS0tgT3arM6u9me0ZJzPLjnmU4nN%2FiVj2tzTx2G6Tw%2BOpAIEAcm9EJLf03A3Y76NcrELTp7zgJUq5%2F%2FW%2FBEN6U%2BjyZ6PuZ4JYx95ejQCgiBpB%2BIHHkZk1XUpi9eAf4IN%2Fg1e3%2BDmqvohUz9AkkYKmEEg75yvAqJkELzXaJnJgZN8cgF49ADdq2d7&X-Amz-Signature=22ed4ebc8386ace82454e1ea59f2434ca6d7fde7db2945b22be0bd5af27fffc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQWFOHSZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpKFJr8MOF%2Fcss6wSgkKaillY%2BK%2Bb%2B0S8xwKe%2FqK1YygIgJUPpEqJ%2BDAFs47PvSlgwyKo7jRqFB9V92DwFbZXNjBsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCU9taeh6X4LiWInpSrcAyE6v3qmSu0em%2FUJYvKGqr%2F7RdhjbDREvGN%2FtFkhtFwiXJXrzSAE8XqizR1FUzbBpcoiLG0mtRKWeYFjlWm1enaT1fneLEaLuAzc3V74WZHXI4gdgvos6eQBHgXhXXJd7YXODv9aQkIVdJ8DKOy0xfl4wlGjzzUHNM2X%2F0ixYcbR6eFkt0xXEElRsWusFl4RJYYFMARLf61gs%2Bxg9fRCiQULxGkWpqmuF4dLjrcfEIIlXQwGOZr7aCikMZLO4ZTXqGnw%2Fsg9HV226Os7FulcSDUlAzQur3tursjKXfMYn%2BuOy8eOrXybX8atUkNa1bLRaF3Sw5epeoZPeAPwNVghBNjxD3N25rBJOKcEFWhBbfA48Cc2VmlIIYfA33cb39AvM%2BbqoO3AeQieNvaezRCvNOOjUc%2F4IwyGnSjqDYyWVoOedAtpaYuc%2F9GyJvN3BZfkbt%2ByS%2F6zwNLvGoe8pYEq7RlfdG4xFUmHmmzL7X2yS3E%2FrwlO1zQVAxLoFBGHOx0AVjU5PAV79BOL71BZ8O672z0Qc8DlC7GnZkfC8b2JJjuvveEfWgzbGrGl88KcIYBFPIxmU83PYECHIl9ExrWZ5OrBnPAEBB8wvBojLSxxgWD%2Fm8mM2v0bPB455bxCMNeC9r8GOqUBixjv41OUXHdR18fimvVGHd3nGF1nEtbKzl1ryS0tgT3arM6u9me0ZJzPLjnmU4nN%2FiVj2tzTx2G6Tw%2BOpAIEAcm9EJLf03A3Y76NcrELTp7zgJUq5%2F%2FW%2FBEN6U%2BjyZ6PuZ4JYx95ejQCgiBpB%2BIHHkZk1XUpi9eAf4IN%2Fg1e3%2BDmqvohUz9AkkYKmEEg75yvAqJkELzXaJnJgZN8cgF49ADdq2d7&X-Amz-Signature=8c4ed35f19c4dc40cba712fd2cfb415105991259d04c56713e9017d6acb00121&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQWFOHSZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpKFJr8MOF%2Fcss6wSgkKaillY%2BK%2Bb%2B0S8xwKe%2FqK1YygIgJUPpEqJ%2BDAFs47PvSlgwyKo7jRqFB9V92DwFbZXNjBsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCU9taeh6X4LiWInpSrcAyE6v3qmSu0em%2FUJYvKGqr%2F7RdhjbDREvGN%2FtFkhtFwiXJXrzSAE8XqizR1FUzbBpcoiLG0mtRKWeYFjlWm1enaT1fneLEaLuAzc3V74WZHXI4gdgvos6eQBHgXhXXJd7YXODv9aQkIVdJ8DKOy0xfl4wlGjzzUHNM2X%2F0ixYcbR6eFkt0xXEElRsWusFl4RJYYFMARLf61gs%2Bxg9fRCiQULxGkWpqmuF4dLjrcfEIIlXQwGOZr7aCikMZLO4ZTXqGnw%2Fsg9HV226Os7FulcSDUlAzQur3tursjKXfMYn%2BuOy8eOrXybX8atUkNa1bLRaF3Sw5epeoZPeAPwNVghBNjxD3N25rBJOKcEFWhBbfA48Cc2VmlIIYfA33cb39AvM%2BbqoO3AeQieNvaezRCvNOOjUc%2F4IwyGnSjqDYyWVoOedAtpaYuc%2F9GyJvN3BZfkbt%2ByS%2F6zwNLvGoe8pYEq7RlfdG4xFUmHmmzL7X2yS3E%2FrwlO1zQVAxLoFBGHOx0AVjU5PAV79BOL71BZ8O672z0Qc8DlC7GnZkfC8b2JJjuvveEfWgzbGrGl88KcIYBFPIxmU83PYECHIl9ExrWZ5OrBnPAEBB8wvBojLSxxgWD%2Fm8mM2v0bPB455bxCMNeC9r8GOqUBixjv41OUXHdR18fimvVGHd3nGF1nEtbKzl1ryS0tgT3arM6u9me0ZJzPLjnmU4nN%2FiVj2tzTx2G6Tw%2BOpAIEAcm9EJLf03A3Y76NcrELTp7zgJUq5%2F%2FW%2FBEN6U%2BjyZ6PuZ4JYx95ejQCgiBpB%2BIHHkZk1XUpi9eAf4IN%2Fg1e3%2BDmqvohUz9AkkYKmEEg75yvAqJkELzXaJnJgZN8cgF49ADdq2d7&X-Amz-Signature=71e826b2eaca7d507e151b7a64e32ca6d85ead2f231be09f487f8cf9570f157e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQWFOHSZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpKFJr8MOF%2Fcss6wSgkKaillY%2BK%2Bb%2B0S8xwKe%2FqK1YygIgJUPpEqJ%2BDAFs47PvSlgwyKo7jRqFB9V92DwFbZXNjBsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCU9taeh6X4LiWInpSrcAyE6v3qmSu0em%2FUJYvKGqr%2F7RdhjbDREvGN%2FtFkhtFwiXJXrzSAE8XqizR1FUzbBpcoiLG0mtRKWeYFjlWm1enaT1fneLEaLuAzc3V74WZHXI4gdgvos6eQBHgXhXXJd7YXODv9aQkIVdJ8DKOy0xfl4wlGjzzUHNM2X%2F0ixYcbR6eFkt0xXEElRsWusFl4RJYYFMARLf61gs%2Bxg9fRCiQULxGkWpqmuF4dLjrcfEIIlXQwGOZr7aCikMZLO4ZTXqGnw%2Fsg9HV226Os7FulcSDUlAzQur3tursjKXfMYn%2BuOy8eOrXybX8atUkNa1bLRaF3Sw5epeoZPeAPwNVghBNjxD3N25rBJOKcEFWhBbfA48Cc2VmlIIYfA33cb39AvM%2BbqoO3AeQieNvaezRCvNOOjUc%2F4IwyGnSjqDYyWVoOedAtpaYuc%2F9GyJvN3BZfkbt%2ByS%2F6zwNLvGoe8pYEq7RlfdG4xFUmHmmzL7X2yS3E%2FrwlO1zQVAxLoFBGHOx0AVjU5PAV79BOL71BZ8O672z0Qc8DlC7GnZkfC8b2JJjuvveEfWgzbGrGl88KcIYBFPIxmU83PYECHIl9ExrWZ5OrBnPAEBB8wvBojLSxxgWD%2Fm8mM2v0bPB455bxCMNeC9r8GOqUBixjv41OUXHdR18fimvVGHd3nGF1nEtbKzl1ryS0tgT3arM6u9me0ZJzPLjnmU4nN%2FiVj2tzTx2G6Tw%2BOpAIEAcm9EJLf03A3Y76NcrELTp7zgJUq5%2F%2FW%2FBEN6U%2BjyZ6PuZ4JYx95ejQCgiBpB%2BIHHkZk1XUpi9eAf4IN%2Fg1e3%2BDmqvohUz9AkkYKmEEg75yvAqJkELzXaJnJgZN8cgF49ADdq2d7&X-Amz-Signature=93bad53367e251eb4cfabd455093f48a7f67a621b89ac17da4669b0c6ce0aee8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQWFOHSZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpKFJr8MOF%2Fcss6wSgkKaillY%2BK%2Bb%2B0S8xwKe%2FqK1YygIgJUPpEqJ%2BDAFs47PvSlgwyKo7jRqFB9V92DwFbZXNjBsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCU9taeh6X4LiWInpSrcAyE6v3qmSu0em%2FUJYvKGqr%2F7RdhjbDREvGN%2FtFkhtFwiXJXrzSAE8XqizR1FUzbBpcoiLG0mtRKWeYFjlWm1enaT1fneLEaLuAzc3V74WZHXI4gdgvos6eQBHgXhXXJd7YXODv9aQkIVdJ8DKOy0xfl4wlGjzzUHNM2X%2F0ixYcbR6eFkt0xXEElRsWusFl4RJYYFMARLf61gs%2Bxg9fRCiQULxGkWpqmuF4dLjrcfEIIlXQwGOZr7aCikMZLO4ZTXqGnw%2Fsg9HV226Os7FulcSDUlAzQur3tursjKXfMYn%2BuOy8eOrXybX8atUkNa1bLRaF3Sw5epeoZPeAPwNVghBNjxD3N25rBJOKcEFWhBbfA48Cc2VmlIIYfA33cb39AvM%2BbqoO3AeQieNvaezRCvNOOjUc%2F4IwyGnSjqDYyWVoOedAtpaYuc%2F9GyJvN3BZfkbt%2ByS%2F6zwNLvGoe8pYEq7RlfdG4xFUmHmmzL7X2yS3E%2FrwlO1zQVAxLoFBGHOx0AVjU5PAV79BOL71BZ8O672z0Qc8DlC7GnZkfC8b2JJjuvveEfWgzbGrGl88KcIYBFPIxmU83PYECHIl9ExrWZ5OrBnPAEBB8wvBojLSxxgWD%2Fm8mM2v0bPB455bxCMNeC9r8GOqUBixjv41OUXHdR18fimvVGHd3nGF1nEtbKzl1ryS0tgT3arM6u9me0ZJzPLjnmU4nN%2FiVj2tzTx2G6Tw%2BOpAIEAcm9EJLf03A3Y76NcrELTp7zgJUq5%2F%2FW%2FBEN6U%2BjyZ6PuZ4JYx95ejQCgiBpB%2BIHHkZk1XUpi9eAf4IN%2Fg1e3%2BDmqvohUz9AkkYKmEEg75yvAqJkELzXaJnJgZN8cgF49ADdq2d7&X-Amz-Signature=c0c73bc2eedfc13fbaee5d4e3c43e9cce8f24138961def2371b02028cb489203&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQWFOHSZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpKFJr8MOF%2Fcss6wSgkKaillY%2BK%2Bb%2B0S8xwKe%2FqK1YygIgJUPpEqJ%2BDAFs47PvSlgwyKo7jRqFB9V92DwFbZXNjBsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCU9taeh6X4LiWInpSrcAyE6v3qmSu0em%2FUJYvKGqr%2F7RdhjbDREvGN%2FtFkhtFwiXJXrzSAE8XqizR1FUzbBpcoiLG0mtRKWeYFjlWm1enaT1fneLEaLuAzc3V74WZHXI4gdgvos6eQBHgXhXXJd7YXODv9aQkIVdJ8DKOy0xfl4wlGjzzUHNM2X%2F0ixYcbR6eFkt0xXEElRsWusFl4RJYYFMARLf61gs%2Bxg9fRCiQULxGkWpqmuF4dLjrcfEIIlXQwGOZr7aCikMZLO4ZTXqGnw%2Fsg9HV226Os7FulcSDUlAzQur3tursjKXfMYn%2BuOy8eOrXybX8atUkNa1bLRaF3Sw5epeoZPeAPwNVghBNjxD3N25rBJOKcEFWhBbfA48Cc2VmlIIYfA33cb39AvM%2BbqoO3AeQieNvaezRCvNOOjUc%2F4IwyGnSjqDYyWVoOedAtpaYuc%2F9GyJvN3BZfkbt%2ByS%2F6zwNLvGoe8pYEq7RlfdG4xFUmHmmzL7X2yS3E%2FrwlO1zQVAxLoFBGHOx0AVjU5PAV79BOL71BZ8O672z0Qc8DlC7GnZkfC8b2JJjuvveEfWgzbGrGl88KcIYBFPIxmU83PYECHIl9ExrWZ5OrBnPAEBB8wvBojLSxxgWD%2Fm8mM2v0bPB455bxCMNeC9r8GOqUBixjv41OUXHdR18fimvVGHd3nGF1nEtbKzl1ryS0tgT3arM6u9me0ZJzPLjnmU4nN%2FiVj2tzTx2G6Tw%2BOpAIEAcm9EJLf03A3Y76NcrELTp7zgJUq5%2F%2FW%2FBEN6U%2BjyZ6PuZ4JYx95ejQCgiBpB%2BIHHkZk1XUpi9eAf4IN%2Fg1e3%2BDmqvohUz9AkkYKmEEg75yvAqJkELzXaJnJgZN8cgF49ADdq2d7&X-Amz-Signature=b2181b92f1759d63af694707cf60f564198c005ab6503061b28aa437d49fc87b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQWFOHSZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpKFJr8MOF%2Fcss6wSgkKaillY%2BK%2Bb%2B0S8xwKe%2FqK1YygIgJUPpEqJ%2BDAFs47PvSlgwyKo7jRqFB9V92DwFbZXNjBsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCU9taeh6X4LiWInpSrcAyE6v3qmSu0em%2FUJYvKGqr%2F7RdhjbDREvGN%2FtFkhtFwiXJXrzSAE8XqizR1FUzbBpcoiLG0mtRKWeYFjlWm1enaT1fneLEaLuAzc3V74WZHXI4gdgvos6eQBHgXhXXJd7YXODv9aQkIVdJ8DKOy0xfl4wlGjzzUHNM2X%2F0ixYcbR6eFkt0xXEElRsWusFl4RJYYFMARLf61gs%2Bxg9fRCiQULxGkWpqmuF4dLjrcfEIIlXQwGOZr7aCikMZLO4ZTXqGnw%2Fsg9HV226Os7FulcSDUlAzQur3tursjKXfMYn%2BuOy8eOrXybX8atUkNa1bLRaF3Sw5epeoZPeAPwNVghBNjxD3N25rBJOKcEFWhBbfA48Cc2VmlIIYfA33cb39AvM%2BbqoO3AeQieNvaezRCvNOOjUc%2F4IwyGnSjqDYyWVoOedAtpaYuc%2F9GyJvN3BZfkbt%2ByS%2F6zwNLvGoe8pYEq7RlfdG4xFUmHmmzL7X2yS3E%2FrwlO1zQVAxLoFBGHOx0AVjU5PAV79BOL71BZ8O672z0Qc8DlC7GnZkfC8b2JJjuvveEfWgzbGrGl88KcIYBFPIxmU83PYECHIl9ExrWZ5OrBnPAEBB8wvBojLSxxgWD%2Fm8mM2v0bPB455bxCMNeC9r8GOqUBixjv41OUXHdR18fimvVGHd3nGF1nEtbKzl1ryS0tgT3arM6u9me0ZJzPLjnmU4nN%2FiVj2tzTx2G6Tw%2BOpAIEAcm9EJLf03A3Y76NcrELTp7zgJUq5%2F%2FW%2FBEN6U%2BjyZ6PuZ4JYx95ejQCgiBpB%2BIHHkZk1XUpi9eAf4IN%2Fg1e3%2BDmqvohUz9AkkYKmEEg75yvAqJkELzXaJnJgZN8cgF49ADdq2d7&X-Amz-Signature=1ddb7bf0b560ec8f0611ba89d29b020b3bcf65daaae0af14dbd51b7f9fc07145&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
