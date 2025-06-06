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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OCMQRSD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBSdQXotZXRzr%2BvGcPs%2FQ8Irta7E2rURrh5CHMGulRYgIgMk%2Bydx3uqxEEvTgM%2Fen4T%2BJIche24l%2FgugO1hgouH7Uq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDQYiDy6zeZ%2FOA1wLCrcA%2Fyn%2F3PxYYRd81gC40F3Ih4fORDc%2Bz8MytimH0eOMvX5yfHwXf6CU4q7h9HhaFVRt573Dv9v%2BudJxQtZdEUwigDx%2FQO97dyXzNjwpL3H87nNNaBPFQygegNZRvBgaRcrPPetso8FHzZon%2BRt%2BnTVCIom8nqFCWuVgDa5FtpDzHXjVwh4I5IyX25wFXO5Kj%2B%2Ft88K2QxRBQ6Ttz2uSh9HOPDkjdh%2F4vyFLS1rx%2BshayC8YvgUHQ9s8LmwmFbJWcYF4GooIWN43uGu%2FYkaUrwtVZPbHs7qATSXwfCvs%2FXdqaq1uMJKz9KYMzZ74kWRPfQqrESGQIP2JKABqpKct0%2FHj4tIrqSktQxDvwG15IAywDK%2FjVqMehPHvCywEshVWKY29V90VawMIPpxhyFzB5%2Bqg0vOrtyV9BHtl9PmJqEWTS29HJTtg6mZLGB2dvt%2B5DkZbE1Z2DQKC9Z5j3sXpSB3%2BOuaB9JQxvRRkKut4UuYjRgYFEK7NXw3EUKJF%2BXg9kcltMppyw1oig7EcKyVtcFJ2iElHE%2FKaGl8KwSQxoTv2fTi5uKL1Oryo3%2FwfmbVC7AYmiXEAKOKyslb%2BarZq2UTOgUmxmfxsPSGOYD66arzdirKklonfhBUN0%2B2tDOfMJnZjMIGOqUBVOyDZYqgqV%2BkNBUDSrPdUEX6kWEFb8fwc0%2FztQBKv3EYmk6d9r1C55otQozcxa%2BTJ4xSum0msMxhw9Wjm7pdahin%2FCG96RMPPVo2b9YbfYZLH6IakTANXwKzAeVYDk1ZZNDRPWuwP9DTs9uLJxy%2Bgq4ahP%2BOYt55NHAlP8P6TYnQJhm2WNx9oDGvVU3H9hfaDHo1%2FOwdCuDnXGD6%2Fj6ujj9AjWDA&X-Amz-Signature=aa9d4c024817e88939c844bfe2f2803cc097b24fbfb047db3de74686c328e7cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OCMQRSD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBSdQXotZXRzr%2BvGcPs%2FQ8Irta7E2rURrh5CHMGulRYgIgMk%2Bydx3uqxEEvTgM%2Fen4T%2BJIche24l%2FgugO1hgouH7Uq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDQYiDy6zeZ%2FOA1wLCrcA%2Fyn%2F3PxYYRd81gC40F3Ih4fORDc%2Bz8MytimH0eOMvX5yfHwXf6CU4q7h9HhaFVRt573Dv9v%2BudJxQtZdEUwigDx%2FQO97dyXzNjwpL3H87nNNaBPFQygegNZRvBgaRcrPPetso8FHzZon%2BRt%2BnTVCIom8nqFCWuVgDa5FtpDzHXjVwh4I5IyX25wFXO5Kj%2B%2Ft88K2QxRBQ6Ttz2uSh9HOPDkjdh%2F4vyFLS1rx%2BshayC8YvgUHQ9s8LmwmFbJWcYF4GooIWN43uGu%2FYkaUrwtVZPbHs7qATSXwfCvs%2FXdqaq1uMJKz9KYMzZ74kWRPfQqrESGQIP2JKABqpKct0%2FHj4tIrqSktQxDvwG15IAywDK%2FjVqMehPHvCywEshVWKY29V90VawMIPpxhyFzB5%2Bqg0vOrtyV9BHtl9PmJqEWTS29HJTtg6mZLGB2dvt%2B5DkZbE1Z2DQKC9Z5j3sXpSB3%2BOuaB9JQxvRRkKut4UuYjRgYFEK7NXw3EUKJF%2BXg9kcltMppyw1oig7EcKyVtcFJ2iElHE%2FKaGl8KwSQxoTv2fTi5uKL1Oryo3%2FwfmbVC7AYmiXEAKOKyslb%2BarZq2UTOgUmxmfxsPSGOYD66arzdirKklonfhBUN0%2B2tDOfMJnZjMIGOqUBVOyDZYqgqV%2BkNBUDSrPdUEX6kWEFb8fwc0%2FztQBKv3EYmk6d9r1C55otQozcxa%2BTJ4xSum0msMxhw9Wjm7pdahin%2FCG96RMPPVo2b9YbfYZLH6IakTANXwKzAeVYDk1ZZNDRPWuwP9DTs9uLJxy%2Bgq4ahP%2BOYt55NHAlP8P6TYnQJhm2WNx9oDGvVU3H9hfaDHo1%2FOwdCuDnXGD6%2Fj6ujj9AjWDA&X-Amz-Signature=24bc84142dc6ebf1d2bb97164963950649760079afe242f02b7f52f6b6dea632&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OCMQRSD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBSdQXotZXRzr%2BvGcPs%2FQ8Irta7E2rURrh5CHMGulRYgIgMk%2Bydx3uqxEEvTgM%2Fen4T%2BJIche24l%2FgugO1hgouH7Uq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDQYiDy6zeZ%2FOA1wLCrcA%2Fyn%2F3PxYYRd81gC40F3Ih4fORDc%2Bz8MytimH0eOMvX5yfHwXf6CU4q7h9HhaFVRt573Dv9v%2BudJxQtZdEUwigDx%2FQO97dyXzNjwpL3H87nNNaBPFQygegNZRvBgaRcrPPetso8FHzZon%2BRt%2BnTVCIom8nqFCWuVgDa5FtpDzHXjVwh4I5IyX25wFXO5Kj%2B%2Ft88K2QxRBQ6Ttz2uSh9HOPDkjdh%2F4vyFLS1rx%2BshayC8YvgUHQ9s8LmwmFbJWcYF4GooIWN43uGu%2FYkaUrwtVZPbHs7qATSXwfCvs%2FXdqaq1uMJKz9KYMzZ74kWRPfQqrESGQIP2JKABqpKct0%2FHj4tIrqSktQxDvwG15IAywDK%2FjVqMehPHvCywEshVWKY29V90VawMIPpxhyFzB5%2Bqg0vOrtyV9BHtl9PmJqEWTS29HJTtg6mZLGB2dvt%2B5DkZbE1Z2DQKC9Z5j3sXpSB3%2BOuaB9JQxvRRkKut4UuYjRgYFEK7NXw3EUKJF%2BXg9kcltMppyw1oig7EcKyVtcFJ2iElHE%2FKaGl8KwSQxoTv2fTi5uKL1Oryo3%2FwfmbVC7AYmiXEAKOKyslb%2BarZq2UTOgUmxmfxsPSGOYD66arzdirKklonfhBUN0%2B2tDOfMJnZjMIGOqUBVOyDZYqgqV%2BkNBUDSrPdUEX6kWEFb8fwc0%2FztQBKv3EYmk6d9r1C55otQozcxa%2BTJ4xSum0msMxhw9Wjm7pdahin%2FCG96RMPPVo2b9YbfYZLH6IakTANXwKzAeVYDk1ZZNDRPWuwP9DTs9uLJxy%2Bgq4ahP%2BOYt55NHAlP8P6TYnQJhm2WNx9oDGvVU3H9hfaDHo1%2FOwdCuDnXGD6%2Fj6ujj9AjWDA&X-Amz-Signature=6bc95d1f501c1523b4e349c1f57d105ed26b107648ea9c2b7152694e10b4a050&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OCMQRSD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBSdQXotZXRzr%2BvGcPs%2FQ8Irta7E2rURrh5CHMGulRYgIgMk%2Bydx3uqxEEvTgM%2Fen4T%2BJIche24l%2FgugO1hgouH7Uq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDQYiDy6zeZ%2FOA1wLCrcA%2Fyn%2F3PxYYRd81gC40F3Ih4fORDc%2Bz8MytimH0eOMvX5yfHwXf6CU4q7h9HhaFVRt573Dv9v%2BudJxQtZdEUwigDx%2FQO97dyXzNjwpL3H87nNNaBPFQygegNZRvBgaRcrPPetso8FHzZon%2BRt%2BnTVCIom8nqFCWuVgDa5FtpDzHXjVwh4I5IyX25wFXO5Kj%2B%2Ft88K2QxRBQ6Ttz2uSh9HOPDkjdh%2F4vyFLS1rx%2BshayC8YvgUHQ9s8LmwmFbJWcYF4GooIWN43uGu%2FYkaUrwtVZPbHs7qATSXwfCvs%2FXdqaq1uMJKz9KYMzZ74kWRPfQqrESGQIP2JKABqpKct0%2FHj4tIrqSktQxDvwG15IAywDK%2FjVqMehPHvCywEshVWKY29V90VawMIPpxhyFzB5%2Bqg0vOrtyV9BHtl9PmJqEWTS29HJTtg6mZLGB2dvt%2B5DkZbE1Z2DQKC9Z5j3sXpSB3%2BOuaB9JQxvRRkKut4UuYjRgYFEK7NXw3EUKJF%2BXg9kcltMppyw1oig7EcKyVtcFJ2iElHE%2FKaGl8KwSQxoTv2fTi5uKL1Oryo3%2FwfmbVC7AYmiXEAKOKyslb%2BarZq2UTOgUmxmfxsPSGOYD66arzdirKklonfhBUN0%2B2tDOfMJnZjMIGOqUBVOyDZYqgqV%2BkNBUDSrPdUEX6kWEFb8fwc0%2FztQBKv3EYmk6d9r1C55otQozcxa%2BTJ4xSum0msMxhw9Wjm7pdahin%2FCG96RMPPVo2b9YbfYZLH6IakTANXwKzAeVYDk1ZZNDRPWuwP9DTs9uLJxy%2Bgq4ahP%2BOYt55NHAlP8P6TYnQJhm2WNx9oDGvVU3H9hfaDHo1%2FOwdCuDnXGD6%2Fj6ujj9AjWDA&X-Amz-Signature=44e923a42c05a89ac93cbe9e631fa8b5ca27183336da6e6cc0aed32ee0709853&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OCMQRSD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBSdQXotZXRzr%2BvGcPs%2FQ8Irta7E2rURrh5CHMGulRYgIgMk%2Bydx3uqxEEvTgM%2Fen4T%2BJIche24l%2FgugO1hgouH7Uq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDQYiDy6zeZ%2FOA1wLCrcA%2Fyn%2F3PxYYRd81gC40F3Ih4fORDc%2Bz8MytimH0eOMvX5yfHwXf6CU4q7h9HhaFVRt573Dv9v%2BudJxQtZdEUwigDx%2FQO97dyXzNjwpL3H87nNNaBPFQygegNZRvBgaRcrPPetso8FHzZon%2BRt%2BnTVCIom8nqFCWuVgDa5FtpDzHXjVwh4I5IyX25wFXO5Kj%2B%2Ft88K2QxRBQ6Ttz2uSh9HOPDkjdh%2F4vyFLS1rx%2BshayC8YvgUHQ9s8LmwmFbJWcYF4GooIWN43uGu%2FYkaUrwtVZPbHs7qATSXwfCvs%2FXdqaq1uMJKz9KYMzZ74kWRPfQqrESGQIP2JKABqpKct0%2FHj4tIrqSktQxDvwG15IAywDK%2FjVqMehPHvCywEshVWKY29V90VawMIPpxhyFzB5%2Bqg0vOrtyV9BHtl9PmJqEWTS29HJTtg6mZLGB2dvt%2B5DkZbE1Z2DQKC9Z5j3sXpSB3%2BOuaB9JQxvRRkKut4UuYjRgYFEK7NXw3EUKJF%2BXg9kcltMppyw1oig7EcKyVtcFJ2iElHE%2FKaGl8KwSQxoTv2fTi5uKL1Oryo3%2FwfmbVC7AYmiXEAKOKyslb%2BarZq2UTOgUmxmfxsPSGOYD66arzdirKklonfhBUN0%2B2tDOfMJnZjMIGOqUBVOyDZYqgqV%2BkNBUDSrPdUEX6kWEFb8fwc0%2FztQBKv3EYmk6d9r1C55otQozcxa%2BTJ4xSum0msMxhw9Wjm7pdahin%2FCG96RMPPVo2b9YbfYZLH6IakTANXwKzAeVYDk1ZZNDRPWuwP9DTs9uLJxy%2Bgq4ahP%2BOYt55NHAlP8P6TYnQJhm2WNx9oDGvVU3H9hfaDHo1%2FOwdCuDnXGD6%2Fj6ujj9AjWDA&X-Amz-Signature=511ac7eaf06da0f6341e15a0cca952ecb1628a5a271f0287b68267e2264cc20b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OCMQRSD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBSdQXotZXRzr%2BvGcPs%2FQ8Irta7E2rURrh5CHMGulRYgIgMk%2Bydx3uqxEEvTgM%2Fen4T%2BJIche24l%2FgugO1hgouH7Uq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDQYiDy6zeZ%2FOA1wLCrcA%2Fyn%2F3PxYYRd81gC40F3Ih4fORDc%2Bz8MytimH0eOMvX5yfHwXf6CU4q7h9HhaFVRt573Dv9v%2BudJxQtZdEUwigDx%2FQO97dyXzNjwpL3H87nNNaBPFQygegNZRvBgaRcrPPetso8FHzZon%2BRt%2BnTVCIom8nqFCWuVgDa5FtpDzHXjVwh4I5IyX25wFXO5Kj%2B%2Ft88K2QxRBQ6Ttz2uSh9HOPDkjdh%2F4vyFLS1rx%2BshayC8YvgUHQ9s8LmwmFbJWcYF4GooIWN43uGu%2FYkaUrwtVZPbHs7qATSXwfCvs%2FXdqaq1uMJKz9KYMzZ74kWRPfQqrESGQIP2JKABqpKct0%2FHj4tIrqSktQxDvwG15IAywDK%2FjVqMehPHvCywEshVWKY29V90VawMIPpxhyFzB5%2Bqg0vOrtyV9BHtl9PmJqEWTS29HJTtg6mZLGB2dvt%2B5DkZbE1Z2DQKC9Z5j3sXpSB3%2BOuaB9JQxvRRkKut4UuYjRgYFEK7NXw3EUKJF%2BXg9kcltMppyw1oig7EcKyVtcFJ2iElHE%2FKaGl8KwSQxoTv2fTi5uKL1Oryo3%2FwfmbVC7AYmiXEAKOKyslb%2BarZq2UTOgUmxmfxsPSGOYD66arzdirKklonfhBUN0%2B2tDOfMJnZjMIGOqUBVOyDZYqgqV%2BkNBUDSrPdUEX6kWEFb8fwc0%2FztQBKv3EYmk6d9r1C55otQozcxa%2BTJ4xSum0msMxhw9Wjm7pdahin%2FCG96RMPPVo2b9YbfYZLH6IakTANXwKzAeVYDk1ZZNDRPWuwP9DTs9uLJxy%2Bgq4ahP%2BOYt55NHAlP8P6TYnQJhm2WNx9oDGvVU3H9hfaDHo1%2FOwdCuDnXGD6%2Fj6ujj9AjWDA&X-Amz-Signature=b8270c76ca04e6afb136600d0da466898e7e37c8bcc19edccedaf07f6aa48e59&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OCMQRSD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBSdQXotZXRzr%2BvGcPs%2FQ8Irta7E2rURrh5CHMGulRYgIgMk%2Bydx3uqxEEvTgM%2Fen4T%2BJIche24l%2FgugO1hgouH7Uq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDQYiDy6zeZ%2FOA1wLCrcA%2Fyn%2F3PxYYRd81gC40F3Ih4fORDc%2Bz8MytimH0eOMvX5yfHwXf6CU4q7h9HhaFVRt573Dv9v%2BudJxQtZdEUwigDx%2FQO97dyXzNjwpL3H87nNNaBPFQygegNZRvBgaRcrPPetso8FHzZon%2BRt%2BnTVCIom8nqFCWuVgDa5FtpDzHXjVwh4I5IyX25wFXO5Kj%2B%2Ft88K2QxRBQ6Ttz2uSh9HOPDkjdh%2F4vyFLS1rx%2BshayC8YvgUHQ9s8LmwmFbJWcYF4GooIWN43uGu%2FYkaUrwtVZPbHs7qATSXwfCvs%2FXdqaq1uMJKz9KYMzZ74kWRPfQqrESGQIP2JKABqpKct0%2FHj4tIrqSktQxDvwG15IAywDK%2FjVqMehPHvCywEshVWKY29V90VawMIPpxhyFzB5%2Bqg0vOrtyV9BHtl9PmJqEWTS29HJTtg6mZLGB2dvt%2B5DkZbE1Z2DQKC9Z5j3sXpSB3%2BOuaB9JQxvRRkKut4UuYjRgYFEK7NXw3EUKJF%2BXg9kcltMppyw1oig7EcKyVtcFJ2iElHE%2FKaGl8KwSQxoTv2fTi5uKL1Oryo3%2FwfmbVC7AYmiXEAKOKyslb%2BarZq2UTOgUmxmfxsPSGOYD66arzdirKklonfhBUN0%2B2tDOfMJnZjMIGOqUBVOyDZYqgqV%2BkNBUDSrPdUEX6kWEFb8fwc0%2FztQBKv3EYmk6d9r1C55otQozcxa%2BTJ4xSum0msMxhw9Wjm7pdahin%2FCG96RMPPVo2b9YbfYZLH6IakTANXwKzAeVYDk1ZZNDRPWuwP9DTs9uLJxy%2Bgq4ahP%2BOYt55NHAlP8P6TYnQJhm2WNx9oDGvVU3H9hfaDHo1%2FOwdCuDnXGD6%2Fj6ujj9AjWDA&X-Amz-Signature=e0f7c925e854da5dc86d31398880d90375172c4fb236b75f8ccf8c8c580a0bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
