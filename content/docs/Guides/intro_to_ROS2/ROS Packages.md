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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2NOKVU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxS4B8jiy3sm2cK0qqO%2Fvwjt%2BgPS36TLBgl7J6b7fnyAIgRk24saidZLNmKWuMv%2FGZEKIJ6qjiWu8%2FkKideGHnz7Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDlfk1vhPSoa3dtMqCrcA%2BhZ6fZsnq%2B19ssVp%2F4fFO8hWnh4t0VJXUa9GU3CwCQsEztXZJLR2GnMUBvfff3OCi0%2Fp4kACxq%2Fb3Frj%2F9ErAW0BLKDsgg%2F0oBiM3L1RI541ysw9TPy4QOYWcXggKM0yJ2fQJaqo5r1TleTG44%2FmNgTKKtwT4rh3gRmdPsB%2BRrcsHL%2F60xvWRqq6grNrywb2mJDcc%2BHN17jRvdy1ODP9Q0ScmTELWEhNsbiCUmrW0BoPtNY4wOlMfjfdaZX%2FtSzlVLdYK%2BWl7R2DfFZMgUJ3hKZhZaDDJgIp3yW89B%2FlR99%2F7%2BdLzjQD5g0PM5VA%2FqF7jaOmO1COpeLkMggo7Xdw1MalCCV%2FY1YwZ9nMIcW02s5TCMFmUOVdceJnVeYTeKjSYKrIYV8iParhkJvLe9xsu5I0NubEZOG5PKlXp4R8Kz2OqoyZF969BKzZbQNgjKsU7SAPbtnWex8QUO7jhaKHQVEViWTtG1mocU3pBe2mJ9yWea276U7aaxuHuOvyYVrPpbBTEfhuBXjJqySHiu3pNh5RPxXDdHW7cFQKo4MMJxUCR2f8lwVxEzDcdo1Gn%2BHANBRNJow9dTCHVyeEahRaeeGFZd5Pn9SYZG2nYiKjch8v18GYjnSmqh6I1t9MPLMlb8GOqUB0797XdlFw6LGcsYoHxoxW2Pw8vWItfR8ct%2BQHqJreSb2Gk7vNizzD1VQY4WtiX7MRL%2FMBIwZhwbHSN2PeVNRj4QkBCG6JvQrXMMuwYjhKm3qPclIblSYPHpsUEOvWqzr%2F7WnqaQuD%2F%2F1flaRbTijHC757xb%2FIz40EWaxPugz%2FsU%2BzO9kJA3Pja2rFa7fR%2FRB7lTCm54eA6rv%2F3qM626973KQpeuc&X-Amz-Signature=b95d5292638421ec343cf2f3de8a7f6477db731880ad7195bfb3a99ba4e50e91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2NOKVU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxS4B8jiy3sm2cK0qqO%2Fvwjt%2BgPS36TLBgl7J6b7fnyAIgRk24saidZLNmKWuMv%2FGZEKIJ6qjiWu8%2FkKideGHnz7Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDlfk1vhPSoa3dtMqCrcA%2BhZ6fZsnq%2B19ssVp%2F4fFO8hWnh4t0VJXUa9GU3CwCQsEztXZJLR2GnMUBvfff3OCi0%2Fp4kACxq%2Fb3Frj%2F9ErAW0BLKDsgg%2F0oBiM3L1RI541ysw9TPy4QOYWcXggKM0yJ2fQJaqo5r1TleTG44%2FmNgTKKtwT4rh3gRmdPsB%2BRrcsHL%2F60xvWRqq6grNrywb2mJDcc%2BHN17jRvdy1ODP9Q0ScmTELWEhNsbiCUmrW0BoPtNY4wOlMfjfdaZX%2FtSzlVLdYK%2BWl7R2DfFZMgUJ3hKZhZaDDJgIp3yW89B%2FlR99%2F7%2BdLzjQD5g0PM5VA%2FqF7jaOmO1COpeLkMggo7Xdw1MalCCV%2FY1YwZ9nMIcW02s5TCMFmUOVdceJnVeYTeKjSYKrIYV8iParhkJvLe9xsu5I0NubEZOG5PKlXp4R8Kz2OqoyZF969BKzZbQNgjKsU7SAPbtnWex8QUO7jhaKHQVEViWTtG1mocU3pBe2mJ9yWea276U7aaxuHuOvyYVrPpbBTEfhuBXjJqySHiu3pNh5RPxXDdHW7cFQKo4MMJxUCR2f8lwVxEzDcdo1Gn%2BHANBRNJow9dTCHVyeEahRaeeGFZd5Pn9SYZG2nYiKjch8v18GYjnSmqh6I1t9MPLMlb8GOqUB0797XdlFw6LGcsYoHxoxW2Pw8vWItfR8ct%2BQHqJreSb2Gk7vNizzD1VQY4WtiX7MRL%2FMBIwZhwbHSN2PeVNRj4QkBCG6JvQrXMMuwYjhKm3qPclIblSYPHpsUEOvWqzr%2F7WnqaQuD%2F%2F1flaRbTijHC757xb%2FIz40EWaxPugz%2FsU%2BzO9kJA3Pja2rFa7fR%2FRB7lTCm54eA6rv%2F3qM626973KQpeuc&X-Amz-Signature=55910aab6f808247d559281e90d3d52443e32b9273eb74d0ddf5392dcb3eb21a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2NOKVU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxS4B8jiy3sm2cK0qqO%2Fvwjt%2BgPS36TLBgl7J6b7fnyAIgRk24saidZLNmKWuMv%2FGZEKIJ6qjiWu8%2FkKideGHnz7Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDlfk1vhPSoa3dtMqCrcA%2BhZ6fZsnq%2B19ssVp%2F4fFO8hWnh4t0VJXUa9GU3CwCQsEztXZJLR2GnMUBvfff3OCi0%2Fp4kACxq%2Fb3Frj%2F9ErAW0BLKDsgg%2F0oBiM3L1RI541ysw9TPy4QOYWcXggKM0yJ2fQJaqo5r1TleTG44%2FmNgTKKtwT4rh3gRmdPsB%2BRrcsHL%2F60xvWRqq6grNrywb2mJDcc%2BHN17jRvdy1ODP9Q0ScmTELWEhNsbiCUmrW0BoPtNY4wOlMfjfdaZX%2FtSzlVLdYK%2BWl7R2DfFZMgUJ3hKZhZaDDJgIp3yW89B%2FlR99%2F7%2BdLzjQD5g0PM5VA%2FqF7jaOmO1COpeLkMggo7Xdw1MalCCV%2FY1YwZ9nMIcW02s5TCMFmUOVdceJnVeYTeKjSYKrIYV8iParhkJvLe9xsu5I0NubEZOG5PKlXp4R8Kz2OqoyZF969BKzZbQNgjKsU7SAPbtnWex8QUO7jhaKHQVEViWTtG1mocU3pBe2mJ9yWea276U7aaxuHuOvyYVrPpbBTEfhuBXjJqySHiu3pNh5RPxXDdHW7cFQKo4MMJxUCR2f8lwVxEzDcdo1Gn%2BHANBRNJow9dTCHVyeEahRaeeGFZd5Pn9SYZG2nYiKjch8v18GYjnSmqh6I1t9MPLMlb8GOqUB0797XdlFw6LGcsYoHxoxW2Pw8vWItfR8ct%2BQHqJreSb2Gk7vNizzD1VQY4WtiX7MRL%2FMBIwZhwbHSN2PeVNRj4QkBCG6JvQrXMMuwYjhKm3qPclIblSYPHpsUEOvWqzr%2F7WnqaQuD%2F%2F1flaRbTijHC757xb%2FIz40EWaxPugz%2FsU%2BzO9kJA3Pja2rFa7fR%2FRB7lTCm54eA6rv%2F3qM626973KQpeuc&X-Amz-Signature=f2cb6778196abd27eff7c9269bd7e55d73baef777dd6c8145169d6e5549c81c6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2NOKVU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxS4B8jiy3sm2cK0qqO%2Fvwjt%2BgPS36TLBgl7J6b7fnyAIgRk24saidZLNmKWuMv%2FGZEKIJ6qjiWu8%2FkKideGHnz7Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDlfk1vhPSoa3dtMqCrcA%2BhZ6fZsnq%2B19ssVp%2F4fFO8hWnh4t0VJXUa9GU3CwCQsEztXZJLR2GnMUBvfff3OCi0%2Fp4kACxq%2Fb3Frj%2F9ErAW0BLKDsgg%2F0oBiM3L1RI541ysw9TPy4QOYWcXggKM0yJ2fQJaqo5r1TleTG44%2FmNgTKKtwT4rh3gRmdPsB%2BRrcsHL%2F60xvWRqq6grNrywb2mJDcc%2BHN17jRvdy1ODP9Q0ScmTELWEhNsbiCUmrW0BoPtNY4wOlMfjfdaZX%2FtSzlVLdYK%2BWl7R2DfFZMgUJ3hKZhZaDDJgIp3yW89B%2FlR99%2F7%2BdLzjQD5g0PM5VA%2FqF7jaOmO1COpeLkMggo7Xdw1MalCCV%2FY1YwZ9nMIcW02s5TCMFmUOVdceJnVeYTeKjSYKrIYV8iParhkJvLe9xsu5I0NubEZOG5PKlXp4R8Kz2OqoyZF969BKzZbQNgjKsU7SAPbtnWex8QUO7jhaKHQVEViWTtG1mocU3pBe2mJ9yWea276U7aaxuHuOvyYVrPpbBTEfhuBXjJqySHiu3pNh5RPxXDdHW7cFQKo4MMJxUCR2f8lwVxEzDcdo1Gn%2BHANBRNJow9dTCHVyeEahRaeeGFZd5Pn9SYZG2nYiKjch8v18GYjnSmqh6I1t9MPLMlb8GOqUB0797XdlFw6LGcsYoHxoxW2Pw8vWItfR8ct%2BQHqJreSb2Gk7vNizzD1VQY4WtiX7MRL%2FMBIwZhwbHSN2PeVNRj4QkBCG6JvQrXMMuwYjhKm3qPclIblSYPHpsUEOvWqzr%2F7WnqaQuD%2F%2F1flaRbTijHC757xb%2FIz40EWaxPugz%2FsU%2BzO9kJA3Pja2rFa7fR%2FRB7lTCm54eA6rv%2F3qM626973KQpeuc&X-Amz-Signature=7a9cf3efb2944bfd54aad215cbb0d5f54fadb6af1fa2f1776ab964e8029a3d32&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2NOKVU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxS4B8jiy3sm2cK0qqO%2Fvwjt%2BgPS36TLBgl7J6b7fnyAIgRk24saidZLNmKWuMv%2FGZEKIJ6qjiWu8%2FkKideGHnz7Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDlfk1vhPSoa3dtMqCrcA%2BhZ6fZsnq%2B19ssVp%2F4fFO8hWnh4t0VJXUa9GU3CwCQsEztXZJLR2GnMUBvfff3OCi0%2Fp4kACxq%2Fb3Frj%2F9ErAW0BLKDsgg%2F0oBiM3L1RI541ysw9TPy4QOYWcXggKM0yJ2fQJaqo5r1TleTG44%2FmNgTKKtwT4rh3gRmdPsB%2BRrcsHL%2F60xvWRqq6grNrywb2mJDcc%2BHN17jRvdy1ODP9Q0ScmTELWEhNsbiCUmrW0BoPtNY4wOlMfjfdaZX%2FtSzlVLdYK%2BWl7R2DfFZMgUJ3hKZhZaDDJgIp3yW89B%2FlR99%2F7%2BdLzjQD5g0PM5VA%2FqF7jaOmO1COpeLkMggo7Xdw1MalCCV%2FY1YwZ9nMIcW02s5TCMFmUOVdceJnVeYTeKjSYKrIYV8iParhkJvLe9xsu5I0NubEZOG5PKlXp4R8Kz2OqoyZF969BKzZbQNgjKsU7SAPbtnWex8QUO7jhaKHQVEViWTtG1mocU3pBe2mJ9yWea276U7aaxuHuOvyYVrPpbBTEfhuBXjJqySHiu3pNh5RPxXDdHW7cFQKo4MMJxUCR2f8lwVxEzDcdo1Gn%2BHANBRNJow9dTCHVyeEahRaeeGFZd5Pn9SYZG2nYiKjch8v18GYjnSmqh6I1t9MPLMlb8GOqUB0797XdlFw6LGcsYoHxoxW2Pw8vWItfR8ct%2BQHqJreSb2Gk7vNizzD1VQY4WtiX7MRL%2FMBIwZhwbHSN2PeVNRj4QkBCG6JvQrXMMuwYjhKm3qPclIblSYPHpsUEOvWqzr%2F7WnqaQuD%2F%2F1flaRbTijHC757xb%2FIz40EWaxPugz%2FsU%2BzO9kJA3Pja2rFa7fR%2FRB7lTCm54eA6rv%2F3qM626973KQpeuc&X-Amz-Signature=d87272e0b6e91c695d6abe1ccc8c58a8912ad2c7c761edcd46bf36b1820e6132&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2NOKVU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxS4B8jiy3sm2cK0qqO%2Fvwjt%2BgPS36TLBgl7J6b7fnyAIgRk24saidZLNmKWuMv%2FGZEKIJ6qjiWu8%2FkKideGHnz7Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDlfk1vhPSoa3dtMqCrcA%2BhZ6fZsnq%2B19ssVp%2F4fFO8hWnh4t0VJXUa9GU3CwCQsEztXZJLR2GnMUBvfff3OCi0%2Fp4kACxq%2Fb3Frj%2F9ErAW0BLKDsgg%2F0oBiM3L1RI541ysw9TPy4QOYWcXggKM0yJ2fQJaqo5r1TleTG44%2FmNgTKKtwT4rh3gRmdPsB%2BRrcsHL%2F60xvWRqq6grNrywb2mJDcc%2BHN17jRvdy1ODP9Q0ScmTELWEhNsbiCUmrW0BoPtNY4wOlMfjfdaZX%2FtSzlVLdYK%2BWl7R2DfFZMgUJ3hKZhZaDDJgIp3yW89B%2FlR99%2F7%2BdLzjQD5g0PM5VA%2FqF7jaOmO1COpeLkMggo7Xdw1MalCCV%2FY1YwZ9nMIcW02s5TCMFmUOVdceJnVeYTeKjSYKrIYV8iParhkJvLe9xsu5I0NubEZOG5PKlXp4R8Kz2OqoyZF969BKzZbQNgjKsU7SAPbtnWex8QUO7jhaKHQVEViWTtG1mocU3pBe2mJ9yWea276U7aaxuHuOvyYVrPpbBTEfhuBXjJqySHiu3pNh5RPxXDdHW7cFQKo4MMJxUCR2f8lwVxEzDcdo1Gn%2BHANBRNJow9dTCHVyeEahRaeeGFZd5Pn9SYZG2nYiKjch8v18GYjnSmqh6I1t9MPLMlb8GOqUB0797XdlFw6LGcsYoHxoxW2Pw8vWItfR8ct%2BQHqJreSb2Gk7vNizzD1VQY4WtiX7MRL%2FMBIwZhwbHSN2PeVNRj4QkBCG6JvQrXMMuwYjhKm3qPclIblSYPHpsUEOvWqzr%2F7WnqaQuD%2F%2F1flaRbTijHC757xb%2FIz40EWaxPugz%2FsU%2BzO9kJA3Pja2rFa7fR%2FRB7lTCm54eA6rv%2F3qM626973KQpeuc&X-Amz-Signature=ce8dd05623c8ce5ea7c0f68fea18ad3edb55b2685405b5173e1ed289a0afd798&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2NOKVU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxS4B8jiy3sm2cK0qqO%2Fvwjt%2BgPS36TLBgl7J6b7fnyAIgRk24saidZLNmKWuMv%2FGZEKIJ6qjiWu8%2FkKideGHnz7Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDlfk1vhPSoa3dtMqCrcA%2BhZ6fZsnq%2B19ssVp%2F4fFO8hWnh4t0VJXUa9GU3CwCQsEztXZJLR2GnMUBvfff3OCi0%2Fp4kACxq%2Fb3Frj%2F9ErAW0BLKDsgg%2F0oBiM3L1RI541ysw9TPy4QOYWcXggKM0yJ2fQJaqo5r1TleTG44%2FmNgTKKtwT4rh3gRmdPsB%2BRrcsHL%2F60xvWRqq6grNrywb2mJDcc%2BHN17jRvdy1ODP9Q0ScmTELWEhNsbiCUmrW0BoPtNY4wOlMfjfdaZX%2FtSzlVLdYK%2BWl7R2DfFZMgUJ3hKZhZaDDJgIp3yW89B%2FlR99%2F7%2BdLzjQD5g0PM5VA%2FqF7jaOmO1COpeLkMggo7Xdw1MalCCV%2FY1YwZ9nMIcW02s5TCMFmUOVdceJnVeYTeKjSYKrIYV8iParhkJvLe9xsu5I0NubEZOG5PKlXp4R8Kz2OqoyZF969BKzZbQNgjKsU7SAPbtnWex8QUO7jhaKHQVEViWTtG1mocU3pBe2mJ9yWea276U7aaxuHuOvyYVrPpbBTEfhuBXjJqySHiu3pNh5RPxXDdHW7cFQKo4MMJxUCR2f8lwVxEzDcdo1Gn%2BHANBRNJow9dTCHVyeEahRaeeGFZd5Pn9SYZG2nYiKjch8v18GYjnSmqh6I1t9MPLMlb8GOqUB0797XdlFw6LGcsYoHxoxW2Pw8vWItfR8ct%2BQHqJreSb2Gk7vNizzD1VQY4WtiX7MRL%2FMBIwZhwbHSN2PeVNRj4QkBCG6JvQrXMMuwYjhKm3qPclIblSYPHpsUEOvWqzr%2F7WnqaQuD%2F%2F1flaRbTijHC757xb%2FIz40EWaxPugz%2FsU%2BzO9kJA3Pja2rFa7fR%2FRB7lTCm54eA6rv%2F3qM626973KQpeuc&X-Amz-Signature=8e5b81679f779481532b3f9d35a650ee1dbb036da019d18e420b0bf083315718&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
