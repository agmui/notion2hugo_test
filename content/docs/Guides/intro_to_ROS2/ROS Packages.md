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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW42DSRU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICJ1ZTy6aT%2FKV70VlbzFpP0LGjTeWzZbzBgFPGChEtvhAiEAvBdgXqeNworVE53m5KIXMX0jDD%2FAj9vJeFdgpugy7L8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJZk5xxW468YO%2FEAVircA2gLlFID8tdKh0%2Bz%2FPiLZCB2AKNPznTped19vTqodbtZA%2FQkvpuTINVgT8%2B1qiQ%2BK1bs%2FJZyTnIab8gIGk96bfA%2FMIHlXSfxkjl02%2FegU6caZP3Xu8b1YkPq39t%2FYN%2BgdY0NneEJ6yqzmnT90ZIO%2F%2FP9LKqVELNtKY9ot08zWvkep9fz4tQk2lpsU4CNdDMc2rDSD1N8A3yZWTPORJORYZCv1g8C4ty3FiN37wKz07wp%2FT4rjMwj%2FhylDAJ%2B5upTYh2QnSc%2FwCf3iACY97TW%2F4gwbetA8pkWNqR0uLeWbLzs3G%2BCt5z4Lh%2FTzqz1Lunwo%2F8g%2B29idVLlDg63qiuCY0VSCYHzOER2ZNld%2F%2BamKHaJwlqgET3X1ZBq0zZGwbP%2F8cyT8EuvURczzXcXCiKBMgc%2B7OgnEnBP1UrEXJf8Zmk8zqKnVKHZOe9NP%2FGo6Yd%2Bkllf8lMAdFFUNRSDy%2BFvSZVg8LgrobG4ejw%2Buy%2B5g%2FbbGjtaJpu2C%2BrPSDXWMxQxA87ZRaSM8lnEx6QiqTV5WexZEDZLvXPV2EGelasj6%2FyOKlLVWJ8fQYDgyQr8b0WLVyQAuGwm3OpgXOOKrZWpWs79C5eBkVLzV%2FmTd73H4aH2AZJcQ4MbqHlfV0n2MMH7%2BsEGOqUB4%2BuyOln42IpU6aKgzkoIoJ%2BPFWgKCyrniMtMbtDkIGiJbeAkC08aH4A6qm8y3XgAVZLRMiIdE8FBtJ0x6HQCyxE9ixcYV3lBpqpus1YvmxAARTT9SHLruk4I%2Fe6HWC84F%2BC7WLZZ0E8f1LiTWrKDgc9fy64Jn%2BXex8UO90%2FOFfoQpwBKyI66WKDMRnGJcWSvboLmPVv4UblfUJFU7f6xMC5XxNb5&X-Amz-Signature=17cbce1f1eb3ea58d3ec6de3c4586ab9a6041176177a6f98c3210618f0a77d38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW42DSRU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICJ1ZTy6aT%2FKV70VlbzFpP0LGjTeWzZbzBgFPGChEtvhAiEAvBdgXqeNworVE53m5KIXMX0jDD%2FAj9vJeFdgpugy7L8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJZk5xxW468YO%2FEAVircA2gLlFID8tdKh0%2Bz%2FPiLZCB2AKNPznTped19vTqodbtZA%2FQkvpuTINVgT8%2B1qiQ%2BK1bs%2FJZyTnIab8gIGk96bfA%2FMIHlXSfxkjl02%2FegU6caZP3Xu8b1YkPq39t%2FYN%2BgdY0NneEJ6yqzmnT90ZIO%2F%2FP9LKqVELNtKY9ot08zWvkep9fz4tQk2lpsU4CNdDMc2rDSD1N8A3yZWTPORJORYZCv1g8C4ty3FiN37wKz07wp%2FT4rjMwj%2FhylDAJ%2B5upTYh2QnSc%2FwCf3iACY97TW%2F4gwbetA8pkWNqR0uLeWbLzs3G%2BCt5z4Lh%2FTzqz1Lunwo%2F8g%2B29idVLlDg63qiuCY0VSCYHzOER2ZNld%2F%2BamKHaJwlqgET3X1ZBq0zZGwbP%2F8cyT8EuvURczzXcXCiKBMgc%2B7OgnEnBP1UrEXJf8Zmk8zqKnVKHZOe9NP%2FGo6Yd%2Bkllf8lMAdFFUNRSDy%2BFvSZVg8LgrobG4ejw%2Buy%2B5g%2FbbGjtaJpu2C%2BrPSDXWMxQxA87ZRaSM8lnEx6QiqTV5WexZEDZLvXPV2EGelasj6%2FyOKlLVWJ8fQYDgyQr8b0WLVyQAuGwm3OpgXOOKrZWpWs79C5eBkVLzV%2FmTd73H4aH2AZJcQ4MbqHlfV0n2MMH7%2BsEGOqUB4%2BuyOln42IpU6aKgzkoIoJ%2BPFWgKCyrniMtMbtDkIGiJbeAkC08aH4A6qm8y3XgAVZLRMiIdE8FBtJ0x6HQCyxE9ixcYV3lBpqpus1YvmxAARTT9SHLruk4I%2Fe6HWC84F%2BC7WLZZ0E8f1LiTWrKDgc9fy64Jn%2BXex8UO90%2FOFfoQpwBKyI66WKDMRnGJcWSvboLmPVv4UblfUJFU7f6xMC5XxNb5&X-Amz-Signature=51f3f3d138b8ab67357e6993d8bdd3b55b3a80600911711f6acfe8d793d0a6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW42DSRU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICJ1ZTy6aT%2FKV70VlbzFpP0LGjTeWzZbzBgFPGChEtvhAiEAvBdgXqeNworVE53m5KIXMX0jDD%2FAj9vJeFdgpugy7L8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJZk5xxW468YO%2FEAVircA2gLlFID8tdKh0%2Bz%2FPiLZCB2AKNPznTped19vTqodbtZA%2FQkvpuTINVgT8%2B1qiQ%2BK1bs%2FJZyTnIab8gIGk96bfA%2FMIHlXSfxkjl02%2FegU6caZP3Xu8b1YkPq39t%2FYN%2BgdY0NneEJ6yqzmnT90ZIO%2F%2FP9LKqVELNtKY9ot08zWvkep9fz4tQk2lpsU4CNdDMc2rDSD1N8A3yZWTPORJORYZCv1g8C4ty3FiN37wKz07wp%2FT4rjMwj%2FhylDAJ%2B5upTYh2QnSc%2FwCf3iACY97TW%2F4gwbetA8pkWNqR0uLeWbLzs3G%2BCt5z4Lh%2FTzqz1Lunwo%2F8g%2B29idVLlDg63qiuCY0VSCYHzOER2ZNld%2F%2BamKHaJwlqgET3X1ZBq0zZGwbP%2F8cyT8EuvURczzXcXCiKBMgc%2B7OgnEnBP1UrEXJf8Zmk8zqKnVKHZOe9NP%2FGo6Yd%2Bkllf8lMAdFFUNRSDy%2BFvSZVg8LgrobG4ejw%2Buy%2B5g%2FbbGjtaJpu2C%2BrPSDXWMxQxA87ZRaSM8lnEx6QiqTV5WexZEDZLvXPV2EGelasj6%2FyOKlLVWJ8fQYDgyQr8b0WLVyQAuGwm3OpgXOOKrZWpWs79C5eBkVLzV%2FmTd73H4aH2AZJcQ4MbqHlfV0n2MMH7%2BsEGOqUB4%2BuyOln42IpU6aKgzkoIoJ%2BPFWgKCyrniMtMbtDkIGiJbeAkC08aH4A6qm8y3XgAVZLRMiIdE8FBtJ0x6HQCyxE9ixcYV3lBpqpus1YvmxAARTT9SHLruk4I%2Fe6HWC84F%2BC7WLZZ0E8f1LiTWrKDgc9fy64Jn%2BXex8UO90%2FOFfoQpwBKyI66WKDMRnGJcWSvboLmPVv4UblfUJFU7f6xMC5XxNb5&X-Amz-Signature=9688d519e281ecbb151b80dc5c0ce7b4c06fcf5047437f9be1009493af922bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW42DSRU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICJ1ZTy6aT%2FKV70VlbzFpP0LGjTeWzZbzBgFPGChEtvhAiEAvBdgXqeNworVE53m5KIXMX0jDD%2FAj9vJeFdgpugy7L8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJZk5xxW468YO%2FEAVircA2gLlFID8tdKh0%2Bz%2FPiLZCB2AKNPznTped19vTqodbtZA%2FQkvpuTINVgT8%2B1qiQ%2BK1bs%2FJZyTnIab8gIGk96bfA%2FMIHlXSfxkjl02%2FegU6caZP3Xu8b1YkPq39t%2FYN%2BgdY0NneEJ6yqzmnT90ZIO%2F%2FP9LKqVELNtKY9ot08zWvkep9fz4tQk2lpsU4CNdDMc2rDSD1N8A3yZWTPORJORYZCv1g8C4ty3FiN37wKz07wp%2FT4rjMwj%2FhylDAJ%2B5upTYh2QnSc%2FwCf3iACY97TW%2F4gwbetA8pkWNqR0uLeWbLzs3G%2BCt5z4Lh%2FTzqz1Lunwo%2F8g%2B29idVLlDg63qiuCY0VSCYHzOER2ZNld%2F%2BamKHaJwlqgET3X1ZBq0zZGwbP%2F8cyT8EuvURczzXcXCiKBMgc%2B7OgnEnBP1UrEXJf8Zmk8zqKnVKHZOe9NP%2FGo6Yd%2Bkllf8lMAdFFUNRSDy%2BFvSZVg8LgrobG4ejw%2Buy%2B5g%2FbbGjtaJpu2C%2BrPSDXWMxQxA87ZRaSM8lnEx6QiqTV5WexZEDZLvXPV2EGelasj6%2FyOKlLVWJ8fQYDgyQr8b0WLVyQAuGwm3OpgXOOKrZWpWs79C5eBkVLzV%2FmTd73H4aH2AZJcQ4MbqHlfV0n2MMH7%2BsEGOqUB4%2BuyOln42IpU6aKgzkoIoJ%2BPFWgKCyrniMtMbtDkIGiJbeAkC08aH4A6qm8y3XgAVZLRMiIdE8FBtJ0x6HQCyxE9ixcYV3lBpqpus1YvmxAARTT9SHLruk4I%2Fe6HWC84F%2BC7WLZZ0E8f1LiTWrKDgc9fy64Jn%2BXex8UO90%2FOFfoQpwBKyI66WKDMRnGJcWSvboLmPVv4UblfUJFU7f6xMC5XxNb5&X-Amz-Signature=cec8f07c361bba14e412e7dd8d125b00ed3cddd837fac27f1fc86c9bdf92268a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW42DSRU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICJ1ZTy6aT%2FKV70VlbzFpP0LGjTeWzZbzBgFPGChEtvhAiEAvBdgXqeNworVE53m5KIXMX0jDD%2FAj9vJeFdgpugy7L8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJZk5xxW468YO%2FEAVircA2gLlFID8tdKh0%2Bz%2FPiLZCB2AKNPznTped19vTqodbtZA%2FQkvpuTINVgT8%2B1qiQ%2BK1bs%2FJZyTnIab8gIGk96bfA%2FMIHlXSfxkjl02%2FegU6caZP3Xu8b1YkPq39t%2FYN%2BgdY0NneEJ6yqzmnT90ZIO%2F%2FP9LKqVELNtKY9ot08zWvkep9fz4tQk2lpsU4CNdDMc2rDSD1N8A3yZWTPORJORYZCv1g8C4ty3FiN37wKz07wp%2FT4rjMwj%2FhylDAJ%2B5upTYh2QnSc%2FwCf3iACY97TW%2F4gwbetA8pkWNqR0uLeWbLzs3G%2BCt5z4Lh%2FTzqz1Lunwo%2F8g%2B29idVLlDg63qiuCY0VSCYHzOER2ZNld%2F%2BamKHaJwlqgET3X1ZBq0zZGwbP%2F8cyT8EuvURczzXcXCiKBMgc%2B7OgnEnBP1UrEXJf8Zmk8zqKnVKHZOe9NP%2FGo6Yd%2Bkllf8lMAdFFUNRSDy%2BFvSZVg8LgrobG4ejw%2Buy%2B5g%2FbbGjtaJpu2C%2BrPSDXWMxQxA87ZRaSM8lnEx6QiqTV5WexZEDZLvXPV2EGelasj6%2FyOKlLVWJ8fQYDgyQr8b0WLVyQAuGwm3OpgXOOKrZWpWs79C5eBkVLzV%2FmTd73H4aH2AZJcQ4MbqHlfV0n2MMH7%2BsEGOqUB4%2BuyOln42IpU6aKgzkoIoJ%2BPFWgKCyrniMtMbtDkIGiJbeAkC08aH4A6qm8y3XgAVZLRMiIdE8FBtJ0x6HQCyxE9ixcYV3lBpqpus1YvmxAARTT9SHLruk4I%2Fe6HWC84F%2BC7WLZZ0E8f1LiTWrKDgc9fy64Jn%2BXex8UO90%2FOFfoQpwBKyI66WKDMRnGJcWSvboLmPVv4UblfUJFU7f6xMC5XxNb5&X-Amz-Signature=4fc78307549251fa37712b58cd2754780b7ca39624b40b274d178abf9aa76a53&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW42DSRU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICJ1ZTy6aT%2FKV70VlbzFpP0LGjTeWzZbzBgFPGChEtvhAiEAvBdgXqeNworVE53m5KIXMX0jDD%2FAj9vJeFdgpugy7L8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJZk5xxW468YO%2FEAVircA2gLlFID8tdKh0%2Bz%2FPiLZCB2AKNPznTped19vTqodbtZA%2FQkvpuTINVgT8%2B1qiQ%2BK1bs%2FJZyTnIab8gIGk96bfA%2FMIHlXSfxkjl02%2FegU6caZP3Xu8b1YkPq39t%2FYN%2BgdY0NneEJ6yqzmnT90ZIO%2F%2FP9LKqVELNtKY9ot08zWvkep9fz4tQk2lpsU4CNdDMc2rDSD1N8A3yZWTPORJORYZCv1g8C4ty3FiN37wKz07wp%2FT4rjMwj%2FhylDAJ%2B5upTYh2QnSc%2FwCf3iACY97TW%2F4gwbetA8pkWNqR0uLeWbLzs3G%2BCt5z4Lh%2FTzqz1Lunwo%2F8g%2B29idVLlDg63qiuCY0VSCYHzOER2ZNld%2F%2BamKHaJwlqgET3X1ZBq0zZGwbP%2F8cyT8EuvURczzXcXCiKBMgc%2B7OgnEnBP1UrEXJf8Zmk8zqKnVKHZOe9NP%2FGo6Yd%2Bkllf8lMAdFFUNRSDy%2BFvSZVg8LgrobG4ejw%2Buy%2B5g%2FbbGjtaJpu2C%2BrPSDXWMxQxA87ZRaSM8lnEx6QiqTV5WexZEDZLvXPV2EGelasj6%2FyOKlLVWJ8fQYDgyQr8b0WLVyQAuGwm3OpgXOOKrZWpWs79C5eBkVLzV%2FmTd73H4aH2AZJcQ4MbqHlfV0n2MMH7%2BsEGOqUB4%2BuyOln42IpU6aKgzkoIoJ%2BPFWgKCyrniMtMbtDkIGiJbeAkC08aH4A6qm8y3XgAVZLRMiIdE8FBtJ0x6HQCyxE9ixcYV3lBpqpus1YvmxAARTT9SHLruk4I%2Fe6HWC84F%2BC7WLZZ0E8f1LiTWrKDgc9fy64Jn%2BXex8UO90%2FOFfoQpwBKyI66WKDMRnGJcWSvboLmPVv4UblfUJFU7f6xMC5XxNb5&X-Amz-Signature=c1f44d828f27ab1e2a58523bfb7c87abd7373a5d87abb3d3c9f90af178527d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW42DSRU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICJ1ZTy6aT%2FKV70VlbzFpP0LGjTeWzZbzBgFPGChEtvhAiEAvBdgXqeNworVE53m5KIXMX0jDD%2FAj9vJeFdgpugy7L8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJZk5xxW468YO%2FEAVircA2gLlFID8tdKh0%2Bz%2FPiLZCB2AKNPznTped19vTqodbtZA%2FQkvpuTINVgT8%2B1qiQ%2BK1bs%2FJZyTnIab8gIGk96bfA%2FMIHlXSfxkjl02%2FegU6caZP3Xu8b1YkPq39t%2FYN%2BgdY0NneEJ6yqzmnT90ZIO%2F%2FP9LKqVELNtKY9ot08zWvkep9fz4tQk2lpsU4CNdDMc2rDSD1N8A3yZWTPORJORYZCv1g8C4ty3FiN37wKz07wp%2FT4rjMwj%2FhylDAJ%2B5upTYh2QnSc%2FwCf3iACY97TW%2F4gwbetA8pkWNqR0uLeWbLzs3G%2BCt5z4Lh%2FTzqz1Lunwo%2F8g%2B29idVLlDg63qiuCY0VSCYHzOER2ZNld%2F%2BamKHaJwlqgET3X1ZBq0zZGwbP%2F8cyT8EuvURczzXcXCiKBMgc%2B7OgnEnBP1UrEXJf8Zmk8zqKnVKHZOe9NP%2FGo6Yd%2Bkllf8lMAdFFUNRSDy%2BFvSZVg8LgrobG4ejw%2Buy%2B5g%2FbbGjtaJpu2C%2BrPSDXWMxQxA87ZRaSM8lnEx6QiqTV5WexZEDZLvXPV2EGelasj6%2FyOKlLVWJ8fQYDgyQr8b0WLVyQAuGwm3OpgXOOKrZWpWs79C5eBkVLzV%2FmTd73H4aH2AZJcQ4MbqHlfV0n2MMH7%2BsEGOqUB4%2BuyOln42IpU6aKgzkoIoJ%2BPFWgKCyrniMtMbtDkIGiJbeAkC08aH4A6qm8y3XgAVZLRMiIdE8FBtJ0x6HQCyxE9ixcYV3lBpqpus1YvmxAARTT9SHLruk4I%2Fe6HWC84F%2BC7WLZZ0E8f1LiTWrKDgc9fy64Jn%2BXex8UO90%2FOFfoQpwBKyI66WKDMRnGJcWSvboLmPVv4UblfUJFU7f6xMC5XxNb5&X-Amz-Signature=96777da6aa55d398fda388383a1c5e7f6c3bf22726d7cf80133bfd2225e66bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
