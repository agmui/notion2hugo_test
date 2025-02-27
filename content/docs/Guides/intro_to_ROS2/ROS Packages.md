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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKH6Q7G%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD3qYYPTtpn0%2FqYVTQK%2Bb8bxQ7dTf1qXbKuXWpB0khdAgIgJ%2Fu3Ir9ENPBHn7cvG5a8BP1Gb74aat7yoDi0p3SQqbUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS9pezuwapnIkdpcyrcAxlwlf3J7q%2BI9659JO%2BdxRa3hdDDTULY9gix9KyaHObnt%2BJyVN50OhgoXG30OC4SulrEvywPqV0yOuhdQI7BjSBu6r97YvJiEyfrDKYi1KFglVWysGrIT0Tw3bFO52OosEpE1D2gqY4vUO6F8SmZ2sP9LpEZwS%2FqxqeaMHCmCL886k8%2F6NOb2otljIuPeVKbHeuvpcAxwVyl%2B%2BSUWTG14hFhv7n%2BEEzo3GSMDeRdihcwMD%2FER8CvdKoKrFx0%2BvYmssEHisRHoXsg5keQr7XGSbn6q8AQZ7FcKGYsF%2BXStREXFSS4eq4Xm7WmpnPHndzp7syhXidsnppi649Obpd3471IPTlMbzMJNZ4ebW%2B%2F2BIYQDqzBTGI3FlfKEQjuTFMeHBupUsquJQ2z8ApnqwLjY1osXavpTaXXEUUYl9O8gVgRh8UKKG8%2F6%2B2Wo76sLbY%2Fzsxcg%2FRgn9DP48%2FYYgT4xFq%2BCk9zyg0z4dF0QMzLLFFCPYLVyPNdJuaKVMJtNVKaNrvOxCWyhf5rmsVwQwkxTKJWe1EXyW6ZbJbkKq2vd8XDLZrEPY8gIO3VXrarbTfPA0uDDTz9r4RmELLwItYiktr1ymO0NJaeVldOD4CSc4kY2nMKloHpOzpMC43MLjZg74GOqUB3hPrt%2BsKq9C8SsG1SfSuXk9cFp8Ft7fyi7evDvghEujgz0Cn4AJ01hH%2F5v2rBkKnmHFACH9iW5BfShCVoAnfqnfpFbyI11uJfpTLwMGmKnP9b8MtO6ZG03o8Yo31AuMpSIGoZ%2F4eklRevNUbm8F9yPXcNPSUhUFY0Qs%2FIbxxu0jl69a7OlLRcohBSYTwQ3mIJNK4ln0U1%2Bf5FmgS9OaZxIceErjv&X-Amz-Signature=8da1bb5d834fbbc8d6e4d958112143cbb734c5ed64eed7738be2ad160d7bbc19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKH6Q7G%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD3qYYPTtpn0%2FqYVTQK%2Bb8bxQ7dTf1qXbKuXWpB0khdAgIgJ%2Fu3Ir9ENPBHn7cvG5a8BP1Gb74aat7yoDi0p3SQqbUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS9pezuwapnIkdpcyrcAxlwlf3J7q%2BI9659JO%2BdxRa3hdDDTULY9gix9KyaHObnt%2BJyVN50OhgoXG30OC4SulrEvywPqV0yOuhdQI7BjSBu6r97YvJiEyfrDKYi1KFglVWysGrIT0Tw3bFO52OosEpE1D2gqY4vUO6F8SmZ2sP9LpEZwS%2FqxqeaMHCmCL886k8%2F6NOb2otljIuPeVKbHeuvpcAxwVyl%2B%2BSUWTG14hFhv7n%2BEEzo3GSMDeRdihcwMD%2FER8CvdKoKrFx0%2BvYmssEHisRHoXsg5keQr7XGSbn6q8AQZ7FcKGYsF%2BXStREXFSS4eq4Xm7WmpnPHndzp7syhXidsnppi649Obpd3471IPTlMbzMJNZ4ebW%2B%2F2BIYQDqzBTGI3FlfKEQjuTFMeHBupUsquJQ2z8ApnqwLjY1osXavpTaXXEUUYl9O8gVgRh8UKKG8%2F6%2B2Wo76sLbY%2Fzsxcg%2FRgn9DP48%2FYYgT4xFq%2BCk9zyg0z4dF0QMzLLFFCPYLVyPNdJuaKVMJtNVKaNrvOxCWyhf5rmsVwQwkxTKJWe1EXyW6ZbJbkKq2vd8XDLZrEPY8gIO3VXrarbTfPA0uDDTz9r4RmELLwItYiktr1ymO0NJaeVldOD4CSc4kY2nMKloHpOzpMC43MLjZg74GOqUB3hPrt%2BsKq9C8SsG1SfSuXk9cFp8Ft7fyi7evDvghEujgz0Cn4AJ01hH%2F5v2rBkKnmHFACH9iW5BfShCVoAnfqnfpFbyI11uJfpTLwMGmKnP9b8MtO6ZG03o8Yo31AuMpSIGoZ%2F4eklRevNUbm8F9yPXcNPSUhUFY0Qs%2FIbxxu0jl69a7OlLRcohBSYTwQ3mIJNK4ln0U1%2Bf5FmgS9OaZxIceErjv&X-Amz-Signature=9c7a378cd66f397ec1e89dd35a37d465143cc5b66e2935d1614efe78498d6694&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKH6Q7G%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD3qYYPTtpn0%2FqYVTQK%2Bb8bxQ7dTf1qXbKuXWpB0khdAgIgJ%2Fu3Ir9ENPBHn7cvG5a8BP1Gb74aat7yoDi0p3SQqbUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS9pezuwapnIkdpcyrcAxlwlf3J7q%2BI9659JO%2BdxRa3hdDDTULY9gix9KyaHObnt%2BJyVN50OhgoXG30OC4SulrEvywPqV0yOuhdQI7BjSBu6r97YvJiEyfrDKYi1KFglVWysGrIT0Tw3bFO52OosEpE1D2gqY4vUO6F8SmZ2sP9LpEZwS%2FqxqeaMHCmCL886k8%2F6NOb2otljIuPeVKbHeuvpcAxwVyl%2B%2BSUWTG14hFhv7n%2BEEzo3GSMDeRdihcwMD%2FER8CvdKoKrFx0%2BvYmssEHisRHoXsg5keQr7XGSbn6q8AQZ7FcKGYsF%2BXStREXFSS4eq4Xm7WmpnPHndzp7syhXidsnppi649Obpd3471IPTlMbzMJNZ4ebW%2B%2F2BIYQDqzBTGI3FlfKEQjuTFMeHBupUsquJQ2z8ApnqwLjY1osXavpTaXXEUUYl9O8gVgRh8UKKG8%2F6%2B2Wo76sLbY%2Fzsxcg%2FRgn9DP48%2FYYgT4xFq%2BCk9zyg0z4dF0QMzLLFFCPYLVyPNdJuaKVMJtNVKaNrvOxCWyhf5rmsVwQwkxTKJWe1EXyW6ZbJbkKq2vd8XDLZrEPY8gIO3VXrarbTfPA0uDDTz9r4RmELLwItYiktr1ymO0NJaeVldOD4CSc4kY2nMKloHpOzpMC43MLjZg74GOqUB3hPrt%2BsKq9C8SsG1SfSuXk9cFp8Ft7fyi7evDvghEujgz0Cn4AJ01hH%2F5v2rBkKnmHFACH9iW5BfShCVoAnfqnfpFbyI11uJfpTLwMGmKnP9b8MtO6ZG03o8Yo31AuMpSIGoZ%2F4eklRevNUbm8F9yPXcNPSUhUFY0Qs%2FIbxxu0jl69a7OlLRcohBSYTwQ3mIJNK4ln0U1%2Bf5FmgS9OaZxIceErjv&X-Amz-Signature=b857a09eb32cd4a27a9825b88cfad378a125ee3163013f13630737bc453fe6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKH6Q7G%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD3qYYPTtpn0%2FqYVTQK%2Bb8bxQ7dTf1qXbKuXWpB0khdAgIgJ%2Fu3Ir9ENPBHn7cvG5a8BP1Gb74aat7yoDi0p3SQqbUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS9pezuwapnIkdpcyrcAxlwlf3J7q%2BI9659JO%2BdxRa3hdDDTULY9gix9KyaHObnt%2BJyVN50OhgoXG30OC4SulrEvywPqV0yOuhdQI7BjSBu6r97YvJiEyfrDKYi1KFglVWysGrIT0Tw3bFO52OosEpE1D2gqY4vUO6F8SmZ2sP9LpEZwS%2FqxqeaMHCmCL886k8%2F6NOb2otljIuPeVKbHeuvpcAxwVyl%2B%2BSUWTG14hFhv7n%2BEEzo3GSMDeRdihcwMD%2FER8CvdKoKrFx0%2BvYmssEHisRHoXsg5keQr7XGSbn6q8AQZ7FcKGYsF%2BXStREXFSS4eq4Xm7WmpnPHndzp7syhXidsnppi649Obpd3471IPTlMbzMJNZ4ebW%2B%2F2BIYQDqzBTGI3FlfKEQjuTFMeHBupUsquJQ2z8ApnqwLjY1osXavpTaXXEUUYl9O8gVgRh8UKKG8%2F6%2B2Wo76sLbY%2Fzsxcg%2FRgn9DP48%2FYYgT4xFq%2BCk9zyg0z4dF0QMzLLFFCPYLVyPNdJuaKVMJtNVKaNrvOxCWyhf5rmsVwQwkxTKJWe1EXyW6ZbJbkKq2vd8XDLZrEPY8gIO3VXrarbTfPA0uDDTz9r4RmELLwItYiktr1ymO0NJaeVldOD4CSc4kY2nMKloHpOzpMC43MLjZg74GOqUB3hPrt%2BsKq9C8SsG1SfSuXk9cFp8Ft7fyi7evDvghEujgz0Cn4AJ01hH%2F5v2rBkKnmHFACH9iW5BfShCVoAnfqnfpFbyI11uJfpTLwMGmKnP9b8MtO6ZG03o8Yo31AuMpSIGoZ%2F4eklRevNUbm8F9yPXcNPSUhUFY0Qs%2FIbxxu0jl69a7OlLRcohBSYTwQ3mIJNK4ln0U1%2Bf5FmgS9OaZxIceErjv&X-Amz-Signature=dcfe586b01b5f3f4a46bd7b9e2510c124a7b653f3fa4edee4cecd0c903883ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKH6Q7G%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD3qYYPTtpn0%2FqYVTQK%2Bb8bxQ7dTf1qXbKuXWpB0khdAgIgJ%2Fu3Ir9ENPBHn7cvG5a8BP1Gb74aat7yoDi0p3SQqbUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS9pezuwapnIkdpcyrcAxlwlf3J7q%2BI9659JO%2BdxRa3hdDDTULY9gix9KyaHObnt%2BJyVN50OhgoXG30OC4SulrEvywPqV0yOuhdQI7BjSBu6r97YvJiEyfrDKYi1KFglVWysGrIT0Tw3bFO52OosEpE1D2gqY4vUO6F8SmZ2sP9LpEZwS%2FqxqeaMHCmCL886k8%2F6NOb2otljIuPeVKbHeuvpcAxwVyl%2B%2BSUWTG14hFhv7n%2BEEzo3GSMDeRdihcwMD%2FER8CvdKoKrFx0%2BvYmssEHisRHoXsg5keQr7XGSbn6q8AQZ7FcKGYsF%2BXStREXFSS4eq4Xm7WmpnPHndzp7syhXidsnppi649Obpd3471IPTlMbzMJNZ4ebW%2B%2F2BIYQDqzBTGI3FlfKEQjuTFMeHBupUsquJQ2z8ApnqwLjY1osXavpTaXXEUUYl9O8gVgRh8UKKG8%2F6%2B2Wo76sLbY%2Fzsxcg%2FRgn9DP48%2FYYgT4xFq%2BCk9zyg0z4dF0QMzLLFFCPYLVyPNdJuaKVMJtNVKaNrvOxCWyhf5rmsVwQwkxTKJWe1EXyW6ZbJbkKq2vd8XDLZrEPY8gIO3VXrarbTfPA0uDDTz9r4RmELLwItYiktr1ymO0NJaeVldOD4CSc4kY2nMKloHpOzpMC43MLjZg74GOqUB3hPrt%2BsKq9C8SsG1SfSuXk9cFp8Ft7fyi7evDvghEujgz0Cn4AJ01hH%2F5v2rBkKnmHFACH9iW5BfShCVoAnfqnfpFbyI11uJfpTLwMGmKnP9b8MtO6ZG03o8Yo31AuMpSIGoZ%2F4eklRevNUbm8F9yPXcNPSUhUFY0Qs%2FIbxxu0jl69a7OlLRcohBSYTwQ3mIJNK4ln0U1%2Bf5FmgS9OaZxIceErjv&X-Amz-Signature=72c93b8c3a5477153894f84eeed0e5e18e176c6d8e875b3869c32ee79123e723&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKH6Q7G%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD3qYYPTtpn0%2FqYVTQK%2Bb8bxQ7dTf1qXbKuXWpB0khdAgIgJ%2Fu3Ir9ENPBHn7cvG5a8BP1Gb74aat7yoDi0p3SQqbUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS9pezuwapnIkdpcyrcAxlwlf3J7q%2BI9659JO%2BdxRa3hdDDTULY9gix9KyaHObnt%2BJyVN50OhgoXG30OC4SulrEvywPqV0yOuhdQI7BjSBu6r97YvJiEyfrDKYi1KFglVWysGrIT0Tw3bFO52OosEpE1D2gqY4vUO6F8SmZ2sP9LpEZwS%2FqxqeaMHCmCL886k8%2F6NOb2otljIuPeVKbHeuvpcAxwVyl%2B%2BSUWTG14hFhv7n%2BEEzo3GSMDeRdihcwMD%2FER8CvdKoKrFx0%2BvYmssEHisRHoXsg5keQr7XGSbn6q8AQZ7FcKGYsF%2BXStREXFSS4eq4Xm7WmpnPHndzp7syhXidsnppi649Obpd3471IPTlMbzMJNZ4ebW%2B%2F2BIYQDqzBTGI3FlfKEQjuTFMeHBupUsquJQ2z8ApnqwLjY1osXavpTaXXEUUYl9O8gVgRh8UKKG8%2F6%2B2Wo76sLbY%2Fzsxcg%2FRgn9DP48%2FYYgT4xFq%2BCk9zyg0z4dF0QMzLLFFCPYLVyPNdJuaKVMJtNVKaNrvOxCWyhf5rmsVwQwkxTKJWe1EXyW6ZbJbkKq2vd8XDLZrEPY8gIO3VXrarbTfPA0uDDTz9r4RmELLwItYiktr1ymO0NJaeVldOD4CSc4kY2nMKloHpOzpMC43MLjZg74GOqUB3hPrt%2BsKq9C8SsG1SfSuXk9cFp8Ft7fyi7evDvghEujgz0Cn4AJ01hH%2F5v2rBkKnmHFACH9iW5BfShCVoAnfqnfpFbyI11uJfpTLwMGmKnP9b8MtO6ZG03o8Yo31AuMpSIGoZ%2F4eklRevNUbm8F9yPXcNPSUhUFY0Qs%2FIbxxu0jl69a7OlLRcohBSYTwQ3mIJNK4ln0U1%2Bf5FmgS9OaZxIceErjv&X-Amz-Signature=41548f8b47aa00c24a7318026f4d1e0a1465426264f0c62e302094d8167c06be&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKH6Q7G%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD3qYYPTtpn0%2FqYVTQK%2Bb8bxQ7dTf1qXbKuXWpB0khdAgIgJ%2Fu3Ir9ENPBHn7cvG5a8BP1Gb74aat7yoDi0p3SQqbUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS9pezuwapnIkdpcyrcAxlwlf3J7q%2BI9659JO%2BdxRa3hdDDTULY9gix9KyaHObnt%2BJyVN50OhgoXG30OC4SulrEvywPqV0yOuhdQI7BjSBu6r97YvJiEyfrDKYi1KFglVWysGrIT0Tw3bFO52OosEpE1D2gqY4vUO6F8SmZ2sP9LpEZwS%2FqxqeaMHCmCL886k8%2F6NOb2otljIuPeVKbHeuvpcAxwVyl%2B%2BSUWTG14hFhv7n%2BEEzo3GSMDeRdihcwMD%2FER8CvdKoKrFx0%2BvYmssEHisRHoXsg5keQr7XGSbn6q8AQZ7FcKGYsF%2BXStREXFSS4eq4Xm7WmpnPHndzp7syhXidsnppi649Obpd3471IPTlMbzMJNZ4ebW%2B%2F2BIYQDqzBTGI3FlfKEQjuTFMeHBupUsquJQ2z8ApnqwLjY1osXavpTaXXEUUYl9O8gVgRh8UKKG8%2F6%2B2Wo76sLbY%2Fzsxcg%2FRgn9DP48%2FYYgT4xFq%2BCk9zyg0z4dF0QMzLLFFCPYLVyPNdJuaKVMJtNVKaNrvOxCWyhf5rmsVwQwkxTKJWe1EXyW6ZbJbkKq2vd8XDLZrEPY8gIO3VXrarbTfPA0uDDTz9r4RmELLwItYiktr1ymO0NJaeVldOD4CSc4kY2nMKloHpOzpMC43MLjZg74GOqUB3hPrt%2BsKq9C8SsG1SfSuXk9cFp8Ft7fyi7evDvghEujgz0Cn4AJ01hH%2F5v2rBkKnmHFACH9iW5BfShCVoAnfqnfpFbyI11uJfpTLwMGmKnP9b8MtO6ZG03o8Yo31AuMpSIGoZ%2F4eklRevNUbm8F9yPXcNPSUhUFY0Qs%2FIbxxu0jl69a7OlLRcohBSYTwQ3mIJNK4ln0U1%2Bf5FmgS9OaZxIceErjv&X-Amz-Signature=025fcb6b08c1844a4800b1f19818568fa37853fccfef424cbc5eeeeb54e1809c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
