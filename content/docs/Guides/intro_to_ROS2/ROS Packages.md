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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMDN75H%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1Z7H9DAJsKkS1p%2Bj5EIpX71awXRs2M7y8yp3EPuW2WAiAo%2FeIFAPUMAXhg%2BH8CM5ChAU1mZtdgC5ST2BBJvE9j1iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjadpfHsegFAkNwA7KtwDDfRTWdEcX9%2BrNsxIDE8LvPXvhP6JZyaxXQEifrRjvgzdbVCaAjrado7hyOVt62h7pk6jWWPf%2FkbwaYSsOq0ll5Inadyv76WU6DyWuvAkhl17Yrn9QbJvVM5%2Fr6DPaw8zbGmM6giueeZaDRpmb7rSB7h0OAZkXCaq0RzQfEklvlHzhaiAtOfd8OHvo%2FBcRARmPfYdNCPPsSDhUnf8mtVtoCy2JvYEbCNQF%2F9IAKPKK5ErETh%2FIU%2Fz%2BxtsgesAe%2Frv%2FGtQIGhRPNpCz4dYP%2FcKsn3MKCQzJInrxXMRIqIC6pXuuD%2FisQjMQLzaznOr6bE0acQukWAt01EjRqwUvmHAkrJbAHkA74Sq%2FxodnmmNf1mcRaBVt%2F42rdRUWGMCFFwWZNirvl9GKiwwEkJkd3GWgfOEcrVO2XZiQO0gBbxsEPkRCNLPly7GAvZXi2U9ZmtHe1lw%2BqcOsYyt1R84BZzr73a%2B0h2PcmnkFn0xl4utpNuVhQhSXF7vAwZadaVEzqe1D1ss2zb9GuCeAebKnqtlFZI2FXxJ8fNf8xfO7KFLZY0SsjAhdTrOZ1YEEF%2BdFRULT2xdBVIhnqxWHjyGo6TuogyS9sVg05vEgtNHQbct2AVd4yWVAWmWpPdHCcEwrY2EwwY6pgF4N71%2BPhIloi4jWNmlDdMzUZ89w6jXVZeOTECbYj%2BX3lQmLENVo2CRDM5fW5KJVy%2B8Hy7XgJCdz9rUx7uU3qCva6m2Kjf24A5aQi0jdMLkA%2BMYQosWy6HDnAfFbXMasotAdnjfBe94K9fFrdDTYIufrsoMTljuvqJmt8vpyda1hE0cQ8qVp6xx8LyY83v92hrx9yAK8tB9HsRqdIHGVgFTxXGXN54u&X-Amz-Signature=6eac75400bf2b39ba9284e6a386e45116f6eacd53dd2197e895f8c69619b045a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMDN75H%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1Z7H9DAJsKkS1p%2Bj5EIpX71awXRs2M7y8yp3EPuW2WAiAo%2FeIFAPUMAXhg%2BH8CM5ChAU1mZtdgC5ST2BBJvE9j1iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjadpfHsegFAkNwA7KtwDDfRTWdEcX9%2BrNsxIDE8LvPXvhP6JZyaxXQEifrRjvgzdbVCaAjrado7hyOVt62h7pk6jWWPf%2FkbwaYSsOq0ll5Inadyv76WU6DyWuvAkhl17Yrn9QbJvVM5%2Fr6DPaw8zbGmM6giueeZaDRpmb7rSB7h0OAZkXCaq0RzQfEklvlHzhaiAtOfd8OHvo%2FBcRARmPfYdNCPPsSDhUnf8mtVtoCy2JvYEbCNQF%2F9IAKPKK5ErETh%2FIU%2Fz%2BxtsgesAe%2Frv%2FGtQIGhRPNpCz4dYP%2FcKsn3MKCQzJInrxXMRIqIC6pXuuD%2FisQjMQLzaznOr6bE0acQukWAt01EjRqwUvmHAkrJbAHkA74Sq%2FxodnmmNf1mcRaBVt%2F42rdRUWGMCFFwWZNirvl9GKiwwEkJkd3GWgfOEcrVO2XZiQO0gBbxsEPkRCNLPly7GAvZXi2U9ZmtHe1lw%2BqcOsYyt1R84BZzr73a%2B0h2PcmnkFn0xl4utpNuVhQhSXF7vAwZadaVEzqe1D1ss2zb9GuCeAebKnqtlFZI2FXxJ8fNf8xfO7KFLZY0SsjAhdTrOZ1YEEF%2BdFRULT2xdBVIhnqxWHjyGo6TuogyS9sVg05vEgtNHQbct2AVd4yWVAWmWpPdHCcEwrY2EwwY6pgF4N71%2BPhIloi4jWNmlDdMzUZ89w6jXVZeOTECbYj%2BX3lQmLENVo2CRDM5fW5KJVy%2B8Hy7XgJCdz9rUx7uU3qCva6m2Kjf24A5aQi0jdMLkA%2BMYQosWy6HDnAfFbXMasotAdnjfBe94K9fFrdDTYIufrsoMTljuvqJmt8vpyda1hE0cQ8qVp6xx8LyY83v92hrx9yAK8tB9HsRqdIHGVgFTxXGXN54u&X-Amz-Signature=246d57398d44f85b593432142a357860d2d2a6e49d84059c194d134066ca476b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMDN75H%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1Z7H9DAJsKkS1p%2Bj5EIpX71awXRs2M7y8yp3EPuW2WAiAo%2FeIFAPUMAXhg%2BH8CM5ChAU1mZtdgC5ST2BBJvE9j1iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjadpfHsegFAkNwA7KtwDDfRTWdEcX9%2BrNsxIDE8LvPXvhP6JZyaxXQEifrRjvgzdbVCaAjrado7hyOVt62h7pk6jWWPf%2FkbwaYSsOq0ll5Inadyv76WU6DyWuvAkhl17Yrn9QbJvVM5%2Fr6DPaw8zbGmM6giueeZaDRpmb7rSB7h0OAZkXCaq0RzQfEklvlHzhaiAtOfd8OHvo%2FBcRARmPfYdNCPPsSDhUnf8mtVtoCy2JvYEbCNQF%2F9IAKPKK5ErETh%2FIU%2Fz%2BxtsgesAe%2Frv%2FGtQIGhRPNpCz4dYP%2FcKsn3MKCQzJInrxXMRIqIC6pXuuD%2FisQjMQLzaznOr6bE0acQukWAt01EjRqwUvmHAkrJbAHkA74Sq%2FxodnmmNf1mcRaBVt%2F42rdRUWGMCFFwWZNirvl9GKiwwEkJkd3GWgfOEcrVO2XZiQO0gBbxsEPkRCNLPly7GAvZXi2U9ZmtHe1lw%2BqcOsYyt1R84BZzr73a%2B0h2PcmnkFn0xl4utpNuVhQhSXF7vAwZadaVEzqe1D1ss2zb9GuCeAebKnqtlFZI2FXxJ8fNf8xfO7KFLZY0SsjAhdTrOZ1YEEF%2BdFRULT2xdBVIhnqxWHjyGo6TuogyS9sVg05vEgtNHQbct2AVd4yWVAWmWpPdHCcEwrY2EwwY6pgF4N71%2BPhIloi4jWNmlDdMzUZ89w6jXVZeOTECbYj%2BX3lQmLENVo2CRDM5fW5KJVy%2B8Hy7XgJCdz9rUx7uU3qCva6m2Kjf24A5aQi0jdMLkA%2BMYQosWy6HDnAfFbXMasotAdnjfBe94K9fFrdDTYIufrsoMTljuvqJmt8vpyda1hE0cQ8qVp6xx8LyY83v92hrx9yAK8tB9HsRqdIHGVgFTxXGXN54u&X-Amz-Signature=fe140408311d0d06347b92d53c20f4ef8b4293e9e11fc44dea5ec5494a3c2df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMDN75H%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1Z7H9DAJsKkS1p%2Bj5EIpX71awXRs2M7y8yp3EPuW2WAiAo%2FeIFAPUMAXhg%2BH8CM5ChAU1mZtdgC5ST2BBJvE9j1iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjadpfHsegFAkNwA7KtwDDfRTWdEcX9%2BrNsxIDE8LvPXvhP6JZyaxXQEifrRjvgzdbVCaAjrado7hyOVt62h7pk6jWWPf%2FkbwaYSsOq0ll5Inadyv76WU6DyWuvAkhl17Yrn9QbJvVM5%2Fr6DPaw8zbGmM6giueeZaDRpmb7rSB7h0OAZkXCaq0RzQfEklvlHzhaiAtOfd8OHvo%2FBcRARmPfYdNCPPsSDhUnf8mtVtoCy2JvYEbCNQF%2F9IAKPKK5ErETh%2FIU%2Fz%2BxtsgesAe%2Frv%2FGtQIGhRPNpCz4dYP%2FcKsn3MKCQzJInrxXMRIqIC6pXuuD%2FisQjMQLzaznOr6bE0acQukWAt01EjRqwUvmHAkrJbAHkA74Sq%2FxodnmmNf1mcRaBVt%2F42rdRUWGMCFFwWZNirvl9GKiwwEkJkd3GWgfOEcrVO2XZiQO0gBbxsEPkRCNLPly7GAvZXi2U9ZmtHe1lw%2BqcOsYyt1R84BZzr73a%2B0h2PcmnkFn0xl4utpNuVhQhSXF7vAwZadaVEzqe1D1ss2zb9GuCeAebKnqtlFZI2FXxJ8fNf8xfO7KFLZY0SsjAhdTrOZ1YEEF%2BdFRULT2xdBVIhnqxWHjyGo6TuogyS9sVg05vEgtNHQbct2AVd4yWVAWmWpPdHCcEwrY2EwwY6pgF4N71%2BPhIloi4jWNmlDdMzUZ89w6jXVZeOTECbYj%2BX3lQmLENVo2CRDM5fW5KJVy%2B8Hy7XgJCdz9rUx7uU3qCva6m2Kjf24A5aQi0jdMLkA%2BMYQosWy6HDnAfFbXMasotAdnjfBe94K9fFrdDTYIufrsoMTljuvqJmt8vpyda1hE0cQ8qVp6xx8LyY83v92hrx9yAK8tB9HsRqdIHGVgFTxXGXN54u&X-Amz-Signature=347f82e0bb5670ecb3531cb672aadc7a5510b85fac9eac312aba948a4c10fcdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMDN75H%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1Z7H9DAJsKkS1p%2Bj5EIpX71awXRs2M7y8yp3EPuW2WAiAo%2FeIFAPUMAXhg%2BH8CM5ChAU1mZtdgC5ST2BBJvE9j1iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjadpfHsegFAkNwA7KtwDDfRTWdEcX9%2BrNsxIDE8LvPXvhP6JZyaxXQEifrRjvgzdbVCaAjrado7hyOVt62h7pk6jWWPf%2FkbwaYSsOq0ll5Inadyv76WU6DyWuvAkhl17Yrn9QbJvVM5%2Fr6DPaw8zbGmM6giueeZaDRpmb7rSB7h0OAZkXCaq0RzQfEklvlHzhaiAtOfd8OHvo%2FBcRARmPfYdNCPPsSDhUnf8mtVtoCy2JvYEbCNQF%2F9IAKPKK5ErETh%2FIU%2Fz%2BxtsgesAe%2Frv%2FGtQIGhRPNpCz4dYP%2FcKsn3MKCQzJInrxXMRIqIC6pXuuD%2FisQjMQLzaznOr6bE0acQukWAt01EjRqwUvmHAkrJbAHkA74Sq%2FxodnmmNf1mcRaBVt%2F42rdRUWGMCFFwWZNirvl9GKiwwEkJkd3GWgfOEcrVO2XZiQO0gBbxsEPkRCNLPly7GAvZXi2U9ZmtHe1lw%2BqcOsYyt1R84BZzr73a%2B0h2PcmnkFn0xl4utpNuVhQhSXF7vAwZadaVEzqe1D1ss2zb9GuCeAebKnqtlFZI2FXxJ8fNf8xfO7KFLZY0SsjAhdTrOZ1YEEF%2BdFRULT2xdBVIhnqxWHjyGo6TuogyS9sVg05vEgtNHQbct2AVd4yWVAWmWpPdHCcEwrY2EwwY6pgF4N71%2BPhIloi4jWNmlDdMzUZ89w6jXVZeOTECbYj%2BX3lQmLENVo2CRDM5fW5KJVy%2B8Hy7XgJCdz9rUx7uU3qCva6m2Kjf24A5aQi0jdMLkA%2BMYQosWy6HDnAfFbXMasotAdnjfBe94K9fFrdDTYIufrsoMTljuvqJmt8vpyda1hE0cQ8qVp6xx8LyY83v92hrx9yAK8tB9HsRqdIHGVgFTxXGXN54u&X-Amz-Signature=19c7b71d8c2eb887d5fbfc5b9cfd808b1d310c4691e43c508248f73220d4cff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMDN75H%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1Z7H9DAJsKkS1p%2Bj5EIpX71awXRs2M7y8yp3EPuW2WAiAo%2FeIFAPUMAXhg%2BH8CM5ChAU1mZtdgC5ST2BBJvE9j1iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjadpfHsegFAkNwA7KtwDDfRTWdEcX9%2BrNsxIDE8LvPXvhP6JZyaxXQEifrRjvgzdbVCaAjrado7hyOVt62h7pk6jWWPf%2FkbwaYSsOq0ll5Inadyv76WU6DyWuvAkhl17Yrn9QbJvVM5%2Fr6DPaw8zbGmM6giueeZaDRpmb7rSB7h0OAZkXCaq0RzQfEklvlHzhaiAtOfd8OHvo%2FBcRARmPfYdNCPPsSDhUnf8mtVtoCy2JvYEbCNQF%2F9IAKPKK5ErETh%2FIU%2Fz%2BxtsgesAe%2Frv%2FGtQIGhRPNpCz4dYP%2FcKsn3MKCQzJInrxXMRIqIC6pXuuD%2FisQjMQLzaznOr6bE0acQukWAt01EjRqwUvmHAkrJbAHkA74Sq%2FxodnmmNf1mcRaBVt%2F42rdRUWGMCFFwWZNirvl9GKiwwEkJkd3GWgfOEcrVO2XZiQO0gBbxsEPkRCNLPly7GAvZXi2U9ZmtHe1lw%2BqcOsYyt1R84BZzr73a%2B0h2PcmnkFn0xl4utpNuVhQhSXF7vAwZadaVEzqe1D1ss2zb9GuCeAebKnqtlFZI2FXxJ8fNf8xfO7KFLZY0SsjAhdTrOZ1YEEF%2BdFRULT2xdBVIhnqxWHjyGo6TuogyS9sVg05vEgtNHQbct2AVd4yWVAWmWpPdHCcEwrY2EwwY6pgF4N71%2BPhIloi4jWNmlDdMzUZ89w6jXVZeOTECbYj%2BX3lQmLENVo2CRDM5fW5KJVy%2B8Hy7XgJCdz9rUx7uU3qCva6m2Kjf24A5aQi0jdMLkA%2BMYQosWy6HDnAfFbXMasotAdnjfBe94K9fFrdDTYIufrsoMTljuvqJmt8vpyda1hE0cQ8qVp6xx8LyY83v92hrx9yAK8tB9HsRqdIHGVgFTxXGXN54u&X-Amz-Signature=9c988060c19d40c8571fd463db8e391bfe999db0740c7cd642c4170a7e842298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMDN75H%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1Z7H9DAJsKkS1p%2Bj5EIpX71awXRs2M7y8yp3EPuW2WAiAo%2FeIFAPUMAXhg%2BH8CM5ChAU1mZtdgC5ST2BBJvE9j1iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjadpfHsegFAkNwA7KtwDDfRTWdEcX9%2BrNsxIDE8LvPXvhP6JZyaxXQEifrRjvgzdbVCaAjrado7hyOVt62h7pk6jWWPf%2FkbwaYSsOq0ll5Inadyv76WU6DyWuvAkhl17Yrn9QbJvVM5%2Fr6DPaw8zbGmM6giueeZaDRpmb7rSB7h0OAZkXCaq0RzQfEklvlHzhaiAtOfd8OHvo%2FBcRARmPfYdNCPPsSDhUnf8mtVtoCy2JvYEbCNQF%2F9IAKPKK5ErETh%2FIU%2Fz%2BxtsgesAe%2Frv%2FGtQIGhRPNpCz4dYP%2FcKsn3MKCQzJInrxXMRIqIC6pXuuD%2FisQjMQLzaznOr6bE0acQukWAt01EjRqwUvmHAkrJbAHkA74Sq%2FxodnmmNf1mcRaBVt%2F42rdRUWGMCFFwWZNirvl9GKiwwEkJkd3GWgfOEcrVO2XZiQO0gBbxsEPkRCNLPly7GAvZXi2U9ZmtHe1lw%2BqcOsYyt1R84BZzr73a%2B0h2PcmnkFn0xl4utpNuVhQhSXF7vAwZadaVEzqe1D1ss2zb9GuCeAebKnqtlFZI2FXxJ8fNf8xfO7KFLZY0SsjAhdTrOZ1YEEF%2BdFRULT2xdBVIhnqxWHjyGo6TuogyS9sVg05vEgtNHQbct2AVd4yWVAWmWpPdHCcEwrY2EwwY6pgF4N71%2BPhIloi4jWNmlDdMzUZ89w6jXVZeOTECbYj%2BX3lQmLENVo2CRDM5fW5KJVy%2B8Hy7XgJCdz9rUx7uU3qCva6m2Kjf24A5aQi0jdMLkA%2BMYQosWy6HDnAfFbXMasotAdnjfBe94K9fFrdDTYIufrsoMTljuvqJmt8vpyda1hE0cQ8qVp6xx8LyY83v92hrx9yAK8tB9HsRqdIHGVgFTxXGXN54u&X-Amz-Signature=a74220d92c6d60c604cb36dc290d1eb41fbe01d95887cbac6bc4b98fe21769c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
