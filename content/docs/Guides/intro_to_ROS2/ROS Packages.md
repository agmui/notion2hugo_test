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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK7K64W%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuSO%2BrJKmm0VoR3mmKqh6yzaRy3S0jbgtdpGqtHV5fXQIhAPVsjqh%2BOldYV6HePQPpG8XTZeGBhU9Ts9Om3GLurwK4KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA5Jo55acUveSFAp4q3AOHEvjSmWhD%2BLXDWviUJWshpCfjh0hjoCSQRbU%2FmzBOeeI2qtoExS9NcVuc%2BReDTk0%2FW61FkC77a1PQCpTmBTL14EzMzJwVuxAwJ3E9EMChzgi4iDCuLRiZTVk%2BJKNkrBg4X9bjEHrKEXRHb0T8Ozbj38nRhdKdfYevOkk%2BfHrhNjl%2FDPXz0aGLjqAVw2pCO9QyfvHuUb2Z1ty6O49fE85FXpTQvP%2BvbUHR5eh3zizvRdo%2FWWM%2B98McEK8btpfROI3jTSM3d83MFuosAeOwT%2BP10pJgDMKJvv%2FWj%2F8t3yGgCoqfVmQUzvDl8Plwa15vyf7trx8xQhW96CSpAYLfTndt9kie57XtDlrWOrTpoZnAvJgIm5wNlirE2YWtSJbep%2BSTGKRLAGpcgM3lowdR0%2BQAqbkiMgtyNS7G5k20H%2BwqMSuqtGOIWd%2BKGTcFMtKtexHUaVfny6eDiSG16GjFdQuzlepiXyvlbVGO2pnFQi1cQC8%2BuXWy6jqVC5QgZOO9v%2FoV7i2fMgdycrlw5J1MBSoYK0CepY%2FRnhyi6bu%2F93DoJhbOghQttQYg5u%2B4RCnyK7jdjeuSZ4oeHzexEpx5PkooMCTN7y8MCdZh0krpVk6pdQPMAI%2B9%2FxbYCSxqjTCw367BBjqkAc26RgpgzrPu6Z15gUcm%2FA9OzLk1a%2F9awOn6JRrKE3Kdsa%2Bioi6pbvfukX5tQkesN901VfqiNW1GLtsZzTA3CmoAv8RyTPCio6vfo7rfl40Irx5vAImJz9rfzADkMh8fSovm3guKDY09vSJPx4%2BomtYQ2OqkL1yE0JhW53DzepdJGNvpn08WkrwWjtt0OOTcgffqeh6vNEGhcxYtLFO40j5j4qsx&X-Amz-Signature=a1596acdbc8f998eb716d8804fbf52c07da457fa7648ec88d94be46c43eb7caa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK7K64W%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuSO%2BrJKmm0VoR3mmKqh6yzaRy3S0jbgtdpGqtHV5fXQIhAPVsjqh%2BOldYV6HePQPpG8XTZeGBhU9Ts9Om3GLurwK4KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA5Jo55acUveSFAp4q3AOHEvjSmWhD%2BLXDWviUJWshpCfjh0hjoCSQRbU%2FmzBOeeI2qtoExS9NcVuc%2BReDTk0%2FW61FkC77a1PQCpTmBTL14EzMzJwVuxAwJ3E9EMChzgi4iDCuLRiZTVk%2BJKNkrBg4X9bjEHrKEXRHb0T8Ozbj38nRhdKdfYevOkk%2BfHrhNjl%2FDPXz0aGLjqAVw2pCO9QyfvHuUb2Z1ty6O49fE85FXpTQvP%2BvbUHR5eh3zizvRdo%2FWWM%2B98McEK8btpfROI3jTSM3d83MFuosAeOwT%2BP10pJgDMKJvv%2FWj%2F8t3yGgCoqfVmQUzvDl8Plwa15vyf7trx8xQhW96CSpAYLfTndt9kie57XtDlrWOrTpoZnAvJgIm5wNlirE2YWtSJbep%2BSTGKRLAGpcgM3lowdR0%2BQAqbkiMgtyNS7G5k20H%2BwqMSuqtGOIWd%2BKGTcFMtKtexHUaVfny6eDiSG16GjFdQuzlepiXyvlbVGO2pnFQi1cQC8%2BuXWy6jqVC5QgZOO9v%2FoV7i2fMgdycrlw5J1MBSoYK0CepY%2FRnhyi6bu%2F93DoJhbOghQttQYg5u%2B4RCnyK7jdjeuSZ4oeHzexEpx5PkooMCTN7y8MCdZh0krpVk6pdQPMAI%2B9%2FxbYCSxqjTCw367BBjqkAc26RgpgzrPu6Z15gUcm%2FA9OzLk1a%2F9awOn6JRrKE3Kdsa%2Bioi6pbvfukX5tQkesN901VfqiNW1GLtsZzTA3CmoAv8RyTPCio6vfo7rfl40Irx5vAImJz9rfzADkMh8fSovm3guKDY09vSJPx4%2BomtYQ2OqkL1yE0JhW53DzepdJGNvpn08WkrwWjtt0OOTcgffqeh6vNEGhcxYtLFO40j5j4qsx&X-Amz-Signature=8a6dad60d7da063d4edf50aae331dd78ee776e58d9e003735178dfeb6f0396e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK7K64W%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuSO%2BrJKmm0VoR3mmKqh6yzaRy3S0jbgtdpGqtHV5fXQIhAPVsjqh%2BOldYV6HePQPpG8XTZeGBhU9Ts9Om3GLurwK4KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA5Jo55acUveSFAp4q3AOHEvjSmWhD%2BLXDWviUJWshpCfjh0hjoCSQRbU%2FmzBOeeI2qtoExS9NcVuc%2BReDTk0%2FW61FkC77a1PQCpTmBTL14EzMzJwVuxAwJ3E9EMChzgi4iDCuLRiZTVk%2BJKNkrBg4X9bjEHrKEXRHb0T8Ozbj38nRhdKdfYevOkk%2BfHrhNjl%2FDPXz0aGLjqAVw2pCO9QyfvHuUb2Z1ty6O49fE85FXpTQvP%2BvbUHR5eh3zizvRdo%2FWWM%2B98McEK8btpfROI3jTSM3d83MFuosAeOwT%2BP10pJgDMKJvv%2FWj%2F8t3yGgCoqfVmQUzvDl8Plwa15vyf7trx8xQhW96CSpAYLfTndt9kie57XtDlrWOrTpoZnAvJgIm5wNlirE2YWtSJbep%2BSTGKRLAGpcgM3lowdR0%2BQAqbkiMgtyNS7G5k20H%2BwqMSuqtGOIWd%2BKGTcFMtKtexHUaVfny6eDiSG16GjFdQuzlepiXyvlbVGO2pnFQi1cQC8%2BuXWy6jqVC5QgZOO9v%2FoV7i2fMgdycrlw5J1MBSoYK0CepY%2FRnhyi6bu%2F93DoJhbOghQttQYg5u%2B4RCnyK7jdjeuSZ4oeHzexEpx5PkooMCTN7y8MCdZh0krpVk6pdQPMAI%2B9%2FxbYCSxqjTCw367BBjqkAc26RgpgzrPu6Z15gUcm%2FA9OzLk1a%2F9awOn6JRrKE3Kdsa%2Bioi6pbvfukX5tQkesN901VfqiNW1GLtsZzTA3CmoAv8RyTPCio6vfo7rfl40Irx5vAImJz9rfzADkMh8fSovm3guKDY09vSJPx4%2BomtYQ2OqkL1yE0JhW53DzepdJGNvpn08WkrwWjtt0OOTcgffqeh6vNEGhcxYtLFO40j5j4qsx&X-Amz-Signature=4697cbb00e35e61f45fa430fd0afafe4e69c861d184ea3fbc3c1741bf2794876&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK7K64W%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuSO%2BrJKmm0VoR3mmKqh6yzaRy3S0jbgtdpGqtHV5fXQIhAPVsjqh%2BOldYV6HePQPpG8XTZeGBhU9Ts9Om3GLurwK4KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA5Jo55acUveSFAp4q3AOHEvjSmWhD%2BLXDWviUJWshpCfjh0hjoCSQRbU%2FmzBOeeI2qtoExS9NcVuc%2BReDTk0%2FW61FkC77a1PQCpTmBTL14EzMzJwVuxAwJ3E9EMChzgi4iDCuLRiZTVk%2BJKNkrBg4X9bjEHrKEXRHb0T8Ozbj38nRhdKdfYevOkk%2BfHrhNjl%2FDPXz0aGLjqAVw2pCO9QyfvHuUb2Z1ty6O49fE85FXpTQvP%2BvbUHR5eh3zizvRdo%2FWWM%2B98McEK8btpfROI3jTSM3d83MFuosAeOwT%2BP10pJgDMKJvv%2FWj%2F8t3yGgCoqfVmQUzvDl8Plwa15vyf7trx8xQhW96CSpAYLfTndt9kie57XtDlrWOrTpoZnAvJgIm5wNlirE2YWtSJbep%2BSTGKRLAGpcgM3lowdR0%2BQAqbkiMgtyNS7G5k20H%2BwqMSuqtGOIWd%2BKGTcFMtKtexHUaVfny6eDiSG16GjFdQuzlepiXyvlbVGO2pnFQi1cQC8%2BuXWy6jqVC5QgZOO9v%2FoV7i2fMgdycrlw5J1MBSoYK0CepY%2FRnhyi6bu%2F93DoJhbOghQttQYg5u%2B4RCnyK7jdjeuSZ4oeHzexEpx5PkooMCTN7y8MCdZh0krpVk6pdQPMAI%2B9%2FxbYCSxqjTCw367BBjqkAc26RgpgzrPu6Z15gUcm%2FA9OzLk1a%2F9awOn6JRrKE3Kdsa%2Bioi6pbvfukX5tQkesN901VfqiNW1GLtsZzTA3CmoAv8RyTPCio6vfo7rfl40Irx5vAImJz9rfzADkMh8fSovm3guKDY09vSJPx4%2BomtYQ2OqkL1yE0JhW53DzepdJGNvpn08WkrwWjtt0OOTcgffqeh6vNEGhcxYtLFO40j5j4qsx&X-Amz-Signature=b73bd543981632e9d0133514a9ac36724ce8d84b693935c84094466e70403ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK7K64W%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuSO%2BrJKmm0VoR3mmKqh6yzaRy3S0jbgtdpGqtHV5fXQIhAPVsjqh%2BOldYV6HePQPpG8XTZeGBhU9Ts9Om3GLurwK4KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA5Jo55acUveSFAp4q3AOHEvjSmWhD%2BLXDWviUJWshpCfjh0hjoCSQRbU%2FmzBOeeI2qtoExS9NcVuc%2BReDTk0%2FW61FkC77a1PQCpTmBTL14EzMzJwVuxAwJ3E9EMChzgi4iDCuLRiZTVk%2BJKNkrBg4X9bjEHrKEXRHb0T8Ozbj38nRhdKdfYevOkk%2BfHrhNjl%2FDPXz0aGLjqAVw2pCO9QyfvHuUb2Z1ty6O49fE85FXpTQvP%2BvbUHR5eh3zizvRdo%2FWWM%2B98McEK8btpfROI3jTSM3d83MFuosAeOwT%2BP10pJgDMKJvv%2FWj%2F8t3yGgCoqfVmQUzvDl8Plwa15vyf7trx8xQhW96CSpAYLfTndt9kie57XtDlrWOrTpoZnAvJgIm5wNlirE2YWtSJbep%2BSTGKRLAGpcgM3lowdR0%2BQAqbkiMgtyNS7G5k20H%2BwqMSuqtGOIWd%2BKGTcFMtKtexHUaVfny6eDiSG16GjFdQuzlepiXyvlbVGO2pnFQi1cQC8%2BuXWy6jqVC5QgZOO9v%2FoV7i2fMgdycrlw5J1MBSoYK0CepY%2FRnhyi6bu%2F93DoJhbOghQttQYg5u%2B4RCnyK7jdjeuSZ4oeHzexEpx5PkooMCTN7y8MCdZh0krpVk6pdQPMAI%2B9%2FxbYCSxqjTCw367BBjqkAc26RgpgzrPu6Z15gUcm%2FA9OzLk1a%2F9awOn6JRrKE3Kdsa%2Bioi6pbvfukX5tQkesN901VfqiNW1GLtsZzTA3CmoAv8RyTPCio6vfo7rfl40Irx5vAImJz9rfzADkMh8fSovm3guKDY09vSJPx4%2BomtYQ2OqkL1yE0JhW53DzepdJGNvpn08WkrwWjtt0OOTcgffqeh6vNEGhcxYtLFO40j5j4qsx&X-Amz-Signature=9d44cc19ad7012c1befde889eb828d8c4b93fccecce282a66f1d052af48d0eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK7K64W%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuSO%2BrJKmm0VoR3mmKqh6yzaRy3S0jbgtdpGqtHV5fXQIhAPVsjqh%2BOldYV6HePQPpG8XTZeGBhU9Ts9Om3GLurwK4KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA5Jo55acUveSFAp4q3AOHEvjSmWhD%2BLXDWviUJWshpCfjh0hjoCSQRbU%2FmzBOeeI2qtoExS9NcVuc%2BReDTk0%2FW61FkC77a1PQCpTmBTL14EzMzJwVuxAwJ3E9EMChzgi4iDCuLRiZTVk%2BJKNkrBg4X9bjEHrKEXRHb0T8Ozbj38nRhdKdfYevOkk%2BfHrhNjl%2FDPXz0aGLjqAVw2pCO9QyfvHuUb2Z1ty6O49fE85FXpTQvP%2BvbUHR5eh3zizvRdo%2FWWM%2B98McEK8btpfROI3jTSM3d83MFuosAeOwT%2BP10pJgDMKJvv%2FWj%2F8t3yGgCoqfVmQUzvDl8Plwa15vyf7trx8xQhW96CSpAYLfTndt9kie57XtDlrWOrTpoZnAvJgIm5wNlirE2YWtSJbep%2BSTGKRLAGpcgM3lowdR0%2BQAqbkiMgtyNS7G5k20H%2BwqMSuqtGOIWd%2BKGTcFMtKtexHUaVfny6eDiSG16GjFdQuzlepiXyvlbVGO2pnFQi1cQC8%2BuXWy6jqVC5QgZOO9v%2FoV7i2fMgdycrlw5J1MBSoYK0CepY%2FRnhyi6bu%2F93DoJhbOghQttQYg5u%2B4RCnyK7jdjeuSZ4oeHzexEpx5PkooMCTN7y8MCdZh0krpVk6pdQPMAI%2B9%2FxbYCSxqjTCw367BBjqkAc26RgpgzrPu6Z15gUcm%2FA9OzLk1a%2F9awOn6JRrKE3Kdsa%2Bioi6pbvfukX5tQkesN901VfqiNW1GLtsZzTA3CmoAv8RyTPCio6vfo7rfl40Irx5vAImJz9rfzADkMh8fSovm3guKDY09vSJPx4%2BomtYQ2OqkL1yE0JhW53DzepdJGNvpn08WkrwWjtt0OOTcgffqeh6vNEGhcxYtLFO40j5j4qsx&X-Amz-Signature=348a76014635b8ac979891efff1c93e0e09646fc5b9bce176dde33d72bbbfbcd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK7K64W%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuSO%2BrJKmm0VoR3mmKqh6yzaRy3S0jbgtdpGqtHV5fXQIhAPVsjqh%2BOldYV6HePQPpG8XTZeGBhU9Ts9Om3GLurwK4KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA5Jo55acUveSFAp4q3AOHEvjSmWhD%2BLXDWviUJWshpCfjh0hjoCSQRbU%2FmzBOeeI2qtoExS9NcVuc%2BReDTk0%2FW61FkC77a1PQCpTmBTL14EzMzJwVuxAwJ3E9EMChzgi4iDCuLRiZTVk%2BJKNkrBg4X9bjEHrKEXRHb0T8Ozbj38nRhdKdfYevOkk%2BfHrhNjl%2FDPXz0aGLjqAVw2pCO9QyfvHuUb2Z1ty6O49fE85FXpTQvP%2BvbUHR5eh3zizvRdo%2FWWM%2B98McEK8btpfROI3jTSM3d83MFuosAeOwT%2BP10pJgDMKJvv%2FWj%2F8t3yGgCoqfVmQUzvDl8Plwa15vyf7trx8xQhW96CSpAYLfTndt9kie57XtDlrWOrTpoZnAvJgIm5wNlirE2YWtSJbep%2BSTGKRLAGpcgM3lowdR0%2BQAqbkiMgtyNS7G5k20H%2BwqMSuqtGOIWd%2BKGTcFMtKtexHUaVfny6eDiSG16GjFdQuzlepiXyvlbVGO2pnFQi1cQC8%2BuXWy6jqVC5QgZOO9v%2FoV7i2fMgdycrlw5J1MBSoYK0CepY%2FRnhyi6bu%2F93DoJhbOghQttQYg5u%2B4RCnyK7jdjeuSZ4oeHzexEpx5PkooMCTN7y8MCdZh0krpVk6pdQPMAI%2B9%2FxbYCSxqjTCw367BBjqkAc26RgpgzrPu6Z15gUcm%2FA9OzLk1a%2F9awOn6JRrKE3Kdsa%2Bioi6pbvfukX5tQkesN901VfqiNW1GLtsZzTA3CmoAv8RyTPCio6vfo7rfl40Irx5vAImJz9rfzADkMh8fSovm3guKDY09vSJPx4%2BomtYQ2OqkL1yE0JhW53DzepdJGNvpn08WkrwWjtt0OOTcgffqeh6vNEGhcxYtLFO40j5j4qsx&X-Amz-Signature=786fd3e80c1a7dc3ca0ac0d866092f14091a1d311b0b565dcd1dfdadf38af25e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
