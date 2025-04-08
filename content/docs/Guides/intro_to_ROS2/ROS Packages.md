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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2NSVQQM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD2WZhGxRVgOVPoUksohnrQdExKPDWKQXX2NClSoj%2F21wIgbSO7%2BDQOuL509F09HRjhadCouO4wq1A7bv5fn0ArpCoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMJgHg4dsEjeCcqfHCrcA5woUBJheuZWbJ7Ve%2BH339RpKyj8XJUFZpt4%2FDSvbtod5LKZ2WuXia9K%2BI4xTKDXrh3RWyYbZwvtIIFTfS2CQTf2PMLRTeUnXKIUCpuubgXbq0PGO7tVnYeJr%2Fxk6EoRlQNshoi8Ls726TuEHaIkcOSGqfOTCaXFb9UyB%2FuoHjD%2F0kuRzOPfOWL%2B76mQVIzUrckJTlBKsHynNksqbr7a%2BmEsmLjnYBLFEbhytJ%2FxKc0NhRYOhxgVZx8iLyzdBSyct%2FEOQWC5JD9YHbf3qo6BwDtOyj3AZyFkxX7oYdZ4AREL82dPrzogQXgfDZs89%2BFhDXMkWExlxEREJ8On%2B4O%2Flaz6tJaP2cJcDCixPbgPl8ngDh5szXamc8YZ%2BQNIyX68kEIixmSjBtf1ZSNPELKgzbSFJ%2Brp%2B2PGe1yncZ3rsJsYGUda3A7LpeAzrhQmz0%2BBTXvroPS4aRgCiy8aK%2B1b7WqZBp48rf%2Bdmt6ncHj2wBZOC0pQOyplD8EZ17WF%2F3N8lK%2B72AjWrP7FoH379kj45wqSd6Fd7UaTjMtuaYQIz%2FhH8oSS%2FOQnsyAZxitALd%2FN41FsX%2BwbW9xvXQq7lfM8WKTT6OjgQmqvKD4s3XNvspZTJ3cC5p%2B9efffvxBSMJyL1r8GOqUBDxHzWO2mfSJLkhHeMKl7%2BI9gzWoz0kJIbY8hfhfhYTiW6l58R%2FzxkA511%2Bqo3FV%2Fi8eDxqxTBxSCk0vYijPaQ%2Byhfob0JOTTIaRIvc%2BMcWEJtfGgH2O0zzSlRR0XyCH3kv8lT%2BpG%2FqCRaP8a7V1yDeUdIQnIfAahVo%2BZyOZb0a9yf7sKzvjMMJ5Xw%2F6K%2FJybW89jNnfjzQPh9NA%2FRoTs0684ZssI&X-Amz-Signature=2fd200108074a753e53b15189b6e36467b468c994c0596f1d99acc8d3f02e969&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2NSVQQM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD2WZhGxRVgOVPoUksohnrQdExKPDWKQXX2NClSoj%2F21wIgbSO7%2BDQOuL509F09HRjhadCouO4wq1A7bv5fn0ArpCoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMJgHg4dsEjeCcqfHCrcA5woUBJheuZWbJ7Ve%2BH339RpKyj8XJUFZpt4%2FDSvbtod5LKZ2WuXia9K%2BI4xTKDXrh3RWyYbZwvtIIFTfS2CQTf2PMLRTeUnXKIUCpuubgXbq0PGO7tVnYeJr%2Fxk6EoRlQNshoi8Ls726TuEHaIkcOSGqfOTCaXFb9UyB%2FuoHjD%2F0kuRzOPfOWL%2B76mQVIzUrckJTlBKsHynNksqbr7a%2BmEsmLjnYBLFEbhytJ%2FxKc0NhRYOhxgVZx8iLyzdBSyct%2FEOQWC5JD9YHbf3qo6BwDtOyj3AZyFkxX7oYdZ4AREL82dPrzogQXgfDZs89%2BFhDXMkWExlxEREJ8On%2B4O%2Flaz6tJaP2cJcDCixPbgPl8ngDh5szXamc8YZ%2BQNIyX68kEIixmSjBtf1ZSNPELKgzbSFJ%2Brp%2B2PGe1yncZ3rsJsYGUda3A7LpeAzrhQmz0%2BBTXvroPS4aRgCiy8aK%2B1b7WqZBp48rf%2Bdmt6ncHj2wBZOC0pQOyplD8EZ17WF%2F3N8lK%2B72AjWrP7FoH379kj45wqSd6Fd7UaTjMtuaYQIz%2FhH8oSS%2FOQnsyAZxitALd%2FN41FsX%2BwbW9xvXQq7lfM8WKTT6OjgQmqvKD4s3XNvspZTJ3cC5p%2B9efffvxBSMJyL1r8GOqUBDxHzWO2mfSJLkhHeMKl7%2BI9gzWoz0kJIbY8hfhfhYTiW6l58R%2FzxkA511%2Bqo3FV%2Fi8eDxqxTBxSCk0vYijPaQ%2Byhfob0JOTTIaRIvc%2BMcWEJtfGgH2O0zzSlRR0XyCH3kv8lT%2BpG%2FqCRaP8a7V1yDeUdIQnIfAahVo%2BZyOZb0a9yf7sKzvjMMJ5Xw%2F6K%2FJybW89jNnfjzQPh9NA%2FRoTs0684ZssI&X-Amz-Signature=bf2d853cc842cc3b11dffd1618aff53d8e0347422a2bfdcdd927ca001929f429&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2NSVQQM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD2WZhGxRVgOVPoUksohnrQdExKPDWKQXX2NClSoj%2F21wIgbSO7%2BDQOuL509F09HRjhadCouO4wq1A7bv5fn0ArpCoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMJgHg4dsEjeCcqfHCrcA5woUBJheuZWbJ7Ve%2BH339RpKyj8XJUFZpt4%2FDSvbtod5LKZ2WuXia9K%2BI4xTKDXrh3RWyYbZwvtIIFTfS2CQTf2PMLRTeUnXKIUCpuubgXbq0PGO7tVnYeJr%2Fxk6EoRlQNshoi8Ls726TuEHaIkcOSGqfOTCaXFb9UyB%2FuoHjD%2F0kuRzOPfOWL%2B76mQVIzUrckJTlBKsHynNksqbr7a%2BmEsmLjnYBLFEbhytJ%2FxKc0NhRYOhxgVZx8iLyzdBSyct%2FEOQWC5JD9YHbf3qo6BwDtOyj3AZyFkxX7oYdZ4AREL82dPrzogQXgfDZs89%2BFhDXMkWExlxEREJ8On%2B4O%2Flaz6tJaP2cJcDCixPbgPl8ngDh5szXamc8YZ%2BQNIyX68kEIixmSjBtf1ZSNPELKgzbSFJ%2Brp%2B2PGe1yncZ3rsJsYGUda3A7LpeAzrhQmz0%2BBTXvroPS4aRgCiy8aK%2B1b7WqZBp48rf%2Bdmt6ncHj2wBZOC0pQOyplD8EZ17WF%2F3N8lK%2B72AjWrP7FoH379kj45wqSd6Fd7UaTjMtuaYQIz%2FhH8oSS%2FOQnsyAZxitALd%2FN41FsX%2BwbW9xvXQq7lfM8WKTT6OjgQmqvKD4s3XNvspZTJ3cC5p%2B9efffvxBSMJyL1r8GOqUBDxHzWO2mfSJLkhHeMKl7%2BI9gzWoz0kJIbY8hfhfhYTiW6l58R%2FzxkA511%2Bqo3FV%2Fi8eDxqxTBxSCk0vYijPaQ%2Byhfob0JOTTIaRIvc%2BMcWEJtfGgH2O0zzSlRR0XyCH3kv8lT%2BpG%2FqCRaP8a7V1yDeUdIQnIfAahVo%2BZyOZb0a9yf7sKzvjMMJ5Xw%2F6K%2FJybW89jNnfjzQPh9NA%2FRoTs0684ZssI&X-Amz-Signature=c3a29ef58967af0daea30de35af8619e28dd8bc5e3349cfef9d5ce24379cc058&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2NSVQQM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD2WZhGxRVgOVPoUksohnrQdExKPDWKQXX2NClSoj%2F21wIgbSO7%2BDQOuL509F09HRjhadCouO4wq1A7bv5fn0ArpCoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMJgHg4dsEjeCcqfHCrcA5woUBJheuZWbJ7Ve%2BH339RpKyj8XJUFZpt4%2FDSvbtod5LKZ2WuXia9K%2BI4xTKDXrh3RWyYbZwvtIIFTfS2CQTf2PMLRTeUnXKIUCpuubgXbq0PGO7tVnYeJr%2Fxk6EoRlQNshoi8Ls726TuEHaIkcOSGqfOTCaXFb9UyB%2FuoHjD%2F0kuRzOPfOWL%2B76mQVIzUrckJTlBKsHynNksqbr7a%2BmEsmLjnYBLFEbhytJ%2FxKc0NhRYOhxgVZx8iLyzdBSyct%2FEOQWC5JD9YHbf3qo6BwDtOyj3AZyFkxX7oYdZ4AREL82dPrzogQXgfDZs89%2BFhDXMkWExlxEREJ8On%2B4O%2Flaz6tJaP2cJcDCixPbgPl8ngDh5szXamc8YZ%2BQNIyX68kEIixmSjBtf1ZSNPELKgzbSFJ%2Brp%2B2PGe1yncZ3rsJsYGUda3A7LpeAzrhQmz0%2BBTXvroPS4aRgCiy8aK%2B1b7WqZBp48rf%2Bdmt6ncHj2wBZOC0pQOyplD8EZ17WF%2F3N8lK%2B72AjWrP7FoH379kj45wqSd6Fd7UaTjMtuaYQIz%2FhH8oSS%2FOQnsyAZxitALd%2FN41FsX%2BwbW9xvXQq7lfM8WKTT6OjgQmqvKD4s3XNvspZTJ3cC5p%2B9efffvxBSMJyL1r8GOqUBDxHzWO2mfSJLkhHeMKl7%2BI9gzWoz0kJIbY8hfhfhYTiW6l58R%2FzxkA511%2Bqo3FV%2Fi8eDxqxTBxSCk0vYijPaQ%2Byhfob0JOTTIaRIvc%2BMcWEJtfGgH2O0zzSlRR0XyCH3kv8lT%2BpG%2FqCRaP8a7V1yDeUdIQnIfAahVo%2BZyOZb0a9yf7sKzvjMMJ5Xw%2F6K%2FJybW89jNnfjzQPh9NA%2FRoTs0684ZssI&X-Amz-Signature=058b0d1e9fb8e21e5458cb0728fe3b7edfe4f7bdd24240c61b41707632048727&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2NSVQQM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD2WZhGxRVgOVPoUksohnrQdExKPDWKQXX2NClSoj%2F21wIgbSO7%2BDQOuL509F09HRjhadCouO4wq1A7bv5fn0ArpCoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMJgHg4dsEjeCcqfHCrcA5woUBJheuZWbJ7Ve%2BH339RpKyj8XJUFZpt4%2FDSvbtod5LKZ2WuXia9K%2BI4xTKDXrh3RWyYbZwvtIIFTfS2CQTf2PMLRTeUnXKIUCpuubgXbq0PGO7tVnYeJr%2Fxk6EoRlQNshoi8Ls726TuEHaIkcOSGqfOTCaXFb9UyB%2FuoHjD%2F0kuRzOPfOWL%2B76mQVIzUrckJTlBKsHynNksqbr7a%2BmEsmLjnYBLFEbhytJ%2FxKc0NhRYOhxgVZx8iLyzdBSyct%2FEOQWC5JD9YHbf3qo6BwDtOyj3AZyFkxX7oYdZ4AREL82dPrzogQXgfDZs89%2BFhDXMkWExlxEREJ8On%2B4O%2Flaz6tJaP2cJcDCixPbgPl8ngDh5szXamc8YZ%2BQNIyX68kEIixmSjBtf1ZSNPELKgzbSFJ%2Brp%2B2PGe1yncZ3rsJsYGUda3A7LpeAzrhQmz0%2BBTXvroPS4aRgCiy8aK%2B1b7WqZBp48rf%2Bdmt6ncHj2wBZOC0pQOyplD8EZ17WF%2F3N8lK%2B72AjWrP7FoH379kj45wqSd6Fd7UaTjMtuaYQIz%2FhH8oSS%2FOQnsyAZxitALd%2FN41FsX%2BwbW9xvXQq7lfM8WKTT6OjgQmqvKD4s3XNvspZTJ3cC5p%2B9efffvxBSMJyL1r8GOqUBDxHzWO2mfSJLkhHeMKl7%2BI9gzWoz0kJIbY8hfhfhYTiW6l58R%2FzxkA511%2Bqo3FV%2Fi8eDxqxTBxSCk0vYijPaQ%2Byhfob0JOTTIaRIvc%2BMcWEJtfGgH2O0zzSlRR0XyCH3kv8lT%2BpG%2FqCRaP8a7V1yDeUdIQnIfAahVo%2BZyOZb0a9yf7sKzvjMMJ5Xw%2F6K%2FJybW89jNnfjzQPh9NA%2FRoTs0684ZssI&X-Amz-Signature=5ea2a9b045c2cb66828f25988d3efc6a73a63fb0ca9e220e0db61f04fad5d2cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2NSVQQM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD2WZhGxRVgOVPoUksohnrQdExKPDWKQXX2NClSoj%2F21wIgbSO7%2BDQOuL509F09HRjhadCouO4wq1A7bv5fn0ArpCoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMJgHg4dsEjeCcqfHCrcA5woUBJheuZWbJ7Ve%2BH339RpKyj8XJUFZpt4%2FDSvbtod5LKZ2WuXia9K%2BI4xTKDXrh3RWyYbZwvtIIFTfS2CQTf2PMLRTeUnXKIUCpuubgXbq0PGO7tVnYeJr%2Fxk6EoRlQNshoi8Ls726TuEHaIkcOSGqfOTCaXFb9UyB%2FuoHjD%2F0kuRzOPfOWL%2B76mQVIzUrckJTlBKsHynNksqbr7a%2BmEsmLjnYBLFEbhytJ%2FxKc0NhRYOhxgVZx8iLyzdBSyct%2FEOQWC5JD9YHbf3qo6BwDtOyj3AZyFkxX7oYdZ4AREL82dPrzogQXgfDZs89%2BFhDXMkWExlxEREJ8On%2B4O%2Flaz6tJaP2cJcDCixPbgPl8ngDh5szXamc8YZ%2BQNIyX68kEIixmSjBtf1ZSNPELKgzbSFJ%2Brp%2B2PGe1yncZ3rsJsYGUda3A7LpeAzrhQmz0%2BBTXvroPS4aRgCiy8aK%2B1b7WqZBp48rf%2Bdmt6ncHj2wBZOC0pQOyplD8EZ17WF%2F3N8lK%2B72AjWrP7FoH379kj45wqSd6Fd7UaTjMtuaYQIz%2FhH8oSS%2FOQnsyAZxitALd%2FN41FsX%2BwbW9xvXQq7lfM8WKTT6OjgQmqvKD4s3XNvspZTJ3cC5p%2B9efffvxBSMJyL1r8GOqUBDxHzWO2mfSJLkhHeMKl7%2BI9gzWoz0kJIbY8hfhfhYTiW6l58R%2FzxkA511%2Bqo3FV%2Fi8eDxqxTBxSCk0vYijPaQ%2Byhfob0JOTTIaRIvc%2BMcWEJtfGgH2O0zzSlRR0XyCH3kv8lT%2BpG%2FqCRaP8a7V1yDeUdIQnIfAahVo%2BZyOZb0a9yf7sKzvjMMJ5Xw%2F6K%2FJybW89jNnfjzQPh9NA%2FRoTs0684ZssI&X-Amz-Signature=cc2770384fe8649408ec54edd321b331814a8cf53fadf462ee8215002d7102b3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2NSVQQM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD2WZhGxRVgOVPoUksohnrQdExKPDWKQXX2NClSoj%2F21wIgbSO7%2BDQOuL509F09HRjhadCouO4wq1A7bv5fn0ArpCoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMJgHg4dsEjeCcqfHCrcA5woUBJheuZWbJ7Ve%2BH339RpKyj8XJUFZpt4%2FDSvbtod5LKZ2WuXia9K%2BI4xTKDXrh3RWyYbZwvtIIFTfS2CQTf2PMLRTeUnXKIUCpuubgXbq0PGO7tVnYeJr%2Fxk6EoRlQNshoi8Ls726TuEHaIkcOSGqfOTCaXFb9UyB%2FuoHjD%2F0kuRzOPfOWL%2B76mQVIzUrckJTlBKsHynNksqbr7a%2BmEsmLjnYBLFEbhytJ%2FxKc0NhRYOhxgVZx8iLyzdBSyct%2FEOQWC5JD9YHbf3qo6BwDtOyj3AZyFkxX7oYdZ4AREL82dPrzogQXgfDZs89%2BFhDXMkWExlxEREJ8On%2B4O%2Flaz6tJaP2cJcDCixPbgPl8ngDh5szXamc8YZ%2BQNIyX68kEIixmSjBtf1ZSNPELKgzbSFJ%2Brp%2B2PGe1yncZ3rsJsYGUda3A7LpeAzrhQmz0%2BBTXvroPS4aRgCiy8aK%2B1b7WqZBp48rf%2Bdmt6ncHj2wBZOC0pQOyplD8EZ17WF%2F3N8lK%2B72AjWrP7FoH379kj45wqSd6Fd7UaTjMtuaYQIz%2FhH8oSS%2FOQnsyAZxitALd%2FN41FsX%2BwbW9xvXQq7lfM8WKTT6OjgQmqvKD4s3XNvspZTJ3cC5p%2B9efffvxBSMJyL1r8GOqUBDxHzWO2mfSJLkhHeMKl7%2BI9gzWoz0kJIbY8hfhfhYTiW6l58R%2FzxkA511%2Bqo3FV%2Fi8eDxqxTBxSCk0vYijPaQ%2Byhfob0JOTTIaRIvc%2BMcWEJtfGgH2O0zzSlRR0XyCH3kv8lT%2BpG%2FqCRaP8a7V1yDeUdIQnIfAahVo%2BZyOZb0a9yf7sKzvjMMJ5Xw%2F6K%2FJybW89jNnfjzQPh9NA%2FRoTs0684ZssI&X-Amz-Signature=99b70ba845799e6c965897dca4ffc836a014a611c3f5a6c02c3b6061ebed6eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
