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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBAK7GT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCC2cftJS%2BqxVvVYTsEN4Wd%2BjWy%2FoiXNvp3%2BiXSrjaNGQIhAP1xYdpuvroiXPs9vqYX9Y137JtepepsOgGCngaIjOgfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwnapRAgykYTxZ5PUq3AP369pi6rVzhEuhWC4NifA4CrqamSpeQtYM5e%2FD%2B6NpC%2BaCZt7slKlaeRGsTIZ1%2BPZHZeDYrZRrjQTTLDHOcDAAvtRV9xing4DGcnSpa1hJU5XkcDVQ5Qw9AfTILChDXM4qneVpziiSBo4zh9Sm9EXxIMJdmUquVkupCI3h6DOt7caY34HDHJbeXhm%2FkjenCfcqBoFPpWheK2%2BV56B31frDPJid1XMK%2BU4jHGaPuyToMhfQlcyRr3ls1JgXtwh9YDkFUsCUfDreaQvxbEKGO9AW9dWJu4HtpvQCKlGndT64wpBHs3ngoomuIG7rfrvgjWQSOQwXgTdOypITpKlH%2Bfp6IrGMZqxoGW7ARAIcaiebtDUgf6hhiMNxXimJMHRS3WeUhsUSfQTN2fHKd%2FmZPkqX2UlL0p9BwH0axHCco9QzEcY9G%2FDGEXlyjQ8ZhWNTZa1C7%2FPaNgyjATxvVLQiRmhZ56s41nv%2B7EAQbnxPIJUSo9AGawpGVVzkC5k7ckx%2B3yHXMHqtjfbET6BFh2z4%2F0idAbkmoXRryQYnfCGTVyNT0wTQYx6e6u5NdrT5x1yw6qLayJ%2BTMlteNvOe0yE47CEYzdHRXLhBGMJ2XRwfKex41wKEDiqZ9FGmBBY8BDCDx42%2BBjqkAfH3usElUlpobhBb4fZ1efiHG99hTN9oi7%2FHCcQVEx3EV3aEK6bPkWzDy1SeAK%2BOPE%2FBvXqUn7lLbXBfx9ch1C0hOriLOpix5fPnRhO%2FNOiq%2BxyzEijDmbP2Lcj2qhfQb4aNGkSppE2%2FGXZGn%2Bj5uHVLt07J8tqngUT71vIMOCsJ3XNDJkEtvroW4YZNBHE9SQOS04Q1iZIQo6FdhQL2coQj8kPx&X-Amz-Signature=e1714d89c7407dbece215b5d5c4c53df8ec9fe3dd4a5f15e2a4cfb4db808dc50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBAK7GT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCC2cftJS%2BqxVvVYTsEN4Wd%2BjWy%2FoiXNvp3%2BiXSrjaNGQIhAP1xYdpuvroiXPs9vqYX9Y137JtepepsOgGCngaIjOgfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwnapRAgykYTxZ5PUq3AP369pi6rVzhEuhWC4NifA4CrqamSpeQtYM5e%2FD%2B6NpC%2BaCZt7slKlaeRGsTIZ1%2BPZHZeDYrZRrjQTTLDHOcDAAvtRV9xing4DGcnSpa1hJU5XkcDVQ5Qw9AfTILChDXM4qneVpziiSBo4zh9Sm9EXxIMJdmUquVkupCI3h6DOt7caY34HDHJbeXhm%2FkjenCfcqBoFPpWheK2%2BV56B31frDPJid1XMK%2BU4jHGaPuyToMhfQlcyRr3ls1JgXtwh9YDkFUsCUfDreaQvxbEKGO9AW9dWJu4HtpvQCKlGndT64wpBHs3ngoomuIG7rfrvgjWQSOQwXgTdOypITpKlH%2Bfp6IrGMZqxoGW7ARAIcaiebtDUgf6hhiMNxXimJMHRS3WeUhsUSfQTN2fHKd%2FmZPkqX2UlL0p9BwH0axHCco9QzEcY9G%2FDGEXlyjQ8ZhWNTZa1C7%2FPaNgyjATxvVLQiRmhZ56s41nv%2B7EAQbnxPIJUSo9AGawpGVVzkC5k7ckx%2B3yHXMHqtjfbET6BFh2z4%2F0idAbkmoXRryQYnfCGTVyNT0wTQYx6e6u5NdrT5x1yw6qLayJ%2BTMlteNvOe0yE47CEYzdHRXLhBGMJ2XRwfKex41wKEDiqZ9FGmBBY8BDCDx42%2BBjqkAfH3usElUlpobhBb4fZ1efiHG99hTN9oi7%2FHCcQVEx3EV3aEK6bPkWzDy1SeAK%2BOPE%2FBvXqUn7lLbXBfx9ch1C0hOriLOpix5fPnRhO%2FNOiq%2BxyzEijDmbP2Lcj2qhfQb4aNGkSppE2%2FGXZGn%2Bj5uHVLt07J8tqngUT71vIMOCsJ3XNDJkEtvroW4YZNBHE9SQOS04Q1iZIQo6FdhQL2coQj8kPx&X-Amz-Signature=d6afc0fe4b0544cac5c2752545f2244aab9647975148e76f3ea1503a284f7af6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBAK7GT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCC2cftJS%2BqxVvVYTsEN4Wd%2BjWy%2FoiXNvp3%2BiXSrjaNGQIhAP1xYdpuvroiXPs9vqYX9Y137JtepepsOgGCngaIjOgfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwnapRAgykYTxZ5PUq3AP369pi6rVzhEuhWC4NifA4CrqamSpeQtYM5e%2FD%2B6NpC%2BaCZt7slKlaeRGsTIZ1%2BPZHZeDYrZRrjQTTLDHOcDAAvtRV9xing4DGcnSpa1hJU5XkcDVQ5Qw9AfTILChDXM4qneVpziiSBo4zh9Sm9EXxIMJdmUquVkupCI3h6DOt7caY34HDHJbeXhm%2FkjenCfcqBoFPpWheK2%2BV56B31frDPJid1XMK%2BU4jHGaPuyToMhfQlcyRr3ls1JgXtwh9YDkFUsCUfDreaQvxbEKGO9AW9dWJu4HtpvQCKlGndT64wpBHs3ngoomuIG7rfrvgjWQSOQwXgTdOypITpKlH%2Bfp6IrGMZqxoGW7ARAIcaiebtDUgf6hhiMNxXimJMHRS3WeUhsUSfQTN2fHKd%2FmZPkqX2UlL0p9BwH0axHCco9QzEcY9G%2FDGEXlyjQ8ZhWNTZa1C7%2FPaNgyjATxvVLQiRmhZ56s41nv%2B7EAQbnxPIJUSo9AGawpGVVzkC5k7ckx%2B3yHXMHqtjfbET6BFh2z4%2F0idAbkmoXRryQYnfCGTVyNT0wTQYx6e6u5NdrT5x1yw6qLayJ%2BTMlteNvOe0yE47CEYzdHRXLhBGMJ2XRwfKex41wKEDiqZ9FGmBBY8BDCDx42%2BBjqkAfH3usElUlpobhBb4fZ1efiHG99hTN9oi7%2FHCcQVEx3EV3aEK6bPkWzDy1SeAK%2BOPE%2FBvXqUn7lLbXBfx9ch1C0hOriLOpix5fPnRhO%2FNOiq%2BxyzEijDmbP2Lcj2qhfQb4aNGkSppE2%2FGXZGn%2Bj5uHVLt07J8tqngUT71vIMOCsJ3XNDJkEtvroW4YZNBHE9SQOS04Q1iZIQo6FdhQL2coQj8kPx&X-Amz-Signature=fbf57cda1f22caf5f8a6cd95731e59db4387b9eff1ce2ec5fa7fcc9177bd506d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBAK7GT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCC2cftJS%2BqxVvVYTsEN4Wd%2BjWy%2FoiXNvp3%2BiXSrjaNGQIhAP1xYdpuvroiXPs9vqYX9Y137JtepepsOgGCngaIjOgfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwnapRAgykYTxZ5PUq3AP369pi6rVzhEuhWC4NifA4CrqamSpeQtYM5e%2FD%2B6NpC%2BaCZt7slKlaeRGsTIZ1%2BPZHZeDYrZRrjQTTLDHOcDAAvtRV9xing4DGcnSpa1hJU5XkcDVQ5Qw9AfTILChDXM4qneVpziiSBo4zh9Sm9EXxIMJdmUquVkupCI3h6DOt7caY34HDHJbeXhm%2FkjenCfcqBoFPpWheK2%2BV56B31frDPJid1XMK%2BU4jHGaPuyToMhfQlcyRr3ls1JgXtwh9YDkFUsCUfDreaQvxbEKGO9AW9dWJu4HtpvQCKlGndT64wpBHs3ngoomuIG7rfrvgjWQSOQwXgTdOypITpKlH%2Bfp6IrGMZqxoGW7ARAIcaiebtDUgf6hhiMNxXimJMHRS3WeUhsUSfQTN2fHKd%2FmZPkqX2UlL0p9BwH0axHCco9QzEcY9G%2FDGEXlyjQ8ZhWNTZa1C7%2FPaNgyjATxvVLQiRmhZ56s41nv%2B7EAQbnxPIJUSo9AGawpGVVzkC5k7ckx%2B3yHXMHqtjfbET6BFh2z4%2F0idAbkmoXRryQYnfCGTVyNT0wTQYx6e6u5NdrT5x1yw6qLayJ%2BTMlteNvOe0yE47CEYzdHRXLhBGMJ2XRwfKex41wKEDiqZ9FGmBBY8BDCDx42%2BBjqkAfH3usElUlpobhBb4fZ1efiHG99hTN9oi7%2FHCcQVEx3EV3aEK6bPkWzDy1SeAK%2BOPE%2FBvXqUn7lLbXBfx9ch1C0hOriLOpix5fPnRhO%2FNOiq%2BxyzEijDmbP2Lcj2qhfQb4aNGkSppE2%2FGXZGn%2Bj5uHVLt07J8tqngUT71vIMOCsJ3XNDJkEtvroW4YZNBHE9SQOS04Q1iZIQo6FdhQL2coQj8kPx&X-Amz-Signature=1c51de73fe1ed47b53b9d0f4a66d25df17250be7bf73fe41062b9f6f5139c61c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBAK7GT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCC2cftJS%2BqxVvVYTsEN4Wd%2BjWy%2FoiXNvp3%2BiXSrjaNGQIhAP1xYdpuvroiXPs9vqYX9Y137JtepepsOgGCngaIjOgfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwnapRAgykYTxZ5PUq3AP369pi6rVzhEuhWC4NifA4CrqamSpeQtYM5e%2FD%2B6NpC%2BaCZt7slKlaeRGsTIZ1%2BPZHZeDYrZRrjQTTLDHOcDAAvtRV9xing4DGcnSpa1hJU5XkcDVQ5Qw9AfTILChDXM4qneVpziiSBo4zh9Sm9EXxIMJdmUquVkupCI3h6DOt7caY34HDHJbeXhm%2FkjenCfcqBoFPpWheK2%2BV56B31frDPJid1XMK%2BU4jHGaPuyToMhfQlcyRr3ls1JgXtwh9YDkFUsCUfDreaQvxbEKGO9AW9dWJu4HtpvQCKlGndT64wpBHs3ngoomuIG7rfrvgjWQSOQwXgTdOypITpKlH%2Bfp6IrGMZqxoGW7ARAIcaiebtDUgf6hhiMNxXimJMHRS3WeUhsUSfQTN2fHKd%2FmZPkqX2UlL0p9BwH0axHCco9QzEcY9G%2FDGEXlyjQ8ZhWNTZa1C7%2FPaNgyjATxvVLQiRmhZ56s41nv%2B7EAQbnxPIJUSo9AGawpGVVzkC5k7ckx%2B3yHXMHqtjfbET6BFh2z4%2F0idAbkmoXRryQYnfCGTVyNT0wTQYx6e6u5NdrT5x1yw6qLayJ%2BTMlteNvOe0yE47CEYzdHRXLhBGMJ2XRwfKex41wKEDiqZ9FGmBBY8BDCDx42%2BBjqkAfH3usElUlpobhBb4fZ1efiHG99hTN9oi7%2FHCcQVEx3EV3aEK6bPkWzDy1SeAK%2BOPE%2FBvXqUn7lLbXBfx9ch1C0hOriLOpix5fPnRhO%2FNOiq%2BxyzEijDmbP2Lcj2qhfQb4aNGkSppE2%2FGXZGn%2Bj5uHVLt07J8tqngUT71vIMOCsJ3XNDJkEtvroW4YZNBHE9SQOS04Q1iZIQo6FdhQL2coQj8kPx&X-Amz-Signature=fb651d5e50e2ad72bf258af3c03214715e8636ff9e347bf368a55bf8bf799165&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBAK7GT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCC2cftJS%2BqxVvVYTsEN4Wd%2BjWy%2FoiXNvp3%2BiXSrjaNGQIhAP1xYdpuvroiXPs9vqYX9Y137JtepepsOgGCngaIjOgfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwnapRAgykYTxZ5PUq3AP369pi6rVzhEuhWC4NifA4CrqamSpeQtYM5e%2FD%2B6NpC%2BaCZt7slKlaeRGsTIZ1%2BPZHZeDYrZRrjQTTLDHOcDAAvtRV9xing4DGcnSpa1hJU5XkcDVQ5Qw9AfTILChDXM4qneVpziiSBo4zh9Sm9EXxIMJdmUquVkupCI3h6DOt7caY34HDHJbeXhm%2FkjenCfcqBoFPpWheK2%2BV56B31frDPJid1XMK%2BU4jHGaPuyToMhfQlcyRr3ls1JgXtwh9YDkFUsCUfDreaQvxbEKGO9AW9dWJu4HtpvQCKlGndT64wpBHs3ngoomuIG7rfrvgjWQSOQwXgTdOypITpKlH%2Bfp6IrGMZqxoGW7ARAIcaiebtDUgf6hhiMNxXimJMHRS3WeUhsUSfQTN2fHKd%2FmZPkqX2UlL0p9BwH0axHCco9QzEcY9G%2FDGEXlyjQ8ZhWNTZa1C7%2FPaNgyjATxvVLQiRmhZ56s41nv%2B7EAQbnxPIJUSo9AGawpGVVzkC5k7ckx%2B3yHXMHqtjfbET6BFh2z4%2F0idAbkmoXRryQYnfCGTVyNT0wTQYx6e6u5NdrT5x1yw6qLayJ%2BTMlteNvOe0yE47CEYzdHRXLhBGMJ2XRwfKex41wKEDiqZ9FGmBBY8BDCDx42%2BBjqkAfH3usElUlpobhBb4fZ1efiHG99hTN9oi7%2FHCcQVEx3EV3aEK6bPkWzDy1SeAK%2BOPE%2FBvXqUn7lLbXBfx9ch1C0hOriLOpix5fPnRhO%2FNOiq%2BxyzEijDmbP2Lcj2qhfQb4aNGkSppE2%2FGXZGn%2Bj5uHVLt07J8tqngUT71vIMOCsJ3XNDJkEtvroW4YZNBHE9SQOS04Q1iZIQo6FdhQL2coQj8kPx&X-Amz-Signature=8ec1906d046101dadcff393526f6e984a53a50792fce0afedf7066dc27c63395&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBAK7GT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCC2cftJS%2BqxVvVYTsEN4Wd%2BjWy%2FoiXNvp3%2BiXSrjaNGQIhAP1xYdpuvroiXPs9vqYX9Y137JtepepsOgGCngaIjOgfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwnapRAgykYTxZ5PUq3AP369pi6rVzhEuhWC4NifA4CrqamSpeQtYM5e%2FD%2B6NpC%2BaCZt7slKlaeRGsTIZ1%2BPZHZeDYrZRrjQTTLDHOcDAAvtRV9xing4DGcnSpa1hJU5XkcDVQ5Qw9AfTILChDXM4qneVpziiSBo4zh9Sm9EXxIMJdmUquVkupCI3h6DOt7caY34HDHJbeXhm%2FkjenCfcqBoFPpWheK2%2BV56B31frDPJid1XMK%2BU4jHGaPuyToMhfQlcyRr3ls1JgXtwh9YDkFUsCUfDreaQvxbEKGO9AW9dWJu4HtpvQCKlGndT64wpBHs3ngoomuIG7rfrvgjWQSOQwXgTdOypITpKlH%2Bfp6IrGMZqxoGW7ARAIcaiebtDUgf6hhiMNxXimJMHRS3WeUhsUSfQTN2fHKd%2FmZPkqX2UlL0p9BwH0axHCco9QzEcY9G%2FDGEXlyjQ8ZhWNTZa1C7%2FPaNgyjATxvVLQiRmhZ56s41nv%2B7EAQbnxPIJUSo9AGawpGVVzkC5k7ckx%2B3yHXMHqtjfbET6BFh2z4%2F0idAbkmoXRryQYnfCGTVyNT0wTQYx6e6u5NdrT5x1yw6qLayJ%2BTMlteNvOe0yE47CEYzdHRXLhBGMJ2XRwfKex41wKEDiqZ9FGmBBY8BDCDx42%2BBjqkAfH3usElUlpobhBb4fZ1efiHG99hTN9oi7%2FHCcQVEx3EV3aEK6bPkWzDy1SeAK%2BOPE%2FBvXqUn7lLbXBfx9ch1C0hOriLOpix5fPnRhO%2FNOiq%2BxyzEijDmbP2Lcj2qhfQb4aNGkSppE2%2FGXZGn%2Bj5uHVLt07J8tqngUT71vIMOCsJ3XNDJkEtvroW4YZNBHE9SQOS04Q1iZIQo6FdhQL2coQj8kPx&X-Amz-Signature=2609d4ed2b143ea0f65ab219bfd1fa2093a33804a97a6af3958d69198ec74111&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
