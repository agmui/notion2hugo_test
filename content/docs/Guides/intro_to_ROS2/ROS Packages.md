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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2UCYDY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZYX4lrmW3TLwv9g%2B0y8yb8i5y5guskAlhvUNd8dORRQIhAOPeY9hY7vv9ityJGVSvmO0Net29YCCPGUOW71kcPf7gKv8DCCcQABoMNjM3NDIzMTgzODA1IgxV1YbIxoEEdhYp31Qq3ANKIrxvcZMQZCtnCUqYcx7oGCBNbhNRm0amCQG%2Fy507dmiMYy4SNrr%2BS1KWKnMgGucd61GHbIydYFkgeZ3AKk9YsKHuZlWl%2BPSUu5CTkOTl6Oob3DXIsqqthG3HvRqHuXYOE82mbeoefkUtBeRu2i11jkp1CA1lqiXSLUV6e37641jTeFurppaHGb4mqQo3mSeRYXEmYn9rWEeBZVKJkg7bdQ%2BoIcYCaUd2H%2FdF3oX2lRp7rAOQQGoId0C8h1vP4YgfIX9oxcyRhkPq3fs%2F7vJxRM4X1wcSmoI2stQUrwrDBtCsIuYm%2BkBRzAD4AWleFSraFA%2FxMsTgUoouzD8Yj8F8NlodJsRaMKh%2Bf3brsc01HBkhE8Pld5NPhWR9aAZpw2eCSLwf%2FaSZ666PdVenxafvzFhr1DIcQ%2BS0FR9AeZn7kCTYTdyIi5OY07iESgvx1l%2BszyPWVpA3NNBDal6bIwxUkq5dQEsue8QcdDEJDeBb02MeAY%2BRifK0aBkC3xLWOjHr7O5d98VvWCb7%2BH%2FJcA28vMgh7sXUeNg8FdFL6HccjZbTX67oRhHN5pVpxEE8XKjF8vMrqRjxF8381ToJXEg%2FwSwW9mrDz2Ruq9iLEkhw2Ho397J58NAF2%2FWJdzCChZbBBjqkAT2UoV1Z1nubXV4F%2BWswrSaKtzbBgxrr9XWq3wQ%2BFkM8LLZdE214m%2BbtmLgOcB42ARRqTC%2BjBsdYYID71FEpXVCQAXDWjV6qu4%2BH%2F0NuWbXYBOvgJdzjVZofDds8juFk5iQUwKbYqDCLSENEKhYLFHjMPbwav7z5EB0UFSD5wliO9x%2BoercKU6rhieT%2FOIdHrTPvdtbdmKh1NmnMCePBh5OqQi9R&X-Amz-Signature=9c67bd4e495d7c78b3bc823c1e095008b2c11e941ffe0a4ee555ca9e5c97dacb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2UCYDY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZYX4lrmW3TLwv9g%2B0y8yb8i5y5guskAlhvUNd8dORRQIhAOPeY9hY7vv9ityJGVSvmO0Net29YCCPGUOW71kcPf7gKv8DCCcQABoMNjM3NDIzMTgzODA1IgxV1YbIxoEEdhYp31Qq3ANKIrxvcZMQZCtnCUqYcx7oGCBNbhNRm0amCQG%2Fy507dmiMYy4SNrr%2BS1KWKnMgGucd61GHbIydYFkgeZ3AKk9YsKHuZlWl%2BPSUu5CTkOTl6Oob3DXIsqqthG3HvRqHuXYOE82mbeoefkUtBeRu2i11jkp1CA1lqiXSLUV6e37641jTeFurppaHGb4mqQo3mSeRYXEmYn9rWEeBZVKJkg7bdQ%2BoIcYCaUd2H%2FdF3oX2lRp7rAOQQGoId0C8h1vP4YgfIX9oxcyRhkPq3fs%2F7vJxRM4X1wcSmoI2stQUrwrDBtCsIuYm%2BkBRzAD4AWleFSraFA%2FxMsTgUoouzD8Yj8F8NlodJsRaMKh%2Bf3brsc01HBkhE8Pld5NPhWR9aAZpw2eCSLwf%2FaSZ666PdVenxafvzFhr1DIcQ%2BS0FR9AeZn7kCTYTdyIi5OY07iESgvx1l%2BszyPWVpA3NNBDal6bIwxUkq5dQEsue8QcdDEJDeBb02MeAY%2BRifK0aBkC3xLWOjHr7O5d98VvWCb7%2BH%2FJcA28vMgh7sXUeNg8FdFL6HccjZbTX67oRhHN5pVpxEE8XKjF8vMrqRjxF8381ToJXEg%2FwSwW9mrDz2Ruq9iLEkhw2Ho397J58NAF2%2FWJdzCChZbBBjqkAT2UoV1Z1nubXV4F%2BWswrSaKtzbBgxrr9XWq3wQ%2BFkM8LLZdE214m%2BbtmLgOcB42ARRqTC%2BjBsdYYID71FEpXVCQAXDWjV6qu4%2BH%2F0NuWbXYBOvgJdzjVZofDds8juFk5iQUwKbYqDCLSENEKhYLFHjMPbwav7z5EB0UFSD5wliO9x%2BoercKU6rhieT%2FOIdHrTPvdtbdmKh1NmnMCePBh5OqQi9R&X-Amz-Signature=8eaca494d0f1b6b4c46e945c9be5d53ede1b012888439730cf3a4304d1684211&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2UCYDY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZYX4lrmW3TLwv9g%2B0y8yb8i5y5guskAlhvUNd8dORRQIhAOPeY9hY7vv9ityJGVSvmO0Net29YCCPGUOW71kcPf7gKv8DCCcQABoMNjM3NDIzMTgzODA1IgxV1YbIxoEEdhYp31Qq3ANKIrxvcZMQZCtnCUqYcx7oGCBNbhNRm0amCQG%2Fy507dmiMYy4SNrr%2BS1KWKnMgGucd61GHbIydYFkgeZ3AKk9YsKHuZlWl%2BPSUu5CTkOTl6Oob3DXIsqqthG3HvRqHuXYOE82mbeoefkUtBeRu2i11jkp1CA1lqiXSLUV6e37641jTeFurppaHGb4mqQo3mSeRYXEmYn9rWEeBZVKJkg7bdQ%2BoIcYCaUd2H%2FdF3oX2lRp7rAOQQGoId0C8h1vP4YgfIX9oxcyRhkPq3fs%2F7vJxRM4X1wcSmoI2stQUrwrDBtCsIuYm%2BkBRzAD4AWleFSraFA%2FxMsTgUoouzD8Yj8F8NlodJsRaMKh%2Bf3brsc01HBkhE8Pld5NPhWR9aAZpw2eCSLwf%2FaSZ666PdVenxafvzFhr1DIcQ%2BS0FR9AeZn7kCTYTdyIi5OY07iESgvx1l%2BszyPWVpA3NNBDal6bIwxUkq5dQEsue8QcdDEJDeBb02MeAY%2BRifK0aBkC3xLWOjHr7O5d98VvWCb7%2BH%2FJcA28vMgh7sXUeNg8FdFL6HccjZbTX67oRhHN5pVpxEE8XKjF8vMrqRjxF8381ToJXEg%2FwSwW9mrDz2Ruq9iLEkhw2Ho397J58NAF2%2FWJdzCChZbBBjqkAT2UoV1Z1nubXV4F%2BWswrSaKtzbBgxrr9XWq3wQ%2BFkM8LLZdE214m%2BbtmLgOcB42ARRqTC%2BjBsdYYID71FEpXVCQAXDWjV6qu4%2BH%2F0NuWbXYBOvgJdzjVZofDds8juFk5iQUwKbYqDCLSENEKhYLFHjMPbwav7z5EB0UFSD5wliO9x%2BoercKU6rhieT%2FOIdHrTPvdtbdmKh1NmnMCePBh5OqQi9R&X-Amz-Signature=d32b55855d43299ef90a4e6eda2f06f6e1e7dd66d12985bbd7307fb3216d15e1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2UCYDY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZYX4lrmW3TLwv9g%2B0y8yb8i5y5guskAlhvUNd8dORRQIhAOPeY9hY7vv9ityJGVSvmO0Net29YCCPGUOW71kcPf7gKv8DCCcQABoMNjM3NDIzMTgzODA1IgxV1YbIxoEEdhYp31Qq3ANKIrxvcZMQZCtnCUqYcx7oGCBNbhNRm0amCQG%2Fy507dmiMYy4SNrr%2BS1KWKnMgGucd61GHbIydYFkgeZ3AKk9YsKHuZlWl%2BPSUu5CTkOTl6Oob3DXIsqqthG3HvRqHuXYOE82mbeoefkUtBeRu2i11jkp1CA1lqiXSLUV6e37641jTeFurppaHGb4mqQo3mSeRYXEmYn9rWEeBZVKJkg7bdQ%2BoIcYCaUd2H%2FdF3oX2lRp7rAOQQGoId0C8h1vP4YgfIX9oxcyRhkPq3fs%2F7vJxRM4X1wcSmoI2stQUrwrDBtCsIuYm%2BkBRzAD4AWleFSraFA%2FxMsTgUoouzD8Yj8F8NlodJsRaMKh%2Bf3brsc01HBkhE8Pld5NPhWR9aAZpw2eCSLwf%2FaSZ666PdVenxafvzFhr1DIcQ%2BS0FR9AeZn7kCTYTdyIi5OY07iESgvx1l%2BszyPWVpA3NNBDal6bIwxUkq5dQEsue8QcdDEJDeBb02MeAY%2BRifK0aBkC3xLWOjHr7O5d98VvWCb7%2BH%2FJcA28vMgh7sXUeNg8FdFL6HccjZbTX67oRhHN5pVpxEE8XKjF8vMrqRjxF8381ToJXEg%2FwSwW9mrDz2Ruq9iLEkhw2Ho397J58NAF2%2FWJdzCChZbBBjqkAT2UoV1Z1nubXV4F%2BWswrSaKtzbBgxrr9XWq3wQ%2BFkM8LLZdE214m%2BbtmLgOcB42ARRqTC%2BjBsdYYID71FEpXVCQAXDWjV6qu4%2BH%2F0NuWbXYBOvgJdzjVZofDds8juFk5iQUwKbYqDCLSENEKhYLFHjMPbwav7z5EB0UFSD5wliO9x%2BoercKU6rhieT%2FOIdHrTPvdtbdmKh1NmnMCePBh5OqQi9R&X-Amz-Signature=d00c20e8d98ed4fe83f8610afa94fac67c64c7c201596299714900555b9c47d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2UCYDY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZYX4lrmW3TLwv9g%2B0y8yb8i5y5guskAlhvUNd8dORRQIhAOPeY9hY7vv9ityJGVSvmO0Net29YCCPGUOW71kcPf7gKv8DCCcQABoMNjM3NDIzMTgzODA1IgxV1YbIxoEEdhYp31Qq3ANKIrxvcZMQZCtnCUqYcx7oGCBNbhNRm0amCQG%2Fy507dmiMYy4SNrr%2BS1KWKnMgGucd61GHbIydYFkgeZ3AKk9YsKHuZlWl%2BPSUu5CTkOTl6Oob3DXIsqqthG3HvRqHuXYOE82mbeoefkUtBeRu2i11jkp1CA1lqiXSLUV6e37641jTeFurppaHGb4mqQo3mSeRYXEmYn9rWEeBZVKJkg7bdQ%2BoIcYCaUd2H%2FdF3oX2lRp7rAOQQGoId0C8h1vP4YgfIX9oxcyRhkPq3fs%2F7vJxRM4X1wcSmoI2stQUrwrDBtCsIuYm%2BkBRzAD4AWleFSraFA%2FxMsTgUoouzD8Yj8F8NlodJsRaMKh%2Bf3brsc01HBkhE8Pld5NPhWR9aAZpw2eCSLwf%2FaSZ666PdVenxafvzFhr1DIcQ%2BS0FR9AeZn7kCTYTdyIi5OY07iESgvx1l%2BszyPWVpA3NNBDal6bIwxUkq5dQEsue8QcdDEJDeBb02MeAY%2BRifK0aBkC3xLWOjHr7O5d98VvWCb7%2BH%2FJcA28vMgh7sXUeNg8FdFL6HccjZbTX67oRhHN5pVpxEE8XKjF8vMrqRjxF8381ToJXEg%2FwSwW9mrDz2Ruq9iLEkhw2Ho397J58NAF2%2FWJdzCChZbBBjqkAT2UoV1Z1nubXV4F%2BWswrSaKtzbBgxrr9XWq3wQ%2BFkM8LLZdE214m%2BbtmLgOcB42ARRqTC%2BjBsdYYID71FEpXVCQAXDWjV6qu4%2BH%2F0NuWbXYBOvgJdzjVZofDds8juFk5iQUwKbYqDCLSENEKhYLFHjMPbwav7z5EB0UFSD5wliO9x%2BoercKU6rhieT%2FOIdHrTPvdtbdmKh1NmnMCePBh5OqQi9R&X-Amz-Signature=ec0154dda4842c858cc340b0ad9162308f8da4864e620480582aa9ed84f2ee86&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2UCYDY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZYX4lrmW3TLwv9g%2B0y8yb8i5y5guskAlhvUNd8dORRQIhAOPeY9hY7vv9ityJGVSvmO0Net29YCCPGUOW71kcPf7gKv8DCCcQABoMNjM3NDIzMTgzODA1IgxV1YbIxoEEdhYp31Qq3ANKIrxvcZMQZCtnCUqYcx7oGCBNbhNRm0amCQG%2Fy507dmiMYy4SNrr%2BS1KWKnMgGucd61GHbIydYFkgeZ3AKk9YsKHuZlWl%2BPSUu5CTkOTl6Oob3DXIsqqthG3HvRqHuXYOE82mbeoefkUtBeRu2i11jkp1CA1lqiXSLUV6e37641jTeFurppaHGb4mqQo3mSeRYXEmYn9rWEeBZVKJkg7bdQ%2BoIcYCaUd2H%2FdF3oX2lRp7rAOQQGoId0C8h1vP4YgfIX9oxcyRhkPq3fs%2F7vJxRM4X1wcSmoI2stQUrwrDBtCsIuYm%2BkBRzAD4AWleFSraFA%2FxMsTgUoouzD8Yj8F8NlodJsRaMKh%2Bf3brsc01HBkhE8Pld5NPhWR9aAZpw2eCSLwf%2FaSZ666PdVenxafvzFhr1DIcQ%2BS0FR9AeZn7kCTYTdyIi5OY07iESgvx1l%2BszyPWVpA3NNBDal6bIwxUkq5dQEsue8QcdDEJDeBb02MeAY%2BRifK0aBkC3xLWOjHr7O5d98VvWCb7%2BH%2FJcA28vMgh7sXUeNg8FdFL6HccjZbTX67oRhHN5pVpxEE8XKjF8vMrqRjxF8381ToJXEg%2FwSwW9mrDz2Ruq9iLEkhw2Ho397J58NAF2%2FWJdzCChZbBBjqkAT2UoV1Z1nubXV4F%2BWswrSaKtzbBgxrr9XWq3wQ%2BFkM8LLZdE214m%2BbtmLgOcB42ARRqTC%2BjBsdYYID71FEpXVCQAXDWjV6qu4%2BH%2F0NuWbXYBOvgJdzjVZofDds8juFk5iQUwKbYqDCLSENEKhYLFHjMPbwav7z5EB0UFSD5wliO9x%2BoercKU6rhieT%2FOIdHrTPvdtbdmKh1NmnMCePBh5OqQi9R&X-Amz-Signature=e892dd4875dd6b3f9a1958be7988ba2baa2e41a9fea1100a519c05501546c21c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2UCYDY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDZYX4lrmW3TLwv9g%2B0y8yb8i5y5guskAlhvUNd8dORRQIhAOPeY9hY7vv9ityJGVSvmO0Net29YCCPGUOW71kcPf7gKv8DCCcQABoMNjM3NDIzMTgzODA1IgxV1YbIxoEEdhYp31Qq3ANKIrxvcZMQZCtnCUqYcx7oGCBNbhNRm0amCQG%2Fy507dmiMYy4SNrr%2BS1KWKnMgGucd61GHbIydYFkgeZ3AKk9YsKHuZlWl%2BPSUu5CTkOTl6Oob3DXIsqqthG3HvRqHuXYOE82mbeoefkUtBeRu2i11jkp1CA1lqiXSLUV6e37641jTeFurppaHGb4mqQo3mSeRYXEmYn9rWEeBZVKJkg7bdQ%2BoIcYCaUd2H%2FdF3oX2lRp7rAOQQGoId0C8h1vP4YgfIX9oxcyRhkPq3fs%2F7vJxRM4X1wcSmoI2stQUrwrDBtCsIuYm%2BkBRzAD4AWleFSraFA%2FxMsTgUoouzD8Yj8F8NlodJsRaMKh%2Bf3brsc01HBkhE8Pld5NPhWR9aAZpw2eCSLwf%2FaSZ666PdVenxafvzFhr1DIcQ%2BS0FR9AeZn7kCTYTdyIi5OY07iESgvx1l%2BszyPWVpA3NNBDal6bIwxUkq5dQEsue8QcdDEJDeBb02MeAY%2BRifK0aBkC3xLWOjHr7O5d98VvWCb7%2BH%2FJcA28vMgh7sXUeNg8FdFL6HccjZbTX67oRhHN5pVpxEE8XKjF8vMrqRjxF8381ToJXEg%2FwSwW9mrDz2Ruq9iLEkhw2Ho397J58NAF2%2FWJdzCChZbBBjqkAT2UoV1Z1nubXV4F%2BWswrSaKtzbBgxrr9XWq3wQ%2BFkM8LLZdE214m%2BbtmLgOcB42ARRqTC%2BjBsdYYID71FEpXVCQAXDWjV6qu4%2BH%2F0NuWbXYBOvgJdzjVZofDds8juFk5iQUwKbYqDCLSENEKhYLFHjMPbwav7z5EB0UFSD5wliO9x%2BoercKU6rhieT%2FOIdHrTPvdtbdmKh1NmnMCePBh5OqQi9R&X-Amz-Signature=c658a5f902a41607cba779e80d430887bf56fe305fa703624344cbbd85710c82&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
