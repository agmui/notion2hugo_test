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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NTKKFY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGZgx%2BSIXB9LHB3SfABKiOSYYdueF%2BXVEJIdLjewp3AuAiBzp8ljLVlZhEZSBxNKjpbdHnOMJYoD3BlabJBCNTGQvir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMAU35yQuDhNwheD88KtwDFujaN25sXFT8wYc9NuqaxQezSoooQPgYuLNJEaH%2Fk14HDF09oj1o55VBugDiCxycx3TM2jUOt2KE%2FcfZYeCA6uKfh9XHzIhojIzlXx0r9kPQscZFBhMjD7xrF7J%2FiofkCHRIFMOUeBGKjlzk1fKxb8yDwkaDNK8wsb%2BrV32wDSn%2BIvdV1VXQ9V1N46E1FdH282vR4Mk9wmylr2OkW9A8xLQtwd0Sc85W1hIaQk6RljLevinD2SgYILojkWtd%2FFhXNrlkTjHyosUDOwdjNyW1N8RXo9yCLKQjB9ovw2PZP9Estb9eT30ZvnkPEY%2BwYf%2B4evVSJoSPD5guDDsp4I47sq0%2BU%2B6TytefIORTY755JN5X8TL55GxF%2BQHeYL73a%2Bye%2BCu2VSmWfsD4acIoXlQ1UIokgXcrRNf8InMcb29VHF0U9WErS1nJpPty%2FeB3hinkZsokFIg17xCEe1t%2FO70UnMd3yliBRFR83pFx1r%2Btr%2FrSxT3RizTMNdmZM5K3Ieov0vlH2NElJ%2B4zh5dmrCPatU30lt1NVSOPUtA2ybW41rlRi7Anx3X6doCZ0UPv3%2BqFi7BLsvFMOK3Flt40SQe9gQbvFji6ti17nE%2FQTTQjCR4KxvXK1Bsrx%2FvB9Lowv%2FfowgY6pgFDX%2BnC%2BZCa0O5gJcR0lNSTB%2FHHrpC%2Bg2VUjdoOH0gZOkztVuQLyE32KQyniOLKtv9zXmUYRbH%2B%2FlwZDzlu0khAdG13XDEyT03Alfh1yrX8NiofH8PgSz4C6iTHL1ylPdmrcq5ED2qLuq4%2BYnPAzJ3Sz4sTHiOL2xQ2jJtiaME19aJBifdzsBVdAiZMlvLVX%2FQqPmRCgsP3WSY27UPNlJY5cHRSU22F&X-Amz-Signature=b4170e411f22de734d8a1bd9560b62e49db23197e2de4d52f73c8c47fdb00d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NTKKFY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGZgx%2BSIXB9LHB3SfABKiOSYYdueF%2BXVEJIdLjewp3AuAiBzp8ljLVlZhEZSBxNKjpbdHnOMJYoD3BlabJBCNTGQvir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMAU35yQuDhNwheD88KtwDFujaN25sXFT8wYc9NuqaxQezSoooQPgYuLNJEaH%2Fk14HDF09oj1o55VBugDiCxycx3TM2jUOt2KE%2FcfZYeCA6uKfh9XHzIhojIzlXx0r9kPQscZFBhMjD7xrF7J%2FiofkCHRIFMOUeBGKjlzk1fKxb8yDwkaDNK8wsb%2BrV32wDSn%2BIvdV1VXQ9V1N46E1FdH282vR4Mk9wmylr2OkW9A8xLQtwd0Sc85W1hIaQk6RljLevinD2SgYILojkWtd%2FFhXNrlkTjHyosUDOwdjNyW1N8RXo9yCLKQjB9ovw2PZP9Estb9eT30ZvnkPEY%2BwYf%2B4evVSJoSPD5guDDsp4I47sq0%2BU%2B6TytefIORTY755JN5X8TL55GxF%2BQHeYL73a%2Bye%2BCu2VSmWfsD4acIoXlQ1UIokgXcrRNf8InMcb29VHF0U9WErS1nJpPty%2FeB3hinkZsokFIg17xCEe1t%2FO70UnMd3yliBRFR83pFx1r%2Btr%2FrSxT3RizTMNdmZM5K3Ieov0vlH2NElJ%2B4zh5dmrCPatU30lt1NVSOPUtA2ybW41rlRi7Anx3X6doCZ0UPv3%2BqFi7BLsvFMOK3Flt40SQe9gQbvFji6ti17nE%2FQTTQjCR4KxvXK1Bsrx%2FvB9Lowv%2FfowgY6pgFDX%2BnC%2BZCa0O5gJcR0lNSTB%2FHHrpC%2Bg2VUjdoOH0gZOkztVuQLyE32KQyniOLKtv9zXmUYRbH%2B%2FlwZDzlu0khAdG13XDEyT03Alfh1yrX8NiofH8PgSz4C6iTHL1ylPdmrcq5ED2qLuq4%2BYnPAzJ3Sz4sTHiOL2xQ2jJtiaME19aJBifdzsBVdAiZMlvLVX%2FQqPmRCgsP3WSY27UPNlJY5cHRSU22F&X-Amz-Signature=7875fb63b2893022c8a441c07b8b74463914ea851df025680a2f32b2cbecc9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NTKKFY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGZgx%2BSIXB9LHB3SfABKiOSYYdueF%2BXVEJIdLjewp3AuAiBzp8ljLVlZhEZSBxNKjpbdHnOMJYoD3BlabJBCNTGQvir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMAU35yQuDhNwheD88KtwDFujaN25sXFT8wYc9NuqaxQezSoooQPgYuLNJEaH%2Fk14HDF09oj1o55VBugDiCxycx3TM2jUOt2KE%2FcfZYeCA6uKfh9XHzIhojIzlXx0r9kPQscZFBhMjD7xrF7J%2FiofkCHRIFMOUeBGKjlzk1fKxb8yDwkaDNK8wsb%2BrV32wDSn%2BIvdV1VXQ9V1N46E1FdH282vR4Mk9wmylr2OkW9A8xLQtwd0Sc85W1hIaQk6RljLevinD2SgYILojkWtd%2FFhXNrlkTjHyosUDOwdjNyW1N8RXo9yCLKQjB9ovw2PZP9Estb9eT30ZvnkPEY%2BwYf%2B4evVSJoSPD5guDDsp4I47sq0%2BU%2B6TytefIORTY755JN5X8TL55GxF%2BQHeYL73a%2Bye%2BCu2VSmWfsD4acIoXlQ1UIokgXcrRNf8InMcb29VHF0U9WErS1nJpPty%2FeB3hinkZsokFIg17xCEe1t%2FO70UnMd3yliBRFR83pFx1r%2Btr%2FrSxT3RizTMNdmZM5K3Ieov0vlH2NElJ%2B4zh5dmrCPatU30lt1NVSOPUtA2ybW41rlRi7Anx3X6doCZ0UPv3%2BqFi7BLsvFMOK3Flt40SQe9gQbvFji6ti17nE%2FQTTQjCR4KxvXK1Bsrx%2FvB9Lowv%2FfowgY6pgFDX%2BnC%2BZCa0O5gJcR0lNSTB%2FHHrpC%2Bg2VUjdoOH0gZOkztVuQLyE32KQyniOLKtv9zXmUYRbH%2B%2FlwZDzlu0khAdG13XDEyT03Alfh1yrX8NiofH8PgSz4C6iTHL1ylPdmrcq5ED2qLuq4%2BYnPAzJ3Sz4sTHiOL2xQ2jJtiaME19aJBifdzsBVdAiZMlvLVX%2FQqPmRCgsP3WSY27UPNlJY5cHRSU22F&X-Amz-Signature=518fc6a4c1b8ddea68ffd6f0e24e13c0ed03e0c7b0bf60835b9bc2d956ff51e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NTKKFY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGZgx%2BSIXB9LHB3SfABKiOSYYdueF%2BXVEJIdLjewp3AuAiBzp8ljLVlZhEZSBxNKjpbdHnOMJYoD3BlabJBCNTGQvir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMAU35yQuDhNwheD88KtwDFujaN25sXFT8wYc9NuqaxQezSoooQPgYuLNJEaH%2Fk14HDF09oj1o55VBugDiCxycx3TM2jUOt2KE%2FcfZYeCA6uKfh9XHzIhojIzlXx0r9kPQscZFBhMjD7xrF7J%2FiofkCHRIFMOUeBGKjlzk1fKxb8yDwkaDNK8wsb%2BrV32wDSn%2BIvdV1VXQ9V1N46E1FdH282vR4Mk9wmylr2OkW9A8xLQtwd0Sc85W1hIaQk6RljLevinD2SgYILojkWtd%2FFhXNrlkTjHyosUDOwdjNyW1N8RXo9yCLKQjB9ovw2PZP9Estb9eT30ZvnkPEY%2BwYf%2B4evVSJoSPD5guDDsp4I47sq0%2BU%2B6TytefIORTY755JN5X8TL55GxF%2BQHeYL73a%2Bye%2BCu2VSmWfsD4acIoXlQ1UIokgXcrRNf8InMcb29VHF0U9WErS1nJpPty%2FeB3hinkZsokFIg17xCEe1t%2FO70UnMd3yliBRFR83pFx1r%2Btr%2FrSxT3RizTMNdmZM5K3Ieov0vlH2NElJ%2B4zh5dmrCPatU30lt1NVSOPUtA2ybW41rlRi7Anx3X6doCZ0UPv3%2BqFi7BLsvFMOK3Flt40SQe9gQbvFji6ti17nE%2FQTTQjCR4KxvXK1Bsrx%2FvB9Lowv%2FfowgY6pgFDX%2BnC%2BZCa0O5gJcR0lNSTB%2FHHrpC%2Bg2VUjdoOH0gZOkztVuQLyE32KQyniOLKtv9zXmUYRbH%2B%2FlwZDzlu0khAdG13XDEyT03Alfh1yrX8NiofH8PgSz4C6iTHL1ylPdmrcq5ED2qLuq4%2BYnPAzJ3Sz4sTHiOL2xQ2jJtiaME19aJBifdzsBVdAiZMlvLVX%2FQqPmRCgsP3WSY27UPNlJY5cHRSU22F&X-Amz-Signature=0495ca81a24ef68cb93cfef00f9ed68cd2a0ad363e11c5d1d5dfd5565429561f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NTKKFY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGZgx%2BSIXB9LHB3SfABKiOSYYdueF%2BXVEJIdLjewp3AuAiBzp8ljLVlZhEZSBxNKjpbdHnOMJYoD3BlabJBCNTGQvir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMAU35yQuDhNwheD88KtwDFujaN25sXFT8wYc9NuqaxQezSoooQPgYuLNJEaH%2Fk14HDF09oj1o55VBugDiCxycx3TM2jUOt2KE%2FcfZYeCA6uKfh9XHzIhojIzlXx0r9kPQscZFBhMjD7xrF7J%2FiofkCHRIFMOUeBGKjlzk1fKxb8yDwkaDNK8wsb%2BrV32wDSn%2BIvdV1VXQ9V1N46E1FdH282vR4Mk9wmylr2OkW9A8xLQtwd0Sc85W1hIaQk6RljLevinD2SgYILojkWtd%2FFhXNrlkTjHyosUDOwdjNyW1N8RXo9yCLKQjB9ovw2PZP9Estb9eT30ZvnkPEY%2BwYf%2B4evVSJoSPD5guDDsp4I47sq0%2BU%2B6TytefIORTY755JN5X8TL55GxF%2BQHeYL73a%2Bye%2BCu2VSmWfsD4acIoXlQ1UIokgXcrRNf8InMcb29VHF0U9WErS1nJpPty%2FeB3hinkZsokFIg17xCEe1t%2FO70UnMd3yliBRFR83pFx1r%2Btr%2FrSxT3RizTMNdmZM5K3Ieov0vlH2NElJ%2B4zh5dmrCPatU30lt1NVSOPUtA2ybW41rlRi7Anx3X6doCZ0UPv3%2BqFi7BLsvFMOK3Flt40SQe9gQbvFji6ti17nE%2FQTTQjCR4KxvXK1Bsrx%2FvB9Lowv%2FfowgY6pgFDX%2BnC%2BZCa0O5gJcR0lNSTB%2FHHrpC%2Bg2VUjdoOH0gZOkztVuQLyE32KQyniOLKtv9zXmUYRbH%2B%2FlwZDzlu0khAdG13XDEyT03Alfh1yrX8NiofH8PgSz4C6iTHL1ylPdmrcq5ED2qLuq4%2BYnPAzJ3Sz4sTHiOL2xQ2jJtiaME19aJBifdzsBVdAiZMlvLVX%2FQqPmRCgsP3WSY27UPNlJY5cHRSU22F&X-Amz-Signature=a360b1c0a4487ffaff55c2f1c77200a3cc87ddf040eecbb7ad86ebcbc7f3a1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NTKKFY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGZgx%2BSIXB9LHB3SfABKiOSYYdueF%2BXVEJIdLjewp3AuAiBzp8ljLVlZhEZSBxNKjpbdHnOMJYoD3BlabJBCNTGQvir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMAU35yQuDhNwheD88KtwDFujaN25sXFT8wYc9NuqaxQezSoooQPgYuLNJEaH%2Fk14HDF09oj1o55VBugDiCxycx3TM2jUOt2KE%2FcfZYeCA6uKfh9XHzIhojIzlXx0r9kPQscZFBhMjD7xrF7J%2FiofkCHRIFMOUeBGKjlzk1fKxb8yDwkaDNK8wsb%2BrV32wDSn%2BIvdV1VXQ9V1N46E1FdH282vR4Mk9wmylr2OkW9A8xLQtwd0Sc85W1hIaQk6RljLevinD2SgYILojkWtd%2FFhXNrlkTjHyosUDOwdjNyW1N8RXo9yCLKQjB9ovw2PZP9Estb9eT30ZvnkPEY%2BwYf%2B4evVSJoSPD5guDDsp4I47sq0%2BU%2B6TytefIORTY755JN5X8TL55GxF%2BQHeYL73a%2Bye%2BCu2VSmWfsD4acIoXlQ1UIokgXcrRNf8InMcb29VHF0U9WErS1nJpPty%2FeB3hinkZsokFIg17xCEe1t%2FO70UnMd3yliBRFR83pFx1r%2Btr%2FrSxT3RizTMNdmZM5K3Ieov0vlH2NElJ%2B4zh5dmrCPatU30lt1NVSOPUtA2ybW41rlRi7Anx3X6doCZ0UPv3%2BqFi7BLsvFMOK3Flt40SQe9gQbvFji6ti17nE%2FQTTQjCR4KxvXK1Bsrx%2FvB9Lowv%2FfowgY6pgFDX%2BnC%2BZCa0O5gJcR0lNSTB%2FHHrpC%2Bg2VUjdoOH0gZOkztVuQLyE32KQyniOLKtv9zXmUYRbH%2B%2FlwZDzlu0khAdG13XDEyT03Alfh1yrX8NiofH8PgSz4C6iTHL1ylPdmrcq5ED2qLuq4%2BYnPAzJ3Sz4sTHiOL2xQ2jJtiaME19aJBifdzsBVdAiZMlvLVX%2FQqPmRCgsP3WSY27UPNlJY5cHRSU22F&X-Amz-Signature=f1a79f9e5c06ea0aa93cff061f1041309866c8eeedbbf390387ac7fe7ed7a4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NTKKFY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGZgx%2BSIXB9LHB3SfABKiOSYYdueF%2BXVEJIdLjewp3AuAiBzp8ljLVlZhEZSBxNKjpbdHnOMJYoD3BlabJBCNTGQvir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMAU35yQuDhNwheD88KtwDFujaN25sXFT8wYc9NuqaxQezSoooQPgYuLNJEaH%2Fk14HDF09oj1o55VBugDiCxycx3TM2jUOt2KE%2FcfZYeCA6uKfh9XHzIhojIzlXx0r9kPQscZFBhMjD7xrF7J%2FiofkCHRIFMOUeBGKjlzk1fKxb8yDwkaDNK8wsb%2BrV32wDSn%2BIvdV1VXQ9V1N46E1FdH282vR4Mk9wmylr2OkW9A8xLQtwd0Sc85W1hIaQk6RljLevinD2SgYILojkWtd%2FFhXNrlkTjHyosUDOwdjNyW1N8RXo9yCLKQjB9ovw2PZP9Estb9eT30ZvnkPEY%2BwYf%2B4evVSJoSPD5guDDsp4I47sq0%2BU%2B6TytefIORTY755JN5X8TL55GxF%2BQHeYL73a%2Bye%2BCu2VSmWfsD4acIoXlQ1UIokgXcrRNf8InMcb29VHF0U9WErS1nJpPty%2FeB3hinkZsokFIg17xCEe1t%2FO70UnMd3yliBRFR83pFx1r%2Btr%2FrSxT3RizTMNdmZM5K3Ieov0vlH2NElJ%2B4zh5dmrCPatU30lt1NVSOPUtA2ybW41rlRi7Anx3X6doCZ0UPv3%2BqFi7BLsvFMOK3Flt40SQe9gQbvFji6ti17nE%2FQTTQjCR4KxvXK1Bsrx%2FvB9Lowv%2FfowgY6pgFDX%2BnC%2BZCa0O5gJcR0lNSTB%2FHHrpC%2Bg2VUjdoOH0gZOkztVuQLyE32KQyniOLKtv9zXmUYRbH%2B%2FlwZDzlu0khAdG13XDEyT03Alfh1yrX8NiofH8PgSz4C6iTHL1ylPdmrcq5ED2qLuq4%2BYnPAzJ3Sz4sTHiOL2xQ2jJtiaME19aJBifdzsBVdAiZMlvLVX%2FQqPmRCgsP3WSY27UPNlJY5cHRSU22F&X-Amz-Signature=ff7fe052bac1a92dc3f9e2a16126691a3fbcd973dea4f202140fc6c3dadd7ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
