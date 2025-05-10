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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PXBRFH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIysQZcZrdnCQVR47c0ClFs2sZaRoqZ5jjLr4sUlnP5AiA6WVULrpBUtCk1O7pUtuJHl6nG2irubs9NSheGb5kzHiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEW393st0VY%2FdkKLGKtwD%2BjOwdYhiixDiJf6G8m9X0wTLIukRLu%2BUppsI8ktjlB5Hi0JoGsZa4Wb8UDZPQSbPLJIrrAT5mJR8gDJEuC0eDjTfSS55C9gs2i3PaYEh14gnRGH2K0Bz7uq535mVdhnwKas11UUwMxGL6NnrRuefHyn6VsqA%2FTwH1dSAAvUmz7%2F%2BF7um1KbYSQFNumB9JXWbV8YGYst8oKmNdtAuiiQNOrVOVGJTdrQZaHLgZ6geeOVSp0D%2BTZzJGePszW%2FS0S3cAb7x0X%2FFciKEjsoywSbTAUvgdl7vQc42okaQF3kj5b6KTUGqy6DYpwqRxIXD4LEOik7zCFDvnExmS5wVMYOOVltqw9R7QvQztl6atrcRa%2FVNlin7K1pjK1sNeOJ%2Fna3VCMHHcbRDK6%2FLmg2gaMFKa4Q%2FiE0yiAiO%2BU2U1bOQRtKfXb0WlsLb1N5ZVdfIT9VqjveCLN%2FZSPMx41rcLl7CbsFMUpYk4qAe4HFhtpwSi8%2F28%2BDfjqB16uyB07jsQH7%2BZOBlEdBtUjdkt%2Frot6A7E1CLN%2FioTzDk%2BafXjaqbtl%2FriqnjTLayTI%2FdcYAVNF5iINEoc386pwBNLZkvNi2QIu1mA09sHkoEjtevXfOTpajKeb4c1Rd6BSBSYn4wj%2Bb8wAY6pgEeTyVfssGTmIeLBDCycFfSUuvE%2BTeV3ZAKt4%2FX7GBXxWwYoQ8MHRfFtcY%2FtMux8SYWop6KIgqeqBm1j%2B2bhtIIY75NxIiaNt3KyQ2vUQgf0c2g0uDpgHsy4mXRtyjN1SVRNjnZaTpyHdrxHiTz9uWk6LqOF8INljO%2BxXwq49kfc%2B%2FIiY9Vg916N71pjsfjtqHvEYhxAonqQPOZDDzEyf0SBclivule&X-Amz-Signature=ef20942586b573fb7b5d8d9b3fde80f3dab2a146c1a590300e2aa16151220b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PXBRFH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIysQZcZrdnCQVR47c0ClFs2sZaRoqZ5jjLr4sUlnP5AiA6WVULrpBUtCk1O7pUtuJHl6nG2irubs9NSheGb5kzHiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEW393st0VY%2FdkKLGKtwD%2BjOwdYhiixDiJf6G8m9X0wTLIukRLu%2BUppsI8ktjlB5Hi0JoGsZa4Wb8UDZPQSbPLJIrrAT5mJR8gDJEuC0eDjTfSS55C9gs2i3PaYEh14gnRGH2K0Bz7uq535mVdhnwKas11UUwMxGL6NnrRuefHyn6VsqA%2FTwH1dSAAvUmz7%2F%2BF7um1KbYSQFNumB9JXWbV8YGYst8oKmNdtAuiiQNOrVOVGJTdrQZaHLgZ6geeOVSp0D%2BTZzJGePszW%2FS0S3cAb7x0X%2FFciKEjsoywSbTAUvgdl7vQc42okaQF3kj5b6KTUGqy6DYpwqRxIXD4LEOik7zCFDvnExmS5wVMYOOVltqw9R7QvQztl6atrcRa%2FVNlin7K1pjK1sNeOJ%2Fna3VCMHHcbRDK6%2FLmg2gaMFKa4Q%2FiE0yiAiO%2BU2U1bOQRtKfXb0WlsLb1N5ZVdfIT9VqjveCLN%2FZSPMx41rcLl7CbsFMUpYk4qAe4HFhtpwSi8%2F28%2BDfjqB16uyB07jsQH7%2BZOBlEdBtUjdkt%2Frot6A7E1CLN%2FioTzDk%2BafXjaqbtl%2FriqnjTLayTI%2FdcYAVNF5iINEoc386pwBNLZkvNi2QIu1mA09sHkoEjtevXfOTpajKeb4c1Rd6BSBSYn4wj%2Bb8wAY6pgEeTyVfssGTmIeLBDCycFfSUuvE%2BTeV3ZAKt4%2FX7GBXxWwYoQ8MHRfFtcY%2FtMux8SYWop6KIgqeqBm1j%2B2bhtIIY75NxIiaNt3KyQ2vUQgf0c2g0uDpgHsy4mXRtyjN1SVRNjnZaTpyHdrxHiTz9uWk6LqOF8INljO%2BxXwq49kfc%2B%2FIiY9Vg916N71pjsfjtqHvEYhxAonqQPOZDDzEyf0SBclivule&X-Amz-Signature=a6d6f38a20291eb037b855011ada0fcf27e0ba50a14954e492ad1214a6f30a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PXBRFH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIysQZcZrdnCQVR47c0ClFs2sZaRoqZ5jjLr4sUlnP5AiA6WVULrpBUtCk1O7pUtuJHl6nG2irubs9NSheGb5kzHiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEW393st0VY%2FdkKLGKtwD%2BjOwdYhiixDiJf6G8m9X0wTLIukRLu%2BUppsI8ktjlB5Hi0JoGsZa4Wb8UDZPQSbPLJIrrAT5mJR8gDJEuC0eDjTfSS55C9gs2i3PaYEh14gnRGH2K0Bz7uq535mVdhnwKas11UUwMxGL6NnrRuefHyn6VsqA%2FTwH1dSAAvUmz7%2F%2BF7um1KbYSQFNumB9JXWbV8YGYst8oKmNdtAuiiQNOrVOVGJTdrQZaHLgZ6geeOVSp0D%2BTZzJGePszW%2FS0S3cAb7x0X%2FFciKEjsoywSbTAUvgdl7vQc42okaQF3kj5b6KTUGqy6DYpwqRxIXD4LEOik7zCFDvnExmS5wVMYOOVltqw9R7QvQztl6atrcRa%2FVNlin7K1pjK1sNeOJ%2Fna3VCMHHcbRDK6%2FLmg2gaMFKa4Q%2FiE0yiAiO%2BU2U1bOQRtKfXb0WlsLb1N5ZVdfIT9VqjveCLN%2FZSPMx41rcLl7CbsFMUpYk4qAe4HFhtpwSi8%2F28%2BDfjqB16uyB07jsQH7%2BZOBlEdBtUjdkt%2Frot6A7E1CLN%2FioTzDk%2BafXjaqbtl%2FriqnjTLayTI%2FdcYAVNF5iINEoc386pwBNLZkvNi2QIu1mA09sHkoEjtevXfOTpajKeb4c1Rd6BSBSYn4wj%2Bb8wAY6pgEeTyVfssGTmIeLBDCycFfSUuvE%2BTeV3ZAKt4%2FX7GBXxWwYoQ8MHRfFtcY%2FtMux8SYWop6KIgqeqBm1j%2B2bhtIIY75NxIiaNt3KyQ2vUQgf0c2g0uDpgHsy4mXRtyjN1SVRNjnZaTpyHdrxHiTz9uWk6LqOF8INljO%2BxXwq49kfc%2B%2FIiY9Vg916N71pjsfjtqHvEYhxAonqQPOZDDzEyf0SBclivule&X-Amz-Signature=af1660baa0980495b03a3f98987f6711c523d88954f35010038bb73650e58461&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PXBRFH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIysQZcZrdnCQVR47c0ClFs2sZaRoqZ5jjLr4sUlnP5AiA6WVULrpBUtCk1O7pUtuJHl6nG2irubs9NSheGb5kzHiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEW393st0VY%2FdkKLGKtwD%2BjOwdYhiixDiJf6G8m9X0wTLIukRLu%2BUppsI8ktjlB5Hi0JoGsZa4Wb8UDZPQSbPLJIrrAT5mJR8gDJEuC0eDjTfSS55C9gs2i3PaYEh14gnRGH2K0Bz7uq535mVdhnwKas11UUwMxGL6NnrRuefHyn6VsqA%2FTwH1dSAAvUmz7%2F%2BF7um1KbYSQFNumB9JXWbV8YGYst8oKmNdtAuiiQNOrVOVGJTdrQZaHLgZ6geeOVSp0D%2BTZzJGePszW%2FS0S3cAb7x0X%2FFciKEjsoywSbTAUvgdl7vQc42okaQF3kj5b6KTUGqy6DYpwqRxIXD4LEOik7zCFDvnExmS5wVMYOOVltqw9R7QvQztl6atrcRa%2FVNlin7K1pjK1sNeOJ%2Fna3VCMHHcbRDK6%2FLmg2gaMFKa4Q%2FiE0yiAiO%2BU2U1bOQRtKfXb0WlsLb1N5ZVdfIT9VqjveCLN%2FZSPMx41rcLl7CbsFMUpYk4qAe4HFhtpwSi8%2F28%2BDfjqB16uyB07jsQH7%2BZOBlEdBtUjdkt%2Frot6A7E1CLN%2FioTzDk%2BafXjaqbtl%2FriqnjTLayTI%2FdcYAVNF5iINEoc386pwBNLZkvNi2QIu1mA09sHkoEjtevXfOTpajKeb4c1Rd6BSBSYn4wj%2Bb8wAY6pgEeTyVfssGTmIeLBDCycFfSUuvE%2BTeV3ZAKt4%2FX7GBXxWwYoQ8MHRfFtcY%2FtMux8SYWop6KIgqeqBm1j%2B2bhtIIY75NxIiaNt3KyQ2vUQgf0c2g0uDpgHsy4mXRtyjN1SVRNjnZaTpyHdrxHiTz9uWk6LqOF8INljO%2BxXwq49kfc%2B%2FIiY9Vg916N71pjsfjtqHvEYhxAonqQPOZDDzEyf0SBclivule&X-Amz-Signature=b867d03f48fe4b1c6eadccd038be63fdbe96a9828e3cf508069dadca0e9485d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PXBRFH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIysQZcZrdnCQVR47c0ClFs2sZaRoqZ5jjLr4sUlnP5AiA6WVULrpBUtCk1O7pUtuJHl6nG2irubs9NSheGb5kzHiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEW393st0VY%2FdkKLGKtwD%2BjOwdYhiixDiJf6G8m9X0wTLIukRLu%2BUppsI8ktjlB5Hi0JoGsZa4Wb8UDZPQSbPLJIrrAT5mJR8gDJEuC0eDjTfSS55C9gs2i3PaYEh14gnRGH2K0Bz7uq535mVdhnwKas11UUwMxGL6NnrRuefHyn6VsqA%2FTwH1dSAAvUmz7%2F%2BF7um1KbYSQFNumB9JXWbV8YGYst8oKmNdtAuiiQNOrVOVGJTdrQZaHLgZ6geeOVSp0D%2BTZzJGePszW%2FS0S3cAb7x0X%2FFciKEjsoywSbTAUvgdl7vQc42okaQF3kj5b6KTUGqy6DYpwqRxIXD4LEOik7zCFDvnExmS5wVMYOOVltqw9R7QvQztl6atrcRa%2FVNlin7K1pjK1sNeOJ%2Fna3VCMHHcbRDK6%2FLmg2gaMFKa4Q%2FiE0yiAiO%2BU2U1bOQRtKfXb0WlsLb1N5ZVdfIT9VqjveCLN%2FZSPMx41rcLl7CbsFMUpYk4qAe4HFhtpwSi8%2F28%2BDfjqB16uyB07jsQH7%2BZOBlEdBtUjdkt%2Frot6A7E1CLN%2FioTzDk%2BafXjaqbtl%2FriqnjTLayTI%2FdcYAVNF5iINEoc386pwBNLZkvNi2QIu1mA09sHkoEjtevXfOTpajKeb4c1Rd6BSBSYn4wj%2Bb8wAY6pgEeTyVfssGTmIeLBDCycFfSUuvE%2BTeV3ZAKt4%2FX7GBXxWwYoQ8MHRfFtcY%2FtMux8SYWop6KIgqeqBm1j%2B2bhtIIY75NxIiaNt3KyQ2vUQgf0c2g0uDpgHsy4mXRtyjN1SVRNjnZaTpyHdrxHiTz9uWk6LqOF8INljO%2BxXwq49kfc%2B%2FIiY9Vg916N71pjsfjtqHvEYhxAonqQPOZDDzEyf0SBclivule&X-Amz-Signature=9aef1a35199546c44ca66f42224768ee0bbb962f30832dab970e84293f577ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PXBRFH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIysQZcZrdnCQVR47c0ClFs2sZaRoqZ5jjLr4sUlnP5AiA6WVULrpBUtCk1O7pUtuJHl6nG2irubs9NSheGb5kzHiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEW393st0VY%2FdkKLGKtwD%2BjOwdYhiixDiJf6G8m9X0wTLIukRLu%2BUppsI8ktjlB5Hi0JoGsZa4Wb8UDZPQSbPLJIrrAT5mJR8gDJEuC0eDjTfSS55C9gs2i3PaYEh14gnRGH2K0Bz7uq535mVdhnwKas11UUwMxGL6NnrRuefHyn6VsqA%2FTwH1dSAAvUmz7%2F%2BF7um1KbYSQFNumB9JXWbV8YGYst8oKmNdtAuiiQNOrVOVGJTdrQZaHLgZ6geeOVSp0D%2BTZzJGePszW%2FS0S3cAb7x0X%2FFciKEjsoywSbTAUvgdl7vQc42okaQF3kj5b6KTUGqy6DYpwqRxIXD4LEOik7zCFDvnExmS5wVMYOOVltqw9R7QvQztl6atrcRa%2FVNlin7K1pjK1sNeOJ%2Fna3VCMHHcbRDK6%2FLmg2gaMFKa4Q%2FiE0yiAiO%2BU2U1bOQRtKfXb0WlsLb1N5ZVdfIT9VqjveCLN%2FZSPMx41rcLl7CbsFMUpYk4qAe4HFhtpwSi8%2F28%2BDfjqB16uyB07jsQH7%2BZOBlEdBtUjdkt%2Frot6A7E1CLN%2FioTzDk%2BafXjaqbtl%2FriqnjTLayTI%2FdcYAVNF5iINEoc386pwBNLZkvNi2QIu1mA09sHkoEjtevXfOTpajKeb4c1Rd6BSBSYn4wj%2Bb8wAY6pgEeTyVfssGTmIeLBDCycFfSUuvE%2BTeV3ZAKt4%2FX7GBXxWwYoQ8MHRfFtcY%2FtMux8SYWop6KIgqeqBm1j%2B2bhtIIY75NxIiaNt3KyQ2vUQgf0c2g0uDpgHsy4mXRtyjN1SVRNjnZaTpyHdrxHiTz9uWk6LqOF8INljO%2BxXwq49kfc%2B%2FIiY9Vg916N71pjsfjtqHvEYhxAonqQPOZDDzEyf0SBclivule&X-Amz-Signature=e5b49eb1d8f553801378c3f964dd4c2a67a9bc833c80d0c9efeae1e1c4babd10&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PXBRFH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIysQZcZrdnCQVR47c0ClFs2sZaRoqZ5jjLr4sUlnP5AiA6WVULrpBUtCk1O7pUtuJHl6nG2irubs9NSheGb5kzHiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEW393st0VY%2FdkKLGKtwD%2BjOwdYhiixDiJf6G8m9X0wTLIukRLu%2BUppsI8ktjlB5Hi0JoGsZa4Wb8UDZPQSbPLJIrrAT5mJR8gDJEuC0eDjTfSS55C9gs2i3PaYEh14gnRGH2K0Bz7uq535mVdhnwKas11UUwMxGL6NnrRuefHyn6VsqA%2FTwH1dSAAvUmz7%2F%2BF7um1KbYSQFNumB9JXWbV8YGYst8oKmNdtAuiiQNOrVOVGJTdrQZaHLgZ6geeOVSp0D%2BTZzJGePszW%2FS0S3cAb7x0X%2FFciKEjsoywSbTAUvgdl7vQc42okaQF3kj5b6KTUGqy6DYpwqRxIXD4LEOik7zCFDvnExmS5wVMYOOVltqw9R7QvQztl6atrcRa%2FVNlin7K1pjK1sNeOJ%2Fna3VCMHHcbRDK6%2FLmg2gaMFKa4Q%2FiE0yiAiO%2BU2U1bOQRtKfXb0WlsLb1N5ZVdfIT9VqjveCLN%2FZSPMx41rcLl7CbsFMUpYk4qAe4HFhtpwSi8%2F28%2BDfjqB16uyB07jsQH7%2BZOBlEdBtUjdkt%2Frot6A7E1CLN%2FioTzDk%2BafXjaqbtl%2FriqnjTLayTI%2FdcYAVNF5iINEoc386pwBNLZkvNi2QIu1mA09sHkoEjtevXfOTpajKeb4c1Rd6BSBSYn4wj%2Bb8wAY6pgEeTyVfssGTmIeLBDCycFfSUuvE%2BTeV3ZAKt4%2FX7GBXxWwYoQ8MHRfFtcY%2FtMux8SYWop6KIgqeqBm1j%2B2bhtIIY75NxIiaNt3KyQ2vUQgf0c2g0uDpgHsy4mXRtyjN1SVRNjnZaTpyHdrxHiTz9uWk6LqOF8INljO%2BxXwq49kfc%2B%2FIiY9Vg916N71pjsfjtqHvEYhxAonqQPOZDDzEyf0SBclivule&X-Amz-Signature=c94e6c17fffbd9106b11e093207a7703c905b1616980e562e3e0323a3d9db3a0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
