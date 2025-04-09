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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PFN4AAU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBLXrqGLmKJtPz8RbzE7vVWNMTsQw30coDZvBPhAWNDzAiB%2BMmpVh60bRd%2FkCl7V0lvdObgCscnnZSPvyPL53pCnwSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSl8d%2BdrTevzuDTqKtwDISZnjLkWZx3DY99%2FOcX1%2FgVm7E0f7%2FgF1yFzUFIEP02jPP4foG64alabDlokGFJW0eB%2FgkzBHgD06cQoEtKttbb1453KZa1btHCQ1n%2BiCw5t0NzJVCq9uvk4pVkS%2BtNfhMeoZtGZs2%2FmeIT8zNYO4LIZtFDIX%2FByF9XXl1e7svvBheAderlDZSUoUTCYesS2Q6Y6%2FOhOaDmCb8pnVGndS2YXBt8Z7l3lnWDyGn9MLh7Gyb4GAu3hbEvjexzarT61n76HTXIZXZ8kM2na05E%2BIiaYvBiV8wbcZ9MifffIYC2hGao9yCBYuiOO%2FWW%2Fvd7sOH1yf5NK%2BokZP6eP5p2zkA%2BAXWfQR7bf3hCAkkFUOSKVsGl67nvOJjKuU2aiEkZUTPU5QVOo%2F0CGIMl1hYCuKOb%2BkDLH6SjCcsNBCpvziyeoAOamI%2BO%2BXqEXA80jvUgD9sjTeBzenaHlV9muFlOLjm9SrD45ua0e3wjGj98MtlhBWwF4z96qzAGVb1FjZKxHiWA6ZhXWt2dhyv74IZng%2FfQEBxWZ6Dibo30FJqcxPcAF93EdBIrAw5g3UwA%2FN14GnRVAwVRhLPO6LNMNXrS%2FSYYPWhiyT%2Fc6Xy5fL5wSkl%2BnFxA5PN32JSvuCkcwg9fXvwY6pgEEPWyEUQEE3l732gpHQ325cPvUglSG56IMCWdU3C%2FaWCne4UYlV4A0fieuag1NMN34XuETL5Ym0npM1q%2BQdt%2BvQAjlNqiH%2FQWNGC%2FEvGkKOP%2FCtY8pwZOeca%2BRUs2LIp4qIDUUoI2fZLBWAIEzEo%2BOf%2FeuEbIpy%2FEs%2Bq%2B%2FZwcRhP6GmwVlGI61SH%2FsYQ2wE32JzGXmAug7QDu9KTXcuzwod1ci%2BuGv&X-Amz-Signature=2a4b4942e30d347ec3792f9697b118e4cf88ff43d30948254f68d0c0d2292d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PFN4AAU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBLXrqGLmKJtPz8RbzE7vVWNMTsQw30coDZvBPhAWNDzAiB%2BMmpVh60bRd%2FkCl7V0lvdObgCscnnZSPvyPL53pCnwSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSl8d%2BdrTevzuDTqKtwDISZnjLkWZx3DY99%2FOcX1%2FgVm7E0f7%2FgF1yFzUFIEP02jPP4foG64alabDlokGFJW0eB%2FgkzBHgD06cQoEtKttbb1453KZa1btHCQ1n%2BiCw5t0NzJVCq9uvk4pVkS%2BtNfhMeoZtGZs2%2FmeIT8zNYO4LIZtFDIX%2FByF9XXl1e7svvBheAderlDZSUoUTCYesS2Q6Y6%2FOhOaDmCb8pnVGndS2YXBt8Z7l3lnWDyGn9MLh7Gyb4GAu3hbEvjexzarT61n76HTXIZXZ8kM2na05E%2BIiaYvBiV8wbcZ9MifffIYC2hGao9yCBYuiOO%2FWW%2Fvd7sOH1yf5NK%2BokZP6eP5p2zkA%2BAXWfQR7bf3hCAkkFUOSKVsGl67nvOJjKuU2aiEkZUTPU5QVOo%2F0CGIMl1hYCuKOb%2BkDLH6SjCcsNBCpvziyeoAOamI%2BO%2BXqEXA80jvUgD9sjTeBzenaHlV9muFlOLjm9SrD45ua0e3wjGj98MtlhBWwF4z96qzAGVb1FjZKxHiWA6ZhXWt2dhyv74IZng%2FfQEBxWZ6Dibo30FJqcxPcAF93EdBIrAw5g3UwA%2FN14GnRVAwVRhLPO6LNMNXrS%2FSYYPWhiyT%2Fc6Xy5fL5wSkl%2BnFxA5PN32JSvuCkcwg9fXvwY6pgEEPWyEUQEE3l732gpHQ325cPvUglSG56IMCWdU3C%2FaWCne4UYlV4A0fieuag1NMN34XuETL5Ym0npM1q%2BQdt%2BvQAjlNqiH%2FQWNGC%2FEvGkKOP%2FCtY8pwZOeca%2BRUs2LIp4qIDUUoI2fZLBWAIEzEo%2BOf%2FeuEbIpy%2FEs%2Bq%2B%2FZwcRhP6GmwVlGI61SH%2FsYQ2wE32JzGXmAug7QDu9KTXcuzwod1ci%2BuGv&X-Amz-Signature=d8c4421d8922452a8161d5146b0555ef39f998b1befc8218e2d65046c5494cce&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PFN4AAU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBLXrqGLmKJtPz8RbzE7vVWNMTsQw30coDZvBPhAWNDzAiB%2BMmpVh60bRd%2FkCl7V0lvdObgCscnnZSPvyPL53pCnwSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSl8d%2BdrTevzuDTqKtwDISZnjLkWZx3DY99%2FOcX1%2FgVm7E0f7%2FgF1yFzUFIEP02jPP4foG64alabDlokGFJW0eB%2FgkzBHgD06cQoEtKttbb1453KZa1btHCQ1n%2BiCw5t0NzJVCq9uvk4pVkS%2BtNfhMeoZtGZs2%2FmeIT8zNYO4LIZtFDIX%2FByF9XXl1e7svvBheAderlDZSUoUTCYesS2Q6Y6%2FOhOaDmCb8pnVGndS2YXBt8Z7l3lnWDyGn9MLh7Gyb4GAu3hbEvjexzarT61n76HTXIZXZ8kM2na05E%2BIiaYvBiV8wbcZ9MifffIYC2hGao9yCBYuiOO%2FWW%2Fvd7sOH1yf5NK%2BokZP6eP5p2zkA%2BAXWfQR7bf3hCAkkFUOSKVsGl67nvOJjKuU2aiEkZUTPU5QVOo%2F0CGIMl1hYCuKOb%2BkDLH6SjCcsNBCpvziyeoAOamI%2BO%2BXqEXA80jvUgD9sjTeBzenaHlV9muFlOLjm9SrD45ua0e3wjGj98MtlhBWwF4z96qzAGVb1FjZKxHiWA6ZhXWt2dhyv74IZng%2FfQEBxWZ6Dibo30FJqcxPcAF93EdBIrAw5g3UwA%2FN14GnRVAwVRhLPO6LNMNXrS%2FSYYPWhiyT%2Fc6Xy5fL5wSkl%2BnFxA5PN32JSvuCkcwg9fXvwY6pgEEPWyEUQEE3l732gpHQ325cPvUglSG56IMCWdU3C%2FaWCne4UYlV4A0fieuag1NMN34XuETL5Ym0npM1q%2BQdt%2BvQAjlNqiH%2FQWNGC%2FEvGkKOP%2FCtY8pwZOeca%2BRUs2LIp4qIDUUoI2fZLBWAIEzEo%2BOf%2FeuEbIpy%2FEs%2Bq%2B%2FZwcRhP6GmwVlGI61SH%2FsYQ2wE32JzGXmAug7QDu9KTXcuzwod1ci%2BuGv&X-Amz-Signature=6b40293a0956cda12afaa15dfdff4254c0e8a694b5f4a8e5e1fff8c510089514&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PFN4AAU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBLXrqGLmKJtPz8RbzE7vVWNMTsQw30coDZvBPhAWNDzAiB%2BMmpVh60bRd%2FkCl7V0lvdObgCscnnZSPvyPL53pCnwSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSl8d%2BdrTevzuDTqKtwDISZnjLkWZx3DY99%2FOcX1%2FgVm7E0f7%2FgF1yFzUFIEP02jPP4foG64alabDlokGFJW0eB%2FgkzBHgD06cQoEtKttbb1453KZa1btHCQ1n%2BiCw5t0NzJVCq9uvk4pVkS%2BtNfhMeoZtGZs2%2FmeIT8zNYO4LIZtFDIX%2FByF9XXl1e7svvBheAderlDZSUoUTCYesS2Q6Y6%2FOhOaDmCb8pnVGndS2YXBt8Z7l3lnWDyGn9MLh7Gyb4GAu3hbEvjexzarT61n76HTXIZXZ8kM2na05E%2BIiaYvBiV8wbcZ9MifffIYC2hGao9yCBYuiOO%2FWW%2Fvd7sOH1yf5NK%2BokZP6eP5p2zkA%2BAXWfQR7bf3hCAkkFUOSKVsGl67nvOJjKuU2aiEkZUTPU5QVOo%2F0CGIMl1hYCuKOb%2BkDLH6SjCcsNBCpvziyeoAOamI%2BO%2BXqEXA80jvUgD9sjTeBzenaHlV9muFlOLjm9SrD45ua0e3wjGj98MtlhBWwF4z96qzAGVb1FjZKxHiWA6ZhXWt2dhyv74IZng%2FfQEBxWZ6Dibo30FJqcxPcAF93EdBIrAw5g3UwA%2FN14GnRVAwVRhLPO6LNMNXrS%2FSYYPWhiyT%2Fc6Xy5fL5wSkl%2BnFxA5PN32JSvuCkcwg9fXvwY6pgEEPWyEUQEE3l732gpHQ325cPvUglSG56IMCWdU3C%2FaWCne4UYlV4A0fieuag1NMN34XuETL5Ym0npM1q%2BQdt%2BvQAjlNqiH%2FQWNGC%2FEvGkKOP%2FCtY8pwZOeca%2BRUs2LIp4qIDUUoI2fZLBWAIEzEo%2BOf%2FeuEbIpy%2FEs%2Bq%2B%2FZwcRhP6GmwVlGI61SH%2FsYQ2wE32JzGXmAug7QDu9KTXcuzwod1ci%2BuGv&X-Amz-Signature=884e46cdc751918315fdf4b0ce4393866ce4a7edf8cb5b4d4183df31b137b350&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PFN4AAU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBLXrqGLmKJtPz8RbzE7vVWNMTsQw30coDZvBPhAWNDzAiB%2BMmpVh60bRd%2FkCl7V0lvdObgCscnnZSPvyPL53pCnwSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSl8d%2BdrTevzuDTqKtwDISZnjLkWZx3DY99%2FOcX1%2FgVm7E0f7%2FgF1yFzUFIEP02jPP4foG64alabDlokGFJW0eB%2FgkzBHgD06cQoEtKttbb1453KZa1btHCQ1n%2BiCw5t0NzJVCq9uvk4pVkS%2BtNfhMeoZtGZs2%2FmeIT8zNYO4LIZtFDIX%2FByF9XXl1e7svvBheAderlDZSUoUTCYesS2Q6Y6%2FOhOaDmCb8pnVGndS2YXBt8Z7l3lnWDyGn9MLh7Gyb4GAu3hbEvjexzarT61n76HTXIZXZ8kM2na05E%2BIiaYvBiV8wbcZ9MifffIYC2hGao9yCBYuiOO%2FWW%2Fvd7sOH1yf5NK%2BokZP6eP5p2zkA%2BAXWfQR7bf3hCAkkFUOSKVsGl67nvOJjKuU2aiEkZUTPU5QVOo%2F0CGIMl1hYCuKOb%2BkDLH6SjCcsNBCpvziyeoAOamI%2BO%2BXqEXA80jvUgD9sjTeBzenaHlV9muFlOLjm9SrD45ua0e3wjGj98MtlhBWwF4z96qzAGVb1FjZKxHiWA6ZhXWt2dhyv74IZng%2FfQEBxWZ6Dibo30FJqcxPcAF93EdBIrAw5g3UwA%2FN14GnRVAwVRhLPO6LNMNXrS%2FSYYPWhiyT%2Fc6Xy5fL5wSkl%2BnFxA5PN32JSvuCkcwg9fXvwY6pgEEPWyEUQEE3l732gpHQ325cPvUglSG56IMCWdU3C%2FaWCne4UYlV4A0fieuag1NMN34XuETL5Ym0npM1q%2BQdt%2BvQAjlNqiH%2FQWNGC%2FEvGkKOP%2FCtY8pwZOeca%2BRUs2LIp4qIDUUoI2fZLBWAIEzEo%2BOf%2FeuEbIpy%2FEs%2Bq%2B%2FZwcRhP6GmwVlGI61SH%2FsYQ2wE32JzGXmAug7QDu9KTXcuzwod1ci%2BuGv&X-Amz-Signature=14268fbeef436fc1bf1f1351be801074faaeef76630b6d735aafe68bbff269ac&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PFN4AAU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBLXrqGLmKJtPz8RbzE7vVWNMTsQw30coDZvBPhAWNDzAiB%2BMmpVh60bRd%2FkCl7V0lvdObgCscnnZSPvyPL53pCnwSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSl8d%2BdrTevzuDTqKtwDISZnjLkWZx3DY99%2FOcX1%2FgVm7E0f7%2FgF1yFzUFIEP02jPP4foG64alabDlokGFJW0eB%2FgkzBHgD06cQoEtKttbb1453KZa1btHCQ1n%2BiCw5t0NzJVCq9uvk4pVkS%2BtNfhMeoZtGZs2%2FmeIT8zNYO4LIZtFDIX%2FByF9XXl1e7svvBheAderlDZSUoUTCYesS2Q6Y6%2FOhOaDmCb8pnVGndS2YXBt8Z7l3lnWDyGn9MLh7Gyb4GAu3hbEvjexzarT61n76HTXIZXZ8kM2na05E%2BIiaYvBiV8wbcZ9MifffIYC2hGao9yCBYuiOO%2FWW%2Fvd7sOH1yf5NK%2BokZP6eP5p2zkA%2BAXWfQR7bf3hCAkkFUOSKVsGl67nvOJjKuU2aiEkZUTPU5QVOo%2F0CGIMl1hYCuKOb%2BkDLH6SjCcsNBCpvziyeoAOamI%2BO%2BXqEXA80jvUgD9sjTeBzenaHlV9muFlOLjm9SrD45ua0e3wjGj98MtlhBWwF4z96qzAGVb1FjZKxHiWA6ZhXWt2dhyv74IZng%2FfQEBxWZ6Dibo30FJqcxPcAF93EdBIrAw5g3UwA%2FN14GnRVAwVRhLPO6LNMNXrS%2FSYYPWhiyT%2Fc6Xy5fL5wSkl%2BnFxA5PN32JSvuCkcwg9fXvwY6pgEEPWyEUQEE3l732gpHQ325cPvUglSG56IMCWdU3C%2FaWCne4UYlV4A0fieuag1NMN34XuETL5Ym0npM1q%2BQdt%2BvQAjlNqiH%2FQWNGC%2FEvGkKOP%2FCtY8pwZOeca%2BRUs2LIp4qIDUUoI2fZLBWAIEzEo%2BOf%2FeuEbIpy%2FEs%2Bq%2B%2FZwcRhP6GmwVlGI61SH%2FsYQ2wE32JzGXmAug7QDu9KTXcuzwod1ci%2BuGv&X-Amz-Signature=f0b8c98228770ffd64bcb103a7143b58cac68197caa8fde2554001a262926cea&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PFN4AAU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBLXrqGLmKJtPz8RbzE7vVWNMTsQw30coDZvBPhAWNDzAiB%2BMmpVh60bRd%2FkCl7V0lvdObgCscnnZSPvyPL53pCnwSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSl8d%2BdrTevzuDTqKtwDISZnjLkWZx3DY99%2FOcX1%2FgVm7E0f7%2FgF1yFzUFIEP02jPP4foG64alabDlokGFJW0eB%2FgkzBHgD06cQoEtKttbb1453KZa1btHCQ1n%2BiCw5t0NzJVCq9uvk4pVkS%2BtNfhMeoZtGZs2%2FmeIT8zNYO4LIZtFDIX%2FByF9XXl1e7svvBheAderlDZSUoUTCYesS2Q6Y6%2FOhOaDmCb8pnVGndS2YXBt8Z7l3lnWDyGn9MLh7Gyb4GAu3hbEvjexzarT61n76HTXIZXZ8kM2na05E%2BIiaYvBiV8wbcZ9MifffIYC2hGao9yCBYuiOO%2FWW%2Fvd7sOH1yf5NK%2BokZP6eP5p2zkA%2BAXWfQR7bf3hCAkkFUOSKVsGl67nvOJjKuU2aiEkZUTPU5QVOo%2F0CGIMl1hYCuKOb%2BkDLH6SjCcsNBCpvziyeoAOamI%2BO%2BXqEXA80jvUgD9sjTeBzenaHlV9muFlOLjm9SrD45ua0e3wjGj98MtlhBWwF4z96qzAGVb1FjZKxHiWA6ZhXWt2dhyv74IZng%2FfQEBxWZ6Dibo30FJqcxPcAF93EdBIrAw5g3UwA%2FN14GnRVAwVRhLPO6LNMNXrS%2FSYYPWhiyT%2Fc6Xy5fL5wSkl%2BnFxA5PN32JSvuCkcwg9fXvwY6pgEEPWyEUQEE3l732gpHQ325cPvUglSG56IMCWdU3C%2FaWCne4UYlV4A0fieuag1NMN34XuETL5Ym0npM1q%2BQdt%2BvQAjlNqiH%2FQWNGC%2FEvGkKOP%2FCtY8pwZOeca%2BRUs2LIp4qIDUUoI2fZLBWAIEzEo%2BOf%2FeuEbIpy%2FEs%2Bq%2B%2FZwcRhP6GmwVlGI61SH%2FsYQ2wE32JzGXmAug7QDu9KTXcuzwod1ci%2BuGv&X-Amz-Signature=e80075816bcc0c49344bd2affca4643ac3ca3411b360f8cf712905914289025e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
