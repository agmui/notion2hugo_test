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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSE3ZDN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCVnPjyzwuZp4UZWi6kQGNt5sU6WjGvJ%2FeFCTcLlFxbpwIgW17%2B1OvZ734ez%2BsrwQufS1NjDzPdP%2BAQMbFE0I8VDJwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDO8sPEhkeuH1jr%2FxaSrcA28CEZPCvH1jf7K92O1P69Fz0GJz7vBjuthN%2B58jG3qANdgfCGRK6AsPKtTc12iHVdNefr66JUo32TzH8E1bThNsjWmmvP9UG%2F0nIAClJONa9dbR6wpxocC6RKoykZjvCaxgIlH1nZXuSf8h5%2FBY9VHSbuRbEZ5dlvqyojbdFumV7kTsIRhompGj3vLY%2BLBzeBxKX7aCX2qRUm8oAheb8jCFAWrqL6W9FFNk9dTLWFWh3n0N%2Be9A4Lwi84Hbiwq0tsT%2F4tBM6iAeMW4j0ihwBo%2FUW%2Fr1f5evPgaWL9wUOFvCsc3hf3vcnI5gfyrR%2BEcBdrydxRticnMSuTcTfx2mESIhN%2BXUU8MZ0fX%2Foue2l%2BrhiYOAw6156qEufqpVw87UK6WWbWyT1EXZXei15bouqxcVfcpwFdAgOFNxlKmwM1ygcFPYwOVTlAV4ov71wew%2FtOoNT0rRdIrzQzPWu%2Bew4%2B4D3Kpab2Rpk2CKff4j61RtFRwaj%2BbGlRLXjJNwkQFIZiR0weEf0vH%2FflL1qxYfDqfl5WGMUWwAnas7cjIn2xG%2BuDNeg8MIO%2FWIRpsVo6WjRd6nYjttaK0QboSyGVTE9sivShT6MGgegtZm3xBHEU7u%2BXHnjiLaTavzD6EbMNyC9L0GOqUBf4wpoV1alNzWXz0auV29SQdhGg%2BV%2Fx2r2HW2o98%2BbCGACjncHMfwxfVHhdeze3DajYmfJ9vR%2Bm71qvZ30FEhJg7YWRmnfB56y2tV6D4BSwhK%2FZ%2FD4Z9UqgrZsq4QARJCifVmFltlNTQi2FLW08Y8Jpxv47ev74lJYK9O8OIhOD%2FFv0%2F4OKer3VmfL8560rOPznofX4QtN%2FPlv%2FR3dXExYYdgRGNu&X-Amz-Signature=7e71956f292b1b46cc3a192a9e23348138f1e6179a195ebe9e965bfcf7363475&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSE3ZDN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCVnPjyzwuZp4UZWi6kQGNt5sU6WjGvJ%2FeFCTcLlFxbpwIgW17%2B1OvZ734ez%2BsrwQufS1NjDzPdP%2BAQMbFE0I8VDJwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDO8sPEhkeuH1jr%2FxaSrcA28CEZPCvH1jf7K92O1P69Fz0GJz7vBjuthN%2B58jG3qANdgfCGRK6AsPKtTc12iHVdNefr66JUo32TzH8E1bThNsjWmmvP9UG%2F0nIAClJONa9dbR6wpxocC6RKoykZjvCaxgIlH1nZXuSf8h5%2FBY9VHSbuRbEZ5dlvqyojbdFumV7kTsIRhompGj3vLY%2BLBzeBxKX7aCX2qRUm8oAheb8jCFAWrqL6W9FFNk9dTLWFWh3n0N%2Be9A4Lwi84Hbiwq0tsT%2F4tBM6iAeMW4j0ihwBo%2FUW%2Fr1f5evPgaWL9wUOFvCsc3hf3vcnI5gfyrR%2BEcBdrydxRticnMSuTcTfx2mESIhN%2BXUU8MZ0fX%2Foue2l%2BrhiYOAw6156qEufqpVw87UK6WWbWyT1EXZXei15bouqxcVfcpwFdAgOFNxlKmwM1ygcFPYwOVTlAV4ov71wew%2FtOoNT0rRdIrzQzPWu%2Bew4%2B4D3Kpab2Rpk2CKff4j61RtFRwaj%2BbGlRLXjJNwkQFIZiR0weEf0vH%2FflL1qxYfDqfl5WGMUWwAnas7cjIn2xG%2BuDNeg8MIO%2FWIRpsVo6WjRd6nYjttaK0QboSyGVTE9sivShT6MGgegtZm3xBHEU7u%2BXHnjiLaTavzD6EbMNyC9L0GOqUBf4wpoV1alNzWXz0auV29SQdhGg%2BV%2Fx2r2HW2o98%2BbCGACjncHMfwxfVHhdeze3DajYmfJ9vR%2Bm71qvZ30FEhJg7YWRmnfB56y2tV6D4BSwhK%2FZ%2FD4Z9UqgrZsq4QARJCifVmFltlNTQi2FLW08Y8Jpxv47ev74lJYK9O8OIhOD%2FFv0%2F4OKer3VmfL8560rOPznofX4QtN%2FPlv%2FR3dXExYYdgRGNu&X-Amz-Signature=ea42ad95aa1684f41144cfc0e7231f4c9583cceaadf61b72cb662b43467cbfe2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSE3ZDN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCVnPjyzwuZp4UZWi6kQGNt5sU6WjGvJ%2FeFCTcLlFxbpwIgW17%2B1OvZ734ez%2BsrwQufS1NjDzPdP%2BAQMbFE0I8VDJwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDO8sPEhkeuH1jr%2FxaSrcA28CEZPCvH1jf7K92O1P69Fz0GJz7vBjuthN%2B58jG3qANdgfCGRK6AsPKtTc12iHVdNefr66JUo32TzH8E1bThNsjWmmvP9UG%2F0nIAClJONa9dbR6wpxocC6RKoykZjvCaxgIlH1nZXuSf8h5%2FBY9VHSbuRbEZ5dlvqyojbdFumV7kTsIRhompGj3vLY%2BLBzeBxKX7aCX2qRUm8oAheb8jCFAWrqL6W9FFNk9dTLWFWh3n0N%2Be9A4Lwi84Hbiwq0tsT%2F4tBM6iAeMW4j0ihwBo%2FUW%2Fr1f5evPgaWL9wUOFvCsc3hf3vcnI5gfyrR%2BEcBdrydxRticnMSuTcTfx2mESIhN%2BXUU8MZ0fX%2Foue2l%2BrhiYOAw6156qEufqpVw87UK6WWbWyT1EXZXei15bouqxcVfcpwFdAgOFNxlKmwM1ygcFPYwOVTlAV4ov71wew%2FtOoNT0rRdIrzQzPWu%2Bew4%2B4D3Kpab2Rpk2CKff4j61RtFRwaj%2BbGlRLXjJNwkQFIZiR0weEf0vH%2FflL1qxYfDqfl5WGMUWwAnas7cjIn2xG%2BuDNeg8MIO%2FWIRpsVo6WjRd6nYjttaK0QboSyGVTE9sivShT6MGgegtZm3xBHEU7u%2BXHnjiLaTavzD6EbMNyC9L0GOqUBf4wpoV1alNzWXz0auV29SQdhGg%2BV%2Fx2r2HW2o98%2BbCGACjncHMfwxfVHhdeze3DajYmfJ9vR%2Bm71qvZ30FEhJg7YWRmnfB56y2tV6D4BSwhK%2FZ%2FD4Z9UqgrZsq4QARJCifVmFltlNTQi2FLW08Y8Jpxv47ev74lJYK9O8OIhOD%2FFv0%2F4OKer3VmfL8560rOPznofX4QtN%2FPlv%2FR3dXExYYdgRGNu&X-Amz-Signature=3fe1cde051f7674424486f0a50f0a384d640da4dc3c41ea6adbafe7274e80003&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSE3ZDN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCVnPjyzwuZp4UZWi6kQGNt5sU6WjGvJ%2FeFCTcLlFxbpwIgW17%2B1OvZ734ez%2BsrwQufS1NjDzPdP%2BAQMbFE0I8VDJwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDO8sPEhkeuH1jr%2FxaSrcA28CEZPCvH1jf7K92O1P69Fz0GJz7vBjuthN%2B58jG3qANdgfCGRK6AsPKtTc12iHVdNefr66JUo32TzH8E1bThNsjWmmvP9UG%2F0nIAClJONa9dbR6wpxocC6RKoykZjvCaxgIlH1nZXuSf8h5%2FBY9VHSbuRbEZ5dlvqyojbdFumV7kTsIRhompGj3vLY%2BLBzeBxKX7aCX2qRUm8oAheb8jCFAWrqL6W9FFNk9dTLWFWh3n0N%2Be9A4Lwi84Hbiwq0tsT%2F4tBM6iAeMW4j0ihwBo%2FUW%2Fr1f5evPgaWL9wUOFvCsc3hf3vcnI5gfyrR%2BEcBdrydxRticnMSuTcTfx2mESIhN%2BXUU8MZ0fX%2Foue2l%2BrhiYOAw6156qEufqpVw87UK6WWbWyT1EXZXei15bouqxcVfcpwFdAgOFNxlKmwM1ygcFPYwOVTlAV4ov71wew%2FtOoNT0rRdIrzQzPWu%2Bew4%2B4D3Kpab2Rpk2CKff4j61RtFRwaj%2BbGlRLXjJNwkQFIZiR0weEf0vH%2FflL1qxYfDqfl5WGMUWwAnas7cjIn2xG%2BuDNeg8MIO%2FWIRpsVo6WjRd6nYjttaK0QboSyGVTE9sivShT6MGgegtZm3xBHEU7u%2BXHnjiLaTavzD6EbMNyC9L0GOqUBf4wpoV1alNzWXz0auV29SQdhGg%2BV%2Fx2r2HW2o98%2BbCGACjncHMfwxfVHhdeze3DajYmfJ9vR%2Bm71qvZ30FEhJg7YWRmnfB56y2tV6D4BSwhK%2FZ%2FD4Z9UqgrZsq4QARJCifVmFltlNTQi2FLW08Y8Jpxv47ev74lJYK9O8OIhOD%2FFv0%2F4OKer3VmfL8560rOPznofX4QtN%2FPlv%2FR3dXExYYdgRGNu&X-Amz-Signature=5ede9a4d630832738e8bfcf8a0ed06d52ce4dbb56c74103c4e0ebf8ceb899568&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSE3ZDN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCVnPjyzwuZp4UZWi6kQGNt5sU6WjGvJ%2FeFCTcLlFxbpwIgW17%2B1OvZ734ez%2BsrwQufS1NjDzPdP%2BAQMbFE0I8VDJwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDO8sPEhkeuH1jr%2FxaSrcA28CEZPCvH1jf7K92O1P69Fz0GJz7vBjuthN%2B58jG3qANdgfCGRK6AsPKtTc12iHVdNefr66JUo32TzH8E1bThNsjWmmvP9UG%2F0nIAClJONa9dbR6wpxocC6RKoykZjvCaxgIlH1nZXuSf8h5%2FBY9VHSbuRbEZ5dlvqyojbdFumV7kTsIRhompGj3vLY%2BLBzeBxKX7aCX2qRUm8oAheb8jCFAWrqL6W9FFNk9dTLWFWh3n0N%2Be9A4Lwi84Hbiwq0tsT%2F4tBM6iAeMW4j0ihwBo%2FUW%2Fr1f5evPgaWL9wUOFvCsc3hf3vcnI5gfyrR%2BEcBdrydxRticnMSuTcTfx2mESIhN%2BXUU8MZ0fX%2Foue2l%2BrhiYOAw6156qEufqpVw87UK6WWbWyT1EXZXei15bouqxcVfcpwFdAgOFNxlKmwM1ygcFPYwOVTlAV4ov71wew%2FtOoNT0rRdIrzQzPWu%2Bew4%2B4D3Kpab2Rpk2CKff4j61RtFRwaj%2BbGlRLXjJNwkQFIZiR0weEf0vH%2FflL1qxYfDqfl5WGMUWwAnas7cjIn2xG%2BuDNeg8MIO%2FWIRpsVo6WjRd6nYjttaK0QboSyGVTE9sivShT6MGgegtZm3xBHEU7u%2BXHnjiLaTavzD6EbMNyC9L0GOqUBf4wpoV1alNzWXz0auV29SQdhGg%2BV%2Fx2r2HW2o98%2BbCGACjncHMfwxfVHhdeze3DajYmfJ9vR%2Bm71qvZ30FEhJg7YWRmnfB56y2tV6D4BSwhK%2FZ%2FD4Z9UqgrZsq4QARJCifVmFltlNTQi2FLW08Y8Jpxv47ev74lJYK9O8OIhOD%2FFv0%2F4OKer3VmfL8560rOPznofX4QtN%2FPlv%2FR3dXExYYdgRGNu&X-Amz-Signature=daa241344c0117146ea7b1e267268bdce21b37e32dd80f4dae045b3d73b56e94&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSE3ZDN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCVnPjyzwuZp4UZWi6kQGNt5sU6WjGvJ%2FeFCTcLlFxbpwIgW17%2B1OvZ734ez%2BsrwQufS1NjDzPdP%2BAQMbFE0I8VDJwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDO8sPEhkeuH1jr%2FxaSrcA28CEZPCvH1jf7K92O1P69Fz0GJz7vBjuthN%2B58jG3qANdgfCGRK6AsPKtTc12iHVdNefr66JUo32TzH8E1bThNsjWmmvP9UG%2F0nIAClJONa9dbR6wpxocC6RKoykZjvCaxgIlH1nZXuSf8h5%2FBY9VHSbuRbEZ5dlvqyojbdFumV7kTsIRhompGj3vLY%2BLBzeBxKX7aCX2qRUm8oAheb8jCFAWrqL6W9FFNk9dTLWFWh3n0N%2Be9A4Lwi84Hbiwq0tsT%2F4tBM6iAeMW4j0ihwBo%2FUW%2Fr1f5evPgaWL9wUOFvCsc3hf3vcnI5gfyrR%2BEcBdrydxRticnMSuTcTfx2mESIhN%2BXUU8MZ0fX%2Foue2l%2BrhiYOAw6156qEufqpVw87UK6WWbWyT1EXZXei15bouqxcVfcpwFdAgOFNxlKmwM1ygcFPYwOVTlAV4ov71wew%2FtOoNT0rRdIrzQzPWu%2Bew4%2B4D3Kpab2Rpk2CKff4j61RtFRwaj%2BbGlRLXjJNwkQFIZiR0weEf0vH%2FflL1qxYfDqfl5WGMUWwAnas7cjIn2xG%2BuDNeg8MIO%2FWIRpsVo6WjRd6nYjttaK0QboSyGVTE9sivShT6MGgegtZm3xBHEU7u%2BXHnjiLaTavzD6EbMNyC9L0GOqUBf4wpoV1alNzWXz0auV29SQdhGg%2BV%2Fx2r2HW2o98%2BbCGACjncHMfwxfVHhdeze3DajYmfJ9vR%2Bm71qvZ30FEhJg7YWRmnfB56y2tV6D4BSwhK%2FZ%2FD4Z9UqgrZsq4QARJCifVmFltlNTQi2FLW08Y8Jpxv47ev74lJYK9O8OIhOD%2FFv0%2F4OKer3VmfL8560rOPznofX4QtN%2FPlv%2FR3dXExYYdgRGNu&X-Amz-Signature=4ed2de0c77cee7045f2775ef523d5a54fcd4ed2df595325b9d94b1d8fb00f80a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSE3ZDN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCVnPjyzwuZp4UZWi6kQGNt5sU6WjGvJ%2FeFCTcLlFxbpwIgW17%2B1OvZ734ez%2BsrwQufS1NjDzPdP%2BAQMbFE0I8VDJwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDO8sPEhkeuH1jr%2FxaSrcA28CEZPCvH1jf7K92O1P69Fz0GJz7vBjuthN%2B58jG3qANdgfCGRK6AsPKtTc12iHVdNefr66JUo32TzH8E1bThNsjWmmvP9UG%2F0nIAClJONa9dbR6wpxocC6RKoykZjvCaxgIlH1nZXuSf8h5%2FBY9VHSbuRbEZ5dlvqyojbdFumV7kTsIRhompGj3vLY%2BLBzeBxKX7aCX2qRUm8oAheb8jCFAWrqL6W9FFNk9dTLWFWh3n0N%2Be9A4Lwi84Hbiwq0tsT%2F4tBM6iAeMW4j0ihwBo%2FUW%2Fr1f5evPgaWL9wUOFvCsc3hf3vcnI5gfyrR%2BEcBdrydxRticnMSuTcTfx2mESIhN%2BXUU8MZ0fX%2Foue2l%2BrhiYOAw6156qEufqpVw87UK6WWbWyT1EXZXei15bouqxcVfcpwFdAgOFNxlKmwM1ygcFPYwOVTlAV4ov71wew%2FtOoNT0rRdIrzQzPWu%2Bew4%2B4D3Kpab2Rpk2CKff4j61RtFRwaj%2BbGlRLXjJNwkQFIZiR0weEf0vH%2FflL1qxYfDqfl5WGMUWwAnas7cjIn2xG%2BuDNeg8MIO%2FWIRpsVo6WjRd6nYjttaK0QboSyGVTE9sivShT6MGgegtZm3xBHEU7u%2BXHnjiLaTavzD6EbMNyC9L0GOqUBf4wpoV1alNzWXz0auV29SQdhGg%2BV%2Fx2r2HW2o98%2BbCGACjncHMfwxfVHhdeze3DajYmfJ9vR%2Bm71qvZ30FEhJg7YWRmnfB56y2tV6D4BSwhK%2FZ%2FD4Z9UqgrZsq4QARJCifVmFltlNTQi2FLW08Y8Jpxv47ev74lJYK9O8OIhOD%2FFv0%2F4OKer3VmfL8560rOPznofX4QtN%2FPlv%2FR3dXExYYdgRGNu&X-Amz-Signature=d15158b951bd9d1209b1dbfca2d68b570300a8d752e850f48ce7d58bf2fbff76&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
