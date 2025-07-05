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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHO3VJZW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDgHy6Tx8Mba31SJ6huCC%2FzjH1qJMLJ%2FWTNpRQhAOCFdAIhAMFeGU2AjYq4Ney%2B6AIh3kGLNX3hA%2BJxb%2FGtlpBrCoz8Kv8DCD4QABoMNjM3NDIzMTgzODA1IgywnzFSEBE9%2BydSnUEq3AMtfVrVbojjM92Vy2WPutFxlMcyd4yyceiYiGe75TZAqtuIn4DxlujPTuVtZyeK3KcjgQTGAyf0JIjK62ELPhgpGTjiqyVeKGkDKn%2B8%2BV8nOSbTmH2XXWZX%2F1Vid1S%2FMS76GuKenKF6nBlwwhDSgpEmlv0dNbK6FupnSJSek%2BpEcobhT3idazMGxumUHI6jMuFtg3QAoTzQMBEJj1M%2FwHjtrcA9AIthhCr%2FJyVPI%2FeYxjN0RXZ%2FwQIYHsv%2BBuGMY1RMUhx1lLhdbxl5wjAWE5QaTXXTv9LvioBOVYSNbHu824NAzzK%2B9XgdvZD9jYffuJo1f7HXd47rV6273SULSx1eNv5r1Tn14EV3HnOGFhDYNMt80EwVWKN3nhXlA%2F50l8rbtXS8Tc%2BRAiww1SCveGBVklPCflNeLD7t1aiNJ1%2Fp0XpLmaoczG5afHBrvv9yL%2BezCf13L%2FmhEXEuspsSSg9hRs%2FKuPGwdEjbHxRLGN5kjojFQswJplg0LPl53z6%2FGowKPh0pXM61LpGupybD7xYcZUuG%2Fvuo0JHfuEp9hHImgSV4Nba0WDEHl8Xo5iJ%2FEOSM5wR7WFw9ebJMz%2BldvYttkanokIrwi6kcSW7WRtMdPFlv2uZyguSTNI%2FFFjDH5qLDBjqkATbxjwPXn9Uff1246gMIw5u2EoLZK3yUUXwxaawNf2bWDOk2mNYHzux9DOyismVAHMxNS6F5C36DsyBI6ongo8E0ACdsnmtFNoESVYQ1wORxj6x04FonSDMLqOtIRTxh3F9UCDAiqgnOJfXZL0glwCmxpNTH8KQVbd0wJhDHjHIAFSDbYRlVS2IZBFo0xknQA7SItbywZ08nHzJGQdofLF5kukKh&X-Amz-Signature=70f8e95e97b0077e452d88093fc2f5921d1a6efa935eadb15ec054e0f1c5065c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHO3VJZW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDgHy6Tx8Mba31SJ6huCC%2FzjH1qJMLJ%2FWTNpRQhAOCFdAIhAMFeGU2AjYq4Ney%2B6AIh3kGLNX3hA%2BJxb%2FGtlpBrCoz8Kv8DCD4QABoMNjM3NDIzMTgzODA1IgywnzFSEBE9%2BydSnUEq3AMtfVrVbojjM92Vy2WPutFxlMcyd4yyceiYiGe75TZAqtuIn4DxlujPTuVtZyeK3KcjgQTGAyf0JIjK62ELPhgpGTjiqyVeKGkDKn%2B8%2BV8nOSbTmH2XXWZX%2F1Vid1S%2FMS76GuKenKF6nBlwwhDSgpEmlv0dNbK6FupnSJSek%2BpEcobhT3idazMGxumUHI6jMuFtg3QAoTzQMBEJj1M%2FwHjtrcA9AIthhCr%2FJyVPI%2FeYxjN0RXZ%2FwQIYHsv%2BBuGMY1RMUhx1lLhdbxl5wjAWE5QaTXXTv9LvioBOVYSNbHu824NAzzK%2B9XgdvZD9jYffuJo1f7HXd47rV6273SULSx1eNv5r1Tn14EV3HnOGFhDYNMt80EwVWKN3nhXlA%2F50l8rbtXS8Tc%2BRAiww1SCveGBVklPCflNeLD7t1aiNJ1%2Fp0XpLmaoczG5afHBrvv9yL%2BezCf13L%2FmhEXEuspsSSg9hRs%2FKuPGwdEjbHxRLGN5kjojFQswJplg0LPl53z6%2FGowKPh0pXM61LpGupybD7xYcZUuG%2Fvuo0JHfuEp9hHImgSV4Nba0WDEHl8Xo5iJ%2FEOSM5wR7WFw9ebJMz%2BldvYttkanokIrwi6kcSW7WRtMdPFlv2uZyguSTNI%2FFFjDH5qLDBjqkATbxjwPXn9Uff1246gMIw5u2EoLZK3yUUXwxaawNf2bWDOk2mNYHzux9DOyismVAHMxNS6F5C36DsyBI6ongo8E0ACdsnmtFNoESVYQ1wORxj6x04FonSDMLqOtIRTxh3F9UCDAiqgnOJfXZL0glwCmxpNTH8KQVbd0wJhDHjHIAFSDbYRlVS2IZBFo0xknQA7SItbywZ08nHzJGQdofLF5kukKh&X-Amz-Signature=ece3be3cb57f8a699a280d4137435d4978e05c2b0dedc37c93a67d08c8fad2a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHO3VJZW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDgHy6Tx8Mba31SJ6huCC%2FzjH1qJMLJ%2FWTNpRQhAOCFdAIhAMFeGU2AjYq4Ney%2B6AIh3kGLNX3hA%2BJxb%2FGtlpBrCoz8Kv8DCD4QABoMNjM3NDIzMTgzODA1IgywnzFSEBE9%2BydSnUEq3AMtfVrVbojjM92Vy2WPutFxlMcyd4yyceiYiGe75TZAqtuIn4DxlujPTuVtZyeK3KcjgQTGAyf0JIjK62ELPhgpGTjiqyVeKGkDKn%2B8%2BV8nOSbTmH2XXWZX%2F1Vid1S%2FMS76GuKenKF6nBlwwhDSgpEmlv0dNbK6FupnSJSek%2BpEcobhT3idazMGxumUHI6jMuFtg3QAoTzQMBEJj1M%2FwHjtrcA9AIthhCr%2FJyVPI%2FeYxjN0RXZ%2FwQIYHsv%2BBuGMY1RMUhx1lLhdbxl5wjAWE5QaTXXTv9LvioBOVYSNbHu824NAzzK%2B9XgdvZD9jYffuJo1f7HXd47rV6273SULSx1eNv5r1Tn14EV3HnOGFhDYNMt80EwVWKN3nhXlA%2F50l8rbtXS8Tc%2BRAiww1SCveGBVklPCflNeLD7t1aiNJ1%2Fp0XpLmaoczG5afHBrvv9yL%2BezCf13L%2FmhEXEuspsSSg9hRs%2FKuPGwdEjbHxRLGN5kjojFQswJplg0LPl53z6%2FGowKPh0pXM61LpGupybD7xYcZUuG%2Fvuo0JHfuEp9hHImgSV4Nba0WDEHl8Xo5iJ%2FEOSM5wR7WFw9ebJMz%2BldvYttkanokIrwi6kcSW7WRtMdPFlv2uZyguSTNI%2FFFjDH5qLDBjqkATbxjwPXn9Uff1246gMIw5u2EoLZK3yUUXwxaawNf2bWDOk2mNYHzux9DOyismVAHMxNS6F5C36DsyBI6ongo8E0ACdsnmtFNoESVYQ1wORxj6x04FonSDMLqOtIRTxh3F9UCDAiqgnOJfXZL0glwCmxpNTH8KQVbd0wJhDHjHIAFSDbYRlVS2IZBFo0xknQA7SItbywZ08nHzJGQdofLF5kukKh&X-Amz-Signature=ea29194b45c0c14d91d9665ffb3a3fe8624012e968d496b0dfefbeb59f1109a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHO3VJZW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDgHy6Tx8Mba31SJ6huCC%2FzjH1qJMLJ%2FWTNpRQhAOCFdAIhAMFeGU2AjYq4Ney%2B6AIh3kGLNX3hA%2BJxb%2FGtlpBrCoz8Kv8DCD4QABoMNjM3NDIzMTgzODA1IgywnzFSEBE9%2BydSnUEq3AMtfVrVbojjM92Vy2WPutFxlMcyd4yyceiYiGe75TZAqtuIn4DxlujPTuVtZyeK3KcjgQTGAyf0JIjK62ELPhgpGTjiqyVeKGkDKn%2B8%2BV8nOSbTmH2XXWZX%2F1Vid1S%2FMS76GuKenKF6nBlwwhDSgpEmlv0dNbK6FupnSJSek%2BpEcobhT3idazMGxumUHI6jMuFtg3QAoTzQMBEJj1M%2FwHjtrcA9AIthhCr%2FJyVPI%2FeYxjN0RXZ%2FwQIYHsv%2BBuGMY1RMUhx1lLhdbxl5wjAWE5QaTXXTv9LvioBOVYSNbHu824NAzzK%2B9XgdvZD9jYffuJo1f7HXd47rV6273SULSx1eNv5r1Tn14EV3HnOGFhDYNMt80EwVWKN3nhXlA%2F50l8rbtXS8Tc%2BRAiww1SCveGBVklPCflNeLD7t1aiNJ1%2Fp0XpLmaoczG5afHBrvv9yL%2BezCf13L%2FmhEXEuspsSSg9hRs%2FKuPGwdEjbHxRLGN5kjojFQswJplg0LPl53z6%2FGowKPh0pXM61LpGupybD7xYcZUuG%2Fvuo0JHfuEp9hHImgSV4Nba0WDEHl8Xo5iJ%2FEOSM5wR7WFw9ebJMz%2BldvYttkanokIrwi6kcSW7WRtMdPFlv2uZyguSTNI%2FFFjDH5qLDBjqkATbxjwPXn9Uff1246gMIw5u2EoLZK3yUUXwxaawNf2bWDOk2mNYHzux9DOyismVAHMxNS6F5C36DsyBI6ongo8E0ACdsnmtFNoESVYQ1wORxj6x04FonSDMLqOtIRTxh3F9UCDAiqgnOJfXZL0glwCmxpNTH8KQVbd0wJhDHjHIAFSDbYRlVS2IZBFo0xknQA7SItbywZ08nHzJGQdofLF5kukKh&X-Amz-Signature=7e43d6e3d4265ed58868a0463d59743b923f8ee51f352311dc3681ef43698560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHO3VJZW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDgHy6Tx8Mba31SJ6huCC%2FzjH1qJMLJ%2FWTNpRQhAOCFdAIhAMFeGU2AjYq4Ney%2B6AIh3kGLNX3hA%2BJxb%2FGtlpBrCoz8Kv8DCD4QABoMNjM3NDIzMTgzODA1IgywnzFSEBE9%2BydSnUEq3AMtfVrVbojjM92Vy2WPutFxlMcyd4yyceiYiGe75TZAqtuIn4DxlujPTuVtZyeK3KcjgQTGAyf0JIjK62ELPhgpGTjiqyVeKGkDKn%2B8%2BV8nOSbTmH2XXWZX%2F1Vid1S%2FMS76GuKenKF6nBlwwhDSgpEmlv0dNbK6FupnSJSek%2BpEcobhT3idazMGxumUHI6jMuFtg3QAoTzQMBEJj1M%2FwHjtrcA9AIthhCr%2FJyVPI%2FeYxjN0RXZ%2FwQIYHsv%2BBuGMY1RMUhx1lLhdbxl5wjAWE5QaTXXTv9LvioBOVYSNbHu824NAzzK%2B9XgdvZD9jYffuJo1f7HXd47rV6273SULSx1eNv5r1Tn14EV3HnOGFhDYNMt80EwVWKN3nhXlA%2F50l8rbtXS8Tc%2BRAiww1SCveGBVklPCflNeLD7t1aiNJ1%2Fp0XpLmaoczG5afHBrvv9yL%2BezCf13L%2FmhEXEuspsSSg9hRs%2FKuPGwdEjbHxRLGN5kjojFQswJplg0LPl53z6%2FGowKPh0pXM61LpGupybD7xYcZUuG%2Fvuo0JHfuEp9hHImgSV4Nba0WDEHl8Xo5iJ%2FEOSM5wR7WFw9ebJMz%2BldvYttkanokIrwi6kcSW7WRtMdPFlv2uZyguSTNI%2FFFjDH5qLDBjqkATbxjwPXn9Uff1246gMIw5u2EoLZK3yUUXwxaawNf2bWDOk2mNYHzux9DOyismVAHMxNS6F5C36DsyBI6ongo8E0ACdsnmtFNoESVYQ1wORxj6x04FonSDMLqOtIRTxh3F9UCDAiqgnOJfXZL0glwCmxpNTH8KQVbd0wJhDHjHIAFSDbYRlVS2IZBFo0xknQA7SItbywZ08nHzJGQdofLF5kukKh&X-Amz-Signature=94acd4a3985409f6dff00edbb4c9473e0484f5f6409a5088e2ef1f88dd546734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHO3VJZW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDgHy6Tx8Mba31SJ6huCC%2FzjH1qJMLJ%2FWTNpRQhAOCFdAIhAMFeGU2AjYq4Ney%2B6AIh3kGLNX3hA%2BJxb%2FGtlpBrCoz8Kv8DCD4QABoMNjM3NDIzMTgzODA1IgywnzFSEBE9%2BydSnUEq3AMtfVrVbojjM92Vy2WPutFxlMcyd4yyceiYiGe75TZAqtuIn4DxlujPTuVtZyeK3KcjgQTGAyf0JIjK62ELPhgpGTjiqyVeKGkDKn%2B8%2BV8nOSbTmH2XXWZX%2F1Vid1S%2FMS76GuKenKF6nBlwwhDSgpEmlv0dNbK6FupnSJSek%2BpEcobhT3idazMGxumUHI6jMuFtg3QAoTzQMBEJj1M%2FwHjtrcA9AIthhCr%2FJyVPI%2FeYxjN0RXZ%2FwQIYHsv%2BBuGMY1RMUhx1lLhdbxl5wjAWE5QaTXXTv9LvioBOVYSNbHu824NAzzK%2B9XgdvZD9jYffuJo1f7HXd47rV6273SULSx1eNv5r1Tn14EV3HnOGFhDYNMt80EwVWKN3nhXlA%2F50l8rbtXS8Tc%2BRAiww1SCveGBVklPCflNeLD7t1aiNJ1%2Fp0XpLmaoczG5afHBrvv9yL%2BezCf13L%2FmhEXEuspsSSg9hRs%2FKuPGwdEjbHxRLGN5kjojFQswJplg0LPl53z6%2FGowKPh0pXM61LpGupybD7xYcZUuG%2Fvuo0JHfuEp9hHImgSV4Nba0WDEHl8Xo5iJ%2FEOSM5wR7WFw9ebJMz%2BldvYttkanokIrwi6kcSW7WRtMdPFlv2uZyguSTNI%2FFFjDH5qLDBjqkATbxjwPXn9Uff1246gMIw5u2EoLZK3yUUXwxaawNf2bWDOk2mNYHzux9DOyismVAHMxNS6F5C36DsyBI6ongo8E0ACdsnmtFNoESVYQ1wORxj6x04FonSDMLqOtIRTxh3F9UCDAiqgnOJfXZL0glwCmxpNTH8KQVbd0wJhDHjHIAFSDbYRlVS2IZBFo0xknQA7SItbywZ08nHzJGQdofLF5kukKh&X-Amz-Signature=b9ef9728ffbe3cec1754fd0c13a4a6b1064bee5a5072d676ebc18281dc5cb4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHO3VJZW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDgHy6Tx8Mba31SJ6huCC%2FzjH1qJMLJ%2FWTNpRQhAOCFdAIhAMFeGU2AjYq4Ney%2B6AIh3kGLNX3hA%2BJxb%2FGtlpBrCoz8Kv8DCD4QABoMNjM3NDIzMTgzODA1IgywnzFSEBE9%2BydSnUEq3AMtfVrVbojjM92Vy2WPutFxlMcyd4yyceiYiGe75TZAqtuIn4DxlujPTuVtZyeK3KcjgQTGAyf0JIjK62ELPhgpGTjiqyVeKGkDKn%2B8%2BV8nOSbTmH2XXWZX%2F1Vid1S%2FMS76GuKenKF6nBlwwhDSgpEmlv0dNbK6FupnSJSek%2BpEcobhT3idazMGxumUHI6jMuFtg3QAoTzQMBEJj1M%2FwHjtrcA9AIthhCr%2FJyVPI%2FeYxjN0RXZ%2FwQIYHsv%2BBuGMY1RMUhx1lLhdbxl5wjAWE5QaTXXTv9LvioBOVYSNbHu824NAzzK%2B9XgdvZD9jYffuJo1f7HXd47rV6273SULSx1eNv5r1Tn14EV3HnOGFhDYNMt80EwVWKN3nhXlA%2F50l8rbtXS8Tc%2BRAiww1SCveGBVklPCflNeLD7t1aiNJ1%2Fp0XpLmaoczG5afHBrvv9yL%2BezCf13L%2FmhEXEuspsSSg9hRs%2FKuPGwdEjbHxRLGN5kjojFQswJplg0LPl53z6%2FGowKPh0pXM61LpGupybD7xYcZUuG%2Fvuo0JHfuEp9hHImgSV4Nba0WDEHl8Xo5iJ%2FEOSM5wR7WFw9ebJMz%2BldvYttkanokIrwi6kcSW7WRtMdPFlv2uZyguSTNI%2FFFjDH5qLDBjqkATbxjwPXn9Uff1246gMIw5u2EoLZK3yUUXwxaawNf2bWDOk2mNYHzux9DOyismVAHMxNS6F5C36DsyBI6ongo8E0ACdsnmtFNoESVYQ1wORxj6x04FonSDMLqOtIRTxh3F9UCDAiqgnOJfXZL0glwCmxpNTH8KQVbd0wJhDHjHIAFSDbYRlVS2IZBFo0xknQA7SItbywZ08nHzJGQdofLF5kukKh&X-Amz-Signature=64f0ee53e499a55c48e210d7188df7f77c268269e2cfd11010bf9f2cdb4ce8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
