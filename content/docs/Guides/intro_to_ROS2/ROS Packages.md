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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I44ZIEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC05vyjFi70Ds85I074EEWsWA4PLAu1dfdssNUKXIol2QIhAPtRnpGnXgS5S91TdvsnwZQi5OtQRi7ugMw2Kkigvg9jKv8DCFMQABoMNjM3NDIzMTgzODA1IgyUarmFkIRW7xrTgqwq3AN07QgU2HWnjueMSIBRdrrHzxnb9zd09T4urTIjwKgdql3ttCyAMAfk0QirS%2BUMTB%2BtuGHi6ptofdcQylYrrbq6He9sNE7hhOL49Peo21xNm0KVBMfereU5%2FNavKiDdiPI%2FXKvZlKUaP8T0I69ixFyLeIftwKGAzwEGAVS5ZR1CKEXdVT53uTHEcLTMiPZXFdhT64OrQ0EDEo%2FABL%2BjBKnlT7iEYaPNH1BfDo73xXlQarQycQgjLD%2FYdcXa00SxtpxAoJ3puSEnJpPOFsnupyojSwhtP0PNDOEn9%2Byz4EwWObethN%2B15zmIEPdGDf%2Be4KIokIxgx4cDvYYzHS4EQgCs3f3xSyv0YHdwHu%2BGq8Gx5KbaIhNx%2BGiJy0GlMZDF5qDFITLcX8%2FKoAHiLXz8OESHM9hOVC2qfNbAoe%2BaLdhBeLg6xciKbT81ZjvPqCJRL3zdX4xDE81oxqxNQ3n3t8nwlS3AMEm4SthNGh7nJOmtBaWSTbpMS9kkfKP8lv2mz3ZTbUlgHz8S03N99DU3VVMN%2BqnblvG5CA6LrImm0DAP%2FjjTltChPjVXBSWk4eefCqliM5%2BefrrNajOtV2SmtWH5AF4r8a%2F9doGHDEQ0fMRaMbOU5S%2FOj1dSzq9PnjC1%2Fr3CBjqkAR2z1f4vcZ%2FW4ZRCs%2B1hiq4aaYBvwR%2FA%2FAbl5W1g6hVJGiHhKPWwkLdv4CxEVv6NxQW05forxQu6VMnCn%2Fy3PGcjhDK2pm%2FXgS7T5dTkiElrOMvwk8yFA%2BVW%2BeiG%2FRI3iSmF4RtuNkb5bpEWsLp3na%2F40ax94GdyrLQho8FXlwf2LvrUx9ZZfvOETQYTTCTBQucz%2B33Oq5GDPE7AolebQTR%2BaC6Y&X-Amz-Signature=1a08d8ca20280d5dde8db3483a86592034a8527880d1e264647b5adc847ed60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I44ZIEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC05vyjFi70Ds85I074EEWsWA4PLAu1dfdssNUKXIol2QIhAPtRnpGnXgS5S91TdvsnwZQi5OtQRi7ugMw2Kkigvg9jKv8DCFMQABoMNjM3NDIzMTgzODA1IgyUarmFkIRW7xrTgqwq3AN07QgU2HWnjueMSIBRdrrHzxnb9zd09T4urTIjwKgdql3ttCyAMAfk0QirS%2BUMTB%2BtuGHi6ptofdcQylYrrbq6He9sNE7hhOL49Peo21xNm0KVBMfereU5%2FNavKiDdiPI%2FXKvZlKUaP8T0I69ixFyLeIftwKGAzwEGAVS5ZR1CKEXdVT53uTHEcLTMiPZXFdhT64OrQ0EDEo%2FABL%2BjBKnlT7iEYaPNH1BfDo73xXlQarQycQgjLD%2FYdcXa00SxtpxAoJ3puSEnJpPOFsnupyojSwhtP0PNDOEn9%2Byz4EwWObethN%2B15zmIEPdGDf%2Be4KIokIxgx4cDvYYzHS4EQgCs3f3xSyv0YHdwHu%2BGq8Gx5KbaIhNx%2BGiJy0GlMZDF5qDFITLcX8%2FKoAHiLXz8OESHM9hOVC2qfNbAoe%2BaLdhBeLg6xciKbT81ZjvPqCJRL3zdX4xDE81oxqxNQ3n3t8nwlS3AMEm4SthNGh7nJOmtBaWSTbpMS9kkfKP8lv2mz3ZTbUlgHz8S03N99DU3VVMN%2BqnblvG5CA6LrImm0DAP%2FjjTltChPjVXBSWk4eefCqliM5%2BefrrNajOtV2SmtWH5AF4r8a%2F9doGHDEQ0fMRaMbOU5S%2FOj1dSzq9PnjC1%2Fr3CBjqkAR2z1f4vcZ%2FW4ZRCs%2B1hiq4aaYBvwR%2FA%2FAbl5W1g6hVJGiHhKPWwkLdv4CxEVv6NxQW05forxQu6VMnCn%2Fy3PGcjhDK2pm%2FXgS7T5dTkiElrOMvwk8yFA%2BVW%2BeiG%2FRI3iSmF4RtuNkb5bpEWsLp3na%2F40ax94GdyrLQho8FXlwf2LvrUx9ZZfvOETQYTTCTBQucz%2B33Oq5GDPE7AolebQTR%2BaC6Y&X-Amz-Signature=2be00fc645347b8dce5ef73f991122750a675a23ce4a548dfb53b662de71ecf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I44ZIEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC05vyjFi70Ds85I074EEWsWA4PLAu1dfdssNUKXIol2QIhAPtRnpGnXgS5S91TdvsnwZQi5OtQRi7ugMw2Kkigvg9jKv8DCFMQABoMNjM3NDIzMTgzODA1IgyUarmFkIRW7xrTgqwq3AN07QgU2HWnjueMSIBRdrrHzxnb9zd09T4urTIjwKgdql3ttCyAMAfk0QirS%2BUMTB%2BtuGHi6ptofdcQylYrrbq6He9sNE7hhOL49Peo21xNm0KVBMfereU5%2FNavKiDdiPI%2FXKvZlKUaP8T0I69ixFyLeIftwKGAzwEGAVS5ZR1CKEXdVT53uTHEcLTMiPZXFdhT64OrQ0EDEo%2FABL%2BjBKnlT7iEYaPNH1BfDo73xXlQarQycQgjLD%2FYdcXa00SxtpxAoJ3puSEnJpPOFsnupyojSwhtP0PNDOEn9%2Byz4EwWObethN%2B15zmIEPdGDf%2Be4KIokIxgx4cDvYYzHS4EQgCs3f3xSyv0YHdwHu%2BGq8Gx5KbaIhNx%2BGiJy0GlMZDF5qDFITLcX8%2FKoAHiLXz8OESHM9hOVC2qfNbAoe%2BaLdhBeLg6xciKbT81ZjvPqCJRL3zdX4xDE81oxqxNQ3n3t8nwlS3AMEm4SthNGh7nJOmtBaWSTbpMS9kkfKP8lv2mz3ZTbUlgHz8S03N99DU3VVMN%2BqnblvG5CA6LrImm0DAP%2FjjTltChPjVXBSWk4eefCqliM5%2BefrrNajOtV2SmtWH5AF4r8a%2F9doGHDEQ0fMRaMbOU5S%2FOj1dSzq9PnjC1%2Fr3CBjqkAR2z1f4vcZ%2FW4ZRCs%2B1hiq4aaYBvwR%2FA%2FAbl5W1g6hVJGiHhKPWwkLdv4CxEVv6NxQW05forxQu6VMnCn%2Fy3PGcjhDK2pm%2FXgS7T5dTkiElrOMvwk8yFA%2BVW%2BeiG%2FRI3iSmF4RtuNkb5bpEWsLp3na%2F40ax94GdyrLQho8FXlwf2LvrUx9ZZfvOETQYTTCTBQucz%2B33Oq5GDPE7AolebQTR%2BaC6Y&X-Amz-Signature=177056f6096cd9c53abbe6d971c3d6048eed879d0d21545ff740944d74a57a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I44ZIEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC05vyjFi70Ds85I074EEWsWA4PLAu1dfdssNUKXIol2QIhAPtRnpGnXgS5S91TdvsnwZQi5OtQRi7ugMw2Kkigvg9jKv8DCFMQABoMNjM3NDIzMTgzODA1IgyUarmFkIRW7xrTgqwq3AN07QgU2HWnjueMSIBRdrrHzxnb9zd09T4urTIjwKgdql3ttCyAMAfk0QirS%2BUMTB%2BtuGHi6ptofdcQylYrrbq6He9sNE7hhOL49Peo21xNm0KVBMfereU5%2FNavKiDdiPI%2FXKvZlKUaP8T0I69ixFyLeIftwKGAzwEGAVS5ZR1CKEXdVT53uTHEcLTMiPZXFdhT64OrQ0EDEo%2FABL%2BjBKnlT7iEYaPNH1BfDo73xXlQarQycQgjLD%2FYdcXa00SxtpxAoJ3puSEnJpPOFsnupyojSwhtP0PNDOEn9%2Byz4EwWObethN%2B15zmIEPdGDf%2Be4KIokIxgx4cDvYYzHS4EQgCs3f3xSyv0YHdwHu%2BGq8Gx5KbaIhNx%2BGiJy0GlMZDF5qDFITLcX8%2FKoAHiLXz8OESHM9hOVC2qfNbAoe%2BaLdhBeLg6xciKbT81ZjvPqCJRL3zdX4xDE81oxqxNQ3n3t8nwlS3AMEm4SthNGh7nJOmtBaWSTbpMS9kkfKP8lv2mz3ZTbUlgHz8S03N99DU3VVMN%2BqnblvG5CA6LrImm0DAP%2FjjTltChPjVXBSWk4eefCqliM5%2BefrrNajOtV2SmtWH5AF4r8a%2F9doGHDEQ0fMRaMbOU5S%2FOj1dSzq9PnjC1%2Fr3CBjqkAR2z1f4vcZ%2FW4ZRCs%2B1hiq4aaYBvwR%2FA%2FAbl5W1g6hVJGiHhKPWwkLdv4CxEVv6NxQW05forxQu6VMnCn%2Fy3PGcjhDK2pm%2FXgS7T5dTkiElrOMvwk8yFA%2BVW%2BeiG%2FRI3iSmF4RtuNkb5bpEWsLp3na%2F40ax94GdyrLQho8FXlwf2LvrUx9ZZfvOETQYTTCTBQucz%2B33Oq5GDPE7AolebQTR%2BaC6Y&X-Amz-Signature=6f77b5303080f9722ae6bc6ef66c7f72b672b0a50827d058d25991ca06adeaab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I44ZIEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC05vyjFi70Ds85I074EEWsWA4PLAu1dfdssNUKXIol2QIhAPtRnpGnXgS5S91TdvsnwZQi5OtQRi7ugMw2Kkigvg9jKv8DCFMQABoMNjM3NDIzMTgzODA1IgyUarmFkIRW7xrTgqwq3AN07QgU2HWnjueMSIBRdrrHzxnb9zd09T4urTIjwKgdql3ttCyAMAfk0QirS%2BUMTB%2BtuGHi6ptofdcQylYrrbq6He9sNE7hhOL49Peo21xNm0KVBMfereU5%2FNavKiDdiPI%2FXKvZlKUaP8T0I69ixFyLeIftwKGAzwEGAVS5ZR1CKEXdVT53uTHEcLTMiPZXFdhT64OrQ0EDEo%2FABL%2BjBKnlT7iEYaPNH1BfDo73xXlQarQycQgjLD%2FYdcXa00SxtpxAoJ3puSEnJpPOFsnupyojSwhtP0PNDOEn9%2Byz4EwWObethN%2B15zmIEPdGDf%2Be4KIokIxgx4cDvYYzHS4EQgCs3f3xSyv0YHdwHu%2BGq8Gx5KbaIhNx%2BGiJy0GlMZDF5qDFITLcX8%2FKoAHiLXz8OESHM9hOVC2qfNbAoe%2BaLdhBeLg6xciKbT81ZjvPqCJRL3zdX4xDE81oxqxNQ3n3t8nwlS3AMEm4SthNGh7nJOmtBaWSTbpMS9kkfKP8lv2mz3ZTbUlgHz8S03N99DU3VVMN%2BqnblvG5CA6LrImm0DAP%2FjjTltChPjVXBSWk4eefCqliM5%2BefrrNajOtV2SmtWH5AF4r8a%2F9doGHDEQ0fMRaMbOU5S%2FOj1dSzq9PnjC1%2Fr3CBjqkAR2z1f4vcZ%2FW4ZRCs%2B1hiq4aaYBvwR%2FA%2FAbl5W1g6hVJGiHhKPWwkLdv4CxEVv6NxQW05forxQu6VMnCn%2Fy3PGcjhDK2pm%2FXgS7T5dTkiElrOMvwk8yFA%2BVW%2BeiG%2FRI3iSmF4RtuNkb5bpEWsLp3na%2F40ax94GdyrLQho8FXlwf2LvrUx9ZZfvOETQYTTCTBQucz%2B33Oq5GDPE7AolebQTR%2BaC6Y&X-Amz-Signature=ebb1c4fddd5dac905d8cf380c4115111832bdcda7380befb02299a4025e34901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I44ZIEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC05vyjFi70Ds85I074EEWsWA4PLAu1dfdssNUKXIol2QIhAPtRnpGnXgS5S91TdvsnwZQi5OtQRi7ugMw2Kkigvg9jKv8DCFMQABoMNjM3NDIzMTgzODA1IgyUarmFkIRW7xrTgqwq3AN07QgU2HWnjueMSIBRdrrHzxnb9zd09T4urTIjwKgdql3ttCyAMAfk0QirS%2BUMTB%2BtuGHi6ptofdcQylYrrbq6He9sNE7hhOL49Peo21xNm0KVBMfereU5%2FNavKiDdiPI%2FXKvZlKUaP8T0I69ixFyLeIftwKGAzwEGAVS5ZR1CKEXdVT53uTHEcLTMiPZXFdhT64OrQ0EDEo%2FABL%2BjBKnlT7iEYaPNH1BfDo73xXlQarQycQgjLD%2FYdcXa00SxtpxAoJ3puSEnJpPOFsnupyojSwhtP0PNDOEn9%2Byz4EwWObethN%2B15zmIEPdGDf%2Be4KIokIxgx4cDvYYzHS4EQgCs3f3xSyv0YHdwHu%2BGq8Gx5KbaIhNx%2BGiJy0GlMZDF5qDFITLcX8%2FKoAHiLXz8OESHM9hOVC2qfNbAoe%2BaLdhBeLg6xciKbT81ZjvPqCJRL3zdX4xDE81oxqxNQ3n3t8nwlS3AMEm4SthNGh7nJOmtBaWSTbpMS9kkfKP8lv2mz3ZTbUlgHz8S03N99DU3VVMN%2BqnblvG5CA6LrImm0DAP%2FjjTltChPjVXBSWk4eefCqliM5%2BefrrNajOtV2SmtWH5AF4r8a%2F9doGHDEQ0fMRaMbOU5S%2FOj1dSzq9PnjC1%2Fr3CBjqkAR2z1f4vcZ%2FW4ZRCs%2B1hiq4aaYBvwR%2FA%2FAbl5W1g6hVJGiHhKPWwkLdv4CxEVv6NxQW05forxQu6VMnCn%2Fy3PGcjhDK2pm%2FXgS7T5dTkiElrOMvwk8yFA%2BVW%2BeiG%2FRI3iSmF4RtuNkb5bpEWsLp3na%2F40ax94GdyrLQho8FXlwf2LvrUx9ZZfvOETQYTTCTBQucz%2B33Oq5GDPE7AolebQTR%2BaC6Y&X-Amz-Signature=a8a2432290a76910f1e52e0c7adba0f10ab165d32d3764fcc6cb493e43d5da86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I44ZIEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC05vyjFi70Ds85I074EEWsWA4PLAu1dfdssNUKXIol2QIhAPtRnpGnXgS5S91TdvsnwZQi5OtQRi7ugMw2Kkigvg9jKv8DCFMQABoMNjM3NDIzMTgzODA1IgyUarmFkIRW7xrTgqwq3AN07QgU2HWnjueMSIBRdrrHzxnb9zd09T4urTIjwKgdql3ttCyAMAfk0QirS%2BUMTB%2BtuGHi6ptofdcQylYrrbq6He9sNE7hhOL49Peo21xNm0KVBMfereU5%2FNavKiDdiPI%2FXKvZlKUaP8T0I69ixFyLeIftwKGAzwEGAVS5ZR1CKEXdVT53uTHEcLTMiPZXFdhT64OrQ0EDEo%2FABL%2BjBKnlT7iEYaPNH1BfDo73xXlQarQycQgjLD%2FYdcXa00SxtpxAoJ3puSEnJpPOFsnupyojSwhtP0PNDOEn9%2Byz4EwWObethN%2B15zmIEPdGDf%2Be4KIokIxgx4cDvYYzHS4EQgCs3f3xSyv0YHdwHu%2BGq8Gx5KbaIhNx%2BGiJy0GlMZDF5qDFITLcX8%2FKoAHiLXz8OESHM9hOVC2qfNbAoe%2BaLdhBeLg6xciKbT81ZjvPqCJRL3zdX4xDE81oxqxNQ3n3t8nwlS3AMEm4SthNGh7nJOmtBaWSTbpMS9kkfKP8lv2mz3ZTbUlgHz8S03N99DU3VVMN%2BqnblvG5CA6LrImm0DAP%2FjjTltChPjVXBSWk4eefCqliM5%2BefrrNajOtV2SmtWH5AF4r8a%2F9doGHDEQ0fMRaMbOU5S%2FOj1dSzq9PnjC1%2Fr3CBjqkAR2z1f4vcZ%2FW4ZRCs%2B1hiq4aaYBvwR%2FA%2FAbl5W1g6hVJGiHhKPWwkLdv4CxEVv6NxQW05forxQu6VMnCn%2Fy3PGcjhDK2pm%2FXgS7T5dTkiElrOMvwk8yFA%2BVW%2BeiG%2FRI3iSmF4RtuNkb5bpEWsLp3na%2F40ax94GdyrLQho8FXlwf2LvrUx9ZZfvOETQYTTCTBQucz%2B33Oq5GDPE7AolebQTR%2BaC6Y&X-Amz-Signature=3c36548be35d37b6db8f39e5b78295a6ae0d1c9d993e143492e347e9da76979d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
