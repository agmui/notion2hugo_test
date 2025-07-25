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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCG76MR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG6Z3Mg2kD6Xf1X5LxNzdZdQ%2F4XBjQZ1aT1rklqp1%2FCDAiBNQ4Q%2FQgAHH93St3zbjI03xC4wGRJ6BS19dtOxq%2F0DrSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMV7%2BZt1jaJcqUgfRsKtwDr2qmhO5tsEH%2FgDhulcBKDQaDHw0a%2BrjNUNC9gOIkJo8Viio09RWjzj%2BtqmxPkPJI7SQzhaModGwSR6Su8xzg2nCTE%2BFEtSgFNruWCO5a%2FIypy5SgMilSEN28Ey4cOztoHmtfhOpX%2FggaLCAfvR2a%2FW1Oa6qzdJMkRKiP7VJE0yJttrGKokMzIdqJU%2FbwPvjA7OhLmfWy2p75lochTpsOvHAhXFa%2FP60%2BtSpPgfvioWX%2BoPYKV7ba6dDnA4meQ6jUQx1DDce2UNTpjRAbUqd1FbLwVctq4j5uFdTg18eTnhmLqr3UCQOvGGbX6MS7tJiEmK6CRUJwqAKpykCQGC80knwaw7oTMYGqMB4k9sCPYJW3XhRtoQigxtK4cgL5l316GFZFi8YG2hNZafYmc9NHexOqAQ85dbGgFQZD3%2FbGc3sgwFbZla8H14w6V9rKeIMS3oSXQz4hF3nNo7uhjTN5sxFJr1SzoHNndGLkgmOD0hWCt2NrZMu%2BQ3Bt0dWvJIWW%2FyzQ%2BsSEbSwNxaBe5%2FR6uVoRsJ%2FmjfOItam4okcywE15HgEiRrTh8MJUEQ219%2BmtfeyEJzNTPqFh6BiuRwoBrHltwzT1B3OFjw9b9smTQYXd06ye4hJV8wVx6rkwidGPxAY6pgE7bNXs9h2OfCFWrkubLS0MgS%2FRmzHuVawLECjN4ZjT3vXiiv6YiUd8vQJaKypIGVfPebML4Ni59RZ6eQ1kG4BImtrpdHcZEzswYGjtfIRod%2FepN%2BJUYEUfWY87gJXQ9etEKASesTUZkGnJeL3lQGPfRbsZyZZ85lbjtN8xK11mE1XZVl0zTOo4FxJkVgJk4x6kU08IIzK0lcOFM7yfqjJXC%2FilnNzv&X-Amz-Signature=f5a90b0c34c8bbc51a0e168fb969737389fcc829688eaff0072444a1b056dd50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCG76MR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG6Z3Mg2kD6Xf1X5LxNzdZdQ%2F4XBjQZ1aT1rklqp1%2FCDAiBNQ4Q%2FQgAHH93St3zbjI03xC4wGRJ6BS19dtOxq%2F0DrSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMV7%2BZt1jaJcqUgfRsKtwDr2qmhO5tsEH%2FgDhulcBKDQaDHw0a%2BrjNUNC9gOIkJo8Viio09RWjzj%2BtqmxPkPJI7SQzhaModGwSR6Su8xzg2nCTE%2BFEtSgFNruWCO5a%2FIypy5SgMilSEN28Ey4cOztoHmtfhOpX%2FggaLCAfvR2a%2FW1Oa6qzdJMkRKiP7VJE0yJttrGKokMzIdqJU%2FbwPvjA7OhLmfWy2p75lochTpsOvHAhXFa%2FP60%2BtSpPgfvioWX%2BoPYKV7ba6dDnA4meQ6jUQx1DDce2UNTpjRAbUqd1FbLwVctq4j5uFdTg18eTnhmLqr3UCQOvGGbX6MS7tJiEmK6CRUJwqAKpykCQGC80knwaw7oTMYGqMB4k9sCPYJW3XhRtoQigxtK4cgL5l316GFZFi8YG2hNZafYmc9NHexOqAQ85dbGgFQZD3%2FbGc3sgwFbZla8H14w6V9rKeIMS3oSXQz4hF3nNo7uhjTN5sxFJr1SzoHNndGLkgmOD0hWCt2NrZMu%2BQ3Bt0dWvJIWW%2FyzQ%2BsSEbSwNxaBe5%2FR6uVoRsJ%2FmjfOItam4okcywE15HgEiRrTh8MJUEQ219%2BmtfeyEJzNTPqFh6BiuRwoBrHltwzT1B3OFjw9b9smTQYXd06ye4hJV8wVx6rkwidGPxAY6pgE7bNXs9h2OfCFWrkubLS0MgS%2FRmzHuVawLECjN4ZjT3vXiiv6YiUd8vQJaKypIGVfPebML4Ni59RZ6eQ1kG4BImtrpdHcZEzswYGjtfIRod%2FepN%2BJUYEUfWY87gJXQ9etEKASesTUZkGnJeL3lQGPfRbsZyZZ85lbjtN8xK11mE1XZVl0zTOo4FxJkVgJk4x6kU08IIzK0lcOFM7yfqjJXC%2FilnNzv&X-Amz-Signature=42a66cc310ae1d20aef7a53f1fa7cf5c963da6037f3db5b8a3d77f4516cec0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCG76MR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG6Z3Mg2kD6Xf1X5LxNzdZdQ%2F4XBjQZ1aT1rklqp1%2FCDAiBNQ4Q%2FQgAHH93St3zbjI03xC4wGRJ6BS19dtOxq%2F0DrSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMV7%2BZt1jaJcqUgfRsKtwDr2qmhO5tsEH%2FgDhulcBKDQaDHw0a%2BrjNUNC9gOIkJo8Viio09RWjzj%2BtqmxPkPJI7SQzhaModGwSR6Su8xzg2nCTE%2BFEtSgFNruWCO5a%2FIypy5SgMilSEN28Ey4cOztoHmtfhOpX%2FggaLCAfvR2a%2FW1Oa6qzdJMkRKiP7VJE0yJttrGKokMzIdqJU%2FbwPvjA7OhLmfWy2p75lochTpsOvHAhXFa%2FP60%2BtSpPgfvioWX%2BoPYKV7ba6dDnA4meQ6jUQx1DDce2UNTpjRAbUqd1FbLwVctq4j5uFdTg18eTnhmLqr3UCQOvGGbX6MS7tJiEmK6CRUJwqAKpykCQGC80knwaw7oTMYGqMB4k9sCPYJW3XhRtoQigxtK4cgL5l316GFZFi8YG2hNZafYmc9NHexOqAQ85dbGgFQZD3%2FbGc3sgwFbZla8H14w6V9rKeIMS3oSXQz4hF3nNo7uhjTN5sxFJr1SzoHNndGLkgmOD0hWCt2NrZMu%2BQ3Bt0dWvJIWW%2FyzQ%2BsSEbSwNxaBe5%2FR6uVoRsJ%2FmjfOItam4okcywE15HgEiRrTh8MJUEQ219%2BmtfeyEJzNTPqFh6BiuRwoBrHltwzT1B3OFjw9b9smTQYXd06ye4hJV8wVx6rkwidGPxAY6pgE7bNXs9h2OfCFWrkubLS0MgS%2FRmzHuVawLECjN4ZjT3vXiiv6YiUd8vQJaKypIGVfPebML4Ni59RZ6eQ1kG4BImtrpdHcZEzswYGjtfIRod%2FepN%2BJUYEUfWY87gJXQ9etEKASesTUZkGnJeL3lQGPfRbsZyZZ85lbjtN8xK11mE1XZVl0zTOo4FxJkVgJk4x6kU08IIzK0lcOFM7yfqjJXC%2FilnNzv&X-Amz-Signature=948f46f82a508d2c35f44503ade6d3a927e30acc1fdb82a1ad308ce3c88dc106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCG76MR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG6Z3Mg2kD6Xf1X5LxNzdZdQ%2F4XBjQZ1aT1rklqp1%2FCDAiBNQ4Q%2FQgAHH93St3zbjI03xC4wGRJ6BS19dtOxq%2F0DrSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMV7%2BZt1jaJcqUgfRsKtwDr2qmhO5tsEH%2FgDhulcBKDQaDHw0a%2BrjNUNC9gOIkJo8Viio09RWjzj%2BtqmxPkPJI7SQzhaModGwSR6Su8xzg2nCTE%2BFEtSgFNruWCO5a%2FIypy5SgMilSEN28Ey4cOztoHmtfhOpX%2FggaLCAfvR2a%2FW1Oa6qzdJMkRKiP7VJE0yJttrGKokMzIdqJU%2FbwPvjA7OhLmfWy2p75lochTpsOvHAhXFa%2FP60%2BtSpPgfvioWX%2BoPYKV7ba6dDnA4meQ6jUQx1DDce2UNTpjRAbUqd1FbLwVctq4j5uFdTg18eTnhmLqr3UCQOvGGbX6MS7tJiEmK6CRUJwqAKpykCQGC80knwaw7oTMYGqMB4k9sCPYJW3XhRtoQigxtK4cgL5l316GFZFi8YG2hNZafYmc9NHexOqAQ85dbGgFQZD3%2FbGc3sgwFbZla8H14w6V9rKeIMS3oSXQz4hF3nNo7uhjTN5sxFJr1SzoHNndGLkgmOD0hWCt2NrZMu%2BQ3Bt0dWvJIWW%2FyzQ%2BsSEbSwNxaBe5%2FR6uVoRsJ%2FmjfOItam4okcywE15HgEiRrTh8MJUEQ219%2BmtfeyEJzNTPqFh6BiuRwoBrHltwzT1B3OFjw9b9smTQYXd06ye4hJV8wVx6rkwidGPxAY6pgE7bNXs9h2OfCFWrkubLS0MgS%2FRmzHuVawLECjN4ZjT3vXiiv6YiUd8vQJaKypIGVfPebML4Ni59RZ6eQ1kG4BImtrpdHcZEzswYGjtfIRod%2FepN%2BJUYEUfWY87gJXQ9etEKASesTUZkGnJeL3lQGPfRbsZyZZ85lbjtN8xK11mE1XZVl0zTOo4FxJkVgJk4x6kU08IIzK0lcOFM7yfqjJXC%2FilnNzv&X-Amz-Signature=6b22a1a97a99b1c369d6c964a921442738c83fca6e3eda4e313dbdebf62c4430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCG76MR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG6Z3Mg2kD6Xf1X5LxNzdZdQ%2F4XBjQZ1aT1rklqp1%2FCDAiBNQ4Q%2FQgAHH93St3zbjI03xC4wGRJ6BS19dtOxq%2F0DrSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMV7%2BZt1jaJcqUgfRsKtwDr2qmhO5tsEH%2FgDhulcBKDQaDHw0a%2BrjNUNC9gOIkJo8Viio09RWjzj%2BtqmxPkPJI7SQzhaModGwSR6Su8xzg2nCTE%2BFEtSgFNruWCO5a%2FIypy5SgMilSEN28Ey4cOztoHmtfhOpX%2FggaLCAfvR2a%2FW1Oa6qzdJMkRKiP7VJE0yJttrGKokMzIdqJU%2FbwPvjA7OhLmfWy2p75lochTpsOvHAhXFa%2FP60%2BtSpPgfvioWX%2BoPYKV7ba6dDnA4meQ6jUQx1DDce2UNTpjRAbUqd1FbLwVctq4j5uFdTg18eTnhmLqr3UCQOvGGbX6MS7tJiEmK6CRUJwqAKpykCQGC80knwaw7oTMYGqMB4k9sCPYJW3XhRtoQigxtK4cgL5l316GFZFi8YG2hNZafYmc9NHexOqAQ85dbGgFQZD3%2FbGc3sgwFbZla8H14w6V9rKeIMS3oSXQz4hF3nNo7uhjTN5sxFJr1SzoHNndGLkgmOD0hWCt2NrZMu%2BQ3Bt0dWvJIWW%2FyzQ%2BsSEbSwNxaBe5%2FR6uVoRsJ%2FmjfOItam4okcywE15HgEiRrTh8MJUEQ219%2BmtfeyEJzNTPqFh6BiuRwoBrHltwzT1B3OFjw9b9smTQYXd06ye4hJV8wVx6rkwidGPxAY6pgE7bNXs9h2OfCFWrkubLS0MgS%2FRmzHuVawLECjN4ZjT3vXiiv6YiUd8vQJaKypIGVfPebML4Ni59RZ6eQ1kG4BImtrpdHcZEzswYGjtfIRod%2FepN%2BJUYEUfWY87gJXQ9etEKASesTUZkGnJeL3lQGPfRbsZyZZ85lbjtN8xK11mE1XZVl0zTOo4FxJkVgJk4x6kU08IIzK0lcOFM7yfqjJXC%2FilnNzv&X-Amz-Signature=93cdd188e53727c30ea736e2bff1b131f2df15997c863e60b34559cfc296465e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCG76MR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG6Z3Mg2kD6Xf1X5LxNzdZdQ%2F4XBjQZ1aT1rklqp1%2FCDAiBNQ4Q%2FQgAHH93St3zbjI03xC4wGRJ6BS19dtOxq%2F0DrSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMV7%2BZt1jaJcqUgfRsKtwDr2qmhO5tsEH%2FgDhulcBKDQaDHw0a%2BrjNUNC9gOIkJo8Viio09RWjzj%2BtqmxPkPJI7SQzhaModGwSR6Su8xzg2nCTE%2BFEtSgFNruWCO5a%2FIypy5SgMilSEN28Ey4cOztoHmtfhOpX%2FggaLCAfvR2a%2FW1Oa6qzdJMkRKiP7VJE0yJttrGKokMzIdqJU%2FbwPvjA7OhLmfWy2p75lochTpsOvHAhXFa%2FP60%2BtSpPgfvioWX%2BoPYKV7ba6dDnA4meQ6jUQx1DDce2UNTpjRAbUqd1FbLwVctq4j5uFdTg18eTnhmLqr3UCQOvGGbX6MS7tJiEmK6CRUJwqAKpykCQGC80knwaw7oTMYGqMB4k9sCPYJW3XhRtoQigxtK4cgL5l316GFZFi8YG2hNZafYmc9NHexOqAQ85dbGgFQZD3%2FbGc3sgwFbZla8H14w6V9rKeIMS3oSXQz4hF3nNo7uhjTN5sxFJr1SzoHNndGLkgmOD0hWCt2NrZMu%2BQ3Bt0dWvJIWW%2FyzQ%2BsSEbSwNxaBe5%2FR6uVoRsJ%2FmjfOItam4okcywE15HgEiRrTh8MJUEQ219%2BmtfeyEJzNTPqFh6BiuRwoBrHltwzT1B3OFjw9b9smTQYXd06ye4hJV8wVx6rkwidGPxAY6pgE7bNXs9h2OfCFWrkubLS0MgS%2FRmzHuVawLECjN4ZjT3vXiiv6YiUd8vQJaKypIGVfPebML4Ni59RZ6eQ1kG4BImtrpdHcZEzswYGjtfIRod%2FepN%2BJUYEUfWY87gJXQ9etEKASesTUZkGnJeL3lQGPfRbsZyZZ85lbjtN8xK11mE1XZVl0zTOo4FxJkVgJk4x6kU08IIzK0lcOFM7yfqjJXC%2FilnNzv&X-Amz-Signature=15d02ed6597c153df12ae38e5d61ef29a6369171943f76ee742a6a1a4c41af84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCG76MR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG6Z3Mg2kD6Xf1X5LxNzdZdQ%2F4XBjQZ1aT1rklqp1%2FCDAiBNQ4Q%2FQgAHH93St3zbjI03xC4wGRJ6BS19dtOxq%2F0DrSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMV7%2BZt1jaJcqUgfRsKtwDr2qmhO5tsEH%2FgDhulcBKDQaDHw0a%2BrjNUNC9gOIkJo8Viio09RWjzj%2BtqmxPkPJI7SQzhaModGwSR6Su8xzg2nCTE%2BFEtSgFNruWCO5a%2FIypy5SgMilSEN28Ey4cOztoHmtfhOpX%2FggaLCAfvR2a%2FW1Oa6qzdJMkRKiP7VJE0yJttrGKokMzIdqJU%2FbwPvjA7OhLmfWy2p75lochTpsOvHAhXFa%2FP60%2BtSpPgfvioWX%2BoPYKV7ba6dDnA4meQ6jUQx1DDce2UNTpjRAbUqd1FbLwVctq4j5uFdTg18eTnhmLqr3UCQOvGGbX6MS7tJiEmK6CRUJwqAKpykCQGC80knwaw7oTMYGqMB4k9sCPYJW3XhRtoQigxtK4cgL5l316GFZFi8YG2hNZafYmc9NHexOqAQ85dbGgFQZD3%2FbGc3sgwFbZla8H14w6V9rKeIMS3oSXQz4hF3nNo7uhjTN5sxFJr1SzoHNndGLkgmOD0hWCt2NrZMu%2BQ3Bt0dWvJIWW%2FyzQ%2BsSEbSwNxaBe5%2FR6uVoRsJ%2FmjfOItam4okcywE15HgEiRrTh8MJUEQ219%2BmtfeyEJzNTPqFh6BiuRwoBrHltwzT1B3OFjw9b9smTQYXd06ye4hJV8wVx6rkwidGPxAY6pgE7bNXs9h2OfCFWrkubLS0MgS%2FRmzHuVawLECjN4ZjT3vXiiv6YiUd8vQJaKypIGVfPebML4Ni59RZ6eQ1kG4BImtrpdHcZEzswYGjtfIRod%2FepN%2BJUYEUfWY87gJXQ9etEKASesTUZkGnJeL3lQGPfRbsZyZZ85lbjtN8xK11mE1XZVl0zTOo4FxJkVgJk4x6kU08IIzK0lcOFM7yfqjJXC%2FilnNzv&X-Amz-Signature=613b037b4a2d53e9071488fa48b16a2557cdc1a01675c40f9e526c26a34803a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
