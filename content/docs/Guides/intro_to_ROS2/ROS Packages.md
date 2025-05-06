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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP35CJYF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbYvINsKjKx4x3G9GyttjdmqeH33X%2F5A36KiwLKqTmmgIhAJKRsYyxSxUvaaR68lCI02hfhJbAQeVCq7EHwxWWWZJpKv8DCE8QABoMNjM3NDIzMTgzODA1IgwkuOipcSEmowDN3vgq3APOW1zXOGVkHnWRSAIcHlbz62sBTQalgthWeuw5tNGm17tDZOfHek7RAxwc%2B6weETvDnEkE%2F7RJYvKwzTrvpbWmZyAXd41TCiTFL%2FkwgQHJJ6RhttTkCgjqMGSrJuybk6a0NKHMI2rM7lqjavwNEx0cIVCyiG24GRLrIVvUHAfyb4DHIIO3FM4j%2B1ne762Cw7A57Ar0Q7ghw9jShIgQT86YvFwzEoAgpHv3%2FC%2FyrlKuEgEmbDB3Brnt%2F6lvKY5nm9u6WwcCCbB2I2ZYT2aF4f1qYK6s%2FIvjRr%2FHhidP19GSTC2E%2FA%2BQNSnPyW%2FoyZV6JfCWBsIL97ymchfWGKfk2g2U4L9Ca%2F6oyZkg74fTNQc3wb5i9by%2Br0CmMF7PygLWqESG4yjS4%2F%2Fm8GlThfjfqkqX5Ry67sq2eIPTcTZE5OiOYYsUrLJiTVvkp0fpLVJGFqpnZci20kYij%2BJb1%2FqYqQogir5AVTpT8O83%2FLJI2IGkIKR0oozEhxQYQEV7OLYbp4V1zdgGCk085mCqyalNfBnSjCfSoGTcF6Jtvyi56iwxkjmz0Ko3RZ0t8%2Fvh9o1UQwxxM8emOmAvGPt1%2B4d0nz0rhOksc2orVMwfolRVEHBEJ4cNJesYWQm1VBDWGDC3lerABjqkASo%2F0SDLNMloBEcwyL1NFDbe6cT0raYWmw1b7Q0DOgi1sUECcOi%2FdE3EsFrb1yoZ8IOQSdyK32bD9YWBBGiiJ9E2dEVrsuuS8Tl9B9SSi2Z9nU29HJzvgNlPmGvc5qvbZekrKXIf6eBzVTJ0we86Tvl%2FFIQ01WjJP99v2fjfo7MhykSdh1G62x3rUBCayrGz8Rdc2Zf3cHIEjzkXsGF4duQWXFur&X-Amz-Signature=47cfc71b409a2f9f175541ae8b1cac8a0ce05543e83bcc5732495aa99adae609&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP35CJYF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbYvINsKjKx4x3G9GyttjdmqeH33X%2F5A36KiwLKqTmmgIhAJKRsYyxSxUvaaR68lCI02hfhJbAQeVCq7EHwxWWWZJpKv8DCE8QABoMNjM3NDIzMTgzODA1IgwkuOipcSEmowDN3vgq3APOW1zXOGVkHnWRSAIcHlbz62sBTQalgthWeuw5tNGm17tDZOfHek7RAxwc%2B6weETvDnEkE%2F7RJYvKwzTrvpbWmZyAXd41TCiTFL%2FkwgQHJJ6RhttTkCgjqMGSrJuybk6a0NKHMI2rM7lqjavwNEx0cIVCyiG24GRLrIVvUHAfyb4DHIIO3FM4j%2B1ne762Cw7A57Ar0Q7ghw9jShIgQT86YvFwzEoAgpHv3%2FC%2FyrlKuEgEmbDB3Brnt%2F6lvKY5nm9u6WwcCCbB2I2ZYT2aF4f1qYK6s%2FIvjRr%2FHhidP19GSTC2E%2FA%2BQNSnPyW%2FoyZV6JfCWBsIL97ymchfWGKfk2g2U4L9Ca%2F6oyZkg74fTNQc3wb5i9by%2Br0CmMF7PygLWqESG4yjS4%2F%2Fm8GlThfjfqkqX5Ry67sq2eIPTcTZE5OiOYYsUrLJiTVvkp0fpLVJGFqpnZci20kYij%2BJb1%2FqYqQogir5AVTpT8O83%2FLJI2IGkIKR0oozEhxQYQEV7OLYbp4V1zdgGCk085mCqyalNfBnSjCfSoGTcF6Jtvyi56iwxkjmz0Ko3RZ0t8%2Fvh9o1UQwxxM8emOmAvGPt1%2B4d0nz0rhOksc2orVMwfolRVEHBEJ4cNJesYWQm1VBDWGDC3lerABjqkASo%2F0SDLNMloBEcwyL1NFDbe6cT0raYWmw1b7Q0DOgi1sUECcOi%2FdE3EsFrb1yoZ8IOQSdyK32bD9YWBBGiiJ9E2dEVrsuuS8Tl9B9SSi2Z9nU29HJzvgNlPmGvc5qvbZekrKXIf6eBzVTJ0we86Tvl%2FFIQ01WjJP99v2fjfo7MhykSdh1G62x3rUBCayrGz8Rdc2Zf3cHIEjzkXsGF4duQWXFur&X-Amz-Signature=2157cacd6d4413aeb8b7860923c7ba053eab50a15fa2132dd1754af3486e6776&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP35CJYF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbYvINsKjKx4x3G9GyttjdmqeH33X%2F5A36KiwLKqTmmgIhAJKRsYyxSxUvaaR68lCI02hfhJbAQeVCq7EHwxWWWZJpKv8DCE8QABoMNjM3NDIzMTgzODA1IgwkuOipcSEmowDN3vgq3APOW1zXOGVkHnWRSAIcHlbz62sBTQalgthWeuw5tNGm17tDZOfHek7RAxwc%2B6weETvDnEkE%2F7RJYvKwzTrvpbWmZyAXd41TCiTFL%2FkwgQHJJ6RhttTkCgjqMGSrJuybk6a0NKHMI2rM7lqjavwNEx0cIVCyiG24GRLrIVvUHAfyb4DHIIO3FM4j%2B1ne762Cw7A57Ar0Q7ghw9jShIgQT86YvFwzEoAgpHv3%2FC%2FyrlKuEgEmbDB3Brnt%2F6lvKY5nm9u6WwcCCbB2I2ZYT2aF4f1qYK6s%2FIvjRr%2FHhidP19GSTC2E%2FA%2BQNSnPyW%2FoyZV6JfCWBsIL97ymchfWGKfk2g2U4L9Ca%2F6oyZkg74fTNQc3wb5i9by%2Br0CmMF7PygLWqESG4yjS4%2F%2Fm8GlThfjfqkqX5Ry67sq2eIPTcTZE5OiOYYsUrLJiTVvkp0fpLVJGFqpnZci20kYij%2BJb1%2FqYqQogir5AVTpT8O83%2FLJI2IGkIKR0oozEhxQYQEV7OLYbp4V1zdgGCk085mCqyalNfBnSjCfSoGTcF6Jtvyi56iwxkjmz0Ko3RZ0t8%2Fvh9o1UQwxxM8emOmAvGPt1%2B4d0nz0rhOksc2orVMwfolRVEHBEJ4cNJesYWQm1VBDWGDC3lerABjqkASo%2F0SDLNMloBEcwyL1NFDbe6cT0raYWmw1b7Q0DOgi1sUECcOi%2FdE3EsFrb1yoZ8IOQSdyK32bD9YWBBGiiJ9E2dEVrsuuS8Tl9B9SSi2Z9nU29HJzvgNlPmGvc5qvbZekrKXIf6eBzVTJ0we86Tvl%2FFIQ01WjJP99v2fjfo7MhykSdh1G62x3rUBCayrGz8Rdc2Zf3cHIEjzkXsGF4duQWXFur&X-Amz-Signature=fc382e86dc72892f2c0ea4e9d8e8ca0ce35ab0eb4f86fb6d37d2b87f068c7da4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP35CJYF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbYvINsKjKx4x3G9GyttjdmqeH33X%2F5A36KiwLKqTmmgIhAJKRsYyxSxUvaaR68lCI02hfhJbAQeVCq7EHwxWWWZJpKv8DCE8QABoMNjM3NDIzMTgzODA1IgwkuOipcSEmowDN3vgq3APOW1zXOGVkHnWRSAIcHlbz62sBTQalgthWeuw5tNGm17tDZOfHek7RAxwc%2B6weETvDnEkE%2F7RJYvKwzTrvpbWmZyAXd41TCiTFL%2FkwgQHJJ6RhttTkCgjqMGSrJuybk6a0NKHMI2rM7lqjavwNEx0cIVCyiG24GRLrIVvUHAfyb4DHIIO3FM4j%2B1ne762Cw7A57Ar0Q7ghw9jShIgQT86YvFwzEoAgpHv3%2FC%2FyrlKuEgEmbDB3Brnt%2F6lvKY5nm9u6WwcCCbB2I2ZYT2aF4f1qYK6s%2FIvjRr%2FHhidP19GSTC2E%2FA%2BQNSnPyW%2FoyZV6JfCWBsIL97ymchfWGKfk2g2U4L9Ca%2F6oyZkg74fTNQc3wb5i9by%2Br0CmMF7PygLWqESG4yjS4%2F%2Fm8GlThfjfqkqX5Ry67sq2eIPTcTZE5OiOYYsUrLJiTVvkp0fpLVJGFqpnZci20kYij%2BJb1%2FqYqQogir5AVTpT8O83%2FLJI2IGkIKR0oozEhxQYQEV7OLYbp4V1zdgGCk085mCqyalNfBnSjCfSoGTcF6Jtvyi56iwxkjmz0Ko3RZ0t8%2Fvh9o1UQwxxM8emOmAvGPt1%2B4d0nz0rhOksc2orVMwfolRVEHBEJ4cNJesYWQm1VBDWGDC3lerABjqkASo%2F0SDLNMloBEcwyL1NFDbe6cT0raYWmw1b7Q0DOgi1sUECcOi%2FdE3EsFrb1yoZ8IOQSdyK32bD9YWBBGiiJ9E2dEVrsuuS8Tl9B9SSi2Z9nU29HJzvgNlPmGvc5qvbZekrKXIf6eBzVTJ0we86Tvl%2FFIQ01WjJP99v2fjfo7MhykSdh1G62x3rUBCayrGz8Rdc2Zf3cHIEjzkXsGF4duQWXFur&X-Amz-Signature=87964af5de4e1d68d43529a5a1b65bf484d687e965b4d53928c4ce1ef9f8a1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP35CJYF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbYvINsKjKx4x3G9GyttjdmqeH33X%2F5A36KiwLKqTmmgIhAJKRsYyxSxUvaaR68lCI02hfhJbAQeVCq7EHwxWWWZJpKv8DCE8QABoMNjM3NDIzMTgzODA1IgwkuOipcSEmowDN3vgq3APOW1zXOGVkHnWRSAIcHlbz62sBTQalgthWeuw5tNGm17tDZOfHek7RAxwc%2B6weETvDnEkE%2F7RJYvKwzTrvpbWmZyAXd41TCiTFL%2FkwgQHJJ6RhttTkCgjqMGSrJuybk6a0NKHMI2rM7lqjavwNEx0cIVCyiG24GRLrIVvUHAfyb4DHIIO3FM4j%2B1ne762Cw7A57Ar0Q7ghw9jShIgQT86YvFwzEoAgpHv3%2FC%2FyrlKuEgEmbDB3Brnt%2F6lvKY5nm9u6WwcCCbB2I2ZYT2aF4f1qYK6s%2FIvjRr%2FHhidP19GSTC2E%2FA%2BQNSnPyW%2FoyZV6JfCWBsIL97ymchfWGKfk2g2U4L9Ca%2F6oyZkg74fTNQc3wb5i9by%2Br0CmMF7PygLWqESG4yjS4%2F%2Fm8GlThfjfqkqX5Ry67sq2eIPTcTZE5OiOYYsUrLJiTVvkp0fpLVJGFqpnZci20kYij%2BJb1%2FqYqQogir5AVTpT8O83%2FLJI2IGkIKR0oozEhxQYQEV7OLYbp4V1zdgGCk085mCqyalNfBnSjCfSoGTcF6Jtvyi56iwxkjmz0Ko3RZ0t8%2Fvh9o1UQwxxM8emOmAvGPt1%2B4d0nz0rhOksc2orVMwfolRVEHBEJ4cNJesYWQm1VBDWGDC3lerABjqkASo%2F0SDLNMloBEcwyL1NFDbe6cT0raYWmw1b7Q0DOgi1sUECcOi%2FdE3EsFrb1yoZ8IOQSdyK32bD9YWBBGiiJ9E2dEVrsuuS8Tl9B9SSi2Z9nU29HJzvgNlPmGvc5qvbZekrKXIf6eBzVTJ0we86Tvl%2FFIQ01WjJP99v2fjfo7MhykSdh1G62x3rUBCayrGz8Rdc2Zf3cHIEjzkXsGF4duQWXFur&X-Amz-Signature=2009193c96986f8a80478d6ba19e542e379d2dceb65e09fa0974ccea14de3713&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP35CJYF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbYvINsKjKx4x3G9GyttjdmqeH33X%2F5A36KiwLKqTmmgIhAJKRsYyxSxUvaaR68lCI02hfhJbAQeVCq7EHwxWWWZJpKv8DCE8QABoMNjM3NDIzMTgzODA1IgwkuOipcSEmowDN3vgq3APOW1zXOGVkHnWRSAIcHlbz62sBTQalgthWeuw5tNGm17tDZOfHek7RAxwc%2B6weETvDnEkE%2F7RJYvKwzTrvpbWmZyAXd41TCiTFL%2FkwgQHJJ6RhttTkCgjqMGSrJuybk6a0NKHMI2rM7lqjavwNEx0cIVCyiG24GRLrIVvUHAfyb4DHIIO3FM4j%2B1ne762Cw7A57Ar0Q7ghw9jShIgQT86YvFwzEoAgpHv3%2FC%2FyrlKuEgEmbDB3Brnt%2F6lvKY5nm9u6WwcCCbB2I2ZYT2aF4f1qYK6s%2FIvjRr%2FHhidP19GSTC2E%2FA%2BQNSnPyW%2FoyZV6JfCWBsIL97ymchfWGKfk2g2U4L9Ca%2F6oyZkg74fTNQc3wb5i9by%2Br0CmMF7PygLWqESG4yjS4%2F%2Fm8GlThfjfqkqX5Ry67sq2eIPTcTZE5OiOYYsUrLJiTVvkp0fpLVJGFqpnZci20kYij%2BJb1%2FqYqQogir5AVTpT8O83%2FLJI2IGkIKR0oozEhxQYQEV7OLYbp4V1zdgGCk085mCqyalNfBnSjCfSoGTcF6Jtvyi56iwxkjmz0Ko3RZ0t8%2Fvh9o1UQwxxM8emOmAvGPt1%2B4d0nz0rhOksc2orVMwfolRVEHBEJ4cNJesYWQm1VBDWGDC3lerABjqkASo%2F0SDLNMloBEcwyL1NFDbe6cT0raYWmw1b7Q0DOgi1sUECcOi%2FdE3EsFrb1yoZ8IOQSdyK32bD9YWBBGiiJ9E2dEVrsuuS8Tl9B9SSi2Z9nU29HJzvgNlPmGvc5qvbZekrKXIf6eBzVTJ0we86Tvl%2FFIQ01WjJP99v2fjfo7MhykSdh1G62x3rUBCayrGz8Rdc2Zf3cHIEjzkXsGF4duQWXFur&X-Amz-Signature=098e4970eda7df76abbd8417832083947df8c93040cdb1b569dafd1a6bdceaf1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP35CJYF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbYvINsKjKx4x3G9GyttjdmqeH33X%2F5A36KiwLKqTmmgIhAJKRsYyxSxUvaaR68lCI02hfhJbAQeVCq7EHwxWWWZJpKv8DCE8QABoMNjM3NDIzMTgzODA1IgwkuOipcSEmowDN3vgq3APOW1zXOGVkHnWRSAIcHlbz62sBTQalgthWeuw5tNGm17tDZOfHek7RAxwc%2B6weETvDnEkE%2F7RJYvKwzTrvpbWmZyAXd41TCiTFL%2FkwgQHJJ6RhttTkCgjqMGSrJuybk6a0NKHMI2rM7lqjavwNEx0cIVCyiG24GRLrIVvUHAfyb4DHIIO3FM4j%2B1ne762Cw7A57Ar0Q7ghw9jShIgQT86YvFwzEoAgpHv3%2FC%2FyrlKuEgEmbDB3Brnt%2F6lvKY5nm9u6WwcCCbB2I2ZYT2aF4f1qYK6s%2FIvjRr%2FHhidP19GSTC2E%2FA%2BQNSnPyW%2FoyZV6JfCWBsIL97ymchfWGKfk2g2U4L9Ca%2F6oyZkg74fTNQc3wb5i9by%2Br0CmMF7PygLWqESG4yjS4%2F%2Fm8GlThfjfqkqX5Ry67sq2eIPTcTZE5OiOYYsUrLJiTVvkp0fpLVJGFqpnZci20kYij%2BJb1%2FqYqQogir5AVTpT8O83%2FLJI2IGkIKR0oozEhxQYQEV7OLYbp4V1zdgGCk085mCqyalNfBnSjCfSoGTcF6Jtvyi56iwxkjmz0Ko3RZ0t8%2Fvh9o1UQwxxM8emOmAvGPt1%2B4d0nz0rhOksc2orVMwfolRVEHBEJ4cNJesYWQm1VBDWGDC3lerABjqkASo%2F0SDLNMloBEcwyL1NFDbe6cT0raYWmw1b7Q0DOgi1sUECcOi%2FdE3EsFrb1yoZ8IOQSdyK32bD9YWBBGiiJ9E2dEVrsuuS8Tl9B9SSi2Z9nU29HJzvgNlPmGvc5qvbZekrKXIf6eBzVTJ0we86Tvl%2FFIQ01WjJP99v2fjfo7MhykSdh1G62x3rUBCayrGz8Rdc2Zf3cHIEjzkXsGF4duQWXFur&X-Amz-Signature=a87955bfca02e091386c231f542dda9eee66b9e90160d2f7b9fb6ec97071aa1b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
