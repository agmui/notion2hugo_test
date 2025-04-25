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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI557H32%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFrJgDT8v%2BFsbIhDBstnHYNhuTp%2B1HJjKrmi%2FnGQNbTAIgHeku63VZ0%2BCAWyaynW5Hj55y%2BGB%2BOmYZ%2FI1qcNDTw3Uq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFYYVFFNCfZPcNfofCrcAzm9h360jw1e798xpe%2FKX9RJkbh9X6%2Be2eQA%2FBqpfOPOa%2Fb6A28q3QV2ucTKIioWyb3zs0VuI3w1NneKofam2Q3kZAhvtfParGJIkjGURqxe5H4GUhSfHb%2BxIIqzhU%2BgAtU%2BXizKCNaX%2FgQ54AMAbLqZ98ZX1%2BDQGvZ0DyBzyASK8ljgoqrUnzsGdo0lct9ktnZCQi0u%2BZmtbM2z62Dqi%2BRWSTRTXnKLToAdVWNv6h6K96YBs%2BUFV5aZHJSSfzHKQJLcdvbBMOKGraCIYgKSlgnCO%2FgdCFncS2fShN%2B8w2IrELX0%2BixOjTCOwMxi%2FbaEq8uhNnvLgZBF0hm90zD0rh4CtUDfZI2m%2BOc9dSrQzBoV92yrC7P69P3IregcyHgLV%2FK3euE4J7a5fzOAmLT5o5i1QeHkhe47gDhPaBCq2i0T04zeDC8hl1HOX4o3oHuBMh26w1ScdF8hNhPFlPb8lvs8mdmoaoysSa3o026NrpJdoTuDwF9eVrmBFGqRi2JXcFrVV2BZjI4vs1gBW2dXBDpKE89pbBXRSY4jBNy%2F9BzoVJqZC%2BIOZvY%2BXPCelLQZB0HP%2B3x5DDvWXAOJRQKxbobwZfU40WqM40lhAoE4rs1x9OYcK3Rn53X6o952MOKVrMAGOqUB2zlnhA3%2F%2FERrlO%2FdK7sBoDqKFY8twIBjN0GNRxBuEMnwrU9kvsZYxjLU6eWkFUq3BMXcuG0jk7%2BP8rgg0P%2BiNVT9BubozqYVUh5UrF4BgTzx9ub1P4AnhACG%2BoD3xM7bBZsHDfY7AI7FLzrNtij7JlGqhbPfK%2B9CKpgMUMqbwKeRoer%2FTitrsED%2FsPjf7oPGJzw6a1oxUEsDAiypyXt1vWJKWZ9n&X-Amz-Signature=476f5d1b743f02eecb7a1b9d15388d6a4c3e935b114a4719e9cf7c9764a171f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI557H32%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFrJgDT8v%2BFsbIhDBstnHYNhuTp%2B1HJjKrmi%2FnGQNbTAIgHeku63VZ0%2BCAWyaynW5Hj55y%2BGB%2BOmYZ%2FI1qcNDTw3Uq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFYYVFFNCfZPcNfofCrcAzm9h360jw1e798xpe%2FKX9RJkbh9X6%2Be2eQA%2FBqpfOPOa%2Fb6A28q3QV2ucTKIioWyb3zs0VuI3w1NneKofam2Q3kZAhvtfParGJIkjGURqxe5H4GUhSfHb%2BxIIqzhU%2BgAtU%2BXizKCNaX%2FgQ54AMAbLqZ98ZX1%2BDQGvZ0DyBzyASK8ljgoqrUnzsGdo0lct9ktnZCQi0u%2BZmtbM2z62Dqi%2BRWSTRTXnKLToAdVWNv6h6K96YBs%2BUFV5aZHJSSfzHKQJLcdvbBMOKGraCIYgKSlgnCO%2FgdCFncS2fShN%2B8w2IrELX0%2BixOjTCOwMxi%2FbaEq8uhNnvLgZBF0hm90zD0rh4CtUDfZI2m%2BOc9dSrQzBoV92yrC7P69P3IregcyHgLV%2FK3euE4J7a5fzOAmLT5o5i1QeHkhe47gDhPaBCq2i0T04zeDC8hl1HOX4o3oHuBMh26w1ScdF8hNhPFlPb8lvs8mdmoaoysSa3o026NrpJdoTuDwF9eVrmBFGqRi2JXcFrVV2BZjI4vs1gBW2dXBDpKE89pbBXRSY4jBNy%2F9BzoVJqZC%2BIOZvY%2BXPCelLQZB0HP%2B3x5DDvWXAOJRQKxbobwZfU40WqM40lhAoE4rs1x9OYcK3Rn53X6o952MOKVrMAGOqUB2zlnhA3%2F%2FERrlO%2FdK7sBoDqKFY8twIBjN0GNRxBuEMnwrU9kvsZYxjLU6eWkFUq3BMXcuG0jk7%2BP8rgg0P%2BiNVT9BubozqYVUh5UrF4BgTzx9ub1P4AnhACG%2BoD3xM7bBZsHDfY7AI7FLzrNtij7JlGqhbPfK%2B9CKpgMUMqbwKeRoer%2FTitrsED%2FsPjf7oPGJzw6a1oxUEsDAiypyXt1vWJKWZ9n&X-Amz-Signature=50fcddea6b693a853efe360dbbee04db2956726e810ecc740ffcfbd21ba2f95d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI557H32%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFrJgDT8v%2BFsbIhDBstnHYNhuTp%2B1HJjKrmi%2FnGQNbTAIgHeku63VZ0%2BCAWyaynW5Hj55y%2BGB%2BOmYZ%2FI1qcNDTw3Uq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFYYVFFNCfZPcNfofCrcAzm9h360jw1e798xpe%2FKX9RJkbh9X6%2Be2eQA%2FBqpfOPOa%2Fb6A28q3QV2ucTKIioWyb3zs0VuI3w1NneKofam2Q3kZAhvtfParGJIkjGURqxe5H4GUhSfHb%2BxIIqzhU%2BgAtU%2BXizKCNaX%2FgQ54AMAbLqZ98ZX1%2BDQGvZ0DyBzyASK8ljgoqrUnzsGdo0lct9ktnZCQi0u%2BZmtbM2z62Dqi%2BRWSTRTXnKLToAdVWNv6h6K96YBs%2BUFV5aZHJSSfzHKQJLcdvbBMOKGraCIYgKSlgnCO%2FgdCFncS2fShN%2B8w2IrELX0%2BixOjTCOwMxi%2FbaEq8uhNnvLgZBF0hm90zD0rh4CtUDfZI2m%2BOc9dSrQzBoV92yrC7P69P3IregcyHgLV%2FK3euE4J7a5fzOAmLT5o5i1QeHkhe47gDhPaBCq2i0T04zeDC8hl1HOX4o3oHuBMh26w1ScdF8hNhPFlPb8lvs8mdmoaoysSa3o026NrpJdoTuDwF9eVrmBFGqRi2JXcFrVV2BZjI4vs1gBW2dXBDpKE89pbBXRSY4jBNy%2F9BzoVJqZC%2BIOZvY%2BXPCelLQZB0HP%2B3x5DDvWXAOJRQKxbobwZfU40WqM40lhAoE4rs1x9OYcK3Rn53X6o952MOKVrMAGOqUB2zlnhA3%2F%2FERrlO%2FdK7sBoDqKFY8twIBjN0GNRxBuEMnwrU9kvsZYxjLU6eWkFUq3BMXcuG0jk7%2BP8rgg0P%2BiNVT9BubozqYVUh5UrF4BgTzx9ub1P4AnhACG%2BoD3xM7bBZsHDfY7AI7FLzrNtij7JlGqhbPfK%2B9CKpgMUMqbwKeRoer%2FTitrsED%2FsPjf7oPGJzw6a1oxUEsDAiypyXt1vWJKWZ9n&X-Amz-Signature=b7d413b47bc844ad396f566c4b934239329b7e77c4cee7a2a66e517c3854d2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI557H32%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFrJgDT8v%2BFsbIhDBstnHYNhuTp%2B1HJjKrmi%2FnGQNbTAIgHeku63VZ0%2BCAWyaynW5Hj55y%2BGB%2BOmYZ%2FI1qcNDTw3Uq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFYYVFFNCfZPcNfofCrcAzm9h360jw1e798xpe%2FKX9RJkbh9X6%2Be2eQA%2FBqpfOPOa%2Fb6A28q3QV2ucTKIioWyb3zs0VuI3w1NneKofam2Q3kZAhvtfParGJIkjGURqxe5H4GUhSfHb%2BxIIqzhU%2BgAtU%2BXizKCNaX%2FgQ54AMAbLqZ98ZX1%2BDQGvZ0DyBzyASK8ljgoqrUnzsGdo0lct9ktnZCQi0u%2BZmtbM2z62Dqi%2BRWSTRTXnKLToAdVWNv6h6K96YBs%2BUFV5aZHJSSfzHKQJLcdvbBMOKGraCIYgKSlgnCO%2FgdCFncS2fShN%2B8w2IrELX0%2BixOjTCOwMxi%2FbaEq8uhNnvLgZBF0hm90zD0rh4CtUDfZI2m%2BOc9dSrQzBoV92yrC7P69P3IregcyHgLV%2FK3euE4J7a5fzOAmLT5o5i1QeHkhe47gDhPaBCq2i0T04zeDC8hl1HOX4o3oHuBMh26w1ScdF8hNhPFlPb8lvs8mdmoaoysSa3o026NrpJdoTuDwF9eVrmBFGqRi2JXcFrVV2BZjI4vs1gBW2dXBDpKE89pbBXRSY4jBNy%2F9BzoVJqZC%2BIOZvY%2BXPCelLQZB0HP%2B3x5DDvWXAOJRQKxbobwZfU40WqM40lhAoE4rs1x9OYcK3Rn53X6o952MOKVrMAGOqUB2zlnhA3%2F%2FERrlO%2FdK7sBoDqKFY8twIBjN0GNRxBuEMnwrU9kvsZYxjLU6eWkFUq3BMXcuG0jk7%2BP8rgg0P%2BiNVT9BubozqYVUh5UrF4BgTzx9ub1P4AnhACG%2BoD3xM7bBZsHDfY7AI7FLzrNtij7JlGqhbPfK%2B9CKpgMUMqbwKeRoer%2FTitrsED%2FsPjf7oPGJzw6a1oxUEsDAiypyXt1vWJKWZ9n&X-Amz-Signature=e10fb133a2ebcef5e237a3634efcdc4f7cb9ba190bfab0eed7192afcc8e0f78d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI557H32%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFrJgDT8v%2BFsbIhDBstnHYNhuTp%2B1HJjKrmi%2FnGQNbTAIgHeku63VZ0%2BCAWyaynW5Hj55y%2BGB%2BOmYZ%2FI1qcNDTw3Uq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFYYVFFNCfZPcNfofCrcAzm9h360jw1e798xpe%2FKX9RJkbh9X6%2Be2eQA%2FBqpfOPOa%2Fb6A28q3QV2ucTKIioWyb3zs0VuI3w1NneKofam2Q3kZAhvtfParGJIkjGURqxe5H4GUhSfHb%2BxIIqzhU%2BgAtU%2BXizKCNaX%2FgQ54AMAbLqZ98ZX1%2BDQGvZ0DyBzyASK8ljgoqrUnzsGdo0lct9ktnZCQi0u%2BZmtbM2z62Dqi%2BRWSTRTXnKLToAdVWNv6h6K96YBs%2BUFV5aZHJSSfzHKQJLcdvbBMOKGraCIYgKSlgnCO%2FgdCFncS2fShN%2B8w2IrELX0%2BixOjTCOwMxi%2FbaEq8uhNnvLgZBF0hm90zD0rh4CtUDfZI2m%2BOc9dSrQzBoV92yrC7P69P3IregcyHgLV%2FK3euE4J7a5fzOAmLT5o5i1QeHkhe47gDhPaBCq2i0T04zeDC8hl1HOX4o3oHuBMh26w1ScdF8hNhPFlPb8lvs8mdmoaoysSa3o026NrpJdoTuDwF9eVrmBFGqRi2JXcFrVV2BZjI4vs1gBW2dXBDpKE89pbBXRSY4jBNy%2F9BzoVJqZC%2BIOZvY%2BXPCelLQZB0HP%2B3x5DDvWXAOJRQKxbobwZfU40WqM40lhAoE4rs1x9OYcK3Rn53X6o952MOKVrMAGOqUB2zlnhA3%2F%2FERrlO%2FdK7sBoDqKFY8twIBjN0GNRxBuEMnwrU9kvsZYxjLU6eWkFUq3BMXcuG0jk7%2BP8rgg0P%2BiNVT9BubozqYVUh5UrF4BgTzx9ub1P4AnhACG%2BoD3xM7bBZsHDfY7AI7FLzrNtij7JlGqhbPfK%2B9CKpgMUMqbwKeRoer%2FTitrsED%2FsPjf7oPGJzw6a1oxUEsDAiypyXt1vWJKWZ9n&X-Amz-Signature=ef67823b290aa51193b681c5287820c460cb62a30a04c7101b3b142c797cc8c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI557H32%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFrJgDT8v%2BFsbIhDBstnHYNhuTp%2B1HJjKrmi%2FnGQNbTAIgHeku63VZ0%2BCAWyaynW5Hj55y%2BGB%2BOmYZ%2FI1qcNDTw3Uq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFYYVFFNCfZPcNfofCrcAzm9h360jw1e798xpe%2FKX9RJkbh9X6%2Be2eQA%2FBqpfOPOa%2Fb6A28q3QV2ucTKIioWyb3zs0VuI3w1NneKofam2Q3kZAhvtfParGJIkjGURqxe5H4GUhSfHb%2BxIIqzhU%2BgAtU%2BXizKCNaX%2FgQ54AMAbLqZ98ZX1%2BDQGvZ0DyBzyASK8ljgoqrUnzsGdo0lct9ktnZCQi0u%2BZmtbM2z62Dqi%2BRWSTRTXnKLToAdVWNv6h6K96YBs%2BUFV5aZHJSSfzHKQJLcdvbBMOKGraCIYgKSlgnCO%2FgdCFncS2fShN%2B8w2IrELX0%2BixOjTCOwMxi%2FbaEq8uhNnvLgZBF0hm90zD0rh4CtUDfZI2m%2BOc9dSrQzBoV92yrC7P69P3IregcyHgLV%2FK3euE4J7a5fzOAmLT5o5i1QeHkhe47gDhPaBCq2i0T04zeDC8hl1HOX4o3oHuBMh26w1ScdF8hNhPFlPb8lvs8mdmoaoysSa3o026NrpJdoTuDwF9eVrmBFGqRi2JXcFrVV2BZjI4vs1gBW2dXBDpKE89pbBXRSY4jBNy%2F9BzoVJqZC%2BIOZvY%2BXPCelLQZB0HP%2B3x5DDvWXAOJRQKxbobwZfU40WqM40lhAoE4rs1x9OYcK3Rn53X6o952MOKVrMAGOqUB2zlnhA3%2F%2FERrlO%2FdK7sBoDqKFY8twIBjN0GNRxBuEMnwrU9kvsZYxjLU6eWkFUq3BMXcuG0jk7%2BP8rgg0P%2BiNVT9BubozqYVUh5UrF4BgTzx9ub1P4AnhACG%2BoD3xM7bBZsHDfY7AI7FLzrNtij7JlGqhbPfK%2B9CKpgMUMqbwKeRoer%2FTitrsED%2FsPjf7oPGJzw6a1oxUEsDAiypyXt1vWJKWZ9n&X-Amz-Signature=9ffdb3ebbb07e2c4fa125851711d8417978dfb795f34f32ff425d995a754fc44&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI557H32%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFrJgDT8v%2BFsbIhDBstnHYNhuTp%2B1HJjKrmi%2FnGQNbTAIgHeku63VZ0%2BCAWyaynW5Hj55y%2BGB%2BOmYZ%2FI1qcNDTw3Uq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFYYVFFNCfZPcNfofCrcAzm9h360jw1e798xpe%2FKX9RJkbh9X6%2Be2eQA%2FBqpfOPOa%2Fb6A28q3QV2ucTKIioWyb3zs0VuI3w1NneKofam2Q3kZAhvtfParGJIkjGURqxe5H4GUhSfHb%2BxIIqzhU%2BgAtU%2BXizKCNaX%2FgQ54AMAbLqZ98ZX1%2BDQGvZ0DyBzyASK8ljgoqrUnzsGdo0lct9ktnZCQi0u%2BZmtbM2z62Dqi%2BRWSTRTXnKLToAdVWNv6h6K96YBs%2BUFV5aZHJSSfzHKQJLcdvbBMOKGraCIYgKSlgnCO%2FgdCFncS2fShN%2B8w2IrELX0%2BixOjTCOwMxi%2FbaEq8uhNnvLgZBF0hm90zD0rh4CtUDfZI2m%2BOc9dSrQzBoV92yrC7P69P3IregcyHgLV%2FK3euE4J7a5fzOAmLT5o5i1QeHkhe47gDhPaBCq2i0T04zeDC8hl1HOX4o3oHuBMh26w1ScdF8hNhPFlPb8lvs8mdmoaoysSa3o026NrpJdoTuDwF9eVrmBFGqRi2JXcFrVV2BZjI4vs1gBW2dXBDpKE89pbBXRSY4jBNy%2F9BzoVJqZC%2BIOZvY%2BXPCelLQZB0HP%2B3x5DDvWXAOJRQKxbobwZfU40WqM40lhAoE4rs1x9OYcK3Rn53X6o952MOKVrMAGOqUB2zlnhA3%2F%2FERrlO%2FdK7sBoDqKFY8twIBjN0GNRxBuEMnwrU9kvsZYxjLU6eWkFUq3BMXcuG0jk7%2BP8rgg0P%2BiNVT9BubozqYVUh5UrF4BgTzx9ub1P4AnhACG%2BoD3xM7bBZsHDfY7AI7FLzrNtij7JlGqhbPfK%2B9CKpgMUMqbwKeRoer%2FTitrsED%2FsPjf7oPGJzw6a1oxUEsDAiypyXt1vWJKWZ9n&X-Amz-Signature=2b0ff25b19cb02c5d2dbd4ce3a49f6082c9ec5aaf3800270969492cfdba6a81f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
