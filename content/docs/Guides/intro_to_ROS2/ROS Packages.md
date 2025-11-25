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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJALRITE%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCchgSenfPQJZL6PAZ3TJrrLn%2Bzvt4bwwbzWTJfxj3AmwIhALvecMZqO4BlhdyPvnY8l7niNoiVyIJk9iuXQyQfflrLKv8DCGAQABoMNjM3NDIzMTgzODA1IgzCnMYbiZfU4%2BIFkX4q3AO1nw%2BgrlpJNg1BYhLKcuBkM9gT4Yxnb3X99O1w9WECbRY%2B0wk3Drx4utY55os6JHlkaSZdPbuiyJuuGEUk1xGzup2CEwJ7dnxQ%2BI37khdfniUL5gKWQhQao4DSGOu5gyyOIPLeNm%2FE0c6W%2Fd2OwmB5MtFCXj9PNkG572N5IjRqmAzGDSrzp9PunOUKAnbbaysgu95btRfqRBQWjwAkRml8B8WIGUu7R6ecSQoqg0VJ9gRwyjoxvFKx1Ogup%2BHP9XjH3M9iEydzo0EjJ9mjG%2BXHe80%2BEM5rlbPP188l2xxlZ%2FcwfrV3O6xTVIEszqmzLaDyRDm9FGsxtrM1E82jDz0eCC2XOWNbaVK4reYi9oR6EkU2ze%2BCeLSkWfHcAybSUG0vzz9ObgU0tCXOG7em7tJ2HcP%2B4D3UH545A3KXf3qafI1BMCh2Op%2BsMOGVhsacCTKyf5yzWPSSdQWBOeh5rEz50QaksPOMyQX7OuM5zvJ9ATlRWPx1LhGlu0onJtsvQLvIw9rUK%2BAPIL4w%2BBJN3cZl0fJ8w4g6L57neOOJSPw5SPWaDxkUimsPbMYnjFpBoYpibgVADlAdP%2F317%2Bwni5r3G%2FdE2OHvSGUZy1nhlPREfW8UbjnOl9%2Fpx3Lz1TCby5PJBjqkAUvQYfSDR2n6B9FUe%2FzvooHhE70aA5t84Uj6pFXShSFj%2BNLpSzkKp4YUeppReeTNLv5ozkFhe%2B278xzCyqwHh%2FgZcP4hELH1cpmyMeWSKRNdXXadCgCBYAMWwH4tWuJRtA7qHXbic%2BbDTvde9jmZsorUoa4QiqRW9QDpbzR2tLFh4wfkjC%2BfVSe0l95YZeBHUX%2BVZUGEOEcKXIrmvb14Bhu30hl6&X-Amz-Signature=6e29050cc1d1eee0f43c832f712e529c6626d2d20ef7f209e0827f838d39c4e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJALRITE%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCchgSenfPQJZL6PAZ3TJrrLn%2Bzvt4bwwbzWTJfxj3AmwIhALvecMZqO4BlhdyPvnY8l7niNoiVyIJk9iuXQyQfflrLKv8DCGAQABoMNjM3NDIzMTgzODA1IgzCnMYbiZfU4%2BIFkX4q3AO1nw%2BgrlpJNg1BYhLKcuBkM9gT4Yxnb3X99O1w9WECbRY%2B0wk3Drx4utY55os6JHlkaSZdPbuiyJuuGEUk1xGzup2CEwJ7dnxQ%2BI37khdfniUL5gKWQhQao4DSGOu5gyyOIPLeNm%2FE0c6W%2Fd2OwmB5MtFCXj9PNkG572N5IjRqmAzGDSrzp9PunOUKAnbbaysgu95btRfqRBQWjwAkRml8B8WIGUu7R6ecSQoqg0VJ9gRwyjoxvFKx1Ogup%2BHP9XjH3M9iEydzo0EjJ9mjG%2BXHe80%2BEM5rlbPP188l2xxlZ%2FcwfrV3O6xTVIEszqmzLaDyRDm9FGsxtrM1E82jDz0eCC2XOWNbaVK4reYi9oR6EkU2ze%2BCeLSkWfHcAybSUG0vzz9ObgU0tCXOG7em7tJ2HcP%2B4D3UH545A3KXf3qafI1BMCh2Op%2BsMOGVhsacCTKyf5yzWPSSdQWBOeh5rEz50QaksPOMyQX7OuM5zvJ9ATlRWPx1LhGlu0onJtsvQLvIw9rUK%2BAPIL4w%2BBJN3cZl0fJ8w4g6L57neOOJSPw5SPWaDxkUimsPbMYnjFpBoYpibgVADlAdP%2F317%2Bwni5r3G%2FdE2OHvSGUZy1nhlPREfW8UbjnOl9%2Fpx3Lz1TCby5PJBjqkAUvQYfSDR2n6B9FUe%2FzvooHhE70aA5t84Uj6pFXShSFj%2BNLpSzkKp4YUeppReeTNLv5ozkFhe%2B278xzCyqwHh%2FgZcP4hELH1cpmyMeWSKRNdXXadCgCBYAMWwH4tWuJRtA7qHXbic%2BbDTvde9jmZsorUoa4QiqRW9QDpbzR2tLFh4wfkjC%2BfVSe0l95YZeBHUX%2BVZUGEOEcKXIrmvb14Bhu30hl6&X-Amz-Signature=d0a48a383aaa3beccfa0ef3def669bce46da29ede9f95c56272d6e5300759af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJALRITE%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCchgSenfPQJZL6PAZ3TJrrLn%2Bzvt4bwwbzWTJfxj3AmwIhALvecMZqO4BlhdyPvnY8l7niNoiVyIJk9iuXQyQfflrLKv8DCGAQABoMNjM3NDIzMTgzODA1IgzCnMYbiZfU4%2BIFkX4q3AO1nw%2BgrlpJNg1BYhLKcuBkM9gT4Yxnb3X99O1w9WECbRY%2B0wk3Drx4utY55os6JHlkaSZdPbuiyJuuGEUk1xGzup2CEwJ7dnxQ%2BI37khdfniUL5gKWQhQao4DSGOu5gyyOIPLeNm%2FE0c6W%2Fd2OwmB5MtFCXj9PNkG572N5IjRqmAzGDSrzp9PunOUKAnbbaysgu95btRfqRBQWjwAkRml8B8WIGUu7R6ecSQoqg0VJ9gRwyjoxvFKx1Ogup%2BHP9XjH3M9iEydzo0EjJ9mjG%2BXHe80%2BEM5rlbPP188l2xxlZ%2FcwfrV3O6xTVIEszqmzLaDyRDm9FGsxtrM1E82jDz0eCC2XOWNbaVK4reYi9oR6EkU2ze%2BCeLSkWfHcAybSUG0vzz9ObgU0tCXOG7em7tJ2HcP%2B4D3UH545A3KXf3qafI1BMCh2Op%2BsMOGVhsacCTKyf5yzWPSSdQWBOeh5rEz50QaksPOMyQX7OuM5zvJ9ATlRWPx1LhGlu0onJtsvQLvIw9rUK%2BAPIL4w%2BBJN3cZl0fJ8w4g6L57neOOJSPw5SPWaDxkUimsPbMYnjFpBoYpibgVADlAdP%2F317%2Bwni5r3G%2FdE2OHvSGUZy1nhlPREfW8UbjnOl9%2Fpx3Lz1TCby5PJBjqkAUvQYfSDR2n6B9FUe%2FzvooHhE70aA5t84Uj6pFXShSFj%2BNLpSzkKp4YUeppReeTNLv5ozkFhe%2B278xzCyqwHh%2FgZcP4hELH1cpmyMeWSKRNdXXadCgCBYAMWwH4tWuJRtA7qHXbic%2BbDTvde9jmZsorUoa4QiqRW9QDpbzR2tLFh4wfkjC%2BfVSe0l95YZeBHUX%2BVZUGEOEcKXIrmvb14Bhu30hl6&X-Amz-Signature=e11b45cc5aa98b3c790e5453e00a600e9f1de710955d344d7bd2277fa2aa15c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJALRITE%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCchgSenfPQJZL6PAZ3TJrrLn%2Bzvt4bwwbzWTJfxj3AmwIhALvecMZqO4BlhdyPvnY8l7niNoiVyIJk9iuXQyQfflrLKv8DCGAQABoMNjM3NDIzMTgzODA1IgzCnMYbiZfU4%2BIFkX4q3AO1nw%2BgrlpJNg1BYhLKcuBkM9gT4Yxnb3X99O1w9WECbRY%2B0wk3Drx4utY55os6JHlkaSZdPbuiyJuuGEUk1xGzup2CEwJ7dnxQ%2BI37khdfniUL5gKWQhQao4DSGOu5gyyOIPLeNm%2FE0c6W%2Fd2OwmB5MtFCXj9PNkG572N5IjRqmAzGDSrzp9PunOUKAnbbaysgu95btRfqRBQWjwAkRml8B8WIGUu7R6ecSQoqg0VJ9gRwyjoxvFKx1Ogup%2BHP9XjH3M9iEydzo0EjJ9mjG%2BXHe80%2BEM5rlbPP188l2xxlZ%2FcwfrV3O6xTVIEszqmzLaDyRDm9FGsxtrM1E82jDz0eCC2XOWNbaVK4reYi9oR6EkU2ze%2BCeLSkWfHcAybSUG0vzz9ObgU0tCXOG7em7tJ2HcP%2B4D3UH545A3KXf3qafI1BMCh2Op%2BsMOGVhsacCTKyf5yzWPSSdQWBOeh5rEz50QaksPOMyQX7OuM5zvJ9ATlRWPx1LhGlu0onJtsvQLvIw9rUK%2BAPIL4w%2BBJN3cZl0fJ8w4g6L57neOOJSPw5SPWaDxkUimsPbMYnjFpBoYpibgVADlAdP%2F317%2Bwni5r3G%2FdE2OHvSGUZy1nhlPREfW8UbjnOl9%2Fpx3Lz1TCby5PJBjqkAUvQYfSDR2n6B9FUe%2FzvooHhE70aA5t84Uj6pFXShSFj%2BNLpSzkKp4YUeppReeTNLv5ozkFhe%2B278xzCyqwHh%2FgZcP4hELH1cpmyMeWSKRNdXXadCgCBYAMWwH4tWuJRtA7qHXbic%2BbDTvde9jmZsorUoa4QiqRW9QDpbzR2tLFh4wfkjC%2BfVSe0l95YZeBHUX%2BVZUGEOEcKXIrmvb14Bhu30hl6&X-Amz-Signature=220ac90b25cebc18eedee3f70bab4a98651dcd462d86a3e6a50a7214e1ea6d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJALRITE%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCchgSenfPQJZL6PAZ3TJrrLn%2Bzvt4bwwbzWTJfxj3AmwIhALvecMZqO4BlhdyPvnY8l7niNoiVyIJk9iuXQyQfflrLKv8DCGAQABoMNjM3NDIzMTgzODA1IgzCnMYbiZfU4%2BIFkX4q3AO1nw%2BgrlpJNg1BYhLKcuBkM9gT4Yxnb3X99O1w9WECbRY%2B0wk3Drx4utY55os6JHlkaSZdPbuiyJuuGEUk1xGzup2CEwJ7dnxQ%2BI37khdfniUL5gKWQhQao4DSGOu5gyyOIPLeNm%2FE0c6W%2Fd2OwmB5MtFCXj9PNkG572N5IjRqmAzGDSrzp9PunOUKAnbbaysgu95btRfqRBQWjwAkRml8B8WIGUu7R6ecSQoqg0VJ9gRwyjoxvFKx1Ogup%2BHP9XjH3M9iEydzo0EjJ9mjG%2BXHe80%2BEM5rlbPP188l2xxlZ%2FcwfrV3O6xTVIEszqmzLaDyRDm9FGsxtrM1E82jDz0eCC2XOWNbaVK4reYi9oR6EkU2ze%2BCeLSkWfHcAybSUG0vzz9ObgU0tCXOG7em7tJ2HcP%2B4D3UH545A3KXf3qafI1BMCh2Op%2BsMOGVhsacCTKyf5yzWPSSdQWBOeh5rEz50QaksPOMyQX7OuM5zvJ9ATlRWPx1LhGlu0onJtsvQLvIw9rUK%2BAPIL4w%2BBJN3cZl0fJ8w4g6L57neOOJSPw5SPWaDxkUimsPbMYnjFpBoYpibgVADlAdP%2F317%2Bwni5r3G%2FdE2OHvSGUZy1nhlPREfW8UbjnOl9%2Fpx3Lz1TCby5PJBjqkAUvQYfSDR2n6B9FUe%2FzvooHhE70aA5t84Uj6pFXShSFj%2BNLpSzkKp4YUeppReeTNLv5ozkFhe%2B278xzCyqwHh%2FgZcP4hELH1cpmyMeWSKRNdXXadCgCBYAMWwH4tWuJRtA7qHXbic%2BbDTvde9jmZsorUoa4QiqRW9QDpbzR2tLFh4wfkjC%2BfVSe0l95YZeBHUX%2BVZUGEOEcKXIrmvb14Bhu30hl6&X-Amz-Signature=36137efbf8fdca9389affb7188ddaf695410a6349d410438b0fb0c8feb055ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJALRITE%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCchgSenfPQJZL6PAZ3TJrrLn%2Bzvt4bwwbzWTJfxj3AmwIhALvecMZqO4BlhdyPvnY8l7niNoiVyIJk9iuXQyQfflrLKv8DCGAQABoMNjM3NDIzMTgzODA1IgzCnMYbiZfU4%2BIFkX4q3AO1nw%2BgrlpJNg1BYhLKcuBkM9gT4Yxnb3X99O1w9WECbRY%2B0wk3Drx4utY55os6JHlkaSZdPbuiyJuuGEUk1xGzup2CEwJ7dnxQ%2BI37khdfniUL5gKWQhQao4DSGOu5gyyOIPLeNm%2FE0c6W%2Fd2OwmB5MtFCXj9PNkG572N5IjRqmAzGDSrzp9PunOUKAnbbaysgu95btRfqRBQWjwAkRml8B8WIGUu7R6ecSQoqg0VJ9gRwyjoxvFKx1Ogup%2BHP9XjH3M9iEydzo0EjJ9mjG%2BXHe80%2BEM5rlbPP188l2xxlZ%2FcwfrV3O6xTVIEszqmzLaDyRDm9FGsxtrM1E82jDz0eCC2XOWNbaVK4reYi9oR6EkU2ze%2BCeLSkWfHcAybSUG0vzz9ObgU0tCXOG7em7tJ2HcP%2B4D3UH545A3KXf3qafI1BMCh2Op%2BsMOGVhsacCTKyf5yzWPSSdQWBOeh5rEz50QaksPOMyQX7OuM5zvJ9ATlRWPx1LhGlu0onJtsvQLvIw9rUK%2BAPIL4w%2BBJN3cZl0fJ8w4g6L57neOOJSPw5SPWaDxkUimsPbMYnjFpBoYpibgVADlAdP%2F317%2Bwni5r3G%2FdE2OHvSGUZy1nhlPREfW8UbjnOl9%2Fpx3Lz1TCby5PJBjqkAUvQYfSDR2n6B9FUe%2FzvooHhE70aA5t84Uj6pFXShSFj%2BNLpSzkKp4YUeppReeTNLv5ozkFhe%2B278xzCyqwHh%2FgZcP4hELH1cpmyMeWSKRNdXXadCgCBYAMWwH4tWuJRtA7qHXbic%2BbDTvde9jmZsorUoa4QiqRW9QDpbzR2tLFh4wfkjC%2BfVSe0l95YZeBHUX%2BVZUGEOEcKXIrmvb14Bhu30hl6&X-Amz-Signature=1355984cc9dfb8dbb0f7ba720a41521098f2a19020d5fdaaa95e455022a9e7d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJALRITE%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCchgSenfPQJZL6PAZ3TJrrLn%2Bzvt4bwwbzWTJfxj3AmwIhALvecMZqO4BlhdyPvnY8l7niNoiVyIJk9iuXQyQfflrLKv8DCGAQABoMNjM3NDIzMTgzODA1IgzCnMYbiZfU4%2BIFkX4q3AO1nw%2BgrlpJNg1BYhLKcuBkM9gT4Yxnb3X99O1w9WECbRY%2B0wk3Drx4utY55os6JHlkaSZdPbuiyJuuGEUk1xGzup2CEwJ7dnxQ%2BI37khdfniUL5gKWQhQao4DSGOu5gyyOIPLeNm%2FE0c6W%2Fd2OwmB5MtFCXj9PNkG572N5IjRqmAzGDSrzp9PunOUKAnbbaysgu95btRfqRBQWjwAkRml8B8WIGUu7R6ecSQoqg0VJ9gRwyjoxvFKx1Ogup%2BHP9XjH3M9iEydzo0EjJ9mjG%2BXHe80%2BEM5rlbPP188l2xxlZ%2FcwfrV3O6xTVIEszqmzLaDyRDm9FGsxtrM1E82jDz0eCC2XOWNbaVK4reYi9oR6EkU2ze%2BCeLSkWfHcAybSUG0vzz9ObgU0tCXOG7em7tJ2HcP%2B4D3UH545A3KXf3qafI1BMCh2Op%2BsMOGVhsacCTKyf5yzWPSSdQWBOeh5rEz50QaksPOMyQX7OuM5zvJ9ATlRWPx1LhGlu0onJtsvQLvIw9rUK%2BAPIL4w%2BBJN3cZl0fJ8w4g6L57neOOJSPw5SPWaDxkUimsPbMYnjFpBoYpibgVADlAdP%2F317%2Bwni5r3G%2FdE2OHvSGUZy1nhlPREfW8UbjnOl9%2Fpx3Lz1TCby5PJBjqkAUvQYfSDR2n6B9FUe%2FzvooHhE70aA5t84Uj6pFXShSFj%2BNLpSzkKp4YUeppReeTNLv5ozkFhe%2B278xzCyqwHh%2FgZcP4hELH1cpmyMeWSKRNdXXadCgCBYAMWwH4tWuJRtA7qHXbic%2BbDTvde9jmZsorUoa4QiqRW9QDpbzR2tLFh4wfkjC%2BfVSe0l95YZeBHUX%2BVZUGEOEcKXIrmvb14Bhu30hl6&X-Amz-Signature=96c82cb68282809fedca0aac3c71c04fce19584feef46e072108294073768208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
