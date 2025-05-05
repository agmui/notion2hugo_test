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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYLDY7E%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCBK47%2BEb0gLKR0IWxIi6sDC3CYnuTrVBzhpHInWrtPxQIgDoPlX8iVHlB3Sxt67JH9hTeNP8m2yCMWAcZ%2BJFqx%2BvIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNmh8sjhNXGf1pvEGCrcA9GtLodF6tje4Ac2Is%2Bf9duMbGFNuH0eBGnOCsBENXfyxRXjAvkrIieX8rS6LphTuYhDTaxnC6KPq7Npab25uW47u%2FRi79BAYDQf0mACH%2FQXB2xdA2Cps5bhC5ETB%2FafaB1%2BLXT16GJRI20GT7FskIWTJxHgdObsAJZe7d%2F2cRdbTNLPXMKoFxJqBGTegaasJQ%2BINkZHsCO%2BuRsEgI%2B%2FQ95NLx57a92SUo6tiGhpb14ibInoeVilXXrDoD6galJVusxniX4jBAoAcw%2BQnfehEKe6Qh6TvnJ5KtE6tu0YwI%2BCV063mebculm7yGuYIDEXlULCGe%2F4JPKwI2idujWrGyLwQqkX%2BySPEhQKs%2FW1qf5yX8Y76B9VLIOBxpGvpDU1Kgdeke3q1s0LZojzDuRsHQrb0ytvjB21Fun8p4y0SlxO%2B7C8FOxf6cL2t%2BfoLMQ%2Bj%2FXBaXFiVs2VRsZpAnM6T%2BDdrKw30Ern8d5QcH0YZGAxLYU6qp4m2DP%2FF2wkZXRcoBCTkZgxzkSqqvm0%2B4foZJOxDRAqPD%2BolMVXHJOj80vuy9aCnVNkP%2B1cJs3peTP%2BUL2k2PsV42uZhXzgGi%2Bedr1%2FqzBAsT1ColrJwQBb8aHIAZemx4Jfov%2BIcIA5MLas38AGOqUB0f3TdnacxrTLpIMXjr7fhDmQKXd%2FsE96LJ3ZbbV278ZRRvWa3kYp0knJZdAYMXSdhmQsY4%2B3aWF56mbm%2BpWI%2BlqIkHACK1%2FQsqRWQzeY0c0II4p7qh8XWkz8ZZaD4%2FVjsb9LQx%2BWAZJE7AGOliziPTKRyvdFLGd7n9Sr%2F1SsoJe0IMFDzg%2FkugNOJG5IGeCbDbWiq1%2Buz8sFWjd6sbosx7UVrKGY&X-Amz-Signature=1863e8def84f90e36f1c5ae19ef2aaec3a1e9f8ef464c436df43b7046840983d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYLDY7E%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCBK47%2BEb0gLKR0IWxIi6sDC3CYnuTrVBzhpHInWrtPxQIgDoPlX8iVHlB3Sxt67JH9hTeNP8m2yCMWAcZ%2BJFqx%2BvIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNmh8sjhNXGf1pvEGCrcA9GtLodF6tje4Ac2Is%2Bf9duMbGFNuH0eBGnOCsBENXfyxRXjAvkrIieX8rS6LphTuYhDTaxnC6KPq7Npab25uW47u%2FRi79BAYDQf0mACH%2FQXB2xdA2Cps5bhC5ETB%2FafaB1%2BLXT16GJRI20GT7FskIWTJxHgdObsAJZe7d%2F2cRdbTNLPXMKoFxJqBGTegaasJQ%2BINkZHsCO%2BuRsEgI%2B%2FQ95NLx57a92SUo6tiGhpb14ibInoeVilXXrDoD6galJVusxniX4jBAoAcw%2BQnfehEKe6Qh6TvnJ5KtE6tu0YwI%2BCV063mebculm7yGuYIDEXlULCGe%2F4JPKwI2idujWrGyLwQqkX%2BySPEhQKs%2FW1qf5yX8Y76B9VLIOBxpGvpDU1Kgdeke3q1s0LZojzDuRsHQrb0ytvjB21Fun8p4y0SlxO%2B7C8FOxf6cL2t%2BfoLMQ%2Bj%2FXBaXFiVs2VRsZpAnM6T%2BDdrKw30Ern8d5QcH0YZGAxLYU6qp4m2DP%2FF2wkZXRcoBCTkZgxzkSqqvm0%2B4foZJOxDRAqPD%2BolMVXHJOj80vuy9aCnVNkP%2B1cJs3peTP%2BUL2k2PsV42uZhXzgGi%2Bedr1%2FqzBAsT1ColrJwQBb8aHIAZemx4Jfov%2BIcIA5MLas38AGOqUB0f3TdnacxrTLpIMXjr7fhDmQKXd%2FsE96LJ3ZbbV278ZRRvWa3kYp0knJZdAYMXSdhmQsY4%2B3aWF56mbm%2BpWI%2BlqIkHACK1%2FQsqRWQzeY0c0II4p7qh8XWkz8ZZaD4%2FVjsb9LQx%2BWAZJE7AGOliziPTKRyvdFLGd7n9Sr%2F1SsoJe0IMFDzg%2FkugNOJG5IGeCbDbWiq1%2Buz8sFWjd6sbosx7UVrKGY&X-Amz-Signature=74541f9d6eb91db36f0fad94bfd2139af90476665611ee9596ce65d112ab3d14&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYLDY7E%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCBK47%2BEb0gLKR0IWxIi6sDC3CYnuTrVBzhpHInWrtPxQIgDoPlX8iVHlB3Sxt67JH9hTeNP8m2yCMWAcZ%2BJFqx%2BvIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNmh8sjhNXGf1pvEGCrcA9GtLodF6tje4Ac2Is%2Bf9duMbGFNuH0eBGnOCsBENXfyxRXjAvkrIieX8rS6LphTuYhDTaxnC6KPq7Npab25uW47u%2FRi79BAYDQf0mACH%2FQXB2xdA2Cps5bhC5ETB%2FafaB1%2BLXT16GJRI20GT7FskIWTJxHgdObsAJZe7d%2F2cRdbTNLPXMKoFxJqBGTegaasJQ%2BINkZHsCO%2BuRsEgI%2B%2FQ95NLx57a92SUo6tiGhpb14ibInoeVilXXrDoD6galJVusxniX4jBAoAcw%2BQnfehEKe6Qh6TvnJ5KtE6tu0YwI%2BCV063mebculm7yGuYIDEXlULCGe%2F4JPKwI2idujWrGyLwQqkX%2BySPEhQKs%2FW1qf5yX8Y76B9VLIOBxpGvpDU1Kgdeke3q1s0LZojzDuRsHQrb0ytvjB21Fun8p4y0SlxO%2B7C8FOxf6cL2t%2BfoLMQ%2Bj%2FXBaXFiVs2VRsZpAnM6T%2BDdrKw30Ern8d5QcH0YZGAxLYU6qp4m2DP%2FF2wkZXRcoBCTkZgxzkSqqvm0%2B4foZJOxDRAqPD%2BolMVXHJOj80vuy9aCnVNkP%2B1cJs3peTP%2BUL2k2PsV42uZhXzgGi%2Bedr1%2FqzBAsT1ColrJwQBb8aHIAZemx4Jfov%2BIcIA5MLas38AGOqUB0f3TdnacxrTLpIMXjr7fhDmQKXd%2FsE96LJ3ZbbV278ZRRvWa3kYp0knJZdAYMXSdhmQsY4%2B3aWF56mbm%2BpWI%2BlqIkHACK1%2FQsqRWQzeY0c0II4p7qh8XWkz8ZZaD4%2FVjsb9LQx%2BWAZJE7AGOliziPTKRyvdFLGd7n9Sr%2F1SsoJe0IMFDzg%2FkugNOJG5IGeCbDbWiq1%2Buz8sFWjd6sbosx7UVrKGY&X-Amz-Signature=3d128180973d697e74f9e64b34a926d94de1d266c65976a98a05aa05f658299a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYLDY7E%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCBK47%2BEb0gLKR0IWxIi6sDC3CYnuTrVBzhpHInWrtPxQIgDoPlX8iVHlB3Sxt67JH9hTeNP8m2yCMWAcZ%2BJFqx%2BvIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNmh8sjhNXGf1pvEGCrcA9GtLodF6tje4Ac2Is%2Bf9duMbGFNuH0eBGnOCsBENXfyxRXjAvkrIieX8rS6LphTuYhDTaxnC6KPq7Npab25uW47u%2FRi79BAYDQf0mACH%2FQXB2xdA2Cps5bhC5ETB%2FafaB1%2BLXT16GJRI20GT7FskIWTJxHgdObsAJZe7d%2F2cRdbTNLPXMKoFxJqBGTegaasJQ%2BINkZHsCO%2BuRsEgI%2B%2FQ95NLx57a92SUo6tiGhpb14ibInoeVilXXrDoD6galJVusxniX4jBAoAcw%2BQnfehEKe6Qh6TvnJ5KtE6tu0YwI%2BCV063mebculm7yGuYIDEXlULCGe%2F4JPKwI2idujWrGyLwQqkX%2BySPEhQKs%2FW1qf5yX8Y76B9VLIOBxpGvpDU1Kgdeke3q1s0LZojzDuRsHQrb0ytvjB21Fun8p4y0SlxO%2B7C8FOxf6cL2t%2BfoLMQ%2Bj%2FXBaXFiVs2VRsZpAnM6T%2BDdrKw30Ern8d5QcH0YZGAxLYU6qp4m2DP%2FF2wkZXRcoBCTkZgxzkSqqvm0%2B4foZJOxDRAqPD%2BolMVXHJOj80vuy9aCnVNkP%2B1cJs3peTP%2BUL2k2PsV42uZhXzgGi%2Bedr1%2FqzBAsT1ColrJwQBb8aHIAZemx4Jfov%2BIcIA5MLas38AGOqUB0f3TdnacxrTLpIMXjr7fhDmQKXd%2FsE96LJ3ZbbV278ZRRvWa3kYp0knJZdAYMXSdhmQsY4%2B3aWF56mbm%2BpWI%2BlqIkHACK1%2FQsqRWQzeY0c0II4p7qh8XWkz8ZZaD4%2FVjsb9LQx%2BWAZJE7AGOliziPTKRyvdFLGd7n9Sr%2F1SsoJe0IMFDzg%2FkugNOJG5IGeCbDbWiq1%2Buz8sFWjd6sbosx7UVrKGY&X-Amz-Signature=314b78b08938f1679f5d0694dc4fd943aa404c31fb4a31093d2b3f7448345064&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYLDY7E%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCBK47%2BEb0gLKR0IWxIi6sDC3CYnuTrVBzhpHInWrtPxQIgDoPlX8iVHlB3Sxt67JH9hTeNP8m2yCMWAcZ%2BJFqx%2BvIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNmh8sjhNXGf1pvEGCrcA9GtLodF6tje4Ac2Is%2Bf9duMbGFNuH0eBGnOCsBENXfyxRXjAvkrIieX8rS6LphTuYhDTaxnC6KPq7Npab25uW47u%2FRi79BAYDQf0mACH%2FQXB2xdA2Cps5bhC5ETB%2FafaB1%2BLXT16GJRI20GT7FskIWTJxHgdObsAJZe7d%2F2cRdbTNLPXMKoFxJqBGTegaasJQ%2BINkZHsCO%2BuRsEgI%2B%2FQ95NLx57a92SUo6tiGhpb14ibInoeVilXXrDoD6galJVusxniX4jBAoAcw%2BQnfehEKe6Qh6TvnJ5KtE6tu0YwI%2BCV063mebculm7yGuYIDEXlULCGe%2F4JPKwI2idujWrGyLwQqkX%2BySPEhQKs%2FW1qf5yX8Y76B9VLIOBxpGvpDU1Kgdeke3q1s0LZojzDuRsHQrb0ytvjB21Fun8p4y0SlxO%2B7C8FOxf6cL2t%2BfoLMQ%2Bj%2FXBaXFiVs2VRsZpAnM6T%2BDdrKw30Ern8d5QcH0YZGAxLYU6qp4m2DP%2FF2wkZXRcoBCTkZgxzkSqqvm0%2B4foZJOxDRAqPD%2BolMVXHJOj80vuy9aCnVNkP%2B1cJs3peTP%2BUL2k2PsV42uZhXzgGi%2Bedr1%2FqzBAsT1ColrJwQBb8aHIAZemx4Jfov%2BIcIA5MLas38AGOqUB0f3TdnacxrTLpIMXjr7fhDmQKXd%2FsE96LJ3ZbbV278ZRRvWa3kYp0knJZdAYMXSdhmQsY4%2B3aWF56mbm%2BpWI%2BlqIkHACK1%2FQsqRWQzeY0c0II4p7qh8XWkz8ZZaD4%2FVjsb9LQx%2BWAZJE7AGOliziPTKRyvdFLGd7n9Sr%2F1SsoJe0IMFDzg%2FkugNOJG5IGeCbDbWiq1%2Buz8sFWjd6sbosx7UVrKGY&X-Amz-Signature=f158961be96f418152f1bab01980c73752f7e0cac8143541b7f6ee708e8fb5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYLDY7E%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCBK47%2BEb0gLKR0IWxIi6sDC3CYnuTrVBzhpHInWrtPxQIgDoPlX8iVHlB3Sxt67JH9hTeNP8m2yCMWAcZ%2BJFqx%2BvIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNmh8sjhNXGf1pvEGCrcA9GtLodF6tje4Ac2Is%2Bf9duMbGFNuH0eBGnOCsBENXfyxRXjAvkrIieX8rS6LphTuYhDTaxnC6KPq7Npab25uW47u%2FRi79BAYDQf0mACH%2FQXB2xdA2Cps5bhC5ETB%2FafaB1%2BLXT16GJRI20GT7FskIWTJxHgdObsAJZe7d%2F2cRdbTNLPXMKoFxJqBGTegaasJQ%2BINkZHsCO%2BuRsEgI%2B%2FQ95NLx57a92SUo6tiGhpb14ibInoeVilXXrDoD6galJVusxniX4jBAoAcw%2BQnfehEKe6Qh6TvnJ5KtE6tu0YwI%2BCV063mebculm7yGuYIDEXlULCGe%2F4JPKwI2idujWrGyLwQqkX%2BySPEhQKs%2FW1qf5yX8Y76B9VLIOBxpGvpDU1Kgdeke3q1s0LZojzDuRsHQrb0ytvjB21Fun8p4y0SlxO%2B7C8FOxf6cL2t%2BfoLMQ%2Bj%2FXBaXFiVs2VRsZpAnM6T%2BDdrKw30Ern8d5QcH0YZGAxLYU6qp4m2DP%2FF2wkZXRcoBCTkZgxzkSqqvm0%2B4foZJOxDRAqPD%2BolMVXHJOj80vuy9aCnVNkP%2B1cJs3peTP%2BUL2k2PsV42uZhXzgGi%2Bedr1%2FqzBAsT1ColrJwQBb8aHIAZemx4Jfov%2BIcIA5MLas38AGOqUB0f3TdnacxrTLpIMXjr7fhDmQKXd%2FsE96LJ3ZbbV278ZRRvWa3kYp0knJZdAYMXSdhmQsY4%2B3aWF56mbm%2BpWI%2BlqIkHACK1%2FQsqRWQzeY0c0II4p7qh8XWkz8ZZaD4%2FVjsb9LQx%2BWAZJE7AGOliziPTKRyvdFLGd7n9Sr%2F1SsoJe0IMFDzg%2FkugNOJG5IGeCbDbWiq1%2Buz8sFWjd6sbosx7UVrKGY&X-Amz-Signature=e97798a15a96a966ed763449cbd5f22db27d10ee4b7a8145d62c10c54f941714&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYLDY7E%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCBK47%2BEb0gLKR0IWxIi6sDC3CYnuTrVBzhpHInWrtPxQIgDoPlX8iVHlB3Sxt67JH9hTeNP8m2yCMWAcZ%2BJFqx%2BvIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNmh8sjhNXGf1pvEGCrcA9GtLodF6tje4Ac2Is%2Bf9duMbGFNuH0eBGnOCsBENXfyxRXjAvkrIieX8rS6LphTuYhDTaxnC6KPq7Npab25uW47u%2FRi79BAYDQf0mACH%2FQXB2xdA2Cps5bhC5ETB%2FafaB1%2BLXT16GJRI20GT7FskIWTJxHgdObsAJZe7d%2F2cRdbTNLPXMKoFxJqBGTegaasJQ%2BINkZHsCO%2BuRsEgI%2B%2FQ95NLx57a92SUo6tiGhpb14ibInoeVilXXrDoD6galJVusxniX4jBAoAcw%2BQnfehEKe6Qh6TvnJ5KtE6tu0YwI%2BCV063mebculm7yGuYIDEXlULCGe%2F4JPKwI2idujWrGyLwQqkX%2BySPEhQKs%2FW1qf5yX8Y76B9VLIOBxpGvpDU1Kgdeke3q1s0LZojzDuRsHQrb0ytvjB21Fun8p4y0SlxO%2B7C8FOxf6cL2t%2BfoLMQ%2Bj%2FXBaXFiVs2VRsZpAnM6T%2BDdrKw30Ern8d5QcH0YZGAxLYU6qp4m2DP%2FF2wkZXRcoBCTkZgxzkSqqvm0%2B4foZJOxDRAqPD%2BolMVXHJOj80vuy9aCnVNkP%2B1cJs3peTP%2BUL2k2PsV42uZhXzgGi%2Bedr1%2FqzBAsT1ColrJwQBb8aHIAZemx4Jfov%2BIcIA5MLas38AGOqUB0f3TdnacxrTLpIMXjr7fhDmQKXd%2FsE96LJ3ZbbV278ZRRvWa3kYp0knJZdAYMXSdhmQsY4%2B3aWF56mbm%2BpWI%2BlqIkHACK1%2FQsqRWQzeY0c0II4p7qh8XWkz8ZZaD4%2FVjsb9LQx%2BWAZJE7AGOliziPTKRyvdFLGd7n9Sr%2F1SsoJe0IMFDzg%2FkugNOJG5IGeCbDbWiq1%2Buz8sFWjd6sbosx7UVrKGY&X-Amz-Signature=63876ab766d38ef01f5f92ddbe1f744bac66a641a6a3cb9db32f5c3fa82dfcaa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
