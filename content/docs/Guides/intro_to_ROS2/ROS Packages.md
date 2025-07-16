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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXSQYRX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDt1J0aGkg2d93wsLGi4t0%2FLgw5VZbTIKFqpJi9Egr6cAIhAPEgyqp4hE3NW4ld2lbDTObepzbyoDdxMUOsIfw6x7MJKv8DCGYQABoMNjM3NDIzMTgzODA1IgykNYUMG4BaJ9eZtlMq3AOT71bO%2FI404MobjpHGS192b02lB9i1LnIIUwv9QSydk06jSkNjk5xtEI2p4aLq1ThJl%2FB9Nw5u9waVawCJkXSzKxDVsORg%2F6Gxdq1APuQLdPRC7CeCbBXRk%2FFVCnNVRNSLq9vMZoN%2F8f7isHdWtsFanLyjOqLy2HRidG1JXbkLWchyjJbMfZRTVpq6r75L%2Bfdrsd1CeXoes8uXb5hZxHH9RT5YqzPLnLZh4CDNIQeBBTNtflTvFuoai33sVAqTm41i4nN16jT%2FEHs7C5CG1UWXcGz1kMw9cV9Ob2j9z%2FfGu7mimAVlZnL2XEt6oc%2BeQEcDDczTe0N7ZnfzdkeFlJ1IzIvZstueKDy7jCWBM44K19TMagwLLp28m7cMMhT%2F1dcTo%2BMzcWIaz6cZ6wBzFD7JA84KHxTSQdGTUsIjAPNMomSaVdRTJiW4LZG7NtCtBDQwGgviK8iPLZ848v1T3bnJOvN%2BCWzrk1BTfRElwQRmV3WVVd8Bv4JbuxLkv4rdA4z8SLEVgHH5qi96BzTdWquhgQVrmdsRwJlhLUM1h4%2BuIayAZU2PXyECxObHQyTR5XHSGUvlUzR3gvsFVe5zwi31%2FVwe1%2FrgrFm%2FowfOUeD3eulbaT9YNJiXHCYBojC%2Fl%2BDDBjqkAcJs%2BX11vIZpSnuGThaVl4wDbKvntG6CtRu1eYA0hVPpIXwqzgezvYuzF1Kh%2BT825zcJntD8ROmPKpIYlUCVMz3W7WBG6zhNmMmdrIuDs4O5JkIq6VjA8vRIKoVfw5hWugU91a79tPKDAefrInxawU1ZKlcDEu63%2FVHVG4WQPCzFNrh894C44%2Btl%2FsAfiaFLxAZgk09liKW07odZasqu8Eruk3a7&X-Amz-Signature=5077dea29747a3630eb925a3154a126df8ce10038fec0c5c0006a40d8516b2f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXSQYRX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDt1J0aGkg2d93wsLGi4t0%2FLgw5VZbTIKFqpJi9Egr6cAIhAPEgyqp4hE3NW4ld2lbDTObepzbyoDdxMUOsIfw6x7MJKv8DCGYQABoMNjM3NDIzMTgzODA1IgykNYUMG4BaJ9eZtlMq3AOT71bO%2FI404MobjpHGS192b02lB9i1LnIIUwv9QSydk06jSkNjk5xtEI2p4aLq1ThJl%2FB9Nw5u9waVawCJkXSzKxDVsORg%2F6Gxdq1APuQLdPRC7CeCbBXRk%2FFVCnNVRNSLq9vMZoN%2F8f7isHdWtsFanLyjOqLy2HRidG1JXbkLWchyjJbMfZRTVpq6r75L%2Bfdrsd1CeXoes8uXb5hZxHH9RT5YqzPLnLZh4CDNIQeBBTNtflTvFuoai33sVAqTm41i4nN16jT%2FEHs7C5CG1UWXcGz1kMw9cV9Ob2j9z%2FfGu7mimAVlZnL2XEt6oc%2BeQEcDDczTe0N7ZnfzdkeFlJ1IzIvZstueKDy7jCWBM44K19TMagwLLp28m7cMMhT%2F1dcTo%2BMzcWIaz6cZ6wBzFD7JA84KHxTSQdGTUsIjAPNMomSaVdRTJiW4LZG7NtCtBDQwGgviK8iPLZ848v1T3bnJOvN%2BCWzrk1BTfRElwQRmV3WVVd8Bv4JbuxLkv4rdA4z8SLEVgHH5qi96BzTdWquhgQVrmdsRwJlhLUM1h4%2BuIayAZU2PXyECxObHQyTR5XHSGUvlUzR3gvsFVe5zwi31%2FVwe1%2FrgrFm%2FowfOUeD3eulbaT9YNJiXHCYBojC%2Fl%2BDDBjqkAcJs%2BX11vIZpSnuGThaVl4wDbKvntG6CtRu1eYA0hVPpIXwqzgezvYuzF1Kh%2BT825zcJntD8ROmPKpIYlUCVMz3W7WBG6zhNmMmdrIuDs4O5JkIq6VjA8vRIKoVfw5hWugU91a79tPKDAefrInxawU1ZKlcDEu63%2FVHVG4WQPCzFNrh894C44%2Btl%2FsAfiaFLxAZgk09liKW07odZasqu8Eruk3a7&X-Amz-Signature=b5f68e80528046a5c3a4c55654190c8149b6770c838e26d377692a0e5aa5c1b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXSQYRX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDt1J0aGkg2d93wsLGi4t0%2FLgw5VZbTIKFqpJi9Egr6cAIhAPEgyqp4hE3NW4ld2lbDTObepzbyoDdxMUOsIfw6x7MJKv8DCGYQABoMNjM3NDIzMTgzODA1IgykNYUMG4BaJ9eZtlMq3AOT71bO%2FI404MobjpHGS192b02lB9i1LnIIUwv9QSydk06jSkNjk5xtEI2p4aLq1ThJl%2FB9Nw5u9waVawCJkXSzKxDVsORg%2F6Gxdq1APuQLdPRC7CeCbBXRk%2FFVCnNVRNSLq9vMZoN%2F8f7isHdWtsFanLyjOqLy2HRidG1JXbkLWchyjJbMfZRTVpq6r75L%2Bfdrsd1CeXoes8uXb5hZxHH9RT5YqzPLnLZh4CDNIQeBBTNtflTvFuoai33sVAqTm41i4nN16jT%2FEHs7C5CG1UWXcGz1kMw9cV9Ob2j9z%2FfGu7mimAVlZnL2XEt6oc%2BeQEcDDczTe0N7ZnfzdkeFlJ1IzIvZstueKDy7jCWBM44K19TMagwLLp28m7cMMhT%2F1dcTo%2BMzcWIaz6cZ6wBzFD7JA84KHxTSQdGTUsIjAPNMomSaVdRTJiW4LZG7NtCtBDQwGgviK8iPLZ848v1T3bnJOvN%2BCWzrk1BTfRElwQRmV3WVVd8Bv4JbuxLkv4rdA4z8SLEVgHH5qi96BzTdWquhgQVrmdsRwJlhLUM1h4%2BuIayAZU2PXyECxObHQyTR5XHSGUvlUzR3gvsFVe5zwi31%2FVwe1%2FrgrFm%2FowfOUeD3eulbaT9YNJiXHCYBojC%2Fl%2BDDBjqkAcJs%2BX11vIZpSnuGThaVl4wDbKvntG6CtRu1eYA0hVPpIXwqzgezvYuzF1Kh%2BT825zcJntD8ROmPKpIYlUCVMz3W7WBG6zhNmMmdrIuDs4O5JkIq6VjA8vRIKoVfw5hWugU91a79tPKDAefrInxawU1ZKlcDEu63%2FVHVG4WQPCzFNrh894C44%2Btl%2FsAfiaFLxAZgk09liKW07odZasqu8Eruk3a7&X-Amz-Signature=c5f083ebaab67665c18c1d1cc3ac7812dae46bba05d44931ae818b8d0749fb64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXSQYRX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDt1J0aGkg2d93wsLGi4t0%2FLgw5VZbTIKFqpJi9Egr6cAIhAPEgyqp4hE3NW4ld2lbDTObepzbyoDdxMUOsIfw6x7MJKv8DCGYQABoMNjM3NDIzMTgzODA1IgykNYUMG4BaJ9eZtlMq3AOT71bO%2FI404MobjpHGS192b02lB9i1LnIIUwv9QSydk06jSkNjk5xtEI2p4aLq1ThJl%2FB9Nw5u9waVawCJkXSzKxDVsORg%2F6Gxdq1APuQLdPRC7CeCbBXRk%2FFVCnNVRNSLq9vMZoN%2F8f7isHdWtsFanLyjOqLy2HRidG1JXbkLWchyjJbMfZRTVpq6r75L%2Bfdrsd1CeXoes8uXb5hZxHH9RT5YqzPLnLZh4CDNIQeBBTNtflTvFuoai33sVAqTm41i4nN16jT%2FEHs7C5CG1UWXcGz1kMw9cV9Ob2j9z%2FfGu7mimAVlZnL2XEt6oc%2BeQEcDDczTe0N7ZnfzdkeFlJ1IzIvZstueKDy7jCWBM44K19TMagwLLp28m7cMMhT%2F1dcTo%2BMzcWIaz6cZ6wBzFD7JA84KHxTSQdGTUsIjAPNMomSaVdRTJiW4LZG7NtCtBDQwGgviK8iPLZ848v1T3bnJOvN%2BCWzrk1BTfRElwQRmV3WVVd8Bv4JbuxLkv4rdA4z8SLEVgHH5qi96BzTdWquhgQVrmdsRwJlhLUM1h4%2BuIayAZU2PXyECxObHQyTR5XHSGUvlUzR3gvsFVe5zwi31%2FVwe1%2FrgrFm%2FowfOUeD3eulbaT9YNJiXHCYBojC%2Fl%2BDDBjqkAcJs%2BX11vIZpSnuGThaVl4wDbKvntG6CtRu1eYA0hVPpIXwqzgezvYuzF1Kh%2BT825zcJntD8ROmPKpIYlUCVMz3W7WBG6zhNmMmdrIuDs4O5JkIq6VjA8vRIKoVfw5hWugU91a79tPKDAefrInxawU1ZKlcDEu63%2FVHVG4WQPCzFNrh894C44%2Btl%2FsAfiaFLxAZgk09liKW07odZasqu8Eruk3a7&X-Amz-Signature=fddfcf1c6b7dfc86ec50b0d48dfd9258b02a6c2399884188b48ebf5a9973e01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXSQYRX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDt1J0aGkg2d93wsLGi4t0%2FLgw5VZbTIKFqpJi9Egr6cAIhAPEgyqp4hE3NW4ld2lbDTObepzbyoDdxMUOsIfw6x7MJKv8DCGYQABoMNjM3NDIzMTgzODA1IgykNYUMG4BaJ9eZtlMq3AOT71bO%2FI404MobjpHGS192b02lB9i1LnIIUwv9QSydk06jSkNjk5xtEI2p4aLq1ThJl%2FB9Nw5u9waVawCJkXSzKxDVsORg%2F6Gxdq1APuQLdPRC7CeCbBXRk%2FFVCnNVRNSLq9vMZoN%2F8f7isHdWtsFanLyjOqLy2HRidG1JXbkLWchyjJbMfZRTVpq6r75L%2Bfdrsd1CeXoes8uXb5hZxHH9RT5YqzPLnLZh4CDNIQeBBTNtflTvFuoai33sVAqTm41i4nN16jT%2FEHs7C5CG1UWXcGz1kMw9cV9Ob2j9z%2FfGu7mimAVlZnL2XEt6oc%2BeQEcDDczTe0N7ZnfzdkeFlJ1IzIvZstueKDy7jCWBM44K19TMagwLLp28m7cMMhT%2F1dcTo%2BMzcWIaz6cZ6wBzFD7JA84KHxTSQdGTUsIjAPNMomSaVdRTJiW4LZG7NtCtBDQwGgviK8iPLZ848v1T3bnJOvN%2BCWzrk1BTfRElwQRmV3WVVd8Bv4JbuxLkv4rdA4z8SLEVgHH5qi96BzTdWquhgQVrmdsRwJlhLUM1h4%2BuIayAZU2PXyECxObHQyTR5XHSGUvlUzR3gvsFVe5zwi31%2FVwe1%2FrgrFm%2FowfOUeD3eulbaT9YNJiXHCYBojC%2Fl%2BDDBjqkAcJs%2BX11vIZpSnuGThaVl4wDbKvntG6CtRu1eYA0hVPpIXwqzgezvYuzF1Kh%2BT825zcJntD8ROmPKpIYlUCVMz3W7WBG6zhNmMmdrIuDs4O5JkIq6VjA8vRIKoVfw5hWugU91a79tPKDAefrInxawU1ZKlcDEu63%2FVHVG4WQPCzFNrh894C44%2Btl%2FsAfiaFLxAZgk09liKW07odZasqu8Eruk3a7&X-Amz-Signature=9f407f8a52f1c26ee3da622772db00ee6199de521858dcdc892265fe6f33b810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXSQYRX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDt1J0aGkg2d93wsLGi4t0%2FLgw5VZbTIKFqpJi9Egr6cAIhAPEgyqp4hE3NW4ld2lbDTObepzbyoDdxMUOsIfw6x7MJKv8DCGYQABoMNjM3NDIzMTgzODA1IgykNYUMG4BaJ9eZtlMq3AOT71bO%2FI404MobjpHGS192b02lB9i1LnIIUwv9QSydk06jSkNjk5xtEI2p4aLq1ThJl%2FB9Nw5u9waVawCJkXSzKxDVsORg%2F6Gxdq1APuQLdPRC7CeCbBXRk%2FFVCnNVRNSLq9vMZoN%2F8f7isHdWtsFanLyjOqLy2HRidG1JXbkLWchyjJbMfZRTVpq6r75L%2Bfdrsd1CeXoes8uXb5hZxHH9RT5YqzPLnLZh4CDNIQeBBTNtflTvFuoai33sVAqTm41i4nN16jT%2FEHs7C5CG1UWXcGz1kMw9cV9Ob2j9z%2FfGu7mimAVlZnL2XEt6oc%2BeQEcDDczTe0N7ZnfzdkeFlJ1IzIvZstueKDy7jCWBM44K19TMagwLLp28m7cMMhT%2F1dcTo%2BMzcWIaz6cZ6wBzFD7JA84KHxTSQdGTUsIjAPNMomSaVdRTJiW4LZG7NtCtBDQwGgviK8iPLZ848v1T3bnJOvN%2BCWzrk1BTfRElwQRmV3WVVd8Bv4JbuxLkv4rdA4z8SLEVgHH5qi96BzTdWquhgQVrmdsRwJlhLUM1h4%2BuIayAZU2PXyECxObHQyTR5XHSGUvlUzR3gvsFVe5zwi31%2FVwe1%2FrgrFm%2FowfOUeD3eulbaT9YNJiXHCYBojC%2Fl%2BDDBjqkAcJs%2BX11vIZpSnuGThaVl4wDbKvntG6CtRu1eYA0hVPpIXwqzgezvYuzF1Kh%2BT825zcJntD8ROmPKpIYlUCVMz3W7WBG6zhNmMmdrIuDs4O5JkIq6VjA8vRIKoVfw5hWugU91a79tPKDAefrInxawU1ZKlcDEu63%2FVHVG4WQPCzFNrh894C44%2Btl%2FsAfiaFLxAZgk09liKW07odZasqu8Eruk3a7&X-Amz-Signature=0710f08e17e877a16ad1cc358c2df059b317872771af8768c2e3243dac1ebb96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXSQYRX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDt1J0aGkg2d93wsLGi4t0%2FLgw5VZbTIKFqpJi9Egr6cAIhAPEgyqp4hE3NW4ld2lbDTObepzbyoDdxMUOsIfw6x7MJKv8DCGYQABoMNjM3NDIzMTgzODA1IgykNYUMG4BaJ9eZtlMq3AOT71bO%2FI404MobjpHGS192b02lB9i1LnIIUwv9QSydk06jSkNjk5xtEI2p4aLq1ThJl%2FB9Nw5u9waVawCJkXSzKxDVsORg%2F6Gxdq1APuQLdPRC7CeCbBXRk%2FFVCnNVRNSLq9vMZoN%2F8f7isHdWtsFanLyjOqLy2HRidG1JXbkLWchyjJbMfZRTVpq6r75L%2Bfdrsd1CeXoes8uXb5hZxHH9RT5YqzPLnLZh4CDNIQeBBTNtflTvFuoai33sVAqTm41i4nN16jT%2FEHs7C5CG1UWXcGz1kMw9cV9Ob2j9z%2FfGu7mimAVlZnL2XEt6oc%2BeQEcDDczTe0N7ZnfzdkeFlJ1IzIvZstueKDy7jCWBM44K19TMagwLLp28m7cMMhT%2F1dcTo%2BMzcWIaz6cZ6wBzFD7JA84KHxTSQdGTUsIjAPNMomSaVdRTJiW4LZG7NtCtBDQwGgviK8iPLZ848v1T3bnJOvN%2BCWzrk1BTfRElwQRmV3WVVd8Bv4JbuxLkv4rdA4z8SLEVgHH5qi96BzTdWquhgQVrmdsRwJlhLUM1h4%2BuIayAZU2PXyECxObHQyTR5XHSGUvlUzR3gvsFVe5zwi31%2FVwe1%2FrgrFm%2FowfOUeD3eulbaT9YNJiXHCYBojC%2Fl%2BDDBjqkAcJs%2BX11vIZpSnuGThaVl4wDbKvntG6CtRu1eYA0hVPpIXwqzgezvYuzF1Kh%2BT825zcJntD8ROmPKpIYlUCVMz3W7WBG6zhNmMmdrIuDs4O5JkIq6VjA8vRIKoVfw5hWugU91a79tPKDAefrInxawU1ZKlcDEu63%2FVHVG4WQPCzFNrh894C44%2Btl%2FsAfiaFLxAZgk09liKW07odZasqu8Eruk3a7&X-Amz-Signature=374e88ddaaca3dde1aef8cda304f26c2d95ba199da8d331793ac1c10c417c638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
