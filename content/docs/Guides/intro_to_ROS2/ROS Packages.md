---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWMD7SCY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWHmxuV401kbdpVcoJZXZe9%2ByNxRHBxX8HKGZQHTaXAIga%2FRbDCJOPpD4XPGNBruKamZaRadg2Efl8LGa1x0GPzMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWYCKX8MXK%2BOTH2FyrcA1caiGmHC%2B1qewYBtZwc5uJ0UrJuq75cwbiawFxXu%2FYPZB2E8v88nF1DKvSgx6zntsUkUBPiBZI6OTCXmjlkn%2BaDf0FOz1sNq%2FXoVn36OxNAmUE0L3cZdJ6E6qGKxzwnXlIPbMZUt6MoEx170mZ6NFqEdeUJhPAjjARc9tBPqR5EnTj4p1264eVueyWt6GfBFLCSi%2Buq6pEubqekbM7UQBDBE735kYpLl6JDgIrj5F0yVE0eRPtx7WZdObKYC7jYj%2F2zr3nLfioOLxKibOwr8fsvEXo%2BfB0HaB7Ru7wpHyEkIYJYsz5DHxDbzThh5zJpghPrZ4Eq1oRuO76joNJYvuS1%2FtufRPB8a44UmdtQfZ%2BBK%2BFJ59Z8xJPyfQNKyzpXSQ2gOpND2w%2BrcaGvx%2BHvSy3gifkZbJLWfB1bHU4XVB3fd6qUxD%2BiMe1O8OPrq7S6Zx9MmNjWtQvWcyczVZphlNDXYX%2Fq0FWjurGVfxVQHoRHnljj32EfhFkANt8gc87g%2F%2B98lD%2FVd6kKgFLU1yyiMa7V9boDOsPuBmtnUQtoDE9wRmCcxw%2BHA7zLL1K4UadDEh9CNHLuyuXO7wiK2I%2BceYkWv3bI2VknY1XZocViY%2BtwHLc7hAXVurOoqSupMO3S5sQGOqUB5fv0uc2fpoIvkrZjr5XS0AR0e1kFG%2FbQRi%2BrRm2sHGB7Fz5TqPuM%2F4DKM5MubewdoH6Qm5Tirj%2BfwNyhQGTfq4DFbbrJR4ls24c8xoXnh0P4nIPSjlU94PqGUGTt%2FYPF%2Foz1NYtTIGAlCjxCikPJ2pFre3ZBTmT6tstzEx3L9G9Aqx%2Bdzt%2BYjRM6z8Wjbb35pqWbnGn3By%2F88YKJYGTRwuoN2B8w&X-Amz-Signature=7717915b8237fee5e6cb2a4e5d43d000589f61ac914719e0a0e7f3b23ecb0044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWMD7SCY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWHmxuV401kbdpVcoJZXZe9%2ByNxRHBxX8HKGZQHTaXAIga%2FRbDCJOPpD4XPGNBruKamZaRadg2Efl8LGa1x0GPzMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWYCKX8MXK%2BOTH2FyrcA1caiGmHC%2B1qewYBtZwc5uJ0UrJuq75cwbiawFxXu%2FYPZB2E8v88nF1DKvSgx6zntsUkUBPiBZI6OTCXmjlkn%2BaDf0FOz1sNq%2FXoVn36OxNAmUE0L3cZdJ6E6qGKxzwnXlIPbMZUt6MoEx170mZ6NFqEdeUJhPAjjARc9tBPqR5EnTj4p1264eVueyWt6GfBFLCSi%2Buq6pEubqekbM7UQBDBE735kYpLl6JDgIrj5F0yVE0eRPtx7WZdObKYC7jYj%2F2zr3nLfioOLxKibOwr8fsvEXo%2BfB0HaB7Ru7wpHyEkIYJYsz5DHxDbzThh5zJpghPrZ4Eq1oRuO76joNJYvuS1%2FtufRPB8a44UmdtQfZ%2BBK%2BFJ59Z8xJPyfQNKyzpXSQ2gOpND2w%2BrcaGvx%2BHvSy3gifkZbJLWfB1bHU4XVB3fd6qUxD%2BiMe1O8OPrq7S6Zx9MmNjWtQvWcyczVZphlNDXYX%2Fq0FWjurGVfxVQHoRHnljj32EfhFkANt8gc87g%2F%2B98lD%2FVd6kKgFLU1yyiMa7V9boDOsPuBmtnUQtoDE9wRmCcxw%2BHA7zLL1K4UadDEh9CNHLuyuXO7wiK2I%2BceYkWv3bI2VknY1XZocViY%2BtwHLc7hAXVurOoqSupMO3S5sQGOqUB5fv0uc2fpoIvkrZjr5XS0AR0e1kFG%2FbQRi%2BrRm2sHGB7Fz5TqPuM%2F4DKM5MubewdoH6Qm5Tirj%2BfwNyhQGTfq4DFbbrJR4ls24c8xoXnh0P4nIPSjlU94PqGUGTt%2FYPF%2Foz1NYtTIGAlCjxCikPJ2pFre3ZBTmT6tstzEx3L9G9Aqx%2Bdzt%2BYjRM6z8Wjbb35pqWbnGn3By%2F88YKJYGTRwuoN2B8w&X-Amz-Signature=2d41ec9161f5de439ca02f090bcb08ba4bd9dcac254a77aaf712b387b1d446ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWMD7SCY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWHmxuV401kbdpVcoJZXZe9%2ByNxRHBxX8HKGZQHTaXAIga%2FRbDCJOPpD4XPGNBruKamZaRadg2Efl8LGa1x0GPzMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWYCKX8MXK%2BOTH2FyrcA1caiGmHC%2B1qewYBtZwc5uJ0UrJuq75cwbiawFxXu%2FYPZB2E8v88nF1DKvSgx6zntsUkUBPiBZI6OTCXmjlkn%2BaDf0FOz1sNq%2FXoVn36OxNAmUE0L3cZdJ6E6qGKxzwnXlIPbMZUt6MoEx170mZ6NFqEdeUJhPAjjARc9tBPqR5EnTj4p1264eVueyWt6GfBFLCSi%2Buq6pEubqekbM7UQBDBE735kYpLl6JDgIrj5F0yVE0eRPtx7WZdObKYC7jYj%2F2zr3nLfioOLxKibOwr8fsvEXo%2BfB0HaB7Ru7wpHyEkIYJYsz5DHxDbzThh5zJpghPrZ4Eq1oRuO76joNJYvuS1%2FtufRPB8a44UmdtQfZ%2BBK%2BFJ59Z8xJPyfQNKyzpXSQ2gOpND2w%2BrcaGvx%2BHvSy3gifkZbJLWfB1bHU4XVB3fd6qUxD%2BiMe1O8OPrq7S6Zx9MmNjWtQvWcyczVZphlNDXYX%2Fq0FWjurGVfxVQHoRHnljj32EfhFkANt8gc87g%2F%2B98lD%2FVd6kKgFLU1yyiMa7V9boDOsPuBmtnUQtoDE9wRmCcxw%2BHA7zLL1K4UadDEh9CNHLuyuXO7wiK2I%2BceYkWv3bI2VknY1XZocViY%2BtwHLc7hAXVurOoqSupMO3S5sQGOqUB5fv0uc2fpoIvkrZjr5XS0AR0e1kFG%2FbQRi%2BrRm2sHGB7Fz5TqPuM%2F4DKM5MubewdoH6Qm5Tirj%2BfwNyhQGTfq4DFbbrJR4ls24c8xoXnh0P4nIPSjlU94PqGUGTt%2FYPF%2Foz1NYtTIGAlCjxCikPJ2pFre3ZBTmT6tstzEx3L9G9Aqx%2Bdzt%2BYjRM6z8Wjbb35pqWbnGn3By%2F88YKJYGTRwuoN2B8w&X-Amz-Signature=75b62a08ee9ac64f48c3ed37c82deb114a36b99ad9f77b4bf40ccf1a2746613f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWMD7SCY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWHmxuV401kbdpVcoJZXZe9%2ByNxRHBxX8HKGZQHTaXAIga%2FRbDCJOPpD4XPGNBruKamZaRadg2Efl8LGa1x0GPzMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWYCKX8MXK%2BOTH2FyrcA1caiGmHC%2B1qewYBtZwc5uJ0UrJuq75cwbiawFxXu%2FYPZB2E8v88nF1DKvSgx6zntsUkUBPiBZI6OTCXmjlkn%2BaDf0FOz1sNq%2FXoVn36OxNAmUE0L3cZdJ6E6qGKxzwnXlIPbMZUt6MoEx170mZ6NFqEdeUJhPAjjARc9tBPqR5EnTj4p1264eVueyWt6GfBFLCSi%2Buq6pEubqekbM7UQBDBE735kYpLl6JDgIrj5F0yVE0eRPtx7WZdObKYC7jYj%2F2zr3nLfioOLxKibOwr8fsvEXo%2BfB0HaB7Ru7wpHyEkIYJYsz5DHxDbzThh5zJpghPrZ4Eq1oRuO76joNJYvuS1%2FtufRPB8a44UmdtQfZ%2BBK%2BFJ59Z8xJPyfQNKyzpXSQ2gOpND2w%2BrcaGvx%2BHvSy3gifkZbJLWfB1bHU4XVB3fd6qUxD%2BiMe1O8OPrq7S6Zx9MmNjWtQvWcyczVZphlNDXYX%2Fq0FWjurGVfxVQHoRHnljj32EfhFkANt8gc87g%2F%2B98lD%2FVd6kKgFLU1yyiMa7V9boDOsPuBmtnUQtoDE9wRmCcxw%2BHA7zLL1K4UadDEh9CNHLuyuXO7wiK2I%2BceYkWv3bI2VknY1XZocViY%2BtwHLc7hAXVurOoqSupMO3S5sQGOqUB5fv0uc2fpoIvkrZjr5XS0AR0e1kFG%2FbQRi%2BrRm2sHGB7Fz5TqPuM%2F4DKM5MubewdoH6Qm5Tirj%2BfwNyhQGTfq4DFbbrJR4ls24c8xoXnh0P4nIPSjlU94PqGUGTt%2FYPF%2Foz1NYtTIGAlCjxCikPJ2pFre3ZBTmT6tstzEx3L9G9Aqx%2Bdzt%2BYjRM6z8Wjbb35pqWbnGn3By%2F88YKJYGTRwuoN2B8w&X-Amz-Signature=a9edf28dd0cb9ddd67d9fb0ee463e2920e1412df1308795d33668c2b452e8be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWMD7SCY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWHmxuV401kbdpVcoJZXZe9%2ByNxRHBxX8HKGZQHTaXAIga%2FRbDCJOPpD4XPGNBruKamZaRadg2Efl8LGa1x0GPzMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWYCKX8MXK%2BOTH2FyrcA1caiGmHC%2B1qewYBtZwc5uJ0UrJuq75cwbiawFxXu%2FYPZB2E8v88nF1DKvSgx6zntsUkUBPiBZI6OTCXmjlkn%2BaDf0FOz1sNq%2FXoVn36OxNAmUE0L3cZdJ6E6qGKxzwnXlIPbMZUt6MoEx170mZ6NFqEdeUJhPAjjARc9tBPqR5EnTj4p1264eVueyWt6GfBFLCSi%2Buq6pEubqekbM7UQBDBE735kYpLl6JDgIrj5F0yVE0eRPtx7WZdObKYC7jYj%2F2zr3nLfioOLxKibOwr8fsvEXo%2BfB0HaB7Ru7wpHyEkIYJYsz5DHxDbzThh5zJpghPrZ4Eq1oRuO76joNJYvuS1%2FtufRPB8a44UmdtQfZ%2BBK%2BFJ59Z8xJPyfQNKyzpXSQ2gOpND2w%2BrcaGvx%2BHvSy3gifkZbJLWfB1bHU4XVB3fd6qUxD%2BiMe1O8OPrq7S6Zx9MmNjWtQvWcyczVZphlNDXYX%2Fq0FWjurGVfxVQHoRHnljj32EfhFkANt8gc87g%2F%2B98lD%2FVd6kKgFLU1yyiMa7V9boDOsPuBmtnUQtoDE9wRmCcxw%2BHA7zLL1K4UadDEh9CNHLuyuXO7wiK2I%2BceYkWv3bI2VknY1XZocViY%2BtwHLc7hAXVurOoqSupMO3S5sQGOqUB5fv0uc2fpoIvkrZjr5XS0AR0e1kFG%2FbQRi%2BrRm2sHGB7Fz5TqPuM%2F4DKM5MubewdoH6Qm5Tirj%2BfwNyhQGTfq4DFbbrJR4ls24c8xoXnh0P4nIPSjlU94PqGUGTt%2FYPF%2Foz1NYtTIGAlCjxCikPJ2pFre3ZBTmT6tstzEx3L9G9Aqx%2Bdzt%2BYjRM6z8Wjbb35pqWbnGn3By%2F88YKJYGTRwuoN2B8w&X-Amz-Signature=94f6729514f6f392dc5c83b163752fa292f435f606ac9e5ba8b55c53d906e267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWMD7SCY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWHmxuV401kbdpVcoJZXZe9%2ByNxRHBxX8HKGZQHTaXAIga%2FRbDCJOPpD4XPGNBruKamZaRadg2Efl8LGa1x0GPzMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWYCKX8MXK%2BOTH2FyrcA1caiGmHC%2B1qewYBtZwc5uJ0UrJuq75cwbiawFxXu%2FYPZB2E8v88nF1DKvSgx6zntsUkUBPiBZI6OTCXmjlkn%2BaDf0FOz1sNq%2FXoVn36OxNAmUE0L3cZdJ6E6qGKxzwnXlIPbMZUt6MoEx170mZ6NFqEdeUJhPAjjARc9tBPqR5EnTj4p1264eVueyWt6GfBFLCSi%2Buq6pEubqekbM7UQBDBE735kYpLl6JDgIrj5F0yVE0eRPtx7WZdObKYC7jYj%2F2zr3nLfioOLxKibOwr8fsvEXo%2BfB0HaB7Ru7wpHyEkIYJYsz5DHxDbzThh5zJpghPrZ4Eq1oRuO76joNJYvuS1%2FtufRPB8a44UmdtQfZ%2BBK%2BFJ59Z8xJPyfQNKyzpXSQ2gOpND2w%2BrcaGvx%2BHvSy3gifkZbJLWfB1bHU4XVB3fd6qUxD%2BiMe1O8OPrq7S6Zx9MmNjWtQvWcyczVZphlNDXYX%2Fq0FWjurGVfxVQHoRHnljj32EfhFkANt8gc87g%2F%2B98lD%2FVd6kKgFLU1yyiMa7V9boDOsPuBmtnUQtoDE9wRmCcxw%2BHA7zLL1K4UadDEh9CNHLuyuXO7wiK2I%2BceYkWv3bI2VknY1XZocViY%2BtwHLc7hAXVurOoqSupMO3S5sQGOqUB5fv0uc2fpoIvkrZjr5XS0AR0e1kFG%2FbQRi%2BrRm2sHGB7Fz5TqPuM%2F4DKM5MubewdoH6Qm5Tirj%2BfwNyhQGTfq4DFbbrJR4ls24c8xoXnh0P4nIPSjlU94PqGUGTt%2FYPF%2Foz1NYtTIGAlCjxCikPJ2pFre3ZBTmT6tstzEx3L9G9Aqx%2Bdzt%2BYjRM6z8Wjbb35pqWbnGn3By%2F88YKJYGTRwuoN2B8w&X-Amz-Signature=a23393408cdd5381bd3f89c909d6c42da0026d16869a97388cadd94f8ff97071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWMD7SCY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWHmxuV401kbdpVcoJZXZe9%2ByNxRHBxX8HKGZQHTaXAIga%2FRbDCJOPpD4XPGNBruKamZaRadg2Efl8LGa1x0GPzMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWYCKX8MXK%2BOTH2FyrcA1caiGmHC%2B1qewYBtZwc5uJ0UrJuq75cwbiawFxXu%2FYPZB2E8v88nF1DKvSgx6zntsUkUBPiBZI6OTCXmjlkn%2BaDf0FOz1sNq%2FXoVn36OxNAmUE0L3cZdJ6E6qGKxzwnXlIPbMZUt6MoEx170mZ6NFqEdeUJhPAjjARc9tBPqR5EnTj4p1264eVueyWt6GfBFLCSi%2Buq6pEubqekbM7UQBDBE735kYpLl6JDgIrj5F0yVE0eRPtx7WZdObKYC7jYj%2F2zr3nLfioOLxKibOwr8fsvEXo%2BfB0HaB7Ru7wpHyEkIYJYsz5DHxDbzThh5zJpghPrZ4Eq1oRuO76joNJYvuS1%2FtufRPB8a44UmdtQfZ%2BBK%2BFJ59Z8xJPyfQNKyzpXSQ2gOpND2w%2BrcaGvx%2BHvSy3gifkZbJLWfB1bHU4XVB3fd6qUxD%2BiMe1O8OPrq7S6Zx9MmNjWtQvWcyczVZphlNDXYX%2Fq0FWjurGVfxVQHoRHnljj32EfhFkANt8gc87g%2F%2B98lD%2FVd6kKgFLU1yyiMa7V9boDOsPuBmtnUQtoDE9wRmCcxw%2BHA7zLL1K4UadDEh9CNHLuyuXO7wiK2I%2BceYkWv3bI2VknY1XZocViY%2BtwHLc7hAXVurOoqSupMO3S5sQGOqUB5fv0uc2fpoIvkrZjr5XS0AR0e1kFG%2FbQRi%2BrRm2sHGB7Fz5TqPuM%2F4DKM5MubewdoH6Qm5Tirj%2BfwNyhQGTfq4DFbbrJR4ls24c8xoXnh0P4nIPSjlU94PqGUGTt%2FYPF%2Foz1NYtTIGAlCjxCikPJ2pFre3ZBTmT6tstzEx3L9G9Aqx%2Bdzt%2BYjRM6z8Wjbb35pqWbnGn3By%2F88YKJYGTRwuoN2B8w&X-Amz-Signature=af0bde64e1c9a66e8f80328797edf588217645da7a94ac2bdf3f4319cc17c775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
