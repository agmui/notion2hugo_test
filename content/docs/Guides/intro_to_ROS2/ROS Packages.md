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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WHUYZ5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHfGKrtKgtbkjPjNM%2Ba%2FjmTNOdA1svqDKkXRkOIuOnXQIge0AT3d85P%2FiJE4JyizHXu45H4EkEuip5djHQrqVjv4Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0YlISJYdDYzX%2F%2BdircAysWz3yM0kTnJWaXMfKiBRQj9FPTyvhTOJ7Z35GStWCZtgYF7anlm51qgj4EqP3IR3mFnGK0eJ18f3REqpIwxvHz9ZJ6VfOCwncjsAAOHQJtImWhSBcccZl5E2f5o7VfgOAeysl%2FctroNJxoU2b1kHDvGfOf%2Fr%2FCGMsSh51vcierYoYuiW6DeyJk8tCdzUr3PZWSMmOtVm%2BQQAjdjfGpfP%2Ff9926hxAOygcy9tMi9NNybeXti8C7q0G%2Bxa3FIQ6M71Hs%2F%2Fp2XCrnWIfHiZw4C7e1VUNmsFMKM0CyrlTOGXQmsFe%2BG4AZt5tpE0T0L0BJbylFY91gFI0JlccL4kkEYxj9dxjGLufWG4p4aV3aoR1crQ3eHxR6gGCZoblJaQFTQh7O45APq%2BZ9EZQLfeaqs%2FePLwW53GfOUvu95JwBu70wvqI7EtRg7H%2FE7qiiC42umHjk%2FjeXX0ROEqObM5BiPnDiQhTr0%2FGzStPlntLBVPar%2FHEj0o2OSFLtqi%2BSXtpHlQp7q%2BKO%2FdxftBwiOUC%2BQCP%2BWPohKDFS%2BbW9OsLayZBWWu%2Fl%2BZ2BGj5ow8kTDVClm3K%2F2vrI8i5WhUeTB%2FG%2BoLM%2BTaserAjOOCtAOThn%2F%2FTSfpTJ9y4oZ2d8NMtCMKGQ1cEGOqUBtLCb0Lqf6uThSz4st%2Bp8nrPYcNLYFYZhpfh6Zo6ROwbwBPfvR9AWg3zVdjF4gb6AqKuuKtm9RfBD8vFI9wuwVfIU43IVcwU%2BODX9WXmkaLAv28W766aDFLZaBJ5yRpFg%2Bm1JbBQm%2FkZ%2BpXx0%2F0tBEbYEJ7mw2HD7y0QA6uPbX6iBZtiXrH7bn23TGCzjDmhuTawWIyF7X%2FzQf4gWxgfBRZ3SRp7K&X-Amz-Signature=5355af1fcd31628c887c694b2e262d03d771169e676f24e8e4ba55b2e9dd7ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WHUYZ5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHfGKrtKgtbkjPjNM%2Ba%2FjmTNOdA1svqDKkXRkOIuOnXQIge0AT3d85P%2FiJE4JyizHXu45H4EkEuip5djHQrqVjv4Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0YlISJYdDYzX%2F%2BdircAysWz3yM0kTnJWaXMfKiBRQj9FPTyvhTOJ7Z35GStWCZtgYF7anlm51qgj4EqP3IR3mFnGK0eJ18f3REqpIwxvHz9ZJ6VfOCwncjsAAOHQJtImWhSBcccZl5E2f5o7VfgOAeysl%2FctroNJxoU2b1kHDvGfOf%2Fr%2FCGMsSh51vcierYoYuiW6DeyJk8tCdzUr3PZWSMmOtVm%2BQQAjdjfGpfP%2Ff9926hxAOygcy9tMi9NNybeXti8C7q0G%2Bxa3FIQ6M71Hs%2F%2Fp2XCrnWIfHiZw4C7e1VUNmsFMKM0CyrlTOGXQmsFe%2BG4AZt5tpE0T0L0BJbylFY91gFI0JlccL4kkEYxj9dxjGLufWG4p4aV3aoR1crQ3eHxR6gGCZoblJaQFTQh7O45APq%2BZ9EZQLfeaqs%2FePLwW53GfOUvu95JwBu70wvqI7EtRg7H%2FE7qiiC42umHjk%2FjeXX0ROEqObM5BiPnDiQhTr0%2FGzStPlntLBVPar%2FHEj0o2OSFLtqi%2BSXtpHlQp7q%2BKO%2FdxftBwiOUC%2BQCP%2BWPohKDFS%2BbW9OsLayZBWWu%2Fl%2BZ2BGj5ow8kTDVClm3K%2F2vrI8i5WhUeTB%2FG%2BoLM%2BTaserAjOOCtAOThn%2F%2FTSfpTJ9y4oZ2d8NMtCMKGQ1cEGOqUBtLCb0Lqf6uThSz4st%2Bp8nrPYcNLYFYZhpfh6Zo6ROwbwBPfvR9AWg3zVdjF4gb6AqKuuKtm9RfBD8vFI9wuwVfIU43IVcwU%2BODX9WXmkaLAv28W766aDFLZaBJ5yRpFg%2Bm1JbBQm%2FkZ%2BpXx0%2F0tBEbYEJ7mw2HD7y0QA6uPbX6iBZtiXrH7bn23TGCzjDmhuTawWIyF7X%2FzQf4gWxgfBRZ3SRp7K&X-Amz-Signature=5b53dc00ee3a26b9cfac837e54c2728096c481784c7bb1e17e945caca668fa1b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WHUYZ5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHfGKrtKgtbkjPjNM%2Ba%2FjmTNOdA1svqDKkXRkOIuOnXQIge0AT3d85P%2FiJE4JyizHXu45H4EkEuip5djHQrqVjv4Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0YlISJYdDYzX%2F%2BdircAysWz3yM0kTnJWaXMfKiBRQj9FPTyvhTOJ7Z35GStWCZtgYF7anlm51qgj4EqP3IR3mFnGK0eJ18f3REqpIwxvHz9ZJ6VfOCwncjsAAOHQJtImWhSBcccZl5E2f5o7VfgOAeysl%2FctroNJxoU2b1kHDvGfOf%2Fr%2FCGMsSh51vcierYoYuiW6DeyJk8tCdzUr3PZWSMmOtVm%2BQQAjdjfGpfP%2Ff9926hxAOygcy9tMi9NNybeXti8C7q0G%2Bxa3FIQ6M71Hs%2F%2Fp2XCrnWIfHiZw4C7e1VUNmsFMKM0CyrlTOGXQmsFe%2BG4AZt5tpE0T0L0BJbylFY91gFI0JlccL4kkEYxj9dxjGLufWG4p4aV3aoR1crQ3eHxR6gGCZoblJaQFTQh7O45APq%2BZ9EZQLfeaqs%2FePLwW53GfOUvu95JwBu70wvqI7EtRg7H%2FE7qiiC42umHjk%2FjeXX0ROEqObM5BiPnDiQhTr0%2FGzStPlntLBVPar%2FHEj0o2OSFLtqi%2BSXtpHlQp7q%2BKO%2FdxftBwiOUC%2BQCP%2BWPohKDFS%2BbW9OsLayZBWWu%2Fl%2BZ2BGj5ow8kTDVClm3K%2F2vrI8i5WhUeTB%2FG%2BoLM%2BTaserAjOOCtAOThn%2F%2FTSfpTJ9y4oZ2d8NMtCMKGQ1cEGOqUBtLCb0Lqf6uThSz4st%2Bp8nrPYcNLYFYZhpfh6Zo6ROwbwBPfvR9AWg3zVdjF4gb6AqKuuKtm9RfBD8vFI9wuwVfIU43IVcwU%2BODX9WXmkaLAv28W766aDFLZaBJ5yRpFg%2Bm1JbBQm%2FkZ%2BpXx0%2F0tBEbYEJ7mw2HD7y0QA6uPbX6iBZtiXrH7bn23TGCzjDmhuTawWIyF7X%2FzQf4gWxgfBRZ3SRp7K&X-Amz-Signature=13c269c08a5dd18d5263446eca87dd11ad8d0d9f2c61e92c7292b9127fc2d0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WHUYZ5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHfGKrtKgtbkjPjNM%2Ba%2FjmTNOdA1svqDKkXRkOIuOnXQIge0AT3d85P%2FiJE4JyizHXu45H4EkEuip5djHQrqVjv4Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0YlISJYdDYzX%2F%2BdircAysWz3yM0kTnJWaXMfKiBRQj9FPTyvhTOJ7Z35GStWCZtgYF7anlm51qgj4EqP3IR3mFnGK0eJ18f3REqpIwxvHz9ZJ6VfOCwncjsAAOHQJtImWhSBcccZl5E2f5o7VfgOAeysl%2FctroNJxoU2b1kHDvGfOf%2Fr%2FCGMsSh51vcierYoYuiW6DeyJk8tCdzUr3PZWSMmOtVm%2BQQAjdjfGpfP%2Ff9926hxAOygcy9tMi9NNybeXti8C7q0G%2Bxa3FIQ6M71Hs%2F%2Fp2XCrnWIfHiZw4C7e1VUNmsFMKM0CyrlTOGXQmsFe%2BG4AZt5tpE0T0L0BJbylFY91gFI0JlccL4kkEYxj9dxjGLufWG4p4aV3aoR1crQ3eHxR6gGCZoblJaQFTQh7O45APq%2BZ9EZQLfeaqs%2FePLwW53GfOUvu95JwBu70wvqI7EtRg7H%2FE7qiiC42umHjk%2FjeXX0ROEqObM5BiPnDiQhTr0%2FGzStPlntLBVPar%2FHEj0o2OSFLtqi%2BSXtpHlQp7q%2BKO%2FdxftBwiOUC%2BQCP%2BWPohKDFS%2BbW9OsLayZBWWu%2Fl%2BZ2BGj5ow8kTDVClm3K%2F2vrI8i5WhUeTB%2FG%2BoLM%2BTaserAjOOCtAOThn%2F%2FTSfpTJ9y4oZ2d8NMtCMKGQ1cEGOqUBtLCb0Lqf6uThSz4st%2Bp8nrPYcNLYFYZhpfh6Zo6ROwbwBPfvR9AWg3zVdjF4gb6AqKuuKtm9RfBD8vFI9wuwVfIU43IVcwU%2BODX9WXmkaLAv28W766aDFLZaBJ5yRpFg%2Bm1JbBQm%2FkZ%2BpXx0%2F0tBEbYEJ7mw2HD7y0QA6uPbX6iBZtiXrH7bn23TGCzjDmhuTawWIyF7X%2FzQf4gWxgfBRZ3SRp7K&X-Amz-Signature=865c5ef8a81f4aaf408cd34f1305034db8a689282ebec67b86398b1b3ad852ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WHUYZ5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHfGKrtKgtbkjPjNM%2Ba%2FjmTNOdA1svqDKkXRkOIuOnXQIge0AT3d85P%2FiJE4JyizHXu45H4EkEuip5djHQrqVjv4Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0YlISJYdDYzX%2F%2BdircAysWz3yM0kTnJWaXMfKiBRQj9FPTyvhTOJ7Z35GStWCZtgYF7anlm51qgj4EqP3IR3mFnGK0eJ18f3REqpIwxvHz9ZJ6VfOCwncjsAAOHQJtImWhSBcccZl5E2f5o7VfgOAeysl%2FctroNJxoU2b1kHDvGfOf%2Fr%2FCGMsSh51vcierYoYuiW6DeyJk8tCdzUr3PZWSMmOtVm%2BQQAjdjfGpfP%2Ff9926hxAOygcy9tMi9NNybeXti8C7q0G%2Bxa3FIQ6M71Hs%2F%2Fp2XCrnWIfHiZw4C7e1VUNmsFMKM0CyrlTOGXQmsFe%2BG4AZt5tpE0T0L0BJbylFY91gFI0JlccL4kkEYxj9dxjGLufWG4p4aV3aoR1crQ3eHxR6gGCZoblJaQFTQh7O45APq%2BZ9EZQLfeaqs%2FePLwW53GfOUvu95JwBu70wvqI7EtRg7H%2FE7qiiC42umHjk%2FjeXX0ROEqObM5BiPnDiQhTr0%2FGzStPlntLBVPar%2FHEj0o2OSFLtqi%2BSXtpHlQp7q%2BKO%2FdxftBwiOUC%2BQCP%2BWPohKDFS%2BbW9OsLayZBWWu%2Fl%2BZ2BGj5ow8kTDVClm3K%2F2vrI8i5WhUeTB%2FG%2BoLM%2BTaserAjOOCtAOThn%2F%2FTSfpTJ9y4oZ2d8NMtCMKGQ1cEGOqUBtLCb0Lqf6uThSz4st%2Bp8nrPYcNLYFYZhpfh6Zo6ROwbwBPfvR9AWg3zVdjF4gb6AqKuuKtm9RfBD8vFI9wuwVfIU43IVcwU%2BODX9WXmkaLAv28W766aDFLZaBJ5yRpFg%2Bm1JbBQm%2FkZ%2BpXx0%2F0tBEbYEJ7mw2HD7y0QA6uPbX6iBZtiXrH7bn23TGCzjDmhuTawWIyF7X%2FzQf4gWxgfBRZ3SRp7K&X-Amz-Signature=c5a236300683f0a774c224933f7b8a9a2312a76de5ed97ca1938588b7651d204&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WHUYZ5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHfGKrtKgtbkjPjNM%2Ba%2FjmTNOdA1svqDKkXRkOIuOnXQIge0AT3d85P%2FiJE4JyizHXu45H4EkEuip5djHQrqVjv4Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0YlISJYdDYzX%2F%2BdircAysWz3yM0kTnJWaXMfKiBRQj9FPTyvhTOJ7Z35GStWCZtgYF7anlm51qgj4EqP3IR3mFnGK0eJ18f3REqpIwxvHz9ZJ6VfOCwncjsAAOHQJtImWhSBcccZl5E2f5o7VfgOAeysl%2FctroNJxoU2b1kHDvGfOf%2Fr%2FCGMsSh51vcierYoYuiW6DeyJk8tCdzUr3PZWSMmOtVm%2BQQAjdjfGpfP%2Ff9926hxAOygcy9tMi9NNybeXti8C7q0G%2Bxa3FIQ6M71Hs%2F%2Fp2XCrnWIfHiZw4C7e1VUNmsFMKM0CyrlTOGXQmsFe%2BG4AZt5tpE0T0L0BJbylFY91gFI0JlccL4kkEYxj9dxjGLufWG4p4aV3aoR1crQ3eHxR6gGCZoblJaQFTQh7O45APq%2BZ9EZQLfeaqs%2FePLwW53GfOUvu95JwBu70wvqI7EtRg7H%2FE7qiiC42umHjk%2FjeXX0ROEqObM5BiPnDiQhTr0%2FGzStPlntLBVPar%2FHEj0o2OSFLtqi%2BSXtpHlQp7q%2BKO%2FdxftBwiOUC%2BQCP%2BWPohKDFS%2BbW9OsLayZBWWu%2Fl%2BZ2BGj5ow8kTDVClm3K%2F2vrI8i5WhUeTB%2FG%2BoLM%2BTaserAjOOCtAOThn%2F%2FTSfpTJ9y4oZ2d8NMtCMKGQ1cEGOqUBtLCb0Lqf6uThSz4st%2Bp8nrPYcNLYFYZhpfh6Zo6ROwbwBPfvR9AWg3zVdjF4gb6AqKuuKtm9RfBD8vFI9wuwVfIU43IVcwU%2BODX9WXmkaLAv28W766aDFLZaBJ5yRpFg%2Bm1JbBQm%2FkZ%2BpXx0%2F0tBEbYEJ7mw2HD7y0QA6uPbX6iBZtiXrH7bn23TGCzjDmhuTawWIyF7X%2FzQf4gWxgfBRZ3SRp7K&X-Amz-Signature=de086bbc217950f14893570f8f23dd3c924d31e1aee4aa528d4d818f039c42d7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WHUYZ5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHfGKrtKgtbkjPjNM%2Ba%2FjmTNOdA1svqDKkXRkOIuOnXQIge0AT3d85P%2FiJE4JyizHXu45H4EkEuip5djHQrqVjv4Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0YlISJYdDYzX%2F%2BdircAysWz3yM0kTnJWaXMfKiBRQj9FPTyvhTOJ7Z35GStWCZtgYF7anlm51qgj4EqP3IR3mFnGK0eJ18f3REqpIwxvHz9ZJ6VfOCwncjsAAOHQJtImWhSBcccZl5E2f5o7VfgOAeysl%2FctroNJxoU2b1kHDvGfOf%2Fr%2FCGMsSh51vcierYoYuiW6DeyJk8tCdzUr3PZWSMmOtVm%2BQQAjdjfGpfP%2Ff9926hxAOygcy9tMi9NNybeXti8C7q0G%2Bxa3FIQ6M71Hs%2F%2Fp2XCrnWIfHiZw4C7e1VUNmsFMKM0CyrlTOGXQmsFe%2BG4AZt5tpE0T0L0BJbylFY91gFI0JlccL4kkEYxj9dxjGLufWG4p4aV3aoR1crQ3eHxR6gGCZoblJaQFTQh7O45APq%2BZ9EZQLfeaqs%2FePLwW53GfOUvu95JwBu70wvqI7EtRg7H%2FE7qiiC42umHjk%2FjeXX0ROEqObM5BiPnDiQhTr0%2FGzStPlntLBVPar%2FHEj0o2OSFLtqi%2BSXtpHlQp7q%2BKO%2FdxftBwiOUC%2BQCP%2BWPohKDFS%2BbW9OsLayZBWWu%2Fl%2BZ2BGj5ow8kTDVClm3K%2F2vrI8i5WhUeTB%2FG%2BoLM%2BTaserAjOOCtAOThn%2F%2FTSfpTJ9y4oZ2d8NMtCMKGQ1cEGOqUBtLCb0Lqf6uThSz4st%2Bp8nrPYcNLYFYZhpfh6Zo6ROwbwBPfvR9AWg3zVdjF4gb6AqKuuKtm9RfBD8vFI9wuwVfIU43IVcwU%2BODX9WXmkaLAv28W766aDFLZaBJ5yRpFg%2Bm1JbBQm%2FkZ%2BpXx0%2F0tBEbYEJ7mw2HD7y0QA6uPbX6iBZtiXrH7bn23TGCzjDmhuTawWIyF7X%2FzQf4gWxgfBRZ3SRp7K&X-Amz-Signature=a737444805ec177bc51264ae48f372395533916120287b54453b4e1534a7f900&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
