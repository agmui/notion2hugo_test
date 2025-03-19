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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKUUNCI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCWLmJWjWscvEAhuB9i0JAZNG4ZUb5mbGwMHfJehe7lBQIhAPfPbnan9T5JoSLK3OMuWfBbcBu54YDlbjIUReZ9M20bKv8DCHYQABoMNjM3NDIzMTgzODA1IgzuwySedtBto3blGFgq3AOa9YC0Ls5FSd546JPtmi5pUrpFlD%2Fj0zPA%2Bz6jnV3Gm7tlxbAa3%2FRs%2BEWWC3F%2FIjOzBLRNMu2r9fd9lD31UifBpKRGThlTgqVFsGwFwXu%2Fs2Ch9EmmL1MS00a40XYGNq6M9XKDSmXPeUh6bvmGAqiA78%2F%2B2CAxIkU%2BzY7uQEJjDQwtJyt%2F0jDTCa4S40AKHYnu%2BLdCG%2BIRjuJYigteZVQbGQNwfHhDZ7qv7pGMOhkQ9q5D7EmNN0A3E%2FSfPOLzRrhstAeEIj0EXT1Xq%2B9z4UkpYGvYXz5W2y7Ksdtz22fS3YKou66LNgHWKPhHk%2BZS8vlbVe%2FNeCE3Ez0LiStDOvG%2F%2F4vidHF1J1TXELl27l%2FyiJMomb1mAbOXQAn%2FDJFL%2Bqn1qFhdq8aPG8MmefK9lqQmONZHboFWJHnLSOsmv2GYRTkt24V1cBvdK41KZ6dbhVcwhCmmyJbJs1%2FL6kmtXVQUH2WlbnuCogP8e1MdLPrYQ3sRnHX19WedFGu313Q%2BZsxlGTecBMR8yaUEBo0ULMfx5MHKIy8hRwv%2BnWr4zH6fiVILDSLtO5VJVwCBxC9aGWE20evyNQq7s2ZXq%2FFXmHL1cUxOWQ3%2FUM0ERF4v81PsfwGptohD3vK%2F%2BELCizCf%2F%2Bq%2BBjqkASnVn7MHHRKm3ODVdAsh6I6SHpOzXFTrf%2FwfJ3H8Tn%2BblNf%2Foi9judMnpoHiRmipQ6Y0z4L%2FjJDrtrje%2BCui2nfVsVGdJJXyawnyovYgao8ylQa%2BIq%2BB2DeQJDgIzHpxzSf%2FnzhIZUZ34o5epFj%2BpX%2F07sGZg1Z5mVof4cy3aSInHOesj7J%2FUpAOrZ0iAG0HLneA8Cz8WPHImKxheA2C%2FGjou3EY&X-Amz-Signature=96bc8e9e5cb35313a35581aa42028e99ca2ef0da5759f4be14527bebcdb5e757&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKUUNCI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCWLmJWjWscvEAhuB9i0JAZNG4ZUb5mbGwMHfJehe7lBQIhAPfPbnan9T5JoSLK3OMuWfBbcBu54YDlbjIUReZ9M20bKv8DCHYQABoMNjM3NDIzMTgzODA1IgzuwySedtBto3blGFgq3AOa9YC0Ls5FSd546JPtmi5pUrpFlD%2Fj0zPA%2Bz6jnV3Gm7tlxbAa3%2FRs%2BEWWC3F%2FIjOzBLRNMu2r9fd9lD31UifBpKRGThlTgqVFsGwFwXu%2Fs2Ch9EmmL1MS00a40XYGNq6M9XKDSmXPeUh6bvmGAqiA78%2F%2B2CAxIkU%2BzY7uQEJjDQwtJyt%2F0jDTCa4S40AKHYnu%2BLdCG%2BIRjuJYigteZVQbGQNwfHhDZ7qv7pGMOhkQ9q5D7EmNN0A3E%2FSfPOLzRrhstAeEIj0EXT1Xq%2B9z4UkpYGvYXz5W2y7Ksdtz22fS3YKou66LNgHWKPhHk%2BZS8vlbVe%2FNeCE3Ez0LiStDOvG%2F%2F4vidHF1J1TXELl27l%2FyiJMomb1mAbOXQAn%2FDJFL%2Bqn1qFhdq8aPG8MmefK9lqQmONZHboFWJHnLSOsmv2GYRTkt24V1cBvdK41KZ6dbhVcwhCmmyJbJs1%2FL6kmtXVQUH2WlbnuCogP8e1MdLPrYQ3sRnHX19WedFGu313Q%2BZsxlGTecBMR8yaUEBo0ULMfx5MHKIy8hRwv%2BnWr4zH6fiVILDSLtO5VJVwCBxC9aGWE20evyNQq7s2ZXq%2FFXmHL1cUxOWQ3%2FUM0ERF4v81PsfwGptohD3vK%2F%2BELCizCf%2F%2Bq%2BBjqkASnVn7MHHRKm3ODVdAsh6I6SHpOzXFTrf%2FwfJ3H8Tn%2BblNf%2Foi9judMnpoHiRmipQ6Y0z4L%2FjJDrtrje%2BCui2nfVsVGdJJXyawnyovYgao8ylQa%2BIq%2BB2DeQJDgIzHpxzSf%2FnzhIZUZ34o5epFj%2BpX%2F07sGZg1Z5mVof4cy3aSInHOesj7J%2FUpAOrZ0iAG0HLneA8Cz8WPHImKxheA2C%2FGjou3EY&X-Amz-Signature=83c687853062dadddf80223ffba7ddd41c5abe1896bbdf83ec7ccc63b787c0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKUUNCI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCWLmJWjWscvEAhuB9i0JAZNG4ZUb5mbGwMHfJehe7lBQIhAPfPbnan9T5JoSLK3OMuWfBbcBu54YDlbjIUReZ9M20bKv8DCHYQABoMNjM3NDIzMTgzODA1IgzuwySedtBto3blGFgq3AOa9YC0Ls5FSd546JPtmi5pUrpFlD%2Fj0zPA%2Bz6jnV3Gm7tlxbAa3%2FRs%2BEWWC3F%2FIjOzBLRNMu2r9fd9lD31UifBpKRGThlTgqVFsGwFwXu%2Fs2Ch9EmmL1MS00a40XYGNq6M9XKDSmXPeUh6bvmGAqiA78%2F%2B2CAxIkU%2BzY7uQEJjDQwtJyt%2F0jDTCa4S40AKHYnu%2BLdCG%2BIRjuJYigteZVQbGQNwfHhDZ7qv7pGMOhkQ9q5D7EmNN0A3E%2FSfPOLzRrhstAeEIj0EXT1Xq%2B9z4UkpYGvYXz5W2y7Ksdtz22fS3YKou66LNgHWKPhHk%2BZS8vlbVe%2FNeCE3Ez0LiStDOvG%2F%2F4vidHF1J1TXELl27l%2FyiJMomb1mAbOXQAn%2FDJFL%2Bqn1qFhdq8aPG8MmefK9lqQmONZHboFWJHnLSOsmv2GYRTkt24V1cBvdK41KZ6dbhVcwhCmmyJbJs1%2FL6kmtXVQUH2WlbnuCogP8e1MdLPrYQ3sRnHX19WedFGu313Q%2BZsxlGTecBMR8yaUEBo0ULMfx5MHKIy8hRwv%2BnWr4zH6fiVILDSLtO5VJVwCBxC9aGWE20evyNQq7s2ZXq%2FFXmHL1cUxOWQ3%2FUM0ERF4v81PsfwGptohD3vK%2F%2BELCizCf%2F%2Bq%2BBjqkASnVn7MHHRKm3ODVdAsh6I6SHpOzXFTrf%2FwfJ3H8Tn%2BblNf%2Foi9judMnpoHiRmipQ6Y0z4L%2FjJDrtrje%2BCui2nfVsVGdJJXyawnyovYgao8ylQa%2BIq%2BB2DeQJDgIzHpxzSf%2FnzhIZUZ34o5epFj%2BpX%2F07sGZg1Z5mVof4cy3aSInHOesj7J%2FUpAOrZ0iAG0HLneA8Cz8WPHImKxheA2C%2FGjou3EY&X-Amz-Signature=b1549d46f42a04d2a72888167b72c4b71d2e0b8038f5e42644455739f8ac6db2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKUUNCI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCWLmJWjWscvEAhuB9i0JAZNG4ZUb5mbGwMHfJehe7lBQIhAPfPbnan9T5JoSLK3OMuWfBbcBu54YDlbjIUReZ9M20bKv8DCHYQABoMNjM3NDIzMTgzODA1IgzuwySedtBto3blGFgq3AOa9YC0Ls5FSd546JPtmi5pUrpFlD%2Fj0zPA%2Bz6jnV3Gm7tlxbAa3%2FRs%2BEWWC3F%2FIjOzBLRNMu2r9fd9lD31UifBpKRGThlTgqVFsGwFwXu%2Fs2Ch9EmmL1MS00a40XYGNq6M9XKDSmXPeUh6bvmGAqiA78%2F%2B2CAxIkU%2BzY7uQEJjDQwtJyt%2F0jDTCa4S40AKHYnu%2BLdCG%2BIRjuJYigteZVQbGQNwfHhDZ7qv7pGMOhkQ9q5D7EmNN0A3E%2FSfPOLzRrhstAeEIj0EXT1Xq%2B9z4UkpYGvYXz5W2y7Ksdtz22fS3YKou66LNgHWKPhHk%2BZS8vlbVe%2FNeCE3Ez0LiStDOvG%2F%2F4vidHF1J1TXELl27l%2FyiJMomb1mAbOXQAn%2FDJFL%2Bqn1qFhdq8aPG8MmefK9lqQmONZHboFWJHnLSOsmv2GYRTkt24V1cBvdK41KZ6dbhVcwhCmmyJbJs1%2FL6kmtXVQUH2WlbnuCogP8e1MdLPrYQ3sRnHX19WedFGu313Q%2BZsxlGTecBMR8yaUEBo0ULMfx5MHKIy8hRwv%2BnWr4zH6fiVILDSLtO5VJVwCBxC9aGWE20evyNQq7s2ZXq%2FFXmHL1cUxOWQ3%2FUM0ERF4v81PsfwGptohD3vK%2F%2BELCizCf%2F%2Bq%2BBjqkASnVn7MHHRKm3ODVdAsh6I6SHpOzXFTrf%2FwfJ3H8Tn%2BblNf%2Foi9judMnpoHiRmipQ6Y0z4L%2FjJDrtrje%2BCui2nfVsVGdJJXyawnyovYgao8ylQa%2BIq%2BB2DeQJDgIzHpxzSf%2FnzhIZUZ34o5epFj%2BpX%2F07sGZg1Z5mVof4cy3aSInHOesj7J%2FUpAOrZ0iAG0HLneA8Cz8WPHImKxheA2C%2FGjou3EY&X-Amz-Signature=da815dbdeaee3a8a3d26af363c45bc0a4db017c22ed90935b1649a4c8d671317&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKUUNCI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCWLmJWjWscvEAhuB9i0JAZNG4ZUb5mbGwMHfJehe7lBQIhAPfPbnan9T5JoSLK3OMuWfBbcBu54YDlbjIUReZ9M20bKv8DCHYQABoMNjM3NDIzMTgzODA1IgzuwySedtBto3blGFgq3AOa9YC0Ls5FSd546JPtmi5pUrpFlD%2Fj0zPA%2Bz6jnV3Gm7tlxbAa3%2FRs%2BEWWC3F%2FIjOzBLRNMu2r9fd9lD31UifBpKRGThlTgqVFsGwFwXu%2Fs2Ch9EmmL1MS00a40XYGNq6M9XKDSmXPeUh6bvmGAqiA78%2F%2B2CAxIkU%2BzY7uQEJjDQwtJyt%2F0jDTCa4S40AKHYnu%2BLdCG%2BIRjuJYigteZVQbGQNwfHhDZ7qv7pGMOhkQ9q5D7EmNN0A3E%2FSfPOLzRrhstAeEIj0EXT1Xq%2B9z4UkpYGvYXz5W2y7Ksdtz22fS3YKou66LNgHWKPhHk%2BZS8vlbVe%2FNeCE3Ez0LiStDOvG%2F%2F4vidHF1J1TXELl27l%2FyiJMomb1mAbOXQAn%2FDJFL%2Bqn1qFhdq8aPG8MmefK9lqQmONZHboFWJHnLSOsmv2GYRTkt24V1cBvdK41KZ6dbhVcwhCmmyJbJs1%2FL6kmtXVQUH2WlbnuCogP8e1MdLPrYQ3sRnHX19WedFGu313Q%2BZsxlGTecBMR8yaUEBo0ULMfx5MHKIy8hRwv%2BnWr4zH6fiVILDSLtO5VJVwCBxC9aGWE20evyNQq7s2ZXq%2FFXmHL1cUxOWQ3%2FUM0ERF4v81PsfwGptohD3vK%2F%2BELCizCf%2F%2Bq%2BBjqkASnVn7MHHRKm3ODVdAsh6I6SHpOzXFTrf%2FwfJ3H8Tn%2BblNf%2Foi9judMnpoHiRmipQ6Y0z4L%2FjJDrtrje%2BCui2nfVsVGdJJXyawnyovYgao8ylQa%2BIq%2BB2DeQJDgIzHpxzSf%2FnzhIZUZ34o5epFj%2BpX%2F07sGZg1Z5mVof4cy3aSInHOesj7J%2FUpAOrZ0iAG0HLneA8Cz8WPHImKxheA2C%2FGjou3EY&X-Amz-Signature=b40a095895ceb35b79cda3a15ce0d68594e387d9a4f97de615bd915b80cce248&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKUUNCI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCWLmJWjWscvEAhuB9i0JAZNG4ZUb5mbGwMHfJehe7lBQIhAPfPbnan9T5JoSLK3OMuWfBbcBu54YDlbjIUReZ9M20bKv8DCHYQABoMNjM3NDIzMTgzODA1IgzuwySedtBto3blGFgq3AOa9YC0Ls5FSd546JPtmi5pUrpFlD%2Fj0zPA%2Bz6jnV3Gm7tlxbAa3%2FRs%2BEWWC3F%2FIjOzBLRNMu2r9fd9lD31UifBpKRGThlTgqVFsGwFwXu%2Fs2Ch9EmmL1MS00a40XYGNq6M9XKDSmXPeUh6bvmGAqiA78%2F%2B2CAxIkU%2BzY7uQEJjDQwtJyt%2F0jDTCa4S40AKHYnu%2BLdCG%2BIRjuJYigteZVQbGQNwfHhDZ7qv7pGMOhkQ9q5D7EmNN0A3E%2FSfPOLzRrhstAeEIj0EXT1Xq%2B9z4UkpYGvYXz5W2y7Ksdtz22fS3YKou66LNgHWKPhHk%2BZS8vlbVe%2FNeCE3Ez0LiStDOvG%2F%2F4vidHF1J1TXELl27l%2FyiJMomb1mAbOXQAn%2FDJFL%2Bqn1qFhdq8aPG8MmefK9lqQmONZHboFWJHnLSOsmv2GYRTkt24V1cBvdK41KZ6dbhVcwhCmmyJbJs1%2FL6kmtXVQUH2WlbnuCogP8e1MdLPrYQ3sRnHX19WedFGu313Q%2BZsxlGTecBMR8yaUEBo0ULMfx5MHKIy8hRwv%2BnWr4zH6fiVILDSLtO5VJVwCBxC9aGWE20evyNQq7s2ZXq%2FFXmHL1cUxOWQ3%2FUM0ERF4v81PsfwGptohD3vK%2F%2BELCizCf%2F%2Bq%2BBjqkASnVn7MHHRKm3ODVdAsh6I6SHpOzXFTrf%2FwfJ3H8Tn%2BblNf%2Foi9judMnpoHiRmipQ6Y0z4L%2FjJDrtrje%2BCui2nfVsVGdJJXyawnyovYgao8ylQa%2BIq%2BB2DeQJDgIzHpxzSf%2FnzhIZUZ34o5epFj%2BpX%2F07sGZg1Z5mVof4cy3aSInHOesj7J%2FUpAOrZ0iAG0HLneA8Cz8WPHImKxheA2C%2FGjou3EY&X-Amz-Signature=ee8e85296014cd033924650ba1990200f9b90435bce33c2ae31c959712b2a962&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKUUNCI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCWLmJWjWscvEAhuB9i0JAZNG4ZUb5mbGwMHfJehe7lBQIhAPfPbnan9T5JoSLK3OMuWfBbcBu54YDlbjIUReZ9M20bKv8DCHYQABoMNjM3NDIzMTgzODA1IgzuwySedtBto3blGFgq3AOa9YC0Ls5FSd546JPtmi5pUrpFlD%2Fj0zPA%2Bz6jnV3Gm7tlxbAa3%2FRs%2BEWWC3F%2FIjOzBLRNMu2r9fd9lD31UifBpKRGThlTgqVFsGwFwXu%2Fs2Ch9EmmL1MS00a40XYGNq6M9XKDSmXPeUh6bvmGAqiA78%2F%2B2CAxIkU%2BzY7uQEJjDQwtJyt%2F0jDTCa4S40AKHYnu%2BLdCG%2BIRjuJYigteZVQbGQNwfHhDZ7qv7pGMOhkQ9q5D7EmNN0A3E%2FSfPOLzRrhstAeEIj0EXT1Xq%2B9z4UkpYGvYXz5W2y7Ksdtz22fS3YKou66LNgHWKPhHk%2BZS8vlbVe%2FNeCE3Ez0LiStDOvG%2F%2F4vidHF1J1TXELl27l%2FyiJMomb1mAbOXQAn%2FDJFL%2Bqn1qFhdq8aPG8MmefK9lqQmONZHboFWJHnLSOsmv2GYRTkt24V1cBvdK41KZ6dbhVcwhCmmyJbJs1%2FL6kmtXVQUH2WlbnuCogP8e1MdLPrYQ3sRnHX19WedFGu313Q%2BZsxlGTecBMR8yaUEBo0ULMfx5MHKIy8hRwv%2BnWr4zH6fiVILDSLtO5VJVwCBxC9aGWE20evyNQq7s2ZXq%2FFXmHL1cUxOWQ3%2FUM0ERF4v81PsfwGptohD3vK%2F%2BELCizCf%2F%2Bq%2BBjqkASnVn7MHHRKm3ODVdAsh6I6SHpOzXFTrf%2FwfJ3H8Tn%2BblNf%2Foi9judMnpoHiRmipQ6Y0z4L%2FjJDrtrje%2BCui2nfVsVGdJJXyawnyovYgao8ylQa%2BIq%2BB2DeQJDgIzHpxzSf%2FnzhIZUZ34o5epFj%2BpX%2F07sGZg1Z5mVof4cy3aSInHOesj7J%2FUpAOrZ0iAG0HLneA8Cz8WPHImKxheA2C%2FGjou3EY&X-Amz-Signature=5bacff210517f2d10e11cde8ffac5c353c99640b7fa3e88f5c85c1ecbb79adfb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
