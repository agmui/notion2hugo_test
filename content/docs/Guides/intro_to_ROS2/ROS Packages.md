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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGQO4P7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeSoOLzwDI3IjHDGsuVZP%2BL2RfV8J%2FhKn%2FlsPeacayKAiEA%2By9ndeg0T4XCcEqZXdzyS2YpQ13rKbtT0yaanHo54qMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCJk9gGiQQqFAQhHGyrcA2WaTQV8hVe3V5BjU%2BClEpqvLVVrJW8Q0moZC%2BBRs50Mo4prwybqxKUwwK%2BGMi8MkBKb9P0udMruYOzpop7x0DmCWzuUe9pGMLcJS4DdBvqEJrZ4RFd3ZbGmxF5aaBQ3EjKPh1qgJ5QWoed3omharCT38MAAXoTioXBP%2FWvFyJVhizW5HNY3AsIeg90gFT4WpKLdvdBWHy8GQ46oBrrTSPoEFOxo6INwlFMrzDjxjeeJIDJR4s%2FWMAfOrVkHSk0f8R6toEjrCtA5FpPPfijYAQ0ojZOGJoU994kINLVmkaQXr1kBQM3vDW2Hi66rcOGtr8y%2BSTM1AtGNzzx4JCWf8opXWiQ%2BoMFgtetD7iHMAQooOrolWo1xejZhV5LcWj1eNMym20dpmH%2B7SacwxOWRLqn9BWqjoID9Y6Ywl2UUkeMB0bzT%2FvbVF7E0Ex%2FmESvWijeeSmEypFhbzxKWvF8XOAsgdtOGOMX55not94fRt3MNN9ImRihsE8ylZ9InQSnMDTao55N7v9nzdvRRkEcq1OdbZlBuEC%2FbujRpOe05Z83d6WVEdGGbfyE2DnlcK3pAJg4VM4VL%2BX0PWiGmDHANvdbUES9oRi4O35K8H1Zpj8yVrUD2Ur0vZdQMo3NMMJyRpMEGOqUBMBQj6O8MZ%2Fqs1iqqQ1GZgPqHDLLfvZLBT7avV34ta0jxqCJZTG8slcfVTamyLMSZV7dNYZnwtSH78zdYat0qSREK9mP48XuZHImPdb9aBrAtrxa1Bm2UILBYePwpMoHJym1V%2FyKszQrX0w7dgLsZr4f8%2FFxUbI5sW0ECsR16Is4XmuU014sZi9SdQvDJLV1DWkk%2FBGxQzBEHOvtOdEqBQfaVWRj4&X-Amz-Signature=984f7ac7a9200623303de35b71d62717c25b511858924c9bda93ad7374249933&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGQO4P7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeSoOLzwDI3IjHDGsuVZP%2BL2RfV8J%2FhKn%2FlsPeacayKAiEA%2By9ndeg0T4XCcEqZXdzyS2YpQ13rKbtT0yaanHo54qMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCJk9gGiQQqFAQhHGyrcA2WaTQV8hVe3V5BjU%2BClEpqvLVVrJW8Q0moZC%2BBRs50Mo4prwybqxKUwwK%2BGMi8MkBKb9P0udMruYOzpop7x0DmCWzuUe9pGMLcJS4DdBvqEJrZ4RFd3ZbGmxF5aaBQ3EjKPh1qgJ5QWoed3omharCT38MAAXoTioXBP%2FWvFyJVhizW5HNY3AsIeg90gFT4WpKLdvdBWHy8GQ46oBrrTSPoEFOxo6INwlFMrzDjxjeeJIDJR4s%2FWMAfOrVkHSk0f8R6toEjrCtA5FpPPfijYAQ0ojZOGJoU994kINLVmkaQXr1kBQM3vDW2Hi66rcOGtr8y%2BSTM1AtGNzzx4JCWf8opXWiQ%2BoMFgtetD7iHMAQooOrolWo1xejZhV5LcWj1eNMym20dpmH%2B7SacwxOWRLqn9BWqjoID9Y6Ywl2UUkeMB0bzT%2FvbVF7E0Ex%2FmESvWijeeSmEypFhbzxKWvF8XOAsgdtOGOMX55not94fRt3MNN9ImRihsE8ylZ9InQSnMDTao55N7v9nzdvRRkEcq1OdbZlBuEC%2FbujRpOe05Z83d6WVEdGGbfyE2DnlcK3pAJg4VM4VL%2BX0PWiGmDHANvdbUES9oRi4O35K8H1Zpj8yVrUD2Ur0vZdQMo3NMMJyRpMEGOqUBMBQj6O8MZ%2Fqs1iqqQ1GZgPqHDLLfvZLBT7avV34ta0jxqCJZTG8slcfVTamyLMSZV7dNYZnwtSH78zdYat0qSREK9mP48XuZHImPdb9aBrAtrxa1Bm2UILBYePwpMoHJym1V%2FyKszQrX0w7dgLsZr4f8%2FFxUbI5sW0ECsR16Is4XmuU014sZi9SdQvDJLV1DWkk%2FBGxQzBEHOvtOdEqBQfaVWRj4&X-Amz-Signature=e59ed55591bdf08655d7b850eda08c492f9dfd6ccaf0a322a7ffc425c75eae0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGQO4P7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeSoOLzwDI3IjHDGsuVZP%2BL2RfV8J%2FhKn%2FlsPeacayKAiEA%2By9ndeg0T4XCcEqZXdzyS2YpQ13rKbtT0yaanHo54qMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCJk9gGiQQqFAQhHGyrcA2WaTQV8hVe3V5BjU%2BClEpqvLVVrJW8Q0moZC%2BBRs50Mo4prwybqxKUwwK%2BGMi8MkBKb9P0udMruYOzpop7x0DmCWzuUe9pGMLcJS4DdBvqEJrZ4RFd3ZbGmxF5aaBQ3EjKPh1qgJ5QWoed3omharCT38MAAXoTioXBP%2FWvFyJVhizW5HNY3AsIeg90gFT4WpKLdvdBWHy8GQ46oBrrTSPoEFOxo6INwlFMrzDjxjeeJIDJR4s%2FWMAfOrVkHSk0f8R6toEjrCtA5FpPPfijYAQ0ojZOGJoU994kINLVmkaQXr1kBQM3vDW2Hi66rcOGtr8y%2BSTM1AtGNzzx4JCWf8opXWiQ%2BoMFgtetD7iHMAQooOrolWo1xejZhV5LcWj1eNMym20dpmH%2B7SacwxOWRLqn9BWqjoID9Y6Ywl2UUkeMB0bzT%2FvbVF7E0Ex%2FmESvWijeeSmEypFhbzxKWvF8XOAsgdtOGOMX55not94fRt3MNN9ImRihsE8ylZ9InQSnMDTao55N7v9nzdvRRkEcq1OdbZlBuEC%2FbujRpOe05Z83d6WVEdGGbfyE2DnlcK3pAJg4VM4VL%2BX0PWiGmDHANvdbUES9oRi4O35K8H1Zpj8yVrUD2Ur0vZdQMo3NMMJyRpMEGOqUBMBQj6O8MZ%2Fqs1iqqQ1GZgPqHDLLfvZLBT7avV34ta0jxqCJZTG8slcfVTamyLMSZV7dNYZnwtSH78zdYat0qSREK9mP48XuZHImPdb9aBrAtrxa1Bm2UILBYePwpMoHJym1V%2FyKszQrX0w7dgLsZr4f8%2FFxUbI5sW0ECsR16Is4XmuU014sZi9SdQvDJLV1DWkk%2FBGxQzBEHOvtOdEqBQfaVWRj4&X-Amz-Signature=8bf94b03faa18d6d03302bdb3f48fe7403527d72dd9fac7e05fcafb79080dffb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGQO4P7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeSoOLzwDI3IjHDGsuVZP%2BL2RfV8J%2FhKn%2FlsPeacayKAiEA%2By9ndeg0T4XCcEqZXdzyS2YpQ13rKbtT0yaanHo54qMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCJk9gGiQQqFAQhHGyrcA2WaTQV8hVe3V5BjU%2BClEpqvLVVrJW8Q0moZC%2BBRs50Mo4prwybqxKUwwK%2BGMi8MkBKb9P0udMruYOzpop7x0DmCWzuUe9pGMLcJS4DdBvqEJrZ4RFd3ZbGmxF5aaBQ3EjKPh1qgJ5QWoed3omharCT38MAAXoTioXBP%2FWvFyJVhizW5HNY3AsIeg90gFT4WpKLdvdBWHy8GQ46oBrrTSPoEFOxo6INwlFMrzDjxjeeJIDJR4s%2FWMAfOrVkHSk0f8R6toEjrCtA5FpPPfijYAQ0ojZOGJoU994kINLVmkaQXr1kBQM3vDW2Hi66rcOGtr8y%2BSTM1AtGNzzx4JCWf8opXWiQ%2BoMFgtetD7iHMAQooOrolWo1xejZhV5LcWj1eNMym20dpmH%2B7SacwxOWRLqn9BWqjoID9Y6Ywl2UUkeMB0bzT%2FvbVF7E0Ex%2FmESvWijeeSmEypFhbzxKWvF8XOAsgdtOGOMX55not94fRt3MNN9ImRihsE8ylZ9InQSnMDTao55N7v9nzdvRRkEcq1OdbZlBuEC%2FbujRpOe05Z83d6WVEdGGbfyE2DnlcK3pAJg4VM4VL%2BX0PWiGmDHANvdbUES9oRi4O35K8H1Zpj8yVrUD2Ur0vZdQMo3NMMJyRpMEGOqUBMBQj6O8MZ%2Fqs1iqqQ1GZgPqHDLLfvZLBT7avV34ta0jxqCJZTG8slcfVTamyLMSZV7dNYZnwtSH78zdYat0qSREK9mP48XuZHImPdb9aBrAtrxa1Bm2UILBYePwpMoHJym1V%2FyKszQrX0w7dgLsZr4f8%2FFxUbI5sW0ECsR16Is4XmuU014sZi9SdQvDJLV1DWkk%2FBGxQzBEHOvtOdEqBQfaVWRj4&X-Amz-Signature=620e11a126800dd1999104103918cdb13cd18f887ec08733d35f9bf549680be9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGQO4P7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeSoOLzwDI3IjHDGsuVZP%2BL2RfV8J%2FhKn%2FlsPeacayKAiEA%2By9ndeg0T4XCcEqZXdzyS2YpQ13rKbtT0yaanHo54qMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCJk9gGiQQqFAQhHGyrcA2WaTQV8hVe3V5BjU%2BClEpqvLVVrJW8Q0moZC%2BBRs50Mo4prwybqxKUwwK%2BGMi8MkBKb9P0udMruYOzpop7x0DmCWzuUe9pGMLcJS4DdBvqEJrZ4RFd3ZbGmxF5aaBQ3EjKPh1qgJ5QWoed3omharCT38MAAXoTioXBP%2FWvFyJVhizW5HNY3AsIeg90gFT4WpKLdvdBWHy8GQ46oBrrTSPoEFOxo6INwlFMrzDjxjeeJIDJR4s%2FWMAfOrVkHSk0f8R6toEjrCtA5FpPPfijYAQ0ojZOGJoU994kINLVmkaQXr1kBQM3vDW2Hi66rcOGtr8y%2BSTM1AtGNzzx4JCWf8opXWiQ%2BoMFgtetD7iHMAQooOrolWo1xejZhV5LcWj1eNMym20dpmH%2B7SacwxOWRLqn9BWqjoID9Y6Ywl2UUkeMB0bzT%2FvbVF7E0Ex%2FmESvWijeeSmEypFhbzxKWvF8XOAsgdtOGOMX55not94fRt3MNN9ImRihsE8ylZ9InQSnMDTao55N7v9nzdvRRkEcq1OdbZlBuEC%2FbujRpOe05Z83d6WVEdGGbfyE2DnlcK3pAJg4VM4VL%2BX0PWiGmDHANvdbUES9oRi4O35K8H1Zpj8yVrUD2Ur0vZdQMo3NMMJyRpMEGOqUBMBQj6O8MZ%2Fqs1iqqQ1GZgPqHDLLfvZLBT7avV34ta0jxqCJZTG8slcfVTamyLMSZV7dNYZnwtSH78zdYat0qSREK9mP48XuZHImPdb9aBrAtrxa1Bm2UILBYePwpMoHJym1V%2FyKszQrX0w7dgLsZr4f8%2FFxUbI5sW0ECsR16Is4XmuU014sZi9SdQvDJLV1DWkk%2FBGxQzBEHOvtOdEqBQfaVWRj4&X-Amz-Signature=9ebf8ebef95941b980c5da0aebbc9b173c6fa724247ad4258632e629fa408b42&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGQO4P7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeSoOLzwDI3IjHDGsuVZP%2BL2RfV8J%2FhKn%2FlsPeacayKAiEA%2By9ndeg0T4XCcEqZXdzyS2YpQ13rKbtT0yaanHo54qMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCJk9gGiQQqFAQhHGyrcA2WaTQV8hVe3V5BjU%2BClEpqvLVVrJW8Q0moZC%2BBRs50Mo4prwybqxKUwwK%2BGMi8MkBKb9P0udMruYOzpop7x0DmCWzuUe9pGMLcJS4DdBvqEJrZ4RFd3ZbGmxF5aaBQ3EjKPh1qgJ5QWoed3omharCT38MAAXoTioXBP%2FWvFyJVhizW5HNY3AsIeg90gFT4WpKLdvdBWHy8GQ46oBrrTSPoEFOxo6INwlFMrzDjxjeeJIDJR4s%2FWMAfOrVkHSk0f8R6toEjrCtA5FpPPfijYAQ0ojZOGJoU994kINLVmkaQXr1kBQM3vDW2Hi66rcOGtr8y%2BSTM1AtGNzzx4JCWf8opXWiQ%2BoMFgtetD7iHMAQooOrolWo1xejZhV5LcWj1eNMym20dpmH%2B7SacwxOWRLqn9BWqjoID9Y6Ywl2UUkeMB0bzT%2FvbVF7E0Ex%2FmESvWijeeSmEypFhbzxKWvF8XOAsgdtOGOMX55not94fRt3MNN9ImRihsE8ylZ9InQSnMDTao55N7v9nzdvRRkEcq1OdbZlBuEC%2FbujRpOe05Z83d6WVEdGGbfyE2DnlcK3pAJg4VM4VL%2BX0PWiGmDHANvdbUES9oRi4O35K8H1Zpj8yVrUD2Ur0vZdQMo3NMMJyRpMEGOqUBMBQj6O8MZ%2Fqs1iqqQ1GZgPqHDLLfvZLBT7avV34ta0jxqCJZTG8slcfVTamyLMSZV7dNYZnwtSH78zdYat0qSREK9mP48XuZHImPdb9aBrAtrxa1Bm2UILBYePwpMoHJym1V%2FyKszQrX0w7dgLsZr4f8%2FFxUbI5sW0ECsR16Is4XmuU014sZi9SdQvDJLV1DWkk%2FBGxQzBEHOvtOdEqBQfaVWRj4&X-Amz-Signature=a11aa28b3b1959b325dd281cd3e5599b39c5e77de028941a528d5d5787876844&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGQO4P7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeSoOLzwDI3IjHDGsuVZP%2BL2RfV8J%2FhKn%2FlsPeacayKAiEA%2By9ndeg0T4XCcEqZXdzyS2YpQ13rKbtT0yaanHo54qMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCJk9gGiQQqFAQhHGyrcA2WaTQV8hVe3V5BjU%2BClEpqvLVVrJW8Q0moZC%2BBRs50Mo4prwybqxKUwwK%2BGMi8MkBKb9P0udMruYOzpop7x0DmCWzuUe9pGMLcJS4DdBvqEJrZ4RFd3ZbGmxF5aaBQ3EjKPh1qgJ5QWoed3omharCT38MAAXoTioXBP%2FWvFyJVhizW5HNY3AsIeg90gFT4WpKLdvdBWHy8GQ46oBrrTSPoEFOxo6INwlFMrzDjxjeeJIDJR4s%2FWMAfOrVkHSk0f8R6toEjrCtA5FpPPfijYAQ0ojZOGJoU994kINLVmkaQXr1kBQM3vDW2Hi66rcOGtr8y%2BSTM1AtGNzzx4JCWf8opXWiQ%2BoMFgtetD7iHMAQooOrolWo1xejZhV5LcWj1eNMym20dpmH%2B7SacwxOWRLqn9BWqjoID9Y6Ywl2UUkeMB0bzT%2FvbVF7E0Ex%2FmESvWijeeSmEypFhbzxKWvF8XOAsgdtOGOMX55not94fRt3MNN9ImRihsE8ylZ9InQSnMDTao55N7v9nzdvRRkEcq1OdbZlBuEC%2FbujRpOe05Z83d6WVEdGGbfyE2DnlcK3pAJg4VM4VL%2BX0PWiGmDHANvdbUES9oRi4O35K8H1Zpj8yVrUD2Ur0vZdQMo3NMMJyRpMEGOqUBMBQj6O8MZ%2Fqs1iqqQ1GZgPqHDLLfvZLBT7avV34ta0jxqCJZTG8slcfVTamyLMSZV7dNYZnwtSH78zdYat0qSREK9mP48XuZHImPdb9aBrAtrxa1Bm2UILBYePwpMoHJym1V%2FyKszQrX0w7dgLsZr4f8%2FFxUbI5sW0ECsR16Is4XmuU014sZi9SdQvDJLV1DWkk%2FBGxQzBEHOvtOdEqBQfaVWRj4&X-Amz-Signature=de812c453d15f420c501f008a3d7fb8bfc9ca620c30ec7f52cda05c4db626f41&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
