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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BE4NXC4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJVD6G73hL5vstL4KS1H0n%2FJz7odmmoFQkdZ%2BQZfroVAiEAuNwVJlNn%2FP9r0crKhC4UbWolSP7JncM1R8rFqtHoDhUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaml1I4wYJIdKzA2yrcA59ix6%2BFOjoCa8pii76S7rHPnwj%2FO%2B8fuSG1X0I%2BjON5v%2FZTwJM4v8JG32pqkwv%2FtHELM9XS4e7mW%2Fcs5MhuqZug92vrRvFPQeAPF98%2F6bTGd5ga0meHxkA8KqX81tDFmnnoFIamMkXXwv%2FZeedcK21Ly5zR%2BjfXCshBjKJ8R0myEkauHZlRoZ6kLq49CItjmJ%2BMcLXgFHmkKayIDUa16tCXIX5kdfm6%2FrTk4BfQhiyN4GhYWwAkDdR4yiF3IndRZBbUx3YzzHQLWBP%2FavChcPRsJlD87dGwFtMbHlSm%2FCrNxL4pB20wzhyr58j4oBCpL8p9E%2BZoSUio%2Bstq4o4wuoaz1cpiyXO1TZ3eVPj6zo1%2FH9Ug944leqWh8zTsN11EPFU1J6OI6qAhl7dmHmc1CwqViJFxc8tU8ia4ILzv5tAxN%2Fj3Z7T%2BPfNh6xzZ7V8I%2FQNPqpgIwHE63AB%2F2vQfikFhDKe8JXCqPy0g6JRpSo6fyVkkhukriRZOunWTOOEpVkyjSQdd3CIckEuoOQq37Pc%2BgYfCVeOi2BWQRu2tYFHzDD9h9vTmfCgwpMlR4wGZxii5dv536IOAKhmxGBpJfu00T5TW6IvlPSoOSotIgYL6dhSlKHDG7ms%2FHVs3MIrsx8IGOqUB%2FxS%2F33RCSEMtqO9NVSXUEUfY%2F0YA1Icv0K7pUjBKaUt84MnrrnDTbjmm0wHQh5stE1XVr5mBOCFEmLUhqIYpdUngaawS4ar7If3PgjP%2F4tPoKheo4TRAurTR5MHTtQPjPveUfRzq2d6YiEP9%2BImn2PiY%2FB%2BYvWw%2BY63mhvrS3JdY4HKK5AKZ7Err3Hbzis7jewAr%2FfEfsoBriUZHyYC4mvaBqr8w&X-Amz-Signature=0acf778cea67b42ebc704079a4f1006e31b21f008b050a775576aa5fffe61d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BE4NXC4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJVD6G73hL5vstL4KS1H0n%2FJz7odmmoFQkdZ%2BQZfroVAiEAuNwVJlNn%2FP9r0crKhC4UbWolSP7JncM1R8rFqtHoDhUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaml1I4wYJIdKzA2yrcA59ix6%2BFOjoCa8pii76S7rHPnwj%2FO%2B8fuSG1X0I%2BjON5v%2FZTwJM4v8JG32pqkwv%2FtHELM9XS4e7mW%2Fcs5MhuqZug92vrRvFPQeAPF98%2F6bTGd5ga0meHxkA8KqX81tDFmnnoFIamMkXXwv%2FZeedcK21Ly5zR%2BjfXCshBjKJ8R0myEkauHZlRoZ6kLq49CItjmJ%2BMcLXgFHmkKayIDUa16tCXIX5kdfm6%2FrTk4BfQhiyN4GhYWwAkDdR4yiF3IndRZBbUx3YzzHQLWBP%2FavChcPRsJlD87dGwFtMbHlSm%2FCrNxL4pB20wzhyr58j4oBCpL8p9E%2BZoSUio%2Bstq4o4wuoaz1cpiyXO1TZ3eVPj6zo1%2FH9Ug944leqWh8zTsN11EPFU1J6OI6qAhl7dmHmc1CwqViJFxc8tU8ia4ILzv5tAxN%2Fj3Z7T%2BPfNh6xzZ7V8I%2FQNPqpgIwHE63AB%2F2vQfikFhDKe8JXCqPy0g6JRpSo6fyVkkhukriRZOunWTOOEpVkyjSQdd3CIckEuoOQq37Pc%2BgYfCVeOi2BWQRu2tYFHzDD9h9vTmfCgwpMlR4wGZxii5dv536IOAKhmxGBpJfu00T5TW6IvlPSoOSotIgYL6dhSlKHDG7ms%2FHVs3MIrsx8IGOqUB%2FxS%2F33RCSEMtqO9NVSXUEUfY%2F0YA1Icv0K7pUjBKaUt84MnrrnDTbjmm0wHQh5stE1XVr5mBOCFEmLUhqIYpdUngaawS4ar7If3PgjP%2F4tPoKheo4TRAurTR5MHTtQPjPveUfRzq2d6YiEP9%2BImn2PiY%2FB%2BYvWw%2BY63mhvrS3JdY4HKK5AKZ7Err3Hbzis7jewAr%2FfEfsoBriUZHyYC4mvaBqr8w&X-Amz-Signature=3bcb8a9d01b7377fc8ca8858d6634d7ef1d433938fc4f5c8516669d8d6cd2e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BE4NXC4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJVD6G73hL5vstL4KS1H0n%2FJz7odmmoFQkdZ%2BQZfroVAiEAuNwVJlNn%2FP9r0crKhC4UbWolSP7JncM1R8rFqtHoDhUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaml1I4wYJIdKzA2yrcA59ix6%2BFOjoCa8pii76S7rHPnwj%2FO%2B8fuSG1X0I%2BjON5v%2FZTwJM4v8JG32pqkwv%2FtHELM9XS4e7mW%2Fcs5MhuqZug92vrRvFPQeAPF98%2F6bTGd5ga0meHxkA8KqX81tDFmnnoFIamMkXXwv%2FZeedcK21Ly5zR%2BjfXCshBjKJ8R0myEkauHZlRoZ6kLq49CItjmJ%2BMcLXgFHmkKayIDUa16tCXIX5kdfm6%2FrTk4BfQhiyN4GhYWwAkDdR4yiF3IndRZBbUx3YzzHQLWBP%2FavChcPRsJlD87dGwFtMbHlSm%2FCrNxL4pB20wzhyr58j4oBCpL8p9E%2BZoSUio%2Bstq4o4wuoaz1cpiyXO1TZ3eVPj6zo1%2FH9Ug944leqWh8zTsN11EPFU1J6OI6qAhl7dmHmc1CwqViJFxc8tU8ia4ILzv5tAxN%2Fj3Z7T%2BPfNh6xzZ7V8I%2FQNPqpgIwHE63AB%2F2vQfikFhDKe8JXCqPy0g6JRpSo6fyVkkhukriRZOunWTOOEpVkyjSQdd3CIckEuoOQq37Pc%2BgYfCVeOi2BWQRu2tYFHzDD9h9vTmfCgwpMlR4wGZxii5dv536IOAKhmxGBpJfu00T5TW6IvlPSoOSotIgYL6dhSlKHDG7ms%2FHVs3MIrsx8IGOqUB%2FxS%2F33RCSEMtqO9NVSXUEUfY%2F0YA1Icv0K7pUjBKaUt84MnrrnDTbjmm0wHQh5stE1XVr5mBOCFEmLUhqIYpdUngaawS4ar7If3PgjP%2F4tPoKheo4TRAurTR5MHTtQPjPveUfRzq2d6YiEP9%2BImn2PiY%2FB%2BYvWw%2BY63mhvrS3JdY4HKK5AKZ7Err3Hbzis7jewAr%2FfEfsoBriUZHyYC4mvaBqr8w&X-Amz-Signature=b8b623da4bef85accb78d680b4d9399c726ca2d53ea2bd3fbd906d71588d4de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BE4NXC4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJVD6G73hL5vstL4KS1H0n%2FJz7odmmoFQkdZ%2BQZfroVAiEAuNwVJlNn%2FP9r0crKhC4UbWolSP7JncM1R8rFqtHoDhUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaml1I4wYJIdKzA2yrcA59ix6%2BFOjoCa8pii76S7rHPnwj%2FO%2B8fuSG1X0I%2BjON5v%2FZTwJM4v8JG32pqkwv%2FtHELM9XS4e7mW%2Fcs5MhuqZug92vrRvFPQeAPF98%2F6bTGd5ga0meHxkA8KqX81tDFmnnoFIamMkXXwv%2FZeedcK21Ly5zR%2BjfXCshBjKJ8R0myEkauHZlRoZ6kLq49CItjmJ%2BMcLXgFHmkKayIDUa16tCXIX5kdfm6%2FrTk4BfQhiyN4GhYWwAkDdR4yiF3IndRZBbUx3YzzHQLWBP%2FavChcPRsJlD87dGwFtMbHlSm%2FCrNxL4pB20wzhyr58j4oBCpL8p9E%2BZoSUio%2Bstq4o4wuoaz1cpiyXO1TZ3eVPj6zo1%2FH9Ug944leqWh8zTsN11EPFU1J6OI6qAhl7dmHmc1CwqViJFxc8tU8ia4ILzv5tAxN%2Fj3Z7T%2BPfNh6xzZ7V8I%2FQNPqpgIwHE63AB%2F2vQfikFhDKe8JXCqPy0g6JRpSo6fyVkkhukriRZOunWTOOEpVkyjSQdd3CIckEuoOQq37Pc%2BgYfCVeOi2BWQRu2tYFHzDD9h9vTmfCgwpMlR4wGZxii5dv536IOAKhmxGBpJfu00T5TW6IvlPSoOSotIgYL6dhSlKHDG7ms%2FHVs3MIrsx8IGOqUB%2FxS%2F33RCSEMtqO9NVSXUEUfY%2F0YA1Icv0K7pUjBKaUt84MnrrnDTbjmm0wHQh5stE1XVr5mBOCFEmLUhqIYpdUngaawS4ar7If3PgjP%2F4tPoKheo4TRAurTR5MHTtQPjPveUfRzq2d6YiEP9%2BImn2PiY%2FB%2BYvWw%2BY63mhvrS3JdY4HKK5AKZ7Err3Hbzis7jewAr%2FfEfsoBriUZHyYC4mvaBqr8w&X-Amz-Signature=60e670f051551537e6f735339cbab02a5561652d38c03835dab01fc28851904e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BE4NXC4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJVD6G73hL5vstL4KS1H0n%2FJz7odmmoFQkdZ%2BQZfroVAiEAuNwVJlNn%2FP9r0crKhC4UbWolSP7JncM1R8rFqtHoDhUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaml1I4wYJIdKzA2yrcA59ix6%2BFOjoCa8pii76S7rHPnwj%2FO%2B8fuSG1X0I%2BjON5v%2FZTwJM4v8JG32pqkwv%2FtHELM9XS4e7mW%2Fcs5MhuqZug92vrRvFPQeAPF98%2F6bTGd5ga0meHxkA8KqX81tDFmnnoFIamMkXXwv%2FZeedcK21Ly5zR%2BjfXCshBjKJ8R0myEkauHZlRoZ6kLq49CItjmJ%2BMcLXgFHmkKayIDUa16tCXIX5kdfm6%2FrTk4BfQhiyN4GhYWwAkDdR4yiF3IndRZBbUx3YzzHQLWBP%2FavChcPRsJlD87dGwFtMbHlSm%2FCrNxL4pB20wzhyr58j4oBCpL8p9E%2BZoSUio%2Bstq4o4wuoaz1cpiyXO1TZ3eVPj6zo1%2FH9Ug944leqWh8zTsN11EPFU1J6OI6qAhl7dmHmc1CwqViJFxc8tU8ia4ILzv5tAxN%2Fj3Z7T%2BPfNh6xzZ7V8I%2FQNPqpgIwHE63AB%2F2vQfikFhDKe8JXCqPy0g6JRpSo6fyVkkhukriRZOunWTOOEpVkyjSQdd3CIckEuoOQq37Pc%2BgYfCVeOi2BWQRu2tYFHzDD9h9vTmfCgwpMlR4wGZxii5dv536IOAKhmxGBpJfu00T5TW6IvlPSoOSotIgYL6dhSlKHDG7ms%2FHVs3MIrsx8IGOqUB%2FxS%2F33RCSEMtqO9NVSXUEUfY%2F0YA1Icv0K7pUjBKaUt84MnrrnDTbjmm0wHQh5stE1XVr5mBOCFEmLUhqIYpdUngaawS4ar7If3PgjP%2F4tPoKheo4TRAurTR5MHTtQPjPveUfRzq2d6YiEP9%2BImn2PiY%2FB%2BYvWw%2BY63mhvrS3JdY4HKK5AKZ7Err3Hbzis7jewAr%2FfEfsoBriUZHyYC4mvaBqr8w&X-Amz-Signature=4b12b1c24b486f886af1d6fbb24db55285b0a2a2759ba9cc11d784f7c7118189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BE4NXC4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJVD6G73hL5vstL4KS1H0n%2FJz7odmmoFQkdZ%2BQZfroVAiEAuNwVJlNn%2FP9r0crKhC4UbWolSP7JncM1R8rFqtHoDhUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaml1I4wYJIdKzA2yrcA59ix6%2BFOjoCa8pii76S7rHPnwj%2FO%2B8fuSG1X0I%2BjON5v%2FZTwJM4v8JG32pqkwv%2FtHELM9XS4e7mW%2Fcs5MhuqZug92vrRvFPQeAPF98%2F6bTGd5ga0meHxkA8KqX81tDFmnnoFIamMkXXwv%2FZeedcK21Ly5zR%2BjfXCshBjKJ8R0myEkauHZlRoZ6kLq49CItjmJ%2BMcLXgFHmkKayIDUa16tCXIX5kdfm6%2FrTk4BfQhiyN4GhYWwAkDdR4yiF3IndRZBbUx3YzzHQLWBP%2FavChcPRsJlD87dGwFtMbHlSm%2FCrNxL4pB20wzhyr58j4oBCpL8p9E%2BZoSUio%2Bstq4o4wuoaz1cpiyXO1TZ3eVPj6zo1%2FH9Ug944leqWh8zTsN11EPFU1J6OI6qAhl7dmHmc1CwqViJFxc8tU8ia4ILzv5tAxN%2Fj3Z7T%2BPfNh6xzZ7V8I%2FQNPqpgIwHE63AB%2F2vQfikFhDKe8JXCqPy0g6JRpSo6fyVkkhukriRZOunWTOOEpVkyjSQdd3CIckEuoOQq37Pc%2BgYfCVeOi2BWQRu2tYFHzDD9h9vTmfCgwpMlR4wGZxii5dv536IOAKhmxGBpJfu00T5TW6IvlPSoOSotIgYL6dhSlKHDG7ms%2FHVs3MIrsx8IGOqUB%2FxS%2F33RCSEMtqO9NVSXUEUfY%2F0YA1Icv0K7pUjBKaUt84MnrrnDTbjmm0wHQh5stE1XVr5mBOCFEmLUhqIYpdUngaawS4ar7If3PgjP%2F4tPoKheo4TRAurTR5MHTtQPjPveUfRzq2d6YiEP9%2BImn2PiY%2FB%2BYvWw%2BY63mhvrS3JdY4HKK5AKZ7Err3Hbzis7jewAr%2FfEfsoBriUZHyYC4mvaBqr8w&X-Amz-Signature=f16769a46ae5d4347c90db91e94a1e7743163f97963f75c88c677df9b29310f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BE4NXC4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJVD6G73hL5vstL4KS1H0n%2FJz7odmmoFQkdZ%2BQZfroVAiEAuNwVJlNn%2FP9r0crKhC4UbWolSP7JncM1R8rFqtHoDhUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaml1I4wYJIdKzA2yrcA59ix6%2BFOjoCa8pii76S7rHPnwj%2FO%2B8fuSG1X0I%2BjON5v%2FZTwJM4v8JG32pqkwv%2FtHELM9XS4e7mW%2Fcs5MhuqZug92vrRvFPQeAPF98%2F6bTGd5ga0meHxkA8KqX81tDFmnnoFIamMkXXwv%2FZeedcK21Ly5zR%2BjfXCshBjKJ8R0myEkauHZlRoZ6kLq49CItjmJ%2BMcLXgFHmkKayIDUa16tCXIX5kdfm6%2FrTk4BfQhiyN4GhYWwAkDdR4yiF3IndRZBbUx3YzzHQLWBP%2FavChcPRsJlD87dGwFtMbHlSm%2FCrNxL4pB20wzhyr58j4oBCpL8p9E%2BZoSUio%2Bstq4o4wuoaz1cpiyXO1TZ3eVPj6zo1%2FH9Ug944leqWh8zTsN11EPFU1J6OI6qAhl7dmHmc1CwqViJFxc8tU8ia4ILzv5tAxN%2Fj3Z7T%2BPfNh6xzZ7V8I%2FQNPqpgIwHE63AB%2F2vQfikFhDKe8JXCqPy0g6JRpSo6fyVkkhukriRZOunWTOOEpVkyjSQdd3CIckEuoOQq37Pc%2BgYfCVeOi2BWQRu2tYFHzDD9h9vTmfCgwpMlR4wGZxii5dv536IOAKhmxGBpJfu00T5TW6IvlPSoOSotIgYL6dhSlKHDG7ms%2FHVs3MIrsx8IGOqUB%2FxS%2F33RCSEMtqO9NVSXUEUfY%2F0YA1Icv0K7pUjBKaUt84MnrrnDTbjmm0wHQh5stE1XVr5mBOCFEmLUhqIYpdUngaawS4ar7If3PgjP%2F4tPoKheo4TRAurTR5MHTtQPjPveUfRzq2d6YiEP9%2BImn2PiY%2FB%2BYvWw%2BY63mhvrS3JdY4HKK5AKZ7Err3Hbzis7jewAr%2FfEfsoBriUZHyYC4mvaBqr8w&X-Amz-Signature=b467537f956f1caa5993fbe7d148db681f3bf3116357f81217034d39d3a2bfb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
