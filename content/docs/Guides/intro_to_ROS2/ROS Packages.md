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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6YUDDK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFYH6FmZAVrwRQTabKBI8FvhXKOohYdWQMogrYeXQPoiAiBTmQnMSxYb%2B4grFalMijzTQnIGEprKl4niXR6YHvRmMyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsrhsAkrh2cqI%2Fej8KtwDZ5dvnT77Aq4eK0k47YC1WVI6w5rbuRRNVnt3wMiEOcLEY4ZWH5NekcH%2FKrBs51TGXPq22901U3SjwnzRalSWK2YhOktR8Ye1mgeu9oi0IEohEVebFd8uBcrmXdbPlcLIpfVMEfeVfwwWRDfyQezJoS4un0DN7OD%2F0b5OfN6zpshXfDuXKNajZaKXeHrof5sngTdZxwfjF7Zc7Tn1qDvz9LHzriKmCaX58DP76oH9HiV3G4K%2FXpcjpw5HcBb0P4wAgQL5QN9q4PaSXhSQEIhXQUY6V2fNECB8rAJ9cN8K488jGEGZhr%2B5kANvRP3qF9c7vAi5EcUpn2tNfDMjdVBgcQx26BR9rGFwUNHJbs2fPBWwd3SRzZH%2FRujH5alPuwnWbNsC%2BNu%2BMOYaouVPvy6f9m87GJ4w1Uyf5tk9%2F6yOxf%2B4b3Yfpu7PbfP7iCCwTMvETlpacuI9mvFCtQAM0QGTkSpWE68%2F3AvkZwomd1c8Ry2cDu8pWqwZFe5%2BtdhHXTEW4hC4jTUdIp5CDixPiKIDexwpcTG9KvXKceDcvFe5WtstDW%2BIyEVOue7XUxROiF4f1kOCUp5JWpe28ghFcy%2BHQKDDLgDPSFkjKP1ygqhiuv1A8a6NXLkajyONFM0w1K%2FBwgY6pgG7Nb3LYkFrODD5PBCP%2BauBURILwjuwKSIN%2BSYN9MDpss8IjtKt2%2Fnpla%2FkE4k2QOlVXl%2FEV8AZKpdIOXP5ztxeFQZmVyNoNNc46Z%2BThHi%2FsEd5WNrq5EDaz7q0A761F8ghEYtI%2BGVt6DO60y0roYp%2B21j98e0UQEZie1wIRztytJVIs%2Fgri0ozsKFvUAX4XY0v8ZITMd%2FJnw%2FLGHrfJreek1afyVh4&X-Amz-Signature=1776038d1fdf5f96e78689f90bfa488eec1b691803c6901bed14ae983773a343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6YUDDK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFYH6FmZAVrwRQTabKBI8FvhXKOohYdWQMogrYeXQPoiAiBTmQnMSxYb%2B4grFalMijzTQnIGEprKl4niXR6YHvRmMyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsrhsAkrh2cqI%2Fej8KtwDZ5dvnT77Aq4eK0k47YC1WVI6w5rbuRRNVnt3wMiEOcLEY4ZWH5NekcH%2FKrBs51TGXPq22901U3SjwnzRalSWK2YhOktR8Ye1mgeu9oi0IEohEVebFd8uBcrmXdbPlcLIpfVMEfeVfwwWRDfyQezJoS4un0DN7OD%2F0b5OfN6zpshXfDuXKNajZaKXeHrof5sngTdZxwfjF7Zc7Tn1qDvz9LHzriKmCaX58DP76oH9HiV3G4K%2FXpcjpw5HcBb0P4wAgQL5QN9q4PaSXhSQEIhXQUY6V2fNECB8rAJ9cN8K488jGEGZhr%2B5kANvRP3qF9c7vAi5EcUpn2tNfDMjdVBgcQx26BR9rGFwUNHJbs2fPBWwd3SRzZH%2FRujH5alPuwnWbNsC%2BNu%2BMOYaouVPvy6f9m87GJ4w1Uyf5tk9%2F6yOxf%2B4b3Yfpu7PbfP7iCCwTMvETlpacuI9mvFCtQAM0QGTkSpWE68%2F3AvkZwomd1c8Ry2cDu8pWqwZFe5%2BtdhHXTEW4hC4jTUdIp5CDixPiKIDexwpcTG9KvXKceDcvFe5WtstDW%2BIyEVOue7XUxROiF4f1kOCUp5JWpe28ghFcy%2BHQKDDLgDPSFkjKP1ygqhiuv1A8a6NXLkajyONFM0w1K%2FBwgY6pgG7Nb3LYkFrODD5PBCP%2BauBURILwjuwKSIN%2BSYN9MDpss8IjtKt2%2Fnpla%2FkE4k2QOlVXl%2FEV8AZKpdIOXP5ztxeFQZmVyNoNNc46Z%2BThHi%2FsEd5WNrq5EDaz7q0A761F8ghEYtI%2BGVt6DO60y0roYp%2B21j98e0UQEZie1wIRztytJVIs%2Fgri0ozsKFvUAX4XY0v8ZITMd%2FJnw%2FLGHrfJreek1afyVh4&X-Amz-Signature=9c199af5576ac580dadd51486e5813bace5416ef0fb321d58248924e898dad83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6YUDDK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFYH6FmZAVrwRQTabKBI8FvhXKOohYdWQMogrYeXQPoiAiBTmQnMSxYb%2B4grFalMijzTQnIGEprKl4niXR6YHvRmMyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsrhsAkrh2cqI%2Fej8KtwDZ5dvnT77Aq4eK0k47YC1WVI6w5rbuRRNVnt3wMiEOcLEY4ZWH5NekcH%2FKrBs51TGXPq22901U3SjwnzRalSWK2YhOktR8Ye1mgeu9oi0IEohEVebFd8uBcrmXdbPlcLIpfVMEfeVfwwWRDfyQezJoS4un0DN7OD%2F0b5OfN6zpshXfDuXKNajZaKXeHrof5sngTdZxwfjF7Zc7Tn1qDvz9LHzriKmCaX58DP76oH9HiV3G4K%2FXpcjpw5HcBb0P4wAgQL5QN9q4PaSXhSQEIhXQUY6V2fNECB8rAJ9cN8K488jGEGZhr%2B5kANvRP3qF9c7vAi5EcUpn2tNfDMjdVBgcQx26BR9rGFwUNHJbs2fPBWwd3SRzZH%2FRujH5alPuwnWbNsC%2BNu%2BMOYaouVPvy6f9m87GJ4w1Uyf5tk9%2F6yOxf%2B4b3Yfpu7PbfP7iCCwTMvETlpacuI9mvFCtQAM0QGTkSpWE68%2F3AvkZwomd1c8Ry2cDu8pWqwZFe5%2BtdhHXTEW4hC4jTUdIp5CDixPiKIDexwpcTG9KvXKceDcvFe5WtstDW%2BIyEVOue7XUxROiF4f1kOCUp5JWpe28ghFcy%2BHQKDDLgDPSFkjKP1ygqhiuv1A8a6NXLkajyONFM0w1K%2FBwgY6pgG7Nb3LYkFrODD5PBCP%2BauBURILwjuwKSIN%2BSYN9MDpss8IjtKt2%2Fnpla%2FkE4k2QOlVXl%2FEV8AZKpdIOXP5ztxeFQZmVyNoNNc46Z%2BThHi%2FsEd5WNrq5EDaz7q0A761F8ghEYtI%2BGVt6DO60y0roYp%2B21j98e0UQEZie1wIRztytJVIs%2Fgri0ozsKFvUAX4XY0v8ZITMd%2FJnw%2FLGHrfJreek1afyVh4&X-Amz-Signature=7d442011357dc938b6e984d35a5516b859b0a54a2178b45af320b9b48c600e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6YUDDK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFYH6FmZAVrwRQTabKBI8FvhXKOohYdWQMogrYeXQPoiAiBTmQnMSxYb%2B4grFalMijzTQnIGEprKl4niXR6YHvRmMyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsrhsAkrh2cqI%2Fej8KtwDZ5dvnT77Aq4eK0k47YC1WVI6w5rbuRRNVnt3wMiEOcLEY4ZWH5NekcH%2FKrBs51TGXPq22901U3SjwnzRalSWK2YhOktR8Ye1mgeu9oi0IEohEVebFd8uBcrmXdbPlcLIpfVMEfeVfwwWRDfyQezJoS4un0DN7OD%2F0b5OfN6zpshXfDuXKNajZaKXeHrof5sngTdZxwfjF7Zc7Tn1qDvz9LHzriKmCaX58DP76oH9HiV3G4K%2FXpcjpw5HcBb0P4wAgQL5QN9q4PaSXhSQEIhXQUY6V2fNECB8rAJ9cN8K488jGEGZhr%2B5kANvRP3qF9c7vAi5EcUpn2tNfDMjdVBgcQx26BR9rGFwUNHJbs2fPBWwd3SRzZH%2FRujH5alPuwnWbNsC%2BNu%2BMOYaouVPvy6f9m87GJ4w1Uyf5tk9%2F6yOxf%2B4b3Yfpu7PbfP7iCCwTMvETlpacuI9mvFCtQAM0QGTkSpWE68%2F3AvkZwomd1c8Ry2cDu8pWqwZFe5%2BtdhHXTEW4hC4jTUdIp5CDixPiKIDexwpcTG9KvXKceDcvFe5WtstDW%2BIyEVOue7XUxROiF4f1kOCUp5JWpe28ghFcy%2BHQKDDLgDPSFkjKP1ygqhiuv1A8a6NXLkajyONFM0w1K%2FBwgY6pgG7Nb3LYkFrODD5PBCP%2BauBURILwjuwKSIN%2BSYN9MDpss8IjtKt2%2Fnpla%2FkE4k2QOlVXl%2FEV8AZKpdIOXP5ztxeFQZmVyNoNNc46Z%2BThHi%2FsEd5WNrq5EDaz7q0A761F8ghEYtI%2BGVt6DO60y0roYp%2B21j98e0UQEZie1wIRztytJVIs%2Fgri0ozsKFvUAX4XY0v8ZITMd%2FJnw%2FLGHrfJreek1afyVh4&X-Amz-Signature=fd58919841d6a25e8746a1bcd5afa673857783e61f930c877763660fb2660469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6YUDDK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFYH6FmZAVrwRQTabKBI8FvhXKOohYdWQMogrYeXQPoiAiBTmQnMSxYb%2B4grFalMijzTQnIGEprKl4niXR6YHvRmMyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsrhsAkrh2cqI%2Fej8KtwDZ5dvnT77Aq4eK0k47YC1WVI6w5rbuRRNVnt3wMiEOcLEY4ZWH5NekcH%2FKrBs51TGXPq22901U3SjwnzRalSWK2YhOktR8Ye1mgeu9oi0IEohEVebFd8uBcrmXdbPlcLIpfVMEfeVfwwWRDfyQezJoS4un0DN7OD%2F0b5OfN6zpshXfDuXKNajZaKXeHrof5sngTdZxwfjF7Zc7Tn1qDvz9LHzriKmCaX58DP76oH9HiV3G4K%2FXpcjpw5HcBb0P4wAgQL5QN9q4PaSXhSQEIhXQUY6V2fNECB8rAJ9cN8K488jGEGZhr%2B5kANvRP3qF9c7vAi5EcUpn2tNfDMjdVBgcQx26BR9rGFwUNHJbs2fPBWwd3SRzZH%2FRujH5alPuwnWbNsC%2BNu%2BMOYaouVPvy6f9m87GJ4w1Uyf5tk9%2F6yOxf%2B4b3Yfpu7PbfP7iCCwTMvETlpacuI9mvFCtQAM0QGTkSpWE68%2F3AvkZwomd1c8Ry2cDu8pWqwZFe5%2BtdhHXTEW4hC4jTUdIp5CDixPiKIDexwpcTG9KvXKceDcvFe5WtstDW%2BIyEVOue7XUxROiF4f1kOCUp5JWpe28ghFcy%2BHQKDDLgDPSFkjKP1ygqhiuv1A8a6NXLkajyONFM0w1K%2FBwgY6pgG7Nb3LYkFrODD5PBCP%2BauBURILwjuwKSIN%2BSYN9MDpss8IjtKt2%2Fnpla%2FkE4k2QOlVXl%2FEV8AZKpdIOXP5ztxeFQZmVyNoNNc46Z%2BThHi%2FsEd5WNrq5EDaz7q0A761F8ghEYtI%2BGVt6DO60y0roYp%2B21j98e0UQEZie1wIRztytJVIs%2Fgri0ozsKFvUAX4XY0v8ZITMd%2FJnw%2FLGHrfJreek1afyVh4&X-Amz-Signature=fc24cfc91993b96498f3e90506133079dcd1746d284fc4708f324bb601e770c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6YUDDK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFYH6FmZAVrwRQTabKBI8FvhXKOohYdWQMogrYeXQPoiAiBTmQnMSxYb%2B4grFalMijzTQnIGEprKl4niXR6YHvRmMyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsrhsAkrh2cqI%2Fej8KtwDZ5dvnT77Aq4eK0k47YC1WVI6w5rbuRRNVnt3wMiEOcLEY4ZWH5NekcH%2FKrBs51TGXPq22901U3SjwnzRalSWK2YhOktR8Ye1mgeu9oi0IEohEVebFd8uBcrmXdbPlcLIpfVMEfeVfwwWRDfyQezJoS4un0DN7OD%2F0b5OfN6zpshXfDuXKNajZaKXeHrof5sngTdZxwfjF7Zc7Tn1qDvz9LHzriKmCaX58DP76oH9HiV3G4K%2FXpcjpw5HcBb0P4wAgQL5QN9q4PaSXhSQEIhXQUY6V2fNECB8rAJ9cN8K488jGEGZhr%2B5kANvRP3qF9c7vAi5EcUpn2tNfDMjdVBgcQx26BR9rGFwUNHJbs2fPBWwd3SRzZH%2FRujH5alPuwnWbNsC%2BNu%2BMOYaouVPvy6f9m87GJ4w1Uyf5tk9%2F6yOxf%2B4b3Yfpu7PbfP7iCCwTMvETlpacuI9mvFCtQAM0QGTkSpWE68%2F3AvkZwomd1c8Ry2cDu8pWqwZFe5%2BtdhHXTEW4hC4jTUdIp5CDixPiKIDexwpcTG9KvXKceDcvFe5WtstDW%2BIyEVOue7XUxROiF4f1kOCUp5JWpe28ghFcy%2BHQKDDLgDPSFkjKP1ygqhiuv1A8a6NXLkajyONFM0w1K%2FBwgY6pgG7Nb3LYkFrODD5PBCP%2BauBURILwjuwKSIN%2BSYN9MDpss8IjtKt2%2Fnpla%2FkE4k2QOlVXl%2FEV8AZKpdIOXP5ztxeFQZmVyNoNNc46Z%2BThHi%2FsEd5WNrq5EDaz7q0A761F8ghEYtI%2BGVt6DO60y0roYp%2B21j98e0UQEZie1wIRztytJVIs%2Fgri0ozsKFvUAX4XY0v8ZITMd%2FJnw%2FLGHrfJreek1afyVh4&X-Amz-Signature=08c0e4ba3a07b0da9d201bbfe2028c28b559dc250d9ac037a2490be5d44fa9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6YUDDK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFYH6FmZAVrwRQTabKBI8FvhXKOohYdWQMogrYeXQPoiAiBTmQnMSxYb%2B4grFalMijzTQnIGEprKl4niXR6YHvRmMyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMsrhsAkrh2cqI%2Fej8KtwDZ5dvnT77Aq4eK0k47YC1WVI6w5rbuRRNVnt3wMiEOcLEY4ZWH5NekcH%2FKrBs51TGXPq22901U3SjwnzRalSWK2YhOktR8Ye1mgeu9oi0IEohEVebFd8uBcrmXdbPlcLIpfVMEfeVfwwWRDfyQezJoS4un0DN7OD%2F0b5OfN6zpshXfDuXKNajZaKXeHrof5sngTdZxwfjF7Zc7Tn1qDvz9LHzriKmCaX58DP76oH9HiV3G4K%2FXpcjpw5HcBb0P4wAgQL5QN9q4PaSXhSQEIhXQUY6V2fNECB8rAJ9cN8K488jGEGZhr%2B5kANvRP3qF9c7vAi5EcUpn2tNfDMjdVBgcQx26BR9rGFwUNHJbs2fPBWwd3SRzZH%2FRujH5alPuwnWbNsC%2BNu%2BMOYaouVPvy6f9m87GJ4w1Uyf5tk9%2F6yOxf%2B4b3Yfpu7PbfP7iCCwTMvETlpacuI9mvFCtQAM0QGTkSpWE68%2F3AvkZwomd1c8Ry2cDu8pWqwZFe5%2BtdhHXTEW4hC4jTUdIp5CDixPiKIDexwpcTG9KvXKceDcvFe5WtstDW%2BIyEVOue7XUxROiF4f1kOCUp5JWpe28ghFcy%2BHQKDDLgDPSFkjKP1ygqhiuv1A8a6NXLkajyONFM0w1K%2FBwgY6pgG7Nb3LYkFrODD5PBCP%2BauBURILwjuwKSIN%2BSYN9MDpss8IjtKt2%2Fnpla%2FkE4k2QOlVXl%2FEV8AZKpdIOXP5ztxeFQZmVyNoNNc46Z%2BThHi%2FsEd5WNrq5EDaz7q0A761F8ghEYtI%2BGVt6DO60y0roYp%2B21j98e0UQEZie1wIRztytJVIs%2Fgri0ozsKFvUAX4XY0v8ZITMd%2FJnw%2FLGHrfJreek1afyVh4&X-Amz-Signature=8b09da82a566c6efba774e6ff3a92c71df228ef9c586afc937e9946b861ec03e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
