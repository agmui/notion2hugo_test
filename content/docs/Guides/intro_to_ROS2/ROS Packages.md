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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AJKLFX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEu9%2BWRnv1ayfzC%2BAD%2Fce1OpCAZhrgC%2By2pbwndyi4%2BgIhAKJAx5s3Gwu8ZWEzj6B5D9hfQJFGsmk3yATpVCe3i04HKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnLd%2FH4sf7nEv6Wlsq3APhXOSf%2BO3ZzsvbMZ5YVIjeJFx4qsJ3iqlEoveKvYRNCGEcCeRE8lLToaWfmeemfwHS8eY9vJY0D6GQC37Gt5Nl%2BUO6soRyOWfgifpuLnDxARcvDWZXtvlkj9gSka47Uk320O1tDxaWH4WRsx8nljKCDIEmj3lS43APGBSHyCbN5KfCFd%2FPu%2FgI534paySH2oIS3V%2FY9FQp0f1U2BWDFWinhTn1MD%2FIug4LDKIE%2Bablp2qmtASFJGhGBdiBuYoO70J0JEFN7l6f2kuejoZIdLPO1vIUAVAxn1PFqXgMbo2GKVmLc6Z8FwOmhA5mODWb3USFoW3W1MYYPfw1KubYNFeKstYWH0tOqLdZKrva2%2BEBFTSX7m5HlukDUq5KK%2FWcdsi3YCsY2hW1aXi2WGmYH%2F6eluRmBeXkNhzIlPJ81SaLMt7%2BQcoFP4Aueli9EmMXh6%2BdcXHPN1AKSwizBI3KOe%2Fs2lqfcFYsaXwAbPwETj2K%2B6SiZOnYEvLq7oHiyRDzIWuR1i4nnqYSq9QOksXDv%2Fh5w3CeCv8jNRAEh2jN0u3hqle5eueGJvhgCuvtj%2FUAgfs8HlXQ8UQHGo5pp3xuA1Oy0%2FjxeKqHyKW3KH%2BZzJv81SSaYaILTszFB9WZejCW5%2FvBBjqkAYH4sFDQepF%2FUi8IoEumbg065EBHvo%2F%2BQkUsEzhezO4hElWwsOlRPBN7HKr9wpNH8RthgyIdCAky%2FuP2GrRsSdcobhLCI7%2BhPaExi%2BR9I3JwCKMd8nD38ek0Fr1rZIZ9cslPA7a5kJ%2BMLIRLzvSEkDvvhgpb4lnwaDD14YOyT%2BGGXuIGQ0P3QQZgTNhkMelQ5GBaVEOUgV0gi0hm7drUEu4Efs%2Fr&X-Amz-Signature=d09829d614183067bba39de9cb4612ef2da8bf9408d1cdc84a9102cb386c4e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AJKLFX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEu9%2BWRnv1ayfzC%2BAD%2Fce1OpCAZhrgC%2By2pbwndyi4%2BgIhAKJAx5s3Gwu8ZWEzj6B5D9hfQJFGsmk3yATpVCe3i04HKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnLd%2FH4sf7nEv6Wlsq3APhXOSf%2BO3ZzsvbMZ5YVIjeJFx4qsJ3iqlEoveKvYRNCGEcCeRE8lLToaWfmeemfwHS8eY9vJY0D6GQC37Gt5Nl%2BUO6soRyOWfgifpuLnDxARcvDWZXtvlkj9gSka47Uk320O1tDxaWH4WRsx8nljKCDIEmj3lS43APGBSHyCbN5KfCFd%2FPu%2FgI534paySH2oIS3V%2FY9FQp0f1U2BWDFWinhTn1MD%2FIug4LDKIE%2Bablp2qmtASFJGhGBdiBuYoO70J0JEFN7l6f2kuejoZIdLPO1vIUAVAxn1PFqXgMbo2GKVmLc6Z8FwOmhA5mODWb3USFoW3W1MYYPfw1KubYNFeKstYWH0tOqLdZKrva2%2BEBFTSX7m5HlukDUq5KK%2FWcdsi3YCsY2hW1aXi2WGmYH%2F6eluRmBeXkNhzIlPJ81SaLMt7%2BQcoFP4Aueli9EmMXh6%2BdcXHPN1AKSwizBI3KOe%2Fs2lqfcFYsaXwAbPwETj2K%2B6SiZOnYEvLq7oHiyRDzIWuR1i4nnqYSq9QOksXDv%2Fh5w3CeCv8jNRAEh2jN0u3hqle5eueGJvhgCuvtj%2FUAgfs8HlXQ8UQHGo5pp3xuA1Oy0%2FjxeKqHyKW3KH%2BZzJv81SSaYaILTszFB9WZejCW5%2FvBBjqkAYH4sFDQepF%2FUi8IoEumbg065EBHvo%2F%2BQkUsEzhezO4hElWwsOlRPBN7HKr9wpNH8RthgyIdCAky%2FuP2GrRsSdcobhLCI7%2BhPaExi%2BR9I3JwCKMd8nD38ek0Fr1rZIZ9cslPA7a5kJ%2BMLIRLzvSEkDvvhgpb4lnwaDD14YOyT%2BGGXuIGQ0P3QQZgTNhkMelQ5GBaVEOUgV0gi0hm7drUEu4Efs%2Fr&X-Amz-Signature=874fd2137b8e8738f6010e3e34901346938053df5f6a9375d07111fa98a9f586&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AJKLFX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEu9%2BWRnv1ayfzC%2BAD%2Fce1OpCAZhrgC%2By2pbwndyi4%2BgIhAKJAx5s3Gwu8ZWEzj6B5D9hfQJFGsmk3yATpVCe3i04HKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnLd%2FH4sf7nEv6Wlsq3APhXOSf%2BO3ZzsvbMZ5YVIjeJFx4qsJ3iqlEoveKvYRNCGEcCeRE8lLToaWfmeemfwHS8eY9vJY0D6GQC37Gt5Nl%2BUO6soRyOWfgifpuLnDxARcvDWZXtvlkj9gSka47Uk320O1tDxaWH4WRsx8nljKCDIEmj3lS43APGBSHyCbN5KfCFd%2FPu%2FgI534paySH2oIS3V%2FY9FQp0f1U2BWDFWinhTn1MD%2FIug4LDKIE%2Bablp2qmtASFJGhGBdiBuYoO70J0JEFN7l6f2kuejoZIdLPO1vIUAVAxn1PFqXgMbo2GKVmLc6Z8FwOmhA5mODWb3USFoW3W1MYYPfw1KubYNFeKstYWH0tOqLdZKrva2%2BEBFTSX7m5HlukDUq5KK%2FWcdsi3YCsY2hW1aXi2WGmYH%2F6eluRmBeXkNhzIlPJ81SaLMt7%2BQcoFP4Aueli9EmMXh6%2BdcXHPN1AKSwizBI3KOe%2Fs2lqfcFYsaXwAbPwETj2K%2B6SiZOnYEvLq7oHiyRDzIWuR1i4nnqYSq9QOksXDv%2Fh5w3CeCv8jNRAEh2jN0u3hqle5eueGJvhgCuvtj%2FUAgfs8HlXQ8UQHGo5pp3xuA1Oy0%2FjxeKqHyKW3KH%2BZzJv81SSaYaILTszFB9WZejCW5%2FvBBjqkAYH4sFDQepF%2FUi8IoEumbg065EBHvo%2F%2BQkUsEzhezO4hElWwsOlRPBN7HKr9wpNH8RthgyIdCAky%2FuP2GrRsSdcobhLCI7%2BhPaExi%2BR9I3JwCKMd8nD38ek0Fr1rZIZ9cslPA7a5kJ%2BMLIRLzvSEkDvvhgpb4lnwaDD14YOyT%2BGGXuIGQ0P3QQZgTNhkMelQ5GBaVEOUgV0gi0hm7drUEu4Efs%2Fr&X-Amz-Signature=629b0b7d5caae5c63a34dd5847bcfbe89230b645d9ae0884871ef62bd1b5642c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AJKLFX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEu9%2BWRnv1ayfzC%2BAD%2Fce1OpCAZhrgC%2By2pbwndyi4%2BgIhAKJAx5s3Gwu8ZWEzj6B5D9hfQJFGsmk3yATpVCe3i04HKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnLd%2FH4sf7nEv6Wlsq3APhXOSf%2BO3ZzsvbMZ5YVIjeJFx4qsJ3iqlEoveKvYRNCGEcCeRE8lLToaWfmeemfwHS8eY9vJY0D6GQC37Gt5Nl%2BUO6soRyOWfgifpuLnDxARcvDWZXtvlkj9gSka47Uk320O1tDxaWH4WRsx8nljKCDIEmj3lS43APGBSHyCbN5KfCFd%2FPu%2FgI534paySH2oIS3V%2FY9FQp0f1U2BWDFWinhTn1MD%2FIug4LDKIE%2Bablp2qmtASFJGhGBdiBuYoO70J0JEFN7l6f2kuejoZIdLPO1vIUAVAxn1PFqXgMbo2GKVmLc6Z8FwOmhA5mODWb3USFoW3W1MYYPfw1KubYNFeKstYWH0tOqLdZKrva2%2BEBFTSX7m5HlukDUq5KK%2FWcdsi3YCsY2hW1aXi2WGmYH%2F6eluRmBeXkNhzIlPJ81SaLMt7%2BQcoFP4Aueli9EmMXh6%2BdcXHPN1AKSwizBI3KOe%2Fs2lqfcFYsaXwAbPwETj2K%2B6SiZOnYEvLq7oHiyRDzIWuR1i4nnqYSq9QOksXDv%2Fh5w3CeCv8jNRAEh2jN0u3hqle5eueGJvhgCuvtj%2FUAgfs8HlXQ8UQHGo5pp3xuA1Oy0%2FjxeKqHyKW3KH%2BZzJv81SSaYaILTszFB9WZejCW5%2FvBBjqkAYH4sFDQepF%2FUi8IoEumbg065EBHvo%2F%2BQkUsEzhezO4hElWwsOlRPBN7HKr9wpNH8RthgyIdCAky%2FuP2GrRsSdcobhLCI7%2BhPaExi%2BR9I3JwCKMd8nD38ek0Fr1rZIZ9cslPA7a5kJ%2BMLIRLzvSEkDvvhgpb4lnwaDD14YOyT%2BGGXuIGQ0P3QQZgTNhkMelQ5GBaVEOUgV0gi0hm7drUEu4Efs%2Fr&X-Amz-Signature=81d29f0095b5ffa5d47eb47bb6cd099af6011906fa1463821f9c6d1a47e17a81&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AJKLFX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEu9%2BWRnv1ayfzC%2BAD%2Fce1OpCAZhrgC%2By2pbwndyi4%2BgIhAKJAx5s3Gwu8ZWEzj6B5D9hfQJFGsmk3yATpVCe3i04HKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnLd%2FH4sf7nEv6Wlsq3APhXOSf%2BO3ZzsvbMZ5YVIjeJFx4qsJ3iqlEoveKvYRNCGEcCeRE8lLToaWfmeemfwHS8eY9vJY0D6GQC37Gt5Nl%2BUO6soRyOWfgifpuLnDxARcvDWZXtvlkj9gSka47Uk320O1tDxaWH4WRsx8nljKCDIEmj3lS43APGBSHyCbN5KfCFd%2FPu%2FgI534paySH2oIS3V%2FY9FQp0f1U2BWDFWinhTn1MD%2FIug4LDKIE%2Bablp2qmtASFJGhGBdiBuYoO70J0JEFN7l6f2kuejoZIdLPO1vIUAVAxn1PFqXgMbo2GKVmLc6Z8FwOmhA5mODWb3USFoW3W1MYYPfw1KubYNFeKstYWH0tOqLdZKrva2%2BEBFTSX7m5HlukDUq5KK%2FWcdsi3YCsY2hW1aXi2WGmYH%2F6eluRmBeXkNhzIlPJ81SaLMt7%2BQcoFP4Aueli9EmMXh6%2BdcXHPN1AKSwizBI3KOe%2Fs2lqfcFYsaXwAbPwETj2K%2B6SiZOnYEvLq7oHiyRDzIWuR1i4nnqYSq9QOksXDv%2Fh5w3CeCv8jNRAEh2jN0u3hqle5eueGJvhgCuvtj%2FUAgfs8HlXQ8UQHGo5pp3xuA1Oy0%2FjxeKqHyKW3KH%2BZzJv81SSaYaILTszFB9WZejCW5%2FvBBjqkAYH4sFDQepF%2FUi8IoEumbg065EBHvo%2F%2BQkUsEzhezO4hElWwsOlRPBN7HKr9wpNH8RthgyIdCAky%2FuP2GrRsSdcobhLCI7%2BhPaExi%2BR9I3JwCKMd8nD38ek0Fr1rZIZ9cslPA7a5kJ%2BMLIRLzvSEkDvvhgpb4lnwaDD14YOyT%2BGGXuIGQ0P3QQZgTNhkMelQ5GBaVEOUgV0gi0hm7drUEu4Efs%2Fr&X-Amz-Signature=ed70c73b2cc34799e71f4e8805e7739e08661e669e9c794b8108285bde213c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AJKLFX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEu9%2BWRnv1ayfzC%2BAD%2Fce1OpCAZhrgC%2By2pbwndyi4%2BgIhAKJAx5s3Gwu8ZWEzj6B5D9hfQJFGsmk3yATpVCe3i04HKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnLd%2FH4sf7nEv6Wlsq3APhXOSf%2BO3ZzsvbMZ5YVIjeJFx4qsJ3iqlEoveKvYRNCGEcCeRE8lLToaWfmeemfwHS8eY9vJY0D6GQC37Gt5Nl%2BUO6soRyOWfgifpuLnDxARcvDWZXtvlkj9gSka47Uk320O1tDxaWH4WRsx8nljKCDIEmj3lS43APGBSHyCbN5KfCFd%2FPu%2FgI534paySH2oIS3V%2FY9FQp0f1U2BWDFWinhTn1MD%2FIug4LDKIE%2Bablp2qmtASFJGhGBdiBuYoO70J0JEFN7l6f2kuejoZIdLPO1vIUAVAxn1PFqXgMbo2GKVmLc6Z8FwOmhA5mODWb3USFoW3W1MYYPfw1KubYNFeKstYWH0tOqLdZKrva2%2BEBFTSX7m5HlukDUq5KK%2FWcdsi3YCsY2hW1aXi2WGmYH%2F6eluRmBeXkNhzIlPJ81SaLMt7%2BQcoFP4Aueli9EmMXh6%2BdcXHPN1AKSwizBI3KOe%2Fs2lqfcFYsaXwAbPwETj2K%2B6SiZOnYEvLq7oHiyRDzIWuR1i4nnqYSq9QOksXDv%2Fh5w3CeCv8jNRAEh2jN0u3hqle5eueGJvhgCuvtj%2FUAgfs8HlXQ8UQHGo5pp3xuA1Oy0%2FjxeKqHyKW3KH%2BZzJv81SSaYaILTszFB9WZejCW5%2FvBBjqkAYH4sFDQepF%2FUi8IoEumbg065EBHvo%2F%2BQkUsEzhezO4hElWwsOlRPBN7HKr9wpNH8RthgyIdCAky%2FuP2GrRsSdcobhLCI7%2BhPaExi%2BR9I3JwCKMd8nD38ek0Fr1rZIZ9cslPA7a5kJ%2BMLIRLzvSEkDvvhgpb4lnwaDD14YOyT%2BGGXuIGQ0P3QQZgTNhkMelQ5GBaVEOUgV0gi0hm7drUEu4Efs%2Fr&X-Amz-Signature=8a86ba60c0450bd454c294b44dc6b9278d9fa878a28abb54eb476f929ccd7a04&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AJKLFX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEu9%2BWRnv1ayfzC%2BAD%2Fce1OpCAZhrgC%2By2pbwndyi4%2BgIhAKJAx5s3Gwu8ZWEzj6B5D9hfQJFGsmk3yATpVCe3i04HKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnLd%2FH4sf7nEv6Wlsq3APhXOSf%2BO3ZzsvbMZ5YVIjeJFx4qsJ3iqlEoveKvYRNCGEcCeRE8lLToaWfmeemfwHS8eY9vJY0D6GQC37Gt5Nl%2BUO6soRyOWfgifpuLnDxARcvDWZXtvlkj9gSka47Uk320O1tDxaWH4WRsx8nljKCDIEmj3lS43APGBSHyCbN5KfCFd%2FPu%2FgI534paySH2oIS3V%2FY9FQp0f1U2BWDFWinhTn1MD%2FIug4LDKIE%2Bablp2qmtASFJGhGBdiBuYoO70J0JEFN7l6f2kuejoZIdLPO1vIUAVAxn1PFqXgMbo2GKVmLc6Z8FwOmhA5mODWb3USFoW3W1MYYPfw1KubYNFeKstYWH0tOqLdZKrva2%2BEBFTSX7m5HlukDUq5KK%2FWcdsi3YCsY2hW1aXi2WGmYH%2F6eluRmBeXkNhzIlPJ81SaLMt7%2BQcoFP4Aueli9EmMXh6%2BdcXHPN1AKSwizBI3KOe%2Fs2lqfcFYsaXwAbPwETj2K%2B6SiZOnYEvLq7oHiyRDzIWuR1i4nnqYSq9QOksXDv%2Fh5w3CeCv8jNRAEh2jN0u3hqle5eueGJvhgCuvtj%2FUAgfs8HlXQ8UQHGo5pp3xuA1Oy0%2FjxeKqHyKW3KH%2BZzJv81SSaYaILTszFB9WZejCW5%2FvBBjqkAYH4sFDQepF%2FUi8IoEumbg065EBHvo%2F%2BQkUsEzhezO4hElWwsOlRPBN7HKr9wpNH8RthgyIdCAky%2FuP2GrRsSdcobhLCI7%2BhPaExi%2BR9I3JwCKMd8nD38ek0Fr1rZIZ9cslPA7a5kJ%2BMLIRLzvSEkDvvhgpb4lnwaDD14YOyT%2BGGXuIGQ0P3QQZgTNhkMelQ5GBaVEOUgV0gi0hm7drUEu4Efs%2Fr&X-Amz-Signature=48d5513515b13ad2816321038bfb019df6ab3ac4c8ac6d7e4b58ea150915350a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
