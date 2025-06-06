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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NMDQIK4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF4p3pZO8dKoq2ga%2BHD%2BHQYBdWzAqeFf0unxaEqREebAiBdyzO2nwB75vYgHP7c%2Fj6hBvLRbRgselschmP0L9hJDyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMDTKpw3bqblrsJsfIKtwD7MvZhuAWKiB80NaFfR3%2BBz6K%2FhmWn7etJfGYq3oBusLN6eURvF49ZBXUpZ5FVn91lisavuO6YzG2dcT3fs008gaXp%2Fo5e%2BshGAvBTCC%2BiNVXT3Q31ELPdkL6CFjZZlhbuuOy9cBkhIPayx2F7FrZsLE6ka47TIiQqw89V3lqNCbc5B7Pa2JjOd34n%2B2EzBUuGpvd0rivhlW8Riqszih%2FmM7CeN%2F6xSOx8y9wD4rGJcQzvDCTtFmg9AGzmm9vnnUwqKRDEfOaZ%2B4c7rHKsgfn1mqkQrWw7ykCX22Ci1%2BOfof5W3Q6Bmi5JwLIRdSDMKxhs2cnT9etlZsjCBfpbetItFHkiDkjvelx8VORBLKO6jQPjSeP7yMasqH9KgVBMwWZpy9RhOURHTD4sIjkB93pxPCdKeiGSz32N16xDJ7xKxy8yd4QeAcAewjhBgu%2BwJgFEoano6XPGZIAPea5nLUqVVHY7y4BDtSsosrEu3ivg1pWETt4UH3unBDSEljKMZuo49Owa0JLiw2u7tNGyjzK2%2BFThZ1WWLaY1c19rte8D6tTLCGa3eJ1N9UdXUbQQBXamACYZbA21Pb6OZCLU6RDac0NDaUY790Z9Cev7DjCcJJ1Hbw6dkDq%2BEez14Uwp9aMwgY6pgE1rNNdX3Dvi6nQNGIc193SIkNbRoUQH0T2X47Mfxw3lJ8XdwZHYXKUlS4ml7KYLWE2K3rIzoNfhNzpdFcSDH59DyMeKHJyrrnMDralsDR3RMfW7kOSu8mG%2BL2BKfVlxwXF0684LDKLlP3%2F5y5G85aWUobJS2ajZUVwyHF1RZ8PFP7EGVb8ZAygCp71%2Fh%2FVatOedKWdWCDDA5POgxg8f1D%2Fn3p6Ycot&X-Amz-Signature=8f723a90bc6a0cdf1edb1090cdbc455d5add4e8583f5684bbb7ee81434f604f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NMDQIK4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF4p3pZO8dKoq2ga%2BHD%2BHQYBdWzAqeFf0unxaEqREebAiBdyzO2nwB75vYgHP7c%2Fj6hBvLRbRgselschmP0L9hJDyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMDTKpw3bqblrsJsfIKtwD7MvZhuAWKiB80NaFfR3%2BBz6K%2FhmWn7etJfGYq3oBusLN6eURvF49ZBXUpZ5FVn91lisavuO6YzG2dcT3fs008gaXp%2Fo5e%2BshGAvBTCC%2BiNVXT3Q31ELPdkL6CFjZZlhbuuOy9cBkhIPayx2F7FrZsLE6ka47TIiQqw89V3lqNCbc5B7Pa2JjOd34n%2B2EzBUuGpvd0rivhlW8Riqszih%2FmM7CeN%2F6xSOx8y9wD4rGJcQzvDCTtFmg9AGzmm9vnnUwqKRDEfOaZ%2B4c7rHKsgfn1mqkQrWw7ykCX22Ci1%2BOfof5W3Q6Bmi5JwLIRdSDMKxhs2cnT9etlZsjCBfpbetItFHkiDkjvelx8VORBLKO6jQPjSeP7yMasqH9KgVBMwWZpy9RhOURHTD4sIjkB93pxPCdKeiGSz32N16xDJ7xKxy8yd4QeAcAewjhBgu%2BwJgFEoano6XPGZIAPea5nLUqVVHY7y4BDtSsosrEu3ivg1pWETt4UH3unBDSEljKMZuo49Owa0JLiw2u7tNGyjzK2%2BFThZ1WWLaY1c19rte8D6tTLCGa3eJ1N9UdXUbQQBXamACYZbA21Pb6OZCLU6RDac0NDaUY790Z9Cev7DjCcJJ1Hbw6dkDq%2BEez14Uwp9aMwgY6pgE1rNNdX3Dvi6nQNGIc193SIkNbRoUQH0T2X47Mfxw3lJ8XdwZHYXKUlS4ml7KYLWE2K3rIzoNfhNzpdFcSDH59DyMeKHJyrrnMDralsDR3RMfW7kOSu8mG%2BL2BKfVlxwXF0684LDKLlP3%2F5y5G85aWUobJS2ajZUVwyHF1RZ8PFP7EGVb8ZAygCp71%2Fh%2FVatOedKWdWCDDA5POgxg8f1D%2Fn3p6Ycot&X-Amz-Signature=bf9a55bc7e6b22cf8bae98f7b08bb3136a4349cfe8711dbd423e9f0b4ec9236d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NMDQIK4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF4p3pZO8dKoq2ga%2BHD%2BHQYBdWzAqeFf0unxaEqREebAiBdyzO2nwB75vYgHP7c%2Fj6hBvLRbRgselschmP0L9hJDyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMDTKpw3bqblrsJsfIKtwD7MvZhuAWKiB80NaFfR3%2BBz6K%2FhmWn7etJfGYq3oBusLN6eURvF49ZBXUpZ5FVn91lisavuO6YzG2dcT3fs008gaXp%2Fo5e%2BshGAvBTCC%2BiNVXT3Q31ELPdkL6CFjZZlhbuuOy9cBkhIPayx2F7FrZsLE6ka47TIiQqw89V3lqNCbc5B7Pa2JjOd34n%2B2EzBUuGpvd0rivhlW8Riqszih%2FmM7CeN%2F6xSOx8y9wD4rGJcQzvDCTtFmg9AGzmm9vnnUwqKRDEfOaZ%2B4c7rHKsgfn1mqkQrWw7ykCX22Ci1%2BOfof5W3Q6Bmi5JwLIRdSDMKxhs2cnT9etlZsjCBfpbetItFHkiDkjvelx8VORBLKO6jQPjSeP7yMasqH9KgVBMwWZpy9RhOURHTD4sIjkB93pxPCdKeiGSz32N16xDJ7xKxy8yd4QeAcAewjhBgu%2BwJgFEoano6XPGZIAPea5nLUqVVHY7y4BDtSsosrEu3ivg1pWETt4UH3unBDSEljKMZuo49Owa0JLiw2u7tNGyjzK2%2BFThZ1WWLaY1c19rte8D6tTLCGa3eJ1N9UdXUbQQBXamACYZbA21Pb6OZCLU6RDac0NDaUY790Z9Cev7DjCcJJ1Hbw6dkDq%2BEez14Uwp9aMwgY6pgE1rNNdX3Dvi6nQNGIc193SIkNbRoUQH0T2X47Mfxw3lJ8XdwZHYXKUlS4ml7KYLWE2K3rIzoNfhNzpdFcSDH59DyMeKHJyrrnMDralsDR3RMfW7kOSu8mG%2BL2BKfVlxwXF0684LDKLlP3%2F5y5G85aWUobJS2ajZUVwyHF1RZ8PFP7EGVb8ZAygCp71%2Fh%2FVatOedKWdWCDDA5POgxg8f1D%2Fn3p6Ycot&X-Amz-Signature=d8b513bd7530704f4fb781ed441495587ea9dd6c60ee5f7f64f4aebf713451fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NMDQIK4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF4p3pZO8dKoq2ga%2BHD%2BHQYBdWzAqeFf0unxaEqREebAiBdyzO2nwB75vYgHP7c%2Fj6hBvLRbRgselschmP0L9hJDyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMDTKpw3bqblrsJsfIKtwD7MvZhuAWKiB80NaFfR3%2BBz6K%2FhmWn7etJfGYq3oBusLN6eURvF49ZBXUpZ5FVn91lisavuO6YzG2dcT3fs008gaXp%2Fo5e%2BshGAvBTCC%2BiNVXT3Q31ELPdkL6CFjZZlhbuuOy9cBkhIPayx2F7FrZsLE6ka47TIiQqw89V3lqNCbc5B7Pa2JjOd34n%2B2EzBUuGpvd0rivhlW8Riqszih%2FmM7CeN%2F6xSOx8y9wD4rGJcQzvDCTtFmg9AGzmm9vnnUwqKRDEfOaZ%2B4c7rHKsgfn1mqkQrWw7ykCX22Ci1%2BOfof5W3Q6Bmi5JwLIRdSDMKxhs2cnT9etlZsjCBfpbetItFHkiDkjvelx8VORBLKO6jQPjSeP7yMasqH9KgVBMwWZpy9RhOURHTD4sIjkB93pxPCdKeiGSz32N16xDJ7xKxy8yd4QeAcAewjhBgu%2BwJgFEoano6XPGZIAPea5nLUqVVHY7y4BDtSsosrEu3ivg1pWETt4UH3unBDSEljKMZuo49Owa0JLiw2u7tNGyjzK2%2BFThZ1WWLaY1c19rte8D6tTLCGa3eJ1N9UdXUbQQBXamACYZbA21Pb6OZCLU6RDac0NDaUY790Z9Cev7DjCcJJ1Hbw6dkDq%2BEez14Uwp9aMwgY6pgE1rNNdX3Dvi6nQNGIc193SIkNbRoUQH0T2X47Mfxw3lJ8XdwZHYXKUlS4ml7KYLWE2K3rIzoNfhNzpdFcSDH59DyMeKHJyrrnMDralsDR3RMfW7kOSu8mG%2BL2BKfVlxwXF0684LDKLlP3%2F5y5G85aWUobJS2ajZUVwyHF1RZ8PFP7EGVb8ZAygCp71%2Fh%2FVatOedKWdWCDDA5POgxg8f1D%2Fn3p6Ycot&X-Amz-Signature=9eb642547b441912e37b93f809ea18c7d45dbcd763795fd30e07afc020d6ec44&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NMDQIK4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF4p3pZO8dKoq2ga%2BHD%2BHQYBdWzAqeFf0unxaEqREebAiBdyzO2nwB75vYgHP7c%2Fj6hBvLRbRgselschmP0L9hJDyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMDTKpw3bqblrsJsfIKtwD7MvZhuAWKiB80NaFfR3%2BBz6K%2FhmWn7etJfGYq3oBusLN6eURvF49ZBXUpZ5FVn91lisavuO6YzG2dcT3fs008gaXp%2Fo5e%2BshGAvBTCC%2BiNVXT3Q31ELPdkL6CFjZZlhbuuOy9cBkhIPayx2F7FrZsLE6ka47TIiQqw89V3lqNCbc5B7Pa2JjOd34n%2B2EzBUuGpvd0rivhlW8Riqszih%2FmM7CeN%2F6xSOx8y9wD4rGJcQzvDCTtFmg9AGzmm9vnnUwqKRDEfOaZ%2B4c7rHKsgfn1mqkQrWw7ykCX22Ci1%2BOfof5W3Q6Bmi5JwLIRdSDMKxhs2cnT9etlZsjCBfpbetItFHkiDkjvelx8VORBLKO6jQPjSeP7yMasqH9KgVBMwWZpy9RhOURHTD4sIjkB93pxPCdKeiGSz32N16xDJ7xKxy8yd4QeAcAewjhBgu%2BwJgFEoano6XPGZIAPea5nLUqVVHY7y4BDtSsosrEu3ivg1pWETt4UH3unBDSEljKMZuo49Owa0JLiw2u7tNGyjzK2%2BFThZ1WWLaY1c19rte8D6tTLCGa3eJ1N9UdXUbQQBXamACYZbA21Pb6OZCLU6RDac0NDaUY790Z9Cev7DjCcJJ1Hbw6dkDq%2BEez14Uwp9aMwgY6pgE1rNNdX3Dvi6nQNGIc193SIkNbRoUQH0T2X47Mfxw3lJ8XdwZHYXKUlS4ml7KYLWE2K3rIzoNfhNzpdFcSDH59DyMeKHJyrrnMDralsDR3RMfW7kOSu8mG%2BL2BKfVlxwXF0684LDKLlP3%2F5y5G85aWUobJS2ajZUVwyHF1RZ8PFP7EGVb8ZAygCp71%2Fh%2FVatOedKWdWCDDA5POgxg8f1D%2Fn3p6Ycot&X-Amz-Signature=0cf90554b5744733bc412dd450adf0970593b759b66b9a866fea22ad96fc8bae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NMDQIK4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF4p3pZO8dKoq2ga%2BHD%2BHQYBdWzAqeFf0unxaEqREebAiBdyzO2nwB75vYgHP7c%2Fj6hBvLRbRgselschmP0L9hJDyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMDTKpw3bqblrsJsfIKtwD7MvZhuAWKiB80NaFfR3%2BBz6K%2FhmWn7etJfGYq3oBusLN6eURvF49ZBXUpZ5FVn91lisavuO6YzG2dcT3fs008gaXp%2Fo5e%2BshGAvBTCC%2BiNVXT3Q31ELPdkL6CFjZZlhbuuOy9cBkhIPayx2F7FrZsLE6ka47TIiQqw89V3lqNCbc5B7Pa2JjOd34n%2B2EzBUuGpvd0rivhlW8Riqszih%2FmM7CeN%2F6xSOx8y9wD4rGJcQzvDCTtFmg9AGzmm9vnnUwqKRDEfOaZ%2B4c7rHKsgfn1mqkQrWw7ykCX22Ci1%2BOfof5W3Q6Bmi5JwLIRdSDMKxhs2cnT9etlZsjCBfpbetItFHkiDkjvelx8VORBLKO6jQPjSeP7yMasqH9KgVBMwWZpy9RhOURHTD4sIjkB93pxPCdKeiGSz32N16xDJ7xKxy8yd4QeAcAewjhBgu%2BwJgFEoano6XPGZIAPea5nLUqVVHY7y4BDtSsosrEu3ivg1pWETt4UH3unBDSEljKMZuo49Owa0JLiw2u7tNGyjzK2%2BFThZ1WWLaY1c19rte8D6tTLCGa3eJ1N9UdXUbQQBXamACYZbA21Pb6OZCLU6RDac0NDaUY790Z9Cev7DjCcJJ1Hbw6dkDq%2BEez14Uwp9aMwgY6pgE1rNNdX3Dvi6nQNGIc193SIkNbRoUQH0T2X47Mfxw3lJ8XdwZHYXKUlS4ml7KYLWE2K3rIzoNfhNzpdFcSDH59DyMeKHJyrrnMDralsDR3RMfW7kOSu8mG%2BL2BKfVlxwXF0684LDKLlP3%2F5y5G85aWUobJS2ajZUVwyHF1RZ8PFP7EGVb8ZAygCp71%2Fh%2FVatOedKWdWCDDA5POgxg8f1D%2Fn3p6Ycot&X-Amz-Signature=cfbd179890388eebfb482a7ac3c3cd0c836ae0bcd71bb34772d3ddd1ff70932b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NMDQIK4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF4p3pZO8dKoq2ga%2BHD%2BHQYBdWzAqeFf0unxaEqREebAiBdyzO2nwB75vYgHP7c%2Fj6hBvLRbRgselschmP0L9hJDyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMDTKpw3bqblrsJsfIKtwD7MvZhuAWKiB80NaFfR3%2BBz6K%2FhmWn7etJfGYq3oBusLN6eURvF49ZBXUpZ5FVn91lisavuO6YzG2dcT3fs008gaXp%2Fo5e%2BshGAvBTCC%2BiNVXT3Q31ELPdkL6CFjZZlhbuuOy9cBkhIPayx2F7FrZsLE6ka47TIiQqw89V3lqNCbc5B7Pa2JjOd34n%2B2EzBUuGpvd0rivhlW8Riqszih%2FmM7CeN%2F6xSOx8y9wD4rGJcQzvDCTtFmg9AGzmm9vnnUwqKRDEfOaZ%2B4c7rHKsgfn1mqkQrWw7ykCX22Ci1%2BOfof5W3Q6Bmi5JwLIRdSDMKxhs2cnT9etlZsjCBfpbetItFHkiDkjvelx8VORBLKO6jQPjSeP7yMasqH9KgVBMwWZpy9RhOURHTD4sIjkB93pxPCdKeiGSz32N16xDJ7xKxy8yd4QeAcAewjhBgu%2BwJgFEoano6XPGZIAPea5nLUqVVHY7y4BDtSsosrEu3ivg1pWETt4UH3unBDSEljKMZuo49Owa0JLiw2u7tNGyjzK2%2BFThZ1WWLaY1c19rte8D6tTLCGa3eJ1N9UdXUbQQBXamACYZbA21Pb6OZCLU6RDac0NDaUY790Z9Cev7DjCcJJ1Hbw6dkDq%2BEez14Uwp9aMwgY6pgE1rNNdX3Dvi6nQNGIc193SIkNbRoUQH0T2X47Mfxw3lJ8XdwZHYXKUlS4ml7KYLWE2K3rIzoNfhNzpdFcSDH59DyMeKHJyrrnMDralsDR3RMfW7kOSu8mG%2BL2BKfVlxwXF0684LDKLlP3%2F5y5G85aWUobJS2ajZUVwyHF1RZ8PFP7EGVb8ZAygCp71%2Fh%2FVatOedKWdWCDDA5POgxg8f1D%2Fn3p6Ycot&X-Amz-Signature=b474f04929faa420345c564e7304d72a1906381b8a334adaa2d76e9c78123214&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
