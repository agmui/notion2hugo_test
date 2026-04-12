---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCM2ZCEO%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZ06evnfL4Su%2F3Em0R9vDSTBr5D%2BDthL6RQEV%2FZX0BAIgLzAas%2FF0r5%2BTi8sSRLuIGOpencbwKDv3YJeigwOFzjYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKNfXi3ldwlf8zTTNCrcAwAr%2BvfPWtoIyJZZ3uh5qOVfOhVXaCuUekEC0ByQX4ZCsSNhVMMamXhSh46ctvz413LiWmqCEBsZipV3IVoWsawiTIg9NZEaWg%2F8qBN3F9SAWFedqA2z8Zlfzo9lmdPmO8G6SidJpBhApRW9Wpuw2c8soHg%2BA4%2FLd2eq0VZOAt2ULE3JEYC6s%2FwdHUi9y2a%2F362a0JfPIylf4eswvqT9euC%2BdwIIJtOG4gw7vvDMC6i1Rlmu46FjjtyET2acQnceMKj2o9jC7JzJKS3EfRqMUR3eTW9vSAyUD0GwACD%2FoINziSO06D5zsWzBtriiMK8j8B8zff5Mu839XGSRgiwOm6bB22tj5d6joHL3jovPgSS4AKXIsQ98gWuQZlPbFwKvTAHAe3V%2B%2Blg5gAYT12xEsXXlwogQ7mDzgC56VUCqIkyP2vwI1vEixQI1hVLN50SBXL3DqfJst0DPLddiwDhv9Jc5Zj4xjzztbeF2r3SYvWcH2HRgE9rZfUmKowJp%2B1t95c2dHs2LNp7N%2FO7gRFsO6CylBB59ItcpalG%2FoRAUlDeZ0wrOqCfJNBUxNfuTH2eCGBEZHQ0MIBLUl4uYqO5rO67njU6WSgrpuGXrvU13X64RDP9gADDeCeVEZ3fDMLqJ7M4GOqUB37U32Ogh6fdsxcQj%2B%2Fkcc2auhbUuVPecshrWJ1fnEsWz%2BAKhotQiTPyKekeqVX71qHZhFSHEcEFREnhJRnOu0pnSPnlX1FofeQXXHAYiwCQ5YX2TpemqX7CFkQP8aYDkVU9ayP16B14E0ZsDpncdBXNosk3I0CfJNhrvS102Wfqc6y8RqfcU3wCl8EZ2%2F0ZFz01Dy5Ggn31ohZkWZ92rg1BVtSJW&X-Amz-Signature=3748ebdb94769705e7bc001c2a5f8ab732f0e7aa796f0debbd2470e6f56ae267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCM2ZCEO%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZ06evnfL4Su%2F3Em0R9vDSTBr5D%2BDthL6RQEV%2FZX0BAIgLzAas%2FF0r5%2BTi8sSRLuIGOpencbwKDv3YJeigwOFzjYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKNfXi3ldwlf8zTTNCrcAwAr%2BvfPWtoIyJZZ3uh5qOVfOhVXaCuUekEC0ByQX4ZCsSNhVMMamXhSh46ctvz413LiWmqCEBsZipV3IVoWsawiTIg9NZEaWg%2F8qBN3F9SAWFedqA2z8Zlfzo9lmdPmO8G6SidJpBhApRW9Wpuw2c8soHg%2BA4%2FLd2eq0VZOAt2ULE3JEYC6s%2FwdHUi9y2a%2F362a0JfPIylf4eswvqT9euC%2BdwIIJtOG4gw7vvDMC6i1Rlmu46FjjtyET2acQnceMKj2o9jC7JzJKS3EfRqMUR3eTW9vSAyUD0GwACD%2FoINziSO06D5zsWzBtriiMK8j8B8zff5Mu839XGSRgiwOm6bB22tj5d6joHL3jovPgSS4AKXIsQ98gWuQZlPbFwKvTAHAe3V%2B%2Blg5gAYT12xEsXXlwogQ7mDzgC56VUCqIkyP2vwI1vEixQI1hVLN50SBXL3DqfJst0DPLddiwDhv9Jc5Zj4xjzztbeF2r3SYvWcH2HRgE9rZfUmKowJp%2B1t95c2dHs2LNp7N%2FO7gRFsO6CylBB59ItcpalG%2FoRAUlDeZ0wrOqCfJNBUxNfuTH2eCGBEZHQ0MIBLUl4uYqO5rO67njU6WSgrpuGXrvU13X64RDP9gADDeCeVEZ3fDMLqJ7M4GOqUB37U32Ogh6fdsxcQj%2B%2Fkcc2auhbUuVPecshrWJ1fnEsWz%2BAKhotQiTPyKekeqVX71qHZhFSHEcEFREnhJRnOu0pnSPnlX1FofeQXXHAYiwCQ5YX2TpemqX7CFkQP8aYDkVU9ayP16B14E0ZsDpncdBXNosk3I0CfJNhrvS102Wfqc6y8RqfcU3wCl8EZ2%2F0ZFz01Dy5Ggn31ohZkWZ92rg1BVtSJW&X-Amz-Signature=ced55cda5f79acd12ea6df16d89714b699a273b1f976e347f18ff7147cf7b51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCM2ZCEO%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZ06evnfL4Su%2F3Em0R9vDSTBr5D%2BDthL6RQEV%2FZX0BAIgLzAas%2FF0r5%2BTi8sSRLuIGOpencbwKDv3YJeigwOFzjYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKNfXi3ldwlf8zTTNCrcAwAr%2BvfPWtoIyJZZ3uh5qOVfOhVXaCuUekEC0ByQX4ZCsSNhVMMamXhSh46ctvz413LiWmqCEBsZipV3IVoWsawiTIg9NZEaWg%2F8qBN3F9SAWFedqA2z8Zlfzo9lmdPmO8G6SidJpBhApRW9Wpuw2c8soHg%2BA4%2FLd2eq0VZOAt2ULE3JEYC6s%2FwdHUi9y2a%2F362a0JfPIylf4eswvqT9euC%2BdwIIJtOG4gw7vvDMC6i1Rlmu46FjjtyET2acQnceMKj2o9jC7JzJKS3EfRqMUR3eTW9vSAyUD0GwACD%2FoINziSO06D5zsWzBtriiMK8j8B8zff5Mu839XGSRgiwOm6bB22tj5d6joHL3jovPgSS4AKXIsQ98gWuQZlPbFwKvTAHAe3V%2B%2Blg5gAYT12xEsXXlwogQ7mDzgC56VUCqIkyP2vwI1vEixQI1hVLN50SBXL3DqfJst0DPLddiwDhv9Jc5Zj4xjzztbeF2r3SYvWcH2HRgE9rZfUmKowJp%2B1t95c2dHs2LNp7N%2FO7gRFsO6CylBB59ItcpalG%2FoRAUlDeZ0wrOqCfJNBUxNfuTH2eCGBEZHQ0MIBLUl4uYqO5rO67njU6WSgrpuGXrvU13X64RDP9gADDeCeVEZ3fDMLqJ7M4GOqUB37U32Ogh6fdsxcQj%2B%2Fkcc2auhbUuVPecshrWJ1fnEsWz%2BAKhotQiTPyKekeqVX71qHZhFSHEcEFREnhJRnOu0pnSPnlX1FofeQXXHAYiwCQ5YX2TpemqX7CFkQP8aYDkVU9ayP16B14E0ZsDpncdBXNosk3I0CfJNhrvS102Wfqc6y8RqfcU3wCl8EZ2%2F0ZFz01Dy5Ggn31ohZkWZ92rg1BVtSJW&X-Amz-Signature=25dbafc5920b88558e08354cea353fcaf90dd3f2148b109e8607785a86fbf4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCM2ZCEO%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZ06evnfL4Su%2F3Em0R9vDSTBr5D%2BDthL6RQEV%2FZX0BAIgLzAas%2FF0r5%2BTi8sSRLuIGOpencbwKDv3YJeigwOFzjYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKNfXi3ldwlf8zTTNCrcAwAr%2BvfPWtoIyJZZ3uh5qOVfOhVXaCuUekEC0ByQX4ZCsSNhVMMamXhSh46ctvz413LiWmqCEBsZipV3IVoWsawiTIg9NZEaWg%2F8qBN3F9SAWFedqA2z8Zlfzo9lmdPmO8G6SidJpBhApRW9Wpuw2c8soHg%2BA4%2FLd2eq0VZOAt2ULE3JEYC6s%2FwdHUi9y2a%2F362a0JfPIylf4eswvqT9euC%2BdwIIJtOG4gw7vvDMC6i1Rlmu46FjjtyET2acQnceMKj2o9jC7JzJKS3EfRqMUR3eTW9vSAyUD0GwACD%2FoINziSO06D5zsWzBtriiMK8j8B8zff5Mu839XGSRgiwOm6bB22tj5d6joHL3jovPgSS4AKXIsQ98gWuQZlPbFwKvTAHAe3V%2B%2Blg5gAYT12xEsXXlwogQ7mDzgC56VUCqIkyP2vwI1vEixQI1hVLN50SBXL3DqfJst0DPLddiwDhv9Jc5Zj4xjzztbeF2r3SYvWcH2HRgE9rZfUmKowJp%2B1t95c2dHs2LNp7N%2FO7gRFsO6CylBB59ItcpalG%2FoRAUlDeZ0wrOqCfJNBUxNfuTH2eCGBEZHQ0MIBLUl4uYqO5rO67njU6WSgrpuGXrvU13X64RDP9gADDeCeVEZ3fDMLqJ7M4GOqUB37U32Ogh6fdsxcQj%2B%2Fkcc2auhbUuVPecshrWJ1fnEsWz%2BAKhotQiTPyKekeqVX71qHZhFSHEcEFREnhJRnOu0pnSPnlX1FofeQXXHAYiwCQ5YX2TpemqX7CFkQP8aYDkVU9ayP16B14E0ZsDpncdBXNosk3I0CfJNhrvS102Wfqc6y8RqfcU3wCl8EZ2%2F0ZFz01Dy5Ggn31ohZkWZ92rg1BVtSJW&X-Amz-Signature=ad6704304fd32995938640efb46d93769c83f2e6714030576f5ad20e9ca64095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCM2ZCEO%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZ06evnfL4Su%2F3Em0R9vDSTBr5D%2BDthL6RQEV%2FZX0BAIgLzAas%2FF0r5%2BTi8sSRLuIGOpencbwKDv3YJeigwOFzjYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKNfXi3ldwlf8zTTNCrcAwAr%2BvfPWtoIyJZZ3uh5qOVfOhVXaCuUekEC0ByQX4ZCsSNhVMMamXhSh46ctvz413LiWmqCEBsZipV3IVoWsawiTIg9NZEaWg%2F8qBN3F9SAWFedqA2z8Zlfzo9lmdPmO8G6SidJpBhApRW9Wpuw2c8soHg%2BA4%2FLd2eq0VZOAt2ULE3JEYC6s%2FwdHUi9y2a%2F362a0JfPIylf4eswvqT9euC%2BdwIIJtOG4gw7vvDMC6i1Rlmu46FjjtyET2acQnceMKj2o9jC7JzJKS3EfRqMUR3eTW9vSAyUD0GwACD%2FoINziSO06D5zsWzBtriiMK8j8B8zff5Mu839XGSRgiwOm6bB22tj5d6joHL3jovPgSS4AKXIsQ98gWuQZlPbFwKvTAHAe3V%2B%2Blg5gAYT12xEsXXlwogQ7mDzgC56VUCqIkyP2vwI1vEixQI1hVLN50SBXL3DqfJst0DPLddiwDhv9Jc5Zj4xjzztbeF2r3SYvWcH2HRgE9rZfUmKowJp%2B1t95c2dHs2LNp7N%2FO7gRFsO6CylBB59ItcpalG%2FoRAUlDeZ0wrOqCfJNBUxNfuTH2eCGBEZHQ0MIBLUl4uYqO5rO67njU6WSgrpuGXrvU13X64RDP9gADDeCeVEZ3fDMLqJ7M4GOqUB37U32Ogh6fdsxcQj%2B%2Fkcc2auhbUuVPecshrWJ1fnEsWz%2BAKhotQiTPyKekeqVX71qHZhFSHEcEFREnhJRnOu0pnSPnlX1FofeQXXHAYiwCQ5YX2TpemqX7CFkQP8aYDkVU9ayP16B14E0ZsDpncdBXNosk3I0CfJNhrvS102Wfqc6y8RqfcU3wCl8EZ2%2F0ZFz01Dy5Ggn31ohZkWZ92rg1BVtSJW&X-Amz-Signature=c776a0e54918771aa6db9b2026eed1ac2e5893de2bea1eabf37ec226ec6ea744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCM2ZCEO%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZ06evnfL4Su%2F3Em0R9vDSTBr5D%2BDthL6RQEV%2FZX0BAIgLzAas%2FF0r5%2BTi8sSRLuIGOpencbwKDv3YJeigwOFzjYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKNfXi3ldwlf8zTTNCrcAwAr%2BvfPWtoIyJZZ3uh5qOVfOhVXaCuUekEC0ByQX4ZCsSNhVMMamXhSh46ctvz413LiWmqCEBsZipV3IVoWsawiTIg9NZEaWg%2F8qBN3F9SAWFedqA2z8Zlfzo9lmdPmO8G6SidJpBhApRW9Wpuw2c8soHg%2BA4%2FLd2eq0VZOAt2ULE3JEYC6s%2FwdHUi9y2a%2F362a0JfPIylf4eswvqT9euC%2BdwIIJtOG4gw7vvDMC6i1Rlmu46FjjtyET2acQnceMKj2o9jC7JzJKS3EfRqMUR3eTW9vSAyUD0GwACD%2FoINziSO06D5zsWzBtriiMK8j8B8zff5Mu839XGSRgiwOm6bB22tj5d6joHL3jovPgSS4AKXIsQ98gWuQZlPbFwKvTAHAe3V%2B%2Blg5gAYT12xEsXXlwogQ7mDzgC56VUCqIkyP2vwI1vEixQI1hVLN50SBXL3DqfJst0DPLddiwDhv9Jc5Zj4xjzztbeF2r3SYvWcH2HRgE9rZfUmKowJp%2B1t95c2dHs2LNp7N%2FO7gRFsO6CylBB59ItcpalG%2FoRAUlDeZ0wrOqCfJNBUxNfuTH2eCGBEZHQ0MIBLUl4uYqO5rO67njU6WSgrpuGXrvU13X64RDP9gADDeCeVEZ3fDMLqJ7M4GOqUB37U32Ogh6fdsxcQj%2B%2Fkcc2auhbUuVPecshrWJ1fnEsWz%2BAKhotQiTPyKekeqVX71qHZhFSHEcEFREnhJRnOu0pnSPnlX1FofeQXXHAYiwCQ5YX2TpemqX7CFkQP8aYDkVU9ayP16B14E0ZsDpncdBXNosk3I0CfJNhrvS102Wfqc6y8RqfcU3wCl8EZ2%2F0ZFz01Dy5Ggn31ohZkWZ92rg1BVtSJW&X-Amz-Signature=cc1167ecbfbf8fb00353f8c4af289596f1bec940aa896e2128db0eb7cd5df088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCM2ZCEO%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZ06evnfL4Su%2F3Em0R9vDSTBr5D%2BDthL6RQEV%2FZX0BAIgLzAas%2FF0r5%2BTi8sSRLuIGOpencbwKDv3YJeigwOFzjYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKNfXi3ldwlf8zTTNCrcAwAr%2BvfPWtoIyJZZ3uh5qOVfOhVXaCuUekEC0ByQX4ZCsSNhVMMamXhSh46ctvz413LiWmqCEBsZipV3IVoWsawiTIg9NZEaWg%2F8qBN3F9SAWFedqA2z8Zlfzo9lmdPmO8G6SidJpBhApRW9Wpuw2c8soHg%2BA4%2FLd2eq0VZOAt2ULE3JEYC6s%2FwdHUi9y2a%2F362a0JfPIylf4eswvqT9euC%2BdwIIJtOG4gw7vvDMC6i1Rlmu46FjjtyET2acQnceMKj2o9jC7JzJKS3EfRqMUR3eTW9vSAyUD0GwACD%2FoINziSO06D5zsWzBtriiMK8j8B8zff5Mu839XGSRgiwOm6bB22tj5d6joHL3jovPgSS4AKXIsQ98gWuQZlPbFwKvTAHAe3V%2B%2Blg5gAYT12xEsXXlwogQ7mDzgC56VUCqIkyP2vwI1vEixQI1hVLN50SBXL3DqfJst0DPLddiwDhv9Jc5Zj4xjzztbeF2r3SYvWcH2HRgE9rZfUmKowJp%2B1t95c2dHs2LNp7N%2FO7gRFsO6CylBB59ItcpalG%2FoRAUlDeZ0wrOqCfJNBUxNfuTH2eCGBEZHQ0MIBLUl4uYqO5rO67njU6WSgrpuGXrvU13X64RDP9gADDeCeVEZ3fDMLqJ7M4GOqUB37U32Ogh6fdsxcQj%2B%2Fkcc2auhbUuVPecshrWJ1fnEsWz%2BAKhotQiTPyKekeqVX71qHZhFSHEcEFREnhJRnOu0pnSPnlX1FofeQXXHAYiwCQ5YX2TpemqX7CFkQP8aYDkVU9ayP16B14E0ZsDpncdBXNosk3I0CfJNhrvS102Wfqc6y8RqfcU3wCl8EZ2%2F0ZFz01Dy5Ggn31ohZkWZ92rg1BVtSJW&X-Amz-Signature=3e0f8d437fcbe643db96d59df93f6c00b44c3eafec462f1afb2fe137cb355687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
