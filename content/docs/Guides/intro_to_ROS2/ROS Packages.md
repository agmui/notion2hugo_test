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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUFF2QYJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIApVhJYMnej3uSNx6EvMijV0b5pyNRnZqMQuNphmNWR%2FAiEAz2%2FMqCGsTqJr4OAJI1dnNGHfnbLePQy6PtV3RRBxO6cqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPej3oN60SwtWVkvBSrcAxczFYpcPxE3Twtg0UF9s6GfOryoRnylz1bf%2FCn%2BXsUhaLEsKFXm6plC4axJQZVCRorcyYFX2tqPVVgxkFQb7OUNJ5pp9Y3P%2FbFXWt5reFIRZGwcb4p1pniBGcogk85cIoccIbfSqhGx3TQ7JMO%2FDDHuCj3oxiFMkSBx%2BHm4svUjm%2FkjBo2wKZQjsjpM6yqV84Wts6jZ3udD2hZiHi1%2B01oW8V8QxHjPnhYnfoX5x4nmFY5WrSt0DHfFDSvVz2ff2CIaZNbnO1wPpuVLepRNmuBxVGopMifwMwIwe4tper4j1E6qcyxMAcbMA7AwSVkdQ09%2FMBWbhgzfWiCwOvCLgz6MOBfbpViv5EEpnKwhDaIdhl%2FEg%2FimyjRpN9A4HCOh1BRrXjm3Ffn3rDwqPbf7YxWo76%2BQ07gDtfhQmbNV4Zw%2BuJNxOHlr%2BoUVMevJSY7ec17%2FQOP%2FwYTD4eIdftdvWSH%2FFDwRy7ySbbWRmyHhHSZaBIlq%2Fc%2FswzwWjMN140u8XxpzTfGt222dC86wsXxbHksVy2B%2Fv5wr%2FfW%2BxY%2BjRRi4aPpmxvfAri7neYQLsjtT5C4pOF1C6tUBvOvqS%2FCftpk4gFJHUY4BqcVA%2Fw%2ByvypYuDvWkk2F8syWatx5MJvY874GOqUBJtYJ%2BPEhl7vV1gJhohCmGfbd7s2kU6TwpvjUTfojYBID07ZGto4WmC7A5H2bcYNMn5mzVUe6F82Mmw3X34rzVskKMgpVQ21eI8lc9iJSKwGppqWWIFS3U7DTJuOzvzmRDUEjOZubPIMtoWZiZS4Czcx0W%2Bt6kro2%2F6XzpQ2TpWnLOaJCBkK4m6%2BLNwOqPd60I%2F55Xp3SpUN9Zc2wpPaJsuT8Ykjp&X-Amz-Signature=4832a7c3c2a187e1bce27734a774dfbe371896b855022c694f205ed0e0934dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUFF2QYJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIApVhJYMnej3uSNx6EvMijV0b5pyNRnZqMQuNphmNWR%2FAiEAz2%2FMqCGsTqJr4OAJI1dnNGHfnbLePQy6PtV3RRBxO6cqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPej3oN60SwtWVkvBSrcAxczFYpcPxE3Twtg0UF9s6GfOryoRnylz1bf%2FCn%2BXsUhaLEsKFXm6plC4axJQZVCRorcyYFX2tqPVVgxkFQb7OUNJ5pp9Y3P%2FbFXWt5reFIRZGwcb4p1pniBGcogk85cIoccIbfSqhGx3TQ7JMO%2FDDHuCj3oxiFMkSBx%2BHm4svUjm%2FkjBo2wKZQjsjpM6yqV84Wts6jZ3udD2hZiHi1%2B01oW8V8QxHjPnhYnfoX5x4nmFY5WrSt0DHfFDSvVz2ff2CIaZNbnO1wPpuVLepRNmuBxVGopMifwMwIwe4tper4j1E6qcyxMAcbMA7AwSVkdQ09%2FMBWbhgzfWiCwOvCLgz6MOBfbpViv5EEpnKwhDaIdhl%2FEg%2FimyjRpN9A4HCOh1BRrXjm3Ffn3rDwqPbf7YxWo76%2BQ07gDtfhQmbNV4Zw%2BuJNxOHlr%2BoUVMevJSY7ec17%2FQOP%2FwYTD4eIdftdvWSH%2FFDwRy7ySbbWRmyHhHSZaBIlq%2Fc%2FswzwWjMN140u8XxpzTfGt222dC86wsXxbHksVy2B%2Fv5wr%2FfW%2BxY%2BjRRi4aPpmxvfAri7neYQLsjtT5C4pOF1C6tUBvOvqS%2FCftpk4gFJHUY4BqcVA%2Fw%2ByvypYuDvWkk2F8syWatx5MJvY874GOqUBJtYJ%2BPEhl7vV1gJhohCmGfbd7s2kU6TwpvjUTfojYBID07ZGto4WmC7A5H2bcYNMn5mzVUe6F82Mmw3X34rzVskKMgpVQ21eI8lc9iJSKwGppqWWIFS3U7DTJuOzvzmRDUEjOZubPIMtoWZiZS4Czcx0W%2Bt6kro2%2F6XzpQ2TpWnLOaJCBkK4m6%2BLNwOqPd60I%2F55Xp3SpUN9Zc2wpPaJsuT8Ykjp&X-Amz-Signature=028d1e8dc8a74050119f6bdf707cd1ae62742729b21663ffbcc92b2c5cb8551d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUFF2QYJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIApVhJYMnej3uSNx6EvMijV0b5pyNRnZqMQuNphmNWR%2FAiEAz2%2FMqCGsTqJr4OAJI1dnNGHfnbLePQy6PtV3RRBxO6cqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPej3oN60SwtWVkvBSrcAxczFYpcPxE3Twtg0UF9s6GfOryoRnylz1bf%2FCn%2BXsUhaLEsKFXm6plC4axJQZVCRorcyYFX2tqPVVgxkFQb7OUNJ5pp9Y3P%2FbFXWt5reFIRZGwcb4p1pniBGcogk85cIoccIbfSqhGx3TQ7JMO%2FDDHuCj3oxiFMkSBx%2BHm4svUjm%2FkjBo2wKZQjsjpM6yqV84Wts6jZ3udD2hZiHi1%2B01oW8V8QxHjPnhYnfoX5x4nmFY5WrSt0DHfFDSvVz2ff2CIaZNbnO1wPpuVLepRNmuBxVGopMifwMwIwe4tper4j1E6qcyxMAcbMA7AwSVkdQ09%2FMBWbhgzfWiCwOvCLgz6MOBfbpViv5EEpnKwhDaIdhl%2FEg%2FimyjRpN9A4HCOh1BRrXjm3Ffn3rDwqPbf7YxWo76%2BQ07gDtfhQmbNV4Zw%2BuJNxOHlr%2BoUVMevJSY7ec17%2FQOP%2FwYTD4eIdftdvWSH%2FFDwRy7ySbbWRmyHhHSZaBIlq%2Fc%2FswzwWjMN140u8XxpzTfGt222dC86wsXxbHksVy2B%2Fv5wr%2FfW%2BxY%2BjRRi4aPpmxvfAri7neYQLsjtT5C4pOF1C6tUBvOvqS%2FCftpk4gFJHUY4BqcVA%2Fw%2ByvypYuDvWkk2F8syWatx5MJvY874GOqUBJtYJ%2BPEhl7vV1gJhohCmGfbd7s2kU6TwpvjUTfojYBID07ZGto4WmC7A5H2bcYNMn5mzVUe6F82Mmw3X34rzVskKMgpVQ21eI8lc9iJSKwGppqWWIFS3U7DTJuOzvzmRDUEjOZubPIMtoWZiZS4Czcx0W%2Bt6kro2%2F6XzpQ2TpWnLOaJCBkK4m6%2BLNwOqPd60I%2F55Xp3SpUN9Zc2wpPaJsuT8Ykjp&X-Amz-Signature=fd4086e5dbf3b2498aae5c2fbc47ecc18d3501d23a9aa858c469dced639a3f43&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUFF2QYJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIApVhJYMnej3uSNx6EvMijV0b5pyNRnZqMQuNphmNWR%2FAiEAz2%2FMqCGsTqJr4OAJI1dnNGHfnbLePQy6PtV3RRBxO6cqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPej3oN60SwtWVkvBSrcAxczFYpcPxE3Twtg0UF9s6GfOryoRnylz1bf%2FCn%2BXsUhaLEsKFXm6plC4axJQZVCRorcyYFX2tqPVVgxkFQb7OUNJ5pp9Y3P%2FbFXWt5reFIRZGwcb4p1pniBGcogk85cIoccIbfSqhGx3TQ7JMO%2FDDHuCj3oxiFMkSBx%2BHm4svUjm%2FkjBo2wKZQjsjpM6yqV84Wts6jZ3udD2hZiHi1%2B01oW8V8QxHjPnhYnfoX5x4nmFY5WrSt0DHfFDSvVz2ff2CIaZNbnO1wPpuVLepRNmuBxVGopMifwMwIwe4tper4j1E6qcyxMAcbMA7AwSVkdQ09%2FMBWbhgzfWiCwOvCLgz6MOBfbpViv5EEpnKwhDaIdhl%2FEg%2FimyjRpN9A4HCOh1BRrXjm3Ffn3rDwqPbf7YxWo76%2BQ07gDtfhQmbNV4Zw%2BuJNxOHlr%2BoUVMevJSY7ec17%2FQOP%2FwYTD4eIdftdvWSH%2FFDwRy7ySbbWRmyHhHSZaBIlq%2Fc%2FswzwWjMN140u8XxpzTfGt222dC86wsXxbHksVy2B%2Fv5wr%2FfW%2BxY%2BjRRi4aPpmxvfAri7neYQLsjtT5C4pOF1C6tUBvOvqS%2FCftpk4gFJHUY4BqcVA%2Fw%2ByvypYuDvWkk2F8syWatx5MJvY874GOqUBJtYJ%2BPEhl7vV1gJhohCmGfbd7s2kU6TwpvjUTfojYBID07ZGto4WmC7A5H2bcYNMn5mzVUe6F82Mmw3X34rzVskKMgpVQ21eI8lc9iJSKwGppqWWIFS3U7DTJuOzvzmRDUEjOZubPIMtoWZiZS4Czcx0W%2Bt6kro2%2F6XzpQ2TpWnLOaJCBkK4m6%2BLNwOqPd60I%2F55Xp3SpUN9Zc2wpPaJsuT8Ykjp&X-Amz-Signature=53221a2c117167b88233eaa15c6841f0b5120673c56e4680667b89de9a93d4b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUFF2QYJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIApVhJYMnej3uSNx6EvMijV0b5pyNRnZqMQuNphmNWR%2FAiEAz2%2FMqCGsTqJr4OAJI1dnNGHfnbLePQy6PtV3RRBxO6cqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPej3oN60SwtWVkvBSrcAxczFYpcPxE3Twtg0UF9s6GfOryoRnylz1bf%2FCn%2BXsUhaLEsKFXm6plC4axJQZVCRorcyYFX2tqPVVgxkFQb7OUNJ5pp9Y3P%2FbFXWt5reFIRZGwcb4p1pniBGcogk85cIoccIbfSqhGx3TQ7JMO%2FDDHuCj3oxiFMkSBx%2BHm4svUjm%2FkjBo2wKZQjsjpM6yqV84Wts6jZ3udD2hZiHi1%2B01oW8V8QxHjPnhYnfoX5x4nmFY5WrSt0DHfFDSvVz2ff2CIaZNbnO1wPpuVLepRNmuBxVGopMifwMwIwe4tper4j1E6qcyxMAcbMA7AwSVkdQ09%2FMBWbhgzfWiCwOvCLgz6MOBfbpViv5EEpnKwhDaIdhl%2FEg%2FimyjRpN9A4HCOh1BRrXjm3Ffn3rDwqPbf7YxWo76%2BQ07gDtfhQmbNV4Zw%2BuJNxOHlr%2BoUVMevJSY7ec17%2FQOP%2FwYTD4eIdftdvWSH%2FFDwRy7ySbbWRmyHhHSZaBIlq%2Fc%2FswzwWjMN140u8XxpzTfGt222dC86wsXxbHksVy2B%2Fv5wr%2FfW%2BxY%2BjRRi4aPpmxvfAri7neYQLsjtT5C4pOF1C6tUBvOvqS%2FCftpk4gFJHUY4BqcVA%2Fw%2ByvypYuDvWkk2F8syWatx5MJvY874GOqUBJtYJ%2BPEhl7vV1gJhohCmGfbd7s2kU6TwpvjUTfojYBID07ZGto4WmC7A5H2bcYNMn5mzVUe6F82Mmw3X34rzVskKMgpVQ21eI8lc9iJSKwGppqWWIFS3U7DTJuOzvzmRDUEjOZubPIMtoWZiZS4Czcx0W%2Bt6kro2%2F6XzpQ2TpWnLOaJCBkK4m6%2BLNwOqPd60I%2F55Xp3SpUN9Zc2wpPaJsuT8Ykjp&X-Amz-Signature=f204f802dff1990c3e3b18d5188c3afe64deabe7e21d9fefa68ae109fa7ebef0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUFF2QYJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIApVhJYMnej3uSNx6EvMijV0b5pyNRnZqMQuNphmNWR%2FAiEAz2%2FMqCGsTqJr4OAJI1dnNGHfnbLePQy6PtV3RRBxO6cqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPej3oN60SwtWVkvBSrcAxczFYpcPxE3Twtg0UF9s6GfOryoRnylz1bf%2FCn%2BXsUhaLEsKFXm6plC4axJQZVCRorcyYFX2tqPVVgxkFQb7OUNJ5pp9Y3P%2FbFXWt5reFIRZGwcb4p1pniBGcogk85cIoccIbfSqhGx3TQ7JMO%2FDDHuCj3oxiFMkSBx%2BHm4svUjm%2FkjBo2wKZQjsjpM6yqV84Wts6jZ3udD2hZiHi1%2B01oW8V8QxHjPnhYnfoX5x4nmFY5WrSt0DHfFDSvVz2ff2CIaZNbnO1wPpuVLepRNmuBxVGopMifwMwIwe4tper4j1E6qcyxMAcbMA7AwSVkdQ09%2FMBWbhgzfWiCwOvCLgz6MOBfbpViv5EEpnKwhDaIdhl%2FEg%2FimyjRpN9A4HCOh1BRrXjm3Ffn3rDwqPbf7YxWo76%2BQ07gDtfhQmbNV4Zw%2BuJNxOHlr%2BoUVMevJSY7ec17%2FQOP%2FwYTD4eIdftdvWSH%2FFDwRy7ySbbWRmyHhHSZaBIlq%2Fc%2FswzwWjMN140u8XxpzTfGt222dC86wsXxbHksVy2B%2Fv5wr%2FfW%2BxY%2BjRRi4aPpmxvfAri7neYQLsjtT5C4pOF1C6tUBvOvqS%2FCftpk4gFJHUY4BqcVA%2Fw%2ByvypYuDvWkk2F8syWatx5MJvY874GOqUBJtYJ%2BPEhl7vV1gJhohCmGfbd7s2kU6TwpvjUTfojYBID07ZGto4WmC7A5H2bcYNMn5mzVUe6F82Mmw3X34rzVskKMgpVQ21eI8lc9iJSKwGppqWWIFS3U7DTJuOzvzmRDUEjOZubPIMtoWZiZS4Czcx0W%2Bt6kro2%2F6XzpQ2TpWnLOaJCBkK4m6%2BLNwOqPd60I%2F55Xp3SpUN9Zc2wpPaJsuT8Ykjp&X-Amz-Signature=1615ccb5a7b079e2254c77203e2d6230ee282d11c196bf8ec8c72a838353ad0e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUFF2QYJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIApVhJYMnej3uSNx6EvMijV0b5pyNRnZqMQuNphmNWR%2FAiEAz2%2FMqCGsTqJr4OAJI1dnNGHfnbLePQy6PtV3RRBxO6cqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPej3oN60SwtWVkvBSrcAxczFYpcPxE3Twtg0UF9s6GfOryoRnylz1bf%2FCn%2BXsUhaLEsKFXm6plC4axJQZVCRorcyYFX2tqPVVgxkFQb7OUNJ5pp9Y3P%2FbFXWt5reFIRZGwcb4p1pniBGcogk85cIoccIbfSqhGx3TQ7JMO%2FDDHuCj3oxiFMkSBx%2BHm4svUjm%2FkjBo2wKZQjsjpM6yqV84Wts6jZ3udD2hZiHi1%2B01oW8V8QxHjPnhYnfoX5x4nmFY5WrSt0DHfFDSvVz2ff2CIaZNbnO1wPpuVLepRNmuBxVGopMifwMwIwe4tper4j1E6qcyxMAcbMA7AwSVkdQ09%2FMBWbhgzfWiCwOvCLgz6MOBfbpViv5EEpnKwhDaIdhl%2FEg%2FimyjRpN9A4HCOh1BRrXjm3Ffn3rDwqPbf7YxWo76%2BQ07gDtfhQmbNV4Zw%2BuJNxOHlr%2BoUVMevJSY7ec17%2FQOP%2FwYTD4eIdftdvWSH%2FFDwRy7ySbbWRmyHhHSZaBIlq%2Fc%2FswzwWjMN140u8XxpzTfGt222dC86wsXxbHksVy2B%2Fv5wr%2FfW%2BxY%2BjRRi4aPpmxvfAri7neYQLsjtT5C4pOF1C6tUBvOvqS%2FCftpk4gFJHUY4BqcVA%2Fw%2ByvypYuDvWkk2F8syWatx5MJvY874GOqUBJtYJ%2BPEhl7vV1gJhohCmGfbd7s2kU6TwpvjUTfojYBID07ZGto4WmC7A5H2bcYNMn5mzVUe6F82Mmw3X34rzVskKMgpVQ21eI8lc9iJSKwGppqWWIFS3U7DTJuOzvzmRDUEjOZubPIMtoWZiZS4Czcx0W%2Bt6kro2%2F6XzpQ2TpWnLOaJCBkK4m6%2BLNwOqPd60I%2F55Xp3SpUN9Zc2wpPaJsuT8Ykjp&X-Amz-Signature=836ffb9e59b0ce67313c96f6cd1feda58ae894286e9beb174f9c75f8118c1f01&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
