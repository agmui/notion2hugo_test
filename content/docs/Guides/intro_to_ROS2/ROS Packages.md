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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWCAXL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCvMrE%2BHsThsN1rDXaT3Pu571YMepYq0TTdLFTBT2lCOwIhAKhPeJJQN%2BOls%2FVFbLPi1e8ZUoYSMf%2BousiDCM3%2FwHd2Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwOXNAq9PSDVReKUrcq3AMTnY56qdOg0m5%2B0UklnRQ4a0TykSbGQaOxxyw%2FZ%2BkXKdJpzp%2FOPuwCY1Kq7lNMwV%2B%2BxywtOgGmcwdaYwTppyrKTiuJ0Zw2iBF3HpMTvEh%2F6TeGqiau7y%2BDIi2EsZyL02ClEHpss5v1Hyo4PbGtGyIqnjafbpLm8LNnHpUjCoOe0JiksFOR%2Bw9mWxWIFRjeXSneFSwvhCwKsFC%2FwhW4o1xr7hfg5ho%2FVeq9jj9VcSKRDB58NfTnf3LkbZdukDHpPXWKSXjPLe0ggXGAWu7SBGJu5uTnKEDZccFMxtOjpIC7tJBGZ33Jo2mBUoF6LSIHcSQa5ezKwqolxdNA4oTy6Y96Z1s2tQ5SuuwQOPMePzVo7X4PzwgEbfWWoHpnizo2APubS%2F8bdjH3kB9KELuRbSxhaCXMQGFsGDZYB2wa%2Bbrf1NXWYwKc4dxlFG4AQmJAXA7Di2dHxchCjsTRvZF30Kjl7NMxOn%2FLmDe0h%2F65XwKOptRrZsJZREoa%2B%2BxlsgQFA9WmeA%2Fq0CXatLF0AXwSaPyps%2Fv7zGyYma84T6dFMI7RITfacJXpJdOoERYWGJgnPw34jDbmuuYNmJFRfUCtcKabpSuVMAsZ%2FcToYYqUdlJgWwaCnjKeAMSXIBEoCjCssNLDBjqkAXwhqCiZQMGgbO6hzWnSa2oCn0LzjnSOd7Hyoa5a%2Fwzlou7dAjV3Sel4nhTP6tEpO2DuBard9jx0zz%2Fs9IoeBDpUofzEhHTgi2M5ANvclqZ4bBdfB073l%2FTVzHES88uQ5K4bBAOXht2DNUl%2FBzkmtzH%2FVI8ZcOGME9BkD5iw71dCwfwKzjz14VeXmEDSPvE4bL6eUSS8EGtAuBPZ5NowYvtJcdmJ&X-Amz-Signature=a91eb514853d4a31ddff405d5e2437c021cfbe9219dfc40f3d1672ccee7002ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWCAXL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCvMrE%2BHsThsN1rDXaT3Pu571YMepYq0TTdLFTBT2lCOwIhAKhPeJJQN%2BOls%2FVFbLPi1e8ZUoYSMf%2BousiDCM3%2FwHd2Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwOXNAq9PSDVReKUrcq3AMTnY56qdOg0m5%2B0UklnRQ4a0TykSbGQaOxxyw%2FZ%2BkXKdJpzp%2FOPuwCY1Kq7lNMwV%2B%2BxywtOgGmcwdaYwTppyrKTiuJ0Zw2iBF3HpMTvEh%2F6TeGqiau7y%2BDIi2EsZyL02ClEHpss5v1Hyo4PbGtGyIqnjafbpLm8LNnHpUjCoOe0JiksFOR%2Bw9mWxWIFRjeXSneFSwvhCwKsFC%2FwhW4o1xr7hfg5ho%2FVeq9jj9VcSKRDB58NfTnf3LkbZdukDHpPXWKSXjPLe0ggXGAWu7SBGJu5uTnKEDZccFMxtOjpIC7tJBGZ33Jo2mBUoF6LSIHcSQa5ezKwqolxdNA4oTy6Y96Z1s2tQ5SuuwQOPMePzVo7X4PzwgEbfWWoHpnizo2APubS%2F8bdjH3kB9KELuRbSxhaCXMQGFsGDZYB2wa%2Bbrf1NXWYwKc4dxlFG4AQmJAXA7Di2dHxchCjsTRvZF30Kjl7NMxOn%2FLmDe0h%2F65XwKOptRrZsJZREoa%2B%2BxlsgQFA9WmeA%2Fq0CXatLF0AXwSaPyps%2Fv7zGyYma84T6dFMI7RITfacJXpJdOoERYWGJgnPw34jDbmuuYNmJFRfUCtcKabpSuVMAsZ%2FcToYYqUdlJgWwaCnjKeAMSXIBEoCjCssNLDBjqkAXwhqCiZQMGgbO6hzWnSa2oCn0LzjnSOd7Hyoa5a%2Fwzlou7dAjV3Sel4nhTP6tEpO2DuBard9jx0zz%2Fs9IoeBDpUofzEhHTgi2M5ANvclqZ4bBdfB073l%2FTVzHES88uQ5K4bBAOXht2DNUl%2FBzkmtzH%2FVI8ZcOGME9BkD5iw71dCwfwKzjz14VeXmEDSPvE4bL6eUSS8EGtAuBPZ5NowYvtJcdmJ&X-Amz-Signature=723661c259f63c996f880d6a309752e213ca3f4d047bc94f76d3bfd6bb462607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWCAXL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCvMrE%2BHsThsN1rDXaT3Pu571YMepYq0TTdLFTBT2lCOwIhAKhPeJJQN%2BOls%2FVFbLPi1e8ZUoYSMf%2BousiDCM3%2FwHd2Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwOXNAq9PSDVReKUrcq3AMTnY56qdOg0m5%2B0UklnRQ4a0TykSbGQaOxxyw%2FZ%2BkXKdJpzp%2FOPuwCY1Kq7lNMwV%2B%2BxywtOgGmcwdaYwTppyrKTiuJ0Zw2iBF3HpMTvEh%2F6TeGqiau7y%2BDIi2EsZyL02ClEHpss5v1Hyo4PbGtGyIqnjafbpLm8LNnHpUjCoOe0JiksFOR%2Bw9mWxWIFRjeXSneFSwvhCwKsFC%2FwhW4o1xr7hfg5ho%2FVeq9jj9VcSKRDB58NfTnf3LkbZdukDHpPXWKSXjPLe0ggXGAWu7SBGJu5uTnKEDZccFMxtOjpIC7tJBGZ33Jo2mBUoF6LSIHcSQa5ezKwqolxdNA4oTy6Y96Z1s2tQ5SuuwQOPMePzVo7X4PzwgEbfWWoHpnizo2APubS%2F8bdjH3kB9KELuRbSxhaCXMQGFsGDZYB2wa%2Bbrf1NXWYwKc4dxlFG4AQmJAXA7Di2dHxchCjsTRvZF30Kjl7NMxOn%2FLmDe0h%2F65XwKOptRrZsJZREoa%2B%2BxlsgQFA9WmeA%2Fq0CXatLF0AXwSaPyps%2Fv7zGyYma84T6dFMI7RITfacJXpJdOoERYWGJgnPw34jDbmuuYNmJFRfUCtcKabpSuVMAsZ%2FcToYYqUdlJgWwaCnjKeAMSXIBEoCjCssNLDBjqkAXwhqCiZQMGgbO6hzWnSa2oCn0LzjnSOd7Hyoa5a%2Fwzlou7dAjV3Sel4nhTP6tEpO2DuBard9jx0zz%2Fs9IoeBDpUofzEhHTgi2M5ANvclqZ4bBdfB073l%2FTVzHES88uQ5K4bBAOXht2DNUl%2FBzkmtzH%2FVI8ZcOGME9BkD5iw71dCwfwKzjz14VeXmEDSPvE4bL6eUSS8EGtAuBPZ5NowYvtJcdmJ&X-Amz-Signature=f8013408ab706a5ccf31bbf9a176bec971fe1d88ff4f851798382a907d21eb4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWCAXL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCvMrE%2BHsThsN1rDXaT3Pu571YMepYq0TTdLFTBT2lCOwIhAKhPeJJQN%2BOls%2FVFbLPi1e8ZUoYSMf%2BousiDCM3%2FwHd2Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwOXNAq9PSDVReKUrcq3AMTnY56qdOg0m5%2B0UklnRQ4a0TykSbGQaOxxyw%2FZ%2BkXKdJpzp%2FOPuwCY1Kq7lNMwV%2B%2BxywtOgGmcwdaYwTppyrKTiuJ0Zw2iBF3HpMTvEh%2F6TeGqiau7y%2BDIi2EsZyL02ClEHpss5v1Hyo4PbGtGyIqnjafbpLm8LNnHpUjCoOe0JiksFOR%2Bw9mWxWIFRjeXSneFSwvhCwKsFC%2FwhW4o1xr7hfg5ho%2FVeq9jj9VcSKRDB58NfTnf3LkbZdukDHpPXWKSXjPLe0ggXGAWu7SBGJu5uTnKEDZccFMxtOjpIC7tJBGZ33Jo2mBUoF6LSIHcSQa5ezKwqolxdNA4oTy6Y96Z1s2tQ5SuuwQOPMePzVo7X4PzwgEbfWWoHpnizo2APubS%2F8bdjH3kB9KELuRbSxhaCXMQGFsGDZYB2wa%2Bbrf1NXWYwKc4dxlFG4AQmJAXA7Di2dHxchCjsTRvZF30Kjl7NMxOn%2FLmDe0h%2F65XwKOptRrZsJZREoa%2B%2BxlsgQFA9WmeA%2Fq0CXatLF0AXwSaPyps%2Fv7zGyYma84T6dFMI7RITfacJXpJdOoERYWGJgnPw34jDbmuuYNmJFRfUCtcKabpSuVMAsZ%2FcToYYqUdlJgWwaCnjKeAMSXIBEoCjCssNLDBjqkAXwhqCiZQMGgbO6hzWnSa2oCn0LzjnSOd7Hyoa5a%2Fwzlou7dAjV3Sel4nhTP6tEpO2DuBard9jx0zz%2Fs9IoeBDpUofzEhHTgi2M5ANvclqZ4bBdfB073l%2FTVzHES88uQ5K4bBAOXht2DNUl%2FBzkmtzH%2FVI8ZcOGME9BkD5iw71dCwfwKzjz14VeXmEDSPvE4bL6eUSS8EGtAuBPZ5NowYvtJcdmJ&X-Amz-Signature=1468027a5e1c772b6d9622865f9af9eb4d3246a3f17d25046f09cdee1a7bfba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWCAXL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCvMrE%2BHsThsN1rDXaT3Pu571YMepYq0TTdLFTBT2lCOwIhAKhPeJJQN%2BOls%2FVFbLPi1e8ZUoYSMf%2BousiDCM3%2FwHd2Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwOXNAq9PSDVReKUrcq3AMTnY56qdOg0m5%2B0UklnRQ4a0TykSbGQaOxxyw%2FZ%2BkXKdJpzp%2FOPuwCY1Kq7lNMwV%2B%2BxywtOgGmcwdaYwTppyrKTiuJ0Zw2iBF3HpMTvEh%2F6TeGqiau7y%2BDIi2EsZyL02ClEHpss5v1Hyo4PbGtGyIqnjafbpLm8LNnHpUjCoOe0JiksFOR%2Bw9mWxWIFRjeXSneFSwvhCwKsFC%2FwhW4o1xr7hfg5ho%2FVeq9jj9VcSKRDB58NfTnf3LkbZdukDHpPXWKSXjPLe0ggXGAWu7SBGJu5uTnKEDZccFMxtOjpIC7tJBGZ33Jo2mBUoF6LSIHcSQa5ezKwqolxdNA4oTy6Y96Z1s2tQ5SuuwQOPMePzVo7X4PzwgEbfWWoHpnizo2APubS%2F8bdjH3kB9KELuRbSxhaCXMQGFsGDZYB2wa%2Bbrf1NXWYwKc4dxlFG4AQmJAXA7Di2dHxchCjsTRvZF30Kjl7NMxOn%2FLmDe0h%2F65XwKOptRrZsJZREoa%2B%2BxlsgQFA9WmeA%2Fq0CXatLF0AXwSaPyps%2Fv7zGyYma84T6dFMI7RITfacJXpJdOoERYWGJgnPw34jDbmuuYNmJFRfUCtcKabpSuVMAsZ%2FcToYYqUdlJgWwaCnjKeAMSXIBEoCjCssNLDBjqkAXwhqCiZQMGgbO6hzWnSa2oCn0LzjnSOd7Hyoa5a%2Fwzlou7dAjV3Sel4nhTP6tEpO2DuBard9jx0zz%2Fs9IoeBDpUofzEhHTgi2M5ANvclqZ4bBdfB073l%2FTVzHES88uQ5K4bBAOXht2DNUl%2FBzkmtzH%2FVI8ZcOGME9BkD5iw71dCwfwKzjz14VeXmEDSPvE4bL6eUSS8EGtAuBPZ5NowYvtJcdmJ&X-Amz-Signature=07817c26bea4bc17910f21ba7fa8582a5f223fa23050fc0831908edf5a7431d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWCAXL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCvMrE%2BHsThsN1rDXaT3Pu571YMepYq0TTdLFTBT2lCOwIhAKhPeJJQN%2BOls%2FVFbLPi1e8ZUoYSMf%2BousiDCM3%2FwHd2Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwOXNAq9PSDVReKUrcq3AMTnY56qdOg0m5%2B0UklnRQ4a0TykSbGQaOxxyw%2FZ%2BkXKdJpzp%2FOPuwCY1Kq7lNMwV%2B%2BxywtOgGmcwdaYwTppyrKTiuJ0Zw2iBF3HpMTvEh%2F6TeGqiau7y%2BDIi2EsZyL02ClEHpss5v1Hyo4PbGtGyIqnjafbpLm8LNnHpUjCoOe0JiksFOR%2Bw9mWxWIFRjeXSneFSwvhCwKsFC%2FwhW4o1xr7hfg5ho%2FVeq9jj9VcSKRDB58NfTnf3LkbZdukDHpPXWKSXjPLe0ggXGAWu7SBGJu5uTnKEDZccFMxtOjpIC7tJBGZ33Jo2mBUoF6LSIHcSQa5ezKwqolxdNA4oTy6Y96Z1s2tQ5SuuwQOPMePzVo7X4PzwgEbfWWoHpnizo2APubS%2F8bdjH3kB9KELuRbSxhaCXMQGFsGDZYB2wa%2Bbrf1NXWYwKc4dxlFG4AQmJAXA7Di2dHxchCjsTRvZF30Kjl7NMxOn%2FLmDe0h%2F65XwKOptRrZsJZREoa%2B%2BxlsgQFA9WmeA%2Fq0CXatLF0AXwSaPyps%2Fv7zGyYma84T6dFMI7RITfacJXpJdOoERYWGJgnPw34jDbmuuYNmJFRfUCtcKabpSuVMAsZ%2FcToYYqUdlJgWwaCnjKeAMSXIBEoCjCssNLDBjqkAXwhqCiZQMGgbO6hzWnSa2oCn0LzjnSOd7Hyoa5a%2Fwzlou7dAjV3Sel4nhTP6tEpO2DuBard9jx0zz%2Fs9IoeBDpUofzEhHTgi2M5ANvclqZ4bBdfB073l%2FTVzHES88uQ5K4bBAOXht2DNUl%2FBzkmtzH%2FVI8ZcOGME9BkD5iw71dCwfwKzjz14VeXmEDSPvE4bL6eUSS8EGtAuBPZ5NowYvtJcdmJ&X-Amz-Signature=d36e528184b9678b464330bb6ed21d8cfc4c98cb515f1d7f0a57f5878fd62de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWCAXL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCvMrE%2BHsThsN1rDXaT3Pu571YMepYq0TTdLFTBT2lCOwIhAKhPeJJQN%2BOls%2FVFbLPi1e8ZUoYSMf%2BousiDCM3%2FwHd2Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwOXNAq9PSDVReKUrcq3AMTnY56qdOg0m5%2B0UklnRQ4a0TykSbGQaOxxyw%2FZ%2BkXKdJpzp%2FOPuwCY1Kq7lNMwV%2B%2BxywtOgGmcwdaYwTppyrKTiuJ0Zw2iBF3HpMTvEh%2F6TeGqiau7y%2BDIi2EsZyL02ClEHpss5v1Hyo4PbGtGyIqnjafbpLm8LNnHpUjCoOe0JiksFOR%2Bw9mWxWIFRjeXSneFSwvhCwKsFC%2FwhW4o1xr7hfg5ho%2FVeq9jj9VcSKRDB58NfTnf3LkbZdukDHpPXWKSXjPLe0ggXGAWu7SBGJu5uTnKEDZccFMxtOjpIC7tJBGZ33Jo2mBUoF6LSIHcSQa5ezKwqolxdNA4oTy6Y96Z1s2tQ5SuuwQOPMePzVo7X4PzwgEbfWWoHpnizo2APubS%2F8bdjH3kB9KELuRbSxhaCXMQGFsGDZYB2wa%2Bbrf1NXWYwKc4dxlFG4AQmJAXA7Di2dHxchCjsTRvZF30Kjl7NMxOn%2FLmDe0h%2F65XwKOptRrZsJZREoa%2B%2BxlsgQFA9WmeA%2Fq0CXatLF0AXwSaPyps%2Fv7zGyYma84T6dFMI7RITfacJXpJdOoERYWGJgnPw34jDbmuuYNmJFRfUCtcKabpSuVMAsZ%2FcToYYqUdlJgWwaCnjKeAMSXIBEoCjCssNLDBjqkAXwhqCiZQMGgbO6hzWnSa2oCn0LzjnSOd7Hyoa5a%2Fwzlou7dAjV3Sel4nhTP6tEpO2DuBard9jx0zz%2Fs9IoeBDpUofzEhHTgi2M5ANvclqZ4bBdfB073l%2FTVzHES88uQ5K4bBAOXht2DNUl%2FBzkmtzH%2FVI8ZcOGME9BkD5iw71dCwfwKzjz14VeXmEDSPvE4bL6eUSS8EGtAuBPZ5NowYvtJcdmJ&X-Amz-Signature=62c4027d08d8f58ca417a4971ec0306bc5be297dd67f384b8a11b9b525da667f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
