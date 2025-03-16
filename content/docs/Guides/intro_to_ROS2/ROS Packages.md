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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6OIZ57%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTiV6oDJboPkgYtkpoJBXM2JmB40dU24IbXMdqnbR9zAIhAOM5CjSdfwwL9oEiBD46JaaVKva5a5ayEMUYeQKL9Nw6Kv8DCCAQABoMNjM3NDIzMTgzODA1IgxQQMwZ7RdextfYdDIq3ANuKIPIt2jVyrPRmNwgEYoswAcpRiZiejDQoOkWoOVNYUu1O8fy8AOcVKElHVucJ2N5HqfY5wfM4ExdN%2Bm952wssrTr8KRGeNPqbS6JZI4av9Hq37C4Q21YFP1V5zWpPsXyI1JazCjHhIRiGBNUTRmwyQPAhOXimMzYB9JERBYswG0UJLbNVX8rwTJsyqbx7RkI8TZb6141FXG7STH88iwWEM1ApnftsPfZno2lQGPLvs9e1IlcU2yr6hVYuQA%2BgVHG06n8lJrPtpf1HoE6sNWZOBjsnb1YXXUJhlqRNMbF%2BoxqGh%2FIYEwHr%2FGGVBIKmethFBgp4cXmM1cNR0rqVhKOJ4paIXynSO%2FedMZlD83WigVbHRZauM6TjyWwqr3Fec2QGHsB7wMTD7EHIwFS9rgJQD7dIgVIKO3iIB94%2BEMHGayUIghcnPle8P0dPX2yS5tqlxsvmhqnsc8d0z7t5POFXHHr8AjNEdnQKrUAZxZQ%2FRt7jOvN3J8xS0pTo7S0%2FteO5%2BUfOVA774wnJLmp9fjwrmNL4%2B6BqEb%2FU1z7HJL1HP8rvNEFZON5%2BtH4372ouj7Ca4tQrGeYoiO12pqoPlM6FWn7ibf2vFuQJ07q7u5eH8lkGCQj38Z83DGqEjDwgdi%2BBjqkASf0xAFG%2F9Axt9cXOJEEsTG59NDf6Lfv%2B%2FHx8iJVt5YvWofimLpDGsDOTXTJ3D%2Bkacn0ZjBvaPvXDJvqFRzAZo8LKXyG9oumb4%2B0qAdif4zjOgqukvb5GD0FZRghoZLHejPKFqBYuTAdd0Ft3uNO%2B%2FuCEX2mvFOJTpqQgAwWEDw5PYHHKempiYqLlAdZpN6yx68DHFBJEhQ%2BCNeBpKxV8hhcNZTx&X-Amz-Signature=50773df2ea0f0eaca7d9a9d2aecbe30f76e9e02e62463fffec2815c1e2206ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6OIZ57%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTiV6oDJboPkgYtkpoJBXM2JmB40dU24IbXMdqnbR9zAIhAOM5CjSdfwwL9oEiBD46JaaVKva5a5ayEMUYeQKL9Nw6Kv8DCCAQABoMNjM3NDIzMTgzODA1IgxQQMwZ7RdextfYdDIq3ANuKIPIt2jVyrPRmNwgEYoswAcpRiZiejDQoOkWoOVNYUu1O8fy8AOcVKElHVucJ2N5HqfY5wfM4ExdN%2Bm952wssrTr8KRGeNPqbS6JZI4av9Hq37C4Q21YFP1V5zWpPsXyI1JazCjHhIRiGBNUTRmwyQPAhOXimMzYB9JERBYswG0UJLbNVX8rwTJsyqbx7RkI8TZb6141FXG7STH88iwWEM1ApnftsPfZno2lQGPLvs9e1IlcU2yr6hVYuQA%2BgVHG06n8lJrPtpf1HoE6sNWZOBjsnb1YXXUJhlqRNMbF%2BoxqGh%2FIYEwHr%2FGGVBIKmethFBgp4cXmM1cNR0rqVhKOJ4paIXynSO%2FedMZlD83WigVbHRZauM6TjyWwqr3Fec2QGHsB7wMTD7EHIwFS9rgJQD7dIgVIKO3iIB94%2BEMHGayUIghcnPle8P0dPX2yS5tqlxsvmhqnsc8d0z7t5POFXHHr8AjNEdnQKrUAZxZQ%2FRt7jOvN3J8xS0pTo7S0%2FteO5%2BUfOVA774wnJLmp9fjwrmNL4%2B6BqEb%2FU1z7HJL1HP8rvNEFZON5%2BtH4372ouj7Ca4tQrGeYoiO12pqoPlM6FWn7ibf2vFuQJ07q7u5eH8lkGCQj38Z83DGqEjDwgdi%2BBjqkASf0xAFG%2F9Axt9cXOJEEsTG59NDf6Lfv%2B%2FHx8iJVt5YvWofimLpDGsDOTXTJ3D%2Bkacn0ZjBvaPvXDJvqFRzAZo8LKXyG9oumb4%2B0qAdif4zjOgqukvb5GD0FZRghoZLHejPKFqBYuTAdd0Ft3uNO%2B%2FuCEX2mvFOJTpqQgAwWEDw5PYHHKempiYqLlAdZpN6yx68DHFBJEhQ%2BCNeBpKxV8hhcNZTx&X-Amz-Signature=d916d37de93ca575364f62d0c129b46c3df9684470f33cb4911fd1649f181037&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6OIZ57%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTiV6oDJboPkgYtkpoJBXM2JmB40dU24IbXMdqnbR9zAIhAOM5CjSdfwwL9oEiBD46JaaVKva5a5ayEMUYeQKL9Nw6Kv8DCCAQABoMNjM3NDIzMTgzODA1IgxQQMwZ7RdextfYdDIq3ANuKIPIt2jVyrPRmNwgEYoswAcpRiZiejDQoOkWoOVNYUu1O8fy8AOcVKElHVucJ2N5HqfY5wfM4ExdN%2Bm952wssrTr8KRGeNPqbS6JZI4av9Hq37C4Q21YFP1V5zWpPsXyI1JazCjHhIRiGBNUTRmwyQPAhOXimMzYB9JERBYswG0UJLbNVX8rwTJsyqbx7RkI8TZb6141FXG7STH88iwWEM1ApnftsPfZno2lQGPLvs9e1IlcU2yr6hVYuQA%2BgVHG06n8lJrPtpf1HoE6sNWZOBjsnb1YXXUJhlqRNMbF%2BoxqGh%2FIYEwHr%2FGGVBIKmethFBgp4cXmM1cNR0rqVhKOJ4paIXynSO%2FedMZlD83WigVbHRZauM6TjyWwqr3Fec2QGHsB7wMTD7EHIwFS9rgJQD7dIgVIKO3iIB94%2BEMHGayUIghcnPle8P0dPX2yS5tqlxsvmhqnsc8d0z7t5POFXHHr8AjNEdnQKrUAZxZQ%2FRt7jOvN3J8xS0pTo7S0%2FteO5%2BUfOVA774wnJLmp9fjwrmNL4%2B6BqEb%2FU1z7HJL1HP8rvNEFZON5%2BtH4372ouj7Ca4tQrGeYoiO12pqoPlM6FWn7ibf2vFuQJ07q7u5eH8lkGCQj38Z83DGqEjDwgdi%2BBjqkASf0xAFG%2F9Axt9cXOJEEsTG59NDf6Lfv%2B%2FHx8iJVt5YvWofimLpDGsDOTXTJ3D%2Bkacn0ZjBvaPvXDJvqFRzAZo8LKXyG9oumb4%2B0qAdif4zjOgqukvb5GD0FZRghoZLHejPKFqBYuTAdd0Ft3uNO%2B%2FuCEX2mvFOJTpqQgAwWEDw5PYHHKempiYqLlAdZpN6yx68DHFBJEhQ%2BCNeBpKxV8hhcNZTx&X-Amz-Signature=5d55a9258445b1371a7217e9d380737a25173c840c3e8c4b4b4e616c46f03e07&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6OIZ57%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTiV6oDJboPkgYtkpoJBXM2JmB40dU24IbXMdqnbR9zAIhAOM5CjSdfwwL9oEiBD46JaaVKva5a5ayEMUYeQKL9Nw6Kv8DCCAQABoMNjM3NDIzMTgzODA1IgxQQMwZ7RdextfYdDIq3ANuKIPIt2jVyrPRmNwgEYoswAcpRiZiejDQoOkWoOVNYUu1O8fy8AOcVKElHVucJ2N5HqfY5wfM4ExdN%2Bm952wssrTr8KRGeNPqbS6JZI4av9Hq37C4Q21YFP1V5zWpPsXyI1JazCjHhIRiGBNUTRmwyQPAhOXimMzYB9JERBYswG0UJLbNVX8rwTJsyqbx7RkI8TZb6141FXG7STH88iwWEM1ApnftsPfZno2lQGPLvs9e1IlcU2yr6hVYuQA%2BgVHG06n8lJrPtpf1HoE6sNWZOBjsnb1YXXUJhlqRNMbF%2BoxqGh%2FIYEwHr%2FGGVBIKmethFBgp4cXmM1cNR0rqVhKOJ4paIXynSO%2FedMZlD83WigVbHRZauM6TjyWwqr3Fec2QGHsB7wMTD7EHIwFS9rgJQD7dIgVIKO3iIB94%2BEMHGayUIghcnPle8P0dPX2yS5tqlxsvmhqnsc8d0z7t5POFXHHr8AjNEdnQKrUAZxZQ%2FRt7jOvN3J8xS0pTo7S0%2FteO5%2BUfOVA774wnJLmp9fjwrmNL4%2B6BqEb%2FU1z7HJL1HP8rvNEFZON5%2BtH4372ouj7Ca4tQrGeYoiO12pqoPlM6FWn7ibf2vFuQJ07q7u5eH8lkGCQj38Z83DGqEjDwgdi%2BBjqkASf0xAFG%2F9Axt9cXOJEEsTG59NDf6Lfv%2B%2FHx8iJVt5YvWofimLpDGsDOTXTJ3D%2Bkacn0ZjBvaPvXDJvqFRzAZo8LKXyG9oumb4%2B0qAdif4zjOgqukvb5GD0FZRghoZLHejPKFqBYuTAdd0Ft3uNO%2B%2FuCEX2mvFOJTpqQgAwWEDw5PYHHKempiYqLlAdZpN6yx68DHFBJEhQ%2BCNeBpKxV8hhcNZTx&X-Amz-Signature=20b054f2121b22f7a2ff29633066632e44f1fc13366113840d7df64a2f037a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6OIZ57%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTiV6oDJboPkgYtkpoJBXM2JmB40dU24IbXMdqnbR9zAIhAOM5CjSdfwwL9oEiBD46JaaVKva5a5ayEMUYeQKL9Nw6Kv8DCCAQABoMNjM3NDIzMTgzODA1IgxQQMwZ7RdextfYdDIq3ANuKIPIt2jVyrPRmNwgEYoswAcpRiZiejDQoOkWoOVNYUu1O8fy8AOcVKElHVucJ2N5HqfY5wfM4ExdN%2Bm952wssrTr8KRGeNPqbS6JZI4av9Hq37C4Q21YFP1V5zWpPsXyI1JazCjHhIRiGBNUTRmwyQPAhOXimMzYB9JERBYswG0UJLbNVX8rwTJsyqbx7RkI8TZb6141FXG7STH88iwWEM1ApnftsPfZno2lQGPLvs9e1IlcU2yr6hVYuQA%2BgVHG06n8lJrPtpf1HoE6sNWZOBjsnb1YXXUJhlqRNMbF%2BoxqGh%2FIYEwHr%2FGGVBIKmethFBgp4cXmM1cNR0rqVhKOJ4paIXynSO%2FedMZlD83WigVbHRZauM6TjyWwqr3Fec2QGHsB7wMTD7EHIwFS9rgJQD7dIgVIKO3iIB94%2BEMHGayUIghcnPle8P0dPX2yS5tqlxsvmhqnsc8d0z7t5POFXHHr8AjNEdnQKrUAZxZQ%2FRt7jOvN3J8xS0pTo7S0%2FteO5%2BUfOVA774wnJLmp9fjwrmNL4%2B6BqEb%2FU1z7HJL1HP8rvNEFZON5%2BtH4372ouj7Ca4tQrGeYoiO12pqoPlM6FWn7ibf2vFuQJ07q7u5eH8lkGCQj38Z83DGqEjDwgdi%2BBjqkASf0xAFG%2F9Axt9cXOJEEsTG59NDf6Lfv%2B%2FHx8iJVt5YvWofimLpDGsDOTXTJ3D%2Bkacn0ZjBvaPvXDJvqFRzAZo8LKXyG9oumb4%2B0qAdif4zjOgqukvb5GD0FZRghoZLHejPKFqBYuTAdd0Ft3uNO%2B%2FuCEX2mvFOJTpqQgAwWEDw5PYHHKempiYqLlAdZpN6yx68DHFBJEhQ%2BCNeBpKxV8hhcNZTx&X-Amz-Signature=8f4d3308efdd3d4bddc86d568c1759cd15f0be8a1b71dd00fed64b49708cbf2c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6OIZ57%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTiV6oDJboPkgYtkpoJBXM2JmB40dU24IbXMdqnbR9zAIhAOM5CjSdfwwL9oEiBD46JaaVKva5a5ayEMUYeQKL9Nw6Kv8DCCAQABoMNjM3NDIzMTgzODA1IgxQQMwZ7RdextfYdDIq3ANuKIPIt2jVyrPRmNwgEYoswAcpRiZiejDQoOkWoOVNYUu1O8fy8AOcVKElHVucJ2N5HqfY5wfM4ExdN%2Bm952wssrTr8KRGeNPqbS6JZI4av9Hq37C4Q21YFP1V5zWpPsXyI1JazCjHhIRiGBNUTRmwyQPAhOXimMzYB9JERBYswG0UJLbNVX8rwTJsyqbx7RkI8TZb6141FXG7STH88iwWEM1ApnftsPfZno2lQGPLvs9e1IlcU2yr6hVYuQA%2BgVHG06n8lJrPtpf1HoE6sNWZOBjsnb1YXXUJhlqRNMbF%2BoxqGh%2FIYEwHr%2FGGVBIKmethFBgp4cXmM1cNR0rqVhKOJ4paIXynSO%2FedMZlD83WigVbHRZauM6TjyWwqr3Fec2QGHsB7wMTD7EHIwFS9rgJQD7dIgVIKO3iIB94%2BEMHGayUIghcnPle8P0dPX2yS5tqlxsvmhqnsc8d0z7t5POFXHHr8AjNEdnQKrUAZxZQ%2FRt7jOvN3J8xS0pTo7S0%2FteO5%2BUfOVA774wnJLmp9fjwrmNL4%2B6BqEb%2FU1z7HJL1HP8rvNEFZON5%2BtH4372ouj7Ca4tQrGeYoiO12pqoPlM6FWn7ibf2vFuQJ07q7u5eH8lkGCQj38Z83DGqEjDwgdi%2BBjqkASf0xAFG%2F9Axt9cXOJEEsTG59NDf6Lfv%2B%2FHx8iJVt5YvWofimLpDGsDOTXTJ3D%2Bkacn0ZjBvaPvXDJvqFRzAZo8LKXyG9oumb4%2B0qAdif4zjOgqukvb5GD0FZRghoZLHejPKFqBYuTAdd0Ft3uNO%2B%2FuCEX2mvFOJTpqQgAwWEDw5PYHHKempiYqLlAdZpN6yx68DHFBJEhQ%2BCNeBpKxV8hhcNZTx&X-Amz-Signature=29a6d3f0bb1cd08fba99cf867eb0634fad90fdd3b4cae5fea7d3759b22ddf9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6OIZ57%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTiV6oDJboPkgYtkpoJBXM2JmB40dU24IbXMdqnbR9zAIhAOM5CjSdfwwL9oEiBD46JaaVKva5a5ayEMUYeQKL9Nw6Kv8DCCAQABoMNjM3NDIzMTgzODA1IgxQQMwZ7RdextfYdDIq3ANuKIPIt2jVyrPRmNwgEYoswAcpRiZiejDQoOkWoOVNYUu1O8fy8AOcVKElHVucJ2N5HqfY5wfM4ExdN%2Bm952wssrTr8KRGeNPqbS6JZI4av9Hq37C4Q21YFP1V5zWpPsXyI1JazCjHhIRiGBNUTRmwyQPAhOXimMzYB9JERBYswG0UJLbNVX8rwTJsyqbx7RkI8TZb6141FXG7STH88iwWEM1ApnftsPfZno2lQGPLvs9e1IlcU2yr6hVYuQA%2BgVHG06n8lJrPtpf1HoE6sNWZOBjsnb1YXXUJhlqRNMbF%2BoxqGh%2FIYEwHr%2FGGVBIKmethFBgp4cXmM1cNR0rqVhKOJ4paIXynSO%2FedMZlD83WigVbHRZauM6TjyWwqr3Fec2QGHsB7wMTD7EHIwFS9rgJQD7dIgVIKO3iIB94%2BEMHGayUIghcnPle8P0dPX2yS5tqlxsvmhqnsc8d0z7t5POFXHHr8AjNEdnQKrUAZxZQ%2FRt7jOvN3J8xS0pTo7S0%2FteO5%2BUfOVA774wnJLmp9fjwrmNL4%2B6BqEb%2FU1z7HJL1HP8rvNEFZON5%2BtH4372ouj7Ca4tQrGeYoiO12pqoPlM6FWn7ibf2vFuQJ07q7u5eH8lkGCQj38Z83DGqEjDwgdi%2BBjqkASf0xAFG%2F9Axt9cXOJEEsTG59NDf6Lfv%2B%2FHx8iJVt5YvWofimLpDGsDOTXTJ3D%2Bkacn0ZjBvaPvXDJvqFRzAZo8LKXyG9oumb4%2B0qAdif4zjOgqukvb5GD0FZRghoZLHejPKFqBYuTAdd0Ft3uNO%2B%2FuCEX2mvFOJTpqQgAwWEDw5PYHHKempiYqLlAdZpN6yx68DHFBJEhQ%2BCNeBpKxV8hhcNZTx&X-Amz-Signature=c697fd906082d844f5cdef834cd299eabc918378701033b719cb9381eb6dab13&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
