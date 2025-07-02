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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUTN5MH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIYG2lPm1PExSiHFxG400ljCZJAUjNsb954EG45qrf6AiBH7WVP9Si7HYB%2Bcs%2FOj0ooFvtBx%2Frs%2BQffh4kADCW5NSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl6Zf5JgNN3oVSV6uKtwDsn06A8e%2FmrKjRy%2FlNxmC3Hln4hSlYXI8Uwiu%2Fv3Ri%2FPk9%2B9t5k%2FmWWDRCPjlSZTIbO4R%2FCS%2FWk7OclKVd6OWLrRG1qZmHI8OFbVE5cDGLZ2PorfAKHmAuB59N8ox3Eo5r7JuWaR%2FwZhyJLYmijvmIVrwXMtWctLCLjiJDW3p6Yx0Cn3pDaH3EFDdu0JI%2B2SEiK8md8Qm4J%2FVeigkLEpGVOMQuQC0GEc0pNnrdmaLwvCdn8BCbyaLuyukCBh6DtI96iB5UiOr4ql%2BCes8AIcxlD%2FX8m0GF%2BfYEvA1mD3bKiaxenH4nHa5SS85eIQBKMMSODHNVoSPCx%2FaCrwyzQSg2t5Ze2tTpQ9VNC936Jf4kBKhH3GU4jrCyKSMteGKeHntiqQtHeXoH6JLYqlGper3uBjJ7GPOtBBgzdSU9cVO77AwsXrIRZbzC5hmk98nbeFGPPRtmVoAdZOQOxrXosPeX%2BE89HzrTfZxyx9EyFhhgHWUP1tP2d%2FQQPiviTcGiMKvTsnRcZLwwbEGeZb4lze6XWxfTQ%2BmO%2FcvGhmOJqkY7v%2BpKmRCqVe3Yz8xKqMN5v4JkysH39aYvaaMX6qtWZg5TAx0TgDlT7FxXVY9paGds%2BnhzC3lLwTqkxpoM8cw0vORwwY6pgEYPIkw%2FmqDHEDVTMNKMY%2Fx3%2FMN7PjDeTO8gD%2BYSXcKpcWRUlqRkqLDTqfazvI2%2F6%2BfwTTzIKWFYBIsY4s6%2B4pUCfr8Z0yI2%2BXO01Ti5hfvFFrqYmkbc1g7BIaVAf%2BP3ccAhlTqJhu%2BcYx6ln%2FeprqNw76PVFMPOyC7uTRwToK%2FajnRHLmaMUTwGo9U9c2HnbHGr%2BI5CXomwoucjjPMJhYO3T8dOqrR&X-Amz-Signature=17511c655c046848920582a4b414376e92b5acef1c83fe39bad33cc6e3a1c325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUTN5MH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIYG2lPm1PExSiHFxG400ljCZJAUjNsb954EG45qrf6AiBH7WVP9Si7HYB%2Bcs%2FOj0ooFvtBx%2Frs%2BQffh4kADCW5NSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl6Zf5JgNN3oVSV6uKtwDsn06A8e%2FmrKjRy%2FlNxmC3Hln4hSlYXI8Uwiu%2Fv3Ri%2FPk9%2B9t5k%2FmWWDRCPjlSZTIbO4R%2FCS%2FWk7OclKVd6OWLrRG1qZmHI8OFbVE5cDGLZ2PorfAKHmAuB59N8ox3Eo5r7JuWaR%2FwZhyJLYmijvmIVrwXMtWctLCLjiJDW3p6Yx0Cn3pDaH3EFDdu0JI%2B2SEiK8md8Qm4J%2FVeigkLEpGVOMQuQC0GEc0pNnrdmaLwvCdn8BCbyaLuyukCBh6DtI96iB5UiOr4ql%2BCes8AIcxlD%2FX8m0GF%2BfYEvA1mD3bKiaxenH4nHa5SS85eIQBKMMSODHNVoSPCx%2FaCrwyzQSg2t5Ze2tTpQ9VNC936Jf4kBKhH3GU4jrCyKSMteGKeHntiqQtHeXoH6JLYqlGper3uBjJ7GPOtBBgzdSU9cVO77AwsXrIRZbzC5hmk98nbeFGPPRtmVoAdZOQOxrXosPeX%2BE89HzrTfZxyx9EyFhhgHWUP1tP2d%2FQQPiviTcGiMKvTsnRcZLwwbEGeZb4lze6XWxfTQ%2BmO%2FcvGhmOJqkY7v%2BpKmRCqVe3Yz8xKqMN5v4JkysH39aYvaaMX6qtWZg5TAx0TgDlT7FxXVY9paGds%2BnhzC3lLwTqkxpoM8cw0vORwwY6pgEYPIkw%2FmqDHEDVTMNKMY%2Fx3%2FMN7PjDeTO8gD%2BYSXcKpcWRUlqRkqLDTqfazvI2%2F6%2BfwTTzIKWFYBIsY4s6%2B4pUCfr8Z0yI2%2BXO01Ti5hfvFFrqYmkbc1g7BIaVAf%2BP3ccAhlTqJhu%2BcYx6ln%2FeprqNw76PVFMPOyC7uTRwToK%2FajnRHLmaMUTwGo9U9c2HnbHGr%2BI5CXomwoucjjPMJhYO3T8dOqrR&X-Amz-Signature=61d09560510ea2a3524adc54219d9fc8d1f5bd679b8fbc47ea15254cd92f88bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUTN5MH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIYG2lPm1PExSiHFxG400ljCZJAUjNsb954EG45qrf6AiBH7WVP9Si7HYB%2Bcs%2FOj0ooFvtBx%2Frs%2BQffh4kADCW5NSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl6Zf5JgNN3oVSV6uKtwDsn06A8e%2FmrKjRy%2FlNxmC3Hln4hSlYXI8Uwiu%2Fv3Ri%2FPk9%2B9t5k%2FmWWDRCPjlSZTIbO4R%2FCS%2FWk7OclKVd6OWLrRG1qZmHI8OFbVE5cDGLZ2PorfAKHmAuB59N8ox3Eo5r7JuWaR%2FwZhyJLYmijvmIVrwXMtWctLCLjiJDW3p6Yx0Cn3pDaH3EFDdu0JI%2B2SEiK8md8Qm4J%2FVeigkLEpGVOMQuQC0GEc0pNnrdmaLwvCdn8BCbyaLuyukCBh6DtI96iB5UiOr4ql%2BCes8AIcxlD%2FX8m0GF%2BfYEvA1mD3bKiaxenH4nHa5SS85eIQBKMMSODHNVoSPCx%2FaCrwyzQSg2t5Ze2tTpQ9VNC936Jf4kBKhH3GU4jrCyKSMteGKeHntiqQtHeXoH6JLYqlGper3uBjJ7GPOtBBgzdSU9cVO77AwsXrIRZbzC5hmk98nbeFGPPRtmVoAdZOQOxrXosPeX%2BE89HzrTfZxyx9EyFhhgHWUP1tP2d%2FQQPiviTcGiMKvTsnRcZLwwbEGeZb4lze6XWxfTQ%2BmO%2FcvGhmOJqkY7v%2BpKmRCqVe3Yz8xKqMN5v4JkysH39aYvaaMX6qtWZg5TAx0TgDlT7FxXVY9paGds%2BnhzC3lLwTqkxpoM8cw0vORwwY6pgEYPIkw%2FmqDHEDVTMNKMY%2Fx3%2FMN7PjDeTO8gD%2BYSXcKpcWRUlqRkqLDTqfazvI2%2F6%2BfwTTzIKWFYBIsY4s6%2B4pUCfr8Z0yI2%2BXO01Ti5hfvFFrqYmkbc1g7BIaVAf%2BP3ccAhlTqJhu%2BcYx6ln%2FeprqNw76PVFMPOyC7uTRwToK%2FajnRHLmaMUTwGo9U9c2HnbHGr%2BI5CXomwoucjjPMJhYO3T8dOqrR&X-Amz-Signature=5e2433e7188f5a5ba3e4cfdf64a371795af4e12eb8859c34717dca1b120cd9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUTN5MH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIYG2lPm1PExSiHFxG400ljCZJAUjNsb954EG45qrf6AiBH7WVP9Si7HYB%2Bcs%2FOj0ooFvtBx%2Frs%2BQffh4kADCW5NSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl6Zf5JgNN3oVSV6uKtwDsn06A8e%2FmrKjRy%2FlNxmC3Hln4hSlYXI8Uwiu%2Fv3Ri%2FPk9%2B9t5k%2FmWWDRCPjlSZTIbO4R%2FCS%2FWk7OclKVd6OWLrRG1qZmHI8OFbVE5cDGLZ2PorfAKHmAuB59N8ox3Eo5r7JuWaR%2FwZhyJLYmijvmIVrwXMtWctLCLjiJDW3p6Yx0Cn3pDaH3EFDdu0JI%2B2SEiK8md8Qm4J%2FVeigkLEpGVOMQuQC0GEc0pNnrdmaLwvCdn8BCbyaLuyukCBh6DtI96iB5UiOr4ql%2BCes8AIcxlD%2FX8m0GF%2BfYEvA1mD3bKiaxenH4nHa5SS85eIQBKMMSODHNVoSPCx%2FaCrwyzQSg2t5Ze2tTpQ9VNC936Jf4kBKhH3GU4jrCyKSMteGKeHntiqQtHeXoH6JLYqlGper3uBjJ7GPOtBBgzdSU9cVO77AwsXrIRZbzC5hmk98nbeFGPPRtmVoAdZOQOxrXosPeX%2BE89HzrTfZxyx9EyFhhgHWUP1tP2d%2FQQPiviTcGiMKvTsnRcZLwwbEGeZb4lze6XWxfTQ%2BmO%2FcvGhmOJqkY7v%2BpKmRCqVe3Yz8xKqMN5v4JkysH39aYvaaMX6qtWZg5TAx0TgDlT7FxXVY9paGds%2BnhzC3lLwTqkxpoM8cw0vORwwY6pgEYPIkw%2FmqDHEDVTMNKMY%2Fx3%2FMN7PjDeTO8gD%2BYSXcKpcWRUlqRkqLDTqfazvI2%2F6%2BfwTTzIKWFYBIsY4s6%2B4pUCfr8Z0yI2%2BXO01Ti5hfvFFrqYmkbc1g7BIaVAf%2BP3ccAhlTqJhu%2BcYx6ln%2FeprqNw76PVFMPOyC7uTRwToK%2FajnRHLmaMUTwGo9U9c2HnbHGr%2BI5CXomwoucjjPMJhYO3T8dOqrR&X-Amz-Signature=f8530941f50e951fb239d12527421a1acaa3f0c1d87f222b5059625a49600fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUTN5MH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIYG2lPm1PExSiHFxG400ljCZJAUjNsb954EG45qrf6AiBH7WVP9Si7HYB%2Bcs%2FOj0ooFvtBx%2Frs%2BQffh4kADCW5NSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl6Zf5JgNN3oVSV6uKtwDsn06A8e%2FmrKjRy%2FlNxmC3Hln4hSlYXI8Uwiu%2Fv3Ri%2FPk9%2B9t5k%2FmWWDRCPjlSZTIbO4R%2FCS%2FWk7OclKVd6OWLrRG1qZmHI8OFbVE5cDGLZ2PorfAKHmAuB59N8ox3Eo5r7JuWaR%2FwZhyJLYmijvmIVrwXMtWctLCLjiJDW3p6Yx0Cn3pDaH3EFDdu0JI%2B2SEiK8md8Qm4J%2FVeigkLEpGVOMQuQC0GEc0pNnrdmaLwvCdn8BCbyaLuyukCBh6DtI96iB5UiOr4ql%2BCes8AIcxlD%2FX8m0GF%2BfYEvA1mD3bKiaxenH4nHa5SS85eIQBKMMSODHNVoSPCx%2FaCrwyzQSg2t5Ze2tTpQ9VNC936Jf4kBKhH3GU4jrCyKSMteGKeHntiqQtHeXoH6JLYqlGper3uBjJ7GPOtBBgzdSU9cVO77AwsXrIRZbzC5hmk98nbeFGPPRtmVoAdZOQOxrXosPeX%2BE89HzrTfZxyx9EyFhhgHWUP1tP2d%2FQQPiviTcGiMKvTsnRcZLwwbEGeZb4lze6XWxfTQ%2BmO%2FcvGhmOJqkY7v%2BpKmRCqVe3Yz8xKqMN5v4JkysH39aYvaaMX6qtWZg5TAx0TgDlT7FxXVY9paGds%2BnhzC3lLwTqkxpoM8cw0vORwwY6pgEYPIkw%2FmqDHEDVTMNKMY%2Fx3%2FMN7PjDeTO8gD%2BYSXcKpcWRUlqRkqLDTqfazvI2%2F6%2BfwTTzIKWFYBIsY4s6%2B4pUCfr8Z0yI2%2BXO01Ti5hfvFFrqYmkbc1g7BIaVAf%2BP3ccAhlTqJhu%2BcYx6ln%2FeprqNw76PVFMPOyC7uTRwToK%2FajnRHLmaMUTwGo9U9c2HnbHGr%2BI5CXomwoucjjPMJhYO3T8dOqrR&X-Amz-Signature=15f6c5d5f86f3b268e2666412b0bf5d3db845aa5ebdea86e2f910109386f65b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUTN5MH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIYG2lPm1PExSiHFxG400ljCZJAUjNsb954EG45qrf6AiBH7WVP9Si7HYB%2Bcs%2FOj0ooFvtBx%2Frs%2BQffh4kADCW5NSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl6Zf5JgNN3oVSV6uKtwDsn06A8e%2FmrKjRy%2FlNxmC3Hln4hSlYXI8Uwiu%2Fv3Ri%2FPk9%2B9t5k%2FmWWDRCPjlSZTIbO4R%2FCS%2FWk7OclKVd6OWLrRG1qZmHI8OFbVE5cDGLZ2PorfAKHmAuB59N8ox3Eo5r7JuWaR%2FwZhyJLYmijvmIVrwXMtWctLCLjiJDW3p6Yx0Cn3pDaH3EFDdu0JI%2B2SEiK8md8Qm4J%2FVeigkLEpGVOMQuQC0GEc0pNnrdmaLwvCdn8BCbyaLuyukCBh6DtI96iB5UiOr4ql%2BCes8AIcxlD%2FX8m0GF%2BfYEvA1mD3bKiaxenH4nHa5SS85eIQBKMMSODHNVoSPCx%2FaCrwyzQSg2t5Ze2tTpQ9VNC936Jf4kBKhH3GU4jrCyKSMteGKeHntiqQtHeXoH6JLYqlGper3uBjJ7GPOtBBgzdSU9cVO77AwsXrIRZbzC5hmk98nbeFGPPRtmVoAdZOQOxrXosPeX%2BE89HzrTfZxyx9EyFhhgHWUP1tP2d%2FQQPiviTcGiMKvTsnRcZLwwbEGeZb4lze6XWxfTQ%2BmO%2FcvGhmOJqkY7v%2BpKmRCqVe3Yz8xKqMN5v4JkysH39aYvaaMX6qtWZg5TAx0TgDlT7FxXVY9paGds%2BnhzC3lLwTqkxpoM8cw0vORwwY6pgEYPIkw%2FmqDHEDVTMNKMY%2Fx3%2FMN7PjDeTO8gD%2BYSXcKpcWRUlqRkqLDTqfazvI2%2F6%2BfwTTzIKWFYBIsY4s6%2B4pUCfr8Z0yI2%2BXO01Ti5hfvFFrqYmkbc1g7BIaVAf%2BP3ccAhlTqJhu%2BcYx6ln%2FeprqNw76PVFMPOyC7uTRwToK%2FajnRHLmaMUTwGo9U9c2HnbHGr%2BI5CXomwoucjjPMJhYO3T8dOqrR&X-Amz-Signature=734b6364d6786b4cf1cf1245cae5765b9dbef9b9fb87672f0c139462c6118567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUTN5MH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIYG2lPm1PExSiHFxG400ljCZJAUjNsb954EG45qrf6AiBH7WVP9Si7HYB%2Bcs%2FOj0ooFvtBx%2Frs%2BQffh4kADCW5NSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl6Zf5JgNN3oVSV6uKtwDsn06A8e%2FmrKjRy%2FlNxmC3Hln4hSlYXI8Uwiu%2Fv3Ri%2FPk9%2B9t5k%2FmWWDRCPjlSZTIbO4R%2FCS%2FWk7OclKVd6OWLrRG1qZmHI8OFbVE5cDGLZ2PorfAKHmAuB59N8ox3Eo5r7JuWaR%2FwZhyJLYmijvmIVrwXMtWctLCLjiJDW3p6Yx0Cn3pDaH3EFDdu0JI%2B2SEiK8md8Qm4J%2FVeigkLEpGVOMQuQC0GEc0pNnrdmaLwvCdn8BCbyaLuyukCBh6DtI96iB5UiOr4ql%2BCes8AIcxlD%2FX8m0GF%2BfYEvA1mD3bKiaxenH4nHa5SS85eIQBKMMSODHNVoSPCx%2FaCrwyzQSg2t5Ze2tTpQ9VNC936Jf4kBKhH3GU4jrCyKSMteGKeHntiqQtHeXoH6JLYqlGper3uBjJ7GPOtBBgzdSU9cVO77AwsXrIRZbzC5hmk98nbeFGPPRtmVoAdZOQOxrXosPeX%2BE89HzrTfZxyx9EyFhhgHWUP1tP2d%2FQQPiviTcGiMKvTsnRcZLwwbEGeZb4lze6XWxfTQ%2BmO%2FcvGhmOJqkY7v%2BpKmRCqVe3Yz8xKqMN5v4JkysH39aYvaaMX6qtWZg5TAx0TgDlT7FxXVY9paGds%2BnhzC3lLwTqkxpoM8cw0vORwwY6pgEYPIkw%2FmqDHEDVTMNKMY%2Fx3%2FMN7PjDeTO8gD%2BYSXcKpcWRUlqRkqLDTqfazvI2%2F6%2BfwTTzIKWFYBIsY4s6%2B4pUCfr8Z0yI2%2BXO01Ti5hfvFFrqYmkbc1g7BIaVAf%2BP3ccAhlTqJhu%2BcYx6ln%2FeprqNw76PVFMPOyC7uTRwToK%2FajnRHLmaMUTwGo9U9c2HnbHGr%2BI5CXomwoucjjPMJhYO3T8dOqrR&X-Amz-Signature=1146d22a5e61f93f62c4598595107c7b994a69375ba890a502cbdc15bbf4c845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
