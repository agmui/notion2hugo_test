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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEE24A3E%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYtFH93K8secpezDQxQ%2BJhqKCEty1VE7zQo8MZyIGTTAiEAxU6SsEzESfuYlpyo%2Bm1NUQ9kSBE64q70colwJn%2B7qMsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKABJkfvWMen82tUOSrcA%2FcrMwLRKFfBUnbKOm3LR8waCt5k1aaToMeeGHSsfNI1SI%2BJsJyVRPBzzcvLJxLjTMAUM8Ff4al21AKnd%2FIz3Sp7hK%2B8uhTs7UJVkYzCSjHye%2FS%2BaRud90WsDVhzffsXqutW%2FtpKQ77XXpMnlz5GXQ%2FeLF4%2BmvZaWpCi28J%2FLTS56WozgrcxYhwsxOeNjOC3wMKRow3LORCLA6YRdT9X78sknsCFiJ0fQcVBXX8WEJfcg8H4iiH9%2FG%2FLNU3BU3%2BCRjoloUwv4tMihPygJiWJ8HJDjMIPjTWsHH1TLzUu%2FaA%2BIOJ%2BlFNKLGBnQqM23TWLW%2BW3vFKOsFW7cuDCKDZsFSc47tO0%2BicPpCbyzegaSCflf8RDmG3VHk%2FtpgdJuO%2BQuBUBHFYFZ7flnJWdX44Ib584pH%2BQ%2BxnCi0ieMyZg50C6%2Bg8t9aYaFw9m8F9snG%2BsKIysSotczXRjL%2Fem1vVt3pSdOHaHffmgjogQrnBs3ymLTac%2BLJ3aYC0z%2BRosIEvFGBpQ9bR8Ck%2BtzgUZP0GDQHN27crpApX8c93pOLvvPzR6NaNZxxDbkzm2wTcdokS9dS1qlIqq2cLUer6VV7TyfcvDPfykoVRt%2BPMK7juTj5rjb9SkMFOf7XIuwgJkMKC0ncEGOqUBUd504MEiam%2BRBO8NwmS%2BtjSxKyFnOuXfNwzFLeJHIWX1ZimBGLBeeUtLeKNrq3UvdoOjHwgWLw7JuxfwJ2N4fcd1CRtnNyQFXoeLmmQYpFreqoZlwhx0T5Y17Ao%2FmHlDM2%2Fy4HuZ4gC9xosCxElChhRVNK2nmt76D9nGUfdk5Go9WbP0PIFIaP1df03eUtN2L2YQWTKDgYAJx9HFHleSSRCe91vw&X-Amz-Signature=6d916e5cbdb730d9b61548a56be7502490f781f444ff898d1a918f8be761cea9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEE24A3E%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYtFH93K8secpezDQxQ%2BJhqKCEty1VE7zQo8MZyIGTTAiEAxU6SsEzESfuYlpyo%2Bm1NUQ9kSBE64q70colwJn%2B7qMsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKABJkfvWMen82tUOSrcA%2FcrMwLRKFfBUnbKOm3LR8waCt5k1aaToMeeGHSsfNI1SI%2BJsJyVRPBzzcvLJxLjTMAUM8Ff4al21AKnd%2FIz3Sp7hK%2B8uhTs7UJVkYzCSjHye%2FS%2BaRud90WsDVhzffsXqutW%2FtpKQ77XXpMnlz5GXQ%2FeLF4%2BmvZaWpCi28J%2FLTS56WozgrcxYhwsxOeNjOC3wMKRow3LORCLA6YRdT9X78sknsCFiJ0fQcVBXX8WEJfcg8H4iiH9%2FG%2FLNU3BU3%2BCRjoloUwv4tMihPygJiWJ8HJDjMIPjTWsHH1TLzUu%2FaA%2BIOJ%2BlFNKLGBnQqM23TWLW%2BW3vFKOsFW7cuDCKDZsFSc47tO0%2BicPpCbyzegaSCflf8RDmG3VHk%2FtpgdJuO%2BQuBUBHFYFZ7flnJWdX44Ib584pH%2BQ%2BxnCi0ieMyZg50C6%2Bg8t9aYaFw9m8F9snG%2BsKIysSotczXRjL%2Fem1vVt3pSdOHaHffmgjogQrnBs3ymLTac%2BLJ3aYC0z%2BRosIEvFGBpQ9bR8Ck%2BtzgUZP0GDQHN27crpApX8c93pOLvvPzR6NaNZxxDbkzm2wTcdokS9dS1qlIqq2cLUer6VV7TyfcvDPfykoVRt%2BPMK7juTj5rjb9SkMFOf7XIuwgJkMKC0ncEGOqUBUd504MEiam%2BRBO8NwmS%2BtjSxKyFnOuXfNwzFLeJHIWX1ZimBGLBeeUtLeKNrq3UvdoOjHwgWLw7JuxfwJ2N4fcd1CRtnNyQFXoeLmmQYpFreqoZlwhx0T5Y17Ao%2FmHlDM2%2Fy4HuZ4gC9xosCxElChhRVNK2nmt76D9nGUfdk5Go9WbP0PIFIaP1df03eUtN2L2YQWTKDgYAJx9HFHleSSRCe91vw&X-Amz-Signature=d04fc1a07ffb4a63b23dbf7eff5236608cc11a940e1b1e4d69fe6a2edbf97998&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEE24A3E%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYtFH93K8secpezDQxQ%2BJhqKCEty1VE7zQo8MZyIGTTAiEAxU6SsEzESfuYlpyo%2Bm1NUQ9kSBE64q70colwJn%2B7qMsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKABJkfvWMen82tUOSrcA%2FcrMwLRKFfBUnbKOm3LR8waCt5k1aaToMeeGHSsfNI1SI%2BJsJyVRPBzzcvLJxLjTMAUM8Ff4al21AKnd%2FIz3Sp7hK%2B8uhTs7UJVkYzCSjHye%2FS%2BaRud90WsDVhzffsXqutW%2FtpKQ77XXpMnlz5GXQ%2FeLF4%2BmvZaWpCi28J%2FLTS56WozgrcxYhwsxOeNjOC3wMKRow3LORCLA6YRdT9X78sknsCFiJ0fQcVBXX8WEJfcg8H4iiH9%2FG%2FLNU3BU3%2BCRjoloUwv4tMihPygJiWJ8HJDjMIPjTWsHH1TLzUu%2FaA%2BIOJ%2BlFNKLGBnQqM23TWLW%2BW3vFKOsFW7cuDCKDZsFSc47tO0%2BicPpCbyzegaSCflf8RDmG3VHk%2FtpgdJuO%2BQuBUBHFYFZ7flnJWdX44Ib584pH%2BQ%2BxnCi0ieMyZg50C6%2Bg8t9aYaFw9m8F9snG%2BsKIysSotczXRjL%2Fem1vVt3pSdOHaHffmgjogQrnBs3ymLTac%2BLJ3aYC0z%2BRosIEvFGBpQ9bR8Ck%2BtzgUZP0GDQHN27crpApX8c93pOLvvPzR6NaNZxxDbkzm2wTcdokS9dS1qlIqq2cLUer6VV7TyfcvDPfykoVRt%2BPMK7juTj5rjb9SkMFOf7XIuwgJkMKC0ncEGOqUBUd504MEiam%2BRBO8NwmS%2BtjSxKyFnOuXfNwzFLeJHIWX1ZimBGLBeeUtLeKNrq3UvdoOjHwgWLw7JuxfwJ2N4fcd1CRtnNyQFXoeLmmQYpFreqoZlwhx0T5Y17Ao%2FmHlDM2%2Fy4HuZ4gC9xosCxElChhRVNK2nmt76D9nGUfdk5Go9WbP0PIFIaP1df03eUtN2L2YQWTKDgYAJx9HFHleSSRCe91vw&X-Amz-Signature=d8c6628412004226b7e1f3d0cf3dee26061c16df2f5da2dc8a60f4062a5fc98f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEE24A3E%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYtFH93K8secpezDQxQ%2BJhqKCEty1VE7zQo8MZyIGTTAiEAxU6SsEzESfuYlpyo%2Bm1NUQ9kSBE64q70colwJn%2B7qMsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKABJkfvWMen82tUOSrcA%2FcrMwLRKFfBUnbKOm3LR8waCt5k1aaToMeeGHSsfNI1SI%2BJsJyVRPBzzcvLJxLjTMAUM8Ff4al21AKnd%2FIz3Sp7hK%2B8uhTs7UJVkYzCSjHye%2FS%2BaRud90WsDVhzffsXqutW%2FtpKQ77XXpMnlz5GXQ%2FeLF4%2BmvZaWpCi28J%2FLTS56WozgrcxYhwsxOeNjOC3wMKRow3LORCLA6YRdT9X78sknsCFiJ0fQcVBXX8WEJfcg8H4iiH9%2FG%2FLNU3BU3%2BCRjoloUwv4tMihPygJiWJ8HJDjMIPjTWsHH1TLzUu%2FaA%2BIOJ%2BlFNKLGBnQqM23TWLW%2BW3vFKOsFW7cuDCKDZsFSc47tO0%2BicPpCbyzegaSCflf8RDmG3VHk%2FtpgdJuO%2BQuBUBHFYFZ7flnJWdX44Ib584pH%2BQ%2BxnCi0ieMyZg50C6%2Bg8t9aYaFw9m8F9snG%2BsKIysSotczXRjL%2Fem1vVt3pSdOHaHffmgjogQrnBs3ymLTac%2BLJ3aYC0z%2BRosIEvFGBpQ9bR8Ck%2BtzgUZP0GDQHN27crpApX8c93pOLvvPzR6NaNZxxDbkzm2wTcdokS9dS1qlIqq2cLUer6VV7TyfcvDPfykoVRt%2BPMK7juTj5rjb9SkMFOf7XIuwgJkMKC0ncEGOqUBUd504MEiam%2BRBO8NwmS%2BtjSxKyFnOuXfNwzFLeJHIWX1ZimBGLBeeUtLeKNrq3UvdoOjHwgWLw7JuxfwJ2N4fcd1CRtnNyQFXoeLmmQYpFreqoZlwhx0T5Y17Ao%2FmHlDM2%2Fy4HuZ4gC9xosCxElChhRVNK2nmt76D9nGUfdk5Go9WbP0PIFIaP1df03eUtN2L2YQWTKDgYAJx9HFHleSSRCe91vw&X-Amz-Signature=4681d6d1ade078ce223484e5fbe8f42252b88e50e0fa86d772b0c27b80880b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEE24A3E%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYtFH93K8secpezDQxQ%2BJhqKCEty1VE7zQo8MZyIGTTAiEAxU6SsEzESfuYlpyo%2Bm1NUQ9kSBE64q70colwJn%2B7qMsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKABJkfvWMen82tUOSrcA%2FcrMwLRKFfBUnbKOm3LR8waCt5k1aaToMeeGHSsfNI1SI%2BJsJyVRPBzzcvLJxLjTMAUM8Ff4al21AKnd%2FIz3Sp7hK%2B8uhTs7UJVkYzCSjHye%2FS%2BaRud90WsDVhzffsXqutW%2FtpKQ77XXpMnlz5GXQ%2FeLF4%2BmvZaWpCi28J%2FLTS56WozgrcxYhwsxOeNjOC3wMKRow3LORCLA6YRdT9X78sknsCFiJ0fQcVBXX8WEJfcg8H4iiH9%2FG%2FLNU3BU3%2BCRjoloUwv4tMihPygJiWJ8HJDjMIPjTWsHH1TLzUu%2FaA%2BIOJ%2BlFNKLGBnQqM23TWLW%2BW3vFKOsFW7cuDCKDZsFSc47tO0%2BicPpCbyzegaSCflf8RDmG3VHk%2FtpgdJuO%2BQuBUBHFYFZ7flnJWdX44Ib584pH%2BQ%2BxnCi0ieMyZg50C6%2Bg8t9aYaFw9m8F9snG%2BsKIysSotczXRjL%2Fem1vVt3pSdOHaHffmgjogQrnBs3ymLTac%2BLJ3aYC0z%2BRosIEvFGBpQ9bR8Ck%2BtzgUZP0GDQHN27crpApX8c93pOLvvPzR6NaNZxxDbkzm2wTcdokS9dS1qlIqq2cLUer6VV7TyfcvDPfykoVRt%2BPMK7juTj5rjb9SkMFOf7XIuwgJkMKC0ncEGOqUBUd504MEiam%2BRBO8NwmS%2BtjSxKyFnOuXfNwzFLeJHIWX1ZimBGLBeeUtLeKNrq3UvdoOjHwgWLw7JuxfwJ2N4fcd1CRtnNyQFXoeLmmQYpFreqoZlwhx0T5Y17Ao%2FmHlDM2%2Fy4HuZ4gC9xosCxElChhRVNK2nmt76D9nGUfdk5Go9WbP0PIFIaP1df03eUtN2L2YQWTKDgYAJx9HFHleSSRCe91vw&X-Amz-Signature=36035b581c34cbf39972cc0cd71271c3cd9df25fd7ca207fa8c7780cf8209a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEE24A3E%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYtFH93K8secpezDQxQ%2BJhqKCEty1VE7zQo8MZyIGTTAiEAxU6SsEzESfuYlpyo%2Bm1NUQ9kSBE64q70colwJn%2B7qMsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKABJkfvWMen82tUOSrcA%2FcrMwLRKFfBUnbKOm3LR8waCt5k1aaToMeeGHSsfNI1SI%2BJsJyVRPBzzcvLJxLjTMAUM8Ff4al21AKnd%2FIz3Sp7hK%2B8uhTs7UJVkYzCSjHye%2FS%2BaRud90WsDVhzffsXqutW%2FtpKQ77XXpMnlz5GXQ%2FeLF4%2BmvZaWpCi28J%2FLTS56WozgrcxYhwsxOeNjOC3wMKRow3LORCLA6YRdT9X78sknsCFiJ0fQcVBXX8WEJfcg8H4iiH9%2FG%2FLNU3BU3%2BCRjoloUwv4tMihPygJiWJ8HJDjMIPjTWsHH1TLzUu%2FaA%2BIOJ%2BlFNKLGBnQqM23TWLW%2BW3vFKOsFW7cuDCKDZsFSc47tO0%2BicPpCbyzegaSCflf8RDmG3VHk%2FtpgdJuO%2BQuBUBHFYFZ7flnJWdX44Ib584pH%2BQ%2BxnCi0ieMyZg50C6%2Bg8t9aYaFw9m8F9snG%2BsKIysSotczXRjL%2Fem1vVt3pSdOHaHffmgjogQrnBs3ymLTac%2BLJ3aYC0z%2BRosIEvFGBpQ9bR8Ck%2BtzgUZP0GDQHN27crpApX8c93pOLvvPzR6NaNZxxDbkzm2wTcdokS9dS1qlIqq2cLUer6VV7TyfcvDPfykoVRt%2BPMK7juTj5rjb9SkMFOf7XIuwgJkMKC0ncEGOqUBUd504MEiam%2BRBO8NwmS%2BtjSxKyFnOuXfNwzFLeJHIWX1ZimBGLBeeUtLeKNrq3UvdoOjHwgWLw7JuxfwJ2N4fcd1CRtnNyQFXoeLmmQYpFreqoZlwhx0T5Y17Ao%2FmHlDM2%2Fy4HuZ4gC9xosCxElChhRVNK2nmt76D9nGUfdk5Go9WbP0PIFIaP1df03eUtN2L2YQWTKDgYAJx9HFHleSSRCe91vw&X-Amz-Signature=fe843dabc6ea98d7449099572ce3b4c5cb7ae63eb3f6ef453b8c28f04bfecab7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEE24A3E%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYtFH93K8secpezDQxQ%2BJhqKCEty1VE7zQo8MZyIGTTAiEAxU6SsEzESfuYlpyo%2Bm1NUQ9kSBE64q70colwJn%2B7qMsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKABJkfvWMen82tUOSrcA%2FcrMwLRKFfBUnbKOm3LR8waCt5k1aaToMeeGHSsfNI1SI%2BJsJyVRPBzzcvLJxLjTMAUM8Ff4al21AKnd%2FIz3Sp7hK%2B8uhTs7UJVkYzCSjHye%2FS%2BaRud90WsDVhzffsXqutW%2FtpKQ77XXpMnlz5GXQ%2FeLF4%2BmvZaWpCi28J%2FLTS56WozgrcxYhwsxOeNjOC3wMKRow3LORCLA6YRdT9X78sknsCFiJ0fQcVBXX8WEJfcg8H4iiH9%2FG%2FLNU3BU3%2BCRjoloUwv4tMihPygJiWJ8HJDjMIPjTWsHH1TLzUu%2FaA%2BIOJ%2BlFNKLGBnQqM23TWLW%2BW3vFKOsFW7cuDCKDZsFSc47tO0%2BicPpCbyzegaSCflf8RDmG3VHk%2FtpgdJuO%2BQuBUBHFYFZ7flnJWdX44Ib584pH%2BQ%2BxnCi0ieMyZg50C6%2Bg8t9aYaFw9m8F9snG%2BsKIysSotczXRjL%2Fem1vVt3pSdOHaHffmgjogQrnBs3ymLTac%2BLJ3aYC0z%2BRosIEvFGBpQ9bR8Ck%2BtzgUZP0GDQHN27crpApX8c93pOLvvPzR6NaNZxxDbkzm2wTcdokS9dS1qlIqq2cLUer6VV7TyfcvDPfykoVRt%2BPMK7juTj5rjb9SkMFOf7XIuwgJkMKC0ncEGOqUBUd504MEiam%2BRBO8NwmS%2BtjSxKyFnOuXfNwzFLeJHIWX1ZimBGLBeeUtLeKNrq3UvdoOjHwgWLw7JuxfwJ2N4fcd1CRtnNyQFXoeLmmQYpFreqoZlwhx0T5Y17Ao%2FmHlDM2%2Fy4HuZ4gC9xosCxElChhRVNK2nmt76D9nGUfdk5Go9WbP0PIFIaP1df03eUtN2L2YQWTKDgYAJx9HFHleSSRCe91vw&X-Amz-Signature=5593033745fe0af71ebfc6f46fa7587d86622b7ed0d7eee9fb0c665ae0b3959c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
