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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF6MZUB5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClrgnzErPkOKDVQUZP8Nx%2BcSrnH34Y2aLTqwahZM3UzAiAOx8drSjbUSDrBRNgQz94W34sUFUq0%2BJgsy%2BOYB7vsjSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4RIvIdIn6MEi0EAJKtwD5ddGlZ4UjHTOldseqrI3rBgpPTQHqYTXOJjdNWXO6khdWeh%2FpyUXsQzxuGxpFzye%2BmORBw6Nbhy%2BVL7WhKL6zuGBj4OZ6t%2BNCdEyxK5RedBf2uWZoJBMhheYP67Mi4k6OJVJOJdlQlD4x3eP2lNxOvOL1dELoFBlCoxTYqYoEZb8vIm3M%2BdqQtPxiOSqJLOiUVzfdQOb%2FdNXugM5wJor82862wIhsuQJkeFIWA0IbQXWYHkCpPOcYKKgBGbfacJsPBv9qWowQNzK8DwhRdyvzBvzhU9x7QyG%2BsV1D43BjRUOhUofG%2Fa0YfQFa1YNn8qWuJMLI6xCpWCQ0u5G9B2O7dqAH40bNZUXH4YNv5BJ7SwDvP%2FoMF1fnzcDogV8IsS3ZTG9IkTNCh8J6oK1B738d6tWEui7vIQBvyzsWBZCps4eKfJDI2j66pasu4oW7zw8PMBwSMo%2BakiI3a0qOOFlnwQvW0LGJqyNJUdXEQsSgpbS9LNcmFZ9tDodIuRkwhAZEFZp1YHKEg6kqXq4s5RjqCJon5B205jIRz8zU%2FUyx8WfRX4WZLU37eTlETjMDz%2BTafsBuO8QwssV3Ih38sfGyMkrLuLp9DJN6ZweLLYihZupl1V41HQWcwmRvzsw2qm9wwY6pgFXjR3EihZmlLzEz8sY32qcJkFEwDSKB4EtL0c3huynSC%2FqFFNPFAQDkt2B4oZ5aTgBbG0%2BsLguJ5GCdmgnkYasWooKC5I3SAk43OliDcTLdHkm06L5%2B5hPES4%2BaI6p%2BFGLXWivf3zU%2F33CmBLZKEIz67eFlDcq58uoKAQvOh%2BjdT61WCDWnZAyNwN3HJuXI%2Bx8CtMJWk6bTInAhPa7s8%2FFkIvkHbs8&X-Amz-Signature=e180b702a7943626be374f92cfb4c79ae4cbda66ecdf43299ac1c7ecf4fbb8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF6MZUB5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClrgnzErPkOKDVQUZP8Nx%2BcSrnH34Y2aLTqwahZM3UzAiAOx8drSjbUSDrBRNgQz94W34sUFUq0%2BJgsy%2BOYB7vsjSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4RIvIdIn6MEi0EAJKtwD5ddGlZ4UjHTOldseqrI3rBgpPTQHqYTXOJjdNWXO6khdWeh%2FpyUXsQzxuGxpFzye%2BmORBw6Nbhy%2BVL7WhKL6zuGBj4OZ6t%2BNCdEyxK5RedBf2uWZoJBMhheYP67Mi4k6OJVJOJdlQlD4x3eP2lNxOvOL1dELoFBlCoxTYqYoEZb8vIm3M%2BdqQtPxiOSqJLOiUVzfdQOb%2FdNXugM5wJor82862wIhsuQJkeFIWA0IbQXWYHkCpPOcYKKgBGbfacJsPBv9qWowQNzK8DwhRdyvzBvzhU9x7QyG%2BsV1D43BjRUOhUofG%2Fa0YfQFa1YNn8qWuJMLI6xCpWCQ0u5G9B2O7dqAH40bNZUXH4YNv5BJ7SwDvP%2FoMF1fnzcDogV8IsS3ZTG9IkTNCh8J6oK1B738d6tWEui7vIQBvyzsWBZCps4eKfJDI2j66pasu4oW7zw8PMBwSMo%2BakiI3a0qOOFlnwQvW0LGJqyNJUdXEQsSgpbS9LNcmFZ9tDodIuRkwhAZEFZp1YHKEg6kqXq4s5RjqCJon5B205jIRz8zU%2FUyx8WfRX4WZLU37eTlETjMDz%2BTafsBuO8QwssV3Ih38sfGyMkrLuLp9DJN6ZweLLYihZupl1V41HQWcwmRvzsw2qm9wwY6pgFXjR3EihZmlLzEz8sY32qcJkFEwDSKB4EtL0c3huynSC%2FqFFNPFAQDkt2B4oZ5aTgBbG0%2BsLguJ5GCdmgnkYasWooKC5I3SAk43OliDcTLdHkm06L5%2B5hPES4%2BaI6p%2BFGLXWivf3zU%2F33CmBLZKEIz67eFlDcq58uoKAQvOh%2BjdT61WCDWnZAyNwN3HJuXI%2Bx8CtMJWk6bTInAhPa7s8%2FFkIvkHbs8&X-Amz-Signature=152e144bc4a29d047f0ee3da1f258373e2cb22d50af4936846c45707c238c27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF6MZUB5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClrgnzErPkOKDVQUZP8Nx%2BcSrnH34Y2aLTqwahZM3UzAiAOx8drSjbUSDrBRNgQz94W34sUFUq0%2BJgsy%2BOYB7vsjSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4RIvIdIn6MEi0EAJKtwD5ddGlZ4UjHTOldseqrI3rBgpPTQHqYTXOJjdNWXO6khdWeh%2FpyUXsQzxuGxpFzye%2BmORBw6Nbhy%2BVL7WhKL6zuGBj4OZ6t%2BNCdEyxK5RedBf2uWZoJBMhheYP67Mi4k6OJVJOJdlQlD4x3eP2lNxOvOL1dELoFBlCoxTYqYoEZb8vIm3M%2BdqQtPxiOSqJLOiUVzfdQOb%2FdNXugM5wJor82862wIhsuQJkeFIWA0IbQXWYHkCpPOcYKKgBGbfacJsPBv9qWowQNzK8DwhRdyvzBvzhU9x7QyG%2BsV1D43BjRUOhUofG%2Fa0YfQFa1YNn8qWuJMLI6xCpWCQ0u5G9B2O7dqAH40bNZUXH4YNv5BJ7SwDvP%2FoMF1fnzcDogV8IsS3ZTG9IkTNCh8J6oK1B738d6tWEui7vIQBvyzsWBZCps4eKfJDI2j66pasu4oW7zw8PMBwSMo%2BakiI3a0qOOFlnwQvW0LGJqyNJUdXEQsSgpbS9LNcmFZ9tDodIuRkwhAZEFZp1YHKEg6kqXq4s5RjqCJon5B205jIRz8zU%2FUyx8WfRX4WZLU37eTlETjMDz%2BTafsBuO8QwssV3Ih38sfGyMkrLuLp9DJN6ZweLLYihZupl1V41HQWcwmRvzsw2qm9wwY6pgFXjR3EihZmlLzEz8sY32qcJkFEwDSKB4EtL0c3huynSC%2FqFFNPFAQDkt2B4oZ5aTgBbG0%2BsLguJ5GCdmgnkYasWooKC5I3SAk43OliDcTLdHkm06L5%2B5hPES4%2BaI6p%2BFGLXWivf3zU%2F33CmBLZKEIz67eFlDcq58uoKAQvOh%2BjdT61WCDWnZAyNwN3HJuXI%2Bx8CtMJWk6bTInAhPa7s8%2FFkIvkHbs8&X-Amz-Signature=83100514a0526cfcbddc4381afd0b059b1a3b2a7812512cff8664e34ad241e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF6MZUB5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClrgnzErPkOKDVQUZP8Nx%2BcSrnH34Y2aLTqwahZM3UzAiAOx8drSjbUSDrBRNgQz94W34sUFUq0%2BJgsy%2BOYB7vsjSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4RIvIdIn6MEi0EAJKtwD5ddGlZ4UjHTOldseqrI3rBgpPTQHqYTXOJjdNWXO6khdWeh%2FpyUXsQzxuGxpFzye%2BmORBw6Nbhy%2BVL7WhKL6zuGBj4OZ6t%2BNCdEyxK5RedBf2uWZoJBMhheYP67Mi4k6OJVJOJdlQlD4x3eP2lNxOvOL1dELoFBlCoxTYqYoEZb8vIm3M%2BdqQtPxiOSqJLOiUVzfdQOb%2FdNXugM5wJor82862wIhsuQJkeFIWA0IbQXWYHkCpPOcYKKgBGbfacJsPBv9qWowQNzK8DwhRdyvzBvzhU9x7QyG%2BsV1D43BjRUOhUofG%2Fa0YfQFa1YNn8qWuJMLI6xCpWCQ0u5G9B2O7dqAH40bNZUXH4YNv5BJ7SwDvP%2FoMF1fnzcDogV8IsS3ZTG9IkTNCh8J6oK1B738d6tWEui7vIQBvyzsWBZCps4eKfJDI2j66pasu4oW7zw8PMBwSMo%2BakiI3a0qOOFlnwQvW0LGJqyNJUdXEQsSgpbS9LNcmFZ9tDodIuRkwhAZEFZp1YHKEg6kqXq4s5RjqCJon5B205jIRz8zU%2FUyx8WfRX4WZLU37eTlETjMDz%2BTafsBuO8QwssV3Ih38sfGyMkrLuLp9DJN6ZweLLYihZupl1V41HQWcwmRvzsw2qm9wwY6pgFXjR3EihZmlLzEz8sY32qcJkFEwDSKB4EtL0c3huynSC%2FqFFNPFAQDkt2B4oZ5aTgBbG0%2BsLguJ5GCdmgnkYasWooKC5I3SAk43OliDcTLdHkm06L5%2B5hPES4%2BaI6p%2BFGLXWivf3zU%2F33CmBLZKEIz67eFlDcq58uoKAQvOh%2BjdT61WCDWnZAyNwN3HJuXI%2Bx8CtMJWk6bTInAhPa7s8%2FFkIvkHbs8&X-Amz-Signature=6e0ce0c76ef3ebf161e9a6eba6911d7c636e3afdbfa810549c8e34bdaa1b111c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF6MZUB5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClrgnzErPkOKDVQUZP8Nx%2BcSrnH34Y2aLTqwahZM3UzAiAOx8drSjbUSDrBRNgQz94W34sUFUq0%2BJgsy%2BOYB7vsjSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4RIvIdIn6MEi0EAJKtwD5ddGlZ4UjHTOldseqrI3rBgpPTQHqYTXOJjdNWXO6khdWeh%2FpyUXsQzxuGxpFzye%2BmORBw6Nbhy%2BVL7WhKL6zuGBj4OZ6t%2BNCdEyxK5RedBf2uWZoJBMhheYP67Mi4k6OJVJOJdlQlD4x3eP2lNxOvOL1dELoFBlCoxTYqYoEZb8vIm3M%2BdqQtPxiOSqJLOiUVzfdQOb%2FdNXugM5wJor82862wIhsuQJkeFIWA0IbQXWYHkCpPOcYKKgBGbfacJsPBv9qWowQNzK8DwhRdyvzBvzhU9x7QyG%2BsV1D43BjRUOhUofG%2Fa0YfQFa1YNn8qWuJMLI6xCpWCQ0u5G9B2O7dqAH40bNZUXH4YNv5BJ7SwDvP%2FoMF1fnzcDogV8IsS3ZTG9IkTNCh8J6oK1B738d6tWEui7vIQBvyzsWBZCps4eKfJDI2j66pasu4oW7zw8PMBwSMo%2BakiI3a0qOOFlnwQvW0LGJqyNJUdXEQsSgpbS9LNcmFZ9tDodIuRkwhAZEFZp1YHKEg6kqXq4s5RjqCJon5B205jIRz8zU%2FUyx8WfRX4WZLU37eTlETjMDz%2BTafsBuO8QwssV3Ih38sfGyMkrLuLp9DJN6ZweLLYihZupl1V41HQWcwmRvzsw2qm9wwY6pgFXjR3EihZmlLzEz8sY32qcJkFEwDSKB4EtL0c3huynSC%2FqFFNPFAQDkt2B4oZ5aTgBbG0%2BsLguJ5GCdmgnkYasWooKC5I3SAk43OliDcTLdHkm06L5%2B5hPES4%2BaI6p%2BFGLXWivf3zU%2F33CmBLZKEIz67eFlDcq58uoKAQvOh%2BjdT61WCDWnZAyNwN3HJuXI%2Bx8CtMJWk6bTInAhPa7s8%2FFkIvkHbs8&X-Amz-Signature=0b7c602617a37774569d9554e4b7f56e6c4d4e7482ed038cca1a4b82a3e23eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF6MZUB5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClrgnzErPkOKDVQUZP8Nx%2BcSrnH34Y2aLTqwahZM3UzAiAOx8drSjbUSDrBRNgQz94W34sUFUq0%2BJgsy%2BOYB7vsjSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4RIvIdIn6MEi0EAJKtwD5ddGlZ4UjHTOldseqrI3rBgpPTQHqYTXOJjdNWXO6khdWeh%2FpyUXsQzxuGxpFzye%2BmORBw6Nbhy%2BVL7WhKL6zuGBj4OZ6t%2BNCdEyxK5RedBf2uWZoJBMhheYP67Mi4k6OJVJOJdlQlD4x3eP2lNxOvOL1dELoFBlCoxTYqYoEZb8vIm3M%2BdqQtPxiOSqJLOiUVzfdQOb%2FdNXugM5wJor82862wIhsuQJkeFIWA0IbQXWYHkCpPOcYKKgBGbfacJsPBv9qWowQNzK8DwhRdyvzBvzhU9x7QyG%2BsV1D43BjRUOhUofG%2Fa0YfQFa1YNn8qWuJMLI6xCpWCQ0u5G9B2O7dqAH40bNZUXH4YNv5BJ7SwDvP%2FoMF1fnzcDogV8IsS3ZTG9IkTNCh8J6oK1B738d6tWEui7vIQBvyzsWBZCps4eKfJDI2j66pasu4oW7zw8PMBwSMo%2BakiI3a0qOOFlnwQvW0LGJqyNJUdXEQsSgpbS9LNcmFZ9tDodIuRkwhAZEFZp1YHKEg6kqXq4s5RjqCJon5B205jIRz8zU%2FUyx8WfRX4WZLU37eTlETjMDz%2BTafsBuO8QwssV3Ih38sfGyMkrLuLp9DJN6ZweLLYihZupl1V41HQWcwmRvzsw2qm9wwY6pgFXjR3EihZmlLzEz8sY32qcJkFEwDSKB4EtL0c3huynSC%2FqFFNPFAQDkt2B4oZ5aTgBbG0%2BsLguJ5GCdmgnkYasWooKC5I3SAk43OliDcTLdHkm06L5%2B5hPES4%2BaI6p%2BFGLXWivf3zU%2F33CmBLZKEIz67eFlDcq58uoKAQvOh%2BjdT61WCDWnZAyNwN3HJuXI%2Bx8CtMJWk6bTInAhPa7s8%2FFkIvkHbs8&X-Amz-Signature=999b9655e3c7756024e4e8810b344db280c9511ce74ade077e51f47aac54b3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF6MZUB5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClrgnzErPkOKDVQUZP8Nx%2BcSrnH34Y2aLTqwahZM3UzAiAOx8drSjbUSDrBRNgQz94W34sUFUq0%2BJgsy%2BOYB7vsjSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4RIvIdIn6MEi0EAJKtwD5ddGlZ4UjHTOldseqrI3rBgpPTQHqYTXOJjdNWXO6khdWeh%2FpyUXsQzxuGxpFzye%2BmORBw6Nbhy%2BVL7WhKL6zuGBj4OZ6t%2BNCdEyxK5RedBf2uWZoJBMhheYP67Mi4k6OJVJOJdlQlD4x3eP2lNxOvOL1dELoFBlCoxTYqYoEZb8vIm3M%2BdqQtPxiOSqJLOiUVzfdQOb%2FdNXugM5wJor82862wIhsuQJkeFIWA0IbQXWYHkCpPOcYKKgBGbfacJsPBv9qWowQNzK8DwhRdyvzBvzhU9x7QyG%2BsV1D43BjRUOhUofG%2Fa0YfQFa1YNn8qWuJMLI6xCpWCQ0u5G9B2O7dqAH40bNZUXH4YNv5BJ7SwDvP%2FoMF1fnzcDogV8IsS3ZTG9IkTNCh8J6oK1B738d6tWEui7vIQBvyzsWBZCps4eKfJDI2j66pasu4oW7zw8PMBwSMo%2BakiI3a0qOOFlnwQvW0LGJqyNJUdXEQsSgpbS9LNcmFZ9tDodIuRkwhAZEFZp1YHKEg6kqXq4s5RjqCJon5B205jIRz8zU%2FUyx8WfRX4WZLU37eTlETjMDz%2BTafsBuO8QwssV3Ih38sfGyMkrLuLp9DJN6ZweLLYihZupl1V41HQWcwmRvzsw2qm9wwY6pgFXjR3EihZmlLzEz8sY32qcJkFEwDSKB4EtL0c3huynSC%2FqFFNPFAQDkt2B4oZ5aTgBbG0%2BsLguJ5GCdmgnkYasWooKC5I3SAk43OliDcTLdHkm06L5%2B5hPES4%2BaI6p%2BFGLXWivf3zU%2F33CmBLZKEIz67eFlDcq58uoKAQvOh%2BjdT61WCDWnZAyNwN3HJuXI%2Bx8CtMJWk6bTInAhPa7s8%2FFkIvkHbs8&X-Amz-Signature=8510f15bef8900d35bedb76063e6d333ac7838b434cbda4dbd98aa73abcb5f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
