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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKNPNG6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1ZmQE3VL%2FTmyn3yo9wT9wDDhom5ChJfRE%2Br4k7jF8dwIhAKsYMUyH2WmvuLKU7JXNoHlsaz%2BnTnOh5mQpotz%2FWv5YKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3Ebhtp2yhpgt36goq3AMMf6LyOxEOfM5eJsOCnJhieSQUAZeEI%2FIu%2BZloOsLGivb5copN9VPjApaojDYOTSB9oBiOALKKjZyoU%2B9j2VPeADMoj71A%2FLR50wtnyLOhGma7J7ccisM37mwa1yy%2FwyPWInb%2FxFLyT1eUTKhU%2BXniWyoIX5SuLRzAbxW12SF8NmdgsQypRIJ0oc7GqPZN9btac6XB6VETDKDt4P7Ckh8lKgswS7k0fG%2BO0w7FkGYdc7ZyXJd6YM3tSWTr6oN1%2BdE8HIipuL1zwhUhIHwkVBcUWs4xOOa3vJ1gtFB2xoJCdslLQPJr1jImw7%2BY9P8%2BYjHjSyfQOKWjOVUyQRJPjOIWm79x0jrmekbPBM7j%2Fz0sn%2FXYj5U0lrahy%2B%2B1Pj%2Bt0k4eR3pa9ulA4ilrxF2WXiOHTDzpa6NQZYhwa5XymIcSNVlrpua6V9prehCQOAuTdIJIOS%2FNoPN%2FBsx3hPvzldRMOS8wW2sfDqNgbdI%2Bmpjl%2B0hPUpF3L%2BxkR3bvNrnEw%2BoJJQRFjUjpQFJq4Q5lnDiMiqIC%2F9XWUPd2gStpqBqlS5p61TBL%2BxHMFYiJIYIIVpeizTloxvVNaXEv8VBtvgQyTqLsOGNPrhLIo6ihDtzLf8ttPX8sc3lN6kt9kDDF8Yi%2FBjqkAYOg8RuzsB6jmCYXNRcu81tJ8tNA3qH1d3FOq37CXGC22lVhcApVmuGxo4eYASiT57jb8pj9CXn%2FwUXkSu8HVkmFN8eJ036ZiU9EEBvldWASdffZkkX6PdTy87sz71SpzPMV2HyVgF%2Feq9bBZPhDLMViDQQkDRkPsaj15XMa3ZQXF4qZD1xX2KOg46qbCDkNQlRbEC4ql1faJSSeWHR%2FX852OCrw&X-Amz-Signature=3576c36f55783231fba46ed5819024ce08896a8b48cdc810da78f3754b56dd00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKNPNG6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1ZmQE3VL%2FTmyn3yo9wT9wDDhom5ChJfRE%2Br4k7jF8dwIhAKsYMUyH2WmvuLKU7JXNoHlsaz%2BnTnOh5mQpotz%2FWv5YKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3Ebhtp2yhpgt36goq3AMMf6LyOxEOfM5eJsOCnJhieSQUAZeEI%2FIu%2BZloOsLGivb5copN9VPjApaojDYOTSB9oBiOALKKjZyoU%2B9j2VPeADMoj71A%2FLR50wtnyLOhGma7J7ccisM37mwa1yy%2FwyPWInb%2FxFLyT1eUTKhU%2BXniWyoIX5SuLRzAbxW12SF8NmdgsQypRIJ0oc7GqPZN9btac6XB6VETDKDt4P7Ckh8lKgswS7k0fG%2BO0w7FkGYdc7ZyXJd6YM3tSWTr6oN1%2BdE8HIipuL1zwhUhIHwkVBcUWs4xOOa3vJ1gtFB2xoJCdslLQPJr1jImw7%2BY9P8%2BYjHjSyfQOKWjOVUyQRJPjOIWm79x0jrmekbPBM7j%2Fz0sn%2FXYj5U0lrahy%2B%2B1Pj%2Bt0k4eR3pa9ulA4ilrxF2WXiOHTDzpa6NQZYhwa5XymIcSNVlrpua6V9prehCQOAuTdIJIOS%2FNoPN%2FBsx3hPvzldRMOS8wW2sfDqNgbdI%2Bmpjl%2B0hPUpF3L%2BxkR3bvNrnEw%2BoJJQRFjUjpQFJq4Q5lnDiMiqIC%2F9XWUPd2gStpqBqlS5p61TBL%2BxHMFYiJIYIIVpeizTloxvVNaXEv8VBtvgQyTqLsOGNPrhLIo6ihDtzLf8ttPX8sc3lN6kt9kDDF8Yi%2FBjqkAYOg8RuzsB6jmCYXNRcu81tJ8tNA3qH1d3FOq37CXGC22lVhcApVmuGxo4eYASiT57jb8pj9CXn%2FwUXkSu8HVkmFN8eJ036ZiU9EEBvldWASdffZkkX6PdTy87sz71SpzPMV2HyVgF%2Feq9bBZPhDLMViDQQkDRkPsaj15XMa3ZQXF4qZD1xX2KOg46qbCDkNQlRbEC4ql1faJSSeWHR%2FX852OCrw&X-Amz-Signature=e404e8955515118b4fa5d605fe3427c7d53524d0a29233538e4a83bc628885e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKNPNG6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1ZmQE3VL%2FTmyn3yo9wT9wDDhom5ChJfRE%2Br4k7jF8dwIhAKsYMUyH2WmvuLKU7JXNoHlsaz%2BnTnOh5mQpotz%2FWv5YKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3Ebhtp2yhpgt36goq3AMMf6LyOxEOfM5eJsOCnJhieSQUAZeEI%2FIu%2BZloOsLGivb5copN9VPjApaojDYOTSB9oBiOALKKjZyoU%2B9j2VPeADMoj71A%2FLR50wtnyLOhGma7J7ccisM37mwa1yy%2FwyPWInb%2FxFLyT1eUTKhU%2BXniWyoIX5SuLRzAbxW12SF8NmdgsQypRIJ0oc7GqPZN9btac6XB6VETDKDt4P7Ckh8lKgswS7k0fG%2BO0w7FkGYdc7ZyXJd6YM3tSWTr6oN1%2BdE8HIipuL1zwhUhIHwkVBcUWs4xOOa3vJ1gtFB2xoJCdslLQPJr1jImw7%2BY9P8%2BYjHjSyfQOKWjOVUyQRJPjOIWm79x0jrmekbPBM7j%2Fz0sn%2FXYj5U0lrahy%2B%2B1Pj%2Bt0k4eR3pa9ulA4ilrxF2WXiOHTDzpa6NQZYhwa5XymIcSNVlrpua6V9prehCQOAuTdIJIOS%2FNoPN%2FBsx3hPvzldRMOS8wW2sfDqNgbdI%2Bmpjl%2B0hPUpF3L%2BxkR3bvNrnEw%2BoJJQRFjUjpQFJq4Q5lnDiMiqIC%2F9XWUPd2gStpqBqlS5p61TBL%2BxHMFYiJIYIIVpeizTloxvVNaXEv8VBtvgQyTqLsOGNPrhLIo6ihDtzLf8ttPX8sc3lN6kt9kDDF8Yi%2FBjqkAYOg8RuzsB6jmCYXNRcu81tJ8tNA3qH1d3FOq37CXGC22lVhcApVmuGxo4eYASiT57jb8pj9CXn%2FwUXkSu8HVkmFN8eJ036ZiU9EEBvldWASdffZkkX6PdTy87sz71SpzPMV2HyVgF%2Feq9bBZPhDLMViDQQkDRkPsaj15XMa3ZQXF4qZD1xX2KOg46qbCDkNQlRbEC4ql1faJSSeWHR%2FX852OCrw&X-Amz-Signature=b288701520b34532ab194e68ed1d76e5ed9703ec4e6d1947dbafa720cfc44c69&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKNPNG6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1ZmQE3VL%2FTmyn3yo9wT9wDDhom5ChJfRE%2Br4k7jF8dwIhAKsYMUyH2WmvuLKU7JXNoHlsaz%2BnTnOh5mQpotz%2FWv5YKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3Ebhtp2yhpgt36goq3AMMf6LyOxEOfM5eJsOCnJhieSQUAZeEI%2FIu%2BZloOsLGivb5copN9VPjApaojDYOTSB9oBiOALKKjZyoU%2B9j2VPeADMoj71A%2FLR50wtnyLOhGma7J7ccisM37mwa1yy%2FwyPWInb%2FxFLyT1eUTKhU%2BXniWyoIX5SuLRzAbxW12SF8NmdgsQypRIJ0oc7GqPZN9btac6XB6VETDKDt4P7Ckh8lKgswS7k0fG%2BO0w7FkGYdc7ZyXJd6YM3tSWTr6oN1%2BdE8HIipuL1zwhUhIHwkVBcUWs4xOOa3vJ1gtFB2xoJCdslLQPJr1jImw7%2BY9P8%2BYjHjSyfQOKWjOVUyQRJPjOIWm79x0jrmekbPBM7j%2Fz0sn%2FXYj5U0lrahy%2B%2B1Pj%2Bt0k4eR3pa9ulA4ilrxF2WXiOHTDzpa6NQZYhwa5XymIcSNVlrpua6V9prehCQOAuTdIJIOS%2FNoPN%2FBsx3hPvzldRMOS8wW2sfDqNgbdI%2Bmpjl%2B0hPUpF3L%2BxkR3bvNrnEw%2BoJJQRFjUjpQFJq4Q5lnDiMiqIC%2F9XWUPd2gStpqBqlS5p61TBL%2BxHMFYiJIYIIVpeizTloxvVNaXEv8VBtvgQyTqLsOGNPrhLIo6ihDtzLf8ttPX8sc3lN6kt9kDDF8Yi%2FBjqkAYOg8RuzsB6jmCYXNRcu81tJ8tNA3qH1d3FOq37CXGC22lVhcApVmuGxo4eYASiT57jb8pj9CXn%2FwUXkSu8HVkmFN8eJ036ZiU9EEBvldWASdffZkkX6PdTy87sz71SpzPMV2HyVgF%2Feq9bBZPhDLMViDQQkDRkPsaj15XMa3ZQXF4qZD1xX2KOg46qbCDkNQlRbEC4ql1faJSSeWHR%2FX852OCrw&X-Amz-Signature=847785f1614672444c2b22713b5573f9c834225b30d4972290458dd1b1e4143e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKNPNG6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1ZmQE3VL%2FTmyn3yo9wT9wDDhom5ChJfRE%2Br4k7jF8dwIhAKsYMUyH2WmvuLKU7JXNoHlsaz%2BnTnOh5mQpotz%2FWv5YKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3Ebhtp2yhpgt36goq3AMMf6LyOxEOfM5eJsOCnJhieSQUAZeEI%2FIu%2BZloOsLGivb5copN9VPjApaojDYOTSB9oBiOALKKjZyoU%2B9j2VPeADMoj71A%2FLR50wtnyLOhGma7J7ccisM37mwa1yy%2FwyPWInb%2FxFLyT1eUTKhU%2BXniWyoIX5SuLRzAbxW12SF8NmdgsQypRIJ0oc7GqPZN9btac6XB6VETDKDt4P7Ckh8lKgswS7k0fG%2BO0w7FkGYdc7ZyXJd6YM3tSWTr6oN1%2BdE8HIipuL1zwhUhIHwkVBcUWs4xOOa3vJ1gtFB2xoJCdslLQPJr1jImw7%2BY9P8%2BYjHjSyfQOKWjOVUyQRJPjOIWm79x0jrmekbPBM7j%2Fz0sn%2FXYj5U0lrahy%2B%2B1Pj%2Bt0k4eR3pa9ulA4ilrxF2WXiOHTDzpa6NQZYhwa5XymIcSNVlrpua6V9prehCQOAuTdIJIOS%2FNoPN%2FBsx3hPvzldRMOS8wW2sfDqNgbdI%2Bmpjl%2B0hPUpF3L%2BxkR3bvNrnEw%2BoJJQRFjUjpQFJq4Q5lnDiMiqIC%2F9XWUPd2gStpqBqlS5p61TBL%2BxHMFYiJIYIIVpeizTloxvVNaXEv8VBtvgQyTqLsOGNPrhLIo6ihDtzLf8ttPX8sc3lN6kt9kDDF8Yi%2FBjqkAYOg8RuzsB6jmCYXNRcu81tJ8tNA3qH1d3FOq37CXGC22lVhcApVmuGxo4eYASiT57jb8pj9CXn%2FwUXkSu8HVkmFN8eJ036ZiU9EEBvldWASdffZkkX6PdTy87sz71SpzPMV2HyVgF%2Feq9bBZPhDLMViDQQkDRkPsaj15XMa3ZQXF4qZD1xX2KOg46qbCDkNQlRbEC4ql1faJSSeWHR%2FX852OCrw&X-Amz-Signature=f7f6a017c7357176fd760b42f1abe2c6e4326d11b215834cac725c18edab39ac&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKNPNG6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1ZmQE3VL%2FTmyn3yo9wT9wDDhom5ChJfRE%2Br4k7jF8dwIhAKsYMUyH2WmvuLKU7JXNoHlsaz%2BnTnOh5mQpotz%2FWv5YKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3Ebhtp2yhpgt36goq3AMMf6LyOxEOfM5eJsOCnJhieSQUAZeEI%2FIu%2BZloOsLGivb5copN9VPjApaojDYOTSB9oBiOALKKjZyoU%2B9j2VPeADMoj71A%2FLR50wtnyLOhGma7J7ccisM37mwa1yy%2FwyPWInb%2FxFLyT1eUTKhU%2BXniWyoIX5SuLRzAbxW12SF8NmdgsQypRIJ0oc7GqPZN9btac6XB6VETDKDt4P7Ckh8lKgswS7k0fG%2BO0w7FkGYdc7ZyXJd6YM3tSWTr6oN1%2BdE8HIipuL1zwhUhIHwkVBcUWs4xOOa3vJ1gtFB2xoJCdslLQPJr1jImw7%2BY9P8%2BYjHjSyfQOKWjOVUyQRJPjOIWm79x0jrmekbPBM7j%2Fz0sn%2FXYj5U0lrahy%2B%2B1Pj%2Bt0k4eR3pa9ulA4ilrxF2WXiOHTDzpa6NQZYhwa5XymIcSNVlrpua6V9prehCQOAuTdIJIOS%2FNoPN%2FBsx3hPvzldRMOS8wW2sfDqNgbdI%2Bmpjl%2B0hPUpF3L%2BxkR3bvNrnEw%2BoJJQRFjUjpQFJq4Q5lnDiMiqIC%2F9XWUPd2gStpqBqlS5p61TBL%2BxHMFYiJIYIIVpeizTloxvVNaXEv8VBtvgQyTqLsOGNPrhLIo6ihDtzLf8ttPX8sc3lN6kt9kDDF8Yi%2FBjqkAYOg8RuzsB6jmCYXNRcu81tJ8tNA3qH1d3FOq37CXGC22lVhcApVmuGxo4eYASiT57jb8pj9CXn%2FwUXkSu8HVkmFN8eJ036ZiU9EEBvldWASdffZkkX6PdTy87sz71SpzPMV2HyVgF%2Feq9bBZPhDLMViDQQkDRkPsaj15XMa3ZQXF4qZD1xX2KOg46qbCDkNQlRbEC4ql1faJSSeWHR%2FX852OCrw&X-Amz-Signature=8e822715c9becc9a98e70cbe3e7974973ca240abf1a4693500e49d641ea601a5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKNPNG6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1ZmQE3VL%2FTmyn3yo9wT9wDDhom5ChJfRE%2Br4k7jF8dwIhAKsYMUyH2WmvuLKU7JXNoHlsaz%2BnTnOh5mQpotz%2FWv5YKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3Ebhtp2yhpgt36goq3AMMf6LyOxEOfM5eJsOCnJhieSQUAZeEI%2FIu%2BZloOsLGivb5copN9VPjApaojDYOTSB9oBiOALKKjZyoU%2B9j2VPeADMoj71A%2FLR50wtnyLOhGma7J7ccisM37mwa1yy%2FwyPWInb%2FxFLyT1eUTKhU%2BXniWyoIX5SuLRzAbxW12SF8NmdgsQypRIJ0oc7GqPZN9btac6XB6VETDKDt4P7Ckh8lKgswS7k0fG%2BO0w7FkGYdc7ZyXJd6YM3tSWTr6oN1%2BdE8HIipuL1zwhUhIHwkVBcUWs4xOOa3vJ1gtFB2xoJCdslLQPJr1jImw7%2BY9P8%2BYjHjSyfQOKWjOVUyQRJPjOIWm79x0jrmekbPBM7j%2Fz0sn%2FXYj5U0lrahy%2B%2B1Pj%2Bt0k4eR3pa9ulA4ilrxF2WXiOHTDzpa6NQZYhwa5XymIcSNVlrpua6V9prehCQOAuTdIJIOS%2FNoPN%2FBsx3hPvzldRMOS8wW2sfDqNgbdI%2Bmpjl%2B0hPUpF3L%2BxkR3bvNrnEw%2BoJJQRFjUjpQFJq4Q5lnDiMiqIC%2F9XWUPd2gStpqBqlS5p61TBL%2BxHMFYiJIYIIVpeizTloxvVNaXEv8VBtvgQyTqLsOGNPrhLIo6ihDtzLf8ttPX8sc3lN6kt9kDDF8Yi%2FBjqkAYOg8RuzsB6jmCYXNRcu81tJ8tNA3qH1d3FOq37CXGC22lVhcApVmuGxo4eYASiT57jb8pj9CXn%2FwUXkSu8HVkmFN8eJ036ZiU9EEBvldWASdffZkkX6PdTy87sz71SpzPMV2HyVgF%2Feq9bBZPhDLMViDQQkDRkPsaj15XMa3ZQXF4qZD1xX2KOg46qbCDkNQlRbEC4ql1faJSSeWHR%2FX852OCrw&X-Amz-Signature=d5e584c11d4eeb315ff28ff07495c9a9cedaf16af11c3023328ec8ee6bff0917&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
