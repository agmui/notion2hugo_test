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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMEFGKJU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCTLpEa82czLlcLHrz9fEi%2FDz35JquxuH5%2FwUZmjNeIZAIhALfiyaG627%2Fngeam7KU6oRK%2Fpqh6saMfEHncyiPGCvN0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEFa5x3mlloiO7VeEq3ANrcOSgTdf7mMjncCpsPTeHVSd%2F6RQJMafnjzBKJubO5AT00gLZbDe%2BDVsMLKmYWHjg2KwwNbZC0KDUmcGFW5ykPhXrpKv0AvUVrEYeNATesq%2FRIdze5%2FNPYjnbJal%2B%2Byq3yzp6qlrbMCGdLfi9O%2BGCg%2Fe2ViTI7eOodrRlvc8yXvFjMReP5zAs65h%2B43YnGnaYjxv3jIl3AaWs%2BSLdXIxe1nMy386k6q3GJsQmdRE35rlLazaZtPn9TUKbuWzSYdKhU7nBt8djVDs7p28LT1r%2Brsl1Ck7ChGlkeRJ9Y4NTsrGTaAk1qUasU%2F9SHWeAlVgshHgB4OgEDy1SZs6QCinmq%2BZ5VdnKRIGVCsie1l3fwoOhFJjk6Jeie2O9SZVxHM9uc%2FiiYtFotjURkdpMQEzGWxH1ySC9EsTr3Vw9SKnOl5cmjQ6hZY2wTlP1xzA5NJhuBaZv%2BjyNKA%2BInVSxfnVUfX4UaBmbQFjBPA%2FgwqvK8wXIyUZgr2BaQZtGkxjb7XVvspokH%2FTzC1GJepLjPwAvcKmXhNQRYIohJHXglNJZHAtqPnZv0ZBH2rvBp%2F3e9ouort%2F3tk1XQsc8OKV8QHeeHZxM%2BOKFaeSYDSW1gb9Z0AfnfROB1BDw2iE8BDCdyKfCBjqkAVn%2FvXMB9JzlY4Z%2B5%2Fdv8MWPXS3Fgcptd%2BYajNopA4jeGYC5qKQQn%2BMyJPZE8MQhuLQUt7wu0NWblY55%2BFMyqV9ngSeLX3A55dtR2bNB3G6pQ0O2HCrcZQZG89owz32XoXFO891hwCgTuGJBmtOxDFUG2AphjGj9vqS4H5zJX7gmdMUzUXaqPcSFpibAg1RN45h3m7eVggJLZRBzPFIv8lKAc4eU&X-Amz-Signature=0aa51ecce322e7fa7bc3f7f4a3ade95fbc49496133f023fed73aec8a326a1fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMEFGKJU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCTLpEa82czLlcLHrz9fEi%2FDz35JquxuH5%2FwUZmjNeIZAIhALfiyaG627%2Fngeam7KU6oRK%2Fpqh6saMfEHncyiPGCvN0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEFa5x3mlloiO7VeEq3ANrcOSgTdf7mMjncCpsPTeHVSd%2F6RQJMafnjzBKJubO5AT00gLZbDe%2BDVsMLKmYWHjg2KwwNbZC0KDUmcGFW5ykPhXrpKv0AvUVrEYeNATesq%2FRIdze5%2FNPYjnbJal%2B%2Byq3yzp6qlrbMCGdLfi9O%2BGCg%2Fe2ViTI7eOodrRlvc8yXvFjMReP5zAs65h%2B43YnGnaYjxv3jIl3AaWs%2BSLdXIxe1nMy386k6q3GJsQmdRE35rlLazaZtPn9TUKbuWzSYdKhU7nBt8djVDs7p28LT1r%2Brsl1Ck7ChGlkeRJ9Y4NTsrGTaAk1qUasU%2F9SHWeAlVgshHgB4OgEDy1SZs6QCinmq%2BZ5VdnKRIGVCsie1l3fwoOhFJjk6Jeie2O9SZVxHM9uc%2FiiYtFotjURkdpMQEzGWxH1ySC9EsTr3Vw9SKnOl5cmjQ6hZY2wTlP1xzA5NJhuBaZv%2BjyNKA%2BInVSxfnVUfX4UaBmbQFjBPA%2FgwqvK8wXIyUZgr2BaQZtGkxjb7XVvspokH%2FTzC1GJepLjPwAvcKmXhNQRYIohJHXglNJZHAtqPnZv0ZBH2rvBp%2F3e9ouort%2F3tk1XQsc8OKV8QHeeHZxM%2BOKFaeSYDSW1gb9Z0AfnfROB1BDw2iE8BDCdyKfCBjqkAVn%2FvXMB9JzlY4Z%2B5%2Fdv8MWPXS3Fgcptd%2BYajNopA4jeGYC5qKQQn%2BMyJPZE8MQhuLQUt7wu0NWblY55%2BFMyqV9ngSeLX3A55dtR2bNB3G6pQ0O2HCrcZQZG89owz32XoXFO891hwCgTuGJBmtOxDFUG2AphjGj9vqS4H5zJX7gmdMUzUXaqPcSFpibAg1RN45h3m7eVggJLZRBzPFIv8lKAc4eU&X-Amz-Signature=794bdf7aa16a2c5fe65dbaa2a9cceee1c5f5f88a06b52f0010f8e50b90a2915a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMEFGKJU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCTLpEa82czLlcLHrz9fEi%2FDz35JquxuH5%2FwUZmjNeIZAIhALfiyaG627%2Fngeam7KU6oRK%2Fpqh6saMfEHncyiPGCvN0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEFa5x3mlloiO7VeEq3ANrcOSgTdf7mMjncCpsPTeHVSd%2F6RQJMafnjzBKJubO5AT00gLZbDe%2BDVsMLKmYWHjg2KwwNbZC0KDUmcGFW5ykPhXrpKv0AvUVrEYeNATesq%2FRIdze5%2FNPYjnbJal%2B%2Byq3yzp6qlrbMCGdLfi9O%2BGCg%2Fe2ViTI7eOodrRlvc8yXvFjMReP5zAs65h%2B43YnGnaYjxv3jIl3AaWs%2BSLdXIxe1nMy386k6q3GJsQmdRE35rlLazaZtPn9TUKbuWzSYdKhU7nBt8djVDs7p28LT1r%2Brsl1Ck7ChGlkeRJ9Y4NTsrGTaAk1qUasU%2F9SHWeAlVgshHgB4OgEDy1SZs6QCinmq%2BZ5VdnKRIGVCsie1l3fwoOhFJjk6Jeie2O9SZVxHM9uc%2FiiYtFotjURkdpMQEzGWxH1ySC9EsTr3Vw9SKnOl5cmjQ6hZY2wTlP1xzA5NJhuBaZv%2BjyNKA%2BInVSxfnVUfX4UaBmbQFjBPA%2FgwqvK8wXIyUZgr2BaQZtGkxjb7XVvspokH%2FTzC1GJepLjPwAvcKmXhNQRYIohJHXglNJZHAtqPnZv0ZBH2rvBp%2F3e9ouort%2F3tk1XQsc8OKV8QHeeHZxM%2BOKFaeSYDSW1gb9Z0AfnfROB1BDw2iE8BDCdyKfCBjqkAVn%2FvXMB9JzlY4Z%2B5%2Fdv8MWPXS3Fgcptd%2BYajNopA4jeGYC5qKQQn%2BMyJPZE8MQhuLQUt7wu0NWblY55%2BFMyqV9ngSeLX3A55dtR2bNB3G6pQ0O2HCrcZQZG89owz32XoXFO891hwCgTuGJBmtOxDFUG2AphjGj9vqS4H5zJX7gmdMUzUXaqPcSFpibAg1RN45h3m7eVggJLZRBzPFIv8lKAc4eU&X-Amz-Signature=5c0cc4b825e1fc214b5f5ac2a37f67f8a548cff3907be48e2e54e11036c07104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMEFGKJU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCTLpEa82czLlcLHrz9fEi%2FDz35JquxuH5%2FwUZmjNeIZAIhALfiyaG627%2Fngeam7KU6oRK%2Fpqh6saMfEHncyiPGCvN0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEFa5x3mlloiO7VeEq3ANrcOSgTdf7mMjncCpsPTeHVSd%2F6RQJMafnjzBKJubO5AT00gLZbDe%2BDVsMLKmYWHjg2KwwNbZC0KDUmcGFW5ykPhXrpKv0AvUVrEYeNATesq%2FRIdze5%2FNPYjnbJal%2B%2Byq3yzp6qlrbMCGdLfi9O%2BGCg%2Fe2ViTI7eOodrRlvc8yXvFjMReP5zAs65h%2B43YnGnaYjxv3jIl3AaWs%2BSLdXIxe1nMy386k6q3GJsQmdRE35rlLazaZtPn9TUKbuWzSYdKhU7nBt8djVDs7p28LT1r%2Brsl1Ck7ChGlkeRJ9Y4NTsrGTaAk1qUasU%2F9SHWeAlVgshHgB4OgEDy1SZs6QCinmq%2BZ5VdnKRIGVCsie1l3fwoOhFJjk6Jeie2O9SZVxHM9uc%2FiiYtFotjURkdpMQEzGWxH1ySC9EsTr3Vw9SKnOl5cmjQ6hZY2wTlP1xzA5NJhuBaZv%2BjyNKA%2BInVSxfnVUfX4UaBmbQFjBPA%2FgwqvK8wXIyUZgr2BaQZtGkxjb7XVvspokH%2FTzC1GJepLjPwAvcKmXhNQRYIohJHXglNJZHAtqPnZv0ZBH2rvBp%2F3e9ouort%2F3tk1XQsc8OKV8QHeeHZxM%2BOKFaeSYDSW1gb9Z0AfnfROB1BDw2iE8BDCdyKfCBjqkAVn%2FvXMB9JzlY4Z%2B5%2Fdv8MWPXS3Fgcptd%2BYajNopA4jeGYC5qKQQn%2BMyJPZE8MQhuLQUt7wu0NWblY55%2BFMyqV9ngSeLX3A55dtR2bNB3G6pQ0O2HCrcZQZG89owz32XoXFO891hwCgTuGJBmtOxDFUG2AphjGj9vqS4H5zJX7gmdMUzUXaqPcSFpibAg1RN45h3m7eVggJLZRBzPFIv8lKAc4eU&X-Amz-Signature=cfc02503aa83dd6833cb67f0b55dc8eeaf5bcee252719c8d4636791e67f8fa1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMEFGKJU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCTLpEa82czLlcLHrz9fEi%2FDz35JquxuH5%2FwUZmjNeIZAIhALfiyaG627%2Fngeam7KU6oRK%2Fpqh6saMfEHncyiPGCvN0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEFa5x3mlloiO7VeEq3ANrcOSgTdf7mMjncCpsPTeHVSd%2F6RQJMafnjzBKJubO5AT00gLZbDe%2BDVsMLKmYWHjg2KwwNbZC0KDUmcGFW5ykPhXrpKv0AvUVrEYeNATesq%2FRIdze5%2FNPYjnbJal%2B%2Byq3yzp6qlrbMCGdLfi9O%2BGCg%2Fe2ViTI7eOodrRlvc8yXvFjMReP5zAs65h%2B43YnGnaYjxv3jIl3AaWs%2BSLdXIxe1nMy386k6q3GJsQmdRE35rlLazaZtPn9TUKbuWzSYdKhU7nBt8djVDs7p28LT1r%2Brsl1Ck7ChGlkeRJ9Y4NTsrGTaAk1qUasU%2F9SHWeAlVgshHgB4OgEDy1SZs6QCinmq%2BZ5VdnKRIGVCsie1l3fwoOhFJjk6Jeie2O9SZVxHM9uc%2FiiYtFotjURkdpMQEzGWxH1ySC9EsTr3Vw9SKnOl5cmjQ6hZY2wTlP1xzA5NJhuBaZv%2BjyNKA%2BInVSxfnVUfX4UaBmbQFjBPA%2FgwqvK8wXIyUZgr2BaQZtGkxjb7XVvspokH%2FTzC1GJepLjPwAvcKmXhNQRYIohJHXglNJZHAtqPnZv0ZBH2rvBp%2F3e9ouort%2F3tk1XQsc8OKV8QHeeHZxM%2BOKFaeSYDSW1gb9Z0AfnfROB1BDw2iE8BDCdyKfCBjqkAVn%2FvXMB9JzlY4Z%2B5%2Fdv8MWPXS3Fgcptd%2BYajNopA4jeGYC5qKQQn%2BMyJPZE8MQhuLQUt7wu0NWblY55%2BFMyqV9ngSeLX3A55dtR2bNB3G6pQ0O2HCrcZQZG89owz32XoXFO891hwCgTuGJBmtOxDFUG2AphjGj9vqS4H5zJX7gmdMUzUXaqPcSFpibAg1RN45h3m7eVggJLZRBzPFIv8lKAc4eU&X-Amz-Signature=6b54bf934c8602fa6aac4e6ec0fb3d8e883f3afa6417b61f4f4957998e5a9f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMEFGKJU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCTLpEa82czLlcLHrz9fEi%2FDz35JquxuH5%2FwUZmjNeIZAIhALfiyaG627%2Fngeam7KU6oRK%2Fpqh6saMfEHncyiPGCvN0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEFa5x3mlloiO7VeEq3ANrcOSgTdf7mMjncCpsPTeHVSd%2F6RQJMafnjzBKJubO5AT00gLZbDe%2BDVsMLKmYWHjg2KwwNbZC0KDUmcGFW5ykPhXrpKv0AvUVrEYeNATesq%2FRIdze5%2FNPYjnbJal%2B%2Byq3yzp6qlrbMCGdLfi9O%2BGCg%2Fe2ViTI7eOodrRlvc8yXvFjMReP5zAs65h%2B43YnGnaYjxv3jIl3AaWs%2BSLdXIxe1nMy386k6q3GJsQmdRE35rlLazaZtPn9TUKbuWzSYdKhU7nBt8djVDs7p28LT1r%2Brsl1Ck7ChGlkeRJ9Y4NTsrGTaAk1qUasU%2F9SHWeAlVgshHgB4OgEDy1SZs6QCinmq%2BZ5VdnKRIGVCsie1l3fwoOhFJjk6Jeie2O9SZVxHM9uc%2FiiYtFotjURkdpMQEzGWxH1ySC9EsTr3Vw9SKnOl5cmjQ6hZY2wTlP1xzA5NJhuBaZv%2BjyNKA%2BInVSxfnVUfX4UaBmbQFjBPA%2FgwqvK8wXIyUZgr2BaQZtGkxjb7XVvspokH%2FTzC1GJepLjPwAvcKmXhNQRYIohJHXglNJZHAtqPnZv0ZBH2rvBp%2F3e9ouort%2F3tk1XQsc8OKV8QHeeHZxM%2BOKFaeSYDSW1gb9Z0AfnfROB1BDw2iE8BDCdyKfCBjqkAVn%2FvXMB9JzlY4Z%2B5%2Fdv8MWPXS3Fgcptd%2BYajNopA4jeGYC5qKQQn%2BMyJPZE8MQhuLQUt7wu0NWblY55%2BFMyqV9ngSeLX3A55dtR2bNB3G6pQ0O2HCrcZQZG89owz32XoXFO891hwCgTuGJBmtOxDFUG2AphjGj9vqS4H5zJX7gmdMUzUXaqPcSFpibAg1RN45h3m7eVggJLZRBzPFIv8lKAc4eU&X-Amz-Signature=3e767da643df838c56e080995bdaedc073672eace7db023ea26eebdcc1fe9d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMEFGKJU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCTLpEa82czLlcLHrz9fEi%2FDz35JquxuH5%2FwUZmjNeIZAIhALfiyaG627%2Fngeam7KU6oRK%2Fpqh6saMfEHncyiPGCvN0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEFa5x3mlloiO7VeEq3ANrcOSgTdf7mMjncCpsPTeHVSd%2F6RQJMafnjzBKJubO5AT00gLZbDe%2BDVsMLKmYWHjg2KwwNbZC0KDUmcGFW5ykPhXrpKv0AvUVrEYeNATesq%2FRIdze5%2FNPYjnbJal%2B%2Byq3yzp6qlrbMCGdLfi9O%2BGCg%2Fe2ViTI7eOodrRlvc8yXvFjMReP5zAs65h%2B43YnGnaYjxv3jIl3AaWs%2BSLdXIxe1nMy386k6q3GJsQmdRE35rlLazaZtPn9TUKbuWzSYdKhU7nBt8djVDs7p28LT1r%2Brsl1Ck7ChGlkeRJ9Y4NTsrGTaAk1qUasU%2F9SHWeAlVgshHgB4OgEDy1SZs6QCinmq%2BZ5VdnKRIGVCsie1l3fwoOhFJjk6Jeie2O9SZVxHM9uc%2FiiYtFotjURkdpMQEzGWxH1ySC9EsTr3Vw9SKnOl5cmjQ6hZY2wTlP1xzA5NJhuBaZv%2BjyNKA%2BInVSxfnVUfX4UaBmbQFjBPA%2FgwqvK8wXIyUZgr2BaQZtGkxjb7XVvspokH%2FTzC1GJepLjPwAvcKmXhNQRYIohJHXglNJZHAtqPnZv0ZBH2rvBp%2F3e9ouort%2F3tk1XQsc8OKV8QHeeHZxM%2BOKFaeSYDSW1gb9Z0AfnfROB1BDw2iE8BDCdyKfCBjqkAVn%2FvXMB9JzlY4Z%2B5%2Fdv8MWPXS3Fgcptd%2BYajNopA4jeGYC5qKQQn%2BMyJPZE8MQhuLQUt7wu0NWblY55%2BFMyqV9ngSeLX3A55dtR2bNB3G6pQ0O2HCrcZQZG89owz32XoXFO891hwCgTuGJBmtOxDFUG2AphjGj9vqS4H5zJX7gmdMUzUXaqPcSFpibAg1RN45h3m7eVggJLZRBzPFIv8lKAc4eU&X-Amz-Signature=a6facd4f3326a7a8f5feeb54bdeb2c7a6352d6e3ce5d22b6c1b4fdef8aefd8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
