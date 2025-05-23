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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZ6FLP3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHGrXZSKGPuW6ZAz0rLdna6bKmolUeFl%2B%2BuWQdm1Ty4SAiACThzvcN32c%2FLFor%2FUqVMEC1QGIWUq8jXDBrfk%2Ff3xByqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6nabt8C9JvgW7HJKtwDzIND27ydHeBOBjW%2Fbw1BINlZNLNfMXxzRUxLQIPRi1Z2YOeC8vWlGQZi2XiPD%2BKhze57E1PgxQjkr9hqyWPskj%2BjK39iBV5LjSzCP3862sUFpznbCdMB3ZzVQY4WVGahqNQmD0GnB3K0XEH5bT%2BX15sJIlMauGYMywJBfNx3R2zFiQ4nmWI3jfbGIabE1GVFa9AyHTwGXll7YRQHDPazP3HLubooSYOQNbNYwVjMya%2FGkq%2Fk8CTr6AmG8yMmGIs%2FYGRY4qzhJnOrK9LgquQbiFsjvmTS1w%2FAa%2BYPKQbhCQFd5RfImLAhHVqSCipDP4FJ%2F0DnjWJd2scjy6sH5jJfQWm%2B9ZeuutZ6bstEvYT%2BzgRH3f3g5185iY%2F4aMpP9q6994TCpSm%2Fk0oZZrhQKFOzsZbab9XHbuWvy3LDs1IVJWwfRbErfbfteRPVI5jImvZOtSX3xfdtomJHvUBmXrvwSDHHYwB%2BBtpYH6m5lLcuWav5LF3bWUBykbU9cRwmI7%2FhSq5KhMqKC7heullOFsFa%2FGUYOVy3sgkLXLKeJwPAOuFfcn5bZJzp07l%2B%2FwNiJs62KaUAk44L5%2B6VrwWlm7DKE1gu93GFq6Mr3x2Cl4Ml8cRXGVRcVZQ3f6ha9p0w7OrAwQY6pgG97BkkqPNv8Iy3GCz6CjVpgL4PU5wmAL761ZWypVYQTseXEIA13ghwWWFG25CHxjGrWxOQeUAhpd%2FqRzMHBHZZim5n0ZMLydnW4Wj7un4yqHNuVggHO%2FX2%2BwZVcM5CnOPTOkt5wBi3UPE6m2FYk2FK3UCaNS6cHNf0LsXLWi6ZWFYIvZmui1srUo2lRwsWw2aNdkSDgT3FOIDG6BIL6lGmL9qyhNh6&X-Amz-Signature=99770258c970b7e5798f19db99250536f4633f327f0f388deb88e51d03f8390f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZ6FLP3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHGrXZSKGPuW6ZAz0rLdna6bKmolUeFl%2B%2BuWQdm1Ty4SAiACThzvcN32c%2FLFor%2FUqVMEC1QGIWUq8jXDBrfk%2Ff3xByqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6nabt8C9JvgW7HJKtwDzIND27ydHeBOBjW%2Fbw1BINlZNLNfMXxzRUxLQIPRi1Z2YOeC8vWlGQZi2XiPD%2BKhze57E1PgxQjkr9hqyWPskj%2BjK39iBV5LjSzCP3862sUFpznbCdMB3ZzVQY4WVGahqNQmD0GnB3K0XEH5bT%2BX15sJIlMauGYMywJBfNx3R2zFiQ4nmWI3jfbGIabE1GVFa9AyHTwGXll7YRQHDPazP3HLubooSYOQNbNYwVjMya%2FGkq%2Fk8CTr6AmG8yMmGIs%2FYGRY4qzhJnOrK9LgquQbiFsjvmTS1w%2FAa%2BYPKQbhCQFd5RfImLAhHVqSCipDP4FJ%2F0DnjWJd2scjy6sH5jJfQWm%2B9ZeuutZ6bstEvYT%2BzgRH3f3g5185iY%2F4aMpP9q6994TCpSm%2Fk0oZZrhQKFOzsZbab9XHbuWvy3LDs1IVJWwfRbErfbfteRPVI5jImvZOtSX3xfdtomJHvUBmXrvwSDHHYwB%2BBtpYH6m5lLcuWav5LF3bWUBykbU9cRwmI7%2FhSq5KhMqKC7heullOFsFa%2FGUYOVy3sgkLXLKeJwPAOuFfcn5bZJzp07l%2B%2FwNiJs62KaUAk44L5%2B6VrwWlm7DKE1gu93GFq6Mr3x2Cl4Ml8cRXGVRcVZQ3f6ha9p0w7OrAwQY6pgG97BkkqPNv8Iy3GCz6CjVpgL4PU5wmAL761ZWypVYQTseXEIA13ghwWWFG25CHxjGrWxOQeUAhpd%2FqRzMHBHZZim5n0ZMLydnW4Wj7un4yqHNuVggHO%2FX2%2BwZVcM5CnOPTOkt5wBi3UPE6m2FYk2FK3UCaNS6cHNf0LsXLWi6ZWFYIvZmui1srUo2lRwsWw2aNdkSDgT3FOIDG6BIL6lGmL9qyhNh6&X-Amz-Signature=704dbcbc3167832b8af75f2b24c49c2231cbb70d3a72117e86c492c1c98820df&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZ6FLP3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHGrXZSKGPuW6ZAz0rLdna6bKmolUeFl%2B%2BuWQdm1Ty4SAiACThzvcN32c%2FLFor%2FUqVMEC1QGIWUq8jXDBrfk%2Ff3xByqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6nabt8C9JvgW7HJKtwDzIND27ydHeBOBjW%2Fbw1BINlZNLNfMXxzRUxLQIPRi1Z2YOeC8vWlGQZi2XiPD%2BKhze57E1PgxQjkr9hqyWPskj%2BjK39iBV5LjSzCP3862sUFpznbCdMB3ZzVQY4WVGahqNQmD0GnB3K0XEH5bT%2BX15sJIlMauGYMywJBfNx3R2zFiQ4nmWI3jfbGIabE1GVFa9AyHTwGXll7YRQHDPazP3HLubooSYOQNbNYwVjMya%2FGkq%2Fk8CTr6AmG8yMmGIs%2FYGRY4qzhJnOrK9LgquQbiFsjvmTS1w%2FAa%2BYPKQbhCQFd5RfImLAhHVqSCipDP4FJ%2F0DnjWJd2scjy6sH5jJfQWm%2B9ZeuutZ6bstEvYT%2BzgRH3f3g5185iY%2F4aMpP9q6994TCpSm%2Fk0oZZrhQKFOzsZbab9XHbuWvy3LDs1IVJWwfRbErfbfteRPVI5jImvZOtSX3xfdtomJHvUBmXrvwSDHHYwB%2BBtpYH6m5lLcuWav5LF3bWUBykbU9cRwmI7%2FhSq5KhMqKC7heullOFsFa%2FGUYOVy3sgkLXLKeJwPAOuFfcn5bZJzp07l%2B%2FwNiJs62KaUAk44L5%2B6VrwWlm7DKE1gu93GFq6Mr3x2Cl4Ml8cRXGVRcVZQ3f6ha9p0w7OrAwQY6pgG97BkkqPNv8Iy3GCz6CjVpgL4PU5wmAL761ZWypVYQTseXEIA13ghwWWFG25CHxjGrWxOQeUAhpd%2FqRzMHBHZZim5n0ZMLydnW4Wj7un4yqHNuVggHO%2FX2%2BwZVcM5CnOPTOkt5wBi3UPE6m2FYk2FK3UCaNS6cHNf0LsXLWi6ZWFYIvZmui1srUo2lRwsWw2aNdkSDgT3FOIDG6BIL6lGmL9qyhNh6&X-Amz-Signature=531787f4cbdcd84bf289adec063f55db9428029a9ab15a2d600d079579448208&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZ6FLP3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHGrXZSKGPuW6ZAz0rLdna6bKmolUeFl%2B%2BuWQdm1Ty4SAiACThzvcN32c%2FLFor%2FUqVMEC1QGIWUq8jXDBrfk%2Ff3xByqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6nabt8C9JvgW7HJKtwDzIND27ydHeBOBjW%2Fbw1BINlZNLNfMXxzRUxLQIPRi1Z2YOeC8vWlGQZi2XiPD%2BKhze57E1PgxQjkr9hqyWPskj%2BjK39iBV5LjSzCP3862sUFpznbCdMB3ZzVQY4WVGahqNQmD0GnB3K0XEH5bT%2BX15sJIlMauGYMywJBfNx3R2zFiQ4nmWI3jfbGIabE1GVFa9AyHTwGXll7YRQHDPazP3HLubooSYOQNbNYwVjMya%2FGkq%2Fk8CTr6AmG8yMmGIs%2FYGRY4qzhJnOrK9LgquQbiFsjvmTS1w%2FAa%2BYPKQbhCQFd5RfImLAhHVqSCipDP4FJ%2F0DnjWJd2scjy6sH5jJfQWm%2B9ZeuutZ6bstEvYT%2BzgRH3f3g5185iY%2F4aMpP9q6994TCpSm%2Fk0oZZrhQKFOzsZbab9XHbuWvy3LDs1IVJWwfRbErfbfteRPVI5jImvZOtSX3xfdtomJHvUBmXrvwSDHHYwB%2BBtpYH6m5lLcuWav5LF3bWUBykbU9cRwmI7%2FhSq5KhMqKC7heullOFsFa%2FGUYOVy3sgkLXLKeJwPAOuFfcn5bZJzp07l%2B%2FwNiJs62KaUAk44L5%2B6VrwWlm7DKE1gu93GFq6Mr3x2Cl4Ml8cRXGVRcVZQ3f6ha9p0w7OrAwQY6pgG97BkkqPNv8Iy3GCz6CjVpgL4PU5wmAL761ZWypVYQTseXEIA13ghwWWFG25CHxjGrWxOQeUAhpd%2FqRzMHBHZZim5n0ZMLydnW4Wj7un4yqHNuVggHO%2FX2%2BwZVcM5CnOPTOkt5wBi3UPE6m2FYk2FK3UCaNS6cHNf0LsXLWi6ZWFYIvZmui1srUo2lRwsWw2aNdkSDgT3FOIDG6BIL6lGmL9qyhNh6&X-Amz-Signature=4bde26d7d410e675a8a755c6b3c34c3807ea6fa370c1ab2c6680dd70725d92ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZ6FLP3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHGrXZSKGPuW6ZAz0rLdna6bKmolUeFl%2B%2BuWQdm1Ty4SAiACThzvcN32c%2FLFor%2FUqVMEC1QGIWUq8jXDBrfk%2Ff3xByqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6nabt8C9JvgW7HJKtwDzIND27ydHeBOBjW%2Fbw1BINlZNLNfMXxzRUxLQIPRi1Z2YOeC8vWlGQZi2XiPD%2BKhze57E1PgxQjkr9hqyWPskj%2BjK39iBV5LjSzCP3862sUFpznbCdMB3ZzVQY4WVGahqNQmD0GnB3K0XEH5bT%2BX15sJIlMauGYMywJBfNx3R2zFiQ4nmWI3jfbGIabE1GVFa9AyHTwGXll7YRQHDPazP3HLubooSYOQNbNYwVjMya%2FGkq%2Fk8CTr6AmG8yMmGIs%2FYGRY4qzhJnOrK9LgquQbiFsjvmTS1w%2FAa%2BYPKQbhCQFd5RfImLAhHVqSCipDP4FJ%2F0DnjWJd2scjy6sH5jJfQWm%2B9ZeuutZ6bstEvYT%2BzgRH3f3g5185iY%2F4aMpP9q6994TCpSm%2Fk0oZZrhQKFOzsZbab9XHbuWvy3LDs1IVJWwfRbErfbfteRPVI5jImvZOtSX3xfdtomJHvUBmXrvwSDHHYwB%2BBtpYH6m5lLcuWav5LF3bWUBykbU9cRwmI7%2FhSq5KhMqKC7heullOFsFa%2FGUYOVy3sgkLXLKeJwPAOuFfcn5bZJzp07l%2B%2FwNiJs62KaUAk44L5%2B6VrwWlm7DKE1gu93GFq6Mr3x2Cl4Ml8cRXGVRcVZQ3f6ha9p0w7OrAwQY6pgG97BkkqPNv8Iy3GCz6CjVpgL4PU5wmAL761ZWypVYQTseXEIA13ghwWWFG25CHxjGrWxOQeUAhpd%2FqRzMHBHZZim5n0ZMLydnW4Wj7un4yqHNuVggHO%2FX2%2BwZVcM5CnOPTOkt5wBi3UPE6m2FYk2FK3UCaNS6cHNf0LsXLWi6ZWFYIvZmui1srUo2lRwsWw2aNdkSDgT3FOIDG6BIL6lGmL9qyhNh6&X-Amz-Signature=2fea3a02cd40552c2e983109f0c485097b2b859a6530c2ad484a15143593c930&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZ6FLP3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHGrXZSKGPuW6ZAz0rLdna6bKmolUeFl%2B%2BuWQdm1Ty4SAiACThzvcN32c%2FLFor%2FUqVMEC1QGIWUq8jXDBrfk%2Ff3xByqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6nabt8C9JvgW7HJKtwDzIND27ydHeBOBjW%2Fbw1BINlZNLNfMXxzRUxLQIPRi1Z2YOeC8vWlGQZi2XiPD%2BKhze57E1PgxQjkr9hqyWPskj%2BjK39iBV5LjSzCP3862sUFpznbCdMB3ZzVQY4WVGahqNQmD0GnB3K0XEH5bT%2BX15sJIlMauGYMywJBfNx3R2zFiQ4nmWI3jfbGIabE1GVFa9AyHTwGXll7YRQHDPazP3HLubooSYOQNbNYwVjMya%2FGkq%2Fk8CTr6AmG8yMmGIs%2FYGRY4qzhJnOrK9LgquQbiFsjvmTS1w%2FAa%2BYPKQbhCQFd5RfImLAhHVqSCipDP4FJ%2F0DnjWJd2scjy6sH5jJfQWm%2B9ZeuutZ6bstEvYT%2BzgRH3f3g5185iY%2F4aMpP9q6994TCpSm%2Fk0oZZrhQKFOzsZbab9XHbuWvy3LDs1IVJWwfRbErfbfteRPVI5jImvZOtSX3xfdtomJHvUBmXrvwSDHHYwB%2BBtpYH6m5lLcuWav5LF3bWUBykbU9cRwmI7%2FhSq5KhMqKC7heullOFsFa%2FGUYOVy3sgkLXLKeJwPAOuFfcn5bZJzp07l%2B%2FwNiJs62KaUAk44L5%2B6VrwWlm7DKE1gu93GFq6Mr3x2Cl4Ml8cRXGVRcVZQ3f6ha9p0w7OrAwQY6pgG97BkkqPNv8Iy3GCz6CjVpgL4PU5wmAL761ZWypVYQTseXEIA13ghwWWFG25CHxjGrWxOQeUAhpd%2FqRzMHBHZZim5n0ZMLydnW4Wj7un4yqHNuVggHO%2FX2%2BwZVcM5CnOPTOkt5wBi3UPE6m2FYk2FK3UCaNS6cHNf0LsXLWi6ZWFYIvZmui1srUo2lRwsWw2aNdkSDgT3FOIDG6BIL6lGmL9qyhNh6&X-Amz-Signature=5234c97023b623bc00e6d03b497e35633ab884401eed0b392b38189830b4b244&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZ6FLP3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHGrXZSKGPuW6ZAz0rLdna6bKmolUeFl%2B%2BuWQdm1Ty4SAiACThzvcN32c%2FLFor%2FUqVMEC1QGIWUq8jXDBrfk%2Ff3xByqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6nabt8C9JvgW7HJKtwDzIND27ydHeBOBjW%2Fbw1BINlZNLNfMXxzRUxLQIPRi1Z2YOeC8vWlGQZi2XiPD%2BKhze57E1PgxQjkr9hqyWPskj%2BjK39iBV5LjSzCP3862sUFpznbCdMB3ZzVQY4WVGahqNQmD0GnB3K0XEH5bT%2BX15sJIlMauGYMywJBfNx3R2zFiQ4nmWI3jfbGIabE1GVFa9AyHTwGXll7YRQHDPazP3HLubooSYOQNbNYwVjMya%2FGkq%2Fk8CTr6AmG8yMmGIs%2FYGRY4qzhJnOrK9LgquQbiFsjvmTS1w%2FAa%2BYPKQbhCQFd5RfImLAhHVqSCipDP4FJ%2F0DnjWJd2scjy6sH5jJfQWm%2B9ZeuutZ6bstEvYT%2BzgRH3f3g5185iY%2F4aMpP9q6994TCpSm%2Fk0oZZrhQKFOzsZbab9XHbuWvy3LDs1IVJWwfRbErfbfteRPVI5jImvZOtSX3xfdtomJHvUBmXrvwSDHHYwB%2BBtpYH6m5lLcuWav5LF3bWUBykbU9cRwmI7%2FhSq5KhMqKC7heullOFsFa%2FGUYOVy3sgkLXLKeJwPAOuFfcn5bZJzp07l%2B%2FwNiJs62KaUAk44L5%2B6VrwWlm7DKE1gu93GFq6Mr3x2Cl4Ml8cRXGVRcVZQ3f6ha9p0w7OrAwQY6pgG97BkkqPNv8Iy3GCz6CjVpgL4PU5wmAL761ZWypVYQTseXEIA13ghwWWFG25CHxjGrWxOQeUAhpd%2FqRzMHBHZZim5n0ZMLydnW4Wj7un4yqHNuVggHO%2FX2%2BwZVcM5CnOPTOkt5wBi3UPE6m2FYk2FK3UCaNS6cHNf0LsXLWi6ZWFYIvZmui1srUo2lRwsWw2aNdkSDgT3FOIDG6BIL6lGmL9qyhNh6&X-Amz-Signature=cfcdb7029cb94fa6c34005ce18308d980eab64c4a487e99d275b0fcfea3bca96&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
