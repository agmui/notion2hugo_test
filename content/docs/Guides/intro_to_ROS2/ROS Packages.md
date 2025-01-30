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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IGO6OV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAE%2BYhJMJBsaHqsWdURtEnjlEP8rScJnueBLvuyFg6FHAiEAseZtFltiiA2Xb93BSMbihYQrXcYezguPm7ucGQwBzQwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoBixDzlGypP1ZQhSrcAz5sra4Q0P%2FCEd9nax9b7jcyRYZC9iVNl9V5wDf0%2FxhmqxRl66PO3zV9HijwgGQVbb7v12H6IHLvYIaiK0XbgUhudQhpY3HRqhS5TLh0keJXwAWm51GcfycNBPy%2BYEz6Nv6E3D2a%2BP4ZtUH6%2FURv%2B1eJ8fApH0MMzMgSORNAEKEfcC%2Fax7NWLwxBo%2BxWTvrUl6MFKip0HzZxJiU7pnE9wN5uayIxLd1PHrwlUfkRrIPDGRFUxyr%2FaO8FPEAZzPqCi9g5Zv5GRe6KS6AghXKnMMwa56tqeBbVi0ULMCEFWMouX5jIaIPx%2BZjX25iRM7IrvovGU9HXsyJ98Ri3SfU7LdkXckPEgnD8WItpXQ4Qxha3%2FJ%2Fla9mp4vWChRHxd3w3%2Fpnw0dNhSMrBTvnb4ha0n%2BUPjNOozelOaNEjVbEy6p8tMQYXfN5r1YSOg0vHw%2F5h%2BumTo9E9bFK3zYuNv5nJUjuIhwiuDUKoMGkFotCTiypooK%2FGSxCCCpPACCmARktHcX%2Bc8VXwaHx3VEJQJuphCFNUFO4%2F3ghYK2mmqi3p7%2FdsG5dKi4WgS6Wdri7MfSWczAqM%2FJ8zVNTWd0nLF4wFNc4Y6YdAu8Z%2BOAzBONCr7xKzdtWs58hMJtPuu9e%2BMP6Y7rwGOqUBUBriyznZAeFrqWawFHyFvVvuSt5eO4Tn%2Bmwauqu8TKzzpNRWbxbanLM9lSxfvJPTorvI7iS4PnqmWPEQ7PC%2BoPkJUbZEecKGhrvxqj8Rk3PplrfzVFukOldLBICpMQI4Cmt1Uzw7c4AkY7eaBPRgYRnfIhyl%2F3pCHnX%2FvQkfoc45La5kVCL0X4UsslYSXQGbWrgBRlgkPKfffF2189n%2B1N%2FJNffK&X-Amz-Signature=def48f44b97a52b4f22946923e7b5c6c745f77bbb61b153ce60be47d44df5990&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IGO6OV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAE%2BYhJMJBsaHqsWdURtEnjlEP8rScJnueBLvuyFg6FHAiEAseZtFltiiA2Xb93BSMbihYQrXcYezguPm7ucGQwBzQwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoBixDzlGypP1ZQhSrcAz5sra4Q0P%2FCEd9nax9b7jcyRYZC9iVNl9V5wDf0%2FxhmqxRl66PO3zV9HijwgGQVbb7v12H6IHLvYIaiK0XbgUhudQhpY3HRqhS5TLh0keJXwAWm51GcfycNBPy%2BYEz6Nv6E3D2a%2BP4ZtUH6%2FURv%2B1eJ8fApH0MMzMgSORNAEKEfcC%2Fax7NWLwxBo%2BxWTvrUl6MFKip0HzZxJiU7pnE9wN5uayIxLd1PHrwlUfkRrIPDGRFUxyr%2FaO8FPEAZzPqCi9g5Zv5GRe6KS6AghXKnMMwa56tqeBbVi0ULMCEFWMouX5jIaIPx%2BZjX25iRM7IrvovGU9HXsyJ98Ri3SfU7LdkXckPEgnD8WItpXQ4Qxha3%2FJ%2Fla9mp4vWChRHxd3w3%2Fpnw0dNhSMrBTvnb4ha0n%2BUPjNOozelOaNEjVbEy6p8tMQYXfN5r1YSOg0vHw%2F5h%2BumTo9E9bFK3zYuNv5nJUjuIhwiuDUKoMGkFotCTiypooK%2FGSxCCCpPACCmARktHcX%2Bc8VXwaHx3VEJQJuphCFNUFO4%2F3ghYK2mmqi3p7%2FdsG5dKi4WgS6Wdri7MfSWczAqM%2FJ8zVNTWd0nLF4wFNc4Y6YdAu8Z%2BOAzBONCr7xKzdtWs58hMJtPuu9e%2BMP6Y7rwGOqUBUBriyznZAeFrqWawFHyFvVvuSt5eO4Tn%2Bmwauqu8TKzzpNRWbxbanLM9lSxfvJPTorvI7iS4PnqmWPEQ7PC%2BoPkJUbZEecKGhrvxqj8Rk3PplrfzVFukOldLBICpMQI4Cmt1Uzw7c4AkY7eaBPRgYRnfIhyl%2F3pCHnX%2FvQkfoc45La5kVCL0X4UsslYSXQGbWrgBRlgkPKfffF2189n%2B1N%2FJNffK&X-Amz-Signature=bef25fc2d7047e5081dbdfcaa88508b5d1ffee30db87da009545efb797c407a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IGO6OV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAE%2BYhJMJBsaHqsWdURtEnjlEP8rScJnueBLvuyFg6FHAiEAseZtFltiiA2Xb93BSMbihYQrXcYezguPm7ucGQwBzQwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoBixDzlGypP1ZQhSrcAz5sra4Q0P%2FCEd9nax9b7jcyRYZC9iVNl9V5wDf0%2FxhmqxRl66PO3zV9HijwgGQVbb7v12H6IHLvYIaiK0XbgUhudQhpY3HRqhS5TLh0keJXwAWm51GcfycNBPy%2BYEz6Nv6E3D2a%2BP4ZtUH6%2FURv%2B1eJ8fApH0MMzMgSORNAEKEfcC%2Fax7NWLwxBo%2BxWTvrUl6MFKip0HzZxJiU7pnE9wN5uayIxLd1PHrwlUfkRrIPDGRFUxyr%2FaO8FPEAZzPqCi9g5Zv5GRe6KS6AghXKnMMwa56tqeBbVi0ULMCEFWMouX5jIaIPx%2BZjX25iRM7IrvovGU9HXsyJ98Ri3SfU7LdkXckPEgnD8WItpXQ4Qxha3%2FJ%2Fla9mp4vWChRHxd3w3%2Fpnw0dNhSMrBTvnb4ha0n%2BUPjNOozelOaNEjVbEy6p8tMQYXfN5r1YSOg0vHw%2F5h%2BumTo9E9bFK3zYuNv5nJUjuIhwiuDUKoMGkFotCTiypooK%2FGSxCCCpPACCmARktHcX%2Bc8VXwaHx3VEJQJuphCFNUFO4%2F3ghYK2mmqi3p7%2FdsG5dKi4WgS6Wdri7MfSWczAqM%2FJ8zVNTWd0nLF4wFNc4Y6YdAu8Z%2BOAzBONCr7xKzdtWs58hMJtPuu9e%2BMP6Y7rwGOqUBUBriyznZAeFrqWawFHyFvVvuSt5eO4Tn%2Bmwauqu8TKzzpNRWbxbanLM9lSxfvJPTorvI7iS4PnqmWPEQ7PC%2BoPkJUbZEecKGhrvxqj8Rk3PplrfzVFukOldLBICpMQI4Cmt1Uzw7c4AkY7eaBPRgYRnfIhyl%2F3pCHnX%2FvQkfoc45La5kVCL0X4UsslYSXQGbWrgBRlgkPKfffF2189n%2B1N%2FJNffK&X-Amz-Signature=9261920b76be4f952a5d4eac34447c9f00ea5ef664b672d047c2b9142589ff52&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IGO6OV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAE%2BYhJMJBsaHqsWdURtEnjlEP8rScJnueBLvuyFg6FHAiEAseZtFltiiA2Xb93BSMbihYQrXcYezguPm7ucGQwBzQwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoBixDzlGypP1ZQhSrcAz5sra4Q0P%2FCEd9nax9b7jcyRYZC9iVNl9V5wDf0%2FxhmqxRl66PO3zV9HijwgGQVbb7v12H6IHLvYIaiK0XbgUhudQhpY3HRqhS5TLh0keJXwAWm51GcfycNBPy%2BYEz6Nv6E3D2a%2BP4ZtUH6%2FURv%2B1eJ8fApH0MMzMgSORNAEKEfcC%2Fax7NWLwxBo%2BxWTvrUl6MFKip0HzZxJiU7pnE9wN5uayIxLd1PHrwlUfkRrIPDGRFUxyr%2FaO8FPEAZzPqCi9g5Zv5GRe6KS6AghXKnMMwa56tqeBbVi0ULMCEFWMouX5jIaIPx%2BZjX25iRM7IrvovGU9HXsyJ98Ri3SfU7LdkXckPEgnD8WItpXQ4Qxha3%2FJ%2Fla9mp4vWChRHxd3w3%2Fpnw0dNhSMrBTvnb4ha0n%2BUPjNOozelOaNEjVbEy6p8tMQYXfN5r1YSOg0vHw%2F5h%2BumTo9E9bFK3zYuNv5nJUjuIhwiuDUKoMGkFotCTiypooK%2FGSxCCCpPACCmARktHcX%2Bc8VXwaHx3VEJQJuphCFNUFO4%2F3ghYK2mmqi3p7%2FdsG5dKi4WgS6Wdri7MfSWczAqM%2FJ8zVNTWd0nLF4wFNc4Y6YdAu8Z%2BOAzBONCr7xKzdtWs58hMJtPuu9e%2BMP6Y7rwGOqUBUBriyznZAeFrqWawFHyFvVvuSt5eO4Tn%2Bmwauqu8TKzzpNRWbxbanLM9lSxfvJPTorvI7iS4PnqmWPEQ7PC%2BoPkJUbZEecKGhrvxqj8Rk3PplrfzVFukOldLBICpMQI4Cmt1Uzw7c4AkY7eaBPRgYRnfIhyl%2F3pCHnX%2FvQkfoc45La5kVCL0X4UsslYSXQGbWrgBRlgkPKfffF2189n%2B1N%2FJNffK&X-Amz-Signature=989cc1076b1c6c064c94f751b5d8590d414d2c4294245c24037f4cf662de4678&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IGO6OV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAE%2BYhJMJBsaHqsWdURtEnjlEP8rScJnueBLvuyFg6FHAiEAseZtFltiiA2Xb93BSMbihYQrXcYezguPm7ucGQwBzQwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoBixDzlGypP1ZQhSrcAz5sra4Q0P%2FCEd9nax9b7jcyRYZC9iVNl9V5wDf0%2FxhmqxRl66PO3zV9HijwgGQVbb7v12H6IHLvYIaiK0XbgUhudQhpY3HRqhS5TLh0keJXwAWm51GcfycNBPy%2BYEz6Nv6E3D2a%2BP4ZtUH6%2FURv%2B1eJ8fApH0MMzMgSORNAEKEfcC%2Fax7NWLwxBo%2BxWTvrUl6MFKip0HzZxJiU7pnE9wN5uayIxLd1PHrwlUfkRrIPDGRFUxyr%2FaO8FPEAZzPqCi9g5Zv5GRe6KS6AghXKnMMwa56tqeBbVi0ULMCEFWMouX5jIaIPx%2BZjX25iRM7IrvovGU9HXsyJ98Ri3SfU7LdkXckPEgnD8WItpXQ4Qxha3%2FJ%2Fla9mp4vWChRHxd3w3%2Fpnw0dNhSMrBTvnb4ha0n%2BUPjNOozelOaNEjVbEy6p8tMQYXfN5r1YSOg0vHw%2F5h%2BumTo9E9bFK3zYuNv5nJUjuIhwiuDUKoMGkFotCTiypooK%2FGSxCCCpPACCmARktHcX%2Bc8VXwaHx3VEJQJuphCFNUFO4%2F3ghYK2mmqi3p7%2FdsG5dKi4WgS6Wdri7MfSWczAqM%2FJ8zVNTWd0nLF4wFNc4Y6YdAu8Z%2BOAzBONCr7xKzdtWs58hMJtPuu9e%2BMP6Y7rwGOqUBUBriyznZAeFrqWawFHyFvVvuSt5eO4Tn%2Bmwauqu8TKzzpNRWbxbanLM9lSxfvJPTorvI7iS4PnqmWPEQ7PC%2BoPkJUbZEecKGhrvxqj8Rk3PplrfzVFukOldLBICpMQI4Cmt1Uzw7c4AkY7eaBPRgYRnfIhyl%2F3pCHnX%2FvQkfoc45La5kVCL0X4UsslYSXQGbWrgBRlgkPKfffF2189n%2B1N%2FJNffK&X-Amz-Signature=dbb701e20e92b01b0a4beb580c5a6dea0d62e4390aac8a56ef9b9a120af3c697&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IGO6OV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAE%2BYhJMJBsaHqsWdURtEnjlEP8rScJnueBLvuyFg6FHAiEAseZtFltiiA2Xb93BSMbihYQrXcYezguPm7ucGQwBzQwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoBixDzlGypP1ZQhSrcAz5sra4Q0P%2FCEd9nax9b7jcyRYZC9iVNl9V5wDf0%2FxhmqxRl66PO3zV9HijwgGQVbb7v12H6IHLvYIaiK0XbgUhudQhpY3HRqhS5TLh0keJXwAWm51GcfycNBPy%2BYEz6Nv6E3D2a%2BP4ZtUH6%2FURv%2B1eJ8fApH0MMzMgSORNAEKEfcC%2Fax7NWLwxBo%2BxWTvrUl6MFKip0HzZxJiU7pnE9wN5uayIxLd1PHrwlUfkRrIPDGRFUxyr%2FaO8FPEAZzPqCi9g5Zv5GRe6KS6AghXKnMMwa56tqeBbVi0ULMCEFWMouX5jIaIPx%2BZjX25iRM7IrvovGU9HXsyJ98Ri3SfU7LdkXckPEgnD8WItpXQ4Qxha3%2FJ%2Fla9mp4vWChRHxd3w3%2Fpnw0dNhSMrBTvnb4ha0n%2BUPjNOozelOaNEjVbEy6p8tMQYXfN5r1YSOg0vHw%2F5h%2BumTo9E9bFK3zYuNv5nJUjuIhwiuDUKoMGkFotCTiypooK%2FGSxCCCpPACCmARktHcX%2Bc8VXwaHx3VEJQJuphCFNUFO4%2F3ghYK2mmqi3p7%2FdsG5dKi4WgS6Wdri7MfSWczAqM%2FJ8zVNTWd0nLF4wFNc4Y6YdAu8Z%2BOAzBONCr7xKzdtWs58hMJtPuu9e%2BMP6Y7rwGOqUBUBriyznZAeFrqWawFHyFvVvuSt5eO4Tn%2Bmwauqu8TKzzpNRWbxbanLM9lSxfvJPTorvI7iS4PnqmWPEQ7PC%2BoPkJUbZEecKGhrvxqj8Rk3PplrfzVFukOldLBICpMQI4Cmt1Uzw7c4AkY7eaBPRgYRnfIhyl%2F3pCHnX%2FvQkfoc45La5kVCL0X4UsslYSXQGbWrgBRlgkPKfffF2189n%2B1N%2FJNffK&X-Amz-Signature=e4056f3927d4876606149ce9b281840ecccbc499ab5598be8222938042105b27&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IGO6OV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAE%2BYhJMJBsaHqsWdURtEnjlEP8rScJnueBLvuyFg6FHAiEAseZtFltiiA2Xb93BSMbihYQrXcYezguPm7ucGQwBzQwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoBixDzlGypP1ZQhSrcAz5sra4Q0P%2FCEd9nax9b7jcyRYZC9iVNl9V5wDf0%2FxhmqxRl66PO3zV9HijwgGQVbb7v12H6IHLvYIaiK0XbgUhudQhpY3HRqhS5TLh0keJXwAWm51GcfycNBPy%2BYEz6Nv6E3D2a%2BP4ZtUH6%2FURv%2B1eJ8fApH0MMzMgSORNAEKEfcC%2Fax7NWLwxBo%2BxWTvrUl6MFKip0HzZxJiU7pnE9wN5uayIxLd1PHrwlUfkRrIPDGRFUxyr%2FaO8FPEAZzPqCi9g5Zv5GRe6KS6AghXKnMMwa56tqeBbVi0ULMCEFWMouX5jIaIPx%2BZjX25iRM7IrvovGU9HXsyJ98Ri3SfU7LdkXckPEgnD8WItpXQ4Qxha3%2FJ%2Fla9mp4vWChRHxd3w3%2Fpnw0dNhSMrBTvnb4ha0n%2BUPjNOozelOaNEjVbEy6p8tMQYXfN5r1YSOg0vHw%2F5h%2BumTo9E9bFK3zYuNv5nJUjuIhwiuDUKoMGkFotCTiypooK%2FGSxCCCpPACCmARktHcX%2Bc8VXwaHx3VEJQJuphCFNUFO4%2F3ghYK2mmqi3p7%2FdsG5dKi4WgS6Wdri7MfSWczAqM%2FJ8zVNTWd0nLF4wFNc4Y6YdAu8Z%2BOAzBONCr7xKzdtWs58hMJtPuu9e%2BMP6Y7rwGOqUBUBriyznZAeFrqWawFHyFvVvuSt5eO4Tn%2Bmwauqu8TKzzpNRWbxbanLM9lSxfvJPTorvI7iS4PnqmWPEQ7PC%2BoPkJUbZEecKGhrvxqj8Rk3PplrfzVFukOldLBICpMQI4Cmt1Uzw7c4AkY7eaBPRgYRnfIhyl%2F3pCHnX%2FvQkfoc45La5kVCL0X4UsslYSXQGbWrgBRlgkPKfffF2189n%2B1N%2FJNffK&X-Amz-Signature=b3a14bf01d7d8671741b7552c991ffcb447388a2aa532c5b7678cde0356a753e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
