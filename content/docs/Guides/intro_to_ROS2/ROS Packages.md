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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOZ53BPT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFwzC0ClLOEYyjY69Sg%2BrBhe7BwGGVyyeM79pVMV%2FDM4AiARRK0VZUUAFe%2FvjKVFR%2BOIRAgfg3cCY2R0tKshwXizhCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2dsrs%2Bv00Th4aA6MKtwDGulbndLrhRuGru8eWTMuPciH5ozp3%2F6bYoQeiCpf6GEPRgEBvGMFYljvMbj8ophMkqqyZuv6PUKclk5ReVMw1399jNncZ5OY%2BHskAjadHk5mEmtsFjMT%2Fql9%2FY5YYrlqWMpBQMw9LJvQa9xGnoLrdxACwVuipHYKvu%2Bw%2F%2BzbbiaaNdlSq5s%2F8o6iiElRU%2FGeE0QCXLWhP9msqhrljv4ogxhWDrhtwgBK4X8VHonEM8EIVNsrOraS08vrhF996j2dQbN%2BpqfCI%2FM%2FX01Ejd6xsNTwr21tZGY4ymfFtPsK6gYWxjPIdU2C%2B2MApyuotfSNBL9ke8keah4sYh3DnikuvBA0sSgu9TB72iYCFk2caz2L3lEfORilUwM5EuR6PohGq9Gy4vOE95ag6gP%2B6EVuSL7Km%2Bin%2Bxprv0kFJ7F4DqaIlfI%2BPmIv%2B50tm%2BpDYA85yQAwQ%2FKsr%2B8ndJjOYykvZ9BlkMn8J%2Btr5x8K%2F4kMr7I3MEqFHT8qvo%2FAERAdK6CzEO8QvTXhqObmpWLG2oW0jSIQaqls6DWcnPTW1qYARaIn4YXePF0PVwpHieUHfSn6rrxVDvSlMkElihdWsPt%2B0Flsda10sT6iWgyWoll6T9yraPPl4tUCP1b5cEMwyJzHvQY6pgGwDaz0pYybfgnCLX3HUgX%2FQBxgWrysDLkqst8s1lJuO1SdZFtGo70g%2FHF%2FKtd%2BOltlJYYABtvVNGVUpyUIHfLMvVBdGtf2tmTkUzDBeyY8ljXKxj4E031K0fm574I5IaUmZcXXa0DRFqiDLVE0vAUte2eKb%2BGXR0B6ALVH7tT2DfbVtoU6FeMHoBf6mUKQjyZ6Zs%2FA%2B63giQ0gTWSsz2AQF3oGSKgm&X-Amz-Signature=ee4510e2c3d2588984d9405cdde0491ca01d46ae1ebecf40b2e251fea31a120c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOZ53BPT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFwzC0ClLOEYyjY69Sg%2BrBhe7BwGGVyyeM79pVMV%2FDM4AiARRK0VZUUAFe%2FvjKVFR%2BOIRAgfg3cCY2R0tKshwXizhCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2dsrs%2Bv00Th4aA6MKtwDGulbndLrhRuGru8eWTMuPciH5ozp3%2F6bYoQeiCpf6GEPRgEBvGMFYljvMbj8ophMkqqyZuv6PUKclk5ReVMw1399jNncZ5OY%2BHskAjadHk5mEmtsFjMT%2Fql9%2FY5YYrlqWMpBQMw9LJvQa9xGnoLrdxACwVuipHYKvu%2Bw%2F%2BzbbiaaNdlSq5s%2F8o6iiElRU%2FGeE0QCXLWhP9msqhrljv4ogxhWDrhtwgBK4X8VHonEM8EIVNsrOraS08vrhF996j2dQbN%2BpqfCI%2FM%2FX01Ejd6xsNTwr21tZGY4ymfFtPsK6gYWxjPIdU2C%2B2MApyuotfSNBL9ke8keah4sYh3DnikuvBA0sSgu9TB72iYCFk2caz2L3lEfORilUwM5EuR6PohGq9Gy4vOE95ag6gP%2B6EVuSL7Km%2Bin%2Bxprv0kFJ7F4DqaIlfI%2BPmIv%2B50tm%2BpDYA85yQAwQ%2FKsr%2B8ndJjOYykvZ9BlkMn8J%2Btr5x8K%2F4kMr7I3MEqFHT8qvo%2FAERAdK6CzEO8QvTXhqObmpWLG2oW0jSIQaqls6DWcnPTW1qYARaIn4YXePF0PVwpHieUHfSn6rrxVDvSlMkElihdWsPt%2B0Flsda10sT6iWgyWoll6T9yraPPl4tUCP1b5cEMwyJzHvQY6pgGwDaz0pYybfgnCLX3HUgX%2FQBxgWrysDLkqst8s1lJuO1SdZFtGo70g%2FHF%2FKtd%2BOltlJYYABtvVNGVUpyUIHfLMvVBdGtf2tmTkUzDBeyY8ljXKxj4E031K0fm574I5IaUmZcXXa0DRFqiDLVE0vAUte2eKb%2BGXR0B6ALVH7tT2DfbVtoU6FeMHoBf6mUKQjyZ6Zs%2FA%2B63giQ0gTWSsz2AQF3oGSKgm&X-Amz-Signature=431f9505fed06a1a2e6b05e4447af7054dc782b5c5534793a5706d5643c1cf69&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOZ53BPT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFwzC0ClLOEYyjY69Sg%2BrBhe7BwGGVyyeM79pVMV%2FDM4AiARRK0VZUUAFe%2FvjKVFR%2BOIRAgfg3cCY2R0tKshwXizhCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2dsrs%2Bv00Th4aA6MKtwDGulbndLrhRuGru8eWTMuPciH5ozp3%2F6bYoQeiCpf6GEPRgEBvGMFYljvMbj8ophMkqqyZuv6PUKclk5ReVMw1399jNncZ5OY%2BHskAjadHk5mEmtsFjMT%2Fql9%2FY5YYrlqWMpBQMw9LJvQa9xGnoLrdxACwVuipHYKvu%2Bw%2F%2BzbbiaaNdlSq5s%2F8o6iiElRU%2FGeE0QCXLWhP9msqhrljv4ogxhWDrhtwgBK4X8VHonEM8EIVNsrOraS08vrhF996j2dQbN%2BpqfCI%2FM%2FX01Ejd6xsNTwr21tZGY4ymfFtPsK6gYWxjPIdU2C%2B2MApyuotfSNBL9ke8keah4sYh3DnikuvBA0sSgu9TB72iYCFk2caz2L3lEfORilUwM5EuR6PohGq9Gy4vOE95ag6gP%2B6EVuSL7Km%2Bin%2Bxprv0kFJ7F4DqaIlfI%2BPmIv%2B50tm%2BpDYA85yQAwQ%2FKsr%2B8ndJjOYykvZ9BlkMn8J%2Btr5x8K%2F4kMr7I3MEqFHT8qvo%2FAERAdK6CzEO8QvTXhqObmpWLG2oW0jSIQaqls6DWcnPTW1qYARaIn4YXePF0PVwpHieUHfSn6rrxVDvSlMkElihdWsPt%2B0Flsda10sT6iWgyWoll6T9yraPPl4tUCP1b5cEMwyJzHvQY6pgGwDaz0pYybfgnCLX3HUgX%2FQBxgWrysDLkqst8s1lJuO1SdZFtGo70g%2FHF%2FKtd%2BOltlJYYABtvVNGVUpyUIHfLMvVBdGtf2tmTkUzDBeyY8ljXKxj4E031K0fm574I5IaUmZcXXa0DRFqiDLVE0vAUte2eKb%2BGXR0B6ALVH7tT2DfbVtoU6FeMHoBf6mUKQjyZ6Zs%2FA%2B63giQ0gTWSsz2AQF3oGSKgm&X-Amz-Signature=5bb573b6d86c1d3f2b4b34566bc418aefcac4b69fcb79611454b6374626cc762&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOZ53BPT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFwzC0ClLOEYyjY69Sg%2BrBhe7BwGGVyyeM79pVMV%2FDM4AiARRK0VZUUAFe%2FvjKVFR%2BOIRAgfg3cCY2R0tKshwXizhCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2dsrs%2Bv00Th4aA6MKtwDGulbndLrhRuGru8eWTMuPciH5ozp3%2F6bYoQeiCpf6GEPRgEBvGMFYljvMbj8ophMkqqyZuv6PUKclk5ReVMw1399jNncZ5OY%2BHskAjadHk5mEmtsFjMT%2Fql9%2FY5YYrlqWMpBQMw9LJvQa9xGnoLrdxACwVuipHYKvu%2Bw%2F%2BzbbiaaNdlSq5s%2F8o6iiElRU%2FGeE0QCXLWhP9msqhrljv4ogxhWDrhtwgBK4X8VHonEM8EIVNsrOraS08vrhF996j2dQbN%2BpqfCI%2FM%2FX01Ejd6xsNTwr21tZGY4ymfFtPsK6gYWxjPIdU2C%2B2MApyuotfSNBL9ke8keah4sYh3DnikuvBA0sSgu9TB72iYCFk2caz2L3lEfORilUwM5EuR6PohGq9Gy4vOE95ag6gP%2B6EVuSL7Km%2Bin%2Bxprv0kFJ7F4DqaIlfI%2BPmIv%2B50tm%2BpDYA85yQAwQ%2FKsr%2B8ndJjOYykvZ9BlkMn8J%2Btr5x8K%2F4kMr7I3MEqFHT8qvo%2FAERAdK6CzEO8QvTXhqObmpWLG2oW0jSIQaqls6DWcnPTW1qYARaIn4YXePF0PVwpHieUHfSn6rrxVDvSlMkElihdWsPt%2B0Flsda10sT6iWgyWoll6T9yraPPl4tUCP1b5cEMwyJzHvQY6pgGwDaz0pYybfgnCLX3HUgX%2FQBxgWrysDLkqst8s1lJuO1SdZFtGo70g%2FHF%2FKtd%2BOltlJYYABtvVNGVUpyUIHfLMvVBdGtf2tmTkUzDBeyY8ljXKxj4E031K0fm574I5IaUmZcXXa0DRFqiDLVE0vAUte2eKb%2BGXR0B6ALVH7tT2DfbVtoU6FeMHoBf6mUKQjyZ6Zs%2FA%2B63giQ0gTWSsz2AQF3oGSKgm&X-Amz-Signature=c921d39f376778eb48d05764a2e0fd9ae941cdc5fb992884cad7f83c41fa1dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOZ53BPT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFwzC0ClLOEYyjY69Sg%2BrBhe7BwGGVyyeM79pVMV%2FDM4AiARRK0VZUUAFe%2FvjKVFR%2BOIRAgfg3cCY2R0tKshwXizhCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2dsrs%2Bv00Th4aA6MKtwDGulbndLrhRuGru8eWTMuPciH5ozp3%2F6bYoQeiCpf6GEPRgEBvGMFYljvMbj8ophMkqqyZuv6PUKclk5ReVMw1399jNncZ5OY%2BHskAjadHk5mEmtsFjMT%2Fql9%2FY5YYrlqWMpBQMw9LJvQa9xGnoLrdxACwVuipHYKvu%2Bw%2F%2BzbbiaaNdlSq5s%2F8o6iiElRU%2FGeE0QCXLWhP9msqhrljv4ogxhWDrhtwgBK4X8VHonEM8EIVNsrOraS08vrhF996j2dQbN%2BpqfCI%2FM%2FX01Ejd6xsNTwr21tZGY4ymfFtPsK6gYWxjPIdU2C%2B2MApyuotfSNBL9ke8keah4sYh3DnikuvBA0sSgu9TB72iYCFk2caz2L3lEfORilUwM5EuR6PohGq9Gy4vOE95ag6gP%2B6EVuSL7Km%2Bin%2Bxprv0kFJ7F4DqaIlfI%2BPmIv%2B50tm%2BpDYA85yQAwQ%2FKsr%2B8ndJjOYykvZ9BlkMn8J%2Btr5x8K%2F4kMr7I3MEqFHT8qvo%2FAERAdK6CzEO8QvTXhqObmpWLG2oW0jSIQaqls6DWcnPTW1qYARaIn4YXePF0PVwpHieUHfSn6rrxVDvSlMkElihdWsPt%2B0Flsda10sT6iWgyWoll6T9yraPPl4tUCP1b5cEMwyJzHvQY6pgGwDaz0pYybfgnCLX3HUgX%2FQBxgWrysDLkqst8s1lJuO1SdZFtGo70g%2FHF%2FKtd%2BOltlJYYABtvVNGVUpyUIHfLMvVBdGtf2tmTkUzDBeyY8ljXKxj4E031K0fm574I5IaUmZcXXa0DRFqiDLVE0vAUte2eKb%2BGXR0B6ALVH7tT2DfbVtoU6FeMHoBf6mUKQjyZ6Zs%2FA%2B63giQ0gTWSsz2AQF3oGSKgm&X-Amz-Signature=b78a7a285c8f99c236fe48f27715d91f5d882c7a6b4eb96ce84b992fc6e7c4d2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOZ53BPT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFwzC0ClLOEYyjY69Sg%2BrBhe7BwGGVyyeM79pVMV%2FDM4AiARRK0VZUUAFe%2FvjKVFR%2BOIRAgfg3cCY2R0tKshwXizhCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2dsrs%2Bv00Th4aA6MKtwDGulbndLrhRuGru8eWTMuPciH5ozp3%2F6bYoQeiCpf6GEPRgEBvGMFYljvMbj8ophMkqqyZuv6PUKclk5ReVMw1399jNncZ5OY%2BHskAjadHk5mEmtsFjMT%2Fql9%2FY5YYrlqWMpBQMw9LJvQa9xGnoLrdxACwVuipHYKvu%2Bw%2F%2BzbbiaaNdlSq5s%2F8o6iiElRU%2FGeE0QCXLWhP9msqhrljv4ogxhWDrhtwgBK4X8VHonEM8EIVNsrOraS08vrhF996j2dQbN%2BpqfCI%2FM%2FX01Ejd6xsNTwr21tZGY4ymfFtPsK6gYWxjPIdU2C%2B2MApyuotfSNBL9ke8keah4sYh3DnikuvBA0sSgu9TB72iYCFk2caz2L3lEfORilUwM5EuR6PohGq9Gy4vOE95ag6gP%2B6EVuSL7Km%2Bin%2Bxprv0kFJ7F4DqaIlfI%2BPmIv%2B50tm%2BpDYA85yQAwQ%2FKsr%2B8ndJjOYykvZ9BlkMn8J%2Btr5x8K%2F4kMr7I3MEqFHT8qvo%2FAERAdK6CzEO8QvTXhqObmpWLG2oW0jSIQaqls6DWcnPTW1qYARaIn4YXePF0PVwpHieUHfSn6rrxVDvSlMkElihdWsPt%2B0Flsda10sT6iWgyWoll6T9yraPPl4tUCP1b5cEMwyJzHvQY6pgGwDaz0pYybfgnCLX3HUgX%2FQBxgWrysDLkqst8s1lJuO1SdZFtGo70g%2FHF%2FKtd%2BOltlJYYABtvVNGVUpyUIHfLMvVBdGtf2tmTkUzDBeyY8ljXKxj4E031K0fm574I5IaUmZcXXa0DRFqiDLVE0vAUte2eKb%2BGXR0B6ALVH7tT2DfbVtoU6FeMHoBf6mUKQjyZ6Zs%2FA%2B63giQ0gTWSsz2AQF3oGSKgm&X-Amz-Signature=c85e99335351ba1603d5ba0eb7536e1db406afa98867d6f78896061cdf0b696b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOZ53BPT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFwzC0ClLOEYyjY69Sg%2BrBhe7BwGGVyyeM79pVMV%2FDM4AiARRK0VZUUAFe%2FvjKVFR%2BOIRAgfg3cCY2R0tKshwXizhCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2dsrs%2Bv00Th4aA6MKtwDGulbndLrhRuGru8eWTMuPciH5ozp3%2F6bYoQeiCpf6GEPRgEBvGMFYljvMbj8ophMkqqyZuv6PUKclk5ReVMw1399jNncZ5OY%2BHskAjadHk5mEmtsFjMT%2Fql9%2FY5YYrlqWMpBQMw9LJvQa9xGnoLrdxACwVuipHYKvu%2Bw%2F%2BzbbiaaNdlSq5s%2F8o6iiElRU%2FGeE0QCXLWhP9msqhrljv4ogxhWDrhtwgBK4X8VHonEM8EIVNsrOraS08vrhF996j2dQbN%2BpqfCI%2FM%2FX01Ejd6xsNTwr21tZGY4ymfFtPsK6gYWxjPIdU2C%2B2MApyuotfSNBL9ke8keah4sYh3DnikuvBA0sSgu9TB72iYCFk2caz2L3lEfORilUwM5EuR6PohGq9Gy4vOE95ag6gP%2B6EVuSL7Km%2Bin%2Bxprv0kFJ7F4DqaIlfI%2BPmIv%2B50tm%2BpDYA85yQAwQ%2FKsr%2B8ndJjOYykvZ9BlkMn8J%2Btr5x8K%2F4kMr7I3MEqFHT8qvo%2FAERAdK6CzEO8QvTXhqObmpWLG2oW0jSIQaqls6DWcnPTW1qYARaIn4YXePF0PVwpHieUHfSn6rrxVDvSlMkElihdWsPt%2B0Flsda10sT6iWgyWoll6T9yraPPl4tUCP1b5cEMwyJzHvQY6pgGwDaz0pYybfgnCLX3HUgX%2FQBxgWrysDLkqst8s1lJuO1SdZFtGo70g%2FHF%2FKtd%2BOltlJYYABtvVNGVUpyUIHfLMvVBdGtf2tmTkUzDBeyY8ljXKxj4E031K0fm574I5IaUmZcXXa0DRFqiDLVE0vAUte2eKb%2BGXR0B6ALVH7tT2DfbVtoU6FeMHoBf6mUKQjyZ6Zs%2FA%2B63giQ0gTWSsz2AQF3oGSKgm&X-Amz-Signature=be0831cb2accd160570835a5531d3f14846c1413cce3b27e4a0548924267c080&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
