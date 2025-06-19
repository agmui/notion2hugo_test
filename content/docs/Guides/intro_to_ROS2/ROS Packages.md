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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZVW2FA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwbXDStZYJioMD54cdN0JYLS5EeQngZQanL8jMPWw89AiEAvP400lCOuTatVejw9A2X8c0UA9lPXhWi%2BwvUvAvZfuIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B0XS6x4gqR3BN3mCrcAzHUQWWbxu%2FSZ%2Fj40B0XvNvR%2B4jot8llAuzBWLIQuf32vw8qpHlFo%2B2VuiomDSxbIVptEjz3tY1APWe9h2SCZb3QegrZOQvw0waJf%2BMZ3Y4G3tOvldh83Thcq8sN3R3ecMOnXu%2BpK2feGVax7tie0ZncTVKdEY4P1XsiVdjhUC%2F7g%2FwRZ340DXjQvwtUm1fQ4D5TFKHCUa9bGb%2BEdFjrtF%2FGJzuS9TMymVWSDtHanui4dIgrXSm%2Fzs1Z3OGPceK%2BfX49r2yt5wxXFqxIFDZzfJv6XON0fw%2FE79KYK5oJjuF96tEv6ffbTmtd9zEI1dxAiibrZsVBmlX%2FuXCTMpwAY%2BLtqXJU1PnNF675xkvWYNm6MZs7u34SJNbgUvdrFlLrOGiOneJCiq6KAGNTBJQvecUiS6m93QmMll4Q29gYbImWH2ZMWt%2B3eJndm4%2FntM7tsO2CHNXOt40F72jA%2BjbTr6NbXT4brcW024o4I8x3Ygw1pW3e0Hnzd7qMFziKQUPlppSVVhiWqpZMYPqKlHYVLK8%2FlSz06Ea6kqVYloc2V6yxJ3PZ0Kwe3k493D%2F40yy3B7OyqnD2kSyu68Q6owFA30TBBtHa%2FjcptLLj7Fp27RVc4WWYkdWnNw9hKHO1MO610cIGOqUBwQiIyOLL7TzU5JdDfG7K0UE2o0ZXfROM6ZWGoYRgo2hDKKzv%2BZMcJbeOsxDq8Bm1a8MuFYNRA%2FuVajJw%2BZvdVHeQ8mGnteGvN8a%2BPjLYY5Bh%2BzSzCkLo63YjXw1kMX4zuAQGKujkt0UYQ7B5R4tAc9LVW8s2U5mytr0MoOxEDW7iPwUtviLEXiUccSkGuCD%2FrJWW3GY0KwUH7FhDfPa8Qh44z0jd&X-Amz-Signature=728d705d49aed4044117af20a4317a1f8358c61f686066b6da9859d27287441f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZVW2FA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwbXDStZYJioMD54cdN0JYLS5EeQngZQanL8jMPWw89AiEAvP400lCOuTatVejw9A2X8c0UA9lPXhWi%2BwvUvAvZfuIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B0XS6x4gqR3BN3mCrcAzHUQWWbxu%2FSZ%2Fj40B0XvNvR%2B4jot8llAuzBWLIQuf32vw8qpHlFo%2B2VuiomDSxbIVptEjz3tY1APWe9h2SCZb3QegrZOQvw0waJf%2BMZ3Y4G3tOvldh83Thcq8sN3R3ecMOnXu%2BpK2feGVax7tie0ZncTVKdEY4P1XsiVdjhUC%2F7g%2FwRZ340DXjQvwtUm1fQ4D5TFKHCUa9bGb%2BEdFjrtF%2FGJzuS9TMymVWSDtHanui4dIgrXSm%2Fzs1Z3OGPceK%2BfX49r2yt5wxXFqxIFDZzfJv6XON0fw%2FE79KYK5oJjuF96tEv6ffbTmtd9zEI1dxAiibrZsVBmlX%2FuXCTMpwAY%2BLtqXJU1PnNF675xkvWYNm6MZs7u34SJNbgUvdrFlLrOGiOneJCiq6KAGNTBJQvecUiS6m93QmMll4Q29gYbImWH2ZMWt%2B3eJndm4%2FntM7tsO2CHNXOt40F72jA%2BjbTr6NbXT4brcW024o4I8x3Ygw1pW3e0Hnzd7qMFziKQUPlppSVVhiWqpZMYPqKlHYVLK8%2FlSz06Ea6kqVYloc2V6yxJ3PZ0Kwe3k493D%2F40yy3B7OyqnD2kSyu68Q6owFA30TBBtHa%2FjcptLLj7Fp27RVc4WWYkdWnNw9hKHO1MO610cIGOqUBwQiIyOLL7TzU5JdDfG7K0UE2o0ZXfROM6ZWGoYRgo2hDKKzv%2BZMcJbeOsxDq8Bm1a8MuFYNRA%2FuVajJw%2BZvdVHeQ8mGnteGvN8a%2BPjLYY5Bh%2BzSzCkLo63YjXw1kMX4zuAQGKujkt0UYQ7B5R4tAc9LVW8s2U5mytr0MoOxEDW7iPwUtviLEXiUccSkGuCD%2FrJWW3GY0KwUH7FhDfPa8Qh44z0jd&X-Amz-Signature=97f894bfbf89dad3c421795ae4517fa83406296a322d31e3656c35d93d60e129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZVW2FA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwbXDStZYJioMD54cdN0JYLS5EeQngZQanL8jMPWw89AiEAvP400lCOuTatVejw9A2X8c0UA9lPXhWi%2BwvUvAvZfuIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B0XS6x4gqR3BN3mCrcAzHUQWWbxu%2FSZ%2Fj40B0XvNvR%2B4jot8llAuzBWLIQuf32vw8qpHlFo%2B2VuiomDSxbIVptEjz3tY1APWe9h2SCZb3QegrZOQvw0waJf%2BMZ3Y4G3tOvldh83Thcq8sN3R3ecMOnXu%2BpK2feGVax7tie0ZncTVKdEY4P1XsiVdjhUC%2F7g%2FwRZ340DXjQvwtUm1fQ4D5TFKHCUa9bGb%2BEdFjrtF%2FGJzuS9TMymVWSDtHanui4dIgrXSm%2Fzs1Z3OGPceK%2BfX49r2yt5wxXFqxIFDZzfJv6XON0fw%2FE79KYK5oJjuF96tEv6ffbTmtd9zEI1dxAiibrZsVBmlX%2FuXCTMpwAY%2BLtqXJU1PnNF675xkvWYNm6MZs7u34SJNbgUvdrFlLrOGiOneJCiq6KAGNTBJQvecUiS6m93QmMll4Q29gYbImWH2ZMWt%2B3eJndm4%2FntM7tsO2CHNXOt40F72jA%2BjbTr6NbXT4brcW024o4I8x3Ygw1pW3e0Hnzd7qMFziKQUPlppSVVhiWqpZMYPqKlHYVLK8%2FlSz06Ea6kqVYloc2V6yxJ3PZ0Kwe3k493D%2F40yy3B7OyqnD2kSyu68Q6owFA30TBBtHa%2FjcptLLj7Fp27RVc4WWYkdWnNw9hKHO1MO610cIGOqUBwQiIyOLL7TzU5JdDfG7K0UE2o0ZXfROM6ZWGoYRgo2hDKKzv%2BZMcJbeOsxDq8Bm1a8MuFYNRA%2FuVajJw%2BZvdVHeQ8mGnteGvN8a%2BPjLYY5Bh%2BzSzCkLo63YjXw1kMX4zuAQGKujkt0UYQ7B5R4tAc9LVW8s2U5mytr0MoOxEDW7iPwUtviLEXiUccSkGuCD%2FrJWW3GY0KwUH7FhDfPa8Qh44z0jd&X-Amz-Signature=18b59ff8ddb0fe7d711b519229022f713d67b9312135c8b278728e57d1e950fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZVW2FA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwbXDStZYJioMD54cdN0JYLS5EeQngZQanL8jMPWw89AiEAvP400lCOuTatVejw9A2X8c0UA9lPXhWi%2BwvUvAvZfuIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B0XS6x4gqR3BN3mCrcAzHUQWWbxu%2FSZ%2Fj40B0XvNvR%2B4jot8llAuzBWLIQuf32vw8qpHlFo%2B2VuiomDSxbIVptEjz3tY1APWe9h2SCZb3QegrZOQvw0waJf%2BMZ3Y4G3tOvldh83Thcq8sN3R3ecMOnXu%2BpK2feGVax7tie0ZncTVKdEY4P1XsiVdjhUC%2F7g%2FwRZ340DXjQvwtUm1fQ4D5TFKHCUa9bGb%2BEdFjrtF%2FGJzuS9TMymVWSDtHanui4dIgrXSm%2Fzs1Z3OGPceK%2BfX49r2yt5wxXFqxIFDZzfJv6XON0fw%2FE79KYK5oJjuF96tEv6ffbTmtd9zEI1dxAiibrZsVBmlX%2FuXCTMpwAY%2BLtqXJU1PnNF675xkvWYNm6MZs7u34SJNbgUvdrFlLrOGiOneJCiq6KAGNTBJQvecUiS6m93QmMll4Q29gYbImWH2ZMWt%2B3eJndm4%2FntM7tsO2CHNXOt40F72jA%2BjbTr6NbXT4brcW024o4I8x3Ygw1pW3e0Hnzd7qMFziKQUPlppSVVhiWqpZMYPqKlHYVLK8%2FlSz06Ea6kqVYloc2V6yxJ3PZ0Kwe3k493D%2F40yy3B7OyqnD2kSyu68Q6owFA30TBBtHa%2FjcptLLj7Fp27RVc4WWYkdWnNw9hKHO1MO610cIGOqUBwQiIyOLL7TzU5JdDfG7K0UE2o0ZXfROM6ZWGoYRgo2hDKKzv%2BZMcJbeOsxDq8Bm1a8MuFYNRA%2FuVajJw%2BZvdVHeQ8mGnteGvN8a%2BPjLYY5Bh%2BzSzCkLo63YjXw1kMX4zuAQGKujkt0UYQ7B5R4tAc9LVW8s2U5mytr0MoOxEDW7iPwUtviLEXiUccSkGuCD%2FrJWW3GY0KwUH7FhDfPa8Qh44z0jd&X-Amz-Signature=223b709720b79f30f975e7a68fc6d5e8025adf4b5112e1553ceb57b0bc0fb093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZVW2FA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwbXDStZYJioMD54cdN0JYLS5EeQngZQanL8jMPWw89AiEAvP400lCOuTatVejw9A2X8c0UA9lPXhWi%2BwvUvAvZfuIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B0XS6x4gqR3BN3mCrcAzHUQWWbxu%2FSZ%2Fj40B0XvNvR%2B4jot8llAuzBWLIQuf32vw8qpHlFo%2B2VuiomDSxbIVptEjz3tY1APWe9h2SCZb3QegrZOQvw0waJf%2BMZ3Y4G3tOvldh83Thcq8sN3R3ecMOnXu%2BpK2feGVax7tie0ZncTVKdEY4P1XsiVdjhUC%2F7g%2FwRZ340DXjQvwtUm1fQ4D5TFKHCUa9bGb%2BEdFjrtF%2FGJzuS9TMymVWSDtHanui4dIgrXSm%2Fzs1Z3OGPceK%2BfX49r2yt5wxXFqxIFDZzfJv6XON0fw%2FE79KYK5oJjuF96tEv6ffbTmtd9zEI1dxAiibrZsVBmlX%2FuXCTMpwAY%2BLtqXJU1PnNF675xkvWYNm6MZs7u34SJNbgUvdrFlLrOGiOneJCiq6KAGNTBJQvecUiS6m93QmMll4Q29gYbImWH2ZMWt%2B3eJndm4%2FntM7tsO2CHNXOt40F72jA%2BjbTr6NbXT4brcW024o4I8x3Ygw1pW3e0Hnzd7qMFziKQUPlppSVVhiWqpZMYPqKlHYVLK8%2FlSz06Ea6kqVYloc2V6yxJ3PZ0Kwe3k493D%2F40yy3B7OyqnD2kSyu68Q6owFA30TBBtHa%2FjcptLLj7Fp27RVc4WWYkdWnNw9hKHO1MO610cIGOqUBwQiIyOLL7TzU5JdDfG7K0UE2o0ZXfROM6ZWGoYRgo2hDKKzv%2BZMcJbeOsxDq8Bm1a8MuFYNRA%2FuVajJw%2BZvdVHeQ8mGnteGvN8a%2BPjLYY5Bh%2BzSzCkLo63YjXw1kMX4zuAQGKujkt0UYQ7B5R4tAc9LVW8s2U5mytr0MoOxEDW7iPwUtviLEXiUccSkGuCD%2FrJWW3GY0KwUH7FhDfPa8Qh44z0jd&X-Amz-Signature=90d4455ffb0f7f82f35dc57896d6752caa908e6af4a91b4cf45c2bc89602bac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZVW2FA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwbXDStZYJioMD54cdN0JYLS5EeQngZQanL8jMPWw89AiEAvP400lCOuTatVejw9A2X8c0UA9lPXhWi%2BwvUvAvZfuIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B0XS6x4gqR3BN3mCrcAzHUQWWbxu%2FSZ%2Fj40B0XvNvR%2B4jot8llAuzBWLIQuf32vw8qpHlFo%2B2VuiomDSxbIVptEjz3tY1APWe9h2SCZb3QegrZOQvw0waJf%2BMZ3Y4G3tOvldh83Thcq8sN3R3ecMOnXu%2BpK2feGVax7tie0ZncTVKdEY4P1XsiVdjhUC%2F7g%2FwRZ340DXjQvwtUm1fQ4D5TFKHCUa9bGb%2BEdFjrtF%2FGJzuS9TMymVWSDtHanui4dIgrXSm%2Fzs1Z3OGPceK%2BfX49r2yt5wxXFqxIFDZzfJv6XON0fw%2FE79KYK5oJjuF96tEv6ffbTmtd9zEI1dxAiibrZsVBmlX%2FuXCTMpwAY%2BLtqXJU1PnNF675xkvWYNm6MZs7u34SJNbgUvdrFlLrOGiOneJCiq6KAGNTBJQvecUiS6m93QmMll4Q29gYbImWH2ZMWt%2B3eJndm4%2FntM7tsO2CHNXOt40F72jA%2BjbTr6NbXT4brcW024o4I8x3Ygw1pW3e0Hnzd7qMFziKQUPlppSVVhiWqpZMYPqKlHYVLK8%2FlSz06Ea6kqVYloc2V6yxJ3PZ0Kwe3k493D%2F40yy3B7OyqnD2kSyu68Q6owFA30TBBtHa%2FjcptLLj7Fp27RVc4WWYkdWnNw9hKHO1MO610cIGOqUBwQiIyOLL7TzU5JdDfG7K0UE2o0ZXfROM6ZWGoYRgo2hDKKzv%2BZMcJbeOsxDq8Bm1a8MuFYNRA%2FuVajJw%2BZvdVHeQ8mGnteGvN8a%2BPjLYY5Bh%2BzSzCkLo63YjXw1kMX4zuAQGKujkt0UYQ7B5R4tAc9LVW8s2U5mytr0MoOxEDW7iPwUtviLEXiUccSkGuCD%2FrJWW3GY0KwUH7FhDfPa8Qh44z0jd&X-Amz-Signature=3c205f9b4d191c9b5c323083e8d2c267117b838e9e4c38901022bd814d27beb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZVW2FA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwbXDStZYJioMD54cdN0JYLS5EeQngZQanL8jMPWw89AiEAvP400lCOuTatVejw9A2X8c0UA9lPXhWi%2BwvUvAvZfuIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B0XS6x4gqR3BN3mCrcAzHUQWWbxu%2FSZ%2Fj40B0XvNvR%2B4jot8llAuzBWLIQuf32vw8qpHlFo%2B2VuiomDSxbIVptEjz3tY1APWe9h2SCZb3QegrZOQvw0waJf%2BMZ3Y4G3tOvldh83Thcq8sN3R3ecMOnXu%2BpK2feGVax7tie0ZncTVKdEY4P1XsiVdjhUC%2F7g%2FwRZ340DXjQvwtUm1fQ4D5TFKHCUa9bGb%2BEdFjrtF%2FGJzuS9TMymVWSDtHanui4dIgrXSm%2Fzs1Z3OGPceK%2BfX49r2yt5wxXFqxIFDZzfJv6XON0fw%2FE79KYK5oJjuF96tEv6ffbTmtd9zEI1dxAiibrZsVBmlX%2FuXCTMpwAY%2BLtqXJU1PnNF675xkvWYNm6MZs7u34SJNbgUvdrFlLrOGiOneJCiq6KAGNTBJQvecUiS6m93QmMll4Q29gYbImWH2ZMWt%2B3eJndm4%2FntM7tsO2CHNXOt40F72jA%2BjbTr6NbXT4brcW024o4I8x3Ygw1pW3e0Hnzd7qMFziKQUPlppSVVhiWqpZMYPqKlHYVLK8%2FlSz06Ea6kqVYloc2V6yxJ3PZ0Kwe3k493D%2F40yy3B7OyqnD2kSyu68Q6owFA30TBBtHa%2FjcptLLj7Fp27RVc4WWYkdWnNw9hKHO1MO610cIGOqUBwQiIyOLL7TzU5JdDfG7K0UE2o0ZXfROM6ZWGoYRgo2hDKKzv%2BZMcJbeOsxDq8Bm1a8MuFYNRA%2FuVajJw%2BZvdVHeQ8mGnteGvN8a%2BPjLYY5Bh%2BzSzCkLo63YjXw1kMX4zuAQGKujkt0UYQ7B5R4tAc9LVW8s2U5mytr0MoOxEDW7iPwUtviLEXiUccSkGuCD%2FrJWW3GY0KwUH7FhDfPa8Qh44z0jd&X-Amz-Signature=4d702ecb1a3fcfd4e378719da393b9f15f93646237f213c82cb8c24b8322f5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
