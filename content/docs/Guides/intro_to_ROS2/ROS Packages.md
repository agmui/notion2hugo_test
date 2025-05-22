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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZ2QIKW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDn8Ar%2F3YCyKd%2BpV8HBcsEYNoeFPBTw8%2FzCK4G4wJSE9QIhAKYgRZbWvpI%2BOj%2BxKlkgUL7kAYshorDNn3kjBMDpmgFnKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyipZZc82NgDQ8wdyoq3ANID0V%2Fdg3NWNf1Zi%2F3Yf09%2FjuiR2pgX2cMTcg%2F9DLPMLFxhLdMmo743aLZx%2FvubnLVjHIZgrWT%2BrC01wQrEitJeUJNg1nIsBifElGkzO%2F%2FId3PO6MTEt8AbRwigAcqeNx1rYcdAcRKGIfFLcWsYz3WO%2FtaXMgWwf2jTxrT4Ohi9LYAvRBpkYrIcd3htvWRk3raiSYBGBWBcZScibd057Hf36q9Z4a5C5H5Srb1%2BhpQehsaXPK4AQfZFFtFpuVKqPSvq7R9woYWk%2FSGtbA5%2FV%2BLZN3tRZPqFrf5Dp4XCdeeHklE6ho5J%2FLyYEW3qXx43uCgXLkYOOzdQSJ8S04nVPdCpGA1xVhsYr%2BGaGr1bAu%2BThVCm5SkGKJMD3lvhFrfeSIHRxO6%2BQixaSBh5gu%2BLb%2BOVg%2Fw9eeDkulQcKwfra7FM6cNTzHGcyEmCnVyh8%2BBlb7LsORosUmXNqz0zURGBLRix4lT0FnRAnpexuZOaOmLJIUKgqmGBI4wLv9hrv7vqwTMo%2BApKyIO35NZRKUCQlpG6975RDm%2FdgMTdqHc99q%2BEh%2Ft39LeiwC2AXOZ%2F931PX10FhgmzfvkDjLG1v4YE55YAkyvQHfDnJ4WoP%2BspjVL2tZ%2BEdud1C1R%2BNqCCDC54rzBBjqkAavJ%2BEqtBFxxyg4z1eGcrs7rvrt0un7yfIBy1St%2BTfB1YCI6XaZRbH35mOBvaH1Xrq5VTXctv4V8kyiBAlqp8tI%2FHG7N1Dxh1YWokBdOWnLQMD5EyL4LWKEVShtcRNR4Yl7TJaQ2TxKex0Dj5HV7zsTo%2BbjwIEf1ZkJDHSbjhONteiXr54ybNjXTj%2FLNJMRMWhkKQqaQGEjbLoZkR4B3igijnfbO&X-Amz-Signature=0f505503807d1ecc718253a85c8ed39ae1eafa3a076f387a2737f1d697a7a0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZ2QIKW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDn8Ar%2F3YCyKd%2BpV8HBcsEYNoeFPBTw8%2FzCK4G4wJSE9QIhAKYgRZbWvpI%2BOj%2BxKlkgUL7kAYshorDNn3kjBMDpmgFnKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyipZZc82NgDQ8wdyoq3ANID0V%2Fdg3NWNf1Zi%2F3Yf09%2FjuiR2pgX2cMTcg%2F9DLPMLFxhLdMmo743aLZx%2FvubnLVjHIZgrWT%2BrC01wQrEitJeUJNg1nIsBifElGkzO%2F%2FId3PO6MTEt8AbRwigAcqeNx1rYcdAcRKGIfFLcWsYz3WO%2FtaXMgWwf2jTxrT4Ohi9LYAvRBpkYrIcd3htvWRk3raiSYBGBWBcZScibd057Hf36q9Z4a5C5H5Srb1%2BhpQehsaXPK4AQfZFFtFpuVKqPSvq7R9woYWk%2FSGtbA5%2FV%2BLZN3tRZPqFrf5Dp4XCdeeHklE6ho5J%2FLyYEW3qXx43uCgXLkYOOzdQSJ8S04nVPdCpGA1xVhsYr%2BGaGr1bAu%2BThVCm5SkGKJMD3lvhFrfeSIHRxO6%2BQixaSBh5gu%2BLb%2BOVg%2Fw9eeDkulQcKwfra7FM6cNTzHGcyEmCnVyh8%2BBlb7LsORosUmXNqz0zURGBLRix4lT0FnRAnpexuZOaOmLJIUKgqmGBI4wLv9hrv7vqwTMo%2BApKyIO35NZRKUCQlpG6975RDm%2FdgMTdqHc99q%2BEh%2Ft39LeiwC2AXOZ%2F931PX10FhgmzfvkDjLG1v4YE55YAkyvQHfDnJ4WoP%2BspjVL2tZ%2BEdud1C1R%2BNqCCDC54rzBBjqkAavJ%2BEqtBFxxyg4z1eGcrs7rvrt0un7yfIBy1St%2BTfB1YCI6XaZRbH35mOBvaH1Xrq5VTXctv4V8kyiBAlqp8tI%2FHG7N1Dxh1YWokBdOWnLQMD5EyL4LWKEVShtcRNR4Yl7TJaQ2TxKex0Dj5HV7zsTo%2BbjwIEf1ZkJDHSbjhONteiXr54ybNjXTj%2FLNJMRMWhkKQqaQGEjbLoZkR4B3igijnfbO&X-Amz-Signature=00b2fda94ae9ac5e117db32dcf3a6b87cb3b0035850f72198981eddb2c597c53&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZ2QIKW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDn8Ar%2F3YCyKd%2BpV8HBcsEYNoeFPBTw8%2FzCK4G4wJSE9QIhAKYgRZbWvpI%2BOj%2BxKlkgUL7kAYshorDNn3kjBMDpmgFnKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyipZZc82NgDQ8wdyoq3ANID0V%2Fdg3NWNf1Zi%2F3Yf09%2FjuiR2pgX2cMTcg%2F9DLPMLFxhLdMmo743aLZx%2FvubnLVjHIZgrWT%2BrC01wQrEitJeUJNg1nIsBifElGkzO%2F%2FId3PO6MTEt8AbRwigAcqeNx1rYcdAcRKGIfFLcWsYz3WO%2FtaXMgWwf2jTxrT4Ohi9LYAvRBpkYrIcd3htvWRk3raiSYBGBWBcZScibd057Hf36q9Z4a5C5H5Srb1%2BhpQehsaXPK4AQfZFFtFpuVKqPSvq7R9woYWk%2FSGtbA5%2FV%2BLZN3tRZPqFrf5Dp4XCdeeHklE6ho5J%2FLyYEW3qXx43uCgXLkYOOzdQSJ8S04nVPdCpGA1xVhsYr%2BGaGr1bAu%2BThVCm5SkGKJMD3lvhFrfeSIHRxO6%2BQixaSBh5gu%2BLb%2BOVg%2Fw9eeDkulQcKwfra7FM6cNTzHGcyEmCnVyh8%2BBlb7LsORosUmXNqz0zURGBLRix4lT0FnRAnpexuZOaOmLJIUKgqmGBI4wLv9hrv7vqwTMo%2BApKyIO35NZRKUCQlpG6975RDm%2FdgMTdqHc99q%2BEh%2Ft39LeiwC2AXOZ%2F931PX10FhgmzfvkDjLG1v4YE55YAkyvQHfDnJ4WoP%2BspjVL2tZ%2BEdud1C1R%2BNqCCDC54rzBBjqkAavJ%2BEqtBFxxyg4z1eGcrs7rvrt0un7yfIBy1St%2BTfB1YCI6XaZRbH35mOBvaH1Xrq5VTXctv4V8kyiBAlqp8tI%2FHG7N1Dxh1YWokBdOWnLQMD5EyL4LWKEVShtcRNR4Yl7TJaQ2TxKex0Dj5HV7zsTo%2BbjwIEf1ZkJDHSbjhONteiXr54ybNjXTj%2FLNJMRMWhkKQqaQGEjbLoZkR4B3igijnfbO&X-Amz-Signature=b035a946377d2337c08c5a2d4dd8f62121428830dea56f1a2cbbaff7c790254f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZ2QIKW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDn8Ar%2F3YCyKd%2BpV8HBcsEYNoeFPBTw8%2FzCK4G4wJSE9QIhAKYgRZbWvpI%2BOj%2BxKlkgUL7kAYshorDNn3kjBMDpmgFnKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyipZZc82NgDQ8wdyoq3ANID0V%2Fdg3NWNf1Zi%2F3Yf09%2FjuiR2pgX2cMTcg%2F9DLPMLFxhLdMmo743aLZx%2FvubnLVjHIZgrWT%2BrC01wQrEitJeUJNg1nIsBifElGkzO%2F%2FId3PO6MTEt8AbRwigAcqeNx1rYcdAcRKGIfFLcWsYz3WO%2FtaXMgWwf2jTxrT4Ohi9LYAvRBpkYrIcd3htvWRk3raiSYBGBWBcZScibd057Hf36q9Z4a5C5H5Srb1%2BhpQehsaXPK4AQfZFFtFpuVKqPSvq7R9woYWk%2FSGtbA5%2FV%2BLZN3tRZPqFrf5Dp4XCdeeHklE6ho5J%2FLyYEW3qXx43uCgXLkYOOzdQSJ8S04nVPdCpGA1xVhsYr%2BGaGr1bAu%2BThVCm5SkGKJMD3lvhFrfeSIHRxO6%2BQixaSBh5gu%2BLb%2BOVg%2Fw9eeDkulQcKwfra7FM6cNTzHGcyEmCnVyh8%2BBlb7LsORosUmXNqz0zURGBLRix4lT0FnRAnpexuZOaOmLJIUKgqmGBI4wLv9hrv7vqwTMo%2BApKyIO35NZRKUCQlpG6975RDm%2FdgMTdqHc99q%2BEh%2Ft39LeiwC2AXOZ%2F931PX10FhgmzfvkDjLG1v4YE55YAkyvQHfDnJ4WoP%2BspjVL2tZ%2BEdud1C1R%2BNqCCDC54rzBBjqkAavJ%2BEqtBFxxyg4z1eGcrs7rvrt0un7yfIBy1St%2BTfB1YCI6XaZRbH35mOBvaH1Xrq5VTXctv4V8kyiBAlqp8tI%2FHG7N1Dxh1YWokBdOWnLQMD5EyL4LWKEVShtcRNR4Yl7TJaQ2TxKex0Dj5HV7zsTo%2BbjwIEf1ZkJDHSbjhONteiXr54ybNjXTj%2FLNJMRMWhkKQqaQGEjbLoZkR4B3igijnfbO&X-Amz-Signature=db1bdaca7c50170c0e279635854a748160da269fef1386364798b6d2884dbbf1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZ2QIKW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDn8Ar%2F3YCyKd%2BpV8HBcsEYNoeFPBTw8%2FzCK4G4wJSE9QIhAKYgRZbWvpI%2BOj%2BxKlkgUL7kAYshorDNn3kjBMDpmgFnKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyipZZc82NgDQ8wdyoq3ANID0V%2Fdg3NWNf1Zi%2F3Yf09%2FjuiR2pgX2cMTcg%2F9DLPMLFxhLdMmo743aLZx%2FvubnLVjHIZgrWT%2BrC01wQrEitJeUJNg1nIsBifElGkzO%2F%2FId3PO6MTEt8AbRwigAcqeNx1rYcdAcRKGIfFLcWsYz3WO%2FtaXMgWwf2jTxrT4Ohi9LYAvRBpkYrIcd3htvWRk3raiSYBGBWBcZScibd057Hf36q9Z4a5C5H5Srb1%2BhpQehsaXPK4AQfZFFtFpuVKqPSvq7R9woYWk%2FSGtbA5%2FV%2BLZN3tRZPqFrf5Dp4XCdeeHklE6ho5J%2FLyYEW3qXx43uCgXLkYOOzdQSJ8S04nVPdCpGA1xVhsYr%2BGaGr1bAu%2BThVCm5SkGKJMD3lvhFrfeSIHRxO6%2BQixaSBh5gu%2BLb%2BOVg%2Fw9eeDkulQcKwfra7FM6cNTzHGcyEmCnVyh8%2BBlb7LsORosUmXNqz0zURGBLRix4lT0FnRAnpexuZOaOmLJIUKgqmGBI4wLv9hrv7vqwTMo%2BApKyIO35NZRKUCQlpG6975RDm%2FdgMTdqHc99q%2BEh%2Ft39LeiwC2AXOZ%2F931PX10FhgmzfvkDjLG1v4YE55YAkyvQHfDnJ4WoP%2BspjVL2tZ%2BEdud1C1R%2BNqCCDC54rzBBjqkAavJ%2BEqtBFxxyg4z1eGcrs7rvrt0un7yfIBy1St%2BTfB1YCI6XaZRbH35mOBvaH1Xrq5VTXctv4V8kyiBAlqp8tI%2FHG7N1Dxh1YWokBdOWnLQMD5EyL4LWKEVShtcRNR4Yl7TJaQ2TxKex0Dj5HV7zsTo%2BbjwIEf1ZkJDHSbjhONteiXr54ybNjXTj%2FLNJMRMWhkKQqaQGEjbLoZkR4B3igijnfbO&X-Amz-Signature=606dd7b23fedd56dcbfbe9d261849c120b651bcfdd941a0eeada9d95700f8091&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZ2QIKW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDn8Ar%2F3YCyKd%2BpV8HBcsEYNoeFPBTw8%2FzCK4G4wJSE9QIhAKYgRZbWvpI%2BOj%2BxKlkgUL7kAYshorDNn3kjBMDpmgFnKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyipZZc82NgDQ8wdyoq3ANID0V%2Fdg3NWNf1Zi%2F3Yf09%2FjuiR2pgX2cMTcg%2F9DLPMLFxhLdMmo743aLZx%2FvubnLVjHIZgrWT%2BrC01wQrEitJeUJNg1nIsBifElGkzO%2F%2FId3PO6MTEt8AbRwigAcqeNx1rYcdAcRKGIfFLcWsYz3WO%2FtaXMgWwf2jTxrT4Ohi9LYAvRBpkYrIcd3htvWRk3raiSYBGBWBcZScibd057Hf36q9Z4a5C5H5Srb1%2BhpQehsaXPK4AQfZFFtFpuVKqPSvq7R9woYWk%2FSGtbA5%2FV%2BLZN3tRZPqFrf5Dp4XCdeeHklE6ho5J%2FLyYEW3qXx43uCgXLkYOOzdQSJ8S04nVPdCpGA1xVhsYr%2BGaGr1bAu%2BThVCm5SkGKJMD3lvhFrfeSIHRxO6%2BQixaSBh5gu%2BLb%2BOVg%2Fw9eeDkulQcKwfra7FM6cNTzHGcyEmCnVyh8%2BBlb7LsORosUmXNqz0zURGBLRix4lT0FnRAnpexuZOaOmLJIUKgqmGBI4wLv9hrv7vqwTMo%2BApKyIO35NZRKUCQlpG6975RDm%2FdgMTdqHc99q%2BEh%2Ft39LeiwC2AXOZ%2F931PX10FhgmzfvkDjLG1v4YE55YAkyvQHfDnJ4WoP%2BspjVL2tZ%2BEdud1C1R%2BNqCCDC54rzBBjqkAavJ%2BEqtBFxxyg4z1eGcrs7rvrt0un7yfIBy1St%2BTfB1YCI6XaZRbH35mOBvaH1Xrq5VTXctv4V8kyiBAlqp8tI%2FHG7N1Dxh1YWokBdOWnLQMD5EyL4LWKEVShtcRNR4Yl7TJaQ2TxKex0Dj5HV7zsTo%2BbjwIEf1ZkJDHSbjhONteiXr54ybNjXTj%2FLNJMRMWhkKQqaQGEjbLoZkR4B3igijnfbO&X-Amz-Signature=804e88e74c67766727b50fc5c87f7df0d7aca9a013351b01be9b8ea10f72c012&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZ2QIKW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDn8Ar%2F3YCyKd%2BpV8HBcsEYNoeFPBTw8%2FzCK4G4wJSE9QIhAKYgRZbWvpI%2BOj%2BxKlkgUL7kAYshorDNn3kjBMDpmgFnKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyipZZc82NgDQ8wdyoq3ANID0V%2Fdg3NWNf1Zi%2F3Yf09%2FjuiR2pgX2cMTcg%2F9DLPMLFxhLdMmo743aLZx%2FvubnLVjHIZgrWT%2BrC01wQrEitJeUJNg1nIsBifElGkzO%2F%2FId3PO6MTEt8AbRwigAcqeNx1rYcdAcRKGIfFLcWsYz3WO%2FtaXMgWwf2jTxrT4Ohi9LYAvRBpkYrIcd3htvWRk3raiSYBGBWBcZScibd057Hf36q9Z4a5C5H5Srb1%2BhpQehsaXPK4AQfZFFtFpuVKqPSvq7R9woYWk%2FSGtbA5%2FV%2BLZN3tRZPqFrf5Dp4XCdeeHklE6ho5J%2FLyYEW3qXx43uCgXLkYOOzdQSJ8S04nVPdCpGA1xVhsYr%2BGaGr1bAu%2BThVCm5SkGKJMD3lvhFrfeSIHRxO6%2BQixaSBh5gu%2BLb%2BOVg%2Fw9eeDkulQcKwfra7FM6cNTzHGcyEmCnVyh8%2BBlb7LsORosUmXNqz0zURGBLRix4lT0FnRAnpexuZOaOmLJIUKgqmGBI4wLv9hrv7vqwTMo%2BApKyIO35NZRKUCQlpG6975RDm%2FdgMTdqHc99q%2BEh%2Ft39LeiwC2AXOZ%2F931PX10FhgmzfvkDjLG1v4YE55YAkyvQHfDnJ4WoP%2BspjVL2tZ%2BEdud1C1R%2BNqCCDC54rzBBjqkAavJ%2BEqtBFxxyg4z1eGcrs7rvrt0un7yfIBy1St%2BTfB1YCI6XaZRbH35mOBvaH1Xrq5VTXctv4V8kyiBAlqp8tI%2FHG7N1Dxh1YWokBdOWnLQMD5EyL4LWKEVShtcRNR4Yl7TJaQ2TxKex0Dj5HV7zsTo%2BbjwIEf1ZkJDHSbjhONteiXr54ybNjXTj%2FLNJMRMWhkKQqaQGEjbLoZkR4B3igijnfbO&X-Amz-Signature=b001c4b40c3e9bd02963d0adacbc37ce60fcc1daee84b7c0b12aa2b23ec89813&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
