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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBZBGXL2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLkuTJv6L4wj5qwVfUAklcy5G7rIZL9xTBY0rcLQc88QIgM%2B3vcOJ%2FKDOnqnhjKEHb2mOb6RW2qDdGfv5ucsP22i8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJ%2BBSBnn7RqwGTQzwSrcA25JkS8YCynqzCyNO6BhBYtyPmM%2FyOk7NIQqderAZFIxUOsoU4Yq2y2deBIqeOhwvIMclfSqGVAA%2Fkd2jC%2BCk2q3MTfIk4JpYfyxXjoayBSSfFstQzBIsgIXq6PYomdzc7%2BkWwOVMkoqNYov7GQGESDNHG5nlFe8osiX%2FeHsukhYt5bNvorPmYayjM1BRt1OGoax1x7q8JnuJkHWfd3%2FbQFLtGxSZzQthAoAaaZyMkh%2BXTb%2FOuIWYNH%2BZhK3jaV0IH0wM4vqNlVR13T6%2FgmhGLLMwTfXko9pDBLfadfeMFPPLSk9skM6tLlWPLb2XutnWCwFvkN1YrtDUv%2Bjtd4VMQxnOGjhovubvqkNvJ5nrBhr93I5IyyQAVn2JLzV1k2jxSYotWnu7ng%2BqEYDa%2BQiQFlkzRbjTIzxpJfLeYMasEhdBhxkhWyZxF%2FHegQyaVJXlr9Xk9%2FJRY3llR65Fx%2FZyqxHtQhjREWJlDToC6SUDxPoiTSFJkr6E1%2FTf%2F2fJ6SH7w%2FYS5vbMijf8OLKJzx%2Bj7PR3OltAHYyTWeeqf2GH6gwRI7iJb1X4ahPBWhc4OcNszp9yXbvgxo%2BITYs5OoL77DlvAAZYwcqj66cYA8CLOhAKuMfR9AKsn%2BpuLKcMNKH08MGOqUB5iXto%2Fd4qmmi8CZ0g4WCxKvEDq29bpnf94L%2BZcxzFkxDO5P6tgsWCQIw3tyOBXWnd4Lzxyi301ccHy1bne2Nu%2FwZXFfbb8c%2BczMxY4DAGLLIIVmHnD45yX9yAaS6jCQlEmZm6mfqVVr3JpjHHeYWR%2BxgQ5RbDroNH%2F8HPkdBpnahZ9nQA8Z7QMkGkJaxq41%2BnLJkLDJ6pB8zJaHlnw9HVBEemjSe&X-Amz-Signature=35c7abe1a872b9c50cc1e0b1240e174f66a16b04931bb52e8ea9bfb6d8c6d4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBZBGXL2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLkuTJv6L4wj5qwVfUAklcy5G7rIZL9xTBY0rcLQc88QIgM%2B3vcOJ%2FKDOnqnhjKEHb2mOb6RW2qDdGfv5ucsP22i8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJ%2BBSBnn7RqwGTQzwSrcA25JkS8YCynqzCyNO6BhBYtyPmM%2FyOk7NIQqderAZFIxUOsoU4Yq2y2deBIqeOhwvIMclfSqGVAA%2Fkd2jC%2BCk2q3MTfIk4JpYfyxXjoayBSSfFstQzBIsgIXq6PYomdzc7%2BkWwOVMkoqNYov7GQGESDNHG5nlFe8osiX%2FeHsukhYt5bNvorPmYayjM1BRt1OGoax1x7q8JnuJkHWfd3%2FbQFLtGxSZzQthAoAaaZyMkh%2BXTb%2FOuIWYNH%2BZhK3jaV0IH0wM4vqNlVR13T6%2FgmhGLLMwTfXko9pDBLfadfeMFPPLSk9skM6tLlWPLb2XutnWCwFvkN1YrtDUv%2Bjtd4VMQxnOGjhovubvqkNvJ5nrBhr93I5IyyQAVn2JLzV1k2jxSYotWnu7ng%2BqEYDa%2BQiQFlkzRbjTIzxpJfLeYMasEhdBhxkhWyZxF%2FHegQyaVJXlr9Xk9%2FJRY3llR65Fx%2FZyqxHtQhjREWJlDToC6SUDxPoiTSFJkr6E1%2FTf%2F2fJ6SH7w%2FYS5vbMijf8OLKJzx%2Bj7PR3OltAHYyTWeeqf2GH6gwRI7iJb1X4ahPBWhc4OcNszp9yXbvgxo%2BITYs5OoL77DlvAAZYwcqj66cYA8CLOhAKuMfR9AKsn%2BpuLKcMNKH08MGOqUB5iXto%2Fd4qmmi8CZ0g4WCxKvEDq29bpnf94L%2BZcxzFkxDO5P6tgsWCQIw3tyOBXWnd4Lzxyi301ccHy1bne2Nu%2FwZXFfbb8c%2BczMxY4DAGLLIIVmHnD45yX9yAaS6jCQlEmZm6mfqVVr3JpjHHeYWR%2BxgQ5RbDroNH%2F8HPkdBpnahZ9nQA8Z7QMkGkJaxq41%2BnLJkLDJ6pB8zJaHlnw9HVBEemjSe&X-Amz-Signature=93328e6c4cc911799f57bc921199039ff13cc663407a234d99223623a3da0e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBZBGXL2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLkuTJv6L4wj5qwVfUAklcy5G7rIZL9xTBY0rcLQc88QIgM%2B3vcOJ%2FKDOnqnhjKEHb2mOb6RW2qDdGfv5ucsP22i8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJ%2BBSBnn7RqwGTQzwSrcA25JkS8YCynqzCyNO6BhBYtyPmM%2FyOk7NIQqderAZFIxUOsoU4Yq2y2deBIqeOhwvIMclfSqGVAA%2Fkd2jC%2BCk2q3MTfIk4JpYfyxXjoayBSSfFstQzBIsgIXq6PYomdzc7%2BkWwOVMkoqNYov7GQGESDNHG5nlFe8osiX%2FeHsukhYt5bNvorPmYayjM1BRt1OGoax1x7q8JnuJkHWfd3%2FbQFLtGxSZzQthAoAaaZyMkh%2BXTb%2FOuIWYNH%2BZhK3jaV0IH0wM4vqNlVR13T6%2FgmhGLLMwTfXko9pDBLfadfeMFPPLSk9skM6tLlWPLb2XutnWCwFvkN1YrtDUv%2Bjtd4VMQxnOGjhovubvqkNvJ5nrBhr93I5IyyQAVn2JLzV1k2jxSYotWnu7ng%2BqEYDa%2BQiQFlkzRbjTIzxpJfLeYMasEhdBhxkhWyZxF%2FHegQyaVJXlr9Xk9%2FJRY3llR65Fx%2FZyqxHtQhjREWJlDToC6SUDxPoiTSFJkr6E1%2FTf%2F2fJ6SH7w%2FYS5vbMijf8OLKJzx%2Bj7PR3OltAHYyTWeeqf2GH6gwRI7iJb1X4ahPBWhc4OcNszp9yXbvgxo%2BITYs5OoL77DlvAAZYwcqj66cYA8CLOhAKuMfR9AKsn%2BpuLKcMNKH08MGOqUB5iXto%2Fd4qmmi8CZ0g4WCxKvEDq29bpnf94L%2BZcxzFkxDO5P6tgsWCQIw3tyOBXWnd4Lzxyi301ccHy1bne2Nu%2FwZXFfbb8c%2BczMxY4DAGLLIIVmHnD45yX9yAaS6jCQlEmZm6mfqVVr3JpjHHeYWR%2BxgQ5RbDroNH%2F8HPkdBpnahZ9nQA8Z7QMkGkJaxq41%2BnLJkLDJ6pB8zJaHlnw9HVBEemjSe&X-Amz-Signature=27848de1ae40a779535b86265cad3e02d619942389ad64379c1dffdd0ecf3192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBZBGXL2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLkuTJv6L4wj5qwVfUAklcy5G7rIZL9xTBY0rcLQc88QIgM%2B3vcOJ%2FKDOnqnhjKEHb2mOb6RW2qDdGfv5ucsP22i8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJ%2BBSBnn7RqwGTQzwSrcA25JkS8YCynqzCyNO6BhBYtyPmM%2FyOk7NIQqderAZFIxUOsoU4Yq2y2deBIqeOhwvIMclfSqGVAA%2Fkd2jC%2BCk2q3MTfIk4JpYfyxXjoayBSSfFstQzBIsgIXq6PYomdzc7%2BkWwOVMkoqNYov7GQGESDNHG5nlFe8osiX%2FeHsukhYt5bNvorPmYayjM1BRt1OGoax1x7q8JnuJkHWfd3%2FbQFLtGxSZzQthAoAaaZyMkh%2BXTb%2FOuIWYNH%2BZhK3jaV0IH0wM4vqNlVR13T6%2FgmhGLLMwTfXko9pDBLfadfeMFPPLSk9skM6tLlWPLb2XutnWCwFvkN1YrtDUv%2Bjtd4VMQxnOGjhovubvqkNvJ5nrBhr93I5IyyQAVn2JLzV1k2jxSYotWnu7ng%2BqEYDa%2BQiQFlkzRbjTIzxpJfLeYMasEhdBhxkhWyZxF%2FHegQyaVJXlr9Xk9%2FJRY3llR65Fx%2FZyqxHtQhjREWJlDToC6SUDxPoiTSFJkr6E1%2FTf%2F2fJ6SH7w%2FYS5vbMijf8OLKJzx%2Bj7PR3OltAHYyTWeeqf2GH6gwRI7iJb1X4ahPBWhc4OcNszp9yXbvgxo%2BITYs5OoL77DlvAAZYwcqj66cYA8CLOhAKuMfR9AKsn%2BpuLKcMNKH08MGOqUB5iXto%2Fd4qmmi8CZ0g4WCxKvEDq29bpnf94L%2BZcxzFkxDO5P6tgsWCQIw3tyOBXWnd4Lzxyi301ccHy1bne2Nu%2FwZXFfbb8c%2BczMxY4DAGLLIIVmHnD45yX9yAaS6jCQlEmZm6mfqVVr3JpjHHeYWR%2BxgQ5RbDroNH%2F8HPkdBpnahZ9nQA8Z7QMkGkJaxq41%2BnLJkLDJ6pB8zJaHlnw9HVBEemjSe&X-Amz-Signature=b88eb124859306bf191ff0febd98c7c5146dd605d1d310a81072ed2797270a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBZBGXL2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLkuTJv6L4wj5qwVfUAklcy5G7rIZL9xTBY0rcLQc88QIgM%2B3vcOJ%2FKDOnqnhjKEHb2mOb6RW2qDdGfv5ucsP22i8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJ%2BBSBnn7RqwGTQzwSrcA25JkS8YCynqzCyNO6BhBYtyPmM%2FyOk7NIQqderAZFIxUOsoU4Yq2y2deBIqeOhwvIMclfSqGVAA%2Fkd2jC%2BCk2q3MTfIk4JpYfyxXjoayBSSfFstQzBIsgIXq6PYomdzc7%2BkWwOVMkoqNYov7GQGESDNHG5nlFe8osiX%2FeHsukhYt5bNvorPmYayjM1BRt1OGoax1x7q8JnuJkHWfd3%2FbQFLtGxSZzQthAoAaaZyMkh%2BXTb%2FOuIWYNH%2BZhK3jaV0IH0wM4vqNlVR13T6%2FgmhGLLMwTfXko9pDBLfadfeMFPPLSk9skM6tLlWPLb2XutnWCwFvkN1YrtDUv%2Bjtd4VMQxnOGjhovubvqkNvJ5nrBhr93I5IyyQAVn2JLzV1k2jxSYotWnu7ng%2BqEYDa%2BQiQFlkzRbjTIzxpJfLeYMasEhdBhxkhWyZxF%2FHegQyaVJXlr9Xk9%2FJRY3llR65Fx%2FZyqxHtQhjREWJlDToC6SUDxPoiTSFJkr6E1%2FTf%2F2fJ6SH7w%2FYS5vbMijf8OLKJzx%2Bj7PR3OltAHYyTWeeqf2GH6gwRI7iJb1X4ahPBWhc4OcNszp9yXbvgxo%2BITYs5OoL77DlvAAZYwcqj66cYA8CLOhAKuMfR9AKsn%2BpuLKcMNKH08MGOqUB5iXto%2Fd4qmmi8CZ0g4WCxKvEDq29bpnf94L%2BZcxzFkxDO5P6tgsWCQIw3tyOBXWnd4Lzxyi301ccHy1bne2Nu%2FwZXFfbb8c%2BczMxY4DAGLLIIVmHnD45yX9yAaS6jCQlEmZm6mfqVVr3JpjHHeYWR%2BxgQ5RbDroNH%2F8HPkdBpnahZ9nQA8Z7QMkGkJaxq41%2BnLJkLDJ6pB8zJaHlnw9HVBEemjSe&X-Amz-Signature=767203a5db6dd16d64938a2050c8500046403222d86b22d04591fe4ca933e938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBZBGXL2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLkuTJv6L4wj5qwVfUAklcy5G7rIZL9xTBY0rcLQc88QIgM%2B3vcOJ%2FKDOnqnhjKEHb2mOb6RW2qDdGfv5ucsP22i8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJ%2BBSBnn7RqwGTQzwSrcA25JkS8YCynqzCyNO6BhBYtyPmM%2FyOk7NIQqderAZFIxUOsoU4Yq2y2deBIqeOhwvIMclfSqGVAA%2Fkd2jC%2BCk2q3MTfIk4JpYfyxXjoayBSSfFstQzBIsgIXq6PYomdzc7%2BkWwOVMkoqNYov7GQGESDNHG5nlFe8osiX%2FeHsukhYt5bNvorPmYayjM1BRt1OGoax1x7q8JnuJkHWfd3%2FbQFLtGxSZzQthAoAaaZyMkh%2BXTb%2FOuIWYNH%2BZhK3jaV0IH0wM4vqNlVR13T6%2FgmhGLLMwTfXko9pDBLfadfeMFPPLSk9skM6tLlWPLb2XutnWCwFvkN1YrtDUv%2Bjtd4VMQxnOGjhovubvqkNvJ5nrBhr93I5IyyQAVn2JLzV1k2jxSYotWnu7ng%2BqEYDa%2BQiQFlkzRbjTIzxpJfLeYMasEhdBhxkhWyZxF%2FHegQyaVJXlr9Xk9%2FJRY3llR65Fx%2FZyqxHtQhjREWJlDToC6SUDxPoiTSFJkr6E1%2FTf%2F2fJ6SH7w%2FYS5vbMijf8OLKJzx%2Bj7PR3OltAHYyTWeeqf2GH6gwRI7iJb1X4ahPBWhc4OcNszp9yXbvgxo%2BITYs5OoL77DlvAAZYwcqj66cYA8CLOhAKuMfR9AKsn%2BpuLKcMNKH08MGOqUB5iXto%2Fd4qmmi8CZ0g4WCxKvEDq29bpnf94L%2BZcxzFkxDO5P6tgsWCQIw3tyOBXWnd4Lzxyi301ccHy1bne2Nu%2FwZXFfbb8c%2BczMxY4DAGLLIIVmHnD45yX9yAaS6jCQlEmZm6mfqVVr3JpjHHeYWR%2BxgQ5RbDroNH%2F8HPkdBpnahZ9nQA8Z7QMkGkJaxq41%2BnLJkLDJ6pB8zJaHlnw9HVBEemjSe&X-Amz-Signature=e9a78fe0e42d344df385b1eea6e2e618b259d426e80236d8879f74dcf3823386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBZBGXL2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLkuTJv6L4wj5qwVfUAklcy5G7rIZL9xTBY0rcLQc88QIgM%2B3vcOJ%2FKDOnqnhjKEHb2mOb6RW2qDdGfv5ucsP22i8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJ%2BBSBnn7RqwGTQzwSrcA25JkS8YCynqzCyNO6BhBYtyPmM%2FyOk7NIQqderAZFIxUOsoU4Yq2y2deBIqeOhwvIMclfSqGVAA%2Fkd2jC%2BCk2q3MTfIk4JpYfyxXjoayBSSfFstQzBIsgIXq6PYomdzc7%2BkWwOVMkoqNYov7GQGESDNHG5nlFe8osiX%2FeHsukhYt5bNvorPmYayjM1BRt1OGoax1x7q8JnuJkHWfd3%2FbQFLtGxSZzQthAoAaaZyMkh%2BXTb%2FOuIWYNH%2BZhK3jaV0IH0wM4vqNlVR13T6%2FgmhGLLMwTfXko9pDBLfadfeMFPPLSk9skM6tLlWPLb2XutnWCwFvkN1YrtDUv%2Bjtd4VMQxnOGjhovubvqkNvJ5nrBhr93I5IyyQAVn2JLzV1k2jxSYotWnu7ng%2BqEYDa%2BQiQFlkzRbjTIzxpJfLeYMasEhdBhxkhWyZxF%2FHegQyaVJXlr9Xk9%2FJRY3llR65Fx%2FZyqxHtQhjREWJlDToC6SUDxPoiTSFJkr6E1%2FTf%2F2fJ6SH7w%2FYS5vbMijf8OLKJzx%2Bj7PR3OltAHYyTWeeqf2GH6gwRI7iJb1X4ahPBWhc4OcNszp9yXbvgxo%2BITYs5OoL77DlvAAZYwcqj66cYA8CLOhAKuMfR9AKsn%2BpuLKcMNKH08MGOqUB5iXto%2Fd4qmmi8CZ0g4WCxKvEDq29bpnf94L%2BZcxzFkxDO5P6tgsWCQIw3tyOBXWnd4Lzxyi301ccHy1bne2Nu%2FwZXFfbb8c%2BczMxY4DAGLLIIVmHnD45yX9yAaS6jCQlEmZm6mfqVVr3JpjHHeYWR%2BxgQ5RbDroNH%2F8HPkdBpnahZ9nQA8Z7QMkGkJaxq41%2BnLJkLDJ6pB8zJaHlnw9HVBEemjSe&X-Amz-Signature=ec4f70c56872fc9aab0604f3fba1eecee0133fcdb53795d0ec201890ea63cddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
