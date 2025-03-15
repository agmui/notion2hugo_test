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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRN4DI7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU9HCCG9ueSZspbp5Sbms9MwSAkNZuYxL0XyimiqE5qAiEAnIhO08t1mTErp5W8A4ZlknPhZXrZOZBgPqk4DcBDnbYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGk6OkkqR8UsDapasyrcA3V8XvwX10SNpDzG3HrSKRVWtAmPCsIrh%2FrcBcesEH8ii94XsUGM26QWGMTT0x%2FFgKEO6s6mOp2d4F4i8ltfwpngEpET3k8EATZtWxnLdj3bky0o8ma0esdtSO%2B6%2B7esNhp%2Fjbtwda5KSFfYYSJKDSFmeA4b%2FeYINK5a%2FXq9xmrUOjTePEOY3FdguVGOsEPraxAHs8rL%2FqtIjUbX6xew5YLvrYra9hs1xbVQEhmNRUmAUUy9S8ccQ%2FsM8zX9MqHVanAM5DqKaQQg1QgS8NqNI%2FMNXzRxyfHOzlztPW9XXuR1VgRTx84pIQMcAGaVFtuc24W7B0v2nuyFBqzzWRQYJK824JFUR0uamyo4Lju1WO%2BL5Oyj0PyPd4LiYeLazB8CVWlPqdFCBhpSdZyjvZL5Ndxh%2FNKQpfYde8Y27PmUBJPY4PuRk%2FrI5KtxyMWjPXyCd0SciTc4xE1%2BiYDBiGs3CX%2BTLiQFfvC3L24EoY9GB3qqJUdy0snF%2BPKMgeP7Ewr0zUNQ498bqJkmffEjV%2FbHIZx0%2Bc2VjMa7CL94HA4bW3wbkfpP0dHyFfgWTu2OO2cdQVHWnWgyyRE%2BynAJbwp4H7dawPfZhLhEDLCbx7BY0aQAauA4%2F%2FRaqN22pK60MKuO174GOqUB%2F1pYfeAD7zaVWN7Urts1YWWWZvTaPPl0PueNZWDRWngcYODYEyR%2BppgPuZqEgAgO%2FuGurNri84i7FufHOcIf%2BD3szubiIJgsuUE9u7pNukmlySmhX9qO14ivzQqnQFPtPA%2BDhKHqBVYDqLoiV%2FAqdBId0Pip%2BZ8FRmhnD8pfW1satjpX8nC0IIeQ7ueGxUYsd7FDmCixoEOx6qOTpPPFTHTtXBFU&X-Amz-Signature=18d2b36d7005ad641b30ddbaae83ed62625476c51443a242ebf7a61807cc2e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRN4DI7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU9HCCG9ueSZspbp5Sbms9MwSAkNZuYxL0XyimiqE5qAiEAnIhO08t1mTErp5W8A4ZlknPhZXrZOZBgPqk4DcBDnbYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGk6OkkqR8UsDapasyrcA3V8XvwX10SNpDzG3HrSKRVWtAmPCsIrh%2FrcBcesEH8ii94XsUGM26QWGMTT0x%2FFgKEO6s6mOp2d4F4i8ltfwpngEpET3k8EATZtWxnLdj3bky0o8ma0esdtSO%2B6%2B7esNhp%2Fjbtwda5KSFfYYSJKDSFmeA4b%2FeYINK5a%2FXq9xmrUOjTePEOY3FdguVGOsEPraxAHs8rL%2FqtIjUbX6xew5YLvrYra9hs1xbVQEhmNRUmAUUy9S8ccQ%2FsM8zX9MqHVanAM5DqKaQQg1QgS8NqNI%2FMNXzRxyfHOzlztPW9XXuR1VgRTx84pIQMcAGaVFtuc24W7B0v2nuyFBqzzWRQYJK824JFUR0uamyo4Lju1WO%2BL5Oyj0PyPd4LiYeLazB8CVWlPqdFCBhpSdZyjvZL5Ndxh%2FNKQpfYde8Y27PmUBJPY4PuRk%2FrI5KtxyMWjPXyCd0SciTc4xE1%2BiYDBiGs3CX%2BTLiQFfvC3L24EoY9GB3qqJUdy0snF%2BPKMgeP7Ewr0zUNQ498bqJkmffEjV%2FbHIZx0%2Bc2VjMa7CL94HA4bW3wbkfpP0dHyFfgWTu2OO2cdQVHWnWgyyRE%2BynAJbwp4H7dawPfZhLhEDLCbx7BY0aQAauA4%2F%2FRaqN22pK60MKuO174GOqUB%2F1pYfeAD7zaVWN7Urts1YWWWZvTaPPl0PueNZWDRWngcYODYEyR%2BppgPuZqEgAgO%2FuGurNri84i7FufHOcIf%2BD3szubiIJgsuUE9u7pNukmlySmhX9qO14ivzQqnQFPtPA%2BDhKHqBVYDqLoiV%2FAqdBId0Pip%2BZ8FRmhnD8pfW1satjpX8nC0IIeQ7ueGxUYsd7FDmCixoEOx6qOTpPPFTHTtXBFU&X-Amz-Signature=98cef0f9fc601d98c00f949ea07e780cffaf5df43da6bf5d73883664ef46634b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRN4DI7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU9HCCG9ueSZspbp5Sbms9MwSAkNZuYxL0XyimiqE5qAiEAnIhO08t1mTErp5W8A4ZlknPhZXrZOZBgPqk4DcBDnbYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGk6OkkqR8UsDapasyrcA3V8XvwX10SNpDzG3HrSKRVWtAmPCsIrh%2FrcBcesEH8ii94XsUGM26QWGMTT0x%2FFgKEO6s6mOp2d4F4i8ltfwpngEpET3k8EATZtWxnLdj3bky0o8ma0esdtSO%2B6%2B7esNhp%2Fjbtwda5KSFfYYSJKDSFmeA4b%2FeYINK5a%2FXq9xmrUOjTePEOY3FdguVGOsEPraxAHs8rL%2FqtIjUbX6xew5YLvrYra9hs1xbVQEhmNRUmAUUy9S8ccQ%2FsM8zX9MqHVanAM5DqKaQQg1QgS8NqNI%2FMNXzRxyfHOzlztPW9XXuR1VgRTx84pIQMcAGaVFtuc24W7B0v2nuyFBqzzWRQYJK824JFUR0uamyo4Lju1WO%2BL5Oyj0PyPd4LiYeLazB8CVWlPqdFCBhpSdZyjvZL5Ndxh%2FNKQpfYde8Y27PmUBJPY4PuRk%2FrI5KtxyMWjPXyCd0SciTc4xE1%2BiYDBiGs3CX%2BTLiQFfvC3L24EoY9GB3qqJUdy0snF%2BPKMgeP7Ewr0zUNQ498bqJkmffEjV%2FbHIZx0%2Bc2VjMa7CL94HA4bW3wbkfpP0dHyFfgWTu2OO2cdQVHWnWgyyRE%2BynAJbwp4H7dawPfZhLhEDLCbx7BY0aQAauA4%2F%2FRaqN22pK60MKuO174GOqUB%2F1pYfeAD7zaVWN7Urts1YWWWZvTaPPl0PueNZWDRWngcYODYEyR%2BppgPuZqEgAgO%2FuGurNri84i7FufHOcIf%2BD3szubiIJgsuUE9u7pNukmlySmhX9qO14ivzQqnQFPtPA%2BDhKHqBVYDqLoiV%2FAqdBId0Pip%2BZ8FRmhnD8pfW1satjpX8nC0IIeQ7ueGxUYsd7FDmCixoEOx6qOTpPPFTHTtXBFU&X-Amz-Signature=54bf1f4a6c183f380a688388fc56a6017c2331f645e1a0c8316c06daa6f75c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRN4DI7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU9HCCG9ueSZspbp5Sbms9MwSAkNZuYxL0XyimiqE5qAiEAnIhO08t1mTErp5W8A4ZlknPhZXrZOZBgPqk4DcBDnbYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGk6OkkqR8UsDapasyrcA3V8XvwX10SNpDzG3HrSKRVWtAmPCsIrh%2FrcBcesEH8ii94XsUGM26QWGMTT0x%2FFgKEO6s6mOp2d4F4i8ltfwpngEpET3k8EATZtWxnLdj3bky0o8ma0esdtSO%2B6%2B7esNhp%2Fjbtwda5KSFfYYSJKDSFmeA4b%2FeYINK5a%2FXq9xmrUOjTePEOY3FdguVGOsEPraxAHs8rL%2FqtIjUbX6xew5YLvrYra9hs1xbVQEhmNRUmAUUy9S8ccQ%2FsM8zX9MqHVanAM5DqKaQQg1QgS8NqNI%2FMNXzRxyfHOzlztPW9XXuR1VgRTx84pIQMcAGaVFtuc24W7B0v2nuyFBqzzWRQYJK824JFUR0uamyo4Lju1WO%2BL5Oyj0PyPd4LiYeLazB8CVWlPqdFCBhpSdZyjvZL5Ndxh%2FNKQpfYde8Y27PmUBJPY4PuRk%2FrI5KtxyMWjPXyCd0SciTc4xE1%2BiYDBiGs3CX%2BTLiQFfvC3L24EoY9GB3qqJUdy0snF%2BPKMgeP7Ewr0zUNQ498bqJkmffEjV%2FbHIZx0%2Bc2VjMa7CL94HA4bW3wbkfpP0dHyFfgWTu2OO2cdQVHWnWgyyRE%2BynAJbwp4H7dawPfZhLhEDLCbx7BY0aQAauA4%2F%2FRaqN22pK60MKuO174GOqUB%2F1pYfeAD7zaVWN7Urts1YWWWZvTaPPl0PueNZWDRWngcYODYEyR%2BppgPuZqEgAgO%2FuGurNri84i7FufHOcIf%2BD3szubiIJgsuUE9u7pNukmlySmhX9qO14ivzQqnQFPtPA%2BDhKHqBVYDqLoiV%2FAqdBId0Pip%2BZ8FRmhnD8pfW1satjpX8nC0IIeQ7ueGxUYsd7FDmCixoEOx6qOTpPPFTHTtXBFU&X-Amz-Signature=8fef031f16ff37e049e1de05f40efe21d2755539b67063e43ff5d1521ede1dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRN4DI7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU9HCCG9ueSZspbp5Sbms9MwSAkNZuYxL0XyimiqE5qAiEAnIhO08t1mTErp5W8A4ZlknPhZXrZOZBgPqk4DcBDnbYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGk6OkkqR8UsDapasyrcA3V8XvwX10SNpDzG3HrSKRVWtAmPCsIrh%2FrcBcesEH8ii94XsUGM26QWGMTT0x%2FFgKEO6s6mOp2d4F4i8ltfwpngEpET3k8EATZtWxnLdj3bky0o8ma0esdtSO%2B6%2B7esNhp%2Fjbtwda5KSFfYYSJKDSFmeA4b%2FeYINK5a%2FXq9xmrUOjTePEOY3FdguVGOsEPraxAHs8rL%2FqtIjUbX6xew5YLvrYra9hs1xbVQEhmNRUmAUUy9S8ccQ%2FsM8zX9MqHVanAM5DqKaQQg1QgS8NqNI%2FMNXzRxyfHOzlztPW9XXuR1VgRTx84pIQMcAGaVFtuc24W7B0v2nuyFBqzzWRQYJK824JFUR0uamyo4Lju1WO%2BL5Oyj0PyPd4LiYeLazB8CVWlPqdFCBhpSdZyjvZL5Ndxh%2FNKQpfYde8Y27PmUBJPY4PuRk%2FrI5KtxyMWjPXyCd0SciTc4xE1%2BiYDBiGs3CX%2BTLiQFfvC3L24EoY9GB3qqJUdy0snF%2BPKMgeP7Ewr0zUNQ498bqJkmffEjV%2FbHIZx0%2Bc2VjMa7CL94HA4bW3wbkfpP0dHyFfgWTu2OO2cdQVHWnWgyyRE%2BynAJbwp4H7dawPfZhLhEDLCbx7BY0aQAauA4%2F%2FRaqN22pK60MKuO174GOqUB%2F1pYfeAD7zaVWN7Urts1YWWWZvTaPPl0PueNZWDRWngcYODYEyR%2BppgPuZqEgAgO%2FuGurNri84i7FufHOcIf%2BD3szubiIJgsuUE9u7pNukmlySmhX9qO14ivzQqnQFPtPA%2BDhKHqBVYDqLoiV%2FAqdBId0Pip%2BZ8FRmhnD8pfW1satjpX8nC0IIeQ7ueGxUYsd7FDmCixoEOx6qOTpPPFTHTtXBFU&X-Amz-Signature=4cfc8be6608b3667743080cef42bd2e8d74b78b463ff312edf0a4360bbb0ad6c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRN4DI7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU9HCCG9ueSZspbp5Sbms9MwSAkNZuYxL0XyimiqE5qAiEAnIhO08t1mTErp5W8A4ZlknPhZXrZOZBgPqk4DcBDnbYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGk6OkkqR8UsDapasyrcA3V8XvwX10SNpDzG3HrSKRVWtAmPCsIrh%2FrcBcesEH8ii94XsUGM26QWGMTT0x%2FFgKEO6s6mOp2d4F4i8ltfwpngEpET3k8EATZtWxnLdj3bky0o8ma0esdtSO%2B6%2B7esNhp%2Fjbtwda5KSFfYYSJKDSFmeA4b%2FeYINK5a%2FXq9xmrUOjTePEOY3FdguVGOsEPraxAHs8rL%2FqtIjUbX6xew5YLvrYra9hs1xbVQEhmNRUmAUUy9S8ccQ%2FsM8zX9MqHVanAM5DqKaQQg1QgS8NqNI%2FMNXzRxyfHOzlztPW9XXuR1VgRTx84pIQMcAGaVFtuc24W7B0v2nuyFBqzzWRQYJK824JFUR0uamyo4Lju1WO%2BL5Oyj0PyPd4LiYeLazB8CVWlPqdFCBhpSdZyjvZL5Ndxh%2FNKQpfYde8Y27PmUBJPY4PuRk%2FrI5KtxyMWjPXyCd0SciTc4xE1%2BiYDBiGs3CX%2BTLiQFfvC3L24EoY9GB3qqJUdy0snF%2BPKMgeP7Ewr0zUNQ498bqJkmffEjV%2FbHIZx0%2Bc2VjMa7CL94HA4bW3wbkfpP0dHyFfgWTu2OO2cdQVHWnWgyyRE%2BynAJbwp4H7dawPfZhLhEDLCbx7BY0aQAauA4%2F%2FRaqN22pK60MKuO174GOqUB%2F1pYfeAD7zaVWN7Urts1YWWWZvTaPPl0PueNZWDRWngcYODYEyR%2BppgPuZqEgAgO%2FuGurNri84i7FufHOcIf%2BD3szubiIJgsuUE9u7pNukmlySmhX9qO14ivzQqnQFPtPA%2BDhKHqBVYDqLoiV%2FAqdBId0Pip%2BZ8FRmhnD8pfW1satjpX8nC0IIeQ7ueGxUYsd7FDmCixoEOx6qOTpPPFTHTtXBFU&X-Amz-Signature=d7f0f7cb2aeb5d8f4a1c2474d8417a5535d136010bb909878fbbe8663be3a6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRN4DI7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU9HCCG9ueSZspbp5Sbms9MwSAkNZuYxL0XyimiqE5qAiEAnIhO08t1mTErp5W8A4ZlknPhZXrZOZBgPqk4DcBDnbYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGk6OkkqR8UsDapasyrcA3V8XvwX10SNpDzG3HrSKRVWtAmPCsIrh%2FrcBcesEH8ii94XsUGM26QWGMTT0x%2FFgKEO6s6mOp2d4F4i8ltfwpngEpET3k8EATZtWxnLdj3bky0o8ma0esdtSO%2B6%2B7esNhp%2Fjbtwda5KSFfYYSJKDSFmeA4b%2FeYINK5a%2FXq9xmrUOjTePEOY3FdguVGOsEPraxAHs8rL%2FqtIjUbX6xew5YLvrYra9hs1xbVQEhmNRUmAUUy9S8ccQ%2FsM8zX9MqHVanAM5DqKaQQg1QgS8NqNI%2FMNXzRxyfHOzlztPW9XXuR1VgRTx84pIQMcAGaVFtuc24W7B0v2nuyFBqzzWRQYJK824JFUR0uamyo4Lju1WO%2BL5Oyj0PyPd4LiYeLazB8CVWlPqdFCBhpSdZyjvZL5Ndxh%2FNKQpfYde8Y27PmUBJPY4PuRk%2FrI5KtxyMWjPXyCd0SciTc4xE1%2BiYDBiGs3CX%2BTLiQFfvC3L24EoY9GB3qqJUdy0snF%2BPKMgeP7Ewr0zUNQ498bqJkmffEjV%2FbHIZx0%2Bc2VjMa7CL94HA4bW3wbkfpP0dHyFfgWTu2OO2cdQVHWnWgyyRE%2BynAJbwp4H7dawPfZhLhEDLCbx7BY0aQAauA4%2F%2FRaqN22pK60MKuO174GOqUB%2F1pYfeAD7zaVWN7Urts1YWWWZvTaPPl0PueNZWDRWngcYODYEyR%2BppgPuZqEgAgO%2FuGurNri84i7FufHOcIf%2BD3szubiIJgsuUE9u7pNukmlySmhX9qO14ivzQqnQFPtPA%2BDhKHqBVYDqLoiV%2FAqdBId0Pip%2BZ8FRmhnD8pfW1satjpX8nC0IIeQ7ueGxUYsd7FDmCixoEOx6qOTpPPFTHTtXBFU&X-Amz-Signature=9a46735df897103bd04405fc473a5ec0c5a2d5f8037d4568624863c558819b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
