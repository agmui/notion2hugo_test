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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMGGV6G%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC1JEJFGs7Rde5hWW2c9TUKYLZvwGGHHnIcpkH%2B0Kp%2F4AIgOJ7LUUBTz8z3X2tdhbaRkLVXej8eHqJrg9iBYaakTkoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDSlfXmpOZFG3a0bBircA6VZXGEpZKUAQ%2FNQcA2Au%2BQ2eaDURmzMqSl34NmE1WELeFLMyY2m%2BVwm2KsBD6WA%2BJMsWoX%2BZEo9fE4RLUcni%2Fysg0f%2BP4R4eU9ewPlILFUW2QXpQxHeku%2F6JQKfMh%2Bwxwlajs%2F7YzjhnCXe6%2FaM4zKOXX6eocLRu0eQWxafxaqqXEOEua0%2BGj1wY54N8tVryf%2FRbd1R2WeP5HlyAhriV4Iv6Mg0W2Kjp2%2F7Mdh2zsVOqbir12JYQ086%2BbUlIUHVMCu%2Fg7ws4sTfcC1i%2BUrwP5gEJc8KHCrktIbxiNxfe0hK5TUoyZ7Zkdz86VcDHJNLubZ0dZz0N8fl7WNTW3rUIl2JTJxx9DXy%2BpA7z%2Bl1EFBjwMkRIWaSPsPowxbkzhXETcrb5RGO7fbO0U7P3lqLHhMRlIj6YMajqWJxo%2BLY1QWlv2fKjZj%2F49hngqxxF8VG1Y%2BlkqBAJSK5PcAZXNnKjkP9N43UQ4Gy78EdMdpZGiR3hEkmreWXOPZbwgSqBjeYYN7ePSMCQXLrqS2MIkeO%2BFnVCOJCNaBFaiSvP1I6fdIYa%2FHki6A5d7OInAWqzKW7cKjwx2y1P1bdEiOHFouDFlfaenNHmUgeLhP3oVFJFAIk3%2FPhuyJMkZLQp%2BmXMLnj%2Br0GOqUBXq%2BhslezrGiT0epnMMofXIyGjcNi58y1fDb%2Bvf7CVP95dkePCVzJ%2BacTUiXsCjc1KiKB%2F3zltAH5qs7FhODDuTQyB5fej0p2tNmDV9qw3CA6lOgrwnJyHS%2FUqLhmAk%2B6%2FBw13b8n5jC5sjijTa3OLMRqVXpuLR84xoqNxMXNOVz2eLcO1srLuNw8q%2B1BVJ84IIBYlfTI4v0Lt7yDEsjkF1tzGVS5&X-Amz-Signature=ee97518ce69f023219e562c0929ec6e31132ff949f47c91fd2bd1cae0103dd8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMGGV6G%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC1JEJFGs7Rde5hWW2c9TUKYLZvwGGHHnIcpkH%2B0Kp%2F4AIgOJ7LUUBTz8z3X2tdhbaRkLVXej8eHqJrg9iBYaakTkoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDSlfXmpOZFG3a0bBircA6VZXGEpZKUAQ%2FNQcA2Au%2BQ2eaDURmzMqSl34NmE1WELeFLMyY2m%2BVwm2KsBD6WA%2BJMsWoX%2BZEo9fE4RLUcni%2Fysg0f%2BP4R4eU9ewPlILFUW2QXpQxHeku%2F6JQKfMh%2Bwxwlajs%2F7YzjhnCXe6%2FaM4zKOXX6eocLRu0eQWxafxaqqXEOEua0%2BGj1wY54N8tVryf%2FRbd1R2WeP5HlyAhriV4Iv6Mg0W2Kjp2%2F7Mdh2zsVOqbir12JYQ086%2BbUlIUHVMCu%2Fg7ws4sTfcC1i%2BUrwP5gEJc8KHCrktIbxiNxfe0hK5TUoyZ7Zkdz86VcDHJNLubZ0dZz0N8fl7WNTW3rUIl2JTJxx9DXy%2BpA7z%2Bl1EFBjwMkRIWaSPsPowxbkzhXETcrb5RGO7fbO0U7P3lqLHhMRlIj6YMajqWJxo%2BLY1QWlv2fKjZj%2F49hngqxxF8VG1Y%2BlkqBAJSK5PcAZXNnKjkP9N43UQ4Gy78EdMdpZGiR3hEkmreWXOPZbwgSqBjeYYN7ePSMCQXLrqS2MIkeO%2BFnVCOJCNaBFaiSvP1I6fdIYa%2FHki6A5d7OInAWqzKW7cKjwx2y1P1bdEiOHFouDFlfaenNHmUgeLhP3oVFJFAIk3%2FPhuyJMkZLQp%2BmXMLnj%2Br0GOqUBXq%2BhslezrGiT0epnMMofXIyGjcNi58y1fDb%2Bvf7CVP95dkePCVzJ%2BacTUiXsCjc1KiKB%2F3zltAH5qs7FhODDuTQyB5fej0p2tNmDV9qw3CA6lOgrwnJyHS%2FUqLhmAk%2B6%2FBw13b8n5jC5sjijTa3OLMRqVXpuLR84xoqNxMXNOVz2eLcO1srLuNw8q%2B1BVJ84IIBYlfTI4v0Lt7yDEsjkF1tzGVS5&X-Amz-Signature=505aa01eb01d9d352280cabde993e8682b63ea15af8e6aab9e43208797c98d75&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMGGV6G%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC1JEJFGs7Rde5hWW2c9TUKYLZvwGGHHnIcpkH%2B0Kp%2F4AIgOJ7LUUBTz8z3X2tdhbaRkLVXej8eHqJrg9iBYaakTkoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDSlfXmpOZFG3a0bBircA6VZXGEpZKUAQ%2FNQcA2Au%2BQ2eaDURmzMqSl34NmE1WELeFLMyY2m%2BVwm2KsBD6WA%2BJMsWoX%2BZEo9fE4RLUcni%2Fysg0f%2BP4R4eU9ewPlILFUW2QXpQxHeku%2F6JQKfMh%2Bwxwlajs%2F7YzjhnCXe6%2FaM4zKOXX6eocLRu0eQWxafxaqqXEOEua0%2BGj1wY54N8tVryf%2FRbd1R2WeP5HlyAhriV4Iv6Mg0W2Kjp2%2F7Mdh2zsVOqbir12JYQ086%2BbUlIUHVMCu%2Fg7ws4sTfcC1i%2BUrwP5gEJc8KHCrktIbxiNxfe0hK5TUoyZ7Zkdz86VcDHJNLubZ0dZz0N8fl7WNTW3rUIl2JTJxx9DXy%2BpA7z%2Bl1EFBjwMkRIWaSPsPowxbkzhXETcrb5RGO7fbO0U7P3lqLHhMRlIj6YMajqWJxo%2BLY1QWlv2fKjZj%2F49hngqxxF8VG1Y%2BlkqBAJSK5PcAZXNnKjkP9N43UQ4Gy78EdMdpZGiR3hEkmreWXOPZbwgSqBjeYYN7ePSMCQXLrqS2MIkeO%2BFnVCOJCNaBFaiSvP1I6fdIYa%2FHki6A5d7OInAWqzKW7cKjwx2y1P1bdEiOHFouDFlfaenNHmUgeLhP3oVFJFAIk3%2FPhuyJMkZLQp%2BmXMLnj%2Br0GOqUBXq%2BhslezrGiT0epnMMofXIyGjcNi58y1fDb%2Bvf7CVP95dkePCVzJ%2BacTUiXsCjc1KiKB%2F3zltAH5qs7FhODDuTQyB5fej0p2tNmDV9qw3CA6lOgrwnJyHS%2FUqLhmAk%2B6%2FBw13b8n5jC5sjijTa3OLMRqVXpuLR84xoqNxMXNOVz2eLcO1srLuNw8q%2B1BVJ84IIBYlfTI4v0Lt7yDEsjkF1tzGVS5&X-Amz-Signature=c7f18aa5854991ce16c7898f9960b8fe806db1f73f1b6aa4e5a2a564ecd58e16&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMGGV6G%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC1JEJFGs7Rde5hWW2c9TUKYLZvwGGHHnIcpkH%2B0Kp%2F4AIgOJ7LUUBTz8z3X2tdhbaRkLVXej8eHqJrg9iBYaakTkoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDSlfXmpOZFG3a0bBircA6VZXGEpZKUAQ%2FNQcA2Au%2BQ2eaDURmzMqSl34NmE1WELeFLMyY2m%2BVwm2KsBD6WA%2BJMsWoX%2BZEo9fE4RLUcni%2Fysg0f%2BP4R4eU9ewPlILFUW2QXpQxHeku%2F6JQKfMh%2Bwxwlajs%2F7YzjhnCXe6%2FaM4zKOXX6eocLRu0eQWxafxaqqXEOEua0%2BGj1wY54N8tVryf%2FRbd1R2WeP5HlyAhriV4Iv6Mg0W2Kjp2%2F7Mdh2zsVOqbir12JYQ086%2BbUlIUHVMCu%2Fg7ws4sTfcC1i%2BUrwP5gEJc8KHCrktIbxiNxfe0hK5TUoyZ7Zkdz86VcDHJNLubZ0dZz0N8fl7WNTW3rUIl2JTJxx9DXy%2BpA7z%2Bl1EFBjwMkRIWaSPsPowxbkzhXETcrb5RGO7fbO0U7P3lqLHhMRlIj6YMajqWJxo%2BLY1QWlv2fKjZj%2F49hngqxxF8VG1Y%2BlkqBAJSK5PcAZXNnKjkP9N43UQ4Gy78EdMdpZGiR3hEkmreWXOPZbwgSqBjeYYN7ePSMCQXLrqS2MIkeO%2BFnVCOJCNaBFaiSvP1I6fdIYa%2FHki6A5d7OInAWqzKW7cKjwx2y1P1bdEiOHFouDFlfaenNHmUgeLhP3oVFJFAIk3%2FPhuyJMkZLQp%2BmXMLnj%2Br0GOqUBXq%2BhslezrGiT0epnMMofXIyGjcNi58y1fDb%2Bvf7CVP95dkePCVzJ%2BacTUiXsCjc1KiKB%2F3zltAH5qs7FhODDuTQyB5fej0p2tNmDV9qw3CA6lOgrwnJyHS%2FUqLhmAk%2B6%2FBw13b8n5jC5sjijTa3OLMRqVXpuLR84xoqNxMXNOVz2eLcO1srLuNw8q%2B1BVJ84IIBYlfTI4v0Lt7yDEsjkF1tzGVS5&X-Amz-Signature=84b9c55a6c9cffd1d1eee33064aed052d5c745dbbae75427089e6c5c588caf1c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMGGV6G%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC1JEJFGs7Rde5hWW2c9TUKYLZvwGGHHnIcpkH%2B0Kp%2F4AIgOJ7LUUBTz8z3X2tdhbaRkLVXej8eHqJrg9iBYaakTkoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDSlfXmpOZFG3a0bBircA6VZXGEpZKUAQ%2FNQcA2Au%2BQ2eaDURmzMqSl34NmE1WELeFLMyY2m%2BVwm2KsBD6WA%2BJMsWoX%2BZEo9fE4RLUcni%2Fysg0f%2BP4R4eU9ewPlILFUW2QXpQxHeku%2F6JQKfMh%2Bwxwlajs%2F7YzjhnCXe6%2FaM4zKOXX6eocLRu0eQWxafxaqqXEOEua0%2BGj1wY54N8tVryf%2FRbd1R2WeP5HlyAhriV4Iv6Mg0W2Kjp2%2F7Mdh2zsVOqbir12JYQ086%2BbUlIUHVMCu%2Fg7ws4sTfcC1i%2BUrwP5gEJc8KHCrktIbxiNxfe0hK5TUoyZ7Zkdz86VcDHJNLubZ0dZz0N8fl7WNTW3rUIl2JTJxx9DXy%2BpA7z%2Bl1EFBjwMkRIWaSPsPowxbkzhXETcrb5RGO7fbO0U7P3lqLHhMRlIj6YMajqWJxo%2BLY1QWlv2fKjZj%2F49hngqxxF8VG1Y%2BlkqBAJSK5PcAZXNnKjkP9N43UQ4Gy78EdMdpZGiR3hEkmreWXOPZbwgSqBjeYYN7ePSMCQXLrqS2MIkeO%2BFnVCOJCNaBFaiSvP1I6fdIYa%2FHki6A5d7OInAWqzKW7cKjwx2y1P1bdEiOHFouDFlfaenNHmUgeLhP3oVFJFAIk3%2FPhuyJMkZLQp%2BmXMLnj%2Br0GOqUBXq%2BhslezrGiT0epnMMofXIyGjcNi58y1fDb%2Bvf7CVP95dkePCVzJ%2BacTUiXsCjc1KiKB%2F3zltAH5qs7FhODDuTQyB5fej0p2tNmDV9qw3CA6lOgrwnJyHS%2FUqLhmAk%2B6%2FBw13b8n5jC5sjijTa3OLMRqVXpuLR84xoqNxMXNOVz2eLcO1srLuNw8q%2B1BVJ84IIBYlfTI4v0Lt7yDEsjkF1tzGVS5&X-Amz-Signature=7bc01f569b63c6cc2d22d6ce430d0acd8388316843b7fe232cada34a79e37ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMGGV6G%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC1JEJFGs7Rde5hWW2c9TUKYLZvwGGHHnIcpkH%2B0Kp%2F4AIgOJ7LUUBTz8z3X2tdhbaRkLVXej8eHqJrg9iBYaakTkoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDSlfXmpOZFG3a0bBircA6VZXGEpZKUAQ%2FNQcA2Au%2BQ2eaDURmzMqSl34NmE1WELeFLMyY2m%2BVwm2KsBD6WA%2BJMsWoX%2BZEo9fE4RLUcni%2Fysg0f%2BP4R4eU9ewPlILFUW2QXpQxHeku%2F6JQKfMh%2Bwxwlajs%2F7YzjhnCXe6%2FaM4zKOXX6eocLRu0eQWxafxaqqXEOEua0%2BGj1wY54N8tVryf%2FRbd1R2WeP5HlyAhriV4Iv6Mg0W2Kjp2%2F7Mdh2zsVOqbir12JYQ086%2BbUlIUHVMCu%2Fg7ws4sTfcC1i%2BUrwP5gEJc8KHCrktIbxiNxfe0hK5TUoyZ7Zkdz86VcDHJNLubZ0dZz0N8fl7WNTW3rUIl2JTJxx9DXy%2BpA7z%2Bl1EFBjwMkRIWaSPsPowxbkzhXETcrb5RGO7fbO0U7P3lqLHhMRlIj6YMajqWJxo%2BLY1QWlv2fKjZj%2F49hngqxxF8VG1Y%2BlkqBAJSK5PcAZXNnKjkP9N43UQ4Gy78EdMdpZGiR3hEkmreWXOPZbwgSqBjeYYN7ePSMCQXLrqS2MIkeO%2BFnVCOJCNaBFaiSvP1I6fdIYa%2FHki6A5d7OInAWqzKW7cKjwx2y1P1bdEiOHFouDFlfaenNHmUgeLhP3oVFJFAIk3%2FPhuyJMkZLQp%2BmXMLnj%2Br0GOqUBXq%2BhslezrGiT0epnMMofXIyGjcNi58y1fDb%2Bvf7CVP95dkePCVzJ%2BacTUiXsCjc1KiKB%2F3zltAH5qs7FhODDuTQyB5fej0p2tNmDV9qw3CA6lOgrwnJyHS%2FUqLhmAk%2B6%2FBw13b8n5jC5sjijTa3OLMRqVXpuLR84xoqNxMXNOVz2eLcO1srLuNw8q%2B1BVJ84IIBYlfTI4v0Lt7yDEsjkF1tzGVS5&X-Amz-Signature=599ae3d078ac93a0f393db05c75b55af5f04b2ca9d425f7a4de26b28a6ed10c0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMGGV6G%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC1JEJFGs7Rde5hWW2c9TUKYLZvwGGHHnIcpkH%2B0Kp%2F4AIgOJ7LUUBTz8z3X2tdhbaRkLVXej8eHqJrg9iBYaakTkoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDSlfXmpOZFG3a0bBircA6VZXGEpZKUAQ%2FNQcA2Au%2BQ2eaDURmzMqSl34NmE1WELeFLMyY2m%2BVwm2KsBD6WA%2BJMsWoX%2BZEo9fE4RLUcni%2Fysg0f%2BP4R4eU9ewPlILFUW2QXpQxHeku%2F6JQKfMh%2Bwxwlajs%2F7YzjhnCXe6%2FaM4zKOXX6eocLRu0eQWxafxaqqXEOEua0%2BGj1wY54N8tVryf%2FRbd1R2WeP5HlyAhriV4Iv6Mg0W2Kjp2%2F7Mdh2zsVOqbir12JYQ086%2BbUlIUHVMCu%2Fg7ws4sTfcC1i%2BUrwP5gEJc8KHCrktIbxiNxfe0hK5TUoyZ7Zkdz86VcDHJNLubZ0dZz0N8fl7WNTW3rUIl2JTJxx9DXy%2BpA7z%2Bl1EFBjwMkRIWaSPsPowxbkzhXETcrb5RGO7fbO0U7P3lqLHhMRlIj6YMajqWJxo%2BLY1QWlv2fKjZj%2F49hngqxxF8VG1Y%2BlkqBAJSK5PcAZXNnKjkP9N43UQ4Gy78EdMdpZGiR3hEkmreWXOPZbwgSqBjeYYN7ePSMCQXLrqS2MIkeO%2BFnVCOJCNaBFaiSvP1I6fdIYa%2FHki6A5d7OInAWqzKW7cKjwx2y1P1bdEiOHFouDFlfaenNHmUgeLhP3oVFJFAIk3%2FPhuyJMkZLQp%2BmXMLnj%2Br0GOqUBXq%2BhslezrGiT0epnMMofXIyGjcNi58y1fDb%2Bvf7CVP95dkePCVzJ%2BacTUiXsCjc1KiKB%2F3zltAH5qs7FhODDuTQyB5fej0p2tNmDV9qw3CA6lOgrwnJyHS%2FUqLhmAk%2B6%2FBw13b8n5jC5sjijTa3OLMRqVXpuLR84xoqNxMXNOVz2eLcO1srLuNw8q%2B1BVJ84IIBYlfTI4v0Lt7yDEsjkF1tzGVS5&X-Amz-Signature=0fdb49cefac3c4e97d0fcc3d4af33c6a6fceb345c06eae40b33fdcadb5943aac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
