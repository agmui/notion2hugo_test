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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPBBX6N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDT63o0an3Ip0WYkyya9vPy449fwfD2jlzgWct7e924zAiAUY1WE2t9BK25bwQaYAoD4JwPF4ZfULDsgA%2BSRi%2Fhy5SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALQEmNS577UTGzm9KtwD5U5yUNCUhDFQa5kscc0COQKCGFB6gW7Vtc3f7sOxBz%2BIjMPwW2G1nSxiOiOrd9PzGktnyNSDuY5PEZJ1GgZ6XIsg%2BGtg59OFdEriVyHwx21dVjru31l6MMNE%2F8y8cJUKIg6R02U9sTqVn1Gf%2Br8hrh3bDdcHrgSflhn5BSpI7sIZUGHQatoZuPRf1bpatLwqNufOMDIKRRthl1pxWmhh%2BsfGmWFT8MrDnxpt2r0TcOoHoJx89xWwnaF3rW2W719U6mzzLewautk4VRe3Cb0y1cVA9MI0p0qi6YpCeTl4oYUd%2FDzI%2F%2FSLQgJ%2F%2BBneeEvpXRP%2B7PTOqcBPHjEnNnxVqz17ZZUAF4yLHc%2BZejmDLkU5ucBRIwLtYtfMU6uhWGP5x20atuSoB17BQpjzJK3pHnW2elYe43bgo2vL0HNnSiN2tzYhQdAFFLsOAzUwsNeLq0nOd%2Bs9sExPqwfTVHDDos7onbowU20ma7mIqFlzGxbuBvrzp3RQ25GEcUObPrM7MOtCAP5mg0%2BktsVbJbhD80Ihl5wZf8dCLSIwVB7jIkgHfgwinTa8TsFqm01gT2q1AZ4aYgSGJUmo77OarSduKNzOPDw6jEhYLqfiddDmOzuEsbqVEoNjslExQ1kw1P7CwQY6pgE6UUu9O2vAiirD9JpY1MR4rDg8%2B5%2F6VSvD8AL8kovq3DUrKrn6%2B%2FIW9RdF1IrUDCBzMPowSowdzKB8wzipXnPO7rx4GMtcsSkoY1xAKpD1ZNE3fcvoPBU%2BqhvCOb7zBTf%2B6Pka2y%2BupN9LkH9qMLuV606VHmdtarkmOt2MmldBcoHLkIwi%2BGr0hpFWiLgquyAte5g95YNFut415JLDIDhcih7v4sme&X-Amz-Signature=762291aee10b3021c6a852670f0d7dbb1e0590708f14745ee33d9033c20c3e86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPBBX6N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDT63o0an3Ip0WYkyya9vPy449fwfD2jlzgWct7e924zAiAUY1WE2t9BK25bwQaYAoD4JwPF4ZfULDsgA%2BSRi%2Fhy5SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALQEmNS577UTGzm9KtwD5U5yUNCUhDFQa5kscc0COQKCGFB6gW7Vtc3f7sOxBz%2BIjMPwW2G1nSxiOiOrd9PzGktnyNSDuY5PEZJ1GgZ6XIsg%2BGtg59OFdEriVyHwx21dVjru31l6MMNE%2F8y8cJUKIg6R02U9sTqVn1Gf%2Br8hrh3bDdcHrgSflhn5BSpI7sIZUGHQatoZuPRf1bpatLwqNufOMDIKRRthl1pxWmhh%2BsfGmWFT8MrDnxpt2r0TcOoHoJx89xWwnaF3rW2W719U6mzzLewautk4VRe3Cb0y1cVA9MI0p0qi6YpCeTl4oYUd%2FDzI%2F%2FSLQgJ%2F%2BBneeEvpXRP%2B7PTOqcBPHjEnNnxVqz17ZZUAF4yLHc%2BZejmDLkU5ucBRIwLtYtfMU6uhWGP5x20atuSoB17BQpjzJK3pHnW2elYe43bgo2vL0HNnSiN2tzYhQdAFFLsOAzUwsNeLq0nOd%2Bs9sExPqwfTVHDDos7onbowU20ma7mIqFlzGxbuBvrzp3RQ25GEcUObPrM7MOtCAP5mg0%2BktsVbJbhD80Ihl5wZf8dCLSIwVB7jIkgHfgwinTa8TsFqm01gT2q1AZ4aYgSGJUmo77OarSduKNzOPDw6jEhYLqfiddDmOzuEsbqVEoNjslExQ1kw1P7CwQY6pgE6UUu9O2vAiirD9JpY1MR4rDg8%2B5%2F6VSvD8AL8kovq3DUrKrn6%2B%2FIW9RdF1IrUDCBzMPowSowdzKB8wzipXnPO7rx4GMtcsSkoY1xAKpD1ZNE3fcvoPBU%2BqhvCOb7zBTf%2B6Pka2y%2BupN9LkH9qMLuV606VHmdtarkmOt2MmldBcoHLkIwi%2BGr0hpFWiLgquyAte5g95YNFut415JLDIDhcih7v4sme&X-Amz-Signature=059cdf1293224c246076d119e1d461679d8b6caf00e4d8959b71a424f3c31bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPBBX6N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDT63o0an3Ip0WYkyya9vPy449fwfD2jlzgWct7e924zAiAUY1WE2t9BK25bwQaYAoD4JwPF4ZfULDsgA%2BSRi%2Fhy5SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALQEmNS577UTGzm9KtwD5U5yUNCUhDFQa5kscc0COQKCGFB6gW7Vtc3f7sOxBz%2BIjMPwW2G1nSxiOiOrd9PzGktnyNSDuY5PEZJ1GgZ6XIsg%2BGtg59OFdEriVyHwx21dVjru31l6MMNE%2F8y8cJUKIg6R02U9sTqVn1Gf%2Br8hrh3bDdcHrgSflhn5BSpI7sIZUGHQatoZuPRf1bpatLwqNufOMDIKRRthl1pxWmhh%2BsfGmWFT8MrDnxpt2r0TcOoHoJx89xWwnaF3rW2W719U6mzzLewautk4VRe3Cb0y1cVA9MI0p0qi6YpCeTl4oYUd%2FDzI%2F%2FSLQgJ%2F%2BBneeEvpXRP%2B7PTOqcBPHjEnNnxVqz17ZZUAF4yLHc%2BZejmDLkU5ucBRIwLtYtfMU6uhWGP5x20atuSoB17BQpjzJK3pHnW2elYe43bgo2vL0HNnSiN2tzYhQdAFFLsOAzUwsNeLq0nOd%2Bs9sExPqwfTVHDDos7onbowU20ma7mIqFlzGxbuBvrzp3RQ25GEcUObPrM7MOtCAP5mg0%2BktsVbJbhD80Ihl5wZf8dCLSIwVB7jIkgHfgwinTa8TsFqm01gT2q1AZ4aYgSGJUmo77OarSduKNzOPDw6jEhYLqfiddDmOzuEsbqVEoNjslExQ1kw1P7CwQY6pgE6UUu9O2vAiirD9JpY1MR4rDg8%2B5%2F6VSvD8AL8kovq3DUrKrn6%2B%2FIW9RdF1IrUDCBzMPowSowdzKB8wzipXnPO7rx4GMtcsSkoY1xAKpD1ZNE3fcvoPBU%2BqhvCOb7zBTf%2B6Pka2y%2BupN9LkH9qMLuV606VHmdtarkmOt2MmldBcoHLkIwi%2BGr0hpFWiLgquyAte5g95YNFut415JLDIDhcih7v4sme&X-Amz-Signature=190903a89fe741f3d3cd65aaaea2bce2c52402777234006f7a7676cb78fad3e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPBBX6N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDT63o0an3Ip0WYkyya9vPy449fwfD2jlzgWct7e924zAiAUY1WE2t9BK25bwQaYAoD4JwPF4ZfULDsgA%2BSRi%2Fhy5SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALQEmNS577UTGzm9KtwD5U5yUNCUhDFQa5kscc0COQKCGFB6gW7Vtc3f7sOxBz%2BIjMPwW2G1nSxiOiOrd9PzGktnyNSDuY5PEZJ1GgZ6XIsg%2BGtg59OFdEriVyHwx21dVjru31l6MMNE%2F8y8cJUKIg6R02U9sTqVn1Gf%2Br8hrh3bDdcHrgSflhn5BSpI7sIZUGHQatoZuPRf1bpatLwqNufOMDIKRRthl1pxWmhh%2BsfGmWFT8MrDnxpt2r0TcOoHoJx89xWwnaF3rW2W719U6mzzLewautk4VRe3Cb0y1cVA9MI0p0qi6YpCeTl4oYUd%2FDzI%2F%2FSLQgJ%2F%2BBneeEvpXRP%2B7PTOqcBPHjEnNnxVqz17ZZUAF4yLHc%2BZejmDLkU5ucBRIwLtYtfMU6uhWGP5x20atuSoB17BQpjzJK3pHnW2elYe43bgo2vL0HNnSiN2tzYhQdAFFLsOAzUwsNeLq0nOd%2Bs9sExPqwfTVHDDos7onbowU20ma7mIqFlzGxbuBvrzp3RQ25GEcUObPrM7MOtCAP5mg0%2BktsVbJbhD80Ihl5wZf8dCLSIwVB7jIkgHfgwinTa8TsFqm01gT2q1AZ4aYgSGJUmo77OarSduKNzOPDw6jEhYLqfiddDmOzuEsbqVEoNjslExQ1kw1P7CwQY6pgE6UUu9O2vAiirD9JpY1MR4rDg8%2B5%2F6VSvD8AL8kovq3DUrKrn6%2B%2FIW9RdF1IrUDCBzMPowSowdzKB8wzipXnPO7rx4GMtcsSkoY1xAKpD1ZNE3fcvoPBU%2BqhvCOb7zBTf%2B6Pka2y%2BupN9LkH9qMLuV606VHmdtarkmOt2MmldBcoHLkIwi%2BGr0hpFWiLgquyAte5g95YNFut415JLDIDhcih7v4sme&X-Amz-Signature=739bd354ec2fa0f052b336c15214e98c09bbfcf93fa91ccd7b50cec6235b1d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPBBX6N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDT63o0an3Ip0WYkyya9vPy449fwfD2jlzgWct7e924zAiAUY1WE2t9BK25bwQaYAoD4JwPF4ZfULDsgA%2BSRi%2Fhy5SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALQEmNS577UTGzm9KtwD5U5yUNCUhDFQa5kscc0COQKCGFB6gW7Vtc3f7sOxBz%2BIjMPwW2G1nSxiOiOrd9PzGktnyNSDuY5PEZJ1GgZ6XIsg%2BGtg59OFdEriVyHwx21dVjru31l6MMNE%2F8y8cJUKIg6R02U9sTqVn1Gf%2Br8hrh3bDdcHrgSflhn5BSpI7sIZUGHQatoZuPRf1bpatLwqNufOMDIKRRthl1pxWmhh%2BsfGmWFT8MrDnxpt2r0TcOoHoJx89xWwnaF3rW2W719U6mzzLewautk4VRe3Cb0y1cVA9MI0p0qi6YpCeTl4oYUd%2FDzI%2F%2FSLQgJ%2F%2BBneeEvpXRP%2B7PTOqcBPHjEnNnxVqz17ZZUAF4yLHc%2BZejmDLkU5ucBRIwLtYtfMU6uhWGP5x20atuSoB17BQpjzJK3pHnW2elYe43bgo2vL0HNnSiN2tzYhQdAFFLsOAzUwsNeLq0nOd%2Bs9sExPqwfTVHDDos7onbowU20ma7mIqFlzGxbuBvrzp3RQ25GEcUObPrM7MOtCAP5mg0%2BktsVbJbhD80Ihl5wZf8dCLSIwVB7jIkgHfgwinTa8TsFqm01gT2q1AZ4aYgSGJUmo77OarSduKNzOPDw6jEhYLqfiddDmOzuEsbqVEoNjslExQ1kw1P7CwQY6pgE6UUu9O2vAiirD9JpY1MR4rDg8%2B5%2F6VSvD8AL8kovq3DUrKrn6%2B%2FIW9RdF1IrUDCBzMPowSowdzKB8wzipXnPO7rx4GMtcsSkoY1xAKpD1ZNE3fcvoPBU%2BqhvCOb7zBTf%2B6Pka2y%2BupN9LkH9qMLuV606VHmdtarkmOt2MmldBcoHLkIwi%2BGr0hpFWiLgquyAte5g95YNFut415JLDIDhcih7v4sme&X-Amz-Signature=f00f8c20eba73a3b91381d7e622aa8892607a7972cd85734902779b6a56c9e41&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPBBX6N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDT63o0an3Ip0WYkyya9vPy449fwfD2jlzgWct7e924zAiAUY1WE2t9BK25bwQaYAoD4JwPF4ZfULDsgA%2BSRi%2Fhy5SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALQEmNS577UTGzm9KtwD5U5yUNCUhDFQa5kscc0COQKCGFB6gW7Vtc3f7sOxBz%2BIjMPwW2G1nSxiOiOrd9PzGktnyNSDuY5PEZJ1GgZ6XIsg%2BGtg59OFdEriVyHwx21dVjru31l6MMNE%2F8y8cJUKIg6R02U9sTqVn1Gf%2Br8hrh3bDdcHrgSflhn5BSpI7sIZUGHQatoZuPRf1bpatLwqNufOMDIKRRthl1pxWmhh%2BsfGmWFT8MrDnxpt2r0TcOoHoJx89xWwnaF3rW2W719U6mzzLewautk4VRe3Cb0y1cVA9MI0p0qi6YpCeTl4oYUd%2FDzI%2F%2FSLQgJ%2F%2BBneeEvpXRP%2B7PTOqcBPHjEnNnxVqz17ZZUAF4yLHc%2BZejmDLkU5ucBRIwLtYtfMU6uhWGP5x20atuSoB17BQpjzJK3pHnW2elYe43bgo2vL0HNnSiN2tzYhQdAFFLsOAzUwsNeLq0nOd%2Bs9sExPqwfTVHDDos7onbowU20ma7mIqFlzGxbuBvrzp3RQ25GEcUObPrM7MOtCAP5mg0%2BktsVbJbhD80Ihl5wZf8dCLSIwVB7jIkgHfgwinTa8TsFqm01gT2q1AZ4aYgSGJUmo77OarSduKNzOPDw6jEhYLqfiddDmOzuEsbqVEoNjslExQ1kw1P7CwQY6pgE6UUu9O2vAiirD9JpY1MR4rDg8%2B5%2F6VSvD8AL8kovq3DUrKrn6%2B%2FIW9RdF1IrUDCBzMPowSowdzKB8wzipXnPO7rx4GMtcsSkoY1xAKpD1ZNE3fcvoPBU%2BqhvCOb7zBTf%2B6Pka2y%2BupN9LkH9qMLuV606VHmdtarkmOt2MmldBcoHLkIwi%2BGr0hpFWiLgquyAte5g95YNFut415JLDIDhcih7v4sme&X-Amz-Signature=ebf08b77784e896d5fe44d3fda2ac6d71caba93a6100cf09686f6aa7e44ac045&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPBBX6N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDT63o0an3Ip0WYkyya9vPy449fwfD2jlzgWct7e924zAiAUY1WE2t9BK25bwQaYAoD4JwPF4ZfULDsgA%2BSRi%2Fhy5SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALQEmNS577UTGzm9KtwD5U5yUNCUhDFQa5kscc0COQKCGFB6gW7Vtc3f7sOxBz%2BIjMPwW2G1nSxiOiOrd9PzGktnyNSDuY5PEZJ1GgZ6XIsg%2BGtg59OFdEriVyHwx21dVjru31l6MMNE%2F8y8cJUKIg6R02U9sTqVn1Gf%2Br8hrh3bDdcHrgSflhn5BSpI7sIZUGHQatoZuPRf1bpatLwqNufOMDIKRRthl1pxWmhh%2BsfGmWFT8MrDnxpt2r0TcOoHoJx89xWwnaF3rW2W719U6mzzLewautk4VRe3Cb0y1cVA9MI0p0qi6YpCeTl4oYUd%2FDzI%2F%2FSLQgJ%2F%2BBneeEvpXRP%2B7PTOqcBPHjEnNnxVqz17ZZUAF4yLHc%2BZejmDLkU5ucBRIwLtYtfMU6uhWGP5x20atuSoB17BQpjzJK3pHnW2elYe43bgo2vL0HNnSiN2tzYhQdAFFLsOAzUwsNeLq0nOd%2Bs9sExPqwfTVHDDos7onbowU20ma7mIqFlzGxbuBvrzp3RQ25GEcUObPrM7MOtCAP5mg0%2BktsVbJbhD80Ihl5wZf8dCLSIwVB7jIkgHfgwinTa8TsFqm01gT2q1AZ4aYgSGJUmo77OarSduKNzOPDw6jEhYLqfiddDmOzuEsbqVEoNjslExQ1kw1P7CwQY6pgE6UUu9O2vAiirD9JpY1MR4rDg8%2B5%2F6VSvD8AL8kovq3DUrKrn6%2B%2FIW9RdF1IrUDCBzMPowSowdzKB8wzipXnPO7rx4GMtcsSkoY1xAKpD1ZNE3fcvoPBU%2BqhvCOb7zBTf%2B6Pka2y%2BupN9LkH9qMLuV606VHmdtarkmOt2MmldBcoHLkIwi%2BGr0hpFWiLgquyAte5g95YNFut415JLDIDhcih7v4sme&X-Amz-Signature=408ecd7f963f899207bc3b36640e10da5d9bf4ab4811f9a95bc5c088b72564e7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
