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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7S4HED%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC8Bj8Z%2BjqdFDhQnFK6XjWmsibUHAeFC4mRoK4tDkLf7QIhAJ3W0qrbwjb0MHbMbG3qCBRO9VSu9ZCU0mGVRt1DeVMiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7l1dQJZ9Lvjz5qkMq3AMqM7qth%2F%2BLmQQkjMKARooMRV6gGTMSw%2Fm8Yqulnj1z3I%2F0rJ%2FhwvokFClnfX9ciYfs0xWBYs2YRbDJF4xIyV8Do%2BSM1nzM2FyI6TyRqNDLDu7K1k60gFZeblKbrpaiHfiLn18vUsfeCzJp1cZCEvKcm1m3stpLsiWpX4apYXQ%2FJiV4dCxVI1HybB0epHvp8Mk3LB9wFh61SdpsgFKPaWIloxEounwAs7WeFDhnHKM1uRVQMV1iwjox2%2BbyxWbxIJlIVdAjP1iMj2zv03vpExaLqsO36WK%2B8GBO3g1ua8y1EV14z6nLqSkleYKKBMvzndqdbo64h8cwjQ812hoRVpBdovOoWv9a%2FKb3%2F8jEM3ftt5ii1bk0KjkifA56eQzPYC2EjRd6hfiA7u7Ywz19LTAtqnjV2y3pKVWCzh7QGJO5sbORdiNBsBwrwc7iAptxw79H38j6in5aLTRAPj1Bf92X80dYPzLp5h4B4b%2BZcOfMQCIGQIRMANcAswfd0IFobR6Hc3joi6PGTj18jwOtrZ2edVgZ5vFgoJNcIQTWbZAWRjciWqB67NqEXyXpWuoDPj4xfJWX9BFRpqQSxGNz%2F9HnRSZ%2BemNbIADD%2FGI%2FjOGQbyQPalOGFanPKApVbzCqjo7BBjqkAaDClFfE5WNhADBMF2zbOmgbZ2ohWB%2FUIyyzcgYpEF5mWDcPSAaKExB4CPu5%2BTMNpp9VAHZBmwwRgIIpCGTnoyEkGX0UKkafzdpxUIGfAedlX3sohbGZlQyciXKmddR7Wq7YQSg8Y44jCFRYpWhMAEGZu0UFNDukCsUwXldLa793zSBbqrwFi%2FN%2FeHkomQTAsQOYEQGMEUrubF1V%2FbyuIAHrPMTf&X-Amz-Signature=2a1bb04a4aaf64e86740a6efcbc24f23c9293c8b0c1be7598926b418603c0795&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7S4HED%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC8Bj8Z%2BjqdFDhQnFK6XjWmsibUHAeFC4mRoK4tDkLf7QIhAJ3W0qrbwjb0MHbMbG3qCBRO9VSu9ZCU0mGVRt1DeVMiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7l1dQJZ9Lvjz5qkMq3AMqM7qth%2F%2BLmQQkjMKARooMRV6gGTMSw%2Fm8Yqulnj1z3I%2F0rJ%2FhwvokFClnfX9ciYfs0xWBYs2YRbDJF4xIyV8Do%2BSM1nzM2FyI6TyRqNDLDu7K1k60gFZeblKbrpaiHfiLn18vUsfeCzJp1cZCEvKcm1m3stpLsiWpX4apYXQ%2FJiV4dCxVI1HybB0epHvp8Mk3LB9wFh61SdpsgFKPaWIloxEounwAs7WeFDhnHKM1uRVQMV1iwjox2%2BbyxWbxIJlIVdAjP1iMj2zv03vpExaLqsO36WK%2B8GBO3g1ua8y1EV14z6nLqSkleYKKBMvzndqdbo64h8cwjQ812hoRVpBdovOoWv9a%2FKb3%2F8jEM3ftt5ii1bk0KjkifA56eQzPYC2EjRd6hfiA7u7Ywz19LTAtqnjV2y3pKVWCzh7QGJO5sbORdiNBsBwrwc7iAptxw79H38j6in5aLTRAPj1Bf92X80dYPzLp5h4B4b%2BZcOfMQCIGQIRMANcAswfd0IFobR6Hc3joi6PGTj18jwOtrZ2edVgZ5vFgoJNcIQTWbZAWRjciWqB67NqEXyXpWuoDPj4xfJWX9BFRpqQSxGNz%2F9HnRSZ%2BemNbIADD%2FGI%2FjOGQbyQPalOGFanPKApVbzCqjo7BBjqkAaDClFfE5WNhADBMF2zbOmgbZ2ohWB%2FUIyyzcgYpEF5mWDcPSAaKExB4CPu5%2BTMNpp9VAHZBmwwRgIIpCGTnoyEkGX0UKkafzdpxUIGfAedlX3sohbGZlQyciXKmddR7Wq7YQSg8Y44jCFRYpWhMAEGZu0UFNDukCsUwXldLa793zSBbqrwFi%2FN%2FeHkomQTAsQOYEQGMEUrubF1V%2FbyuIAHrPMTf&X-Amz-Signature=43f1408bb1ddac12c38819c2c54ae0f27edbdbd7efe4facad82c553a5664a76e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7S4HED%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC8Bj8Z%2BjqdFDhQnFK6XjWmsibUHAeFC4mRoK4tDkLf7QIhAJ3W0qrbwjb0MHbMbG3qCBRO9VSu9ZCU0mGVRt1DeVMiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7l1dQJZ9Lvjz5qkMq3AMqM7qth%2F%2BLmQQkjMKARooMRV6gGTMSw%2Fm8Yqulnj1z3I%2F0rJ%2FhwvokFClnfX9ciYfs0xWBYs2YRbDJF4xIyV8Do%2BSM1nzM2FyI6TyRqNDLDu7K1k60gFZeblKbrpaiHfiLn18vUsfeCzJp1cZCEvKcm1m3stpLsiWpX4apYXQ%2FJiV4dCxVI1HybB0epHvp8Mk3LB9wFh61SdpsgFKPaWIloxEounwAs7WeFDhnHKM1uRVQMV1iwjox2%2BbyxWbxIJlIVdAjP1iMj2zv03vpExaLqsO36WK%2B8GBO3g1ua8y1EV14z6nLqSkleYKKBMvzndqdbo64h8cwjQ812hoRVpBdovOoWv9a%2FKb3%2F8jEM3ftt5ii1bk0KjkifA56eQzPYC2EjRd6hfiA7u7Ywz19LTAtqnjV2y3pKVWCzh7QGJO5sbORdiNBsBwrwc7iAptxw79H38j6in5aLTRAPj1Bf92X80dYPzLp5h4B4b%2BZcOfMQCIGQIRMANcAswfd0IFobR6Hc3joi6PGTj18jwOtrZ2edVgZ5vFgoJNcIQTWbZAWRjciWqB67NqEXyXpWuoDPj4xfJWX9BFRpqQSxGNz%2F9HnRSZ%2BemNbIADD%2FGI%2FjOGQbyQPalOGFanPKApVbzCqjo7BBjqkAaDClFfE5WNhADBMF2zbOmgbZ2ohWB%2FUIyyzcgYpEF5mWDcPSAaKExB4CPu5%2BTMNpp9VAHZBmwwRgIIpCGTnoyEkGX0UKkafzdpxUIGfAedlX3sohbGZlQyciXKmddR7Wq7YQSg8Y44jCFRYpWhMAEGZu0UFNDukCsUwXldLa793zSBbqrwFi%2FN%2FeHkomQTAsQOYEQGMEUrubF1V%2FbyuIAHrPMTf&X-Amz-Signature=3c01aae68ba5cfa10ffbd4bf62220d7bc84cd0dd12288b990934531c84114a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7S4HED%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC8Bj8Z%2BjqdFDhQnFK6XjWmsibUHAeFC4mRoK4tDkLf7QIhAJ3W0qrbwjb0MHbMbG3qCBRO9VSu9ZCU0mGVRt1DeVMiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7l1dQJZ9Lvjz5qkMq3AMqM7qth%2F%2BLmQQkjMKARooMRV6gGTMSw%2Fm8Yqulnj1z3I%2F0rJ%2FhwvokFClnfX9ciYfs0xWBYs2YRbDJF4xIyV8Do%2BSM1nzM2FyI6TyRqNDLDu7K1k60gFZeblKbrpaiHfiLn18vUsfeCzJp1cZCEvKcm1m3stpLsiWpX4apYXQ%2FJiV4dCxVI1HybB0epHvp8Mk3LB9wFh61SdpsgFKPaWIloxEounwAs7WeFDhnHKM1uRVQMV1iwjox2%2BbyxWbxIJlIVdAjP1iMj2zv03vpExaLqsO36WK%2B8GBO3g1ua8y1EV14z6nLqSkleYKKBMvzndqdbo64h8cwjQ812hoRVpBdovOoWv9a%2FKb3%2F8jEM3ftt5ii1bk0KjkifA56eQzPYC2EjRd6hfiA7u7Ywz19LTAtqnjV2y3pKVWCzh7QGJO5sbORdiNBsBwrwc7iAptxw79H38j6in5aLTRAPj1Bf92X80dYPzLp5h4B4b%2BZcOfMQCIGQIRMANcAswfd0IFobR6Hc3joi6PGTj18jwOtrZ2edVgZ5vFgoJNcIQTWbZAWRjciWqB67NqEXyXpWuoDPj4xfJWX9BFRpqQSxGNz%2F9HnRSZ%2BemNbIADD%2FGI%2FjOGQbyQPalOGFanPKApVbzCqjo7BBjqkAaDClFfE5WNhADBMF2zbOmgbZ2ohWB%2FUIyyzcgYpEF5mWDcPSAaKExB4CPu5%2BTMNpp9VAHZBmwwRgIIpCGTnoyEkGX0UKkafzdpxUIGfAedlX3sohbGZlQyciXKmddR7Wq7YQSg8Y44jCFRYpWhMAEGZu0UFNDukCsUwXldLa793zSBbqrwFi%2FN%2FeHkomQTAsQOYEQGMEUrubF1V%2FbyuIAHrPMTf&X-Amz-Signature=d3e6cd84255dfbe8ba78b7d9a52dca700b7c70434e223275604fecf5d5e2c718&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7S4HED%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC8Bj8Z%2BjqdFDhQnFK6XjWmsibUHAeFC4mRoK4tDkLf7QIhAJ3W0qrbwjb0MHbMbG3qCBRO9VSu9ZCU0mGVRt1DeVMiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7l1dQJZ9Lvjz5qkMq3AMqM7qth%2F%2BLmQQkjMKARooMRV6gGTMSw%2Fm8Yqulnj1z3I%2F0rJ%2FhwvokFClnfX9ciYfs0xWBYs2YRbDJF4xIyV8Do%2BSM1nzM2FyI6TyRqNDLDu7K1k60gFZeblKbrpaiHfiLn18vUsfeCzJp1cZCEvKcm1m3stpLsiWpX4apYXQ%2FJiV4dCxVI1HybB0epHvp8Mk3LB9wFh61SdpsgFKPaWIloxEounwAs7WeFDhnHKM1uRVQMV1iwjox2%2BbyxWbxIJlIVdAjP1iMj2zv03vpExaLqsO36WK%2B8GBO3g1ua8y1EV14z6nLqSkleYKKBMvzndqdbo64h8cwjQ812hoRVpBdovOoWv9a%2FKb3%2F8jEM3ftt5ii1bk0KjkifA56eQzPYC2EjRd6hfiA7u7Ywz19LTAtqnjV2y3pKVWCzh7QGJO5sbORdiNBsBwrwc7iAptxw79H38j6in5aLTRAPj1Bf92X80dYPzLp5h4B4b%2BZcOfMQCIGQIRMANcAswfd0IFobR6Hc3joi6PGTj18jwOtrZ2edVgZ5vFgoJNcIQTWbZAWRjciWqB67NqEXyXpWuoDPj4xfJWX9BFRpqQSxGNz%2F9HnRSZ%2BemNbIADD%2FGI%2FjOGQbyQPalOGFanPKApVbzCqjo7BBjqkAaDClFfE5WNhADBMF2zbOmgbZ2ohWB%2FUIyyzcgYpEF5mWDcPSAaKExB4CPu5%2BTMNpp9VAHZBmwwRgIIpCGTnoyEkGX0UKkafzdpxUIGfAedlX3sohbGZlQyciXKmddR7Wq7YQSg8Y44jCFRYpWhMAEGZu0UFNDukCsUwXldLa793zSBbqrwFi%2FN%2FeHkomQTAsQOYEQGMEUrubF1V%2FbyuIAHrPMTf&X-Amz-Signature=43b4a36c2ad684b7e2258a11d0bf337447cb79bc634095b22d8e992c9899668e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7S4HED%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC8Bj8Z%2BjqdFDhQnFK6XjWmsibUHAeFC4mRoK4tDkLf7QIhAJ3W0qrbwjb0MHbMbG3qCBRO9VSu9ZCU0mGVRt1DeVMiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7l1dQJZ9Lvjz5qkMq3AMqM7qth%2F%2BLmQQkjMKARooMRV6gGTMSw%2Fm8Yqulnj1z3I%2F0rJ%2FhwvokFClnfX9ciYfs0xWBYs2YRbDJF4xIyV8Do%2BSM1nzM2FyI6TyRqNDLDu7K1k60gFZeblKbrpaiHfiLn18vUsfeCzJp1cZCEvKcm1m3stpLsiWpX4apYXQ%2FJiV4dCxVI1HybB0epHvp8Mk3LB9wFh61SdpsgFKPaWIloxEounwAs7WeFDhnHKM1uRVQMV1iwjox2%2BbyxWbxIJlIVdAjP1iMj2zv03vpExaLqsO36WK%2B8GBO3g1ua8y1EV14z6nLqSkleYKKBMvzndqdbo64h8cwjQ812hoRVpBdovOoWv9a%2FKb3%2F8jEM3ftt5ii1bk0KjkifA56eQzPYC2EjRd6hfiA7u7Ywz19LTAtqnjV2y3pKVWCzh7QGJO5sbORdiNBsBwrwc7iAptxw79H38j6in5aLTRAPj1Bf92X80dYPzLp5h4B4b%2BZcOfMQCIGQIRMANcAswfd0IFobR6Hc3joi6PGTj18jwOtrZ2edVgZ5vFgoJNcIQTWbZAWRjciWqB67NqEXyXpWuoDPj4xfJWX9BFRpqQSxGNz%2F9HnRSZ%2BemNbIADD%2FGI%2FjOGQbyQPalOGFanPKApVbzCqjo7BBjqkAaDClFfE5WNhADBMF2zbOmgbZ2ohWB%2FUIyyzcgYpEF5mWDcPSAaKExB4CPu5%2BTMNpp9VAHZBmwwRgIIpCGTnoyEkGX0UKkafzdpxUIGfAedlX3sohbGZlQyciXKmddR7Wq7YQSg8Y44jCFRYpWhMAEGZu0UFNDukCsUwXldLa793zSBbqrwFi%2FN%2FeHkomQTAsQOYEQGMEUrubF1V%2FbyuIAHrPMTf&X-Amz-Signature=2f1142c2bfabfe0eb17511bb34113c8f798c5d9897f0a5aeda11242adaf2a957&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7S4HED%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC8Bj8Z%2BjqdFDhQnFK6XjWmsibUHAeFC4mRoK4tDkLf7QIhAJ3W0qrbwjb0MHbMbG3qCBRO9VSu9ZCU0mGVRt1DeVMiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7l1dQJZ9Lvjz5qkMq3AMqM7qth%2F%2BLmQQkjMKARooMRV6gGTMSw%2Fm8Yqulnj1z3I%2F0rJ%2FhwvokFClnfX9ciYfs0xWBYs2YRbDJF4xIyV8Do%2BSM1nzM2FyI6TyRqNDLDu7K1k60gFZeblKbrpaiHfiLn18vUsfeCzJp1cZCEvKcm1m3stpLsiWpX4apYXQ%2FJiV4dCxVI1HybB0epHvp8Mk3LB9wFh61SdpsgFKPaWIloxEounwAs7WeFDhnHKM1uRVQMV1iwjox2%2BbyxWbxIJlIVdAjP1iMj2zv03vpExaLqsO36WK%2B8GBO3g1ua8y1EV14z6nLqSkleYKKBMvzndqdbo64h8cwjQ812hoRVpBdovOoWv9a%2FKb3%2F8jEM3ftt5ii1bk0KjkifA56eQzPYC2EjRd6hfiA7u7Ywz19LTAtqnjV2y3pKVWCzh7QGJO5sbORdiNBsBwrwc7iAptxw79H38j6in5aLTRAPj1Bf92X80dYPzLp5h4B4b%2BZcOfMQCIGQIRMANcAswfd0IFobR6Hc3joi6PGTj18jwOtrZ2edVgZ5vFgoJNcIQTWbZAWRjciWqB67NqEXyXpWuoDPj4xfJWX9BFRpqQSxGNz%2F9HnRSZ%2BemNbIADD%2FGI%2FjOGQbyQPalOGFanPKApVbzCqjo7BBjqkAaDClFfE5WNhADBMF2zbOmgbZ2ohWB%2FUIyyzcgYpEF5mWDcPSAaKExB4CPu5%2BTMNpp9VAHZBmwwRgIIpCGTnoyEkGX0UKkafzdpxUIGfAedlX3sohbGZlQyciXKmddR7Wq7YQSg8Y44jCFRYpWhMAEGZu0UFNDukCsUwXldLa793zSBbqrwFi%2FN%2FeHkomQTAsQOYEQGMEUrubF1V%2FbyuIAHrPMTf&X-Amz-Signature=2db86f91572d8f0c304cf9882684c3fae3b5aa26d8ea8f897523cb45da383c97&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
