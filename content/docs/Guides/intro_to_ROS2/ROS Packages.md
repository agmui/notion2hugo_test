---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC32TK4B%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5zwY24mm7Ye3eqbQphWqVcZY3Ap6oY2UZVUcuL%2B7ogIhAPionycz%2B2XNvOW7cZIkWRKtalgI6zkRyY6Edbk1UDmvKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUXnXU0igUHPDuVI0q3ANLa55Np33N5G9ZKtx52L%2BAyOpTRxw%2FMlXWYUEA9NQfNQhg9D91HUrImHR1kJKhV4uEu88WmR5oJB2bYV2ajbJSxIfT25Ow3XY%2FzjqAkvh39guyGxAtiqtMJT0X7q53H3UmOKJDanSu72rVj2tDWU339Urai6lTIgK%2FWiEni0rbssbgdLdAMIcYGn2vpieHMonxLe3DvRley75GPYZeLt2%2FJBPD7xNbxOw%2FyPHgY6YujkG06gBQ7onaQLq0qCaJW6dX03MqaADSxNNyG44i8RL1bQor4ln%2Bia9M%2BPK%2Betu%2F4uLRglUHkytjKKzI3t6GMLA6NlXNcqX7QMzrE4X7eOW%2B3lYQZrFpsgDPOhzkQyujrCHIYl8Tn1DQXi8Ng%2F4nfbedX%2BQkkMt6mYPsLItrwPq4bHLnb9qt7ZcPUUwF5675uh8JnsAqKHgRtcVqD78oaoy4y9hA6W5Y3sFFMvdNL%2FSSBNJnKufOE9%2BiPWVIIV9yjufyJLVn25SJ0b39RfY8DKWcf4N8SKeJWRS020d81TQnxyNZQ0uwIXG7ZoBPWbrs4r%2FGWppjxDzDpKyWWMLOtkGHgRW8ElC8fh%2F1ePG30uG3wOzN3h9xeEov1b7zL6%2BUCweJegJYHp5uvCzeSjCQ7rTEBjqkAfZOPOBwdHmwA1WCwKhzBEXqIoCzIyQF%2F0OpoucJ1uBAIKMhl8g76ce9JI0ydtB5vrtm9wHKhZGp%2FVOQq5nefMhEYL88kEvTCy9mKrUZpLWrdm%2FOMBWtsCcWFv58Ldc2kBqCMl7b96%2FQoBKLdwH%2BRkiPiaQC0jxFxFLng3gbtLkozLsuJLfpHxv2sPFiVlhKBkfHkgWnMii5UGW6r7isTYVOaOHs&X-Amz-Signature=e9c78b6a9c10e1bb0e03ffe4ecea079d408fff6e6710b3cc7cf564f2d779ad34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC32TK4B%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5zwY24mm7Ye3eqbQphWqVcZY3Ap6oY2UZVUcuL%2B7ogIhAPionycz%2B2XNvOW7cZIkWRKtalgI6zkRyY6Edbk1UDmvKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUXnXU0igUHPDuVI0q3ANLa55Np33N5G9ZKtx52L%2BAyOpTRxw%2FMlXWYUEA9NQfNQhg9D91HUrImHR1kJKhV4uEu88WmR5oJB2bYV2ajbJSxIfT25Ow3XY%2FzjqAkvh39guyGxAtiqtMJT0X7q53H3UmOKJDanSu72rVj2tDWU339Urai6lTIgK%2FWiEni0rbssbgdLdAMIcYGn2vpieHMonxLe3DvRley75GPYZeLt2%2FJBPD7xNbxOw%2FyPHgY6YujkG06gBQ7onaQLq0qCaJW6dX03MqaADSxNNyG44i8RL1bQor4ln%2Bia9M%2BPK%2Betu%2F4uLRglUHkytjKKzI3t6GMLA6NlXNcqX7QMzrE4X7eOW%2B3lYQZrFpsgDPOhzkQyujrCHIYl8Tn1DQXi8Ng%2F4nfbedX%2BQkkMt6mYPsLItrwPq4bHLnb9qt7ZcPUUwF5675uh8JnsAqKHgRtcVqD78oaoy4y9hA6W5Y3sFFMvdNL%2FSSBNJnKufOE9%2BiPWVIIV9yjufyJLVn25SJ0b39RfY8DKWcf4N8SKeJWRS020d81TQnxyNZQ0uwIXG7ZoBPWbrs4r%2FGWppjxDzDpKyWWMLOtkGHgRW8ElC8fh%2F1ePG30uG3wOzN3h9xeEov1b7zL6%2BUCweJegJYHp5uvCzeSjCQ7rTEBjqkAfZOPOBwdHmwA1WCwKhzBEXqIoCzIyQF%2F0OpoucJ1uBAIKMhl8g76ce9JI0ydtB5vrtm9wHKhZGp%2FVOQq5nefMhEYL88kEvTCy9mKrUZpLWrdm%2FOMBWtsCcWFv58Ldc2kBqCMl7b96%2FQoBKLdwH%2BRkiPiaQC0jxFxFLng3gbtLkozLsuJLfpHxv2sPFiVlhKBkfHkgWnMii5UGW6r7isTYVOaOHs&X-Amz-Signature=8b438bc05897c660dbc0a6468197c11962a8a3b053a2fbea07b04579486bef7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC32TK4B%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5zwY24mm7Ye3eqbQphWqVcZY3Ap6oY2UZVUcuL%2B7ogIhAPionycz%2B2XNvOW7cZIkWRKtalgI6zkRyY6Edbk1UDmvKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUXnXU0igUHPDuVI0q3ANLa55Np33N5G9ZKtx52L%2BAyOpTRxw%2FMlXWYUEA9NQfNQhg9D91HUrImHR1kJKhV4uEu88WmR5oJB2bYV2ajbJSxIfT25Ow3XY%2FzjqAkvh39guyGxAtiqtMJT0X7q53H3UmOKJDanSu72rVj2tDWU339Urai6lTIgK%2FWiEni0rbssbgdLdAMIcYGn2vpieHMonxLe3DvRley75GPYZeLt2%2FJBPD7xNbxOw%2FyPHgY6YujkG06gBQ7onaQLq0qCaJW6dX03MqaADSxNNyG44i8RL1bQor4ln%2Bia9M%2BPK%2Betu%2F4uLRglUHkytjKKzI3t6GMLA6NlXNcqX7QMzrE4X7eOW%2B3lYQZrFpsgDPOhzkQyujrCHIYl8Tn1DQXi8Ng%2F4nfbedX%2BQkkMt6mYPsLItrwPq4bHLnb9qt7ZcPUUwF5675uh8JnsAqKHgRtcVqD78oaoy4y9hA6W5Y3sFFMvdNL%2FSSBNJnKufOE9%2BiPWVIIV9yjufyJLVn25SJ0b39RfY8DKWcf4N8SKeJWRS020d81TQnxyNZQ0uwIXG7ZoBPWbrs4r%2FGWppjxDzDpKyWWMLOtkGHgRW8ElC8fh%2F1ePG30uG3wOzN3h9xeEov1b7zL6%2BUCweJegJYHp5uvCzeSjCQ7rTEBjqkAfZOPOBwdHmwA1WCwKhzBEXqIoCzIyQF%2F0OpoucJ1uBAIKMhl8g76ce9JI0ydtB5vrtm9wHKhZGp%2FVOQq5nefMhEYL88kEvTCy9mKrUZpLWrdm%2FOMBWtsCcWFv58Ldc2kBqCMl7b96%2FQoBKLdwH%2BRkiPiaQC0jxFxFLng3gbtLkozLsuJLfpHxv2sPFiVlhKBkfHkgWnMii5UGW6r7isTYVOaOHs&X-Amz-Signature=06df0c484d2a9bb646c1bcf9254030f63a5e63e23facdfd934d0ca387cf629de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC32TK4B%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5zwY24mm7Ye3eqbQphWqVcZY3Ap6oY2UZVUcuL%2B7ogIhAPionycz%2B2XNvOW7cZIkWRKtalgI6zkRyY6Edbk1UDmvKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUXnXU0igUHPDuVI0q3ANLa55Np33N5G9ZKtx52L%2BAyOpTRxw%2FMlXWYUEA9NQfNQhg9D91HUrImHR1kJKhV4uEu88WmR5oJB2bYV2ajbJSxIfT25Ow3XY%2FzjqAkvh39guyGxAtiqtMJT0X7q53H3UmOKJDanSu72rVj2tDWU339Urai6lTIgK%2FWiEni0rbssbgdLdAMIcYGn2vpieHMonxLe3DvRley75GPYZeLt2%2FJBPD7xNbxOw%2FyPHgY6YujkG06gBQ7onaQLq0qCaJW6dX03MqaADSxNNyG44i8RL1bQor4ln%2Bia9M%2BPK%2Betu%2F4uLRglUHkytjKKzI3t6GMLA6NlXNcqX7QMzrE4X7eOW%2B3lYQZrFpsgDPOhzkQyujrCHIYl8Tn1DQXi8Ng%2F4nfbedX%2BQkkMt6mYPsLItrwPq4bHLnb9qt7ZcPUUwF5675uh8JnsAqKHgRtcVqD78oaoy4y9hA6W5Y3sFFMvdNL%2FSSBNJnKufOE9%2BiPWVIIV9yjufyJLVn25SJ0b39RfY8DKWcf4N8SKeJWRS020d81TQnxyNZQ0uwIXG7ZoBPWbrs4r%2FGWppjxDzDpKyWWMLOtkGHgRW8ElC8fh%2F1ePG30uG3wOzN3h9xeEov1b7zL6%2BUCweJegJYHp5uvCzeSjCQ7rTEBjqkAfZOPOBwdHmwA1WCwKhzBEXqIoCzIyQF%2F0OpoucJ1uBAIKMhl8g76ce9JI0ydtB5vrtm9wHKhZGp%2FVOQq5nefMhEYL88kEvTCy9mKrUZpLWrdm%2FOMBWtsCcWFv58Ldc2kBqCMl7b96%2FQoBKLdwH%2BRkiPiaQC0jxFxFLng3gbtLkozLsuJLfpHxv2sPFiVlhKBkfHkgWnMii5UGW6r7isTYVOaOHs&X-Amz-Signature=2ca00372821ec3275eafc6baad2c223443f2951ddc5debf8b6dd0b0c3bad4a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC32TK4B%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5zwY24mm7Ye3eqbQphWqVcZY3Ap6oY2UZVUcuL%2B7ogIhAPionycz%2B2XNvOW7cZIkWRKtalgI6zkRyY6Edbk1UDmvKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUXnXU0igUHPDuVI0q3ANLa55Np33N5G9ZKtx52L%2BAyOpTRxw%2FMlXWYUEA9NQfNQhg9D91HUrImHR1kJKhV4uEu88WmR5oJB2bYV2ajbJSxIfT25Ow3XY%2FzjqAkvh39guyGxAtiqtMJT0X7q53H3UmOKJDanSu72rVj2tDWU339Urai6lTIgK%2FWiEni0rbssbgdLdAMIcYGn2vpieHMonxLe3DvRley75GPYZeLt2%2FJBPD7xNbxOw%2FyPHgY6YujkG06gBQ7onaQLq0qCaJW6dX03MqaADSxNNyG44i8RL1bQor4ln%2Bia9M%2BPK%2Betu%2F4uLRglUHkytjKKzI3t6GMLA6NlXNcqX7QMzrE4X7eOW%2B3lYQZrFpsgDPOhzkQyujrCHIYl8Tn1DQXi8Ng%2F4nfbedX%2BQkkMt6mYPsLItrwPq4bHLnb9qt7ZcPUUwF5675uh8JnsAqKHgRtcVqD78oaoy4y9hA6W5Y3sFFMvdNL%2FSSBNJnKufOE9%2BiPWVIIV9yjufyJLVn25SJ0b39RfY8DKWcf4N8SKeJWRS020d81TQnxyNZQ0uwIXG7ZoBPWbrs4r%2FGWppjxDzDpKyWWMLOtkGHgRW8ElC8fh%2F1ePG30uG3wOzN3h9xeEov1b7zL6%2BUCweJegJYHp5uvCzeSjCQ7rTEBjqkAfZOPOBwdHmwA1WCwKhzBEXqIoCzIyQF%2F0OpoucJ1uBAIKMhl8g76ce9JI0ydtB5vrtm9wHKhZGp%2FVOQq5nefMhEYL88kEvTCy9mKrUZpLWrdm%2FOMBWtsCcWFv58Ldc2kBqCMl7b96%2FQoBKLdwH%2BRkiPiaQC0jxFxFLng3gbtLkozLsuJLfpHxv2sPFiVlhKBkfHkgWnMii5UGW6r7isTYVOaOHs&X-Amz-Signature=252dc517e596f56d7b2e3cd4283e3390f3e2b2032899adf2b0a0123ac98438b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC32TK4B%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5zwY24mm7Ye3eqbQphWqVcZY3Ap6oY2UZVUcuL%2B7ogIhAPionycz%2B2XNvOW7cZIkWRKtalgI6zkRyY6Edbk1UDmvKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUXnXU0igUHPDuVI0q3ANLa55Np33N5G9ZKtx52L%2BAyOpTRxw%2FMlXWYUEA9NQfNQhg9D91HUrImHR1kJKhV4uEu88WmR5oJB2bYV2ajbJSxIfT25Ow3XY%2FzjqAkvh39guyGxAtiqtMJT0X7q53H3UmOKJDanSu72rVj2tDWU339Urai6lTIgK%2FWiEni0rbssbgdLdAMIcYGn2vpieHMonxLe3DvRley75GPYZeLt2%2FJBPD7xNbxOw%2FyPHgY6YujkG06gBQ7onaQLq0qCaJW6dX03MqaADSxNNyG44i8RL1bQor4ln%2Bia9M%2BPK%2Betu%2F4uLRglUHkytjKKzI3t6GMLA6NlXNcqX7QMzrE4X7eOW%2B3lYQZrFpsgDPOhzkQyujrCHIYl8Tn1DQXi8Ng%2F4nfbedX%2BQkkMt6mYPsLItrwPq4bHLnb9qt7ZcPUUwF5675uh8JnsAqKHgRtcVqD78oaoy4y9hA6W5Y3sFFMvdNL%2FSSBNJnKufOE9%2BiPWVIIV9yjufyJLVn25SJ0b39RfY8DKWcf4N8SKeJWRS020d81TQnxyNZQ0uwIXG7ZoBPWbrs4r%2FGWppjxDzDpKyWWMLOtkGHgRW8ElC8fh%2F1ePG30uG3wOzN3h9xeEov1b7zL6%2BUCweJegJYHp5uvCzeSjCQ7rTEBjqkAfZOPOBwdHmwA1WCwKhzBEXqIoCzIyQF%2F0OpoucJ1uBAIKMhl8g76ce9JI0ydtB5vrtm9wHKhZGp%2FVOQq5nefMhEYL88kEvTCy9mKrUZpLWrdm%2FOMBWtsCcWFv58Ldc2kBqCMl7b96%2FQoBKLdwH%2BRkiPiaQC0jxFxFLng3gbtLkozLsuJLfpHxv2sPFiVlhKBkfHkgWnMii5UGW6r7isTYVOaOHs&X-Amz-Signature=39a21642c2e69ac182a9cc7db74001a4c34e02857bbe3d844f45aa6e48a10dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC32TK4B%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5zwY24mm7Ye3eqbQphWqVcZY3Ap6oY2UZVUcuL%2B7ogIhAPionycz%2B2XNvOW7cZIkWRKtalgI6zkRyY6Edbk1UDmvKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUXnXU0igUHPDuVI0q3ANLa55Np33N5G9ZKtx52L%2BAyOpTRxw%2FMlXWYUEA9NQfNQhg9D91HUrImHR1kJKhV4uEu88WmR5oJB2bYV2ajbJSxIfT25Ow3XY%2FzjqAkvh39guyGxAtiqtMJT0X7q53H3UmOKJDanSu72rVj2tDWU339Urai6lTIgK%2FWiEni0rbssbgdLdAMIcYGn2vpieHMonxLe3DvRley75GPYZeLt2%2FJBPD7xNbxOw%2FyPHgY6YujkG06gBQ7onaQLq0qCaJW6dX03MqaADSxNNyG44i8RL1bQor4ln%2Bia9M%2BPK%2Betu%2F4uLRglUHkytjKKzI3t6GMLA6NlXNcqX7QMzrE4X7eOW%2B3lYQZrFpsgDPOhzkQyujrCHIYl8Tn1DQXi8Ng%2F4nfbedX%2BQkkMt6mYPsLItrwPq4bHLnb9qt7ZcPUUwF5675uh8JnsAqKHgRtcVqD78oaoy4y9hA6W5Y3sFFMvdNL%2FSSBNJnKufOE9%2BiPWVIIV9yjufyJLVn25SJ0b39RfY8DKWcf4N8SKeJWRS020d81TQnxyNZQ0uwIXG7ZoBPWbrs4r%2FGWppjxDzDpKyWWMLOtkGHgRW8ElC8fh%2F1ePG30uG3wOzN3h9xeEov1b7zL6%2BUCweJegJYHp5uvCzeSjCQ7rTEBjqkAfZOPOBwdHmwA1WCwKhzBEXqIoCzIyQF%2F0OpoucJ1uBAIKMhl8g76ce9JI0ydtB5vrtm9wHKhZGp%2FVOQq5nefMhEYL88kEvTCy9mKrUZpLWrdm%2FOMBWtsCcWFv58Ldc2kBqCMl7b96%2FQoBKLdwH%2BRkiPiaQC0jxFxFLng3gbtLkozLsuJLfpHxv2sPFiVlhKBkfHkgWnMii5UGW6r7isTYVOaOHs&X-Amz-Signature=0e1eebd82e2f06cc98451d91e97e5044206c79830082af42e08d0332726d5033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
