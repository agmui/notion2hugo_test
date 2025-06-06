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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QCH4KT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHBRfyq3mkbtEOlOqZW4gcW0xKf%2FVI14L8LFmLruffeAIgdNSjp8rk3ovdunfMnwKw4ESdBuz3WZvbPC7eA7UYE5Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLgLxG%2BKJKsYqsoIoCrcA3V%2F3f8kKgPpc6uShVtM348yO7jT2Rp%2Blr8ECKGzHFV7g2N2iEWVcoZ6mr0qaSAsRIqB8GtpBSWD%2Fo7c9wd26x1cytiC1b2BN0L%2Bxfeiu8m2ZwBmi8N2zQkV%2BMRLcM8Q0sL9UpptVVmYvEYZHrf7WtjpbPMT%2FIb8WQomY3ERB5KwZEoS4VM9p6SsYs8im0WqZmNW8Ylh6ER7gQw8%2B33oMLG4MuVY4FNvVoq90pgxsN3D1up%2F%2BDo7pJ8DwZLdOY2%2Fv6x4tdWB%2BKjS4nJB%2B9cXMW44Y4zZwB76Ed6wd7JGu7i3Dy6UgFrtcrnY547s0m7WBWUiAHVqnEqjs5hSBG0qvCGi1iCro7vtNZPKOEbjuwDuiIQ0bVcIclAI4SAMPCE4fQz9RedPxZ7af2367xx7AtfpdIYSia6vHwA8%2BTE6BKQRqBJqL2bNnd3wiTrrL4Y47EffE94GzcmMxyur4OP2J9CTd136qyJBd52G9n5uQV5GDbCYR3JtokG28bWyqbHYDKwg8VWlpIyJmZ1w9yZr03p9YqKWFqy5eUBzfUI0cvTXlQOgfIlNCr2BnlW3RJEE%2BZ72zcCcd39BaK%2BORrC5ZcYgtqjfrNL89vRAT92BDmomhqSY7zO9keu47vI%2BMKORjcIGOqUBj8uiYeDZN%2BP63PNiTk0cetqFBs5olJH%2FLhB%2F55zoQ0heg2QrY5dzee9F4QRZEUMzzw0kr2KgFY2oUL1xIQzrCu%2BFIhwZlTqQonH%2BH1Ef%2FK4IlBekZTuu5mBm9cbdcrcVUvUq31tGn87jHEWsKGvpbSNUeOPqAZ1FMdUynjN6hqlVqo3fcrFtyOellKXUnVCVX6k5IqHwCDnxk8jdoLedoTuiCJTF&X-Amz-Signature=94fd487530c4b0b167c1d88822fabbb3541d6d5a2ca3ffa1031b3889f4d38ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QCH4KT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHBRfyq3mkbtEOlOqZW4gcW0xKf%2FVI14L8LFmLruffeAIgdNSjp8rk3ovdunfMnwKw4ESdBuz3WZvbPC7eA7UYE5Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLgLxG%2BKJKsYqsoIoCrcA3V%2F3f8kKgPpc6uShVtM348yO7jT2Rp%2Blr8ECKGzHFV7g2N2iEWVcoZ6mr0qaSAsRIqB8GtpBSWD%2Fo7c9wd26x1cytiC1b2BN0L%2Bxfeiu8m2ZwBmi8N2zQkV%2BMRLcM8Q0sL9UpptVVmYvEYZHrf7WtjpbPMT%2FIb8WQomY3ERB5KwZEoS4VM9p6SsYs8im0WqZmNW8Ylh6ER7gQw8%2B33oMLG4MuVY4FNvVoq90pgxsN3D1up%2F%2BDo7pJ8DwZLdOY2%2Fv6x4tdWB%2BKjS4nJB%2B9cXMW44Y4zZwB76Ed6wd7JGu7i3Dy6UgFrtcrnY547s0m7WBWUiAHVqnEqjs5hSBG0qvCGi1iCro7vtNZPKOEbjuwDuiIQ0bVcIclAI4SAMPCE4fQz9RedPxZ7af2367xx7AtfpdIYSia6vHwA8%2BTE6BKQRqBJqL2bNnd3wiTrrL4Y47EffE94GzcmMxyur4OP2J9CTd136qyJBd52G9n5uQV5GDbCYR3JtokG28bWyqbHYDKwg8VWlpIyJmZ1w9yZr03p9YqKWFqy5eUBzfUI0cvTXlQOgfIlNCr2BnlW3RJEE%2BZ72zcCcd39BaK%2BORrC5ZcYgtqjfrNL89vRAT92BDmomhqSY7zO9keu47vI%2BMKORjcIGOqUBj8uiYeDZN%2BP63PNiTk0cetqFBs5olJH%2FLhB%2F55zoQ0heg2QrY5dzee9F4QRZEUMzzw0kr2KgFY2oUL1xIQzrCu%2BFIhwZlTqQonH%2BH1Ef%2FK4IlBekZTuu5mBm9cbdcrcVUvUq31tGn87jHEWsKGvpbSNUeOPqAZ1FMdUynjN6hqlVqo3fcrFtyOellKXUnVCVX6k5IqHwCDnxk8jdoLedoTuiCJTF&X-Amz-Signature=85172f4874d656e79d97fcd25ff422a90dfe4ff60a7aa1bfbc62308825839abc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QCH4KT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHBRfyq3mkbtEOlOqZW4gcW0xKf%2FVI14L8LFmLruffeAIgdNSjp8rk3ovdunfMnwKw4ESdBuz3WZvbPC7eA7UYE5Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLgLxG%2BKJKsYqsoIoCrcA3V%2F3f8kKgPpc6uShVtM348yO7jT2Rp%2Blr8ECKGzHFV7g2N2iEWVcoZ6mr0qaSAsRIqB8GtpBSWD%2Fo7c9wd26x1cytiC1b2BN0L%2Bxfeiu8m2ZwBmi8N2zQkV%2BMRLcM8Q0sL9UpptVVmYvEYZHrf7WtjpbPMT%2FIb8WQomY3ERB5KwZEoS4VM9p6SsYs8im0WqZmNW8Ylh6ER7gQw8%2B33oMLG4MuVY4FNvVoq90pgxsN3D1up%2F%2BDo7pJ8DwZLdOY2%2Fv6x4tdWB%2BKjS4nJB%2B9cXMW44Y4zZwB76Ed6wd7JGu7i3Dy6UgFrtcrnY547s0m7WBWUiAHVqnEqjs5hSBG0qvCGi1iCro7vtNZPKOEbjuwDuiIQ0bVcIclAI4SAMPCE4fQz9RedPxZ7af2367xx7AtfpdIYSia6vHwA8%2BTE6BKQRqBJqL2bNnd3wiTrrL4Y47EffE94GzcmMxyur4OP2J9CTd136qyJBd52G9n5uQV5GDbCYR3JtokG28bWyqbHYDKwg8VWlpIyJmZ1w9yZr03p9YqKWFqy5eUBzfUI0cvTXlQOgfIlNCr2BnlW3RJEE%2BZ72zcCcd39BaK%2BORrC5ZcYgtqjfrNL89vRAT92BDmomhqSY7zO9keu47vI%2BMKORjcIGOqUBj8uiYeDZN%2BP63PNiTk0cetqFBs5olJH%2FLhB%2F55zoQ0heg2QrY5dzee9F4QRZEUMzzw0kr2KgFY2oUL1xIQzrCu%2BFIhwZlTqQonH%2BH1Ef%2FK4IlBekZTuu5mBm9cbdcrcVUvUq31tGn87jHEWsKGvpbSNUeOPqAZ1FMdUynjN6hqlVqo3fcrFtyOellKXUnVCVX6k5IqHwCDnxk8jdoLedoTuiCJTF&X-Amz-Signature=39b9a1256a9a05deb18e83cb9bfc93d1814e77ae5b20ac5fcb13eb4243043170&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QCH4KT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHBRfyq3mkbtEOlOqZW4gcW0xKf%2FVI14L8LFmLruffeAIgdNSjp8rk3ovdunfMnwKw4ESdBuz3WZvbPC7eA7UYE5Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLgLxG%2BKJKsYqsoIoCrcA3V%2F3f8kKgPpc6uShVtM348yO7jT2Rp%2Blr8ECKGzHFV7g2N2iEWVcoZ6mr0qaSAsRIqB8GtpBSWD%2Fo7c9wd26x1cytiC1b2BN0L%2Bxfeiu8m2ZwBmi8N2zQkV%2BMRLcM8Q0sL9UpptVVmYvEYZHrf7WtjpbPMT%2FIb8WQomY3ERB5KwZEoS4VM9p6SsYs8im0WqZmNW8Ylh6ER7gQw8%2B33oMLG4MuVY4FNvVoq90pgxsN3D1up%2F%2BDo7pJ8DwZLdOY2%2Fv6x4tdWB%2BKjS4nJB%2B9cXMW44Y4zZwB76Ed6wd7JGu7i3Dy6UgFrtcrnY547s0m7WBWUiAHVqnEqjs5hSBG0qvCGi1iCro7vtNZPKOEbjuwDuiIQ0bVcIclAI4SAMPCE4fQz9RedPxZ7af2367xx7AtfpdIYSia6vHwA8%2BTE6BKQRqBJqL2bNnd3wiTrrL4Y47EffE94GzcmMxyur4OP2J9CTd136qyJBd52G9n5uQV5GDbCYR3JtokG28bWyqbHYDKwg8VWlpIyJmZ1w9yZr03p9YqKWFqy5eUBzfUI0cvTXlQOgfIlNCr2BnlW3RJEE%2BZ72zcCcd39BaK%2BORrC5ZcYgtqjfrNL89vRAT92BDmomhqSY7zO9keu47vI%2BMKORjcIGOqUBj8uiYeDZN%2BP63PNiTk0cetqFBs5olJH%2FLhB%2F55zoQ0heg2QrY5dzee9F4QRZEUMzzw0kr2KgFY2oUL1xIQzrCu%2BFIhwZlTqQonH%2BH1Ef%2FK4IlBekZTuu5mBm9cbdcrcVUvUq31tGn87jHEWsKGvpbSNUeOPqAZ1FMdUynjN6hqlVqo3fcrFtyOellKXUnVCVX6k5IqHwCDnxk8jdoLedoTuiCJTF&X-Amz-Signature=f7a3700b76fc3c7b20a8c16ffea5a836c37974adfea30cb6f4daf38fa8b7f41b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QCH4KT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHBRfyq3mkbtEOlOqZW4gcW0xKf%2FVI14L8LFmLruffeAIgdNSjp8rk3ovdunfMnwKw4ESdBuz3WZvbPC7eA7UYE5Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLgLxG%2BKJKsYqsoIoCrcA3V%2F3f8kKgPpc6uShVtM348yO7jT2Rp%2Blr8ECKGzHFV7g2N2iEWVcoZ6mr0qaSAsRIqB8GtpBSWD%2Fo7c9wd26x1cytiC1b2BN0L%2Bxfeiu8m2ZwBmi8N2zQkV%2BMRLcM8Q0sL9UpptVVmYvEYZHrf7WtjpbPMT%2FIb8WQomY3ERB5KwZEoS4VM9p6SsYs8im0WqZmNW8Ylh6ER7gQw8%2B33oMLG4MuVY4FNvVoq90pgxsN3D1up%2F%2BDo7pJ8DwZLdOY2%2Fv6x4tdWB%2BKjS4nJB%2B9cXMW44Y4zZwB76Ed6wd7JGu7i3Dy6UgFrtcrnY547s0m7WBWUiAHVqnEqjs5hSBG0qvCGi1iCro7vtNZPKOEbjuwDuiIQ0bVcIclAI4SAMPCE4fQz9RedPxZ7af2367xx7AtfpdIYSia6vHwA8%2BTE6BKQRqBJqL2bNnd3wiTrrL4Y47EffE94GzcmMxyur4OP2J9CTd136qyJBd52G9n5uQV5GDbCYR3JtokG28bWyqbHYDKwg8VWlpIyJmZ1w9yZr03p9YqKWFqy5eUBzfUI0cvTXlQOgfIlNCr2BnlW3RJEE%2BZ72zcCcd39BaK%2BORrC5ZcYgtqjfrNL89vRAT92BDmomhqSY7zO9keu47vI%2BMKORjcIGOqUBj8uiYeDZN%2BP63PNiTk0cetqFBs5olJH%2FLhB%2F55zoQ0heg2QrY5dzee9F4QRZEUMzzw0kr2KgFY2oUL1xIQzrCu%2BFIhwZlTqQonH%2BH1Ef%2FK4IlBekZTuu5mBm9cbdcrcVUvUq31tGn87jHEWsKGvpbSNUeOPqAZ1FMdUynjN6hqlVqo3fcrFtyOellKXUnVCVX6k5IqHwCDnxk8jdoLedoTuiCJTF&X-Amz-Signature=08fbd1292b577050596c723dbaa9b7ac8194d11b6fb8fe1e3c2b5ff80261f79f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QCH4KT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHBRfyq3mkbtEOlOqZW4gcW0xKf%2FVI14L8LFmLruffeAIgdNSjp8rk3ovdunfMnwKw4ESdBuz3WZvbPC7eA7UYE5Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLgLxG%2BKJKsYqsoIoCrcA3V%2F3f8kKgPpc6uShVtM348yO7jT2Rp%2Blr8ECKGzHFV7g2N2iEWVcoZ6mr0qaSAsRIqB8GtpBSWD%2Fo7c9wd26x1cytiC1b2BN0L%2Bxfeiu8m2ZwBmi8N2zQkV%2BMRLcM8Q0sL9UpptVVmYvEYZHrf7WtjpbPMT%2FIb8WQomY3ERB5KwZEoS4VM9p6SsYs8im0WqZmNW8Ylh6ER7gQw8%2B33oMLG4MuVY4FNvVoq90pgxsN3D1up%2F%2BDo7pJ8DwZLdOY2%2Fv6x4tdWB%2BKjS4nJB%2B9cXMW44Y4zZwB76Ed6wd7JGu7i3Dy6UgFrtcrnY547s0m7WBWUiAHVqnEqjs5hSBG0qvCGi1iCro7vtNZPKOEbjuwDuiIQ0bVcIclAI4SAMPCE4fQz9RedPxZ7af2367xx7AtfpdIYSia6vHwA8%2BTE6BKQRqBJqL2bNnd3wiTrrL4Y47EffE94GzcmMxyur4OP2J9CTd136qyJBd52G9n5uQV5GDbCYR3JtokG28bWyqbHYDKwg8VWlpIyJmZ1w9yZr03p9YqKWFqy5eUBzfUI0cvTXlQOgfIlNCr2BnlW3RJEE%2BZ72zcCcd39BaK%2BORrC5ZcYgtqjfrNL89vRAT92BDmomhqSY7zO9keu47vI%2BMKORjcIGOqUBj8uiYeDZN%2BP63PNiTk0cetqFBs5olJH%2FLhB%2F55zoQ0heg2QrY5dzee9F4QRZEUMzzw0kr2KgFY2oUL1xIQzrCu%2BFIhwZlTqQonH%2BH1Ef%2FK4IlBekZTuu5mBm9cbdcrcVUvUq31tGn87jHEWsKGvpbSNUeOPqAZ1FMdUynjN6hqlVqo3fcrFtyOellKXUnVCVX6k5IqHwCDnxk8jdoLedoTuiCJTF&X-Amz-Signature=e7db675794b6c09785a70b9a140341f73d55bc3cb5afbb5711af31c8e56760ae&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QCH4KT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHBRfyq3mkbtEOlOqZW4gcW0xKf%2FVI14L8LFmLruffeAIgdNSjp8rk3ovdunfMnwKw4ESdBuz3WZvbPC7eA7UYE5Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLgLxG%2BKJKsYqsoIoCrcA3V%2F3f8kKgPpc6uShVtM348yO7jT2Rp%2Blr8ECKGzHFV7g2N2iEWVcoZ6mr0qaSAsRIqB8GtpBSWD%2Fo7c9wd26x1cytiC1b2BN0L%2Bxfeiu8m2ZwBmi8N2zQkV%2BMRLcM8Q0sL9UpptVVmYvEYZHrf7WtjpbPMT%2FIb8WQomY3ERB5KwZEoS4VM9p6SsYs8im0WqZmNW8Ylh6ER7gQw8%2B33oMLG4MuVY4FNvVoq90pgxsN3D1up%2F%2BDo7pJ8DwZLdOY2%2Fv6x4tdWB%2BKjS4nJB%2B9cXMW44Y4zZwB76Ed6wd7JGu7i3Dy6UgFrtcrnY547s0m7WBWUiAHVqnEqjs5hSBG0qvCGi1iCro7vtNZPKOEbjuwDuiIQ0bVcIclAI4SAMPCE4fQz9RedPxZ7af2367xx7AtfpdIYSia6vHwA8%2BTE6BKQRqBJqL2bNnd3wiTrrL4Y47EffE94GzcmMxyur4OP2J9CTd136qyJBd52G9n5uQV5GDbCYR3JtokG28bWyqbHYDKwg8VWlpIyJmZ1w9yZr03p9YqKWFqy5eUBzfUI0cvTXlQOgfIlNCr2BnlW3RJEE%2BZ72zcCcd39BaK%2BORrC5ZcYgtqjfrNL89vRAT92BDmomhqSY7zO9keu47vI%2BMKORjcIGOqUBj8uiYeDZN%2BP63PNiTk0cetqFBs5olJH%2FLhB%2F55zoQ0heg2QrY5dzee9F4QRZEUMzzw0kr2KgFY2oUL1xIQzrCu%2BFIhwZlTqQonH%2BH1Ef%2FK4IlBekZTuu5mBm9cbdcrcVUvUq31tGn87jHEWsKGvpbSNUeOPqAZ1FMdUynjN6hqlVqo3fcrFtyOellKXUnVCVX6k5IqHwCDnxk8jdoLedoTuiCJTF&X-Amz-Signature=5aace7b9b510b7dd5fa57a38971151a3a38601d2d6f1d67d773605dcbb313e56&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
