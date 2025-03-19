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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VIN2OL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCqZnHO%2BD67PIvjKTB%2FAbBiljcluGBBQ0ARvgc2UtfBdQIgLOx53qBGxHkHtH3ySZaydYQF8liGRsPAZKy7Ooz4J70q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIdSROZ2JNEy6EAfnircA7S169FvC8XleCZspxt0SFi5s7zB5be8%2B%2BjuO5Im4DHOJlnPDI3z9r%2BY0vM%2BS00sHj6TVFjLbeXenRHKUipj2dRtst56dOwexzpVx98%2Bb9rDSGkY%2BkXxpKiV8akE4YPr1WPC0jMMRzx3Xco0lb3ywMP6PUNLMibzg53PVNeOYpAHEXhss7s2vVhev3QzgDhDSsebgV1cp06BZkzpTP3Lo9%2Fu8clr7xxtCjbFLopRNc%2Fp1XT4vg1DthOc5ni%2FJu%2FAHoyB2dIy7PSurOuow3fHpQOgK1SNsdm0hmj7hQybgRWFbhJApH71muF2Ymr%2BW5lYqnCCqwvqzWvbVeqLe3y%2BaxMWgUzImLh%2FbV9XuyRo71YGIUTbpulsYFuQ5fiZqxskORm%2BQ6aQ89LrUsh%2BjmDxTTBvRkled59%2FMYzYM6tOjc0I09un90%2BXo4xNZiwIw9i0qneWdVPLvDoEBWe5xNJl7CGO64L6iqvNN1uYbcAbEbS37rmoKOSDO1JT1aq3FCvBBVDsKI5v27ucueSD%2BPM9EM%2FYjDKdfouL3cvS4PVLSwXKiix%2Fz66y9MeyviKws1Osz9eLpC1tYa6CroSmxoCoPLRBcWPu73yeLuQbZZXofgh5vHZEIBsyCO5Hl7ZpMLfe6L4GOqUBBxzhjlqJlq9BRE%2FhLxQFJ%2BzXq%2BL%2FE%2BcvNSIteVWusE4CmJlhHq5w3%2FJPeGYW%2FHEUj27b%2Fou5GXKWpN%2FRr%2BOM%2FvyIH%2FgVM0yG4M3jLHIMo%2Fcatr01q%2BHsU3mqnIzRYmMsHS%2FiTeqWTbiiDHD%2FEfjbd%2BdlQA9YKmoNsZJkczZ8csBc2NgzRzC3QmqDIWuFwFyG%2FTWyow9MPhn1hxmNNL%2FhMaAt4%2Bmq&X-Amz-Signature=b961cd6eac7ebd7ded6269d8cf3376fbcab64b7e1dae85a44013ebee264bbd31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VIN2OL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCqZnHO%2BD67PIvjKTB%2FAbBiljcluGBBQ0ARvgc2UtfBdQIgLOx53qBGxHkHtH3ySZaydYQF8liGRsPAZKy7Ooz4J70q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIdSROZ2JNEy6EAfnircA7S169FvC8XleCZspxt0SFi5s7zB5be8%2B%2BjuO5Im4DHOJlnPDI3z9r%2BY0vM%2BS00sHj6TVFjLbeXenRHKUipj2dRtst56dOwexzpVx98%2Bb9rDSGkY%2BkXxpKiV8akE4YPr1WPC0jMMRzx3Xco0lb3ywMP6PUNLMibzg53PVNeOYpAHEXhss7s2vVhev3QzgDhDSsebgV1cp06BZkzpTP3Lo9%2Fu8clr7xxtCjbFLopRNc%2Fp1XT4vg1DthOc5ni%2FJu%2FAHoyB2dIy7PSurOuow3fHpQOgK1SNsdm0hmj7hQybgRWFbhJApH71muF2Ymr%2BW5lYqnCCqwvqzWvbVeqLe3y%2BaxMWgUzImLh%2FbV9XuyRo71YGIUTbpulsYFuQ5fiZqxskORm%2BQ6aQ89LrUsh%2BjmDxTTBvRkled59%2FMYzYM6tOjc0I09un90%2BXo4xNZiwIw9i0qneWdVPLvDoEBWe5xNJl7CGO64L6iqvNN1uYbcAbEbS37rmoKOSDO1JT1aq3FCvBBVDsKI5v27ucueSD%2BPM9EM%2FYjDKdfouL3cvS4PVLSwXKiix%2Fz66y9MeyviKws1Osz9eLpC1tYa6CroSmxoCoPLRBcWPu73yeLuQbZZXofgh5vHZEIBsyCO5Hl7ZpMLfe6L4GOqUBBxzhjlqJlq9BRE%2FhLxQFJ%2BzXq%2BL%2FE%2BcvNSIteVWusE4CmJlhHq5w3%2FJPeGYW%2FHEUj27b%2Fou5GXKWpN%2FRr%2BOM%2FvyIH%2FgVM0yG4M3jLHIMo%2Fcatr01q%2BHsU3mqnIzRYmMsHS%2FiTeqWTbiiDHD%2FEfjbd%2BdlQA9YKmoNsZJkczZ8csBc2NgzRzC3QmqDIWuFwFyG%2FTWyow9MPhn1hxmNNL%2FhMaAt4%2Bmq&X-Amz-Signature=328112fa12b53d54727af41fd76d7144ea0d64dbb156e6f12d0815ca1a30f1e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VIN2OL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCqZnHO%2BD67PIvjKTB%2FAbBiljcluGBBQ0ARvgc2UtfBdQIgLOx53qBGxHkHtH3ySZaydYQF8liGRsPAZKy7Ooz4J70q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIdSROZ2JNEy6EAfnircA7S169FvC8XleCZspxt0SFi5s7zB5be8%2B%2BjuO5Im4DHOJlnPDI3z9r%2BY0vM%2BS00sHj6TVFjLbeXenRHKUipj2dRtst56dOwexzpVx98%2Bb9rDSGkY%2BkXxpKiV8akE4YPr1WPC0jMMRzx3Xco0lb3ywMP6PUNLMibzg53PVNeOYpAHEXhss7s2vVhev3QzgDhDSsebgV1cp06BZkzpTP3Lo9%2Fu8clr7xxtCjbFLopRNc%2Fp1XT4vg1DthOc5ni%2FJu%2FAHoyB2dIy7PSurOuow3fHpQOgK1SNsdm0hmj7hQybgRWFbhJApH71muF2Ymr%2BW5lYqnCCqwvqzWvbVeqLe3y%2BaxMWgUzImLh%2FbV9XuyRo71YGIUTbpulsYFuQ5fiZqxskORm%2BQ6aQ89LrUsh%2BjmDxTTBvRkled59%2FMYzYM6tOjc0I09un90%2BXo4xNZiwIw9i0qneWdVPLvDoEBWe5xNJl7CGO64L6iqvNN1uYbcAbEbS37rmoKOSDO1JT1aq3FCvBBVDsKI5v27ucueSD%2BPM9EM%2FYjDKdfouL3cvS4PVLSwXKiix%2Fz66y9MeyviKws1Osz9eLpC1tYa6CroSmxoCoPLRBcWPu73yeLuQbZZXofgh5vHZEIBsyCO5Hl7ZpMLfe6L4GOqUBBxzhjlqJlq9BRE%2FhLxQFJ%2BzXq%2BL%2FE%2BcvNSIteVWusE4CmJlhHq5w3%2FJPeGYW%2FHEUj27b%2Fou5GXKWpN%2FRr%2BOM%2FvyIH%2FgVM0yG4M3jLHIMo%2Fcatr01q%2BHsU3mqnIzRYmMsHS%2FiTeqWTbiiDHD%2FEfjbd%2BdlQA9YKmoNsZJkczZ8csBc2NgzRzC3QmqDIWuFwFyG%2FTWyow9MPhn1hxmNNL%2FhMaAt4%2Bmq&X-Amz-Signature=2632a3ed662febb71f0953ba301782617b081bf222dbe80f29856db79cd9918c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VIN2OL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCqZnHO%2BD67PIvjKTB%2FAbBiljcluGBBQ0ARvgc2UtfBdQIgLOx53qBGxHkHtH3ySZaydYQF8liGRsPAZKy7Ooz4J70q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIdSROZ2JNEy6EAfnircA7S169FvC8XleCZspxt0SFi5s7zB5be8%2B%2BjuO5Im4DHOJlnPDI3z9r%2BY0vM%2BS00sHj6TVFjLbeXenRHKUipj2dRtst56dOwexzpVx98%2Bb9rDSGkY%2BkXxpKiV8akE4YPr1WPC0jMMRzx3Xco0lb3ywMP6PUNLMibzg53PVNeOYpAHEXhss7s2vVhev3QzgDhDSsebgV1cp06BZkzpTP3Lo9%2Fu8clr7xxtCjbFLopRNc%2Fp1XT4vg1DthOc5ni%2FJu%2FAHoyB2dIy7PSurOuow3fHpQOgK1SNsdm0hmj7hQybgRWFbhJApH71muF2Ymr%2BW5lYqnCCqwvqzWvbVeqLe3y%2BaxMWgUzImLh%2FbV9XuyRo71YGIUTbpulsYFuQ5fiZqxskORm%2BQ6aQ89LrUsh%2BjmDxTTBvRkled59%2FMYzYM6tOjc0I09un90%2BXo4xNZiwIw9i0qneWdVPLvDoEBWe5xNJl7CGO64L6iqvNN1uYbcAbEbS37rmoKOSDO1JT1aq3FCvBBVDsKI5v27ucueSD%2BPM9EM%2FYjDKdfouL3cvS4PVLSwXKiix%2Fz66y9MeyviKws1Osz9eLpC1tYa6CroSmxoCoPLRBcWPu73yeLuQbZZXofgh5vHZEIBsyCO5Hl7ZpMLfe6L4GOqUBBxzhjlqJlq9BRE%2FhLxQFJ%2BzXq%2BL%2FE%2BcvNSIteVWusE4CmJlhHq5w3%2FJPeGYW%2FHEUj27b%2Fou5GXKWpN%2FRr%2BOM%2FvyIH%2FgVM0yG4M3jLHIMo%2Fcatr01q%2BHsU3mqnIzRYmMsHS%2FiTeqWTbiiDHD%2FEfjbd%2BdlQA9YKmoNsZJkczZ8csBc2NgzRzC3QmqDIWuFwFyG%2FTWyow9MPhn1hxmNNL%2FhMaAt4%2Bmq&X-Amz-Signature=05bf1f8b394009c90cee8a6cd46589dfa81a7de3c9e66e66572ec364a2a84717&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VIN2OL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCqZnHO%2BD67PIvjKTB%2FAbBiljcluGBBQ0ARvgc2UtfBdQIgLOx53qBGxHkHtH3ySZaydYQF8liGRsPAZKy7Ooz4J70q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIdSROZ2JNEy6EAfnircA7S169FvC8XleCZspxt0SFi5s7zB5be8%2B%2BjuO5Im4DHOJlnPDI3z9r%2BY0vM%2BS00sHj6TVFjLbeXenRHKUipj2dRtst56dOwexzpVx98%2Bb9rDSGkY%2BkXxpKiV8akE4YPr1WPC0jMMRzx3Xco0lb3ywMP6PUNLMibzg53PVNeOYpAHEXhss7s2vVhev3QzgDhDSsebgV1cp06BZkzpTP3Lo9%2Fu8clr7xxtCjbFLopRNc%2Fp1XT4vg1DthOc5ni%2FJu%2FAHoyB2dIy7PSurOuow3fHpQOgK1SNsdm0hmj7hQybgRWFbhJApH71muF2Ymr%2BW5lYqnCCqwvqzWvbVeqLe3y%2BaxMWgUzImLh%2FbV9XuyRo71YGIUTbpulsYFuQ5fiZqxskORm%2BQ6aQ89LrUsh%2BjmDxTTBvRkled59%2FMYzYM6tOjc0I09un90%2BXo4xNZiwIw9i0qneWdVPLvDoEBWe5xNJl7CGO64L6iqvNN1uYbcAbEbS37rmoKOSDO1JT1aq3FCvBBVDsKI5v27ucueSD%2BPM9EM%2FYjDKdfouL3cvS4PVLSwXKiix%2Fz66y9MeyviKws1Osz9eLpC1tYa6CroSmxoCoPLRBcWPu73yeLuQbZZXofgh5vHZEIBsyCO5Hl7ZpMLfe6L4GOqUBBxzhjlqJlq9BRE%2FhLxQFJ%2BzXq%2BL%2FE%2BcvNSIteVWusE4CmJlhHq5w3%2FJPeGYW%2FHEUj27b%2Fou5GXKWpN%2FRr%2BOM%2FvyIH%2FgVM0yG4M3jLHIMo%2Fcatr01q%2BHsU3mqnIzRYmMsHS%2FiTeqWTbiiDHD%2FEfjbd%2BdlQA9YKmoNsZJkczZ8csBc2NgzRzC3QmqDIWuFwFyG%2FTWyow9MPhn1hxmNNL%2FhMaAt4%2Bmq&X-Amz-Signature=9fb1f8f6e1dea6df977b473fd5ab2271fe6d4eb2923aa928350bc5322e0f548c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VIN2OL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCqZnHO%2BD67PIvjKTB%2FAbBiljcluGBBQ0ARvgc2UtfBdQIgLOx53qBGxHkHtH3ySZaydYQF8liGRsPAZKy7Ooz4J70q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIdSROZ2JNEy6EAfnircA7S169FvC8XleCZspxt0SFi5s7zB5be8%2B%2BjuO5Im4DHOJlnPDI3z9r%2BY0vM%2BS00sHj6TVFjLbeXenRHKUipj2dRtst56dOwexzpVx98%2Bb9rDSGkY%2BkXxpKiV8akE4YPr1WPC0jMMRzx3Xco0lb3ywMP6PUNLMibzg53PVNeOYpAHEXhss7s2vVhev3QzgDhDSsebgV1cp06BZkzpTP3Lo9%2Fu8clr7xxtCjbFLopRNc%2Fp1XT4vg1DthOc5ni%2FJu%2FAHoyB2dIy7PSurOuow3fHpQOgK1SNsdm0hmj7hQybgRWFbhJApH71muF2Ymr%2BW5lYqnCCqwvqzWvbVeqLe3y%2BaxMWgUzImLh%2FbV9XuyRo71YGIUTbpulsYFuQ5fiZqxskORm%2BQ6aQ89LrUsh%2BjmDxTTBvRkled59%2FMYzYM6tOjc0I09un90%2BXo4xNZiwIw9i0qneWdVPLvDoEBWe5xNJl7CGO64L6iqvNN1uYbcAbEbS37rmoKOSDO1JT1aq3FCvBBVDsKI5v27ucueSD%2BPM9EM%2FYjDKdfouL3cvS4PVLSwXKiix%2Fz66y9MeyviKws1Osz9eLpC1tYa6CroSmxoCoPLRBcWPu73yeLuQbZZXofgh5vHZEIBsyCO5Hl7ZpMLfe6L4GOqUBBxzhjlqJlq9BRE%2FhLxQFJ%2BzXq%2BL%2FE%2BcvNSIteVWusE4CmJlhHq5w3%2FJPeGYW%2FHEUj27b%2Fou5GXKWpN%2FRr%2BOM%2FvyIH%2FgVM0yG4M3jLHIMo%2Fcatr01q%2BHsU3mqnIzRYmMsHS%2FiTeqWTbiiDHD%2FEfjbd%2BdlQA9YKmoNsZJkczZ8csBc2NgzRzC3QmqDIWuFwFyG%2FTWyow9MPhn1hxmNNL%2FhMaAt4%2Bmq&X-Amz-Signature=919ed27a42c540511b122eb0c537465cecd3e161e5517c964c9f2e876a42ffba&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VIN2OL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCqZnHO%2BD67PIvjKTB%2FAbBiljcluGBBQ0ARvgc2UtfBdQIgLOx53qBGxHkHtH3ySZaydYQF8liGRsPAZKy7Ooz4J70q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIdSROZ2JNEy6EAfnircA7S169FvC8XleCZspxt0SFi5s7zB5be8%2B%2BjuO5Im4DHOJlnPDI3z9r%2BY0vM%2BS00sHj6TVFjLbeXenRHKUipj2dRtst56dOwexzpVx98%2Bb9rDSGkY%2BkXxpKiV8akE4YPr1WPC0jMMRzx3Xco0lb3ywMP6PUNLMibzg53PVNeOYpAHEXhss7s2vVhev3QzgDhDSsebgV1cp06BZkzpTP3Lo9%2Fu8clr7xxtCjbFLopRNc%2Fp1XT4vg1DthOc5ni%2FJu%2FAHoyB2dIy7PSurOuow3fHpQOgK1SNsdm0hmj7hQybgRWFbhJApH71muF2Ymr%2BW5lYqnCCqwvqzWvbVeqLe3y%2BaxMWgUzImLh%2FbV9XuyRo71YGIUTbpulsYFuQ5fiZqxskORm%2BQ6aQ89LrUsh%2BjmDxTTBvRkled59%2FMYzYM6tOjc0I09un90%2BXo4xNZiwIw9i0qneWdVPLvDoEBWe5xNJl7CGO64L6iqvNN1uYbcAbEbS37rmoKOSDO1JT1aq3FCvBBVDsKI5v27ucueSD%2BPM9EM%2FYjDKdfouL3cvS4PVLSwXKiix%2Fz66y9MeyviKws1Osz9eLpC1tYa6CroSmxoCoPLRBcWPu73yeLuQbZZXofgh5vHZEIBsyCO5Hl7ZpMLfe6L4GOqUBBxzhjlqJlq9BRE%2FhLxQFJ%2BzXq%2BL%2FE%2BcvNSIteVWusE4CmJlhHq5w3%2FJPeGYW%2FHEUj27b%2Fou5GXKWpN%2FRr%2BOM%2FvyIH%2FgVM0yG4M3jLHIMo%2Fcatr01q%2BHsU3mqnIzRYmMsHS%2FiTeqWTbiiDHD%2FEfjbd%2BdlQA9YKmoNsZJkczZ8csBc2NgzRzC3QmqDIWuFwFyG%2FTWyow9MPhn1hxmNNL%2FhMaAt4%2Bmq&X-Amz-Signature=ae517485ef9b0255e648b9dc350c5a764ee25f16dc948f4f80c8209d02b824f4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
