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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GBLGNZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ%2B6V3eBK3Pk5fIuPbWLjZTbbUbYJ1Obn8h7Qn6WS5aQIhAN%2FEjZphZIr97P4gF5bLrQgezH7CbRveL7ABP8CY5kO5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTkO%2F%2FUunuVCUo0Ukq3AO1fc65xeW2tJQ%2BgkEl67Q2l19Q%2Fh1wyisr8LGKIt7YSC%2B8DEzmSTRAq1P2DOI%2FEYv2FWLOPqeI6WJ%2FCwcAgG%2F%2FEK1CbUOKYK5REoo4xpOVCu6QjHCyq6%2F3fAvd6pGobZYzFSSUB0mDhdT2iasEgwIO47ILSPHsJmDhYtiBGzVgaCU5NecMgS5WFMnUXa8P%2FXDBxWyIYOf29%2FEPbuR7NWO%2FfBC252MGBuqrCLdckoU5zKKrqKSGGi2UQBEY6G26P6f66z6FHq2ULojPU8T06qYyd7By6CZIbAqPOwhUY5i83uF0nKOKR1MLu6%2F%2FhsHjK3OqG9CH9epLjtuk5SeCfcM6ceQ4IyRBFs1F1x68CKr8BoYrMV4Lx6pObhCB79%2FdFc6cHfOOwAw0oY1oVSGAj%2FLIZERmXdluH%2FK%2FQY%2Fd48cKduzXlSFHfYgJdBbd67R8r66eut5PRCl%2BEVr%2FzZ3wEmfiB%2FZTWnhu%2BL1dvdK1Ftf9LmfrKTnqgf39yRK0L6BU%2B1JZbCRWH3cnfWzsyEZXLdnQB%2BoEpsWdh95aONyvlSQ0Qin1VdHCK4qqroukufBCLi8ETqoDkM56zola78ncMb9saRhWRBiIPOHnYanL7clqpkirylkOMNPXM0iI1zCp9bfDBjqkAR5MNcCWoLZQP5sTvSW6QIgx5tydkcH23tzZHcEzZeKcpdHMhu6UrLw6Gw%2BGVK%2FGczwGQvizYBIEZcZ6KR0CgLDKUSzl05gno%2BUO72Gl4XgX8bQAkQbah35rFpp6hNmT0eaASo9mcEReitAVFNfwWrm13R3DVRWAOVqs5%2FeI5EA%2FWRL0G%2BkfINoHHsZmXqPdYNe3t4suuxgs5N4gxgAp%2FK9tlip2&X-Amz-Signature=568bd9e9b3e84142aecc21563fb2abb9009732c24b162413e528a46369bb6e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GBLGNZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ%2B6V3eBK3Pk5fIuPbWLjZTbbUbYJ1Obn8h7Qn6WS5aQIhAN%2FEjZphZIr97P4gF5bLrQgezH7CbRveL7ABP8CY5kO5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTkO%2F%2FUunuVCUo0Ukq3AO1fc65xeW2tJQ%2BgkEl67Q2l19Q%2Fh1wyisr8LGKIt7YSC%2B8DEzmSTRAq1P2DOI%2FEYv2FWLOPqeI6WJ%2FCwcAgG%2F%2FEK1CbUOKYK5REoo4xpOVCu6QjHCyq6%2F3fAvd6pGobZYzFSSUB0mDhdT2iasEgwIO47ILSPHsJmDhYtiBGzVgaCU5NecMgS5WFMnUXa8P%2FXDBxWyIYOf29%2FEPbuR7NWO%2FfBC252MGBuqrCLdckoU5zKKrqKSGGi2UQBEY6G26P6f66z6FHq2ULojPU8T06qYyd7By6CZIbAqPOwhUY5i83uF0nKOKR1MLu6%2F%2FhsHjK3OqG9CH9epLjtuk5SeCfcM6ceQ4IyRBFs1F1x68CKr8BoYrMV4Lx6pObhCB79%2FdFc6cHfOOwAw0oY1oVSGAj%2FLIZERmXdluH%2FK%2FQY%2Fd48cKduzXlSFHfYgJdBbd67R8r66eut5PRCl%2BEVr%2FzZ3wEmfiB%2FZTWnhu%2BL1dvdK1Ftf9LmfrKTnqgf39yRK0L6BU%2B1JZbCRWH3cnfWzsyEZXLdnQB%2BoEpsWdh95aONyvlSQ0Qin1VdHCK4qqroukufBCLi8ETqoDkM56zola78ncMb9saRhWRBiIPOHnYanL7clqpkirylkOMNPXM0iI1zCp9bfDBjqkAR5MNcCWoLZQP5sTvSW6QIgx5tydkcH23tzZHcEzZeKcpdHMhu6UrLw6Gw%2BGVK%2FGczwGQvizYBIEZcZ6KR0CgLDKUSzl05gno%2BUO72Gl4XgX8bQAkQbah35rFpp6hNmT0eaASo9mcEReitAVFNfwWrm13R3DVRWAOVqs5%2FeI5EA%2FWRL0G%2BkfINoHHsZmXqPdYNe3t4suuxgs5N4gxgAp%2FK9tlip2&X-Amz-Signature=6e2b152ab06c6b8a195802988c907ad89664045fbeb2e8bb8f365d48f633fa1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GBLGNZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ%2B6V3eBK3Pk5fIuPbWLjZTbbUbYJ1Obn8h7Qn6WS5aQIhAN%2FEjZphZIr97P4gF5bLrQgezH7CbRveL7ABP8CY5kO5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTkO%2F%2FUunuVCUo0Ukq3AO1fc65xeW2tJQ%2BgkEl67Q2l19Q%2Fh1wyisr8LGKIt7YSC%2B8DEzmSTRAq1P2DOI%2FEYv2FWLOPqeI6WJ%2FCwcAgG%2F%2FEK1CbUOKYK5REoo4xpOVCu6QjHCyq6%2F3fAvd6pGobZYzFSSUB0mDhdT2iasEgwIO47ILSPHsJmDhYtiBGzVgaCU5NecMgS5WFMnUXa8P%2FXDBxWyIYOf29%2FEPbuR7NWO%2FfBC252MGBuqrCLdckoU5zKKrqKSGGi2UQBEY6G26P6f66z6FHq2ULojPU8T06qYyd7By6CZIbAqPOwhUY5i83uF0nKOKR1MLu6%2F%2FhsHjK3OqG9CH9epLjtuk5SeCfcM6ceQ4IyRBFs1F1x68CKr8BoYrMV4Lx6pObhCB79%2FdFc6cHfOOwAw0oY1oVSGAj%2FLIZERmXdluH%2FK%2FQY%2Fd48cKduzXlSFHfYgJdBbd67R8r66eut5PRCl%2BEVr%2FzZ3wEmfiB%2FZTWnhu%2BL1dvdK1Ftf9LmfrKTnqgf39yRK0L6BU%2B1JZbCRWH3cnfWzsyEZXLdnQB%2BoEpsWdh95aONyvlSQ0Qin1VdHCK4qqroukufBCLi8ETqoDkM56zola78ncMb9saRhWRBiIPOHnYanL7clqpkirylkOMNPXM0iI1zCp9bfDBjqkAR5MNcCWoLZQP5sTvSW6QIgx5tydkcH23tzZHcEzZeKcpdHMhu6UrLw6Gw%2BGVK%2FGczwGQvizYBIEZcZ6KR0CgLDKUSzl05gno%2BUO72Gl4XgX8bQAkQbah35rFpp6hNmT0eaASo9mcEReitAVFNfwWrm13R3DVRWAOVqs5%2FeI5EA%2FWRL0G%2BkfINoHHsZmXqPdYNe3t4suuxgs5N4gxgAp%2FK9tlip2&X-Amz-Signature=6bcf17ef10dd50a03973de1fcc0565ff538eae20930208810cb446f601b50dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GBLGNZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ%2B6V3eBK3Pk5fIuPbWLjZTbbUbYJ1Obn8h7Qn6WS5aQIhAN%2FEjZphZIr97P4gF5bLrQgezH7CbRveL7ABP8CY5kO5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTkO%2F%2FUunuVCUo0Ukq3AO1fc65xeW2tJQ%2BgkEl67Q2l19Q%2Fh1wyisr8LGKIt7YSC%2B8DEzmSTRAq1P2DOI%2FEYv2FWLOPqeI6WJ%2FCwcAgG%2F%2FEK1CbUOKYK5REoo4xpOVCu6QjHCyq6%2F3fAvd6pGobZYzFSSUB0mDhdT2iasEgwIO47ILSPHsJmDhYtiBGzVgaCU5NecMgS5WFMnUXa8P%2FXDBxWyIYOf29%2FEPbuR7NWO%2FfBC252MGBuqrCLdckoU5zKKrqKSGGi2UQBEY6G26P6f66z6FHq2ULojPU8T06qYyd7By6CZIbAqPOwhUY5i83uF0nKOKR1MLu6%2F%2FhsHjK3OqG9CH9epLjtuk5SeCfcM6ceQ4IyRBFs1F1x68CKr8BoYrMV4Lx6pObhCB79%2FdFc6cHfOOwAw0oY1oVSGAj%2FLIZERmXdluH%2FK%2FQY%2Fd48cKduzXlSFHfYgJdBbd67R8r66eut5PRCl%2BEVr%2FzZ3wEmfiB%2FZTWnhu%2BL1dvdK1Ftf9LmfrKTnqgf39yRK0L6BU%2B1JZbCRWH3cnfWzsyEZXLdnQB%2BoEpsWdh95aONyvlSQ0Qin1VdHCK4qqroukufBCLi8ETqoDkM56zola78ncMb9saRhWRBiIPOHnYanL7clqpkirylkOMNPXM0iI1zCp9bfDBjqkAR5MNcCWoLZQP5sTvSW6QIgx5tydkcH23tzZHcEzZeKcpdHMhu6UrLw6Gw%2BGVK%2FGczwGQvizYBIEZcZ6KR0CgLDKUSzl05gno%2BUO72Gl4XgX8bQAkQbah35rFpp6hNmT0eaASo9mcEReitAVFNfwWrm13R3DVRWAOVqs5%2FeI5EA%2FWRL0G%2BkfINoHHsZmXqPdYNe3t4suuxgs5N4gxgAp%2FK9tlip2&X-Amz-Signature=2e4a1adc16aefe6e243c10db745c6f0b0445cd310d99648bfcec668f776f20d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GBLGNZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ%2B6V3eBK3Pk5fIuPbWLjZTbbUbYJ1Obn8h7Qn6WS5aQIhAN%2FEjZphZIr97P4gF5bLrQgezH7CbRveL7ABP8CY5kO5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTkO%2F%2FUunuVCUo0Ukq3AO1fc65xeW2tJQ%2BgkEl67Q2l19Q%2Fh1wyisr8LGKIt7YSC%2B8DEzmSTRAq1P2DOI%2FEYv2FWLOPqeI6WJ%2FCwcAgG%2F%2FEK1CbUOKYK5REoo4xpOVCu6QjHCyq6%2F3fAvd6pGobZYzFSSUB0mDhdT2iasEgwIO47ILSPHsJmDhYtiBGzVgaCU5NecMgS5WFMnUXa8P%2FXDBxWyIYOf29%2FEPbuR7NWO%2FfBC252MGBuqrCLdckoU5zKKrqKSGGi2UQBEY6G26P6f66z6FHq2ULojPU8T06qYyd7By6CZIbAqPOwhUY5i83uF0nKOKR1MLu6%2F%2FhsHjK3OqG9CH9epLjtuk5SeCfcM6ceQ4IyRBFs1F1x68CKr8BoYrMV4Lx6pObhCB79%2FdFc6cHfOOwAw0oY1oVSGAj%2FLIZERmXdluH%2FK%2FQY%2Fd48cKduzXlSFHfYgJdBbd67R8r66eut5PRCl%2BEVr%2FzZ3wEmfiB%2FZTWnhu%2BL1dvdK1Ftf9LmfrKTnqgf39yRK0L6BU%2B1JZbCRWH3cnfWzsyEZXLdnQB%2BoEpsWdh95aONyvlSQ0Qin1VdHCK4qqroukufBCLi8ETqoDkM56zola78ncMb9saRhWRBiIPOHnYanL7clqpkirylkOMNPXM0iI1zCp9bfDBjqkAR5MNcCWoLZQP5sTvSW6QIgx5tydkcH23tzZHcEzZeKcpdHMhu6UrLw6Gw%2BGVK%2FGczwGQvizYBIEZcZ6KR0CgLDKUSzl05gno%2BUO72Gl4XgX8bQAkQbah35rFpp6hNmT0eaASo9mcEReitAVFNfwWrm13R3DVRWAOVqs5%2FeI5EA%2FWRL0G%2BkfINoHHsZmXqPdYNe3t4suuxgs5N4gxgAp%2FK9tlip2&X-Amz-Signature=117d6011b08f264410eed82a410c11017028a371c2b6aa46f76b9c7e3ac3690f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GBLGNZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ%2B6V3eBK3Pk5fIuPbWLjZTbbUbYJ1Obn8h7Qn6WS5aQIhAN%2FEjZphZIr97P4gF5bLrQgezH7CbRveL7ABP8CY5kO5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTkO%2F%2FUunuVCUo0Ukq3AO1fc65xeW2tJQ%2BgkEl67Q2l19Q%2Fh1wyisr8LGKIt7YSC%2B8DEzmSTRAq1P2DOI%2FEYv2FWLOPqeI6WJ%2FCwcAgG%2F%2FEK1CbUOKYK5REoo4xpOVCu6QjHCyq6%2F3fAvd6pGobZYzFSSUB0mDhdT2iasEgwIO47ILSPHsJmDhYtiBGzVgaCU5NecMgS5WFMnUXa8P%2FXDBxWyIYOf29%2FEPbuR7NWO%2FfBC252MGBuqrCLdckoU5zKKrqKSGGi2UQBEY6G26P6f66z6FHq2ULojPU8T06qYyd7By6CZIbAqPOwhUY5i83uF0nKOKR1MLu6%2F%2FhsHjK3OqG9CH9epLjtuk5SeCfcM6ceQ4IyRBFs1F1x68CKr8BoYrMV4Lx6pObhCB79%2FdFc6cHfOOwAw0oY1oVSGAj%2FLIZERmXdluH%2FK%2FQY%2Fd48cKduzXlSFHfYgJdBbd67R8r66eut5PRCl%2BEVr%2FzZ3wEmfiB%2FZTWnhu%2BL1dvdK1Ftf9LmfrKTnqgf39yRK0L6BU%2B1JZbCRWH3cnfWzsyEZXLdnQB%2BoEpsWdh95aONyvlSQ0Qin1VdHCK4qqroukufBCLi8ETqoDkM56zola78ncMb9saRhWRBiIPOHnYanL7clqpkirylkOMNPXM0iI1zCp9bfDBjqkAR5MNcCWoLZQP5sTvSW6QIgx5tydkcH23tzZHcEzZeKcpdHMhu6UrLw6Gw%2BGVK%2FGczwGQvizYBIEZcZ6KR0CgLDKUSzl05gno%2BUO72Gl4XgX8bQAkQbah35rFpp6hNmT0eaASo9mcEReitAVFNfwWrm13R3DVRWAOVqs5%2FeI5EA%2FWRL0G%2BkfINoHHsZmXqPdYNe3t4suuxgs5N4gxgAp%2FK9tlip2&X-Amz-Signature=40eb27e8d1c4a98efcc9fb2db7e645243da67b25fce303d1cc7b077305660e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GBLGNZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ%2B6V3eBK3Pk5fIuPbWLjZTbbUbYJ1Obn8h7Qn6WS5aQIhAN%2FEjZphZIr97P4gF5bLrQgezH7CbRveL7ABP8CY5kO5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTkO%2F%2FUunuVCUo0Ukq3AO1fc65xeW2tJQ%2BgkEl67Q2l19Q%2Fh1wyisr8LGKIt7YSC%2B8DEzmSTRAq1P2DOI%2FEYv2FWLOPqeI6WJ%2FCwcAgG%2F%2FEK1CbUOKYK5REoo4xpOVCu6QjHCyq6%2F3fAvd6pGobZYzFSSUB0mDhdT2iasEgwIO47ILSPHsJmDhYtiBGzVgaCU5NecMgS5WFMnUXa8P%2FXDBxWyIYOf29%2FEPbuR7NWO%2FfBC252MGBuqrCLdckoU5zKKrqKSGGi2UQBEY6G26P6f66z6FHq2ULojPU8T06qYyd7By6CZIbAqPOwhUY5i83uF0nKOKR1MLu6%2F%2FhsHjK3OqG9CH9epLjtuk5SeCfcM6ceQ4IyRBFs1F1x68CKr8BoYrMV4Lx6pObhCB79%2FdFc6cHfOOwAw0oY1oVSGAj%2FLIZERmXdluH%2FK%2FQY%2Fd48cKduzXlSFHfYgJdBbd67R8r66eut5PRCl%2BEVr%2FzZ3wEmfiB%2FZTWnhu%2BL1dvdK1Ftf9LmfrKTnqgf39yRK0L6BU%2B1JZbCRWH3cnfWzsyEZXLdnQB%2BoEpsWdh95aONyvlSQ0Qin1VdHCK4qqroukufBCLi8ETqoDkM56zola78ncMb9saRhWRBiIPOHnYanL7clqpkirylkOMNPXM0iI1zCp9bfDBjqkAR5MNcCWoLZQP5sTvSW6QIgx5tydkcH23tzZHcEzZeKcpdHMhu6UrLw6Gw%2BGVK%2FGczwGQvizYBIEZcZ6KR0CgLDKUSzl05gno%2BUO72Gl4XgX8bQAkQbah35rFpp6hNmT0eaASo9mcEReitAVFNfwWrm13R3DVRWAOVqs5%2FeI5EA%2FWRL0G%2BkfINoHHsZmXqPdYNe3t4suuxgs5N4gxgAp%2FK9tlip2&X-Amz-Signature=e66bb9e335537cc0583c4f595123bb7c25805f5f6b536a97289ea790c72b8586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
