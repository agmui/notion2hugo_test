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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTM5AX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnPXKZ8X4ENlY2rKFpnUO1pU7Jcp%2FhLGgXArr%2Bsw3AgIhAJtIqTYnBD%2BWjMUAYwDhIT%2BnlKq0jgoDhB%2Fhpsv1WTQ7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiVzeCICWnCRRhU6oq3ANpkwCgZCloK2yDJHjCuiPrd7eghuhwE43liWdXhsHrA9JmiIBTUitABqCW8ihoFP4CtxRqdnqEsxKVbte7sYO9Le6g6lpy%2F8eO3jANg8i2O%2FGSkXPC%2F8xrmhG83Q83U66cg4MYBGkCEMq3RLFTA5kpWpDFuLq%2F%2BTwdUZ857d9SsEOAYsODHiPH4uGvsNoKweL3rg5TaZv%2B7ogL0tz1Eeq37TI0RF55hQFDR0izXdQbY41aDIJx8sGjqKgDN8kcCJnnWWv5bHFB8MfslSi3zu53kdQoVIXcPYMpWUylvFzMJZeRTvNifEv0y13LrcMioeD20SOifUH1vWsQtkRigX%2BoV7qhnaINUMwoZlZX2iaPrxtiZMt8nYE%2FAhkf6HXt6FMCJEEOv8OQHn3P7GLVZ%2FMxPYJIe6jDDplvx17Wch9d6tHAotogA%2FM6yvrLvcsxLUIADWnlvfaZR5GtdGVA5I%2FF6U4jWPuAxIwG8lDHNEMmVqp7lZS1sZAj8qhnxWEacLIAxs7sxvIE0qpLZuUTf07mUJbT1Rvf8hcqdur5i0PkHyxktGziNPBHOkRKplBNVJKwf8bQddqv83UUt5BcnquEvsIqu4WzmwnrFkDLcyyb%2BLgzpFTzvOSwKKdtlTDKgqXCBjqkAQHW7NIFpGoSOE5R2wTU0hvNJV%2Fw7YUsgpse%2BsRuY8Qf2ns9Rhc3oVwSc3Q16O2i5osxWZ9qq69RJFHoRabTuTDxe3IOV9JjJaedXG9q2MVv%2FYrGxsnMe9tCgrj7O%2BC2LHO2hNtACey2QVEKqo81HQ8%2FC2VVhjj2r0n74jbgN10CPSi76%2FWYYQOeDb996Sec8g8V5N%2Fz5E41skVoiAVOY0ejF%2BME&X-Amz-Signature=340163819e4e921cefd4c8255731489a001f06a6ca73fdc9cb50e09b0a11fafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTM5AX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnPXKZ8X4ENlY2rKFpnUO1pU7Jcp%2FhLGgXArr%2Bsw3AgIhAJtIqTYnBD%2BWjMUAYwDhIT%2BnlKq0jgoDhB%2Fhpsv1WTQ7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiVzeCICWnCRRhU6oq3ANpkwCgZCloK2yDJHjCuiPrd7eghuhwE43liWdXhsHrA9JmiIBTUitABqCW8ihoFP4CtxRqdnqEsxKVbte7sYO9Le6g6lpy%2F8eO3jANg8i2O%2FGSkXPC%2F8xrmhG83Q83U66cg4MYBGkCEMq3RLFTA5kpWpDFuLq%2F%2BTwdUZ857d9SsEOAYsODHiPH4uGvsNoKweL3rg5TaZv%2B7ogL0tz1Eeq37TI0RF55hQFDR0izXdQbY41aDIJx8sGjqKgDN8kcCJnnWWv5bHFB8MfslSi3zu53kdQoVIXcPYMpWUylvFzMJZeRTvNifEv0y13LrcMioeD20SOifUH1vWsQtkRigX%2BoV7qhnaINUMwoZlZX2iaPrxtiZMt8nYE%2FAhkf6HXt6FMCJEEOv8OQHn3P7GLVZ%2FMxPYJIe6jDDplvx17Wch9d6tHAotogA%2FM6yvrLvcsxLUIADWnlvfaZR5GtdGVA5I%2FF6U4jWPuAxIwG8lDHNEMmVqp7lZS1sZAj8qhnxWEacLIAxs7sxvIE0qpLZuUTf07mUJbT1Rvf8hcqdur5i0PkHyxktGziNPBHOkRKplBNVJKwf8bQddqv83UUt5BcnquEvsIqu4WzmwnrFkDLcyyb%2BLgzpFTzvOSwKKdtlTDKgqXCBjqkAQHW7NIFpGoSOE5R2wTU0hvNJV%2Fw7YUsgpse%2BsRuY8Qf2ns9Rhc3oVwSc3Q16O2i5osxWZ9qq69RJFHoRabTuTDxe3IOV9JjJaedXG9q2MVv%2FYrGxsnMe9tCgrj7O%2BC2LHO2hNtACey2QVEKqo81HQ8%2FC2VVhjj2r0n74jbgN10CPSi76%2FWYYQOeDb996Sec8g8V5N%2Fz5E41skVoiAVOY0ejF%2BME&X-Amz-Signature=c7c67ef49c21126ad34e331b21f41dba1f2ded4eff0c7803695d45e390bee699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTM5AX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnPXKZ8X4ENlY2rKFpnUO1pU7Jcp%2FhLGgXArr%2Bsw3AgIhAJtIqTYnBD%2BWjMUAYwDhIT%2BnlKq0jgoDhB%2Fhpsv1WTQ7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiVzeCICWnCRRhU6oq3ANpkwCgZCloK2yDJHjCuiPrd7eghuhwE43liWdXhsHrA9JmiIBTUitABqCW8ihoFP4CtxRqdnqEsxKVbte7sYO9Le6g6lpy%2F8eO3jANg8i2O%2FGSkXPC%2F8xrmhG83Q83U66cg4MYBGkCEMq3RLFTA5kpWpDFuLq%2F%2BTwdUZ857d9SsEOAYsODHiPH4uGvsNoKweL3rg5TaZv%2B7ogL0tz1Eeq37TI0RF55hQFDR0izXdQbY41aDIJx8sGjqKgDN8kcCJnnWWv5bHFB8MfslSi3zu53kdQoVIXcPYMpWUylvFzMJZeRTvNifEv0y13LrcMioeD20SOifUH1vWsQtkRigX%2BoV7qhnaINUMwoZlZX2iaPrxtiZMt8nYE%2FAhkf6HXt6FMCJEEOv8OQHn3P7GLVZ%2FMxPYJIe6jDDplvx17Wch9d6tHAotogA%2FM6yvrLvcsxLUIADWnlvfaZR5GtdGVA5I%2FF6U4jWPuAxIwG8lDHNEMmVqp7lZS1sZAj8qhnxWEacLIAxs7sxvIE0qpLZuUTf07mUJbT1Rvf8hcqdur5i0PkHyxktGziNPBHOkRKplBNVJKwf8bQddqv83UUt5BcnquEvsIqu4WzmwnrFkDLcyyb%2BLgzpFTzvOSwKKdtlTDKgqXCBjqkAQHW7NIFpGoSOE5R2wTU0hvNJV%2Fw7YUsgpse%2BsRuY8Qf2ns9Rhc3oVwSc3Q16O2i5osxWZ9qq69RJFHoRabTuTDxe3IOV9JjJaedXG9q2MVv%2FYrGxsnMe9tCgrj7O%2BC2LHO2hNtACey2QVEKqo81HQ8%2FC2VVhjj2r0n74jbgN10CPSi76%2FWYYQOeDb996Sec8g8V5N%2Fz5E41skVoiAVOY0ejF%2BME&X-Amz-Signature=e1d243520f071455c13d295bff60da8e9b7d4cfa0e350b0c2147cdbda85fcc8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTM5AX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnPXKZ8X4ENlY2rKFpnUO1pU7Jcp%2FhLGgXArr%2Bsw3AgIhAJtIqTYnBD%2BWjMUAYwDhIT%2BnlKq0jgoDhB%2Fhpsv1WTQ7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiVzeCICWnCRRhU6oq3ANpkwCgZCloK2yDJHjCuiPrd7eghuhwE43liWdXhsHrA9JmiIBTUitABqCW8ihoFP4CtxRqdnqEsxKVbte7sYO9Le6g6lpy%2F8eO3jANg8i2O%2FGSkXPC%2F8xrmhG83Q83U66cg4MYBGkCEMq3RLFTA5kpWpDFuLq%2F%2BTwdUZ857d9SsEOAYsODHiPH4uGvsNoKweL3rg5TaZv%2B7ogL0tz1Eeq37TI0RF55hQFDR0izXdQbY41aDIJx8sGjqKgDN8kcCJnnWWv5bHFB8MfslSi3zu53kdQoVIXcPYMpWUylvFzMJZeRTvNifEv0y13LrcMioeD20SOifUH1vWsQtkRigX%2BoV7qhnaINUMwoZlZX2iaPrxtiZMt8nYE%2FAhkf6HXt6FMCJEEOv8OQHn3P7GLVZ%2FMxPYJIe6jDDplvx17Wch9d6tHAotogA%2FM6yvrLvcsxLUIADWnlvfaZR5GtdGVA5I%2FF6U4jWPuAxIwG8lDHNEMmVqp7lZS1sZAj8qhnxWEacLIAxs7sxvIE0qpLZuUTf07mUJbT1Rvf8hcqdur5i0PkHyxktGziNPBHOkRKplBNVJKwf8bQddqv83UUt5BcnquEvsIqu4WzmwnrFkDLcyyb%2BLgzpFTzvOSwKKdtlTDKgqXCBjqkAQHW7NIFpGoSOE5R2wTU0hvNJV%2Fw7YUsgpse%2BsRuY8Qf2ns9Rhc3oVwSc3Q16O2i5osxWZ9qq69RJFHoRabTuTDxe3IOV9JjJaedXG9q2MVv%2FYrGxsnMe9tCgrj7O%2BC2LHO2hNtACey2QVEKqo81HQ8%2FC2VVhjj2r0n74jbgN10CPSi76%2FWYYQOeDb996Sec8g8V5N%2Fz5E41skVoiAVOY0ejF%2BME&X-Amz-Signature=f4977b90e2f7f74b0a1cefdca7a48b54ee4e17cfbf9cef2d3a798f1fd067743f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTM5AX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnPXKZ8X4ENlY2rKFpnUO1pU7Jcp%2FhLGgXArr%2Bsw3AgIhAJtIqTYnBD%2BWjMUAYwDhIT%2BnlKq0jgoDhB%2Fhpsv1WTQ7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiVzeCICWnCRRhU6oq3ANpkwCgZCloK2yDJHjCuiPrd7eghuhwE43liWdXhsHrA9JmiIBTUitABqCW8ihoFP4CtxRqdnqEsxKVbte7sYO9Le6g6lpy%2F8eO3jANg8i2O%2FGSkXPC%2F8xrmhG83Q83U66cg4MYBGkCEMq3RLFTA5kpWpDFuLq%2F%2BTwdUZ857d9SsEOAYsODHiPH4uGvsNoKweL3rg5TaZv%2B7ogL0tz1Eeq37TI0RF55hQFDR0izXdQbY41aDIJx8sGjqKgDN8kcCJnnWWv5bHFB8MfslSi3zu53kdQoVIXcPYMpWUylvFzMJZeRTvNifEv0y13LrcMioeD20SOifUH1vWsQtkRigX%2BoV7qhnaINUMwoZlZX2iaPrxtiZMt8nYE%2FAhkf6HXt6FMCJEEOv8OQHn3P7GLVZ%2FMxPYJIe6jDDplvx17Wch9d6tHAotogA%2FM6yvrLvcsxLUIADWnlvfaZR5GtdGVA5I%2FF6U4jWPuAxIwG8lDHNEMmVqp7lZS1sZAj8qhnxWEacLIAxs7sxvIE0qpLZuUTf07mUJbT1Rvf8hcqdur5i0PkHyxktGziNPBHOkRKplBNVJKwf8bQddqv83UUt5BcnquEvsIqu4WzmwnrFkDLcyyb%2BLgzpFTzvOSwKKdtlTDKgqXCBjqkAQHW7NIFpGoSOE5R2wTU0hvNJV%2Fw7YUsgpse%2BsRuY8Qf2ns9Rhc3oVwSc3Q16O2i5osxWZ9qq69RJFHoRabTuTDxe3IOV9JjJaedXG9q2MVv%2FYrGxsnMe9tCgrj7O%2BC2LHO2hNtACey2QVEKqo81HQ8%2FC2VVhjj2r0n74jbgN10CPSi76%2FWYYQOeDb996Sec8g8V5N%2Fz5E41skVoiAVOY0ejF%2BME&X-Amz-Signature=db38b4867a59fb41893a19972bf8a72c6be6f546038d654bc4d3ae0ce2ce1486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTM5AX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnPXKZ8X4ENlY2rKFpnUO1pU7Jcp%2FhLGgXArr%2Bsw3AgIhAJtIqTYnBD%2BWjMUAYwDhIT%2BnlKq0jgoDhB%2Fhpsv1WTQ7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiVzeCICWnCRRhU6oq3ANpkwCgZCloK2yDJHjCuiPrd7eghuhwE43liWdXhsHrA9JmiIBTUitABqCW8ihoFP4CtxRqdnqEsxKVbte7sYO9Le6g6lpy%2F8eO3jANg8i2O%2FGSkXPC%2F8xrmhG83Q83U66cg4MYBGkCEMq3RLFTA5kpWpDFuLq%2F%2BTwdUZ857d9SsEOAYsODHiPH4uGvsNoKweL3rg5TaZv%2B7ogL0tz1Eeq37TI0RF55hQFDR0izXdQbY41aDIJx8sGjqKgDN8kcCJnnWWv5bHFB8MfslSi3zu53kdQoVIXcPYMpWUylvFzMJZeRTvNifEv0y13LrcMioeD20SOifUH1vWsQtkRigX%2BoV7qhnaINUMwoZlZX2iaPrxtiZMt8nYE%2FAhkf6HXt6FMCJEEOv8OQHn3P7GLVZ%2FMxPYJIe6jDDplvx17Wch9d6tHAotogA%2FM6yvrLvcsxLUIADWnlvfaZR5GtdGVA5I%2FF6U4jWPuAxIwG8lDHNEMmVqp7lZS1sZAj8qhnxWEacLIAxs7sxvIE0qpLZuUTf07mUJbT1Rvf8hcqdur5i0PkHyxktGziNPBHOkRKplBNVJKwf8bQddqv83UUt5BcnquEvsIqu4WzmwnrFkDLcyyb%2BLgzpFTzvOSwKKdtlTDKgqXCBjqkAQHW7NIFpGoSOE5R2wTU0hvNJV%2Fw7YUsgpse%2BsRuY8Qf2ns9Rhc3oVwSc3Q16O2i5osxWZ9qq69RJFHoRabTuTDxe3IOV9JjJaedXG9q2MVv%2FYrGxsnMe9tCgrj7O%2BC2LHO2hNtACey2QVEKqo81HQ8%2FC2VVhjj2r0n74jbgN10CPSi76%2FWYYQOeDb996Sec8g8V5N%2Fz5E41skVoiAVOY0ejF%2BME&X-Amz-Signature=f1577b965ee04fed1d102172bfe17725f2bf2c2fb3382b818f396777d6b88203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTM5AX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnPXKZ8X4ENlY2rKFpnUO1pU7Jcp%2FhLGgXArr%2Bsw3AgIhAJtIqTYnBD%2BWjMUAYwDhIT%2BnlKq0jgoDhB%2Fhpsv1WTQ7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiVzeCICWnCRRhU6oq3ANpkwCgZCloK2yDJHjCuiPrd7eghuhwE43liWdXhsHrA9JmiIBTUitABqCW8ihoFP4CtxRqdnqEsxKVbte7sYO9Le6g6lpy%2F8eO3jANg8i2O%2FGSkXPC%2F8xrmhG83Q83U66cg4MYBGkCEMq3RLFTA5kpWpDFuLq%2F%2BTwdUZ857d9SsEOAYsODHiPH4uGvsNoKweL3rg5TaZv%2B7ogL0tz1Eeq37TI0RF55hQFDR0izXdQbY41aDIJx8sGjqKgDN8kcCJnnWWv5bHFB8MfslSi3zu53kdQoVIXcPYMpWUylvFzMJZeRTvNifEv0y13LrcMioeD20SOifUH1vWsQtkRigX%2BoV7qhnaINUMwoZlZX2iaPrxtiZMt8nYE%2FAhkf6HXt6FMCJEEOv8OQHn3P7GLVZ%2FMxPYJIe6jDDplvx17Wch9d6tHAotogA%2FM6yvrLvcsxLUIADWnlvfaZR5GtdGVA5I%2FF6U4jWPuAxIwG8lDHNEMmVqp7lZS1sZAj8qhnxWEacLIAxs7sxvIE0qpLZuUTf07mUJbT1Rvf8hcqdur5i0PkHyxktGziNPBHOkRKplBNVJKwf8bQddqv83UUt5BcnquEvsIqu4WzmwnrFkDLcyyb%2BLgzpFTzvOSwKKdtlTDKgqXCBjqkAQHW7NIFpGoSOE5R2wTU0hvNJV%2Fw7YUsgpse%2BsRuY8Qf2ns9Rhc3oVwSc3Q16O2i5osxWZ9qq69RJFHoRabTuTDxe3IOV9JjJaedXG9q2MVv%2FYrGxsnMe9tCgrj7O%2BC2LHO2hNtACey2QVEKqo81HQ8%2FC2VVhjj2r0n74jbgN10CPSi76%2FWYYQOeDb996Sec8g8V5N%2Fz5E41skVoiAVOY0ejF%2BME&X-Amz-Signature=4655471f209798c2252191d9cc910dfa76cbb27fbbd8561304d17fd2bf946cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
