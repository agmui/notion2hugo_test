---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNH3U4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICCUSIEmb1PdOVYzeLsBGH7gS3cX2Aov4E7Jah5wY4yIAiEA1j%2F6VmqdzmscT%2Bx9MmpSbRNuN9ZMxhxGuPII5rUcHxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHC5g0Ra3TE0E9avIyrcA3meLNaHhsqHznT8m6pw0pSwcY8WQvre7krkEC92pw61zyfRfXnMCK71C7PslQXbX%2BE2XqpnC1%2FtEpXOde5fBY4rQFpeJcUYxafhrP1dBXstE92gO%2FIkT11wXfob4zF1nvh7Jqd5WApUQm7ETaozEwplY0zF2wpNZMQxnh5fGVaI43w6DoC77zKfGpG%2Byn0%2Fzslk%2F%2BsPFPFE6BC6jDZRFHblGkmZ1cSlMgTsC7Oip4QnrJHDCQ1OQGY1waV8ri%2FVwTSRJCrWuWiKg%2F8Pv5wJAELSgzTTpK1uWqh3g1zjdn8ioRoug5XFx5I7%2FDHMGlEqt%2BtIRGiTRLLlZUtXAbbbB0%2FMKX7k%2BLuJxoRZySrGRqxeYdLHcHIqhOb8HwQoweTRIq%2BFRNLLwp05TQwrbOjSMgW6BZsRI%2BEKNYohthbOu%2BeUOzBiNUATDOM5AEMJyYKkonXCCQnsqTfP3FLyCWjd%2BFCgIFOwjXws9n%2BwHVSBP%2Fc6BsaU6RyDhZAph%2FapmUk%2BLlPMuXOzYLpv%2BHSmLJWL3dHYAvOqn8ZmP6StoQLb0LqGFWygggt9BS7Rsth6zn%2FztmfS9tbN%2B2jgOTl1Edl58I7WHzjpwnCRbbKURnRBXMuresBuzG6i0fqj2CvGMK21%2FcQGOqUBgIiy6Sov2yXbCI%2F6eq2PrjlL5PiIExHH0kZLm%2B5D6MGTlHDCuWdyrEG9y1yUJMQ6vvikCwH8r6%2BrQ6mdFbANmPXNPrZK%2FeRKg4TjgGTzOs9eU8yJgHjumgxpkkO%2FexpmlSZzIM728GZ5IFRJp08i1UtnoR3ysYnmirfvvvXkToYdRJPCpA0Hv795mudaaT0bjQ%2BCOSnIAR7MGoBS%2BDpgkLS410HE&X-Amz-Signature=81089b4192aa3a64ee37ae9d5d0be1ec1de8ab249c7a2f2a7ec69674c5052f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNH3U4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICCUSIEmb1PdOVYzeLsBGH7gS3cX2Aov4E7Jah5wY4yIAiEA1j%2F6VmqdzmscT%2Bx9MmpSbRNuN9ZMxhxGuPII5rUcHxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHC5g0Ra3TE0E9avIyrcA3meLNaHhsqHznT8m6pw0pSwcY8WQvre7krkEC92pw61zyfRfXnMCK71C7PslQXbX%2BE2XqpnC1%2FtEpXOde5fBY4rQFpeJcUYxafhrP1dBXstE92gO%2FIkT11wXfob4zF1nvh7Jqd5WApUQm7ETaozEwplY0zF2wpNZMQxnh5fGVaI43w6DoC77zKfGpG%2Byn0%2Fzslk%2F%2BsPFPFE6BC6jDZRFHblGkmZ1cSlMgTsC7Oip4QnrJHDCQ1OQGY1waV8ri%2FVwTSRJCrWuWiKg%2F8Pv5wJAELSgzTTpK1uWqh3g1zjdn8ioRoug5XFx5I7%2FDHMGlEqt%2BtIRGiTRLLlZUtXAbbbB0%2FMKX7k%2BLuJxoRZySrGRqxeYdLHcHIqhOb8HwQoweTRIq%2BFRNLLwp05TQwrbOjSMgW6BZsRI%2BEKNYohthbOu%2BeUOzBiNUATDOM5AEMJyYKkonXCCQnsqTfP3FLyCWjd%2BFCgIFOwjXws9n%2BwHVSBP%2Fc6BsaU6RyDhZAph%2FapmUk%2BLlPMuXOzYLpv%2BHSmLJWL3dHYAvOqn8ZmP6StoQLb0LqGFWygggt9BS7Rsth6zn%2FztmfS9tbN%2B2jgOTl1Edl58I7WHzjpwnCRbbKURnRBXMuresBuzG6i0fqj2CvGMK21%2FcQGOqUBgIiy6Sov2yXbCI%2F6eq2PrjlL5PiIExHH0kZLm%2B5D6MGTlHDCuWdyrEG9y1yUJMQ6vvikCwH8r6%2BrQ6mdFbANmPXNPrZK%2FeRKg4TjgGTzOs9eU8yJgHjumgxpkkO%2FexpmlSZzIM728GZ5IFRJp08i1UtnoR3ysYnmirfvvvXkToYdRJPCpA0Hv795mudaaT0bjQ%2BCOSnIAR7MGoBS%2BDpgkLS410HE&X-Amz-Signature=150460467d98ab8a829e480494bde74344bfbbdf8284eec5a89a446b1889eaac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNH3U4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICCUSIEmb1PdOVYzeLsBGH7gS3cX2Aov4E7Jah5wY4yIAiEA1j%2F6VmqdzmscT%2Bx9MmpSbRNuN9ZMxhxGuPII5rUcHxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHC5g0Ra3TE0E9avIyrcA3meLNaHhsqHznT8m6pw0pSwcY8WQvre7krkEC92pw61zyfRfXnMCK71C7PslQXbX%2BE2XqpnC1%2FtEpXOde5fBY4rQFpeJcUYxafhrP1dBXstE92gO%2FIkT11wXfob4zF1nvh7Jqd5WApUQm7ETaozEwplY0zF2wpNZMQxnh5fGVaI43w6DoC77zKfGpG%2Byn0%2Fzslk%2F%2BsPFPFE6BC6jDZRFHblGkmZ1cSlMgTsC7Oip4QnrJHDCQ1OQGY1waV8ri%2FVwTSRJCrWuWiKg%2F8Pv5wJAELSgzTTpK1uWqh3g1zjdn8ioRoug5XFx5I7%2FDHMGlEqt%2BtIRGiTRLLlZUtXAbbbB0%2FMKX7k%2BLuJxoRZySrGRqxeYdLHcHIqhOb8HwQoweTRIq%2BFRNLLwp05TQwrbOjSMgW6BZsRI%2BEKNYohthbOu%2BeUOzBiNUATDOM5AEMJyYKkonXCCQnsqTfP3FLyCWjd%2BFCgIFOwjXws9n%2BwHVSBP%2Fc6BsaU6RyDhZAph%2FapmUk%2BLlPMuXOzYLpv%2BHSmLJWL3dHYAvOqn8ZmP6StoQLb0LqGFWygggt9BS7Rsth6zn%2FztmfS9tbN%2B2jgOTl1Edl58I7WHzjpwnCRbbKURnRBXMuresBuzG6i0fqj2CvGMK21%2FcQGOqUBgIiy6Sov2yXbCI%2F6eq2PrjlL5PiIExHH0kZLm%2B5D6MGTlHDCuWdyrEG9y1yUJMQ6vvikCwH8r6%2BrQ6mdFbANmPXNPrZK%2FeRKg4TjgGTzOs9eU8yJgHjumgxpkkO%2FexpmlSZzIM728GZ5IFRJp08i1UtnoR3ysYnmirfvvvXkToYdRJPCpA0Hv795mudaaT0bjQ%2BCOSnIAR7MGoBS%2BDpgkLS410HE&X-Amz-Signature=011c1b0a15d4cd61099b76efc5c87335d209ab39deafc3ebab833a943bac94b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNH3U4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICCUSIEmb1PdOVYzeLsBGH7gS3cX2Aov4E7Jah5wY4yIAiEA1j%2F6VmqdzmscT%2Bx9MmpSbRNuN9ZMxhxGuPII5rUcHxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHC5g0Ra3TE0E9avIyrcA3meLNaHhsqHznT8m6pw0pSwcY8WQvre7krkEC92pw61zyfRfXnMCK71C7PslQXbX%2BE2XqpnC1%2FtEpXOde5fBY4rQFpeJcUYxafhrP1dBXstE92gO%2FIkT11wXfob4zF1nvh7Jqd5WApUQm7ETaozEwplY0zF2wpNZMQxnh5fGVaI43w6DoC77zKfGpG%2Byn0%2Fzslk%2F%2BsPFPFE6BC6jDZRFHblGkmZ1cSlMgTsC7Oip4QnrJHDCQ1OQGY1waV8ri%2FVwTSRJCrWuWiKg%2F8Pv5wJAELSgzTTpK1uWqh3g1zjdn8ioRoug5XFx5I7%2FDHMGlEqt%2BtIRGiTRLLlZUtXAbbbB0%2FMKX7k%2BLuJxoRZySrGRqxeYdLHcHIqhOb8HwQoweTRIq%2BFRNLLwp05TQwrbOjSMgW6BZsRI%2BEKNYohthbOu%2BeUOzBiNUATDOM5AEMJyYKkonXCCQnsqTfP3FLyCWjd%2BFCgIFOwjXws9n%2BwHVSBP%2Fc6BsaU6RyDhZAph%2FapmUk%2BLlPMuXOzYLpv%2BHSmLJWL3dHYAvOqn8ZmP6StoQLb0LqGFWygggt9BS7Rsth6zn%2FztmfS9tbN%2B2jgOTl1Edl58I7WHzjpwnCRbbKURnRBXMuresBuzG6i0fqj2CvGMK21%2FcQGOqUBgIiy6Sov2yXbCI%2F6eq2PrjlL5PiIExHH0kZLm%2B5D6MGTlHDCuWdyrEG9y1yUJMQ6vvikCwH8r6%2BrQ6mdFbANmPXNPrZK%2FeRKg4TjgGTzOs9eU8yJgHjumgxpkkO%2FexpmlSZzIM728GZ5IFRJp08i1UtnoR3ysYnmirfvvvXkToYdRJPCpA0Hv795mudaaT0bjQ%2BCOSnIAR7MGoBS%2BDpgkLS410HE&X-Amz-Signature=ed7c3c6abec3c0d61ac4acdcb8d7e655add14261f72cf465a032c17095596841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNH3U4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICCUSIEmb1PdOVYzeLsBGH7gS3cX2Aov4E7Jah5wY4yIAiEA1j%2F6VmqdzmscT%2Bx9MmpSbRNuN9ZMxhxGuPII5rUcHxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHC5g0Ra3TE0E9avIyrcA3meLNaHhsqHznT8m6pw0pSwcY8WQvre7krkEC92pw61zyfRfXnMCK71C7PslQXbX%2BE2XqpnC1%2FtEpXOde5fBY4rQFpeJcUYxafhrP1dBXstE92gO%2FIkT11wXfob4zF1nvh7Jqd5WApUQm7ETaozEwplY0zF2wpNZMQxnh5fGVaI43w6DoC77zKfGpG%2Byn0%2Fzslk%2F%2BsPFPFE6BC6jDZRFHblGkmZ1cSlMgTsC7Oip4QnrJHDCQ1OQGY1waV8ri%2FVwTSRJCrWuWiKg%2F8Pv5wJAELSgzTTpK1uWqh3g1zjdn8ioRoug5XFx5I7%2FDHMGlEqt%2BtIRGiTRLLlZUtXAbbbB0%2FMKX7k%2BLuJxoRZySrGRqxeYdLHcHIqhOb8HwQoweTRIq%2BFRNLLwp05TQwrbOjSMgW6BZsRI%2BEKNYohthbOu%2BeUOzBiNUATDOM5AEMJyYKkonXCCQnsqTfP3FLyCWjd%2BFCgIFOwjXws9n%2BwHVSBP%2Fc6BsaU6RyDhZAph%2FapmUk%2BLlPMuXOzYLpv%2BHSmLJWL3dHYAvOqn8ZmP6StoQLb0LqGFWygggt9BS7Rsth6zn%2FztmfS9tbN%2B2jgOTl1Edl58I7WHzjpwnCRbbKURnRBXMuresBuzG6i0fqj2CvGMK21%2FcQGOqUBgIiy6Sov2yXbCI%2F6eq2PrjlL5PiIExHH0kZLm%2B5D6MGTlHDCuWdyrEG9y1yUJMQ6vvikCwH8r6%2BrQ6mdFbANmPXNPrZK%2FeRKg4TjgGTzOs9eU8yJgHjumgxpkkO%2FexpmlSZzIM728GZ5IFRJp08i1UtnoR3ysYnmirfvvvXkToYdRJPCpA0Hv795mudaaT0bjQ%2BCOSnIAR7MGoBS%2BDpgkLS410HE&X-Amz-Signature=825d2187c6478b2b65b7fa9f23d550cd4499921397a78317196f95f7bbdf8176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNH3U4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICCUSIEmb1PdOVYzeLsBGH7gS3cX2Aov4E7Jah5wY4yIAiEA1j%2F6VmqdzmscT%2Bx9MmpSbRNuN9ZMxhxGuPII5rUcHxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHC5g0Ra3TE0E9avIyrcA3meLNaHhsqHznT8m6pw0pSwcY8WQvre7krkEC92pw61zyfRfXnMCK71C7PslQXbX%2BE2XqpnC1%2FtEpXOde5fBY4rQFpeJcUYxafhrP1dBXstE92gO%2FIkT11wXfob4zF1nvh7Jqd5WApUQm7ETaozEwplY0zF2wpNZMQxnh5fGVaI43w6DoC77zKfGpG%2Byn0%2Fzslk%2F%2BsPFPFE6BC6jDZRFHblGkmZ1cSlMgTsC7Oip4QnrJHDCQ1OQGY1waV8ri%2FVwTSRJCrWuWiKg%2F8Pv5wJAELSgzTTpK1uWqh3g1zjdn8ioRoug5XFx5I7%2FDHMGlEqt%2BtIRGiTRLLlZUtXAbbbB0%2FMKX7k%2BLuJxoRZySrGRqxeYdLHcHIqhOb8HwQoweTRIq%2BFRNLLwp05TQwrbOjSMgW6BZsRI%2BEKNYohthbOu%2BeUOzBiNUATDOM5AEMJyYKkonXCCQnsqTfP3FLyCWjd%2BFCgIFOwjXws9n%2BwHVSBP%2Fc6BsaU6RyDhZAph%2FapmUk%2BLlPMuXOzYLpv%2BHSmLJWL3dHYAvOqn8ZmP6StoQLb0LqGFWygggt9BS7Rsth6zn%2FztmfS9tbN%2B2jgOTl1Edl58I7WHzjpwnCRbbKURnRBXMuresBuzG6i0fqj2CvGMK21%2FcQGOqUBgIiy6Sov2yXbCI%2F6eq2PrjlL5PiIExHH0kZLm%2B5D6MGTlHDCuWdyrEG9y1yUJMQ6vvikCwH8r6%2BrQ6mdFbANmPXNPrZK%2FeRKg4TjgGTzOs9eU8yJgHjumgxpkkO%2FexpmlSZzIM728GZ5IFRJp08i1UtnoR3ysYnmirfvvvXkToYdRJPCpA0Hv795mudaaT0bjQ%2BCOSnIAR7MGoBS%2BDpgkLS410HE&X-Amz-Signature=c23993051abacc45b847c807d55a58db811729e620411d3b16ff43524d3d1b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNH3U4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICCUSIEmb1PdOVYzeLsBGH7gS3cX2Aov4E7Jah5wY4yIAiEA1j%2F6VmqdzmscT%2Bx9MmpSbRNuN9ZMxhxGuPII5rUcHxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHC5g0Ra3TE0E9avIyrcA3meLNaHhsqHznT8m6pw0pSwcY8WQvre7krkEC92pw61zyfRfXnMCK71C7PslQXbX%2BE2XqpnC1%2FtEpXOde5fBY4rQFpeJcUYxafhrP1dBXstE92gO%2FIkT11wXfob4zF1nvh7Jqd5WApUQm7ETaozEwplY0zF2wpNZMQxnh5fGVaI43w6DoC77zKfGpG%2Byn0%2Fzslk%2F%2BsPFPFE6BC6jDZRFHblGkmZ1cSlMgTsC7Oip4QnrJHDCQ1OQGY1waV8ri%2FVwTSRJCrWuWiKg%2F8Pv5wJAELSgzTTpK1uWqh3g1zjdn8ioRoug5XFx5I7%2FDHMGlEqt%2BtIRGiTRLLlZUtXAbbbB0%2FMKX7k%2BLuJxoRZySrGRqxeYdLHcHIqhOb8HwQoweTRIq%2BFRNLLwp05TQwrbOjSMgW6BZsRI%2BEKNYohthbOu%2BeUOzBiNUATDOM5AEMJyYKkonXCCQnsqTfP3FLyCWjd%2BFCgIFOwjXws9n%2BwHVSBP%2Fc6BsaU6RyDhZAph%2FapmUk%2BLlPMuXOzYLpv%2BHSmLJWL3dHYAvOqn8ZmP6StoQLb0LqGFWygggt9BS7Rsth6zn%2FztmfS9tbN%2B2jgOTl1Edl58I7WHzjpwnCRbbKURnRBXMuresBuzG6i0fqj2CvGMK21%2FcQGOqUBgIiy6Sov2yXbCI%2F6eq2PrjlL5PiIExHH0kZLm%2B5D6MGTlHDCuWdyrEG9y1yUJMQ6vvikCwH8r6%2BrQ6mdFbANmPXNPrZK%2FeRKg4TjgGTzOs9eU8yJgHjumgxpkkO%2FexpmlSZzIM728GZ5IFRJp08i1UtnoR3ysYnmirfvvvXkToYdRJPCpA0Hv795mudaaT0bjQ%2BCOSnIAR7MGoBS%2BDpgkLS410HE&X-Amz-Signature=e3c8bf45c929aac31cfb602f8feca4b8d96d781ff7b464eda339596015658a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
