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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMNXSLD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC78WQNoIn8YK3xDRClm818GkcpyAtZBDvh1W5LsjlV3AiADqZsRAzqvZrjNRYZm7gIDyR4CKCBTI%2BeSjdXocF1%2FIyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGwtoFHsTw4h8Tzn5KtwDx5PJeCz00Kq7WOwyKcRNe2BXMt8x%2FxLIWN5L22NVcySBrn19m5jwvvzDr3NEApcYZ4PXM2WAndVMFCWe1QfUydYrrqQqrFwZ3Ojo%2Bb%2B6SmaHKZ4ssKxiFqd1x8ROpgQ2xZ5eNfzYEBYzWyVYZZP%2BJXEpfrC4e8rs3gm5h1AVzZ7FbeTlwVpxhGo6fscLhT7ZCh6n8Cg8PxDwTOHj%2B9eetcihnb2t8tOY6T8DPZtlqQcXeZcYckvhvbmo69r%2BWbVCW5LxArpZuhock5VappWfhDErh7vJB5WnrW1ZsFMHWABC6n%2BVZRckEDBZ%2Fqcj0k4yCjlFDOh1j1Rmfd2ByQfly1igj2njeDMV7Hkvsr%2FVgsfpae1sdh2J7bld3AffyeV61oqL9BXtHYzqPgosPRWtJ3t2hY0d%2FhV693kRzPFhBIBr92ayRVCHsYcrdvyy7P%2FF3BRHu5Rzc2tsR2bFytRi0eart1v2KzHsh4GckseCbO55JrS%2Fd77tSPwV08FSewL9kwdBv%2FyVK%2FA83pKstuj7F0MdifO76jxhs0k3lkRjYJXGlw4QHlOY8rrjvd2QzfVQ%2B9f5ILUQM%2F3RIoXJGOh%2F9Ooh%2BuH6yy0r9dn411KB8K3qBEbxUNWxmmf0Ogwwi%2B3QxAY6pgGcA7mvOVIJUHMQOBWC3ppIMjqop619ra7C4Gy%2FL%2BVgeWFFEzE9eCZNLgN8xtTRDvVr%2BZaVLDzgD%2Fx9Z2SR6lIQk52Vo8xJLtPIRZrCgr8xmKUj2Ego674fYtkzbvmRjSo%2F0M0myWR0zqGRAKFLB0Wna8XWeO9fcKJUWKMNgHIp8vf6EocYrJ%2B8WC7CYZWRTMqViVkpsNpjHcQXCv0rpK9cs40gZfeb&X-Amz-Signature=c425e3609b0c8b1b24e95061cca9e41e342035e9ce4934e36249177996c66fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMNXSLD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC78WQNoIn8YK3xDRClm818GkcpyAtZBDvh1W5LsjlV3AiADqZsRAzqvZrjNRYZm7gIDyR4CKCBTI%2BeSjdXocF1%2FIyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGwtoFHsTw4h8Tzn5KtwDx5PJeCz00Kq7WOwyKcRNe2BXMt8x%2FxLIWN5L22NVcySBrn19m5jwvvzDr3NEApcYZ4PXM2WAndVMFCWe1QfUydYrrqQqrFwZ3Ojo%2Bb%2B6SmaHKZ4ssKxiFqd1x8ROpgQ2xZ5eNfzYEBYzWyVYZZP%2BJXEpfrC4e8rs3gm5h1AVzZ7FbeTlwVpxhGo6fscLhT7ZCh6n8Cg8PxDwTOHj%2B9eetcihnb2t8tOY6T8DPZtlqQcXeZcYckvhvbmo69r%2BWbVCW5LxArpZuhock5VappWfhDErh7vJB5WnrW1ZsFMHWABC6n%2BVZRckEDBZ%2Fqcj0k4yCjlFDOh1j1Rmfd2ByQfly1igj2njeDMV7Hkvsr%2FVgsfpae1sdh2J7bld3AffyeV61oqL9BXtHYzqPgosPRWtJ3t2hY0d%2FhV693kRzPFhBIBr92ayRVCHsYcrdvyy7P%2FF3BRHu5Rzc2tsR2bFytRi0eart1v2KzHsh4GckseCbO55JrS%2Fd77tSPwV08FSewL9kwdBv%2FyVK%2FA83pKstuj7F0MdifO76jxhs0k3lkRjYJXGlw4QHlOY8rrjvd2QzfVQ%2B9f5ILUQM%2F3RIoXJGOh%2F9Ooh%2BuH6yy0r9dn411KB8K3qBEbxUNWxmmf0Ogwwi%2B3QxAY6pgGcA7mvOVIJUHMQOBWC3ppIMjqop619ra7C4Gy%2FL%2BVgeWFFEzE9eCZNLgN8xtTRDvVr%2BZaVLDzgD%2Fx9Z2SR6lIQk52Vo8xJLtPIRZrCgr8xmKUj2Ego674fYtkzbvmRjSo%2F0M0myWR0zqGRAKFLB0Wna8XWeO9fcKJUWKMNgHIp8vf6EocYrJ%2B8WC7CYZWRTMqViVkpsNpjHcQXCv0rpK9cs40gZfeb&X-Amz-Signature=804bf73b7436b02edcaaa31e52b029af4dfee2e634678295f75f66438be48a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMNXSLD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC78WQNoIn8YK3xDRClm818GkcpyAtZBDvh1W5LsjlV3AiADqZsRAzqvZrjNRYZm7gIDyR4CKCBTI%2BeSjdXocF1%2FIyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGwtoFHsTw4h8Tzn5KtwDx5PJeCz00Kq7WOwyKcRNe2BXMt8x%2FxLIWN5L22NVcySBrn19m5jwvvzDr3NEApcYZ4PXM2WAndVMFCWe1QfUydYrrqQqrFwZ3Ojo%2Bb%2B6SmaHKZ4ssKxiFqd1x8ROpgQ2xZ5eNfzYEBYzWyVYZZP%2BJXEpfrC4e8rs3gm5h1AVzZ7FbeTlwVpxhGo6fscLhT7ZCh6n8Cg8PxDwTOHj%2B9eetcihnb2t8tOY6T8DPZtlqQcXeZcYckvhvbmo69r%2BWbVCW5LxArpZuhock5VappWfhDErh7vJB5WnrW1ZsFMHWABC6n%2BVZRckEDBZ%2Fqcj0k4yCjlFDOh1j1Rmfd2ByQfly1igj2njeDMV7Hkvsr%2FVgsfpae1sdh2J7bld3AffyeV61oqL9BXtHYzqPgosPRWtJ3t2hY0d%2FhV693kRzPFhBIBr92ayRVCHsYcrdvyy7P%2FF3BRHu5Rzc2tsR2bFytRi0eart1v2KzHsh4GckseCbO55JrS%2Fd77tSPwV08FSewL9kwdBv%2FyVK%2FA83pKstuj7F0MdifO76jxhs0k3lkRjYJXGlw4QHlOY8rrjvd2QzfVQ%2B9f5ILUQM%2F3RIoXJGOh%2F9Ooh%2BuH6yy0r9dn411KB8K3qBEbxUNWxmmf0Ogwwi%2B3QxAY6pgGcA7mvOVIJUHMQOBWC3ppIMjqop619ra7C4Gy%2FL%2BVgeWFFEzE9eCZNLgN8xtTRDvVr%2BZaVLDzgD%2Fx9Z2SR6lIQk52Vo8xJLtPIRZrCgr8xmKUj2Ego674fYtkzbvmRjSo%2F0M0myWR0zqGRAKFLB0Wna8XWeO9fcKJUWKMNgHIp8vf6EocYrJ%2B8WC7CYZWRTMqViVkpsNpjHcQXCv0rpK9cs40gZfeb&X-Amz-Signature=d6fa7cf4138b0700e70bbc5bd405394c07f724c32996d5b879ac8b04598feb70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMNXSLD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC78WQNoIn8YK3xDRClm818GkcpyAtZBDvh1W5LsjlV3AiADqZsRAzqvZrjNRYZm7gIDyR4CKCBTI%2BeSjdXocF1%2FIyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGwtoFHsTw4h8Tzn5KtwDx5PJeCz00Kq7WOwyKcRNe2BXMt8x%2FxLIWN5L22NVcySBrn19m5jwvvzDr3NEApcYZ4PXM2WAndVMFCWe1QfUydYrrqQqrFwZ3Ojo%2Bb%2B6SmaHKZ4ssKxiFqd1x8ROpgQ2xZ5eNfzYEBYzWyVYZZP%2BJXEpfrC4e8rs3gm5h1AVzZ7FbeTlwVpxhGo6fscLhT7ZCh6n8Cg8PxDwTOHj%2B9eetcihnb2t8tOY6T8DPZtlqQcXeZcYckvhvbmo69r%2BWbVCW5LxArpZuhock5VappWfhDErh7vJB5WnrW1ZsFMHWABC6n%2BVZRckEDBZ%2Fqcj0k4yCjlFDOh1j1Rmfd2ByQfly1igj2njeDMV7Hkvsr%2FVgsfpae1sdh2J7bld3AffyeV61oqL9BXtHYzqPgosPRWtJ3t2hY0d%2FhV693kRzPFhBIBr92ayRVCHsYcrdvyy7P%2FF3BRHu5Rzc2tsR2bFytRi0eart1v2KzHsh4GckseCbO55JrS%2Fd77tSPwV08FSewL9kwdBv%2FyVK%2FA83pKstuj7F0MdifO76jxhs0k3lkRjYJXGlw4QHlOY8rrjvd2QzfVQ%2B9f5ILUQM%2F3RIoXJGOh%2F9Ooh%2BuH6yy0r9dn411KB8K3qBEbxUNWxmmf0Ogwwi%2B3QxAY6pgGcA7mvOVIJUHMQOBWC3ppIMjqop619ra7C4Gy%2FL%2BVgeWFFEzE9eCZNLgN8xtTRDvVr%2BZaVLDzgD%2Fx9Z2SR6lIQk52Vo8xJLtPIRZrCgr8xmKUj2Ego674fYtkzbvmRjSo%2F0M0myWR0zqGRAKFLB0Wna8XWeO9fcKJUWKMNgHIp8vf6EocYrJ%2B8WC7CYZWRTMqViVkpsNpjHcQXCv0rpK9cs40gZfeb&X-Amz-Signature=4aa05f59b49ffe38861a94957fff35173d2eed9145c21046bca3139d7ed02b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMNXSLD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC78WQNoIn8YK3xDRClm818GkcpyAtZBDvh1W5LsjlV3AiADqZsRAzqvZrjNRYZm7gIDyR4CKCBTI%2BeSjdXocF1%2FIyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGwtoFHsTw4h8Tzn5KtwDx5PJeCz00Kq7WOwyKcRNe2BXMt8x%2FxLIWN5L22NVcySBrn19m5jwvvzDr3NEApcYZ4PXM2WAndVMFCWe1QfUydYrrqQqrFwZ3Ojo%2Bb%2B6SmaHKZ4ssKxiFqd1x8ROpgQ2xZ5eNfzYEBYzWyVYZZP%2BJXEpfrC4e8rs3gm5h1AVzZ7FbeTlwVpxhGo6fscLhT7ZCh6n8Cg8PxDwTOHj%2B9eetcihnb2t8tOY6T8DPZtlqQcXeZcYckvhvbmo69r%2BWbVCW5LxArpZuhock5VappWfhDErh7vJB5WnrW1ZsFMHWABC6n%2BVZRckEDBZ%2Fqcj0k4yCjlFDOh1j1Rmfd2ByQfly1igj2njeDMV7Hkvsr%2FVgsfpae1sdh2J7bld3AffyeV61oqL9BXtHYzqPgosPRWtJ3t2hY0d%2FhV693kRzPFhBIBr92ayRVCHsYcrdvyy7P%2FF3BRHu5Rzc2tsR2bFytRi0eart1v2KzHsh4GckseCbO55JrS%2Fd77tSPwV08FSewL9kwdBv%2FyVK%2FA83pKstuj7F0MdifO76jxhs0k3lkRjYJXGlw4QHlOY8rrjvd2QzfVQ%2B9f5ILUQM%2F3RIoXJGOh%2F9Ooh%2BuH6yy0r9dn411KB8K3qBEbxUNWxmmf0Ogwwi%2B3QxAY6pgGcA7mvOVIJUHMQOBWC3ppIMjqop619ra7C4Gy%2FL%2BVgeWFFEzE9eCZNLgN8xtTRDvVr%2BZaVLDzgD%2Fx9Z2SR6lIQk52Vo8xJLtPIRZrCgr8xmKUj2Ego674fYtkzbvmRjSo%2F0M0myWR0zqGRAKFLB0Wna8XWeO9fcKJUWKMNgHIp8vf6EocYrJ%2B8WC7CYZWRTMqViVkpsNpjHcQXCv0rpK9cs40gZfeb&X-Amz-Signature=29e8fc52c6b3d18fe0190ae15841e8354bf49ff68a3d8d6fa5c4f71d0ab67840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMNXSLD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC78WQNoIn8YK3xDRClm818GkcpyAtZBDvh1W5LsjlV3AiADqZsRAzqvZrjNRYZm7gIDyR4CKCBTI%2BeSjdXocF1%2FIyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGwtoFHsTw4h8Tzn5KtwDx5PJeCz00Kq7WOwyKcRNe2BXMt8x%2FxLIWN5L22NVcySBrn19m5jwvvzDr3NEApcYZ4PXM2WAndVMFCWe1QfUydYrrqQqrFwZ3Ojo%2Bb%2B6SmaHKZ4ssKxiFqd1x8ROpgQ2xZ5eNfzYEBYzWyVYZZP%2BJXEpfrC4e8rs3gm5h1AVzZ7FbeTlwVpxhGo6fscLhT7ZCh6n8Cg8PxDwTOHj%2B9eetcihnb2t8tOY6T8DPZtlqQcXeZcYckvhvbmo69r%2BWbVCW5LxArpZuhock5VappWfhDErh7vJB5WnrW1ZsFMHWABC6n%2BVZRckEDBZ%2Fqcj0k4yCjlFDOh1j1Rmfd2ByQfly1igj2njeDMV7Hkvsr%2FVgsfpae1sdh2J7bld3AffyeV61oqL9BXtHYzqPgosPRWtJ3t2hY0d%2FhV693kRzPFhBIBr92ayRVCHsYcrdvyy7P%2FF3BRHu5Rzc2tsR2bFytRi0eart1v2KzHsh4GckseCbO55JrS%2Fd77tSPwV08FSewL9kwdBv%2FyVK%2FA83pKstuj7F0MdifO76jxhs0k3lkRjYJXGlw4QHlOY8rrjvd2QzfVQ%2B9f5ILUQM%2F3RIoXJGOh%2F9Ooh%2BuH6yy0r9dn411KB8K3qBEbxUNWxmmf0Ogwwi%2B3QxAY6pgGcA7mvOVIJUHMQOBWC3ppIMjqop619ra7C4Gy%2FL%2BVgeWFFEzE9eCZNLgN8xtTRDvVr%2BZaVLDzgD%2Fx9Z2SR6lIQk52Vo8xJLtPIRZrCgr8xmKUj2Ego674fYtkzbvmRjSo%2F0M0myWR0zqGRAKFLB0Wna8XWeO9fcKJUWKMNgHIp8vf6EocYrJ%2B8WC7CYZWRTMqViVkpsNpjHcQXCv0rpK9cs40gZfeb&X-Amz-Signature=7ce6b37db3928de7e11613056d8712c9357ae836a8434203e6b68b7dc2a9b2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMNXSLD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC78WQNoIn8YK3xDRClm818GkcpyAtZBDvh1W5LsjlV3AiADqZsRAzqvZrjNRYZm7gIDyR4CKCBTI%2BeSjdXocF1%2FIyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGwtoFHsTw4h8Tzn5KtwDx5PJeCz00Kq7WOwyKcRNe2BXMt8x%2FxLIWN5L22NVcySBrn19m5jwvvzDr3NEApcYZ4PXM2WAndVMFCWe1QfUydYrrqQqrFwZ3Ojo%2Bb%2B6SmaHKZ4ssKxiFqd1x8ROpgQ2xZ5eNfzYEBYzWyVYZZP%2BJXEpfrC4e8rs3gm5h1AVzZ7FbeTlwVpxhGo6fscLhT7ZCh6n8Cg8PxDwTOHj%2B9eetcihnb2t8tOY6T8DPZtlqQcXeZcYckvhvbmo69r%2BWbVCW5LxArpZuhock5VappWfhDErh7vJB5WnrW1ZsFMHWABC6n%2BVZRckEDBZ%2Fqcj0k4yCjlFDOh1j1Rmfd2ByQfly1igj2njeDMV7Hkvsr%2FVgsfpae1sdh2J7bld3AffyeV61oqL9BXtHYzqPgosPRWtJ3t2hY0d%2FhV693kRzPFhBIBr92ayRVCHsYcrdvyy7P%2FF3BRHu5Rzc2tsR2bFytRi0eart1v2KzHsh4GckseCbO55JrS%2Fd77tSPwV08FSewL9kwdBv%2FyVK%2FA83pKstuj7F0MdifO76jxhs0k3lkRjYJXGlw4QHlOY8rrjvd2QzfVQ%2B9f5ILUQM%2F3RIoXJGOh%2F9Ooh%2BuH6yy0r9dn411KB8K3qBEbxUNWxmmf0Ogwwi%2B3QxAY6pgGcA7mvOVIJUHMQOBWC3ppIMjqop619ra7C4Gy%2FL%2BVgeWFFEzE9eCZNLgN8xtTRDvVr%2BZaVLDzgD%2Fx9Z2SR6lIQk52Vo8xJLtPIRZrCgr8xmKUj2Ego674fYtkzbvmRjSo%2F0M0myWR0zqGRAKFLB0Wna8XWeO9fcKJUWKMNgHIp8vf6EocYrJ%2B8WC7CYZWRTMqViVkpsNpjHcQXCv0rpK9cs40gZfeb&X-Amz-Signature=3d7382616b4fbbd3f9da5ad6bb38e4e80e87677c0171faa3beef7e3256acf779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
