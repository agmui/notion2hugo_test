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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWQOCP3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYqpzObYamq1iRTlvFaCVhlq8g5o%2BoqPei6hf76T6xzAIhAM4hxmZ4BALD3j89XT2Tg20erkMVvl11DkZamJVO4ClMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycdwqRfLqbqgkg0QUq3AMJzqWz3XDSNxkeI1xnLDx0kwC0Bervc%2BoqzA7a1OQCDGEbSuXAxjlwZ%2FIsy1CcM10kseDzvDIa9xsIkM6vaghgn9sJkOadgDsad6MBHVHU6u1hiNPIrHOqtWw1bvqB2jjSbKeB2lKz4T66EydE6oRzHkCCtP5WD4VEFin0G8s4oeSj6nQx%2FSb%2BrloBanOSGs%2BUZ7a7tAs%2FnY1ySKmGJh65N4JywgyPwrvWIP9lQjImpDM80y0BznZrz2KR6zeuovXpDx5OJj6FzgVkqXJYd9CpDynYGUasj7zaXpM7X7AK7UYPiUr9K3BzhnuJ8TjubsNLov0nz1FC3fWFtNxrwSdk3EB3R%2Bgcy2OV2r7%2BXIE9nRCeZB7CHfmQCl92uWS%2Fh3687AgQXHsxf%2BuPFcMHw5WRxUrlPe%2Fdl7N25TkOgC9Ntp9CMlr0GHzwVpm%2FGkHYHJmDBS7PUqKfJb%2FWYPx1RvbVwVwIvicr6KhTCWjAmy3JZ4CQKfpjVBHOY8Uw2KlAZ70xAHk5mcXqh9hOPBfqnutVmL5pqIYyGmNKJCRijX0T6rVK8x1l3OCHjem2UmlHba5bwc5u3aE1pRxkhba7TF4nZPUBD6eyG0v%2Bf%2B7mQ9ZO3XjSTQEKUtW5YLZtBTCM9YDDBjqkAbTRRqUaq1Kr22BimO04iW0UuV4D7YsLOzj20MhzP14FsuP48dE71orDGLmBAGKRd%2FUyANs%2FP2Nzd1bCHu%2BMPJbpjiO14PGZjoz0qHvf8U2FaYWPKq%2BxsEaSDOqAOaavywjYlZW9yTyM4dRlpveZX%2B3VzTwqdI6oP4ImbUYEKeMyVlKixuiiU1GZ18uARh3Vly97jT0PwE%2FsuZcnWzZi5uH5fNjl&X-Amz-Signature=8c358867a002050101f7700ca1f3eebeca771086ff8b5aad575e518e66795769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWQOCP3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYqpzObYamq1iRTlvFaCVhlq8g5o%2BoqPei6hf76T6xzAIhAM4hxmZ4BALD3j89XT2Tg20erkMVvl11DkZamJVO4ClMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycdwqRfLqbqgkg0QUq3AMJzqWz3XDSNxkeI1xnLDx0kwC0Bervc%2BoqzA7a1OQCDGEbSuXAxjlwZ%2FIsy1CcM10kseDzvDIa9xsIkM6vaghgn9sJkOadgDsad6MBHVHU6u1hiNPIrHOqtWw1bvqB2jjSbKeB2lKz4T66EydE6oRzHkCCtP5WD4VEFin0G8s4oeSj6nQx%2FSb%2BrloBanOSGs%2BUZ7a7tAs%2FnY1ySKmGJh65N4JywgyPwrvWIP9lQjImpDM80y0BznZrz2KR6zeuovXpDx5OJj6FzgVkqXJYd9CpDynYGUasj7zaXpM7X7AK7UYPiUr9K3BzhnuJ8TjubsNLov0nz1FC3fWFtNxrwSdk3EB3R%2Bgcy2OV2r7%2BXIE9nRCeZB7CHfmQCl92uWS%2Fh3687AgQXHsxf%2BuPFcMHw5WRxUrlPe%2Fdl7N25TkOgC9Ntp9CMlr0GHzwVpm%2FGkHYHJmDBS7PUqKfJb%2FWYPx1RvbVwVwIvicr6KhTCWjAmy3JZ4CQKfpjVBHOY8Uw2KlAZ70xAHk5mcXqh9hOPBfqnutVmL5pqIYyGmNKJCRijX0T6rVK8x1l3OCHjem2UmlHba5bwc5u3aE1pRxkhba7TF4nZPUBD6eyG0v%2Bf%2B7mQ9ZO3XjSTQEKUtW5YLZtBTCM9YDDBjqkAbTRRqUaq1Kr22BimO04iW0UuV4D7YsLOzj20MhzP14FsuP48dE71orDGLmBAGKRd%2FUyANs%2FP2Nzd1bCHu%2BMPJbpjiO14PGZjoz0qHvf8U2FaYWPKq%2BxsEaSDOqAOaavywjYlZW9yTyM4dRlpveZX%2B3VzTwqdI6oP4ImbUYEKeMyVlKixuiiU1GZ18uARh3Vly97jT0PwE%2FsuZcnWzZi5uH5fNjl&X-Amz-Signature=79b0bccc688b4f38b3d758f300b1a11bd9e383603e828c96d353f216cdb8d29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWQOCP3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYqpzObYamq1iRTlvFaCVhlq8g5o%2BoqPei6hf76T6xzAIhAM4hxmZ4BALD3j89XT2Tg20erkMVvl11DkZamJVO4ClMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycdwqRfLqbqgkg0QUq3AMJzqWz3XDSNxkeI1xnLDx0kwC0Bervc%2BoqzA7a1OQCDGEbSuXAxjlwZ%2FIsy1CcM10kseDzvDIa9xsIkM6vaghgn9sJkOadgDsad6MBHVHU6u1hiNPIrHOqtWw1bvqB2jjSbKeB2lKz4T66EydE6oRzHkCCtP5WD4VEFin0G8s4oeSj6nQx%2FSb%2BrloBanOSGs%2BUZ7a7tAs%2FnY1ySKmGJh65N4JywgyPwrvWIP9lQjImpDM80y0BznZrz2KR6zeuovXpDx5OJj6FzgVkqXJYd9CpDynYGUasj7zaXpM7X7AK7UYPiUr9K3BzhnuJ8TjubsNLov0nz1FC3fWFtNxrwSdk3EB3R%2Bgcy2OV2r7%2BXIE9nRCeZB7CHfmQCl92uWS%2Fh3687AgQXHsxf%2BuPFcMHw5WRxUrlPe%2Fdl7N25TkOgC9Ntp9CMlr0GHzwVpm%2FGkHYHJmDBS7PUqKfJb%2FWYPx1RvbVwVwIvicr6KhTCWjAmy3JZ4CQKfpjVBHOY8Uw2KlAZ70xAHk5mcXqh9hOPBfqnutVmL5pqIYyGmNKJCRijX0T6rVK8x1l3OCHjem2UmlHba5bwc5u3aE1pRxkhba7TF4nZPUBD6eyG0v%2Bf%2B7mQ9ZO3XjSTQEKUtW5YLZtBTCM9YDDBjqkAbTRRqUaq1Kr22BimO04iW0UuV4D7YsLOzj20MhzP14FsuP48dE71orDGLmBAGKRd%2FUyANs%2FP2Nzd1bCHu%2BMPJbpjiO14PGZjoz0qHvf8U2FaYWPKq%2BxsEaSDOqAOaavywjYlZW9yTyM4dRlpveZX%2B3VzTwqdI6oP4ImbUYEKeMyVlKixuiiU1GZ18uARh3Vly97jT0PwE%2FsuZcnWzZi5uH5fNjl&X-Amz-Signature=b3cd52cca5683c1585464ad4aac8345caac1edbdcc39cc5abffd861421680068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWQOCP3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYqpzObYamq1iRTlvFaCVhlq8g5o%2BoqPei6hf76T6xzAIhAM4hxmZ4BALD3j89XT2Tg20erkMVvl11DkZamJVO4ClMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycdwqRfLqbqgkg0QUq3AMJzqWz3XDSNxkeI1xnLDx0kwC0Bervc%2BoqzA7a1OQCDGEbSuXAxjlwZ%2FIsy1CcM10kseDzvDIa9xsIkM6vaghgn9sJkOadgDsad6MBHVHU6u1hiNPIrHOqtWw1bvqB2jjSbKeB2lKz4T66EydE6oRzHkCCtP5WD4VEFin0G8s4oeSj6nQx%2FSb%2BrloBanOSGs%2BUZ7a7tAs%2FnY1ySKmGJh65N4JywgyPwrvWIP9lQjImpDM80y0BznZrz2KR6zeuovXpDx5OJj6FzgVkqXJYd9CpDynYGUasj7zaXpM7X7AK7UYPiUr9K3BzhnuJ8TjubsNLov0nz1FC3fWFtNxrwSdk3EB3R%2Bgcy2OV2r7%2BXIE9nRCeZB7CHfmQCl92uWS%2Fh3687AgQXHsxf%2BuPFcMHw5WRxUrlPe%2Fdl7N25TkOgC9Ntp9CMlr0GHzwVpm%2FGkHYHJmDBS7PUqKfJb%2FWYPx1RvbVwVwIvicr6KhTCWjAmy3JZ4CQKfpjVBHOY8Uw2KlAZ70xAHk5mcXqh9hOPBfqnutVmL5pqIYyGmNKJCRijX0T6rVK8x1l3OCHjem2UmlHba5bwc5u3aE1pRxkhba7TF4nZPUBD6eyG0v%2Bf%2B7mQ9ZO3XjSTQEKUtW5YLZtBTCM9YDDBjqkAbTRRqUaq1Kr22BimO04iW0UuV4D7YsLOzj20MhzP14FsuP48dE71orDGLmBAGKRd%2FUyANs%2FP2Nzd1bCHu%2BMPJbpjiO14PGZjoz0qHvf8U2FaYWPKq%2BxsEaSDOqAOaavywjYlZW9yTyM4dRlpveZX%2B3VzTwqdI6oP4ImbUYEKeMyVlKixuiiU1GZ18uARh3Vly97jT0PwE%2FsuZcnWzZi5uH5fNjl&X-Amz-Signature=26c7fd65a53d33b272bed3b052aa6841b1013174c74a7074c1329d6f601c6725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWQOCP3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYqpzObYamq1iRTlvFaCVhlq8g5o%2BoqPei6hf76T6xzAIhAM4hxmZ4BALD3j89XT2Tg20erkMVvl11DkZamJVO4ClMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycdwqRfLqbqgkg0QUq3AMJzqWz3XDSNxkeI1xnLDx0kwC0Bervc%2BoqzA7a1OQCDGEbSuXAxjlwZ%2FIsy1CcM10kseDzvDIa9xsIkM6vaghgn9sJkOadgDsad6MBHVHU6u1hiNPIrHOqtWw1bvqB2jjSbKeB2lKz4T66EydE6oRzHkCCtP5WD4VEFin0G8s4oeSj6nQx%2FSb%2BrloBanOSGs%2BUZ7a7tAs%2FnY1ySKmGJh65N4JywgyPwrvWIP9lQjImpDM80y0BznZrz2KR6zeuovXpDx5OJj6FzgVkqXJYd9CpDynYGUasj7zaXpM7X7AK7UYPiUr9K3BzhnuJ8TjubsNLov0nz1FC3fWFtNxrwSdk3EB3R%2Bgcy2OV2r7%2BXIE9nRCeZB7CHfmQCl92uWS%2Fh3687AgQXHsxf%2BuPFcMHw5WRxUrlPe%2Fdl7N25TkOgC9Ntp9CMlr0GHzwVpm%2FGkHYHJmDBS7PUqKfJb%2FWYPx1RvbVwVwIvicr6KhTCWjAmy3JZ4CQKfpjVBHOY8Uw2KlAZ70xAHk5mcXqh9hOPBfqnutVmL5pqIYyGmNKJCRijX0T6rVK8x1l3OCHjem2UmlHba5bwc5u3aE1pRxkhba7TF4nZPUBD6eyG0v%2Bf%2B7mQ9ZO3XjSTQEKUtW5YLZtBTCM9YDDBjqkAbTRRqUaq1Kr22BimO04iW0UuV4D7YsLOzj20MhzP14FsuP48dE71orDGLmBAGKRd%2FUyANs%2FP2Nzd1bCHu%2BMPJbpjiO14PGZjoz0qHvf8U2FaYWPKq%2BxsEaSDOqAOaavywjYlZW9yTyM4dRlpveZX%2B3VzTwqdI6oP4ImbUYEKeMyVlKixuiiU1GZ18uARh3Vly97jT0PwE%2FsuZcnWzZi5uH5fNjl&X-Amz-Signature=91fb708980fb59302025b1c5c6bb8cb6bb40a5ec9ecab5ffeaac0156c72972d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWQOCP3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYqpzObYamq1iRTlvFaCVhlq8g5o%2BoqPei6hf76T6xzAIhAM4hxmZ4BALD3j89XT2Tg20erkMVvl11DkZamJVO4ClMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycdwqRfLqbqgkg0QUq3AMJzqWz3XDSNxkeI1xnLDx0kwC0Bervc%2BoqzA7a1OQCDGEbSuXAxjlwZ%2FIsy1CcM10kseDzvDIa9xsIkM6vaghgn9sJkOadgDsad6MBHVHU6u1hiNPIrHOqtWw1bvqB2jjSbKeB2lKz4T66EydE6oRzHkCCtP5WD4VEFin0G8s4oeSj6nQx%2FSb%2BrloBanOSGs%2BUZ7a7tAs%2FnY1ySKmGJh65N4JywgyPwrvWIP9lQjImpDM80y0BznZrz2KR6zeuovXpDx5OJj6FzgVkqXJYd9CpDynYGUasj7zaXpM7X7AK7UYPiUr9K3BzhnuJ8TjubsNLov0nz1FC3fWFtNxrwSdk3EB3R%2Bgcy2OV2r7%2BXIE9nRCeZB7CHfmQCl92uWS%2Fh3687AgQXHsxf%2BuPFcMHw5WRxUrlPe%2Fdl7N25TkOgC9Ntp9CMlr0GHzwVpm%2FGkHYHJmDBS7PUqKfJb%2FWYPx1RvbVwVwIvicr6KhTCWjAmy3JZ4CQKfpjVBHOY8Uw2KlAZ70xAHk5mcXqh9hOPBfqnutVmL5pqIYyGmNKJCRijX0T6rVK8x1l3OCHjem2UmlHba5bwc5u3aE1pRxkhba7TF4nZPUBD6eyG0v%2Bf%2B7mQ9ZO3XjSTQEKUtW5YLZtBTCM9YDDBjqkAbTRRqUaq1Kr22BimO04iW0UuV4D7YsLOzj20MhzP14FsuP48dE71orDGLmBAGKRd%2FUyANs%2FP2Nzd1bCHu%2BMPJbpjiO14PGZjoz0qHvf8U2FaYWPKq%2BxsEaSDOqAOaavywjYlZW9yTyM4dRlpveZX%2B3VzTwqdI6oP4ImbUYEKeMyVlKixuiiU1GZ18uARh3Vly97jT0PwE%2FsuZcnWzZi5uH5fNjl&X-Amz-Signature=89b7ccdc18b4252113f57c3085f3aceec3cb09bdb0c7ae7a1b9b839e711dfd70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWQOCP3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYqpzObYamq1iRTlvFaCVhlq8g5o%2BoqPei6hf76T6xzAIhAM4hxmZ4BALD3j89XT2Tg20erkMVvl11DkZamJVO4ClMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycdwqRfLqbqgkg0QUq3AMJzqWz3XDSNxkeI1xnLDx0kwC0Bervc%2BoqzA7a1OQCDGEbSuXAxjlwZ%2FIsy1CcM10kseDzvDIa9xsIkM6vaghgn9sJkOadgDsad6MBHVHU6u1hiNPIrHOqtWw1bvqB2jjSbKeB2lKz4T66EydE6oRzHkCCtP5WD4VEFin0G8s4oeSj6nQx%2FSb%2BrloBanOSGs%2BUZ7a7tAs%2FnY1ySKmGJh65N4JywgyPwrvWIP9lQjImpDM80y0BznZrz2KR6zeuovXpDx5OJj6FzgVkqXJYd9CpDynYGUasj7zaXpM7X7AK7UYPiUr9K3BzhnuJ8TjubsNLov0nz1FC3fWFtNxrwSdk3EB3R%2Bgcy2OV2r7%2BXIE9nRCeZB7CHfmQCl92uWS%2Fh3687AgQXHsxf%2BuPFcMHw5WRxUrlPe%2Fdl7N25TkOgC9Ntp9CMlr0GHzwVpm%2FGkHYHJmDBS7PUqKfJb%2FWYPx1RvbVwVwIvicr6KhTCWjAmy3JZ4CQKfpjVBHOY8Uw2KlAZ70xAHk5mcXqh9hOPBfqnutVmL5pqIYyGmNKJCRijX0T6rVK8x1l3OCHjem2UmlHba5bwc5u3aE1pRxkhba7TF4nZPUBD6eyG0v%2Bf%2B7mQ9ZO3XjSTQEKUtW5YLZtBTCM9YDDBjqkAbTRRqUaq1Kr22BimO04iW0UuV4D7YsLOzj20MhzP14FsuP48dE71orDGLmBAGKRd%2FUyANs%2FP2Nzd1bCHu%2BMPJbpjiO14PGZjoz0qHvf8U2FaYWPKq%2BxsEaSDOqAOaavywjYlZW9yTyM4dRlpveZX%2B3VzTwqdI6oP4ImbUYEKeMyVlKixuiiU1GZ18uARh3Vly97jT0PwE%2FsuZcnWzZi5uH5fNjl&X-Amz-Signature=455dd1303588a0af1f734438fa00e78b3e1c8abaf848441b2a91e20867dc06b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
