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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLHUOX7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCAo6okuyrlB%2BnZNoF0KnMqZlvzo41AxgQY%2BLPPHm1qwQIhAM2EOZ4uUTfEZp%2FtHa65au9h%2FCMMo3RqVEnlmSryckcZKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQRtYZ0GXWHAE%2BNa8q3AOkz4Khkz2Q4KYaHAKt7%2BKWjhX%2BXDA35YUgUbCdQeHvUPIwX4ZiqO%2BuY%2F%2Bg2NO67l%2F%2FRN932o3mqHeVe4lwOYqZqyBG%2BGiSp53bAD6TCPMBFiNoKuFBIlTN874vNB6wrsOn4EbS3TROlGUeNxkJXyQeq2%2FeLEB7aPqhZ8A7P0K4vSKRl7NhBWjxvSHZrvA3i8wIsGzNaPuWCqw3tQg%2FPAl0Qw842x7uJKljuIdn42yVtHkFEIIqyPWfMALVvgzXGnQPkt6KWo5eNgEp6%2B7E%2BTEuxoq1TwKVrmk28m74Rc06zNGacrqZC%2Bej3WMqUvzD4pzUxfrRvO6rXSF76c7PHrU%2FlqfY%2FBCVVqRASl%2Bbg89uMKubvOiWXK4XkmCx28%2F6f86sNeg5HfdiIntdBYcXsxw5hGw5TfKXhg91kw0Y4HfZw8VVJ%2FUdMwUf1p2idY8l9oXpd5Ixr5Kysff4yAh5J1B37iMXCjuJWYaXQyepYIJR2HN4e%2BsiL7gtKGPffHg1OZlxa7IbNG4Zkyw0Fo%2Fd4VfLo4mH2WJsWqSbJH7hq3oK8%2FSq4Sb%2FCXEUp39Vd6M6uqCG6Qeb%2B3D2N8OhNoEZqRlw436HojcFA33ud0sBfwZBPU6WySds4LEHi3K2JDCzhYm%2BBjqkASUNRAV7wILxqTLnZTbdsnfQHmN43125bzc6uFS184sMsqO0d%2BonxJ0LtJ%2BPpoHLKZ4Q8THUIflkbcBwALkr54v%2FAOf%2BowVQKdWdfPTdgaDIzerAvwhL%2Futip6e5ohyXMFOh%2BDbLl1O4e3ZHcw11rjWopp%2B8fuQOKcD6euuredcDjPJgCllzIjkmMDEeGqnHMyx6A8I3NVhSvQ5tD4MKVYPlQvSg&X-Amz-Signature=ee93eba36e55d52728223cc94b3fa3fd93751640bc71c399085e62a4a04cfbd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLHUOX7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCAo6okuyrlB%2BnZNoF0KnMqZlvzo41AxgQY%2BLPPHm1qwQIhAM2EOZ4uUTfEZp%2FtHa65au9h%2FCMMo3RqVEnlmSryckcZKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQRtYZ0GXWHAE%2BNa8q3AOkz4Khkz2Q4KYaHAKt7%2BKWjhX%2BXDA35YUgUbCdQeHvUPIwX4ZiqO%2BuY%2F%2Bg2NO67l%2F%2FRN932o3mqHeVe4lwOYqZqyBG%2BGiSp53bAD6TCPMBFiNoKuFBIlTN874vNB6wrsOn4EbS3TROlGUeNxkJXyQeq2%2FeLEB7aPqhZ8A7P0K4vSKRl7NhBWjxvSHZrvA3i8wIsGzNaPuWCqw3tQg%2FPAl0Qw842x7uJKljuIdn42yVtHkFEIIqyPWfMALVvgzXGnQPkt6KWo5eNgEp6%2B7E%2BTEuxoq1TwKVrmk28m74Rc06zNGacrqZC%2Bej3WMqUvzD4pzUxfrRvO6rXSF76c7PHrU%2FlqfY%2FBCVVqRASl%2Bbg89uMKubvOiWXK4XkmCx28%2F6f86sNeg5HfdiIntdBYcXsxw5hGw5TfKXhg91kw0Y4HfZw8VVJ%2FUdMwUf1p2idY8l9oXpd5Ixr5Kysff4yAh5J1B37iMXCjuJWYaXQyepYIJR2HN4e%2BsiL7gtKGPffHg1OZlxa7IbNG4Zkyw0Fo%2Fd4VfLo4mH2WJsWqSbJH7hq3oK8%2FSq4Sb%2FCXEUp39Vd6M6uqCG6Qeb%2B3D2N8OhNoEZqRlw436HojcFA33ud0sBfwZBPU6WySds4LEHi3K2JDCzhYm%2BBjqkASUNRAV7wILxqTLnZTbdsnfQHmN43125bzc6uFS184sMsqO0d%2BonxJ0LtJ%2BPpoHLKZ4Q8THUIflkbcBwALkr54v%2FAOf%2BowVQKdWdfPTdgaDIzerAvwhL%2Futip6e5ohyXMFOh%2BDbLl1O4e3ZHcw11rjWopp%2B8fuQOKcD6euuredcDjPJgCllzIjkmMDEeGqnHMyx6A8I3NVhSvQ5tD4MKVYPlQvSg&X-Amz-Signature=1a95cd60221acb596fd20264ae7f7fa51c52d868eb4eea2496ea4f7f0581286f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLHUOX7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCAo6okuyrlB%2BnZNoF0KnMqZlvzo41AxgQY%2BLPPHm1qwQIhAM2EOZ4uUTfEZp%2FtHa65au9h%2FCMMo3RqVEnlmSryckcZKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQRtYZ0GXWHAE%2BNa8q3AOkz4Khkz2Q4KYaHAKt7%2BKWjhX%2BXDA35YUgUbCdQeHvUPIwX4ZiqO%2BuY%2F%2Bg2NO67l%2F%2FRN932o3mqHeVe4lwOYqZqyBG%2BGiSp53bAD6TCPMBFiNoKuFBIlTN874vNB6wrsOn4EbS3TROlGUeNxkJXyQeq2%2FeLEB7aPqhZ8A7P0K4vSKRl7NhBWjxvSHZrvA3i8wIsGzNaPuWCqw3tQg%2FPAl0Qw842x7uJKljuIdn42yVtHkFEIIqyPWfMALVvgzXGnQPkt6KWo5eNgEp6%2B7E%2BTEuxoq1TwKVrmk28m74Rc06zNGacrqZC%2Bej3WMqUvzD4pzUxfrRvO6rXSF76c7PHrU%2FlqfY%2FBCVVqRASl%2Bbg89uMKubvOiWXK4XkmCx28%2F6f86sNeg5HfdiIntdBYcXsxw5hGw5TfKXhg91kw0Y4HfZw8VVJ%2FUdMwUf1p2idY8l9oXpd5Ixr5Kysff4yAh5J1B37iMXCjuJWYaXQyepYIJR2HN4e%2BsiL7gtKGPffHg1OZlxa7IbNG4Zkyw0Fo%2Fd4VfLo4mH2WJsWqSbJH7hq3oK8%2FSq4Sb%2FCXEUp39Vd6M6uqCG6Qeb%2B3D2N8OhNoEZqRlw436HojcFA33ud0sBfwZBPU6WySds4LEHi3K2JDCzhYm%2BBjqkASUNRAV7wILxqTLnZTbdsnfQHmN43125bzc6uFS184sMsqO0d%2BonxJ0LtJ%2BPpoHLKZ4Q8THUIflkbcBwALkr54v%2FAOf%2BowVQKdWdfPTdgaDIzerAvwhL%2Futip6e5ohyXMFOh%2BDbLl1O4e3ZHcw11rjWopp%2B8fuQOKcD6euuredcDjPJgCllzIjkmMDEeGqnHMyx6A8I3NVhSvQ5tD4MKVYPlQvSg&X-Amz-Signature=76646d1411b318e59020941a053885702112818dea10475840016689db25603e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLHUOX7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCAo6okuyrlB%2BnZNoF0KnMqZlvzo41AxgQY%2BLPPHm1qwQIhAM2EOZ4uUTfEZp%2FtHa65au9h%2FCMMo3RqVEnlmSryckcZKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQRtYZ0GXWHAE%2BNa8q3AOkz4Khkz2Q4KYaHAKt7%2BKWjhX%2BXDA35YUgUbCdQeHvUPIwX4ZiqO%2BuY%2F%2Bg2NO67l%2F%2FRN932o3mqHeVe4lwOYqZqyBG%2BGiSp53bAD6TCPMBFiNoKuFBIlTN874vNB6wrsOn4EbS3TROlGUeNxkJXyQeq2%2FeLEB7aPqhZ8A7P0K4vSKRl7NhBWjxvSHZrvA3i8wIsGzNaPuWCqw3tQg%2FPAl0Qw842x7uJKljuIdn42yVtHkFEIIqyPWfMALVvgzXGnQPkt6KWo5eNgEp6%2B7E%2BTEuxoq1TwKVrmk28m74Rc06zNGacrqZC%2Bej3WMqUvzD4pzUxfrRvO6rXSF76c7PHrU%2FlqfY%2FBCVVqRASl%2Bbg89uMKubvOiWXK4XkmCx28%2F6f86sNeg5HfdiIntdBYcXsxw5hGw5TfKXhg91kw0Y4HfZw8VVJ%2FUdMwUf1p2idY8l9oXpd5Ixr5Kysff4yAh5J1B37iMXCjuJWYaXQyepYIJR2HN4e%2BsiL7gtKGPffHg1OZlxa7IbNG4Zkyw0Fo%2Fd4VfLo4mH2WJsWqSbJH7hq3oK8%2FSq4Sb%2FCXEUp39Vd6M6uqCG6Qeb%2B3D2N8OhNoEZqRlw436HojcFA33ud0sBfwZBPU6WySds4LEHi3K2JDCzhYm%2BBjqkASUNRAV7wILxqTLnZTbdsnfQHmN43125bzc6uFS184sMsqO0d%2BonxJ0LtJ%2BPpoHLKZ4Q8THUIflkbcBwALkr54v%2FAOf%2BowVQKdWdfPTdgaDIzerAvwhL%2Futip6e5ohyXMFOh%2BDbLl1O4e3ZHcw11rjWopp%2B8fuQOKcD6euuredcDjPJgCllzIjkmMDEeGqnHMyx6A8I3NVhSvQ5tD4MKVYPlQvSg&X-Amz-Signature=530f8b2a99bac6d837f907fbc0ba6ec2c8d84cbd8e7158b383a76b4b750e705f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLHUOX7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCAo6okuyrlB%2BnZNoF0KnMqZlvzo41AxgQY%2BLPPHm1qwQIhAM2EOZ4uUTfEZp%2FtHa65au9h%2FCMMo3RqVEnlmSryckcZKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQRtYZ0GXWHAE%2BNa8q3AOkz4Khkz2Q4KYaHAKt7%2BKWjhX%2BXDA35YUgUbCdQeHvUPIwX4ZiqO%2BuY%2F%2Bg2NO67l%2F%2FRN932o3mqHeVe4lwOYqZqyBG%2BGiSp53bAD6TCPMBFiNoKuFBIlTN874vNB6wrsOn4EbS3TROlGUeNxkJXyQeq2%2FeLEB7aPqhZ8A7P0K4vSKRl7NhBWjxvSHZrvA3i8wIsGzNaPuWCqw3tQg%2FPAl0Qw842x7uJKljuIdn42yVtHkFEIIqyPWfMALVvgzXGnQPkt6KWo5eNgEp6%2B7E%2BTEuxoq1TwKVrmk28m74Rc06zNGacrqZC%2Bej3WMqUvzD4pzUxfrRvO6rXSF76c7PHrU%2FlqfY%2FBCVVqRASl%2Bbg89uMKubvOiWXK4XkmCx28%2F6f86sNeg5HfdiIntdBYcXsxw5hGw5TfKXhg91kw0Y4HfZw8VVJ%2FUdMwUf1p2idY8l9oXpd5Ixr5Kysff4yAh5J1B37iMXCjuJWYaXQyepYIJR2HN4e%2BsiL7gtKGPffHg1OZlxa7IbNG4Zkyw0Fo%2Fd4VfLo4mH2WJsWqSbJH7hq3oK8%2FSq4Sb%2FCXEUp39Vd6M6uqCG6Qeb%2B3D2N8OhNoEZqRlw436HojcFA33ud0sBfwZBPU6WySds4LEHi3K2JDCzhYm%2BBjqkASUNRAV7wILxqTLnZTbdsnfQHmN43125bzc6uFS184sMsqO0d%2BonxJ0LtJ%2BPpoHLKZ4Q8THUIflkbcBwALkr54v%2FAOf%2BowVQKdWdfPTdgaDIzerAvwhL%2Futip6e5ohyXMFOh%2BDbLl1O4e3ZHcw11rjWopp%2B8fuQOKcD6euuredcDjPJgCllzIjkmMDEeGqnHMyx6A8I3NVhSvQ5tD4MKVYPlQvSg&X-Amz-Signature=2474cca02ec6fb27236f9041a49e3b3d9d38568d781f2190fb330a8afb7cb227&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLHUOX7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCAo6okuyrlB%2BnZNoF0KnMqZlvzo41AxgQY%2BLPPHm1qwQIhAM2EOZ4uUTfEZp%2FtHa65au9h%2FCMMo3RqVEnlmSryckcZKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQRtYZ0GXWHAE%2BNa8q3AOkz4Khkz2Q4KYaHAKt7%2BKWjhX%2BXDA35YUgUbCdQeHvUPIwX4ZiqO%2BuY%2F%2Bg2NO67l%2F%2FRN932o3mqHeVe4lwOYqZqyBG%2BGiSp53bAD6TCPMBFiNoKuFBIlTN874vNB6wrsOn4EbS3TROlGUeNxkJXyQeq2%2FeLEB7aPqhZ8A7P0K4vSKRl7NhBWjxvSHZrvA3i8wIsGzNaPuWCqw3tQg%2FPAl0Qw842x7uJKljuIdn42yVtHkFEIIqyPWfMALVvgzXGnQPkt6KWo5eNgEp6%2B7E%2BTEuxoq1TwKVrmk28m74Rc06zNGacrqZC%2Bej3WMqUvzD4pzUxfrRvO6rXSF76c7PHrU%2FlqfY%2FBCVVqRASl%2Bbg89uMKubvOiWXK4XkmCx28%2F6f86sNeg5HfdiIntdBYcXsxw5hGw5TfKXhg91kw0Y4HfZw8VVJ%2FUdMwUf1p2idY8l9oXpd5Ixr5Kysff4yAh5J1B37iMXCjuJWYaXQyepYIJR2HN4e%2BsiL7gtKGPffHg1OZlxa7IbNG4Zkyw0Fo%2Fd4VfLo4mH2WJsWqSbJH7hq3oK8%2FSq4Sb%2FCXEUp39Vd6M6uqCG6Qeb%2B3D2N8OhNoEZqRlw436HojcFA33ud0sBfwZBPU6WySds4LEHi3K2JDCzhYm%2BBjqkASUNRAV7wILxqTLnZTbdsnfQHmN43125bzc6uFS184sMsqO0d%2BonxJ0LtJ%2BPpoHLKZ4Q8THUIflkbcBwALkr54v%2FAOf%2BowVQKdWdfPTdgaDIzerAvwhL%2Futip6e5ohyXMFOh%2BDbLl1O4e3ZHcw11rjWopp%2B8fuQOKcD6euuredcDjPJgCllzIjkmMDEeGqnHMyx6A8I3NVhSvQ5tD4MKVYPlQvSg&X-Amz-Signature=662928231507f38c650369bec81d0bc3cac04dd9355fca93cfbf8116d3688a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLHUOX7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCAo6okuyrlB%2BnZNoF0KnMqZlvzo41AxgQY%2BLPPHm1qwQIhAM2EOZ4uUTfEZp%2FtHa65au9h%2FCMMo3RqVEnlmSryckcZKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQRtYZ0GXWHAE%2BNa8q3AOkz4Khkz2Q4KYaHAKt7%2BKWjhX%2BXDA35YUgUbCdQeHvUPIwX4ZiqO%2BuY%2F%2Bg2NO67l%2F%2FRN932o3mqHeVe4lwOYqZqyBG%2BGiSp53bAD6TCPMBFiNoKuFBIlTN874vNB6wrsOn4EbS3TROlGUeNxkJXyQeq2%2FeLEB7aPqhZ8A7P0K4vSKRl7NhBWjxvSHZrvA3i8wIsGzNaPuWCqw3tQg%2FPAl0Qw842x7uJKljuIdn42yVtHkFEIIqyPWfMALVvgzXGnQPkt6KWo5eNgEp6%2B7E%2BTEuxoq1TwKVrmk28m74Rc06zNGacrqZC%2Bej3WMqUvzD4pzUxfrRvO6rXSF76c7PHrU%2FlqfY%2FBCVVqRASl%2Bbg89uMKubvOiWXK4XkmCx28%2F6f86sNeg5HfdiIntdBYcXsxw5hGw5TfKXhg91kw0Y4HfZw8VVJ%2FUdMwUf1p2idY8l9oXpd5Ixr5Kysff4yAh5J1B37iMXCjuJWYaXQyepYIJR2HN4e%2BsiL7gtKGPffHg1OZlxa7IbNG4Zkyw0Fo%2Fd4VfLo4mH2WJsWqSbJH7hq3oK8%2FSq4Sb%2FCXEUp39Vd6M6uqCG6Qeb%2B3D2N8OhNoEZqRlw436HojcFA33ud0sBfwZBPU6WySds4LEHi3K2JDCzhYm%2BBjqkASUNRAV7wILxqTLnZTbdsnfQHmN43125bzc6uFS184sMsqO0d%2BonxJ0LtJ%2BPpoHLKZ4Q8THUIflkbcBwALkr54v%2FAOf%2BowVQKdWdfPTdgaDIzerAvwhL%2Futip6e5ohyXMFOh%2BDbLl1O4e3ZHcw11rjWopp%2B8fuQOKcD6euuredcDjPJgCllzIjkmMDEeGqnHMyx6A8I3NVhSvQ5tD4MKVYPlQvSg&X-Amz-Signature=d6e2d8d925901e4b2e9434b776a9b495df9016a50a24dc53af2e6ef045b463f0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
