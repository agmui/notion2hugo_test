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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHCSPWO4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPxkP6gB%2FDBWVLb8C%2BNkXiym1HFUZTGOygt3A2XHW%2FvQIgOOyMsW5N%2BbZiuytkGEFQp03j6SCHKAvG4ta0kJA2uT8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAS2Zr5X2TR%2F8bbeFircA8ZjPbXHUnIwPECG5Qmx%2BfwNFdFoYvj%2FZW%2F8YQaCX6wOWdlcppeacY%2FgqT95M5XNZYWGlYa8tytl7Sxl4FQQ7DIHcwYlSZQaskODxQmc1pTH0UcEIolcXD5WbmiDR90NeChG11FZ9H0vgaWIWWEy5RdHXLxmaA6BssKAfGx9jFYXySQs2yU95pB5l349dZvn3Q6l2EpCoPAnjJd1GbOt2aMMFWa3rNsuv9VLXKsJXIoxM1TCN8L9me8fgbUe1HOa7uT%2F926LvSKkax8qlGNUHiQqAkBOP8u%2FtG6NUQl1rO4umjXjV44EzfXH9W53h7Vjidlg3UUa70Iv7jmdk5xbBAno2lukOAouaMQw2VqIi6LWD3XH%2F%2F8JiBTiIlW8INkH%2Fk59scfMFa2FDxm%2Fivqok9Tp8ZEqeM370dvo994Nn%2FbIY2R8BiVIJniTvydeJzkW9vkYWVlt%2FKessUTtB5uaYh%2BNGlHJnoWuJUJqK319M0TfOPcs7OwXxmznPbbmE%2FZh1oqzeiwCfR9OrnR%2Bvd4M0yvyB6KP%2Fl8idfLimNu5v94JrJG0dmBmzR9Jqud5j0GhLvCmPYKO2bT9Xo6I1yEdHAXM6OpNpi3vCcWpoXE4PRMh%2B8%2BnIx8TODMrB0hXMK3uzb4GOqUBQQX%2FWIvNteOn3aZlYdnBFs0Jo%2F1sAajAjhwEuqczJRWqSzGpKzvpfoYxZbgA23QAGy4sMyPfADY6oGOpNOKzaA3lTFAljtcOhn4Afx5rOJUsnpgEJtPOYUbegXmgXYBC8gJJ6CTdb4FIGJPMrp87AHTHKgmhyqSxAr5A0VBzFoV9NPBKt4rN3tktNGHVa%2BYy6jZFKHXgtoYW8NyW2ZUNzUlzacEA&X-Amz-Signature=6e6968638818dd7d6088b4a28cef04c887df1f9b838fcd48a9548aa1ee4d0524&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHCSPWO4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPxkP6gB%2FDBWVLb8C%2BNkXiym1HFUZTGOygt3A2XHW%2FvQIgOOyMsW5N%2BbZiuytkGEFQp03j6SCHKAvG4ta0kJA2uT8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAS2Zr5X2TR%2F8bbeFircA8ZjPbXHUnIwPECG5Qmx%2BfwNFdFoYvj%2FZW%2F8YQaCX6wOWdlcppeacY%2FgqT95M5XNZYWGlYa8tytl7Sxl4FQQ7DIHcwYlSZQaskODxQmc1pTH0UcEIolcXD5WbmiDR90NeChG11FZ9H0vgaWIWWEy5RdHXLxmaA6BssKAfGx9jFYXySQs2yU95pB5l349dZvn3Q6l2EpCoPAnjJd1GbOt2aMMFWa3rNsuv9VLXKsJXIoxM1TCN8L9me8fgbUe1HOa7uT%2F926LvSKkax8qlGNUHiQqAkBOP8u%2FtG6NUQl1rO4umjXjV44EzfXH9W53h7Vjidlg3UUa70Iv7jmdk5xbBAno2lukOAouaMQw2VqIi6LWD3XH%2F%2F8JiBTiIlW8INkH%2Fk59scfMFa2FDxm%2Fivqok9Tp8ZEqeM370dvo994Nn%2FbIY2R8BiVIJniTvydeJzkW9vkYWVlt%2FKessUTtB5uaYh%2BNGlHJnoWuJUJqK319M0TfOPcs7OwXxmznPbbmE%2FZh1oqzeiwCfR9OrnR%2Bvd4M0yvyB6KP%2Fl8idfLimNu5v94JrJG0dmBmzR9Jqud5j0GhLvCmPYKO2bT9Xo6I1yEdHAXM6OpNpi3vCcWpoXE4PRMh%2B8%2BnIx8TODMrB0hXMK3uzb4GOqUBQQX%2FWIvNteOn3aZlYdnBFs0Jo%2F1sAajAjhwEuqczJRWqSzGpKzvpfoYxZbgA23QAGy4sMyPfADY6oGOpNOKzaA3lTFAljtcOhn4Afx5rOJUsnpgEJtPOYUbegXmgXYBC8gJJ6CTdb4FIGJPMrp87AHTHKgmhyqSxAr5A0VBzFoV9NPBKt4rN3tktNGHVa%2BYy6jZFKHXgtoYW8NyW2ZUNzUlzacEA&X-Amz-Signature=5ad2a6baced41ce482777cfe84e39294c180b47788778dd43a5b11c852c82b64&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHCSPWO4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPxkP6gB%2FDBWVLb8C%2BNkXiym1HFUZTGOygt3A2XHW%2FvQIgOOyMsW5N%2BbZiuytkGEFQp03j6SCHKAvG4ta0kJA2uT8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAS2Zr5X2TR%2F8bbeFircA8ZjPbXHUnIwPECG5Qmx%2BfwNFdFoYvj%2FZW%2F8YQaCX6wOWdlcppeacY%2FgqT95M5XNZYWGlYa8tytl7Sxl4FQQ7DIHcwYlSZQaskODxQmc1pTH0UcEIolcXD5WbmiDR90NeChG11FZ9H0vgaWIWWEy5RdHXLxmaA6BssKAfGx9jFYXySQs2yU95pB5l349dZvn3Q6l2EpCoPAnjJd1GbOt2aMMFWa3rNsuv9VLXKsJXIoxM1TCN8L9me8fgbUe1HOa7uT%2F926LvSKkax8qlGNUHiQqAkBOP8u%2FtG6NUQl1rO4umjXjV44EzfXH9W53h7Vjidlg3UUa70Iv7jmdk5xbBAno2lukOAouaMQw2VqIi6LWD3XH%2F%2F8JiBTiIlW8INkH%2Fk59scfMFa2FDxm%2Fivqok9Tp8ZEqeM370dvo994Nn%2FbIY2R8BiVIJniTvydeJzkW9vkYWVlt%2FKessUTtB5uaYh%2BNGlHJnoWuJUJqK319M0TfOPcs7OwXxmznPbbmE%2FZh1oqzeiwCfR9OrnR%2Bvd4M0yvyB6KP%2Fl8idfLimNu5v94JrJG0dmBmzR9Jqud5j0GhLvCmPYKO2bT9Xo6I1yEdHAXM6OpNpi3vCcWpoXE4PRMh%2B8%2BnIx8TODMrB0hXMK3uzb4GOqUBQQX%2FWIvNteOn3aZlYdnBFs0Jo%2F1sAajAjhwEuqczJRWqSzGpKzvpfoYxZbgA23QAGy4sMyPfADY6oGOpNOKzaA3lTFAljtcOhn4Afx5rOJUsnpgEJtPOYUbegXmgXYBC8gJJ6CTdb4FIGJPMrp87AHTHKgmhyqSxAr5A0VBzFoV9NPBKt4rN3tktNGHVa%2BYy6jZFKHXgtoYW8NyW2ZUNzUlzacEA&X-Amz-Signature=0d576a36e5d518e51472ba1ebcecb00317a4568d86706a3c86efb056128148fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHCSPWO4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPxkP6gB%2FDBWVLb8C%2BNkXiym1HFUZTGOygt3A2XHW%2FvQIgOOyMsW5N%2BbZiuytkGEFQp03j6SCHKAvG4ta0kJA2uT8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAS2Zr5X2TR%2F8bbeFircA8ZjPbXHUnIwPECG5Qmx%2BfwNFdFoYvj%2FZW%2F8YQaCX6wOWdlcppeacY%2FgqT95M5XNZYWGlYa8tytl7Sxl4FQQ7DIHcwYlSZQaskODxQmc1pTH0UcEIolcXD5WbmiDR90NeChG11FZ9H0vgaWIWWEy5RdHXLxmaA6BssKAfGx9jFYXySQs2yU95pB5l349dZvn3Q6l2EpCoPAnjJd1GbOt2aMMFWa3rNsuv9VLXKsJXIoxM1TCN8L9me8fgbUe1HOa7uT%2F926LvSKkax8qlGNUHiQqAkBOP8u%2FtG6NUQl1rO4umjXjV44EzfXH9W53h7Vjidlg3UUa70Iv7jmdk5xbBAno2lukOAouaMQw2VqIi6LWD3XH%2F%2F8JiBTiIlW8INkH%2Fk59scfMFa2FDxm%2Fivqok9Tp8ZEqeM370dvo994Nn%2FbIY2R8BiVIJniTvydeJzkW9vkYWVlt%2FKessUTtB5uaYh%2BNGlHJnoWuJUJqK319M0TfOPcs7OwXxmznPbbmE%2FZh1oqzeiwCfR9OrnR%2Bvd4M0yvyB6KP%2Fl8idfLimNu5v94JrJG0dmBmzR9Jqud5j0GhLvCmPYKO2bT9Xo6I1yEdHAXM6OpNpi3vCcWpoXE4PRMh%2B8%2BnIx8TODMrB0hXMK3uzb4GOqUBQQX%2FWIvNteOn3aZlYdnBFs0Jo%2F1sAajAjhwEuqczJRWqSzGpKzvpfoYxZbgA23QAGy4sMyPfADY6oGOpNOKzaA3lTFAljtcOhn4Afx5rOJUsnpgEJtPOYUbegXmgXYBC8gJJ6CTdb4FIGJPMrp87AHTHKgmhyqSxAr5A0VBzFoV9NPBKt4rN3tktNGHVa%2BYy6jZFKHXgtoYW8NyW2ZUNzUlzacEA&X-Amz-Signature=1ac7c9e2395acd3e8bb9e4b0c2523aa134adfeb29dc446657b138024ef246677&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHCSPWO4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPxkP6gB%2FDBWVLb8C%2BNkXiym1HFUZTGOygt3A2XHW%2FvQIgOOyMsW5N%2BbZiuytkGEFQp03j6SCHKAvG4ta0kJA2uT8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAS2Zr5X2TR%2F8bbeFircA8ZjPbXHUnIwPECG5Qmx%2BfwNFdFoYvj%2FZW%2F8YQaCX6wOWdlcppeacY%2FgqT95M5XNZYWGlYa8tytl7Sxl4FQQ7DIHcwYlSZQaskODxQmc1pTH0UcEIolcXD5WbmiDR90NeChG11FZ9H0vgaWIWWEy5RdHXLxmaA6BssKAfGx9jFYXySQs2yU95pB5l349dZvn3Q6l2EpCoPAnjJd1GbOt2aMMFWa3rNsuv9VLXKsJXIoxM1TCN8L9me8fgbUe1HOa7uT%2F926LvSKkax8qlGNUHiQqAkBOP8u%2FtG6NUQl1rO4umjXjV44EzfXH9W53h7Vjidlg3UUa70Iv7jmdk5xbBAno2lukOAouaMQw2VqIi6LWD3XH%2F%2F8JiBTiIlW8INkH%2Fk59scfMFa2FDxm%2Fivqok9Tp8ZEqeM370dvo994Nn%2FbIY2R8BiVIJniTvydeJzkW9vkYWVlt%2FKessUTtB5uaYh%2BNGlHJnoWuJUJqK319M0TfOPcs7OwXxmznPbbmE%2FZh1oqzeiwCfR9OrnR%2Bvd4M0yvyB6KP%2Fl8idfLimNu5v94JrJG0dmBmzR9Jqud5j0GhLvCmPYKO2bT9Xo6I1yEdHAXM6OpNpi3vCcWpoXE4PRMh%2B8%2BnIx8TODMrB0hXMK3uzb4GOqUBQQX%2FWIvNteOn3aZlYdnBFs0Jo%2F1sAajAjhwEuqczJRWqSzGpKzvpfoYxZbgA23QAGy4sMyPfADY6oGOpNOKzaA3lTFAljtcOhn4Afx5rOJUsnpgEJtPOYUbegXmgXYBC8gJJ6CTdb4FIGJPMrp87AHTHKgmhyqSxAr5A0VBzFoV9NPBKt4rN3tktNGHVa%2BYy6jZFKHXgtoYW8NyW2ZUNzUlzacEA&X-Amz-Signature=34fa584453afeca04b6e6d053b48731fd42979a56d976a7109b9a7a75b8d6853&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHCSPWO4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPxkP6gB%2FDBWVLb8C%2BNkXiym1HFUZTGOygt3A2XHW%2FvQIgOOyMsW5N%2BbZiuytkGEFQp03j6SCHKAvG4ta0kJA2uT8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAS2Zr5X2TR%2F8bbeFircA8ZjPbXHUnIwPECG5Qmx%2BfwNFdFoYvj%2FZW%2F8YQaCX6wOWdlcppeacY%2FgqT95M5XNZYWGlYa8tytl7Sxl4FQQ7DIHcwYlSZQaskODxQmc1pTH0UcEIolcXD5WbmiDR90NeChG11FZ9H0vgaWIWWEy5RdHXLxmaA6BssKAfGx9jFYXySQs2yU95pB5l349dZvn3Q6l2EpCoPAnjJd1GbOt2aMMFWa3rNsuv9VLXKsJXIoxM1TCN8L9me8fgbUe1HOa7uT%2F926LvSKkax8qlGNUHiQqAkBOP8u%2FtG6NUQl1rO4umjXjV44EzfXH9W53h7Vjidlg3UUa70Iv7jmdk5xbBAno2lukOAouaMQw2VqIi6LWD3XH%2F%2F8JiBTiIlW8INkH%2Fk59scfMFa2FDxm%2Fivqok9Tp8ZEqeM370dvo994Nn%2FbIY2R8BiVIJniTvydeJzkW9vkYWVlt%2FKessUTtB5uaYh%2BNGlHJnoWuJUJqK319M0TfOPcs7OwXxmznPbbmE%2FZh1oqzeiwCfR9OrnR%2Bvd4M0yvyB6KP%2Fl8idfLimNu5v94JrJG0dmBmzR9Jqud5j0GhLvCmPYKO2bT9Xo6I1yEdHAXM6OpNpi3vCcWpoXE4PRMh%2B8%2BnIx8TODMrB0hXMK3uzb4GOqUBQQX%2FWIvNteOn3aZlYdnBFs0Jo%2F1sAajAjhwEuqczJRWqSzGpKzvpfoYxZbgA23QAGy4sMyPfADY6oGOpNOKzaA3lTFAljtcOhn4Afx5rOJUsnpgEJtPOYUbegXmgXYBC8gJJ6CTdb4FIGJPMrp87AHTHKgmhyqSxAr5A0VBzFoV9NPBKt4rN3tktNGHVa%2BYy6jZFKHXgtoYW8NyW2ZUNzUlzacEA&X-Amz-Signature=a43f5e4518bb41c9af5f9be77a41e4460a64940f5ef0d20072f0b891550bf89c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHCSPWO4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPxkP6gB%2FDBWVLb8C%2BNkXiym1HFUZTGOygt3A2XHW%2FvQIgOOyMsW5N%2BbZiuytkGEFQp03j6SCHKAvG4ta0kJA2uT8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAS2Zr5X2TR%2F8bbeFircA8ZjPbXHUnIwPECG5Qmx%2BfwNFdFoYvj%2FZW%2F8YQaCX6wOWdlcppeacY%2FgqT95M5XNZYWGlYa8tytl7Sxl4FQQ7DIHcwYlSZQaskODxQmc1pTH0UcEIolcXD5WbmiDR90NeChG11FZ9H0vgaWIWWEy5RdHXLxmaA6BssKAfGx9jFYXySQs2yU95pB5l349dZvn3Q6l2EpCoPAnjJd1GbOt2aMMFWa3rNsuv9VLXKsJXIoxM1TCN8L9me8fgbUe1HOa7uT%2F926LvSKkax8qlGNUHiQqAkBOP8u%2FtG6NUQl1rO4umjXjV44EzfXH9W53h7Vjidlg3UUa70Iv7jmdk5xbBAno2lukOAouaMQw2VqIi6LWD3XH%2F%2F8JiBTiIlW8INkH%2Fk59scfMFa2FDxm%2Fivqok9Tp8ZEqeM370dvo994Nn%2FbIY2R8BiVIJniTvydeJzkW9vkYWVlt%2FKessUTtB5uaYh%2BNGlHJnoWuJUJqK319M0TfOPcs7OwXxmznPbbmE%2FZh1oqzeiwCfR9OrnR%2Bvd4M0yvyB6KP%2Fl8idfLimNu5v94JrJG0dmBmzR9Jqud5j0GhLvCmPYKO2bT9Xo6I1yEdHAXM6OpNpi3vCcWpoXE4PRMh%2B8%2BnIx8TODMrB0hXMK3uzb4GOqUBQQX%2FWIvNteOn3aZlYdnBFs0Jo%2F1sAajAjhwEuqczJRWqSzGpKzvpfoYxZbgA23QAGy4sMyPfADY6oGOpNOKzaA3lTFAljtcOhn4Afx5rOJUsnpgEJtPOYUbegXmgXYBC8gJJ6CTdb4FIGJPMrp87AHTHKgmhyqSxAr5A0VBzFoV9NPBKt4rN3tktNGHVa%2BYy6jZFKHXgtoYW8NyW2ZUNzUlzacEA&X-Amz-Signature=465a634ca5937949a025d71d19f8ddb69c119e6d9e2fefa77021c3e1a4b2cc9b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
