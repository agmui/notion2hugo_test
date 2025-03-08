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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TYJHF4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCzUuMnb%2FqaOXTeziDT%2Fk9tSz7F%2FJPeTVRcJQEZMoozFQIgDRtnHJtq%2BJ9u2ONCv1Qu3e%2F7LI1ADwJHg2hAmX95kQsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDqt8EN3nDoYoQ9jkCrcA%2BZr8EbhLXrrG53YimHSTtmxgfLyFE93sWjiZhgT8pqZiFqkjgeIbEYIXYoBNbDe26IzaGIEs8cZAN6SgITqs%2BBx9MyPsYImlBmUy%2B7CWddW3cqVrPCX0vvwuGqZbAlgSR%2F5vyOGKNwzK5nhxzxGZKAbbbrW4M2lK9a5D1xvJFx8hScqSESmNtVOAExo5e7BgkSVaE1H5IoPDq3Oh83tzTIb5tOOfo6BfqTtg%2F72bbBsPSPB4FpcYeDvvsi6STxdM0WiyZmKN%2FxLwW7IqvZuLMO2emwBtnlgGu9B2b0hnP7Cz4fYCPqceu50ZeUrYjSZ543gzi20YKwjUbGnvXO4tUi2qD5O5bmiLjA%2B3I5kQrm146df80Z3MX6GaTSxIg5NmXZfC5tidB5zgca%2BEc69IOVqPZiAl6bqUzrUSGBbUS%2BjuaGy1wnDfNzNNEVu%2BuU2KoP8STEHJLW6jsFi0pGo2%2FhH%2F4ez%2FXjeAjUNvCFJP4n7KSuFNXfKNUYn6n7H8XVoD0HMur1YVmuvkdoOIRj6vu%2Fu8qWmO5HNAI4KAthh5HZTii6QTHV5oxdLViUAa6%2B3ZplKbfdPZphoWESh4B5EtONXjT3oIY7eexJc9gYNBrwyXpZQbP7Cg%2BUFSP8kMLG9r74GOqUBSzZUCq%2FzXAjyPDTji77FcwYjfIaE9JzMZWhuyI7bTOEajDcimDYF0ktETYxf59IqHKC0UN9z%2F8G8KvabwcXOM4A%2B8ekFzzSnHF0PmPBBJ66P3yHIt9sSHnACTrmnmUBF2qWlLHTf8wlaTQumWdHhyAnGLcAI8ZyyD7scT0ewaXmy8wrY80eJjh0mB3iVpuHp8FfG5xSUEL0UB6OmlXONTZAPAzWr&X-Amz-Signature=f71fd76bcb841fb23ad4f7d37ca27801fae4aebe1d73a9c7895a8612efdb4699&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TYJHF4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCzUuMnb%2FqaOXTeziDT%2Fk9tSz7F%2FJPeTVRcJQEZMoozFQIgDRtnHJtq%2BJ9u2ONCv1Qu3e%2F7LI1ADwJHg2hAmX95kQsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDqt8EN3nDoYoQ9jkCrcA%2BZr8EbhLXrrG53YimHSTtmxgfLyFE93sWjiZhgT8pqZiFqkjgeIbEYIXYoBNbDe26IzaGIEs8cZAN6SgITqs%2BBx9MyPsYImlBmUy%2B7CWddW3cqVrPCX0vvwuGqZbAlgSR%2F5vyOGKNwzK5nhxzxGZKAbbbrW4M2lK9a5D1xvJFx8hScqSESmNtVOAExo5e7BgkSVaE1H5IoPDq3Oh83tzTIb5tOOfo6BfqTtg%2F72bbBsPSPB4FpcYeDvvsi6STxdM0WiyZmKN%2FxLwW7IqvZuLMO2emwBtnlgGu9B2b0hnP7Cz4fYCPqceu50ZeUrYjSZ543gzi20YKwjUbGnvXO4tUi2qD5O5bmiLjA%2B3I5kQrm146df80Z3MX6GaTSxIg5NmXZfC5tidB5zgca%2BEc69IOVqPZiAl6bqUzrUSGBbUS%2BjuaGy1wnDfNzNNEVu%2BuU2KoP8STEHJLW6jsFi0pGo2%2FhH%2F4ez%2FXjeAjUNvCFJP4n7KSuFNXfKNUYn6n7H8XVoD0HMur1YVmuvkdoOIRj6vu%2Fu8qWmO5HNAI4KAthh5HZTii6QTHV5oxdLViUAa6%2B3ZplKbfdPZphoWESh4B5EtONXjT3oIY7eexJc9gYNBrwyXpZQbP7Cg%2BUFSP8kMLG9r74GOqUBSzZUCq%2FzXAjyPDTji77FcwYjfIaE9JzMZWhuyI7bTOEajDcimDYF0ktETYxf59IqHKC0UN9z%2F8G8KvabwcXOM4A%2B8ekFzzSnHF0PmPBBJ66P3yHIt9sSHnACTrmnmUBF2qWlLHTf8wlaTQumWdHhyAnGLcAI8ZyyD7scT0ewaXmy8wrY80eJjh0mB3iVpuHp8FfG5xSUEL0UB6OmlXONTZAPAzWr&X-Amz-Signature=09de43613c536638789d1939285cabb56d7446dc4a918e6bac3b7993c0b43c45&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TYJHF4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCzUuMnb%2FqaOXTeziDT%2Fk9tSz7F%2FJPeTVRcJQEZMoozFQIgDRtnHJtq%2BJ9u2ONCv1Qu3e%2F7LI1ADwJHg2hAmX95kQsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDqt8EN3nDoYoQ9jkCrcA%2BZr8EbhLXrrG53YimHSTtmxgfLyFE93sWjiZhgT8pqZiFqkjgeIbEYIXYoBNbDe26IzaGIEs8cZAN6SgITqs%2BBx9MyPsYImlBmUy%2B7CWddW3cqVrPCX0vvwuGqZbAlgSR%2F5vyOGKNwzK5nhxzxGZKAbbbrW4M2lK9a5D1xvJFx8hScqSESmNtVOAExo5e7BgkSVaE1H5IoPDq3Oh83tzTIb5tOOfo6BfqTtg%2F72bbBsPSPB4FpcYeDvvsi6STxdM0WiyZmKN%2FxLwW7IqvZuLMO2emwBtnlgGu9B2b0hnP7Cz4fYCPqceu50ZeUrYjSZ543gzi20YKwjUbGnvXO4tUi2qD5O5bmiLjA%2B3I5kQrm146df80Z3MX6GaTSxIg5NmXZfC5tidB5zgca%2BEc69IOVqPZiAl6bqUzrUSGBbUS%2BjuaGy1wnDfNzNNEVu%2BuU2KoP8STEHJLW6jsFi0pGo2%2FhH%2F4ez%2FXjeAjUNvCFJP4n7KSuFNXfKNUYn6n7H8XVoD0HMur1YVmuvkdoOIRj6vu%2Fu8qWmO5HNAI4KAthh5HZTii6QTHV5oxdLViUAa6%2B3ZplKbfdPZphoWESh4B5EtONXjT3oIY7eexJc9gYNBrwyXpZQbP7Cg%2BUFSP8kMLG9r74GOqUBSzZUCq%2FzXAjyPDTji77FcwYjfIaE9JzMZWhuyI7bTOEajDcimDYF0ktETYxf59IqHKC0UN9z%2F8G8KvabwcXOM4A%2B8ekFzzSnHF0PmPBBJ66P3yHIt9sSHnACTrmnmUBF2qWlLHTf8wlaTQumWdHhyAnGLcAI8ZyyD7scT0ewaXmy8wrY80eJjh0mB3iVpuHp8FfG5xSUEL0UB6OmlXONTZAPAzWr&X-Amz-Signature=f0735e264474325e576fab80aeb45bb842d8052116ade135fcd9ed0df9c98154&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TYJHF4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCzUuMnb%2FqaOXTeziDT%2Fk9tSz7F%2FJPeTVRcJQEZMoozFQIgDRtnHJtq%2BJ9u2ONCv1Qu3e%2F7LI1ADwJHg2hAmX95kQsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDqt8EN3nDoYoQ9jkCrcA%2BZr8EbhLXrrG53YimHSTtmxgfLyFE93sWjiZhgT8pqZiFqkjgeIbEYIXYoBNbDe26IzaGIEs8cZAN6SgITqs%2BBx9MyPsYImlBmUy%2B7CWddW3cqVrPCX0vvwuGqZbAlgSR%2F5vyOGKNwzK5nhxzxGZKAbbbrW4M2lK9a5D1xvJFx8hScqSESmNtVOAExo5e7BgkSVaE1H5IoPDq3Oh83tzTIb5tOOfo6BfqTtg%2F72bbBsPSPB4FpcYeDvvsi6STxdM0WiyZmKN%2FxLwW7IqvZuLMO2emwBtnlgGu9B2b0hnP7Cz4fYCPqceu50ZeUrYjSZ543gzi20YKwjUbGnvXO4tUi2qD5O5bmiLjA%2B3I5kQrm146df80Z3MX6GaTSxIg5NmXZfC5tidB5zgca%2BEc69IOVqPZiAl6bqUzrUSGBbUS%2BjuaGy1wnDfNzNNEVu%2BuU2KoP8STEHJLW6jsFi0pGo2%2FhH%2F4ez%2FXjeAjUNvCFJP4n7KSuFNXfKNUYn6n7H8XVoD0HMur1YVmuvkdoOIRj6vu%2Fu8qWmO5HNAI4KAthh5HZTii6QTHV5oxdLViUAa6%2B3ZplKbfdPZphoWESh4B5EtONXjT3oIY7eexJc9gYNBrwyXpZQbP7Cg%2BUFSP8kMLG9r74GOqUBSzZUCq%2FzXAjyPDTji77FcwYjfIaE9JzMZWhuyI7bTOEajDcimDYF0ktETYxf59IqHKC0UN9z%2F8G8KvabwcXOM4A%2B8ekFzzSnHF0PmPBBJ66P3yHIt9sSHnACTrmnmUBF2qWlLHTf8wlaTQumWdHhyAnGLcAI8ZyyD7scT0ewaXmy8wrY80eJjh0mB3iVpuHp8FfG5xSUEL0UB6OmlXONTZAPAzWr&X-Amz-Signature=6e44a59d71fa7d602f2d914836f5d2e32df8f93cbc36461c855d6fa574ac820d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TYJHF4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCzUuMnb%2FqaOXTeziDT%2Fk9tSz7F%2FJPeTVRcJQEZMoozFQIgDRtnHJtq%2BJ9u2ONCv1Qu3e%2F7LI1ADwJHg2hAmX95kQsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDqt8EN3nDoYoQ9jkCrcA%2BZr8EbhLXrrG53YimHSTtmxgfLyFE93sWjiZhgT8pqZiFqkjgeIbEYIXYoBNbDe26IzaGIEs8cZAN6SgITqs%2BBx9MyPsYImlBmUy%2B7CWddW3cqVrPCX0vvwuGqZbAlgSR%2F5vyOGKNwzK5nhxzxGZKAbbbrW4M2lK9a5D1xvJFx8hScqSESmNtVOAExo5e7BgkSVaE1H5IoPDq3Oh83tzTIb5tOOfo6BfqTtg%2F72bbBsPSPB4FpcYeDvvsi6STxdM0WiyZmKN%2FxLwW7IqvZuLMO2emwBtnlgGu9B2b0hnP7Cz4fYCPqceu50ZeUrYjSZ543gzi20YKwjUbGnvXO4tUi2qD5O5bmiLjA%2B3I5kQrm146df80Z3MX6GaTSxIg5NmXZfC5tidB5zgca%2BEc69IOVqPZiAl6bqUzrUSGBbUS%2BjuaGy1wnDfNzNNEVu%2BuU2KoP8STEHJLW6jsFi0pGo2%2FhH%2F4ez%2FXjeAjUNvCFJP4n7KSuFNXfKNUYn6n7H8XVoD0HMur1YVmuvkdoOIRj6vu%2Fu8qWmO5HNAI4KAthh5HZTii6QTHV5oxdLViUAa6%2B3ZplKbfdPZphoWESh4B5EtONXjT3oIY7eexJc9gYNBrwyXpZQbP7Cg%2BUFSP8kMLG9r74GOqUBSzZUCq%2FzXAjyPDTji77FcwYjfIaE9JzMZWhuyI7bTOEajDcimDYF0ktETYxf59IqHKC0UN9z%2F8G8KvabwcXOM4A%2B8ekFzzSnHF0PmPBBJ66P3yHIt9sSHnACTrmnmUBF2qWlLHTf8wlaTQumWdHhyAnGLcAI8ZyyD7scT0ewaXmy8wrY80eJjh0mB3iVpuHp8FfG5xSUEL0UB6OmlXONTZAPAzWr&X-Amz-Signature=05830d6b046d60de0f2abb071612e3fecc1ba8d463710506230830742e79aa13&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TYJHF4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCzUuMnb%2FqaOXTeziDT%2Fk9tSz7F%2FJPeTVRcJQEZMoozFQIgDRtnHJtq%2BJ9u2ONCv1Qu3e%2F7LI1ADwJHg2hAmX95kQsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDqt8EN3nDoYoQ9jkCrcA%2BZr8EbhLXrrG53YimHSTtmxgfLyFE93sWjiZhgT8pqZiFqkjgeIbEYIXYoBNbDe26IzaGIEs8cZAN6SgITqs%2BBx9MyPsYImlBmUy%2B7CWddW3cqVrPCX0vvwuGqZbAlgSR%2F5vyOGKNwzK5nhxzxGZKAbbbrW4M2lK9a5D1xvJFx8hScqSESmNtVOAExo5e7BgkSVaE1H5IoPDq3Oh83tzTIb5tOOfo6BfqTtg%2F72bbBsPSPB4FpcYeDvvsi6STxdM0WiyZmKN%2FxLwW7IqvZuLMO2emwBtnlgGu9B2b0hnP7Cz4fYCPqceu50ZeUrYjSZ543gzi20YKwjUbGnvXO4tUi2qD5O5bmiLjA%2B3I5kQrm146df80Z3MX6GaTSxIg5NmXZfC5tidB5zgca%2BEc69IOVqPZiAl6bqUzrUSGBbUS%2BjuaGy1wnDfNzNNEVu%2BuU2KoP8STEHJLW6jsFi0pGo2%2FhH%2F4ez%2FXjeAjUNvCFJP4n7KSuFNXfKNUYn6n7H8XVoD0HMur1YVmuvkdoOIRj6vu%2Fu8qWmO5HNAI4KAthh5HZTii6QTHV5oxdLViUAa6%2B3ZplKbfdPZphoWESh4B5EtONXjT3oIY7eexJc9gYNBrwyXpZQbP7Cg%2BUFSP8kMLG9r74GOqUBSzZUCq%2FzXAjyPDTji77FcwYjfIaE9JzMZWhuyI7bTOEajDcimDYF0ktETYxf59IqHKC0UN9z%2F8G8KvabwcXOM4A%2B8ekFzzSnHF0PmPBBJ66P3yHIt9sSHnACTrmnmUBF2qWlLHTf8wlaTQumWdHhyAnGLcAI8ZyyD7scT0ewaXmy8wrY80eJjh0mB3iVpuHp8FfG5xSUEL0UB6OmlXONTZAPAzWr&X-Amz-Signature=cd19dbddeca3c000de622788f870905c88384e1e6f53ff067e9cd543c2faf885&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TYJHF4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCzUuMnb%2FqaOXTeziDT%2Fk9tSz7F%2FJPeTVRcJQEZMoozFQIgDRtnHJtq%2BJ9u2ONCv1Qu3e%2F7LI1ADwJHg2hAmX95kQsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDqt8EN3nDoYoQ9jkCrcA%2BZr8EbhLXrrG53YimHSTtmxgfLyFE93sWjiZhgT8pqZiFqkjgeIbEYIXYoBNbDe26IzaGIEs8cZAN6SgITqs%2BBx9MyPsYImlBmUy%2B7CWddW3cqVrPCX0vvwuGqZbAlgSR%2F5vyOGKNwzK5nhxzxGZKAbbbrW4M2lK9a5D1xvJFx8hScqSESmNtVOAExo5e7BgkSVaE1H5IoPDq3Oh83tzTIb5tOOfo6BfqTtg%2F72bbBsPSPB4FpcYeDvvsi6STxdM0WiyZmKN%2FxLwW7IqvZuLMO2emwBtnlgGu9B2b0hnP7Cz4fYCPqceu50ZeUrYjSZ543gzi20YKwjUbGnvXO4tUi2qD5O5bmiLjA%2B3I5kQrm146df80Z3MX6GaTSxIg5NmXZfC5tidB5zgca%2BEc69IOVqPZiAl6bqUzrUSGBbUS%2BjuaGy1wnDfNzNNEVu%2BuU2KoP8STEHJLW6jsFi0pGo2%2FhH%2F4ez%2FXjeAjUNvCFJP4n7KSuFNXfKNUYn6n7H8XVoD0HMur1YVmuvkdoOIRj6vu%2Fu8qWmO5HNAI4KAthh5HZTii6QTHV5oxdLViUAa6%2B3ZplKbfdPZphoWESh4B5EtONXjT3oIY7eexJc9gYNBrwyXpZQbP7Cg%2BUFSP8kMLG9r74GOqUBSzZUCq%2FzXAjyPDTji77FcwYjfIaE9JzMZWhuyI7bTOEajDcimDYF0ktETYxf59IqHKC0UN9z%2F8G8KvabwcXOM4A%2B8ekFzzSnHF0PmPBBJ66P3yHIt9sSHnACTrmnmUBF2qWlLHTf8wlaTQumWdHhyAnGLcAI8ZyyD7scT0ewaXmy8wrY80eJjh0mB3iVpuHp8FfG5xSUEL0UB6OmlXONTZAPAzWr&X-Amz-Signature=3ed7415f6a90561718233117164b300269e7f36c3aa746bcf5e23be925d9ef42&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
