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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPBX4XU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpiZfCytHWYxczZMpw5OsqgApKUJoVr6qz0za4S88BUAiEAqrDM5AFazvY%2FwD%2Fzj9ju%2Bm5k6LFbtGXEaQdyQvo8vI8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FJuD4wX%2BncLqJYWyrcA3vWv93IZBHyMA%2Bnyq98BNmK6vUsb5W0O4hqt8rPQWR6CGL%2F4UJtf9n%2FYAq4DGRzZtXthlkY6vz0DcZjc2Z7jnWirVF0qz917xzHVv%2FH%2BuNwHVjRHm0oJH0ZNpEv1EZrR5BBVS%2B0rG0hHCqJylxAvp2wCdq1RwCoD4P0Fmjls9CvEj6rIiC3xmHbgu%2FHrbX7HZLmdCGJTWV7lD1thRC6OQejzxSHiv2AMtWfguAj3%2FlSl1sfaxiV6%2Fq8gewOAbXMpE1sRLHM2D%2BR1jRvYtl23DIQ9Uigb%2F%2BY7unm6ByeyGj0OLMYMsk9x6%2BSY134dORAA7U3we83Y%2FEE4bB4B9mfs%2BtJC8wDMmOQkAzkb2S9vCg5hVXx3Zb8CLqvuF26erYodA33Uk1RVo7tasUksZtibK1EPn5uQV4uTVGfOu25SUdmTtZ3Lig9iA3Byn%2F2S9eZ%2Bh2RagwKao8hLhTiGAeXWd06xPDAowqwvV4NWzWsNdwSylcQyILxoH6hrK6%2F7%2FCF4QF%2FgU9k1uR3djTdwYEN60WfHREYEJwCIQqC61U%2Bqz3Rq540X7BEsozePQgdjBr8lSSCUYoZz%2BGme9oaZqWs8%2F0sPgYu6TnlXImy2UJcJ3VGdWa6yKgwbFKM1Li6MNXXhMMGOqUB2QMBa3xVAB4AkbJknvGGoDQcCmalgkjfDnt%2BEmIE2x2YI4bH9zC%2B8xP773PdYIzM90IEFC%2BP56Bi7XgLwvB740Jr%2BhDXlA1HUZjdHJP0smK0lIbB4O2Tjt8z9hekjeCeBjdcIa507kf3lrVn1ShIov0oWwLJpO%2Ft6gzFZ2nas8hfYhdECRmAoa3a9GQuXQMBSUWXi1Uy2F%2FoMrE0L4U6txePSHW%2B&X-Amz-Signature=29ef82f0c35b4639171e511ad09918d3159d821e8d95ddbabf427345fa3fcb75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPBX4XU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpiZfCytHWYxczZMpw5OsqgApKUJoVr6qz0za4S88BUAiEAqrDM5AFazvY%2FwD%2Fzj9ju%2Bm5k6LFbtGXEaQdyQvo8vI8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FJuD4wX%2BncLqJYWyrcA3vWv93IZBHyMA%2Bnyq98BNmK6vUsb5W0O4hqt8rPQWR6CGL%2F4UJtf9n%2FYAq4DGRzZtXthlkY6vz0DcZjc2Z7jnWirVF0qz917xzHVv%2FH%2BuNwHVjRHm0oJH0ZNpEv1EZrR5BBVS%2B0rG0hHCqJylxAvp2wCdq1RwCoD4P0Fmjls9CvEj6rIiC3xmHbgu%2FHrbX7HZLmdCGJTWV7lD1thRC6OQejzxSHiv2AMtWfguAj3%2FlSl1sfaxiV6%2Fq8gewOAbXMpE1sRLHM2D%2BR1jRvYtl23DIQ9Uigb%2F%2BY7unm6ByeyGj0OLMYMsk9x6%2BSY134dORAA7U3we83Y%2FEE4bB4B9mfs%2BtJC8wDMmOQkAzkb2S9vCg5hVXx3Zb8CLqvuF26erYodA33Uk1RVo7tasUksZtibK1EPn5uQV4uTVGfOu25SUdmTtZ3Lig9iA3Byn%2F2S9eZ%2Bh2RagwKao8hLhTiGAeXWd06xPDAowqwvV4NWzWsNdwSylcQyILxoH6hrK6%2F7%2FCF4QF%2FgU9k1uR3djTdwYEN60WfHREYEJwCIQqC61U%2Bqz3Rq540X7BEsozePQgdjBr8lSSCUYoZz%2BGme9oaZqWs8%2F0sPgYu6TnlXImy2UJcJ3VGdWa6yKgwbFKM1Li6MNXXhMMGOqUB2QMBa3xVAB4AkbJknvGGoDQcCmalgkjfDnt%2BEmIE2x2YI4bH9zC%2B8xP773PdYIzM90IEFC%2BP56Bi7XgLwvB740Jr%2BhDXlA1HUZjdHJP0smK0lIbB4O2Tjt8z9hekjeCeBjdcIa507kf3lrVn1ShIov0oWwLJpO%2Ft6gzFZ2nas8hfYhdECRmAoa3a9GQuXQMBSUWXi1Uy2F%2FoMrE0L4U6txePSHW%2B&X-Amz-Signature=beaeddc6c04e361d1ae213daee621419f1f48dbca8e584ad7484072272502d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPBX4XU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpiZfCytHWYxczZMpw5OsqgApKUJoVr6qz0za4S88BUAiEAqrDM5AFazvY%2FwD%2Fzj9ju%2Bm5k6LFbtGXEaQdyQvo8vI8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FJuD4wX%2BncLqJYWyrcA3vWv93IZBHyMA%2Bnyq98BNmK6vUsb5W0O4hqt8rPQWR6CGL%2F4UJtf9n%2FYAq4DGRzZtXthlkY6vz0DcZjc2Z7jnWirVF0qz917xzHVv%2FH%2BuNwHVjRHm0oJH0ZNpEv1EZrR5BBVS%2B0rG0hHCqJylxAvp2wCdq1RwCoD4P0Fmjls9CvEj6rIiC3xmHbgu%2FHrbX7HZLmdCGJTWV7lD1thRC6OQejzxSHiv2AMtWfguAj3%2FlSl1sfaxiV6%2Fq8gewOAbXMpE1sRLHM2D%2BR1jRvYtl23DIQ9Uigb%2F%2BY7unm6ByeyGj0OLMYMsk9x6%2BSY134dORAA7U3we83Y%2FEE4bB4B9mfs%2BtJC8wDMmOQkAzkb2S9vCg5hVXx3Zb8CLqvuF26erYodA33Uk1RVo7tasUksZtibK1EPn5uQV4uTVGfOu25SUdmTtZ3Lig9iA3Byn%2F2S9eZ%2Bh2RagwKao8hLhTiGAeXWd06xPDAowqwvV4NWzWsNdwSylcQyILxoH6hrK6%2F7%2FCF4QF%2FgU9k1uR3djTdwYEN60WfHREYEJwCIQqC61U%2Bqz3Rq540X7BEsozePQgdjBr8lSSCUYoZz%2BGme9oaZqWs8%2F0sPgYu6TnlXImy2UJcJ3VGdWa6yKgwbFKM1Li6MNXXhMMGOqUB2QMBa3xVAB4AkbJknvGGoDQcCmalgkjfDnt%2BEmIE2x2YI4bH9zC%2B8xP773PdYIzM90IEFC%2BP56Bi7XgLwvB740Jr%2BhDXlA1HUZjdHJP0smK0lIbB4O2Tjt8z9hekjeCeBjdcIa507kf3lrVn1ShIov0oWwLJpO%2Ft6gzFZ2nas8hfYhdECRmAoa3a9GQuXQMBSUWXi1Uy2F%2FoMrE0L4U6txePSHW%2B&X-Amz-Signature=29ade460d769bed9d5355439387524b75947d5fa1f95d3bef61e5dd55272d15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPBX4XU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpiZfCytHWYxczZMpw5OsqgApKUJoVr6qz0za4S88BUAiEAqrDM5AFazvY%2FwD%2Fzj9ju%2Bm5k6LFbtGXEaQdyQvo8vI8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FJuD4wX%2BncLqJYWyrcA3vWv93IZBHyMA%2Bnyq98BNmK6vUsb5W0O4hqt8rPQWR6CGL%2F4UJtf9n%2FYAq4DGRzZtXthlkY6vz0DcZjc2Z7jnWirVF0qz917xzHVv%2FH%2BuNwHVjRHm0oJH0ZNpEv1EZrR5BBVS%2B0rG0hHCqJylxAvp2wCdq1RwCoD4P0Fmjls9CvEj6rIiC3xmHbgu%2FHrbX7HZLmdCGJTWV7lD1thRC6OQejzxSHiv2AMtWfguAj3%2FlSl1sfaxiV6%2Fq8gewOAbXMpE1sRLHM2D%2BR1jRvYtl23DIQ9Uigb%2F%2BY7unm6ByeyGj0OLMYMsk9x6%2BSY134dORAA7U3we83Y%2FEE4bB4B9mfs%2BtJC8wDMmOQkAzkb2S9vCg5hVXx3Zb8CLqvuF26erYodA33Uk1RVo7tasUksZtibK1EPn5uQV4uTVGfOu25SUdmTtZ3Lig9iA3Byn%2F2S9eZ%2Bh2RagwKao8hLhTiGAeXWd06xPDAowqwvV4NWzWsNdwSylcQyILxoH6hrK6%2F7%2FCF4QF%2FgU9k1uR3djTdwYEN60WfHREYEJwCIQqC61U%2Bqz3Rq540X7BEsozePQgdjBr8lSSCUYoZz%2BGme9oaZqWs8%2F0sPgYu6TnlXImy2UJcJ3VGdWa6yKgwbFKM1Li6MNXXhMMGOqUB2QMBa3xVAB4AkbJknvGGoDQcCmalgkjfDnt%2BEmIE2x2YI4bH9zC%2B8xP773PdYIzM90IEFC%2BP56Bi7XgLwvB740Jr%2BhDXlA1HUZjdHJP0smK0lIbB4O2Tjt8z9hekjeCeBjdcIa507kf3lrVn1ShIov0oWwLJpO%2Ft6gzFZ2nas8hfYhdECRmAoa3a9GQuXQMBSUWXi1Uy2F%2FoMrE0L4U6txePSHW%2B&X-Amz-Signature=b50181b7c2e0d7bc936e0cae9da05655b71447112b9818dd63710d70cf3b9e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPBX4XU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpiZfCytHWYxczZMpw5OsqgApKUJoVr6qz0za4S88BUAiEAqrDM5AFazvY%2FwD%2Fzj9ju%2Bm5k6LFbtGXEaQdyQvo8vI8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FJuD4wX%2BncLqJYWyrcA3vWv93IZBHyMA%2Bnyq98BNmK6vUsb5W0O4hqt8rPQWR6CGL%2F4UJtf9n%2FYAq4DGRzZtXthlkY6vz0DcZjc2Z7jnWirVF0qz917xzHVv%2FH%2BuNwHVjRHm0oJH0ZNpEv1EZrR5BBVS%2B0rG0hHCqJylxAvp2wCdq1RwCoD4P0Fmjls9CvEj6rIiC3xmHbgu%2FHrbX7HZLmdCGJTWV7lD1thRC6OQejzxSHiv2AMtWfguAj3%2FlSl1sfaxiV6%2Fq8gewOAbXMpE1sRLHM2D%2BR1jRvYtl23DIQ9Uigb%2F%2BY7unm6ByeyGj0OLMYMsk9x6%2BSY134dORAA7U3we83Y%2FEE4bB4B9mfs%2BtJC8wDMmOQkAzkb2S9vCg5hVXx3Zb8CLqvuF26erYodA33Uk1RVo7tasUksZtibK1EPn5uQV4uTVGfOu25SUdmTtZ3Lig9iA3Byn%2F2S9eZ%2Bh2RagwKao8hLhTiGAeXWd06xPDAowqwvV4NWzWsNdwSylcQyILxoH6hrK6%2F7%2FCF4QF%2FgU9k1uR3djTdwYEN60WfHREYEJwCIQqC61U%2Bqz3Rq540X7BEsozePQgdjBr8lSSCUYoZz%2BGme9oaZqWs8%2F0sPgYu6TnlXImy2UJcJ3VGdWa6yKgwbFKM1Li6MNXXhMMGOqUB2QMBa3xVAB4AkbJknvGGoDQcCmalgkjfDnt%2BEmIE2x2YI4bH9zC%2B8xP773PdYIzM90IEFC%2BP56Bi7XgLwvB740Jr%2BhDXlA1HUZjdHJP0smK0lIbB4O2Tjt8z9hekjeCeBjdcIa507kf3lrVn1ShIov0oWwLJpO%2Ft6gzFZ2nas8hfYhdECRmAoa3a9GQuXQMBSUWXi1Uy2F%2FoMrE0L4U6txePSHW%2B&X-Amz-Signature=3666a32bbf2dd9c156b35a2c7d0795c2ad9170c6dc8aa644a0abdfa9247d5fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPBX4XU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpiZfCytHWYxczZMpw5OsqgApKUJoVr6qz0za4S88BUAiEAqrDM5AFazvY%2FwD%2Fzj9ju%2Bm5k6LFbtGXEaQdyQvo8vI8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FJuD4wX%2BncLqJYWyrcA3vWv93IZBHyMA%2Bnyq98BNmK6vUsb5W0O4hqt8rPQWR6CGL%2F4UJtf9n%2FYAq4DGRzZtXthlkY6vz0DcZjc2Z7jnWirVF0qz917xzHVv%2FH%2BuNwHVjRHm0oJH0ZNpEv1EZrR5BBVS%2B0rG0hHCqJylxAvp2wCdq1RwCoD4P0Fmjls9CvEj6rIiC3xmHbgu%2FHrbX7HZLmdCGJTWV7lD1thRC6OQejzxSHiv2AMtWfguAj3%2FlSl1sfaxiV6%2Fq8gewOAbXMpE1sRLHM2D%2BR1jRvYtl23DIQ9Uigb%2F%2BY7unm6ByeyGj0OLMYMsk9x6%2BSY134dORAA7U3we83Y%2FEE4bB4B9mfs%2BtJC8wDMmOQkAzkb2S9vCg5hVXx3Zb8CLqvuF26erYodA33Uk1RVo7tasUksZtibK1EPn5uQV4uTVGfOu25SUdmTtZ3Lig9iA3Byn%2F2S9eZ%2Bh2RagwKao8hLhTiGAeXWd06xPDAowqwvV4NWzWsNdwSylcQyILxoH6hrK6%2F7%2FCF4QF%2FgU9k1uR3djTdwYEN60WfHREYEJwCIQqC61U%2Bqz3Rq540X7BEsozePQgdjBr8lSSCUYoZz%2BGme9oaZqWs8%2F0sPgYu6TnlXImy2UJcJ3VGdWa6yKgwbFKM1Li6MNXXhMMGOqUB2QMBa3xVAB4AkbJknvGGoDQcCmalgkjfDnt%2BEmIE2x2YI4bH9zC%2B8xP773PdYIzM90IEFC%2BP56Bi7XgLwvB740Jr%2BhDXlA1HUZjdHJP0smK0lIbB4O2Tjt8z9hekjeCeBjdcIa507kf3lrVn1ShIov0oWwLJpO%2Ft6gzFZ2nas8hfYhdECRmAoa3a9GQuXQMBSUWXi1Uy2F%2FoMrE0L4U6txePSHW%2B&X-Amz-Signature=59a9c0ce4a40c729dea50e230de751060ee94c5111e68b40acdb2b13a063882d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPBX4XU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpiZfCytHWYxczZMpw5OsqgApKUJoVr6qz0za4S88BUAiEAqrDM5AFazvY%2FwD%2Fzj9ju%2Bm5k6LFbtGXEaQdyQvo8vI8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FJuD4wX%2BncLqJYWyrcA3vWv93IZBHyMA%2Bnyq98BNmK6vUsb5W0O4hqt8rPQWR6CGL%2F4UJtf9n%2FYAq4DGRzZtXthlkY6vz0DcZjc2Z7jnWirVF0qz917xzHVv%2FH%2BuNwHVjRHm0oJH0ZNpEv1EZrR5BBVS%2B0rG0hHCqJylxAvp2wCdq1RwCoD4P0Fmjls9CvEj6rIiC3xmHbgu%2FHrbX7HZLmdCGJTWV7lD1thRC6OQejzxSHiv2AMtWfguAj3%2FlSl1sfaxiV6%2Fq8gewOAbXMpE1sRLHM2D%2BR1jRvYtl23DIQ9Uigb%2F%2BY7unm6ByeyGj0OLMYMsk9x6%2BSY134dORAA7U3we83Y%2FEE4bB4B9mfs%2BtJC8wDMmOQkAzkb2S9vCg5hVXx3Zb8CLqvuF26erYodA33Uk1RVo7tasUksZtibK1EPn5uQV4uTVGfOu25SUdmTtZ3Lig9iA3Byn%2F2S9eZ%2Bh2RagwKao8hLhTiGAeXWd06xPDAowqwvV4NWzWsNdwSylcQyILxoH6hrK6%2F7%2FCF4QF%2FgU9k1uR3djTdwYEN60WfHREYEJwCIQqC61U%2Bqz3Rq540X7BEsozePQgdjBr8lSSCUYoZz%2BGme9oaZqWs8%2F0sPgYu6TnlXImy2UJcJ3VGdWa6yKgwbFKM1Li6MNXXhMMGOqUB2QMBa3xVAB4AkbJknvGGoDQcCmalgkjfDnt%2BEmIE2x2YI4bH9zC%2B8xP773PdYIzM90IEFC%2BP56Bi7XgLwvB740Jr%2BhDXlA1HUZjdHJP0smK0lIbB4O2Tjt8z9hekjeCeBjdcIa507kf3lrVn1ShIov0oWwLJpO%2Ft6gzFZ2nas8hfYhdECRmAoa3a9GQuXQMBSUWXi1Uy2F%2FoMrE0L4U6txePSHW%2B&X-Amz-Signature=76ad14e3d149ede4f7a17de1ab427bfaacec62f3d56cc5257a1d23471408c26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
