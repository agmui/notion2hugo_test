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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIRTLE4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVqiGdNY5gSTS0FHKh8seUJeRvBISq2Ys0lcf0xpBH7AIgC8ZRklxMy61UPdQyHrBNyTLykNq0ZE1PfSUe7pIlKLQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfORX42CKbBkUvOZircA5vipE7QSUVjx9H9VU9EG77LGZpQo1ZStufDIIUJHwXotECwhJIr660LFM34d%2BILrZ4zgZVmjKhTPyOxYEIZTkvCficgdaiJeu%2FUIhGMAjkhAP0ALG2oG50KSsQxk%2BglO2SK1FwVfgchHtWlIEEphABqhohnIxDps%2FhbcreT1rFmv1jHtO3ysP4ouHc%2B9L6KwYjNQDkDt0s4Pz67wkpHZgiblCdPK5v1YFNjiQQ2esQoRC5nPqhLQrSyYkVngOgImgBs9BJGipdg24qFD52zqOjp7jLzSkTNGk2pAqUpNBNbq7U7eqsLvoxgpulnx9Ib1yq0lGnS3lDBEOXajgNbrxnEq%2FxNFFJEwCVsfoMmsBrqMFZjyGajmcFRkNR0N4IDvH2zavvG50fSZ4l3ui0dNai3oRvHxgFeYCQnJsNy7sTSLI64IsIgmAWiohGbN73KfMsEV3b6f3C57cqhQVrXEwhgWHQaS%2FOk%2F8O1s%2FHQ0tNZJtJKcY%2F0s9fVLU7Ay4ZLU8ldgO4jP986uWAQA%2BhqFNSEwX6Uwir2ksQX6uRXwZ0PG4XLAsSy9exMldSV0Yz%2F3Mx2tDfvvCf3fWQk6%2BpqLGBZp7Gq%2BPyII4rPhnCBXH85PqRs2lrkJecWTCvFMMK2%2FL4GOqUBc3GXH9ND9H1PqgRM53v0tL0YneqSwUkgkhH%2BflIccWzZ0jyMPRluBUb7K9HAA9szw1uz7y274B85oAtTcVSYt5ZOtngtksJsL9Q7pkF5xXJEHU6geZk%2F%2BYbSp0WK%2Fp4ysCa7zBwQDvXGgnx2bDmd1%2F2qU8PxQnJLpV6ncftITbbCmzwQJqdxA9a4Oe56D9Drcb9zcLNEPavPbiLQaGT1d1ANXAbn&X-Amz-Signature=cc384f3119562373a4a182f05865c4bc3fb2fd54b435e61d12b0d45fc7c3e29b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIRTLE4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVqiGdNY5gSTS0FHKh8seUJeRvBISq2Ys0lcf0xpBH7AIgC8ZRklxMy61UPdQyHrBNyTLykNq0ZE1PfSUe7pIlKLQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfORX42CKbBkUvOZircA5vipE7QSUVjx9H9VU9EG77LGZpQo1ZStufDIIUJHwXotECwhJIr660LFM34d%2BILrZ4zgZVmjKhTPyOxYEIZTkvCficgdaiJeu%2FUIhGMAjkhAP0ALG2oG50KSsQxk%2BglO2SK1FwVfgchHtWlIEEphABqhohnIxDps%2FhbcreT1rFmv1jHtO3ysP4ouHc%2B9L6KwYjNQDkDt0s4Pz67wkpHZgiblCdPK5v1YFNjiQQ2esQoRC5nPqhLQrSyYkVngOgImgBs9BJGipdg24qFD52zqOjp7jLzSkTNGk2pAqUpNBNbq7U7eqsLvoxgpulnx9Ib1yq0lGnS3lDBEOXajgNbrxnEq%2FxNFFJEwCVsfoMmsBrqMFZjyGajmcFRkNR0N4IDvH2zavvG50fSZ4l3ui0dNai3oRvHxgFeYCQnJsNy7sTSLI64IsIgmAWiohGbN73KfMsEV3b6f3C57cqhQVrXEwhgWHQaS%2FOk%2F8O1s%2FHQ0tNZJtJKcY%2F0s9fVLU7Ay4ZLU8ldgO4jP986uWAQA%2BhqFNSEwX6Uwir2ksQX6uRXwZ0PG4XLAsSy9exMldSV0Yz%2F3Mx2tDfvvCf3fWQk6%2BpqLGBZp7Gq%2BPyII4rPhnCBXH85PqRs2lrkJecWTCvFMMK2%2FL4GOqUBc3GXH9ND9H1PqgRM53v0tL0YneqSwUkgkhH%2BflIccWzZ0jyMPRluBUb7K9HAA9szw1uz7y274B85oAtTcVSYt5ZOtngtksJsL9Q7pkF5xXJEHU6geZk%2F%2BYbSp0WK%2Fp4ysCa7zBwQDvXGgnx2bDmd1%2F2qU8PxQnJLpV6ncftITbbCmzwQJqdxA9a4Oe56D9Drcb9zcLNEPavPbiLQaGT1d1ANXAbn&X-Amz-Signature=deb13e1298b44d74ca9eeccfe5c28e11fb447d2d127278ab5eacf139a514ce99&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIRTLE4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVqiGdNY5gSTS0FHKh8seUJeRvBISq2Ys0lcf0xpBH7AIgC8ZRklxMy61UPdQyHrBNyTLykNq0ZE1PfSUe7pIlKLQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfORX42CKbBkUvOZircA5vipE7QSUVjx9H9VU9EG77LGZpQo1ZStufDIIUJHwXotECwhJIr660LFM34d%2BILrZ4zgZVmjKhTPyOxYEIZTkvCficgdaiJeu%2FUIhGMAjkhAP0ALG2oG50KSsQxk%2BglO2SK1FwVfgchHtWlIEEphABqhohnIxDps%2FhbcreT1rFmv1jHtO3ysP4ouHc%2B9L6KwYjNQDkDt0s4Pz67wkpHZgiblCdPK5v1YFNjiQQ2esQoRC5nPqhLQrSyYkVngOgImgBs9BJGipdg24qFD52zqOjp7jLzSkTNGk2pAqUpNBNbq7U7eqsLvoxgpulnx9Ib1yq0lGnS3lDBEOXajgNbrxnEq%2FxNFFJEwCVsfoMmsBrqMFZjyGajmcFRkNR0N4IDvH2zavvG50fSZ4l3ui0dNai3oRvHxgFeYCQnJsNy7sTSLI64IsIgmAWiohGbN73KfMsEV3b6f3C57cqhQVrXEwhgWHQaS%2FOk%2F8O1s%2FHQ0tNZJtJKcY%2F0s9fVLU7Ay4ZLU8ldgO4jP986uWAQA%2BhqFNSEwX6Uwir2ksQX6uRXwZ0PG4XLAsSy9exMldSV0Yz%2F3Mx2tDfvvCf3fWQk6%2BpqLGBZp7Gq%2BPyII4rPhnCBXH85PqRs2lrkJecWTCvFMMK2%2FL4GOqUBc3GXH9ND9H1PqgRM53v0tL0YneqSwUkgkhH%2BflIccWzZ0jyMPRluBUb7K9HAA9szw1uz7y274B85oAtTcVSYt5ZOtngtksJsL9Q7pkF5xXJEHU6geZk%2F%2BYbSp0WK%2Fp4ysCa7zBwQDvXGgnx2bDmd1%2F2qU8PxQnJLpV6ncftITbbCmzwQJqdxA9a4Oe56D9Drcb9zcLNEPavPbiLQaGT1d1ANXAbn&X-Amz-Signature=1b73e282a38e02f8d712f6e7eeef46fdba21890bf9e2b27ad22af740b5c72056&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIRTLE4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVqiGdNY5gSTS0FHKh8seUJeRvBISq2Ys0lcf0xpBH7AIgC8ZRklxMy61UPdQyHrBNyTLykNq0ZE1PfSUe7pIlKLQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfORX42CKbBkUvOZircA5vipE7QSUVjx9H9VU9EG77LGZpQo1ZStufDIIUJHwXotECwhJIr660LFM34d%2BILrZ4zgZVmjKhTPyOxYEIZTkvCficgdaiJeu%2FUIhGMAjkhAP0ALG2oG50KSsQxk%2BglO2SK1FwVfgchHtWlIEEphABqhohnIxDps%2FhbcreT1rFmv1jHtO3ysP4ouHc%2B9L6KwYjNQDkDt0s4Pz67wkpHZgiblCdPK5v1YFNjiQQ2esQoRC5nPqhLQrSyYkVngOgImgBs9BJGipdg24qFD52zqOjp7jLzSkTNGk2pAqUpNBNbq7U7eqsLvoxgpulnx9Ib1yq0lGnS3lDBEOXajgNbrxnEq%2FxNFFJEwCVsfoMmsBrqMFZjyGajmcFRkNR0N4IDvH2zavvG50fSZ4l3ui0dNai3oRvHxgFeYCQnJsNy7sTSLI64IsIgmAWiohGbN73KfMsEV3b6f3C57cqhQVrXEwhgWHQaS%2FOk%2F8O1s%2FHQ0tNZJtJKcY%2F0s9fVLU7Ay4ZLU8ldgO4jP986uWAQA%2BhqFNSEwX6Uwir2ksQX6uRXwZ0PG4XLAsSy9exMldSV0Yz%2F3Mx2tDfvvCf3fWQk6%2BpqLGBZp7Gq%2BPyII4rPhnCBXH85PqRs2lrkJecWTCvFMMK2%2FL4GOqUBc3GXH9ND9H1PqgRM53v0tL0YneqSwUkgkhH%2BflIccWzZ0jyMPRluBUb7K9HAA9szw1uz7y274B85oAtTcVSYt5ZOtngtksJsL9Q7pkF5xXJEHU6geZk%2F%2BYbSp0WK%2Fp4ysCa7zBwQDvXGgnx2bDmd1%2F2qU8PxQnJLpV6ncftITbbCmzwQJqdxA9a4Oe56D9Drcb9zcLNEPavPbiLQaGT1d1ANXAbn&X-Amz-Signature=ad296b880703938041aae6218655b65d189d58fd1c357cb176e8cb8d8a372491&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIRTLE4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVqiGdNY5gSTS0FHKh8seUJeRvBISq2Ys0lcf0xpBH7AIgC8ZRklxMy61UPdQyHrBNyTLykNq0ZE1PfSUe7pIlKLQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfORX42CKbBkUvOZircA5vipE7QSUVjx9H9VU9EG77LGZpQo1ZStufDIIUJHwXotECwhJIr660LFM34d%2BILrZ4zgZVmjKhTPyOxYEIZTkvCficgdaiJeu%2FUIhGMAjkhAP0ALG2oG50KSsQxk%2BglO2SK1FwVfgchHtWlIEEphABqhohnIxDps%2FhbcreT1rFmv1jHtO3ysP4ouHc%2B9L6KwYjNQDkDt0s4Pz67wkpHZgiblCdPK5v1YFNjiQQ2esQoRC5nPqhLQrSyYkVngOgImgBs9BJGipdg24qFD52zqOjp7jLzSkTNGk2pAqUpNBNbq7U7eqsLvoxgpulnx9Ib1yq0lGnS3lDBEOXajgNbrxnEq%2FxNFFJEwCVsfoMmsBrqMFZjyGajmcFRkNR0N4IDvH2zavvG50fSZ4l3ui0dNai3oRvHxgFeYCQnJsNy7sTSLI64IsIgmAWiohGbN73KfMsEV3b6f3C57cqhQVrXEwhgWHQaS%2FOk%2F8O1s%2FHQ0tNZJtJKcY%2F0s9fVLU7Ay4ZLU8ldgO4jP986uWAQA%2BhqFNSEwX6Uwir2ksQX6uRXwZ0PG4XLAsSy9exMldSV0Yz%2F3Mx2tDfvvCf3fWQk6%2BpqLGBZp7Gq%2BPyII4rPhnCBXH85PqRs2lrkJecWTCvFMMK2%2FL4GOqUBc3GXH9ND9H1PqgRM53v0tL0YneqSwUkgkhH%2BflIccWzZ0jyMPRluBUb7K9HAA9szw1uz7y274B85oAtTcVSYt5ZOtngtksJsL9Q7pkF5xXJEHU6geZk%2F%2BYbSp0WK%2Fp4ysCa7zBwQDvXGgnx2bDmd1%2F2qU8PxQnJLpV6ncftITbbCmzwQJqdxA9a4Oe56D9Drcb9zcLNEPavPbiLQaGT1d1ANXAbn&X-Amz-Signature=6720c91208e5785613ad9eedbcfc2ab75d24167e804763c6f45ab9a77daa8072&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIRTLE4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVqiGdNY5gSTS0FHKh8seUJeRvBISq2Ys0lcf0xpBH7AIgC8ZRklxMy61UPdQyHrBNyTLykNq0ZE1PfSUe7pIlKLQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfORX42CKbBkUvOZircA5vipE7QSUVjx9H9VU9EG77LGZpQo1ZStufDIIUJHwXotECwhJIr660LFM34d%2BILrZ4zgZVmjKhTPyOxYEIZTkvCficgdaiJeu%2FUIhGMAjkhAP0ALG2oG50KSsQxk%2BglO2SK1FwVfgchHtWlIEEphABqhohnIxDps%2FhbcreT1rFmv1jHtO3ysP4ouHc%2B9L6KwYjNQDkDt0s4Pz67wkpHZgiblCdPK5v1YFNjiQQ2esQoRC5nPqhLQrSyYkVngOgImgBs9BJGipdg24qFD52zqOjp7jLzSkTNGk2pAqUpNBNbq7U7eqsLvoxgpulnx9Ib1yq0lGnS3lDBEOXajgNbrxnEq%2FxNFFJEwCVsfoMmsBrqMFZjyGajmcFRkNR0N4IDvH2zavvG50fSZ4l3ui0dNai3oRvHxgFeYCQnJsNy7sTSLI64IsIgmAWiohGbN73KfMsEV3b6f3C57cqhQVrXEwhgWHQaS%2FOk%2F8O1s%2FHQ0tNZJtJKcY%2F0s9fVLU7Ay4ZLU8ldgO4jP986uWAQA%2BhqFNSEwX6Uwir2ksQX6uRXwZ0PG4XLAsSy9exMldSV0Yz%2F3Mx2tDfvvCf3fWQk6%2BpqLGBZp7Gq%2BPyII4rPhnCBXH85PqRs2lrkJecWTCvFMMK2%2FL4GOqUBc3GXH9ND9H1PqgRM53v0tL0YneqSwUkgkhH%2BflIccWzZ0jyMPRluBUb7K9HAA9szw1uz7y274B85oAtTcVSYt5ZOtngtksJsL9Q7pkF5xXJEHU6geZk%2F%2BYbSp0WK%2Fp4ysCa7zBwQDvXGgnx2bDmd1%2F2qU8PxQnJLpV6ncftITbbCmzwQJqdxA9a4Oe56D9Drcb9zcLNEPavPbiLQaGT1d1ANXAbn&X-Amz-Signature=a29fdd53c75836d2d1bab7267698029c79e31f530ff817d056bff632a95a3545&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIRTLE4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVqiGdNY5gSTS0FHKh8seUJeRvBISq2Ys0lcf0xpBH7AIgC8ZRklxMy61UPdQyHrBNyTLykNq0ZE1PfSUe7pIlKLQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfORX42CKbBkUvOZircA5vipE7QSUVjx9H9VU9EG77LGZpQo1ZStufDIIUJHwXotECwhJIr660LFM34d%2BILrZ4zgZVmjKhTPyOxYEIZTkvCficgdaiJeu%2FUIhGMAjkhAP0ALG2oG50KSsQxk%2BglO2SK1FwVfgchHtWlIEEphABqhohnIxDps%2FhbcreT1rFmv1jHtO3ysP4ouHc%2B9L6KwYjNQDkDt0s4Pz67wkpHZgiblCdPK5v1YFNjiQQ2esQoRC5nPqhLQrSyYkVngOgImgBs9BJGipdg24qFD52zqOjp7jLzSkTNGk2pAqUpNBNbq7U7eqsLvoxgpulnx9Ib1yq0lGnS3lDBEOXajgNbrxnEq%2FxNFFJEwCVsfoMmsBrqMFZjyGajmcFRkNR0N4IDvH2zavvG50fSZ4l3ui0dNai3oRvHxgFeYCQnJsNy7sTSLI64IsIgmAWiohGbN73KfMsEV3b6f3C57cqhQVrXEwhgWHQaS%2FOk%2F8O1s%2FHQ0tNZJtJKcY%2F0s9fVLU7Ay4ZLU8ldgO4jP986uWAQA%2BhqFNSEwX6Uwir2ksQX6uRXwZ0PG4XLAsSy9exMldSV0Yz%2F3Mx2tDfvvCf3fWQk6%2BpqLGBZp7Gq%2BPyII4rPhnCBXH85PqRs2lrkJecWTCvFMMK2%2FL4GOqUBc3GXH9ND9H1PqgRM53v0tL0YneqSwUkgkhH%2BflIccWzZ0jyMPRluBUb7K9HAA9szw1uz7y274B85oAtTcVSYt5ZOtngtksJsL9Q7pkF5xXJEHU6geZk%2F%2BYbSp0WK%2Fp4ysCa7zBwQDvXGgnx2bDmd1%2F2qU8PxQnJLpV6ncftITbbCmzwQJqdxA9a4Oe56D9Drcb9zcLNEPavPbiLQaGT1d1ANXAbn&X-Amz-Signature=3435fd17559d7a93c82eacaa8f98267e07e950c30aa4661ee509a73c7d90aa8d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
