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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z26ZYRS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCaKEWkKAOCzSRMkZqu3xHx3wS3os9boufnNrGp07w6WgIgEISdcxhtcSfoTijrKv2f3g%2BypQznks9rAiu8gxhcsxIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnBAyyDW7njsuoZdSrcA61ufFQ8VsK4AM2%2Fsyg48%2Bm2EZK5BmT8ESbl6iU9W7jPDIQSaTIesDyxA7QglsKDC%2BcC633fxQ4DpHLx%2FCYpEiAaI5eQcanmk%2BFuItpfZGgN9pX4wHtKxFN23BCHYmO%2BOo9J7GNgmP1vP8gG8M0gDOwgM5ZNwMOU6sGqrofbf7wEl24BwQGx2HJVOjyPdOjyG7znyj3GLQHqCQpYVQyG%2FO%2BgTlpiE3y2u8%2FoS3nH97F%2F0OZiG%2BqyRB5idGSzvxUZvqTgHhoSnwZDXUF1P1UpWVAdQc%2Fhia7tgOG6DF6PL%2FT1FygVRILTOZJjYPRk%2FNHHKntiHFQ%2B6RSiD5VnQvwnuDNfH7LopYRu3pNUajAJtS4f2L7Tqjfm00HxhdRLTkZDqMiONXW1B7TBNxokJ%2FerixAff78efYDAhu1HX8lE4LMM%2FaVqzqMf1v%2FJRj5rVIYFXXJ%2FS67t%2FOOtbujBA4ZHEkgoIwxFL3Ui4%2BF7epa%2F4Gv0DYc2G3AQMpX4htSvqXrZaV2jl2mHaIDQD6NbQ36Z3XmeC1uOmGZ5BH%2BBj8xXn1m9FyaHpDIh%2B1TtCE5UT%2Bn9mPDMQ2iH7DDblkY1LctID3eltI7CUxJpVv42W5d0E7I5bdnOTK0%2FjAZ8WOnJMLnj%2Fb4GOqUBK%2B0D1Yi7zIKpYFXDy%2F4dXN8%2FDct9I3XnBnLmPUzkx8jt9SUyD7vk4tv91XmbOnbeFa2ygBPXh7%2FWcif65vU6Rg2wdy8MvgCvWjmQUW0Rp8PJOCZ5kg0%2BKNN%2FLwxkp7PglmbqlwBMZjca3HlXaf3Ldck4hL5ls8tGPI0W7S5LBxD9HZRMwyAZHdG%2BhLYwNBI1Zcykdupx8prqvWqCq6Re%2FXXlh1V4&X-Amz-Signature=2ac9db52d77ddc8cd6f777c387ea0017574d2e9ed0fad405a07e009a8da4c7da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z26ZYRS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCaKEWkKAOCzSRMkZqu3xHx3wS3os9boufnNrGp07w6WgIgEISdcxhtcSfoTijrKv2f3g%2BypQznks9rAiu8gxhcsxIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnBAyyDW7njsuoZdSrcA61ufFQ8VsK4AM2%2Fsyg48%2Bm2EZK5BmT8ESbl6iU9W7jPDIQSaTIesDyxA7QglsKDC%2BcC633fxQ4DpHLx%2FCYpEiAaI5eQcanmk%2BFuItpfZGgN9pX4wHtKxFN23BCHYmO%2BOo9J7GNgmP1vP8gG8M0gDOwgM5ZNwMOU6sGqrofbf7wEl24BwQGx2HJVOjyPdOjyG7znyj3GLQHqCQpYVQyG%2FO%2BgTlpiE3y2u8%2FoS3nH97F%2F0OZiG%2BqyRB5idGSzvxUZvqTgHhoSnwZDXUF1P1UpWVAdQc%2Fhia7tgOG6DF6PL%2FT1FygVRILTOZJjYPRk%2FNHHKntiHFQ%2B6RSiD5VnQvwnuDNfH7LopYRu3pNUajAJtS4f2L7Tqjfm00HxhdRLTkZDqMiONXW1B7TBNxokJ%2FerixAff78efYDAhu1HX8lE4LMM%2FaVqzqMf1v%2FJRj5rVIYFXXJ%2FS67t%2FOOtbujBA4ZHEkgoIwxFL3Ui4%2BF7epa%2F4Gv0DYc2G3AQMpX4htSvqXrZaV2jl2mHaIDQD6NbQ36Z3XmeC1uOmGZ5BH%2BBj8xXn1m9FyaHpDIh%2B1TtCE5UT%2Bn9mPDMQ2iH7DDblkY1LctID3eltI7CUxJpVv42W5d0E7I5bdnOTK0%2FjAZ8WOnJMLnj%2Fb4GOqUBK%2B0D1Yi7zIKpYFXDy%2F4dXN8%2FDct9I3XnBnLmPUzkx8jt9SUyD7vk4tv91XmbOnbeFa2ygBPXh7%2FWcif65vU6Rg2wdy8MvgCvWjmQUW0Rp8PJOCZ5kg0%2BKNN%2FLwxkp7PglmbqlwBMZjca3HlXaf3Ldck4hL5ls8tGPI0W7S5LBxD9HZRMwyAZHdG%2BhLYwNBI1Zcykdupx8prqvWqCq6Re%2FXXlh1V4&X-Amz-Signature=9acb847d6a4585f86a1883c623e432026345e812a6d8b3f8c891d71ed17f7d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z26ZYRS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCaKEWkKAOCzSRMkZqu3xHx3wS3os9boufnNrGp07w6WgIgEISdcxhtcSfoTijrKv2f3g%2BypQznks9rAiu8gxhcsxIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnBAyyDW7njsuoZdSrcA61ufFQ8VsK4AM2%2Fsyg48%2Bm2EZK5BmT8ESbl6iU9W7jPDIQSaTIesDyxA7QglsKDC%2BcC633fxQ4DpHLx%2FCYpEiAaI5eQcanmk%2BFuItpfZGgN9pX4wHtKxFN23BCHYmO%2BOo9J7GNgmP1vP8gG8M0gDOwgM5ZNwMOU6sGqrofbf7wEl24BwQGx2HJVOjyPdOjyG7znyj3GLQHqCQpYVQyG%2FO%2BgTlpiE3y2u8%2FoS3nH97F%2F0OZiG%2BqyRB5idGSzvxUZvqTgHhoSnwZDXUF1P1UpWVAdQc%2Fhia7tgOG6DF6PL%2FT1FygVRILTOZJjYPRk%2FNHHKntiHFQ%2B6RSiD5VnQvwnuDNfH7LopYRu3pNUajAJtS4f2L7Tqjfm00HxhdRLTkZDqMiONXW1B7TBNxokJ%2FerixAff78efYDAhu1HX8lE4LMM%2FaVqzqMf1v%2FJRj5rVIYFXXJ%2FS67t%2FOOtbujBA4ZHEkgoIwxFL3Ui4%2BF7epa%2F4Gv0DYc2G3AQMpX4htSvqXrZaV2jl2mHaIDQD6NbQ36Z3XmeC1uOmGZ5BH%2BBj8xXn1m9FyaHpDIh%2B1TtCE5UT%2Bn9mPDMQ2iH7DDblkY1LctID3eltI7CUxJpVv42W5d0E7I5bdnOTK0%2FjAZ8WOnJMLnj%2Fb4GOqUBK%2B0D1Yi7zIKpYFXDy%2F4dXN8%2FDct9I3XnBnLmPUzkx8jt9SUyD7vk4tv91XmbOnbeFa2ygBPXh7%2FWcif65vU6Rg2wdy8MvgCvWjmQUW0Rp8PJOCZ5kg0%2BKNN%2FLwxkp7PglmbqlwBMZjca3HlXaf3Ldck4hL5ls8tGPI0W7S5LBxD9HZRMwyAZHdG%2BhLYwNBI1Zcykdupx8prqvWqCq6Re%2FXXlh1V4&X-Amz-Signature=03a5ac4248cfdfde289e259e0723df9493b710f8bec3d13727b6f1aead18d086&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z26ZYRS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCaKEWkKAOCzSRMkZqu3xHx3wS3os9boufnNrGp07w6WgIgEISdcxhtcSfoTijrKv2f3g%2BypQznks9rAiu8gxhcsxIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnBAyyDW7njsuoZdSrcA61ufFQ8VsK4AM2%2Fsyg48%2Bm2EZK5BmT8ESbl6iU9W7jPDIQSaTIesDyxA7QglsKDC%2BcC633fxQ4DpHLx%2FCYpEiAaI5eQcanmk%2BFuItpfZGgN9pX4wHtKxFN23BCHYmO%2BOo9J7GNgmP1vP8gG8M0gDOwgM5ZNwMOU6sGqrofbf7wEl24BwQGx2HJVOjyPdOjyG7znyj3GLQHqCQpYVQyG%2FO%2BgTlpiE3y2u8%2FoS3nH97F%2F0OZiG%2BqyRB5idGSzvxUZvqTgHhoSnwZDXUF1P1UpWVAdQc%2Fhia7tgOG6DF6PL%2FT1FygVRILTOZJjYPRk%2FNHHKntiHFQ%2B6RSiD5VnQvwnuDNfH7LopYRu3pNUajAJtS4f2L7Tqjfm00HxhdRLTkZDqMiONXW1B7TBNxokJ%2FerixAff78efYDAhu1HX8lE4LMM%2FaVqzqMf1v%2FJRj5rVIYFXXJ%2FS67t%2FOOtbujBA4ZHEkgoIwxFL3Ui4%2BF7epa%2F4Gv0DYc2G3AQMpX4htSvqXrZaV2jl2mHaIDQD6NbQ36Z3XmeC1uOmGZ5BH%2BBj8xXn1m9FyaHpDIh%2B1TtCE5UT%2Bn9mPDMQ2iH7DDblkY1LctID3eltI7CUxJpVv42W5d0E7I5bdnOTK0%2FjAZ8WOnJMLnj%2Fb4GOqUBK%2B0D1Yi7zIKpYFXDy%2F4dXN8%2FDct9I3XnBnLmPUzkx8jt9SUyD7vk4tv91XmbOnbeFa2ygBPXh7%2FWcif65vU6Rg2wdy8MvgCvWjmQUW0Rp8PJOCZ5kg0%2BKNN%2FLwxkp7PglmbqlwBMZjca3HlXaf3Ldck4hL5ls8tGPI0W7S5LBxD9HZRMwyAZHdG%2BhLYwNBI1Zcykdupx8prqvWqCq6Re%2FXXlh1V4&X-Amz-Signature=f58445ce342cc0eeb7b3d68e66852ab2ceaa9530920aa0be1747c7e025e04a61&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z26ZYRS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCaKEWkKAOCzSRMkZqu3xHx3wS3os9boufnNrGp07w6WgIgEISdcxhtcSfoTijrKv2f3g%2BypQznks9rAiu8gxhcsxIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnBAyyDW7njsuoZdSrcA61ufFQ8VsK4AM2%2Fsyg48%2Bm2EZK5BmT8ESbl6iU9W7jPDIQSaTIesDyxA7QglsKDC%2BcC633fxQ4DpHLx%2FCYpEiAaI5eQcanmk%2BFuItpfZGgN9pX4wHtKxFN23BCHYmO%2BOo9J7GNgmP1vP8gG8M0gDOwgM5ZNwMOU6sGqrofbf7wEl24BwQGx2HJVOjyPdOjyG7znyj3GLQHqCQpYVQyG%2FO%2BgTlpiE3y2u8%2FoS3nH97F%2F0OZiG%2BqyRB5idGSzvxUZvqTgHhoSnwZDXUF1P1UpWVAdQc%2Fhia7tgOG6DF6PL%2FT1FygVRILTOZJjYPRk%2FNHHKntiHFQ%2B6RSiD5VnQvwnuDNfH7LopYRu3pNUajAJtS4f2L7Tqjfm00HxhdRLTkZDqMiONXW1B7TBNxokJ%2FerixAff78efYDAhu1HX8lE4LMM%2FaVqzqMf1v%2FJRj5rVIYFXXJ%2FS67t%2FOOtbujBA4ZHEkgoIwxFL3Ui4%2BF7epa%2F4Gv0DYc2G3AQMpX4htSvqXrZaV2jl2mHaIDQD6NbQ36Z3XmeC1uOmGZ5BH%2BBj8xXn1m9FyaHpDIh%2B1TtCE5UT%2Bn9mPDMQ2iH7DDblkY1LctID3eltI7CUxJpVv42W5d0E7I5bdnOTK0%2FjAZ8WOnJMLnj%2Fb4GOqUBK%2B0D1Yi7zIKpYFXDy%2F4dXN8%2FDct9I3XnBnLmPUzkx8jt9SUyD7vk4tv91XmbOnbeFa2ygBPXh7%2FWcif65vU6Rg2wdy8MvgCvWjmQUW0Rp8PJOCZ5kg0%2BKNN%2FLwxkp7PglmbqlwBMZjca3HlXaf3Ldck4hL5ls8tGPI0W7S5LBxD9HZRMwyAZHdG%2BhLYwNBI1Zcykdupx8prqvWqCq6Re%2FXXlh1V4&X-Amz-Signature=085e2b9e4409788a9e8708a250dcb18776628a46bacd350475eb4e29dc54796e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z26ZYRS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCaKEWkKAOCzSRMkZqu3xHx3wS3os9boufnNrGp07w6WgIgEISdcxhtcSfoTijrKv2f3g%2BypQznks9rAiu8gxhcsxIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnBAyyDW7njsuoZdSrcA61ufFQ8VsK4AM2%2Fsyg48%2Bm2EZK5BmT8ESbl6iU9W7jPDIQSaTIesDyxA7QglsKDC%2BcC633fxQ4DpHLx%2FCYpEiAaI5eQcanmk%2BFuItpfZGgN9pX4wHtKxFN23BCHYmO%2BOo9J7GNgmP1vP8gG8M0gDOwgM5ZNwMOU6sGqrofbf7wEl24BwQGx2HJVOjyPdOjyG7znyj3GLQHqCQpYVQyG%2FO%2BgTlpiE3y2u8%2FoS3nH97F%2F0OZiG%2BqyRB5idGSzvxUZvqTgHhoSnwZDXUF1P1UpWVAdQc%2Fhia7tgOG6DF6PL%2FT1FygVRILTOZJjYPRk%2FNHHKntiHFQ%2B6RSiD5VnQvwnuDNfH7LopYRu3pNUajAJtS4f2L7Tqjfm00HxhdRLTkZDqMiONXW1B7TBNxokJ%2FerixAff78efYDAhu1HX8lE4LMM%2FaVqzqMf1v%2FJRj5rVIYFXXJ%2FS67t%2FOOtbujBA4ZHEkgoIwxFL3Ui4%2BF7epa%2F4Gv0DYc2G3AQMpX4htSvqXrZaV2jl2mHaIDQD6NbQ36Z3XmeC1uOmGZ5BH%2BBj8xXn1m9FyaHpDIh%2B1TtCE5UT%2Bn9mPDMQ2iH7DDblkY1LctID3eltI7CUxJpVv42W5d0E7I5bdnOTK0%2FjAZ8WOnJMLnj%2Fb4GOqUBK%2B0D1Yi7zIKpYFXDy%2F4dXN8%2FDct9I3XnBnLmPUzkx8jt9SUyD7vk4tv91XmbOnbeFa2ygBPXh7%2FWcif65vU6Rg2wdy8MvgCvWjmQUW0Rp8PJOCZ5kg0%2BKNN%2FLwxkp7PglmbqlwBMZjca3HlXaf3Ldck4hL5ls8tGPI0W7S5LBxD9HZRMwyAZHdG%2BhLYwNBI1Zcykdupx8prqvWqCq6Re%2FXXlh1V4&X-Amz-Signature=a0aaf10979793afb0cb54f5f8f93f9a6f4746d7928af7c28eddff8af950a4b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z26ZYRS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCaKEWkKAOCzSRMkZqu3xHx3wS3os9boufnNrGp07w6WgIgEISdcxhtcSfoTijrKv2f3g%2BypQznks9rAiu8gxhcsxIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnBAyyDW7njsuoZdSrcA61ufFQ8VsK4AM2%2Fsyg48%2Bm2EZK5BmT8ESbl6iU9W7jPDIQSaTIesDyxA7QglsKDC%2BcC633fxQ4DpHLx%2FCYpEiAaI5eQcanmk%2BFuItpfZGgN9pX4wHtKxFN23BCHYmO%2BOo9J7GNgmP1vP8gG8M0gDOwgM5ZNwMOU6sGqrofbf7wEl24BwQGx2HJVOjyPdOjyG7znyj3GLQHqCQpYVQyG%2FO%2BgTlpiE3y2u8%2FoS3nH97F%2F0OZiG%2BqyRB5idGSzvxUZvqTgHhoSnwZDXUF1P1UpWVAdQc%2Fhia7tgOG6DF6PL%2FT1FygVRILTOZJjYPRk%2FNHHKntiHFQ%2B6RSiD5VnQvwnuDNfH7LopYRu3pNUajAJtS4f2L7Tqjfm00HxhdRLTkZDqMiONXW1B7TBNxokJ%2FerixAff78efYDAhu1HX8lE4LMM%2FaVqzqMf1v%2FJRj5rVIYFXXJ%2FS67t%2FOOtbujBA4ZHEkgoIwxFL3Ui4%2BF7epa%2F4Gv0DYc2G3AQMpX4htSvqXrZaV2jl2mHaIDQD6NbQ36Z3XmeC1uOmGZ5BH%2BBj8xXn1m9FyaHpDIh%2B1TtCE5UT%2Bn9mPDMQ2iH7DDblkY1LctID3eltI7CUxJpVv42W5d0E7I5bdnOTK0%2FjAZ8WOnJMLnj%2Fb4GOqUBK%2B0D1Yi7zIKpYFXDy%2F4dXN8%2FDct9I3XnBnLmPUzkx8jt9SUyD7vk4tv91XmbOnbeFa2ygBPXh7%2FWcif65vU6Rg2wdy8MvgCvWjmQUW0Rp8PJOCZ5kg0%2BKNN%2FLwxkp7PglmbqlwBMZjca3HlXaf3Ldck4hL5ls8tGPI0W7S5LBxD9HZRMwyAZHdG%2BhLYwNBI1Zcykdupx8prqvWqCq6Re%2FXXlh1V4&X-Amz-Signature=019949d83af0d526e22a01c6317dd78354a2bde3bb2337facf2bb50d00657f00&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
