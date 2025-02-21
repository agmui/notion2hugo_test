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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFM5V3G%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIez5sqqrb1wInB4QJzfF6nSc%2BDAssVVTaj4ZKswOpEAiEApNMVwv2xfCAcvUGP4uhspvUDM0Is963sZHiyy1WOQMYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOWGHmY8dh0x3cShSrcA0NMCk%2FoGftvh6lOoxVLtxDuRAWpeKn9XD%2FPKTXxr53CCT3Glahaici%2Fysn2v0ARzSlpRXGwINFUOvPfSqc%2B0qAQd9HTlz5TimGqLiR4mki8l3xp0woNO6hFkQJhnKb7GstlZ2baxMN%2Bcwsxs2EZrma9dCkTpMzPFoGv635Mm9WiuaVZhsuTo0RGx4zb6tqc2xHDW8xgTUlURBvLbclsVk1CKJUtCI2UvkPKHMFO%2BMDiAs02yPgKMY7dBD2wEjz40X5VBKQwmYPP2hHPesTs4iExYuvbKvn0M5ZJpUukxt5FsvRI0ZWbfZl51yOTL9My1xZivYww20jUdh3BcFSrS2cv49sHUaDDEHmpMFBE2xmtEw6XwREpIS4AqIW3tDMQ45pgEWlJ4jvDyHJHUi7zzaR%2BQeia0aJlon%2FnuQ4urFpIRDZDzBW1IWH1TQADuhOR2uAUMzewgIDd0JqN6bb3yPm6DdE2YunHFsuVmqvxKPNSbrFtswzyVNfpKEqg38YwoGyrrljZoRKnr9E45gkO4zVYC9f9AOZ1dRQWmv0gz1WtI2FylFAgRhh22HeCFhMnuhHcMGMJrcqPUqKBCHVXm4j%2FBJ4mX7Ii%2FrfOz5VPoPAp1tGu39toM4Ini6l7MJqB470GOqUBSW9zVH8uW%2B7Fsm6rI8soSeaChqP9Eq6U%2B2sJygPHx4A6DUEHyTBRBMjUcNsfaMgr%2FT1%2BElHhGViSLTEyBEW2gyM6msTdzS%2B5Sl%2BiVTXBpdpUNH6JQZWoplLp63lIF4iMrTjTJo2ZSn%2BVTA43BRQhUG8rYYQ3Tlj5qLVxDFlW6lwwUkAIvoc6bIMIlziGflOBp70tho%2FHlOdyAl3Mq6DWQn1NMsTd&X-Amz-Signature=f3f3a13460c4deb37f022c438b8cb833d88941eabee885ed5b97eca678ced51a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFM5V3G%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIez5sqqrb1wInB4QJzfF6nSc%2BDAssVVTaj4ZKswOpEAiEApNMVwv2xfCAcvUGP4uhspvUDM0Is963sZHiyy1WOQMYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOWGHmY8dh0x3cShSrcA0NMCk%2FoGftvh6lOoxVLtxDuRAWpeKn9XD%2FPKTXxr53CCT3Glahaici%2Fysn2v0ARzSlpRXGwINFUOvPfSqc%2B0qAQd9HTlz5TimGqLiR4mki8l3xp0woNO6hFkQJhnKb7GstlZ2baxMN%2Bcwsxs2EZrma9dCkTpMzPFoGv635Mm9WiuaVZhsuTo0RGx4zb6tqc2xHDW8xgTUlURBvLbclsVk1CKJUtCI2UvkPKHMFO%2BMDiAs02yPgKMY7dBD2wEjz40X5VBKQwmYPP2hHPesTs4iExYuvbKvn0M5ZJpUukxt5FsvRI0ZWbfZl51yOTL9My1xZivYww20jUdh3BcFSrS2cv49sHUaDDEHmpMFBE2xmtEw6XwREpIS4AqIW3tDMQ45pgEWlJ4jvDyHJHUi7zzaR%2BQeia0aJlon%2FnuQ4urFpIRDZDzBW1IWH1TQADuhOR2uAUMzewgIDd0JqN6bb3yPm6DdE2YunHFsuVmqvxKPNSbrFtswzyVNfpKEqg38YwoGyrrljZoRKnr9E45gkO4zVYC9f9AOZ1dRQWmv0gz1WtI2FylFAgRhh22HeCFhMnuhHcMGMJrcqPUqKBCHVXm4j%2FBJ4mX7Ii%2FrfOz5VPoPAp1tGu39toM4Ini6l7MJqB470GOqUBSW9zVH8uW%2B7Fsm6rI8soSeaChqP9Eq6U%2B2sJygPHx4A6DUEHyTBRBMjUcNsfaMgr%2FT1%2BElHhGViSLTEyBEW2gyM6msTdzS%2B5Sl%2BiVTXBpdpUNH6JQZWoplLp63lIF4iMrTjTJo2ZSn%2BVTA43BRQhUG8rYYQ3Tlj5qLVxDFlW6lwwUkAIvoc6bIMIlziGflOBp70tho%2FHlOdyAl3Mq6DWQn1NMsTd&X-Amz-Signature=3d4d04b1aeb299d29796b6b4c7580a7150f9bf36195cdb292c802a0818efc326&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFM5V3G%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIez5sqqrb1wInB4QJzfF6nSc%2BDAssVVTaj4ZKswOpEAiEApNMVwv2xfCAcvUGP4uhspvUDM0Is963sZHiyy1WOQMYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOWGHmY8dh0x3cShSrcA0NMCk%2FoGftvh6lOoxVLtxDuRAWpeKn9XD%2FPKTXxr53CCT3Glahaici%2Fysn2v0ARzSlpRXGwINFUOvPfSqc%2B0qAQd9HTlz5TimGqLiR4mki8l3xp0woNO6hFkQJhnKb7GstlZ2baxMN%2Bcwsxs2EZrma9dCkTpMzPFoGv635Mm9WiuaVZhsuTo0RGx4zb6tqc2xHDW8xgTUlURBvLbclsVk1CKJUtCI2UvkPKHMFO%2BMDiAs02yPgKMY7dBD2wEjz40X5VBKQwmYPP2hHPesTs4iExYuvbKvn0M5ZJpUukxt5FsvRI0ZWbfZl51yOTL9My1xZivYww20jUdh3BcFSrS2cv49sHUaDDEHmpMFBE2xmtEw6XwREpIS4AqIW3tDMQ45pgEWlJ4jvDyHJHUi7zzaR%2BQeia0aJlon%2FnuQ4urFpIRDZDzBW1IWH1TQADuhOR2uAUMzewgIDd0JqN6bb3yPm6DdE2YunHFsuVmqvxKPNSbrFtswzyVNfpKEqg38YwoGyrrljZoRKnr9E45gkO4zVYC9f9AOZ1dRQWmv0gz1WtI2FylFAgRhh22HeCFhMnuhHcMGMJrcqPUqKBCHVXm4j%2FBJ4mX7Ii%2FrfOz5VPoPAp1tGu39toM4Ini6l7MJqB470GOqUBSW9zVH8uW%2B7Fsm6rI8soSeaChqP9Eq6U%2B2sJygPHx4A6DUEHyTBRBMjUcNsfaMgr%2FT1%2BElHhGViSLTEyBEW2gyM6msTdzS%2B5Sl%2BiVTXBpdpUNH6JQZWoplLp63lIF4iMrTjTJo2ZSn%2BVTA43BRQhUG8rYYQ3Tlj5qLVxDFlW6lwwUkAIvoc6bIMIlziGflOBp70tho%2FHlOdyAl3Mq6DWQn1NMsTd&X-Amz-Signature=7f0e5c30c8200e4d455ab8de57a54672c3da8759720e38db9c405e9070fa91aa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFM5V3G%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIez5sqqrb1wInB4QJzfF6nSc%2BDAssVVTaj4ZKswOpEAiEApNMVwv2xfCAcvUGP4uhspvUDM0Is963sZHiyy1WOQMYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOWGHmY8dh0x3cShSrcA0NMCk%2FoGftvh6lOoxVLtxDuRAWpeKn9XD%2FPKTXxr53CCT3Glahaici%2Fysn2v0ARzSlpRXGwINFUOvPfSqc%2B0qAQd9HTlz5TimGqLiR4mki8l3xp0woNO6hFkQJhnKb7GstlZ2baxMN%2Bcwsxs2EZrma9dCkTpMzPFoGv635Mm9WiuaVZhsuTo0RGx4zb6tqc2xHDW8xgTUlURBvLbclsVk1CKJUtCI2UvkPKHMFO%2BMDiAs02yPgKMY7dBD2wEjz40X5VBKQwmYPP2hHPesTs4iExYuvbKvn0M5ZJpUukxt5FsvRI0ZWbfZl51yOTL9My1xZivYww20jUdh3BcFSrS2cv49sHUaDDEHmpMFBE2xmtEw6XwREpIS4AqIW3tDMQ45pgEWlJ4jvDyHJHUi7zzaR%2BQeia0aJlon%2FnuQ4urFpIRDZDzBW1IWH1TQADuhOR2uAUMzewgIDd0JqN6bb3yPm6DdE2YunHFsuVmqvxKPNSbrFtswzyVNfpKEqg38YwoGyrrljZoRKnr9E45gkO4zVYC9f9AOZ1dRQWmv0gz1WtI2FylFAgRhh22HeCFhMnuhHcMGMJrcqPUqKBCHVXm4j%2FBJ4mX7Ii%2FrfOz5VPoPAp1tGu39toM4Ini6l7MJqB470GOqUBSW9zVH8uW%2B7Fsm6rI8soSeaChqP9Eq6U%2B2sJygPHx4A6DUEHyTBRBMjUcNsfaMgr%2FT1%2BElHhGViSLTEyBEW2gyM6msTdzS%2B5Sl%2BiVTXBpdpUNH6JQZWoplLp63lIF4iMrTjTJo2ZSn%2BVTA43BRQhUG8rYYQ3Tlj5qLVxDFlW6lwwUkAIvoc6bIMIlziGflOBp70tho%2FHlOdyAl3Mq6DWQn1NMsTd&X-Amz-Signature=12f5da944fb7c520786219565cd311b59817173b9896a5256fdb73a330ed1e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFM5V3G%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIez5sqqrb1wInB4QJzfF6nSc%2BDAssVVTaj4ZKswOpEAiEApNMVwv2xfCAcvUGP4uhspvUDM0Is963sZHiyy1WOQMYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOWGHmY8dh0x3cShSrcA0NMCk%2FoGftvh6lOoxVLtxDuRAWpeKn9XD%2FPKTXxr53CCT3Glahaici%2Fysn2v0ARzSlpRXGwINFUOvPfSqc%2B0qAQd9HTlz5TimGqLiR4mki8l3xp0woNO6hFkQJhnKb7GstlZ2baxMN%2Bcwsxs2EZrma9dCkTpMzPFoGv635Mm9WiuaVZhsuTo0RGx4zb6tqc2xHDW8xgTUlURBvLbclsVk1CKJUtCI2UvkPKHMFO%2BMDiAs02yPgKMY7dBD2wEjz40X5VBKQwmYPP2hHPesTs4iExYuvbKvn0M5ZJpUukxt5FsvRI0ZWbfZl51yOTL9My1xZivYww20jUdh3BcFSrS2cv49sHUaDDEHmpMFBE2xmtEw6XwREpIS4AqIW3tDMQ45pgEWlJ4jvDyHJHUi7zzaR%2BQeia0aJlon%2FnuQ4urFpIRDZDzBW1IWH1TQADuhOR2uAUMzewgIDd0JqN6bb3yPm6DdE2YunHFsuVmqvxKPNSbrFtswzyVNfpKEqg38YwoGyrrljZoRKnr9E45gkO4zVYC9f9AOZ1dRQWmv0gz1WtI2FylFAgRhh22HeCFhMnuhHcMGMJrcqPUqKBCHVXm4j%2FBJ4mX7Ii%2FrfOz5VPoPAp1tGu39toM4Ini6l7MJqB470GOqUBSW9zVH8uW%2B7Fsm6rI8soSeaChqP9Eq6U%2B2sJygPHx4A6DUEHyTBRBMjUcNsfaMgr%2FT1%2BElHhGViSLTEyBEW2gyM6msTdzS%2B5Sl%2BiVTXBpdpUNH6JQZWoplLp63lIF4iMrTjTJo2ZSn%2BVTA43BRQhUG8rYYQ3Tlj5qLVxDFlW6lwwUkAIvoc6bIMIlziGflOBp70tho%2FHlOdyAl3Mq6DWQn1NMsTd&X-Amz-Signature=6f0e0bcdf35b10790ef10e048862070ba52779010db370b059ac808336811ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFM5V3G%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIez5sqqrb1wInB4QJzfF6nSc%2BDAssVVTaj4ZKswOpEAiEApNMVwv2xfCAcvUGP4uhspvUDM0Is963sZHiyy1WOQMYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOWGHmY8dh0x3cShSrcA0NMCk%2FoGftvh6lOoxVLtxDuRAWpeKn9XD%2FPKTXxr53CCT3Glahaici%2Fysn2v0ARzSlpRXGwINFUOvPfSqc%2B0qAQd9HTlz5TimGqLiR4mki8l3xp0woNO6hFkQJhnKb7GstlZ2baxMN%2Bcwsxs2EZrma9dCkTpMzPFoGv635Mm9WiuaVZhsuTo0RGx4zb6tqc2xHDW8xgTUlURBvLbclsVk1CKJUtCI2UvkPKHMFO%2BMDiAs02yPgKMY7dBD2wEjz40X5VBKQwmYPP2hHPesTs4iExYuvbKvn0M5ZJpUukxt5FsvRI0ZWbfZl51yOTL9My1xZivYww20jUdh3BcFSrS2cv49sHUaDDEHmpMFBE2xmtEw6XwREpIS4AqIW3tDMQ45pgEWlJ4jvDyHJHUi7zzaR%2BQeia0aJlon%2FnuQ4urFpIRDZDzBW1IWH1TQADuhOR2uAUMzewgIDd0JqN6bb3yPm6DdE2YunHFsuVmqvxKPNSbrFtswzyVNfpKEqg38YwoGyrrljZoRKnr9E45gkO4zVYC9f9AOZ1dRQWmv0gz1WtI2FylFAgRhh22HeCFhMnuhHcMGMJrcqPUqKBCHVXm4j%2FBJ4mX7Ii%2FrfOz5VPoPAp1tGu39toM4Ini6l7MJqB470GOqUBSW9zVH8uW%2B7Fsm6rI8soSeaChqP9Eq6U%2B2sJygPHx4A6DUEHyTBRBMjUcNsfaMgr%2FT1%2BElHhGViSLTEyBEW2gyM6msTdzS%2B5Sl%2BiVTXBpdpUNH6JQZWoplLp63lIF4iMrTjTJo2ZSn%2BVTA43BRQhUG8rYYQ3Tlj5qLVxDFlW6lwwUkAIvoc6bIMIlziGflOBp70tho%2FHlOdyAl3Mq6DWQn1NMsTd&X-Amz-Signature=4dc2d240425e339cd32813b8e39c54b06ea0e6650b5b78ec20b6079b22ac868e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFM5V3G%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIez5sqqrb1wInB4QJzfF6nSc%2BDAssVVTaj4ZKswOpEAiEApNMVwv2xfCAcvUGP4uhspvUDM0Is963sZHiyy1WOQMYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOWGHmY8dh0x3cShSrcA0NMCk%2FoGftvh6lOoxVLtxDuRAWpeKn9XD%2FPKTXxr53CCT3Glahaici%2Fysn2v0ARzSlpRXGwINFUOvPfSqc%2B0qAQd9HTlz5TimGqLiR4mki8l3xp0woNO6hFkQJhnKb7GstlZ2baxMN%2Bcwsxs2EZrma9dCkTpMzPFoGv635Mm9WiuaVZhsuTo0RGx4zb6tqc2xHDW8xgTUlURBvLbclsVk1CKJUtCI2UvkPKHMFO%2BMDiAs02yPgKMY7dBD2wEjz40X5VBKQwmYPP2hHPesTs4iExYuvbKvn0M5ZJpUukxt5FsvRI0ZWbfZl51yOTL9My1xZivYww20jUdh3BcFSrS2cv49sHUaDDEHmpMFBE2xmtEw6XwREpIS4AqIW3tDMQ45pgEWlJ4jvDyHJHUi7zzaR%2BQeia0aJlon%2FnuQ4urFpIRDZDzBW1IWH1TQADuhOR2uAUMzewgIDd0JqN6bb3yPm6DdE2YunHFsuVmqvxKPNSbrFtswzyVNfpKEqg38YwoGyrrljZoRKnr9E45gkO4zVYC9f9AOZ1dRQWmv0gz1WtI2FylFAgRhh22HeCFhMnuhHcMGMJrcqPUqKBCHVXm4j%2FBJ4mX7Ii%2FrfOz5VPoPAp1tGu39toM4Ini6l7MJqB470GOqUBSW9zVH8uW%2B7Fsm6rI8soSeaChqP9Eq6U%2B2sJygPHx4A6DUEHyTBRBMjUcNsfaMgr%2FT1%2BElHhGViSLTEyBEW2gyM6msTdzS%2B5Sl%2BiVTXBpdpUNH6JQZWoplLp63lIF4iMrTjTJo2ZSn%2BVTA43BRQhUG8rYYQ3Tlj5qLVxDFlW6lwwUkAIvoc6bIMIlziGflOBp70tho%2FHlOdyAl3Mq6DWQn1NMsTd&X-Amz-Signature=d25b0b9d517496ba5cb09985328aa1830d393717b2aa99d433891f75f59564b9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
