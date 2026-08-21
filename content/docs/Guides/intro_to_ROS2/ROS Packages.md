---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOCVHAZ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf2p1jIn%2Fm8DwI8qsijWDZptN3c3639mjud%2FjUETR18AIhAPXocwYGeYsktTO3ejGV8xWqC%2FtPGkHTJOLUZrO1n2jPKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjFuZwn135iEQ3hQIq3AOOyAGpNEHGZuSiKZ5Evl8RQx6Dbt8Mj76gNol7M1dT3PzX%2BUwcfB4r3zNwhjXNrvuytqXkW7BKXMSUdwU42vlFdW%2Ft6YsmFgnybSke06Wv%2BKUDEe5sIxElD%2BYSpw3Ruc2iw4p%2Bjri2SaafbLyvYTIzW%2FD1HXQhxlKcJYuNuRxH1oyCx6HeP%2F03OlcbLFKx3B4kN8qHFoeBEfJb8hl70%2BAvGBYZrADUffbupIDn8ScNLlHjMv8lmZNLUV0S6IQb81PMrdHI2DxARD%2B8wuzR3YlRao4klYu6ejYomw9QNISyH7Zmg4lXKXCMPqHSe33WVlr2y4agoFDWCTAY4GbRRUTW2vGEjPJcRBUnsYvCO9E0hxX4tHCPwJEaQ8%2By%2FbsBqKt72818gZBEAfR408Shtr1GVb0wWBxpq4DmuMXtO9CNg06YBwryQdXZKSPqxjX0IKXNcZVhBjkgb8OhA223E%2FftIbEWz93Svuj5z4lUy%2FkK8MukPKZ53YDRBWJl%2BEl1L9iUO8gkkilywyXzI0ndb57Zg96tzU5E0yRIEEh53JzQtM9qr1JY8KP%2FbDM8bmY9%2F8QNwn%2FTUH%2BH3XCwc4xyhvd7bw7rz%2Boj6Kfy%2FncjlIX3l%2B147zCSnlhj4Tg%2BsDCIrp7UBjqkAWGab8L1ZWqywUtjVg%2FKrxHbjv2sKQsRiAWWzH7%2BdjYNBxWXIHPJ1qYLG%2FIP5xfjXgdrFbAJbPws7gKez3w%2BterGqu1hWYDmgy%2BL2VMqB1rh0daDRcxl89hFE967ByU1vUdyqoQ5S6%2Bd00fiV55r5OOcdszQ%2F695PTRwz2WvZ5w875GAdpD4luSg8%2FtY6EhCEeDZ3rrXjLL5SoP8l4WpzkR6urWU&X-Amz-Signature=7b97ec2e3d346ef08d18bbc2213ae78af8119f76f4a2cd42e24ed49d9bb32246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOCVHAZ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf2p1jIn%2Fm8DwI8qsijWDZptN3c3639mjud%2FjUETR18AIhAPXocwYGeYsktTO3ejGV8xWqC%2FtPGkHTJOLUZrO1n2jPKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjFuZwn135iEQ3hQIq3AOOyAGpNEHGZuSiKZ5Evl8RQx6Dbt8Mj76gNol7M1dT3PzX%2BUwcfB4r3zNwhjXNrvuytqXkW7BKXMSUdwU42vlFdW%2Ft6YsmFgnybSke06Wv%2BKUDEe5sIxElD%2BYSpw3Ruc2iw4p%2Bjri2SaafbLyvYTIzW%2FD1HXQhxlKcJYuNuRxH1oyCx6HeP%2F03OlcbLFKx3B4kN8qHFoeBEfJb8hl70%2BAvGBYZrADUffbupIDn8ScNLlHjMv8lmZNLUV0S6IQb81PMrdHI2DxARD%2B8wuzR3YlRao4klYu6ejYomw9QNISyH7Zmg4lXKXCMPqHSe33WVlr2y4agoFDWCTAY4GbRRUTW2vGEjPJcRBUnsYvCO9E0hxX4tHCPwJEaQ8%2By%2FbsBqKt72818gZBEAfR408Shtr1GVb0wWBxpq4DmuMXtO9CNg06YBwryQdXZKSPqxjX0IKXNcZVhBjkgb8OhA223E%2FftIbEWz93Svuj5z4lUy%2FkK8MukPKZ53YDRBWJl%2BEl1L9iUO8gkkilywyXzI0ndb57Zg96tzU5E0yRIEEh53JzQtM9qr1JY8KP%2FbDM8bmY9%2F8QNwn%2FTUH%2BH3XCwc4xyhvd7bw7rz%2Boj6Kfy%2FncjlIX3l%2B147zCSnlhj4Tg%2BsDCIrp7UBjqkAWGab8L1ZWqywUtjVg%2FKrxHbjv2sKQsRiAWWzH7%2BdjYNBxWXIHPJ1qYLG%2FIP5xfjXgdrFbAJbPws7gKez3w%2BterGqu1hWYDmgy%2BL2VMqB1rh0daDRcxl89hFE967ByU1vUdyqoQ5S6%2Bd00fiV55r5OOcdszQ%2F695PTRwz2WvZ5w875GAdpD4luSg8%2FtY6EhCEeDZ3rrXjLL5SoP8l4WpzkR6urWU&X-Amz-Signature=be49353e1c9bb4c10d7f4aa3e2e8edd6323c7f8d93ae1fda46454db8f1de5a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOCVHAZ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf2p1jIn%2Fm8DwI8qsijWDZptN3c3639mjud%2FjUETR18AIhAPXocwYGeYsktTO3ejGV8xWqC%2FtPGkHTJOLUZrO1n2jPKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjFuZwn135iEQ3hQIq3AOOyAGpNEHGZuSiKZ5Evl8RQx6Dbt8Mj76gNol7M1dT3PzX%2BUwcfB4r3zNwhjXNrvuytqXkW7BKXMSUdwU42vlFdW%2Ft6YsmFgnybSke06Wv%2BKUDEe5sIxElD%2BYSpw3Ruc2iw4p%2Bjri2SaafbLyvYTIzW%2FD1HXQhxlKcJYuNuRxH1oyCx6HeP%2F03OlcbLFKx3B4kN8qHFoeBEfJb8hl70%2BAvGBYZrADUffbupIDn8ScNLlHjMv8lmZNLUV0S6IQb81PMrdHI2DxARD%2B8wuzR3YlRao4klYu6ejYomw9QNISyH7Zmg4lXKXCMPqHSe33WVlr2y4agoFDWCTAY4GbRRUTW2vGEjPJcRBUnsYvCO9E0hxX4tHCPwJEaQ8%2By%2FbsBqKt72818gZBEAfR408Shtr1GVb0wWBxpq4DmuMXtO9CNg06YBwryQdXZKSPqxjX0IKXNcZVhBjkgb8OhA223E%2FftIbEWz93Svuj5z4lUy%2FkK8MukPKZ53YDRBWJl%2BEl1L9iUO8gkkilywyXzI0ndb57Zg96tzU5E0yRIEEh53JzQtM9qr1JY8KP%2FbDM8bmY9%2F8QNwn%2FTUH%2BH3XCwc4xyhvd7bw7rz%2Boj6Kfy%2FncjlIX3l%2B147zCSnlhj4Tg%2BsDCIrp7UBjqkAWGab8L1ZWqywUtjVg%2FKrxHbjv2sKQsRiAWWzH7%2BdjYNBxWXIHPJ1qYLG%2FIP5xfjXgdrFbAJbPws7gKez3w%2BterGqu1hWYDmgy%2BL2VMqB1rh0daDRcxl89hFE967ByU1vUdyqoQ5S6%2Bd00fiV55r5OOcdszQ%2F695PTRwz2WvZ5w875GAdpD4luSg8%2FtY6EhCEeDZ3rrXjLL5SoP8l4WpzkR6urWU&X-Amz-Signature=ea80032398f33cf59745064a85de27b7945df38dcfab13f85132924b0012f011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOCVHAZ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf2p1jIn%2Fm8DwI8qsijWDZptN3c3639mjud%2FjUETR18AIhAPXocwYGeYsktTO3ejGV8xWqC%2FtPGkHTJOLUZrO1n2jPKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjFuZwn135iEQ3hQIq3AOOyAGpNEHGZuSiKZ5Evl8RQx6Dbt8Mj76gNol7M1dT3PzX%2BUwcfB4r3zNwhjXNrvuytqXkW7BKXMSUdwU42vlFdW%2Ft6YsmFgnybSke06Wv%2BKUDEe5sIxElD%2BYSpw3Ruc2iw4p%2Bjri2SaafbLyvYTIzW%2FD1HXQhxlKcJYuNuRxH1oyCx6HeP%2F03OlcbLFKx3B4kN8qHFoeBEfJb8hl70%2BAvGBYZrADUffbupIDn8ScNLlHjMv8lmZNLUV0S6IQb81PMrdHI2DxARD%2B8wuzR3YlRao4klYu6ejYomw9QNISyH7Zmg4lXKXCMPqHSe33WVlr2y4agoFDWCTAY4GbRRUTW2vGEjPJcRBUnsYvCO9E0hxX4tHCPwJEaQ8%2By%2FbsBqKt72818gZBEAfR408Shtr1GVb0wWBxpq4DmuMXtO9CNg06YBwryQdXZKSPqxjX0IKXNcZVhBjkgb8OhA223E%2FftIbEWz93Svuj5z4lUy%2FkK8MukPKZ53YDRBWJl%2BEl1L9iUO8gkkilywyXzI0ndb57Zg96tzU5E0yRIEEh53JzQtM9qr1JY8KP%2FbDM8bmY9%2F8QNwn%2FTUH%2BH3XCwc4xyhvd7bw7rz%2Boj6Kfy%2FncjlIX3l%2B147zCSnlhj4Tg%2BsDCIrp7UBjqkAWGab8L1ZWqywUtjVg%2FKrxHbjv2sKQsRiAWWzH7%2BdjYNBxWXIHPJ1qYLG%2FIP5xfjXgdrFbAJbPws7gKez3w%2BterGqu1hWYDmgy%2BL2VMqB1rh0daDRcxl89hFE967ByU1vUdyqoQ5S6%2Bd00fiV55r5OOcdszQ%2F695PTRwz2WvZ5w875GAdpD4luSg8%2FtY6EhCEeDZ3rrXjLL5SoP8l4WpzkR6urWU&X-Amz-Signature=3fae027716562c1388573bc505c1f5def2abea948e750e45128642f1d468fa37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOCVHAZ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf2p1jIn%2Fm8DwI8qsijWDZptN3c3639mjud%2FjUETR18AIhAPXocwYGeYsktTO3ejGV8xWqC%2FtPGkHTJOLUZrO1n2jPKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjFuZwn135iEQ3hQIq3AOOyAGpNEHGZuSiKZ5Evl8RQx6Dbt8Mj76gNol7M1dT3PzX%2BUwcfB4r3zNwhjXNrvuytqXkW7BKXMSUdwU42vlFdW%2Ft6YsmFgnybSke06Wv%2BKUDEe5sIxElD%2BYSpw3Ruc2iw4p%2Bjri2SaafbLyvYTIzW%2FD1HXQhxlKcJYuNuRxH1oyCx6HeP%2F03OlcbLFKx3B4kN8qHFoeBEfJb8hl70%2BAvGBYZrADUffbupIDn8ScNLlHjMv8lmZNLUV0S6IQb81PMrdHI2DxARD%2B8wuzR3YlRao4klYu6ejYomw9QNISyH7Zmg4lXKXCMPqHSe33WVlr2y4agoFDWCTAY4GbRRUTW2vGEjPJcRBUnsYvCO9E0hxX4tHCPwJEaQ8%2By%2FbsBqKt72818gZBEAfR408Shtr1GVb0wWBxpq4DmuMXtO9CNg06YBwryQdXZKSPqxjX0IKXNcZVhBjkgb8OhA223E%2FftIbEWz93Svuj5z4lUy%2FkK8MukPKZ53YDRBWJl%2BEl1L9iUO8gkkilywyXzI0ndb57Zg96tzU5E0yRIEEh53JzQtM9qr1JY8KP%2FbDM8bmY9%2F8QNwn%2FTUH%2BH3XCwc4xyhvd7bw7rz%2Boj6Kfy%2FncjlIX3l%2B147zCSnlhj4Tg%2BsDCIrp7UBjqkAWGab8L1ZWqywUtjVg%2FKrxHbjv2sKQsRiAWWzH7%2BdjYNBxWXIHPJ1qYLG%2FIP5xfjXgdrFbAJbPws7gKez3w%2BterGqu1hWYDmgy%2BL2VMqB1rh0daDRcxl89hFE967ByU1vUdyqoQ5S6%2Bd00fiV55r5OOcdszQ%2F695PTRwz2WvZ5w875GAdpD4luSg8%2FtY6EhCEeDZ3rrXjLL5SoP8l4WpzkR6urWU&X-Amz-Signature=2f073df10a9ee07d82b5c52c98da61e8ad0281c6fbd884cdbb53484103c40e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOCVHAZ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf2p1jIn%2Fm8DwI8qsijWDZptN3c3639mjud%2FjUETR18AIhAPXocwYGeYsktTO3ejGV8xWqC%2FtPGkHTJOLUZrO1n2jPKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjFuZwn135iEQ3hQIq3AOOyAGpNEHGZuSiKZ5Evl8RQx6Dbt8Mj76gNol7M1dT3PzX%2BUwcfB4r3zNwhjXNrvuytqXkW7BKXMSUdwU42vlFdW%2Ft6YsmFgnybSke06Wv%2BKUDEe5sIxElD%2BYSpw3Ruc2iw4p%2Bjri2SaafbLyvYTIzW%2FD1HXQhxlKcJYuNuRxH1oyCx6HeP%2F03OlcbLFKx3B4kN8qHFoeBEfJb8hl70%2BAvGBYZrADUffbupIDn8ScNLlHjMv8lmZNLUV0S6IQb81PMrdHI2DxARD%2B8wuzR3YlRao4klYu6ejYomw9QNISyH7Zmg4lXKXCMPqHSe33WVlr2y4agoFDWCTAY4GbRRUTW2vGEjPJcRBUnsYvCO9E0hxX4tHCPwJEaQ8%2By%2FbsBqKt72818gZBEAfR408Shtr1GVb0wWBxpq4DmuMXtO9CNg06YBwryQdXZKSPqxjX0IKXNcZVhBjkgb8OhA223E%2FftIbEWz93Svuj5z4lUy%2FkK8MukPKZ53YDRBWJl%2BEl1L9iUO8gkkilywyXzI0ndb57Zg96tzU5E0yRIEEh53JzQtM9qr1JY8KP%2FbDM8bmY9%2F8QNwn%2FTUH%2BH3XCwc4xyhvd7bw7rz%2Boj6Kfy%2FncjlIX3l%2B147zCSnlhj4Tg%2BsDCIrp7UBjqkAWGab8L1ZWqywUtjVg%2FKrxHbjv2sKQsRiAWWzH7%2BdjYNBxWXIHPJ1qYLG%2FIP5xfjXgdrFbAJbPws7gKez3w%2BterGqu1hWYDmgy%2BL2VMqB1rh0daDRcxl89hFE967ByU1vUdyqoQ5S6%2Bd00fiV55r5OOcdszQ%2F695PTRwz2WvZ5w875GAdpD4luSg8%2FtY6EhCEeDZ3rrXjLL5SoP8l4WpzkR6urWU&X-Amz-Signature=0d1ac1d4bab41aade5430e7924b006f0eee39d2836ba488a1b1c02c581391892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOCVHAZ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf2p1jIn%2Fm8DwI8qsijWDZptN3c3639mjud%2FjUETR18AIhAPXocwYGeYsktTO3ejGV8xWqC%2FtPGkHTJOLUZrO1n2jPKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjFuZwn135iEQ3hQIq3AOOyAGpNEHGZuSiKZ5Evl8RQx6Dbt8Mj76gNol7M1dT3PzX%2BUwcfB4r3zNwhjXNrvuytqXkW7BKXMSUdwU42vlFdW%2Ft6YsmFgnybSke06Wv%2BKUDEe5sIxElD%2BYSpw3Ruc2iw4p%2Bjri2SaafbLyvYTIzW%2FD1HXQhxlKcJYuNuRxH1oyCx6HeP%2F03OlcbLFKx3B4kN8qHFoeBEfJb8hl70%2BAvGBYZrADUffbupIDn8ScNLlHjMv8lmZNLUV0S6IQb81PMrdHI2DxARD%2B8wuzR3YlRao4klYu6ejYomw9QNISyH7Zmg4lXKXCMPqHSe33WVlr2y4agoFDWCTAY4GbRRUTW2vGEjPJcRBUnsYvCO9E0hxX4tHCPwJEaQ8%2By%2FbsBqKt72818gZBEAfR408Shtr1GVb0wWBxpq4DmuMXtO9CNg06YBwryQdXZKSPqxjX0IKXNcZVhBjkgb8OhA223E%2FftIbEWz93Svuj5z4lUy%2FkK8MukPKZ53YDRBWJl%2BEl1L9iUO8gkkilywyXzI0ndb57Zg96tzU5E0yRIEEh53JzQtM9qr1JY8KP%2FbDM8bmY9%2F8QNwn%2FTUH%2BH3XCwc4xyhvd7bw7rz%2Boj6Kfy%2FncjlIX3l%2B147zCSnlhj4Tg%2BsDCIrp7UBjqkAWGab8L1ZWqywUtjVg%2FKrxHbjv2sKQsRiAWWzH7%2BdjYNBxWXIHPJ1qYLG%2FIP5xfjXgdrFbAJbPws7gKez3w%2BterGqu1hWYDmgy%2BL2VMqB1rh0daDRcxl89hFE967ByU1vUdyqoQ5S6%2Bd00fiV55r5OOcdszQ%2F695PTRwz2WvZ5w875GAdpD4luSg8%2FtY6EhCEeDZ3rrXjLL5SoP8l4WpzkR6urWU&X-Amz-Signature=4afaad39acc91b2b623da3c58b8ca6e38c5f9d3ebbaf413d03229151b0e4ac57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
