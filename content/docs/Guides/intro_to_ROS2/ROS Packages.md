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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PENVOQG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjvwtx5bXK1UHfHqEBoR0fSOqIFLy7m%2Fs6xnftZvi0%2FAIhAMMB4TLdwvWeu0NJ0V0BVLByO5nXkBlT4Q5p7XPDgPN4KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXe1vcHjjD5GfheDQq3AN8qUZ68mJb4zUUnUpI6mjeqO31vxFKlIif58yO1JBXS15%2FXC2L4qpc5mtlPnUsvG9TffVyY96R0ZyNIwItHAAnYJ6EpnB%2BWPMxijZNQKg8yWQjRjr2v1IP9C52vp6UPQIcVAene%2FoDJFLQ7xjpWwI%2F3XaCeHWqWHy77Wo%2F%2FqjEBGCZTzObnV1%2FBF8%2BnQ5YTcYbKT3JiKa6Xg45YWSr5kQpSrt%2BQ0cngFRlOKPaCtOZASY3bnCxlm%2B8HCDYVbFumTysrhVBzAZoXtH9dJ%2Bpnmvi6kSAhTHEeYBx0lJRHHIFu22dPRwixi5Grz0BcOZMJXQk9Bu5mobjAZ4h4TPfs8esfgaI6iUClh25o%2B%2FZIVKW%2BFTDxrb%2FAFIBUpx4iEFW%2FliriCGG5LJAER1Blb5yCqUtZ3hb3ZfQG7HbYuHDA9s%2F%2F8ZTmEG3bIGXTOejgVMsfc6jlGLyUS3ockktPap1oLOjTGl4vbXC7NB2IyANtgnqTB%2FIqLg4LO3ivVNJXqX3c2jC1HCloMpUOocOOUy560xcTZQgI7vMVQ7i5pZHrRzsAydfJi0w4%2F1eqRKw4cW3JKdjYPCIlNSu1QP24jK8%2BEUyyYxWKwq42OXHXRqZDwUj4%2B8k6urLQG%2FgeCE68DDGxNvEBjqkAax2hDB9OQ6keD3BJOyl3OPOgKQ65O8CgXKRUUrXW80quwxgFQ8%2BfIj327JSIZre%2F0i%2BUhyHar%2FWvPOX%2BCWPd3%2FVDNeO8TrVl9ascMxJ92NCXewgHPp8905iIUuw%2BOFiPZPtoTAuubRPyFPf%2Fm2pnsIja%2FY9LdUC2L4RBzPKsZhpv9jBfbZD4c%2FGqxFaMo8hN0W4xFzXBAUqAD4QnO6uryWZuGvi&X-Amz-Signature=88951cc09968a3d3d3d13e21ad5be0443df13052e2642b8e09a2cb47b1df3f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PENVOQG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjvwtx5bXK1UHfHqEBoR0fSOqIFLy7m%2Fs6xnftZvi0%2FAIhAMMB4TLdwvWeu0NJ0V0BVLByO5nXkBlT4Q5p7XPDgPN4KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXe1vcHjjD5GfheDQq3AN8qUZ68mJb4zUUnUpI6mjeqO31vxFKlIif58yO1JBXS15%2FXC2L4qpc5mtlPnUsvG9TffVyY96R0ZyNIwItHAAnYJ6EpnB%2BWPMxijZNQKg8yWQjRjr2v1IP9C52vp6UPQIcVAene%2FoDJFLQ7xjpWwI%2F3XaCeHWqWHy77Wo%2F%2FqjEBGCZTzObnV1%2FBF8%2BnQ5YTcYbKT3JiKa6Xg45YWSr5kQpSrt%2BQ0cngFRlOKPaCtOZASY3bnCxlm%2B8HCDYVbFumTysrhVBzAZoXtH9dJ%2Bpnmvi6kSAhTHEeYBx0lJRHHIFu22dPRwixi5Grz0BcOZMJXQk9Bu5mobjAZ4h4TPfs8esfgaI6iUClh25o%2B%2FZIVKW%2BFTDxrb%2FAFIBUpx4iEFW%2FliriCGG5LJAER1Blb5yCqUtZ3hb3ZfQG7HbYuHDA9s%2F%2F8ZTmEG3bIGXTOejgVMsfc6jlGLyUS3ockktPap1oLOjTGl4vbXC7NB2IyANtgnqTB%2FIqLg4LO3ivVNJXqX3c2jC1HCloMpUOocOOUy560xcTZQgI7vMVQ7i5pZHrRzsAydfJi0w4%2F1eqRKw4cW3JKdjYPCIlNSu1QP24jK8%2BEUyyYxWKwq42OXHXRqZDwUj4%2B8k6urLQG%2FgeCE68DDGxNvEBjqkAax2hDB9OQ6keD3BJOyl3OPOgKQ65O8CgXKRUUrXW80quwxgFQ8%2BfIj327JSIZre%2F0i%2BUhyHar%2FWvPOX%2BCWPd3%2FVDNeO8TrVl9ascMxJ92NCXewgHPp8905iIUuw%2BOFiPZPtoTAuubRPyFPf%2Fm2pnsIja%2FY9LdUC2L4RBzPKsZhpv9jBfbZD4c%2FGqxFaMo8hN0W4xFzXBAUqAD4QnO6uryWZuGvi&X-Amz-Signature=c48bb039f9e57b9361d61bfc5d0e2e104c8de84c8bec95c9072cc83613de1c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PENVOQG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjvwtx5bXK1UHfHqEBoR0fSOqIFLy7m%2Fs6xnftZvi0%2FAIhAMMB4TLdwvWeu0NJ0V0BVLByO5nXkBlT4Q5p7XPDgPN4KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXe1vcHjjD5GfheDQq3AN8qUZ68mJb4zUUnUpI6mjeqO31vxFKlIif58yO1JBXS15%2FXC2L4qpc5mtlPnUsvG9TffVyY96R0ZyNIwItHAAnYJ6EpnB%2BWPMxijZNQKg8yWQjRjr2v1IP9C52vp6UPQIcVAene%2FoDJFLQ7xjpWwI%2F3XaCeHWqWHy77Wo%2F%2FqjEBGCZTzObnV1%2FBF8%2BnQ5YTcYbKT3JiKa6Xg45YWSr5kQpSrt%2BQ0cngFRlOKPaCtOZASY3bnCxlm%2B8HCDYVbFumTysrhVBzAZoXtH9dJ%2Bpnmvi6kSAhTHEeYBx0lJRHHIFu22dPRwixi5Grz0BcOZMJXQk9Bu5mobjAZ4h4TPfs8esfgaI6iUClh25o%2B%2FZIVKW%2BFTDxrb%2FAFIBUpx4iEFW%2FliriCGG5LJAER1Blb5yCqUtZ3hb3ZfQG7HbYuHDA9s%2F%2F8ZTmEG3bIGXTOejgVMsfc6jlGLyUS3ockktPap1oLOjTGl4vbXC7NB2IyANtgnqTB%2FIqLg4LO3ivVNJXqX3c2jC1HCloMpUOocOOUy560xcTZQgI7vMVQ7i5pZHrRzsAydfJi0w4%2F1eqRKw4cW3JKdjYPCIlNSu1QP24jK8%2BEUyyYxWKwq42OXHXRqZDwUj4%2B8k6urLQG%2FgeCE68DDGxNvEBjqkAax2hDB9OQ6keD3BJOyl3OPOgKQ65O8CgXKRUUrXW80quwxgFQ8%2BfIj327JSIZre%2F0i%2BUhyHar%2FWvPOX%2BCWPd3%2FVDNeO8TrVl9ascMxJ92NCXewgHPp8905iIUuw%2BOFiPZPtoTAuubRPyFPf%2Fm2pnsIja%2FY9LdUC2L4RBzPKsZhpv9jBfbZD4c%2FGqxFaMo8hN0W4xFzXBAUqAD4QnO6uryWZuGvi&X-Amz-Signature=e9f065cfb55b8fdd6dcbb8b09104d01f4ee048e7b7919d305eda2fa624838cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PENVOQG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjvwtx5bXK1UHfHqEBoR0fSOqIFLy7m%2Fs6xnftZvi0%2FAIhAMMB4TLdwvWeu0NJ0V0BVLByO5nXkBlT4Q5p7XPDgPN4KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXe1vcHjjD5GfheDQq3AN8qUZ68mJb4zUUnUpI6mjeqO31vxFKlIif58yO1JBXS15%2FXC2L4qpc5mtlPnUsvG9TffVyY96R0ZyNIwItHAAnYJ6EpnB%2BWPMxijZNQKg8yWQjRjr2v1IP9C52vp6UPQIcVAene%2FoDJFLQ7xjpWwI%2F3XaCeHWqWHy77Wo%2F%2FqjEBGCZTzObnV1%2FBF8%2BnQ5YTcYbKT3JiKa6Xg45YWSr5kQpSrt%2BQ0cngFRlOKPaCtOZASY3bnCxlm%2B8HCDYVbFumTysrhVBzAZoXtH9dJ%2Bpnmvi6kSAhTHEeYBx0lJRHHIFu22dPRwixi5Grz0BcOZMJXQk9Bu5mobjAZ4h4TPfs8esfgaI6iUClh25o%2B%2FZIVKW%2BFTDxrb%2FAFIBUpx4iEFW%2FliriCGG5LJAER1Blb5yCqUtZ3hb3ZfQG7HbYuHDA9s%2F%2F8ZTmEG3bIGXTOejgVMsfc6jlGLyUS3ockktPap1oLOjTGl4vbXC7NB2IyANtgnqTB%2FIqLg4LO3ivVNJXqX3c2jC1HCloMpUOocOOUy560xcTZQgI7vMVQ7i5pZHrRzsAydfJi0w4%2F1eqRKw4cW3JKdjYPCIlNSu1QP24jK8%2BEUyyYxWKwq42OXHXRqZDwUj4%2B8k6urLQG%2FgeCE68DDGxNvEBjqkAax2hDB9OQ6keD3BJOyl3OPOgKQ65O8CgXKRUUrXW80quwxgFQ8%2BfIj327JSIZre%2F0i%2BUhyHar%2FWvPOX%2BCWPd3%2FVDNeO8TrVl9ascMxJ92NCXewgHPp8905iIUuw%2BOFiPZPtoTAuubRPyFPf%2Fm2pnsIja%2FY9LdUC2L4RBzPKsZhpv9jBfbZD4c%2FGqxFaMo8hN0W4xFzXBAUqAD4QnO6uryWZuGvi&X-Amz-Signature=fe630259a31335626685a43728b8060f890484bd18a0fdded74a6e06c5d242e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PENVOQG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjvwtx5bXK1UHfHqEBoR0fSOqIFLy7m%2Fs6xnftZvi0%2FAIhAMMB4TLdwvWeu0NJ0V0BVLByO5nXkBlT4Q5p7XPDgPN4KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXe1vcHjjD5GfheDQq3AN8qUZ68mJb4zUUnUpI6mjeqO31vxFKlIif58yO1JBXS15%2FXC2L4qpc5mtlPnUsvG9TffVyY96R0ZyNIwItHAAnYJ6EpnB%2BWPMxijZNQKg8yWQjRjr2v1IP9C52vp6UPQIcVAene%2FoDJFLQ7xjpWwI%2F3XaCeHWqWHy77Wo%2F%2FqjEBGCZTzObnV1%2FBF8%2BnQ5YTcYbKT3JiKa6Xg45YWSr5kQpSrt%2BQ0cngFRlOKPaCtOZASY3bnCxlm%2B8HCDYVbFumTysrhVBzAZoXtH9dJ%2Bpnmvi6kSAhTHEeYBx0lJRHHIFu22dPRwixi5Grz0BcOZMJXQk9Bu5mobjAZ4h4TPfs8esfgaI6iUClh25o%2B%2FZIVKW%2BFTDxrb%2FAFIBUpx4iEFW%2FliriCGG5LJAER1Blb5yCqUtZ3hb3ZfQG7HbYuHDA9s%2F%2F8ZTmEG3bIGXTOejgVMsfc6jlGLyUS3ockktPap1oLOjTGl4vbXC7NB2IyANtgnqTB%2FIqLg4LO3ivVNJXqX3c2jC1HCloMpUOocOOUy560xcTZQgI7vMVQ7i5pZHrRzsAydfJi0w4%2F1eqRKw4cW3JKdjYPCIlNSu1QP24jK8%2BEUyyYxWKwq42OXHXRqZDwUj4%2B8k6urLQG%2FgeCE68DDGxNvEBjqkAax2hDB9OQ6keD3BJOyl3OPOgKQ65O8CgXKRUUrXW80quwxgFQ8%2BfIj327JSIZre%2F0i%2BUhyHar%2FWvPOX%2BCWPd3%2FVDNeO8TrVl9ascMxJ92NCXewgHPp8905iIUuw%2BOFiPZPtoTAuubRPyFPf%2Fm2pnsIja%2FY9LdUC2L4RBzPKsZhpv9jBfbZD4c%2FGqxFaMo8hN0W4xFzXBAUqAD4QnO6uryWZuGvi&X-Amz-Signature=e0ba187674f32b9e1d1a1b125156d63cf1de14d963663e2e9bb8337a37bafa09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PENVOQG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjvwtx5bXK1UHfHqEBoR0fSOqIFLy7m%2Fs6xnftZvi0%2FAIhAMMB4TLdwvWeu0NJ0V0BVLByO5nXkBlT4Q5p7XPDgPN4KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXe1vcHjjD5GfheDQq3AN8qUZ68mJb4zUUnUpI6mjeqO31vxFKlIif58yO1JBXS15%2FXC2L4qpc5mtlPnUsvG9TffVyY96R0ZyNIwItHAAnYJ6EpnB%2BWPMxijZNQKg8yWQjRjr2v1IP9C52vp6UPQIcVAene%2FoDJFLQ7xjpWwI%2F3XaCeHWqWHy77Wo%2F%2FqjEBGCZTzObnV1%2FBF8%2BnQ5YTcYbKT3JiKa6Xg45YWSr5kQpSrt%2BQ0cngFRlOKPaCtOZASY3bnCxlm%2B8HCDYVbFumTysrhVBzAZoXtH9dJ%2Bpnmvi6kSAhTHEeYBx0lJRHHIFu22dPRwixi5Grz0BcOZMJXQk9Bu5mobjAZ4h4TPfs8esfgaI6iUClh25o%2B%2FZIVKW%2BFTDxrb%2FAFIBUpx4iEFW%2FliriCGG5LJAER1Blb5yCqUtZ3hb3ZfQG7HbYuHDA9s%2F%2F8ZTmEG3bIGXTOejgVMsfc6jlGLyUS3ockktPap1oLOjTGl4vbXC7NB2IyANtgnqTB%2FIqLg4LO3ivVNJXqX3c2jC1HCloMpUOocOOUy560xcTZQgI7vMVQ7i5pZHrRzsAydfJi0w4%2F1eqRKw4cW3JKdjYPCIlNSu1QP24jK8%2BEUyyYxWKwq42OXHXRqZDwUj4%2B8k6urLQG%2FgeCE68DDGxNvEBjqkAax2hDB9OQ6keD3BJOyl3OPOgKQ65O8CgXKRUUrXW80quwxgFQ8%2BfIj327JSIZre%2F0i%2BUhyHar%2FWvPOX%2BCWPd3%2FVDNeO8TrVl9ascMxJ92NCXewgHPp8905iIUuw%2BOFiPZPtoTAuubRPyFPf%2Fm2pnsIja%2FY9LdUC2L4RBzPKsZhpv9jBfbZD4c%2FGqxFaMo8hN0W4xFzXBAUqAD4QnO6uryWZuGvi&X-Amz-Signature=eff87f5109d027e2345fdda0b18ad2c6b41c8d5587b393bd61fd025e762c460e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PENVOQG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjvwtx5bXK1UHfHqEBoR0fSOqIFLy7m%2Fs6xnftZvi0%2FAIhAMMB4TLdwvWeu0NJ0V0BVLByO5nXkBlT4Q5p7XPDgPN4KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXe1vcHjjD5GfheDQq3AN8qUZ68mJb4zUUnUpI6mjeqO31vxFKlIif58yO1JBXS15%2FXC2L4qpc5mtlPnUsvG9TffVyY96R0ZyNIwItHAAnYJ6EpnB%2BWPMxijZNQKg8yWQjRjr2v1IP9C52vp6UPQIcVAene%2FoDJFLQ7xjpWwI%2F3XaCeHWqWHy77Wo%2F%2FqjEBGCZTzObnV1%2FBF8%2BnQ5YTcYbKT3JiKa6Xg45YWSr5kQpSrt%2BQ0cngFRlOKPaCtOZASY3bnCxlm%2B8HCDYVbFumTysrhVBzAZoXtH9dJ%2Bpnmvi6kSAhTHEeYBx0lJRHHIFu22dPRwixi5Grz0BcOZMJXQk9Bu5mobjAZ4h4TPfs8esfgaI6iUClh25o%2B%2FZIVKW%2BFTDxrb%2FAFIBUpx4iEFW%2FliriCGG5LJAER1Blb5yCqUtZ3hb3ZfQG7HbYuHDA9s%2F%2F8ZTmEG3bIGXTOejgVMsfc6jlGLyUS3ockktPap1oLOjTGl4vbXC7NB2IyANtgnqTB%2FIqLg4LO3ivVNJXqX3c2jC1HCloMpUOocOOUy560xcTZQgI7vMVQ7i5pZHrRzsAydfJi0w4%2F1eqRKw4cW3JKdjYPCIlNSu1QP24jK8%2BEUyyYxWKwq42OXHXRqZDwUj4%2B8k6urLQG%2FgeCE68DDGxNvEBjqkAax2hDB9OQ6keD3BJOyl3OPOgKQ65O8CgXKRUUrXW80quwxgFQ8%2BfIj327JSIZre%2F0i%2BUhyHar%2FWvPOX%2BCWPd3%2FVDNeO8TrVl9ascMxJ92NCXewgHPp8905iIUuw%2BOFiPZPtoTAuubRPyFPf%2Fm2pnsIja%2FY9LdUC2L4RBzPKsZhpv9jBfbZD4c%2FGqxFaMo8hN0W4xFzXBAUqAD4QnO6uryWZuGvi&X-Amz-Signature=f5c3a2863bd95a4baaf7fe749b7ca0e9d231b61798c0ce59e543af98afe71795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
