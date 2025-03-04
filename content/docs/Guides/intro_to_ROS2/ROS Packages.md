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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LSAQ2A%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1gVb2zdKHaYyYft%2B0ZcYulYJcT3bw1KvqMRZFM6DUBAIgZSph2Hy%2Fc6d5Pttn9acqfm5SDlTFVZwohYVhxso5pMoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4G8GzTpxkEI75KiCrcA4RnpW3lOLIPyh5eB1VG330Z%2BLG0QTtTJ0E9I1ahdmLtC76uTBk7Ez%2FPz6rSf%2BHKiIGKQGmIjs3aLSgqCDebsm56f60EgVimkZjkQA5lxGaBIpUZDQ%2BG5ixggMUA%2B7jdDKIxZVfc9%2F8CTc8IATp6ibNGeVMwWmEVhtYi30qVDGlVYWrc0BiZU4zSnV1GMWfgbsIav28iI%2FG02cYbX%2B%2B79aYeHvmA%2B1mVpp3FrHjsIvtsEi3Wq1tgS9GxgUgWuuMa9OnEktwH1oHip94RAy6mu0rms0XghztwAWN8PoR5j6v00OqjPQEeYQ7S9aQcanxnbKpx1U06l%2FIPnsI4g9yzSb6%2F%2B38bOO%2FPdf%2Fs3O3UNvfj7eLYZW5umlDseno%2B436C%2FYegfdzbnO5l7COrzs%2FjtwaQl5ajQtL2CK0hKkXHvTnji%2BDW%2BuCXfaU22QXHO%2BPUFlVvuNX7kXiK1Fd9keL7QERcU%2BKI3gX7WYRI3iyirSSuQHhvEpi2HGwSLfYdjk5qMl%2FusX%2BUTysCCZdoj2mjjAMTPgYmSBCAzVikpglUl0WT9y9QfwgHfdMGG4nw7OCyebm4fMWZQsxoYM97HgiWlvgIdKRDRvM5cg0BNH5iFwbJDC2plXBJt33zgKT5MIzTnL4GOqUB0twCpbowJPjS1qDrSJnz0S2v9D1zsxTUkj4WRu5WqhbHl7jChTR0gFuOrrEge9qROPrZxqKBmSXyeKIQbpTeMV2DnpYXBOsFqP7yHwc%2FPZf%2FVXGSKeNIHbDJkRGBXaPj0mvB4jE%2BB6keoxtPaiJrtqkp0yoaxItuAZXL%2FMt6xIil3F4VUAUL8%2F9%2FtqQefvE5FgVo7StcOSjBMaTY2tOrt0APdxZz&X-Amz-Signature=a3e48c2d38c0711b11c3be572ebb96f40f8b57219a4d5a625468635668013aa8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LSAQ2A%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1gVb2zdKHaYyYft%2B0ZcYulYJcT3bw1KvqMRZFM6DUBAIgZSph2Hy%2Fc6d5Pttn9acqfm5SDlTFVZwohYVhxso5pMoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4G8GzTpxkEI75KiCrcA4RnpW3lOLIPyh5eB1VG330Z%2BLG0QTtTJ0E9I1ahdmLtC76uTBk7Ez%2FPz6rSf%2BHKiIGKQGmIjs3aLSgqCDebsm56f60EgVimkZjkQA5lxGaBIpUZDQ%2BG5ixggMUA%2B7jdDKIxZVfc9%2F8CTc8IATp6ibNGeVMwWmEVhtYi30qVDGlVYWrc0BiZU4zSnV1GMWfgbsIav28iI%2FG02cYbX%2B%2B79aYeHvmA%2B1mVpp3FrHjsIvtsEi3Wq1tgS9GxgUgWuuMa9OnEktwH1oHip94RAy6mu0rms0XghztwAWN8PoR5j6v00OqjPQEeYQ7S9aQcanxnbKpx1U06l%2FIPnsI4g9yzSb6%2F%2B38bOO%2FPdf%2Fs3O3UNvfj7eLYZW5umlDseno%2B436C%2FYegfdzbnO5l7COrzs%2FjtwaQl5ajQtL2CK0hKkXHvTnji%2BDW%2BuCXfaU22QXHO%2BPUFlVvuNX7kXiK1Fd9keL7QERcU%2BKI3gX7WYRI3iyirSSuQHhvEpi2HGwSLfYdjk5qMl%2FusX%2BUTysCCZdoj2mjjAMTPgYmSBCAzVikpglUl0WT9y9QfwgHfdMGG4nw7OCyebm4fMWZQsxoYM97HgiWlvgIdKRDRvM5cg0BNH5iFwbJDC2plXBJt33zgKT5MIzTnL4GOqUB0twCpbowJPjS1qDrSJnz0S2v9D1zsxTUkj4WRu5WqhbHl7jChTR0gFuOrrEge9qROPrZxqKBmSXyeKIQbpTeMV2DnpYXBOsFqP7yHwc%2FPZf%2FVXGSKeNIHbDJkRGBXaPj0mvB4jE%2BB6keoxtPaiJrtqkp0yoaxItuAZXL%2FMt6xIil3F4VUAUL8%2F9%2FtqQefvE5FgVo7StcOSjBMaTY2tOrt0APdxZz&X-Amz-Signature=49ac4f1557f23fcac84a23d8c88ceb2aa5a5238ea155d2aeabbd33803de9f21b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LSAQ2A%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1gVb2zdKHaYyYft%2B0ZcYulYJcT3bw1KvqMRZFM6DUBAIgZSph2Hy%2Fc6d5Pttn9acqfm5SDlTFVZwohYVhxso5pMoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4G8GzTpxkEI75KiCrcA4RnpW3lOLIPyh5eB1VG330Z%2BLG0QTtTJ0E9I1ahdmLtC76uTBk7Ez%2FPz6rSf%2BHKiIGKQGmIjs3aLSgqCDebsm56f60EgVimkZjkQA5lxGaBIpUZDQ%2BG5ixggMUA%2B7jdDKIxZVfc9%2F8CTc8IATp6ibNGeVMwWmEVhtYi30qVDGlVYWrc0BiZU4zSnV1GMWfgbsIav28iI%2FG02cYbX%2B%2B79aYeHvmA%2B1mVpp3FrHjsIvtsEi3Wq1tgS9GxgUgWuuMa9OnEktwH1oHip94RAy6mu0rms0XghztwAWN8PoR5j6v00OqjPQEeYQ7S9aQcanxnbKpx1U06l%2FIPnsI4g9yzSb6%2F%2B38bOO%2FPdf%2Fs3O3UNvfj7eLYZW5umlDseno%2B436C%2FYegfdzbnO5l7COrzs%2FjtwaQl5ajQtL2CK0hKkXHvTnji%2BDW%2BuCXfaU22QXHO%2BPUFlVvuNX7kXiK1Fd9keL7QERcU%2BKI3gX7WYRI3iyirSSuQHhvEpi2HGwSLfYdjk5qMl%2FusX%2BUTysCCZdoj2mjjAMTPgYmSBCAzVikpglUl0WT9y9QfwgHfdMGG4nw7OCyebm4fMWZQsxoYM97HgiWlvgIdKRDRvM5cg0BNH5iFwbJDC2plXBJt33zgKT5MIzTnL4GOqUB0twCpbowJPjS1qDrSJnz0S2v9D1zsxTUkj4WRu5WqhbHl7jChTR0gFuOrrEge9qROPrZxqKBmSXyeKIQbpTeMV2DnpYXBOsFqP7yHwc%2FPZf%2FVXGSKeNIHbDJkRGBXaPj0mvB4jE%2BB6keoxtPaiJrtqkp0yoaxItuAZXL%2FMt6xIil3F4VUAUL8%2F9%2FtqQefvE5FgVo7StcOSjBMaTY2tOrt0APdxZz&X-Amz-Signature=d4b54d5a0f7164c1acc3547f31d83b72e42ecadc4352dfad3f89ce542d101ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LSAQ2A%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1gVb2zdKHaYyYft%2B0ZcYulYJcT3bw1KvqMRZFM6DUBAIgZSph2Hy%2Fc6d5Pttn9acqfm5SDlTFVZwohYVhxso5pMoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4G8GzTpxkEI75KiCrcA4RnpW3lOLIPyh5eB1VG330Z%2BLG0QTtTJ0E9I1ahdmLtC76uTBk7Ez%2FPz6rSf%2BHKiIGKQGmIjs3aLSgqCDebsm56f60EgVimkZjkQA5lxGaBIpUZDQ%2BG5ixggMUA%2B7jdDKIxZVfc9%2F8CTc8IATp6ibNGeVMwWmEVhtYi30qVDGlVYWrc0BiZU4zSnV1GMWfgbsIav28iI%2FG02cYbX%2B%2B79aYeHvmA%2B1mVpp3FrHjsIvtsEi3Wq1tgS9GxgUgWuuMa9OnEktwH1oHip94RAy6mu0rms0XghztwAWN8PoR5j6v00OqjPQEeYQ7S9aQcanxnbKpx1U06l%2FIPnsI4g9yzSb6%2F%2B38bOO%2FPdf%2Fs3O3UNvfj7eLYZW5umlDseno%2B436C%2FYegfdzbnO5l7COrzs%2FjtwaQl5ajQtL2CK0hKkXHvTnji%2BDW%2BuCXfaU22QXHO%2BPUFlVvuNX7kXiK1Fd9keL7QERcU%2BKI3gX7WYRI3iyirSSuQHhvEpi2HGwSLfYdjk5qMl%2FusX%2BUTysCCZdoj2mjjAMTPgYmSBCAzVikpglUl0WT9y9QfwgHfdMGG4nw7OCyebm4fMWZQsxoYM97HgiWlvgIdKRDRvM5cg0BNH5iFwbJDC2plXBJt33zgKT5MIzTnL4GOqUB0twCpbowJPjS1qDrSJnz0S2v9D1zsxTUkj4WRu5WqhbHl7jChTR0gFuOrrEge9qROPrZxqKBmSXyeKIQbpTeMV2DnpYXBOsFqP7yHwc%2FPZf%2FVXGSKeNIHbDJkRGBXaPj0mvB4jE%2BB6keoxtPaiJrtqkp0yoaxItuAZXL%2FMt6xIil3F4VUAUL8%2F9%2FtqQefvE5FgVo7StcOSjBMaTY2tOrt0APdxZz&X-Amz-Signature=fcc65dbcccb42077384fc4725c0869084f01dde91e46c7bd89e8c02ade248707&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LSAQ2A%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1gVb2zdKHaYyYft%2B0ZcYulYJcT3bw1KvqMRZFM6DUBAIgZSph2Hy%2Fc6d5Pttn9acqfm5SDlTFVZwohYVhxso5pMoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4G8GzTpxkEI75KiCrcA4RnpW3lOLIPyh5eB1VG330Z%2BLG0QTtTJ0E9I1ahdmLtC76uTBk7Ez%2FPz6rSf%2BHKiIGKQGmIjs3aLSgqCDebsm56f60EgVimkZjkQA5lxGaBIpUZDQ%2BG5ixggMUA%2B7jdDKIxZVfc9%2F8CTc8IATp6ibNGeVMwWmEVhtYi30qVDGlVYWrc0BiZU4zSnV1GMWfgbsIav28iI%2FG02cYbX%2B%2B79aYeHvmA%2B1mVpp3FrHjsIvtsEi3Wq1tgS9GxgUgWuuMa9OnEktwH1oHip94RAy6mu0rms0XghztwAWN8PoR5j6v00OqjPQEeYQ7S9aQcanxnbKpx1U06l%2FIPnsI4g9yzSb6%2F%2B38bOO%2FPdf%2Fs3O3UNvfj7eLYZW5umlDseno%2B436C%2FYegfdzbnO5l7COrzs%2FjtwaQl5ajQtL2CK0hKkXHvTnji%2BDW%2BuCXfaU22QXHO%2BPUFlVvuNX7kXiK1Fd9keL7QERcU%2BKI3gX7WYRI3iyirSSuQHhvEpi2HGwSLfYdjk5qMl%2FusX%2BUTysCCZdoj2mjjAMTPgYmSBCAzVikpglUl0WT9y9QfwgHfdMGG4nw7OCyebm4fMWZQsxoYM97HgiWlvgIdKRDRvM5cg0BNH5iFwbJDC2plXBJt33zgKT5MIzTnL4GOqUB0twCpbowJPjS1qDrSJnz0S2v9D1zsxTUkj4WRu5WqhbHl7jChTR0gFuOrrEge9qROPrZxqKBmSXyeKIQbpTeMV2DnpYXBOsFqP7yHwc%2FPZf%2FVXGSKeNIHbDJkRGBXaPj0mvB4jE%2BB6keoxtPaiJrtqkp0yoaxItuAZXL%2FMt6xIil3F4VUAUL8%2F9%2FtqQefvE5FgVo7StcOSjBMaTY2tOrt0APdxZz&X-Amz-Signature=4ad61a02fd928151cf372c7c54b5ad7a58b7424e37615fd62b0cc7fce93c10fc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LSAQ2A%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1gVb2zdKHaYyYft%2B0ZcYulYJcT3bw1KvqMRZFM6DUBAIgZSph2Hy%2Fc6d5Pttn9acqfm5SDlTFVZwohYVhxso5pMoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4G8GzTpxkEI75KiCrcA4RnpW3lOLIPyh5eB1VG330Z%2BLG0QTtTJ0E9I1ahdmLtC76uTBk7Ez%2FPz6rSf%2BHKiIGKQGmIjs3aLSgqCDebsm56f60EgVimkZjkQA5lxGaBIpUZDQ%2BG5ixggMUA%2B7jdDKIxZVfc9%2F8CTc8IATp6ibNGeVMwWmEVhtYi30qVDGlVYWrc0BiZU4zSnV1GMWfgbsIav28iI%2FG02cYbX%2B%2B79aYeHvmA%2B1mVpp3FrHjsIvtsEi3Wq1tgS9GxgUgWuuMa9OnEktwH1oHip94RAy6mu0rms0XghztwAWN8PoR5j6v00OqjPQEeYQ7S9aQcanxnbKpx1U06l%2FIPnsI4g9yzSb6%2F%2B38bOO%2FPdf%2Fs3O3UNvfj7eLYZW5umlDseno%2B436C%2FYegfdzbnO5l7COrzs%2FjtwaQl5ajQtL2CK0hKkXHvTnji%2BDW%2BuCXfaU22QXHO%2BPUFlVvuNX7kXiK1Fd9keL7QERcU%2BKI3gX7WYRI3iyirSSuQHhvEpi2HGwSLfYdjk5qMl%2FusX%2BUTysCCZdoj2mjjAMTPgYmSBCAzVikpglUl0WT9y9QfwgHfdMGG4nw7OCyebm4fMWZQsxoYM97HgiWlvgIdKRDRvM5cg0BNH5iFwbJDC2plXBJt33zgKT5MIzTnL4GOqUB0twCpbowJPjS1qDrSJnz0S2v9D1zsxTUkj4WRu5WqhbHl7jChTR0gFuOrrEge9qROPrZxqKBmSXyeKIQbpTeMV2DnpYXBOsFqP7yHwc%2FPZf%2FVXGSKeNIHbDJkRGBXaPj0mvB4jE%2BB6keoxtPaiJrtqkp0yoaxItuAZXL%2FMt6xIil3F4VUAUL8%2F9%2FtqQefvE5FgVo7StcOSjBMaTY2tOrt0APdxZz&X-Amz-Signature=976e5b696a7da1d68d367b62320734b6eb020cb647d56d6dbb04d10fe764bfc0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LSAQ2A%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1gVb2zdKHaYyYft%2B0ZcYulYJcT3bw1KvqMRZFM6DUBAIgZSph2Hy%2Fc6d5Pttn9acqfm5SDlTFVZwohYVhxso5pMoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4G8GzTpxkEI75KiCrcA4RnpW3lOLIPyh5eB1VG330Z%2BLG0QTtTJ0E9I1ahdmLtC76uTBk7Ez%2FPz6rSf%2BHKiIGKQGmIjs3aLSgqCDebsm56f60EgVimkZjkQA5lxGaBIpUZDQ%2BG5ixggMUA%2B7jdDKIxZVfc9%2F8CTc8IATp6ibNGeVMwWmEVhtYi30qVDGlVYWrc0BiZU4zSnV1GMWfgbsIav28iI%2FG02cYbX%2B%2B79aYeHvmA%2B1mVpp3FrHjsIvtsEi3Wq1tgS9GxgUgWuuMa9OnEktwH1oHip94RAy6mu0rms0XghztwAWN8PoR5j6v00OqjPQEeYQ7S9aQcanxnbKpx1U06l%2FIPnsI4g9yzSb6%2F%2B38bOO%2FPdf%2Fs3O3UNvfj7eLYZW5umlDseno%2B436C%2FYegfdzbnO5l7COrzs%2FjtwaQl5ajQtL2CK0hKkXHvTnji%2BDW%2BuCXfaU22QXHO%2BPUFlVvuNX7kXiK1Fd9keL7QERcU%2BKI3gX7WYRI3iyirSSuQHhvEpi2HGwSLfYdjk5qMl%2FusX%2BUTysCCZdoj2mjjAMTPgYmSBCAzVikpglUl0WT9y9QfwgHfdMGG4nw7OCyebm4fMWZQsxoYM97HgiWlvgIdKRDRvM5cg0BNH5iFwbJDC2plXBJt33zgKT5MIzTnL4GOqUB0twCpbowJPjS1qDrSJnz0S2v9D1zsxTUkj4WRu5WqhbHl7jChTR0gFuOrrEge9qROPrZxqKBmSXyeKIQbpTeMV2DnpYXBOsFqP7yHwc%2FPZf%2FVXGSKeNIHbDJkRGBXaPj0mvB4jE%2BB6keoxtPaiJrtqkp0yoaxItuAZXL%2FMt6xIil3F4VUAUL8%2F9%2FtqQefvE5FgVo7StcOSjBMaTY2tOrt0APdxZz&X-Amz-Signature=f7def5e2625caa515f8719c69184e4cfd680c0b1e34e3cffe7e3ddca0604d3a7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
