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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R66IGPJX%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuF%2B0KGwxHVKEyvWXeOyP1rMK570DODFqsHFzbu2MbaQIhAIDexaaqdsPuoJP1wGg4JIlg%2Bb5x2hzVro5BPSOlGSikKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAJmWA21PVjm7lLd0q3AOM4R7d8LDa7qUWhi4Iq2gUNmREruA%2B5q707%2BalXONQBlQV9arS2%2FU%2B%2FzH%2F9TRts%2BOCQo%2BF%2BatgbzD3YoB0adrtRFdPLS7GOWdg5Wb6QZqSQGMJjkaBWFN8XxCQ1xq82nhWZe84uMU%2B1ulnvVzivSjdxMx8P0X%2BTkqR5WTxgxt4WVP6ySzfwVEAmMnfr390XwJtMcl5loOFifmoGEpwNSTQ9SEV2t2kW4kjaeynAxH9U%2BB2vl63mMf6bQGpmrnJmwA5c7%2BsDhwGh1rI9SK0YnIcrAWxja0Z%2Fj1VsGM9wcQzRH0forkcT2wxHfpbGxu%2B0JOty96yA1cEdUSxFrNYyPqEOdBeCmej0PGqjSJqQwSRllXIabDDflLy0pBUP7Xc25AEzK4X6hUUU%2Bjhj7bjqJpRXqk2DZpPF5aewDajwpA79qfjuK0Rc5UtNXH0LFxosN94KjZUoWx3Wu1BJFawlSyIaJ0NgEkBinjljKHqxBBdKzDD3p6WLcElafH0pId%2FlEmWO1TlZYbbHRRtj5i5i7nuvgG%2B94ArocsH89UW2d7XGqEBXAYW1yeW%2BUQ61s%2FvoyJ5R%2F6APpZSWd4RfMQksErmADxEkIJj8RgYc1Nq8G4B0AtyprXXHoRRpQUvuTC7sfXHBjqkASaxBbHdTs7SzIDsVm5rVVLSSO6s4l522DaSL9VVNW2%2FJdMm1WQR8L9Mmw95cN%2FUjR0%2BdHJ%2FZ0eFa0XHSlhv47bQHObQuaiarwJTvFN0ilmdZVk2FkpFUKVwx5ypENFZ2pBPuGAUhPYbgGGvcUYdiTOIRF045LIxGIIvRrrEcYX0j0C%2BB1cY4oNW%2FC2ZtyZ%2BEvcnvdXNelk%2F969DS0hkelygqkpC&X-Amz-Signature=8cad13c1e15b6336f93d0b9e25e95005b1134dc6452f4e1bb68c67a15726928c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R66IGPJX%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuF%2B0KGwxHVKEyvWXeOyP1rMK570DODFqsHFzbu2MbaQIhAIDexaaqdsPuoJP1wGg4JIlg%2Bb5x2hzVro5BPSOlGSikKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAJmWA21PVjm7lLd0q3AOM4R7d8LDa7qUWhi4Iq2gUNmREruA%2B5q707%2BalXONQBlQV9arS2%2FU%2B%2FzH%2F9TRts%2BOCQo%2BF%2BatgbzD3YoB0adrtRFdPLS7GOWdg5Wb6QZqSQGMJjkaBWFN8XxCQ1xq82nhWZe84uMU%2B1ulnvVzivSjdxMx8P0X%2BTkqR5WTxgxt4WVP6ySzfwVEAmMnfr390XwJtMcl5loOFifmoGEpwNSTQ9SEV2t2kW4kjaeynAxH9U%2BB2vl63mMf6bQGpmrnJmwA5c7%2BsDhwGh1rI9SK0YnIcrAWxja0Z%2Fj1VsGM9wcQzRH0forkcT2wxHfpbGxu%2B0JOty96yA1cEdUSxFrNYyPqEOdBeCmej0PGqjSJqQwSRllXIabDDflLy0pBUP7Xc25AEzK4X6hUUU%2Bjhj7bjqJpRXqk2DZpPF5aewDajwpA79qfjuK0Rc5UtNXH0LFxosN94KjZUoWx3Wu1BJFawlSyIaJ0NgEkBinjljKHqxBBdKzDD3p6WLcElafH0pId%2FlEmWO1TlZYbbHRRtj5i5i7nuvgG%2B94ArocsH89UW2d7XGqEBXAYW1yeW%2BUQ61s%2FvoyJ5R%2F6APpZSWd4RfMQksErmADxEkIJj8RgYc1Nq8G4B0AtyprXXHoRRpQUvuTC7sfXHBjqkASaxBbHdTs7SzIDsVm5rVVLSSO6s4l522DaSL9VVNW2%2FJdMm1WQR8L9Mmw95cN%2FUjR0%2BdHJ%2FZ0eFa0XHSlhv47bQHObQuaiarwJTvFN0ilmdZVk2FkpFUKVwx5ypENFZ2pBPuGAUhPYbgGGvcUYdiTOIRF045LIxGIIvRrrEcYX0j0C%2BB1cY4oNW%2FC2ZtyZ%2BEvcnvdXNelk%2F969DS0hkelygqkpC&X-Amz-Signature=c20554a12b0e7656ef2aa2aadb69a5265a58c6637c33083ea447ad104e36f4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R66IGPJX%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuF%2B0KGwxHVKEyvWXeOyP1rMK570DODFqsHFzbu2MbaQIhAIDexaaqdsPuoJP1wGg4JIlg%2Bb5x2hzVro5BPSOlGSikKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAJmWA21PVjm7lLd0q3AOM4R7d8LDa7qUWhi4Iq2gUNmREruA%2B5q707%2BalXONQBlQV9arS2%2FU%2B%2FzH%2F9TRts%2BOCQo%2BF%2BatgbzD3YoB0adrtRFdPLS7GOWdg5Wb6QZqSQGMJjkaBWFN8XxCQ1xq82nhWZe84uMU%2B1ulnvVzivSjdxMx8P0X%2BTkqR5WTxgxt4WVP6ySzfwVEAmMnfr390XwJtMcl5loOFifmoGEpwNSTQ9SEV2t2kW4kjaeynAxH9U%2BB2vl63mMf6bQGpmrnJmwA5c7%2BsDhwGh1rI9SK0YnIcrAWxja0Z%2Fj1VsGM9wcQzRH0forkcT2wxHfpbGxu%2B0JOty96yA1cEdUSxFrNYyPqEOdBeCmej0PGqjSJqQwSRllXIabDDflLy0pBUP7Xc25AEzK4X6hUUU%2Bjhj7bjqJpRXqk2DZpPF5aewDajwpA79qfjuK0Rc5UtNXH0LFxosN94KjZUoWx3Wu1BJFawlSyIaJ0NgEkBinjljKHqxBBdKzDD3p6WLcElafH0pId%2FlEmWO1TlZYbbHRRtj5i5i7nuvgG%2B94ArocsH89UW2d7XGqEBXAYW1yeW%2BUQ61s%2FvoyJ5R%2F6APpZSWd4RfMQksErmADxEkIJj8RgYc1Nq8G4B0AtyprXXHoRRpQUvuTC7sfXHBjqkASaxBbHdTs7SzIDsVm5rVVLSSO6s4l522DaSL9VVNW2%2FJdMm1WQR8L9Mmw95cN%2FUjR0%2BdHJ%2FZ0eFa0XHSlhv47bQHObQuaiarwJTvFN0ilmdZVk2FkpFUKVwx5ypENFZ2pBPuGAUhPYbgGGvcUYdiTOIRF045LIxGIIvRrrEcYX0j0C%2BB1cY4oNW%2FC2ZtyZ%2BEvcnvdXNelk%2F969DS0hkelygqkpC&X-Amz-Signature=a9fac5e38030c9e8836929b4293f4e057702e34d9a56bc695b9a63e86b3ca6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R66IGPJX%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuF%2B0KGwxHVKEyvWXeOyP1rMK570DODFqsHFzbu2MbaQIhAIDexaaqdsPuoJP1wGg4JIlg%2Bb5x2hzVro5BPSOlGSikKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAJmWA21PVjm7lLd0q3AOM4R7d8LDa7qUWhi4Iq2gUNmREruA%2B5q707%2BalXONQBlQV9arS2%2FU%2B%2FzH%2F9TRts%2BOCQo%2BF%2BatgbzD3YoB0adrtRFdPLS7GOWdg5Wb6QZqSQGMJjkaBWFN8XxCQ1xq82nhWZe84uMU%2B1ulnvVzivSjdxMx8P0X%2BTkqR5WTxgxt4WVP6ySzfwVEAmMnfr390XwJtMcl5loOFifmoGEpwNSTQ9SEV2t2kW4kjaeynAxH9U%2BB2vl63mMf6bQGpmrnJmwA5c7%2BsDhwGh1rI9SK0YnIcrAWxja0Z%2Fj1VsGM9wcQzRH0forkcT2wxHfpbGxu%2B0JOty96yA1cEdUSxFrNYyPqEOdBeCmej0PGqjSJqQwSRllXIabDDflLy0pBUP7Xc25AEzK4X6hUUU%2Bjhj7bjqJpRXqk2DZpPF5aewDajwpA79qfjuK0Rc5UtNXH0LFxosN94KjZUoWx3Wu1BJFawlSyIaJ0NgEkBinjljKHqxBBdKzDD3p6WLcElafH0pId%2FlEmWO1TlZYbbHRRtj5i5i7nuvgG%2B94ArocsH89UW2d7XGqEBXAYW1yeW%2BUQ61s%2FvoyJ5R%2F6APpZSWd4RfMQksErmADxEkIJj8RgYc1Nq8G4B0AtyprXXHoRRpQUvuTC7sfXHBjqkASaxBbHdTs7SzIDsVm5rVVLSSO6s4l522DaSL9VVNW2%2FJdMm1WQR8L9Mmw95cN%2FUjR0%2BdHJ%2FZ0eFa0XHSlhv47bQHObQuaiarwJTvFN0ilmdZVk2FkpFUKVwx5ypENFZ2pBPuGAUhPYbgGGvcUYdiTOIRF045LIxGIIvRrrEcYX0j0C%2BB1cY4oNW%2FC2ZtyZ%2BEvcnvdXNelk%2F969DS0hkelygqkpC&X-Amz-Signature=3fb2ca39fde7134c1a6a4d7d9359373cc2f9c25183be759b198ee562c48e566d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R66IGPJX%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuF%2B0KGwxHVKEyvWXeOyP1rMK570DODFqsHFzbu2MbaQIhAIDexaaqdsPuoJP1wGg4JIlg%2Bb5x2hzVro5BPSOlGSikKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAJmWA21PVjm7lLd0q3AOM4R7d8LDa7qUWhi4Iq2gUNmREruA%2B5q707%2BalXONQBlQV9arS2%2FU%2B%2FzH%2F9TRts%2BOCQo%2BF%2BatgbzD3YoB0adrtRFdPLS7GOWdg5Wb6QZqSQGMJjkaBWFN8XxCQ1xq82nhWZe84uMU%2B1ulnvVzivSjdxMx8P0X%2BTkqR5WTxgxt4WVP6ySzfwVEAmMnfr390XwJtMcl5loOFifmoGEpwNSTQ9SEV2t2kW4kjaeynAxH9U%2BB2vl63mMf6bQGpmrnJmwA5c7%2BsDhwGh1rI9SK0YnIcrAWxja0Z%2Fj1VsGM9wcQzRH0forkcT2wxHfpbGxu%2B0JOty96yA1cEdUSxFrNYyPqEOdBeCmej0PGqjSJqQwSRllXIabDDflLy0pBUP7Xc25AEzK4X6hUUU%2Bjhj7bjqJpRXqk2DZpPF5aewDajwpA79qfjuK0Rc5UtNXH0LFxosN94KjZUoWx3Wu1BJFawlSyIaJ0NgEkBinjljKHqxBBdKzDD3p6WLcElafH0pId%2FlEmWO1TlZYbbHRRtj5i5i7nuvgG%2B94ArocsH89UW2d7XGqEBXAYW1yeW%2BUQ61s%2FvoyJ5R%2F6APpZSWd4RfMQksErmADxEkIJj8RgYc1Nq8G4B0AtyprXXHoRRpQUvuTC7sfXHBjqkASaxBbHdTs7SzIDsVm5rVVLSSO6s4l522DaSL9VVNW2%2FJdMm1WQR8L9Mmw95cN%2FUjR0%2BdHJ%2FZ0eFa0XHSlhv47bQHObQuaiarwJTvFN0ilmdZVk2FkpFUKVwx5ypENFZ2pBPuGAUhPYbgGGvcUYdiTOIRF045LIxGIIvRrrEcYX0j0C%2BB1cY4oNW%2FC2ZtyZ%2BEvcnvdXNelk%2F969DS0hkelygqkpC&X-Amz-Signature=147aaea76d6df6be36bad27d99c814773b2727db8d6aeaf64679dc71f7d9b046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R66IGPJX%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuF%2B0KGwxHVKEyvWXeOyP1rMK570DODFqsHFzbu2MbaQIhAIDexaaqdsPuoJP1wGg4JIlg%2Bb5x2hzVro5BPSOlGSikKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAJmWA21PVjm7lLd0q3AOM4R7d8LDa7qUWhi4Iq2gUNmREruA%2B5q707%2BalXONQBlQV9arS2%2FU%2B%2FzH%2F9TRts%2BOCQo%2BF%2BatgbzD3YoB0adrtRFdPLS7GOWdg5Wb6QZqSQGMJjkaBWFN8XxCQ1xq82nhWZe84uMU%2B1ulnvVzivSjdxMx8P0X%2BTkqR5WTxgxt4WVP6ySzfwVEAmMnfr390XwJtMcl5loOFifmoGEpwNSTQ9SEV2t2kW4kjaeynAxH9U%2BB2vl63mMf6bQGpmrnJmwA5c7%2BsDhwGh1rI9SK0YnIcrAWxja0Z%2Fj1VsGM9wcQzRH0forkcT2wxHfpbGxu%2B0JOty96yA1cEdUSxFrNYyPqEOdBeCmej0PGqjSJqQwSRllXIabDDflLy0pBUP7Xc25AEzK4X6hUUU%2Bjhj7bjqJpRXqk2DZpPF5aewDajwpA79qfjuK0Rc5UtNXH0LFxosN94KjZUoWx3Wu1BJFawlSyIaJ0NgEkBinjljKHqxBBdKzDD3p6WLcElafH0pId%2FlEmWO1TlZYbbHRRtj5i5i7nuvgG%2B94ArocsH89UW2d7XGqEBXAYW1yeW%2BUQ61s%2FvoyJ5R%2F6APpZSWd4RfMQksErmADxEkIJj8RgYc1Nq8G4B0AtyprXXHoRRpQUvuTC7sfXHBjqkASaxBbHdTs7SzIDsVm5rVVLSSO6s4l522DaSL9VVNW2%2FJdMm1WQR8L9Mmw95cN%2FUjR0%2BdHJ%2FZ0eFa0XHSlhv47bQHObQuaiarwJTvFN0ilmdZVk2FkpFUKVwx5ypENFZ2pBPuGAUhPYbgGGvcUYdiTOIRF045LIxGIIvRrrEcYX0j0C%2BB1cY4oNW%2FC2ZtyZ%2BEvcnvdXNelk%2F969DS0hkelygqkpC&X-Amz-Signature=985def03edc1b0c9224aee59cf5f9b99af123e14d83bf87e5d62f75b3209d837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R66IGPJX%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuF%2B0KGwxHVKEyvWXeOyP1rMK570DODFqsHFzbu2MbaQIhAIDexaaqdsPuoJP1wGg4JIlg%2Bb5x2hzVro5BPSOlGSikKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAJmWA21PVjm7lLd0q3AOM4R7d8LDa7qUWhi4Iq2gUNmREruA%2B5q707%2BalXONQBlQV9arS2%2FU%2B%2FzH%2F9TRts%2BOCQo%2BF%2BatgbzD3YoB0adrtRFdPLS7GOWdg5Wb6QZqSQGMJjkaBWFN8XxCQ1xq82nhWZe84uMU%2B1ulnvVzivSjdxMx8P0X%2BTkqR5WTxgxt4WVP6ySzfwVEAmMnfr390XwJtMcl5loOFifmoGEpwNSTQ9SEV2t2kW4kjaeynAxH9U%2BB2vl63mMf6bQGpmrnJmwA5c7%2BsDhwGh1rI9SK0YnIcrAWxja0Z%2Fj1VsGM9wcQzRH0forkcT2wxHfpbGxu%2B0JOty96yA1cEdUSxFrNYyPqEOdBeCmej0PGqjSJqQwSRllXIabDDflLy0pBUP7Xc25AEzK4X6hUUU%2Bjhj7bjqJpRXqk2DZpPF5aewDajwpA79qfjuK0Rc5UtNXH0LFxosN94KjZUoWx3Wu1BJFawlSyIaJ0NgEkBinjljKHqxBBdKzDD3p6WLcElafH0pId%2FlEmWO1TlZYbbHRRtj5i5i7nuvgG%2B94ArocsH89UW2d7XGqEBXAYW1yeW%2BUQ61s%2FvoyJ5R%2F6APpZSWd4RfMQksErmADxEkIJj8RgYc1Nq8G4B0AtyprXXHoRRpQUvuTC7sfXHBjqkASaxBbHdTs7SzIDsVm5rVVLSSO6s4l522DaSL9VVNW2%2FJdMm1WQR8L9Mmw95cN%2FUjR0%2BdHJ%2FZ0eFa0XHSlhv47bQHObQuaiarwJTvFN0ilmdZVk2FkpFUKVwx5ypENFZ2pBPuGAUhPYbgGGvcUYdiTOIRF045LIxGIIvRrrEcYX0j0C%2BB1cY4oNW%2FC2ZtyZ%2BEvcnvdXNelk%2F969DS0hkelygqkpC&X-Amz-Signature=dc6420b81667597e1480b0cb3b09adae44f2a1c16acffd7b9e0e03d087a7d83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
