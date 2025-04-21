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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBO3Z5T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFNAan1%2BTugdW3khkihn%2BfdrEClVGoSAXgPYay7PIhdkAiA5hKbMm1Dbhersv7A0Ryb9H2W5VB8C1iYZ9eYeeeNP1CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9r00ZldixIOSBvLKtwDyNyx4Z5%2FhC66CNbm88GbAXyEqRf4qL7zcPhAF61y3%2BG5MzNH%2BmxT0lInvT0Kv8kNNSZWWHlK94X1kUErZO2ZmTz9nc5f0OZmQxr5R9ENqq4lJ4DrOfYdweFH1h8uf9Rs4geGXk%2BuE9uLx5CoCqgYhBXays7u5kx2vEA599cN3hmjySDqh7hArWTbYcwb2VposZdB%2BL23NImjSYXLTxFrVlnmc7a%2BNjVQD8gMp9%2FaHc9LrNiQjoa7Pwr%2BE6q8bt1wVDnrj8ZSsYURuP9epw8XLEMsXkuUmYVy1BP9k6Yl235p4cmseUW5ypuZD44Bys9f4ja30CPMxaTpyYSURlC%2FMs%2BFQxPxYI5HbsSx2mpM5HH3YviXsUKpkSWPI6wShUfQLlv3pbtJVoz9YJ8SQyba26H7BgcIfHm1fnoHaFn9T1fuQ0jVpjpxISpOwsqy%2Bl0TJztQM%2FBbam5dUy%2B%2FrHnXnxR9Y7CJVG3xMRn8NW9w2ATZdsYnwW7cQ9e7dWiLzIMO7pZGyLFKxOP%2F9GijauE5CTaJu09TvG0d0Ln3rJLab1rk5VZBoC7n%2Fm1QLmTOJvFrrk%2B327Sm9yDOucMKA8fKrGyCJBlsCNNlVzZxdJTeWZsury5121RV3xpGm0gwwviWwAY6pgGgCRnwf1HltqTP281Rm%2Fd2jXatvdSxzIdOvogdTVZvlFKeKgOlRFrKXsqGvGNg8p1wOEnIRBd5VwAQtv%2BcM3llr8Av0fax5qhYv7yw9ow7ER4vgMzuY9og64pflbVshPcHeJfIs%2FvSe%2FVao6B%2FDo8udgEQG4go4YJcd0i2%2BtKYnV%2F8JPLIGvcNQB6WRWFXF180QRFsJ2U2O7rBa3tFtLHa%2B0fbqORu&X-Amz-Signature=55b230ca3020fcce46d3c0fd53cf037f767af191cc5a99fcdb9c4951312312fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBO3Z5T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFNAan1%2BTugdW3khkihn%2BfdrEClVGoSAXgPYay7PIhdkAiA5hKbMm1Dbhersv7A0Ryb9H2W5VB8C1iYZ9eYeeeNP1CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9r00ZldixIOSBvLKtwDyNyx4Z5%2FhC66CNbm88GbAXyEqRf4qL7zcPhAF61y3%2BG5MzNH%2BmxT0lInvT0Kv8kNNSZWWHlK94X1kUErZO2ZmTz9nc5f0OZmQxr5R9ENqq4lJ4DrOfYdweFH1h8uf9Rs4geGXk%2BuE9uLx5CoCqgYhBXays7u5kx2vEA599cN3hmjySDqh7hArWTbYcwb2VposZdB%2BL23NImjSYXLTxFrVlnmc7a%2BNjVQD8gMp9%2FaHc9LrNiQjoa7Pwr%2BE6q8bt1wVDnrj8ZSsYURuP9epw8XLEMsXkuUmYVy1BP9k6Yl235p4cmseUW5ypuZD44Bys9f4ja30CPMxaTpyYSURlC%2FMs%2BFQxPxYI5HbsSx2mpM5HH3YviXsUKpkSWPI6wShUfQLlv3pbtJVoz9YJ8SQyba26H7BgcIfHm1fnoHaFn9T1fuQ0jVpjpxISpOwsqy%2Bl0TJztQM%2FBbam5dUy%2B%2FrHnXnxR9Y7CJVG3xMRn8NW9w2ATZdsYnwW7cQ9e7dWiLzIMO7pZGyLFKxOP%2F9GijauE5CTaJu09TvG0d0Ln3rJLab1rk5VZBoC7n%2Fm1QLmTOJvFrrk%2B327Sm9yDOucMKA8fKrGyCJBlsCNNlVzZxdJTeWZsury5121RV3xpGm0gwwviWwAY6pgGgCRnwf1HltqTP281Rm%2Fd2jXatvdSxzIdOvogdTVZvlFKeKgOlRFrKXsqGvGNg8p1wOEnIRBd5VwAQtv%2BcM3llr8Av0fax5qhYv7yw9ow7ER4vgMzuY9og64pflbVshPcHeJfIs%2FvSe%2FVao6B%2FDo8udgEQG4go4YJcd0i2%2BtKYnV%2F8JPLIGvcNQB6WRWFXF180QRFsJ2U2O7rBa3tFtLHa%2B0fbqORu&X-Amz-Signature=619701d39c5f027eca57d5a900af261744be435e7f9b882bf6449be5f3211cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBO3Z5T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFNAan1%2BTugdW3khkihn%2BfdrEClVGoSAXgPYay7PIhdkAiA5hKbMm1Dbhersv7A0Ryb9H2W5VB8C1iYZ9eYeeeNP1CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9r00ZldixIOSBvLKtwDyNyx4Z5%2FhC66CNbm88GbAXyEqRf4qL7zcPhAF61y3%2BG5MzNH%2BmxT0lInvT0Kv8kNNSZWWHlK94X1kUErZO2ZmTz9nc5f0OZmQxr5R9ENqq4lJ4DrOfYdweFH1h8uf9Rs4geGXk%2BuE9uLx5CoCqgYhBXays7u5kx2vEA599cN3hmjySDqh7hArWTbYcwb2VposZdB%2BL23NImjSYXLTxFrVlnmc7a%2BNjVQD8gMp9%2FaHc9LrNiQjoa7Pwr%2BE6q8bt1wVDnrj8ZSsYURuP9epw8XLEMsXkuUmYVy1BP9k6Yl235p4cmseUW5ypuZD44Bys9f4ja30CPMxaTpyYSURlC%2FMs%2BFQxPxYI5HbsSx2mpM5HH3YviXsUKpkSWPI6wShUfQLlv3pbtJVoz9YJ8SQyba26H7BgcIfHm1fnoHaFn9T1fuQ0jVpjpxISpOwsqy%2Bl0TJztQM%2FBbam5dUy%2B%2FrHnXnxR9Y7CJVG3xMRn8NW9w2ATZdsYnwW7cQ9e7dWiLzIMO7pZGyLFKxOP%2F9GijauE5CTaJu09TvG0d0Ln3rJLab1rk5VZBoC7n%2Fm1QLmTOJvFrrk%2B327Sm9yDOucMKA8fKrGyCJBlsCNNlVzZxdJTeWZsury5121RV3xpGm0gwwviWwAY6pgGgCRnwf1HltqTP281Rm%2Fd2jXatvdSxzIdOvogdTVZvlFKeKgOlRFrKXsqGvGNg8p1wOEnIRBd5VwAQtv%2BcM3llr8Av0fax5qhYv7yw9ow7ER4vgMzuY9og64pflbVshPcHeJfIs%2FvSe%2FVao6B%2FDo8udgEQG4go4YJcd0i2%2BtKYnV%2F8JPLIGvcNQB6WRWFXF180QRFsJ2U2O7rBa3tFtLHa%2B0fbqORu&X-Amz-Signature=ff96b2881142231305d7560a817059da77593e5b22753434642224097cd1cfbc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBO3Z5T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFNAan1%2BTugdW3khkihn%2BfdrEClVGoSAXgPYay7PIhdkAiA5hKbMm1Dbhersv7A0Ryb9H2W5VB8C1iYZ9eYeeeNP1CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9r00ZldixIOSBvLKtwDyNyx4Z5%2FhC66CNbm88GbAXyEqRf4qL7zcPhAF61y3%2BG5MzNH%2BmxT0lInvT0Kv8kNNSZWWHlK94X1kUErZO2ZmTz9nc5f0OZmQxr5R9ENqq4lJ4DrOfYdweFH1h8uf9Rs4geGXk%2BuE9uLx5CoCqgYhBXays7u5kx2vEA599cN3hmjySDqh7hArWTbYcwb2VposZdB%2BL23NImjSYXLTxFrVlnmc7a%2BNjVQD8gMp9%2FaHc9LrNiQjoa7Pwr%2BE6q8bt1wVDnrj8ZSsYURuP9epw8XLEMsXkuUmYVy1BP9k6Yl235p4cmseUW5ypuZD44Bys9f4ja30CPMxaTpyYSURlC%2FMs%2BFQxPxYI5HbsSx2mpM5HH3YviXsUKpkSWPI6wShUfQLlv3pbtJVoz9YJ8SQyba26H7BgcIfHm1fnoHaFn9T1fuQ0jVpjpxISpOwsqy%2Bl0TJztQM%2FBbam5dUy%2B%2FrHnXnxR9Y7CJVG3xMRn8NW9w2ATZdsYnwW7cQ9e7dWiLzIMO7pZGyLFKxOP%2F9GijauE5CTaJu09TvG0d0Ln3rJLab1rk5VZBoC7n%2Fm1QLmTOJvFrrk%2B327Sm9yDOucMKA8fKrGyCJBlsCNNlVzZxdJTeWZsury5121RV3xpGm0gwwviWwAY6pgGgCRnwf1HltqTP281Rm%2Fd2jXatvdSxzIdOvogdTVZvlFKeKgOlRFrKXsqGvGNg8p1wOEnIRBd5VwAQtv%2BcM3llr8Av0fax5qhYv7yw9ow7ER4vgMzuY9og64pflbVshPcHeJfIs%2FvSe%2FVao6B%2FDo8udgEQG4go4YJcd0i2%2BtKYnV%2F8JPLIGvcNQB6WRWFXF180QRFsJ2U2O7rBa3tFtLHa%2B0fbqORu&X-Amz-Signature=cf2aa542df4e159f6918b8dcd2ddd99b49e177bbaa2632e82246f0b5c1bf76b2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBO3Z5T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFNAan1%2BTugdW3khkihn%2BfdrEClVGoSAXgPYay7PIhdkAiA5hKbMm1Dbhersv7A0Ryb9H2W5VB8C1iYZ9eYeeeNP1CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9r00ZldixIOSBvLKtwDyNyx4Z5%2FhC66CNbm88GbAXyEqRf4qL7zcPhAF61y3%2BG5MzNH%2BmxT0lInvT0Kv8kNNSZWWHlK94X1kUErZO2ZmTz9nc5f0OZmQxr5R9ENqq4lJ4DrOfYdweFH1h8uf9Rs4geGXk%2BuE9uLx5CoCqgYhBXays7u5kx2vEA599cN3hmjySDqh7hArWTbYcwb2VposZdB%2BL23NImjSYXLTxFrVlnmc7a%2BNjVQD8gMp9%2FaHc9LrNiQjoa7Pwr%2BE6q8bt1wVDnrj8ZSsYURuP9epw8XLEMsXkuUmYVy1BP9k6Yl235p4cmseUW5ypuZD44Bys9f4ja30CPMxaTpyYSURlC%2FMs%2BFQxPxYI5HbsSx2mpM5HH3YviXsUKpkSWPI6wShUfQLlv3pbtJVoz9YJ8SQyba26H7BgcIfHm1fnoHaFn9T1fuQ0jVpjpxISpOwsqy%2Bl0TJztQM%2FBbam5dUy%2B%2FrHnXnxR9Y7CJVG3xMRn8NW9w2ATZdsYnwW7cQ9e7dWiLzIMO7pZGyLFKxOP%2F9GijauE5CTaJu09TvG0d0Ln3rJLab1rk5VZBoC7n%2Fm1QLmTOJvFrrk%2B327Sm9yDOucMKA8fKrGyCJBlsCNNlVzZxdJTeWZsury5121RV3xpGm0gwwviWwAY6pgGgCRnwf1HltqTP281Rm%2Fd2jXatvdSxzIdOvogdTVZvlFKeKgOlRFrKXsqGvGNg8p1wOEnIRBd5VwAQtv%2BcM3llr8Av0fax5qhYv7yw9ow7ER4vgMzuY9og64pflbVshPcHeJfIs%2FvSe%2FVao6B%2FDo8udgEQG4go4YJcd0i2%2BtKYnV%2F8JPLIGvcNQB6WRWFXF180QRFsJ2U2O7rBa3tFtLHa%2B0fbqORu&X-Amz-Signature=ca00aadb39bb20a49fd77322aece3b959eaccf1c4a8376e5c193da9f7c43767e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBO3Z5T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFNAan1%2BTugdW3khkihn%2BfdrEClVGoSAXgPYay7PIhdkAiA5hKbMm1Dbhersv7A0Ryb9H2W5VB8C1iYZ9eYeeeNP1CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9r00ZldixIOSBvLKtwDyNyx4Z5%2FhC66CNbm88GbAXyEqRf4qL7zcPhAF61y3%2BG5MzNH%2BmxT0lInvT0Kv8kNNSZWWHlK94X1kUErZO2ZmTz9nc5f0OZmQxr5R9ENqq4lJ4DrOfYdweFH1h8uf9Rs4geGXk%2BuE9uLx5CoCqgYhBXays7u5kx2vEA599cN3hmjySDqh7hArWTbYcwb2VposZdB%2BL23NImjSYXLTxFrVlnmc7a%2BNjVQD8gMp9%2FaHc9LrNiQjoa7Pwr%2BE6q8bt1wVDnrj8ZSsYURuP9epw8XLEMsXkuUmYVy1BP9k6Yl235p4cmseUW5ypuZD44Bys9f4ja30CPMxaTpyYSURlC%2FMs%2BFQxPxYI5HbsSx2mpM5HH3YviXsUKpkSWPI6wShUfQLlv3pbtJVoz9YJ8SQyba26H7BgcIfHm1fnoHaFn9T1fuQ0jVpjpxISpOwsqy%2Bl0TJztQM%2FBbam5dUy%2B%2FrHnXnxR9Y7CJVG3xMRn8NW9w2ATZdsYnwW7cQ9e7dWiLzIMO7pZGyLFKxOP%2F9GijauE5CTaJu09TvG0d0Ln3rJLab1rk5VZBoC7n%2Fm1QLmTOJvFrrk%2B327Sm9yDOucMKA8fKrGyCJBlsCNNlVzZxdJTeWZsury5121RV3xpGm0gwwviWwAY6pgGgCRnwf1HltqTP281Rm%2Fd2jXatvdSxzIdOvogdTVZvlFKeKgOlRFrKXsqGvGNg8p1wOEnIRBd5VwAQtv%2BcM3llr8Av0fax5qhYv7yw9ow7ER4vgMzuY9og64pflbVshPcHeJfIs%2FvSe%2FVao6B%2FDo8udgEQG4go4YJcd0i2%2BtKYnV%2F8JPLIGvcNQB6WRWFXF180QRFsJ2U2O7rBa3tFtLHa%2B0fbqORu&X-Amz-Signature=f9943f1029893bd70892f2eb3c15e5199798dc7fd2892174db8204272bf723ba&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBO3Z5T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFNAan1%2BTugdW3khkihn%2BfdrEClVGoSAXgPYay7PIhdkAiA5hKbMm1Dbhersv7A0Ryb9H2W5VB8C1iYZ9eYeeeNP1CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG9r00ZldixIOSBvLKtwDyNyx4Z5%2FhC66CNbm88GbAXyEqRf4qL7zcPhAF61y3%2BG5MzNH%2BmxT0lInvT0Kv8kNNSZWWHlK94X1kUErZO2ZmTz9nc5f0OZmQxr5R9ENqq4lJ4DrOfYdweFH1h8uf9Rs4geGXk%2BuE9uLx5CoCqgYhBXays7u5kx2vEA599cN3hmjySDqh7hArWTbYcwb2VposZdB%2BL23NImjSYXLTxFrVlnmc7a%2BNjVQD8gMp9%2FaHc9LrNiQjoa7Pwr%2BE6q8bt1wVDnrj8ZSsYURuP9epw8XLEMsXkuUmYVy1BP9k6Yl235p4cmseUW5ypuZD44Bys9f4ja30CPMxaTpyYSURlC%2FMs%2BFQxPxYI5HbsSx2mpM5HH3YviXsUKpkSWPI6wShUfQLlv3pbtJVoz9YJ8SQyba26H7BgcIfHm1fnoHaFn9T1fuQ0jVpjpxISpOwsqy%2Bl0TJztQM%2FBbam5dUy%2B%2FrHnXnxR9Y7CJVG3xMRn8NW9w2ATZdsYnwW7cQ9e7dWiLzIMO7pZGyLFKxOP%2F9GijauE5CTaJu09TvG0d0Ln3rJLab1rk5VZBoC7n%2Fm1QLmTOJvFrrk%2B327Sm9yDOucMKA8fKrGyCJBlsCNNlVzZxdJTeWZsury5121RV3xpGm0gwwviWwAY6pgGgCRnwf1HltqTP281Rm%2Fd2jXatvdSxzIdOvogdTVZvlFKeKgOlRFrKXsqGvGNg8p1wOEnIRBd5VwAQtv%2BcM3llr8Av0fax5qhYv7yw9ow7ER4vgMzuY9og64pflbVshPcHeJfIs%2FvSe%2FVao6B%2FDo8udgEQG4go4YJcd0i2%2BtKYnV%2F8JPLIGvcNQB6WRWFXF180QRFsJ2U2O7rBa3tFtLHa%2B0fbqORu&X-Amz-Signature=7690d93081e045d3b8691314bce15cc7e17fd9dccbc2cfa003dfedfa14f6cdc6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
