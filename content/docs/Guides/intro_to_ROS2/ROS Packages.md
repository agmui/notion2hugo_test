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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDVSNMF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuGxR8rmgNv42HrO5T8MoRJImXHrajpnpL6Tg6gTG7GwIgaYdfPJ3HQfPdAaxz8D4qE6svfdXtYyP0upe1T8s9q6oqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT7h242O28qCpHkcSrcA9rV6kLwpeWDCsdRMcVX1e%2BRyva7QDEOt2WSOOcrYv3CDR%2ByXvQPR0hNbKnEnTkPyhG%2B83VGYugWgOQ0VdCFTAEw0u6x7P4l0RR1Hb54a69Mx%2BRez1zw3Y0cfbqZG6hI99%2F8mQQMuxOzS82emfxSRWWhFPkWh%2Fa%2BHkBeBbLdcKAP5BQhAE6kGh2BX2xc%2FgRFZnjhIJZndOYJSFjccmHBfJw6CNDz%2FkC%2BYlij%2BYRxUcW0O%2F5wsLnG5C4YF1oBjhZ5AfLXnMp5N8SPhnec9LvnTI3G%2FI1teY7ScWR6uqTBq1ofLBvlQxTOjUhmFq6Eo7fuPRibaKemKaPe7wG5u70TL0gsn%2B0Da8NvTd2RbhkpCBbzKe5JxmSXohMstiwSmB10vRAb9h9JSmPyc9HUxGPTkkwzqQUNbw3h7ze3Xv%2FXys%2BmXk1wysU5CGZTHU%2B6OU%2FeOaV4%2F%2Bn%2BJry%2F8URVjv6QEuREVSuSxB2DwTzDi3sMqnHk012AdBi37K35Sukl65g0LCtHmXM%2F7xSwh1tJOO%2BTNzXdwTmFDxEz55pEkIh3MTwkRXifjDJddhY%2Br7NXlbhTs%2FI8Nq8YuSr59T25HGiek8SUeezHjxTcBkGyGtfD%2FFYPMnJEnxsyiSKX8mnzMKey6r0GOqUBaXWS2hEqg7n5oYilEN8dcZVNx%2BP%2F7RiVEHReT1Q7RR9izf%2B37F7oTBct9ZxLs5yMnUUFGqZEnGIc1hjVVENhA7Sg3v2JNpCJfn1QrHlkGhd5ZKZDgsw%2F4IOdvr9b40T9VkFaEVpnqjs%2FIBXy565SGQ1kYy%2BJwnIB4Q%2FD%2FK43CiEbQuJQfdD%2BJ7O%2BAgws1TnNrkzJmWq6yWKFfX72c3hx4Le4sO6D&X-Amz-Signature=d94b581441f8ae7213f80b0f52aace502ea8aef3910bc7bc44ff7343d9268992&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDVSNMF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuGxR8rmgNv42HrO5T8MoRJImXHrajpnpL6Tg6gTG7GwIgaYdfPJ3HQfPdAaxz8D4qE6svfdXtYyP0upe1T8s9q6oqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT7h242O28qCpHkcSrcA9rV6kLwpeWDCsdRMcVX1e%2BRyva7QDEOt2WSOOcrYv3CDR%2ByXvQPR0hNbKnEnTkPyhG%2B83VGYugWgOQ0VdCFTAEw0u6x7P4l0RR1Hb54a69Mx%2BRez1zw3Y0cfbqZG6hI99%2F8mQQMuxOzS82emfxSRWWhFPkWh%2Fa%2BHkBeBbLdcKAP5BQhAE6kGh2BX2xc%2FgRFZnjhIJZndOYJSFjccmHBfJw6CNDz%2FkC%2BYlij%2BYRxUcW0O%2F5wsLnG5C4YF1oBjhZ5AfLXnMp5N8SPhnec9LvnTI3G%2FI1teY7ScWR6uqTBq1ofLBvlQxTOjUhmFq6Eo7fuPRibaKemKaPe7wG5u70TL0gsn%2B0Da8NvTd2RbhkpCBbzKe5JxmSXohMstiwSmB10vRAb9h9JSmPyc9HUxGPTkkwzqQUNbw3h7ze3Xv%2FXys%2BmXk1wysU5CGZTHU%2B6OU%2FeOaV4%2F%2Bn%2BJry%2F8URVjv6QEuREVSuSxB2DwTzDi3sMqnHk012AdBi37K35Sukl65g0LCtHmXM%2F7xSwh1tJOO%2BTNzXdwTmFDxEz55pEkIh3MTwkRXifjDJddhY%2Br7NXlbhTs%2FI8Nq8YuSr59T25HGiek8SUeezHjxTcBkGyGtfD%2FFYPMnJEnxsyiSKX8mnzMKey6r0GOqUBaXWS2hEqg7n5oYilEN8dcZVNx%2BP%2F7RiVEHReT1Q7RR9izf%2B37F7oTBct9ZxLs5yMnUUFGqZEnGIc1hjVVENhA7Sg3v2JNpCJfn1QrHlkGhd5ZKZDgsw%2F4IOdvr9b40T9VkFaEVpnqjs%2FIBXy565SGQ1kYy%2BJwnIB4Q%2FD%2FK43CiEbQuJQfdD%2BJ7O%2BAgws1TnNrkzJmWq6yWKFfX72c3hx4Le4sO6D&X-Amz-Signature=2c58502f3c60ba587193e255626f307899e19abff3862e2307ef3954ab4827df&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDVSNMF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuGxR8rmgNv42HrO5T8MoRJImXHrajpnpL6Tg6gTG7GwIgaYdfPJ3HQfPdAaxz8D4qE6svfdXtYyP0upe1T8s9q6oqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT7h242O28qCpHkcSrcA9rV6kLwpeWDCsdRMcVX1e%2BRyva7QDEOt2WSOOcrYv3CDR%2ByXvQPR0hNbKnEnTkPyhG%2B83VGYugWgOQ0VdCFTAEw0u6x7P4l0RR1Hb54a69Mx%2BRez1zw3Y0cfbqZG6hI99%2F8mQQMuxOzS82emfxSRWWhFPkWh%2Fa%2BHkBeBbLdcKAP5BQhAE6kGh2BX2xc%2FgRFZnjhIJZndOYJSFjccmHBfJw6CNDz%2FkC%2BYlij%2BYRxUcW0O%2F5wsLnG5C4YF1oBjhZ5AfLXnMp5N8SPhnec9LvnTI3G%2FI1teY7ScWR6uqTBq1ofLBvlQxTOjUhmFq6Eo7fuPRibaKemKaPe7wG5u70TL0gsn%2B0Da8NvTd2RbhkpCBbzKe5JxmSXohMstiwSmB10vRAb9h9JSmPyc9HUxGPTkkwzqQUNbw3h7ze3Xv%2FXys%2BmXk1wysU5CGZTHU%2B6OU%2FeOaV4%2F%2Bn%2BJry%2F8URVjv6QEuREVSuSxB2DwTzDi3sMqnHk012AdBi37K35Sukl65g0LCtHmXM%2F7xSwh1tJOO%2BTNzXdwTmFDxEz55pEkIh3MTwkRXifjDJddhY%2Br7NXlbhTs%2FI8Nq8YuSr59T25HGiek8SUeezHjxTcBkGyGtfD%2FFYPMnJEnxsyiSKX8mnzMKey6r0GOqUBaXWS2hEqg7n5oYilEN8dcZVNx%2BP%2F7RiVEHReT1Q7RR9izf%2B37F7oTBct9ZxLs5yMnUUFGqZEnGIc1hjVVENhA7Sg3v2JNpCJfn1QrHlkGhd5ZKZDgsw%2F4IOdvr9b40T9VkFaEVpnqjs%2FIBXy565SGQ1kYy%2BJwnIB4Q%2FD%2FK43CiEbQuJQfdD%2BJ7O%2BAgws1TnNrkzJmWq6yWKFfX72c3hx4Le4sO6D&X-Amz-Signature=b89757ec14a42a3240a04f43c37c154598114a8c61754cccf1d8e1c0bbfa6c98&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDVSNMF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuGxR8rmgNv42HrO5T8MoRJImXHrajpnpL6Tg6gTG7GwIgaYdfPJ3HQfPdAaxz8D4qE6svfdXtYyP0upe1T8s9q6oqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT7h242O28qCpHkcSrcA9rV6kLwpeWDCsdRMcVX1e%2BRyva7QDEOt2WSOOcrYv3CDR%2ByXvQPR0hNbKnEnTkPyhG%2B83VGYugWgOQ0VdCFTAEw0u6x7P4l0RR1Hb54a69Mx%2BRez1zw3Y0cfbqZG6hI99%2F8mQQMuxOzS82emfxSRWWhFPkWh%2Fa%2BHkBeBbLdcKAP5BQhAE6kGh2BX2xc%2FgRFZnjhIJZndOYJSFjccmHBfJw6CNDz%2FkC%2BYlij%2BYRxUcW0O%2F5wsLnG5C4YF1oBjhZ5AfLXnMp5N8SPhnec9LvnTI3G%2FI1teY7ScWR6uqTBq1ofLBvlQxTOjUhmFq6Eo7fuPRibaKemKaPe7wG5u70TL0gsn%2B0Da8NvTd2RbhkpCBbzKe5JxmSXohMstiwSmB10vRAb9h9JSmPyc9HUxGPTkkwzqQUNbw3h7ze3Xv%2FXys%2BmXk1wysU5CGZTHU%2B6OU%2FeOaV4%2F%2Bn%2BJry%2F8URVjv6QEuREVSuSxB2DwTzDi3sMqnHk012AdBi37K35Sukl65g0LCtHmXM%2F7xSwh1tJOO%2BTNzXdwTmFDxEz55pEkIh3MTwkRXifjDJddhY%2Br7NXlbhTs%2FI8Nq8YuSr59T25HGiek8SUeezHjxTcBkGyGtfD%2FFYPMnJEnxsyiSKX8mnzMKey6r0GOqUBaXWS2hEqg7n5oYilEN8dcZVNx%2BP%2F7RiVEHReT1Q7RR9izf%2B37F7oTBct9ZxLs5yMnUUFGqZEnGIc1hjVVENhA7Sg3v2JNpCJfn1QrHlkGhd5ZKZDgsw%2F4IOdvr9b40T9VkFaEVpnqjs%2FIBXy565SGQ1kYy%2BJwnIB4Q%2FD%2FK43CiEbQuJQfdD%2BJ7O%2BAgws1TnNrkzJmWq6yWKFfX72c3hx4Le4sO6D&X-Amz-Signature=21d2a39ff8f6562f6b731becf7a6927fdf7b3c892a907c70a66b9e446911b94e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDVSNMF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuGxR8rmgNv42HrO5T8MoRJImXHrajpnpL6Tg6gTG7GwIgaYdfPJ3HQfPdAaxz8D4qE6svfdXtYyP0upe1T8s9q6oqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT7h242O28qCpHkcSrcA9rV6kLwpeWDCsdRMcVX1e%2BRyva7QDEOt2WSOOcrYv3CDR%2ByXvQPR0hNbKnEnTkPyhG%2B83VGYugWgOQ0VdCFTAEw0u6x7P4l0RR1Hb54a69Mx%2BRez1zw3Y0cfbqZG6hI99%2F8mQQMuxOzS82emfxSRWWhFPkWh%2Fa%2BHkBeBbLdcKAP5BQhAE6kGh2BX2xc%2FgRFZnjhIJZndOYJSFjccmHBfJw6CNDz%2FkC%2BYlij%2BYRxUcW0O%2F5wsLnG5C4YF1oBjhZ5AfLXnMp5N8SPhnec9LvnTI3G%2FI1teY7ScWR6uqTBq1ofLBvlQxTOjUhmFq6Eo7fuPRibaKemKaPe7wG5u70TL0gsn%2B0Da8NvTd2RbhkpCBbzKe5JxmSXohMstiwSmB10vRAb9h9JSmPyc9HUxGPTkkwzqQUNbw3h7ze3Xv%2FXys%2BmXk1wysU5CGZTHU%2B6OU%2FeOaV4%2F%2Bn%2BJry%2F8URVjv6QEuREVSuSxB2DwTzDi3sMqnHk012AdBi37K35Sukl65g0LCtHmXM%2F7xSwh1tJOO%2BTNzXdwTmFDxEz55pEkIh3MTwkRXifjDJddhY%2Br7NXlbhTs%2FI8Nq8YuSr59T25HGiek8SUeezHjxTcBkGyGtfD%2FFYPMnJEnxsyiSKX8mnzMKey6r0GOqUBaXWS2hEqg7n5oYilEN8dcZVNx%2BP%2F7RiVEHReT1Q7RR9izf%2B37F7oTBct9ZxLs5yMnUUFGqZEnGIc1hjVVENhA7Sg3v2JNpCJfn1QrHlkGhd5ZKZDgsw%2F4IOdvr9b40T9VkFaEVpnqjs%2FIBXy565SGQ1kYy%2BJwnIB4Q%2FD%2FK43CiEbQuJQfdD%2BJ7O%2BAgws1TnNrkzJmWq6yWKFfX72c3hx4Le4sO6D&X-Amz-Signature=ba6cb1620414e82891bcd6a434a45cfcf9f5ed7619a0d7c1220e8eb90bfb90d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDVSNMF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuGxR8rmgNv42HrO5T8MoRJImXHrajpnpL6Tg6gTG7GwIgaYdfPJ3HQfPdAaxz8D4qE6svfdXtYyP0upe1T8s9q6oqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT7h242O28qCpHkcSrcA9rV6kLwpeWDCsdRMcVX1e%2BRyva7QDEOt2WSOOcrYv3CDR%2ByXvQPR0hNbKnEnTkPyhG%2B83VGYugWgOQ0VdCFTAEw0u6x7P4l0RR1Hb54a69Mx%2BRez1zw3Y0cfbqZG6hI99%2F8mQQMuxOzS82emfxSRWWhFPkWh%2Fa%2BHkBeBbLdcKAP5BQhAE6kGh2BX2xc%2FgRFZnjhIJZndOYJSFjccmHBfJw6CNDz%2FkC%2BYlij%2BYRxUcW0O%2F5wsLnG5C4YF1oBjhZ5AfLXnMp5N8SPhnec9LvnTI3G%2FI1teY7ScWR6uqTBq1ofLBvlQxTOjUhmFq6Eo7fuPRibaKemKaPe7wG5u70TL0gsn%2B0Da8NvTd2RbhkpCBbzKe5JxmSXohMstiwSmB10vRAb9h9JSmPyc9HUxGPTkkwzqQUNbw3h7ze3Xv%2FXys%2BmXk1wysU5CGZTHU%2B6OU%2FeOaV4%2F%2Bn%2BJry%2F8URVjv6QEuREVSuSxB2DwTzDi3sMqnHk012AdBi37K35Sukl65g0LCtHmXM%2F7xSwh1tJOO%2BTNzXdwTmFDxEz55pEkIh3MTwkRXifjDJddhY%2Br7NXlbhTs%2FI8Nq8YuSr59T25HGiek8SUeezHjxTcBkGyGtfD%2FFYPMnJEnxsyiSKX8mnzMKey6r0GOqUBaXWS2hEqg7n5oYilEN8dcZVNx%2BP%2F7RiVEHReT1Q7RR9izf%2B37F7oTBct9ZxLs5yMnUUFGqZEnGIc1hjVVENhA7Sg3v2JNpCJfn1QrHlkGhd5ZKZDgsw%2F4IOdvr9b40T9VkFaEVpnqjs%2FIBXy565SGQ1kYy%2BJwnIB4Q%2FD%2FK43CiEbQuJQfdD%2BJ7O%2BAgws1TnNrkzJmWq6yWKFfX72c3hx4Le4sO6D&X-Amz-Signature=2992154011dd973afdb4d640aba7538776336eaa738e05e92e8504a7ad5b5928&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDVSNMF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuGxR8rmgNv42HrO5T8MoRJImXHrajpnpL6Tg6gTG7GwIgaYdfPJ3HQfPdAaxz8D4qE6svfdXtYyP0upe1T8s9q6oqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT7h242O28qCpHkcSrcA9rV6kLwpeWDCsdRMcVX1e%2BRyva7QDEOt2WSOOcrYv3CDR%2ByXvQPR0hNbKnEnTkPyhG%2B83VGYugWgOQ0VdCFTAEw0u6x7P4l0RR1Hb54a69Mx%2BRez1zw3Y0cfbqZG6hI99%2F8mQQMuxOzS82emfxSRWWhFPkWh%2Fa%2BHkBeBbLdcKAP5BQhAE6kGh2BX2xc%2FgRFZnjhIJZndOYJSFjccmHBfJw6CNDz%2FkC%2BYlij%2BYRxUcW0O%2F5wsLnG5C4YF1oBjhZ5AfLXnMp5N8SPhnec9LvnTI3G%2FI1teY7ScWR6uqTBq1ofLBvlQxTOjUhmFq6Eo7fuPRibaKemKaPe7wG5u70TL0gsn%2B0Da8NvTd2RbhkpCBbzKe5JxmSXohMstiwSmB10vRAb9h9JSmPyc9HUxGPTkkwzqQUNbw3h7ze3Xv%2FXys%2BmXk1wysU5CGZTHU%2B6OU%2FeOaV4%2F%2Bn%2BJry%2F8URVjv6QEuREVSuSxB2DwTzDi3sMqnHk012AdBi37K35Sukl65g0LCtHmXM%2F7xSwh1tJOO%2BTNzXdwTmFDxEz55pEkIh3MTwkRXifjDJddhY%2Br7NXlbhTs%2FI8Nq8YuSr59T25HGiek8SUeezHjxTcBkGyGtfD%2FFYPMnJEnxsyiSKX8mnzMKey6r0GOqUBaXWS2hEqg7n5oYilEN8dcZVNx%2BP%2F7RiVEHReT1Q7RR9izf%2B37F7oTBct9ZxLs5yMnUUFGqZEnGIc1hjVVENhA7Sg3v2JNpCJfn1QrHlkGhd5ZKZDgsw%2F4IOdvr9b40T9VkFaEVpnqjs%2FIBXy565SGQ1kYy%2BJwnIB4Q%2FD%2FK43CiEbQuJQfdD%2BJ7O%2BAgws1TnNrkzJmWq6yWKFfX72c3hx4Le4sO6D&X-Amz-Signature=2c2c1b272ed6e6c64d6cfe1347b03b112eed2be8ebcc67680d5f8d3758766db1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
