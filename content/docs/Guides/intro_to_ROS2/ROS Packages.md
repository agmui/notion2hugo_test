---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ZSQFB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICBWQB2ghlZG0qgWjT26F%2BBuZj0VlwD2FxJKqAlWUrfrAiEAv4JJal900m7YFu8KIUTqc4JmVe%2FOkj6zPis%2FvblLYdoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKrpYvNpH3AvQRFUTyrcA%2FLKGvVlfGt6CkfHNEk5H5sdL4H2xiLaMVfDrBNwnAKhMqMHXQ0wWHVld%2FafcnaGZgjZtQxsBGW%2BjAGDwoXwriB1c6Mq6FYu6kFp1zQi5jG8TNmsrh6a4qn39JKLNq6T%2F4rm8qJerMK%2BuOnCRST2uOzr%2Fnk6NqtI6OibjC%2BJbMpQmCtMthQkGoOqd2R5cxbivvQ0qDZuabz%2B%2B%2FMYFbisHIDn8atf8AhAOGlZJ6G7xHYVPHy0Vn4%2F1ZU8m%2FPU3qhcom1ykWFIf%2BQ0jAvg74y3XGgaGgl17LZJuBmbBIRJnJYjn8KUhw%2BZqOowoIgafMxUcCf3QcWj6jZ%2BcYwCNP5cMAtBxF16pv95eimeMVkYnVJw%2F%2B1pR88BPwnTMf%2B6mXByrSoPJ%2F11h6L9lMIGkFj%2BHKuJH12tHNujrwjU5uPQp06wSBBxcrJhD3Rcqvq3RhpyMUEl8%2BIbI19LzEMtMm%2FAB8GVx2aLjxVdMBg53bH0sYFYL5h85%2B%2BmynVJ1u4pUIO4PwH22baP9Jf4uUfAyu1cuh066A9c9c8xGg9wlXluyJtbD6pcltGlnot38ppINCbKCWi9tX0Ukf2MUrA7WpVi33r8l3iOus2BjU0BDUJVT%2Fo14u2bYAmY9TTz4HxHMOX%2B28MGOqUBXmjFCMTXQbClN00RuK61NAcBJAnPmy7MikyVzbUw877uVBw%2B6dRMf1AsRsuJ8wFhG9bepDDjpAm13UZF%2Bee5l4d2rptHuwqGyfdMhxnGDxHtjDQXLcgtPn7ir9dBOvjfXXGK%2Brc3ns8J%2FOUbiTdDCWMRPE1NPz%2F5uhmovTGLQKB5mYdoSIixR4W3OUhFehEb2GxaQHfdPRoBwWuCrYQPLdrkHlEo&X-Amz-Signature=9c8d38e6566a25bbcc4b1058f4f4195c413b4acd11df77ccae9433af073dd41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ZSQFB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICBWQB2ghlZG0qgWjT26F%2BBuZj0VlwD2FxJKqAlWUrfrAiEAv4JJal900m7YFu8KIUTqc4JmVe%2FOkj6zPis%2FvblLYdoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKrpYvNpH3AvQRFUTyrcA%2FLKGvVlfGt6CkfHNEk5H5sdL4H2xiLaMVfDrBNwnAKhMqMHXQ0wWHVld%2FafcnaGZgjZtQxsBGW%2BjAGDwoXwriB1c6Mq6FYu6kFp1zQi5jG8TNmsrh6a4qn39JKLNq6T%2F4rm8qJerMK%2BuOnCRST2uOzr%2Fnk6NqtI6OibjC%2BJbMpQmCtMthQkGoOqd2R5cxbivvQ0qDZuabz%2B%2B%2FMYFbisHIDn8atf8AhAOGlZJ6G7xHYVPHy0Vn4%2F1ZU8m%2FPU3qhcom1ykWFIf%2BQ0jAvg74y3XGgaGgl17LZJuBmbBIRJnJYjn8KUhw%2BZqOowoIgafMxUcCf3QcWj6jZ%2BcYwCNP5cMAtBxF16pv95eimeMVkYnVJw%2F%2B1pR88BPwnTMf%2B6mXByrSoPJ%2F11h6L9lMIGkFj%2BHKuJH12tHNujrwjU5uPQp06wSBBxcrJhD3Rcqvq3RhpyMUEl8%2BIbI19LzEMtMm%2FAB8GVx2aLjxVdMBg53bH0sYFYL5h85%2B%2BmynVJ1u4pUIO4PwH22baP9Jf4uUfAyu1cuh066A9c9c8xGg9wlXluyJtbD6pcltGlnot38ppINCbKCWi9tX0Ukf2MUrA7WpVi33r8l3iOus2BjU0BDUJVT%2Fo14u2bYAmY9TTz4HxHMOX%2B28MGOqUBXmjFCMTXQbClN00RuK61NAcBJAnPmy7MikyVzbUw877uVBw%2B6dRMf1AsRsuJ8wFhG9bepDDjpAm13UZF%2Bee5l4d2rptHuwqGyfdMhxnGDxHtjDQXLcgtPn7ir9dBOvjfXXGK%2Brc3ns8J%2FOUbiTdDCWMRPE1NPz%2F5uhmovTGLQKB5mYdoSIixR4W3OUhFehEb2GxaQHfdPRoBwWuCrYQPLdrkHlEo&X-Amz-Signature=8bff005eefbf5771e6bf8e5c4623299942b2b461a316521b0262366464e0c077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ZSQFB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICBWQB2ghlZG0qgWjT26F%2BBuZj0VlwD2FxJKqAlWUrfrAiEAv4JJal900m7YFu8KIUTqc4JmVe%2FOkj6zPis%2FvblLYdoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKrpYvNpH3AvQRFUTyrcA%2FLKGvVlfGt6CkfHNEk5H5sdL4H2xiLaMVfDrBNwnAKhMqMHXQ0wWHVld%2FafcnaGZgjZtQxsBGW%2BjAGDwoXwriB1c6Mq6FYu6kFp1zQi5jG8TNmsrh6a4qn39JKLNq6T%2F4rm8qJerMK%2BuOnCRST2uOzr%2Fnk6NqtI6OibjC%2BJbMpQmCtMthQkGoOqd2R5cxbivvQ0qDZuabz%2B%2B%2FMYFbisHIDn8atf8AhAOGlZJ6G7xHYVPHy0Vn4%2F1ZU8m%2FPU3qhcom1ykWFIf%2BQ0jAvg74y3XGgaGgl17LZJuBmbBIRJnJYjn8KUhw%2BZqOowoIgafMxUcCf3QcWj6jZ%2BcYwCNP5cMAtBxF16pv95eimeMVkYnVJw%2F%2B1pR88BPwnTMf%2B6mXByrSoPJ%2F11h6L9lMIGkFj%2BHKuJH12tHNujrwjU5uPQp06wSBBxcrJhD3Rcqvq3RhpyMUEl8%2BIbI19LzEMtMm%2FAB8GVx2aLjxVdMBg53bH0sYFYL5h85%2B%2BmynVJ1u4pUIO4PwH22baP9Jf4uUfAyu1cuh066A9c9c8xGg9wlXluyJtbD6pcltGlnot38ppINCbKCWi9tX0Ukf2MUrA7WpVi33r8l3iOus2BjU0BDUJVT%2Fo14u2bYAmY9TTz4HxHMOX%2B28MGOqUBXmjFCMTXQbClN00RuK61NAcBJAnPmy7MikyVzbUw877uVBw%2B6dRMf1AsRsuJ8wFhG9bepDDjpAm13UZF%2Bee5l4d2rptHuwqGyfdMhxnGDxHtjDQXLcgtPn7ir9dBOvjfXXGK%2Brc3ns8J%2FOUbiTdDCWMRPE1NPz%2F5uhmovTGLQKB5mYdoSIixR4W3OUhFehEb2GxaQHfdPRoBwWuCrYQPLdrkHlEo&X-Amz-Signature=9141401bcaa5d35cae0fe7fdcef1d4e6e10ca10fd81dfcff9bcb6ad680b3f97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ZSQFB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICBWQB2ghlZG0qgWjT26F%2BBuZj0VlwD2FxJKqAlWUrfrAiEAv4JJal900m7YFu8KIUTqc4JmVe%2FOkj6zPis%2FvblLYdoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKrpYvNpH3AvQRFUTyrcA%2FLKGvVlfGt6CkfHNEk5H5sdL4H2xiLaMVfDrBNwnAKhMqMHXQ0wWHVld%2FafcnaGZgjZtQxsBGW%2BjAGDwoXwriB1c6Mq6FYu6kFp1zQi5jG8TNmsrh6a4qn39JKLNq6T%2F4rm8qJerMK%2BuOnCRST2uOzr%2Fnk6NqtI6OibjC%2BJbMpQmCtMthQkGoOqd2R5cxbivvQ0qDZuabz%2B%2B%2FMYFbisHIDn8atf8AhAOGlZJ6G7xHYVPHy0Vn4%2F1ZU8m%2FPU3qhcom1ykWFIf%2BQ0jAvg74y3XGgaGgl17LZJuBmbBIRJnJYjn8KUhw%2BZqOowoIgafMxUcCf3QcWj6jZ%2BcYwCNP5cMAtBxF16pv95eimeMVkYnVJw%2F%2B1pR88BPwnTMf%2B6mXByrSoPJ%2F11h6L9lMIGkFj%2BHKuJH12tHNujrwjU5uPQp06wSBBxcrJhD3Rcqvq3RhpyMUEl8%2BIbI19LzEMtMm%2FAB8GVx2aLjxVdMBg53bH0sYFYL5h85%2B%2BmynVJ1u4pUIO4PwH22baP9Jf4uUfAyu1cuh066A9c9c8xGg9wlXluyJtbD6pcltGlnot38ppINCbKCWi9tX0Ukf2MUrA7WpVi33r8l3iOus2BjU0BDUJVT%2Fo14u2bYAmY9TTz4HxHMOX%2B28MGOqUBXmjFCMTXQbClN00RuK61NAcBJAnPmy7MikyVzbUw877uVBw%2B6dRMf1AsRsuJ8wFhG9bepDDjpAm13UZF%2Bee5l4d2rptHuwqGyfdMhxnGDxHtjDQXLcgtPn7ir9dBOvjfXXGK%2Brc3ns8J%2FOUbiTdDCWMRPE1NPz%2F5uhmovTGLQKB5mYdoSIixR4W3OUhFehEb2GxaQHfdPRoBwWuCrYQPLdrkHlEo&X-Amz-Signature=a92ea8e4bf3c35aca30a544b4a73d4a92b05eee98b0990e0895258688134e169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ZSQFB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICBWQB2ghlZG0qgWjT26F%2BBuZj0VlwD2FxJKqAlWUrfrAiEAv4JJal900m7YFu8KIUTqc4JmVe%2FOkj6zPis%2FvblLYdoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKrpYvNpH3AvQRFUTyrcA%2FLKGvVlfGt6CkfHNEk5H5sdL4H2xiLaMVfDrBNwnAKhMqMHXQ0wWHVld%2FafcnaGZgjZtQxsBGW%2BjAGDwoXwriB1c6Mq6FYu6kFp1zQi5jG8TNmsrh6a4qn39JKLNq6T%2F4rm8qJerMK%2BuOnCRST2uOzr%2Fnk6NqtI6OibjC%2BJbMpQmCtMthQkGoOqd2R5cxbivvQ0qDZuabz%2B%2B%2FMYFbisHIDn8atf8AhAOGlZJ6G7xHYVPHy0Vn4%2F1ZU8m%2FPU3qhcom1ykWFIf%2BQ0jAvg74y3XGgaGgl17LZJuBmbBIRJnJYjn8KUhw%2BZqOowoIgafMxUcCf3QcWj6jZ%2BcYwCNP5cMAtBxF16pv95eimeMVkYnVJw%2F%2B1pR88BPwnTMf%2B6mXByrSoPJ%2F11h6L9lMIGkFj%2BHKuJH12tHNujrwjU5uPQp06wSBBxcrJhD3Rcqvq3RhpyMUEl8%2BIbI19LzEMtMm%2FAB8GVx2aLjxVdMBg53bH0sYFYL5h85%2B%2BmynVJ1u4pUIO4PwH22baP9Jf4uUfAyu1cuh066A9c9c8xGg9wlXluyJtbD6pcltGlnot38ppINCbKCWi9tX0Ukf2MUrA7WpVi33r8l3iOus2BjU0BDUJVT%2Fo14u2bYAmY9TTz4HxHMOX%2B28MGOqUBXmjFCMTXQbClN00RuK61NAcBJAnPmy7MikyVzbUw877uVBw%2B6dRMf1AsRsuJ8wFhG9bepDDjpAm13UZF%2Bee5l4d2rptHuwqGyfdMhxnGDxHtjDQXLcgtPn7ir9dBOvjfXXGK%2Brc3ns8J%2FOUbiTdDCWMRPE1NPz%2F5uhmovTGLQKB5mYdoSIixR4W3OUhFehEb2GxaQHfdPRoBwWuCrYQPLdrkHlEo&X-Amz-Signature=cfa40a90010a1861e6588a4886c088cab0467ea92f6c957abb2d450e6fcfb8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ZSQFB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICBWQB2ghlZG0qgWjT26F%2BBuZj0VlwD2FxJKqAlWUrfrAiEAv4JJal900m7YFu8KIUTqc4JmVe%2FOkj6zPis%2FvblLYdoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKrpYvNpH3AvQRFUTyrcA%2FLKGvVlfGt6CkfHNEk5H5sdL4H2xiLaMVfDrBNwnAKhMqMHXQ0wWHVld%2FafcnaGZgjZtQxsBGW%2BjAGDwoXwriB1c6Mq6FYu6kFp1zQi5jG8TNmsrh6a4qn39JKLNq6T%2F4rm8qJerMK%2BuOnCRST2uOzr%2Fnk6NqtI6OibjC%2BJbMpQmCtMthQkGoOqd2R5cxbivvQ0qDZuabz%2B%2B%2FMYFbisHIDn8atf8AhAOGlZJ6G7xHYVPHy0Vn4%2F1ZU8m%2FPU3qhcom1ykWFIf%2BQ0jAvg74y3XGgaGgl17LZJuBmbBIRJnJYjn8KUhw%2BZqOowoIgafMxUcCf3QcWj6jZ%2BcYwCNP5cMAtBxF16pv95eimeMVkYnVJw%2F%2B1pR88BPwnTMf%2B6mXByrSoPJ%2F11h6L9lMIGkFj%2BHKuJH12tHNujrwjU5uPQp06wSBBxcrJhD3Rcqvq3RhpyMUEl8%2BIbI19LzEMtMm%2FAB8GVx2aLjxVdMBg53bH0sYFYL5h85%2B%2BmynVJ1u4pUIO4PwH22baP9Jf4uUfAyu1cuh066A9c9c8xGg9wlXluyJtbD6pcltGlnot38ppINCbKCWi9tX0Ukf2MUrA7WpVi33r8l3iOus2BjU0BDUJVT%2Fo14u2bYAmY9TTz4HxHMOX%2B28MGOqUBXmjFCMTXQbClN00RuK61NAcBJAnPmy7MikyVzbUw877uVBw%2B6dRMf1AsRsuJ8wFhG9bepDDjpAm13UZF%2Bee5l4d2rptHuwqGyfdMhxnGDxHtjDQXLcgtPn7ir9dBOvjfXXGK%2Brc3ns8J%2FOUbiTdDCWMRPE1NPz%2F5uhmovTGLQKB5mYdoSIixR4W3OUhFehEb2GxaQHfdPRoBwWuCrYQPLdrkHlEo&X-Amz-Signature=6cf23844fa9eb888462dd34e47ba83290bf7412fde4867a2807d129a72a420a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ZSQFB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICBWQB2ghlZG0qgWjT26F%2BBuZj0VlwD2FxJKqAlWUrfrAiEAv4JJal900m7YFu8KIUTqc4JmVe%2FOkj6zPis%2FvblLYdoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKrpYvNpH3AvQRFUTyrcA%2FLKGvVlfGt6CkfHNEk5H5sdL4H2xiLaMVfDrBNwnAKhMqMHXQ0wWHVld%2FafcnaGZgjZtQxsBGW%2BjAGDwoXwriB1c6Mq6FYu6kFp1zQi5jG8TNmsrh6a4qn39JKLNq6T%2F4rm8qJerMK%2BuOnCRST2uOzr%2Fnk6NqtI6OibjC%2BJbMpQmCtMthQkGoOqd2R5cxbivvQ0qDZuabz%2B%2B%2FMYFbisHIDn8atf8AhAOGlZJ6G7xHYVPHy0Vn4%2F1ZU8m%2FPU3qhcom1ykWFIf%2BQ0jAvg74y3XGgaGgl17LZJuBmbBIRJnJYjn8KUhw%2BZqOowoIgafMxUcCf3QcWj6jZ%2BcYwCNP5cMAtBxF16pv95eimeMVkYnVJw%2F%2B1pR88BPwnTMf%2B6mXByrSoPJ%2F11h6L9lMIGkFj%2BHKuJH12tHNujrwjU5uPQp06wSBBxcrJhD3Rcqvq3RhpyMUEl8%2BIbI19LzEMtMm%2FAB8GVx2aLjxVdMBg53bH0sYFYL5h85%2B%2BmynVJ1u4pUIO4PwH22baP9Jf4uUfAyu1cuh066A9c9c8xGg9wlXluyJtbD6pcltGlnot38ppINCbKCWi9tX0Ukf2MUrA7WpVi33r8l3iOus2BjU0BDUJVT%2Fo14u2bYAmY9TTz4HxHMOX%2B28MGOqUBXmjFCMTXQbClN00RuK61NAcBJAnPmy7MikyVzbUw877uVBw%2B6dRMf1AsRsuJ8wFhG9bepDDjpAm13UZF%2Bee5l4d2rptHuwqGyfdMhxnGDxHtjDQXLcgtPn7ir9dBOvjfXXGK%2Brc3ns8J%2FOUbiTdDCWMRPE1NPz%2F5uhmovTGLQKB5mYdoSIixR4W3OUhFehEb2GxaQHfdPRoBwWuCrYQPLdrkHlEo&X-Amz-Signature=f160c9cb17d75c633cf3235038251e029f968fadea2993f58eeebfb8cbdfd649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
