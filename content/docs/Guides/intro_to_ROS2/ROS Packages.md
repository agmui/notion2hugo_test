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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UU4TEPU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNM4SLI%2FBS2282BgW45%2F4kkaehDml0ffclrHVkx7zB9AiEAvyJMlol4Br7Aj4RfWUwe4LWn%2FCclJU2PUkoJ7CP21DAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEBK0JhJ1WALrp6EJSrcA6WnGU7vCTH8Y4cS3vm4mCncyiWbBV9fYJ9h5droTXm88h%2Fj1cJZWQk6FGZiVb1vLXV4JhcLtDMWOfQleJwCLm7RfaeEox8FjXU6%2By23BAd9UdLl1zQjqJI45qehrSvAm70MNA7mZOeY9aEf%2BrRo7ZdJPhiPnXjeLqBr4UtgR98ztog3ooYUCF%2Bgco7eme6mNx%2FVPqCGNyv5w5YPXrvOQQD3zJxVr3XCLAbgf7miLY%2BROHyFMCqNlICeDyUyKOppQWtqsmwq1aJpUXO5C083w4Lben26QUI5SKfnLeKf151GH7QDMyB3jF982B63JMfE5iJQm17HtFxwksTxwdn86EqO56t0eWussVBzfKK5BpCxmMu5KUainTpOxybMfN4qwl%2B6vL17PbsRyP%2BJ4%2BfMTK1IeEijBzQrjcqLCy1wQ5kvdK5sr2SaQ0LFtl0tRuVRLUComRfrrotsyupyXLET7ZuBgT9wPafUuUooyguDfylENzpadc2uFP9eYTRBEpTEbS0DayhLETiQfiyrp26a9ZjgKCVjfzWgXRZkC%2F8Wx9ZeT72LbbRN0%2F7jhw2KKOAiLkGrwLszS%2F0smYSDtgEh4bGP3LHp%2FllRJMtY2aHa8bOvxaKri6oRmxo%2Bh445MNjR8MQGOqUBLLYRjLMZz%2FVyuVIE7zR6b7r06GtjfB3G%2BRBH4EFVZvzipL4OCMe4%2BA3y2tNGf4ZwtFlpNoaMEtx7ChW2%2Fi5xDwkoN8pBtzYa7iS%2BrRUR0dxfjZY%2BGklK0FmltwEMOpWxKZ1HjomCX59VVlAuUcOvXlOsxqmWDdOjFv9zdLQAzW4h6f3f5opmNUXUYhe9aBYkzmh318J9p70dcJqb%2F08Mqu18rt2X&X-Amz-Signature=6b46891ec183ef6d66dc1a7dc572fda04893fe4c86d93256ba73f0b3a3b79d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UU4TEPU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNM4SLI%2FBS2282BgW45%2F4kkaehDml0ffclrHVkx7zB9AiEAvyJMlol4Br7Aj4RfWUwe4LWn%2FCclJU2PUkoJ7CP21DAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEBK0JhJ1WALrp6EJSrcA6WnGU7vCTH8Y4cS3vm4mCncyiWbBV9fYJ9h5droTXm88h%2Fj1cJZWQk6FGZiVb1vLXV4JhcLtDMWOfQleJwCLm7RfaeEox8FjXU6%2By23BAd9UdLl1zQjqJI45qehrSvAm70MNA7mZOeY9aEf%2BrRo7ZdJPhiPnXjeLqBr4UtgR98ztog3ooYUCF%2Bgco7eme6mNx%2FVPqCGNyv5w5YPXrvOQQD3zJxVr3XCLAbgf7miLY%2BROHyFMCqNlICeDyUyKOppQWtqsmwq1aJpUXO5C083w4Lben26QUI5SKfnLeKf151GH7QDMyB3jF982B63JMfE5iJQm17HtFxwksTxwdn86EqO56t0eWussVBzfKK5BpCxmMu5KUainTpOxybMfN4qwl%2B6vL17PbsRyP%2BJ4%2BfMTK1IeEijBzQrjcqLCy1wQ5kvdK5sr2SaQ0LFtl0tRuVRLUComRfrrotsyupyXLET7ZuBgT9wPafUuUooyguDfylENzpadc2uFP9eYTRBEpTEbS0DayhLETiQfiyrp26a9ZjgKCVjfzWgXRZkC%2F8Wx9ZeT72LbbRN0%2F7jhw2KKOAiLkGrwLszS%2F0smYSDtgEh4bGP3LHp%2FllRJMtY2aHa8bOvxaKri6oRmxo%2Bh445MNjR8MQGOqUBLLYRjLMZz%2FVyuVIE7zR6b7r06GtjfB3G%2BRBH4EFVZvzipL4OCMe4%2BA3y2tNGf4ZwtFlpNoaMEtx7ChW2%2Fi5xDwkoN8pBtzYa7iS%2BrRUR0dxfjZY%2BGklK0FmltwEMOpWxKZ1HjomCX59VVlAuUcOvXlOsxqmWDdOjFv9zdLQAzW4h6f3f5opmNUXUYhe9aBYkzmh318J9p70dcJqb%2F08Mqu18rt2X&X-Amz-Signature=764e3390662c3f5ff6a41e4b0a3c23cb5575b3b9a888d210713a14ab009fec87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UU4TEPU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNM4SLI%2FBS2282BgW45%2F4kkaehDml0ffclrHVkx7zB9AiEAvyJMlol4Br7Aj4RfWUwe4LWn%2FCclJU2PUkoJ7CP21DAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEBK0JhJ1WALrp6EJSrcA6WnGU7vCTH8Y4cS3vm4mCncyiWbBV9fYJ9h5droTXm88h%2Fj1cJZWQk6FGZiVb1vLXV4JhcLtDMWOfQleJwCLm7RfaeEox8FjXU6%2By23BAd9UdLl1zQjqJI45qehrSvAm70MNA7mZOeY9aEf%2BrRo7ZdJPhiPnXjeLqBr4UtgR98ztog3ooYUCF%2Bgco7eme6mNx%2FVPqCGNyv5w5YPXrvOQQD3zJxVr3XCLAbgf7miLY%2BROHyFMCqNlICeDyUyKOppQWtqsmwq1aJpUXO5C083w4Lben26QUI5SKfnLeKf151GH7QDMyB3jF982B63JMfE5iJQm17HtFxwksTxwdn86EqO56t0eWussVBzfKK5BpCxmMu5KUainTpOxybMfN4qwl%2B6vL17PbsRyP%2BJ4%2BfMTK1IeEijBzQrjcqLCy1wQ5kvdK5sr2SaQ0LFtl0tRuVRLUComRfrrotsyupyXLET7ZuBgT9wPafUuUooyguDfylENzpadc2uFP9eYTRBEpTEbS0DayhLETiQfiyrp26a9ZjgKCVjfzWgXRZkC%2F8Wx9ZeT72LbbRN0%2F7jhw2KKOAiLkGrwLszS%2F0smYSDtgEh4bGP3LHp%2FllRJMtY2aHa8bOvxaKri6oRmxo%2Bh445MNjR8MQGOqUBLLYRjLMZz%2FVyuVIE7zR6b7r06GtjfB3G%2BRBH4EFVZvzipL4OCMe4%2BA3y2tNGf4ZwtFlpNoaMEtx7ChW2%2Fi5xDwkoN8pBtzYa7iS%2BrRUR0dxfjZY%2BGklK0FmltwEMOpWxKZ1HjomCX59VVlAuUcOvXlOsxqmWDdOjFv9zdLQAzW4h6f3f5opmNUXUYhe9aBYkzmh318J9p70dcJqb%2F08Mqu18rt2X&X-Amz-Signature=b76198eb2a37cc8319be4156596dc1fef24482ef415722607664ca6524dfc145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UU4TEPU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNM4SLI%2FBS2282BgW45%2F4kkaehDml0ffclrHVkx7zB9AiEAvyJMlol4Br7Aj4RfWUwe4LWn%2FCclJU2PUkoJ7CP21DAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEBK0JhJ1WALrp6EJSrcA6WnGU7vCTH8Y4cS3vm4mCncyiWbBV9fYJ9h5droTXm88h%2Fj1cJZWQk6FGZiVb1vLXV4JhcLtDMWOfQleJwCLm7RfaeEox8FjXU6%2By23BAd9UdLl1zQjqJI45qehrSvAm70MNA7mZOeY9aEf%2BrRo7ZdJPhiPnXjeLqBr4UtgR98ztog3ooYUCF%2Bgco7eme6mNx%2FVPqCGNyv5w5YPXrvOQQD3zJxVr3XCLAbgf7miLY%2BROHyFMCqNlICeDyUyKOppQWtqsmwq1aJpUXO5C083w4Lben26QUI5SKfnLeKf151GH7QDMyB3jF982B63JMfE5iJQm17HtFxwksTxwdn86EqO56t0eWussVBzfKK5BpCxmMu5KUainTpOxybMfN4qwl%2B6vL17PbsRyP%2BJ4%2BfMTK1IeEijBzQrjcqLCy1wQ5kvdK5sr2SaQ0LFtl0tRuVRLUComRfrrotsyupyXLET7ZuBgT9wPafUuUooyguDfylENzpadc2uFP9eYTRBEpTEbS0DayhLETiQfiyrp26a9ZjgKCVjfzWgXRZkC%2F8Wx9ZeT72LbbRN0%2F7jhw2KKOAiLkGrwLszS%2F0smYSDtgEh4bGP3LHp%2FllRJMtY2aHa8bOvxaKri6oRmxo%2Bh445MNjR8MQGOqUBLLYRjLMZz%2FVyuVIE7zR6b7r06GtjfB3G%2BRBH4EFVZvzipL4OCMe4%2BA3y2tNGf4ZwtFlpNoaMEtx7ChW2%2Fi5xDwkoN8pBtzYa7iS%2BrRUR0dxfjZY%2BGklK0FmltwEMOpWxKZ1HjomCX59VVlAuUcOvXlOsxqmWDdOjFv9zdLQAzW4h6f3f5opmNUXUYhe9aBYkzmh318J9p70dcJqb%2F08Mqu18rt2X&X-Amz-Signature=fd53c2164b77e059687637c13e78ff7178a9f86c589524c18afa94df9a9403ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UU4TEPU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNM4SLI%2FBS2282BgW45%2F4kkaehDml0ffclrHVkx7zB9AiEAvyJMlol4Br7Aj4RfWUwe4LWn%2FCclJU2PUkoJ7CP21DAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEBK0JhJ1WALrp6EJSrcA6WnGU7vCTH8Y4cS3vm4mCncyiWbBV9fYJ9h5droTXm88h%2Fj1cJZWQk6FGZiVb1vLXV4JhcLtDMWOfQleJwCLm7RfaeEox8FjXU6%2By23BAd9UdLl1zQjqJI45qehrSvAm70MNA7mZOeY9aEf%2BrRo7ZdJPhiPnXjeLqBr4UtgR98ztog3ooYUCF%2Bgco7eme6mNx%2FVPqCGNyv5w5YPXrvOQQD3zJxVr3XCLAbgf7miLY%2BROHyFMCqNlICeDyUyKOppQWtqsmwq1aJpUXO5C083w4Lben26QUI5SKfnLeKf151GH7QDMyB3jF982B63JMfE5iJQm17HtFxwksTxwdn86EqO56t0eWussVBzfKK5BpCxmMu5KUainTpOxybMfN4qwl%2B6vL17PbsRyP%2BJ4%2BfMTK1IeEijBzQrjcqLCy1wQ5kvdK5sr2SaQ0LFtl0tRuVRLUComRfrrotsyupyXLET7ZuBgT9wPafUuUooyguDfylENzpadc2uFP9eYTRBEpTEbS0DayhLETiQfiyrp26a9ZjgKCVjfzWgXRZkC%2F8Wx9ZeT72LbbRN0%2F7jhw2KKOAiLkGrwLszS%2F0smYSDtgEh4bGP3LHp%2FllRJMtY2aHa8bOvxaKri6oRmxo%2Bh445MNjR8MQGOqUBLLYRjLMZz%2FVyuVIE7zR6b7r06GtjfB3G%2BRBH4EFVZvzipL4OCMe4%2BA3y2tNGf4ZwtFlpNoaMEtx7ChW2%2Fi5xDwkoN8pBtzYa7iS%2BrRUR0dxfjZY%2BGklK0FmltwEMOpWxKZ1HjomCX59VVlAuUcOvXlOsxqmWDdOjFv9zdLQAzW4h6f3f5opmNUXUYhe9aBYkzmh318J9p70dcJqb%2F08Mqu18rt2X&X-Amz-Signature=e3ea4514a8adc3c6bfe7ae83b1d0df6dcc57b9e946df9a643069d2bd9b1951d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UU4TEPU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNM4SLI%2FBS2282BgW45%2F4kkaehDml0ffclrHVkx7zB9AiEAvyJMlol4Br7Aj4RfWUwe4LWn%2FCclJU2PUkoJ7CP21DAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEBK0JhJ1WALrp6EJSrcA6WnGU7vCTH8Y4cS3vm4mCncyiWbBV9fYJ9h5droTXm88h%2Fj1cJZWQk6FGZiVb1vLXV4JhcLtDMWOfQleJwCLm7RfaeEox8FjXU6%2By23BAd9UdLl1zQjqJI45qehrSvAm70MNA7mZOeY9aEf%2BrRo7ZdJPhiPnXjeLqBr4UtgR98ztog3ooYUCF%2Bgco7eme6mNx%2FVPqCGNyv5w5YPXrvOQQD3zJxVr3XCLAbgf7miLY%2BROHyFMCqNlICeDyUyKOppQWtqsmwq1aJpUXO5C083w4Lben26QUI5SKfnLeKf151GH7QDMyB3jF982B63JMfE5iJQm17HtFxwksTxwdn86EqO56t0eWussVBzfKK5BpCxmMu5KUainTpOxybMfN4qwl%2B6vL17PbsRyP%2BJ4%2BfMTK1IeEijBzQrjcqLCy1wQ5kvdK5sr2SaQ0LFtl0tRuVRLUComRfrrotsyupyXLET7ZuBgT9wPafUuUooyguDfylENzpadc2uFP9eYTRBEpTEbS0DayhLETiQfiyrp26a9ZjgKCVjfzWgXRZkC%2F8Wx9ZeT72LbbRN0%2F7jhw2KKOAiLkGrwLszS%2F0smYSDtgEh4bGP3LHp%2FllRJMtY2aHa8bOvxaKri6oRmxo%2Bh445MNjR8MQGOqUBLLYRjLMZz%2FVyuVIE7zR6b7r06GtjfB3G%2BRBH4EFVZvzipL4OCMe4%2BA3y2tNGf4ZwtFlpNoaMEtx7ChW2%2Fi5xDwkoN8pBtzYa7iS%2BrRUR0dxfjZY%2BGklK0FmltwEMOpWxKZ1HjomCX59VVlAuUcOvXlOsxqmWDdOjFv9zdLQAzW4h6f3f5opmNUXUYhe9aBYkzmh318J9p70dcJqb%2F08Mqu18rt2X&X-Amz-Signature=2da7e388419bb73f90776240bc8fd1458ff47242484d7da42f2a8f2f0a8ecfb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UU4TEPU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNM4SLI%2FBS2282BgW45%2F4kkaehDml0ffclrHVkx7zB9AiEAvyJMlol4Br7Aj4RfWUwe4LWn%2FCclJU2PUkoJ7CP21DAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEBK0JhJ1WALrp6EJSrcA6WnGU7vCTH8Y4cS3vm4mCncyiWbBV9fYJ9h5droTXm88h%2Fj1cJZWQk6FGZiVb1vLXV4JhcLtDMWOfQleJwCLm7RfaeEox8FjXU6%2By23BAd9UdLl1zQjqJI45qehrSvAm70MNA7mZOeY9aEf%2BrRo7ZdJPhiPnXjeLqBr4UtgR98ztog3ooYUCF%2Bgco7eme6mNx%2FVPqCGNyv5w5YPXrvOQQD3zJxVr3XCLAbgf7miLY%2BROHyFMCqNlICeDyUyKOppQWtqsmwq1aJpUXO5C083w4Lben26QUI5SKfnLeKf151GH7QDMyB3jF982B63JMfE5iJQm17HtFxwksTxwdn86EqO56t0eWussVBzfKK5BpCxmMu5KUainTpOxybMfN4qwl%2B6vL17PbsRyP%2BJ4%2BfMTK1IeEijBzQrjcqLCy1wQ5kvdK5sr2SaQ0LFtl0tRuVRLUComRfrrotsyupyXLET7ZuBgT9wPafUuUooyguDfylENzpadc2uFP9eYTRBEpTEbS0DayhLETiQfiyrp26a9ZjgKCVjfzWgXRZkC%2F8Wx9ZeT72LbbRN0%2F7jhw2KKOAiLkGrwLszS%2F0smYSDtgEh4bGP3LHp%2FllRJMtY2aHa8bOvxaKri6oRmxo%2Bh445MNjR8MQGOqUBLLYRjLMZz%2FVyuVIE7zR6b7r06GtjfB3G%2BRBH4EFVZvzipL4OCMe4%2BA3y2tNGf4ZwtFlpNoaMEtx7ChW2%2Fi5xDwkoN8pBtzYa7iS%2BrRUR0dxfjZY%2BGklK0FmltwEMOpWxKZ1HjomCX59VVlAuUcOvXlOsxqmWDdOjFv9zdLQAzW4h6f3f5opmNUXUYhe9aBYkzmh318J9p70dcJqb%2F08Mqu18rt2X&X-Amz-Signature=1f29d177ccf38ae2900391b350b198186f5fbc532ad1f0ba47bd9275f743c74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
