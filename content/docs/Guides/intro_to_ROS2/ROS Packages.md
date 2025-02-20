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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WIH5GXP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVKy2Duyxefe0Meu4yf2iUxOOOL55x%2Bqq1KUEZZw1IHAiEAgcJTS1GfugPCJnJl8BBeiVGut3jxWetjo1f9HbTlVd8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPET67cOr421LiFZhircAw3IBxmRuW8%2BDk%2B2zCWlCtSyCbFLrnILdLTXi69pNmaRBTfEm4nbWWirA25XNYwiL6aueIrz0qqpo83vWgfMFyM7kdD%2BX3JqG0T7D%2BW7CvVQVMxjnPCU3g4kd%2FsnQdIkiwk2GW36zDx7cJ%2FCq8QfeBXqRkEt3HbabHcYKchPrpVQXKTIV1lGSM4tRplguCdXV7FDL1Lm40wHIdWRsD%2FCzH%2BUkBACMxuwyiFnhLJLlQe5LJMABsNv2qMLv4C5w5G542s9MqHyyyntsNi7I9IrV9R%2BRP9bcqAlFNXjwrn8xRIEqPBnt2ahFttsy5hdm54ipxzXTUHMtQbR7qa7XRbAML6E9E5dxrpQF1LIAc9xN5%2FKpBPbGeysILvPGajdijPD8p8KOkUxjvYdmpTNMh%2BJxXOPsfXTkcbQRr4D3pSLwLn5e8gDcWCQGLOHjKuRGwoxulZexGqdLgJgEKLchahY5RU%2Bzjrep6vBIc8GSdJnti5dTnu2OBTPsSo6B4ndAmzx%2BD%2BLe%2BVuaUicGTZdow%2FTBhyjbA1PG8ObSNN1tdmrC7g3y1i0cMScfD6rFmRmdOUXFDNDgRh7A5CKuT%2Bviyx7YKBSH9wRJAWjU12v6OEDIrLcFo6Kwf%2FGnF6mSom%2BMM3D2r0GOqUBHJlskuQtbse0%2FGUqlmyQDEEZH2zfjjPNBloZZgA49ltldAsPqdYkRDXBqb6x7jPcvl0yk7nv2fK1OGy9oFaoU1gUkeydYH3rNeWAtvxvaawMAohKqdQ0KPou5xywLBapSZPIRnE27ojACytBqD%2BqNPdlIG3mC9tJGxEnWzFXTkdMK5EWBM4cx54O4ajdCNxR2dFm2pgwhrr433CAORcyryelRuqR&X-Amz-Signature=c5877be6617b5f840ca3ea60a5ca525bd742d94cf0c78af207bcf63d28c90c00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WIH5GXP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVKy2Duyxefe0Meu4yf2iUxOOOL55x%2Bqq1KUEZZw1IHAiEAgcJTS1GfugPCJnJl8BBeiVGut3jxWetjo1f9HbTlVd8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPET67cOr421LiFZhircAw3IBxmRuW8%2BDk%2B2zCWlCtSyCbFLrnILdLTXi69pNmaRBTfEm4nbWWirA25XNYwiL6aueIrz0qqpo83vWgfMFyM7kdD%2BX3JqG0T7D%2BW7CvVQVMxjnPCU3g4kd%2FsnQdIkiwk2GW36zDx7cJ%2FCq8QfeBXqRkEt3HbabHcYKchPrpVQXKTIV1lGSM4tRplguCdXV7FDL1Lm40wHIdWRsD%2FCzH%2BUkBACMxuwyiFnhLJLlQe5LJMABsNv2qMLv4C5w5G542s9MqHyyyntsNi7I9IrV9R%2BRP9bcqAlFNXjwrn8xRIEqPBnt2ahFttsy5hdm54ipxzXTUHMtQbR7qa7XRbAML6E9E5dxrpQF1LIAc9xN5%2FKpBPbGeysILvPGajdijPD8p8KOkUxjvYdmpTNMh%2BJxXOPsfXTkcbQRr4D3pSLwLn5e8gDcWCQGLOHjKuRGwoxulZexGqdLgJgEKLchahY5RU%2Bzjrep6vBIc8GSdJnti5dTnu2OBTPsSo6B4ndAmzx%2BD%2BLe%2BVuaUicGTZdow%2FTBhyjbA1PG8ObSNN1tdmrC7g3y1i0cMScfD6rFmRmdOUXFDNDgRh7A5CKuT%2Bviyx7YKBSH9wRJAWjU12v6OEDIrLcFo6Kwf%2FGnF6mSom%2BMM3D2r0GOqUBHJlskuQtbse0%2FGUqlmyQDEEZH2zfjjPNBloZZgA49ltldAsPqdYkRDXBqb6x7jPcvl0yk7nv2fK1OGy9oFaoU1gUkeydYH3rNeWAtvxvaawMAohKqdQ0KPou5xywLBapSZPIRnE27ojACytBqD%2BqNPdlIG3mC9tJGxEnWzFXTkdMK5EWBM4cx54O4ajdCNxR2dFm2pgwhrr433CAORcyryelRuqR&X-Amz-Signature=141e89b41329361c564ea18476b2b91e0b839a8ddf39f7c3c4051ab9eae83cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WIH5GXP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVKy2Duyxefe0Meu4yf2iUxOOOL55x%2Bqq1KUEZZw1IHAiEAgcJTS1GfugPCJnJl8BBeiVGut3jxWetjo1f9HbTlVd8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPET67cOr421LiFZhircAw3IBxmRuW8%2BDk%2B2zCWlCtSyCbFLrnILdLTXi69pNmaRBTfEm4nbWWirA25XNYwiL6aueIrz0qqpo83vWgfMFyM7kdD%2BX3JqG0T7D%2BW7CvVQVMxjnPCU3g4kd%2FsnQdIkiwk2GW36zDx7cJ%2FCq8QfeBXqRkEt3HbabHcYKchPrpVQXKTIV1lGSM4tRplguCdXV7FDL1Lm40wHIdWRsD%2FCzH%2BUkBACMxuwyiFnhLJLlQe5LJMABsNv2qMLv4C5w5G542s9MqHyyyntsNi7I9IrV9R%2BRP9bcqAlFNXjwrn8xRIEqPBnt2ahFttsy5hdm54ipxzXTUHMtQbR7qa7XRbAML6E9E5dxrpQF1LIAc9xN5%2FKpBPbGeysILvPGajdijPD8p8KOkUxjvYdmpTNMh%2BJxXOPsfXTkcbQRr4D3pSLwLn5e8gDcWCQGLOHjKuRGwoxulZexGqdLgJgEKLchahY5RU%2Bzjrep6vBIc8GSdJnti5dTnu2OBTPsSo6B4ndAmzx%2BD%2BLe%2BVuaUicGTZdow%2FTBhyjbA1PG8ObSNN1tdmrC7g3y1i0cMScfD6rFmRmdOUXFDNDgRh7A5CKuT%2Bviyx7YKBSH9wRJAWjU12v6OEDIrLcFo6Kwf%2FGnF6mSom%2BMM3D2r0GOqUBHJlskuQtbse0%2FGUqlmyQDEEZH2zfjjPNBloZZgA49ltldAsPqdYkRDXBqb6x7jPcvl0yk7nv2fK1OGy9oFaoU1gUkeydYH3rNeWAtvxvaawMAohKqdQ0KPou5xywLBapSZPIRnE27ojACytBqD%2BqNPdlIG3mC9tJGxEnWzFXTkdMK5EWBM4cx54O4ajdCNxR2dFm2pgwhrr433CAORcyryelRuqR&X-Amz-Signature=4b30e4b67f63cfee54483c3de1402cbc2f9811931967ce8ef6c0d3cc70e74d13&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WIH5GXP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVKy2Duyxefe0Meu4yf2iUxOOOL55x%2Bqq1KUEZZw1IHAiEAgcJTS1GfugPCJnJl8BBeiVGut3jxWetjo1f9HbTlVd8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPET67cOr421LiFZhircAw3IBxmRuW8%2BDk%2B2zCWlCtSyCbFLrnILdLTXi69pNmaRBTfEm4nbWWirA25XNYwiL6aueIrz0qqpo83vWgfMFyM7kdD%2BX3JqG0T7D%2BW7CvVQVMxjnPCU3g4kd%2FsnQdIkiwk2GW36zDx7cJ%2FCq8QfeBXqRkEt3HbabHcYKchPrpVQXKTIV1lGSM4tRplguCdXV7FDL1Lm40wHIdWRsD%2FCzH%2BUkBACMxuwyiFnhLJLlQe5LJMABsNv2qMLv4C5w5G542s9MqHyyyntsNi7I9IrV9R%2BRP9bcqAlFNXjwrn8xRIEqPBnt2ahFttsy5hdm54ipxzXTUHMtQbR7qa7XRbAML6E9E5dxrpQF1LIAc9xN5%2FKpBPbGeysILvPGajdijPD8p8KOkUxjvYdmpTNMh%2BJxXOPsfXTkcbQRr4D3pSLwLn5e8gDcWCQGLOHjKuRGwoxulZexGqdLgJgEKLchahY5RU%2Bzjrep6vBIc8GSdJnti5dTnu2OBTPsSo6B4ndAmzx%2BD%2BLe%2BVuaUicGTZdow%2FTBhyjbA1PG8ObSNN1tdmrC7g3y1i0cMScfD6rFmRmdOUXFDNDgRh7A5CKuT%2Bviyx7YKBSH9wRJAWjU12v6OEDIrLcFo6Kwf%2FGnF6mSom%2BMM3D2r0GOqUBHJlskuQtbse0%2FGUqlmyQDEEZH2zfjjPNBloZZgA49ltldAsPqdYkRDXBqb6x7jPcvl0yk7nv2fK1OGy9oFaoU1gUkeydYH3rNeWAtvxvaawMAohKqdQ0KPou5xywLBapSZPIRnE27ojACytBqD%2BqNPdlIG3mC9tJGxEnWzFXTkdMK5EWBM4cx54O4ajdCNxR2dFm2pgwhrr433CAORcyryelRuqR&X-Amz-Signature=544ec142dfa75af23fcf2b120579b8f3f2a52352616c824394693ac9a23de2f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WIH5GXP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVKy2Duyxefe0Meu4yf2iUxOOOL55x%2Bqq1KUEZZw1IHAiEAgcJTS1GfugPCJnJl8BBeiVGut3jxWetjo1f9HbTlVd8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPET67cOr421LiFZhircAw3IBxmRuW8%2BDk%2B2zCWlCtSyCbFLrnILdLTXi69pNmaRBTfEm4nbWWirA25XNYwiL6aueIrz0qqpo83vWgfMFyM7kdD%2BX3JqG0T7D%2BW7CvVQVMxjnPCU3g4kd%2FsnQdIkiwk2GW36zDx7cJ%2FCq8QfeBXqRkEt3HbabHcYKchPrpVQXKTIV1lGSM4tRplguCdXV7FDL1Lm40wHIdWRsD%2FCzH%2BUkBACMxuwyiFnhLJLlQe5LJMABsNv2qMLv4C5w5G542s9MqHyyyntsNi7I9IrV9R%2BRP9bcqAlFNXjwrn8xRIEqPBnt2ahFttsy5hdm54ipxzXTUHMtQbR7qa7XRbAML6E9E5dxrpQF1LIAc9xN5%2FKpBPbGeysILvPGajdijPD8p8KOkUxjvYdmpTNMh%2BJxXOPsfXTkcbQRr4D3pSLwLn5e8gDcWCQGLOHjKuRGwoxulZexGqdLgJgEKLchahY5RU%2Bzjrep6vBIc8GSdJnti5dTnu2OBTPsSo6B4ndAmzx%2BD%2BLe%2BVuaUicGTZdow%2FTBhyjbA1PG8ObSNN1tdmrC7g3y1i0cMScfD6rFmRmdOUXFDNDgRh7A5CKuT%2Bviyx7YKBSH9wRJAWjU12v6OEDIrLcFo6Kwf%2FGnF6mSom%2BMM3D2r0GOqUBHJlskuQtbse0%2FGUqlmyQDEEZH2zfjjPNBloZZgA49ltldAsPqdYkRDXBqb6x7jPcvl0yk7nv2fK1OGy9oFaoU1gUkeydYH3rNeWAtvxvaawMAohKqdQ0KPou5xywLBapSZPIRnE27ojACytBqD%2BqNPdlIG3mC9tJGxEnWzFXTkdMK5EWBM4cx54O4ajdCNxR2dFm2pgwhrr433CAORcyryelRuqR&X-Amz-Signature=750423a9bed63d93efeeed3b7cca3e960bbced51825153651a04412658faff3d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WIH5GXP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVKy2Duyxefe0Meu4yf2iUxOOOL55x%2Bqq1KUEZZw1IHAiEAgcJTS1GfugPCJnJl8BBeiVGut3jxWetjo1f9HbTlVd8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPET67cOr421LiFZhircAw3IBxmRuW8%2BDk%2B2zCWlCtSyCbFLrnILdLTXi69pNmaRBTfEm4nbWWirA25XNYwiL6aueIrz0qqpo83vWgfMFyM7kdD%2BX3JqG0T7D%2BW7CvVQVMxjnPCU3g4kd%2FsnQdIkiwk2GW36zDx7cJ%2FCq8QfeBXqRkEt3HbabHcYKchPrpVQXKTIV1lGSM4tRplguCdXV7FDL1Lm40wHIdWRsD%2FCzH%2BUkBACMxuwyiFnhLJLlQe5LJMABsNv2qMLv4C5w5G542s9MqHyyyntsNi7I9IrV9R%2BRP9bcqAlFNXjwrn8xRIEqPBnt2ahFttsy5hdm54ipxzXTUHMtQbR7qa7XRbAML6E9E5dxrpQF1LIAc9xN5%2FKpBPbGeysILvPGajdijPD8p8KOkUxjvYdmpTNMh%2BJxXOPsfXTkcbQRr4D3pSLwLn5e8gDcWCQGLOHjKuRGwoxulZexGqdLgJgEKLchahY5RU%2Bzjrep6vBIc8GSdJnti5dTnu2OBTPsSo6B4ndAmzx%2BD%2BLe%2BVuaUicGTZdow%2FTBhyjbA1PG8ObSNN1tdmrC7g3y1i0cMScfD6rFmRmdOUXFDNDgRh7A5CKuT%2Bviyx7YKBSH9wRJAWjU12v6OEDIrLcFo6Kwf%2FGnF6mSom%2BMM3D2r0GOqUBHJlskuQtbse0%2FGUqlmyQDEEZH2zfjjPNBloZZgA49ltldAsPqdYkRDXBqb6x7jPcvl0yk7nv2fK1OGy9oFaoU1gUkeydYH3rNeWAtvxvaawMAohKqdQ0KPou5xywLBapSZPIRnE27ojACytBqD%2BqNPdlIG3mC9tJGxEnWzFXTkdMK5EWBM4cx54O4ajdCNxR2dFm2pgwhrr433CAORcyryelRuqR&X-Amz-Signature=538fbb221fa3f41708cadf09101fd72479bca2116ec7723e3c6dc286f7ac3495&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WIH5GXP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVKy2Duyxefe0Meu4yf2iUxOOOL55x%2Bqq1KUEZZw1IHAiEAgcJTS1GfugPCJnJl8BBeiVGut3jxWetjo1f9HbTlVd8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPET67cOr421LiFZhircAw3IBxmRuW8%2BDk%2B2zCWlCtSyCbFLrnILdLTXi69pNmaRBTfEm4nbWWirA25XNYwiL6aueIrz0qqpo83vWgfMFyM7kdD%2BX3JqG0T7D%2BW7CvVQVMxjnPCU3g4kd%2FsnQdIkiwk2GW36zDx7cJ%2FCq8QfeBXqRkEt3HbabHcYKchPrpVQXKTIV1lGSM4tRplguCdXV7FDL1Lm40wHIdWRsD%2FCzH%2BUkBACMxuwyiFnhLJLlQe5LJMABsNv2qMLv4C5w5G542s9MqHyyyntsNi7I9IrV9R%2BRP9bcqAlFNXjwrn8xRIEqPBnt2ahFttsy5hdm54ipxzXTUHMtQbR7qa7XRbAML6E9E5dxrpQF1LIAc9xN5%2FKpBPbGeysILvPGajdijPD8p8KOkUxjvYdmpTNMh%2BJxXOPsfXTkcbQRr4D3pSLwLn5e8gDcWCQGLOHjKuRGwoxulZexGqdLgJgEKLchahY5RU%2Bzjrep6vBIc8GSdJnti5dTnu2OBTPsSo6B4ndAmzx%2BD%2BLe%2BVuaUicGTZdow%2FTBhyjbA1PG8ObSNN1tdmrC7g3y1i0cMScfD6rFmRmdOUXFDNDgRh7A5CKuT%2Bviyx7YKBSH9wRJAWjU12v6OEDIrLcFo6Kwf%2FGnF6mSom%2BMM3D2r0GOqUBHJlskuQtbse0%2FGUqlmyQDEEZH2zfjjPNBloZZgA49ltldAsPqdYkRDXBqb6x7jPcvl0yk7nv2fK1OGy9oFaoU1gUkeydYH3rNeWAtvxvaawMAohKqdQ0KPou5xywLBapSZPIRnE27ojACytBqD%2BqNPdlIG3mC9tJGxEnWzFXTkdMK5EWBM4cx54O4ajdCNxR2dFm2pgwhrr433CAORcyryelRuqR&X-Amz-Signature=1d61804caafc69c54c1c82db76364849878b346388b2ca8008c712091197e31f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
