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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TII6ETNB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD5qwECD%2BtqJFFE%2Ffdhe60x%2BQ5R335g7KL8ZtUIdDcMtQIgEVRZ1T2CGltCXNa2Vg2F3OFed%2BSJMzHczZv7ADBVVcUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKsU3ZBFXHyF7lBJyrcAwZUd46gCslVPTLI2n6fChJpBzw1S7zu%2ByoID6f9arUnIg1M4zy%2F0dI5XtKYdRPV133MvF5xyUSBhiO8AJwm7MDwmKHRVUlmxbDJZ%2BDJdg4gSlGTBfCA9mpf1mhsglL44rvR9RQWsb3%2Bf2kSFhMSI%2B9uvq4fQiJKSoS8y1S1hEVDjvpYnhfu0pSbKWgAJeHEDd8NN4T0c9uPXQqmYWWGm5SqI24YP2Jj9kJ1KrrJeMyQHYuTLlzsI20fmmmRhNyx2Ea0PytFFd2fA0Mhr5OH7ZiT0hqayX6a2M7YhVvJY3r2qYCUYdksrKYx6kwHODK5aP35aM5nXTtOe7o7jU65nQ39hoOxTdOPlQ1DCRjVl4QL4jqiDf99O1oZwYx6EfA2kkIVqLvtCKLBNsi31fMeR9VpCtfDnweANTEF7FvqNPBs3TFJUv27O6LUygrX%2BTST8cJa0tqDLJ57%2FmwBQ1QP9R7BX1HKar%2BYHZLNhChmr15Kcoyb2Rr1S9iLscHst0eOEzpwLyjB9WbK%2Br0lp%2Fhfa8w6kr4vV8l7XiRfJJdKMuvyCm73RlstFi1aO%2BrFGW3jKnAgIZfk5ajkseYIm3FzBbweQchifHepFpVDu%2BW3QX3h5%2BGYtyMO5%2FZZMJw7MKyAycAGOqUB4Dq8DUVZumknoXdNpGe7za9MTNvF7X10cGwsGnj6jQ7y%2FnDF2CaqnU3KV5wWxPm2Ig5YHqqo3N1RA8XYJwOfoxTBT2wRKiTRF8uLC7iSRm0j97CgPB4pEHHfMgw5NHmHrn79jS2dr3y5MzKNrd4DTjdGSCHvXatCArrTPiYeh%2BytJQKqbcdsJuH2MHe4Y9a8XhBmIpfXMDjpwXAcQmTntXqaLrt%2B&X-Amz-Signature=45d104185b179b86e5d4670c854915d8810d17874056c34b26d7bed8bf75dae5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TII6ETNB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD5qwECD%2BtqJFFE%2Ffdhe60x%2BQ5R335g7KL8ZtUIdDcMtQIgEVRZ1T2CGltCXNa2Vg2F3OFed%2BSJMzHczZv7ADBVVcUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKsU3ZBFXHyF7lBJyrcAwZUd46gCslVPTLI2n6fChJpBzw1S7zu%2ByoID6f9arUnIg1M4zy%2F0dI5XtKYdRPV133MvF5xyUSBhiO8AJwm7MDwmKHRVUlmxbDJZ%2BDJdg4gSlGTBfCA9mpf1mhsglL44rvR9RQWsb3%2Bf2kSFhMSI%2B9uvq4fQiJKSoS8y1S1hEVDjvpYnhfu0pSbKWgAJeHEDd8NN4T0c9uPXQqmYWWGm5SqI24YP2Jj9kJ1KrrJeMyQHYuTLlzsI20fmmmRhNyx2Ea0PytFFd2fA0Mhr5OH7ZiT0hqayX6a2M7YhVvJY3r2qYCUYdksrKYx6kwHODK5aP35aM5nXTtOe7o7jU65nQ39hoOxTdOPlQ1DCRjVl4QL4jqiDf99O1oZwYx6EfA2kkIVqLvtCKLBNsi31fMeR9VpCtfDnweANTEF7FvqNPBs3TFJUv27O6LUygrX%2BTST8cJa0tqDLJ57%2FmwBQ1QP9R7BX1HKar%2BYHZLNhChmr15Kcoyb2Rr1S9iLscHst0eOEzpwLyjB9WbK%2Br0lp%2Fhfa8w6kr4vV8l7XiRfJJdKMuvyCm73RlstFi1aO%2BrFGW3jKnAgIZfk5ajkseYIm3FzBbweQchifHepFpVDu%2BW3QX3h5%2BGYtyMO5%2FZZMJw7MKyAycAGOqUB4Dq8DUVZumknoXdNpGe7za9MTNvF7X10cGwsGnj6jQ7y%2FnDF2CaqnU3KV5wWxPm2Ig5YHqqo3N1RA8XYJwOfoxTBT2wRKiTRF8uLC7iSRm0j97CgPB4pEHHfMgw5NHmHrn79jS2dr3y5MzKNrd4DTjdGSCHvXatCArrTPiYeh%2BytJQKqbcdsJuH2MHe4Y9a8XhBmIpfXMDjpwXAcQmTntXqaLrt%2B&X-Amz-Signature=3ae852b70f6407034b4e2c79745f79485347bb435ecd94ff3f96aa81ac0d90a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TII6ETNB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD5qwECD%2BtqJFFE%2Ffdhe60x%2BQ5R335g7KL8ZtUIdDcMtQIgEVRZ1T2CGltCXNa2Vg2F3OFed%2BSJMzHczZv7ADBVVcUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKsU3ZBFXHyF7lBJyrcAwZUd46gCslVPTLI2n6fChJpBzw1S7zu%2ByoID6f9arUnIg1M4zy%2F0dI5XtKYdRPV133MvF5xyUSBhiO8AJwm7MDwmKHRVUlmxbDJZ%2BDJdg4gSlGTBfCA9mpf1mhsglL44rvR9RQWsb3%2Bf2kSFhMSI%2B9uvq4fQiJKSoS8y1S1hEVDjvpYnhfu0pSbKWgAJeHEDd8NN4T0c9uPXQqmYWWGm5SqI24YP2Jj9kJ1KrrJeMyQHYuTLlzsI20fmmmRhNyx2Ea0PytFFd2fA0Mhr5OH7ZiT0hqayX6a2M7YhVvJY3r2qYCUYdksrKYx6kwHODK5aP35aM5nXTtOe7o7jU65nQ39hoOxTdOPlQ1DCRjVl4QL4jqiDf99O1oZwYx6EfA2kkIVqLvtCKLBNsi31fMeR9VpCtfDnweANTEF7FvqNPBs3TFJUv27O6LUygrX%2BTST8cJa0tqDLJ57%2FmwBQ1QP9R7BX1HKar%2BYHZLNhChmr15Kcoyb2Rr1S9iLscHst0eOEzpwLyjB9WbK%2Br0lp%2Fhfa8w6kr4vV8l7XiRfJJdKMuvyCm73RlstFi1aO%2BrFGW3jKnAgIZfk5ajkseYIm3FzBbweQchifHepFpVDu%2BW3QX3h5%2BGYtyMO5%2FZZMJw7MKyAycAGOqUB4Dq8DUVZumknoXdNpGe7za9MTNvF7X10cGwsGnj6jQ7y%2FnDF2CaqnU3KV5wWxPm2Ig5YHqqo3N1RA8XYJwOfoxTBT2wRKiTRF8uLC7iSRm0j97CgPB4pEHHfMgw5NHmHrn79jS2dr3y5MzKNrd4DTjdGSCHvXatCArrTPiYeh%2BytJQKqbcdsJuH2MHe4Y9a8XhBmIpfXMDjpwXAcQmTntXqaLrt%2B&X-Amz-Signature=c068931815646751f0e370a7dbb745690cb70d3abd35f641bad284176cddd282&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TII6ETNB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD5qwECD%2BtqJFFE%2Ffdhe60x%2BQ5R335g7KL8ZtUIdDcMtQIgEVRZ1T2CGltCXNa2Vg2F3OFed%2BSJMzHczZv7ADBVVcUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKsU3ZBFXHyF7lBJyrcAwZUd46gCslVPTLI2n6fChJpBzw1S7zu%2ByoID6f9arUnIg1M4zy%2F0dI5XtKYdRPV133MvF5xyUSBhiO8AJwm7MDwmKHRVUlmxbDJZ%2BDJdg4gSlGTBfCA9mpf1mhsglL44rvR9RQWsb3%2Bf2kSFhMSI%2B9uvq4fQiJKSoS8y1S1hEVDjvpYnhfu0pSbKWgAJeHEDd8NN4T0c9uPXQqmYWWGm5SqI24YP2Jj9kJ1KrrJeMyQHYuTLlzsI20fmmmRhNyx2Ea0PytFFd2fA0Mhr5OH7ZiT0hqayX6a2M7YhVvJY3r2qYCUYdksrKYx6kwHODK5aP35aM5nXTtOe7o7jU65nQ39hoOxTdOPlQ1DCRjVl4QL4jqiDf99O1oZwYx6EfA2kkIVqLvtCKLBNsi31fMeR9VpCtfDnweANTEF7FvqNPBs3TFJUv27O6LUygrX%2BTST8cJa0tqDLJ57%2FmwBQ1QP9R7BX1HKar%2BYHZLNhChmr15Kcoyb2Rr1S9iLscHst0eOEzpwLyjB9WbK%2Br0lp%2Fhfa8w6kr4vV8l7XiRfJJdKMuvyCm73RlstFi1aO%2BrFGW3jKnAgIZfk5ajkseYIm3FzBbweQchifHepFpVDu%2BW3QX3h5%2BGYtyMO5%2FZZMJw7MKyAycAGOqUB4Dq8DUVZumknoXdNpGe7za9MTNvF7X10cGwsGnj6jQ7y%2FnDF2CaqnU3KV5wWxPm2Ig5YHqqo3N1RA8XYJwOfoxTBT2wRKiTRF8uLC7iSRm0j97CgPB4pEHHfMgw5NHmHrn79jS2dr3y5MzKNrd4DTjdGSCHvXatCArrTPiYeh%2BytJQKqbcdsJuH2MHe4Y9a8XhBmIpfXMDjpwXAcQmTntXqaLrt%2B&X-Amz-Signature=99ce8efa9506022cf5ee2e839e93c1661c9a6ada53ed01fbe4f5bd3e7b2f1ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TII6ETNB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD5qwECD%2BtqJFFE%2Ffdhe60x%2BQ5R335g7KL8ZtUIdDcMtQIgEVRZ1T2CGltCXNa2Vg2F3OFed%2BSJMzHczZv7ADBVVcUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKsU3ZBFXHyF7lBJyrcAwZUd46gCslVPTLI2n6fChJpBzw1S7zu%2ByoID6f9arUnIg1M4zy%2F0dI5XtKYdRPV133MvF5xyUSBhiO8AJwm7MDwmKHRVUlmxbDJZ%2BDJdg4gSlGTBfCA9mpf1mhsglL44rvR9RQWsb3%2Bf2kSFhMSI%2B9uvq4fQiJKSoS8y1S1hEVDjvpYnhfu0pSbKWgAJeHEDd8NN4T0c9uPXQqmYWWGm5SqI24YP2Jj9kJ1KrrJeMyQHYuTLlzsI20fmmmRhNyx2Ea0PytFFd2fA0Mhr5OH7ZiT0hqayX6a2M7YhVvJY3r2qYCUYdksrKYx6kwHODK5aP35aM5nXTtOe7o7jU65nQ39hoOxTdOPlQ1DCRjVl4QL4jqiDf99O1oZwYx6EfA2kkIVqLvtCKLBNsi31fMeR9VpCtfDnweANTEF7FvqNPBs3TFJUv27O6LUygrX%2BTST8cJa0tqDLJ57%2FmwBQ1QP9R7BX1HKar%2BYHZLNhChmr15Kcoyb2Rr1S9iLscHst0eOEzpwLyjB9WbK%2Br0lp%2Fhfa8w6kr4vV8l7XiRfJJdKMuvyCm73RlstFi1aO%2BrFGW3jKnAgIZfk5ajkseYIm3FzBbweQchifHepFpVDu%2BW3QX3h5%2BGYtyMO5%2FZZMJw7MKyAycAGOqUB4Dq8DUVZumknoXdNpGe7za9MTNvF7X10cGwsGnj6jQ7y%2FnDF2CaqnU3KV5wWxPm2Ig5YHqqo3N1RA8XYJwOfoxTBT2wRKiTRF8uLC7iSRm0j97CgPB4pEHHfMgw5NHmHrn79jS2dr3y5MzKNrd4DTjdGSCHvXatCArrTPiYeh%2BytJQKqbcdsJuH2MHe4Y9a8XhBmIpfXMDjpwXAcQmTntXqaLrt%2B&X-Amz-Signature=f7b512a5f63b7e2cbd7493eb6f6eb8891583329afd0f26118ad638f39581911a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TII6ETNB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD5qwECD%2BtqJFFE%2Ffdhe60x%2BQ5R335g7KL8ZtUIdDcMtQIgEVRZ1T2CGltCXNa2Vg2F3OFed%2BSJMzHczZv7ADBVVcUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKsU3ZBFXHyF7lBJyrcAwZUd46gCslVPTLI2n6fChJpBzw1S7zu%2ByoID6f9arUnIg1M4zy%2F0dI5XtKYdRPV133MvF5xyUSBhiO8AJwm7MDwmKHRVUlmxbDJZ%2BDJdg4gSlGTBfCA9mpf1mhsglL44rvR9RQWsb3%2Bf2kSFhMSI%2B9uvq4fQiJKSoS8y1S1hEVDjvpYnhfu0pSbKWgAJeHEDd8NN4T0c9uPXQqmYWWGm5SqI24YP2Jj9kJ1KrrJeMyQHYuTLlzsI20fmmmRhNyx2Ea0PytFFd2fA0Mhr5OH7ZiT0hqayX6a2M7YhVvJY3r2qYCUYdksrKYx6kwHODK5aP35aM5nXTtOe7o7jU65nQ39hoOxTdOPlQ1DCRjVl4QL4jqiDf99O1oZwYx6EfA2kkIVqLvtCKLBNsi31fMeR9VpCtfDnweANTEF7FvqNPBs3TFJUv27O6LUygrX%2BTST8cJa0tqDLJ57%2FmwBQ1QP9R7BX1HKar%2BYHZLNhChmr15Kcoyb2Rr1S9iLscHst0eOEzpwLyjB9WbK%2Br0lp%2Fhfa8w6kr4vV8l7XiRfJJdKMuvyCm73RlstFi1aO%2BrFGW3jKnAgIZfk5ajkseYIm3FzBbweQchifHepFpVDu%2BW3QX3h5%2BGYtyMO5%2FZZMJw7MKyAycAGOqUB4Dq8DUVZumknoXdNpGe7za9MTNvF7X10cGwsGnj6jQ7y%2FnDF2CaqnU3KV5wWxPm2Ig5YHqqo3N1RA8XYJwOfoxTBT2wRKiTRF8uLC7iSRm0j97CgPB4pEHHfMgw5NHmHrn79jS2dr3y5MzKNrd4DTjdGSCHvXatCArrTPiYeh%2BytJQKqbcdsJuH2MHe4Y9a8XhBmIpfXMDjpwXAcQmTntXqaLrt%2B&X-Amz-Signature=4fa3f26eaa92bf7f1ac966b78bd7416dbbbb07504c873b5f5433604742e656a7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TII6ETNB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD5qwECD%2BtqJFFE%2Ffdhe60x%2BQ5R335g7KL8ZtUIdDcMtQIgEVRZ1T2CGltCXNa2Vg2F3OFed%2BSJMzHczZv7ADBVVcUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKsU3ZBFXHyF7lBJyrcAwZUd46gCslVPTLI2n6fChJpBzw1S7zu%2ByoID6f9arUnIg1M4zy%2F0dI5XtKYdRPV133MvF5xyUSBhiO8AJwm7MDwmKHRVUlmxbDJZ%2BDJdg4gSlGTBfCA9mpf1mhsglL44rvR9RQWsb3%2Bf2kSFhMSI%2B9uvq4fQiJKSoS8y1S1hEVDjvpYnhfu0pSbKWgAJeHEDd8NN4T0c9uPXQqmYWWGm5SqI24YP2Jj9kJ1KrrJeMyQHYuTLlzsI20fmmmRhNyx2Ea0PytFFd2fA0Mhr5OH7ZiT0hqayX6a2M7YhVvJY3r2qYCUYdksrKYx6kwHODK5aP35aM5nXTtOe7o7jU65nQ39hoOxTdOPlQ1DCRjVl4QL4jqiDf99O1oZwYx6EfA2kkIVqLvtCKLBNsi31fMeR9VpCtfDnweANTEF7FvqNPBs3TFJUv27O6LUygrX%2BTST8cJa0tqDLJ57%2FmwBQ1QP9R7BX1HKar%2BYHZLNhChmr15Kcoyb2Rr1S9iLscHst0eOEzpwLyjB9WbK%2Br0lp%2Fhfa8w6kr4vV8l7XiRfJJdKMuvyCm73RlstFi1aO%2BrFGW3jKnAgIZfk5ajkseYIm3FzBbweQchifHepFpVDu%2BW3QX3h5%2BGYtyMO5%2FZZMJw7MKyAycAGOqUB4Dq8DUVZumknoXdNpGe7za9MTNvF7X10cGwsGnj6jQ7y%2FnDF2CaqnU3KV5wWxPm2Ig5YHqqo3N1RA8XYJwOfoxTBT2wRKiTRF8uLC7iSRm0j97CgPB4pEHHfMgw5NHmHrn79jS2dr3y5MzKNrd4DTjdGSCHvXatCArrTPiYeh%2BytJQKqbcdsJuH2MHe4Y9a8XhBmIpfXMDjpwXAcQmTntXqaLrt%2B&X-Amz-Signature=2610d28696b4e28ed7a959b0c5200777316509c8eb107d1216a9303f638c5717&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
