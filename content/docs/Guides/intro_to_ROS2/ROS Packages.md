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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBAPFXJC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BZDnq7y7qAm5J977lxPW%2BRc2%2BCEjIt7g99dDVRkZ0KAiEAmgAJJcTbc5YPb5K4pZizXixqE6E5ZGEYnvPRxwFTn9sqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4Gnh84xYidAdNCqyrcA8KjrRftK9BTha1BNMRhHeU4W4uhG%2F5ysTzX2KsttM91uswSPPElIVav6E7rIzoQCJyrP8nqyMxcYFuNGghLGAMKEnEl1yzMoMCbAYCQoAAV0Yhn7xz6MK6Sz7NJwePpxsAsfp6nI9NfOEbJyynIMAseiwNgLtKMxJ6IXpZXgLM6CxD4x76J%2FR3dcWtH047hjic6kX9CfwtejlLtYpm2KHWbGs07OaHmRKYwlSMIEvFlASuSXturTsiILYbgi%2BL8gmZir8ed%2FPv1hPuLqFKuHrOSRcVgPW0JFplnlQsHmRYTWcIHbwwgNyCrVN4pemTUKakhQqFdzVxpZRdxz4eScDBdEL8HLFmjDZlHIUjNo6rJG0D%2FCTK%2BOPSqQ5iFhHEGM4EePExxUnAPnUnKW8RyX%2FzMPQQQhDbGD7QtS5AeYImw4qOWFrmtDT2qgeYl2tSQ%2BtPIiXa6GXn2aAOLUwChSWCYHmQbaM5oPUNYWqMPKqNCmAH6iH9MLDSSlrfLxjb%2Bm88VGFBJeYfEfx%2Bz9mLrHMiHTpwN%2BkYJFRlwmXV9sjUQUL%2B6CbqX9%2BUmehRprqgPMQUFw%2FdmePcX%2FG5fb168uqFMRtLwtqRce%2FR9BSxO0sht%2BEax5M74nP5sQ4GwMK7H5b0GOqUBEeVbLjgFVgngogVWBhrO2keeLG%2FAItQtAw21k3rhEyqPm9YHF7r4WBdaOevCQF9RLU4D%2FknlZR27kGcSMZAH8Cgyw0D4CsBJu0arAa4hMIhWlYT4nDx5HzxXvpmefNhd3hML8M8Uq2cThrMEpMDjM5yLpCAAeJcfWAydALBvblKFT8XTn%2BURGv8KCu%2BpZlMbm%2FMOREbmv0YCUB4K1jJaDQoHz6QX&X-Amz-Signature=279f73fd179c2958c57108ddd5e17c4105744eab3713220e6791ea98a055cd75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBAPFXJC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BZDnq7y7qAm5J977lxPW%2BRc2%2BCEjIt7g99dDVRkZ0KAiEAmgAJJcTbc5YPb5K4pZizXixqE6E5ZGEYnvPRxwFTn9sqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4Gnh84xYidAdNCqyrcA8KjrRftK9BTha1BNMRhHeU4W4uhG%2F5ysTzX2KsttM91uswSPPElIVav6E7rIzoQCJyrP8nqyMxcYFuNGghLGAMKEnEl1yzMoMCbAYCQoAAV0Yhn7xz6MK6Sz7NJwePpxsAsfp6nI9NfOEbJyynIMAseiwNgLtKMxJ6IXpZXgLM6CxD4x76J%2FR3dcWtH047hjic6kX9CfwtejlLtYpm2KHWbGs07OaHmRKYwlSMIEvFlASuSXturTsiILYbgi%2BL8gmZir8ed%2FPv1hPuLqFKuHrOSRcVgPW0JFplnlQsHmRYTWcIHbwwgNyCrVN4pemTUKakhQqFdzVxpZRdxz4eScDBdEL8HLFmjDZlHIUjNo6rJG0D%2FCTK%2BOPSqQ5iFhHEGM4EePExxUnAPnUnKW8RyX%2FzMPQQQhDbGD7QtS5AeYImw4qOWFrmtDT2qgeYl2tSQ%2BtPIiXa6GXn2aAOLUwChSWCYHmQbaM5oPUNYWqMPKqNCmAH6iH9MLDSSlrfLxjb%2Bm88VGFBJeYfEfx%2Bz9mLrHMiHTpwN%2BkYJFRlwmXV9sjUQUL%2B6CbqX9%2BUmehRprqgPMQUFw%2FdmePcX%2FG5fb168uqFMRtLwtqRce%2FR9BSxO0sht%2BEax5M74nP5sQ4GwMK7H5b0GOqUBEeVbLjgFVgngogVWBhrO2keeLG%2FAItQtAw21k3rhEyqPm9YHF7r4WBdaOevCQF9RLU4D%2FknlZR27kGcSMZAH8Cgyw0D4CsBJu0arAa4hMIhWlYT4nDx5HzxXvpmefNhd3hML8M8Uq2cThrMEpMDjM5yLpCAAeJcfWAydALBvblKFT8XTn%2BURGv8KCu%2BpZlMbm%2FMOREbmv0YCUB4K1jJaDQoHz6QX&X-Amz-Signature=b0625d249645026b52eb5f98fbb514be919e2624a9f8d0a0cc3dda9fe35b752c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBAPFXJC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BZDnq7y7qAm5J977lxPW%2BRc2%2BCEjIt7g99dDVRkZ0KAiEAmgAJJcTbc5YPb5K4pZizXixqE6E5ZGEYnvPRxwFTn9sqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4Gnh84xYidAdNCqyrcA8KjrRftK9BTha1BNMRhHeU4W4uhG%2F5ysTzX2KsttM91uswSPPElIVav6E7rIzoQCJyrP8nqyMxcYFuNGghLGAMKEnEl1yzMoMCbAYCQoAAV0Yhn7xz6MK6Sz7NJwePpxsAsfp6nI9NfOEbJyynIMAseiwNgLtKMxJ6IXpZXgLM6CxD4x76J%2FR3dcWtH047hjic6kX9CfwtejlLtYpm2KHWbGs07OaHmRKYwlSMIEvFlASuSXturTsiILYbgi%2BL8gmZir8ed%2FPv1hPuLqFKuHrOSRcVgPW0JFplnlQsHmRYTWcIHbwwgNyCrVN4pemTUKakhQqFdzVxpZRdxz4eScDBdEL8HLFmjDZlHIUjNo6rJG0D%2FCTK%2BOPSqQ5iFhHEGM4EePExxUnAPnUnKW8RyX%2FzMPQQQhDbGD7QtS5AeYImw4qOWFrmtDT2qgeYl2tSQ%2BtPIiXa6GXn2aAOLUwChSWCYHmQbaM5oPUNYWqMPKqNCmAH6iH9MLDSSlrfLxjb%2Bm88VGFBJeYfEfx%2Bz9mLrHMiHTpwN%2BkYJFRlwmXV9sjUQUL%2B6CbqX9%2BUmehRprqgPMQUFw%2FdmePcX%2FG5fb168uqFMRtLwtqRce%2FR9BSxO0sht%2BEax5M74nP5sQ4GwMK7H5b0GOqUBEeVbLjgFVgngogVWBhrO2keeLG%2FAItQtAw21k3rhEyqPm9YHF7r4WBdaOevCQF9RLU4D%2FknlZR27kGcSMZAH8Cgyw0D4CsBJu0arAa4hMIhWlYT4nDx5HzxXvpmefNhd3hML8M8Uq2cThrMEpMDjM5yLpCAAeJcfWAydALBvblKFT8XTn%2BURGv8KCu%2BpZlMbm%2FMOREbmv0YCUB4K1jJaDQoHz6QX&X-Amz-Signature=df31b80ed16422b66d8551cf7ffd81086096a10e183bb95f7de8ce7e664ec7d1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBAPFXJC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BZDnq7y7qAm5J977lxPW%2BRc2%2BCEjIt7g99dDVRkZ0KAiEAmgAJJcTbc5YPb5K4pZizXixqE6E5ZGEYnvPRxwFTn9sqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4Gnh84xYidAdNCqyrcA8KjrRftK9BTha1BNMRhHeU4W4uhG%2F5ysTzX2KsttM91uswSPPElIVav6E7rIzoQCJyrP8nqyMxcYFuNGghLGAMKEnEl1yzMoMCbAYCQoAAV0Yhn7xz6MK6Sz7NJwePpxsAsfp6nI9NfOEbJyynIMAseiwNgLtKMxJ6IXpZXgLM6CxD4x76J%2FR3dcWtH047hjic6kX9CfwtejlLtYpm2KHWbGs07OaHmRKYwlSMIEvFlASuSXturTsiILYbgi%2BL8gmZir8ed%2FPv1hPuLqFKuHrOSRcVgPW0JFplnlQsHmRYTWcIHbwwgNyCrVN4pemTUKakhQqFdzVxpZRdxz4eScDBdEL8HLFmjDZlHIUjNo6rJG0D%2FCTK%2BOPSqQ5iFhHEGM4EePExxUnAPnUnKW8RyX%2FzMPQQQhDbGD7QtS5AeYImw4qOWFrmtDT2qgeYl2tSQ%2BtPIiXa6GXn2aAOLUwChSWCYHmQbaM5oPUNYWqMPKqNCmAH6iH9MLDSSlrfLxjb%2Bm88VGFBJeYfEfx%2Bz9mLrHMiHTpwN%2BkYJFRlwmXV9sjUQUL%2B6CbqX9%2BUmehRprqgPMQUFw%2FdmePcX%2FG5fb168uqFMRtLwtqRce%2FR9BSxO0sht%2BEax5M74nP5sQ4GwMK7H5b0GOqUBEeVbLjgFVgngogVWBhrO2keeLG%2FAItQtAw21k3rhEyqPm9YHF7r4WBdaOevCQF9RLU4D%2FknlZR27kGcSMZAH8Cgyw0D4CsBJu0arAa4hMIhWlYT4nDx5HzxXvpmefNhd3hML8M8Uq2cThrMEpMDjM5yLpCAAeJcfWAydALBvblKFT8XTn%2BURGv8KCu%2BpZlMbm%2FMOREbmv0YCUB4K1jJaDQoHz6QX&X-Amz-Signature=0c42c4ed1f9e0d9877fa430c2d892f3595c26bd563575b78bcd69b5eb4107073&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBAPFXJC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BZDnq7y7qAm5J977lxPW%2BRc2%2BCEjIt7g99dDVRkZ0KAiEAmgAJJcTbc5YPb5K4pZizXixqE6E5ZGEYnvPRxwFTn9sqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4Gnh84xYidAdNCqyrcA8KjrRftK9BTha1BNMRhHeU4W4uhG%2F5ysTzX2KsttM91uswSPPElIVav6E7rIzoQCJyrP8nqyMxcYFuNGghLGAMKEnEl1yzMoMCbAYCQoAAV0Yhn7xz6MK6Sz7NJwePpxsAsfp6nI9NfOEbJyynIMAseiwNgLtKMxJ6IXpZXgLM6CxD4x76J%2FR3dcWtH047hjic6kX9CfwtejlLtYpm2KHWbGs07OaHmRKYwlSMIEvFlASuSXturTsiILYbgi%2BL8gmZir8ed%2FPv1hPuLqFKuHrOSRcVgPW0JFplnlQsHmRYTWcIHbwwgNyCrVN4pemTUKakhQqFdzVxpZRdxz4eScDBdEL8HLFmjDZlHIUjNo6rJG0D%2FCTK%2BOPSqQ5iFhHEGM4EePExxUnAPnUnKW8RyX%2FzMPQQQhDbGD7QtS5AeYImw4qOWFrmtDT2qgeYl2tSQ%2BtPIiXa6GXn2aAOLUwChSWCYHmQbaM5oPUNYWqMPKqNCmAH6iH9MLDSSlrfLxjb%2Bm88VGFBJeYfEfx%2Bz9mLrHMiHTpwN%2BkYJFRlwmXV9sjUQUL%2B6CbqX9%2BUmehRprqgPMQUFw%2FdmePcX%2FG5fb168uqFMRtLwtqRce%2FR9BSxO0sht%2BEax5M74nP5sQ4GwMK7H5b0GOqUBEeVbLjgFVgngogVWBhrO2keeLG%2FAItQtAw21k3rhEyqPm9YHF7r4WBdaOevCQF9RLU4D%2FknlZR27kGcSMZAH8Cgyw0D4CsBJu0arAa4hMIhWlYT4nDx5HzxXvpmefNhd3hML8M8Uq2cThrMEpMDjM5yLpCAAeJcfWAydALBvblKFT8XTn%2BURGv8KCu%2BpZlMbm%2FMOREbmv0YCUB4K1jJaDQoHz6QX&X-Amz-Signature=b57bc2b3d8e07eb7c6aba81fdf6ae79ebf0203f5dcf129ee5be5337f1dd8baa3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBAPFXJC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BZDnq7y7qAm5J977lxPW%2BRc2%2BCEjIt7g99dDVRkZ0KAiEAmgAJJcTbc5YPb5K4pZizXixqE6E5ZGEYnvPRxwFTn9sqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4Gnh84xYidAdNCqyrcA8KjrRftK9BTha1BNMRhHeU4W4uhG%2F5ysTzX2KsttM91uswSPPElIVav6E7rIzoQCJyrP8nqyMxcYFuNGghLGAMKEnEl1yzMoMCbAYCQoAAV0Yhn7xz6MK6Sz7NJwePpxsAsfp6nI9NfOEbJyynIMAseiwNgLtKMxJ6IXpZXgLM6CxD4x76J%2FR3dcWtH047hjic6kX9CfwtejlLtYpm2KHWbGs07OaHmRKYwlSMIEvFlASuSXturTsiILYbgi%2BL8gmZir8ed%2FPv1hPuLqFKuHrOSRcVgPW0JFplnlQsHmRYTWcIHbwwgNyCrVN4pemTUKakhQqFdzVxpZRdxz4eScDBdEL8HLFmjDZlHIUjNo6rJG0D%2FCTK%2BOPSqQ5iFhHEGM4EePExxUnAPnUnKW8RyX%2FzMPQQQhDbGD7QtS5AeYImw4qOWFrmtDT2qgeYl2tSQ%2BtPIiXa6GXn2aAOLUwChSWCYHmQbaM5oPUNYWqMPKqNCmAH6iH9MLDSSlrfLxjb%2Bm88VGFBJeYfEfx%2Bz9mLrHMiHTpwN%2BkYJFRlwmXV9sjUQUL%2B6CbqX9%2BUmehRprqgPMQUFw%2FdmePcX%2FG5fb168uqFMRtLwtqRce%2FR9BSxO0sht%2BEax5M74nP5sQ4GwMK7H5b0GOqUBEeVbLjgFVgngogVWBhrO2keeLG%2FAItQtAw21k3rhEyqPm9YHF7r4WBdaOevCQF9RLU4D%2FknlZR27kGcSMZAH8Cgyw0D4CsBJu0arAa4hMIhWlYT4nDx5HzxXvpmefNhd3hML8M8Uq2cThrMEpMDjM5yLpCAAeJcfWAydALBvblKFT8XTn%2BURGv8KCu%2BpZlMbm%2FMOREbmv0YCUB4K1jJaDQoHz6QX&X-Amz-Signature=e62a44f4cc75bc4de8815cc3ac6234e1c14b57e7f218b723a158832289662b57&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBAPFXJC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BZDnq7y7qAm5J977lxPW%2BRc2%2BCEjIt7g99dDVRkZ0KAiEAmgAJJcTbc5YPb5K4pZizXixqE6E5ZGEYnvPRxwFTn9sqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4Gnh84xYidAdNCqyrcA8KjrRftK9BTha1BNMRhHeU4W4uhG%2F5ysTzX2KsttM91uswSPPElIVav6E7rIzoQCJyrP8nqyMxcYFuNGghLGAMKEnEl1yzMoMCbAYCQoAAV0Yhn7xz6MK6Sz7NJwePpxsAsfp6nI9NfOEbJyynIMAseiwNgLtKMxJ6IXpZXgLM6CxD4x76J%2FR3dcWtH047hjic6kX9CfwtejlLtYpm2KHWbGs07OaHmRKYwlSMIEvFlASuSXturTsiILYbgi%2BL8gmZir8ed%2FPv1hPuLqFKuHrOSRcVgPW0JFplnlQsHmRYTWcIHbwwgNyCrVN4pemTUKakhQqFdzVxpZRdxz4eScDBdEL8HLFmjDZlHIUjNo6rJG0D%2FCTK%2BOPSqQ5iFhHEGM4EePExxUnAPnUnKW8RyX%2FzMPQQQhDbGD7QtS5AeYImw4qOWFrmtDT2qgeYl2tSQ%2BtPIiXa6GXn2aAOLUwChSWCYHmQbaM5oPUNYWqMPKqNCmAH6iH9MLDSSlrfLxjb%2Bm88VGFBJeYfEfx%2Bz9mLrHMiHTpwN%2BkYJFRlwmXV9sjUQUL%2B6CbqX9%2BUmehRprqgPMQUFw%2FdmePcX%2FG5fb168uqFMRtLwtqRce%2FR9BSxO0sht%2BEax5M74nP5sQ4GwMK7H5b0GOqUBEeVbLjgFVgngogVWBhrO2keeLG%2FAItQtAw21k3rhEyqPm9YHF7r4WBdaOevCQF9RLU4D%2FknlZR27kGcSMZAH8Cgyw0D4CsBJu0arAa4hMIhWlYT4nDx5HzxXvpmefNhd3hML8M8Uq2cThrMEpMDjM5yLpCAAeJcfWAydALBvblKFT8XTn%2BURGv8KCu%2BpZlMbm%2FMOREbmv0YCUB4K1jJaDQoHz6QX&X-Amz-Signature=e029545c90ca9f5b4fca72fe95ac9ce5dacb7ef02c1ddaa7df1abd804c674ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
