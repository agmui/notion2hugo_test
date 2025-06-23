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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOHR3CK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD1ivMODLmUV2Gv1OGqWx6gk4p6YqUpGOLBEL4k0lI55QIhAPEdoVX%2Fk3BQ0ICpM9DCW9sOfbU3%2BDauyy3%2B%2Bur%2BIt7yKv8DCBUQABoMNjM3NDIzMTgzODA1IgwZC8Deu730iwJjkv8q3AMAl%2Bca2kFYXTWp2BTxcEnonDk2WqZvXiFDX53bTj7FwqqLCfKNn6O3K265rgA4jJztWdsj9PVcmwRj908fRmhc0%2BbrfwUwUPysBf9f39fKyfZ%2BfFZgxzx%2FM93nVZEUmg2t4paCbCThcnuesKUnEVSpxWcz7C2ESPA0bJm%2FK3rtQj6H1zzv86gokWIwk5Em7si%2BAEwtQjNrCdwoHhWIFJ%2FxlMG0vSov3nlUAK9cnxgs3FtXXiXxvlZxdn4Dwy7Viwuz1LzuvdEnpsejOT7nWH87fSJa6%2Fs1z0DCPVl2DIpqFwZP7fgTmKz%2BnY87DOw1ebdvOZ7jLGfrludt2rabaG9yq1i9jX1ZRfCxJuyyr087b9eaz%2BSe28AXTG%2FBWFIu7oODNX%2FfZdNBX7GtwcBI0VXDWIynlpy%2B%2Ft1LmpgGMoJvw7FRWug895b6Pprmy86EhIO99q7v19%2Bigq7frhZvJt%2FJ3bhwLcjh8WsdEMQBWBVUt5%2Fs7umSdE8Qi5e5NgjaEoVVNqZJds7JXcB5gkBwanCqO62kq4u1eU24kSlaVd5B4XGhhHC7wua1BOaClR2cHZG8ZQ63m1tMjHjK1Evg664VM%2FtRXZWfk9QliqHqzsnW3WlbLxApAYC%2BjUnN7DDD8%2BTCBjqkAXpsF%2B5LSk%2FwR2d86JgpsAuNWB4MJDL7cRLTF11BFyCV7BUsJpRA8scxVygYjjIU5zE%2F%2B0BNV8DHBFZrAHEtIkgQR0VgAgIR247qhVoVaRjTJBIvmo63H1phnKZra68n8LbaBZkwRSKWHdUzBjhPanQFqzvKR7xBMkEIMkuN5hJhPQaaVh2xTk2SL94m2V03Rvzi1fJYnPPE412s3eesNlJNPBhI&X-Amz-Signature=f43894f87231813ada3fdb0945b20e1ded565d090a7fa095f4a6216d23980956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOHR3CK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD1ivMODLmUV2Gv1OGqWx6gk4p6YqUpGOLBEL4k0lI55QIhAPEdoVX%2Fk3BQ0ICpM9DCW9sOfbU3%2BDauyy3%2B%2Bur%2BIt7yKv8DCBUQABoMNjM3NDIzMTgzODA1IgwZC8Deu730iwJjkv8q3AMAl%2Bca2kFYXTWp2BTxcEnonDk2WqZvXiFDX53bTj7FwqqLCfKNn6O3K265rgA4jJztWdsj9PVcmwRj908fRmhc0%2BbrfwUwUPysBf9f39fKyfZ%2BfFZgxzx%2FM93nVZEUmg2t4paCbCThcnuesKUnEVSpxWcz7C2ESPA0bJm%2FK3rtQj6H1zzv86gokWIwk5Em7si%2BAEwtQjNrCdwoHhWIFJ%2FxlMG0vSov3nlUAK9cnxgs3FtXXiXxvlZxdn4Dwy7Viwuz1LzuvdEnpsejOT7nWH87fSJa6%2Fs1z0DCPVl2DIpqFwZP7fgTmKz%2BnY87DOw1ebdvOZ7jLGfrludt2rabaG9yq1i9jX1ZRfCxJuyyr087b9eaz%2BSe28AXTG%2FBWFIu7oODNX%2FfZdNBX7GtwcBI0VXDWIynlpy%2B%2Ft1LmpgGMoJvw7FRWug895b6Pprmy86EhIO99q7v19%2Bigq7frhZvJt%2FJ3bhwLcjh8WsdEMQBWBVUt5%2Fs7umSdE8Qi5e5NgjaEoVVNqZJds7JXcB5gkBwanCqO62kq4u1eU24kSlaVd5B4XGhhHC7wua1BOaClR2cHZG8ZQ63m1tMjHjK1Evg664VM%2FtRXZWfk9QliqHqzsnW3WlbLxApAYC%2BjUnN7DDD8%2BTCBjqkAXpsF%2B5LSk%2FwR2d86JgpsAuNWB4MJDL7cRLTF11BFyCV7BUsJpRA8scxVygYjjIU5zE%2F%2B0BNV8DHBFZrAHEtIkgQR0VgAgIR247qhVoVaRjTJBIvmo63H1phnKZra68n8LbaBZkwRSKWHdUzBjhPanQFqzvKR7xBMkEIMkuN5hJhPQaaVh2xTk2SL94m2V03Rvzi1fJYnPPE412s3eesNlJNPBhI&X-Amz-Signature=474466efd25a58dc680c36234c0017b0ee03d4a09443b4be6baff1cc4a013023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOHR3CK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD1ivMODLmUV2Gv1OGqWx6gk4p6YqUpGOLBEL4k0lI55QIhAPEdoVX%2Fk3BQ0ICpM9DCW9sOfbU3%2BDauyy3%2B%2Bur%2BIt7yKv8DCBUQABoMNjM3NDIzMTgzODA1IgwZC8Deu730iwJjkv8q3AMAl%2Bca2kFYXTWp2BTxcEnonDk2WqZvXiFDX53bTj7FwqqLCfKNn6O3K265rgA4jJztWdsj9PVcmwRj908fRmhc0%2BbrfwUwUPysBf9f39fKyfZ%2BfFZgxzx%2FM93nVZEUmg2t4paCbCThcnuesKUnEVSpxWcz7C2ESPA0bJm%2FK3rtQj6H1zzv86gokWIwk5Em7si%2BAEwtQjNrCdwoHhWIFJ%2FxlMG0vSov3nlUAK9cnxgs3FtXXiXxvlZxdn4Dwy7Viwuz1LzuvdEnpsejOT7nWH87fSJa6%2Fs1z0DCPVl2DIpqFwZP7fgTmKz%2BnY87DOw1ebdvOZ7jLGfrludt2rabaG9yq1i9jX1ZRfCxJuyyr087b9eaz%2BSe28AXTG%2FBWFIu7oODNX%2FfZdNBX7GtwcBI0VXDWIynlpy%2B%2Ft1LmpgGMoJvw7FRWug895b6Pprmy86EhIO99q7v19%2Bigq7frhZvJt%2FJ3bhwLcjh8WsdEMQBWBVUt5%2Fs7umSdE8Qi5e5NgjaEoVVNqZJds7JXcB5gkBwanCqO62kq4u1eU24kSlaVd5B4XGhhHC7wua1BOaClR2cHZG8ZQ63m1tMjHjK1Evg664VM%2FtRXZWfk9QliqHqzsnW3WlbLxApAYC%2BjUnN7DDD8%2BTCBjqkAXpsF%2B5LSk%2FwR2d86JgpsAuNWB4MJDL7cRLTF11BFyCV7BUsJpRA8scxVygYjjIU5zE%2F%2B0BNV8DHBFZrAHEtIkgQR0VgAgIR247qhVoVaRjTJBIvmo63H1phnKZra68n8LbaBZkwRSKWHdUzBjhPanQFqzvKR7xBMkEIMkuN5hJhPQaaVh2xTk2SL94m2V03Rvzi1fJYnPPE412s3eesNlJNPBhI&X-Amz-Signature=83369ecf12da240b7b870e14f60cef2d2511a2361ce959c562444e72f8795ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOHR3CK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD1ivMODLmUV2Gv1OGqWx6gk4p6YqUpGOLBEL4k0lI55QIhAPEdoVX%2Fk3BQ0ICpM9DCW9sOfbU3%2BDauyy3%2B%2Bur%2BIt7yKv8DCBUQABoMNjM3NDIzMTgzODA1IgwZC8Deu730iwJjkv8q3AMAl%2Bca2kFYXTWp2BTxcEnonDk2WqZvXiFDX53bTj7FwqqLCfKNn6O3K265rgA4jJztWdsj9PVcmwRj908fRmhc0%2BbrfwUwUPysBf9f39fKyfZ%2BfFZgxzx%2FM93nVZEUmg2t4paCbCThcnuesKUnEVSpxWcz7C2ESPA0bJm%2FK3rtQj6H1zzv86gokWIwk5Em7si%2BAEwtQjNrCdwoHhWIFJ%2FxlMG0vSov3nlUAK9cnxgs3FtXXiXxvlZxdn4Dwy7Viwuz1LzuvdEnpsejOT7nWH87fSJa6%2Fs1z0DCPVl2DIpqFwZP7fgTmKz%2BnY87DOw1ebdvOZ7jLGfrludt2rabaG9yq1i9jX1ZRfCxJuyyr087b9eaz%2BSe28AXTG%2FBWFIu7oODNX%2FfZdNBX7GtwcBI0VXDWIynlpy%2B%2Ft1LmpgGMoJvw7FRWug895b6Pprmy86EhIO99q7v19%2Bigq7frhZvJt%2FJ3bhwLcjh8WsdEMQBWBVUt5%2Fs7umSdE8Qi5e5NgjaEoVVNqZJds7JXcB5gkBwanCqO62kq4u1eU24kSlaVd5B4XGhhHC7wua1BOaClR2cHZG8ZQ63m1tMjHjK1Evg664VM%2FtRXZWfk9QliqHqzsnW3WlbLxApAYC%2BjUnN7DDD8%2BTCBjqkAXpsF%2B5LSk%2FwR2d86JgpsAuNWB4MJDL7cRLTF11BFyCV7BUsJpRA8scxVygYjjIU5zE%2F%2B0BNV8DHBFZrAHEtIkgQR0VgAgIR247qhVoVaRjTJBIvmo63H1phnKZra68n8LbaBZkwRSKWHdUzBjhPanQFqzvKR7xBMkEIMkuN5hJhPQaaVh2xTk2SL94m2V03Rvzi1fJYnPPE412s3eesNlJNPBhI&X-Amz-Signature=727ba16a14e00d15dd2f4d26d37f3f5d3cf2ef3dff5a68bd66510518c359ccfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOHR3CK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD1ivMODLmUV2Gv1OGqWx6gk4p6YqUpGOLBEL4k0lI55QIhAPEdoVX%2Fk3BQ0ICpM9DCW9sOfbU3%2BDauyy3%2B%2Bur%2BIt7yKv8DCBUQABoMNjM3NDIzMTgzODA1IgwZC8Deu730iwJjkv8q3AMAl%2Bca2kFYXTWp2BTxcEnonDk2WqZvXiFDX53bTj7FwqqLCfKNn6O3K265rgA4jJztWdsj9PVcmwRj908fRmhc0%2BbrfwUwUPysBf9f39fKyfZ%2BfFZgxzx%2FM93nVZEUmg2t4paCbCThcnuesKUnEVSpxWcz7C2ESPA0bJm%2FK3rtQj6H1zzv86gokWIwk5Em7si%2BAEwtQjNrCdwoHhWIFJ%2FxlMG0vSov3nlUAK9cnxgs3FtXXiXxvlZxdn4Dwy7Viwuz1LzuvdEnpsejOT7nWH87fSJa6%2Fs1z0DCPVl2DIpqFwZP7fgTmKz%2BnY87DOw1ebdvOZ7jLGfrludt2rabaG9yq1i9jX1ZRfCxJuyyr087b9eaz%2BSe28AXTG%2FBWFIu7oODNX%2FfZdNBX7GtwcBI0VXDWIynlpy%2B%2Ft1LmpgGMoJvw7FRWug895b6Pprmy86EhIO99q7v19%2Bigq7frhZvJt%2FJ3bhwLcjh8WsdEMQBWBVUt5%2Fs7umSdE8Qi5e5NgjaEoVVNqZJds7JXcB5gkBwanCqO62kq4u1eU24kSlaVd5B4XGhhHC7wua1BOaClR2cHZG8ZQ63m1tMjHjK1Evg664VM%2FtRXZWfk9QliqHqzsnW3WlbLxApAYC%2BjUnN7DDD8%2BTCBjqkAXpsF%2B5LSk%2FwR2d86JgpsAuNWB4MJDL7cRLTF11BFyCV7BUsJpRA8scxVygYjjIU5zE%2F%2B0BNV8DHBFZrAHEtIkgQR0VgAgIR247qhVoVaRjTJBIvmo63H1phnKZra68n8LbaBZkwRSKWHdUzBjhPanQFqzvKR7xBMkEIMkuN5hJhPQaaVh2xTk2SL94m2V03Rvzi1fJYnPPE412s3eesNlJNPBhI&X-Amz-Signature=dbdbd429c84a46db701b0bdd5317cad1744e61c6b2c73a6f0c80e1769723420d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOHR3CK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD1ivMODLmUV2Gv1OGqWx6gk4p6YqUpGOLBEL4k0lI55QIhAPEdoVX%2Fk3BQ0ICpM9DCW9sOfbU3%2BDauyy3%2B%2Bur%2BIt7yKv8DCBUQABoMNjM3NDIzMTgzODA1IgwZC8Deu730iwJjkv8q3AMAl%2Bca2kFYXTWp2BTxcEnonDk2WqZvXiFDX53bTj7FwqqLCfKNn6O3K265rgA4jJztWdsj9PVcmwRj908fRmhc0%2BbrfwUwUPysBf9f39fKyfZ%2BfFZgxzx%2FM93nVZEUmg2t4paCbCThcnuesKUnEVSpxWcz7C2ESPA0bJm%2FK3rtQj6H1zzv86gokWIwk5Em7si%2BAEwtQjNrCdwoHhWIFJ%2FxlMG0vSov3nlUAK9cnxgs3FtXXiXxvlZxdn4Dwy7Viwuz1LzuvdEnpsejOT7nWH87fSJa6%2Fs1z0DCPVl2DIpqFwZP7fgTmKz%2BnY87DOw1ebdvOZ7jLGfrludt2rabaG9yq1i9jX1ZRfCxJuyyr087b9eaz%2BSe28AXTG%2FBWFIu7oODNX%2FfZdNBX7GtwcBI0VXDWIynlpy%2B%2Ft1LmpgGMoJvw7FRWug895b6Pprmy86EhIO99q7v19%2Bigq7frhZvJt%2FJ3bhwLcjh8WsdEMQBWBVUt5%2Fs7umSdE8Qi5e5NgjaEoVVNqZJds7JXcB5gkBwanCqO62kq4u1eU24kSlaVd5B4XGhhHC7wua1BOaClR2cHZG8ZQ63m1tMjHjK1Evg664VM%2FtRXZWfk9QliqHqzsnW3WlbLxApAYC%2BjUnN7DDD8%2BTCBjqkAXpsF%2B5LSk%2FwR2d86JgpsAuNWB4MJDL7cRLTF11BFyCV7BUsJpRA8scxVygYjjIU5zE%2F%2B0BNV8DHBFZrAHEtIkgQR0VgAgIR247qhVoVaRjTJBIvmo63H1phnKZra68n8LbaBZkwRSKWHdUzBjhPanQFqzvKR7xBMkEIMkuN5hJhPQaaVh2xTk2SL94m2V03Rvzi1fJYnPPE412s3eesNlJNPBhI&X-Amz-Signature=8a2e040b7ff63a548f792a30359f287f8c9c36689e2d4397c37abea17b91e19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOHR3CK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD1ivMODLmUV2Gv1OGqWx6gk4p6YqUpGOLBEL4k0lI55QIhAPEdoVX%2Fk3BQ0ICpM9DCW9sOfbU3%2BDauyy3%2B%2Bur%2BIt7yKv8DCBUQABoMNjM3NDIzMTgzODA1IgwZC8Deu730iwJjkv8q3AMAl%2Bca2kFYXTWp2BTxcEnonDk2WqZvXiFDX53bTj7FwqqLCfKNn6O3K265rgA4jJztWdsj9PVcmwRj908fRmhc0%2BbrfwUwUPysBf9f39fKyfZ%2BfFZgxzx%2FM93nVZEUmg2t4paCbCThcnuesKUnEVSpxWcz7C2ESPA0bJm%2FK3rtQj6H1zzv86gokWIwk5Em7si%2BAEwtQjNrCdwoHhWIFJ%2FxlMG0vSov3nlUAK9cnxgs3FtXXiXxvlZxdn4Dwy7Viwuz1LzuvdEnpsejOT7nWH87fSJa6%2Fs1z0DCPVl2DIpqFwZP7fgTmKz%2BnY87DOw1ebdvOZ7jLGfrludt2rabaG9yq1i9jX1ZRfCxJuyyr087b9eaz%2BSe28AXTG%2FBWFIu7oODNX%2FfZdNBX7GtwcBI0VXDWIynlpy%2B%2Ft1LmpgGMoJvw7FRWug895b6Pprmy86EhIO99q7v19%2Bigq7frhZvJt%2FJ3bhwLcjh8WsdEMQBWBVUt5%2Fs7umSdE8Qi5e5NgjaEoVVNqZJds7JXcB5gkBwanCqO62kq4u1eU24kSlaVd5B4XGhhHC7wua1BOaClR2cHZG8ZQ63m1tMjHjK1Evg664VM%2FtRXZWfk9QliqHqzsnW3WlbLxApAYC%2BjUnN7DDD8%2BTCBjqkAXpsF%2B5LSk%2FwR2d86JgpsAuNWB4MJDL7cRLTF11BFyCV7BUsJpRA8scxVygYjjIU5zE%2F%2B0BNV8DHBFZrAHEtIkgQR0VgAgIR247qhVoVaRjTJBIvmo63H1phnKZra68n8LbaBZkwRSKWHdUzBjhPanQFqzvKR7xBMkEIMkuN5hJhPQaaVh2xTk2SL94m2V03Rvzi1fJYnPPE412s3eesNlJNPBhI&X-Amz-Signature=8ec0b1649f1278634b7ec889f2229a8315391629293edc1b048f3135e0561791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
