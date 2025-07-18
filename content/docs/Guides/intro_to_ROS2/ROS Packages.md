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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6S3RSM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICtXdRHQA0YYXwGkCFXB3XLSwIQ6Kv5zWJlQK00CF0W1AiEA2VA6PJYcL%2BVGI3NmHqp%2BQmaWiTu%2Fok0mFW2hyjL0i2YqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwVOXE2HCd1w0zO7yrcA75B6vadL7wz2HYWxjyeHGqOMrxnuUPZWgRyCujKELz3XYezXPxRhmhaMvSVYU2Up5Fn5FjdZf5ClYt2kN4XUNd30Capa32hWnD92edlco6QFRz9TrMSSY5pLUIgvRuSUtHwqBSD3xezSImbIi6ULFLsA3Y%2Fjsl4Shc%2FeYISsxOoy8m27D36n0N1gSSRKO10%2FN0mZa5OCtFq%2FPgqe06DDA9xP0KhSyE75iUFyg5bf1MvkdLigOo8x0Iad7R2wEfkpQuInNR3ffpgd9r46vSUTEmZ%2F53xr6phYqH4KGeyEi3p777zjj8UGr3jS1%2Fq%2F1m9V9h3%2F65mbHMd425tGXGyeewtNrRKrTEQ60CnN2Vuz6ZPr9qpGye8hyEsE2W4PQha8F6gwiOPdMRSzrg3vGr4fPqactIJw7DRQD5yEiLQbCeVD%2BpqPccSodyNbDXEaxkFX8fMStMRVZkftNfEdsKd0u30rMAXK%2B%2FMCFi4wSFU3cJAn4IfjVMPByyJhAKwhupNraMUCrAAsIFR0quKOC0HKMLb1sUYCA9AFHRZ1AvslliAUrRaORdSuGeZ6XRWBYBOJuB9LZEaTo9rMdpFhcsDTIOpEG1imk%2FuiT8CPlM%2FA54OSmsfEy5wIouAt63jMN%2Fk6sMGOqUBjYHUZioxwW%2Be%2Foo9fAGslg%2BkWIpWfcncpHuF%2FFxmaeEUFm5ZSnPH%2FiHWpwtd9YZ4Q22bFUgOqpwF0qMNlRHEBA1Gz%2FNanXnt86ln4DACvqm%2F3oIoqlexmdr2%2FEjx1r84Zgvsw4sxB06Yq2olDHr8gsidbmNSkOO4b0z3fdiWGDFS7AhiH4EZQhbaaomd4Y5lcV1JrIFhurP5n8BeiYii3JB1Gx9p&X-Amz-Signature=46919635b032eac52ca23c6c2ef3b2fabc0f9d12ef73a932554d240cbee5adf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6S3RSM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICtXdRHQA0YYXwGkCFXB3XLSwIQ6Kv5zWJlQK00CF0W1AiEA2VA6PJYcL%2BVGI3NmHqp%2BQmaWiTu%2Fok0mFW2hyjL0i2YqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwVOXE2HCd1w0zO7yrcA75B6vadL7wz2HYWxjyeHGqOMrxnuUPZWgRyCujKELz3XYezXPxRhmhaMvSVYU2Up5Fn5FjdZf5ClYt2kN4XUNd30Capa32hWnD92edlco6QFRz9TrMSSY5pLUIgvRuSUtHwqBSD3xezSImbIi6ULFLsA3Y%2Fjsl4Shc%2FeYISsxOoy8m27D36n0N1gSSRKO10%2FN0mZa5OCtFq%2FPgqe06DDA9xP0KhSyE75iUFyg5bf1MvkdLigOo8x0Iad7R2wEfkpQuInNR3ffpgd9r46vSUTEmZ%2F53xr6phYqH4KGeyEi3p777zjj8UGr3jS1%2Fq%2F1m9V9h3%2F65mbHMd425tGXGyeewtNrRKrTEQ60CnN2Vuz6ZPr9qpGye8hyEsE2W4PQha8F6gwiOPdMRSzrg3vGr4fPqactIJw7DRQD5yEiLQbCeVD%2BpqPccSodyNbDXEaxkFX8fMStMRVZkftNfEdsKd0u30rMAXK%2B%2FMCFi4wSFU3cJAn4IfjVMPByyJhAKwhupNraMUCrAAsIFR0quKOC0HKMLb1sUYCA9AFHRZ1AvslliAUrRaORdSuGeZ6XRWBYBOJuB9LZEaTo9rMdpFhcsDTIOpEG1imk%2FuiT8CPlM%2FA54OSmsfEy5wIouAt63jMN%2Fk6sMGOqUBjYHUZioxwW%2Be%2Foo9fAGslg%2BkWIpWfcncpHuF%2FFxmaeEUFm5ZSnPH%2FiHWpwtd9YZ4Q22bFUgOqpwF0qMNlRHEBA1Gz%2FNanXnt86ln4DACvqm%2F3oIoqlexmdr2%2FEjx1r84Zgvsw4sxB06Yq2olDHr8gsidbmNSkOO4b0z3fdiWGDFS7AhiH4EZQhbaaomd4Y5lcV1JrIFhurP5n8BeiYii3JB1Gx9p&X-Amz-Signature=d4d0583bbce5cd5f5607f20cc7e1f8438f89b47a9fa16daf7a3aec19a7964649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6S3RSM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICtXdRHQA0YYXwGkCFXB3XLSwIQ6Kv5zWJlQK00CF0W1AiEA2VA6PJYcL%2BVGI3NmHqp%2BQmaWiTu%2Fok0mFW2hyjL0i2YqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwVOXE2HCd1w0zO7yrcA75B6vadL7wz2HYWxjyeHGqOMrxnuUPZWgRyCujKELz3XYezXPxRhmhaMvSVYU2Up5Fn5FjdZf5ClYt2kN4XUNd30Capa32hWnD92edlco6QFRz9TrMSSY5pLUIgvRuSUtHwqBSD3xezSImbIi6ULFLsA3Y%2Fjsl4Shc%2FeYISsxOoy8m27D36n0N1gSSRKO10%2FN0mZa5OCtFq%2FPgqe06DDA9xP0KhSyE75iUFyg5bf1MvkdLigOo8x0Iad7R2wEfkpQuInNR3ffpgd9r46vSUTEmZ%2F53xr6phYqH4KGeyEi3p777zjj8UGr3jS1%2Fq%2F1m9V9h3%2F65mbHMd425tGXGyeewtNrRKrTEQ60CnN2Vuz6ZPr9qpGye8hyEsE2W4PQha8F6gwiOPdMRSzrg3vGr4fPqactIJw7DRQD5yEiLQbCeVD%2BpqPccSodyNbDXEaxkFX8fMStMRVZkftNfEdsKd0u30rMAXK%2B%2FMCFi4wSFU3cJAn4IfjVMPByyJhAKwhupNraMUCrAAsIFR0quKOC0HKMLb1sUYCA9AFHRZ1AvslliAUrRaORdSuGeZ6XRWBYBOJuB9LZEaTo9rMdpFhcsDTIOpEG1imk%2FuiT8CPlM%2FA54OSmsfEy5wIouAt63jMN%2Fk6sMGOqUBjYHUZioxwW%2Be%2Foo9fAGslg%2BkWIpWfcncpHuF%2FFxmaeEUFm5ZSnPH%2FiHWpwtd9YZ4Q22bFUgOqpwF0qMNlRHEBA1Gz%2FNanXnt86ln4DACvqm%2F3oIoqlexmdr2%2FEjx1r84Zgvsw4sxB06Yq2olDHr8gsidbmNSkOO4b0z3fdiWGDFS7AhiH4EZQhbaaomd4Y5lcV1JrIFhurP5n8BeiYii3JB1Gx9p&X-Amz-Signature=c545d076dfd570e1060ec2bc575f73451a4b786a839d700b72f3a6edb2af3c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6S3RSM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICtXdRHQA0YYXwGkCFXB3XLSwIQ6Kv5zWJlQK00CF0W1AiEA2VA6PJYcL%2BVGI3NmHqp%2BQmaWiTu%2Fok0mFW2hyjL0i2YqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwVOXE2HCd1w0zO7yrcA75B6vadL7wz2HYWxjyeHGqOMrxnuUPZWgRyCujKELz3XYezXPxRhmhaMvSVYU2Up5Fn5FjdZf5ClYt2kN4XUNd30Capa32hWnD92edlco6QFRz9TrMSSY5pLUIgvRuSUtHwqBSD3xezSImbIi6ULFLsA3Y%2Fjsl4Shc%2FeYISsxOoy8m27D36n0N1gSSRKO10%2FN0mZa5OCtFq%2FPgqe06DDA9xP0KhSyE75iUFyg5bf1MvkdLigOo8x0Iad7R2wEfkpQuInNR3ffpgd9r46vSUTEmZ%2F53xr6phYqH4KGeyEi3p777zjj8UGr3jS1%2Fq%2F1m9V9h3%2F65mbHMd425tGXGyeewtNrRKrTEQ60CnN2Vuz6ZPr9qpGye8hyEsE2W4PQha8F6gwiOPdMRSzrg3vGr4fPqactIJw7DRQD5yEiLQbCeVD%2BpqPccSodyNbDXEaxkFX8fMStMRVZkftNfEdsKd0u30rMAXK%2B%2FMCFi4wSFU3cJAn4IfjVMPByyJhAKwhupNraMUCrAAsIFR0quKOC0HKMLb1sUYCA9AFHRZ1AvslliAUrRaORdSuGeZ6XRWBYBOJuB9LZEaTo9rMdpFhcsDTIOpEG1imk%2FuiT8CPlM%2FA54OSmsfEy5wIouAt63jMN%2Fk6sMGOqUBjYHUZioxwW%2Be%2Foo9fAGslg%2BkWIpWfcncpHuF%2FFxmaeEUFm5ZSnPH%2FiHWpwtd9YZ4Q22bFUgOqpwF0qMNlRHEBA1Gz%2FNanXnt86ln4DACvqm%2F3oIoqlexmdr2%2FEjx1r84Zgvsw4sxB06Yq2olDHr8gsidbmNSkOO4b0z3fdiWGDFS7AhiH4EZQhbaaomd4Y5lcV1JrIFhurP5n8BeiYii3JB1Gx9p&X-Amz-Signature=9b18ef8760cd4e078d4ef9a8af638c9633c0fa715606384d0addd4ec7e00f011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6S3RSM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICtXdRHQA0YYXwGkCFXB3XLSwIQ6Kv5zWJlQK00CF0W1AiEA2VA6PJYcL%2BVGI3NmHqp%2BQmaWiTu%2Fok0mFW2hyjL0i2YqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwVOXE2HCd1w0zO7yrcA75B6vadL7wz2HYWxjyeHGqOMrxnuUPZWgRyCujKELz3XYezXPxRhmhaMvSVYU2Up5Fn5FjdZf5ClYt2kN4XUNd30Capa32hWnD92edlco6QFRz9TrMSSY5pLUIgvRuSUtHwqBSD3xezSImbIi6ULFLsA3Y%2Fjsl4Shc%2FeYISsxOoy8m27D36n0N1gSSRKO10%2FN0mZa5OCtFq%2FPgqe06DDA9xP0KhSyE75iUFyg5bf1MvkdLigOo8x0Iad7R2wEfkpQuInNR3ffpgd9r46vSUTEmZ%2F53xr6phYqH4KGeyEi3p777zjj8UGr3jS1%2Fq%2F1m9V9h3%2F65mbHMd425tGXGyeewtNrRKrTEQ60CnN2Vuz6ZPr9qpGye8hyEsE2W4PQha8F6gwiOPdMRSzrg3vGr4fPqactIJw7DRQD5yEiLQbCeVD%2BpqPccSodyNbDXEaxkFX8fMStMRVZkftNfEdsKd0u30rMAXK%2B%2FMCFi4wSFU3cJAn4IfjVMPByyJhAKwhupNraMUCrAAsIFR0quKOC0HKMLb1sUYCA9AFHRZ1AvslliAUrRaORdSuGeZ6XRWBYBOJuB9LZEaTo9rMdpFhcsDTIOpEG1imk%2FuiT8CPlM%2FA54OSmsfEy5wIouAt63jMN%2Fk6sMGOqUBjYHUZioxwW%2Be%2Foo9fAGslg%2BkWIpWfcncpHuF%2FFxmaeEUFm5ZSnPH%2FiHWpwtd9YZ4Q22bFUgOqpwF0qMNlRHEBA1Gz%2FNanXnt86ln4DACvqm%2F3oIoqlexmdr2%2FEjx1r84Zgvsw4sxB06Yq2olDHr8gsidbmNSkOO4b0z3fdiWGDFS7AhiH4EZQhbaaomd4Y5lcV1JrIFhurP5n8BeiYii3JB1Gx9p&X-Amz-Signature=a03683709995c6e789975b4e46aabede0e7518edffc6fc25dbf5fe22e6fbb4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6S3RSM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICtXdRHQA0YYXwGkCFXB3XLSwIQ6Kv5zWJlQK00CF0W1AiEA2VA6PJYcL%2BVGI3NmHqp%2BQmaWiTu%2Fok0mFW2hyjL0i2YqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwVOXE2HCd1w0zO7yrcA75B6vadL7wz2HYWxjyeHGqOMrxnuUPZWgRyCujKELz3XYezXPxRhmhaMvSVYU2Up5Fn5FjdZf5ClYt2kN4XUNd30Capa32hWnD92edlco6QFRz9TrMSSY5pLUIgvRuSUtHwqBSD3xezSImbIi6ULFLsA3Y%2Fjsl4Shc%2FeYISsxOoy8m27D36n0N1gSSRKO10%2FN0mZa5OCtFq%2FPgqe06DDA9xP0KhSyE75iUFyg5bf1MvkdLigOo8x0Iad7R2wEfkpQuInNR3ffpgd9r46vSUTEmZ%2F53xr6phYqH4KGeyEi3p777zjj8UGr3jS1%2Fq%2F1m9V9h3%2F65mbHMd425tGXGyeewtNrRKrTEQ60CnN2Vuz6ZPr9qpGye8hyEsE2W4PQha8F6gwiOPdMRSzrg3vGr4fPqactIJw7DRQD5yEiLQbCeVD%2BpqPccSodyNbDXEaxkFX8fMStMRVZkftNfEdsKd0u30rMAXK%2B%2FMCFi4wSFU3cJAn4IfjVMPByyJhAKwhupNraMUCrAAsIFR0quKOC0HKMLb1sUYCA9AFHRZ1AvslliAUrRaORdSuGeZ6XRWBYBOJuB9LZEaTo9rMdpFhcsDTIOpEG1imk%2FuiT8CPlM%2FA54OSmsfEy5wIouAt63jMN%2Fk6sMGOqUBjYHUZioxwW%2Be%2Foo9fAGslg%2BkWIpWfcncpHuF%2FFxmaeEUFm5ZSnPH%2FiHWpwtd9YZ4Q22bFUgOqpwF0qMNlRHEBA1Gz%2FNanXnt86ln4DACvqm%2F3oIoqlexmdr2%2FEjx1r84Zgvsw4sxB06Yq2olDHr8gsidbmNSkOO4b0z3fdiWGDFS7AhiH4EZQhbaaomd4Y5lcV1JrIFhurP5n8BeiYii3JB1Gx9p&X-Amz-Signature=d0b59a148968ff39eca9a656f6fb37b8e95bf58e4da60081b4f8da145d34f211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6S3RSM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICtXdRHQA0YYXwGkCFXB3XLSwIQ6Kv5zWJlQK00CF0W1AiEA2VA6PJYcL%2BVGI3NmHqp%2BQmaWiTu%2Fok0mFW2hyjL0i2YqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwVOXE2HCd1w0zO7yrcA75B6vadL7wz2HYWxjyeHGqOMrxnuUPZWgRyCujKELz3XYezXPxRhmhaMvSVYU2Up5Fn5FjdZf5ClYt2kN4XUNd30Capa32hWnD92edlco6QFRz9TrMSSY5pLUIgvRuSUtHwqBSD3xezSImbIi6ULFLsA3Y%2Fjsl4Shc%2FeYISsxOoy8m27D36n0N1gSSRKO10%2FN0mZa5OCtFq%2FPgqe06DDA9xP0KhSyE75iUFyg5bf1MvkdLigOo8x0Iad7R2wEfkpQuInNR3ffpgd9r46vSUTEmZ%2F53xr6phYqH4KGeyEi3p777zjj8UGr3jS1%2Fq%2F1m9V9h3%2F65mbHMd425tGXGyeewtNrRKrTEQ60CnN2Vuz6ZPr9qpGye8hyEsE2W4PQha8F6gwiOPdMRSzrg3vGr4fPqactIJw7DRQD5yEiLQbCeVD%2BpqPccSodyNbDXEaxkFX8fMStMRVZkftNfEdsKd0u30rMAXK%2B%2FMCFi4wSFU3cJAn4IfjVMPByyJhAKwhupNraMUCrAAsIFR0quKOC0HKMLb1sUYCA9AFHRZ1AvslliAUrRaORdSuGeZ6XRWBYBOJuB9LZEaTo9rMdpFhcsDTIOpEG1imk%2FuiT8CPlM%2FA54OSmsfEy5wIouAt63jMN%2Fk6sMGOqUBjYHUZioxwW%2Be%2Foo9fAGslg%2BkWIpWfcncpHuF%2FFxmaeEUFm5ZSnPH%2FiHWpwtd9YZ4Q22bFUgOqpwF0qMNlRHEBA1Gz%2FNanXnt86ln4DACvqm%2F3oIoqlexmdr2%2FEjx1r84Zgvsw4sxB06Yq2olDHr8gsidbmNSkOO4b0z3fdiWGDFS7AhiH4EZQhbaaomd4Y5lcV1JrIFhurP5n8BeiYii3JB1Gx9p&X-Amz-Signature=062cdf6168281b97357bf788d210d661593df995dbd9933856d6265e8167ce24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
