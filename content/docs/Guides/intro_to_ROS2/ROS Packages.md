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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDYL63Z%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1pwC2HiHzac%2BtJq01LKad5nJK6Uidk2OQSsm8zudVwIgDU8weZVTA61v5oASrjaSuDdWmqpX5BFA%2BIjbmKrjeVsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEKZBKD%2BL5yjSkb7tCrcA9Sv0SU0XVVOXdKfLPn5vrSl4xfw4wTa3qJ5Vvu%2BKkZ5NvYRZagcBVtLmndOQBUBj%2Bdd6yQZPvbD%2Fd0WbiXJQ83nqgtdVAJmcXyV1c4%2Btx072J82lNgcl1%2BdZev1PZMSnuVDD%2F45XxpV4hcpVoPLWVESdtWPTtCyV4%2FEu0r8hCvZlk1dy%2Fh%2F2FBK0Bw8CsguBl9DQAeFUwcvKP8j4GRlDEaM7BKxGQ0WmdpLjWtXVR0QPqBn4DTW7VegWec%2F4JNqCEGCDu4q6fKBio7%2Fwz2nW3VKYV6KXlLGuJ5UQ65zvPQvIMYGMVtJBzzjntsjBAXK8cI6CEHO9Y5GIBeafj4JyuwYyEyTPBafsFpDq%2FsfmDxHpWdR2wmrFwiMfEFudeERL2J8TJVNdScSa60nrJjfwOUylebB5I8Tfi9l3VfDAFIAMY7VUgExLpbgcbVtzStLOwwaYYfR50wrxLjOgg2cYKPDhmu7lLez3c%2FHAgpO6n%2BFdDBewbgsjkYQVnc%2Fd5ZmVu4oMGxPmaSUeQTlBYZExHohBlpdS%2F7LTklUyOz%2BXjsX9v4QZqZcxa83D5a68Y6RoQN6QBzH8pauOnUHfnQOnX2kuSYLux5mb%2FU6b%2FJHVjQjPvaXWINyTtihGjmBMOea3r4GOqUBFQ4kFSH2ID%2FmhE9uJmeBlwO3%2FhdRFNVDjltDFJxBUtRCOpq4eFiP3LnmHyt2f2E67nQnX9W6GGz%2FzO1BQBD8un02c7rPcVALOi0S7n5ztrvzaJkdaa9em%2Bn871ennqQKxemdwpCHoOkb1zNUR3zWePlTsPorvCI0Nk1wQI1r1XcX1WJw4qBsveLtVNnxZ4zge8RdFJgjsHlRDudoFQ2DDDTs1x0a&X-Amz-Signature=b6e029d81f5c18aa2b0b99ba6042a03ed714b8d36f060c581a8d2bb37dda8d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDYL63Z%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1pwC2HiHzac%2BtJq01LKad5nJK6Uidk2OQSsm8zudVwIgDU8weZVTA61v5oASrjaSuDdWmqpX5BFA%2BIjbmKrjeVsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEKZBKD%2BL5yjSkb7tCrcA9Sv0SU0XVVOXdKfLPn5vrSl4xfw4wTa3qJ5Vvu%2BKkZ5NvYRZagcBVtLmndOQBUBj%2Bdd6yQZPvbD%2Fd0WbiXJQ83nqgtdVAJmcXyV1c4%2Btx072J82lNgcl1%2BdZev1PZMSnuVDD%2F45XxpV4hcpVoPLWVESdtWPTtCyV4%2FEu0r8hCvZlk1dy%2Fh%2F2FBK0Bw8CsguBl9DQAeFUwcvKP8j4GRlDEaM7BKxGQ0WmdpLjWtXVR0QPqBn4DTW7VegWec%2F4JNqCEGCDu4q6fKBio7%2Fwz2nW3VKYV6KXlLGuJ5UQ65zvPQvIMYGMVtJBzzjntsjBAXK8cI6CEHO9Y5GIBeafj4JyuwYyEyTPBafsFpDq%2FsfmDxHpWdR2wmrFwiMfEFudeERL2J8TJVNdScSa60nrJjfwOUylebB5I8Tfi9l3VfDAFIAMY7VUgExLpbgcbVtzStLOwwaYYfR50wrxLjOgg2cYKPDhmu7lLez3c%2FHAgpO6n%2BFdDBewbgsjkYQVnc%2Fd5ZmVu4oMGxPmaSUeQTlBYZExHohBlpdS%2F7LTklUyOz%2BXjsX9v4QZqZcxa83D5a68Y6RoQN6QBzH8pauOnUHfnQOnX2kuSYLux5mb%2FU6b%2FJHVjQjPvaXWINyTtihGjmBMOea3r4GOqUBFQ4kFSH2ID%2FmhE9uJmeBlwO3%2FhdRFNVDjltDFJxBUtRCOpq4eFiP3LnmHyt2f2E67nQnX9W6GGz%2FzO1BQBD8un02c7rPcVALOi0S7n5ztrvzaJkdaa9em%2Bn871ennqQKxemdwpCHoOkb1zNUR3zWePlTsPorvCI0Nk1wQI1r1XcX1WJw4qBsveLtVNnxZ4zge8RdFJgjsHlRDudoFQ2DDDTs1x0a&X-Amz-Signature=b1773d7f69341df63d54135539f0f88739cd341be40863c2494ec704229218cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDYL63Z%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1pwC2HiHzac%2BtJq01LKad5nJK6Uidk2OQSsm8zudVwIgDU8weZVTA61v5oASrjaSuDdWmqpX5BFA%2BIjbmKrjeVsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEKZBKD%2BL5yjSkb7tCrcA9Sv0SU0XVVOXdKfLPn5vrSl4xfw4wTa3qJ5Vvu%2BKkZ5NvYRZagcBVtLmndOQBUBj%2Bdd6yQZPvbD%2Fd0WbiXJQ83nqgtdVAJmcXyV1c4%2Btx072J82lNgcl1%2BdZev1PZMSnuVDD%2F45XxpV4hcpVoPLWVESdtWPTtCyV4%2FEu0r8hCvZlk1dy%2Fh%2F2FBK0Bw8CsguBl9DQAeFUwcvKP8j4GRlDEaM7BKxGQ0WmdpLjWtXVR0QPqBn4DTW7VegWec%2F4JNqCEGCDu4q6fKBio7%2Fwz2nW3VKYV6KXlLGuJ5UQ65zvPQvIMYGMVtJBzzjntsjBAXK8cI6CEHO9Y5GIBeafj4JyuwYyEyTPBafsFpDq%2FsfmDxHpWdR2wmrFwiMfEFudeERL2J8TJVNdScSa60nrJjfwOUylebB5I8Tfi9l3VfDAFIAMY7VUgExLpbgcbVtzStLOwwaYYfR50wrxLjOgg2cYKPDhmu7lLez3c%2FHAgpO6n%2BFdDBewbgsjkYQVnc%2Fd5ZmVu4oMGxPmaSUeQTlBYZExHohBlpdS%2F7LTklUyOz%2BXjsX9v4QZqZcxa83D5a68Y6RoQN6QBzH8pauOnUHfnQOnX2kuSYLux5mb%2FU6b%2FJHVjQjPvaXWINyTtihGjmBMOea3r4GOqUBFQ4kFSH2ID%2FmhE9uJmeBlwO3%2FhdRFNVDjltDFJxBUtRCOpq4eFiP3LnmHyt2f2E67nQnX9W6GGz%2FzO1BQBD8un02c7rPcVALOi0S7n5ztrvzaJkdaa9em%2Bn871ennqQKxemdwpCHoOkb1zNUR3zWePlTsPorvCI0Nk1wQI1r1XcX1WJw4qBsveLtVNnxZ4zge8RdFJgjsHlRDudoFQ2DDDTs1x0a&X-Amz-Signature=c9f626bc3dc3da758ac71f31834cc9917bd0c2510e31eeb4586db5c6b0b4dcac&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDYL63Z%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1pwC2HiHzac%2BtJq01LKad5nJK6Uidk2OQSsm8zudVwIgDU8weZVTA61v5oASrjaSuDdWmqpX5BFA%2BIjbmKrjeVsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEKZBKD%2BL5yjSkb7tCrcA9Sv0SU0XVVOXdKfLPn5vrSl4xfw4wTa3qJ5Vvu%2BKkZ5NvYRZagcBVtLmndOQBUBj%2Bdd6yQZPvbD%2Fd0WbiXJQ83nqgtdVAJmcXyV1c4%2Btx072J82lNgcl1%2BdZev1PZMSnuVDD%2F45XxpV4hcpVoPLWVESdtWPTtCyV4%2FEu0r8hCvZlk1dy%2Fh%2F2FBK0Bw8CsguBl9DQAeFUwcvKP8j4GRlDEaM7BKxGQ0WmdpLjWtXVR0QPqBn4DTW7VegWec%2F4JNqCEGCDu4q6fKBio7%2Fwz2nW3VKYV6KXlLGuJ5UQ65zvPQvIMYGMVtJBzzjntsjBAXK8cI6CEHO9Y5GIBeafj4JyuwYyEyTPBafsFpDq%2FsfmDxHpWdR2wmrFwiMfEFudeERL2J8TJVNdScSa60nrJjfwOUylebB5I8Tfi9l3VfDAFIAMY7VUgExLpbgcbVtzStLOwwaYYfR50wrxLjOgg2cYKPDhmu7lLez3c%2FHAgpO6n%2BFdDBewbgsjkYQVnc%2Fd5ZmVu4oMGxPmaSUeQTlBYZExHohBlpdS%2F7LTklUyOz%2BXjsX9v4QZqZcxa83D5a68Y6RoQN6QBzH8pauOnUHfnQOnX2kuSYLux5mb%2FU6b%2FJHVjQjPvaXWINyTtihGjmBMOea3r4GOqUBFQ4kFSH2ID%2FmhE9uJmeBlwO3%2FhdRFNVDjltDFJxBUtRCOpq4eFiP3LnmHyt2f2E67nQnX9W6GGz%2FzO1BQBD8un02c7rPcVALOi0S7n5ztrvzaJkdaa9em%2Bn871ennqQKxemdwpCHoOkb1zNUR3zWePlTsPorvCI0Nk1wQI1r1XcX1WJw4qBsveLtVNnxZ4zge8RdFJgjsHlRDudoFQ2DDDTs1x0a&X-Amz-Signature=b87295cbe922c4155b107d32f3699908f26b8541b0d547e296e613bb97089be5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDYL63Z%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1pwC2HiHzac%2BtJq01LKad5nJK6Uidk2OQSsm8zudVwIgDU8weZVTA61v5oASrjaSuDdWmqpX5BFA%2BIjbmKrjeVsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEKZBKD%2BL5yjSkb7tCrcA9Sv0SU0XVVOXdKfLPn5vrSl4xfw4wTa3qJ5Vvu%2BKkZ5NvYRZagcBVtLmndOQBUBj%2Bdd6yQZPvbD%2Fd0WbiXJQ83nqgtdVAJmcXyV1c4%2Btx072J82lNgcl1%2BdZev1PZMSnuVDD%2F45XxpV4hcpVoPLWVESdtWPTtCyV4%2FEu0r8hCvZlk1dy%2Fh%2F2FBK0Bw8CsguBl9DQAeFUwcvKP8j4GRlDEaM7BKxGQ0WmdpLjWtXVR0QPqBn4DTW7VegWec%2F4JNqCEGCDu4q6fKBio7%2Fwz2nW3VKYV6KXlLGuJ5UQ65zvPQvIMYGMVtJBzzjntsjBAXK8cI6CEHO9Y5GIBeafj4JyuwYyEyTPBafsFpDq%2FsfmDxHpWdR2wmrFwiMfEFudeERL2J8TJVNdScSa60nrJjfwOUylebB5I8Tfi9l3VfDAFIAMY7VUgExLpbgcbVtzStLOwwaYYfR50wrxLjOgg2cYKPDhmu7lLez3c%2FHAgpO6n%2BFdDBewbgsjkYQVnc%2Fd5ZmVu4oMGxPmaSUeQTlBYZExHohBlpdS%2F7LTklUyOz%2BXjsX9v4QZqZcxa83D5a68Y6RoQN6QBzH8pauOnUHfnQOnX2kuSYLux5mb%2FU6b%2FJHVjQjPvaXWINyTtihGjmBMOea3r4GOqUBFQ4kFSH2ID%2FmhE9uJmeBlwO3%2FhdRFNVDjltDFJxBUtRCOpq4eFiP3LnmHyt2f2E67nQnX9W6GGz%2FzO1BQBD8un02c7rPcVALOi0S7n5ztrvzaJkdaa9em%2Bn871ennqQKxemdwpCHoOkb1zNUR3zWePlTsPorvCI0Nk1wQI1r1XcX1WJw4qBsveLtVNnxZ4zge8RdFJgjsHlRDudoFQ2DDDTs1x0a&X-Amz-Signature=c539ea99f56c29a0c67859cc5f7b263ac501a047d200992c709c74437df7fdcd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDYL63Z%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1pwC2HiHzac%2BtJq01LKad5nJK6Uidk2OQSsm8zudVwIgDU8weZVTA61v5oASrjaSuDdWmqpX5BFA%2BIjbmKrjeVsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEKZBKD%2BL5yjSkb7tCrcA9Sv0SU0XVVOXdKfLPn5vrSl4xfw4wTa3qJ5Vvu%2BKkZ5NvYRZagcBVtLmndOQBUBj%2Bdd6yQZPvbD%2Fd0WbiXJQ83nqgtdVAJmcXyV1c4%2Btx072J82lNgcl1%2BdZev1PZMSnuVDD%2F45XxpV4hcpVoPLWVESdtWPTtCyV4%2FEu0r8hCvZlk1dy%2Fh%2F2FBK0Bw8CsguBl9DQAeFUwcvKP8j4GRlDEaM7BKxGQ0WmdpLjWtXVR0QPqBn4DTW7VegWec%2F4JNqCEGCDu4q6fKBio7%2Fwz2nW3VKYV6KXlLGuJ5UQ65zvPQvIMYGMVtJBzzjntsjBAXK8cI6CEHO9Y5GIBeafj4JyuwYyEyTPBafsFpDq%2FsfmDxHpWdR2wmrFwiMfEFudeERL2J8TJVNdScSa60nrJjfwOUylebB5I8Tfi9l3VfDAFIAMY7VUgExLpbgcbVtzStLOwwaYYfR50wrxLjOgg2cYKPDhmu7lLez3c%2FHAgpO6n%2BFdDBewbgsjkYQVnc%2Fd5ZmVu4oMGxPmaSUeQTlBYZExHohBlpdS%2F7LTklUyOz%2BXjsX9v4QZqZcxa83D5a68Y6RoQN6QBzH8pauOnUHfnQOnX2kuSYLux5mb%2FU6b%2FJHVjQjPvaXWINyTtihGjmBMOea3r4GOqUBFQ4kFSH2ID%2FmhE9uJmeBlwO3%2FhdRFNVDjltDFJxBUtRCOpq4eFiP3LnmHyt2f2E67nQnX9W6GGz%2FzO1BQBD8un02c7rPcVALOi0S7n5ztrvzaJkdaa9em%2Bn871ennqQKxemdwpCHoOkb1zNUR3zWePlTsPorvCI0Nk1wQI1r1XcX1WJw4qBsveLtVNnxZ4zge8RdFJgjsHlRDudoFQ2DDDTs1x0a&X-Amz-Signature=bf4e7875eb16bb2563cb71d97a147a37d819a5a6d050c5cf1d2a0ab14bc9db1c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDYL63Z%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1pwC2HiHzac%2BtJq01LKad5nJK6Uidk2OQSsm8zudVwIgDU8weZVTA61v5oASrjaSuDdWmqpX5BFA%2BIjbmKrjeVsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEKZBKD%2BL5yjSkb7tCrcA9Sv0SU0XVVOXdKfLPn5vrSl4xfw4wTa3qJ5Vvu%2BKkZ5NvYRZagcBVtLmndOQBUBj%2Bdd6yQZPvbD%2Fd0WbiXJQ83nqgtdVAJmcXyV1c4%2Btx072J82lNgcl1%2BdZev1PZMSnuVDD%2F45XxpV4hcpVoPLWVESdtWPTtCyV4%2FEu0r8hCvZlk1dy%2Fh%2F2FBK0Bw8CsguBl9DQAeFUwcvKP8j4GRlDEaM7BKxGQ0WmdpLjWtXVR0QPqBn4DTW7VegWec%2F4JNqCEGCDu4q6fKBio7%2Fwz2nW3VKYV6KXlLGuJ5UQ65zvPQvIMYGMVtJBzzjntsjBAXK8cI6CEHO9Y5GIBeafj4JyuwYyEyTPBafsFpDq%2FsfmDxHpWdR2wmrFwiMfEFudeERL2J8TJVNdScSa60nrJjfwOUylebB5I8Tfi9l3VfDAFIAMY7VUgExLpbgcbVtzStLOwwaYYfR50wrxLjOgg2cYKPDhmu7lLez3c%2FHAgpO6n%2BFdDBewbgsjkYQVnc%2Fd5ZmVu4oMGxPmaSUeQTlBYZExHohBlpdS%2F7LTklUyOz%2BXjsX9v4QZqZcxa83D5a68Y6RoQN6QBzH8pauOnUHfnQOnX2kuSYLux5mb%2FU6b%2FJHVjQjPvaXWINyTtihGjmBMOea3r4GOqUBFQ4kFSH2ID%2FmhE9uJmeBlwO3%2FhdRFNVDjltDFJxBUtRCOpq4eFiP3LnmHyt2f2E67nQnX9W6GGz%2FzO1BQBD8un02c7rPcVALOi0S7n5ztrvzaJkdaa9em%2Bn871ennqQKxemdwpCHoOkb1zNUR3zWePlTsPorvCI0Nk1wQI1r1XcX1WJw4qBsveLtVNnxZ4zge8RdFJgjsHlRDudoFQ2DDDTs1x0a&X-Amz-Signature=b3ef409545878d0ee1f6bea16bfa7db9123cb805b333aa6e4d4fdb24565611d5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
