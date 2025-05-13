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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVWUH3N%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIF4ml%2BuBHzFG5MsCuB1CJF0X%2FIBFBFopCIn7CQa9oFshAiEAvKCRdrGdC%2BNlk9qhgwB0asiSnqEXZCXgW9%2FLYoyFj2gqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIOWMNUf1siuwStNSrcAzpxkEJIpbd8Yz%2BhH9iSpU4Rq0uHcqZT8Chr7WCdiP%2BVr2w8XqGHtXWDrmgu4vD1%2FrhE1B5oXfmnuAkz%2FvC7%2BehGn6RXBs0PPrxWfvW1HwQmA7c4lTPVhiN7qqhJ5%2FP6wIvcJSMegzv0U5%2BlKUshDyKpn%2BWCSAX2ZnTOKW23sLkY%2Bs7%2BKlCVAyYKKoO%2BoY7lTY8F1sQ8TrmICsU1Ikp9UNH9bMiVRQqG%2BahJsu67ghO0fW%2ByTil1TOVdbbZc4HZMkhbCQBJvX1dGFyrnI8KUBJ4rNWaNXXIOpoCzWM8C3GYAfkUIqe%2Bv9ernbwHW3Ih5nLPte86lRupsY%2BQqz%2FwYnshSwnhq1DLpdFYsu6%2FLqDNXd2O8NElJ8ATEQXhCsaO6WtccD6%2BYEd4fN4r7HZtDLNTe4aG6NyTnpIz2r8kRj4IULG6FZA1XrnwsEItojiZddNJiGArE5FWrEZPaCv2yjx9%2B8G0ucsMv%2B5gxZiUYem0M%2FZFvyLeMJNWWmlWf5g8ZqwICkbfrr9RkTRQEEMVJY08314rOkkyMZW7jt2%2FH%2F7uywTa9B2UY86PP%2BBRY2SsOoFfIiRMnoFsYtwuCUkvd0gp%2F1FUC2mg8OsJtx9%2FOlbw8CXMWZNEKlqZnv2d8MI3yi8EGOqUB%2BJAEiqJlHHm%2BzOF8COZbvTg3Otv9kpVATAKIBSMzlpYCouiAgA64OtIiUhrmu1w1Di4Zff6PtIf8fpp3qU5F%2BvHbWlarD7O9Yy6I9DaNuMxwNwaeSGEj4BEk31zDDU8dcPEPk0sfuPSqHTc4ekDkxOz7zuLkaggMB0%2BhDheCtzcJWX2Em5HMdb9yfe4iu3c29sPLiM8EagbnvjP91nXtElCYHkRh&X-Amz-Signature=32fc911a6951aec942d29b4d13afb0446745fea72c6e340cf35c4867024787cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVWUH3N%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIF4ml%2BuBHzFG5MsCuB1CJF0X%2FIBFBFopCIn7CQa9oFshAiEAvKCRdrGdC%2BNlk9qhgwB0asiSnqEXZCXgW9%2FLYoyFj2gqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIOWMNUf1siuwStNSrcAzpxkEJIpbd8Yz%2BhH9iSpU4Rq0uHcqZT8Chr7WCdiP%2BVr2w8XqGHtXWDrmgu4vD1%2FrhE1B5oXfmnuAkz%2FvC7%2BehGn6RXBs0PPrxWfvW1HwQmA7c4lTPVhiN7qqhJ5%2FP6wIvcJSMegzv0U5%2BlKUshDyKpn%2BWCSAX2ZnTOKW23sLkY%2Bs7%2BKlCVAyYKKoO%2BoY7lTY8F1sQ8TrmICsU1Ikp9UNH9bMiVRQqG%2BahJsu67ghO0fW%2ByTil1TOVdbbZc4HZMkhbCQBJvX1dGFyrnI8KUBJ4rNWaNXXIOpoCzWM8C3GYAfkUIqe%2Bv9ernbwHW3Ih5nLPte86lRupsY%2BQqz%2FwYnshSwnhq1DLpdFYsu6%2FLqDNXd2O8NElJ8ATEQXhCsaO6WtccD6%2BYEd4fN4r7HZtDLNTe4aG6NyTnpIz2r8kRj4IULG6FZA1XrnwsEItojiZddNJiGArE5FWrEZPaCv2yjx9%2B8G0ucsMv%2B5gxZiUYem0M%2FZFvyLeMJNWWmlWf5g8ZqwICkbfrr9RkTRQEEMVJY08314rOkkyMZW7jt2%2FH%2F7uywTa9B2UY86PP%2BBRY2SsOoFfIiRMnoFsYtwuCUkvd0gp%2F1FUC2mg8OsJtx9%2FOlbw8CXMWZNEKlqZnv2d8MI3yi8EGOqUB%2BJAEiqJlHHm%2BzOF8COZbvTg3Otv9kpVATAKIBSMzlpYCouiAgA64OtIiUhrmu1w1Di4Zff6PtIf8fpp3qU5F%2BvHbWlarD7O9Yy6I9DaNuMxwNwaeSGEj4BEk31zDDU8dcPEPk0sfuPSqHTc4ekDkxOz7zuLkaggMB0%2BhDheCtzcJWX2Em5HMdb9yfe4iu3c29sPLiM8EagbnvjP91nXtElCYHkRh&X-Amz-Signature=9da50524ed4f769e501b954db2dc75c2de33234bd6d74957f4f77c1bec4f9d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVWUH3N%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIF4ml%2BuBHzFG5MsCuB1CJF0X%2FIBFBFopCIn7CQa9oFshAiEAvKCRdrGdC%2BNlk9qhgwB0asiSnqEXZCXgW9%2FLYoyFj2gqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIOWMNUf1siuwStNSrcAzpxkEJIpbd8Yz%2BhH9iSpU4Rq0uHcqZT8Chr7WCdiP%2BVr2w8XqGHtXWDrmgu4vD1%2FrhE1B5oXfmnuAkz%2FvC7%2BehGn6RXBs0PPrxWfvW1HwQmA7c4lTPVhiN7qqhJ5%2FP6wIvcJSMegzv0U5%2BlKUshDyKpn%2BWCSAX2ZnTOKW23sLkY%2Bs7%2BKlCVAyYKKoO%2BoY7lTY8F1sQ8TrmICsU1Ikp9UNH9bMiVRQqG%2BahJsu67ghO0fW%2ByTil1TOVdbbZc4HZMkhbCQBJvX1dGFyrnI8KUBJ4rNWaNXXIOpoCzWM8C3GYAfkUIqe%2Bv9ernbwHW3Ih5nLPte86lRupsY%2BQqz%2FwYnshSwnhq1DLpdFYsu6%2FLqDNXd2O8NElJ8ATEQXhCsaO6WtccD6%2BYEd4fN4r7HZtDLNTe4aG6NyTnpIz2r8kRj4IULG6FZA1XrnwsEItojiZddNJiGArE5FWrEZPaCv2yjx9%2B8G0ucsMv%2B5gxZiUYem0M%2FZFvyLeMJNWWmlWf5g8ZqwICkbfrr9RkTRQEEMVJY08314rOkkyMZW7jt2%2FH%2F7uywTa9B2UY86PP%2BBRY2SsOoFfIiRMnoFsYtwuCUkvd0gp%2F1FUC2mg8OsJtx9%2FOlbw8CXMWZNEKlqZnv2d8MI3yi8EGOqUB%2BJAEiqJlHHm%2BzOF8COZbvTg3Otv9kpVATAKIBSMzlpYCouiAgA64OtIiUhrmu1w1Di4Zff6PtIf8fpp3qU5F%2BvHbWlarD7O9Yy6I9DaNuMxwNwaeSGEj4BEk31zDDU8dcPEPk0sfuPSqHTc4ekDkxOz7zuLkaggMB0%2BhDheCtzcJWX2Em5HMdb9yfe4iu3c29sPLiM8EagbnvjP91nXtElCYHkRh&X-Amz-Signature=5fb56a22390cbef5a3d007ce7ebf116298523f790ec1fc37e6f32042313a615e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVWUH3N%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIF4ml%2BuBHzFG5MsCuB1CJF0X%2FIBFBFopCIn7CQa9oFshAiEAvKCRdrGdC%2BNlk9qhgwB0asiSnqEXZCXgW9%2FLYoyFj2gqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIOWMNUf1siuwStNSrcAzpxkEJIpbd8Yz%2BhH9iSpU4Rq0uHcqZT8Chr7WCdiP%2BVr2w8XqGHtXWDrmgu4vD1%2FrhE1B5oXfmnuAkz%2FvC7%2BehGn6RXBs0PPrxWfvW1HwQmA7c4lTPVhiN7qqhJ5%2FP6wIvcJSMegzv0U5%2BlKUshDyKpn%2BWCSAX2ZnTOKW23sLkY%2Bs7%2BKlCVAyYKKoO%2BoY7lTY8F1sQ8TrmICsU1Ikp9UNH9bMiVRQqG%2BahJsu67ghO0fW%2ByTil1TOVdbbZc4HZMkhbCQBJvX1dGFyrnI8KUBJ4rNWaNXXIOpoCzWM8C3GYAfkUIqe%2Bv9ernbwHW3Ih5nLPte86lRupsY%2BQqz%2FwYnshSwnhq1DLpdFYsu6%2FLqDNXd2O8NElJ8ATEQXhCsaO6WtccD6%2BYEd4fN4r7HZtDLNTe4aG6NyTnpIz2r8kRj4IULG6FZA1XrnwsEItojiZddNJiGArE5FWrEZPaCv2yjx9%2B8G0ucsMv%2B5gxZiUYem0M%2FZFvyLeMJNWWmlWf5g8ZqwICkbfrr9RkTRQEEMVJY08314rOkkyMZW7jt2%2FH%2F7uywTa9B2UY86PP%2BBRY2SsOoFfIiRMnoFsYtwuCUkvd0gp%2F1FUC2mg8OsJtx9%2FOlbw8CXMWZNEKlqZnv2d8MI3yi8EGOqUB%2BJAEiqJlHHm%2BzOF8COZbvTg3Otv9kpVATAKIBSMzlpYCouiAgA64OtIiUhrmu1w1Di4Zff6PtIf8fpp3qU5F%2BvHbWlarD7O9Yy6I9DaNuMxwNwaeSGEj4BEk31zDDU8dcPEPk0sfuPSqHTc4ekDkxOz7zuLkaggMB0%2BhDheCtzcJWX2Em5HMdb9yfe4iu3c29sPLiM8EagbnvjP91nXtElCYHkRh&X-Amz-Signature=18a05a1a6903bf5c84201908b58b8bcef6103b0daca976dd4cbb7775aab2ef9a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVWUH3N%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIF4ml%2BuBHzFG5MsCuB1CJF0X%2FIBFBFopCIn7CQa9oFshAiEAvKCRdrGdC%2BNlk9qhgwB0asiSnqEXZCXgW9%2FLYoyFj2gqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIOWMNUf1siuwStNSrcAzpxkEJIpbd8Yz%2BhH9iSpU4Rq0uHcqZT8Chr7WCdiP%2BVr2w8XqGHtXWDrmgu4vD1%2FrhE1B5oXfmnuAkz%2FvC7%2BehGn6RXBs0PPrxWfvW1HwQmA7c4lTPVhiN7qqhJ5%2FP6wIvcJSMegzv0U5%2BlKUshDyKpn%2BWCSAX2ZnTOKW23sLkY%2Bs7%2BKlCVAyYKKoO%2BoY7lTY8F1sQ8TrmICsU1Ikp9UNH9bMiVRQqG%2BahJsu67ghO0fW%2ByTil1TOVdbbZc4HZMkhbCQBJvX1dGFyrnI8KUBJ4rNWaNXXIOpoCzWM8C3GYAfkUIqe%2Bv9ernbwHW3Ih5nLPte86lRupsY%2BQqz%2FwYnshSwnhq1DLpdFYsu6%2FLqDNXd2O8NElJ8ATEQXhCsaO6WtccD6%2BYEd4fN4r7HZtDLNTe4aG6NyTnpIz2r8kRj4IULG6FZA1XrnwsEItojiZddNJiGArE5FWrEZPaCv2yjx9%2B8G0ucsMv%2B5gxZiUYem0M%2FZFvyLeMJNWWmlWf5g8ZqwICkbfrr9RkTRQEEMVJY08314rOkkyMZW7jt2%2FH%2F7uywTa9B2UY86PP%2BBRY2SsOoFfIiRMnoFsYtwuCUkvd0gp%2F1FUC2mg8OsJtx9%2FOlbw8CXMWZNEKlqZnv2d8MI3yi8EGOqUB%2BJAEiqJlHHm%2BzOF8COZbvTg3Otv9kpVATAKIBSMzlpYCouiAgA64OtIiUhrmu1w1Di4Zff6PtIf8fpp3qU5F%2BvHbWlarD7O9Yy6I9DaNuMxwNwaeSGEj4BEk31zDDU8dcPEPk0sfuPSqHTc4ekDkxOz7zuLkaggMB0%2BhDheCtzcJWX2Em5HMdb9yfe4iu3c29sPLiM8EagbnvjP91nXtElCYHkRh&X-Amz-Signature=f599d4ad858fa5a05bbd99642c0558e879f82bfe2a1d344d7a59a852d73874ef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVWUH3N%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIF4ml%2BuBHzFG5MsCuB1CJF0X%2FIBFBFopCIn7CQa9oFshAiEAvKCRdrGdC%2BNlk9qhgwB0asiSnqEXZCXgW9%2FLYoyFj2gqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIOWMNUf1siuwStNSrcAzpxkEJIpbd8Yz%2BhH9iSpU4Rq0uHcqZT8Chr7WCdiP%2BVr2w8XqGHtXWDrmgu4vD1%2FrhE1B5oXfmnuAkz%2FvC7%2BehGn6RXBs0PPrxWfvW1HwQmA7c4lTPVhiN7qqhJ5%2FP6wIvcJSMegzv0U5%2BlKUshDyKpn%2BWCSAX2ZnTOKW23sLkY%2Bs7%2BKlCVAyYKKoO%2BoY7lTY8F1sQ8TrmICsU1Ikp9UNH9bMiVRQqG%2BahJsu67ghO0fW%2ByTil1TOVdbbZc4HZMkhbCQBJvX1dGFyrnI8KUBJ4rNWaNXXIOpoCzWM8C3GYAfkUIqe%2Bv9ernbwHW3Ih5nLPte86lRupsY%2BQqz%2FwYnshSwnhq1DLpdFYsu6%2FLqDNXd2O8NElJ8ATEQXhCsaO6WtccD6%2BYEd4fN4r7HZtDLNTe4aG6NyTnpIz2r8kRj4IULG6FZA1XrnwsEItojiZddNJiGArE5FWrEZPaCv2yjx9%2B8G0ucsMv%2B5gxZiUYem0M%2FZFvyLeMJNWWmlWf5g8ZqwICkbfrr9RkTRQEEMVJY08314rOkkyMZW7jt2%2FH%2F7uywTa9B2UY86PP%2BBRY2SsOoFfIiRMnoFsYtwuCUkvd0gp%2F1FUC2mg8OsJtx9%2FOlbw8CXMWZNEKlqZnv2d8MI3yi8EGOqUB%2BJAEiqJlHHm%2BzOF8COZbvTg3Otv9kpVATAKIBSMzlpYCouiAgA64OtIiUhrmu1w1Di4Zff6PtIf8fpp3qU5F%2BvHbWlarD7O9Yy6I9DaNuMxwNwaeSGEj4BEk31zDDU8dcPEPk0sfuPSqHTc4ekDkxOz7zuLkaggMB0%2BhDheCtzcJWX2Em5HMdb9yfe4iu3c29sPLiM8EagbnvjP91nXtElCYHkRh&X-Amz-Signature=05a6dce9f81d199da8b536c7f24f59cc00ed86bf0a36894acc51f6aeb085d108&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVWUH3N%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIF4ml%2BuBHzFG5MsCuB1CJF0X%2FIBFBFopCIn7CQa9oFshAiEAvKCRdrGdC%2BNlk9qhgwB0asiSnqEXZCXgW9%2FLYoyFj2gqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIOWMNUf1siuwStNSrcAzpxkEJIpbd8Yz%2BhH9iSpU4Rq0uHcqZT8Chr7WCdiP%2BVr2w8XqGHtXWDrmgu4vD1%2FrhE1B5oXfmnuAkz%2FvC7%2BehGn6RXBs0PPrxWfvW1HwQmA7c4lTPVhiN7qqhJ5%2FP6wIvcJSMegzv0U5%2BlKUshDyKpn%2BWCSAX2ZnTOKW23sLkY%2Bs7%2BKlCVAyYKKoO%2BoY7lTY8F1sQ8TrmICsU1Ikp9UNH9bMiVRQqG%2BahJsu67ghO0fW%2ByTil1TOVdbbZc4HZMkhbCQBJvX1dGFyrnI8KUBJ4rNWaNXXIOpoCzWM8C3GYAfkUIqe%2Bv9ernbwHW3Ih5nLPte86lRupsY%2BQqz%2FwYnshSwnhq1DLpdFYsu6%2FLqDNXd2O8NElJ8ATEQXhCsaO6WtccD6%2BYEd4fN4r7HZtDLNTe4aG6NyTnpIz2r8kRj4IULG6FZA1XrnwsEItojiZddNJiGArE5FWrEZPaCv2yjx9%2B8G0ucsMv%2B5gxZiUYem0M%2FZFvyLeMJNWWmlWf5g8ZqwICkbfrr9RkTRQEEMVJY08314rOkkyMZW7jt2%2FH%2F7uywTa9B2UY86PP%2BBRY2SsOoFfIiRMnoFsYtwuCUkvd0gp%2F1FUC2mg8OsJtx9%2FOlbw8CXMWZNEKlqZnv2d8MI3yi8EGOqUB%2BJAEiqJlHHm%2BzOF8COZbvTg3Otv9kpVATAKIBSMzlpYCouiAgA64OtIiUhrmu1w1Di4Zff6PtIf8fpp3qU5F%2BvHbWlarD7O9Yy6I9DaNuMxwNwaeSGEj4BEk31zDDU8dcPEPk0sfuPSqHTc4ekDkxOz7zuLkaggMB0%2BhDheCtzcJWX2Em5HMdb9yfe4iu3c29sPLiM8EagbnvjP91nXtElCYHkRh&X-Amz-Signature=ea1e61b9a91dc10c5286f6fd4294869c40f5cebc5b19c47cb0b2d0dd1e31e885&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
