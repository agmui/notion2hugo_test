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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJXQOE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIC%2FqKgpsJoAXD%2FMTnr6PXvBEcqV%2Bc5mjD0V8ZsAE5zwoAiA%2Bp5imIgV1TL6P4WB7EeOxnvW2LEqeFvm10Ks93hjUsSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLnomqgLI4xN7DR9KtwDC3%2Bcsf%2F5d3LfdQ%2FE%2B0BKzPUHiYO9SbmraXN7yfVehz1LMmYuPjqPR3EC5tYAD38zHX%2BSXKYjj2bxLI59bwkrkCWTnmdLy9MxpgQzGBX4qNtdj79kOzVkseG3z3P1gabWIyWRxd28lo2piVcmMS8pUO6oqeXxUJR0qWp1gk%2BBJm%2B%2BsG%2B0OsHW8KYVqRmtSSwMMJSeDA1PmG8UCkWWqyBqy2RkSlW7ehzoeMezMcwWxrIeWKAoErYL9Zh3HBfV%2FaMzHn9%2FWVBOTFZM5jhDu%2BPIdc%2BZrfrwgOaM%2Bgft79xvN8aPwz%2FFx4%2Fz06sPlHWMjwjmoEH%2FAl4Qv7I%2B2rtx7wy6TH0U5z8RoJAGAx6NiqnKY9BIbGtq%2FxOmwySDV1pFqaNdfF%2F4uaVnT9vGb9IMS57Kac8pZ6yK3W%2FRP%2F5MwkgPcV96sm7%2FjLKIJA%2F3sdnYgd%2B2uH4LPSv1%2FbViSGosfe6c8pDg7qgQseGuUAjJ8kt4B8zXlDQviGNZUI29l9Clt%2F2Y6j9BS329Ag%2FW1S74BGsrNXHDfdkyT2pqYrtEkjWfhS6Bypqqce8fUgX%2FUG3NpM7QxhSUDXozsm8HajxxQf7kpxYxhmCbRlLs69A2g99KNhcgFjTjgPL9qniytEcwrO%2B2wQY6pgExgXuW03YeGTC%2Bi7C%2Bn9hX6B8LXNILepHeK4IFgceNZ5MtJe4ySXxNdfg7SCrBR1nMzIuSPa0wLBea7fQJUFL6nloJhHutXhCfj0f2Ar9lfmCJCyS4Bzx%2BCK%2B%2BpZm04ra0tg90tGVSx5%2FSRU%2BX2XNf%2FEplnsOcIjB14EIsgQLIq8Qhy2Tm3HArSgUoEuTFQPAAjldjBkFwRPFgfxIrOSFgpTTpbQ5a&X-Amz-Signature=4f179080dba54f2bb88dc00d756d59f85aa2ae8ea6cc6940a7393ca6765dcae2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJXQOE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIC%2FqKgpsJoAXD%2FMTnr6PXvBEcqV%2Bc5mjD0V8ZsAE5zwoAiA%2Bp5imIgV1TL6P4WB7EeOxnvW2LEqeFvm10Ks93hjUsSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLnomqgLI4xN7DR9KtwDC3%2Bcsf%2F5d3LfdQ%2FE%2B0BKzPUHiYO9SbmraXN7yfVehz1LMmYuPjqPR3EC5tYAD38zHX%2BSXKYjj2bxLI59bwkrkCWTnmdLy9MxpgQzGBX4qNtdj79kOzVkseG3z3P1gabWIyWRxd28lo2piVcmMS8pUO6oqeXxUJR0qWp1gk%2BBJm%2B%2BsG%2B0OsHW8KYVqRmtSSwMMJSeDA1PmG8UCkWWqyBqy2RkSlW7ehzoeMezMcwWxrIeWKAoErYL9Zh3HBfV%2FaMzHn9%2FWVBOTFZM5jhDu%2BPIdc%2BZrfrwgOaM%2Bgft79xvN8aPwz%2FFx4%2Fz06sPlHWMjwjmoEH%2FAl4Qv7I%2B2rtx7wy6TH0U5z8RoJAGAx6NiqnKY9BIbGtq%2FxOmwySDV1pFqaNdfF%2F4uaVnT9vGb9IMS57Kac8pZ6yK3W%2FRP%2F5MwkgPcV96sm7%2FjLKIJA%2F3sdnYgd%2B2uH4LPSv1%2FbViSGosfe6c8pDg7qgQseGuUAjJ8kt4B8zXlDQviGNZUI29l9Clt%2F2Y6j9BS329Ag%2FW1S74BGsrNXHDfdkyT2pqYrtEkjWfhS6Bypqqce8fUgX%2FUG3NpM7QxhSUDXozsm8HajxxQf7kpxYxhmCbRlLs69A2g99KNhcgFjTjgPL9qniytEcwrO%2B2wQY6pgExgXuW03YeGTC%2Bi7C%2Bn9hX6B8LXNILepHeK4IFgceNZ5MtJe4ySXxNdfg7SCrBR1nMzIuSPa0wLBea7fQJUFL6nloJhHutXhCfj0f2Ar9lfmCJCyS4Bzx%2BCK%2B%2BpZm04ra0tg90tGVSx5%2FSRU%2BX2XNf%2FEplnsOcIjB14EIsgQLIq8Qhy2Tm3HArSgUoEuTFQPAAjldjBkFwRPFgfxIrOSFgpTTpbQ5a&X-Amz-Signature=a0d430bfefcab6477f1e613cd9d52cd7795f7caa07a14ad68704449caed98b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJXQOE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIC%2FqKgpsJoAXD%2FMTnr6PXvBEcqV%2Bc5mjD0V8ZsAE5zwoAiA%2Bp5imIgV1TL6P4WB7EeOxnvW2LEqeFvm10Ks93hjUsSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLnomqgLI4xN7DR9KtwDC3%2Bcsf%2F5d3LfdQ%2FE%2B0BKzPUHiYO9SbmraXN7yfVehz1LMmYuPjqPR3EC5tYAD38zHX%2BSXKYjj2bxLI59bwkrkCWTnmdLy9MxpgQzGBX4qNtdj79kOzVkseG3z3P1gabWIyWRxd28lo2piVcmMS8pUO6oqeXxUJR0qWp1gk%2BBJm%2B%2BsG%2B0OsHW8KYVqRmtSSwMMJSeDA1PmG8UCkWWqyBqy2RkSlW7ehzoeMezMcwWxrIeWKAoErYL9Zh3HBfV%2FaMzHn9%2FWVBOTFZM5jhDu%2BPIdc%2BZrfrwgOaM%2Bgft79xvN8aPwz%2FFx4%2Fz06sPlHWMjwjmoEH%2FAl4Qv7I%2B2rtx7wy6TH0U5z8RoJAGAx6NiqnKY9BIbGtq%2FxOmwySDV1pFqaNdfF%2F4uaVnT9vGb9IMS57Kac8pZ6yK3W%2FRP%2F5MwkgPcV96sm7%2FjLKIJA%2F3sdnYgd%2B2uH4LPSv1%2FbViSGosfe6c8pDg7qgQseGuUAjJ8kt4B8zXlDQviGNZUI29l9Clt%2F2Y6j9BS329Ag%2FW1S74BGsrNXHDfdkyT2pqYrtEkjWfhS6Bypqqce8fUgX%2FUG3NpM7QxhSUDXozsm8HajxxQf7kpxYxhmCbRlLs69A2g99KNhcgFjTjgPL9qniytEcwrO%2B2wQY6pgExgXuW03YeGTC%2Bi7C%2Bn9hX6B8LXNILepHeK4IFgceNZ5MtJe4ySXxNdfg7SCrBR1nMzIuSPa0wLBea7fQJUFL6nloJhHutXhCfj0f2Ar9lfmCJCyS4Bzx%2BCK%2B%2BpZm04ra0tg90tGVSx5%2FSRU%2BX2XNf%2FEplnsOcIjB14EIsgQLIq8Qhy2Tm3HArSgUoEuTFQPAAjldjBkFwRPFgfxIrOSFgpTTpbQ5a&X-Amz-Signature=100596e2152be9f594e18d1670090c103ddf945e9844e5b2818afa3ce467c01d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJXQOE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIC%2FqKgpsJoAXD%2FMTnr6PXvBEcqV%2Bc5mjD0V8ZsAE5zwoAiA%2Bp5imIgV1TL6P4WB7EeOxnvW2LEqeFvm10Ks93hjUsSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLnomqgLI4xN7DR9KtwDC3%2Bcsf%2F5d3LfdQ%2FE%2B0BKzPUHiYO9SbmraXN7yfVehz1LMmYuPjqPR3EC5tYAD38zHX%2BSXKYjj2bxLI59bwkrkCWTnmdLy9MxpgQzGBX4qNtdj79kOzVkseG3z3P1gabWIyWRxd28lo2piVcmMS8pUO6oqeXxUJR0qWp1gk%2BBJm%2B%2BsG%2B0OsHW8KYVqRmtSSwMMJSeDA1PmG8UCkWWqyBqy2RkSlW7ehzoeMezMcwWxrIeWKAoErYL9Zh3HBfV%2FaMzHn9%2FWVBOTFZM5jhDu%2BPIdc%2BZrfrwgOaM%2Bgft79xvN8aPwz%2FFx4%2Fz06sPlHWMjwjmoEH%2FAl4Qv7I%2B2rtx7wy6TH0U5z8RoJAGAx6NiqnKY9BIbGtq%2FxOmwySDV1pFqaNdfF%2F4uaVnT9vGb9IMS57Kac8pZ6yK3W%2FRP%2F5MwkgPcV96sm7%2FjLKIJA%2F3sdnYgd%2B2uH4LPSv1%2FbViSGosfe6c8pDg7qgQseGuUAjJ8kt4B8zXlDQviGNZUI29l9Clt%2F2Y6j9BS329Ag%2FW1S74BGsrNXHDfdkyT2pqYrtEkjWfhS6Bypqqce8fUgX%2FUG3NpM7QxhSUDXozsm8HajxxQf7kpxYxhmCbRlLs69A2g99KNhcgFjTjgPL9qniytEcwrO%2B2wQY6pgExgXuW03YeGTC%2Bi7C%2Bn9hX6B8LXNILepHeK4IFgceNZ5MtJe4ySXxNdfg7SCrBR1nMzIuSPa0wLBea7fQJUFL6nloJhHutXhCfj0f2Ar9lfmCJCyS4Bzx%2BCK%2B%2BpZm04ra0tg90tGVSx5%2FSRU%2BX2XNf%2FEplnsOcIjB14EIsgQLIq8Qhy2Tm3HArSgUoEuTFQPAAjldjBkFwRPFgfxIrOSFgpTTpbQ5a&X-Amz-Signature=17dfca86ad5d732d9d3feeca3e238684e594a47f6fbcefdfa278a38223205bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJXQOE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIC%2FqKgpsJoAXD%2FMTnr6PXvBEcqV%2Bc5mjD0V8ZsAE5zwoAiA%2Bp5imIgV1TL6P4WB7EeOxnvW2LEqeFvm10Ks93hjUsSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLnomqgLI4xN7DR9KtwDC3%2Bcsf%2F5d3LfdQ%2FE%2B0BKzPUHiYO9SbmraXN7yfVehz1LMmYuPjqPR3EC5tYAD38zHX%2BSXKYjj2bxLI59bwkrkCWTnmdLy9MxpgQzGBX4qNtdj79kOzVkseG3z3P1gabWIyWRxd28lo2piVcmMS8pUO6oqeXxUJR0qWp1gk%2BBJm%2B%2BsG%2B0OsHW8KYVqRmtSSwMMJSeDA1PmG8UCkWWqyBqy2RkSlW7ehzoeMezMcwWxrIeWKAoErYL9Zh3HBfV%2FaMzHn9%2FWVBOTFZM5jhDu%2BPIdc%2BZrfrwgOaM%2Bgft79xvN8aPwz%2FFx4%2Fz06sPlHWMjwjmoEH%2FAl4Qv7I%2B2rtx7wy6TH0U5z8RoJAGAx6NiqnKY9BIbGtq%2FxOmwySDV1pFqaNdfF%2F4uaVnT9vGb9IMS57Kac8pZ6yK3W%2FRP%2F5MwkgPcV96sm7%2FjLKIJA%2F3sdnYgd%2B2uH4LPSv1%2FbViSGosfe6c8pDg7qgQseGuUAjJ8kt4B8zXlDQviGNZUI29l9Clt%2F2Y6j9BS329Ag%2FW1S74BGsrNXHDfdkyT2pqYrtEkjWfhS6Bypqqce8fUgX%2FUG3NpM7QxhSUDXozsm8HajxxQf7kpxYxhmCbRlLs69A2g99KNhcgFjTjgPL9qniytEcwrO%2B2wQY6pgExgXuW03YeGTC%2Bi7C%2Bn9hX6B8LXNILepHeK4IFgceNZ5MtJe4ySXxNdfg7SCrBR1nMzIuSPa0wLBea7fQJUFL6nloJhHutXhCfj0f2Ar9lfmCJCyS4Bzx%2BCK%2B%2BpZm04ra0tg90tGVSx5%2FSRU%2BX2XNf%2FEplnsOcIjB14EIsgQLIq8Qhy2Tm3HArSgUoEuTFQPAAjldjBkFwRPFgfxIrOSFgpTTpbQ5a&X-Amz-Signature=09bbe2376530d14afe84de2d300ccf3ae5a999cef94ecd6bf216c549b7ce265e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJXQOE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIC%2FqKgpsJoAXD%2FMTnr6PXvBEcqV%2Bc5mjD0V8ZsAE5zwoAiA%2Bp5imIgV1TL6P4WB7EeOxnvW2LEqeFvm10Ks93hjUsSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLnomqgLI4xN7DR9KtwDC3%2Bcsf%2F5d3LfdQ%2FE%2B0BKzPUHiYO9SbmraXN7yfVehz1LMmYuPjqPR3EC5tYAD38zHX%2BSXKYjj2bxLI59bwkrkCWTnmdLy9MxpgQzGBX4qNtdj79kOzVkseG3z3P1gabWIyWRxd28lo2piVcmMS8pUO6oqeXxUJR0qWp1gk%2BBJm%2B%2BsG%2B0OsHW8KYVqRmtSSwMMJSeDA1PmG8UCkWWqyBqy2RkSlW7ehzoeMezMcwWxrIeWKAoErYL9Zh3HBfV%2FaMzHn9%2FWVBOTFZM5jhDu%2BPIdc%2BZrfrwgOaM%2Bgft79xvN8aPwz%2FFx4%2Fz06sPlHWMjwjmoEH%2FAl4Qv7I%2B2rtx7wy6TH0U5z8RoJAGAx6NiqnKY9BIbGtq%2FxOmwySDV1pFqaNdfF%2F4uaVnT9vGb9IMS57Kac8pZ6yK3W%2FRP%2F5MwkgPcV96sm7%2FjLKIJA%2F3sdnYgd%2B2uH4LPSv1%2FbViSGosfe6c8pDg7qgQseGuUAjJ8kt4B8zXlDQviGNZUI29l9Clt%2F2Y6j9BS329Ag%2FW1S74BGsrNXHDfdkyT2pqYrtEkjWfhS6Bypqqce8fUgX%2FUG3NpM7QxhSUDXozsm8HajxxQf7kpxYxhmCbRlLs69A2g99KNhcgFjTjgPL9qniytEcwrO%2B2wQY6pgExgXuW03YeGTC%2Bi7C%2Bn9hX6B8LXNILepHeK4IFgceNZ5MtJe4ySXxNdfg7SCrBR1nMzIuSPa0wLBea7fQJUFL6nloJhHutXhCfj0f2Ar9lfmCJCyS4Bzx%2BCK%2B%2BpZm04ra0tg90tGVSx5%2FSRU%2BX2XNf%2FEplnsOcIjB14EIsgQLIq8Qhy2Tm3HArSgUoEuTFQPAAjldjBkFwRPFgfxIrOSFgpTTpbQ5a&X-Amz-Signature=ef825fefee27d070e507854665870153b0170c2c0cd2dba46f21ec31f3490ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJXQOE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIC%2FqKgpsJoAXD%2FMTnr6PXvBEcqV%2Bc5mjD0V8ZsAE5zwoAiA%2Bp5imIgV1TL6P4WB7EeOxnvW2LEqeFvm10Ks93hjUsSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLnomqgLI4xN7DR9KtwDC3%2Bcsf%2F5d3LfdQ%2FE%2B0BKzPUHiYO9SbmraXN7yfVehz1LMmYuPjqPR3EC5tYAD38zHX%2BSXKYjj2bxLI59bwkrkCWTnmdLy9MxpgQzGBX4qNtdj79kOzVkseG3z3P1gabWIyWRxd28lo2piVcmMS8pUO6oqeXxUJR0qWp1gk%2BBJm%2B%2BsG%2B0OsHW8KYVqRmtSSwMMJSeDA1PmG8UCkWWqyBqy2RkSlW7ehzoeMezMcwWxrIeWKAoErYL9Zh3HBfV%2FaMzHn9%2FWVBOTFZM5jhDu%2BPIdc%2BZrfrwgOaM%2Bgft79xvN8aPwz%2FFx4%2Fz06sPlHWMjwjmoEH%2FAl4Qv7I%2B2rtx7wy6TH0U5z8RoJAGAx6NiqnKY9BIbGtq%2FxOmwySDV1pFqaNdfF%2F4uaVnT9vGb9IMS57Kac8pZ6yK3W%2FRP%2F5MwkgPcV96sm7%2FjLKIJA%2F3sdnYgd%2B2uH4LPSv1%2FbViSGosfe6c8pDg7qgQseGuUAjJ8kt4B8zXlDQviGNZUI29l9Clt%2F2Y6j9BS329Ag%2FW1S74BGsrNXHDfdkyT2pqYrtEkjWfhS6Bypqqce8fUgX%2FUG3NpM7QxhSUDXozsm8HajxxQf7kpxYxhmCbRlLs69A2g99KNhcgFjTjgPL9qniytEcwrO%2B2wQY6pgExgXuW03YeGTC%2Bi7C%2Bn9hX6B8LXNILepHeK4IFgceNZ5MtJe4ySXxNdfg7SCrBR1nMzIuSPa0wLBea7fQJUFL6nloJhHutXhCfj0f2Ar9lfmCJCyS4Bzx%2BCK%2B%2BpZm04ra0tg90tGVSx5%2FSRU%2BX2XNf%2FEplnsOcIjB14EIsgQLIq8Qhy2Tm3HArSgUoEuTFQPAAjldjBkFwRPFgfxIrOSFgpTTpbQ5a&X-Amz-Signature=04a1b1473e54a47d89cd9658b97abd4dd657834da4e3ae4a3142f9c9bd031a69&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
