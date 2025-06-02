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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35ZDBZH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDIg2U9MxMJZArw8Ie9bPoNN6RzmA45NYpTnDZqzCpVJwIgKtZc1RmZVWg86KhYgNDJeMEW9YlE2XconULDnYy0axoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiYSabrkzaOn4taBCrcA9zwmJRBenO3WgKMmq3kT45dcQyAUxVflSLICfMRxk277TZsmme8G%2F45qzk5WepK4X0YfbAYuhoJA2SEvza4m%2B9eub6Fjz7Uyl98XHPBIfuZltDHfRZOwpg00iSBAjRotiKInx7rqJgUNJuv1jXStVuO4aIl4W78P1XvlCxWT95dccQLPDGrOQcRSb5Ww2ccsL9TJO0mlOOqikb4TmC9zruqd0wsxrYWh%2Fc8G75vEN9GdBqDrrv3HbiAGf2iJs4KxgCITUnKxy%2F2sCu%2BNxga1TzSU%2F0SR1csVtnyOoMQYnJKOZL6yYiRRohRoZr0fYB4BUG3GzSSiu%2BODepzDyRxCBLaS1RPQZwTmvBdj24TRbM20eHhP8Z6kpWlWAlIixVpWUmU1HkbXNe%2BchV9CavSgr0phsfABGL9eZVQb8jpwpk3myRBBAEO%2BnvbzlpEowFrx7jMQlCGV99YO%2BSOEAaN2F606grObk6GWrJUq0WWljlVs6pryODGH9nbQDVUJCR9vhHGycLQ%2BEimS1LSu3Xk9n31HE6pquYJdD4uBk8SqUp4nGMvx8PZRdHuww%2Fi6YHxEDZpr9wFV5CPiCbf2y%2F0Wrz0%2BhMSJ2cgIQLUflMyZv6cd20TL0pMzg75dn9vMIb19cEGOqUBKABQCZRn1Cz7JS6i3iidRb7vYYJzZ1tDgqudMPSIzMUlRo1Tvoih1ZJjBggNFyG1IwGYZVryoGTHveEoAmOkba9%2Fzisnt%2F%2BaUNFQV6DB0i2W%2FWfIjvxGJyYPXu8Yne2TSaeDOD%2F9RwsRi9N9pU9FqHzTE3MOLG8iDYLMmlwsBCcYJJSOjO3iS8qyVqd2v7V9QlIuw1%2FnMYA6nGaawJZbwoc%2F487n&X-Amz-Signature=794e89cc2785da869f9ef45f2f631974785b5bb11b9c78ad33be6db647fb790f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35ZDBZH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDIg2U9MxMJZArw8Ie9bPoNN6RzmA45NYpTnDZqzCpVJwIgKtZc1RmZVWg86KhYgNDJeMEW9YlE2XconULDnYy0axoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiYSabrkzaOn4taBCrcA9zwmJRBenO3WgKMmq3kT45dcQyAUxVflSLICfMRxk277TZsmme8G%2F45qzk5WepK4X0YfbAYuhoJA2SEvza4m%2B9eub6Fjz7Uyl98XHPBIfuZltDHfRZOwpg00iSBAjRotiKInx7rqJgUNJuv1jXStVuO4aIl4W78P1XvlCxWT95dccQLPDGrOQcRSb5Ww2ccsL9TJO0mlOOqikb4TmC9zruqd0wsxrYWh%2Fc8G75vEN9GdBqDrrv3HbiAGf2iJs4KxgCITUnKxy%2F2sCu%2BNxga1TzSU%2F0SR1csVtnyOoMQYnJKOZL6yYiRRohRoZr0fYB4BUG3GzSSiu%2BODepzDyRxCBLaS1RPQZwTmvBdj24TRbM20eHhP8Z6kpWlWAlIixVpWUmU1HkbXNe%2BchV9CavSgr0phsfABGL9eZVQb8jpwpk3myRBBAEO%2BnvbzlpEowFrx7jMQlCGV99YO%2BSOEAaN2F606grObk6GWrJUq0WWljlVs6pryODGH9nbQDVUJCR9vhHGycLQ%2BEimS1LSu3Xk9n31HE6pquYJdD4uBk8SqUp4nGMvx8PZRdHuww%2Fi6YHxEDZpr9wFV5CPiCbf2y%2F0Wrz0%2BhMSJ2cgIQLUflMyZv6cd20TL0pMzg75dn9vMIb19cEGOqUBKABQCZRn1Cz7JS6i3iidRb7vYYJzZ1tDgqudMPSIzMUlRo1Tvoih1ZJjBggNFyG1IwGYZVryoGTHveEoAmOkba9%2Fzisnt%2F%2BaUNFQV6DB0i2W%2FWfIjvxGJyYPXu8Yne2TSaeDOD%2F9RwsRi9N9pU9FqHzTE3MOLG8iDYLMmlwsBCcYJJSOjO3iS8qyVqd2v7V9QlIuw1%2FnMYA6nGaawJZbwoc%2F487n&X-Amz-Signature=0fb29b7761e370f8f9c159d403b1bc96b7fe4c310b93963daf5c83e23faa43bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35ZDBZH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDIg2U9MxMJZArw8Ie9bPoNN6RzmA45NYpTnDZqzCpVJwIgKtZc1RmZVWg86KhYgNDJeMEW9YlE2XconULDnYy0axoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiYSabrkzaOn4taBCrcA9zwmJRBenO3WgKMmq3kT45dcQyAUxVflSLICfMRxk277TZsmme8G%2F45qzk5WepK4X0YfbAYuhoJA2SEvza4m%2B9eub6Fjz7Uyl98XHPBIfuZltDHfRZOwpg00iSBAjRotiKInx7rqJgUNJuv1jXStVuO4aIl4W78P1XvlCxWT95dccQLPDGrOQcRSb5Ww2ccsL9TJO0mlOOqikb4TmC9zruqd0wsxrYWh%2Fc8G75vEN9GdBqDrrv3HbiAGf2iJs4KxgCITUnKxy%2F2sCu%2BNxga1TzSU%2F0SR1csVtnyOoMQYnJKOZL6yYiRRohRoZr0fYB4BUG3GzSSiu%2BODepzDyRxCBLaS1RPQZwTmvBdj24TRbM20eHhP8Z6kpWlWAlIixVpWUmU1HkbXNe%2BchV9CavSgr0phsfABGL9eZVQb8jpwpk3myRBBAEO%2BnvbzlpEowFrx7jMQlCGV99YO%2BSOEAaN2F606grObk6GWrJUq0WWljlVs6pryODGH9nbQDVUJCR9vhHGycLQ%2BEimS1LSu3Xk9n31HE6pquYJdD4uBk8SqUp4nGMvx8PZRdHuww%2Fi6YHxEDZpr9wFV5CPiCbf2y%2F0Wrz0%2BhMSJ2cgIQLUflMyZv6cd20TL0pMzg75dn9vMIb19cEGOqUBKABQCZRn1Cz7JS6i3iidRb7vYYJzZ1tDgqudMPSIzMUlRo1Tvoih1ZJjBggNFyG1IwGYZVryoGTHveEoAmOkba9%2Fzisnt%2F%2BaUNFQV6DB0i2W%2FWfIjvxGJyYPXu8Yne2TSaeDOD%2F9RwsRi9N9pU9FqHzTE3MOLG8iDYLMmlwsBCcYJJSOjO3iS8qyVqd2v7V9QlIuw1%2FnMYA6nGaawJZbwoc%2F487n&X-Amz-Signature=ca81a28df80b3e45f640a783e2b35224f8f56756828f2519a7d7f6cb49557d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35ZDBZH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDIg2U9MxMJZArw8Ie9bPoNN6RzmA45NYpTnDZqzCpVJwIgKtZc1RmZVWg86KhYgNDJeMEW9YlE2XconULDnYy0axoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiYSabrkzaOn4taBCrcA9zwmJRBenO3WgKMmq3kT45dcQyAUxVflSLICfMRxk277TZsmme8G%2F45qzk5WepK4X0YfbAYuhoJA2SEvza4m%2B9eub6Fjz7Uyl98XHPBIfuZltDHfRZOwpg00iSBAjRotiKInx7rqJgUNJuv1jXStVuO4aIl4W78P1XvlCxWT95dccQLPDGrOQcRSb5Ww2ccsL9TJO0mlOOqikb4TmC9zruqd0wsxrYWh%2Fc8G75vEN9GdBqDrrv3HbiAGf2iJs4KxgCITUnKxy%2F2sCu%2BNxga1TzSU%2F0SR1csVtnyOoMQYnJKOZL6yYiRRohRoZr0fYB4BUG3GzSSiu%2BODepzDyRxCBLaS1RPQZwTmvBdj24TRbM20eHhP8Z6kpWlWAlIixVpWUmU1HkbXNe%2BchV9CavSgr0phsfABGL9eZVQb8jpwpk3myRBBAEO%2BnvbzlpEowFrx7jMQlCGV99YO%2BSOEAaN2F606grObk6GWrJUq0WWljlVs6pryODGH9nbQDVUJCR9vhHGycLQ%2BEimS1LSu3Xk9n31HE6pquYJdD4uBk8SqUp4nGMvx8PZRdHuww%2Fi6YHxEDZpr9wFV5CPiCbf2y%2F0Wrz0%2BhMSJ2cgIQLUflMyZv6cd20TL0pMzg75dn9vMIb19cEGOqUBKABQCZRn1Cz7JS6i3iidRb7vYYJzZ1tDgqudMPSIzMUlRo1Tvoih1ZJjBggNFyG1IwGYZVryoGTHveEoAmOkba9%2Fzisnt%2F%2BaUNFQV6DB0i2W%2FWfIjvxGJyYPXu8Yne2TSaeDOD%2F9RwsRi9N9pU9FqHzTE3MOLG8iDYLMmlwsBCcYJJSOjO3iS8qyVqd2v7V9QlIuw1%2FnMYA6nGaawJZbwoc%2F487n&X-Amz-Signature=fc485b5df87ed34823a1439dd8d016160d4dcc108c152d8e3eaf2ddb59987bee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35ZDBZH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDIg2U9MxMJZArw8Ie9bPoNN6RzmA45NYpTnDZqzCpVJwIgKtZc1RmZVWg86KhYgNDJeMEW9YlE2XconULDnYy0axoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiYSabrkzaOn4taBCrcA9zwmJRBenO3WgKMmq3kT45dcQyAUxVflSLICfMRxk277TZsmme8G%2F45qzk5WepK4X0YfbAYuhoJA2SEvza4m%2B9eub6Fjz7Uyl98XHPBIfuZltDHfRZOwpg00iSBAjRotiKInx7rqJgUNJuv1jXStVuO4aIl4W78P1XvlCxWT95dccQLPDGrOQcRSb5Ww2ccsL9TJO0mlOOqikb4TmC9zruqd0wsxrYWh%2Fc8G75vEN9GdBqDrrv3HbiAGf2iJs4KxgCITUnKxy%2F2sCu%2BNxga1TzSU%2F0SR1csVtnyOoMQYnJKOZL6yYiRRohRoZr0fYB4BUG3GzSSiu%2BODepzDyRxCBLaS1RPQZwTmvBdj24TRbM20eHhP8Z6kpWlWAlIixVpWUmU1HkbXNe%2BchV9CavSgr0phsfABGL9eZVQb8jpwpk3myRBBAEO%2BnvbzlpEowFrx7jMQlCGV99YO%2BSOEAaN2F606grObk6GWrJUq0WWljlVs6pryODGH9nbQDVUJCR9vhHGycLQ%2BEimS1LSu3Xk9n31HE6pquYJdD4uBk8SqUp4nGMvx8PZRdHuww%2Fi6YHxEDZpr9wFV5CPiCbf2y%2F0Wrz0%2BhMSJ2cgIQLUflMyZv6cd20TL0pMzg75dn9vMIb19cEGOqUBKABQCZRn1Cz7JS6i3iidRb7vYYJzZ1tDgqudMPSIzMUlRo1Tvoih1ZJjBggNFyG1IwGYZVryoGTHveEoAmOkba9%2Fzisnt%2F%2BaUNFQV6DB0i2W%2FWfIjvxGJyYPXu8Yne2TSaeDOD%2F9RwsRi9N9pU9FqHzTE3MOLG8iDYLMmlwsBCcYJJSOjO3iS8qyVqd2v7V9QlIuw1%2FnMYA6nGaawJZbwoc%2F487n&X-Amz-Signature=1fbac81715050d95a1cb8b22eb18b3469a4215b595fea1d89622afeb5e0e1bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35ZDBZH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDIg2U9MxMJZArw8Ie9bPoNN6RzmA45NYpTnDZqzCpVJwIgKtZc1RmZVWg86KhYgNDJeMEW9YlE2XconULDnYy0axoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiYSabrkzaOn4taBCrcA9zwmJRBenO3WgKMmq3kT45dcQyAUxVflSLICfMRxk277TZsmme8G%2F45qzk5WepK4X0YfbAYuhoJA2SEvza4m%2B9eub6Fjz7Uyl98XHPBIfuZltDHfRZOwpg00iSBAjRotiKInx7rqJgUNJuv1jXStVuO4aIl4W78P1XvlCxWT95dccQLPDGrOQcRSb5Ww2ccsL9TJO0mlOOqikb4TmC9zruqd0wsxrYWh%2Fc8G75vEN9GdBqDrrv3HbiAGf2iJs4KxgCITUnKxy%2F2sCu%2BNxga1TzSU%2F0SR1csVtnyOoMQYnJKOZL6yYiRRohRoZr0fYB4BUG3GzSSiu%2BODepzDyRxCBLaS1RPQZwTmvBdj24TRbM20eHhP8Z6kpWlWAlIixVpWUmU1HkbXNe%2BchV9CavSgr0phsfABGL9eZVQb8jpwpk3myRBBAEO%2BnvbzlpEowFrx7jMQlCGV99YO%2BSOEAaN2F606grObk6GWrJUq0WWljlVs6pryODGH9nbQDVUJCR9vhHGycLQ%2BEimS1LSu3Xk9n31HE6pquYJdD4uBk8SqUp4nGMvx8PZRdHuww%2Fi6YHxEDZpr9wFV5CPiCbf2y%2F0Wrz0%2BhMSJ2cgIQLUflMyZv6cd20TL0pMzg75dn9vMIb19cEGOqUBKABQCZRn1Cz7JS6i3iidRb7vYYJzZ1tDgqudMPSIzMUlRo1Tvoih1ZJjBggNFyG1IwGYZVryoGTHveEoAmOkba9%2Fzisnt%2F%2BaUNFQV6DB0i2W%2FWfIjvxGJyYPXu8Yne2TSaeDOD%2F9RwsRi9N9pU9FqHzTE3MOLG8iDYLMmlwsBCcYJJSOjO3iS8qyVqd2v7V9QlIuw1%2FnMYA6nGaawJZbwoc%2F487n&X-Amz-Signature=ac0ebee1a429711ab386fd7a8206605ce161bfd9c6231e80fe6b64e73a96dc92&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35ZDBZH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDIg2U9MxMJZArw8Ie9bPoNN6RzmA45NYpTnDZqzCpVJwIgKtZc1RmZVWg86KhYgNDJeMEW9YlE2XconULDnYy0axoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiYSabrkzaOn4taBCrcA9zwmJRBenO3WgKMmq3kT45dcQyAUxVflSLICfMRxk277TZsmme8G%2F45qzk5WepK4X0YfbAYuhoJA2SEvza4m%2B9eub6Fjz7Uyl98XHPBIfuZltDHfRZOwpg00iSBAjRotiKInx7rqJgUNJuv1jXStVuO4aIl4W78P1XvlCxWT95dccQLPDGrOQcRSb5Ww2ccsL9TJO0mlOOqikb4TmC9zruqd0wsxrYWh%2Fc8G75vEN9GdBqDrrv3HbiAGf2iJs4KxgCITUnKxy%2F2sCu%2BNxga1TzSU%2F0SR1csVtnyOoMQYnJKOZL6yYiRRohRoZr0fYB4BUG3GzSSiu%2BODepzDyRxCBLaS1RPQZwTmvBdj24TRbM20eHhP8Z6kpWlWAlIixVpWUmU1HkbXNe%2BchV9CavSgr0phsfABGL9eZVQb8jpwpk3myRBBAEO%2BnvbzlpEowFrx7jMQlCGV99YO%2BSOEAaN2F606grObk6GWrJUq0WWljlVs6pryODGH9nbQDVUJCR9vhHGycLQ%2BEimS1LSu3Xk9n31HE6pquYJdD4uBk8SqUp4nGMvx8PZRdHuww%2Fi6YHxEDZpr9wFV5CPiCbf2y%2F0Wrz0%2BhMSJ2cgIQLUflMyZv6cd20TL0pMzg75dn9vMIb19cEGOqUBKABQCZRn1Cz7JS6i3iidRb7vYYJzZ1tDgqudMPSIzMUlRo1Tvoih1ZJjBggNFyG1IwGYZVryoGTHveEoAmOkba9%2Fzisnt%2F%2BaUNFQV6DB0i2W%2FWfIjvxGJyYPXu8Yne2TSaeDOD%2F9RwsRi9N9pU9FqHzTE3MOLG8iDYLMmlwsBCcYJJSOjO3iS8qyVqd2v7V9QlIuw1%2FnMYA6nGaawJZbwoc%2F487n&X-Amz-Signature=058320743eba7df821665cf4069dc736a7db71deda04985cd9d65bfd3d4deb81&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
