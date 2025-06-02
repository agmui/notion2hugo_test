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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S2V6UYE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC3EsJpIY3SKkbkWMSlnz9bxrljX0C3vVQwXKw%2FpkMUhwIgcsG4z8ALa9toMxkcYSVbed8grXnZtWAiz%2FpT5fThJLEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv4O2wqKoypXDArBSrcA6MycLsu5pyXhmrkhc%2FJ34N87Xy%2BaCsGzUIRlmYzXr%2FcxuylW4i23xDk6SQaLFQnBeFgUqY32fIHsZMh8079a0SrsWs86h0Pxvp0PnxeSZEzUHCqiQNGTbfDut%2Bxyt5CsaaVncVPPqg28LuWcvMYYrnrjIxGU5nQndsBwTVm%2BuypAObDSpyP5IxGBFJK8UvF%2FK0rT%2B2rXQH3XVsyLwvuKsdRbI78xbJ9dy9fd2gSSggav7Pl9VqIzwCqQmxdIG2UzB9eaAeEbJ74A3WO%2BpJjt1ZV%2B%2FVZ9No096PPFSnir6I%2Fn2%2FEMx%2F5NuLL6cFCqSQIBnmOJGqStK5b66Z6zoB94nRyO6VeMJydeX9el29Bk%2BXz6i6v%2F97W5Ca6fIWbnz2plAXhQRl%2FZRneq%2ByVHE7zl9C9JSgF1WahDDPGQTwe0xCbLhbbZiEuUlsYAThjz60zDGZtRznYlToTj1zU79miapCNNoccTWvFLBc4Dz6QpFlLTwsnqQOEhWjdjsfdg%2FUW0L%2BN9TdJgzvuwh2sxWp%2BwZxmR31YnvGjljJ%2Fb%2FVtXqEFUFJ060azldM%2BKIUVblh4W%2FVkUoQByKGWNwrINWR3plJeICdMwpRk2VlEEu%2BAblhYKbcv4QZiAt5U3%2F1RMJev9MEGOqUBr6RSQy9JC0RgYosnfrhGb%2BfOKKi4YmTiPZR5FKGrLlAYowvHMdNtUSg7sFcF6T%2Bbdva2R5Yj%2FStuqY1i1fkUJk06AQ8lrljznUO6LROG4QL1ACXnnq7Q5IttALB6lyNmoIyJm5tVv6Inzm63XaA4avLacRjk%2F45EdaJFVWe510Ayy%2BD%2FFymIX5wTM41H1kymWycg08kT5smZOksE9m%2FZmyv2t1r1&X-Amz-Signature=5076c4017102c94ee340cf650b731b76161375f7662562411a2ebed7776e2db9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S2V6UYE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC3EsJpIY3SKkbkWMSlnz9bxrljX0C3vVQwXKw%2FpkMUhwIgcsG4z8ALa9toMxkcYSVbed8grXnZtWAiz%2FpT5fThJLEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv4O2wqKoypXDArBSrcA6MycLsu5pyXhmrkhc%2FJ34N87Xy%2BaCsGzUIRlmYzXr%2FcxuylW4i23xDk6SQaLFQnBeFgUqY32fIHsZMh8079a0SrsWs86h0Pxvp0PnxeSZEzUHCqiQNGTbfDut%2Bxyt5CsaaVncVPPqg28LuWcvMYYrnrjIxGU5nQndsBwTVm%2BuypAObDSpyP5IxGBFJK8UvF%2FK0rT%2B2rXQH3XVsyLwvuKsdRbI78xbJ9dy9fd2gSSggav7Pl9VqIzwCqQmxdIG2UzB9eaAeEbJ74A3WO%2BpJjt1ZV%2B%2FVZ9No096PPFSnir6I%2Fn2%2FEMx%2F5NuLL6cFCqSQIBnmOJGqStK5b66Z6zoB94nRyO6VeMJydeX9el29Bk%2BXz6i6v%2F97W5Ca6fIWbnz2plAXhQRl%2FZRneq%2ByVHE7zl9C9JSgF1WahDDPGQTwe0xCbLhbbZiEuUlsYAThjz60zDGZtRznYlToTj1zU79miapCNNoccTWvFLBc4Dz6QpFlLTwsnqQOEhWjdjsfdg%2FUW0L%2BN9TdJgzvuwh2sxWp%2BwZxmR31YnvGjljJ%2Fb%2FVtXqEFUFJ060azldM%2BKIUVblh4W%2FVkUoQByKGWNwrINWR3plJeICdMwpRk2VlEEu%2BAblhYKbcv4QZiAt5U3%2F1RMJev9MEGOqUBr6RSQy9JC0RgYosnfrhGb%2BfOKKi4YmTiPZR5FKGrLlAYowvHMdNtUSg7sFcF6T%2Bbdva2R5Yj%2FStuqY1i1fkUJk06AQ8lrljznUO6LROG4QL1ACXnnq7Q5IttALB6lyNmoIyJm5tVv6Inzm63XaA4avLacRjk%2F45EdaJFVWe510Ayy%2BD%2FFymIX5wTM41H1kymWycg08kT5smZOksE9m%2FZmyv2t1r1&X-Amz-Signature=90f697a5b76ff2516fcca192e0dfae3caecade1412219576dfaf305e777534ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S2V6UYE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC3EsJpIY3SKkbkWMSlnz9bxrljX0C3vVQwXKw%2FpkMUhwIgcsG4z8ALa9toMxkcYSVbed8grXnZtWAiz%2FpT5fThJLEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv4O2wqKoypXDArBSrcA6MycLsu5pyXhmrkhc%2FJ34N87Xy%2BaCsGzUIRlmYzXr%2FcxuylW4i23xDk6SQaLFQnBeFgUqY32fIHsZMh8079a0SrsWs86h0Pxvp0PnxeSZEzUHCqiQNGTbfDut%2Bxyt5CsaaVncVPPqg28LuWcvMYYrnrjIxGU5nQndsBwTVm%2BuypAObDSpyP5IxGBFJK8UvF%2FK0rT%2B2rXQH3XVsyLwvuKsdRbI78xbJ9dy9fd2gSSggav7Pl9VqIzwCqQmxdIG2UzB9eaAeEbJ74A3WO%2BpJjt1ZV%2B%2FVZ9No096PPFSnir6I%2Fn2%2FEMx%2F5NuLL6cFCqSQIBnmOJGqStK5b66Z6zoB94nRyO6VeMJydeX9el29Bk%2BXz6i6v%2F97W5Ca6fIWbnz2plAXhQRl%2FZRneq%2ByVHE7zl9C9JSgF1WahDDPGQTwe0xCbLhbbZiEuUlsYAThjz60zDGZtRznYlToTj1zU79miapCNNoccTWvFLBc4Dz6QpFlLTwsnqQOEhWjdjsfdg%2FUW0L%2BN9TdJgzvuwh2sxWp%2BwZxmR31YnvGjljJ%2Fb%2FVtXqEFUFJ060azldM%2BKIUVblh4W%2FVkUoQByKGWNwrINWR3plJeICdMwpRk2VlEEu%2BAblhYKbcv4QZiAt5U3%2F1RMJev9MEGOqUBr6RSQy9JC0RgYosnfrhGb%2BfOKKi4YmTiPZR5FKGrLlAYowvHMdNtUSg7sFcF6T%2Bbdva2R5Yj%2FStuqY1i1fkUJk06AQ8lrljznUO6LROG4QL1ACXnnq7Q5IttALB6lyNmoIyJm5tVv6Inzm63XaA4avLacRjk%2F45EdaJFVWe510Ayy%2BD%2FFymIX5wTM41H1kymWycg08kT5smZOksE9m%2FZmyv2t1r1&X-Amz-Signature=245eade7779f92d52986d05887edfd3661d406af8d0f5dddab21f7bcd4ff3ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S2V6UYE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC3EsJpIY3SKkbkWMSlnz9bxrljX0C3vVQwXKw%2FpkMUhwIgcsG4z8ALa9toMxkcYSVbed8grXnZtWAiz%2FpT5fThJLEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv4O2wqKoypXDArBSrcA6MycLsu5pyXhmrkhc%2FJ34N87Xy%2BaCsGzUIRlmYzXr%2FcxuylW4i23xDk6SQaLFQnBeFgUqY32fIHsZMh8079a0SrsWs86h0Pxvp0PnxeSZEzUHCqiQNGTbfDut%2Bxyt5CsaaVncVPPqg28LuWcvMYYrnrjIxGU5nQndsBwTVm%2BuypAObDSpyP5IxGBFJK8UvF%2FK0rT%2B2rXQH3XVsyLwvuKsdRbI78xbJ9dy9fd2gSSggav7Pl9VqIzwCqQmxdIG2UzB9eaAeEbJ74A3WO%2BpJjt1ZV%2B%2FVZ9No096PPFSnir6I%2Fn2%2FEMx%2F5NuLL6cFCqSQIBnmOJGqStK5b66Z6zoB94nRyO6VeMJydeX9el29Bk%2BXz6i6v%2F97W5Ca6fIWbnz2plAXhQRl%2FZRneq%2ByVHE7zl9C9JSgF1WahDDPGQTwe0xCbLhbbZiEuUlsYAThjz60zDGZtRznYlToTj1zU79miapCNNoccTWvFLBc4Dz6QpFlLTwsnqQOEhWjdjsfdg%2FUW0L%2BN9TdJgzvuwh2sxWp%2BwZxmR31YnvGjljJ%2Fb%2FVtXqEFUFJ060azldM%2BKIUVblh4W%2FVkUoQByKGWNwrINWR3plJeICdMwpRk2VlEEu%2BAblhYKbcv4QZiAt5U3%2F1RMJev9MEGOqUBr6RSQy9JC0RgYosnfrhGb%2BfOKKi4YmTiPZR5FKGrLlAYowvHMdNtUSg7sFcF6T%2Bbdva2R5Yj%2FStuqY1i1fkUJk06AQ8lrljznUO6LROG4QL1ACXnnq7Q5IttALB6lyNmoIyJm5tVv6Inzm63XaA4avLacRjk%2F45EdaJFVWe510Ayy%2BD%2FFymIX5wTM41H1kymWycg08kT5smZOksE9m%2FZmyv2t1r1&X-Amz-Signature=7d1cc5ae6f43da019e94df1c3e88085943f93e68794e6ada6b02285f1ffbab7e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S2V6UYE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC3EsJpIY3SKkbkWMSlnz9bxrljX0C3vVQwXKw%2FpkMUhwIgcsG4z8ALa9toMxkcYSVbed8grXnZtWAiz%2FpT5fThJLEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv4O2wqKoypXDArBSrcA6MycLsu5pyXhmrkhc%2FJ34N87Xy%2BaCsGzUIRlmYzXr%2FcxuylW4i23xDk6SQaLFQnBeFgUqY32fIHsZMh8079a0SrsWs86h0Pxvp0PnxeSZEzUHCqiQNGTbfDut%2Bxyt5CsaaVncVPPqg28LuWcvMYYrnrjIxGU5nQndsBwTVm%2BuypAObDSpyP5IxGBFJK8UvF%2FK0rT%2B2rXQH3XVsyLwvuKsdRbI78xbJ9dy9fd2gSSggav7Pl9VqIzwCqQmxdIG2UzB9eaAeEbJ74A3WO%2BpJjt1ZV%2B%2FVZ9No096PPFSnir6I%2Fn2%2FEMx%2F5NuLL6cFCqSQIBnmOJGqStK5b66Z6zoB94nRyO6VeMJydeX9el29Bk%2BXz6i6v%2F97W5Ca6fIWbnz2plAXhQRl%2FZRneq%2ByVHE7zl9C9JSgF1WahDDPGQTwe0xCbLhbbZiEuUlsYAThjz60zDGZtRznYlToTj1zU79miapCNNoccTWvFLBc4Dz6QpFlLTwsnqQOEhWjdjsfdg%2FUW0L%2BN9TdJgzvuwh2sxWp%2BwZxmR31YnvGjljJ%2Fb%2FVtXqEFUFJ060azldM%2BKIUVblh4W%2FVkUoQByKGWNwrINWR3plJeICdMwpRk2VlEEu%2BAblhYKbcv4QZiAt5U3%2F1RMJev9MEGOqUBr6RSQy9JC0RgYosnfrhGb%2BfOKKi4YmTiPZR5FKGrLlAYowvHMdNtUSg7sFcF6T%2Bbdva2R5Yj%2FStuqY1i1fkUJk06AQ8lrljznUO6LROG4QL1ACXnnq7Q5IttALB6lyNmoIyJm5tVv6Inzm63XaA4avLacRjk%2F45EdaJFVWe510Ayy%2BD%2FFymIX5wTM41H1kymWycg08kT5smZOksE9m%2FZmyv2t1r1&X-Amz-Signature=badf14b1b9a3dc064f2068d0b4b9ec89d365826476ce934913999251da168c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S2V6UYE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC3EsJpIY3SKkbkWMSlnz9bxrljX0C3vVQwXKw%2FpkMUhwIgcsG4z8ALa9toMxkcYSVbed8grXnZtWAiz%2FpT5fThJLEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv4O2wqKoypXDArBSrcA6MycLsu5pyXhmrkhc%2FJ34N87Xy%2BaCsGzUIRlmYzXr%2FcxuylW4i23xDk6SQaLFQnBeFgUqY32fIHsZMh8079a0SrsWs86h0Pxvp0PnxeSZEzUHCqiQNGTbfDut%2Bxyt5CsaaVncVPPqg28LuWcvMYYrnrjIxGU5nQndsBwTVm%2BuypAObDSpyP5IxGBFJK8UvF%2FK0rT%2B2rXQH3XVsyLwvuKsdRbI78xbJ9dy9fd2gSSggav7Pl9VqIzwCqQmxdIG2UzB9eaAeEbJ74A3WO%2BpJjt1ZV%2B%2FVZ9No096PPFSnir6I%2Fn2%2FEMx%2F5NuLL6cFCqSQIBnmOJGqStK5b66Z6zoB94nRyO6VeMJydeX9el29Bk%2BXz6i6v%2F97W5Ca6fIWbnz2plAXhQRl%2FZRneq%2ByVHE7zl9C9JSgF1WahDDPGQTwe0xCbLhbbZiEuUlsYAThjz60zDGZtRznYlToTj1zU79miapCNNoccTWvFLBc4Dz6QpFlLTwsnqQOEhWjdjsfdg%2FUW0L%2BN9TdJgzvuwh2sxWp%2BwZxmR31YnvGjljJ%2Fb%2FVtXqEFUFJ060azldM%2BKIUVblh4W%2FVkUoQByKGWNwrINWR3plJeICdMwpRk2VlEEu%2BAblhYKbcv4QZiAt5U3%2F1RMJev9MEGOqUBr6RSQy9JC0RgYosnfrhGb%2BfOKKi4YmTiPZR5FKGrLlAYowvHMdNtUSg7sFcF6T%2Bbdva2R5Yj%2FStuqY1i1fkUJk06AQ8lrljznUO6LROG4QL1ACXnnq7Q5IttALB6lyNmoIyJm5tVv6Inzm63XaA4avLacRjk%2F45EdaJFVWe510Ayy%2BD%2FFymIX5wTM41H1kymWycg08kT5smZOksE9m%2FZmyv2t1r1&X-Amz-Signature=91a8b08f15cfce2045b42eb2cee449eb9fd0006a5f99c2775361c6d813ceb187&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S2V6UYE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC3EsJpIY3SKkbkWMSlnz9bxrljX0C3vVQwXKw%2FpkMUhwIgcsG4z8ALa9toMxkcYSVbed8grXnZtWAiz%2FpT5fThJLEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv4O2wqKoypXDArBSrcA6MycLsu5pyXhmrkhc%2FJ34N87Xy%2BaCsGzUIRlmYzXr%2FcxuylW4i23xDk6SQaLFQnBeFgUqY32fIHsZMh8079a0SrsWs86h0Pxvp0PnxeSZEzUHCqiQNGTbfDut%2Bxyt5CsaaVncVPPqg28LuWcvMYYrnrjIxGU5nQndsBwTVm%2BuypAObDSpyP5IxGBFJK8UvF%2FK0rT%2B2rXQH3XVsyLwvuKsdRbI78xbJ9dy9fd2gSSggav7Pl9VqIzwCqQmxdIG2UzB9eaAeEbJ74A3WO%2BpJjt1ZV%2B%2FVZ9No096PPFSnir6I%2Fn2%2FEMx%2F5NuLL6cFCqSQIBnmOJGqStK5b66Z6zoB94nRyO6VeMJydeX9el29Bk%2BXz6i6v%2F97W5Ca6fIWbnz2plAXhQRl%2FZRneq%2ByVHE7zl9C9JSgF1WahDDPGQTwe0xCbLhbbZiEuUlsYAThjz60zDGZtRznYlToTj1zU79miapCNNoccTWvFLBc4Dz6QpFlLTwsnqQOEhWjdjsfdg%2FUW0L%2BN9TdJgzvuwh2sxWp%2BwZxmR31YnvGjljJ%2Fb%2FVtXqEFUFJ060azldM%2BKIUVblh4W%2FVkUoQByKGWNwrINWR3plJeICdMwpRk2VlEEu%2BAblhYKbcv4QZiAt5U3%2F1RMJev9MEGOqUBr6RSQy9JC0RgYosnfrhGb%2BfOKKi4YmTiPZR5FKGrLlAYowvHMdNtUSg7sFcF6T%2Bbdva2R5Yj%2FStuqY1i1fkUJk06AQ8lrljznUO6LROG4QL1ACXnnq7Q5IttALB6lyNmoIyJm5tVv6Inzm63XaA4avLacRjk%2F45EdaJFVWe510Ayy%2BD%2FFymIX5wTM41H1kymWycg08kT5smZOksE9m%2FZmyv2t1r1&X-Amz-Signature=e56822f03d1e5b7617e8bca15a3c40007ec3fe96db424ed110b8e93102d38a66&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
