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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBF5U57T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCblTh6%2FiOxMk8CaLppcoqCJW38aSJjGwI8UFOEyX5HPwIgcvtdp5DFU0DkeZlFFM%2FygTZ2O7VurlwFrAIo53Qwri8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN6Q3jB8G21QFMa2TircA8Bdw%2F%2F3t6lp2WHi8qQO3nMsj3STwGViZaiDJ2LqXtZKbfVqt1zkZiaGsXFZMTPFgdvY69D1Ir6AGCIjjcrPSNtP7nyWq7Hd18CpA98S3ImS7GZKcZTjYPuKYNZWk9FjCIscpCkxQQ%2B%2FrzKj0SNElN7IKLlTnP0b2qZi%2FNo3WKbHRJLJNp%2FvYpTg8xpuUSt%2Bc%2B7Y%2BtH1tDMCn2YGhoBg8x7gLmhG6vDaxggC2YY%2FivVT7fk1VztRChUTvxFPIysCa8iaLCzhEYVYInOpRPu8VWBnwylRZtV%2FjCGH3AKz7aWcinCUz3C%2Fm%2Ff5C%2FYmZK3cvVEI%2FSbBozaHuFFyCo3gc%2FV0c189fC4K3vNMCvHFh%2BHs9sThKQFVq20%2FLzIls5oip56kYewH0fQ90nErNEhhLaaaXIV%2FvKEn4NDDQs5n2P%2BVT6McF8QN9kUn6DrGXZiG5QzBqNRLGK8GtOc0LNL%2BSbTjnE9PcNRtjReLlVoP0S4e5ogQN4w21rUicJ%2BkpZI%2BSWN5JoVnWiSLt8jBFsFs%2FiPUSg0IXUKqvAhR2K0OvgskOPxHgoWLgqedOD1%2FxY%2B1nXZrS%2BzZs1XnN5Sce8F4%2F9AkOpGCJf2jsatK9OuUtBY0dHheFdD84aQAKMhAMI2r5sIGOqUBlp1p4fdKHs%2F%2FT8aq3CbpbiilXiT7WiTQV6WWx5Oqu9r7%2FzYQKjd7Z9zE10H3P2fY3NcQhw28aLCZaL0SGGJKxGFFP1ZxL18JBcVal06gZCKvQwTTVBpk9aF%2FPJCBabZ75PiWIxAqBAUaRIDi4UTHkWdeFw1tYwW86WwDiIKDJNhRO8oYW0HhmlXTbF6PnDKxxFTucT2aGGaTxXSbLoSO68Phwk6L&X-Amz-Signature=ff31e713f8ac4e24a85450435708f3f11c6b56029f7e185dd8343b7c2fc38430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBF5U57T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCblTh6%2FiOxMk8CaLppcoqCJW38aSJjGwI8UFOEyX5HPwIgcvtdp5DFU0DkeZlFFM%2FygTZ2O7VurlwFrAIo53Qwri8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN6Q3jB8G21QFMa2TircA8Bdw%2F%2F3t6lp2WHi8qQO3nMsj3STwGViZaiDJ2LqXtZKbfVqt1zkZiaGsXFZMTPFgdvY69D1Ir6AGCIjjcrPSNtP7nyWq7Hd18CpA98S3ImS7GZKcZTjYPuKYNZWk9FjCIscpCkxQQ%2B%2FrzKj0SNElN7IKLlTnP0b2qZi%2FNo3WKbHRJLJNp%2FvYpTg8xpuUSt%2Bc%2B7Y%2BtH1tDMCn2YGhoBg8x7gLmhG6vDaxggC2YY%2FivVT7fk1VztRChUTvxFPIysCa8iaLCzhEYVYInOpRPu8VWBnwylRZtV%2FjCGH3AKz7aWcinCUz3C%2Fm%2Ff5C%2FYmZK3cvVEI%2FSbBozaHuFFyCo3gc%2FV0c189fC4K3vNMCvHFh%2BHs9sThKQFVq20%2FLzIls5oip56kYewH0fQ90nErNEhhLaaaXIV%2FvKEn4NDDQs5n2P%2BVT6McF8QN9kUn6DrGXZiG5QzBqNRLGK8GtOc0LNL%2BSbTjnE9PcNRtjReLlVoP0S4e5ogQN4w21rUicJ%2BkpZI%2BSWN5JoVnWiSLt8jBFsFs%2FiPUSg0IXUKqvAhR2K0OvgskOPxHgoWLgqedOD1%2FxY%2B1nXZrS%2BzZs1XnN5Sce8F4%2F9AkOpGCJf2jsatK9OuUtBY0dHheFdD84aQAKMhAMI2r5sIGOqUBlp1p4fdKHs%2F%2FT8aq3CbpbiilXiT7WiTQV6WWx5Oqu9r7%2FzYQKjd7Z9zE10H3P2fY3NcQhw28aLCZaL0SGGJKxGFFP1ZxL18JBcVal06gZCKvQwTTVBpk9aF%2FPJCBabZ75PiWIxAqBAUaRIDi4UTHkWdeFw1tYwW86WwDiIKDJNhRO8oYW0HhmlXTbF6PnDKxxFTucT2aGGaTxXSbLoSO68Phwk6L&X-Amz-Signature=68566f0658abb3d309ca390041e2bd3d3247d938ae0a7dafd61fd209fab9ded4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBF5U57T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCblTh6%2FiOxMk8CaLppcoqCJW38aSJjGwI8UFOEyX5HPwIgcvtdp5DFU0DkeZlFFM%2FygTZ2O7VurlwFrAIo53Qwri8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN6Q3jB8G21QFMa2TircA8Bdw%2F%2F3t6lp2WHi8qQO3nMsj3STwGViZaiDJ2LqXtZKbfVqt1zkZiaGsXFZMTPFgdvY69D1Ir6AGCIjjcrPSNtP7nyWq7Hd18CpA98S3ImS7GZKcZTjYPuKYNZWk9FjCIscpCkxQQ%2B%2FrzKj0SNElN7IKLlTnP0b2qZi%2FNo3WKbHRJLJNp%2FvYpTg8xpuUSt%2Bc%2B7Y%2BtH1tDMCn2YGhoBg8x7gLmhG6vDaxggC2YY%2FivVT7fk1VztRChUTvxFPIysCa8iaLCzhEYVYInOpRPu8VWBnwylRZtV%2FjCGH3AKz7aWcinCUz3C%2Fm%2Ff5C%2FYmZK3cvVEI%2FSbBozaHuFFyCo3gc%2FV0c189fC4K3vNMCvHFh%2BHs9sThKQFVq20%2FLzIls5oip56kYewH0fQ90nErNEhhLaaaXIV%2FvKEn4NDDQs5n2P%2BVT6McF8QN9kUn6DrGXZiG5QzBqNRLGK8GtOc0LNL%2BSbTjnE9PcNRtjReLlVoP0S4e5ogQN4w21rUicJ%2BkpZI%2BSWN5JoVnWiSLt8jBFsFs%2FiPUSg0IXUKqvAhR2K0OvgskOPxHgoWLgqedOD1%2FxY%2B1nXZrS%2BzZs1XnN5Sce8F4%2F9AkOpGCJf2jsatK9OuUtBY0dHheFdD84aQAKMhAMI2r5sIGOqUBlp1p4fdKHs%2F%2FT8aq3CbpbiilXiT7WiTQV6WWx5Oqu9r7%2FzYQKjd7Z9zE10H3P2fY3NcQhw28aLCZaL0SGGJKxGFFP1ZxL18JBcVal06gZCKvQwTTVBpk9aF%2FPJCBabZ75PiWIxAqBAUaRIDi4UTHkWdeFw1tYwW86WwDiIKDJNhRO8oYW0HhmlXTbF6PnDKxxFTucT2aGGaTxXSbLoSO68Phwk6L&X-Amz-Signature=73117cbff860fae9cf80999d4a81c012d5e9916dcfeb8256446729b67a012b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBF5U57T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCblTh6%2FiOxMk8CaLppcoqCJW38aSJjGwI8UFOEyX5HPwIgcvtdp5DFU0DkeZlFFM%2FygTZ2O7VurlwFrAIo53Qwri8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN6Q3jB8G21QFMa2TircA8Bdw%2F%2F3t6lp2WHi8qQO3nMsj3STwGViZaiDJ2LqXtZKbfVqt1zkZiaGsXFZMTPFgdvY69D1Ir6AGCIjjcrPSNtP7nyWq7Hd18CpA98S3ImS7GZKcZTjYPuKYNZWk9FjCIscpCkxQQ%2B%2FrzKj0SNElN7IKLlTnP0b2qZi%2FNo3WKbHRJLJNp%2FvYpTg8xpuUSt%2Bc%2B7Y%2BtH1tDMCn2YGhoBg8x7gLmhG6vDaxggC2YY%2FivVT7fk1VztRChUTvxFPIysCa8iaLCzhEYVYInOpRPu8VWBnwylRZtV%2FjCGH3AKz7aWcinCUz3C%2Fm%2Ff5C%2FYmZK3cvVEI%2FSbBozaHuFFyCo3gc%2FV0c189fC4K3vNMCvHFh%2BHs9sThKQFVq20%2FLzIls5oip56kYewH0fQ90nErNEhhLaaaXIV%2FvKEn4NDDQs5n2P%2BVT6McF8QN9kUn6DrGXZiG5QzBqNRLGK8GtOc0LNL%2BSbTjnE9PcNRtjReLlVoP0S4e5ogQN4w21rUicJ%2BkpZI%2BSWN5JoVnWiSLt8jBFsFs%2FiPUSg0IXUKqvAhR2K0OvgskOPxHgoWLgqedOD1%2FxY%2B1nXZrS%2BzZs1XnN5Sce8F4%2F9AkOpGCJf2jsatK9OuUtBY0dHheFdD84aQAKMhAMI2r5sIGOqUBlp1p4fdKHs%2F%2FT8aq3CbpbiilXiT7WiTQV6WWx5Oqu9r7%2FzYQKjd7Z9zE10H3P2fY3NcQhw28aLCZaL0SGGJKxGFFP1ZxL18JBcVal06gZCKvQwTTVBpk9aF%2FPJCBabZ75PiWIxAqBAUaRIDi4UTHkWdeFw1tYwW86WwDiIKDJNhRO8oYW0HhmlXTbF6PnDKxxFTucT2aGGaTxXSbLoSO68Phwk6L&X-Amz-Signature=cc35e43c79c5ae46e42b769650fd827c9cb78e70a36db844b2821f5c7cac7c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBF5U57T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCblTh6%2FiOxMk8CaLppcoqCJW38aSJjGwI8UFOEyX5HPwIgcvtdp5DFU0DkeZlFFM%2FygTZ2O7VurlwFrAIo53Qwri8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN6Q3jB8G21QFMa2TircA8Bdw%2F%2F3t6lp2WHi8qQO3nMsj3STwGViZaiDJ2LqXtZKbfVqt1zkZiaGsXFZMTPFgdvY69D1Ir6AGCIjjcrPSNtP7nyWq7Hd18CpA98S3ImS7GZKcZTjYPuKYNZWk9FjCIscpCkxQQ%2B%2FrzKj0SNElN7IKLlTnP0b2qZi%2FNo3WKbHRJLJNp%2FvYpTg8xpuUSt%2Bc%2B7Y%2BtH1tDMCn2YGhoBg8x7gLmhG6vDaxggC2YY%2FivVT7fk1VztRChUTvxFPIysCa8iaLCzhEYVYInOpRPu8VWBnwylRZtV%2FjCGH3AKz7aWcinCUz3C%2Fm%2Ff5C%2FYmZK3cvVEI%2FSbBozaHuFFyCo3gc%2FV0c189fC4K3vNMCvHFh%2BHs9sThKQFVq20%2FLzIls5oip56kYewH0fQ90nErNEhhLaaaXIV%2FvKEn4NDDQs5n2P%2BVT6McF8QN9kUn6DrGXZiG5QzBqNRLGK8GtOc0LNL%2BSbTjnE9PcNRtjReLlVoP0S4e5ogQN4w21rUicJ%2BkpZI%2BSWN5JoVnWiSLt8jBFsFs%2FiPUSg0IXUKqvAhR2K0OvgskOPxHgoWLgqedOD1%2FxY%2B1nXZrS%2BzZs1XnN5Sce8F4%2F9AkOpGCJf2jsatK9OuUtBY0dHheFdD84aQAKMhAMI2r5sIGOqUBlp1p4fdKHs%2F%2FT8aq3CbpbiilXiT7WiTQV6WWx5Oqu9r7%2FzYQKjd7Z9zE10H3P2fY3NcQhw28aLCZaL0SGGJKxGFFP1ZxL18JBcVal06gZCKvQwTTVBpk9aF%2FPJCBabZ75PiWIxAqBAUaRIDi4UTHkWdeFw1tYwW86WwDiIKDJNhRO8oYW0HhmlXTbF6PnDKxxFTucT2aGGaTxXSbLoSO68Phwk6L&X-Amz-Signature=8c44e6178c1c59271107dd4662681b03821070ec91d5157756b084d3e9373f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBF5U57T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCblTh6%2FiOxMk8CaLppcoqCJW38aSJjGwI8UFOEyX5HPwIgcvtdp5DFU0DkeZlFFM%2FygTZ2O7VurlwFrAIo53Qwri8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN6Q3jB8G21QFMa2TircA8Bdw%2F%2F3t6lp2WHi8qQO3nMsj3STwGViZaiDJ2LqXtZKbfVqt1zkZiaGsXFZMTPFgdvY69D1Ir6AGCIjjcrPSNtP7nyWq7Hd18CpA98S3ImS7GZKcZTjYPuKYNZWk9FjCIscpCkxQQ%2B%2FrzKj0SNElN7IKLlTnP0b2qZi%2FNo3WKbHRJLJNp%2FvYpTg8xpuUSt%2Bc%2B7Y%2BtH1tDMCn2YGhoBg8x7gLmhG6vDaxggC2YY%2FivVT7fk1VztRChUTvxFPIysCa8iaLCzhEYVYInOpRPu8VWBnwylRZtV%2FjCGH3AKz7aWcinCUz3C%2Fm%2Ff5C%2FYmZK3cvVEI%2FSbBozaHuFFyCo3gc%2FV0c189fC4K3vNMCvHFh%2BHs9sThKQFVq20%2FLzIls5oip56kYewH0fQ90nErNEhhLaaaXIV%2FvKEn4NDDQs5n2P%2BVT6McF8QN9kUn6DrGXZiG5QzBqNRLGK8GtOc0LNL%2BSbTjnE9PcNRtjReLlVoP0S4e5ogQN4w21rUicJ%2BkpZI%2BSWN5JoVnWiSLt8jBFsFs%2FiPUSg0IXUKqvAhR2K0OvgskOPxHgoWLgqedOD1%2FxY%2B1nXZrS%2BzZs1XnN5Sce8F4%2F9AkOpGCJf2jsatK9OuUtBY0dHheFdD84aQAKMhAMI2r5sIGOqUBlp1p4fdKHs%2F%2FT8aq3CbpbiilXiT7WiTQV6WWx5Oqu9r7%2FzYQKjd7Z9zE10H3P2fY3NcQhw28aLCZaL0SGGJKxGFFP1ZxL18JBcVal06gZCKvQwTTVBpk9aF%2FPJCBabZ75PiWIxAqBAUaRIDi4UTHkWdeFw1tYwW86WwDiIKDJNhRO8oYW0HhmlXTbF6PnDKxxFTucT2aGGaTxXSbLoSO68Phwk6L&X-Amz-Signature=9283b25a0de8cb0880405ee057e3533d4b59c596bbbb1e4bcff68280c2db56f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBF5U57T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCblTh6%2FiOxMk8CaLppcoqCJW38aSJjGwI8UFOEyX5HPwIgcvtdp5DFU0DkeZlFFM%2FygTZ2O7VurlwFrAIo53Qwri8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN6Q3jB8G21QFMa2TircA8Bdw%2F%2F3t6lp2WHi8qQO3nMsj3STwGViZaiDJ2LqXtZKbfVqt1zkZiaGsXFZMTPFgdvY69D1Ir6AGCIjjcrPSNtP7nyWq7Hd18CpA98S3ImS7GZKcZTjYPuKYNZWk9FjCIscpCkxQQ%2B%2FrzKj0SNElN7IKLlTnP0b2qZi%2FNo3WKbHRJLJNp%2FvYpTg8xpuUSt%2Bc%2B7Y%2BtH1tDMCn2YGhoBg8x7gLmhG6vDaxggC2YY%2FivVT7fk1VztRChUTvxFPIysCa8iaLCzhEYVYInOpRPu8VWBnwylRZtV%2FjCGH3AKz7aWcinCUz3C%2Fm%2Ff5C%2FYmZK3cvVEI%2FSbBozaHuFFyCo3gc%2FV0c189fC4K3vNMCvHFh%2BHs9sThKQFVq20%2FLzIls5oip56kYewH0fQ90nErNEhhLaaaXIV%2FvKEn4NDDQs5n2P%2BVT6McF8QN9kUn6DrGXZiG5QzBqNRLGK8GtOc0LNL%2BSbTjnE9PcNRtjReLlVoP0S4e5ogQN4w21rUicJ%2BkpZI%2BSWN5JoVnWiSLt8jBFsFs%2FiPUSg0IXUKqvAhR2K0OvgskOPxHgoWLgqedOD1%2FxY%2B1nXZrS%2BzZs1XnN5Sce8F4%2F9AkOpGCJf2jsatK9OuUtBY0dHheFdD84aQAKMhAMI2r5sIGOqUBlp1p4fdKHs%2F%2FT8aq3CbpbiilXiT7WiTQV6WWx5Oqu9r7%2FzYQKjd7Z9zE10H3P2fY3NcQhw28aLCZaL0SGGJKxGFFP1ZxL18JBcVal06gZCKvQwTTVBpk9aF%2FPJCBabZ75PiWIxAqBAUaRIDi4UTHkWdeFw1tYwW86WwDiIKDJNhRO8oYW0HhmlXTbF6PnDKxxFTucT2aGGaTxXSbLoSO68Phwk6L&X-Amz-Signature=8960499c9cd16d3bfd03af2112e48852878bb801a4b3444f35e13b8fd9b88870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
