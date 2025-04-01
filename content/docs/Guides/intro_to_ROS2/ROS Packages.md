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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FL2L3K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBCpgWy12GfFHckCES%2FQXxF9I8Vwo0AdVfKZZvvJdDSLAiEAis4c%2FTHkvax%2FeUmLqraH6LYk%2BhtZKrPa8Td4dWDkz3EqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYHW1Z4S4d2CCRuSyrcA1gnCILebSZief4BtmQFq3SPS2tjzz2JCNQueqF8cWihWvDOcalpPA02NxsqHVYZrc4GHfEKg5uMhXEk%2BL7q%2Btl8LyEoR2oLn1OS90ase56N1CfAUeKM4prX2TtRh7ZRgI2hW2Aox1UgLY6Obl%2BLCzS3BaJuk%2BUqQ8q7s1gqNjFLGQQX36UBSrCNuvIflqfBKWfxeM3Qoh5DvQgUnBT2ZocDHXjp%2F0oLLVxjiSY5jKY11dRRK704eUpC7%2B%2FV4jiuzCs2T1z62OeS47wXAlC7DAi1l4NJ9ae4GT1Kki6mUSwKmjdtL2JxjiAe2k6kjmyxn3BCrdpwh6Q3HTetzfeSPek5hQiNu2xugBOQ5FRENYrVQlOASWIGrFSIY35PZ5TxDZOZwEFWy%2FXIFCLR34VMDnAtEQQxiFtHu4FDxkL7h4KQ4bDW1HOg%2F0iC1DGh%2B6X2MnVEgMOUEAErSl18MyxrdyxuPTyP5xkdAzSpP2J6%2FDZDFNAm376toT4qtywHHl5PyDcMUqhVud5t2nZabcrQFfauJ5ey7BrAnM8lu6WSv4yml6Il4BrorvmLw2hAbxpgp1ldcZNyTVSuzAfRpZDcoIrHOCabNcW4XKKKkbas249EKhptPEoedvj2EI%2BUMILSr78GOqUBhfH07FNJwQ%2FuzUFhZ1LD%2FZ1rrtPjFSNWWSt353yXUAvLK4NiuSbVS%2FYB0bT0hEOwTzsNP72Z0dLhOCZkmPShAFfmHd06wTcfLY%2Fl3I%2BxbSj0WjO0GM5bw1fMAIdXEulhkYkBBgAVeSd0w4REp7aXetPqI6rd6qfpCigEfS6moCnuWXAMM7%2FSofGr9KMdG5fv5GO%2BBDXy5RSbfbSx207AGmTRqOlJ&X-Amz-Signature=5ee92b8a42ac459648cc0310e5da5824d0eff57d119c01406046e02ba5a088a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FL2L3K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBCpgWy12GfFHckCES%2FQXxF9I8Vwo0AdVfKZZvvJdDSLAiEAis4c%2FTHkvax%2FeUmLqraH6LYk%2BhtZKrPa8Td4dWDkz3EqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYHW1Z4S4d2CCRuSyrcA1gnCILebSZief4BtmQFq3SPS2tjzz2JCNQueqF8cWihWvDOcalpPA02NxsqHVYZrc4GHfEKg5uMhXEk%2BL7q%2Btl8LyEoR2oLn1OS90ase56N1CfAUeKM4prX2TtRh7ZRgI2hW2Aox1UgLY6Obl%2BLCzS3BaJuk%2BUqQ8q7s1gqNjFLGQQX36UBSrCNuvIflqfBKWfxeM3Qoh5DvQgUnBT2ZocDHXjp%2F0oLLVxjiSY5jKY11dRRK704eUpC7%2B%2FV4jiuzCs2T1z62OeS47wXAlC7DAi1l4NJ9ae4GT1Kki6mUSwKmjdtL2JxjiAe2k6kjmyxn3BCrdpwh6Q3HTetzfeSPek5hQiNu2xugBOQ5FRENYrVQlOASWIGrFSIY35PZ5TxDZOZwEFWy%2FXIFCLR34VMDnAtEQQxiFtHu4FDxkL7h4KQ4bDW1HOg%2F0iC1DGh%2B6X2MnVEgMOUEAErSl18MyxrdyxuPTyP5xkdAzSpP2J6%2FDZDFNAm376toT4qtywHHl5PyDcMUqhVud5t2nZabcrQFfauJ5ey7BrAnM8lu6WSv4yml6Il4BrorvmLw2hAbxpgp1ldcZNyTVSuzAfRpZDcoIrHOCabNcW4XKKKkbas249EKhptPEoedvj2EI%2BUMILSr78GOqUBhfH07FNJwQ%2FuzUFhZ1LD%2FZ1rrtPjFSNWWSt353yXUAvLK4NiuSbVS%2FYB0bT0hEOwTzsNP72Z0dLhOCZkmPShAFfmHd06wTcfLY%2Fl3I%2BxbSj0WjO0GM5bw1fMAIdXEulhkYkBBgAVeSd0w4REp7aXetPqI6rd6qfpCigEfS6moCnuWXAMM7%2FSofGr9KMdG5fv5GO%2BBDXy5RSbfbSx207AGmTRqOlJ&X-Amz-Signature=d4ce71a7caf2ab7942501b90ff7b961ca3a879c6641a26a78168a9862980e248&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FL2L3K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBCpgWy12GfFHckCES%2FQXxF9I8Vwo0AdVfKZZvvJdDSLAiEAis4c%2FTHkvax%2FeUmLqraH6LYk%2BhtZKrPa8Td4dWDkz3EqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYHW1Z4S4d2CCRuSyrcA1gnCILebSZief4BtmQFq3SPS2tjzz2JCNQueqF8cWihWvDOcalpPA02NxsqHVYZrc4GHfEKg5uMhXEk%2BL7q%2Btl8LyEoR2oLn1OS90ase56N1CfAUeKM4prX2TtRh7ZRgI2hW2Aox1UgLY6Obl%2BLCzS3BaJuk%2BUqQ8q7s1gqNjFLGQQX36UBSrCNuvIflqfBKWfxeM3Qoh5DvQgUnBT2ZocDHXjp%2F0oLLVxjiSY5jKY11dRRK704eUpC7%2B%2FV4jiuzCs2T1z62OeS47wXAlC7DAi1l4NJ9ae4GT1Kki6mUSwKmjdtL2JxjiAe2k6kjmyxn3BCrdpwh6Q3HTetzfeSPek5hQiNu2xugBOQ5FRENYrVQlOASWIGrFSIY35PZ5TxDZOZwEFWy%2FXIFCLR34VMDnAtEQQxiFtHu4FDxkL7h4KQ4bDW1HOg%2F0iC1DGh%2B6X2MnVEgMOUEAErSl18MyxrdyxuPTyP5xkdAzSpP2J6%2FDZDFNAm376toT4qtywHHl5PyDcMUqhVud5t2nZabcrQFfauJ5ey7BrAnM8lu6WSv4yml6Il4BrorvmLw2hAbxpgp1ldcZNyTVSuzAfRpZDcoIrHOCabNcW4XKKKkbas249EKhptPEoedvj2EI%2BUMILSr78GOqUBhfH07FNJwQ%2FuzUFhZ1LD%2FZ1rrtPjFSNWWSt353yXUAvLK4NiuSbVS%2FYB0bT0hEOwTzsNP72Z0dLhOCZkmPShAFfmHd06wTcfLY%2Fl3I%2BxbSj0WjO0GM5bw1fMAIdXEulhkYkBBgAVeSd0w4REp7aXetPqI6rd6qfpCigEfS6moCnuWXAMM7%2FSofGr9KMdG5fv5GO%2BBDXy5RSbfbSx207AGmTRqOlJ&X-Amz-Signature=eea34ec6bcbde156eeed979f1a4e4750c36ffbda05c40c18c21cc09017b42c45&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FL2L3K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBCpgWy12GfFHckCES%2FQXxF9I8Vwo0AdVfKZZvvJdDSLAiEAis4c%2FTHkvax%2FeUmLqraH6LYk%2BhtZKrPa8Td4dWDkz3EqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYHW1Z4S4d2CCRuSyrcA1gnCILebSZief4BtmQFq3SPS2tjzz2JCNQueqF8cWihWvDOcalpPA02NxsqHVYZrc4GHfEKg5uMhXEk%2BL7q%2Btl8LyEoR2oLn1OS90ase56N1CfAUeKM4prX2TtRh7ZRgI2hW2Aox1UgLY6Obl%2BLCzS3BaJuk%2BUqQ8q7s1gqNjFLGQQX36UBSrCNuvIflqfBKWfxeM3Qoh5DvQgUnBT2ZocDHXjp%2F0oLLVxjiSY5jKY11dRRK704eUpC7%2B%2FV4jiuzCs2T1z62OeS47wXAlC7DAi1l4NJ9ae4GT1Kki6mUSwKmjdtL2JxjiAe2k6kjmyxn3BCrdpwh6Q3HTetzfeSPek5hQiNu2xugBOQ5FRENYrVQlOASWIGrFSIY35PZ5TxDZOZwEFWy%2FXIFCLR34VMDnAtEQQxiFtHu4FDxkL7h4KQ4bDW1HOg%2F0iC1DGh%2B6X2MnVEgMOUEAErSl18MyxrdyxuPTyP5xkdAzSpP2J6%2FDZDFNAm376toT4qtywHHl5PyDcMUqhVud5t2nZabcrQFfauJ5ey7BrAnM8lu6WSv4yml6Il4BrorvmLw2hAbxpgp1ldcZNyTVSuzAfRpZDcoIrHOCabNcW4XKKKkbas249EKhptPEoedvj2EI%2BUMILSr78GOqUBhfH07FNJwQ%2FuzUFhZ1LD%2FZ1rrtPjFSNWWSt353yXUAvLK4NiuSbVS%2FYB0bT0hEOwTzsNP72Z0dLhOCZkmPShAFfmHd06wTcfLY%2Fl3I%2BxbSj0WjO0GM5bw1fMAIdXEulhkYkBBgAVeSd0w4REp7aXetPqI6rd6qfpCigEfS6moCnuWXAMM7%2FSofGr9KMdG5fv5GO%2BBDXy5RSbfbSx207AGmTRqOlJ&X-Amz-Signature=d04535e3886c55d8c4826fbe63a97d3324f878c3fe3e04b86f6e1664ad03bded&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FL2L3K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBCpgWy12GfFHckCES%2FQXxF9I8Vwo0AdVfKZZvvJdDSLAiEAis4c%2FTHkvax%2FeUmLqraH6LYk%2BhtZKrPa8Td4dWDkz3EqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYHW1Z4S4d2CCRuSyrcA1gnCILebSZief4BtmQFq3SPS2tjzz2JCNQueqF8cWihWvDOcalpPA02NxsqHVYZrc4GHfEKg5uMhXEk%2BL7q%2Btl8LyEoR2oLn1OS90ase56N1CfAUeKM4prX2TtRh7ZRgI2hW2Aox1UgLY6Obl%2BLCzS3BaJuk%2BUqQ8q7s1gqNjFLGQQX36UBSrCNuvIflqfBKWfxeM3Qoh5DvQgUnBT2ZocDHXjp%2F0oLLVxjiSY5jKY11dRRK704eUpC7%2B%2FV4jiuzCs2T1z62OeS47wXAlC7DAi1l4NJ9ae4GT1Kki6mUSwKmjdtL2JxjiAe2k6kjmyxn3BCrdpwh6Q3HTetzfeSPek5hQiNu2xugBOQ5FRENYrVQlOASWIGrFSIY35PZ5TxDZOZwEFWy%2FXIFCLR34VMDnAtEQQxiFtHu4FDxkL7h4KQ4bDW1HOg%2F0iC1DGh%2B6X2MnVEgMOUEAErSl18MyxrdyxuPTyP5xkdAzSpP2J6%2FDZDFNAm376toT4qtywHHl5PyDcMUqhVud5t2nZabcrQFfauJ5ey7BrAnM8lu6WSv4yml6Il4BrorvmLw2hAbxpgp1ldcZNyTVSuzAfRpZDcoIrHOCabNcW4XKKKkbas249EKhptPEoedvj2EI%2BUMILSr78GOqUBhfH07FNJwQ%2FuzUFhZ1LD%2FZ1rrtPjFSNWWSt353yXUAvLK4NiuSbVS%2FYB0bT0hEOwTzsNP72Z0dLhOCZkmPShAFfmHd06wTcfLY%2Fl3I%2BxbSj0WjO0GM5bw1fMAIdXEulhkYkBBgAVeSd0w4REp7aXetPqI6rd6qfpCigEfS6moCnuWXAMM7%2FSofGr9KMdG5fv5GO%2BBDXy5RSbfbSx207AGmTRqOlJ&X-Amz-Signature=10815db68446b7d14c104890e8207d580265948aa07f4712e528d05f8c1eb16d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FL2L3K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBCpgWy12GfFHckCES%2FQXxF9I8Vwo0AdVfKZZvvJdDSLAiEAis4c%2FTHkvax%2FeUmLqraH6LYk%2BhtZKrPa8Td4dWDkz3EqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYHW1Z4S4d2CCRuSyrcA1gnCILebSZief4BtmQFq3SPS2tjzz2JCNQueqF8cWihWvDOcalpPA02NxsqHVYZrc4GHfEKg5uMhXEk%2BL7q%2Btl8LyEoR2oLn1OS90ase56N1CfAUeKM4prX2TtRh7ZRgI2hW2Aox1UgLY6Obl%2BLCzS3BaJuk%2BUqQ8q7s1gqNjFLGQQX36UBSrCNuvIflqfBKWfxeM3Qoh5DvQgUnBT2ZocDHXjp%2F0oLLVxjiSY5jKY11dRRK704eUpC7%2B%2FV4jiuzCs2T1z62OeS47wXAlC7DAi1l4NJ9ae4GT1Kki6mUSwKmjdtL2JxjiAe2k6kjmyxn3BCrdpwh6Q3HTetzfeSPek5hQiNu2xugBOQ5FRENYrVQlOASWIGrFSIY35PZ5TxDZOZwEFWy%2FXIFCLR34VMDnAtEQQxiFtHu4FDxkL7h4KQ4bDW1HOg%2F0iC1DGh%2B6X2MnVEgMOUEAErSl18MyxrdyxuPTyP5xkdAzSpP2J6%2FDZDFNAm376toT4qtywHHl5PyDcMUqhVud5t2nZabcrQFfauJ5ey7BrAnM8lu6WSv4yml6Il4BrorvmLw2hAbxpgp1ldcZNyTVSuzAfRpZDcoIrHOCabNcW4XKKKkbas249EKhptPEoedvj2EI%2BUMILSr78GOqUBhfH07FNJwQ%2FuzUFhZ1LD%2FZ1rrtPjFSNWWSt353yXUAvLK4NiuSbVS%2FYB0bT0hEOwTzsNP72Z0dLhOCZkmPShAFfmHd06wTcfLY%2Fl3I%2BxbSj0WjO0GM5bw1fMAIdXEulhkYkBBgAVeSd0w4REp7aXetPqI6rd6qfpCigEfS6moCnuWXAMM7%2FSofGr9KMdG5fv5GO%2BBDXy5RSbfbSx207AGmTRqOlJ&X-Amz-Signature=e45dceca4b423701bd7175038ea3d187881d2334e6d3b918126daf04efa988c0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FL2L3K%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBCpgWy12GfFHckCES%2FQXxF9I8Vwo0AdVfKZZvvJdDSLAiEAis4c%2FTHkvax%2FeUmLqraH6LYk%2BhtZKrPa8Td4dWDkz3EqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYHW1Z4S4d2CCRuSyrcA1gnCILebSZief4BtmQFq3SPS2tjzz2JCNQueqF8cWihWvDOcalpPA02NxsqHVYZrc4GHfEKg5uMhXEk%2BL7q%2Btl8LyEoR2oLn1OS90ase56N1CfAUeKM4prX2TtRh7ZRgI2hW2Aox1UgLY6Obl%2BLCzS3BaJuk%2BUqQ8q7s1gqNjFLGQQX36UBSrCNuvIflqfBKWfxeM3Qoh5DvQgUnBT2ZocDHXjp%2F0oLLVxjiSY5jKY11dRRK704eUpC7%2B%2FV4jiuzCs2T1z62OeS47wXAlC7DAi1l4NJ9ae4GT1Kki6mUSwKmjdtL2JxjiAe2k6kjmyxn3BCrdpwh6Q3HTetzfeSPek5hQiNu2xugBOQ5FRENYrVQlOASWIGrFSIY35PZ5TxDZOZwEFWy%2FXIFCLR34VMDnAtEQQxiFtHu4FDxkL7h4KQ4bDW1HOg%2F0iC1DGh%2B6X2MnVEgMOUEAErSl18MyxrdyxuPTyP5xkdAzSpP2J6%2FDZDFNAm376toT4qtywHHl5PyDcMUqhVud5t2nZabcrQFfauJ5ey7BrAnM8lu6WSv4yml6Il4BrorvmLw2hAbxpgp1ldcZNyTVSuzAfRpZDcoIrHOCabNcW4XKKKkbas249EKhptPEoedvj2EI%2BUMILSr78GOqUBhfH07FNJwQ%2FuzUFhZ1LD%2FZ1rrtPjFSNWWSt353yXUAvLK4NiuSbVS%2FYB0bT0hEOwTzsNP72Z0dLhOCZkmPShAFfmHd06wTcfLY%2Fl3I%2BxbSj0WjO0GM5bw1fMAIdXEulhkYkBBgAVeSd0w4REp7aXetPqI6rd6qfpCigEfS6moCnuWXAMM7%2FSofGr9KMdG5fv5GO%2BBDXy5RSbfbSx207AGmTRqOlJ&X-Amz-Signature=d5c7f7e34ae4aa8240b4e9230c3e149cf1d9266666cbcc7728c567cf2650015b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
