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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBHKLD5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqchLrqcln2wERnV3687fg9aizCp5UKeBA1YH7bdu5eAIgctfiWHllpaAgvc2x%2BRXMrVWrYHvoNDwZ%2Bmhts81xfaAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1BNs%2F2H%2BKLZOT0dCrcAwYohS7uhEFlEdD6NAAFxVtvHMb3AwGeOtLoFFdGzVuE6xwSMspGZERgBeHjqUT5MMll5fU41CDqVG28gatHrwzaXhyqfVhFqZAsPucvAGFF3okg68C9i7Di43CnNu8dZ93MoOBJPFm40H9PIfB%2BWyv6x0%2F86fyxwurRWeg5PLoKHYuWzURrMpr9q9gx2wj0c%2FrlyqELjmEhVfNsA%2FgDx9dohIu7iBdM7RyzchAFLGnAory1S6wQ3AO0L%2BSzrV4ixadhSr30maaYr%2FiOsTChEqpN%2FLmGTRKJPASgyPKFAsHfz5e0M7E1qvfJeJXd6%2F%2FGEXFl6DwUoN6KWy8gMFyUzQWI6p3lVNqSZXuKqxprRbDAAnE42QPx8S%2BrAXvTLYpgk4qIEvP5fvOIMAx80sqx0MqHD03xmGQ0oJ8uL21z%2BxPYyXrUBC8AXjAIjFV6L419Bv8YUfBUA1rvSXHU%2F%2B2N8mg0eV8GFZq15SXsq9ephOmSRJN2qBds2usThhfRovRIR1w9pts252ULjmCaE5h1foBdd68%2B319qfllEGgIJIsl0ELFgpIZFKzuI%2B8VHSNgl%2FPawnTBsJQuERE056vUjcO%2FEdAEdmLbDlo94qTO8QXtTr9ot3xm9AbeU66%2FsMMf4mL4GOqUBcKcTMCR515uw%2FOh%2BOpb8ZihE8ZodJTfAknuTM3EZwb7Is9I3qpoQhTUWDBt3J2vXsT6MzDS891nqZNkavZFth9KRnUR8WK3siRfdwEhgjlgWLq9DZmb9ljU3%2FFgn7JLsmtJhS5DUbdYo8v3o1H2c6GWgf6Kc9wEAXiDIc6JkoXlqDGe2E39b0jw51hjJcEXNyPX%2BcLq7h%2FlcqqNc1eOTg5TRkflG&X-Amz-Signature=52879887c972158bc33ed3626846481b1c1bbf7505a660a853cfbe26eb26e27a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBHKLD5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqchLrqcln2wERnV3687fg9aizCp5UKeBA1YH7bdu5eAIgctfiWHllpaAgvc2x%2BRXMrVWrYHvoNDwZ%2Bmhts81xfaAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1BNs%2F2H%2BKLZOT0dCrcAwYohS7uhEFlEdD6NAAFxVtvHMb3AwGeOtLoFFdGzVuE6xwSMspGZERgBeHjqUT5MMll5fU41CDqVG28gatHrwzaXhyqfVhFqZAsPucvAGFF3okg68C9i7Di43CnNu8dZ93MoOBJPFm40H9PIfB%2BWyv6x0%2F86fyxwurRWeg5PLoKHYuWzURrMpr9q9gx2wj0c%2FrlyqELjmEhVfNsA%2FgDx9dohIu7iBdM7RyzchAFLGnAory1S6wQ3AO0L%2BSzrV4ixadhSr30maaYr%2FiOsTChEqpN%2FLmGTRKJPASgyPKFAsHfz5e0M7E1qvfJeJXd6%2F%2FGEXFl6DwUoN6KWy8gMFyUzQWI6p3lVNqSZXuKqxprRbDAAnE42QPx8S%2BrAXvTLYpgk4qIEvP5fvOIMAx80sqx0MqHD03xmGQ0oJ8uL21z%2BxPYyXrUBC8AXjAIjFV6L419Bv8YUfBUA1rvSXHU%2F%2B2N8mg0eV8GFZq15SXsq9ephOmSRJN2qBds2usThhfRovRIR1w9pts252ULjmCaE5h1foBdd68%2B319qfllEGgIJIsl0ELFgpIZFKzuI%2B8VHSNgl%2FPawnTBsJQuERE056vUjcO%2FEdAEdmLbDlo94qTO8QXtTr9ot3xm9AbeU66%2FsMMf4mL4GOqUBcKcTMCR515uw%2FOh%2BOpb8ZihE8ZodJTfAknuTM3EZwb7Is9I3qpoQhTUWDBt3J2vXsT6MzDS891nqZNkavZFth9KRnUR8WK3siRfdwEhgjlgWLq9DZmb9ljU3%2FFgn7JLsmtJhS5DUbdYo8v3o1H2c6GWgf6Kc9wEAXiDIc6JkoXlqDGe2E39b0jw51hjJcEXNyPX%2BcLq7h%2FlcqqNc1eOTg5TRkflG&X-Amz-Signature=40bb483ac83ef84b220bbbf74cfc633cfc9d456be9c72e0600d042a9f0d0c796&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBHKLD5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqchLrqcln2wERnV3687fg9aizCp5UKeBA1YH7bdu5eAIgctfiWHllpaAgvc2x%2BRXMrVWrYHvoNDwZ%2Bmhts81xfaAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1BNs%2F2H%2BKLZOT0dCrcAwYohS7uhEFlEdD6NAAFxVtvHMb3AwGeOtLoFFdGzVuE6xwSMspGZERgBeHjqUT5MMll5fU41CDqVG28gatHrwzaXhyqfVhFqZAsPucvAGFF3okg68C9i7Di43CnNu8dZ93MoOBJPFm40H9PIfB%2BWyv6x0%2F86fyxwurRWeg5PLoKHYuWzURrMpr9q9gx2wj0c%2FrlyqELjmEhVfNsA%2FgDx9dohIu7iBdM7RyzchAFLGnAory1S6wQ3AO0L%2BSzrV4ixadhSr30maaYr%2FiOsTChEqpN%2FLmGTRKJPASgyPKFAsHfz5e0M7E1qvfJeJXd6%2F%2FGEXFl6DwUoN6KWy8gMFyUzQWI6p3lVNqSZXuKqxprRbDAAnE42QPx8S%2BrAXvTLYpgk4qIEvP5fvOIMAx80sqx0MqHD03xmGQ0oJ8uL21z%2BxPYyXrUBC8AXjAIjFV6L419Bv8YUfBUA1rvSXHU%2F%2B2N8mg0eV8GFZq15SXsq9ephOmSRJN2qBds2usThhfRovRIR1w9pts252ULjmCaE5h1foBdd68%2B319qfllEGgIJIsl0ELFgpIZFKzuI%2B8VHSNgl%2FPawnTBsJQuERE056vUjcO%2FEdAEdmLbDlo94qTO8QXtTr9ot3xm9AbeU66%2FsMMf4mL4GOqUBcKcTMCR515uw%2FOh%2BOpb8ZihE8ZodJTfAknuTM3EZwb7Is9I3qpoQhTUWDBt3J2vXsT6MzDS891nqZNkavZFth9KRnUR8WK3siRfdwEhgjlgWLq9DZmb9ljU3%2FFgn7JLsmtJhS5DUbdYo8v3o1H2c6GWgf6Kc9wEAXiDIc6JkoXlqDGe2E39b0jw51hjJcEXNyPX%2BcLq7h%2FlcqqNc1eOTg5TRkflG&X-Amz-Signature=065c4713f2fe07cbad485910a2c91e4c485f059e17f10b0a59edb98429746787&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBHKLD5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqchLrqcln2wERnV3687fg9aizCp5UKeBA1YH7bdu5eAIgctfiWHllpaAgvc2x%2BRXMrVWrYHvoNDwZ%2Bmhts81xfaAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1BNs%2F2H%2BKLZOT0dCrcAwYohS7uhEFlEdD6NAAFxVtvHMb3AwGeOtLoFFdGzVuE6xwSMspGZERgBeHjqUT5MMll5fU41CDqVG28gatHrwzaXhyqfVhFqZAsPucvAGFF3okg68C9i7Di43CnNu8dZ93MoOBJPFm40H9PIfB%2BWyv6x0%2F86fyxwurRWeg5PLoKHYuWzURrMpr9q9gx2wj0c%2FrlyqELjmEhVfNsA%2FgDx9dohIu7iBdM7RyzchAFLGnAory1S6wQ3AO0L%2BSzrV4ixadhSr30maaYr%2FiOsTChEqpN%2FLmGTRKJPASgyPKFAsHfz5e0M7E1qvfJeJXd6%2F%2FGEXFl6DwUoN6KWy8gMFyUzQWI6p3lVNqSZXuKqxprRbDAAnE42QPx8S%2BrAXvTLYpgk4qIEvP5fvOIMAx80sqx0MqHD03xmGQ0oJ8uL21z%2BxPYyXrUBC8AXjAIjFV6L419Bv8YUfBUA1rvSXHU%2F%2B2N8mg0eV8GFZq15SXsq9ephOmSRJN2qBds2usThhfRovRIR1w9pts252ULjmCaE5h1foBdd68%2B319qfllEGgIJIsl0ELFgpIZFKzuI%2B8VHSNgl%2FPawnTBsJQuERE056vUjcO%2FEdAEdmLbDlo94qTO8QXtTr9ot3xm9AbeU66%2FsMMf4mL4GOqUBcKcTMCR515uw%2FOh%2BOpb8ZihE8ZodJTfAknuTM3EZwb7Is9I3qpoQhTUWDBt3J2vXsT6MzDS891nqZNkavZFth9KRnUR8WK3siRfdwEhgjlgWLq9DZmb9ljU3%2FFgn7JLsmtJhS5DUbdYo8v3o1H2c6GWgf6Kc9wEAXiDIc6JkoXlqDGe2E39b0jw51hjJcEXNyPX%2BcLq7h%2FlcqqNc1eOTg5TRkflG&X-Amz-Signature=0093dd7717d1b3a6593bfb0f8f6aa3dbbaa8dd4be5de0e994b173adeb55a87bb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBHKLD5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqchLrqcln2wERnV3687fg9aizCp5UKeBA1YH7bdu5eAIgctfiWHllpaAgvc2x%2BRXMrVWrYHvoNDwZ%2Bmhts81xfaAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1BNs%2F2H%2BKLZOT0dCrcAwYohS7uhEFlEdD6NAAFxVtvHMb3AwGeOtLoFFdGzVuE6xwSMspGZERgBeHjqUT5MMll5fU41CDqVG28gatHrwzaXhyqfVhFqZAsPucvAGFF3okg68C9i7Di43CnNu8dZ93MoOBJPFm40H9PIfB%2BWyv6x0%2F86fyxwurRWeg5PLoKHYuWzURrMpr9q9gx2wj0c%2FrlyqELjmEhVfNsA%2FgDx9dohIu7iBdM7RyzchAFLGnAory1S6wQ3AO0L%2BSzrV4ixadhSr30maaYr%2FiOsTChEqpN%2FLmGTRKJPASgyPKFAsHfz5e0M7E1qvfJeJXd6%2F%2FGEXFl6DwUoN6KWy8gMFyUzQWI6p3lVNqSZXuKqxprRbDAAnE42QPx8S%2BrAXvTLYpgk4qIEvP5fvOIMAx80sqx0MqHD03xmGQ0oJ8uL21z%2BxPYyXrUBC8AXjAIjFV6L419Bv8YUfBUA1rvSXHU%2F%2B2N8mg0eV8GFZq15SXsq9ephOmSRJN2qBds2usThhfRovRIR1w9pts252ULjmCaE5h1foBdd68%2B319qfllEGgIJIsl0ELFgpIZFKzuI%2B8VHSNgl%2FPawnTBsJQuERE056vUjcO%2FEdAEdmLbDlo94qTO8QXtTr9ot3xm9AbeU66%2FsMMf4mL4GOqUBcKcTMCR515uw%2FOh%2BOpb8ZihE8ZodJTfAknuTM3EZwb7Is9I3qpoQhTUWDBt3J2vXsT6MzDS891nqZNkavZFth9KRnUR8WK3siRfdwEhgjlgWLq9DZmb9ljU3%2FFgn7JLsmtJhS5DUbdYo8v3o1H2c6GWgf6Kc9wEAXiDIc6JkoXlqDGe2E39b0jw51hjJcEXNyPX%2BcLq7h%2FlcqqNc1eOTg5TRkflG&X-Amz-Signature=2fb52cd6ca38503d0ed5ddad19a0630cdec64209bf62114ef77d6a6788a0df85&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBHKLD5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqchLrqcln2wERnV3687fg9aizCp5UKeBA1YH7bdu5eAIgctfiWHllpaAgvc2x%2BRXMrVWrYHvoNDwZ%2Bmhts81xfaAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1BNs%2F2H%2BKLZOT0dCrcAwYohS7uhEFlEdD6NAAFxVtvHMb3AwGeOtLoFFdGzVuE6xwSMspGZERgBeHjqUT5MMll5fU41CDqVG28gatHrwzaXhyqfVhFqZAsPucvAGFF3okg68C9i7Di43CnNu8dZ93MoOBJPFm40H9PIfB%2BWyv6x0%2F86fyxwurRWeg5PLoKHYuWzURrMpr9q9gx2wj0c%2FrlyqELjmEhVfNsA%2FgDx9dohIu7iBdM7RyzchAFLGnAory1S6wQ3AO0L%2BSzrV4ixadhSr30maaYr%2FiOsTChEqpN%2FLmGTRKJPASgyPKFAsHfz5e0M7E1qvfJeJXd6%2F%2FGEXFl6DwUoN6KWy8gMFyUzQWI6p3lVNqSZXuKqxprRbDAAnE42QPx8S%2BrAXvTLYpgk4qIEvP5fvOIMAx80sqx0MqHD03xmGQ0oJ8uL21z%2BxPYyXrUBC8AXjAIjFV6L419Bv8YUfBUA1rvSXHU%2F%2B2N8mg0eV8GFZq15SXsq9ephOmSRJN2qBds2usThhfRovRIR1w9pts252ULjmCaE5h1foBdd68%2B319qfllEGgIJIsl0ELFgpIZFKzuI%2B8VHSNgl%2FPawnTBsJQuERE056vUjcO%2FEdAEdmLbDlo94qTO8QXtTr9ot3xm9AbeU66%2FsMMf4mL4GOqUBcKcTMCR515uw%2FOh%2BOpb8ZihE8ZodJTfAknuTM3EZwb7Is9I3qpoQhTUWDBt3J2vXsT6MzDS891nqZNkavZFth9KRnUR8WK3siRfdwEhgjlgWLq9DZmb9ljU3%2FFgn7JLsmtJhS5DUbdYo8v3o1H2c6GWgf6Kc9wEAXiDIc6JkoXlqDGe2E39b0jw51hjJcEXNyPX%2BcLq7h%2FlcqqNc1eOTg5TRkflG&X-Amz-Signature=79d25e556299e4a1f3f41ba02d8fa1a9eed9e9c2309191f546fa4a90167141c2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBHKLD5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqchLrqcln2wERnV3687fg9aizCp5UKeBA1YH7bdu5eAIgctfiWHllpaAgvc2x%2BRXMrVWrYHvoNDwZ%2Bmhts81xfaAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1BNs%2F2H%2BKLZOT0dCrcAwYohS7uhEFlEdD6NAAFxVtvHMb3AwGeOtLoFFdGzVuE6xwSMspGZERgBeHjqUT5MMll5fU41CDqVG28gatHrwzaXhyqfVhFqZAsPucvAGFF3okg68C9i7Di43CnNu8dZ93MoOBJPFm40H9PIfB%2BWyv6x0%2F86fyxwurRWeg5PLoKHYuWzURrMpr9q9gx2wj0c%2FrlyqELjmEhVfNsA%2FgDx9dohIu7iBdM7RyzchAFLGnAory1S6wQ3AO0L%2BSzrV4ixadhSr30maaYr%2FiOsTChEqpN%2FLmGTRKJPASgyPKFAsHfz5e0M7E1qvfJeJXd6%2F%2FGEXFl6DwUoN6KWy8gMFyUzQWI6p3lVNqSZXuKqxprRbDAAnE42QPx8S%2BrAXvTLYpgk4qIEvP5fvOIMAx80sqx0MqHD03xmGQ0oJ8uL21z%2BxPYyXrUBC8AXjAIjFV6L419Bv8YUfBUA1rvSXHU%2F%2B2N8mg0eV8GFZq15SXsq9ephOmSRJN2qBds2usThhfRovRIR1w9pts252ULjmCaE5h1foBdd68%2B319qfllEGgIJIsl0ELFgpIZFKzuI%2B8VHSNgl%2FPawnTBsJQuERE056vUjcO%2FEdAEdmLbDlo94qTO8QXtTr9ot3xm9AbeU66%2FsMMf4mL4GOqUBcKcTMCR515uw%2FOh%2BOpb8ZihE8ZodJTfAknuTM3EZwb7Is9I3qpoQhTUWDBt3J2vXsT6MzDS891nqZNkavZFth9KRnUR8WK3siRfdwEhgjlgWLq9DZmb9ljU3%2FFgn7JLsmtJhS5DUbdYo8v3o1H2c6GWgf6Kc9wEAXiDIc6JkoXlqDGe2E39b0jw51hjJcEXNyPX%2BcLq7h%2FlcqqNc1eOTg5TRkflG&X-Amz-Signature=55a66d8622b8bcca1387237a553ea009b8a5b380f95f696259a0788710218a70&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
