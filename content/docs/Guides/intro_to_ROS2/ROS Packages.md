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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7M6FJPZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBnblaFTfHQj79b56h0QZVy1Vh4YaaNXShI%2FGCp2jc7AiBWoEENY%2F0t9kzx%2B3XUAnPO7nDpLYOsUcZAtYarxr%2FrIiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5asUdMIcR6VgIon8KtwDcxoIOtnVjNRrmPeqWzDs%2FBBEokzohTF7P6e1MnJeMt%2F2BZ5SuG4rzvYUIvnJs2o1SRGP1KJFfIcTAnPj3YusKG%2FaDK7msmowYUKqAuwqKBY2dYZOlXM8HfLeGZJ%2B6LyUhwgTKLhSdq4DyOhzyqsUZU%2BvwUXWHCFhmTR88Yoze%2B795NvTqXQGslm%2FV9f0lA%2BujBqH2NWa19WelODh2KMVTcw8KWakxNU9dvX2LanNukomm4he6eATIdkUWZ0NW9GhXSAjxvj592a6LgcP0ak4oIuXQbXCW9pu%2BYnghyV0IDyko4%2BtdveKGPgpRgIBRXzzlvdacOxosg6XxUjOQYueIfUHYipkAy5L7V1W6ILQjuhS%2BgCEUFWF62rJAU6rhfYYgY0bVpkcTKdU7O47iC1d3XyE45CpwOVQYh4eoIUq1rx2IOoj3pa7Icvb5Hzl%2FlmIZNqQSSNZCFxIRUrm9rbF4guvZC%2BSibTSZVtwGXTU%2FuBZgeFjJ%2BIF0Vi6mkRm9RbnBX7Cw%2BeTy%2BFQ0U1TUNKFlC5dWUEk%2BQtyJ3dZbOieYkCeDI%2Fc05Q8VcJy3bfIVFHIkZaEPK8mjVX%2BvdvuE5dKGD3imLcPkGFRzxvAXgMGs0qjB0QD%2BTCH9SVZsucwhsGAvQY6pgHdOUZeRqO%2BnxRffu%2F4zhGHUgcQFmXCLJzlCFbbcbMa%2B3fxza8AtWMlMri6DSVpyUlUChpEqceimuRGUEEuxIiGtga3a9Ei9Zz74DskyBQtdwBoGbfRwfdxdTp0rUBPTApQwKiDP%2FnJn56Ste%2F%2FBktAHmGbd%2BAw3lUf9q3OBKGX8RBQn2ZEWhsVfG5CENKF2Td892bUV4UnkI36mNNQV9mJ0trGrZw1&X-Amz-Signature=1a8fd8220db938c4229cd97a45e27cb24f1e339a1e9bfcba223b330e19b32cec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7M6FJPZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBnblaFTfHQj79b56h0QZVy1Vh4YaaNXShI%2FGCp2jc7AiBWoEENY%2F0t9kzx%2B3XUAnPO7nDpLYOsUcZAtYarxr%2FrIiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5asUdMIcR6VgIon8KtwDcxoIOtnVjNRrmPeqWzDs%2FBBEokzohTF7P6e1MnJeMt%2F2BZ5SuG4rzvYUIvnJs2o1SRGP1KJFfIcTAnPj3YusKG%2FaDK7msmowYUKqAuwqKBY2dYZOlXM8HfLeGZJ%2B6LyUhwgTKLhSdq4DyOhzyqsUZU%2BvwUXWHCFhmTR88Yoze%2B795NvTqXQGslm%2FV9f0lA%2BujBqH2NWa19WelODh2KMVTcw8KWakxNU9dvX2LanNukomm4he6eATIdkUWZ0NW9GhXSAjxvj592a6LgcP0ak4oIuXQbXCW9pu%2BYnghyV0IDyko4%2BtdveKGPgpRgIBRXzzlvdacOxosg6XxUjOQYueIfUHYipkAy5L7V1W6ILQjuhS%2BgCEUFWF62rJAU6rhfYYgY0bVpkcTKdU7O47iC1d3XyE45CpwOVQYh4eoIUq1rx2IOoj3pa7Icvb5Hzl%2FlmIZNqQSSNZCFxIRUrm9rbF4guvZC%2BSibTSZVtwGXTU%2FuBZgeFjJ%2BIF0Vi6mkRm9RbnBX7Cw%2BeTy%2BFQ0U1TUNKFlC5dWUEk%2BQtyJ3dZbOieYkCeDI%2Fc05Q8VcJy3bfIVFHIkZaEPK8mjVX%2BvdvuE5dKGD3imLcPkGFRzxvAXgMGs0qjB0QD%2BTCH9SVZsucwhsGAvQY6pgHdOUZeRqO%2BnxRffu%2F4zhGHUgcQFmXCLJzlCFbbcbMa%2B3fxza8AtWMlMri6DSVpyUlUChpEqceimuRGUEEuxIiGtga3a9Ei9Zz74DskyBQtdwBoGbfRwfdxdTp0rUBPTApQwKiDP%2FnJn56Ste%2F%2FBktAHmGbd%2BAw3lUf9q3OBKGX8RBQn2ZEWhsVfG5CENKF2Td892bUV4UnkI36mNNQV9mJ0trGrZw1&X-Amz-Signature=1b939918d13512b15bbc42614702eaaaa2e25062c985726440ed47521b6aec5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7M6FJPZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBnblaFTfHQj79b56h0QZVy1Vh4YaaNXShI%2FGCp2jc7AiBWoEENY%2F0t9kzx%2B3XUAnPO7nDpLYOsUcZAtYarxr%2FrIiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5asUdMIcR6VgIon8KtwDcxoIOtnVjNRrmPeqWzDs%2FBBEokzohTF7P6e1MnJeMt%2F2BZ5SuG4rzvYUIvnJs2o1SRGP1KJFfIcTAnPj3YusKG%2FaDK7msmowYUKqAuwqKBY2dYZOlXM8HfLeGZJ%2B6LyUhwgTKLhSdq4DyOhzyqsUZU%2BvwUXWHCFhmTR88Yoze%2B795NvTqXQGslm%2FV9f0lA%2BujBqH2NWa19WelODh2KMVTcw8KWakxNU9dvX2LanNukomm4he6eATIdkUWZ0NW9GhXSAjxvj592a6LgcP0ak4oIuXQbXCW9pu%2BYnghyV0IDyko4%2BtdveKGPgpRgIBRXzzlvdacOxosg6XxUjOQYueIfUHYipkAy5L7V1W6ILQjuhS%2BgCEUFWF62rJAU6rhfYYgY0bVpkcTKdU7O47iC1d3XyE45CpwOVQYh4eoIUq1rx2IOoj3pa7Icvb5Hzl%2FlmIZNqQSSNZCFxIRUrm9rbF4guvZC%2BSibTSZVtwGXTU%2FuBZgeFjJ%2BIF0Vi6mkRm9RbnBX7Cw%2BeTy%2BFQ0U1TUNKFlC5dWUEk%2BQtyJ3dZbOieYkCeDI%2Fc05Q8VcJy3bfIVFHIkZaEPK8mjVX%2BvdvuE5dKGD3imLcPkGFRzxvAXgMGs0qjB0QD%2BTCH9SVZsucwhsGAvQY6pgHdOUZeRqO%2BnxRffu%2F4zhGHUgcQFmXCLJzlCFbbcbMa%2B3fxza8AtWMlMri6DSVpyUlUChpEqceimuRGUEEuxIiGtga3a9Ei9Zz74DskyBQtdwBoGbfRwfdxdTp0rUBPTApQwKiDP%2FnJn56Ste%2F%2FBktAHmGbd%2BAw3lUf9q3OBKGX8RBQn2ZEWhsVfG5CENKF2Td892bUV4UnkI36mNNQV9mJ0trGrZw1&X-Amz-Signature=0b2e3606951a7d14f7adc5803cd32f93f1fe82e021fd84052877e3a9edff337c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7M6FJPZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBnblaFTfHQj79b56h0QZVy1Vh4YaaNXShI%2FGCp2jc7AiBWoEENY%2F0t9kzx%2B3XUAnPO7nDpLYOsUcZAtYarxr%2FrIiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5asUdMIcR6VgIon8KtwDcxoIOtnVjNRrmPeqWzDs%2FBBEokzohTF7P6e1MnJeMt%2F2BZ5SuG4rzvYUIvnJs2o1SRGP1KJFfIcTAnPj3YusKG%2FaDK7msmowYUKqAuwqKBY2dYZOlXM8HfLeGZJ%2B6LyUhwgTKLhSdq4DyOhzyqsUZU%2BvwUXWHCFhmTR88Yoze%2B795NvTqXQGslm%2FV9f0lA%2BujBqH2NWa19WelODh2KMVTcw8KWakxNU9dvX2LanNukomm4he6eATIdkUWZ0NW9GhXSAjxvj592a6LgcP0ak4oIuXQbXCW9pu%2BYnghyV0IDyko4%2BtdveKGPgpRgIBRXzzlvdacOxosg6XxUjOQYueIfUHYipkAy5L7V1W6ILQjuhS%2BgCEUFWF62rJAU6rhfYYgY0bVpkcTKdU7O47iC1d3XyE45CpwOVQYh4eoIUq1rx2IOoj3pa7Icvb5Hzl%2FlmIZNqQSSNZCFxIRUrm9rbF4guvZC%2BSibTSZVtwGXTU%2FuBZgeFjJ%2BIF0Vi6mkRm9RbnBX7Cw%2BeTy%2BFQ0U1TUNKFlC5dWUEk%2BQtyJ3dZbOieYkCeDI%2Fc05Q8VcJy3bfIVFHIkZaEPK8mjVX%2BvdvuE5dKGD3imLcPkGFRzxvAXgMGs0qjB0QD%2BTCH9SVZsucwhsGAvQY6pgHdOUZeRqO%2BnxRffu%2F4zhGHUgcQFmXCLJzlCFbbcbMa%2B3fxza8AtWMlMri6DSVpyUlUChpEqceimuRGUEEuxIiGtga3a9Ei9Zz74DskyBQtdwBoGbfRwfdxdTp0rUBPTApQwKiDP%2FnJn56Ste%2F%2FBktAHmGbd%2BAw3lUf9q3OBKGX8RBQn2ZEWhsVfG5CENKF2Td892bUV4UnkI36mNNQV9mJ0trGrZw1&X-Amz-Signature=62f7d42a0c4bc69f84887d59aa354e62f7edae89ce19493f75f8f323eaabffab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7M6FJPZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBnblaFTfHQj79b56h0QZVy1Vh4YaaNXShI%2FGCp2jc7AiBWoEENY%2F0t9kzx%2B3XUAnPO7nDpLYOsUcZAtYarxr%2FrIiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5asUdMIcR6VgIon8KtwDcxoIOtnVjNRrmPeqWzDs%2FBBEokzohTF7P6e1MnJeMt%2F2BZ5SuG4rzvYUIvnJs2o1SRGP1KJFfIcTAnPj3YusKG%2FaDK7msmowYUKqAuwqKBY2dYZOlXM8HfLeGZJ%2B6LyUhwgTKLhSdq4DyOhzyqsUZU%2BvwUXWHCFhmTR88Yoze%2B795NvTqXQGslm%2FV9f0lA%2BujBqH2NWa19WelODh2KMVTcw8KWakxNU9dvX2LanNukomm4he6eATIdkUWZ0NW9GhXSAjxvj592a6LgcP0ak4oIuXQbXCW9pu%2BYnghyV0IDyko4%2BtdveKGPgpRgIBRXzzlvdacOxosg6XxUjOQYueIfUHYipkAy5L7V1W6ILQjuhS%2BgCEUFWF62rJAU6rhfYYgY0bVpkcTKdU7O47iC1d3XyE45CpwOVQYh4eoIUq1rx2IOoj3pa7Icvb5Hzl%2FlmIZNqQSSNZCFxIRUrm9rbF4guvZC%2BSibTSZVtwGXTU%2FuBZgeFjJ%2BIF0Vi6mkRm9RbnBX7Cw%2BeTy%2BFQ0U1TUNKFlC5dWUEk%2BQtyJ3dZbOieYkCeDI%2Fc05Q8VcJy3bfIVFHIkZaEPK8mjVX%2BvdvuE5dKGD3imLcPkGFRzxvAXgMGs0qjB0QD%2BTCH9SVZsucwhsGAvQY6pgHdOUZeRqO%2BnxRffu%2F4zhGHUgcQFmXCLJzlCFbbcbMa%2B3fxza8AtWMlMri6DSVpyUlUChpEqceimuRGUEEuxIiGtga3a9Ei9Zz74DskyBQtdwBoGbfRwfdxdTp0rUBPTApQwKiDP%2FnJn56Ste%2F%2FBktAHmGbd%2BAw3lUf9q3OBKGX8RBQn2ZEWhsVfG5CENKF2Td892bUV4UnkI36mNNQV9mJ0trGrZw1&X-Amz-Signature=127fb059915d251851243b4bb907e49ae01158e8cc8da2c1a62a01c6c4449795&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7M6FJPZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBnblaFTfHQj79b56h0QZVy1Vh4YaaNXShI%2FGCp2jc7AiBWoEENY%2F0t9kzx%2B3XUAnPO7nDpLYOsUcZAtYarxr%2FrIiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5asUdMIcR6VgIon8KtwDcxoIOtnVjNRrmPeqWzDs%2FBBEokzohTF7P6e1MnJeMt%2F2BZ5SuG4rzvYUIvnJs2o1SRGP1KJFfIcTAnPj3YusKG%2FaDK7msmowYUKqAuwqKBY2dYZOlXM8HfLeGZJ%2B6LyUhwgTKLhSdq4DyOhzyqsUZU%2BvwUXWHCFhmTR88Yoze%2B795NvTqXQGslm%2FV9f0lA%2BujBqH2NWa19WelODh2KMVTcw8KWakxNU9dvX2LanNukomm4he6eATIdkUWZ0NW9GhXSAjxvj592a6LgcP0ak4oIuXQbXCW9pu%2BYnghyV0IDyko4%2BtdveKGPgpRgIBRXzzlvdacOxosg6XxUjOQYueIfUHYipkAy5L7V1W6ILQjuhS%2BgCEUFWF62rJAU6rhfYYgY0bVpkcTKdU7O47iC1d3XyE45CpwOVQYh4eoIUq1rx2IOoj3pa7Icvb5Hzl%2FlmIZNqQSSNZCFxIRUrm9rbF4guvZC%2BSibTSZVtwGXTU%2FuBZgeFjJ%2BIF0Vi6mkRm9RbnBX7Cw%2BeTy%2BFQ0U1TUNKFlC5dWUEk%2BQtyJ3dZbOieYkCeDI%2Fc05Q8VcJy3bfIVFHIkZaEPK8mjVX%2BvdvuE5dKGD3imLcPkGFRzxvAXgMGs0qjB0QD%2BTCH9SVZsucwhsGAvQY6pgHdOUZeRqO%2BnxRffu%2F4zhGHUgcQFmXCLJzlCFbbcbMa%2B3fxza8AtWMlMri6DSVpyUlUChpEqceimuRGUEEuxIiGtga3a9Ei9Zz74DskyBQtdwBoGbfRwfdxdTp0rUBPTApQwKiDP%2FnJn56Ste%2F%2FBktAHmGbd%2BAw3lUf9q3OBKGX8RBQn2ZEWhsVfG5CENKF2Td892bUV4UnkI36mNNQV9mJ0trGrZw1&X-Amz-Signature=ca45065c33370c45bf008de9727e8a40b760b96a5b350974ee3298203d902674&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7M6FJPZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBnblaFTfHQj79b56h0QZVy1Vh4YaaNXShI%2FGCp2jc7AiBWoEENY%2F0t9kzx%2B3XUAnPO7nDpLYOsUcZAtYarxr%2FrIiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5asUdMIcR6VgIon8KtwDcxoIOtnVjNRrmPeqWzDs%2FBBEokzohTF7P6e1MnJeMt%2F2BZ5SuG4rzvYUIvnJs2o1SRGP1KJFfIcTAnPj3YusKG%2FaDK7msmowYUKqAuwqKBY2dYZOlXM8HfLeGZJ%2B6LyUhwgTKLhSdq4DyOhzyqsUZU%2BvwUXWHCFhmTR88Yoze%2B795NvTqXQGslm%2FV9f0lA%2BujBqH2NWa19WelODh2KMVTcw8KWakxNU9dvX2LanNukomm4he6eATIdkUWZ0NW9GhXSAjxvj592a6LgcP0ak4oIuXQbXCW9pu%2BYnghyV0IDyko4%2BtdveKGPgpRgIBRXzzlvdacOxosg6XxUjOQYueIfUHYipkAy5L7V1W6ILQjuhS%2BgCEUFWF62rJAU6rhfYYgY0bVpkcTKdU7O47iC1d3XyE45CpwOVQYh4eoIUq1rx2IOoj3pa7Icvb5Hzl%2FlmIZNqQSSNZCFxIRUrm9rbF4guvZC%2BSibTSZVtwGXTU%2FuBZgeFjJ%2BIF0Vi6mkRm9RbnBX7Cw%2BeTy%2BFQ0U1TUNKFlC5dWUEk%2BQtyJ3dZbOieYkCeDI%2Fc05Q8VcJy3bfIVFHIkZaEPK8mjVX%2BvdvuE5dKGD3imLcPkGFRzxvAXgMGs0qjB0QD%2BTCH9SVZsucwhsGAvQY6pgHdOUZeRqO%2BnxRffu%2F4zhGHUgcQFmXCLJzlCFbbcbMa%2B3fxza8AtWMlMri6DSVpyUlUChpEqceimuRGUEEuxIiGtga3a9Ei9Zz74DskyBQtdwBoGbfRwfdxdTp0rUBPTApQwKiDP%2FnJn56Ste%2F%2FBktAHmGbd%2BAw3lUf9q3OBKGX8RBQn2ZEWhsVfG5CENKF2Td892bUV4UnkI36mNNQV9mJ0trGrZw1&X-Amz-Signature=f120774ae64168b5cee3035484e641b10ce238b99dca3a06e8913a68beb63656&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
