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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGFNG2U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF%2FTHvDAGCzYzbPcFT3RBXleUODWhm8niESApuxJMBChAiBhLgU25o3Hw1H1r3O9skiQuTyfyZBw6hf6YbqHJDNzYir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhjqp0SE3CQcEOqiSKtwDSXuT6GkhlwR9CnfdYXiCNaCcOnNl48ORT0q%2F6%2BJBizKVO3gxi687x6tCPOM1mbiZ40CBwH2sDkXeYCqeomylwz28AbCkkysBIY3IugTx3kAyk%2BRiITX2xf7FwO6b3SCtIixjozEmiH%2FZIJ7UhSHLj7%2FEzTr%2FhSRC1ZOIAIRrg2EAQ88bwrEaX38MiQw%2B438LP15xxmzumrHfPJM%2FpTH%2B8%2FTO7PFjzg9Rp5LKVI%2BcwQh3tMQDDkAQbbRWd5hBooBD%2FRnK6Y2g%2BGSYmpy6kAEWRpVcBbOGsrPW9%2BfqJ3lfqTRhs37bEYdgAr9lJwDh9wTY7F3dmoo0dvvgC1MiSTP8iQpDlyjyq0kLRDMkSgGapAtlzkG6j6eKuJ%2FLRcfcHIe76k4rF2CQzsSXUD1iQpkVbvYsn39AREDuaw7PTR%2Fnza%2FVEmR4Ts5kf6Aaurix8wxQnyj6yTNO%2BhqwMZVicA9C1Il3k3nBjA7pZmoi%2FsHkaCerswXEgnu8Z%2BO1sQebqVzMoOdDFvSDYPd18pVADCspPu9rYQl7RJCdBZ9GfmNVwZzlN6sEMVw7vKzYkQ72wlVDWUioEc8hiT%2BaeFVS8zYBrGpEXFpWOva30Zrf%2FkmhniWamnwTbD9W5iU6gvAwi7v%2BvQY6pgHjXD6g3dPsbCvOLaOyZmmWl9U5dGgjRxywKbRIp0o%2FrrWK%2F3A0dYfEQh13%2Faf93Xmr2hYwrEx6UqVJQxnyKrcQD2oVMHTFxqHSWvGnx2nxMkJ2ffbPkkEPY6fWvGWU1D4qlLpTSZxfA9E4BXMFak9Ppv2zrtrLvaRdV1gMx5AmzoNjoC5eIA5i30dX17faJwfCUd2cdieHXriwd3OgESXBjQyfFWyj&X-Amz-Signature=ac4d17ad1900a36ad55cc1a4b054fe3c037a7c29df91d1a95e3d73975e2bf8d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGFNG2U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF%2FTHvDAGCzYzbPcFT3RBXleUODWhm8niESApuxJMBChAiBhLgU25o3Hw1H1r3O9skiQuTyfyZBw6hf6YbqHJDNzYir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhjqp0SE3CQcEOqiSKtwDSXuT6GkhlwR9CnfdYXiCNaCcOnNl48ORT0q%2F6%2BJBizKVO3gxi687x6tCPOM1mbiZ40CBwH2sDkXeYCqeomylwz28AbCkkysBIY3IugTx3kAyk%2BRiITX2xf7FwO6b3SCtIixjozEmiH%2FZIJ7UhSHLj7%2FEzTr%2FhSRC1ZOIAIRrg2EAQ88bwrEaX38MiQw%2B438LP15xxmzumrHfPJM%2FpTH%2B8%2FTO7PFjzg9Rp5LKVI%2BcwQh3tMQDDkAQbbRWd5hBooBD%2FRnK6Y2g%2BGSYmpy6kAEWRpVcBbOGsrPW9%2BfqJ3lfqTRhs37bEYdgAr9lJwDh9wTY7F3dmoo0dvvgC1MiSTP8iQpDlyjyq0kLRDMkSgGapAtlzkG6j6eKuJ%2FLRcfcHIe76k4rF2CQzsSXUD1iQpkVbvYsn39AREDuaw7PTR%2Fnza%2FVEmR4Ts5kf6Aaurix8wxQnyj6yTNO%2BhqwMZVicA9C1Il3k3nBjA7pZmoi%2FsHkaCerswXEgnu8Z%2BO1sQebqVzMoOdDFvSDYPd18pVADCspPu9rYQl7RJCdBZ9GfmNVwZzlN6sEMVw7vKzYkQ72wlVDWUioEc8hiT%2BaeFVS8zYBrGpEXFpWOva30Zrf%2FkmhniWamnwTbD9W5iU6gvAwi7v%2BvQY6pgHjXD6g3dPsbCvOLaOyZmmWl9U5dGgjRxywKbRIp0o%2FrrWK%2F3A0dYfEQh13%2Faf93Xmr2hYwrEx6UqVJQxnyKrcQD2oVMHTFxqHSWvGnx2nxMkJ2ffbPkkEPY6fWvGWU1D4qlLpTSZxfA9E4BXMFak9Ppv2zrtrLvaRdV1gMx5AmzoNjoC5eIA5i30dX17faJwfCUd2cdieHXriwd3OgESXBjQyfFWyj&X-Amz-Signature=51474d1f6cc3cd34f7801586914e4ec9214aa9971aa35a4accc2a6f299a91c17&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGFNG2U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF%2FTHvDAGCzYzbPcFT3RBXleUODWhm8niESApuxJMBChAiBhLgU25o3Hw1H1r3O9skiQuTyfyZBw6hf6YbqHJDNzYir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhjqp0SE3CQcEOqiSKtwDSXuT6GkhlwR9CnfdYXiCNaCcOnNl48ORT0q%2F6%2BJBizKVO3gxi687x6tCPOM1mbiZ40CBwH2sDkXeYCqeomylwz28AbCkkysBIY3IugTx3kAyk%2BRiITX2xf7FwO6b3SCtIixjozEmiH%2FZIJ7UhSHLj7%2FEzTr%2FhSRC1ZOIAIRrg2EAQ88bwrEaX38MiQw%2B438LP15xxmzumrHfPJM%2FpTH%2B8%2FTO7PFjzg9Rp5LKVI%2BcwQh3tMQDDkAQbbRWd5hBooBD%2FRnK6Y2g%2BGSYmpy6kAEWRpVcBbOGsrPW9%2BfqJ3lfqTRhs37bEYdgAr9lJwDh9wTY7F3dmoo0dvvgC1MiSTP8iQpDlyjyq0kLRDMkSgGapAtlzkG6j6eKuJ%2FLRcfcHIe76k4rF2CQzsSXUD1iQpkVbvYsn39AREDuaw7PTR%2Fnza%2FVEmR4Ts5kf6Aaurix8wxQnyj6yTNO%2BhqwMZVicA9C1Il3k3nBjA7pZmoi%2FsHkaCerswXEgnu8Z%2BO1sQebqVzMoOdDFvSDYPd18pVADCspPu9rYQl7RJCdBZ9GfmNVwZzlN6sEMVw7vKzYkQ72wlVDWUioEc8hiT%2BaeFVS8zYBrGpEXFpWOva30Zrf%2FkmhniWamnwTbD9W5iU6gvAwi7v%2BvQY6pgHjXD6g3dPsbCvOLaOyZmmWl9U5dGgjRxywKbRIp0o%2FrrWK%2F3A0dYfEQh13%2Faf93Xmr2hYwrEx6UqVJQxnyKrcQD2oVMHTFxqHSWvGnx2nxMkJ2ffbPkkEPY6fWvGWU1D4qlLpTSZxfA9E4BXMFak9Ppv2zrtrLvaRdV1gMx5AmzoNjoC5eIA5i30dX17faJwfCUd2cdieHXriwd3OgESXBjQyfFWyj&X-Amz-Signature=a69dbc5dd1f91a71d527cdb0b99c964228c4d80433c396cebaddd8ef981c2717&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGFNG2U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF%2FTHvDAGCzYzbPcFT3RBXleUODWhm8niESApuxJMBChAiBhLgU25o3Hw1H1r3O9skiQuTyfyZBw6hf6YbqHJDNzYir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhjqp0SE3CQcEOqiSKtwDSXuT6GkhlwR9CnfdYXiCNaCcOnNl48ORT0q%2F6%2BJBizKVO3gxi687x6tCPOM1mbiZ40CBwH2sDkXeYCqeomylwz28AbCkkysBIY3IugTx3kAyk%2BRiITX2xf7FwO6b3SCtIixjozEmiH%2FZIJ7UhSHLj7%2FEzTr%2FhSRC1ZOIAIRrg2EAQ88bwrEaX38MiQw%2B438LP15xxmzumrHfPJM%2FpTH%2B8%2FTO7PFjzg9Rp5LKVI%2BcwQh3tMQDDkAQbbRWd5hBooBD%2FRnK6Y2g%2BGSYmpy6kAEWRpVcBbOGsrPW9%2BfqJ3lfqTRhs37bEYdgAr9lJwDh9wTY7F3dmoo0dvvgC1MiSTP8iQpDlyjyq0kLRDMkSgGapAtlzkG6j6eKuJ%2FLRcfcHIe76k4rF2CQzsSXUD1iQpkVbvYsn39AREDuaw7PTR%2Fnza%2FVEmR4Ts5kf6Aaurix8wxQnyj6yTNO%2BhqwMZVicA9C1Il3k3nBjA7pZmoi%2FsHkaCerswXEgnu8Z%2BO1sQebqVzMoOdDFvSDYPd18pVADCspPu9rYQl7RJCdBZ9GfmNVwZzlN6sEMVw7vKzYkQ72wlVDWUioEc8hiT%2BaeFVS8zYBrGpEXFpWOva30Zrf%2FkmhniWamnwTbD9W5iU6gvAwi7v%2BvQY6pgHjXD6g3dPsbCvOLaOyZmmWl9U5dGgjRxywKbRIp0o%2FrrWK%2F3A0dYfEQh13%2Faf93Xmr2hYwrEx6UqVJQxnyKrcQD2oVMHTFxqHSWvGnx2nxMkJ2ffbPkkEPY6fWvGWU1D4qlLpTSZxfA9E4BXMFak9Ppv2zrtrLvaRdV1gMx5AmzoNjoC5eIA5i30dX17faJwfCUd2cdieHXriwd3OgESXBjQyfFWyj&X-Amz-Signature=36a947715752cb425b252f0a117da83de3d34506e87254c9da85cc6578d385de&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGFNG2U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF%2FTHvDAGCzYzbPcFT3RBXleUODWhm8niESApuxJMBChAiBhLgU25o3Hw1H1r3O9skiQuTyfyZBw6hf6YbqHJDNzYir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhjqp0SE3CQcEOqiSKtwDSXuT6GkhlwR9CnfdYXiCNaCcOnNl48ORT0q%2F6%2BJBizKVO3gxi687x6tCPOM1mbiZ40CBwH2sDkXeYCqeomylwz28AbCkkysBIY3IugTx3kAyk%2BRiITX2xf7FwO6b3SCtIixjozEmiH%2FZIJ7UhSHLj7%2FEzTr%2FhSRC1ZOIAIRrg2EAQ88bwrEaX38MiQw%2B438LP15xxmzumrHfPJM%2FpTH%2B8%2FTO7PFjzg9Rp5LKVI%2BcwQh3tMQDDkAQbbRWd5hBooBD%2FRnK6Y2g%2BGSYmpy6kAEWRpVcBbOGsrPW9%2BfqJ3lfqTRhs37bEYdgAr9lJwDh9wTY7F3dmoo0dvvgC1MiSTP8iQpDlyjyq0kLRDMkSgGapAtlzkG6j6eKuJ%2FLRcfcHIe76k4rF2CQzsSXUD1iQpkVbvYsn39AREDuaw7PTR%2Fnza%2FVEmR4Ts5kf6Aaurix8wxQnyj6yTNO%2BhqwMZVicA9C1Il3k3nBjA7pZmoi%2FsHkaCerswXEgnu8Z%2BO1sQebqVzMoOdDFvSDYPd18pVADCspPu9rYQl7RJCdBZ9GfmNVwZzlN6sEMVw7vKzYkQ72wlVDWUioEc8hiT%2BaeFVS8zYBrGpEXFpWOva30Zrf%2FkmhniWamnwTbD9W5iU6gvAwi7v%2BvQY6pgHjXD6g3dPsbCvOLaOyZmmWl9U5dGgjRxywKbRIp0o%2FrrWK%2F3A0dYfEQh13%2Faf93Xmr2hYwrEx6UqVJQxnyKrcQD2oVMHTFxqHSWvGnx2nxMkJ2ffbPkkEPY6fWvGWU1D4qlLpTSZxfA9E4BXMFak9Ppv2zrtrLvaRdV1gMx5AmzoNjoC5eIA5i30dX17faJwfCUd2cdieHXriwd3OgESXBjQyfFWyj&X-Amz-Signature=31f57013c03ffb5f739ea379007ac795a4466279530c7e967884ca9e17ca831f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGFNG2U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF%2FTHvDAGCzYzbPcFT3RBXleUODWhm8niESApuxJMBChAiBhLgU25o3Hw1H1r3O9skiQuTyfyZBw6hf6YbqHJDNzYir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhjqp0SE3CQcEOqiSKtwDSXuT6GkhlwR9CnfdYXiCNaCcOnNl48ORT0q%2F6%2BJBizKVO3gxi687x6tCPOM1mbiZ40CBwH2sDkXeYCqeomylwz28AbCkkysBIY3IugTx3kAyk%2BRiITX2xf7FwO6b3SCtIixjozEmiH%2FZIJ7UhSHLj7%2FEzTr%2FhSRC1ZOIAIRrg2EAQ88bwrEaX38MiQw%2B438LP15xxmzumrHfPJM%2FpTH%2B8%2FTO7PFjzg9Rp5LKVI%2BcwQh3tMQDDkAQbbRWd5hBooBD%2FRnK6Y2g%2BGSYmpy6kAEWRpVcBbOGsrPW9%2BfqJ3lfqTRhs37bEYdgAr9lJwDh9wTY7F3dmoo0dvvgC1MiSTP8iQpDlyjyq0kLRDMkSgGapAtlzkG6j6eKuJ%2FLRcfcHIe76k4rF2CQzsSXUD1iQpkVbvYsn39AREDuaw7PTR%2Fnza%2FVEmR4Ts5kf6Aaurix8wxQnyj6yTNO%2BhqwMZVicA9C1Il3k3nBjA7pZmoi%2FsHkaCerswXEgnu8Z%2BO1sQebqVzMoOdDFvSDYPd18pVADCspPu9rYQl7RJCdBZ9GfmNVwZzlN6sEMVw7vKzYkQ72wlVDWUioEc8hiT%2BaeFVS8zYBrGpEXFpWOva30Zrf%2FkmhniWamnwTbD9W5iU6gvAwi7v%2BvQY6pgHjXD6g3dPsbCvOLaOyZmmWl9U5dGgjRxywKbRIp0o%2FrrWK%2F3A0dYfEQh13%2Faf93Xmr2hYwrEx6UqVJQxnyKrcQD2oVMHTFxqHSWvGnx2nxMkJ2ffbPkkEPY6fWvGWU1D4qlLpTSZxfA9E4BXMFak9Ppv2zrtrLvaRdV1gMx5AmzoNjoC5eIA5i30dX17faJwfCUd2cdieHXriwd3OgESXBjQyfFWyj&X-Amz-Signature=d51f98de4e841a6adf6eed6c46d152a7b2bf9252f2df2d4cd8d1a59108ea0491&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGFNG2U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF%2FTHvDAGCzYzbPcFT3RBXleUODWhm8niESApuxJMBChAiBhLgU25o3Hw1H1r3O9skiQuTyfyZBw6hf6YbqHJDNzYir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhjqp0SE3CQcEOqiSKtwDSXuT6GkhlwR9CnfdYXiCNaCcOnNl48ORT0q%2F6%2BJBizKVO3gxi687x6tCPOM1mbiZ40CBwH2sDkXeYCqeomylwz28AbCkkysBIY3IugTx3kAyk%2BRiITX2xf7FwO6b3SCtIixjozEmiH%2FZIJ7UhSHLj7%2FEzTr%2FhSRC1ZOIAIRrg2EAQ88bwrEaX38MiQw%2B438LP15xxmzumrHfPJM%2FpTH%2B8%2FTO7PFjzg9Rp5LKVI%2BcwQh3tMQDDkAQbbRWd5hBooBD%2FRnK6Y2g%2BGSYmpy6kAEWRpVcBbOGsrPW9%2BfqJ3lfqTRhs37bEYdgAr9lJwDh9wTY7F3dmoo0dvvgC1MiSTP8iQpDlyjyq0kLRDMkSgGapAtlzkG6j6eKuJ%2FLRcfcHIe76k4rF2CQzsSXUD1iQpkVbvYsn39AREDuaw7PTR%2Fnza%2FVEmR4Ts5kf6Aaurix8wxQnyj6yTNO%2BhqwMZVicA9C1Il3k3nBjA7pZmoi%2FsHkaCerswXEgnu8Z%2BO1sQebqVzMoOdDFvSDYPd18pVADCspPu9rYQl7RJCdBZ9GfmNVwZzlN6sEMVw7vKzYkQ72wlVDWUioEc8hiT%2BaeFVS8zYBrGpEXFpWOva30Zrf%2FkmhniWamnwTbD9W5iU6gvAwi7v%2BvQY6pgHjXD6g3dPsbCvOLaOyZmmWl9U5dGgjRxywKbRIp0o%2FrrWK%2F3A0dYfEQh13%2Faf93Xmr2hYwrEx6UqVJQxnyKrcQD2oVMHTFxqHSWvGnx2nxMkJ2ffbPkkEPY6fWvGWU1D4qlLpTSZxfA9E4BXMFak9Ppv2zrtrLvaRdV1gMx5AmzoNjoC5eIA5i30dX17faJwfCUd2cdieHXriwd3OgESXBjQyfFWyj&X-Amz-Signature=7e78267e1a202dad90bfd8617766827df1c76f13431b63c2565242006d1a4375&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
