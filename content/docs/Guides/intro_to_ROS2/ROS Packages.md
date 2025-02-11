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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYY7CLL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1VG5LKAKLgpqR0j0ygaNB7%2FazC6KqcBS3fI4xDGJoFgIgf%2BwvQ1vmjmOOIEUQdsqN0OYUxMcM%2Bf8JVkb1pOAZfXEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVDdhcYtJMzp5rThSrcA15%2BK6VZ8bVXaGo92lbl6zSBVlk9x%2BAS6%2BGTAJEflLMdwTWgouvZZT4z63YgwW6xrdtv1b19BE5%2BcFq4gE%2FGIV0Y2Cv68iOaPQzmGegk3MxwRBv6%2F5oWi5y9xDppB9eBwGIcK5WWqnRZ6H16gAFfgmuTOPKYaqQd9wg0osoVRGsDJB8GdiAM%2FUXEn3b01dmdn%2BcNzwnRMdACPLG%2F24O2keeiVzf%2BECppfD%2Fr2%2BLwOoq%2FZ8FFPZjeg39oO1%2Fs4WXjAsleJFA6ClYu0BA4FWT%2Fa892uVYGjZ3qn7PzzIey%2FNTTJw0GQ0HCcGBIbSufHlSZjD81ZsRylaZOClX8%2B1NitRpHJgtT9zkJ9OSEoYj7HVLtBXPucVRv7On9G%2FuDUAYmpahh6u%2BhCSJQjt%2BVmEeyVULbkk7XkRRUBEVHEBb6n6XhWo5DhwsRjipWV7PoCWtTBbynV%2BugNhbvZbobavrURr7%2BvkjeeistH17t8Qa0DRXIgE7GW6xyLplayppoamypZD%2BpFnw%2FL0guvam2n6DCyv%2F8CA1xitkBrGhkFQKQFWesH382krDxq2AHR0NWmCk2O6IYdqFrZlR0hQKz%2FXsRuvwmPnRI3sJo5CEgGFN7jnIj76C3ilNM5iWAgDTmMOPIrr0GOqUB1eLrApIM0N3uqKziSQpbINqRT9gC3z%2F6j5huZtLk0QM0wEQlBIq6Vt6OMFNCMXgbuDYI36Qn%2BVY2GJ8SVg3u0Uj7PtdSFRSN3F7sjUq52dirAfPnUNuk%2BKEwUo%2B3O2t%2BMNahrkP6ZssykOEnOpTaKgJFAshc5Eacr618VsDu3YS8p%2F2JId40eJL8yjjxkhBru456I9E66yDCdIBalUDyg6qn1euE&X-Amz-Signature=9edb3c2bfbcbfd96d438b82bc019ac3143493955772b6590748688b6aa7b09a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYY7CLL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1VG5LKAKLgpqR0j0ygaNB7%2FazC6KqcBS3fI4xDGJoFgIgf%2BwvQ1vmjmOOIEUQdsqN0OYUxMcM%2Bf8JVkb1pOAZfXEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVDdhcYtJMzp5rThSrcA15%2BK6VZ8bVXaGo92lbl6zSBVlk9x%2BAS6%2BGTAJEflLMdwTWgouvZZT4z63YgwW6xrdtv1b19BE5%2BcFq4gE%2FGIV0Y2Cv68iOaPQzmGegk3MxwRBv6%2F5oWi5y9xDppB9eBwGIcK5WWqnRZ6H16gAFfgmuTOPKYaqQd9wg0osoVRGsDJB8GdiAM%2FUXEn3b01dmdn%2BcNzwnRMdACPLG%2F24O2keeiVzf%2BECppfD%2Fr2%2BLwOoq%2FZ8FFPZjeg39oO1%2Fs4WXjAsleJFA6ClYu0BA4FWT%2Fa892uVYGjZ3qn7PzzIey%2FNTTJw0GQ0HCcGBIbSufHlSZjD81ZsRylaZOClX8%2B1NitRpHJgtT9zkJ9OSEoYj7HVLtBXPucVRv7On9G%2FuDUAYmpahh6u%2BhCSJQjt%2BVmEeyVULbkk7XkRRUBEVHEBb6n6XhWo5DhwsRjipWV7PoCWtTBbynV%2BugNhbvZbobavrURr7%2BvkjeeistH17t8Qa0DRXIgE7GW6xyLplayppoamypZD%2BpFnw%2FL0guvam2n6DCyv%2F8CA1xitkBrGhkFQKQFWesH382krDxq2AHR0NWmCk2O6IYdqFrZlR0hQKz%2FXsRuvwmPnRI3sJo5CEgGFN7jnIj76C3ilNM5iWAgDTmMOPIrr0GOqUB1eLrApIM0N3uqKziSQpbINqRT9gC3z%2F6j5huZtLk0QM0wEQlBIq6Vt6OMFNCMXgbuDYI36Qn%2BVY2GJ8SVg3u0Uj7PtdSFRSN3F7sjUq52dirAfPnUNuk%2BKEwUo%2B3O2t%2BMNahrkP6ZssykOEnOpTaKgJFAshc5Eacr618VsDu3YS8p%2F2JId40eJL8yjjxkhBru456I9E66yDCdIBalUDyg6qn1euE&X-Amz-Signature=6da2e84f94ba31ea896562285b377cdb7b7ec8c21f3d496952b2a3e4588cc7d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYY7CLL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1VG5LKAKLgpqR0j0ygaNB7%2FazC6KqcBS3fI4xDGJoFgIgf%2BwvQ1vmjmOOIEUQdsqN0OYUxMcM%2Bf8JVkb1pOAZfXEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVDdhcYtJMzp5rThSrcA15%2BK6VZ8bVXaGo92lbl6zSBVlk9x%2BAS6%2BGTAJEflLMdwTWgouvZZT4z63YgwW6xrdtv1b19BE5%2BcFq4gE%2FGIV0Y2Cv68iOaPQzmGegk3MxwRBv6%2F5oWi5y9xDppB9eBwGIcK5WWqnRZ6H16gAFfgmuTOPKYaqQd9wg0osoVRGsDJB8GdiAM%2FUXEn3b01dmdn%2BcNzwnRMdACPLG%2F24O2keeiVzf%2BECppfD%2Fr2%2BLwOoq%2FZ8FFPZjeg39oO1%2Fs4WXjAsleJFA6ClYu0BA4FWT%2Fa892uVYGjZ3qn7PzzIey%2FNTTJw0GQ0HCcGBIbSufHlSZjD81ZsRylaZOClX8%2B1NitRpHJgtT9zkJ9OSEoYj7HVLtBXPucVRv7On9G%2FuDUAYmpahh6u%2BhCSJQjt%2BVmEeyVULbkk7XkRRUBEVHEBb6n6XhWo5DhwsRjipWV7PoCWtTBbynV%2BugNhbvZbobavrURr7%2BvkjeeistH17t8Qa0DRXIgE7GW6xyLplayppoamypZD%2BpFnw%2FL0guvam2n6DCyv%2F8CA1xitkBrGhkFQKQFWesH382krDxq2AHR0NWmCk2O6IYdqFrZlR0hQKz%2FXsRuvwmPnRI3sJo5CEgGFN7jnIj76C3ilNM5iWAgDTmMOPIrr0GOqUB1eLrApIM0N3uqKziSQpbINqRT9gC3z%2F6j5huZtLk0QM0wEQlBIq6Vt6OMFNCMXgbuDYI36Qn%2BVY2GJ8SVg3u0Uj7PtdSFRSN3F7sjUq52dirAfPnUNuk%2BKEwUo%2B3O2t%2BMNahrkP6ZssykOEnOpTaKgJFAshc5Eacr618VsDu3YS8p%2F2JId40eJL8yjjxkhBru456I9E66yDCdIBalUDyg6qn1euE&X-Amz-Signature=414bc15d8324827c556ac0e38dc40f737183955ddfde2530a0d0bf1bb550a018&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYY7CLL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1VG5LKAKLgpqR0j0ygaNB7%2FazC6KqcBS3fI4xDGJoFgIgf%2BwvQ1vmjmOOIEUQdsqN0OYUxMcM%2Bf8JVkb1pOAZfXEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVDdhcYtJMzp5rThSrcA15%2BK6VZ8bVXaGo92lbl6zSBVlk9x%2BAS6%2BGTAJEflLMdwTWgouvZZT4z63YgwW6xrdtv1b19BE5%2BcFq4gE%2FGIV0Y2Cv68iOaPQzmGegk3MxwRBv6%2F5oWi5y9xDppB9eBwGIcK5WWqnRZ6H16gAFfgmuTOPKYaqQd9wg0osoVRGsDJB8GdiAM%2FUXEn3b01dmdn%2BcNzwnRMdACPLG%2F24O2keeiVzf%2BECppfD%2Fr2%2BLwOoq%2FZ8FFPZjeg39oO1%2Fs4WXjAsleJFA6ClYu0BA4FWT%2Fa892uVYGjZ3qn7PzzIey%2FNTTJw0GQ0HCcGBIbSufHlSZjD81ZsRylaZOClX8%2B1NitRpHJgtT9zkJ9OSEoYj7HVLtBXPucVRv7On9G%2FuDUAYmpahh6u%2BhCSJQjt%2BVmEeyVULbkk7XkRRUBEVHEBb6n6XhWo5DhwsRjipWV7PoCWtTBbynV%2BugNhbvZbobavrURr7%2BvkjeeistH17t8Qa0DRXIgE7GW6xyLplayppoamypZD%2BpFnw%2FL0guvam2n6DCyv%2F8CA1xitkBrGhkFQKQFWesH382krDxq2AHR0NWmCk2O6IYdqFrZlR0hQKz%2FXsRuvwmPnRI3sJo5CEgGFN7jnIj76C3ilNM5iWAgDTmMOPIrr0GOqUB1eLrApIM0N3uqKziSQpbINqRT9gC3z%2F6j5huZtLk0QM0wEQlBIq6Vt6OMFNCMXgbuDYI36Qn%2BVY2GJ8SVg3u0Uj7PtdSFRSN3F7sjUq52dirAfPnUNuk%2BKEwUo%2B3O2t%2BMNahrkP6ZssykOEnOpTaKgJFAshc5Eacr618VsDu3YS8p%2F2JId40eJL8yjjxkhBru456I9E66yDCdIBalUDyg6qn1euE&X-Amz-Signature=2b9cd2ccda19770af0c4baea2443a8e45cdf3f7f845a16424c95492767a38a06&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYY7CLL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1VG5LKAKLgpqR0j0ygaNB7%2FazC6KqcBS3fI4xDGJoFgIgf%2BwvQ1vmjmOOIEUQdsqN0OYUxMcM%2Bf8JVkb1pOAZfXEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVDdhcYtJMzp5rThSrcA15%2BK6VZ8bVXaGo92lbl6zSBVlk9x%2BAS6%2BGTAJEflLMdwTWgouvZZT4z63YgwW6xrdtv1b19BE5%2BcFq4gE%2FGIV0Y2Cv68iOaPQzmGegk3MxwRBv6%2F5oWi5y9xDppB9eBwGIcK5WWqnRZ6H16gAFfgmuTOPKYaqQd9wg0osoVRGsDJB8GdiAM%2FUXEn3b01dmdn%2BcNzwnRMdACPLG%2F24O2keeiVzf%2BECppfD%2Fr2%2BLwOoq%2FZ8FFPZjeg39oO1%2Fs4WXjAsleJFA6ClYu0BA4FWT%2Fa892uVYGjZ3qn7PzzIey%2FNTTJw0GQ0HCcGBIbSufHlSZjD81ZsRylaZOClX8%2B1NitRpHJgtT9zkJ9OSEoYj7HVLtBXPucVRv7On9G%2FuDUAYmpahh6u%2BhCSJQjt%2BVmEeyVULbkk7XkRRUBEVHEBb6n6XhWo5DhwsRjipWV7PoCWtTBbynV%2BugNhbvZbobavrURr7%2BvkjeeistH17t8Qa0DRXIgE7GW6xyLplayppoamypZD%2BpFnw%2FL0guvam2n6DCyv%2F8CA1xitkBrGhkFQKQFWesH382krDxq2AHR0NWmCk2O6IYdqFrZlR0hQKz%2FXsRuvwmPnRI3sJo5CEgGFN7jnIj76C3ilNM5iWAgDTmMOPIrr0GOqUB1eLrApIM0N3uqKziSQpbINqRT9gC3z%2F6j5huZtLk0QM0wEQlBIq6Vt6OMFNCMXgbuDYI36Qn%2BVY2GJ8SVg3u0Uj7PtdSFRSN3F7sjUq52dirAfPnUNuk%2BKEwUo%2B3O2t%2BMNahrkP6ZssykOEnOpTaKgJFAshc5Eacr618VsDu3YS8p%2F2JId40eJL8yjjxkhBru456I9E66yDCdIBalUDyg6qn1euE&X-Amz-Signature=de3d1ba987dd992d104d418d70ea4ef050a5b47c286e113fa1fdf78a188ea383&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYY7CLL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1VG5LKAKLgpqR0j0ygaNB7%2FazC6KqcBS3fI4xDGJoFgIgf%2BwvQ1vmjmOOIEUQdsqN0OYUxMcM%2Bf8JVkb1pOAZfXEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVDdhcYtJMzp5rThSrcA15%2BK6VZ8bVXaGo92lbl6zSBVlk9x%2BAS6%2BGTAJEflLMdwTWgouvZZT4z63YgwW6xrdtv1b19BE5%2BcFq4gE%2FGIV0Y2Cv68iOaPQzmGegk3MxwRBv6%2F5oWi5y9xDppB9eBwGIcK5WWqnRZ6H16gAFfgmuTOPKYaqQd9wg0osoVRGsDJB8GdiAM%2FUXEn3b01dmdn%2BcNzwnRMdACPLG%2F24O2keeiVzf%2BECppfD%2Fr2%2BLwOoq%2FZ8FFPZjeg39oO1%2Fs4WXjAsleJFA6ClYu0BA4FWT%2Fa892uVYGjZ3qn7PzzIey%2FNTTJw0GQ0HCcGBIbSufHlSZjD81ZsRylaZOClX8%2B1NitRpHJgtT9zkJ9OSEoYj7HVLtBXPucVRv7On9G%2FuDUAYmpahh6u%2BhCSJQjt%2BVmEeyVULbkk7XkRRUBEVHEBb6n6XhWo5DhwsRjipWV7PoCWtTBbynV%2BugNhbvZbobavrURr7%2BvkjeeistH17t8Qa0DRXIgE7GW6xyLplayppoamypZD%2BpFnw%2FL0guvam2n6DCyv%2F8CA1xitkBrGhkFQKQFWesH382krDxq2AHR0NWmCk2O6IYdqFrZlR0hQKz%2FXsRuvwmPnRI3sJo5CEgGFN7jnIj76C3ilNM5iWAgDTmMOPIrr0GOqUB1eLrApIM0N3uqKziSQpbINqRT9gC3z%2F6j5huZtLk0QM0wEQlBIq6Vt6OMFNCMXgbuDYI36Qn%2BVY2GJ8SVg3u0Uj7PtdSFRSN3F7sjUq52dirAfPnUNuk%2BKEwUo%2B3O2t%2BMNahrkP6ZssykOEnOpTaKgJFAshc5Eacr618VsDu3YS8p%2F2JId40eJL8yjjxkhBru456I9E66yDCdIBalUDyg6qn1euE&X-Amz-Signature=352be2bb2d284676eed852fc404282fd51aa3e79c0960f58614ec64c6c18fa31&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYY7CLL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1VG5LKAKLgpqR0j0ygaNB7%2FazC6KqcBS3fI4xDGJoFgIgf%2BwvQ1vmjmOOIEUQdsqN0OYUxMcM%2Bf8JVkb1pOAZfXEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVDdhcYtJMzp5rThSrcA15%2BK6VZ8bVXaGo92lbl6zSBVlk9x%2BAS6%2BGTAJEflLMdwTWgouvZZT4z63YgwW6xrdtv1b19BE5%2BcFq4gE%2FGIV0Y2Cv68iOaPQzmGegk3MxwRBv6%2F5oWi5y9xDppB9eBwGIcK5WWqnRZ6H16gAFfgmuTOPKYaqQd9wg0osoVRGsDJB8GdiAM%2FUXEn3b01dmdn%2BcNzwnRMdACPLG%2F24O2keeiVzf%2BECppfD%2Fr2%2BLwOoq%2FZ8FFPZjeg39oO1%2Fs4WXjAsleJFA6ClYu0BA4FWT%2Fa892uVYGjZ3qn7PzzIey%2FNTTJw0GQ0HCcGBIbSufHlSZjD81ZsRylaZOClX8%2B1NitRpHJgtT9zkJ9OSEoYj7HVLtBXPucVRv7On9G%2FuDUAYmpahh6u%2BhCSJQjt%2BVmEeyVULbkk7XkRRUBEVHEBb6n6XhWo5DhwsRjipWV7PoCWtTBbynV%2BugNhbvZbobavrURr7%2BvkjeeistH17t8Qa0DRXIgE7GW6xyLplayppoamypZD%2BpFnw%2FL0guvam2n6DCyv%2F8CA1xitkBrGhkFQKQFWesH382krDxq2AHR0NWmCk2O6IYdqFrZlR0hQKz%2FXsRuvwmPnRI3sJo5CEgGFN7jnIj76C3ilNM5iWAgDTmMOPIrr0GOqUB1eLrApIM0N3uqKziSQpbINqRT9gC3z%2F6j5huZtLk0QM0wEQlBIq6Vt6OMFNCMXgbuDYI36Qn%2BVY2GJ8SVg3u0Uj7PtdSFRSN3F7sjUq52dirAfPnUNuk%2BKEwUo%2B3O2t%2BMNahrkP6ZssykOEnOpTaKgJFAshc5Eacr618VsDu3YS8p%2F2JId40eJL8yjjxkhBru456I9E66yDCdIBalUDyg6qn1euE&X-Amz-Signature=fa32dc8dbc587644e7f1526e23fadb486ab1291e5bca239ecc94c6af8416cdfd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
