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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJ6RMDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCWkRuNU%2BpHHRV45SzTWVCnvGJ6PQm3qj2UozENilf1WwIhAOUyu9MY9YSMiy8Ud%2Bs4gcdEEKr%2Bnu9ldzYM6nhc0FxdKv8DCEEQABoMNjM3NDIzMTgzODA1Igz0gsyvxo4Mik1uQoIq3AP9Tu8kT1z7mFQYmVJ%2FJZ4wJLUgOVxFIX3KUBZ70OYVKPi1%2Bn0%2B4%2BsDd6Tn7QJQ71kDeg8vxFzaM96nK1r9Q6%2Bj77z%2BristmAVuGVIilCPqvLVx4NyLKrTtsSve8tnTt5Y2RKOUiB65qivbjxGrKbCqBY7VLKPXKU4UopXWpAKQClsLKbtSrpAIA8YvIDYaH1sAWxrXo5p8tgUtpAjNaYDWBXCMJ0Dpo6pG7nx6Qx1ghSE5rAFAs0cJaOrO%2BUN3T3khLvdBn1KKmliPLqOiLs2hyqquvItJWojyCr%2Biy8BR4pKEHnHXe%2Fo0q0lB0G9nEeUQUQWz3FPoRGMAiiALQlkSeOKgENuD3fUFanhDwioKDhhGWxhBq1PDxOagP%2Bn2n9p1o4iQtm4wiKqlN35%2B%2Bg8zQxFw16u7Ek57X9iJLBfDCO6qYTSPEgCPt0j2Mt9VOnTWfUV7tLENVLsZoox92yQufZ7sSoMCdGmXE%2BLgj3R0Pr4xmAgzBrUWPXbjh7z39hz9pvVE8RxLuLTETQrBe7OSroGHfibYYjLbyA1ORHhReMW9Y1d5zPtc5QvZcpcEMUFUhduKmFKLOZ%2FEuaKfqKV%2FEnWWj4w2a4BpoVloDcANiLNpujDa49S9CQwFvTDehMG9BjqkAa2OH8umSRY0opHQpqJEwwcsaIOMI7jWDVHr1noUWshlUky7SWYwcn75ElRAb51%2Fg54mNiGYlBi1S06L6Qy0x68%2Bs9VTuMGS9nN0ihEgDuhtdELtEbQ8MlA2WSp7ci6oeMWhQJQa%2FN6ZJh9aq%2BSGFQm1BxomNUUxQ7aoOnf0uTpntnA%2FMmNY1%2BcwMPF8cDuNnD8UyeP1RCSBpEb46dP4m4BQxTMC&X-Amz-Signature=3fafe529f3d4afd67a6b7099bf407c2c40e4a9e48e82965bd23db79c9e1610cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJ6RMDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCWkRuNU%2BpHHRV45SzTWVCnvGJ6PQm3qj2UozENilf1WwIhAOUyu9MY9YSMiy8Ud%2Bs4gcdEEKr%2Bnu9ldzYM6nhc0FxdKv8DCEEQABoMNjM3NDIzMTgzODA1Igz0gsyvxo4Mik1uQoIq3AP9Tu8kT1z7mFQYmVJ%2FJZ4wJLUgOVxFIX3KUBZ70OYVKPi1%2Bn0%2B4%2BsDd6Tn7QJQ71kDeg8vxFzaM96nK1r9Q6%2Bj77z%2BristmAVuGVIilCPqvLVx4NyLKrTtsSve8tnTt5Y2RKOUiB65qivbjxGrKbCqBY7VLKPXKU4UopXWpAKQClsLKbtSrpAIA8YvIDYaH1sAWxrXo5p8tgUtpAjNaYDWBXCMJ0Dpo6pG7nx6Qx1ghSE5rAFAs0cJaOrO%2BUN3T3khLvdBn1KKmliPLqOiLs2hyqquvItJWojyCr%2Biy8BR4pKEHnHXe%2Fo0q0lB0G9nEeUQUQWz3FPoRGMAiiALQlkSeOKgENuD3fUFanhDwioKDhhGWxhBq1PDxOagP%2Bn2n9p1o4iQtm4wiKqlN35%2B%2Bg8zQxFw16u7Ek57X9iJLBfDCO6qYTSPEgCPt0j2Mt9VOnTWfUV7tLENVLsZoox92yQufZ7sSoMCdGmXE%2BLgj3R0Pr4xmAgzBrUWPXbjh7z39hz9pvVE8RxLuLTETQrBe7OSroGHfibYYjLbyA1ORHhReMW9Y1d5zPtc5QvZcpcEMUFUhduKmFKLOZ%2FEuaKfqKV%2FEnWWj4w2a4BpoVloDcANiLNpujDa49S9CQwFvTDehMG9BjqkAa2OH8umSRY0opHQpqJEwwcsaIOMI7jWDVHr1noUWshlUky7SWYwcn75ElRAb51%2Fg54mNiGYlBi1S06L6Qy0x68%2Bs9VTuMGS9nN0ihEgDuhtdELtEbQ8MlA2WSp7ci6oeMWhQJQa%2FN6ZJh9aq%2BSGFQm1BxomNUUxQ7aoOnf0uTpntnA%2FMmNY1%2BcwMPF8cDuNnD8UyeP1RCSBpEb46dP4m4BQxTMC&X-Amz-Signature=6542d8f04b484da6dacf7b5d50e007ec85218583be7a816eed8c38daa9b2d90f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJ6RMDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCWkRuNU%2BpHHRV45SzTWVCnvGJ6PQm3qj2UozENilf1WwIhAOUyu9MY9YSMiy8Ud%2Bs4gcdEEKr%2Bnu9ldzYM6nhc0FxdKv8DCEEQABoMNjM3NDIzMTgzODA1Igz0gsyvxo4Mik1uQoIq3AP9Tu8kT1z7mFQYmVJ%2FJZ4wJLUgOVxFIX3KUBZ70OYVKPi1%2Bn0%2B4%2BsDd6Tn7QJQ71kDeg8vxFzaM96nK1r9Q6%2Bj77z%2BristmAVuGVIilCPqvLVx4NyLKrTtsSve8tnTt5Y2RKOUiB65qivbjxGrKbCqBY7VLKPXKU4UopXWpAKQClsLKbtSrpAIA8YvIDYaH1sAWxrXo5p8tgUtpAjNaYDWBXCMJ0Dpo6pG7nx6Qx1ghSE5rAFAs0cJaOrO%2BUN3T3khLvdBn1KKmliPLqOiLs2hyqquvItJWojyCr%2Biy8BR4pKEHnHXe%2Fo0q0lB0G9nEeUQUQWz3FPoRGMAiiALQlkSeOKgENuD3fUFanhDwioKDhhGWxhBq1PDxOagP%2Bn2n9p1o4iQtm4wiKqlN35%2B%2Bg8zQxFw16u7Ek57X9iJLBfDCO6qYTSPEgCPt0j2Mt9VOnTWfUV7tLENVLsZoox92yQufZ7sSoMCdGmXE%2BLgj3R0Pr4xmAgzBrUWPXbjh7z39hz9pvVE8RxLuLTETQrBe7OSroGHfibYYjLbyA1ORHhReMW9Y1d5zPtc5QvZcpcEMUFUhduKmFKLOZ%2FEuaKfqKV%2FEnWWj4w2a4BpoVloDcANiLNpujDa49S9CQwFvTDehMG9BjqkAa2OH8umSRY0opHQpqJEwwcsaIOMI7jWDVHr1noUWshlUky7SWYwcn75ElRAb51%2Fg54mNiGYlBi1S06L6Qy0x68%2Bs9VTuMGS9nN0ihEgDuhtdELtEbQ8MlA2WSp7ci6oeMWhQJQa%2FN6ZJh9aq%2BSGFQm1BxomNUUxQ7aoOnf0uTpntnA%2FMmNY1%2BcwMPF8cDuNnD8UyeP1RCSBpEb46dP4m4BQxTMC&X-Amz-Signature=3cef3e7f291257fb61235dcb9c978636aa3c7a5bb0fe30542f8ce6e82334055f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJ6RMDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCWkRuNU%2BpHHRV45SzTWVCnvGJ6PQm3qj2UozENilf1WwIhAOUyu9MY9YSMiy8Ud%2Bs4gcdEEKr%2Bnu9ldzYM6nhc0FxdKv8DCEEQABoMNjM3NDIzMTgzODA1Igz0gsyvxo4Mik1uQoIq3AP9Tu8kT1z7mFQYmVJ%2FJZ4wJLUgOVxFIX3KUBZ70OYVKPi1%2Bn0%2B4%2BsDd6Tn7QJQ71kDeg8vxFzaM96nK1r9Q6%2Bj77z%2BristmAVuGVIilCPqvLVx4NyLKrTtsSve8tnTt5Y2RKOUiB65qivbjxGrKbCqBY7VLKPXKU4UopXWpAKQClsLKbtSrpAIA8YvIDYaH1sAWxrXo5p8tgUtpAjNaYDWBXCMJ0Dpo6pG7nx6Qx1ghSE5rAFAs0cJaOrO%2BUN3T3khLvdBn1KKmliPLqOiLs2hyqquvItJWojyCr%2Biy8BR4pKEHnHXe%2Fo0q0lB0G9nEeUQUQWz3FPoRGMAiiALQlkSeOKgENuD3fUFanhDwioKDhhGWxhBq1PDxOagP%2Bn2n9p1o4iQtm4wiKqlN35%2B%2Bg8zQxFw16u7Ek57X9iJLBfDCO6qYTSPEgCPt0j2Mt9VOnTWfUV7tLENVLsZoox92yQufZ7sSoMCdGmXE%2BLgj3R0Pr4xmAgzBrUWPXbjh7z39hz9pvVE8RxLuLTETQrBe7OSroGHfibYYjLbyA1ORHhReMW9Y1d5zPtc5QvZcpcEMUFUhduKmFKLOZ%2FEuaKfqKV%2FEnWWj4w2a4BpoVloDcANiLNpujDa49S9CQwFvTDehMG9BjqkAa2OH8umSRY0opHQpqJEwwcsaIOMI7jWDVHr1noUWshlUky7SWYwcn75ElRAb51%2Fg54mNiGYlBi1S06L6Qy0x68%2Bs9VTuMGS9nN0ihEgDuhtdELtEbQ8MlA2WSp7ci6oeMWhQJQa%2FN6ZJh9aq%2BSGFQm1BxomNUUxQ7aoOnf0uTpntnA%2FMmNY1%2BcwMPF8cDuNnD8UyeP1RCSBpEb46dP4m4BQxTMC&X-Amz-Signature=e0abd97c4e0c8bc86b087310d77a3798a57d2efdce86a06e0aa2097d24d23915&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJ6RMDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCWkRuNU%2BpHHRV45SzTWVCnvGJ6PQm3qj2UozENilf1WwIhAOUyu9MY9YSMiy8Ud%2Bs4gcdEEKr%2Bnu9ldzYM6nhc0FxdKv8DCEEQABoMNjM3NDIzMTgzODA1Igz0gsyvxo4Mik1uQoIq3AP9Tu8kT1z7mFQYmVJ%2FJZ4wJLUgOVxFIX3KUBZ70OYVKPi1%2Bn0%2B4%2BsDd6Tn7QJQ71kDeg8vxFzaM96nK1r9Q6%2Bj77z%2BristmAVuGVIilCPqvLVx4NyLKrTtsSve8tnTt5Y2RKOUiB65qivbjxGrKbCqBY7VLKPXKU4UopXWpAKQClsLKbtSrpAIA8YvIDYaH1sAWxrXo5p8tgUtpAjNaYDWBXCMJ0Dpo6pG7nx6Qx1ghSE5rAFAs0cJaOrO%2BUN3T3khLvdBn1KKmliPLqOiLs2hyqquvItJWojyCr%2Biy8BR4pKEHnHXe%2Fo0q0lB0G9nEeUQUQWz3FPoRGMAiiALQlkSeOKgENuD3fUFanhDwioKDhhGWxhBq1PDxOagP%2Bn2n9p1o4iQtm4wiKqlN35%2B%2Bg8zQxFw16u7Ek57X9iJLBfDCO6qYTSPEgCPt0j2Mt9VOnTWfUV7tLENVLsZoox92yQufZ7sSoMCdGmXE%2BLgj3R0Pr4xmAgzBrUWPXbjh7z39hz9pvVE8RxLuLTETQrBe7OSroGHfibYYjLbyA1ORHhReMW9Y1d5zPtc5QvZcpcEMUFUhduKmFKLOZ%2FEuaKfqKV%2FEnWWj4w2a4BpoVloDcANiLNpujDa49S9CQwFvTDehMG9BjqkAa2OH8umSRY0opHQpqJEwwcsaIOMI7jWDVHr1noUWshlUky7SWYwcn75ElRAb51%2Fg54mNiGYlBi1S06L6Qy0x68%2Bs9VTuMGS9nN0ihEgDuhtdELtEbQ8MlA2WSp7ci6oeMWhQJQa%2FN6ZJh9aq%2BSGFQm1BxomNUUxQ7aoOnf0uTpntnA%2FMmNY1%2BcwMPF8cDuNnD8UyeP1RCSBpEb46dP4m4BQxTMC&X-Amz-Signature=c1000bb1426aa8535e4af99ede002dc9b172bd2890b30f8cab0d89a0e66cad7d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJ6RMDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCWkRuNU%2BpHHRV45SzTWVCnvGJ6PQm3qj2UozENilf1WwIhAOUyu9MY9YSMiy8Ud%2Bs4gcdEEKr%2Bnu9ldzYM6nhc0FxdKv8DCEEQABoMNjM3NDIzMTgzODA1Igz0gsyvxo4Mik1uQoIq3AP9Tu8kT1z7mFQYmVJ%2FJZ4wJLUgOVxFIX3KUBZ70OYVKPi1%2Bn0%2B4%2BsDd6Tn7QJQ71kDeg8vxFzaM96nK1r9Q6%2Bj77z%2BristmAVuGVIilCPqvLVx4NyLKrTtsSve8tnTt5Y2RKOUiB65qivbjxGrKbCqBY7VLKPXKU4UopXWpAKQClsLKbtSrpAIA8YvIDYaH1sAWxrXo5p8tgUtpAjNaYDWBXCMJ0Dpo6pG7nx6Qx1ghSE5rAFAs0cJaOrO%2BUN3T3khLvdBn1KKmliPLqOiLs2hyqquvItJWojyCr%2Biy8BR4pKEHnHXe%2Fo0q0lB0G9nEeUQUQWz3FPoRGMAiiALQlkSeOKgENuD3fUFanhDwioKDhhGWxhBq1PDxOagP%2Bn2n9p1o4iQtm4wiKqlN35%2B%2Bg8zQxFw16u7Ek57X9iJLBfDCO6qYTSPEgCPt0j2Mt9VOnTWfUV7tLENVLsZoox92yQufZ7sSoMCdGmXE%2BLgj3R0Pr4xmAgzBrUWPXbjh7z39hz9pvVE8RxLuLTETQrBe7OSroGHfibYYjLbyA1ORHhReMW9Y1d5zPtc5QvZcpcEMUFUhduKmFKLOZ%2FEuaKfqKV%2FEnWWj4w2a4BpoVloDcANiLNpujDa49S9CQwFvTDehMG9BjqkAa2OH8umSRY0opHQpqJEwwcsaIOMI7jWDVHr1noUWshlUky7SWYwcn75ElRAb51%2Fg54mNiGYlBi1S06L6Qy0x68%2Bs9VTuMGS9nN0ihEgDuhtdELtEbQ8MlA2WSp7ci6oeMWhQJQa%2FN6ZJh9aq%2BSGFQm1BxomNUUxQ7aoOnf0uTpntnA%2FMmNY1%2BcwMPF8cDuNnD8UyeP1RCSBpEb46dP4m4BQxTMC&X-Amz-Signature=c09d4ac2c74231ea79f51f610724cc7693aa42f405f975b52eb85b5a128db1a8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJ6RMDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCWkRuNU%2BpHHRV45SzTWVCnvGJ6PQm3qj2UozENilf1WwIhAOUyu9MY9YSMiy8Ud%2Bs4gcdEEKr%2Bnu9ldzYM6nhc0FxdKv8DCEEQABoMNjM3NDIzMTgzODA1Igz0gsyvxo4Mik1uQoIq3AP9Tu8kT1z7mFQYmVJ%2FJZ4wJLUgOVxFIX3KUBZ70OYVKPi1%2Bn0%2B4%2BsDd6Tn7QJQ71kDeg8vxFzaM96nK1r9Q6%2Bj77z%2BristmAVuGVIilCPqvLVx4NyLKrTtsSve8tnTt5Y2RKOUiB65qivbjxGrKbCqBY7VLKPXKU4UopXWpAKQClsLKbtSrpAIA8YvIDYaH1sAWxrXo5p8tgUtpAjNaYDWBXCMJ0Dpo6pG7nx6Qx1ghSE5rAFAs0cJaOrO%2BUN3T3khLvdBn1KKmliPLqOiLs2hyqquvItJWojyCr%2Biy8BR4pKEHnHXe%2Fo0q0lB0G9nEeUQUQWz3FPoRGMAiiALQlkSeOKgENuD3fUFanhDwioKDhhGWxhBq1PDxOagP%2Bn2n9p1o4iQtm4wiKqlN35%2B%2Bg8zQxFw16u7Ek57X9iJLBfDCO6qYTSPEgCPt0j2Mt9VOnTWfUV7tLENVLsZoox92yQufZ7sSoMCdGmXE%2BLgj3R0Pr4xmAgzBrUWPXbjh7z39hz9pvVE8RxLuLTETQrBe7OSroGHfibYYjLbyA1ORHhReMW9Y1d5zPtc5QvZcpcEMUFUhduKmFKLOZ%2FEuaKfqKV%2FEnWWj4w2a4BpoVloDcANiLNpujDa49S9CQwFvTDehMG9BjqkAa2OH8umSRY0opHQpqJEwwcsaIOMI7jWDVHr1noUWshlUky7SWYwcn75ElRAb51%2Fg54mNiGYlBi1S06L6Qy0x68%2Bs9VTuMGS9nN0ihEgDuhtdELtEbQ8MlA2WSp7ci6oeMWhQJQa%2FN6ZJh9aq%2BSGFQm1BxomNUUxQ7aoOnf0uTpntnA%2FMmNY1%2BcwMPF8cDuNnD8UyeP1RCSBpEb46dP4m4BQxTMC&X-Amz-Signature=8b12d9542db55eafb16ff1b4d46f0337760d45c3c8268e0e5f6e54ead5fda5b5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
