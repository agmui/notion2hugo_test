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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQH4JW5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgzX%2BsjebWz4EmXnYXOXctAdfqCpGNCOdTlj8jyPyruAiEA4zdGR5vPvA0L51tQ%2FqEWfvyINr3ccILRg6UQArdOFVMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCL0cWyBmeBZBn31vCrcA4n0gwkqk67xu6RHFslHFdNZOK9267Jbe4X9DXU2XbS9biXG1bRm%2BQdJ8OCNqMw%2Bb9njOYjTerRNmuSrGbeDeDb2KzW2zGljCvNU4EipYeqZ7Y6hFGqOw0UfvhuUukhWPOOuxHePdg1mKbJWTowv54X3RughWArSWdI1rwK3CmnwYkSG8cKz2GUqJRyno5xodqsUGhialV0xnN6ReLvLFTkecd97jYY8X0qyx5SFbjydC7oNYHnQpstt6q%2BmO69hYMwwnwS6ow8tPFNTM6g4%2F8UrcgsOqNwMFHXAzw4diYInk0rRO53iosz3U6W%2Bh3eg0yGeiDdSwY709uXF1CEyvnmlLNfyXAfHbR66rX9UU2z2PUPnNN6beqNecOc941eAOC6mcGGz8iMU7gppxJSkuA5dEqtkZY9ZGgpZCOUTuZbzRNOnZn1GwDmg1YkbMrpEDahTJJXxcD87lIdWY1gAMWAHRmCe7y3McSAutceEXcL5WGiGg1C5gHLcDMMaDZEhyveDJqnQWRZStLCtdXFmPdF9Dk6CasWcroeGc7bTEU9VQ%2BCU47WOIpdZofK7i80gSz6kL3PrA586LjlUj8PgXZjJH4AycJLXS1vPB81hnzkkL2YhHcSYLg9894jiMKf7y8IGOqUBB5D%2FgdP9UY%2Bgo8kbLKFC1Ye9qnsfvMck7d3cFlHIH6IBMYFV5SfhWsWPS7SXytcj9tzIJgNiHONnoD9IFyfN3HO%2Bt9rl4oC3LcO5zbZQavoM%2B8slZbHKM1vTO3IroF3m4AufOiVmH9ie3XCazaa9%2FZDs%2F%2FVOqwinZEIEz%2B5FHM%2FP7Zi8sk9cNVQmL5RMvkJ3v8wzl4sSxcYadIs2GqINADZkDMCi&X-Amz-Signature=f6660fbcf159fae41b11f996ad98ae10ff3cd06242c2f0ec4d4992f4fd9bac98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQH4JW5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgzX%2BsjebWz4EmXnYXOXctAdfqCpGNCOdTlj8jyPyruAiEA4zdGR5vPvA0L51tQ%2FqEWfvyINr3ccILRg6UQArdOFVMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCL0cWyBmeBZBn31vCrcA4n0gwkqk67xu6RHFslHFdNZOK9267Jbe4X9DXU2XbS9biXG1bRm%2BQdJ8OCNqMw%2Bb9njOYjTerRNmuSrGbeDeDb2KzW2zGljCvNU4EipYeqZ7Y6hFGqOw0UfvhuUukhWPOOuxHePdg1mKbJWTowv54X3RughWArSWdI1rwK3CmnwYkSG8cKz2GUqJRyno5xodqsUGhialV0xnN6ReLvLFTkecd97jYY8X0qyx5SFbjydC7oNYHnQpstt6q%2BmO69hYMwwnwS6ow8tPFNTM6g4%2F8UrcgsOqNwMFHXAzw4diYInk0rRO53iosz3U6W%2Bh3eg0yGeiDdSwY709uXF1CEyvnmlLNfyXAfHbR66rX9UU2z2PUPnNN6beqNecOc941eAOC6mcGGz8iMU7gppxJSkuA5dEqtkZY9ZGgpZCOUTuZbzRNOnZn1GwDmg1YkbMrpEDahTJJXxcD87lIdWY1gAMWAHRmCe7y3McSAutceEXcL5WGiGg1C5gHLcDMMaDZEhyveDJqnQWRZStLCtdXFmPdF9Dk6CasWcroeGc7bTEU9VQ%2BCU47WOIpdZofK7i80gSz6kL3PrA586LjlUj8PgXZjJH4AycJLXS1vPB81hnzkkL2YhHcSYLg9894jiMKf7y8IGOqUBB5D%2FgdP9UY%2Bgo8kbLKFC1Ye9qnsfvMck7d3cFlHIH6IBMYFV5SfhWsWPS7SXytcj9tzIJgNiHONnoD9IFyfN3HO%2Bt9rl4oC3LcO5zbZQavoM%2B8slZbHKM1vTO3IroF3m4AufOiVmH9ie3XCazaa9%2FZDs%2F%2FVOqwinZEIEz%2B5FHM%2FP7Zi8sk9cNVQmL5RMvkJ3v8wzl4sSxcYadIs2GqINADZkDMCi&X-Amz-Signature=a7403019d4f809487592dcae47dad4297e574c4ba2c9a9467fab8245b28ea368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQH4JW5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgzX%2BsjebWz4EmXnYXOXctAdfqCpGNCOdTlj8jyPyruAiEA4zdGR5vPvA0L51tQ%2FqEWfvyINr3ccILRg6UQArdOFVMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCL0cWyBmeBZBn31vCrcA4n0gwkqk67xu6RHFslHFdNZOK9267Jbe4X9DXU2XbS9biXG1bRm%2BQdJ8OCNqMw%2Bb9njOYjTerRNmuSrGbeDeDb2KzW2zGljCvNU4EipYeqZ7Y6hFGqOw0UfvhuUukhWPOOuxHePdg1mKbJWTowv54X3RughWArSWdI1rwK3CmnwYkSG8cKz2GUqJRyno5xodqsUGhialV0xnN6ReLvLFTkecd97jYY8X0qyx5SFbjydC7oNYHnQpstt6q%2BmO69hYMwwnwS6ow8tPFNTM6g4%2F8UrcgsOqNwMFHXAzw4diYInk0rRO53iosz3U6W%2Bh3eg0yGeiDdSwY709uXF1CEyvnmlLNfyXAfHbR66rX9UU2z2PUPnNN6beqNecOc941eAOC6mcGGz8iMU7gppxJSkuA5dEqtkZY9ZGgpZCOUTuZbzRNOnZn1GwDmg1YkbMrpEDahTJJXxcD87lIdWY1gAMWAHRmCe7y3McSAutceEXcL5WGiGg1C5gHLcDMMaDZEhyveDJqnQWRZStLCtdXFmPdF9Dk6CasWcroeGc7bTEU9VQ%2BCU47WOIpdZofK7i80gSz6kL3PrA586LjlUj8PgXZjJH4AycJLXS1vPB81hnzkkL2YhHcSYLg9894jiMKf7y8IGOqUBB5D%2FgdP9UY%2Bgo8kbLKFC1Ye9qnsfvMck7d3cFlHIH6IBMYFV5SfhWsWPS7SXytcj9tzIJgNiHONnoD9IFyfN3HO%2Bt9rl4oC3LcO5zbZQavoM%2B8slZbHKM1vTO3IroF3m4AufOiVmH9ie3XCazaa9%2FZDs%2F%2FVOqwinZEIEz%2B5FHM%2FP7Zi8sk9cNVQmL5RMvkJ3v8wzl4sSxcYadIs2GqINADZkDMCi&X-Amz-Signature=0de96f22597bd0b9beb049d4739051c397c8c687055e6c365351d0fce127699e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQH4JW5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgzX%2BsjebWz4EmXnYXOXctAdfqCpGNCOdTlj8jyPyruAiEA4zdGR5vPvA0L51tQ%2FqEWfvyINr3ccILRg6UQArdOFVMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCL0cWyBmeBZBn31vCrcA4n0gwkqk67xu6RHFslHFdNZOK9267Jbe4X9DXU2XbS9biXG1bRm%2BQdJ8OCNqMw%2Bb9njOYjTerRNmuSrGbeDeDb2KzW2zGljCvNU4EipYeqZ7Y6hFGqOw0UfvhuUukhWPOOuxHePdg1mKbJWTowv54X3RughWArSWdI1rwK3CmnwYkSG8cKz2GUqJRyno5xodqsUGhialV0xnN6ReLvLFTkecd97jYY8X0qyx5SFbjydC7oNYHnQpstt6q%2BmO69hYMwwnwS6ow8tPFNTM6g4%2F8UrcgsOqNwMFHXAzw4diYInk0rRO53iosz3U6W%2Bh3eg0yGeiDdSwY709uXF1CEyvnmlLNfyXAfHbR66rX9UU2z2PUPnNN6beqNecOc941eAOC6mcGGz8iMU7gppxJSkuA5dEqtkZY9ZGgpZCOUTuZbzRNOnZn1GwDmg1YkbMrpEDahTJJXxcD87lIdWY1gAMWAHRmCe7y3McSAutceEXcL5WGiGg1C5gHLcDMMaDZEhyveDJqnQWRZStLCtdXFmPdF9Dk6CasWcroeGc7bTEU9VQ%2BCU47WOIpdZofK7i80gSz6kL3PrA586LjlUj8PgXZjJH4AycJLXS1vPB81hnzkkL2YhHcSYLg9894jiMKf7y8IGOqUBB5D%2FgdP9UY%2Bgo8kbLKFC1Ye9qnsfvMck7d3cFlHIH6IBMYFV5SfhWsWPS7SXytcj9tzIJgNiHONnoD9IFyfN3HO%2Bt9rl4oC3LcO5zbZQavoM%2B8slZbHKM1vTO3IroF3m4AufOiVmH9ie3XCazaa9%2FZDs%2F%2FVOqwinZEIEz%2B5FHM%2FP7Zi8sk9cNVQmL5RMvkJ3v8wzl4sSxcYadIs2GqINADZkDMCi&X-Amz-Signature=90bfcc1b744d457b7cf678a41f25e1aa95a6b3ae1cbf56880417432651cd6d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQH4JW5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgzX%2BsjebWz4EmXnYXOXctAdfqCpGNCOdTlj8jyPyruAiEA4zdGR5vPvA0L51tQ%2FqEWfvyINr3ccILRg6UQArdOFVMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCL0cWyBmeBZBn31vCrcA4n0gwkqk67xu6RHFslHFdNZOK9267Jbe4X9DXU2XbS9biXG1bRm%2BQdJ8OCNqMw%2Bb9njOYjTerRNmuSrGbeDeDb2KzW2zGljCvNU4EipYeqZ7Y6hFGqOw0UfvhuUukhWPOOuxHePdg1mKbJWTowv54X3RughWArSWdI1rwK3CmnwYkSG8cKz2GUqJRyno5xodqsUGhialV0xnN6ReLvLFTkecd97jYY8X0qyx5SFbjydC7oNYHnQpstt6q%2BmO69hYMwwnwS6ow8tPFNTM6g4%2F8UrcgsOqNwMFHXAzw4diYInk0rRO53iosz3U6W%2Bh3eg0yGeiDdSwY709uXF1CEyvnmlLNfyXAfHbR66rX9UU2z2PUPnNN6beqNecOc941eAOC6mcGGz8iMU7gppxJSkuA5dEqtkZY9ZGgpZCOUTuZbzRNOnZn1GwDmg1YkbMrpEDahTJJXxcD87lIdWY1gAMWAHRmCe7y3McSAutceEXcL5WGiGg1C5gHLcDMMaDZEhyveDJqnQWRZStLCtdXFmPdF9Dk6CasWcroeGc7bTEU9VQ%2BCU47WOIpdZofK7i80gSz6kL3PrA586LjlUj8PgXZjJH4AycJLXS1vPB81hnzkkL2YhHcSYLg9894jiMKf7y8IGOqUBB5D%2FgdP9UY%2Bgo8kbLKFC1Ye9qnsfvMck7d3cFlHIH6IBMYFV5SfhWsWPS7SXytcj9tzIJgNiHONnoD9IFyfN3HO%2Bt9rl4oC3LcO5zbZQavoM%2B8slZbHKM1vTO3IroF3m4AufOiVmH9ie3XCazaa9%2FZDs%2F%2FVOqwinZEIEz%2B5FHM%2FP7Zi8sk9cNVQmL5RMvkJ3v8wzl4sSxcYadIs2GqINADZkDMCi&X-Amz-Signature=0654ff2e252aa2861ad1d9d8dc4191b97ebffb9a34f97a4f0d017d7d6eef0c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQH4JW5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgzX%2BsjebWz4EmXnYXOXctAdfqCpGNCOdTlj8jyPyruAiEA4zdGR5vPvA0L51tQ%2FqEWfvyINr3ccILRg6UQArdOFVMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCL0cWyBmeBZBn31vCrcA4n0gwkqk67xu6RHFslHFdNZOK9267Jbe4X9DXU2XbS9biXG1bRm%2BQdJ8OCNqMw%2Bb9njOYjTerRNmuSrGbeDeDb2KzW2zGljCvNU4EipYeqZ7Y6hFGqOw0UfvhuUukhWPOOuxHePdg1mKbJWTowv54X3RughWArSWdI1rwK3CmnwYkSG8cKz2GUqJRyno5xodqsUGhialV0xnN6ReLvLFTkecd97jYY8X0qyx5SFbjydC7oNYHnQpstt6q%2BmO69hYMwwnwS6ow8tPFNTM6g4%2F8UrcgsOqNwMFHXAzw4diYInk0rRO53iosz3U6W%2Bh3eg0yGeiDdSwY709uXF1CEyvnmlLNfyXAfHbR66rX9UU2z2PUPnNN6beqNecOc941eAOC6mcGGz8iMU7gppxJSkuA5dEqtkZY9ZGgpZCOUTuZbzRNOnZn1GwDmg1YkbMrpEDahTJJXxcD87lIdWY1gAMWAHRmCe7y3McSAutceEXcL5WGiGg1C5gHLcDMMaDZEhyveDJqnQWRZStLCtdXFmPdF9Dk6CasWcroeGc7bTEU9VQ%2BCU47WOIpdZofK7i80gSz6kL3PrA586LjlUj8PgXZjJH4AycJLXS1vPB81hnzkkL2YhHcSYLg9894jiMKf7y8IGOqUBB5D%2FgdP9UY%2Bgo8kbLKFC1Ye9qnsfvMck7d3cFlHIH6IBMYFV5SfhWsWPS7SXytcj9tzIJgNiHONnoD9IFyfN3HO%2Bt9rl4oC3LcO5zbZQavoM%2B8slZbHKM1vTO3IroF3m4AufOiVmH9ie3XCazaa9%2FZDs%2F%2FVOqwinZEIEz%2B5FHM%2FP7Zi8sk9cNVQmL5RMvkJ3v8wzl4sSxcYadIs2GqINADZkDMCi&X-Amz-Signature=498c04969d26ed8368d0cfc06f19db3bfee0933e0be00f91158392132782f1af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQH4JW5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgzX%2BsjebWz4EmXnYXOXctAdfqCpGNCOdTlj8jyPyruAiEA4zdGR5vPvA0L51tQ%2FqEWfvyINr3ccILRg6UQArdOFVMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCL0cWyBmeBZBn31vCrcA4n0gwkqk67xu6RHFslHFdNZOK9267Jbe4X9DXU2XbS9biXG1bRm%2BQdJ8OCNqMw%2Bb9njOYjTerRNmuSrGbeDeDb2KzW2zGljCvNU4EipYeqZ7Y6hFGqOw0UfvhuUukhWPOOuxHePdg1mKbJWTowv54X3RughWArSWdI1rwK3CmnwYkSG8cKz2GUqJRyno5xodqsUGhialV0xnN6ReLvLFTkecd97jYY8X0qyx5SFbjydC7oNYHnQpstt6q%2BmO69hYMwwnwS6ow8tPFNTM6g4%2F8UrcgsOqNwMFHXAzw4diYInk0rRO53iosz3U6W%2Bh3eg0yGeiDdSwY709uXF1CEyvnmlLNfyXAfHbR66rX9UU2z2PUPnNN6beqNecOc941eAOC6mcGGz8iMU7gppxJSkuA5dEqtkZY9ZGgpZCOUTuZbzRNOnZn1GwDmg1YkbMrpEDahTJJXxcD87lIdWY1gAMWAHRmCe7y3McSAutceEXcL5WGiGg1C5gHLcDMMaDZEhyveDJqnQWRZStLCtdXFmPdF9Dk6CasWcroeGc7bTEU9VQ%2BCU47WOIpdZofK7i80gSz6kL3PrA586LjlUj8PgXZjJH4AycJLXS1vPB81hnzkkL2YhHcSYLg9894jiMKf7y8IGOqUBB5D%2FgdP9UY%2Bgo8kbLKFC1Ye9qnsfvMck7d3cFlHIH6IBMYFV5SfhWsWPS7SXytcj9tzIJgNiHONnoD9IFyfN3HO%2Bt9rl4oC3LcO5zbZQavoM%2B8slZbHKM1vTO3IroF3m4AufOiVmH9ie3XCazaa9%2FZDs%2F%2FVOqwinZEIEz%2B5FHM%2FP7Zi8sk9cNVQmL5RMvkJ3v8wzl4sSxcYadIs2GqINADZkDMCi&X-Amz-Signature=1646b7a7978025b6409f965a2f0e15cca884db80e18f021dae96375aab47de2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
