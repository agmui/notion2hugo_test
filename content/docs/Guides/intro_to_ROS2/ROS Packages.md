---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT77OZWM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9p%2FE5MAq3EIBn0cJ3P4nUiPAgIp19LrOHtEURLLlQAAiBp1Gix0ejYuz7FG9PFTyCLvk51vCMFxSMO635UT%2FjJRSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHaZ%2B0l%2B2paD5DS8TKtwDEBxcFkeiEgLHITeJzwqJSQPNf9nL2amWdZNY9r1V4MA38tTcGLhT4AqlUSaSJD08bwiWMWW9u5ZzAwqJ9IgBIn6t4PVZj0oNJ8VmXWvU4xJLkpWVYV1rWUtunKoGLisLBgTpPo%2BqIKea9mmJEtNsJlrClSuR0CaKx42r8ht6M3DvcA3C84ATR%2F3r%2B9ctu2Dhvjj%2FEdNjbD9yr8bqISeC9L4AOTiZispsc4oEkmob9G1unhmnUm9tVAN8F2K1ZpYRkUi9%2BOSRBZodW7n6GENIuU9JJRmmXIo%2BYUoLo%2BLNZFw0sKRMVNNFmyBr0HMXHsuHDsURBmfpoDu4yBaIPsBIXSDizVoQKU5oSYJuasTvxW%2Be2dxL%2BbsJCCG7rn%2BLnLiMmz8wB%2Bm8h%2BepHtDOlF9lvQVEsuor0KlF8NFh%2FA8Uq1kMgqYu%2FuSNUmwhftmH6C%2Bp5DXmILgF07UYh7iYKZn5wbZiUbAsRnsXhOy2o%2FeA4CdcNyO3Dmdw0K7CjMa6LHb15yhdXSczu59XQEah5yGdGYwd%2B9PZOKuBUKFk2lGmuBZtX4NlH8XFrm%2Bo9bjuXYB%2B4vzdxcYjHg1kVQ6UOp3lfStkcuVmrUB%2B6jFlyC0fdNBpjfVuPcX%2BlCQOfVwwg%2FzyxAY6pgFZRMEYAyqA%2BT1wuv0kAcu7nSWcfTK%2BYa%2F2SF3oxBHSRjJeG%2FIQHZI7olfMBPgXX8vf6KRSUJ1H79l8wtp5yRtTrg2shUUVR1k9bhCLP96M4P1xkJLrBjNGk7YbSe3UUGau0yE%2FlDBz5icsq8jUoJfjqV8CEvAAVvXDuwOe6PJuckQ%2B87JiUHuaI3m%2BkSutM2dut11AnHg%2BJnzCu13%2BELCigK1TsGxh&X-Amz-Signature=4b3fcb4fb8d19a1b014173a5f14d26e931cbd5ed7ece06adca00d4bfa8febb17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT77OZWM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9p%2FE5MAq3EIBn0cJ3P4nUiPAgIp19LrOHtEURLLlQAAiBp1Gix0ejYuz7FG9PFTyCLvk51vCMFxSMO635UT%2FjJRSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHaZ%2B0l%2B2paD5DS8TKtwDEBxcFkeiEgLHITeJzwqJSQPNf9nL2amWdZNY9r1V4MA38tTcGLhT4AqlUSaSJD08bwiWMWW9u5ZzAwqJ9IgBIn6t4PVZj0oNJ8VmXWvU4xJLkpWVYV1rWUtunKoGLisLBgTpPo%2BqIKea9mmJEtNsJlrClSuR0CaKx42r8ht6M3DvcA3C84ATR%2F3r%2B9ctu2Dhvjj%2FEdNjbD9yr8bqISeC9L4AOTiZispsc4oEkmob9G1unhmnUm9tVAN8F2K1ZpYRkUi9%2BOSRBZodW7n6GENIuU9JJRmmXIo%2BYUoLo%2BLNZFw0sKRMVNNFmyBr0HMXHsuHDsURBmfpoDu4yBaIPsBIXSDizVoQKU5oSYJuasTvxW%2Be2dxL%2BbsJCCG7rn%2BLnLiMmz8wB%2Bm8h%2BepHtDOlF9lvQVEsuor0KlF8NFh%2FA8Uq1kMgqYu%2FuSNUmwhftmH6C%2Bp5DXmILgF07UYh7iYKZn5wbZiUbAsRnsXhOy2o%2FeA4CdcNyO3Dmdw0K7CjMa6LHb15yhdXSczu59XQEah5yGdGYwd%2B9PZOKuBUKFk2lGmuBZtX4NlH8XFrm%2Bo9bjuXYB%2B4vzdxcYjHg1kVQ6UOp3lfStkcuVmrUB%2B6jFlyC0fdNBpjfVuPcX%2BlCQOfVwwg%2FzyxAY6pgFZRMEYAyqA%2BT1wuv0kAcu7nSWcfTK%2BYa%2F2SF3oxBHSRjJeG%2FIQHZI7olfMBPgXX8vf6KRSUJ1H79l8wtp5yRtTrg2shUUVR1k9bhCLP96M4P1xkJLrBjNGk7YbSe3UUGau0yE%2FlDBz5icsq8jUoJfjqV8CEvAAVvXDuwOe6PJuckQ%2B87JiUHuaI3m%2BkSutM2dut11AnHg%2BJnzCu13%2BELCigK1TsGxh&X-Amz-Signature=2f4c3c746678b752864c4ccd905423288834dfe9a430ad4639fcfbb28a031cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT77OZWM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9p%2FE5MAq3EIBn0cJ3P4nUiPAgIp19LrOHtEURLLlQAAiBp1Gix0ejYuz7FG9PFTyCLvk51vCMFxSMO635UT%2FjJRSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHaZ%2B0l%2B2paD5DS8TKtwDEBxcFkeiEgLHITeJzwqJSQPNf9nL2amWdZNY9r1V4MA38tTcGLhT4AqlUSaSJD08bwiWMWW9u5ZzAwqJ9IgBIn6t4PVZj0oNJ8VmXWvU4xJLkpWVYV1rWUtunKoGLisLBgTpPo%2BqIKea9mmJEtNsJlrClSuR0CaKx42r8ht6M3DvcA3C84ATR%2F3r%2B9ctu2Dhvjj%2FEdNjbD9yr8bqISeC9L4AOTiZispsc4oEkmob9G1unhmnUm9tVAN8F2K1ZpYRkUi9%2BOSRBZodW7n6GENIuU9JJRmmXIo%2BYUoLo%2BLNZFw0sKRMVNNFmyBr0HMXHsuHDsURBmfpoDu4yBaIPsBIXSDizVoQKU5oSYJuasTvxW%2Be2dxL%2BbsJCCG7rn%2BLnLiMmz8wB%2Bm8h%2BepHtDOlF9lvQVEsuor0KlF8NFh%2FA8Uq1kMgqYu%2FuSNUmwhftmH6C%2Bp5DXmILgF07UYh7iYKZn5wbZiUbAsRnsXhOy2o%2FeA4CdcNyO3Dmdw0K7CjMa6LHb15yhdXSczu59XQEah5yGdGYwd%2B9PZOKuBUKFk2lGmuBZtX4NlH8XFrm%2Bo9bjuXYB%2B4vzdxcYjHg1kVQ6UOp3lfStkcuVmrUB%2B6jFlyC0fdNBpjfVuPcX%2BlCQOfVwwg%2FzyxAY6pgFZRMEYAyqA%2BT1wuv0kAcu7nSWcfTK%2BYa%2F2SF3oxBHSRjJeG%2FIQHZI7olfMBPgXX8vf6KRSUJ1H79l8wtp5yRtTrg2shUUVR1k9bhCLP96M4P1xkJLrBjNGk7YbSe3UUGau0yE%2FlDBz5icsq8jUoJfjqV8CEvAAVvXDuwOe6PJuckQ%2B87JiUHuaI3m%2BkSutM2dut11AnHg%2BJnzCu13%2BELCigK1TsGxh&X-Amz-Signature=0532ba42ffb35bdcc638467cfdb69ce796dde443a3816d9ab2d3fd5296a07a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT77OZWM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9p%2FE5MAq3EIBn0cJ3P4nUiPAgIp19LrOHtEURLLlQAAiBp1Gix0ejYuz7FG9PFTyCLvk51vCMFxSMO635UT%2FjJRSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHaZ%2B0l%2B2paD5DS8TKtwDEBxcFkeiEgLHITeJzwqJSQPNf9nL2amWdZNY9r1V4MA38tTcGLhT4AqlUSaSJD08bwiWMWW9u5ZzAwqJ9IgBIn6t4PVZj0oNJ8VmXWvU4xJLkpWVYV1rWUtunKoGLisLBgTpPo%2BqIKea9mmJEtNsJlrClSuR0CaKx42r8ht6M3DvcA3C84ATR%2F3r%2B9ctu2Dhvjj%2FEdNjbD9yr8bqISeC9L4AOTiZispsc4oEkmob9G1unhmnUm9tVAN8F2K1ZpYRkUi9%2BOSRBZodW7n6GENIuU9JJRmmXIo%2BYUoLo%2BLNZFw0sKRMVNNFmyBr0HMXHsuHDsURBmfpoDu4yBaIPsBIXSDizVoQKU5oSYJuasTvxW%2Be2dxL%2BbsJCCG7rn%2BLnLiMmz8wB%2Bm8h%2BepHtDOlF9lvQVEsuor0KlF8NFh%2FA8Uq1kMgqYu%2FuSNUmwhftmH6C%2Bp5DXmILgF07UYh7iYKZn5wbZiUbAsRnsXhOy2o%2FeA4CdcNyO3Dmdw0K7CjMa6LHb15yhdXSczu59XQEah5yGdGYwd%2B9PZOKuBUKFk2lGmuBZtX4NlH8XFrm%2Bo9bjuXYB%2B4vzdxcYjHg1kVQ6UOp3lfStkcuVmrUB%2B6jFlyC0fdNBpjfVuPcX%2BlCQOfVwwg%2FzyxAY6pgFZRMEYAyqA%2BT1wuv0kAcu7nSWcfTK%2BYa%2F2SF3oxBHSRjJeG%2FIQHZI7olfMBPgXX8vf6KRSUJ1H79l8wtp5yRtTrg2shUUVR1k9bhCLP96M4P1xkJLrBjNGk7YbSe3UUGau0yE%2FlDBz5icsq8jUoJfjqV8CEvAAVvXDuwOe6PJuckQ%2B87JiUHuaI3m%2BkSutM2dut11AnHg%2BJnzCu13%2BELCigK1TsGxh&X-Amz-Signature=155f6cf67e5150b7a6a87bb66a90d315bb35e92f17e357d7cb6c200c015a9b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT77OZWM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9p%2FE5MAq3EIBn0cJ3P4nUiPAgIp19LrOHtEURLLlQAAiBp1Gix0ejYuz7FG9PFTyCLvk51vCMFxSMO635UT%2FjJRSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHaZ%2B0l%2B2paD5DS8TKtwDEBxcFkeiEgLHITeJzwqJSQPNf9nL2amWdZNY9r1V4MA38tTcGLhT4AqlUSaSJD08bwiWMWW9u5ZzAwqJ9IgBIn6t4PVZj0oNJ8VmXWvU4xJLkpWVYV1rWUtunKoGLisLBgTpPo%2BqIKea9mmJEtNsJlrClSuR0CaKx42r8ht6M3DvcA3C84ATR%2F3r%2B9ctu2Dhvjj%2FEdNjbD9yr8bqISeC9L4AOTiZispsc4oEkmob9G1unhmnUm9tVAN8F2K1ZpYRkUi9%2BOSRBZodW7n6GENIuU9JJRmmXIo%2BYUoLo%2BLNZFw0sKRMVNNFmyBr0HMXHsuHDsURBmfpoDu4yBaIPsBIXSDizVoQKU5oSYJuasTvxW%2Be2dxL%2BbsJCCG7rn%2BLnLiMmz8wB%2Bm8h%2BepHtDOlF9lvQVEsuor0KlF8NFh%2FA8Uq1kMgqYu%2FuSNUmwhftmH6C%2Bp5DXmILgF07UYh7iYKZn5wbZiUbAsRnsXhOy2o%2FeA4CdcNyO3Dmdw0K7CjMa6LHb15yhdXSczu59XQEah5yGdGYwd%2B9PZOKuBUKFk2lGmuBZtX4NlH8XFrm%2Bo9bjuXYB%2B4vzdxcYjHg1kVQ6UOp3lfStkcuVmrUB%2B6jFlyC0fdNBpjfVuPcX%2BlCQOfVwwg%2FzyxAY6pgFZRMEYAyqA%2BT1wuv0kAcu7nSWcfTK%2BYa%2F2SF3oxBHSRjJeG%2FIQHZI7olfMBPgXX8vf6KRSUJ1H79l8wtp5yRtTrg2shUUVR1k9bhCLP96M4P1xkJLrBjNGk7YbSe3UUGau0yE%2FlDBz5icsq8jUoJfjqV8CEvAAVvXDuwOe6PJuckQ%2B87JiUHuaI3m%2BkSutM2dut11AnHg%2BJnzCu13%2BELCigK1TsGxh&X-Amz-Signature=92ecad550eb4329e42ca4b495d1c685b4de5e6c41338da23b9c0a4bee9113516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT77OZWM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9p%2FE5MAq3EIBn0cJ3P4nUiPAgIp19LrOHtEURLLlQAAiBp1Gix0ejYuz7FG9PFTyCLvk51vCMFxSMO635UT%2FjJRSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHaZ%2B0l%2B2paD5DS8TKtwDEBxcFkeiEgLHITeJzwqJSQPNf9nL2amWdZNY9r1V4MA38tTcGLhT4AqlUSaSJD08bwiWMWW9u5ZzAwqJ9IgBIn6t4PVZj0oNJ8VmXWvU4xJLkpWVYV1rWUtunKoGLisLBgTpPo%2BqIKea9mmJEtNsJlrClSuR0CaKx42r8ht6M3DvcA3C84ATR%2F3r%2B9ctu2Dhvjj%2FEdNjbD9yr8bqISeC9L4AOTiZispsc4oEkmob9G1unhmnUm9tVAN8F2K1ZpYRkUi9%2BOSRBZodW7n6GENIuU9JJRmmXIo%2BYUoLo%2BLNZFw0sKRMVNNFmyBr0HMXHsuHDsURBmfpoDu4yBaIPsBIXSDizVoQKU5oSYJuasTvxW%2Be2dxL%2BbsJCCG7rn%2BLnLiMmz8wB%2Bm8h%2BepHtDOlF9lvQVEsuor0KlF8NFh%2FA8Uq1kMgqYu%2FuSNUmwhftmH6C%2Bp5DXmILgF07UYh7iYKZn5wbZiUbAsRnsXhOy2o%2FeA4CdcNyO3Dmdw0K7CjMa6LHb15yhdXSczu59XQEah5yGdGYwd%2B9PZOKuBUKFk2lGmuBZtX4NlH8XFrm%2Bo9bjuXYB%2B4vzdxcYjHg1kVQ6UOp3lfStkcuVmrUB%2B6jFlyC0fdNBpjfVuPcX%2BlCQOfVwwg%2FzyxAY6pgFZRMEYAyqA%2BT1wuv0kAcu7nSWcfTK%2BYa%2F2SF3oxBHSRjJeG%2FIQHZI7olfMBPgXX8vf6KRSUJ1H79l8wtp5yRtTrg2shUUVR1k9bhCLP96M4P1xkJLrBjNGk7YbSe3UUGau0yE%2FlDBz5icsq8jUoJfjqV8CEvAAVvXDuwOe6PJuckQ%2B87JiUHuaI3m%2BkSutM2dut11AnHg%2BJnzCu13%2BELCigK1TsGxh&X-Amz-Signature=11cbf148a63be1a1fcfb72e0084fd3ac0bbbd05258174f6699d0690252f09630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT77OZWM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9p%2FE5MAq3EIBn0cJ3P4nUiPAgIp19LrOHtEURLLlQAAiBp1Gix0ejYuz7FG9PFTyCLvk51vCMFxSMO635UT%2FjJRSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHaZ%2B0l%2B2paD5DS8TKtwDEBxcFkeiEgLHITeJzwqJSQPNf9nL2amWdZNY9r1V4MA38tTcGLhT4AqlUSaSJD08bwiWMWW9u5ZzAwqJ9IgBIn6t4PVZj0oNJ8VmXWvU4xJLkpWVYV1rWUtunKoGLisLBgTpPo%2BqIKea9mmJEtNsJlrClSuR0CaKx42r8ht6M3DvcA3C84ATR%2F3r%2B9ctu2Dhvjj%2FEdNjbD9yr8bqISeC9L4AOTiZispsc4oEkmob9G1unhmnUm9tVAN8F2K1ZpYRkUi9%2BOSRBZodW7n6GENIuU9JJRmmXIo%2BYUoLo%2BLNZFw0sKRMVNNFmyBr0HMXHsuHDsURBmfpoDu4yBaIPsBIXSDizVoQKU5oSYJuasTvxW%2Be2dxL%2BbsJCCG7rn%2BLnLiMmz8wB%2Bm8h%2BepHtDOlF9lvQVEsuor0KlF8NFh%2FA8Uq1kMgqYu%2FuSNUmwhftmH6C%2Bp5DXmILgF07UYh7iYKZn5wbZiUbAsRnsXhOy2o%2FeA4CdcNyO3Dmdw0K7CjMa6LHb15yhdXSczu59XQEah5yGdGYwd%2B9PZOKuBUKFk2lGmuBZtX4NlH8XFrm%2Bo9bjuXYB%2B4vzdxcYjHg1kVQ6UOp3lfStkcuVmrUB%2B6jFlyC0fdNBpjfVuPcX%2BlCQOfVwwg%2FzyxAY6pgFZRMEYAyqA%2BT1wuv0kAcu7nSWcfTK%2BYa%2F2SF3oxBHSRjJeG%2FIQHZI7olfMBPgXX8vf6KRSUJ1H79l8wtp5yRtTrg2shUUVR1k9bhCLP96M4P1xkJLrBjNGk7YbSe3UUGau0yE%2FlDBz5icsq8jUoJfjqV8CEvAAVvXDuwOe6PJuckQ%2B87JiUHuaI3m%2BkSutM2dut11AnHg%2BJnzCu13%2BELCigK1TsGxh&X-Amz-Signature=709e7bd7e88e58f1842e50ac328f9688818196e42847562365147b890441e7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
