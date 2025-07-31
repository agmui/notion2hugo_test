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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N7AAQ5I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt6qEufHAMBD%2BR2HzEw%2FTq6TdyacWp6jgxacah%2BkzOeAIhAP%2BykrGIYidsWevBiF7urZ0b9hN8aAPU8IsEw%2BEMastTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZurEg8r7IjvpKlvkq3AOjOIOqCUOCFrJ%2Fun9QHsqZ9wt1rKvZ5UtdgnRlX0ebZwyYpJmBwHIj1RDjJJVKJJyPGncRWccXgwvJLv97Xzl3fdEDZ7MNjA3YF51yULL0pUtZhbR3Ife4m5bDiL%2FM2lzGqWJIJ0e6pLLpI2Gqmg31fRnrreKd2KuAqkb18gP%2FtQhoPL9xmg041q4n64ZZUIqTmqY%2Bi9RtSgQkBc5tNrPyEk6Z5JMHaUyiePb4t4QpArX1kyCwQ%2BTMd93QgwAKSZTM0HNWZNLv3wd65FIYRmMQuC9qD5DS1MB%2Bp92UK7jIwxuQcfIReuT2BgZz9rfoJH789HV%2FYpEZACHHAPiXvolAra6HKYmEdxM%2FLXEGw%2FptkJG5IYZOZ1%2BKo8vzwnP3AmtBQJiUJm9bF2a09tvdHUzF0wz8uW0NIlPmT2ewOEIX1bnLICi1ZJAEXoKkQg2mlj%2FgBSoemsRaFrgBOdWZzkx0Fp8iQYR1K91mtc9b3%2BWvsTzLWtQQ04SzBRfZqpQvSADNwa747UMc9Yl2xTHx5es120iQ71nAdeDhm4r6TdOuGPd9ZWhiOKIabAT76Nfs8SQzxFqunzI6fxFUBh0FoOn0vl8etnymZ3fNEbnUx7jcDbXzArbUPUCr6EEIZDDm6q3EBjqkAS6BMHqQU0bWJvxxqlykovvazLKGTV5LyvGd8Zj0QSHvn3JEP%2FSjPWOIS15RMlMc01%2B0Y8Wm4MhRmFim50Yzk5H82Na09NtoBc28RaqKxQ1Plcjmrwq1Lv77%2BRZUKNivTSngtNdyuQ%2FdHYNGxyZ6pFNVxHC%2BjsKAiZGEp0dLX4Tq%2Bc1e%2Bmkq7UJTDGW6QCQCTA66iNB6yWWukDccpXxM2vPZLkvL&X-Amz-Signature=1a32cf24ac8f0f570b29fe23a884618525615a1ffa1d7b5c828f9803f726fad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N7AAQ5I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt6qEufHAMBD%2BR2HzEw%2FTq6TdyacWp6jgxacah%2BkzOeAIhAP%2BykrGIYidsWevBiF7urZ0b9hN8aAPU8IsEw%2BEMastTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZurEg8r7IjvpKlvkq3AOjOIOqCUOCFrJ%2Fun9QHsqZ9wt1rKvZ5UtdgnRlX0ebZwyYpJmBwHIj1RDjJJVKJJyPGncRWccXgwvJLv97Xzl3fdEDZ7MNjA3YF51yULL0pUtZhbR3Ife4m5bDiL%2FM2lzGqWJIJ0e6pLLpI2Gqmg31fRnrreKd2KuAqkb18gP%2FtQhoPL9xmg041q4n64ZZUIqTmqY%2Bi9RtSgQkBc5tNrPyEk6Z5JMHaUyiePb4t4QpArX1kyCwQ%2BTMd93QgwAKSZTM0HNWZNLv3wd65FIYRmMQuC9qD5DS1MB%2Bp92UK7jIwxuQcfIReuT2BgZz9rfoJH789HV%2FYpEZACHHAPiXvolAra6HKYmEdxM%2FLXEGw%2FptkJG5IYZOZ1%2BKo8vzwnP3AmtBQJiUJm9bF2a09tvdHUzF0wz8uW0NIlPmT2ewOEIX1bnLICi1ZJAEXoKkQg2mlj%2FgBSoemsRaFrgBOdWZzkx0Fp8iQYR1K91mtc9b3%2BWvsTzLWtQQ04SzBRfZqpQvSADNwa747UMc9Yl2xTHx5es120iQ71nAdeDhm4r6TdOuGPd9ZWhiOKIabAT76Nfs8SQzxFqunzI6fxFUBh0FoOn0vl8etnymZ3fNEbnUx7jcDbXzArbUPUCr6EEIZDDm6q3EBjqkAS6BMHqQU0bWJvxxqlykovvazLKGTV5LyvGd8Zj0QSHvn3JEP%2FSjPWOIS15RMlMc01%2B0Y8Wm4MhRmFim50Yzk5H82Na09NtoBc28RaqKxQ1Plcjmrwq1Lv77%2BRZUKNivTSngtNdyuQ%2FdHYNGxyZ6pFNVxHC%2BjsKAiZGEp0dLX4Tq%2Bc1e%2Bmkq7UJTDGW6QCQCTA66iNB6yWWukDccpXxM2vPZLkvL&X-Amz-Signature=179a209fa24f1976bb88bd1c929b22922402b69e5ffcb55052be1a9888647b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N7AAQ5I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt6qEufHAMBD%2BR2HzEw%2FTq6TdyacWp6jgxacah%2BkzOeAIhAP%2BykrGIYidsWevBiF7urZ0b9hN8aAPU8IsEw%2BEMastTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZurEg8r7IjvpKlvkq3AOjOIOqCUOCFrJ%2Fun9QHsqZ9wt1rKvZ5UtdgnRlX0ebZwyYpJmBwHIj1RDjJJVKJJyPGncRWccXgwvJLv97Xzl3fdEDZ7MNjA3YF51yULL0pUtZhbR3Ife4m5bDiL%2FM2lzGqWJIJ0e6pLLpI2Gqmg31fRnrreKd2KuAqkb18gP%2FtQhoPL9xmg041q4n64ZZUIqTmqY%2Bi9RtSgQkBc5tNrPyEk6Z5JMHaUyiePb4t4QpArX1kyCwQ%2BTMd93QgwAKSZTM0HNWZNLv3wd65FIYRmMQuC9qD5DS1MB%2Bp92UK7jIwxuQcfIReuT2BgZz9rfoJH789HV%2FYpEZACHHAPiXvolAra6HKYmEdxM%2FLXEGw%2FptkJG5IYZOZ1%2BKo8vzwnP3AmtBQJiUJm9bF2a09tvdHUzF0wz8uW0NIlPmT2ewOEIX1bnLICi1ZJAEXoKkQg2mlj%2FgBSoemsRaFrgBOdWZzkx0Fp8iQYR1K91mtc9b3%2BWvsTzLWtQQ04SzBRfZqpQvSADNwa747UMc9Yl2xTHx5es120iQ71nAdeDhm4r6TdOuGPd9ZWhiOKIabAT76Nfs8SQzxFqunzI6fxFUBh0FoOn0vl8etnymZ3fNEbnUx7jcDbXzArbUPUCr6EEIZDDm6q3EBjqkAS6BMHqQU0bWJvxxqlykovvazLKGTV5LyvGd8Zj0QSHvn3JEP%2FSjPWOIS15RMlMc01%2B0Y8Wm4MhRmFim50Yzk5H82Na09NtoBc28RaqKxQ1Plcjmrwq1Lv77%2BRZUKNivTSngtNdyuQ%2FdHYNGxyZ6pFNVxHC%2BjsKAiZGEp0dLX4Tq%2Bc1e%2Bmkq7UJTDGW6QCQCTA66iNB6yWWukDccpXxM2vPZLkvL&X-Amz-Signature=e8530074fe7ae209e266e4eff41dc9367bcb5ff8e9f4836faa761e0f2419c3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N7AAQ5I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt6qEufHAMBD%2BR2HzEw%2FTq6TdyacWp6jgxacah%2BkzOeAIhAP%2BykrGIYidsWevBiF7urZ0b9hN8aAPU8IsEw%2BEMastTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZurEg8r7IjvpKlvkq3AOjOIOqCUOCFrJ%2Fun9QHsqZ9wt1rKvZ5UtdgnRlX0ebZwyYpJmBwHIj1RDjJJVKJJyPGncRWccXgwvJLv97Xzl3fdEDZ7MNjA3YF51yULL0pUtZhbR3Ife4m5bDiL%2FM2lzGqWJIJ0e6pLLpI2Gqmg31fRnrreKd2KuAqkb18gP%2FtQhoPL9xmg041q4n64ZZUIqTmqY%2Bi9RtSgQkBc5tNrPyEk6Z5JMHaUyiePb4t4QpArX1kyCwQ%2BTMd93QgwAKSZTM0HNWZNLv3wd65FIYRmMQuC9qD5DS1MB%2Bp92UK7jIwxuQcfIReuT2BgZz9rfoJH789HV%2FYpEZACHHAPiXvolAra6HKYmEdxM%2FLXEGw%2FptkJG5IYZOZ1%2BKo8vzwnP3AmtBQJiUJm9bF2a09tvdHUzF0wz8uW0NIlPmT2ewOEIX1bnLICi1ZJAEXoKkQg2mlj%2FgBSoemsRaFrgBOdWZzkx0Fp8iQYR1K91mtc9b3%2BWvsTzLWtQQ04SzBRfZqpQvSADNwa747UMc9Yl2xTHx5es120iQ71nAdeDhm4r6TdOuGPd9ZWhiOKIabAT76Nfs8SQzxFqunzI6fxFUBh0FoOn0vl8etnymZ3fNEbnUx7jcDbXzArbUPUCr6EEIZDDm6q3EBjqkAS6BMHqQU0bWJvxxqlykovvazLKGTV5LyvGd8Zj0QSHvn3JEP%2FSjPWOIS15RMlMc01%2B0Y8Wm4MhRmFim50Yzk5H82Na09NtoBc28RaqKxQ1Plcjmrwq1Lv77%2BRZUKNivTSngtNdyuQ%2FdHYNGxyZ6pFNVxHC%2BjsKAiZGEp0dLX4Tq%2Bc1e%2Bmkq7UJTDGW6QCQCTA66iNB6yWWukDccpXxM2vPZLkvL&X-Amz-Signature=1037a319b1c561a0119099f6247628879cbbbe9a4c5873e2cce7cc75a39f857f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N7AAQ5I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt6qEufHAMBD%2BR2HzEw%2FTq6TdyacWp6jgxacah%2BkzOeAIhAP%2BykrGIYidsWevBiF7urZ0b9hN8aAPU8IsEw%2BEMastTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZurEg8r7IjvpKlvkq3AOjOIOqCUOCFrJ%2Fun9QHsqZ9wt1rKvZ5UtdgnRlX0ebZwyYpJmBwHIj1RDjJJVKJJyPGncRWccXgwvJLv97Xzl3fdEDZ7MNjA3YF51yULL0pUtZhbR3Ife4m5bDiL%2FM2lzGqWJIJ0e6pLLpI2Gqmg31fRnrreKd2KuAqkb18gP%2FtQhoPL9xmg041q4n64ZZUIqTmqY%2Bi9RtSgQkBc5tNrPyEk6Z5JMHaUyiePb4t4QpArX1kyCwQ%2BTMd93QgwAKSZTM0HNWZNLv3wd65FIYRmMQuC9qD5DS1MB%2Bp92UK7jIwxuQcfIReuT2BgZz9rfoJH789HV%2FYpEZACHHAPiXvolAra6HKYmEdxM%2FLXEGw%2FptkJG5IYZOZ1%2BKo8vzwnP3AmtBQJiUJm9bF2a09tvdHUzF0wz8uW0NIlPmT2ewOEIX1bnLICi1ZJAEXoKkQg2mlj%2FgBSoemsRaFrgBOdWZzkx0Fp8iQYR1K91mtc9b3%2BWvsTzLWtQQ04SzBRfZqpQvSADNwa747UMc9Yl2xTHx5es120iQ71nAdeDhm4r6TdOuGPd9ZWhiOKIabAT76Nfs8SQzxFqunzI6fxFUBh0FoOn0vl8etnymZ3fNEbnUx7jcDbXzArbUPUCr6EEIZDDm6q3EBjqkAS6BMHqQU0bWJvxxqlykovvazLKGTV5LyvGd8Zj0QSHvn3JEP%2FSjPWOIS15RMlMc01%2B0Y8Wm4MhRmFim50Yzk5H82Na09NtoBc28RaqKxQ1Plcjmrwq1Lv77%2BRZUKNivTSngtNdyuQ%2FdHYNGxyZ6pFNVxHC%2BjsKAiZGEp0dLX4Tq%2Bc1e%2Bmkq7UJTDGW6QCQCTA66iNB6yWWukDccpXxM2vPZLkvL&X-Amz-Signature=a372b7393691c0dcd8db5aac10eb8f0dcb846eef9974274244927561263e17eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N7AAQ5I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt6qEufHAMBD%2BR2HzEw%2FTq6TdyacWp6jgxacah%2BkzOeAIhAP%2BykrGIYidsWevBiF7urZ0b9hN8aAPU8IsEw%2BEMastTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZurEg8r7IjvpKlvkq3AOjOIOqCUOCFrJ%2Fun9QHsqZ9wt1rKvZ5UtdgnRlX0ebZwyYpJmBwHIj1RDjJJVKJJyPGncRWccXgwvJLv97Xzl3fdEDZ7MNjA3YF51yULL0pUtZhbR3Ife4m5bDiL%2FM2lzGqWJIJ0e6pLLpI2Gqmg31fRnrreKd2KuAqkb18gP%2FtQhoPL9xmg041q4n64ZZUIqTmqY%2Bi9RtSgQkBc5tNrPyEk6Z5JMHaUyiePb4t4QpArX1kyCwQ%2BTMd93QgwAKSZTM0HNWZNLv3wd65FIYRmMQuC9qD5DS1MB%2Bp92UK7jIwxuQcfIReuT2BgZz9rfoJH789HV%2FYpEZACHHAPiXvolAra6HKYmEdxM%2FLXEGw%2FptkJG5IYZOZ1%2BKo8vzwnP3AmtBQJiUJm9bF2a09tvdHUzF0wz8uW0NIlPmT2ewOEIX1bnLICi1ZJAEXoKkQg2mlj%2FgBSoemsRaFrgBOdWZzkx0Fp8iQYR1K91mtc9b3%2BWvsTzLWtQQ04SzBRfZqpQvSADNwa747UMc9Yl2xTHx5es120iQ71nAdeDhm4r6TdOuGPd9ZWhiOKIabAT76Nfs8SQzxFqunzI6fxFUBh0FoOn0vl8etnymZ3fNEbnUx7jcDbXzArbUPUCr6EEIZDDm6q3EBjqkAS6BMHqQU0bWJvxxqlykovvazLKGTV5LyvGd8Zj0QSHvn3JEP%2FSjPWOIS15RMlMc01%2B0Y8Wm4MhRmFim50Yzk5H82Na09NtoBc28RaqKxQ1Plcjmrwq1Lv77%2BRZUKNivTSngtNdyuQ%2FdHYNGxyZ6pFNVxHC%2BjsKAiZGEp0dLX4Tq%2Bc1e%2Bmkq7UJTDGW6QCQCTA66iNB6yWWukDccpXxM2vPZLkvL&X-Amz-Signature=1b6b364cc270d2645ca599a5132ebd556764be52bfbf7b62a5d1942751ed9bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N7AAQ5I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt6qEufHAMBD%2BR2HzEw%2FTq6TdyacWp6jgxacah%2BkzOeAIhAP%2BykrGIYidsWevBiF7urZ0b9hN8aAPU8IsEw%2BEMastTKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZurEg8r7IjvpKlvkq3AOjOIOqCUOCFrJ%2Fun9QHsqZ9wt1rKvZ5UtdgnRlX0ebZwyYpJmBwHIj1RDjJJVKJJyPGncRWccXgwvJLv97Xzl3fdEDZ7MNjA3YF51yULL0pUtZhbR3Ife4m5bDiL%2FM2lzGqWJIJ0e6pLLpI2Gqmg31fRnrreKd2KuAqkb18gP%2FtQhoPL9xmg041q4n64ZZUIqTmqY%2Bi9RtSgQkBc5tNrPyEk6Z5JMHaUyiePb4t4QpArX1kyCwQ%2BTMd93QgwAKSZTM0HNWZNLv3wd65FIYRmMQuC9qD5DS1MB%2Bp92UK7jIwxuQcfIReuT2BgZz9rfoJH789HV%2FYpEZACHHAPiXvolAra6HKYmEdxM%2FLXEGw%2FptkJG5IYZOZ1%2BKo8vzwnP3AmtBQJiUJm9bF2a09tvdHUzF0wz8uW0NIlPmT2ewOEIX1bnLICi1ZJAEXoKkQg2mlj%2FgBSoemsRaFrgBOdWZzkx0Fp8iQYR1K91mtc9b3%2BWvsTzLWtQQ04SzBRfZqpQvSADNwa747UMc9Yl2xTHx5es120iQ71nAdeDhm4r6TdOuGPd9ZWhiOKIabAT76Nfs8SQzxFqunzI6fxFUBh0FoOn0vl8etnymZ3fNEbnUx7jcDbXzArbUPUCr6EEIZDDm6q3EBjqkAS6BMHqQU0bWJvxxqlykovvazLKGTV5LyvGd8Zj0QSHvn3JEP%2FSjPWOIS15RMlMc01%2B0Y8Wm4MhRmFim50Yzk5H82Na09NtoBc28RaqKxQ1Plcjmrwq1Lv77%2BRZUKNivTSngtNdyuQ%2FdHYNGxyZ6pFNVxHC%2BjsKAiZGEp0dLX4Tq%2Bc1e%2Bmkq7UJTDGW6QCQCTA66iNB6yWWukDccpXxM2vPZLkvL&X-Amz-Signature=484d6f0eb853c052a031d0b06d6eb4ef0400486ddb51d3c138bb19a928587a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
