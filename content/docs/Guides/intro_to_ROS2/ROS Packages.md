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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IODSEJ%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSgY0%2FnewFAsWL6RJujPqx%2B%2BRO2Kj9Ak30cm6LmBWagIgD7VW9AN76VeifxmkOFy%2Fj9XEEUG6QpTyeqGRk1pV4sMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDbvT8pCvABqv2HYwyrcAxXijaie%2BQdQU64RFDjRnRIO9PEe%2Bq4VjM3lgC9N4zKSijWF4VYRoa363z1IeS9HetulbV8lldVX9Zbvxb944gWG9I8AyeZNnpIHEtq8yESxaJWwuZoUBbdXKQWanodmohJYL6x99ezSKIYlOkkJyASBuuWc%2BLT3VsVs%2BSfurqJ3vX%2B4BLyCyqa3vDY2ZkAzAnmqlO8G81%2FpdnoSJOd33uUmCO7I01GQLF6RmLFYDmFar2IjL7SKmUSTViGw5e65fDqXpHVJGUXCnqZpBA3P%2B2qVK4LehuR9R7dtRzh5BOt8bqCBRlxpjmAK3GBm%2Bvoa7OPckkZKuuBFiYdirckLdFBskTMFHqZ%2FMtv1mpMQhJGZExSxXpioQZ75RRzLOTTG3ReRiInGswTAhzMrKp4MYvjh6RsaEn842%2Fd%2FAX%2BFFxroaTfNBZLZJs%2BP0IVDngAB9RIG7QydAhAQ2XJ0YZSoSEaXIT2%2BdzO5US0eYyCi9BdO9Vn1RSykj%2BDqoSptu7JymllXa7iWuYkwFD8fjGrhdMOphBMWDESsEKJX7m2Eo0V%2Bj2UBCxPYUBqCa2YY8JnVyYdqnYo1BX5bQnriO7tOghd5%2FwSWAGrB7mTGEp7CA26IGeumIbgDYmr%2BzVp%2BMKKo5c8GOqUB8N5Hmr%2BJzQu3yiyRomoZqWSuXtdAqMfvPcmlsh2c4OiafpRkP9ShZwsTi7mgiaigTSrkIie7C5UrXZmMyXMmTQPq1%2BwsjmOZ24m6EQ0KPmHPunZW6gCyUD9LFtK4YeL3l3jja9krgvfNWg9IqOFaKnnfFldk%2BEUu3b%2BptoY%2BEFPhRB63p0AweC71YjQHTa7%2Fls0NLfLKJ2UoQBoA7YPIlI3gOYOE&X-Amz-Signature=1b7b6c66d565da67518f25ecab0ff7f6b2dd65af42e344e213f91a5d6e0db8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IODSEJ%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSgY0%2FnewFAsWL6RJujPqx%2B%2BRO2Kj9Ak30cm6LmBWagIgD7VW9AN76VeifxmkOFy%2Fj9XEEUG6QpTyeqGRk1pV4sMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDbvT8pCvABqv2HYwyrcAxXijaie%2BQdQU64RFDjRnRIO9PEe%2Bq4VjM3lgC9N4zKSijWF4VYRoa363z1IeS9HetulbV8lldVX9Zbvxb944gWG9I8AyeZNnpIHEtq8yESxaJWwuZoUBbdXKQWanodmohJYL6x99ezSKIYlOkkJyASBuuWc%2BLT3VsVs%2BSfurqJ3vX%2B4BLyCyqa3vDY2ZkAzAnmqlO8G81%2FpdnoSJOd33uUmCO7I01GQLF6RmLFYDmFar2IjL7SKmUSTViGw5e65fDqXpHVJGUXCnqZpBA3P%2B2qVK4LehuR9R7dtRzh5BOt8bqCBRlxpjmAK3GBm%2Bvoa7OPckkZKuuBFiYdirckLdFBskTMFHqZ%2FMtv1mpMQhJGZExSxXpioQZ75RRzLOTTG3ReRiInGswTAhzMrKp4MYvjh6RsaEn842%2Fd%2FAX%2BFFxroaTfNBZLZJs%2BP0IVDngAB9RIG7QydAhAQ2XJ0YZSoSEaXIT2%2BdzO5US0eYyCi9BdO9Vn1RSykj%2BDqoSptu7JymllXa7iWuYkwFD8fjGrhdMOphBMWDESsEKJX7m2Eo0V%2Bj2UBCxPYUBqCa2YY8JnVyYdqnYo1BX5bQnriO7tOghd5%2FwSWAGrB7mTGEp7CA26IGeumIbgDYmr%2BzVp%2BMKKo5c8GOqUB8N5Hmr%2BJzQu3yiyRomoZqWSuXtdAqMfvPcmlsh2c4OiafpRkP9ShZwsTi7mgiaigTSrkIie7C5UrXZmMyXMmTQPq1%2BwsjmOZ24m6EQ0KPmHPunZW6gCyUD9LFtK4YeL3l3jja9krgvfNWg9IqOFaKnnfFldk%2BEUu3b%2BptoY%2BEFPhRB63p0AweC71YjQHTa7%2Fls0NLfLKJ2UoQBoA7YPIlI3gOYOE&X-Amz-Signature=b640d373efc121cb5a66d4c6bb140645681397fdcfddbdfbb627fc561081ae17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IODSEJ%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSgY0%2FnewFAsWL6RJujPqx%2B%2BRO2Kj9Ak30cm6LmBWagIgD7VW9AN76VeifxmkOFy%2Fj9XEEUG6QpTyeqGRk1pV4sMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDbvT8pCvABqv2HYwyrcAxXijaie%2BQdQU64RFDjRnRIO9PEe%2Bq4VjM3lgC9N4zKSijWF4VYRoa363z1IeS9HetulbV8lldVX9Zbvxb944gWG9I8AyeZNnpIHEtq8yESxaJWwuZoUBbdXKQWanodmohJYL6x99ezSKIYlOkkJyASBuuWc%2BLT3VsVs%2BSfurqJ3vX%2B4BLyCyqa3vDY2ZkAzAnmqlO8G81%2FpdnoSJOd33uUmCO7I01GQLF6RmLFYDmFar2IjL7SKmUSTViGw5e65fDqXpHVJGUXCnqZpBA3P%2B2qVK4LehuR9R7dtRzh5BOt8bqCBRlxpjmAK3GBm%2Bvoa7OPckkZKuuBFiYdirckLdFBskTMFHqZ%2FMtv1mpMQhJGZExSxXpioQZ75RRzLOTTG3ReRiInGswTAhzMrKp4MYvjh6RsaEn842%2Fd%2FAX%2BFFxroaTfNBZLZJs%2BP0IVDngAB9RIG7QydAhAQ2XJ0YZSoSEaXIT2%2BdzO5US0eYyCi9BdO9Vn1RSykj%2BDqoSptu7JymllXa7iWuYkwFD8fjGrhdMOphBMWDESsEKJX7m2Eo0V%2Bj2UBCxPYUBqCa2YY8JnVyYdqnYo1BX5bQnriO7tOghd5%2FwSWAGrB7mTGEp7CA26IGeumIbgDYmr%2BzVp%2BMKKo5c8GOqUB8N5Hmr%2BJzQu3yiyRomoZqWSuXtdAqMfvPcmlsh2c4OiafpRkP9ShZwsTi7mgiaigTSrkIie7C5UrXZmMyXMmTQPq1%2BwsjmOZ24m6EQ0KPmHPunZW6gCyUD9LFtK4YeL3l3jja9krgvfNWg9IqOFaKnnfFldk%2BEUu3b%2BptoY%2BEFPhRB63p0AweC71YjQHTa7%2Fls0NLfLKJ2UoQBoA7YPIlI3gOYOE&X-Amz-Signature=23a2d393a63157740b3b1ef51f59b512086b4697ff532c9486d7715dd9471fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IODSEJ%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSgY0%2FnewFAsWL6RJujPqx%2B%2BRO2Kj9Ak30cm6LmBWagIgD7VW9AN76VeifxmkOFy%2Fj9XEEUG6QpTyeqGRk1pV4sMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDbvT8pCvABqv2HYwyrcAxXijaie%2BQdQU64RFDjRnRIO9PEe%2Bq4VjM3lgC9N4zKSijWF4VYRoa363z1IeS9HetulbV8lldVX9Zbvxb944gWG9I8AyeZNnpIHEtq8yESxaJWwuZoUBbdXKQWanodmohJYL6x99ezSKIYlOkkJyASBuuWc%2BLT3VsVs%2BSfurqJ3vX%2B4BLyCyqa3vDY2ZkAzAnmqlO8G81%2FpdnoSJOd33uUmCO7I01GQLF6RmLFYDmFar2IjL7SKmUSTViGw5e65fDqXpHVJGUXCnqZpBA3P%2B2qVK4LehuR9R7dtRzh5BOt8bqCBRlxpjmAK3GBm%2Bvoa7OPckkZKuuBFiYdirckLdFBskTMFHqZ%2FMtv1mpMQhJGZExSxXpioQZ75RRzLOTTG3ReRiInGswTAhzMrKp4MYvjh6RsaEn842%2Fd%2FAX%2BFFxroaTfNBZLZJs%2BP0IVDngAB9RIG7QydAhAQ2XJ0YZSoSEaXIT2%2BdzO5US0eYyCi9BdO9Vn1RSykj%2BDqoSptu7JymllXa7iWuYkwFD8fjGrhdMOphBMWDESsEKJX7m2Eo0V%2Bj2UBCxPYUBqCa2YY8JnVyYdqnYo1BX5bQnriO7tOghd5%2FwSWAGrB7mTGEp7CA26IGeumIbgDYmr%2BzVp%2BMKKo5c8GOqUB8N5Hmr%2BJzQu3yiyRomoZqWSuXtdAqMfvPcmlsh2c4OiafpRkP9ShZwsTi7mgiaigTSrkIie7C5UrXZmMyXMmTQPq1%2BwsjmOZ24m6EQ0KPmHPunZW6gCyUD9LFtK4YeL3l3jja9krgvfNWg9IqOFaKnnfFldk%2BEUu3b%2BptoY%2BEFPhRB63p0AweC71YjQHTa7%2Fls0NLfLKJ2UoQBoA7YPIlI3gOYOE&X-Amz-Signature=5938e43c7735d2e42808983446571f166566b94ff32d43c5b4934e7c27439661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IODSEJ%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSgY0%2FnewFAsWL6RJujPqx%2B%2BRO2Kj9Ak30cm6LmBWagIgD7VW9AN76VeifxmkOFy%2Fj9XEEUG6QpTyeqGRk1pV4sMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDbvT8pCvABqv2HYwyrcAxXijaie%2BQdQU64RFDjRnRIO9PEe%2Bq4VjM3lgC9N4zKSijWF4VYRoa363z1IeS9HetulbV8lldVX9Zbvxb944gWG9I8AyeZNnpIHEtq8yESxaJWwuZoUBbdXKQWanodmohJYL6x99ezSKIYlOkkJyASBuuWc%2BLT3VsVs%2BSfurqJ3vX%2B4BLyCyqa3vDY2ZkAzAnmqlO8G81%2FpdnoSJOd33uUmCO7I01GQLF6RmLFYDmFar2IjL7SKmUSTViGw5e65fDqXpHVJGUXCnqZpBA3P%2B2qVK4LehuR9R7dtRzh5BOt8bqCBRlxpjmAK3GBm%2Bvoa7OPckkZKuuBFiYdirckLdFBskTMFHqZ%2FMtv1mpMQhJGZExSxXpioQZ75RRzLOTTG3ReRiInGswTAhzMrKp4MYvjh6RsaEn842%2Fd%2FAX%2BFFxroaTfNBZLZJs%2BP0IVDngAB9RIG7QydAhAQ2XJ0YZSoSEaXIT2%2BdzO5US0eYyCi9BdO9Vn1RSykj%2BDqoSptu7JymllXa7iWuYkwFD8fjGrhdMOphBMWDESsEKJX7m2Eo0V%2Bj2UBCxPYUBqCa2YY8JnVyYdqnYo1BX5bQnriO7tOghd5%2FwSWAGrB7mTGEp7CA26IGeumIbgDYmr%2BzVp%2BMKKo5c8GOqUB8N5Hmr%2BJzQu3yiyRomoZqWSuXtdAqMfvPcmlsh2c4OiafpRkP9ShZwsTi7mgiaigTSrkIie7C5UrXZmMyXMmTQPq1%2BwsjmOZ24m6EQ0KPmHPunZW6gCyUD9LFtK4YeL3l3jja9krgvfNWg9IqOFaKnnfFldk%2BEUu3b%2BptoY%2BEFPhRB63p0AweC71YjQHTa7%2Fls0NLfLKJ2UoQBoA7YPIlI3gOYOE&X-Amz-Signature=410494ec5f426042bad4366f06cbf1736a0d08176419c8bcb9b3d6854397670b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IODSEJ%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSgY0%2FnewFAsWL6RJujPqx%2B%2BRO2Kj9Ak30cm6LmBWagIgD7VW9AN76VeifxmkOFy%2Fj9XEEUG6QpTyeqGRk1pV4sMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDbvT8pCvABqv2HYwyrcAxXijaie%2BQdQU64RFDjRnRIO9PEe%2Bq4VjM3lgC9N4zKSijWF4VYRoa363z1IeS9HetulbV8lldVX9Zbvxb944gWG9I8AyeZNnpIHEtq8yESxaJWwuZoUBbdXKQWanodmohJYL6x99ezSKIYlOkkJyASBuuWc%2BLT3VsVs%2BSfurqJ3vX%2B4BLyCyqa3vDY2ZkAzAnmqlO8G81%2FpdnoSJOd33uUmCO7I01GQLF6RmLFYDmFar2IjL7SKmUSTViGw5e65fDqXpHVJGUXCnqZpBA3P%2B2qVK4LehuR9R7dtRzh5BOt8bqCBRlxpjmAK3GBm%2Bvoa7OPckkZKuuBFiYdirckLdFBskTMFHqZ%2FMtv1mpMQhJGZExSxXpioQZ75RRzLOTTG3ReRiInGswTAhzMrKp4MYvjh6RsaEn842%2Fd%2FAX%2BFFxroaTfNBZLZJs%2BP0IVDngAB9RIG7QydAhAQ2XJ0YZSoSEaXIT2%2BdzO5US0eYyCi9BdO9Vn1RSykj%2BDqoSptu7JymllXa7iWuYkwFD8fjGrhdMOphBMWDESsEKJX7m2Eo0V%2Bj2UBCxPYUBqCa2YY8JnVyYdqnYo1BX5bQnriO7tOghd5%2FwSWAGrB7mTGEp7CA26IGeumIbgDYmr%2BzVp%2BMKKo5c8GOqUB8N5Hmr%2BJzQu3yiyRomoZqWSuXtdAqMfvPcmlsh2c4OiafpRkP9ShZwsTi7mgiaigTSrkIie7C5UrXZmMyXMmTQPq1%2BwsjmOZ24m6EQ0KPmHPunZW6gCyUD9LFtK4YeL3l3jja9krgvfNWg9IqOFaKnnfFldk%2BEUu3b%2BptoY%2BEFPhRB63p0AweC71YjQHTa7%2Fls0NLfLKJ2UoQBoA7YPIlI3gOYOE&X-Amz-Signature=acda95a75d0a50a3778a012f982beb3303345831cd7d4fe07c9021d31e247ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IODSEJ%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMSgY0%2FnewFAsWL6RJujPqx%2B%2BRO2Kj9Ak30cm6LmBWagIgD7VW9AN76VeifxmkOFy%2Fj9XEEUG6QpTyeqGRk1pV4sMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDbvT8pCvABqv2HYwyrcAxXijaie%2BQdQU64RFDjRnRIO9PEe%2Bq4VjM3lgC9N4zKSijWF4VYRoa363z1IeS9HetulbV8lldVX9Zbvxb944gWG9I8AyeZNnpIHEtq8yESxaJWwuZoUBbdXKQWanodmohJYL6x99ezSKIYlOkkJyASBuuWc%2BLT3VsVs%2BSfurqJ3vX%2B4BLyCyqa3vDY2ZkAzAnmqlO8G81%2FpdnoSJOd33uUmCO7I01GQLF6RmLFYDmFar2IjL7SKmUSTViGw5e65fDqXpHVJGUXCnqZpBA3P%2B2qVK4LehuR9R7dtRzh5BOt8bqCBRlxpjmAK3GBm%2Bvoa7OPckkZKuuBFiYdirckLdFBskTMFHqZ%2FMtv1mpMQhJGZExSxXpioQZ75RRzLOTTG3ReRiInGswTAhzMrKp4MYvjh6RsaEn842%2Fd%2FAX%2BFFxroaTfNBZLZJs%2BP0IVDngAB9RIG7QydAhAQ2XJ0YZSoSEaXIT2%2BdzO5US0eYyCi9BdO9Vn1RSykj%2BDqoSptu7JymllXa7iWuYkwFD8fjGrhdMOphBMWDESsEKJX7m2Eo0V%2Bj2UBCxPYUBqCa2YY8JnVyYdqnYo1BX5bQnriO7tOghd5%2FwSWAGrB7mTGEp7CA26IGeumIbgDYmr%2BzVp%2BMKKo5c8GOqUB8N5Hmr%2BJzQu3yiyRomoZqWSuXtdAqMfvPcmlsh2c4OiafpRkP9ShZwsTi7mgiaigTSrkIie7C5UrXZmMyXMmTQPq1%2BwsjmOZ24m6EQ0KPmHPunZW6gCyUD9LFtK4YeL3l3jja9krgvfNWg9IqOFaKnnfFldk%2BEUu3b%2BptoY%2BEFPhRB63p0AweC71YjQHTa7%2Fls0NLfLKJ2UoQBoA7YPIlI3gOYOE&X-Amz-Signature=9e7072c67162f0a7423694dcd68c61c1346bf809f8c4e243b497f0453b8a70f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
