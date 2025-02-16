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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677L6C6TR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEgqaw6UTGecDUWN8OoqAWsWiH3Z8WgYVoqXpyE0KwwdAiEAylEVZkO6igr%2Fm9Xx0rdVcFbtLdxf%2Bc4I1j0aq62LS3Qq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKW8DZ2aoRXQnaCOSSrcAzKM%2Bf4xw7UE%2FkrymJyk5a617a20kP738JznKJbA5H7RudslBRxwxRWl%2BWsQ2Y96B6G7Z%2BO1MykmPOhOYuHNhyT%2BJYfDP7gm10UCJs3GHMQhzHa58bVW9IpSrl3%2BTZNvNPmQX1qiEaScMfcqVAJVgielI8QGtDnMt%2B0bMYRJvzBkRZbG4MMEmLG4%2BgAWJl%2Btlnhcsq27h7flJIJt5iSLPnlthhVrRnYALJ4Jk7zAaDFRluBQ%2B%2FYOaNqg812RHHrSuclhKfcKEzGGIAdNrcJqRGF8t2HTCJGJiHAyC8n9Ok%2Fm1UiaxS7Kj1nx19JlZgQ8vCKaNHft7dKR1j4YEUpKLUBtlBEJJ5IkV6twA5WhtAT9uona0x2k7Jk4rmiHYrKgKNvhs5juWeH8MhqAW0KAuiCPhWKnmFkqSuCUxhahdSLBKfALFKKm0587XvMYUaqhL8b982TSunjzjN2L5vNU3P7KGPuut4jUwkQTT%2F0ltLH%2B2YBsYC1P6kPXi11VqBCVHYoUh8Wuf2BMongm5DpDrv8KKPo4RhCOCVsTEp4D39Ven9fWSWbpocwXSJ1HBuFsT%2FoRf6xxlOH8F6%2Bo0sPmgJTx2bWYGma3KHjJoE%2B%2BisDNh7u1NXHBsSvjdBCkMNj9xb0GOqUB7hszGc%2FowVH4BBz90mLg0ItrQiOE4qFYXoCwlimkybrWL4ip8pIiaXWpwq02EBiFJntFMP%2B2ItUk%2BYhHd8Mnj8Drm24KYAPf7RzlpcjA2lMLv6L1nE28m9Yz3pMeDU%2F%2FdfvIWljvHJ6FyLRbuZjjPYzVs8%2Fbg4AolMRGjbpT%2BNrp4yTT6j3FKsMoHF9788f28eP6XAFto8CTwR9S7RzBIWyfZpd8&X-Amz-Signature=4dcac1a977c2e53bba4be6c39af947560fdff93a66913e5b1e1e2b764a6e3356&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677L6C6TR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEgqaw6UTGecDUWN8OoqAWsWiH3Z8WgYVoqXpyE0KwwdAiEAylEVZkO6igr%2Fm9Xx0rdVcFbtLdxf%2Bc4I1j0aq62LS3Qq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKW8DZ2aoRXQnaCOSSrcAzKM%2Bf4xw7UE%2FkrymJyk5a617a20kP738JznKJbA5H7RudslBRxwxRWl%2BWsQ2Y96B6G7Z%2BO1MykmPOhOYuHNhyT%2BJYfDP7gm10UCJs3GHMQhzHa58bVW9IpSrl3%2BTZNvNPmQX1qiEaScMfcqVAJVgielI8QGtDnMt%2B0bMYRJvzBkRZbG4MMEmLG4%2BgAWJl%2Btlnhcsq27h7flJIJt5iSLPnlthhVrRnYALJ4Jk7zAaDFRluBQ%2B%2FYOaNqg812RHHrSuclhKfcKEzGGIAdNrcJqRGF8t2HTCJGJiHAyC8n9Ok%2Fm1UiaxS7Kj1nx19JlZgQ8vCKaNHft7dKR1j4YEUpKLUBtlBEJJ5IkV6twA5WhtAT9uona0x2k7Jk4rmiHYrKgKNvhs5juWeH8MhqAW0KAuiCPhWKnmFkqSuCUxhahdSLBKfALFKKm0587XvMYUaqhL8b982TSunjzjN2L5vNU3P7KGPuut4jUwkQTT%2F0ltLH%2B2YBsYC1P6kPXi11VqBCVHYoUh8Wuf2BMongm5DpDrv8KKPo4RhCOCVsTEp4D39Ven9fWSWbpocwXSJ1HBuFsT%2FoRf6xxlOH8F6%2Bo0sPmgJTx2bWYGma3KHjJoE%2B%2BisDNh7u1NXHBsSvjdBCkMNj9xb0GOqUB7hszGc%2FowVH4BBz90mLg0ItrQiOE4qFYXoCwlimkybrWL4ip8pIiaXWpwq02EBiFJntFMP%2B2ItUk%2BYhHd8Mnj8Drm24KYAPf7RzlpcjA2lMLv6L1nE28m9Yz3pMeDU%2F%2FdfvIWljvHJ6FyLRbuZjjPYzVs8%2Fbg4AolMRGjbpT%2BNrp4yTT6j3FKsMoHF9788f28eP6XAFto8CTwR9S7RzBIWyfZpd8&X-Amz-Signature=2df14289914981b1dda7e8605b26eec22d72ba7516937df6328542cc92dd2e83&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677L6C6TR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEgqaw6UTGecDUWN8OoqAWsWiH3Z8WgYVoqXpyE0KwwdAiEAylEVZkO6igr%2Fm9Xx0rdVcFbtLdxf%2Bc4I1j0aq62LS3Qq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKW8DZ2aoRXQnaCOSSrcAzKM%2Bf4xw7UE%2FkrymJyk5a617a20kP738JznKJbA5H7RudslBRxwxRWl%2BWsQ2Y96B6G7Z%2BO1MykmPOhOYuHNhyT%2BJYfDP7gm10UCJs3GHMQhzHa58bVW9IpSrl3%2BTZNvNPmQX1qiEaScMfcqVAJVgielI8QGtDnMt%2B0bMYRJvzBkRZbG4MMEmLG4%2BgAWJl%2Btlnhcsq27h7flJIJt5iSLPnlthhVrRnYALJ4Jk7zAaDFRluBQ%2B%2FYOaNqg812RHHrSuclhKfcKEzGGIAdNrcJqRGF8t2HTCJGJiHAyC8n9Ok%2Fm1UiaxS7Kj1nx19JlZgQ8vCKaNHft7dKR1j4YEUpKLUBtlBEJJ5IkV6twA5WhtAT9uona0x2k7Jk4rmiHYrKgKNvhs5juWeH8MhqAW0KAuiCPhWKnmFkqSuCUxhahdSLBKfALFKKm0587XvMYUaqhL8b982TSunjzjN2L5vNU3P7KGPuut4jUwkQTT%2F0ltLH%2B2YBsYC1P6kPXi11VqBCVHYoUh8Wuf2BMongm5DpDrv8KKPo4RhCOCVsTEp4D39Ven9fWSWbpocwXSJ1HBuFsT%2FoRf6xxlOH8F6%2Bo0sPmgJTx2bWYGma3KHjJoE%2B%2BisDNh7u1NXHBsSvjdBCkMNj9xb0GOqUB7hszGc%2FowVH4BBz90mLg0ItrQiOE4qFYXoCwlimkybrWL4ip8pIiaXWpwq02EBiFJntFMP%2B2ItUk%2BYhHd8Mnj8Drm24KYAPf7RzlpcjA2lMLv6L1nE28m9Yz3pMeDU%2F%2FdfvIWljvHJ6FyLRbuZjjPYzVs8%2Fbg4AolMRGjbpT%2BNrp4yTT6j3FKsMoHF9788f28eP6XAFto8CTwR9S7RzBIWyfZpd8&X-Amz-Signature=07b098565f85e2f1227ef04df5d4500a74b071419cc38aa78864fd6b46b19905&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677L6C6TR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEgqaw6UTGecDUWN8OoqAWsWiH3Z8WgYVoqXpyE0KwwdAiEAylEVZkO6igr%2Fm9Xx0rdVcFbtLdxf%2Bc4I1j0aq62LS3Qq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKW8DZ2aoRXQnaCOSSrcAzKM%2Bf4xw7UE%2FkrymJyk5a617a20kP738JznKJbA5H7RudslBRxwxRWl%2BWsQ2Y96B6G7Z%2BO1MykmPOhOYuHNhyT%2BJYfDP7gm10UCJs3GHMQhzHa58bVW9IpSrl3%2BTZNvNPmQX1qiEaScMfcqVAJVgielI8QGtDnMt%2B0bMYRJvzBkRZbG4MMEmLG4%2BgAWJl%2Btlnhcsq27h7flJIJt5iSLPnlthhVrRnYALJ4Jk7zAaDFRluBQ%2B%2FYOaNqg812RHHrSuclhKfcKEzGGIAdNrcJqRGF8t2HTCJGJiHAyC8n9Ok%2Fm1UiaxS7Kj1nx19JlZgQ8vCKaNHft7dKR1j4YEUpKLUBtlBEJJ5IkV6twA5WhtAT9uona0x2k7Jk4rmiHYrKgKNvhs5juWeH8MhqAW0KAuiCPhWKnmFkqSuCUxhahdSLBKfALFKKm0587XvMYUaqhL8b982TSunjzjN2L5vNU3P7KGPuut4jUwkQTT%2F0ltLH%2B2YBsYC1P6kPXi11VqBCVHYoUh8Wuf2BMongm5DpDrv8KKPo4RhCOCVsTEp4D39Ven9fWSWbpocwXSJ1HBuFsT%2FoRf6xxlOH8F6%2Bo0sPmgJTx2bWYGma3KHjJoE%2B%2BisDNh7u1NXHBsSvjdBCkMNj9xb0GOqUB7hszGc%2FowVH4BBz90mLg0ItrQiOE4qFYXoCwlimkybrWL4ip8pIiaXWpwq02EBiFJntFMP%2B2ItUk%2BYhHd8Mnj8Drm24KYAPf7RzlpcjA2lMLv6L1nE28m9Yz3pMeDU%2F%2FdfvIWljvHJ6FyLRbuZjjPYzVs8%2Fbg4AolMRGjbpT%2BNrp4yTT6j3FKsMoHF9788f28eP6XAFto8CTwR9S7RzBIWyfZpd8&X-Amz-Signature=d06a857f00746cf752a29547ffeff777d9e5316ec4a752487d6f647d71495b69&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677L6C6TR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEgqaw6UTGecDUWN8OoqAWsWiH3Z8WgYVoqXpyE0KwwdAiEAylEVZkO6igr%2Fm9Xx0rdVcFbtLdxf%2Bc4I1j0aq62LS3Qq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKW8DZ2aoRXQnaCOSSrcAzKM%2Bf4xw7UE%2FkrymJyk5a617a20kP738JznKJbA5H7RudslBRxwxRWl%2BWsQ2Y96B6G7Z%2BO1MykmPOhOYuHNhyT%2BJYfDP7gm10UCJs3GHMQhzHa58bVW9IpSrl3%2BTZNvNPmQX1qiEaScMfcqVAJVgielI8QGtDnMt%2B0bMYRJvzBkRZbG4MMEmLG4%2BgAWJl%2Btlnhcsq27h7flJIJt5iSLPnlthhVrRnYALJ4Jk7zAaDFRluBQ%2B%2FYOaNqg812RHHrSuclhKfcKEzGGIAdNrcJqRGF8t2HTCJGJiHAyC8n9Ok%2Fm1UiaxS7Kj1nx19JlZgQ8vCKaNHft7dKR1j4YEUpKLUBtlBEJJ5IkV6twA5WhtAT9uona0x2k7Jk4rmiHYrKgKNvhs5juWeH8MhqAW0KAuiCPhWKnmFkqSuCUxhahdSLBKfALFKKm0587XvMYUaqhL8b982TSunjzjN2L5vNU3P7KGPuut4jUwkQTT%2F0ltLH%2B2YBsYC1P6kPXi11VqBCVHYoUh8Wuf2BMongm5DpDrv8KKPo4RhCOCVsTEp4D39Ven9fWSWbpocwXSJ1HBuFsT%2FoRf6xxlOH8F6%2Bo0sPmgJTx2bWYGma3KHjJoE%2B%2BisDNh7u1NXHBsSvjdBCkMNj9xb0GOqUB7hszGc%2FowVH4BBz90mLg0ItrQiOE4qFYXoCwlimkybrWL4ip8pIiaXWpwq02EBiFJntFMP%2B2ItUk%2BYhHd8Mnj8Drm24KYAPf7RzlpcjA2lMLv6L1nE28m9Yz3pMeDU%2F%2FdfvIWljvHJ6FyLRbuZjjPYzVs8%2Fbg4AolMRGjbpT%2BNrp4yTT6j3FKsMoHF9788f28eP6XAFto8CTwR9S7RzBIWyfZpd8&X-Amz-Signature=45bf80525e84e81d1ef8f8ab5ef6e45f8ae897d6526a8517bd94b6fd0bd3b21d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677L6C6TR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEgqaw6UTGecDUWN8OoqAWsWiH3Z8WgYVoqXpyE0KwwdAiEAylEVZkO6igr%2Fm9Xx0rdVcFbtLdxf%2Bc4I1j0aq62LS3Qq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKW8DZ2aoRXQnaCOSSrcAzKM%2Bf4xw7UE%2FkrymJyk5a617a20kP738JznKJbA5H7RudslBRxwxRWl%2BWsQ2Y96B6G7Z%2BO1MykmPOhOYuHNhyT%2BJYfDP7gm10UCJs3GHMQhzHa58bVW9IpSrl3%2BTZNvNPmQX1qiEaScMfcqVAJVgielI8QGtDnMt%2B0bMYRJvzBkRZbG4MMEmLG4%2BgAWJl%2Btlnhcsq27h7flJIJt5iSLPnlthhVrRnYALJ4Jk7zAaDFRluBQ%2B%2FYOaNqg812RHHrSuclhKfcKEzGGIAdNrcJqRGF8t2HTCJGJiHAyC8n9Ok%2Fm1UiaxS7Kj1nx19JlZgQ8vCKaNHft7dKR1j4YEUpKLUBtlBEJJ5IkV6twA5WhtAT9uona0x2k7Jk4rmiHYrKgKNvhs5juWeH8MhqAW0KAuiCPhWKnmFkqSuCUxhahdSLBKfALFKKm0587XvMYUaqhL8b982TSunjzjN2L5vNU3P7KGPuut4jUwkQTT%2F0ltLH%2B2YBsYC1P6kPXi11VqBCVHYoUh8Wuf2BMongm5DpDrv8KKPo4RhCOCVsTEp4D39Ven9fWSWbpocwXSJ1HBuFsT%2FoRf6xxlOH8F6%2Bo0sPmgJTx2bWYGma3KHjJoE%2B%2BisDNh7u1NXHBsSvjdBCkMNj9xb0GOqUB7hszGc%2FowVH4BBz90mLg0ItrQiOE4qFYXoCwlimkybrWL4ip8pIiaXWpwq02EBiFJntFMP%2B2ItUk%2BYhHd8Mnj8Drm24KYAPf7RzlpcjA2lMLv6L1nE28m9Yz3pMeDU%2F%2FdfvIWljvHJ6FyLRbuZjjPYzVs8%2Fbg4AolMRGjbpT%2BNrp4yTT6j3FKsMoHF9788f28eP6XAFto8CTwR9S7RzBIWyfZpd8&X-Amz-Signature=58db7dc67af0f1fec175f1c2a2128bcddae3df34cad7449bfbdf554c6b3273c7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677L6C6TR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEgqaw6UTGecDUWN8OoqAWsWiH3Z8WgYVoqXpyE0KwwdAiEAylEVZkO6igr%2Fm9Xx0rdVcFbtLdxf%2Bc4I1j0aq62LS3Qq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKW8DZ2aoRXQnaCOSSrcAzKM%2Bf4xw7UE%2FkrymJyk5a617a20kP738JznKJbA5H7RudslBRxwxRWl%2BWsQ2Y96B6G7Z%2BO1MykmPOhOYuHNhyT%2BJYfDP7gm10UCJs3GHMQhzHa58bVW9IpSrl3%2BTZNvNPmQX1qiEaScMfcqVAJVgielI8QGtDnMt%2B0bMYRJvzBkRZbG4MMEmLG4%2BgAWJl%2Btlnhcsq27h7flJIJt5iSLPnlthhVrRnYALJ4Jk7zAaDFRluBQ%2B%2FYOaNqg812RHHrSuclhKfcKEzGGIAdNrcJqRGF8t2HTCJGJiHAyC8n9Ok%2Fm1UiaxS7Kj1nx19JlZgQ8vCKaNHft7dKR1j4YEUpKLUBtlBEJJ5IkV6twA5WhtAT9uona0x2k7Jk4rmiHYrKgKNvhs5juWeH8MhqAW0KAuiCPhWKnmFkqSuCUxhahdSLBKfALFKKm0587XvMYUaqhL8b982TSunjzjN2L5vNU3P7KGPuut4jUwkQTT%2F0ltLH%2B2YBsYC1P6kPXi11VqBCVHYoUh8Wuf2BMongm5DpDrv8KKPo4RhCOCVsTEp4D39Ven9fWSWbpocwXSJ1HBuFsT%2FoRf6xxlOH8F6%2Bo0sPmgJTx2bWYGma3KHjJoE%2B%2BisDNh7u1NXHBsSvjdBCkMNj9xb0GOqUB7hszGc%2FowVH4BBz90mLg0ItrQiOE4qFYXoCwlimkybrWL4ip8pIiaXWpwq02EBiFJntFMP%2B2ItUk%2BYhHd8Mnj8Drm24KYAPf7RzlpcjA2lMLv6L1nE28m9Yz3pMeDU%2F%2FdfvIWljvHJ6FyLRbuZjjPYzVs8%2Fbg4AolMRGjbpT%2BNrp4yTT6j3FKsMoHF9788f28eP6XAFto8CTwR9S7RzBIWyfZpd8&X-Amz-Signature=6a4c94a5ca23fc098419cf2d5a18c1f49765f1164906afe6d3ecd087487644b2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
