---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETE7BLI%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD18PcK1FwgtC81Cln1teoE92lhXeEiI6oCClw1DW1K5gIgeHzox%2BDEtYuB18SwyixV7eDphDOqAa%2BK30mAxd5Bl88qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnq6R8k566NU3JTFSrcA1hY8CLYib83LAh%2BmQ76x58hV4jyHHqT0gOuFi1wRiuKlVkjqSyS6VA1Td19cdQx0E9lGMCVoyl%2Bsj%2BIM67dpXXIiZAB4199bv5mhtQHdKuE4xzUevd22%2FVNIWD%2Fx4w%2FLnOTE%2BVgYIN2AxChYmdbrJITNpK6n4bh%2BSGoCRAbAjU%2FOFYSA%2FQD6LVOjwx3aYDvyn%2Fkudz8LTLD9WKHdVlJGGId%2B8%2F7bYVz%2Fw2QmZJiorXf85FUQOra7wbIFgE5FNy3Q6y%2FwvxL%2BBl0wgdklMK%2F2pDymZUKFfZFFQL4LBrPr1%2Bo0MWz0stZHizw3VV2gLLBxharQ1UG7VJM1InjRTwI7y%2FyveVBzfrTKDBuJfT0WE05jN0yxwEkJWpBnhqaFcek6ZSALrpfLJs%2Fs11pP%2Fh1gSwwPvSyZ%2Fcbu0fLiSVINEjcAG4yZZ3bnrE7CDMFowy6WrcA%2By5jWAGTQJS7SWMxCHkVHtB5dV7YWDB3yrCUv%2B%2BcaQshfOC3AoAgCcfXR8kBbQV%2BV7deqRTnsGZtVP9n%2BmEsjsuwm88ujmei5l%2Fzma7wyesrQsyqjjJ7JpuCA59X%2FVfLx07MoGG6%2Fm1LBFZQPsJch3z2ogzEPRyD3UCck3I2L3FBC4vd3dIvT3GkMLPYpscGOqUBya4d9q5Mj%2Fp1RQZ9xCPFIupEbl4XDW%2FcRbEJfhlMo1wdL8uLLAPBeavx5SMTBjIv51MEVYlB00u%2BjLZr0ot2bNTH%2BzJh6D1K9v9jcSKp9VlkgQC2nOYz4SS57ofTuuiXjrIC2KF5ls9bT7eoQJyNNxdmZd5X1TAWhg2faT3Di9Syy%2BJjo%2FXzTSYx6V%2F%2B4ki6ehy1zSk4QnPc65fKAhmm2%2BoftOKa&X-Amz-Signature=2ff71789d820a4f43262cfd1bce15c7b8acea5ac85db9386ac5863ac93a40087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETE7BLI%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD18PcK1FwgtC81Cln1teoE92lhXeEiI6oCClw1DW1K5gIgeHzox%2BDEtYuB18SwyixV7eDphDOqAa%2BK30mAxd5Bl88qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnq6R8k566NU3JTFSrcA1hY8CLYib83LAh%2BmQ76x58hV4jyHHqT0gOuFi1wRiuKlVkjqSyS6VA1Td19cdQx0E9lGMCVoyl%2Bsj%2BIM67dpXXIiZAB4199bv5mhtQHdKuE4xzUevd22%2FVNIWD%2Fx4w%2FLnOTE%2BVgYIN2AxChYmdbrJITNpK6n4bh%2BSGoCRAbAjU%2FOFYSA%2FQD6LVOjwx3aYDvyn%2Fkudz8LTLD9WKHdVlJGGId%2B8%2F7bYVz%2Fw2QmZJiorXf85FUQOra7wbIFgE5FNy3Q6y%2FwvxL%2BBl0wgdklMK%2F2pDymZUKFfZFFQL4LBrPr1%2Bo0MWz0stZHizw3VV2gLLBxharQ1UG7VJM1InjRTwI7y%2FyveVBzfrTKDBuJfT0WE05jN0yxwEkJWpBnhqaFcek6ZSALrpfLJs%2Fs11pP%2Fh1gSwwPvSyZ%2Fcbu0fLiSVINEjcAG4yZZ3bnrE7CDMFowy6WrcA%2By5jWAGTQJS7SWMxCHkVHtB5dV7YWDB3yrCUv%2B%2BcaQshfOC3AoAgCcfXR8kBbQV%2BV7deqRTnsGZtVP9n%2BmEsjsuwm88ujmei5l%2Fzma7wyesrQsyqjjJ7JpuCA59X%2FVfLx07MoGG6%2Fm1LBFZQPsJch3z2ogzEPRyD3UCck3I2L3FBC4vd3dIvT3GkMLPYpscGOqUBya4d9q5Mj%2Fp1RQZ9xCPFIupEbl4XDW%2FcRbEJfhlMo1wdL8uLLAPBeavx5SMTBjIv51MEVYlB00u%2BjLZr0ot2bNTH%2BzJh6D1K9v9jcSKp9VlkgQC2nOYz4SS57ofTuuiXjrIC2KF5ls9bT7eoQJyNNxdmZd5X1TAWhg2faT3Di9Syy%2BJjo%2FXzTSYx6V%2F%2B4ki6ehy1zSk4QnPc65fKAhmm2%2BoftOKa&X-Amz-Signature=ba7e5f43bba31f5f2b2ff9150589f0faf692a4ccadb644108be27f3745815902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETE7BLI%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD18PcK1FwgtC81Cln1teoE92lhXeEiI6oCClw1DW1K5gIgeHzox%2BDEtYuB18SwyixV7eDphDOqAa%2BK30mAxd5Bl88qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnq6R8k566NU3JTFSrcA1hY8CLYib83LAh%2BmQ76x58hV4jyHHqT0gOuFi1wRiuKlVkjqSyS6VA1Td19cdQx0E9lGMCVoyl%2Bsj%2BIM67dpXXIiZAB4199bv5mhtQHdKuE4xzUevd22%2FVNIWD%2Fx4w%2FLnOTE%2BVgYIN2AxChYmdbrJITNpK6n4bh%2BSGoCRAbAjU%2FOFYSA%2FQD6LVOjwx3aYDvyn%2Fkudz8LTLD9WKHdVlJGGId%2B8%2F7bYVz%2Fw2QmZJiorXf85FUQOra7wbIFgE5FNy3Q6y%2FwvxL%2BBl0wgdklMK%2F2pDymZUKFfZFFQL4LBrPr1%2Bo0MWz0stZHizw3VV2gLLBxharQ1UG7VJM1InjRTwI7y%2FyveVBzfrTKDBuJfT0WE05jN0yxwEkJWpBnhqaFcek6ZSALrpfLJs%2Fs11pP%2Fh1gSwwPvSyZ%2Fcbu0fLiSVINEjcAG4yZZ3bnrE7CDMFowy6WrcA%2By5jWAGTQJS7SWMxCHkVHtB5dV7YWDB3yrCUv%2B%2BcaQshfOC3AoAgCcfXR8kBbQV%2BV7deqRTnsGZtVP9n%2BmEsjsuwm88ujmei5l%2Fzma7wyesrQsyqjjJ7JpuCA59X%2FVfLx07MoGG6%2Fm1LBFZQPsJch3z2ogzEPRyD3UCck3I2L3FBC4vd3dIvT3GkMLPYpscGOqUBya4d9q5Mj%2Fp1RQZ9xCPFIupEbl4XDW%2FcRbEJfhlMo1wdL8uLLAPBeavx5SMTBjIv51MEVYlB00u%2BjLZr0ot2bNTH%2BzJh6D1K9v9jcSKp9VlkgQC2nOYz4SS57ofTuuiXjrIC2KF5ls9bT7eoQJyNNxdmZd5X1TAWhg2faT3Di9Syy%2BJjo%2FXzTSYx6V%2F%2B4ki6ehy1zSk4QnPc65fKAhmm2%2BoftOKa&X-Amz-Signature=9e6b9014f71cec08cf94357b467447aa9920732968f8f81d285493da7e3c90dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETE7BLI%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD18PcK1FwgtC81Cln1teoE92lhXeEiI6oCClw1DW1K5gIgeHzox%2BDEtYuB18SwyixV7eDphDOqAa%2BK30mAxd5Bl88qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnq6R8k566NU3JTFSrcA1hY8CLYib83LAh%2BmQ76x58hV4jyHHqT0gOuFi1wRiuKlVkjqSyS6VA1Td19cdQx0E9lGMCVoyl%2Bsj%2BIM67dpXXIiZAB4199bv5mhtQHdKuE4xzUevd22%2FVNIWD%2Fx4w%2FLnOTE%2BVgYIN2AxChYmdbrJITNpK6n4bh%2BSGoCRAbAjU%2FOFYSA%2FQD6LVOjwx3aYDvyn%2Fkudz8LTLD9WKHdVlJGGId%2B8%2F7bYVz%2Fw2QmZJiorXf85FUQOra7wbIFgE5FNy3Q6y%2FwvxL%2BBl0wgdklMK%2F2pDymZUKFfZFFQL4LBrPr1%2Bo0MWz0stZHizw3VV2gLLBxharQ1UG7VJM1InjRTwI7y%2FyveVBzfrTKDBuJfT0WE05jN0yxwEkJWpBnhqaFcek6ZSALrpfLJs%2Fs11pP%2Fh1gSwwPvSyZ%2Fcbu0fLiSVINEjcAG4yZZ3bnrE7CDMFowy6WrcA%2By5jWAGTQJS7SWMxCHkVHtB5dV7YWDB3yrCUv%2B%2BcaQshfOC3AoAgCcfXR8kBbQV%2BV7deqRTnsGZtVP9n%2BmEsjsuwm88ujmei5l%2Fzma7wyesrQsyqjjJ7JpuCA59X%2FVfLx07MoGG6%2Fm1LBFZQPsJch3z2ogzEPRyD3UCck3I2L3FBC4vd3dIvT3GkMLPYpscGOqUBya4d9q5Mj%2Fp1RQZ9xCPFIupEbl4XDW%2FcRbEJfhlMo1wdL8uLLAPBeavx5SMTBjIv51MEVYlB00u%2BjLZr0ot2bNTH%2BzJh6D1K9v9jcSKp9VlkgQC2nOYz4SS57ofTuuiXjrIC2KF5ls9bT7eoQJyNNxdmZd5X1TAWhg2faT3Di9Syy%2BJjo%2FXzTSYx6V%2F%2B4ki6ehy1zSk4QnPc65fKAhmm2%2BoftOKa&X-Amz-Signature=3abe3c57ebe5379d8dd8644a81bc8326b0e9af1214ff14a26af721ea11c8bb37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETE7BLI%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD18PcK1FwgtC81Cln1teoE92lhXeEiI6oCClw1DW1K5gIgeHzox%2BDEtYuB18SwyixV7eDphDOqAa%2BK30mAxd5Bl88qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnq6R8k566NU3JTFSrcA1hY8CLYib83LAh%2BmQ76x58hV4jyHHqT0gOuFi1wRiuKlVkjqSyS6VA1Td19cdQx0E9lGMCVoyl%2Bsj%2BIM67dpXXIiZAB4199bv5mhtQHdKuE4xzUevd22%2FVNIWD%2Fx4w%2FLnOTE%2BVgYIN2AxChYmdbrJITNpK6n4bh%2BSGoCRAbAjU%2FOFYSA%2FQD6LVOjwx3aYDvyn%2Fkudz8LTLD9WKHdVlJGGId%2B8%2F7bYVz%2Fw2QmZJiorXf85FUQOra7wbIFgE5FNy3Q6y%2FwvxL%2BBl0wgdklMK%2F2pDymZUKFfZFFQL4LBrPr1%2Bo0MWz0stZHizw3VV2gLLBxharQ1UG7VJM1InjRTwI7y%2FyveVBzfrTKDBuJfT0WE05jN0yxwEkJWpBnhqaFcek6ZSALrpfLJs%2Fs11pP%2Fh1gSwwPvSyZ%2Fcbu0fLiSVINEjcAG4yZZ3bnrE7CDMFowy6WrcA%2By5jWAGTQJS7SWMxCHkVHtB5dV7YWDB3yrCUv%2B%2BcaQshfOC3AoAgCcfXR8kBbQV%2BV7deqRTnsGZtVP9n%2BmEsjsuwm88ujmei5l%2Fzma7wyesrQsyqjjJ7JpuCA59X%2FVfLx07MoGG6%2Fm1LBFZQPsJch3z2ogzEPRyD3UCck3I2L3FBC4vd3dIvT3GkMLPYpscGOqUBya4d9q5Mj%2Fp1RQZ9xCPFIupEbl4XDW%2FcRbEJfhlMo1wdL8uLLAPBeavx5SMTBjIv51MEVYlB00u%2BjLZr0ot2bNTH%2BzJh6D1K9v9jcSKp9VlkgQC2nOYz4SS57ofTuuiXjrIC2KF5ls9bT7eoQJyNNxdmZd5X1TAWhg2faT3Di9Syy%2BJjo%2FXzTSYx6V%2F%2B4ki6ehy1zSk4QnPc65fKAhmm2%2BoftOKa&X-Amz-Signature=de0fc0a7d71f2c3c28e06f7290722015caf105d7895abe97d082ab81477aece4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETE7BLI%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD18PcK1FwgtC81Cln1teoE92lhXeEiI6oCClw1DW1K5gIgeHzox%2BDEtYuB18SwyixV7eDphDOqAa%2BK30mAxd5Bl88qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnq6R8k566NU3JTFSrcA1hY8CLYib83LAh%2BmQ76x58hV4jyHHqT0gOuFi1wRiuKlVkjqSyS6VA1Td19cdQx0E9lGMCVoyl%2Bsj%2BIM67dpXXIiZAB4199bv5mhtQHdKuE4xzUevd22%2FVNIWD%2Fx4w%2FLnOTE%2BVgYIN2AxChYmdbrJITNpK6n4bh%2BSGoCRAbAjU%2FOFYSA%2FQD6LVOjwx3aYDvyn%2Fkudz8LTLD9WKHdVlJGGId%2B8%2F7bYVz%2Fw2QmZJiorXf85FUQOra7wbIFgE5FNy3Q6y%2FwvxL%2BBl0wgdklMK%2F2pDymZUKFfZFFQL4LBrPr1%2Bo0MWz0stZHizw3VV2gLLBxharQ1UG7VJM1InjRTwI7y%2FyveVBzfrTKDBuJfT0WE05jN0yxwEkJWpBnhqaFcek6ZSALrpfLJs%2Fs11pP%2Fh1gSwwPvSyZ%2Fcbu0fLiSVINEjcAG4yZZ3bnrE7CDMFowy6WrcA%2By5jWAGTQJS7SWMxCHkVHtB5dV7YWDB3yrCUv%2B%2BcaQshfOC3AoAgCcfXR8kBbQV%2BV7deqRTnsGZtVP9n%2BmEsjsuwm88ujmei5l%2Fzma7wyesrQsyqjjJ7JpuCA59X%2FVfLx07MoGG6%2Fm1LBFZQPsJch3z2ogzEPRyD3UCck3I2L3FBC4vd3dIvT3GkMLPYpscGOqUBya4d9q5Mj%2Fp1RQZ9xCPFIupEbl4XDW%2FcRbEJfhlMo1wdL8uLLAPBeavx5SMTBjIv51MEVYlB00u%2BjLZr0ot2bNTH%2BzJh6D1K9v9jcSKp9VlkgQC2nOYz4SS57ofTuuiXjrIC2KF5ls9bT7eoQJyNNxdmZd5X1TAWhg2faT3Di9Syy%2BJjo%2FXzTSYx6V%2F%2B4ki6ehy1zSk4QnPc65fKAhmm2%2BoftOKa&X-Amz-Signature=0e3c85208b4b17ad801a3e3d01c97d18c071cc504f107c713d6c10ea7ee68c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETE7BLI%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD18PcK1FwgtC81Cln1teoE92lhXeEiI6oCClw1DW1K5gIgeHzox%2BDEtYuB18SwyixV7eDphDOqAa%2BK30mAxd5Bl88qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnq6R8k566NU3JTFSrcA1hY8CLYib83LAh%2BmQ76x58hV4jyHHqT0gOuFi1wRiuKlVkjqSyS6VA1Td19cdQx0E9lGMCVoyl%2Bsj%2BIM67dpXXIiZAB4199bv5mhtQHdKuE4xzUevd22%2FVNIWD%2Fx4w%2FLnOTE%2BVgYIN2AxChYmdbrJITNpK6n4bh%2BSGoCRAbAjU%2FOFYSA%2FQD6LVOjwx3aYDvyn%2Fkudz8LTLD9WKHdVlJGGId%2B8%2F7bYVz%2Fw2QmZJiorXf85FUQOra7wbIFgE5FNy3Q6y%2FwvxL%2BBl0wgdklMK%2F2pDymZUKFfZFFQL4LBrPr1%2Bo0MWz0stZHizw3VV2gLLBxharQ1UG7VJM1InjRTwI7y%2FyveVBzfrTKDBuJfT0WE05jN0yxwEkJWpBnhqaFcek6ZSALrpfLJs%2Fs11pP%2Fh1gSwwPvSyZ%2Fcbu0fLiSVINEjcAG4yZZ3bnrE7CDMFowy6WrcA%2By5jWAGTQJS7SWMxCHkVHtB5dV7YWDB3yrCUv%2B%2BcaQshfOC3AoAgCcfXR8kBbQV%2BV7deqRTnsGZtVP9n%2BmEsjsuwm88ujmei5l%2Fzma7wyesrQsyqjjJ7JpuCA59X%2FVfLx07MoGG6%2Fm1LBFZQPsJch3z2ogzEPRyD3UCck3I2L3FBC4vd3dIvT3GkMLPYpscGOqUBya4d9q5Mj%2Fp1RQZ9xCPFIupEbl4XDW%2FcRbEJfhlMo1wdL8uLLAPBeavx5SMTBjIv51MEVYlB00u%2BjLZr0ot2bNTH%2BzJh6D1K9v9jcSKp9VlkgQC2nOYz4SS57ofTuuiXjrIC2KF5ls9bT7eoQJyNNxdmZd5X1TAWhg2faT3Di9Syy%2BJjo%2FXzTSYx6V%2F%2B4ki6ehy1zSk4QnPc65fKAhmm2%2BoftOKa&X-Amz-Signature=450b0489757f535ab9498b3109a67aba6c405b75970740d5c92a4e1b87345010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
