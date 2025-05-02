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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666N2W4Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIB%2BibpAxBFdE1OLDwjQoJq%2BrgHE9Re8SaofYlgKuM9xoAiBaVoQ7KnG5lgzXOsRWzAnXrkmEwnpOM0GVjgXIpPGZYCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyH%2F%2FMcCdSL%2FptSmoKtwDJ3JyqNRmj6VPfLf%2FDiaJr2qWogzzVkRflS%2BY860HCROGoWDWoydbCMg0YQIhmjNLHsgNUfeH2OfYF%2BMd1Apg4sid%2FTLlEDv7VBioWjnkQtIu%2BjtMQDlWpWkm%2BHMf6pN7avdWEoQBod%2FWl4JbUWtikG0RUYNkx1wjsCUeNDnj1JuSwg8HBmgvC7HbERAKpv8HfY2OYI6k8DYmabfdNg40h1GUZOgcz7q4vpuo57nem8Bnv4bgVnxvlwB6WWdFLYB58qgjEdcgqQW2l3a8Gu85jMA6jM7RbxcXoJNw8cP%2FK5xBZ%2Ft1bxDLYNuGbB1AoX8iSPnNC%2Ff0aNCfyVq5BAuxwm%2Bqnz8O3f7XCj7FMEIGLhoOT8GckvWiW4TFjwy6rLb8vSAzN6ld%2FEvdvIdiHDSOXC1aABa2TnRnU1qQUVbujmDgp6FYjORy6ublizcoQElqckieD4siFGm6uRCjJsw%2B4IV45RzmYTeBRpnUNBBMtUlv170JEtLO%2FBRosYIOZ6FXCbMW971SCgj6BHqWBlA1568HbruVw5yFcIiEBTjUpkWh3B8CAWhNiSZleisZlBrqwnI4W5Kekroef%2FvKJniau9otJhmuttnZrgj%2BXA1eAZmpElg6XjQMJSTCQyUw4NHQwAY6pgH%2BmvBBy1lrrGdXKNXjFZSEHLxZ3df9BxpDyVW8MkNnbm%2BGG9XNztwCFHQnEQYepw4vlI8Pw6ITad6IUZsOYerWiSFNCCsv1LmjUpMrZAUOEN1VWF3Ec%2BWADogLuqMmj4Ic8S6%2BXS5YmiO1d6xnEJ3lLtm3PTkj9g%2FwR5xMz0x%2B3wzShCdI%2BpuU5XcKrXUPo3Y7%2Bub9RBwb%2FmNiYFjolexEEGolq%2BO3&X-Amz-Signature=d84557cc7c4910da298b0f706abc81157342629cd53980ef03894ba9bf682ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666N2W4Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIB%2BibpAxBFdE1OLDwjQoJq%2BrgHE9Re8SaofYlgKuM9xoAiBaVoQ7KnG5lgzXOsRWzAnXrkmEwnpOM0GVjgXIpPGZYCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyH%2F%2FMcCdSL%2FptSmoKtwDJ3JyqNRmj6VPfLf%2FDiaJr2qWogzzVkRflS%2BY860HCROGoWDWoydbCMg0YQIhmjNLHsgNUfeH2OfYF%2BMd1Apg4sid%2FTLlEDv7VBioWjnkQtIu%2BjtMQDlWpWkm%2BHMf6pN7avdWEoQBod%2FWl4JbUWtikG0RUYNkx1wjsCUeNDnj1JuSwg8HBmgvC7HbERAKpv8HfY2OYI6k8DYmabfdNg40h1GUZOgcz7q4vpuo57nem8Bnv4bgVnxvlwB6WWdFLYB58qgjEdcgqQW2l3a8Gu85jMA6jM7RbxcXoJNw8cP%2FK5xBZ%2Ft1bxDLYNuGbB1AoX8iSPnNC%2Ff0aNCfyVq5BAuxwm%2Bqnz8O3f7XCj7FMEIGLhoOT8GckvWiW4TFjwy6rLb8vSAzN6ld%2FEvdvIdiHDSOXC1aABa2TnRnU1qQUVbujmDgp6FYjORy6ublizcoQElqckieD4siFGm6uRCjJsw%2B4IV45RzmYTeBRpnUNBBMtUlv170JEtLO%2FBRosYIOZ6FXCbMW971SCgj6BHqWBlA1568HbruVw5yFcIiEBTjUpkWh3B8CAWhNiSZleisZlBrqwnI4W5Kekroef%2FvKJniau9otJhmuttnZrgj%2BXA1eAZmpElg6XjQMJSTCQyUw4NHQwAY6pgH%2BmvBBy1lrrGdXKNXjFZSEHLxZ3df9BxpDyVW8MkNnbm%2BGG9XNztwCFHQnEQYepw4vlI8Pw6ITad6IUZsOYerWiSFNCCsv1LmjUpMrZAUOEN1VWF3Ec%2BWADogLuqMmj4Ic8S6%2BXS5YmiO1d6xnEJ3lLtm3PTkj9g%2FwR5xMz0x%2B3wzShCdI%2BpuU5XcKrXUPo3Y7%2Bub9RBwb%2FmNiYFjolexEEGolq%2BO3&X-Amz-Signature=0afe26073da680070982a51f0e8bf8d42abc2266f7b551b59d1eccaebdc3fd48&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666N2W4Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIB%2BibpAxBFdE1OLDwjQoJq%2BrgHE9Re8SaofYlgKuM9xoAiBaVoQ7KnG5lgzXOsRWzAnXrkmEwnpOM0GVjgXIpPGZYCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyH%2F%2FMcCdSL%2FptSmoKtwDJ3JyqNRmj6VPfLf%2FDiaJr2qWogzzVkRflS%2BY860HCROGoWDWoydbCMg0YQIhmjNLHsgNUfeH2OfYF%2BMd1Apg4sid%2FTLlEDv7VBioWjnkQtIu%2BjtMQDlWpWkm%2BHMf6pN7avdWEoQBod%2FWl4JbUWtikG0RUYNkx1wjsCUeNDnj1JuSwg8HBmgvC7HbERAKpv8HfY2OYI6k8DYmabfdNg40h1GUZOgcz7q4vpuo57nem8Bnv4bgVnxvlwB6WWdFLYB58qgjEdcgqQW2l3a8Gu85jMA6jM7RbxcXoJNw8cP%2FK5xBZ%2Ft1bxDLYNuGbB1AoX8iSPnNC%2Ff0aNCfyVq5BAuxwm%2Bqnz8O3f7XCj7FMEIGLhoOT8GckvWiW4TFjwy6rLb8vSAzN6ld%2FEvdvIdiHDSOXC1aABa2TnRnU1qQUVbujmDgp6FYjORy6ublizcoQElqckieD4siFGm6uRCjJsw%2B4IV45RzmYTeBRpnUNBBMtUlv170JEtLO%2FBRosYIOZ6FXCbMW971SCgj6BHqWBlA1568HbruVw5yFcIiEBTjUpkWh3B8CAWhNiSZleisZlBrqwnI4W5Kekroef%2FvKJniau9otJhmuttnZrgj%2BXA1eAZmpElg6XjQMJSTCQyUw4NHQwAY6pgH%2BmvBBy1lrrGdXKNXjFZSEHLxZ3df9BxpDyVW8MkNnbm%2BGG9XNztwCFHQnEQYepw4vlI8Pw6ITad6IUZsOYerWiSFNCCsv1LmjUpMrZAUOEN1VWF3Ec%2BWADogLuqMmj4Ic8S6%2BXS5YmiO1d6xnEJ3lLtm3PTkj9g%2FwR5xMz0x%2B3wzShCdI%2BpuU5XcKrXUPo3Y7%2Bub9RBwb%2FmNiYFjolexEEGolq%2BO3&X-Amz-Signature=55bdcfe2128156062a05ba28df269199075285b7ae6f402bfd01fa1e12cf631a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666N2W4Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIB%2BibpAxBFdE1OLDwjQoJq%2BrgHE9Re8SaofYlgKuM9xoAiBaVoQ7KnG5lgzXOsRWzAnXrkmEwnpOM0GVjgXIpPGZYCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyH%2F%2FMcCdSL%2FptSmoKtwDJ3JyqNRmj6VPfLf%2FDiaJr2qWogzzVkRflS%2BY860HCROGoWDWoydbCMg0YQIhmjNLHsgNUfeH2OfYF%2BMd1Apg4sid%2FTLlEDv7VBioWjnkQtIu%2BjtMQDlWpWkm%2BHMf6pN7avdWEoQBod%2FWl4JbUWtikG0RUYNkx1wjsCUeNDnj1JuSwg8HBmgvC7HbERAKpv8HfY2OYI6k8DYmabfdNg40h1GUZOgcz7q4vpuo57nem8Bnv4bgVnxvlwB6WWdFLYB58qgjEdcgqQW2l3a8Gu85jMA6jM7RbxcXoJNw8cP%2FK5xBZ%2Ft1bxDLYNuGbB1AoX8iSPnNC%2Ff0aNCfyVq5BAuxwm%2Bqnz8O3f7XCj7FMEIGLhoOT8GckvWiW4TFjwy6rLb8vSAzN6ld%2FEvdvIdiHDSOXC1aABa2TnRnU1qQUVbujmDgp6FYjORy6ublizcoQElqckieD4siFGm6uRCjJsw%2B4IV45RzmYTeBRpnUNBBMtUlv170JEtLO%2FBRosYIOZ6FXCbMW971SCgj6BHqWBlA1568HbruVw5yFcIiEBTjUpkWh3B8CAWhNiSZleisZlBrqwnI4W5Kekroef%2FvKJniau9otJhmuttnZrgj%2BXA1eAZmpElg6XjQMJSTCQyUw4NHQwAY6pgH%2BmvBBy1lrrGdXKNXjFZSEHLxZ3df9BxpDyVW8MkNnbm%2BGG9XNztwCFHQnEQYepw4vlI8Pw6ITad6IUZsOYerWiSFNCCsv1LmjUpMrZAUOEN1VWF3Ec%2BWADogLuqMmj4Ic8S6%2BXS5YmiO1d6xnEJ3lLtm3PTkj9g%2FwR5xMz0x%2B3wzShCdI%2BpuU5XcKrXUPo3Y7%2Bub9RBwb%2FmNiYFjolexEEGolq%2BO3&X-Amz-Signature=d4aecc8908e845c662d7e68119631ea47e6906ca1301c9f97b50e1f968b244ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666N2W4Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIB%2BibpAxBFdE1OLDwjQoJq%2BrgHE9Re8SaofYlgKuM9xoAiBaVoQ7KnG5lgzXOsRWzAnXrkmEwnpOM0GVjgXIpPGZYCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyH%2F%2FMcCdSL%2FptSmoKtwDJ3JyqNRmj6VPfLf%2FDiaJr2qWogzzVkRflS%2BY860HCROGoWDWoydbCMg0YQIhmjNLHsgNUfeH2OfYF%2BMd1Apg4sid%2FTLlEDv7VBioWjnkQtIu%2BjtMQDlWpWkm%2BHMf6pN7avdWEoQBod%2FWl4JbUWtikG0RUYNkx1wjsCUeNDnj1JuSwg8HBmgvC7HbERAKpv8HfY2OYI6k8DYmabfdNg40h1GUZOgcz7q4vpuo57nem8Bnv4bgVnxvlwB6WWdFLYB58qgjEdcgqQW2l3a8Gu85jMA6jM7RbxcXoJNw8cP%2FK5xBZ%2Ft1bxDLYNuGbB1AoX8iSPnNC%2Ff0aNCfyVq5BAuxwm%2Bqnz8O3f7XCj7FMEIGLhoOT8GckvWiW4TFjwy6rLb8vSAzN6ld%2FEvdvIdiHDSOXC1aABa2TnRnU1qQUVbujmDgp6FYjORy6ublizcoQElqckieD4siFGm6uRCjJsw%2B4IV45RzmYTeBRpnUNBBMtUlv170JEtLO%2FBRosYIOZ6FXCbMW971SCgj6BHqWBlA1568HbruVw5yFcIiEBTjUpkWh3B8CAWhNiSZleisZlBrqwnI4W5Kekroef%2FvKJniau9otJhmuttnZrgj%2BXA1eAZmpElg6XjQMJSTCQyUw4NHQwAY6pgH%2BmvBBy1lrrGdXKNXjFZSEHLxZ3df9BxpDyVW8MkNnbm%2BGG9XNztwCFHQnEQYepw4vlI8Pw6ITad6IUZsOYerWiSFNCCsv1LmjUpMrZAUOEN1VWF3Ec%2BWADogLuqMmj4Ic8S6%2BXS5YmiO1d6xnEJ3lLtm3PTkj9g%2FwR5xMz0x%2B3wzShCdI%2BpuU5XcKrXUPo3Y7%2Bub9RBwb%2FmNiYFjolexEEGolq%2BO3&X-Amz-Signature=525f82438641f0b4389c107ada655f2805eb1d84346ab3d10c9e11b3c55dec5a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666N2W4Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIB%2BibpAxBFdE1OLDwjQoJq%2BrgHE9Re8SaofYlgKuM9xoAiBaVoQ7KnG5lgzXOsRWzAnXrkmEwnpOM0GVjgXIpPGZYCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyH%2F%2FMcCdSL%2FptSmoKtwDJ3JyqNRmj6VPfLf%2FDiaJr2qWogzzVkRflS%2BY860HCROGoWDWoydbCMg0YQIhmjNLHsgNUfeH2OfYF%2BMd1Apg4sid%2FTLlEDv7VBioWjnkQtIu%2BjtMQDlWpWkm%2BHMf6pN7avdWEoQBod%2FWl4JbUWtikG0RUYNkx1wjsCUeNDnj1JuSwg8HBmgvC7HbERAKpv8HfY2OYI6k8DYmabfdNg40h1GUZOgcz7q4vpuo57nem8Bnv4bgVnxvlwB6WWdFLYB58qgjEdcgqQW2l3a8Gu85jMA6jM7RbxcXoJNw8cP%2FK5xBZ%2Ft1bxDLYNuGbB1AoX8iSPnNC%2Ff0aNCfyVq5BAuxwm%2Bqnz8O3f7XCj7FMEIGLhoOT8GckvWiW4TFjwy6rLb8vSAzN6ld%2FEvdvIdiHDSOXC1aABa2TnRnU1qQUVbujmDgp6FYjORy6ublizcoQElqckieD4siFGm6uRCjJsw%2B4IV45RzmYTeBRpnUNBBMtUlv170JEtLO%2FBRosYIOZ6FXCbMW971SCgj6BHqWBlA1568HbruVw5yFcIiEBTjUpkWh3B8CAWhNiSZleisZlBrqwnI4W5Kekroef%2FvKJniau9otJhmuttnZrgj%2BXA1eAZmpElg6XjQMJSTCQyUw4NHQwAY6pgH%2BmvBBy1lrrGdXKNXjFZSEHLxZ3df9BxpDyVW8MkNnbm%2BGG9XNztwCFHQnEQYepw4vlI8Pw6ITad6IUZsOYerWiSFNCCsv1LmjUpMrZAUOEN1VWF3Ec%2BWADogLuqMmj4Ic8S6%2BXS5YmiO1d6xnEJ3lLtm3PTkj9g%2FwR5xMz0x%2B3wzShCdI%2BpuU5XcKrXUPo3Y7%2Bub9RBwb%2FmNiYFjolexEEGolq%2BO3&X-Amz-Signature=d9b6e57624b289a43e74bfe62c3a2da21b7b550ecc55dd2a95184163c96e4c63&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666N2W4Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIB%2BibpAxBFdE1OLDwjQoJq%2BrgHE9Re8SaofYlgKuM9xoAiBaVoQ7KnG5lgzXOsRWzAnXrkmEwnpOM0GVjgXIpPGZYCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyH%2F%2FMcCdSL%2FptSmoKtwDJ3JyqNRmj6VPfLf%2FDiaJr2qWogzzVkRflS%2BY860HCROGoWDWoydbCMg0YQIhmjNLHsgNUfeH2OfYF%2BMd1Apg4sid%2FTLlEDv7VBioWjnkQtIu%2BjtMQDlWpWkm%2BHMf6pN7avdWEoQBod%2FWl4JbUWtikG0RUYNkx1wjsCUeNDnj1JuSwg8HBmgvC7HbERAKpv8HfY2OYI6k8DYmabfdNg40h1GUZOgcz7q4vpuo57nem8Bnv4bgVnxvlwB6WWdFLYB58qgjEdcgqQW2l3a8Gu85jMA6jM7RbxcXoJNw8cP%2FK5xBZ%2Ft1bxDLYNuGbB1AoX8iSPnNC%2Ff0aNCfyVq5BAuxwm%2Bqnz8O3f7XCj7FMEIGLhoOT8GckvWiW4TFjwy6rLb8vSAzN6ld%2FEvdvIdiHDSOXC1aABa2TnRnU1qQUVbujmDgp6FYjORy6ublizcoQElqckieD4siFGm6uRCjJsw%2B4IV45RzmYTeBRpnUNBBMtUlv170JEtLO%2FBRosYIOZ6FXCbMW971SCgj6BHqWBlA1568HbruVw5yFcIiEBTjUpkWh3B8CAWhNiSZleisZlBrqwnI4W5Kekroef%2FvKJniau9otJhmuttnZrgj%2BXA1eAZmpElg6XjQMJSTCQyUw4NHQwAY6pgH%2BmvBBy1lrrGdXKNXjFZSEHLxZ3df9BxpDyVW8MkNnbm%2BGG9XNztwCFHQnEQYepw4vlI8Pw6ITad6IUZsOYerWiSFNCCsv1LmjUpMrZAUOEN1VWF3Ec%2BWADogLuqMmj4Ic8S6%2BXS5YmiO1d6xnEJ3lLtm3PTkj9g%2FwR5xMz0x%2B3wzShCdI%2BpuU5XcKrXUPo3Y7%2Bub9RBwb%2FmNiYFjolexEEGolq%2BO3&X-Amz-Signature=638d94ec9049594fab39a6847d6628865030e6c40755e8848841d271ffca9295&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
