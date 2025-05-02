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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYY7YWQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD0ZSDZiU3fI%2F6lT4RvjldUB8W8nVkj72JzJwKgcNCvnwIgUOPqR0REUtJ4i5ui9oEEQ6ZnFEqu33uWqjcrjY55qx4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7GFqsQrhy4Q6lwuyrcA6bveMujr67LW9s6vrlystNA0UqGWj2PYEww0JfZJsu7srECdOiecnKKp1yaS%2B0lebujsnYP8pNy0bNqcTtHv87wlNaO6TDU%2BpcGWUotAR4kW%2BrT5cDjQTggnHRRiNADcCUpd8pkazoTw0BdZPseVb6tDRC6%2FK1riDDhPzehvsj9IJxSVDDmNO0rbXIK4R%2BWbWl%2BLesTmgCKsoZ5Jdmzy0zVVbKS7J4f2QgDfFSHM%2FoIbOD%2FPRiVdKRAgZpsJRxd%2FuD%2F0rbxRpDyRyWAys5Yj01%2BYYjdhsCFrn0lw%2B74RXUZLsNLQsaqpY9BQMZB7DF5XHoMM2Be3yO1AiUufbtPIm6IEFqqNVPX2YumWZ%2FECEoViph53m5zwU2NiNvNjfhtvnk1M4qWfCo7hb%2FTgLSa2%2B3zu5OKb7vWMCmAMDzfm0V6tHnSa5Fxv4GnWlqfLAym4GLQ8slwi88QxLZcG8Z9tCc5Cv7KhyNGmVQXyolBBwJTP0XbwNM4dDm42jn%2FvOaTFXuhEcf3bzlHySED1Ml6oUDJRgp3TaHPUxVC9ukgRcHEV083lAwd8pC27vkuf9wM92YkyojQQ1v9mQhGm96wn%2BkU0rKB9Dg68oMQ%2F%2FL9glcp9dM9HuMesDdpONcIMPDk08AGOqUBLHknB9zdkMpujFKMucUtPnDuwCXKfLly7iOsNodBT27xSQlN7biSAg3hb9Vg6wGhV2%2BwR21bM9WbDtq60oSEjzwsyZ%2BT%2BGX%2Bf0M6NiNvT%2BVGv%2Fu0KgHxbIOtictJbDoleZiLskT%2Bwa6CxNbj%2BIJfVkz6FT68vpcVhUQt3duZhesFkWbZ0hGXBlMbjT1SkOHvuay9ub5VyBnO7FrGfzmqPlQtnvwL&X-Amz-Signature=3147bf0dbef5e718432a5a8ef4cbf6503e5b21ee25441a03f7cef2305e853e51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYY7YWQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD0ZSDZiU3fI%2F6lT4RvjldUB8W8nVkj72JzJwKgcNCvnwIgUOPqR0REUtJ4i5ui9oEEQ6ZnFEqu33uWqjcrjY55qx4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7GFqsQrhy4Q6lwuyrcA6bveMujr67LW9s6vrlystNA0UqGWj2PYEww0JfZJsu7srECdOiecnKKp1yaS%2B0lebujsnYP8pNy0bNqcTtHv87wlNaO6TDU%2BpcGWUotAR4kW%2BrT5cDjQTggnHRRiNADcCUpd8pkazoTw0BdZPseVb6tDRC6%2FK1riDDhPzehvsj9IJxSVDDmNO0rbXIK4R%2BWbWl%2BLesTmgCKsoZ5Jdmzy0zVVbKS7J4f2QgDfFSHM%2FoIbOD%2FPRiVdKRAgZpsJRxd%2FuD%2F0rbxRpDyRyWAys5Yj01%2BYYjdhsCFrn0lw%2B74RXUZLsNLQsaqpY9BQMZB7DF5XHoMM2Be3yO1AiUufbtPIm6IEFqqNVPX2YumWZ%2FECEoViph53m5zwU2NiNvNjfhtvnk1M4qWfCo7hb%2FTgLSa2%2B3zu5OKb7vWMCmAMDzfm0V6tHnSa5Fxv4GnWlqfLAym4GLQ8slwi88QxLZcG8Z9tCc5Cv7KhyNGmVQXyolBBwJTP0XbwNM4dDm42jn%2FvOaTFXuhEcf3bzlHySED1Ml6oUDJRgp3TaHPUxVC9ukgRcHEV083lAwd8pC27vkuf9wM92YkyojQQ1v9mQhGm96wn%2BkU0rKB9Dg68oMQ%2F%2FL9glcp9dM9HuMesDdpONcIMPDk08AGOqUBLHknB9zdkMpujFKMucUtPnDuwCXKfLly7iOsNodBT27xSQlN7biSAg3hb9Vg6wGhV2%2BwR21bM9WbDtq60oSEjzwsyZ%2BT%2BGX%2Bf0M6NiNvT%2BVGv%2Fu0KgHxbIOtictJbDoleZiLskT%2Bwa6CxNbj%2BIJfVkz6FT68vpcVhUQt3duZhesFkWbZ0hGXBlMbjT1SkOHvuay9ub5VyBnO7FrGfzmqPlQtnvwL&X-Amz-Signature=75718800e4c1886659ed60bca9f71ef55dfa78ce5c89fea64b48de5e02c03a22&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYY7YWQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD0ZSDZiU3fI%2F6lT4RvjldUB8W8nVkj72JzJwKgcNCvnwIgUOPqR0REUtJ4i5ui9oEEQ6ZnFEqu33uWqjcrjY55qx4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7GFqsQrhy4Q6lwuyrcA6bveMujr67LW9s6vrlystNA0UqGWj2PYEww0JfZJsu7srECdOiecnKKp1yaS%2B0lebujsnYP8pNy0bNqcTtHv87wlNaO6TDU%2BpcGWUotAR4kW%2BrT5cDjQTggnHRRiNADcCUpd8pkazoTw0BdZPseVb6tDRC6%2FK1riDDhPzehvsj9IJxSVDDmNO0rbXIK4R%2BWbWl%2BLesTmgCKsoZ5Jdmzy0zVVbKS7J4f2QgDfFSHM%2FoIbOD%2FPRiVdKRAgZpsJRxd%2FuD%2F0rbxRpDyRyWAys5Yj01%2BYYjdhsCFrn0lw%2B74RXUZLsNLQsaqpY9BQMZB7DF5XHoMM2Be3yO1AiUufbtPIm6IEFqqNVPX2YumWZ%2FECEoViph53m5zwU2NiNvNjfhtvnk1M4qWfCo7hb%2FTgLSa2%2B3zu5OKb7vWMCmAMDzfm0V6tHnSa5Fxv4GnWlqfLAym4GLQ8slwi88QxLZcG8Z9tCc5Cv7KhyNGmVQXyolBBwJTP0XbwNM4dDm42jn%2FvOaTFXuhEcf3bzlHySED1Ml6oUDJRgp3TaHPUxVC9ukgRcHEV083lAwd8pC27vkuf9wM92YkyojQQ1v9mQhGm96wn%2BkU0rKB9Dg68oMQ%2F%2FL9glcp9dM9HuMesDdpONcIMPDk08AGOqUBLHknB9zdkMpujFKMucUtPnDuwCXKfLly7iOsNodBT27xSQlN7biSAg3hb9Vg6wGhV2%2BwR21bM9WbDtq60oSEjzwsyZ%2BT%2BGX%2Bf0M6NiNvT%2BVGv%2Fu0KgHxbIOtictJbDoleZiLskT%2Bwa6CxNbj%2BIJfVkz6FT68vpcVhUQt3duZhesFkWbZ0hGXBlMbjT1SkOHvuay9ub5VyBnO7FrGfzmqPlQtnvwL&X-Amz-Signature=c4e5a6e2a4e0f36c8b60b03830d31c38e8e1da824be2969e783220fe091d12b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYY7YWQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD0ZSDZiU3fI%2F6lT4RvjldUB8W8nVkj72JzJwKgcNCvnwIgUOPqR0REUtJ4i5ui9oEEQ6ZnFEqu33uWqjcrjY55qx4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7GFqsQrhy4Q6lwuyrcA6bveMujr67LW9s6vrlystNA0UqGWj2PYEww0JfZJsu7srECdOiecnKKp1yaS%2B0lebujsnYP8pNy0bNqcTtHv87wlNaO6TDU%2BpcGWUotAR4kW%2BrT5cDjQTggnHRRiNADcCUpd8pkazoTw0BdZPseVb6tDRC6%2FK1riDDhPzehvsj9IJxSVDDmNO0rbXIK4R%2BWbWl%2BLesTmgCKsoZ5Jdmzy0zVVbKS7J4f2QgDfFSHM%2FoIbOD%2FPRiVdKRAgZpsJRxd%2FuD%2F0rbxRpDyRyWAys5Yj01%2BYYjdhsCFrn0lw%2B74RXUZLsNLQsaqpY9BQMZB7DF5XHoMM2Be3yO1AiUufbtPIm6IEFqqNVPX2YumWZ%2FECEoViph53m5zwU2NiNvNjfhtvnk1M4qWfCo7hb%2FTgLSa2%2B3zu5OKb7vWMCmAMDzfm0V6tHnSa5Fxv4GnWlqfLAym4GLQ8slwi88QxLZcG8Z9tCc5Cv7KhyNGmVQXyolBBwJTP0XbwNM4dDm42jn%2FvOaTFXuhEcf3bzlHySED1Ml6oUDJRgp3TaHPUxVC9ukgRcHEV083lAwd8pC27vkuf9wM92YkyojQQ1v9mQhGm96wn%2BkU0rKB9Dg68oMQ%2F%2FL9glcp9dM9HuMesDdpONcIMPDk08AGOqUBLHknB9zdkMpujFKMucUtPnDuwCXKfLly7iOsNodBT27xSQlN7biSAg3hb9Vg6wGhV2%2BwR21bM9WbDtq60oSEjzwsyZ%2BT%2BGX%2Bf0M6NiNvT%2BVGv%2Fu0KgHxbIOtictJbDoleZiLskT%2Bwa6CxNbj%2BIJfVkz6FT68vpcVhUQt3duZhesFkWbZ0hGXBlMbjT1SkOHvuay9ub5VyBnO7FrGfzmqPlQtnvwL&X-Amz-Signature=9fae9ce267ac25a5f73d86e22875a15bf888675308ae5e3659639dcde0416b54&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYY7YWQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD0ZSDZiU3fI%2F6lT4RvjldUB8W8nVkj72JzJwKgcNCvnwIgUOPqR0REUtJ4i5ui9oEEQ6ZnFEqu33uWqjcrjY55qx4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7GFqsQrhy4Q6lwuyrcA6bveMujr67LW9s6vrlystNA0UqGWj2PYEww0JfZJsu7srECdOiecnKKp1yaS%2B0lebujsnYP8pNy0bNqcTtHv87wlNaO6TDU%2BpcGWUotAR4kW%2BrT5cDjQTggnHRRiNADcCUpd8pkazoTw0BdZPseVb6tDRC6%2FK1riDDhPzehvsj9IJxSVDDmNO0rbXIK4R%2BWbWl%2BLesTmgCKsoZ5Jdmzy0zVVbKS7J4f2QgDfFSHM%2FoIbOD%2FPRiVdKRAgZpsJRxd%2FuD%2F0rbxRpDyRyWAys5Yj01%2BYYjdhsCFrn0lw%2B74RXUZLsNLQsaqpY9BQMZB7DF5XHoMM2Be3yO1AiUufbtPIm6IEFqqNVPX2YumWZ%2FECEoViph53m5zwU2NiNvNjfhtvnk1M4qWfCo7hb%2FTgLSa2%2B3zu5OKb7vWMCmAMDzfm0V6tHnSa5Fxv4GnWlqfLAym4GLQ8slwi88QxLZcG8Z9tCc5Cv7KhyNGmVQXyolBBwJTP0XbwNM4dDm42jn%2FvOaTFXuhEcf3bzlHySED1Ml6oUDJRgp3TaHPUxVC9ukgRcHEV083lAwd8pC27vkuf9wM92YkyojQQ1v9mQhGm96wn%2BkU0rKB9Dg68oMQ%2F%2FL9glcp9dM9HuMesDdpONcIMPDk08AGOqUBLHknB9zdkMpujFKMucUtPnDuwCXKfLly7iOsNodBT27xSQlN7biSAg3hb9Vg6wGhV2%2BwR21bM9WbDtq60oSEjzwsyZ%2BT%2BGX%2Bf0M6NiNvT%2BVGv%2Fu0KgHxbIOtictJbDoleZiLskT%2Bwa6CxNbj%2BIJfVkz6FT68vpcVhUQt3duZhesFkWbZ0hGXBlMbjT1SkOHvuay9ub5VyBnO7FrGfzmqPlQtnvwL&X-Amz-Signature=ce28c0877b0523880d0f14fe8ce26b794bec0a921931547056a80928b74e3323&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYY7YWQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD0ZSDZiU3fI%2F6lT4RvjldUB8W8nVkj72JzJwKgcNCvnwIgUOPqR0REUtJ4i5ui9oEEQ6ZnFEqu33uWqjcrjY55qx4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7GFqsQrhy4Q6lwuyrcA6bveMujr67LW9s6vrlystNA0UqGWj2PYEww0JfZJsu7srECdOiecnKKp1yaS%2B0lebujsnYP8pNy0bNqcTtHv87wlNaO6TDU%2BpcGWUotAR4kW%2BrT5cDjQTggnHRRiNADcCUpd8pkazoTw0BdZPseVb6tDRC6%2FK1riDDhPzehvsj9IJxSVDDmNO0rbXIK4R%2BWbWl%2BLesTmgCKsoZ5Jdmzy0zVVbKS7J4f2QgDfFSHM%2FoIbOD%2FPRiVdKRAgZpsJRxd%2FuD%2F0rbxRpDyRyWAys5Yj01%2BYYjdhsCFrn0lw%2B74RXUZLsNLQsaqpY9BQMZB7DF5XHoMM2Be3yO1AiUufbtPIm6IEFqqNVPX2YumWZ%2FECEoViph53m5zwU2NiNvNjfhtvnk1M4qWfCo7hb%2FTgLSa2%2B3zu5OKb7vWMCmAMDzfm0V6tHnSa5Fxv4GnWlqfLAym4GLQ8slwi88QxLZcG8Z9tCc5Cv7KhyNGmVQXyolBBwJTP0XbwNM4dDm42jn%2FvOaTFXuhEcf3bzlHySED1Ml6oUDJRgp3TaHPUxVC9ukgRcHEV083lAwd8pC27vkuf9wM92YkyojQQ1v9mQhGm96wn%2BkU0rKB9Dg68oMQ%2F%2FL9glcp9dM9HuMesDdpONcIMPDk08AGOqUBLHknB9zdkMpujFKMucUtPnDuwCXKfLly7iOsNodBT27xSQlN7biSAg3hb9Vg6wGhV2%2BwR21bM9WbDtq60oSEjzwsyZ%2BT%2BGX%2Bf0M6NiNvT%2BVGv%2Fu0KgHxbIOtictJbDoleZiLskT%2Bwa6CxNbj%2BIJfVkz6FT68vpcVhUQt3duZhesFkWbZ0hGXBlMbjT1SkOHvuay9ub5VyBnO7FrGfzmqPlQtnvwL&X-Amz-Signature=3df1efe257cad7f1b8646d4ef137ba765dfe125904a4f25de079c1baed5b53f8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYY7YWQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD0ZSDZiU3fI%2F6lT4RvjldUB8W8nVkj72JzJwKgcNCvnwIgUOPqR0REUtJ4i5ui9oEEQ6ZnFEqu33uWqjcrjY55qx4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7GFqsQrhy4Q6lwuyrcA6bveMujr67LW9s6vrlystNA0UqGWj2PYEww0JfZJsu7srECdOiecnKKp1yaS%2B0lebujsnYP8pNy0bNqcTtHv87wlNaO6TDU%2BpcGWUotAR4kW%2BrT5cDjQTggnHRRiNADcCUpd8pkazoTw0BdZPseVb6tDRC6%2FK1riDDhPzehvsj9IJxSVDDmNO0rbXIK4R%2BWbWl%2BLesTmgCKsoZ5Jdmzy0zVVbKS7J4f2QgDfFSHM%2FoIbOD%2FPRiVdKRAgZpsJRxd%2FuD%2F0rbxRpDyRyWAys5Yj01%2BYYjdhsCFrn0lw%2B74RXUZLsNLQsaqpY9BQMZB7DF5XHoMM2Be3yO1AiUufbtPIm6IEFqqNVPX2YumWZ%2FECEoViph53m5zwU2NiNvNjfhtvnk1M4qWfCo7hb%2FTgLSa2%2B3zu5OKb7vWMCmAMDzfm0V6tHnSa5Fxv4GnWlqfLAym4GLQ8slwi88QxLZcG8Z9tCc5Cv7KhyNGmVQXyolBBwJTP0XbwNM4dDm42jn%2FvOaTFXuhEcf3bzlHySED1Ml6oUDJRgp3TaHPUxVC9ukgRcHEV083lAwd8pC27vkuf9wM92YkyojQQ1v9mQhGm96wn%2BkU0rKB9Dg68oMQ%2F%2FL9glcp9dM9HuMesDdpONcIMPDk08AGOqUBLHknB9zdkMpujFKMucUtPnDuwCXKfLly7iOsNodBT27xSQlN7biSAg3hb9Vg6wGhV2%2BwR21bM9WbDtq60oSEjzwsyZ%2BT%2BGX%2Bf0M6NiNvT%2BVGv%2Fu0KgHxbIOtictJbDoleZiLskT%2Bwa6CxNbj%2BIJfVkz6FT68vpcVhUQt3duZhesFkWbZ0hGXBlMbjT1SkOHvuay9ub5VyBnO7FrGfzmqPlQtnvwL&X-Amz-Signature=7592d2fbdb31aa4d0b8723391d264e776738e274f937c0f76c232a6fa4d38c17&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
