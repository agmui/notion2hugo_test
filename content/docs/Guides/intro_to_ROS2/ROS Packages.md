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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXEYLQM%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDelOCL0cY8Uqu7bRrSrm6iV%2Bf%2BcAO3oqjmPsQcfyOnAAIhAJuIm6FIHvOqN2MEeG%2FjDEyqYP%2Fvvxtpo1w0cCzw0koaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW9WiOP6JUsWCf6eUq3AObq2ybKc%2B3qlSf7ue5QjBKhcu2BBXniMloqp2ZRXpg4L1KnrA4H1voorTY9h76i2KOkIxOtbN%2F7KMMvFn%2Bh9cB5XI4m7wPJPLuicKsqIuKVG1OZxvFEA7hEbEaepi64iK7bvDe7DktUv4i9ekN5U3T7WA7uR%2B9Z4V1MH0H3KvL5qeMfEl02RhC5x02HBVuymERW6rf4EG%2FxYMIJzAKcfSgESGUqA%2Ba3TFHUO2TJOoQk0b6e4nDMOJUM4EuKY3eQZKXMZz6g%2BOzG%2Fjit%2F0o4yeDKjo%2F0Oj4AK5TymxcdtKRAIiZVF9S61pHRhKO6Owqg0DyTENM8mrvWJbhnrSQBp19yFE1vOrVKjNXg4ntyksXbrwc4Q1FgdK1PiO399uYUKRSbIoTDjKzJFmDCbMr6nuG%2ByfH93j%2BpKfx33kFDt%2Bp%2Frc%2BqpNTFGKughYZ0g7uhQM341fEu%2B5z3DMRNnzFwLWmPitj%2BpFZNgym%2B6eIDqO%2BhRnzVmPimWEsm7zIqZ9KF5U1P1bNv3L%2FYrKKm85yY1SxrYsdEvJSnnHkE5fOjT9kh%2FYDmDtN5OHo499CSLm%2BbrrHdavsVzAB9RZm%2BmVJSskk0DEB9E67uYj%2FcTIr4qlr7UEB23Xluu0SXuPWljCYrY3KBjqkAaADtKFeGJlmjXUxdT4U6tYsXm35EhCrSZl3vI%2FTUzjvFZp0pwa3083MXfJVFx2cAtM19B%2BKTVhHDdq2vSg22Cu8uZVOynS%2FBaNfwNVFs%2BmZqHdyKg1oOHuB1UouQ7dop9%2FgyC1xpxvJb0%2FKPgGcIOA9NS1yLlOsfjI4LegB0IagQ%2F75o4Gc1PK7T9wPMg8xBh2H6xR0t4%2FQlM67I7pXW1MquyJg&X-Amz-Signature=f1db256a63313c6528d4c48cf2e2c20a8b0571a38aed7d39a94bd08654ddd6a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXEYLQM%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDelOCL0cY8Uqu7bRrSrm6iV%2Bf%2BcAO3oqjmPsQcfyOnAAIhAJuIm6FIHvOqN2MEeG%2FjDEyqYP%2Fvvxtpo1w0cCzw0koaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW9WiOP6JUsWCf6eUq3AObq2ybKc%2B3qlSf7ue5QjBKhcu2BBXniMloqp2ZRXpg4L1KnrA4H1voorTY9h76i2KOkIxOtbN%2F7KMMvFn%2Bh9cB5XI4m7wPJPLuicKsqIuKVG1OZxvFEA7hEbEaepi64iK7bvDe7DktUv4i9ekN5U3T7WA7uR%2B9Z4V1MH0H3KvL5qeMfEl02RhC5x02HBVuymERW6rf4EG%2FxYMIJzAKcfSgESGUqA%2Ba3TFHUO2TJOoQk0b6e4nDMOJUM4EuKY3eQZKXMZz6g%2BOzG%2Fjit%2F0o4yeDKjo%2F0Oj4AK5TymxcdtKRAIiZVF9S61pHRhKO6Owqg0DyTENM8mrvWJbhnrSQBp19yFE1vOrVKjNXg4ntyksXbrwc4Q1FgdK1PiO399uYUKRSbIoTDjKzJFmDCbMr6nuG%2ByfH93j%2BpKfx33kFDt%2Bp%2Frc%2BqpNTFGKughYZ0g7uhQM341fEu%2B5z3DMRNnzFwLWmPitj%2BpFZNgym%2B6eIDqO%2BhRnzVmPimWEsm7zIqZ9KF5U1P1bNv3L%2FYrKKm85yY1SxrYsdEvJSnnHkE5fOjT9kh%2FYDmDtN5OHo499CSLm%2BbrrHdavsVzAB9RZm%2BmVJSskk0DEB9E67uYj%2FcTIr4qlr7UEB23Xluu0SXuPWljCYrY3KBjqkAaADtKFeGJlmjXUxdT4U6tYsXm35EhCrSZl3vI%2FTUzjvFZp0pwa3083MXfJVFx2cAtM19B%2BKTVhHDdq2vSg22Cu8uZVOynS%2FBaNfwNVFs%2BmZqHdyKg1oOHuB1UouQ7dop9%2FgyC1xpxvJb0%2FKPgGcIOA9NS1yLlOsfjI4LegB0IagQ%2F75o4Gc1PK7T9wPMg8xBh2H6xR0t4%2FQlM67I7pXW1MquyJg&X-Amz-Signature=71f8778c354a0dd2568d02fe01bf7a3f99903df092ef21c11f58e35d84b99684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXEYLQM%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDelOCL0cY8Uqu7bRrSrm6iV%2Bf%2BcAO3oqjmPsQcfyOnAAIhAJuIm6FIHvOqN2MEeG%2FjDEyqYP%2Fvvxtpo1w0cCzw0koaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW9WiOP6JUsWCf6eUq3AObq2ybKc%2B3qlSf7ue5QjBKhcu2BBXniMloqp2ZRXpg4L1KnrA4H1voorTY9h76i2KOkIxOtbN%2F7KMMvFn%2Bh9cB5XI4m7wPJPLuicKsqIuKVG1OZxvFEA7hEbEaepi64iK7bvDe7DktUv4i9ekN5U3T7WA7uR%2B9Z4V1MH0H3KvL5qeMfEl02RhC5x02HBVuymERW6rf4EG%2FxYMIJzAKcfSgESGUqA%2Ba3TFHUO2TJOoQk0b6e4nDMOJUM4EuKY3eQZKXMZz6g%2BOzG%2Fjit%2F0o4yeDKjo%2F0Oj4AK5TymxcdtKRAIiZVF9S61pHRhKO6Owqg0DyTENM8mrvWJbhnrSQBp19yFE1vOrVKjNXg4ntyksXbrwc4Q1FgdK1PiO399uYUKRSbIoTDjKzJFmDCbMr6nuG%2ByfH93j%2BpKfx33kFDt%2Bp%2Frc%2BqpNTFGKughYZ0g7uhQM341fEu%2B5z3DMRNnzFwLWmPitj%2BpFZNgym%2B6eIDqO%2BhRnzVmPimWEsm7zIqZ9KF5U1P1bNv3L%2FYrKKm85yY1SxrYsdEvJSnnHkE5fOjT9kh%2FYDmDtN5OHo499CSLm%2BbrrHdavsVzAB9RZm%2BmVJSskk0DEB9E67uYj%2FcTIr4qlr7UEB23Xluu0SXuPWljCYrY3KBjqkAaADtKFeGJlmjXUxdT4U6tYsXm35EhCrSZl3vI%2FTUzjvFZp0pwa3083MXfJVFx2cAtM19B%2BKTVhHDdq2vSg22Cu8uZVOynS%2FBaNfwNVFs%2BmZqHdyKg1oOHuB1UouQ7dop9%2FgyC1xpxvJb0%2FKPgGcIOA9NS1yLlOsfjI4LegB0IagQ%2F75o4Gc1PK7T9wPMg8xBh2H6xR0t4%2FQlM67I7pXW1MquyJg&X-Amz-Signature=21954cb0c55cdb7e8c58c1b433ef03293ed2ae3e2efbb52399e7713728f0b31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXEYLQM%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDelOCL0cY8Uqu7bRrSrm6iV%2Bf%2BcAO3oqjmPsQcfyOnAAIhAJuIm6FIHvOqN2MEeG%2FjDEyqYP%2Fvvxtpo1w0cCzw0koaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW9WiOP6JUsWCf6eUq3AObq2ybKc%2B3qlSf7ue5QjBKhcu2BBXniMloqp2ZRXpg4L1KnrA4H1voorTY9h76i2KOkIxOtbN%2F7KMMvFn%2Bh9cB5XI4m7wPJPLuicKsqIuKVG1OZxvFEA7hEbEaepi64iK7bvDe7DktUv4i9ekN5U3T7WA7uR%2B9Z4V1MH0H3KvL5qeMfEl02RhC5x02HBVuymERW6rf4EG%2FxYMIJzAKcfSgESGUqA%2Ba3TFHUO2TJOoQk0b6e4nDMOJUM4EuKY3eQZKXMZz6g%2BOzG%2Fjit%2F0o4yeDKjo%2F0Oj4AK5TymxcdtKRAIiZVF9S61pHRhKO6Owqg0DyTENM8mrvWJbhnrSQBp19yFE1vOrVKjNXg4ntyksXbrwc4Q1FgdK1PiO399uYUKRSbIoTDjKzJFmDCbMr6nuG%2ByfH93j%2BpKfx33kFDt%2Bp%2Frc%2BqpNTFGKughYZ0g7uhQM341fEu%2B5z3DMRNnzFwLWmPitj%2BpFZNgym%2B6eIDqO%2BhRnzVmPimWEsm7zIqZ9KF5U1P1bNv3L%2FYrKKm85yY1SxrYsdEvJSnnHkE5fOjT9kh%2FYDmDtN5OHo499CSLm%2BbrrHdavsVzAB9RZm%2BmVJSskk0DEB9E67uYj%2FcTIr4qlr7UEB23Xluu0SXuPWljCYrY3KBjqkAaADtKFeGJlmjXUxdT4U6tYsXm35EhCrSZl3vI%2FTUzjvFZp0pwa3083MXfJVFx2cAtM19B%2BKTVhHDdq2vSg22Cu8uZVOynS%2FBaNfwNVFs%2BmZqHdyKg1oOHuB1UouQ7dop9%2FgyC1xpxvJb0%2FKPgGcIOA9NS1yLlOsfjI4LegB0IagQ%2F75o4Gc1PK7T9wPMg8xBh2H6xR0t4%2FQlM67I7pXW1MquyJg&X-Amz-Signature=2456e3e816271ba9b93d63982ff1464a3b8d0b962c892fe28f659e6d293c3f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXEYLQM%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDelOCL0cY8Uqu7bRrSrm6iV%2Bf%2BcAO3oqjmPsQcfyOnAAIhAJuIm6FIHvOqN2MEeG%2FjDEyqYP%2Fvvxtpo1w0cCzw0koaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW9WiOP6JUsWCf6eUq3AObq2ybKc%2B3qlSf7ue5QjBKhcu2BBXniMloqp2ZRXpg4L1KnrA4H1voorTY9h76i2KOkIxOtbN%2F7KMMvFn%2Bh9cB5XI4m7wPJPLuicKsqIuKVG1OZxvFEA7hEbEaepi64iK7bvDe7DktUv4i9ekN5U3T7WA7uR%2B9Z4V1MH0H3KvL5qeMfEl02RhC5x02HBVuymERW6rf4EG%2FxYMIJzAKcfSgESGUqA%2Ba3TFHUO2TJOoQk0b6e4nDMOJUM4EuKY3eQZKXMZz6g%2BOzG%2Fjit%2F0o4yeDKjo%2F0Oj4AK5TymxcdtKRAIiZVF9S61pHRhKO6Owqg0DyTENM8mrvWJbhnrSQBp19yFE1vOrVKjNXg4ntyksXbrwc4Q1FgdK1PiO399uYUKRSbIoTDjKzJFmDCbMr6nuG%2ByfH93j%2BpKfx33kFDt%2Bp%2Frc%2BqpNTFGKughYZ0g7uhQM341fEu%2B5z3DMRNnzFwLWmPitj%2BpFZNgym%2B6eIDqO%2BhRnzVmPimWEsm7zIqZ9KF5U1P1bNv3L%2FYrKKm85yY1SxrYsdEvJSnnHkE5fOjT9kh%2FYDmDtN5OHo499CSLm%2BbrrHdavsVzAB9RZm%2BmVJSskk0DEB9E67uYj%2FcTIr4qlr7UEB23Xluu0SXuPWljCYrY3KBjqkAaADtKFeGJlmjXUxdT4U6tYsXm35EhCrSZl3vI%2FTUzjvFZp0pwa3083MXfJVFx2cAtM19B%2BKTVhHDdq2vSg22Cu8uZVOynS%2FBaNfwNVFs%2BmZqHdyKg1oOHuB1UouQ7dop9%2FgyC1xpxvJb0%2FKPgGcIOA9NS1yLlOsfjI4LegB0IagQ%2F75o4Gc1PK7T9wPMg8xBh2H6xR0t4%2FQlM67I7pXW1MquyJg&X-Amz-Signature=84700632a5d69ec7ec559bfdcde4650868bf308e9f091bf686f8c324dd9276a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXEYLQM%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDelOCL0cY8Uqu7bRrSrm6iV%2Bf%2BcAO3oqjmPsQcfyOnAAIhAJuIm6FIHvOqN2MEeG%2FjDEyqYP%2Fvvxtpo1w0cCzw0koaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW9WiOP6JUsWCf6eUq3AObq2ybKc%2B3qlSf7ue5QjBKhcu2BBXniMloqp2ZRXpg4L1KnrA4H1voorTY9h76i2KOkIxOtbN%2F7KMMvFn%2Bh9cB5XI4m7wPJPLuicKsqIuKVG1OZxvFEA7hEbEaepi64iK7bvDe7DktUv4i9ekN5U3T7WA7uR%2B9Z4V1MH0H3KvL5qeMfEl02RhC5x02HBVuymERW6rf4EG%2FxYMIJzAKcfSgESGUqA%2Ba3TFHUO2TJOoQk0b6e4nDMOJUM4EuKY3eQZKXMZz6g%2BOzG%2Fjit%2F0o4yeDKjo%2F0Oj4AK5TymxcdtKRAIiZVF9S61pHRhKO6Owqg0DyTENM8mrvWJbhnrSQBp19yFE1vOrVKjNXg4ntyksXbrwc4Q1FgdK1PiO399uYUKRSbIoTDjKzJFmDCbMr6nuG%2ByfH93j%2BpKfx33kFDt%2Bp%2Frc%2BqpNTFGKughYZ0g7uhQM341fEu%2B5z3DMRNnzFwLWmPitj%2BpFZNgym%2B6eIDqO%2BhRnzVmPimWEsm7zIqZ9KF5U1P1bNv3L%2FYrKKm85yY1SxrYsdEvJSnnHkE5fOjT9kh%2FYDmDtN5OHo499CSLm%2BbrrHdavsVzAB9RZm%2BmVJSskk0DEB9E67uYj%2FcTIr4qlr7UEB23Xluu0SXuPWljCYrY3KBjqkAaADtKFeGJlmjXUxdT4U6tYsXm35EhCrSZl3vI%2FTUzjvFZp0pwa3083MXfJVFx2cAtM19B%2BKTVhHDdq2vSg22Cu8uZVOynS%2FBaNfwNVFs%2BmZqHdyKg1oOHuB1UouQ7dop9%2FgyC1xpxvJb0%2FKPgGcIOA9NS1yLlOsfjI4LegB0IagQ%2F75o4Gc1PK7T9wPMg8xBh2H6xR0t4%2FQlM67I7pXW1MquyJg&X-Amz-Signature=49c26ed291b9a4bab5f62dc867cf123b79009a18075be448a71de2c22b86ced7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXEYLQM%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDelOCL0cY8Uqu7bRrSrm6iV%2Bf%2BcAO3oqjmPsQcfyOnAAIhAJuIm6FIHvOqN2MEeG%2FjDEyqYP%2Fvvxtpo1w0cCzw0koaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW9WiOP6JUsWCf6eUq3AObq2ybKc%2B3qlSf7ue5QjBKhcu2BBXniMloqp2ZRXpg4L1KnrA4H1voorTY9h76i2KOkIxOtbN%2F7KMMvFn%2Bh9cB5XI4m7wPJPLuicKsqIuKVG1OZxvFEA7hEbEaepi64iK7bvDe7DktUv4i9ekN5U3T7WA7uR%2B9Z4V1MH0H3KvL5qeMfEl02RhC5x02HBVuymERW6rf4EG%2FxYMIJzAKcfSgESGUqA%2Ba3TFHUO2TJOoQk0b6e4nDMOJUM4EuKY3eQZKXMZz6g%2BOzG%2Fjit%2F0o4yeDKjo%2F0Oj4AK5TymxcdtKRAIiZVF9S61pHRhKO6Owqg0DyTENM8mrvWJbhnrSQBp19yFE1vOrVKjNXg4ntyksXbrwc4Q1FgdK1PiO399uYUKRSbIoTDjKzJFmDCbMr6nuG%2ByfH93j%2BpKfx33kFDt%2Bp%2Frc%2BqpNTFGKughYZ0g7uhQM341fEu%2B5z3DMRNnzFwLWmPitj%2BpFZNgym%2B6eIDqO%2BhRnzVmPimWEsm7zIqZ9KF5U1P1bNv3L%2FYrKKm85yY1SxrYsdEvJSnnHkE5fOjT9kh%2FYDmDtN5OHo499CSLm%2BbrrHdavsVzAB9RZm%2BmVJSskk0DEB9E67uYj%2FcTIr4qlr7UEB23Xluu0SXuPWljCYrY3KBjqkAaADtKFeGJlmjXUxdT4U6tYsXm35EhCrSZl3vI%2FTUzjvFZp0pwa3083MXfJVFx2cAtM19B%2BKTVhHDdq2vSg22Cu8uZVOynS%2FBaNfwNVFs%2BmZqHdyKg1oOHuB1UouQ7dop9%2FgyC1xpxvJb0%2FKPgGcIOA9NS1yLlOsfjI4LegB0IagQ%2F75o4Gc1PK7T9wPMg8xBh2H6xR0t4%2FQlM67I7pXW1MquyJg&X-Amz-Signature=e50346d3cbb8a0163beeebe1daad2d5906dd5cdffa64431dc19f603623c67649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
