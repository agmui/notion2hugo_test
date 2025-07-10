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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNJIHY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaMHool0lythITgjgH9ISwQaBt6oMQsBqbnDJguXsItAiArs%2FGTYgKibL6rDT7fDcMnMz8NSnhnC6wKwjRjp6IXkSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrt1FVJMSiUQs0QF4KtwD5IuM%2FeOQnI%2B8bxPDVmMGYd%2BSTtJARGyCY%2B7CnnPlcxNSvY8OHQL2sQkDQfvuJuQmgld34SpJgho%2F5YJtdgTZKyxvwrn9awghwYE%2FGkUPo1ncXES%2Bm82tTQ%2FT2t7lCbSEMlU46AFVbvn8ASIdGV7xE9mRIPOhDac8%2BbbSwOI4srRH8MHn%2BeR%2Fkeof%2B2NvUVeXeHIBBXOK3vtAtqYVtZ3daO5eWOg2KoPXlQ5tTNRUJkO6egRxAPGXS2khbuoLmuTbyPVslCqxIVTzSYAw1l%2BkxrwwHPhoE%2FUr6OY4KZCoBizcVqAwTGTG7xeLOw1EfltPVEQUIIkUuCHpsR9zujV500DaHtUVFZ0Bxvp9%2BPeGvrfzwc1mKV930F9r9zeL4IzbBkOKlAczDWYRTPwzVPp4fo5zD%2FBuoB3rhhuou5SKyu4V%2FROYD2Yl97Lyf%2BwWaSqblwKrc1OBF44S%2FNdzvCbEUxQHwsYjbVCa2jBZ7Sy0BHIlFiCegZ5XzQbp6K3X%2FMRAExOfK7x3LWpCMcgcFBTHpq60tDMGvGBuXvWlrUMoDBFMmGrQDjbJem4T%2FLlesesPC4%2BKme8ZBo6TgixEF880vpGxLM1eRqhC00tvVK%2BkG5nWxXJv3VTfv2qVc8Yw%2Fv2%2BwwY6pgG2OoCtuwVfdTFx1%2Bgysui4XGaBuEgq%2FjkwfTSceUuGD5hb6ZEmqigVA5AYm1OnKaxCjI90IV1GBiNOcQYGJYcTPIbSXoYgs6nNjX4v1BysU1I8LmS8wl%2FR7ar3z1geLQmwZ8JaHs22NdbWVpnM%2FUIpWtFxCAl6eSUgS0%2BvEqm0H4qI%2FByBjK2QVk2AlnJkDxrQmtmny%2BljY6%2BqFgYFYuAqK4Wh2VWc&X-Amz-Signature=a6f30edf4143a739b86fc2131bfc44b15d66be3182e86849770ebb16342a0d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNJIHY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaMHool0lythITgjgH9ISwQaBt6oMQsBqbnDJguXsItAiArs%2FGTYgKibL6rDT7fDcMnMz8NSnhnC6wKwjRjp6IXkSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrt1FVJMSiUQs0QF4KtwD5IuM%2FeOQnI%2B8bxPDVmMGYd%2BSTtJARGyCY%2B7CnnPlcxNSvY8OHQL2sQkDQfvuJuQmgld34SpJgho%2F5YJtdgTZKyxvwrn9awghwYE%2FGkUPo1ncXES%2Bm82tTQ%2FT2t7lCbSEMlU46AFVbvn8ASIdGV7xE9mRIPOhDac8%2BbbSwOI4srRH8MHn%2BeR%2Fkeof%2B2NvUVeXeHIBBXOK3vtAtqYVtZ3daO5eWOg2KoPXlQ5tTNRUJkO6egRxAPGXS2khbuoLmuTbyPVslCqxIVTzSYAw1l%2BkxrwwHPhoE%2FUr6OY4KZCoBizcVqAwTGTG7xeLOw1EfltPVEQUIIkUuCHpsR9zujV500DaHtUVFZ0Bxvp9%2BPeGvrfzwc1mKV930F9r9zeL4IzbBkOKlAczDWYRTPwzVPp4fo5zD%2FBuoB3rhhuou5SKyu4V%2FROYD2Yl97Lyf%2BwWaSqblwKrc1OBF44S%2FNdzvCbEUxQHwsYjbVCa2jBZ7Sy0BHIlFiCegZ5XzQbp6K3X%2FMRAExOfK7x3LWpCMcgcFBTHpq60tDMGvGBuXvWlrUMoDBFMmGrQDjbJem4T%2FLlesesPC4%2BKme8ZBo6TgixEF880vpGxLM1eRqhC00tvVK%2BkG5nWxXJv3VTfv2qVc8Yw%2Fv2%2BwwY6pgG2OoCtuwVfdTFx1%2Bgysui4XGaBuEgq%2FjkwfTSceUuGD5hb6ZEmqigVA5AYm1OnKaxCjI90IV1GBiNOcQYGJYcTPIbSXoYgs6nNjX4v1BysU1I8LmS8wl%2FR7ar3z1geLQmwZ8JaHs22NdbWVpnM%2FUIpWtFxCAl6eSUgS0%2BvEqm0H4qI%2FByBjK2QVk2AlnJkDxrQmtmny%2BljY6%2BqFgYFYuAqK4Wh2VWc&X-Amz-Signature=3cc78b164b5aff5c5142b56bf4fbdf214d2d9de9e3776ed403cfe2229e4cfbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNJIHY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaMHool0lythITgjgH9ISwQaBt6oMQsBqbnDJguXsItAiArs%2FGTYgKibL6rDT7fDcMnMz8NSnhnC6wKwjRjp6IXkSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrt1FVJMSiUQs0QF4KtwD5IuM%2FeOQnI%2B8bxPDVmMGYd%2BSTtJARGyCY%2B7CnnPlcxNSvY8OHQL2sQkDQfvuJuQmgld34SpJgho%2F5YJtdgTZKyxvwrn9awghwYE%2FGkUPo1ncXES%2Bm82tTQ%2FT2t7lCbSEMlU46AFVbvn8ASIdGV7xE9mRIPOhDac8%2BbbSwOI4srRH8MHn%2BeR%2Fkeof%2B2NvUVeXeHIBBXOK3vtAtqYVtZ3daO5eWOg2KoPXlQ5tTNRUJkO6egRxAPGXS2khbuoLmuTbyPVslCqxIVTzSYAw1l%2BkxrwwHPhoE%2FUr6OY4KZCoBizcVqAwTGTG7xeLOw1EfltPVEQUIIkUuCHpsR9zujV500DaHtUVFZ0Bxvp9%2BPeGvrfzwc1mKV930F9r9zeL4IzbBkOKlAczDWYRTPwzVPp4fo5zD%2FBuoB3rhhuou5SKyu4V%2FROYD2Yl97Lyf%2BwWaSqblwKrc1OBF44S%2FNdzvCbEUxQHwsYjbVCa2jBZ7Sy0BHIlFiCegZ5XzQbp6K3X%2FMRAExOfK7x3LWpCMcgcFBTHpq60tDMGvGBuXvWlrUMoDBFMmGrQDjbJem4T%2FLlesesPC4%2BKme8ZBo6TgixEF880vpGxLM1eRqhC00tvVK%2BkG5nWxXJv3VTfv2qVc8Yw%2Fv2%2BwwY6pgG2OoCtuwVfdTFx1%2Bgysui4XGaBuEgq%2FjkwfTSceUuGD5hb6ZEmqigVA5AYm1OnKaxCjI90IV1GBiNOcQYGJYcTPIbSXoYgs6nNjX4v1BysU1I8LmS8wl%2FR7ar3z1geLQmwZ8JaHs22NdbWVpnM%2FUIpWtFxCAl6eSUgS0%2BvEqm0H4qI%2FByBjK2QVk2AlnJkDxrQmtmny%2BljY6%2BqFgYFYuAqK4Wh2VWc&X-Amz-Signature=ca65a37fd2f9afcf3da7b6ccca0e7b1415c85ceba9470c7e2041466e5a8340f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNJIHY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaMHool0lythITgjgH9ISwQaBt6oMQsBqbnDJguXsItAiArs%2FGTYgKibL6rDT7fDcMnMz8NSnhnC6wKwjRjp6IXkSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrt1FVJMSiUQs0QF4KtwD5IuM%2FeOQnI%2B8bxPDVmMGYd%2BSTtJARGyCY%2B7CnnPlcxNSvY8OHQL2sQkDQfvuJuQmgld34SpJgho%2F5YJtdgTZKyxvwrn9awghwYE%2FGkUPo1ncXES%2Bm82tTQ%2FT2t7lCbSEMlU46AFVbvn8ASIdGV7xE9mRIPOhDac8%2BbbSwOI4srRH8MHn%2BeR%2Fkeof%2B2NvUVeXeHIBBXOK3vtAtqYVtZ3daO5eWOg2KoPXlQ5tTNRUJkO6egRxAPGXS2khbuoLmuTbyPVslCqxIVTzSYAw1l%2BkxrwwHPhoE%2FUr6OY4KZCoBizcVqAwTGTG7xeLOw1EfltPVEQUIIkUuCHpsR9zujV500DaHtUVFZ0Bxvp9%2BPeGvrfzwc1mKV930F9r9zeL4IzbBkOKlAczDWYRTPwzVPp4fo5zD%2FBuoB3rhhuou5SKyu4V%2FROYD2Yl97Lyf%2BwWaSqblwKrc1OBF44S%2FNdzvCbEUxQHwsYjbVCa2jBZ7Sy0BHIlFiCegZ5XzQbp6K3X%2FMRAExOfK7x3LWpCMcgcFBTHpq60tDMGvGBuXvWlrUMoDBFMmGrQDjbJem4T%2FLlesesPC4%2BKme8ZBo6TgixEF880vpGxLM1eRqhC00tvVK%2BkG5nWxXJv3VTfv2qVc8Yw%2Fv2%2BwwY6pgG2OoCtuwVfdTFx1%2Bgysui4XGaBuEgq%2FjkwfTSceUuGD5hb6ZEmqigVA5AYm1OnKaxCjI90IV1GBiNOcQYGJYcTPIbSXoYgs6nNjX4v1BysU1I8LmS8wl%2FR7ar3z1geLQmwZ8JaHs22NdbWVpnM%2FUIpWtFxCAl6eSUgS0%2BvEqm0H4qI%2FByBjK2QVk2AlnJkDxrQmtmny%2BljY6%2BqFgYFYuAqK4Wh2VWc&X-Amz-Signature=d48c12beae7202ac5cc61329530090792367eabbf041a1eac96723b7673569df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNJIHY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaMHool0lythITgjgH9ISwQaBt6oMQsBqbnDJguXsItAiArs%2FGTYgKibL6rDT7fDcMnMz8NSnhnC6wKwjRjp6IXkSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrt1FVJMSiUQs0QF4KtwD5IuM%2FeOQnI%2B8bxPDVmMGYd%2BSTtJARGyCY%2B7CnnPlcxNSvY8OHQL2sQkDQfvuJuQmgld34SpJgho%2F5YJtdgTZKyxvwrn9awghwYE%2FGkUPo1ncXES%2Bm82tTQ%2FT2t7lCbSEMlU46AFVbvn8ASIdGV7xE9mRIPOhDac8%2BbbSwOI4srRH8MHn%2BeR%2Fkeof%2B2NvUVeXeHIBBXOK3vtAtqYVtZ3daO5eWOg2KoPXlQ5tTNRUJkO6egRxAPGXS2khbuoLmuTbyPVslCqxIVTzSYAw1l%2BkxrwwHPhoE%2FUr6OY4KZCoBizcVqAwTGTG7xeLOw1EfltPVEQUIIkUuCHpsR9zujV500DaHtUVFZ0Bxvp9%2BPeGvrfzwc1mKV930F9r9zeL4IzbBkOKlAczDWYRTPwzVPp4fo5zD%2FBuoB3rhhuou5SKyu4V%2FROYD2Yl97Lyf%2BwWaSqblwKrc1OBF44S%2FNdzvCbEUxQHwsYjbVCa2jBZ7Sy0BHIlFiCegZ5XzQbp6K3X%2FMRAExOfK7x3LWpCMcgcFBTHpq60tDMGvGBuXvWlrUMoDBFMmGrQDjbJem4T%2FLlesesPC4%2BKme8ZBo6TgixEF880vpGxLM1eRqhC00tvVK%2BkG5nWxXJv3VTfv2qVc8Yw%2Fv2%2BwwY6pgG2OoCtuwVfdTFx1%2Bgysui4XGaBuEgq%2FjkwfTSceUuGD5hb6ZEmqigVA5AYm1OnKaxCjI90IV1GBiNOcQYGJYcTPIbSXoYgs6nNjX4v1BysU1I8LmS8wl%2FR7ar3z1geLQmwZ8JaHs22NdbWVpnM%2FUIpWtFxCAl6eSUgS0%2BvEqm0H4qI%2FByBjK2QVk2AlnJkDxrQmtmny%2BljY6%2BqFgYFYuAqK4Wh2VWc&X-Amz-Signature=7da7e5adf40b94640e950d58174ad5eaa1a76371c605f9fed5dbf8d4916f9540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNJIHY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaMHool0lythITgjgH9ISwQaBt6oMQsBqbnDJguXsItAiArs%2FGTYgKibL6rDT7fDcMnMz8NSnhnC6wKwjRjp6IXkSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrt1FVJMSiUQs0QF4KtwD5IuM%2FeOQnI%2B8bxPDVmMGYd%2BSTtJARGyCY%2B7CnnPlcxNSvY8OHQL2sQkDQfvuJuQmgld34SpJgho%2F5YJtdgTZKyxvwrn9awghwYE%2FGkUPo1ncXES%2Bm82tTQ%2FT2t7lCbSEMlU46AFVbvn8ASIdGV7xE9mRIPOhDac8%2BbbSwOI4srRH8MHn%2BeR%2Fkeof%2B2NvUVeXeHIBBXOK3vtAtqYVtZ3daO5eWOg2KoPXlQ5tTNRUJkO6egRxAPGXS2khbuoLmuTbyPVslCqxIVTzSYAw1l%2BkxrwwHPhoE%2FUr6OY4KZCoBizcVqAwTGTG7xeLOw1EfltPVEQUIIkUuCHpsR9zujV500DaHtUVFZ0Bxvp9%2BPeGvrfzwc1mKV930F9r9zeL4IzbBkOKlAczDWYRTPwzVPp4fo5zD%2FBuoB3rhhuou5SKyu4V%2FROYD2Yl97Lyf%2BwWaSqblwKrc1OBF44S%2FNdzvCbEUxQHwsYjbVCa2jBZ7Sy0BHIlFiCegZ5XzQbp6K3X%2FMRAExOfK7x3LWpCMcgcFBTHpq60tDMGvGBuXvWlrUMoDBFMmGrQDjbJem4T%2FLlesesPC4%2BKme8ZBo6TgixEF880vpGxLM1eRqhC00tvVK%2BkG5nWxXJv3VTfv2qVc8Yw%2Fv2%2BwwY6pgG2OoCtuwVfdTFx1%2Bgysui4XGaBuEgq%2FjkwfTSceUuGD5hb6ZEmqigVA5AYm1OnKaxCjI90IV1GBiNOcQYGJYcTPIbSXoYgs6nNjX4v1BysU1I8LmS8wl%2FR7ar3z1geLQmwZ8JaHs22NdbWVpnM%2FUIpWtFxCAl6eSUgS0%2BvEqm0H4qI%2FByBjK2QVk2AlnJkDxrQmtmny%2BljY6%2BqFgYFYuAqK4Wh2VWc&X-Amz-Signature=e997917c3db753b7d446ce663174894a1071863637c094166fed23d79e5eac75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNJIHY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaMHool0lythITgjgH9ISwQaBt6oMQsBqbnDJguXsItAiArs%2FGTYgKibL6rDT7fDcMnMz8NSnhnC6wKwjRjp6IXkSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrt1FVJMSiUQs0QF4KtwD5IuM%2FeOQnI%2B8bxPDVmMGYd%2BSTtJARGyCY%2B7CnnPlcxNSvY8OHQL2sQkDQfvuJuQmgld34SpJgho%2F5YJtdgTZKyxvwrn9awghwYE%2FGkUPo1ncXES%2Bm82tTQ%2FT2t7lCbSEMlU46AFVbvn8ASIdGV7xE9mRIPOhDac8%2BbbSwOI4srRH8MHn%2BeR%2Fkeof%2B2NvUVeXeHIBBXOK3vtAtqYVtZ3daO5eWOg2KoPXlQ5tTNRUJkO6egRxAPGXS2khbuoLmuTbyPVslCqxIVTzSYAw1l%2BkxrwwHPhoE%2FUr6OY4KZCoBizcVqAwTGTG7xeLOw1EfltPVEQUIIkUuCHpsR9zujV500DaHtUVFZ0Bxvp9%2BPeGvrfzwc1mKV930F9r9zeL4IzbBkOKlAczDWYRTPwzVPp4fo5zD%2FBuoB3rhhuou5SKyu4V%2FROYD2Yl97Lyf%2BwWaSqblwKrc1OBF44S%2FNdzvCbEUxQHwsYjbVCa2jBZ7Sy0BHIlFiCegZ5XzQbp6K3X%2FMRAExOfK7x3LWpCMcgcFBTHpq60tDMGvGBuXvWlrUMoDBFMmGrQDjbJem4T%2FLlesesPC4%2BKme8ZBo6TgixEF880vpGxLM1eRqhC00tvVK%2BkG5nWxXJv3VTfv2qVc8Yw%2Fv2%2BwwY6pgG2OoCtuwVfdTFx1%2Bgysui4XGaBuEgq%2FjkwfTSceUuGD5hb6ZEmqigVA5AYm1OnKaxCjI90IV1GBiNOcQYGJYcTPIbSXoYgs6nNjX4v1BysU1I8LmS8wl%2FR7ar3z1geLQmwZ8JaHs22NdbWVpnM%2FUIpWtFxCAl6eSUgS0%2BvEqm0H4qI%2FByBjK2QVk2AlnJkDxrQmtmny%2BljY6%2BqFgYFYuAqK4Wh2VWc&X-Amz-Signature=ea27faea4d52051fbc2f8a50f50173e721ca41854d723275a58156523e12977d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
