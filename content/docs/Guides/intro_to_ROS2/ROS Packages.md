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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75QOIJB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICgSUd2n51EblBbtSzmiIUkjh9EN2V1MD%2BitWJbh%2FPo3AiEA1V6kXgWam96vWzoV2aRUXD6x3JHtaf0yaM%2BgTShKOqQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOXU%2FixlFnBtASIcRSrcAwnbEKLn0ndcfno5JZNDwr0fMNmK17K2Jc3EvyotT27ZQFN%2FHV8o%2Fo9WtFllzIUbW63dK%2Bo4vaTlcLS6tFMy%2FXWIRYPoJva8xvBHnpAVZ9PKE6FW4H1%2FbCamdRZ9Md2O9Wl6Id%2BMY9ZeR6nTK3bqp3JE7ljLPiYB%2FCmis77emQsi60eZBfqiXYZ2GY8Pzil%2BpWxkXU4d7lQytQUxYpFtJDIdmHsvW1iqQHMGx%2BLQhSw5eWhn0G9zA7%2BiDpobOQSAaxJsyV0Q3CHHNAoRcst03lmVkXZ4ky8Fb4Fh0qCN25UoKDMkJOROB%2FpF91O4PoITqBSUInWFhviQnZFTdL1k4fNMwSXzI1DWEW8CFhQO%2FPy2dtqydqyPazO61H1CRn5EX%2Bi1UnHicmldCVf4LvdPdjCu2ygJL9pZkKZWczB%2FspnX69t4PY%2BTByRKGrfqxyrOJFH%2BbWHUony4Aw%2B3pch6fY4MZhrNxBproMETt0HgpSPkSltxHbNyaA3Ci7BuGjjL4eHy24VvY5%2FloDPJsAJK%2FuATGAJst98QvEF75hbKwt0xb4AzppXrgreKWPqWQhVxtnlR06Gl%2BwyKJaavdygikqJohOKrV1zmwyCPZLWrFdDFnAnQZ%2B3U3cV1L7sEMN3Y%2FsQGOqUBp50coUvul2AtAd%2FgIr7Vt2NydgMpE3KEoJMeg8uGqeIEsZDIUD3KEtrXYQLwnjg7YsSwCPkeHEGGm9vu%2FAzQt0XY69Oxj6JA6TfvmGz%2Ftp8pVo3JVr0kTJFg2Ke23M8s0Jh0E7jJtdIzeJw8ikAVAZOb2G70s9bRiJMSPNoEChCaVAB6iuynkYy9OdAoKxdQcjJRFlchaW37AeUb5o2ZoxMo8Zz9&X-Amz-Signature=eb220495184af132a8c552a0e030ee2eefe316561617bfc6cfa2d834df5db0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75QOIJB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICgSUd2n51EblBbtSzmiIUkjh9EN2V1MD%2BitWJbh%2FPo3AiEA1V6kXgWam96vWzoV2aRUXD6x3JHtaf0yaM%2BgTShKOqQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOXU%2FixlFnBtASIcRSrcAwnbEKLn0ndcfno5JZNDwr0fMNmK17K2Jc3EvyotT27ZQFN%2FHV8o%2Fo9WtFllzIUbW63dK%2Bo4vaTlcLS6tFMy%2FXWIRYPoJva8xvBHnpAVZ9PKE6FW4H1%2FbCamdRZ9Md2O9Wl6Id%2BMY9ZeR6nTK3bqp3JE7ljLPiYB%2FCmis77emQsi60eZBfqiXYZ2GY8Pzil%2BpWxkXU4d7lQytQUxYpFtJDIdmHsvW1iqQHMGx%2BLQhSw5eWhn0G9zA7%2BiDpobOQSAaxJsyV0Q3CHHNAoRcst03lmVkXZ4ky8Fb4Fh0qCN25UoKDMkJOROB%2FpF91O4PoITqBSUInWFhviQnZFTdL1k4fNMwSXzI1DWEW8CFhQO%2FPy2dtqydqyPazO61H1CRn5EX%2Bi1UnHicmldCVf4LvdPdjCu2ygJL9pZkKZWczB%2FspnX69t4PY%2BTByRKGrfqxyrOJFH%2BbWHUony4Aw%2B3pch6fY4MZhrNxBproMETt0HgpSPkSltxHbNyaA3Ci7BuGjjL4eHy24VvY5%2FloDPJsAJK%2FuATGAJst98QvEF75hbKwt0xb4AzppXrgreKWPqWQhVxtnlR06Gl%2BwyKJaavdygikqJohOKrV1zmwyCPZLWrFdDFnAnQZ%2B3U3cV1L7sEMN3Y%2FsQGOqUBp50coUvul2AtAd%2FgIr7Vt2NydgMpE3KEoJMeg8uGqeIEsZDIUD3KEtrXYQLwnjg7YsSwCPkeHEGGm9vu%2FAzQt0XY69Oxj6JA6TfvmGz%2Ftp8pVo3JVr0kTJFg2Ke23M8s0Jh0E7jJtdIzeJw8ikAVAZOb2G70s9bRiJMSPNoEChCaVAB6iuynkYy9OdAoKxdQcjJRFlchaW37AeUb5o2ZoxMo8Zz9&X-Amz-Signature=dfc9c9998dfa74b171bd6c600a7061a89b23769b9fcb4e0bbb898fa757e006de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75QOIJB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICgSUd2n51EblBbtSzmiIUkjh9EN2V1MD%2BitWJbh%2FPo3AiEA1V6kXgWam96vWzoV2aRUXD6x3JHtaf0yaM%2BgTShKOqQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOXU%2FixlFnBtASIcRSrcAwnbEKLn0ndcfno5JZNDwr0fMNmK17K2Jc3EvyotT27ZQFN%2FHV8o%2Fo9WtFllzIUbW63dK%2Bo4vaTlcLS6tFMy%2FXWIRYPoJva8xvBHnpAVZ9PKE6FW4H1%2FbCamdRZ9Md2O9Wl6Id%2BMY9ZeR6nTK3bqp3JE7ljLPiYB%2FCmis77emQsi60eZBfqiXYZ2GY8Pzil%2BpWxkXU4d7lQytQUxYpFtJDIdmHsvW1iqQHMGx%2BLQhSw5eWhn0G9zA7%2BiDpobOQSAaxJsyV0Q3CHHNAoRcst03lmVkXZ4ky8Fb4Fh0qCN25UoKDMkJOROB%2FpF91O4PoITqBSUInWFhviQnZFTdL1k4fNMwSXzI1DWEW8CFhQO%2FPy2dtqydqyPazO61H1CRn5EX%2Bi1UnHicmldCVf4LvdPdjCu2ygJL9pZkKZWczB%2FspnX69t4PY%2BTByRKGrfqxyrOJFH%2BbWHUony4Aw%2B3pch6fY4MZhrNxBproMETt0HgpSPkSltxHbNyaA3Ci7BuGjjL4eHy24VvY5%2FloDPJsAJK%2FuATGAJst98QvEF75hbKwt0xb4AzppXrgreKWPqWQhVxtnlR06Gl%2BwyKJaavdygikqJohOKrV1zmwyCPZLWrFdDFnAnQZ%2B3U3cV1L7sEMN3Y%2FsQGOqUBp50coUvul2AtAd%2FgIr7Vt2NydgMpE3KEoJMeg8uGqeIEsZDIUD3KEtrXYQLwnjg7YsSwCPkeHEGGm9vu%2FAzQt0XY69Oxj6JA6TfvmGz%2Ftp8pVo3JVr0kTJFg2Ke23M8s0Jh0E7jJtdIzeJw8ikAVAZOb2G70s9bRiJMSPNoEChCaVAB6iuynkYy9OdAoKxdQcjJRFlchaW37AeUb5o2ZoxMo8Zz9&X-Amz-Signature=a54e8d626c40c535c19e11f674db27c409aca66ea9050346045256a5546d6ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75QOIJB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICgSUd2n51EblBbtSzmiIUkjh9EN2V1MD%2BitWJbh%2FPo3AiEA1V6kXgWam96vWzoV2aRUXD6x3JHtaf0yaM%2BgTShKOqQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOXU%2FixlFnBtASIcRSrcAwnbEKLn0ndcfno5JZNDwr0fMNmK17K2Jc3EvyotT27ZQFN%2FHV8o%2Fo9WtFllzIUbW63dK%2Bo4vaTlcLS6tFMy%2FXWIRYPoJva8xvBHnpAVZ9PKE6FW4H1%2FbCamdRZ9Md2O9Wl6Id%2BMY9ZeR6nTK3bqp3JE7ljLPiYB%2FCmis77emQsi60eZBfqiXYZ2GY8Pzil%2BpWxkXU4d7lQytQUxYpFtJDIdmHsvW1iqQHMGx%2BLQhSw5eWhn0G9zA7%2BiDpobOQSAaxJsyV0Q3CHHNAoRcst03lmVkXZ4ky8Fb4Fh0qCN25UoKDMkJOROB%2FpF91O4PoITqBSUInWFhviQnZFTdL1k4fNMwSXzI1DWEW8CFhQO%2FPy2dtqydqyPazO61H1CRn5EX%2Bi1UnHicmldCVf4LvdPdjCu2ygJL9pZkKZWczB%2FspnX69t4PY%2BTByRKGrfqxyrOJFH%2BbWHUony4Aw%2B3pch6fY4MZhrNxBproMETt0HgpSPkSltxHbNyaA3Ci7BuGjjL4eHy24VvY5%2FloDPJsAJK%2FuATGAJst98QvEF75hbKwt0xb4AzppXrgreKWPqWQhVxtnlR06Gl%2BwyKJaavdygikqJohOKrV1zmwyCPZLWrFdDFnAnQZ%2B3U3cV1L7sEMN3Y%2FsQGOqUBp50coUvul2AtAd%2FgIr7Vt2NydgMpE3KEoJMeg8uGqeIEsZDIUD3KEtrXYQLwnjg7YsSwCPkeHEGGm9vu%2FAzQt0XY69Oxj6JA6TfvmGz%2Ftp8pVo3JVr0kTJFg2Ke23M8s0Jh0E7jJtdIzeJw8ikAVAZOb2G70s9bRiJMSPNoEChCaVAB6iuynkYy9OdAoKxdQcjJRFlchaW37AeUb5o2ZoxMo8Zz9&X-Amz-Signature=d6703bb498e5a5201b9c93e049a81bfe5617bb4ebac832fa95ec5641fbb7ac39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75QOIJB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICgSUd2n51EblBbtSzmiIUkjh9EN2V1MD%2BitWJbh%2FPo3AiEA1V6kXgWam96vWzoV2aRUXD6x3JHtaf0yaM%2BgTShKOqQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOXU%2FixlFnBtASIcRSrcAwnbEKLn0ndcfno5JZNDwr0fMNmK17K2Jc3EvyotT27ZQFN%2FHV8o%2Fo9WtFllzIUbW63dK%2Bo4vaTlcLS6tFMy%2FXWIRYPoJva8xvBHnpAVZ9PKE6FW4H1%2FbCamdRZ9Md2O9Wl6Id%2BMY9ZeR6nTK3bqp3JE7ljLPiYB%2FCmis77emQsi60eZBfqiXYZ2GY8Pzil%2BpWxkXU4d7lQytQUxYpFtJDIdmHsvW1iqQHMGx%2BLQhSw5eWhn0G9zA7%2BiDpobOQSAaxJsyV0Q3CHHNAoRcst03lmVkXZ4ky8Fb4Fh0qCN25UoKDMkJOROB%2FpF91O4PoITqBSUInWFhviQnZFTdL1k4fNMwSXzI1DWEW8CFhQO%2FPy2dtqydqyPazO61H1CRn5EX%2Bi1UnHicmldCVf4LvdPdjCu2ygJL9pZkKZWczB%2FspnX69t4PY%2BTByRKGrfqxyrOJFH%2BbWHUony4Aw%2B3pch6fY4MZhrNxBproMETt0HgpSPkSltxHbNyaA3Ci7BuGjjL4eHy24VvY5%2FloDPJsAJK%2FuATGAJst98QvEF75hbKwt0xb4AzppXrgreKWPqWQhVxtnlR06Gl%2BwyKJaavdygikqJohOKrV1zmwyCPZLWrFdDFnAnQZ%2B3U3cV1L7sEMN3Y%2FsQGOqUBp50coUvul2AtAd%2FgIr7Vt2NydgMpE3KEoJMeg8uGqeIEsZDIUD3KEtrXYQLwnjg7YsSwCPkeHEGGm9vu%2FAzQt0XY69Oxj6JA6TfvmGz%2Ftp8pVo3JVr0kTJFg2Ke23M8s0Jh0E7jJtdIzeJw8ikAVAZOb2G70s9bRiJMSPNoEChCaVAB6iuynkYy9OdAoKxdQcjJRFlchaW37AeUb5o2ZoxMo8Zz9&X-Amz-Signature=08a372804405cf35126715068aa6fe8ea17119b116b266b3ca66fbb525c874c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75QOIJB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICgSUd2n51EblBbtSzmiIUkjh9EN2V1MD%2BitWJbh%2FPo3AiEA1V6kXgWam96vWzoV2aRUXD6x3JHtaf0yaM%2BgTShKOqQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOXU%2FixlFnBtASIcRSrcAwnbEKLn0ndcfno5JZNDwr0fMNmK17K2Jc3EvyotT27ZQFN%2FHV8o%2Fo9WtFllzIUbW63dK%2Bo4vaTlcLS6tFMy%2FXWIRYPoJva8xvBHnpAVZ9PKE6FW4H1%2FbCamdRZ9Md2O9Wl6Id%2BMY9ZeR6nTK3bqp3JE7ljLPiYB%2FCmis77emQsi60eZBfqiXYZ2GY8Pzil%2BpWxkXU4d7lQytQUxYpFtJDIdmHsvW1iqQHMGx%2BLQhSw5eWhn0G9zA7%2BiDpobOQSAaxJsyV0Q3CHHNAoRcst03lmVkXZ4ky8Fb4Fh0qCN25UoKDMkJOROB%2FpF91O4PoITqBSUInWFhviQnZFTdL1k4fNMwSXzI1DWEW8CFhQO%2FPy2dtqydqyPazO61H1CRn5EX%2Bi1UnHicmldCVf4LvdPdjCu2ygJL9pZkKZWczB%2FspnX69t4PY%2BTByRKGrfqxyrOJFH%2BbWHUony4Aw%2B3pch6fY4MZhrNxBproMETt0HgpSPkSltxHbNyaA3Ci7BuGjjL4eHy24VvY5%2FloDPJsAJK%2FuATGAJst98QvEF75hbKwt0xb4AzppXrgreKWPqWQhVxtnlR06Gl%2BwyKJaavdygikqJohOKrV1zmwyCPZLWrFdDFnAnQZ%2B3U3cV1L7sEMN3Y%2FsQGOqUBp50coUvul2AtAd%2FgIr7Vt2NydgMpE3KEoJMeg8uGqeIEsZDIUD3KEtrXYQLwnjg7YsSwCPkeHEGGm9vu%2FAzQt0XY69Oxj6JA6TfvmGz%2Ftp8pVo3JVr0kTJFg2Ke23M8s0Jh0E7jJtdIzeJw8ikAVAZOb2G70s9bRiJMSPNoEChCaVAB6iuynkYy9OdAoKxdQcjJRFlchaW37AeUb5o2ZoxMo8Zz9&X-Amz-Signature=6fceb5e13cd8e34597346cf6b7637858e3d5b5519f4a9757235c05a457eb5360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75QOIJB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICgSUd2n51EblBbtSzmiIUkjh9EN2V1MD%2BitWJbh%2FPo3AiEA1V6kXgWam96vWzoV2aRUXD6x3JHtaf0yaM%2BgTShKOqQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOXU%2FixlFnBtASIcRSrcAwnbEKLn0ndcfno5JZNDwr0fMNmK17K2Jc3EvyotT27ZQFN%2FHV8o%2Fo9WtFllzIUbW63dK%2Bo4vaTlcLS6tFMy%2FXWIRYPoJva8xvBHnpAVZ9PKE6FW4H1%2FbCamdRZ9Md2O9Wl6Id%2BMY9ZeR6nTK3bqp3JE7ljLPiYB%2FCmis77emQsi60eZBfqiXYZ2GY8Pzil%2BpWxkXU4d7lQytQUxYpFtJDIdmHsvW1iqQHMGx%2BLQhSw5eWhn0G9zA7%2BiDpobOQSAaxJsyV0Q3CHHNAoRcst03lmVkXZ4ky8Fb4Fh0qCN25UoKDMkJOROB%2FpF91O4PoITqBSUInWFhviQnZFTdL1k4fNMwSXzI1DWEW8CFhQO%2FPy2dtqydqyPazO61H1CRn5EX%2Bi1UnHicmldCVf4LvdPdjCu2ygJL9pZkKZWczB%2FspnX69t4PY%2BTByRKGrfqxyrOJFH%2BbWHUony4Aw%2B3pch6fY4MZhrNxBproMETt0HgpSPkSltxHbNyaA3Ci7BuGjjL4eHy24VvY5%2FloDPJsAJK%2FuATGAJst98QvEF75hbKwt0xb4AzppXrgreKWPqWQhVxtnlR06Gl%2BwyKJaavdygikqJohOKrV1zmwyCPZLWrFdDFnAnQZ%2B3U3cV1L7sEMN3Y%2FsQGOqUBp50coUvul2AtAd%2FgIr7Vt2NydgMpE3KEoJMeg8uGqeIEsZDIUD3KEtrXYQLwnjg7YsSwCPkeHEGGm9vu%2FAzQt0XY69Oxj6JA6TfvmGz%2Ftp8pVo3JVr0kTJFg2Ke23M8s0Jh0E7jJtdIzeJw8ikAVAZOb2G70s9bRiJMSPNoEChCaVAB6iuynkYy9OdAoKxdQcjJRFlchaW37AeUb5o2ZoxMo8Zz9&X-Amz-Signature=2ec20ca644645963dc08a64e0106a805583585d3cf0283435f96d4cfaa68595f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
