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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFIK6XN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPLJhFNIvBpzk2ouKYbC18SY5WiJBxiqVMkSOS70jjhAiATl%2BxJaUxu9qBq00n5d%2B3DrMSxJ2dnl50h5V0V3LNlGiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRH%2F%2F6qv26w8uS%2BXfKtwD8%2FQESjYtXBWLHVse5Zcj3m4jQMDqY5JTBKHn2H6inN5Z6jnEazDw25MnU%2BXNoTRs9HEnTxMdULZnkv3YNNFDD%2BsXpXHFqET3lQBh5a01e%2FXNAWpqeCS2jJCcMoUPD3Ti1x0bgWEIMmZhPwxx%2FedmEiw3kgW4oP7cVeHmwQmQezikulwj0WBo1IoauGpgK3ivs2g3iThnL%2BlXBkhQiWHhIicFrYu6jeNYUatFoKLF4vtjIVZX0lRiT%2FUdh9gylUNsLNpaREMwWB8Y%2FcztFNH%2BenETOLn1c5FgDmWLDwpim1ZjZxyHhIjpfw0YmBm%2BLPNQ9rRpCmvmlZUmeO1nyekv4pj5s2Ud8EXMJzhmppCwVzKBWeQN9kNdMDgcbqxr1tjvR5NsIJBqh3zgQ4sKVcIrF1k6egrQLv9fpRhiRknSApvJjapRXVEYiyvS4XtA%2By727xIU1pSIuxkYHmbDus15o3qCkg3Rbw9V12lKaq3EMv8%2Fv2T2I%2BLHYzMZLQn9bUgJcQnw0bJygsDHit%2FX0vNtIvJxo76noHC9zRSLJaGF1OFvE%2BumCkhjoG%2Bs1GVSfP4SvKC4Gvp37KEGiXIE0gkb%2BHaQ%2F0hymqwKu7vSGYTpSSuupkyr2gLKBZMFkdowx5WIvwY6pgHOEkpOQFRngpoKv7s7mP%2BKTvC4x%2F80XbOx10Ekp4qpE1OlJKc1yiXF0c63dSh3v1U%2FlMxaUOcVwLM2KvgxYN0RE7r%2Bn%2BI6ESF1DOAyb4q6OKev2tvTHA0MmVh3JfBf%2B1q5iQ6kmL9MpxrbJD55CJdM6m6GfgLp2hxTcR%2FeiXXeTtU4hzKJH4uDhxZ%2FQFhKNifcmmmqE23V46yu%2BwiXN%2BlaJO632T70&X-Amz-Signature=ce7727fe832e0dc4a7e6079f53c02db353086e36779be7408ee755720d61868a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFIK6XN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPLJhFNIvBpzk2ouKYbC18SY5WiJBxiqVMkSOS70jjhAiATl%2BxJaUxu9qBq00n5d%2B3DrMSxJ2dnl50h5V0V3LNlGiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRH%2F%2F6qv26w8uS%2BXfKtwD8%2FQESjYtXBWLHVse5Zcj3m4jQMDqY5JTBKHn2H6inN5Z6jnEazDw25MnU%2BXNoTRs9HEnTxMdULZnkv3YNNFDD%2BsXpXHFqET3lQBh5a01e%2FXNAWpqeCS2jJCcMoUPD3Ti1x0bgWEIMmZhPwxx%2FedmEiw3kgW4oP7cVeHmwQmQezikulwj0WBo1IoauGpgK3ivs2g3iThnL%2BlXBkhQiWHhIicFrYu6jeNYUatFoKLF4vtjIVZX0lRiT%2FUdh9gylUNsLNpaREMwWB8Y%2FcztFNH%2BenETOLn1c5FgDmWLDwpim1ZjZxyHhIjpfw0YmBm%2BLPNQ9rRpCmvmlZUmeO1nyekv4pj5s2Ud8EXMJzhmppCwVzKBWeQN9kNdMDgcbqxr1tjvR5NsIJBqh3zgQ4sKVcIrF1k6egrQLv9fpRhiRknSApvJjapRXVEYiyvS4XtA%2By727xIU1pSIuxkYHmbDus15o3qCkg3Rbw9V12lKaq3EMv8%2Fv2T2I%2BLHYzMZLQn9bUgJcQnw0bJygsDHit%2FX0vNtIvJxo76noHC9zRSLJaGF1OFvE%2BumCkhjoG%2Bs1GVSfP4SvKC4Gvp37KEGiXIE0gkb%2BHaQ%2F0hymqwKu7vSGYTpSSuupkyr2gLKBZMFkdowx5WIvwY6pgHOEkpOQFRngpoKv7s7mP%2BKTvC4x%2F80XbOx10Ekp4qpE1OlJKc1yiXF0c63dSh3v1U%2FlMxaUOcVwLM2KvgxYN0RE7r%2Bn%2BI6ESF1DOAyb4q6OKev2tvTHA0MmVh3JfBf%2B1q5iQ6kmL9MpxrbJD55CJdM6m6GfgLp2hxTcR%2FeiXXeTtU4hzKJH4uDhxZ%2FQFhKNifcmmmqE23V46yu%2BwiXN%2BlaJO632T70&X-Amz-Signature=13a6c940f5904c0f86337dc5d6a13d9c09de4470c0e6629056c8cbcc3e02eab6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFIK6XN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPLJhFNIvBpzk2ouKYbC18SY5WiJBxiqVMkSOS70jjhAiATl%2BxJaUxu9qBq00n5d%2B3DrMSxJ2dnl50h5V0V3LNlGiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRH%2F%2F6qv26w8uS%2BXfKtwD8%2FQESjYtXBWLHVse5Zcj3m4jQMDqY5JTBKHn2H6inN5Z6jnEazDw25MnU%2BXNoTRs9HEnTxMdULZnkv3YNNFDD%2BsXpXHFqET3lQBh5a01e%2FXNAWpqeCS2jJCcMoUPD3Ti1x0bgWEIMmZhPwxx%2FedmEiw3kgW4oP7cVeHmwQmQezikulwj0WBo1IoauGpgK3ivs2g3iThnL%2BlXBkhQiWHhIicFrYu6jeNYUatFoKLF4vtjIVZX0lRiT%2FUdh9gylUNsLNpaREMwWB8Y%2FcztFNH%2BenETOLn1c5FgDmWLDwpim1ZjZxyHhIjpfw0YmBm%2BLPNQ9rRpCmvmlZUmeO1nyekv4pj5s2Ud8EXMJzhmppCwVzKBWeQN9kNdMDgcbqxr1tjvR5NsIJBqh3zgQ4sKVcIrF1k6egrQLv9fpRhiRknSApvJjapRXVEYiyvS4XtA%2By727xIU1pSIuxkYHmbDus15o3qCkg3Rbw9V12lKaq3EMv8%2Fv2T2I%2BLHYzMZLQn9bUgJcQnw0bJygsDHit%2FX0vNtIvJxo76noHC9zRSLJaGF1OFvE%2BumCkhjoG%2Bs1GVSfP4SvKC4Gvp37KEGiXIE0gkb%2BHaQ%2F0hymqwKu7vSGYTpSSuupkyr2gLKBZMFkdowx5WIvwY6pgHOEkpOQFRngpoKv7s7mP%2BKTvC4x%2F80XbOx10Ekp4qpE1OlJKc1yiXF0c63dSh3v1U%2FlMxaUOcVwLM2KvgxYN0RE7r%2Bn%2BI6ESF1DOAyb4q6OKev2tvTHA0MmVh3JfBf%2B1q5iQ6kmL9MpxrbJD55CJdM6m6GfgLp2hxTcR%2FeiXXeTtU4hzKJH4uDhxZ%2FQFhKNifcmmmqE23V46yu%2BwiXN%2BlaJO632T70&X-Amz-Signature=7ba7e80ad2921264608d8e44640fcd40a918a998b273fb80168e1f33efa1f369&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFIK6XN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPLJhFNIvBpzk2ouKYbC18SY5WiJBxiqVMkSOS70jjhAiATl%2BxJaUxu9qBq00n5d%2B3DrMSxJ2dnl50h5V0V3LNlGiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRH%2F%2F6qv26w8uS%2BXfKtwD8%2FQESjYtXBWLHVse5Zcj3m4jQMDqY5JTBKHn2H6inN5Z6jnEazDw25MnU%2BXNoTRs9HEnTxMdULZnkv3YNNFDD%2BsXpXHFqET3lQBh5a01e%2FXNAWpqeCS2jJCcMoUPD3Ti1x0bgWEIMmZhPwxx%2FedmEiw3kgW4oP7cVeHmwQmQezikulwj0WBo1IoauGpgK3ivs2g3iThnL%2BlXBkhQiWHhIicFrYu6jeNYUatFoKLF4vtjIVZX0lRiT%2FUdh9gylUNsLNpaREMwWB8Y%2FcztFNH%2BenETOLn1c5FgDmWLDwpim1ZjZxyHhIjpfw0YmBm%2BLPNQ9rRpCmvmlZUmeO1nyekv4pj5s2Ud8EXMJzhmppCwVzKBWeQN9kNdMDgcbqxr1tjvR5NsIJBqh3zgQ4sKVcIrF1k6egrQLv9fpRhiRknSApvJjapRXVEYiyvS4XtA%2By727xIU1pSIuxkYHmbDus15o3qCkg3Rbw9V12lKaq3EMv8%2Fv2T2I%2BLHYzMZLQn9bUgJcQnw0bJygsDHit%2FX0vNtIvJxo76noHC9zRSLJaGF1OFvE%2BumCkhjoG%2Bs1GVSfP4SvKC4Gvp37KEGiXIE0gkb%2BHaQ%2F0hymqwKu7vSGYTpSSuupkyr2gLKBZMFkdowx5WIvwY6pgHOEkpOQFRngpoKv7s7mP%2BKTvC4x%2F80XbOx10Ekp4qpE1OlJKc1yiXF0c63dSh3v1U%2FlMxaUOcVwLM2KvgxYN0RE7r%2Bn%2BI6ESF1DOAyb4q6OKev2tvTHA0MmVh3JfBf%2B1q5iQ6kmL9MpxrbJD55CJdM6m6GfgLp2hxTcR%2FeiXXeTtU4hzKJH4uDhxZ%2FQFhKNifcmmmqE23V46yu%2BwiXN%2BlaJO632T70&X-Amz-Signature=fd5d1a732584a9cac584a18e556943a10972aa2c8c3c37bf2447abf4e67b25bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFIK6XN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPLJhFNIvBpzk2ouKYbC18SY5WiJBxiqVMkSOS70jjhAiATl%2BxJaUxu9qBq00n5d%2B3DrMSxJ2dnl50h5V0V3LNlGiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRH%2F%2F6qv26w8uS%2BXfKtwD8%2FQESjYtXBWLHVse5Zcj3m4jQMDqY5JTBKHn2H6inN5Z6jnEazDw25MnU%2BXNoTRs9HEnTxMdULZnkv3YNNFDD%2BsXpXHFqET3lQBh5a01e%2FXNAWpqeCS2jJCcMoUPD3Ti1x0bgWEIMmZhPwxx%2FedmEiw3kgW4oP7cVeHmwQmQezikulwj0WBo1IoauGpgK3ivs2g3iThnL%2BlXBkhQiWHhIicFrYu6jeNYUatFoKLF4vtjIVZX0lRiT%2FUdh9gylUNsLNpaREMwWB8Y%2FcztFNH%2BenETOLn1c5FgDmWLDwpim1ZjZxyHhIjpfw0YmBm%2BLPNQ9rRpCmvmlZUmeO1nyekv4pj5s2Ud8EXMJzhmppCwVzKBWeQN9kNdMDgcbqxr1tjvR5NsIJBqh3zgQ4sKVcIrF1k6egrQLv9fpRhiRknSApvJjapRXVEYiyvS4XtA%2By727xIU1pSIuxkYHmbDus15o3qCkg3Rbw9V12lKaq3EMv8%2Fv2T2I%2BLHYzMZLQn9bUgJcQnw0bJygsDHit%2FX0vNtIvJxo76noHC9zRSLJaGF1OFvE%2BumCkhjoG%2Bs1GVSfP4SvKC4Gvp37KEGiXIE0gkb%2BHaQ%2F0hymqwKu7vSGYTpSSuupkyr2gLKBZMFkdowx5WIvwY6pgHOEkpOQFRngpoKv7s7mP%2BKTvC4x%2F80XbOx10Ekp4qpE1OlJKc1yiXF0c63dSh3v1U%2FlMxaUOcVwLM2KvgxYN0RE7r%2Bn%2BI6ESF1DOAyb4q6OKev2tvTHA0MmVh3JfBf%2B1q5iQ6kmL9MpxrbJD55CJdM6m6GfgLp2hxTcR%2FeiXXeTtU4hzKJH4uDhxZ%2FQFhKNifcmmmqE23V46yu%2BwiXN%2BlaJO632T70&X-Amz-Signature=038ef75c24215ee50adb3f1871ca0f2441d27ccf30541331cd812693ffca65b5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFIK6XN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPLJhFNIvBpzk2ouKYbC18SY5WiJBxiqVMkSOS70jjhAiATl%2BxJaUxu9qBq00n5d%2B3DrMSxJ2dnl50h5V0V3LNlGiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRH%2F%2F6qv26w8uS%2BXfKtwD8%2FQESjYtXBWLHVse5Zcj3m4jQMDqY5JTBKHn2H6inN5Z6jnEazDw25MnU%2BXNoTRs9HEnTxMdULZnkv3YNNFDD%2BsXpXHFqET3lQBh5a01e%2FXNAWpqeCS2jJCcMoUPD3Ti1x0bgWEIMmZhPwxx%2FedmEiw3kgW4oP7cVeHmwQmQezikulwj0WBo1IoauGpgK3ivs2g3iThnL%2BlXBkhQiWHhIicFrYu6jeNYUatFoKLF4vtjIVZX0lRiT%2FUdh9gylUNsLNpaREMwWB8Y%2FcztFNH%2BenETOLn1c5FgDmWLDwpim1ZjZxyHhIjpfw0YmBm%2BLPNQ9rRpCmvmlZUmeO1nyekv4pj5s2Ud8EXMJzhmppCwVzKBWeQN9kNdMDgcbqxr1tjvR5NsIJBqh3zgQ4sKVcIrF1k6egrQLv9fpRhiRknSApvJjapRXVEYiyvS4XtA%2By727xIU1pSIuxkYHmbDus15o3qCkg3Rbw9V12lKaq3EMv8%2Fv2T2I%2BLHYzMZLQn9bUgJcQnw0bJygsDHit%2FX0vNtIvJxo76noHC9zRSLJaGF1OFvE%2BumCkhjoG%2Bs1GVSfP4SvKC4Gvp37KEGiXIE0gkb%2BHaQ%2F0hymqwKu7vSGYTpSSuupkyr2gLKBZMFkdowx5WIvwY6pgHOEkpOQFRngpoKv7s7mP%2BKTvC4x%2F80XbOx10Ekp4qpE1OlJKc1yiXF0c63dSh3v1U%2FlMxaUOcVwLM2KvgxYN0RE7r%2Bn%2BI6ESF1DOAyb4q6OKev2tvTHA0MmVh3JfBf%2B1q5iQ6kmL9MpxrbJD55CJdM6m6GfgLp2hxTcR%2FeiXXeTtU4hzKJH4uDhxZ%2FQFhKNifcmmmqE23V46yu%2BwiXN%2BlaJO632T70&X-Amz-Signature=6834fa214c8fe200a8943ce7ea71fa2ced3ae16ff3741ec571adcc878b793eb2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFIK6XN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPLJhFNIvBpzk2ouKYbC18SY5WiJBxiqVMkSOS70jjhAiATl%2BxJaUxu9qBq00n5d%2B3DrMSxJ2dnl50h5V0V3LNlGiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRH%2F%2F6qv26w8uS%2BXfKtwD8%2FQESjYtXBWLHVse5Zcj3m4jQMDqY5JTBKHn2H6inN5Z6jnEazDw25MnU%2BXNoTRs9HEnTxMdULZnkv3YNNFDD%2BsXpXHFqET3lQBh5a01e%2FXNAWpqeCS2jJCcMoUPD3Ti1x0bgWEIMmZhPwxx%2FedmEiw3kgW4oP7cVeHmwQmQezikulwj0WBo1IoauGpgK3ivs2g3iThnL%2BlXBkhQiWHhIicFrYu6jeNYUatFoKLF4vtjIVZX0lRiT%2FUdh9gylUNsLNpaREMwWB8Y%2FcztFNH%2BenETOLn1c5FgDmWLDwpim1ZjZxyHhIjpfw0YmBm%2BLPNQ9rRpCmvmlZUmeO1nyekv4pj5s2Ud8EXMJzhmppCwVzKBWeQN9kNdMDgcbqxr1tjvR5NsIJBqh3zgQ4sKVcIrF1k6egrQLv9fpRhiRknSApvJjapRXVEYiyvS4XtA%2By727xIU1pSIuxkYHmbDus15o3qCkg3Rbw9V12lKaq3EMv8%2Fv2T2I%2BLHYzMZLQn9bUgJcQnw0bJygsDHit%2FX0vNtIvJxo76noHC9zRSLJaGF1OFvE%2BumCkhjoG%2Bs1GVSfP4SvKC4Gvp37KEGiXIE0gkb%2BHaQ%2F0hymqwKu7vSGYTpSSuupkyr2gLKBZMFkdowx5WIvwY6pgHOEkpOQFRngpoKv7s7mP%2BKTvC4x%2F80XbOx10Ekp4qpE1OlJKc1yiXF0c63dSh3v1U%2FlMxaUOcVwLM2KvgxYN0RE7r%2Bn%2BI6ESF1DOAyb4q6OKev2tvTHA0MmVh3JfBf%2B1q5iQ6kmL9MpxrbJD55CJdM6m6GfgLp2hxTcR%2FeiXXeTtU4hzKJH4uDhxZ%2FQFhKNifcmmmqE23V46yu%2BwiXN%2BlaJO632T70&X-Amz-Signature=54c02207e336098650a918f890358c293ade6dfadf961bd6365583dce17bee4f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
