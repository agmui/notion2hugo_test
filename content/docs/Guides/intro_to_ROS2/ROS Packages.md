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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPEIWTX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBQ%2F%2FYsprXwBSMhjUh9Ha0gWGMtES0cGADdOXpj47O9wAiBEmE2pOAHg%2FPHRHbXHys9fSTy%2F6QCBtZv9%2BmfdSn23WyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3KJ03g5nVgHi7eLKtwDarAPEC4ocKyQIwDs2Iu2gHlfiPT3akkSTDt3UMkyvFH8yeLmIydL6UqNjcGli7C8H2qIU0y%2BYbEOyx5G6qLPVrUteZYtDVVgVBHoyizmFUMF%2FKh%2Bn920yE25y7WYPyO56Zya2uNaXXYYibtElIOVd1rc%2FCkmzujugAT4hR2GPDmTZeqQu7514sanfEq7ziiNNbWOu%2F0loVfb7zT0E3TBVckxQvURF1AJTLtREMRZlx5LZt2s91AQonRIyaVdLtvukdjFbfmNm4UAac8BdFwEyHYUyGPLhpd5rh%2FdhJuo5F10Ar6EQZ%2Buo5vmkKH8E%2F97MA2W2v%2BOif7V74%2BSyypqH4ZNnA9fmuXb%2BcjH2pQAGQeCHwAt0XAHV07jH1GnVrIFWoVvMaZ1l79v5oqhQNF6n3pGEfbRse%2FY6ohVd%2FgYveHS1ef65h%2Bz5Bd027tq0aXWEGXy9SgnHGaOtUay2HIe2GB60uDc%2FXTy6hPWjYFmI70rVINkFL1eUJoijKPbUVVyoP%2BN9sQ3vExy5C2ErQkdxnn9QXURw4kr3koKTXGkiicO87IvtdBx9McsNAWAP0jp0fTnOVweoy%2BydYogamcbWoQN1QQ%2Bg6WzuXrgYLvbukOWiiB1IHGSdMNCDs8wrL3lvwY6pgH6agBMec6h2Ts2AciJwdGTKe0aBJ1rdQhMxwhkJqrxSryVZRUo1SI%2FwKvqoGzkxeL53j2K%2BPTC%2BVEkVYVZs1cKIvEHef1yW6JU6SYyiywDB100UT5G1Ex7GlojHlRubPgsS8JiRja4k8kbA0zlIQSu7jB2qsDq8dwuN2l87Cw%2Fc%2BCMckioVhCLuAhTbGPpCPYqZbvkmzBFAWGSp7ffE6y5KWH78VE1&X-Amz-Signature=f7c5f11033e6c65d60d841024527a2fb1dc6dc7ff115f67103409613b2608015&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPEIWTX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBQ%2F%2FYsprXwBSMhjUh9Ha0gWGMtES0cGADdOXpj47O9wAiBEmE2pOAHg%2FPHRHbXHys9fSTy%2F6QCBtZv9%2BmfdSn23WyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3KJ03g5nVgHi7eLKtwDarAPEC4ocKyQIwDs2Iu2gHlfiPT3akkSTDt3UMkyvFH8yeLmIydL6UqNjcGli7C8H2qIU0y%2BYbEOyx5G6qLPVrUteZYtDVVgVBHoyizmFUMF%2FKh%2Bn920yE25y7WYPyO56Zya2uNaXXYYibtElIOVd1rc%2FCkmzujugAT4hR2GPDmTZeqQu7514sanfEq7ziiNNbWOu%2F0loVfb7zT0E3TBVckxQvURF1AJTLtREMRZlx5LZt2s91AQonRIyaVdLtvukdjFbfmNm4UAac8BdFwEyHYUyGPLhpd5rh%2FdhJuo5F10Ar6EQZ%2Buo5vmkKH8E%2F97MA2W2v%2BOif7V74%2BSyypqH4ZNnA9fmuXb%2BcjH2pQAGQeCHwAt0XAHV07jH1GnVrIFWoVvMaZ1l79v5oqhQNF6n3pGEfbRse%2FY6ohVd%2FgYveHS1ef65h%2Bz5Bd027tq0aXWEGXy9SgnHGaOtUay2HIe2GB60uDc%2FXTy6hPWjYFmI70rVINkFL1eUJoijKPbUVVyoP%2BN9sQ3vExy5C2ErQkdxnn9QXURw4kr3koKTXGkiicO87IvtdBx9McsNAWAP0jp0fTnOVweoy%2BydYogamcbWoQN1QQ%2Bg6WzuXrgYLvbukOWiiB1IHGSdMNCDs8wrL3lvwY6pgH6agBMec6h2Ts2AciJwdGTKe0aBJ1rdQhMxwhkJqrxSryVZRUo1SI%2FwKvqoGzkxeL53j2K%2BPTC%2BVEkVYVZs1cKIvEHef1yW6JU6SYyiywDB100UT5G1Ex7GlojHlRubPgsS8JiRja4k8kbA0zlIQSu7jB2qsDq8dwuN2l87Cw%2Fc%2BCMckioVhCLuAhTbGPpCPYqZbvkmzBFAWGSp7ffE6y5KWH78VE1&X-Amz-Signature=6bd6563490aff82cbef9b24d4e07fabd744594a9436e5358b6c7affaaa1c7fab&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPEIWTX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBQ%2F%2FYsprXwBSMhjUh9Ha0gWGMtES0cGADdOXpj47O9wAiBEmE2pOAHg%2FPHRHbXHys9fSTy%2F6QCBtZv9%2BmfdSn23WyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3KJ03g5nVgHi7eLKtwDarAPEC4ocKyQIwDs2Iu2gHlfiPT3akkSTDt3UMkyvFH8yeLmIydL6UqNjcGli7C8H2qIU0y%2BYbEOyx5G6qLPVrUteZYtDVVgVBHoyizmFUMF%2FKh%2Bn920yE25y7WYPyO56Zya2uNaXXYYibtElIOVd1rc%2FCkmzujugAT4hR2GPDmTZeqQu7514sanfEq7ziiNNbWOu%2F0loVfb7zT0E3TBVckxQvURF1AJTLtREMRZlx5LZt2s91AQonRIyaVdLtvukdjFbfmNm4UAac8BdFwEyHYUyGPLhpd5rh%2FdhJuo5F10Ar6EQZ%2Buo5vmkKH8E%2F97MA2W2v%2BOif7V74%2BSyypqH4ZNnA9fmuXb%2BcjH2pQAGQeCHwAt0XAHV07jH1GnVrIFWoVvMaZ1l79v5oqhQNF6n3pGEfbRse%2FY6ohVd%2FgYveHS1ef65h%2Bz5Bd027tq0aXWEGXy9SgnHGaOtUay2HIe2GB60uDc%2FXTy6hPWjYFmI70rVINkFL1eUJoijKPbUVVyoP%2BN9sQ3vExy5C2ErQkdxnn9QXURw4kr3koKTXGkiicO87IvtdBx9McsNAWAP0jp0fTnOVweoy%2BydYogamcbWoQN1QQ%2Bg6WzuXrgYLvbukOWiiB1IHGSdMNCDs8wrL3lvwY6pgH6agBMec6h2Ts2AciJwdGTKe0aBJ1rdQhMxwhkJqrxSryVZRUo1SI%2FwKvqoGzkxeL53j2K%2BPTC%2BVEkVYVZs1cKIvEHef1yW6JU6SYyiywDB100UT5G1Ex7GlojHlRubPgsS8JiRja4k8kbA0zlIQSu7jB2qsDq8dwuN2l87Cw%2Fc%2BCMckioVhCLuAhTbGPpCPYqZbvkmzBFAWGSp7ffE6y5KWH78VE1&X-Amz-Signature=ae5536af239b8b1b8d11d086c90396a79ea7a59d20e9387b48d5ed3bd767e299&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPEIWTX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBQ%2F%2FYsprXwBSMhjUh9Ha0gWGMtES0cGADdOXpj47O9wAiBEmE2pOAHg%2FPHRHbXHys9fSTy%2F6QCBtZv9%2BmfdSn23WyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3KJ03g5nVgHi7eLKtwDarAPEC4ocKyQIwDs2Iu2gHlfiPT3akkSTDt3UMkyvFH8yeLmIydL6UqNjcGli7C8H2qIU0y%2BYbEOyx5G6qLPVrUteZYtDVVgVBHoyizmFUMF%2FKh%2Bn920yE25y7WYPyO56Zya2uNaXXYYibtElIOVd1rc%2FCkmzujugAT4hR2GPDmTZeqQu7514sanfEq7ziiNNbWOu%2F0loVfb7zT0E3TBVckxQvURF1AJTLtREMRZlx5LZt2s91AQonRIyaVdLtvukdjFbfmNm4UAac8BdFwEyHYUyGPLhpd5rh%2FdhJuo5F10Ar6EQZ%2Buo5vmkKH8E%2F97MA2W2v%2BOif7V74%2BSyypqH4ZNnA9fmuXb%2BcjH2pQAGQeCHwAt0XAHV07jH1GnVrIFWoVvMaZ1l79v5oqhQNF6n3pGEfbRse%2FY6ohVd%2FgYveHS1ef65h%2Bz5Bd027tq0aXWEGXy9SgnHGaOtUay2HIe2GB60uDc%2FXTy6hPWjYFmI70rVINkFL1eUJoijKPbUVVyoP%2BN9sQ3vExy5C2ErQkdxnn9QXURw4kr3koKTXGkiicO87IvtdBx9McsNAWAP0jp0fTnOVweoy%2BydYogamcbWoQN1QQ%2Bg6WzuXrgYLvbukOWiiB1IHGSdMNCDs8wrL3lvwY6pgH6agBMec6h2Ts2AciJwdGTKe0aBJ1rdQhMxwhkJqrxSryVZRUo1SI%2FwKvqoGzkxeL53j2K%2BPTC%2BVEkVYVZs1cKIvEHef1yW6JU6SYyiywDB100UT5G1Ex7GlojHlRubPgsS8JiRja4k8kbA0zlIQSu7jB2qsDq8dwuN2l87Cw%2Fc%2BCMckioVhCLuAhTbGPpCPYqZbvkmzBFAWGSp7ffE6y5KWH78VE1&X-Amz-Signature=7ce7e550b78f497ce7c73405dcf62fd5ed7c9f9166f23713f0abb7b1dbf3db19&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPEIWTX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBQ%2F%2FYsprXwBSMhjUh9Ha0gWGMtES0cGADdOXpj47O9wAiBEmE2pOAHg%2FPHRHbXHys9fSTy%2F6QCBtZv9%2BmfdSn23WyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3KJ03g5nVgHi7eLKtwDarAPEC4ocKyQIwDs2Iu2gHlfiPT3akkSTDt3UMkyvFH8yeLmIydL6UqNjcGli7C8H2qIU0y%2BYbEOyx5G6qLPVrUteZYtDVVgVBHoyizmFUMF%2FKh%2Bn920yE25y7WYPyO56Zya2uNaXXYYibtElIOVd1rc%2FCkmzujugAT4hR2GPDmTZeqQu7514sanfEq7ziiNNbWOu%2F0loVfb7zT0E3TBVckxQvURF1AJTLtREMRZlx5LZt2s91AQonRIyaVdLtvukdjFbfmNm4UAac8BdFwEyHYUyGPLhpd5rh%2FdhJuo5F10Ar6EQZ%2Buo5vmkKH8E%2F97MA2W2v%2BOif7V74%2BSyypqH4ZNnA9fmuXb%2BcjH2pQAGQeCHwAt0XAHV07jH1GnVrIFWoVvMaZ1l79v5oqhQNF6n3pGEfbRse%2FY6ohVd%2FgYveHS1ef65h%2Bz5Bd027tq0aXWEGXy9SgnHGaOtUay2HIe2GB60uDc%2FXTy6hPWjYFmI70rVINkFL1eUJoijKPbUVVyoP%2BN9sQ3vExy5C2ErQkdxnn9QXURw4kr3koKTXGkiicO87IvtdBx9McsNAWAP0jp0fTnOVweoy%2BydYogamcbWoQN1QQ%2Bg6WzuXrgYLvbukOWiiB1IHGSdMNCDs8wrL3lvwY6pgH6agBMec6h2Ts2AciJwdGTKe0aBJ1rdQhMxwhkJqrxSryVZRUo1SI%2FwKvqoGzkxeL53j2K%2BPTC%2BVEkVYVZs1cKIvEHef1yW6JU6SYyiywDB100UT5G1Ex7GlojHlRubPgsS8JiRja4k8kbA0zlIQSu7jB2qsDq8dwuN2l87Cw%2Fc%2BCMckioVhCLuAhTbGPpCPYqZbvkmzBFAWGSp7ffE6y5KWH78VE1&X-Amz-Signature=1b03a9ff3a1e8e88476131a46c43ede4b9413a4a5a6cce08b57a0d4568b0947d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPEIWTX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBQ%2F%2FYsprXwBSMhjUh9Ha0gWGMtES0cGADdOXpj47O9wAiBEmE2pOAHg%2FPHRHbXHys9fSTy%2F6QCBtZv9%2BmfdSn23WyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3KJ03g5nVgHi7eLKtwDarAPEC4ocKyQIwDs2Iu2gHlfiPT3akkSTDt3UMkyvFH8yeLmIydL6UqNjcGli7C8H2qIU0y%2BYbEOyx5G6qLPVrUteZYtDVVgVBHoyizmFUMF%2FKh%2Bn920yE25y7WYPyO56Zya2uNaXXYYibtElIOVd1rc%2FCkmzujugAT4hR2GPDmTZeqQu7514sanfEq7ziiNNbWOu%2F0loVfb7zT0E3TBVckxQvURF1AJTLtREMRZlx5LZt2s91AQonRIyaVdLtvukdjFbfmNm4UAac8BdFwEyHYUyGPLhpd5rh%2FdhJuo5F10Ar6EQZ%2Buo5vmkKH8E%2F97MA2W2v%2BOif7V74%2BSyypqH4ZNnA9fmuXb%2BcjH2pQAGQeCHwAt0XAHV07jH1GnVrIFWoVvMaZ1l79v5oqhQNF6n3pGEfbRse%2FY6ohVd%2FgYveHS1ef65h%2Bz5Bd027tq0aXWEGXy9SgnHGaOtUay2HIe2GB60uDc%2FXTy6hPWjYFmI70rVINkFL1eUJoijKPbUVVyoP%2BN9sQ3vExy5C2ErQkdxnn9QXURw4kr3koKTXGkiicO87IvtdBx9McsNAWAP0jp0fTnOVweoy%2BydYogamcbWoQN1QQ%2Bg6WzuXrgYLvbukOWiiB1IHGSdMNCDs8wrL3lvwY6pgH6agBMec6h2Ts2AciJwdGTKe0aBJ1rdQhMxwhkJqrxSryVZRUo1SI%2FwKvqoGzkxeL53j2K%2BPTC%2BVEkVYVZs1cKIvEHef1yW6JU6SYyiywDB100UT5G1Ex7GlojHlRubPgsS8JiRja4k8kbA0zlIQSu7jB2qsDq8dwuN2l87Cw%2Fc%2BCMckioVhCLuAhTbGPpCPYqZbvkmzBFAWGSp7ffE6y5KWH78VE1&X-Amz-Signature=890eb40e405d8443975acc38a227e5f99b859c14d418cc1aa3749b8a29329738&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPEIWTX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBQ%2F%2FYsprXwBSMhjUh9Ha0gWGMtES0cGADdOXpj47O9wAiBEmE2pOAHg%2FPHRHbXHys9fSTy%2F6QCBtZv9%2BmfdSn23WyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3KJ03g5nVgHi7eLKtwDarAPEC4ocKyQIwDs2Iu2gHlfiPT3akkSTDt3UMkyvFH8yeLmIydL6UqNjcGli7C8H2qIU0y%2BYbEOyx5G6qLPVrUteZYtDVVgVBHoyizmFUMF%2FKh%2Bn920yE25y7WYPyO56Zya2uNaXXYYibtElIOVd1rc%2FCkmzujugAT4hR2GPDmTZeqQu7514sanfEq7ziiNNbWOu%2F0loVfb7zT0E3TBVckxQvURF1AJTLtREMRZlx5LZt2s91AQonRIyaVdLtvukdjFbfmNm4UAac8BdFwEyHYUyGPLhpd5rh%2FdhJuo5F10Ar6EQZ%2Buo5vmkKH8E%2F97MA2W2v%2BOif7V74%2BSyypqH4ZNnA9fmuXb%2BcjH2pQAGQeCHwAt0XAHV07jH1GnVrIFWoVvMaZ1l79v5oqhQNF6n3pGEfbRse%2FY6ohVd%2FgYveHS1ef65h%2Bz5Bd027tq0aXWEGXy9SgnHGaOtUay2HIe2GB60uDc%2FXTy6hPWjYFmI70rVINkFL1eUJoijKPbUVVyoP%2BN9sQ3vExy5C2ErQkdxnn9QXURw4kr3koKTXGkiicO87IvtdBx9McsNAWAP0jp0fTnOVweoy%2BydYogamcbWoQN1QQ%2Bg6WzuXrgYLvbukOWiiB1IHGSdMNCDs8wrL3lvwY6pgH6agBMec6h2Ts2AciJwdGTKe0aBJ1rdQhMxwhkJqrxSryVZRUo1SI%2FwKvqoGzkxeL53j2K%2BPTC%2BVEkVYVZs1cKIvEHef1yW6JU6SYyiywDB100UT5G1Ex7GlojHlRubPgsS8JiRja4k8kbA0zlIQSu7jB2qsDq8dwuN2l87Cw%2Fc%2BCMckioVhCLuAhTbGPpCPYqZbvkmzBFAWGSp7ffE6y5KWH78VE1&X-Amz-Signature=c51d2fff48947b2f541d02fd078c53f3f397209691805d786303a3024d818af0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
