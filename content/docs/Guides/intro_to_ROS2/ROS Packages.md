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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJFDYHP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDhtJoMiRoJYYHS0Qz6554hsgILFJaYFwSKi8OwLoakFwIhAMbNRzfh9DgsDF4v9Yl%2Bn4xUUw6lswRPR1hL5XvIh9vaKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAQvnZgmUfNBqiGYq3AMrYhOm0IDU9YKsinaalVA6T859JLcRBvdAigmSfYNcfy%2B4QVP4T7%2B6O46R9PvXdxW7Zt02vMxlxzJdUQxuBVOh%2F5t2303pNfAOhXvBjYB49cgPP%2Fkd%2B3yAJneWCG7jea6XjNg8Ab4tbzFc2S53dNnpa1s8lbndisaOg%2FEwfFJnDI5gZQ6Yhj%2FQ0WSedy6HO2TVdTvBnIRbvXrrOeW9v3WkoONL4eMYb9WpDp4ubeZnrsO%2BV0onyMBvdKRjrTqkp7s5EOjmeIVu7sLtlRbAjzhj9cPMc6c4PoqcKj6i22SVC1vWgWb%2Bo6WcGG7dxwTby3KIZMJK16zQQxENSwZItnrOFLm46oIF0vklTZL1tJgkIXaYsje7P09E%2FGngEP3fqZO1jdAUAALOV2Q3G4GlCzyP0ciX6jRaqlxaEKV%2FX8XjOTCqjw1BTfcUHuozuUimmJHyocitW5Gb3cxg1fQoM2fGBF%2BVHCpovN8XFLS2ryP7dV%2Basc%2F99QhCpxayD7W%2BIif4s%2B%2B3UtbjmTPOeuG%2B%2BJnI2DsVDWdGm9XLSsghwpRA8Z66nv1Ju%2FnxEO2IwgMJei5Mj53k1qg0pORGG3da9isqFFvI%2F9VcECie8xkJJUeKttWVq4kyqM5UcxW8ozDwudfABjqkAfJQT5pzuGiffm5%2BYKlbydAXKkrimrJQ%2BMiCbEg1HIUtwhwAgT7Toa%2F%2BT3qH3dFvPourcQIW7FxnyGSO6PDpan%2F4KzOiCnXbRfRfCRPfeDhOBjUtG2%2FqFfDXYboY6MX7Hzx4h1BWqEV4Mq0K19uB9eNk9UjoZ8EtTh083GM0t5TF64C8bAowPzw5KO9xES3gjGlKCxAGxO2qefZda4YTMAAliHIO&X-Amz-Signature=65630b5010b3e87bc2d36a4929cd9f8498a1199f7bfe758fa0a4f63aa027a14a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJFDYHP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDhtJoMiRoJYYHS0Qz6554hsgILFJaYFwSKi8OwLoakFwIhAMbNRzfh9DgsDF4v9Yl%2Bn4xUUw6lswRPR1hL5XvIh9vaKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAQvnZgmUfNBqiGYq3AMrYhOm0IDU9YKsinaalVA6T859JLcRBvdAigmSfYNcfy%2B4QVP4T7%2B6O46R9PvXdxW7Zt02vMxlxzJdUQxuBVOh%2F5t2303pNfAOhXvBjYB49cgPP%2Fkd%2B3yAJneWCG7jea6XjNg8Ab4tbzFc2S53dNnpa1s8lbndisaOg%2FEwfFJnDI5gZQ6Yhj%2FQ0WSedy6HO2TVdTvBnIRbvXrrOeW9v3WkoONL4eMYb9WpDp4ubeZnrsO%2BV0onyMBvdKRjrTqkp7s5EOjmeIVu7sLtlRbAjzhj9cPMc6c4PoqcKj6i22SVC1vWgWb%2Bo6WcGG7dxwTby3KIZMJK16zQQxENSwZItnrOFLm46oIF0vklTZL1tJgkIXaYsje7P09E%2FGngEP3fqZO1jdAUAALOV2Q3G4GlCzyP0ciX6jRaqlxaEKV%2FX8XjOTCqjw1BTfcUHuozuUimmJHyocitW5Gb3cxg1fQoM2fGBF%2BVHCpovN8XFLS2ryP7dV%2Basc%2F99QhCpxayD7W%2BIif4s%2B%2B3UtbjmTPOeuG%2B%2BJnI2DsVDWdGm9XLSsghwpRA8Z66nv1Ju%2FnxEO2IwgMJei5Mj53k1qg0pORGG3da9isqFFvI%2F9VcECie8xkJJUeKttWVq4kyqM5UcxW8ozDwudfABjqkAfJQT5pzuGiffm5%2BYKlbydAXKkrimrJQ%2BMiCbEg1HIUtwhwAgT7Toa%2F%2BT3qH3dFvPourcQIW7FxnyGSO6PDpan%2F4KzOiCnXbRfRfCRPfeDhOBjUtG2%2FqFfDXYboY6MX7Hzx4h1BWqEV4Mq0K19uB9eNk9UjoZ8EtTh083GM0t5TF64C8bAowPzw5KO9xES3gjGlKCxAGxO2qefZda4YTMAAliHIO&X-Amz-Signature=b0669f8ec4f452c077f36b7d658e4b7dfec18c8fcf7cb48c6a56fb1eecc942cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJFDYHP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDhtJoMiRoJYYHS0Qz6554hsgILFJaYFwSKi8OwLoakFwIhAMbNRzfh9DgsDF4v9Yl%2Bn4xUUw6lswRPR1hL5XvIh9vaKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAQvnZgmUfNBqiGYq3AMrYhOm0IDU9YKsinaalVA6T859JLcRBvdAigmSfYNcfy%2B4QVP4T7%2B6O46R9PvXdxW7Zt02vMxlxzJdUQxuBVOh%2F5t2303pNfAOhXvBjYB49cgPP%2Fkd%2B3yAJneWCG7jea6XjNg8Ab4tbzFc2S53dNnpa1s8lbndisaOg%2FEwfFJnDI5gZQ6Yhj%2FQ0WSedy6HO2TVdTvBnIRbvXrrOeW9v3WkoONL4eMYb9WpDp4ubeZnrsO%2BV0onyMBvdKRjrTqkp7s5EOjmeIVu7sLtlRbAjzhj9cPMc6c4PoqcKj6i22SVC1vWgWb%2Bo6WcGG7dxwTby3KIZMJK16zQQxENSwZItnrOFLm46oIF0vklTZL1tJgkIXaYsje7P09E%2FGngEP3fqZO1jdAUAALOV2Q3G4GlCzyP0ciX6jRaqlxaEKV%2FX8XjOTCqjw1BTfcUHuozuUimmJHyocitW5Gb3cxg1fQoM2fGBF%2BVHCpovN8XFLS2ryP7dV%2Basc%2F99QhCpxayD7W%2BIif4s%2B%2B3UtbjmTPOeuG%2B%2BJnI2DsVDWdGm9XLSsghwpRA8Z66nv1Ju%2FnxEO2IwgMJei5Mj53k1qg0pORGG3da9isqFFvI%2F9VcECie8xkJJUeKttWVq4kyqM5UcxW8ozDwudfABjqkAfJQT5pzuGiffm5%2BYKlbydAXKkrimrJQ%2BMiCbEg1HIUtwhwAgT7Toa%2F%2BT3qH3dFvPourcQIW7FxnyGSO6PDpan%2F4KzOiCnXbRfRfCRPfeDhOBjUtG2%2FqFfDXYboY6MX7Hzx4h1BWqEV4Mq0K19uB9eNk9UjoZ8EtTh083GM0t5TF64C8bAowPzw5KO9xES3gjGlKCxAGxO2qefZda4YTMAAliHIO&X-Amz-Signature=754104069416150e3ef5a7904dc37da2c5005ae69fa3593c7ed47d91c7d2d9b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJFDYHP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDhtJoMiRoJYYHS0Qz6554hsgILFJaYFwSKi8OwLoakFwIhAMbNRzfh9DgsDF4v9Yl%2Bn4xUUw6lswRPR1hL5XvIh9vaKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAQvnZgmUfNBqiGYq3AMrYhOm0IDU9YKsinaalVA6T859JLcRBvdAigmSfYNcfy%2B4QVP4T7%2B6O46R9PvXdxW7Zt02vMxlxzJdUQxuBVOh%2F5t2303pNfAOhXvBjYB49cgPP%2Fkd%2B3yAJneWCG7jea6XjNg8Ab4tbzFc2S53dNnpa1s8lbndisaOg%2FEwfFJnDI5gZQ6Yhj%2FQ0WSedy6HO2TVdTvBnIRbvXrrOeW9v3WkoONL4eMYb9WpDp4ubeZnrsO%2BV0onyMBvdKRjrTqkp7s5EOjmeIVu7sLtlRbAjzhj9cPMc6c4PoqcKj6i22SVC1vWgWb%2Bo6WcGG7dxwTby3KIZMJK16zQQxENSwZItnrOFLm46oIF0vklTZL1tJgkIXaYsje7P09E%2FGngEP3fqZO1jdAUAALOV2Q3G4GlCzyP0ciX6jRaqlxaEKV%2FX8XjOTCqjw1BTfcUHuozuUimmJHyocitW5Gb3cxg1fQoM2fGBF%2BVHCpovN8XFLS2ryP7dV%2Basc%2F99QhCpxayD7W%2BIif4s%2B%2B3UtbjmTPOeuG%2B%2BJnI2DsVDWdGm9XLSsghwpRA8Z66nv1Ju%2FnxEO2IwgMJei5Mj53k1qg0pORGG3da9isqFFvI%2F9VcECie8xkJJUeKttWVq4kyqM5UcxW8ozDwudfABjqkAfJQT5pzuGiffm5%2BYKlbydAXKkrimrJQ%2BMiCbEg1HIUtwhwAgT7Toa%2F%2BT3qH3dFvPourcQIW7FxnyGSO6PDpan%2F4KzOiCnXbRfRfCRPfeDhOBjUtG2%2FqFfDXYboY6MX7Hzx4h1BWqEV4Mq0K19uB9eNk9UjoZ8EtTh083GM0t5TF64C8bAowPzw5KO9xES3gjGlKCxAGxO2qefZda4YTMAAliHIO&X-Amz-Signature=251ad18d2be27ab0873fc4790321447015db64776379a1d20deed5f14d8af1e4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJFDYHP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDhtJoMiRoJYYHS0Qz6554hsgILFJaYFwSKi8OwLoakFwIhAMbNRzfh9DgsDF4v9Yl%2Bn4xUUw6lswRPR1hL5XvIh9vaKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAQvnZgmUfNBqiGYq3AMrYhOm0IDU9YKsinaalVA6T859JLcRBvdAigmSfYNcfy%2B4QVP4T7%2B6O46R9PvXdxW7Zt02vMxlxzJdUQxuBVOh%2F5t2303pNfAOhXvBjYB49cgPP%2Fkd%2B3yAJneWCG7jea6XjNg8Ab4tbzFc2S53dNnpa1s8lbndisaOg%2FEwfFJnDI5gZQ6Yhj%2FQ0WSedy6HO2TVdTvBnIRbvXrrOeW9v3WkoONL4eMYb9WpDp4ubeZnrsO%2BV0onyMBvdKRjrTqkp7s5EOjmeIVu7sLtlRbAjzhj9cPMc6c4PoqcKj6i22SVC1vWgWb%2Bo6WcGG7dxwTby3KIZMJK16zQQxENSwZItnrOFLm46oIF0vklTZL1tJgkIXaYsje7P09E%2FGngEP3fqZO1jdAUAALOV2Q3G4GlCzyP0ciX6jRaqlxaEKV%2FX8XjOTCqjw1BTfcUHuozuUimmJHyocitW5Gb3cxg1fQoM2fGBF%2BVHCpovN8XFLS2ryP7dV%2Basc%2F99QhCpxayD7W%2BIif4s%2B%2B3UtbjmTPOeuG%2B%2BJnI2DsVDWdGm9XLSsghwpRA8Z66nv1Ju%2FnxEO2IwgMJei5Mj53k1qg0pORGG3da9isqFFvI%2F9VcECie8xkJJUeKttWVq4kyqM5UcxW8ozDwudfABjqkAfJQT5pzuGiffm5%2BYKlbydAXKkrimrJQ%2BMiCbEg1HIUtwhwAgT7Toa%2F%2BT3qH3dFvPourcQIW7FxnyGSO6PDpan%2F4KzOiCnXbRfRfCRPfeDhOBjUtG2%2FqFfDXYboY6MX7Hzx4h1BWqEV4Mq0K19uB9eNk9UjoZ8EtTh083GM0t5TF64C8bAowPzw5KO9xES3gjGlKCxAGxO2qefZda4YTMAAliHIO&X-Amz-Signature=e2993a361865357ce3389bc8e9b46f254ed681fd5cd6fd1805c98a83dbd1de33&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJFDYHP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDhtJoMiRoJYYHS0Qz6554hsgILFJaYFwSKi8OwLoakFwIhAMbNRzfh9DgsDF4v9Yl%2Bn4xUUw6lswRPR1hL5XvIh9vaKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAQvnZgmUfNBqiGYq3AMrYhOm0IDU9YKsinaalVA6T859JLcRBvdAigmSfYNcfy%2B4QVP4T7%2B6O46R9PvXdxW7Zt02vMxlxzJdUQxuBVOh%2F5t2303pNfAOhXvBjYB49cgPP%2Fkd%2B3yAJneWCG7jea6XjNg8Ab4tbzFc2S53dNnpa1s8lbndisaOg%2FEwfFJnDI5gZQ6Yhj%2FQ0WSedy6HO2TVdTvBnIRbvXrrOeW9v3WkoONL4eMYb9WpDp4ubeZnrsO%2BV0onyMBvdKRjrTqkp7s5EOjmeIVu7sLtlRbAjzhj9cPMc6c4PoqcKj6i22SVC1vWgWb%2Bo6WcGG7dxwTby3KIZMJK16zQQxENSwZItnrOFLm46oIF0vklTZL1tJgkIXaYsje7P09E%2FGngEP3fqZO1jdAUAALOV2Q3G4GlCzyP0ciX6jRaqlxaEKV%2FX8XjOTCqjw1BTfcUHuozuUimmJHyocitW5Gb3cxg1fQoM2fGBF%2BVHCpovN8XFLS2ryP7dV%2Basc%2F99QhCpxayD7W%2BIif4s%2B%2B3UtbjmTPOeuG%2B%2BJnI2DsVDWdGm9XLSsghwpRA8Z66nv1Ju%2FnxEO2IwgMJei5Mj53k1qg0pORGG3da9isqFFvI%2F9VcECie8xkJJUeKttWVq4kyqM5UcxW8ozDwudfABjqkAfJQT5pzuGiffm5%2BYKlbydAXKkrimrJQ%2BMiCbEg1HIUtwhwAgT7Toa%2F%2BT3qH3dFvPourcQIW7FxnyGSO6PDpan%2F4KzOiCnXbRfRfCRPfeDhOBjUtG2%2FqFfDXYboY6MX7Hzx4h1BWqEV4Mq0K19uB9eNk9UjoZ8EtTh083GM0t5TF64C8bAowPzw5KO9xES3gjGlKCxAGxO2qefZda4YTMAAliHIO&X-Amz-Signature=76e34053875e6f1cc1d079aaf79d2358eaabdaf0e6cf1af1713a688f75936d26&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJFDYHP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDhtJoMiRoJYYHS0Qz6554hsgILFJaYFwSKi8OwLoakFwIhAMbNRzfh9DgsDF4v9Yl%2Bn4xUUw6lswRPR1hL5XvIh9vaKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAQvnZgmUfNBqiGYq3AMrYhOm0IDU9YKsinaalVA6T859JLcRBvdAigmSfYNcfy%2B4QVP4T7%2B6O46R9PvXdxW7Zt02vMxlxzJdUQxuBVOh%2F5t2303pNfAOhXvBjYB49cgPP%2Fkd%2B3yAJneWCG7jea6XjNg8Ab4tbzFc2S53dNnpa1s8lbndisaOg%2FEwfFJnDI5gZQ6Yhj%2FQ0WSedy6HO2TVdTvBnIRbvXrrOeW9v3WkoONL4eMYb9WpDp4ubeZnrsO%2BV0onyMBvdKRjrTqkp7s5EOjmeIVu7sLtlRbAjzhj9cPMc6c4PoqcKj6i22SVC1vWgWb%2Bo6WcGG7dxwTby3KIZMJK16zQQxENSwZItnrOFLm46oIF0vklTZL1tJgkIXaYsje7P09E%2FGngEP3fqZO1jdAUAALOV2Q3G4GlCzyP0ciX6jRaqlxaEKV%2FX8XjOTCqjw1BTfcUHuozuUimmJHyocitW5Gb3cxg1fQoM2fGBF%2BVHCpovN8XFLS2ryP7dV%2Basc%2F99QhCpxayD7W%2BIif4s%2B%2B3UtbjmTPOeuG%2B%2BJnI2DsVDWdGm9XLSsghwpRA8Z66nv1Ju%2FnxEO2IwgMJei5Mj53k1qg0pORGG3da9isqFFvI%2F9VcECie8xkJJUeKttWVq4kyqM5UcxW8ozDwudfABjqkAfJQT5pzuGiffm5%2BYKlbydAXKkrimrJQ%2BMiCbEg1HIUtwhwAgT7Toa%2F%2BT3qH3dFvPourcQIW7FxnyGSO6PDpan%2F4KzOiCnXbRfRfCRPfeDhOBjUtG2%2FqFfDXYboY6MX7Hzx4h1BWqEV4Mq0K19uB9eNk9UjoZ8EtTh083GM0t5TF64C8bAowPzw5KO9xES3gjGlKCxAGxO2qefZda4YTMAAliHIO&X-Amz-Signature=2fe8815f930b43b2ead8d6985aa061e415369f94d7eae7fa304676e13e936e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
