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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTB25YL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDtOIX4VEk0Nvz4tVpzXis4L0vh5wk5hwYRTWJAOcUlqQIgO0fY6bvu4SZ2urDqd%2FyrL9hLtPUZrrrnLWGipDbHgxcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEhLjp79juYk%2FXZXgyrcA%2Bn8cLbzXvh%2BYUXil%2FL3wMvL%2FugXeoncycnn1rG0WaP86mjx%2FgMXNStxyBVVo4EhunGycd5xWByCSqiJUyajfCuRUuHQ7y180AHPNOoenXJQchI2QztfZq%2FX0UKXdJB2qKg5fk6tHYQvFmfJcXaSJyUAt9GF%2FUzG9dKyQEPHrQMM9W%2FQJiLotnad%2BGLVjke8HfdsnAQMK94QoarMSXzARVPBW4VMAr3ahLSOaD%2Fdddr2tLmxLf%2BjqhoeodwenyUDs3cGLXSXQJgWdACZxJjWBPm9tCkB1TP2GTFTLpRvC0KJJR0z3%2BIiFHSk4Z3gGa%2FdNAFDmWDkLh92PFqkaURMSbnKW%2F7ZB6pK8hK7GaavUUgXugOEkyrCdMyV26j0OMlpDfP0h0I%2B1%2Bbv9PsS9fovokHyRcGerv6O8M7RgvHTFrKu1e2qYDEoIl9ReWtnsCGzROQNe3c1PhhtO88bkvx%2BQasmcr20sThazAoYahnmplw2Byi%2BOQv%2FOUm9JUUx9P6fiQICPRGiZTxV2kwXK84T1DlagvmllMHLgJogSLTnrNw%2FxlxYZhTukmJpOP5CiMB38nIgz0haQOlauRnXiZfNo6shuVdibcj6yxuo1n9Nao4nX9JjKiAa5KIawnZGMJD4gMUGOqUBvSu3FmjDZkT0ch9cumVGCt%2F5E2y5vJLmxqE8I%2F%2B2pjrPwrtORCfHNR2aA5P8ekW4mJ9pptM0UGCPij6XS98ZhdLRhSPDNvPLBN%2FGqyxu%2Fi5GuVrAj2PM%2B7YsGtgAjWC3ClvNLwXyQKZAAA5iIb6pcjT21QCE4i4nfAvztY544ohtTyFiOnMNTPExpDW77tZoaHnbDc3XGlzGSDS7vM%2BqkDySccTh&X-Amz-Signature=e5c6e811e96545b73e2d1bf0f5d19c02fbc5bc3e654f397c431b622baec55264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTB25YL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDtOIX4VEk0Nvz4tVpzXis4L0vh5wk5hwYRTWJAOcUlqQIgO0fY6bvu4SZ2urDqd%2FyrL9hLtPUZrrrnLWGipDbHgxcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEhLjp79juYk%2FXZXgyrcA%2Bn8cLbzXvh%2BYUXil%2FL3wMvL%2FugXeoncycnn1rG0WaP86mjx%2FgMXNStxyBVVo4EhunGycd5xWByCSqiJUyajfCuRUuHQ7y180AHPNOoenXJQchI2QztfZq%2FX0UKXdJB2qKg5fk6tHYQvFmfJcXaSJyUAt9GF%2FUzG9dKyQEPHrQMM9W%2FQJiLotnad%2BGLVjke8HfdsnAQMK94QoarMSXzARVPBW4VMAr3ahLSOaD%2Fdddr2tLmxLf%2BjqhoeodwenyUDs3cGLXSXQJgWdACZxJjWBPm9tCkB1TP2GTFTLpRvC0KJJR0z3%2BIiFHSk4Z3gGa%2FdNAFDmWDkLh92PFqkaURMSbnKW%2F7ZB6pK8hK7GaavUUgXugOEkyrCdMyV26j0OMlpDfP0h0I%2B1%2Bbv9PsS9fovokHyRcGerv6O8M7RgvHTFrKu1e2qYDEoIl9ReWtnsCGzROQNe3c1PhhtO88bkvx%2BQasmcr20sThazAoYahnmplw2Byi%2BOQv%2FOUm9JUUx9P6fiQICPRGiZTxV2kwXK84T1DlagvmllMHLgJogSLTnrNw%2FxlxYZhTukmJpOP5CiMB38nIgz0haQOlauRnXiZfNo6shuVdibcj6yxuo1n9Nao4nX9JjKiAa5KIawnZGMJD4gMUGOqUBvSu3FmjDZkT0ch9cumVGCt%2F5E2y5vJLmxqE8I%2F%2B2pjrPwrtORCfHNR2aA5P8ekW4mJ9pptM0UGCPij6XS98ZhdLRhSPDNvPLBN%2FGqyxu%2Fi5GuVrAj2PM%2B7YsGtgAjWC3ClvNLwXyQKZAAA5iIb6pcjT21QCE4i4nfAvztY544ohtTyFiOnMNTPExpDW77tZoaHnbDc3XGlzGSDS7vM%2BqkDySccTh&X-Amz-Signature=10438336eb37ba0fd7ab17220627d32306fc2f93b4e0e177692a07f74f445579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTB25YL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDtOIX4VEk0Nvz4tVpzXis4L0vh5wk5hwYRTWJAOcUlqQIgO0fY6bvu4SZ2urDqd%2FyrL9hLtPUZrrrnLWGipDbHgxcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEhLjp79juYk%2FXZXgyrcA%2Bn8cLbzXvh%2BYUXil%2FL3wMvL%2FugXeoncycnn1rG0WaP86mjx%2FgMXNStxyBVVo4EhunGycd5xWByCSqiJUyajfCuRUuHQ7y180AHPNOoenXJQchI2QztfZq%2FX0UKXdJB2qKg5fk6tHYQvFmfJcXaSJyUAt9GF%2FUzG9dKyQEPHrQMM9W%2FQJiLotnad%2BGLVjke8HfdsnAQMK94QoarMSXzARVPBW4VMAr3ahLSOaD%2Fdddr2tLmxLf%2BjqhoeodwenyUDs3cGLXSXQJgWdACZxJjWBPm9tCkB1TP2GTFTLpRvC0KJJR0z3%2BIiFHSk4Z3gGa%2FdNAFDmWDkLh92PFqkaURMSbnKW%2F7ZB6pK8hK7GaavUUgXugOEkyrCdMyV26j0OMlpDfP0h0I%2B1%2Bbv9PsS9fovokHyRcGerv6O8M7RgvHTFrKu1e2qYDEoIl9ReWtnsCGzROQNe3c1PhhtO88bkvx%2BQasmcr20sThazAoYahnmplw2Byi%2BOQv%2FOUm9JUUx9P6fiQICPRGiZTxV2kwXK84T1DlagvmllMHLgJogSLTnrNw%2FxlxYZhTukmJpOP5CiMB38nIgz0haQOlauRnXiZfNo6shuVdibcj6yxuo1n9Nao4nX9JjKiAa5KIawnZGMJD4gMUGOqUBvSu3FmjDZkT0ch9cumVGCt%2F5E2y5vJLmxqE8I%2F%2B2pjrPwrtORCfHNR2aA5P8ekW4mJ9pptM0UGCPij6XS98ZhdLRhSPDNvPLBN%2FGqyxu%2Fi5GuVrAj2PM%2B7YsGtgAjWC3ClvNLwXyQKZAAA5iIb6pcjT21QCE4i4nfAvztY544ohtTyFiOnMNTPExpDW77tZoaHnbDc3XGlzGSDS7vM%2BqkDySccTh&X-Amz-Signature=9f956f9dd0e5259657a8a16e1ec504ab980e7585973ddacf3db67dd745de2585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTB25YL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDtOIX4VEk0Nvz4tVpzXis4L0vh5wk5hwYRTWJAOcUlqQIgO0fY6bvu4SZ2urDqd%2FyrL9hLtPUZrrrnLWGipDbHgxcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEhLjp79juYk%2FXZXgyrcA%2Bn8cLbzXvh%2BYUXil%2FL3wMvL%2FugXeoncycnn1rG0WaP86mjx%2FgMXNStxyBVVo4EhunGycd5xWByCSqiJUyajfCuRUuHQ7y180AHPNOoenXJQchI2QztfZq%2FX0UKXdJB2qKg5fk6tHYQvFmfJcXaSJyUAt9GF%2FUzG9dKyQEPHrQMM9W%2FQJiLotnad%2BGLVjke8HfdsnAQMK94QoarMSXzARVPBW4VMAr3ahLSOaD%2Fdddr2tLmxLf%2BjqhoeodwenyUDs3cGLXSXQJgWdACZxJjWBPm9tCkB1TP2GTFTLpRvC0KJJR0z3%2BIiFHSk4Z3gGa%2FdNAFDmWDkLh92PFqkaURMSbnKW%2F7ZB6pK8hK7GaavUUgXugOEkyrCdMyV26j0OMlpDfP0h0I%2B1%2Bbv9PsS9fovokHyRcGerv6O8M7RgvHTFrKu1e2qYDEoIl9ReWtnsCGzROQNe3c1PhhtO88bkvx%2BQasmcr20sThazAoYahnmplw2Byi%2BOQv%2FOUm9JUUx9P6fiQICPRGiZTxV2kwXK84T1DlagvmllMHLgJogSLTnrNw%2FxlxYZhTukmJpOP5CiMB38nIgz0haQOlauRnXiZfNo6shuVdibcj6yxuo1n9Nao4nX9JjKiAa5KIawnZGMJD4gMUGOqUBvSu3FmjDZkT0ch9cumVGCt%2F5E2y5vJLmxqE8I%2F%2B2pjrPwrtORCfHNR2aA5P8ekW4mJ9pptM0UGCPij6XS98ZhdLRhSPDNvPLBN%2FGqyxu%2Fi5GuVrAj2PM%2B7YsGtgAjWC3ClvNLwXyQKZAAA5iIb6pcjT21QCE4i4nfAvztY544ohtTyFiOnMNTPExpDW77tZoaHnbDc3XGlzGSDS7vM%2BqkDySccTh&X-Amz-Signature=7fdbb5f0687918eeb1cebed9c7fd3edf1007041c7a9581e42ce841df772f9db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTB25YL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDtOIX4VEk0Nvz4tVpzXis4L0vh5wk5hwYRTWJAOcUlqQIgO0fY6bvu4SZ2urDqd%2FyrL9hLtPUZrrrnLWGipDbHgxcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEhLjp79juYk%2FXZXgyrcA%2Bn8cLbzXvh%2BYUXil%2FL3wMvL%2FugXeoncycnn1rG0WaP86mjx%2FgMXNStxyBVVo4EhunGycd5xWByCSqiJUyajfCuRUuHQ7y180AHPNOoenXJQchI2QztfZq%2FX0UKXdJB2qKg5fk6tHYQvFmfJcXaSJyUAt9GF%2FUzG9dKyQEPHrQMM9W%2FQJiLotnad%2BGLVjke8HfdsnAQMK94QoarMSXzARVPBW4VMAr3ahLSOaD%2Fdddr2tLmxLf%2BjqhoeodwenyUDs3cGLXSXQJgWdACZxJjWBPm9tCkB1TP2GTFTLpRvC0KJJR0z3%2BIiFHSk4Z3gGa%2FdNAFDmWDkLh92PFqkaURMSbnKW%2F7ZB6pK8hK7GaavUUgXugOEkyrCdMyV26j0OMlpDfP0h0I%2B1%2Bbv9PsS9fovokHyRcGerv6O8M7RgvHTFrKu1e2qYDEoIl9ReWtnsCGzROQNe3c1PhhtO88bkvx%2BQasmcr20sThazAoYahnmplw2Byi%2BOQv%2FOUm9JUUx9P6fiQICPRGiZTxV2kwXK84T1DlagvmllMHLgJogSLTnrNw%2FxlxYZhTukmJpOP5CiMB38nIgz0haQOlauRnXiZfNo6shuVdibcj6yxuo1n9Nao4nX9JjKiAa5KIawnZGMJD4gMUGOqUBvSu3FmjDZkT0ch9cumVGCt%2F5E2y5vJLmxqE8I%2F%2B2pjrPwrtORCfHNR2aA5P8ekW4mJ9pptM0UGCPij6XS98ZhdLRhSPDNvPLBN%2FGqyxu%2Fi5GuVrAj2PM%2B7YsGtgAjWC3ClvNLwXyQKZAAA5iIb6pcjT21QCE4i4nfAvztY544ohtTyFiOnMNTPExpDW77tZoaHnbDc3XGlzGSDS7vM%2BqkDySccTh&X-Amz-Signature=f3bbcd7e8797ba9acef92905078295d38b79366e200ba86d80d614f07a3fed7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTB25YL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDtOIX4VEk0Nvz4tVpzXis4L0vh5wk5hwYRTWJAOcUlqQIgO0fY6bvu4SZ2urDqd%2FyrL9hLtPUZrrrnLWGipDbHgxcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEhLjp79juYk%2FXZXgyrcA%2Bn8cLbzXvh%2BYUXil%2FL3wMvL%2FugXeoncycnn1rG0WaP86mjx%2FgMXNStxyBVVo4EhunGycd5xWByCSqiJUyajfCuRUuHQ7y180AHPNOoenXJQchI2QztfZq%2FX0UKXdJB2qKg5fk6tHYQvFmfJcXaSJyUAt9GF%2FUzG9dKyQEPHrQMM9W%2FQJiLotnad%2BGLVjke8HfdsnAQMK94QoarMSXzARVPBW4VMAr3ahLSOaD%2Fdddr2tLmxLf%2BjqhoeodwenyUDs3cGLXSXQJgWdACZxJjWBPm9tCkB1TP2GTFTLpRvC0KJJR0z3%2BIiFHSk4Z3gGa%2FdNAFDmWDkLh92PFqkaURMSbnKW%2F7ZB6pK8hK7GaavUUgXugOEkyrCdMyV26j0OMlpDfP0h0I%2B1%2Bbv9PsS9fovokHyRcGerv6O8M7RgvHTFrKu1e2qYDEoIl9ReWtnsCGzROQNe3c1PhhtO88bkvx%2BQasmcr20sThazAoYahnmplw2Byi%2BOQv%2FOUm9JUUx9P6fiQICPRGiZTxV2kwXK84T1DlagvmllMHLgJogSLTnrNw%2FxlxYZhTukmJpOP5CiMB38nIgz0haQOlauRnXiZfNo6shuVdibcj6yxuo1n9Nao4nX9JjKiAa5KIawnZGMJD4gMUGOqUBvSu3FmjDZkT0ch9cumVGCt%2F5E2y5vJLmxqE8I%2F%2B2pjrPwrtORCfHNR2aA5P8ekW4mJ9pptM0UGCPij6XS98ZhdLRhSPDNvPLBN%2FGqyxu%2Fi5GuVrAj2PM%2B7YsGtgAjWC3ClvNLwXyQKZAAA5iIb6pcjT21QCE4i4nfAvztY544ohtTyFiOnMNTPExpDW77tZoaHnbDc3XGlzGSDS7vM%2BqkDySccTh&X-Amz-Signature=097cc984faf8e7d60868f8b4397cd04ee58efbc57f389a73860d3e46a3b29104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTB25YL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDtOIX4VEk0Nvz4tVpzXis4L0vh5wk5hwYRTWJAOcUlqQIgO0fY6bvu4SZ2urDqd%2FyrL9hLtPUZrrrnLWGipDbHgxcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEhLjp79juYk%2FXZXgyrcA%2Bn8cLbzXvh%2BYUXil%2FL3wMvL%2FugXeoncycnn1rG0WaP86mjx%2FgMXNStxyBVVo4EhunGycd5xWByCSqiJUyajfCuRUuHQ7y180AHPNOoenXJQchI2QztfZq%2FX0UKXdJB2qKg5fk6tHYQvFmfJcXaSJyUAt9GF%2FUzG9dKyQEPHrQMM9W%2FQJiLotnad%2BGLVjke8HfdsnAQMK94QoarMSXzARVPBW4VMAr3ahLSOaD%2Fdddr2tLmxLf%2BjqhoeodwenyUDs3cGLXSXQJgWdACZxJjWBPm9tCkB1TP2GTFTLpRvC0KJJR0z3%2BIiFHSk4Z3gGa%2FdNAFDmWDkLh92PFqkaURMSbnKW%2F7ZB6pK8hK7GaavUUgXugOEkyrCdMyV26j0OMlpDfP0h0I%2B1%2Bbv9PsS9fovokHyRcGerv6O8M7RgvHTFrKu1e2qYDEoIl9ReWtnsCGzROQNe3c1PhhtO88bkvx%2BQasmcr20sThazAoYahnmplw2Byi%2BOQv%2FOUm9JUUx9P6fiQICPRGiZTxV2kwXK84T1DlagvmllMHLgJogSLTnrNw%2FxlxYZhTukmJpOP5CiMB38nIgz0haQOlauRnXiZfNo6shuVdibcj6yxuo1n9Nao4nX9JjKiAa5KIawnZGMJD4gMUGOqUBvSu3FmjDZkT0ch9cumVGCt%2F5E2y5vJLmxqE8I%2F%2B2pjrPwrtORCfHNR2aA5P8ekW4mJ9pptM0UGCPij6XS98ZhdLRhSPDNvPLBN%2FGqyxu%2Fi5GuVrAj2PM%2B7YsGtgAjWC3ClvNLwXyQKZAAA5iIb6pcjT21QCE4i4nfAvztY544ohtTyFiOnMNTPExpDW77tZoaHnbDc3XGlzGSDS7vM%2BqkDySccTh&X-Amz-Signature=5858bb96e2aefb55a63dcfe7ec74b8d680631d06f4c4dac9f1eaaaaea34b853a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
