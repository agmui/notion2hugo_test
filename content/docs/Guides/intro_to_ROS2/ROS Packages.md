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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MBFNJW%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7fBsqtO0e%2F4OTvV9TGKXQvZkEW6mAgqLxwC2ZTaa3uAiAgwF89LHbDMMBqanvwLNn4K%2BRZZkIsS4MicwA5YCXyYSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2kLmi2CGKLzaYLAtKtwDmLbeCyZ9DR7BUCHwSuwkWek%2Bk3VInTc8Jl%2BE7aXlhlphFaPH%2BDY1KMyZABZGqBUTJB6SVdXMpnWUGcrJ0%2FDYlCSJxDhnivSCJtsHiC4vM2sndPkXfx4ck7CLYz6Eef4G9IU0AvlpYZFim0W9k5Z8Yid7xfFnKw3z77t%2BI%2B6ShIBWtOVg9tPKn04sMw%2BmGugwOOHYvmJX%2BBtyYaci372PNqWQcvPeMVSSjylSXPlXpomG24QnZ9Zq8OfY3SWUjLVrZvf04mG%2FZCL1s3D4Qvps8XYqGEboXcJj2u3eSieWui0vapMEHzwqgbqo5K5Iwd0D90aLYlN1cBKa%2FRNHmscOYxdbG%2BJhDDQvY%2BuS0Ocp4cXLBKzh9lT1hpy63uIl6lO57pYMswGOts8xXwxkmzz%2BS8%2BMa38IdN%2BS%2Ffh1IA8wklLQoCD2yQFoPb7kSlnfpnr5nK1eqxiVM8DkuLmynZbaNgXabbvmP5bnfHXu%2BHrFI5jwxJru9KVOcPie%2FksS9imYcP5et5EVJvtahbjfJPkpQ1yN7gpMzf0MHbfWJel2P%2BVeEuTHM%2F2KRtrQr1ibwrHK%2BJ0vWCGt0Wd6tsMz4KgeTxcjgMvSDp3lWYRexxuuz8CN73Yjt2U9xyZNjuowlLGZyQY6pgGspULs0QJdsAnlPOqmm0vov%2BEtr%2BhDo1CBJqcmW8m3A1xN45VF7y9htUw9sK%2FXHaBzqkwQHHdUgCpZPa1gtAet1C3kpytIu0ULizEsHrnPEbkxIBdhTHn%2BLz3lMGNHNEuBZsY7MVZjvuZ7RU4SECD8fSwEkXJkWJJdBCdbw3M%2FqgHqvjEa3Led9NWPb1N8imMOEXK%2FMBeaeRbI2Ux6kkMc1Zu1tJWU&X-Amz-Signature=4de5960da6f49ff52d3610170058a73f27b3a9d052fa477c5acb8a8ad37f5f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MBFNJW%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7fBsqtO0e%2F4OTvV9TGKXQvZkEW6mAgqLxwC2ZTaa3uAiAgwF89LHbDMMBqanvwLNn4K%2BRZZkIsS4MicwA5YCXyYSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2kLmi2CGKLzaYLAtKtwDmLbeCyZ9DR7BUCHwSuwkWek%2Bk3VInTc8Jl%2BE7aXlhlphFaPH%2BDY1KMyZABZGqBUTJB6SVdXMpnWUGcrJ0%2FDYlCSJxDhnivSCJtsHiC4vM2sndPkXfx4ck7CLYz6Eef4G9IU0AvlpYZFim0W9k5Z8Yid7xfFnKw3z77t%2BI%2B6ShIBWtOVg9tPKn04sMw%2BmGugwOOHYvmJX%2BBtyYaci372PNqWQcvPeMVSSjylSXPlXpomG24QnZ9Zq8OfY3SWUjLVrZvf04mG%2FZCL1s3D4Qvps8XYqGEboXcJj2u3eSieWui0vapMEHzwqgbqo5K5Iwd0D90aLYlN1cBKa%2FRNHmscOYxdbG%2BJhDDQvY%2BuS0Ocp4cXLBKzh9lT1hpy63uIl6lO57pYMswGOts8xXwxkmzz%2BS8%2BMa38IdN%2BS%2Ffh1IA8wklLQoCD2yQFoPb7kSlnfpnr5nK1eqxiVM8DkuLmynZbaNgXabbvmP5bnfHXu%2BHrFI5jwxJru9KVOcPie%2FksS9imYcP5et5EVJvtahbjfJPkpQ1yN7gpMzf0MHbfWJel2P%2BVeEuTHM%2F2KRtrQr1ibwrHK%2BJ0vWCGt0Wd6tsMz4KgeTxcjgMvSDp3lWYRexxuuz8CN73Yjt2U9xyZNjuowlLGZyQY6pgGspULs0QJdsAnlPOqmm0vov%2BEtr%2BhDo1CBJqcmW8m3A1xN45VF7y9htUw9sK%2FXHaBzqkwQHHdUgCpZPa1gtAet1C3kpytIu0ULizEsHrnPEbkxIBdhTHn%2BLz3lMGNHNEuBZsY7MVZjvuZ7RU4SECD8fSwEkXJkWJJdBCdbw3M%2FqgHqvjEa3Led9NWPb1N8imMOEXK%2FMBeaeRbI2Ux6kkMc1Zu1tJWU&X-Amz-Signature=fae7cbd9a855657ce2b183dcc008e8d2a1d603b3d5feba34e152bd5a008e40ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MBFNJW%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7fBsqtO0e%2F4OTvV9TGKXQvZkEW6mAgqLxwC2ZTaa3uAiAgwF89LHbDMMBqanvwLNn4K%2BRZZkIsS4MicwA5YCXyYSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2kLmi2CGKLzaYLAtKtwDmLbeCyZ9DR7BUCHwSuwkWek%2Bk3VInTc8Jl%2BE7aXlhlphFaPH%2BDY1KMyZABZGqBUTJB6SVdXMpnWUGcrJ0%2FDYlCSJxDhnivSCJtsHiC4vM2sndPkXfx4ck7CLYz6Eef4G9IU0AvlpYZFim0W9k5Z8Yid7xfFnKw3z77t%2BI%2B6ShIBWtOVg9tPKn04sMw%2BmGugwOOHYvmJX%2BBtyYaci372PNqWQcvPeMVSSjylSXPlXpomG24QnZ9Zq8OfY3SWUjLVrZvf04mG%2FZCL1s3D4Qvps8XYqGEboXcJj2u3eSieWui0vapMEHzwqgbqo5K5Iwd0D90aLYlN1cBKa%2FRNHmscOYxdbG%2BJhDDQvY%2BuS0Ocp4cXLBKzh9lT1hpy63uIl6lO57pYMswGOts8xXwxkmzz%2BS8%2BMa38IdN%2BS%2Ffh1IA8wklLQoCD2yQFoPb7kSlnfpnr5nK1eqxiVM8DkuLmynZbaNgXabbvmP5bnfHXu%2BHrFI5jwxJru9KVOcPie%2FksS9imYcP5et5EVJvtahbjfJPkpQ1yN7gpMzf0MHbfWJel2P%2BVeEuTHM%2F2KRtrQr1ibwrHK%2BJ0vWCGt0Wd6tsMz4KgeTxcjgMvSDp3lWYRexxuuz8CN73Yjt2U9xyZNjuowlLGZyQY6pgGspULs0QJdsAnlPOqmm0vov%2BEtr%2BhDo1CBJqcmW8m3A1xN45VF7y9htUw9sK%2FXHaBzqkwQHHdUgCpZPa1gtAet1C3kpytIu0ULizEsHrnPEbkxIBdhTHn%2BLz3lMGNHNEuBZsY7MVZjvuZ7RU4SECD8fSwEkXJkWJJdBCdbw3M%2FqgHqvjEa3Led9NWPb1N8imMOEXK%2FMBeaeRbI2Ux6kkMc1Zu1tJWU&X-Amz-Signature=c73965adc30c8a1569c54cfbed77368ff18b4952c636e2434eae49c8a01907bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MBFNJW%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7fBsqtO0e%2F4OTvV9TGKXQvZkEW6mAgqLxwC2ZTaa3uAiAgwF89LHbDMMBqanvwLNn4K%2BRZZkIsS4MicwA5YCXyYSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2kLmi2CGKLzaYLAtKtwDmLbeCyZ9DR7BUCHwSuwkWek%2Bk3VInTc8Jl%2BE7aXlhlphFaPH%2BDY1KMyZABZGqBUTJB6SVdXMpnWUGcrJ0%2FDYlCSJxDhnivSCJtsHiC4vM2sndPkXfx4ck7CLYz6Eef4G9IU0AvlpYZFim0W9k5Z8Yid7xfFnKw3z77t%2BI%2B6ShIBWtOVg9tPKn04sMw%2BmGugwOOHYvmJX%2BBtyYaci372PNqWQcvPeMVSSjylSXPlXpomG24QnZ9Zq8OfY3SWUjLVrZvf04mG%2FZCL1s3D4Qvps8XYqGEboXcJj2u3eSieWui0vapMEHzwqgbqo5K5Iwd0D90aLYlN1cBKa%2FRNHmscOYxdbG%2BJhDDQvY%2BuS0Ocp4cXLBKzh9lT1hpy63uIl6lO57pYMswGOts8xXwxkmzz%2BS8%2BMa38IdN%2BS%2Ffh1IA8wklLQoCD2yQFoPb7kSlnfpnr5nK1eqxiVM8DkuLmynZbaNgXabbvmP5bnfHXu%2BHrFI5jwxJru9KVOcPie%2FksS9imYcP5et5EVJvtahbjfJPkpQ1yN7gpMzf0MHbfWJel2P%2BVeEuTHM%2F2KRtrQr1ibwrHK%2BJ0vWCGt0Wd6tsMz4KgeTxcjgMvSDp3lWYRexxuuz8CN73Yjt2U9xyZNjuowlLGZyQY6pgGspULs0QJdsAnlPOqmm0vov%2BEtr%2BhDo1CBJqcmW8m3A1xN45VF7y9htUw9sK%2FXHaBzqkwQHHdUgCpZPa1gtAet1C3kpytIu0ULizEsHrnPEbkxIBdhTHn%2BLz3lMGNHNEuBZsY7MVZjvuZ7RU4SECD8fSwEkXJkWJJdBCdbw3M%2FqgHqvjEa3Led9NWPb1N8imMOEXK%2FMBeaeRbI2Ux6kkMc1Zu1tJWU&X-Amz-Signature=57b7583eb0006ff2cb5eb30ff82b05fbdf18cf93dcd10b695e36b449aca2736d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MBFNJW%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7fBsqtO0e%2F4OTvV9TGKXQvZkEW6mAgqLxwC2ZTaa3uAiAgwF89LHbDMMBqanvwLNn4K%2BRZZkIsS4MicwA5YCXyYSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2kLmi2CGKLzaYLAtKtwDmLbeCyZ9DR7BUCHwSuwkWek%2Bk3VInTc8Jl%2BE7aXlhlphFaPH%2BDY1KMyZABZGqBUTJB6SVdXMpnWUGcrJ0%2FDYlCSJxDhnivSCJtsHiC4vM2sndPkXfx4ck7CLYz6Eef4G9IU0AvlpYZFim0W9k5Z8Yid7xfFnKw3z77t%2BI%2B6ShIBWtOVg9tPKn04sMw%2BmGugwOOHYvmJX%2BBtyYaci372PNqWQcvPeMVSSjylSXPlXpomG24QnZ9Zq8OfY3SWUjLVrZvf04mG%2FZCL1s3D4Qvps8XYqGEboXcJj2u3eSieWui0vapMEHzwqgbqo5K5Iwd0D90aLYlN1cBKa%2FRNHmscOYxdbG%2BJhDDQvY%2BuS0Ocp4cXLBKzh9lT1hpy63uIl6lO57pYMswGOts8xXwxkmzz%2BS8%2BMa38IdN%2BS%2Ffh1IA8wklLQoCD2yQFoPb7kSlnfpnr5nK1eqxiVM8DkuLmynZbaNgXabbvmP5bnfHXu%2BHrFI5jwxJru9KVOcPie%2FksS9imYcP5et5EVJvtahbjfJPkpQ1yN7gpMzf0MHbfWJel2P%2BVeEuTHM%2F2KRtrQr1ibwrHK%2BJ0vWCGt0Wd6tsMz4KgeTxcjgMvSDp3lWYRexxuuz8CN73Yjt2U9xyZNjuowlLGZyQY6pgGspULs0QJdsAnlPOqmm0vov%2BEtr%2BhDo1CBJqcmW8m3A1xN45VF7y9htUw9sK%2FXHaBzqkwQHHdUgCpZPa1gtAet1C3kpytIu0ULizEsHrnPEbkxIBdhTHn%2BLz3lMGNHNEuBZsY7MVZjvuZ7RU4SECD8fSwEkXJkWJJdBCdbw3M%2FqgHqvjEa3Led9NWPb1N8imMOEXK%2FMBeaeRbI2Ux6kkMc1Zu1tJWU&X-Amz-Signature=1034c4b8ee1c9b6b84fb920db037e7019a98ccd0dd967706985ba11d8c1c94c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MBFNJW%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7fBsqtO0e%2F4OTvV9TGKXQvZkEW6mAgqLxwC2ZTaa3uAiAgwF89LHbDMMBqanvwLNn4K%2BRZZkIsS4MicwA5YCXyYSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2kLmi2CGKLzaYLAtKtwDmLbeCyZ9DR7BUCHwSuwkWek%2Bk3VInTc8Jl%2BE7aXlhlphFaPH%2BDY1KMyZABZGqBUTJB6SVdXMpnWUGcrJ0%2FDYlCSJxDhnivSCJtsHiC4vM2sndPkXfx4ck7CLYz6Eef4G9IU0AvlpYZFim0W9k5Z8Yid7xfFnKw3z77t%2BI%2B6ShIBWtOVg9tPKn04sMw%2BmGugwOOHYvmJX%2BBtyYaci372PNqWQcvPeMVSSjylSXPlXpomG24QnZ9Zq8OfY3SWUjLVrZvf04mG%2FZCL1s3D4Qvps8XYqGEboXcJj2u3eSieWui0vapMEHzwqgbqo5K5Iwd0D90aLYlN1cBKa%2FRNHmscOYxdbG%2BJhDDQvY%2BuS0Ocp4cXLBKzh9lT1hpy63uIl6lO57pYMswGOts8xXwxkmzz%2BS8%2BMa38IdN%2BS%2Ffh1IA8wklLQoCD2yQFoPb7kSlnfpnr5nK1eqxiVM8DkuLmynZbaNgXabbvmP5bnfHXu%2BHrFI5jwxJru9KVOcPie%2FksS9imYcP5et5EVJvtahbjfJPkpQ1yN7gpMzf0MHbfWJel2P%2BVeEuTHM%2F2KRtrQr1ibwrHK%2BJ0vWCGt0Wd6tsMz4KgeTxcjgMvSDp3lWYRexxuuz8CN73Yjt2U9xyZNjuowlLGZyQY6pgGspULs0QJdsAnlPOqmm0vov%2BEtr%2BhDo1CBJqcmW8m3A1xN45VF7y9htUw9sK%2FXHaBzqkwQHHdUgCpZPa1gtAet1C3kpytIu0ULizEsHrnPEbkxIBdhTHn%2BLz3lMGNHNEuBZsY7MVZjvuZ7RU4SECD8fSwEkXJkWJJdBCdbw3M%2FqgHqvjEa3Led9NWPb1N8imMOEXK%2FMBeaeRbI2Ux6kkMc1Zu1tJWU&X-Amz-Signature=bff4f1ceb04c19c5f6d35d4cf6ff4c5ca5311ac78dbe844f33262f41ee6ecedf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MBFNJW%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7fBsqtO0e%2F4OTvV9TGKXQvZkEW6mAgqLxwC2ZTaa3uAiAgwF89LHbDMMBqanvwLNn4K%2BRZZkIsS4MicwA5YCXyYSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2kLmi2CGKLzaYLAtKtwDmLbeCyZ9DR7BUCHwSuwkWek%2Bk3VInTc8Jl%2BE7aXlhlphFaPH%2BDY1KMyZABZGqBUTJB6SVdXMpnWUGcrJ0%2FDYlCSJxDhnivSCJtsHiC4vM2sndPkXfx4ck7CLYz6Eef4G9IU0AvlpYZFim0W9k5Z8Yid7xfFnKw3z77t%2BI%2B6ShIBWtOVg9tPKn04sMw%2BmGugwOOHYvmJX%2BBtyYaci372PNqWQcvPeMVSSjylSXPlXpomG24QnZ9Zq8OfY3SWUjLVrZvf04mG%2FZCL1s3D4Qvps8XYqGEboXcJj2u3eSieWui0vapMEHzwqgbqo5K5Iwd0D90aLYlN1cBKa%2FRNHmscOYxdbG%2BJhDDQvY%2BuS0Ocp4cXLBKzh9lT1hpy63uIl6lO57pYMswGOts8xXwxkmzz%2BS8%2BMa38IdN%2BS%2Ffh1IA8wklLQoCD2yQFoPb7kSlnfpnr5nK1eqxiVM8DkuLmynZbaNgXabbvmP5bnfHXu%2BHrFI5jwxJru9KVOcPie%2FksS9imYcP5et5EVJvtahbjfJPkpQ1yN7gpMzf0MHbfWJel2P%2BVeEuTHM%2F2KRtrQr1ibwrHK%2BJ0vWCGt0Wd6tsMz4KgeTxcjgMvSDp3lWYRexxuuz8CN73Yjt2U9xyZNjuowlLGZyQY6pgGspULs0QJdsAnlPOqmm0vov%2BEtr%2BhDo1CBJqcmW8m3A1xN45VF7y9htUw9sK%2FXHaBzqkwQHHdUgCpZPa1gtAet1C3kpytIu0ULizEsHrnPEbkxIBdhTHn%2BLz3lMGNHNEuBZsY7MVZjvuZ7RU4SECD8fSwEkXJkWJJdBCdbw3M%2FqgHqvjEa3Led9NWPb1N8imMOEXK%2FMBeaeRbI2Ux6kkMc1Zu1tJWU&X-Amz-Signature=89138d23a5e0e833b057f5729d575b2817e4dd694b8db3f91d1f42d5ff943a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
