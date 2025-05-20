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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIEAXRV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VPHj%2Ffu1TmRMiluXGR9TnVSQzuiSe6XRuJYArvS8MgIhAIioGDAaufv5gY46kBIjwp4GB5ofjHICMa2tR9gYJBM5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F88VIYDp2RIP9ZBcq3AP3wMXe0A0O%2F%2FzSXfwZSvv4ZH%2FFUkmjm3e08WZ3VqmxIirW%2FD2Snu9aDii7N8cFk3P357cm4biaD%2FdQdW1mWlXZukMJmvf%2FNJHQzh5%2Bc8C30ZeSLALlf0OEO8L14c3lp1kjYPhAkFABOe9ps%2BjESR6ctHs0LuhYKR6xCXOkueevmT5rNM0WKcRjTDQ9P9FZg6LPfThALFmZAZRd3VBS9ii9oqPSOLyXMuu0CqPpcfu9aQ7st0V6qg4MwlwL4VbyArycZYNTpGXGwYsYVT9e6OS0o%2B2EzhHC%2BTXOj0eRd0h43XfL0SuHNMqFgPqUWqVyQAX%2FdE5y20xCoWjIT8JO3VkqaH6UOj6lN%2FX%2BWdEmMxCSlOJS9yfEqBBHFiosQLb8QEe4LnYjQtAl6KTJo%2Bz4%2F6eW5s4E2aBJHNfkQGzZUeOzSupTsrYMDlcodcxrXyJJiGMwKg8TcWkNC0VMwvQKCEzLDb%2BgEMqn9ELWC0vp4%2FdmdjHfqu%2BoS02OpkCoQ6I69gWOVCNvjFE%2Buap%2F%2FFpSorWdo2ZSd1U8dzS%2FstNIYsp%2F%2B8diCyRfQHmfyvJjpg48HnHy4oqTVTCeFyMZX2EWCH0mlIUD4Rd2ZYYAbEHQ1L8iYO8KSaeKzmvXnhmv6TDolbDBBjqkATttj7drzpdndVuG2k4BWwL5KAUbf60asvcA4iPaSZ0Dq5xrfzyAhgIocCtfI5gRLUvBsNy%2BCa7MYxI2qUoA%2B8bxdHoMUKZz7Ud4OFW80dwa%2FjPef8imijf7FqIdeaWvgTFin34%2BUmKBsh2glEv5fBiii6X4e%2FVudLwuOYEZOPAMGflb02joih90lEHccZETiGJBuwKnH7QA8jgKMe09BjUZ9tgV&X-Amz-Signature=e1314fe274a3859a40bd2d099042a5678548466c281baba09ae7aceca53961a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIEAXRV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VPHj%2Ffu1TmRMiluXGR9TnVSQzuiSe6XRuJYArvS8MgIhAIioGDAaufv5gY46kBIjwp4GB5ofjHICMa2tR9gYJBM5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F88VIYDp2RIP9ZBcq3AP3wMXe0A0O%2F%2FzSXfwZSvv4ZH%2FFUkmjm3e08WZ3VqmxIirW%2FD2Snu9aDii7N8cFk3P357cm4biaD%2FdQdW1mWlXZukMJmvf%2FNJHQzh5%2Bc8C30ZeSLALlf0OEO8L14c3lp1kjYPhAkFABOe9ps%2BjESR6ctHs0LuhYKR6xCXOkueevmT5rNM0WKcRjTDQ9P9FZg6LPfThALFmZAZRd3VBS9ii9oqPSOLyXMuu0CqPpcfu9aQ7st0V6qg4MwlwL4VbyArycZYNTpGXGwYsYVT9e6OS0o%2B2EzhHC%2BTXOj0eRd0h43XfL0SuHNMqFgPqUWqVyQAX%2FdE5y20xCoWjIT8JO3VkqaH6UOj6lN%2FX%2BWdEmMxCSlOJS9yfEqBBHFiosQLb8QEe4LnYjQtAl6KTJo%2Bz4%2F6eW5s4E2aBJHNfkQGzZUeOzSupTsrYMDlcodcxrXyJJiGMwKg8TcWkNC0VMwvQKCEzLDb%2BgEMqn9ELWC0vp4%2FdmdjHfqu%2BoS02OpkCoQ6I69gWOVCNvjFE%2Buap%2F%2FFpSorWdo2ZSd1U8dzS%2FstNIYsp%2F%2B8diCyRfQHmfyvJjpg48HnHy4oqTVTCeFyMZX2EWCH0mlIUD4Rd2ZYYAbEHQ1L8iYO8KSaeKzmvXnhmv6TDolbDBBjqkATttj7drzpdndVuG2k4BWwL5KAUbf60asvcA4iPaSZ0Dq5xrfzyAhgIocCtfI5gRLUvBsNy%2BCa7MYxI2qUoA%2B8bxdHoMUKZz7Ud4OFW80dwa%2FjPef8imijf7FqIdeaWvgTFin34%2BUmKBsh2glEv5fBiii6X4e%2FVudLwuOYEZOPAMGflb02joih90lEHccZETiGJBuwKnH7QA8jgKMe09BjUZ9tgV&X-Amz-Signature=3211c43d2a99a114baddb989116077420e746a1d107885c1c92c56dc56ad3982&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIEAXRV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VPHj%2Ffu1TmRMiluXGR9TnVSQzuiSe6XRuJYArvS8MgIhAIioGDAaufv5gY46kBIjwp4GB5ofjHICMa2tR9gYJBM5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F88VIYDp2RIP9ZBcq3AP3wMXe0A0O%2F%2FzSXfwZSvv4ZH%2FFUkmjm3e08WZ3VqmxIirW%2FD2Snu9aDii7N8cFk3P357cm4biaD%2FdQdW1mWlXZukMJmvf%2FNJHQzh5%2Bc8C30ZeSLALlf0OEO8L14c3lp1kjYPhAkFABOe9ps%2BjESR6ctHs0LuhYKR6xCXOkueevmT5rNM0WKcRjTDQ9P9FZg6LPfThALFmZAZRd3VBS9ii9oqPSOLyXMuu0CqPpcfu9aQ7st0V6qg4MwlwL4VbyArycZYNTpGXGwYsYVT9e6OS0o%2B2EzhHC%2BTXOj0eRd0h43XfL0SuHNMqFgPqUWqVyQAX%2FdE5y20xCoWjIT8JO3VkqaH6UOj6lN%2FX%2BWdEmMxCSlOJS9yfEqBBHFiosQLb8QEe4LnYjQtAl6KTJo%2Bz4%2F6eW5s4E2aBJHNfkQGzZUeOzSupTsrYMDlcodcxrXyJJiGMwKg8TcWkNC0VMwvQKCEzLDb%2BgEMqn9ELWC0vp4%2FdmdjHfqu%2BoS02OpkCoQ6I69gWOVCNvjFE%2Buap%2F%2FFpSorWdo2ZSd1U8dzS%2FstNIYsp%2F%2B8diCyRfQHmfyvJjpg48HnHy4oqTVTCeFyMZX2EWCH0mlIUD4Rd2ZYYAbEHQ1L8iYO8KSaeKzmvXnhmv6TDolbDBBjqkATttj7drzpdndVuG2k4BWwL5KAUbf60asvcA4iPaSZ0Dq5xrfzyAhgIocCtfI5gRLUvBsNy%2BCa7MYxI2qUoA%2B8bxdHoMUKZz7Ud4OFW80dwa%2FjPef8imijf7FqIdeaWvgTFin34%2BUmKBsh2glEv5fBiii6X4e%2FVudLwuOYEZOPAMGflb02joih90lEHccZETiGJBuwKnH7QA8jgKMe09BjUZ9tgV&X-Amz-Signature=71e6cef30e07ee8d61bc4a94c5026b14dde131240b2c67a52fbd2012e0c1ef60&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIEAXRV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VPHj%2Ffu1TmRMiluXGR9TnVSQzuiSe6XRuJYArvS8MgIhAIioGDAaufv5gY46kBIjwp4GB5ofjHICMa2tR9gYJBM5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F88VIYDp2RIP9ZBcq3AP3wMXe0A0O%2F%2FzSXfwZSvv4ZH%2FFUkmjm3e08WZ3VqmxIirW%2FD2Snu9aDii7N8cFk3P357cm4biaD%2FdQdW1mWlXZukMJmvf%2FNJHQzh5%2Bc8C30ZeSLALlf0OEO8L14c3lp1kjYPhAkFABOe9ps%2BjESR6ctHs0LuhYKR6xCXOkueevmT5rNM0WKcRjTDQ9P9FZg6LPfThALFmZAZRd3VBS9ii9oqPSOLyXMuu0CqPpcfu9aQ7st0V6qg4MwlwL4VbyArycZYNTpGXGwYsYVT9e6OS0o%2B2EzhHC%2BTXOj0eRd0h43XfL0SuHNMqFgPqUWqVyQAX%2FdE5y20xCoWjIT8JO3VkqaH6UOj6lN%2FX%2BWdEmMxCSlOJS9yfEqBBHFiosQLb8QEe4LnYjQtAl6KTJo%2Bz4%2F6eW5s4E2aBJHNfkQGzZUeOzSupTsrYMDlcodcxrXyJJiGMwKg8TcWkNC0VMwvQKCEzLDb%2BgEMqn9ELWC0vp4%2FdmdjHfqu%2BoS02OpkCoQ6I69gWOVCNvjFE%2Buap%2F%2FFpSorWdo2ZSd1U8dzS%2FstNIYsp%2F%2B8diCyRfQHmfyvJjpg48HnHy4oqTVTCeFyMZX2EWCH0mlIUD4Rd2ZYYAbEHQ1L8iYO8KSaeKzmvXnhmv6TDolbDBBjqkATttj7drzpdndVuG2k4BWwL5KAUbf60asvcA4iPaSZ0Dq5xrfzyAhgIocCtfI5gRLUvBsNy%2BCa7MYxI2qUoA%2B8bxdHoMUKZz7Ud4OFW80dwa%2FjPef8imijf7FqIdeaWvgTFin34%2BUmKBsh2glEv5fBiii6X4e%2FVudLwuOYEZOPAMGflb02joih90lEHccZETiGJBuwKnH7QA8jgKMe09BjUZ9tgV&X-Amz-Signature=bf52c94d0139ec69d074a97249cda79cfb4a94f15e48064fb9661208d0eb5e92&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIEAXRV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VPHj%2Ffu1TmRMiluXGR9TnVSQzuiSe6XRuJYArvS8MgIhAIioGDAaufv5gY46kBIjwp4GB5ofjHICMa2tR9gYJBM5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F88VIYDp2RIP9ZBcq3AP3wMXe0A0O%2F%2FzSXfwZSvv4ZH%2FFUkmjm3e08WZ3VqmxIirW%2FD2Snu9aDii7N8cFk3P357cm4biaD%2FdQdW1mWlXZukMJmvf%2FNJHQzh5%2Bc8C30ZeSLALlf0OEO8L14c3lp1kjYPhAkFABOe9ps%2BjESR6ctHs0LuhYKR6xCXOkueevmT5rNM0WKcRjTDQ9P9FZg6LPfThALFmZAZRd3VBS9ii9oqPSOLyXMuu0CqPpcfu9aQ7st0V6qg4MwlwL4VbyArycZYNTpGXGwYsYVT9e6OS0o%2B2EzhHC%2BTXOj0eRd0h43XfL0SuHNMqFgPqUWqVyQAX%2FdE5y20xCoWjIT8JO3VkqaH6UOj6lN%2FX%2BWdEmMxCSlOJS9yfEqBBHFiosQLb8QEe4LnYjQtAl6KTJo%2Bz4%2F6eW5s4E2aBJHNfkQGzZUeOzSupTsrYMDlcodcxrXyJJiGMwKg8TcWkNC0VMwvQKCEzLDb%2BgEMqn9ELWC0vp4%2FdmdjHfqu%2BoS02OpkCoQ6I69gWOVCNvjFE%2Buap%2F%2FFpSorWdo2ZSd1U8dzS%2FstNIYsp%2F%2B8diCyRfQHmfyvJjpg48HnHy4oqTVTCeFyMZX2EWCH0mlIUD4Rd2ZYYAbEHQ1L8iYO8KSaeKzmvXnhmv6TDolbDBBjqkATttj7drzpdndVuG2k4BWwL5KAUbf60asvcA4iPaSZ0Dq5xrfzyAhgIocCtfI5gRLUvBsNy%2BCa7MYxI2qUoA%2B8bxdHoMUKZz7Ud4OFW80dwa%2FjPef8imijf7FqIdeaWvgTFin34%2BUmKBsh2glEv5fBiii6X4e%2FVudLwuOYEZOPAMGflb02joih90lEHccZETiGJBuwKnH7QA8jgKMe09BjUZ9tgV&X-Amz-Signature=8043ce122969964c21aa0a84419c6f10480b12e1b163218e184cbc2fa30fde33&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIEAXRV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VPHj%2Ffu1TmRMiluXGR9TnVSQzuiSe6XRuJYArvS8MgIhAIioGDAaufv5gY46kBIjwp4GB5ofjHICMa2tR9gYJBM5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F88VIYDp2RIP9ZBcq3AP3wMXe0A0O%2F%2FzSXfwZSvv4ZH%2FFUkmjm3e08WZ3VqmxIirW%2FD2Snu9aDii7N8cFk3P357cm4biaD%2FdQdW1mWlXZukMJmvf%2FNJHQzh5%2Bc8C30ZeSLALlf0OEO8L14c3lp1kjYPhAkFABOe9ps%2BjESR6ctHs0LuhYKR6xCXOkueevmT5rNM0WKcRjTDQ9P9FZg6LPfThALFmZAZRd3VBS9ii9oqPSOLyXMuu0CqPpcfu9aQ7st0V6qg4MwlwL4VbyArycZYNTpGXGwYsYVT9e6OS0o%2B2EzhHC%2BTXOj0eRd0h43XfL0SuHNMqFgPqUWqVyQAX%2FdE5y20xCoWjIT8JO3VkqaH6UOj6lN%2FX%2BWdEmMxCSlOJS9yfEqBBHFiosQLb8QEe4LnYjQtAl6KTJo%2Bz4%2F6eW5s4E2aBJHNfkQGzZUeOzSupTsrYMDlcodcxrXyJJiGMwKg8TcWkNC0VMwvQKCEzLDb%2BgEMqn9ELWC0vp4%2FdmdjHfqu%2BoS02OpkCoQ6I69gWOVCNvjFE%2Buap%2F%2FFpSorWdo2ZSd1U8dzS%2FstNIYsp%2F%2B8diCyRfQHmfyvJjpg48HnHy4oqTVTCeFyMZX2EWCH0mlIUD4Rd2ZYYAbEHQ1L8iYO8KSaeKzmvXnhmv6TDolbDBBjqkATttj7drzpdndVuG2k4BWwL5KAUbf60asvcA4iPaSZ0Dq5xrfzyAhgIocCtfI5gRLUvBsNy%2BCa7MYxI2qUoA%2B8bxdHoMUKZz7Ud4OFW80dwa%2FjPef8imijf7FqIdeaWvgTFin34%2BUmKBsh2glEv5fBiii6X4e%2FVudLwuOYEZOPAMGflb02joih90lEHccZETiGJBuwKnH7QA8jgKMe09BjUZ9tgV&X-Amz-Signature=cda6177335eed29ef3a892a19caf067461debf4108116d4a4eab0bacdba359c0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIEAXRV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VPHj%2Ffu1TmRMiluXGR9TnVSQzuiSe6XRuJYArvS8MgIhAIioGDAaufv5gY46kBIjwp4GB5ofjHICMa2tR9gYJBM5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F88VIYDp2RIP9ZBcq3AP3wMXe0A0O%2F%2FzSXfwZSvv4ZH%2FFUkmjm3e08WZ3VqmxIirW%2FD2Snu9aDii7N8cFk3P357cm4biaD%2FdQdW1mWlXZukMJmvf%2FNJHQzh5%2Bc8C30ZeSLALlf0OEO8L14c3lp1kjYPhAkFABOe9ps%2BjESR6ctHs0LuhYKR6xCXOkueevmT5rNM0WKcRjTDQ9P9FZg6LPfThALFmZAZRd3VBS9ii9oqPSOLyXMuu0CqPpcfu9aQ7st0V6qg4MwlwL4VbyArycZYNTpGXGwYsYVT9e6OS0o%2B2EzhHC%2BTXOj0eRd0h43XfL0SuHNMqFgPqUWqVyQAX%2FdE5y20xCoWjIT8JO3VkqaH6UOj6lN%2FX%2BWdEmMxCSlOJS9yfEqBBHFiosQLb8QEe4LnYjQtAl6KTJo%2Bz4%2F6eW5s4E2aBJHNfkQGzZUeOzSupTsrYMDlcodcxrXyJJiGMwKg8TcWkNC0VMwvQKCEzLDb%2BgEMqn9ELWC0vp4%2FdmdjHfqu%2BoS02OpkCoQ6I69gWOVCNvjFE%2Buap%2F%2FFpSorWdo2ZSd1U8dzS%2FstNIYsp%2F%2B8diCyRfQHmfyvJjpg48HnHy4oqTVTCeFyMZX2EWCH0mlIUD4Rd2ZYYAbEHQ1L8iYO8KSaeKzmvXnhmv6TDolbDBBjqkATttj7drzpdndVuG2k4BWwL5KAUbf60asvcA4iPaSZ0Dq5xrfzyAhgIocCtfI5gRLUvBsNy%2BCa7MYxI2qUoA%2B8bxdHoMUKZz7Ud4OFW80dwa%2FjPef8imijf7FqIdeaWvgTFin34%2BUmKBsh2glEv5fBiii6X4e%2FVudLwuOYEZOPAMGflb02joih90lEHccZETiGJBuwKnH7QA8jgKMe09BjUZ9tgV&X-Amz-Signature=48c1176973bcd2e1cbc90270bbb4b8304b4a4957492ecd749f4394611b96b465&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
