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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GK6WIC3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBz1MvMDcrCz8prAXIafSH8%2Ft3Bmou3xWRzkiIN1pqhUAiEA0RxiwutnseJscxdOXpYYF8U%2BZHqztcXcaCBIC6ipJlUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwdaGEr2yITyz5tdSrcAwBf4KUfwgguhPqPwvMlTUUsUZEq7yjB%2Bb9iUsHGZvN%2F9z1nMIxlvDcRR%2BKkkO5UF3k4kGLd4raXteJKMvJZfoElQJa2IZCnUNINN0dx6LkSQRIqKmIQlEolIihmtOsGAx%2F0qQGhHARBUiCsBOggugCS9twysf%2FRsZH5TFQI%2Fg0DekkYLSyeuOMOseZHGv1Juo5upXK7880HTc14bsEySyjFX748CH5eGnPQMFwYKpcsDusKvouVIq%2FgC63sFY%2F8pcszvlXOnSaA%2FPFQwe0hiQ5%2FqIQwRwg%2BdQVW8Rs1VAH4Db1JDB%2FaWMkwSnk4ZZQEIoYqQzDd%2F4%2FwH86l%2BT7V5QnaKD%2BLop0RwalR6FO9GMIoKWo3q%2BnNSF8Qi6lJAQykaKedx%2BLQIMY7MN5%2Bkg1LDms9PaRhEdWAmxZeTMkD2ZL505sl0ybyNVdZUKqSGimJYgkESccpRklewNJnWOiNDC1k3ygqmex3nDUAdUUI3tTsUGtdZMZICoIHVeleaQjVlXwaiyks70DLC8EUbwy34IoOXo2yjL0eXZwxjVzDvLs3ALyInM4w51iNcw6f8XMEf9%2FQ%2FsdHtps8xXT3%2BkODs23aTA2X64cjjxhx3l69gsRuZrEjJYfQYi0awfknMPr66b8GOqUBR7UDdTP5Nlk%2BW8BymJ1K3yEYcjthN1gx%2BaxU1SuxpTqb7j2CRteVuGU8lrraU0OigxsIEnI%2FfmJS%2BWLcR%2FD3M47XCMZaWRKgzUw7lX2o1%2BKVmJ0EDzc%2FFaOVDcFp7A1tJaj0HaCcJsJPU5Pr3zqgUXJz5aK5CFACEmrhXaJv72LbHpVU%2Bqu6HWdrDiB4ukiqs1jti4LGcsDJvjD4O8IBDZXj0aqj&X-Amz-Signature=ca8c57b9ad8c556959e7b60762e74d2e50386b91c62b1267625e74ab1d5ff522&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GK6WIC3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBz1MvMDcrCz8prAXIafSH8%2Ft3Bmou3xWRzkiIN1pqhUAiEA0RxiwutnseJscxdOXpYYF8U%2BZHqztcXcaCBIC6ipJlUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwdaGEr2yITyz5tdSrcAwBf4KUfwgguhPqPwvMlTUUsUZEq7yjB%2Bb9iUsHGZvN%2F9z1nMIxlvDcRR%2BKkkO5UF3k4kGLd4raXteJKMvJZfoElQJa2IZCnUNINN0dx6LkSQRIqKmIQlEolIihmtOsGAx%2F0qQGhHARBUiCsBOggugCS9twysf%2FRsZH5TFQI%2Fg0DekkYLSyeuOMOseZHGv1Juo5upXK7880HTc14bsEySyjFX748CH5eGnPQMFwYKpcsDusKvouVIq%2FgC63sFY%2F8pcszvlXOnSaA%2FPFQwe0hiQ5%2FqIQwRwg%2BdQVW8Rs1VAH4Db1JDB%2FaWMkwSnk4ZZQEIoYqQzDd%2F4%2FwH86l%2BT7V5QnaKD%2BLop0RwalR6FO9GMIoKWo3q%2BnNSF8Qi6lJAQykaKedx%2BLQIMY7MN5%2Bkg1LDms9PaRhEdWAmxZeTMkD2ZL505sl0ybyNVdZUKqSGimJYgkESccpRklewNJnWOiNDC1k3ygqmex3nDUAdUUI3tTsUGtdZMZICoIHVeleaQjVlXwaiyks70DLC8EUbwy34IoOXo2yjL0eXZwxjVzDvLs3ALyInM4w51iNcw6f8XMEf9%2FQ%2FsdHtps8xXT3%2BkODs23aTA2X64cjjxhx3l69gsRuZrEjJYfQYi0awfknMPr66b8GOqUBR7UDdTP5Nlk%2BW8BymJ1K3yEYcjthN1gx%2BaxU1SuxpTqb7j2CRteVuGU8lrraU0OigxsIEnI%2FfmJS%2BWLcR%2FD3M47XCMZaWRKgzUw7lX2o1%2BKVmJ0EDzc%2FFaOVDcFp7A1tJaj0HaCcJsJPU5Pr3zqgUXJz5aK5CFACEmrhXaJv72LbHpVU%2Bqu6HWdrDiB4ukiqs1jti4LGcsDJvjD4O8IBDZXj0aqj&X-Amz-Signature=d830c493643cb0a786559dbd5204058d12b936b7f433b90193ad8e510ff52736&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GK6WIC3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBz1MvMDcrCz8prAXIafSH8%2Ft3Bmou3xWRzkiIN1pqhUAiEA0RxiwutnseJscxdOXpYYF8U%2BZHqztcXcaCBIC6ipJlUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwdaGEr2yITyz5tdSrcAwBf4KUfwgguhPqPwvMlTUUsUZEq7yjB%2Bb9iUsHGZvN%2F9z1nMIxlvDcRR%2BKkkO5UF3k4kGLd4raXteJKMvJZfoElQJa2IZCnUNINN0dx6LkSQRIqKmIQlEolIihmtOsGAx%2F0qQGhHARBUiCsBOggugCS9twysf%2FRsZH5TFQI%2Fg0DekkYLSyeuOMOseZHGv1Juo5upXK7880HTc14bsEySyjFX748CH5eGnPQMFwYKpcsDusKvouVIq%2FgC63sFY%2F8pcszvlXOnSaA%2FPFQwe0hiQ5%2FqIQwRwg%2BdQVW8Rs1VAH4Db1JDB%2FaWMkwSnk4ZZQEIoYqQzDd%2F4%2FwH86l%2BT7V5QnaKD%2BLop0RwalR6FO9GMIoKWo3q%2BnNSF8Qi6lJAQykaKedx%2BLQIMY7MN5%2Bkg1LDms9PaRhEdWAmxZeTMkD2ZL505sl0ybyNVdZUKqSGimJYgkESccpRklewNJnWOiNDC1k3ygqmex3nDUAdUUI3tTsUGtdZMZICoIHVeleaQjVlXwaiyks70DLC8EUbwy34IoOXo2yjL0eXZwxjVzDvLs3ALyInM4w51iNcw6f8XMEf9%2FQ%2FsdHtps8xXT3%2BkODs23aTA2X64cjjxhx3l69gsRuZrEjJYfQYi0awfknMPr66b8GOqUBR7UDdTP5Nlk%2BW8BymJ1K3yEYcjthN1gx%2BaxU1SuxpTqb7j2CRteVuGU8lrraU0OigxsIEnI%2FfmJS%2BWLcR%2FD3M47XCMZaWRKgzUw7lX2o1%2BKVmJ0EDzc%2FFaOVDcFp7A1tJaj0HaCcJsJPU5Pr3zqgUXJz5aK5CFACEmrhXaJv72LbHpVU%2Bqu6HWdrDiB4ukiqs1jti4LGcsDJvjD4O8IBDZXj0aqj&X-Amz-Signature=4e97c9c2efc4f481a2920f6594506bca92f15d0f7c074652989cf73cc5c40224&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GK6WIC3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBz1MvMDcrCz8prAXIafSH8%2Ft3Bmou3xWRzkiIN1pqhUAiEA0RxiwutnseJscxdOXpYYF8U%2BZHqztcXcaCBIC6ipJlUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwdaGEr2yITyz5tdSrcAwBf4KUfwgguhPqPwvMlTUUsUZEq7yjB%2Bb9iUsHGZvN%2F9z1nMIxlvDcRR%2BKkkO5UF3k4kGLd4raXteJKMvJZfoElQJa2IZCnUNINN0dx6LkSQRIqKmIQlEolIihmtOsGAx%2F0qQGhHARBUiCsBOggugCS9twysf%2FRsZH5TFQI%2Fg0DekkYLSyeuOMOseZHGv1Juo5upXK7880HTc14bsEySyjFX748CH5eGnPQMFwYKpcsDusKvouVIq%2FgC63sFY%2F8pcszvlXOnSaA%2FPFQwe0hiQ5%2FqIQwRwg%2BdQVW8Rs1VAH4Db1JDB%2FaWMkwSnk4ZZQEIoYqQzDd%2F4%2FwH86l%2BT7V5QnaKD%2BLop0RwalR6FO9GMIoKWo3q%2BnNSF8Qi6lJAQykaKedx%2BLQIMY7MN5%2Bkg1LDms9PaRhEdWAmxZeTMkD2ZL505sl0ybyNVdZUKqSGimJYgkESccpRklewNJnWOiNDC1k3ygqmex3nDUAdUUI3tTsUGtdZMZICoIHVeleaQjVlXwaiyks70DLC8EUbwy34IoOXo2yjL0eXZwxjVzDvLs3ALyInM4w51iNcw6f8XMEf9%2FQ%2FsdHtps8xXT3%2BkODs23aTA2X64cjjxhx3l69gsRuZrEjJYfQYi0awfknMPr66b8GOqUBR7UDdTP5Nlk%2BW8BymJ1K3yEYcjthN1gx%2BaxU1SuxpTqb7j2CRteVuGU8lrraU0OigxsIEnI%2FfmJS%2BWLcR%2FD3M47XCMZaWRKgzUw7lX2o1%2BKVmJ0EDzc%2FFaOVDcFp7A1tJaj0HaCcJsJPU5Pr3zqgUXJz5aK5CFACEmrhXaJv72LbHpVU%2Bqu6HWdrDiB4ukiqs1jti4LGcsDJvjD4O8IBDZXj0aqj&X-Amz-Signature=3a0c437eec217592029da9741b293029470067cffcc88b966cb875f29bc7ea17&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GK6WIC3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBz1MvMDcrCz8prAXIafSH8%2Ft3Bmou3xWRzkiIN1pqhUAiEA0RxiwutnseJscxdOXpYYF8U%2BZHqztcXcaCBIC6ipJlUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwdaGEr2yITyz5tdSrcAwBf4KUfwgguhPqPwvMlTUUsUZEq7yjB%2Bb9iUsHGZvN%2F9z1nMIxlvDcRR%2BKkkO5UF3k4kGLd4raXteJKMvJZfoElQJa2IZCnUNINN0dx6LkSQRIqKmIQlEolIihmtOsGAx%2F0qQGhHARBUiCsBOggugCS9twysf%2FRsZH5TFQI%2Fg0DekkYLSyeuOMOseZHGv1Juo5upXK7880HTc14bsEySyjFX748CH5eGnPQMFwYKpcsDusKvouVIq%2FgC63sFY%2F8pcszvlXOnSaA%2FPFQwe0hiQ5%2FqIQwRwg%2BdQVW8Rs1VAH4Db1JDB%2FaWMkwSnk4ZZQEIoYqQzDd%2F4%2FwH86l%2BT7V5QnaKD%2BLop0RwalR6FO9GMIoKWo3q%2BnNSF8Qi6lJAQykaKedx%2BLQIMY7MN5%2Bkg1LDms9PaRhEdWAmxZeTMkD2ZL505sl0ybyNVdZUKqSGimJYgkESccpRklewNJnWOiNDC1k3ygqmex3nDUAdUUI3tTsUGtdZMZICoIHVeleaQjVlXwaiyks70DLC8EUbwy34IoOXo2yjL0eXZwxjVzDvLs3ALyInM4w51iNcw6f8XMEf9%2FQ%2FsdHtps8xXT3%2BkODs23aTA2X64cjjxhx3l69gsRuZrEjJYfQYi0awfknMPr66b8GOqUBR7UDdTP5Nlk%2BW8BymJ1K3yEYcjthN1gx%2BaxU1SuxpTqb7j2CRteVuGU8lrraU0OigxsIEnI%2FfmJS%2BWLcR%2FD3M47XCMZaWRKgzUw7lX2o1%2BKVmJ0EDzc%2FFaOVDcFp7A1tJaj0HaCcJsJPU5Pr3zqgUXJz5aK5CFACEmrhXaJv72LbHpVU%2Bqu6HWdrDiB4ukiqs1jti4LGcsDJvjD4O8IBDZXj0aqj&X-Amz-Signature=7cb09524dd0896c97f4555aa732c7848df3b379edaf11b6610edb94c9361bcbc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GK6WIC3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBz1MvMDcrCz8prAXIafSH8%2Ft3Bmou3xWRzkiIN1pqhUAiEA0RxiwutnseJscxdOXpYYF8U%2BZHqztcXcaCBIC6ipJlUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwdaGEr2yITyz5tdSrcAwBf4KUfwgguhPqPwvMlTUUsUZEq7yjB%2Bb9iUsHGZvN%2F9z1nMIxlvDcRR%2BKkkO5UF3k4kGLd4raXteJKMvJZfoElQJa2IZCnUNINN0dx6LkSQRIqKmIQlEolIihmtOsGAx%2F0qQGhHARBUiCsBOggugCS9twysf%2FRsZH5TFQI%2Fg0DekkYLSyeuOMOseZHGv1Juo5upXK7880HTc14bsEySyjFX748CH5eGnPQMFwYKpcsDusKvouVIq%2FgC63sFY%2F8pcszvlXOnSaA%2FPFQwe0hiQ5%2FqIQwRwg%2BdQVW8Rs1VAH4Db1JDB%2FaWMkwSnk4ZZQEIoYqQzDd%2F4%2FwH86l%2BT7V5QnaKD%2BLop0RwalR6FO9GMIoKWo3q%2BnNSF8Qi6lJAQykaKedx%2BLQIMY7MN5%2Bkg1LDms9PaRhEdWAmxZeTMkD2ZL505sl0ybyNVdZUKqSGimJYgkESccpRklewNJnWOiNDC1k3ygqmex3nDUAdUUI3tTsUGtdZMZICoIHVeleaQjVlXwaiyks70DLC8EUbwy34IoOXo2yjL0eXZwxjVzDvLs3ALyInM4w51iNcw6f8XMEf9%2FQ%2FsdHtps8xXT3%2BkODs23aTA2X64cjjxhx3l69gsRuZrEjJYfQYi0awfknMPr66b8GOqUBR7UDdTP5Nlk%2BW8BymJ1K3yEYcjthN1gx%2BaxU1SuxpTqb7j2CRteVuGU8lrraU0OigxsIEnI%2FfmJS%2BWLcR%2FD3M47XCMZaWRKgzUw7lX2o1%2BKVmJ0EDzc%2FFaOVDcFp7A1tJaj0HaCcJsJPU5Pr3zqgUXJz5aK5CFACEmrhXaJv72LbHpVU%2Bqu6HWdrDiB4ukiqs1jti4LGcsDJvjD4O8IBDZXj0aqj&X-Amz-Signature=9e9ff52b79edf024b9b6ac6a418e50c2eb0c595f46c3ec5de51f028208da3272&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GK6WIC3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBz1MvMDcrCz8prAXIafSH8%2Ft3Bmou3xWRzkiIN1pqhUAiEA0RxiwutnseJscxdOXpYYF8U%2BZHqztcXcaCBIC6ipJlUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwdaGEr2yITyz5tdSrcAwBf4KUfwgguhPqPwvMlTUUsUZEq7yjB%2Bb9iUsHGZvN%2F9z1nMIxlvDcRR%2BKkkO5UF3k4kGLd4raXteJKMvJZfoElQJa2IZCnUNINN0dx6LkSQRIqKmIQlEolIihmtOsGAx%2F0qQGhHARBUiCsBOggugCS9twysf%2FRsZH5TFQI%2Fg0DekkYLSyeuOMOseZHGv1Juo5upXK7880HTc14bsEySyjFX748CH5eGnPQMFwYKpcsDusKvouVIq%2FgC63sFY%2F8pcszvlXOnSaA%2FPFQwe0hiQ5%2FqIQwRwg%2BdQVW8Rs1VAH4Db1JDB%2FaWMkwSnk4ZZQEIoYqQzDd%2F4%2FwH86l%2BT7V5QnaKD%2BLop0RwalR6FO9GMIoKWo3q%2BnNSF8Qi6lJAQykaKedx%2BLQIMY7MN5%2Bkg1LDms9PaRhEdWAmxZeTMkD2ZL505sl0ybyNVdZUKqSGimJYgkESccpRklewNJnWOiNDC1k3ygqmex3nDUAdUUI3tTsUGtdZMZICoIHVeleaQjVlXwaiyks70DLC8EUbwy34IoOXo2yjL0eXZwxjVzDvLs3ALyInM4w51iNcw6f8XMEf9%2FQ%2FsdHtps8xXT3%2BkODs23aTA2X64cjjxhx3l69gsRuZrEjJYfQYi0awfknMPr66b8GOqUBR7UDdTP5Nlk%2BW8BymJ1K3yEYcjthN1gx%2BaxU1SuxpTqb7j2CRteVuGU8lrraU0OigxsIEnI%2FfmJS%2BWLcR%2FD3M47XCMZaWRKgzUw7lX2o1%2BKVmJ0EDzc%2FFaOVDcFp7A1tJaj0HaCcJsJPU5Pr3zqgUXJz5aK5CFACEmrhXaJv72LbHpVU%2Bqu6HWdrDiB4ukiqs1jti4LGcsDJvjD4O8IBDZXj0aqj&X-Amz-Signature=36d9530cd1ee93c72c923dc9b4dac3921a4db5b518b46ea64c165596fd4755ac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
