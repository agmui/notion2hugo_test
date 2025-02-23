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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMJSX6X%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwcMrL9uYLP8WJtVQWgPjdwzvHXsvMrXMa69iiunpHvAiEA9SViYIELY6VAqfKM3eDhhe51ECm3T%2FKh15YWc88B5gwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGb6gIGWWZ8iW8oCYyrcA7Eb1KaMTzqit4zXHEJTVmM82Qk7NIC88fhWqvzKf8z5BSocNjIiaAOVPxcARV30jaDvQYX2M4ri3w8bnITgPiuh2%2B0GsT60BiUacuEKrq7zzhtowv%2BaYOnxAZrBu6phfmu1m7JlEb9u8vHxnRCh7CXQf48NplglSLoewIPP%2BbZIBVRf1O%2BFw6XVgslsQHd7RKXf8%2FlTt4XOlE47AYbwzOKzEnSA4aaybvTC5U8ak%2Bi%2F3tExbuPtJ3NShRWtHMs9mlibn1EnlA3Ke9xzK%2BDByaM621NKRMAY774xttpggkon4X093FszWppxQGCLhr6LlcIGPPOco9%2B6fSoFRmPM%2Bl6IPFeLaOCnSsxA44Te%2BQwWQtUbtg1zyVE%2BeSvx8Hz%2FTXeJv1msNlX8YXZu%2BwEdzPFvD%2FxhC5adhdDRFwAIhDx5JKc2hKpxe9yZMuSAkYUd75cEV33ZCuGyfx08cSKVEUDflAV%2FQO%2BbOx7v76qt3TmjkehTsyLSSzX3JNiBYHaeWOG%2B%2FcLar8Nu%2F%2BbJg83XVqQI6oXw6cwFnceEFir%2FCwrLqk5g1dcWIOdjtg7yx4alf%2B2TBc1yxOoBx1DalFeaKKzFGU7gKVOtbtWHD2NtDsK7Pf1KRqrAR8ou5EIBMNWa670GOqUB%2BwajfHyfah7q3rBU7DzfrD4Bpx9KCeqXXJAwTCUygEy%2ByBTMEbZ3ntNTooE4jsiKf1I6n3YhVTRAUkAC1XUqfCzZC9Zk61lE2MckXOYDa4sRIa0Dwo06r0AqpaURgw1DA0%2BtDUXBDjgglmzJGCoMti8cQ21bj3rhou1%2BWsePcse8MaS7Je%2B9nzfhONNdvNfer8QZfUfVl3GYEj5CPzh0%2Bs1RyzjP&X-Amz-Signature=182c1753d50e2f80b5c89cabbe9d2dc3a5345bba7d36848d16e7b4732ae0b391&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMJSX6X%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwcMrL9uYLP8WJtVQWgPjdwzvHXsvMrXMa69iiunpHvAiEA9SViYIELY6VAqfKM3eDhhe51ECm3T%2FKh15YWc88B5gwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGb6gIGWWZ8iW8oCYyrcA7Eb1KaMTzqit4zXHEJTVmM82Qk7NIC88fhWqvzKf8z5BSocNjIiaAOVPxcARV30jaDvQYX2M4ri3w8bnITgPiuh2%2B0GsT60BiUacuEKrq7zzhtowv%2BaYOnxAZrBu6phfmu1m7JlEb9u8vHxnRCh7CXQf48NplglSLoewIPP%2BbZIBVRf1O%2BFw6XVgslsQHd7RKXf8%2FlTt4XOlE47AYbwzOKzEnSA4aaybvTC5U8ak%2Bi%2F3tExbuPtJ3NShRWtHMs9mlibn1EnlA3Ke9xzK%2BDByaM621NKRMAY774xttpggkon4X093FszWppxQGCLhr6LlcIGPPOco9%2B6fSoFRmPM%2Bl6IPFeLaOCnSsxA44Te%2BQwWQtUbtg1zyVE%2BeSvx8Hz%2FTXeJv1msNlX8YXZu%2BwEdzPFvD%2FxhC5adhdDRFwAIhDx5JKc2hKpxe9yZMuSAkYUd75cEV33ZCuGyfx08cSKVEUDflAV%2FQO%2BbOx7v76qt3TmjkehTsyLSSzX3JNiBYHaeWOG%2B%2FcLar8Nu%2F%2BbJg83XVqQI6oXw6cwFnceEFir%2FCwrLqk5g1dcWIOdjtg7yx4alf%2B2TBc1yxOoBx1DalFeaKKzFGU7gKVOtbtWHD2NtDsK7Pf1KRqrAR8ou5EIBMNWa670GOqUB%2BwajfHyfah7q3rBU7DzfrD4Bpx9KCeqXXJAwTCUygEy%2ByBTMEbZ3ntNTooE4jsiKf1I6n3YhVTRAUkAC1XUqfCzZC9Zk61lE2MckXOYDa4sRIa0Dwo06r0AqpaURgw1DA0%2BtDUXBDjgglmzJGCoMti8cQ21bj3rhou1%2BWsePcse8MaS7Je%2B9nzfhONNdvNfer8QZfUfVl3GYEj5CPzh0%2Bs1RyzjP&X-Amz-Signature=3a84dbccb36816f0569f13bb977a33a932a7c4f939a6e718d717c177550bf7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMJSX6X%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwcMrL9uYLP8WJtVQWgPjdwzvHXsvMrXMa69iiunpHvAiEA9SViYIELY6VAqfKM3eDhhe51ECm3T%2FKh15YWc88B5gwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGb6gIGWWZ8iW8oCYyrcA7Eb1KaMTzqit4zXHEJTVmM82Qk7NIC88fhWqvzKf8z5BSocNjIiaAOVPxcARV30jaDvQYX2M4ri3w8bnITgPiuh2%2B0GsT60BiUacuEKrq7zzhtowv%2BaYOnxAZrBu6phfmu1m7JlEb9u8vHxnRCh7CXQf48NplglSLoewIPP%2BbZIBVRf1O%2BFw6XVgslsQHd7RKXf8%2FlTt4XOlE47AYbwzOKzEnSA4aaybvTC5U8ak%2Bi%2F3tExbuPtJ3NShRWtHMs9mlibn1EnlA3Ke9xzK%2BDByaM621NKRMAY774xttpggkon4X093FszWppxQGCLhr6LlcIGPPOco9%2B6fSoFRmPM%2Bl6IPFeLaOCnSsxA44Te%2BQwWQtUbtg1zyVE%2BeSvx8Hz%2FTXeJv1msNlX8YXZu%2BwEdzPFvD%2FxhC5adhdDRFwAIhDx5JKc2hKpxe9yZMuSAkYUd75cEV33ZCuGyfx08cSKVEUDflAV%2FQO%2BbOx7v76qt3TmjkehTsyLSSzX3JNiBYHaeWOG%2B%2FcLar8Nu%2F%2BbJg83XVqQI6oXw6cwFnceEFir%2FCwrLqk5g1dcWIOdjtg7yx4alf%2B2TBc1yxOoBx1DalFeaKKzFGU7gKVOtbtWHD2NtDsK7Pf1KRqrAR8ou5EIBMNWa670GOqUB%2BwajfHyfah7q3rBU7DzfrD4Bpx9KCeqXXJAwTCUygEy%2ByBTMEbZ3ntNTooE4jsiKf1I6n3YhVTRAUkAC1XUqfCzZC9Zk61lE2MckXOYDa4sRIa0Dwo06r0AqpaURgw1DA0%2BtDUXBDjgglmzJGCoMti8cQ21bj3rhou1%2BWsePcse8MaS7Je%2B9nzfhONNdvNfer8QZfUfVl3GYEj5CPzh0%2Bs1RyzjP&X-Amz-Signature=5d9850664c64babbdda58982dce78f449c4c685d9121fbed75c52cf486937cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMJSX6X%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwcMrL9uYLP8WJtVQWgPjdwzvHXsvMrXMa69iiunpHvAiEA9SViYIELY6VAqfKM3eDhhe51ECm3T%2FKh15YWc88B5gwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGb6gIGWWZ8iW8oCYyrcA7Eb1KaMTzqit4zXHEJTVmM82Qk7NIC88fhWqvzKf8z5BSocNjIiaAOVPxcARV30jaDvQYX2M4ri3w8bnITgPiuh2%2B0GsT60BiUacuEKrq7zzhtowv%2BaYOnxAZrBu6phfmu1m7JlEb9u8vHxnRCh7CXQf48NplglSLoewIPP%2BbZIBVRf1O%2BFw6XVgslsQHd7RKXf8%2FlTt4XOlE47AYbwzOKzEnSA4aaybvTC5U8ak%2Bi%2F3tExbuPtJ3NShRWtHMs9mlibn1EnlA3Ke9xzK%2BDByaM621NKRMAY774xttpggkon4X093FszWppxQGCLhr6LlcIGPPOco9%2B6fSoFRmPM%2Bl6IPFeLaOCnSsxA44Te%2BQwWQtUbtg1zyVE%2BeSvx8Hz%2FTXeJv1msNlX8YXZu%2BwEdzPFvD%2FxhC5adhdDRFwAIhDx5JKc2hKpxe9yZMuSAkYUd75cEV33ZCuGyfx08cSKVEUDflAV%2FQO%2BbOx7v76qt3TmjkehTsyLSSzX3JNiBYHaeWOG%2B%2FcLar8Nu%2F%2BbJg83XVqQI6oXw6cwFnceEFir%2FCwrLqk5g1dcWIOdjtg7yx4alf%2B2TBc1yxOoBx1DalFeaKKzFGU7gKVOtbtWHD2NtDsK7Pf1KRqrAR8ou5EIBMNWa670GOqUB%2BwajfHyfah7q3rBU7DzfrD4Bpx9KCeqXXJAwTCUygEy%2ByBTMEbZ3ntNTooE4jsiKf1I6n3YhVTRAUkAC1XUqfCzZC9Zk61lE2MckXOYDa4sRIa0Dwo06r0AqpaURgw1DA0%2BtDUXBDjgglmzJGCoMti8cQ21bj3rhou1%2BWsePcse8MaS7Je%2B9nzfhONNdvNfer8QZfUfVl3GYEj5CPzh0%2Bs1RyzjP&X-Amz-Signature=048cbd79adc377e9bf9841e89f17e4ad47fbc2e28c9b5d4c9e721b93a871afef&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMJSX6X%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwcMrL9uYLP8WJtVQWgPjdwzvHXsvMrXMa69iiunpHvAiEA9SViYIELY6VAqfKM3eDhhe51ECm3T%2FKh15YWc88B5gwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGb6gIGWWZ8iW8oCYyrcA7Eb1KaMTzqit4zXHEJTVmM82Qk7NIC88fhWqvzKf8z5BSocNjIiaAOVPxcARV30jaDvQYX2M4ri3w8bnITgPiuh2%2B0GsT60BiUacuEKrq7zzhtowv%2BaYOnxAZrBu6phfmu1m7JlEb9u8vHxnRCh7CXQf48NplglSLoewIPP%2BbZIBVRf1O%2BFw6XVgslsQHd7RKXf8%2FlTt4XOlE47AYbwzOKzEnSA4aaybvTC5U8ak%2Bi%2F3tExbuPtJ3NShRWtHMs9mlibn1EnlA3Ke9xzK%2BDByaM621NKRMAY774xttpggkon4X093FszWppxQGCLhr6LlcIGPPOco9%2B6fSoFRmPM%2Bl6IPFeLaOCnSsxA44Te%2BQwWQtUbtg1zyVE%2BeSvx8Hz%2FTXeJv1msNlX8YXZu%2BwEdzPFvD%2FxhC5adhdDRFwAIhDx5JKc2hKpxe9yZMuSAkYUd75cEV33ZCuGyfx08cSKVEUDflAV%2FQO%2BbOx7v76qt3TmjkehTsyLSSzX3JNiBYHaeWOG%2B%2FcLar8Nu%2F%2BbJg83XVqQI6oXw6cwFnceEFir%2FCwrLqk5g1dcWIOdjtg7yx4alf%2B2TBc1yxOoBx1DalFeaKKzFGU7gKVOtbtWHD2NtDsK7Pf1KRqrAR8ou5EIBMNWa670GOqUB%2BwajfHyfah7q3rBU7DzfrD4Bpx9KCeqXXJAwTCUygEy%2ByBTMEbZ3ntNTooE4jsiKf1I6n3YhVTRAUkAC1XUqfCzZC9Zk61lE2MckXOYDa4sRIa0Dwo06r0AqpaURgw1DA0%2BtDUXBDjgglmzJGCoMti8cQ21bj3rhou1%2BWsePcse8MaS7Je%2B9nzfhONNdvNfer8QZfUfVl3GYEj5CPzh0%2Bs1RyzjP&X-Amz-Signature=b2bd45e9cf5e50a1bd8499445ca6e302a3df3dc8e70cdfc442e0089f0d0461f8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMJSX6X%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwcMrL9uYLP8WJtVQWgPjdwzvHXsvMrXMa69iiunpHvAiEA9SViYIELY6VAqfKM3eDhhe51ECm3T%2FKh15YWc88B5gwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGb6gIGWWZ8iW8oCYyrcA7Eb1KaMTzqit4zXHEJTVmM82Qk7NIC88fhWqvzKf8z5BSocNjIiaAOVPxcARV30jaDvQYX2M4ri3w8bnITgPiuh2%2B0GsT60BiUacuEKrq7zzhtowv%2BaYOnxAZrBu6phfmu1m7JlEb9u8vHxnRCh7CXQf48NplglSLoewIPP%2BbZIBVRf1O%2BFw6XVgslsQHd7RKXf8%2FlTt4XOlE47AYbwzOKzEnSA4aaybvTC5U8ak%2Bi%2F3tExbuPtJ3NShRWtHMs9mlibn1EnlA3Ke9xzK%2BDByaM621NKRMAY774xttpggkon4X093FszWppxQGCLhr6LlcIGPPOco9%2B6fSoFRmPM%2Bl6IPFeLaOCnSsxA44Te%2BQwWQtUbtg1zyVE%2BeSvx8Hz%2FTXeJv1msNlX8YXZu%2BwEdzPFvD%2FxhC5adhdDRFwAIhDx5JKc2hKpxe9yZMuSAkYUd75cEV33ZCuGyfx08cSKVEUDflAV%2FQO%2BbOx7v76qt3TmjkehTsyLSSzX3JNiBYHaeWOG%2B%2FcLar8Nu%2F%2BbJg83XVqQI6oXw6cwFnceEFir%2FCwrLqk5g1dcWIOdjtg7yx4alf%2B2TBc1yxOoBx1DalFeaKKzFGU7gKVOtbtWHD2NtDsK7Pf1KRqrAR8ou5EIBMNWa670GOqUB%2BwajfHyfah7q3rBU7DzfrD4Bpx9KCeqXXJAwTCUygEy%2ByBTMEbZ3ntNTooE4jsiKf1I6n3YhVTRAUkAC1XUqfCzZC9Zk61lE2MckXOYDa4sRIa0Dwo06r0AqpaURgw1DA0%2BtDUXBDjgglmzJGCoMti8cQ21bj3rhou1%2BWsePcse8MaS7Je%2B9nzfhONNdvNfer8QZfUfVl3GYEj5CPzh0%2Bs1RyzjP&X-Amz-Signature=84de4d8a383e0af64cd5415e478b5a9cc99051c3aee2bb8f9abd3eddeea2dee5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMJSX6X%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwcMrL9uYLP8WJtVQWgPjdwzvHXsvMrXMa69iiunpHvAiEA9SViYIELY6VAqfKM3eDhhe51ECm3T%2FKh15YWc88B5gwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGb6gIGWWZ8iW8oCYyrcA7Eb1KaMTzqit4zXHEJTVmM82Qk7NIC88fhWqvzKf8z5BSocNjIiaAOVPxcARV30jaDvQYX2M4ri3w8bnITgPiuh2%2B0GsT60BiUacuEKrq7zzhtowv%2BaYOnxAZrBu6phfmu1m7JlEb9u8vHxnRCh7CXQf48NplglSLoewIPP%2BbZIBVRf1O%2BFw6XVgslsQHd7RKXf8%2FlTt4XOlE47AYbwzOKzEnSA4aaybvTC5U8ak%2Bi%2F3tExbuPtJ3NShRWtHMs9mlibn1EnlA3Ke9xzK%2BDByaM621NKRMAY774xttpggkon4X093FszWppxQGCLhr6LlcIGPPOco9%2B6fSoFRmPM%2Bl6IPFeLaOCnSsxA44Te%2BQwWQtUbtg1zyVE%2BeSvx8Hz%2FTXeJv1msNlX8YXZu%2BwEdzPFvD%2FxhC5adhdDRFwAIhDx5JKc2hKpxe9yZMuSAkYUd75cEV33ZCuGyfx08cSKVEUDflAV%2FQO%2BbOx7v76qt3TmjkehTsyLSSzX3JNiBYHaeWOG%2B%2FcLar8Nu%2F%2BbJg83XVqQI6oXw6cwFnceEFir%2FCwrLqk5g1dcWIOdjtg7yx4alf%2B2TBc1yxOoBx1DalFeaKKzFGU7gKVOtbtWHD2NtDsK7Pf1KRqrAR8ou5EIBMNWa670GOqUB%2BwajfHyfah7q3rBU7DzfrD4Bpx9KCeqXXJAwTCUygEy%2ByBTMEbZ3ntNTooE4jsiKf1I6n3YhVTRAUkAC1XUqfCzZC9Zk61lE2MckXOYDa4sRIa0Dwo06r0AqpaURgw1DA0%2BtDUXBDjgglmzJGCoMti8cQ21bj3rhou1%2BWsePcse8MaS7Je%2B9nzfhONNdvNfer8QZfUfVl3GYEj5CPzh0%2Bs1RyzjP&X-Amz-Signature=d6b7d17c82e99fb212427274532308690468361e37a440f01b4fa71546fb195b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
