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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCWTIUD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEdd1Dbtjmmq5eHYDqL3nSKASZEdyDm8hhrJ3ZQy5vsjAiATbeBoB7izODomZq7s5uH0jmPlupcAhhtc9H2ZJW%2F3gyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeZBxJvgckKHsKSNJKtwDLI%2BKTtPL4ZntpI%2B2Uy81wb433K2Ui1YAWx8EQnAaWM3CswFfhM%2F3EiPT6P9R1WJN%2BZTZlSvJvcTnWjnAc3Kflwo%2B1mGAUAuVtwRrV8sDeEFBTu7CUwBFkE%2BLTS9Z5ffPVgS%2F%2FCZQ%2FAlBskHFInnnQPKAgZezEW7c1xbC4gS29Ae9D0hW8PMLfdVAXqbOAMfAX8%2BHeHo2laZSGQKeox8RvHTzy%2BO0OWZbNuO3kGQkcy396b07JAjLGwc5vy3BuW%2FK4ZuJHFJAR7nsUKRgv1MbTVzn%2FXcHTUTcYd%2FtV1mGwYXZwAMF7aQhkNAb15A081qGuyvpxiLSFKTQ6xp6CURu7t8JNs4ZBAdDuwOnsypgTqWC4EjwaBV4aWSnZtJVRIOv52X7038n6Us0WQK4kThC%2FRveG2gzsL0X6aLIIDffJ%2Fj8wkioXyDFRpb%2B4HcUeGPZ9QziBvL%2FGot9jB9GgzXorls%2BHuwRS0cjRmvpzlU3EbusleEaMzTWyKPNjowrcgcrdiHCIZSzv888r5AvQBZgTH%2BNmDGah3A413qbM5PlwtmjdjYnn9hCI0mk%2BeooZk8o8iRsuTfwuutGVr2atVUc1gua3TGHt0BP2yTtPX3Un%2BSj9SLUlzV45LskwsMwisexvwY6pgHLCfLXFW%2FXx8RNRg%2BC8duA%2BoJzGT6vqh8BS2nbCZzS1YVyzovxIxnB45ySTAP2vI0sBsq%2FO5so%2Fy7avnjnfeX72f4V5jK0CxPh95n6eTd%2FdKoyIDB82LUvpgTY7GcQNwUy8%2FAhP%2FElicZGr8LDKOHTx5ukIPOJDPOxofwwMGZW%2BSKjr%2FU3nGVRlWe1ClJ22HZeAEEGG2BI4C4roF8oZ9JM1gnCKFFj&X-Amz-Signature=5f69cdc231ce5945e28b70391546dda08f16e4a9022df8593e3876df10873bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCWTIUD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEdd1Dbtjmmq5eHYDqL3nSKASZEdyDm8hhrJ3ZQy5vsjAiATbeBoB7izODomZq7s5uH0jmPlupcAhhtc9H2ZJW%2F3gyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeZBxJvgckKHsKSNJKtwDLI%2BKTtPL4ZntpI%2B2Uy81wb433K2Ui1YAWx8EQnAaWM3CswFfhM%2F3EiPT6P9R1WJN%2BZTZlSvJvcTnWjnAc3Kflwo%2B1mGAUAuVtwRrV8sDeEFBTu7CUwBFkE%2BLTS9Z5ffPVgS%2F%2FCZQ%2FAlBskHFInnnQPKAgZezEW7c1xbC4gS29Ae9D0hW8PMLfdVAXqbOAMfAX8%2BHeHo2laZSGQKeox8RvHTzy%2BO0OWZbNuO3kGQkcy396b07JAjLGwc5vy3BuW%2FK4ZuJHFJAR7nsUKRgv1MbTVzn%2FXcHTUTcYd%2FtV1mGwYXZwAMF7aQhkNAb15A081qGuyvpxiLSFKTQ6xp6CURu7t8JNs4ZBAdDuwOnsypgTqWC4EjwaBV4aWSnZtJVRIOv52X7038n6Us0WQK4kThC%2FRveG2gzsL0X6aLIIDffJ%2Fj8wkioXyDFRpb%2B4HcUeGPZ9QziBvL%2FGot9jB9GgzXorls%2BHuwRS0cjRmvpzlU3EbusleEaMzTWyKPNjowrcgcrdiHCIZSzv888r5AvQBZgTH%2BNmDGah3A413qbM5PlwtmjdjYnn9hCI0mk%2BeooZk8o8iRsuTfwuutGVr2atVUc1gua3TGHt0BP2yTtPX3Un%2BSj9SLUlzV45LskwsMwisexvwY6pgHLCfLXFW%2FXx8RNRg%2BC8duA%2BoJzGT6vqh8BS2nbCZzS1YVyzovxIxnB45ySTAP2vI0sBsq%2FO5so%2Fy7avnjnfeX72f4V5jK0CxPh95n6eTd%2FdKoyIDB82LUvpgTY7GcQNwUy8%2FAhP%2FElicZGr8LDKOHTx5ukIPOJDPOxofwwMGZW%2BSKjr%2FU3nGVRlWe1ClJ22HZeAEEGG2BI4C4roF8oZ9JM1gnCKFFj&X-Amz-Signature=92e8ee46d371ee7b7d6249a5cb984933d7a4d776664ee830cadd35ab224934bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCWTIUD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEdd1Dbtjmmq5eHYDqL3nSKASZEdyDm8hhrJ3ZQy5vsjAiATbeBoB7izODomZq7s5uH0jmPlupcAhhtc9H2ZJW%2F3gyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeZBxJvgckKHsKSNJKtwDLI%2BKTtPL4ZntpI%2B2Uy81wb433K2Ui1YAWx8EQnAaWM3CswFfhM%2F3EiPT6P9R1WJN%2BZTZlSvJvcTnWjnAc3Kflwo%2B1mGAUAuVtwRrV8sDeEFBTu7CUwBFkE%2BLTS9Z5ffPVgS%2F%2FCZQ%2FAlBskHFInnnQPKAgZezEW7c1xbC4gS29Ae9D0hW8PMLfdVAXqbOAMfAX8%2BHeHo2laZSGQKeox8RvHTzy%2BO0OWZbNuO3kGQkcy396b07JAjLGwc5vy3BuW%2FK4ZuJHFJAR7nsUKRgv1MbTVzn%2FXcHTUTcYd%2FtV1mGwYXZwAMF7aQhkNAb15A081qGuyvpxiLSFKTQ6xp6CURu7t8JNs4ZBAdDuwOnsypgTqWC4EjwaBV4aWSnZtJVRIOv52X7038n6Us0WQK4kThC%2FRveG2gzsL0X6aLIIDffJ%2Fj8wkioXyDFRpb%2B4HcUeGPZ9QziBvL%2FGot9jB9GgzXorls%2BHuwRS0cjRmvpzlU3EbusleEaMzTWyKPNjowrcgcrdiHCIZSzv888r5AvQBZgTH%2BNmDGah3A413qbM5PlwtmjdjYnn9hCI0mk%2BeooZk8o8iRsuTfwuutGVr2atVUc1gua3TGHt0BP2yTtPX3Un%2BSj9SLUlzV45LskwsMwisexvwY6pgHLCfLXFW%2FXx8RNRg%2BC8duA%2BoJzGT6vqh8BS2nbCZzS1YVyzovxIxnB45ySTAP2vI0sBsq%2FO5so%2Fy7avnjnfeX72f4V5jK0CxPh95n6eTd%2FdKoyIDB82LUvpgTY7GcQNwUy8%2FAhP%2FElicZGr8LDKOHTx5ukIPOJDPOxofwwMGZW%2BSKjr%2FU3nGVRlWe1ClJ22HZeAEEGG2BI4C4roF8oZ9JM1gnCKFFj&X-Amz-Signature=7d9f800a1214470c94e713684256ca745970878a3dd7a1c54998cb56f3df0067&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCWTIUD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEdd1Dbtjmmq5eHYDqL3nSKASZEdyDm8hhrJ3ZQy5vsjAiATbeBoB7izODomZq7s5uH0jmPlupcAhhtc9H2ZJW%2F3gyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeZBxJvgckKHsKSNJKtwDLI%2BKTtPL4ZntpI%2B2Uy81wb433K2Ui1YAWx8EQnAaWM3CswFfhM%2F3EiPT6P9R1WJN%2BZTZlSvJvcTnWjnAc3Kflwo%2B1mGAUAuVtwRrV8sDeEFBTu7CUwBFkE%2BLTS9Z5ffPVgS%2F%2FCZQ%2FAlBskHFInnnQPKAgZezEW7c1xbC4gS29Ae9D0hW8PMLfdVAXqbOAMfAX8%2BHeHo2laZSGQKeox8RvHTzy%2BO0OWZbNuO3kGQkcy396b07JAjLGwc5vy3BuW%2FK4ZuJHFJAR7nsUKRgv1MbTVzn%2FXcHTUTcYd%2FtV1mGwYXZwAMF7aQhkNAb15A081qGuyvpxiLSFKTQ6xp6CURu7t8JNs4ZBAdDuwOnsypgTqWC4EjwaBV4aWSnZtJVRIOv52X7038n6Us0WQK4kThC%2FRveG2gzsL0X6aLIIDffJ%2Fj8wkioXyDFRpb%2B4HcUeGPZ9QziBvL%2FGot9jB9GgzXorls%2BHuwRS0cjRmvpzlU3EbusleEaMzTWyKPNjowrcgcrdiHCIZSzv888r5AvQBZgTH%2BNmDGah3A413qbM5PlwtmjdjYnn9hCI0mk%2BeooZk8o8iRsuTfwuutGVr2atVUc1gua3TGHt0BP2yTtPX3Un%2BSj9SLUlzV45LskwsMwisexvwY6pgHLCfLXFW%2FXx8RNRg%2BC8duA%2BoJzGT6vqh8BS2nbCZzS1YVyzovxIxnB45ySTAP2vI0sBsq%2FO5so%2Fy7avnjnfeX72f4V5jK0CxPh95n6eTd%2FdKoyIDB82LUvpgTY7GcQNwUy8%2FAhP%2FElicZGr8LDKOHTx5ukIPOJDPOxofwwMGZW%2BSKjr%2FU3nGVRlWe1ClJ22HZeAEEGG2BI4C4roF8oZ9JM1gnCKFFj&X-Amz-Signature=62e4b9843e1c2ce3841bf9a981eb9da0ad0b6a9b703d9f94e82435d4aae5eb64&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCWTIUD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEdd1Dbtjmmq5eHYDqL3nSKASZEdyDm8hhrJ3ZQy5vsjAiATbeBoB7izODomZq7s5uH0jmPlupcAhhtc9H2ZJW%2F3gyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeZBxJvgckKHsKSNJKtwDLI%2BKTtPL4ZntpI%2B2Uy81wb433K2Ui1YAWx8EQnAaWM3CswFfhM%2F3EiPT6P9R1WJN%2BZTZlSvJvcTnWjnAc3Kflwo%2B1mGAUAuVtwRrV8sDeEFBTu7CUwBFkE%2BLTS9Z5ffPVgS%2F%2FCZQ%2FAlBskHFInnnQPKAgZezEW7c1xbC4gS29Ae9D0hW8PMLfdVAXqbOAMfAX8%2BHeHo2laZSGQKeox8RvHTzy%2BO0OWZbNuO3kGQkcy396b07JAjLGwc5vy3BuW%2FK4ZuJHFJAR7nsUKRgv1MbTVzn%2FXcHTUTcYd%2FtV1mGwYXZwAMF7aQhkNAb15A081qGuyvpxiLSFKTQ6xp6CURu7t8JNs4ZBAdDuwOnsypgTqWC4EjwaBV4aWSnZtJVRIOv52X7038n6Us0WQK4kThC%2FRveG2gzsL0X6aLIIDffJ%2Fj8wkioXyDFRpb%2B4HcUeGPZ9QziBvL%2FGot9jB9GgzXorls%2BHuwRS0cjRmvpzlU3EbusleEaMzTWyKPNjowrcgcrdiHCIZSzv888r5AvQBZgTH%2BNmDGah3A413qbM5PlwtmjdjYnn9hCI0mk%2BeooZk8o8iRsuTfwuutGVr2atVUc1gua3TGHt0BP2yTtPX3Un%2BSj9SLUlzV45LskwsMwisexvwY6pgHLCfLXFW%2FXx8RNRg%2BC8duA%2BoJzGT6vqh8BS2nbCZzS1YVyzovxIxnB45ySTAP2vI0sBsq%2FO5so%2Fy7avnjnfeX72f4V5jK0CxPh95n6eTd%2FdKoyIDB82LUvpgTY7GcQNwUy8%2FAhP%2FElicZGr8LDKOHTx5ukIPOJDPOxofwwMGZW%2BSKjr%2FU3nGVRlWe1ClJ22HZeAEEGG2BI4C4roF8oZ9JM1gnCKFFj&X-Amz-Signature=633cd9c07e655205cc1f4f4aabefcf6c8893f7bc57676b33174e0c4ddf56ce8a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCWTIUD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEdd1Dbtjmmq5eHYDqL3nSKASZEdyDm8hhrJ3ZQy5vsjAiATbeBoB7izODomZq7s5uH0jmPlupcAhhtc9H2ZJW%2F3gyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeZBxJvgckKHsKSNJKtwDLI%2BKTtPL4ZntpI%2B2Uy81wb433K2Ui1YAWx8EQnAaWM3CswFfhM%2F3EiPT6P9R1WJN%2BZTZlSvJvcTnWjnAc3Kflwo%2B1mGAUAuVtwRrV8sDeEFBTu7CUwBFkE%2BLTS9Z5ffPVgS%2F%2FCZQ%2FAlBskHFInnnQPKAgZezEW7c1xbC4gS29Ae9D0hW8PMLfdVAXqbOAMfAX8%2BHeHo2laZSGQKeox8RvHTzy%2BO0OWZbNuO3kGQkcy396b07JAjLGwc5vy3BuW%2FK4ZuJHFJAR7nsUKRgv1MbTVzn%2FXcHTUTcYd%2FtV1mGwYXZwAMF7aQhkNAb15A081qGuyvpxiLSFKTQ6xp6CURu7t8JNs4ZBAdDuwOnsypgTqWC4EjwaBV4aWSnZtJVRIOv52X7038n6Us0WQK4kThC%2FRveG2gzsL0X6aLIIDffJ%2Fj8wkioXyDFRpb%2B4HcUeGPZ9QziBvL%2FGot9jB9GgzXorls%2BHuwRS0cjRmvpzlU3EbusleEaMzTWyKPNjowrcgcrdiHCIZSzv888r5AvQBZgTH%2BNmDGah3A413qbM5PlwtmjdjYnn9hCI0mk%2BeooZk8o8iRsuTfwuutGVr2atVUc1gua3TGHt0BP2yTtPX3Un%2BSj9SLUlzV45LskwsMwisexvwY6pgHLCfLXFW%2FXx8RNRg%2BC8duA%2BoJzGT6vqh8BS2nbCZzS1YVyzovxIxnB45ySTAP2vI0sBsq%2FO5so%2Fy7avnjnfeX72f4V5jK0CxPh95n6eTd%2FdKoyIDB82LUvpgTY7GcQNwUy8%2FAhP%2FElicZGr8LDKOHTx5ukIPOJDPOxofwwMGZW%2BSKjr%2FU3nGVRlWe1ClJ22HZeAEEGG2BI4C4roF8oZ9JM1gnCKFFj&X-Amz-Signature=5599dcbe121f70148db3a0cb6def2d81060e414b8802ce6014761940db51ab33&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCWTIUD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEdd1Dbtjmmq5eHYDqL3nSKASZEdyDm8hhrJ3ZQy5vsjAiATbeBoB7izODomZq7s5uH0jmPlupcAhhtc9H2ZJW%2F3gyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeZBxJvgckKHsKSNJKtwDLI%2BKTtPL4ZntpI%2B2Uy81wb433K2Ui1YAWx8EQnAaWM3CswFfhM%2F3EiPT6P9R1WJN%2BZTZlSvJvcTnWjnAc3Kflwo%2B1mGAUAuVtwRrV8sDeEFBTu7CUwBFkE%2BLTS9Z5ffPVgS%2F%2FCZQ%2FAlBskHFInnnQPKAgZezEW7c1xbC4gS29Ae9D0hW8PMLfdVAXqbOAMfAX8%2BHeHo2laZSGQKeox8RvHTzy%2BO0OWZbNuO3kGQkcy396b07JAjLGwc5vy3BuW%2FK4ZuJHFJAR7nsUKRgv1MbTVzn%2FXcHTUTcYd%2FtV1mGwYXZwAMF7aQhkNAb15A081qGuyvpxiLSFKTQ6xp6CURu7t8JNs4ZBAdDuwOnsypgTqWC4EjwaBV4aWSnZtJVRIOv52X7038n6Us0WQK4kThC%2FRveG2gzsL0X6aLIIDffJ%2Fj8wkioXyDFRpb%2B4HcUeGPZ9QziBvL%2FGot9jB9GgzXorls%2BHuwRS0cjRmvpzlU3EbusleEaMzTWyKPNjowrcgcrdiHCIZSzv888r5AvQBZgTH%2BNmDGah3A413qbM5PlwtmjdjYnn9hCI0mk%2BeooZk8o8iRsuTfwuutGVr2atVUc1gua3TGHt0BP2yTtPX3Un%2BSj9SLUlzV45LskwsMwisexvwY6pgHLCfLXFW%2FXx8RNRg%2BC8duA%2BoJzGT6vqh8BS2nbCZzS1YVyzovxIxnB45ySTAP2vI0sBsq%2FO5so%2Fy7avnjnfeX72f4V5jK0CxPh95n6eTd%2FdKoyIDB82LUvpgTY7GcQNwUy8%2FAhP%2FElicZGr8LDKOHTx5ukIPOJDPOxofwwMGZW%2BSKjr%2FU3nGVRlWe1ClJ22HZeAEEGG2BI4C4roF8oZ9JM1gnCKFFj&X-Amz-Signature=5989977028e5c1ff06a9ae7712500592f2c7863f0e3db8867ea9e1f50205d766&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
