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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMFIDXC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCMaPgIppXG8DoXe1kN1M6idmNoxhH4FnJClsNHgB84TwIhAMAeAKhdk5Qx9goL0HCl7Ibn3TG5mCu%2Fl2hAXxtyQEChKv8DCDQQABoMNjM3NDIzMTgzODA1IgzeaQEQiAsID2YZ1TUq3ANSUZ%2B2DNQEyizCsuM8BiJL9fjdDZAuBFmirV%2BXqPDM2UQBhll1l%2BxeCE%2BXN5y8Yisi6X7JvBr2Tfz9m4XON4hJNCkrpgFkZimKIpuMuzCa2cHbwQTH9R03J4H5FtPIpOGuI8iuDm1MaMYuVfss2cC4dba4p2QbZkM0%2BcDd%2BEu7K643tkZMTMf57EjC9gU8V2QEm8DD1f2OMZSv0LJAIuAlC%2Fcw1E8I%2Bwi8R3fB48zx%2BpApC9fOBTBpIr2X5faM1I6rdl2bPas8jjkBnvqbYrfe5YU1ypvT9UNuZjZR4dCTBQ%2FET%2BCWgsptYaOZ4bGIn84jkpoitaFEarHJVwQtUa%2FrFziiqmE2rWrZeulQm8xdzBL5uj9UpE5%2FTav2IEBFMSx2MjRxv8vUjf2laT286J1ECA6nimcm35ORc0i5CEcOrDrLodKDHaedIY%2FKtM5e5Wy7%2BycvPEf9j8YrYCnIRG1tKBcdwXGyobzDwpMJ2X%2FdURp3QGiwTPKEZ5z89wee5UJvH%2B9hchafQZP%2Fl8%2BPolXF3usNxdgUUcL1e4WiqEM3B9SLrtqd8s9PIqLFF6PxmfECR6B7YV03Xh5mpftJq%2Fd4QMFD%2BZ6o8G3nktGKJW6xs06b9EYER2E2waiz4TCVroLCBjqkASjBl3LqXMQl76wUArvNRIka4rhQEW7frBUiLwX9BfkFu7uMlsf2gkMUbRJG5MuA0Jlq5OpWHp6vZIEPXolsYN6LOdaMKEJOLEAFoaSRkjBZo1DYjSeOsMlharjazyB2o6HbdxXus%2Ba7Uw4aOAHtzzbFAgrUIrLIbrcNp5DGLmTu3x4EHX4MeLfG1U2%2FVJbMdxY4VCcnXni1blvrDK8ieJnoZV7B&X-Amz-Signature=17f325a96039fcbeb97940daf5f68f1f7b863fa06343cdba3566590924df8f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMFIDXC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCMaPgIppXG8DoXe1kN1M6idmNoxhH4FnJClsNHgB84TwIhAMAeAKhdk5Qx9goL0HCl7Ibn3TG5mCu%2Fl2hAXxtyQEChKv8DCDQQABoMNjM3NDIzMTgzODA1IgzeaQEQiAsID2YZ1TUq3ANSUZ%2B2DNQEyizCsuM8BiJL9fjdDZAuBFmirV%2BXqPDM2UQBhll1l%2BxeCE%2BXN5y8Yisi6X7JvBr2Tfz9m4XON4hJNCkrpgFkZimKIpuMuzCa2cHbwQTH9R03J4H5FtPIpOGuI8iuDm1MaMYuVfss2cC4dba4p2QbZkM0%2BcDd%2BEu7K643tkZMTMf57EjC9gU8V2QEm8DD1f2OMZSv0LJAIuAlC%2Fcw1E8I%2Bwi8R3fB48zx%2BpApC9fOBTBpIr2X5faM1I6rdl2bPas8jjkBnvqbYrfe5YU1ypvT9UNuZjZR4dCTBQ%2FET%2BCWgsptYaOZ4bGIn84jkpoitaFEarHJVwQtUa%2FrFziiqmE2rWrZeulQm8xdzBL5uj9UpE5%2FTav2IEBFMSx2MjRxv8vUjf2laT286J1ECA6nimcm35ORc0i5CEcOrDrLodKDHaedIY%2FKtM5e5Wy7%2BycvPEf9j8YrYCnIRG1tKBcdwXGyobzDwpMJ2X%2FdURp3QGiwTPKEZ5z89wee5UJvH%2B9hchafQZP%2Fl8%2BPolXF3usNxdgUUcL1e4WiqEM3B9SLrtqd8s9PIqLFF6PxmfECR6B7YV03Xh5mpftJq%2Fd4QMFD%2BZ6o8G3nktGKJW6xs06b9EYER2E2waiz4TCVroLCBjqkASjBl3LqXMQl76wUArvNRIka4rhQEW7frBUiLwX9BfkFu7uMlsf2gkMUbRJG5MuA0Jlq5OpWHp6vZIEPXolsYN6LOdaMKEJOLEAFoaSRkjBZo1DYjSeOsMlharjazyB2o6HbdxXus%2Ba7Uw4aOAHtzzbFAgrUIrLIbrcNp5DGLmTu3x4EHX4MeLfG1U2%2FVJbMdxY4VCcnXni1blvrDK8ieJnoZV7B&X-Amz-Signature=614d2a20c38b1d04b4c213553e4fd63b94beb4bdbc7e93ef771e041246ff0158&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMFIDXC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCMaPgIppXG8DoXe1kN1M6idmNoxhH4FnJClsNHgB84TwIhAMAeAKhdk5Qx9goL0HCl7Ibn3TG5mCu%2Fl2hAXxtyQEChKv8DCDQQABoMNjM3NDIzMTgzODA1IgzeaQEQiAsID2YZ1TUq3ANSUZ%2B2DNQEyizCsuM8BiJL9fjdDZAuBFmirV%2BXqPDM2UQBhll1l%2BxeCE%2BXN5y8Yisi6X7JvBr2Tfz9m4XON4hJNCkrpgFkZimKIpuMuzCa2cHbwQTH9R03J4H5FtPIpOGuI8iuDm1MaMYuVfss2cC4dba4p2QbZkM0%2BcDd%2BEu7K643tkZMTMf57EjC9gU8V2QEm8DD1f2OMZSv0LJAIuAlC%2Fcw1E8I%2Bwi8R3fB48zx%2BpApC9fOBTBpIr2X5faM1I6rdl2bPas8jjkBnvqbYrfe5YU1ypvT9UNuZjZR4dCTBQ%2FET%2BCWgsptYaOZ4bGIn84jkpoitaFEarHJVwQtUa%2FrFziiqmE2rWrZeulQm8xdzBL5uj9UpE5%2FTav2IEBFMSx2MjRxv8vUjf2laT286J1ECA6nimcm35ORc0i5CEcOrDrLodKDHaedIY%2FKtM5e5Wy7%2BycvPEf9j8YrYCnIRG1tKBcdwXGyobzDwpMJ2X%2FdURp3QGiwTPKEZ5z89wee5UJvH%2B9hchafQZP%2Fl8%2BPolXF3usNxdgUUcL1e4WiqEM3B9SLrtqd8s9PIqLFF6PxmfECR6B7YV03Xh5mpftJq%2Fd4QMFD%2BZ6o8G3nktGKJW6xs06b9EYER2E2waiz4TCVroLCBjqkASjBl3LqXMQl76wUArvNRIka4rhQEW7frBUiLwX9BfkFu7uMlsf2gkMUbRJG5MuA0Jlq5OpWHp6vZIEPXolsYN6LOdaMKEJOLEAFoaSRkjBZo1DYjSeOsMlharjazyB2o6HbdxXus%2Ba7Uw4aOAHtzzbFAgrUIrLIbrcNp5DGLmTu3x4EHX4MeLfG1U2%2FVJbMdxY4VCcnXni1blvrDK8ieJnoZV7B&X-Amz-Signature=1b4bee46f04bb93c9d6d2bff7a8d9d644d8d63424efd0157211b3f1eb6764c42&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMFIDXC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCMaPgIppXG8DoXe1kN1M6idmNoxhH4FnJClsNHgB84TwIhAMAeAKhdk5Qx9goL0HCl7Ibn3TG5mCu%2Fl2hAXxtyQEChKv8DCDQQABoMNjM3NDIzMTgzODA1IgzeaQEQiAsID2YZ1TUq3ANSUZ%2B2DNQEyizCsuM8BiJL9fjdDZAuBFmirV%2BXqPDM2UQBhll1l%2BxeCE%2BXN5y8Yisi6X7JvBr2Tfz9m4XON4hJNCkrpgFkZimKIpuMuzCa2cHbwQTH9R03J4H5FtPIpOGuI8iuDm1MaMYuVfss2cC4dba4p2QbZkM0%2BcDd%2BEu7K643tkZMTMf57EjC9gU8V2QEm8DD1f2OMZSv0LJAIuAlC%2Fcw1E8I%2Bwi8R3fB48zx%2BpApC9fOBTBpIr2X5faM1I6rdl2bPas8jjkBnvqbYrfe5YU1ypvT9UNuZjZR4dCTBQ%2FET%2BCWgsptYaOZ4bGIn84jkpoitaFEarHJVwQtUa%2FrFziiqmE2rWrZeulQm8xdzBL5uj9UpE5%2FTav2IEBFMSx2MjRxv8vUjf2laT286J1ECA6nimcm35ORc0i5CEcOrDrLodKDHaedIY%2FKtM5e5Wy7%2BycvPEf9j8YrYCnIRG1tKBcdwXGyobzDwpMJ2X%2FdURp3QGiwTPKEZ5z89wee5UJvH%2B9hchafQZP%2Fl8%2BPolXF3usNxdgUUcL1e4WiqEM3B9SLrtqd8s9PIqLFF6PxmfECR6B7YV03Xh5mpftJq%2Fd4QMFD%2BZ6o8G3nktGKJW6xs06b9EYER2E2waiz4TCVroLCBjqkASjBl3LqXMQl76wUArvNRIka4rhQEW7frBUiLwX9BfkFu7uMlsf2gkMUbRJG5MuA0Jlq5OpWHp6vZIEPXolsYN6LOdaMKEJOLEAFoaSRkjBZo1DYjSeOsMlharjazyB2o6HbdxXus%2Ba7Uw4aOAHtzzbFAgrUIrLIbrcNp5DGLmTu3x4EHX4MeLfG1U2%2FVJbMdxY4VCcnXni1blvrDK8ieJnoZV7B&X-Amz-Signature=bb924ba11d19d3e98b01f6db6c42d6e85f86f2e5b89bf1183e0dc6f3c022d964&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMFIDXC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCMaPgIppXG8DoXe1kN1M6idmNoxhH4FnJClsNHgB84TwIhAMAeAKhdk5Qx9goL0HCl7Ibn3TG5mCu%2Fl2hAXxtyQEChKv8DCDQQABoMNjM3NDIzMTgzODA1IgzeaQEQiAsID2YZ1TUq3ANSUZ%2B2DNQEyizCsuM8BiJL9fjdDZAuBFmirV%2BXqPDM2UQBhll1l%2BxeCE%2BXN5y8Yisi6X7JvBr2Tfz9m4XON4hJNCkrpgFkZimKIpuMuzCa2cHbwQTH9R03J4H5FtPIpOGuI8iuDm1MaMYuVfss2cC4dba4p2QbZkM0%2BcDd%2BEu7K643tkZMTMf57EjC9gU8V2QEm8DD1f2OMZSv0LJAIuAlC%2Fcw1E8I%2Bwi8R3fB48zx%2BpApC9fOBTBpIr2X5faM1I6rdl2bPas8jjkBnvqbYrfe5YU1ypvT9UNuZjZR4dCTBQ%2FET%2BCWgsptYaOZ4bGIn84jkpoitaFEarHJVwQtUa%2FrFziiqmE2rWrZeulQm8xdzBL5uj9UpE5%2FTav2IEBFMSx2MjRxv8vUjf2laT286J1ECA6nimcm35ORc0i5CEcOrDrLodKDHaedIY%2FKtM5e5Wy7%2BycvPEf9j8YrYCnIRG1tKBcdwXGyobzDwpMJ2X%2FdURp3QGiwTPKEZ5z89wee5UJvH%2B9hchafQZP%2Fl8%2BPolXF3usNxdgUUcL1e4WiqEM3B9SLrtqd8s9PIqLFF6PxmfECR6B7YV03Xh5mpftJq%2Fd4QMFD%2BZ6o8G3nktGKJW6xs06b9EYER2E2waiz4TCVroLCBjqkASjBl3LqXMQl76wUArvNRIka4rhQEW7frBUiLwX9BfkFu7uMlsf2gkMUbRJG5MuA0Jlq5OpWHp6vZIEPXolsYN6LOdaMKEJOLEAFoaSRkjBZo1DYjSeOsMlharjazyB2o6HbdxXus%2Ba7Uw4aOAHtzzbFAgrUIrLIbrcNp5DGLmTu3x4EHX4MeLfG1U2%2FVJbMdxY4VCcnXni1blvrDK8ieJnoZV7B&X-Amz-Signature=d24a282db8dd12bb6954a1fa6d0fdd915421142a830bd8508d654fbd5274a219&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMFIDXC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCMaPgIppXG8DoXe1kN1M6idmNoxhH4FnJClsNHgB84TwIhAMAeAKhdk5Qx9goL0HCl7Ibn3TG5mCu%2Fl2hAXxtyQEChKv8DCDQQABoMNjM3NDIzMTgzODA1IgzeaQEQiAsID2YZ1TUq3ANSUZ%2B2DNQEyizCsuM8BiJL9fjdDZAuBFmirV%2BXqPDM2UQBhll1l%2BxeCE%2BXN5y8Yisi6X7JvBr2Tfz9m4XON4hJNCkrpgFkZimKIpuMuzCa2cHbwQTH9R03J4H5FtPIpOGuI8iuDm1MaMYuVfss2cC4dba4p2QbZkM0%2BcDd%2BEu7K643tkZMTMf57EjC9gU8V2QEm8DD1f2OMZSv0LJAIuAlC%2Fcw1E8I%2Bwi8R3fB48zx%2BpApC9fOBTBpIr2X5faM1I6rdl2bPas8jjkBnvqbYrfe5YU1ypvT9UNuZjZR4dCTBQ%2FET%2BCWgsptYaOZ4bGIn84jkpoitaFEarHJVwQtUa%2FrFziiqmE2rWrZeulQm8xdzBL5uj9UpE5%2FTav2IEBFMSx2MjRxv8vUjf2laT286J1ECA6nimcm35ORc0i5CEcOrDrLodKDHaedIY%2FKtM5e5Wy7%2BycvPEf9j8YrYCnIRG1tKBcdwXGyobzDwpMJ2X%2FdURp3QGiwTPKEZ5z89wee5UJvH%2B9hchafQZP%2Fl8%2BPolXF3usNxdgUUcL1e4WiqEM3B9SLrtqd8s9PIqLFF6PxmfECR6B7YV03Xh5mpftJq%2Fd4QMFD%2BZ6o8G3nktGKJW6xs06b9EYER2E2waiz4TCVroLCBjqkASjBl3LqXMQl76wUArvNRIka4rhQEW7frBUiLwX9BfkFu7uMlsf2gkMUbRJG5MuA0Jlq5OpWHp6vZIEPXolsYN6LOdaMKEJOLEAFoaSRkjBZo1DYjSeOsMlharjazyB2o6HbdxXus%2Ba7Uw4aOAHtzzbFAgrUIrLIbrcNp5DGLmTu3x4EHX4MeLfG1U2%2FVJbMdxY4VCcnXni1blvrDK8ieJnoZV7B&X-Amz-Signature=e0ffd643ae80dea774ac6b250bb65c677972406fe7204d2990b422ac765715f8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMFIDXC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCMaPgIppXG8DoXe1kN1M6idmNoxhH4FnJClsNHgB84TwIhAMAeAKhdk5Qx9goL0HCl7Ibn3TG5mCu%2Fl2hAXxtyQEChKv8DCDQQABoMNjM3NDIzMTgzODA1IgzeaQEQiAsID2YZ1TUq3ANSUZ%2B2DNQEyizCsuM8BiJL9fjdDZAuBFmirV%2BXqPDM2UQBhll1l%2BxeCE%2BXN5y8Yisi6X7JvBr2Tfz9m4XON4hJNCkrpgFkZimKIpuMuzCa2cHbwQTH9R03J4H5FtPIpOGuI8iuDm1MaMYuVfss2cC4dba4p2QbZkM0%2BcDd%2BEu7K643tkZMTMf57EjC9gU8V2QEm8DD1f2OMZSv0LJAIuAlC%2Fcw1E8I%2Bwi8R3fB48zx%2BpApC9fOBTBpIr2X5faM1I6rdl2bPas8jjkBnvqbYrfe5YU1ypvT9UNuZjZR4dCTBQ%2FET%2BCWgsptYaOZ4bGIn84jkpoitaFEarHJVwQtUa%2FrFziiqmE2rWrZeulQm8xdzBL5uj9UpE5%2FTav2IEBFMSx2MjRxv8vUjf2laT286J1ECA6nimcm35ORc0i5CEcOrDrLodKDHaedIY%2FKtM5e5Wy7%2BycvPEf9j8YrYCnIRG1tKBcdwXGyobzDwpMJ2X%2FdURp3QGiwTPKEZ5z89wee5UJvH%2B9hchafQZP%2Fl8%2BPolXF3usNxdgUUcL1e4WiqEM3B9SLrtqd8s9PIqLFF6PxmfECR6B7YV03Xh5mpftJq%2Fd4QMFD%2BZ6o8G3nktGKJW6xs06b9EYER2E2waiz4TCVroLCBjqkASjBl3LqXMQl76wUArvNRIka4rhQEW7frBUiLwX9BfkFu7uMlsf2gkMUbRJG5MuA0Jlq5OpWHp6vZIEPXolsYN6LOdaMKEJOLEAFoaSRkjBZo1DYjSeOsMlharjazyB2o6HbdxXus%2Ba7Uw4aOAHtzzbFAgrUIrLIbrcNp5DGLmTu3x4EHX4MeLfG1U2%2FVJbMdxY4VCcnXni1blvrDK8ieJnoZV7B&X-Amz-Signature=ca81dc4eac69f089ac9f1ec890906a65ffcd7e2b4d385192155044f70edeae50&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
