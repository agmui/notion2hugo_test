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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7AXVAS%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsN3eGa4fIgdtbHBCLUAMAhCzZXKr3QkWQyQXWYnteKQIgTwj%2FDZHACafo3g5T9cFyhvJf3BKZiOqkOBQU6Gh3Y5MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2A9W1rzj%2BmMkdalyrcA%2BFUAhVQm0UdyIC2hXm8Gvtg%2FwP2FaG3OFx7nQqz6Z5OEMDkdjKXq25igFKYv8MEvHp2PlXA%2FFup%2F8LN0waVCBvjA7m%2BDGIvHlmcqfciv02HpaCkoNEcRxwQ4XMhyG6dNAZFxoj%2F6wkQ3lNdlaU1xnNrBl2NV4W3DBNA1Rw0AUBdqCwMKBnNjUx5cbyiO3Qu0TsfGbHU1Bf7dZgP2MbLeza1jSmkb3Y0cM2hzVMBdrrx1pwPWKyg0%2BRddOB89bylUiCsVDxiPy4Qyisa74x%2F2MaTeWebl086gBRXMmOeYs%2F6abek9hPxGcvYcx99AXr3neXMCRYfejK779XJFjej11AjTHlw1UXfu6Gq7X1Q7LRzqe6WzGfJb%2FzC3H4%2BM%2BtBwvfbEUPWeJBOTQkXZ6wImNJm9kZprj%2BTzct5rGevbCkorYqlgkRgFtDEW3wd8Me6fUXY0KewSpWwABZMeXhqPM63wizgmqsYkqXcFrWPrP5h5UIdUz9j4GAFDqvrc%2FBtDnAglEvoNHSe29qnKy7EnpPK5FVYOi8d2q5PFcYYqXhrVE8W%2FIBfW2ciFHPLrr5H8oseYrSXX5LdlUrScUVCXarDpH7jwUeUfZo1Z6jR5%2BTmjVrSUGJkCMnojQUnMIeD0ccGOqUBHhNLiS9oqTz28k4SvloLfNeYhnE%2Byl7P4q9bu3EqqpKqokrsykbbuHoERZ0gRSIUJB7poDbqINQt18aoD5ux6%2BC5TQNu3dcQMFSeLsocsIyFUZJ1S%2FcZ4tnjZsL%2FIFf5mRte5cq1qnH3T4SiWeJHmv4u%2FflMSxXY7V%2BRv7XM4C%2FX%2FVAAQtZ1u9OzWhiOAWZyv7eFMZr0FvQS8At1JHurOvqQeiRD&X-Amz-Signature=ab7e735caa5a488e5f2938da91d421fc2a44cb0253f81582e9318065e5d8254a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7AXVAS%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsN3eGa4fIgdtbHBCLUAMAhCzZXKr3QkWQyQXWYnteKQIgTwj%2FDZHACafo3g5T9cFyhvJf3BKZiOqkOBQU6Gh3Y5MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2A9W1rzj%2BmMkdalyrcA%2BFUAhVQm0UdyIC2hXm8Gvtg%2FwP2FaG3OFx7nQqz6Z5OEMDkdjKXq25igFKYv8MEvHp2PlXA%2FFup%2F8LN0waVCBvjA7m%2BDGIvHlmcqfciv02HpaCkoNEcRxwQ4XMhyG6dNAZFxoj%2F6wkQ3lNdlaU1xnNrBl2NV4W3DBNA1Rw0AUBdqCwMKBnNjUx5cbyiO3Qu0TsfGbHU1Bf7dZgP2MbLeza1jSmkb3Y0cM2hzVMBdrrx1pwPWKyg0%2BRddOB89bylUiCsVDxiPy4Qyisa74x%2F2MaTeWebl086gBRXMmOeYs%2F6abek9hPxGcvYcx99AXr3neXMCRYfejK779XJFjej11AjTHlw1UXfu6Gq7X1Q7LRzqe6WzGfJb%2FzC3H4%2BM%2BtBwvfbEUPWeJBOTQkXZ6wImNJm9kZprj%2BTzct5rGevbCkorYqlgkRgFtDEW3wd8Me6fUXY0KewSpWwABZMeXhqPM63wizgmqsYkqXcFrWPrP5h5UIdUz9j4GAFDqvrc%2FBtDnAglEvoNHSe29qnKy7EnpPK5FVYOi8d2q5PFcYYqXhrVE8W%2FIBfW2ciFHPLrr5H8oseYrSXX5LdlUrScUVCXarDpH7jwUeUfZo1Z6jR5%2BTmjVrSUGJkCMnojQUnMIeD0ccGOqUBHhNLiS9oqTz28k4SvloLfNeYhnE%2Byl7P4q9bu3EqqpKqokrsykbbuHoERZ0gRSIUJB7poDbqINQt18aoD5ux6%2BC5TQNu3dcQMFSeLsocsIyFUZJ1S%2FcZ4tnjZsL%2FIFf5mRte5cq1qnH3T4SiWeJHmv4u%2FflMSxXY7V%2BRv7XM4C%2FX%2FVAAQtZ1u9OzWhiOAWZyv7eFMZr0FvQS8At1JHurOvqQeiRD&X-Amz-Signature=cb50c816c955d1aaabb32109ba9e0f2560f11d376d7b8df5330ed43be5af6d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7AXVAS%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsN3eGa4fIgdtbHBCLUAMAhCzZXKr3QkWQyQXWYnteKQIgTwj%2FDZHACafo3g5T9cFyhvJf3BKZiOqkOBQU6Gh3Y5MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2A9W1rzj%2BmMkdalyrcA%2BFUAhVQm0UdyIC2hXm8Gvtg%2FwP2FaG3OFx7nQqz6Z5OEMDkdjKXq25igFKYv8MEvHp2PlXA%2FFup%2F8LN0waVCBvjA7m%2BDGIvHlmcqfciv02HpaCkoNEcRxwQ4XMhyG6dNAZFxoj%2F6wkQ3lNdlaU1xnNrBl2NV4W3DBNA1Rw0AUBdqCwMKBnNjUx5cbyiO3Qu0TsfGbHU1Bf7dZgP2MbLeza1jSmkb3Y0cM2hzVMBdrrx1pwPWKyg0%2BRddOB89bylUiCsVDxiPy4Qyisa74x%2F2MaTeWebl086gBRXMmOeYs%2F6abek9hPxGcvYcx99AXr3neXMCRYfejK779XJFjej11AjTHlw1UXfu6Gq7X1Q7LRzqe6WzGfJb%2FzC3H4%2BM%2BtBwvfbEUPWeJBOTQkXZ6wImNJm9kZprj%2BTzct5rGevbCkorYqlgkRgFtDEW3wd8Me6fUXY0KewSpWwABZMeXhqPM63wizgmqsYkqXcFrWPrP5h5UIdUz9j4GAFDqvrc%2FBtDnAglEvoNHSe29qnKy7EnpPK5FVYOi8d2q5PFcYYqXhrVE8W%2FIBfW2ciFHPLrr5H8oseYrSXX5LdlUrScUVCXarDpH7jwUeUfZo1Z6jR5%2BTmjVrSUGJkCMnojQUnMIeD0ccGOqUBHhNLiS9oqTz28k4SvloLfNeYhnE%2Byl7P4q9bu3EqqpKqokrsykbbuHoERZ0gRSIUJB7poDbqINQt18aoD5ux6%2BC5TQNu3dcQMFSeLsocsIyFUZJ1S%2FcZ4tnjZsL%2FIFf5mRte5cq1qnH3T4SiWeJHmv4u%2FflMSxXY7V%2BRv7XM4C%2FX%2FVAAQtZ1u9OzWhiOAWZyv7eFMZr0FvQS8At1JHurOvqQeiRD&X-Amz-Signature=fa563f4ac3ff8f6a565174f66ff893678bd2cea2a2a0325c3fcc8f6b31fc8506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7AXVAS%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsN3eGa4fIgdtbHBCLUAMAhCzZXKr3QkWQyQXWYnteKQIgTwj%2FDZHACafo3g5T9cFyhvJf3BKZiOqkOBQU6Gh3Y5MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2A9W1rzj%2BmMkdalyrcA%2BFUAhVQm0UdyIC2hXm8Gvtg%2FwP2FaG3OFx7nQqz6Z5OEMDkdjKXq25igFKYv8MEvHp2PlXA%2FFup%2F8LN0waVCBvjA7m%2BDGIvHlmcqfciv02HpaCkoNEcRxwQ4XMhyG6dNAZFxoj%2F6wkQ3lNdlaU1xnNrBl2NV4W3DBNA1Rw0AUBdqCwMKBnNjUx5cbyiO3Qu0TsfGbHU1Bf7dZgP2MbLeza1jSmkb3Y0cM2hzVMBdrrx1pwPWKyg0%2BRddOB89bylUiCsVDxiPy4Qyisa74x%2F2MaTeWebl086gBRXMmOeYs%2F6abek9hPxGcvYcx99AXr3neXMCRYfejK779XJFjej11AjTHlw1UXfu6Gq7X1Q7LRzqe6WzGfJb%2FzC3H4%2BM%2BtBwvfbEUPWeJBOTQkXZ6wImNJm9kZprj%2BTzct5rGevbCkorYqlgkRgFtDEW3wd8Me6fUXY0KewSpWwABZMeXhqPM63wizgmqsYkqXcFrWPrP5h5UIdUz9j4GAFDqvrc%2FBtDnAglEvoNHSe29qnKy7EnpPK5FVYOi8d2q5PFcYYqXhrVE8W%2FIBfW2ciFHPLrr5H8oseYrSXX5LdlUrScUVCXarDpH7jwUeUfZo1Z6jR5%2BTmjVrSUGJkCMnojQUnMIeD0ccGOqUBHhNLiS9oqTz28k4SvloLfNeYhnE%2Byl7P4q9bu3EqqpKqokrsykbbuHoERZ0gRSIUJB7poDbqINQt18aoD5ux6%2BC5TQNu3dcQMFSeLsocsIyFUZJ1S%2FcZ4tnjZsL%2FIFf5mRte5cq1qnH3T4SiWeJHmv4u%2FflMSxXY7V%2BRv7XM4C%2FX%2FVAAQtZ1u9OzWhiOAWZyv7eFMZr0FvQS8At1JHurOvqQeiRD&X-Amz-Signature=20722c02b59accbef5b589b00c0ba4686fb50bada0c20da24b8299879235261a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7AXVAS%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsN3eGa4fIgdtbHBCLUAMAhCzZXKr3QkWQyQXWYnteKQIgTwj%2FDZHACafo3g5T9cFyhvJf3BKZiOqkOBQU6Gh3Y5MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2A9W1rzj%2BmMkdalyrcA%2BFUAhVQm0UdyIC2hXm8Gvtg%2FwP2FaG3OFx7nQqz6Z5OEMDkdjKXq25igFKYv8MEvHp2PlXA%2FFup%2F8LN0waVCBvjA7m%2BDGIvHlmcqfciv02HpaCkoNEcRxwQ4XMhyG6dNAZFxoj%2F6wkQ3lNdlaU1xnNrBl2NV4W3DBNA1Rw0AUBdqCwMKBnNjUx5cbyiO3Qu0TsfGbHU1Bf7dZgP2MbLeza1jSmkb3Y0cM2hzVMBdrrx1pwPWKyg0%2BRddOB89bylUiCsVDxiPy4Qyisa74x%2F2MaTeWebl086gBRXMmOeYs%2F6abek9hPxGcvYcx99AXr3neXMCRYfejK779XJFjej11AjTHlw1UXfu6Gq7X1Q7LRzqe6WzGfJb%2FzC3H4%2BM%2BtBwvfbEUPWeJBOTQkXZ6wImNJm9kZprj%2BTzct5rGevbCkorYqlgkRgFtDEW3wd8Me6fUXY0KewSpWwABZMeXhqPM63wizgmqsYkqXcFrWPrP5h5UIdUz9j4GAFDqvrc%2FBtDnAglEvoNHSe29qnKy7EnpPK5FVYOi8d2q5PFcYYqXhrVE8W%2FIBfW2ciFHPLrr5H8oseYrSXX5LdlUrScUVCXarDpH7jwUeUfZo1Z6jR5%2BTmjVrSUGJkCMnojQUnMIeD0ccGOqUBHhNLiS9oqTz28k4SvloLfNeYhnE%2Byl7P4q9bu3EqqpKqokrsykbbuHoERZ0gRSIUJB7poDbqINQt18aoD5ux6%2BC5TQNu3dcQMFSeLsocsIyFUZJ1S%2FcZ4tnjZsL%2FIFf5mRte5cq1qnH3T4SiWeJHmv4u%2FflMSxXY7V%2BRv7XM4C%2FX%2FVAAQtZ1u9OzWhiOAWZyv7eFMZr0FvQS8At1JHurOvqQeiRD&X-Amz-Signature=b44b41eb44bcc67cad0d8b2725ec46b4568a926effba4df668e28834d1ab4055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7AXVAS%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsN3eGa4fIgdtbHBCLUAMAhCzZXKr3QkWQyQXWYnteKQIgTwj%2FDZHACafo3g5T9cFyhvJf3BKZiOqkOBQU6Gh3Y5MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2A9W1rzj%2BmMkdalyrcA%2BFUAhVQm0UdyIC2hXm8Gvtg%2FwP2FaG3OFx7nQqz6Z5OEMDkdjKXq25igFKYv8MEvHp2PlXA%2FFup%2F8LN0waVCBvjA7m%2BDGIvHlmcqfciv02HpaCkoNEcRxwQ4XMhyG6dNAZFxoj%2F6wkQ3lNdlaU1xnNrBl2NV4W3DBNA1Rw0AUBdqCwMKBnNjUx5cbyiO3Qu0TsfGbHU1Bf7dZgP2MbLeza1jSmkb3Y0cM2hzVMBdrrx1pwPWKyg0%2BRddOB89bylUiCsVDxiPy4Qyisa74x%2F2MaTeWebl086gBRXMmOeYs%2F6abek9hPxGcvYcx99AXr3neXMCRYfejK779XJFjej11AjTHlw1UXfu6Gq7X1Q7LRzqe6WzGfJb%2FzC3H4%2BM%2BtBwvfbEUPWeJBOTQkXZ6wImNJm9kZprj%2BTzct5rGevbCkorYqlgkRgFtDEW3wd8Me6fUXY0KewSpWwABZMeXhqPM63wizgmqsYkqXcFrWPrP5h5UIdUz9j4GAFDqvrc%2FBtDnAglEvoNHSe29qnKy7EnpPK5FVYOi8d2q5PFcYYqXhrVE8W%2FIBfW2ciFHPLrr5H8oseYrSXX5LdlUrScUVCXarDpH7jwUeUfZo1Z6jR5%2BTmjVrSUGJkCMnojQUnMIeD0ccGOqUBHhNLiS9oqTz28k4SvloLfNeYhnE%2Byl7P4q9bu3EqqpKqokrsykbbuHoERZ0gRSIUJB7poDbqINQt18aoD5ux6%2BC5TQNu3dcQMFSeLsocsIyFUZJ1S%2FcZ4tnjZsL%2FIFf5mRte5cq1qnH3T4SiWeJHmv4u%2FflMSxXY7V%2BRv7XM4C%2FX%2FVAAQtZ1u9OzWhiOAWZyv7eFMZr0FvQS8At1JHurOvqQeiRD&X-Amz-Signature=941eaa4d79f3d170eafac4a2f2e035dd17673bd24cf470d44bee3049067226ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7AXVAS%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsN3eGa4fIgdtbHBCLUAMAhCzZXKr3QkWQyQXWYnteKQIgTwj%2FDZHACafo3g5T9cFyhvJf3BKZiOqkOBQU6Gh3Y5MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2A9W1rzj%2BmMkdalyrcA%2BFUAhVQm0UdyIC2hXm8Gvtg%2FwP2FaG3OFx7nQqz6Z5OEMDkdjKXq25igFKYv8MEvHp2PlXA%2FFup%2F8LN0waVCBvjA7m%2BDGIvHlmcqfciv02HpaCkoNEcRxwQ4XMhyG6dNAZFxoj%2F6wkQ3lNdlaU1xnNrBl2NV4W3DBNA1Rw0AUBdqCwMKBnNjUx5cbyiO3Qu0TsfGbHU1Bf7dZgP2MbLeza1jSmkb3Y0cM2hzVMBdrrx1pwPWKyg0%2BRddOB89bylUiCsVDxiPy4Qyisa74x%2F2MaTeWebl086gBRXMmOeYs%2F6abek9hPxGcvYcx99AXr3neXMCRYfejK779XJFjej11AjTHlw1UXfu6Gq7X1Q7LRzqe6WzGfJb%2FzC3H4%2BM%2BtBwvfbEUPWeJBOTQkXZ6wImNJm9kZprj%2BTzct5rGevbCkorYqlgkRgFtDEW3wd8Me6fUXY0KewSpWwABZMeXhqPM63wizgmqsYkqXcFrWPrP5h5UIdUz9j4GAFDqvrc%2FBtDnAglEvoNHSe29qnKy7EnpPK5FVYOi8d2q5PFcYYqXhrVE8W%2FIBfW2ciFHPLrr5H8oseYrSXX5LdlUrScUVCXarDpH7jwUeUfZo1Z6jR5%2BTmjVrSUGJkCMnojQUnMIeD0ccGOqUBHhNLiS9oqTz28k4SvloLfNeYhnE%2Byl7P4q9bu3EqqpKqokrsykbbuHoERZ0gRSIUJB7poDbqINQt18aoD5ux6%2BC5TQNu3dcQMFSeLsocsIyFUZJ1S%2FcZ4tnjZsL%2FIFf5mRte5cq1qnH3T4SiWeJHmv4u%2FflMSxXY7V%2BRv7XM4C%2FX%2FVAAQtZ1u9OzWhiOAWZyv7eFMZr0FvQS8At1JHurOvqQeiRD&X-Amz-Signature=551f62923ed8c1b7185e570bab9b3c33cb95aeec589f4e2ff42b64ff14cee12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
