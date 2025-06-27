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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4CRR2L2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBcO37J7lOYwh%2Fbrv8NtkKJYXcLS6KaQJ0wK0%2BIIrYpoAiAdfumPHxvxVHKkd4qrSIlML4neWX9gcD%2FixE5RbtjbgCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2FTxe40zsVrIvygEZKtwD4LNFwJqqQRdRC2k0LdOFo7t3jPknHDqoftCAGTA%2FRUKtgwDft9U1BGpK7QVcI05WxePoh3HGjYy2%2BOTveWmDrncP4ysywK74L1A93pXkzVN9IAY3KNjcJjb4tU125KlbPwQwKMJZgIc6ZG0FBFSryJajbKFt0ZC8QsCnD06UlW30G30Aqzn9xtIcTHtyTBhSnjscd5V98a7k6Jhfc%2F6Dshmp%2BfGM%2BKWNhYje5g0hr22%2FRX9yGl8kSZ0IPAuqiMUEJpO31rwucKocC5%2FG1pwO1RY2nML4QBYvtHQHEZKx1%2FciBn%2FxXqKbLLIwdfL2y8VCmRDB%2FrlptW7ytZgXFSYG5ba9feXG%2FRIJyv1fBaktsk9k650aaPfyLDUX5SbeQX%2FA2D0Ugvuaj2ZaGT7njO%2FCswqmJ6aSz76fkYSYrPsawRdXsko6FtZ65OMJXhXVntHue7Sb7Nn3mRRP1HKb7hPO7h4fD%2FNvSQSwphrbWYK5HWXiuL3TA9srYq7yyVSWgrbijUOxUj4SgDDcJD%2FqsEgau%2FAOQp4%2B%2BDnFAsN5tMbj%2BQ8UFaNcns1FS3EiFgruh%2Bo5AEjhQmgB2SE3EKhOkuYQQPee4otw48qb8XWbCKkcvRoPbKTonU2NuCi7YI8wsPj4wgY6pgHE0NdE3BSkGxJZTGR7NAoOTvHaUpnpk%2FaER2hSdsvHLEothqX0brJ96f5K3lNaCZevZSSYYDYbttQWONyobb8%2BtzxneD08WwTKMAYI%2BXFkwuinOQLbEaZ3VmPilEdfM3raDIoBmE3s6XfSQ08SZUgzQ0JrsMaZRxChTcqowZjJPIVuMf0b334zVMsrldrZlQLXTKLzyMprzHGCZRvc7C1PrCanvjZn&X-Amz-Signature=ac89eb38046a808423df0dbb2c06a32ffe812c2255fed5f5160a6b4de3b59d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4CRR2L2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBcO37J7lOYwh%2Fbrv8NtkKJYXcLS6KaQJ0wK0%2BIIrYpoAiAdfumPHxvxVHKkd4qrSIlML4neWX9gcD%2FixE5RbtjbgCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2FTxe40zsVrIvygEZKtwD4LNFwJqqQRdRC2k0LdOFo7t3jPknHDqoftCAGTA%2FRUKtgwDft9U1BGpK7QVcI05WxePoh3HGjYy2%2BOTveWmDrncP4ysywK74L1A93pXkzVN9IAY3KNjcJjb4tU125KlbPwQwKMJZgIc6ZG0FBFSryJajbKFt0ZC8QsCnD06UlW30G30Aqzn9xtIcTHtyTBhSnjscd5V98a7k6Jhfc%2F6Dshmp%2BfGM%2BKWNhYje5g0hr22%2FRX9yGl8kSZ0IPAuqiMUEJpO31rwucKocC5%2FG1pwO1RY2nML4QBYvtHQHEZKx1%2FciBn%2FxXqKbLLIwdfL2y8VCmRDB%2FrlptW7ytZgXFSYG5ba9feXG%2FRIJyv1fBaktsk9k650aaPfyLDUX5SbeQX%2FA2D0Ugvuaj2ZaGT7njO%2FCswqmJ6aSz76fkYSYrPsawRdXsko6FtZ65OMJXhXVntHue7Sb7Nn3mRRP1HKb7hPO7h4fD%2FNvSQSwphrbWYK5HWXiuL3TA9srYq7yyVSWgrbijUOxUj4SgDDcJD%2FqsEgau%2FAOQp4%2B%2BDnFAsN5tMbj%2BQ8UFaNcns1FS3EiFgruh%2Bo5AEjhQmgB2SE3EKhOkuYQQPee4otw48qb8XWbCKkcvRoPbKTonU2NuCi7YI8wsPj4wgY6pgHE0NdE3BSkGxJZTGR7NAoOTvHaUpnpk%2FaER2hSdsvHLEothqX0brJ96f5K3lNaCZevZSSYYDYbttQWONyobb8%2BtzxneD08WwTKMAYI%2BXFkwuinOQLbEaZ3VmPilEdfM3raDIoBmE3s6XfSQ08SZUgzQ0JrsMaZRxChTcqowZjJPIVuMf0b334zVMsrldrZlQLXTKLzyMprzHGCZRvc7C1PrCanvjZn&X-Amz-Signature=c1e3611a8c346d1e5136b25837b41dbe48f202e9d056153eef5625f5cb1ea568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4CRR2L2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBcO37J7lOYwh%2Fbrv8NtkKJYXcLS6KaQJ0wK0%2BIIrYpoAiAdfumPHxvxVHKkd4qrSIlML4neWX9gcD%2FixE5RbtjbgCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2FTxe40zsVrIvygEZKtwD4LNFwJqqQRdRC2k0LdOFo7t3jPknHDqoftCAGTA%2FRUKtgwDft9U1BGpK7QVcI05WxePoh3HGjYy2%2BOTveWmDrncP4ysywK74L1A93pXkzVN9IAY3KNjcJjb4tU125KlbPwQwKMJZgIc6ZG0FBFSryJajbKFt0ZC8QsCnD06UlW30G30Aqzn9xtIcTHtyTBhSnjscd5V98a7k6Jhfc%2F6Dshmp%2BfGM%2BKWNhYje5g0hr22%2FRX9yGl8kSZ0IPAuqiMUEJpO31rwucKocC5%2FG1pwO1RY2nML4QBYvtHQHEZKx1%2FciBn%2FxXqKbLLIwdfL2y8VCmRDB%2FrlptW7ytZgXFSYG5ba9feXG%2FRIJyv1fBaktsk9k650aaPfyLDUX5SbeQX%2FA2D0Ugvuaj2ZaGT7njO%2FCswqmJ6aSz76fkYSYrPsawRdXsko6FtZ65OMJXhXVntHue7Sb7Nn3mRRP1HKb7hPO7h4fD%2FNvSQSwphrbWYK5HWXiuL3TA9srYq7yyVSWgrbijUOxUj4SgDDcJD%2FqsEgau%2FAOQp4%2B%2BDnFAsN5tMbj%2BQ8UFaNcns1FS3EiFgruh%2Bo5AEjhQmgB2SE3EKhOkuYQQPee4otw48qb8XWbCKkcvRoPbKTonU2NuCi7YI8wsPj4wgY6pgHE0NdE3BSkGxJZTGR7NAoOTvHaUpnpk%2FaER2hSdsvHLEothqX0brJ96f5K3lNaCZevZSSYYDYbttQWONyobb8%2BtzxneD08WwTKMAYI%2BXFkwuinOQLbEaZ3VmPilEdfM3raDIoBmE3s6XfSQ08SZUgzQ0JrsMaZRxChTcqowZjJPIVuMf0b334zVMsrldrZlQLXTKLzyMprzHGCZRvc7C1PrCanvjZn&X-Amz-Signature=0f1e2f74a6f5bc30b32deb6a9a7f08eb891f43bda64839539e8ffe7fbe0d6e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4CRR2L2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBcO37J7lOYwh%2Fbrv8NtkKJYXcLS6KaQJ0wK0%2BIIrYpoAiAdfumPHxvxVHKkd4qrSIlML4neWX9gcD%2FixE5RbtjbgCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2FTxe40zsVrIvygEZKtwD4LNFwJqqQRdRC2k0LdOFo7t3jPknHDqoftCAGTA%2FRUKtgwDft9U1BGpK7QVcI05WxePoh3HGjYy2%2BOTveWmDrncP4ysywK74L1A93pXkzVN9IAY3KNjcJjb4tU125KlbPwQwKMJZgIc6ZG0FBFSryJajbKFt0ZC8QsCnD06UlW30G30Aqzn9xtIcTHtyTBhSnjscd5V98a7k6Jhfc%2F6Dshmp%2BfGM%2BKWNhYje5g0hr22%2FRX9yGl8kSZ0IPAuqiMUEJpO31rwucKocC5%2FG1pwO1RY2nML4QBYvtHQHEZKx1%2FciBn%2FxXqKbLLIwdfL2y8VCmRDB%2FrlptW7ytZgXFSYG5ba9feXG%2FRIJyv1fBaktsk9k650aaPfyLDUX5SbeQX%2FA2D0Ugvuaj2ZaGT7njO%2FCswqmJ6aSz76fkYSYrPsawRdXsko6FtZ65OMJXhXVntHue7Sb7Nn3mRRP1HKb7hPO7h4fD%2FNvSQSwphrbWYK5HWXiuL3TA9srYq7yyVSWgrbijUOxUj4SgDDcJD%2FqsEgau%2FAOQp4%2B%2BDnFAsN5tMbj%2BQ8UFaNcns1FS3EiFgruh%2Bo5AEjhQmgB2SE3EKhOkuYQQPee4otw48qb8XWbCKkcvRoPbKTonU2NuCi7YI8wsPj4wgY6pgHE0NdE3BSkGxJZTGR7NAoOTvHaUpnpk%2FaER2hSdsvHLEothqX0brJ96f5K3lNaCZevZSSYYDYbttQWONyobb8%2BtzxneD08WwTKMAYI%2BXFkwuinOQLbEaZ3VmPilEdfM3raDIoBmE3s6XfSQ08SZUgzQ0JrsMaZRxChTcqowZjJPIVuMf0b334zVMsrldrZlQLXTKLzyMprzHGCZRvc7C1PrCanvjZn&X-Amz-Signature=154df959f8411e477cb8996f26464c4ca6333f57a329a74b55afd2ba84fad1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4CRR2L2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBcO37J7lOYwh%2Fbrv8NtkKJYXcLS6KaQJ0wK0%2BIIrYpoAiAdfumPHxvxVHKkd4qrSIlML4neWX9gcD%2FixE5RbtjbgCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2FTxe40zsVrIvygEZKtwD4LNFwJqqQRdRC2k0LdOFo7t3jPknHDqoftCAGTA%2FRUKtgwDft9U1BGpK7QVcI05WxePoh3HGjYy2%2BOTveWmDrncP4ysywK74L1A93pXkzVN9IAY3KNjcJjb4tU125KlbPwQwKMJZgIc6ZG0FBFSryJajbKFt0ZC8QsCnD06UlW30G30Aqzn9xtIcTHtyTBhSnjscd5V98a7k6Jhfc%2F6Dshmp%2BfGM%2BKWNhYje5g0hr22%2FRX9yGl8kSZ0IPAuqiMUEJpO31rwucKocC5%2FG1pwO1RY2nML4QBYvtHQHEZKx1%2FciBn%2FxXqKbLLIwdfL2y8VCmRDB%2FrlptW7ytZgXFSYG5ba9feXG%2FRIJyv1fBaktsk9k650aaPfyLDUX5SbeQX%2FA2D0Ugvuaj2ZaGT7njO%2FCswqmJ6aSz76fkYSYrPsawRdXsko6FtZ65OMJXhXVntHue7Sb7Nn3mRRP1HKb7hPO7h4fD%2FNvSQSwphrbWYK5HWXiuL3TA9srYq7yyVSWgrbijUOxUj4SgDDcJD%2FqsEgau%2FAOQp4%2B%2BDnFAsN5tMbj%2BQ8UFaNcns1FS3EiFgruh%2Bo5AEjhQmgB2SE3EKhOkuYQQPee4otw48qb8XWbCKkcvRoPbKTonU2NuCi7YI8wsPj4wgY6pgHE0NdE3BSkGxJZTGR7NAoOTvHaUpnpk%2FaER2hSdsvHLEothqX0brJ96f5K3lNaCZevZSSYYDYbttQWONyobb8%2BtzxneD08WwTKMAYI%2BXFkwuinOQLbEaZ3VmPilEdfM3raDIoBmE3s6XfSQ08SZUgzQ0JrsMaZRxChTcqowZjJPIVuMf0b334zVMsrldrZlQLXTKLzyMprzHGCZRvc7C1PrCanvjZn&X-Amz-Signature=caaeec18521512f2ef25ad6c8d55d974272ea665a0880e25657b93e184612e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4CRR2L2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBcO37J7lOYwh%2Fbrv8NtkKJYXcLS6KaQJ0wK0%2BIIrYpoAiAdfumPHxvxVHKkd4qrSIlML4neWX9gcD%2FixE5RbtjbgCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2FTxe40zsVrIvygEZKtwD4LNFwJqqQRdRC2k0LdOFo7t3jPknHDqoftCAGTA%2FRUKtgwDft9U1BGpK7QVcI05WxePoh3HGjYy2%2BOTveWmDrncP4ysywK74L1A93pXkzVN9IAY3KNjcJjb4tU125KlbPwQwKMJZgIc6ZG0FBFSryJajbKFt0ZC8QsCnD06UlW30G30Aqzn9xtIcTHtyTBhSnjscd5V98a7k6Jhfc%2F6Dshmp%2BfGM%2BKWNhYje5g0hr22%2FRX9yGl8kSZ0IPAuqiMUEJpO31rwucKocC5%2FG1pwO1RY2nML4QBYvtHQHEZKx1%2FciBn%2FxXqKbLLIwdfL2y8VCmRDB%2FrlptW7ytZgXFSYG5ba9feXG%2FRIJyv1fBaktsk9k650aaPfyLDUX5SbeQX%2FA2D0Ugvuaj2ZaGT7njO%2FCswqmJ6aSz76fkYSYrPsawRdXsko6FtZ65OMJXhXVntHue7Sb7Nn3mRRP1HKb7hPO7h4fD%2FNvSQSwphrbWYK5HWXiuL3TA9srYq7yyVSWgrbijUOxUj4SgDDcJD%2FqsEgau%2FAOQp4%2B%2BDnFAsN5tMbj%2BQ8UFaNcns1FS3EiFgruh%2Bo5AEjhQmgB2SE3EKhOkuYQQPee4otw48qb8XWbCKkcvRoPbKTonU2NuCi7YI8wsPj4wgY6pgHE0NdE3BSkGxJZTGR7NAoOTvHaUpnpk%2FaER2hSdsvHLEothqX0brJ96f5K3lNaCZevZSSYYDYbttQWONyobb8%2BtzxneD08WwTKMAYI%2BXFkwuinOQLbEaZ3VmPilEdfM3raDIoBmE3s6XfSQ08SZUgzQ0JrsMaZRxChTcqowZjJPIVuMf0b334zVMsrldrZlQLXTKLzyMprzHGCZRvc7C1PrCanvjZn&X-Amz-Signature=d8bc58ba630d4fad7b1c68824c9dc506dd4b9ee9c36bfa551340767e68d9b62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4CRR2L2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBcO37J7lOYwh%2Fbrv8NtkKJYXcLS6KaQJ0wK0%2BIIrYpoAiAdfumPHxvxVHKkd4qrSIlML4neWX9gcD%2FixE5RbtjbgCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2FTxe40zsVrIvygEZKtwD4LNFwJqqQRdRC2k0LdOFo7t3jPknHDqoftCAGTA%2FRUKtgwDft9U1BGpK7QVcI05WxePoh3HGjYy2%2BOTveWmDrncP4ysywK74L1A93pXkzVN9IAY3KNjcJjb4tU125KlbPwQwKMJZgIc6ZG0FBFSryJajbKFt0ZC8QsCnD06UlW30G30Aqzn9xtIcTHtyTBhSnjscd5V98a7k6Jhfc%2F6Dshmp%2BfGM%2BKWNhYje5g0hr22%2FRX9yGl8kSZ0IPAuqiMUEJpO31rwucKocC5%2FG1pwO1RY2nML4QBYvtHQHEZKx1%2FciBn%2FxXqKbLLIwdfL2y8VCmRDB%2FrlptW7ytZgXFSYG5ba9feXG%2FRIJyv1fBaktsk9k650aaPfyLDUX5SbeQX%2FA2D0Ugvuaj2ZaGT7njO%2FCswqmJ6aSz76fkYSYrPsawRdXsko6FtZ65OMJXhXVntHue7Sb7Nn3mRRP1HKb7hPO7h4fD%2FNvSQSwphrbWYK5HWXiuL3TA9srYq7yyVSWgrbijUOxUj4SgDDcJD%2FqsEgau%2FAOQp4%2B%2BDnFAsN5tMbj%2BQ8UFaNcns1FS3EiFgruh%2Bo5AEjhQmgB2SE3EKhOkuYQQPee4otw48qb8XWbCKkcvRoPbKTonU2NuCi7YI8wsPj4wgY6pgHE0NdE3BSkGxJZTGR7NAoOTvHaUpnpk%2FaER2hSdsvHLEothqX0brJ96f5K3lNaCZevZSSYYDYbttQWONyobb8%2BtzxneD08WwTKMAYI%2BXFkwuinOQLbEaZ3VmPilEdfM3raDIoBmE3s6XfSQ08SZUgzQ0JrsMaZRxChTcqowZjJPIVuMf0b334zVMsrldrZlQLXTKLzyMprzHGCZRvc7C1PrCanvjZn&X-Amz-Signature=d5b3a34395150d227c71d09d06091cbd7f8c5941fb5c93e2a13792e335bd6d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
