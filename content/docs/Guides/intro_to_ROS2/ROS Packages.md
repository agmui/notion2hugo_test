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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEZUICW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL%2BXbf0%2BI4q7F88kl5pZzLU4zqVoKeZsW1ae3FFdHPhAiAzVcxUyOp0caeuqB4WuoCcyUdQLMVHJvPN7OM561zBNiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKT%2FTB6iLoBveL4qEKtwDS%2BUC0Ph3YR%2FQVNYlGM7MpcfPIR9AmztzbYXNwXSA2k7BcInSgm6sddxLJalM7lzEIzEPw3YxxhBeA2AMSQHW%2F%2FoZVJQFayGE1HZzdHbyHQ303HVPDStqWkXCHzGfoVBTmQN0eZweLtnQlq%2ByvsnWVTYo2eNwxrXl9ZTkpLkSKF8nm6Ea1UpT67evk1e0GTim42iNhZONBiiabTwawZ0KrKHvviEze%2Fe8EjiFJJHw4cyimG6OL9jsXEg6R2yNt%2BS7vkCfj7Ii5J2pDm2TA1XjgdnK1KlWOX%2Frlo8nN%2F%2FCret5%2BJ9UTiQZSR8B0ZAgTFQNfaFwl8Tqb56d%2FpJE2G%2F1DcQXVRIR6zhSPUiIbolyJhWqmzEGlflXwDCN05V0tjsF5HGAP6jgbQ4%2FFUcIK3hpomuxhgNbXA8PAo4nyDMpXjESp4%2BnG62kg1sJCJMPP1gMeSbKGeZFLUDJ6ANBoiWho9Hj0hrL%2FTA0DhOfUCiwazmf24Q0VtgkTSw%2B%2BxVznJO7Q1ehEXrmoj5IWip%2BWBp91%2Bu2enLi7D1BA3Dsvks9JojcBNmk%2BU310raEy72vJI6NeN%2B19VaflcukOOffDtQyK8UvKNJT9Zv%2FZW2oJPwWbnTy5Qx5xYsT4zUy68Mwh%2Bm8vwY6pgG715iG7DV9pU1IcvaGr64Hyz5HN9V2JDkw6YLZq81jTMIx6NpU7fvE1ImfrIk%2Fo2YOZ7rqYEO4j99668fP639Tn1LgXAPA%2FLey766FK7B%2B0fTY10xAOgFOeXiaU1iyl30IIrG6RdQGLNHPpuuuFDic5oBYZWaoVt1rlrsWxSlbZGUIzeSXPAM7ttCnz6uDkDCM2g2XZ31KAGrE84mHJVQrYX6oyxzy&X-Amz-Signature=bfaa48e18a77a3d6c3b13ffbc853e1110d7fdca0e93c17560df5395714b51051&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEZUICW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL%2BXbf0%2BI4q7F88kl5pZzLU4zqVoKeZsW1ae3FFdHPhAiAzVcxUyOp0caeuqB4WuoCcyUdQLMVHJvPN7OM561zBNiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKT%2FTB6iLoBveL4qEKtwDS%2BUC0Ph3YR%2FQVNYlGM7MpcfPIR9AmztzbYXNwXSA2k7BcInSgm6sddxLJalM7lzEIzEPw3YxxhBeA2AMSQHW%2F%2FoZVJQFayGE1HZzdHbyHQ303HVPDStqWkXCHzGfoVBTmQN0eZweLtnQlq%2ByvsnWVTYo2eNwxrXl9ZTkpLkSKF8nm6Ea1UpT67evk1e0GTim42iNhZONBiiabTwawZ0KrKHvviEze%2Fe8EjiFJJHw4cyimG6OL9jsXEg6R2yNt%2BS7vkCfj7Ii5J2pDm2TA1XjgdnK1KlWOX%2Frlo8nN%2F%2FCret5%2BJ9UTiQZSR8B0ZAgTFQNfaFwl8Tqb56d%2FpJE2G%2F1DcQXVRIR6zhSPUiIbolyJhWqmzEGlflXwDCN05V0tjsF5HGAP6jgbQ4%2FFUcIK3hpomuxhgNbXA8PAo4nyDMpXjESp4%2BnG62kg1sJCJMPP1gMeSbKGeZFLUDJ6ANBoiWho9Hj0hrL%2FTA0DhOfUCiwazmf24Q0VtgkTSw%2B%2BxVznJO7Q1ehEXrmoj5IWip%2BWBp91%2Bu2enLi7D1BA3Dsvks9JojcBNmk%2BU310raEy72vJI6NeN%2B19VaflcukOOffDtQyK8UvKNJT9Zv%2FZW2oJPwWbnTy5Qx5xYsT4zUy68Mwh%2Bm8vwY6pgG715iG7DV9pU1IcvaGr64Hyz5HN9V2JDkw6YLZq81jTMIx6NpU7fvE1ImfrIk%2Fo2YOZ7rqYEO4j99668fP639Tn1LgXAPA%2FLey766FK7B%2B0fTY10xAOgFOeXiaU1iyl30IIrG6RdQGLNHPpuuuFDic5oBYZWaoVt1rlrsWxSlbZGUIzeSXPAM7ttCnz6uDkDCM2g2XZ31KAGrE84mHJVQrYX6oyxzy&X-Amz-Signature=3d7038d201c616b4a827ace9d85b6e1910764801633eee136c7ea0e6734db2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEZUICW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL%2BXbf0%2BI4q7F88kl5pZzLU4zqVoKeZsW1ae3FFdHPhAiAzVcxUyOp0caeuqB4WuoCcyUdQLMVHJvPN7OM561zBNiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKT%2FTB6iLoBveL4qEKtwDS%2BUC0Ph3YR%2FQVNYlGM7MpcfPIR9AmztzbYXNwXSA2k7BcInSgm6sddxLJalM7lzEIzEPw3YxxhBeA2AMSQHW%2F%2FoZVJQFayGE1HZzdHbyHQ303HVPDStqWkXCHzGfoVBTmQN0eZweLtnQlq%2ByvsnWVTYo2eNwxrXl9ZTkpLkSKF8nm6Ea1UpT67evk1e0GTim42iNhZONBiiabTwawZ0KrKHvviEze%2Fe8EjiFJJHw4cyimG6OL9jsXEg6R2yNt%2BS7vkCfj7Ii5J2pDm2TA1XjgdnK1KlWOX%2Frlo8nN%2F%2FCret5%2BJ9UTiQZSR8B0ZAgTFQNfaFwl8Tqb56d%2FpJE2G%2F1DcQXVRIR6zhSPUiIbolyJhWqmzEGlflXwDCN05V0tjsF5HGAP6jgbQ4%2FFUcIK3hpomuxhgNbXA8PAo4nyDMpXjESp4%2BnG62kg1sJCJMPP1gMeSbKGeZFLUDJ6ANBoiWho9Hj0hrL%2FTA0DhOfUCiwazmf24Q0VtgkTSw%2B%2BxVznJO7Q1ehEXrmoj5IWip%2BWBp91%2Bu2enLi7D1BA3Dsvks9JojcBNmk%2BU310raEy72vJI6NeN%2B19VaflcukOOffDtQyK8UvKNJT9Zv%2FZW2oJPwWbnTy5Qx5xYsT4zUy68Mwh%2Bm8vwY6pgG715iG7DV9pU1IcvaGr64Hyz5HN9V2JDkw6YLZq81jTMIx6NpU7fvE1ImfrIk%2Fo2YOZ7rqYEO4j99668fP639Tn1LgXAPA%2FLey766FK7B%2B0fTY10xAOgFOeXiaU1iyl30IIrG6RdQGLNHPpuuuFDic5oBYZWaoVt1rlrsWxSlbZGUIzeSXPAM7ttCnz6uDkDCM2g2XZ31KAGrE84mHJVQrYX6oyxzy&X-Amz-Signature=fef99288a4f3ba076cf0f349554d9d4df904a2eb4a4b77dd0115f2163f30204e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEZUICW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL%2BXbf0%2BI4q7F88kl5pZzLU4zqVoKeZsW1ae3FFdHPhAiAzVcxUyOp0caeuqB4WuoCcyUdQLMVHJvPN7OM561zBNiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKT%2FTB6iLoBveL4qEKtwDS%2BUC0Ph3YR%2FQVNYlGM7MpcfPIR9AmztzbYXNwXSA2k7BcInSgm6sddxLJalM7lzEIzEPw3YxxhBeA2AMSQHW%2F%2FoZVJQFayGE1HZzdHbyHQ303HVPDStqWkXCHzGfoVBTmQN0eZweLtnQlq%2ByvsnWVTYo2eNwxrXl9ZTkpLkSKF8nm6Ea1UpT67evk1e0GTim42iNhZONBiiabTwawZ0KrKHvviEze%2Fe8EjiFJJHw4cyimG6OL9jsXEg6R2yNt%2BS7vkCfj7Ii5J2pDm2TA1XjgdnK1KlWOX%2Frlo8nN%2F%2FCret5%2BJ9UTiQZSR8B0ZAgTFQNfaFwl8Tqb56d%2FpJE2G%2F1DcQXVRIR6zhSPUiIbolyJhWqmzEGlflXwDCN05V0tjsF5HGAP6jgbQ4%2FFUcIK3hpomuxhgNbXA8PAo4nyDMpXjESp4%2BnG62kg1sJCJMPP1gMeSbKGeZFLUDJ6ANBoiWho9Hj0hrL%2FTA0DhOfUCiwazmf24Q0VtgkTSw%2B%2BxVznJO7Q1ehEXrmoj5IWip%2BWBp91%2Bu2enLi7D1BA3Dsvks9JojcBNmk%2BU310raEy72vJI6NeN%2B19VaflcukOOffDtQyK8UvKNJT9Zv%2FZW2oJPwWbnTy5Qx5xYsT4zUy68Mwh%2Bm8vwY6pgG715iG7DV9pU1IcvaGr64Hyz5HN9V2JDkw6YLZq81jTMIx6NpU7fvE1ImfrIk%2Fo2YOZ7rqYEO4j99668fP639Tn1LgXAPA%2FLey766FK7B%2B0fTY10xAOgFOeXiaU1iyl30IIrG6RdQGLNHPpuuuFDic5oBYZWaoVt1rlrsWxSlbZGUIzeSXPAM7ttCnz6uDkDCM2g2XZ31KAGrE84mHJVQrYX6oyxzy&X-Amz-Signature=03bddf2fe0bb30a192d852e877e63c5aec585a19f5883a7e376f94835cc7c2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEZUICW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL%2BXbf0%2BI4q7F88kl5pZzLU4zqVoKeZsW1ae3FFdHPhAiAzVcxUyOp0caeuqB4WuoCcyUdQLMVHJvPN7OM561zBNiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKT%2FTB6iLoBveL4qEKtwDS%2BUC0Ph3YR%2FQVNYlGM7MpcfPIR9AmztzbYXNwXSA2k7BcInSgm6sddxLJalM7lzEIzEPw3YxxhBeA2AMSQHW%2F%2FoZVJQFayGE1HZzdHbyHQ303HVPDStqWkXCHzGfoVBTmQN0eZweLtnQlq%2ByvsnWVTYo2eNwxrXl9ZTkpLkSKF8nm6Ea1UpT67evk1e0GTim42iNhZONBiiabTwawZ0KrKHvviEze%2Fe8EjiFJJHw4cyimG6OL9jsXEg6R2yNt%2BS7vkCfj7Ii5J2pDm2TA1XjgdnK1KlWOX%2Frlo8nN%2F%2FCret5%2BJ9UTiQZSR8B0ZAgTFQNfaFwl8Tqb56d%2FpJE2G%2F1DcQXVRIR6zhSPUiIbolyJhWqmzEGlflXwDCN05V0tjsF5HGAP6jgbQ4%2FFUcIK3hpomuxhgNbXA8PAo4nyDMpXjESp4%2BnG62kg1sJCJMPP1gMeSbKGeZFLUDJ6ANBoiWho9Hj0hrL%2FTA0DhOfUCiwazmf24Q0VtgkTSw%2B%2BxVznJO7Q1ehEXrmoj5IWip%2BWBp91%2Bu2enLi7D1BA3Dsvks9JojcBNmk%2BU310raEy72vJI6NeN%2B19VaflcukOOffDtQyK8UvKNJT9Zv%2FZW2oJPwWbnTy5Qx5xYsT4zUy68Mwh%2Bm8vwY6pgG715iG7DV9pU1IcvaGr64Hyz5HN9V2JDkw6YLZq81jTMIx6NpU7fvE1ImfrIk%2Fo2YOZ7rqYEO4j99668fP639Tn1LgXAPA%2FLey766FK7B%2B0fTY10xAOgFOeXiaU1iyl30IIrG6RdQGLNHPpuuuFDic5oBYZWaoVt1rlrsWxSlbZGUIzeSXPAM7ttCnz6uDkDCM2g2XZ31KAGrE84mHJVQrYX6oyxzy&X-Amz-Signature=fedc536ea2c773cc73629d79e4d20b3e6261ea82c383b7057c82238326946bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEZUICW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL%2BXbf0%2BI4q7F88kl5pZzLU4zqVoKeZsW1ae3FFdHPhAiAzVcxUyOp0caeuqB4WuoCcyUdQLMVHJvPN7OM561zBNiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKT%2FTB6iLoBveL4qEKtwDS%2BUC0Ph3YR%2FQVNYlGM7MpcfPIR9AmztzbYXNwXSA2k7BcInSgm6sddxLJalM7lzEIzEPw3YxxhBeA2AMSQHW%2F%2FoZVJQFayGE1HZzdHbyHQ303HVPDStqWkXCHzGfoVBTmQN0eZweLtnQlq%2ByvsnWVTYo2eNwxrXl9ZTkpLkSKF8nm6Ea1UpT67evk1e0GTim42iNhZONBiiabTwawZ0KrKHvviEze%2Fe8EjiFJJHw4cyimG6OL9jsXEg6R2yNt%2BS7vkCfj7Ii5J2pDm2TA1XjgdnK1KlWOX%2Frlo8nN%2F%2FCret5%2BJ9UTiQZSR8B0ZAgTFQNfaFwl8Tqb56d%2FpJE2G%2F1DcQXVRIR6zhSPUiIbolyJhWqmzEGlflXwDCN05V0tjsF5HGAP6jgbQ4%2FFUcIK3hpomuxhgNbXA8PAo4nyDMpXjESp4%2BnG62kg1sJCJMPP1gMeSbKGeZFLUDJ6ANBoiWho9Hj0hrL%2FTA0DhOfUCiwazmf24Q0VtgkTSw%2B%2BxVznJO7Q1ehEXrmoj5IWip%2BWBp91%2Bu2enLi7D1BA3Dsvks9JojcBNmk%2BU310raEy72vJI6NeN%2B19VaflcukOOffDtQyK8UvKNJT9Zv%2FZW2oJPwWbnTy5Qx5xYsT4zUy68Mwh%2Bm8vwY6pgG715iG7DV9pU1IcvaGr64Hyz5HN9V2JDkw6YLZq81jTMIx6NpU7fvE1ImfrIk%2Fo2YOZ7rqYEO4j99668fP639Tn1LgXAPA%2FLey766FK7B%2B0fTY10xAOgFOeXiaU1iyl30IIrG6RdQGLNHPpuuuFDic5oBYZWaoVt1rlrsWxSlbZGUIzeSXPAM7ttCnz6uDkDCM2g2XZ31KAGrE84mHJVQrYX6oyxzy&X-Amz-Signature=7df00c50208e4be1363b2f7e90c75c0ef972ee88d29d90cc4d89a399b48440be&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEZUICW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL%2BXbf0%2BI4q7F88kl5pZzLU4zqVoKeZsW1ae3FFdHPhAiAzVcxUyOp0caeuqB4WuoCcyUdQLMVHJvPN7OM561zBNiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKT%2FTB6iLoBveL4qEKtwDS%2BUC0Ph3YR%2FQVNYlGM7MpcfPIR9AmztzbYXNwXSA2k7BcInSgm6sddxLJalM7lzEIzEPw3YxxhBeA2AMSQHW%2F%2FoZVJQFayGE1HZzdHbyHQ303HVPDStqWkXCHzGfoVBTmQN0eZweLtnQlq%2ByvsnWVTYo2eNwxrXl9ZTkpLkSKF8nm6Ea1UpT67evk1e0GTim42iNhZONBiiabTwawZ0KrKHvviEze%2Fe8EjiFJJHw4cyimG6OL9jsXEg6R2yNt%2BS7vkCfj7Ii5J2pDm2TA1XjgdnK1KlWOX%2Frlo8nN%2F%2FCret5%2BJ9UTiQZSR8B0ZAgTFQNfaFwl8Tqb56d%2FpJE2G%2F1DcQXVRIR6zhSPUiIbolyJhWqmzEGlflXwDCN05V0tjsF5HGAP6jgbQ4%2FFUcIK3hpomuxhgNbXA8PAo4nyDMpXjESp4%2BnG62kg1sJCJMPP1gMeSbKGeZFLUDJ6ANBoiWho9Hj0hrL%2FTA0DhOfUCiwazmf24Q0VtgkTSw%2B%2BxVznJO7Q1ehEXrmoj5IWip%2BWBp91%2Bu2enLi7D1BA3Dsvks9JojcBNmk%2BU310raEy72vJI6NeN%2B19VaflcukOOffDtQyK8UvKNJT9Zv%2FZW2oJPwWbnTy5Qx5xYsT4zUy68Mwh%2Bm8vwY6pgG715iG7DV9pU1IcvaGr64Hyz5HN9V2JDkw6YLZq81jTMIx6NpU7fvE1ImfrIk%2Fo2YOZ7rqYEO4j99668fP639Tn1LgXAPA%2FLey766FK7B%2B0fTY10xAOgFOeXiaU1iyl30IIrG6RdQGLNHPpuuuFDic5oBYZWaoVt1rlrsWxSlbZGUIzeSXPAM7ttCnz6uDkDCM2g2XZ31KAGrE84mHJVQrYX6oyxzy&X-Amz-Signature=dec48e51d5d2caf2506f50e06390ce99b490675c92fac1ee130a9d66963ec114&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
