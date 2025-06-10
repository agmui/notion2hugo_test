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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5AFRZ2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq7kYIb5koHUaDPhxr6xyX0%2FOz87m2g8OU5Dv2h%2FYLKAiEA%2FjxaxJ7bz3pMnRC1BVhurMV7%2B7X%2Foi7A6jag%2FxAYnK4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMSB8qc712P4dkD7CrcA24rflaHfjQenno5z%2BSK88bU5%2FmFVajhwsLXVmoR6z57Y%2FEJvpH07MY1sojiq%2BK3RxiNCIouvdSDfnLN1Yw%2B7qrfTw8urhpFklqpgyc9m%2BNGmea6xZMyr91ixN%2B16tkAT%2F6RuuynHTbzM5XCIfK8fI45JG99b%2FD%2FnVqxZEc062P9lkP1ESaAIrk8ug%2FaPq9u8tDNa8GDbFhOjlNeqPwerUwMb3c%2B1BmLT5FY0fLXfOJ2L6gkNj0LQsKTWMb3yAhJoiunFgs6fGTf6QMFo1qqipKfZdDYWEfCQiAOJ0OB8lvaS78pL2camrjUEEyzP0Q%2Bi6Z6Xdpt7LzRjRZQAjbeIvIKQBq6WiD7l1fbCNIzVp%2BGwsgs9y3Z2pcqYzeGGL1vjvVblJRWW%2FVrx%2BKHYMT8sVd2Sk4%2B%2FU8Iq%2Bo1P%2FFRGu9DcfQZSZAMrRxN6dMmS%2FyYwmvjWufFZcwHG%2FIWe6%2FuCggrLxWtxBAljibNf9brDxjHvkn8oZY0jNGo%2B8gtdYafcAhSupMAaikN%2B2rmNxcw7IaV9TWdm4eNygA24spJMWoDJaxXxUTz5rMi%2BIbgHdStZOmBO64vtDPbQfDLoMPTZWN9mahvwMrjrn7HdZcEqZX1K%2FGVfmmZhkp7PM3nMO7YnsIGOqUB12ewEv2ZHQzVKYR19%2Fk3FLCj8wpPB5tJgWHTTTJeK1Btep%2FvtVXvTXvVWWurECg%2FWlL07EPb6Lh5sVt5u4QgJqiI6o0W8auBJQ7VoopjR86t4hnbf%2B%2BUfNVLOlO%2F7%2FinKob9JEgYI2yYIEz58a61v6%2BJXUXdP61H1BqCEV%2FSFViG%2BWUQZG4GDNEFqydqDckR42G4Wpl0OMKixF0ifNir3uFclqE2&X-Amz-Signature=7c80ab2f3d494582ce93ab1de319f9ce4cded36d0b43dea3f4083f7bf5852913&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5AFRZ2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq7kYIb5koHUaDPhxr6xyX0%2FOz87m2g8OU5Dv2h%2FYLKAiEA%2FjxaxJ7bz3pMnRC1BVhurMV7%2B7X%2Foi7A6jag%2FxAYnK4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMSB8qc712P4dkD7CrcA24rflaHfjQenno5z%2BSK88bU5%2FmFVajhwsLXVmoR6z57Y%2FEJvpH07MY1sojiq%2BK3RxiNCIouvdSDfnLN1Yw%2B7qrfTw8urhpFklqpgyc9m%2BNGmea6xZMyr91ixN%2B16tkAT%2F6RuuynHTbzM5XCIfK8fI45JG99b%2FD%2FnVqxZEc062P9lkP1ESaAIrk8ug%2FaPq9u8tDNa8GDbFhOjlNeqPwerUwMb3c%2B1BmLT5FY0fLXfOJ2L6gkNj0LQsKTWMb3yAhJoiunFgs6fGTf6QMFo1qqipKfZdDYWEfCQiAOJ0OB8lvaS78pL2camrjUEEyzP0Q%2Bi6Z6Xdpt7LzRjRZQAjbeIvIKQBq6WiD7l1fbCNIzVp%2BGwsgs9y3Z2pcqYzeGGL1vjvVblJRWW%2FVrx%2BKHYMT8sVd2Sk4%2B%2FU8Iq%2Bo1P%2FFRGu9DcfQZSZAMrRxN6dMmS%2FyYwmvjWufFZcwHG%2FIWe6%2FuCggrLxWtxBAljibNf9brDxjHvkn8oZY0jNGo%2B8gtdYafcAhSupMAaikN%2B2rmNxcw7IaV9TWdm4eNygA24spJMWoDJaxXxUTz5rMi%2BIbgHdStZOmBO64vtDPbQfDLoMPTZWN9mahvwMrjrn7HdZcEqZX1K%2FGVfmmZhkp7PM3nMO7YnsIGOqUB12ewEv2ZHQzVKYR19%2Fk3FLCj8wpPB5tJgWHTTTJeK1Btep%2FvtVXvTXvVWWurECg%2FWlL07EPb6Lh5sVt5u4QgJqiI6o0W8auBJQ7VoopjR86t4hnbf%2B%2BUfNVLOlO%2F7%2FinKob9JEgYI2yYIEz58a61v6%2BJXUXdP61H1BqCEV%2FSFViG%2BWUQZG4GDNEFqydqDckR42G4Wpl0OMKixF0ifNir3uFclqE2&X-Amz-Signature=05b18eb3482e7b11cd8f1cb5f0a113bb2270b2e8658dc98042d574be8da8b5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5AFRZ2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq7kYIb5koHUaDPhxr6xyX0%2FOz87m2g8OU5Dv2h%2FYLKAiEA%2FjxaxJ7bz3pMnRC1BVhurMV7%2B7X%2Foi7A6jag%2FxAYnK4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMSB8qc712P4dkD7CrcA24rflaHfjQenno5z%2BSK88bU5%2FmFVajhwsLXVmoR6z57Y%2FEJvpH07MY1sojiq%2BK3RxiNCIouvdSDfnLN1Yw%2B7qrfTw8urhpFklqpgyc9m%2BNGmea6xZMyr91ixN%2B16tkAT%2F6RuuynHTbzM5XCIfK8fI45JG99b%2FD%2FnVqxZEc062P9lkP1ESaAIrk8ug%2FaPq9u8tDNa8GDbFhOjlNeqPwerUwMb3c%2B1BmLT5FY0fLXfOJ2L6gkNj0LQsKTWMb3yAhJoiunFgs6fGTf6QMFo1qqipKfZdDYWEfCQiAOJ0OB8lvaS78pL2camrjUEEyzP0Q%2Bi6Z6Xdpt7LzRjRZQAjbeIvIKQBq6WiD7l1fbCNIzVp%2BGwsgs9y3Z2pcqYzeGGL1vjvVblJRWW%2FVrx%2BKHYMT8sVd2Sk4%2B%2FU8Iq%2Bo1P%2FFRGu9DcfQZSZAMrRxN6dMmS%2FyYwmvjWufFZcwHG%2FIWe6%2FuCggrLxWtxBAljibNf9brDxjHvkn8oZY0jNGo%2B8gtdYafcAhSupMAaikN%2B2rmNxcw7IaV9TWdm4eNygA24spJMWoDJaxXxUTz5rMi%2BIbgHdStZOmBO64vtDPbQfDLoMPTZWN9mahvwMrjrn7HdZcEqZX1K%2FGVfmmZhkp7PM3nMO7YnsIGOqUB12ewEv2ZHQzVKYR19%2Fk3FLCj8wpPB5tJgWHTTTJeK1Btep%2FvtVXvTXvVWWurECg%2FWlL07EPb6Lh5sVt5u4QgJqiI6o0W8auBJQ7VoopjR86t4hnbf%2B%2BUfNVLOlO%2F7%2FinKob9JEgYI2yYIEz58a61v6%2BJXUXdP61H1BqCEV%2FSFViG%2BWUQZG4GDNEFqydqDckR42G4Wpl0OMKixF0ifNir3uFclqE2&X-Amz-Signature=02c07983cd9fce984f93f157347b90d5d2949d078b0e55b0aa491930acc3928f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5AFRZ2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq7kYIb5koHUaDPhxr6xyX0%2FOz87m2g8OU5Dv2h%2FYLKAiEA%2FjxaxJ7bz3pMnRC1BVhurMV7%2B7X%2Foi7A6jag%2FxAYnK4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMSB8qc712P4dkD7CrcA24rflaHfjQenno5z%2BSK88bU5%2FmFVajhwsLXVmoR6z57Y%2FEJvpH07MY1sojiq%2BK3RxiNCIouvdSDfnLN1Yw%2B7qrfTw8urhpFklqpgyc9m%2BNGmea6xZMyr91ixN%2B16tkAT%2F6RuuynHTbzM5XCIfK8fI45JG99b%2FD%2FnVqxZEc062P9lkP1ESaAIrk8ug%2FaPq9u8tDNa8GDbFhOjlNeqPwerUwMb3c%2B1BmLT5FY0fLXfOJ2L6gkNj0LQsKTWMb3yAhJoiunFgs6fGTf6QMFo1qqipKfZdDYWEfCQiAOJ0OB8lvaS78pL2camrjUEEyzP0Q%2Bi6Z6Xdpt7LzRjRZQAjbeIvIKQBq6WiD7l1fbCNIzVp%2BGwsgs9y3Z2pcqYzeGGL1vjvVblJRWW%2FVrx%2BKHYMT8sVd2Sk4%2B%2FU8Iq%2Bo1P%2FFRGu9DcfQZSZAMrRxN6dMmS%2FyYwmvjWufFZcwHG%2FIWe6%2FuCggrLxWtxBAljibNf9brDxjHvkn8oZY0jNGo%2B8gtdYafcAhSupMAaikN%2B2rmNxcw7IaV9TWdm4eNygA24spJMWoDJaxXxUTz5rMi%2BIbgHdStZOmBO64vtDPbQfDLoMPTZWN9mahvwMrjrn7HdZcEqZX1K%2FGVfmmZhkp7PM3nMO7YnsIGOqUB12ewEv2ZHQzVKYR19%2Fk3FLCj8wpPB5tJgWHTTTJeK1Btep%2FvtVXvTXvVWWurECg%2FWlL07EPb6Lh5sVt5u4QgJqiI6o0W8auBJQ7VoopjR86t4hnbf%2B%2BUfNVLOlO%2F7%2FinKob9JEgYI2yYIEz58a61v6%2BJXUXdP61H1BqCEV%2FSFViG%2BWUQZG4GDNEFqydqDckR42G4Wpl0OMKixF0ifNir3uFclqE2&X-Amz-Signature=9051952f22053fb9591d7bdd2966863c894041ea72b8af90b9898e22a9088399&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5AFRZ2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq7kYIb5koHUaDPhxr6xyX0%2FOz87m2g8OU5Dv2h%2FYLKAiEA%2FjxaxJ7bz3pMnRC1BVhurMV7%2B7X%2Foi7A6jag%2FxAYnK4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMSB8qc712P4dkD7CrcA24rflaHfjQenno5z%2BSK88bU5%2FmFVajhwsLXVmoR6z57Y%2FEJvpH07MY1sojiq%2BK3RxiNCIouvdSDfnLN1Yw%2B7qrfTw8urhpFklqpgyc9m%2BNGmea6xZMyr91ixN%2B16tkAT%2F6RuuynHTbzM5XCIfK8fI45JG99b%2FD%2FnVqxZEc062P9lkP1ESaAIrk8ug%2FaPq9u8tDNa8GDbFhOjlNeqPwerUwMb3c%2B1BmLT5FY0fLXfOJ2L6gkNj0LQsKTWMb3yAhJoiunFgs6fGTf6QMFo1qqipKfZdDYWEfCQiAOJ0OB8lvaS78pL2camrjUEEyzP0Q%2Bi6Z6Xdpt7LzRjRZQAjbeIvIKQBq6WiD7l1fbCNIzVp%2BGwsgs9y3Z2pcqYzeGGL1vjvVblJRWW%2FVrx%2BKHYMT8sVd2Sk4%2B%2FU8Iq%2Bo1P%2FFRGu9DcfQZSZAMrRxN6dMmS%2FyYwmvjWufFZcwHG%2FIWe6%2FuCggrLxWtxBAljibNf9brDxjHvkn8oZY0jNGo%2B8gtdYafcAhSupMAaikN%2B2rmNxcw7IaV9TWdm4eNygA24spJMWoDJaxXxUTz5rMi%2BIbgHdStZOmBO64vtDPbQfDLoMPTZWN9mahvwMrjrn7HdZcEqZX1K%2FGVfmmZhkp7PM3nMO7YnsIGOqUB12ewEv2ZHQzVKYR19%2Fk3FLCj8wpPB5tJgWHTTTJeK1Btep%2FvtVXvTXvVWWurECg%2FWlL07EPb6Lh5sVt5u4QgJqiI6o0W8auBJQ7VoopjR86t4hnbf%2B%2BUfNVLOlO%2F7%2FinKob9JEgYI2yYIEz58a61v6%2BJXUXdP61H1BqCEV%2FSFViG%2BWUQZG4GDNEFqydqDckR42G4Wpl0OMKixF0ifNir3uFclqE2&X-Amz-Signature=2eaff5063b0ea391513c917b033ee105de22815561cafc539d27665c85dc3e98&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5AFRZ2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq7kYIb5koHUaDPhxr6xyX0%2FOz87m2g8OU5Dv2h%2FYLKAiEA%2FjxaxJ7bz3pMnRC1BVhurMV7%2B7X%2Foi7A6jag%2FxAYnK4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMSB8qc712P4dkD7CrcA24rflaHfjQenno5z%2BSK88bU5%2FmFVajhwsLXVmoR6z57Y%2FEJvpH07MY1sojiq%2BK3RxiNCIouvdSDfnLN1Yw%2B7qrfTw8urhpFklqpgyc9m%2BNGmea6xZMyr91ixN%2B16tkAT%2F6RuuynHTbzM5XCIfK8fI45JG99b%2FD%2FnVqxZEc062P9lkP1ESaAIrk8ug%2FaPq9u8tDNa8GDbFhOjlNeqPwerUwMb3c%2B1BmLT5FY0fLXfOJ2L6gkNj0LQsKTWMb3yAhJoiunFgs6fGTf6QMFo1qqipKfZdDYWEfCQiAOJ0OB8lvaS78pL2camrjUEEyzP0Q%2Bi6Z6Xdpt7LzRjRZQAjbeIvIKQBq6WiD7l1fbCNIzVp%2BGwsgs9y3Z2pcqYzeGGL1vjvVblJRWW%2FVrx%2BKHYMT8sVd2Sk4%2B%2FU8Iq%2Bo1P%2FFRGu9DcfQZSZAMrRxN6dMmS%2FyYwmvjWufFZcwHG%2FIWe6%2FuCggrLxWtxBAljibNf9brDxjHvkn8oZY0jNGo%2B8gtdYafcAhSupMAaikN%2B2rmNxcw7IaV9TWdm4eNygA24spJMWoDJaxXxUTz5rMi%2BIbgHdStZOmBO64vtDPbQfDLoMPTZWN9mahvwMrjrn7HdZcEqZX1K%2FGVfmmZhkp7PM3nMO7YnsIGOqUB12ewEv2ZHQzVKYR19%2Fk3FLCj8wpPB5tJgWHTTTJeK1Btep%2FvtVXvTXvVWWurECg%2FWlL07EPb6Lh5sVt5u4QgJqiI6o0W8auBJQ7VoopjR86t4hnbf%2B%2BUfNVLOlO%2F7%2FinKob9JEgYI2yYIEz58a61v6%2BJXUXdP61H1BqCEV%2FSFViG%2BWUQZG4GDNEFqydqDckR42G4Wpl0OMKixF0ifNir3uFclqE2&X-Amz-Signature=03de356796483046166f67613085f957228debd7fb5e7d1a8888f09dfbc684b3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5AFRZ2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq7kYIb5koHUaDPhxr6xyX0%2FOz87m2g8OU5Dv2h%2FYLKAiEA%2FjxaxJ7bz3pMnRC1BVhurMV7%2B7X%2Foi7A6jag%2FxAYnK4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMSB8qc712P4dkD7CrcA24rflaHfjQenno5z%2BSK88bU5%2FmFVajhwsLXVmoR6z57Y%2FEJvpH07MY1sojiq%2BK3RxiNCIouvdSDfnLN1Yw%2B7qrfTw8urhpFklqpgyc9m%2BNGmea6xZMyr91ixN%2B16tkAT%2F6RuuynHTbzM5XCIfK8fI45JG99b%2FD%2FnVqxZEc062P9lkP1ESaAIrk8ug%2FaPq9u8tDNa8GDbFhOjlNeqPwerUwMb3c%2B1BmLT5FY0fLXfOJ2L6gkNj0LQsKTWMb3yAhJoiunFgs6fGTf6QMFo1qqipKfZdDYWEfCQiAOJ0OB8lvaS78pL2camrjUEEyzP0Q%2Bi6Z6Xdpt7LzRjRZQAjbeIvIKQBq6WiD7l1fbCNIzVp%2BGwsgs9y3Z2pcqYzeGGL1vjvVblJRWW%2FVrx%2BKHYMT8sVd2Sk4%2B%2FU8Iq%2Bo1P%2FFRGu9DcfQZSZAMrRxN6dMmS%2FyYwmvjWufFZcwHG%2FIWe6%2FuCggrLxWtxBAljibNf9brDxjHvkn8oZY0jNGo%2B8gtdYafcAhSupMAaikN%2B2rmNxcw7IaV9TWdm4eNygA24spJMWoDJaxXxUTz5rMi%2BIbgHdStZOmBO64vtDPbQfDLoMPTZWN9mahvwMrjrn7HdZcEqZX1K%2FGVfmmZhkp7PM3nMO7YnsIGOqUB12ewEv2ZHQzVKYR19%2Fk3FLCj8wpPB5tJgWHTTTJeK1Btep%2FvtVXvTXvVWWurECg%2FWlL07EPb6Lh5sVt5u4QgJqiI6o0W8auBJQ7VoopjR86t4hnbf%2B%2BUfNVLOlO%2F7%2FinKob9JEgYI2yYIEz58a61v6%2BJXUXdP61H1BqCEV%2FSFViG%2BWUQZG4GDNEFqydqDckR42G4Wpl0OMKixF0ifNir3uFclqE2&X-Amz-Signature=e78d666b973d1dd79f7014633be7e2cac2a31b8224f6d4debf3e9427ffbf5379&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
