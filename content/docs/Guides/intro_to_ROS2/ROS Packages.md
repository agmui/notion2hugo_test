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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YARE7F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIH6zPu1o10f54w2u70v9uo38QI8dtmqYbBbs2tXerYYtAiEAmKSRH4KvSrRH5y0edAYGMIqvf1VITRbbU2eMZWa4hdoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbjga88oFI2HK1V1SrcAyVHVKBQEabrvaXBAVkNdu6apyjFFice5TbbL%2Bx9nJj99uSXEXlu95bRFOvi20X7pstMwLCMjNqIZsjeGF0es8H4GINBwRJ7vhq1s0Xo6Zyw%2BO7uaAWberf7WHmVI58rAkx%2FSPM%2FGomb%2Bh9HYWr9nxXiFXwGVxtKEhbaygTYcQAwzZQpubZjWVi7NIj24h87sOfyPmaLJy7vITXRU8CcmAJFU92i7KXJAa8S5BW12QrDBj9zN96k22HopkQbfeABC1CeBR0xu4C2mryY0ExlP%2FsOvJc6888dlHYUA7fwgH36gJ8z3mJKMyDsXF1mvYWRm1j8rDzkNWRVCq%2BIQrwJOKjQR0XIW%2FH6t3anpT2qYGAnas14BSwAqtId08rFpO9avgjX%2BIf5k5%2BO%2BQ7CNqs2kz9una2OkMoHat%2Fqwtjo6hBQtOHsy3oeufHB%2B7WG1tKMNayu0dJeMQPHzvwe93LN2EuJWIAeXz6tLZtT5DSTrU6UyNLMSi%2FHp4hqWyy2gclplK79%2FyMnnFsB2KZpwEsukFDSo%2BoDHNkBPOVLuB9ZibwNzn9x8zBiDLvm%2F%2Bkd2Y77lDeGJCt5FQc9OvRmqryHM%2F8sclEsTsFceUAgXqxk8ygW2knXZTgSGKWHjqgSMJHVmMAGOqUBPpHTRSUL3xGCKyUN3DFPh6mRUi%2BIS8i6h%2FZDsB0HAmGymwhLD1iXa5CUMESxnydZnM7Ay81VnQUrQZ7E8m%2BqwZ1ZicchPD%2FdQRBQBjRdh8MXYW%2FF%2BNT7Ge9zVbFG52LfrfBn%2Bw2jAuTaMuB%2B2KAicidiO%2BtopgVmkja6z%2FJVZ8cXPoA6DoBgU02YL5bOF72z7GS05jT6OtIq2zDNJ7GKNsXol9rG&X-Amz-Signature=1be0aa77eb3236c590918db7943f81c3903a1307cd75e66135158a09a03970bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YARE7F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIH6zPu1o10f54w2u70v9uo38QI8dtmqYbBbs2tXerYYtAiEAmKSRH4KvSrRH5y0edAYGMIqvf1VITRbbU2eMZWa4hdoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbjga88oFI2HK1V1SrcAyVHVKBQEabrvaXBAVkNdu6apyjFFice5TbbL%2Bx9nJj99uSXEXlu95bRFOvi20X7pstMwLCMjNqIZsjeGF0es8H4GINBwRJ7vhq1s0Xo6Zyw%2BO7uaAWberf7WHmVI58rAkx%2FSPM%2FGomb%2Bh9HYWr9nxXiFXwGVxtKEhbaygTYcQAwzZQpubZjWVi7NIj24h87sOfyPmaLJy7vITXRU8CcmAJFU92i7KXJAa8S5BW12QrDBj9zN96k22HopkQbfeABC1CeBR0xu4C2mryY0ExlP%2FsOvJc6888dlHYUA7fwgH36gJ8z3mJKMyDsXF1mvYWRm1j8rDzkNWRVCq%2BIQrwJOKjQR0XIW%2FH6t3anpT2qYGAnas14BSwAqtId08rFpO9avgjX%2BIf5k5%2BO%2BQ7CNqs2kz9una2OkMoHat%2Fqwtjo6hBQtOHsy3oeufHB%2B7WG1tKMNayu0dJeMQPHzvwe93LN2EuJWIAeXz6tLZtT5DSTrU6UyNLMSi%2FHp4hqWyy2gclplK79%2FyMnnFsB2KZpwEsukFDSo%2BoDHNkBPOVLuB9ZibwNzn9x8zBiDLvm%2F%2Bkd2Y77lDeGJCt5FQc9OvRmqryHM%2F8sclEsTsFceUAgXqxk8ygW2knXZTgSGKWHjqgSMJHVmMAGOqUBPpHTRSUL3xGCKyUN3DFPh6mRUi%2BIS8i6h%2FZDsB0HAmGymwhLD1iXa5CUMESxnydZnM7Ay81VnQUrQZ7E8m%2BqwZ1ZicchPD%2FdQRBQBjRdh8MXYW%2FF%2BNT7Ge9zVbFG52LfrfBn%2Bw2jAuTaMuB%2B2KAicidiO%2BtopgVmkja6z%2FJVZ8cXPoA6DoBgU02YL5bOF72z7GS05jT6OtIq2zDNJ7GKNsXol9rG&X-Amz-Signature=93ec15b0c281ec764053a337af18786a663213b13716a98b5ff9b8b03df1db01&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YARE7F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIH6zPu1o10f54w2u70v9uo38QI8dtmqYbBbs2tXerYYtAiEAmKSRH4KvSrRH5y0edAYGMIqvf1VITRbbU2eMZWa4hdoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbjga88oFI2HK1V1SrcAyVHVKBQEabrvaXBAVkNdu6apyjFFice5TbbL%2Bx9nJj99uSXEXlu95bRFOvi20X7pstMwLCMjNqIZsjeGF0es8H4GINBwRJ7vhq1s0Xo6Zyw%2BO7uaAWberf7WHmVI58rAkx%2FSPM%2FGomb%2Bh9HYWr9nxXiFXwGVxtKEhbaygTYcQAwzZQpubZjWVi7NIj24h87sOfyPmaLJy7vITXRU8CcmAJFU92i7KXJAa8S5BW12QrDBj9zN96k22HopkQbfeABC1CeBR0xu4C2mryY0ExlP%2FsOvJc6888dlHYUA7fwgH36gJ8z3mJKMyDsXF1mvYWRm1j8rDzkNWRVCq%2BIQrwJOKjQR0XIW%2FH6t3anpT2qYGAnas14BSwAqtId08rFpO9avgjX%2BIf5k5%2BO%2BQ7CNqs2kz9una2OkMoHat%2Fqwtjo6hBQtOHsy3oeufHB%2B7WG1tKMNayu0dJeMQPHzvwe93LN2EuJWIAeXz6tLZtT5DSTrU6UyNLMSi%2FHp4hqWyy2gclplK79%2FyMnnFsB2KZpwEsukFDSo%2BoDHNkBPOVLuB9ZibwNzn9x8zBiDLvm%2F%2Bkd2Y77lDeGJCt5FQc9OvRmqryHM%2F8sclEsTsFceUAgXqxk8ygW2knXZTgSGKWHjqgSMJHVmMAGOqUBPpHTRSUL3xGCKyUN3DFPh6mRUi%2BIS8i6h%2FZDsB0HAmGymwhLD1iXa5CUMESxnydZnM7Ay81VnQUrQZ7E8m%2BqwZ1ZicchPD%2FdQRBQBjRdh8MXYW%2FF%2BNT7Ge9zVbFG52LfrfBn%2Bw2jAuTaMuB%2B2KAicidiO%2BtopgVmkja6z%2FJVZ8cXPoA6DoBgU02YL5bOF72z7GS05jT6OtIq2zDNJ7GKNsXol9rG&X-Amz-Signature=a9266a446dbaaf7a1cbd8ab0b16871ab82420a4daaa7c516588debf09f9f46a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YARE7F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIH6zPu1o10f54w2u70v9uo38QI8dtmqYbBbs2tXerYYtAiEAmKSRH4KvSrRH5y0edAYGMIqvf1VITRbbU2eMZWa4hdoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbjga88oFI2HK1V1SrcAyVHVKBQEabrvaXBAVkNdu6apyjFFice5TbbL%2Bx9nJj99uSXEXlu95bRFOvi20X7pstMwLCMjNqIZsjeGF0es8H4GINBwRJ7vhq1s0Xo6Zyw%2BO7uaAWberf7WHmVI58rAkx%2FSPM%2FGomb%2Bh9HYWr9nxXiFXwGVxtKEhbaygTYcQAwzZQpubZjWVi7NIj24h87sOfyPmaLJy7vITXRU8CcmAJFU92i7KXJAa8S5BW12QrDBj9zN96k22HopkQbfeABC1CeBR0xu4C2mryY0ExlP%2FsOvJc6888dlHYUA7fwgH36gJ8z3mJKMyDsXF1mvYWRm1j8rDzkNWRVCq%2BIQrwJOKjQR0XIW%2FH6t3anpT2qYGAnas14BSwAqtId08rFpO9avgjX%2BIf5k5%2BO%2BQ7CNqs2kz9una2OkMoHat%2Fqwtjo6hBQtOHsy3oeufHB%2B7WG1tKMNayu0dJeMQPHzvwe93LN2EuJWIAeXz6tLZtT5DSTrU6UyNLMSi%2FHp4hqWyy2gclplK79%2FyMnnFsB2KZpwEsukFDSo%2BoDHNkBPOVLuB9ZibwNzn9x8zBiDLvm%2F%2Bkd2Y77lDeGJCt5FQc9OvRmqryHM%2F8sclEsTsFceUAgXqxk8ygW2knXZTgSGKWHjqgSMJHVmMAGOqUBPpHTRSUL3xGCKyUN3DFPh6mRUi%2BIS8i6h%2FZDsB0HAmGymwhLD1iXa5CUMESxnydZnM7Ay81VnQUrQZ7E8m%2BqwZ1ZicchPD%2FdQRBQBjRdh8MXYW%2FF%2BNT7Ge9zVbFG52LfrfBn%2Bw2jAuTaMuB%2B2KAicidiO%2BtopgVmkja6z%2FJVZ8cXPoA6DoBgU02YL5bOF72z7GS05jT6OtIq2zDNJ7GKNsXol9rG&X-Amz-Signature=3221671a42b842da06badf7c53916be10f0f8aa7d1191e755c8203148e5a9266&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YARE7F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIH6zPu1o10f54w2u70v9uo38QI8dtmqYbBbs2tXerYYtAiEAmKSRH4KvSrRH5y0edAYGMIqvf1VITRbbU2eMZWa4hdoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbjga88oFI2HK1V1SrcAyVHVKBQEabrvaXBAVkNdu6apyjFFice5TbbL%2Bx9nJj99uSXEXlu95bRFOvi20X7pstMwLCMjNqIZsjeGF0es8H4GINBwRJ7vhq1s0Xo6Zyw%2BO7uaAWberf7WHmVI58rAkx%2FSPM%2FGomb%2Bh9HYWr9nxXiFXwGVxtKEhbaygTYcQAwzZQpubZjWVi7NIj24h87sOfyPmaLJy7vITXRU8CcmAJFU92i7KXJAa8S5BW12QrDBj9zN96k22HopkQbfeABC1CeBR0xu4C2mryY0ExlP%2FsOvJc6888dlHYUA7fwgH36gJ8z3mJKMyDsXF1mvYWRm1j8rDzkNWRVCq%2BIQrwJOKjQR0XIW%2FH6t3anpT2qYGAnas14BSwAqtId08rFpO9avgjX%2BIf5k5%2BO%2BQ7CNqs2kz9una2OkMoHat%2Fqwtjo6hBQtOHsy3oeufHB%2B7WG1tKMNayu0dJeMQPHzvwe93LN2EuJWIAeXz6tLZtT5DSTrU6UyNLMSi%2FHp4hqWyy2gclplK79%2FyMnnFsB2KZpwEsukFDSo%2BoDHNkBPOVLuB9ZibwNzn9x8zBiDLvm%2F%2Bkd2Y77lDeGJCt5FQc9OvRmqryHM%2F8sclEsTsFceUAgXqxk8ygW2knXZTgSGKWHjqgSMJHVmMAGOqUBPpHTRSUL3xGCKyUN3DFPh6mRUi%2BIS8i6h%2FZDsB0HAmGymwhLD1iXa5CUMESxnydZnM7Ay81VnQUrQZ7E8m%2BqwZ1ZicchPD%2FdQRBQBjRdh8MXYW%2FF%2BNT7Ge9zVbFG52LfrfBn%2Bw2jAuTaMuB%2B2KAicidiO%2BtopgVmkja6z%2FJVZ8cXPoA6DoBgU02YL5bOF72z7GS05jT6OtIq2zDNJ7GKNsXol9rG&X-Amz-Signature=9c260c71a226ecef226dad6893be653cdb558354b6a4cad171d88c94396a00ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YARE7F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIH6zPu1o10f54w2u70v9uo38QI8dtmqYbBbs2tXerYYtAiEAmKSRH4KvSrRH5y0edAYGMIqvf1VITRbbU2eMZWa4hdoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbjga88oFI2HK1V1SrcAyVHVKBQEabrvaXBAVkNdu6apyjFFice5TbbL%2Bx9nJj99uSXEXlu95bRFOvi20X7pstMwLCMjNqIZsjeGF0es8H4GINBwRJ7vhq1s0Xo6Zyw%2BO7uaAWberf7WHmVI58rAkx%2FSPM%2FGomb%2Bh9HYWr9nxXiFXwGVxtKEhbaygTYcQAwzZQpubZjWVi7NIj24h87sOfyPmaLJy7vITXRU8CcmAJFU92i7KXJAa8S5BW12QrDBj9zN96k22HopkQbfeABC1CeBR0xu4C2mryY0ExlP%2FsOvJc6888dlHYUA7fwgH36gJ8z3mJKMyDsXF1mvYWRm1j8rDzkNWRVCq%2BIQrwJOKjQR0XIW%2FH6t3anpT2qYGAnas14BSwAqtId08rFpO9avgjX%2BIf5k5%2BO%2BQ7CNqs2kz9una2OkMoHat%2Fqwtjo6hBQtOHsy3oeufHB%2B7WG1tKMNayu0dJeMQPHzvwe93LN2EuJWIAeXz6tLZtT5DSTrU6UyNLMSi%2FHp4hqWyy2gclplK79%2FyMnnFsB2KZpwEsukFDSo%2BoDHNkBPOVLuB9ZibwNzn9x8zBiDLvm%2F%2Bkd2Y77lDeGJCt5FQc9OvRmqryHM%2F8sclEsTsFceUAgXqxk8ygW2knXZTgSGKWHjqgSMJHVmMAGOqUBPpHTRSUL3xGCKyUN3DFPh6mRUi%2BIS8i6h%2FZDsB0HAmGymwhLD1iXa5CUMESxnydZnM7Ay81VnQUrQZ7E8m%2BqwZ1ZicchPD%2FdQRBQBjRdh8MXYW%2FF%2BNT7Ge9zVbFG52LfrfBn%2Bw2jAuTaMuB%2B2KAicidiO%2BtopgVmkja6z%2FJVZ8cXPoA6DoBgU02YL5bOF72z7GS05jT6OtIq2zDNJ7GKNsXol9rG&X-Amz-Signature=8cf51d8aca4eff6ddd028294bdd65616e3040a467879dcc761766cab3b494877&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YARE7F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIH6zPu1o10f54w2u70v9uo38QI8dtmqYbBbs2tXerYYtAiEAmKSRH4KvSrRH5y0edAYGMIqvf1VITRbbU2eMZWa4hdoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbjga88oFI2HK1V1SrcAyVHVKBQEabrvaXBAVkNdu6apyjFFice5TbbL%2Bx9nJj99uSXEXlu95bRFOvi20X7pstMwLCMjNqIZsjeGF0es8H4GINBwRJ7vhq1s0Xo6Zyw%2BO7uaAWberf7WHmVI58rAkx%2FSPM%2FGomb%2Bh9HYWr9nxXiFXwGVxtKEhbaygTYcQAwzZQpubZjWVi7NIj24h87sOfyPmaLJy7vITXRU8CcmAJFU92i7KXJAa8S5BW12QrDBj9zN96k22HopkQbfeABC1CeBR0xu4C2mryY0ExlP%2FsOvJc6888dlHYUA7fwgH36gJ8z3mJKMyDsXF1mvYWRm1j8rDzkNWRVCq%2BIQrwJOKjQR0XIW%2FH6t3anpT2qYGAnas14BSwAqtId08rFpO9avgjX%2BIf5k5%2BO%2BQ7CNqs2kz9una2OkMoHat%2Fqwtjo6hBQtOHsy3oeufHB%2B7WG1tKMNayu0dJeMQPHzvwe93LN2EuJWIAeXz6tLZtT5DSTrU6UyNLMSi%2FHp4hqWyy2gclplK79%2FyMnnFsB2KZpwEsukFDSo%2BoDHNkBPOVLuB9ZibwNzn9x8zBiDLvm%2F%2Bkd2Y77lDeGJCt5FQc9OvRmqryHM%2F8sclEsTsFceUAgXqxk8ygW2knXZTgSGKWHjqgSMJHVmMAGOqUBPpHTRSUL3xGCKyUN3DFPh6mRUi%2BIS8i6h%2FZDsB0HAmGymwhLD1iXa5CUMESxnydZnM7Ay81VnQUrQZ7E8m%2BqwZ1ZicchPD%2FdQRBQBjRdh8MXYW%2FF%2BNT7Ge9zVbFG52LfrfBn%2Bw2jAuTaMuB%2B2KAicidiO%2BtopgVmkja6z%2FJVZ8cXPoA6DoBgU02YL5bOF72z7GS05jT6OtIq2zDNJ7GKNsXol9rG&X-Amz-Signature=9c3e64021867a670052445c1d024f0af6c43eec7c71d8f8390685b2df9ec71be&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
