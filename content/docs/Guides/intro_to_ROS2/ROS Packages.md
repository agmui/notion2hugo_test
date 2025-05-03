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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RUEA3Z%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHIiyt5QhS7Lc2g8Yly%2BNcJFd5oaUXEcf5qAg3DwGdULAiEAi59RLAWlaeVxc4YYGw8orSVfeAbIVeHek1FWoeG4qXwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYqJzdVd26UDdOJuircA9BG7QRp3jlXQQiFH6Knhnxs1cqBxerjIkDvb%2B1tWms7XGpQKvGaczshs2JkDaButuYJ%2FG2NfgCtRCmiJoQfAa%2B8G05JRJQNk7MjMPwMAH0leHIropvYjb9Qb1S2Os067Vr3ZpCH4gQVNsjdDcdLx519HL%2Bq4ANXWX1i1aYA7ADooEDf%2BFLK7Cxc8to5NSG3AjUG9jBMqL0DDmgLD%2B5f75YsF%2BP9CUvJz4U%2FVkKBZHRbhbIQ6enUYYh%2F1usQi4OEt5I2tPV5ufql0TZrGnY9IX4g4BYqzH4uuWOBmXTzktVp4Lg8ttSGo70qRJ09qaQ551vUfSTB1D39Y771xHBGFip2X5rNWaRZrzqwiHA4%2Bsem6XlG0jX1AGuLPid3k6yqWXCKdjLdEjltKdGCXeOzRrjxxshxAGAbgLP7%2FRCwlyJhsP1JCjmUtdlXPoI1dlcr5KMtHNMgNrMgaCw%2FyJROP4X0fDsJi%2FQdKL90%2BkjPNzBXLyzWm8DNVgNpGHDf6PYFley7vARKJkfqgqOnwN5ZIODw5t9NFqaENRVWIMZcKvcAlUFIHb19OiHk2UxwKG7wUxEAdM7JQj%2Bsiqu3uvIq9U%2BGdmsfJEpOKOC9He1r2s7N54cxYbMJPa9zp0jzMImH1sAGOqUB6VXYhZnx8oygqvFMcjX1tsaN6aF3dmfxZWmMHrgDERawP9aoH%2Frh1cz7ERcruGshcQ%2FR7E5%2BxinPNSf1GuJYDmpaLxHFWT704i8I5oxQtlCfYoi7%2F64NQOF83MDAeGYCRWjLhyK2xunh%2FVrDdsyhCclRfGAXGSGg8AA5gKLG3v9mn3jrnRUPkgUtNds2RtNMop4%2FLoQFOSliWjJOwf2lUYocIVRU&X-Amz-Signature=1624389be3cb0ecae2feed64ca0d9fea864105816e6917e58759ac4b0fbf439a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RUEA3Z%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHIiyt5QhS7Lc2g8Yly%2BNcJFd5oaUXEcf5qAg3DwGdULAiEAi59RLAWlaeVxc4YYGw8orSVfeAbIVeHek1FWoeG4qXwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYqJzdVd26UDdOJuircA9BG7QRp3jlXQQiFH6Knhnxs1cqBxerjIkDvb%2B1tWms7XGpQKvGaczshs2JkDaButuYJ%2FG2NfgCtRCmiJoQfAa%2B8G05JRJQNk7MjMPwMAH0leHIropvYjb9Qb1S2Os067Vr3ZpCH4gQVNsjdDcdLx519HL%2Bq4ANXWX1i1aYA7ADooEDf%2BFLK7Cxc8to5NSG3AjUG9jBMqL0DDmgLD%2B5f75YsF%2BP9CUvJz4U%2FVkKBZHRbhbIQ6enUYYh%2F1usQi4OEt5I2tPV5ufql0TZrGnY9IX4g4BYqzH4uuWOBmXTzktVp4Lg8ttSGo70qRJ09qaQ551vUfSTB1D39Y771xHBGFip2X5rNWaRZrzqwiHA4%2Bsem6XlG0jX1AGuLPid3k6yqWXCKdjLdEjltKdGCXeOzRrjxxshxAGAbgLP7%2FRCwlyJhsP1JCjmUtdlXPoI1dlcr5KMtHNMgNrMgaCw%2FyJROP4X0fDsJi%2FQdKL90%2BkjPNzBXLyzWm8DNVgNpGHDf6PYFley7vARKJkfqgqOnwN5ZIODw5t9NFqaENRVWIMZcKvcAlUFIHb19OiHk2UxwKG7wUxEAdM7JQj%2Bsiqu3uvIq9U%2BGdmsfJEpOKOC9He1r2s7N54cxYbMJPa9zp0jzMImH1sAGOqUB6VXYhZnx8oygqvFMcjX1tsaN6aF3dmfxZWmMHrgDERawP9aoH%2Frh1cz7ERcruGshcQ%2FR7E5%2BxinPNSf1GuJYDmpaLxHFWT704i8I5oxQtlCfYoi7%2F64NQOF83MDAeGYCRWjLhyK2xunh%2FVrDdsyhCclRfGAXGSGg8AA5gKLG3v9mn3jrnRUPkgUtNds2RtNMop4%2FLoQFOSliWjJOwf2lUYocIVRU&X-Amz-Signature=978038b327150110de93db47997827d74320b859a9d17156c7445a4df9a04df8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RUEA3Z%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHIiyt5QhS7Lc2g8Yly%2BNcJFd5oaUXEcf5qAg3DwGdULAiEAi59RLAWlaeVxc4YYGw8orSVfeAbIVeHek1FWoeG4qXwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYqJzdVd26UDdOJuircA9BG7QRp3jlXQQiFH6Knhnxs1cqBxerjIkDvb%2B1tWms7XGpQKvGaczshs2JkDaButuYJ%2FG2NfgCtRCmiJoQfAa%2B8G05JRJQNk7MjMPwMAH0leHIropvYjb9Qb1S2Os067Vr3ZpCH4gQVNsjdDcdLx519HL%2Bq4ANXWX1i1aYA7ADooEDf%2BFLK7Cxc8to5NSG3AjUG9jBMqL0DDmgLD%2B5f75YsF%2BP9CUvJz4U%2FVkKBZHRbhbIQ6enUYYh%2F1usQi4OEt5I2tPV5ufql0TZrGnY9IX4g4BYqzH4uuWOBmXTzktVp4Lg8ttSGo70qRJ09qaQ551vUfSTB1D39Y771xHBGFip2X5rNWaRZrzqwiHA4%2Bsem6XlG0jX1AGuLPid3k6yqWXCKdjLdEjltKdGCXeOzRrjxxshxAGAbgLP7%2FRCwlyJhsP1JCjmUtdlXPoI1dlcr5KMtHNMgNrMgaCw%2FyJROP4X0fDsJi%2FQdKL90%2BkjPNzBXLyzWm8DNVgNpGHDf6PYFley7vARKJkfqgqOnwN5ZIODw5t9NFqaENRVWIMZcKvcAlUFIHb19OiHk2UxwKG7wUxEAdM7JQj%2Bsiqu3uvIq9U%2BGdmsfJEpOKOC9He1r2s7N54cxYbMJPa9zp0jzMImH1sAGOqUB6VXYhZnx8oygqvFMcjX1tsaN6aF3dmfxZWmMHrgDERawP9aoH%2Frh1cz7ERcruGshcQ%2FR7E5%2BxinPNSf1GuJYDmpaLxHFWT704i8I5oxQtlCfYoi7%2F64NQOF83MDAeGYCRWjLhyK2xunh%2FVrDdsyhCclRfGAXGSGg8AA5gKLG3v9mn3jrnRUPkgUtNds2RtNMop4%2FLoQFOSliWjJOwf2lUYocIVRU&X-Amz-Signature=5ec37424231e77fb7e05c2aa51d8202f0721c2a5428286196a549739c1671512&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RUEA3Z%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHIiyt5QhS7Lc2g8Yly%2BNcJFd5oaUXEcf5qAg3DwGdULAiEAi59RLAWlaeVxc4YYGw8orSVfeAbIVeHek1FWoeG4qXwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYqJzdVd26UDdOJuircA9BG7QRp3jlXQQiFH6Knhnxs1cqBxerjIkDvb%2B1tWms7XGpQKvGaczshs2JkDaButuYJ%2FG2NfgCtRCmiJoQfAa%2B8G05JRJQNk7MjMPwMAH0leHIropvYjb9Qb1S2Os067Vr3ZpCH4gQVNsjdDcdLx519HL%2Bq4ANXWX1i1aYA7ADooEDf%2BFLK7Cxc8to5NSG3AjUG9jBMqL0DDmgLD%2B5f75YsF%2BP9CUvJz4U%2FVkKBZHRbhbIQ6enUYYh%2F1usQi4OEt5I2tPV5ufql0TZrGnY9IX4g4BYqzH4uuWOBmXTzktVp4Lg8ttSGo70qRJ09qaQ551vUfSTB1D39Y771xHBGFip2X5rNWaRZrzqwiHA4%2Bsem6XlG0jX1AGuLPid3k6yqWXCKdjLdEjltKdGCXeOzRrjxxshxAGAbgLP7%2FRCwlyJhsP1JCjmUtdlXPoI1dlcr5KMtHNMgNrMgaCw%2FyJROP4X0fDsJi%2FQdKL90%2BkjPNzBXLyzWm8DNVgNpGHDf6PYFley7vARKJkfqgqOnwN5ZIODw5t9NFqaENRVWIMZcKvcAlUFIHb19OiHk2UxwKG7wUxEAdM7JQj%2Bsiqu3uvIq9U%2BGdmsfJEpOKOC9He1r2s7N54cxYbMJPa9zp0jzMImH1sAGOqUB6VXYhZnx8oygqvFMcjX1tsaN6aF3dmfxZWmMHrgDERawP9aoH%2Frh1cz7ERcruGshcQ%2FR7E5%2BxinPNSf1GuJYDmpaLxHFWT704i8I5oxQtlCfYoi7%2F64NQOF83MDAeGYCRWjLhyK2xunh%2FVrDdsyhCclRfGAXGSGg8AA5gKLG3v9mn3jrnRUPkgUtNds2RtNMop4%2FLoQFOSliWjJOwf2lUYocIVRU&X-Amz-Signature=ad627c1259b185647ef47e558e8c83464c0497339c463e319fe85acffcd1c699&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RUEA3Z%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHIiyt5QhS7Lc2g8Yly%2BNcJFd5oaUXEcf5qAg3DwGdULAiEAi59RLAWlaeVxc4YYGw8orSVfeAbIVeHek1FWoeG4qXwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYqJzdVd26UDdOJuircA9BG7QRp3jlXQQiFH6Knhnxs1cqBxerjIkDvb%2B1tWms7XGpQKvGaczshs2JkDaButuYJ%2FG2NfgCtRCmiJoQfAa%2B8G05JRJQNk7MjMPwMAH0leHIropvYjb9Qb1S2Os067Vr3ZpCH4gQVNsjdDcdLx519HL%2Bq4ANXWX1i1aYA7ADooEDf%2BFLK7Cxc8to5NSG3AjUG9jBMqL0DDmgLD%2B5f75YsF%2BP9CUvJz4U%2FVkKBZHRbhbIQ6enUYYh%2F1usQi4OEt5I2tPV5ufql0TZrGnY9IX4g4BYqzH4uuWOBmXTzktVp4Lg8ttSGo70qRJ09qaQ551vUfSTB1D39Y771xHBGFip2X5rNWaRZrzqwiHA4%2Bsem6XlG0jX1AGuLPid3k6yqWXCKdjLdEjltKdGCXeOzRrjxxshxAGAbgLP7%2FRCwlyJhsP1JCjmUtdlXPoI1dlcr5KMtHNMgNrMgaCw%2FyJROP4X0fDsJi%2FQdKL90%2BkjPNzBXLyzWm8DNVgNpGHDf6PYFley7vARKJkfqgqOnwN5ZIODw5t9NFqaENRVWIMZcKvcAlUFIHb19OiHk2UxwKG7wUxEAdM7JQj%2Bsiqu3uvIq9U%2BGdmsfJEpOKOC9He1r2s7N54cxYbMJPa9zp0jzMImH1sAGOqUB6VXYhZnx8oygqvFMcjX1tsaN6aF3dmfxZWmMHrgDERawP9aoH%2Frh1cz7ERcruGshcQ%2FR7E5%2BxinPNSf1GuJYDmpaLxHFWT704i8I5oxQtlCfYoi7%2F64NQOF83MDAeGYCRWjLhyK2xunh%2FVrDdsyhCclRfGAXGSGg8AA5gKLG3v9mn3jrnRUPkgUtNds2RtNMop4%2FLoQFOSliWjJOwf2lUYocIVRU&X-Amz-Signature=6087edf80b52dfb1a038bc58ae21332b342276c402e41a3b9ba63fdad10de115&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RUEA3Z%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHIiyt5QhS7Lc2g8Yly%2BNcJFd5oaUXEcf5qAg3DwGdULAiEAi59RLAWlaeVxc4YYGw8orSVfeAbIVeHek1FWoeG4qXwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYqJzdVd26UDdOJuircA9BG7QRp3jlXQQiFH6Knhnxs1cqBxerjIkDvb%2B1tWms7XGpQKvGaczshs2JkDaButuYJ%2FG2NfgCtRCmiJoQfAa%2B8G05JRJQNk7MjMPwMAH0leHIropvYjb9Qb1S2Os067Vr3ZpCH4gQVNsjdDcdLx519HL%2Bq4ANXWX1i1aYA7ADooEDf%2BFLK7Cxc8to5NSG3AjUG9jBMqL0DDmgLD%2B5f75YsF%2BP9CUvJz4U%2FVkKBZHRbhbIQ6enUYYh%2F1usQi4OEt5I2tPV5ufql0TZrGnY9IX4g4BYqzH4uuWOBmXTzktVp4Lg8ttSGo70qRJ09qaQ551vUfSTB1D39Y771xHBGFip2X5rNWaRZrzqwiHA4%2Bsem6XlG0jX1AGuLPid3k6yqWXCKdjLdEjltKdGCXeOzRrjxxshxAGAbgLP7%2FRCwlyJhsP1JCjmUtdlXPoI1dlcr5KMtHNMgNrMgaCw%2FyJROP4X0fDsJi%2FQdKL90%2BkjPNzBXLyzWm8DNVgNpGHDf6PYFley7vARKJkfqgqOnwN5ZIODw5t9NFqaENRVWIMZcKvcAlUFIHb19OiHk2UxwKG7wUxEAdM7JQj%2Bsiqu3uvIq9U%2BGdmsfJEpOKOC9He1r2s7N54cxYbMJPa9zp0jzMImH1sAGOqUB6VXYhZnx8oygqvFMcjX1tsaN6aF3dmfxZWmMHrgDERawP9aoH%2Frh1cz7ERcruGshcQ%2FR7E5%2BxinPNSf1GuJYDmpaLxHFWT704i8I5oxQtlCfYoi7%2F64NQOF83MDAeGYCRWjLhyK2xunh%2FVrDdsyhCclRfGAXGSGg8AA5gKLG3v9mn3jrnRUPkgUtNds2RtNMop4%2FLoQFOSliWjJOwf2lUYocIVRU&X-Amz-Signature=31801ba9566bbb4d02f41f64beb71d7c4f3240e91fa6da2e3b40172ac2961665&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RUEA3Z%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHIiyt5QhS7Lc2g8Yly%2BNcJFd5oaUXEcf5qAg3DwGdULAiEAi59RLAWlaeVxc4YYGw8orSVfeAbIVeHek1FWoeG4qXwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYqJzdVd26UDdOJuircA9BG7QRp3jlXQQiFH6Knhnxs1cqBxerjIkDvb%2B1tWms7XGpQKvGaczshs2JkDaButuYJ%2FG2NfgCtRCmiJoQfAa%2B8G05JRJQNk7MjMPwMAH0leHIropvYjb9Qb1S2Os067Vr3ZpCH4gQVNsjdDcdLx519HL%2Bq4ANXWX1i1aYA7ADooEDf%2BFLK7Cxc8to5NSG3AjUG9jBMqL0DDmgLD%2B5f75YsF%2BP9CUvJz4U%2FVkKBZHRbhbIQ6enUYYh%2F1usQi4OEt5I2tPV5ufql0TZrGnY9IX4g4BYqzH4uuWOBmXTzktVp4Lg8ttSGo70qRJ09qaQ551vUfSTB1D39Y771xHBGFip2X5rNWaRZrzqwiHA4%2Bsem6XlG0jX1AGuLPid3k6yqWXCKdjLdEjltKdGCXeOzRrjxxshxAGAbgLP7%2FRCwlyJhsP1JCjmUtdlXPoI1dlcr5KMtHNMgNrMgaCw%2FyJROP4X0fDsJi%2FQdKL90%2BkjPNzBXLyzWm8DNVgNpGHDf6PYFley7vARKJkfqgqOnwN5ZIODw5t9NFqaENRVWIMZcKvcAlUFIHb19OiHk2UxwKG7wUxEAdM7JQj%2Bsiqu3uvIq9U%2BGdmsfJEpOKOC9He1r2s7N54cxYbMJPa9zp0jzMImH1sAGOqUB6VXYhZnx8oygqvFMcjX1tsaN6aF3dmfxZWmMHrgDERawP9aoH%2Frh1cz7ERcruGshcQ%2FR7E5%2BxinPNSf1GuJYDmpaLxHFWT704i8I5oxQtlCfYoi7%2F64NQOF83MDAeGYCRWjLhyK2xunh%2FVrDdsyhCclRfGAXGSGg8AA5gKLG3v9mn3jrnRUPkgUtNds2RtNMop4%2FLoQFOSliWjJOwf2lUYocIVRU&X-Amz-Signature=a004199a0977968cd523c7ee0dfcc2c37cd7d418c2f93302947334e5644e5437&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
