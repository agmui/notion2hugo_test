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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MC245LJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEReIKlLyxC2%2FgXf8x9JaR%2BEFSehmVyDiN%2BhR%2F7kS%2FI3AiBPB6UpzUtHFVfCPpOsoXLDAeKLSCNn0KCFbta19eY4OSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVwc0yHKsP61TuRbKtwDXDdvmiWCV1IFXZIU7FbYzpSJykH6%2FyYyTJHxnBx43PU1O3Q%2BB4%2FD6ldhTscHKSdLPlR8%2FZjnjOsgznqOztqQT9Ce6NEAQr%2B7%2Ft3AsaHmSJUhtdVYDXfsKv%2FlS%2F%2B3cxqHdqBXfimYqgkXIrkecL0d9GQKzwnLJxxTNhelLpGcjHRnzBLKx7GvzFy1dZ5LEJwtX7DK2PfgVqHQyKRFe50Mr3GRu5eojsdBlhIsKS533lhXURKvy41Xc9ZcqI%2FRbUeYH3pGJ3YzSNVWvmQ4Md0cjr0YLTZwSlZFEAkqdypc8csG%2BNIyu8C346kniJGD%2F7DMP898Jlciw2f4hqr1L4rDmAXKouzABCk33WVbKd%2B%2Bg0QhD%2FjiDfKmO%2BCWJawErtO987jyHF6KXdjq9Apbfo%2Fz1tvRAeHD1sufe3RvT7T5IYI2PPF6S9yQBzM0IeQ2U72O24pyf2VuHxzLLj%2F6uDg%2BW0jAyPTFnLUMlNQS4uX80j1pPbiTopLufQwxNbt3SFq%2BLY3VNI4ZQSXDg6e1tjWH0x1ecbkumpUvhMOWXgr8d%2FYXjbeq80hNMPIHj%2F7ihLvKQ6HpoMjqGLPxmROlhky9F90UnuqZsgcJFzelpLDKC2IBG%2FjeLR3QAcxOKlYw9dHwvAY6pgFhH6iSTCptzKn1k5jkn9rkyvwqK%2FZ%2Byn98TpEHKmqlh%2Fxcsp%2F9QvnKNdJRpOVEBb%2FuxyEk3xhB94gpbMHCmbm6fz9PQNKHT793OKPu9VODbtQTmyLPMUdYnrcTHF4%2FyBAA%2FdD1pPn3WiZG66LnxohlbLFgSF8yzb88wJYC269fBZXb9llDN2zEjgoPb9eNX9caLnerxE1XxHMkT8%2F9BROpmcBSIx1h&X-Amz-Signature=28343d92b9e00874c29ba1cebb534b9088f0ffb5af8af638136ec79d27719d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MC245LJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEReIKlLyxC2%2FgXf8x9JaR%2BEFSehmVyDiN%2BhR%2F7kS%2FI3AiBPB6UpzUtHFVfCPpOsoXLDAeKLSCNn0KCFbta19eY4OSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVwc0yHKsP61TuRbKtwDXDdvmiWCV1IFXZIU7FbYzpSJykH6%2FyYyTJHxnBx43PU1O3Q%2BB4%2FD6ldhTscHKSdLPlR8%2FZjnjOsgznqOztqQT9Ce6NEAQr%2B7%2Ft3AsaHmSJUhtdVYDXfsKv%2FlS%2F%2B3cxqHdqBXfimYqgkXIrkecL0d9GQKzwnLJxxTNhelLpGcjHRnzBLKx7GvzFy1dZ5LEJwtX7DK2PfgVqHQyKRFe50Mr3GRu5eojsdBlhIsKS533lhXURKvy41Xc9ZcqI%2FRbUeYH3pGJ3YzSNVWvmQ4Md0cjr0YLTZwSlZFEAkqdypc8csG%2BNIyu8C346kniJGD%2F7DMP898Jlciw2f4hqr1L4rDmAXKouzABCk33WVbKd%2B%2Bg0QhD%2FjiDfKmO%2BCWJawErtO987jyHF6KXdjq9Apbfo%2Fz1tvRAeHD1sufe3RvT7T5IYI2PPF6S9yQBzM0IeQ2U72O24pyf2VuHxzLLj%2F6uDg%2BW0jAyPTFnLUMlNQS4uX80j1pPbiTopLufQwxNbt3SFq%2BLY3VNI4ZQSXDg6e1tjWH0x1ecbkumpUvhMOWXgr8d%2FYXjbeq80hNMPIHj%2F7ihLvKQ6HpoMjqGLPxmROlhky9F90UnuqZsgcJFzelpLDKC2IBG%2FjeLR3QAcxOKlYw9dHwvAY6pgFhH6iSTCptzKn1k5jkn9rkyvwqK%2FZ%2Byn98TpEHKmqlh%2Fxcsp%2F9QvnKNdJRpOVEBb%2FuxyEk3xhB94gpbMHCmbm6fz9PQNKHT793OKPu9VODbtQTmyLPMUdYnrcTHF4%2FyBAA%2FdD1pPn3WiZG66LnxohlbLFgSF8yzb88wJYC269fBZXb9llDN2zEjgoPb9eNX9caLnerxE1XxHMkT8%2F9BROpmcBSIx1h&X-Amz-Signature=d43191cc20a179fccb0ff2f1a3a9c48dcf597cb5c050d9b733cdc7959de5471c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MC245LJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEReIKlLyxC2%2FgXf8x9JaR%2BEFSehmVyDiN%2BhR%2F7kS%2FI3AiBPB6UpzUtHFVfCPpOsoXLDAeKLSCNn0KCFbta19eY4OSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVwc0yHKsP61TuRbKtwDXDdvmiWCV1IFXZIU7FbYzpSJykH6%2FyYyTJHxnBx43PU1O3Q%2BB4%2FD6ldhTscHKSdLPlR8%2FZjnjOsgznqOztqQT9Ce6NEAQr%2B7%2Ft3AsaHmSJUhtdVYDXfsKv%2FlS%2F%2B3cxqHdqBXfimYqgkXIrkecL0d9GQKzwnLJxxTNhelLpGcjHRnzBLKx7GvzFy1dZ5LEJwtX7DK2PfgVqHQyKRFe50Mr3GRu5eojsdBlhIsKS533lhXURKvy41Xc9ZcqI%2FRbUeYH3pGJ3YzSNVWvmQ4Md0cjr0YLTZwSlZFEAkqdypc8csG%2BNIyu8C346kniJGD%2F7DMP898Jlciw2f4hqr1L4rDmAXKouzABCk33WVbKd%2B%2Bg0QhD%2FjiDfKmO%2BCWJawErtO987jyHF6KXdjq9Apbfo%2Fz1tvRAeHD1sufe3RvT7T5IYI2PPF6S9yQBzM0IeQ2U72O24pyf2VuHxzLLj%2F6uDg%2BW0jAyPTFnLUMlNQS4uX80j1pPbiTopLufQwxNbt3SFq%2BLY3VNI4ZQSXDg6e1tjWH0x1ecbkumpUvhMOWXgr8d%2FYXjbeq80hNMPIHj%2F7ihLvKQ6HpoMjqGLPxmROlhky9F90UnuqZsgcJFzelpLDKC2IBG%2FjeLR3QAcxOKlYw9dHwvAY6pgFhH6iSTCptzKn1k5jkn9rkyvwqK%2FZ%2Byn98TpEHKmqlh%2Fxcsp%2F9QvnKNdJRpOVEBb%2FuxyEk3xhB94gpbMHCmbm6fz9PQNKHT793OKPu9VODbtQTmyLPMUdYnrcTHF4%2FyBAA%2FdD1pPn3WiZG66LnxohlbLFgSF8yzb88wJYC269fBZXb9llDN2zEjgoPb9eNX9caLnerxE1XxHMkT8%2F9BROpmcBSIx1h&X-Amz-Signature=36c9f3a712cc5ba14deae5e29f053120d67454328574673a0edfcc70ebb10db2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MC245LJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEReIKlLyxC2%2FgXf8x9JaR%2BEFSehmVyDiN%2BhR%2F7kS%2FI3AiBPB6UpzUtHFVfCPpOsoXLDAeKLSCNn0KCFbta19eY4OSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVwc0yHKsP61TuRbKtwDXDdvmiWCV1IFXZIU7FbYzpSJykH6%2FyYyTJHxnBx43PU1O3Q%2BB4%2FD6ldhTscHKSdLPlR8%2FZjnjOsgznqOztqQT9Ce6NEAQr%2B7%2Ft3AsaHmSJUhtdVYDXfsKv%2FlS%2F%2B3cxqHdqBXfimYqgkXIrkecL0d9GQKzwnLJxxTNhelLpGcjHRnzBLKx7GvzFy1dZ5LEJwtX7DK2PfgVqHQyKRFe50Mr3GRu5eojsdBlhIsKS533lhXURKvy41Xc9ZcqI%2FRbUeYH3pGJ3YzSNVWvmQ4Md0cjr0YLTZwSlZFEAkqdypc8csG%2BNIyu8C346kniJGD%2F7DMP898Jlciw2f4hqr1L4rDmAXKouzABCk33WVbKd%2B%2Bg0QhD%2FjiDfKmO%2BCWJawErtO987jyHF6KXdjq9Apbfo%2Fz1tvRAeHD1sufe3RvT7T5IYI2PPF6S9yQBzM0IeQ2U72O24pyf2VuHxzLLj%2F6uDg%2BW0jAyPTFnLUMlNQS4uX80j1pPbiTopLufQwxNbt3SFq%2BLY3VNI4ZQSXDg6e1tjWH0x1ecbkumpUvhMOWXgr8d%2FYXjbeq80hNMPIHj%2F7ihLvKQ6HpoMjqGLPxmROlhky9F90UnuqZsgcJFzelpLDKC2IBG%2FjeLR3QAcxOKlYw9dHwvAY6pgFhH6iSTCptzKn1k5jkn9rkyvwqK%2FZ%2Byn98TpEHKmqlh%2Fxcsp%2F9QvnKNdJRpOVEBb%2FuxyEk3xhB94gpbMHCmbm6fz9PQNKHT793OKPu9VODbtQTmyLPMUdYnrcTHF4%2FyBAA%2FdD1pPn3WiZG66LnxohlbLFgSF8yzb88wJYC269fBZXb9llDN2zEjgoPb9eNX9caLnerxE1XxHMkT8%2F9BROpmcBSIx1h&X-Amz-Signature=ed4a44376c30da44b0d7ebb390d023b4a7d12a88bf82276e69ec0fa4f5e29f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MC245LJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEReIKlLyxC2%2FgXf8x9JaR%2BEFSehmVyDiN%2BhR%2F7kS%2FI3AiBPB6UpzUtHFVfCPpOsoXLDAeKLSCNn0KCFbta19eY4OSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVwc0yHKsP61TuRbKtwDXDdvmiWCV1IFXZIU7FbYzpSJykH6%2FyYyTJHxnBx43PU1O3Q%2BB4%2FD6ldhTscHKSdLPlR8%2FZjnjOsgznqOztqQT9Ce6NEAQr%2B7%2Ft3AsaHmSJUhtdVYDXfsKv%2FlS%2F%2B3cxqHdqBXfimYqgkXIrkecL0d9GQKzwnLJxxTNhelLpGcjHRnzBLKx7GvzFy1dZ5LEJwtX7DK2PfgVqHQyKRFe50Mr3GRu5eojsdBlhIsKS533lhXURKvy41Xc9ZcqI%2FRbUeYH3pGJ3YzSNVWvmQ4Md0cjr0YLTZwSlZFEAkqdypc8csG%2BNIyu8C346kniJGD%2F7DMP898Jlciw2f4hqr1L4rDmAXKouzABCk33WVbKd%2B%2Bg0QhD%2FjiDfKmO%2BCWJawErtO987jyHF6KXdjq9Apbfo%2Fz1tvRAeHD1sufe3RvT7T5IYI2PPF6S9yQBzM0IeQ2U72O24pyf2VuHxzLLj%2F6uDg%2BW0jAyPTFnLUMlNQS4uX80j1pPbiTopLufQwxNbt3SFq%2BLY3VNI4ZQSXDg6e1tjWH0x1ecbkumpUvhMOWXgr8d%2FYXjbeq80hNMPIHj%2F7ihLvKQ6HpoMjqGLPxmROlhky9F90UnuqZsgcJFzelpLDKC2IBG%2FjeLR3QAcxOKlYw9dHwvAY6pgFhH6iSTCptzKn1k5jkn9rkyvwqK%2FZ%2Byn98TpEHKmqlh%2Fxcsp%2F9QvnKNdJRpOVEBb%2FuxyEk3xhB94gpbMHCmbm6fz9PQNKHT793OKPu9VODbtQTmyLPMUdYnrcTHF4%2FyBAA%2FdD1pPn3WiZG66LnxohlbLFgSF8yzb88wJYC269fBZXb9llDN2zEjgoPb9eNX9caLnerxE1XxHMkT8%2F9BROpmcBSIx1h&X-Amz-Signature=3120019b08643f8f526617d470630f1914cce4e680c809d34b1f5f309848d77e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MC245LJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEReIKlLyxC2%2FgXf8x9JaR%2BEFSehmVyDiN%2BhR%2F7kS%2FI3AiBPB6UpzUtHFVfCPpOsoXLDAeKLSCNn0KCFbta19eY4OSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVwc0yHKsP61TuRbKtwDXDdvmiWCV1IFXZIU7FbYzpSJykH6%2FyYyTJHxnBx43PU1O3Q%2BB4%2FD6ldhTscHKSdLPlR8%2FZjnjOsgznqOztqQT9Ce6NEAQr%2B7%2Ft3AsaHmSJUhtdVYDXfsKv%2FlS%2F%2B3cxqHdqBXfimYqgkXIrkecL0d9GQKzwnLJxxTNhelLpGcjHRnzBLKx7GvzFy1dZ5LEJwtX7DK2PfgVqHQyKRFe50Mr3GRu5eojsdBlhIsKS533lhXURKvy41Xc9ZcqI%2FRbUeYH3pGJ3YzSNVWvmQ4Md0cjr0YLTZwSlZFEAkqdypc8csG%2BNIyu8C346kniJGD%2F7DMP898Jlciw2f4hqr1L4rDmAXKouzABCk33WVbKd%2B%2Bg0QhD%2FjiDfKmO%2BCWJawErtO987jyHF6KXdjq9Apbfo%2Fz1tvRAeHD1sufe3RvT7T5IYI2PPF6S9yQBzM0IeQ2U72O24pyf2VuHxzLLj%2F6uDg%2BW0jAyPTFnLUMlNQS4uX80j1pPbiTopLufQwxNbt3SFq%2BLY3VNI4ZQSXDg6e1tjWH0x1ecbkumpUvhMOWXgr8d%2FYXjbeq80hNMPIHj%2F7ihLvKQ6HpoMjqGLPxmROlhky9F90UnuqZsgcJFzelpLDKC2IBG%2FjeLR3QAcxOKlYw9dHwvAY6pgFhH6iSTCptzKn1k5jkn9rkyvwqK%2FZ%2Byn98TpEHKmqlh%2Fxcsp%2F9QvnKNdJRpOVEBb%2FuxyEk3xhB94gpbMHCmbm6fz9PQNKHT793OKPu9VODbtQTmyLPMUdYnrcTHF4%2FyBAA%2FdD1pPn3WiZG66LnxohlbLFgSF8yzb88wJYC269fBZXb9llDN2zEjgoPb9eNX9caLnerxE1XxHMkT8%2F9BROpmcBSIx1h&X-Amz-Signature=05ad93885f07c706a83301ac4f41a8c6874b727986791f9d72af50f2bf2da06a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MC245LJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEReIKlLyxC2%2FgXf8x9JaR%2BEFSehmVyDiN%2BhR%2F7kS%2FI3AiBPB6UpzUtHFVfCPpOsoXLDAeKLSCNn0KCFbta19eY4OSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVwc0yHKsP61TuRbKtwDXDdvmiWCV1IFXZIU7FbYzpSJykH6%2FyYyTJHxnBx43PU1O3Q%2BB4%2FD6ldhTscHKSdLPlR8%2FZjnjOsgznqOztqQT9Ce6NEAQr%2B7%2Ft3AsaHmSJUhtdVYDXfsKv%2FlS%2F%2B3cxqHdqBXfimYqgkXIrkecL0d9GQKzwnLJxxTNhelLpGcjHRnzBLKx7GvzFy1dZ5LEJwtX7DK2PfgVqHQyKRFe50Mr3GRu5eojsdBlhIsKS533lhXURKvy41Xc9ZcqI%2FRbUeYH3pGJ3YzSNVWvmQ4Md0cjr0YLTZwSlZFEAkqdypc8csG%2BNIyu8C346kniJGD%2F7DMP898Jlciw2f4hqr1L4rDmAXKouzABCk33WVbKd%2B%2Bg0QhD%2FjiDfKmO%2BCWJawErtO987jyHF6KXdjq9Apbfo%2Fz1tvRAeHD1sufe3RvT7T5IYI2PPF6S9yQBzM0IeQ2U72O24pyf2VuHxzLLj%2F6uDg%2BW0jAyPTFnLUMlNQS4uX80j1pPbiTopLufQwxNbt3SFq%2BLY3VNI4ZQSXDg6e1tjWH0x1ecbkumpUvhMOWXgr8d%2FYXjbeq80hNMPIHj%2F7ihLvKQ6HpoMjqGLPxmROlhky9F90UnuqZsgcJFzelpLDKC2IBG%2FjeLR3QAcxOKlYw9dHwvAY6pgFhH6iSTCptzKn1k5jkn9rkyvwqK%2FZ%2Byn98TpEHKmqlh%2Fxcsp%2F9QvnKNdJRpOVEBb%2FuxyEk3xhB94gpbMHCmbm6fz9PQNKHT793OKPu9VODbtQTmyLPMUdYnrcTHF4%2FyBAA%2FdD1pPn3WiZG66LnxohlbLFgSF8yzb88wJYC269fBZXb9llDN2zEjgoPb9eNX9caLnerxE1XxHMkT8%2F9BROpmcBSIx1h&X-Amz-Signature=529f510a67b30995c05368a75010c43c7a239e7c2e846cce6e8abe4f9762cfea&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
