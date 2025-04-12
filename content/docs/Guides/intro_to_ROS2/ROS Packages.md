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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4LJAI5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHBnrV9uegw%2Bu%2BKBiIqDWmmPb4uX%2FD43rWSyDwyPf3cBAiBMzj393mtqBv4rs2Q2xrrRCP0vDDp1Rfv1apVKd%2BjrtyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42fSAUaFdEjSgpUHKtwDuDZwRFUSvDQBxSzQgmxPhjaJrphZ3V29juFs4qkZWJGiG1Wkh4A9XDnwvcwPyCewryAXcCzc%2BCal8TBVngIUVKgDdaddqcLK89vd%2Bahx4EYJJxOHL5cirPIVdPxL8W23YAtVhoRDvJH0UOjhKuDtfizFrkQcZ7Sw2ViRjJVVWVbhyX0avvHE8%2FMpykf6C74TKu8cFWR34vCpUbsvcU4WHdLQKd4bE5QAIDYkARO51IxsVE6Sli5ac%2B9pgLN2urXkO65sWop6kCGm6724Nv078IPNa7Fw2OQMfukcRd0JVa7E32ugdNuOTqO08ntrcY6sRv56kJ%2FXw5WJVW2yGzdlXLFT5sDBJyEq9qIxb8AYcbFW6ixu8zJbdwfLc0aPpU3T4IVX6xB2O03RrJdkcyBcZf6lfLqOUr0vyCty0jsV43q%2BFSjR20VRlroxRcp4f3BGmJnk0adljrfnWcEj0MbtkqJdcqQcqOlQrFzpgp1pV9zNtoqNM2Ef0lnPQWiNImlP63EA2srNDJqDv%2BxHvz2b6rQhmBc7Cm40%2BEt1cV0LP8aUgOqw8sGuh%2BqOK%2BhX56BmxEcs86hpwQTRt8xB1a8HvtkA%2F2KlxFKv%2FT1T0cWs3purYjmJhx0OtPwuRt4w94zovwY6pgEWwIIHivTyxbRshLU6ZgytRCP5k%2F3%2Bb6xULxqxbALE9Q4uoSBOoFUuUVjRPZg8eoUdc5N56PiS%2F8mW5U8kvHynO4FU87BwW1A1T3jvnoJr03VJpKjnQa3EhhPqcLTplmQl%2Bq7Q8c0n2jLfaFT1Liz3QwWJwmSE62itX%2FAHUuObayTwMCUpZq4CWaCnvg5xdplzmFc4d45S0VjOSDr3eewhmcLwOVeh&X-Amz-Signature=edf92eb6cffd0f175c8077696d633c0a480b288de40480a1e42e23066c6981d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4LJAI5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHBnrV9uegw%2Bu%2BKBiIqDWmmPb4uX%2FD43rWSyDwyPf3cBAiBMzj393mtqBv4rs2Q2xrrRCP0vDDp1Rfv1apVKd%2BjrtyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42fSAUaFdEjSgpUHKtwDuDZwRFUSvDQBxSzQgmxPhjaJrphZ3V29juFs4qkZWJGiG1Wkh4A9XDnwvcwPyCewryAXcCzc%2BCal8TBVngIUVKgDdaddqcLK89vd%2Bahx4EYJJxOHL5cirPIVdPxL8W23YAtVhoRDvJH0UOjhKuDtfizFrkQcZ7Sw2ViRjJVVWVbhyX0avvHE8%2FMpykf6C74TKu8cFWR34vCpUbsvcU4WHdLQKd4bE5QAIDYkARO51IxsVE6Sli5ac%2B9pgLN2urXkO65sWop6kCGm6724Nv078IPNa7Fw2OQMfukcRd0JVa7E32ugdNuOTqO08ntrcY6sRv56kJ%2FXw5WJVW2yGzdlXLFT5sDBJyEq9qIxb8AYcbFW6ixu8zJbdwfLc0aPpU3T4IVX6xB2O03RrJdkcyBcZf6lfLqOUr0vyCty0jsV43q%2BFSjR20VRlroxRcp4f3BGmJnk0adljrfnWcEj0MbtkqJdcqQcqOlQrFzpgp1pV9zNtoqNM2Ef0lnPQWiNImlP63EA2srNDJqDv%2BxHvz2b6rQhmBc7Cm40%2BEt1cV0LP8aUgOqw8sGuh%2BqOK%2BhX56BmxEcs86hpwQTRt8xB1a8HvtkA%2F2KlxFKv%2FT1T0cWs3purYjmJhx0OtPwuRt4w94zovwY6pgEWwIIHivTyxbRshLU6ZgytRCP5k%2F3%2Bb6xULxqxbALE9Q4uoSBOoFUuUVjRPZg8eoUdc5N56PiS%2F8mW5U8kvHynO4FU87BwW1A1T3jvnoJr03VJpKjnQa3EhhPqcLTplmQl%2Bq7Q8c0n2jLfaFT1Liz3QwWJwmSE62itX%2FAHUuObayTwMCUpZq4CWaCnvg5xdplzmFc4d45S0VjOSDr3eewhmcLwOVeh&X-Amz-Signature=cd3f51c94c76415b66a9986345f91da84dd58bca40032cdcb26359b834c1d5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4LJAI5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHBnrV9uegw%2Bu%2BKBiIqDWmmPb4uX%2FD43rWSyDwyPf3cBAiBMzj393mtqBv4rs2Q2xrrRCP0vDDp1Rfv1apVKd%2BjrtyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42fSAUaFdEjSgpUHKtwDuDZwRFUSvDQBxSzQgmxPhjaJrphZ3V29juFs4qkZWJGiG1Wkh4A9XDnwvcwPyCewryAXcCzc%2BCal8TBVngIUVKgDdaddqcLK89vd%2Bahx4EYJJxOHL5cirPIVdPxL8W23YAtVhoRDvJH0UOjhKuDtfizFrkQcZ7Sw2ViRjJVVWVbhyX0avvHE8%2FMpykf6C74TKu8cFWR34vCpUbsvcU4WHdLQKd4bE5QAIDYkARO51IxsVE6Sli5ac%2B9pgLN2urXkO65sWop6kCGm6724Nv078IPNa7Fw2OQMfukcRd0JVa7E32ugdNuOTqO08ntrcY6sRv56kJ%2FXw5WJVW2yGzdlXLFT5sDBJyEq9qIxb8AYcbFW6ixu8zJbdwfLc0aPpU3T4IVX6xB2O03RrJdkcyBcZf6lfLqOUr0vyCty0jsV43q%2BFSjR20VRlroxRcp4f3BGmJnk0adljrfnWcEj0MbtkqJdcqQcqOlQrFzpgp1pV9zNtoqNM2Ef0lnPQWiNImlP63EA2srNDJqDv%2BxHvz2b6rQhmBc7Cm40%2BEt1cV0LP8aUgOqw8sGuh%2BqOK%2BhX56BmxEcs86hpwQTRt8xB1a8HvtkA%2F2KlxFKv%2FT1T0cWs3purYjmJhx0OtPwuRt4w94zovwY6pgEWwIIHivTyxbRshLU6ZgytRCP5k%2F3%2Bb6xULxqxbALE9Q4uoSBOoFUuUVjRPZg8eoUdc5N56PiS%2F8mW5U8kvHynO4FU87BwW1A1T3jvnoJr03VJpKjnQa3EhhPqcLTplmQl%2Bq7Q8c0n2jLfaFT1Liz3QwWJwmSE62itX%2FAHUuObayTwMCUpZq4CWaCnvg5xdplzmFc4d45S0VjOSDr3eewhmcLwOVeh&X-Amz-Signature=4d0d397ae3246335be81aab27da6ef8b6f02db32e610a619fc9c815f8ad1aaac&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4LJAI5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHBnrV9uegw%2Bu%2BKBiIqDWmmPb4uX%2FD43rWSyDwyPf3cBAiBMzj393mtqBv4rs2Q2xrrRCP0vDDp1Rfv1apVKd%2BjrtyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42fSAUaFdEjSgpUHKtwDuDZwRFUSvDQBxSzQgmxPhjaJrphZ3V29juFs4qkZWJGiG1Wkh4A9XDnwvcwPyCewryAXcCzc%2BCal8TBVngIUVKgDdaddqcLK89vd%2Bahx4EYJJxOHL5cirPIVdPxL8W23YAtVhoRDvJH0UOjhKuDtfizFrkQcZ7Sw2ViRjJVVWVbhyX0avvHE8%2FMpykf6C74TKu8cFWR34vCpUbsvcU4WHdLQKd4bE5QAIDYkARO51IxsVE6Sli5ac%2B9pgLN2urXkO65sWop6kCGm6724Nv078IPNa7Fw2OQMfukcRd0JVa7E32ugdNuOTqO08ntrcY6sRv56kJ%2FXw5WJVW2yGzdlXLFT5sDBJyEq9qIxb8AYcbFW6ixu8zJbdwfLc0aPpU3T4IVX6xB2O03RrJdkcyBcZf6lfLqOUr0vyCty0jsV43q%2BFSjR20VRlroxRcp4f3BGmJnk0adljrfnWcEj0MbtkqJdcqQcqOlQrFzpgp1pV9zNtoqNM2Ef0lnPQWiNImlP63EA2srNDJqDv%2BxHvz2b6rQhmBc7Cm40%2BEt1cV0LP8aUgOqw8sGuh%2BqOK%2BhX56BmxEcs86hpwQTRt8xB1a8HvtkA%2F2KlxFKv%2FT1T0cWs3purYjmJhx0OtPwuRt4w94zovwY6pgEWwIIHivTyxbRshLU6ZgytRCP5k%2F3%2Bb6xULxqxbALE9Q4uoSBOoFUuUVjRPZg8eoUdc5N56PiS%2F8mW5U8kvHynO4FU87BwW1A1T3jvnoJr03VJpKjnQa3EhhPqcLTplmQl%2Bq7Q8c0n2jLfaFT1Liz3QwWJwmSE62itX%2FAHUuObayTwMCUpZq4CWaCnvg5xdplzmFc4d45S0VjOSDr3eewhmcLwOVeh&X-Amz-Signature=73ab6b2bbfc6cba5c14e697421058b33cc2175aedb86bfe7afa8993d9dfc7051&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4LJAI5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHBnrV9uegw%2Bu%2BKBiIqDWmmPb4uX%2FD43rWSyDwyPf3cBAiBMzj393mtqBv4rs2Q2xrrRCP0vDDp1Rfv1apVKd%2BjrtyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42fSAUaFdEjSgpUHKtwDuDZwRFUSvDQBxSzQgmxPhjaJrphZ3V29juFs4qkZWJGiG1Wkh4A9XDnwvcwPyCewryAXcCzc%2BCal8TBVngIUVKgDdaddqcLK89vd%2Bahx4EYJJxOHL5cirPIVdPxL8W23YAtVhoRDvJH0UOjhKuDtfizFrkQcZ7Sw2ViRjJVVWVbhyX0avvHE8%2FMpykf6C74TKu8cFWR34vCpUbsvcU4WHdLQKd4bE5QAIDYkARO51IxsVE6Sli5ac%2B9pgLN2urXkO65sWop6kCGm6724Nv078IPNa7Fw2OQMfukcRd0JVa7E32ugdNuOTqO08ntrcY6sRv56kJ%2FXw5WJVW2yGzdlXLFT5sDBJyEq9qIxb8AYcbFW6ixu8zJbdwfLc0aPpU3T4IVX6xB2O03RrJdkcyBcZf6lfLqOUr0vyCty0jsV43q%2BFSjR20VRlroxRcp4f3BGmJnk0adljrfnWcEj0MbtkqJdcqQcqOlQrFzpgp1pV9zNtoqNM2Ef0lnPQWiNImlP63EA2srNDJqDv%2BxHvz2b6rQhmBc7Cm40%2BEt1cV0LP8aUgOqw8sGuh%2BqOK%2BhX56BmxEcs86hpwQTRt8xB1a8HvtkA%2F2KlxFKv%2FT1T0cWs3purYjmJhx0OtPwuRt4w94zovwY6pgEWwIIHivTyxbRshLU6ZgytRCP5k%2F3%2Bb6xULxqxbALE9Q4uoSBOoFUuUVjRPZg8eoUdc5N56PiS%2F8mW5U8kvHynO4FU87BwW1A1T3jvnoJr03VJpKjnQa3EhhPqcLTplmQl%2Bq7Q8c0n2jLfaFT1Liz3QwWJwmSE62itX%2FAHUuObayTwMCUpZq4CWaCnvg5xdplzmFc4d45S0VjOSDr3eewhmcLwOVeh&X-Amz-Signature=45ecb8f9d7f0ff6cc232b6994e4fa0236060d15b806fdb9682ccf17c6273e686&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4LJAI5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHBnrV9uegw%2Bu%2BKBiIqDWmmPb4uX%2FD43rWSyDwyPf3cBAiBMzj393mtqBv4rs2Q2xrrRCP0vDDp1Rfv1apVKd%2BjrtyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42fSAUaFdEjSgpUHKtwDuDZwRFUSvDQBxSzQgmxPhjaJrphZ3V29juFs4qkZWJGiG1Wkh4A9XDnwvcwPyCewryAXcCzc%2BCal8TBVngIUVKgDdaddqcLK89vd%2Bahx4EYJJxOHL5cirPIVdPxL8W23YAtVhoRDvJH0UOjhKuDtfizFrkQcZ7Sw2ViRjJVVWVbhyX0avvHE8%2FMpykf6C74TKu8cFWR34vCpUbsvcU4WHdLQKd4bE5QAIDYkARO51IxsVE6Sli5ac%2B9pgLN2urXkO65sWop6kCGm6724Nv078IPNa7Fw2OQMfukcRd0JVa7E32ugdNuOTqO08ntrcY6sRv56kJ%2FXw5WJVW2yGzdlXLFT5sDBJyEq9qIxb8AYcbFW6ixu8zJbdwfLc0aPpU3T4IVX6xB2O03RrJdkcyBcZf6lfLqOUr0vyCty0jsV43q%2BFSjR20VRlroxRcp4f3BGmJnk0adljrfnWcEj0MbtkqJdcqQcqOlQrFzpgp1pV9zNtoqNM2Ef0lnPQWiNImlP63EA2srNDJqDv%2BxHvz2b6rQhmBc7Cm40%2BEt1cV0LP8aUgOqw8sGuh%2BqOK%2BhX56BmxEcs86hpwQTRt8xB1a8HvtkA%2F2KlxFKv%2FT1T0cWs3purYjmJhx0OtPwuRt4w94zovwY6pgEWwIIHivTyxbRshLU6ZgytRCP5k%2F3%2Bb6xULxqxbALE9Q4uoSBOoFUuUVjRPZg8eoUdc5N56PiS%2F8mW5U8kvHynO4FU87BwW1A1T3jvnoJr03VJpKjnQa3EhhPqcLTplmQl%2Bq7Q8c0n2jLfaFT1Liz3QwWJwmSE62itX%2FAHUuObayTwMCUpZq4CWaCnvg5xdplzmFc4d45S0VjOSDr3eewhmcLwOVeh&X-Amz-Signature=04d14096041ea2e31e747e19a0bb0491443c6861425250a0c09da513ad7e1420&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4LJAI5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHBnrV9uegw%2Bu%2BKBiIqDWmmPb4uX%2FD43rWSyDwyPf3cBAiBMzj393mtqBv4rs2Q2xrrRCP0vDDp1Rfv1apVKd%2BjrtyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42fSAUaFdEjSgpUHKtwDuDZwRFUSvDQBxSzQgmxPhjaJrphZ3V29juFs4qkZWJGiG1Wkh4A9XDnwvcwPyCewryAXcCzc%2BCal8TBVngIUVKgDdaddqcLK89vd%2Bahx4EYJJxOHL5cirPIVdPxL8W23YAtVhoRDvJH0UOjhKuDtfizFrkQcZ7Sw2ViRjJVVWVbhyX0avvHE8%2FMpykf6C74TKu8cFWR34vCpUbsvcU4WHdLQKd4bE5QAIDYkARO51IxsVE6Sli5ac%2B9pgLN2urXkO65sWop6kCGm6724Nv078IPNa7Fw2OQMfukcRd0JVa7E32ugdNuOTqO08ntrcY6sRv56kJ%2FXw5WJVW2yGzdlXLFT5sDBJyEq9qIxb8AYcbFW6ixu8zJbdwfLc0aPpU3T4IVX6xB2O03RrJdkcyBcZf6lfLqOUr0vyCty0jsV43q%2BFSjR20VRlroxRcp4f3BGmJnk0adljrfnWcEj0MbtkqJdcqQcqOlQrFzpgp1pV9zNtoqNM2Ef0lnPQWiNImlP63EA2srNDJqDv%2BxHvz2b6rQhmBc7Cm40%2BEt1cV0LP8aUgOqw8sGuh%2BqOK%2BhX56BmxEcs86hpwQTRt8xB1a8HvtkA%2F2KlxFKv%2FT1T0cWs3purYjmJhx0OtPwuRt4w94zovwY6pgEWwIIHivTyxbRshLU6ZgytRCP5k%2F3%2Bb6xULxqxbALE9Q4uoSBOoFUuUVjRPZg8eoUdc5N56PiS%2F8mW5U8kvHynO4FU87BwW1A1T3jvnoJr03VJpKjnQa3EhhPqcLTplmQl%2Bq7Q8c0n2jLfaFT1Liz3QwWJwmSE62itX%2FAHUuObayTwMCUpZq4CWaCnvg5xdplzmFc4d45S0VjOSDr3eewhmcLwOVeh&X-Amz-Signature=9b35e7551026bcc1b7755c8396393978e92c9335995103915d5d6ebe57ae68eb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
