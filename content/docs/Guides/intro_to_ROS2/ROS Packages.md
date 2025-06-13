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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKHL2WY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDG98mtodNS5jTSrfvAsa%2FukdGUAQpO1NCkIWjjXw1WdwIhANgfj9dftVZoQM5DdE2%2BnC%2FU5jtk%2BQL1eU1EPxacfJEiKv8DCB4QABoMNjM3NDIzMTgzODA1IgxSSeCXQP0VUXFvtlUq3AM%2Fyr6%2BA3QaJ%2FNa7ECgqpbz6REU0DD67tbLDbqM%2FqGq3e6SAlmd97mbb1M9j2dkVbXiqKiAuorQhbL4hPHeehI9%2FRCAAPSvNIOxlDad3%2Fa6y0tJKDbWTTx9hXpsu9%2FNh%2BIV1yawhXe0UtMuTlBADv1N3Y5JgeBiLPd5Rt%2FLJom4MLMNzyjICmkCKFPkVJ4Ekdd44ZoABMVxUvbduztrrxQY9B6hWeTomWxw3c8YKu%2B1WHcNh7JkCsuAmE20WjtdyijS%2Bvdrd7wDT%2BYHWegOURaPz%2Fgn0UUaz1u8imdPuOhx3%2BksyADSDEYRy%2B%2BaeXa5Jlk0QqDrTqpkh6B1pMsSg2JAUMOhF3v03cI0YhsGQXS7ySf%2Fy8Bt2u%2BlbtZO%2BdtOHQIEFMfc3rkWs0SJL3x5Y6r7MB6a3enekVdkFeKioNnqIRTK1CrosLE1%2FTfbA0G1dWDXXKR2ATQYzDolxOJ2HqJg%2Bv0g0DtV65k4H4AZytghg8wcPfFx1M8ENdYqezFSQnlJ6n9jovrzOm6GFUTANeuL3J8Y%2Bf4NDyH%2FJOssUikG8FCrg8CVvYTQ1JiZveAqxUoO9LIPRL5Yh2cuKfsBTd2VdrpEVNhPuCL1fUCXyZld5mJ%2BM2S7ZDSRzM65wDDykrLCBjqkASBDFf4O058LAVsugFnXwKu%2FuU4F8Vfl44L8uT%2BfKw%2B3BL7Y8UWgwyKNEacYoqfrnyX8B%2FD6%2BATneYAq5a5rpbKuB0h4mRC8r75t4qhe65xLPnzsvjURXZS8wXEFN2SAunEWV%2Fah0MwvZ4JFyZdAqFVikdAmB%2FRSvpKDrsNt5qAhIEqozhRsTD%2Bc%2F6d7i7nWwjEoN%2FUAOw4BYtMxxof1oDI%2FchMg&X-Amz-Signature=cc70e2fae5c6ce3db79db33865cfa192dff541123c6735442394b6161aa1eeb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKHL2WY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDG98mtodNS5jTSrfvAsa%2FukdGUAQpO1NCkIWjjXw1WdwIhANgfj9dftVZoQM5DdE2%2BnC%2FU5jtk%2BQL1eU1EPxacfJEiKv8DCB4QABoMNjM3NDIzMTgzODA1IgxSSeCXQP0VUXFvtlUq3AM%2Fyr6%2BA3QaJ%2FNa7ECgqpbz6REU0DD67tbLDbqM%2FqGq3e6SAlmd97mbb1M9j2dkVbXiqKiAuorQhbL4hPHeehI9%2FRCAAPSvNIOxlDad3%2Fa6y0tJKDbWTTx9hXpsu9%2FNh%2BIV1yawhXe0UtMuTlBADv1N3Y5JgeBiLPd5Rt%2FLJom4MLMNzyjICmkCKFPkVJ4Ekdd44ZoABMVxUvbduztrrxQY9B6hWeTomWxw3c8YKu%2B1WHcNh7JkCsuAmE20WjtdyijS%2Bvdrd7wDT%2BYHWegOURaPz%2Fgn0UUaz1u8imdPuOhx3%2BksyADSDEYRy%2B%2BaeXa5Jlk0QqDrTqpkh6B1pMsSg2JAUMOhF3v03cI0YhsGQXS7ySf%2Fy8Bt2u%2BlbtZO%2BdtOHQIEFMfc3rkWs0SJL3x5Y6r7MB6a3enekVdkFeKioNnqIRTK1CrosLE1%2FTfbA0G1dWDXXKR2ATQYzDolxOJ2HqJg%2Bv0g0DtV65k4H4AZytghg8wcPfFx1M8ENdYqezFSQnlJ6n9jovrzOm6GFUTANeuL3J8Y%2Bf4NDyH%2FJOssUikG8FCrg8CVvYTQ1JiZveAqxUoO9LIPRL5Yh2cuKfsBTd2VdrpEVNhPuCL1fUCXyZld5mJ%2BM2S7ZDSRzM65wDDykrLCBjqkASBDFf4O058LAVsugFnXwKu%2FuU4F8Vfl44L8uT%2BfKw%2B3BL7Y8UWgwyKNEacYoqfrnyX8B%2FD6%2BATneYAq5a5rpbKuB0h4mRC8r75t4qhe65xLPnzsvjURXZS8wXEFN2SAunEWV%2Fah0MwvZ4JFyZdAqFVikdAmB%2FRSvpKDrsNt5qAhIEqozhRsTD%2Bc%2F6d7i7nWwjEoN%2FUAOw4BYtMxxof1oDI%2FchMg&X-Amz-Signature=1501ad488b616dad01f119d65246914727e442d456a48ec8750b3c0553c09e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKHL2WY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDG98mtodNS5jTSrfvAsa%2FukdGUAQpO1NCkIWjjXw1WdwIhANgfj9dftVZoQM5DdE2%2BnC%2FU5jtk%2BQL1eU1EPxacfJEiKv8DCB4QABoMNjM3NDIzMTgzODA1IgxSSeCXQP0VUXFvtlUq3AM%2Fyr6%2BA3QaJ%2FNa7ECgqpbz6REU0DD67tbLDbqM%2FqGq3e6SAlmd97mbb1M9j2dkVbXiqKiAuorQhbL4hPHeehI9%2FRCAAPSvNIOxlDad3%2Fa6y0tJKDbWTTx9hXpsu9%2FNh%2BIV1yawhXe0UtMuTlBADv1N3Y5JgeBiLPd5Rt%2FLJom4MLMNzyjICmkCKFPkVJ4Ekdd44ZoABMVxUvbduztrrxQY9B6hWeTomWxw3c8YKu%2B1WHcNh7JkCsuAmE20WjtdyijS%2Bvdrd7wDT%2BYHWegOURaPz%2Fgn0UUaz1u8imdPuOhx3%2BksyADSDEYRy%2B%2BaeXa5Jlk0QqDrTqpkh6B1pMsSg2JAUMOhF3v03cI0YhsGQXS7ySf%2Fy8Bt2u%2BlbtZO%2BdtOHQIEFMfc3rkWs0SJL3x5Y6r7MB6a3enekVdkFeKioNnqIRTK1CrosLE1%2FTfbA0G1dWDXXKR2ATQYzDolxOJ2HqJg%2Bv0g0DtV65k4H4AZytghg8wcPfFx1M8ENdYqezFSQnlJ6n9jovrzOm6GFUTANeuL3J8Y%2Bf4NDyH%2FJOssUikG8FCrg8CVvYTQ1JiZveAqxUoO9LIPRL5Yh2cuKfsBTd2VdrpEVNhPuCL1fUCXyZld5mJ%2BM2S7ZDSRzM65wDDykrLCBjqkASBDFf4O058LAVsugFnXwKu%2FuU4F8Vfl44L8uT%2BfKw%2B3BL7Y8UWgwyKNEacYoqfrnyX8B%2FD6%2BATneYAq5a5rpbKuB0h4mRC8r75t4qhe65xLPnzsvjURXZS8wXEFN2SAunEWV%2Fah0MwvZ4JFyZdAqFVikdAmB%2FRSvpKDrsNt5qAhIEqozhRsTD%2Bc%2F6d7i7nWwjEoN%2FUAOw4BYtMxxof1oDI%2FchMg&X-Amz-Signature=1867e95f8214a410fe1db2cb14b63b282a655066b6649577164eceffd66d8212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKHL2WY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDG98mtodNS5jTSrfvAsa%2FukdGUAQpO1NCkIWjjXw1WdwIhANgfj9dftVZoQM5DdE2%2BnC%2FU5jtk%2BQL1eU1EPxacfJEiKv8DCB4QABoMNjM3NDIzMTgzODA1IgxSSeCXQP0VUXFvtlUq3AM%2Fyr6%2BA3QaJ%2FNa7ECgqpbz6REU0DD67tbLDbqM%2FqGq3e6SAlmd97mbb1M9j2dkVbXiqKiAuorQhbL4hPHeehI9%2FRCAAPSvNIOxlDad3%2Fa6y0tJKDbWTTx9hXpsu9%2FNh%2BIV1yawhXe0UtMuTlBADv1N3Y5JgeBiLPd5Rt%2FLJom4MLMNzyjICmkCKFPkVJ4Ekdd44ZoABMVxUvbduztrrxQY9B6hWeTomWxw3c8YKu%2B1WHcNh7JkCsuAmE20WjtdyijS%2Bvdrd7wDT%2BYHWegOURaPz%2Fgn0UUaz1u8imdPuOhx3%2BksyADSDEYRy%2B%2BaeXa5Jlk0QqDrTqpkh6B1pMsSg2JAUMOhF3v03cI0YhsGQXS7ySf%2Fy8Bt2u%2BlbtZO%2BdtOHQIEFMfc3rkWs0SJL3x5Y6r7MB6a3enekVdkFeKioNnqIRTK1CrosLE1%2FTfbA0G1dWDXXKR2ATQYzDolxOJ2HqJg%2Bv0g0DtV65k4H4AZytghg8wcPfFx1M8ENdYqezFSQnlJ6n9jovrzOm6GFUTANeuL3J8Y%2Bf4NDyH%2FJOssUikG8FCrg8CVvYTQ1JiZveAqxUoO9LIPRL5Yh2cuKfsBTd2VdrpEVNhPuCL1fUCXyZld5mJ%2BM2S7ZDSRzM65wDDykrLCBjqkASBDFf4O058LAVsugFnXwKu%2FuU4F8Vfl44L8uT%2BfKw%2B3BL7Y8UWgwyKNEacYoqfrnyX8B%2FD6%2BATneYAq5a5rpbKuB0h4mRC8r75t4qhe65xLPnzsvjURXZS8wXEFN2SAunEWV%2Fah0MwvZ4JFyZdAqFVikdAmB%2FRSvpKDrsNt5qAhIEqozhRsTD%2Bc%2F6d7i7nWwjEoN%2FUAOw4BYtMxxof1oDI%2FchMg&X-Amz-Signature=2666bdee0220d518f8628cbb8f9867fd51ba6371a255e6cd94c534bb4b777176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKHL2WY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDG98mtodNS5jTSrfvAsa%2FukdGUAQpO1NCkIWjjXw1WdwIhANgfj9dftVZoQM5DdE2%2BnC%2FU5jtk%2BQL1eU1EPxacfJEiKv8DCB4QABoMNjM3NDIzMTgzODA1IgxSSeCXQP0VUXFvtlUq3AM%2Fyr6%2BA3QaJ%2FNa7ECgqpbz6REU0DD67tbLDbqM%2FqGq3e6SAlmd97mbb1M9j2dkVbXiqKiAuorQhbL4hPHeehI9%2FRCAAPSvNIOxlDad3%2Fa6y0tJKDbWTTx9hXpsu9%2FNh%2BIV1yawhXe0UtMuTlBADv1N3Y5JgeBiLPd5Rt%2FLJom4MLMNzyjICmkCKFPkVJ4Ekdd44ZoABMVxUvbduztrrxQY9B6hWeTomWxw3c8YKu%2B1WHcNh7JkCsuAmE20WjtdyijS%2Bvdrd7wDT%2BYHWegOURaPz%2Fgn0UUaz1u8imdPuOhx3%2BksyADSDEYRy%2B%2BaeXa5Jlk0QqDrTqpkh6B1pMsSg2JAUMOhF3v03cI0YhsGQXS7ySf%2Fy8Bt2u%2BlbtZO%2BdtOHQIEFMfc3rkWs0SJL3x5Y6r7MB6a3enekVdkFeKioNnqIRTK1CrosLE1%2FTfbA0G1dWDXXKR2ATQYzDolxOJ2HqJg%2Bv0g0DtV65k4H4AZytghg8wcPfFx1M8ENdYqezFSQnlJ6n9jovrzOm6GFUTANeuL3J8Y%2Bf4NDyH%2FJOssUikG8FCrg8CVvYTQ1JiZveAqxUoO9LIPRL5Yh2cuKfsBTd2VdrpEVNhPuCL1fUCXyZld5mJ%2BM2S7ZDSRzM65wDDykrLCBjqkASBDFf4O058LAVsugFnXwKu%2FuU4F8Vfl44L8uT%2BfKw%2B3BL7Y8UWgwyKNEacYoqfrnyX8B%2FD6%2BATneYAq5a5rpbKuB0h4mRC8r75t4qhe65xLPnzsvjURXZS8wXEFN2SAunEWV%2Fah0MwvZ4JFyZdAqFVikdAmB%2FRSvpKDrsNt5qAhIEqozhRsTD%2Bc%2F6d7i7nWwjEoN%2FUAOw4BYtMxxof1oDI%2FchMg&X-Amz-Signature=3d0a74927fdf3bb85f2b656909de507597b5b517c925502b4bca6da75a9c82c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKHL2WY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDG98mtodNS5jTSrfvAsa%2FukdGUAQpO1NCkIWjjXw1WdwIhANgfj9dftVZoQM5DdE2%2BnC%2FU5jtk%2BQL1eU1EPxacfJEiKv8DCB4QABoMNjM3NDIzMTgzODA1IgxSSeCXQP0VUXFvtlUq3AM%2Fyr6%2BA3QaJ%2FNa7ECgqpbz6REU0DD67tbLDbqM%2FqGq3e6SAlmd97mbb1M9j2dkVbXiqKiAuorQhbL4hPHeehI9%2FRCAAPSvNIOxlDad3%2Fa6y0tJKDbWTTx9hXpsu9%2FNh%2BIV1yawhXe0UtMuTlBADv1N3Y5JgeBiLPd5Rt%2FLJom4MLMNzyjICmkCKFPkVJ4Ekdd44ZoABMVxUvbduztrrxQY9B6hWeTomWxw3c8YKu%2B1WHcNh7JkCsuAmE20WjtdyijS%2Bvdrd7wDT%2BYHWegOURaPz%2Fgn0UUaz1u8imdPuOhx3%2BksyADSDEYRy%2B%2BaeXa5Jlk0QqDrTqpkh6B1pMsSg2JAUMOhF3v03cI0YhsGQXS7ySf%2Fy8Bt2u%2BlbtZO%2BdtOHQIEFMfc3rkWs0SJL3x5Y6r7MB6a3enekVdkFeKioNnqIRTK1CrosLE1%2FTfbA0G1dWDXXKR2ATQYzDolxOJ2HqJg%2Bv0g0DtV65k4H4AZytghg8wcPfFx1M8ENdYqezFSQnlJ6n9jovrzOm6GFUTANeuL3J8Y%2Bf4NDyH%2FJOssUikG8FCrg8CVvYTQ1JiZveAqxUoO9LIPRL5Yh2cuKfsBTd2VdrpEVNhPuCL1fUCXyZld5mJ%2BM2S7ZDSRzM65wDDykrLCBjqkASBDFf4O058LAVsugFnXwKu%2FuU4F8Vfl44L8uT%2BfKw%2B3BL7Y8UWgwyKNEacYoqfrnyX8B%2FD6%2BATneYAq5a5rpbKuB0h4mRC8r75t4qhe65xLPnzsvjURXZS8wXEFN2SAunEWV%2Fah0MwvZ4JFyZdAqFVikdAmB%2FRSvpKDrsNt5qAhIEqozhRsTD%2Bc%2F6d7i7nWwjEoN%2FUAOw4BYtMxxof1oDI%2FchMg&X-Amz-Signature=4f02f3cb121e5309cda76c74436f206589c999e3029b06d80b14dfe70d9a4580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKHL2WY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDG98mtodNS5jTSrfvAsa%2FukdGUAQpO1NCkIWjjXw1WdwIhANgfj9dftVZoQM5DdE2%2BnC%2FU5jtk%2BQL1eU1EPxacfJEiKv8DCB4QABoMNjM3NDIzMTgzODA1IgxSSeCXQP0VUXFvtlUq3AM%2Fyr6%2BA3QaJ%2FNa7ECgqpbz6REU0DD67tbLDbqM%2FqGq3e6SAlmd97mbb1M9j2dkVbXiqKiAuorQhbL4hPHeehI9%2FRCAAPSvNIOxlDad3%2Fa6y0tJKDbWTTx9hXpsu9%2FNh%2BIV1yawhXe0UtMuTlBADv1N3Y5JgeBiLPd5Rt%2FLJom4MLMNzyjICmkCKFPkVJ4Ekdd44ZoABMVxUvbduztrrxQY9B6hWeTomWxw3c8YKu%2B1WHcNh7JkCsuAmE20WjtdyijS%2Bvdrd7wDT%2BYHWegOURaPz%2Fgn0UUaz1u8imdPuOhx3%2BksyADSDEYRy%2B%2BaeXa5Jlk0QqDrTqpkh6B1pMsSg2JAUMOhF3v03cI0YhsGQXS7ySf%2Fy8Bt2u%2BlbtZO%2BdtOHQIEFMfc3rkWs0SJL3x5Y6r7MB6a3enekVdkFeKioNnqIRTK1CrosLE1%2FTfbA0G1dWDXXKR2ATQYzDolxOJ2HqJg%2Bv0g0DtV65k4H4AZytghg8wcPfFx1M8ENdYqezFSQnlJ6n9jovrzOm6GFUTANeuL3J8Y%2Bf4NDyH%2FJOssUikG8FCrg8CVvYTQ1JiZveAqxUoO9LIPRL5Yh2cuKfsBTd2VdrpEVNhPuCL1fUCXyZld5mJ%2BM2S7ZDSRzM65wDDykrLCBjqkASBDFf4O058LAVsugFnXwKu%2FuU4F8Vfl44L8uT%2BfKw%2B3BL7Y8UWgwyKNEacYoqfrnyX8B%2FD6%2BATneYAq5a5rpbKuB0h4mRC8r75t4qhe65xLPnzsvjURXZS8wXEFN2SAunEWV%2Fah0MwvZ4JFyZdAqFVikdAmB%2FRSvpKDrsNt5qAhIEqozhRsTD%2Bc%2F6d7i7nWwjEoN%2FUAOw4BYtMxxof1oDI%2FchMg&X-Amz-Signature=ce163cebc91dadeb1e8a6729c77c4eba764b9b66ed200af5ed14bce5dd1639d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
