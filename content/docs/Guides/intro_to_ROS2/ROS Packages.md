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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56SPYHF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG30%2B8Tqlf6Bk7Tf5YXTmx5oenk2ob5VIMehbKs6W2GKAiEA1BHliCC%2BUO9hRgZL%2FsdUq3QRE%2BMa2t2xkdy%2B2kRKaJ0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS4NOjrgb0E0qm3JCrcA6doBhUF8bfnHB5q7yrCMhqIlXELxCu05ecCUw7XwXVukhNcHtb0jQ6lAA4RG5Z7Gh%2BeKf%2FT5CiQGfAgyEUQPJX9AGMnMXfbh508TWGJ9f1zxt0EgClwpnVD%2BH30aKfZVKRyrWrklpHqN%2FR7uqi5WGKIDOSXH4FVihdZvdtKZ5pBgkq2rShPPNjih0uxeJR344q8UO4q0msZa4u15DNn24o5IXnweAQLwFCfsplHbTjDwmsbCj9344o3F%2F2syQOmeqCKFvRlVNmKcyjH5pLzJdJY8cncSVyLlWtiE9HV2oQQc13bjcLrO004hrlkG9YgSbJ0yps7BZqhNxTfwAacx5GcREMf%2BsMCz6zbsqi9DMGqdWkvcwDvf231qoP50VWBcDa3LnXEKijHC0zD3lCBUTfEEgCxzcgv8lkvhwwW9UXHqD1Ub05F5M1frQRioz0wX5dDyD48HiqVlXpoEbcQeJEJ9mOv5n1F%2FqHgNiuN12z86SmuuGuf3KxdvcT6DRIpoDKCx%2FQcngZv7xJXZsKxvKgyEQMQXTQm7GjIPmis4r8%2BtncSFcrWvQkmsJ9q6A4i4H8LLfsmo1t00Z1ZRU8Lctxk3%2FP19XKTWs3yC%2F2EeXZQw4%2Fbc6WQK7AUVe19MPSN3r0GOqUBZ0FXFzGzrLsIxtDY%2B6wh0mRDGaASoIu%2BM8WoDlE8yv%2FJPy%2FvvJIjOswlV3jJO0gCI2GmBCogK%2BvThP7iQ85cbEq9KoLgVQkT6OLigIW97tKioNDQQ3dIhw1n6e2zCwdQ6EpYC4QWaIYCPu%2B4i%2Bi7LkR%2B9zoxBQEj%2FqSQzUcQWQmHG7qjd0tRxxg%2FqYW%2BEQKY6NiyZmpFZ%2B8kzHH2Vke72wp7mH1L&X-Amz-Signature=897cef42361a324fc70c47aaaa204f6f5947ec3dc9891b2b6326b1cbad64532e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56SPYHF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG30%2B8Tqlf6Bk7Tf5YXTmx5oenk2ob5VIMehbKs6W2GKAiEA1BHliCC%2BUO9hRgZL%2FsdUq3QRE%2BMa2t2xkdy%2B2kRKaJ0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS4NOjrgb0E0qm3JCrcA6doBhUF8bfnHB5q7yrCMhqIlXELxCu05ecCUw7XwXVukhNcHtb0jQ6lAA4RG5Z7Gh%2BeKf%2FT5CiQGfAgyEUQPJX9AGMnMXfbh508TWGJ9f1zxt0EgClwpnVD%2BH30aKfZVKRyrWrklpHqN%2FR7uqi5WGKIDOSXH4FVihdZvdtKZ5pBgkq2rShPPNjih0uxeJR344q8UO4q0msZa4u15DNn24o5IXnweAQLwFCfsplHbTjDwmsbCj9344o3F%2F2syQOmeqCKFvRlVNmKcyjH5pLzJdJY8cncSVyLlWtiE9HV2oQQc13bjcLrO004hrlkG9YgSbJ0yps7BZqhNxTfwAacx5GcREMf%2BsMCz6zbsqi9DMGqdWkvcwDvf231qoP50VWBcDa3LnXEKijHC0zD3lCBUTfEEgCxzcgv8lkvhwwW9UXHqD1Ub05F5M1frQRioz0wX5dDyD48HiqVlXpoEbcQeJEJ9mOv5n1F%2FqHgNiuN12z86SmuuGuf3KxdvcT6DRIpoDKCx%2FQcngZv7xJXZsKxvKgyEQMQXTQm7GjIPmis4r8%2BtncSFcrWvQkmsJ9q6A4i4H8LLfsmo1t00Z1ZRU8Lctxk3%2FP19XKTWs3yC%2F2EeXZQw4%2Fbc6WQK7AUVe19MPSN3r0GOqUBZ0FXFzGzrLsIxtDY%2B6wh0mRDGaASoIu%2BM8WoDlE8yv%2FJPy%2FvvJIjOswlV3jJO0gCI2GmBCogK%2BvThP7iQ85cbEq9KoLgVQkT6OLigIW97tKioNDQQ3dIhw1n6e2zCwdQ6EpYC4QWaIYCPu%2B4i%2Bi7LkR%2B9zoxBQEj%2FqSQzUcQWQmHG7qjd0tRxxg%2FqYW%2BEQKY6NiyZmpFZ%2B8kzHH2Vke72wp7mH1L&X-Amz-Signature=1fe64aaafb99c1a448044ca35d6b82e92554eb663ea536753fc62741f9866d93&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56SPYHF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG30%2B8Tqlf6Bk7Tf5YXTmx5oenk2ob5VIMehbKs6W2GKAiEA1BHliCC%2BUO9hRgZL%2FsdUq3QRE%2BMa2t2xkdy%2B2kRKaJ0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS4NOjrgb0E0qm3JCrcA6doBhUF8bfnHB5q7yrCMhqIlXELxCu05ecCUw7XwXVukhNcHtb0jQ6lAA4RG5Z7Gh%2BeKf%2FT5CiQGfAgyEUQPJX9AGMnMXfbh508TWGJ9f1zxt0EgClwpnVD%2BH30aKfZVKRyrWrklpHqN%2FR7uqi5WGKIDOSXH4FVihdZvdtKZ5pBgkq2rShPPNjih0uxeJR344q8UO4q0msZa4u15DNn24o5IXnweAQLwFCfsplHbTjDwmsbCj9344o3F%2F2syQOmeqCKFvRlVNmKcyjH5pLzJdJY8cncSVyLlWtiE9HV2oQQc13bjcLrO004hrlkG9YgSbJ0yps7BZqhNxTfwAacx5GcREMf%2BsMCz6zbsqi9DMGqdWkvcwDvf231qoP50VWBcDa3LnXEKijHC0zD3lCBUTfEEgCxzcgv8lkvhwwW9UXHqD1Ub05F5M1frQRioz0wX5dDyD48HiqVlXpoEbcQeJEJ9mOv5n1F%2FqHgNiuN12z86SmuuGuf3KxdvcT6DRIpoDKCx%2FQcngZv7xJXZsKxvKgyEQMQXTQm7GjIPmis4r8%2BtncSFcrWvQkmsJ9q6A4i4H8LLfsmo1t00Z1ZRU8Lctxk3%2FP19XKTWs3yC%2F2EeXZQw4%2Fbc6WQK7AUVe19MPSN3r0GOqUBZ0FXFzGzrLsIxtDY%2B6wh0mRDGaASoIu%2BM8WoDlE8yv%2FJPy%2FvvJIjOswlV3jJO0gCI2GmBCogK%2BvThP7iQ85cbEq9KoLgVQkT6OLigIW97tKioNDQQ3dIhw1n6e2zCwdQ6EpYC4QWaIYCPu%2B4i%2Bi7LkR%2B9zoxBQEj%2FqSQzUcQWQmHG7qjd0tRxxg%2FqYW%2BEQKY6NiyZmpFZ%2B8kzHH2Vke72wp7mH1L&X-Amz-Signature=928ff5cdabb0ebd7e8548fdac3b9467ea87d66228c07ac73b6c1f528a218b47e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56SPYHF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG30%2B8Tqlf6Bk7Tf5YXTmx5oenk2ob5VIMehbKs6W2GKAiEA1BHliCC%2BUO9hRgZL%2FsdUq3QRE%2BMa2t2xkdy%2B2kRKaJ0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS4NOjrgb0E0qm3JCrcA6doBhUF8bfnHB5q7yrCMhqIlXELxCu05ecCUw7XwXVukhNcHtb0jQ6lAA4RG5Z7Gh%2BeKf%2FT5CiQGfAgyEUQPJX9AGMnMXfbh508TWGJ9f1zxt0EgClwpnVD%2BH30aKfZVKRyrWrklpHqN%2FR7uqi5WGKIDOSXH4FVihdZvdtKZ5pBgkq2rShPPNjih0uxeJR344q8UO4q0msZa4u15DNn24o5IXnweAQLwFCfsplHbTjDwmsbCj9344o3F%2F2syQOmeqCKFvRlVNmKcyjH5pLzJdJY8cncSVyLlWtiE9HV2oQQc13bjcLrO004hrlkG9YgSbJ0yps7BZqhNxTfwAacx5GcREMf%2BsMCz6zbsqi9DMGqdWkvcwDvf231qoP50VWBcDa3LnXEKijHC0zD3lCBUTfEEgCxzcgv8lkvhwwW9UXHqD1Ub05F5M1frQRioz0wX5dDyD48HiqVlXpoEbcQeJEJ9mOv5n1F%2FqHgNiuN12z86SmuuGuf3KxdvcT6DRIpoDKCx%2FQcngZv7xJXZsKxvKgyEQMQXTQm7GjIPmis4r8%2BtncSFcrWvQkmsJ9q6A4i4H8LLfsmo1t00Z1ZRU8Lctxk3%2FP19XKTWs3yC%2F2EeXZQw4%2Fbc6WQK7AUVe19MPSN3r0GOqUBZ0FXFzGzrLsIxtDY%2B6wh0mRDGaASoIu%2BM8WoDlE8yv%2FJPy%2FvvJIjOswlV3jJO0gCI2GmBCogK%2BvThP7iQ85cbEq9KoLgVQkT6OLigIW97tKioNDQQ3dIhw1n6e2zCwdQ6EpYC4QWaIYCPu%2B4i%2Bi7LkR%2B9zoxBQEj%2FqSQzUcQWQmHG7qjd0tRxxg%2FqYW%2BEQKY6NiyZmpFZ%2B8kzHH2Vke72wp7mH1L&X-Amz-Signature=4b5c89449a1adba16e5bdd900618a1e77d03268abe7dcb810aa3c187de049a32&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56SPYHF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG30%2B8Tqlf6Bk7Tf5YXTmx5oenk2ob5VIMehbKs6W2GKAiEA1BHliCC%2BUO9hRgZL%2FsdUq3QRE%2BMa2t2xkdy%2B2kRKaJ0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS4NOjrgb0E0qm3JCrcA6doBhUF8bfnHB5q7yrCMhqIlXELxCu05ecCUw7XwXVukhNcHtb0jQ6lAA4RG5Z7Gh%2BeKf%2FT5CiQGfAgyEUQPJX9AGMnMXfbh508TWGJ9f1zxt0EgClwpnVD%2BH30aKfZVKRyrWrklpHqN%2FR7uqi5WGKIDOSXH4FVihdZvdtKZ5pBgkq2rShPPNjih0uxeJR344q8UO4q0msZa4u15DNn24o5IXnweAQLwFCfsplHbTjDwmsbCj9344o3F%2F2syQOmeqCKFvRlVNmKcyjH5pLzJdJY8cncSVyLlWtiE9HV2oQQc13bjcLrO004hrlkG9YgSbJ0yps7BZqhNxTfwAacx5GcREMf%2BsMCz6zbsqi9DMGqdWkvcwDvf231qoP50VWBcDa3LnXEKijHC0zD3lCBUTfEEgCxzcgv8lkvhwwW9UXHqD1Ub05F5M1frQRioz0wX5dDyD48HiqVlXpoEbcQeJEJ9mOv5n1F%2FqHgNiuN12z86SmuuGuf3KxdvcT6DRIpoDKCx%2FQcngZv7xJXZsKxvKgyEQMQXTQm7GjIPmis4r8%2BtncSFcrWvQkmsJ9q6A4i4H8LLfsmo1t00Z1ZRU8Lctxk3%2FP19XKTWs3yC%2F2EeXZQw4%2Fbc6WQK7AUVe19MPSN3r0GOqUBZ0FXFzGzrLsIxtDY%2B6wh0mRDGaASoIu%2BM8WoDlE8yv%2FJPy%2FvvJIjOswlV3jJO0gCI2GmBCogK%2BvThP7iQ85cbEq9KoLgVQkT6OLigIW97tKioNDQQ3dIhw1n6e2zCwdQ6EpYC4QWaIYCPu%2B4i%2Bi7LkR%2B9zoxBQEj%2FqSQzUcQWQmHG7qjd0tRxxg%2FqYW%2BEQKY6NiyZmpFZ%2B8kzHH2Vke72wp7mH1L&X-Amz-Signature=e60fee78c4cdcadd631d08a5599cde7705b2d4d9c4f8259902724c1d677802a4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56SPYHF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG30%2B8Tqlf6Bk7Tf5YXTmx5oenk2ob5VIMehbKs6W2GKAiEA1BHliCC%2BUO9hRgZL%2FsdUq3QRE%2BMa2t2xkdy%2B2kRKaJ0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS4NOjrgb0E0qm3JCrcA6doBhUF8bfnHB5q7yrCMhqIlXELxCu05ecCUw7XwXVukhNcHtb0jQ6lAA4RG5Z7Gh%2BeKf%2FT5CiQGfAgyEUQPJX9AGMnMXfbh508TWGJ9f1zxt0EgClwpnVD%2BH30aKfZVKRyrWrklpHqN%2FR7uqi5WGKIDOSXH4FVihdZvdtKZ5pBgkq2rShPPNjih0uxeJR344q8UO4q0msZa4u15DNn24o5IXnweAQLwFCfsplHbTjDwmsbCj9344o3F%2F2syQOmeqCKFvRlVNmKcyjH5pLzJdJY8cncSVyLlWtiE9HV2oQQc13bjcLrO004hrlkG9YgSbJ0yps7BZqhNxTfwAacx5GcREMf%2BsMCz6zbsqi9DMGqdWkvcwDvf231qoP50VWBcDa3LnXEKijHC0zD3lCBUTfEEgCxzcgv8lkvhwwW9UXHqD1Ub05F5M1frQRioz0wX5dDyD48HiqVlXpoEbcQeJEJ9mOv5n1F%2FqHgNiuN12z86SmuuGuf3KxdvcT6DRIpoDKCx%2FQcngZv7xJXZsKxvKgyEQMQXTQm7GjIPmis4r8%2BtncSFcrWvQkmsJ9q6A4i4H8LLfsmo1t00Z1ZRU8Lctxk3%2FP19XKTWs3yC%2F2EeXZQw4%2Fbc6WQK7AUVe19MPSN3r0GOqUBZ0FXFzGzrLsIxtDY%2B6wh0mRDGaASoIu%2BM8WoDlE8yv%2FJPy%2FvvJIjOswlV3jJO0gCI2GmBCogK%2BvThP7iQ85cbEq9KoLgVQkT6OLigIW97tKioNDQQ3dIhw1n6e2zCwdQ6EpYC4QWaIYCPu%2B4i%2Bi7LkR%2B9zoxBQEj%2FqSQzUcQWQmHG7qjd0tRxxg%2FqYW%2BEQKY6NiyZmpFZ%2B8kzHH2Vke72wp7mH1L&X-Amz-Signature=32ce67b5b892a6b82a0dd48b0e25f9cb1d05385293c513fe7d13bd0280821438&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56SPYHF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG30%2B8Tqlf6Bk7Tf5YXTmx5oenk2ob5VIMehbKs6W2GKAiEA1BHliCC%2BUO9hRgZL%2FsdUq3QRE%2BMa2t2xkdy%2B2kRKaJ0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS4NOjrgb0E0qm3JCrcA6doBhUF8bfnHB5q7yrCMhqIlXELxCu05ecCUw7XwXVukhNcHtb0jQ6lAA4RG5Z7Gh%2BeKf%2FT5CiQGfAgyEUQPJX9AGMnMXfbh508TWGJ9f1zxt0EgClwpnVD%2BH30aKfZVKRyrWrklpHqN%2FR7uqi5WGKIDOSXH4FVihdZvdtKZ5pBgkq2rShPPNjih0uxeJR344q8UO4q0msZa4u15DNn24o5IXnweAQLwFCfsplHbTjDwmsbCj9344o3F%2F2syQOmeqCKFvRlVNmKcyjH5pLzJdJY8cncSVyLlWtiE9HV2oQQc13bjcLrO004hrlkG9YgSbJ0yps7BZqhNxTfwAacx5GcREMf%2BsMCz6zbsqi9DMGqdWkvcwDvf231qoP50VWBcDa3LnXEKijHC0zD3lCBUTfEEgCxzcgv8lkvhwwW9UXHqD1Ub05F5M1frQRioz0wX5dDyD48HiqVlXpoEbcQeJEJ9mOv5n1F%2FqHgNiuN12z86SmuuGuf3KxdvcT6DRIpoDKCx%2FQcngZv7xJXZsKxvKgyEQMQXTQm7GjIPmis4r8%2BtncSFcrWvQkmsJ9q6A4i4H8LLfsmo1t00Z1ZRU8Lctxk3%2FP19XKTWs3yC%2F2EeXZQw4%2Fbc6WQK7AUVe19MPSN3r0GOqUBZ0FXFzGzrLsIxtDY%2B6wh0mRDGaASoIu%2BM8WoDlE8yv%2FJPy%2FvvJIjOswlV3jJO0gCI2GmBCogK%2BvThP7iQ85cbEq9KoLgVQkT6OLigIW97tKioNDQQ3dIhw1n6e2zCwdQ6EpYC4QWaIYCPu%2B4i%2Bi7LkR%2B9zoxBQEj%2FqSQzUcQWQmHG7qjd0tRxxg%2FqYW%2BEQKY6NiyZmpFZ%2B8kzHH2Vke72wp7mH1L&X-Amz-Signature=c0ab9d352878c0018e872d2a9b7660148a63044af160f3bbb1033f77e28e6b28&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
