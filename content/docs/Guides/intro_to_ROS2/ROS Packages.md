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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPUN36U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrElX3FBqKsLt3TPVYghtdef5DjaSwV98JTTki%2BcFqMQIgVMozNAvc02Pj4NmUrYDCcpzFD2OTkFO06jBXHvi58dwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLBo3FNICKsISHo%2FCrcA76rsWYXBrUnZE9PSGWlvAk6dtKr1dTuqy%2FH8xO3845X5bSBdB6FPX1UEfjy1HjOglTcWSAmpqPiasocrvMcxD4DsFfYNVa%2FalyrSPTn2TgMftLS3ovLmmeR8x%2BvUqvo%2Beood3jtEffYCPuu5VYoVog9gpv9I%2BZBfOIx1puWC%2BZCkD8YRm1YHODR1R6adgtBUX884ajCQVrrC6hqvAzYkgkRtLIjT88E84CT8g74sXWKBGbfFSNkm0xCOnVV%2BlhvUFeRsSz3wpv7Jr1aZkvmMBmLyjaaRm2rbt8P9Lem5bUlMTZbkUKYRUvBeCWQFSB0wqQtO6dPSHd6iYy1YPwxu5J3%2FNRceNssjtU9jJJ5AUHLNnkHRODEFO4O3Jis7P2i9Q5cXkIlreRL%2FSe1C2MjKiDuw6iUrA3%2FZxMl5ZaNnbyCayasMQ4iqHuycHN6j9GB8b42lLO5RBGoWkSnzg92d9ZHBdItNJT2vWLqTTUBNVoJanjMRgFwHdk1BCW5eDzmNnGHhD914ElcN%2BlEJl%2FC5lo11kXdQjD1LRIbFllBREpvnq0ekYCEZWqo0RILAhEf4vZpoV2zX5hhyO%2FL2EZzek2aC8KnVbv7JDdIBZHtyUlsHnzJKVgpRHV3o6nFMOmiycIGOqUB4EZqToV4qE%2BSz5xEE7ueOTd33OyD%2FR8cG5rJcnphX23K58D%2BV%2B0KHy4WmfuMxpMFmCIfFXCNo%2F7WTJWnp84UUqGR4ocVXjX7%2BJ6h0ECRw9bNhOAseemlZKnYz01P8RekFVOPiTLEcTLitgRijfDhBx%2Bo3hrLtiBEjf7AbwMwxChCnCZTbRfH1fcWBHnSyCC1uBUT5BFVCYHtKsX3YnsthKrBH7Bi&X-Amz-Signature=8c4a75f8750bc3784b08c7b4afa90efa9675f3073e92428a13d7d10a3a7b6296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPUN36U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrElX3FBqKsLt3TPVYghtdef5DjaSwV98JTTki%2BcFqMQIgVMozNAvc02Pj4NmUrYDCcpzFD2OTkFO06jBXHvi58dwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLBo3FNICKsISHo%2FCrcA76rsWYXBrUnZE9PSGWlvAk6dtKr1dTuqy%2FH8xO3845X5bSBdB6FPX1UEfjy1HjOglTcWSAmpqPiasocrvMcxD4DsFfYNVa%2FalyrSPTn2TgMftLS3ovLmmeR8x%2BvUqvo%2Beood3jtEffYCPuu5VYoVog9gpv9I%2BZBfOIx1puWC%2BZCkD8YRm1YHODR1R6adgtBUX884ajCQVrrC6hqvAzYkgkRtLIjT88E84CT8g74sXWKBGbfFSNkm0xCOnVV%2BlhvUFeRsSz3wpv7Jr1aZkvmMBmLyjaaRm2rbt8P9Lem5bUlMTZbkUKYRUvBeCWQFSB0wqQtO6dPSHd6iYy1YPwxu5J3%2FNRceNssjtU9jJJ5AUHLNnkHRODEFO4O3Jis7P2i9Q5cXkIlreRL%2FSe1C2MjKiDuw6iUrA3%2FZxMl5ZaNnbyCayasMQ4iqHuycHN6j9GB8b42lLO5RBGoWkSnzg92d9ZHBdItNJT2vWLqTTUBNVoJanjMRgFwHdk1BCW5eDzmNnGHhD914ElcN%2BlEJl%2FC5lo11kXdQjD1LRIbFllBREpvnq0ekYCEZWqo0RILAhEf4vZpoV2zX5hhyO%2FL2EZzek2aC8KnVbv7JDdIBZHtyUlsHnzJKVgpRHV3o6nFMOmiycIGOqUB4EZqToV4qE%2BSz5xEE7ueOTd33OyD%2FR8cG5rJcnphX23K58D%2BV%2B0KHy4WmfuMxpMFmCIfFXCNo%2F7WTJWnp84UUqGR4ocVXjX7%2BJ6h0ECRw9bNhOAseemlZKnYz01P8RekFVOPiTLEcTLitgRijfDhBx%2Bo3hrLtiBEjf7AbwMwxChCnCZTbRfH1fcWBHnSyCC1uBUT5BFVCYHtKsX3YnsthKrBH7Bi&X-Amz-Signature=bc562a1eb895db853a85f380ee4cc050b67e5b01dd8a654af404d44dfd868c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPUN36U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrElX3FBqKsLt3TPVYghtdef5DjaSwV98JTTki%2BcFqMQIgVMozNAvc02Pj4NmUrYDCcpzFD2OTkFO06jBXHvi58dwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLBo3FNICKsISHo%2FCrcA76rsWYXBrUnZE9PSGWlvAk6dtKr1dTuqy%2FH8xO3845X5bSBdB6FPX1UEfjy1HjOglTcWSAmpqPiasocrvMcxD4DsFfYNVa%2FalyrSPTn2TgMftLS3ovLmmeR8x%2BvUqvo%2Beood3jtEffYCPuu5VYoVog9gpv9I%2BZBfOIx1puWC%2BZCkD8YRm1YHODR1R6adgtBUX884ajCQVrrC6hqvAzYkgkRtLIjT88E84CT8g74sXWKBGbfFSNkm0xCOnVV%2BlhvUFeRsSz3wpv7Jr1aZkvmMBmLyjaaRm2rbt8P9Lem5bUlMTZbkUKYRUvBeCWQFSB0wqQtO6dPSHd6iYy1YPwxu5J3%2FNRceNssjtU9jJJ5AUHLNnkHRODEFO4O3Jis7P2i9Q5cXkIlreRL%2FSe1C2MjKiDuw6iUrA3%2FZxMl5ZaNnbyCayasMQ4iqHuycHN6j9GB8b42lLO5RBGoWkSnzg92d9ZHBdItNJT2vWLqTTUBNVoJanjMRgFwHdk1BCW5eDzmNnGHhD914ElcN%2BlEJl%2FC5lo11kXdQjD1LRIbFllBREpvnq0ekYCEZWqo0RILAhEf4vZpoV2zX5hhyO%2FL2EZzek2aC8KnVbv7JDdIBZHtyUlsHnzJKVgpRHV3o6nFMOmiycIGOqUB4EZqToV4qE%2BSz5xEE7ueOTd33OyD%2FR8cG5rJcnphX23K58D%2BV%2B0KHy4WmfuMxpMFmCIfFXCNo%2F7WTJWnp84UUqGR4ocVXjX7%2BJ6h0ECRw9bNhOAseemlZKnYz01P8RekFVOPiTLEcTLitgRijfDhBx%2Bo3hrLtiBEjf7AbwMwxChCnCZTbRfH1fcWBHnSyCC1uBUT5BFVCYHtKsX3YnsthKrBH7Bi&X-Amz-Signature=968d6dd15dff6622fbe3dbff15b0d9a4d394a72f20470633ea0c178ba000f63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPUN36U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrElX3FBqKsLt3TPVYghtdef5DjaSwV98JTTki%2BcFqMQIgVMozNAvc02Pj4NmUrYDCcpzFD2OTkFO06jBXHvi58dwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLBo3FNICKsISHo%2FCrcA76rsWYXBrUnZE9PSGWlvAk6dtKr1dTuqy%2FH8xO3845X5bSBdB6FPX1UEfjy1HjOglTcWSAmpqPiasocrvMcxD4DsFfYNVa%2FalyrSPTn2TgMftLS3ovLmmeR8x%2BvUqvo%2Beood3jtEffYCPuu5VYoVog9gpv9I%2BZBfOIx1puWC%2BZCkD8YRm1YHODR1R6adgtBUX884ajCQVrrC6hqvAzYkgkRtLIjT88E84CT8g74sXWKBGbfFSNkm0xCOnVV%2BlhvUFeRsSz3wpv7Jr1aZkvmMBmLyjaaRm2rbt8P9Lem5bUlMTZbkUKYRUvBeCWQFSB0wqQtO6dPSHd6iYy1YPwxu5J3%2FNRceNssjtU9jJJ5AUHLNnkHRODEFO4O3Jis7P2i9Q5cXkIlreRL%2FSe1C2MjKiDuw6iUrA3%2FZxMl5ZaNnbyCayasMQ4iqHuycHN6j9GB8b42lLO5RBGoWkSnzg92d9ZHBdItNJT2vWLqTTUBNVoJanjMRgFwHdk1BCW5eDzmNnGHhD914ElcN%2BlEJl%2FC5lo11kXdQjD1LRIbFllBREpvnq0ekYCEZWqo0RILAhEf4vZpoV2zX5hhyO%2FL2EZzek2aC8KnVbv7JDdIBZHtyUlsHnzJKVgpRHV3o6nFMOmiycIGOqUB4EZqToV4qE%2BSz5xEE7ueOTd33OyD%2FR8cG5rJcnphX23K58D%2BV%2B0KHy4WmfuMxpMFmCIfFXCNo%2F7WTJWnp84UUqGR4ocVXjX7%2BJ6h0ECRw9bNhOAseemlZKnYz01P8RekFVOPiTLEcTLitgRijfDhBx%2Bo3hrLtiBEjf7AbwMwxChCnCZTbRfH1fcWBHnSyCC1uBUT5BFVCYHtKsX3YnsthKrBH7Bi&X-Amz-Signature=dd4ac6ffae3adbc4de00e48c1d96728cbc955541500b1b195f144157657c0a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPUN36U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrElX3FBqKsLt3TPVYghtdef5DjaSwV98JTTki%2BcFqMQIgVMozNAvc02Pj4NmUrYDCcpzFD2OTkFO06jBXHvi58dwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLBo3FNICKsISHo%2FCrcA76rsWYXBrUnZE9PSGWlvAk6dtKr1dTuqy%2FH8xO3845X5bSBdB6FPX1UEfjy1HjOglTcWSAmpqPiasocrvMcxD4DsFfYNVa%2FalyrSPTn2TgMftLS3ovLmmeR8x%2BvUqvo%2Beood3jtEffYCPuu5VYoVog9gpv9I%2BZBfOIx1puWC%2BZCkD8YRm1YHODR1R6adgtBUX884ajCQVrrC6hqvAzYkgkRtLIjT88E84CT8g74sXWKBGbfFSNkm0xCOnVV%2BlhvUFeRsSz3wpv7Jr1aZkvmMBmLyjaaRm2rbt8P9Lem5bUlMTZbkUKYRUvBeCWQFSB0wqQtO6dPSHd6iYy1YPwxu5J3%2FNRceNssjtU9jJJ5AUHLNnkHRODEFO4O3Jis7P2i9Q5cXkIlreRL%2FSe1C2MjKiDuw6iUrA3%2FZxMl5ZaNnbyCayasMQ4iqHuycHN6j9GB8b42lLO5RBGoWkSnzg92d9ZHBdItNJT2vWLqTTUBNVoJanjMRgFwHdk1BCW5eDzmNnGHhD914ElcN%2BlEJl%2FC5lo11kXdQjD1LRIbFllBREpvnq0ekYCEZWqo0RILAhEf4vZpoV2zX5hhyO%2FL2EZzek2aC8KnVbv7JDdIBZHtyUlsHnzJKVgpRHV3o6nFMOmiycIGOqUB4EZqToV4qE%2BSz5xEE7ueOTd33OyD%2FR8cG5rJcnphX23K58D%2BV%2B0KHy4WmfuMxpMFmCIfFXCNo%2F7WTJWnp84UUqGR4ocVXjX7%2BJ6h0ECRw9bNhOAseemlZKnYz01P8RekFVOPiTLEcTLitgRijfDhBx%2Bo3hrLtiBEjf7AbwMwxChCnCZTbRfH1fcWBHnSyCC1uBUT5BFVCYHtKsX3YnsthKrBH7Bi&X-Amz-Signature=691392e00ef60a6be989ea18f4805acb6ed99c3eb12426ff738e39c1d9f1e1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPUN36U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrElX3FBqKsLt3TPVYghtdef5DjaSwV98JTTki%2BcFqMQIgVMozNAvc02Pj4NmUrYDCcpzFD2OTkFO06jBXHvi58dwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLBo3FNICKsISHo%2FCrcA76rsWYXBrUnZE9PSGWlvAk6dtKr1dTuqy%2FH8xO3845X5bSBdB6FPX1UEfjy1HjOglTcWSAmpqPiasocrvMcxD4DsFfYNVa%2FalyrSPTn2TgMftLS3ovLmmeR8x%2BvUqvo%2Beood3jtEffYCPuu5VYoVog9gpv9I%2BZBfOIx1puWC%2BZCkD8YRm1YHODR1R6adgtBUX884ajCQVrrC6hqvAzYkgkRtLIjT88E84CT8g74sXWKBGbfFSNkm0xCOnVV%2BlhvUFeRsSz3wpv7Jr1aZkvmMBmLyjaaRm2rbt8P9Lem5bUlMTZbkUKYRUvBeCWQFSB0wqQtO6dPSHd6iYy1YPwxu5J3%2FNRceNssjtU9jJJ5AUHLNnkHRODEFO4O3Jis7P2i9Q5cXkIlreRL%2FSe1C2MjKiDuw6iUrA3%2FZxMl5ZaNnbyCayasMQ4iqHuycHN6j9GB8b42lLO5RBGoWkSnzg92d9ZHBdItNJT2vWLqTTUBNVoJanjMRgFwHdk1BCW5eDzmNnGHhD914ElcN%2BlEJl%2FC5lo11kXdQjD1LRIbFllBREpvnq0ekYCEZWqo0RILAhEf4vZpoV2zX5hhyO%2FL2EZzek2aC8KnVbv7JDdIBZHtyUlsHnzJKVgpRHV3o6nFMOmiycIGOqUB4EZqToV4qE%2BSz5xEE7ueOTd33OyD%2FR8cG5rJcnphX23K58D%2BV%2B0KHy4WmfuMxpMFmCIfFXCNo%2F7WTJWnp84UUqGR4ocVXjX7%2BJ6h0ECRw9bNhOAseemlZKnYz01P8RekFVOPiTLEcTLitgRijfDhBx%2Bo3hrLtiBEjf7AbwMwxChCnCZTbRfH1fcWBHnSyCC1uBUT5BFVCYHtKsX3YnsthKrBH7Bi&X-Amz-Signature=3a84d984fb475193f829d7ac69e4cbbda2cf485cffa138333620482563f21985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPUN36U%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrElX3FBqKsLt3TPVYghtdef5DjaSwV98JTTki%2BcFqMQIgVMozNAvc02Pj4NmUrYDCcpzFD2OTkFO06jBXHvi58dwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLBo3FNICKsISHo%2FCrcA76rsWYXBrUnZE9PSGWlvAk6dtKr1dTuqy%2FH8xO3845X5bSBdB6FPX1UEfjy1HjOglTcWSAmpqPiasocrvMcxD4DsFfYNVa%2FalyrSPTn2TgMftLS3ovLmmeR8x%2BvUqvo%2Beood3jtEffYCPuu5VYoVog9gpv9I%2BZBfOIx1puWC%2BZCkD8YRm1YHODR1R6adgtBUX884ajCQVrrC6hqvAzYkgkRtLIjT88E84CT8g74sXWKBGbfFSNkm0xCOnVV%2BlhvUFeRsSz3wpv7Jr1aZkvmMBmLyjaaRm2rbt8P9Lem5bUlMTZbkUKYRUvBeCWQFSB0wqQtO6dPSHd6iYy1YPwxu5J3%2FNRceNssjtU9jJJ5AUHLNnkHRODEFO4O3Jis7P2i9Q5cXkIlreRL%2FSe1C2MjKiDuw6iUrA3%2FZxMl5ZaNnbyCayasMQ4iqHuycHN6j9GB8b42lLO5RBGoWkSnzg92d9ZHBdItNJT2vWLqTTUBNVoJanjMRgFwHdk1BCW5eDzmNnGHhD914ElcN%2BlEJl%2FC5lo11kXdQjD1LRIbFllBREpvnq0ekYCEZWqo0RILAhEf4vZpoV2zX5hhyO%2FL2EZzek2aC8KnVbv7JDdIBZHtyUlsHnzJKVgpRHV3o6nFMOmiycIGOqUB4EZqToV4qE%2BSz5xEE7ueOTd33OyD%2FR8cG5rJcnphX23K58D%2BV%2B0KHy4WmfuMxpMFmCIfFXCNo%2F7WTJWnp84UUqGR4ocVXjX7%2BJ6h0ECRw9bNhOAseemlZKnYz01P8RekFVOPiTLEcTLitgRijfDhBx%2Bo3hrLtiBEjf7AbwMwxChCnCZTbRfH1fcWBHnSyCC1uBUT5BFVCYHtKsX3YnsthKrBH7Bi&X-Amz-Signature=cc878c7823747480a4c9f6254c74eb0d53262906fed719f9b8ffce3935d6517c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
