---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCLSDDMB%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx8wzfSFhIBXO90%2FBdbYiW17QftjC1xgnWv4E9wrZJzgIgRvQ%2F9qNnWvJ59ZIOhrfXs4f8h%2FEBm200n%2FPzk2zgg1QqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjs92CJL9lKy4GOmircA4vSm0XflwK0FnLPPBp0U13Ll9MXwadWSZXxPc1qMh6M1B7hkBHf7VPpnCNQQgb1SvGqb%2FmcU4j6Bv68tCo%2Fn7JCTXrOSWkQO3XSMpfFicwt1fuxjnvcQzQS6bWHDLZEV463IlxhAIxbmNItYSMTL%2F1y1wRwvQp0zXV3B2PplWjBAfcYVVusbit3A9T%2FQY0ki5PaKptuZ1rhLqrTA4W230A1x1e3Tzn9bFsJ34zaC145Q5f3O5eGd7nfyyEdpwpder4r6r7721hwbDNHyIi4L6IT%2ForxXx%2FCAd6oc14lw%2FmZ5WaJICvtj7Tq72qbTcQ7QvFYAeDi5jVShuzlxiu9bguuGXqKomoZOOHK0tEVAojm8GSCDZbD6B%2BXlu3cpyOavYPDCKtSJRfGH2i%2FMc5Nt%2BE7U3zBJEyfoZFlKOtEiKiHX8gpPj5xlU0elw8zBlFscZ0UNaLTdVco0MB7bD4KZuWwuzC%2FRs4frVORE0rFFFlzlINL41%2BPnHW%2FT4RYVTZW8sDs1ysm4aREaQocfFu4fclSSPMTAM1opPIXF8Wi90FEQKZSBmLwOf6TwkSLFTyV4YdGRU1e35eeGQwHGJ%2FszGpybzPlR59J61KFoWP7TfZ0Jq51KhuedAjkZWWZMKHIksoGOqUBkJmUddKnVl7D0lqKDC%2FUH2PlJMu0qSoujGMsSqQwjU6pdRlFmIKnRf%2F6h8s08JI%2BjRs4iIHvswvcbSGcB%2F43KlbQB5CDo6eKTLqONl3TOTS1NTJo9RD7PU8PirD8sFvTIV1TDwhmYz7RzG0%2FwmprMBpvcBI9Bbl2xqozMo%2FcApF7zi8ASKOrjJR%2Fqp%2BeNjupy7SuSUggkP16h%2BewjXN5JyeZDx1%2B&X-Amz-Signature=38a1bd79b15a810d623fdd4b7d041a4ade78ae638625974fa5f856a707b0bb7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCLSDDMB%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx8wzfSFhIBXO90%2FBdbYiW17QftjC1xgnWv4E9wrZJzgIgRvQ%2F9qNnWvJ59ZIOhrfXs4f8h%2FEBm200n%2FPzk2zgg1QqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjs92CJL9lKy4GOmircA4vSm0XflwK0FnLPPBp0U13Ll9MXwadWSZXxPc1qMh6M1B7hkBHf7VPpnCNQQgb1SvGqb%2FmcU4j6Bv68tCo%2Fn7JCTXrOSWkQO3XSMpfFicwt1fuxjnvcQzQS6bWHDLZEV463IlxhAIxbmNItYSMTL%2F1y1wRwvQp0zXV3B2PplWjBAfcYVVusbit3A9T%2FQY0ki5PaKptuZ1rhLqrTA4W230A1x1e3Tzn9bFsJ34zaC145Q5f3O5eGd7nfyyEdpwpder4r6r7721hwbDNHyIi4L6IT%2ForxXx%2FCAd6oc14lw%2FmZ5WaJICvtj7Tq72qbTcQ7QvFYAeDi5jVShuzlxiu9bguuGXqKomoZOOHK0tEVAojm8GSCDZbD6B%2BXlu3cpyOavYPDCKtSJRfGH2i%2FMc5Nt%2BE7U3zBJEyfoZFlKOtEiKiHX8gpPj5xlU0elw8zBlFscZ0UNaLTdVco0MB7bD4KZuWwuzC%2FRs4frVORE0rFFFlzlINL41%2BPnHW%2FT4RYVTZW8sDs1ysm4aREaQocfFu4fclSSPMTAM1opPIXF8Wi90FEQKZSBmLwOf6TwkSLFTyV4YdGRU1e35eeGQwHGJ%2FszGpybzPlR59J61KFoWP7TfZ0Jq51KhuedAjkZWWZMKHIksoGOqUBkJmUddKnVl7D0lqKDC%2FUH2PlJMu0qSoujGMsSqQwjU6pdRlFmIKnRf%2F6h8s08JI%2BjRs4iIHvswvcbSGcB%2F43KlbQB5CDo6eKTLqONl3TOTS1NTJo9RD7PU8PirD8sFvTIV1TDwhmYz7RzG0%2FwmprMBpvcBI9Bbl2xqozMo%2FcApF7zi8ASKOrjJR%2Fqp%2BeNjupy7SuSUggkP16h%2BewjXN5JyeZDx1%2B&X-Amz-Signature=3eeb93e4d672e0216de2fc6d8c15408b0674b7b96f14926ab47b7fc8d57e3800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCLSDDMB%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx8wzfSFhIBXO90%2FBdbYiW17QftjC1xgnWv4E9wrZJzgIgRvQ%2F9qNnWvJ59ZIOhrfXs4f8h%2FEBm200n%2FPzk2zgg1QqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjs92CJL9lKy4GOmircA4vSm0XflwK0FnLPPBp0U13Ll9MXwadWSZXxPc1qMh6M1B7hkBHf7VPpnCNQQgb1SvGqb%2FmcU4j6Bv68tCo%2Fn7JCTXrOSWkQO3XSMpfFicwt1fuxjnvcQzQS6bWHDLZEV463IlxhAIxbmNItYSMTL%2F1y1wRwvQp0zXV3B2PplWjBAfcYVVusbit3A9T%2FQY0ki5PaKptuZ1rhLqrTA4W230A1x1e3Tzn9bFsJ34zaC145Q5f3O5eGd7nfyyEdpwpder4r6r7721hwbDNHyIi4L6IT%2ForxXx%2FCAd6oc14lw%2FmZ5WaJICvtj7Tq72qbTcQ7QvFYAeDi5jVShuzlxiu9bguuGXqKomoZOOHK0tEVAojm8GSCDZbD6B%2BXlu3cpyOavYPDCKtSJRfGH2i%2FMc5Nt%2BE7U3zBJEyfoZFlKOtEiKiHX8gpPj5xlU0elw8zBlFscZ0UNaLTdVco0MB7bD4KZuWwuzC%2FRs4frVORE0rFFFlzlINL41%2BPnHW%2FT4RYVTZW8sDs1ysm4aREaQocfFu4fclSSPMTAM1opPIXF8Wi90FEQKZSBmLwOf6TwkSLFTyV4YdGRU1e35eeGQwHGJ%2FszGpybzPlR59J61KFoWP7TfZ0Jq51KhuedAjkZWWZMKHIksoGOqUBkJmUddKnVl7D0lqKDC%2FUH2PlJMu0qSoujGMsSqQwjU6pdRlFmIKnRf%2F6h8s08JI%2BjRs4iIHvswvcbSGcB%2F43KlbQB5CDo6eKTLqONl3TOTS1NTJo9RD7PU8PirD8sFvTIV1TDwhmYz7RzG0%2FwmprMBpvcBI9Bbl2xqozMo%2FcApF7zi8ASKOrjJR%2Fqp%2BeNjupy7SuSUggkP16h%2BewjXN5JyeZDx1%2B&X-Amz-Signature=46caa1fb6cd4bab826165adcc44da6a59e2939d542a15c3f12bb04cb6dff30f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCLSDDMB%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx8wzfSFhIBXO90%2FBdbYiW17QftjC1xgnWv4E9wrZJzgIgRvQ%2F9qNnWvJ59ZIOhrfXs4f8h%2FEBm200n%2FPzk2zgg1QqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjs92CJL9lKy4GOmircA4vSm0XflwK0FnLPPBp0U13Ll9MXwadWSZXxPc1qMh6M1B7hkBHf7VPpnCNQQgb1SvGqb%2FmcU4j6Bv68tCo%2Fn7JCTXrOSWkQO3XSMpfFicwt1fuxjnvcQzQS6bWHDLZEV463IlxhAIxbmNItYSMTL%2F1y1wRwvQp0zXV3B2PplWjBAfcYVVusbit3A9T%2FQY0ki5PaKptuZ1rhLqrTA4W230A1x1e3Tzn9bFsJ34zaC145Q5f3O5eGd7nfyyEdpwpder4r6r7721hwbDNHyIi4L6IT%2ForxXx%2FCAd6oc14lw%2FmZ5WaJICvtj7Tq72qbTcQ7QvFYAeDi5jVShuzlxiu9bguuGXqKomoZOOHK0tEVAojm8GSCDZbD6B%2BXlu3cpyOavYPDCKtSJRfGH2i%2FMc5Nt%2BE7U3zBJEyfoZFlKOtEiKiHX8gpPj5xlU0elw8zBlFscZ0UNaLTdVco0MB7bD4KZuWwuzC%2FRs4frVORE0rFFFlzlINL41%2BPnHW%2FT4RYVTZW8sDs1ysm4aREaQocfFu4fclSSPMTAM1opPIXF8Wi90FEQKZSBmLwOf6TwkSLFTyV4YdGRU1e35eeGQwHGJ%2FszGpybzPlR59J61KFoWP7TfZ0Jq51KhuedAjkZWWZMKHIksoGOqUBkJmUddKnVl7D0lqKDC%2FUH2PlJMu0qSoujGMsSqQwjU6pdRlFmIKnRf%2F6h8s08JI%2BjRs4iIHvswvcbSGcB%2F43KlbQB5CDo6eKTLqONl3TOTS1NTJo9RD7PU8PirD8sFvTIV1TDwhmYz7RzG0%2FwmprMBpvcBI9Bbl2xqozMo%2FcApF7zi8ASKOrjJR%2Fqp%2BeNjupy7SuSUggkP16h%2BewjXN5JyeZDx1%2B&X-Amz-Signature=9a492d664247d28d34fd2a63b46cd06295eda8d921f6087cd43fcd668d77548d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCLSDDMB%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx8wzfSFhIBXO90%2FBdbYiW17QftjC1xgnWv4E9wrZJzgIgRvQ%2F9qNnWvJ59ZIOhrfXs4f8h%2FEBm200n%2FPzk2zgg1QqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjs92CJL9lKy4GOmircA4vSm0XflwK0FnLPPBp0U13Ll9MXwadWSZXxPc1qMh6M1B7hkBHf7VPpnCNQQgb1SvGqb%2FmcU4j6Bv68tCo%2Fn7JCTXrOSWkQO3XSMpfFicwt1fuxjnvcQzQS6bWHDLZEV463IlxhAIxbmNItYSMTL%2F1y1wRwvQp0zXV3B2PplWjBAfcYVVusbit3A9T%2FQY0ki5PaKptuZ1rhLqrTA4W230A1x1e3Tzn9bFsJ34zaC145Q5f3O5eGd7nfyyEdpwpder4r6r7721hwbDNHyIi4L6IT%2ForxXx%2FCAd6oc14lw%2FmZ5WaJICvtj7Tq72qbTcQ7QvFYAeDi5jVShuzlxiu9bguuGXqKomoZOOHK0tEVAojm8GSCDZbD6B%2BXlu3cpyOavYPDCKtSJRfGH2i%2FMc5Nt%2BE7U3zBJEyfoZFlKOtEiKiHX8gpPj5xlU0elw8zBlFscZ0UNaLTdVco0MB7bD4KZuWwuzC%2FRs4frVORE0rFFFlzlINL41%2BPnHW%2FT4RYVTZW8sDs1ysm4aREaQocfFu4fclSSPMTAM1opPIXF8Wi90FEQKZSBmLwOf6TwkSLFTyV4YdGRU1e35eeGQwHGJ%2FszGpybzPlR59J61KFoWP7TfZ0Jq51KhuedAjkZWWZMKHIksoGOqUBkJmUddKnVl7D0lqKDC%2FUH2PlJMu0qSoujGMsSqQwjU6pdRlFmIKnRf%2F6h8s08JI%2BjRs4iIHvswvcbSGcB%2F43KlbQB5CDo6eKTLqONl3TOTS1NTJo9RD7PU8PirD8sFvTIV1TDwhmYz7RzG0%2FwmprMBpvcBI9Bbl2xqozMo%2FcApF7zi8ASKOrjJR%2Fqp%2BeNjupy7SuSUggkP16h%2BewjXN5JyeZDx1%2B&X-Amz-Signature=6ef7a1a83cd3f42dba8f252a039a4a49d739c2e8f9319be5f4859d49fa6727f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCLSDDMB%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx8wzfSFhIBXO90%2FBdbYiW17QftjC1xgnWv4E9wrZJzgIgRvQ%2F9qNnWvJ59ZIOhrfXs4f8h%2FEBm200n%2FPzk2zgg1QqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjs92CJL9lKy4GOmircA4vSm0XflwK0FnLPPBp0U13Ll9MXwadWSZXxPc1qMh6M1B7hkBHf7VPpnCNQQgb1SvGqb%2FmcU4j6Bv68tCo%2Fn7JCTXrOSWkQO3XSMpfFicwt1fuxjnvcQzQS6bWHDLZEV463IlxhAIxbmNItYSMTL%2F1y1wRwvQp0zXV3B2PplWjBAfcYVVusbit3A9T%2FQY0ki5PaKptuZ1rhLqrTA4W230A1x1e3Tzn9bFsJ34zaC145Q5f3O5eGd7nfyyEdpwpder4r6r7721hwbDNHyIi4L6IT%2ForxXx%2FCAd6oc14lw%2FmZ5WaJICvtj7Tq72qbTcQ7QvFYAeDi5jVShuzlxiu9bguuGXqKomoZOOHK0tEVAojm8GSCDZbD6B%2BXlu3cpyOavYPDCKtSJRfGH2i%2FMc5Nt%2BE7U3zBJEyfoZFlKOtEiKiHX8gpPj5xlU0elw8zBlFscZ0UNaLTdVco0MB7bD4KZuWwuzC%2FRs4frVORE0rFFFlzlINL41%2BPnHW%2FT4RYVTZW8sDs1ysm4aREaQocfFu4fclSSPMTAM1opPIXF8Wi90FEQKZSBmLwOf6TwkSLFTyV4YdGRU1e35eeGQwHGJ%2FszGpybzPlR59J61KFoWP7TfZ0Jq51KhuedAjkZWWZMKHIksoGOqUBkJmUddKnVl7D0lqKDC%2FUH2PlJMu0qSoujGMsSqQwjU6pdRlFmIKnRf%2F6h8s08JI%2BjRs4iIHvswvcbSGcB%2F43KlbQB5CDo6eKTLqONl3TOTS1NTJo9RD7PU8PirD8sFvTIV1TDwhmYz7RzG0%2FwmprMBpvcBI9Bbl2xqozMo%2FcApF7zi8ASKOrjJR%2Fqp%2BeNjupy7SuSUggkP16h%2BewjXN5JyeZDx1%2B&X-Amz-Signature=ed04ab986bc3ce241023d7f37028d4fe563150d3fbc9e8bcfc5f8364f6658f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCLSDDMB%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx8wzfSFhIBXO90%2FBdbYiW17QftjC1xgnWv4E9wrZJzgIgRvQ%2F9qNnWvJ59ZIOhrfXs4f8h%2FEBm200n%2FPzk2zgg1QqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjs92CJL9lKy4GOmircA4vSm0XflwK0FnLPPBp0U13Ll9MXwadWSZXxPc1qMh6M1B7hkBHf7VPpnCNQQgb1SvGqb%2FmcU4j6Bv68tCo%2Fn7JCTXrOSWkQO3XSMpfFicwt1fuxjnvcQzQS6bWHDLZEV463IlxhAIxbmNItYSMTL%2F1y1wRwvQp0zXV3B2PplWjBAfcYVVusbit3A9T%2FQY0ki5PaKptuZ1rhLqrTA4W230A1x1e3Tzn9bFsJ34zaC145Q5f3O5eGd7nfyyEdpwpder4r6r7721hwbDNHyIi4L6IT%2ForxXx%2FCAd6oc14lw%2FmZ5WaJICvtj7Tq72qbTcQ7QvFYAeDi5jVShuzlxiu9bguuGXqKomoZOOHK0tEVAojm8GSCDZbD6B%2BXlu3cpyOavYPDCKtSJRfGH2i%2FMc5Nt%2BE7U3zBJEyfoZFlKOtEiKiHX8gpPj5xlU0elw8zBlFscZ0UNaLTdVco0MB7bD4KZuWwuzC%2FRs4frVORE0rFFFlzlINL41%2BPnHW%2FT4RYVTZW8sDs1ysm4aREaQocfFu4fclSSPMTAM1opPIXF8Wi90FEQKZSBmLwOf6TwkSLFTyV4YdGRU1e35eeGQwHGJ%2FszGpybzPlR59J61KFoWP7TfZ0Jq51KhuedAjkZWWZMKHIksoGOqUBkJmUddKnVl7D0lqKDC%2FUH2PlJMu0qSoujGMsSqQwjU6pdRlFmIKnRf%2F6h8s08JI%2BjRs4iIHvswvcbSGcB%2F43KlbQB5CDo6eKTLqONl3TOTS1NTJo9RD7PU8PirD8sFvTIV1TDwhmYz7RzG0%2FwmprMBpvcBI9Bbl2xqozMo%2FcApF7zi8ASKOrjJR%2Fqp%2BeNjupy7SuSUggkP16h%2BewjXN5JyeZDx1%2B&X-Amz-Signature=3ca8201cd9cba083bf7d327b378e4d89c8d3bbe9958dbe3339c6744b6225c637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
