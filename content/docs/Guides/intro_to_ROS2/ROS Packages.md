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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HU3PT4W%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRinVcunEWmEpXaOsYH9OaxXTKMKeO1CZboyqq2j20egIgRQbuBbh0KKSf2BFEjz%2BnXn8Ku3RCAk%2FaSPWW%2BPQm8BQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvS29bzICvMmztU0yrcA6PlKWDFe2%2BUX0kDzNIGrxhgD2Sqg4U%2BA2JXKjp6syRggDrAQMdKFiNGHH6X9DuXxH7ZCcxDQfHFL7LbyzI5kH7lEu1KdGYeEKI%2FNFcH9AL9or5JLMyX8u5NuCur7P94WSseCfM%2B1aPZzJDZP48NfSYPEZERlHGmw6lE072nA9%2FggEjlqLQ4FaFsAjDNakpTAshO%2F2b5He6zYUFZz10Xp6%2BTH73cbfQ1I1ZEedO5NtwMVDOV4RznM4J8MoqLiOqdCtxok9mP4q0YQZxUa6TrMGUsDmtoWk94kNqbSc3yi7rO12OIKHhS0u7r5ZSOHwFvVktColcP1V5PfPtJugnG2GVEvJ6Bx7IfftW1LL%2FUsEG80lxNkb%2FCa85NPmYY8dbOy99s0ysaERP0qRNylEeKixFX%2BtyiaoOsrNYsbgQGPi5A7oha1bC89%2FgOQ1DuXczRq%2BjEDHZG3rCGvb3OO60JlMRZT%2FEapxpeCGWlsbG4so235Sopb1zx291tkFdcVoa6t%2BzPpr0kCFM0PKwZLU3GdRUaBiEGdgx6WVnpDXEZ0K3MtgYWzcMqAr6cCHJ2LP9XlpjlX%2Bt%2B%2B8cfk6uJWy9%2B71c%2Ff0GlCvd4zUKX9yyaJ%2BT8UEcDY87Wa7G2obrXMPvhk8MGOqUBI6q1%2B97ONx03d3ZJdUaRDZ1gPtFSSgJwkLheSyESR9MWhG9ZyhuOEbN1O41%2FsYl7z1l2hyPd2rD2NLeLTh%2FjqcUkXU54XtfL31r4z9aWY7M1%2BJujucJKhXvLITGtTk%2FFYVvLZ8niuNmav9QC2jrm%2BhrtsmkeKNIMpPIZQFWPl1tp%2Bh0xZjv7khN0Hj2o94aEeMvcSZ291YeSkWAxTz%2Fi4FKl5RJG&X-Amz-Signature=fe7ab45256263f40d17f5431f860e95ec558d8c5ea8741bd283bb42ff64c033e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HU3PT4W%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRinVcunEWmEpXaOsYH9OaxXTKMKeO1CZboyqq2j20egIgRQbuBbh0KKSf2BFEjz%2BnXn8Ku3RCAk%2FaSPWW%2BPQm8BQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvS29bzICvMmztU0yrcA6PlKWDFe2%2BUX0kDzNIGrxhgD2Sqg4U%2BA2JXKjp6syRggDrAQMdKFiNGHH6X9DuXxH7ZCcxDQfHFL7LbyzI5kH7lEu1KdGYeEKI%2FNFcH9AL9or5JLMyX8u5NuCur7P94WSseCfM%2B1aPZzJDZP48NfSYPEZERlHGmw6lE072nA9%2FggEjlqLQ4FaFsAjDNakpTAshO%2F2b5He6zYUFZz10Xp6%2BTH73cbfQ1I1ZEedO5NtwMVDOV4RznM4J8MoqLiOqdCtxok9mP4q0YQZxUa6TrMGUsDmtoWk94kNqbSc3yi7rO12OIKHhS0u7r5ZSOHwFvVktColcP1V5PfPtJugnG2GVEvJ6Bx7IfftW1LL%2FUsEG80lxNkb%2FCa85NPmYY8dbOy99s0ysaERP0qRNylEeKixFX%2BtyiaoOsrNYsbgQGPi5A7oha1bC89%2FgOQ1DuXczRq%2BjEDHZG3rCGvb3OO60JlMRZT%2FEapxpeCGWlsbG4so235Sopb1zx291tkFdcVoa6t%2BzPpr0kCFM0PKwZLU3GdRUaBiEGdgx6WVnpDXEZ0K3MtgYWzcMqAr6cCHJ2LP9XlpjlX%2Bt%2B%2B8cfk6uJWy9%2B71c%2Ff0GlCvd4zUKX9yyaJ%2BT8UEcDY87Wa7G2obrXMPvhk8MGOqUBI6q1%2B97ONx03d3ZJdUaRDZ1gPtFSSgJwkLheSyESR9MWhG9ZyhuOEbN1O41%2FsYl7z1l2hyPd2rD2NLeLTh%2FjqcUkXU54XtfL31r4z9aWY7M1%2BJujucJKhXvLITGtTk%2FFYVvLZ8niuNmav9QC2jrm%2BhrtsmkeKNIMpPIZQFWPl1tp%2Bh0xZjv7khN0Hj2o94aEeMvcSZ291YeSkWAxTz%2Fi4FKl5RJG&X-Amz-Signature=4850016c2a16125aa376ee55e436642ae3736c5a4fea1acfabc1d7d72a61ea19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HU3PT4W%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRinVcunEWmEpXaOsYH9OaxXTKMKeO1CZboyqq2j20egIgRQbuBbh0KKSf2BFEjz%2BnXn8Ku3RCAk%2FaSPWW%2BPQm8BQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvS29bzICvMmztU0yrcA6PlKWDFe2%2BUX0kDzNIGrxhgD2Sqg4U%2BA2JXKjp6syRggDrAQMdKFiNGHH6X9DuXxH7ZCcxDQfHFL7LbyzI5kH7lEu1KdGYeEKI%2FNFcH9AL9or5JLMyX8u5NuCur7P94WSseCfM%2B1aPZzJDZP48NfSYPEZERlHGmw6lE072nA9%2FggEjlqLQ4FaFsAjDNakpTAshO%2F2b5He6zYUFZz10Xp6%2BTH73cbfQ1I1ZEedO5NtwMVDOV4RznM4J8MoqLiOqdCtxok9mP4q0YQZxUa6TrMGUsDmtoWk94kNqbSc3yi7rO12OIKHhS0u7r5ZSOHwFvVktColcP1V5PfPtJugnG2GVEvJ6Bx7IfftW1LL%2FUsEG80lxNkb%2FCa85NPmYY8dbOy99s0ysaERP0qRNylEeKixFX%2BtyiaoOsrNYsbgQGPi5A7oha1bC89%2FgOQ1DuXczRq%2BjEDHZG3rCGvb3OO60JlMRZT%2FEapxpeCGWlsbG4so235Sopb1zx291tkFdcVoa6t%2BzPpr0kCFM0PKwZLU3GdRUaBiEGdgx6WVnpDXEZ0K3MtgYWzcMqAr6cCHJ2LP9XlpjlX%2Bt%2B%2B8cfk6uJWy9%2B71c%2Ff0GlCvd4zUKX9yyaJ%2BT8UEcDY87Wa7G2obrXMPvhk8MGOqUBI6q1%2B97ONx03d3ZJdUaRDZ1gPtFSSgJwkLheSyESR9MWhG9ZyhuOEbN1O41%2FsYl7z1l2hyPd2rD2NLeLTh%2FjqcUkXU54XtfL31r4z9aWY7M1%2BJujucJKhXvLITGtTk%2FFYVvLZ8niuNmav9QC2jrm%2BhrtsmkeKNIMpPIZQFWPl1tp%2Bh0xZjv7khN0Hj2o94aEeMvcSZ291YeSkWAxTz%2Fi4FKl5RJG&X-Amz-Signature=d8b317f96d80118f8875b4c470afd2e1ba3615462a6b556788bbbde3e905c878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HU3PT4W%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRinVcunEWmEpXaOsYH9OaxXTKMKeO1CZboyqq2j20egIgRQbuBbh0KKSf2BFEjz%2BnXn8Ku3RCAk%2FaSPWW%2BPQm8BQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvS29bzICvMmztU0yrcA6PlKWDFe2%2BUX0kDzNIGrxhgD2Sqg4U%2BA2JXKjp6syRggDrAQMdKFiNGHH6X9DuXxH7ZCcxDQfHFL7LbyzI5kH7lEu1KdGYeEKI%2FNFcH9AL9or5JLMyX8u5NuCur7P94WSseCfM%2B1aPZzJDZP48NfSYPEZERlHGmw6lE072nA9%2FggEjlqLQ4FaFsAjDNakpTAshO%2F2b5He6zYUFZz10Xp6%2BTH73cbfQ1I1ZEedO5NtwMVDOV4RznM4J8MoqLiOqdCtxok9mP4q0YQZxUa6TrMGUsDmtoWk94kNqbSc3yi7rO12OIKHhS0u7r5ZSOHwFvVktColcP1V5PfPtJugnG2GVEvJ6Bx7IfftW1LL%2FUsEG80lxNkb%2FCa85NPmYY8dbOy99s0ysaERP0qRNylEeKixFX%2BtyiaoOsrNYsbgQGPi5A7oha1bC89%2FgOQ1DuXczRq%2BjEDHZG3rCGvb3OO60JlMRZT%2FEapxpeCGWlsbG4so235Sopb1zx291tkFdcVoa6t%2BzPpr0kCFM0PKwZLU3GdRUaBiEGdgx6WVnpDXEZ0K3MtgYWzcMqAr6cCHJ2LP9XlpjlX%2Bt%2B%2B8cfk6uJWy9%2B71c%2Ff0GlCvd4zUKX9yyaJ%2BT8UEcDY87Wa7G2obrXMPvhk8MGOqUBI6q1%2B97ONx03d3ZJdUaRDZ1gPtFSSgJwkLheSyESR9MWhG9ZyhuOEbN1O41%2FsYl7z1l2hyPd2rD2NLeLTh%2FjqcUkXU54XtfL31r4z9aWY7M1%2BJujucJKhXvLITGtTk%2FFYVvLZ8niuNmav9QC2jrm%2BhrtsmkeKNIMpPIZQFWPl1tp%2Bh0xZjv7khN0Hj2o94aEeMvcSZ291YeSkWAxTz%2Fi4FKl5RJG&X-Amz-Signature=cc533d14dd416cc0b4541ccb699970a40f452ca89db20968dbe6bdb1478a7780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HU3PT4W%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRinVcunEWmEpXaOsYH9OaxXTKMKeO1CZboyqq2j20egIgRQbuBbh0KKSf2BFEjz%2BnXn8Ku3RCAk%2FaSPWW%2BPQm8BQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvS29bzICvMmztU0yrcA6PlKWDFe2%2BUX0kDzNIGrxhgD2Sqg4U%2BA2JXKjp6syRggDrAQMdKFiNGHH6X9DuXxH7ZCcxDQfHFL7LbyzI5kH7lEu1KdGYeEKI%2FNFcH9AL9or5JLMyX8u5NuCur7P94WSseCfM%2B1aPZzJDZP48NfSYPEZERlHGmw6lE072nA9%2FggEjlqLQ4FaFsAjDNakpTAshO%2F2b5He6zYUFZz10Xp6%2BTH73cbfQ1I1ZEedO5NtwMVDOV4RznM4J8MoqLiOqdCtxok9mP4q0YQZxUa6TrMGUsDmtoWk94kNqbSc3yi7rO12OIKHhS0u7r5ZSOHwFvVktColcP1V5PfPtJugnG2GVEvJ6Bx7IfftW1LL%2FUsEG80lxNkb%2FCa85NPmYY8dbOy99s0ysaERP0qRNylEeKixFX%2BtyiaoOsrNYsbgQGPi5A7oha1bC89%2FgOQ1DuXczRq%2BjEDHZG3rCGvb3OO60JlMRZT%2FEapxpeCGWlsbG4so235Sopb1zx291tkFdcVoa6t%2BzPpr0kCFM0PKwZLU3GdRUaBiEGdgx6WVnpDXEZ0K3MtgYWzcMqAr6cCHJ2LP9XlpjlX%2Bt%2B%2B8cfk6uJWy9%2B71c%2Ff0GlCvd4zUKX9yyaJ%2BT8UEcDY87Wa7G2obrXMPvhk8MGOqUBI6q1%2B97ONx03d3ZJdUaRDZ1gPtFSSgJwkLheSyESR9MWhG9ZyhuOEbN1O41%2FsYl7z1l2hyPd2rD2NLeLTh%2FjqcUkXU54XtfL31r4z9aWY7M1%2BJujucJKhXvLITGtTk%2FFYVvLZ8niuNmav9QC2jrm%2BhrtsmkeKNIMpPIZQFWPl1tp%2Bh0xZjv7khN0Hj2o94aEeMvcSZ291YeSkWAxTz%2Fi4FKl5RJG&X-Amz-Signature=75e5232b20029ca54f2868662fdb0bb50716663b671c9667914b51e349900345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HU3PT4W%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRinVcunEWmEpXaOsYH9OaxXTKMKeO1CZboyqq2j20egIgRQbuBbh0KKSf2BFEjz%2BnXn8Ku3RCAk%2FaSPWW%2BPQm8BQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvS29bzICvMmztU0yrcA6PlKWDFe2%2BUX0kDzNIGrxhgD2Sqg4U%2BA2JXKjp6syRggDrAQMdKFiNGHH6X9DuXxH7ZCcxDQfHFL7LbyzI5kH7lEu1KdGYeEKI%2FNFcH9AL9or5JLMyX8u5NuCur7P94WSseCfM%2B1aPZzJDZP48NfSYPEZERlHGmw6lE072nA9%2FggEjlqLQ4FaFsAjDNakpTAshO%2F2b5He6zYUFZz10Xp6%2BTH73cbfQ1I1ZEedO5NtwMVDOV4RznM4J8MoqLiOqdCtxok9mP4q0YQZxUa6TrMGUsDmtoWk94kNqbSc3yi7rO12OIKHhS0u7r5ZSOHwFvVktColcP1V5PfPtJugnG2GVEvJ6Bx7IfftW1LL%2FUsEG80lxNkb%2FCa85NPmYY8dbOy99s0ysaERP0qRNylEeKixFX%2BtyiaoOsrNYsbgQGPi5A7oha1bC89%2FgOQ1DuXczRq%2BjEDHZG3rCGvb3OO60JlMRZT%2FEapxpeCGWlsbG4so235Sopb1zx291tkFdcVoa6t%2BzPpr0kCFM0PKwZLU3GdRUaBiEGdgx6WVnpDXEZ0K3MtgYWzcMqAr6cCHJ2LP9XlpjlX%2Bt%2B%2B8cfk6uJWy9%2B71c%2Ff0GlCvd4zUKX9yyaJ%2BT8UEcDY87Wa7G2obrXMPvhk8MGOqUBI6q1%2B97ONx03d3ZJdUaRDZ1gPtFSSgJwkLheSyESR9MWhG9ZyhuOEbN1O41%2FsYl7z1l2hyPd2rD2NLeLTh%2FjqcUkXU54XtfL31r4z9aWY7M1%2BJujucJKhXvLITGtTk%2FFYVvLZ8niuNmav9QC2jrm%2BhrtsmkeKNIMpPIZQFWPl1tp%2Bh0xZjv7khN0Hj2o94aEeMvcSZ291YeSkWAxTz%2Fi4FKl5RJG&X-Amz-Signature=7878e8413694cc9212a74250a7ad088be80eefc497cb306966543b83ebae2979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HU3PT4W%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRinVcunEWmEpXaOsYH9OaxXTKMKeO1CZboyqq2j20egIgRQbuBbh0KKSf2BFEjz%2BnXn8Ku3RCAk%2FaSPWW%2BPQm8BQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvS29bzICvMmztU0yrcA6PlKWDFe2%2BUX0kDzNIGrxhgD2Sqg4U%2BA2JXKjp6syRggDrAQMdKFiNGHH6X9DuXxH7ZCcxDQfHFL7LbyzI5kH7lEu1KdGYeEKI%2FNFcH9AL9or5JLMyX8u5NuCur7P94WSseCfM%2B1aPZzJDZP48NfSYPEZERlHGmw6lE072nA9%2FggEjlqLQ4FaFsAjDNakpTAshO%2F2b5He6zYUFZz10Xp6%2BTH73cbfQ1I1ZEedO5NtwMVDOV4RznM4J8MoqLiOqdCtxok9mP4q0YQZxUa6TrMGUsDmtoWk94kNqbSc3yi7rO12OIKHhS0u7r5ZSOHwFvVktColcP1V5PfPtJugnG2GVEvJ6Bx7IfftW1LL%2FUsEG80lxNkb%2FCa85NPmYY8dbOy99s0ysaERP0qRNylEeKixFX%2BtyiaoOsrNYsbgQGPi5A7oha1bC89%2FgOQ1DuXczRq%2BjEDHZG3rCGvb3OO60JlMRZT%2FEapxpeCGWlsbG4so235Sopb1zx291tkFdcVoa6t%2BzPpr0kCFM0PKwZLU3GdRUaBiEGdgx6WVnpDXEZ0K3MtgYWzcMqAr6cCHJ2LP9XlpjlX%2Bt%2B%2B8cfk6uJWy9%2B71c%2Ff0GlCvd4zUKX9yyaJ%2BT8UEcDY87Wa7G2obrXMPvhk8MGOqUBI6q1%2B97ONx03d3ZJdUaRDZ1gPtFSSgJwkLheSyESR9MWhG9ZyhuOEbN1O41%2FsYl7z1l2hyPd2rD2NLeLTh%2FjqcUkXU54XtfL31r4z9aWY7M1%2BJujucJKhXvLITGtTk%2FFYVvLZ8niuNmav9QC2jrm%2BhrtsmkeKNIMpPIZQFWPl1tp%2Bh0xZjv7khN0Hj2o94aEeMvcSZ291YeSkWAxTz%2Fi4FKl5RJG&X-Amz-Signature=f2c0b259448f5aa6a7061e4023a55aa0690a9a27bd670329082bf7ba26e1a6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
