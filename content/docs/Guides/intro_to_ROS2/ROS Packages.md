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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223VJCAV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCc3e61gjpkkBRXfUoX7h87u5rf8oglNryC0yG6kFeVewIhAP2UfzcYkIKN42jeZ1HC2LmtKPU882IC3KVNjte%2FhVT%2FKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkllzCKlF1YoPsZcq3AMjBxygHnMi2DMxGQpiL%2F%2F30ZkwhJfs86nNUFwNZ2c0v%2B0TGoubrLf5YlC3J52Q0ZivZ5djOuCHDU6t0jKl9HJXKCHIq8LdBMb7czyISXCrXlQaSaNjo%2Fcg7p8fgKQoi8OOD57LUnnmjZE9%2ForpaC7p3VNmIRJ6d%2FWV4hrlnN%2FUAw%2BPZaLJ1Q84yxMc9MsFSE0czAvXaeyjzAjMhwm6d3qtZVk21rrtEPNqVpS%2FyZV%2Bvn5wpU2a3SiAHhdJgDId%2B%2B8wzwLopB0n%2FbVbPammLvzRdX3MHnGPuZb2d1QpoS%2FQZIsSdsHBWFaBIxoonPIBTy1U31XMgInMc4Nh9xWs9oaCw0Ib%2BCkl62ruw%2FK8XugaHzO40C1gwUpy%2FlXy6weoKGGzGSaJvPcEC65ifLq4xN7lnZ79lkE%2BIYYFf7z7vdDp07iWakg4I4GxokkrezKo%2Fh0K%2BrquDw5siR7agGej2yQevVahORhzATAaOX7G5YDwAN9csukuM%2Fa1b%2FxEhMeMN7ykqyMnU0GDrahewDKB1OBxie6dO3HALa2uzLF6TSX87jYjQsKIzvV5oORtvArYKQJMAdCLnd6eGth616aujyqyaT0pMumCQmbN5j7a0uOzpGx6H2t%2FzZLEodKZVzDStrbBBjqkASkmdnAbFgxiUqX36fL4BFmax9ubTVP%2FuiF5HLEhJBzjaIpKfE9xD5mNE5hZpRjWCLkq4%2Bk36Z5uQo6GihT3%2Bq118Ol7TAfhSM89FGqT4yHdVFIc%2BDgs%2BzebLfQbfE3Le%2F%2FL57R%2BAchiklVdxp0CnefCTGz6rCUrFiY9p2hk%2BH987cUleI4O9Nrt80I0lRJxN63wusX1ZRhoSgzyVlJkt6f6bpi5&X-Amz-Signature=a60f95794ec42e5c9fcd93f4479f557ef6d1cd51a2b188b0c891e8a3bfaaaa26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223VJCAV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCc3e61gjpkkBRXfUoX7h87u5rf8oglNryC0yG6kFeVewIhAP2UfzcYkIKN42jeZ1HC2LmtKPU882IC3KVNjte%2FhVT%2FKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkllzCKlF1YoPsZcq3AMjBxygHnMi2DMxGQpiL%2F%2F30ZkwhJfs86nNUFwNZ2c0v%2B0TGoubrLf5YlC3J52Q0ZivZ5djOuCHDU6t0jKl9HJXKCHIq8LdBMb7czyISXCrXlQaSaNjo%2Fcg7p8fgKQoi8OOD57LUnnmjZE9%2ForpaC7p3VNmIRJ6d%2FWV4hrlnN%2FUAw%2BPZaLJ1Q84yxMc9MsFSE0czAvXaeyjzAjMhwm6d3qtZVk21rrtEPNqVpS%2FyZV%2Bvn5wpU2a3SiAHhdJgDId%2B%2B8wzwLopB0n%2FbVbPammLvzRdX3MHnGPuZb2d1QpoS%2FQZIsSdsHBWFaBIxoonPIBTy1U31XMgInMc4Nh9xWs9oaCw0Ib%2BCkl62ruw%2FK8XugaHzO40C1gwUpy%2FlXy6weoKGGzGSaJvPcEC65ifLq4xN7lnZ79lkE%2BIYYFf7z7vdDp07iWakg4I4GxokkrezKo%2Fh0K%2BrquDw5siR7agGej2yQevVahORhzATAaOX7G5YDwAN9csukuM%2Fa1b%2FxEhMeMN7ykqyMnU0GDrahewDKB1OBxie6dO3HALa2uzLF6TSX87jYjQsKIzvV5oORtvArYKQJMAdCLnd6eGth616aujyqyaT0pMumCQmbN5j7a0uOzpGx6H2t%2FzZLEodKZVzDStrbBBjqkASkmdnAbFgxiUqX36fL4BFmax9ubTVP%2FuiF5HLEhJBzjaIpKfE9xD5mNE5hZpRjWCLkq4%2Bk36Z5uQo6GihT3%2Bq118Ol7TAfhSM89FGqT4yHdVFIc%2BDgs%2BzebLfQbfE3Le%2F%2FL57R%2BAchiklVdxp0CnefCTGz6rCUrFiY9p2hk%2BH987cUleI4O9Nrt80I0lRJxN63wusX1ZRhoSgzyVlJkt6f6bpi5&X-Amz-Signature=a9d59692bbc01a35948864924ab2bbb2f8be045c2d0c6dd8ff92fb2e9d82227d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223VJCAV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCc3e61gjpkkBRXfUoX7h87u5rf8oglNryC0yG6kFeVewIhAP2UfzcYkIKN42jeZ1HC2LmtKPU882IC3KVNjte%2FhVT%2FKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkllzCKlF1YoPsZcq3AMjBxygHnMi2DMxGQpiL%2F%2F30ZkwhJfs86nNUFwNZ2c0v%2B0TGoubrLf5YlC3J52Q0ZivZ5djOuCHDU6t0jKl9HJXKCHIq8LdBMb7czyISXCrXlQaSaNjo%2Fcg7p8fgKQoi8OOD57LUnnmjZE9%2ForpaC7p3VNmIRJ6d%2FWV4hrlnN%2FUAw%2BPZaLJ1Q84yxMc9MsFSE0czAvXaeyjzAjMhwm6d3qtZVk21rrtEPNqVpS%2FyZV%2Bvn5wpU2a3SiAHhdJgDId%2B%2B8wzwLopB0n%2FbVbPammLvzRdX3MHnGPuZb2d1QpoS%2FQZIsSdsHBWFaBIxoonPIBTy1U31XMgInMc4Nh9xWs9oaCw0Ib%2BCkl62ruw%2FK8XugaHzO40C1gwUpy%2FlXy6weoKGGzGSaJvPcEC65ifLq4xN7lnZ79lkE%2BIYYFf7z7vdDp07iWakg4I4GxokkrezKo%2Fh0K%2BrquDw5siR7agGej2yQevVahORhzATAaOX7G5YDwAN9csukuM%2Fa1b%2FxEhMeMN7ykqyMnU0GDrahewDKB1OBxie6dO3HALa2uzLF6TSX87jYjQsKIzvV5oORtvArYKQJMAdCLnd6eGth616aujyqyaT0pMumCQmbN5j7a0uOzpGx6H2t%2FzZLEodKZVzDStrbBBjqkASkmdnAbFgxiUqX36fL4BFmax9ubTVP%2FuiF5HLEhJBzjaIpKfE9xD5mNE5hZpRjWCLkq4%2Bk36Z5uQo6GihT3%2Bq118Ol7TAfhSM89FGqT4yHdVFIc%2BDgs%2BzebLfQbfE3Le%2F%2FL57R%2BAchiklVdxp0CnefCTGz6rCUrFiY9p2hk%2BH987cUleI4O9Nrt80I0lRJxN63wusX1ZRhoSgzyVlJkt6f6bpi5&X-Amz-Signature=1b37b51284619eeb40143dba59f9cacbad63ffcc073d27a867b5f7685595c42f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223VJCAV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCc3e61gjpkkBRXfUoX7h87u5rf8oglNryC0yG6kFeVewIhAP2UfzcYkIKN42jeZ1HC2LmtKPU882IC3KVNjte%2FhVT%2FKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkllzCKlF1YoPsZcq3AMjBxygHnMi2DMxGQpiL%2F%2F30ZkwhJfs86nNUFwNZ2c0v%2B0TGoubrLf5YlC3J52Q0ZivZ5djOuCHDU6t0jKl9HJXKCHIq8LdBMb7czyISXCrXlQaSaNjo%2Fcg7p8fgKQoi8OOD57LUnnmjZE9%2ForpaC7p3VNmIRJ6d%2FWV4hrlnN%2FUAw%2BPZaLJ1Q84yxMc9MsFSE0czAvXaeyjzAjMhwm6d3qtZVk21rrtEPNqVpS%2FyZV%2Bvn5wpU2a3SiAHhdJgDId%2B%2B8wzwLopB0n%2FbVbPammLvzRdX3MHnGPuZb2d1QpoS%2FQZIsSdsHBWFaBIxoonPIBTy1U31XMgInMc4Nh9xWs9oaCw0Ib%2BCkl62ruw%2FK8XugaHzO40C1gwUpy%2FlXy6weoKGGzGSaJvPcEC65ifLq4xN7lnZ79lkE%2BIYYFf7z7vdDp07iWakg4I4GxokkrezKo%2Fh0K%2BrquDw5siR7agGej2yQevVahORhzATAaOX7G5YDwAN9csukuM%2Fa1b%2FxEhMeMN7ykqyMnU0GDrahewDKB1OBxie6dO3HALa2uzLF6TSX87jYjQsKIzvV5oORtvArYKQJMAdCLnd6eGth616aujyqyaT0pMumCQmbN5j7a0uOzpGx6H2t%2FzZLEodKZVzDStrbBBjqkASkmdnAbFgxiUqX36fL4BFmax9ubTVP%2FuiF5HLEhJBzjaIpKfE9xD5mNE5hZpRjWCLkq4%2Bk36Z5uQo6GihT3%2Bq118Ol7TAfhSM89FGqT4yHdVFIc%2BDgs%2BzebLfQbfE3Le%2F%2FL57R%2BAchiklVdxp0CnefCTGz6rCUrFiY9p2hk%2BH987cUleI4O9Nrt80I0lRJxN63wusX1ZRhoSgzyVlJkt6f6bpi5&X-Amz-Signature=c0c97f3c96b1eb780c6c9b79804dc882d4c43b23ae2d2f3184bcb8066b3a27f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223VJCAV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCc3e61gjpkkBRXfUoX7h87u5rf8oglNryC0yG6kFeVewIhAP2UfzcYkIKN42jeZ1HC2LmtKPU882IC3KVNjte%2FhVT%2FKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkllzCKlF1YoPsZcq3AMjBxygHnMi2DMxGQpiL%2F%2F30ZkwhJfs86nNUFwNZ2c0v%2B0TGoubrLf5YlC3J52Q0ZivZ5djOuCHDU6t0jKl9HJXKCHIq8LdBMb7czyISXCrXlQaSaNjo%2Fcg7p8fgKQoi8OOD57LUnnmjZE9%2ForpaC7p3VNmIRJ6d%2FWV4hrlnN%2FUAw%2BPZaLJ1Q84yxMc9MsFSE0czAvXaeyjzAjMhwm6d3qtZVk21rrtEPNqVpS%2FyZV%2Bvn5wpU2a3SiAHhdJgDId%2B%2B8wzwLopB0n%2FbVbPammLvzRdX3MHnGPuZb2d1QpoS%2FQZIsSdsHBWFaBIxoonPIBTy1U31XMgInMc4Nh9xWs9oaCw0Ib%2BCkl62ruw%2FK8XugaHzO40C1gwUpy%2FlXy6weoKGGzGSaJvPcEC65ifLq4xN7lnZ79lkE%2BIYYFf7z7vdDp07iWakg4I4GxokkrezKo%2Fh0K%2BrquDw5siR7agGej2yQevVahORhzATAaOX7G5YDwAN9csukuM%2Fa1b%2FxEhMeMN7ykqyMnU0GDrahewDKB1OBxie6dO3HALa2uzLF6TSX87jYjQsKIzvV5oORtvArYKQJMAdCLnd6eGth616aujyqyaT0pMumCQmbN5j7a0uOzpGx6H2t%2FzZLEodKZVzDStrbBBjqkASkmdnAbFgxiUqX36fL4BFmax9ubTVP%2FuiF5HLEhJBzjaIpKfE9xD5mNE5hZpRjWCLkq4%2Bk36Z5uQo6GihT3%2Bq118Ol7TAfhSM89FGqT4yHdVFIc%2BDgs%2BzebLfQbfE3Le%2F%2FL57R%2BAchiklVdxp0CnefCTGz6rCUrFiY9p2hk%2BH987cUleI4O9Nrt80I0lRJxN63wusX1ZRhoSgzyVlJkt6f6bpi5&X-Amz-Signature=41cf9998c698725c7f71656c5817f769f2e7f9c7cb87ee286f06ab583ff8387a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223VJCAV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCc3e61gjpkkBRXfUoX7h87u5rf8oglNryC0yG6kFeVewIhAP2UfzcYkIKN42jeZ1HC2LmtKPU882IC3KVNjte%2FhVT%2FKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkllzCKlF1YoPsZcq3AMjBxygHnMi2DMxGQpiL%2F%2F30ZkwhJfs86nNUFwNZ2c0v%2B0TGoubrLf5YlC3J52Q0ZivZ5djOuCHDU6t0jKl9HJXKCHIq8LdBMb7czyISXCrXlQaSaNjo%2Fcg7p8fgKQoi8OOD57LUnnmjZE9%2ForpaC7p3VNmIRJ6d%2FWV4hrlnN%2FUAw%2BPZaLJ1Q84yxMc9MsFSE0czAvXaeyjzAjMhwm6d3qtZVk21rrtEPNqVpS%2FyZV%2Bvn5wpU2a3SiAHhdJgDId%2B%2B8wzwLopB0n%2FbVbPammLvzRdX3MHnGPuZb2d1QpoS%2FQZIsSdsHBWFaBIxoonPIBTy1U31XMgInMc4Nh9xWs9oaCw0Ib%2BCkl62ruw%2FK8XugaHzO40C1gwUpy%2FlXy6weoKGGzGSaJvPcEC65ifLq4xN7lnZ79lkE%2BIYYFf7z7vdDp07iWakg4I4GxokkrezKo%2Fh0K%2BrquDw5siR7agGej2yQevVahORhzATAaOX7G5YDwAN9csukuM%2Fa1b%2FxEhMeMN7ykqyMnU0GDrahewDKB1OBxie6dO3HALa2uzLF6TSX87jYjQsKIzvV5oORtvArYKQJMAdCLnd6eGth616aujyqyaT0pMumCQmbN5j7a0uOzpGx6H2t%2FzZLEodKZVzDStrbBBjqkASkmdnAbFgxiUqX36fL4BFmax9ubTVP%2FuiF5HLEhJBzjaIpKfE9xD5mNE5hZpRjWCLkq4%2Bk36Z5uQo6GihT3%2Bq118Ol7TAfhSM89FGqT4yHdVFIc%2BDgs%2BzebLfQbfE3Le%2F%2FL57R%2BAchiklVdxp0CnefCTGz6rCUrFiY9p2hk%2BH987cUleI4O9Nrt80I0lRJxN63wusX1ZRhoSgzyVlJkt6f6bpi5&X-Amz-Signature=ee750c28f00f6120cb653c4de73dcc85b305c41b9d441e5fff754e24efb21f82&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223VJCAV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCc3e61gjpkkBRXfUoX7h87u5rf8oglNryC0yG6kFeVewIhAP2UfzcYkIKN42jeZ1HC2LmtKPU882IC3KVNjte%2FhVT%2FKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkllzCKlF1YoPsZcq3AMjBxygHnMi2DMxGQpiL%2F%2F30ZkwhJfs86nNUFwNZ2c0v%2B0TGoubrLf5YlC3J52Q0ZivZ5djOuCHDU6t0jKl9HJXKCHIq8LdBMb7czyISXCrXlQaSaNjo%2Fcg7p8fgKQoi8OOD57LUnnmjZE9%2ForpaC7p3VNmIRJ6d%2FWV4hrlnN%2FUAw%2BPZaLJ1Q84yxMc9MsFSE0czAvXaeyjzAjMhwm6d3qtZVk21rrtEPNqVpS%2FyZV%2Bvn5wpU2a3SiAHhdJgDId%2B%2B8wzwLopB0n%2FbVbPammLvzRdX3MHnGPuZb2d1QpoS%2FQZIsSdsHBWFaBIxoonPIBTy1U31XMgInMc4Nh9xWs9oaCw0Ib%2BCkl62ruw%2FK8XugaHzO40C1gwUpy%2FlXy6weoKGGzGSaJvPcEC65ifLq4xN7lnZ79lkE%2BIYYFf7z7vdDp07iWakg4I4GxokkrezKo%2Fh0K%2BrquDw5siR7agGej2yQevVahORhzATAaOX7G5YDwAN9csukuM%2Fa1b%2FxEhMeMN7ykqyMnU0GDrahewDKB1OBxie6dO3HALa2uzLF6TSX87jYjQsKIzvV5oORtvArYKQJMAdCLnd6eGth616aujyqyaT0pMumCQmbN5j7a0uOzpGx6H2t%2FzZLEodKZVzDStrbBBjqkASkmdnAbFgxiUqX36fL4BFmax9ubTVP%2FuiF5HLEhJBzjaIpKfE9xD5mNE5hZpRjWCLkq4%2Bk36Z5uQo6GihT3%2Bq118Ol7TAfhSM89FGqT4yHdVFIc%2BDgs%2BzebLfQbfE3Le%2F%2FL57R%2BAchiklVdxp0CnefCTGz6rCUrFiY9p2hk%2BH987cUleI4O9Nrt80I0lRJxN63wusX1ZRhoSgzyVlJkt6f6bpi5&X-Amz-Signature=f5dedc6a6cd07bbc878b06b8326a305f0dfc14225e23f60581490a6658cff75c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
