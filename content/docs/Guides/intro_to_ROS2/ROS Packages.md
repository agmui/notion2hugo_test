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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDITXBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCE70e5NbGY67yNC1e9YOee7PwbQuYWgzvJbmentZEuhQIgS8KVT7uR0dijXqs0aQ3jya%2FwPR9mU82PXHuMHcQacFAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHr8dcWJsgJ7VI9zSrcA482npGo8U4D8a51v%2FTxjUKsWjMHd91IL5S9ojNRJnknsDN32v1zfjUxUVEQ3dcrkq9eEO2Fh%2BZ%2FH6Kdpz%2FbOJ4gR5S3MAzF203NXLq7167ONAVsCgVr%2B0hi17VgAqllhEjLTNWVEWcUGOc0RwScIeWajNCDdlb87MeSGhMaF8J3IEhRu8HxG4J4rInBqpB2ItPvKr7Q7qs8%2BxNBkesMLXYB5sx78KFJdsUDMLWCSYAnSbKHjWZRT6Zg24nIAnndwR7LqOTvNVzFe0zjqn8jVbB8nPIoJ2Swhhv46trUNFi8GfdDKhc%2BuqZJurvjnoUQP%2B5Btw4puQsjABAfDEfWi5buOwEL43DM9lXxvbyec8iwfQnNWLP1S4vmqS9SLIzuVYYnVviGKsxvdjJNBFA71lr0%2FnkBU0ZdH1P%2FENzv27hAI%2BW6UyRlyyBSsrvUaAhxG1fZTf5AIX34aA5zEcRGruaLIzagpbQ1kkQSuJMUZUqsV5DRJFCai5FLl3opl18placPikv7EfJ24gdpwrukOZfbIv88dEBDVTvPhqfVbfkTDg1npwSmIEvSJgYDY8u946Q0m9VWR0uHgrdUTjy%2BzWEEpKlhK9zLpKE7To5qpPG3FsJ2FkrLoD6bPPa1MLjbl8MGOqUBuKLg76BTfWsVuG%2BIyjW93odJNq3fgE0iT7O5u5r6i4hhBsR6KrlqXP1wl51aIKEnIQCMq7%2B5t8z1BjHObKck8RunAki4OG%2BzljBH%2FPFmII0w7mowk9QIeG%2BzRvn4tco0KYelx36HFbyg0adClXeJjj6UKyV6k7xYFr1%2BkS2m6Pw%2FjmoVNSrPYqBYreznpkH0XTUykMrSF0%2BUDNXo6JoLHAcPY6JG&X-Amz-Signature=2497cf5352fa563b8894114fe25754cb74d69f0003ca788d6100e61dbec52473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDITXBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCE70e5NbGY67yNC1e9YOee7PwbQuYWgzvJbmentZEuhQIgS8KVT7uR0dijXqs0aQ3jya%2FwPR9mU82PXHuMHcQacFAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHr8dcWJsgJ7VI9zSrcA482npGo8U4D8a51v%2FTxjUKsWjMHd91IL5S9ojNRJnknsDN32v1zfjUxUVEQ3dcrkq9eEO2Fh%2BZ%2FH6Kdpz%2FbOJ4gR5S3MAzF203NXLq7167ONAVsCgVr%2B0hi17VgAqllhEjLTNWVEWcUGOc0RwScIeWajNCDdlb87MeSGhMaF8J3IEhRu8HxG4J4rInBqpB2ItPvKr7Q7qs8%2BxNBkesMLXYB5sx78KFJdsUDMLWCSYAnSbKHjWZRT6Zg24nIAnndwR7LqOTvNVzFe0zjqn8jVbB8nPIoJ2Swhhv46trUNFi8GfdDKhc%2BuqZJurvjnoUQP%2B5Btw4puQsjABAfDEfWi5buOwEL43DM9lXxvbyec8iwfQnNWLP1S4vmqS9SLIzuVYYnVviGKsxvdjJNBFA71lr0%2FnkBU0ZdH1P%2FENzv27hAI%2BW6UyRlyyBSsrvUaAhxG1fZTf5AIX34aA5zEcRGruaLIzagpbQ1kkQSuJMUZUqsV5DRJFCai5FLl3opl18placPikv7EfJ24gdpwrukOZfbIv88dEBDVTvPhqfVbfkTDg1npwSmIEvSJgYDY8u946Q0m9VWR0uHgrdUTjy%2BzWEEpKlhK9zLpKE7To5qpPG3FsJ2FkrLoD6bPPa1MLjbl8MGOqUBuKLg76BTfWsVuG%2BIyjW93odJNq3fgE0iT7O5u5r6i4hhBsR6KrlqXP1wl51aIKEnIQCMq7%2B5t8z1BjHObKck8RunAki4OG%2BzljBH%2FPFmII0w7mowk9QIeG%2BzRvn4tco0KYelx36HFbyg0adClXeJjj6UKyV6k7xYFr1%2BkS2m6Pw%2FjmoVNSrPYqBYreznpkH0XTUykMrSF0%2BUDNXo6JoLHAcPY6JG&X-Amz-Signature=a6c3b9925bc114ddf0eff3ba404ee60eedda1a8eb4b5aa5e784f833f7398b62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDITXBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCE70e5NbGY67yNC1e9YOee7PwbQuYWgzvJbmentZEuhQIgS8KVT7uR0dijXqs0aQ3jya%2FwPR9mU82PXHuMHcQacFAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHr8dcWJsgJ7VI9zSrcA482npGo8U4D8a51v%2FTxjUKsWjMHd91IL5S9ojNRJnknsDN32v1zfjUxUVEQ3dcrkq9eEO2Fh%2BZ%2FH6Kdpz%2FbOJ4gR5S3MAzF203NXLq7167ONAVsCgVr%2B0hi17VgAqllhEjLTNWVEWcUGOc0RwScIeWajNCDdlb87MeSGhMaF8J3IEhRu8HxG4J4rInBqpB2ItPvKr7Q7qs8%2BxNBkesMLXYB5sx78KFJdsUDMLWCSYAnSbKHjWZRT6Zg24nIAnndwR7LqOTvNVzFe0zjqn8jVbB8nPIoJ2Swhhv46trUNFi8GfdDKhc%2BuqZJurvjnoUQP%2B5Btw4puQsjABAfDEfWi5buOwEL43DM9lXxvbyec8iwfQnNWLP1S4vmqS9SLIzuVYYnVviGKsxvdjJNBFA71lr0%2FnkBU0ZdH1P%2FENzv27hAI%2BW6UyRlyyBSsrvUaAhxG1fZTf5AIX34aA5zEcRGruaLIzagpbQ1kkQSuJMUZUqsV5DRJFCai5FLl3opl18placPikv7EfJ24gdpwrukOZfbIv88dEBDVTvPhqfVbfkTDg1npwSmIEvSJgYDY8u946Q0m9VWR0uHgrdUTjy%2BzWEEpKlhK9zLpKE7To5qpPG3FsJ2FkrLoD6bPPa1MLjbl8MGOqUBuKLg76BTfWsVuG%2BIyjW93odJNq3fgE0iT7O5u5r6i4hhBsR6KrlqXP1wl51aIKEnIQCMq7%2B5t8z1BjHObKck8RunAki4OG%2BzljBH%2FPFmII0w7mowk9QIeG%2BzRvn4tco0KYelx36HFbyg0adClXeJjj6UKyV6k7xYFr1%2BkS2m6Pw%2FjmoVNSrPYqBYreznpkH0XTUykMrSF0%2BUDNXo6JoLHAcPY6JG&X-Amz-Signature=18bedc3b9a98f5bad70063f1eca58175184115d09a509aad55e41761212739e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDITXBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCE70e5NbGY67yNC1e9YOee7PwbQuYWgzvJbmentZEuhQIgS8KVT7uR0dijXqs0aQ3jya%2FwPR9mU82PXHuMHcQacFAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHr8dcWJsgJ7VI9zSrcA482npGo8U4D8a51v%2FTxjUKsWjMHd91IL5S9ojNRJnknsDN32v1zfjUxUVEQ3dcrkq9eEO2Fh%2BZ%2FH6Kdpz%2FbOJ4gR5S3MAzF203NXLq7167ONAVsCgVr%2B0hi17VgAqllhEjLTNWVEWcUGOc0RwScIeWajNCDdlb87MeSGhMaF8J3IEhRu8HxG4J4rInBqpB2ItPvKr7Q7qs8%2BxNBkesMLXYB5sx78KFJdsUDMLWCSYAnSbKHjWZRT6Zg24nIAnndwR7LqOTvNVzFe0zjqn8jVbB8nPIoJ2Swhhv46trUNFi8GfdDKhc%2BuqZJurvjnoUQP%2B5Btw4puQsjABAfDEfWi5buOwEL43DM9lXxvbyec8iwfQnNWLP1S4vmqS9SLIzuVYYnVviGKsxvdjJNBFA71lr0%2FnkBU0ZdH1P%2FENzv27hAI%2BW6UyRlyyBSsrvUaAhxG1fZTf5AIX34aA5zEcRGruaLIzagpbQ1kkQSuJMUZUqsV5DRJFCai5FLl3opl18placPikv7EfJ24gdpwrukOZfbIv88dEBDVTvPhqfVbfkTDg1npwSmIEvSJgYDY8u946Q0m9VWR0uHgrdUTjy%2BzWEEpKlhK9zLpKE7To5qpPG3FsJ2FkrLoD6bPPa1MLjbl8MGOqUBuKLg76BTfWsVuG%2BIyjW93odJNq3fgE0iT7O5u5r6i4hhBsR6KrlqXP1wl51aIKEnIQCMq7%2B5t8z1BjHObKck8RunAki4OG%2BzljBH%2FPFmII0w7mowk9QIeG%2BzRvn4tco0KYelx36HFbyg0adClXeJjj6UKyV6k7xYFr1%2BkS2m6Pw%2FjmoVNSrPYqBYreznpkH0XTUykMrSF0%2BUDNXo6JoLHAcPY6JG&X-Amz-Signature=d1b0e38d8e386ddbfe82a54282591010ed55b1e2bdc6c02e5c0c26ee89604d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDITXBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCE70e5NbGY67yNC1e9YOee7PwbQuYWgzvJbmentZEuhQIgS8KVT7uR0dijXqs0aQ3jya%2FwPR9mU82PXHuMHcQacFAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHr8dcWJsgJ7VI9zSrcA482npGo8U4D8a51v%2FTxjUKsWjMHd91IL5S9ojNRJnknsDN32v1zfjUxUVEQ3dcrkq9eEO2Fh%2BZ%2FH6Kdpz%2FbOJ4gR5S3MAzF203NXLq7167ONAVsCgVr%2B0hi17VgAqllhEjLTNWVEWcUGOc0RwScIeWajNCDdlb87MeSGhMaF8J3IEhRu8HxG4J4rInBqpB2ItPvKr7Q7qs8%2BxNBkesMLXYB5sx78KFJdsUDMLWCSYAnSbKHjWZRT6Zg24nIAnndwR7LqOTvNVzFe0zjqn8jVbB8nPIoJ2Swhhv46trUNFi8GfdDKhc%2BuqZJurvjnoUQP%2B5Btw4puQsjABAfDEfWi5buOwEL43DM9lXxvbyec8iwfQnNWLP1S4vmqS9SLIzuVYYnVviGKsxvdjJNBFA71lr0%2FnkBU0ZdH1P%2FENzv27hAI%2BW6UyRlyyBSsrvUaAhxG1fZTf5AIX34aA5zEcRGruaLIzagpbQ1kkQSuJMUZUqsV5DRJFCai5FLl3opl18placPikv7EfJ24gdpwrukOZfbIv88dEBDVTvPhqfVbfkTDg1npwSmIEvSJgYDY8u946Q0m9VWR0uHgrdUTjy%2BzWEEpKlhK9zLpKE7To5qpPG3FsJ2FkrLoD6bPPa1MLjbl8MGOqUBuKLg76BTfWsVuG%2BIyjW93odJNq3fgE0iT7O5u5r6i4hhBsR6KrlqXP1wl51aIKEnIQCMq7%2B5t8z1BjHObKck8RunAki4OG%2BzljBH%2FPFmII0w7mowk9QIeG%2BzRvn4tco0KYelx36HFbyg0adClXeJjj6UKyV6k7xYFr1%2BkS2m6Pw%2FjmoVNSrPYqBYreznpkH0XTUykMrSF0%2BUDNXo6JoLHAcPY6JG&X-Amz-Signature=bfa2126f3745f66b9fd86e336d6c2ef6a248258ab61ed4481512c0ae96566488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDITXBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCE70e5NbGY67yNC1e9YOee7PwbQuYWgzvJbmentZEuhQIgS8KVT7uR0dijXqs0aQ3jya%2FwPR9mU82PXHuMHcQacFAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHr8dcWJsgJ7VI9zSrcA482npGo8U4D8a51v%2FTxjUKsWjMHd91IL5S9ojNRJnknsDN32v1zfjUxUVEQ3dcrkq9eEO2Fh%2BZ%2FH6Kdpz%2FbOJ4gR5S3MAzF203NXLq7167ONAVsCgVr%2B0hi17VgAqllhEjLTNWVEWcUGOc0RwScIeWajNCDdlb87MeSGhMaF8J3IEhRu8HxG4J4rInBqpB2ItPvKr7Q7qs8%2BxNBkesMLXYB5sx78KFJdsUDMLWCSYAnSbKHjWZRT6Zg24nIAnndwR7LqOTvNVzFe0zjqn8jVbB8nPIoJ2Swhhv46trUNFi8GfdDKhc%2BuqZJurvjnoUQP%2B5Btw4puQsjABAfDEfWi5buOwEL43DM9lXxvbyec8iwfQnNWLP1S4vmqS9SLIzuVYYnVviGKsxvdjJNBFA71lr0%2FnkBU0ZdH1P%2FENzv27hAI%2BW6UyRlyyBSsrvUaAhxG1fZTf5AIX34aA5zEcRGruaLIzagpbQ1kkQSuJMUZUqsV5DRJFCai5FLl3opl18placPikv7EfJ24gdpwrukOZfbIv88dEBDVTvPhqfVbfkTDg1npwSmIEvSJgYDY8u946Q0m9VWR0uHgrdUTjy%2BzWEEpKlhK9zLpKE7To5qpPG3FsJ2FkrLoD6bPPa1MLjbl8MGOqUBuKLg76BTfWsVuG%2BIyjW93odJNq3fgE0iT7O5u5r6i4hhBsR6KrlqXP1wl51aIKEnIQCMq7%2B5t8z1BjHObKck8RunAki4OG%2BzljBH%2FPFmII0w7mowk9QIeG%2BzRvn4tco0KYelx36HFbyg0adClXeJjj6UKyV6k7xYFr1%2BkS2m6Pw%2FjmoVNSrPYqBYreznpkH0XTUykMrSF0%2BUDNXo6JoLHAcPY6JG&X-Amz-Signature=4465d486d074faec57766727f063e6a640b9235e59e8dfce48b66988c9855a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDITXBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCE70e5NbGY67yNC1e9YOee7PwbQuYWgzvJbmentZEuhQIgS8KVT7uR0dijXqs0aQ3jya%2FwPR9mU82PXHuMHcQacFAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHr8dcWJsgJ7VI9zSrcA482npGo8U4D8a51v%2FTxjUKsWjMHd91IL5S9ojNRJnknsDN32v1zfjUxUVEQ3dcrkq9eEO2Fh%2BZ%2FH6Kdpz%2FbOJ4gR5S3MAzF203NXLq7167ONAVsCgVr%2B0hi17VgAqllhEjLTNWVEWcUGOc0RwScIeWajNCDdlb87MeSGhMaF8J3IEhRu8HxG4J4rInBqpB2ItPvKr7Q7qs8%2BxNBkesMLXYB5sx78KFJdsUDMLWCSYAnSbKHjWZRT6Zg24nIAnndwR7LqOTvNVzFe0zjqn8jVbB8nPIoJ2Swhhv46trUNFi8GfdDKhc%2BuqZJurvjnoUQP%2B5Btw4puQsjABAfDEfWi5buOwEL43DM9lXxvbyec8iwfQnNWLP1S4vmqS9SLIzuVYYnVviGKsxvdjJNBFA71lr0%2FnkBU0ZdH1P%2FENzv27hAI%2BW6UyRlyyBSsrvUaAhxG1fZTf5AIX34aA5zEcRGruaLIzagpbQ1kkQSuJMUZUqsV5DRJFCai5FLl3opl18placPikv7EfJ24gdpwrukOZfbIv88dEBDVTvPhqfVbfkTDg1npwSmIEvSJgYDY8u946Q0m9VWR0uHgrdUTjy%2BzWEEpKlhK9zLpKE7To5qpPG3FsJ2FkrLoD6bPPa1MLjbl8MGOqUBuKLg76BTfWsVuG%2BIyjW93odJNq3fgE0iT7O5u5r6i4hhBsR6KrlqXP1wl51aIKEnIQCMq7%2B5t8z1BjHObKck8RunAki4OG%2BzljBH%2FPFmII0w7mowk9QIeG%2BzRvn4tco0KYelx36HFbyg0adClXeJjj6UKyV6k7xYFr1%2BkS2m6Pw%2FjmoVNSrPYqBYreznpkH0XTUykMrSF0%2BUDNXo6JoLHAcPY6JG&X-Amz-Signature=bb5d2860b5f9d2bede64fbbba509f10fd36cf2272315db5a8db4d68b5a2fbb88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
