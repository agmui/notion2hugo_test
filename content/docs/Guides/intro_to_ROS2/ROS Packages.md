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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLZN4YX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDlCjvsAngliztmqHohd4orhyK5nzG%2F34Vg68%2F9OGEagwIhAImOOWTM%2B3eELPveYEN332GS8VHMgS0VHlBwyN7VtfvVKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQZbbmMdxnkqOKjQYq3AMOiQ8hpsBWfXWmvoXBh0sC6O9qpR3ORtqxQOlZCbziKlt%2ByouTt7KYHzK9CeLCODZoLehPbLZN0rJLBEPOk7BWjEdPIzMK8ZyxWvW2ATPRgz4187hUHSEh50HDeLfIDn9%2F8B8Jl%2BTxyUhCqgHKxRVQvTwylsr1%2BHGfa3v4iJf4U4e%2BceRioSbH%2Fx%2FdWHowpKYEUffKcqsJUgND8SKbM8RMpxJ4YXu9hQLRvusDoKkkrSn6mjzRcShoORSRCEZqmQQ7oHBdwzGvILS0npIq%2FaBg48VaDYkqFcjFhyAQlgHsGxCj4TFS%2FpivRDQHBBn7gFZKD4%2FSdukJIWo2QAWQGlsRSyDu8Hk6T0gQ%2B%2FlFz8Etp32do7CKkNHM39bIHoAbHZdPH1cjmlapPFDdpDW12v8xEh0tkev%2Bky0jX8ZOj%2BLYDZSJExGzvsUQv%2FSksFa1Kir6AklAXdr4naqEAYJhjfqHDGL3avPjdpnZI0K9yjM9n5tQxx%2FMF%2BFX4vFOTe38LRrCLOaY7k4Xx5PHNBSz2DEDZIgYDLpcfuardKW6GaNes0KVts%2BvZEgVpHxgQ%2BkR78BGDaq8KyjQF%2FratTtE0uSpUAUJwEVS%2FWnVTNcheCvuj5WnT4RNKoHtZHmPgjCL7aPABjqkAf3yxrIs4jpc8cNe8AmyoBvaZOW4mbrUqBRuM6nW7TuVctCiV0D9Z%2BELGhp8POSvZZWBv4LAeWDiymwSsvIHt1uHX7NDeUIATS6TZOUl6j6Z3GobIz%2F1nhZOY16ASeCpbQ4xvOO75AbwmrRWC2%2Fksh2uhFfF0Kq6yq2Q6BNdKy6Va3MVviCt1HZNgst%2BJtdBXyHP02w6%2FXfr2bNNdK5zO%2F8CF7i0&X-Amz-Signature=97628493bb69f04892a02f710b136000ad2a66603494d2c11dd3edbf98df6e60&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLZN4YX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDlCjvsAngliztmqHohd4orhyK5nzG%2F34Vg68%2F9OGEagwIhAImOOWTM%2B3eELPveYEN332GS8VHMgS0VHlBwyN7VtfvVKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQZbbmMdxnkqOKjQYq3AMOiQ8hpsBWfXWmvoXBh0sC6O9qpR3ORtqxQOlZCbziKlt%2ByouTt7KYHzK9CeLCODZoLehPbLZN0rJLBEPOk7BWjEdPIzMK8ZyxWvW2ATPRgz4187hUHSEh50HDeLfIDn9%2F8B8Jl%2BTxyUhCqgHKxRVQvTwylsr1%2BHGfa3v4iJf4U4e%2BceRioSbH%2Fx%2FdWHowpKYEUffKcqsJUgND8SKbM8RMpxJ4YXu9hQLRvusDoKkkrSn6mjzRcShoORSRCEZqmQQ7oHBdwzGvILS0npIq%2FaBg48VaDYkqFcjFhyAQlgHsGxCj4TFS%2FpivRDQHBBn7gFZKD4%2FSdukJIWo2QAWQGlsRSyDu8Hk6T0gQ%2B%2FlFz8Etp32do7CKkNHM39bIHoAbHZdPH1cjmlapPFDdpDW12v8xEh0tkev%2Bky0jX8ZOj%2BLYDZSJExGzvsUQv%2FSksFa1Kir6AklAXdr4naqEAYJhjfqHDGL3avPjdpnZI0K9yjM9n5tQxx%2FMF%2BFX4vFOTe38LRrCLOaY7k4Xx5PHNBSz2DEDZIgYDLpcfuardKW6GaNes0KVts%2BvZEgVpHxgQ%2BkR78BGDaq8KyjQF%2FratTtE0uSpUAUJwEVS%2FWnVTNcheCvuj5WnT4RNKoHtZHmPgjCL7aPABjqkAf3yxrIs4jpc8cNe8AmyoBvaZOW4mbrUqBRuM6nW7TuVctCiV0D9Z%2BELGhp8POSvZZWBv4LAeWDiymwSsvIHt1uHX7NDeUIATS6TZOUl6j6Z3GobIz%2F1nhZOY16ASeCpbQ4xvOO75AbwmrRWC2%2Fksh2uhFfF0Kq6yq2Q6BNdKy6Va3MVviCt1HZNgst%2BJtdBXyHP02w6%2FXfr2bNNdK5zO%2F8CF7i0&X-Amz-Signature=9038f041820695dfd09d4591f9b4c877f7a1d831a144e6813c5e4c2ed7ca7f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLZN4YX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDlCjvsAngliztmqHohd4orhyK5nzG%2F34Vg68%2F9OGEagwIhAImOOWTM%2B3eELPveYEN332GS8VHMgS0VHlBwyN7VtfvVKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQZbbmMdxnkqOKjQYq3AMOiQ8hpsBWfXWmvoXBh0sC6O9qpR3ORtqxQOlZCbziKlt%2ByouTt7KYHzK9CeLCODZoLehPbLZN0rJLBEPOk7BWjEdPIzMK8ZyxWvW2ATPRgz4187hUHSEh50HDeLfIDn9%2F8B8Jl%2BTxyUhCqgHKxRVQvTwylsr1%2BHGfa3v4iJf4U4e%2BceRioSbH%2Fx%2FdWHowpKYEUffKcqsJUgND8SKbM8RMpxJ4YXu9hQLRvusDoKkkrSn6mjzRcShoORSRCEZqmQQ7oHBdwzGvILS0npIq%2FaBg48VaDYkqFcjFhyAQlgHsGxCj4TFS%2FpivRDQHBBn7gFZKD4%2FSdukJIWo2QAWQGlsRSyDu8Hk6T0gQ%2B%2FlFz8Etp32do7CKkNHM39bIHoAbHZdPH1cjmlapPFDdpDW12v8xEh0tkev%2Bky0jX8ZOj%2BLYDZSJExGzvsUQv%2FSksFa1Kir6AklAXdr4naqEAYJhjfqHDGL3avPjdpnZI0K9yjM9n5tQxx%2FMF%2BFX4vFOTe38LRrCLOaY7k4Xx5PHNBSz2DEDZIgYDLpcfuardKW6GaNes0KVts%2BvZEgVpHxgQ%2BkR78BGDaq8KyjQF%2FratTtE0uSpUAUJwEVS%2FWnVTNcheCvuj5WnT4RNKoHtZHmPgjCL7aPABjqkAf3yxrIs4jpc8cNe8AmyoBvaZOW4mbrUqBRuM6nW7TuVctCiV0D9Z%2BELGhp8POSvZZWBv4LAeWDiymwSsvIHt1uHX7NDeUIATS6TZOUl6j6Z3GobIz%2F1nhZOY16ASeCpbQ4xvOO75AbwmrRWC2%2Fksh2uhFfF0Kq6yq2Q6BNdKy6Va3MVviCt1HZNgst%2BJtdBXyHP02w6%2FXfr2bNNdK5zO%2F8CF7i0&X-Amz-Signature=c7e08f73b3429a3120345d73d3401a812db5a4f7f07afed2ddf30dddd42ee105&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLZN4YX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDlCjvsAngliztmqHohd4orhyK5nzG%2F34Vg68%2F9OGEagwIhAImOOWTM%2B3eELPveYEN332GS8VHMgS0VHlBwyN7VtfvVKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQZbbmMdxnkqOKjQYq3AMOiQ8hpsBWfXWmvoXBh0sC6O9qpR3ORtqxQOlZCbziKlt%2ByouTt7KYHzK9CeLCODZoLehPbLZN0rJLBEPOk7BWjEdPIzMK8ZyxWvW2ATPRgz4187hUHSEh50HDeLfIDn9%2F8B8Jl%2BTxyUhCqgHKxRVQvTwylsr1%2BHGfa3v4iJf4U4e%2BceRioSbH%2Fx%2FdWHowpKYEUffKcqsJUgND8SKbM8RMpxJ4YXu9hQLRvusDoKkkrSn6mjzRcShoORSRCEZqmQQ7oHBdwzGvILS0npIq%2FaBg48VaDYkqFcjFhyAQlgHsGxCj4TFS%2FpivRDQHBBn7gFZKD4%2FSdukJIWo2QAWQGlsRSyDu8Hk6T0gQ%2B%2FlFz8Etp32do7CKkNHM39bIHoAbHZdPH1cjmlapPFDdpDW12v8xEh0tkev%2Bky0jX8ZOj%2BLYDZSJExGzvsUQv%2FSksFa1Kir6AklAXdr4naqEAYJhjfqHDGL3avPjdpnZI0K9yjM9n5tQxx%2FMF%2BFX4vFOTe38LRrCLOaY7k4Xx5PHNBSz2DEDZIgYDLpcfuardKW6GaNes0KVts%2BvZEgVpHxgQ%2BkR78BGDaq8KyjQF%2FratTtE0uSpUAUJwEVS%2FWnVTNcheCvuj5WnT4RNKoHtZHmPgjCL7aPABjqkAf3yxrIs4jpc8cNe8AmyoBvaZOW4mbrUqBRuM6nW7TuVctCiV0D9Z%2BELGhp8POSvZZWBv4LAeWDiymwSsvIHt1uHX7NDeUIATS6TZOUl6j6Z3GobIz%2F1nhZOY16ASeCpbQ4xvOO75AbwmrRWC2%2Fksh2uhFfF0Kq6yq2Q6BNdKy6Va3MVviCt1HZNgst%2BJtdBXyHP02w6%2FXfr2bNNdK5zO%2F8CF7i0&X-Amz-Signature=a6b65f5a30c648af599cde1e2fa67778e625989f9144d9f298febe61375563e1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLZN4YX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDlCjvsAngliztmqHohd4orhyK5nzG%2F34Vg68%2F9OGEagwIhAImOOWTM%2B3eELPveYEN332GS8VHMgS0VHlBwyN7VtfvVKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQZbbmMdxnkqOKjQYq3AMOiQ8hpsBWfXWmvoXBh0sC6O9qpR3ORtqxQOlZCbziKlt%2ByouTt7KYHzK9CeLCODZoLehPbLZN0rJLBEPOk7BWjEdPIzMK8ZyxWvW2ATPRgz4187hUHSEh50HDeLfIDn9%2F8B8Jl%2BTxyUhCqgHKxRVQvTwylsr1%2BHGfa3v4iJf4U4e%2BceRioSbH%2Fx%2FdWHowpKYEUffKcqsJUgND8SKbM8RMpxJ4YXu9hQLRvusDoKkkrSn6mjzRcShoORSRCEZqmQQ7oHBdwzGvILS0npIq%2FaBg48VaDYkqFcjFhyAQlgHsGxCj4TFS%2FpivRDQHBBn7gFZKD4%2FSdukJIWo2QAWQGlsRSyDu8Hk6T0gQ%2B%2FlFz8Etp32do7CKkNHM39bIHoAbHZdPH1cjmlapPFDdpDW12v8xEh0tkev%2Bky0jX8ZOj%2BLYDZSJExGzvsUQv%2FSksFa1Kir6AklAXdr4naqEAYJhjfqHDGL3avPjdpnZI0K9yjM9n5tQxx%2FMF%2BFX4vFOTe38LRrCLOaY7k4Xx5PHNBSz2DEDZIgYDLpcfuardKW6GaNes0KVts%2BvZEgVpHxgQ%2BkR78BGDaq8KyjQF%2FratTtE0uSpUAUJwEVS%2FWnVTNcheCvuj5WnT4RNKoHtZHmPgjCL7aPABjqkAf3yxrIs4jpc8cNe8AmyoBvaZOW4mbrUqBRuM6nW7TuVctCiV0D9Z%2BELGhp8POSvZZWBv4LAeWDiymwSsvIHt1uHX7NDeUIATS6TZOUl6j6Z3GobIz%2F1nhZOY16ASeCpbQ4xvOO75AbwmrRWC2%2Fksh2uhFfF0Kq6yq2Q6BNdKy6Va3MVviCt1HZNgst%2BJtdBXyHP02w6%2FXfr2bNNdK5zO%2F8CF7i0&X-Amz-Signature=cca504b48d7ad81d9718dd639ebc52699f0a80d6b019d71b8408d8283939054f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLZN4YX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDlCjvsAngliztmqHohd4orhyK5nzG%2F34Vg68%2F9OGEagwIhAImOOWTM%2B3eELPveYEN332GS8VHMgS0VHlBwyN7VtfvVKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQZbbmMdxnkqOKjQYq3AMOiQ8hpsBWfXWmvoXBh0sC6O9qpR3ORtqxQOlZCbziKlt%2ByouTt7KYHzK9CeLCODZoLehPbLZN0rJLBEPOk7BWjEdPIzMK8ZyxWvW2ATPRgz4187hUHSEh50HDeLfIDn9%2F8B8Jl%2BTxyUhCqgHKxRVQvTwylsr1%2BHGfa3v4iJf4U4e%2BceRioSbH%2Fx%2FdWHowpKYEUffKcqsJUgND8SKbM8RMpxJ4YXu9hQLRvusDoKkkrSn6mjzRcShoORSRCEZqmQQ7oHBdwzGvILS0npIq%2FaBg48VaDYkqFcjFhyAQlgHsGxCj4TFS%2FpivRDQHBBn7gFZKD4%2FSdukJIWo2QAWQGlsRSyDu8Hk6T0gQ%2B%2FlFz8Etp32do7CKkNHM39bIHoAbHZdPH1cjmlapPFDdpDW12v8xEh0tkev%2Bky0jX8ZOj%2BLYDZSJExGzvsUQv%2FSksFa1Kir6AklAXdr4naqEAYJhjfqHDGL3avPjdpnZI0K9yjM9n5tQxx%2FMF%2BFX4vFOTe38LRrCLOaY7k4Xx5PHNBSz2DEDZIgYDLpcfuardKW6GaNes0KVts%2BvZEgVpHxgQ%2BkR78BGDaq8KyjQF%2FratTtE0uSpUAUJwEVS%2FWnVTNcheCvuj5WnT4RNKoHtZHmPgjCL7aPABjqkAf3yxrIs4jpc8cNe8AmyoBvaZOW4mbrUqBRuM6nW7TuVctCiV0D9Z%2BELGhp8POSvZZWBv4LAeWDiymwSsvIHt1uHX7NDeUIATS6TZOUl6j6Z3GobIz%2F1nhZOY16ASeCpbQ4xvOO75AbwmrRWC2%2Fksh2uhFfF0Kq6yq2Q6BNdKy6Va3MVviCt1HZNgst%2BJtdBXyHP02w6%2FXfr2bNNdK5zO%2F8CF7i0&X-Amz-Signature=e55025d1ec160387b721a4f2acd4ed2c7e432f68b81dba65a7d552889452ae91&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLZN4YX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDlCjvsAngliztmqHohd4orhyK5nzG%2F34Vg68%2F9OGEagwIhAImOOWTM%2B3eELPveYEN332GS8VHMgS0VHlBwyN7VtfvVKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQZbbmMdxnkqOKjQYq3AMOiQ8hpsBWfXWmvoXBh0sC6O9qpR3ORtqxQOlZCbziKlt%2ByouTt7KYHzK9CeLCODZoLehPbLZN0rJLBEPOk7BWjEdPIzMK8ZyxWvW2ATPRgz4187hUHSEh50HDeLfIDn9%2F8B8Jl%2BTxyUhCqgHKxRVQvTwylsr1%2BHGfa3v4iJf4U4e%2BceRioSbH%2Fx%2FdWHowpKYEUffKcqsJUgND8SKbM8RMpxJ4YXu9hQLRvusDoKkkrSn6mjzRcShoORSRCEZqmQQ7oHBdwzGvILS0npIq%2FaBg48VaDYkqFcjFhyAQlgHsGxCj4TFS%2FpivRDQHBBn7gFZKD4%2FSdukJIWo2QAWQGlsRSyDu8Hk6T0gQ%2B%2FlFz8Etp32do7CKkNHM39bIHoAbHZdPH1cjmlapPFDdpDW12v8xEh0tkev%2Bky0jX8ZOj%2BLYDZSJExGzvsUQv%2FSksFa1Kir6AklAXdr4naqEAYJhjfqHDGL3avPjdpnZI0K9yjM9n5tQxx%2FMF%2BFX4vFOTe38LRrCLOaY7k4Xx5PHNBSz2DEDZIgYDLpcfuardKW6GaNes0KVts%2BvZEgVpHxgQ%2BkR78BGDaq8KyjQF%2FratTtE0uSpUAUJwEVS%2FWnVTNcheCvuj5WnT4RNKoHtZHmPgjCL7aPABjqkAf3yxrIs4jpc8cNe8AmyoBvaZOW4mbrUqBRuM6nW7TuVctCiV0D9Z%2BELGhp8POSvZZWBv4LAeWDiymwSsvIHt1uHX7NDeUIATS6TZOUl6j6Z3GobIz%2F1nhZOY16ASeCpbQ4xvOO75AbwmrRWC2%2Fksh2uhFfF0Kq6yq2Q6BNdKy6Va3MVviCt1HZNgst%2BJtdBXyHP02w6%2FXfr2bNNdK5zO%2F8CF7i0&X-Amz-Signature=b9c8564f85a174dadac2b428c1574fdd4fdd1b4d14c4add528591eb34b0e89e2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
