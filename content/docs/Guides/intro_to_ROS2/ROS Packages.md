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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ESIXBF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBowvXdOuT0Z5GdIoT5eDhaKUbkZYZqu6hNjp%2FqZGoasAiEA3cvt0gRNRAdKsPHIgl9aXWQh4j0G16xCg6BP1ZBOWtoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIYda4dPUMN2nMbW9CrcA59AvBTKS4BYQHEeNHuM6obprWSCi5R0KRJ8Orj1hVFeTKEVfqRIDd2ND5sT0CAb3vgbZeOBLnnghOBwDXdFxNZ0B6mEjNqmyj%2Bj%2FKL61zco1XvjG1c6urujQjAAK6qOYZ2%2BhCJtthoUvm4ZutkiAXaQvrCz2SXt%2B6PmWn6kesDpQC28PJNWoxfBpQJ4Rifwp7IyKgSyCbtoc5pG801hpy6yYuhUGXT%2FHAY3TyS4JsW6gX7AslWXE91lOYJj4u8NImtdRBHTJ%2FeLY3jBv4asdnF3VgDZEiQLj0vWWLDys0luaAORz8rF6edqg0HdYmDeSf7BudWJw0U2GLCjHghT4RA%2Fkwh%2Bk%2FqMOK1Q4Ulfu9ydp%2BnxzXp%2BpjVKyFgw%2FHz%2BH9yJnr46xsXzXDtK2T5bt3KNLH8niTSlRT8IE00cQYDP84P2qMgUqgqvBXglM4N6nExSRRfwbUWU9YnVz1odn0V6FBTf0%2FsTyTa7CQb4LEm2EWJB8uYi48Fx2DkUPIyzD7imeb741kGiXHuiNX9Q31paz4tSO7VbqfX0rxFUPAhz%2F4im%2F7sTDLWgfjab3977C6262mb9Mn%2Bi8nokZG18D6Qaw3bk7duHqh1SKKAYpHq1SoBC3zjOVQx84c9oMN28%2Bb0GOqUBseVhoaJbgazHkobUYT%2FWo3gpxxI2dVrk0Mtf8CpGSo7GlETGs6f7JRg1nzaFTr6wI3r1XbMsfr6YP264IGzCr8Ebb9Ie71bkKhsiMeoTk1y7QQEV1u%2FSYCWG1juD3ZLQ1dfLW8pxpwjGEb1QQkhb5FbKdkP68UPs3nkefo2LO0ksLXU3t5qSWOZ0F%2B2reGO3YG3gRqnLDiXkfbloYmpdx0suyVCF&X-Amz-Signature=8cd5c395afd7b963f4d6c7779d86126636d027ab71845c7f3462374d2a8cd5e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ESIXBF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBowvXdOuT0Z5GdIoT5eDhaKUbkZYZqu6hNjp%2FqZGoasAiEA3cvt0gRNRAdKsPHIgl9aXWQh4j0G16xCg6BP1ZBOWtoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIYda4dPUMN2nMbW9CrcA59AvBTKS4BYQHEeNHuM6obprWSCi5R0KRJ8Orj1hVFeTKEVfqRIDd2ND5sT0CAb3vgbZeOBLnnghOBwDXdFxNZ0B6mEjNqmyj%2Bj%2FKL61zco1XvjG1c6urujQjAAK6qOYZ2%2BhCJtthoUvm4ZutkiAXaQvrCz2SXt%2B6PmWn6kesDpQC28PJNWoxfBpQJ4Rifwp7IyKgSyCbtoc5pG801hpy6yYuhUGXT%2FHAY3TyS4JsW6gX7AslWXE91lOYJj4u8NImtdRBHTJ%2FeLY3jBv4asdnF3VgDZEiQLj0vWWLDys0luaAORz8rF6edqg0HdYmDeSf7BudWJw0U2GLCjHghT4RA%2Fkwh%2Bk%2FqMOK1Q4Ulfu9ydp%2BnxzXp%2BpjVKyFgw%2FHz%2BH9yJnr46xsXzXDtK2T5bt3KNLH8niTSlRT8IE00cQYDP84P2qMgUqgqvBXglM4N6nExSRRfwbUWU9YnVz1odn0V6FBTf0%2FsTyTa7CQb4LEm2EWJB8uYi48Fx2DkUPIyzD7imeb741kGiXHuiNX9Q31paz4tSO7VbqfX0rxFUPAhz%2F4im%2F7sTDLWgfjab3977C6262mb9Mn%2Bi8nokZG18D6Qaw3bk7duHqh1SKKAYpHq1SoBC3zjOVQx84c9oMN28%2Bb0GOqUBseVhoaJbgazHkobUYT%2FWo3gpxxI2dVrk0Mtf8CpGSo7GlETGs6f7JRg1nzaFTr6wI3r1XbMsfr6YP264IGzCr8Ebb9Ie71bkKhsiMeoTk1y7QQEV1u%2FSYCWG1juD3ZLQ1dfLW8pxpwjGEb1QQkhb5FbKdkP68UPs3nkefo2LO0ksLXU3t5qSWOZ0F%2B2reGO3YG3gRqnLDiXkfbloYmpdx0suyVCF&X-Amz-Signature=729753fe7ac03e300f2bbfaba5760518fda38d623c0d30e713388501d5297f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ESIXBF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBowvXdOuT0Z5GdIoT5eDhaKUbkZYZqu6hNjp%2FqZGoasAiEA3cvt0gRNRAdKsPHIgl9aXWQh4j0G16xCg6BP1ZBOWtoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIYda4dPUMN2nMbW9CrcA59AvBTKS4BYQHEeNHuM6obprWSCi5R0KRJ8Orj1hVFeTKEVfqRIDd2ND5sT0CAb3vgbZeOBLnnghOBwDXdFxNZ0B6mEjNqmyj%2Bj%2FKL61zco1XvjG1c6urujQjAAK6qOYZ2%2BhCJtthoUvm4ZutkiAXaQvrCz2SXt%2B6PmWn6kesDpQC28PJNWoxfBpQJ4Rifwp7IyKgSyCbtoc5pG801hpy6yYuhUGXT%2FHAY3TyS4JsW6gX7AslWXE91lOYJj4u8NImtdRBHTJ%2FeLY3jBv4asdnF3VgDZEiQLj0vWWLDys0luaAORz8rF6edqg0HdYmDeSf7BudWJw0U2GLCjHghT4RA%2Fkwh%2Bk%2FqMOK1Q4Ulfu9ydp%2BnxzXp%2BpjVKyFgw%2FHz%2BH9yJnr46xsXzXDtK2T5bt3KNLH8niTSlRT8IE00cQYDP84P2qMgUqgqvBXglM4N6nExSRRfwbUWU9YnVz1odn0V6FBTf0%2FsTyTa7CQb4LEm2EWJB8uYi48Fx2DkUPIyzD7imeb741kGiXHuiNX9Q31paz4tSO7VbqfX0rxFUPAhz%2F4im%2F7sTDLWgfjab3977C6262mb9Mn%2Bi8nokZG18D6Qaw3bk7duHqh1SKKAYpHq1SoBC3zjOVQx84c9oMN28%2Bb0GOqUBseVhoaJbgazHkobUYT%2FWo3gpxxI2dVrk0Mtf8CpGSo7GlETGs6f7JRg1nzaFTr6wI3r1XbMsfr6YP264IGzCr8Ebb9Ie71bkKhsiMeoTk1y7QQEV1u%2FSYCWG1juD3ZLQ1dfLW8pxpwjGEb1QQkhb5FbKdkP68UPs3nkefo2LO0ksLXU3t5qSWOZ0F%2B2reGO3YG3gRqnLDiXkfbloYmpdx0suyVCF&X-Amz-Signature=416dac39723558a5c5b4c52550cde48599c786c30dc1c5cb679bdefecea8e0a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ESIXBF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBowvXdOuT0Z5GdIoT5eDhaKUbkZYZqu6hNjp%2FqZGoasAiEA3cvt0gRNRAdKsPHIgl9aXWQh4j0G16xCg6BP1ZBOWtoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIYda4dPUMN2nMbW9CrcA59AvBTKS4BYQHEeNHuM6obprWSCi5R0KRJ8Orj1hVFeTKEVfqRIDd2ND5sT0CAb3vgbZeOBLnnghOBwDXdFxNZ0B6mEjNqmyj%2Bj%2FKL61zco1XvjG1c6urujQjAAK6qOYZ2%2BhCJtthoUvm4ZutkiAXaQvrCz2SXt%2B6PmWn6kesDpQC28PJNWoxfBpQJ4Rifwp7IyKgSyCbtoc5pG801hpy6yYuhUGXT%2FHAY3TyS4JsW6gX7AslWXE91lOYJj4u8NImtdRBHTJ%2FeLY3jBv4asdnF3VgDZEiQLj0vWWLDys0luaAORz8rF6edqg0HdYmDeSf7BudWJw0U2GLCjHghT4RA%2Fkwh%2Bk%2FqMOK1Q4Ulfu9ydp%2BnxzXp%2BpjVKyFgw%2FHz%2BH9yJnr46xsXzXDtK2T5bt3KNLH8niTSlRT8IE00cQYDP84P2qMgUqgqvBXglM4N6nExSRRfwbUWU9YnVz1odn0V6FBTf0%2FsTyTa7CQb4LEm2EWJB8uYi48Fx2DkUPIyzD7imeb741kGiXHuiNX9Q31paz4tSO7VbqfX0rxFUPAhz%2F4im%2F7sTDLWgfjab3977C6262mb9Mn%2Bi8nokZG18D6Qaw3bk7duHqh1SKKAYpHq1SoBC3zjOVQx84c9oMN28%2Bb0GOqUBseVhoaJbgazHkobUYT%2FWo3gpxxI2dVrk0Mtf8CpGSo7GlETGs6f7JRg1nzaFTr6wI3r1XbMsfr6YP264IGzCr8Ebb9Ie71bkKhsiMeoTk1y7QQEV1u%2FSYCWG1juD3ZLQ1dfLW8pxpwjGEb1QQkhb5FbKdkP68UPs3nkefo2LO0ksLXU3t5qSWOZ0F%2B2reGO3YG3gRqnLDiXkfbloYmpdx0suyVCF&X-Amz-Signature=f94d530ee23da181f5f27116d9c8c1f60a7adcf0bd7558c229ccb2e874063921&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ESIXBF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBowvXdOuT0Z5GdIoT5eDhaKUbkZYZqu6hNjp%2FqZGoasAiEA3cvt0gRNRAdKsPHIgl9aXWQh4j0G16xCg6BP1ZBOWtoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIYda4dPUMN2nMbW9CrcA59AvBTKS4BYQHEeNHuM6obprWSCi5R0KRJ8Orj1hVFeTKEVfqRIDd2ND5sT0CAb3vgbZeOBLnnghOBwDXdFxNZ0B6mEjNqmyj%2Bj%2FKL61zco1XvjG1c6urujQjAAK6qOYZ2%2BhCJtthoUvm4ZutkiAXaQvrCz2SXt%2B6PmWn6kesDpQC28PJNWoxfBpQJ4Rifwp7IyKgSyCbtoc5pG801hpy6yYuhUGXT%2FHAY3TyS4JsW6gX7AslWXE91lOYJj4u8NImtdRBHTJ%2FeLY3jBv4asdnF3VgDZEiQLj0vWWLDys0luaAORz8rF6edqg0HdYmDeSf7BudWJw0U2GLCjHghT4RA%2Fkwh%2Bk%2FqMOK1Q4Ulfu9ydp%2BnxzXp%2BpjVKyFgw%2FHz%2BH9yJnr46xsXzXDtK2T5bt3KNLH8niTSlRT8IE00cQYDP84P2qMgUqgqvBXglM4N6nExSRRfwbUWU9YnVz1odn0V6FBTf0%2FsTyTa7CQb4LEm2EWJB8uYi48Fx2DkUPIyzD7imeb741kGiXHuiNX9Q31paz4tSO7VbqfX0rxFUPAhz%2F4im%2F7sTDLWgfjab3977C6262mb9Mn%2Bi8nokZG18D6Qaw3bk7duHqh1SKKAYpHq1SoBC3zjOVQx84c9oMN28%2Bb0GOqUBseVhoaJbgazHkobUYT%2FWo3gpxxI2dVrk0Mtf8CpGSo7GlETGs6f7JRg1nzaFTr6wI3r1XbMsfr6YP264IGzCr8Ebb9Ie71bkKhsiMeoTk1y7QQEV1u%2FSYCWG1juD3ZLQ1dfLW8pxpwjGEb1QQkhb5FbKdkP68UPs3nkefo2LO0ksLXU3t5qSWOZ0F%2B2reGO3YG3gRqnLDiXkfbloYmpdx0suyVCF&X-Amz-Signature=f04fb1faf9787d294a23bfd5550f1889bb28760644fd54157d9c672d35841f88&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ESIXBF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBowvXdOuT0Z5GdIoT5eDhaKUbkZYZqu6hNjp%2FqZGoasAiEA3cvt0gRNRAdKsPHIgl9aXWQh4j0G16xCg6BP1ZBOWtoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIYda4dPUMN2nMbW9CrcA59AvBTKS4BYQHEeNHuM6obprWSCi5R0KRJ8Orj1hVFeTKEVfqRIDd2ND5sT0CAb3vgbZeOBLnnghOBwDXdFxNZ0B6mEjNqmyj%2Bj%2FKL61zco1XvjG1c6urujQjAAK6qOYZ2%2BhCJtthoUvm4ZutkiAXaQvrCz2SXt%2B6PmWn6kesDpQC28PJNWoxfBpQJ4Rifwp7IyKgSyCbtoc5pG801hpy6yYuhUGXT%2FHAY3TyS4JsW6gX7AslWXE91lOYJj4u8NImtdRBHTJ%2FeLY3jBv4asdnF3VgDZEiQLj0vWWLDys0luaAORz8rF6edqg0HdYmDeSf7BudWJw0U2GLCjHghT4RA%2Fkwh%2Bk%2FqMOK1Q4Ulfu9ydp%2BnxzXp%2BpjVKyFgw%2FHz%2BH9yJnr46xsXzXDtK2T5bt3KNLH8niTSlRT8IE00cQYDP84P2qMgUqgqvBXglM4N6nExSRRfwbUWU9YnVz1odn0V6FBTf0%2FsTyTa7CQb4LEm2EWJB8uYi48Fx2DkUPIyzD7imeb741kGiXHuiNX9Q31paz4tSO7VbqfX0rxFUPAhz%2F4im%2F7sTDLWgfjab3977C6262mb9Mn%2Bi8nokZG18D6Qaw3bk7duHqh1SKKAYpHq1SoBC3zjOVQx84c9oMN28%2Bb0GOqUBseVhoaJbgazHkobUYT%2FWo3gpxxI2dVrk0Mtf8CpGSo7GlETGs6f7JRg1nzaFTr6wI3r1XbMsfr6YP264IGzCr8Ebb9Ie71bkKhsiMeoTk1y7QQEV1u%2FSYCWG1juD3ZLQ1dfLW8pxpwjGEb1QQkhb5FbKdkP68UPs3nkefo2LO0ksLXU3t5qSWOZ0F%2B2reGO3YG3gRqnLDiXkfbloYmpdx0suyVCF&X-Amz-Signature=5836e5379e68756afd43071523d7f4ccba0ea7531f470c3dd0b0919914abacef&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ESIXBF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBowvXdOuT0Z5GdIoT5eDhaKUbkZYZqu6hNjp%2FqZGoasAiEA3cvt0gRNRAdKsPHIgl9aXWQh4j0G16xCg6BP1ZBOWtoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIYda4dPUMN2nMbW9CrcA59AvBTKS4BYQHEeNHuM6obprWSCi5R0KRJ8Orj1hVFeTKEVfqRIDd2ND5sT0CAb3vgbZeOBLnnghOBwDXdFxNZ0B6mEjNqmyj%2Bj%2FKL61zco1XvjG1c6urujQjAAK6qOYZ2%2BhCJtthoUvm4ZutkiAXaQvrCz2SXt%2B6PmWn6kesDpQC28PJNWoxfBpQJ4Rifwp7IyKgSyCbtoc5pG801hpy6yYuhUGXT%2FHAY3TyS4JsW6gX7AslWXE91lOYJj4u8NImtdRBHTJ%2FeLY3jBv4asdnF3VgDZEiQLj0vWWLDys0luaAORz8rF6edqg0HdYmDeSf7BudWJw0U2GLCjHghT4RA%2Fkwh%2Bk%2FqMOK1Q4Ulfu9ydp%2BnxzXp%2BpjVKyFgw%2FHz%2BH9yJnr46xsXzXDtK2T5bt3KNLH8niTSlRT8IE00cQYDP84P2qMgUqgqvBXglM4N6nExSRRfwbUWU9YnVz1odn0V6FBTf0%2FsTyTa7CQb4LEm2EWJB8uYi48Fx2DkUPIyzD7imeb741kGiXHuiNX9Q31paz4tSO7VbqfX0rxFUPAhz%2F4im%2F7sTDLWgfjab3977C6262mb9Mn%2Bi8nokZG18D6Qaw3bk7duHqh1SKKAYpHq1SoBC3zjOVQx84c9oMN28%2Bb0GOqUBseVhoaJbgazHkobUYT%2FWo3gpxxI2dVrk0Mtf8CpGSo7GlETGs6f7JRg1nzaFTr6wI3r1XbMsfr6YP264IGzCr8Ebb9Ie71bkKhsiMeoTk1y7QQEV1u%2FSYCWG1juD3ZLQ1dfLW8pxpwjGEb1QQkhb5FbKdkP68UPs3nkefo2LO0ksLXU3t5qSWOZ0F%2B2reGO3YG3gRqnLDiXkfbloYmpdx0suyVCF&X-Amz-Signature=424840933e11dfd612a7880d54e624ae12fb08089bde69feb1fe0c8bd96859d4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
