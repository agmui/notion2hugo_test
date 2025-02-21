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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH3H4KIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFjEa1QrRq%2B%2FcVj4rvyEvB1720EUPPF%2ByiFoG6dZ1EbAIhAJhaG91dPcMMNpi%2BLUACuqFyUjkLjoPp5gm2wju0jJTCKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU1OAaoisaNY5M%2FnYq3AMFl6rrS9M86QHTlxJpcSDfseWxA5OSeT9TPBHzUGT8bk7ZzAFbpkBLa4xF3rKzLLvLyOhnYfBbl4aI4aLjQgZY0uLP79IMlB90uAG3vhoqVrxKcNAGNxTafpPRpf875nisVbBkpFVOmK5rKSkxJrfLw4klREdPclx40FBqukRHVJEk%2BcLVkFFtLryANHJBc%2Bb48ACMHFewQp0KRQEfRS1TiRiTCQ2rVyJvGMrjrZvzVG%2Bgvq7wPvjWd12bBoaS7XO3qEZEBNzriaa7wRx7amDw%2FqySccF%2BQKq55BABhOF0iazpn0GzWmbofzE3M3QwlhNBNMTonnJimFoRHAd6WTXxLhXccX3qTrld1aBAzLAPUtmOjBxEJu2bSs%2Fyf8txtwTfWb%2Bz4AMEqtjYAhP3SGFr33ew4NO6PWF38nFbDeu2r8PL%2FmDqyGhAbcorO%2B0edXDygGb%2FxYs9QvkvI3Ec3g9%2FsFIwjmDLlkj%2FR9NjbydqJnKS1K8P6cw61A03ibUtJEA0s3oTrKTnFCNCuehMwAUrvXmSSvErf84JIMAxKMzGnmGO4OYLAxB136WwCT0WNqBnEa1fq8Eb6NDvICpFTse%2FpRrDFb7jPpZtxdLv4eJrfBFpgj9889R7D7ebbTDzhN%2B9BjqkAa4B3BR1q3gpLpPoym%2FW8k8aqMH%2BdgkYquHMYC7CwzOpiiTEtkLmKU60puUD%2BOY473IB43PBULHm7nRs2NmMrtZLS93JH6X8PkgLZWFsnaTkwDwScuPhwZ4%2BmmqD2xrwZ6stqXmDzTtDoKLSwupCKKIe1UbbjGrEIJRUhHvbQ%2BGZ3t619BEGkiGcukR8Y0IkAldFo6ows%2FIWvJrzlikd1NXoQhBG&X-Amz-Signature=2f188b413b0b3e0d8e1f9614c7b0a277ecd4e16aa1dc4c3b77e778f17204285d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH3H4KIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFjEa1QrRq%2B%2FcVj4rvyEvB1720EUPPF%2ByiFoG6dZ1EbAIhAJhaG91dPcMMNpi%2BLUACuqFyUjkLjoPp5gm2wju0jJTCKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU1OAaoisaNY5M%2FnYq3AMFl6rrS9M86QHTlxJpcSDfseWxA5OSeT9TPBHzUGT8bk7ZzAFbpkBLa4xF3rKzLLvLyOhnYfBbl4aI4aLjQgZY0uLP79IMlB90uAG3vhoqVrxKcNAGNxTafpPRpf875nisVbBkpFVOmK5rKSkxJrfLw4klREdPclx40FBqukRHVJEk%2BcLVkFFtLryANHJBc%2Bb48ACMHFewQp0KRQEfRS1TiRiTCQ2rVyJvGMrjrZvzVG%2Bgvq7wPvjWd12bBoaS7XO3qEZEBNzriaa7wRx7amDw%2FqySccF%2BQKq55BABhOF0iazpn0GzWmbofzE3M3QwlhNBNMTonnJimFoRHAd6WTXxLhXccX3qTrld1aBAzLAPUtmOjBxEJu2bSs%2Fyf8txtwTfWb%2Bz4AMEqtjYAhP3SGFr33ew4NO6PWF38nFbDeu2r8PL%2FmDqyGhAbcorO%2B0edXDygGb%2FxYs9QvkvI3Ec3g9%2FsFIwjmDLlkj%2FR9NjbydqJnKS1K8P6cw61A03ibUtJEA0s3oTrKTnFCNCuehMwAUrvXmSSvErf84JIMAxKMzGnmGO4OYLAxB136WwCT0WNqBnEa1fq8Eb6NDvICpFTse%2FpRrDFb7jPpZtxdLv4eJrfBFpgj9889R7D7ebbTDzhN%2B9BjqkAa4B3BR1q3gpLpPoym%2FW8k8aqMH%2BdgkYquHMYC7CwzOpiiTEtkLmKU60puUD%2BOY473IB43PBULHm7nRs2NmMrtZLS93JH6X8PkgLZWFsnaTkwDwScuPhwZ4%2BmmqD2xrwZ6stqXmDzTtDoKLSwupCKKIe1UbbjGrEIJRUhHvbQ%2BGZ3t619BEGkiGcukR8Y0IkAldFo6ows%2FIWvJrzlikd1NXoQhBG&X-Amz-Signature=d2d6285104af19efa808ade2959772f99a16ebdc9b4e8ae228394b80aed2a526&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH3H4KIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFjEa1QrRq%2B%2FcVj4rvyEvB1720EUPPF%2ByiFoG6dZ1EbAIhAJhaG91dPcMMNpi%2BLUACuqFyUjkLjoPp5gm2wju0jJTCKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU1OAaoisaNY5M%2FnYq3AMFl6rrS9M86QHTlxJpcSDfseWxA5OSeT9TPBHzUGT8bk7ZzAFbpkBLa4xF3rKzLLvLyOhnYfBbl4aI4aLjQgZY0uLP79IMlB90uAG3vhoqVrxKcNAGNxTafpPRpf875nisVbBkpFVOmK5rKSkxJrfLw4klREdPclx40FBqukRHVJEk%2BcLVkFFtLryANHJBc%2Bb48ACMHFewQp0KRQEfRS1TiRiTCQ2rVyJvGMrjrZvzVG%2Bgvq7wPvjWd12bBoaS7XO3qEZEBNzriaa7wRx7amDw%2FqySccF%2BQKq55BABhOF0iazpn0GzWmbofzE3M3QwlhNBNMTonnJimFoRHAd6WTXxLhXccX3qTrld1aBAzLAPUtmOjBxEJu2bSs%2Fyf8txtwTfWb%2Bz4AMEqtjYAhP3SGFr33ew4NO6PWF38nFbDeu2r8PL%2FmDqyGhAbcorO%2B0edXDygGb%2FxYs9QvkvI3Ec3g9%2FsFIwjmDLlkj%2FR9NjbydqJnKS1K8P6cw61A03ibUtJEA0s3oTrKTnFCNCuehMwAUrvXmSSvErf84JIMAxKMzGnmGO4OYLAxB136WwCT0WNqBnEa1fq8Eb6NDvICpFTse%2FpRrDFb7jPpZtxdLv4eJrfBFpgj9889R7D7ebbTDzhN%2B9BjqkAa4B3BR1q3gpLpPoym%2FW8k8aqMH%2BdgkYquHMYC7CwzOpiiTEtkLmKU60puUD%2BOY473IB43PBULHm7nRs2NmMrtZLS93JH6X8PkgLZWFsnaTkwDwScuPhwZ4%2BmmqD2xrwZ6stqXmDzTtDoKLSwupCKKIe1UbbjGrEIJRUhHvbQ%2BGZ3t619BEGkiGcukR8Y0IkAldFo6ows%2FIWvJrzlikd1NXoQhBG&X-Amz-Signature=9551f7a1b37408660677264aa216331c9a5f0a917314d5f12081879dcac61f19&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH3H4KIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFjEa1QrRq%2B%2FcVj4rvyEvB1720EUPPF%2ByiFoG6dZ1EbAIhAJhaG91dPcMMNpi%2BLUACuqFyUjkLjoPp5gm2wju0jJTCKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU1OAaoisaNY5M%2FnYq3AMFl6rrS9M86QHTlxJpcSDfseWxA5OSeT9TPBHzUGT8bk7ZzAFbpkBLa4xF3rKzLLvLyOhnYfBbl4aI4aLjQgZY0uLP79IMlB90uAG3vhoqVrxKcNAGNxTafpPRpf875nisVbBkpFVOmK5rKSkxJrfLw4klREdPclx40FBqukRHVJEk%2BcLVkFFtLryANHJBc%2Bb48ACMHFewQp0KRQEfRS1TiRiTCQ2rVyJvGMrjrZvzVG%2Bgvq7wPvjWd12bBoaS7XO3qEZEBNzriaa7wRx7amDw%2FqySccF%2BQKq55BABhOF0iazpn0GzWmbofzE3M3QwlhNBNMTonnJimFoRHAd6WTXxLhXccX3qTrld1aBAzLAPUtmOjBxEJu2bSs%2Fyf8txtwTfWb%2Bz4AMEqtjYAhP3SGFr33ew4NO6PWF38nFbDeu2r8PL%2FmDqyGhAbcorO%2B0edXDygGb%2FxYs9QvkvI3Ec3g9%2FsFIwjmDLlkj%2FR9NjbydqJnKS1K8P6cw61A03ibUtJEA0s3oTrKTnFCNCuehMwAUrvXmSSvErf84JIMAxKMzGnmGO4OYLAxB136WwCT0WNqBnEa1fq8Eb6NDvICpFTse%2FpRrDFb7jPpZtxdLv4eJrfBFpgj9889R7D7ebbTDzhN%2B9BjqkAa4B3BR1q3gpLpPoym%2FW8k8aqMH%2BdgkYquHMYC7CwzOpiiTEtkLmKU60puUD%2BOY473IB43PBULHm7nRs2NmMrtZLS93JH6X8PkgLZWFsnaTkwDwScuPhwZ4%2BmmqD2xrwZ6stqXmDzTtDoKLSwupCKKIe1UbbjGrEIJRUhHvbQ%2BGZ3t619BEGkiGcukR8Y0IkAldFo6ows%2FIWvJrzlikd1NXoQhBG&X-Amz-Signature=c25607868c545292499b8b78b5462e9ec31dd05a0d1a283010f0c341ddbec720&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH3H4KIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFjEa1QrRq%2B%2FcVj4rvyEvB1720EUPPF%2ByiFoG6dZ1EbAIhAJhaG91dPcMMNpi%2BLUACuqFyUjkLjoPp5gm2wju0jJTCKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU1OAaoisaNY5M%2FnYq3AMFl6rrS9M86QHTlxJpcSDfseWxA5OSeT9TPBHzUGT8bk7ZzAFbpkBLa4xF3rKzLLvLyOhnYfBbl4aI4aLjQgZY0uLP79IMlB90uAG3vhoqVrxKcNAGNxTafpPRpf875nisVbBkpFVOmK5rKSkxJrfLw4klREdPclx40FBqukRHVJEk%2BcLVkFFtLryANHJBc%2Bb48ACMHFewQp0KRQEfRS1TiRiTCQ2rVyJvGMrjrZvzVG%2Bgvq7wPvjWd12bBoaS7XO3qEZEBNzriaa7wRx7amDw%2FqySccF%2BQKq55BABhOF0iazpn0GzWmbofzE3M3QwlhNBNMTonnJimFoRHAd6WTXxLhXccX3qTrld1aBAzLAPUtmOjBxEJu2bSs%2Fyf8txtwTfWb%2Bz4AMEqtjYAhP3SGFr33ew4NO6PWF38nFbDeu2r8PL%2FmDqyGhAbcorO%2B0edXDygGb%2FxYs9QvkvI3Ec3g9%2FsFIwjmDLlkj%2FR9NjbydqJnKS1K8P6cw61A03ibUtJEA0s3oTrKTnFCNCuehMwAUrvXmSSvErf84JIMAxKMzGnmGO4OYLAxB136WwCT0WNqBnEa1fq8Eb6NDvICpFTse%2FpRrDFb7jPpZtxdLv4eJrfBFpgj9889R7D7ebbTDzhN%2B9BjqkAa4B3BR1q3gpLpPoym%2FW8k8aqMH%2BdgkYquHMYC7CwzOpiiTEtkLmKU60puUD%2BOY473IB43PBULHm7nRs2NmMrtZLS93JH6X8PkgLZWFsnaTkwDwScuPhwZ4%2BmmqD2xrwZ6stqXmDzTtDoKLSwupCKKIe1UbbjGrEIJRUhHvbQ%2BGZ3t619BEGkiGcukR8Y0IkAldFo6ows%2FIWvJrzlikd1NXoQhBG&X-Amz-Signature=d269a43aa735f2731c1d25de269fa7bb40f3812477adda7c80202965ce5f0a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH3H4KIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFjEa1QrRq%2B%2FcVj4rvyEvB1720EUPPF%2ByiFoG6dZ1EbAIhAJhaG91dPcMMNpi%2BLUACuqFyUjkLjoPp5gm2wju0jJTCKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU1OAaoisaNY5M%2FnYq3AMFl6rrS9M86QHTlxJpcSDfseWxA5OSeT9TPBHzUGT8bk7ZzAFbpkBLa4xF3rKzLLvLyOhnYfBbl4aI4aLjQgZY0uLP79IMlB90uAG3vhoqVrxKcNAGNxTafpPRpf875nisVbBkpFVOmK5rKSkxJrfLw4klREdPclx40FBqukRHVJEk%2BcLVkFFtLryANHJBc%2Bb48ACMHFewQp0KRQEfRS1TiRiTCQ2rVyJvGMrjrZvzVG%2Bgvq7wPvjWd12bBoaS7XO3qEZEBNzriaa7wRx7amDw%2FqySccF%2BQKq55BABhOF0iazpn0GzWmbofzE3M3QwlhNBNMTonnJimFoRHAd6WTXxLhXccX3qTrld1aBAzLAPUtmOjBxEJu2bSs%2Fyf8txtwTfWb%2Bz4AMEqtjYAhP3SGFr33ew4NO6PWF38nFbDeu2r8PL%2FmDqyGhAbcorO%2B0edXDygGb%2FxYs9QvkvI3Ec3g9%2FsFIwjmDLlkj%2FR9NjbydqJnKS1K8P6cw61A03ibUtJEA0s3oTrKTnFCNCuehMwAUrvXmSSvErf84JIMAxKMzGnmGO4OYLAxB136WwCT0WNqBnEa1fq8Eb6NDvICpFTse%2FpRrDFb7jPpZtxdLv4eJrfBFpgj9889R7D7ebbTDzhN%2B9BjqkAa4B3BR1q3gpLpPoym%2FW8k8aqMH%2BdgkYquHMYC7CwzOpiiTEtkLmKU60puUD%2BOY473IB43PBULHm7nRs2NmMrtZLS93JH6X8PkgLZWFsnaTkwDwScuPhwZ4%2BmmqD2xrwZ6stqXmDzTtDoKLSwupCKKIe1UbbjGrEIJRUhHvbQ%2BGZ3t619BEGkiGcukR8Y0IkAldFo6ows%2FIWvJrzlikd1NXoQhBG&X-Amz-Signature=424278d914c73f33cf390ed2b9f66d85117b6a8adb22810b24ca6b9b8b61896b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH3H4KIP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFjEa1QrRq%2B%2FcVj4rvyEvB1720EUPPF%2ByiFoG6dZ1EbAIhAJhaG91dPcMMNpi%2BLUACuqFyUjkLjoPp5gm2wju0jJTCKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU1OAaoisaNY5M%2FnYq3AMFl6rrS9M86QHTlxJpcSDfseWxA5OSeT9TPBHzUGT8bk7ZzAFbpkBLa4xF3rKzLLvLyOhnYfBbl4aI4aLjQgZY0uLP79IMlB90uAG3vhoqVrxKcNAGNxTafpPRpf875nisVbBkpFVOmK5rKSkxJrfLw4klREdPclx40FBqukRHVJEk%2BcLVkFFtLryANHJBc%2Bb48ACMHFewQp0KRQEfRS1TiRiTCQ2rVyJvGMrjrZvzVG%2Bgvq7wPvjWd12bBoaS7XO3qEZEBNzriaa7wRx7amDw%2FqySccF%2BQKq55BABhOF0iazpn0GzWmbofzE3M3QwlhNBNMTonnJimFoRHAd6WTXxLhXccX3qTrld1aBAzLAPUtmOjBxEJu2bSs%2Fyf8txtwTfWb%2Bz4AMEqtjYAhP3SGFr33ew4NO6PWF38nFbDeu2r8PL%2FmDqyGhAbcorO%2B0edXDygGb%2FxYs9QvkvI3Ec3g9%2FsFIwjmDLlkj%2FR9NjbydqJnKS1K8P6cw61A03ibUtJEA0s3oTrKTnFCNCuehMwAUrvXmSSvErf84JIMAxKMzGnmGO4OYLAxB136WwCT0WNqBnEa1fq8Eb6NDvICpFTse%2FpRrDFb7jPpZtxdLv4eJrfBFpgj9889R7D7ebbTDzhN%2B9BjqkAa4B3BR1q3gpLpPoym%2FW8k8aqMH%2BdgkYquHMYC7CwzOpiiTEtkLmKU60puUD%2BOY473IB43PBULHm7nRs2NmMrtZLS93JH6X8PkgLZWFsnaTkwDwScuPhwZ4%2BmmqD2xrwZ6stqXmDzTtDoKLSwupCKKIe1UbbjGrEIJRUhHvbQ%2BGZ3t619BEGkiGcukR8Y0IkAldFo6ows%2FIWvJrzlikd1NXoQhBG&X-Amz-Signature=46d1ebecf0f8edfa5a129233143fc4e9484ca1c672a04dbb74e2c14bbb5f42f4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
