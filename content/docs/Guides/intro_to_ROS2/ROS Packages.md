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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZVDPJQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCcdavQO0pFBaX5QYbzat8hVp5BT1saP5W4h6n4bak3gAIgZ6jqgHshZZE1EaDXs78aEb3cmZ%2B%2FmPvLvzBY8sGB5PAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD4BO9ohRPU5wbbruSrcAxRZsl1TQOsTSYpMB0ioKcFv4PlPbFyo6iZza8i1jggFG4PGIGmajhHLbfNzBiIyBslu3tzjeIP%2BUEfOFy5UfXP1pqVmuKz3z2v%2BZu5KdIlHnp5Oi0LYI3HBoAnb9gcVFo2lAcevMyNvb%2FuRIOCUsHHziMacVbygqPH%2BvMtBxyAls8SCzaZc9BuzRSlyAZtI6skCTD4T2FJlkfCQaWyo1fV%2BzFGvGA0E0vV6xwaBbb2v4oIq00Ll1XnhdNpzkGITcRi3O3fzOVFZ5RZCMT7ie5zi4FK8RVineQtPfMq5MhEwrijEr7iqxRUcLoV5qQL7YZZiFjgYdwuzV%2FvIdnI5EfKGlZW7UFML%2F7Ic2PvonbGkebaeqOxb4ijI4rAyKK6WlPx%2B3R5soY0WFCUbCNOv5Vso%2FKrprUQM6hif72dGS%2Fq2RgpQt2BxKrSaOl4yJxb8Z7TCjXETIE1%2Bq4ImMaPlIXAGB0Zj2ttj8%2FfrwdAUtR8E%2BNK2U6hqc7wTOAz3CFTv8dec6PLmELeJx%2BQUpQHVwHw%2FuLf9dJWESFrPBgK8S2%2BQUu5fwNKlCGupopsi7o2Fri325BwV4yPcOWOgzt1mn0gJCzjheqDKlM1p3zqAHCy64%2BjSZ9VRAjL6m65LMMef%2BMQGOqUBH7nWwuB36VPpa%2FXSACBUCzfpgqe3G6%2BlTHmkdoM163V93ze5F4yvY3YBjSqWN2jsUscC%2Fj%2FrqUbQ%2Bee3dTGCU2BQPXQUDSxlVg40Xx9S812CK%2BU0L%2B9XovDzbolA8SYXBiVImXsvd6bHb4D9Kq5V6JrgO%2BpPhSu2wRG9dc%2BkjP%2Fhx03irBQclZmQIUUkM0JV7MSPQ2Zo8iwy3SmfWX91lEsM5Azg&X-Amz-Signature=337a07543551d0b9d9118a5fc003f7466b8864ad97afa6f25999055de1c455c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZVDPJQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCcdavQO0pFBaX5QYbzat8hVp5BT1saP5W4h6n4bak3gAIgZ6jqgHshZZE1EaDXs78aEb3cmZ%2B%2FmPvLvzBY8sGB5PAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD4BO9ohRPU5wbbruSrcAxRZsl1TQOsTSYpMB0ioKcFv4PlPbFyo6iZza8i1jggFG4PGIGmajhHLbfNzBiIyBslu3tzjeIP%2BUEfOFy5UfXP1pqVmuKz3z2v%2BZu5KdIlHnp5Oi0LYI3HBoAnb9gcVFo2lAcevMyNvb%2FuRIOCUsHHziMacVbygqPH%2BvMtBxyAls8SCzaZc9BuzRSlyAZtI6skCTD4T2FJlkfCQaWyo1fV%2BzFGvGA0E0vV6xwaBbb2v4oIq00Ll1XnhdNpzkGITcRi3O3fzOVFZ5RZCMT7ie5zi4FK8RVineQtPfMq5MhEwrijEr7iqxRUcLoV5qQL7YZZiFjgYdwuzV%2FvIdnI5EfKGlZW7UFML%2F7Ic2PvonbGkebaeqOxb4ijI4rAyKK6WlPx%2B3R5soY0WFCUbCNOv5Vso%2FKrprUQM6hif72dGS%2Fq2RgpQt2BxKrSaOl4yJxb8Z7TCjXETIE1%2Bq4ImMaPlIXAGB0Zj2ttj8%2FfrwdAUtR8E%2BNK2U6hqc7wTOAz3CFTv8dec6PLmELeJx%2BQUpQHVwHw%2FuLf9dJWESFrPBgK8S2%2BQUu5fwNKlCGupopsi7o2Fri325BwV4yPcOWOgzt1mn0gJCzjheqDKlM1p3zqAHCy64%2BjSZ9VRAjL6m65LMMef%2BMQGOqUBH7nWwuB36VPpa%2FXSACBUCzfpgqe3G6%2BlTHmkdoM163V93ze5F4yvY3YBjSqWN2jsUscC%2Fj%2FrqUbQ%2Bee3dTGCU2BQPXQUDSxlVg40Xx9S812CK%2BU0L%2B9XovDzbolA8SYXBiVImXsvd6bHb4D9Kq5V6JrgO%2BpPhSu2wRG9dc%2BkjP%2Fhx03irBQclZmQIUUkM0JV7MSPQ2Zo8iwy3SmfWX91lEsM5Azg&X-Amz-Signature=979fc7f810494835b947a4521537112c57ef74ce13e1a6ce665df2c1a4c18172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZVDPJQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCcdavQO0pFBaX5QYbzat8hVp5BT1saP5W4h6n4bak3gAIgZ6jqgHshZZE1EaDXs78aEb3cmZ%2B%2FmPvLvzBY8sGB5PAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD4BO9ohRPU5wbbruSrcAxRZsl1TQOsTSYpMB0ioKcFv4PlPbFyo6iZza8i1jggFG4PGIGmajhHLbfNzBiIyBslu3tzjeIP%2BUEfOFy5UfXP1pqVmuKz3z2v%2BZu5KdIlHnp5Oi0LYI3HBoAnb9gcVFo2lAcevMyNvb%2FuRIOCUsHHziMacVbygqPH%2BvMtBxyAls8SCzaZc9BuzRSlyAZtI6skCTD4T2FJlkfCQaWyo1fV%2BzFGvGA0E0vV6xwaBbb2v4oIq00Ll1XnhdNpzkGITcRi3O3fzOVFZ5RZCMT7ie5zi4FK8RVineQtPfMq5MhEwrijEr7iqxRUcLoV5qQL7YZZiFjgYdwuzV%2FvIdnI5EfKGlZW7UFML%2F7Ic2PvonbGkebaeqOxb4ijI4rAyKK6WlPx%2B3R5soY0WFCUbCNOv5Vso%2FKrprUQM6hif72dGS%2Fq2RgpQt2BxKrSaOl4yJxb8Z7TCjXETIE1%2Bq4ImMaPlIXAGB0Zj2ttj8%2FfrwdAUtR8E%2BNK2U6hqc7wTOAz3CFTv8dec6PLmELeJx%2BQUpQHVwHw%2FuLf9dJWESFrPBgK8S2%2BQUu5fwNKlCGupopsi7o2Fri325BwV4yPcOWOgzt1mn0gJCzjheqDKlM1p3zqAHCy64%2BjSZ9VRAjL6m65LMMef%2BMQGOqUBH7nWwuB36VPpa%2FXSACBUCzfpgqe3G6%2BlTHmkdoM163V93ze5F4yvY3YBjSqWN2jsUscC%2Fj%2FrqUbQ%2Bee3dTGCU2BQPXQUDSxlVg40Xx9S812CK%2BU0L%2B9XovDzbolA8SYXBiVImXsvd6bHb4D9Kq5V6JrgO%2BpPhSu2wRG9dc%2BkjP%2Fhx03irBQclZmQIUUkM0JV7MSPQ2Zo8iwy3SmfWX91lEsM5Azg&X-Amz-Signature=756ae75d4b74a0f8638068dae6b969ac9afb63a3b598104f449723dbe5e5d3a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZVDPJQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCcdavQO0pFBaX5QYbzat8hVp5BT1saP5W4h6n4bak3gAIgZ6jqgHshZZE1EaDXs78aEb3cmZ%2B%2FmPvLvzBY8sGB5PAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD4BO9ohRPU5wbbruSrcAxRZsl1TQOsTSYpMB0ioKcFv4PlPbFyo6iZza8i1jggFG4PGIGmajhHLbfNzBiIyBslu3tzjeIP%2BUEfOFy5UfXP1pqVmuKz3z2v%2BZu5KdIlHnp5Oi0LYI3HBoAnb9gcVFo2lAcevMyNvb%2FuRIOCUsHHziMacVbygqPH%2BvMtBxyAls8SCzaZc9BuzRSlyAZtI6skCTD4T2FJlkfCQaWyo1fV%2BzFGvGA0E0vV6xwaBbb2v4oIq00Ll1XnhdNpzkGITcRi3O3fzOVFZ5RZCMT7ie5zi4FK8RVineQtPfMq5MhEwrijEr7iqxRUcLoV5qQL7YZZiFjgYdwuzV%2FvIdnI5EfKGlZW7UFML%2F7Ic2PvonbGkebaeqOxb4ijI4rAyKK6WlPx%2B3R5soY0WFCUbCNOv5Vso%2FKrprUQM6hif72dGS%2Fq2RgpQt2BxKrSaOl4yJxb8Z7TCjXETIE1%2Bq4ImMaPlIXAGB0Zj2ttj8%2FfrwdAUtR8E%2BNK2U6hqc7wTOAz3CFTv8dec6PLmELeJx%2BQUpQHVwHw%2FuLf9dJWESFrPBgK8S2%2BQUu5fwNKlCGupopsi7o2Fri325BwV4yPcOWOgzt1mn0gJCzjheqDKlM1p3zqAHCy64%2BjSZ9VRAjL6m65LMMef%2BMQGOqUBH7nWwuB36VPpa%2FXSACBUCzfpgqe3G6%2BlTHmkdoM163V93ze5F4yvY3YBjSqWN2jsUscC%2Fj%2FrqUbQ%2Bee3dTGCU2BQPXQUDSxlVg40Xx9S812CK%2BU0L%2B9XovDzbolA8SYXBiVImXsvd6bHb4D9Kq5V6JrgO%2BpPhSu2wRG9dc%2BkjP%2Fhx03irBQclZmQIUUkM0JV7MSPQ2Zo8iwy3SmfWX91lEsM5Azg&X-Amz-Signature=4dd81f0c82bb7f5a90db0a12a49aaf002fb49896f8a3250b80b70512a4991427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZVDPJQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCcdavQO0pFBaX5QYbzat8hVp5BT1saP5W4h6n4bak3gAIgZ6jqgHshZZE1EaDXs78aEb3cmZ%2B%2FmPvLvzBY8sGB5PAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD4BO9ohRPU5wbbruSrcAxRZsl1TQOsTSYpMB0ioKcFv4PlPbFyo6iZza8i1jggFG4PGIGmajhHLbfNzBiIyBslu3tzjeIP%2BUEfOFy5UfXP1pqVmuKz3z2v%2BZu5KdIlHnp5Oi0LYI3HBoAnb9gcVFo2lAcevMyNvb%2FuRIOCUsHHziMacVbygqPH%2BvMtBxyAls8SCzaZc9BuzRSlyAZtI6skCTD4T2FJlkfCQaWyo1fV%2BzFGvGA0E0vV6xwaBbb2v4oIq00Ll1XnhdNpzkGITcRi3O3fzOVFZ5RZCMT7ie5zi4FK8RVineQtPfMq5MhEwrijEr7iqxRUcLoV5qQL7YZZiFjgYdwuzV%2FvIdnI5EfKGlZW7UFML%2F7Ic2PvonbGkebaeqOxb4ijI4rAyKK6WlPx%2B3R5soY0WFCUbCNOv5Vso%2FKrprUQM6hif72dGS%2Fq2RgpQt2BxKrSaOl4yJxb8Z7TCjXETIE1%2Bq4ImMaPlIXAGB0Zj2ttj8%2FfrwdAUtR8E%2BNK2U6hqc7wTOAz3CFTv8dec6PLmELeJx%2BQUpQHVwHw%2FuLf9dJWESFrPBgK8S2%2BQUu5fwNKlCGupopsi7o2Fri325BwV4yPcOWOgzt1mn0gJCzjheqDKlM1p3zqAHCy64%2BjSZ9VRAjL6m65LMMef%2BMQGOqUBH7nWwuB36VPpa%2FXSACBUCzfpgqe3G6%2BlTHmkdoM163V93ze5F4yvY3YBjSqWN2jsUscC%2Fj%2FrqUbQ%2Bee3dTGCU2BQPXQUDSxlVg40Xx9S812CK%2BU0L%2B9XovDzbolA8SYXBiVImXsvd6bHb4D9Kq5V6JrgO%2BpPhSu2wRG9dc%2BkjP%2Fhx03irBQclZmQIUUkM0JV7MSPQ2Zo8iwy3SmfWX91lEsM5Azg&X-Amz-Signature=64f9c3747f3295fc75eea0715223226888f9a90dcaeb93e0d9735b699dabb306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZVDPJQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCcdavQO0pFBaX5QYbzat8hVp5BT1saP5W4h6n4bak3gAIgZ6jqgHshZZE1EaDXs78aEb3cmZ%2B%2FmPvLvzBY8sGB5PAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD4BO9ohRPU5wbbruSrcAxRZsl1TQOsTSYpMB0ioKcFv4PlPbFyo6iZza8i1jggFG4PGIGmajhHLbfNzBiIyBslu3tzjeIP%2BUEfOFy5UfXP1pqVmuKz3z2v%2BZu5KdIlHnp5Oi0LYI3HBoAnb9gcVFo2lAcevMyNvb%2FuRIOCUsHHziMacVbygqPH%2BvMtBxyAls8SCzaZc9BuzRSlyAZtI6skCTD4T2FJlkfCQaWyo1fV%2BzFGvGA0E0vV6xwaBbb2v4oIq00Ll1XnhdNpzkGITcRi3O3fzOVFZ5RZCMT7ie5zi4FK8RVineQtPfMq5MhEwrijEr7iqxRUcLoV5qQL7YZZiFjgYdwuzV%2FvIdnI5EfKGlZW7UFML%2F7Ic2PvonbGkebaeqOxb4ijI4rAyKK6WlPx%2B3R5soY0WFCUbCNOv5Vso%2FKrprUQM6hif72dGS%2Fq2RgpQt2BxKrSaOl4yJxb8Z7TCjXETIE1%2Bq4ImMaPlIXAGB0Zj2ttj8%2FfrwdAUtR8E%2BNK2U6hqc7wTOAz3CFTv8dec6PLmELeJx%2BQUpQHVwHw%2FuLf9dJWESFrPBgK8S2%2BQUu5fwNKlCGupopsi7o2Fri325BwV4yPcOWOgzt1mn0gJCzjheqDKlM1p3zqAHCy64%2BjSZ9VRAjL6m65LMMef%2BMQGOqUBH7nWwuB36VPpa%2FXSACBUCzfpgqe3G6%2BlTHmkdoM163V93ze5F4yvY3YBjSqWN2jsUscC%2Fj%2FrqUbQ%2Bee3dTGCU2BQPXQUDSxlVg40Xx9S812CK%2BU0L%2B9XovDzbolA8SYXBiVImXsvd6bHb4D9Kq5V6JrgO%2BpPhSu2wRG9dc%2BkjP%2Fhx03irBQclZmQIUUkM0JV7MSPQ2Zo8iwy3SmfWX91lEsM5Azg&X-Amz-Signature=a544c0593e998f7d92e1a6cc9c5960ef3c536c57b510983655b61210a2f6c804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZVDPJQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCcdavQO0pFBaX5QYbzat8hVp5BT1saP5W4h6n4bak3gAIgZ6jqgHshZZE1EaDXs78aEb3cmZ%2B%2FmPvLvzBY8sGB5PAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD4BO9ohRPU5wbbruSrcAxRZsl1TQOsTSYpMB0ioKcFv4PlPbFyo6iZza8i1jggFG4PGIGmajhHLbfNzBiIyBslu3tzjeIP%2BUEfOFy5UfXP1pqVmuKz3z2v%2BZu5KdIlHnp5Oi0LYI3HBoAnb9gcVFo2lAcevMyNvb%2FuRIOCUsHHziMacVbygqPH%2BvMtBxyAls8SCzaZc9BuzRSlyAZtI6skCTD4T2FJlkfCQaWyo1fV%2BzFGvGA0E0vV6xwaBbb2v4oIq00Ll1XnhdNpzkGITcRi3O3fzOVFZ5RZCMT7ie5zi4FK8RVineQtPfMq5MhEwrijEr7iqxRUcLoV5qQL7YZZiFjgYdwuzV%2FvIdnI5EfKGlZW7UFML%2F7Ic2PvonbGkebaeqOxb4ijI4rAyKK6WlPx%2B3R5soY0WFCUbCNOv5Vso%2FKrprUQM6hif72dGS%2Fq2RgpQt2BxKrSaOl4yJxb8Z7TCjXETIE1%2Bq4ImMaPlIXAGB0Zj2ttj8%2FfrwdAUtR8E%2BNK2U6hqc7wTOAz3CFTv8dec6PLmELeJx%2BQUpQHVwHw%2FuLf9dJWESFrPBgK8S2%2BQUu5fwNKlCGupopsi7o2Fri325BwV4yPcOWOgzt1mn0gJCzjheqDKlM1p3zqAHCy64%2BjSZ9VRAjL6m65LMMef%2BMQGOqUBH7nWwuB36VPpa%2FXSACBUCzfpgqe3G6%2BlTHmkdoM163V93ze5F4yvY3YBjSqWN2jsUscC%2Fj%2FrqUbQ%2Bee3dTGCU2BQPXQUDSxlVg40Xx9S812CK%2BU0L%2B9XovDzbolA8SYXBiVImXsvd6bHb4D9Kq5V6JrgO%2BpPhSu2wRG9dc%2BkjP%2Fhx03irBQclZmQIUUkM0JV7MSPQ2Zo8iwy3SmfWX91lEsM5Azg&X-Amz-Signature=31155a1454402f9da28ae618a238cb0cac7017426313654a509da16d80723c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
