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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ZVGRP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdgdQxLuA1r5ZLpKX4opEjpnhAJShgTJyCKN%2BZdsyyBQIhAIAJ%2Bt1ewhv64Ab15Kki4xm612T9BWaUqZnMvzVySHDSKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHz9y1R8xzt0C8ockq3ANYEZa2CFMryOgQKxGeJFWKZyD5IjWTJX1Y9nEb7HjbB2o8sw%2FFlegghOM3q8aT88kanR8GuEeQTaWuHx%2FhdcDpQNGpZ1t%2FejWQBw3kRh3xzh%2FdsssCQRn%2FNm7Gq4X73eJ7bEyOY4fQWMhsYvTvhgWcpvWUaxXRAegf9BJVwLa%2Fnz9xwOQaGH%2FMwMDiMq5so2Mcdz6MaCX8mqiKOrWvlO15BlypLst2dll5Q0O7OBcY9Fl38GGNw62FCmpqjIvRdkD4s563%2FHQD4O3qc8CzbtpFswtC4ZpMY4IQBLEYNLxQj%2F5LNUjKYOmuiO54dNki9fIbgBRYUyuZ%2FC7yIdR%2Fm6HKLeC9Dshxra9Gc8r%2BxgSJ399oQQ5%2FQX6MfH7yFdqQ0cHWjKE9DTBsMweX7EDbKew000omNCqfOIHdtflTORvNC9KZcecyfASZ5XkacEYoIbXL0rKrgKDSzhvKoqQWhhbdsZLML%2FU9LoRqjFKDOzIlL3Kz1qHATzLc977195zv0jsgflRESuFLxv5XZJjFumWFmvT8VrsruUwcIqb15qnQB1hqk3hzSaAz%2F69PARJyM1sDpxFgWz3Uzzo4aVgqV2d4Y%2B68Wp66FgRsR8oUiFyIukVud%2BEAwVOadRMNzTDQwYC9BjqkAYIwl%2BF4JGSCigcEIzHPLZXx4xijJb9D5r92xjaN3RY8fyKlzk6ybn7yaalbJ%2BYm%2Fqe2HH7sPqQWFbMVEQ4UvGZ4Fct5MSks%2BZNg0GmhQGzcQ7LQhd5v6kT%2FqtWq5kZJY4benPkrAIxKaVRuDnNKpZe%2Bckk2%2BaZgwrWosiK77E7AQNoG5XOFNT%2BPlnP9Y%2FSL1j%2FcDi%2BjrWQXUetFtaZm6Tyzbi6U&X-Amz-Signature=96f72a930431bd3bb3ba7fba3234266da669d91c2ffa3090825cef8534762982&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ZVGRP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdgdQxLuA1r5ZLpKX4opEjpnhAJShgTJyCKN%2BZdsyyBQIhAIAJ%2Bt1ewhv64Ab15Kki4xm612T9BWaUqZnMvzVySHDSKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHz9y1R8xzt0C8ockq3ANYEZa2CFMryOgQKxGeJFWKZyD5IjWTJX1Y9nEb7HjbB2o8sw%2FFlegghOM3q8aT88kanR8GuEeQTaWuHx%2FhdcDpQNGpZ1t%2FejWQBw3kRh3xzh%2FdsssCQRn%2FNm7Gq4X73eJ7bEyOY4fQWMhsYvTvhgWcpvWUaxXRAegf9BJVwLa%2Fnz9xwOQaGH%2FMwMDiMq5so2Mcdz6MaCX8mqiKOrWvlO15BlypLst2dll5Q0O7OBcY9Fl38GGNw62FCmpqjIvRdkD4s563%2FHQD4O3qc8CzbtpFswtC4ZpMY4IQBLEYNLxQj%2F5LNUjKYOmuiO54dNki9fIbgBRYUyuZ%2FC7yIdR%2Fm6HKLeC9Dshxra9Gc8r%2BxgSJ399oQQ5%2FQX6MfH7yFdqQ0cHWjKE9DTBsMweX7EDbKew000omNCqfOIHdtflTORvNC9KZcecyfASZ5XkacEYoIbXL0rKrgKDSzhvKoqQWhhbdsZLML%2FU9LoRqjFKDOzIlL3Kz1qHATzLc977195zv0jsgflRESuFLxv5XZJjFumWFmvT8VrsruUwcIqb15qnQB1hqk3hzSaAz%2F69PARJyM1sDpxFgWz3Uzzo4aVgqV2d4Y%2B68Wp66FgRsR8oUiFyIukVud%2BEAwVOadRMNzTDQwYC9BjqkAYIwl%2BF4JGSCigcEIzHPLZXx4xijJb9D5r92xjaN3RY8fyKlzk6ybn7yaalbJ%2BYm%2Fqe2HH7sPqQWFbMVEQ4UvGZ4Fct5MSks%2BZNg0GmhQGzcQ7LQhd5v6kT%2FqtWq5kZJY4benPkrAIxKaVRuDnNKpZe%2Bckk2%2BaZgwrWosiK77E7AQNoG5XOFNT%2BPlnP9Y%2FSL1j%2FcDi%2BjrWQXUetFtaZm6Tyzbi6U&X-Amz-Signature=178313f078a1685af0cb74c6307cd774603b166569f992b968bbb03cb7245ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ZVGRP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdgdQxLuA1r5ZLpKX4opEjpnhAJShgTJyCKN%2BZdsyyBQIhAIAJ%2Bt1ewhv64Ab15Kki4xm612T9BWaUqZnMvzVySHDSKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHz9y1R8xzt0C8ockq3ANYEZa2CFMryOgQKxGeJFWKZyD5IjWTJX1Y9nEb7HjbB2o8sw%2FFlegghOM3q8aT88kanR8GuEeQTaWuHx%2FhdcDpQNGpZ1t%2FejWQBw3kRh3xzh%2FdsssCQRn%2FNm7Gq4X73eJ7bEyOY4fQWMhsYvTvhgWcpvWUaxXRAegf9BJVwLa%2Fnz9xwOQaGH%2FMwMDiMq5so2Mcdz6MaCX8mqiKOrWvlO15BlypLst2dll5Q0O7OBcY9Fl38GGNw62FCmpqjIvRdkD4s563%2FHQD4O3qc8CzbtpFswtC4ZpMY4IQBLEYNLxQj%2F5LNUjKYOmuiO54dNki9fIbgBRYUyuZ%2FC7yIdR%2Fm6HKLeC9Dshxra9Gc8r%2BxgSJ399oQQ5%2FQX6MfH7yFdqQ0cHWjKE9DTBsMweX7EDbKew000omNCqfOIHdtflTORvNC9KZcecyfASZ5XkacEYoIbXL0rKrgKDSzhvKoqQWhhbdsZLML%2FU9LoRqjFKDOzIlL3Kz1qHATzLc977195zv0jsgflRESuFLxv5XZJjFumWFmvT8VrsruUwcIqb15qnQB1hqk3hzSaAz%2F69PARJyM1sDpxFgWz3Uzzo4aVgqV2d4Y%2B68Wp66FgRsR8oUiFyIukVud%2BEAwVOadRMNzTDQwYC9BjqkAYIwl%2BF4JGSCigcEIzHPLZXx4xijJb9D5r92xjaN3RY8fyKlzk6ybn7yaalbJ%2BYm%2Fqe2HH7sPqQWFbMVEQ4UvGZ4Fct5MSks%2BZNg0GmhQGzcQ7LQhd5v6kT%2FqtWq5kZJY4benPkrAIxKaVRuDnNKpZe%2Bckk2%2BaZgwrWosiK77E7AQNoG5XOFNT%2BPlnP9Y%2FSL1j%2FcDi%2BjrWQXUetFtaZm6Tyzbi6U&X-Amz-Signature=1b89ecfe58a554bfcd79cba4833c81f5bbe44e5d2f241e06fb618b3c6d354a58&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ZVGRP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdgdQxLuA1r5ZLpKX4opEjpnhAJShgTJyCKN%2BZdsyyBQIhAIAJ%2Bt1ewhv64Ab15Kki4xm612T9BWaUqZnMvzVySHDSKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHz9y1R8xzt0C8ockq3ANYEZa2CFMryOgQKxGeJFWKZyD5IjWTJX1Y9nEb7HjbB2o8sw%2FFlegghOM3q8aT88kanR8GuEeQTaWuHx%2FhdcDpQNGpZ1t%2FejWQBw3kRh3xzh%2FdsssCQRn%2FNm7Gq4X73eJ7bEyOY4fQWMhsYvTvhgWcpvWUaxXRAegf9BJVwLa%2Fnz9xwOQaGH%2FMwMDiMq5so2Mcdz6MaCX8mqiKOrWvlO15BlypLst2dll5Q0O7OBcY9Fl38GGNw62FCmpqjIvRdkD4s563%2FHQD4O3qc8CzbtpFswtC4ZpMY4IQBLEYNLxQj%2F5LNUjKYOmuiO54dNki9fIbgBRYUyuZ%2FC7yIdR%2Fm6HKLeC9Dshxra9Gc8r%2BxgSJ399oQQ5%2FQX6MfH7yFdqQ0cHWjKE9DTBsMweX7EDbKew000omNCqfOIHdtflTORvNC9KZcecyfASZ5XkacEYoIbXL0rKrgKDSzhvKoqQWhhbdsZLML%2FU9LoRqjFKDOzIlL3Kz1qHATzLc977195zv0jsgflRESuFLxv5XZJjFumWFmvT8VrsruUwcIqb15qnQB1hqk3hzSaAz%2F69PARJyM1sDpxFgWz3Uzzo4aVgqV2d4Y%2B68Wp66FgRsR8oUiFyIukVud%2BEAwVOadRMNzTDQwYC9BjqkAYIwl%2BF4JGSCigcEIzHPLZXx4xijJb9D5r92xjaN3RY8fyKlzk6ybn7yaalbJ%2BYm%2Fqe2HH7sPqQWFbMVEQ4UvGZ4Fct5MSks%2BZNg0GmhQGzcQ7LQhd5v6kT%2FqtWq5kZJY4benPkrAIxKaVRuDnNKpZe%2Bckk2%2BaZgwrWosiK77E7AQNoG5XOFNT%2BPlnP9Y%2FSL1j%2FcDi%2BjrWQXUetFtaZm6Tyzbi6U&X-Amz-Signature=8cacb458c85adb2fbe6761b1a5eb306d3463a5bd8020074244822a74c427e08f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ZVGRP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdgdQxLuA1r5ZLpKX4opEjpnhAJShgTJyCKN%2BZdsyyBQIhAIAJ%2Bt1ewhv64Ab15Kki4xm612T9BWaUqZnMvzVySHDSKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHz9y1R8xzt0C8ockq3ANYEZa2CFMryOgQKxGeJFWKZyD5IjWTJX1Y9nEb7HjbB2o8sw%2FFlegghOM3q8aT88kanR8GuEeQTaWuHx%2FhdcDpQNGpZ1t%2FejWQBw3kRh3xzh%2FdsssCQRn%2FNm7Gq4X73eJ7bEyOY4fQWMhsYvTvhgWcpvWUaxXRAegf9BJVwLa%2Fnz9xwOQaGH%2FMwMDiMq5so2Mcdz6MaCX8mqiKOrWvlO15BlypLst2dll5Q0O7OBcY9Fl38GGNw62FCmpqjIvRdkD4s563%2FHQD4O3qc8CzbtpFswtC4ZpMY4IQBLEYNLxQj%2F5LNUjKYOmuiO54dNki9fIbgBRYUyuZ%2FC7yIdR%2Fm6HKLeC9Dshxra9Gc8r%2BxgSJ399oQQ5%2FQX6MfH7yFdqQ0cHWjKE9DTBsMweX7EDbKew000omNCqfOIHdtflTORvNC9KZcecyfASZ5XkacEYoIbXL0rKrgKDSzhvKoqQWhhbdsZLML%2FU9LoRqjFKDOzIlL3Kz1qHATzLc977195zv0jsgflRESuFLxv5XZJjFumWFmvT8VrsruUwcIqb15qnQB1hqk3hzSaAz%2F69PARJyM1sDpxFgWz3Uzzo4aVgqV2d4Y%2B68Wp66FgRsR8oUiFyIukVud%2BEAwVOadRMNzTDQwYC9BjqkAYIwl%2BF4JGSCigcEIzHPLZXx4xijJb9D5r92xjaN3RY8fyKlzk6ybn7yaalbJ%2BYm%2Fqe2HH7sPqQWFbMVEQ4UvGZ4Fct5MSks%2BZNg0GmhQGzcQ7LQhd5v6kT%2FqtWq5kZJY4benPkrAIxKaVRuDnNKpZe%2Bckk2%2BaZgwrWosiK77E7AQNoG5XOFNT%2BPlnP9Y%2FSL1j%2FcDi%2BjrWQXUetFtaZm6Tyzbi6U&X-Amz-Signature=b7e7bae1caca5d8244d802c0d01b433883eeb30b5e89b178c5afadac926f0927&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ZVGRP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdgdQxLuA1r5ZLpKX4opEjpnhAJShgTJyCKN%2BZdsyyBQIhAIAJ%2Bt1ewhv64Ab15Kki4xm612T9BWaUqZnMvzVySHDSKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHz9y1R8xzt0C8ockq3ANYEZa2CFMryOgQKxGeJFWKZyD5IjWTJX1Y9nEb7HjbB2o8sw%2FFlegghOM3q8aT88kanR8GuEeQTaWuHx%2FhdcDpQNGpZ1t%2FejWQBw3kRh3xzh%2FdsssCQRn%2FNm7Gq4X73eJ7bEyOY4fQWMhsYvTvhgWcpvWUaxXRAegf9BJVwLa%2Fnz9xwOQaGH%2FMwMDiMq5so2Mcdz6MaCX8mqiKOrWvlO15BlypLst2dll5Q0O7OBcY9Fl38GGNw62FCmpqjIvRdkD4s563%2FHQD4O3qc8CzbtpFswtC4ZpMY4IQBLEYNLxQj%2F5LNUjKYOmuiO54dNki9fIbgBRYUyuZ%2FC7yIdR%2Fm6HKLeC9Dshxra9Gc8r%2BxgSJ399oQQ5%2FQX6MfH7yFdqQ0cHWjKE9DTBsMweX7EDbKew000omNCqfOIHdtflTORvNC9KZcecyfASZ5XkacEYoIbXL0rKrgKDSzhvKoqQWhhbdsZLML%2FU9LoRqjFKDOzIlL3Kz1qHATzLc977195zv0jsgflRESuFLxv5XZJjFumWFmvT8VrsruUwcIqb15qnQB1hqk3hzSaAz%2F69PARJyM1sDpxFgWz3Uzzo4aVgqV2d4Y%2B68Wp66FgRsR8oUiFyIukVud%2BEAwVOadRMNzTDQwYC9BjqkAYIwl%2BF4JGSCigcEIzHPLZXx4xijJb9D5r92xjaN3RY8fyKlzk6ybn7yaalbJ%2BYm%2Fqe2HH7sPqQWFbMVEQ4UvGZ4Fct5MSks%2BZNg0GmhQGzcQ7LQhd5v6kT%2FqtWq5kZJY4benPkrAIxKaVRuDnNKpZe%2Bckk2%2BaZgwrWosiK77E7AQNoG5XOFNT%2BPlnP9Y%2FSL1j%2FcDi%2BjrWQXUetFtaZm6Tyzbi6U&X-Amz-Signature=64a0bffbbe8b8fac4e55cb16178205fcdccbed39b0de8e8e31f34abdf7c81882&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ZVGRP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdgdQxLuA1r5ZLpKX4opEjpnhAJShgTJyCKN%2BZdsyyBQIhAIAJ%2Bt1ewhv64Ab15Kki4xm612T9BWaUqZnMvzVySHDSKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHz9y1R8xzt0C8ockq3ANYEZa2CFMryOgQKxGeJFWKZyD5IjWTJX1Y9nEb7HjbB2o8sw%2FFlegghOM3q8aT88kanR8GuEeQTaWuHx%2FhdcDpQNGpZ1t%2FejWQBw3kRh3xzh%2FdsssCQRn%2FNm7Gq4X73eJ7bEyOY4fQWMhsYvTvhgWcpvWUaxXRAegf9BJVwLa%2Fnz9xwOQaGH%2FMwMDiMq5so2Mcdz6MaCX8mqiKOrWvlO15BlypLst2dll5Q0O7OBcY9Fl38GGNw62FCmpqjIvRdkD4s563%2FHQD4O3qc8CzbtpFswtC4ZpMY4IQBLEYNLxQj%2F5LNUjKYOmuiO54dNki9fIbgBRYUyuZ%2FC7yIdR%2Fm6HKLeC9Dshxra9Gc8r%2BxgSJ399oQQ5%2FQX6MfH7yFdqQ0cHWjKE9DTBsMweX7EDbKew000omNCqfOIHdtflTORvNC9KZcecyfASZ5XkacEYoIbXL0rKrgKDSzhvKoqQWhhbdsZLML%2FU9LoRqjFKDOzIlL3Kz1qHATzLc977195zv0jsgflRESuFLxv5XZJjFumWFmvT8VrsruUwcIqb15qnQB1hqk3hzSaAz%2F69PARJyM1sDpxFgWz3Uzzo4aVgqV2d4Y%2B68Wp66FgRsR8oUiFyIukVud%2BEAwVOadRMNzTDQwYC9BjqkAYIwl%2BF4JGSCigcEIzHPLZXx4xijJb9D5r92xjaN3RY8fyKlzk6ybn7yaalbJ%2BYm%2Fqe2HH7sPqQWFbMVEQ4UvGZ4Fct5MSks%2BZNg0GmhQGzcQ7LQhd5v6kT%2FqtWq5kZJY4benPkrAIxKaVRuDnNKpZe%2Bckk2%2BaZgwrWosiK77E7AQNoG5XOFNT%2BPlnP9Y%2FSL1j%2FcDi%2BjrWQXUetFtaZm6Tyzbi6U&X-Amz-Signature=0d1a60913bf776c849a240b457b826edcca7bf265a0c295aee69527e90a88e15&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
