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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632H6NIIE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDTN3Q%2F%2FAG4E3bAqIs5oqew8RlaOXZklf897tEP6%2FdRbAIgEzKk1kJYxvxvyjx0WyLMUSNjbYZC%2BgRCoWFJGVr323YqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF4KJH%2BPomEp8GATSrcA2pxaWi5sP3FQmzz130gjs6RCuKGLsTtZCV1nE1VW4z0it2UfauJpXEdS6l77mqjvoW%2BuBACL93g800jih8OCwcmq4zv2vx8H5eqV%2Bk5uPQMz4UyS4c92JIufJlcUF6eXNwuOp6VWlA4xUdU7Qim2VG%2BmP9GZnaxDDkqZiwx62fIsZlt0ZZk1LFhrHn5LEvnHtNih0HJ3w%2FdDXcZbQS9CWW3yLofg6dSEVY1rSba4FtHMgfVrP7aZPUrteFJRc%2BKuS8rhhBKDFr1fW3LY%2FZ4rnHZx5k2bIzAZuCSHQakU2xhGQTosFGA3wyBefisgQ4MVrnmT5FpvMuVQeebiPzKfWm0P5ztLEuNS8GZwEZvWvUKTdomCIWUvApCt2TnUH6sO8fFVdD8Catutv8b8ed0D2vJGz1mkarWt1kJF3GfyS84lXYL1qKRucJU1bvaWBAkwUTf%2FBtNQYb0psz0hm93hOoL6EHwJGHIqsNqfY%2BEP%2BDEc9UN77uPXw8hHuwtwtBlkaAPaWCs9WSBBRbnKBsZCJywSlHHA1izTxXaMRFdpM7m9Mq1vfJijFiwAncz4i9zXDIvI1sOgWVWN8EYesgMi4VNy2GK2q6EQEiaNjhiWoInaHgd1YvmlP986XblMJ2M5b8GOqUBmSinUNeHluNIcy%2B%2Fdkfp1U3%2FeTWNoMXoMtWfKmvMTrFZu76PwLYvo%2FPm%2Bof8HfalNlcnU0lw9x%2FA4NY%2FXhGLUkPHSt912YyBHaib8tUafl6P89yvP5Bpn9qYEHLXjYaku%2BdYJosa8LMvUNLo9GGyoIbFhQ1q%2B1yOoZb4Oa8Moc6CAxPg%2B2KggR0%2FgXD4NQ6kcPKYVFG900aP6G0ETq5e5fu9ktbC&X-Amz-Signature=e4159ad69c2d97d44e2aa900a6051759ce8e48e520da539b9b53cd752af5e643&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632H6NIIE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDTN3Q%2F%2FAG4E3bAqIs5oqew8RlaOXZklf897tEP6%2FdRbAIgEzKk1kJYxvxvyjx0WyLMUSNjbYZC%2BgRCoWFJGVr323YqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF4KJH%2BPomEp8GATSrcA2pxaWi5sP3FQmzz130gjs6RCuKGLsTtZCV1nE1VW4z0it2UfauJpXEdS6l77mqjvoW%2BuBACL93g800jih8OCwcmq4zv2vx8H5eqV%2Bk5uPQMz4UyS4c92JIufJlcUF6eXNwuOp6VWlA4xUdU7Qim2VG%2BmP9GZnaxDDkqZiwx62fIsZlt0ZZk1LFhrHn5LEvnHtNih0HJ3w%2FdDXcZbQS9CWW3yLofg6dSEVY1rSba4FtHMgfVrP7aZPUrteFJRc%2BKuS8rhhBKDFr1fW3LY%2FZ4rnHZx5k2bIzAZuCSHQakU2xhGQTosFGA3wyBefisgQ4MVrnmT5FpvMuVQeebiPzKfWm0P5ztLEuNS8GZwEZvWvUKTdomCIWUvApCt2TnUH6sO8fFVdD8Catutv8b8ed0D2vJGz1mkarWt1kJF3GfyS84lXYL1qKRucJU1bvaWBAkwUTf%2FBtNQYb0psz0hm93hOoL6EHwJGHIqsNqfY%2BEP%2BDEc9UN77uPXw8hHuwtwtBlkaAPaWCs9WSBBRbnKBsZCJywSlHHA1izTxXaMRFdpM7m9Mq1vfJijFiwAncz4i9zXDIvI1sOgWVWN8EYesgMi4VNy2GK2q6EQEiaNjhiWoInaHgd1YvmlP986XblMJ2M5b8GOqUBmSinUNeHluNIcy%2B%2Fdkfp1U3%2FeTWNoMXoMtWfKmvMTrFZu76PwLYvo%2FPm%2Bof8HfalNlcnU0lw9x%2FA4NY%2FXhGLUkPHSt912YyBHaib8tUafl6P89yvP5Bpn9qYEHLXjYaku%2BdYJosa8LMvUNLo9GGyoIbFhQ1q%2B1yOoZb4Oa8Moc6CAxPg%2B2KggR0%2FgXD4NQ6kcPKYVFG900aP6G0ETq5e5fu9ktbC&X-Amz-Signature=243c1c52715593a14d961f05fbb2e54c057a7ac9ad744c54c39e0f836343db0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632H6NIIE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDTN3Q%2F%2FAG4E3bAqIs5oqew8RlaOXZklf897tEP6%2FdRbAIgEzKk1kJYxvxvyjx0WyLMUSNjbYZC%2BgRCoWFJGVr323YqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF4KJH%2BPomEp8GATSrcA2pxaWi5sP3FQmzz130gjs6RCuKGLsTtZCV1nE1VW4z0it2UfauJpXEdS6l77mqjvoW%2BuBACL93g800jih8OCwcmq4zv2vx8H5eqV%2Bk5uPQMz4UyS4c92JIufJlcUF6eXNwuOp6VWlA4xUdU7Qim2VG%2BmP9GZnaxDDkqZiwx62fIsZlt0ZZk1LFhrHn5LEvnHtNih0HJ3w%2FdDXcZbQS9CWW3yLofg6dSEVY1rSba4FtHMgfVrP7aZPUrteFJRc%2BKuS8rhhBKDFr1fW3LY%2FZ4rnHZx5k2bIzAZuCSHQakU2xhGQTosFGA3wyBefisgQ4MVrnmT5FpvMuVQeebiPzKfWm0P5ztLEuNS8GZwEZvWvUKTdomCIWUvApCt2TnUH6sO8fFVdD8Catutv8b8ed0D2vJGz1mkarWt1kJF3GfyS84lXYL1qKRucJU1bvaWBAkwUTf%2FBtNQYb0psz0hm93hOoL6EHwJGHIqsNqfY%2BEP%2BDEc9UN77uPXw8hHuwtwtBlkaAPaWCs9WSBBRbnKBsZCJywSlHHA1izTxXaMRFdpM7m9Mq1vfJijFiwAncz4i9zXDIvI1sOgWVWN8EYesgMi4VNy2GK2q6EQEiaNjhiWoInaHgd1YvmlP986XblMJ2M5b8GOqUBmSinUNeHluNIcy%2B%2Fdkfp1U3%2FeTWNoMXoMtWfKmvMTrFZu76PwLYvo%2FPm%2Bof8HfalNlcnU0lw9x%2FA4NY%2FXhGLUkPHSt912YyBHaib8tUafl6P89yvP5Bpn9qYEHLXjYaku%2BdYJosa8LMvUNLo9GGyoIbFhQ1q%2B1yOoZb4Oa8Moc6CAxPg%2B2KggR0%2FgXD4NQ6kcPKYVFG900aP6G0ETq5e5fu9ktbC&X-Amz-Signature=388ba1127072d301f1d101f5b6f9b33eed904775c698815069ba4d8a2d448bf1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632H6NIIE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDTN3Q%2F%2FAG4E3bAqIs5oqew8RlaOXZklf897tEP6%2FdRbAIgEzKk1kJYxvxvyjx0WyLMUSNjbYZC%2BgRCoWFJGVr323YqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF4KJH%2BPomEp8GATSrcA2pxaWi5sP3FQmzz130gjs6RCuKGLsTtZCV1nE1VW4z0it2UfauJpXEdS6l77mqjvoW%2BuBACL93g800jih8OCwcmq4zv2vx8H5eqV%2Bk5uPQMz4UyS4c92JIufJlcUF6eXNwuOp6VWlA4xUdU7Qim2VG%2BmP9GZnaxDDkqZiwx62fIsZlt0ZZk1LFhrHn5LEvnHtNih0HJ3w%2FdDXcZbQS9CWW3yLofg6dSEVY1rSba4FtHMgfVrP7aZPUrteFJRc%2BKuS8rhhBKDFr1fW3LY%2FZ4rnHZx5k2bIzAZuCSHQakU2xhGQTosFGA3wyBefisgQ4MVrnmT5FpvMuVQeebiPzKfWm0P5ztLEuNS8GZwEZvWvUKTdomCIWUvApCt2TnUH6sO8fFVdD8Catutv8b8ed0D2vJGz1mkarWt1kJF3GfyS84lXYL1qKRucJU1bvaWBAkwUTf%2FBtNQYb0psz0hm93hOoL6EHwJGHIqsNqfY%2BEP%2BDEc9UN77uPXw8hHuwtwtBlkaAPaWCs9WSBBRbnKBsZCJywSlHHA1izTxXaMRFdpM7m9Mq1vfJijFiwAncz4i9zXDIvI1sOgWVWN8EYesgMi4VNy2GK2q6EQEiaNjhiWoInaHgd1YvmlP986XblMJ2M5b8GOqUBmSinUNeHluNIcy%2B%2Fdkfp1U3%2FeTWNoMXoMtWfKmvMTrFZu76PwLYvo%2FPm%2Bof8HfalNlcnU0lw9x%2FA4NY%2FXhGLUkPHSt912YyBHaib8tUafl6P89yvP5Bpn9qYEHLXjYaku%2BdYJosa8LMvUNLo9GGyoIbFhQ1q%2B1yOoZb4Oa8Moc6CAxPg%2B2KggR0%2FgXD4NQ6kcPKYVFG900aP6G0ETq5e5fu9ktbC&X-Amz-Signature=6b16e28598b452c8587948ab58925b2b9ce66e05d1f7f50bc80a6127406cf46d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632H6NIIE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDTN3Q%2F%2FAG4E3bAqIs5oqew8RlaOXZklf897tEP6%2FdRbAIgEzKk1kJYxvxvyjx0WyLMUSNjbYZC%2BgRCoWFJGVr323YqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF4KJH%2BPomEp8GATSrcA2pxaWi5sP3FQmzz130gjs6RCuKGLsTtZCV1nE1VW4z0it2UfauJpXEdS6l77mqjvoW%2BuBACL93g800jih8OCwcmq4zv2vx8H5eqV%2Bk5uPQMz4UyS4c92JIufJlcUF6eXNwuOp6VWlA4xUdU7Qim2VG%2BmP9GZnaxDDkqZiwx62fIsZlt0ZZk1LFhrHn5LEvnHtNih0HJ3w%2FdDXcZbQS9CWW3yLofg6dSEVY1rSba4FtHMgfVrP7aZPUrteFJRc%2BKuS8rhhBKDFr1fW3LY%2FZ4rnHZx5k2bIzAZuCSHQakU2xhGQTosFGA3wyBefisgQ4MVrnmT5FpvMuVQeebiPzKfWm0P5ztLEuNS8GZwEZvWvUKTdomCIWUvApCt2TnUH6sO8fFVdD8Catutv8b8ed0D2vJGz1mkarWt1kJF3GfyS84lXYL1qKRucJU1bvaWBAkwUTf%2FBtNQYb0psz0hm93hOoL6EHwJGHIqsNqfY%2BEP%2BDEc9UN77uPXw8hHuwtwtBlkaAPaWCs9WSBBRbnKBsZCJywSlHHA1izTxXaMRFdpM7m9Mq1vfJijFiwAncz4i9zXDIvI1sOgWVWN8EYesgMi4VNy2GK2q6EQEiaNjhiWoInaHgd1YvmlP986XblMJ2M5b8GOqUBmSinUNeHluNIcy%2B%2Fdkfp1U3%2FeTWNoMXoMtWfKmvMTrFZu76PwLYvo%2FPm%2Bof8HfalNlcnU0lw9x%2FA4NY%2FXhGLUkPHSt912YyBHaib8tUafl6P89yvP5Bpn9qYEHLXjYaku%2BdYJosa8LMvUNLo9GGyoIbFhQ1q%2B1yOoZb4Oa8Moc6CAxPg%2B2KggR0%2FgXD4NQ6kcPKYVFG900aP6G0ETq5e5fu9ktbC&X-Amz-Signature=ca1b85b265a76d1f6731767d63e4ccc69abb70576329f35a3117c0a9939764b7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632H6NIIE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDTN3Q%2F%2FAG4E3bAqIs5oqew8RlaOXZklf897tEP6%2FdRbAIgEzKk1kJYxvxvyjx0WyLMUSNjbYZC%2BgRCoWFJGVr323YqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF4KJH%2BPomEp8GATSrcA2pxaWi5sP3FQmzz130gjs6RCuKGLsTtZCV1nE1VW4z0it2UfauJpXEdS6l77mqjvoW%2BuBACL93g800jih8OCwcmq4zv2vx8H5eqV%2Bk5uPQMz4UyS4c92JIufJlcUF6eXNwuOp6VWlA4xUdU7Qim2VG%2BmP9GZnaxDDkqZiwx62fIsZlt0ZZk1LFhrHn5LEvnHtNih0HJ3w%2FdDXcZbQS9CWW3yLofg6dSEVY1rSba4FtHMgfVrP7aZPUrteFJRc%2BKuS8rhhBKDFr1fW3LY%2FZ4rnHZx5k2bIzAZuCSHQakU2xhGQTosFGA3wyBefisgQ4MVrnmT5FpvMuVQeebiPzKfWm0P5ztLEuNS8GZwEZvWvUKTdomCIWUvApCt2TnUH6sO8fFVdD8Catutv8b8ed0D2vJGz1mkarWt1kJF3GfyS84lXYL1qKRucJU1bvaWBAkwUTf%2FBtNQYb0psz0hm93hOoL6EHwJGHIqsNqfY%2BEP%2BDEc9UN77uPXw8hHuwtwtBlkaAPaWCs9WSBBRbnKBsZCJywSlHHA1izTxXaMRFdpM7m9Mq1vfJijFiwAncz4i9zXDIvI1sOgWVWN8EYesgMi4VNy2GK2q6EQEiaNjhiWoInaHgd1YvmlP986XblMJ2M5b8GOqUBmSinUNeHluNIcy%2B%2Fdkfp1U3%2FeTWNoMXoMtWfKmvMTrFZu76PwLYvo%2FPm%2Bof8HfalNlcnU0lw9x%2FA4NY%2FXhGLUkPHSt912YyBHaib8tUafl6P89yvP5Bpn9qYEHLXjYaku%2BdYJosa8LMvUNLo9GGyoIbFhQ1q%2B1yOoZb4Oa8Moc6CAxPg%2B2KggR0%2FgXD4NQ6kcPKYVFG900aP6G0ETq5e5fu9ktbC&X-Amz-Signature=5bda17480b019394e458a7b78bfb18b1e255bcd028cab04ef1a99e42e0d36d24&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632H6NIIE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDTN3Q%2F%2FAG4E3bAqIs5oqew8RlaOXZklf897tEP6%2FdRbAIgEzKk1kJYxvxvyjx0WyLMUSNjbYZC%2BgRCoWFJGVr323YqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF4KJH%2BPomEp8GATSrcA2pxaWi5sP3FQmzz130gjs6RCuKGLsTtZCV1nE1VW4z0it2UfauJpXEdS6l77mqjvoW%2BuBACL93g800jih8OCwcmq4zv2vx8H5eqV%2Bk5uPQMz4UyS4c92JIufJlcUF6eXNwuOp6VWlA4xUdU7Qim2VG%2BmP9GZnaxDDkqZiwx62fIsZlt0ZZk1LFhrHn5LEvnHtNih0HJ3w%2FdDXcZbQS9CWW3yLofg6dSEVY1rSba4FtHMgfVrP7aZPUrteFJRc%2BKuS8rhhBKDFr1fW3LY%2FZ4rnHZx5k2bIzAZuCSHQakU2xhGQTosFGA3wyBefisgQ4MVrnmT5FpvMuVQeebiPzKfWm0P5ztLEuNS8GZwEZvWvUKTdomCIWUvApCt2TnUH6sO8fFVdD8Catutv8b8ed0D2vJGz1mkarWt1kJF3GfyS84lXYL1qKRucJU1bvaWBAkwUTf%2FBtNQYb0psz0hm93hOoL6EHwJGHIqsNqfY%2BEP%2BDEc9UN77uPXw8hHuwtwtBlkaAPaWCs9WSBBRbnKBsZCJywSlHHA1izTxXaMRFdpM7m9Mq1vfJijFiwAncz4i9zXDIvI1sOgWVWN8EYesgMi4VNy2GK2q6EQEiaNjhiWoInaHgd1YvmlP986XblMJ2M5b8GOqUBmSinUNeHluNIcy%2B%2Fdkfp1U3%2FeTWNoMXoMtWfKmvMTrFZu76PwLYvo%2FPm%2Bof8HfalNlcnU0lw9x%2FA4NY%2FXhGLUkPHSt912YyBHaib8tUafl6P89yvP5Bpn9qYEHLXjYaku%2BdYJosa8LMvUNLo9GGyoIbFhQ1q%2B1yOoZb4Oa8Moc6CAxPg%2B2KggR0%2FgXD4NQ6kcPKYVFG900aP6G0ETq5e5fu9ktbC&X-Amz-Signature=bf135c41bf46311c933fa5dcb03d9f7f7c92d740ac34359b20cbdece4fb8b0af&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
