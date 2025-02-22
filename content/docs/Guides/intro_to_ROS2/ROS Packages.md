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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76MJAWR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxQY9iJx4oa2194q8%2FwsV2tOn2rxzfjvQKEowc%2FKBzEAiB123vy%2B8hdDfnUGgrB1H6eWn9IcsTQuIyMvTSVGYVyEiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM639kQWPKG2PoUzoOKtwD24sqzRspL1Upy9LOhz5%2FzwRExvQZOJkDU1cjrqL6CmoiUYmIxnPnjqiT77KckFhfavFk63igYIP9OlbpnK3WM8lrbT%2B096jFJqCZVtQslqIWhKZ62mju%2BUJoaSuyhH%2Fu2t1j8W%2BHlb76UfFT6ytaES6hrMMHCPiI7s%2F%2BWqtmHVe9dCacqzL%2FR9fh9EoUcI5nU%2BLuhC9uj9%2Fv3NlyDQtur8gVZZYQLrXrsMZNRI0tEfCuAP%2FipFDyScCbUghhUrPRjsfPCYyWpHONkGMl2nxA%2FFn1zRrLvd526uqOk74N8oWZZewtRjzMH2mF0wDQ80UeZHL6TCob%2Fq5G3vPHq4E2Byrz66hC5LcLd5ZjRZ3F065i%2BHiVrCzxgk0XAJGq2PgJ4R568pcVsPUNNb%2Fa%2FcdXMtNJeyLiaGSoz%2BU1wb%2Feqf%2FeHu0BWmL2kRMULCABBM21u3uM6cAMyMNIhuQmonRn118ITgibsRze1JWCaymke7EIyFe%2FnWTYnT8oOwXhmoRe9%2BiIbdo%2BWLWZYEzDaABOxjCY9Z%2BWS9JWaZq1eZSn4FNRBhzgdk7Fh4vdXWE40HQa5IhBsj%2FiiGPCm4jGUpvvw3OVvikzSzoQ3hbxeMkb%2BaKhpcRVnAqQbhVLfR0wusflvQY6pgF5T6LfFlooykMymrA7DisabUljA3PaWbUbJnO6Sn%2Fvi2SDyiHYky%2FS60IBLcIPiWG%2FxHoiG9C7HQtNC25Pfl2t6v0IjlXXH9sjqkCVdG7NllsBTfU%2FsWK4QaytLAcYvs8Tr13DscwW6tXZIfGejFVIqVaKtjm5B%2BjeNZxsVr1Fy9t%2FLbjziy%2FWYPHuSehEeVrdISov00AHWm9ihr6HBuVhKvbNMW7t&X-Amz-Signature=9871ececbed7c1d163b9418cb7e93fc46293edcc6b9121db4258571f1c87a759&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76MJAWR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxQY9iJx4oa2194q8%2FwsV2tOn2rxzfjvQKEowc%2FKBzEAiB123vy%2B8hdDfnUGgrB1H6eWn9IcsTQuIyMvTSVGYVyEiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM639kQWPKG2PoUzoOKtwD24sqzRspL1Upy9LOhz5%2FzwRExvQZOJkDU1cjrqL6CmoiUYmIxnPnjqiT77KckFhfavFk63igYIP9OlbpnK3WM8lrbT%2B096jFJqCZVtQslqIWhKZ62mju%2BUJoaSuyhH%2Fu2t1j8W%2BHlb76UfFT6ytaES6hrMMHCPiI7s%2F%2BWqtmHVe9dCacqzL%2FR9fh9EoUcI5nU%2BLuhC9uj9%2Fv3NlyDQtur8gVZZYQLrXrsMZNRI0tEfCuAP%2FipFDyScCbUghhUrPRjsfPCYyWpHONkGMl2nxA%2FFn1zRrLvd526uqOk74N8oWZZewtRjzMH2mF0wDQ80UeZHL6TCob%2Fq5G3vPHq4E2Byrz66hC5LcLd5ZjRZ3F065i%2BHiVrCzxgk0XAJGq2PgJ4R568pcVsPUNNb%2Fa%2FcdXMtNJeyLiaGSoz%2BU1wb%2Feqf%2FeHu0BWmL2kRMULCABBM21u3uM6cAMyMNIhuQmonRn118ITgibsRze1JWCaymke7EIyFe%2FnWTYnT8oOwXhmoRe9%2BiIbdo%2BWLWZYEzDaABOxjCY9Z%2BWS9JWaZq1eZSn4FNRBhzgdk7Fh4vdXWE40HQa5IhBsj%2FiiGPCm4jGUpvvw3OVvikzSzoQ3hbxeMkb%2BaKhpcRVnAqQbhVLfR0wusflvQY6pgF5T6LfFlooykMymrA7DisabUljA3PaWbUbJnO6Sn%2Fvi2SDyiHYky%2FS60IBLcIPiWG%2FxHoiG9C7HQtNC25Pfl2t6v0IjlXXH9sjqkCVdG7NllsBTfU%2FsWK4QaytLAcYvs8Tr13DscwW6tXZIfGejFVIqVaKtjm5B%2BjeNZxsVr1Fy9t%2FLbjziy%2FWYPHuSehEeVrdISov00AHWm9ihr6HBuVhKvbNMW7t&X-Amz-Signature=e625f8adc9e4d78212b9d0b1450d1c34a40e5ab7d31263656c48ea7608575414&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76MJAWR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxQY9iJx4oa2194q8%2FwsV2tOn2rxzfjvQKEowc%2FKBzEAiB123vy%2B8hdDfnUGgrB1H6eWn9IcsTQuIyMvTSVGYVyEiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM639kQWPKG2PoUzoOKtwD24sqzRspL1Upy9LOhz5%2FzwRExvQZOJkDU1cjrqL6CmoiUYmIxnPnjqiT77KckFhfavFk63igYIP9OlbpnK3WM8lrbT%2B096jFJqCZVtQslqIWhKZ62mju%2BUJoaSuyhH%2Fu2t1j8W%2BHlb76UfFT6ytaES6hrMMHCPiI7s%2F%2BWqtmHVe9dCacqzL%2FR9fh9EoUcI5nU%2BLuhC9uj9%2Fv3NlyDQtur8gVZZYQLrXrsMZNRI0tEfCuAP%2FipFDyScCbUghhUrPRjsfPCYyWpHONkGMl2nxA%2FFn1zRrLvd526uqOk74N8oWZZewtRjzMH2mF0wDQ80UeZHL6TCob%2Fq5G3vPHq4E2Byrz66hC5LcLd5ZjRZ3F065i%2BHiVrCzxgk0XAJGq2PgJ4R568pcVsPUNNb%2Fa%2FcdXMtNJeyLiaGSoz%2BU1wb%2Feqf%2FeHu0BWmL2kRMULCABBM21u3uM6cAMyMNIhuQmonRn118ITgibsRze1JWCaymke7EIyFe%2FnWTYnT8oOwXhmoRe9%2BiIbdo%2BWLWZYEzDaABOxjCY9Z%2BWS9JWaZq1eZSn4FNRBhzgdk7Fh4vdXWE40HQa5IhBsj%2FiiGPCm4jGUpvvw3OVvikzSzoQ3hbxeMkb%2BaKhpcRVnAqQbhVLfR0wusflvQY6pgF5T6LfFlooykMymrA7DisabUljA3PaWbUbJnO6Sn%2Fvi2SDyiHYky%2FS60IBLcIPiWG%2FxHoiG9C7HQtNC25Pfl2t6v0IjlXXH9sjqkCVdG7NllsBTfU%2FsWK4QaytLAcYvs8Tr13DscwW6tXZIfGejFVIqVaKtjm5B%2BjeNZxsVr1Fy9t%2FLbjziy%2FWYPHuSehEeVrdISov00AHWm9ihr6HBuVhKvbNMW7t&X-Amz-Signature=080e346df32b2ad1447f7ae7d19d11dc311cd5b56583b6c2d85e3a9c30e7620a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76MJAWR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxQY9iJx4oa2194q8%2FwsV2tOn2rxzfjvQKEowc%2FKBzEAiB123vy%2B8hdDfnUGgrB1H6eWn9IcsTQuIyMvTSVGYVyEiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM639kQWPKG2PoUzoOKtwD24sqzRspL1Upy9LOhz5%2FzwRExvQZOJkDU1cjrqL6CmoiUYmIxnPnjqiT77KckFhfavFk63igYIP9OlbpnK3WM8lrbT%2B096jFJqCZVtQslqIWhKZ62mju%2BUJoaSuyhH%2Fu2t1j8W%2BHlb76UfFT6ytaES6hrMMHCPiI7s%2F%2BWqtmHVe9dCacqzL%2FR9fh9EoUcI5nU%2BLuhC9uj9%2Fv3NlyDQtur8gVZZYQLrXrsMZNRI0tEfCuAP%2FipFDyScCbUghhUrPRjsfPCYyWpHONkGMl2nxA%2FFn1zRrLvd526uqOk74N8oWZZewtRjzMH2mF0wDQ80UeZHL6TCob%2Fq5G3vPHq4E2Byrz66hC5LcLd5ZjRZ3F065i%2BHiVrCzxgk0XAJGq2PgJ4R568pcVsPUNNb%2Fa%2FcdXMtNJeyLiaGSoz%2BU1wb%2Feqf%2FeHu0BWmL2kRMULCABBM21u3uM6cAMyMNIhuQmonRn118ITgibsRze1JWCaymke7EIyFe%2FnWTYnT8oOwXhmoRe9%2BiIbdo%2BWLWZYEzDaABOxjCY9Z%2BWS9JWaZq1eZSn4FNRBhzgdk7Fh4vdXWE40HQa5IhBsj%2FiiGPCm4jGUpvvw3OVvikzSzoQ3hbxeMkb%2BaKhpcRVnAqQbhVLfR0wusflvQY6pgF5T6LfFlooykMymrA7DisabUljA3PaWbUbJnO6Sn%2Fvi2SDyiHYky%2FS60IBLcIPiWG%2FxHoiG9C7HQtNC25Pfl2t6v0IjlXXH9sjqkCVdG7NllsBTfU%2FsWK4QaytLAcYvs8Tr13DscwW6tXZIfGejFVIqVaKtjm5B%2BjeNZxsVr1Fy9t%2FLbjziy%2FWYPHuSehEeVrdISov00AHWm9ihr6HBuVhKvbNMW7t&X-Amz-Signature=7b4f80558bb5111698c8df7c5ca5a8d0776951078b099fcc012b959983b807c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76MJAWR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxQY9iJx4oa2194q8%2FwsV2tOn2rxzfjvQKEowc%2FKBzEAiB123vy%2B8hdDfnUGgrB1H6eWn9IcsTQuIyMvTSVGYVyEiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM639kQWPKG2PoUzoOKtwD24sqzRspL1Upy9LOhz5%2FzwRExvQZOJkDU1cjrqL6CmoiUYmIxnPnjqiT77KckFhfavFk63igYIP9OlbpnK3WM8lrbT%2B096jFJqCZVtQslqIWhKZ62mju%2BUJoaSuyhH%2Fu2t1j8W%2BHlb76UfFT6ytaES6hrMMHCPiI7s%2F%2BWqtmHVe9dCacqzL%2FR9fh9EoUcI5nU%2BLuhC9uj9%2Fv3NlyDQtur8gVZZYQLrXrsMZNRI0tEfCuAP%2FipFDyScCbUghhUrPRjsfPCYyWpHONkGMl2nxA%2FFn1zRrLvd526uqOk74N8oWZZewtRjzMH2mF0wDQ80UeZHL6TCob%2Fq5G3vPHq4E2Byrz66hC5LcLd5ZjRZ3F065i%2BHiVrCzxgk0XAJGq2PgJ4R568pcVsPUNNb%2Fa%2FcdXMtNJeyLiaGSoz%2BU1wb%2Feqf%2FeHu0BWmL2kRMULCABBM21u3uM6cAMyMNIhuQmonRn118ITgibsRze1JWCaymke7EIyFe%2FnWTYnT8oOwXhmoRe9%2BiIbdo%2BWLWZYEzDaABOxjCY9Z%2BWS9JWaZq1eZSn4FNRBhzgdk7Fh4vdXWE40HQa5IhBsj%2FiiGPCm4jGUpvvw3OVvikzSzoQ3hbxeMkb%2BaKhpcRVnAqQbhVLfR0wusflvQY6pgF5T6LfFlooykMymrA7DisabUljA3PaWbUbJnO6Sn%2Fvi2SDyiHYky%2FS60IBLcIPiWG%2FxHoiG9C7HQtNC25Pfl2t6v0IjlXXH9sjqkCVdG7NllsBTfU%2FsWK4QaytLAcYvs8Tr13DscwW6tXZIfGejFVIqVaKtjm5B%2BjeNZxsVr1Fy9t%2FLbjziy%2FWYPHuSehEeVrdISov00AHWm9ihr6HBuVhKvbNMW7t&X-Amz-Signature=ee81597a7f36b8482217f17741b8aa6ad0a28f3f34721b208d77e40e96b5da40&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76MJAWR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxQY9iJx4oa2194q8%2FwsV2tOn2rxzfjvQKEowc%2FKBzEAiB123vy%2B8hdDfnUGgrB1H6eWn9IcsTQuIyMvTSVGYVyEiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM639kQWPKG2PoUzoOKtwD24sqzRspL1Upy9LOhz5%2FzwRExvQZOJkDU1cjrqL6CmoiUYmIxnPnjqiT77KckFhfavFk63igYIP9OlbpnK3WM8lrbT%2B096jFJqCZVtQslqIWhKZ62mju%2BUJoaSuyhH%2Fu2t1j8W%2BHlb76UfFT6ytaES6hrMMHCPiI7s%2F%2BWqtmHVe9dCacqzL%2FR9fh9EoUcI5nU%2BLuhC9uj9%2Fv3NlyDQtur8gVZZYQLrXrsMZNRI0tEfCuAP%2FipFDyScCbUghhUrPRjsfPCYyWpHONkGMl2nxA%2FFn1zRrLvd526uqOk74N8oWZZewtRjzMH2mF0wDQ80UeZHL6TCob%2Fq5G3vPHq4E2Byrz66hC5LcLd5ZjRZ3F065i%2BHiVrCzxgk0XAJGq2PgJ4R568pcVsPUNNb%2Fa%2FcdXMtNJeyLiaGSoz%2BU1wb%2Feqf%2FeHu0BWmL2kRMULCABBM21u3uM6cAMyMNIhuQmonRn118ITgibsRze1JWCaymke7EIyFe%2FnWTYnT8oOwXhmoRe9%2BiIbdo%2BWLWZYEzDaABOxjCY9Z%2BWS9JWaZq1eZSn4FNRBhzgdk7Fh4vdXWE40HQa5IhBsj%2FiiGPCm4jGUpvvw3OVvikzSzoQ3hbxeMkb%2BaKhpcRVnAqQbhVLfR0wusflvQY6pgF5T6LfFlooykMymrA7DisabUljA3PaWbUbJnO6Sn%2Fvi2SDyiHYky%2FS60IBLcIPiWG%2FxHoiG9C7HQtNC25Pfl2t6v0IjlXXH9sjqkCVdG7NllsBTfU%2FsWK4QaytLAcYvs8Tr13DscwW6tXZIfGejFVIqVaKtjm5B%2BjeNZxsVr1Fy9t%2FLbjziy%2FWYPHuSehEeVrdISov00AHWm9ihr6HBuVhKvbNMW7t&X-Amz-Signature=5f9e7637db4bbd6f5b358469f209cb1d5c595fe799c3d7f969890060f58ea27f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76MJAWR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxQY9iJx4oa2194q8%2FwsV2tOn2rxzfjvQKEowc%2FKBzEAiB123vy%2B8hdDfnUGgrB1H6eWn9IcsTQuIyMvTSVGYVyEiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM639kQWPKG2PoUzoOKtwD24sqzRspL1Upy9LOhz5%2FzwRExvQZOJkDU1cjrqL6CmoiUYmIxnPnjqiT77KckFhfavFk63igYIP9OlbpnK3WM8lrbT%2B096jFJqCZVtQslqIWhKZ62mju%2BUJoaSuyhH%2Fu2t1j8W%2BHlb76UfFT6ytaES6hrMMHCPiI7s%2F%2BWqtmHVe9dCacqzL%2FR9fh9EoUcI5nU%2BLuhC9uj9%2Fv3NlyDQtur8gVZZYQLrXrsMZNRI0tEfCuAP%2FipFDyScCbUghhUrPRjsfPCYyWpHONkGMl2nxA%2FFn1zRrLvd526uqOk74N8oWZZewtRjzMH2mF0wDQ80UeZHL6TCob%2Fq5G3vPHq4E2Byrz66hC5LcLd5ZjRZ3F065i%2BHiVrCzxgk0XAJGq2PgJ4R568pcVsPUNNb%2Fa%2FcdXMtNJeyLiaGSoz%2BU1wb%2Feqf%2FeHu0BWmL2kRMULCABBM21u3uM6cAMyMNIhuQmonRn118ITgibsRze1JWCaymke7EIyFe%2FnWTYnT8oOwXhmoRe9%2BiIbdo%2BWLWZYEzDaABOxjCY9Z%2BWS9JWaZq1eZSn4FNRBhzgdk7Fh4vdXWE40HQa5IhBsj%2FiiGPCm4jGUpvvw3OVvikzSzoQ3hbxeMkb%2BaKhpcRVnAqQbhVLfR0wusflvQY6pgF5T6LfFlooykMymrA7DisabUljA3PaWbUbJnO6Sn%2Fvi2SDyiHYky%2FS60IBLcIPiWG%2FxHoiG9C7HQtNC25Pfl2t6v0IjlXXH9sjqkCVdG7NllsBTfU%2FsWK4QaytLAcYvs8Tr13DscwW6tXZIfGejFVIqVaKtjm5B%2BjeNZxsVr1Fy9t%2FLbjziy%2FWYPHuSehEeVrdISov00AHWm9ihr6HBuVhKvbNMW7t&X-Amz-Signature=e6502ed421e3c5af82e67644ef81a04eb76603cd578cbdd53f3772d4a5cde770&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
