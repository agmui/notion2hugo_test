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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CB4DHQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCuOxhJ8XveYEidZLalkLO7YQkYvNKj32gmJOxnYNBT1gIgWJbASoCOeVwSzs1is%2BXk8xOn9GhETykcS1qp314QFsUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkAQXXgrEwThoHc3yrcA%2FEmoENIbxcYfBzQx8CPzL9cKWbVw7DfdUx8iB5k0Zogh9e8sDXrOO1pJEvRKLT6U5HEARKsze3qN369G1fPyKCxKri8Q28A%2FGD1qbg6CqbmJtBVp39YQmwV%2FOXRqD6ZeWswDpnl6bYE65b2t0STPXPEQ2byIjIi3aeshl6BPsleN666SESaX1wxb3BSRQQGYDapG9ueUg1K1VIGD86WqATaLLuBZkI4Gmgy8%2F1jVKPvQY2V5%2FIBxpBWECF2naEOO%2FU28ZAVCTxthtlEu7730i5wwLauI9A4MCx1hAeGca0fqmOmjw6NfOwy1JqwpFN%2F4oAr49vRblaJkKzCawoJYd3ALVoDHss%2BWNLFZ6t3sQ8%2F5jLZaUr0Dmdgx5WEC72j9mvjiy8I4Sabjxs%2Fxn%2FbKs3kybhd7ULN6qfEmqJN%2Fl2htxS48GVpzYYelGBo%2FxUfoyQVe8VehvswwHBRzB98qGkIzGzcMQJ5VXURaXd3VxtYfpsOErZEvxgjBcKaPDOdxD5%2BDHxBiXE959SMF9zbxRV8cCL0QBFMltuUh%2F183RzFEh%2BACwDrahZYg0VzPfGjdtAVqmPpLlwjizrqUbkRoYfT8Va9YHu%2Fs4UCVQmpWxmFvngeHMkJU70J3XJ1MO%2Fvvr4GOqUB7aW0ZNN7eJYPdn5UeeMKZ9b%2BXBibCDFfF95RWLoDNemK4EtzQCVb9brAlqwnwdmnuPmqCCo5X3fbnbS3sZiIE5uvHXKf2ZgXqyoT9UCOCMZQAfxY1ZIkmDTaEUsR%2B0iY1MVTaszOvehkQ%2FaDHQbefsL2PNzo2PSuWQLNc9%2B12eEm9o8KKLmdkbenCNWVjl6TpZDoN0EKx56DZhq9lixSSw9kqDeb&X-Amz-Signature=35f04965b3907d9bba3e7cfb571baaaee0745229d792939f65e620ae33891f13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CB4DHQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCuOxhJ8XveYEidZLalkLO7YQkYvNKj32gmJOxnYNBT1gIgWJbASoCOeVwSzs1is%2BXk8xOn9GhETykcS1qp314QFsUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkAQXXgrEwThoHc3yrcA%2FEmoENIbxcYfBzQx8CPzL9cKWbVw7DfdUx8iB5k0Zogh9e8sDXrOO1pJEvRKLT6U5HEARKsze3qN369G1fPyKCxKri8Q28A%2FGD1qbg6CqbmJtBVp39YQmwV%2FOXRqD6ZeWswDpnl6bYE65b2t0STPXPEQ2byIjIi3aeshl6BPsleN666SESaX1wxb3BSRQQGYDapG9ueUg1K1VIGD86WqATaLLuBZkI4Gmgy8%2F1jVKPvQY2V5%2FIBxpBWECF2naEOO%2FU28ZAVCTxthtlEu7730i5wwLauI9A4MCx1hAeGca0fqmOmjw6NfOwy1JqwpFN%2F4oAr49vRblaJkKzCawoJYd3ALVoDHss%2BWNLFZ6t3sQ8%2F5jLZaUr0Dmdgx5WEC72j9mvjiy8I4Sabjxs%2Fxn%2FbKs3kybhd7ULN6qfEmqJN%2Fl2htxS48GVpzYYelGBo%2FxUfoyQVe8VehvswwHBRzB98qGkIzGzcMQJ5VXURaXd3VxtYfpsOErZEvxgjBcKaPDOdxD5%2BDHxBiXE959SMF9zbxRV8cCL0QBFMltuUh%2F183RzFEh%2BACwDrahZYg0VzPfGjdtAVqmPpLlwjizrqUbkRoYfT8Va9YHu%2Fs4UCVQmpWxmFvngeHMkJU70J3XJ1MO%2Fvvr4GOqUB7aW0ZNN7eJYPdn5UeeMKZ9b%2BXBibCDFfF95RWLoDNemK4EtzQCVb9brAlqwnwdmnuPmqCCo5X3fbnbS3sZiIE5uvHXKf2ZgXqyoT9UCOCMZQAfxY1ZIkmDTaEUsR%2B0iY1MVTaszOvehkQ%2FaDHQbefsL2PNzo2PSuWQLNc9%2B12eEm9o8KKLmdkbenCNWVjl6TpZDoN0EKx56DZhq9lixSSw9kqDeb&X-Amz-Signature=e7d2715b9de68907a07b94a20c4d57d1f9e5710a0e4268d42d0c1472b5afcaa9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CB4DHQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCuOxhJ8XveYEidZLalkLO7YQkYvNKj32gmJOxnYNBT1gIgWJbASoCOeVwSzs1is%2BXk8xOn9GhETykcS1qp314QFsUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkAQXXgrEwThoHc3yrcA%2FEmoENIbxcYfBzQx8CPzL9cKWbVw7DfdUx8iB5k0Zogh9e8sDXrOO1pJEvRKLT6U5HEARKsze3qN369G1fPyKCxKri8Q28A%2FGD1qbg6CqbmJtBVp39YQmwV%2FOXRqD6ZeWswDpnl6bYE65b2t0STPXPEQ2byIjIi3aeshl6BPsleN666SESaX1wxb3BSRQQGYDapG9ueUg1K1VIGD86WqATaLLuBZkI4Gmgy8%2F1jVKPvQY2V5%2FIBxpBWECF2naEOO%2FU28ZAVCTxthtlEu7730i5wwLauI9A4MCx1hAeGca0fqmOmjw6NfOwy1JqwpFN%2F4oAr49vRblaJkKzCawoJYd3ALVoDHss%2BWNLFZ6t3sQ8%2F5jLZaUr0Dmdgx5WEC72j9mvjiy8I4Sabjxs%2Fxn%2FbKs3kybhd7ULN6qfEmqJN%2Fl2htxS48GVpzYYelGBo%2FxUfoyQVe8VehvswwHBRzB98qGkIzGzcMQJ5VXURaXd3VxtYfpsOErZEvxgjBcKaPDOdxD5%2BDHxBiXE959SMF9zbxRV8cCL0QBFMltuUh%2F183RzFEh%2BACwDrahZYg0VzPfGjdtAVqmPpLlwjizrqUbkRoYfT8Va9YHu%2Fs4UCVQmpWxmFvngeHMkJU70J3XJ1MO%2Fvvr4GOqUB7aW0ZNN7eJYPdn5UeeMKZ9b%2BXBibCDFfF95RWLoDNemK4EtzQCVb9brAlqwnwdmnuPmqCCo5X3fbnbS3sZiIE5uvHXKf2ZgXqyoT9UCOCMZQAfxY1ZIkmDTaEUsR%2B0iY1MVTaszOvehkQ%2FaDHQbefsL2PNzo2PSuWQLNc9%2B12eEm9o8KKLmdkbenCNWVjl6TpZDoN0EKx56DZhq9lixSSw9kqDeb&X-Amz-Signature=a2d2ec233bf63e16bfb7db5798d70665020008355c9b5ee45f62941aef9291cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CB4DHQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCuOxhJ8XveYEidZLalkLO7YQkYvNKj32gmJOxnYNBT1gIgWJbASoCOeVwSzs1is%2BXk8xOn9GhETykcS1qp314QFsUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkAQXXgrEwThoHc3yrcA%2FEmoENIbxcYfBzQx8CPzL9cKWbVw7DfdUx8iB5k0Zogh9e8sDXrOO1pJEvRKLT6U5HEARKsze3qN369G1fPyKCxKri8Q28A%2FGD1qbg6CqbmJtBVp39YQmwV%2FOXRqD6ZeWswDpnl6bYE65b2t0STPXPEQ2byIjIi3aeshl6BPsleN666SESaX1wxb3BSRQQGYDapG9ueUg1K1VIGD86WqATaLLuBZkI4Gmgy8%2F1jVKPvQY2V5%2FIBxpBWECF2naEOO%2FU28ZAVCTxthtlEu7730i5wwLauI9A4MCx1hAeGca0fqmOmjw6NfOwy1JqwpFN%2F4oAr49vRblaJkKzCawoJYd3ALVoDHss%2BWNLFZ6t3sQ8%2F5jLZaUr0Dmdgx5WEC72j9mvjiy8I4Sabjxs%2Fxn%2FbKs3kybhd7ULN6qfEmqJN%2Fl2htxS48GVpzYYelGBo%2FxUfoyQVe8VehvswwHBRzB98qGkIzGzcMQJ5VXURaXd3VxtYfpsOErZEvxgjBcKaPDOdxD5%2BDHxBiXE959SMF9zbxRV8cCL0QBFMltuUh%2F183RzFEh%2BACwDrahZYg0VzPfGjdtAVqmPpLlwjizrqUbkRoYfT8Va9YHu%2Fs4UCVQmpWxmFvngeHMkJU70J3XJ1MO%2Fvvr4GOqUB7aW0ZNN7eJYPdn5UeeMKZ9b%2BXBibCDFfF95RWLoDNemK4EtzQCVb9brAlqwnwdmnuPmqCCo5X3fbnbS3sZiIE5uvHXKf2ZgXqyoT9UCOCMZQAfxY1ZIkmDTaEUsR%2B0iY1MVTaszOvehkQ%2FaDHQbefsL2PNzo2PSuWQLNc9%2B12eEm9o8KKLmdkbenCNWVjl6TpZDoN0EKx56DZhq9lixSSw9kqDeb&X-Amz-Signature=08de2f78484af90be53c62d38ebb4c3bcaa02e465082fa2fdc01e2fd6a5fee19&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CB4DHQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCuOxhJ8XveYEidZLalkLO7YQkYvNKj32gmJOxnYNBT1gIgWJbASoCOeVwSzs1is%2BXk8xOn9GhETykcS1qp314QFsUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkAQXXgrEwThoHc3yrcA%2FEmoENIbxcYfBzQx8CPzL9cKWbVw7DfdUx8iB5k0Zogh9e8sDXrOO1pJEvRKLT6U5HEARKsze3qN369G1fPyKCxKri8Q28A%2FGD1qbg6CqbmJtBVp39YQmwV%2FOXRqD6ZeWswDpnl6bYE65b2t0STPXPEQ2byIjIi3aeshl6BPsleN666SESaX1wxb3BSRQQGYDapG9ueUg1K1VIGD86WqATaLLuBZkI4Gmgy8%2F1jVKPvQY2V5%2FIBxpBWECF2naEOO%2FU28ZAVCTxthtlEu7730i5wwLauI9A4MCx1hAeGca0fqmOmjw6NfOwy1JqwpFN%2F4oAr49vRblaJkKzCawoJYd3ALVoDHss%2BWNLFZ6t3sQ8%2F5jLZaUr0Dmdgx5WEC72j9mvjiy8I4Sabjxs%2Fxn%2FbKs3kybhd7ULN6qfEmqJN%2Fl2htxS48GVpzYYelGBo%2FxUfoyQVe8VehvswwHBRzB98qGkIzGzcMQJ5VXURaXd3VxtYfpsOErZEvxgjBcKaPDOdxD5%2BDHxBiXE959SMF9zbxRV8cCL0QBFMltuUh%2F183RzFEh%2BACwDrahZYg0VzPfGjdtAVqmPpLlwjizrqUbkRoYfT8Va9YHu%2Fs4UCVQmpWxmFvngeHMkJU70J3XJ1MO%2Fvvr4GOqUB7aW0ZNN7eJYPdn5UeeMKZ9b%2BXBibCDFfF95RWLoDNemK4EtzQCVb9brAlqwnwdmnuPmqCCo5X3fbnbS3sZiIE5uvHXKf2ZgXqyoT9UCOCMZQAfxY1ZIkmDTaEUsR%2B0iY1MVTaszOvehkQ%2FaDHQbefsL2PNzo2PSuWQLNc9%2B12eEm9o8KKLmdkbenCNWVjl6TpZDoN0EKx56DZhq9lixSSw9kqDeb&X-Amz-Signature=5cd0db685181f445629c446f6374db1985423152e5319b7b1ed2637adb4435ea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CB4DHQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCuOxhJ8XveYEidZLalkLO7YQkYvNKj32gmJOxnYNBT1gIgWJbASoCOeVwSzs1is%2BXk8xOn9GhETykcS1qp314QFsUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkAQXXgrEwThoHc3yrcA%2FEmoENIbxcYfBzQx8CPzL9cKWbVw7DfdUx8iB5k0Zogh9e8sDXrOO1pJEvRKLT6U5HEARKsze3qN369G1fPyKCxKri8Q28A%2FGD1qbg6CqbmJtBVp39YQmwV%2FOXRqD6ZeWswDpnl6bYE65b2t0STPXPEQ2byIjIi3aeshl6BPsleN666SESaX1wxb3BSRQQGYDapG9ueUg1K1VIGD86WqATaLLuBZkI4Gmgy8%2F1jVKPvQY2V5%2FIBxpBWECF2naEOO%2FU28ZAVCTxthtlEu7730i5wwLauI9A4MCx1hAeGca0fqmOmjw6NfOwy1JqwpFN%2F4oAr49vRblaJkKzCawoJYd3ALVoDHss%2BWNLFZ6t3sQ8%2F5jLZaUr0Dmdgx5WEC72j9mvjiy8I4Sabjxs%2Fxn%2FbKs3kybhd7ULN6qfEmqJN%2Fl2htxS48GVpzYYelGBo%2FxUfoyQVe8VehvswwHBRzB98qGkIzGzcMQJ5VXURaXd3VxtYfpsOErZEvxgjBcKaPDOdxD5%2BDHxBiXE959SMF9zbxRV8cCL0QBFMltuUh%2F183RzFEh%2BACwDrahZYg0VzPfGjdtAVqmPpLlwjizrqUbkRoYfT8Va9YHu%2Fs4UCVQmpWxmFvngeHMkJU70J3XJ1MO%2Fvvr4GOqUB7aW0ZNN7eJYPdn5UeeMKZ9b%2BXBibCDFfF95RWLoDNemK4EtzQCVb9brAlqwnwdmnuPmqCCo5X3fbnbS3sZiIE5uvHXKf2ZgXqyoT9UCOCMZQAfxY1ZIkmDTaEUsR%2B0iY1MVTaszOvehkQ%2FaDHQbefsL2PNzo2PSuWQLNc9%2B12eEm9o8KKLmdkbenCNWVjl6TpZDoN0EKx56DZhq9lixSSw9kqDeb&X-Amz-Signature=4d7f3e3145d8dec79e3ab9aa1ee84428be7a29fbb2861d816e9346928831174c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CB4DHQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCuOxhJ8XveYEidZLalkLO7YQkYvNKj32gmJOxnYNBT1gIgWJbASoCOeVwSzs1is%2BXk8xOn9GhETykcS1qp314QFsUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkAQXXgrEwThoHc3yrcA%2FEmoENIbxcYfBzQx8CPzL9cKWbVw7DfdUx8iB5k0Zogh9e8sDXrOO1pJEvRKLT6U5HEARKsze3qN369G1fPyKCxKri8Q28A%2FGD1qbg6CqbmJtBVp39YQmwV%2FOXRqD6ZeWswDpnl6bYE65b2t0STPXPEQ2byIjIi3aeshl6BPsleN666SESaX1wxb3BSRQQGYDapG9ueUg1K1VIGD86WqATaLLuBZkI4Gmgy8%2F1jVKPvQY2V5%2FIBxpBWECF2naEOO%2FU28ZAVCTxthtlEu7730i5wwLauI9A4MCx1hAeGca0fqmOmjw6NfOwy1JqwpFN%2F4oAr49vRblaJkKzCawoJYd3ALVoDHss%2BWNLFZ6t3sQ8%2F5jLZaUr0Dmdgx5WEC72j9mvjiy8I4Sabjxs%2Fxn%2FbKs3kybhd7ULN6qfEmqJN%2Fl2htxS48GVpzYYelGBo%2FxUfoyQVe8VehvswwHBRzB98qGkIzGzcMQJ5VXURaXd3VxtYfpsOErZEvxgjBcKaPDOdxD5%2BDHxBiXE959SMF9zbxRV8cCL0QBFMltuUh%2F183RzFEh%2BACwDrahZYg0VzPfGjdtAVqmPpLlwjizrqUbkRoYfT8Va9YHu%2Fs4UCVQmpWxmFvngeHMkJU70J3XJ1MO%2Fvvr4GOqUB7aW0ZNN7eJYPdn5UeeMKZ9b%2BXBibCDFfF95RWLoDNemK4EtzQCVb9brAlqwnwdmnuPmqCCo5X3fbnbS3sZiIE5uvHXKf2ZgXqyoT9UCOCMZQAfxY1ZIkmDTaEUsR%2B0iY1MVTaszOvehkQ%2FaDHQbefsL2PNzo2PSuWQLNc9%2B12eEm9o8KKLmdkbenCNWVjl6TpZDoN0EKx56DZhq9lixSSw9kqDeb&X-Amz-Signature=8222d683fc34edced9045e3902fd3a35c3341532b39a5bd13b005f035375ea67&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
