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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPWHPKO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGmB6In7EdWw3wDk1zwJ%2FqFtoq6jm18%2FrhDZwv3kN70kAiEAi0F9tfWuepefn0k4FonnZPv1Sq2QBXL7jQ4q1aQjHvQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDETmPOba%2FuHSWaUMEircA5e0S4b%2BXl9lIwjA0F%2B8Jf40ryoV93R9XFNBsUTXIuYqv3twrwRJxfZGbTfKPU97yo3Y5AGKIVmahI%2FBun24sOhvCQ5xgXC7myVRT8yq58eFCX3bd08MBwVJMdXQrfZvVnWRppA6d9LaJSM2TNeJay0%2F4CV1pp4scsRoVzLfGzau2NBWeUYfQExdN5zafPJFGxXOKpXesY9TkrYxDxH7DtTFa%2FT4Hw5DyZVKkoZoIO7OQGrUlCq1bIih7WisrnkJvcffQQD4BAcLTchup%2FKaJL%2BqIaYgheIyC%2BQhX%2BUNVn0StFOJ82j1fiv7Gx2M8XrbPOu%2F0BWU6Xk069pnRny7LaA8dAqasQCSItAmb9WBbKLqWvOz4bC%2BcXDYVaEiVrki7XLLSEfX%2BEebVVw1D%2FOhsU%2BEfNjTtJ0hIwcxhywwntPvDU7B8tSEQ4RmwAJXr98V0vsvrAsQhUj7IczJIGmIepP2%2Fw0m9CEODO6dDkwElo5CqS57Ib9Q3abFSWfeaOBW%2Fu0na%2BWUKvqxeyVv9rlWt0laKkNfbpeBOTbkxtFP3VBM7Y4ehHnBdEJC40dM24MvoHbV0ji3%2FXmxgQl6oBkJpoPejAaDw%2FK4Ld%2FGHECRUNg4xRMSQqI%2BoFZ0Zs%2FaMLumqMMGOqUBaZAke8PElN2rI2rvspLjGGDW%2B5G9CVACQ0Ie1PEThKgVbkWnmo57fvTG62h7XfI577dTeEaH5ZOP2PUEhpW%2FvBAHWlRdz78giLtOpFvquqw1%2BEgB1z2VO3YOjx4PJ7Y4%2B6Ntq97ZJ8Dox6iN%2FldrNuSHtTxfF4FbZsIFMYpnKruvrihwjBThjqCZ1KgVPR7lZ8zYOIE2Ub1ejIVtMvo6Gmowc%2FmX&X-Amz-Signature=b930337e62c00b74d9a64a61c13bfe08c2d9de2034044415f0fed77ebb2acf47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPWHPKO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGmB6In7EdWw3wDk1zwJ%2FqFtoq6jm18%2FrhDZwv3kN70kAiEAi0F9tfWuepefn0k4FonnZPv1Sq2QBXL7jQ4q1aQjHvQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDETmPOba%2FuHSWaUMEircA5e0S4b%2BXl9lIwjA0F%2B8Jf40ryoV93R9XFNBsUTXIuYqv3twrwRJxfZGbTfKPU97yo3Y5AGKIVmahI%2FBun24sOhvCQ5xgXC7myVRT8yq58eFCX3bd08MBwVJMdXQrfZvVnWRppA6d9LaJSM2TNeJay0%2F4CV1pp4scsRoVzLfGzau2NBWeUYfQExdN5zafPJFGxXOKpXesY9TkrYxDxH7DtTFa%2FT4Hw5DyZVKkoZoIO7OQGrUlCq1bIih7WisrnkJvcffQQD4BAcLTchup%2FKaJL%2BqIaYgheIyC%2BQhX%2BUNVn0StFOJ82j1fiv7Gx2M8XrbPOu%2F0BWU6Xk069pnRny7LaA8dAqasQCSItAmb9WBbKLqWvOz4bC%2BcXDYVaEiVrki7XLLSEfX%2BEebVVw1D%2FOhsU%2BEfNjTtJ0hIwcxhywwntPvDU7B8tSEQ4RmwAJXr98V0vsvrAsQhUj7IczJIGmIepP2%2Fw0m9CEODO6dDkwElo5CqS57Ib9Q3abFSWfeaOBW%2Fu0na%2BWUKvqxeyVv9rlWt0laKkNfbpeBOTbkxtFP3VBM7Y4ehHnBdEJC40dM24MvoHbV0ji3%2FXmxgQl6oBkJpoPejAaDw%2FK4Ld%2FGHECRUNg4xRMSQqI%2BoFZ0Zs%2FaMLumqMMGOqUBaZAke8PElN2rI2rvspLjGGDW%2B5G9CVACQ0Ie1PEThKgVbkWnmo57fvTG62h7XfI577dTeEaH5ZOP2PUEhpW%2FvBAHWlRdz78giLtOpFvquqw1%2BEgB1z2VO3YOjx4PJ7Y4%2B6Ntq97ZJ8Dox6iN%2FldrNuSHtTxfF4FbZsIFMYpnKruvrihwjBThjqCZ1KgVPR7lZ8zYOIE2Ub1ejIVtMvo6Gmowc%2FmX&X-Amz-Signature=625250027858bd086d994f439171dbb6e1c2ea227c4bb8ce21ef94cb8f080cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPWHPKO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGmB6In7EdWw3wDk1zwJ%2FqFtoq6jm18%2FrhDZwv3kN70kAiEAi0F9tfWuepefn0k4FonnZPv1Sq2QBXL7jQ4q1aQjHvQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDETmPOba%2FuHSWaUMEircA5e0S4b%2BXl9lIwjA0F%2B8Jf40ryoV93R9XFNBsUTXIuYqv3twrwRJxfZGbTfKPU97yo3Y5AGKIVmahI%2FBun24sOhvCQ5xgXC7myVRT8yq58eFCX3bd08MBwVJMdXQrfZvVnWRppA6d9LaJSM2TNeJay0%2F4CV1pp4scsRoVzLfGzau2NBWeUYfQExdN5zafPJFGxXOKpXesY9TkrYxDxH7DtTFa%2FT4Hw5DyZVKkoZoIO7OQGrUlCq1bIih7WisrnkJvcffQQD4BAcLTchup%2FKaJL%2BqIaYgheIyC%2BQhX%2BUNVn0StFOJ82j1fiv7Gx2M8XrbPOu%2F0BWU6Xk069pnRny7LaA8dAqasQCSItAmb9WBbKLqWvOz4bC%2BcXDYVaEiVrki7XLLSEfX%2BEebVVw1D%2FOhsU%2BEfNjTtJ0hIwcxhywwntPvDU7B8tSEQ4RmwAJXr98V0vsvrAsQhUj7IczJIGmIepP2%2Fw0m9CEODO6dDkwElo5CqS57Ib9Q3abFSWfeaOBW%2Fu0na%2BWUKvqxeyVv9rlWt0laKkNfbpeBOTbkxtFP3VBM7Y4ehHnBdEJC40dM24MvoHbV0ji3%2FXmxgQl6oBkJpoPejAaDw%2FK4Ld%2FGHECRUNg4xRMSQqI%2BoFZ0Zs%2FaMLumqMMGOqUBaZAke8PElN2rI2rvspLjGGDW%2B5G9CVACQ0Ie1PEThKgVbkWnmo57fvTG62h7XfI577dTeEaH5ZOP2PUEhpW%2FvBAHWlRdz78giLtOpFvquqw1%2BEgB1z2VO3YOjx4PJ7Y4%2B6Ntq97ZJ8Dox6iN%2FldrNuSHtTxfF4FbZsIFMYpnKruvrihwjBThjqCZ1KgVPR7lZ8zYOIE2Ub1ejIVtMvo6Gmowc%2FmX&X-Amz-Signature=8e8190db62dc32cfb9b236687a9e30da07822ec2bbf7c42dff97ea0b0aea0dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPWHPKO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGmB6In7EdWw3wDk1zwJ%2FqFtoq6jm18%2FrhDZwv3kN70kAiEAi0F9tfWuepefn0k4FonnZPv1Sq2QBXL7jQ4q1aQjHvQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDETmPOba%2FuHSWaUMEircA5e0S4b%2BXl9lIwjA0F%2B8Jf40ryoV93R9XFNBsUTXIuYqv3twrwRJxfZGbTfKPU97yo3Y5AGKIVmahI%2FBun24sOhvCQ5xgXC7myVRT8yq58eFCX3bd08MBwVJMdXQrfZvVnWRppA6d9LaJSM2TNeJay0%2F4CV1pp4scsRoVzLfGzau2NBWeUYfQExdN5zafPJFGxXOKpXesY9TkrYxDxH7DtTFa%2FT4Hw5DyZVKkoZoIO7OQGrUlCq1bIih7WisrnkJvcffQQD4BAcLTchup%2FKaJL%2BqIaYgheIyC%2BQhX%2BUNVn0StFOJ82j1fiv7Gx2M8XrbPOu%2F0BWU6Xk069pnRny7LaA8dAqasQCSItAmb9WBbKLqWvOz4bC%2BcXDYVaEiVrki7XLLSEfX%2BEebVVw1D%2FOhsU%2BEfNjTtJ0hIwcxhywwntPvDU7B8tSEQ4RmwAJXr98V0vsvrAsQhUj7IczJIGmIepP2%2Fw0m9CEODO6dDkwElo5CqS57Ib9Q3abFSWfeaOBW%2Fu0na%2BWUKvqxeyVv9rlWt0laKkNfbpeBOTbkxtFP3VBM7Y4ehHnBdEJC40dM24MvoHbV0ji3%2FXmxgQl6oBkJpoPejAaDw%2FK4Ld%2FGHECRUNg4xRMSQqI%2BoFZ0Zs%2FaMLumqMMGOqUBaZAke8PElN2rI2rvspLjGGDW%2B5G9CVACQ0Ie1PEThKgVbkWnmo57fvTG62h7XfI577dTeEaH5ZOP2PUEhpW%2FvBAHWlRdz78giLtOpFvquqw1%2BEgB1z2VO3YOjx4PJ7Y4%2B6Ntq97ZJ8Dox6iN%2FldrNuSHtTxfF4FbZsIFMYpnKruvrihwjBThjqCZ1KgVPR7lZ8zYOIE2Ub1ejIVtMvo6Gmowc%2FmX&X-Amz-Signature=90ce09b1ac3771bc349fff62e4568a2a11596b70c34401e5f708ab7e20d0028b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPWHPKO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGmB6In7EdWw3wDk1zwJ%2FqFtoq6jm18%2FrhDZwv3kN70kAiEAi0F9tfWuepefn0k4FonnZPv1Sq2QBXL7jQ4q1aQjHvQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDETmPOba%2FuHSWaUMEircA5e0S4b%2BXl9lIwjA0F%2B8Jf40ryoV93R9XFNBsUTXIuYqv3twrwRJxfZGbTfKPU97yo3Y5AGKIVmahI%2FBun24sOhvCQ5xgXC7myVRT8yq58eFCX3bd08MBwVJMdXQrfZvVnWRppA6d9LaJSM2TNeJay0%2F4CV1pp4scsRoVzLfGzau2NBWeUYfQExdN5zafPJFGxXOKpXesY9TkrYxDxH7DtTFa%2FT4Hw5DyZVKkoZoIO7OQGrUlCq1bIih7WisrnkJvcffQQD4BAcLTchup%2FKaJL%2BqIaYgheIyC%2BQhX%2BUNVn0StFOJ82j1fiv7Gx2M8XrbPOu%2F0BWU6Xk069pnRny7LaA8dAqasQCSItAmb9WBbKLqWvOz4bC%2BcXDYVaEiVrki7XLLSEfX%2BEebVVw1D%2FOhsU%2BEfNjTtJ0hIwcxhywwntPvDU7B8tSEQ4RmwAJXr98V0vsvrAsQhUj7IczJIGmIepP2%2Fw0m9CEODO6dDkwElo5CqS57Ib9Q3abFSWfeaOBW%2Fu0na%2BWUKvqxeyVv9rlWt0laKkNfbpeBOTbkxtFP3VBM7Y4ehHnBdEJC40dM24MvoHbV0ji3%2FXmxgQl6oBkJpoPejAaDw%2FK4Ld%2FGHECRUNg4xRMSQqI%2BoFZ0Zs%2FaMLumqMMGOqUBaZAke8PElN2rI2rvspLjGGDW%2B5G9CVACQ0Ie1PEThKgVbkWnmo57fvTG62h7XfI577dTeEaH5ZOP2PUEhpW%2FvBAHWlRdz78giLtOpFvquqw1%2BEgB1z2VO3YOjx4PJ7Y4%2B6Ntq97ZJ8Dox6iN%2FldrNuSHtTxfF4FbZsIFMYpnKruvrihwjBThjqCZ1KgVPR7lZ8zYOIE2Ub1ejIVtMvo6Gmowc%2FmX&X-Amz-Signature=eaee15edf343bf3b99d59d5767ace1ed3c3e32219eb3c81ccf304af756639a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPWHPKO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGmB6In7EdWw3wDk1zwJ%2FqFtoq6jm18%2FrhDZwv3kN70kAiEAi0F9tfWuepefn0k4FonnZPv1Sq2QBXL7jQ4q1aQjHvQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDETmPOba%2FuHSWaUMEircA5e0S4b%2BXl9lIwjA0F%2B8Jf40ryoV93R9XFNBsUTXIuYqv3twrwRJxfZGbTfKPU97yo3Y5AGKIVmahI%2FBun24sOhvCQ5xgXC7myVRT8yq58eFCX3bd08MBwVJMdXQrfZvVnWRppA6d9LaJSM2TNeJay0%2F4CV1pp4scsRoVzLfGzau2NBWeUYfQExdN5zafPJFGxXOKpXesY9TkrYxDxH7DtTFa%2FT4Hw5DyZVKkoZoIO7OQGrUlCq1bIih7WisrnkJvcffQQD4BAcLTchup%2FKaJL%2BqIaYgheIyC%2BQhX%2BUNVn0StFOJ82j1fiv7Gx2M8XrbPOu%2F0BWU6Xk069pnRny7LaA8dAqasQCSItAmb9WBbKLqWvOz4bC%2BcXDYVaEiVrki7XLLSEfX%2BEebVVw1D%2FOhsU%2BEfNjTtJ0hIwcxhywwntPvDU7B8tSEQ4RmwAJXr98V0vsvrAsQhUj7IczJIGmIepP2%2Fw0m9CEODO6dDkwElo5CqS57Ib9Q3abFSWfeaOBW%2Fu0na%2BWUKvqxeyVv9rlWt0laKkNfbpeBOTbkxtFP3VBM7Y4ehHnBdEJC40dM24MvoHbV0ji3%2FXmxgQl6oBkJpoPejAaDw%2FK4Ld%2FGHECRUNg4xRMSQqI%2BoFZ0Zs%2FaMLumqMMGOqUBaZAke8PElN2rI2rvspLjGGDW%2B5G9CVACQ0Ie1PEThKgVbkWnmo57fvTG62h7XfI577dTeEaH5ZOP2PUEhpW%2FvBAHWlRdz78giLtOpFvquqw1%2BEgB1z2VO3YOjx4PJ7Y4%2B6Ntq97ZJ8Dox6iN%2FldrNuSHtTxfF4FbZsIFMYpnKruvrihwjBThjqCZ1KgVPR7lZ8zYOIE2Ub1ejIVtMvo6Gmowc%2FmX&X-Amz-Signature=57930494c27711541ac4fcdc4bf643ca3913eba6a9b7e363f0b6cfadd3245881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPWHPKO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGmB6In7EdWw3wDk1zwJ%2FqFtoq6jm18%2FrhDZwv3kN70kAiEAi0F9tfWuepefn0k4FonnZPv1Sq2QBXL7jQ4q1aQjHvQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDETmPOba%2FuHSWaUMEircA5e0S4b%2BXl9lIwjA0F%2B8Jf40ryoV93R9XFNBsUTXIuYqv3twrwRJxfZGbTfKPU97yo3Y5AGKIVmahI%2FBun24sOhvCQ5xgXC7myVRT8yq58eFCX3bd08MBwVJMdXQrfZvVnWRppA6d9LaJSM2TNeJay0%2F4CV1pp4scsRoVzLfGzau2NBWeUYfQExdN5zafPJFGxXOKpXesY9TkrYxDxH7DtTFa%2FT4Hw5DyZVKkoZoIO7OQGrUlCq1bIih7WisrnkJvcffQQD4BAcLTchup%2FKaJL%2BqIaYgheIyC%2BQhX%2BUNVn0StFOJ82j1fiv7Gx2M8XrbPOu%2F0BWU6Xk069pnRny7LaA8dAqasQCSItAmb9WBbKLqWvOz4bC%2BcXDYVaEiVrki7XLLSEfX%2BEebVVw1D%2FOhsU%2BEfNjTtJ0hIwcxhywwntPvDU7B8tSEQ4RmwAJXr98V0vsvrAsQhUj7IczJIGmIepP2%2Fw0m9CEODO6dDkwElo5CqS57Ib9Q3abFSWfeaOBW%2Fu0na%2BWUKvqxeyVv9rlWt0laKkNfbpeBOTbkxtFP3VBM7Y4ehHnBdEJC40dM24MvoHbV0ji3%2FXmxgQl6oBkJpoPejAaDw%2FK4Ld%2FGHECRUNg4xRMSQqI%2BoFZ0Zs%2FaMLumqMMGOqUBaZAke8PElN2rI2rvspLjGGDW%2B5G9CVACQ0Ie1PEThKgVbkWnmo57fvTG62h7XfI577dTeEaH5ZOP2PUEhpW%2FvBAHWlRdz78giLtOpFvquqw1%2BEgB1z2VO3YOjx4PJ7Y4%2B6Ntq97ZJ8Dox6iN%2FldrNuSHtTxfF4FbZsIFMYpnKruvrihwjBThjqCZ1KgVPR7lZ8zYOIE2Ub1ejIVtMvo6Gmowc%2FmX&X-Amz-Signature=84fe39c867d7a02d980e9f6b67808ecbda64827947827b5bffc8e9718fa767f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
