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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY462QSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCraqmPig2grq2Pld%2Bf0WYsp07uIdH%2BO8GcM9HAIC0OPQIhANFIYqhZUdn1F84a2Ji%2Bn0tj0XapV3kFDWWhX6L3T6yYKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyab88wAnFzHxQA4V8q3AN74FDbPC%2BxKKoJuIm75EkOPe5RQbnb3jo7MwKfZ62QOMM9L%2FScQZz8I663VNoXc%2Bo6L8dBeV8tptf1v9vJkfjnbLNR6iGqlBdmFKpsudHgVWaCbmF0rL7vhd0GcncCwGM7ykOdjqlkJEWN1G0BnG5RM7uwkEuyitOzvnQ%2FAq1oXaQ3%2FygY32rtNojW4Pi8BXt0rhH%2FMx4e3lV4yfmOhVmUJcV37flW5%2B3cE%2BlJq78DDsOla8bvgxUDyyy4fsbdDmKOMiGBtnHBoklQqfYgGSLdir8WlldIn3FOdwvpsJCHBCXbfGyEseOwOhZj5h0CYAdk9IdgEcVUtq2o4S%2BxzsBRlzZa0%2B%2F3j2fYErie7IM%2FS%2FnWSplx1OaAJ1GEeVkY9vjFA3wJlcW3ptBOlX%2F3OJt54xI2jgnJHV%2FLZkOQvoywLxB9SBGLEAup0CUwfTZlZTlNfkij%2BRgga9gAlnbEbOyCD5Pwer9sdBr7XXJhSF3pt8125icN0%2FmDZbeIcko6mh3SsreIVEmUsDQleLY%2F1OxSPmQWJGMz3D%2BNixqPmZef3k27QoOxASwtUGhWLkrm%2BAoA9XGpIu5tBqe9MkMStkChDwiSMGQmXYHXin0xWSn%2FGNDMBjyEllg4AQ0SZDDIsabABjqkARMyZTjRRBE6fwd8bLr1lz6nyJXWtiAcC827aWjI8RyCweCf4hu7ATxYetazPI3Uj0u4eC1nZ5ugW%2BHSQZlUF2UVMQbiNTl%2F7z9IMdtpjl0xyJ3YJw0sRNRTFb8araCShlhiPDz%2F3wjmSZbnKT299xXsazYV4aPoY3pLR18feiiG9qoKLdHOuZfmzMwozFhmsK9%2FzLgTd7YmR2i0GCkkTA9yRhpQ&X-Amz-Signature=522d6fd0f31882d0c4683f1ae06a0299a253fcaac5dd474603dd6db66203d8d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY462QSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCraqmPig2grq2Pld%2Bf0WYsp07uIdH%2BO8GcM9HAIC0OPQIhANFIYqhZUdn1F84a2Ji%2Bn0tj0XapV3kFDWWhX6L3T6yYKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyab88wAnFzHxQA4V8q3AN74FDbPC%2BxKKoJuIm75EkOPe5RQbnb3jo7MwKfZ62QOMM9L%2FScQZz8I663VNoXc%2Bo6L8dBeV8tptf1v9vJkfjnbLNR6iGqlBdmFKpsudHgVWaCbmF0rL7vhd0GcncCwGM7ykOdjqlkJEWN1G0BnG5RM7uwkEuyitOzvnQ%2FAq1oXaQ3%2FygY32rtNojW4Pi8BXt0rhH%2FMx4e3lV4yfmOhVmUJcV37flW5%2B3cE%2BlJq78DDsOla8bvgxUDyyy4fsbdDmKOMiGBtnHBoklQqfYgGSLdir8WlldIn3FOdwvpsJCHBCXbfGyEseOwOhZj5h0CYAdk9IdgEcVUtq2o4S%2BxzsBRlzZa0%2B%2F3j2fYErie7IM%2FS%2FnWSplx1OaAJ1GEeVkY9vjFA3wJlcW3ptBOlX%2F3OJt54xI2jgnJHV%2FLZkOQvoywLxB9SBGLEAup0CUwfTZlZTlNfkij%2BRgga9gAlnbEbOyCD5Pwer9sdBr7XXJhSF3pt8125icN0%2FmDZbeIcko6mh3SsreIVEmUsDQleLY%2F1OxSPmQWJGMz3D%2BNixqPmZef3k27QoOxASwtUGhWLkrm%2BAoA9XGpIu5tBqe9MkMStkChDwiSMGQmXYHXin0xWSn%2FGNDMBjyEllg4AQ0SZDDIsabABjqkARMyZTjRRBE6fwd8bLr1lz6nyJXWtiAcC827aWjI8RyCweCf4hu7ATxYetazPI3Uj0u4eC1nZ5ugW%2BHSQZlUF2UVMQbiNTl%2F7z9IMdtpjl0xyJ3YJw0sRNRTFb8araCShlhiPDz%2F3wjmSZbnKT299xXsazYV4aPoY3pLR18feiiG9qoKLdHOuZfmzMwozFhmsK9%2FzLgTd7YmR2i0GCkkTA9yRhpQ&X-Amz-Signature=303cb01abd81b222ad062432a1f81e742a7196ccbabe93a61c1df5814972f287&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY462QSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCraqmPig2grq2Pld%2Bf0WYsp07uIdH%2BO8GcM9HAIC0OPQIhANFIYqhZUdn1F84a2Ji%2Bn0tj0XapV3kFDWWhX6L3T6yYKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyab88wAnFzHxQA4V8q3AN74FDbPC%2BxKKoJuIm75EkOPe5RQbnb3jo7MwKfZ62QOMM9L%2FScQZz8I663VNoXc%2Bo6L8dBeV8tptf1v9vJkfjnbLNR6iGqlBdmFKpsudHgVWaCbmF0rL7vhd0GcncCwGM7ykOdjqlkJEWN1G0BnG5RM7uwkEuyitOzvnQ%2FAq1oXaQ3%2FygY32rtNojW4Pi8BXt0rhH%2FMx4e3lV4yfmOhVmUJcV37flW5%2B3cE%2BlJq78DDsOla8bvgxUDyyy4fsbdDmKOMiGBtnHBoklQqfYgGSLdir8WlldIn3FOdwvpsJCHBCXbfGyEseOwOhZj5h0CYAdk9IdgEcVUtq2o4S%2BxzsBRlzZa0%2B%2F3j2fYErie7IM%2FS%2FnWSplx1OaAJ1GEeVkY9vjFA3wJlcW3ptBOlX%2F3OJt54xI2jgnJHV%2FLZkOQvoywLxB9SBGLEAup0CUwfTZlZTlNfkij%2BRgga9gAlnbEbOyCD5Pwer9sdBr7XXJhSF3pt8125icN0%2FmDZbeIcko6mh3SsreIVEmUsDQleLY%2F1OxSPmQWJGMz3D%2BNixqPmZef3k27QoOxASwtUGhWLkrm%2BAoA9XGpIu5tBqe9MkMStkChDwiSMGQmXYHXin0xWSn%2FGNDMBjyEllg4AQ0SZDDIsabABjqkARMyZTjRRBE6fwd8bLr1lz6nyJXWtiAcC827aWjI8RyCweCf4hu7ATxYetazPI3Uj0u4eC1nZ5ugW%2BHSQZlUF2UVMQbiNTl%2F7z9IMdtpjl0xyJ3YJw0sRNRTFb8araCShlhiPDz%2F3wjmSZbnKT299xXsazYV4aPoY3pLR18feiiG9qoKLdHOuZfmzMwozFhmsK9%2FzLgTd7YmR2i0GCkkTA9yRhpQ&X-Amz-Signature=377612805a608a09d8a3380774f4efe04e5c2e2d53bb71bb6d952ab4bbed30b0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY462QSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCraqmPig2grq2Pld%2Bf0WYsp07uIdH%2BO8GcM9HAIC0OPQIhANFIYqhZUdn1F84a2Ji%2Bn0tj0XapV3kFDWWhX6L3T6yYKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyab88wAnFzHxQA4V8q3AN74FDbPC%2BxKKoJuIm75EkOPe5RQbnb3jo7MwKfZ62QOMM9L%2FScQZz8I663VNoXc%2Bo6L8dBeV8tptf1v9vJkfjnbLNR6iGqlBdmFKpsudHgVWaCbmF0rL7vhd0GcncCwGM7ykOdjqlkJEWN1G0BnG5RM7uwkEuyitOzvnQ%2FAq1oXaQ3%2FygY32rtNojW4Pi8BXt0rhH%2FMx4e3lV4yfmOhVmUJcV37flW5%2B3cE%2BlJq78DDsOla8bvgxUDyyy4fsbdDmKOMiGBtnHBoklQqfYgGSLdir8WlldIn3FOdwvpsJCHBCXbfGyEseOwOhZj5h0CYAdk9IdgEcVUtq2o4S%2BxzsBRlzZa0%2B%2F3j2fYErie7IM%2FS%2FnWSplx1OaAJ1GEeVkY9vjFA3wJlcW3ptBOlX%2F3OJt54xI2jgnJHV%2FLZkOQvoywLxB9SBGLEAup0CUwfTZlZTlNfkij%2BRgga9gAlnbEbOyCD5Pwer9sdBr7XXJhSF3pt8125icN0%2FmDZbeIcko6mh3SsreIVEmUsDQleLY%2F1OxSPmQWJGMz3D%2BNixqPmZef3k27QoOxASwtUGhWLkrm%2BAoA9XGpIu5tBqe9MkMStkChDwiSMGQmXYHXin0xWSn%2FGNDMBjyEllg4AQ0SZDDIsabABjqkARMyZTjRRBE6fwd8bLr1lz6nyJXWtiAcC827aWjI8RyCweCf4hu7ATxYetazPI3Uj0u4eC1nZ5ugW%2BHSQZlUF2UVMQbiNTl%2F7z9IMdtpjl0xyJ3YJw0sRNRTFb8araCShlhiPDz%2F3wjmSZbnKT299xXsazYV4aPoY3pLR18feiiG9qoKLdHOuZfmzMwozFhmsK9%2FzLgTd7YmR2i0GCkkTA9yRhpQ&X-Amz-Signature=06248b5c69bbdc431d30cc800f80063095c5f0ac9f1559a26eef8f57fe42fe2b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY462QSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCraqmPig2grq2Pld%2Bf0WYsp07uIdH%2BO8GcM9HAIC0OPQIhANFIYqhZUdn1F84a2Ji%2Bn0tj0XapV3kFDWWhX6L3T6yYKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyab88wAnFzHxQA4V8q3AN74FDbPC%2BxKKoJuIm75EkOPe5RQbnb3jo7MwKfZ62QOMM9L%2FScQZz8I663VNoXc%2Bo6L8dBeV8tptf1v9vJkfjnbLNR6iGqlBdmFKpsudHgVWaCbmF0rL7vhd0GcncCwGM7ykOdjqlkJEWN1G0BnG5RM7uwkEuyitOzvnQ%2FAq1oXaQ3%2FygY32rtNojW4Pi8BXt0rhH%2FMx4e3lV4yfmOhVmUJcV37flW5%2B3cE%2BlJq78DDsOla8bvgxUDyyy4fsbdDmKOMiGBtnHBoklQqfYgGSLdir8WlldIn3FOdwvpsJCHBCXbfGyEseOwOhZj5h0CYAdk9IdgEcVUtq2o4S%2BxzsBRlzZa0%2B%2F3j2fYErie7IM%2FS%2FnWSplx1OaAJ1GEeVkY9vjFA3wJlcW3ptBOlX%2F3OJt54xI2jgnJHV%2FLZkOQvoywLxB9SBGLEAup0CUwfTZlZTlNfkij%2BRgga9gAlnbEbOyCD5Pwer9sdBr7XXJhSF3pt8125icN0%2FmDZbeIcko6mh3SsreIVEmUsDQleLY%2F1OxSPmQWJGMz3D%2BNixqPmZef3k27QoOxASwtUGhWLkrm%2BAoA9XGpIu5tBqe9MkMStkChDwiSMGQmXYHXin0xWSn%2FGNDMBjyEllg4AQ0SZDDIsabABjqkARMyZTjRRBE6fwd8bLr1lz6nyJXWtiAcC827aWjI8RyCweCf4hu7ATxYetazPI3Uj0u4eC1nZ5ugW%2BHSQZlUF2UVMQbiNTl%2F7z9IMdtpjl0xyJ3YJw0sRNRTFb8araCShlhiPDz%2F3wjmSZbnKT299xXsazYV4aPoY3pLR18feiiG9qoKLdHOuZfmzMwozFhmsK9%2FzLgTd7YmR2i0GCkkTA9yRhpQ&X-Amz-Signature=5f76205422d11925406f27fae06d33624d897335217077ca9b5b6235b87d3a23&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY462QSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCraqmPig2grq2Pld%2Bf0WYsp07uIdH%2BO8GcM9HAIC0OPQIhANFIYqhZUdn1F84a2Ji%2Bn0tj0XapV3kFDWWhX6L3T6yYKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyab88wAnFzHxQA4V8q3AN74FDbPC%2BxKKoJuIm75EkOPe5RQbnb3jo7MwKfZ62QOMM9L%2FScQZz8I663VNoXc%2Bo6L8dBeV8tptf1v9vJkfjnbLNR6iGqlBdmFKpsudHgVWaCbmF0rL7vhd0GcncCwGM7ykOdjqlkJEWN1G0BnG5RM7uwkEuyitOzvnQ%2FAq1oXaQ3%2FygY32rtNojW4Pi8BXt0rhH%2FMx4e3lV4yfmOhVmUJcV37flW5%2B3cE%2BlJq78DDsOla8bvgxUDyyy4fsbdDmKOMiGBtnHBoklQqfYgGSLdir8WlldIn3FOdwvpsJCHBCXbfGyEseOwOhZj5h0CYAdk9IdgEcVUtq2o4S%2BxzsBRlzZa0%2B%2F3j2fYErie7IM%2FS%2FnWSplx1OaAJ1GEeVkY9vjFA3wJlcW3ptBOlX%2F3OJt54xI2jgnJHV%2FLZkOQvoywLxB9SBGLEAup0CUwfTZlZTlNfkij%2BRgga9gAlnbEbOyCD5Pwer9sdBr7XXJhSF3pt8125icN0%2FmDZbeIcko6mh3SsreIVEmUsDQleLY%2F1OxSPmQWJGMz3D%2BNixqPmZef3k27QoOxASwtUGhWLkrm%2BAoA9XGpIu5tBqe9MkMStkChDwiSMGQmXYHXin0xWSn%2FGNDMBjyEllg4AQ0SZDDIsabABjqkARMyZTjRRBE6fwd8bLr1lz6nyJXWtiAcC827aWjI8RyCweCf4hu7ATxYetazPI3Uj0u4eC1nZ5ugW%2BHSQZlUF2UVMQbiNTl%2F7z9IMdtpjl0xyJ3YJw0sRNRTFb8araCShlhiPDz%2F3wjmSZbnKT299xXsazYV4aPoY3pLR18feiiG9qoKLdHOuZfmzMwozFhmsK9%2FzLgTd7YmR2i0GCkkTA9yRhpQ&X-Amz-Signature=718381e245e255f1436cd19889251a3bd78ae624412f01c04c6c14865cf36261&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY462QSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCraqmPig2grq2Pld%2Bf0WYsp07uIdH%2BO8GcM9HAIC0OPQIhANFIYqhZUdn1F84a2Ji%2Bn0tj0XapV3kFDWWhX6L3T6yYKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyab88wAnFzHxQA4V8q3AN74FDbPC%2BxKKoJuIm75EkOPe5RQbnb3jo7MwKfZ62QOMM9L%2FScQZz8I663VNoXc%2Bo6L8dBeV8tptf1v9vJkfjnbLNR6iGqlBdmFKpsudHgVWaCbmF0rL7vhd0GcncCwGM7ykOdjqlkJEWN1G0BnG5RM7uwkEuyitOzvnQ%2FAq1oXaQ3%2FygY32rtNojW4Pi8BXt0rhH%2FMx4e3lV4yfmOhVmUJcV37flW5%2B3cE%2BlJq78DDsOla8bvgxUDyyy4fsbdDmKOMiGBtnHBoklQqfYgGSLdir8WlldIn3FOdwvpsJCHBCXbfGyEseOwOhZj5h0CYAdk9IdgEcVUtq2o4S%2BxzsBRlzZa0%2B%2F3j2fYErie7IM%2FS%2FnWSplx1OaAJ1GEeVkY9vjFA3wJlcW3ptBOlX%2F3OJt54xI2jgnJHV%2FLZkOQvoywLxB9SBGLEAup0CUwfTZlZTlNfkij%2BRgga9gAlnbEbOyCD5Pwer9sdBr7XXJhSF3pt8125icN0%2FmDZbeIcko6mh3SsreIVEmUsDQleLY%2F1OxSPmQWJGMz3D%2BNixqPmZef3k27QoOxASwtUGhWLkrm%2BAoA9XGpIu5tBqe9MkMStkChDwiSMGQmXYHXin0xWSn%2FGNDMBjyEllg4AQ0SZDDIsabABjqkARMyZTjRRBE6fwd8bLr1lz6nyJXWtiAcC827aWjI8RyCweCf4hu7ATxYetazPI3Uj0u4eC1nZ5ugW%2BHSQZlUF2UVMQbiNTl%2F7z9IMdtpjl0xyJ3YJw0sRNRTFb8araCShlhiPDz%2F3wjmSZbnKT299xXsazYV4aPoY3pLR18feiiG9qoKLdHOuZfmzMwozFhmsK9%2FzLgTd7YmR2i0GCkkTA9yRhpQ&X-Amz-Signature=6888f9531ffee7118defd5eed50b4c21acb48badfdd8bf9f1dda1d609ca3a1a5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
