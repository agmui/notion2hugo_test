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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FOKMRC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCulqnczyzEc6k5Bm1x1licBJIyDrGNEAtOqshLC67hzQIhALHGVvr8YNpBYwbBvaQ6nPXQsZQkMDZqL7i9wUS4iKXjKv8DCG0QABoMNjM3NDIzMTgzODA1IgwvEyh%2Fe4W8Oh0TpVMq3AOnYN3mkFcL1lR%2BEl3izDXwXVOv91RZdYUbV%2FSeoxGUzxUhAZtJxRDt%2F1T8%2FldOPR4NLAJJVxAJKlRYnBLdvOm0fMKO0qoziMr4Z9pZf%2F6EylWy%2FpPgQk1lDqEYgAQ780g6uXBYxdoBddM96wJjfM7uKgpwWET42Oyf0APS9n0NQHZPZ47sfO4Xi28wmP1BYiL3MITHU3HIHhxQF6NfebgZPg%2FNDvcwJpJR9G8clbdzwzOZqBCs2sn3P82mcsUavNLWeVcdedBh0GRN5h2iMaRTcYdvvx81kgasWHaCtsNYT3sTCSp4d3Xfoov8cUfbvDXncEmq%2FDT6DCcupc%2Bg9YXtiKmxJFyakj9Uc2cVsxLxTMR2h1Dc9uQILjTqyMgMUxDIaFtlkhrZaKiq%2FMqkvDt8xm4ZK6ennLOk8LSE%2F7ASnaCU3Gr8AlYp3g0YM8FkyJnPYVi%2BH3gm6MMyfjadThbGs4MXpBRO3TZ7iTh5vYTzr51tq3hSJL63qk%2FccQUg32Kg0yTRMrGnnP1a3Zx5gGfILEcX%2BupKzrnAzRVkKuv1utFsqkcq2J207HmCzXYfVodhgotL7nF6Ib3PY5UDTR8LhHh5EuVf5BX%2FYKIeOekfA4bYbtdP0%2FP42aeKijCcg63DBjqkARCAAKuWqJFduGqciSJYprgjzfykDIyW0BpAPXehitRstyDvmrzlixEXSWceCvIMZsz4qR%2B4jBQoGf8OabmOwqH6cwnG3wZQTI%2BABc501RJHQ%2BXiqciergJIFkBcQfthnWC3cc%2BELN4YEYuGu2us2wbiqgt%2B9nj47GaVme86OETgSC3qDxHP%2BGJXWsG5zPRBUfqekWmAPqy4fCZKkImlrifFGvAo&X-Amz-Signature=ca207d4cea5f55bbfb91d166faa87eaf490c17f8b400c4cdeef6706cac4ec46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FOKMRC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCulqnczyzEc6k5Bm1x1licBJIyDrGNEAtOqshLC67hzQIhALHGVvr8YNpBYwbBvaQ6nPXQsZQkMDZqL7i9wUS4iKXjKv8DCG0QABoMNjM3NDIzMTgzODA1IgwvEyh%2Fe4W8Oh0TpVMq3AOnYN3mkFcL1lR%2BEl3izDXwXVOv91RZdYUbV%2FSeoxGUzxUhAZtJxRDt%2F1T8%2FldOPR4NLAJJVxAJKlRYnBLdvOm0fMKO0qoziMr4Z9pZf%2F6EylWy%2FpPgQk1lDqEYgAQ780g6uXBYxdoBddM96wJjfM7uKgpwWET42Oyf0APS9n0NQHZPZ47sfO4Xi28wmP1BYiL3MITHU3HIHhxQF6NfebgZPg%2FNDvcwJpJR9G8clbdzwzOZqBCs2sn3P82mcsUavNLWeVcdedBh0GRN5h2iMaRTcYdvvx81kgasWHaCtsNYT3sTCSp4d3Xfoov8cUfbvDXncEmq%2FDT6DCcupc%2Bg9YXtiKmxJFyakj9Uc2cVsxLxTMR2h1Dc9uQILjTqyMgMUxDIaFtlkhrZaKiq%2FMqkvDt8xm4ZK6ennLOk8LSE%2F7ASnaCU3Gr8AlYp3g0YM8FkyJnPYVi%2BH3gm6MMyfjadThbGs4MXpBRO3TZ7iTh5vYTzr51tq3hSJL63qk%2FccQUg32Kg0yTRMrGnnP1a3Zx5gGfILEcX%2BupKzrnAzRVkKuv1utFsqkcq2J207HmCzXYfVodhgotL7nF6Ib3PY5UDTR8LhHh5EuVf5BX%2FYKIeOekfA4bYbtdP0%2FP42aeKijCcg63DBjqkARCAAKuWqJFduGqciSJYprgjzfykDIyW0BpAPXehitRstyDvmrzlixEXSWceCvIMZsz4qR%2B4jBQoGf8OabmOwqH6cwnG3wZQTI%2BABc501RJHQ%2BXiqciergJIFkBcQfthnWC3cc%2BELN4YEYuGu2us2wbiqgt%2B9nj47GaVme86OETgSC3qDxHP%2BGJXWsG5zPRBUfqekWmAPqy4fCZKkImlrifFGvAo&X-Amz-Signature=bcccfe6250da3db1a1c41021998e58209e6da3c194498a44c73ca4c85fda3068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FOKMRC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCulqnczyzEc6k5Bm1x1licBJIyDrGNEAtOqshLC67hzQIhALHGVvr8YNpBYwbBvaQ6nPXQsZQkMDZqL7i9wUS4iKXjKv8DCG0QABoMNjM3NDIzMTgzODA1IgwvEyh%2Fe4W8Oh0TpVMq3AOnYN3mkFcL1lR%2BEl3izDXwXVOv91RZdYUbV%2FSeoxGUzxUhAZtJxRDt%2F1T8%2FldOPR4NLAJJVxAJKlRYnBLdvOm0fMKO0qoziMr4Z9pZf%2F6EylWy%2FpPgQk1lDqEYgAQ780g6uXBYxdoBddM96wJjfM7uKgpwWET42Oyf0APS9n0NQHZPZ47sfO4Xi28wmP1BYiL3MITHU3HIHhxQF6NfebgZPg%2FNDvcwJpJR9G8clbdzwzOZqBCs2sn3P82mcsUavNLWeVcdedBh0GRN5h2iMaRTcYdvvx81kgasWHaCtsNYT3sTCSp4d3Xfoov8cUfbvDXncEmq%2FDT6DCcupc%2Bg9YXtiKmxJFyakj9Uc2cVsxLxTMR2h1Dc9uQILjTqyMgMUxDIaFtlkhrZaKiq%2FMqkvDt8xm4ZK6ennLOk8LSE%2F7ASnaCU3Gr8AlYp3g0YM8FkyJnPYVi%2BH3gm6MMyfjadThbGs4MXpBRO3TZ7iTh5vYTzr51tq3hSJL63qk%2FccQUg32Kg0yTRMrGnnP1a3Zx5gGfILEcX%2BupKzrnAzRVkKuv1utFsqkcq2J207HmCzXYfVodhgotL7nF6Ib3PY5UDTR8LhHh5EuVf5BX%2FYKIeOekfA4bYbtdP0%2FP42aeKijCcg63DBjqkARCAAKuWqJFduGqciSJYprgjzfykDIyW0BpAPXehitRstyDvmrzlixEXSWceCvIMZsz4qR%2B4jBQoGf8OabmOwqH6cwnG3wZQTI%2BABc501RJHQ%2BXiqciergJIFkBcQfthnWC3cc%2BELN4YEYuGu2us2wbiqgt%2B9nj47GaVme86OETgSC3qDxHP%2BGJXWsG5zPRBUfqekWmAPqy4fCZKkImlrifFGvAo&X-Amz-Signature=631c817bd266e3dc852890d82af4313edd7634b4ce4dfd19ec2d1ea8a0aaed1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FOKMRC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCulqnczyzEc6k5Bm1x1licBJIyDrGNEAtOqshLC67hzQIhALHGVvr8YNpBYwbBvaQ6nPXQsZQkMDZqL7i9wUS4iKXjKv8DCG0QABoMNjM3NDIzMTgzODA1IgwvEyh%2Fe4W8Oh0TpVMq3AOnYN3mkFcL1lR%2BEl3izDXwXVOv91RZdYUbV%2FSeoxGUzxUhAZtJxRDt%2F1T8%2FldOPR4NLAJJVxAJKlRYnBLdvOm0fMKO0qoziMr4Z9pZf%2F6EylWy%2FpPgQk1lDqEYgAQ780g6uXBYxdoBddM96wJjfM7uKgpwWET42Oyf0APS9n0NQHZPZ47sfO4Xi28wmP1BYiL3MITHU3HIHhxQF6NfebgZPg%2FNDvcwJpJR9G8clbdzwzOZqBCs2sn3P82mcsUavNLWeVcdedBh0GRN5h2iMaRTcYdvvx81kgasWHaCtsNYT3sTCSp4d3Xfoov8cUfbvDXncEmq%2FDT6DCcupc%2Bg9YXtiKmxJFyakj9Uc2cVsxLxTMR2h1Dc9uQILjTqyMgMUxDIaFtlkhrZaKiq%2FMqkvDt8xm4ZK6ennLOk8LSE%2F7ASnaCU3Gr8AlYp3g0YM8FkyJnPYVi%2BH3gm6MMyfjadThbGs4MXpBRO3TZ7iTh5vYTzr51tq3hSJL63qk%2FccQUg32Kg0yTRMrGnnP1a3Zx5gGfILEcX%2BupKzrnAzRVkKuv1utFsqkcq2J207HmCzXYfVodhgotL7nF6Ib3PY5UDTR8LhHh5EuVf5BX%2FYKIeOekfA4bYbtdP0%2FP42aeKijCcg63DBjqkARCAAKuWqJFduGqciSJYprgjzfykDIyW0BpAPXehitRstyDvmrzlixEXSWceCvIMZsz4qR%2B4jBQoGf8OabmOwqH6cwnG3wZQTI%2BABc501RJHQ%2BXiqciergJIFkBcQfthnWC3cc%2BELN4YEYuGu2us2wbiqgt%2B9nj47GaVme86OETgSC3qDxHP%2BGJXWsG5zPRBUfqekWmAPqy4fCZKkImlrifFGvAo&X-Amz-Signature=933253756c4a13d06c0e13d69f3de7b0b3e55c5c0e0152e34a2c64e572310e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FOKMRC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCulqnczyzEc6k5Bm1x1licBJIyDrGNEAtOqshLC67hzQIhALHGVvr8YNpBYwbBvaQ6nPXQsZQkMDZqL7i9wUS4iKXjKv8DCG0QABoMNjM3NDIzMTgzODA1IgwvEyh%2Fe4W8Oh0TpVMq3AOnYN3mkFcL1lR%2BEl3izDXwXVOv91RZdYUbV%2FSeoxGUzxUhAZtJxRDt%2F1T8%2FldOPR4NLAJJVxAJKlRYnBLdvOm0fMKO0qoziMr4Z9pZf%2F6EylWy%2FpPgQk1lDqEYgAQ780g6uXBYxdoBddM96wJjfM7uKgpwWET42Oyf0APS9n0NQHZPZ47sfO4Xi28wmP1BYiL3MITHU3HIHhxQF6NfebgZPg%2FNDvcwJpJR9G8clbdzwzOZqBCs2sn3P82mcsUavNLWeVcdedBh0GRN5h2iMaRTcYdvvx81kgasWHaCtsNYT3sTCSp4d3Xfoov8cUfbvDXncEmq%2FDT6DCcupc%2Bg9YXtiKmxJFyakj9Uc2cVsxLxTMR2h1Dc9uQILjTqyMgMUxDIaFtlkhrZaKiq%2FMqkvDt8xm4ZK6ennLOk8LSE%2F7ASnaCU3Gr8AlYp3g0YM8FkyJnPYVi%2BH3gm6MMyfjadThbGs4MXpBRO3TZ7iTh5vYTzr51tq3hSJL63qk%2FccQUg32Kg0yTRMrGnnP1a3Zx5gGfILEcX%2BupKzrnAzRVkKuv1utFsqkcq2J207HmCzXYfVodhgotL7nF6Ib3PY5UDTR8LhHh5EuVf5BX%2FYKIeOekfA4bYbtdP0%2FP42aeKijCcg63DBjqkARCAAKuWqJFduGqciSJYprgjzfykDIyW0BpAPXehitRstyDvmrzlixEXSWceCvIMZsz4qR%2B4jBQoGf8OabmOwqH6cwnG3wZQTI%2BABc501RJHQ%2BXiqciergJIFkBcQfthnWC3cc%2BELN4YEYuGu2us2wbiqgt%2B9nj47GaVme86OETgSC3qDxHP%2BGJXWsG5zPRBUfqekWmAPqy4fCZKkImlrifFGvAo&X-Amz-Signature=f21ca08ca30184008c685d8a10dfcc5da30ff641493475299607d6712e9951a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FOKMRC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCulqnczyzEc6k5Bm1x1licBJIyDrGNEAtOqshLC67hzQIhALHGVvr8YNpBYwbBvaQ6nPXQsZQkMDZqL7i9wUS4iKXjKv8DCG0QABoMNjM3NDIzMTgzODA1IgwvEyh%2Fe4W8Oh0TpVMq3AOnYN3mkFcL1lR%2BEl3izDXwXVOv91RZdYUbV%2FSeoxGUzxUhAZtJxRDt%2F1T8%2FldOPR4NLAJJVxAJKlRYnBLdvOm0fMKO0qoziMr4Z9pZf%2F6EylWy%2FpPgQk1lDqEYgAQ780g6uXBYxdoBddM96wJjfM7uKgpwWET42Oyf0APS9n0NQHZPZ47sfO4Xi28wmP1BYiL3MITHU3HIHhxQF6NfebgZPg%2FNDvcwJpJR9G8clbdzwzOZqBCs2sn3P82mcsUavNLWeVcdedBh0GRN5h2iMaRTcYdvvx81kgasWHaCtsNYT3sTCSp4d3Xfoov8cUfbvDXncEmq%2FDT6DCcupc%2Bg9YXtiKmxJFyakj9Uc2cVsxLxTMR2h1Dc9uQILjTqyMgMUxDIaFtlkhrZaKiq%2FMqkvDt8xm4ZK6ennLOk8LSE%2F7ASnaCU3Gr8AlYp3g0YM8FkyJnPYVi%2BH3gm6MMyfjadThbGs4MXpBRO3TZ7iTh5vYTzr51tq3hSJL63qk%2FccQUg32Kg0yTRMrGnnP1a3Zx5gGfILEcX%2BupKzrnAzRVkKuv1utFsqkcq2J207HmCzXYfVodhgotL7nF6Ib3PY5UDTR8LhHh5EuVf5BX%2FYKIeOekfA4bYbtdP0%2FP42aeKijCcg63DBjqkARCAAKuWqJFduGqciSJYprgjzfykDIyW0BpAPXehitRstyDvmrzlixEXSWceCvIMZsz4qR%2B4jBQoGf8OabmOwqH6cwnG3wZQTI%2BABc501RJHQ%2BXiqciergJIFkBcQfthnWC3cc%2BELN4YEYuGu2us2wbiqgt%2B9nj47GaVme86OETgSC3qDxHP%2BGJXWsG5zPRBUfqekWmAPqy4fCZKkImlrifFGvAo&X-Amz-Signature=ab54fc654bdd850d6dfbf75d103f4489d31c02e1d7b72db9985e86980e90b4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FOKMRC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCulqnczyzEc6k5Bm1x1licBJIyDrGNEAtOqshLC67hzQIhALHGVvr8YNpBYwbBvaQ6nPXQsZQkMDZqL7i9wUS4iKXjKv8DCG0QABoMNjM3NDIzMTgzODA1IgwvEyh%2Fe4W8Oh0TpVMq3AOnYN3mkFcL1lR%2BEl3izDXwXVOv91RZdYUbV%2FSeoxGUzxUhAZtJxRDt%2F1T8%2FldOPR4NLAJJVxAJKlRYnBLdvOm0fMKO0qoziMr4Z9pZf%2F6EylWy%2FpPgQk1lDqEYgAQ780g6uXBYxdoBddM96wJjfM7uKgpwWET42Oyf0APS9n0NQHZPZ47sfO4Xi28wmP1BYiL3MITHU3HIHhxQF6NfebgZPg%2FNDvcwJpJR9G8clbdzwzOZqBCs2sn3P82mcsUavNLWeVcdedBh0GRN5h2iMaRTcYdvvx81kgasWHaCtsNYT3sTCSp4d3Xfoov8cUfbvDXncEmq%2FDT6DCcupc%2Bg9YXtiKmxJFyakj9Uc2cVsxLxTMR2h1Dc9uQILjTqyMgMUxDIaFtlkhrZaKiq%2FMqkvDt8xm4ZK6ennLOk8LSE%2F7ASnaCU3Gr8AlYp3g0YM8FkyJnPYVi%2BH3gm6MMyfjadThbGs4MXpBRO3TZ7iTh5vYTzr51tq3hSJL63qk%2FccQUg32Kg0yTRMrGnnP1a3Zx5gGfILEcX%2BupKzrnAzRVkKuv1utFsqkcq2J207HmCzXYfVodhgotL7nF6Ib3PY5UDTR8LhHh5EuVf5BX%2FYKIeOekfA4bYbtdP0%2FP42aeKijCcg63DBjqkARCAAKuWqJFduGqciSJYprgjzfykDIyW0BpAPXehitRstyDvmrzlixEXSWceCvIMZsz4qR%2B4jBQoGf8OabmOwqH6cwnG3wZQTI%2BABc501RJHQ%2BXiqciergJIFkBcQfthnWC3cc%2BELN4YEYuGu2us2wbiqgt%2B9nj47GaVme86OETgSC3qDxHP%2BGJXWsG5zPRBUfqekWmAPqy4fCZKkImlrifFGvAo&X-Amz-Signature=d6b239259163d939a5a7f06a57850bacedfabf8465fb320339251d28aa41f24b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
