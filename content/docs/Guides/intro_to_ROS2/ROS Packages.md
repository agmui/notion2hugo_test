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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSQEU5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChrJb%2F9P2Ga2Qn1p%2Fm63hEnoPat55qTbhj5VSopMUf4wIhAMjE4SwssO8m8UmTk%2FXcwmIDuW9oTdEaGhVG0EDKfFhPKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8jjm9UkcmB9%2B6KIwq3APEOoLTj10DvOCDVvbYqQ0ZnPBEmnA1VUw0Zht3%2BO7Ar5fP7BHpVliTRPtWortLVjb106XsHILXmKNcVAVzAWfkNS0ibl9t86Ik4KCZAzDURpGBiOPJYJN%2Fg8RWN%2F6ZPQFTAfreHs5pqIRvamyhpwhruW1PQ3NSbMRBn%2FdqIKBTPx211j4SCd%2FlIYM5sbDlnTP3JcSv2IyMckL4pAb2P1PqupaAbyByjaTeqO3uoIRXQbIsbC2jDihLfPdAPeK%2FaJ5L12L4F21ugskV2h%2B%2BnX8mZkoxKLlqMPKFsffL%2BselhyAQEDlSwL5sbMWFKFWv67bvr9Qiw4CC9gi6fVxfyB5lSwiLB1U2sQeHQp3BRa5RaWyqxO%2FocVbugDA0j%2FDO6K3wBlHZFS33Np0DpEMT1SXj263j%2B%2BA6grCSDYeQnPUVWSVoOMytplvLlsaJvyf3twdH%2BzOwH2x%2FgGJ73AuB0Msoz8ikO%2Fz%2B3uftkHrN5vK%2Bh7DDEIXpLit4GeFEZZxKe%2FSi4pwj7PH34S6jldTK9C5vMAOdp%2Fe0uloSATnnZc2NP8ZN0O%2BuT3ODbXY2cRFBuPrgj1KZv4M8gdYN8e2KvE9VaZ6fEV%2BXhBn2pWemZk7BlbmUm90JTCYT4wvaOTCH5qbABjqkAcrv8sKCCkLq7w2xGzRhoLtuOCH%2FOdj9U0W4ovRuResLkU55pQMPPrZ3snn9ctZf6%2BE8vfqFHcdeVy%2BPr%2BiPHlWRrsLXohk1X7uv0XnEHcEeUaD%2BwJ4LwTJ9QZz0Haqji4AiPqF22V6NNddvyX3LWdqTvrdcGUuE%2BvqPcgBvnH6AnXvK1GQ54ldpEkMMMo%2Fhbgi15HPCJ360%2B4J2q2zkk%2FSx92F%2F&X-Amz-Signature=c0353b4e2c8091dfcd0ccc34a0721e27683dde68458cd3bc2bf4633404d2be35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSQEU5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChrJb%2F9P2Ga2Qn1p%2Fm63hEnoPat55qTbhj5VSopMUf4wIhAMjE4SwssO8m8UmTk%2FXcwmIDuW9oTdEaGhVG0EDKfFhPKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8jjm9UkcmB9%2B6KIwq3APEOoLTj10DvOCDVvbYqQ0ZnPBEmnA1VUw0Zht3%2BO7Ar5fP7BHpVliTRPtWortLVjb106XsHILXmKNcVAVzAWfkNS0ibl9t86Ik4KCZAzDURpGBiOPJYJN%2Fg8RWN%2F6ZPQFTAfreHs5pqIRvamyhpwhruW1PQ3NSbMRBn%2FdqIKBTPx211j4SCd%2FlIYM5sbDlnTP3JcSv2IyMckL4pAb2P1PqupaAbyByjaTeqO3uoIRXQbIsbC2jDihLfPdAPeK%2FaJ5L12L4F21ugskV2h%2B%2BnX8mZkoxKLlqMPKFsffL%2BselhyAQEDlSwL5sbMWFKFWv67bvr9Qiw4CC9gi6fVxfyB5lSwiLB1U2sQeHQp3BRa5RaWyqxO%2FocVbugDA0j%2FDO6K3wBlHZFS33Np0DpEMT1SXj263j%2B%2BA6grCSDYeQnPUVWSVoOMytplvLlsaJvyf3twdH%2BzOwH2x%2FgGJ73AuB0Msoz8ikO%2Fz%2B3uftkHrN5vK%2Bh7DDEIXpLit4GeFEZZxKe%2FSi4pwj7PH34S6jldTK9C5vMAOdp%2Fe0uloSATnnZc2NP8ZN0O%2BuT3ODbXY2cRFBuPrgj1KZv4M8gdYN8e2KvE9VaZ6fEV%2BXhBn2pWemZk7BlbmUm90JTCYT4wvaOTCH5qbABjqkAcrv8sKCCkLq7w2xGzRhoLtuOCH%2FOdj9U0W4ovRuResLkU55pQMPPrZ3snn9ctZf6%2BE8vfqFHcdeVy%2BPr%2BiPHlWRrsLXohk1X7uv0XnEHcEeUaD%2BwJ4LwTJ9QZz0Haqji4AiPqF22V6NNddvyX3LWdqTvrdcGUuE%2BvqPcgBvnH6AnXvK1GQ54ldpEkMMMo%2Fhbgi15HPCJ360%2B4J2q2zkk%2FSx92F%2F&X-Amz-Signature=f25df5e15932485fe088ea12e607aa01b86831d48333910b49e576f06fee13f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSQEU5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChrJb%2F9P2Ga2Qn1p%2Fm63hEnoPat55qTbhj5VSopMUf4wIhAMjE4SwssO8m8UmTk%2FXcwmIDuW9oTdEaGhVG0EDKfFhPKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8jjm9UkcmB9%2B6KIwq3APEOoLTj10DvOCDVvbYqQ0ZnPBEmnA1VUw0Zht3%2BO7Ar5fP7BHpVliTRPtWortLVjb106XsHILXmKNcVAVzAWfkNS0ibl9t86Ik4KCZAzDURpGBiOPJYJN%2Fg8RWN%2F6ZPQFTAfreHs5pqIRvamyhpwhruW1PQ3NSbMRBn%2FdqIKBTPx211j4SCd%2FlIYM5sbDlnTP3JcSv2IyMckL4pAb2P1PqupaAbyByjaTeqO3uoIRXQbIsbC2jDihLfPdAPeK%2FaJ5L12L4F21ugskV2h%2B%2BnX8mZkoxKLlqMPKFsffL%2BselhyAQEDlSwL5sbMWFKFWv67bvr9Qiw4CC9gi6fVxfyB5lSwiLB1U2sQeHQp3BRa5RaWyqxO%2FocVbugDA0j%2FDO6K3wBlHZFS33Np0DpEMT1SXj263j%2B%2BA6grCSDYeQnPUVWSVoOMytplvLlsaJvyf3twdH%2BzOwH2x%2FgGJ73AuB0Msoz8ikO%2Fz%2B3uftkHrN5vK%2Bh7DDEIXpLit4GeFEZZxKe%2FSi4pwj7PH34S6jldTK9C5vMAOdp%2Fe0uloSATnnZc2NP8ZN0O%2BuT3ODbXY2cRFBuPrgj1KZv4M8gdYN8e2KvE9VaZ6fEV%2BXhBn2pWemZk7BlbmUm90JTCYT4wvaOTCH5qbABjqkAcrv8sKCCkLq7w2xGzRhoLtuOCH%2FOdj9U0W4ovRuResLkU55pQMPPrZ3snn9ctZf6%2BE8vfqFHcdeVy%2BPr%2BiPHlWRrsLXohk1X7uv0XnEHcEeUaD%2BwJ4LwTJ9QZz0Haqji4AiPqF22V6NNddvyX3LWdqTvrdcGUuE%2BvqPcgBvnH6AnXvK1GQ54ldpEkMMMo%2Fhbgi15HPCJ360%2B4J2q2zkk%2FSx92F%2F&X-Amz-Signature=25ef053d3022cb857e9c818088360f571e280655a9359700b21802c36be9fdfb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSQEU5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChrJb%2F9P2Ga2Qn1p%2Fm63hEnoPat55qTbhj5VSopMUf4wIhAMjE4SwssO8m8UmTk%2FXcwmIDuW9oTdEaGhVG0EDKfFhPKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8jjm9UkcmB9%2B6KIwq3APEOoLTj10DvOCDVvbYqQ0ZnPBEmnA1VUw0Zht3%2BO7Ar5fP7BHpVliTRPtWortLVjb106XsHILXmKNcVAVzAWfkNS0ibl9t86Ik4KCZAzDURpGBiOPJYJN%2Fg8RWN%2F6ZPQFTAfreHs5pqIRvamyhpwhruW1PQ3NSbMRBn%2FdqIKBTPx211j4SCd%2FlIYM5sbDlnTP3JcSv2IyMckL4pAb2P1PqupaAbyByjaTeqO3uoIRXQbIsbC2jDihLfPdAPeK%2FaJ5L12L4F21ugskV2h%2B%2BnX8mZkoxKLlqMPKFsffL%2BselhyAQEDlSwL5sbMWFKFWv67bvr9Qiw4CC9gi6fVxfyB5lSwiLB1U2sQeHQp3BRa5RaWyqxO%2FocVbugDA0j%2FDO6K3wBlHZFS33Np0DpEMT1SXj263j%2B%2BA6grCSDYeQnPUVWSVoOMytplvLlsaJvyf3twdH%2BzOwH2x%2FgGJ73AuB0Msoz8ikO%2Fz%2B3uftkHrN5vK%2Bh7DDEIXpLit4GeFEZZxKe%2FSi4pwj7PH34S6jldTK9C5vMAOdp%2Fe0uloSATnnZc2NP8ZN0O%2BuT3ODbXY2cRFBuPrgj1KZv4M8gdYN8e2KvE9VaZ6fEV%2BXhBn2pWemZk7BlbmUm90JTCYT4wvaOTCH5qbABjqkAcrv8sKCCkLq7w2xGzRhoLtuOCH%2FOdj9U0W4ovRuResLkU55pQMPPrZ3snn9ctZf6%2BE8vfqFHcdeVy%2BPr%2BiPHlWRrsLXohk1X7uv0XnEHcEeUaD%2BwJ4LwTJ9QZz0Haqji4AiPqF22V6NNddvyX3LWdqTvrdcGUuE%2BvqPcgBvnH6AnXvK1GQ54ldpEkMMMo%2Fhbgi15HPCJ360%2B4J2q2zkk%2FSx92F%2F&X-Amz-Signature=f59b7893be16ff2edca0f898b5592b66ed490bdf5ea460adb27268c15b533b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSQEU5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChrJb%2F9P2Ga2Qn1p%2Fm63hEnoPat55qTbhj5VSopMUf4wIhAMjE4SwssO8m8UmTk%2FXcwmIDuW9oTdEaGhVG0EDKfFhPKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8jjm9UkcmB9%2B6KIwq3APEOoLTj10DvOCDVvbYqQ0ZnPBEmnA1VUw0Zht3%2BO7Ar5fP7BHpVliTRPtWortLVjb106XsHILXmKNcVAVzAWfkNS0ibl9t86Ik4KCZAzDURpGBiOPJYJN%2Fg8RWN%2F6ZPQFTAfreHs5pqIRvamyhpwhruW1PQ3NSbMRBn%2FdqIKBTPx211j4SCd%2FlIYM5sbDlnTP3JcSv2IyMckL4pAb2P1PqupaAbyByjaTeqO3uoIRXQbIsbC2jDihLfPdAPeK%2FaJ5L12L4F21ugskV2h%2B%2BnX8mZkoxKLlqMPKFsffL%2BselhyAQEDlSwL5sbMWFKFWv67bvr9Qiw4CC9gi6fVxfyB5lSwiLB1U2sQeHQp3BRa5RaWyqxO%2FocVbugDA0j%2FDO6K3wBlHZFS33Np0DpEMT1SXj263j%2B%2BA6grCSDYeQnPUVWSVoOMytplvLlsaJvyf3twdH%2BzOwH2x%2FgGJ73AuB0Msoz8ikO%2Fz%2B3uftkHrN5vK%2Bh7DDEIXpLit4GeFEZZxKe%2FSi4pwj7PH34S6jldTK9C5vMAOdp%2Fe0uloSATnnZc2NP8ZN0O%2BuT3ODbXY2cRFBuPrgj1KZv4M8gdYN8e2KvE9VaZ6fEV%2BXhBn2pWemZk7BlbmUm90JTCYT4wvaOTCH5qbABjqkAcrv8sKCCkLq7w2xGzRhoLtuOCH%2FOdj9U0W4ovRuResLkU55pQMPPrZ3snn9ctZf6%2BE8vfqFHcdeVy%2BPr%2BiPHlWRrsLXohk1X7uv0XnEHcEeUaD%2BwJ4LwTJ9QZz0Haqji4AiPqF22V6NNddvyX3LWdqTvrdcGUuE%2BvqPcgBvnH6AnXvK1GQ54ldpEkMMMo%2Fhbgi15HPCJ360%2B4J2q2zkk%2FSx92F%2F&X-Amz-Signature=4a161f37094082587b316276ecdd39b3a1ac1823aa2551a69a809a945f60e50d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSQEU5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChrJb%2F9P2Ga2Qn1p%2Fm63hEnoPat55qTbhj5VSopMUf4wIhAMjE4SwssO8m8UmTk%2FXcwmIDuW9oTdEaGhVG0EDKfFhPKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8jjm9UkcmB9%2B6KIwq3APEOoLTj10DvOCDVvbYqQ0ZnPBEmnA1VUw0Zht3%2BO7Ar5fP7BHpVliTRPtWortLVjb106XsHILXmKNcVAVzAWfkNS0ibl9t86Ik4KCZAzDURpGBiOPJYJN%2Fg8RWN%2F6ZPQFTAfreHs5pqIRvamyhpwhruW1PQ3NSbMRBn%2FdqIKBTPx211j4SCd%2FlIYM5sbDlnTP3JcSv2IyMckL4pAb2P1PqupaAbyByjaTeqO3uoIRXQbIsbC2jDihLfPdAPeK%2FaJ5L12L4F21ugskV2h%2B%2BnX8mZkoxKLlqMPKFsffL%2BselhyAQEDlSwL5sbMWFKFWv67bvr9Qiw4CC9gi6fVxfyB5lSwiLB1U2sQeHQp3BRa5RaWyqxO%2FocVbugDA0j%2FDO6K3wBlHZFS33Np0DpEMT1SXj263j%2B%2BA6grCSDYeQnPUVWSVoOMytplvLlsaJvyf3twdH%2BzOwH2x%2FgGJ73AuB0Msoz8ikO%2Fz%2B3uftkHrN5vK%2Bh7DDEIXpLit4GeFEZZxKe%2FSi4pwj7PH34S6jldTK9C5vMAOdp%2Fe0uloSATnnZc2NP8ZN0O%2BuT3ODbXY2cRFBuPrgj1KZv4M8gdYN8e2KvE9VaZ6fEV%2BXhBn2pWemZk7BlbmUm90JTCYT4wvaOTCH5qbABjqkAcrv8sKCCkLq7w2xGzRhoLtuOCH%2FOdj9U0W4ovRuResLkU55pQMPPrZ3snn9ctZf6%2BE8vfqFHcdeVy%2BPr%2BiPHlWRrsLXohk1X7uv0XnEHcEeUaD%2BwJ4LwTJ9QZz0Haqji4AiPqF22V6NNddvyX3LWdqTvrdcGUuE%2BvqPcgBvnH6AnXvK1GQ54ldpEkMMMo%2Fhbgi15HPCJ360%2B4J2q2zkk%2FSx92F%2F&X-Amz-Signature=8f9cfdafc39af7768407137fc00cf14b8059f87164436049ae36ec4da0d25aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSQEU5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChrJb%2F9P2Ga2Qn1p%2Fm63hEnoPat55qTbhj5VSopMUf4wIhAMjE4SwssO8m8UmTk%2FXcwmIDuW9oTdEaGhVG0EDKfFhPKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8jjm9UkcmB9%2B6KIwq3APEOoLTj10DvOCDVvbYqQ0ZnPBEmnA1VUw0Zht3%2BO7Ar5fP7BHpVliTRPtWortLVjb106XsHILXmKNcVAVzAWfkNS0ibl9t86Ik4KCZAzDURpGBiOPJYJN%2Fg8RWN%2F6ZPQFTAfreHs5pqIRvamyhpwhruW1PQ3NSbMRBn%2FdqIKBTPx211j4SCd%2FlIYM5sbDlnTP3JcSv2IyMckL4pAb2P1PqupaAbyByjaTeqO3uoIRXQbIsbC2jDihLfPdAPeK%2FaJ5L12L4F21ugskV2h%2B%2BnX8mZkoxKLlqMPKFsffL%2BselhyAQEDlSwL5sbMWFKFWv67bvr9Qiw4CC9gi6fVxfyB5lSwiLB1U2sQeHQp3BRa5RaWyqxO%2FocVbugDA0j%2FDO6K3wBlHZFS33Np0DpEMT1SXj263j%2B%2BA6grCSDYeQnPUVWSVoOMytplvLlsaJvyf3twdH%2BzOwH2x%2FgGJ73AuB0Msoz8ikO%2Fz%2B3uftkHrN5vK%2Bh7DDEIXpLit4GeFEZZxKe%2FSi4pwj7PH34S6jldTK9C5vMAOdp%2Fe0uloSATnnZc2NP8ZN0O%2BuT3ODbXY2cRFBuPrgj1KZv4M8gdYN8e2KvE9VaZ6fEV%2BXhBn2pWemZk7BlbmUm90JTCYT4wvaOTCH5qbABjqkAcrv8sKCCkLq7w2xGzRhoLtuOCH%2FOdj9U0W4ovRuResLkU55pQMPPrZ3snn9ctZf6%2BE8vfqFHcdeVy%2BPr%2BiPHlWRrsLXohk1X7uv0XnEHcEeUaD%2BwJ4LwTJ9QZz0Haqji4AiPqF22V6NNddvyX3LWdqTvrdcGUuE%2BvqPcgBvnH6AnXvK1GQ54ldpEkMMMo%2Fhbgi15HPCJ360%2B4J2q2zkk%2FSx92F%2F&X-Amz-Signature=1363308326046be4f7e1a1a4dd1bdbeea1e9f609a78669ea3897947d38da88c9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
