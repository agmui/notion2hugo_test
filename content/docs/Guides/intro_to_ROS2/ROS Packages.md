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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OSOE5E%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIARFVuZJ8%2FTDc4Zx95HBR9KXvqhptYxb1E0MO9csLjuKAiAOsY693O3Nn%2FymlBR8oyiy4MtKkBGEIgtCmwLg3QxSjiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM3usGf1IJ3agWI2EKtwDpZ74kWSgau7OEvXhOwKT9CWgQQ%2FFwl9VLd684c6Gxu8LLCKxeUchQOdyIKNff6MjDyP1XPVn76ofH7Hs%2B7dlqWJe5iL4snZRdS82k888YOY6UiJfnh80NeDgZxYg1YxDI%2Bblg%2FrmHb7q%2BIjYBAaYhWD56OIUC2l6gA1LVPATPa1klLMrXWwT1v%2BTVPzFByKqXn2clULlkjT8siupISYC%2F8AauVOGpF2od33fkYNIVWK2kaVlE8BEYBDR5NHyWcfcRQnV%2F3ad5m4ontLlr4Wv8wUZyIR8qSQ2RpwvpHskaYmoasnmH6lGuuwfrang0RrADLswsoUSpDm%2BrkLAEFge11c9WQnoUJpW5xJbBW1my0u6gTgO6rS%2F8NMI6UkTLQN6ETCEWdLnGTgvpkpBbP%2BbRCAZBXlVvFd%2B%2FVQlwDop5AX%2BK8MoQEd4tI8y4qMAv1ccR%2FWYDbIzzWwI10sylvNFA8IRmXfc439UOh9KLv2DF9QX6Sxj7LbwSLp6pDIs5vaAPFA2QHOWZsocahDMtd7qduRiGwBfLqWwmEm7z%2FT9MfVhyndqj3I0tqvnFEY3PFe9hnu0%2FN9ndxdR5QBZ9rF2hjzdRh%2FCLpLxNb%2BhH0MRBieOwTyWUUCSfqnFjwgwvMO0vwY6pgHHFHRHcB5Zu8FFG4mB4kx7jrJSi4Q%2B0uuNBWDIxT3GMWGh%2BLv8zb3VljJrNyWdZyIKi%2BEgWyrH6UaMlM4GQZksIQcFCXck%2FvWhYOnCRX3AlhmAFd5GvuI5FRzt6JhfcD3blchGx7hJB0tk%2BDA2GLKPmQYI7JjreBZTKk0By0kRwXNcIyPSF7SrccDe7vakI4k2AdFkzXSYFWRNEsC9vsuPEMcC4ZIW&X-Amz-Signature=6bd644319f7ad1d32f3c22971f1cc3b3f4333242fd27e073bff9d86ff0f17aab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OSOE5E%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIARFVuZJ8%2FTDc4Zx95HBR9KXvqhptYxb1E0MO9csLjuKAiAOsY693O3Nn%2FymlBR8oyiy4MtKkBGEIgtCmwLg3QxSjiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM3usGf1IJ3agWI2EKtwDpZ74kWSgau7OEvXhOwKT9CWgQQ%2FFwl9VLd684c6Gxu8LLCKxeUchQOdyIKNff6MjDyP1XPVn76ofH7Hs%2B7dlqWJe5iL4snZRdS82k888YOY6UiJfnh80NeDgZxYg1YxDI%2Bblg%2FrmHb7q%2BIjYBAaYhWD56OIUC2l6gA1LVPATPa1klLMrXWwT1v%2BTVPzFByKqXn2clULlkjT8siupISYC%2F8AauVOGpF2od33fkYNIVWK2kaVlE8BEYBDR5NHyWcfcRQnV%2F3ad5m4ontLlr4Wv8wUZyIR8qSQ2RpwvpHskaYmoasnmH6lGuuwfrang0RrADLswsoUSpDm%2BrkLAEFge11c9WQnoUJpW5xJbBW1my0u6gTgO6rS%2F8NMI6UkTLQN6ETCEWdLnGTgvpkpBbP%2BbRCAZBXlVvFd%2B%2FVQlwDop5AX%2BK8MoQEd4tI8y4qMAv1ccR%2FWYDbIzzWwI10sylvNFA8IRmXfc439UOh9KLv2DF9QX6Sxj7LbwSLp6pDIs5vaAPFA2QHOWZsocahDMtd7qduRiGwBfLqWwmEm7z%2FT9MfVhyndqj3I0tqvnFEY3PFe9hnu0%2FN9ndxdR5QBZ9rF2hjzdRh%2FCLpLxNb%2BhH0MRBieOwTyWUUCSfqnFjwgwvMO0vwY6pgHHFHRHcB5Zu8FFG4mB4kx7jrJSi4Q%2B0uuNBWDIxT3GMWGh%2BLv8zb3VljJrNyWdZyIKi%2BEgWyrH6UaMlM4GQZksIQcFCXck%2FvWhYOnCRX3AlhmAFd5GvuI5FRzt6JhfcD3blchGx7hJB0tk%2BDA2GLKPmQYI7JjreBZTKk0By0kRwXNcIyPSF7SrccDe7vakI4k2AdFkzXSYFWRNEsC9vsuPEMcC4ZIW&X-Amz-Signature=61c19078e20bf731240dc9c7ee1faae0859c0be913f79a888efe39e05ce294c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OSOE5E%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIARFVuZJ8%2FTDc4Zx95HBR9KXvqhptYxb1E0MO9csLjuKAiAOsY693O3Nn%2FymlBR8oyiy4MtKkBGEIgtCmwLg3QxSjiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM3usGf1IJ3agWI2EKtwDpZ74kWSgau7OEvXhOwKT9CWgQQ%2FFwl9VLd684c6Gxu8LLCKxeUchQOdyIKNff6MjDyP1XPVn76ofH7Hs%2B7dlqWJe5iL4snZRdS82k888YOY6UiJfnh80NeDgZxYg1YxDI%2Bblg%2FrmHb7q%2BIjYBAaYhWD56OIUC2l6gA1LVPATPa1klLMrXWwT1v%2BTVPzFByKqXn2clULlkjT8siupISYC%2F8AauVOGpF2od33fkYNIVWK2kaVlE8BEYBDR5NHyWcfcRQnV%2F3ad5m4ontLlr4Wv8wUZyIR8qSQ2RpwvpHskaYmoasnmH6lGuuwfrang0RrADLswsoUSpDm%2BrkLAEFge11c9WQnoUJpW5xJbBW1my0u6gTgO6rS%2F8NMI6UkTLQN6ETCEWdLnGTgvpkpBbP%2BbRCAZBXlVvFd%2B%2FVQlwDop5AX%2BK8MoQEd4tI8y4qMAv1ccR%2FWYDbIzzWwI10sylvNFA8IRmXfc439UOh9KLv2DF9QX6Sxj7LbwSLp6pDIs5vaAPFA2QHOWZsocahDMtd7qduRiGwBfLqWwmEm7z%2FT9MfVhyndqj3I0tqvnFEY3PFe9hnu0%2FN9ndxdR5QBZ9rF2hjzdRh%2FCLpLxNb%2BhH0MRBieOwTyWUUCSfqnFjwgwvMO0vwY6pgHHFHRHcB5Zu8FFG4mB4kx7jrJSi4Q%2B0uuNBWDIxT3GMWGh%2BLv8zb3VljJrNyWdZyIKi%2BEgWyrH6UaMlM4GQZksIQcFCXck%2FvWhYOnCRX3AlhmAFd5GvuI5FRzt6JhfcD3blchGx7hJB0tk%2BDA2GLKPmQYI7JjreBZTKk0By0kRwXNcIyPSF7SrccDe7vakI4k2AdFkzXSYFWRNEsC9vsuPEMcC4ZIW&X-Amz-Signature=499944270452013725af4cb516f8597edc50ca000034ee1a3c492c460f3f9c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OSOE5E%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIARFVuZJ8%2FTDc4Zx95HBR9KXvqhptYxb1E0MO9csLjuKAiAOsY693O3Nn%2FymlBR8oyiy4MtKkBGEIgtCmwLg3QxSjiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM3usGf1IJ3agWI2EKtwDpZ74kWSgau7OEvXhOwKT9CWgQQ%2FFwl9VLd684c6Gxu8LLCKxeUchQOdyIKNff6MjDyP1XPVn76ofH7Hs%2B7dlqWJe5iL4snZRdS82k888YOY6UiJfnh80NeDgZxYg1YxDI%2Bblg%2FrmHb7q%2BIjYBAaYhWD56OIUC2l6gA1LVPATPa1klLMrXWwT1v%2BTVPzFByKqXn2clULlkjT8siupISYC%2F8AauVOGpF2od33fkYNIVWK2kaVlE8BEYBDR5NHyWcfcRQnV%2F3ad5m4ontLlr4Wv8wUZyIR8qSQ2RpwvpHskaYmoasnmH6lGuuwfrang0RrADLswsoUSpDm%2BrkLAEFge11c9WQnoUJpW5xJbBW1my0u6gTgO6rS%2F8NMI6UkTLQN6ETCEWdLnGTgvpkpBbP%2BbRCAZBXlVvFd%2B%2FVQlwDop5AX%2BK8MoQEd4tI8y4qMAv1ccR%2FWYDbIzzWwI10sylvNFA8IRmXfc439UOh9KLv2DF9QX6Sxj7LbwSLp6pDIs5vaAPFA2QHOWZsocahDMtd7qduRiGwBfLqWwmEm7z%2FT9MfVhyndqj3I0tqvnFEY3PFe9hnu0%2FN9ndxdR5QBZ9rF2hjzdRh%2FCLpLxNb%2BhH0MRBieOwTyWUUCSfqnFjwgwvMO0vwY6pgHHFHRHcB5Zu8FFG4mB4kx7jrJSi4Q%2B0uuNBWDIxT3GMWGh%2BLv8zb3VljJrNyWdZyIKi%2BEgWyrH6UaMlM4GQZksIQcFCXck%2FvWhYOnCRX3AlhmAFd5GvuI5FRzt6JhfcD3blchGx7hJB0tk%2BDA2GLKPmQYI7JjreBZTKk0By0kRwXNcIyPSF7SrccDe7vakI4k2AdFkzXSYFWRNEsC9vsuPEMcC4ZIW&X-Amz-Signature=76cf62d8b235ac04200f4f64441b62ecc669a0d8744d2ca0e13a5e2b89d4365a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OSOE5E%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIARFVuZJ8%2FTDc4Zx95HBR9KXvqhptYxb1E0MO9csLjuKAiAOsY693O3Nn%2FymlBR8oyiy4MtKkBGEIgtCmwLg3QxSjiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM3usGf1IJ3agWI2EKtwDpZ74kWSgau7OEvXhOwKT9CWgQQ%2FFwl9VLd684c6Gxu8LLCKxeUchQOdyIKNff6MjDyP1XPVn76ofH7Hs%2B7dlqWJe5iL4snZRdS82k888YOY6UiJfnh80NeDgZxYg1YxDI%2Bblg%2FrmHb7q%2BIjYBAaYhWD56OIUC2l6gA1LVPATPa1klLMrXWwT1v%2BTVPzFByKqXn2clULlkjT8siupISYC%2F8AauVOGpF2od33fkYNIVWK2kaVlE8BEYBDR5NHyWcfcRQnV%2F3ad5m4ontLlr4Wv8wUZyIR8qSQ2RpwvpHskaYmoasnmH6lGuuwfrang0RrADLswsoUSpDm%2BrkLAEFge11c9WQnoUJpW5xJbBW1my0u6gTgO6rS%2F8NMI6UkTLQN6ETCEWdLnGTgvpkpBbP%2BbRCAZBXlVvFd%2B%2FVQlwDop5AX%2BK8MoQEd4tI8y4qMAv1ccR%2FWYDbIzzWwI10sylvNFA8IRmXfc439UOh9KLv2DF9QX6Sxj7LbwSLp6pDIs5vaAPFA2QHOWZsocahDMtd7qduRiGwBfLqWwmEm7z%2FT9MfVhyndqj3I0tqvnFEY3PFe9hnu0%2FN9ndxdR5QBZ9rF2hjzdRh%2FCLpLxNb%2BhH0MRBieOwTyWUUCSfqnFjwgwvMO0vwY6pgHHFHRHcB5Zu8FFG4mB4kx7jrJSi4Q%2B0uuNBWDIxT3GMWGh%2BLv8zb3VljJrNyWdZyIKi%2BEgWyrH6UaMlM4GQZksIQcFCXck%2FvWhYOnCRX3AlhmAFd5GvuI5FRzt6JhfcD3blchGx7hJB0tk%2BDA2GLKPmQYI7JjreBZTKk0By0kRwXNcIyPSF7SrccDe7vakI4k2AdFkzXSYFWRNEsC9vsuPEMcC4ZIW&X-Amz-Signature=d8cc3105e39cb6f2041b303175a4c16e8a5e5f4c90d54e092742df32a9dd6799&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OSOE5E%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIARFVuZJ8%2FTDc4Zx95HBR9KXvqhptYxb1E0MO9csLjuKAiAOsY693O3Nn%2FymlBR8oyiy4MtKkBGEIgtCmwLg3QxSjiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM3usGf1IJ3agWI2EKtwDpZ74kWSgau7OEvXhOwKT9CWgQQ%2FFwl9VLd684c6Gxu8LLCKxeUchQOdyIKNff6MjDyP1XPVn76ofH7Hs%2B7dlqWJe5iL4snZRdS82k888YOY6UiJfnh80NeDgZxYg1YxDI%2Bblg%2FrmHb7q%2BIjYBAaYhWD56OIUC2l6gA1LVPATPa1klLMrXWwT1v%2BTVPzFByKqXn2clULlkjT8siupISYC%2F8AauVOGpF2od33fkYNIVWK2kaVlE8BEYBDR5NHyWcfcRQnV%2F3ad5m4ontLlr4Wv8wUZyIR8qSQ2RpwvpHskaYmoasnmH6lGuuwfrang0RrADLswsoUSpDm%2BrkLAEFge11c9WQnoUJpW5xJbBW1my0u6gTgO6rS%2F8NMI6UkTLQN6ETCEWdLnGTgvpkpBbP%2BbRCAZBXlVvFd%2B%2FVQlwDop5AX%2BK8MoQEd4tI8y4qMAv1ccR%2FWYDbIzzWwI10sylvNFA8IRmXfc439UOh9KLv2DF9QX6Sxj7LbwSLp6pDIs5vaAPFA2QHOWZsocahDMtd7qduRiGwBfLqWwmEm7z%2FT9MfVhyndqj3I0tqvnFEY3PFe9hnu0%2FN9ndxdR5QBZ9rF2hjzdRh%2FCLpLxNb%2BhH0MRBieOwTyWUUCSfqnFjwgwvMO0vwY6pgHHFHRHcB5Zu8FFG4mB4kx7jrJSi4Q%2B0uuNBWDIxT3GMWGh%2BLv8zb3VljJrNyWdZyIKi%2BEgWyrH6UaMlM4GQZksIQcFCXck%2FvWhYOnCRX3AlhmAFd5GvuI5FRzt6JhfcD3blchGx7hJB0tk%2BDA2GLKPmQYI7JjreBZTKk0By0kRwXNcIyPSF7SrccDe7vakI4k2AdFkzXSYFWRNEsC9vsuPEMcC4ZIW&X-Amz-Signature=23cb77e93bea9148de03537af970c9ac93a4963c275f6bbd0b53d6becf7de339&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OSOE5E%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIARFVuZJ8%2FTDc4Zx95HBR9KXvqhptYxb1E0MO9csLjuKAiAOsY693O3Nn%2FymlBR8oyiy4MtKkBGEIgtCmwLg3QxSjiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM3usGf1IJ3agWI2EKtwDpZ74kWSgau7OEvXhOwKT9CWgQQ%2FFwl9VLd684c6Gxu8LLCKxeUchQOdyIKNff6MjDyP1XPVn76ofH7Hs%2B7dlqWJe5iL4snZRdS82k888YOY6UiJfnh80NeDgZxYg1YxDI%2Bblg%2FrmHb7q%2BIjYBAaYhWD56OIUC2l6gA1LVPATPa1klLMrXWwT1v%2BTVPzFByKqXn2clULlkjT8siupISYC%2F8AauVOGpF2od33fkYNIVWK2kaVlE8BEYBDR5NHyWcfcRQnV%2F3ad5m4ontLlr4Wv8wUZyIR8qSQ2RpwvpHskaYmoasnmH6lGuuwfrang0RrADLswsoUSpDm%2BrkLAEFge11c9WQnoUJpW5xJbBW1my0u6gTgO6rS%2F8NMI6UkTLQN6ETCEWdLnGTgvpkpBbP%2BbRCAZBXlVvFd%2B%2FVQlwDop5AX%2BK8MoQEd4tI8y4qMAv1ccR%2FWYDbIzzWwI10sylvNFA8IRmXfc439UOh9KLv2DF9QX6Sxj7LbwSLp6pDIs5vaAPFA2QHOWZsocahDMtd7qduRiGwBfLqWwmEm7z%2FT9MfVhyndqj3I0tqvnFEY3PFe9hnu0%2FN9ndxdR5QBZ9rF2hjzdRh%2FCLpLxNb%2BhH0MRBieOwTyWUUCSfqnFjwgwvMO0vwY6pgHHFHRHcB5Zu8FFG4mB4kx7jrJSi4Q%2B0uuNBWDIxT3GMWGh%2BLv8zb3VljJrNyWdZyIKi%2BEgWyrH6UaMlM4GQZksIQcFCXck%2FvWhYOnCRX3AlhmAFd5GvuI5FRzt6JhfcD3blchGx7hJB0tk%2BDA2GLKPmQYI7JjreBZTKk0By0kRwXNcIyPSF7SrccDe7vakI4k2AdFkzXSYFWRNEsC9vsuPEMcC4ZIW&X-Amz-Signature=59d9d6db0fca20dc430bb333d2c02c0fc87ed56e959a5825e74b1312b578433d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
