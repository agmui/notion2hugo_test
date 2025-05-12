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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XILK4JR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC0PK7maGa7dqXaTzEzjjy2OUzp2im3jScX8QLvXxtKBQIhAIdu60RSAKqI%2Br4myJJ%2B3kOhby9h%2BCzDpHndx%2BZLqJG5KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJYT82oMYDrIlFTZEq3APQHOwSkKD%2BZ3Lmxix2i%2BJE24%2BQk450%2FqJvqdPR1yd1uJdkBOHRFivimHc68d54l7Yf3LhKItTXcAUOxzRaTeSpqHv97fX4W66Hco7ZceR0CiOOQYdYE4qNLwbgUH0PtXAtmrr9GQb2Lo0AuWpn%2B9JvSZlNZCsS%2FYa6Qo7lSE%2F%2B0zBj9j9cwg%2BSxiZQ7cydYZOyNyXpIsBBLktT5UZG03l7LICv7rzixjvHpkBGAJv0tIV9X7BuoYrNCK4177KNWHwRAHPyt9XVYeSxIGgjIpRXCI%2Fts8n1Xxi2st4EDLdFsOu2iqoB1vxpkNelU0gUgr5vARW3PMghm2ti87DbzWkNIL3SNDfVijRO3SuZDji4IUibi0tuIDsLhNYpZL9B8sOmZmVpT8EtAsQSid7P8b1QQW%2FT7gjJXq9QDJAFuGVdfE0jbVwZRRCHkXYJJZQ6M7mSdyLrFlUiePTKdvGfYaFGVuLlM8hvUHkO36n%2BndGeVVwRnHMtXPB1yfw8WvaHPEq2lmzZuTmua%2FuYEV2fuy%2FeGvX0%2B9DtiTXDMfFCgF4B9uuGRhK8vI3R8rKOOpY6acU6ujIB%2BPdjRt0qMPb7QdTv5KJPytnWq5LJ1CxS0QwlbLHUeUXscvxD2o9jkjDPgofBBjqkAUzkydp1RPNgplaUsTMBQCQgFRpY%2FM%2F4t3nSyDUrWYe6o%2FTLVVm1Zq1hkwp3Wnjg2V7RRV3axuvDXrAA5b35g%2FqIO98o3ruXmdwmY6asjZ83ccU1g6QCB7bz1bIcEPXJhxRtRWkm7LbP%2FU0kw1dyQ0uMeuw69KnV9eMjDrK2eX1bmKERJEPppTmRXzFy0DexCmz8PMow3ku6iJBi55ZRQ5AF7nW7&X-Amz-Signature=33ece7aa5b27b9bbfcddc66abf1cd1c0704037d6b80e10a2efa6ef1ba0cbf412&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XILK4JR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC0PK7maGa7dqXaTzEzjjy2OUzp2im3jScX8QLvXxtKBQIhAIdu60RSAKqI%2Br4myJJ%2B3kOhby9h%2BCzDpHndx%2BZLqJG5KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJYT82oMYDrIlFTZEq3APQHOwSkKD%2BZ3Lmxix2i%2BJE24%2BQk450%2FqJvqdPR1yd1uJdkBOHRFivimHc68d54l7Yf3LhKItTXcAUOxzRaTeSpqHv97fX4W66Hco7ZceR0CiOOQYdYE4qNLwbgUH0PtXAtmrr9GQb2Lo0AuWpn%2B9JvSZlNZCsS%2FYa6Qo7lSE%2F%2B0zBj9j9cwg%2BSxiZQ7cydYZOyNyXpIsBBLktT5UZG03l7LICv7rzixjvHpkBGAJv0tIV9X7BuoYrNCK4177KNWHwRAHPyt9XVYeSxIGgjIpRXCI%2Fts8n1Xxi2st4EDLdFsOu2iqoB1vxpkNelU0gUgr5vARW3PMghm2ti87DbzWkNIL3SNDfVijRO3SuZDji4IUibi0tuIDsLhNYpZL9B8sOmZmVpT8EtAsQSid7P8b1QQW%2FT7gjJXq9QDJAFuGVdfE0jbVwZRRCHkXYJJZQ6M7mSdyLrFlUiePTKdvGfYaFGVuLlM8hvUHkO36n%2BndGeVVwRnHMtXPB1yfw8WvaHPEq2lmzZuTmua%2FuYEV2fuy%2FeGvX0%2B9DtiTXDMfFCgF4B9uuGRhK8vI3R8rKOOpY6acU6ujIB%2BPdjRt0qMPb7QdTv5KJPytnWq5LJ1CxS0QwlbLHUeUXscvxD2o9jkjDPgofBBjqkAUzkydp1RPNgplaUsTMBQCQgFRpY%2FM%2F4t3nSyDUrWYe6o%2FTLVVm1Zq1hkwp3Wnjg2V7RRV3axuvDXrAA5b35g%2FqIO98o3ruXmdwmY6asjZ83ccU1g6QCB7bz1bIcEPXJhxRtRWkm7LbP%2FU0kw1dyQ0uMeuw69KnV9eMjDrK2eX1bmKERJEPppTmRXzFy0DexCmz8PMow3ku6iJBi55ZRQ5AF7nW7&X-Amz-Signature=5bef5f678fad7ae43126e6d9380d511e226293d1711951e57575c84561f68924&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XILK4JR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC0PK7maGa7dqXaTzEzjjy2OUzp2im3jScX8QLvXxtKBQIhAIdu60RSAKqI%2Br4myJJ%2B3kOhby9h%2BCzDpHndx%2BZLqJG5KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJYT82oMYDrIlFTZEq3APQHOwSkKD%2BZ3Lmxix2i%2BJE24%2BQk450%2FqJvqdPR1yd1uJdkBOHRFivimHc68d54l7Yf3LhKItTXcAUOxzRaTeSpqHv97fX4W66Hco7ZceR0CiOOQYdYE4qNLwbgUH0PtXAtmrr9GQb2Lo0AuWpn%2B9JvSZlNZCsS%2FYa6Qo7lSE%2F%2B0zBj9j9cwg%2BSxiZQ7cydYZOyNyXpIsBBLktT5UZG03l7LICv7rzixjvHpkBGAJv0tIV9X7BuoYrNCK4177KNWHwRAHPyt9XVYeSxIGgjIpRXCI%2Fts8n1Xxi2st4EDLdFsOu2iqoB1vxpkNelU0gUgr5vARW3PMghm2ti87DbzWkNIL3SNDfVijRO3SuZDji4IUibi0tuIDsLhNYpZL9B8sOmZmVpT8EtAsQSid7P8b1QQW%2FT7gjJXq9QDJAFuGVdfE0jbVwZRRCHkXYJJZQ6M7mSdyLrFlUiePTKdvGfYaFGVuLlM8hvUHkO36n%2BndGeVVwRnHMtXPB1yfw8WvaHPEq2lmzZuTmua%2FuYEV2fuy%2FeGvX0%2B9DtiTXDMfFCgF4B9uuGRhK8vI3R8rKOOpY6acU6ujIB%2BPdjRt0qMPb7QdTv5KJPytnWq5LJ1CxS0QwlbLHUeUXscvxD2o9jkjDPgofBBjqkAUzkydp1RPNgplaUsTMBQCQgFRpY%2FM%2F4t3nSyDUrWYe6o%2FTLVVm1Zq1hkwp3Wnjg2V7RRV3axuvDXrAA5b35g%2FqIO98o3ruXmdwmY6asjZ83ccU1g6QCB7bz1bIcEPXJhxRtRWkm7LbP%2FU0kw1dyQ0uMeuw69KnV9eMjDrK2eX1bmKERJEPppTmRXzFy0DexCmz8PMow3ku6iJBi55ZRQ5AF7nW7&X-Amz-Signature=16f703f622feb3f8b94e639e83a7f7b36e1fe62267b4d84c40f0e838887a1a47&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XILK4JR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC0PK7maGa7dqXaTzEzjjy2OUzp2im3jScX8QLvXxtKBQIhAIdu60RSAKqI%2Br4myJJ%2B3kOhby9h%2BCzDpHndx%2BZLqJG5KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJYT82oMYDrIlFTZEq3APQHOwSkKD%2BZ3Lmxix2i%2BJE24%2BQk450%2FqJvqdPR1yd1uJdkBOHRFivimHc68d54l7Yf3LhKItTXcAUOxzRaTeSpqHv97fX4W66Hco7ZceR0CiOOQYdYE4qNLwbgUH0PtXAtmrr9GQb2Lo0AuWpn%2B9JvSZlNZCsS%2FYa6Qo7lSE%2F%2B0zBj9j9cwg%2BSxiZQ7cydYZOyNyXpIsBBLktT5UZG03l7LICv7rzixjvHpkBGAJv0tIV9X7BuoYrNCK4177KNWHwRAHPyt9XVYeSxIGgjIpRXCI%2Fts8n1Xxi2st4EDLdFsOu2iqoB1vxpkNelU0gUgr5vARW3PMghm2ti87DbzWkNIL3SNDfVijRO3SuZDji4IUibi0tuIDsLhNYpZL9B8sOmZmVpT8EtAsQSid7P8b1QQW%2FT7gjJXq9QDJAFuGVdfE0jbVwZRRCHkXYJJZQ6M7mSdyLrFlUiePTKdvGfYaFGVuLlM8hvUHkO36n%2BndGeVVwRnHMtXPB1yfw8WvaHPEq2lmzZuTmua%2FuYEV2fuy%2FeGvX0%2B9DtiTXDMfFCgF4B9uuGRhK8vI3R8rKOOpY6acU6ujIB%2BPdjRt0qMPb7QdTv5KJPytnWq5LJ1CxS0QwlbLHUeUXscvxD2o9jkjDPgofBBjqkAUzkydp1RPNgplaUsTMBQCQgFRpY%2FM%2F4t3nSyDUrWYe6o%2FTLVVm1Zq1hkwp3Wnjg2V7RRV3axuvDXrAA5b35g%2FqIO98o3ruXmdwmY6asjZ83ccU1g6QCB7bz1bIcEPXJhxRtRWkm7LbP%2FU0kw1dyQ0uMeuw69KnV9eMjDrK2eX1bmKERJEPppTmRXzFy0DexCmz8PMow3ku6iJBi55ZRQ5AF7nW7&X-Amz-Signature=4b977b7287139c1a147f61b7b3ecf9083ca16537e5455b242f860bb917693be7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XILK4JR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC0PK7maGa7dqXaTzEzjjy2OUzp2im3jScX8QLvXxtKBQIhAIdu60RSAKqI%2Br4myJJ%2B3kOhby9h%2BCzDpHndx%2BZLqJG5KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJYT82oMYDrIlFTZEq3APQHOwSkKD%2BZ3Lmxix2i%2BJE24%2BQk450%2FqJvqdPR1yd1uJdkBOHRFivimHc68d54l7Yf3LhKItTXcAUOxzRaTeSpqHv97fX4W66Hco7ZceR0CiOOQYdYE4qNLwbgUH0PtXAtmrr9GQb2Lo0AuWpn%2B9JvSZlNZCsS%2FYa6Qo7lSE%2F%2B0zBj9j9cwg%2BSxiZQ7cydYZOyNyXpIsBBLktT5UZG03l7LICv7rzixjvHpkBGAJv0tIV9X7BuoYrNCK4177KNWHwRAHPyt9XVYeSxIGgjIpRXCI%2Fts8n1Xxi2st4EDLdFsOu2iqoB1vxpkNelU0gUgr5vARW3PMghm2ti87DbzWkNIL3SNDfVijRO3SuZDji4IUibi0tuIDsLhNYpZL9B8sOmZmVpT8EtAsQSid7P8b1QQW%2FT7gjJXq9QDJAFuGVdfE0jbVwZRRCHkXYJJZQ6M7mSdyLrFlUiePTKdvGfYaFGVuLlM8hvUHkO36n%2BndGeVVwRnHMtXPB1yfw8WvaHPEq2lmzZuTmua%2FuYEV2fuy%2FeGvX0%2B9DtiTXDMfFCgF4B9uuGRhK8vI3R8rKOOpY6acU6ujIB%2BPdjRt0qMPb7QdTv5KJPytnWq5LJ1CxS0QwlbLHUeUXscvxD2o9jkjDPgofBBjqkAUzkydp1RPNgplaUsTMBQCQgFRpY%2FM%2F4t3nSyDUrWYe6o%2FTLVVm1Zq1hkwp3Wnjg2V7RRV3axuvDXrAA5b35g%2FqIO98o3ruXmdwmY6asjZ83ccU1g6QCB7bz1bIcEPXJhxRtRWkm7LbP%2FU0kw1dyQ0uMeuw69KnV9eMjDrK2eX1bmKERJEPppTmRXzFy0DexCmz8PMow3ku6iJBi55ZRQ5AF7nW7&X-Amz-Signature=fc7094545d58de77d410b0dd9c4b0491ac579e7c496883467fe1b84ee8a4574e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XILK4JR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC0PK7maGa7dqXaTzEzjjy2OUzp2im3jScX8QLvXxtKBQIhAIdu60RSAKqI%2Br4myJJ%2B3kOhby9h%2BCzDpHndx%2BZLqJG5KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJYT82oMYDrIlFTZEq3APQHOwSkKD%2BZ3Lmxix2i%2BJE24%2BQk450%2FqJvqdPR1yd1uJdkBOHRFivimHc68d54l7Yf3LhKItTXcAUOxzRaTeSpqHv97fX4W66Hco7ZceR0CiOOQYdYE4qNLwbgUH0PtXAtmrr9GQb2Lo0AuWpn%2B9JvSZlNZCsS%2FYa6Qo7lSE%2F%2B0zBj9j9cwg%2BSxiZQ7cydYZOyNyXpIsBBLktT5UZG03l7LICv7rzixjvHpkBGAJv0tIV9X7BuoYrNCK4177KNWHwRAHPyt9XVYeSxIGgjIpRXCI%2Fts8n1Xxi2st4EDLdFsOu2iqoB1vxpkNelU0gUgr5vARW3PMghm2ti87DbzWkNIL3SNDfVijRO3SuZDji4IUibi0tuIDsLhNYpZL9B8sOmZmVpT8EtAsQSid7P8b1QQW%2FT7gjJXq9QDJAFuGVdfE0jbVwZRRCHkXYJJZQ6M7mSdyLrFlUiePTKdvGfYaFGVuLlM8hvUHkO36n%2BndGeVVwRnHMtXPB1yfw8WvaHPEq2lmzZuTmua%2FuYEV2fuy%2FeGvX0%2B9DtiTXDMfFCgF4B9uuGRhK8vI3R8rKOOpY6acU6ujIB%2BPdjRt0qMPb7QdTv5KJPytnWq5LJ1CxS0QwlbLHUeUXscvxD2o9jkjDPgofBBjqkAUzkydp1RPNgplaUsTMBQCQgFRpY%2FM%2F4t3nSyDUrWYe6o%2FTLVVm1Zq1hkwp3Wnjg2V7RRV3axuvDXrAA5b35g%2FqIO98o3ruXmdwmY6asjZ83ccU1g6QCB7bz1bIcEPXJhxRtRWkm7LbP%2FU0kw1dyQ0uMeuw69KnV9eMjDrK2eX1bmKERJEPppTmRXzFy0DexCmz8PMow3ku6iJBi55ZRQ5AF7nW7&X-Amz-Signature=3c3cb274fe1689e1fd625136a728a91f4544dcda8ca2ae05e00bfac1ede3aa52&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XILK4JR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC0PK7maGa7dqXaTzEzjjy2OUzp2im3jScX8QLvXxtKBQIhAIdu60RSAKqI%2Br4myJJ%2B3kOhby9h%2BCzDpHndx%2BZLqJG5KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJYT82oMYDrIlFTZEq3APQHOwSkKD%2BZ3Lmxix2i%2BJE24%2BQk450%2FqJvqdPR1yd1uJdkBOHRFivimHc68d54l7Yf3LhKItTXcAUOxzRaTeSpqHv97fX4W66Hco7ZceR0CiOOQYdYE4qNLwbgUH0PtXAtmrr9GQb2Lo0AuWpn%2B9JvSZlNZCsS%2FYa6Qo7lSE%2F%2B0zBj9j9cwg%2BSxiZQ7cydYZOyNyXpIsBBLktT5UZG03l7LICv7rzixjvHpkBGAJv0tIV9X7BuoYrNCK4177KNWHwRAHPyt9XVYeSxIGgjIpRXCI%2Fts8n1Xxi2st4EDLdFsOu2iqoB1vxpkNelU0gUgr5vARW3PMghm2ti87DbzWkNIL3SNDfVijRO3SuZDji4IUibi0tuIDsLhNYpZL9B8sOmZmVpT8EtAsQSid7P8b1QQW%2FT7gjJXq9QDJAFuGVdfE0jbVwZRRCHkXYJJZQ6M7mSdyLrFlUiePTKdvGfYaFGVuLlM8hvUHkO36n%2BndGeVVwRnHMtXPB1yfw8WvaHPEq2lmzZuTmua%2FuYEV2fuy%2FeGvX0%2B9DtiTXDMfFCgF4B9uuGRhK8vI3R8rKOOpY6acU6ujIB%2BPdjRt0qMPb7QdTv5KJPytnWq5LJ1CxS0QwlbLHUeUXscvxD2o9jkjDPgofBBjqkAUzkydp1RPNgplaUsTMBQCQgFRpY%2FM%2F4t3nSyDUrWYe6o%2FTLVVm1Zq1hkwp3Wnjg2V7RRV3axuvDXrAA5b35g%2FqIO98o3ruXmdwmY6asjZ83ccU1g6QCB7bz1bIcEPXJhxRtRWkm7LbP%2FU0kw1dyQ0uMeuw69KnV9eMjDrK2eX1bmKERJEPppTmRXzFy0DexCmz8PMow3ku6iJBi55ZRQ5AF7nW7&X-Amz-Signature=64f791590b4fc55be50eaa90c0459eebc189f588834af424ba22310578b05165&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
