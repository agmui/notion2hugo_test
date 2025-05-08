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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KSBEBK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6TE72FceYCQSIODQJTBUBXtzm2csIkxAIVKDo24X8hAiBcUgnIHEqlnCnJatwAkEaFHb9m99roqhiij24vIVmW7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMsyhWSELM%2FqXeatocKtwDoCo8qA0Og%2BHKaqYssLgpeXUDlsHDzsM2VVXkpJw5Ymy5VC59EyQO8%2BBb27CgB4EOoUx3Mgc36Bjaq0fQA15Q%2FDJlqTC8CXrsvzyes%2FhGOQsiOo6mBvawq3%2Fp4ctGkFknwiu5VUKl%2BOUGGoJH80YffvtIfO9zWZESkVWegVyp4IoXsk2Ayt%2BsbNfxl%2BebpSSp5e%2BWfo5FFcnJ27%2B7ecgswFWGf8Q5g4ZMM%2BrN6XNrAjW9%2FSGyNL4%2BYvbwdI8mWIg%2FlFsIMWMFyLXVzrXp%2BgEhSO2FrThUMl2jQaO%2FTRWCOv8gF2gpAfVCdFBQ0kNlxXw3FWWBdHjPFkQ10fjtfmmEE1yntxVwOufKY%2Bam4AxPNuS5GcejEZ1cYSZvuCuspU0%2FYhGF1EP2apN%2FMesQz9D5kgxOJfxpHoaGeBHpqIdZDDHM4VcHsCpo8B8elR81A%2BzsmpDSkYvJX8eYTNOolq%2FlEBWfd283TXxycE4ssLvi%2B7Iq9o0Te2DFV66Rh3F1dusNK4880dEu%2BpoAM9QJXPDltcBjihFucaND4i%2BWmF3zAggT%2FL%2FGGhO9x9hi%2BiqmOql7cKaLrCFrcPngndssbuJMDYf2MeQX8J85zs3%2FImbZAYSiPu7E3hUkqaey8DkwrsnywAY6pgH%2B3TqR1M%2BO9s4ypcXALKkZbHejsbNtIHPW7tolOhtUuYGMTW5zXo5D4bQUmacgROvRdkLQ%2Bsd3sSJvcpHoF4%2F0zWF0AXa4H2y4%2Fe0ARXn%2B8GTX9W3RNIPpsv3%2B%2F6FXEZOnusW%2By%2BJrTCM8kQNUATTdQEAEb6jln%2Beqrg6vIIw1m2aZohQy1eEeJf05NELxYPeuZBPkCunUKYjOD2X1nuQm70BT9kqW&X-Amz-Signature=0bda3af221aaf2c869202f151767c8f63adc2c04a91316d76175082617ed6dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KSBEBK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6TE72FceYCQSIODQJTBUBXtzm2csIkxAIVKDo24X8hAiBcUgnIHEqlnCnJatwAkEaFHb9m99roqhiij24vIVmW7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMsyhWSELM%2FqXeatocKtwDoCo8qA0Og%2BHKaqYssLgpeXUDlsHDzsM2VVXkpJw5Ymy5VC59EyQO8%2BBb27CgB4EOoUx3Mgc36Bjaq0fQA15Q%2FDJlqTC8CXrsvzyes%2FhGOQsiOo6mBvawq3%2Fp4ctGkFknwiu5VUKl%2BOUGGoJH80YffvtIfO9zWZESkVWegVyp4IoXsk2Ayt%2BsbNfxl%2BebpSSp5e%2BWfo5FFcnJ27%2B7ecgswFWGf8Q5g4ZMM%2BrN6XNrAjW9%2FSGyNL4%2BYvbwdI8mWIg%2FlFsIMWMFyLXVzrXp%2BgEhSO2FrThUMl2jQaO%2FTRWCOv8gF2gpAfVCdFBQ0kNlxXw3FWWBdHjPFkQ10fjtfmmEE1yntxVwOufKY%2Bam4AxPNuS5GcejEZ1cYSZvuCuspU0%2FYhGF1EP2apN%2FMesQz9D5kgxOJfxpHoaGeBHpqIdZDDHM4VcHsCpo8B8elR81A%2BzsmpDSkYvJX8eYTNOolq%2FlEBWfd283TXxycE4ssLvi%2B7Iq9o0Te2DFV66Rh3F1dusNK4880dEu%2BpoAM9QJXPDltcBjihFucaND4i%2BWmF3zAggT%2FL%2FGGhO9x9hi%2BiqmOql7cKaLrCFrcPngndssbuJMDYf2MeQX8J85zs3%2FImbZAYSiPu7E3hUkqaey8DkwrsnywAY6pgH%2B3TqR1M%2BO9s4ypcXALKkZbHejsbNtIHPW7tolOhtUuYGMTW5zXo5D4bQUmacgROvRdkLQ%2Bsd3sSJvcpHoF4%2F0zWF0AXa4H2y4%2Fe0ARXn%2B8GTX9W3RNIPpsv3%2B%2F6FXEZOnusW%2By%2BJrTCM8kQNUATTdQEAEb6jln%2Beqrg6vIIw1m2aZohQy1eEeJf05NELxYPeuZBPkCunUKYjOD2X1nuQm70BT9kqW&X-Amz-Signature=92f65cb45bd660a94224451911abc274b364f3281de93d858691c0ebdeeb9d94&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KSBEBK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6TE72FceYCQSIODQJTBUBXtzm2csIkxAIVKDo24X8hAiBcUgnIHEqlnCnJatwAkEaFHb9m99roqhiij24vIVmW7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMsyhWSELM%2FqXeatocKtwDoCo8qA0Og%2BHKaqYssLgpeXUDlsHDzsM2VVXkpJw5Ymy5VC59EyQO8%2BBb27CgB4EOoUx3Mgc36Bjaq0fQA15Q%2FDJlqTC8CXrsvzyes%2FhGOQsiOo6mBvawq3%2Fp4ctGkFknwiu5VUKl%2BOUGGoJH80YffvtIfO9zWZESkVWegVyp4IoXsk2Ayt%2BsbNfxl%2BebpSSp5e%2BWfo5FFcnJ27%2B7ecgswFWGf8Q5g4ZMM%2BrN6XNrAjW9%2FSGyNL4%2BYvbwdI8mWIg%2FlFsIMWMFyLXVzrXp%2BgEhSO2FrThUMl2jQaO%2FTRWCOv8gF2gpAfVCdFBQ0kNlxXw3FWWBdHjPFkQ10fjtfmmEE1yntxVwOufKY%2Bam4AxPNuS5GcejEZ1cYSZvuCuspU0%2FYhGF1EP2apN%2FMesQz9D5kgxOJfxpHoaGeBHpqIdZDDHM4VcHsCpo8B8elR81A%2BzsmpDSkYvJX8eYTNOolq%2FlEBWfd283TXxycE4ssLvi%2B7Iq9o0Te2DFV66Rh3F1dusNK4880dEu%2BpoAM9QJXPDltcBjihFucaND4i%2BWmF3zAggT%2FL%2FGGhO9x9hi%2BiqmOql7cKaLrCFrcPngndssbuJMDYf2MeQX8J85zs3%2FImbZAYSiPu7E3hUkqaey8DkwrsnywAY6pgH%2B3TqR1M%2BO9s4ypcXALKkZbHejsbNtIHPW7tolOhtUuYGMTW5zXo5D4bQUmacgROvRdkLQ%2Bsd3sSJvcpHoF4%2F0zWF0AXa4H2y4%2Fe0ARXn%2B8GTX9W3RNIPpsv3%2B%2F6FXEZOnusW%2By%2BJrTCM8kQNUATTdQEAEb6jln%2Beqrg6vIIw1m2aZohQy1eEeJf05NELxYPeuZBPkCunUKYjOD2X1nuQm70BT9kqW&X-Amz-Signature=86c784dc29822c9d31cf439310f89ab358ad00206cc44a7c4ffb9ec36da96e29&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KSBEBK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6TE72FceYCQSIODQJTBUBXtzm2csIkxAIVKDo24X8hAiBcUgnIHEqlnCnJatwAkEaFHb9m99roqhiij24vIVmW7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMsyhWSELM%2FqXeatocKtwDoCo8qA0Og%2BHKaqYssLgpeXUDlsHDzsM2VVXkpJw5Ymy5VC59EyQO8%2BBb27CgB4EOoUx3Mgc36Bjaq0fQA15Q%2FDJlqTC8CXrsvzyes%2FhGOQsiOo6mBvawq3%2Fp4ctGkFknwiu5VUKl%2BOUGGoJH80YffvtIfO9zWZESkVWegVyp4IoXsk2Ayt%2BsbNfxl%2BebpSSp5e%2BWfo5FFcnJ27%2B7ecgswFWGf8Q5g4ZMM%2BrN6XNrAjW9%2FSGyNL4%2BYvbwdI8mWIg%2FlFsIMWMFyLXVzrXp%2BgEhSO2FrThUMl2jQaO%2FTRWCOv8gF2gpAfVCdFBQ0kNlxXw3FWWBdHjPFkQ10fjtfmmEE1yntxVwOufKY%2Bam4AxPNuS5GcejEZ1cYSZvuCuspU0%2FYhGF1EP2apN%2FMesQz9D5kgxOJfxpHoaGeBHpqIdZDDHM4VcHsCpo8B8elR81A%2BzsmpDSkYvJX8eYTNOolq%2FlEBWfd283TXxycE4ssLvi%2B7Iq9o0Te2DFV66Rh3F1dusNK4880dEu%2BpoAM9QJXPDltcBjihFucaND4i%2BWmF3zAggT%2FL%2FGGhO9x9hi%2BiqmOql7cKaLrCFrcPngndssbuJMDYf2MeQX8J85zs3%2FImbZAYSiPu7E3hUkqaey8DkwrsnywAY6pgH%2B3TqR1M%2BO9s4ypcXALKkZbHejsbNtIHPW7tolOhtUuYGMTW5zXo5D4bQUmacgROvRdkLQ%2Bsd3sSJvcpHoF4%2F0zWF0AXa4H2y4%2Fe0ARXn%2B8GTX9W3RNIPpsv3%2B%2F6FXEZOnusW%2By%2BJrTCM8kQNUATTdQEAEb6jln%2Beqrg6vIIw1m2aZohQy1eEeJf05NELxYPeuZBPkCunUKYjOD2X1nuQm70BT9kqW&X-Amz-Signature=985f1053bf1923ea33b53a286b4fd671512c290f1c71f3e99049edf38126fe10&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KSBEBK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6TE72FceYCQSIODQJTBUBXtzm2csIkxAIVKDo24X8hAiBcUgnIHEqlnCnJatwAkEaFHb9m99roqhiij24vIVmW7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMsyhWSELM%2FqXeatocKtwDoCo8qA0Og%2BHKaqYssLgpeXUDlsHDzsM2VVXkpJw5Ymy5VC59EyQO8%2BBb27CgB4EOoUx3Mgc36Bjaq0fQA15Q%2FDJlqTC8CXrsvzyes%2FhGOQsiOo6mBvawq3%2Fp4ctGkFknwiu5VUKl%2BOUGGoJH80YffvtIfO9zWZESkVWegVyp4IoXsk2Ayt%2BsbNfxl%2BebpSSp5e%2BWfo5FFcnJ27%2B7ecgswFWGf8Q5g4ZMM%2BrN6XNrAjW9%2FSGyNL4%2BYvbwdI8mWIg%2FlFsIMWMFyLXVzrXp%2BgEhSO2FrThUMl2jQaO%2FTRWCOv8gF2gpAfVCdFBQ0kNlxXw3FWWBdHjPFkQ10fjtfmmEE1yntxVwOufKY%2Bam4AxPNuS5GcejEZ1cYSZvuCuspU0%2FYhGF1EP2apN%2FMesQz9D5kgxOJfxpHoaGeBHpqIdZDDHM4VcHsCpo8B8elR81A%2BzsmpDSkYvJX8eYTNOolq%2FlEBWfd283TXxycE4ssLvi%2B7Iq9o0Te2DFV66Rh3F1dusNK4880dEu%2BpoAM9QJXPDltcBjihFucaND4i%2BWmF3zAggT%2FL%2FGGhO9x9hi%2BiqmOql7cKaLrCFrcPngndssbuJMDYf2MeQX8J85zs3%2FImbZAYSiPu7E3hUkqaey8DkwrsnywAY6pgH%2B3TqR1M%2BO9s4ypcXALKkZbHejsbNtIHPW7tolOhtUuYGMTW5zXo5D4bQUmacgROvRdkLQ%2Bsd3sSJvcpHoF4%2F0zWF0AXa4H2y4%2Fe0ARXn%2B8GTX9W3RNIPpsv3%2B%2F6FXEZOnusW%2By%2BJrTCM8kQNUATTdQEAEb6jln%2Beqrg6vIIw1m2aZohQy1eEeJf05NELxYPeuZBPkCunUKYjOD2X1nuQm70BT9kqW&X-Amz-Signature=6424eb702a0acde0fa0dc55d342e8132a46d66f2963acebc348d049789ed54f9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KSBEBK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6TE72FceYCQSIODQJTBUBXtzm2csIkxAIVKDo24X8hAiBcUgnIHEqlnCnJatwAkEaFHb9m99roqhiij24vIVmW7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMsyhWSELM%2FqXeatocKtwDoCo8qA0Og%2BHKaqYssLgpeXUDlsHDzsM2VVXkpJw5Ymy5VC59EyQO8%2BBb27CgB4EOoUx3Mgc36Bjaq0fQA15Q%2FDJlqTC8CXrsvzyes%2FhGOQsiOo6mBvawq3%2Fp4ctGkFknwiu5VUKl%2BOUGGoJH80YffvtIfO9zWZESkVWegVyp4IoXsk2Ayt%2BsbNfxl%2BebpSSp5e%2BWfo5FFcnJ27%2B7ecgswFWGf8Q5g4ZMM%2BrN6XNrAjW9%2FSGyNL4%2BYvbwdI8mWIg%2FlFsIMWMFyLXVzrXp%2BgEhSO2FrThUMl2jQaO%2FTRWCOv8gF2gpAfVCdFBQ0kNlxXw3FWWBdHjPFkQ10fjtfmmEE1yntxVwOufKY%2Bam4AxPNuS5GcejEZ1cYSZvuCuspU0%2FYhGF1EP2apN%2FMesQz9D5kgxOJfxpHoaGeBHpqIdZDDHM4VcHsCpo8B8elR81A%2BzsmpDSkYvJX8eYTNOolq%2FlEBWfd283TXxycE4ssLvi%2B7Iq9o0Te2DFV66Rh3F1dusNK4880dEu%2BpoAM9QJXPDltcBjihFucaND4i%2BWmF3zAggT%2FL%2FGGhO9x9hi%2BiqmOql7cKaLrCFrcPngndssbuJMDYf2MeQX8J85zs3%2FImbZAYSiPu7E3hUkqaey8DkwrsnywAY6pgH%2B3TqR1M%2BO9s4ypcXALKkZbHejsbNtIHPW7tolOhtUuYGMTW5zXo5D4bQUmacgROvRdkLQ%2Bsd3sSJvcpHoF4%2F0zWF0AXa4H2y4%2Fe0ARXn%2B8GTX9W3RNIPpsv3%2B%2F6FXEZOnusW%2By%2BJrTCM8kQNUATTdQEAEb6jln%2Beqrg6vIIw1m2aZohQy1eEeJf05NELxYPeuZBPkCunUKYjOD2X1nuQm70BT9kqW&X-Amz-Signature=396995bfa1b13a8a844f0ded7c9e0a9e10ef6c75c2d7b93c65bb8aa5d1e75e55&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KSBEBK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6TE72FceYCQSIODQJTBUBXtzm2csIkxAIVKDo24X8hAiBcUgnIHEqlnCnJatwAkEaFHb9m99roqhiij24vIVmW7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMsyhWSELM%2FqXeatocKtwDoCo8qA0Og%2BHKaqYssLgpeXUDlsHDzsM2VVXkpJw5Ymy5VC59EyQO8%2BBb27CgB4EOoUx3Mgc36Bjaq0fQA15Q%2FDJlqTC8CXrsvzyes%2FhGOQsiOo6mBvawq3%2Fp4ctGkFknwiu5VUKl%2BOUGGoJH80YffvtIfO9zWZESkVWegVyp4IoXsk2Ayt%2BsbNfxl%2BebpSSp5e%2BWfo5FFcnJ27%2B7ecgswFWGf8Q5g4ZMM%2BrN6XNrAjW9%2FSGyNL4%2BYvbwdI8mWIg%2FlFsIMWMFyLXVzrXp%2BgEhSO2FrThUMl2jQaO%2FTRWCOv8gF2gpAfVCdFBQ0kNlxXw3FWWBdHjPFkQ10fjtfmmEE1yntxVwOufKY%2Bam4AxPNuS5GcejEZ1cYSZvuCuspU0%2FYhGF1EP2apN%2FMesQz9D5kgxOJfxpHoaGeBHpqIdZDDHM4VcHsCpo8B8elR81A%2BzsmpDSkYvJX8eYTNOolq%2FlEBWfd283TXxycE4ssLvi%2B7Iq9o0Te2DFV66Rh3F1dusNK4880dEu%2BpoAM9QJXPDltcBjihFucaND4i%2BWmF3zAggT%2FL%2FGGhO9x9hi%2BiqmOql7cKaLrCFrcPngndssbuJMDYf2MeQX8J85zs3%2FImbZAYSiPu7E3hUkqaey8DkwrsnywAY6pgH%2B3TqR1M%2BO9s4ypcXALKkZbHejsbNtIHPW7tolOhtUuYGMTW5zXo5D4bQUmacgROvRdkLQ%2Bsd3sSJvcpHoF4%2F0zWF0AXa4H2y4%2Fe0ARXn%2B8GTX9W3RNIPpsv3%2B%2F6FXEZOnusW%2By%2BJrTCM8kQNUATTdQEAEb6jln%2Beqrg6vIIw1m2aZohQy1eEeJf05NELxYPeuZBPkCunUKYjOD2X1nuQm70BT9kqW&X-Amz-Signature=61dc80a70387bfad526048d2193faf7c115302c181b8e61e1bef9a094893cf05&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
