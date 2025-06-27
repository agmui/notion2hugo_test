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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJ3KGOT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCc7bWXuruaG7KMFHTUO9%2BaTB%2F9IDoTJqI0wqzyKYmjZwIgW59A8R10TcdYnXBpXtrUBCahlop5bXWKGb9eFzIPzxYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDG2%2BhO0SZVNuw3Vt4ircA9poz%2FAbWSnLALdQHCJd5RJMk1Rrpris8Z4fV%2B4LkDOwq7Evq1cKrWSg6VeuSaGaMUGSDZFfOKaBTEaw1sQMBWQq2dPao%2FmhoztUX%2BXiYY%2BbIkgZVbQtSDrU7%2FNUixKhXQDg%2FExs2k08q%2BXI6fK8yVjxhm8PsB57n7usmp5awbxvyzEniE9OzCV3zP12Sw8OMUKA2ShINMsaRPmySHgEtums1u6BLW7kv%2FXuNhkV3LH3dnJZOCBZv2v6iVExgJAFVxcUSzk8568I4yBRI5vXNXeRK4bGXZ%2BEYlNC0UkrMW1uu4V4Xe5C43Pp92NeUWkt891Hm2opQgkki58s4gt5L23yV%2FqQLWtFBURVPIuPKBX%2Fh64AWN9ReNHXzOFnN1rSqd%2FTten7RfmiutMWjKN7Eh8Ajl6jMAUX%2F0AiD4QlyEQAP%2FjVtdgJQgaNbjjWl3QKfr%2Fo8Ti2LpWxkkQu%2F5Upq4KxpO4DBOEYE99Hqltr7sSw4TpyutgK%2F8tYRDlXBATqQVUFOQO%2F1U%2Bv%2BqytUY92ZCYghgrRRLurE5HQSAu8DqblSoEHNA0xz8gU6mmxC68xnUX39BvuNGxcYN5LM6fGSU%2FLfRNMIRoQsX3R%2F%2Bh2MAA3lmsheiHeMIkmgREqMIv198IGOqUBiRlopqKUhFdZo29qkoQtU1wSmow6ob6ZbhrmB227e4BoorzutQXHDeLSasZK1NztpO5GzeN%2BI9c%2FeuP4ErLkNP7GYDTAPmBtBjTGP7%2FUs1MJ4w9YAgGa23sM7aJwN4isa0tlK0SmLycGnWKUFJFE7Gr1xWWJzTj2hLSlCZfjn6Vn7V28HuLzn6YnR2qOHFQWU6IYhdb%2FiY5t4dn6ybW9pw5LdQRp&X-Amz-Signature=80bd33cc2aa93b9bae3613d3768a6631ea5890ad1f4981f2ebc63654409e4a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJ3KGOT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCc7bWXuruaG7KMFHTUO9%2BaTB%2F9IDoTJqI0wqzyKYmjZwIgW59A8R10TcdYnXBpXtrUBCahlop5bXWKGb9eFzIPzxYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDG2%2BhO0SZVNuw3Vt4ircA9poz%2FAbWSnLALdQHCJd5RJMk1Rrpris8Z4fV%2B4LkDOwq7Evq1cKrWSg6VeuSaGaMUGSDZFfOKaBTEaw1sQMBWQq2dPao%2FmhoztUX%2BXiYY%2BbIkgZVbQtSDrU7%2FNUixKhXQDg%2FExs2k08q%2BXI6fK8yVjxhm8PsB57n7usmp5awbxvyzEniE9OzCV3zP12Sw8OMUKA2ShINMsaRPmySHgEtums1u6BLW7kv%2FXuNhkV3LH3dnJZOCBZv2v6iVExgJAFVxcUSzk8568I4yBRI5vXNXeRK4bGXZ%2BEYlNC0UkrMW1uu4V4Xe5C43Pp92NeUWkt891Hm2opQgkki58s4gt5L23yV%2FqQLWtFBURVPIuPKBX%2Fh64AWN9ReNHXzOFnN1rSqd%2FTten7RfmiutMWjKN7Eh8Ajl6jMAUX%2F0AiD4QlyEQAP%2FjVtdgJQgaNbjjWl3QKfr%2Fo8Ti2LpWxkkQu%2F5Upq4KxpO4DBOEYE99Hqltr7sSw4TpyutgK%2F8tYRDlXBATqQVUFOQO%2F1U%2Bv%2BqytUY92ZCYghgrRRLurE5HQSAu8DqblSoEHNA0xz8gU6mmxC68xnUX39BvuNGxcYN5LM6fGSU%2FLfRNMIRoQsX3R%2F%2Bh2MAA3lmsheiHeMIkmgREqMIv198IGOqUBiRlopqKUhFdZo29qkoQtU1wSmow6ob6ZbhrmB227e4BoorzutQXHDeLSasZK1NztpO5GzeN%2BI9c%2FeuP4ErLkNP7GYDTAPmBtBjTGP7%2FUs1MJ4w9YAgGa23sM7aJwN4isa0tlK0SmLycGnWKUFJFE7Gr1xWWJzTj2hLSlCZfjn6Vn7V28HuLzn6YnR2qOHFQWU6IYhdb%2FiY5t4dn6ybW9pw5LdQRp&X-Amz-Signature=b250c89daa0dcc97a06bf6a046ccc36dbca81c432df50d49c2c0ee1de7fd2df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJ3KGOT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCc7bWXuruaG7KMFHTUO9%2BaTB%2F9IDoTJqI0wqzyKYmjZwIgW59A8R10TcdYnXBpXtrUBCahlop5bXWKGb9eFzIPzxYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDG2%2BhO0SZVNuw3Vt4ircA9poz%2FAbWSnLALdQHCJd5RJMk1Rrpris8Z4fV%2B4LkDOwq7Evq1cKrWSg6VeuSaGaMUGSDZFfOKaBTEaw1sQMBWQq2dPao%2FmhoztUX%2BXiYY%2BbIkgZVbQtSDrU7%2FNUixKhXQDg%2FExs2k08q%2BXI6fK8yVjxhm8PsB57n7usmp5awbxvyzEniE9OzCV3zP12Sw8OMUKA2ShINMsaRPmySHgEtums1u6BLW7kv%2FXuNhkV3LH3dnJZOCBZv2v6iVExgJAFVxcUSzk8568I4yBRI5vXNXeRK4bGXZ%2BEYlNC0UkrMW1uu4V4Xe5C43Pp92NeUWkt891Hm2opQgkki58s4gt5L23yV%2FqQLWtFBURVPIuPKBX%2Fh64AWN9ReNHXzOFnN1rSqd%2FTten7RfmiutMWjKN7Eh8Ajl6jMAUX%2F0AiD4QlyEQAP%2FjVtdgJQgaNbjjWl3QKfr%2Fo8Ti2LpWxkkQu%2F5Upq4KxpO4DBOEYE99Hqltr7sSw4TpyutgK%2F8tYRDlXBATqQVUFOQO%2F1U%2Bv%2BqytUY92ZCYghgrRRLurE5HQSAu8DqblSoEHNA0xz8gU6mmxC68xnUX39BvuNGxcYN5LM6fGSU%2FLfRNMIRoQsX3R%2F%2Bh2MAA3lmsheiHeMIkmgREqMIv198IGOqUBiRlopqKUhFdZo29qkoQtU1wSmow6ob6ZbhrmB227e4BoorzutQXHDeLSasZK1NztpO5GzeN%2BI9c%2FeuP4ErLkNP7GYDTAPmBtBjTGP7%2FUs1MJ4w9YAgGa23sM7aJwN4isa0tlK0SmLycGnWKUFJFE7Gr1xWWJzTj2hLSlCZfjn6Vn7V28HuLzn6YnR2qOHFQWU6IYhdb%2FiY5t4dn6ybW9pw5LdQRp&X-Amz-Signature=21b4bcb7f130f53aff1da7b421a09b788adc8a5893c6b833884eaeab48fa1fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJ3KGOT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCc7bWXuruaG7KMFHTUO9%2BaTB%2F9IDoTJqI0wqzyKYmjZwIgW59A8R10TcdYnXBpXtrUBCahlop5bXWKGb9eFzIPzxYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDG2%2BhO0SZVNuw3Vt4ircA9poz%2FAbWSnLALdQHCJd5RJMk1Rrpris8Z4fV%2B4LkDOwq7Evq1cKrWSg6VeuSaGaMUGSDZFfOKaBTEaw1sQMBWQq2dPao%2FmhoztUX%2BXiYY%2BbIkgZVbQtSDrU7%2FNUixKhXQDg%2FExs2k08q%2BXI6fK8yVjxhm8PsB57n7usmp5awbxvyzEniE9OzCV3zP12Sw8OMUKA2ShINMsaRPmySHgEtums1u6BLW7kv%2FXuNhkV3LH3dnJZOCBZv2v6iVExgJAFVxcUSzk8568I4yBRI5vXNXeRK4bGXZ%2BEYlNC0UkrMW1uu4V4Xe5C43Pp92NeUWkt891Hm2opQgkki58s4gt5L23yV%2FqQLWtFBURVPIuPKBX%2Fh64AWN9ReNHXzOFnN1rSqd%2FTten7RfmiutMWjKN7Eh8Ajl6jMAUX%2F0AiD4QlyEQAP%2FjVtdgJQgaNbjjWl3QKfr%2Fo8Ti2LpWxkkQu%2F5Upq4KxpO4DBOEYE99Hqltr7sSw4TpyutgK%2F8tYRDlXBATqQVUFOQO%2F1U%2Bv%2BqytUY92ZCYghgrRRLurE5HQSAu8DqblSoEHNA0xz8gU6mmxC68xnUX39BvuNGxcYN5LM6fGSU%2FLfRNMIRoQsX3R%2F%2Bh2MAA3lmsheiHeMIkmgREqMIv198IGOqUBiRlopqKUhFdZo29qkoQtU1wSmow6ob6ZbhrmB227e4BoorzutQXHDeLSasZK1NztpO5GzeN%2BI9c%2FeuP4ErLkNP7GYDTAPmBtBjTGP7%2FUs1MJ4w9YAgGa23sM7aJwN4isa0tlK0SmLycGnWKUFJFE7Gr1xWWJzTj2hLSlCZfjn6Vn7V28HuLzn6YnR2qOHFQWU6IYhdb%2FiY5t4dn6ybW9pw5LdQRp&X-Amz-Signature=1198f7e839cb159c819e6baf8a999d25f84f7c4a7e891bff33a6cc9a29f4b9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJ3KGOT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCc7bWXuruaG7KMFHTUO9%2BaTB%2F9IDoTJqI0wqzyKYmjZwIgW59A8R10TcdYnXBpXtrUBCahlop5bXWKGb9eFzIPzxYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDG2%2BhO0SZVNuw3Vt4ircA9poz%2FAbWSnLALdQHCJd5RJMk1Rrpris8Z4fV%2B4LkDOwq7Evq1cKrWSg6VeuSaGaMUGSDZFfOKaBTEaw1sQMBWQq2dPao%2FmhoztUX%2BXiYY%2BbIkgZVbQtSDrU7%2FNUixKhXQDg%2FExs2k08q%2BXI6fK8yVjxhm8PsB57n7usmp5awbxvyzEniE9OzCV3zP12Sw8OMUKA2ShINMsaRPmySHgEtums1u6BLW7kv%2FXuNhkV3LH3dnJZOCBZv2v6iVExgJAFVxcUSzk8568I4yBRI5vXNXeRK4bGXZ%2BEYlNC0UkrMW1uu4V4Xe5C43Pp92NeUWkt891Hm2opQgkki58s4gt5L23yV%2FqQLWtFBURVPIuPKBX%2Fh64AWN9ReNHXzOFnN1rSqd%2FTten7RfmiutMWjKN7Eh8Ajl6jMAUX%2F0AiD4QlyEQAP%2FjVtdgJQgaNbjjWl3QKfr%2Fo8Ti2LpWxkkQu%2F5Upq4KxpO4DBOEYE99Hqltr7sSw4TpyutgK%2F8tYRDlXBATqQVUFOQO%2F1U%2Bv%2BqytUY92ZCYghgrRRLurE5HQSAu8DqblSoEHNA0xz8gU6mmxC68xnUX39BvuNGxcYN5LM6fGSU%2FLfRNMIRoQsX3R%2F%2Bh2MAA3lmsheiHeMIkmgREqMIv198IGOqUBiRlopqKUhFdZo29qkoQtU1wSmow6ob6ZbhrmB227e4BoorzutQXHDeLSasZK1NztpO5GzeN%2BI9c%2FeuP4ErLkNP7GYDTAPmBtBjTGP7%2FUs1MJ4w9YAgGa23sM7aJwN4isa0tlK0SmLycGnWKUFJFE7Gr1xWWJzTj2hLSlCZfjn6Vn7V28HuLzn6YnR2qOHFQWU6IYhdb%2FiY5t4dn6ybW9pw5LdQRp&X-Amz-Signature=cc6e5c5034e8623a2c4c91c0055e3fea939af99a745433d5e7548050d2f2dd25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJ3KGOT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCc7bWXuruaG7KMFHTUO9%2BaTB%2F9IDoTJqI0wqzyKYmjZwIgW59A8R10TcdYnXBpXtrUBCahlop5bXWKGb9eFzIPzxYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDG2%2BhO0SZVNuw3Vt4ircA9poz%2FAbWSnLALdQHCJd5RJMk1Rrpris8Z4fV%2B4LkDOwq7Evq1cKrWSg6VeuSaGaMUGSDZFfOKaBTEaw1sQMBWQq2dPao%2FmhoztUX%2BXiYY%2BbIkgZVbQtSDrU7%2FNUixKhXQDg%2FExs2k08q%2BXI6fK8yVjxhm8PsB57n7usmp5awbxvyzEniE9OzCV3zP12Sw8OMUKA2ShINMsaRPmySHgEtums1u6BLW7kv%2FXuNhkV3LH3dnJZOCBZv2v6iVExgJAFVxcUSzk8568I4yBRI5vXNXeRK4bGXZ%2BEYlNC0UkrMW1uu4V4Xe5C43Pp92NeUWkt891Hm2opQgkki58s4gt5L23yV%2FqQLWtFBURVPIuPKBX%2Fh64AWN9ReNHXzOFnN1rSqd%2FTten7RfmiutMWjKN7Eh8Ajl6jMAUX%2F0AiD4QlyEQAP%2FjVtdgJQgaNbjjWl3QKfr%2Fo8Ti2LpWxkkQu%2F5Upq4KxpO4DBOEYE99Hqltr7sSw4TpyutgK%2F8tYRDlXBATqQVUFOQO%2F1U%2Bv%2BqytUY92ZCYghgrRRLurE5HQSAu8DqblSoEHNA0xz8gU6mmxC68xnUX39BvuNGxcYN5LM6fGSU%2FLfRNMIRoQsX3R%2F%2Bh2MAA3lmsheiHeMIkmgREqMIv198IGOqUBiRlopqKUhFdZo29qkoQtU1wSmow6ob6ZbhrmB227e4BoorzutQXHDeLSasZK1NztpO5GzeN%2BI9c%2FeuP4ErLkNP7GYDTAPmBtBjTGP7%2FUs1MJ4w9YAgGa23sM7aJwN4isa0tlK0SmLycGnWKUFJFE7Gr1xWWJzTj2hLSlCZfjn6Vn7V28HuLzn6YnR2qOHFQWU6IYhdb%2FiY5t4dn6ybW9pw5LdQRp&X-Amz-Signature=b8585faf9e900dc55597e37ddfe6cae4593fa98533d4ff8f5029066d947bea0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJ3KGOT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCc7bWXuruaG7KMFHTUO9%2BaTB%2F9IDoTJqI0wqzyKYmjZwIgW59A8R10TcdYnXBpXtrUBCahlop5bXWKGb9eFzIPzxYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDG2%2BhO0SZVNuw3Vt4ircA9poz%2FAbWSnLALdQHCJd5RJMk1Rrpris8Z4fV%2B4LkDOwq7Evq1cKrWSg6VeuSaGaMUGSDZFfOKaBTEaw1sQMBWQq2dPao%2FmhoztUX%2BXiYY%2BbIkgZVbQtSDrU7%2FNUixKhXQDg%2FExs2k08q%2BXI6fK8yVjxhm8PsB57n7usmp5awbxvyzEniE9OzCV3zP12Sw8OMUKA2ShINMsaRPmySHgEtums1u6BLW7kv%2FXuNhkV3LH3dnJZOCBZv2v6iVExgJAFVxcUSzk8568I4yBRI5vXNXeRK4bGXZ%2BEYlNC0UkrMW1uu4V4Xe5C43Pp92NeUWkt891Hm2opQgkki58s4gt5L23yV%2FqQLWtFBURVPIuPKBX%2Fh64AWN9ReNHXzOFnN1rSqd%2FTten7RfmiutMWjKN7Eh8Ajl6jMAUX%2F0AiD4QlyEQAP%2FjVtdgJQgaNbjjWl3QKfr%2Fo8Ti2LpWxkkQu%2F5Upq4KxpO4DBOEYE99Hqltr7sSw4TpyutgK%2F8tYRDlXBATqQVUFOQO%2F1U%2Bv%2BqytUY92ZCYghgrRRLurE5HQSAu8DqblSoEHNA0xz8gU6mmxC68xnUX39BvuNGxcYN5LM6fGSU%2FLfRNMIRoQsX3R%2F%2Bh2MAA3lmsheiHeMIkmgREqMIv198IGOqUBiRlopqKUhFdZo29qkoQtU1wSmow6ob6ZbhrmB227e4BoorzutQXHDeLSasZK1NztpO5GzeN%2BI9c%2FeuP4ErLkNP7GYDTAPmBtBjTGP7%2FUs1MJ4w9YAgGa23sM7aJwN4isa0tlK0SmLycGnWKUFJFE7Gr1xWWJzTj2hLSlCZfjn6Vn7V28HuLzn6YnR2qOHFQWU6IYhdb%2FiY5t4dn6ybW9pw5LdQRp&X-Amz-Signature=8902e38d71bb10e54c636f464cc281d556186a4b2521a1595969ce67f9333fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
