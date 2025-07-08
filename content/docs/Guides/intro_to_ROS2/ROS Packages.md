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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MN5QOH4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ZOanVY6hdOVWO0kvnmPHaltfxXNDTItcxdY%2FjOw%2B5gIhALCq%2BVw5R1SJM5SVl4yv3KvRRP%2Bc%2Bcg%2Fozu46AKy3PV3KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq4Ruqeg1ocb5OtUwq3AMHz9mT1vt%2Bl%2BFiXUxF0XjvQx2SbpQi8Mg%2BGtl76bOa%2FcN7PaQgsMGDi19bguGciVAzxO97Z3NlhcON3KQLLzB3SgGBdQ1EvhwngpfiJOdFZ0oqoJtEZ6%2BTqoVjqO3oLeRmDDgQIcE3tZph6FNkhct66hP31hYDETqtoReKmbAQniU4NePzgC8%2BDHDlx%2BGEVaAZX32rT1v6eR19WwfDSsANJyXGDcJZ1l1xmURYwhuwfNiLIaO9bMZu60UCrvlXCtdX4jPNGQ5AhNKyJo2zAE5HfAAGbUtEc4s5JNsxw5x1hk1ruWuYEO9nzz0Y%2Bpph0XGlKwqgo86i4GWNujiQdgPEpoqoAEYu0qbgmk66MeRueOjagauU8GoTVKZppj7CWAG9aox%2FyOP1mcW%2FGCm8s9g1QTdY3LFE5GQaqLAeX6FmyF5hZWiMrxpQGnVAKzTWrHgSutIznvWDLExFDt1aNeX03FyOrpW2TJB%2BCPtmZQYZRsyRoemBsX9cTnPyy2h%2F8MXqDX2V5PgRPTtkqViSGo%2FDJ5PPwVtGAeU9QxvDsXHxnBxE1QDJWCTreDTFpo1RNCU%2BGNIQ%2FTog0BV0EVIqd2PypSIrShJyJiCI%2FWqcfgC5sb06sLxeC26n5mdUUTDG%2F7TDBjqkAWKR70rJGjPXzEsLyxpYIv6fWdp0pFAOVg957WYpPINLRaFyJIsR%2FU%2BFoDOgVmj28YimXkMXZCeQsu%2BVOte2g4wdvLVAQC9WxG4%2Bypzh9Wegu8IEm2h8t1iw12rZZMdAPPiHQW1BBPDGAiy9r8B%2BNbEx2NxcnHbY%2FzoCMHu3lwN81FVMiW%2Fozvqrr7bydJiFPi%2FfddgtfJlNur0iNqVnVzWRnxwE&X-Amz-Signature=9bbe2ec7579108f06163cc55bd3321b479f323747e6eb7e35d1b28429d3bb0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MN5QOH4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ZOanVY6hdOVWO0kvnmPHaltfxXNDTItcxdY%2FjOw%2B5gIhALCq%2BVw5R1SJM5SVl4yv3KvRRP%2Bc%2Bcg%2Fozu46AKy3PV3KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq4Ruqeg1ocb5OtUwq3AMHz9mT1vt%2Bl%2BFiXUxF0XjvQx2SbpQi8Mg%2BGtl76bOa%2FcN7PaQgsMGDi19bguGciVAzxO97Z3NlhcON3KQLLzB3SgGBdQ1EvhwngpfiJOdFZ0oqoJtEZ6%2BTqoVjqO3oLeRmDDgQIcE3tZph6FNkhct66hP31hYDETqtoReKmbAQniU4NePzgC8%2BDHDlx%2BGEVaAZX32rT1v6eR19WwfDSsANJyXGDcJZ1l1xmURYwhuwfNiLIaO9bMZu60UCrvlXCtdX4jPNGQ5AhNKyJo2zAE5HfAAGbUtEc4s5JNsxw5x1hk1ruWuYEO9nzz0Y%2Bpph0XGlKwqgo86i4GWNujiQdgPEpoqoAEYu0qbgmk66MeRueOjagauU8GoTVKZppj7CWAG9aox%2FyOP1mcW%2FGCm8s9g1QTdY3LFE5GQaqLAeX6FmyF5hZWiMrxpQGnVAKzTWrHgSutIznvWDLExFDt1aNeX03FyOrpW2TJB%2BCPtmZQYZRsyRoemBsX9cTnPyy2h%2F8MXqDX2V5PgRPTtkqViSGo%2FDJ5PPwVtGAeU9QxvDsXHxnBxE1QDJWCTreDTFpo1RNCU%2BGNIQ%2FTog0BV0EVIqd2PypSIrShJyJiCI%2FWqcfgC5sb06sLxeC26n5mdUUTDG%2F7TDBjqkAWKR70rJGjPXzEsLyxpYIv6fWdp0pFAOVg957WYpPINLRaFyJIsR%2FU%2BFoDOgVmj28YimXkMXZCeQsu%2BVOte2g4wdvLVAQC9WxG4%2Bypzh9Wegu8IEm2h8t1iw12rZZMdAPPiHQW1BBPDGAiy9r8B%2BNbEx2NxcnHbY%2FzoCMHu3lwN81FVMiW%2Fozvqrr7bydJiFPi%2FfddgtfJlNur0iNqVnVzWRnxwE&X-Amz-Signature=e7200c7997b5d96cc1d1fd21973ee15dd793b77ba45ddddcb2fa42bd72a51ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MN5QOH4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ZOanVY6hdOVWO0kvnmPHaltfxXNDTItcxdY%2FjOw%2B5gIhALCq%2BVw5R1SJM5SVl4yv3KvRRP%2Bc%2Bcg%2Fozu46AKy3PV3KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq4Ruqeg1ocb5OtUwq3AMHz9mT1vt%2Bl%2BFiXUxF0XjvQx2SbpQi8Mg%2BGtl76bOa%2FcN7PaQgsMGDi19bguGciVAzxO97Z3NlhcON3KQLLzB3SgGBdQ1EvhwngpfiJOdFZ0oqoJtEZ6%2BTqoVjqO3oLeRmDDgQIcE3tZph6FNkhct66hP31hYDETqtoReKmbAQniU4NePzgC8%2BDHDlx%2BGEVaAZX32rT1v6eR19WwfDSsANJyXGDcJZ1l1xmURYwhuwfNiLIaO9bMZu60UCrvlXCtdX4jPNGQ5AhNKyJo2zAE5HfAAGbUtEc4s5JNsxw5x1hk1ruWuYEO9nzz0Y%2Bpph0XGlKwqgo86i4GWNujiQdgPEpoqoAEYu0qbgmk66MeRueOjagauU8GoTVKZppj7CWAG9aox%2FyOP1mcW%2FGCm8s9g1QTdY3LFE5GQaqLAeX6FmyF5hZWiMrxpQGnVAKzTWrHgSutIznvWDLExFDt1aNeX03FyOrpW2TJB%2BCPtmZQYZRsyRoemBsX9cTnPyy2h%2F8MXqDX2V5PgRPTtkqViSGo%2FDJ5PPwVtGAeU9QxvDsXHxnBxE1QDJWCTreDTFpo1RNCU%2BGNIQ%2FTog0BV0EVIqd2PypSIrShJyJiCI%2FWqcfgC5sb06sLxeC26n5mdUUTDG%2F7TDBjqkAWKR70rJGjPXzEsLyxpYIv6fWdp0pFAOVg957WYpPINLRaFyJIsR%2FU%2BFoDOgVmj28YimXkMXZCeQsu%2BVOte2g4wdvLVAQC9WxG4%2Bypzh9Wegu8IEm2h8t1iw12rZZMdAPPiHQW1BBPDGAiy9r8B%2BNbEx2NxcnHbY%2FzoCMHu3lwN81FVMiW%2Fozvqrr7bydJiFPi%2FfddgtfJlNur0iNqVnVzWRnxwE&X-Amz-Signature=739e1e360e4acff320182ac3fd71c85780961c600bdf6441f11d66f355ce595f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MN5QOH4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ZOanVY6hdOVWO0kvnmPHaltfxXNDTItcxdY%2FjOw%2B5gIhALCq%2BVw5R1SJM5SVl4yv3KvRRP%2Bc%2Bcg%2Fozu46AKy3PV3KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq4Ruqeg1ocb5OtUwq3AMHz9mT1vt%2Bl%2BFiXUxF0XjvQx2SbpQi8Mg%2BGtl76bOa%2FcN7PaQgsMGDi19bguGciVAzxO97Z3NlhcON3KQLLzB3SgGBdQ1EvhwngpfiJOdFZ0oqoJtEZ6%2BTqoVjqO3oLeRmDDgQIcE3tZph6FNkhct66hP31hYDETqtoReKmbAQniU4NePzgC8%2BDHDlx%2BGEVaAZX32rT1v6eR19WwfDSsANJyXGDcJZ1l1xmURYwhuwfNiLIaO9bMZu60UCrvlXCtdX4jPNGQ5AhNKyJo2zAE5HfAAGbUtEc4s5JNsxw5x1hk1ruWuYEO9nzz0Y%2Bpph0XGlKwqgo86i4GWNujiQdgPEpoqoAEYu0qbgmk66MeRueOjagauU8GoTVKZppj7CWAG9aox%2FyOP1mcW%2FGCm8s9g1QTdY3LFE5GQaqLAeX6FmyF5hZWiMrxpQGnVAKzTWrHgSutIznvWDLExFDt1aNeX03FyOrpW2TJB%2BCPtmZQYZRsyRoemBsX9cTnPyy2h%2F8MXqDX2V5PgRPTtkqViSGo%2FDJ5PPwVtGAeU9QxvDsXHxnBxE1QDJWCTreDTFpo1RNCU%2BGNIQ%2FTog0BV0EVIqd2PypSIrShJyJiCI%2FWqcfgC5sb06sLxeC26n5mdUUTDG%2F7TDBjqkAWKR70rJGjPXzEsLyxpYIv6fWdp0pFAOVg957WYpPINLRaFyJIsR%2FU%2BFoDOgVmj28YimXkMXZCeQsu%2BVOte2g4wdvLVAQC9WxG4%2Bypzh9Wegu8IEm2h8t1iw12rZZMdAPPiHQW1BBPDGAiy9r8B%2BNbEx2NxcnHbY%2FzoCMHu3lwN81FVMiW%2Fozvqrr7bydJiFPi%2FfddgtfJlNur0iNqVnVzWRnxwE&X-Amz-Signature=730d8eb8f2cdbbf9bb136dc9108cf1cd8e13c8af8d383171bd1bb4900e024e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MN5QOH4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ZOanVY6hdOVWO0kvnmPHaltfxXNDTItcxdY%2FjOw%2B5gIhALCq%2BVw5R1SJM5SVl4yv3KvRRP%2Bc%2Bcg%2Fozu46AKy3PV3KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq4Ruqeg1ocb5OtUwq3AMHz9mT1vt%2Bl%2BFiXUxF0XjvQx2SbpQi8Mg%2BGtl76bOa%2FcN7PaQgsMGDi19bguGciVAzxO97Z3NlhcON3KQLLzB3SgGBdQ1EvhwngpfiJOdFZ0oqoJtEZ6%2BTqoVjqO3oLeRmDDgQIcE3tZph6FNkhct66hP31hYDETqtoReKmbAQniU4NePzgC8%2BDHDlx%2BGEVaAZX32rT1v6eR19WwfDSsANJyXGDcJZ1l1xmURYwhuwfNiLIaO9bMZu60UCrvlXCtdX4jPNGQ5AhNKyJo2zAE5HfAAGbUtEc4s5JNsxw5x1hk1ruWuYEO9nzz0Y%2Bpph0XGlKwqgo86i4GWNujiQdgPEpoqoAEYu0qbgmk66MeRueOjagauU8GoTVKZppj7CWAG9aox%2FyOP1mcW%2FGCm8s9g1QTdY3LFE5GQaqLAeX6FmyF5hZWiMrxpQGnVAKzTWrHgSutIznvWDLExFDt1aNeX03FyOrpW2TJB%2BCPtmZQYZRsyRoemBsX9cTnPyy2h%2F8MXqDX2V5PgRPTtkqViSGo%2FDJ5PPwVtGAeU9QxvDsXHxnBxE1QDJWCTreDTFpo1RNCU%2BGNIQ%2FTog0BV0EVIqd2PypSIrShJyJiCI%2FWqcfgC5sb06sLxeC26n5mdUUTDG%2F7TDBjqkAWKR70rJGjPXzEsLyxpYIv6fWdp0pFAOVg957WYpPINLRaFyJIsR%2FU%2BFoDOgVmj28YimXkMXZCeQsu%2BVOte2g4wdvLVAQC9WxG4%2Bypzh9Wegu8IEm2h8t1iw12rZZMdAPPiHQW1BBPDGAiy9r8B%2BNbEx2NxcnHbY%2FzoCMHu3lwN81FVMiW%2Fozvqrr7bydJiFPi%2FfddgtfJlNur0iNqVnVzWRnxwE&X-Amz-Signature=00760960c31e46407f271f89de227653dd1e790791ab1b340236f8c97482c423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MN5QOH4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ZOanVY6hdOVWO0kvnmPHaltfxXNDTItcxdY%2FjOw%2B5gIhALCq%2BVw5R1SJM5SVl4yv3KvRRP%2Bc%2Bcg%2Fozu46AKy3PV3KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq4Ruqeg1ocb5OtUwq3AMHz9mT1vt%2Bl%2BFiXUxF0XjvQx2SbpQi8Mg%2BGtl76bOa%2FcN7PaQgsMGDi19bguGciVAzxO97Z3NlhcON3KQLLzB3SgGBdQ1EvhwngpfiJOdFZ0oqoJtEZ6%2BTqoVjqO3oLeRmDDgQIcE3tZph6FNkhct66hP31hYDETqtoReKmbAQniU4NePzgC8%2BDHDlx%2BGEVaAZX32rT1v6eR19WwfDSsANJyXGDcJZ1l1xmURYwhuwfNiLIaO9bMZu60UCrvlXCtdX4jPNGQ5AhNKyJo2zAE5HfAAGbUtEc4s5JNsxw5x1hk1ruWuYEO9nzz0Y%2Bpph0XGlKwqgo86i4GWNujiQdgPEpoqoAEYu0qbgmk66MeRueOjagauU8GoTVKZppj7CWAG9aox%2FyOP1mcW%2FGCm8s9g1QTdY3LFE5GQaqLAeX6FmyF5hZWiMrxpQGnVAKzTWrHgSutIznvWDLExFDt1aNeX03FyOrpW2TJB%2BCPtmZQYZRsyRoemBsX9cTnPyy2h%2F8MXqDX2V5PgRPTtkqViSGo%2FDJ5PPwVtGAeU9QxvDsXHxnBxE1QDJWCTreDTFpo1RNCU%2BGNIQ%2FTog0BV0EVIqd2PypSIrShJyJiCI%2FWqcfgC5sb06sLxeC26n5mdUUTDG%2F7TDBjqkAWKR70rJGjPXzEsLyxpYIv6fWdp0pFAOVg957WYpPINLRaFyJIsR%2FU%2BFoDOgVmj28YimXkMXZCeQsu%2BVOte2g4wdvLVAQC9WxG4%2Bypzh9Wegu8IEm2h8t1iw12rZZMdAPPiHQW1BBPDGAiy9r8B%2BNbEx2NxcnHbY%2FzoCMHu3lwN81FVMiW%2Fozvqrr7bydJiFPi%2FfddgtfJlNur0iNqVnVzWRnxwE&X-Amz-Signature=ffe03e77ac301bc56d72ceda0df4bfd92ae4e25a86e1a59b210f328039567a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MN5QOH4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ZOanVY6hdOVWO0kvnmPHaltfxXNDTItcxdY%2FjOw%2B5gIhALCq%2BVw5R1SJM5SVl4yv3KvRRP%2Bc%2Bcg%2Fozu46AKy3PV3KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq4Ruqeg1ocb5OtUwq3AMHz9mT1vt%2Bl%2BFiXUxF0XjvQx2SbpQi8Mg%2BGtl76bOa%2FcN7PaQgsMGDi19bguGciVAzxO97Z3NlhcON3KQLLzB3SgGBdQ1EvhwngpfiJOdFZ0oqoJtEZ6%2BTqoVjqO3oLeRmDDgQIcE3tZph6FNkhct66hP31hYDETqtoReKmbAQniU4NePzgC8%2BDHDlx%2BGEVaAZX32rT1v6eR19WwfDSsANJyXGDcJZ1l1xmURYwhuwfNiLIaO9bMZu60UCrvlXCtdX4jPNGQ5AhNKyJo2zAE5HfAAGbUtEc4s5JNsxw5x1hk1ruWuYEO9nzz0Y%2Bpph0XGlKwqgo86i4GWNujiQdgPEpoqoAEYu0qbgmk66MeRueOjagauU8GoTVKZppj7CWAG9aox%2FyOP1mcW%2FGCm8s9g1QTdY3LFE5GQaqLAeX6FmyF5hZWiMrxpQGnVAKzTWrHgSutIznvWDLExFDt1aNeX03FyOrpW2TJB%2BCPtmZQYZRsyRoemBsX9cTnPyy2h%2F8MXqDX2V5PgRPTtkqViSGo%2FDJ5PPwVtGAeU9QxvDsXHxnBxE1QDJWCTreDTFpo1RNCU%2BGNIQ%2FTog0BV0EVIqd2PypSIrShJyJiCI%2FWqcfgC5sb06sLxeC26n5mdUUTDG%2F7TDBjqkAWKR70rJGjPXzEsLyxpYIv6fWdp0pFAOVg957WYpPINLRaFyJIsR%2FU%2BFoDOgVmj28YimXkMXZCeQsu%2BVOte2g4wdvLVAQC9WxG4%2Bypzh9Wegu8IEm2h8t1iw12rZZMdAPPiHQW1BBPDGAiy9r8B%2BNbEx2NxcnHbY%2FzoCMHu3lwN81FVMiW%2Fozvqrr7bydJiFPi%2FfddgtfJlNur0iNqVnVzWRnxwE&X-Amz-Signature=f9cf8612ca8c956f56bd2dd3a62341ad6ad3ceae0666401a1811b8732ab37f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
