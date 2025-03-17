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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYVU6CY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwNDi05c7%2BGe9SCdHq5TdOU0u3vgAfa8DK7o7bKWQsMAiBQaKGWNXDVDN4gDmnR7%2BnawSZnQLrUmRVdkYp4rjErQSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZawZtcxC3x%2BZZSjMKtwDuMwK268NjOAHh0KJbQPonRb6nBh4rHZHWbzTtV3fmeUBCn9cggzf1lCjiDlarD6SSHierjrmnXQxLEtdcduk71nDW%2F99aCHA7repWXLyqWAIxomJC73658nHXAvQtgZq%2FqupjsWEHbpnVdrm5T2u9QzSxNV96g0zeJfNh%2BUY1VzgBbm3pmWptuQpF3IqVny8edRCmA4Utn5vM8QWB7DoG4%2Bm%2FWzdwTDQr2KEypJjrxLwWxlk58csWwr9kK7DH8iw1gPcokHhdC0N%2BzNpFiP1UxXx%2Fw4WHaqFILpA4TH9iEXaqrGnexHUhwxwATBgsqM42paErsR8xnS01mI%2BIMvM4KqrVw2PwgOaPXtwrkExpmdGj75fP5yrAUpTR3Gk8iZuIvGxfBnV%2BWtg4j%2FjsRs2zpfmTgmCvuTaEECNMMGjobQt6TWjjx0BVcBd90uokxBDFbpy%2FrDCNcm3CXY2IepuDIdCDzVE2GXKCojMp4QKjsQlIefRCGHIL77yc90bVGA5QqgCcET%2BIfx9qnl5%2Fp7txVFkaAYKMxyivNZP2Z%2B2vmPJxQRzGa77IO3mQYxPudSLYJM43bjntaEpe%2BQYCKUGKDx6l%2BJdsfkNWxSA9X%2BRNR%2F%2FEMI8Cb5nGkR7GGowoNvevgY6pgEKGuGIT3vqZLTaMrL4NhIUFGBBjiWADq%2FajMb4Zh1xwRDi5HozBvFDolcWd%2BgBz4DyXiJo8BtmQJP%2B43EW5GPJzvbjrbdWJlI%2BRRnWrD7pUtd5ByO7547GfKz386RW6ADtduXsY%2FxDHIqME3foJ75j6KfqOGMmBMV1TDIvUgY4IB7uSet8S7JN7HxQG34ixyYvZcJSSt3BFc2NRsJAefYthYU7EGCK&X-Amz-Signature=8a3eb44abe4a99f3e3345d27d02ccf7ef80af8c1d156d3229221e811bf6226e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYVU6CY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwNDi05c7%2BGe9SCdHq5TdOU0u3vgAfa8DK7o7bKWQsMAiBQaKGWNXDVDN4gDmnR7%2BnawSZnQLrUmRVdkYp4rjErQSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZawZtcxC3x%2BZZSjMKtwDuMwK268NjOAHh0KJbQPonRb6nBh4rHZHWbzTtV3fmeUBCn9cggzf1lCjiDlarD6SSHierjrmnXQxLEtdcduk71nDW%2F99aCHA7repWXLyqWAIxomJC73658nHXAvQtgZq%2FqupjsWEHbpnVdrm5T2u9QzSxNV96g0zeJfNh%2BUY1VzgBbm3pmWptuQpF3IqVny8edRCmA4Utn5vM8QWB7DoG4%2Bm%2FWzdwTDQr2KEypJjrxLwWxlk58csWwr9kK7DH8iw1gPcokHhdC0N%2BzNpFiP1UxXx%2Fw4WHaqFILpA4TH9iEXaqrGnexHUhwxwATBgsqM42paErsR8xnS01mI%2BIMvM4KqrVw2PwgOaPXtwrkExpmdGj75fP5yrAUpTR3Gk8iZuIvGxfBnV%2BWtg4j%2FjsRs2zpfmTgmCvuTaEECNMMGjobQt6TWjjx0BVcBd90uokxBDFbpy%2FrDCNcm3CXY2IepuDIdCDzVE2GXKCojMp4QKjsQlIefRCGHIL77yc90bVGA5QqgCcET%2BIfx9qnl5%2Fp7txVFkaAYKMxyivNZP2Z%2B2vmPJxQRzGa77IO3mQYxPudSLYJM43bjntaEpe%2BQYCKUGKDx6l%2BJdsfkNWxSA9X%2BRNR%2F%2FEMI8Cb5nGkR7GGowoNvevgY6pgEKGuGIT3vqZLTaMrL4NhIUFGBBjiWADq%2FajMb4Zh1xwRDi5HozBvFDolcWd%2BgBz4DyXiJo8BtmQJP%2B43EW5GPJzvbjrbdWJlI%2BRRnWrD7pUtd5ByO7547GfKz386RW6ADtduXsY%2FxDHIqME3foJ75j6KfqOGMmBMV1TDIvUgY4IB7uSet8S7JN7HxQG34ixyYvZcJSSt3BFc2NRsJAefYthYU7EGCK&X-Amz-Signature=30c62c21dc075c00c414a6ecc34e4aac95c265b824263e421dff1c4d91765640&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYVU6CY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwNDi05c7%2BGe9SCdHq5TdOU0u3vgAfa8DK7o7bKWQsMAiBQaKGWNXDVDN4gDmnR7%2BnawSZnQLrUmRVdkYp4rjErQSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZawZtcxC3x%2BZZSjMKtwDuMwK268NjOAHh0KJbQPonRb6nBh4rHZHWbzTtV3fmeUBCn9cggzf1lCjiDlarD6SSHierjrmnXQxLEtdcduk71nDW%2F99aCHA7repWXLyqWAIxomJC73658nHXAvQtgZq%2FqupjsWEHbpnVdrm5T2u9QzSxNV96g0zeJfNh%2BUY1VzgBbm3pmWptuQpF3IqVny8edRCmA4Utn5vM8QWB7DoG4%2Bm%2FWzdwTDQr2KEypJjrxLwWxlk58csWwr9kK7DH8iw1gPcokHhdC0N%2BzNpFiP1UxXx%2Fw4WHaqFILpA4TH9iEXaqrGnexHUhwxwATBgsqM42paErsR8xnS01mI%2BIMvM4KqrVw2PwgOaPXtwrkExpmdGj75fP5yrAUpTR3Gk8iZuIvGxfBnV%2BWtg4j%2FjsRs2zpfmTgmCvuTaEECNMMGjobQt6TWjjx0BVcBd90uokxBDFbpy%2FrDCNcm3CXY2IepuDIdCDzVE2GXKCojMp4QKjsQlIefRCGHIL77yc90bVGA5QqgCcET%2BIfx9qnl5%2Fp7txVFkaAYKMxyivNZP2Z%2B2vmPJxQRzGa77IO3mQYxPudSLYJM43bjntaEpe%2BQYCKUGKDx6l%2BJdsfkNWxSA9X%2BRNR%2F%2FEMI8Cb5nGkR7GGowoNvevgY6pgEKGuGIT3vqZLTaMrL4NhIUFGBBjiWADq%2FajMb4Zh1xwRDi5HozBvFDolcWd%2BgBz4DyXiJo8BtmQJP%2B43EW5GPJzvbjrbdWJlI%2BRRnWrD7pUtd5ByO7547GfKz386RW6ADtduXsY%2FxDHIqME3foJ75j6KfqOGMmBMV1TDIvUgY4IB7uSet8S7JN7HxQG34ixyYvZcJSSt3BFc2NRsJAefYthYU7EGCK&X-Amz-Signature=1fc4601e4aed5d08242a5cbcaf7e54e4f4092264266c3520f87a093a5c99b956&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYVU6CY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwNDi05c7%2BGe9SCdHq5TdOU0u3vgAfa8DK7o7bKWQsMAiBQaKGWNXDVDN4gDmnR7%2BnawSZnQLrUmRVdkYp4rjErQSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZawZtcxC3x%2BZZSjMKtwDuMwK268NjOAHh0KJbQPonRb6nBh4rHZHWbzTtV3fmeUBCn9cggzf1lCjiDlarD6SSHierjrmnXQxLEtdcduk71nDW%2F99aCHA7repWXLyqWAIxomJC73658nHXAvQtgZq%2FqupjsWEHbpnVdrm5T2u9QzSxNV96g0zeJfNh%2BUY1VzgBbm3pmWptuQpF3IqVny8edRCmA4Utn5vM8QWB7DoG4%2Bm%2FWzdwTDQr2KEypJjrxLwWxlk58csWwr9kK7DH8iw1gPcokHhdC0N%2BzNpFiP1UxXx%2Fw4WHaqFILpA4TH9iEXaqrGnexHUhwxwATBgsqM42paErsR8xnS01mI%2BIMvM4KqrVw2PwgOaPXtwrkExpmdGj75fP5yrAUpTR3Gk8iZuIvGxfBnV%2BWtg4j%2FjsRs2zpfmTgmCvuTaEECNMMGjobQt6TWjjx0BVcBd90uokxBDFbpy%2FrDCNcm3CXY2IepuDIdCDzVE2GXKCojMp4QKjsQlIefRCGHIL77yc90bVGA5QqgCcET%2BIfx9qnl5%2Fp7txVFkaAYKMxyivNZP2Z%2B2vmPJxQRzGa77IO3mQYxPudSLYJM43bjntaEpe%2BQYCKUGKDx6l%2BJdsfkNWxSA9X%2BRNR%2F%2FEMI8Cb5nGkR7GGowoNvevgY6pgEKGuGIT3vqZLTaMrL4NhIUFGBBjiWADq%2FajMb4Zh1xwRDi5HozBvFDolcWd%2BgBz4DyXiJo8BtmQJP%2B43EW5GPJzvbjrbdWJlI%2BRRnWrD7pUtd5ByO7547GfKz386RW6ADtduXsY%2FxDHIqME3foJ75j6KfqOGMmBMV1TDIvUgY4IB7uSet8S7JN7HxQG34ixyYvZcJSSt3BFc2NRsJAefYthYU7EGCK&X-Amz-Signature=f8fd1a437b8c58b0e7368c9e72069d6d558f9ec7196b816b39cef9cec557d030&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYVU6CY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwNDi05c7%2BGe9SCdHq5TdOU0u3vgAfa8DK7o7bKWQsMAiBQaKGWNXDVDN4gDmnR7%2BnawSZnQLrUmRVdkYp4rjErQSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZawZtcxC3x%2BZZSjMKtwDuMwK268NjOAHh0KJbQPonRb6nBh4rHZHWbzTtV3fmeUBCn9cggzf1lCjiDlarD6SSHierjrmnXQxLEtdcduk71nDW%2F99aCHA7repWXLyqWAIxomJC73658nHXAvQtgZq%2FqupjsWEHbpnVdrm5T2u9QzSxNV96g0zeJfNh%2BUY1VzgBbm3pmWptuQpF3IqVny8edRCmA4Utn5vM8QWB7DoG4%2Bm%2FWzdwTDQr2KEypJjrxLwWxlk58csWwr9kK7DH8iw1gPcokHhdC0N%2BzNpFiP1UxXx%2Fw4WHaqFILpA4TH9iEXaqrGnexHUhwxwATBgsqM42paErsR8xnS01mI%2BIMvM4KqrVw2PwgOaPXtwrkExpmdGj75fP5yrAUpTR3Gk8iZuIvGxfBnV%2BWtg4j%2FjsRs2zpfmTgmCvuTaEECNMMGjobQt6TWjjx0BVcBd90uokxBDFbpy%2FrDCNcm3CXY2IepuDIdCDzVE2GXKCojMp4QKjsQlIefRCGHIL77yc90bVGA5QqgCcET%2BIfx9qnl5%2Fp7txVFkaAYKMxyivNZP2Z%2B2vmPJxQRzGa77IO3mQYxPudSLYJM43bjntaEpe%2BQYCKUGKDx6l%2BJdsfkNWxSA9X%2BRNR%2F%2FEMI8Cb5nGkR7GGowoNvevgY6pgEKGuGIT3vqZLTaMrL4NhIUFGBBjiWADq%2FajMb4Zh1xwRDi5HozBvFDolcWd%2BgBz4DyXiJo8BtmQJP%2B43EW5GPJzvbjrbdWJlI%2BRRnWrD7pUtd5ByO7547GfKz386RW6ADtduXsY%2FxDHIqME3foJ75j6KfqOGMmBMV1TDIvUgY4IB7uSet8S7JN7HxQG34ixyYvZcJSSt3BFc2NRsJAefYthYU7EGCK&X-Amz-Signature=5c03024bed65247c17244964a011d95ef840f529f2e5369ad950a6410d794f67&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYVU6CY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwNDi05c7%2BGe9SCdHq5TdOU0u3vgAfa8DK7o7bKWQsMAiBQaKGWNXDVDN4gDmnR7%2BnawSZnQLrUmRVdkYp4rjErQSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZawZtcxC3x%2BZZSjMKtwDuMwK268NjOAHh0KJbQPonRb6nBh4rHZHWbzTtV3fmeUBCn9cggzf1lCjiDlarD6SSHierjrmnXQxLEtdcduk71nDW%2F99aCHA7repWXLyqWAIxomJC73658nHXAvQtgZq%2FqupjsWEHbpnVdrm5T2u9QzSxNV96g0zeJfNh%2BUY1VzgBbm3pmWptuQpF3IqVny8edRCmA4Utn5vM8QWB7DoG4%2Bm%2FWzdwTDQr2KEypJjrxLwWxlk58csWwr9kK7DH8iw1gPcokHhdC0N%2BzNpFiP1UxXx%2Fw4WHaqFILpA4TH9iEXaqrGnexHUhwxwATBgsqM42paErsR8xnS01mI%2BIMvM4KqrVw2PwgOaPXtwrkExpmdGj75fP5yrAUpTR3Gk8iZuIvGxfBnV%2BWtg4j%2FjsRs2zpfmTgmCvuTaEECNMMGjobQt6TWjjx0BVcBd90uokxBDFbpy%2FrDCNcm3CXY2IepuDIdCDzVE2GXKCojMp4QKjsQlIefRCGHIL77yc90bVGA5QqgCcET%2BIfx9qnl5%2Fp7txVFkaAYKMxyivNZP2Z%2B2vmPJxQRzGa77IO3mQYxPudSLYJM43bjntaEpe%2BQYCKUGKDx6l%2BJdsfkNWxSA9X%2BRNR%2F%2FEMI8Cb5nGkR7GGowoNvevgY6pgEKGuGIT3vqZLTaMrL4NhIUFGBBjiWADq%2FajMb4Zh1xwRDi5HozBvFDolcWd%2BgBz4DyXiJo8BtmQJP%2B43EW5GPJzvbjrbdWJlI%2BRRnWrD7pUtd5ByO7547GfKz386RW6ADtduXsY%2FxDHIqME3foJ75j6KfqOGMmBMV1TDIvUgY4IB7uSet8S7JN7HxQG34ixyYvZcJSSt3BFc2NRsJAefYthYU7EGCK&X-Amz-Signature=97b8d1c851c56ba1531413c08c44f8742461bb4ea6b75185f4513ef4bd990a54&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYVU6CY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwNDi05c7%2BGe9SCdHq5TdOU0u3vgAfa8DK7o7bKWQsMAiBQaKGWNXDVDN4gDmnR7%2BnawSZnQLrUmRVdkYp4rjErQSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZawZtcxC3x%2BZZSjMKtwDuMwK268NjOAHh0KJbQPonRb6nBh4rHZHWbzTtV3fmeUBCn9cggzf1lCjiDlarD6SSHierjrmnXQxLEtdcduk71nDW%2F99aCHA7repWXLyqWAIxomJC73658nHXAvQtgZq%2FqupjsWEHbpnVdrm5T2u9QzSxNV96g0zeJfNh%2BUY1VzgBbm3pmWptuQpF3IqVny8edRCmA4Utn5vM8QWB7DoG4%2Bm%2FWzdwTDQr2KEypJjrxLwWxlk58csWwr9kK7DH8iw1gPcokHhdC0N%2BzNpFiP1UxXx%2Fw4WHaqFILpA4TH9iEXaqrGnexHUhwxwATBgsqM42paErsR8xnS01mI%2BIMvM4KqrVw2PwgOaPXtwrkExpmdGj75fP5yrAUpTR3Gk8iZuIvGxfBnV%2BWtg4j%2FjsRs2zpfmTgmCvuTaEECNMMGjobQt6TWjjx0BVcBd90uokxBDFbpy%2FrDCNcm3CXY2IepuDIdCDzVE2GXKCojMp4QKjsQlIefRCGHIL77yc90bVGA5QqgCcET%2BIfx9qnl5%2Fp7txVFkaAYKMxyivNZP2Z%2B2vmPJxQRzGa77IO3mQYxPudSLYJM43bjntaEpe%2BQYCKUGKDx6l%2BJdsfkNWxSA9X%2BRNR%2F%2FEMI8Cb5nGkR7GGowoNvevgY6pgEKGuGIT3vqZLTaMrL4NhIUFGBBjiWADq%2FajMb4Zh1xwRDi5HozBvFDolcWd%2BgBz4DyXiJo8BtmQJP%2B43EW5GPJzvbjrbdWJlI%2BRRnWrD7pUtd5ByO7547GfKz386RW6ADtduXsY%2FxDHIqME3foJ75j6KfqOGMmBMV1TDIvUgY4IB7uSet8S7JN7HxQG34ixyYvZcJSSt3BFc2NRsJAefYthYU7EGCK&X-Amz-Signature=0cf30281215ed5aeb77ec622b5048c0be42a1cc4e1375f6fa5823095e7b31c65&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
