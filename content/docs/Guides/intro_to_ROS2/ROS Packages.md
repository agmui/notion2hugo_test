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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4W6HIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEbOd%2FBV9Z6O8Gx16HQUGusdf%2BFGMzazTAkZKXScI6QIgMzO0%2B%2F3GfQ9oAbwHihfI0iAV3XY0lMKnfm4fzAT3Rtsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDHeFtYHZsvHUfDGnOyrcA5a%2F8Aip4ZaPZVEbkipPtoq4%2B6FUqMfRVET2q2GWi5LrguEYNGa0ZAUnsFM4%2FwwjX2TZ6NymGPAq%2FRzb9shYBNU%2FVy%2F7hOcXFtGiWprLtz3Smq%2FS960WVX14Tb20UecYr3lQOyKkjhjOSp4i5NlPNmciz%2FD9sBSrdHzmmoYe7Gv4j2ldnZetceWhp5Z%2Bv%2FNfCcisFY%2BcjrJi5W36xo2wWjyiiXXROkVQyyB6lMvaLmrw4%2F0RAlo0oPPFZQrHiNJdhXvK5M%2F%2BhaUMToINlWZYddz83j00DCjDlVvDdguszpbk%2B8Y4P7jvEf2hmR272NTWZksAQQAFALcKAiUHxKhq9TfVs9fbq%2BcICR2KIbHxOrnjvOZUhHZU34SHgl8482Em7CtEwexYLYlFFxSu%2FNMRhMv4tSNtSGoneRA%2F5X2ubghkcXkvGlei99qUNpseKrFbtukGdfEgJMjCbxKMXW%2FRZ6GUl83sE%2FqZ8fK4751bUUFBCP5g5KrNhX99MCecU5%2FKWbCu0KBukPzq300knqjdf0ALemwsbTgW1jCbOyRPlz64qsmPbMJi7MWQbVOAJ6QpFdlOo71cHZHNdfZycfPribl7mG3e7L3UqzEoFy6cuk%2BVk02jRmad7YZDBnCiMOqiu8AGOqUBGZQC4gfphv2T6y20BIbdE0hl8Jy%2FFZi%2B%2FgW0xe8YFT9yQohTiQnZaq1DVK%2FeSh2Fe4kFkFf51Y6OL%2B6JOZ6F8J1BDEjqfY8FhGER7AXSyVDuF0hE2YEUbNJq639ZCVWdrUSt2yXK%2FAPBqBdrm3N6sj1R0VZfmTqn4%2FTuSYBYbPgAK%2FkH8BALzwkcgxaSWVjRh0mai%2B3dXI2cI7MO3E71tdG8V83q&X-Amz-Signature=03d15ebc4934a000426a5f38deb89ec27e66e1b07e8ec094e80877c935821bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4W6HIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEbOd%2FBV9Z6O8Gx16HQUGusdf%2BFGMzazTAkZKXScI6QIgMzO0%2B%2F3GfQ9oAbwHihfI0iAV3XY0lMKnfm4fzAT3Rtsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDHeFtYHZsvHUfDGnOyrcA5a%2F8Aip4ZaPZVEbkipPtoq4%2B6FUqMfRVET2q2GWi5LrguEYNGa0ZAUnsFM4%2FwwjX2TZ6NymGPAq%2FRzb9shYBNU%2FVy%2F7hOcXFtGiWprLtz3Smq%2FS960WVX14Tb20UecYr3lQOyKkjhjOSp4i5NlPNmciz%2FD9sBSrdHzmmoYe7Gv4j2ldnZetceWhp5Z%2Bv%2FNfCcisFY%2BcjrJi5W36xo2wWjyiiXXROkVQyyB6lMvaLmrw4%2F0RAlo0oPPFZQrHiNJdhXvK5M%2F%2BhaUMToINlWZYddz83j00DCjDlVvDdguszpbk%2B8Y4P7jvEf2hmR272NTWZksAQQAFALcKAiUHxKhq9TfVs9fbq%2BcICR2KIbHxOrnjvOZUhHZU34SHgl8482Em7CtEwexYLYlFFxSu%2FNMRhMv4tSNtSGoneRA%2F5X2ubghkcXkvGlei99qUNpseKrFbtukGdfEgJMjCbxKMXW%2FRZ6GUl83sE%2FqZ8fK4751bUUFBCP5g5KrNhX99MCecU5%2FKWbCu0KBukPzq300knqjdf0ALemwsbTgW1jCbOyRPlz64qsmPbMJi7MWQbVOAJ6QpFdlOo71cHZHNdfZycfPribl7mG3e7L3UqzEoFy6cuk%2BVk02jRmad7YZDBnCiMOqiu8AGOqUBGZQC4gfphv2T6y20BIbdE0hl8Jy%2FFZi%2B%2FgW0xe8YFT9yQohTiQnZaq1DVK%2FeSh2Fe4kFkFf51Y6OL%2B6JOZ6F8J1BDEjqfY8FhGER7AXSyVDuF0hE2YEUbNJq639ZCVWdrUSt2yXK%2FAPBqBdrm3N6sj1R0VZfmTqn4%2FTuSYBYbPgAK%2FkH8BALzwkcgxaSWVjRh0mai%2B3dXI2cI7MO3E71tdG8V83q&X-Amz-Signature=5b420534e962e16eb65d64a8b50c92292b353c5be52638a5a38b3590bfc52180&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4W6HIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEbOd%2FBV9Z6O8Gx16HQUGusdf%2BFGMzazTAkZKXScI6QIgMzO0%2B%2F3GfQ9oAbwHihfI0iAV3XY0lMKnfm4fzAT3Rtsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDHeFtYHZsvHUfDGnOyrcA5a%2F8Aip4ZaPZVEbkipPtoq4%2B6FUqMfRVET2q2GWi5LrguEYNGa0ZAUnsFM4%2FwwjX2TZ6NymGPAq%2FRzb9shYBNU%2FVy%2F7hOcXFtGiWprLtz3Smq%2FS960WVX14Tb20UecYr3lQOyKkjhjOSp4i5NlPNmciz%2FD9sBSrdHzmmoYe7Gv4j2ldnZetceWhp5Z%2Bv%2FNfCcisFY%2BcjrJi5W36xo2wWjyiiXXROkVQyyB6lMvaLmrw4%2F0RAlo0oPPFZQrHiNJdhXvK5M%2F%2BhaUMToINlWZYddz83j00DCjDlVvDdguszpbk%2B8Y4P7jvEf2hmR272NTWZksAQQAFALcKAiUHxKhq9TfVs9fbq%2BcICR2KIbHxOrnjvOZUhHZU34SHgl8482Em7CtEwexYLYlFFxSu%2FNMRhMv4tSNtSGoneRA%2F5X2ubghkcXkvGlei99qUNpseKrFbtukGdfEgJMjCbxKMXW%2FRZ6GUl83sE%2FqZ8fK4751bUUFBCP5g5KrNhX99MCecU5%2FKWbCu0KBukPzq300knqjdf0ALemwsbTgW1jCbOyRPlz64qsmPbMJi7MWQbVOAJ6QpFdlOo71cHZHNdfZycfPribl7mG3e7L3UqzEoFy6cuk%2BVk02jRmad7YZDBnCiMOqiu8AGOqUBGZQC4gfphv2T6y20BIbdE0hl8Jy%2FFZi%2B%2FgW0xe8YFT9yQohTiQnZaq1DVK%2FeSh2Fe4kFkFf51Y6OL%2B6JOZ6F8J1BDEjqfY8FhGER7AXSyVDuF0hE2YEUbNJq639ZCVWdrUSt2yXK%2FAPBqBdrm3N6sj1R0VZfmTqn4%2FTuSYBYbPgAK%2FkH8BALzwkcgxaSWVjRh0mai%2B3dXI2cI7MO3E71tdG8V83q&X-Amz-Signature=09b18ae7fcbd022cf3bc3eb0a31cacd03fd48963e6041794bcf21b29f44f305c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4W6HIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEbOd%2FBV9Z6O8Gx16HQUGusdf%2BFGMzazTAkZKXScI6QIgMzO0%2B%2F3GfQ9oAbwHihfI0iAV3XY0lMKnfm4fzAT3Rtsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDHeFtYHZsvHUfDGnOyrcA5a%2F8Aip4ZaPZVEbkipPtoq4%2B6FUqMfRVET2q2GWi5LrguEYNGa0ZAUnsFM4%2FwwjX2TZ6NymGPAq%2FRzb9shYBNU%2FVy%2F7hOcXFtGiWprLtz3Smq%2FS960WVX14Tb20UecYr3lQOyKkjhjOSp4i5NlPNmciz%2FD9sBSrdHzmmoYe7Gv4j2ldnZetceWhp5Z%2Bv%2FNfCcisFY%2BcjrJi5W36xo2wWjyiiXXROkVQyyB6lMvaLmrw4%2F0RAlo0oPPFZQrHiNJdhXvK5M%2F%2BhaUMToINlWZYddz83j00DCjDlVvDdguszpbk%2B8Y4P7jvEf2hmR272NTWZksAQQAFALcKAiUHxKhq9TfVs9fbq%2BcICR2KIbHxOrnjvOZUhHZU34SHgl8482Em7CtEwexYLYlFFxSu%2FNMRhMv4tSNtSGoneRA%2F5X2ubghkcXkvGlei99qUNpseKrFbtukGdfEgJMjCbxKMXW%2FRZ6GUl83sE%2FqZ8fK4751bUUFBCP5g5KrNhX99MCecU5%2FKWbCu0KBukPzq300knqjdf0ALemwsbTgW1jCbOyRPlz64qsmPbMJi7MWQbVOAJ6QpFdlOo71cHZHNdfZycfPribl7mG3e7L3UqzEoFy6cuk%2BVk02jRmad7YZDBnCiMOqiu8AGOqUBGZQC4gfphv2T6y20BIbdE0hl8Jy%2FFZi%2B%2FgW0xe8YFT9yQohTiQnZaq1DVK%2FeSh2Fe4kFkFf51Y6OL%2B6JOZ6F8J1BDEjqfY8FhGER7AXSyVDuF0hE2YEUbNJq639ZCVWdrUSt2yXK%2FAPBqBdrm3N6sj1R0VZfmTqn4%2FTuSYBYbPgAK%2FkH8BALzwkcgxaSWVjRh0mai%2B3dXI2cI7MO3E71tdG8V83q&X-Amz-Signature=2beefa025d0fb9767eaa8c8e1087b4a604748d0fcaebcabae8040d3f25810cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4W6HIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEbOd%2FBV9Z6O8Gx16HQUGusdf%2BFGMzazTAkZKXScI6QIgMzO0%2B%2F3GfQ9oAbwHihfI0iAV3XY0lMKnfm4fzAT3Rtsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDHeFtYHZsvHUfDGnOyrcA5a%2F8Aip4ZaPZVEbkipPtoq4%2B6FUqMfRVET2q2GWi5LrguEYNGa0ZAUnsFM4%2FwwjX2TZ6NymGPAq%2FRzb9shYBNU%2FVy%2F7hOcXFtGiWprLtz3Smq%2FS960WVX14Tb20UecYr3lQOyKkjhjOSp4i5NlPNmciz%2FD9sBSrdHzmmoYe7Gv4j2ldnZetceWhp5Z%2Bv%2FNfCcisFY%2BcjrJi5W36xo2wWjyiiXXROkVQyyB6lMvaLmrw4%2F0RAlo0oPPFZQrHiNJdhXvK5M%2F%2BhaUMToINlWZYddz83j00DCjDlVvDdguszpbk%2B8Y4P7jvEf2hmR272NTWZksAQQAFALcKAiUHxKhq9TfVs9fbq%2BcICR2KIbHxOrnjvOZUhHZU34SHgl8482Em7CtEwexYLYlFFxSu%2FNMRhMv4tSNtSGoneRA%2F5X2ubghkcXkvGlei99qUNpseKrFbtukGdfEgJMjCbxKMXW%2FRZ6GUl83sE%2FqZ8fK4751bUUFBCP5g5KrNhX99MCecU5%2FKWbCu0KBukPzq300knqjdf0ALemwsbTgW1jCbOyRPlz64qsmPbMJi7MWQbVOAJ6QpFdlOo71cHZHNdfZycfPribl7mG3e7L3UqzEoFy6cuk%2BVk02jRmad7YZDBnCiMOqiu8AGOqUBGZQC4gfphv2T6y20BIbdE0hl8Jy%2FFZi%2B%2FgW0xe8YFT9yQohTiQnZaq1DVK%2FeSh2Fe4kFkFf51Y6OL%2B6JOZ6F8J1BDEjqfY8FhGER7AXSyVDuF0hE2YEUbNJq639ZCVWdrUSt2yXK%2FAPBqBdrm3N6sj1R0VZfmTqn4%2FTuSYBYbPgAK%2FkH8BALzwkcgxaSWVjRh0mai%2B3dXI2cI7MO3E71tdG8V83q&X-Amz-Signature=9b248886c0d4adec21e21b9d2a117976c866715f11de41356b2b24cfbae4352f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4W6HIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEbOd%2FBV9Z6O8Gx16HQUGusdf%2BFGMzazTAkZKXScI6QIgMzO0%2B%2F3GfQ9oAbwHihfI0iAV3XY0lMKnfm4fzAT3Rtsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDHeFtYHZsvHUfDGnOyrcA5a%2F8Aip4ZaPZVEbkipPtoq4%2B6FUqMfRVET2q2GWi5LrguEYNGa0ZAUnsFM4%2FwwjX2TZ6NymGPAq%2FRzb9shYBNU%2FVy%2F7hOcXFtGiWprLtz3Smq%2FS960WVX14Tb20UecYr3lQOyKkjhjOSp4i5NlPNmciz%2FD9sBSrdHzmmoYe7Gv4j2ldnZetceWhp5Z%2Bv%2FNfCcisFY%2BcjrJi5W36xo2wWjyiiXXROkVQyyB6lMvaLmrw4%2F0RAlo0oPPFZQrHiNJdhXvK5M%2F%2BhaUMToINlWZYddz83j00DCjDlVvDdguszpbk%2B8Y4P7jvEf2hmR272NTWZksAQQAFALcKAiUHxKhq9TfVs9fbq%2BcICR2KIbHxOrnjvOZUhHZU34SHgl8482Em7CtEwexYLYlFFxSu%2FNMRhMv4tSNtSGoneRA%2F5X2ubghkcXkvGlei99qUNpseKrFbtukGdfEgJMjCbxKMXW%2FRZ6GUl83sE%2FqZ8fK4751bUUFBCP5g5KrNhX99MCecU5%2FKWbCu0KBukPzq300knqjdf0ALemwsbTgW1jCbOyRPlz64qsmPbMJi7MWQbVOAJ6QpFdlOo71cHZHNdfZycfPribl7mG3e7L3UqzEoFy6cuk%2BVk02jRmad7YZDBnCiMOqiu8AGOqUBGZQC4gfphv2T6y20BIbdE0hl8Jy%2FFZi%2B%2FgW0xe8YFT9yQohTiQnZaq1DVK%2FeSh2Fe4kFkFf51Y6OL%2B6JOZ6F8J1BDEjqfY8FhGER7AXSyVDuF0hE2YEUbNJq639ZCVWdrUSt2yXK%2FAPBqBdrm3N6sj1R0VZfmTqn4%2FTuSYBYbPgAK%2FkH8BALzwkcgxaSWVjRh0mai%2B3dXI2cI7MO3E71tdG8V83q&X-Amz-Signature=161a387210215a265a56fd6cc590a72cfa28e6172eab4b7b8007099b646d9e17&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4W6HIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEbOd%2FBV9Z6O8Gx16HQUGusdf%2BFGMzazTAkZKXScI6QIgMzO0%2B%2F3GfQ9oAbwHihfI0iAV3XY0lMKnfm4fzAT3Rtsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDHeFtYHZsvHUfDGnOyrcA5a%2F8Aip4ZaPZVEbkipPtoq4%2B6FUqMfRVET2q2GWi5LrguEYNGa0ZAUnsFM4%2FwwjX2TZ6NymGPAq%2FRzb9shYBNU%2FVy%2F7hOcXFtGiWprLtz3Smq%2FS960WVX14Tb20UecYr3lQOyKkjhjOSp4i5NlPNmciz%2FD9sBSrdHzmmoYe7Gv4j2ldnZetceWhp5Z%2Bv%2FNfCcisFY%2BcjrJi5W36xo2wWjyiiXXROkVQyyB6lMvaLmrw4%2F0RAlo0oPPFZQrHiNJdhXvK5M%2F%2BhaUMToINlWZYddz83j00DCjDlVvDdguszpbk%2B8Y4P7jvEf2hmR272NTWZksAQQAFALcKAiUHxKhq9TfVs9fbq%2BcICR2KIbHxOrnjvOZUhHZU34SHgl8482Em7CtEwexYLYlFFxSu%2FNMRhMv4tSNtSGoneRA%2F5X2ubghkcXkvGlei99qUNpseKrFbtukGdfEgJMjCbxKMXW%2FRZ6GUl83sE%2FqZ8fK4751bUUFBCP5g5KrNhX99MCecU5%2FKWbCu0KBukPzq300knqjdf0ALemwsbTgW1jCbOyRPlz64qsmPbMJi7MWQbVOAJ6QpFdlOo71cHZHNdfZycfPribl7mG3e7L3UqzEoFy6cuk%2BVk02jRmad7YZDBnCiMOqiu8AGOqUBGZQC4gfphv2T6y20BIbdE0hl8Jy%2FFZi%2B%2FgW0xe8YFT9yQohTiQnZaq1DVK%2FeSh2Fe4kFkFf51Y6OL%2B6JOZ6F8J1BDEjqfY8FhGER7AXSyVDuF0hE2YEUbNJq639ZCVWdrUSt2yXK%2FAPBqBdrm3N6sj1R0VZfmTqn4%2FTuSYBYbPgAK%2FkH8BALzwkcgxaSWVjRh0mai%2B3dXI2cI7MO3E71tdG8V83q&X-Amz-Signature=8fea276932133b705520de8165f475507214f40af8efef35c19a9dfb1939fa07&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
