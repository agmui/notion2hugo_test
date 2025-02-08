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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZYR5PIH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDLUTYJLXzus5kgjPDaVuo4tsOadwqrjapfENW9xPYE6gIhAJTsc2QE82p8nqMwuQMuihgl4zVpXk9XxzAXVYeA9z65KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6WWNzQhWvUl88gTIq3ANgrXMrvo1Iz4GKdPikAo7ZOcHLLQCvyRt3NfY7pQAdUASTmRVJMBs7fK5eaqVdzIAbWL5vd9NIdPWoTNeZnjxu%2FhmvQ7Se0CaIOSmhUEb%2Fd1aXAoqRs1OBWiTfUtMUnHstN1EQgs5uOrO6N0h%2FiIGb8Zl1VG9KnwFfzfR0%2FR7h%2FXYCmAjESego6ET2ky8Ke02hZIWscR42wstnlXfAwsUAILudws8oQLLuLNbMoH6oDX%2Fj5eQbs2Llr4Ya9317MOuFAB%2FBRsOEqmiNLlghjFOZS33TkzIWSxf%2BOhS3SmsiOkN%2FRhjL2UR4J6e1SAtkPEdWE7WChS28vy%2BzQaQ%2FJxuw5T9iRkmJcC1XB4zccQ3tRFevZCcpRJRM6D2l0U4P93sNto17Obgk7abe%2Bl6SVgAZD76LoTNwqs1aOsFzckQUuuanlqTVPVplHVAFyjWDah9pMYpvYBmSsRV%2BvNqzCwiF%2F4VU7Y1YDm%2F20yUZ48%2BmetwWnyD1BTlB3Wgs%2FlVnv4odP4N%2FybRXtLR5RpmO9uY2re8qf4hx0791hGkY1ChZeGf%2BYdv9ymEFuw4OpViD3zUKrGYobtlU3vhJKCmDYTVf8W1zCKfpL%2B2UCqgB%2B%2F7twpoC1ARh6AbpOFRzCjDekJy9BjqkAR%2F8M%2BFAZNHYdde6pIYz2xNdPetszENNHLLDfpjh%2FhZ1gXFCeR1HXeR344VaU%2BTFFv8bS5xZKbRUv5styI1asTI2BSt7HIM%2F%2BV1Af6tTJvdYrnB070l6oBNhuO2loprNhJdzxZeoU8tiX9oZhEP3Mu7Rw%2Bt3W5QjioHJ5%2BEAmnXZ5BMozJmCrcyo4zWLQMivEb7uOBD76dP7eZC%2F8BL2OntSoLAY&X-Amz-Signature=1bc3f3c94b6e66f0be8e4c093966300b084a72d8babab66a2a97477703888f72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZYR5PIH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDLUTYJLXzus5kgjPDaVuo4tsOadwqrjapfENW9xPYE6gIhAJTsc2QE82p8nqMwuQMuihgl4zVpXk9XxzAXVYeA9z65KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6WWNzQhWvUl88gTIq3ANgrXMrvo1Iz4GKdPikAo7ZOcHLLQCvyRt3NfY7pQAdUASTmRVJMBs7fK5eaqVdzIAbWL5vd9NIdPWoTNeZnjxu%2FhmvQ7Se0CaIOSmhUEb%2Fd1aXAoqRs1OBWiTfUtMUnHstN1EQgs5uOrO6N0h%2FiIGb8Zl1VG9KnwFfzfR0%2FR7h%2FXYCmAjESego6ET2ky8Ke02hZIWscR42wstnlXfAwsUAILudws8oQLLuLNbMoH6oDX%2Fj5eQbs2Llr4Ya9317MOuFAB%2FBRsOEqmiNLlghjFOZS33TkzIWSxf%2BOhS3SmsiOkN%2FRhjL2UR4J6e1SAtkPEdWE7WChS28vy%2BzQaQ%2FJxuw5T9iRkmJcC1XB4zccQ3tRFevZCcpRJRM6D2l0U4P93sNto17Obgk7abe%2Bl6SVgAZD76LoTNwqs1aOsFzckQUuuanlqTVPVplHVAFyjWDah9pMYpvYBmSsRV%2BvNqzCwiF%2F4VU7Y1YDm%2F20yUZ48%2BmetwWnyD1BTlB3Wgs%2FlVnv4odP4N%2FybRXtLR5RpmO9uY2re8qf4hx0791hGkY1ChZeGf%2BYdv9ymEFuw4OpViD3zUKrGYobtlU3vhJKCmDYTVf8W1zCKfpL%2B2UCqgB%2B%2F7twpoC1ARh6AbpOFRzCjDekJy9BjqkAR%2F8M%2BFAZNHYdde6pIYz2xNdPetszENNHLLDfpjh%2FhZ1gXFCeR1HXeR344VaU%2BTFFv8bS5xZKbRUv5styI1asTI2BSt7HIM%2F%2BV1Af6tTJvdYrnB070l6oBNhuO2loprNhJdzxZeoU8tiX9oZhEP3Mu7Rw%2Bt3W5QjioHJ5%2BEAmnXZ5BMozJmCrcyo4zWLQMivEb7uOBD76dP7eZC%2F8BL2OntSoLAY&X-Amz-Signature=84307a991000f2f2fd84ef1570967e77c886f68909bfd4c6c24cf204532d38ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZYR5PIH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDLUTYJLXzus5kgjPDaVuo4tsOadwqrjapfENW9xPYE6gIhAJTsc2QE82p8nqMwuQMuihgl4zVpXk9XxzAXVYeA9z65KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6WWNzQhWvUl88gTIq3ANgrXMrvo1Iz4GKdPikAo7ZOcHLLQCvyRt3NfY7pQAdUASTmRVJMBs7fK5eaqVdzIAbWL5vd9NIdPWoTNeZnjxu%2FhmvQ7Se0CaIOSmhUEb%2Fd1aXAoqRs1OBWiTfUtMUnHstN1EQgs5uOrO6N0h%2FiIGb8Zl1VG9KnwFfzfR0%2FR7h%2FXYCmAjESego6ET2ky8Ke02hZIWscR42wstnlXfAwsUAILudws8oQLLuLNbMoH6oDX%2Fj5eQbs2Llr4Ya9317MOuFAB%2FBRsOEqmiNLlghjFOZS33TkzIWSxf%2BOhS3SmsiOkN%2FRhjL2UR4J6e1SAtkPEdWE7WChS28vy%2BzQaQ%2FJxuw5T9iRkmJcC1XB4zccQ3tRFevZCcpRJRM6D2l0U4P93sNto17Obgk7abe%2Bl6SVgAZD76LoTNwqs1aOsFzckQUuuanlqTVPVplHVAFyjWDah9pMYpvYBmSsRV%2BvNqzCwiF%2F4VU7Y1YDm%2F20yUZ48%2BmetwWnyD1BTlB3Wgs%2FlVnv4odP4N%2FybRXtLR5RpmO9uY2re8qf4hx0791hGkY1ChZeGf%2BYdv9ymEFuw4OpViD3zUKrGYobtlU3vhJKCmDYTVf8W1zCKfpL%2B2UCqgB%2B%2F7twpoC1ARh6AbpOFRzCjDekJy9BjqkAR%2F8M%2BFAZNHYdde6pIYz2xNdPetszENNHLLDfpjh%2FhZ1gXFCeR1HXeR344VaU%2BTFFv8bS5xZKbRUv5styI1asTI2BSt7HIM%2F%2BV1Af6tTJvdYrnB070l6oBNhuO2loprNhJdzxZeoU8tiX9oZhEP3Mu7Rw%2Bt3W5QjioHJ5%2BEAmnXZ5BMozJmCrcyo4zWLQMivEb7uOBD76dP7eZC%2F8BL2OntSoLAY&X-Amz-Signature=99476c96746657515ea27da172732b8374999d90ce81d70858035b8ab5af983d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZYR5PIH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDLUTYJLXzus5kgjPDaVuo4tsOadwqrjapfENW9xPYE6gIhAJTsc2QE82p8nqMwuQMuihgl4zVpXk9XxzAXVYeA9z65KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6WWNzQhWvUl88gTIq3ANgrXMrvo1Iz4GKdPikAo7ZOcHLLQCvyRt3NfY7pQAdUASTmRVJMBs7fK5eaqVdzIAbWL5vd9NIdPWoTNeZnjxu%2FhmvQ7Se0CaIOSmhUEb%2Fd1aXAoqRs1OBWiTfUtMUnHstN1EQgs5uOrO6N0h%2FiIGb8Zl1VG9KnwFfzfR0%2FR7h%2FXYCmAjESego6ET2ky8Ke02hZIWscR42wstnlXfAwsUAILudws8oQLLuLNbMoH6oDX%2Fj5eQbs2Llr4Ya9317MOuFAB%2FBRsOEqmiNLlghjFOZS33TkzIWSxf%2BOhS3SmsiOkN%2FRhjL2UR4J6e1SAtkPEdWE7WChS28vy%2BzQaQ%2FJxuw5T9iRkmJcC1XB4zccQ3tRFevZCcpRJRM6D2l0U4P93sNto17Obgk7abe%2Bl6SVgAZD76LoTNwqs1aOsFzckQUuuanlqTVPVplHVAFyjWDah9pMYpvYBmSsRV%2BvNqzCwiF%2F4VU7Y1YDm%2F20yUZ48%2BmetwWnyD1BTlB3Wgs%2FlVnv4odP4N%2FybRXtLR5RpmO9uY2re8qf4hx0791hGkY1ChZeGf%2BYdv9ymEFuw4OpViD3zUKrGYobtlU3vhJKCmDYTVf8W1zCKfpL%2B2UCqgB%2B%2F7twpoC1ARh6AbpOFRzCjDekJy9BjqkAR%2F8M%2BFAZNHYdde6pIYz2xNdPetszENNHLLDfpjh%2FhZ1gXFCeR1HXeR344VaU%2BTFFv8bS5xZKbRUv5styI1asTI2BSt7HIM%2F%2BV1Af6tTJvdYrnB070l6oBNhuO2loprNhJdzxZeoU8tiX9oZhEP3Mu7Rw%2Bt3W5QjioHJ5%2BEAmnXZ5BMozJmCrcyo4zWLQMivEb7uOBD76dP7eZC%2F8BL2OntSoLAY&X-Amz-Signature=40b1ec51575085b5916642c3d5eb27cfca63afa48d723750d78a4d8b41700b80&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZYR5PIH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDLUTYJLXzus5kgjPDaVuo4tsOadwqrjapfENW9xPYE6gIhAJTsc2QE82p8nqMwuQMuihgl4zVpXk9XxzAXVYeA9z65KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6WWNzQhWvUl88gTIq3ANgrXMrvo1Iz4GKdPikAo7ZOcHLLQCvyRt3NfY7pQAdUASTmRVJMBs7fK5eaqVdzIAbWL5vd9NIdPWoTNeZnjxu%2FhmvQ7Se0CaIOSmhUEb%2Fd1aXAoqRs1OBWiTfUtMUnHstN1EQgs5uOrO6N0h%2FiIGb8Zl1VG9KnwFfzfR0%2FR7h%2FXYCmAjESego6ET2ky8Ke02hZIWscR42wstnlXfAwsUAILudws8oQLLuLNbMoH6oDX%2Fj5eQbs2Llr4Ya9317MOuFAB%2FBRsOEqmiNLlghjFOZS33TkzIWSxf%2BOhS3SmsiOkN%2FRhjL2UR4J6e1SAtkPEdWE7WChS28vy%2BzQaQ%2FJxuw5T9iRkmJcC1XB4zccQ3tRFevZCcpRJRM6D2l0U4P93sNto17Obgk7abe%2Bl6SVgAZD76LoTNwqs1aOsFzckQUuuanlqTVPVplHVAFyjWDah9pMYpvYBmSsRV%2BvNqzCwiF%2F4VU7Y1YDm%2F20yUZ48%2BmetwWnyD1BTlB3Wgs%2FlVnv4odP4N%2FybRXtLR5RpmO9uY2re8qf4hx0791hGkY1ChZeGf%2BYdv9ymEFuw4OpViD3zUKrGYobtlU3vhJKCmDYTVf8W1zCKfpL%2B2UCqgB%2B%2F7twpoC1ARh6AbpOFRzCjDekJy9BjqkAR%2F8M%2BFAZNHYdde6pIYz2xNdPetszENNHLLDfpjh%2FhZ1gXFCeR1HXeR344VaU%2BTFFv8bS5xZKbRUv5styI1asTI2BSt7HIM%2F%2BV1Af6tTJvdYrnB070l6oBNhuO2loprNhJdzxZeoU8tiX9oZhEP3Mu7Rw%2Bt3W5QjioHJ5%2BEAmnXZ5BMozJmCrcyo4zWLQMivEb7uOBD76dP7eZC%2F8BL2OntSoLAY&X-Amz-Signature=0625bb0ac2b0c75f50e60935d81bd74b2c9ed1c8255669e11f50c9101874b857&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZYR5PIH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDLUTYJLXzus5kgjPDaVuo4tsOadwqrjapfENW9xPYE6gIhAJTsc2QE82p8nqMwuQMuihgl4zVpXk9XxzAXVYeA9z65KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6WWNzQhWvUl88gTIq3ANgrXMrvo1Iz4GKdPikAo7ZOcHLLQCvyRt3NfY7pQAdUASTmRVJMBs7fK5eaqVdzIAbWL5vd9NIdPWoTNeZnjxu%2FhmvQ7Se0CaIOSmhUEb%2Fd1aXAoqRs1OBWiTfUtMUnHstN1EQgs5uOrO6N0h%2FiIGb8Zl1VG9KnwFfzfR0%2FR7h%2FXYCmAjESego6ET2ky8Ke02hZIWscR42wstnlXfAwsUAILudws8oQLLuLNbMoH6oDX%2Fj5eQbs2Llr4Ya9317MOuFAB%2FBRsOEqmiNLlghjFOZS33TkzIWSxf%2BOhS3SmsiOkN%2FRhjL2UR4J6e1SAtkPEdWE7WChS28vy%2BzQaQ%2FJxuw5T9iRkmJcC1XB4zccQ3tRFevZCcpRJRM6D2l0U4P93sNto17Obgk7abe%2Bl6SVgAZD76LoTNwqs1aOsFzckQUuuanlqTVPVplHVAFyjWDah9pMYpvYBmSsRV%2BvNqzCwiF%2F4VU7Y1YDm%2F20yUZ48%2BmetwWnyD1BTlB3Wgs%2FlVnv4odP4N%2FybRXtLR5RpmO9uY2re8qf4hx0791hGkY1ChZeGf%2BYdv9ymEFuw4OpViD3zUKrGYobtlU3vhJKCmDYTVf8W1zCKfpL%2B2UCqgB%2B%2F7twpoC1ARh6AbpOFRzCjDekJy9BjqkAR%2F8M%2BFAZNHYdde6pIYz2xNdPetszENNHLLDfpjh%2FhZ1gXFCeR1HXeR344VaU%2BTFFv8bS5xZKbRUv5styI1asTI2BSt7HIM%2F%2BV1Af6tTJvdYrnB070l6oBNhuO2loprNhJdzxZeoU8tiX9oZhEP3Mu7Rw%2Bt3W5QjioHJ5%2BEAmnXZ5BMozJmCrcyo4zWLQMivEb7uOBD76dP7eZC%2F8BL2OntSoLAY&X-Amz-Signature=1c8499da80913550d87ba75ccc0d5d57760eee9a876bb0c7c98032c30450b7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZYR5PIH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDLUTYJLXzus5kgjPDaVuo4tsOadwqrjapfENW9xPYE6gIhAJTsc2QE82p8nqMwuQMuihgl4zVpXk9XxzAXVYeA9z65KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6WWNzQhWvUl88gTIq3ANgrXMrvo1Iz4GKdPikAo7ZOcHLLQCvyRt3NfY7pQAdUASTmRVJMBs7fK5eaqVdzIAbWL5vd9NIdPWoTNeZnjxu%2FhmvQ7Se0CaIOSmhUEb%2Fd1aXAoqRs1OBWiTfUtMUnHstN1EQgs5uOrO6N0h%2FiIGb8Zl1VG9KnwFfzfR0%2FR7h%2FXYCmAjESego6ET2ky8Ke02hZIWscR42wstnlXfAwsUAILudws8oQLLuLNbMoH6oDX%2Fj5eQbs2Llr4Ya9317MOuFAB%2FBRsOEqmiNLlghjFOZS33TkzIWSxf%2BOhS3SmsiOkN%2FRhjL2UR4J6e1SAtkPEdWE7WChS28vy%2BzQaQ%2FJxuw5T9iRkmJcC1XB4zccQ3tRFevZCcpRJRM6D2l0U4P93sNto17Obgk7abe%2Bl6SVgAZD76LoTNwqs1aOsFzckQUuuanlqTVPVplHVAFyjWDah9pMYpvYBmSsRV%2BvNqzCwiF%2F4VU7Y1YDm%2F20yUZ48%2BmetwWnyD1BTlB3Wgs%2FlVnv4odP4N%2FybRXtLR5RpmO9uY2re8qf4hx0791hGkY1ChZeGf%2BYdv9ymEFuw4OpViD3zUKrGYobtlU3vhJKCmDYTVf8W1zCKfpL%2B2UCqgB%2B%2F7twpoC1ARh6AbpOFRzCjDekJy9BjqkAR%2F8M%2BFAZNHYdde6pIYz2xNdPetszENNHLLDfpjh%2FhZ1gXFCeR1HXeR344VaU%2BTFFv8bS5xZKbRUv5styI1asTI2BSt7HIM%2F%2BV1Af6tTJvdYrnB070l6oBNhuO2loprNhJdzxZeoU8tiX9oZhEP3Mu7Rw%2Bt3W5QjioHJ5%2BEAmnXZ5BMozJmCrcyo4zWLQMivEb7uOBD76dP7eZC%2F8BL2OntSoLAY&X-Amz-Signature=a5c5ba082b0594fab28786d04533e966c3e1929e5ff7f12c35f55887692bf304&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
