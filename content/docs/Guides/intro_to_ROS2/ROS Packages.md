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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XNJXY2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb0b8ZIHrmei2553Dokt1PL7jFAT56Ep9IqYwyF2sTrQIgJdZF31G4DAzTZIUXtRuDZxupEGe7S8yRiap4ylpXhSQq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPL8PoaOXzQO6QZQMyrcAz1MX6DfMKgWBk%2BFG9hKegflHOMny83kmSWqVr6FiA9Ea7J4tPXT8lXsHc%2FPmS55zLaTH5YYplbL8X7Jfw114f3T3Ax9pRKx7O0oA58o7OuY2tEIzYUQ75tRjl1Tp5ekCo85djsH%2FO7yekb3j%2BOydYQiueNrRk3vb1%2F9%2FYgiCh1y8Oj8fS0effXBb%2B2E5nUtxPXbTvF3D8QB484NKfFMqnMrbOfEHJ5NquJFFK6smPBYAE%2BsZKNvag2PaLh4PGoriNFtsrg3UkJfcgB7rj2q%2FQLZP1Y1AFrUapStHLBV4UDhNkRX6TMVgG2RvsyuX%2F1N5LaGbSymqkit720ojDiMod2z8RGL30NEjsdShsBSPhMxMlVy9Enx3JopmipBtEgLmKPbVjDxFsCqiMoJl6HhrK1k4CAR0djPOtNNToec0tbDy2K7BCbmJ0l6Kat0wnp4e2DQeteVuV5HWfSN7rgcGTMhRGBTwq1jb%2FTXZKwI1YeOmc%2BZWpIKeA9iKcwosKQzmdGVSDNSbyMEsmCxr2%2B9qQBqSQ%2FA3d3QIK6bDxjetbkjuppcvLeLOIhq5cGiuP96sApH9tkgeCWaWqesBybtA8R1NOW2ZDSd69QSawfYrYr6yGc7IaQSA6BeJ22YMLbh670GOqUB%2FlknggQgImlgLn697xj%2Bef3ye1c%2BGbx9adsFIPG1wvG5m8MBPbpA6WbIxe2WKwethfYZbBjeGo42Add6ESvte7GAgWZHe0r36LHG%2BRjPIr90WGolHA33sdjC1kMZ2GipBpBOPlavjTIqt8iYC9tZSro2LVUZLRBaSG2Ie2%2FXh3DKxqT1%2FwIjwzgzrBkUMLN4kgbyy0LH%2FIJbqDoReNH3zKYpoXVU&X-Amz-Signature=b356a91cb18e9e0c3741e054d65c6e0ecd6c224e96b93a23d7c8a0d188855f26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XNJXY2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb0b8ZIHrmei2553Dokt1PL7jFAT56Ep9IqYwyF2sTrQIgJdZF31G4DAzTZIUXtRuDZxupEGe7S8yRiap4ylpXhSQq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPL8PoaOXzQO6QZQMyrcAz1MX6DfMKgWBk%2BFG9hKegflHOMny83kmSWqVr6FiA9Ea7J4tPXT8lXsHc%2FPmS55zLaTH5YYplbL8X7Jfw114f3T3Ax9pRKx7O0oA58o7OuY2tEIzYUQ75tRjl1Tp5ekCo85djsH%2FO7yekb3j%2BOydYQiueNrRk3vb1%2F9%2FYgiCh1y8Oj8fS0effXBb%2B2E5nUtxPXbTvF3D8QB484NKfFMqnMrbOfEHJ5NquJFFK6smPBYAE%2BsZKNvag2PaLh4PGoriNFtsrg3UkJfcgB7rj2q%2FQLZP1Y1AFrUapStHLBV4UDhNkRX6TMVgG2RvsyuX%2F1N5LaGbSymqkit720ojDiMod2z8RGL30NEjsdShsBSPhMxMlVy9Enx3JopmipBtEgLmKPbVjDxFsCqiMoJl6HhrK1k4CAR0djPOtNNToec0tbDy2K7BCbmJ0l6Kat0wnp4e2DQeteVuV5HWfSN7rgcGTMhRGBTwq1jb%2FTXZKwI1YeOmc%2BZWpIKeA9iKcwosKQzmdGVSDNSbyMEsmCxr2%2B9qQBqSQ%2FA3d3QIK6bDxjetbkjuppcvLeLOIhq5cGiuP96sApH9tkgeCWaWqesBybtA8R1NOW2ZDSd69QSawfYrYr6yGc7IaQSA6BeJ22YMLbh670GOqUB%2FlknggQgImlgLn697xj%2Bef3ye1c%2BGbx9adsFIPG1wvG5m8MBPbpA6WbIxe2WKwethfYZbBjeGo42Add6ESvte7GAgWZHe0r36LHG%2BRjPIr90WGolHA33sdjC1kMZ2GipBpBOPlavjTIqt8iYC9tZSro2LVUZLRBaSG2Ie2%2FXh3DKxqT1%2FwIjwzgzrBkUMLN4kgbyy0LH%2FIJbqDoReNH3zKYpoXVU&X-Amz-Signature=b14cd13f79845dd8900da5bcc0d13fe13e83264bc133f4ae5e9f6b026839311b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XNJXY2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb0b8ZIHrmei2553Dokt1PL7jFAT56Ep9IqYwyF2sTrQIgJdZF31G4DAzTZIUXtRuDZxupEGe7S8yRiap4ylpXhSQq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPL8PoaOXzQO6QZQMyrcAz1MX6DfMKgWBk%2BFG9hKegflHOMny83kmSWqVr6FiA9Ea7J4tPXT8lXsHc%2FPmS55zLaTH5YYplbL8X7Jfw114f3T3Ax9pRKx7O0oA58o7OuY2tEIzYUQ75tRjl1Tp5ekCo85djsH%2FO7yekb3j%2BOydYQiueNrRk3vb1%2F9%2FYgiCh1y8Oj8fS0effXBb%2B2E5nUtxPXbTvF3D8QB484NKfFMqnMrbOfEHJ5NquJFFK6smPBYAE%2BsZKNvag2PaLh4PGoriNFtsrg3UkJfcgB7rj2q%2FQLZP1Y1AFrUapStHLBV4UDhNkRX6TMVgG2RvsyuX%2F1N5LaGbSymqkit720ojDiMod2z8RGL30NEjsdShsBSPhMxMlVy9Enx3JopmipBtEgLmKPbVjDxFsCqiMoJl6HhrK1k4CAR0djPOtNNToec0tbDy2K7BCbmJ0l6Kat0wnp4e2DQeteVuV5HWfSN7rgcGTMhRGBTwq1jb%2FTXZKwI1YeOmc%2BZWpIKeA9iKcwosKQzmdGVSDNSbyMEsmCxr2%2B9qQBqSQ%2FA3d3QIK6bDxjetbkjuppcvLeLOIhq5cGiuP96sApH9tkgeCWaWqesBybtA8R1NOW2ZDSd69QSawfYrYr6yGc7IaQSA6BeJ22YMLbh670GOqUB%2FlknggQgImlgLn697xj%2Bef3ye1c%2BGbx9adsFIPG1wvG5m8MBPbpA6WbIxe2WKwethfYZbBjeGo42Add6ESvte7GAgWZHe0r36LHG%2BRjPIr90WGolHA33sdjC1kMZ2GipBpBOPlavjTIqt8iYC9tZSro2LVUZLRBaSG2Ie2%2FXh3DKxqT1%2FwIjwzgzrBkUMLN4kgbyy0LH%2FIJbqDoReNH3zKYpoXVU&X-Amz-Signature=9b5e0be5723180b4e7458a3748e366118e8632354360875e6b66c3c46560e454&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XNJXY2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb0b8ZIHrmei2553Dokt1PL7jFAT56Ep9IqYwyF2sTrQIgJdZF31G4DAzTZIUXtRuDZxupEGe7S8yRiap4ylpXhSQq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPL8PoaOXzQO6QZQMyrcAz1MX6DfMKgWBk%2BFG9hKegflHOMny83kmSWqVr6FiA9Ea7J4tPXT8lXsHc%2FPmS55zLaTH5YYplbL8X7Jfw114f3T3Ax9pRKx7O0oA58o7OuY2tEIzYUQ75tRjl1Tp5ekCo85djsH%2FO7yekb3j%2BOydYQiueNrRk3vb1%2F9%2FYgiCh1y8Oj8fS0effXBb%2B2E5nUtxPXbTvF3D8QB484NKfFMqnMrbOfEHJ5NquJFFK6smPBYAE%2BsZKNvag2PaLh4PGoriNFtsrg3UkJfcgB7rj2q%2FQLZP1Y1AFrUapStHLBV4UDhNkRX6TMVgG2RvsyuX%2F1N5LaGbSymqkit720ojDiMod2z8RGL30NEjsdShsBSPhMxMlVy9Enx3JopmipBtEgLmKPbVjDxFsCqiMoJl6HhrK1k4CAR0djPOtNNToec0tbDy2K7BCbmJ0l6Kat0wnp4e2DQeteVuV5HWfSN7rgcGTMhRGBTwq1jb%2FTXZKwI1YeOmc%2BZWpIKeA9iKcwosKQzmdGVSDNSbyMEsmCxr2%2B9qQBqSQ%2FA3d3QIK6bDxjetbkjuppcvLeLOIhq5cGiuP96sApH9tkgeCWaWqesBybtA8R1NOW2ZDSd69QSawfYrYr6yGc7IaQSA6BeJ22YMLbh670GOqUB%2FlknggQgImlgLn697xj%2Bef3ye1c%2BGbx9adsFIPG1wvG5m8MBPbpA6WbIxe2WKwethfYZbBjeGo42Add6ESvte7GAgWZHe0r36LHG%2BRjPIr90WGolHA33sdjC1kMZ2GipBpBOPlavjTIqt8iYC9tZSro2LVUZLRBaSG2Ie2%2FXh3DKxqT1%2FwIjwzgzrBkUMLN4kgbyy0LH%2FIJbqDoReNH3zKYpoXVU&X-Amz-Signature=64fe0c582ce63f8e5d0209df9cacf1e7b27732bcf561823886808dd3a9e84b98&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XNJXY2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb0b8ZIHrmei2553Dokt1PL7jFAT56Ep9IqYwyF2sTrQIgJdZF31G4DAzTZIUXtRuDZxupEGe7S8yRiap4ylpXhSQq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPL8PoaOXzQO6QZQMyrcAz1MX6DfMKgWBk%2BFG9hKegflHOMny83kmSWqVr6FiA9Ea7J4tPXT8lXsHc%2FPmS55zLaTH5YYplbL8X7Jfw114f3T3Ax9pRKx7O0oA58o7OuY2tEIzYUQ75tRjl1Tp5ekCo85djsH%2FO7yekb3j%2BOydYQiueNrRk3vb1%2F9%2FYgiCh1y8Oj8fS0effXBb%2B2E5nUtxPXbTvF3D8QB484NKfFMqnMrbOfEHJ5NquJFFK6smPBYAE%2BsZKNvag2PaLh4PGoriNFtsrg3UkJfcgB7rj2q%2FQLZP1Y1AFrUapStHLBV4UDhNkRX6TMVgG2RvsyuX%2F1N5LaGbSymqkit720ojDiMod2z8RGL30NEjsdShsBSPhMxMlVy9Enx3JopmipBtEgLmKPbVjDxFsCqiMoJl6HhrK1k4CAR0djPOtNNToec0tbDy2K7BCbmJ0l6Kat0wnp4e2DQeteVuV5HWfSN7rgcGTMhRGBTwq1jb%2FTXZKwI1YeOmc%2BZWpIKeA9iKcwosKQzmdGVSDNSbyMEsmCxr2%2B9qQBqSQ%2FA3d3QIK6bDxjetbkjuppcvLeLOIhq5cGiuP96sApH9tkgeCWaWqesBybtA8R1NOW2ZDSd69QSawfYrYr6yGc7IaQSA6BeJ22YMLbh670GOqUB%2FlknggQgImlgLn697xj%2Bef3ye1c%2BGbx9adsFIPG1wvG5m8MBPbpA6WbIxe2WKwethfYZbBjeGo42Add6ESvte7GAgWZHe0r36LHG%2BRjPIr90WGolHA33sdjC1kMZ2GipBpBOPlavjTIqt8iYC9tZSro2LVUZLRBaSG2Ie2%2FXh3DKxqT1%2FwIjwzgzrBkUMLN4kgbyy0LH%2FIJbqDoReNH3zKYpoXVU&X-Amz-Signature=75935db3441cccefcf0cc3bc7dcc2487f3e2bc31073c1f32d3fbef06b9b4e103&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XNJXY2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb0b8ZIHrmei2553Dokt1PL7jFAT56Ep9IqYwyF2sTrQIgJdZF31G4DAzTZIUXtRuDZxupEGe7S8yRiap4ylpXhSQq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPL8PoaOXzQO6QZQMyrcAz1MX6DfMKgWBk%2BFG9hKegflHOMny83kmSWqVr6FiA9Ea7J4tPXT8lXsHc%2FPmS55zLaTH5YYplbL8X7Jfw114f3T3Ax9pRKx7O0oA58o7OuY2tEIzYUQ75tRjl1Tp5ekCo85djsH%2FO7yekb3j%2BOydYQiueNrRk3vb1%2F9%2FYgiCh1y8Oj8fS0effXBb%2B2E5nUtxPXbTvF3D8QB484NKfFMqnMrbOfEHJ5NquJFFK6smPBYAE%2BsZKNvag2PaLh4PGoriNFtsrg3UkJfcgB7rj2q%2FQLZP1Y1AFrUapStHLBV4UDhNkRX6TMVgG2RvsyuX%2F1N5LaGbSymqkit720ojDiMod2z8RGL30NEjsdShsBSPhMxMlVy9Enx3JopmipBtEgLmKPbVjDxFsCqiMoJl6HhrK1k4CAR0djPOtNNToec0tbDy2K7BCbmJ0l6Kat0wnp4e2DQeteVuV5HWfSN7rgcGTMhRGBTwq1jb%2FTXZKwI1YeOmc%2BZWpIKeA9iKcwosKQzmdGVSDNSbyMEsmCxr2%2B9qQBqSQ%2FA3d3QIK6bDxjetbkjuppcvLeLOIhq5cGiuP96sApH9tkgeCWaWqesBybtA8R1NOW2ZDSd69QSawfYrYr6yGc7IaQSA6BeJ22YMLbh670GOqUB%2FlknggQgImlgLn697xj%2Bef3ye1c%2BGbx9adsFIPG1wvG5m8MBPbpA6WbIxe2WKwethfYZbBjeGo42Add6ESvte7GAgWZHe0r36LHG%2BRjPIr90WGolHA33sdjC1kMZ2GipBpBOPlavjTIqt8iYC9tZSro2LVUZLRBaSG2Ie2%2FXh3DKxqT1%2FwIjwzgzrBkUMLN4kgbyy0LH%2FIJbqDoReNH3zKYpoXVU&X-Amz-Signature=8cfea9fc963b34ac499dcf16756ce296bea2c32a3c48222a0eea636d04c1a921&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XNJXY2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb0b8ZIHrmei2553Dokt1PL7jFAT56Ep9IqYwyF2sTrQIgJdZF31G4DAzTZIUXtRuDZxupEGe7S8yRiap4ylpXhSQq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPL8PoaOXzQO6QZQMyrcAz1MX6DfMKgWBk%2BFG9hKegflHOMny83kmSWqVr6FiA9Ea7J4tPXT8lXsHc%2FPmS55zLaTH5YYplbL8X7Jfw114f3T3Ax9pRKx7O0oA58o7OuY2tEIzYUQ75tRjl1Tp5ekCo85djsH%2FO7yekb3j%2BOydYQiueNrRk3vb1%2F9%2FYgiCh1y8Oj8fS0effXBb%2B2E5nUtxPXbTvF3D8QB484NKfFMqnMrbOfEHJ5NquJFFK6smPBYAE%2BsZKNvag2PaLh4PGoriNFtsrg3UkJfcgB7rj2q%2FQLZP1Y1AFrUapStHLBV4UDhNkRX6TMVgG2RvsyuX%2F1N5LaGbSymqkit720ojDiMod2z8RGL30NEjsdShsBSPhMxMlVy9Enx3JopmipBtEgLmKPbVjDxFsCqiMoJl6HhrK1k4CAR0djPOtNNToec0tbDy2K7BCbmJ0l6Kat0wnp4e2DQeteVuV5HWfSN7rgcGTMhRGBTwq1jb%2FTXZKwI1YeOmc%2BZWpIKeA9iKcwosKQzmdGVSDNSbyMEsmCxr2%2B9qQBqSQ%2FA3d3QIK6bDxjetbkjuppcvLeLOIhq5cGiuP96sApH9tkgeCWaWqesBybtA8R1NOW2ZDSd69QSawfYrYr6yGc7IaQSA6BeJ22YMLbh670GOqUB%2FlknggQgImlgLn697xj%2Bef3ye1c%2BGbx9adsFIPG1wvG5m8MBPbpA6WbIxe2WKwethfYZbBjeGo42Add6ESvte7GAgWZHe0r36LHG%2BRjPIr90WGolHA33sdjC1kMZ2GipBpBOPlavjTIqt8iYC9tZSro2LVUZLRBaSG2Ie2%2FXh3DKxqT1%2FwIjwzgzrBkUMLN4kgbyy0LH%2FIJbqDoReNH3zKYpoXVU&X-Amz-Signature=cdbb4d6b922edb2801b2dabef8305229071bb1125ef72508ec8aa40ab8c7995a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
