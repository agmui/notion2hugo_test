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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMTG3PX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDEZ1IUiRReTrGZt7u5IZYQme%2B7q2gse18OmEk%2B7UK1RAIhAJ77cOJlqwOymG3KqbX3fopr67v17o8UIFXgC%2FqE0bWDKv8DCGAQABoMNjM3NDIzMTgzODA1Igys1uYNK6z1FqZwF3oq3AMn69TljOQBEJez7wmareSHToG7cBr%2BZRuM53eykEmhbJltVSLtq4k6qrTDSFqNmt3X7S3VeNsDrt3Of3jKRK4QqdL4ftv%2Bl0J2ORnar3fCH8WesrKZcBLzp0LPyv0Ij6tb4jvMol6GWFUTc7SebDBufzWMl0G3T52JL8dJ5uwIUwzBYF3OV24C%2FBqiWmho%2Fcu7coQ8%2FiH4UXfn8pNRCMUAgDpoe0x43aybdwIf6e6bqrx8WBcdrzb7Vu0FnFN%2BUQeF5zeqHGtsw26ASOuLCcg7%2FG9yXsiXAsRwnG2YJ0PX3cqoB0xmccXmntUIWsjuXLJzDvbUUJo8rnwiTSWn%2BafPqleqty%2BQN9D18jgqs%2FujPiTrGnqRBhWTtIEAY3m6M94axVrPghS2%2BLvFgR1gJcuTQjUFbxDzrQVBSkf5BOBcwpUCd%2FU8Q1%2BrCrEjWem1LmlVilxqEPmhf1gXVwDJWQON9Ps67HPqA7TOuDncyioO%2FiD7YSO%2BQpbY2jTeMV1qws%2FxwTkKw06x8ghSKitl5bS6z60Hjl8qgynPra%2F%2BsFXSz24cubPb1ts5xbyPH67oop8Uy%2FDa1zaAjj1YUs2zXo%2FKIh05YV3U40u1soh3ePjlhLmm8IRVz7Ji%2FhgAMjCNs7G%2BBjqkAUK9aTCjac4qFuopVmMdwpjli%2FSauKAMRkEVBj0yULp0HmJz8jAugOUkKuzKiUH9vct8%2FfcvDCAFWG0oPkacuNSlHyyEib9PyKF9WseGGCd5YwTBnz%2BOv7yY3y9oN5fqm1U2%2Fx6Op5%2FXr%2B7g2d7T6jnO252aPHAqtxHAqj8vLcloQ%2FOZK0QkjIxILz9Q3DQPiYHEhDlrSL37qnMLyNBMsSUXI3Ez&X-Amz-Signature=d5a2092a9af718fd4ce3d999b8e4eeac79bcfc11de342187c511da748f42f0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMTG3PX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDEZ1IUiRReTrGZt7u5IZYQme%2B7q2gse18OmEk%2B7UK1RAIhAJ77cOJlqwOymG3KqbX3fopr67v17o8UIFXgC%2FqE0bWDKv8DCGAQABoMNjM3NDIzMTgzODA1Igys1uYNK6z1FqZwF3oq3AMn69TljOQBEJez7wmareSHToG7cBr%2BZRuM53eykEmhbJltVSLtq4k6qrTDSFqNmt3X7S3VeNsDrt3Of3jKRK4QqdL4ftv%2Bl0J2ORnar3fCH8WesrKZcBLzp0LPyv0Ij6tb4jvMol6GWFUTc7SebDBufzWMl0G3T52JL8dJ5uwIUwzBYF3OV24C%2FBqiWmho%2Fcu7coQ8%2FiH4UXfn8pNRCMUAgDpoe0x43aybdwIf6e6bqrx8WBcdrzb7Vu0FnFN%2BUQeF5zeqHGtsw26ASOuLCcg7%2FG9yXsiXAsRwnG2YJ0PX3cqoB0xmccXmntUIWsjuXLJzDvbUUJo8rnwiTSWn%2BafPqleqty%2BQN9D18jgqs%2FujPiTrGnqRBhWTtIEAY3m6M94axVrPghS2%2BLvFgR1gJcuTQjUFbxDzrQVBSkf5BOBcwpUCd%2FU8Q1%2BrCrEjWem1LmlVilxqEPmhf1gXVwDJWQON9Ps67HPqA7TOuDncyioO%2FiD7YSO%2BQpbY2jTeMV1qws%2FxwTkKw06x8ghSKitl5bS6z60Hjl8qgynPra%2F%2BsFXSz24cubPb1ts5xbyPH67oop8Uy%2FDa1zaAjj1YUs2zXo%2FKIh05YV3U40u1soh3ePjlhLmm8IRVz7Ji%2FhgAMjCNs7G%2BBjqkAUK9aTCjac4qFuopVmMdwpjli%2FSauKAMRkEVBj0yULp0HmJz8jAugOUkKuzKiUH9vct8%2FfcvDCAFWG0oPkacuNSlHyyEib9PyKF9WseGGCd5YwTBnz%2BOv7yY3y9oN5fqm1U2%2Fx6Op5%2FXr%2B7g2d7T6jnO252aPHAqtxHAqj8vLcloQ%2FOZK0QkjIxILz9Q3DQPiYHEhDlrSL37qnMLyNBMsSUXI3Ez&X-Amz-Signature=0f563b8d3e03081e35b3900baa7eb1a632203f2153d8adaf4293ec740e2c2644&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMTG3PX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDEZ1IUiRReTrGZt7u5IZYQme%2B7q2gse18OmEk%2B7UK1RAIhAJ77cOJlqwOymG3KqbX3fopr67v17o8UIFXgC%2FqE0bWDKv8DCGAQABoMNjM3NDIzMTgzODA1Igys1uYNK6z1FqZwF3oq3AMn69TljOQBEJez7wmareSHToG7cBr%2BZRuM53eykEmhbJltVSLtq4k6qrTDSFqNmt3X7S3VeNsDrt3Of3jKRK4QqdL4ftv%2Bl0J2ORnar3fCH8WesrKZcBLzp0LPyv0Ij6tb4jvMol6GWFUTc7SebDBufzWMl0G3T52JL8dJ5uwIUwzBYF3OV24C%2FBqiWmho%2Fcu7coQ8%2FiH4UXfn8pNRCMUAgDpoe0x43aybdwIf6e6bqrx8WBcdrzb7Vu0FnFN%2BUQeF5zeqHGtsw26ASOuLCcg7%2FG9yXsiXAsRwnG2YJ0PX3cqoB0xmccXmntUIWsjuXLJzDvbUUJo8rnwiTSWn%2BafPqleqty%2BQN9D18jgqs%2FujPiTrGnqRBhWTtIEAY3m6M94axVrPghS2%2BLvFgR1gJcuTQjUFbxDzrQVBSkf5BOBcwpUCd%2FU8Q1%2BrCrEjWem1LmlVilxqEPmhf1gXVwDJWQON9Ps67HPqA7TOuDncyioO%2FiD7YSO%2BQpbY2jTeMV1qws%2FxwTkKw06x8ghSKitl5bS6z60Hjl8qgynPra%2F%2BsFXSz24cubPb1ts5xbyPH67oop8Uy%2FDa1zaAjj1YUs2zXo%2FKIh05YV3U40u1soh3ePjlhLmm8IRVz7Ji%2FhgAMjCNs7G%2BBjqkAUK9aTCjac4qFuopVmMdwpjli%2FSauKAMRkEVBj0yULp0HmJz8jAugOUkKuzKiUH9vct8%2FfcvDCAFWG0oPkacuNSlHyyEib9PyKF9WseGGCd5YwTBnz%2BOv7yY3y9oN5fqm1U2%2Fx6Op5%2FXr%2B7g2d7T6jnO252aPHAqtxHAqj8vLcloQ%2FOZK0QkjIxILz9Q3DQPiYHEhDlrSL37qnMLyNBMsSUXI3Ez&X-Amz-Signature=0e15c0cfea4eb0f1f9d8c8a308a393873ed2b7f008423c44a890c88869347420&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMTG3PX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDEZ1IUiRReTrGZt7u5IZYQme%2B7q2gse18OmEk%2B7UK1RAIhAJ77cOJlqwOymG3KqbX3fopr67v17o8UIFXgC%2FqE0bWDKv8DCGAQABoMNjM3NDIzMTgzODA1Igys1uYNK6z1FqZwF3oq3AMn69TljOQBEJez7wmareSHToG7cBr%2BZRuM53eykEmhbJltVSLtq4k6qrTDSFqNmt3X7S3VeNsDrt3Of3jKRK4QqdL4ftv%2Bl0J2ORnar3fCH8WesrKZcBLzp0LPyv0Ij6tb4jvMol6GWFUTc7SebDBufzWMl0G3T52JL8dJ5uwIUwzBYF3OV24C%2FBqiWmho%2Fcu7coQ8%2FiH4UXfn8pNRCMUAgDpoe0x43aybdwIf6e6bqrx8WBcdrzb7Vu0FnFN%2BUQeF5zeqHGtsw26ASOuLCcg7%2FG9yXsiXAsRwnG2YJ0PX3cqoB0xmccXmntUIWsjuXLJzDvbUUJo8rnwiTSWn%2BafPqleqty%2BQN9D18jgqs%2FujPiTrGnqRBhWTtIEAY3m6M94axVrPghS2%2BLvFgR1gJcuTQjUFbxDzrQVBSkf5BOBcwpUCd%2FU8Q1%2BrCrEjWem1LmlVilxqEPmhf1gXVwDJWQON9Ps67HPqA7TOuDncyioO%2FiD7YSO%2BQpbY2jTeMV1qws%2FxwTkKw06x8ghSKitl5bS6z60Hjl8qgynPra%2F%2BsFXSz24cubPb1ts5xbyPH67oop8Uy%2FDa1zaAjj1YUs2zXo%2FKIh05YV3U40u1soh3ePjlhLmm8IRVz7Ji%2FhgAMjCNs7G%2BBjqkAUK9aTCjac4qFuopVmMdwpjli%2FSauKAMRkEVBj0yULp0HmJz8jAugOUkKuzKiUH9vct8%2FfcvDCAFWG0oPkacuNSlHyyEib9PyKF9WseGGCd5YwTBnz%2BOv7yY3y9oN5fqm1U2%2Fx6Op5%2FXr%2B7g2d7T6jnO252aPHAqtxHAqj8vLcloQ%2FOZK0QkjIxILz9Q3DQPiYHEhDlrSL37qnMLyNBMsSUXI3Ez&X-Amz-Signature=92f7da6c04c1ccbe326a6878ed22576fd99fb45b63ac0b26991955975a4910f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMTG3PX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDEZ1IUiRReTrGZt7u5IZYQme%2B7q2gse18OmEk%2B7UK1RAIhAJ77cOJlqwOymG3KqbX3fopr67v17o8UIFXgC%2FqE0bWDKv8DCGAQABoMNjM3NDIzMTgzODA1Igys1uYNK6z1FqZwF3oq3AMn69TljOQBEJez7wmareSHToG7cBr%2BZRuM53eykEmhbJltVSLtq4k6qrTDSFqNmt3X7S3VeNsDrt3Of3jKRK4QqdL4ftv%2Bl0J2ORnar3fCH8WesrKZcBLzp0LPyv0Ij6tb4jvMol6GWFUTc7SebDBufzWMl0G3T52JL8dJ5uwIUwzBYF3OV24C%2FBqiWmho%2Fcu7coQ8%2FiH4UXfn8pNRCMUAgDpoe0x43aybdwIf6e6bqrx8WBcdrzb7Vu0FnFN%2BUQeF5zeqHGtsw26ASOuLCcg7%2FG9yXsiXAsRwnG2YJ0PX3cqoB0xmccXmntUIWsjuXLJzDvbUUJo8rnwiTSWn%2BafPqleqty%2BQN9D18jgqs%2FujPiTrGnqRBhWTtIEAY3m6M94axVrPghS2%2BLvFgR1gJcuTQjUFbxDzrQVBSkf5BOBcwpUCd%2FU8Q1%2BrCrEjWem1LmlVilxqEPmhf1gXVwDJWQON9Ps67HPqA7TOuDncyioO%2FiD7YSO%2BQpbY2jTeMV1qws%2FxwTkKw06x8ghSKitl5bS6z60Hjl8qgynPra%2F%2BsFXSz24cubPb1ts5xbyPH67oop8Uy%2FDa1zaAjj1YUs2zXo%2FKIh05YV3U40u1soh3ePjlhLmm8IRVz7Ji%2FhgAMjCNs7G%2BBjqkAUK9aTCjac4qFuopVmMdwpjli%2FSauKAMRkEVBj0yULp0HmJz8jAugOUkKuzKiUH9vct8%2FfcvDCAFWG0oPkacuNSlHyyEib9PyKF9WseGGCd5YwTBnz%2BOv7yY3y9oN5fqm1U2%2Fx6Op5%2FXr%2B7g2d7T6jnO252aPHAqtxHAqj8vLcloQ%2FOZK0QkjIxILz9Q3DQPiYHEhDlrSL37qnMLyNBMsSUXI3Ez&X-Amz-Signature=e4107c2711fa3ce9a393052c2b03f66da46e86802dff15b9078ef8ee981b74f3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMTG3PX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDEZ1IUiRReTrGZt7u5IZYQme%2B7q2gse18OmEk%2B7UK1RAIhAJ77cOJlqwOymG3KqbX3fopr67v17o8UIFXgC%2FqE0bWDKv8DCGAQABoMNjM3NDIzMTgzODA1Igys1uYNK6z1FqZwF3oq3AMn69TljOQBEJez7wmareSHToG7cBr%2BZRuM53eykEmhbJltVSLtq4k6qrTDSFqNmt3X7S3VeNsDrt3Of3jKRK4QqdL4ftv%2Bl0J2ORnar3fCH8WesrKZcBLzp0LPyv0Ij6tb4jvMol6GWFUTc7SebDBufzWMl0G3T52JL8dJ5uwIUwzBYF3OV24C%2FBqiWmho%2Fcu7coQ8%2FiH4UXfn8pNRCMUAgDpoe0x43aybdwIf6e6bqrx8WBcdrzb7Vu0FnFN%2BUQeF5zeqHGtsw26ASOuLCcg7%2FG9yXsiXAsRwnG2YJ0PX3cqoB0xmccXmntUIWsjuXLJzDvbUUJo8rnwiTSWn%2BafPqleqty%2BQN9D18jgqs%2FujPiTrGnqRBhWTtIEAY3m6M94axVrPghS2%2BLvFgR1gJcuTQjUFbxDzrQVBSkf5BOBcwpUCd%2FU8Q1%2BrCrEjWem1LmlVilxqEPmhf1gXVwDJWQON9Ps67HPqA7TOuDncyioO%2FiD7YSO%2BQpbY2jTeMV1qws%2FxwTkKw06x8ghSKitl5bS6z60Hjl8qgynPra%2F%2BsFXSz24cubPb1ts5xbyPH67oop8Uy%2FDa1zaAjj1YUs2zXo%2FKIh05YV3U40u1soh3ePjlhLmm8IRVz7Ji%2FhgAMjCNs7G%2BBjqkAUK9aTCjac4qFuopVmMdwpjli%2FSauKAMRkEVBj0yULp0HmJz8jAugOUkKuzKiUH9vct8%2FfcvDCAFWG0oPkacuNSlHyyEib9PyKF9WseGGCd5YwTBnz%2BOv7yY3y9oN5fqm1U2%2Fx6Op5%2FXr%2B7g2d7T6jnO252aPHAqtxHAqj8vLcloQ%2FOZK0QkjIxILz9Q3DQPiYHEhDlrSL37qnMLyNBMsSUXI3Ez&X-Amz-Signature=d1283053a572b39e32414e9636571def1bd7bd2e8bf358cff3c089bd527dc33a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMTG3PX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDEZ1IUiRReTrGZt7u5IZYQme%2B7q2gse18OmEk%2B7UK1RAIhAJ77cOJlqwOymG3KqbX3fopr67v17o8UIFXgC%2FqE0bWDKv8DCGAQABoMNjM3NDIzMTgzODA1Igys1uYNK6z1FqZwF3oq3AMn69TljOQBEJez7wmareSHToG7cBr%2BZRuM53eykEmhbJltVSLtq4k6qrTDSFqNmt3X7S3VeNsDrt3Of3jKRK4QqdL4ftv%2Bl0J2ORnar3fCH8WesrKZcBLzp0LPyv0Ij6tb4jvMol6GWFUTc7SebDBufzWMl0G3T52JL8dJ5uwIUwzBYF3OV24C%2FBqiWmho%2Fcu7coQ8%2FiH4UXfn8pNRCMUAgDpoe0x43aybdwIf6e6bqrx8WBcdrzb7Vu0FnFN%2BUQeF5zeqHGtsw26ASOuLCcg7%2FG9yXsiXAsRwnG2YJ0PX3cqoB0xmccXmntUIWsjuXLJzDvbUUJo8rnwiTSWn%2BafPqleqty%2BQN9D18jgqs%2FujPiTrGnqRBhWTtIEAY3m6M94axVrPghS2%2BLvFgR1gJcuTQjUFbxDzrQVBSkf5BOBcwpUCd%2FU8Q1%2BrCrEjWem1LmlVilxqEPmhf1gXVwDJWQON9Ps67HPqA7TOuDncyioO%2FiD7YSO%2BQpbY2jTeMV1qws%2FxwTkKw06x8ghSKitl5bS6z60Hjl8qgynPra%2F%2BsFXSz24cubPb1ts5xbyPH67oop8Uy%2FDa1zaAjj1YUs2zXo%2FKIh05YV3U40u1soh3ePjlhLmm8IRVz7Ji%2FhgAMjCNs7G%2BBjqkAUK9aTCjac4qFuopVmMdwpjli%2FSauKAMRkEVBj0yULp0HmJz8jAugOUkKuzKiUH9vct8%2FfcvDCAFWG0oPkacuNSlHyyEib9PyKF9WseGGCd5YwTBnz%2BOv7yY3y9oN5fqm1U2%2Fx6Op5%2FXr%2B7g2d7T6jnO252aPHAqtxHAqj8vLcloQ%2FOZK0QkjIxILz9Q3DQPiYHEhDlrSL37qnMLyNBMsSUXI3Ez&X-Amz-Signature=a85fe052446816dd32b9fbb726e26cad314fef8a3f2660024d003dbbae505c73&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
