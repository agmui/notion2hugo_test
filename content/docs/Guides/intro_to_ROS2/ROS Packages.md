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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXALPWEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCak5gqticsuJLBIbXVJKnyb7q2pywdgV%2BKI%2B5v%2FZx1vQIgOovEV%2ByTA%2BrOxKU2%2FZ5Vn9vxN54hlesxCtMCG9RnERAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp6vRvl%2FbhhqTymXCrcA9go7kIFv20nREEpMpRbDwvA8Co6PvZ%2BxgWEbc7WzHTfteI11bKUSWWhr7wqJLFu2CE49w2zFEhdtkI1deD70z3aFhQyPOS8J07Dj165i1PQnNKuCn9LftTAAjEpIFBq5wGugghfFyWtdFv92c%2BN4VZDvXxO67DDVWG5VPYrpjvvFpgQy%2B2%2FQ1ukpD3NxxcqpPbMBuEOU3YX%2Fza0%2FGbUm%2BuHpx5342AZFn8PE%2Bu7VNuBTSGSg6nVeFiGb7g6%2B%2BebToYkIgVybYq3REtLtKdOmQ4RmDMpDbH%2BjfS%2F7UaRdQ8kmO38Al%2BB8rnRGQHWiqqThj5tddBejDflNNciMOZDQ6KzMrwYMskgYMSUdLWXjP3T7b6O%2BKSmFJheEtrAYgGg1O2lWxgHM0HpFRQ42Cnec87c%2B6Sso%2BQVbgwGJm5UmTn6Qdk60dztRJGt9802JZdQhjN9F77iiAIs838w9EVfVBrkDn4XXWFbXueUS1lR2D6Lz9geaG8AD5tYwTcTSM7axAcuZof3VCpczr6pcXtsBP6GWy6yM8SctAi9WZcG8fdTc5vWrHcd10PsGTRyPcEmzRTHHf%2B2kO%2FjC3D%2Bm%2FfOcpoZle26Mxe6oJLJ7H96Bh36SduqMLUMuwPnCBeOMKrU0sQGOqUB3REAZA8coUcKifMJQ7aoCzqYI4qvSZ09Q9SMUlMVGd0YcOT6LbGZ%2FQ7SflQ88ZRAzlAzYv6iRBUOqPjWoaQI%2BVmRRycCNy8L5icBIDSb4hrPj03vFlarQbMUR6w4t1ahz9UzDLHmPpLZf2DBKLmq5%2FnIyaneNVX6LaigCDCtj5jWehCCgZtb9hyrnvQ9Qtjmrpn18wL5YDVoNeiTcU59fmjeHwG4&X-Amz-Signature=040f7438aacb49dd8ea87475222b2e62bf4223921558c040a8d4118226b4d346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXALPWEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCak5gqticsuJLBIbXVJKnyb7q2pywdgV%2BKI%2B5v%2FZx1vQIgOovEV%2ByTA%2BrOxKU2%2FZ5Vn9vxN54hlesxCtMCG9RnERAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp6vRvl%2FbhhqTymXCrcA9go7kIFv20nREEpMpRbDwvA8Co6PvZ%2BxgWEbc7WzHTfteI11bKUSWWhr7wqJLFu2CE49w2zFEhdtkI1deD70z3aFhQyPOS8J07Dj165i1PQnNKuCn9LftTAAjEpIFBq5wGugghfFyWtdFv92c%2BN4VZDvXxO67DDVWG5VPYrpjvvFpgQy%2B2%2FQ1ukpD3NxxcqpPbMBuEOU3YX%2Fza0%2FGbUm%2BuHpx5342AZFn8PE%2Bu7VNuBTSGSg6nVeFiGb7g6%2B%2BebToYkIgVybYq3REtLtKdOmQ4RmDMpDbH%2BjfS%2F7UaRdQ8kmO38Al%2BB8rnRGQHWiqqThj5tddBejDflNNciMOZDQ6KzMrwYMskgYMSUdLWXjP3T7b6O%2BKSmFJheEtrAYgGg1O2lWxgHM0HpFRQ42Cnec87c%2B6Sso%2BQVbgwGJm5UmTn6Qdk60dztRJGt9802JZdQhjN9F77iiAIs838w9EVfVBrkDn4XXWFbXueUS1lR2D6Lz9geaG8AD5tYwTcTSM7axAcuZof3VCpczr6pcXtsBP6GWy6yM8SctAi9WZcG8fdTc5vWrHcd10PsGTRyPcEmzRTHHf%2B2kO%2FjC3D%2Bm%2FfOcpoZle26Mxe6oJLJ7H96Bh36SduqMLUMuwPnCBeOMKrU0sQGOqUB3REAZA8coUcKifMJQ7aoCzqYI4qvSZ09Q9SMUlMVGd0YcOT6LbGZ%2FQ7SflQ88ZRAzlAzYv6iRBUOqPjWoaQI%2BVmRRycCNy8L5icBIDSb4hrPj03vFlarQbMUR6w4t1ahz9UzDLHmPpLZf2DBKLmq5%2FnIyaneNVX6LaigCDCtj5jWehCCgZtb9hyrnvQ9Qtjmrpn18wL5YDVoNeiTcU59fmjeHwG4&X-Amz-Signature=f105e7f75b16a38bb8f6dbb3d1321606447e63ccb382fbdf32acab32c5d85767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXALPWEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCak5gqticsuJLBIbXVJKnyb7q2pywdgV%2BKI%2B5v%2FZx1vQIgOovEV%2ByTA%2BrOxKU2%2FZ5Vn9vxN54hlesxCtMCG9RnERAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp6vRvl%2FbhhqTymXCrcA9go7kIFv20nREEpMpRbDwvA8Co6PvZ%2BxgWEbc7WzHTfteI11bKUSWWhr7wqJLFu2CE49w2zFEhdtkI1deD70z3aFhQyPOS8J07Dj165i1PQnNKuCn9LftTAAjEpIFBq5wGugghfFyWtdFv92c%2BN4VZDvXxO67DDVWG5VPYrpjvvFpgQy%2B2%2FQ1ukpD3NxxcqpPbMBuEOU3YX%2Fza0%2FGbUm%2BuHpx5342AZFn8PE%2Bu7VNuBTSGSg6nVeFiGb7g6%2B%2BebToYkIgVybYq3REtLtKdOmQ4RmDMpDbH%2BjfS%2F7UaRdQ8kmO38Al%2BB8rnRGQHWiqqThj5tddBejDflNNciMOZDQ6KzMrwYMskgYMSUdLWXjP3T7b6O%2BKSmFJheEtrAYgGg1O2lWxgHM0HpFRQ42Cnec87c%2B6Sso%2BQVbgwGJm5UmTn6Qdk60dztRJGt9802JZdQhjN9F77iiAIs838w9EVfVBrkDn4XXWFbXueUS1lR2D6Lz9geaG8AD5tYwTcTSM7axAcuZof3VCpczr6pcXtsBP6GWy6yM8SctAi9WZcG8fdTc5vWrHcd10PsGTRyPcEmzRTHHf%2B2kO%2FjC3D%2Bm%2FfOcpoZle26Mxe6oJLJ7H96Bh36SduqMLUMuwPnCBeOMKrU0sQGOqUB3REAZA8coUcKifMJQ7aoCzqYI4qvSZ09Q9SMUlMVGd0YcOT6LbGZ%2FQ7SflQ88ZRAzlAzYv6iRBUOqPjWoaQI%2BVmRRycCNy8L5icBIDSb4hrPj03vFlarQbMUR6w4t1ahz9UzDLHmPpLZf2DBKLmq5%2FnIyaneNVX6LaigCDCtj5jWehCCgZtb9hyrnvQ9Qtjmrpn18wL5YDVoNeiTcU59fmjeHwG4&X-Amz-Signature=1c3fbca6d6a129a761c38828ba0bfd054668e15b59d80f168feb02366677e53b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXALPWEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCak5gqticsuJLBIbXVJKnyb7q2pywdgV%2BKI%2B5v%2FZx1vQIgOovEV%2ByTA%2BrOxKU2%2FZ5Vn9vxN54hlesxCtMCG9RnERAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp6vRvl%2FbhhqTymXCrcA9go7kIFv20nREEpMpRbDwvA8Co6PvZ%2BxgWEbc7WzHTfteI11bKUSWWhr7wqJLFu2CE49w2zFEhdtkI1deD70z3aFhQyPOS8J07Dj165i1PQnNKuCn9LftTAAjEpIFBq5wGugghfFyWtdFv92c%2BN4VZDvXxO67DDVWG5VPYrpjvvFpgQy%2B2%2FQ1ukpD3NxxcqpPbMBuEOU3YX%2Fza0%2FGbUm%2BuHpx5342AZFn8PE%2Bu7VNuBTSGSg6nVeFiGb7g6%2B%2BebToYkIgVybYq3REtLtKdOmQ4RmDMpDbH%2BjfS%2F7UaRdQ8kmO38Al%2BB8rnRGQHWiqqThj5tddBejDflNNciMOZDQ6KzMrwYMskgYMSUdLWXjP3T7b6O%2BKSmFJheEtrAYgGg1O2lWxgHM0HpFRQ42Cnec87c%2B6Sso%2BQVbgwGJm5UmTn6Qdk60dztRJGt9802JZdQhjN9F77iiAIs838w9EVfVBrkDn4XXWFbXueUS1lR2D6Lz9geaG8AD5tYwTcTSM7axAcuZof3VCpczr6pcXtsBP6GWy6yM8SctAi9WZcG8fdTc5vWrHcd10PsGTRyPcEmzRTHHf%2B2kO%2FjC3D%2Bm%2FfOcpoZle26Mxe6oJLJ7H96Bh36SduqMLUMuwPnCBeOMKrU0sQGOqUB3REAZA8coUcKifMJQ7aoCzqYI4qvSZ09Q9SMUlMVGd0YcOT6LbGZ%2FQ7SflQ88ZRAzlAzYv6iRBUOqPjWoaQI%2BVmRRycCNy8L5icBIDSb4hrPj03vFlarQbMUR6w4t1ahz9UzDLHmPpLZf2DBKLmq5%2FnIyaneNVX6LaigCDCtj5jWehCCgZtb9hyrnvQ9Qtjmrpn18wL5YDVoNeiTcU59fmjeHwG4&X-Amz-Signature=7d62c2b90de05945b6ea89d09cb7c8537275317df30e949dcdf3c6000f5da6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXALPWEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCak5gqticsuJLBIbXVJKnyb7q2pywdgV%2BKI%2B5v%2FZx1vQIgOovEV%2ByTA%2BrOxKU2%2FZ5Vn9vxN54hlesxCtMCG9RnERAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp6vRvl%2FbhhqTymXCrcA9go7kIFv20nREEpMpRbDwvA8Co6PvZ%2BxgWEbc7WzHTfteI11bKUSWWhr7wqJLFu2CE49w2zFEhdtkI1deD70z3aFhQyPOS8J07Dj165i1PQnNKuCn9LftTAAjEpIFBq5wGugghfFyWtdFv92c%2BN4VZDvXxO67DDVWG5VPYrpjvvFpgQy%2B2%2FQ1ukpD3NxxcqpPbMBuEOU3YX%2Fza0%2FGbUm%2BuHpx5342AZFn8PE%2Bu7VNuBTSGSg6nVeFiGb7g6%2B%2BebToYkIgVybYq3REtLtKdOmQ4RmDMpDbH%2BjfS%2F7UaRdQ8kmO38Al%2BB8rnRGQHWiqqThj5tddBejDflNNciMOZDQ6KzMrwYMskgYMSUdLWXjP3T7b6O%2BKSmFJheEtrAYgGg1O2lWxgHM0HpFRQ42Cnec87c%2B6Sso%2BQVbgwGJm5UmTn6Qdk60dztRJGt9802JZdQhjN9F77iiAIs838w9EVfVBrkDn4XXWFbXueUS1lR2D6Lz9geaG8AD5tYwTcTSM7axAcuZof3VCpczr6pcXtsBP6GWy6yM8SctAi9WZcG8fdTc5vWrHcd10PsGTRyPcEmzRTHHf%2B2kO%2FjC3D%2Bm%2FfOcpoZle26Mxe6oJLJ7H96Bh36SduqMLUMuwPnCBeOMKrU0sQGOqUB3REAZA8coUcKifMJQ7aoCzqYI4qvSZ09Q9SMUlMVGd0YcOT6LbGZ%2FQ7SflQ88ZRAzlAzYv6iRBUOqPjWoaQI%2BVmRRycCNy8L5icBIDSb4hrPj03vFlarQbMUR6w4t1ahz9UzDLHmPpLZf2DBKLmq5%2FnIyaneNVX6LaigCDCtj5jWehCCgZtb9hyrnvQ9Qtjmrpn18wL5YDVoNeiTcU59fmjeHwG4&X-Amz-Signature=44b8c125d2b71e5d45d6750db990c636968822439efb88e50faa2c2ce1c8e5bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXALPWEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCak5gqticsuJLBIbXVJKnyb7q2pywdgV%2BKI%2B5v%2FZx1vQIgOovEV%2ByTA%2BrOxKU2%2FZ5Vn9vxN54hlesxCtMCG9RnERAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp6vRvl%2FbhhqTymXCrcA9go7kIFv20nREEpMpRbDwvA8Co6PvZ%2BxgWEbc7WzHTfteI11bKUSWWhr7wqJLFu2CE49w2zFEhdtkI1deD70z3aFhQyPOS8J07Dj165i1PQnNKuCn9LftTAAjEpIFBq5wGugghfFyWtdFv92c%2BN4VZDvXxO67DDVWG5VPYrpjvvFpgQy%2B2%2FQ1ukpD3NxxcqpPbMBuEOU3YX%2Fza0%2FGbUm%2BuHpx5342AZFn8PE%2Bu7VNuBTSGSg6nVeFiGb7g6%2B%2BebToYkIgVybYq3REtLtKdOmQ4RmDMpDbH%2BjfS%2F7UaRdQ8kmO38Al%2BB8rnRGQHWiqqThj5tddBejDflNNciMOZDQ6KzMrwYMskgYMSUdLWXjP3T7b6O%2BKSmFJheEtrAYgGg1O2lWxgHM0HpFRQ42Cnec87c%2B6Sso%2BQVbgwGJm5UmTn6Qdk60dztRJGt9802JZdQhjN9F77iiAIs838w9EVfVBrkDn4XXWFbXueUS1lR2D6Lz9geaG8AD5tYwTcTSM7axAcuZof3VCpczr6pcXtsBP6GWy6yM8SctAi9WZcG8fdTc5vWrHcd10PsGTRyPcEmzRTHHf%2B2kO%2FjC3D%2Bm%2FfOcpoZle26Mxe6oJLJ7H96Bh36SduqMLUMuwPnCBeOMKrU0sQGOqUB3REAZA8coUcKifMJQ7aoCzqYI4qvSZ09Q9SMUlMVGd0YcOT6LbGZ%2FQ7SflQ88ZRAzlAzYv6iRBUOqPjWoaQI%2BVmRRycCNy8L5icBIDSb4hrPj03vFlarQbMUR6w4t1ahz9UzDLHmPpLZf2DBKLmq5%2FnIyaneNVX6LaigCDCtj5jWehCCgZtb9hyrnvQ9Qtjmrpn18wL5YDVoNeiTcU59fmjeHwG4&X-Amz-Signature=9aa7a34c8c86222f1984c5ac42441e3634fad61a06931c7195a1a6913f06db41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXALPWEK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCak5gqticsuJLBIbXVJKnyb7q2pywdgV%2BKI%2B5v%2FZx1vQIgOovEV%2ByTA%2BrOxKU2%2FZ5Vn9vxN54hlesxCtMCG9RnERAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp6vRvl%2FbhhqTymXCrcA9go7kIFv20nREEpMpRbDwvA8Co6PvZ%2BxgWEbc7WzHTfteI11bKUSWWhr7wqJLFu2CE49w2zFEhdtkI1deD70z3aFhQyPOS8J07Dj165i1PQnNKuCn9LftTAAjEpIFBq5wGugghfFyWtdFv92c%2BN4VZDvXxO67DDVWG5VPYrpjvvFpgQy%2B2%2FQ1ukpD3NxxcqpPbMBuEOU3YX%2Fza0%2FGbUm%2BuHpx5342AZFn8PE%2Bu7VNuBTSGSg6nVeFiGb7g6%2B%2BebToYkIgVybYq3REtLtKdOmQ4RmDMpDbH%2BjfS%2F7UaRdQ8kmO38Al%2BB8rnRGQHWiqqThj5tddBejDflNNciMOZDQ6KzMrwYMskgYMSUdLWXjP3T7b6O%2BKSmFJheEtrAYgGg1O2lWxgHM0HpFRQ42Cnec87c%2B6Sso%2BQVbgwGJm5UmTn6Qdk60dztRJGt9802JZdQhjN9F77iiAIs838w9EVfVBrkDn4XXWFbXueUS1lR2D6Lz9geaG8AD5tYwTcTSM7axAcuZof3VCpczr6pcXtsBP6GWy6yM8SctAi9WZcG8fdTc5vWrHcd10PsGTRyPcEmzRTHHf%2B2kO%2FjC3D%2Bm%2FfOcpoZle26Mxe6oJLJ7H96Bh36SduqMLUMuwPnCBeOMKrU0sQGOqUB3REAZA8coUcKifMJQ7aoCzqYI4qvSZ09Q9SMUlMVGd0YcOT6LbGZ%2FQ7SflQ88ZRAzlAzYv6iRBUOqPjWoaQI%2BVmRRycCNy8L5icBIDSb4hrPj03vFlarQbMUR6w4t1ahz9UzDLHmPpLZf2DBKLmq5%2FnIyaneNVX6LaigCDCtj5jWehCCgZtb9hyrnvQ9Qtjmrpn18wL5YDVoNeiTcU59fmjeHwG4&X-Amz-Signature=abeb6dff3f85b66c22cca4ac94a316dc9f4c5720709414d85281bcd9722e38d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
