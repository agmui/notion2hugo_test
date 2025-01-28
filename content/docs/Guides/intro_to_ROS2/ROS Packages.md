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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFH26P3F%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDg27vStWlQPCNN1OJOVtj1G%2B4Q9FUNhuZE2XE5x8mufQIgCOXHypkdOCfRq196H0dhjiO3ruxbAoSvknJBJYU5X0Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEk6EeOeo81app7duCrcAzTxZpW6O4ONUGW7yQGlsJkqqr%2FlQ4Vi8TnFmfRgGzg5aclNW3iiqr1CDWCZDzXfsmBFxtGYJ3Gv08qUI%2FHoJP8YoHLttf0a7m9%2Bx%2F4JowdVWFor8YxxqmDwMPRi2sEe9FJS1EPEgc2Y87JS%2Fdye17sLJ5TPONucpJgqnjJfxml8UZPtIBEvUHPfMjNopPuYc7tOMH2P6tOz8ZU9UqEd4wP9Km7VhMq3R6ajO1e3yIJnT%2BmAkP9srWPhIkS%2FeKl8eUVwhRSqwpBAuhrHXJQDTpGqEnDmpayzKEQFG%2F9QusL7MwGbSKrKGfjp%2B0OhX4MN%2FA8aybweNzBw2LDFiggdnV7e9g%2F1vpL5%2FQ31ewtA%2Fnf0I%2FzIvzZnmLBkWrANGrh9WtzRIcgyP4rpl%2FmzJuPjXHTq0XrGK9%2BIw1Tp4hcav50hxAJv410%2FzKZ20Jw0v1yeQjPoZ6O4T90S7KA8o%2FzC4nJa2W%2F6DBQe9kz9bk5fCY0SeZ%2BlOVk1z79E4XSfTLL7njG%2FvfgAut7NltphXfusGYeJqT0Cl3L66uqDNhrF9%2FxKgnfIKM3NTgd30oRtrChdcd0IUK6MXLR4O4rSzzsJseAMHFCCFwNlj%2Fx8BzREs01X%2FGl0OmPGAbCeVGviMLvj5LwGOqUBavs5gmdQHmeumij%2BoPQ7LuLLDzqBEQ4NQA81N%2BkEF48XqoKi77V7lWTNvQJ9lGRYf6WePmX6DVrwlsRbrHNQ2q7JJTPPjZXiU%2B2Bu%2FG6cjtUItCjP7v1%2FQofRngDx4b4McDYq%2F6tbXfuaHNbCAhQ6smip%2Bbr5e5QS6MZYOma3S3NyC8fGmtDoe9fPepAvDfuvSuNSZ6DJ%2F50EelOzPH91MaLvgKy&X-Amz-Signature=a7498aca64eaaaa0c003d92ca7e25c816f05a06c854a9e7b78f45291d2d2f3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFH26P3F%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDg27vStWlQPCNN1OJOVtj1G%2B4Q9FUNhuZE2XE5x8mufQIgCOXHypkdOCfRq196H0dhjiO3ruxbAoSvknJBJYU5X0Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEk6EeOeo81app7duCrcAzTxZpW6O4ONUGW7yQGlsJkqqr%2FlQ4Vi8TnFmfRgGzg5aclNW3iiqr1CDWCZDzXfsmBFxtGYJ3Gv08qUI%2FHoJP8YoHLttf0a7m9%2Bx%2F4JowdVWFor8YxxqmDwMPRi2sEe9FJS1EPEgc2Y87JS%2Fdye17sLJ5TPONucpJgqnjJfxml8UZPtIBEvUHPfMjNopPuYc7tOMH2P6tOz8ZU9UqEd4wP9Km7VhMq3R6ajO1e3yIJnT%2BmAkP9srWPhIkS%2FeKl8eUVwhRSqwpBAuhrHXJQDTpGqEnDmpayzKEQFG%2F9QusL7MwGbSKrKGfjp%2B0OhX4MN%2FA8aybweNzBw2LDFiggdnV7e9g%2F1vpL5%2FQ31ewtA%2Fnf0I%2FzIvzZnmLBkWrANGrh9WtzRIcgyP4rpl%2FmzJuPjXHTq0XrGK9%2BIw1Tp4hcav50hxAJv410%2FzKZ20Jw0v1yeQjPoZ6O4T90S7KA8o%2FzC4nJa2W%2F6DBQe9kz9bk5fCY0SeZ%2BlOVk1z79E4XSfTLL7njG%2FvfgAut7NltphXfusGYeJqT0Cl3L66uqDNhrF9%2FxKgnfIKM3NTgd30oRtrChdcd0IUK6MXLR4O4rSzzsJseAMHFCCFwNlj%2Fx8BzREs01X%2FGl0OmPGAbCeVGviMLvj5LwGOqUBavs5gmdQHmeumij%2BoPQ7LuLLDzqBEQ4NQA81N%2BkEF48XqoKi77V7lWTNvQJ9lGRYf6WePmX6DVrwlsRbrHNQ2q7JJTPPjZXiU%2B2Bu%2FG6cjtUItCjP7v1%2FQofRngDx4b4McDYq%2F6tbXfuaHNbCAhQ6smip%2Bbr5e5QS6MZYOma3S3NyC8fGmtDoe9fPepAvDfuvSuNSZ6DJ%2F50EelOzPH91MaLvgKy&X-Amz-Signature=71c8f33c7d9362f523a4e073a6dc683b0518ed635d0527579cbe406ea6edcb3f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFH26P3F%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDg27vStWlQPCNN1OJOVtj1G%2B4Q9FUNhuZE2XE5x8mufQIgCOXHypkdOCfRq196H0dhjiO3ruxbAoSvknJBJYU5X0Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEk6EeOeo81app7duCrcAzTxZpW6O4ONUGW7yQGlsJkqqr%2FlQ4Vi8TnFmfRgGzg5aclNW3iiqr1CDWCZDzXfsmBFxtGYJ3Gv08qUI%2FHoJP8YoHLttf0a7m9%2Bx%2F4JowdVWFor8YxxqmDwMPRi2sEe9FJS1EPEgc2Y87JS%2Fdye17sLJ5TPONucpJgqnjJfxml8UZPtIBEvUHPfMjNopPuYc7tOMH2P6tOz8ZU9UqEd4wP9Km7VhMq3R6ajO1e3yIJnT%2BmAkP9srWPhIkS%2FeKl8eUVwhRSqwpBAuhrHXJQDTpGqEnDmpayzKEQFG%2F9QusL7MwGbSKrKGfjp%2B0OhX4MN%2FA8aybweNzBw2LDFiggdnV7e9g%2F1vpL5%2FQ31ewtA%2Fnf0I%2FzIvzZnmLBkWrANGrh9WtzRIcgyP4rpl%2FmzJuPjXHTq0XrGK9%2BIw1Tp4hcav50hxAJv410%2FzKZ20Jw0v1yeQjPoZ6O4T90S7KA8o%2FzC4nJa2W%2F6DBQe9kz9bk5fCY0SeZ%2BlOVk1z79E4XSfTLL7njG%2FvfgAut7NltphXfusGYeJqT0Cl3L66uqDNhrF9%2FxKgnfIKM3NTgd30oRtrChdcd0IUK6MXLR4O4rSzzsJseAMHFCCFwNlj%2Fx8BzREs01X%2FGl0OmPGAbCeVGviMLvj5LwGOqUBavs5gmdQHmeumij%2BoPQ7LuLLDzqBEQ4NQA81N%2BkEF48XqoKi77V7lWTNvQJ9lGRYf6WePmX6DVrwlsRbrHNQ2q7JJTPPjZXiU%2B2Bu%2FG6cjtUItCjP7v1%2FQofRngDx4b4McDYq%2F6tbXfuaHNbCAhQ6smip%2Bbr5e5QS6MZYOma3S3NyC8fGmtDoe9fPepAvDfuvSuNSZ6DJ%2F50EelOzPH91MaLvgKy&X-Amz-Signature=b863deff85ca038732a9028f3fd57ab550b676ed492f4523b4d3b311edbbb7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFH26P3F%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDg27vStWlQPCNN1OJOVtj1G%2B4Q9FUNhuZE2XE5x8mufQIgCOXHypkdOCfRq196H0dhjiO3ruxbAoSvknJBJYU5X0Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEk6EeOeo81app7duCrcAzTxZpW6O4ONUGW7yQGlsJkqqr%2FlQ4Vi8TnFmfRgGzg5aclNW3iiqr1CDWCZDzXfsmBFxtGYJ3Gv08qUI%2FHoJP8YoHLttf0a7m9%2Bx%2F4JowdVWFor8YxxqmDwMPRi2sEe9FJS1EPEgc2Y87JS%2Fdye17sLJ5TPONucpJgqnjJfxml8UZPtIBEvUHPfMjNopPuYc7tOMH2P6tOz8ZU9UqEd4wP9Km7VhMq3R6ajO1e3yIJnT%2BmAkP9srWPhIkS%2FeKl8eUVwhRSqwpBAuhrHXJQDTpGqEnDmpayzKEQFG%2F9QusL7MwGbSKrKGfjp%2B0OhX4MN%2FA8aybweNzBw2LDFiggdnV7e9g%2F1vpL5%2FQ31ewtA%2Fnf0I%2FzIvzZnmLBkWrANGrh9WtzRIcgyP4rpl%2FmzJuPjXHTq0XrGK9%2BIw1Tp4hcav50hxAJv410%2FzKZ20Jw0v1yeQjPoZ6O4T90S7KA8o%2FzC4nJa2W%2F6DBQe9kz9bk5fCY0SeZ%2BlOVk1z79E4XSfTLL7njG%2FvfgAut7NltphXfusGYeJqT0Cl3L66uqDNhrF9%2FxKgnfIKM3NTgd30oRtrChdcd0IUK6MXLR4O4rSzzsJseAMHFCCFwNlj%2Fx8BzREs01X%2FGl0OmPGAbCeVGviMLvj5LwGOqUBavs5gmdQHmeumij%2BoPQ7LuLLDzqBEQ4NQA81N%2BkEF48XqoKi77V7lWTNvQJ9lGRYf6WePmX6DVrwlsRbrHNQ2q7JJTPPjZXiU%2B2Bu%2FG6cjtUItCjP7v1%2FQofRngDx4b4McDYq%2F6tbXfuaHNbCAhQ6smip%2Bbr5e5QS6MZYOma3S3NyC8fGmtDoe9fPepAvDfuvSuNSZ6DJ%2F50EelOzPH91MaLvgKy&X-Amz-Signature=d83bd484a5b8613c2e64a6f1f1bab2a7c959d3acd0a233ec9c4f1093fe27efe9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFH26P3F%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDg27vStWlQPCNN1OJOVtj1G%2B4Q9FUNhuZE2XE5x8mufQIgCOXHypkdOCfRq196H0dhjiO3ruxbAoSvknJBJYU5X0Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEk6EeOeo81app7duCrcAzTxZpW6O4ONUGW7yQGlsJkqqr%2FlQ4Vi8TnFmfRgGzg5aclNW3iiqr1CDWCZDzXfsmBFxtGYJ3Gv08qUI%2FHoJP8YoHLttf0a7m9%2Bx%2F4JowdVWFor8YxxqmDwMPRi2sEe9FJS1EPEgc2Y87JS%2Fdye17sLJ5TPONucpJgqnjJfxml8UZPtIBEvUHPfMjNopPuYc7tOMH2P6tOz8ZU9UqEd4wP9Km7VhMq3R6ajO1e3yIJnT%2BmAkP9srWPhIkS%2FeKl8eUVwhRSqwpBAuhrHXJQDTpGqEnDmpayzKEQFG%2F9QusL7MwGbSKrKGfjp%2B0OhX4MN%2FA8aybweNzBw2LDFiggdnV7e9g%2F1vpL5%2FQ31ewtA%2Fnf0I%2FzIvzZnmLBkWrANGrh9WtzRIcgyP4rpl%2FmzJuPjXHTq0XrGK9%2BIw1Tp4hcav50hxAJv410%2FzKZ20Jw0v1yeQjPoZ6O4T90S7KA8o%2FzC4nJa2W%2F6DBQe9kz9bk5fCY0SeZ%2BlOVk1z79E4XSfTLL7njG%2FvfgAut7NltphXfusGYeJqT0Cl3L66uqDNhrF9%2FxKgnfIKM3NTgd30oRtrChdcd0IUK6MXLR4O4rSzzsJseAMHFCCFwNlj%2Fx8BzREs01X%2FGl0OmPGAbCeVGviMLvj5LwGOqUBavs5gmdQHmeumij%2BoPQ7LuLLDzqBEQ4NQA81N%2BkEF48XqoKi77V7lWTNvQJ9lGRYf6WePmX6DVrwlsRbrHNQ2q7JJTPPjZXiU%2B2Bu%2FG6cjtUItCjP7v1%2FQofRngDx4b4McDYq%2F6tbXfuaHNbCAhQ6smip%2Bbr5e5QS6MZYOma3S3NyC8fGmtDoe9fPepAvDfuvSuNSZ6DJ%2F50EelOzPH91MaLvgKy&X-Amz-Signature=fbce1d4d2a8e6bb43a9be8bbd61b87fe2324bab91a4782a5baaf497af66e938a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFH26P3F%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDg27vStWlQPCNN1OJOVtj1G%2B4Q9FUNhuZE2XE5x8mufQIgCOXHypkdOCfRq196H0dhjiO3ruxbAoSvknJBJYU5X0Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEk6EeOeo81app7duCrcAzTxZpW6O4ONUGW7yQGlsJkqqr%2FlQ4Vi8TnFmfRgGzg5aclNW3iiqr1CDWCZDzXfsmBFxtGYJ3Gv08qUI%2FHoJP8YoHLttf0a7m9%2Bx%2F4JowdVWFor8YxxqmDwMPRi2sEe9FJS1EPEgc2Y87JS%2Fdye17sLJ5TPONucpJgqnjJfxml8UZPtIBEvUHPfMjNopPuYc7tOMH2P6tOz8ZU9UqEd4wP9Km7VhMq3R6ajO1e3yIJnT%2BmAkP9srWPhIkS%2FeKl8eUVwhRSqwpBAuhrHXJQDTpGqEnDmpayzKEQFG%2F9QusL7MwGbSKrKGfjp%2B0OhX4MN%2FA8aybweNzBw2LDFiggdnV7e9g%2F1vpL5%2FQ31ewtA%2Fnf0I%2FzIvzZnmLBkWrANGrh9WtzRIcgyP4rpl%2FmzJuPjXHTq0XrGK9%2BIw1Tp4hcav50hxAJv410%2FzKZ20Jw0v1yeQjPoZ6O4T90S7KA8o%2FzC4nJa2W%2F6DBQe9kz9bk5fCY0SeZ%2BlOVk1z79E4XSfTLL7njG%2FvfgAut7NltphXfusGYeJqT0Cl3L66uqDNhrF9%2FxKgnfIKM3NTgd30oRtrChdcd0IUK6MXLR4O4rSzzsJseAMHFCCFwNlj%2Fx8BzREs01X%2FGl0OmPGAbCeVGviMLvj5LwGOqUBavs5gmdQHmeumij%2BoPQ7LuLLDzqBEQ4NQA81N%2BkEF48XqoKi77V7lWTNvQJ9lGRYf6WePmX6DVrwlsRbrHNQ2q7JJTPPjZXiU%2B2Bu%2FG6cjtUItCjP7v1%2FQofRngDx4b4McDYq%2F6tbXfuaHNbCAhQ6smip%2Bbr5e5QS6MZYOma3S3NyC8fGmtDoe9fPepAvDfuvSuNSZ6DJ%2F50EelOzPH91MaLvgKy&X-Amz-Signature=dff29f068e431db51bf08af8d8ad94abcc0e0b96ce6d57ea990e1b4b3832ee34&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFH26P3F%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDg27vStWlQPCNN1OJOVtj1G%2B4Q9FUNhuZE2XE5x8mufQIgCOXHypkdOCfRq196H0dhjiO3ruxbAoSvknJBJYU5X0Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEk6EeOeo81app7duCrcAzTxZpW6O4ONUGW7yQGlsJkqqr%2FlQ4Vi8TnFmfRgGzg5aclNW3iiqr1CDWCZDzXfsmBFxtGYJ3Gv08qUI%2FHoJP8YoHLttf0a7m9%2Bx%2F4JowdVWFor8YxxqmDwMPRi2sEe9FJS1EPEgc2Y87JS%2Fdye17sLJ5TPONucpJgqnjJfxml8UZPtIBEvUHPfMjNopPuYc7tOMH2P6tOz8ZU9UqEd4wP9Km7VhMq3R6ajO1e3yIJnT%2BmAkP9srWPhIkS%2FeKl8eUVwhRSqwpBAuhrHXJQDTpGqEnDmpayzKEQFG%2F9QusL7MwGbSKrKGfjp%2B0OhX4MN%2FA8aybweNzBw2LDFiggdnV7e9g%2F1vpL5%2FQ31ewtA%2Fnf0I%2FzIvzZnmLBkWrANGrh9WtzRIcgyP4rpl%2FmzJuPjXHTq0XrGK9%2BIw1Tp4hcav50hxAJv410%2FzKZ20Jw0v1yeQjPoZ6O4T90S7KA8o%2FzC4nJa2W%2F6DBQe9kz9bk5fCY0SeZ%2BlOVk1z79E4XSfTLL7njG%2FvfgAut7NltphXfusGYeJqT0Cl3L66uqDNhrF9%2FxKgnfIKM3NTgd30oRtrChdcd0IUK6MXLR4O4rSzzsJseAMHFCCFwNlj%2Fx8BzREs01X%2FGl0OmPGAbCeVGviMLvj5LwGOqUBavs5gmdQHmeumij%2BoPQ7LuLLDzqBEQ4NQA81N%2BkEF48XqoKi77V7lWTNvQJ9lGRYf6WePmX6DVrwlsRbrHNQ2q7JJTPPjZXiU%2B2Bu%2FG6cjtUItCjP7v1%2FQofRngDx4b4McDYq%2F6tbXfuaHNbCAhQ6smip%2Bbr5e5QS6MZYOma3S3NyC8fGmtDoe9fPepAvDfuvSuNSZ6DJ%2F50EelOzPH91MaLvgKy&X-Amz-Signature=70f785429a6d154e2eea4d06f861ab01458f672da4708464cffbb0c24db19bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
