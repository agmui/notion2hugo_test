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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEO4TG64%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9GiBVubNJPzliSgGtOh7p57IrOTkdgKBX%2FQi3bV67cAiAzNOUf0LBirKK7BvWzZcJd%2FL6nvFa06Ca6Mbg8K3bLuyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMLvrQuzXUU19tOb34KtwDQlrmKMHt0eGr7wHiknwvaR03vF1YjJJPX3nsA%2BoWY9VTwCb6ROaeLv89QYPuA%2FOV07snrayR%2BB%2FoCzozjEtMk7d54cr15PgfMhkP3yhhD%2Bs0SJFuQXUv3MY3BpvY9LoP3K9yTwLn8d9m1U4%2F3P9npDixmiEFkYFdRqdLkgtS66i7YDTfX9wsyorKhyR90BAWnquNpjCZecxm6FI2uIIpH61SYNhvSUQkVb4sAUIgDu3z9SaDarqPFpAjpAnnet1Qra2dINSzC0rRwEjqe76vI7Pmjrww3Udraj1u5g6oY4iEtF%2Ffs3G18S6PF0A24uW%2BuaDB22fQrbQx2FtcZOGYkcmWj1Fx2Z9ZrBDoR3Okhx%2BwiJPyugsBUaZcS2H0qpgHozUg6Ll0qpJcsWKJetHGZtKJEfrdT7mPeqj%2F0Hv49gRmAPtWKseDmJIIW1EyQAdJpnRrR52cCk4Zv2E18Ubx0y1wvDbZW6mLYu4Kwl8pzjQ9BOBBfshG%2B%2Fk9VaFv26Z3fwAvH%2Fzv6qpBhtmZ0VNRgDIsbg4uHSVYfSqClT3v7tjVWYWVNmoF34v9J7lmyQXabYfTuGzVAYfQGzIEvpri12dCv17xdfXypfbLWiis%2B112Ohz79qhj2R1kpI4wyKvTwQY6pgGvXQ8g0pBArztaqXn9jQmDNccIycmFpee0YpZ3ee1UCVJroRfR7DO9W91Sne5KTrGnvvdlTIDmECvs60zeunh1EHw8gIHh5g8MJ%2BQVV6gEWpzorgsd3Ok762p44GU8X5su64LXeMgN0nqE9j2Cp2aFFxrtFlas3Jsp5RHpQNM%2B8A49ZPIwjJC%2BLTR%2BKrPEBtdZPf4ORSKOe%2Fcu4FYDyx8191cNwZYM&X-Amz-Signature=9258de4f413619dfbacab3f0e598b0e05f314fb023bfcdd4e8bffa3d4cc2f988&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEO4TG64%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9GiBVubNJPzliSgGtOh7p57IrOTkdgKBX%2FQi3bV67cAiAzNOUf0LBirKK7BvWzZcJd%2FL6nvFa06Ca6Mbg8K3bLuyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMLvrQuzXUU19tOb34KtwDQlrmKMHt0eGr7wHiknwvaR03vF1YjJJPX3nsA%2BoWY9VTwCb6ROaeLv89QYPuA%2FOV07snrayR%2BB%2FoCzozjEtMk7d54cr15PgfMhkP3yhhD%2Bs0SJFuQXUv3MY3BpvY9LoP3K9yTwLn8d9m1U4%2F3P9npDixmiEFkYFdRqdLkgtS66i7YDTfX9wsyorKhyR90BAWnquNpjCZecxm6FI2uIIpH61SYNhvSUQkVb4sAUIgDu3z9SaDarqPFpAjpAnnet1Qra2dINSzC0rRwEjqe76vI7Pmjrww3Udraj1u5g6oY4iEtF%2Ffs3G18S6PF0A24uW%2BuaDB22fQrbQx2FtcZOGYkcmWj1Fx2Z9ZrBDoR3Okhx%2BwiJPyugsBUaZcS2H0qpgHozUg6Ll0qpJcsWKJetHGZtKJEfrdT7mPeqj%2F0Hv49gRmAPtWKseDmJIIW1EyQAdJpnRrR52cCk4Zv2E18Ubx0y1wvDbZW6mLYu4Kwl8pzjQ9BOBBfshG%2B%2Fk9VaFv26Z3fwAvH%2Fzv6qpBhtmZ0VNRgDIsbg4uHSVYfSqClT3v7tjVWYWVNmoF34v9J7lmyQXabYfTuGzVAYfQGzIEvpri12dCv17xdfXypfbLWiis%2B112Ohz79qhj2R1kpI4wyKvTwQY6pgGvXQ8g0pBArztaqXn9jQmDNccIycmFpee0YpZ3ee1UCVJroRfR7DO9W91Sne5KTrGnvvdlTIDmECvs60zeunh1EHw8gIHh5g8MJ%2BQVV6gEWpzorgsd3Ok762p44GU8X5su64LXeMgN0nqE9j2Cp2aFFxrtFlas3Jsp5RHpQNM%2B8A49ZPIwjJC%2BLTR%2BKrPEBtdZPf4ORSKOe%2Fcu4FYDyx8191cNwZYM&X-Amz-Signature=8736178071716b230e8d863e0340bc58e8789c83602b9c91edbb5998c1ae01b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEO4TG64%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9GiBVubNJPzliSgGtOh7p57IrOTkdgKBX%2FQi3bV67cAiAzNOUf0LBirKK7BvWzZcJd%2FL6nvFa06Ca6Mbg8K3bLuyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMLvrQuzXUU19tOb34KtwDQlrmKMHt0eGr7wHiknwvaR03vF1YjJJPX3nsA%2BoWY9VTwCb6ROaeLv89QYPuA%2FOV07snrayR%2BB%2FoCzozjEtMk7d54cr15PgfMhkP3yhhD%2Bs0SJFuQXUv3MY3BpvY9LoP3K9yTwLn8d9m1U4%2F3P9npDixmiEFkYFdRqdLkgtS66i7YDTfX9wsyorKhyR90BAWnquNpjCZecxm6FI2uIIpH61SYNhvSUQkVb4sAUIgDu3z9SaDarqPFpAjpAnnet1Qra2dINSzC0rRwEjqe76vI7Pmjrww3Udraj1u5g6oY4iEtF%2Ffs3G18S6PF0A24uW%2BuaDB22fQrbQx2FtcZOGYkcmWj1Fx2Z9ZrBDoR3Okhx%2BwiJPyugsBUaZcS2H0qpgHozUg6Ll0qpJcsWKJetHGZtKJEfrdT7mPeqj%2F0Hv49gRmAPtWKseDmJIIW1EyQAdJpnRrR52cCk4Zv2E18Ubx0y1wvDbZW6mLYu4Kwl8pzjQ9BOBBfshG%2B%2Fk9VaFv26Z3fwAvH%2Fzv6qpBhtmZ0VNRgDIsbg4uHSVYfSqClT3v7tjVWYWVNmoF34v9J7lmyQXabYfTuGzVAYfQGzIEvpri12dCv17xdfXypfbLWiis%2B112Ohz79qhj2R1kpI4wyKvTwQY6pgGvXQ8g0pBArztaqXn9jQmDNccIycmFpee0YpZ3ee1UCVJroRfR7DO9W91Sne5KTrGnvvdlTIDmECvs60zeunh1EHw8gIHh5g8MJ%2BQVV6gEWpzorgsd3Ok762p44GU8X5su64LXeMgN0nqE9j2Cp2aFFxrtFlas3Jsp5RHpQNM%2B8A49ZPIwjJC%2BLTR%2BKrPEBtdZPf4ORSKOe%2Fcu4FYDyx8191cNwZYM&X-Amz-Signature=6f8ea3a9ca59622c7116d83c9c48f9f260174b2a4f83cba9d6a958047e74449a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEO4TG64%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9GiBVubNJPzliSgGtOh7p57IrOTkdgKBX%2FQi3bV67cAiAzNOUf0LBirKK7BvWzZcJd%2FL6nvFa06Ca6Mbg8K3bLuyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMLvrQuzXUU19tOb34KtwDQlrmKMHt0eGr7wHiknwvaR03vF1YjJJPX3nsA%2BoWY9VTwCb6ROaeLv89QYPuA%2FOV07snrayR%2BB%2FoCzozjEtMk7d54cr15PgfMhkP3yhhD%2Bs0SJFuQXUv3MY3BpvY9LoP3K9yTwLn8d9m1U4%2F3P9npDixmiEFkYFdRqdLkgtS66i7YDTfX9wsyorKhyR90BAWnquNpjCZecxm6FI2uIIpH61SYNhvSUQkVb4sAUIgDu3z9SaDarqPFpAjpAnnet1Qra2dINSzC0rRwEjqe76vI7Pmjrww3Udraj1u5g6oY4iEtF%2Ffs3G18S6PF0A24uW%2BuaDB22fQrbQx2FtcZOGYkcmWj1Fx2Z9ZrBDoR3Okhx%2BwiJPyugsBUaZcS2H0qpgHozUg6Ll0qpJcsWKJetHGZtKJEfrdT7mPeqj%2F0Hv49gRmAPtWKseDmJIIW1EyQAdJpnRrR52cCk4Zv2E18Ubx0y1wvDbZW6mLYu4Kwl8pzjQ9BOBBfshG%2B%2Fk9VaFv26Z3fwAvH%2Fzv6qpBhtmZ0VNRgDIsbg4uHSVYfSqClT3v7tjVWYWVNmoF34v9J7lmyQXabYfTuGzVAYfQGzIEvpri12dCv17xdfXypfbLWiis%2B112Ohz79qhj2R1kpI4wyKvTwQY6pgGvXQ8g0pBArztaqXn9jQmDNccIycmFpee0YpZ3ee1UCVJroRfR7DO9W91Sne5KTrGnvvdlTIDmECvs60zeunh1EHw8gIHh5g8MJ%2BQVV6gEWpzorgsd3Ok762p44GU8X5su64LXeMgN0nqE9j2Cp2aFFxrtFlas3Jsp5RHpQNM%2B8A49ZPIwjJC%2BLTR%2BKrPEBtdZPf4ORSKOe%2Fcu4FYDyx8191cNwZYM&X-Amz-Signature=e75c6fd667b7a2d9507f6f3bc6b5f1517176c4705c7d71efb9b7ccea7d323679&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEO4TG64%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9GiBVubNJPzliSgGtOh7p57IrOTkdgKBX%2FQi3bV67cAiAzNOUf0LBirKK7BvWzZcJd%2FL6nvFa06Ca6Mbg8K3bLuyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMLvrQuzXUU19tOb34KtwDQlrmKMHt0eGr7wHiknwvaR03vF1YjJJPX3nsA%2BoWY9VTwCb6ROaeLv89QYPuA%2FOV07snrayR%2BB%2FoCzozjEtMk7d54cr15PgfMhkP3yhhD%2Bs0SJFuQXUv3MY3BpvY9LoP3K9yTwLn8d9m1U4%2F3P9npDixmiEFkYFdRqdLkgtS66i7YDTfX9wsyorKhyR90BAWnquNpjCZecxm6FI2uIIpH61SYNhvSUQkVb4sAUIgDu3z9SaDarqPFpAjpAnnet1Qra2dINSzC0rRwEjqe76vI7Pmjrww3Udraj1u5g6oY4iEtF%2Ffs3G18S6PF0A24uW%2BuaDB22fQrbQx2FtcZOGYkcmWj1Fx2Z9ZrBDoR3Okhx%2BwiJPyugsBUaZcS2H0qpgHozUg6Ll0qpJcsWKJetHGZtKJEfrdT7mPeqj%2F0Hv49gRmAPtWKseDmJIIW1EyQAdJpnRrR52cCk4Zv2E18Ubx0y1wvDbZW6mLYu4Kwl8pzjQ9BOBBfshG%2B%2Fk9VaFv26Z3fwAvH%2Fzv6qpBhtmZ0VNRgDIsbg4uHSVYfSqClT3v7tjVWYWVNmoF34v9J7lmyQXabYfTuGzVAYfQGzIEvpri12dCv17xdfXypfbLWiis%2B112Ohz79qhj2R1kpI4wyKvTwQY6pgGvXQ8g0pBArztaqXn9jQmDNccIycmFpee0YpZ3ee1UCVJroRfR7DO9W91Sne5KTrGnvvdlTIDmECvs60zeunh1EHw8gIHh5g8MJ%2BQVV6gEWpzorgsd3Ok762p44GU8X5su64LXeMgN0nqE9j2Cp2aFFxrtFlas3Jsp5RHpQNM%2B8A49ZPIwjJC%2BLTR%2BKrPEBtdZPf4ORSKOe%2Fcu4FYDyx8191cNwZYM&X-Amz-Signature=d356ef4d626eaa7b8bfef279d078ec5d22d45b9ac547adbcc0641e792942c577&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEO4TG64%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9GiBVubNJPzliSgGtOh7p57IrOTkdgKBX%2FQi3bV67cAiAzNOUf0LBirKK7BvWzZcJd%2FL6nvFa06Ca6Mbg8K3bLuyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMLvrQuzXUU19tOb34KtwDQlrmKMHt0eGr7wHiknwvaR03vF1YjJJPX3nsA%2BoWY9VTwCb6ROaeLv89QYPuA%2FOV07snrayR%2BB%2FoCzozjEtMk7d54cr15PgfMhkP3yhhD%2Bs0SJFuQXUv3MY3BpvY9LoP3K9yTwLn8d9m1U4%2F3P9npDixmiEFkYFdRqdLkgtS66i7YDTfX9wsyorKhyR90BAWnquNpjCZecxm6FI2uIIpH61SYNhvSUQkVb4sAUIgDu3z9SaDarqPFpAjpAnnet1Qra2dINSzC0rRwEjqe76vI7Pmjrww3Udraj1u5g6oY4iEtF%2Ffs3G18S6PF0A24uW%2BuaDB22fQrbQx2FtcZOGYkcmWj1Fx2Z9ZrBDoR3Okhx%2BwiJPyugsBUaZcS2H0qpgHozUg6Ll0qpJcsWKJetHGZtKJEfrdT7mPeqj%2F0Hv49gRmAPtWKseDmJIIW1EyQAdJpnRrR52cCk4Zv2E18Ubx0y1wvDbZW6mLYu4Kwl8pzjQ9BOBBfshG%2B%2Fk9VaFv26Z3fwAvH%2Fzv6qpBhtmZ0VNRgDIsbg4uHSVYfSqClT3v7tjVWYWVNmoF34v9J7lmyQXabYfTuGzVAYfQGzIEvpri12dCv17xdfXypfbLWiis%2B112Ohz79qhj2R1kpI4wyKvTwQY6pgGvXQ8g0pBArztaqXn9jQmDNccIycmFpee0YpZ3ee1UCVJroRfR7DO9W91Sne5KTrGnvvdlTIDmECvs60zeunh1EHw8gIHh5g8MJ%2BQVV6gEWpzorgsd3Ok762p44GU8X5su64LXeMgN0nqE9j2Cp2aFFxrtFlas3Jsp5RHpQNM%2B8A49ZPIwjJC%2BLTR%2BKrPEBtdZPf4ORSKOe%2Fcu4FYDyx8191cNwZYM&X-Amz-Signature=f54f682a9cba8f00858018ac215185ddff8b87bd1aef135981421c61f913fd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEO4TG64%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9GiBVubNJPzliSgGtOh7p57IrOTkdgKBX%2FQi3bV67cAiAzNOUf0LBirKK7BvWzZcJd%2FL6nvFa06Ca6Mbg8K3bLuyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMLvrQuzXUU19tOb34KtwDQlrmKMHt0eGr7wHiknwvaR03vF1YjJJPX3nsA%2BoWY9VTwCb6ROaeLv89QYPuA%2FOV07snrayR%2BB%2FoCzozjEtMk7d54cr15PgfMhkP3yhhD%2Bs0SJFuQXUv3MY3BpvY9LoP3K9yTwLn8d9m1U4%2F3P9npDixmiEFkYFdRqdLkgtS66i7YDTfX9wsyorKhyR90BAWnquNpjCZecxm6FI2uIIpH61SYNhvSUQkVb4sAUIgDu3z9SaDarqPFpAjpAnnet1Qra2dINSzC0rRwEjqe76vI7Pmjrww3Udraj1u5g6oY4iEtF%2Ffs3G18S6PF0A24uW%2BuaDB22fQrbQx2FtcZOGYkcmWj1Fx2Z9ZrBDoR3Okhx%2BwiJPyugsBUaZcS2H0qpgHozUg6Ll0qpJcsWKJetHGZtKJEfrdT7mPeqj%2F0Hv49gRmAPtWKseDmJIIW1EyQAdJpnRrR52cCk4Zv2E18Ubx0y1wvDbZW6mLYu4Kwl8pzjQ9BOBBfshG%2B%2Fk9VaFv26Z3fwAvH%2Fzv6qpBhtmZ0VNRgDIsbg4uHSVYfSqClT3v7tjVWYWVNmoF34v9J7lmyQXabYfTuGzVAYfQGzIEvpri12dCv17xdfXypfbLWiis%2B112Ohz79qhj2R1kpI4wyKvTwQY6pgGvXQ8g0pBArztaqXn9jQmDNccIycmFpee0YpZ3ee1UCVJroRfR7DO9W91Sne5KTrGnvvdlTIDmECvs60zeunh1EHw8gIHh5g8MJ%2BQVV6gEWpzorgsd3Ok762p44GU8X5su64LXeMgN0nqE9j2Cp2aFFxrtFlas3Jsp5RHpQNM%2B8A49ZPIwjJC%2BLTR%2BKrPEBtdZPf4ORSKOe%2Fcu4FYDyx8191cNwZYM&X-Amz-Signature=9c4d90c51b5019a61f0cae3a20b2ac396612d7292b6007921ca5c96b1ff8d096&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
