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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IPL7BK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDQnGi6lHI7nJMJRPRftTOBhdEzb9lPwrxJNoNJn4F8pQIgOKmMw3ZmjOLU4nSUfdXHJZby5QQqWiSRNtZV9c7rDGoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEwGFSmPaK8vJX9D0CrcA9zneMzWhYIx7uDrN%2BNrtmbtuq2eoQKpPGA3vyhoB4Sr3FMxr86vhLsqrcsrFNK1yIPb1B%2FQUfWfIFoWDjzzitALpWkEyl8zNhqskSBr7VE5XVVB9sV3AjIKqGfgnHZKUGDSzwkPtaWUlqVaP82nCF03lZv%2F5fW4jNU55N09jWIseJYhzjUaSQOZi8J%2BTPuRv3ZmLctLccDcyWj%2FHjeLU4yVEGjzhCoa5jrcRBhF4B87n0qKDn9ZIIquXmLw6BbmxIfUs%2FyI6CTfOQ0X66SQ8p5RITiM1n3KS97dACU3lxOwPDSLGpbuWo15JjT0WwIuLMw2Lqyce5hk8uFj7b16foDEAhh14yESM7BXuVXVfpO3cMGyyLEyeZf714c%2BTEXkYmAwLwx02ynr9H6usJYWk0YHcHin8MTJfXlvNp9GPXtyaKG14z1DcA4ew8fvrUOeNFcO%2FxxMjldSF6qXufa9nCBFYlqx0VkennD4ICqX0eYzFHzMOQjmnBPaojE6714NRaDBt0hh83grdWjH8J%2Fc6nPnC1l6S7nOwU1zHD0el15kYH0cbM8jt9IThFDWSyuSEsCg%2FwFidLnzlHh8VrMx99YO8tB%2F17PxWFOHGrdzPqPEnnn2gHaRbg2WvxqwMPbbl8QGOqUBAoEmg3WTbJkZ%2BVSUGR0O4Olx9p2C2%2FYmEsSWOmCbNeaL6DfAb4X5JYV9iz1%2BJs9FR2Io%2FOKTOXl%2FYn3esyw2cONe%2Ft1CyoRfGodNfM6EoQkDaca5SBcEiTJxR7wKqYSODPf6ZSe%2Bz4Z6KmFrF4sV7EstcGb8O14IS4V1I7vsBBLhoNSzYjafXoWIAv2KC6WOZQ84kXHCnc6WCFFNK7ML1w9VvWFc&X-Amz-Signature=505d9e055f660c8ca68a2d7b24ccb6d3bb55f45d1738e7f3f203ded404280d78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IPL7BK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDQnGi6lHI7nJMJRPRftTOBhdEzb9lPwrxJNoNJn4F8pQIgOKmMw3ZmjOLU4nSUfdXHJZby5QQqWiSRNtZV9c7rDGoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEwGFSmPaK8vJX9D0CrcA9zneMzWhYIx7uDrN%2BNrtmbtuq2eoQKpPGA3vyhoB4Sr3FMxr86vhLsqrcsrFNK1yIPb1B%2FQUfWfIFoWDjzzitALpWkEyl8zNhqskSBr7VE5XVVB9sV3AjIKqGfgnHZKUGDSzwkPtaWUlqVaP82nCF03lZv%2F5fW4jNU55N09jWIseJYhzjUaSQOZi8J%2BTPuRv3ZmLctLccDcyWj%2FHjeLU4yVEGjzhCoa5jrcRBhF4B87n0qKDn9ZIIquXmLw6BbmxIfUs%2FyI6CTfOQ0X66SQ8p5RITiM1n3KS97dACU3lxOwPDSLGpbuWo15JjT0WwIuLMw2Lqyce5hk8uFj7b16foDEAhh14yESM7BXuVXVfpO3cMGyyLEyeZf714c%2BTEXkYmAwLwx02ynr9H6usJYWk0YHcHin8MTJfXlvNp9GPXtyaKG14z1DcA4ew8fvrUOeNFcO%2FxxMjldSF6qXufa9nCBFYlqx0VkennD4ICqX0eYzFHzMOQjmnBPaojE6714NRaDBt0hh83grdWjH8J%2Fc6nPnC1l6S7nOwU1zHD0el15kYH0cbM8jt9IThFDWSyuSEsCg%2FwFidLnzlHh8VrMx99YO8tB%2F17PxWFOHGrdzPqPEnnn2gHaRbg2WvxqwMPbbl8QGOqUBAoEmg3WTbJkZ%2BVSUGR0O4Olx9p2C2%2FYmEsSWOmCbNeaL6DfAb4X5JYV9iz1%2BJs9FR2Io%2FOKTOXl%2FYn3esyw2cONe%2Ft1CyoRfGodNfM6EoQkDaca5SBcEiTJxR7wKqYSODPf6ZSe%2Bz4Z6KmFrF4sV7EstcGb8O14IS4V1I7vsBBLhoNSzYjafXoWIAv2KC6WOZQ84kXHCnc6WCFFNK7ML1w9VvWFc&X-Amz-Signature=a2155ccad04fedee161988dda1ac2b2955f6089832495309ece4bdea086195ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IPL7BK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDQnGi6lHI7nJMJRPRftTOBhdEzb9lPwrxJNoNJn4F8pQIgOKmMw3ZmjOLU4nSUfdXHJZby5QQqWiSRNtZV9c7rDGoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEwGFSmPaK8vJX9D0CrcA9zneMzWhYIx7uDrN%2BNrtmbtuq2eoQKpPGA3vyhoB4Sr3FMxr86vhLsqrcsrFNK1yIPb1B%2FQUfWfIFoWDjzzitALpWkEyl8zNhqskSBr7VE5XVVB9sV3AjIKqGfgnHZKUGDSzwkPtaWUlqVaP82nCF03lZv%2F5fW4jNU55N09jWIseJYhzjUaSQOZi8J%2BTPuRv3ZmLctLccDcyWj%2FHjeLU4yVEGjzhCoa5jrcRBhF4B87n0qKDn9ZIIquXmLw6BbmxIfUs%2FyI6CTfOQ0X66SQ8p5RITiM1n3KS97dACU3lxOwPDSLGpbuWo15JjT0WwIuLMw2Lqyce5hk8uFj7b16foDEAhh14yESM7BXuVXVfpO3cMGyyLEyeZf714c%2BTEXkYmAwLwx02ynr9H6usJYWk0YHcHin8MTJfXlvNp9GPXtyaKG14z1DcA4ew8fvrUOeNFcO%2FxxMjldSF6qXufa9nCBFYlqx0VkennD4ICqX0eYzFHzMOQjmnBPaojE6714NRaDBt0hh83grdWjH8J%2Fc6nPnC1l6S7nOwU1zHD0el15kYH0cbM8jt9IThFDWSyuSEsCg%2FwFidLnzlHh8VrMx99YO8tB%2F17PxWFOHGrdzPqPEnnn2gHaRbg2WvxqwMPbbl8QGOqUBAoEmg3WTbJkZ%2BVSUGR0O4Olx9p2C2%2FYmEsSWOmCbNeaL6DfAb4X5JYV9iz1%2BJs9FR2Io%2FOKTOXl%2FYn3esyw2cONe%2Ft1CyoRfGodNfM6EoQkDaca5SBcEiTJxR7wKqYSODPf6ZSe%2Bz4Z6KmFrF4sV7EstcGb8O14IS4V1I7vsBBLhoNSzYjafXoWIAv2KC6WOZQ84kXHCnc6WCFFNK7ML1w9VvWFc&X-Amz-Signature=7824701340225384cf88f912433307f70536d68e7a280828fae17c52c89647c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IPL7BK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDQnGi6lHI7nJMJRPRftTOBhdEzb9lPwrxJNoNJn4F8pQIgOKmMw3ZmjOLU4nSUfdXHJZby5QQqWiSRNtZV9c7rDGoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEwGFSmPaK8vJX9D0CrcA9zneMzWhYIx7uDrN%2BNrtmbtuq2eoQKpPGA3vyhoB4Sr3FMxr86vhLsqrcsrFNK1yIPb1B%2FQUfWfIFoWDjzzitALpWkEyl8zNhqskSBr7VE5XVVB9sV3AjIKqGfgnHZKUGDSzwkPtaWUlqVaP82nCF03lZv%2F5fW4jNU55N09jWIseJYhzjUaSQOZi8J%2BTPuRv3ZmLctLccDcyWj%2FHjeLU4yVEGjzhCoa5jrcRBhF4B87n0qKDn9ZIIquXmLw6BbmxIfUs%2FyI6CTfOQ0X66SQ8p5RITiM1n3KS97dACU3lxOwPDSLGpbuWo15JjT0WwIuLMw2Lqyce5hk8uFj7b16foDEAhh14yESM7BXuVXVfpO3cMGyyLEyeZf714c%2BTEXkYmAwLwx02ynr9H6usJYWk0YHcHin8MTJfXlvNp9GPXtyaKG14z1DcA4ew8fvrUOeNFcO%2FxxMjldSF6qXufa9nCBFYlqx0VkennD4ICqX0eYzFHzMOQjmnBPaojE6714NRaDBt0hh83grdWjH8J%2Fc6nPnC1l6S7nOwU1zHD0el15kYH0cbM8jt9IThFDWSyuSEsCg%2FwFidLnzlHh8VrMx99YO8tB%2F17PxWFOHGrdzPqPEnnn2gHaRbg2WvxqwMPbbl8QGOqUBAoEmg3WTbJkZ%2BVSUGR0O4Olx9p2C2%2FYmEsSWOmCbNeaL6DfAb4X5JYV9iz1%2BJs9FR2Io%2FOKTOXl%2FYn3esyw2cONe%2Ft1CyoRfGodNfM6EoQkDaca5SBcEiTJxR7wKqYSODPf6ZSe%2Bz4Z6KmFrF4sV7EstcGb8O14IS4V1I7vsBBLhoNSzYjafXoWIAv2KC6WOZQ84kXHCnc6WCFFNK7ML1w9VvWFc&X-Amz-Signature=3a03f88f9fca76a2bf5b54ef6f2ea62bbd0fbe29fbcbbb41305d14f4ac47807f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IPL7BK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDQnGi6lHI7nJMJRPRftTOBhdEzb9lPwrxJNoNJn4F8pQIgOKmMw3ZmjOLU4nSUfdXHJZby5QQqWiSRNtZV9c7rDGoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEwGFSmPaK8vJX9D0CrcA9zneMzWhYIx7uDrN%2BNrtmbtuq2eoQKpPGA3vyhoB4Sr3FMxr86vhLsqrcsrFNK1yIPb1B%2FQUfWfIFoWDjzzitALpWkEyl8zNhqskSBr7VE5XVVB9sV3AjIKqGfgnHZKUGDSzwkPtaWUlqVaP82nCF03lZv%2F5fW4jNU55N09jWIseJYhzjUaSQOZi8J%2BTPuRv3ZmLctLccDcyWj%2FHjeLU4yVEGjzhCoa5jrcRBhF4B87n0qKDn9ZIIquXmLw6BbmxIfUs%2FyI6CTfOQ0X66SQ8p5RITiM1n3KS97dACU3lxOwPDSLGpbuWo15JjT0WwIuLMw2Lqyce5hk8uFj7b16foDEAhh14yESM7BXuVXVfpO3cMGyyLEyeZf714c%2BTEXkYmAwLwx02ynr9H6usJYWk0YHcHin8MTJfXlvNp9GPXtyaKG14z1DcA4ew8fvrUOeNFcO%2FxxMjldSF6qXufa9nCBFYlqx0VkennD4ICqX0eYzFHzMOQjmnBPaojE6714NRaDBt0hh83grdWjH8J%2Fc6nPnC1l6S7nOwU1zHD0el15kYH0cbM8jt9IThFDWSyuSEsCg%2FwFidLnzlHh8VrMx99YO8tB%2F17PxWFOHGrdzPqPEnnn2gHaRbg2WvxqwMPbbl8QGOqUBAoEmg3WTbJkZ%2BVSUGR0O4Olx9p2C2%2FYmEsSWOmCbNeaL6DfAb4X5JYV9iz1%2BJs9FR2Io%2FOKTOXl%2FYn3esyw2cONe%2Ft1CyoRfGodNfM6EoQkDaca5SBcEiTJxR7wKqYSODPf6ZSe%2Bz4Z6KmFrF4sV7EstcGb8O14IS4V1I7vsBBLhoNSzYjafXoWIAv2KC6WOZQ84kXHCnc6WCFFNK7ML1w9VvWFc&X-Amz-Signature=417a2699953639a0684d8b4a400fb2b4a597b385d6406eec22e7ebfa3cdf70ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IPL7BK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDQnGi6lHI7nJMJRPRftTOBhdEzb9lPwrxJNoNJn4F8pQIgOKmMw3ZmjOLU4nSUfdXHJZby5QQqWiSRNtZV9c7rDGoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEwGFSmPaK8vJX9D0CrcA9zneMzWhYIx7uDrN%2BNrtmbtuq2eoQKpPGA3vyhoB4Sr3FMxr86vhLsqrcsrFNK1yIPb1B%2FQUfWfIFoWDjzzitALpWkEyl8zNhqskSBr7VE5XVVB9sV3AjIKqGfgnHZKUGDSzwkPtaWUlqVaP82nCF03lZv%2F5fW4jNU55N09jWIseJYhzjUaSQOZi8J%2BTPuRv3ZmLctLccDcyWj%2FHjeLU4yVEGjzhCoa5jrcRBhF4B87n0qKDn9ZIIquXmLw6BbmxIfUs%2FyI6CTfOQ0X66SQ8p5RITiM1n3KS97dACU3lxOwPDSLGpbuWo15JjT0WwIuLMw2Lqyce5hk8uFj7b16foDEAhh14yESM7BXuVXVfpO3cMGyyLEyeZf714c%2BTEXkYmAwLwx02ynr9H6usJYWk0YHcHin8MTJfXlvNp9GPXtyaKG14z1DcA4ew8fvrUOeNFcO%2FxxMjldSF6qXufa9nCBFYlqx0VkennD4ICqX0eYzFHzMOQjmnBPaojE6714NRaDBt0hh83grdWjH8J%2Fc6nPnC1l6S7nOwU1zHD0el15kYH0cbM8jt9IThFDWSyuSEsCg%2FwFidLnzlHh8VrMx99YO8tB%2F17PxWFOHGrdzPqPEnnn2gHaRbg2WvxqwMPbbl8QGOqUBAoEmg3WTbJkZ%2BVSUGR0O4Olx9p2C2%2FYmEsSWOmCbNeaL6DfAb4X5JYV9iz1%2BJs9FR2Io%2FOKTOXl%2FYn3esyw2cONe%2Ft1CyoRfGodNfM6EoQkDaca5SBcEiTJxR7wKqYSODPf6ZSe%2Bz4Z6KmFrF4sV7EstcGb8O14IS4V1I7vsBBLhoNSzYjafXoWIAv2KC6WOZQ84kXHCnc6WCFFNK7ML1w9VvWFc&X-Amz-Signature=63ed1d98e620a8e456c90c6d07d2394ba252720b3878251e87211007bfd93c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IPL7BK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDQnGi6lHI7nJMJRPRftTOBhdEzb9lPwrxJNoNJn4F8pQIgOKmMw3ZmjOLU4nSUfdXHJZby5QQqWiSRNtZV9c7rDGoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEwGFSmPaK8vJX9D0CrcA9zneMzWhYIx7uDrN%2BNrtmbtuq2eoQKpPGA3vyhoB4Sr3FMxr86vhLsqrcsrFNK1yIPb1B%2FQUfWfIFoWDjzzitALpWkEyl8zNhqskSBr7VE5XVVB9sV3AjIKqGfgnHZKUGDSzwkPtaWUlqVaP82nCF03lZv%2F5fW4jNU55N09jWIseJYhzjUaSQOZi8J%2BTPuRv3ZmLctLccDcyWj%2FHjeLU4yVEGjzhCoa5jrcRBhF4B87n0qKDn9ZIIquXmLw6BbmxIfUs%2FyI6CTfOQ0X66SQ8p5RITiM1n3KS97dACU3lxOwPDSLGpbuWo15JjT0WwIuLMw2Lqyce5hk8uFj7b16foDEAhh14yESM7BXuVXVfpO3cMGyyLEyeZf714c%2BTEXkYmAwLwx02ynr9H6usJYWk0YHcHin8MTJfXlvNp9GPXtyaKG14z1DcA4ew8fvrUOeNFcO%2FxxMjldSF6qXufa9nCBFYlqx0VkennD4ICqX0eYzFHzMOQjmnBPaojE6714NRaDBt0hh83grdWjH8J%2Fc6nPnC1l6S7nOwU1zHD0el15kYH0cbM8jt9IThFDWSyuSEsCg%2FwFidLnzlHh8VrMx99YO8tB%2F17PxWFOHGrdzPqPEnnn2gHaRbg2WvxqwMPbbl8QGOqUBAoEmg3WTbJkZ%2BVSUGR0O4Olx9p2C2%2FYmEsSWOmCbNeaL6DfAb4X5JYV9iz1%2BJs9FR2Io%2FOKTOXl%2FYn3esyw2cONe%2Ft1CyoRfGodNfM6EoQkDaca5SBcEiTJxR7wKqYSODPf6ZSe%2Bz4Z6KmFrF4sV7EstcGb8O14IS4V1I7vsBBLhoNSzYjafXoWIAv2KC6WOZQ84kXHCnc6WCFFNK7ML1w9VvWFc&X-Amz-Signature=19660cb0e0695c94a887f3b9c71c7794962ded9630161fa6794e7b5ddf563b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
