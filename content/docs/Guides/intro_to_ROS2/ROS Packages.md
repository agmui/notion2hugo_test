---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG3YN5KI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcIr7OEjKT1HJglCLnTTDBzwTsvPmwd6sGgAzaOOZHxAiA5pYBpm13yEXOMu61VxHqr%2BWDI6x8gzkF%2FEhgcnjP5YCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM5xXzFWQxngDp%2FA9OKtwDN8F5836w%2BVJr1RY5XP27gXrbDyW6tzb7I1Zj1mNIFEL0Q%2B2XyuB0qkbhmHP7QoKi1olDExe4MkWqsF0YvGYB93eAStGuG1ZBXKD7rw0KhyU7xQ9oCRnlg%2FGlZV%2FEZVYdDz%2FJJ6aJsGNJfqKzYzDsDTO1g1L7kluyCFg5IaQKpqZ1SKcfH4%2BEOBFgQukz2pcfmbHVxoRqdS3YmrnKmk9UnFpbQTfcIru5YllTTd8tb6tGe1PYupGWSPnvZzb7tmYDlPWYjSPrP5pqojAWkjzL%2FtMW85hjRQ6N5E6auBoHO7WgWeC0PEMwwSneQrGZT3%2Bt71BHUT1D7kKbF7HjpPBl%2B8J5LeNy%2B4x62ebPPzbYkuUc4ZhrsxThDE5cNbY6cFmgsV51VsGEppNSO3K1LLiGfTv9Hf4Alx4IY13ehHZlw2YSuOQNo2MZRwEXoN%2BTgHybJkW0%2BPLW%2FEiSFqjxdmU5RQ1vQ2acCtfG9uToIz%2B9WtejH2SRrWBZL9NGMmZ%2FhInHdTb0fxolW%2Bq%2BWwRDlxRtpFimHMkk9E9hnqN1LBU18QbLvsbhM%2BpDp0yGb0sJJX3PQC3NMKNRZhfleKM84ImuuUCe5PJo1q5Ct9EPr7BoG%2FsMkigrZTPdy9ZEtxIwhJbPwwY6pgHxx9PVcNY3D7Yo0BNQedJO9HhIc34kLGkYmxiqYVK2MnHiHpg10QWqje9Jdv3x%2BeyJ6ESCmAMhpL74vHirRGQfMYL3G%2FkSxARRj00Vuy5k79QN%2FNfMutoNSZXoh2TSSIe05tC6XT1PCcuBWJCWIiVqmLb75M4JXgBpPmuUm63W7o1XOsRFZ%2FZMghMNPFHTOMn63SC5BJ7fH9zclB9eSR53boNqgDqL&X-Amz-Signature=f66ea5129dea0da70749a199c44b0255c7eeaa157c8f50c20e241a10d6d8df33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG3YN5KI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcIr7OEjKT1HJglCLnTTDBzwTsvPmwd6sGgAzaOOZHxAiA5pYBpm13yEXOMu61VxHqr%2BWDI6x8gzkF%2FEhgcnjP5YCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM5xXzFWQxngDp%2FA9OKtwDN8F5836w%2BVJr1RY5XP27gXrbDyW6tzb7I1Zj1mNIFEL0Q%2B2XyuB0qkbhmHP7QoKi1olDExe4MkWqsF0YvGYB93eAStGuG1ZBXKD7rw0KhyU7xQ9oCRnlg%2FGlZV%2FEZVYdDz%2FJJ6aJsGNJfqKzYzDsDTO1g1L7kluyCFg5IaQKpqZ1SKcfH4%2BEOBFgQukz2pcfmbHVxoRqdS3YmrnKmk9UnFpbQTfcIru5YllTTd8tb6tGe1PYupGWSPnvZzb7tmYDlPWYjSPrP5pqojAWkjzL%2FtMW85hjRQ6N5E6auBoHO7WgWeC0PEMwwSneQrGZT3%2Bt71BHUT1D7kKbF7HjpPBl%2B8J5LeNy%2B4x62ebPPzbYkuUc4ZhrsxThDE5cNbY6cFmgsV51VsGEppNSO3K1LLiGfTv9Hf4Alx4IY13ehHZlw2YSuOQNo2MZRwEXoN%2BTgHybJkW0%2BPLW%2FEiSFqjxdmU5RQ1vQ2acCtfG9uToIz%2B9WtejH2SRrWBZL9NGMmZ%2FhInHdTb0fxolW%2Bq%2BWwRDlxRtpFimHMkk9E9hnqN1LBU18QbLvsbhM%2BpDp0yGb0sJJX3PQC3NMKNRZhfleKM84ImuuUCe5PJo1q5Ct9EPr7BoG%2FsMkigrZTPdy9ZEtxIwhJbPwwY6pgHxx9PVcNY3D7Yo0BNQedJO9HhIc34kLGkYmxiqYVK2MnHiHpg10QWqje9Jdv3x%2BeyJ6ESCmAMhpL74vHirRGQfMYL3G%2FkSxARRj00Vuy5k79QN%2FNfMutoNSZXoh2TSSIe05tC6XT1PCcuBWJCWIiVqmLb75M4JXgBpPmuUm63W7o1XOsRFZ%2FZMghMNPFHTOMn63SC5BJ7fH9zclB9eSR53boNqgDqL&X-Amz-Signature=44c0e93d4e084dcd4601fe59fe591e4312b2685014d7b56489f71c9edca392a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG3YN5KI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcIr7OEjKT1HJglCLnTTDBzwTsvPmwd6sGgAzaOOZHxAiA5pYBpm13yEXOMu61VxHqr%2BWDI6x8gzkF%2FEhgcnjP5YCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM5xXzFWQxngDp%2FA9OKtwDN8F5836w%2BVJr1RY5XP27gXrbDyW6tzb7I1Zj1mNIFEL0Q%2B2XyuB0qkbhmHP7QoKi1olDExe4MkWqsF0YvGYB93eAStGuG1ZBXKD7rw0KhyU7xQ9oCRnlg%2FGlZV%2FEZVYdDz%2FJJ6aJsGNJfqKzYzDsDTO1g1L7kluyCFg5IaQKpqZ1SKcfH4%2BEOBFgQukz2pcfmbHVxoRqdS3YmrnKmk9UnFpbQTfcIru5YllTTd8tb6tGe1PYupGWSPnvZzb7tmYDlPWYjSPrP5pqojAWkjzL%2FtMW85hjRQ6N5E6auBoHO7WgWeC0PEMwwSneQrGZT3%2Bt71BHUT1D7kKbF7HjpPBl%2B8J5LeNy%2B4x62ebPPzbYkuUc4ZhrsxThDE5cNbY6cFmgsV51VsGEppNSO3K1LLiGfTv9Hf4Alx4IY13ehHZlw2YSuOQNo2MZRwEXoN%2BTgHybJkW0%2BPLW%2FEiSFqjxdmU5RQ1vQ2acCtfG9uToIz%2B9WtejH2SRrWBZL9NGMmZ%2FhInHdTb0fxolW%2Bq%2BWwRDlxRtpFimHMkk9E9hnqN1LBU18QbLvsbhM%2BpDp0yGb0sJJX3PQC3NMKNRZhfleKM84ImuuUCe5PJo1q5Ct9EPr7BoG%2FsMkigrZTPdy9ZEtxIwhJbPwwY6pgHxx9PVcNY3D7Yo0BNQedJO9HhIc34kLGkYmxiqYVK2MnHiHpg10QWqje9Jdv3x%2BeyJ6ESCmAMhpL74vHirRGQfMYL3G%2FkSxARRj00Vuy5k79QN%2FNfMutoNSZXoh2TSSIe05tC6XT1PCcuBWJCWIiVqmLb75M4JXgBpPmuUm63W7o1XOsRFZ%2FZMghMNPFHTOMn63SC5BJ7fH9zclB9eSR53boNqgDqL&X-Amz-Signature=0f691126b75bb40896076af042f826e06ccd360fe9678f653b45d3620c0dc89c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG3YN5KI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcIr7OEjKT1HJglCLnTTDBzwTsvPmwd6sGgAzaOOZHxAiA5pYBpm13yEXOMu61VxHqr%2BWDI6x8gzkF%2FEhgcnjP5YCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM5xXzFWQxngDp%2FA9OKtwDN8F5836w%2BVJr1RY5XP27gXrbDyW6tzb7I1Zj1mNIFEL0Q%2B2XyuB0qkbhmHP7QoKi1olDExe4MkWqsF0YvGYB93eAStGuG1ZBXKD7rw0KhyU7xQ9oCRnlg%2FGlZV%2FEZVYdDz%2FJJ6aJsGNJfqKzYzDsDTO1g1L7kluyCFg5IaQKpqZ1SKcfH4%2BEOBFgQukz2pcfmbHVxoRqdS3YmrnKmk9UnFpbQTfcIru5YllTTd8tb6tGe1PYupGWSPnvZzb7tmYDlPWYjSPrP5pqojAWkjzL%2FtMW85hjRQ6N5E6auBoHO7WgWeC0PEMwwSneQrGZT3%2Bt71BHUT1D7kKbF7HjpPBl%2B8J5LeNy%2B4x62ebPPzbYkuUc4ZhrsxThDE5cNbY6cFmgsV51VsGEppNSO3K1LLiGfTv9Hf4Alx4IY13ehHZlw2YSuOQNo2MZRwEXoN%2BTgHybJkW0%2BPLW%2FEiSFqjxdmU5RQ1vQ2acCtfG9uToIz%2B9WtejH2SRrWBZL9NGMmZ%2FhInHdTb0fxolW%2Bq%2BWwRDlxRtpFimHMkk9E9hnqN1LBU18QbLvsbhM%2BpDp0yGb0sJJX3PQC3NMKNRZhfleKM84ImuuUCe5PJo1q5Ct9EPr7BoG%2FsMkigrZTPdy9ZEtxIwhJbPwwY6pgHxx9PVcNY3D7Yo0BNQedJO9HhIc34kLGkYmxiqYVK2MnHiHpg10QWqje9Jdv3x%2BeyJ6ESCmAMhpL74vHirRGQfMYL3G%2FkSxARRj00Vuy5k79QN%2FNfMutoNSZXoh2TSSIe05tC6XT1PCcuBWJCWIiVqmLb75M4JXgBpPmuUm63W7o1XOsRFZ%2FZMghMNPFHTOMn63SC5BJ7fH9zclB9eSR53boNqgDqL&X-Amz-Signature=59f953a8cd45c2d8910b0cf7851a44802ee628ea47c00e24b3d8603ea9610e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG3YN5KI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcIr7OEjKT1HJglCLnTTDBzwTsvPmwd6sGgAzaOOZHxAiA5pYBpm13yEXOMu61VxHqr%2BWDI6x8gzkF%2FEhgcnjP5YCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM5xXzFWQxngDp%2FA9OKtwDN8F5836w%2BVJr1RY5XP27gXrbDyW6tzb7I1Zj1mNIFEL0Q%2B2XyuB0qkbhmHP7QoKi1olDExe4MkWqsF0YvGYB93eAStGuG1ZBXKD7rw0KhyU7xQ9oCRnlg%2FGlZV%2FEZVYdDz%2FJJ6aJsGNJfqKzYzDsDTO1g1L7kluyCFg5IaQKpqZ1SKcfH4%2BEOBFgQukz2pcfmbHVxoRqdS3YmrnKmk9UnFpbQTfcIru5YllTTd8tb6tGe1PYupGWSPnvZzb7tmYDlPWYjSPrP5pqojAWkjzL%2FtMW85hjRQ6N5E6auBoHO7WgWeC0PEMwwSneQrGZT3%2Bt71BHUT1D7kKbF7HjpPBl%2B8J5LeNy%2B4x62ebPPzbYkuUc4ZhrsxThDE5cNbY6cFmgsV51VsGEppNSO3K1LLiGfTv9Hf4Alx4IY13ehHZlw2YSuOQNo2MZRwEXoN%2BTgHybJkW0%2BPLW%2FEiSFqjxdmU5RQ1vQ2acCtfG9uToIz%2B9WtejH2SRrWBZL9NGMmZ%2FhInHdTb0fxolW%2Bq%2BWwRDlxRtpFimHMkk9E9hnqN1LBU18QbLvsbhM%2BpDp0yGb0sJJX3PQC3NMKNRZhfleKM84ImuuUCe5PJo1q5Ct9EPr7BoG%2FsMkigrZTPdy9ZEtxIwhJbPwwY6pgHxx9PVcNY3D7Yo0BNQedJO9HhIc34kLGkYmxiqYVK2MnHiHpg10QWqje9Jdv3x%2BeyJ6ESCmAMhpL74vHirRGQfMYL3G%2FkSxARRj00Vuy5k79QN%2FNfMutoNSZXoh2TSSIe05tC6XT1PCcuBWJCWIiVqmLb75M4JXgBpPmuUm63W7o1XOsRFZ%2FZMghMNPFHTOMn63SC5BJ7fH9zclB9eSR53boNqgDqL&X-Amz-Signature=6f2cc9bc4ee7893f6a3ee4d9ffa98ee610d1de83c09eca2696ecbec749e5a8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG3YN5KI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcIr7OEjKT1HJglCLnTTDBzwTsvPmwd6sGgAzaOOZHxAiA5pYBpm13yEXOMu61VxHqr%2BWDI6x8gzkF%2FEhgcnjP5YCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM5xXzFWQxngDp%2FA9OKtwDN8F5836w%2BVJr1RY5XP27gXrbDyW6tzb7I1Zj1mNIFEL0Q%2B2XyuB0qkbhmHP7QoKi1olDExe4MkWqsF0YvGYB93eAStGuG1ZBXKD7rw0KhyU7xQ9oCRnlg%2FGlZV%2FEZVYdDz%2FJJ6aJsGNJfqKzYzDsDTO1g1L7kluyCFg5IaQKpqZ1SKcfH4%2BEOBFgQukz2pcfmbHVxoRqdS3YmrnKmk9UnFpbQTfcIru5YllTTd8tb6tGe1PYupGWSPnvZzb7tmYDlPWYjSPrP5pqojAWkjzL%2FtMW85hjRQ6N5E6auBoHO7WgWeC0PEMwwSneQrGZT3%2Bt71BHUT1D7kKbF7HjpPBl%2B8J5LeNy%2B4x62ebPPzbYkuUc4ZhrsxThDE5cNbY6cFmgsV51VsGEppNSO3K1LLiGfTv9Hf4Alx4IY13ehHZlw2YSuOQNo2MZRwEXoN%2BTgHybJkW0%2BPLW%2FEiSFqjxdmU5RQ1vQ2acCtfG9uToIz%2B9WtejH2SRrWBZL9NGMmZ%2FhInHdTb0fxolW%2Bq%2BWwRDlxRtpFimHMkk9E9hnqN1LBU18QbLvsbhM%2BpDp0yGb0sJJX3PQC3NMKNRZhfleKM84ImuuUCe5PJo1q5Ct9EPr7BoG%2FsMkigrZTPdy9ZEtxIwhJbPwwY6pgHxx9PVcNY3D7Yo0BNQedJO9HhIc34kLGkYmxiqYVK2MnHiHpg10QWqje9Jdv3x%2BeyJ6ESCmAMhpL74vHirRGQfMYL3G%2FkSxARRj00Vuy5k79QN%2FNfMutoNSZXoh2TSSIe05tC6XT1PCcuBWJCWIiVqmLb75M4JXgBpPmuUm63W7o1XOsRFZ%2FZMghMNPFHTOMn63SC5BJ7fH9zclB9eSR53boNqgDqL&X-Amz-Signature=7a0ed88774cb17adedac6cd2a07b9d22ed201cfb1796c772829c6e58b3abe44a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG3YN5KI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcIr7OEjKT1HJglCLnTTDBzwTsvPmwd6sGgAzaOOZHxAiA5pYBpm13yEXOMu61VxHqr%2BWDI6x8gzkF%2FEhgcnjP5YCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM5xXzFWQxngDp%2FA9OKtwDN8F5836w%2BVJr1RY5XP27gXrbDyW6tzb7I1Zj1mNIFEL0Q%2B2XyuB0qkbhmHP7QoKi1olDExe4MkWqsF0YvGYB93eAStGuG1ZBXKD7rw0KhyU7xQ9oCRnlg%2FGlZV%2FEZVYdDz%2FJJ6aJsGNJfqKzYzDsDTO1g1L7kluyCFg5IaQKpqZ1SKcfH4%2BEOBFgQukz2pcfmbHVxoRqdS3YmrnKmk9UnFpbQTfcIru5YllTTd8tb6tGe1PYupGWSPnvZzb7tmYDlPWYjSPrP5pqojAWkjzL%2FtMW85hjRQ6N5E6auBoHO7WgWeC0PEMwwSneQrGZT3%2Bt71BHUT1D7kKbF7HjpPBl%2B8J5LeNy%2B4x62ebPPzbYkuUc4ZhrsxThDE5cNbY6cFmgsV51VsGEppNSO3K1LLiGfTv9Hf4Alx4IY13ehHZlw2YSuOQNo2MZRwEXoN%2BTgHybJkW0%2BPLW%2FEiSFqjxdmU5RQ1vQ2acCtfG9uToIz%2B9WtejH2SRrWBZL9NGMmZ%2FhInHdTb0fxolW%2Bq%2BWwRDlxRtpFimHMkk9E9hnqN1LBU18QbLvsbhM%2BpDp0yGb0sJJX3PQC3NMKNRZhfleKM84ImuuUCe5PJo1q5Ct9EPr7BoG%2FsMkigrZTPdy9ZEtxIwhJbPwwY6pgHxx9PVcNY3D7Yo0BNQedJO9HhIc34kLGkYmxiqYVK2MnHiHpg10QWqje9Jdv3x%2BeyJ6ESCmAMhpL74vHirRGQfMYL3G%2FkSxARRj00Vuy5k79QN%2FNfMutoNSZXoh2TSSIe05tC6XT1PCcuBWJCWIiVqmLb75M4JXgBpPmuUm63W7o1XOsRFZ%2FZMghMNPFHTOMn63SC5BJ7fH9zclB9eSR53boNqgDqL&X-Amz-Signature=8a786d56e7fd2127720fa326d37ddd253b99e4e7fccf89f40b2a7f23b74d3258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
