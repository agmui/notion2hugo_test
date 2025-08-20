---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWSUE4L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMJIptK%2B1vhJMSj7Qi8hk%2BmrhgKpXj5fggkGstKPtpAIhAPMDvnXDUWPUhogJbluAnRBwcC5XiYg80r7TmWpyJPjaKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx54e8y3%2FpxSnJjgskq3AM0Y8YTLQ2YrD7lw8aj2GBATnKhAoj%2BqpMYdVS%2BxG6Ryy1pd4ClZ31LilisjtWn2IcI12bc0kN7E8QuEjOwOV2pLTjJe38Ti3hcfVItjOtIF2Hd8yH85lMh5jQVcnGps52ZPLOkBo96qxqSse3uQzrxedsDvfV0qbe8bPZ0RROJIf3wo1TEHmN5mAIBMK%2BjFtpX4IK%2FcHAv%2FBG8kJxet8MUUHi%2FS0s06iv10Z9VDcJiiN6vDobY2vus5hTlF0Of64d6wvHiIttpz0O4vQgEJ5fbr2L%2BfQLsZmE8nsO2N7LcAuLkePq5CD730W9L5FqTXmPwUgKTJ%2FxQBoir3WpVapjRf3IS4PEyUF4U%2BvzhUS%2BEf0nZlvQQfREVsGlGSAP%2BM7phhlazlOd6Y41zIJ2wdFOAw4EzKNsJCOJK0KkROU0E2f5kSRJB8B1qY9Ec3YGyVnJyJdCSS%2FSmhn1t%2BhNm1YeQs6UmTYKeFIPO5Rn5JqIDLX8Mkiz8LvUNjBUtoKTNhv5gZqBSLItDtTfW6SLyjxSIKw3aUmrGIqP2zvMfBXFQzAvpsOE7T3%2FbpTXTpeXhziSdlltvqLSt%2Bl5vUVuz1mPNM%2FWJcUAAOtwPK4rAqCqQGwbHc6gLAJQmei1iITDD%2BZXFBjqkAQ3Lg5Ao6OhYAjEwQJ0SnOak6%2BYP47fBXrV1jFlzAM8XzbwE0pd%2FgHEaUaoflY8ruCSga20%2FDXOvlrOn7xlHlKVE%2Bs7Z19qOgXQvEOWOh4Rj4OypwAwTD8Mrinyzef6u%2FgLjRo0r5Qq9LN0buy%2B1MQs7HjqVphVltgavbOYLZCmuNCgNpScBI8hJXeW5oT3UfkuGphE%2Br%2BDOSHGsBiqOPsjeEYSN&X-Amz-Signature=775e64f33c9b23cb5bcf10491715d9be31991d7d5d54f1be7dc7ea4ee101f108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWSUE4L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMJIptK%2B1vhJMSj7Qi8hk%2BmrhgKpXj5fggkGstKPtpAIhAPMDvnXDUWPUhogJbluAnRBwcC5XiYg80r7TmWpyJPjaKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx54e8y3%2FpxSnJjgskq3AM0Y8YTLQ2YrD7lw8aj2GBATnKhAoj%2BqpMYdVS%2BxG6Ryy1pd4ClZ31LilisjtWn2IcI12bc0kN7E8QuEjOwOV2pLTjJe38Ti3hcfVItjOtIF2Hd8yH85lMh5jQVcnGps52ZPLOkBo96qxqSse3uQzrxedsDvfV0qbe8bPZ0RROJIf3wo1TEHmN5mAIBMK%2BjFtpX4IK%2FcHAv%2FBG8kJxet8MUUHi%2FS0s06iv10Z9VDcJiiN6vDobY2vus5hTlF0Of64d6wvHiIttpz0O4vQgEJ5fbr2L%2BfQLsZmE8nsO2N7LcAuLkePq5CD730W9L5FqTXmPwUgKTJ%2FxQBoir3WpVapjRf3IS4PEyUF4U%2BvzhUS%2BEf0nZlvQQfREVsGlGSAP%2BM7phhlazlOd6Y41zIJ2wdFOAw4EzKNsJCOJK0KkROU0E2f5kSRJB8B1qY9Ec3YGyVnJyJdCSS%2FSmhn1t%2BhNm1YeQs6UmTYKeFIPO5Rn5JqIDLX8Mkiz8LvUNjBUtoKTNhv5gZqBSLItDtTfW6SLyjxSIKw3aUmrGIqP2zvMfBXFQzAvpsOE7T3%2FbpTXTpeXhziSdlltvqLSt%2Bl5vUVuz1mPNM%2FWJcUAAOtwPK4rAqCqQGwbHc6gLAJQmei1iITDD%2BZXFBjqkAQ3Lg5Ao6OhYAjEwQJ0SnOak6%2BYP47fBXrV1jFlzAM8XzbwE0pd%2FgHEaUaoflY8ruCSga20%2FDXOvlrOn7xlHlKVE%2Bs7Z19qOgXQvEOWOh4Rj4OypwAwTD8Mrinyzef6u%2FgLjRo0r5Qq9LN0buy%2B1MQs7HjqVphVltgavbOYLZCmuNCgNpScBI8hJXeW5oT3UfkuGphE%2Br%2BDOSHGsBiqOPsjeEYSN&X-Amz-Signature=e48fc3c4063712c0ccbe8f6bf4e58d4bdc18235ec9da1bf915d2c08b752334ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWSUE4L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMJIptK%2B1vhJMSj7Qi8hk%2BmrhgKpXj5fggkGstKPtpAIhAPMDvnXDUWPUhogJbluAnRBwcC5XiYg80r7TmWpyJPjaKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx54e8y3%2FpxSnJjgskq3AM0Y8YTLQ2YrD7lw8aj2GBATnKhAoj%2BqpMYdVS%2BxG6Ryy1pd4ClZ31LilisjtWn2IcI12bc0kN7E8QuEjOwOV2pLTjJe38Ti3hcfVItjOtIF2Hd8yH85lMh5jQVcnGps52ZPLOkBo96qxqSse3uQzrxedsDvfV0qbe8bPZ0RROJIf3wo1TEHmN5mAIBMK%2BjFtpX4IK%2FcHAv%2FBG8kJxet8MUUHi%2FS0s06iv10Z9VDcJiiN6vDobY2vus5hTlF0Of64d6wvHiIttpz0O4vQgEJ5fbr2L%2BfQLsZmE8nsO2N7LcAuLkePq5CD730W9L5FqTXmPwUgKTJ%2FxQBoir3WpVapjRf3IS4PEyUF4U%2BvzhUS%2BEf0nZlvQQfREVsGlGSAP%2BM7phhlazlOd6Y41zIJ2wdFOAw4EzKNsJCOJK0KkROU0E2f5kSRJB8B1qY9Ec3YGyVnJyJdCSS%2FSmhn1t%2BhNm1YeQs6UmTYKeFIPO5Rn5JqIDLX8Mkiz8LvUNjBUtoKTNhv5gZqBSLItDtTfW6SLyjxSIKw3aUmrGIqP2zvMfBXFQzAvpsOE7T3%2FbpTXTpeXhziSdlltvqLSt%2Bl5vUVuz1mPNM%2FWJcUAAOtwPK4rAqCqQGwbHc6gLAJQmei1iITDD%2BZXFBjqkAQ3Lg5Ao6OhYAjEwQJ0SnOak6%2BYP47fBXrV1jFlzAM8XzbwE0pd%2FgHEaUaoflY8ruCSga20%2FDXOvlrOn7xlHlKVE%2Bs7Z19qOgXQvEOWOh4Rj4OypwAwTD8Mrinyzef6u%2FgLjRo0r5Qq9LN0buy%2B1MQs7HjqVphVltgavbOYLZCmuNCgNpScBI8hJXeW5oT3UfkuGphE%2Br%2BDOSHGsBiqOPsjeEYSN&X-Amz-Signature=2626f3535c045618ec1f23d63e7c3b64f428a47b05b2912db7e7ca090a827f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWSUE4L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMJIptK%2B1vhJMSj7Qi8hk%2BmrhgKpXj5fggkGstKPtpAIhAPMDvnXDUWPUhogJbluAnRBwcC5XiYg80r7TmWpyJPjaKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx54e8y3%2FpxSnJjgskq3AM0Y8YTLQ2YrD7lw8aj2GBATnKhAoj%2BqpMYdVS%2BxG6Ryy1pd4ClZ31LilisjtWn2IcI12bc0kN7E8QuEjOwOV2pLTjJe38Ti3hcfVItjOtIF2Hd8yH85lMh5jQVcnGps52ZPLOkBo96qxqSse3uQzrxedsDvfV0qbe8bPZ0RROJIf3wo1TEHmN5mAIBMK%2BjFtpX4IK%2FcHAv%2FBG8kJxet8MUUHi%2FS0s06iv10Z9VDcJiiN6vDobY2vus5hTlF0Of64d6wvHiIttpz0O4vQgEJ5fbr2L%2BfQLsZmE8nsO2N7LcAuLkePq5CD730W9L5FqTXmPwUgKTJ%2FxQBoir3WpVapjRf3IS4PEyUF4U%2BvzhUS%2BEf0nZlvQQfREVsGlGSAP%2BM7phhlazlOd6Y41zIJ2wdFOAw4EzKNsJCOJK0KkROU0E2f5kSRJB8B1qY9Ec3YGyVnJyJdCSS%2FSmhn1t%2BhNm1YeQs6UmTYKeFIPO5Rn5JqIDLX8Mkiz8LvUNjBUtoKTNhv5gZqBSLItDtTfW6SLyjxSIKw3aUmrGIqP2zvMfBXFQzAvpsOE7T3%2FbpTXTpeXhziSdlltvqLSt%2Bl5vUVuz1mPNM%2FWJcUAAOtwPK4rAqCqQGwbHc6gLAJQmei1iITDD%2BZXFBjqkAQ3Lg5Ao6OhYAjEwQJ0SnOak6%2BYP47fBXrV1jFlzAM8XzbwE0pd%2FgHEaUaoflY8ruCSga20%2FDXOvlrOn7xlHlKVE%2Bs7Z19qOgXQvEOWOh4Rj4OypwAwTD8Mrinyzef6u%2FgLjRo0r5Qq9LN0buy%2B1MQs7HjqVphVltgavbOYLZCmuNCgNpScBI8hJXeW5oT3UfkuGphE%2Br%2BDOSHGsBiqOPsjeEYSN&X-Amz-Signature=04836567aca26f8c10d214005bc7bf524880aa90d001775ecf66592aeefca383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWSUE4L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMJIptK%2B1vhJMSj7Qi8hk%2BmrhgKpXj5fggkGstKPtpAIhAPMDvnXDUWPUhogJbluAnRBwcC5XiYg80r7TmWpyJPjaKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx54e8y3%2FpxSnJjgskq3AM0Y8YTLQ2YrD7lw8aj2GBATnKhAoj%2BqpMYdVS%2BxG6Ryy1pd4ClZ31LilisjtWn2IcI12bc0kN7E8QuEjOwOV2pLTjJe38Ti3hcfVItjOtIF2Hd8yH85lMh5jQVcnGps52ZPLOkBo96qxqSse3uQzrxedsDvfV0qbe8bPZ0RROJIf3wo1TEHmN5mAIBMK%2BjFtpX4IK%2FcHAv%2FBG8kJxet8MUUHi%2FS0s06iv10Z9VDcJiiN6vDobY2vus5hTlF0Of64d6wvHiIttpz0O4vQgEJ5fbr2L%2BfQLsZmE8nsO2N7LcAuLkePq5CD730W9L5FqTXmPwUgKTJ%2FxQBoir3WpVapjRf3IS4PEyUF4U%2BvzhUS%2BEf0nZlvQQfREVsGlGSAP%2BM7phhlazlOd6Y41zIJ2wdFOAw4EzKNsJCOJK0KkROU0E2f5kSRJB8B1qY9Ec3YGyVnJyJdCSS%2FSmhn1t%2BhNm1YeQs6UmTYKeFIPO5Rn5JqIDLX8Mkiz8LvUNjBUtoKTNhv5gZqBSLItDtTfW6SLyjxSIKw3aUmrGIqP2zvMfBXFQzAvpsOE7T3%2FbpTXTpeXhziSdlltvqLSt%2Bl5vUVuz1mPNM%2FWJcUAAOtwPK4rAqCqQGwbHc6gLAJQmei1iITDD%2BZXFBjqkAQ3Lg5Ao6OhYAjEwQJ0SnOak6%2BYP47fBXrV1jFlzAM8XzbwE0pd%2FgHEaUaoflY8ruCSga20%2FDXOvlrOn7xlHlKVE%2Bs7Z19qOgXQvEOWOh4Rj4OypwAwTD8Mrinyzef6u%2FgLjRo0r5Qq9LN0buy%2B1MQs7HjqVphVltgavbOYLZCmuNCgNpScBI8hJXeW5oT3UfkuGphE%2Br%2BDOSHGsBiqOPsjeEYSN&X-Amz-Signature=d87e678917a654ecf038b651c991462a51666b4c72284369b58803b8dfa3d821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWSUE4L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMJIptK%2B1vhJMSj7Qi8hk%2BmrhgKpXj5fggkGstKPtpAIhAPMDvnXDUWPUhogJbluAnRBwcC5XiYg80r7TmWpyJPjaKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx54e8y3%2FpxSnJjgskq3AM0Y8YTLQ2YrD7lw8aj2GBATnKhAoj%2BqpMYdVS%2BxG6Ryy1pd4ClZ31LilisjtWn2IcI12bc0kN7E8QuEjOwOV2pLTjJe38Ti3hcfVItjOtIF2Hd8yH85lMh5jQVcnGps52ZPLOkBo96qxqSse3uQzrxedsDvfV0qbe8bPZ0RROJIf3wo1TEHmN5mAIBMK%2BjFtpX4IK%2FcHAv%2FBG8kJxet8MUUHi%2FS0s06iv10Z9VDcJiiN6vDobY2vus5hTlF0Of64d6wvHiIttpz0O4vQgEJ5fbr2L%2BfQLsZmE8nsO2N7LcAuLkePq5CD730W9L5FqTXmPwUgKTJ%2FxQBoir3WpVapjRf3IS4PEyUF4U%2BvzhUS%2BEf0nZlvQQfREVsGlGSAP%2BM7phhlazlOd6Y41zIJ2wdFOAw4EzKNsJCOJK0KkROU0E2f5kSRJB8B1qY9Ec3YGyVnJyJdCSS%2FSmhn1t%2BhNm1YeQs6UmTYKeFIPO5Rn5JqIDLX8Mkiz8LvUNjBUtoKTNhv5gZqBSLItDtTfW6SLyjxSIKw3aUmrGIqP2zvMfBXFQzAvpsOE7T3%2FbpTXTpeXhziSdlltvqLSt%2Bl5vUVuz1mPNM%2FWJcUAAOtwPK4rAqCqQGwbHc6gLAJQmei1iITDD%2BZXFBjqkAQ3Lg5Ao6OhYAjEwQJ0SnOak6%2BYP47fBXrV1jFlzAM8XzbwE0pd%2FgHEaUaoflY8ruCSga20%2FDXOvlrOn7xlHlKVE%2Bs7Z19qOgXQvEOWOh4Rj4OypwAwTD8Mrinyzef6u%2FgLjRo0r5Qq9LN0buy%2B1MQs7HjqVphVltgavbOYLZCmuNCgNpScBI8hJXeW5oT3UfkuGphE%2Br%2BDOSHGsBiqOPsjeEYSN&X-Amz-Signature=027f2dc0f870cbfd132460e23429a0fec230f9e6d368b808102b9a6aacc3619d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWSUE4L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMJIptK%2B1vhJMSj7Qi8hk%2BmrhgKpXj5fggkGstKPtpAIhAPMDvnXDUWPUhogJbluAnRBwcC5XiYg80r7TmWpyJPjaKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx54e8y3%2FpxSnJjgskq3AM0Y8YTLQ2YrD7lw8aj2GBATnKhAoj%2BqpMYdVS%2BxG6Ryy1pd4ClZ31LilisjtWn2IcI12bc0kN7E8QuEjOwOV2pLTjJe38Ti3hcfVItjOtIF2Hd8yH85lMh5jQVcnGps52ZPLOkBo96qxqSse3uQzrxedsDvfV0qbe8bPZ0RROJIf3wo1TEHmN5mAIBMK%2BjFtpX4IK%2FcHAv%2FBG8kJxet8MUUHi%2FS0s06iv10Z9VDcJiiN6vDobY2vus5hTlF0Of64d6wvHiIttpz0O4vQgEJ5fbr2L%2BfQLsZmE8nsO2N7LcAuLkePq5CD730W9L5FqTXmPwUgKTJ%2FxQBoir3WpVapjRf3IS4PEyUF4U%2BvzhUS%2BEf0nZlvQQfREVsGlGSAP%2BM7phhlazlOd6Y41zIJ2wdFOAw4EzKNsJCOJK0KkROU0E2f5kSRJB8B1qY9Ec3YGyVnJyJdCSS%2FSmhn1t%2BhNm1YeQs6UmTYKeFIPO5Rn5JqIDLX8Mkiz8LvUNjBUtoKTNhv5gZqBSLItDtTfW6SLyjxSIKw3aUmrGIqP2zvMfBXFQzAvpsOE7T3%2FbpTXTpeXhziSdlltvqLSt%2Bl5vUVuz1mPNM%2FWJcUAAOtwPK4rAqCqQGwbHc6gLAJQmei1iITDD%2BZXFBjqkAQ3Lg5Ao6OhYAjEwQJ0SnOak6%2BYP47fBXrV1jFlzAM8XzbwE0pd%2FgHEaUaoflY8ruCSga20%2FDXOvlrOn7xlHlKVE%2Bs7Z19qOgXQvEOWOh4Rj4OypwAwTD8Mrinyzef6u%2FgLjRo0r5Qq9LN0buy%2B1MQs7HjqVphVltgavbOYLZCmuNCgNpScBI8hJXeW5oT3UfkuGphE%2Br%2BDOSHGsBiqOPsjeEYSN&X-Amz-Signature=1fbbb184dba1819a923685acc083942f8f8219c29c382bf0e3236c0f8d23e34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
