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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUBCFPI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICf%2FdabRhHFAHzb6UTDkVpRHLt0n8EVeBP2ekl1cGt9%2BAiBGJNIeLYhL%2F%2BOWFRsMV5KM093vXVwGrzwiP2voDvV6eSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMShn%2Fmx5F0NdEiBpJKtwD7AHdTrKlStrl5Qw0ZSfPwlpVrOvemyhXcCchS%2Fj3TBA0ndMCENKi6oBPl%2B47OGam9Z%2BrrO0%2FjwnMk1%2F%2BABymTyoa%2FRgQ8y8ygLhWErXbwDEZpzJVs4T8qan8FMXmoiJONdE%2FPfZ%2B6q8NwXGr8tlgiNpySc8JmdNBFLnAztxIF%2BX9rsTGnJqB5eKlg5UB5C%2BpPl76o05qi4eqk%2B%2FQphu7MoGeIdEoPivSkMibUNs1ju5h7WJwOsWDSEjgoRxi1T2REI6cIOKYx5YPS9ztyhyr8IIln58MYzx8fjg88G%2BCaeHipRUWawuoduntrmjrt%2BI%2F1iFiVk0CtrkeCX%2BBk1clZSx7Yr5a1olCmABqMRgUX%2ByTiNNYQihaWQwwPXZp%2FI0A59dauZn0STky9pb7dKBV%2BVBCLNGW8fWs85W3tBIs6wDk2GmcNbzvPG8XtIbApJ2xGuKjKFfV10ZX9tzIl%2BRzREERQkALoLLGQ%2B3qoXHHfAV2sHSCT8c32FGMLSIwtM2ciPXZE6GnWkxi8W1l6saUqTBo7Mvzb5p0JVM0y7Trs7CzwZtQSbbt1QPhClCPP%2F6dbwHZ2RQ3crJid5XnYWH%2B8s%2FM0SVMuBEcHeix18BWE%2F677FK1px0wD9l0tR4w%2BvKlvgY6pgH4Y54Ex7Ri4X6cRmqf9JCWCyyAmNYEZoWH2a5WlGyvUC7OKNAwHYWECxwgZPlTFuJWJ0ZmFcy2zgEZHPeeKA9yYYj1zmSemPLg7EJO7IPOmmDA3ngP8TkpfTmnRyAaWLoRt6eYL0v%2B3uKqq2iy%2FwXGToDNYx8udxF7Uc%2FChq2cU9p1EkgMy1ifV2HxEV8J6iDlmrvE7aYOGB0tzgVYsVekVdv9hAgq&X-Amz-Signature=f9d18f41ed9ba91fc3c82befee4cd9583ad8596850f2081147e0a3cfbd2a0abb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUBCFPI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICf%2FdabRhHFAHzb6UTDkVpRHLt0n8EVeBP2ekl1cGt9%2BAiBGJNIeLYhL%2F%2BOWFRsMV5KM093vXVwGrzwiP2voDvV6eSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMShn%2Fmx5F0NdEiBpJKtwD7AHdTrKlStrl5Qw0ZSfPwlpVrOvemyhXcCchS%2Fj3TBA0ndMCENKi6oBPl%2B47OGam9Z%2BrrO0%2FjwnMk1%2F%2BABymTyoa%2FRgQ8y8ygLhWErXbwDEZpzJVs4T8qan8FMXmoiJONdE%2FPfZ%2B6q8NwXGr8tlgiNpySc8JmdNBFLnAztxIF%2BX9rsTGnJqB5eKlg5UB5C%2BpPl76o05qi4eqk%2B%2FQphu7MoGeIdEoPivSkMibUNs1ju5h7WJwOsWDSEjgoRxi1T2REI6cIOKYx5YPS9ztyhyr8IIln58MYzx8fjg88G%2BCaeHipRUWawuoduntrmjrt%2BI%2F1iFiVk0CtrkeCX%2BBk1clZSx7Yr5a1olCmABqMRgUX%2ByTiNNYQihaWQwwPXZp%2FI0A59dauZn0STky9pb7dKBV%2BVBCLNGW8fWs85W3tBIs6wDk2GmcNbzvPG8XtIbApJ2xGuKjKFfV10ZX9tzIl%2BRzREERQkALoLLGQ%2B3qoXHHfAV2sHSCT8c32FGMLSIwtM2ciPXZE6GnWkxi8W1l6saUqTBo7Mvzb5p0JVM0y7Trs7CzwZtQSbbt1QPhClCPP%2F6dbwHZ2RQ3crJid5XnYWH%2B8s%2FM0SVMuBEcHeix18BWE%2F677FK1px0wD9l0tR4w%2BvKlvgY6pgH4Y54Ex7Ri4X6cRmqf9JCWCyyAmNYEZoWH2a5WlGyvUC7OKNAwHYWECxwgZPlTFuJWJ0ZmFcy2zgEZHPeeKA9yYYj1zmSemPLg7EJO7IPOmmDA3ngP8TkpfTmnRyAaWLoRt6eYL0v%2B3uKqq2iy%2FwXGToDNYx8udxF7Uc%2FChq2cU9p1EkgMy1ifV2HxEV8J6iDlmrvE7aYOGB0tzgVYsVekVdv9hAgq&X-Amz-Signature=61b69e6fd36410dbf0576d8acca4d191ad8dc556947a1b6d1df530e5fda36ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUBCFPI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICf%2FdabRhHFAHzb6UTDkVpRHLt0n8EVeBP2ekl1cGt9%2BAiBGJNIeLYhL%2F%2BOWFRsMV5KM093vXVwGrzwiP2voDvV6eSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMShn%2Fmx5F0NdEiBpJKtwD7AHdTrKlStrl5Qw0ZSfPwlpVrOvemyhXcCchS%2Fj3TBA0ndMCENKi6oBPl%2B47OGam9Z%2BrrO0%2FjwnMk1%2F%2BABymTyoa%2FRgQ8y8ygLhWErXbwDEZpzJVs4T8qan8FMXmoiJONdE%2FPfZ%2B6q8NwXGr8tlgiNpySc8JmdNBFLnAztxIF%2BX9rsTGnJqB5eKlg5UB5C%2BpPl76o05qi4eqk%2B%2FQphu7MoGeIdEoPivSkMibUNs1ju5h7WJwOsWDSEjgoRxi1T2REI6cIOKYx5YPS9ztyhyr8IIln58MYzx8fjg88G%2BCaeHipRUWawuoduntrmjrt%2BI%2F1iFiVk0CtrkeCX%2BBk1clZSx7Yr5a1olCmABqMRgUX%2ByTiNNYQihaWQwwPXZp%2FI0A59dauZn0STky9pb7dKBV%2BVBCLNGW8fWs85W3tBIs6wDk2GmcNbzvPG8XtIbApJ2xGuKjKFfV10ZX9tzIl%2BRzREERQkALoLLGQ%2B3qoXHHfAV2sHSCT8c32FGMLSIwtM2ciPXZE6GnWkxi8W1l6saUqTBo7Mvzb5p0JVM0y7Trs7CzwZtQSbbt1QPhClCPP%2F6dbwHZ2RQ3crJid5XnYWH%2B8s%2FM0SVMuBEcHeix18BWE%2F677FK1px0wD9l0tR4w%2BvKlvgY6pgH4Y54Ex7Ri4X6cRmqf9JCWCyyAmNYEZoWH2a5WlGyvUC7OKNAwHYWECxwgZPlTFuJWJ0ZmFcy2zgEZHPeeKA9yYYj1zmSemPLg7EJO7IPOmmDA3ngP8TkpfTmnRyAaWLoRt6eYL0v%2B3uKqq2iy%2FwXGToDNYx8udxF7Uc%2FChq2cU9p1EkgMy1ifV2HxEV8J6iDlmrvE7aYOGB0tzgVYsVekVdv9hAgq&X-Amz-Signature=74abb1bbb0232852db1e0a92b507d6015fb5bba1241b86eadd5b301e6385a347&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUBCFPI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICf%2FdabRhHFAHzb6UTDkVpRHLt0n8EVeBP2ekl1cGt9%2BAiBGJNIeLYhL%2F%2BOWFRsMV5KM093vXVwGrzwiP2voDvV6eSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMShn%2Fmx5F0NdEiBpJKtwD7AHdTrKlStrl5Qw0ZSfPwlpVrOvemyhXcCchS%2Fj3TBA0ndMCENKi6oBPl%2B47OGam9Z%2BrrO0%2FjwnMk1%2F%2BABymTyoa%2FRgQ8y8ygLhWErXbwDEZpzJVs4T8qan8FMXmoiJONdE%2FPfZ%2B6q8NwXGr8tlgiNpySc8JmdNBFLnAztxIF%2BX9rsTGnJqB5eKlg5UB5C%2BpPl76o05qi4eqk%2B%2FQphu7MoGeIdEoPivSkMibUNs1ju5h7WJwOsWDSEjgoRxi1T2REI6cIOKYx5YPS9ztyhyr8IIln58MYzx8fjg88G%2BCaeHipRUWawuoduntrmjrt%2BI%2F1iFiVk0CtrkeCX%2BBk1clZSx7Yr5a1olCmABqMRgUX%2ByTiNNYQihaWQwwPXZp%2FI0A59dauZn0STky9pb7dKBV%2BVBCLNGW8fWs85W3tBIs6wDk2GmcNbzvPG8XtIbApJ2xGuKjKFfV10ZX9tzIl%2BRzREERQkALoLLGQ%2B3qoXHHfAV2sHSCT8c32FGMLSIwtM2ciPXZE6GnWkxi8W1l6saUqTBo7Mvzb5p0JVM0y7Trs7CzwZtQSbbt1QPhClCPP%2F6dbwHZ2RQ3crJid5XnYWH%2B8s%2FM0SVMuBEcHeix18BWE%2F677FK1px0wD9l0tR4w%2BvKlvgY6pgH4Y54Ex7Ri4X6cRmqf9JCWCyyAmNYEZoWH2a5WlGyvUC7OKNAwHYWECxwgZPlTFuJWJ0ZmFcy2zgEZHPeeKA9yYYj1zmSemPLg7EJO7IPOmmDA3ngP8TkpfTmnRyAaWLoRt6eYL0v%2B3uKqq2iy%2FwXGToDNYx8udxF7Uc%2FChq2cU9p1EkgMy1ifV2HxEV8J6iDlmrvE7aYOGB0tzgVYsVekVdv9hAgq&X-Amz-Signature=78aea524a11d0e3c969ceedd97bb0fdfb9e0118eede109b4ef3c91e64d5ed3e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUBCFPI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICf%2FdabRhHFAHzb6UTDkVpRHLt0n8EVeBP2ekl1cGt9%2BAiBGJNIeLYhL%2F%2BOWFRsMV5KM093vXVwGrzwiP2voDvV6eSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMShn%2Fmx5F0NdEiBpJKtwD7AHdTrKlStrl5Qw0ZSfPwlpVrOvemyhXcCchS%2Fj3TBA0ndMCENKi6oBPl%2B47OGam9Z%2BrrO0%2FjwnMk1%2F%2BABymTyoa%2FRgQ8y8ygLhWErXbwDEZpzJVs4T8qan8FMXmoiJONdE%2FPfZ%2B6q8NwXGr8tlgiNpySc8JmdNBFLnAztxIF%2BX9rsTGnJqB5eKlg5UB5C%2BpPl76o05qi4eqk%2B%2FQphu7MoGeIdEoPivSkMibUNs1ju5h7WJwOsWDSEjgoRxi1T2REI6cIOKYx5YPS9ztyhyr8IIln58MYzx8fjg88G%2BCaeHipRUWawuoduntrmjrt%2BI%2F1iFiVk0CtrkeCX%2BBk1clZSx7Yr5a1olCmABqMRgUX%2ByTiNNYQihaWQwwPXZp%2FI0A59dauZn0STky9pb7dKBV%2BVBCLNGW8fWs85W3tBIs6wDk2GmcNbzvPG8XtIbApJ2xGuKjKFfV10ZX9tzIl%2BRzREERQkALoLLGQ%2B3qoXHHfAV2sHSCT8c32FGMLSIwtM2ciPXZE6GnWkxi8W1l6saUqTBo7Mvzb5p0JVM0y7Trs7CzwZtQSbbt1QPhClCPP%2F6dbwHZ2RQ3crJid5XnYWH%2B8s%2FM0SVMuBEcHeix18BWE%2F677FK1px0wD9l0tR4w%2BvKlvgY6pgH4Y54Ex7Ri4X6cRmqf9JCWCyyAmNYEZoWH2a5WlGyvUC7OKNAwHYWECxwgZPlTFuJWJ0ZmFcy2zgEZHPeeKA9yYYj1zmSemPLg7EJO7IPOmmDA3ngP8TkpfTmnRyAaWLoRt6eYL0v%2B3uKqq2iy%2FwXGToDNYx8udxF7Uc%2FChq2cU9p1EkgMy1ifV2HxEV8J6iDlmrvE7aYOGB0tzgVYsVekVdv9hAgq&X-Amz-Signature=8405b004f6b0ce205bfa2374c802ea37ff7a43e64372a8a8605ff5d0bc4e721b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUBCFPI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICf%2FdabRhHFAHzb6UTDkVpRHLt0n8EVeBP2ekl1cGt9%2BAiBGJNIeLYhL%2F%2BOWFRsMV5KM093vXVwGrzwiP2voDvV6eSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMShn%2Fmx5F0NdEiBpJKtwD7AHdTrKlStrl5Qw0ZSfPwlpVrOvemyhXcCchS%2Fj3TBA0ndMCENKi6oBPl%2B47OGam9Z%2BrrO0%2FjwnMk1%2F%2BABymTyoa%2FRgQ8y8ygLhWErXbwDEZpzJVs4T8qan8FMXmoiJONdE%2FPfZ%2B6q8NwXGr8tlgiNpySc8JmdNBFLnAztxIF%2BX9rsTGnJqB5eKlg5UB5C%2BpPl76o05qi4eqk%2B%2FQphu7MoGeIdEoPivSkMibUNs1ju5h7WJwOsWDSEjgoRxi1T2REI6cIOKYx5YPS9ztyhyr8IIln58MYzx8fjg88G%2BCaeHipRUWawuoduntrmjrt%2BI%2F1iFiVk0CtrkeCX%2BBk1clZSx7Yr5a1olCmABqMRgUX%2ByTiNNYQihaWQwwPXZp%2FI0A59dauZn0STky9pb7dKBV%2BVBCLNGW8fWs85W3tBIs6wDk2GmcNbzvPG8XtIbApJ2xGuKjKFfV10ZX9tzIl%2BRzREERQkALoLLGQ%2B3qoXHHfAV2sHSCT8c32FGMLSIwtM2ciPXZE6GnWkxi8W1l6saUqTBo7Mvzb5p0JVM0y7Trs7CzwZtQSbbt1QPhClCPP%2F6dbwHZ2RQ3crJid5XnYWH%2B8s%2FM0SVMuBEcHeix18BWE%2F677FK1px0wD9l0tR4w%2BvKlvgY6pgH4Y54Ex7Ri4X6cRmqf9JCWCyyAmNYEZoWH2a5WlGyvUC7OKNAwHYWECxwgZPlTFuJWJ0ZmFcy2zgEZHPeeKA9yYYj1zmSemPLg7EJO7IPOmmDA3ngP8TkpfTmnRyAaWLoRt6eYL0v%2B3uKqq2iy%2FwXGToDNYx8udxF7Uc%2FChq2cU9p1EkgMy1ifV2HxEV8J6iDlmrvE7aYOGB0tzgVYsVekVdv9hAgq&X-Amz-Signature=de28943150e347835d1170131cc49a7538422bcaac8c80e29f1e52cc21b83c17&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUBCFPI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICf%2FdabRhHFAHzb6UTDkVpRHLt0n8EVeBP2ekl1cGt9%2BAiBGJNIeLYhL%2F%2BOWFRsMV5KM093vXVwGrzwiP2voDvV6eSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMShn%2Fmx5F0NdEiBpJKtwD7AHdTrKlStrl5Qw0ZSfPwlpVrOvemyhXcCchS%2Fj3TBA0ndMCENKi6oBPl%2B47OGam9Z%2BrrO0%2FjwnMk1%2F%2BABymTyoa%2FRgQ8y8ygLhWErXbwDEZpzJVs4T8qan8FMXmoiJONdE%2FPfZ%2B6q8NwXGr8tlgiNpySc8JmdNBFLnAztxIF%2BX9rsTGnJqB5eKlg5UB5C%2BpPl76o05qi4eqk%2B%2FQphu7MoGeIdEoPivSkMibUNs1ju5h7WJwOsWDSEjgoRxi1T2REI6cIOKYx5YPS9ztyhyr8IIln58MYzx8fjg88G%2BCaeHipRUWawuoduntrmjrt%2BI%2F1iFiVk0CtrkeCX%2BBk1clZSx7Yr5a1olCmABqMRgUX%2ByTiNNYQihaWQwwPXZp%2FI0A59dauZn0STky9pb7dKBV%2BVBCLNGW8fWs85W3tBIs6wDk2GmcNbzvPG8XtIbApJ2xGuKjKFfV10ZX9tzIl%2BRzREERQkALoLLGQ%2B3qoXHHfAV2sHSCT8c32FGMLSIwtM2ciPXZE6GnWkxi8W1l6saUqTBo7Mvzb5p0JVM0y7Trs7CzwZtQSbbt1QPhClCPP%2F6dbwHZ2RQ3crJid5XnYWH%2B8s%2FM0SVMuBEcHeix18BWE%2F677FK1px0wD9l0tR4w%2BvKlvgY6pgH4Y54Ex7Ri4X6cRmqf9JCWCyyAmNYEZoWH2a5WlGyvUC7OKNAwHYWECxwgZPlTFuJWJ0ZmFcy2zgEZHPeeKA9yYYj1zmSemPLg7EJO7IPOmmDA3ngP8TkpfTmnRyAaWLoRt6eYL0v%2B3uKqq2iy%2FwXGToDNYx8udxF7Uc%2FChq2cU9p1EkgMy1ifV2HxEV8J6iDlmrvE7aYOGB0tzgVYsVekVdv9hAgq&X-Amz-Signature=b3fcdc41c65cc189c72c753bcffd2ae084663ab26454b21db3dea50e04297f52&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
