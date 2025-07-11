---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQEUHLC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvnwHHgakyC4UzqXbk6nuof5V5kGSqEgdve0quNLY1AIgR%2FXbEhRC77JeJxuiCEHcGolp5wFtPj2hCAh5aRC5MX8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8KDXdG56ACT5Gn1ircA%2FCfe2Lv7tEXPX5Xne8HXT7KQb8aF1Bi15W8d0yCUzWWwlZZFE43pWNURxCupvTqzWLI19R9gNJf6uzqAWpFBIO%2Fkjd%2BbIBQIN%2BMYirou1L1WykLc3%2Bz%2BGBMx86A78lNa%2BQKqJQOAsUk9%2BToy3q%2F6iBsSsELRK9oE2ePnuTD2DH8Vpq7FkYM87xI%2BWRa%2BWvGi9Uh8iXPUGaBvaUg9gnc8QsKSxo7Exf4lPiGevlEPuiakt%2BjzW3aDJynZMF4J69COu%2BdIjZV8JqNor%2B3WiYpLG10NN87WWI4yJouIUYE9faNHBS1lCUyRDPbhpQWG%2FQzXUZhznLUroIu109j5cURtRep%2FqLAR9c8HrzdlrF0zj37f1fn8u5CutvQkog8WhaJwZjzPr3FeasrRBH09SoBlhHY9Rdmw03ARLu2y9JNQUXr0KPsqEp6Xw%2FTPFp%2FaM08cSGCQPOcHiSqLdRms5MCIiT9tbMLJnZOq1RBOj3fF%2FjCQRzH8wPOC%2FJ1V33jlP3FMJq0cQfd51yO0y8qUoI6XHHzroac8jboAKvPaejyyO0TrdKBxwzfUTQyBNeUZ9Tp8mtEJuhPV8zvIW94F1YY2sd7uZu7LiobQOjXJEbX8%2F9ohGceh0JWbOuWPi3HMLb%2BwsMGOqUByc0m3PNHKpHTg9dfnPm9hV5UttsfKSNEQLnKKnc3klldNmbgdrbKjCrFcvlzvrCiFk39CaNwlhEuGD4%2FcRhJb%2FxiRf%2FjYnROYk25NZ20395lHiSpCkuMNPzGmc3m9oJqE3cXD7avwILtNw4TVAnEE9o69dwud9suNLgJ6%2BQ9MTgPLSPoGJaweM0Ciog5%2Fjw%2BeFnbkgvMqJFIKCOxP9YKwRBlthtD&X-Amz-Signature=1f184dce26937834be9ca4089e71ba7e977b10bcd332813bb1a6f3aa04387415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQEUHLC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvnwHHgakyC4UzqXbk6nuof5V5kGSqEgdve0quNLY1AIgR%2FXbEhRC77JeJxuiCEHcGolp5wFtPj2hCAh5aRC5MX8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8KDXdG56ACT5Gn1ircA%2FCfe2Lv7tEXPX5Xne8HXT7KQb8aF1Bi15W8d0yCUzWWwlZZFE43pWNURxCupvTqzWLI19R9gNJf6uzqAWpFBIO%2Fkjd%2BbIBQIN%2BMYirou1L1WykLc3%2Bz%2BGBMx86A78lNa%2BQKqJQOAsUk9%2BToy3q%2F6iBsSsELRK9oE2ePnuTD2DH8Vpq7FkYM87xI%2BWRa%2BWvGi9Uh8iXPUGaBvaUg9gnc8QsKSxo7Exf4lPiGevlEPuiakt%2BjzW3aDJynZMF4J69COu%2BdIjZV8JqNor%2B3WiYpLG10NN87WWI4yJouIUYE9faNHBS1lCUyRDPbhpQWG%2FQzXUZhznLUroIu109j5cURtRep%2FqLAR9c8HrzdlrF0zj37f1fn8u5CutvQkog8WhaJwZjzPr3FeasrRBH09SoBlhHY9Rdmw03ARLu2y9JNQUXr0KPsqEp6Xw%2FTPFp%2FaM08cSGCQPOcHiSqLdRms5MCIiT9tbMLJnZOq1RBOj3fF%2FjCQRzH8wPOC%2FJ1V33jlP3FMJq0cQfd51yO0y8qUoI6XHHzroac8jboAKvPaejyyO0TrdKBxwzfUTQyBNeUZ9Tp8mtEJuhPV8zvIW94F1YY2sd7uZu7LiobQOjXJEbX8%2F9ohGceh0JWbOuWPi3HMLb%2BwsMGOqUByc0m3PNHKpHTg9dfnPm9hV5UttsfKSNEQLnKKnc3klldNmbgdrbKjCrFcvlzvrCiFk39CaNwlhEuGD4%2FcRhJb%2FxiRf%2FjYnROYk25NZ20395lHiSpCkuMNPzGmc3m9oJqE3cXD7avwILtNw4TVAnEE9o69dwud9suNLgJ6%2BQ9MTgPLSPoGJaweM0Ciog5%2Fjw%2BeFnbkgvMqJFIKCOxP9YKwRBlthtD&X-Amz-Signature=5034db60b49ae757eacb47c9cf43bd3fcd15c603ae670a475a3ff7bf7eafef28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQEUHLC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvnwHHgakyC4UzqXbk6nuof5V5kGSqEgdve0quNLY1AIgR%2FXbEhRC77JeJxuiCEHcGolp5wFtPj2hCAh5aRC5MX8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8KDXdG56ACT5Gn1ircA%2FCfe2Lv7tEXPX5Xne8HXT7KQb8aF1Bi15W8d0yCUzWWwlZZFE43pWNURxCupvTqzWLI19R9gNJf6uzqAWpFBIO%2Fkjd%2BbIBQIN%2BMYirou1L1WykLc3%2Bz%2BGBMx86A78lNa%2BQKqJQOAsUk9%2BToy3q%2F6iBsSsELRK9oE2ePnuTD2DH8Vpq7FkYM87xI%2BWRa%2BWvGi9Uh8iXPUGaBvaUg9gnc8QsKSxo7Exf4lPiGevlEPuiakt%2BjzW3aDJynZMF4J69COu%2BdIjZV8JqNor%2B3WiYpLG10NN87WWI4yJouIUYE9faNHBS1lCUyRDPbhpQWG%2FQzXUZhznLUroIu109j5cURtRep%2FqLAR9c8HrzdlrF0zj37f1fn8u5CutvQkog8WhaJwZjzPr3FeasrRBH09SoBlhHY9Rdmw03ARLu2y9JNQUXr0KPsqEp6Xw%2FTPFp%2FaM08cSGCQPOcHiSqLdRms5MCIiT9tbMLJnZOq1RBOj3fF%2FjCQRzH8wPOC%2FJ1V33jlP3FMJq0cQfd51yO0y8qUoI6XHHzroac8jboAKvPaejyyO0TrdKBxwzfUTQyBNeUZ9Tp8mtEJuhPV8zvIW94F1YY2sd7uZu7LiobQOjXJEbX8%2F9ohGceh0JWbOuWPi3HMLb%2BwsMGOqUByc0m3PNHKpHTg9dfnPm9hV5UttsfKSNEQLnKKnc3klldNmbgdrbKjCrFcvlzvrCiFk39CaNwlhEuGD4%2FcRhJb%2FxiRf%2FjYnROYk25NZ20395lHiSpCkuMNPzGmc3m9oJqE3cXD7avwILtNw4TVAnEE9o69dwud9suNLgJ6%2BQ9MTgPLSPoGJaweM0Ciog5%2Fjw%2BeFnbkgvMqJFIKCOxP9YKwRBlthtD&X-Amz-Signature=caef7baf2194bf3940750c22862cbdce99c862070d37d6b3487552040a64ac2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQEUHLC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvnwHHgakyC4UzqXbk6nuof5V5kGSqEgdve0quNLY1AIgR%2FXbEhRC77JeJxuiCEHcGolp5wFtPj2hCAh5aRC5MX8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8KDXdG56ACT5Gn1ircA%2FCfe2Lv7tEXPX5Xne8HXT7KQb8aF1Bi15W8d0yCUzWWwlZZFE43pWNURxCupvTqzWLI19R9gNJf6uzqAWpFBIO%2Fkjd%2BbIBQIN%2BMYirou1L1WykLc3%2Bz%2BGBMx86A78lNa%2BQKqJQOAsUk9%2BToy3q%2F6iBsSsELRK9oE2ePnuTD2DH8Vpq7FkYM87xI%2BWRa%2BWvGi9Uh8iXPUGaBvaUg9gnc8QsKSxo7Exf4lPiGevlEPuiakt%2BjzW3aDJynZMF4J69COu%2BdIjZV8JqNor%2B3WiYpLG10NN87WWI4yJouIUYE9faNHBS1lCUyRDPbhpQWG%2FQzXUZhznLUroIu109j5cURtRep%2FqLAR9c8HrzdlrF0zj37f1fn8u5CutvQkog8WhaJwZjzPr3FeasrRBH09SoBlhHY9Rdmw03ARLu2y9JNQUXr0KPsqEp6Xw%2FTPFp%2FaM08cSGCQPOcHiSqLdRms5MCIiT9tbMLJnZOq1RBOj3fF%2FjCQRzH8wPOC%2FJ1V33jlP3FMJq0cQfd51yO0y8qUoI6XHHzroac8jboAKvPaejyyO0TrdKBxwzfUTQyBNeUZ9Tp8mtEJuhPV8zvIW94F1YY2sd7uZu7LiobQOjXJEbX8%2F9ohGceh0JWbOuWPi3HMLb%2BwsMGOqUByc0m3PNHKpHTg9dfnPm9hV5UttsfKSNEQLnKKnc3klldNmbgdrbKjCrFcvlzvrCiFk39CaNwlhEuGD4%2FcRhJb%2FxiRf%2FjYnROYk25NZ20395lHiSpCkuMNPzGmc3m9oJqE3cXD7avwILtNw4TVAnEE9o69dwud9suNLgJ6%2BQ9MTgPLSPoGJaweM0Ciog5%2Fjw%2BeFnbkgvMqJFIKCOxP9YKwRBlthtD&X-Amz-Signature=d68dc263208322a13e0eb5c65aaffbbbdb2992ddcbd36556c9c6b54b10e57d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQEUHLC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvnwHHgakyC4UzqXbk6nuof5V5kGSqEgdve0quNLY1AIgR%2FXbEhRC77JeJxuiCEHcGolp5wFtPj2hCAh5aRC5MX8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8KDXdG56ACT5Gn1ircA%2FCfe2Lv7tEXPX5Xne8HXT7KQb8aF1Bi15W8d0yCUzWWwlZZFE43pWNURxCupvTqzWLI19R9gNJf6uzqAWpFBIO%2Fkjd%2BbIBQIN%2BMYirou1L1WykLc3%2Bz%2BGBMx86A78lNa%2BQKqJQOAsUk9%2BToy3q%2F6iBsSsELRK9oE2ePnuTD2DH8Vpq7FkYM87xI%2BWRa%2BWvGi9Uh8iXPUGaBvaUg9gnc8QsKSxo7Exf4lPiGevlEPuiakt%2BjzW3aDJynZMF4J69COu%2BdIjZV8JqNor%2B3WiYpLG10NN87WWI4yJouIUYE9faNHBS1lCUyRDPbhpQWG%2FQzXUZhznLUroIu109j5cURtRep%2FqLAR9c8HrzdlrF0zj37f1fn8u5CutvQkog8WhaJwZjzPr3FeasrRBH09SoBlhHY9Rdmw03ARLu2y9JNQUXr0KPsqEp6Xw%2FTPFp%2FaM08cSGCQPOcHiSqLdRms5MCIiT9tbMLJnZOq1RBOj3fF%2FjCQRzH8wPOC%2FJ1V33jlP3FMJq0cQfd51yO0y8qUoI6XHHzroac8jboAKvPaejyyO0TrdKBxwzfUTQyBNeUZ9Tp8mtEJuhPV8zvIW94F1YY2sd7uZu7LiobQOjXJEbX8%2F9ohGceh0JWbOuWPi3HMLb%2BwsMGOqUByc0m3PNHKpHTg9dfnPm9hV5UttsfKSNEQLnKKnc3klldNmbgdrbKjCrFcvlzvrCiFk39CaNwlhEuGD4%2FcRhJb%2FxiRf%2FjYnROYk25NZ20395lHiSpCkuMNPzGmc3m9oJqE3cXD7avwILtNw4TVAnEE9o69dwud9suNLgJ6%2BQ9MTgPLSPoGJaweM0Ciog5%2Fjw%2BeFnbkgvMqJFIKCOxP9YKwRBlthtD&X-Amz-Signature=2dcb21220ebc8d33f1e7b40014abfc179f5e835ac8f6106a6754b0c89338bdb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQEUHLC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvnwHHgakyC4UzqXbk6nuof5V5kGSqEgdve0quNLY1AIgR%2FXbEhRC77JeJxuiCEHcGolp5wFtPj2hCAh5aRC5MX8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8KDXdG56ACT5Gn1ircA%2FCfe2Lv7tEXPX5Xne8HXT7KQb8aF1Bi15W8d0yCUzWWwlZZFE43pWNURxCupvTqzWLI19R9gNJf6uzqAWpFBIO%2Fkjd%2BbIBQIN%2BMYirou1L1WykLc3%2Bz%2BGBMx86A78lNa%2BQKqJQOAsUk9%2BToy3q%2F6iBsSsELRK9oE2ePnuTD2DH8Vpq7FkYM87xI%2BWRa%2BWvGi9Uh8iXPUGaBvaUg9gnc8QsKSxo7Exf4lPiGevlEPuiakt%2BjzW3aDJynZMF4J69COu%2BdIjZV8JqNor%2B3WiYpLG10NN87WWI4yJouIUYE9faNHBS1lCUyRDPbhpQWG%2FQzXUZhznLUroIu109j5cURtRep%2FqLAR9c8HrzdlrF0zj37f1fn8u5CutvQkog8WhaJwZjzPr3FeasrRBH09SoBlhHY9Rdmw03ARLu2y9JNQUXr0KPsqEp6Xw%2FTPFp%2FaM08cSGCQPOcHiSqLdRms5MCIiT9tbMLJnZOq1RBOj3fF%2FjCQRzH8wPOC%2FJ1V33jlP3FMJq0cQfd51yO0y8qUoI6XHHzroac8jboAKvPaejyyO0TrdKBxwzfUTQyBNeUZ9Tp8mtEJuhPV8zvIW94F1YY2sd7uZu7LiobQOjXJEbX8%2F9ohGceh0JWbOuWPi3HMLb%2BwsMGOqUByc0m3PNHKpHTg9dfnPm9hV5UttsfKSNEQLnKKnc3klldNmbgdrbKjCrFcvlzvrCiFk39CaNwlhEuGD4%2FcRhJb%2FxiRf%2FjYnROYk25NZ20395lHiSpCkuMNPzGmc3m9oJqE3cXD7avwILtNw4TVAnEE9o69dwud9suNLgJ6%2BQ9MTgPLSPoGJaweM0Ciog5%2Fjw%2BeFnbkgvMqJFIKCOxP9YKwRBlthtD&X-Amz-Signature=fa0f5e92f9261837c23ed832ac15ef3e8c955250b3f9607e27727ec6dac17e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQEUHLC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvnwHHgakyC4UzqXbk6nuof5V5kGSqEgdve0quNLY1AIgR%2FXbEhRC77JeJxuiCEHcGolp5wFtPj2hCAh5aRC5MX8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8KDXdG56ACT5Gn1ircA%2FCfe2Lv7tEXPX5Xne8HXT7KQb8aF1Bi15W8d0yCUzWWwlZZFE43pWNURxCupvTqzWLI19R9gNJf6uzqAWpFBIO%2Fkjd%2BbIBQIN%2BMYirou1L1WykLc3%2Bz%2BGBMx86A78lNa%2BQKqJQOAsUk9%2BToy3q%2F6iBsSsELRK9oE2ePnuTD2DH8Vpq7FkYM87xI%2BWRa%2BWvGi9Uh8iXPUGaBvaUg9gnc8QsKSxo7Exf4lPiGevlEPuiakt%2BjzW3aDJynZMF4J69COu%2BdIjZV8JqNor%2B3WiYpLG10NN87WWI4yJouIUYE9faNHBS1lCUyRDPbhpQWG%2FQzXUZhznLUroIu109j5cURtRep%2FqLAR9c8HrzdlrF0zj37f1fn8u5CutvQkog8WhaJwZjzPr3FeasrRBH09SoBlhHY9Rdmw03ARLu2y9JNQUXr0KPsqEp6Xw%2FTPFp%2FaM08cSGCQPOcHiSqLdRms5MCIiT9tbMLJnZOq1RBOj3fF%2FjCQRzH8wPOC%2FJ1V33jlP3FMJq0cQfd51yO0y8qUoI6XHHzroac8jboAKvPaejyyO0TrdKBxwzfUTQyBNeUZ9Tp8mtEJuhPV8zvIW94F1YY2sd7uZu7LiobQOjXJEbX8%2F9ohGceh0JWbOuWPi3HMLb%2BwsMGOqUByc0m3PNHKpHTg9dfnPm9hV5UttsfKSNEQLnKKnc3klldNmbgdrbKjCrFcvlzvrCiFk39CaNwlhEuGD4%2FcRhJb%2FxiRf%2FjYnROYk25NZ20395lHiSpCkuMNPzGmc3m9oJqE3cXD7avwILtNw4TVAnEE9o69dwud9suNLgJ6%2BQ9MTgPLSPoGJaweM0Ciog5%2Fjw%2BeFnbkgvMqJFIKCOxP9YKwRBlthtD&X-Amz-Signature=65103721e2491a462a23af3f9547ef57491bc4e9a99e34a329bc6d5e62d7694f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
