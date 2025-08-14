---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BO6C5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD61s%2B7bNgwDO9UyqF8rJCzx5K9A2OdScIdROc3I1JiZwIhALoRDS3MexfpIy8tsnMDZr7dgKeQFXwne2P3mwLBNTmxKv8DCDsQABoMNjM3NDIzMTgzODA1IgzCi4uL7kSKrjjVWqUq3AP1mCg6%2Fdn1mrdfgMHGbaHo6uN9q%2B2%2Fvawn4N%2Fibtdpx1Wuu6gOeLjn1ndryN4qhVCNSycBEny9FGcLUtkb8v%2FDIpf3G5l3uLNYhzEPW%2BRneq4aCoHw0qHDMVUt%2BRs5Xddf0EK5SYr%2BVm2ob8cNnpSaPN1ZpPjtm069%2BbPDnwaY7jM6h0gAYRo%2B2b%2FirRqdByuwMobkB7gpaBmQL20f0FvvnYwriulzEZxfVOOmK%2BwukFe9gsH7AelFgayzR0pqg%2FrvEZ7aM4v4BSPG%2FlBNhfNqopX1SleZmQ2%2BDigWuW%2FsIWVvJ9Se4%2BVJZFJCLLKvdlHWojfn0v3zKNe1qNudL7ZrAcvcdjVDWg4mcqB7FuevH94dAstbluoWHNDWLC77ftjuc9sPvv6imNqt3LBiO6AWYWyasA9TJvgEpvPTER2n1BsRMJ6Pk0FkdMTAOBp%2BySn26QYOM4OLRgH1m29E%2B6LHxLpmssVHzinqPnVeTwU06ZWUk%2FL3MbSBdKg9vBpf%2Fssl9yDZErTG1i5W%2BsNjbVnNuOkYU6pzDKWxpkY4%2FLjE3%2BTzQVyPO670GWLkvs4PENBxJQcUXjm3E0XuY2iz4xbvpLVnCsqY24v4R8svnzgTF5%2Bly2PGR1Murh6suTCei%2FXEBjqkATDHqvdt5DRonsNYvEjL57jfshgwQNErx524hSMmAWXixH1HZ014bEj8vwzBVoHmGko0gt9VB8DU0KQfFR7c%2Bse3ep8VCfGVPg5GPP70stkfFIBHuphVwt1EIum43bQjybKVhEbRj9mrnlGMA00Wv8mv%2BvOB3vGxmedY6BXuTZH%2BuxEEd44Tc4TaDK2GljMs8cn2mzSsAlN4coaPttHfEtLa8Kb5&X-Amz-Signature=7dde92e30503291b5156ad62bb7854f63d109cf9505cf4cd719d87a32749fd5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BO6C5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD61s%2B7bNgwDO9UyqF8rJCzx5K9A2OdScIdROc3I1JiZwIhALoRDS3MexfpIy8tsnMDZr7dgKeQFXwne2P3mwLBNTmxKv8DCDsQABoMNjM3NDIzMTgzODA1IgzCi4uL7kSKrjjVWqUq3AP1mCg6%2Fdn1mrdfgMHGbaHo6uN9q%2B2%2Fvawn4N%2Fibtdpx1Wuu6gOeLjn1ndryN4qhVCNSycBEny9FGcLUtkb8v%2FDIpf3G5l3uLNYhzEPW%2BRneq4aCoHw0qHDMVUt%2BRs5Xddf0EK5SYr%2BVm2ob8cNnpSaPN1ZpPjtm069%2BbPDnwaY7jM6h0gAYRo%2B2b%2FirRqdByuwMobkB7gpaBmQL20f0FvvnYwriulzEZxfVOOmK%2BwukFe9gsH7AelFgayzR0pqg%2FrvEZ7aM4v4BSPG%2FlBNhfNqopX1SleZmQ2%2BDigWuW%2FsIWVvJ9Se4%2BVJZFJCLLKvdlHWojfn0v3zKNe1qNudL7ZrAcvcdjVDWg4mcqB7FuevH94dAstbluoWHNDWLC77ftjuc9sPvv6imNqt3LBiO6AWYWyasA9TJvgEpvPTER2n1BsRMJ6Pk0FkdMTAOBp%2BySn26QYOM4OLRgH1m29E%2B6LHxLpmssVHzinqPnVeTwU06ZWUk%2FL3MbSBdKg9vBpf%2Fssl9yDZErTG1i5W%2BsNjbVnNuOkYU6pzDKWxpkY4%2FLjE3%2BTzQVyPO670GWLkvs4PENBxJQcUXjm3E0XuY2iz4xbvpLVnCsqY24v4R8svnzgTF5%2Bly2PGR1Murh6suTCei%2FXEBjqkATDHqvdt5DRonsNYvEjL57jfshgwQNErx524hSMmAWXixH1HZ014bEj8vwzBVoHmGko0gt9VB8DU0KQfFR7c%2Bse3ep8VCfGVPg5GPP70stkfFIBHuphVwt1EIum43bQjybKVhEbRj9mrnlGMA00Wv8mv%2BvOB3vGxmedY6BXuTZH%2BuxEEd44Tc4TaDK2GljMs8cn2mzSsAlN4coaPttHfEtLa8Kb5&X-Amz-Signature=ec70c5a90c62e1fa6cde1ff3e5bc4f2190d2ef21a2357cb0c760f29c6f841dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BO6C5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD61s%2B7bNgwDO9UyqF8rJCzx5K9A2OdScIdROc3I1JiZwIhALoRDS3MexfpIy8tsnMDZr7dgKeQFXwne2P3mwLBNTmxKv8DCDsQABoMNjM3NDIzMTgzODA1IgzCi4uL7kSKrjjVWqUq3AP1mCg6%2Fdn1mrdfgMHGbaHo6uN9q%2B2%2Fvawn4N%2Fibtdpx1Wuu6gOeLjn1ndryN4qhVCNSycBEny9FGcLUtkb8v%2FDIpf3G5l3uLNYhzEPW%2BRneq4aCoHw0qHDMVUt%2BRs5Xddf0EK5SYr%2BVm2ob8cNnpSaPN1ZpPjtm069%2BbPDnwaY7jM6h0gAYRo%2B2b%2FirRqdByuwMobkB7gpaBmQL20f0FvvnYwriulzEZxfVOOmK%2BwukFe9gsH7AelFgayzR0pqg%2FrvEZ7aM4v4BSPG%2FlBNhfNqopX1SleZmQ2%2BDigWuW%2FsIWVvJ9Se4%2BVJZFJCLLKvdlHWojfn0v3zKNe1qNudL7ZrAcvcdjVDWg4mcqB7FuevH94dAstbluoWHNDWLC77ftjuc9sPvv6imNqt3LBiO6AWYWyasA9TJvgEpvPTER2n1BsRMJ6Pk0FkdMTAOBp%2BySn26QYOM4OLRgH1m29E%2B6LHxLpmssVHzinqPnVeTwU06ZWUk%2FL3MbSBdKg9vBpf%2Fssl9yDZErTG1i5W%2BsNjbVnNuOkYU6pzDKWxpkY4%2FLjE3%2BTzQVyPO670GWLkvs4PENBxJQcUXjm3E0XuY2iz4xbvpLVnCsqY24v4R8svnzgTF5%2Bly2PGR1Murh6suTCei%2FXEBjqkATDHqvdt5DRonsNYvEjL57jfshgwQNErx524hSMmAWXixH1HZ014bEj8vwzBVoHmGko0gt9VB8DU0KQfFR7c%2Bse3ep8VCfGVPg5GPP70stkfFIBHuphVwt1EIum43bQjybKVhEbRj9mrnlGMA00Wv8mv%2BvOB3vGxmedY6BXuTZH%2BuxEEd44Tc4TaDK2GljMs8cn2mzSsAlN4coaPttHfEtLa8Kb5&X-Amz-Signature=c30dc641f154a3b17b7f2a550d678fb5b9146e518a3061caf1d4dbe88384db9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BO6C5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD61s%2B7bNgwDO9UyqF8rJCzx5K9A2OdScIdROc3I1JiZwIhALoRDS3MexfpIy8tsnMDZr7dgKeQFXwne2P3mwLBNTmxKv8DCDsQABoMNjM3NDIzMTgzODA1IgzCi4uL7kSKrjjVWqUq3AP1mCg6%2Fdn1mrdfgMHGbaHo6uN9q%2B2%2Fvawn4N%2Fibtdpx1Wuu6gOeLjn1ndryN4qhVCNSycBEny9FGcLUtkb8v%2FDIpf3G5l3uLNYhzEPW%2BRneq4aCoHw0qHDMVUt%2BRs5Xddf0EK5SYr%2BVm2ob8cNnpSaPN1ZpPjtm069%2BbPDnwaY7jM6h0gAYRo%2B2b%2FirRqdByuwMobkB7gpaBmQL20f0FvvnYwriulzEZxfVOOmK%2BwukFe9gsH7AelFgayzR0pqg%2FrvEZ7aM4v4BSPG%2FlBNhfNqopX1SleZmQ2%2BDigWuW%2FsIWVvJ9Se4%2BVJZFJCLLKvdlHWojfn0v3zKNe1qNudL7ZrAcvcdjVDWg4mcqB7FuevH94dAstbluoWHNDWLC77ftjuc9sPvv6imNqt3LBiO6AWYWyasA9TJvgEpvPTER2n1BsRMJ6Pk0FkdMTAOBp%2BySn26QYOM4OLRgH1m29E%2B6LHxLpmssVHzinqPnVeTwU06ZWUk%2FL3MbSBdKg9vBpf%2Fssl9yDZErTG1i5W%2BsNjbVnNuOkYU6pzDKWxpkY4%2FLjE3%2BTzQVyPO670GWLkvs4PENBxJQcUXjm3E0XuY2iz4xbvpLVnCsqY24v4R8svnzgTF5%2Bly2PGR1Murh6suTCei%2FXEBjqkATDHqvdt5DRonsNYvEjL57jfshgwQNErx524hSMmAWXixH1HZ014bEj8vwzBVoHmGko0gt9VB8DU0KQfFR7c%2Bse3ep8VCfGVPg5GPP70stkfFIBHuphVwt1EIum43bQjybKVhEbRj9mrnlGMA00Wv8mv%2BvOB3vGxmedY6BXuTZH%2BuxEEd44Tc4TaDK2GljMs8cn2mzSsAlN4coaPttHfEtLa8Kb5&X-Amz-Signature=f23050fef928e2ddd7ed899236050a11981844ab08d68f6463d1d3170128f6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BO6C5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD61s%2B7bNgwDO9UyqF8rJCzx5K9A2OdScIdROc3I1JiZwIhALoRDS3MexfpIy8tsnMDZr7dgKeQFXwne2P3mwLBNTmxKv8DCDsQABoMNjM3NDIzMTgzODA1IgzCi4uL7kSKrjjVWqUq3AP1mCg6%2Fdn1mrdfgMHGbaHo6uN9q%2B2%2Fvawn4N%2Fibtdpx1Wuu6gOeLjn1ndryN4qhVCNSycBEny9FGcLUtkb8v%2FDIpf3G5l3uLNYhzEPW%2BRneq4aCoHw0qHDMVUt%2BRs5Xddf0EK5SYr%2BVm2ob8cNnpSaPN1ZpPjtm069%2BbPDnwaY7jM6h0gAYRo%2B2b%2FirRqdByuwMobkB7gpaBmQL20f0FvvnYwriulzEZxfVOOmK%2BwukFe9gsH7AelFgayzR0pqg%2FrvEZ7aM4v4BSPG%2FlBNhfNqopX1SleZmQ2%2BDigWuW%2FsIWVvJ9Se4%2BVJZFJCLLKvdlHWojfn0v3zKNe1qNudL7ZrAcvcdjVDWg4mcqB7FuevH94dAstbluoWHNDWLC77ftjuc9sPvv6imNqt3LBiO6AWYWyasA9TJvgEpvPTER2n1BsRMJ6Pk0FkdMTAOBp%2BySn26QYOM4OLRgH1m29E%2B6LHxLpmssVHzinqPnVeTwU06ZWUk%2FL3MbSBdKg9vBpf%2Fssl9yDZErTG1i5W%2BsNjbVnNuOkYU6pzDKWxpkY4%2FLjE3%2BTzQVyPO670GWLkvs4PENBxJQcUXjm3E0XuY2iz4xbvpLVnCsqY24v4R8svnzgTF5%2Bly2PGR1Murh6suTCei%2FXEBjqkATDHqvdt5DRonsNYvEjL57jfshgwQNErx524hSMmAWXixH1HZ014bEj8vwzBVoHmGko0gt9VB8DU0KQfFR7c%2Bse3ep8VCfGVPg5GPP70stkfFIBHuphVwt1EIum43bQjybKVhEbRj9mrnlGMA00Wv8mv%2BvOB3vGxmedY6BXuTZH%2BuxEEd44Tc4TaDK2GljMs8cn2mzSsAlN4coaPttHfEtLa8Kb5&X-Amz-Signature=7a71fe1d32c30c13ef81f0976be46bc38d2447905c1a0726245edd38333349d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BO6C5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD61s%2B7bNgwDO9UyqF8rJCzx5K9A2OdScIdROc3I1JiZwIhALoRDS3MexfpIy8tsnMDZr7dgKeQFXwne2P3mwLBNTmxKv8DCDsQABoMNjM3NDIzMTgzODA1IgzCi4uL7kSKrjjVWqUq3AP1mCg6%2Fdn1mrdfgMHGbaHo6uN9q%2B2%2Fvawn4N%2Fibtdpx1Wuu6gOeLjn1ndryN4qhVCNSycBEny9FGcLUtkb8v%2FDIpf3G5l3uLNYhzEPW%2BRneq4aCoHw0qHDMVUt%2BRs5Xddf0EK5SYr%2BVm2ob8cNnpSaPN1ZpPjtm069%2BbPDnwaY7jM6h0gAYRo%2B2b%2FirRqdByuwMobkB7gpaBmQL20f0FvvnYwriulzEZxfVOOmK%2BwukFe9gsH7AelFgayzR0pqg%2FrvEZ7aM4v4BSPG%2FlBNhfNqopX1SleZmQ2%2BDigWuW%2FsIWVvJ9Se4%2BVJZFJCLLKvdlHWojfn0v3zKNe1qNudL7ZrAcvcdjVDWg4mcqB7FuevH94dAstbluoWHNDWLC77ftjuc9sPvv6imNqt3LBiO6AWYWyasA9TJvgEpvPTER2n1BsRMJ6Pk0FkdMTAOBp%2BySn26QYOM4OLRgH1m29E%2B6LHxLpmssVHzinqPnVeTwU06ZWUk%2FL3MbSBdKg9vBpf%2Fssl9yDZErTG1i5W%2BsNjbVnNuOkYU6pzDKWxpkY4%2FLjE3%2BTzQVyPO670GWLkvs4PENBxJQcUXjm3E0XuY2iz4xbvpLVnCsqY24v4R8svnzgTF5%2Bly2PGR1Murh6suTCei%2FXEBjqkATDHqvdt5DRonsNYvEjL57jfshgwQNErx524hSMmAWXixH1HZ014bEj8vwzBVoHmGko0gt9VB8DU0KQfFR7c%2Bse3ep8VCfGVPg5GPP70stkfFIBHuphVwt1EIum43bQjybKVhEbRj9mrnlGMA00Wv8mv%2BvOB3vGxmedY6BXuTZH%2BuxEEd44Tc4TaDK2GljMs8cn2mzSsAlN4coaPttHfEtLa8Kb5&X-Amz-Signature=0e2e8b3ec731bde154de07decc6ccda5e2545f02718dca9b234a79803f9f86da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BO6C5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD61s%2B7bNgwDO9UyqF8rJCzx5K9A2OdScIdROc3I1JiZwIhALoRDS3MexfpIy8tsnMDZr7dgKeQFXwne2P3mwLBNTmxKv8DCDsQABoMNjM3NDIzMTgzODA1IgzCi4uL7kSKrjjVWqUq3AP1mCg6%2Fdn1mrdfgMHGbaHo6uN9q%2B2%2Fvawn4N%2Fibtdpx1Wuu6gOeLjn1ndryN4qhVCNSycBEny9FGcLUtkb8v%2FDIpf3G5l3uLNYhzEPW%2BRneq4aCoHw0qHDMVUt%2BRs5Xddf0EK5SYr%2BVm2ob8cNnpSaPN1ZpPjtm069%2BbPDnwaY7jM6h0gAYRo%2B2b%2FirRqdByuwMobkB7gpaBmQL20f0FvvnYwriulzEZxfVOOmK%2BwukFe9gsH7AelFgayzR0pqg%2FrvEZ7aM4v4BSPG%2FlBNhfNqopX1SleZmQ2%2BDigWuW%2FsIWVvJ9Se4%2BVJZFJCLLKvdlHWojfn0v3zKNe1qNudL7ZrAcvcdjVDWg4mcqB7FuevH94dAstbluoWHNDWLC77ftjuc9sPvv6imNqt3LBiO6AWYWyasA9TJvgEpvPTER2n1BsRMJ6Pk0FkdMTAOBp%2BySn26QYOM4OLRgH1m29E%2B6LHxLpmssVHzinqPnVeTwU06ZWUk%2FL3MbSBdKg9vBpf%2Fssl9yDZErTG1i5W%2BsNjbVnNuOkYU6pzDKWxpkY4%2FLjE3%2BTzQVyPO670GWLkvs4PENBxJQcUXjm3E0XuY2iz4xbvpLVnCsqY24v4R8svnzgTF5%2Bly2PGR1Murh6suTCei%2FXEBjqkATDHqvdt5DRonsNYvEjL57jfshgwQNErx524hSMmAWXixH1HZ014bEj8vwzBVoHmGko0gt9VB8DU0KQfFR7c%2Bse3ep8VCfGVPg5GPP70stkfFIBHuphVwt1EIum43bQjybKVhEbRj9mrnlGMA00Wv8mv%2BvOB3vGxmedY6BXuTZH%2BuxEEd44Tc4TaDK2GljMs8cn2mzSsAlN4coaPttHfEtLa8Kb5&X-Amz-Signature=0c3efe27f3256cda0788bc908eacc439fd08d8be6ca6e689325259231104626f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
