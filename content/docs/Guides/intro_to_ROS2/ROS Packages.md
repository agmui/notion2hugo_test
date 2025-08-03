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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JY2G4X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc4CkJNsconcOs%2BLeZMt0zpPJrNO%2BjeFWYPnbHPFuupgIgKtd74zooy%2BZ8jrwdj80eiJSaXEEahYCTMDIWhc11F6gq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFQBab3PHDxBOBUNhCrcA4UjKei4b7DxeXRV%2FW2tmyukyK42zvXt2qlHxomLWignKv8lvbJAsRQBMz7IomEe6NkbsXnataH5Mvuou8EGPN%2Bf8qufQUURFrYoA%2F61hlwczO0itto3bXrnS%2Bto3F8URCqZnmiF9Z4AIninauN9mFW5nBYcLuXMVM6Mu9PBqsYEE7a2dyC5PwOnmCXfvgJUpXuS4KIZH0tK0XV9yKUqEML%2FE5M918426tV2tfxSz%2BN7GHOOTtal158Rj1MTtS%2FMfvSp52YMtkdnA4C7WyY97CnvMeQj7ffmw6%2B8%2BI3pAq7KRYcZnuky4z3pJOsnCyb6sUf5YjTLAqPvaxeUCJmK%2F8m8s2Q8kA3lhAodOvU1DSN4I1lK4Dovhe8iugC1iwLqo9A%2FXo%2BQOsfqZnqv6NCqDDiwhHzqzfHjBL6c78V4PiONdrINTgFoglZx5J%2BTxN78YqnL%2BS3RuGI657PIlwBIr2vy08E5t7yYiqgEoaQzPXcaNQTm6sskByRcafKOID8tEsjF6p7BSwMjAHsvdmTeB71gruI%2BCvI%2Fc7G6oQ4yeNckwteU%2BT0wTLULVYVdM3sX8WdNef2bfq5d6YRtjWNk9GmoG%2F9Nrp9WGi7wkBq8XJfmjXSMrzm%2FFORmqKRgMOvRvcQGOqUBARKgei%2BPTFQ3SdNRnF3Uea1y5OYSk64PxUtxzlbb9X%2FMIWj9dtxkgFtlDRUH6%2BxJkNvDe3o0hPAfD3fEd0hSSesb3Uc%2FXtYkACq4k3wofVbzkHtj6laCHfUQ0DzAceW1LwlTVdBgE6I7ROSoZxFvF9OPV7toVk0y0S8mYmk9N%2FhaNv3Gnrn0Tp45kAspD2ZI4jjxxJYS26gsbbddQX%2BIi81J9BUy&X-Amz-Signature=dfe2d47fdfa3b4982b302a21703848655a31e2b48f358155e593fde40f07c490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JY2G4X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc4CkJNsconcOs%2BLeZMt0zpPJrNO%2BjeFWYPnbHPFuupgIgKtd74zooy%2BZ8jrwdj80eiJSaXEEahYCTMDIWhc11F6gq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFQBab3PHDxBOBUNhCrcA4UjKei4b7DxeXRV%2FW2tmyukyK42zvXt2qlHxomLWignKv8lvbJAsRQBMz7IomEe6NkbsXnataH5Mvuou8EGPN%2Bf8qufQUURFrYoA%2F61hlwczO0itto3bXrnS%2Bto3F8URCqZnmiF9Z4AIninauN9mFW5nBYcLuXMVM6Mu9PBqsYEE7a2dyC5PwOnmCXfvgJUpXuS4KIZH0tK0XV9yKUqEML%2FE5M918426tV2tfxSz%2BN7GHOOTtal158Rj1MTtS%2FMfvSp52YMtkdnA4C7WyY97CnvMeQj7ffmw6%2B8%2BI3pAq7KRYcZnuky4z3pJOsnCyb6sUf5YjTLAqPvaxeUCJmK%2F8m8s2Q8kA3lhAodOvU1DSN4I1lK4Dovhe8iugC1iwLqo9A%2FXo%2BQOsfqZnqv6NCqDDiwhHzqzfHjBL6c78V4PiONdrINTgFoglZx5J%2BTxN78YqnL%2BS3RuGI657PIlwBIr2vy08E5t7yYiqgEoaQzPXcaNQTm6sskByRcafKOID8tEsjF6p7BSwMjAHsvdmTeB71gruI%2BCvI%2Fc7G6oQ4yeNckwteU%2BT0wTLULVYVdM3sX8WdNef2bfq5d6YRtjWNk9GmoG%2F9Nrp9WGi7wkBq8XJfmjXSMrzm%2FFORmqKRgMOvRvcQGOqUBARKgei%2BPTFQ3SdNRnF3Uea1y5OYSk64PxUtxzlbb9X%2FMIWj9dtxkgFtlDRUH6%2BxJkNvDe3o0hPAfD3fEd0hSSesb3Uc%2FXtYkACq4k3wofVbzkHtj6laCHfUQ0DzAceW1LwlTVdBgE6I7ROSoZxFvF9OPV7toVk0y0S8mYmk9N%2FhaNv3Gnrn0Tp45kAspD2ZI4jjxxJYS26gsbbddQX%2BIi81J9BUy&X-Amz-Signature=918f73e2fb798dd87896bf1882d3fb92ec69c228a2e0b1b65e4222548845f74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JY2G4X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc4CkJNsconcOs%2BLeZMt0zpPJrNO%2BjeFWYPnbHPFuupgIgKtd74zooy%2BZ8jrwdj80eiJSaXEEahYCTMDIWhc11F6gq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFQBab3PHDxBOBUNhCrcA4UjKei4b7DxeXRV%2FW2tmyukyK42zvXt2qlHxomLWignKv8lvbJAsRQBMz7IomEe6NkbsXnataH5Mvuou8EGPN%2Bf8qufQUURFrYoA%2F61hlwczO0itto3bXrnS%2Bto3F8URCqZnmiF9Z4AIninauN9mFW5nBYcLuXMVM6Mu9PBqsYEE7a2dyC5PwOnmCXfvgJUpXuS4KIZH0tK0XV9yKUqEML%2FE5M918426tV2tfxSz%2BN7GHOOTtal158Rj1MTtS%2FMfvSp52YMtkdnA4C7WyY97CnvMeQj7ffmw6%2B8%2BI3pAq7KRYcZnuky4z3pJOsnCyb6sUf5YjTLAqPvaxeUCJmK%2F8m8s2Q8kA3lhAodOvU1DSN4I1lK4Dovhe8iugC1iwLqo9A%2FXo%2BQOsfqZnqv6NCqDDiwhHzqzfHjBL6c78V4PiONdrINTgFoglZx5J%2BTxN78YqnL%2BS3RuGI657PIlwBIr2vy08E5t7yYiqgEoaQzPXcaNQTm6sskByRcafKOID8tEsjF6p7BSwMjAHsvdmTeB71gruI%2BCvI%2Fc7G6oQ4yeNckwteU%2BT0wTLULVYVdM3sX8WdNef2bfq5d6YRtjWNk9GmoG%2F9Nrp9WGi7wkBq8XJfmjXSMrzm%2FFORmqKRgMOvRvcQGOqUBARKgei%2BPTFQ3SdNRnF3Uea1y5OYSk64PxUtxzlbb9X%2FMIWj9dtxkgFtlDRUH6%2BxJkNvDe3o0hPAfD3fEd0hSSesb3Uc%2FXtYkACq4k3wofVbzkHtj6laCHfUQ0DzAceW1LwlTVdBgE6I7ROSoZxFvF9OPV7toVk0y0S8mYmk9N%2FhaNv3Gnrn0Tp45kAspD2ZI4jjxxJYS26gsbbddQX%2BIi81J9BUy&X-Amz-Signature=8fde4dfcb232ec19ea9c01869aac0f239515d56870a2b8479f8064c8fee1ba8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JY2G4X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc4CkJNsconcOs%2BLeZMt0zpPJrNO%2BjeFWYPnbHPFuupgIgKtd74zooy%2BZ8jrwdj80eiJSaXEEahYCTMDIWhc11F6gq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFQBab3PHDxBOBUNhCrcA4UjKei4b7DxeXRV%2FW2tmyukyK42zvXt2qlHxomLWignKv8lvbJAsRQBMz7IomEe6NkbsXnataH5Mvuou8EGPN%2Bf8qufQUURFrYoA%2F61hlwczO0itto3bXrnS%2Bto3F8URCqZnmiF9Z4AIninauN9mFW5nBYcLuXMVM6Mu9PBqsYEE7a2dyC5PwOnmCXfvgJUpXuS4KIZH0tK0XV9yKUqEML%2FE5M918426tV2tfxSz%2BN7GHOOTtal158Rj1MTtS%2FMfvSp52YMtkdnA4C7WyY97CnvMeQj7ffmw6%2B8%2BI3pAq7KRYcZnuky4z3pJOsnCyb6sUf5YjTLAqPvaxeUCJmK%2F8m8s2Q8kA3lhAodOvU1DSN4I1lK4Dovhe8iugC1iwLqo9A%2FXo%2BQOsfqZnqv6NCqDDiwhHzqzfHjBL6c78V4PiONdrINTgFoglZx5J%2BTxN78YqnL%2BS3RuGI657PIlwBIr2vy08E5t7yYiqgEoaQzPXcaNQTm6sskByRcafKOID8tEsjF6p7BSwMjAHsvdmTeB71gruI%2BCvI%2Fc7G6oQ4yeNckwteU%2BT0wTLULVYVdM3sX8WdNef2bfq5d6YRtjWNk9GmoG%2F9Nrp9WGi7wkBq8XJfmjXSMrzm%2FFORmqKRgMOvRvcQGOqUBARKgei%2BPTFQ3SdNRnF3Uea1y5OYSk64PxUtxzlbb9X%2FMIWj9dtxkgFtlDRUH6%2BxJkNvDe3o0hPAfD3fEd0hSSesb3Uc%2FXtYkACq4k3wofVbzkHtj6laCHfUQ0DzAceW1LwlTVdBgE6I7ROSoZxFvF9OPV7toVk0y0S8mYmk9N%2FhaNv3Gnrn0Tp45kAspD2ZI4jjxxJYS26gsbbddQX%2BIi81J9BUy&X-Amz-Signature=ea5b24e36bc8f2580b031d1c61c1a26999ba4cd888ad23a82796260b8369c612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JY2G4X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc4CkJNsconcOs%2BLeZMt0zpPJrNO%2BjeFWYPnbHPFuupgIgKtd74zooy%2BZ8jrwdj80eiJSaXEEahYCTMDIWhc11F6gq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFQBab3PHDxBOBUNhCrcA4UjKei4b7DxeXRV%2FW2tmyukyK42zvXt2qlHxomLWignKv8lvbJAsRQBMz7IomEe6NkbsXnataH5Mvuou8EGPN%2Bf8qufQUURFrYoA%2F61hlwczO0itto3bXrnS%2Bto3F8URCqZnmiF9Z4AIninauN9mFW5nBYcLuXMVM6Mu9PBqsYEE7a2dyC5PwOnmCXfvgJUpXuS4KIZH0tK0XV9yKUqEML%2FE5M918426tV2tfxSz%2BN7GHOOTtal158Rj1MTtS%2FMfvSp52YMtkdnA4C7WyY97CnvMeQj7ffmw6%2B8%2BI3pAq7KRYcZnuky4z3pJOsnCyb6sUf5YjTLAqPvaxeUCJmK%2F8m8s2Q8kA3lhAodOvU1DSN4I1lK4Dovhe8iugC1iwLqo9A%2FXo%2BQOsfqZnqv6NCqDDiwhHzqzfHjBL6c78V4PiONdrINTgFoglZx5J%2BTxN78YqnL%2BS3RuGI657PIlwBIr2vy08E5t7yYiqgEoaQzPXcaNQTm6sskByRcafKOID8tEsjF6p7BSwMjAHsvdmTeB71gruI%2BCvI%2Fc7G6oQ4yeNckwteU%2BT0wTLULVYVdM3sX8WdNef2bfq5d6YRtjWNk9GmoG%2F9Nrp9WGi7wkBq8XJfmjXSMrzm%2FFORmqKRgMOvRvcQGOqUBARKgei%2BPTFQ3SdNRnF3Uea1y5OYSk64PxUtxzlbb9X%2FMIWj9dtxkgFtlDRUH6%2BxJkNvDe3o0hPAfD3fEd0hSSesb3Uc%2FXtYkACq4k3wofVbzkHtj6laCHfUQ0DzAceW1LwlTVdBgE6I7ROSoZxFvF9OPV7toVk0y0S8mYmk9N%2FhaNv3Gnrn0Tp45kAspD2ZI4jjxxJYS26gsbbddQX%2BIi81J9BUy&X-Amz-Signature=dcf519ecf3ba535320f980ff2e191d7825c2a6d33c5777e03b6a17cff5b96af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JY2G4X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc4CkJNsconcOs%2BLeZMt0zpPJrNO%2BjeFWYPnbHPFuupgIgKtd74zooy%2BZ8jrwdj80eiJSaXEEahYCTMDIWhc11F6gq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFQBab3PHDxBOBUNhCrcA4UjKei4b7DxeXRV%2FW2tmyukyK42zvXt2qlHxomLWignKv8lvbJAsRQBMz7IomEe6NkbsXnataH5Mvuou8EGPN%2Bf8qufQUURFrYoA%2F61hlwczO0itto3bXrnS%2Bto3F8URCqZnmiF9Z4AIninauN9mFW5nBYcLuXMVM6Mu9PBqsYEE7a2dyC5PwOnmCXfvgJUpXuS4KIZH0tK0XV9yKUqEML%2FE5M918426tV2tfxSz%2BN7GHOOTtal158Rj1MTtS%2FMfvSp52YMtkdnA4C7WyY97CnvMeQj7ffmw6%2B8%2BI3pAq7KRYcZnuky4z3pJOsnCyb6sUf5YjTLAqPvaxeUCJmK%2F8m8s2Q8kA3lhAodOvU1DSN4I1lK4Dovhe8iugC1iwLqo9A%2FXo%2BQOsfqZnqv6NCqDDiwhHzqzfHjBL6c78V4PiONdrINTgFoglZx5J%2BTxN78YqnL%2BS3RuGI657PIlwBIr2vy08E5t7yYiqgEoaQzPXcaNQTm6sskByRcafKOID8tEsjF6p7BSwMjAHsvdmTeB71gruI%2BCvI%2Fc7G6oQ4yeNckwteU%2BT0wTLULVYVdM3sX8WdNef2bfq5d6YRtjWNk9GmoG%2F9Nrp9WGi7wkBq8XJfmjXSMrzm%2FFORmqKRgMOvRvcQGOqUBARKgei%2BPTFQ3SdNRnF3Uea1y5OYSk64PxUtxzlbb9X%2FMIWj9dtxkgFtlDRUH6%2BxJkNvDe3o0hPAfD3fEd0hSSesb3Uc%2FXtYkACq4k3wofVbzkHtj6laCHfUQ0DzAceW1LwlTVdBgE6I7ROSoZxFvF9OPV7toVk0y0S8mYmk9N%2FhaNv3Gnrn0Tp45kAspD2ZI4jjxxJYS26gsbbddQX%2BIi81J9BUy&X-Amz-Signature=2a360b949fbab878249131fcd27ee35ec8097243e09e4d13ab487d82f66117de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JY2G4X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc4CkJNsconcOs%2BLeZMt0zpPJrNO%2BjeFWYPnbHPFuupgIgKtd74zooy%2BZ8jrwdj80eiJSaXEEahYCTMDIWhc11F6gq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFQBab3PHDxBOBUNhCrcA4UjKei4b7DxeXRV%2FW2tmyukyK42zvXt2qlHxomLWignKv8lvbJAsRQBMz7IomEe6NkbsXnataH5Mvuou8EGPN%2Bf8qufQUURFrYoA%2F61hlwczO0itto3bXrnS%2Bto3F8URCqZnmiF9Z4AIninauN9mFW5nBYcLuXMVM6Mu9PBqsYEE7a2dyC5PwOnmCXfvgJUpXuS4KIZH0tK0XV9yKUqEML%2FE5M918426tV2tfxSz%2BN7GHOOTtal158Rj1MTtS%2FMfvSp52YMtkdnA4C7WyY97CnvMeQj7ffmw6%2B8%2BI3pAq7KRYcZnuky4z3pJOsnCyb6sUf5YjTLAqPvaxeUCJmK%2F8m8s2Q8kA3lhAodOvU1DSN4I1lK4Dovhe8iugC1iwLqo9A%2FXo%2BQOsfqZnqv6NCqDDiwhHzqzfHjBL6c78V4PiONdrINTgFoglZx5J%2BTxN78YqnL%2BS3RuGI657PIlwBIr2vy08E5t7yYiqgEoaQzPXcaNQTm6sskByRcafKOID8tEsjF6p7BSwMjAHsvdmTeB71gruI%2BCvI%2Fc7G6oQ4yeNckwteU%2BT0wTLULVYVdM3sX8WdNef2bfq5d6YRtjWNk9GmoG%2F9Nrp9WGi7wkBq8XJfmjXSMrzm%2FFORmqKRgMOvRvcQGOqUBARKgei%2BPTFQ3SdNRnF3Uea1y5OYSk64PxUtxzlbb9X%2FMIWj9dtxkgFtlDRUH6%2BxJkNvDe3o0hPAfD3fEd0hSSesb3Uc%2FXtYkACq4k3wofVbzkHtj6laCHfUQ0DzAceW1LwlTVdBgE6I7ROSoZxFvF9OPV7toVk0y0S8mYmk9N%2FhaNv3Gnrn0Tp45kAspD2ZI4jjxxJYS26gsbbddQX%2BIi81J9BUy&X-Amz-Signature=dfd4d961c9b5a51e9ec0d429565a597c63d09422adaa3426742e8c8015c43567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
