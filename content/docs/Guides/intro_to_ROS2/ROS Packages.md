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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XVYRCH%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDrzk1kp%2BAvMNQUI%2FzaoyGpDwp%2BXFbxv%2FP6uIiIlulJFQIgEY%2BC9KIh1c1M1Da3ssutscpEjbF8TpK%2Bh0ixSQQdLykqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPApQ0pQGbnjwHaNwSrcA0JOR%2FfsEUFR7YwPf11zvyE6gS7pf9FIWcE6naeHNT7%2F1H6cl4CWFYU3aNL6y0bkk9IMUdZuEGZfs5djNrIjLtR1DdD4XTJftTOFfrzfWq%2Fo92z4vLETJ3BlXIyr%2B9nSLrX6WFDwTXCqyDjRTeNnrwdykkbvJ2fWkxkMTivI2YBJOpXqO6Zz6zP2NbaGewNqcTvi8jHcvgmZe9oOyKYN89lbRo9%2Fk6SGuN3OCsfYdYPGeO7YqFSXwxfFD1KMRmKT%2BIhgr8rXn6arUt9Avc0K9qY1D7%2FQNBbnD0RT%2Bg%2F8oz9kwV9341QlFG5209EtFz1T9yGudnbtjTrmUuBUan0n3WVQwP%2F8wTP%2FEXho%2BRodFu0Up%2F4J%2BwKhOObNzI88ohCRip2BqMGUiZMiIqyUa3D7bh8VQTEmbLPxYsnVI0ZS%2BLSIJ8fWwWByDRm6PAHtdY1y0HBqnvv0X26qbUh3B6eH96Uy1WSTlHk3M1tCuk4i5jQhndlBTL280w35CkPelBNwqoHeBG2W9QLtfXH%2FX%2FpI4FNr%2Bv9lU4UlmweOWZAuQXHMSUq4rGPWi8vz9pbEe1tK5AeXf2e61Nt7WGYPfHIEc8OOg6k%2Bj57OVklw6pjTEdIfmvk2RCWjvEl4nH6vMJny0sAGOqUBg%2Bsy%2BTcgMcbrBHA%2BHlssquD1EpBOef%2FY%2Fx9fb37YNBSOragPGnlyAPLOy6i4QIkWEGt8GRtF1K3Iux1cHPooCUtVwchPO4Fv3chEBy7lGO%2BmnoeD5F6tVPvNvPe4ZJwwIkXTFd%2FBjKTfnQHZ6FXoOan2iERATSg3NUYEdbZnwKlcxumLAlHkeTZ038e0rZpT1redBDi2D6v0EyZzxjjqy8QnCmVs&X-Amz-Signature=ab3a0b56540feb8c0ef5bad597d4ac77ab8dc2efff4396b4264c91f6bd247b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XVYRCH%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDrzk1kp%2BAvMNQUI%2FzaoyGpDwp%2BXFbxv%2FP6uIiIlulJFQIgEY%2BC9KIh1c1M1Da3ssutscpEjbF8TpK%2Bh0ixSQQdLykqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPApQ0pQGbnjwHaNwSrcA0JOR%2FfsEUFR7YwPf11zvyE6gS7pf9FIWcE6naeHNT7%2F1H6cl4CWFYU3aNL6y0bkk9IMUdZuEGZfs5djNrIjLtR1DdD4XTJftTOFfrzfWq%2Fo92z4vLETJ3BlXIyr%2B9nSLrX6WFDwTXCqyDjRTeNnrwdykkbvJ2fWkxkMTivI2YBJOpXqO6Zz6zP2NbaGewNqcTvi8jHcvgmZe9oOyKYN89lbRo9%2Fk6SGuN3OCsfYdYPGeO7YqFSXwxfFD1KMRmKT%2BIhgr8rXn6arUt9Avc0K9qY1D7%2FQNBbnD0RT%2Bg%2F8oz9kwV9341QlFG5209EtFz1T9yGudnbtjTrmUuBUan0n3WVQwP%2F8wTP%2FEXho%2BRodFu0Up%2F4J%2BwKhOObNzI88ohCRip2BqMGUiZMiIqyUa3D7bh8VQTEmbLPxYsnVI0ZS%2BLSIJ8fWwWByDRm6PAHtdY1y0HBqnvv0X26qbUh3B6eH96Uy1WSTlHk3M1tCuk4i5jQhndlBTL280w35CkPelBNwqoHeBG2W9QLtfXH%2FX%2FpI4FNr%2Bv9lU4UlmweOWZAuQXHMSUq4rGPWi8vz9pbEe1tK5AeXf2e61Nt7WGYPfHIEc8OOg6k%2Bj57OVklw6pjTEdIfmvk2RCWjvEl4nH6vMJny0sAGOqUBg%2Bsy%2BTcgMcbrBHA%2BHlssquD1EpBOef%2FY%2Fx9fb37YNBSOragPGnlyAPLOy6i4QIkWEGt8GRtF1K3Iux1cHPooCUtVwchPO4Fv3chEBy7lGO%2BmnoeD5F6tVPvNvPe4ZJwwIkXTFd%2FBjKTfnQHZ6FXoOan2iERATSg3NUYEdbZnwKlcxumLAlHkeTZ038e0rZpT1redBDi2D6v0EyZzxjjqy8QnCmVs&X-Amz-Signature=85418da078bab9efc19cc5ca4b150fd51a5fb6fe4970365bea78ddc43d00ed25&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XVYRCH%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDrzk1kp%2BAvMNQUI%2FzaoyGpDwp%2BXFbxv%2FP6uIiIlulJFQIgEY%2BC9KIh1c1M1Da3ssutscpEjbF8TpK%2Bh0ixSQQdLykqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPApQ0pQGbnjwHaNwSrcA0JOR%2FfsEUFR7YwPf11zvyE6gS7pf9FIWcE6naeHNT7%2F1H6cl4CWFYU3aNL6y0bkk9IMUdZuEGZfs5djNrIjLtR1DdD4XTJftTOFfrzfWq%2Fo92z4vLETJ3BlXIyr%2B9nSLrX6WFDwTXCqyDjRTeNnrwdykkbvJ2fWkxkMTivI2YBJOpXqO6Zz6zP2NbaGewNqcTvi8jHcvgmZe9oOyKYN89lbRo9%2Fk6SGuN3OCsfYdYPGeO7YqFSXwxfFD1KMRmKT%2BIhgr8rXn6arUt9Avc0K9qY1D7%2FQNBbnD0RT%2Bg%2F8oz9kwV9341QlFG5209EtFz1T9yGudnbtjTrmUuBUan0n3WVQwP%2F8wTP%2FEXho%2BRodFu0Up%2F4J%2BwKhOObNzI88ohCRip2BqMGUiZMiIqyUa3D7bh8VQTEmbLPxYsnVI0ZS%2BLSIJ8fWwWByDRm6PAHtdY1y0HBqnvv0X26qbUh3B6eH96Uy1WSTlHk3M1tCuk4i5jQhndlBTL280w35CkPelBNwqoHeBG2W9QLtfXH%2FX%2FpI4FNr%2Bv9lU4UlmweOWZAuQXHMSUq4rGPWi8vz9pbEe1tK5AeXf2e61Nt7WGYPfHIEc8OOg6k%2Bj57OVklw6pjTEdIfmvk2RCWjvEl4nH6vMJny0sAGOqUBg%2Bsy%2BTcgMcbrBHA%2BHlssquD1EpBOef%2FY%2Fx9fb37YNBSOragPGnlyAPLOy6i4QIkWEGt8GRtF1K3Iux1cHPooCUtVwchPO4Fv3chEBy7lGO%2BmnoeD5F6tVPvNvPe4ZJwwIkXTFd%2FBjKTfnQHZ6FXoOan2iERATSg3NUYEdbZnwKlcxumLAlHkeTZ038e0rZpT1redBDi2D6v0EyZzxjjqy8QnCmVs&X-Amz-Signature=c817131f0d5e56661626aac611f978569e828bf80ee4b5d55361aee90d96a75f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XVYRCH%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDrzk1kp%2BAvMNQUI%2FzaoyGpDwp%2BXFbxv%2FP6uIiIlulJFQIgEY%2BC9KIh1c1M1Da3ssutscpEjbF8TpK%2Bh0ixSQQdLykqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPApQ0pQGbnjwHaNwSrcA0JOR%2FfsEUFR7YwPf11zvyE6gS7pf9FIWcE6naeHNT7%2F1H6cl4CWFYU3aNL6y0bkk9IMUdZuEGZfs5djNrIjLtR1DdD4XTJftTOFfrzfWq%2Fo92z4vLETJ3BlXIyr%2B9nSLrX6WFDwTXCqyDjRTeNnrwdykkbvJ2fWkxkMTivI2YBJOpXqO6Zz6zP2NbaGewNqcTvi8jHcvgmZe9oOyKYN89lbRo9%2Fk6SGuN3OCsfYdYPGeO7YqFSXwxfFD1KMRmKT%2BIhgr8rXn6arUt9Avc0K9qY1D7%2FQNBbnD0RT%2Bg%2F8oz9kwV9341QlFG5209EtFz1T9yGudnbtjTrmUuBUan0n3WVQwP%2F8wTP%2FEXho%2BRodFu0Up%2F4J%2BwKhOObNzI88ohCRip2BqMGUiZMiIqyUa3D7bh8VQTEmbLPxYsnVI0ZS%2BLSIJ8fWwWByDRm6PAHtdY1y0HBqnvv0X26qbUh3B6eH96Uy1WSTlHk3M1tCuk4i5jQhndlBTL280w35CkPelBNwqoHeBG2W9QLtfXH%2FX%2FpI4FNr%2Bv9lU4UlmweOWZAuQXHMSUq4rGPWi8vz9pbEe1tK5AeXf2e61Nt7WGYPfHIEc8OOg6k%2Bj57OVklw6pjTEdIfmvk2RCWjvEl4nH6vMJny0sAGOqUBg%2Bsy%2BTcgMcbrBHA%2BHlssquD1EpBOef%2FY%2Fx9fb37YNBSOragPGnlyAPLOy6i4QIkWEGt8GRtF1K3Iux1cHPooCUtVwchPO4Fv3chEBy7lGO%2BmnoeD5F6tVPvNvPe4ZJwwIkXTFd%2FBjKTfnQHZ6FXoOan2iERATSg3NUYEdbZnwKlcxumLAlHkeTZ038e0rZpT1redBDi2D6v0EyZzxjjqy8QnCmVs&X-Amz-Signature=c6119070e35d3685c867dc7eb9cf85fecfc851f2e8d4bd97f21f233901322e43&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XVYRCH%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDrzk1kp%2BAvMNQUI%2FzaoyGpDwp%2BXFbxv%2FP6uIiIlulJFQIgEY%2BC9KIh1c1M1Da3ssutscpEjbF8TpK%2Bh0ixSQQdLykqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPApQ0pQGbnjwHaNwSrcA0JOR%2FfsEUFR7YwPf11zvyE6gS7pf9FIWcE6naeHNT7%2F1H6cl4CWFYU3aNL6y0bkk9IMUdZuEGZfs5djNrIjLtR1DdD4XTJftTOFfrzfWq%2Fo92z4vLETJ3BlXIyr%2B9nSLrX6WFDwTXCqyDjRTeNnrwdykkbvJ2fWkxkMTivI2YBJOpXqO6Zz6zP2NbaGewNqcTvi8jHcvgmZe9oOyKYN89lbRo9%2Fk6SGuN3OCsfYdYPGeO7YqFSXwxfFD1KMRmKT%2BIhgr8rXn6arUt9Avc0K9qY1D7%2FQNBbnD0RT%2Bg%2F8oz9kwV9341QlFG5209EtFz1T9yGudnbtjTrmUuBUan0n3WVQwP%2F8wTP%2FEXho%2BRodFu0Up%2F4J%2BwKhOObNzI88ohCRip2BqMGUiZMiIqyUa3D7bh8VQTEmbLPxYsnVI0ZS%2BLSIJ8fWwWByDRm6PAHtdY1y0HBqnvv0X26qbUh3B6eH96Uy1WSTlHk3M1tCuk4i5jQhndlBTL280w35CkPelBNwqoHeBG2W9QLtfXH%2FX%2FpI4FNr%2Bv9lU4UlmweOWZAuQXHMSUq4rGPWi8vz9pbEe1tK5AeXf2e61Nt7WGYPfHIEc8OOg6k%2Bj57OVklw6pjTEdIfmvk2RCWjvEl4nH6vMJny0sAGOqUBg%2Bsy%2BTcgMcbrBHA%2BHlssquD1EpBOef%2FY%2Fx9fb37YNBSOragPGnlyAPLOy6i4QIkWEGt8GRtF1K3Iux1cHPooCUtVwchPO4Fv3chEBy7lGO%2BmnoeD5F6tVPvNvPe4ZJwwIkXTFd%2FBjKTfnQHZ6FXoOan2iERATSg3NUYEdbZnwKlcxumLAlHkeTZ038e0rZpT1redBDi2D6v0EyZzxjjqy8QnCmVs&X-Amz-Signature=177040806af567c6c6901e8138744cd038cf3aab439469fbfaa8013d7c646295&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XVYRCH%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDrzk1kp%2BAvMNQUI%2FzaoyGpDwp%2BXFbxv%2FP6uIiIlulJFQIgEY%2BC9KIh1c1M1Da3ssutscpEjbF8TpK%2Bh0ixSQQdLykqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPApQ0pQGbnjwHaNwSrcA0JOR%2FfsEUFR7YwPf11zvyE6gS7pf9FIWcE6naeHNT7%2F1H6cl4CWFYU3aNL6y0bkk9IMUdZuEGZfs5djNrIjLtR1DdD4XTJftTOFfrzfWq%2Fo92z4vLETJ3BlXIyr%2B9nSLrX6WFDwTXCqyDjRTeNnrwdykkbvJ2fWkxkMTivI2YBJOpXqO6Zz6zP2NbaGewNqcTvi8jHcvgmZe9oOyKYN89lbRo9%2Fk6SGuN3OCsfYdYPGeO7YqFSXwxfFD1KMRmKT%2BIhgr8rXn6arUt9Avc0K9qY1D7%2FQNBbnD0RT%2Bg%2F8oz9kwV9341QlFG5209EtFz1T9yGudnbtjTrmUuBUan0n3WVQwP%2F8wTP%2FEXho%2BRodFu0Up%2F4J%2BwKhOObNzI88ohCRip2BqMGUiZMiIqyUa3D7bh8VQTEmbLPxYsnVI0ZS%2BLSIJ8fWwWByDRm6PAHtdY1y0HBqnvv0X26qbUh3B6eH96Uy1WSTlHk3M1tCuk4i5jQhndlBTL280w35CkPelBNwqoHeBG2W9QLtfXH%2FX%2FpI4FNr%2Bv9lU4UlmweOWZAuQXHMSUq4rGPWi8vz9pbEe1tK5AeXf2e61Nt7WGYPfHIEc8OOg6k%2Bj57OVklw6pjTEdIfmvk2RCWjvEl4nH6vMJny0sAGOqUBg%2Bsy%2BTcgMcbrBHA%2BHlssquD1EpBOef%2FY%2Fx9fb37YNBSOragPGnlyAPLOy6i4QIkWEGt8GRtF1K3Iux1cHPooCUtVwchPO4Fv3chEBy7lGO%2BmnoeD5F6tVPvNvPe4ZJwwIkXTFd%2FBjKTfnQHZ6FXoOan2iERATSg3NUYEdbZnwKlcxumLAlHkeTZ038e0rZpT1redBDi2D6v0EyZzxjjqy8QnCmVs&X-Amz-Signature=fbefb9c1aa6eab3f4633f26ee2d7b663ede3e6d5e5acef0c6fc521b0b9880eba&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XVYRCH%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDrzk1kp%2BAvMNQUI%2FzaoyGpDwp%2BXFbxv%2FP6uIiIlulJFQIgEY%2BC9KIh1c1M1Da3ssutscpEjbF8TpK%2Bh0ixSQQdLykqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPApQ0pQGbnjwHaNwSrcA0JOR%2FfsEUFR7YwPf11zvyE6gS7pf9FIWcE6naeHNT7%2F1H6cl4CWFYU3aNL6y0bkk9IMUdZuEGZfs5djNrIjLtR1DdD4XTJftTOFfrzfWq%2Fo92z4vLETJ3BlXIyr%2B9nSLrX6WFDwTXCqyDjRTeNnrwdykkbvJ2fWkxkMTivI2YBJOpXqO6Zz6zP2NbaGewNqcTvi8jHcvgmZe9oOyKYN89lbRo9%2Fk6SGuN3OCsfYdYPGeO7YqFSXwxfFD1KMRmKT%2BIhgr8rXn6arUt9Avc0K9qY1D7%2FQNBbnD0RT%2Bg%2F8oz9kwV9341QlFG5209EtFz1T9yGudnbtjTrmUuBUan0n3WVQwP%2F8wTP%2FEXho%2BRodFu0Up%2F4J%2BwKhOObNzI88ohCRip2BqMGUiZMiIqyUa3D7bh8VQTEmbLPxYsnVI0ZS%2BLSIJ8fWwWByDRm6PAHtdY1y0HBqnvv0X26qbUh3B6eH96Uy1WSTlHk3M1tCuk4i5jQhndlBTL280w35CkPelBNwqoHeBG2W9QLtfXH%2FX%2FpI4FNr%2Bv9lU4UlmweOWZAuQXHMSUq4rGPWi8vz9pbEe1tK5AeXf2e61Nt7WGYPfHIEc8OOg6k%2Bj57OVklw6pjTEdIfmvk2RCWjvEl4nH6vMJny0sAGOqUBg%2Bsy%2BTcgMcbrBHA%2BHlssquD1EpBOef%2FY%2Fx9fb37YNBSOragPGnlyAPLOy6i4QIkWEGt8GRtF1K3Iux1cHPooCUtVwchPO4Fv3chEBy7lGO%2BmnoeD5F6tVPvNvPe4ZJwwIkXTFd%2FBjKTfnQHZ6FXoOan2iERATSg3NUYEdbZnwKlcxumLAlHkeTZ038e0rZpT1redBDi2D6v0EyZzxjjqy8QnCmVs&X-Amz-Signature=dadce9f9f5806f29f5ab441ba43eb3cf821a22acc8614273652700d4d5e0f9f3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
