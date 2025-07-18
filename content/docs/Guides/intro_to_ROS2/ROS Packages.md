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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUMKKEW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDDA%2FsEYO5cBW0FlCqCgb8V%2Bp05TsiD9cSYVT2Sb%2BVmIAiEAwnqYqHNVdf9lDMSP0X6ZZ90TaNTHTlQxmmPdLXUUKdUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8TgrXf9Br3QX90hCrcA%2FlQFNVWJgR5xul%2FwzaDaXDyb%2FH9hYpC6iDCfImTYM9XKVaQVVdpNEnCGLb%2B2uupkkLjh80ELlX%2FNhSocQ%2F5jITe5JaF0VAOLgx1lFuBOuIVXnq%2BzhcO%2FtFHU9QNqSMDqAWGXFC4cHjhPzAe6i2dZz%2BeCTj2uK3ou%2Fb9ezVkvd8JQs3ZtdSQYgfxqbDCtYMHKO5aKCUJKxzP5%2BAWs%2FYdpfiGQ0gBxfz47cJ%2FYz3BRFG%2Fjh1A%2Fz0DzTW3L6ub940xLvcvR8Rq588I%2FLToyzcBHe1G6FE%2FpdLgW1%2FIvDfiK9rzoFuN26TxoLxoO8uzRUNZLKEoQye4%2B2zDLfosGiaHt3XKRj1WCS0U3Uvo0ohYcg4qFNsuvrfIwTA3KhxWS1qADRO%2BzJulVeQiKb3MvqO1zBrj%2BLpG5ZdUi%2FCx9UkySJW6%2B%2FXH%2Baf224vSSc%2BWfBDDg7maeCedsizZG2HYpMZv1dV5dTlIQtHFb0QkyMxetf8IOLXHTEZCkF7izZX7Mxv8ZzH%2BVXlUBeXGfe%2BimvgytuZIpLrSNL2Sjxd9IWKIBZ%2F5RauwBrO90KyVujCXfzrx6VgWbq9ale6IqG4kQPzDD5faA8fmtKonfOg23P0g7PQqAs4ObOd1GLm2vcExMM3P6MMGOqUBMCwMHvD3LHgiWELy8jcmUK0ZXl1l4TtNItOvnRLuUWofW6r%2FYR6WlB4SLWOu0F5q5%2BWJYHHeE3P%2BflKv6Ctitp4jnSVRKtD3%2BqOZiJl9Xf4Ufvc%2BoGRCbXfx%2FyYDMl2ozgAy%2F40NAWdw0KcN%2F2hMNYsBUPx0N7Oi9Nx2GBoOEqmHgiQFWmQJ2ovPoNm2IYCnVUetHrvz8TmcHkU97GVmNE53CnFo&X-Amz-Signature=2eceebea8114f0f732365d057c73dce61d9677100e77783c2e9662bc230d1c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUMKKEW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDDA%2FsEYO5cBW0FlCqCgb8V%2Bp05TsiD9cSYVT2Sb%2BVmIAiEAwnqYqHNVdf9lDMSP0X6ZZ90TaNTHTlQxmmPdLXUUKdUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8TgrXf9Br3QX90hCrcA%2FlQFNVWJgR5xul%2FwzaDaXDyb%2FH9hYpC6iDCfImTYM9XKVaQVVdpNEnCGLb%2B2uupkkLjh80ELlX%2FNhSocQ%2F5jITe5JaF0VAOLgx1lFuBOuIVXnq%2BzhcO%2FtFHU9QNqSMDqAWGXFC4cHjhPzAe6i2dZz%2BeCTj2uK3ou%2Fb9ezVkvd8JQs3ZtdSQYgfxqbDCtYMHKO5aKCUJKxzP5%2BAWs%2FYdpfiGQ0gBxfz47cJ%2FYz3BRFG%2Fjh1A%2Fz0DzTW3L6ub940xLvcvR8Rq588I%2FLToyzcBHe1G6FE%2FpdLgW1%2FIvDfiK9rzoFuN26TxoLxoO8uzRUNZLKEoQye4%2B2zDLfosGiaHt3XKRj1WCS0U3Uvo0ohYcg4qFNsuvrfIwTA3KhxWS1qADRO%2BzJulVeQiKb3MvqO1zBrj%2BLpG5ZdUi%2FCx9UkySJW6%2B%2FXH%2Baf224vSSc%2BWfBDDg7maeCedsizZG2HYpMZv1dV5dTlIQtHFb0QkyMxetf8IOLXHTEZCkF7izZX7Mxv8ZzH%2BVXlUBeXGfe%2BimvgytuZIpLrSNL2Sjxd9IWKIBZ%2F5RauwBrO90KyVujCXfzrx6VgWbq9ale6IqG4kQPzDD5faA8fmtKonfOg23P0g7PQqAs4ObOd1GLm2vcExMM3P6MMGOqUBMCwMHvD3LHgiWELy8jcmUK0ZXl1l4TtNItOvnRLuUWofW6r%2FYR6WlB4SLWOu0F5q5%2BWJYHHeE3P%2BflKv6Ctitp4jnSVRKtD3%2BqOZiJl9Xf4Ufvc%2BoGRCbXfx%2FyYDMl2ozgAy%2F40NAWdw0KcN%2F2hMNYsBUPx0N7Oi9Nx2GBoOEqmHgiQFWmQJ2ovPoNm2IYCnVUetHrvz8TmcHkU97GVmNE53CnFo&X-Amz-Signature=885e323a52721d4026fa4b7d1bd042b67446cee321722607cbbac6bbb4ebbbec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUMKKEW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDDA%2FsEYO5cBW0FlCqCgb8V%2Bp05TsiD9cSYVT2Sb%2BVmIAiEAwnqYqHNVdf9lDMSP0X6ZZ90TaNTHTlQxmmPdLXUUKdUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8TgrXf9Br3QX90hCrcA%2FlQFNVWJgR5xul%2FwzaDaXDyb%2FH9hYpC6iDCfImTYM9XKVaQVVdpNEnCGLb%2B2uupkkLjh80ELlX%2FNhSocQ%2F5jITe5JaF0VAOLgx1lFuBOuIVXnq%2BzhcO%2FtFHU9QNqSMDqAWGXFC4cHjhPzAe6i2dZz%2BeCTj2uK3ou%2Fb9ezVkvd8JQs3ZtdSQYgfxqbDCtYMHKO5aKCUJKxzP5%2BAWs%2FYdpfiGQ0gBxfz47cJ%2FYz3BRFG%2Fjh1A%2Fz0DzTW3L6ub940xLvcvR8Rq588I%2FLToyzcBHe1G6FE%2FpdLgW1%2FIvDfiK9rzoFuN26TxoLxoO8uzRUNZLKEoQye4%2B2zDLfosGiaHt3XKRj1WCS0U3Uvo0ohYcg4qFNsuvrfIwTA3KhxWS1qADRO%2BzJulVeQiKb3MvqO1zBrj%2BLpG5ZdUi%2FCx9UkySJW6%2B%2FXH%2Baf224vSSc%2BWfBDDg7maeCedsizZG2HYpMZv1dV5dTlIQtHFb0QkyMxetf8IOLXHTEZCkF7izZX7Mxv8ZzH%2BVXlUBeXGfe%2BimvgytuZIpLrSNL2Sjxd9IWKIBZ%2F5RauwBrO90KyVujCXfzrx6VgWbq9ale6IqG4kQPzDD5faA8fmtKonfOg23P0g7PQqAs4ObOd1GLm2vcExMM3P6MMGOqUBMCwMHvD3LHgiWELy8jcmUK0ZXl1l4TtNItOvnRLuUWofW6r%2FYR6WlB4SLWOu0F5q5%2BWJYHHeE3P%2BflKv6Ctitp4jnSVRKtD3%2BqOZiJl9Xf4Ufvc%2BoGRCbXfx%2FyYDMl2ozgAy%2F40NAWdw0KcN%2F2hMNYsBUPx0N7Oi9Nx2GBoOEqmHgiQFWmQJ2ovPoNm2IYCnVUetHrvz8TmcHkU97GVmNE53CnFo&X-Amz-Signature=73ebe17372ca81833ca9bfd5be8fd90e3f95eb6877d9155bb86480f44f580042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUMKKEW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDDA%2FsEYO5cBW0FlCqCgb8V%2Bp05TsiD9cSYVT2Sb%2BVmIAiEAwnqYqHNVdf9lDMSP0X6ZZ90TaNTHTlQxmmPdLXUUKdUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8TgrXf9Br3QX90hCrcA%2FlQFNVWJgR5xul%2FwzaDaXDyb%2FH9hYpC6iDCfImTYM9XKVaQVVdpNEnCGLb%2B2uupkkLjh80ELlX%2FNhSocQ%2F5jITe5JaF0VAOLgx1lFuBOuIVXnq%2BzhcO%2FtFHU9QNqSMDqAWGXFC4cHjhPzAe6i2dZz%2BeCTj2uK3ou%2Fb9ezVkvd8JQs3ZtdSQYgfxqbDCtYMHKO5aKCUJKxzP5%2BAWs%2FYdpfiGQ0gBxfz47cJ%2FYz3BRFG%2Fjh1A%2Fz0DzTW3L6ub940xLvcvR8Rq588I%2FLToyzcBHe1G6FE%2FpdLgW1%2FIvDfiK9rzoFuN26TxoLxoO8uzRUNZLKEoQye4%2B2zDLfosGiaHt3XKRj1WCS0U3Uvo0ohYcg4qFNsuvrfIwTA3KhxWS1qADRO%2BzJulVeQiKb3MvqO1zBrj%2BLpG5ZdUi%2FCx9UkySJW6%2B%2FXH%2Baf224vSSc%2BWfBDDg7maeCedsizZG2HYpMZv1dV5dTlIQtHFb0QkyMxetf8IOLXHTEZCkF7izZX7Mxv8ZzH%2BVXlUBeXGfe%2BimvgytuZIpLrSNL2Sjxd9IWKIBZ%2F5RauwBrO90KyVujCXfzrx6VgWbq9ale6IqG4kQPzDD5faA8fmtKonfOg23P0g7PQqAs4ObOd1GLm2vcExMM3P6MMGOqUBMCwMHvD3LHgiWELy8jcmUK0ZXl1l4TtNItOvnRLuUWofW6r%2FYR6WlB4SLWOu0F5q5%2BWJYHHeE3P%2BflKv6Ctitp4jnSVRKtD3%2BqOZiJl9Xf4Ufvc%2BoGRCbXfx%2FyYDMl2ozgAy%2F40NAWdw0KcN%2F2hMNYsBUPx0N7Oi9Nx2GBoOEqmHgiQFWmQJ2ovPoNm2IYCnVUetHrvz8TmcHkU97GVmNE53CnFo&X-Amz-Signature=396b825334e03cf6f66c98d0284319ccea2dd60646b3c1f74c8a220ff621551e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUMKKEW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDDA%2FsEYO5cBW0FlCqCgb8V%2Bp05TsiD9cSYVT2Sb%2BVmIAiEAwnqYqHNVdf9lDMSP0X6ZZ90TaNTHTlQxmmPdLXUUKdUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8TgrXf9Br3QX90hCrcA%2FlQFNVWJgR5xul%2FwzaDaXDyb%2FH9hYpC6iDCfImTYM9XKVaQVVdpNEnCGLb%2B2uupkkLjh80ELlX%2FNhSocQ%2F5jITe5JaF0VAOLgx1lFuBOuIVXnq%2BzhcO%2FtFHU9QNqSMDqAWGXFC4cHjhPzAe6i2dZz%2BeCTj2uK3ou%2Fb9ezVkvd8JQs3ZtdSQYgfxqbDCtYMHKO5aKCUJKxzP5%2BAWs%2FYdpfiGQ0gBxfz47cJ%2FYz3BRFG%2Fjh1A%2Fz0DzTW3L6ub940xLvcvR8Rq588I%2FLToyzcBHe1G6FE%2FpdLgW1%2FIvDfiK9rzoFuN26TxoLxoO8uzRUNZLKEoQye4%2B2zDLfosGiaHt3XKRj1WCS0U3Uvo0ohYcg4qFNsuvrfIwTA3KhxWS1qADRO%2BzJulVeQiKb3MvqO1zBrj%2BLpG5ZdUi%2FCx9UkySJW6%2B%2FXH%2Baf224vSSc%2BWfBDDg7maeCedsizZG2HYpMZv1dV5dTlIQtHFb0QkyMxetf8IOLXHTEZCkF7izZX7Mxv8ZzH%2BVXlUBeXGfe%2BimvgytuZIpLrSNL2Sjxd9IWKIBZ%2F5RauwBrO90KyVujCXfzrx6VgWbq9ale6IqG4kQPzDD5faA8fmtKonfOg23P0g7PQqAs4ObOd1GLm2vcExMM3P6MMGOqUBMCwMHvD3LHgiWELy8jcmUK0ZXl1l4TtNItOvnRLuUWofW6r%2FYR6WlB4SLWOu0F5q5%2BWJYHHeE3P%2BflKv6Ctitp4jnSVRKtD3%2BqOZiJl9Xf4Ufvc%2BoGRCbXfx%2FyYDMl2ozgAy%2F40NAWdw0KcN%2F2hMNYsBUPx0N7Oi9Nx2GBoOEqmHgiQFWmQJ2ovPoNm2IYCnVUetHrvz8TmcHkU97GVmNE53CnFo&X-Amz-Signature=6f47f3c83c6b2aa77ad52a1684fd285daca98a81b852d21c329a1982c6a757f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUMKKEW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDDA%2FsEYO5cBW0FlCqCgb8V%2Bp05TsiD9cSYVT2Sb%2BVmIAiEAwnqYqHNVdf9lDMSP0X6ZZ90TaNTHTlQxmmPdLXUUKdUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8TgrXf9Br3QX90hCrcA%2FlQFNVWJgR5xul%2FwzaDaXDyb%2FH9hYpC6iDCfImTYM9XKVaQVVdpNEnCGLb%2B2uupkkLjh80ELlX%2FNhSocQ%2F5jITe5JaF0VAOLgx1lFuBOuIVXnq%2BzhcO%2FtFHU9QNqSMDqAWGXFC4cHjhPzAe6i2dZz%2BeCTj2uK3ou%2Fb9ezVkvd8JQs3ZtdSQYgfxqbDCtYMHKO5aKCUJKxzP5%2BAWs%2FYdpfiGQ0gBxfz47cJ%2FYz3BRFG%2Fjh1A%2Fz0DzTW3L6ub940xLvcvR8Rq588I%2FLToyzcBHe1G6FE%2FpdLgW1%2FIvDfiK9rzoFuN26TxoLxoO8uzRUNZLKEoQye4%2B2zDLfosGiaHt3XKRj1WCS0U3Uvo0ohYcg4qFNsuvrfIwTA3KhxWS1qADRO%2BzJulVeQiKb3MvqO1zBrj%2BLpG5ZdUi%2FCx9UkySJW6%2B%2FXH%2Baf224vSSc%2BWfBDDg7maeCedsizZG2HYpMZv1dV5dTlIQtHFb0QkyMxetf8IOLXHTEZCkF7izZX7Mxv8ZzH%2BVXlUBeXGfe%2BimvgytuZIpLrSNL2Sjxd9IWKIBZ%2F5RauwBrO90KyVujCXfzrx6VgWbq9ale6IqG4kQPzDD5faA8fmtKonfOg23P0g7PQqAs4ObOd1GLm2vcExMM3P6MMGOqUBMCwMHvD3LHgiWELy8jcmUK0ZXl1l4TtNItOvnRLuUWofW6r%2FYR6WlB4SLWOu0F5q5%2BWJYHHeE3P%2BflKv6Ctitp4jnSVRKtD3%2BqOZiJl9Xf4Ufvc%2BoGRCbXfx%2FyYDMl2ozgAy%2F40NAWdw0KcN%2F2hMNYsBUPx0N7Oi9Nx2GBoOEqmHgiQFWmQJ2ovPoNm2IYCnVUetHrvz8TmcHkU97GVmNE53CnFo&X-Amz-Signature=9befa1444b2e1da0fa6c56e3ea8b684b966f90b9b4105ec3b64378a57b3ee308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUMKKEW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDDA%2FsEYO5cBW0FlCqCgb8V%2Bp05TsiD9cSYVT2Sb%2BVmIAiEAwnqYqHNVdf9lDMSP0X6ZZ90TaNTHTlQxmmPdLXUUKdUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8TgrXf9Br3QX90hCrcA%2FlQFNVWJgR5xul%2FwzaDaXDyb%2FH9hYpC6iDCfImTYM9XKVaQVVdpNEnCGLb%2B2uupkkLjh80ELlX%2FNhSocQ%2F5jITe5JaF0VAOLgx1lFuBOuIVXnq%2BzhcO%2FtFHU9QNqSMDqAWGXFC4cHjhPzAe6i2dZz%2BeCTj2uK3ou%2Fb9ezVkvd8JQs3ZtdSQYgfxqbDCtYMHKO5aKCUJKxzP5%2BAWs%2FYdpfiGQ0gBxfz47cJ%2FYz3BRFG%2Fjh1A%2Fz0DzTW3L6ub940xLvcvR8Rq588I%2FLToyzcBHe1G6FE%2FpdLgW1%2FIvDfiK9rzoFuN26TxoLxoO8uzRUNZLKEoQye4%2B2zDLfosGiaHt3XKRj1WCS0U3Uvo0ohYcg4qFNsuvrfIwTA3KhxWS1qADRO%2BzJulVeQiKb3MvqO1zBrj%2BLpG5ZdUi%2FCx9UkySJW6%2B%2FXH%2Baf224vSSc%2BWfBDDg7maeCedsizZG2HYpMZv1dV5dTlIQtHFb0QkyMxetf8IOLXHTEZCkF7izZX7Mxv8ZzH%2BVXlUBeXGfe%2BimvgytuZIpLrSNL2Sjxd9IWKIBZ%2F5RauwBrO90KyVujCXfzrx6VgWbq9ale6IqG4kQPzDD5faA8fmtKonfOg23P0g7PQqAs4ObOd1GLm2vcExMM3P6MMGOqUBMCwMHvD3LHgiWELy8jcmUK0ZXl1l4TtNItOvnRLuUWofW6r%2FYR6WlB4SLWOu0F5q5%2BWJYHHeE3P%2BflKv6Ctitp4jnSVRKtD3%2BqOZiJl9Xf4Ufvc%2BoGRCbXfx%2FyYDMl2ozgAy%2F40NAWdw0KcN%2F2hMNYsBUPx0N7Oi9Nx2GBoOEqmHgiQFWmQJ2ovPoNm2IYCnVUetHrvz8TmcHkU97GVmNE53CnFo&X-Amz-Signature=a8d00c39d2ac8a90760f7cb147232968bc42b2a3a56a488ce04de7a49502665c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
