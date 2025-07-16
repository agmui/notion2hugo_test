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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLZQOXE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDsa3e07DNRZFZpKcDnMyineglG4naYcfQ1jgE7X3t10AIhAL1V%2FIWVq9Y9yYpKxwV0tthDwdZADoK%2FR1svlhg3mab%2FKv8DCFkQABoMNjM3NDIzMTgzODA1Igw801DIhAinGP5HTDgq3AN9gyb6lJ319jleBbxaZQjdbY2nuadXpGxqHty8XG%2BPGgJz1EiKPVCnpwYC73TnqYDkhTLLdj3DZhHy5KGrotnwcGI1PHRLYxBcFxgpMAz97Hoe%2BWcxYNGduxNP8oqa5LH%2FajYbibdrZ%2Fk0hqSO7L1D%2Bx9U2THZiefXDfoC06gDROvGRkBYHXVroiNfole0%2FKZ2cpo4vBPenl64Hep6A5%2FJ7YHN9LNv7yKCo%2Fr10YZd2rpdmRLkTiHBvyLGPQQ2C6TzTeQbjINT9d%2Bv9jK4ZQofcQ0BkaaV1lOO02ngxXYylFYeyqbonRVNDhxnBXj3gIwg5IiefuJTP%2B%2FDAb5z7Xi6B6VjxC4%2Fk2ZShRx8M6McJFlNFGstvo0YKb9SH%2F7yPb6gNW2J1Z%2BUvZgyy%2B8rL19MrmSFa1uA2tJIPmq94%2Fru4162Mj0Ai0cd1E9Pav%2Fxup0s%2BxWT0u9TDIB1J39KjDGNGDuDlUwhkqeic8jk11FfktaP2y2dQGfxU5eTLOcs%2B8T6BCKkIco8ZXqYqc80AbqzkHlSpzsI%2FkUe2nqtfB9LGJqDq1v%2BUb7HC3jwZ1tTEH0QMZx1sqOZyZ2Nt%2F0JRieg7TZbasn1LvJzk6j0DAvVKjb6gAZxpxpU0TL%2FWDCqvt3DBjqkAXSKsqnV%2FGow4Av%2BfOlkoeA18cAvEm8PnUmmQRrDPbbEk3z9RKsOjjOpfFtj00YaoOR%2BoiL63Dp0gvFJBSBd5FSUIdbPTxw9oebaONfi86VgDgUQek%2BiAeIwHKp1kUmCxJa4z%2FLZlvknuD80FCttqT2zOfJQbSlyUaPc5lfusfhACLaJGwU%2FP5wTGMU8X8bMUXqDWEWfLpPC6jhGPPJRcJqS%2BHqx&X-Amz-Signature=46abc2cdd1a550b637f83c3341cee15d9e303ce43e4e69bff1c2ab56c96f2175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLZQOXE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDsa3e07DNRZFZpKcDnMyineglG4naYcfQ1jgE7X3t10AIhAL1V%2FIWVq9Y9yYpKxwV0tthDwdZADoK%2FR1svlhg3mab%2FKv8DCFkQABoMNjM3NDIzMTgzODA1Igw801DIhAinGP5HTDgq3AN9gyb6lJ319jleBbxaZQjdbY2nuadXpGxqHty8XG%2BPGgJz1EiKPVCnpwYC73TnqYDkhTLLdj3DZhHy5KGrotnwcGI1PHRLYxBcFxgpMAz97Hoe%2BWcxYNGduxNP8oqa5LH%2FajYbibdrZ%2Fk0hqSO7L1D%2Bx9U2THZiefXDfoC06gDROvGRkBYHXVroiNfole0%2FKZ2cpo4vBPenl64Hep6A5%2FJ7YHN9LNv7yKCo%2Fr10YZd2rpdmRLkTiHBvyLGPQQ2C6TzTeQbjINT9d%2Bv9jK4ZQofcQ0BkaaV1lOO02ngxXYylFYeyqbonRVNDhxnBXj3gIwg5IiefuJTP%2B%2FDAb5z7Xi6B6VjxC4%2Fk2ZShRx8M6McJFlNFGstvo0YKb9SH%2F7yPb6gNW2J1Z%2BUvZgyy%2B8rL19MrmSFa1uA2tJIPmq94%2Fru4162Mj0Ai0cd1E9Pav%2Fxup0s%2BxWT0u9TDIB1J39KjDGNGDuDlUwhkqeic8jk11FfktaP2y2dQGfxU5eTLOcs%2B8T6BCKkIco8ZXqYqc80AbqzkHlSpzsI%2FkUe2nqtfB9LGJqDq1v%2BUb7HC3jwZ1tTEH0QMZx1sqOZyZ2Nt%2F0JRieg7TZbasn1LvJzk6j0DAvVKjb6gAZxpxpU0TL%2FWDCqvt3DBjqkAXSKsqnV%2FGow4Av%2BfOlkoeA18cAvEm8PnUmmQRrDPbbEk3z9RKsOjjOpfFtj00YaoOR%2BoiL63Dp0gvFJBSBd5FSUIdbPTxw9oebaONfi86VgDgUQek%2BiAeIwHKp1kUmCxJa4z%2FLZlvknuD80FCttqT2zOfJQbSlyUaPc5lfusfhACLaJGwU%2FP5wTGMU8X8bMUXqDWEWfLpPC6jhGPPJRcJqS%2BHqx&X-Amz-Signature=7e148a76ebf9720ee936f4ef6f8d653481b000e9ddd3938f0ce5356858d30f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLZQOXE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDsa3e07DNRZFZpKcDnMyineglG4naYcfQ1jgE7X3t10AIhAL1V%2FIWVq9Y9yYpKxwV0tthDwdZADoK%2FR1svlhg3mab%2FKv8DCFkQABoMNjM3NDIzMTgzODA1Igw801DIhAinGP5HTDgq3AN9gyb6lJ319jleBbxaZQjdbY2nuadXpGxqHty8XG%2BPGgJz1EiKPVCnpwYC73TnqYDkhTLLdj3DZhHy5KGrotnwcGI1PHRLYxBcFxgpMAz97Hoe%2BWcxYNGduxNP8oqa5LH%2FajYbibdrZ%2Fk0hqSO7L1D%2Bx9U2THZiefXDfoC06gDROvGRkBYHXVroiNfole0%2FKZ2cpo4vBPenl64Hep6A5%2FJ7YHN9LNv7yKCo%2Fr10YZd2rpdmRLkTiHBvyLGPQQ2C6TzTeQbjINT9d%2Bv9jK4ZQofcQ0BkaaV1lOO02ngxXYylFYeyqbonRVNDhxnBXj3gIwg5IiefuJTP%2B%2FDAb5z7Xi6B6VjxC4%2Fk2ZShRx8M6McJFlNFGstvo0YKb9SH%2F7yPb6gNW2J1Z%2BUvZgyy%2B8rL19MrmSFa1uA2tJIPmq94%2Fru4162Mj0Ai0cd1E9Pav%2Fxup0s%2BxWT0u9TDIB1J39KjDGNGDuDlUwhkqeic8jk11FfktaP2y2dQGfxU5eTLOcs%2B8T6BCKkIco8ZXqYqc80AbqzkHlSpzsI%2FkUe2nqtfB9LGJqDq1v%2BUb7HC3jwZ1tTEH0QMZx1sqOZyZ2Nt%2F0JRieg7TZbasn1LvJzk6j0DAvVKjb6gAZxpxpU0TL%2FWDCqvt3DBjqkAXSKsqnV%2FGow4Av%2BfOlkoeA18cAvEm8PnUmmQRrDPbbEk3z9RKsOjjOpfFtj00YaoOR%2BoiL63Dp0gvFJBSBd5FSUIdbPTxw9oebaONfi86VgDgUQek%2BiAeIwHKp1kUmCxJa4z%2FLZlvknuD80FCttqT2zOfJQbSlyUaPc5lfusfhACLaJGwU%2FP5wTGMU8X8bMUXqDWEWfLpPC6jhGPPJRcJqS%2BHqx&X-Amz-Signature=546da7df0280006c818f58d4f1b5cb7ce24ac2c1a5f04b5731bffa9ae3f0cde0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLZQOXE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDsa3e07DNRZFZpKcDnMyineglG4naYcfQ1jgE7X3t10AIhAL1V%2FIWVq9Y9yYpKxwV0tthDwdZADoK%2FR1svlhg3mab%2FKv8DCFkQABoMNjM3NDIzMTgzODA1Igw801DIhAinGP5HTDgq3AN9gyb6lJ319jleBbxaZQjdbY2nuadXpGxqHty8XG%2BPGgJz1EiKPVCnpwYC73TnqYDkhTLLdj3DZhHy5KGrotnwcGI1PHRLYxBcFxgpMAz97Hoe%2BWcxYNGduxNP8oqa5LH%2FajYbibdrZ%2Fk0hqSO7L1D%2Bx9U2THZiefXDfoC06gDROvGRkBYHXVroiNfole0%2FKZ2cpo4vBPenl64Hep6A5%2FJ7YHN9LNv7yKCo%2Fr10YZd2rpdmRLkTiHBvyLGPQQ2C6TzTeQbjINT9d%2Bv9jK4ZQofcQ0BkaaV1lOO02ngxXYylFYeyqbonRVNDhxnBXj3gIwg5IiefuJTP%2B%2FDAb5z7Xi6B6VjxC4%2Fk2ZShRx8M6McJFlNFGstvo0YKb9SH%2F7yPb6gNW2J1Z%2BUvZgyy%2B8rL19MrmSFa1uA2tJIPmq94%2Fru4162Mj0Ai0cd1E9Pav%2Fxup0s%2BxWT0u9TDIB1J39KjDGNGDuDlUwhkqeic8jk11FfktaP2y2dQGfxU5eTLOcs%2B8T6BCKkIco8ZXqYqc80AbqzkHlSpzsI%2FkUe2nqtfB9LGJqDq1v%2BUb7HC3jwZ1tTEH0QMZx1sqOZyZ2Nt%2F0JRieg7TZbasn1LvJzk6j0DAvVKjb6gAZxpxpU0TL%2FWDCqvt3DBjqkAXSKsqnV%2FGow4Av%2BfOlkoeA18cAvEm8PnUmmQRrDPbbEk3z9RKsOjjOpfFtj00YaoOR%2BoiL63Dp0gvFJBSBd5FSUIdbPTxw9oebaONfi86VgDgUQek%2BiAeIwHKp1kUmCxJa4z%2FLZlvknuD80FCttqT2zOfJQbSlyUaPc5lfusfhACLaJGwU%2FP5wTGMU8X8bMUXqDWEWfLpPC6jhGPPJRcJqS%2BHqx&X-Amz-Signature=d3d00aea9236540049b30595b9d43e67bcf93ab3fba6a408f71850cc08d71c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLZQOXE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDsa3e07DNRZFZpKcDnMyineglG4naYcfQ1jgE7X3t10AIhAL1V%2FIWVq9Y9yYpKxwV0tthDwdZADoK%2FR1svlhg3mab%2FKv8DCFkQABoMNjM3NDIzMTgzODA1Igw801DIhAinGP5HTDgq3AN9gyb6lJ319jleBbxaZQjdbY2nuadXpGxqHty8XG%2BPGgJz1EiKPVCnpwYC73TnqYDkhTLLdj3DZhHy5KGrotnwcGI1PHRLYxBcFxgpMAz97Hoe%2BWcxYNGduxNP8oqa5LH%2FajYbibdrZ%2Fk0hqSO7L1D%2Bx9U2THZiefXDfoC06gDROvGRkBYHXVroiNfole0%2FKZ2cpo4vBPenl64Hep6A5%2FJ7YHN9LNv7yKCo%2Fr10YZd2rpdmRLkTiHBvyLGPQQ2C6TzTeQbjINT9d%2Bv9jK4ZQofcQ0BkaaV1lOO02ngxXYylFYeyqbonRVNDhxnBXj3gIwg5IiefuJTP%2B%2FDAb5z7Xi6B6VjxC4%2Fk2ZShRx8M6McJFlNFGstvo0YKb9SH%2F7yPb6gNW2J1Z%2BUvZgyy%2B8rL19MrmSFa1uA2tJIPmq94%2Fru4162Mj0Ai0cd1E9Pav%2Fxup0s%2BxWT0u9TDIB1J39KjDGNGDuDlUwhkqeic8jk11FfktaP2y2dQGfxU5eTLOcs%2B8T6BCKkIco8ZXqYqc80AbqzkHlSpzsI%2FkUe2nqtfB9LGJqDq1v%2BUb7HC3jwZ1tTEH0QMZx1sqOZyZ2Nt%2F0JRieg7TZbasn1LvJzk6j0DAvVKjb6gAZxpxpU0TL%2FWDCqvt3DBjqkAXSKsqnV%2FGow4Av%2BfOlkoeA18cAvEm8PnUmmQRrDPbbEk3z9RKsOjjOpfFtj00YaoOR%2BoiL63Dp0gvFJBSBd5FSUIdbPTxw9oebaONfi86VgDgUQek%2BiAeIwHKp1kUmCxJa4z%2FLZlvknuD80FCttqT2zOfJQbSlyUaPc5lfusfhACLaJGwU%2FP5wTGMU8X8bMUXqDWEWfLpPC6jhGPPJRcJqS%2BHqx&X-Amz-Signature=b0344464c5897a5272179c840a609a7b90c85b142c3f7de06205554cd8261762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLZQOXE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDsa3e07DNRZFZpKcDnMyineglG4naYcfQ1jgE7X3t10AIhAL1V%2FIWVq9Y9yYpKxwV0tthDwdZADoK%2FR1svlhg3mab%2FKv8DCFkQABoMNjM3NDIzMTgzODA1Igw801DIhAinGP5HTDgq3AN9gyb6lJ319jleBbxaZQjdbY2nuadXpGxqHty8XG%2BPGgJz1EiKPVCnpwYC73TnqYDkhTLLdj3DZhHy5KGrotnwcGI1PHRLYxBcFxgpMAz97Hoe%2BWcxYNGduxNP8oqa5LH%2FajYbibdrZ%2Fk0hqSO7L1D%2Bx9U2THZiefXDfoC06gDROvGRkBYHXVroiNfole0%2FKZ2cpo4vBPenl64Hep6A5%2FJ7YHN9LNv7yKCo%2Fr10YZd2rpdmRLkTiHBvyLGPQQ2C6TzTeQbjINT9d%2Bv9jK4ZQofcQ0BkaaV1lOO02ngxXYylFYeyqbonRVNDhxnBXj3gIwg5IiefuJTP%2B%2FDAb5z7Xi6B6VjxC4%2Fk2ZShRx8M6McJFlNFGstvo0YKb9SH%2F7yPb6gNW2J1Z%2BUvZgyy%2B8rL19MrmSFa1uA2tJIPmq94%2Fru4162Mj0Ai0cd1E9Pav%2Fxup0s%2BxWT0u9TDIB1J39KjDGNGDuDlUwhkqeic8jk11FfktaP2y2dQGfxU5eTLOcs%2B8T6BCKkIco8ZXqYqc80AbqzkHlSpzsI%2FkUe2nqtfB9LGJqDq1v%2BUb7HC3jwZ1tTEH0QMZx1sqOZyZ2Nt%2F0JRieg7TZbasn1LvJzk6j0DAvVKjb6gAZxpxpU0TL%2FWDCqvt3DBjqkAXSKsqnV%2FGow4Av%2BfOlkoeA18cAvEm8PnUmmQRrDPbbEk3z9RKsOjjOpfFtj00YaoOR%2BoiL63Dp0gvFJBSBd5FSUIdbPTxw9oebaONfi86VgDgUQek%2BiAeIwHKp1kUmCxJa4z%2FLZlvknuD80FCttqT2zOfJQbSlyUaPc5lfusfhACLaJGwU%2FP5wTGMU8X8bMUXqDWEWfLpPC6jhGPPJRcJqS%2BHqx&X-Amz-Signature=a91619ac3333f5b56e6772973e0988568348e72c26daae061ffdab0a77c44d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLZQOXE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDsa3e07DNRZFZpKcDnMyineglG4naYcfQ1jgE7X3t10AIhAL1V%2FIWVq9Y9yYpKxwV0tthDwdZADoK%2FR1svlhg3mab%2FKv8DCFkQABoMNjM3NDIzMTgzODA1Igw801DIhAinGP5HTDgq3AN9gyb6lJ319jleBbxaZQjdbY2nuadXpGxqHty8XG%2BPGgJz1EiKPVCnpwYC73TnqYDkhTLLdj3DZhHy5KGrotnwcGI1PHRLYxBcFxgpMAz97Hoe%2BWcxYNGduxNP8oqa5LH%2FajYbibdrZ%2Fk0hqSO7L1D%2Bx9U2THZiefXDfoC06gDROvGRkBYHXVroiNfole0%2FKZ2cpo4vBPenl64Hep6A5%2FJ7YHN9LNv7yKCo%2Fr10YZd2rpdmRLkTiHBvyLGPQQ2C6TzTeQbjINT9d%2Bv9jK4ZQofcQ0BkaaV1lOO02ngxXYylFYeyqbonRVNDhxnBXj3gIwg5IiefuJTP%2B%2FDAb5z7Xi6B6VjxC4%2Fk2ZShRx8M6McJFlNFGstvo0YKb9SH%2F7yPb6gNW2J1Z%2BUvZgyy%2B8rL19MrmSFa1uA2tJIPmq94%2Fru4162Mj0Ai0cd1E9Pav%2Fxup0s%2BxWT0u9TDIB1J39KjDGNGDuDlUwhkqeic8jk11FfktaP2y2dQGfxU5eTLOcs%2B8T6BCKkIco8ZXqYqc80AbqzkHlSpzsI%2FkUe2nqtfB9LGJqDq1v%2BUb7HC3jwZ1tTEH0QMZx1sqOZyZ2Nt%2F0JRieg7TZbasn1LvJzk6j0DAvVKjb6gAZxpxpU0TL%2FWDCqvt3DBjqkAXSKsqnV%2FGow4Av%2BfOlkoeA18cAvEm8PnUmmQRrDPbbEk3z9RKsOjjOpfFtj00YaoOR%2BoiL63Dp0gvFJBSBd5FSUIdbPTxw9oebaONfi86VgDgUQek%2BiAeIwHKp1kUmCxJa4z%2FLZlvknuD80FCttqT2zOfJQbSlyUaPc5lfusfhACLaJGwU%2FP5wTGMU8X8bMUXqDWEWfLpPC6jhGPPJRcJqS%2BHqx&X-Amz-Signature=6b4242fcab5c685908e15cf267546a8204de37e05eb51c0b5974658e3928efa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
