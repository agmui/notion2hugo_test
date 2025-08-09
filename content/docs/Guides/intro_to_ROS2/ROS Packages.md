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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DKZBWK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ0jziSmIp4wi6BEOM0s5Kde9KIpLwFpEb1GdNNSdtYAiBbERxNXFwJYgwOVAb5e0oXJfn8Jr%2FLOw4foXp%2BOPA0sSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5AcGtlPKNpiuMgUKtwDhOpayuN58uBkn%2FotRjKDAabTVQg7%2BxqpzMhfRslEUjoZUFuoKtB%2BfwAoKncgCoXYwULqvNCElOlgbFoUoBwtch4MzUC0ewo5Fv5od5mr6OL5h%2BuZZRSjI8QB%2FYoEKlHwuXm4blGUlr8c8ZiAkGVQDR6DbWbwFPth6g7TZ%2FbRcD%2BxF%2BUW92kGqZhpbDn8miFn9yQRprfDbaaVPllewUNIDSaYBnvxFeJ3TnG7tHcudb7U2hN0ADyYhlTIECaXcfcvwGDpauUfyY4fIdVoo6Hu2VqgsAbt%2Fomickm3POc9kX394b6Ej1R4EZ6dMr7lATg3KkKBjkPw5TokdQ5pFmGwUFYXEMWrSoILR8ahuLk9jVcCnYjmrrozPUbtxBN6cJaPtjsQQ61nCJ2cEuPxq62Z1E2B2R94aS6KHh%2B7hbdaoQkCbcnTMKLp6672XJbZavkjEr36O%2BC7PjeVZjGgZeIjR9WcMwwmbhd6nsOB6Ucz1x0yLukYinb3yUR%2FFpibYkNIZxLW0cUPz7KzaIAvIC6WGKh4lbAwkjPKYY8iuQBeyzGWJKUvmZPYgGP%2F5ZItZtymsUM9SjDSy0jNt7D1t7xmJE4968HuXmTkZeSwAq%2BPLK9UU7uvzzXFkXKZ4pww%2FIrfxAY6pgH6aAihzBtA9ANXolv4ZU0yoSG1yTYuouv0BZtV5YlOfcZYXDnBTSo7jblrPAVButL49QJe2IXQ4D1CdPEYRtsv7i3aPNk3%2F6uhWG7oF6GDhDgcRv9k8tMv0eBES7LBJBrg8%2FnzI2nhbt%2F%2BHoReMaMwXbfzojQxPYqAo1eWXiuqDqu9Sn9DxgfW6x6lzRMcXFla2%2BEl7uyoM279GGXL7oopvFMytzeK&X-Amz-Signature=6682f3e87b12a20bdd622ad5377fd162b1ebe192f08a9cd880db917be8db51fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DKZBWK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ0jziSmIp4wi6BEOM0s5Kde9KIpLwFpEb1GdNNSdtYAiBbERxNXFwJYgwOVAb5e0oXJfn8Jr%2FLOw4foXp%2BOPA0sSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5AcGtlPKNpiuMgUKtwDhOpayuN58uBkn%2FotRjKDAabTVQg7%2BxqpzMhfRslEUjoZUFuoKtB%2BfwAoKncgCoXYwULqvNCElOlgbFoUoBwtch4MzUC0ewo5Fv5od5mr6OL5h%2BuZZRSjI8QB%2FYoEKlHwuXm4blGUlr8c8ZiAkGVQDR6DbWbwFPth6g7TZ%2FbRcD%2BxF%2BUW92kGqZhpbDn8miFn9yQRprfDbaaVPllewUNIDSaYBnvxFeJ3TnG7tHcudb7U2hN0ADyYhlTIECaXcfcvwGDpauUfyY4fIdVoo6Hu2VqgsAbt%2Fomickm3POc9kX394b6Ej1R4EZ6dMr7lATg3KkKBjkPw5TokdQ5pFmGwUFYXEMWrSoILR8ahuLk9jVcCnYjmrrozPUbtxBN6cJaPtjsQQ61nCJ2cEuPxq62Z1E2B2R94aS6KHh%2B7hbdaoQkCbcnTMKLp6672XJbZavkjEr36O%2BC7PjeVZjGgZeIjR9WcMwwmbhd6nsOB6Ucz1x0yLukYinb3yUR%2FFpibYkNIZxLW0cUPz7KzaIAvIC6WGKh4lbAwkjPKYY8iuQBeyzGWJKUvmZPYgGP%2F5ZItZtymsUM9SjDSy0jNt7D1t7xmJE4968HuXmTkZeSwAq%2BPLK9UU7uvzzXFkXKZ4pww%2FIrfxAY6pgH6aAihzBtA9ANXolv4ZU0yoSG1yTYuouv0BZtV5YlOfcZYXDnBTSo7jblrPAVButL49QJe2IXQ4D1CdPEYRtsv7i3aPNk3%2F6uhWG7oF6GDhDgcRv9k8tMv0eBES7LBJBrg8%2FnzI2nhbt%2F%2BHoReMaMwXbfzojQxPYqAo1eWXiuqDqu9Sn9DxgfW6x6lzRMcXFla2%2BEl7uyoM279GGXL7oopvFMytzeK&X-Amz-Signature=6abb2c34c1d670942a10a142d76df2d88cfe69d9dec472800ff3ac63529c4e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DKZBWK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ0jziSmIp4wi6BEOM0s5Kde9KIpLwFpEb1GdNNSdtYAiBbERxNXFwJYgwOVAb5e0oXJfn8Jr%2FLOw4foXp%2BOPA0sSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5AcGtlPKNpiuMgUKtwDhOpayuN58uBkn%2FotRjKDAabTVQg7%2BxqpzMhfRslEUjoZUFuoKtB%2BfwAoKncgCoXYwULqvNCElOlgbFoUoBwtch4MzUC0ewo5Fv5od5mr6OL5h%2BuZZRSjI8QB%2FYoEKlHwuXm4blGUlr8c8ZiAkGVQDR6DbWbwFPth6g7TZ%2FbRcD%2BxF%2BUW92kGqZhpbDn8miFn9yQRprfDbaaVPllewUNIDSaYBnvxFeJ3TnG7tHcudb7U2hN0ADyYhlTIECaXcfcvwGDpauUfyY4fIdVoo6Hu2VqgsAbt%2Fomickm3POc9kX394b6Ej1R4EZ6dMr7lATg3KkKBjkPw5TokdQ5pFmGwUFYXEMWrSoILR8ahuLk9jVcCnYjmrrozPUbtxBN6cJaPtjsQQ61nCJ2cEuPxq62Z1E2B2R94aS6KHh%2B7hbdaoQkCbcnTMKLp6672XJbZavkjEr36O%2BC7PjeVZjGgZeIjR9WcMwwmbhd6nsOB6Ucz1x0yLukYinb3yUR%2FFpibYkNIZxLW0cUPz7KzaIAvIC6WGKh4lbAwkjPKYY8iuQBeyzGWJKUvmZPYgGP%2F5ZItZtymsUM9SjDSy0jNt7D1t7xmJE4968HuXmTkZeSwAq%2BPLK9UU7uvzzXFkXKZ4pww%2FIrfxAY6pgH6aAihzBtA9ANXolv4ZU0yoSG1yTYuouv0BZtV5YlOfcZYXDnBTSo7jblrPAVButL49QJe2IXQ4D1CdPEYRtsv7i3aPNk3%2F6uhWG7oF6GDhDgcRv9k8tMv0eBES7LBJBrg8%2FnzI2nhbt%2F%2BHoReMaMwXbfzojQxPYqAo1eWXiuqDqu9Sn9DxgfW6x6lzRMcXFla2%2BEl7uyoM279GGXL7oopvFMytzeK&X-Amz-Signature=9a763b97d4fb2ebf6a30cc363b1b6dde286280507659ca54288ff67b8c001aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DKZBWK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ0jziSmIp4wi6BEOM0s5Kde9KIpLwFpEb1GdNNSdtYAiBbERxNXFwJYgwOVAb5e0oXJfn8Jr%2FLOw4foXp%2BOPA0sSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5AcGtlPKNpiuMgUKtwDhOpayuN58uBkn%2FotRjKDAabTVQg7%2BxqpzMhfRslEUjoZUFuoKtB%2BfwAoKncgCoXYwULqvNCElOlgbFoUoBwtch4MzUC0ewo5Fv5od5mr6OL5h%2BuZZRSjI8QB%2FYoEKlHwuXm4blGUlr8c8ZiAkGVQDR6DbWbwFPth6g7TZ%2FbRcD%2BxF%2BUW92kGqZhpbDn8miFn9yQRprfDbaaVPllewUNIDSaYBnvxFeJ3TnG7tHcudb7U2hN0ADyYhlTIECaXcfcvwGDpauUfyY4fIdVoo6Hu2VqgsAbt%2Fomickm3POc9kX394b6Ej1R4EZ6dMr7lATg3KkKBjkPw5TokdQ5pFmGwUFYXEMWrSoILR8ahuLk9jVcCnYjmrrozPUbtxBN6cJaPtjsQQ61nCJ2cEuPxq62Z1E2B2R94aS6KHh%2B7hbdaoQkCbcnTMKLp6672XJbZavkjEr36O%2BC7PjeVZjGgZeIjR9WcMwwmbhd6nsOB6Ucz1x0yLukYinb3yUR%2FFpibYkNIZxLW0cUPz7KzaIAvIC6WGKh4lbAwkjPKYY8iuQBeyzGWJKUvmZPYgGP%2F5ZItZtymsUM9SjDSy0jNt7D1t7xmJE4968HuXmTkZeSwAq%2BPLK9UU7uvzzXFkXKZ4pww%2FIrfxAY6pgH6aAihzBtA9ANXolv4ZU0yoSG1yTYuouv0BZtV5YlOfcZYXDnBTSo7jblrPAVButL49QJe2IXQ4D1CdPEYRtsv7i3aPNk3%2F6uhWG7oF6GDhDgcRv9k8tMv0eBES7LBJBrg8%2FnzI2nhbt%2F%2BHoReMaMwXbfzojQxPYqAo1eWXiuqDqu9Sn9DxgfW6x6lzRMcXFla2%2BEl7uyoM279GGXL7oopvFMytzeK&X-Amz-Signature=9307c2262227f7def99ce6218ed285bd0faa44f1b42a4b5441918f530f57afe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DKZBWK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ0jziSmIp4wi6BEOM0s5Kde9KIpLwFpEb1GdNNSdtYAiBbERxNXFwJYgwOVAb5e0oXJfn8Jr%2FLOw4foXp%2BOPA0sSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5AcGtlPKNpiuMgUKtwDhOpayuN58uBkn%2FotRjKDAabTVQg7%2BxqpzMhfRslEUjoZUFuoKtB%2BfwAoKncgCoXYwULqvNCElOlgbFoUoBwtch4MzUC0ewo5Fv5od5mr6OL5h%2BuZZRSjI8QB%2FYoEKlHwuXm4blGUlr8c8ZiAkGVQDR6DbWbwFPth6g7TZ%2FbRcD%2BxF%2BUW92kGqZhpbDn8miFn9yQRprfDbaaVPllewUNIDSaYBnvxFeJ3TnG7tHcudb7U2hN0ADyYhlTIECaXcfcvwGDpauUfyY4fIdVoo6Hu2VqgsAbt%2Fomickm3POc9kX394b6Ej1R4EZ6dMr7lATg3KkKBjkPw5TokdQ5pFmGwUFYXEMWrSoILR8ahuLk9jVcCnYjmrrozPUbtxBN6cJaPtjsQQ61nCJ2cEuPxq62Z1E2B2R94aS6KHh%2B7hbdaoQkCbcnTMKLp6672XJbZavkjEr36O%2BC7PjeVZjGgZeIjR9WcMwwmbhd6nsOB6Ucz1x0yLukYinb3yUR%2FFpibYkNIZxLW0cUPz7KzaIAvIC6WGKh4lbAwkjPKYY8iuQBeyzGWJKUvmZPYgGP%2F5ZItZtymsUM9SjDSy0jNt7D1t7xmJE4968HuXmTkZeSwAq%2BPLK9UU7uvzzXFkXKZ4pww%2FIrfxAY6pgH6aAihzBtA9ANXolv4ZU0yoSG1yTYuouv0BZtV5YlOfcZYXDnBTSo7jblrPAVButL49QJe2IXQ4D1CdPEYRtsv7i3aPNk3%2F6uhWG7oF6GDhDgcRv9k8tMv0eBES7LBJBrg8%2FnzI2nhbt%2F%2BHoReMaMwXbfzojQxPYqAo1eWXiuqDqu9Sn9DxgfW6x6lzRMcXFla2%2BEl7uyoM279GGXL7oopvFMytzeK&X-Amz-Signature=145765a25cbdc9011bb6f790cceb72de00be376ebde6ca3fd5bd484c146af953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DKZBWK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ0jziSmIp4wi6BEOM0s5Kde9KIpLwFpEb1GdNNSdtYAiBbERxNXFwJYgwOVAb5e0oXJfn8Jr%2FLOw4foXp%2BOPA0sSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5AcGtlPKNpiuMgUKtwDhOpayuN58uBkn%2FotRjKDAabTVQg7%2BxqpzMhfRslEUjoZUFuoKtB%2BfwAoKncgCoXYwULqvNCElOlgbFoUoBwtch4MzUC0ewo5Fv5od5mr6OL5h%2BuZZRSjI8QB%2FYoEKlHwuXm4blGUlr8c8ZiAkGVQDR6DbWbwFPth6g7TZ%2FbRcD%2BxF%2BUW92kGqZhpbDn8miFn9yQRprfDbaaVPllewUNIDSaYBnvxFeJ3TnG7tHcudb7U2hN0ADyYhlTIECaXcfcvwGDpauUfyY4fIdVoo6Hu2VqgsAbt%2Fomickm3POc9kX394b6Ej1R4EZ6dMr7lATg3KkKBjkPw5TokdQ5pFmGwUFYXEMWrSoILR8ahuLk9jVcCnYjmrrozPUbtxBN6cJaPtjsQQ61nCJ2cEuPxq62Z1E2B2R94aS6KHh%2B7hbdaoQkCbcnTMKLp6672XJbZavkjEr36O%2BC7PjeVZjGgZeIjR9WcMwwmbhd6nsOB6Ucz1x0yLukYinb3yUR%2FFpibYkNIZxLW0cUPz7KzaIAvIC6WGKh4lbAwkjPKYY8iuQBeyzGWJKUvmZPYgGP%2F5ZItZtymsUM9SjDSy0jNt7D1t7xmJE4968HuXmTkZeSwAq%2BPLK9UU7uvzzXFkXKZ4pww%2FIrfxAY6pgH6aAihzBtA9ANXolv4ZU0yoSG1yTYuouv0BZtV5YlOfcZYXDnBTSo7jblrPAVButL49QJe2IXQ4D1CdPEYRtsv7i3aPNk3%2F6uhWG7oF6GDhDgcRv9k8tMv0eBES7LBJBrg8%2FnzI2nhbt%2F%2BHoReMaMwXbfzojQxPYqAo1eWXiuqDqu9Sn9DxgfW6x6lzRMcXFla2%2BEl7uyoM279GGXL7oopvFMytzeK&X-Amz-Signature=9ec638ae5d03115f95c584212d782df7f7fcf7cc75299fd77df402da66b187b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DKZBWK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ0jziSmIp4wi6BEOM0s5Kde9KIpLwFpEb1GdNNSdtYAiBbERxNXFwJYgwOVAb5e0oXJfn8Jr%2FLOw4foXp%2BOPA0sSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5AcGtlPKNpiuMgUKtwDhOpayuN58uBkn%2FotRjKDAabTVQg7%2BxqpzMhfRslEUjoZUFuoKtB%2BfwAoKncgCoXYwULqvNCElOlgbFoUoBwtch4MzUC0ewo5Fv5od5mr6OL5h%2BuZZRSjI8QB%2FYoEKlHwuXm4blGUlr8c8ZiAkGVQDR6DbWbwFPth6g7TZ%2FbRcD%2BxF%2BUW92kGqZhpbDn8miFn9yQRprfDbaaVPllewUNIDSaYBnvxFeJ3TnG7tHcudb7U2hN0ADyYhlTIECaXcfcvwGDpauUfyY4fIdVoo6Hu2VqgsAbt%2Fomickm3POc9kX394b6Ej1R4EZ6dMr7lATg3KkKBjkPw5TokdQ5pFmGwUFYXEMWrSoILR8ahuLk9jVcCnYjmrrozPUbtxBN6cJaPtjsQQ61nCJ2cEuPxq62Z1E2B2R94aS6KHh%2B7hbdaoQkCbcnTMKLp6672XJbZavkjEr36O%2BC7PjeVZjGgZeIjR9WcMwwmbhd6nsOB6Ucz1x0yLukYinb3yUR%2FFpibYkNIZxLW0cUPz7KzaIAvIC6WGKh4lbAwkjPKYY8iuQBeyzGWJKUvmZPYgGP%2F5ZItZtymsUM9SjDSy0jNt7D1t7xmJE4968HuXmTkZeSwAq%2BPLK9UU7uvzzXFkXKZ4pww%2FIrfxAY6pgH6aAihzBtA9ANXolv4ZU0yoSG1yTYuouv0BZtV5YlOfcZYXDnBTSo7jblrPAVButL49QJe2IXQ4D1CdPEYRtsv7i3aPNk3%2F6uhWG7oF6GDhDgcRv9k8tMv0eBES7LBJBrg8%2FnzI2nhbt%2F%2BHoReMaMwXbfzojQxPYqAo1eWXiuqDqu9Sn9DxgfW6x6lzRMcXFla2%2BEl7uyoM279GGXL7oopvFMytzeK&X-Amz-Signature=1c4e604c37bcad4ef7558999c19557a08e5f9b7edd8088afd2cda136b6074e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
