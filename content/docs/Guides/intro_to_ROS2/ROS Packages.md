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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IF7CRQ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BXz3bkvnvy0eMmhU1u0gQWG6bJ0Cc38Y0KFuNJ8g%2F4AiA55sKws1e%2FsdCn4OyYzSAIKrTW8t3pG75pwyJBznsIUir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMf%2BtXjKLehibm7lRLKtwDqMN0N%2FdfYTYnr5VW2rf38POw7En6zlWYLcFHYt2OgPEAftD1JX4q1jofQ8npsOk10d6U4HWEnymNBhdbX7zYDYXgRfN2ZgsuitRYfsxzJ6IF2A0GkdjFkWXEfFvKt3JkM%2F4cRIu77r01fN60v1wV3fVDqx54UmeYwhiQlPyp1RWqxzr8DBI%2Fje3LpvAbEWw79uDrnok4JjWw7mwrG13WrUApjlck5je1mVGivoW7xH5eMZ4MC6dC2%2BpZtw6SqFSK11LFGy6EzjrNsj53AYvuWtZHWHBpJMmLPpfoYKBKzt7wAupLF8tKX3UXXRluL6GF1C99TtrlcFlvrLaCyNKlMGVxN%2FUFCdsFsLdIYMGrPxlwulOVrvCkBh3JVMqotyNVlcpVGv%2FeaPlMX9%2FDjhHCWQQdElHjqw266%2FWkIhd8zi%2FGJqG%2B8lpVW1IGPyZxgmTBpEa74P4UMiV5PGRGlhBd%2Fr9LsL8Wc%2B8SwWvbmJF5V4F%2FZclSoN0MGf%2FwaOmak9dt2ZAdYSzyWRzxYIVPxv8KI1UtI4VCZw6C%2Faqp0kC3mBSyztH4FE4wEN3%2FBC5e3pl4Nn52xR1dxF1kr15mpv3J0c0DwXg1PhYYW%2BATM%2BQoRLRlSx1d%2BSgTEkEhSMkwvJGNwgY6pgFQrzOQ%2BSGg9hYNcW7igNFs%2BprR7L7je%2BTdQnffvVzCq2MxVDEbbDtP7Tm6kmgjJ5VHI4GF6uqr35FFom%2Fn7lqrvTrIZN%2BukFFZ3d4gmKwKcY54iDFWi0ONuIRlVIt87LY%2FVIBh%2FUbk%2B%2BrsKbK4Hm1ix9bLePVfNyRb%2BoNPb7DFiCBRzxOqWJuDyegGx5gplXVzk4R3nmglWQrc5Ujkyb2S9GdRDODj&X-Amz-Signature=0116dcbff7a58181088b8a3a3a361a0aeb54091e98ee859c68209f80649ea738&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IF7CRQ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BXz3bkvnvy0eMmhU1u0gQWG6bJ0Cc38Y0KFuNJ8g%2F4AiA55sKws1e%2FsdCn4OyYzSAIKrTW8t3pG75pwyJBznsIUir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMf%2BtXjKLehibm7lRLKtwDqMN0N%2FdfYTYnr5VW2rf38POw7En6zlWYLcFHYt2OgPEAftD1JX4q1jofQ8npsOk10d6U4HWEnymNBhdbX7zYDYXgRfN2ZgsuitRYfsxzJ6IF2A0GkdjFkWXEfFvKt3JkM%2F4cRIu77r01fN60v1wV3fVDqx54UmeYwhiQlPyp1RWqxzr8DBI%2Fje3LpvAbEWw79uDrnok4JjWw7mwrG13WrUApjlck5je1mVGivoW7xH5eMZ4MC6dC2%2BpZtw6SqFSK11LFGy6EzjrNsj53AYvuWtZHWHBpJMmLPpfoYKBKzt7wAupLF8tKX3UXXRluL6GF1C99TtrlcFlvrLaCyNKlMGVxN%2FUFCdsFsLdIYMGrPxlwulOVrvCkBh3JVMqotyNVlcpVGv%2FeaPlMX9%2FDjhHCWQQdElHjqw266%2FWkIhd8zi%2FGJqG%2B8lpVW1IGPyZxgmTBpEa74P4UMiV5PGRGlhBd%2Fr9LsL8Wc%2B8SwWvbmJF5V4F%2FZclSoN0MGf%2FwaOmak9dt2ZAdYSzyWRzxYIVPxv8KI1UtI4VCZw6C%2Faqp0kC3mBSyztH4FE4wEN3%2FBC5e3pl4Nn52xR1dxF1kr15mpv3J0c0DwXg1PhYYW%2BATM%2BQoRLRlSx1d%2BSgTEkEhSMkwvJGNwgY6pgFQrzOQ%2BSGg9hYNcW7igNFs%2BprR7L7je%2BTdQnffvVzCq2MxVDEbbDtP7Tm6kmgjJ5VHI4GF6uqr35FFom%2Fn7lqrvTrIZN%2BukFFZ3d4gmKwKcY54iDFWi0ONuIRlVIt87LY%2FVIBh%2FUbk%2B%2BrsKbK4Hm1ix9bLePVfNyRb%2BoNPb7DFiCBRzxOqWJuDyegGx5gplXVzk4R3nmglWQrc5Ujkyb2S9GdRDODj&X-Amz-Signature=e049c4e8a93551cc9fe679d009c6424aaec9b29a96d78e2d8f66ef2c2c4b5f70&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IF7CRQ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BXz3bkvnvy0eMmhU1u0gQWG6bJ0Cc38Y0KFuNJ8g%2F4AiA55sKws1e%2FsdCn4OyYzSAIKrTW8t3pG75pwyJBznsIUir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMf%2BtXjKLehibm7lRLKtwDqMN0N%2FdfYTYnr5VW2rf38POw7En6zlWYLcFHYt2OgPEAftD1JX4q1jofQ8npsOk10d6U4HWEnymNBhdbX7zYDYXgRfN2ZgsuitRYfsxzJ6IF2A0GkdjFkWXEfFvKt3JkM%2F4cRIu77r01fN60v1wV3fVDqx54UmeYwhiQlPyp1RWqxzr8DBI%2Fje3LpvAbEWw79uDrnok4JjWw7mwrG13WrUApjlck5je1mVGivoW7xH5eMZ4MC6dC2%2BpZtw6SqFSK11LFGy6EzjrNsj53AYvuWtZHWHBpJMmLPpfoYKBKzt7wAupLF8tKX3UXXRluL6GF1C99TtrlcFlvrLaCyNKlMGVxN%2FUFCdsFsLdIYMGrPxlwulOVrvCkBh3JVMqotyNVlcpVGv%2FeaPlMX9%2FDjhHCWQQdElHjqw266%2FWkIhd8zi%2FGJqG%2B8lpVW1IGPyZxgmTBpEa74P4UMiV5PGRGlhBd%2Fr9LsL8Wc%2B8SwWvbmJF5V4F%2FZclSoN0MGf%2FwaOmak9dt2ZAdYSzyWRzxYIVPxv8KI1UtI4VCZw6C%2Faqp0kC3mBSyztH4FE4wEN3%2FBC5e3pl4Nn52xR1dxF1kr15mpv3J0c0DwXg1PhYYW%2BATM%2BQoRLRlSx1d%2BSgTEkEhSMkwvJGNwgY6pgFQrzOQ%2BSGg9hYNcW7igNFs%2BprR7L7je%2BTdQnffvVzCq2MxVDEbbDtP7Tm6kmgjJ5VHI4GF6uqr35FFom%2Fn7lqrvTrIZN%2BukFFZ3d4gmKwKcY54iDFWi0ONuIRlVIt87LY%2FVIBh%2FUbk%2B%2BrsKbK4Hm1ix9bLePVfNyRb%2BoNPb7DFiCBRzxOqWJuDyegGx5gplXVzk4R3nmglWQrc5Ujkyb2S9GdRDODj&X-Amz-Signature=fef82a17bc438beaf68f9857d309ae631e365528106940b591c41e7f7b09be63&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IF7CRQ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BXz3bkvnvy0eMmhU1u0gQWG6bJ0Cc38Y0KFuNJ8g%2F4AiA55sKws1e%2FsdCn4OyYzSAIKrTW8t3pG75pwyJBznsIUir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMf%2BtXjKLehibm7lRLKtwDqMN0N%2FdfYTYnr5VW2rf38POw7En6zlWYLcFHYt2OgPEAftD1JX4q1jofQ8npsOk10d6U4HWEnymNBhdbX7zYDYXgRfN2ZgsuitRYfsxzJ6IF2A0GkdjFkWXEfFvKt3JkM%2F4cRIu77r01fN60v1wV3fVDqx54UmeYwhiQlPyp1RWqxzr8DBI%2Fje3LpvAbEWw79uDrnok4JjWw7mwrG13WrUApjlck5je1mVGivoW7xH5eMZ4MC6dC2%2BpZtw6SqFSK11LFGy6EzjrNsj53AYvuWtZHWHBpJMmLPpfoYKBKzt7wAupLF8tKX3UXXRluL6GF1C99TtrlcFlvrLaCyNKlMGVxN%2FUFCdsFsLdIYMGrPxlwulOVrvCkBh3JVMqotyNVlcpVGv%2FeaPlMX9%2FDjhHCWQQdElHjqw266%2FWkIhd8zi%2FGJqG%2B8lpVW1IGPyZxgmTBpEa74P4UMiV5PGRGlhBd%2Fr9LsL8Wc%2B8SwWvbmJF5V4F%2FZclSoN0MGf%2FwaOmak9dt2ZAdYSzyWRzxYIVPxv8KI1UtI4VCZw6C%2Faqp0kC3mBSyztH4FE4wEN3%2FBC5e3pl4Nn52xR1dxF1kr15mpv3J0c0DwXg1PhYYW%2BATM%2BQoRLRlSx1d%2BSgTEkEhSMkwvJGNwgY6pgFQrzOQ%2BSGg9hYNcW7igNFs%2BprR7L7je%2BTdQnffvVzCq2MxVDEbbDtP7Tm6kmgjJ5VHI4GF6uqr35FFom%2Fn7lqrvTrIZN%2BukFFZ3d4gmKwKcY54iDFWi0ONuIRlVIt87LY%2FVIBh%2FUbk%2B%2BrsKbK4Hm1ix9bLePVfNyRb%2BoNPb7DFiCBRzxOqWJuDyegGx5gplXVzk4R3nmglWQrc5Ujkyb2S9GdRDODj&X-Amz-Signature=b01e365e45b5fb039ce9e19be00b1ae6af84331919790b403e1cc55523db6dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IF7CRQ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BXz3bkvnvy0eMmhU1u0gQWG6bJ0Cc38Y0KFuNJ8g%2F4AiA55sKws1e%2FsdCn4OyYzSAIKrTW8t3pG75pwyJBznsIUir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMf%2BtXjKLehibm7lRLKtwDqMN0N%2FdfYTYnr5VW2rf38POw7En6zlWYLcFHYt2OgPEAftD1JX4q1jofQ8npsOk10d6U4HWEnymNBhdbX7zYDYXgRfN2ZgsuitRYfsxzJ6IF2A0GkdjFkWXEfFvKt3JkM%2F4cRIu77r01fN60v1wV3fVDqx54UmeYwhiQlPyp1RWqxzr8DBI%2Fje3LpvAbEWw79uDrnok4JjWw7mwrG13WrUApjlck5je1mVGivoW7xH5eMZ4MC6dC2%2BpZtw6SqFSK11LFGy6EzjrNsj53AYvuWtZHWHBpJMmLPpfoYKBKzt7wAupLF8tKX3UXXRluL6GF1C99TtrlcFlvrLaCyNKlMGVxN%2FUFCdsFsLdIYMGrPxlwulOVrvCkBh3JVMqotyNVlcpVGv%2FeaPlMX9%2FDjhHCWQQdElHjqw266%2FWkIhd8zi%2FGJqG%2B8lpVW1IGPyZxgmTBpEa74P4UMiV5PGRGlhBd%2Fr9LsL8Wc%2B8SwWvbmJF5V4F%2FZclSoN0MGf%2FwaOmak9dt2ZAdYSzyWRzxYIVPxv8KI1UtI4VCZw6C%2Faqp0kC3mBSyztH4FE4wEN3%2FBC5e3pl4Nn52xR1dxF1kr15mpv3J0c0DwXg1PhYYW%2BATM%2BQoRLRlSx1d%2BSgTEkEhSMkwvJGNwgY6pgFQrzOQ%2BSGg9hYNcW7igNFs%2BprR7L7je%2BTdQnffvVzCq2MxVDEbbDtP7Tm6kmgjJ5VHI4GF6uqr35FFom%2Fn7lqrvTrIZN%2BukFFZ3d4gmKwKcY54iDFWi0ONuIRlVIt87LY%2FVIBh%2FUbk%2B%2BrsKbK4Hm1ix9bLePVfNyRb%2BoNPb7DFiCBRzxOqWJuDyegGx5gplXVzk4R3nmglWQrc5Ujkyb2S9GdRDODj&X-Amz-Signature=0ed2e3023d962b5c76a0c73e758953aca67e4aaef9e2ebc98428e28d723f4e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IF7CRQ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BXz3bkvnvy0eMmhU1u0gQWG6bJ0Cc38Y0KFuNJ8g%2F4AiA55sKws1e%2FsdCn4OyYzSAIKrTW8t3pG75pwyJBznsIUir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMf%2BtXjKLehibm7lRLKtwDqMN0N%2FdfYTYnr5VW2rf38POw7En6zlWYLcFHYt2OgPEAftD1JX4q1jofQ8npsOk10d6U4HWEnymNBhdbX7zYDYXgRfN2ZgsuitRYfsxzJ6IF2A0GkdjFkWXEfFvKt3JkM%2F4cRIu77r01fN60v1wV3fVDqx54UmeYwhiQlPyp1RWqxzr8DBI%2Fje3LpvAbEWw79uDrnok4JjWw7mwrG13WrUApjlck5je1mVGivoW7xH5eMZ4MC6dC2%2BpZtw6SqFSK11LFGy6EzjrNsj53AYvuWtZHWHBpJMmLPpfoYKBKzt7wAupLF8tKX3UXXRluL6GF1C99TtrlcFlvrLaCyNKlMGVxN%2FUFCdsFsLdIYMGrPxlwulOVrvCkBh3JVMqotyNVlcpVGv%2FeaPlMX9%2FDjhHCWQQdElHjqw266%2FWkIhd8zi%2FGJqG%2B8lpVW1IGPyZxgmTBpEa74P4UMiV5PGRGlhBd%2Fr9LsL8Wc%2B8SwWvbmJF5V4F%2FZclSoN0MGf%2FwaOmak9dt2ZAdYSzyWRzxYIVPxv8KI1UtI4VCZw6C%2Faqp0kC3mBSyztH4FE4wEN3%2FBC5e3pl4Nn52xR1dxF1kr15mpv3J0c0DwXg1PhYYW%2BATM%2BQoRLRlSx1d%2BSgTEkEhSMkwvJGNwgY6pgFQrzOQ%2BSGg9hYNcW7igNFs%2BprR7L7je%2BTdQnffvVzCq2MxVDEbbDtP7Tm6kmgjJ5VHI4GF6uqr35FFom%2Fn7lqrvTrIZN%2BukFFZ3d4gmKwKcY54iDFWi0ONuIRlVIt87LY%2FVIBh%2FUbk%2B%2BrsKbK4Hm1ix9bLePVfNyRb%2BoNPb7DFiCBRzxOqWJuDyegGx5gplXVzk4R3nmglWQrc5Ujkyb2S9GdRDODj&X-Amz-Signature=05dd0d185e7a6f525ce6abb1b5f63666fe00ccd2026b99cce402164167136ac5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IF7CRQ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BXz3bkvnvy0eMmhU1u0gQWG6bJ0Cc38Y0KFuNJ8g%2F4AiA55sKws1e%2FsdCn4OyYzSAIKrTW8t3pG75pwyJBznsIUir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMf%2BtXjKLehibm7lRLKtwDqMN0N%2FdfYTYnr5VW2rf38POw7En6zlWYLcFHYt2OgPEAftD1JX4q1jofQ8npsOk10d6U4HWEnymNBhdbX7zYDYXgRfN2ZgsuitRYfsxzJ6IF2A0GkdjFkWXEfFvKt3JkM%2F4cRIu77r01fN60v1wV3fVDqx54UmeYwhiQlPyp1RWqxzr8DBI%2Fje3LpvAbEWw79uDrnok4JjWw7mwrG13WrUApjlck5je1mVGivoW7xH5eMZ4MC6dC2%2BpZtw6SqFSK11LFGy6EzjrNsj53AYvuWtZHWHBpJMmLPpfoYKBKzt7wAupLF8tKX3UXXRluL6GF1C99TtrlcFlvrLaCyNKlMGVxN%2FUFCdsFsLdIYMGrPxlwulOVrvCkBh3JVMqotyNVlcpVGv%2FeaPlMX9%2FDjhHCWQQdElHjqw266%2FWkIhd8zi%2FGJqG%2B8lpVW1IGPyZxgmTBpEa74P4UMiV5PGRGlhBd%2Fr9LsL8Wc%2B8SwWvbmJF5V4F%2FZclSoN0MGf%2FwaOmak9dt2ZAdYSzyWRzxYIVPxv8KI1UtI4VCZw6C%2Faqp0kC3mBSyztH4FE4wEN3%2FBC5e3pl4Nn52xR1dxF1kr15mpv3J0c0DwXg1PhYYW%2BATM%2BQoRLRlSx1d%2BSgTEkEhSMkwvJGNwgY6pgFQrzOQ%2BSGg9hYNcW7igNFs%2BprR7L7je%2BTdQnffvVzCq2MxVDEbbDtP7Tm6kmgjJ5VHI4GF6uqr35FFom%2Fn7lqrvTrIZN%2BukFFZ3d4gmKwKcY54iDFWi0ONuIRlVIt87LY%2FVIBh%2FUbk%2B%2BrsKbK4Hm1ix9bLePVfNyRb%2BoNPb7DFiCBRzxOqWJuDyegGx5gplXVzk4R3nmglWQrc5Ujkyb2S9GdRDODj&X-Amz-Signature=11379269eb1ecb321091000127e271ba3afcefac048a13ee8745b1014c5f16b3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
