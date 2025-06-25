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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSMRXX3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF%2BToRj%2F2Yynj3myZGwJTy%2Fgw7%2BloMt3YKBUpAIahXDnAiEAmxY24OIgJBHxquRxqrXtP1PKos%2FnB3kRrwAVbOxLW7Iq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFuswwddxoVgzVmquircAxlJ%2BfVUCwb6bOArc%2F70oQ53xuHMV3W5Hw2YsK4HL3I31N4jdoc5m29GGMWlhZ20cAsylLyXHTvR1HZ7XpVrO1PAlk5ueZruR1vaTY2nwTo%2BdPuptAhHO%2BGivn1iajSU4%2Fn4irXN9ENY%2BPK8QmuvDuSQDrpT2jRx6DL2bi1lkjEoOPZPjYqnItqPcynh7OwMZd7TH4SSCAVG4Ll33zKfFZGwnfXWwJKw360rCNoKYNuycpm8%2B%2B5uL9LoD%2FYVrcOENZjD6SXnQzPxIw5xJU5h0c7%2FATK9pWywlIaYbrK3zL9oqtg72RTxjwCEew9p3y9XaPkz3c79iKi%2Br5gnB%2FwlhstZD9SudYNT2oFaUfuQcUgn0fMy22%2F%2FcsBcr7KTp9sgSvobIz20haVE6S9jR5FABOQoB637MjHmA3bNSlvlDzdOtP%2FVq2tYZ%2FNG8guhELoNFMQBSImK7HFAFGuTik%2Fhbm4SAqSesJ9ZjRQHd9mf2kt1YwaNW%2FBvC8HaIBodGItYFmnkaVTK7CdjcCDcdOg%2BLttOl3lZYYWYhb19Y9mUEfz%2BoZT59CEm8PcCIZKKKRP2FkPLJalv%2F7T8bE1u6YRPqWhQHpNAgUXf%2B92BRfzEdo1LzMP1PYelMXV%2BP49%2BMKfC7cIGOqUBhHVED%2F3nGSBnmQJdFy98Sl3iCTAyMHTwjR09%2FPCLtVbRGY%2BeG5ilqX0IKiu06GfCkx%2F2SpY6rE5YXfUSU5pEA%2BxGiZS3W2HpNBJVpi1kpo%2Bjx6LGWOY%2FpDMr1e8GD%2BlBST1HQBGKfcjmt4by791FdIGGIKdnfQrHL7HqjCp7UvtgxpTD%2BQnD7tkZ0DXXLY%2Boos86nCOTiHC4yxnfsGzlzsqAb71h&X-Amz-Signature=1832e425463574573133fbf3fd38730370dc3ee10d3f7d4140835d772f1d226e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSMRXX3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF%2BToRj%2F2Yynj3myZGwJTy%2Fgw7%2BloMt3YKBUpAIahXDnAiEAmxY24OIgJBHxquRxqrXtP1PKos%2FnB3kRrwAVbOxLW7Iq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFuswwddxoVgzVmquircAxlJ%2BfVUCwb6bOArc%2F70oQ53xuHMV3W5Hw2YsK4HL3I31N4jdoc5m29GGMWlhZ20cAsylLyXHTvR1HZ7XpVrO1PAlk5ueZruR1vaTY2nwTo%2BdPuptAhHO%2BGivn1iajSU4%2Fn4irXN9ENY%2BPK8QmuvDuSQDrpT2jRx6DL2bi1lkjEoOPZPjYqnItqPcynh7OwMZd7TH4SSCAVG4Ll33zKfFZGwnfXWwJKw360rCNoKYNuycpm8%2B%2B5uL9LoD%2FYVrcOENZjD6SXnQzPxIw5xJU5h0c7%2FATK9pWywlIaYbrK3zL9oqtg72RTxjwCEew9p3y9XaPkz3c79iKi%2Br5gnB%2FwlhstZD9SudYNT2oFaUfuQcUgn0fMy22%2F%2FcsBcr7KTp9sgSvobIz20haVE6S9jR5FABOQoB637MjHmA3bNSlvlDzdOtP%2FVq2tYZ%2FNG8guhELoNFMQBSImK7HFAFGuTik%2Fhbm4SAqSesJ9ZjRQHd9mf2kt1YwaNW%2FBvC8HaIBodGItYFmnkaVTK7CdjcCDcdOg%2BLttOl3lZYYWYhb19Y9mUEfz%2BoZT59CEm8PcCIZKKKRP2FkPLJalv%2F7T8bE1u6YRPqWhQHpNAgUXf%2B92BRfzEdo1LzMP1PYelMXV%2BP49%2BMKfC7cIGOqUBhHVED%2F3nGSBnmQJdFy98Sl3iCTAyMHTwjR09%2FPCLtVbRGY%2BeG5ilqX0IKiu06GfCkx%2F2SpY6rE5YXfUSU5pEA%2BxGiZS3W2HpNBJVpi1kpo%2Bjx6LGWOY%2FpDMr1e8GD%2BlBST1HQBGKfcjmt4by791FdIGGIKdnfQrHL7HqjCp7UvtgxpTD%2BQnD7tkZ0DXXLY%2Boos86nCOTiHC4yxnfsGzlzsqAb71h&X-Amz-Signature=4856e50c9a67bc6caca925eb0fc835b6761dfc22a573497975500ffd2c9c12e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSMRXX3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF%2BToRj%2F2Yynj3myZGwJTy%2Fgw7%2BloMt3YKBUpAIahXDnAiEAmxY24OIgJBHxquRxqrXtP1PKos%2FnB3kRrwAVbOxLW7Iq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFuswwddxoVgzVmquircAxlJ%2BfVUCwb6bOArc%2F70oQ53xuHMV3W5Hw2YsK4HL3I31N4jdoc5m29GGMWlhZ20cAsylLyXHTvR1HZ7XpVrO1PAlk5ueZruR1vaTY2nwTo%2BdPuptAhHO%2BGivn1iajSU4%2Fn4irXN9ENY%2BPK8QmuvDuSQDrpT2jRx6DL2bi1lkjEoOPZPjYqnItqPcynh7OwMZd7TH4SSCAVG4Ll33zKfFZGwnfXWwJKw360rCNoKYNuycpm8%2B%2B5uL9LoD%2FYVrcOENZjD6SXnQzPxIw5xJU5h0c7%2FATK9pWywlIaYbrK3zL9oqtg72RTxjwCEew9p3y9XaPkz3c79iKi%2Br5gnB%2FwlhstZD9SudYNT2oFaUfuQcUgn0fMy22%2F%2FcsBcr7KTp9sgSvobIz20haVE6S9jR5FABOQoB637MjHmA3bNSlvlDzdOtP%2FVq2tYZ%2FNG8guhELoNFMQBSImK7HFAFGuTik%2Fhbm4SAqSesJ9ZjRQHd9mf2kt1YwaNW%2FBvC8HaIBodGItYFmnkaVTK7CdjcCDcdOg%2BLttOl3lZYYWYhb19Y9mUEfz%2BoZT59CEm8PcCIZKKKRP2FkPLJalv%2F7T8bE1u6YRPqWhQHpNAgUXf%2B92BRfzEdo1LzMP1PYelMXV%2BP49%2BMKfC7cIGOqUBhHVED%2F3nGSBnmQJdFy98Sl3iCTAyMHTwjR09%2FPCLtVbRGY%2BeG5ilqX0IKiu06GfCkx%2F2SpY6rE5YXfUSU5pEA%2BxGiZS3W2HpNBJVpi1kpo%2Bjx6LGWOY%2FpDMr1e8GD%2BlBST1HQBGKfcjmt4by791FdIGGIKdnfQrHL7HqjCp7UvtgxpTD%2BQnD7tkZ0DXXLY%2Boos86nCOTiHC4yxnfsGzlzsqAb71h&X-Amz-Signature=f9297e6f8af5fabdb93497fe3e659b193616127d87612444a32476289022800b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSMRXX3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF%2BToRj%2F2Yynj3myZGwJTy%2Fgw7%2BloMt3YKBUpAIahXDnAiEAmxY24OIgJBHxquRxqrXtP1PKos%2FnB3kRrwAVbOxLW7Iq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFuswwddxoVgzVmquircAxlJ%2BfVUCwb6bOArc%2F70oQ53xuHMV3W5Hw2YsK4HL3I31N4jdoc5m29GGMWlhZ20cAsylLyXHTvR1HZ7XpVrO1PAlk5ueZruR1vaTY2nwTo%2BdPuptAhHO%2BGivn1iajSU4%2Fn4irXN9ENY%2BPK8QmuvDuSQDrpT2jRx6DL2bi1lkjEoOPZPjYqnItqPcynh7OwMZd7TH4SSCAVG4Ll33zKfFZGwnfXWwJKw360rCNoKYNuycpm8%2B%2B5uL9LoD%2FYVrcOENZjD6SXnQzPxIw5xJU5h0c7%2FATK9pWywlIaYbrK3zL9oqtg72RTxjwCEew9p3y9XaPkz3c79iKi%2Br5gnB%2FwlhstZD9SudYNT2oFaUfuQcUgn0fMy22%2F%2FcsBcr7KTp9sgSvobIz20haVE6S9jR5FABOQoB637MjHmA3bNSlvlDzdOtP%2FVq2tYZ%2FNG8guhELoNFMQBSImK7HFAFGuTik%2Fhbm4SAqSesJ9ZjRQHd9mf2kt1YwaNW%2FBvC8HaIBodGItYFmnkaVTK7CdjcCDcdOg%2BLttOl3lZYYWYhb19Y9mUEfz%2BoZT59CEm8PcCIZKKKRP2FkPLJalv%2F7T8bE1u6YRPqWhQHpNAgUXf%2B92BRfzEdo1LzMP1PYelMXV%2BP49%2BMKfC7cIGOqUBhHVED%2F3nGSBnmQJdFy98Sl3iCTAyMHTwjR09%2FPCLtVbRGY%2BeG5ilqX0IKiu06GfCkx%2F2SpY6rE5YXfUSU5pEA%2BxGiZS3W2HpNBJVpi1kpo%2Bjx6LGWOY%2FpDMr1e8GD%2BlBST1HQBGKfcjmt4by791FdIGGIKdnfQrHL7HqjCp7UvtgxpTD%2BQnD7tkZ0DXXLY%2Boos86nCOTiHC4yxnfsGzlzsqAb71h&X-Amz-Signature=25f8eeb2ed75f26c0a3f45a3c744c1b2baebe01a336064b8f6712d0d07e9f3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSMRXX3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF%2BToRj%2F2Yynj3myZGwJTy%2Fgw7%2BloMt3YKBUpAIahXDnAiEAmxY24OIgJBHxquRxqrXtP1PKos%2FnB3kRrwAVbOxLW7Iq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFuswwddxoVgzVmquircAxlJ%2BfVUCwb6bOArc%2F70oQ53xuHMV3W5Hw2YsK4HL3I31N4jdoc5m29GGMWlhZ20cAsylLyXHTvR1HZ7XpVrO1PAlk5ueZruR1vaTY2nwTo%2BdPuptAhHO%2BGivn1iajSU4%2Fn4irXN9ENY%2BPK8QmuvDuSQDrpT2jRx6DL2bi1lkjEoOPZPjYqnItqPcynh7OwMZd7TH4SSCAVG4Ll33zKfFZGwnfXWwJKw360rCNoKYNuycpm8%2B%2B5uL9LoD%2FYVrcOENZjD6SXnQzPxIw5xJU5h0c7%2FATK9pWywlIaYbrK3zL9oqtg72RTxjwCEew9p3y9XaPkz3c79iKi%2Br5gnB%2FwlhstZD9SudYNT2oFaUfuQcUgn0fMy22%2F%2FcsBcr7KTp9sgSvobIz20haVE6S9jR5FABOQoB637MjHmA3bNSlvlDzdOtP%2FVq2tYZ%2FNG8guhELoNFMQBSImK7HFAFGuTik%2Fhbm4SAqSesJ9ZjRQHd9mf2kt1YwaNW%2FBvC8HaIBodGItYFmnkaVTK7CdjcCDcdOg%2BLttOl3lZYYWYhb19Y9mUEfz%2BoZT59CEm8PcCIZKKKRP2FkPLJalv%2F7T8bE1u6YRPqWhQHpNAgUXf%2B92BRfzEdo1LzMP1PYelMXV%2BP49%2BMKfC7cIGOqUBhHVED%2F3nGSBnmQJdFy98Sl3iCTAyMHTwjR09%2FPCLtVbRGY%2BeG5ilqX0IKiu06GfCkx%2F2SpY6rE5YXfUSU5pEA%2BxGiZS3W2HpNBJVpi1kpo%2Bjx6LGWOY%2FpDMr1e8GD%2BlBST1HQBGKfcjmt4by791FdIGGIKdnfQrHL7HqjCp7UvtgxpTD%2BQnD7tkZ0DXXLY%2Boos86nCOTiHC4yxnfsGzlzsqAb71h&X-Amz-Signature=872de64a3053f93b39fae70da807c1bce599c35f5e9247a96e2be8e7f7f875e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSMRXX3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF%2BToRj%2F2Yynj3myZGwJTy%2Fgw7%2BloMt3YKBUpAIahXDnAiEAmxY24OIgJBHxquRxqrXtP1PKos%2FnB3kRrwAVbOxLW7Iq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFuswwddxoVgzVmquircAxlJ%2BfVUCwb6bOArc%2F70oQ53xuHMV3W5Hw2YsK4HL3I31N4jdoc5m29GGMWlhZ20cAsylLyXHTvR1HZ7XpVrO1PAlk5ueZruR1vaTY2nwTo%2BdPuptAhHO%2BGivn1iajSU4%2Fn4irXN9ENY%2BPK8QmuvDuSQDrpT2jRx6DL2bi1lkjEoOPZPjYqnItqPcynh7OwMZd7TH4SSCAVG4Ll33zKfFZGwnfXWwJKw360rCNoKYNuycpm8%2B%2B5uL9LoD%2FYVrcOENZjD6SXnQzPxIw5xJU5h0c7%2FATK9pWywlIaYbrK3zL9oqtg72RTxjwCEew9p3y9XaPkz3c79iKi%2Br5gnB%2FwlhstZD9SudYNT2oFaUfuQcUgn0fMy22%2F%2FcsBcr7KTp9sgSvobIz20haVE6S9jR5FABOQoB637MjHmA3bNSlvlDzdOtP%2FVq2tYZ%2FNG8guhELoNFMQBSImK7HFAFGuTik%2Fhbm4SAqSesJ9ZjRQHd9mf2kt1YwaNW%2FBvC8HaIBodGItYFmnkaVTK7CdjcCDcdOg%2BLttOl3lZYYWYhb19Y9mUEfz%2BoZT59CEm8PcCIZKKKRP2FkPLJalv%2F7T8bE1u6YRPqWhQHpNAgUXf%2B92BRfzEdo1LzMP1PYelMXV%2BP49%2BMKfC7cIGOqUBhHVED%2F3nGSBnmQJdFy98Sl3iCTAyMHTwjR09%2FPCLtVbRGY%2BeG5ilqX0IKiu06GfCkx%2F2SpY6rE5YXfUSU5pEA%2BxGiZS3W2HpNBJVpi1kpo%2Bjx6LGWOY%2FpDMr1e8GD%2BlBST1HQBGKfcjmt4by791FdIGGIKdnfQrHL7HqjCp7UvtgxpTD%2BQnD7tkZ0DXXLY%2Boos86nCOTiHC4yxnfsGzlzsqAb71h&X-Amz-Signature=1dc7c28f52e8e631673a2984719e3d4184b341608bd27a17234c991c4512fb30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSMRXX3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF%2BToRj%2F2Yynj3myZGwJTy%2Fgw7%2BloMt3YKBUpAIahXDnAiEAmxY24OIgJBHxquRxqrXtP1PKos%2FnB3kRrwAVbOxLW7Iq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFuswwddxoVgzVmquircAxlJ%2BfVUCwb6bOArc%2F70oQ53xuHMV3W5Hw2YsK4HL3I31N4jdoc5m29GGMWlhZ20cAsylLyXHTvR1HZ7XpVrO1PAlk5ueZruR1vaTY2nwTo%2BdPuptAhHO%2BGivn1iajSU4%2Fn4irXN9ENY%2BPK8QmuvDuSQDrpT2jRx6DL2bi1lkjEoOPZPjYqnItqPcynh7OwMZd7TH4SSCAVG4Ll33zKfFZGwnfXWwJKw360rCNoKYNuycpm8%2B%2B5uL9LoD%2FYVrcOENZjD6SXnQzPxIw5xJU5h0c7%2FATK9pWywlIaYbrK3zL9oqtg72RTxjwCEew9p3y9XaPkz3c79iKi%2Br5gnB%2FwlhstZD9SudYNT2oFaUfuQcUgn0fMy22%2F%2FcsBcr7KTp9sgSvobIz20haVE6S9jR5FABOQoB637MjHmA3bNSlvlDzdOtP%2FVq2tYZ%2FNG8guhELoNFMQBSImK7HFAFGuTik%2Fhbm4SAqSesJ9ZjRQHd9mf2kt1YwaNW%2FBvC8HaIBodGItYFmnkaVTK7CdjcCDcdOg%2BLttOl3lZYYWYhb19Y9mUEfz%2BoZT59CEm8PcCIZKKKRP2FkPLJalv%2F7T8bE1u6YRPqWhQHpNAgUXf%2B92BRfzEdo1LzMP1PYelMXV%2BP49%2BMKfC7cIGOqUBhHVED%2F3nGSBnmQJdFy98Sl3iCTAyMHTwjR09%2FPCLtVbRGY%2BeG5ilqX0IKiu06GfCkx%2F2SpY6rE5YXfUSU5pEA%2BxGiZS3W2HpNBJVpi1kpo%2Bjx6LGWOY%2FpDMr1e8GD%2BlBST1HQBGKfcjmt4by791FdIGGIKdnfQrHL7HqjCp7UvtgxpTD%2BQnD7tkZ0DXXLY%2Boos86nCOTiHC4yxnfsGzlzsqAb71h&X-Amz-Signature=6415d8f7b6b905b0893a0969fd8a526f6698b51802fc09ea4328ee4d1e1ea4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
