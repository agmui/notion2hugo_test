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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZQSJLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHap9UlUweVAmF0%2FJs3oECM%2FsVlR1wec%2FA96lpmV%2BRyAiB%2BdHI70nmYNB3jB%2FjNUcctGMOV9FCxjuGrm4VzDBeIdSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMCOKobIWtGVsgngX1KtwDW1H20PlSSlZkZo9avTaqKelfeNxFHD8GduEOyC2vIGf0s%2BB207DfC8LV8c5heD9XOhROxS4ObT7sKEWRWIyCcR%2FC%2Fqgy8yEorzj1QJ%2BoIrf%2F4baLO7ugeNEF2ceHmCRdp8WFAIH6EpZ69gmba3ZxWTRIZopobtPlEFF8DvejiZMNJmEGFWowbOMYlfPitm7wm%2Bhc%2FQsnNE7L5ALj7sFnm8AzLKqdUYgBjdy0Vh9CxhUciAmI3cWtC1eOacsZ3vysmK083cfKdDZ1IA34vsWFQ6MQZqrKSG4TZ3J8D68%2FQpYWPzTOsRnKOLZcKEaCitcM6M4LsCCxYOi9N0t152admjZr4IsHnCy44Uncz%2FweW%2FFOGLCEpjn%2FlVvtQUig5QAbJUt%2BquHl5ppTGcHWNIwz0jnrJx%2FKi9UZ8PM312lfL5U3RaJVzyEb8SNAG7OLyazY4jMx094weyjpz%2F0hWgAjXextm6zOnspvIz18UioFdNLHN%2BTI4OUL%2FosYNgWMS04DFxAF3ngohRpU463yO1DyA86HdZgIXeB%2B4kH5kahonYbwiANQdgsGnn1oT9HHij8p2wH8PBd%2FEt7xF6gsyYqU8dZX7gJSulHskGTcRshZlikZtP0AC9GvqUrhxA4wl7HlwAY6pgGaF6KwBUKDWb504hR788KUMcQt4mTVkskcNTqGUrMBOU6FOqxTYpm8pEy5vEODvZ%2BsC9l1yzxZ8tdeihz49lWzhHwIZeq1FDsoEvN7dkCyXXG%2F1%2BacMPmjFyWraSc%2Bjw%2B4fZSArZHiiy5lRcngd4hSrAZ9pfFlkHBGs6WBOwGBX28fI8zLQxG8HiHFpi5P9QF5XBEDT7vuCa3RJ5AM5O38rxfNkbWy&X-Amz-Signature=beac94d3ff0f797d78d430c656274ed43740060068c8221dc8d90ffc6361b7e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZQSJLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHap9UlUweVAmF0%2FJs3oECM%2FsVlR1wec%2FA96lpmV%2BRyAiB%2BdHI70nmYNB3jB%2FjNUcctGMOV9FCxjuGrm4VzDBeIdSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMCOKobIWtGVsgngX1KtwDW1H20PlSSlZkZo9avTaqKelfeNxFHD8GduEOyC2vIGf0s%2BB207DfC8LV8c5heD9XOhROxS4ObT7sKEWRWIyCcR%2FC%2Fqgy8yEorzj1QJ%2BoIrf%2F4baLO7ugeNEF2ceHmCRdp8WFAIH6EpZ69gmba3ZxWTRIZopobtPlEFF8DvejiZMNJmEGFWowbOMYlfPitm7wm%2Bhc%2FQsnNE7L5ALj7sFnm8AzLKqdUYgBjdy0Vh9CxhUciAmI3cWtC1eOacsZ3vysmK083cfKdDZ1IA34vsWFQ6MQZqrKSG4TZ3J8D68%2FQpYWPzTOsRnKOLZcKEaCitcM6M4LsCCxYOi9N0t152admjZr4IsHnCy44Uncz%2FweW%2FFOGLCEpjn%2FlVvtQUig5QAbJUt%2BquHl5ppTGcHWNIwz0jnrJx%2FKi9UZ8PM312lfL5U3RaJVzyEb8SNAG7OLyazY4jMx094weyjpz%2F0hWgAjXextm6zOnspvIz18UioFdNLHN%2BTI4OUL%2FosYNgWMS04DFxAF3ngohRpU463yO1DyA86HdZgIXeB%2B4kH5kahonYbwiANQdgsGnn1oT9HHij8p2wH8PBd%2FEt7xF6gsyYqU8dZX7gJSulHskGTcRshZlikZtP0AC9GvqUrhxA4wl7HlwAY6pgGaF6KwBUKDWb504hR788KUMcQt4mTVkskcNTqGUrMBOU6FOqxTYpm8pEy5vEODvZ%2BsC9l1yzxZ8tdeihz49lWzhHwIZeq1FDsoEvN7dkCyXXG%2F1%2BacMPmjFyWraSc%2Bjw%2B4fZSArZHiiy5lRcngd4hSrAZ9pfFlkHBGs6WBOwGBX28fI8zLQxG8HiHFpi5P9QF5XBEDT7vuCa3RJ5AM5O38rxfNkbWy&X-Amz-Signature=22b4d213c04736f1f5cf4bc353fe980e7bdc4f7749445d52096174c44cd7e815&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZQSJLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHap9UlUweVAmF0%2FJs3oECM%2FsVlR1wec%2FA96lpmV%2BRyAiB%2BdHI70nmYNB3jB%2FjNUcctGMOV9FCxjuGrm4VzDBeIdSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMCOKobIWtGVsgngX1KtwDW1H20PlSSlZkZo9avTaqKelfeNxFHD8GduEOyC2vIGf0s%2BB207DfC8LV8c5heD9XOhROxS4ObT7sKEWRWIyCcR%2FC%2Fqgy8yEorzj1QJ%2BoIrf%2F4baLO7ugeNEF2ceHmCRdp8WFAIH6EpZ69gmba3ZxWTRIZopobtPlEFF8DvejiZMNJmEGFWowbOMYlfPitm7wm%2Bhc%2FQsnNE7L5ALj7sFnm8AzLKqdUYgBjdy0Vh9CxhUciAmI3cWtC1eOacsZ3vysmK083cfKdDZ1IA34vsWFQ6MQZqrKSG4TZ3J8D68%2FQpYWPzTOsRnKOLZcKEaCitcM6M4LsCCxYOi9N0t152admjZr4IsHnCy44Uncz%2FweW%2FFOGLCEpjn%2FlVvtQUig5QAbJUt%2BquHl5ppTGcHWNIwz0jnrJx%2FKi9UZ8PM312lfL5U3RaJVzyEb8SNAG7OLyazY4jMx094weyjpz%2F0hWgAjXextm6zOnspvIz18UioFdNLHN%2BTI4OUL%2FosYNgWMS04DFxAF3ngohRpU463yO1DyA86HdZgIXeB%2B4kH5kahonYbwiANQdgsGnn1oT9HHij8p2wH8PBd%2FEt7xF6gsyYqU8dZX7gJSulHskGTcRshZlikZtP0AC9GvqUrhxA4wl7HlwAY6pgGaF6KwBUKDWb504hR788KUMcQt4mTVkskcNTqGUrMBOU6FOqxTYpm8pEy5vEODvZ%2BsC9l1yzxZ8tdeihz49lWzhHwIZeq1FDsoEvN7dkCyXXG%2F1%2BacMPmjFyWraSc%2Bjw%2B4fZSArZHiiy5lRcngd4hSrAZ9pfFlkHBGs6WBOwGBX28fI8zLQxG8HiHFpi5P9QF5XBEDT7vuCa3RJ5AM5O38rxfNkbWy&X-Amz-Signature=6970f62b552bc9c514b88b748a75398418b34649a6203e3ab1cdc64775fa3553&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZQSJLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHap9UlUweVAmF0%2FJs3oECM%2FsVlR1wec%2FA96lpmV%2BRyAiB%2BdHI70nmYNB3jB%2FjNUcctGMOV9FCxjuGrm4VzDBeIdSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMCOKobIWtGVsgngX1KtwDW1H20PlSSlZkZo9avTaqKelfeNxFHD8GduEOyC2vIGf0s%2BB207DfC8LV8c5heD9XOhROxS4ObT7sKEWRWIyCcR%2FC%2Fqgy8yEorzj1QJ%2BoIrf%2F4baLO7ugeNEF2ceHmCRdp8WFAIH6EpZ69gmba3ZxWTRIZopobtPlEFF8DvejiZMNJmEGFWowbOMYlfPitm7wm%2Bhc%2FQsnNE7L5ALj7sFnm8AzLKqdUYgBjdy0Vh9CxhUciAmI3cWtC1eOacsZ3vysmK083cfKdDZ1IA34vsWFQ6MQZqrKSG4TZ3J8D68%2FQpYWPzTOsRnKOLZcKEaCitcM6M4LsCCxYOi9N0t152admjZr4IsHnCy44Uncz%2FweW%2FFOGLCEpjn%2FlVvtQUig5QAbJUt%2BquHl5ppTGcHWNIwz0jnrJx%2FKi9UZ8PM312lfL5U3RaJVzyEb8SNAG7OLyazY4jMx094weyjpz%2F0hWgAjXextm6zOnspvIz18UioFdNLHN%2BTI4OUL%2FosYNgWMS04DFxAF3ngohRpU463yO1DyA86HdZgIXeB%2B4kH5kahonYbwiANQdgsGnn1oT9HHij8p2wH8PBd%2FEt7xF6gsyYqU8dZX7gJSulHskGTcRshZlikZtP0AC9GvqUrhxA4wl7HlwAY6pgGaF6KwBUKDWb504hR788KUMcQt4mTVkskcNTqGUrMBOU6FOqxTYpm8pEy5vEODvZ%2BsC9l1yzxZ8tdeihz49lWzhHwIZeq1FDsoEvN7dkCyXXG%2F1%2BacMPmjFyWraSc%2Bjw%2B4fZSArZHiiy5lRcngd4hSrAZ9pfFlkHBGs6WBOwGBX28fI8zLQxG8HiHFpi5P9QF5XBEDT7vuCa3RJ5AM5O38rxfNkbWy&X-Amz-Signature=a2e411acf602ef07edc56ac5056748ffe89e9e2ab6c042ab78e1b066075dd16a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZQSJLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHap9UlUweVAmF0%2FJs3oECM%2FsVlR1wec%2FA96lpmV%2BRyAiB%2BdHI70nmYNB3jB%2FjNUcctGMOV9FCxjuGrm4VzDBeIdSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMCOKobIWtGVsgngX1KtwDW1H20PlSSlZkZo9avTaqKelfeNxFHD8GduEOyC2vIGf0s%2BB207DfC8LV8c5heD9XOhROxS4ObT7sKEWRWIyCcR%2FC%2Fqgy8yEorzj1QJ%2BoIrf%2F4baLO7ugeNEF2ceHmCRdp8WFAIH6EpZ69gmba3ZxWTRIZopobtPlEFF8DvejiZMNJmEGFWowbOMYlfPitm7wm%2Bhc%2FQsnNE7L5ALj7sFnm8AzLKqdUYgBjdy0Vh9CxhUciAmI3cWtC1eOacsZ3vysmK083cfKdDZ1IA34vsWFQ6MQZqrKSG4TZ3J8D68%2FQpYWPzTOsRnKOLZcKEaCitcM6M4LsCCxYOi9N0t152admjZr4IsHnCy44Uncz%2FweW%2FFOGLCEpjn%2FlVvtQUig5QAbJUt%2BquHl5ppTGcHWNIwz0jnrJx%2FKi9UZ8PM312lfL5U3RaJVzyEb8SNAG7OLyazY4jMx094weyjpz%2F0hWgAjXextm6zOnspvIz18UioFdNLHN%2BTI4OUL%2FosYNgWMS04DFxAF3ngohRpU463yO1DyA86HdZgIXeB%2B4kH5kahonYbwiANQdgsGnn1oT9HHij8p2wH8PBd%2FEt7xF6gsyYqU8dZX7gJSulHskGTcRshZlikZtP0AC9GvqUrhxA4wl7HlwAY6pgGaF6KwBUKDWb504hR788KUMcQt4mTVkskcNTqGUrMBOU6FOqxTYpm8pEy5vEODvZ%2BsC9l1yzxZ8tdeihz49lWzhHwIZeq1FDsoEvN7dkCyXXG%2F1%2BacMPmjFyWraSc%2Bjw%2B4fZSArZHiiy5lRcngd4hSrAZ9pfFlkHBGs6WBOwGBX28fI8zLQxG8HiHFpi5P9QF5XBEDT7vuCa3RJ5AM5O38rxfNkbWy&X-Amz-Signature=8ab2eda21e1333248f761b777b15e2f27d6d455301b1575b5b79e7451f844a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZQSJLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHap9UlUweVAmF0%2FJs3oECM%2FsVlR1wec%2FA96lpmV%2BRyAiB%2BdHI70nmYNB3jB%2FjNUcctGMOV9FCxjuGrm4VzDBeIdSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMCOKobIWtGVsgngX1KtwDW1H20PlSSlZkZo9avTaqKelfeNxFHD8GduEOyC2vIGf0s%2BB207DfC8LV8c5heD9XOhROxS4ObT7sKEWRWIyCcR%2FC%2Fqgy8yEorzj1QJ%2BoIrf%2F4baLO7ugeNEF2ceHmCRdp8WFAIH6EpZ69gmba3ZxWTRIZopobtPlEFF8DvejiZMNJmEGFWowbOMYlfPitm7wm%2Bhc%2FQsnNE7L5ALj7sFnm8AzLKqdUYgBjdy0Vh9CxhUciAmI3cWtC1eOacsZ3vysmK083cfKdDZ1IA34vsWFQ6MQZqrKSG4TZ3J8D68%2FQpYWPzTOsRnKOLZcKEaCitcM6M4LsCCxYOi9N0t152admjZr4IsHnCy44Uncz%2FweW%2FFOGLCEpjn%2FlVvtQUig5QAbJUt%2BquHl5ppTGcHWNIwz0jnrJx%2FKi9UZ8PM312lfL5U3RaJVzyEb8SNAG7OLyazY4jMx094weyjpz%2F0hWgAjXextm6zOnspvIz18UioFdNLHN%2BTI4OUL%2FosYNgWMS04DFxAF3ngohRpU463yO1DyA86HdZgIXeB%2B4kH5kahonYbwiANQdgsGnn1oT9HHij8p2wH8PBd%2FEt7xF6gsyYqU8dZX7gJSulHskGTcRshZlikZtP0AC9GvqUrhxA4wl7HlwAY6pgGaF6KwBUKDWb504hR788KUMcQt4mTVkskcNTqGUrMBOU6FOqxTYpm8pEy5vEODvZ%2BsC9l1yzxZ8tdeihz49lWzhHwIZeq1FDsoEvN7dkCyXXG%2F1%2BacMPmjFyWraSc%2Bjw%2B4fZSArZHiiy5lRcngd4hSrAZ9pfFlkHBGs6WBOwGBX28fI8zLQxG8HiHFpi5P9QF5XBEDT7vuCa3RJ5AM5O38rxfNkbWy&X-Amz-Signature=2a4995069cd7fcae7beed50b54d6b5dd67db44de9d754673b290c083446fca44&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZQSJLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHap9UlUweVAmF0%2FJs3oECM%2FsVlR1wec%2FA96lpmV%2BRyAiB%2BdHI70nmYNB3jB%2FjNUcctGMOV9FCxjuGrm4VzDBeIdSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMCOKobIWtGVsgngX1KtwDW1H20PlSSlZkZo9avTaqKelfeNxFHD8GduEOyC2vIGf0s%2BB207DfC8LV8c5heD9XOhROxS4ObT7sKEWRWIyCcR%2FC%2Fqgy8yEorzj1QJ%2BoIrf%2F4baLO7ugeNEF2ceHmCRdp8WFAIH6EpZ69gmba3ZxWTRIZopobtPlEFF8DvejiZMNJmEGFWowbOMYlfPitm7wm%2Bhc%2FQsnNE7L5ALj7sFnm8AzLKqdUYgBjdy0Vh9CxhUciAmI3cWtC1eOacsZ3vysmK083cfKdDZ1IA34vsWFQ6MQZqrKSG4TZ3J8D68%2FQpYWPzTOsRnKOLZcKEaCitcM6M4LsCCxYOi9N0t152admjZr4IsHnCy44Uncz%2FweW%2FFOGLCEpjn%2FlVvtQUig5QAbJUt%2BquHl5ppTGcHWNIwz0jnrJx%2FKi9UZ8PM312lfL5U3RaJVzyEb8SNAG7OLyazY4jMx094weyjpz%2F0hWgAjXextm6zOnspvIz18UioFdNLHN%2BTI4OUL%2FosYNgWMS04DFxAF3ngohRpU463yO1DyA86HdZgIXeB%2B4kH5kahonYbwiANQdgsGnn1oT9HHij8p2wH8PBd%2FEt7xF6gsyYqU8dZX7gJSulHskGTcRshZlikZtP0AC9GvqUrhxA4wl7HlwAY6pgGaF6KwBUKDWb504hR788KUMcQt4mTVkskcNTqGUrMBOU6FOqxTYpm8pEy5vEODvZ%2BsC9l1yzxZ8tdeihz49lWzhHwIZeq1FDsoEvN7dkCyXXG%2F1%2BacMPmjFyWraSc%2Bjw%2B4fZSArZHiiy5lRcngd4hSrAZ9pfFlkHBGs6WBOwGBX28fI8zLQxG8HiHFpi5P9QF5XBEDT7vuCa3RJ5AM5O38rxfNkbWy&X-Amz-Signature=ca91c3e39846d78047f67cfffd498a49401a61f9857b6a15dc9753184a48e55c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
