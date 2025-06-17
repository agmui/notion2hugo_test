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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPGYPYF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQfNXH%2BZrPAJC4818LHsFYbyF46UUNqZJa7iTsuoXVmAiEAtUzHlT4yW%2FplmAdAzyRjub%2B75XMf1xXA9ynv2ALX%2BDcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLnc0o82nQXTYnxMNCrcA3DrJvgzzzqeDD7AIYIYqGMRvxKumgvzETQSLTqIqNb4SSvu1cnGYTAbf7glcj4uDlJryvWT3rJ9Q6JS1lDYciQKJh5AfS%2BWHo3GwMUsnj7XIFpNK8xwzO%2BlEQn9%2FrTb9jR0JeKXJR06GDRIM4Yv2sd7GJB8uL1ScQOigzCzalfUf161jcvt9XcltR%2BbedeIzAuGMtfwsDHBTXGaVPRzBa2IITpltKINaxyRU7ivy8g54%2BCQGg%2FT1ZA3REzv%2F5hLyxuO1wYgguS9ymdVuPf%2BZKEb7Vfu0haOIitQQ%2FktTDU%2FCUzak2mzQUbBjGhPSz5hiVXkPU9WEUm2QzVNeDDdMPeLCLxsY6u2q2ML9%2BmEGRKRobGxpv8JOfEKCoPIGjrmfNaDRYTIrS1lJgvakjlxfAkMx37A7BQBscV3lQoKaOQyQxauE4h4fBp4u3rJDt9FL1igu8sHlMhpqK5UAX1ZMV4b4idl3eaWW8EKOIMoTH0FQYAapgLiLWaWH9T75Y2yJbbY5%2F%2FIawNEImqtqqNapC8vExO8MPdc8RKxdmaJYcGkCNI7mhYDZiACaJXp1QrP%2BJNuwiqoZwKa5fkc81C4hg8Hn2qUKxHi02WJlgh%2BD41Z%2F8tWrDyRHeCdft%2B5MKmnxcIGOqUB54lUj76%2BpCFbEfAqHZ%2FmPstTRX1Q%2F%2B2KX42wY2rqoHQZkr4ANXd1%2Fxhrx2Tv998UacECCG8nIEFZ4w46wFzqY1TskweCgj21TuF3cH70jrGm0zaqlXu2nDjzy5nNWtE3OdqiVRxJAnI8BOLElOLXT4hXmi%2BnRXYf0z8daEVfCR5c4%2BMP8Uo7RdZ9o75V1OgxaeBDnpNIfK52IfZWpTBV%2ByGNrIEN&X-Amz-Signature=d4b970cd9c0846eed12b8cbf7e0cdeac432e629cf3b4760b2208fdfdbed374d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPGYPYF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQfNXH%2BZrPAJC4818LHsFYbyF46UUNqZJa7iTsuoXVmAiEAtUzHlT4yW%2FplmAdAzyRjub%2B75XMf1xXA9ynv2ALX%2BDcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLnc0o82nQXTYnxMNCrcA3DrJvgzzzqeDD7AIYIYqGMRvxKumgvzETQSLTqIqNb4SSvu1cnGYTAbf7glcj4uDlJryvWT3rJ9Q6JS1lDYciQKJh5AfS%2BWHo3GwMUsnj7XIFpNK8xwzO%2BlEQn9%2FrTb9jR0JeKXJR06GDRIM4Yv2sd7GJB8uL1ScQOigzCzalfUf161jcvt9XcltR%2BbedeIzAuGMtfwsDHBTXGaVPRzBa2IITpltKINaxyRU7ivy8g54%2BCQGg%2FT1ZA3REzv%2F5hLyxuO1wYgguS9ymdVuPf%2BZKEb7Vfu0haOIitQQ%2FktTDU%2FCUzak2mzQUbBjGhPSz5hiVXkPU9WEUm2QzVNeDDdMPeLCLxsY6u2q2ML9%2BmEGRKRobGxpv8JOfEKCoPIGjrmfNaDRYTIrS1lJgvakjlxfAkMx37A7BQBscV3lQoKaOQyQxauE4h4fBp4u3rJDt9FL1igu8sHlMhpqK5UAX1ZMV4b4idl3eaWW8EKOIMoTH0FQYAapgLiLWaWH9T75Y2yJbbY5%2F%2FIawNEImqtqqNapC8vExO8MPdc8RKxdmaJYcGkCNI7mhYDZiACaJXp1QrP%2BJNuwiqoZwKa5fkc81C4hg8Hn2qUKxHi02WJlgh%2BD41Z%2F8tWrDyRHeCdft%2B5MKmnxcIGOqUB54lUj76%2BpCFbEfAqHZ%2FmPstTRX1Q%2F%2B2KX42wY2rqoHQZkr4ANXd1%2Fxhrx2Tv998UacECCG8nIEFZ4w46wFzqY1TskweCgj21TuF3cH70jrGm0zaqlXu2nDjzy5nNWtE3OdqiVRxJAnI8BOLElOLXT4hXmi%2BnRXYf0z8daEVfCR5c4%2BMP8Uo7RdZ9o75V1OgxaeBDnpNIfK52IfZWpTBV%2ByGNrIEN&X-Amz-Signature=924e1fb5563ace7feb24246a08b766d9869a78845b89b95183dbaaf861c1083f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPGYPYF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQfNXH%2BZrPAJC4818LHsFYbyF46UUNqZJa7iTsuoXVmAiEAtUzHlT4yW%2FplmAdAzyRjub%2B75XMf1xXA9ynv2ALX%2BDcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLnc0o82nQXTYnxMNCrcA3DrJvgzzzqeDD7AIYIYqGMRvxKumgvzETQSLTqIqNb4SSvu1cnGYTAbf7glcj4uDlJryvWT3rJ9Q6JS1lDYciQKJh5AfS%2BWHo3GwMUsnj7XIFpNK8xwzO%2BlEQn9%2FrTb9jR0JeKXJR06GDRIM4Yv2sd7GJB8uL1ScQOigzCzalfUf161jcvt9XcltR%2BbedeIzAuGMtfwsDHBTXGaVPRzBa2IITpltKINaxyRU7ivy8g54%2BCQGg%2FT1ZA3REzv%2F5hLyxuO1wYgguS9ymdVuPf%2BZKEb7Vfu0haOIitQQ%2FktTDU%2FCUzak2mzQUbBjGhPSz5hiVXkPU9WEUm2QzVNeDDdMPeLCLxsY6u2q2ML9%2BmEGRKRobGxpv8JOfEKCoPIGjrmfNaDRYTIrS1lJgvakjlxfAkMx37A7BQBscV3lQoKaOQyQxauE4h4fBp4u3rJDt9FL1igu8sHlMhpqK5UAX1ZMV4b4idl3eaWW8EKOIMoTH0FQYAapgLiLWaWH9T75Y2yJbbY5%2F%2FIawNEImqtqqNapC8vExO8MPdc8RKxdmaJYcGkCNI7mhYDZiACaJXp1QrP%2BJNuwiqoZwKa5fkc81C4hg8Hn2qUKxHi02WJlgh%2BD41Z%2F8tWrDyRHeCdft%2B5MKmnxcIGOqUB54lUj76%2BpCFbEfAqHZ%2FmPstTRX1Q%2F%2B2KX42wY2rqoHQZkr4ANXd1%2Fxhrx2Tv998UacECCG8nIEFZ4w46wFzqY1TskweCgj21TuF3cH70jrGm0zaqlXu2nDjzy5nNWtE3OdqiVRxJAnI8BOLElOLXT4hXmi%2BnRXYf0z8daEVfCR5c4%2BMP8Uo7RdZ9o75V1OgxaeBDnpNIfK52IfZWpTBV%2ByGNrIEN&X-Amz-Signature=4d41b58a26ab17a94947d99d8a8584854e2da1597a6f281fead519c396b067e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPGYPYF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQfNXH%2BZrPAJC4818LHsFYbyF46UUNqZJa7iTsuoXVmAiEAtUzHlT4yW%2FplmAdAzyRjub%2B75XMf1xXA9ynv2ALX%2BDcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLnc0o82nQXTYnxMNCrcA3DrJvgzzzqeDD7AIYIYqGMRvxKumgvzETQSLTqIqNb4SSvu1cnGYTAbf7glcj4uDlJryvWT3rJ9Q6JS1lDYciQKJh5AfS%2BWHo3GwMUsnj7XIFpNK8xwzO%2BlEQn9%2FrTb9jR0JeKXJR06GDRIM4Yv2sd7GJB8uL1ScQOigzCzalfUf161jcvt9XcltR%2BbedeIzAuGMtfwsDHBTXGaVPRzBa2IITpltKINaxyRU7ivy8g54%2BCQGg%2FT1ZA3REzv%2F5hLyxuO1wYgguS9ymdVuPf%2BZKEb7Vfu0haOIitQQ%2FktTDU%2FCUzak2mzQUbBjGhPSz5hiVXkPU9WEUm2QzVNeDDdMPeLCLxsY6u2q2ML9%2BmEGRKRobGxpv8JOfEKCoPIGjrmfNaDRYTIrS1lJgvakjlxfAkMx37A7BQBscV3lQoKaOQyQxauE4h4fBp4u3rJDt9FL1igu8sHlMhpqK5UAX1ZMV4b4idl3eaWW8EKOIMoTH0FQYAapgLiLWaWH9T75Y2yJbbY5%2F%2FIawNEImqtqqNapC8vExO8MPdc8RKxdmaJYcGkCNI7mhYDZiACaJXp1QrP%2BJNuwiqoZwKa5fkc81C4hg8Hn2qUKxHi02WJlgh%2BD41Z%2F8tWrDyRHeCdft%2B5MKmnxcIGOqUB54lUj76%2BpCFbEfAqHZ%2FmPstTRX1Q%2F%2B2KX42wY2rqoHQZkr4ANXd1%2Fxhrx2Tv998UacECCG8nIEFZ4w46wFzqY1TskweCgj21TuF3cH70jrGm0zaqlXu2nDjzy5nNWtE3OdqiVRxJAnI8BOLElOLXT4hXmi%2BnRXYf0z8daEVfCR5c4%2BMP8Uo7RdZ9o75V1OgxaeBDnpNIfK52IfZWpTBV%2ByGNrIEN&X-Amz-Signature=4ceedd288651d3c30be100c17200c67b1daf30f45eecd5e55561fd83058761d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPGYPYF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQfNXH%2BZrPAJC4818LHsFYbyF46UUNqZJa7iTsuoXVmAiEAtUzHlT4yW%2FplmAdAzyRjub%2B75XMf1xXA9ynv2ALX%2BDcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLnc0o82nQXTYnxMNCrcA3DrJvgzzzqeDD7AIYIYqGMRvxKumgvzETQSLTqIqNb4SSvu1cnGYTAbf7glcj4uDlJryvWT3rJ9Q6JS1lDYciQKJh5AfS%2BWHo3GwMUsnj7XIFpNK8xwzO%2BlEQn9%2FrTb9jR0JeKXJR06GDRIM4Yv2sd7GJB8uL1ScQOigzCzalfUf161jcvt9XcltR%2BbedeIzAuGMtfwsDHBTXGaVPRzBa2IITpltKINaxyRU7ivy8g54%2BCQGg%2FT1ZA3REzv%2F5hLyxuO1wYgguS9ymdVuPf%2BZKEb7Vfu0haOIitQQ%2FktTDU%2FCUzak2mzQUbBjGhPSz5hiVXkPU9WEUm2QzVNeDDdMPeLCLxsY6u2q2ML9%2BmEGRKRobGxpv8JOfEKCoPIGjrmfNaDRYTIrS1lJgvakjlxfAkMx37A7BQBscV3lQoKaOQyQxauE4h4fBp4u3rJDt9FL1igu8sHlMhpqK5UAX1ZMV4b4idl3eaWW8EKOIMoTH0FQYAapgLiLWaWH9T75Y2yJbbY5%2F%2FIawNEImqtqqNapC8vExO8MPdc8RKxdmaJYcGkCNI7mhYDZiACaJXp1QrP%2BJNuwiqoZwKa5fkc81C4hg8Hn2qUKxHi02WJlgh%2BD41Z%2F8tWrDyRHeCdft%2B5MKmnxcIGOqUB54lUj76%2BpCFbEfAqHZ%2FmPstTRX1Q%2F%2B2KX42wY2rqoHQZkr4ANXd1%2Fxhrx2Tv998UacECCG8nIEFZ4w46wFzqY1TskweCgj21TuF3cH70jrGm0zaqlXu2nDjzy5nNWtE3OdqiVRxJAnI8BOLElOLXT4hXmi%2BnRXYf0z8daEVfCR5c4%2BMP8Uo7RdZ9o75V1OgxaeBDnpNIfK52IfZWpTBV%2ByGNrIEN&X-Amz-Signature=75f8fbd8808f1c2aeafdaf64bfe74beeda466984e98af41fa5ced087f86d54b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPGYPYF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQfNXH%2BZrPAJC4818LHsFYbyF46UUNqZJa7iTsuoXVmAiEAtUzHlT4yW%2FplmAdAzyRjub%2B75XMf1xXA9ynv2ALX%2BDcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLnc0o82nQXTYnxMNCrcA3DrJvgzzzqeDD7AIYIYqGMRvxKumgvzETQSLTqIqNb4SSvu1cnGYTAbf7glcj4uDlJryvWT3rJ9Q6JS1lDYciQKJh5AfS%2BWHo3GwMUsnj7XIFpNK8xwzO%2BlEQn9%2FrTb9jR0JeKXJR06GDRIM4Yv2sd7GJB8uL1ScQOigzCzalfUf161jcvt9XcltR%2BbedeIzAuGMtfwsDHBTXGaVPRzBa2IITpltKINaxyRU7ivy8g54%2BCQGg%2FT1ZA3REzv%2F5hLyxuO1wYgguS9ymdVuPf%2BZKEb7Vfu0haOIitQQ%2FktTDU%2FCUzak2mzQUbBjGhPSz5hiVXkPU9WEUm2QzVNeDDdMPeLCLxsY6u2q2ML9%2BmEGRKRobGxpv8JOfEKCoPIGjrmfNaDRYTIrS1lJgvakjlxfAkMx37A7BQBscV3lQoKaOQyQxauE4h4fBp4u3rJDt9FL1igu8sHlMhpqK5UAX1ZMV4b4idl3eaWW8EKOIMoTH0FQYAapgLiLWaWH9T75Y2yJbbY5%2F%2FIawNEImqtqqNapC8vExO8MPdc8RKxdmaJYcGkCNI7mhYDZiACaJXp1QrP%2BJNuwiqoZwKa5fkc81C4hg8Hn2qUKxHi02WJlgh%2BD41Z%2F8tWrDyRHeCdft%2B5MKmnxcIGOqUB54lUj76%2BpCFbEfAqHZ%2FmPstTRX1Q%2F%2B2KX42wY2rqoHQZkr4ANXd1%2Fxhrx2Tv998UacECCG8nIEFZ4w46wFzqY1TskweCgj21TuF3cH70jrGm0zaqlXu2nDjzy5nNWtE3OdqiVRxJAnI8BOLElOLXT4hXmi%2BnRXYf0z8daEVfCR5c4%2BMP8Uo7RdZ9o75V1OgxaeBDnpNIfK52IfZWpTBV%2ByGNrIEN&X-Amz-Signature=f39750c042b05a55043dae9f2e18151a6d21823d810ef9f997a342c6a9f11064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPGYPYF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQfNXH%2BZrPAJC4818LHsFYbyF46UUNqZJa7iTsuoXVmAiEAtUzHlT4yW%2FplmAdAzyRjub%2B75XMf1xXA9ynv2ALX%2BDcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLnc0o82nQXTYnxMNCrcA3DrJvgzzzqeDD7AIYIYqGMRvxKumgvzETQSLTqIqNb4SSvu1cnGYTAbf7glcj4uDlJryvWT3rJ9Q6JS1lDYciQKJh5AfS%2BWHo3GwMUsnj7XIFpNK8xwzO%2BlEQn9%2FrTb9jR0JeKXJR06GDRIM4Yv2sd7GJB8uL1ScQOigzCzalfUf161jcvt9XcltR%2BbedeIzAuGMtfwsDHBTXGaVPRzBa2IITpltKINaxyRU7ivy8g54%2BCQGg%2FT1ZA3REzv%2F5hLyxuO1wYgguS9ymdVuPf%2BZKEb7Vfu0haOIitQQ%2FktTDU%2FCUzak2mzQUbBjGhPSz5hiVXkPU9WEUm2QzVNeDDdMPeLCLxsY6u2q2ML9%2BmEGRKRobGxpv8JOfEKCoPIGjrmfNaDRYTIrS1lJgvakjlxfAkMx37A7BQBscV3lQoKaOQyQxauE4h4fBp4u3rJDt9FL1igu8sHlMhpqK5UAX1ZMV4b4idl3eaWW8EKOIMoTH0FQYAapgLiLWaWH9T75Y2yJbbY5%2F%2FIawNEImqtqqNapC8vExO8MPdc8RKxdmaJYcGkCNI7mhYDZiACaJXp1QrP%2BJNuwiqoZwKa5fkc81C4hg8Hn2qUKxHi02WJlgh%2BD41Z%2F8tWrDyRHeCdft%2B5MKmnxcIGOqUB54lUj76%2BpCFbEfAqHZ%2FmPstTRX1Q%2F%2B2KX42wY2rqoHQZkr4ANXd1%2Fxhrx2Tv998UacECCG8nIEFZ4w46wFzqY1TskweCgj21TuF3cH70jrGm0zaqlXu2nDjzy5nNWtE3OdqiVRxJAnI8BOLElOLXT4hXmi%2BnRXYf0z8daEVfCR5c4%2BMP8Uo7RdZ9o75V1OgxaeBDnpNIfK52IfZWpTBV%2ByGNrIEN&X-Amz-Signature=8dae89fdefcd99bf48a004a7102574a536f5bbc180f07982759b176764f7c382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
