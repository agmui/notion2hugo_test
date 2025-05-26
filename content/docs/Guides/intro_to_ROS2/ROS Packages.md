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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6ZS36C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD9mAtMuvy3trERHqVqTmIfBJ6KZ6iDdinARJ%2F%2BPcgQ3QIhAMgkP5Lq2J6QU%2BFDVY7O02GyXUEeptnoqjQt%2FFQEMbhqKv8DCDsQABoMNjM3NDIzMTgzODA1IgwCEh43YNs8BgvDuk8q3AOTYwxZfYQRWyDtRMy3FzLZJr09LsGpOfOOBuLJ5seS5ERMwxv%2FsmJusorgc14vYh44CPwsjm0fq9TR3GZ5WKtYX8vm0AEUAbJsFD9qcd%2BGrPSJ9HGJEhsz3ZThR%2B1qlX8OyRj5MZbjvonHTh7XyOgxdf91%2B6z30YBN9VE8YFfD%2Bm36ub1p1%2BqaiGbxM8RQsHdukzQCKyPz73QyIYVnDgQ7Dptz4WtDvuYqqmJT9cfBjEO1dy8Pdfn9Zo5Ei05rFVLzgC9mybGHyy0ryDMrdVbzGT7P5Xkw9OyN%2B0ESyNBsQt8JErBzB9dZ01sOPReR3VDbkPeD8voUczEYD%2Bp42AaPNvqyxcp%2BhETpsj8XV%2BgKRACrU0fZXoBbMlmXoTfki%2BHMNkedGd526E%2Fo6Rrnca9ZibwHyPNVLfYy9OX7%2FV6bMYfT66Ni2mHrpGHqi20NdoTUMvEedcwpJGwouDlhbqg2Bt70I%2F9d9Kn3l4H6eMkkpi662Gobc%2BB%2BnpWujdXhvKxgJqaUNaMwgsP81UBOQK2w2UGjDLkn%2FgySKGYJiXk%2Fxce%2FUYJs5vPnrfXRzDtYeBFjWDbsXRuk%2BxMAQEZup2JnnL9CGvZSBtTgdIVH8%2FHVDSMHtrSfU6HSsBS7rDDnnc%2FBBjqkAdlufJskzt4HsKXIRUFN64mx9mlY%2FQ0ao2xSfvddRoj8X4MiTc77vUIhSVSO0DvuSuczMXXGKAq2xsssl7PQyVqleRmT57nJRC9CIugGkJKhoXEg6gJaN3116%2FpYDhUaBDFPrslISpa4n8ZEswc1rU%2FrHaePDcRDxNfum7JQ85IWggE%2Bv3XBAUSrEuX7s%2BIWMcicUzw3JbCBQePn1zGb8PfZa%2FXc&X-Amz-Signature=921219dabf5fee168735feccbc9e67d6218b1315dd331310cfc672d34c7c389b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6ZS36C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD9mAtMuvy3trERHqVqTmIfBJ6KZ6iDdinARJ%2F%2BPcgQ3QIhAMgkP5Lq2J6QU%2BFDVY7O02GyXUEeptnoqjQt%2FFQEMbhqKv8DCDsQABoMNjM3NDIzMTgzODA1IgwCEh43YNs8BgvDuk8q3AOTYwxZfYQRWyDtRMy3FzLZJr09LsGpOfOOBuLJ5seS5ERMwxv%2FsmJusorgc14vYh44CPwsjm0fq9TR3GZ5WKtYX8vm0AEUAbJsFD9qcd%2BGrPSJ9HGJEhsz3ZThR%2B1qlX8OyRj5MZbjvonHTh7XyOgxdf91%2B6z30YBN9VE8YFfD%2Bm36ub1p1%2BqaiGbxM8RQsHdukzQCKyPz73QyIYVnDgQ7Dptz4WtDvuYqqmJT9cfBjEO1dy8Pdfn9Zo5Ei05rFVLzgC9mybGHyy0ryDMrdVbzGT7P5Xkw9OyN%2B0ESyNBsQt8JErBzB9dZ01sOPReR3VDbkPeD8voUczEYD%2Bp42AaPNvqyxcp%2BhETpsj8XV%2BgKRACrU0fZXoBbMlmXoTfki%2BHMNkedGd526E%2Fo6Rrnca9ZibwHyPNVLfYy9OX7%2FV6bMYfT66Ni2mHrpGHqi20NdoTUMvEedcwpJGwouDlhbqg2Bt70I%2F9d9Kn3l4H6eMkkpi662Gobc%2BB%2BnpWujdXhvKxgJqaUNaMwgsP81UBOQK2w2UGjDLkn%2FgySKGYJiXk%2Fxce%2FUYJs5vPnrfXRzDtYeBFjWDbsXRuk%2BxMAQEZup2JnnL9CGvZSBtTgdIVH8%2FHVDSMHtrSfU6HSsBS7rDDnnc%2FBBjqkAdlufJskzt4HsKXIRUFN64mx9mlY%2FQ0ao2xSfvddRoj8X4MiTc77vUIhSVSO0DvuSuczMXXGKAq2xsssl7PQyVqleRmT57nJRC9CIugGkJKhoXEg6gJaN3116%2FpYDhUaBDFPrslISpa4n8ZEswc1rU%2FrHaePDcRDxNfum7JQ85IWggE%2Bv3XBAUSrEuX7s%2BIWMcicUzw3JbCBQePn1zGb8PfZa%2FXc&X-Amz-Signature=2c63698223e350710630491042c8714f78d26250120488b6f3cfe8cc6c116947&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6ZS36C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD9mAtMuvy3trERHqVqTmIfBJ6KZ6iDdinARJ%2F%2BPcgQ3QIhAMgkP5Lq2J6QU%2BFDVY7O02GyXUEeptnoqjQt%2FFQEMbhqKv8DCDsQABoMNjM3NDIzMTgzODA1IgwCEh43YNs8BgvDuk8q3AOTYwxZfYQRWyDtRMy3FzLZJr09LsGpOfOOBuLJ5seS5ERMwxv%2FsmJusorgc14vYh44CPwsjm0fq9TR3GZ5WKtYX8vm0AEUAbJsFD9qcd%2BGrPSJ9HGJEhsz3ZThR%2B1qlX8OyRj5MZbjvonHTh7XyOgxdf91%2B6z30YBN9VE8YFfD%2Bm36ub1p1%2BqaiGbxM8RQsHdukzQCKyPz73QyIYVnDgQ7Dptz4WtDvuYqqmJT9cfBjEO1dy8Pdfn9Zo5Ei05rFVLzgC9mybGHyy0ryDMrdVbzGT7P5Xkw9OyN%2B0ESyNBsQt8JErBzB9dZ01sOPReR3VDbkPeD8voUczEYD%2Bp42AaPNvqyxcp%2BhETpsj8XV%2BgKRACrU0fZXoBbMlmXoTfki%2BHMNkedGd526E%2Fo6Rrnca9ZibwHyPNVLfYy9OX7%2FV6bMYfT66Ni2mHrpGHqi20NdoTUMvEedcwpJGwouDlhbqg2Bt70I%2F9d9Kn3l4H6eMkkpi662Gobc%2BB%2BnpWujdXhvKxgJqaUNaMwgsP81UBOQK2w2UGjDLkn%2FgySKGYJiXk%2Fxce%2FUYJs5vPnrfXRzDtYeBFjWDbsXRuk%2BxMAQEZup2JnnL9CGvZSBtTgdIVH8%2FHVDSMHtrSfU6HSsBS7rDDnnc%2FBBjqkAdlufJskzt4HsKXIRUFN64mx9mlY%2FQ0ao2xSfvddRoj8X4MiTc77vUIhSVSO0DvuSuczMXXGKAq2xsssl7PQyVqleRmT57nJRC9CIugGkJKhoXEg6gJaN3116%2FpYDhUaBDFPrslISpa4n8ZEswc1rU%2FrHaePDcRDxNfum7JQ85IWggE%2Bv3XBAUSrEuX7s%2BIWMcicUzw3JbCBQePn1zGb8PfZa%2FXc&X-Amz-Signature=b30a08ff8eb233ca08d67d46d093df96c413ec918887d7d19d83ef401887802b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6ZS36C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD9mAtMuvy3trERHqVqTmIfBJ6KZ6iDdinARJ%2F%2BPcgQ3QIhAMgkP5Lq2J6QU%2BFDVY7O02GyXUEeptnoqjQt%2FFQEMbhqKv8DCDsQABoMNjM3NDIzMTgzODA1IgwCEh43YNs8BgvDuk8q3AOTYwxZfYQRWyDtRMy3FzLZJr09LsGpOfOOBuLJ5seS5ERMwxv%2FsmJusorgc14vYh44CPwsjm0fq9TR3GZ5WKtYX8vm0AEUAbJsFD9qcd%2BGrPSJ9HGJEhsz3ZThR%2B1qlX8OyRj5MZbjvonHTh7XyOgxdf91%2B6z30YBN9VE8YFfD%2Bm36ub1p1%2BqaiGbxM8RQsHdukzQCKyPz73QyIYVnDgQ7Dptz4WtDvuYqqmJT9cfBjEO1dy8Pdfn9Zo5Ei05rFVLzgC9mybGHyy0ryDMrdVbzGT7P5Xkw9OyN%2B0ESyNBsQt8JErBzB9dZ01sOPReR3VDbkPeD8voUczEYD%2Bp42AaPNvqyxcp%2BhETpsj8XV%2BgKRACrU0fZXoBbMlmXoTfki%2BHMNkedGd526E%2Fo6Rrnca9ZibwHyPNVLfYy9OX7%2FV6bMYfT66Ni2mHrpGHqi20NdoTUMvEedcwpJGwouDlhbqg2Bt70I%2F9d9Kn3l4H6eMkkpi662Gobc%2BB%2BnpWujdXhvKxgJqaUNaMwgsP81UBOQK2w2UGjDLkn%2FgySKGYJiXk%2Fxce%2FUYJs5vPnrfXRzDtYeBFjWDbsXRuk%2BxMAQEZup2JnnL9CGvZSBtTgdIVH8%2FHVDSMHtrSfU6HSsBS7rDDnnc%2FBBjqkAdlufJskzt4HsKXIRUFN64mx9mlY%2FQ0ao2xSfvddRoj8X4MiTc77vUIhSVSO0DvuSuczMXXGKAq2xsssl7PQyVqleRmT57nJRC9CIugGkJKhoXEg6gJaN3116%2FpYDhUaBDFPrslISpa4n8ZEswc1rU%2FrHaePDcRDxNfum7JQ85IWggE%2Bv3XBAUSrEuX7s%2BIWMcicUzw3JbCBQePn1zGb8PfZa%2FXc&X-Amz-Signature=958c81a4c9d40010dacc8d5181b4551cef2095328ba267cf323b817e0e94020f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6ZS36C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD9mAtMuvy3trERHqVqTmIfBJ6KZ6iDdinARJ%2F%2BPcgQ3QIhAMgkP5Lq2J6QU%2BFDVY7O02GyXUEeptnoqjQt%2FFQEMbhqKv8DCDsQABoMNjM3NDIzMTgzODA1IgwCEh43YNs8BgvDuk8q3AOTYwxZfYQRWyDtRMy3FzLZJr09LsGpOfOOBuLJ5seS5ERMwxv%2FsmJusorgc14vYh44CPwsjm0fq9TR3GZ5WKtYX8vm0AEUAbJsFD9qcd%2BGrPSJ9HGJEhsz3ZThR%2B1qlX8OyRj5MZbjvonHTh7XyOgxdf91%2B6z30YBN9VE8YFfD%2Bm36ub1p1%2BqaiGbxM8RQsHdukzQCKyPz73QyIYVnDgQ7Dptz4WtDvuYqqmJT9cfBjEO1dy8Pdfn9Zo5Ei05rFVLzgC9mybGHyy0ryDMrdVbzGT7P5Xkw9OyN%2B0ESyNBsQt8JErBzB9dZ01sOPReR3VDbkPeD8voUczEYD%2Bp42AaPNvqyxcp%2BhETpsj8XV%2BgKRACrU0fZXoBbMlmXoTfki%2BHMNkedGd526E%2Fo6Rrnca9ZibwHyPNVLfYy9OX7%2FV6bMYfT66Ni2mHrpGHqi20NdoTUMvEedcwpJGwouDlhbqg2Bt70I%2F9d9Kn3l4H6eMkkpi662Gobc%2BB%2BnpWujdXhvKxgJqaUNaMwgsP81UBOQK2w2UGjDLkn%2FgySKGYJiXk%2Fxce%2FUYJs5vPnrfXRzDtYeBFjWDbsXRuk%2BxMAQEZup2JnnL9CGvZSBtTgdIVH8%2FHVDSMHtrSfU6HSsBS7rDDnnc%2FBBjqkAdlufJskzt4HsKXIRUFN64mx9mlY%2FQ0ao2xSfvddRoj8X4MiTc77vUIhSVSO0DvuSuczMXXGKAq2xsssl7PQyVqleRmT57nJRC9CIugGkJKhoXEg6gJaN3116%2FpYDhUaBDFPrslISpa4n8ZEswc1rU%2FrHaePDcRDxNfum7JQ85IWggE%2Bv3XBAUSrEuX7s%2BIWMcicUzw3JbCBQePn1zGb8PfZa%2FXc&X-Amz-Signature=99959d37f32fdea61ceab8a4b559a53e0353ed7462f25606ecede1b3cb92478c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6ZS36C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD9mAtMuvy3trERHqVqTmIfBJ6KZ6iDdinARJ%2F%2BPcgQ3QIhAMgkP5Lq2J6QU%2BFDVY7O02GyXUEeptnoqjQt%2FFQEMbhqKv8DCDsQABoMNjM3NDIzMTgzODA1IgwCEh43YNs8BgvDuk8q3AOTYwxZfYQRWyDtRMy3FzLZJr09LsGpOfOOBuLJ5seS5ERMwxv%2FsmJusorgc14vYh44CPwsjm0fq9TR3GZ5WKtYX8vm0AEUAbJsFD9qcd%2BGrPSJ9HGJEhsz3ZThR%2B1qlX8OyRj5MZbjvonHTh7XyOgxdf91%2B6z30YBN9VE8YFfD%2Bm36ub1p1%2BqaiGbxM8RQsHdukzQCKyPz73QyIYVnDgQ7Dptz4WtDvuYqqmJT9cfBjEO1dy8Pdfn9Zo5Ei05rFVLzgC9mybGHyy0ryDMrdVbzGT7P5Xkw9OyN%2B0ESyNBsQt8JErBzB9dZ01sOPReR3VDbkPeD8voUczEYD%2Bp42AaPNvqyxcp%2BhETpsj8XV%2BgKRACrU0fZXoBbMlmXoTfki%2BHMNkedGd526E%2Fo6Rrnca9ZibwHyPNVLfYy9OX7%2FV6bMYfT66Ni2mHrpGHqi20NdoTUMvEedcwpJGwouDlhbqg2Bt70I%2F9d9Kn3l4H6eMkkpi662Gobc%2BB%2BnpWujdXhvKxgJqaUNaMwgsP81UBOQK2w2UGjDLkn%2FgySKGYJiXk%2Fxce%2FUYJs5vPnrfXRzDtYeBFjWDbsXRuk%2BxMAQEZup2JnnL9CGvZSBtTgdIVH8%2FHVDSMHtrSfU6HSsBS7rDDnnc%2FBBjqkAdlufJskzt4HsKXIRUFN64mx9mlY%2FQ0ao2xSfvddRoj8X4MiTc77vUIhSVSO0DvuSuczMXXGKAq2xsssl7PQyVqleRmT57nJRC9CIugGkJKhoXEg6gJaN3116%2FpYDhUaBDFPrslISpa4n8ZEswc1rU%2FrHaePDcRDxNfum7JQ85IWggE%2Bv3XBAUSrEuX7s%2BIWMcicUzw3JbCBQePn1zGb8PfZa%2FXc&X-Amz-Signature=eff5c60ea717e3e7ebf310f7574f52a01944cd5b3125bf304bfc0ba8b48761f6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6ZS36C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD9mAtMuvy3trERHqVqTmIfBJ6KZ6iDdinARJ%2F%2BPcgQ3QIhAMgkP5Lq2J6QU%2BFDVY7O02GyXUEeptnoqjQt%2FFQEMbhqKv8DCDsQABoMNjM3NDIzMTgzODA1IgwCEh43YNs8BgvDuk8q3AOTYwxZfYQRWyDtRMy3FzLZJr09LsGpOfOOBuLJ5seS5ERMwxv%2FsmJusorgc14vYh44CPwsjm0fq9TR3GZ5WKtYX8vm0AEUAbJsFD9qcd%2BGrPSJ9HGJEhsz3ZThR%2B1qlX8OyRj5MZbjvonHTh7XyOgxdf91%2B6z30YBN9VE8YFfD%2Bm36ub1p1%2BqaiGbxM8RQsHdukzQCKyPz73QyIYVnDgQ7Dptz4WtDvuYqqmJT9cfBjEO1dy8Pdfn9Zo5Ei05rFVLzgC9mybGHyy0ryDMrdVbzGT7P5Xkw9OyN%2B0ESyNBsQt8JErBzB9dZ01sOPReR3VDbkPeD8voUczEYD%2Bp42AaPNvqyxcp%2BhETpsj8XV%2BgKRACrU0fZXoBbMlmXoTfki%2BHMNkedGd526E%2Fo6Rrnca9ZibwHyPNVLfYy9OX7%2FV6bMYfT66Ni2mHrpGHqi20NdoTUMvEedcwpJGwouDlhbqg2Bt70I%2F9d9Kn3l4H6eMkkpi662Gobc%2BB%2BnpWujdXhvKxgJqaUNaMwgsP81UBOQK2w2UGjDLkn%2FgySKGYJiXk%2Fxce%2FUYJs5vPnrfXRzDtYeBFjWDbsXRuk%2BxMAQEZup2JnnL9CGvZSBtTgdIVH8%2FHVDSMHtrSfU6HSsBS7rDDnnc%2FBBjqkAdlufJskzt4HsKXIRUFN64mx9mlY%2FQ0ao2xSfvddRoj8X4MiTc77vUIhSVSO0DvuSuczMXXGKAq2xsssl7PQyVqleRmT57nJRC9CIugGkJKhoXEg6gJaN3116%2FpYDhUaBDFPrslISpa4n8ZEswc1rU%2FrHaePDcRDxNfum7JQ85IWggE%2Bv3XBAUSrEuX7s%2BIWMcicUzw3JbCBQePn1zGb8PfZa%2FXc&X-Amz-Signature=11600c615288281077d96e941c2c99f270adf0a91a037b3fc7daa89e65a172a3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
