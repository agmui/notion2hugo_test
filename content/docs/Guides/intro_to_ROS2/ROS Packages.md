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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREXI7SQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjzNmuc98Ae3ryZIrVMRErT%2F%2FOGuRODk1y%2BcL7hndwKAiEA7AtX3JgEPnMIZ2O3gxdbtd1pJ49xG6Si%2BfVS5Wbnb5UqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEstT6kxG76hpaVKlSrcAz2G%2FWSIJvxhbW9xep%2By%2BkyHs2MWNjvs94UoCzGJw1YoRFaEWnunz7Wp9%2BMWUoXHjWlRgtC6gAEU1JTJq6SZ5tNmWk3Q22PDccTFmUblglPo6UltUGn7ttgcqVa6WfnW7B7Qby5nmdlfj335ezLg1IPPfJdx%2FflzJ8rOJwkX%2BzMpfXk0EWn1s7hPnR%2BzTKU%2BnaUQtwBmX2XpBkYFQm95LFuuCgMmGqRWtCpWSw6yI2HB0Is4t9x3r3GEF7Gh3siyuJd1gYeetveqaMGBIydFydK0XdCiI7e2k%2Bt0JJSBJQEGEUYZnADc9Mrwwl%2BaDXTHKrlj0v8k%2B8roQPjovu7nu2juX0i%2F1O8zTEgWSG5ktPNHavNbKjdAAedxuGU442uYEXtDKNwS7eQZGplCwiriqXfPuMEtjGDNDxJyFpmtjcSCkkvrJ3gls1Vm%2FMF9f4qsOayzooMqHaRWhsAV6fG14Mu4JbSL%2BswEYABNa%2F%2BiZ0q2WVtcCdUqoCzmEI%2BmOaQjzMYGauYSzvk94KmtiIjTr8lIRmC7kYOclArCPQWmygAQmJGiPrcH91cn%2Btw3SX7xU%2BxomSXwlSRaousUWzz8VYgXSZlW8q7AGvLiWyNFWwJvAT9%2Bew00ts7Hli7mMO%2By3b0GOqUBV1VXDHWyKkW%2F5aaC51ZJYF5iVhwn7cnSz9CiJrHhTev7BKVvSu%2Bzhs%2FsWmb1CjQbulc0W2ybBZogM2209vSSSHwUB33iCCzhtZRnD4bJ%2Fr5m0Z4MaMx%2F1%2B8Z58aSfhPJQ6dSNx9TOvHWYJsERDxjUScH0tUNlTYDVYOw7Qst67k4w%2BmXGHxrxwcLk0W0p5EDjX%2BDCs6RiBWDT4Jp1zLDfQZySqTd&X-Amz-Signature=59d1e1500f7b57809d4f27b8d4c628dca92649467e5f6781bbe918a614f21fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREXI7SQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjzNmuc98Ae3ryZIrVMRErT%2F%2FOGuRODk1y%2BcL7hndwKAiEA7AtX3JgEPnMIZ2O3gxdbtd1pJ49xG6Si%2BfVS5Wbnb5UqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEstT6kxG76hpaVKlSrcAz2G%2FWSIJvxhbW9xep%2By%2BkyHs2MWNjvs94UoCzGJw1YoRFaEWnunz7Wp9%2BMWUoXHjWlRgtC6gAEU1JTJq6SZ5tNmWk3Q22PDccTFmUblglPo6UltUGn7ttgcqVa6WfnW7B7Qby5nmdlfj335ezLg1IPPfJdx%2FflzJ8rOJwkX%2BzMpfXk0EWn1s7hPnR%2BzTKU%2BnaUQtwBmX2XpBkYFQm95LFuuCgMmGqRWtCpWSw6yI2HB0Is4t9x3r3GEF7Gh3siyuJd1gYeetveqaMGBIydFydK0XdCiI7e2k%2Bt0JJSBJQEGEUYZnADc9Mrwwl%2BaDXTHKrlj0v8k%2B8roQPjovu7nu2juX0i%2F1O8zTEgWSG5ktPNHavNbKjdAAedxuGU442uYEXtDKNwS7eQZGplCwiriqXfPuMEtjGDNDxJyFpmtjcSCkkvrJ3gls1Vm%2FMF9f4qsOayzooMqHaRWhsAV6fG14Mu4JbSL%2BswEYABNa%2F%2BiZ0q2WVtcCdUqoCzmEI%2BmOaQjzMYGauYSzvk94KmtiIjTr8lIRmC7kYOclArCPQWmygAQmJGiPrcH91cn%2Btw3SX7xU%2BxomSXwlSRaousUWzz8VYgXSZlW8q7AGvLiWyNFWwJvAT9%2Bew00ts7Hli7mMO%2By3b0GOqUBV1VXDHWyKkW%2F5aaC51ZJYF5iVhwn7cnSz9CiJrHhTev7BKVvSu%2Bzhs%2FsWmb1CjQbulc0W2ybBZogM2209vSSSHwUB33iCCzhtZRnD4bJ%2Fr5m0Z4MaMx%2F1%2B8Z58aSfhPJQ6dSNx9TOvHWYJsERDxjUScH0tUNlTYDVYOw7Qst67k4w%2BmXGHxrxwcLk0W0p5EDjX%2BDCs6RiBWDT4Jp1zLDfQZySqTd&X-Amz-Signature=6659f1aae32270889db3c0a39a1a08ba9b6165514842fb4673f06cd0ed47c1a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREXI7SQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjzNmuc98Ae3ryZIrVMRErT%2F%2FOGuRODk1y%2BcL7hndwKAiEA7AtX3JgEPnMIZ2O3gxdbtd1pJ49xG6Si%2BfVS5Wbnb5UqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEstT6kxG76hpaVKlSrcAz2G%2FWSIJvxhbW9xep%2By%2BkyHs2MWNjvs94UoCzGJw1YoRFaEWnunz7Wp9%2BMWUoXHjWlRgtC6gAEU1JTJq6SZ5tNmWk3Q22PDccTFmUblglPo6UltUGn7ttgcqVa6WfnW7B7Qby5nmdlfj335ezLg1IPPfJdx%2FflzJ8rOJwkX%2BzMpfXk0EWn1s7hPnR%2BzTKU%2BnaUQtwBmX2XpBkYFQm95LFuuCgMmGqRWtCpWSw6yI2HB0Is4t9x3r3GEF7Gh3siyuJd1gYeetveqaMGBIydFydK0XdCiI7e2k%2Bt0JJSBJQEGEUYZnADc9Mrwwl%2BaDXTHKrlj0v8k%2B8roQPjovu7nu2juX0i%2F1O8zTEgWSG5ktPNHavNbKjdAAedxuGU442uYEXtDKNwS7eQZGplCwiriqXfPuMEtjGDNDxJyFpmtjcSCkkvrJ3gls1Vm%2FMF9f4qsOayzooMqHaRWhsAV6fG14Mu4JbSL%2BswEYABNa%2F%2BiZ0q2WVtcCdUqoCzmEI%2BmOaQjzMYGauYSzvk94KmtiIjTr8lIRmC7kYOclArCPQWmygAQmJGiPrcH91cn%2Btw3SX7xU%2BxomSXwlSRaousUWzz8VYgXSZlW8q7AGvLiWyNFWwJvAT9%2Bew00ts7Hli7mMO%2By3b0GOqUBV1VXDHWyKkW%2F5aaC51ZJYF5iVhwn7cnSz9CiJrHhTev7BKVvSu%2Bzhs%2FsWmb1CjQbulc0W2ybBZogM2209vSSSHwUB33iCCzhtZRnD4bJ%2Fr5m0Z4MaMx%2F1%2B8Z58aSfhPJQ6dSNx9TOvHWYJsERDxjUScH0tUNlTYDVYOw7Qst67k4w%2BmXGHxrxwcLk0W0p5EDjX%2BDCs6RiBWDT4Jp1zLDfQZySqTd&X-Amz-Signature=0b640206f777cddf9e9999e44a0c3337f40eedc43807a2565ebd5c9e60b8ffe3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREXI7SQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjzNmuc98Ae3ryZIrVMRErT%2F%2FOGuRODk1y%2BcL7hndwKAiEA7AtX3JgEPnMIZ2O3gxdbtd1pJ49xG6Si%2BfVS5Wbnb5UqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEstT6kxG76hpaVKlSrcAz2G%2FWSIJvxhbW9xep%2By%2BkyHs2MWNjvs94UoCzGJw1YoRFaEWnunz7Wp9%2BMWUoXHjWlRgtC6gAEU1JTJq6SZ5tNmWk3Q22PDccTFmUblglPo6UltUGn7ttgcqVa6WfnW7B7Qby5nmdlfj335ezLg1IPPfJdx%2FflzJ8rOJwkX%2BzMpfXk0EWn1s7hPnR%2BzTKU%2BnaUQtwBmX2XpBkYFQm95LFuuCgMmGqRWtCpWSw6yI2HB0Is4t9x3r3GEF7Gh3siyuJd1gYeetveqaMGBIydFydK0XdCiI7e2k%2Bt0JJSBJQEGEUYZnADc9Mrwwl%2BaDXTHKrlj0v8k%2B8roQPjovu7nu2juX0i%2F1O8zTEgWSG5ktPNHavNbKjdAAedxuGU442uYEXtDKNwS7eQZGplCwiriqXfPuMEtjGDNDxJyFpmtjcSCkkvrJ3gls1Vm%2FMF9f4qsOayzooMqHaRWhsAV6fG14Mu4JbSL%2BswEYABNa%2F%2BiZ0q2WVtcCdUqoCzmEI%2BmOaQjzMYGauYSzvk94KmtiIjTr8lIRmC7kYOclArCPQWmygAQmJGiPrcH91cn%2Btw3SX7xU%2BxomSXwlSRaousUWzz8VYgXSZlW8q7AGvLiWyNFWwJvAT9%2Bew00ts7Hli7mMO%2By3b0GOqUBV1VXDHWyKkW%2F5aaC51ZJYF5iVhwn7cnSz9CiJrHhTev7BKVvSu%2Bzhs%2FsWmb1CjQbulc0W2ybBZogM2209vSSSHwUB33iCCzhtZRnD4bJ%2Fr5m0Z4MaMx%2F1%2B8Z58aSfhPJQ6dSNx9TOvHWYJsERDxjUScH0tUNlTYDVYOw7Qst67k4w%2BmXGHxrxwcLk0W0p5EDjX%2BDCs6RiBWDT4Jp1zLDfQZySqTd&X-Amz-Signature=54e7f4b26344de26f06846376b3426794e04b18449d18ef8ad31c961c71d7d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREXI7SQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjzNmuc98Ae3ryZIrVMRErT%2F%2FOGuRODk1y%2BcL7hndwKAiEA7AtX3JgEPnMIZ2O3gxdbtd1pJ49xG6Si%2BfVS5Wbnb5UqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEstT6kxG76hpaVKlSrcAz2G%2FWSIJvxhbW9xep%2By%2BkyHs2MWNjvs94UoCzGJw1YoRFaEWnunz7Wp9%2BMWUoXHjWlRgtC6gAEU1JTJq6SZ5tNmWk3Q22PDccTFmUblglPo6UltUGn7ttgcqVa6WfnW7B7Qby5nmdlfj335ezLg1IPPfJdx%2FflzJ8rOJwkX%2BzMpfXk0EWn1s7hPnR%2BzTKU%2BnaUQtwBmX2XpBkYFQm95LFuuCgMmGqRWtCpWSw6yI2HB0Is4t9x3r3GEF7Gh3siyuJd1gYeetveqaMGBIydFydK0XdCiI7e2k%2Bt0JJSBJQEGEUYZnADc9Mrwwl%2BaDXTHKrlj0v8k%2B8roQPjovu7nu2juX0i%2F1O8zTEgWSG5ktPNHavNbKjdAAedxuGU442uYEXtDKNwS7eQZGplCwiriqXfPuMEtjGDNDxJyFpmtjcSCkkvrJ3gls1Vm%2FMF9f4qsOayzooMqHaRWhsAV6fG14Mu4JbSL%2BswEYABNa%2F%2BiZ0q2WVtcCdUqoCzmEI%2BmOaQjzMYGauYSzvk94KmtiIjTr8lIRmC7kYOclArCPQWmygAQmJGiPrcH91cn%2Btw3SX7xU%2BxomSXwlSRaousUWzz8VYgXSZlW8q7AGvLiWyNFWwJvAT9%2Bew00ts7Hli7mMO%2By3b0GOqUBV1VXDHWyKkW%2F5aaC51ZJYF5iVhwn7cnSz9CiJrHhTev7BKVvSu%2Bzhs%2FsWmb1CjQbulc0W2ybBZogM2209vSSSHwUB33iCCzhtZRnD4bJ%2Fr5m0Z4MaMx%2F1%2B8Z58aSfhPJQ6dSNx9TOvHWYJsERDxjUScH0tUNlTYDVYOw7Qst67k4w%2BmXGHxrxwcLk0W0p5EDjX%2BDCs6RiBWDT4Jp1zLDfQZySqTd&X-Amz-Signature=192190a09da6e4e5d3e4cb5c7ef8618d422814697dde27fb9a80232f39e8fdac&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREXI7SQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjzNmuc98Ae3ryZIrVMRErT%2F%2FOGuRODk1y%2BcL7hndwKAiEA7AtX3JgEPnMIZ2O3gxdbtd1pJ49xG6Si%2BfVS5Wbnb5UqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEstT6kxG76hpaVKlSrcAz2G%2FWSIJvxhbW9xep%2By%2BkyHs2MWNjvs94UoCzGJw1YoRFaEWnunz7Wp9%2BMWUoXHjWlRgtC6gAEU1JTJq6SZ5tNmWk3Q22PDccTFmUblglPo6UltUGn7ttgcqVa6WfnW7B7Qby5nmdlfj335ezLg1IPPfJdx%2FflzJ8rOJwkX%2BzMpfXk0EWn1s7hPnR%2BzTKU%2BnaUQtwBmX2XpBkYFQm95LFuuCgMmGqRWtCpWSw6yI2HB0Is4t9x3r3GEF7Gh3siyuJd1gYeetveqaMGBIydFydK0XdCiI7e2k%2Bt0JJSBJQEGEUYZnADc9Mrwwl%2BaDXTHKrlj0v8k%2B8roQPjovu7nu2juX0i%2F1O8zTEgWSG5ktPNHavNbKjdAAedxuGU442uYEXtDKNwS7eQZGplCwiriqXfPuMEtjGDNDxJyFpmtjcSCkkvrJ3gls1Vm%2FMF9f4qsOayzooMqHaRWhsAV6fG14Mu4JbSL%2BswEYABNa%2F%2BiZ0q2WVtcCdUqoCzmEI%2BmOaQjzMYGauYSzvk94KmtiIjTr8lIRmC7kYOclArCPQWmygAQmJGiPrcH91cn%2Btw3SX7xU%2BxomSXwlSRaousUWzz8VYgXSZlW8q7AGvLiWyNFWwJvAT9%2Bew00ts7Hli7mMO%2By3b0GOqUBV1VXDHWyKkW%2F5aaC51ZJYF5iVhwn7cnSz9CiJrHhTev7BKVvSu%2Bzhs%2FsWmb1CjQbulc0W2ybBZogM2209vSSSHwUB33iCCzhtZRnD4bJ%2Fr5m0Z4MaMx%2F1%2B8Z58aSfhPJQ6dSNx9TOvHWYJsERDxjUScH0tUNlTYDVYOw7Qst67k4w%2BmXGHxrxwcLk0W0p5EDjX%2BDCs6RiBWDT4Jp1zLDfQZySqTd&X-Amz-Signature=ccf85c50b7dc2f24ddaad933c2da2a882728bf8234ba67c86d22267d6d2b05c6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREXI7SQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjzNmuc98Ae3ryZIrVMRErT%2F%2FOGuRODk1y%2BcL7hndwKAiEA7AtX3JgEPnMIZ2O3gxdbtd1pJ49xG6Si%2BfVS5Wbnb5UqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEstT6kxG76hpaVKlSrcAz2G%2FWSIJvxhbW9xep%2By%2BkyHs2MWNjvs94UoCzGJw1YoRFaEWnunz7Wp9%2BMWUoXHjWlRgtC6gAEU1JTJq6SZ5tNmWk3Q22PDccTFmUblglPo6UltUGn7ttgcqVa6WfnW7B7Qby5nmdlfj335ezLg1IPPfJdx%2FflzJ8rOJwkX%2BzMpfXk0EWn1s7hPnR%2BzTKU%2BnaUQtwBmX2XpBkYFQm95LFuuCgMmGqRWtCpWSw6yI2HB0Is4t9x3r3GEF7Gh3siyuJd1gYeetveqaMGBIydFydK0XdCiI7e2k%2Bt0JJSBJQEGEUYZnADc9Mrwwl%2BaDXTHKrlj0v8k%2B8roQPjovu7nu2juX0i%2F1O8zTEgWSG5ktPNHavNbKjdAAedxuGU442uYEXtDKNwS7eQZGplCwiriqXfPuMEtjGDNDxJyFpmtjcSCkkvrJ3gls1Vm%2FMF9f4qsOayzooMqHaRWhsAV6fG14Mu4JbSL%2BswEYABNa%2F%2BiZ0q2WVtcCdUqoCzmEI%2BmOaQjzMYGauYSzvk94KmtiIjTr8lIRmC7kYOclArCPQWmygAQmJGiPrcH91cn%2Btw3SX7xU%2BxomSXwlSRaousUWzz8VYgXSZlW8q7AGvLiWyNFWwJvAT9%2Bew00ts7Hli7mMO%2By3b0GOqUBV1VXDHWyKkW%2F5aaC51ZJYF5iVhwn7cnSz9CiJrHhTev7BKVvSu%2Bzhs%2FsWmb1CjQbulc0W2ybBZogM2209vSSSHwUB33iCCzhtZRnD4bJ%2Fr5m0Z4MaMx%2F1%2B8Z58aSfhPJQ6dSNx9TOvHWYJsERDxjUScH0tUNlTYDVYOw7Qst67k4w%2BmXGHxrxwcLk0W0p5EDjX%2BDCs6RiBWDT4Jp1zLDfQZySqTd&X-Amz-Signature=afc3c734856fc1aa6c01bf464be4ad65f642992028315d1913bd07d1de2707ec&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
