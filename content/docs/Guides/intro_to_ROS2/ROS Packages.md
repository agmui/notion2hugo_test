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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEJ4QQ3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPgU2koiwxHERRW8%2B20TzvrZE6mmFgARwqMXUUIuuL%2FgIhAJ7sVs5wwJ3%2BVaTMPfh1O%2BKdFlg82xFTz4Jd17l7cF%2FoKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sn2fcCkVn03RRB8q3APTapyHYmYWPPUvdiF2MB3tDiEFVF7xpI6tT96oAYohtV3%2FOtlvPHo3e7oKjrZciA96sC0CyrYbb021BVPy1AXfcfJ7ZhWnU3eyNAL%2Bk0%2BQmmLY8tsdSRoex5MdoT%2Bg55hDAzeE2aNH9DXmjmqQ6FQKJMBISOOh%2BqyxdfYcre2rgoedVj7Rw%2BXqbu3WYUTIwTXLNn2bS%2F89aMSEr37aXsQThqzpb6m4KYnMUcsriOrxXh9A%2Bk8sPWUWTnVVEJqYNBGBKFeiartgJasnmMowVCDp7SZRZkny4VHL6imzgMdDZiTO4RQDvK7EQLI9yzCGbQycoFpHpDFBtG9k8FXqvx8Ssn%2FDs5EozDAgBD8uIsnAPFqbbwRFXoYI3GXb7lrV1wcCnYPgHX1oxwzbZApCuht1bFpExFz7dpNn2iqjl0jftBDb6E8N12jEyAov5pWIximqBW48%2BmghVXpNi35AR6H2o1JbIC2%2FNJR8sNStqxKwqz3P8B%2FK%2Fb%2FtICdkJbF0cl8uhP%2BLgXIL3jnLbhc0MJ7A8Xx0Ct54wwEOAiBzTJhYppFpkon7KPxIzgc27AZWyeCnkRusl%2FAd2v7TWoIQXnNvsP64XjGCCmWTNPR7WixqDXm41YDaTyrwVqK5ZjDy15%2B9BjqkAQ5yqz5SAQezLfSEYObyW5Pj9ShANqjwYueaIHRdQIx8BL3dcDEB%2FuLM0how4gUthOPVGoCBBkcKn2XwddYdJw0XRLBG9UEtxt8jR5PJojtLqB26rLzdq4r1ASLLx1e2nv%2BLanRS2nXb9qBhUY2lSWNxakEVQM96S7dBSY7VxhXcHqDj8VZbtszKZgaI8Q9BeNXVr%2BcOnzi7oT2nJeokZG8YNJ0r&X-Amz-Signature=01261bacb23bcbd7c80bfd0eb95cf356b219fbc0bd619593ab8bf16ea95856e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEJ4QQ3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPgU2koiwxHERRW8%2B20TzvrZE6mmFgARwqMXUUIuuL%2FgIhAJ7sVs5wwJ3%2BVaTMPfh1O%2BKdFlg82xFTz4Jd17l7cF%2FoKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sn2fcCkVn03RRB8q3APTapyHYmYWPPUvdiF2MB3tDiEFVF7xpI6tT96oAYohtV3%2FOtlvPHo3e7oKjrZciA96sC0CyrYbb021BVPy1AXfcfJ7ZhWnU3eyNAL%2Bk0%2BQmmLY8tsdSRoex5MdoT%2Bg55hDAzeE2aNH9DXmjmqQ6FQKJMBISOOh%2BqyxdfYcre2rgoedVj7Rw%2BXqbu3WYUTIwTXLNn2bS%2F89aMSEr37aXsQThqzpb6m4KYnMUcsriOrxXh9A%2Bk8sPWUWTnVVEJqYNBGBKFeiartgJasnmMowVCDp7SZRZkny4VHL6imzgMdDZiTO4RQDvK7EQLI9yzCGbQycoFpHpDFBtG9k8FXqvx8Ssn%2FDs5EozDAgBD8uIsnAPFqbbwRFXoYI3GXb7lrV1wcCnYPgHX1oxwzbZApCuht1bFpExFz7dpNn2iqjl0jftBDb6E8N12jEyAov5pWIximqBW48%2BmghVXpNi35AR6H2o1JbIC2%2FNJR8sNStqxKwqz3P8B%2FK%2Fb%2FtICdkJbF0cl8uhP%2BLgXIL3jnLbhc0MJ7A8Xx0Ct54wwEOAiBzTJhYppFpkon7KPxIzgc27AZWyeCnkRusl%2FAd2v7TWoIQXnNvsP64XjGCCmWTNPR7WixqDXm41YDaTyrwVqK5ZjDy15%2B9BjqkAQ5yqz5SAQezLfSEYObyW5Pj9ShANqjwYueaIHRdQIx8BL3dcDEB%2FuLM0how4gUthOPVGoCBBkcKn2XwddYdJw0XRLBG9UEtxt8jR5PJojtLqB26rLzdq4r1ASLLx1e2nv%2BLanRS2nXb9qBhUY2lSWNxakEVQM96S7dBSY7VxhXcHqDj8VZbtszKZgaI8Q9BeNXVr%2BcOnzi7oT2nJeokZG8YNJ0r&X-Amz-Signature=74e094db7d0c50887be93a811a0aceb4daeea4988b89b07d03652f029f29dba4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEJ4QQ3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPgU2koiwxHERRW8%2B20TzvrZE6mmFgARwqMXUUIuuL%2FgIhAJ7sVs5wwJ3%2BVaTMPfh1O%2BKdFlg82xFTz4Jd17l7cF%2FoKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sn2fcCkVn03RRB8q3APTapyHYmYWPPUvdiF2MB3tDiEFVF7xpI6tT96oAYohtV3%2FOtlvPHo3e7oKjrZciA96sC0CyrYbb021BVPy1AXfcfJ7ZhWnU3eyNAL%2Bk0%2BQmmLY8tsdSRoex5MdoT%2Bg55hDAzeE2aNH9DXmjmqQ6FQKJMBISOOh%2BqyxdfYcre2rgoedVj7Rw%2BXqbu3WYUTIwTXLNn2bS%2F89aMSEr37aXsQThqzpb6m4KYnMUcsriOrxXh9A%2Bk8sPWUWTnVVEJqYNBGBKFeiartgJasnmMowVCDp7SZRZkny4VHL6imzgMdDZiTO4RQDvK7EQLI9yzCGbQycoFpHpDFBtG9k8FXqvx8Ssn%2FDs5EozDAgBD8uIsnAPFqbbwRFXoYI3GXb7lrV1wcCnYPgHX1oxwzbZApCuht1bFpExFz7dpNn2iqjl0jftBDb6E8N12jEyAov5pWIximqBW48%2BmghVXpNi35AR6H2o1JbIC2%2FNJR8sNStqxKwqz3P8B%2FK%2Fb%2FtICdkJbF0cl8uhP%2BLgXIL3jnLbhc0MJ7A8Xx0Ct54wwEOAiBzTJhYppFpkon7KPxIzgc27AZWyeCnkRusl%2FAd2v7TWoIQXnNvsP64XjGCCmWTNPR7WixqDXm41YDaTyrwVqK5ZjDy15%2B9BjqkAQ5yqz5SAQezLfSEYObyW5Pj9ShANqjwYueaIHRdQIx8BL3dcDEB%2FuLM0how4gUthOPVGoCBBkcKn2XwddYdJw0XRLBG9UEtxt8jR5PJojtLqB26rLzdq4r1ASLLx1e2nv%2BLanRS2nXb9qBhUY2lSWNxakEVQM96S7dBSY7VxhXcHqDj8VZbtszKZgaI8Q9BeNXVr%2BcOnzi7oT2nJeokZG8YNJ0r&X-Amz-Signature=d54cf51e160fe429794d5ff43270ffcc9e39bd016186b5811dfcf316dfd356b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEJ4QQ3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPgU2koiwxHERRW8%2B20TzvrZE6mmFgARwqMXUUIuuL%2FgIhAJ7sVs5wwJ3%2BVaTMPfh1O%2BKdFlg82xFTz4Jd17l7cF%2FoKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sn2fcCkVn03RRB8q3APTapyHYmYWPPUvdiF2MB3tDiEFVF7xpI6tT96oAYohtV3%2FOtlvPHo3e7oKjrZciA96sC0CyrYbb021BVPy1AXfcfJ7ZhWnU3eyNAL%2Bk0%2BQmmLY8tsdSRoex5MdoT%2Bg55hDAzeE2aNH9DXmjmqQ6FQKJMBISOOh%2BqyxdfYcre2rgoedVj7Rw%2BXqbu3WYUTIwTXLNn2bS%2F89aMSEr37aXsQThqzpb6m4KYnMUcsriOrxXh9A%2Bk8sPWUWTnVVEJqYNBGBKFeiartgJasnmMowVCDp7SZRZkny4VHL6imzgMdDZiTO4RQDvK7EQLI9yzCGbQycoFpHpDFBtG9k8FXqvx8Ssn%2FDs5EozDAgBD8uIsnAPFqbbwRFXoYI3GXb7lrV1wcCnYPgHX1oxwzbZApCuht1bFpExFz7dpNn2iqjl0jftBDb6E8N12jEyAov5pWIximqBW48%2BmghVXpNi35AR6H2o1JbIC2%2FNJR8sNStqxKwqz3P8B%2FK%2Fb%2FtICdkJbF0cl8uhP%2BLgXIL3jnLbhc0MJ7A8Xx0Ct54wwEOAiBzTJhYppFpkon7KPxIzgc27AZWyeCnkRusl%2FAd2v7TWoIQXnNvsP64XjGCCmWTNPR7WixqDXm41YDaTyrwVqK5ZjDy15%2B9BjqkAQ5yqz5SAQezLfSEYObyW5Pj9ShANqjwYueaIHRdQIx8BL3dcDEB%2FuLM0how4gUthOPVGoCBBkcKn2XwddYdJw0XRLBG9UEtxt8jR5PJojtLqB26rLzdq4r1ASLLx1e2nv%2BLanRS2nXb9qBhUY2lSWNxakEVQM96S7dBSY7VxhXcHqDj8VZbtszKZgaI8Q9BeNXVr%2BcOnzi7oT2nJeokZG8YNJ0r&X-Amz-Signature=e7a52a928467a4cc78677c4bac6ac7cf88cae811f8c4dbc7c789daf5151dfd80&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEJ4QQ3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPgU2koiwxHERRW8%2B20TzvrZE6mmFgARwqMXUUIuuL%2FgIhAJ7sVs5wwJ3%2BVaTMPfh1O%2BKdFlg82xFTz4Jd17l7cF%2FoKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sn2fcCkVn03RRB8q3APTapyHYmYWPPUvdiF2MB3tDiEFVF7xpI6tT96oAYohtV3%2FOtlvPHo3e7oKjrZciA96sC0CyrYbb021BVPy1AXfcfJ7ZhWnU3eyNAL%2Bk0%2BQmmLY8tsdSRoex5MdoT%2Bg55hDAzeE2aNH9DXmjmqQ6FQKJMBISOOh%2BqyxdfYcre2rgoedVj7Rw%2BXqbu3WYUTIwTXLNn2bS%2F89aMSEr37aXsQThqzpb6m4KYnMUcsriOrxXh9A%2Bk8sPWUWTnVVEJqYNBGBKFeiartgJasnmMowVCDp7SZRZkny4VHL6imzgMdDZiTO4RQDvK7EQLI9yzCGbQycoFpHpDFBtG9k8FXqvx8Ssn%2FDs5EozDAgBD8uIsnAPFqbbwRFXoYI3GXb7lrV1wcCnYPgHX1oxwzbZApCuht1bFpExFz7dpNn2iqjl0jftBDb6E8N12jEyAov5pWIximqBW48%2BmghVXpNi35AR6H2o1JbIC2%2FNJR8sNStqxKwqz3P8B%2FK%2Fb%2FtICdkJbF0cl8uhP%2BLgXIL3jnLbhc0MJ7A8Xx0Ct54wwEOAiBzTJhYppFpkon7KPxIzgc27AZWyeCnkRusl%2FAd2v7TWoIQXnNvsP64XjGCCmWTNPR7WixqDXm41YDaTyrwVqK5ZjDy15%2B9BjqkAQ5yqz5SAQezLfSEYObyW5Pj9ShANqjwYueaIHRdQIx8BL3dcDEB%2FuLM0how4gUthOPVGoCBBkcKn2XwddYdJw0XRLBG9UEtxt8jR5PJojtLqB26rLzdq4r1ASLLx1e2nv%2BLanRS2nXb9qBhUY2lSWNxakEVQM96S7dBSY7VxhXcHqDj8VZbtszKZgaI8Q9BeNXVr%2BcOnzi7oT2nJeokZG8YNJ0r&X-Amz-Signature=d29c2e42d01450e39ccd4df38e777cf1ca2466600d206f39d6182c4736595db9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEJ4QQ3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPgU2koiwxHERRW8%2B20TzvrZE6mmFgARwqMXUUIuuL%2FgIhAJ7sVs5wwJ3%2BVaTMPfh1O%2BKdFlg82xFTz4Jd17l7cF%2FoKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sn2fcCkVn03RRB8q3APTapyHYmYWPPUvdiF2MB3tDiEFVF7xpI6tT96oAYohtV3%2FOtlvPHo3e7oKjrZciA96sC0CyrYbb021BVPy1AXfcfJ7ZhWnU3eyNAL%2Bk0%2BQmmLY8tsdSRoex5MdoT%2Bg55hDAzeE2aNH9DXmjmqQ6FQKJMBISOOh%2BqyxdfYcre2rgoedVj7Rw%2BXqbu3WYUTIwTXLNn2bS%2F89aMSEr37aXsQThqzpb6m4KYnMUcsriOrxXh9A%2Bk8sPWUWTnVVEJqYNBGBKFeiartgJasnmMowVCDp7SZRZkny4VHL6imzgMdDZiTO4RQDvK7EQLI9yzCGbQycoFpHpDFBtG9k8FXqvx8Ssn%2FDs5EozDAgBD8uIsnAPFqbbwRFXoYI3GXb7lrV1wcCnYPgHX1oxwzbZApCuht1bFpExFz7dpNn2iqjl0jftBDb6E8N12jEyAov5pWIximqBW48%2BmghVXpNi35AR6H2o1JbIC2%2FNJR8sNStqxKwqz3P8B%2FK%2Fb%2FtICdkJbF0cl8uhP%2BLgXIL3jnLbhc0MJ7A8Xx0Ct54wwEOAiBzTJhYppFpkon7KPxIzgc27AZWyeCnkRusl%2FAd2v7TWoIQXnNvsP64XjGCCmWTNPR7WixqDXm41YDaTyrwVqK5ZjDy15%2B9BjqkAQ5yqz5SAQezLfSEYObyW5Pj9ShANqjwYueaIHRdQIx8BL3dcDEB%2FuLM0how4gUthOPVGoCBBkcKn2XwddYdJw0XRLBG9UEtxt8jR5PJojtLqB26rLzdq4r1ASLLx1e2nv%2BLanRS2nXb9qBhUY2lSWNxakEVQM96S7dBSY7VxhXcHqDj8VZbtszKZgaI8Q9BeNXVr%2BcOnzi7oT2nJeokZG8YNJ0r&X-Amz-Signature=3f09abfdda3d9e50dfdeca2ee6d3113f1d3700dce0b3950bd77f7de730c2f488&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEJ4QQ3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPgU2koiwxHERRW8%2B20TzvrZE6mmFgARwqMXUUIuuL%2FgIhAJ7sVs5wwJ3%2BVaTMPfh1O%2BKdFlg82xFTz4Jd17l7cF%2FoKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Sn2fcCkVn03RRB8q3APTapyHYmYWPPUvdiF2MB3tDiEFVF7xpI6tT96oAYohtV3%2FOtlvPHo3e7oKjrZciA96sC0CyrYbb021BVPy1AXfcfJ7ZhWnU3eyNAL%2Bk0%2BQmmLY8tsdSRoex5MdoT%2Bg55hDAzeE2aNH9DXmjmqQ6FQKJMBISOOh%2BqyxdfYcre2rgoedVj7Rw%2BXqbu3WYUTIwTXLNn2bS%2F89aMSEr37aXsQThqzpb6m4KYnMUcsriOrxXh9A%2Bk8sPWUWTnVVEJqYNBGBKFeiartgJasnmMowVCDp7SZRZkny4VHL6imzgMdDZiTO4RQDvK7EQLI9yzCGbQycoFpHpDFBtG9k8FXqvx8Ssn%2FDs5EozDAgBD8uIsnAPFqbbwRFXoYI3GXb7lrV1wcCnYPgHX1oxwzbZApCuht1bFpExFz7dpNn2iqjl0jftBDb6E8N12jEyAov5pWIximqBW48%2BmghVXpNi35AR6H2o1JbIC2%2FNJR8sNStqxKwqz3P8B%2FK%2Fb%2FtICdkJbF0cl8uhP%2BLgXIL3jnLbhc0MJ7A8Xx0Ct54wwEOAiBzTJhYppFpkon7KPxIzgc27AZWyeCnkRusl%2FAd2v7TWoIQXnNvsP64XjGCCmWTNPR7WixqDXm41YDaTyrwVqK5ZjDy15%2B9BjqkAQ5yqz5SAQezLfSEYObyW5Pj9ShANqjwYueaIHRdQIx8BL3dcDEB%2FuLM0how4gUthOPVGoCBBkcKn2XwddYdJw0XRLBG9UEtxt8jR5PJojtLqB26rLzdq4r1ASLLx1e2nv%2BLanRS2nXb9qBhUY2lSWNxakEVQM96S7dBSY7VxhXcHqDj8VZbtszKZgaI8Q9BeNXVr%2BcOnzi7oT2nJeokZG8YNJ0r&X-Amz-Signature=c30b34b110dc4c13d7b42c16224a44619fa1e34bb88308396759256efa4ad206&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
