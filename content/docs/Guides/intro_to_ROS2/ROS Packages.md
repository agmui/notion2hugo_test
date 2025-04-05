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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7WSMO4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqRJ1hxa5AqgSLOFOEZbcNHJ2fKTkNs90%2B49ejv0HZqgIgRFq%2F%2FA%2F4PR1ramsLPikPTNrlRHmv%2B3akwM0gJZmWwpEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG6ahp%2BiEonYzahpmircA224O%2F9VY11%2Fy1oLvhp4UmoOFvl0dA8CRbhoWKcqMFF8VrUrg4Bn1isbyVcLXqAXwRhue1XNKhKHRhNxSs1BMt7Q80sDMj0pQe4ybdJrtFJFH%2FdZA2XUzedJ7hJxiNrJGecbJbZoBCLPK2K7foDhH0ShFuTYYQwhnFs1zBJj%2FNMbpLughnlxK8EXg3Jr%2FG%2FfcdZS7tUW8B73%2FzIi1%2BKiD7S%2FLXmXrnWDx%2BWmC0qe73XoxJmjzQ60202xqzwk5uYGLnFVSFVIKBeejzAJbkhRnK2ke64Blz0Bd0gziC18cUs%2BDYslx9NsupHAcm%2BN3lnZtpWWzPEgYkB%2Br8LFSzUFwvFKHco68Ppd2LTZMblMPQrKhYQC9HTsfGxosDBaH6hKy5VAJPfxzUKPkJJxPomGm2biPqMuJfdCEX%2FEVjNgDx5Tib0yO%2B%2F1hOX0uEHdC9GhBcvI1xFfUCKhFsnXmO2zAiqakXDTMLrsrEhBtrzln3qorm0%2FXIxWKrH9ag4EBaRXHPEzNxowLtDutbdnIk%2B3F8UKxneUc0dltn3lzMXw%2FAMQiQKgTGs%2FpYL2XCiWj32Psu%2Fr2EdGZMEmj39Y786TJ5BPmA%2F7BIvcjQDGbT3xAHIpviz2qFjtZ%2Brv8XHCMPXkw78GOqUBujR62dU5%2Ffh94B8%2BEjei6kFNdEpi1qt%2FA0F%2FlPpmatmxfnOjDur5ENoavMAcIsjz8%2FibacypOQ%2FDOvwN6%2FI%2FzOfGclSVfJpzgtMxJNM8hAk9joQacjUop8N92NiUI97WBaPsijb0enWzHJX7yCCmFC%2FwNcXlrByXYXqfCrMv0WHj9bsr8GR%2FTPWjPa33MCGJ8UOmfpuO97ssJZAw3lqQX0Q2W5FT&X-Amz-Signature=aa3eedace10a0141243a895a718791ccdf2bb283050fa16227dc34e91cbdf22f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7WSMO4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqRJ1hxa5AqgSLOFOEZbcNHJ2fKTkNs90%2B49ejv0HZqgIgRFq%2F%2FA%2F4PR1ramsLPikPTNrlRHmv%2B3akwM0gJZmWwpEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG6ahp%2BiEonYzahpmircA224O%2F9VY11%2Fy1oLvhp4UmoOFvl0dA8CRbhoWKcqMFF8VrUrg4Bn1isbyVcLXqAXwRhue1XNKhKHRhNxSs1BMt7Q80sDMj0pQe4ybdJrtFJFH%2FdZA2XUzedJ7hJxiNrJGecbJbZoBCLPK2K7foDhH0ShFuTYYQwhnFs1zBJj%2FNMbpLughnlxK8EXg3Jr%2FG%2FfcdZS7tUW8B73%2FzIi1%2BKiD7S%2FLXmXrnWDx%2BWmC0qe73XoxJmjzQ60202xqzwk5uYGLnFVSFVIKBeejzAJbkhRnK2ke64Blz0Bd0gziC18cUs%2BDYslx9NsupHAcm%2BN3lnZtpWWzPEgYkB%2Br8LFSzUFwvFKHco68Ppd2LTZMblMPQrKhYQC9HTsfGxosDBaH6hKy5VAJPfxzUKPkJJxPomGm2biPqMuJfdCEX%2FEVjNgDx5Tib0yO%2B%2F1hOX0uEHdC9GhBcvI1xFfUCKhFsnXmO2zAiqakXDTMLrsrEhBtrzln3qorm0%2FXIxWKrH9ag4EBaRXHPEzNxowLtDutbdnIk%2B3F8UKxneUc0dltn3lzMXw%2FAMQiQKgTGs%2FpYL2XCiWj32Psu%2Fr2EdGZMEmj39Y786TJ5BPmA%2F7BIvcjQDGbT3xAHIpviz2qFjtZ%2Brv8XHCMPXkw78GOqUBujR62dU5%2Ffh94B8%2BEjei6kFNdEpi1qt%2FA0F%2FlPpmatmxfnOjDur5ENoavMAcIsjz8%2FibacypOQ%2FDOvwN6%2FI%2FzOfGclSVfJpzgtMxJNM8hAk9joQacjUop8N92NiUI97WBaPsijb0enWzHJX7yCCmFC%2FwNcXlrByXYXqfCrMv0WHj9bsr8GR%2FTPWjPa33MCGJ8UOmfpuO97ssJZAw3lqQX0Q2W5FT&X-Amz-Signature=d4dfecacbeb79bf4b83b97be746716fd676a18dc0b6ef8eca44767f32ba77b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7WSMO4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqRJ1hxa5AqgSLOFOEZbcNHJ2fKTkNs90%2B49ejv0HZqgIgRFq%2F%2FA%2F4PR1ramsLPikPTNrlRHmv%2B3akwM0gJZmWwpEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG6ahp%2BiEonYzahpmircA224O%2F9VY11%2Fy1oLvhp4UmoOFvl0dA8CRbhoWKcqMFF8VrUrg4Bn1isbyVcLXqAXwRhue1XNKhKHRhNxSs1BMt7Q80sDMj0pQe4ybdJrtFJFH%2FdZA2XUzedJ7hJxiNrJGecbJbZoBCLPK2K7foDhH0ShFuTYYQwhnFs1zBJj%2FNMbpLughnlxK8EXg3Jr%2FG%2FfcdZS7tUW8B73%2FzIi1%2BKiD7S%2FLXmXrnWDx%2BWmC0qe73XoxJmjzQ60202xqzwk5uYGLnFVSFVIKBeejzAJbkhRnK2ke64Blz0Bd0gziC18cUs%2BDYslx9NsupHAcm%2BN3lnZtpWWzPEgYkB%2Br8LFSzUFwvFKHco68Ppd2LTZMblMPQrKhYQC9HTsfGxosDBaH6hKy5VAJPfxzUKPkJJxPomGm2biPqMuJfdCEX%2FEVjNgDx5Tib0yO%2B%2F1hOX0uEHdC9GhBcvI1xFfUCKhFsnXmO2zAiqakXDTMLrsrEhBtrzln3qorm0%2FXIxWKrH9ag4EBaRXHPEzNxowLtDutbdnIk%2B3F8UKxneUc0dltn3lzMXw%2FAMQiQKgTGs%2FpYL2XCiWj32Psu%2Fr2EdGZMEmj39Y786TJ5BPmA%2F7BIvcjQDGbT3xAHIpviz2qFjtZ%2Brv8XHCMPXkw78GOqUBujR62dU5%2Ffh94B8%2BEjei6kFNdEpi1qt%2FA0F%2FlPpmatmxfnOjDur5ENoavMAcIsjz8%2FibacypOQ%2FDOvwN6%2FI%2FzOfGclSVfJpzgtMxJNM8hAk9joQacjUop8N92NiUI97WBaPsijb0enWzHJX7yCCmFC%2FwNcXlrByXYXqfCrMv0WHj9bsr8GR%2FTPWjPa33MCGJ8UOmfpuO97ssJZAw3lqQX0Q2W5FT&X-Amz-Signature=55ce9c6d25df3950d13b408901fc1ccd3aef8deb09627b8e626873e636b3697b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7WSMO4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqRJ1hxa5AqgSLOFOEZbcNHJ2fKTkNs90%2B49ejv0HZqgIgRFq%2F%2FA%2F4PR1ramsLPikPTNrlRHmv%2B3akwM0gJZmWwpEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG6ahp%2BiEonYzahpmircA224O%2F9VY11%2Fy1oLvhp4UmoOFvl0dA8CRbhoWKcqMFF8VrUrg4Bn1isbyVcLXqAXwRhue1XNKhKHRhNxSs1BMt7Q80sDMj0pQe4ybdJrtFJFH%2FdZA2XUzedJ7hJxiNrJGecbJbZoBCLPK2K7foDhH0ShFuTYYQwhnFs1zBJj%2FNMbpLughnlxK8EXg3Jr%2FG%2FfcdZS7tUW8B73%2FzIi1%2BKiD7S%2FLXmXrnWDx%2BWmC0qe73XoxJmjzQ60202xqzwk5uYGLnFVSFVIKBeejzAJbkhRnK2ke64Blz0Bd0gziC18cUs%2BDYslx9NsupHAcm%2BN3lnZtpWWzPEgYkB%2Br8LFSzUFwvFKHco68Ppd2LTZMblMPQrKhYQC9HTsfGxosDBaH6hKy5VAJPfxzUKPkJJxPomGm2biPqMuJfdCEX%2FEVjNgDx5Tib0yO%2B%2F1hOX0uEHdC9GhBcvI1xFfUCKhFsnXmO2zAiqakXDTMLrsrEhBtrzln3qorm0%2FXIxWKrH9ag4EBaRXHPEzNxowLtDutbdnIk%2B3F8UKxneUc0dltn3lzMXw%2FAMQiQKgTGs%2FpYL2XCiWj32Psu%2Fr2EdGZMEmj39Y786TJ5BPmA%2F7BIvcjQDGbT3xAHIpviz2qFjtZ%2Brv8XHCMPXkw78GOqUBujR62dU5%2Ffh94B8%2BEjei6kFNdEpi1qt%2FA0F%2FlPpmatmxfnOjDur5ENoavMAcIsjz8%2FibacypOQ%2FDOvwN6%2FI%2FzOfGclSVfJpzgtMxJNM8hAk9joQacjUop8N92NiUI97WBaPsijb0enWzHJX7yCCmFC%2FwNcXlrByXYXqfCrMv0WHj9bsr8GR%2FTPWjPa33MCGJ8UOmfpuO97ssJZAw3lqQX0Q2W5FT&X-Amz-Signature=99343557ae92a9335f9d6a9b95820d7b7f67c3da6390a592a21f7728129929f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7WSMO4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqRJ1hxa5AqgSLOFOEZbcNHJ2fKTkNs90%2B49ejv0HZqgIgRFq%2F%2FA%2F4PR1ramsLPikPTNrlRHmv%2B3akwM0gJZmWwpEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG6ahp%2BiEonYzahpmircA224O%2F9VY11%2Fy1oLvhp4UmoOFvl0dA8CRbhoWKcqMFF8VrUrg4Bn1isbyVcLXqAXwRhue1XNKhKHRhNxSs1BMt7Q80sDMj0pQe4ybdJrtFJFH%2FdZA2XUzedJ7hJxiNrJGecbJbZoBCLPK2K7foDhH0ShFuTYYQwhnFs1zBJj%2FNMbpLughnlxK8EXg3Jr%2FG%2FfcdZS7tUW8B73%2FzIi1%2BKiD7S%2FLXmXrnWDx%2BWmC0qe73XoxJmjzQ60202xqzwk5uYGLnFVSFVIKBeejzAJbkhRnK2ke64Blz0Bd0gziC18cUs%2BDYslx9NsupHAcm%2BN3lnZtpWWzPEgYkB%2Br8LFSzUFwvFKHco68Ppd2LTZMblMPQrKhYQC9HTsfGxosDBaH6hKy5VAJPfxzUKPkJJxPomGm2biPqMuJfdCEX%2FEVjNgDx5Tib0yO%2B%2F1hOX0uEHdC9GhBcvI1xFfUCKhFsnXmO2zAiqakXDTMLrsrEhBtrzln3qorm0%2FXIxWKrH9ag4EBaRXHPEzNxowLtDutbdnIk%2B3F8UKxneUc0dltn3lzMXw%2FAMQiQKgTGs%2FpYL2XCiWj32Psu%2Fr2EdGZMEmj39Y786TJ5BPmA%2F7BIvcjQDGbT3xAHIpviz2qFjtZ%2Brv8XHCMPXkw78GOqUBujR62dU5%2Ffh94B8%2BEjei6kFNdEpi1qt%2FA0F%2FlPpmatmxfnOjDur5ENoavMAcIsjz8%2FibacypOQ%2FDOvwN6%2FI%2FzOfGclSVfJpzgtMxJNM8hAk9joQacjUop8N92NiUI97WBaPsijb0enWzHJX7yCCmFC%2FwNcXlrByXYXqfCrMv0WHj9bsr8GR%2FTPWjPa33MCGJ8UOmfpuO97ssJZAw3lqQX0Q2W5FT&X-Amz-Signature=7d79f0c9613d422526f229df10632087ac9839d43b5eb1c50a47850cfe17f88f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7WSMO4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqRJ1hxa5AqgSLOFOEZbcNHJ2fKTkNs90%2B49ejv0HZqgIgRFq%2F%2FA%2F4PR1ramsLPikPTNrlRHmv%2B3akwM0gJZmWwpEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG6ahp%2BiEonYzahpmircA224O%2F9VY11%2Fy1oLvhp4UmoOFvl0dA8CRbhoWKcqMFF8VrUrg4Bn1isbyVcLXqAXwRhue1XNKhKHRhNxSs1BMt7Q80sDMj0pQe4ybdJrtFJFH%2FdZA2XUzedJ7hJxiNrJGecbJbZoBCLPK2K7foDhH0ShFuTYYQwhnFs1zBJj%2FNMbpLughnlxK8EXg3Jr%2FG%2FfcdZS7tUW8B73%2FzIi1%2BKiD7S%2FLXmXrnWDx%2BWmC0qe73XoxJmjzQ60202xqzwk5uYGLnFVSFVIKBeejzAJbkhRnK2ke64Blz0Bd0gziC18cUs%2BDYslx9NsupHAcm%2BN3lnZtpWWzPEgYkB%2Br8LFSzUFwvFKHco68Ppd2LTZMblMPQrKhYQC9HTsfGxosDBaH6hKy5VAJPfxzUKPkJJxPomGm2biPqMuJfdCEX%2FEVjNgDx5Tib0yO%2B%2F1hOX0uEHdC9GhBcvI1xFfUCKhFsnXmO2zAiqakXDTMLrsrEhBtrzln3qorm0%2FXIxWKrH9ag4EBaRXHPEzNxowLtDutbdnIk%2B3F8UKxneUc0dltn3lzMXw%2FAMQiQKgTGs%2FpYL2XCiWj32Psu%2Fr2EdGZMEmj39Y786TJ5BPmA%2F7BIvcjQDGbT3xAHIpviz2qFjtZ%2Brv8XHCMPXkw78GOqUBujR62dU5%2Ffh94B8%2BEjei6kFNdEpi1qt%2FA0F%2FlPpmatmxfnOjDur5ENoavMAcIsjz8%2FibacypOQ%2FDOvwN6%2FI%2FzOfGclSVfJpzgtMxJNM8hAk9joQacjUop8N92NiUI97WBaPsijb0enWzHJX7yCCmFC%2FwNcXlrByXYXqfCrMv0WHj9bsr8GR%2FTPWjPa33MCGJ8UOmfpuO97ssJZAw3lqQX0Q2W5FT&X-Amz-Signature=b4535d69872a681f62ca4a978ebab2fa33c541bc5fe82a15589e7d21c3860e04&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7WSMO4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqRJ1hxa5AqgSLOFOEZbcNHJ2fKTkNs90%2B49ejv0HZqgIgRFq%2F%2FA%2F4PR1ramsLPikPTNrlRHmv%2B3akwM0gJZmWwpEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG6ahp%2BiEonYzahpmircA224O%2F9VY11%2Fy1oLvhp4UmoOFvl0dA8CRbhoWKcqMFF8VrUrg4Bn1isbyVcLXqAXwRhue1XNKhKHRhNxSs1BMt7Q80sDMj0pQe4ybdJrtFJFH%2FdZA2XUzedJ7hJxiNrJGecbJbZoBCLPK2K7foDhH0ShFuTYYQwhnFs1zBJj%2FNMbpLughnlxK8EXg3Jr%2FG%2FfcdZS7tUW8B73%2FzIi1%2BKiD7S%2FLXmXrnWDx%2BWmC0qe73XoxJmjzQ60202xqzwk5uYGLnFVSFVIKBeejzAJbkhRnK2ke64Blz0Bd0gziC18cUs%2BDYslx9NsupHAcm%2BN3lnZtpWWzPEgYkB%2Br8LFSzUFwvFKHco68Ppd2LTZMblMPQrKhYQC9HTsfGxosDBaH6hKy5VAJPfxzUKPkJJxPomGm2biPqMuJfdCEX%2FEVjNgDx5Tib0yO%2B%2F1hOX0uEHdC9GhBcvI1xFfUCKhFsnXmO2zAiqakXDTMLrsrEhBtrzln3qorm0%2FXIxWKrH9ag4EBaRXHPEzNxowLtDutbdnIk%2B3F8UKxneUc0dltn3lzMXw%2FAMQiQKgTGs%2FpYL2XCiWj32Psu%2Fr2EdGZMEmj39Y786TJ5BPmA%2F7BIvcjQDGbT3xAHIpviz2qFjtZ%2Brv8XHCMPXkw78GOqUBujR62dU5%2Ffh94B8%2BEjei6kFNdEpi1qt%2FA0F%2FlPpmatmxfnOjDur5ENoavMAcIsjz8%2FibacypOQ%2FDOvwN6%2FI%2FzOfGclSVfJpzgtMxJNM8hAk9joQacjUop8N92NiUI97WBaPsijb0enWzHJX7yCCmFC%2FwNcXlrByXYXqfCrMv0WHj9bsr8GR%2FTPWjPa33MCGJ8UOmfpuO97ssJZAw3lqQX0Q2W5FT&X-Amz-Signature=645007d011bdeecd58b38aa1d0ceae75301aa25fd408eb4a37d7ccb138cccddd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
