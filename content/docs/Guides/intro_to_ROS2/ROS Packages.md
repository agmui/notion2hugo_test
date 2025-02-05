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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVHEWZM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCVRc9f%2BvzKwL7PmmmEzEsRkymejb37YPL9wU0UN%2B9JZwIgHLDWU5bJ6zQhCVCrsmmo64osmCIrH17CuxIaR9n4%2Bqcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLmtXt1QlvgROWJU6ircA0fUr%2FI%2FnnBfdrmCHObXzB9OEdHFoXGyYnBi8c4LM1Y2wIGWvjrAwJlnRwj%2FuZ%2BA1QZs1dROJLbPKYOWjHZjadzwtDO89YLX1VkcCFKuPA3ClQ9vmrZ6l1rpZxhYCFk1pvXiOaWLluRVl%2FgKymCq0qGc9Iif1su5hzXVWD0OfQ4mL2Sm8ojOpT250d12YBQuaTdyZJvAPDMxREGVF%2BerMnuSbVzvt0daxYv%2F%2BZmK5gjO4XDahCnZMqr5jAqNMucxaf0B2WwiCguvBuXWKHZ%2FSMZPe362Ztvd3OfPIFbCqL4AD0hAN2rED18HzBoj473gNJvlh6JzCjMhu0MlamZucZ%2Fx3QVFTXx9WbQvqRKY0ZASN7t61soVKk%2FRgOXUzKF7%2FgchfV0Boig2YkgzRvfMYe6r999x%2BvA9y3VDduXzwMVJvMloA5a5o3rfj6oQ5NS4O0sOuohbUY8VeMcJ93rja9YoTHR3zO6GJ9woHYzT6OE1u6da1MvqUUlsTt6i6Q%2BP1ZOTnD%2BIAoK6X7VMskjv8PGdhCS1ntV%2BaSvTlhQ7uS4%2BOM00cKmRsUMOQP4OTN5kcvYg5i%2F%2BSN281ngkEflwV5yrufvQnmtZOmfDgNxlP8Ij%2BJZfNJT4D14a%2B6ZEMI3RjL0GOqUB0ycwuSffw%2BAD9EHfmfLSqsqrA4ZwfyUFQIMVadImWXqk7bfBoPtMl6jQsUy2XZ6mRyDoUR9hv5Btvq2kN3ngKADcx%2BR%2FE%2BEjnImeml6tj%2FgxdH6r1vHMKhUuL3erRH1LWmyyOJThTgfVeB%2FwIIAJILI6Vb2VzQ7tAOCjSCR6YTPcbu%2BNqz7vtyoPZgDSd6wSNFBgN%2Fqf1MuFmxJ%2Fc2yggRe2JGOJ&X-Amz-Signature=59f552c6b94fb2b0432e25f07295ef5ed67fc63a898f0dfb26e07594e75319df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVHEWZM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCVRc9f%2BvzKwL7PmmmEzEsRkymejb37YPL9wU0UN%2B9JZwIgHLDWU5bJ6zQhCVCrsmmo64osmCIrH17CuxIaR9n4%2Bqcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLmtXt1QlvgROWJU6ircA0fUr%2FI%2FnnBfdrmCHObXzB9OEdHFoXGyYnBi8c4LM1Y2wIGWvjrAwJlnRwj%2FuZ%2BA1QZs1dROJLbPKYOWjHZjadzwtDO89YLX1VkcCFKuPA3ClQ9vmrZ6l1rpZxhYCFk1pvXiOaWLluRVl%2FgKymCq0qGc9Iif1su5hzXVWD0OfQ4mL2Sm8ojOpT250d12YBQuaTdyZJvAPDMxREGVF%2BerMnuSbVzvt0daxYv%2F%2BZmK5gjO4XDahCnZMqr5jAqNMucxaf0B2WwiCguvBuXWKHZ%2FSMZPe362Ztvd3OfPIFbCqL4AD0hAN2rED18HzBoj473gNJvlh6JzCjMhu0MlamZucZ%2Fx3QVFTXx9WbQvqRKY0ZASN7t61soVKk%2FRgOXUzKF7%2FgchfV0Boig2YkgzRvfMYe6r999x%2BvA9y3VDduXzwMVJvMloA5a5o3rfj6oQ5NS4O0sOuohbUY8VeMcJ93rja9YoTHR3zO6GJ9woHYzT6OE1u6da1MvqUUlsTt6i6Q%2BP1ZOTnD%2BIAoK6X7VMskjv8PGdhCS1ntV%2BaSvTlhQ7uS4%2BOM00cKmRsUMOQP4OTN5kcvYg5i%2F%2BSN281ngkEflwV5yrufvQnmtZOmfDgNxlP8Ij%2BJZfNJT4D14a%2B6ZEMI3RjL0GOqUB0ycwuSffw%2BAD9EHfmfLSqsqrA4ZwfyUFQIMVadImWXqk7bfBoPtMl6jQsUy2XZ6mRyDoUR9hv5Btvq2kN3ngKADcx%2BR%2FE%2BEjnImeml6tj%2FgxdH6r1vHMKhUuL3erRH1LWmyyOJThTgfVeB%2FwIIAJILI6Vb2VzQ7tAOCjSCR6YTPcbu%2BNqz7vtyoPZgDSd6wSNFBgN%2Fqf1MuFmxJ%2Fc2yggRe2JGOJ&X-Amz-Signature=bf76543a9fe4f8efb2c441d9e24a317242e83bac502d224a550b71599594346a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVHEWZM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCVRc9f%2BvzKwL7PmmmEzEsRkymejb37YPL9wU0UN%2B9JZwIgHLDWU5bJ6zQhCVCrsmmo64osmCIrH17CuxIaR9n4%2Bqcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLmtXt1QlvgROWJU6ircA0fUr%2FI%2FnnBfdrmCHObXzB9OEdHFoXGyYnBi8c4LM1Y2wIGWvjrAwJlnRwj%2FuZ%2BA1QZs1dROJLbPKYOWjHZjadzwtDO89YLX1VkcCFKuPA3ClQ9vmrZ6l1rpZxhYCFk1pvXiOaWLluRVl%2FgKymCq0qGc9Iif1su5hzXVWD0OfQ4mL2Sm8ojOpT250d12YBQuaTdyZJvAPDMxREGVF%2BerMnuSbVzvt0daxYv%2F%2BZmK5gjO4XDahCnZMqr5jAqNMucxaf0B2WwiCguvBuXWKHZ%2FSMZPe362Ztvd3OfPIFbCqL4AD0hAN2rED18HzBoj473gNJvlh6JzCjMhu0MlamZucZ%2Fx3QVFTXx9WbQvqRKY0ZASN7t61soVKk%2FRgOXUzKF7%2FgchfV0Boig2YkgzRvfMYe6r999x%2BvA9y3VDduXzwMVJvMloA5a5o3rfj6oQ5NS4O0sOuohbUY8VeMcJ93rja9YoTHR3zO6GJ9woHYzT6OE1u6da1MvqUUlsTt6i6Q%2BP1ZOTnD%2BIAoK6X7VMskjv8PGdhCS1ntV%2BaSvTlhQ7uS4%2BOM00cKmRsUMOQP4OTN5kcvYg5i%2F%2BSN281ngkEflwV5yrufvQnmtZOmfDgNxlP8Ij%2BJZfNJT4D14a%2B6ZEMI3RjL0GOqUB0ycwuSffw%2BAD9EHfmfLSqsqrA4ZwfyUFQIMVadImWXqk7bfBoPtMl6jQsUy2XZ6mRyDoUR9hv5Btvq2kN3ngKADcx%2BR%2FE%2BEjnImeml6tj%2FgxdH6r1vHMKhUuL3erRH1LWmyyOJThTgfVeB%2FwIIAJILI6Vb2VzQ7tAOCjSCR6YTPcbu%2BNqz7vtyoPZgDSd6wSNFBgN%2Fqf1MuFmxJ%2Fc2yggRe2JGOJ&X-Amz-Signature=9cbc2bf57c91feea4a551c31e1d9476c7658f3064d8e6cf4d107851ef7c5d95c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVHEWZM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCVRc9f%2BvzKwL7PmmmEzEsRkymejb37YPL9wU0UN%2B9JZwIgHLDWU5bJ6zQhCVCrsmmo64osmCIrH17CuxIaR9n4%2Bqcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLmtXt1QlvgROWJU6ircA0fUr%2FI%2FnnBfdrmCHObXzB9OEdHFoXGyYnBi8c4LM1Y2wIGWvjrAwJlnRwj%2FuZ%2BA1QZs1dROJLbPKYOWjHZjadzwtDO89YLX1VkcCFKuPA3ClQ9vmrZ6l1rpZxhYCFk1pvXiOaWLluRVl%2FgKymCq0qGc9Iif1su5hzXVWD0OfQ4mL2Sm8ojOpT250d12YBQuaTdyZJvAPDMxREGVF%2BerMnuSbVzvt0daxYv%2F%2BZmK5gjO4XDahCnZMqr5jAqNMucxaf0B2WwiCguvBuXWKHZ%2FSMZPe362Ztvd3OfPIFbCqL4AD0hAN2rED18HzBoj473gNJvlh6JzCjMhu0MlamZucZ%2Fx3QVFTXx9WbQvqRKY0ZASN7t61soVKk%2FRgOXUzKF7%2FgchfV0Boig2YkgzRvfMYe6r999x%2BvA9y3VDduXzwMVJvMloA5a5o3rfj6oQ5NS4O0sOuohbUY8VeMcJ93rja9YoTHR3zO6GJ9woHYzT6OE1u6da1MvqUUlsTt6i6Q%2BP1ZOTnD%2BIAoK6X7VMskjv8PGdhCS1ntV%2BaSvTlhQ7uS4%2BOM00cKmRsUMOQP4OTN5kcvYg5i%2F%2BSN281ngkEflwV5yrufvQnmtZOmfDgNxlP8Ij%2BJZfNJT4D14a%2B6ZEMI3RjL0GOqUB0ycwuSffw%2BAD9EHfmfLSqsqrA4ZwfyUFQIMVadImWXqk7bfBoPtMl6jQsUy2XZ6mRyDoUR9hv5Btvq2kN3ngKADcx%2BR%2FE%2BEjnImeml6tj%2FgxdH6r1vHMKhUuL3erRH1LWmyyOJThTgfVeB%2FwIIAJILI6Vb2VzQ7tAOCjSCR6YTPcbu%2BNqz7vtyoPZgDSd6wSNFBgN%2Fqf1MuFmxJ%2Fc2yggRe2JGOJ&X-Amz-Signature=0c57205536da462695710ca0123bf68e1e1bce69f79bb06e8d053cd48c96122f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVHEWZM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCVRc9f%2BvzKwL7PmmmEzEsRkymejb37YPL9wU0UN%2B9JZwIgHLDWU5bJ6zQhCVCrsmmo64osmCIrH17CuxIaR9n4%2Bqcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLmtXt1QlvgROWJU6ircA0fUr%2FI%2FnnBfdrmCHObXzB9OEdHFoXGyYnBi8c4LM1Y2wIGWvjrAwJlnRwj%2FuZ%2BA1QZs1dROJLbPKYOWjHZjadzwtDO89YLX1VkcCFKuPA3ClQ9vmrZ6l1rpZxhYCFk1pvXiOaWLluRVl%2FgKymCq0qGc9Iif1su5hzXVWD0OfQ4mL2Sm8ojOpT250d12YBQuaTdyZJvAPDMxREGVF%2BerMnuSbVzvt0daxYv%2F%2BZmK5gjO4XDahCnZMqr5jAqNMucxaf0B2WwiCguvBuXWKHZ%2FSMZPe362Ztvd3OfPIFbCqL4AD0hAN2rED18HzBoj473gNJvlh6JzCjMhu0MlamZucZ%2Fx3QVFTXx9WbQvqRKY0ZASN7t61soVKk%2FRgOXUzKF7%2FgchfV0Boig2YkgzRvfMYe6r999x%2BvA9y3VDduXzwMVJvMloA5a5o3rfj6oQ5NS4O0sOuohbUY8VeMcJ93rja9YoTHR3zO6GJ9woHYzT6OE1u6da1MvqUUlsTt6i6Q%2BP1ZOTnD%2BIAoK6X7VMskjv8PGdhCS1ntV%2BaSvTlhQ7uS4%2BOM00cKmRsUMOQP4OTN5kcvYg5i%2F%2BSN281ngkEflwV5yrufvQnmtZOmfDgNxlP8Ij%2BJZfNJT4D14a%2B6ZEMI3RjL0GOqUB0ycwuSffw%2BAD9EHfmfLSqsqrA4ZwfyUFQIMVadImWXqk7bfBoPtMl6jQsUy2XZ6mRyDoUR9hv5Btvq2kN3ngKADcx%2BR%2FE%2BEjnImeml6tj%2FgxdH6r1vHMKhUuL3erRH1LWmyyOJThTgfVeB%2FwIIAJILI6Vb2VzQ7tAOCjSCR6YTPcbu%2BNqz7vtyoPZgDSd6wSNFBgN%2Fqf1MuFmxJ%2Fc2yggRe2JGOJ&X-Amz-Signature=4bcdf5837dc60340cb88e62136509f7e90fec90268589311f4fed1a4bdbe1979&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVHEWZM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCVRc9f%2BvzKwL7PmmmEzEsRkymejb37YPL9wU0UN%2B9JZwIgHLDWU5bJ6zQhCVCrsmmo64osmCIrH17CuxIaR9n4%2Bqcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLmtXt1QlvgROWJU6ircA0fUr%2FI%2FnnBfdrmCHObXzB9OEdHFoXGyYnBi8c4LM1Y2wIGWvjrAwJlnRwj%2FuZ%2BA1QZs1dROJLbPKYOWjHZjadzwtDO89YLX1VkcCFKuPA3ClQ9vmrZ6l1rpZxhYCFk1pvXiOaWLluRVl%2FgKymCq0qGc9Iif1su5hzXVWD0OfQ4mL2Sm8ojOpT250d12YBQuaTdyZJvAPDMxREGVF%2BerMnuSbVzvt0daxYv%2F%2BZmK5gjO4XDahCnZMqr5jAqNMucxaf0B2WwiCguvBuXWKHZ%2FSMZPe362Ztvd3OfPIFbCqL4AD0hAN2rED18HzBoj473gNJvlh6JzCjMhu0MlamZucZ%2Fx3QVFTXx9WbQvqRKY0ZASN7t61soVKk%2FRgOXUzKF7%2FgchfV0Boig2YkgzRvfMYe6r999x%2BvA9y3VDduXzwMVJvMloA5a5o3rfj6oQ5NS4O0sOuohbUY8VeMcJ93rja9YoTHR3zO6GJ9woHYzT6OE1u6da1MvqUUlsTt6i6Q%2BP1ZOTnD%2BIAoK6X7VMskjv8PGdhCS1ntV%2BaSvTlhQ7uS4%2BOM00cKmRsUMOQP4OTN5kcvYg5i%2F%2BSN281ngkEflwV5yrufvQnmtZOmfDgNxlP8Ij%2BJZfNJT4D14a%2B6ZEMI3RjL0GOqUB0ycwuSffw%2BAD9EHfmfLSqsqrA4ZwfyUFQIMVadImWXqk7bfBoPtMl6jQsUy2XZ6mRyDoUR9hv5Btvq2kN3ngKADcx%2BR%2FE%2BEjnImeml6tj%2FgxdH6r1vHMKhUuL3erRH1LWmyyOJThTgfVeB%2FwIIAJILI6Vb2VzQ7tAOCjSCR6YTPcbu%2BNqz7vtyoPZgDSd6wSNFBgN%2Fqf1MuFmxJ%2Fc2yggRe2JGOJ&X-Amz-Signature=676c4328faa77a38a8ae66abafe537995b658bd30faef09324787359bb1e413b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVHEWZM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCVRc9f%2BvzKwL7PmmmEzEsRkymejb37YPL9wU0UN%2B9JZwIgHLDWU5bJ6zQhCVCrsmmo64osmCIrH17CuxIaR9n4%2Bqcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLmtXt1QlvgROWJU6ircA0fUr%2FI%2FnnBfdrmCHObXzB9OEdHFoXGyYnBi8c4LM1Y2wIGWvjrAwJlnRwj%2FuZ%2BA1QZs1dROJLbPKYOWjHZjadzwtDO89YLX1VkcCFKuPA3ClQ9vmrZ6l1rpZxhYCFk1pvXiOaWLluRVl%2FgKymCq0qGc9Iif1su5hzXVWD0OfQ4mL2Sm8ojOpT250d12YBQuaTdyZJvAPDMxREGVF%2BerMnuSbVzvt0daxYv%2F%2BZmK5gjO4XDahCnZMqr5jAqNMucxaf0B2WwiCguvBuXWKHZ%2FSMZPe362Ztvd3OfPIFbCqL4AD0hAN2rED18HzBoj473gNJvlh6JzCjMhu0MlamZucZ%2Fx3QVFTXx9WbQvqRKY0ZASN7t61soVKk%2FRgOXUzKF7%2FgchfV0Boig2YkgzRvfMYe6r999x%2BvA9y3VDduXzwMVJvMloA5a5o3rfj6oQ5NS4O0sOuohbUY8VeMcJ93rja9YoTHR3zO6GJ9woHYzT6OE1u6da1MvqUUlsTt6i6Q%2BP1ZOTnD%2BIAoK6X7VMskjv8PGdhCS1ntV%2BaSvTlhQ7uS4%2BOM00cKmRsUMOQP4OTN5kcvYg5i%2F%2BSN281ngkEflwV5yrufvQnmtZOmfDgNxlP8Ij%2BJZfNJT4D14a%2B6ZEMI3RjL0GOqUB0ycwuSffw%2BAD9EHfmfLSqsqrA4ZwfyUFQIMVadImWXqk7bfBoPtMl6jQsUy2XZ6mRyDoUR9hv5Btvq2kN3ngKADcx%2BR%2FE%2BEjnImeml6tj%2FgxdH6r1vHMKhUuL3erRH1LWmyyOJThTgfVeB%2FwIIAJILI6Vb2VzQ7tAOCjSCR6YTPcbu%2BNqz7vtyoPZgDSd6wSNFBgN%2Fqf1MuFmxJ%2Fc2yggRe2JGOJ&X-Amz-Signature=d23f2f1eb1feb2505f8a48b1a6b4131cbca240cf4aaf21c1e9100c7aa5fbf7fd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
