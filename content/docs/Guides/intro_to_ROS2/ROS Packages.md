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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5G6OZ5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfHuc90iS%2BEeFwIN8qOezJERqQA1rCO3LSABfQiqTfyAiAsHSX7j2z5fTdoHfGL3tiF6BZYvW%2FcbFdw6WDhcZJybSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNLNgpQpEH%2Fc7dvFmKtwDJgGYXINR%2FDRUnIADyf1%2FucHym1z%2BuXN53FdUfqn3f2n%2B8pgKf3rBPu9IA9Z00hKlEvuSNWI7u2OxNHwLSvS7gfU8iE8Aie8iHo5nPQExSLt%2BHKwqw%2ByTKj5bhEZ90I1c65i4NsO56lJzAQtX7BuXlJAOMhZNQ%2FYYDqTsUhXzZIBnUC3J%2BS6d1vIhn5KrF6S5f%2BMDaW7Kt7dHUGmGM2an5qhzgjoMT%2FoGBf87763EoPnWeIpuaNB7trXpj6DcmrNcvwwSHqMwI2NZxkVcDx7gjj%2BvTz5xwj8uMhH%2Fbsc09I5dqXs4AK6jbxQ9lbPIFFYjvnqpY%2BJKjGjebaOb3zksB6T59dOaWChahk6DZmFnIiKtwUDkJEmXYF16adxuJP3fHTHzzc%2B2h3zCfGnx3bIjS%2BQ5W9pGhRDf38z31t5uxxOXy9%2BDTLZvFIliappOMtCDvTjFSofpgJbOCyH%2FqOoHWXlUyFl7402zIRK5lkx4fIaJOXp0ddRL17U22O%2B%2FKAkIR3yjpybzVvo0UmiCypzcnezCeRBxMG0NIZMNbq033iBhsXpkCLlkGsxlRFrJyhVDuQ1WZtL%2FRjLwfVeqzSItjC%2BjYxqYUwB3HuBjl2E1aL80Taxo4CJHF2q077Uw3ZulvQY6pgHygNySVc85ks09VThqOZtZuCykKSnwVBhT6dVrwpELLAeBM5Ml6rZy7UaA8NtLmPLGNfyCS1tyAAItd%2FpZ%2F7eTtSVwFy6OfFSSrDCSra4o5fNKg71tipdn6jvm%2FWLYaA3PgIdnG0vdDVEx3ekSlP80Lj61TFEOe8uvZb3Zt1GD3PJcDD9IflfsxdVnpL2mNUJo9lC4rym09k0g445QTqbVQijBpwyX&X-Amz-Signature=8de6adaa0ad12d302a90f13631c67f56c202837df2885fb91192fc4fcac689a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5G6OZ5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfHuc90iS%2BEeFwIN8qOezJERqQA1rCO3LSABfQiqTfyAiAsHSX7j2z5fTdoHfGL3tiF6BZYvW%2FcbFdw6WDhcZJybSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNLNgpQpEH%2Fc7dvFmKtwDJgGYXINR%2FDRUnIADyf1%2FucHym1z%2BuXN53FdUfqn3f2n%2B8pgKf3rBPu9IA9Z00hKlEvuSNWI7u2OxNHwLSvS7gfU8iE8Aie8iHo5nPQExSLt%2BHKwqw%2ByTKj5bhEZ90I1c65i4NsO56lJzAQtX7BuXlJAOMhZNQ%2FYYDqTsUhXzZIBnUC3J%2BS6d1vIhn5KrF6S5f%2BMDaW7Kt7dHUGmGM2an5qhzgjoMT%2FoGBf87763EoPnWeIpuaNB7trXpj6DcmrNcvwwSHqMwI2NZxkVcDx7gjj%2BvTz5xwj8uMhH%2Fbsc09I5dqXs4AK6jbxQ9lbPIFFYjvnqpY%2BJKjGjebaOb3zksB6T59dOaWChahk6DZmFnIiKtwUDkJEmXYF16adxuJP3fHTHzzc%2B2h3zCfGnx3bIjS%2BQ5W9pGhRDf38z31t5uxxOXy9%2BDTLZvFIliappOMtCDvTjFSofpgJbOCyH%2FqOoHWXlUyFl7402zIRK5lkx4fIaJOXp0ddRL17U22O%2B%2FKAkIR3yjpybzVvo0UmiCypzcnezCeRBxMG0NIZMNbq033iBhsXpkCLlkGsxlRFrJyhVDuQ1WZtL%2FRjLwfVeqzSItjC%2BjYxqYUwB3HuBjl2E1aL80Taxo4CJHF2q077Uw3ZulvQY6pgHygNySVc85ks09VThqOZtZuCykKSnwVBhT6dVrwpELLAeBM5Ml6rZy7UaA8NtLmPLGNfyCS1tyAAItd%2FpZ%2F7eTtSVwFy6OfFSSrDCSra4o5fNKg71tipdn6jvm%2FWLYaA3PgIdnG0vdDVEx3ekSlP80Lj61TFEOe8uvZb3Zt1GD3PJcDD9IflfsxdVnpL2mNUJo9lC4rym09k0g445QTqbVQijBpwyX&X-Amz-Signature=676944187a7da03eddfb64c3200933443fef75883ecb388cb65e6593de7d0aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5G6OZ5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfHuc90iS%2BEeFwIN8qOezJERqQA1rCO3LSABfQiqTfyAiAsHSX7j2z5fTdoHfGL3tiF6BZYvW%2FcbFdw6WDhcZJybSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNLNgpQpEH%2Fc7dvFmKtwDJgGYXINR%2FDRUnIADyf1%2FucHym1z%2BuXN53FdUfqn3f2n%2B8pgKf3rBPu9IA9Z00hKlEvuSNWI7u2OxNHwLSvS7gfU8iE8Aie8iHo5nPQExSLt%2BHKwqw%2ByTKj5bhEZ90I1c65i4NsO56lJzAQtX7BuXlJAOMhZNQ%2FYYDqTsUhXzZIBnUC3J%2BS6d1vIhn5KrF6S5f%2BMDaW7Kt7dHUGmGM2an5qhzgjoMT%2FoGBf87763EoPnWeIpuaNB7trXpj6DcmrNcvwwSHqMwI2NZxkVcDx7gjj%2BvTz5xwj8uMhH%2Fbsc09I5dqXs4AK6jbxQ9lbPIFFYjvnqpY%2BJKjGjebaOb3zksB6T59dOaWChahk6DZmFnIiKtwUDkJEmXYF16adxuJP3fHTHzzc%2B2h3zCfGnx3bIjS%2BQ5W9pGhRDf38z31t5uxxOXy9%2BDTLZvFIliappOMtCDvTjFSofpgJbOCyH%2FqOoHWXlUyFl7402zIRK5lkx4fIaJOXp0ddRL17U22O%2B%2FKAkIR3yjpybzVvo0UmiCypzcnezCeRBxMG0NIZMNbq033iBhsXpkCLlkGsxlRFrJyhVDuQ1WZtL%2FRjLwfVeqzSItjC%2BjYxqYUwB3HuBjl2E1aL80Taxo4CJHF2q077Uw3ZulvQY6pgHygNySVc85ks09VThqOZtZuCykKSnwVBhT6dVrwpELLAeBM5Ml6rZy7UaA8NtLmPLGNfyCS1tyAAItd%2FpZ%2F7eTtSVwFy6OfFSSrDCSra4o5fNKg71tipdn6jvm%2FWLYaA3PgIdnG0vdDVEx3ekSlP80Lj61TFEOe8uvZb3Zt1GD3PJcDD9IflfsxdVnpL2mNUJo9lC4rym09k0g445QTqbVQijBpwyX&X-Amz-Signature=71231699f835d48e20b726d1a9348016f39df7688e9a66d3ea79eda62244def9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5G6OZ5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfHuc90iS%2BEeFwIN8qOezJERqQA1rCO3LSABfQiqTfyAiAsHSX7j2z5fTdoHfGL3tiF6BZYvW%2FcbFdw6WDhcZJybSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNLNgpQpEH%2Fc7dvFmKtwDJgGYXINR%2FDRUnIADyf1%2FucHym1z%2BuXN53FdUfqn3f2n%2B8pgKf3rBPu9IA9Z00hKlEvuSNWI7u2OxNHwLSvS7gfU8iE8Aie8iHo5nPQExSLt%2BHKwqw%2ByTKj5bhEZ90I1c65i4NsO56lJzAQtX7BuXlJAOMhZNQ%2FYYDqTsUhXzZIBnUC3J%2BS6d1vIhn5KrF6S5f%2BMDaW7Kt7dHUGmGM2an5qhzgjoMT%2FoGBf87763EoPnWeIpuaNB7trXpj6DcmrNcvwwSHqMwI2NZxkVcDx7gjj%2BvTz5xwj8uMhH%2Fbsc09I5dqXs4AK6jbxQ9lbPIFFYjvnqpY%2BJKjGjebaOb3zksB6T59dOaWChahk6DZmFnIiKtwUDkJEmXYF16adxuJP3fHTHzzc%2B2h3zCfGnx3bIjS%2BQ5W9pGhRDf38z31t5uxxOXy9%2BDTLZvFIliappOMtCDvTjFSofpgJbOCyH%2FqOoHWXlUyFl7402zIRK5lkx4fIaJOXp0ddRL17U22O%2B%2FKAkIR3yjpybzVvo0UmiCypzcnezCeRBxMG0NIZMNbq033iBhsXpkCLlkGsxlRFrJyhVDuQ1WZtL%2FRjLwfVeqzSItjC%2BjYxqYUwB3HuBjl2E1aL80Taxo4CJHF2q077Uw3ZulvQY6pgHygNySVc85ks09VThqOZtZuCykKSnwVBhT6dVrwpELLAeBM5Ml6rZy7UaA8NtLmPLGNfyCS1tyAAItd%2FpZ%2F7eTtSVwFy6OfFSSrDCSra4o5fNKg71tipdn6jvm%2FWLYaA3PgIdnG0vdDVEx3ekSlP80Lj61TFEOe8uvZb3Zt1GD3PJcDD9IflfsxdVnpL2mNUJo9lC4rym09k0g445QTqbVQijBpwyX&X-Amz-Signature=e47cc201fdef11b409f5af5d099a414635cf514bb51c55afe8cca3b4aca51cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5G6OZ5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfHuc90iS%2BEeFwIN8qOezJERqQA1rCO3LSABfQiqTfyAiAsHSX7j2z5fTdoHfGL3tiF6BZYvW%2FcbFdw6WDhcZJybSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNLNgpQpEH%2Fc7dvFmKtwDJgGYXINR%2FDRUnIADyf1%2FucHym1z%2BuXN53FdUfqn3f2n%2B8pgKf3rBPu9IA9Z00hKlEvuSNWI7u2OxNHwLSvS7gfU8iE8Aie8iHo5nPQExSLt%2BHKwqw%2ByTKj5bhEZ90I1c65i4NsO56lJzAQtX7BuXlJAOMhZNQ%2FYYDqTsUhXzZIBnUC3J%2BS6d1vIhn5KrF6S5f%2BMDaW7Kt7dHUGmGM2an5qhzgjoMT%2FoGBf87763EoPnWeIpuaNB7trXpj6DcmrNcvwwSHqMwI2NZxkVcDx7gjj%2BvTz5xwj8uMhH%2Fbsc09I5dqXs4AK6jbxQ9lbPIFFYjvnqpY%2BJKjGjebaOb3zksB6T59dOaWChahk6DZmFnIiKtwUDkJEmXYF16adxuJP3fHTHzzc%2B2h3zCfGnx3bIjS%2BQ5W9pGhRDf38z31t5uxxOXy9%2BDTLZvFIliappOMtCDvTjFSofpgJbOCyH%2FqOoHWXlUyFl7402zIRK5lkx4fIaJOXp0ddRL17U22O%2B%2FKAkIR3yjpybzVvo0UmiCypzcnezCeRBxMG0NIZMNbq033iBhsXpkCLlkGsxlRFrJyhVDuQ1WZtL%2FRjLwfVeqzSItjC%2BjYxqYUwB3HuBjl2E1aL80Taxo4CJHF2q077Uw3ZulvQY6pgHygNySVc85ks09VThqOZtZuCykKSnwVBhT6dVrwpELLAeBM5Ml6rZy7UaA8NtLmPLGNfyCS1tyAAItd%2FpZ%2F7eTtSVwFy6OfFSSrDCSra4o5fNKg71tipdn6jvm%2FWLYaA3PgIdnG0vdDVEx3ekSlP80Lj61TFEOe8uvZb3Zt1GD3PJcDD9IflfsxdVnpL2mNUJo9lC4rym09k0g445QTqbVQijBpwyX&X-Amz-Signature=1bb5a554288c3dc00f8d407286758444bc9f9db97262e75ca10992370d581c32&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5G6OZ5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfHuc90iS%2BEeFwIN8qOezJERqQA1rCO3LSABfQiqTfyAiAsHSX7j2z5fTdoHfGL3tiF6BZYvW%2FcbFdw6WDhcZJybSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNLNgpQpEH%2Fc7dvFmKtwDJgGYXINR%2FDRUnIADyf1%2FucHym1z%2BuXN53FdUfqn3f2n%2B8pgKf3rBPu9IA9Z00hKlEvuSNWI7u2OxNHwLSvS7gfU8iE8Aie8iHo5nPQExSLt%2BHKwqw%2ByTKj5bhEZ90I1c65i4NsO56lJzAQtX7BuXlJAOMhZNQ%2FYYDqTsUhXzZIBnUC3J%2BS6d1vIhn5KrF6S5f%2BMDaW7Kt7dHUGmGM2an5qhzgjoMT%2FoGBf87763EoPnWeIpuaNB7trXpj6DcmrNcvwwSHqMwI2NZxkVcDx7gjj%2BvTz5xwj8uMhH%2Fbsc09I5dqXs4AK6jbxQ9lbPIFFYjvnqpY%2BJKjGjebaOb3zksB6T59dOaWChahk6DZmFnIiKtwUDkJEmXYF16adxuJP3fHTHzzc%2B2h3zCfGnx3bIjS%2BQ5W9pGhRDf38z31t5uxxOXy9%2BDTLZvFIliappOMtCDvTjFSofpgJbOCyH%2FqOoHWXlUyFl7402zIRK5lkx4fIaJOXp0ddRL17U22O%2B%2FKAkIR3yjpybzVvo0UmiCypzcnezCeRBxMG0NIZMNbq033iBhsXpkCLlkGsxlRFrJyhVDuQ1WZtL%2FRjLwfVeqzSItjC%2BjYxqYUwB3HuBjl2E1aL80Taxo4CJHF2q077Uw3ZulvQY6pgHygNySVc85ks09VThqOZtZuCykKSnwVBhT6dVrwpELLAeBM5Ml6rZy7UaA8NtLmPLGNfyCS1tyAAItd%2FpZ%2F7eTtSVwFy6OfFSSrDCSra4o5fNKg71tipdn6jvm%2FWLYaA3PgIdnG0vdDVEx3ekSlP80Lj61TFEOe8uvZb3Zt1GD3PJcDD9IflfsxdVnpL2mNUJo9lC4rym09k0g445QTqbVQijBpwyX&X-Amz-Signature=357ae98145416e33d9e6cc000d727b257770431ae98ba57c4937d47dd038a091&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5G6OZ5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfHuc90iS%2BEeFwIN8qOezJERqQA1rCO3LSABfQiqTfyAiAsHSX7j2z5fTdoHfGL3tiF6BZYvW%2FcbFdw6WDhcZJybSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNLNgpQpEH%2Fc7dvFmKtwDJgGYXINR%2FDRUnIADyf1%2FucHym1z%2BuXN53FdUfqn3f2n%2B8pgKf3rBPu9IA9Z00hKlEvuSNWI7u2OxNHwLSvS7gfU8iE8Aie8iHo5nPQExSLt%2BHKwqw%2ByTKj5bhEZ90I1c65i4NsO56lJzAQtX7BuXlJAOMhZNQ%2FYYDqTsUhXzZIBnUC3J%2BS6d1vIhn5KrF6S5f%2BMDaW7Kt7dHUGmGM2an5qhzgjoMT%2FoGBf87763EoPnWeIpuaNB7trXpj6DcmrNcvwwSHqMwI2NZxkVcDx7gjj%2BvTz5xwj8uMhH%2Fbsc09I5dqXs4AK6jbxQ9lbPIFFYjvnqpY%2BJKjGjebaOb3zksB6T59dOaWChahk6DZmFnIiKtwUDkJEmXYF16adxuJP3fHTHzzc%2B2h3zCfGnx3bIjS%2BQ5W9pGhRDf38z31t5uxxOXy9%2BDTLZvFIliappOMtCDvTjFSofpgJbOCyH%2FqOoHWXlUyFl7402zIRK5lkx4fIaJOXp0ddRL17U22O%2B%2FKAkIR3yjpybzVvo0UmiCypzcnezCeRBxMG0NIZMNbq033iBhsXpkCLlkGsxlRFrJyhVDuQ1WZtL%2FRjLwfVeqzSItjC%2BjYxqYUwB3HuBjl2E1aL80Taxo4CJHF2q077Uw3ZulvQY6pgHygNySVc85ks09VThqOZtZuCykKSnwVBhT6dVrwpELLAeBM5Ml6rZy7UaA8NtLmPLGNfyCS1tyAAItd%2FpZ%2F7eTtSVwFy6OfFSSrDCSra4o5fNKg71tipdn6jvm%2FWLYaA3PgIdnG0vdDVEx3ekSlP80Lj61TFEOe8uvZb3Zt1GD3PJcDD9IflfsxdVnpL2mNUJo9lC4rym09k0g445QTqbVQijBpwyX&X-Amz-Signature=284178a77149b9f401b8081b7339c141d0d9fc4cbeb526b9ba54fecc315ffeeb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
