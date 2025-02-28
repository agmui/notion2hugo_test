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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCZD5NA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHEED29awzZA2x1lk9%2FNga9Ry4fEymeyZEK8sc0IJWS0AiEAlH%2Fi1uoQ0vnNjBk0gOa9obZaKndtIMaQh0PejsLWzowqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYsuUbMDxQripEqmyrcA4R4mlDDo9Z1PBp9QRpab6zw4ReL%2BXkYWOMrVUhhTMdea2IGSkU6Tj%2BBXe8KDiBfUhrTIg%2BZDQNvd4fyMXD%2F9qiz%2F5MxOvuIyK3hOFfrqf97qazQdnuqE4U0nyn7JTiXA6Dh4EuCNzElKiTz3cKQ4Tk5oUdItZW3c%2FKELsf8lvi%2BQquNeGZaTd7Y7FEdSMYwXCeKLF5B8fI%2B3paFbgAcvowEpfyOotXViISpMpbDN84EJTwynYrfvmzSLrBVhFebCWVYnZ6Ih4QtpMKP%2Fvpw9jONkL66MVwRCqWcdWIulE%2FJ3d4qiJmi3vEtqKU9RfBnAlspKxjNbJfXlDrHSu63wRUony08Can%2FmAseZ6LrYq7OnsJsGfvzs7qKBm2X%2FzgJou1kYC9m7DFdP9%2F5QHpC%2BG8uWkIfYAnXAbcwXxRsXiVSwiYuxbZR1fwRAM42Ejs%2FnegnFquj5qnoXQfS%2BPCJYPSGHgdyiOxVfEQs%2BLwXd8Ze5YSjR50FOxA%2BU5q200eSIWsrRNPcX9iGBlHna2AxhZLWhSASlWmAPwl1V6H8m0Ge5XFxoGcuR4slP3ylLMpI0Pz6waxx0guUPM0XWFDGiHfHhILh3JEIoU4UngEiTK5mIVxzQZLkTxAfTfE5MPr2hb4GOqUBYQ4y39r8pyuEObQJtZyu9fvRI0%2BbpO5ygiQu8NnHCVgiraecIJPDsRE5jm25tCOe1hU2FyIwN1kNIL%2B%2BE3Es1Ha3Fl7HbnvxljbgT52huk0ZWg%2B5sSt5IqzVPki%2Bwtb%2FRESPwDp9OLqFnWcHzryR6ph6wrw18esBXGSZ%2FP4B0XrgePPK5qCW804z4kYvnJME1maiUqUkxsGqCfXrBrk%2FXpdUIGNO&X-Amz-Signature=a354946b8978ce193ab174dff1fb4077ef9c815612f05a5c0f35fd4de08b9886&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCZD5NA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHEED29awzZA2x1lk9%2FNga9Ry4fEymeyZEK8sc0IJWS0AiEAlH%2Fi1uoQ0vnNjBk0gOa9obZaKndtIMaQh0PejsLWzowqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYsuUbMDxQripEqmyrcA4R4mlDDo9Z1PBp9QRpab6zw4ReL%2BXkYWOMrVUhhTMdea2IGSkU6Tj%2BBXe8KDiBfUhrTIg%2BZDQNvd4fyMXD%2F9qiz%2F5MxOvuIyK3hOFfrqf97qazQdnuqE4U0nyn7JTiXA6Dh4EuCNzElKiTz3cKQ4Tk5oUdItZW3c%2FKELsf8lvi%2BQquNeGZaTd7Y7FEdSMYwXCeKLF5B8fI%2B3paFbgAcvowEpfyOotXViISpMpbDN84EJTwynYrfvmzSLrBVhFebCWVYnZ6Ih4QtpMKP%2Fvpw9jONkL66MVwRCqWcdWIulE%2FJ3d4qiJmi3vEtqKU9RfBnAlspKxjNbJfXlDrHSu63wRUony08Can%2FmAseZ6LrYq7OnsJsGfvzs7qKBm2X%2FzgJou1kYC9m7DFdP9%2F5QHpC%2BG8uWkIfYAnXAbcwXxRsXiVSwiYuxbZR1fwRAM42Ejs%2FnegnFquj5qnoXQfS%2BPCJYPSGHgdyiOxVfEQs%2BLwXd8Ze5YSjR50FOxA%2BU5q200eSIWsrRNPcX9iGBlHna2AxhZLWhSASlWmAPwl1V6H8m0Ge5XFxoGcuR4slP3ylLMpI0Pz6waxx0guUPM0XWFDGiHfHhILh3JEIoU4UngEiTK5mIVxzQZLkTxAfTfE5MPr2hb4GOqUBYQ4y39r8pyuEObQJtZyu9fvRI0%2BbpO5ygiQu8NnHCVgiraecIJPDsRE5jm25tCOe1hU2FyIwN1kNIL%2B%2BE3Es1Ha3Fl7HbnvxljbgT52huk0ZWg%2B5sSt5IqzVPki%2Bwtb%2FRESPwDp9OLqFnWcHzryR6ph6wrw18esBXGSZ%2FP4B0XrgePPK5qCW804z4kYvnJME1maiUqUkxsGqCfXrBrk%2FXpdUIGNO&X-Amz-Signature=f7dee046cd18ca3ad662085c472be643c4904c53cfa5bc5fd39cdac7ca450603&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCZD5NA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHEED29awzZA2x1lk9%2FNga9Ry4fEymeyZEK8sc0IJWS0AiEAlH%2Fi1uoQ0vnNjBk0gOa9obZaKndtIMaQh0PejsLWzowqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYsuUbMDxQripEqmyrcA4R4mlDDo9Z1PBp9QRpab6zw4ReL%2BXkYWOMrVUhhTMdea2IGSkU6Tj%2BBXe8KDiBfUhrTIg%2BZDQNvd4fyMXD%2F9qiz%2F5MxOvuIyK3hOFfrqf97qazQdnuqE4U0nyn7JTiXA6Dh4EuCNzElKiTz3cKQ4Tk5oUdItZW3c%2FKELsf8lvi%2BQquNeGZaTd7Y7FEdSMYwXCeKLF5B8fI%2B3paFbgAcvowEpfyOotXViISpMpbDN84EJTwynYrfvmzSLrBVhFebCWVYnZ6Ih4QtpMKP%2Fvpw9jONkL66MVwRCqWcdWIulE%2FJ3d4qiJmi3vEtqKU9RfBnAlspKxjNbJfXlDrHSu63wRUony08Can%2FmAseZ6LrYq7OnsJsGfvzs7qKBm2X%2FzgJou1kYC9m7DFdP9%2F5QHpC%2BG8uWkIfYAnXAbcwXxRsXiVSwiYuxbZR1fwRAM42Ejs%2FnegnFquj5qnoXQfS%2BPCJYPSGHgdyiOxVfEQs%2BLwXd8Ze5YSjR50FOxA%2BU5q200eSIWsrRNPcX9iGBlHna2AxhZLWhSASlWmAPwl1V6H8m0Ge5XFxoGcuR4slP3ylLMpI0Pz6waxx0guUPM0XWFDGiHfHhILh3JEIoU4UngEiTK5mIVxzQZLkTxAfTfE5MPr2hb4GOqUBYQ4y39r8pyuEObQJtZyu9fvRI0%2BbpO5ygiQu8NnHCVgiraecIJPDsRE5jm25tCOe1hU2FyIwN1kNIL%2B%2BE3Es1Ha3Fl7HbnvxljbgT52huk0ZWg%2B5sSt5IqzVPki%2Bwtb%2FRESPwDp9OLqFnWcHzryR6ph6wrw18esBXGSZ%2FP4B0XrgePPK5qCW804z4kYvnJME1maiUqUkxsGqCfXrBrk%2FXpdUIGNO&X-Amz-Signature=55efb78e025bc6e1ac8d2f38f710da193666faa14d4165960761ad6d0d750eb2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCZD5NA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHEED29awzZA2x1lk9%2FNga9Ry4fEymeyZEK8sc0IJWS0AiEAlH%2Fi1uoQ0vnNjBk0gOa9obZaKndtIMaQh0PejsLWzowqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYsuUbMDxQripEqmyrcA4R4mlDDo9Z1PBp9QRpab6zw4ReL%2BXkYWOMrVUhhTMdea2IGSkU6Tj%2BBXe8KDiBfUhrTIg%2BZDQNvd4fyMXD%2F9qiz%2F5MxOvuIyK3hOFfrqf97qazQdnuqE4U0nyn7JTiXA6Dh4EuCNzElKiTz3cKQ4Tk5oUdItZW3c%2FKELsf8lvi%2BQquNeGZaTd7Y7FEdSMYwXCeKLF5B8fI%2B3paFbgAcvowEpfyOotXViISpMpbDN84EJTwynYrfvmzSLrBVhFebCWVYnZ6Ih4QtpMKP%2Fvpw9jONkL66MVwRCqWcdWIulE%2FJ3d4qiJmi3vEtqKU9RfBnAlspKxjNbJfXlDrHSu63wRUony08Can%2FmAseZ6LrYq7OnsJsGfvzs7qKBm2X%2FzgJou1kYC9m7DFdP9%2F5QHpC%2BG8uWkIfYAnXAbcwXxRsXiVSwiYuxbZR1fwRAM42Ejs%2FnegnFquj5qnoXQfS%2BPCJYPSGHgdyiOxVfEQs%2BLwXd8Ze5YSjR50FOxA%2BU5q200eSIWsrRNPcX9iGBlHna2AxhZLWhSASlWmAPwl1V6H8m0Ge5XFxoGcuR4slP3ylLMpI0Pz6waxx0guUPM0XWFDGiHfHhILh3JEIoU4UngEiTK5mIVxzQZLkTxAfTfE5MPr2hb4GOqUBYQ4y39r8pyuEObQJtZyu9fvRI0%2BbpO5ygiQu8NnHCVgiraecIJPDsRE5jm25tCOe1hU2FyIwN1kNIL%2B%2BE3Es1Ha3Fl7HbnvxljbgT52huk0ZWg%2B5sSt5IqzVPki%2Bwtb%2FRESPwDp9OLqFnWcHzryR6ph6wrw18esBXGSZ%2FP4B0XrgePPK5qCW804z4kYvnJME1maiUqUkxsGqCfXrBrk%2FXpdUIGNO&X-Amz-Signature=1b4fad42503ee4fd9df84ffa0cdbd2903a4df7cb07a388c7412e8b1817572f56&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCZD5NA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHEED29awzZA2x1lk9%2FNga9Ry4fEymeyZEK8sc0IJWS0AiEAlH%2Fi1uoQ0vnNjBk0gOa9obZaKndtIMaQh0PejsLWzowqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYsuUbMDxQripEqmyrcA4R4mlDDo9Z1PBp9QRpab6zw4ReL%2BXkYWOMrVUhhTMdea2IGSkU6Tj%2BBXe8KDiBfUhrTIg%2BZDQNvd4fyMXD%2F9qiz%2F5MxOvuIyK3hOFfrqf97qazQdnuqE4U0nyn7JTiXA6Dh4EuCNzElKiTz3cKQ4Tk5oUdItZW3c%2FKELsf8lvi%2BQquNeGZaTd7Y7FEdSMYwXCeKLF5B8fI%2B3paFbgAcvowEpfyOotXViISpMpbDN84EJTwynYrfvmzSLrBVhFebCWVYnZ6Ih4QtpMKP%2Fvpw9jONkL66MVwRCqWcdWIulE%2FJ3d4qiJmi3vEtqKU9RfBnAlspKxjNbJfXlDrHSu63wRUony08Can%2FmAseZ6LrYq7OnsJsGfvzs7qKBm2X%2FzgJou1kYC9m7DFdP9%2F5QHpC%2BG8uWkIfYAnXAbcwXxRsXiVSwiYuxbZR1fwRAM42Ejs%2FnegnFquj5qnoXQfS%2BPCJYPSGHgdyiOxVfEQs%2BLwXd8Ze5YSjR50FOxA%2BU5q200eSIWsrRNPcX9iGBlHna2AxhZLWhSASlWmAPwl1V6H8m0Ge5XFxoGcuR4slP3ylLMpI0Pz6waxx0guUPM0XWFDGiHfHhILh3JEIoU4UngEiTK5mIVxzQZLkTxAfTfE5MPr2hb4GOqUBYQ4y39r8pyuEObQJtZyu9fvRI0%2BbpO5ygiQu8NnHCVgiraecIJPDsRE5jm25tCOe1hU2FyIwN1kNIL%2B%2BE3Es1Ha3Fl7HbnvxljbgT52huk0ZWg%2B5sSt5IqzVPki%2Bwtb%2FRESPwDp9OLqFnWcHzryR6ph6wrw18esBXGSZ%2FP4B0XrgePPK5qCW804z4kYvnJME1maiUqUkxsGqCfXrBrk%2FXpdUIGNO&X-Amz-Signature=d2bd3fc05a9d11d719edfd67132ed0563defd69ab80c04f886576c93a4fc1498&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCZD5NA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHEED29awzZA2x1lk9%2FNga9Ry4fEymeyZEK8sc0IJWS0AiEAlH%2Fi1uoQ0vnNjBk0gOa9obZaKndtIMaQh0PejsLWzowqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYsuUbMDxQripEqmyrcA4R4mlDDo9Z1PBp9QRpab6zw4ReL%2BXkYWOMrVUhhTMdea2IGSkU6Tj%2BBXe8KDiBfUhrTIg%2BZDQNvd4fyMXD%2F9qiz%2F5MxOvuIyK3hOFfrqf97qazQdnuqE4U0nyn7JTiXA6Dh4EuCNzElKiTz3cKQ4Tk5oUdItZW3c%2FKELsf8lvi%2BQquNeGZaTd7Y7FEdSMYwXCeKLF5B8fI%2B3paFbgAcvowEpfyOotXViISpMpbDN84EJTwynYrfvmzSLrBVhFebCWVYnZ6Ih4QtpMKP%2Fvpw9jONkL66MVwRCqWcdWIulE%2FJ3d4qiJmi3vEtqKU9RfBnAlspKxjNbJfXlDrHSu63wRUony08Can%2FmAseZ6LrYq7OnsJsGfvzs7qKBm2X%2FzgJou1kYC9m7DFdP9%2F5QHpC%2BG8uWkIfYAnXAbcwXxRsXiVSwiYuxbZR1fwRAM42Ejs%2FnegnFquj5qnoXQfS%2BPCJYPSGHgdyiOxVfEQs%2BLwXd8Ze5YSjR50FOxA%2BU5q200eSIWsrRNPcX9iGBlHna2AxhZLWhSASlWmAPwl1V6H8m0Ge5XFxoGcuR4slP3ylLMpI0Pz6waxx0guUPM0XWFDGiHfHhILh3JEIoU4UngEiTK5mIVxzQZLkTxAfTfE5MPr2hb4GOqUBYQ4y39r8pyuEObQJtZyu9fvRI0%2BbpO5ygiQu8NnHCVgiraecIJPDsRE5jm25tCOe1hU2FyIwN1kNIL%2B%2BE3Es1Ha3Fl7HbnvxljbgT52huk0ZWg%2B5sSt5IqzVPki%2Bwtb%2FRESPwDp9OLqFnWcHzryR6ph6wrw18esBXGSZ%2FP4B0XrgePPK5qCW804z4kYvnJME1maiUqUkxsGqCfXrBrk%2FXpdUIGNO&X-Amz-Signature=e2936fd3943c82d817a91d2a0d8eaf84eaae7b2dddf5ba8fadb7579335542c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCZD5NA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHEED29awzZA2x1lk9%2FNga9Ry4fEymeyZEK8sc0IJWS0AiEAlH%2Fi1uoQ0vnNjBk0gOa9obZaKndtIMaQh0PejsLWzowqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYsuUbMDxQripEqmyrcA4R4mlDDo9Z1PBp9QRpab6zw4ReL%2BXkYWOMrVUhhTMdea2IGSkU6Tj%2BBXe8KDiBfUhrTIg%2BZDQNvd4fyMXD%2F9qiz%2F5MxOvuIyK3hOFfrqf97qazQdnuqE4U0nyn7JTiXA6Dh4EuCNzElKiTz3cKQ4Tk5oUdItZW3c%2FKELsf8lvi%2BQquNeGZaTd7Y7FEdSMYwXCeKLF5B8fI%2B3paFbgAcvowEpfyOotXViISpMpbDN84EJTwynYrfvmzSLrBVhFebCWVYnZ6Ih4QtpMKP%2Fvpw9jONkL66MVwRCqWcdWIulE%2FJ3d4qiJmi3vEtqKU9RfBnAlspKxjNbJfXlDrHSu63wRUony08Can%2FmAseZ6LrYq7OnsJsGfvzs7qKBm2X%2FzgJou1kYC9m7DFdP9%2F5QHpC%2BG8uWkIfYAnXAbcwXxRsXiVSwiYuxbZR1fwRAM42Ejs%2FnegnFquj5qnoXQfS%2BPCJYPSGHgdyiOxVfEQs%2BLwXd8Ze5YSjR50FOxA%2BU5q200eSIWsrRNPcX9iGBlHna2AxhZLWhSASlWmAPwl1V6H8m0Ge5XFxoGcuR4slP3ylLMpI0Pz6waxx0guUPM0XWFDGiHfHhILh3JEIoU4UngEiTK5mIVxzQZLkTxAfTfE5MPr2hb4GOqUBYQ4y39r8pyuEObQJtZyu9fvRI0%2BbpO5ygiQu8NnHCVgiraecIJPDsRE5jm25tCOe1hU2FyIwN1kNIL%2B%2BE3Es1Ha3Fl7HbnvxljbgT52huk0ZWg%2B5sSt5IqzVPki%2Bwtb%2FRESPwDp9OLqFnWcHzryR6ph6wrw18esBXGSZ%2FP4B0XrgePPK5qCW804z4kYvnJME1maiUqUkxsGqCfXrBrk%2FXpdUIGNO&X-Amz-Signature=b9b0facd559c8e28f1a529e01eb8774b1523b16ecb82db4fa62fafb2d88ba6be&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
