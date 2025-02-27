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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPCTJZR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCvJSrIdECqczIZMaGAxj5qAyXQGLtp4BvCPqy2nZ206QIhAJABJjAuPgMjgD8t2Urwjhriqp9UsHkT8M4IJx7YTn0vKv8DCGsQABoMNjM3NDIzMTgzODA1Igy9FkK9T%2FlP2B98id4q3ANLxrW5EHVepMT4hWXu2gtNe%2BvEvDJvGpQif3llsWVlLpJXiOBrYrqMKOm3jxzXp3hKd%2F%2BICzq3cCzr6OhYSdyFU05jd9lIrdhaN646DOeJ6pN4x85gUSjxsGGwjrTLUV8IOO4cAJg23koqRRtBVsfG5SJcXz1hEpeG5BTN42ZSpUFjAlwnhtFAcMgwodhWU5LgO60eODmLx%2BwWi0PciRwRWziX9FgCoArMqf2ioZV%2BBdbIlSzN2r7nXbmx4JtwpojnUVHorjD4hA9OkuvfrhQw69DJiV6%2BDUIQzAhW9%2Fl8z%2FXLFtzrLYCEyX52RTRwPPlYy7ypJDNrDW756qNj51j5ecNRF7loguaNwMSDG4b7i8MqmwciDVS1HOg%2FFnpPXSMsVzBbrCoH94wBoX%2FEikZzp%2BurW%2FJ9ZZlAWrl%2BDG%2FmI3rVtPDbN8kdeh80zPX393QUhRaNQJ8Ir8%2Fl7irX5XDT3CJBRexlY2n3DLcFx8Z4Ska%2BMo%2FruhZLFtOsoTKt2XtQxG9HzH2vBzzPeQNm%2B54XqLlTpHE4EfowYjA0C0QsMq%2FNBF7bYRtfbW%2BoBP0z9QEF5IdX07rn3I77Z1vbYRA5vFEQUv8F%2BcClLB09hXPTgMUgj88N3Tq1eoD4jzCwlP%2B9BjqkAWRko8AL0N324gPUDktZzN%2BtyJ%2Blt8csvLh2o1o3rYqapy%2BkkRMauOPvqnCGaE%2BQ7nX%2FS5K2tB97iPB7GTULIU826BhSb5kbxWMVMJJ5ulVFmp3u6EMtVXx7XQQ8GYaHVZETrTskc7J3EHIQNtCkUbsQoixrh51V8Rx2r1faZmfPjehfS%2Fb%2FXS4BTnhT52hi4%2F0GrtydpW2S4YtL7iA9222X4Szh&X-Amz-Signature=f30643b4726c5e511a62ab7a5d4518997d63d59e6128e18c689c88995b8fe89c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPCTJZR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCvJSrIdECqczIZMaGAxj5qAyXQGLtp4BvCPqy2nZ206QIhAJABJjAuPgMjgD8t2Urwjhriqp9UsHkT8M4IJx7YTn0vKv8DCGsQABoMNjM3NDIzMTgzODA1Igy9FkK9T%2FlP2B98id4q3ANLxrW5EHVepMT4hWXu2gtNe%2BvEvDJvGpQif3llsWVlLpJXiOBrYrqMKOm3jxzXp3hKd%2F%2BICzq3cCzr6OhYSdyFU05jd9lIrdhaN646DOeJ6pN4x85gUSjxsGGwjrTLUV8IOO4cAJg23koqRRtBVsfG5SJcXz1hEpeG5BTN42ZSpUFjAlwnhtFAcMgwodhWU5LgO60eODmLx%2BwWi0PciRwRWziX9FgCoArMqf2ioZV%2BBdbIlSzN2r7nXbmx4JtwpojnUVHorjD4hA9OkuvfrhQw69DJiV6%2BDUIQzAhW9%2Fl8z%2FXLFtzrLYCEyX52RTRwPPlYy7ypJDNrDW756qNj51j5ecNRF7loguaNwMSDG4b7i8MqmwciDVS1HOg%2FFnpPXSMsVzBbrCoH94wBoX%2FEikZzp%2BurW%2FJ9ZZlAWrl%2BDG%2FmI3rVtPDbN8kdeh80zPX393QUhRaNQJ8Ir8%2Fl7irX5XDT3CJBRexlY2n3DLcFx8Z4Ska%2BMo%2FruhZLFtOsoTKt2XtQxG9HzH2vBzzPeQNm%2B54XqLlTpHE4EfowYjA0C0QsMq%2FNBF7bYRtfbW%2BoBP0z9QEF5IdX07rn3I77Z1vbYRA5vFEQUv8F%2BcClLB09hXPTgMUgj88N3Tq1eoD4jzCwlP%2B9BjqkAWRko8AL0N324gPUDktZzN%2BtyJ%2Blt8csvLh2o1o3rYqapy%2BkkRMauOPvqnCGaE%2BQ7nX%2FS5K2tB97iPB7GTULIU826BhSb5kbxWMVMJJ5ulVFmp3u6EMtVXx7XQQ8GYaHVZETrTskc7J3EHIQNtCkUbsQoixrh51V8Rx2r1faZmfPjehfS%2Fb%2FXS4BTnhT52hi4%2F0GrtydpW2S4YtL7iA9222X4Szh&X-Amz-Signature=c8028ae7f0119d4a208795ba1dcd05e8ff0cf51b7f07fae822251b8cb81e13b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPCTJZR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCvJSrIdECqczIZMaGAxj5qAyXQGLtp4BvCPqy2nZ206QIhAJABJjAuPgMjgD8t2Urwjhriqp9UsHkT8M4IJx7YTn0vKv8DCGsQABoMNjM3NDIzMTgzODA1Igy9FkK9T%2FlP2B98id4q3ANLxrW5EHVepMT4hWXu2gtNe%2BvEvDJvGpQif3llsWVlLpJXiOBrYrqMKOm3jxzXp3hKd%2F%2BICzq3cCzr6OhYSdyFU05jd9lIrdhaN646DOeJ6pN4x85gUSjxsGGwjrTLUV8IOO4cAJg23koqRRtBVsfG5SJcXz1hEpeG5BTN42ZSpUFjAlwnhtFAcMgwodhWU5LgO60eODmLx%2BwWi0PciRwRWziX9FgCoArMqf2ioZV%2BBdbIlSzN2r7nXbmx4JtwpojnUVHorjD4hA9OkuvfrhQw69DJiV6%2BDUIQzAhW9%2Fl8z%2FXLFtzrLYCEyX52RTRwPPlYy7ypJDNrDW756qNj51j5ecNRF7loguaNwMSDG4b7i8MqmwciDVS1HOg%2FFnpPXSMsVzBbrCoH94wBoX%2FEikZzp%2BurW%2FJ9ZZlAWrl%2BDG%2FmI3rVtPDbN8kdeh80zPX393QUhRaNQJ8Ir8%2Fl7irX5XDT3CJBRexlY2n3DLcFx8Z4Ska%2BMo%2FruhZLFtOsoTKt2XtQxG9HzH2vBzzPeQNm%2B54XqLlTpHE4EfowYjA0C0QsMq%2FNBF7bYRtfbW%2BoBP0z9QEF5IdX07rn3I77Z1vbYRA5vFEQUv8F%2BcClLB09hXPTgMUgj88N3Tq1eoD4jzCwlP%2B9BjqkAWRko8AL0N324gPUDktZzN%2BtyJ%2Blt8csvLh2o1o3rYqapy%2BkkRMauOPvqnCGaE%2BQ7nX%2FS5K2tB97iPB7GTULIU826BhSb5kbxWMVMJJ5ulVFmp3u6EMtVXx7XQQ8GYaHVZETrTskc7J3EHIQNtCkUbsQoixrh51V8Rx2r1faZmfPjehfS%2Fb%2FXS4BTnhT52hi4%2F0GrtydpW2S4YtL7iA9222X4Szh&X-Amz-Signature=3e6222da384752b5701fcc6730c0c9c30a6de3b0f6d8321150768d999405b0bb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPCTJZR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCvJSrIdECqczIZMaGAxj5qAyXQGLtp4BvCPqy2nZ206QIhAJABJjAuPgMjgD8t2Urwjhriqp9UsHkT8M4IJx7YTn0vKv8DCGsQABoMNjM3NDIzMTgzODA1Igy9FkK9T%2FlP2B98id4q3ANLxrW5EHVepMT4hWXu2gtNe%2BvEvDJvGpQif3llsWVlLpJXiOBrYrqMKOm3jxzXp3hKd%2F%2BICzq3cCzr6OhYSdyFU05jd9lIrdhaN646DOeJ6pN4x85gUSjxsGGwjrTLUV8IOO4cAJg23koqRRtBVsfG5SJcXz1hEpeG5BTN42ZSpUFjAlwnhtFAcMgwodhWU5LgO60eODmLx%2BwWi0PciRwRWziX9FgCoArMqf2ioZV%2BBdbIlSzN2r7nXbmx4JtwpojnUVHorjD4hA9OkuvfrhQw69DJiV6%2BDUIQzAhW9%2Fl8z%2FXLFtzrLYCEyX52RTRwPPlYy7ypJDNrDW756qNj51j5ecNRF7loguaNwMSDG4b7i8MqmwciDVS1HOg%2FFnpPXSMsVzBbrCoH94wBoX%2FEikZzp%2BurW%2FJ9ZZlAWrl%2BDG%2FmI3rVtPDbN8kdeh80zPX393QUhRaNQJ8Ir8%2Fl7irX5XDT3CJBRexlY2n3DLcFx8Z4Ska%2BMo%2FruhZLFtOsoTKt2XtQxG9HzH2vBzzPeQNm%2B54XqLlTpHE4EfowYjA0C0QsMq%2FNBF7bYRtfbW%2BoBP0z9QEF5IdX07rn3I77Z1vbYRA5vFEQUv8F%2BcClLB09hXPTgMUgj88N3Tq1eoD4jzCwlP%2B9BjqkAWRko8AL0N324gPUDktZzN%2BtyJ%2Blt8csvLh2o1o3rYqapy%2BkkRMauOPvqnCGaE%2BQ7nX%2FS5K2tB97iPB7GTULIU826BhSb5kbxWMVMJJ5ulVFmp3u6EMtVXx7XQQ8GYaHVZETrTskc7J3EHIQNtCkUbsQoixrh51V8Rx2r1faZmfPjehfS%2Fb%2FXS4BTnhT52hi4%2F0GrtydpW2S4YtL7iA9222X4Szh&X-Amz-Signature=71ff1b71863196581b66289524e4b78bb041d22c6499ad309404d7007eaec321&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPCTJZR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCvJSrIdECqczIZMaGAxj5qAyXQGLtp4BvCPqy2nZ206QIhAJABJjAuPgMjgD8t2Urwjhriqp9UsHkT8M4IJx7YTn0vKv8DCGsQABoMNjM3NDIzMTgzODA1Igy9FkK9T%2FlP2B98id4q3ANLxrW5EHVepMT4hWXu2gtNe%2BvEvDJvGpQif3llsWVlLpJXiOBrYrqMKOm3jxzXp3hKd%2F%2BICzq3cCzr6OhYSdyFU05jd9lIrdhaN646DOeJ6pN4x85gUSjxsGGwjrTLUV8IOO4cAJg23koqRRtBVsfG5SJcXz1hEpeG5BTN42ZSpUFjAlwnhtFAcMgwodhWU5LgO60eODmLx%2BwWi0PciRwRWziX9FgCoArMqf2ioZV%2BBdbIlSzN2r7nXbmx4JtwpojnUVHorjD4hA9OkuvfrhQw69DJiV6%2BDUIQzAhW9%2Fl8z%2FXLFtzrLYCEyX52RTRwPPlYy7ypJDNrDW756qNj51j5ecNRF7loguaNwMSDG4b7i8MqmwciDVS1HOg%2FFnpPXSMsVzBbrCoH94wBoX%2FEikZzp%2BurW%2FJ9ZZlAWrl%2BDG%2FmI3rVtPDbN8kdeh80zPX393QUhRaNQJ8Ir8%2Fl7irX5XDT3CJBRexlY2n3DLcFx8Z4Ska%2BMo%2FruhZLFtOsoTKt2XtQxG9HzH2vBzzPeQNm%2B54XqLlTpHE4EfowYjA0C0QsMq%2FNBF7bYRtfbW%2BoBP0z9QEF5IdX07rn3I77Z1vbYRA5vFEQUv8F%2BcClLB09hXPTgMUgj88N3Tq1eoD4jzCwlP%2B9BjqkAWRko8AL0N324gPUDktZzN%2BtyJ%2Blt8csvLh2o1o3rYqapy%2BkkRMauOPvqnCGaE%2BQ7nX%2FS5K2tB97iPB7GTULIU826BhSb5kbxWMVMJJ5ulVFmp3u6EMtVXx7XQQ8GYaHVZETrTskc7J3EHIQNtCkUbsQoixrh51V8Rx2r1faZmfPjehfS%2Fb%2FXS4BTnhT52hi4%2F0GrtydpW2S4YtL7iA9222X4Szh&X-Amz-Signature=95f49016e1cea8fa2fef7a6a03311b8f46fa67c82234189af60d75f575789871&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPCTJZR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCvJSrIdECqczIZMaGAxj5qAyXQGLtp4BvCPqy2nZ206QIhAJABJjAuPgMjgD8t2Urwjhriqp9UsHkT8M4IJx7YTn0vKv8DCGsQABoMNjM3NDIzMTgzODA1Igy9FkK9T%2FlP2B98id4q3ANLxrW5EHVepMT4hWXu2gtNe%2BvEvDJvGpQif3llsWVlLpJXiOBrYrqMKOm3jxzXp3hKd%2F%2BICzq3cCzr6OhYSdyFU05jd9lIrdhaN646DOeJ6pN4x85gUSjxsGGwjrTLUV8IOO4cAJg23koqRRtBVsfG5SJcXz1hEpeG5BTN42ZSpUFjAlwnhtFAcMgwodhWU5LgO60eODmLx%2BwWi0PciRwRWziX9FgCoArMqf2ioZV%2BBdbIlSzN2r7nXbmx4JtwpojnUVHorjD4hA9OkuvfrhQw69DJiV6%2BDUIQzAhW9%2Fl8z%2FXLFtzrLYCEyX52RTRwPPlYy7ypJDNrDW756qNj51j5ecNRF7loguaNwMSDG4b7i8MqmwciDVS1HOg%2FFnpPXSMsVzBbrCoH94wBoX%2FEikZzp%2BurW%2FJ9ZZlAWrl%2BDG%2FmI3rVtPDbN8kdeh80zPX393QUhRaNQJ8Ir8%2Fl7irX5XDT3CJBRexlY2n3DLcFx8Z4Ska%2BMo%2FruhZLFtOsoTKt2XtQxG9HzH2vBzzPeQNm%2B54XqLlTpHE4EfowYjA0C0QsMq%2FNBF7bYRtfbW%2BoBP0z9QEF5IdX07rn3I77Z1vbYRA5vFEQUv8F%2BcClLB09hXPTgMUgj88N3Tq1eoD4jzCwlP%2B9BjqkAWRko8AL0N324gPUDktZzN%2BtyJ%2Blt8csvLh2o1o3rYqapy%2BkkRMauOPvqnCGaE%2BQ7nX%2FS5K2tB97iPB7GTULIU826BhSb5kbxWMVMJJ5ulVFmp3u6EMtVXx7XQQ8GYaHVZETrTskc7J3EHIQNtCkUbsQoixrh51V8Rx2r1faZmfPjehfS%2Fb%2FXS4BTnhT52hi4%2F0GrtydpW2S4YtL7iA9222X4Szh&X-Amz-Signature=16998b0bae3159fbb03d9400d560773b3427f800e50589829df14e6cd3bbd784&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPCTJZR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCvJSrIdECqczIZMaGAxj5qAyXQGLtp4BvCPqy2nZ206QIhAJABJjAuPgMjgD8t2Urwjhriqp9UsHkT8M4IJx7YTn0vKv8DCGsQABoMNjM3NDIzMTgzODA1Igy9FkK9T%2FlP2B98id4q3ANLxrW5EHVepMT4hWXu2gtNe%2BvEvDJvGpQif3llsWVlLpJXiOBrYrqMKOm3jxzXp3hKd%2F%2BICzq3cCzr6OhYSdyFU05jd9lIrdhaN646DOeJ6pN4x85gUSjxsGGwjrTLUV8IOO4cAJg23koqRRtBVsfG5SJcXz1hEpeG5BTN42ZSpUFjAlwnhtFAcMgwodhWU5LgO60eODmLx%2BwWi0PciRwRWziX9FgCoArMqf2ioZV%2BBdbIlSzN2r7nXbmx4JtwpojnUVHorjD4hA9OkuvfrhQw69DJiV6%2BDUIQzAhW9%2Fl8z%2FXLFtzrLYCEyX52RTRwPPlYy7ypJDNrDW756qNj51j5ecNRF7loguaNwMSDG4b7i8MqmwciDVS1HOg%2FFnpPXSMsVzBbrCoH94wBoX%2FEikZzp%2BurW%2FJ9ZZlAWrl%2BDG%2FmI3rVtPDbN8kdeh80zPX393QUhRaNQJ8Ir8%2Fl7irX5XDT3CJBRexlY2n3DLcFx8Z4Ska%2BMo%2FruhZLFtOsoTKt2XtQxG9HzH2vBzzPeQNm%2B54XqLlTpHE4EfowYjA0C0QsMq%2FNBF7bYRtfbW%2BoBP0z9QEF5IdX07rn3I77Z1vbYRA5vFEQUv8F%2BcClLB09hXPTgMUgj88N3Tq1eoD4jzCwlP%2B9BjqkAWRko8AL0N324gPUDktZzN%2BtyJ%2Blt8csvLh2o1o3rYqapy%2BkkRMauOPvqnCGaE%2BQ7nX%2FS5K2tB97iPB7GTULIU826BhSb5kbxWMVMJJ5ulVFmp3u6EMtVXx7XQQ8GYaHVZETrTskc7J3EHIQNtCkUbsQoixrh51V8Rx2r1faZmfPjehfS%2Fb%2FXS4BTnhT52hi4%2F0GrtydpW2S4YtL7iA9222X4Szh&X-Amz-Signature=e8689d229853d8e175ab5a30b3c2a90f579d919a2cdc27ce210c0cabae850f51&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
