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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6HH3XN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4neBMzQGCtfJqo0w2RoCCn9Cm6Fnt5A1ggP5cr%2B9%2BxAiAkRz%2FMSIyi2nhj3NJgOH5U7Fdr87BCX1FTKiN28pzJeyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMx2FQAOcURRfBudieKtwDYp1dF6m0TsqbyaGiFKB1zT1wBCAzV%2BPUnG%2Bl2RCEGJMQW8CMSAYTSzJafzTBW0obyqbMBYFc7I3X0aKc4yw4E8LHEMDTIDRwio1mLGqTJO6%2FE5UN72kuT6Wi54HeOj1fshGoEw%2B%2FBETkvv5HcTobA%2FeKLUjXePlt157ws8AWQcxsCHlTCiw1UUYd746%2Bt46FBGLhCwkCdLsX%2FTzVkEEhU2pTBllqbGXx7rxqs8hVQ6JY3Ci2yjaC7522q3ylcjpcMacud9h3y0GpPqq6R9hBSmhSAeAE%2BdNELehjLjFuUWo8ntveoZsSA4vDFwUhMfbS%2BCai6rTfyVx3BHSSucrZdJL9TQNveBkGikd1A1go%2BudvsUCyUJM1AkCZn1F8FXsyA70hmiTWwZ2SqAyFWfG%2FePHU32pbx9xGB9F0ykiskb9Q1ZExN3GxQLSWf2MBGKESnYZMLZJ%2BrO94BlhOYGgcU34DRtOJ72VCZCerpfyKStX5xpk53OivQ3%2B6G0U5mApBDwEUpxgAqfA6Q7gA9EMpYQtFWwqBNvGoFPbSGIuCZuqmXb2z8e4JrQ5D8hmP874%2Bn7uwBHLTiwQJJTKa4VsKR6gGh6SIgOeCpldswHh%2FSNZ9Y3KQvjvTRKjS0eIwhYfkvgY6pgG4nm9xN9s5u3RsP%2FrVstdiXgx9O%2FQBUoX8JSeDPoydWiSJzeFJXwz9w7mMDw5wMh0B4MYFpGOBCuu5MAaw9MP8h2TLi31r%2FVRdnfCN2MDSBG%2Bi0rUx7kwrktNAWRjFlm8gTnvvfsuRQ0i2xkfohAdha5wz%2FtfsCA0jHT95XxO%2FwVpf1g%2FeX%2F8ByVdMz7ECwIpOxAW31qdpLyVEEpyHRBFUi2jQ0sbi&X-Amz-Signature=619127fa8cb7c30123a4845d0d50190a959698390e1ed0ccd3705526c88cc42f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6HH3XN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4neBMzQGCtfJqo0w2RoCCn9Cm6Fnt5A1ggP5cr%2B9%2BxAiAkRz%2FMSIyi2nhj3NJgOH5U7Fdr87BCX1FTKiN28pzJeyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMx2FQAOcURRfBudieKtwDYp1dF6m0TsqbyaGiFKB1zT1wBCAzV%2BPUnG%2Bl2RCEGJMQW8CMSAYTSzJafzTBW0obyqbMBYFc7I3X0aKc4yw4E8LHEMDTIDRwio1mLGqTJO6%2FE5UN72kuT6Wi54HeOj1fshGoEw%2B%2FBETkvv5HcTobA%2FeKLUjXePlt157ws8AWQcxsCHlTCiw1UUYd746%2Bt46FBGLhCwkCdLsX%2FTzVkEEhU2pTBllqbGXx7rxqs8hVQ6JY3Ci2yjaC7522q3ylcjpcMacud9h3y0GpPqq6R9hBSmhSAeAE%2BdNELehjLjFuUWo8ntveoZsSA4vDFwUhMfbS%2BCai6rTfyVx3BHSSucrZdJL9TQNveBkGikd1A1go%2BudvsUCyUJM1AkCZn1F8FXsyA70hmiTWwZ2SqAyFWfG%2FePHU32pbx9xGB9F0ykiskb9Q1ZExN3GxQLSWf2MBGKESnYZMLZJ%2BrO94BlhOYGgcU34DRtOJ72VCZCerpfyKStX5xpk53OivQ3%2B6G0U5mApBDwEUpxgAqfA6Q7gA9EMpYQtFWwqBNvGoFPbSGIuCZuqmXb2z8e4JrQ5D8hmP874%2Bn7uwBHLTiwQJJTKa4VsKR6gGh6SIgOeCpldswHh%2FSNZ9Y3KQvjvTRKjS0eIwhYfkvgY6pgG4nm9xN9s5u3RsP%2FrVstdiXgx9O%2FQBUoX8JSeDPoydWiSJzeFJXwz9w7mMDw5wMh0B4MYFpGOBCuu5MAaw9MP8h2TLi31r%2FVRdnfCN2MDSBG%2Bi0rUx7kwrktNAWRjFlm8gTnvvfsuRQ0i2xkfohAdha5wz%2FtfsCA0jHT95XxO%2FwVpf1g%2FeX%2F8ByVdMz7ECwIpOxAW31qdpLyVEEpyHRBFUi2jQ0sbi&X-Amz-Signature=50cdbbaf1d1e79dd3c7b46c7b2ca2fd29694756b334999f559115037c374b7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6HH3XN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4neBMzQGCtfJqo0w2RoCCn9Cm6Fnt5A1ggP5cr%2B9%2BxAiAkRz%2FMSIyi2nhj3NJgOH5U7Fdr87BCX1FTKiN28pzJeyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMx2FQAOcURRfBudieKtwDYp1dF6m0TsqbyaGiFKB1zT1wBCAzV%2BPUnG%2Bl2RCEGJMQW8CMSAYTSzJafzTBW0obyqbMBYFc7I3X0aKc4yw4E8LHEMDTIDRwio1mLGqTJO6%2FE5UN72kuT6Wi54HeOj1fshGoEw%2B%2FBETkvv5HcTobA%2FeKLUjXePlt157ws8AWQcxsCHlTCiw1UUYd746%2Bt46FBGLhCwkCdLsX%2FTzVkEEhU2pTBllqbGXx7rxqs8hVQ6JY3Ci2yjaC7522q3ylcjpcMacud9h3y0GpPqq6R9hBSmhSAeAE%2BdNELehjLjFuUWo8ntveoZsSA4vDFwUhMfbS%2BCai6rTfyVx3BHSSucrZdJL9TQNveBkGikd1A1go%2BudvsUCyUJM1AkCZn1F8FXsyA70hmiTWwZ2SqAyFWfG%2FePHU32pbx9xGB9F0ykiskb9Q1ZExN3GxQLSWf2MBGKESnYZMLZJ%2BrO94BlhOYGgcU34DRtOJ72VCZCerpfyKStX5xpk53OivQ3%2B6G0U5mApBDwEUpxgAqfA6Q7gA9EMpYQtFWwqBNvGoFPbSGIuCZuqmXb2z8e4JrQ5D8hmP874%2Bn7uwBHLTiwQJJTKa4VsKR6gGh6SIgOeCpldswHh%2FSNZ9Y3KQvjvTRKjS0eIwhYfkvgY6pgG4nm9xN9s5u3RsP%2FrVstdiXgx9O%2FQBUoX8JSeDPoydWiSJzeFJXwz9w7mMDw5wMh0B4MYFpGOBCuu5MAaw9MP8h2TLi31r%2FVRdnfCN2MDSBG%2Bi0rUx7kwrktNAWRjFlm8gTnvvfsuRQ0i2xkfohAdha5wz%2FtfsCA0jHT95XxO%2FwVpf1g%2FeX%2F8ByVdMz7ECwIpOxAW31qdpLyVEEpyHRBFUi2jQ0sbi&X-Amz-Signature=0f190126c55393d24eaff5f3270d4e181a99e8c531cd7bb54a80f97df974960c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6HH3XN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4neBMzQGCtfJqo0w2RoCCn9Cm6Fnt5A1ggP5cr%2B9%2BxAiAkRz%2FMSIyi2nhj3NJgOH5U7Fdr87BCX1FTKiN28pzJeyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMx2FQAOcURRfBudieKtwDYp1dF6m0TsqbyaGiFKB1zT1wBCAzV%2BPUnG%2Bl2RCEGJMQW8CMSAYTSzJafzTBW0obyqbMBYFc7I3X0aKc4yw4E8LHEMDTIDRwio1mLGqTJO6%2FE5UN72kuT6Wi54HeOj1fshGoEw%2B%2FBETkvv5HcTobA%2FeKLUjXePlt157ws8AWQcxsCHlTCiw1UUYd746%2Bt46FBGLhCwkCdLsX%2FTzVkEEhU2pTBllqbGXx7rxqs8hVQ6JY3Ci2yjaC7522q3ylcjpcMacud9h3y0GpPqq6R9hBSmhSAeAE%2BdNELehjLjFuUWo8ntveoZsSA4vDFwUhMfbS%2BCai6rTfyVx3BHSSucrZdJL9TQNveBkGikd1A1go%2BudvsUCyUJM1AkCZn1F8FXsyA70hmiTWwZ2SqAyFWfG%2FePHU32pbx9xGB9F0ykiskb9Q1ZExN3GxQLSWf2MBGKESnYZMLZJ%2BrO94BlhOYGgcU34DRtOJ72VCZCerpfyKStX5xpk53OivQ3%2B6G0U5mApBDwEUpxgAqfA6Q7gA9EMpYQtFWwqBNvGoFPbSGIuCZuqmXb2z8e4JrQ5D8hmP874%2Bn7uwBHLTiwQJJTKa4VsKR6gGh6SIgOeCpldswHh%2FSNZ9Y3KQvjvTRKjS0eIwhYfkvgY6pgG4nm9xN9s5u3RsP%2FrVstdiXgx9O%2FQBUoX8JSeDPoydWiSJzeFJXwz9w7mMDw5wMh0B4MYFpGOBCuu5MAaw9MP8h2TLi31r%2FVRdnfCN2MDSBG%2Bi0rUx7kwrktNAWRjFlm8gTnvvfsuRQ0i2xkfohAdha5wz%2FtfsCA0jHT95XxO%2FwVpf1g%2FeX%2F8ByVdMz7ECwIpOxAW31qdpLyVEEpyHRBFUi2jQ0sbi&X-Amz-Signature=3ad5b9bc12e5ef404950b6e25f5f58857297ae3566af713bc689773c41478f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6HH3XN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4neBMzQGCtfJqo0w2RoCCn9Cm6Fnt5A1ggP5cr%2B9%2BxAiAkRz%2FMSIyi2nhj3NJgOH5U7Fdr87BCX1FTKiN28pzJeyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMx2FQAOcURRfBudieKtwDYp1dF6m0TsqbyaGiFKB1zT1wBCAzV%2BPUnG%2Bl2RCEGJMQW8CMSAYTSzJafzTBW0obyqbMBYFc7I3X0aKc4yw4E8LHEMDTIDRwio1mLGqTJO6%2FE5UN72kuT6Wi54HeOj1fshGoEw%2B%2FBETkvv5HcTobA%2FeKLUjXePlt157ws8AWQcxsCHlTCiw1UUYd746%2Bt46FBGLhCwkCdLsX%2FTzVkEEhU2pTBllqbGXx7rxqs8hVQ6JY3Ci2yjaC7522q3ylcjpcMacud9h3y0GpPqq6R9hBSmhSAeAE%2BdNELehjLjFuUWo8ntveoZsSA4vDFwUhMfbS%2BCai6rTfyVx3BHSSucrZdJL9TQNveBkGikd1A1go%2BudvsUCyUJM1AkCZn1F8FXsyA70hmiTWwZ2SqAyFWfG%2FePHU32pbx9xGB9F0ykiskb9Q1ZExN3GxQLSWf2MBGKESnYZMLZJ%2BrO94BlhOYGgcU34DRtOJ72VCZCerpfyKStX5xpk53OivQ3%2B6G0U5mApBDwEUpxgAqfA6Q7gA9EMpYQtFWwqBNvGoFPbSGIuCZuqmXb2z8e4JrQ5D8hmP874%2Bn7uwBHLTiwQJJTKa4VsKR6gGh6SIgOeCpldswHh%2FSNZ9Y3KQvjvTRKjS0eIwhYfkvgY6pgG4nm9xN9s5u3RsP%2FrVstdiXgx9O%2FQBUoX8JSeDPoydWiSJzeFJXwz9w7mMDw5wMh0B4MYFpGOBCuu5MAaw9MP8h2TLi31r%2FVRdnfCN2MDSBG%2Bi0rUx7kwrktNAWRjFlm8gTnvvfsuRQ0i2xkfohAdha5wz%2FtfsCA0jHT95XxO%2FwVpf1g%2FeX%2F8ByVdMz7ECwIpOxAW31qdpLyVEEpyHRBFUi2jQ0sbi&X-Amz-Signature=e197c5e55376bbc7d26c73b243244593287c3216afe0a4f47f774361e43a0bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6HH3XN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4neBMzQGCtfJqo0w2RoCCn9Cm6Fnt5A1ggP5cr%2B9%2BxAiAkRz%2FMSIyi2nhj3NJgOH5U7Fdr87BCX1FTKiN28pzJeyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMx2FQAOcURRfBudieKtwDYp1dF6m0TsqbyaGiFKB1zT1wBCAzV%2BPUnG%2Bl2RCEGJMQW8CMSAYTSzJafzTBW0obyqbMBYFc7I3X0aKc4yw4E8LHEMDTIDRwio1mLGqTJO6%2FE5UN72kuT6Wi54HeOj1fshGoEw%2B%2FBETkvv5HcTobA%2FeKLUjXePlt157ws8AWQcxsCHlTCiw1UUYd746%2Bt46FBGLhCwkCdLsX%2FTzVkEEhU2pTBllqbGXx7rxqs8hVQ6JY3Ci2yjaC7522q3ylcjpcMacud9h3y0GpPqq6R9hBSmhSAeAE%2BdNELehjLjFuUWo8ntveoZsSA4vDFwUhMfbS%2BCai6rTfyVx3BHSSucrZdJL9TQNveBkGikd1A1go%2BudvsUCyUJM1AkCZn1F8FXsyA70hmiTWwZ2SqAyFWfG%2FePHU32pbx9xGB9F0ykiskb9Q1ZExN3GxQLSWf2MBGKESnYZMLZJ%2BrO94BlhOYGgcU34DRtOJ72VCZCerpfyKStX5xpk53OivQ3%2B6G0U5mApBDwEUpxgAqfA6Q7gA9EMpYQtFWwqBNvGoFPbSGIuCZuqmXb2z8e4JrQ5D8hmP874%2Bn7uwBHLTiwQJJTKa4VsKR6gGh6SIgOeCpldswHh%2FSNZ9Y3KQvjvTRKjS0eIwhYfkvgY6pgG4nm9xN9s5u3RsP%2FrVstdiXgx9O%2FQBUoX8JSeDPoydWiSJzeFJXwz9w7mMDw5wMh0B4MYFpGOBCuu5MAaw9MP8h2TLi31r%2FVRdnfCN2MDSBG%2Bi0rUx7kwrktNAWRjFlm8gTnvvfsuRQ0i2xkfohAdha5wz%2FtfsCA0jHT95XxO%2FwVpf1g%2FeX%2F8ByVdMz7ECwIpOxAW31qdpLyVEEpyHRBFUi2jQ0sbi&X-Amz-Signature=d3a4cde8553c15f8a9ab331748b20bf037b52ee89ed1b509acfc72cffbe4c2d9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6HH3XN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4neBMzQGCtfJqo0w2RoCCn9Cm6Fnt5A1ggP5cr%2B9%2BxAiAkRz%2FMSIyi2nhj3NJgOH5U7Fdr87BCX1FTKiN28pzJeyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMx2FQAOcURRfBudieKtwDYp1dF6m0TsqbyaGiFKB1zT1wBCAzV%2BPUnG%2Bl2RCEGJMQW8CMSAYTSzJafzTBW0obyqbMBYFc7I3X0aKc4yw4E8LHEMDTIDRwio1mLGqTJO6%2FE5UN72kuT6Wi54HeOj1fshGoEw%2B%2FBETkvv5HcTobA%2FeKLUjXePlt157ws8AWQcxsCHlTCiw1UUYd746%2Bt46FBGLhCwkCdLsX%2FTzVkEEhU2pTBllqbGXx7rxqs8hVQ6JY3Ci2yjaC7522q3ylcjpcMacud9h3y0GpPqq6R9hBSmhSAeAE%2BdNELehjLjFuUWo8ntveoZsSA4vDFwUhMfbS%2BCai6rTfyVx3BHSSucrZdJL9TQNveBkGikd1A1go%2BudvsUCyUJM1AkCZn1F8FXsyA70hmiTWwZ2SqAyFWfG%2FePHU32pbx9xGB9F0ykiskb9Q1ZExN3GxQLSWf2MBGKESnYZMLZJ%2BrO94BlhOYGgcU34DRtOJ72VCZCerpfyKStX5xpk53OivQ3%2B6G0U5mApBDwEUpxgAqfA6Q7gA9EMpYQtFWwqBNvGoFPbSGIuCZuqmXb2z8e4JrQ5D8hmP874%2Bn7uwBHLTiwQJJTKa4VsKR6gGh6SIgOeCpldswHh%2FSNZ9Y3KQvjvTRKjS0eIwhYfkvgY6pgG4nm9xN9s5u3RsP%2FrVstdiXgx9O%2FQBUoX8JSeDPoydWiSJzeFJXwz9w7mMDw5wMh0B4MYFpGOBCuu5MAaw9MP8h2TLi31r%2FVRdnfCN2MDSBG%2Bi0rUx7kwrktNAWRjFlm8gTnvvfsuRQ0i2xkfohAdha5wz%2FtfsCA0jHT95XxO%2FwVpf1g%2FeX%2F8ByVdMz7ECwIpOxAW31qdpLyVEEpyHRBFUi2jQ0sbi&X-Amz-Signature=eebf9b497186aaa0fbc4b590d9607e79e29bdb680faac7e9ee16209491b128f3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
