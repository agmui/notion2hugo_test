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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQYZLGH5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIE%2FmIm41UFANFlqsWHsf6qwDbjTAeIfh%2B5IoMaY7cHAIhAM7jnGzmoicxGmA9dm86598WXURSXlOBITFgpgY1YuVeKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbz2Cgij2rIT8WWh4q3APgfUI0O6dXH2by6XCgqxNecu11UaoOZuQ0cQhEC3wDtWcFOO2Afm3t4RnAGDsyrZzIqIZGFoAda7PD2aBDgvybhGABivsYtuCD%2Fc434qSHqOErwqrogfp5C7yOBOCRBQjT1fGxMGnZcGkvHBUkt%2Fb5N3i3dRRbmn3F%2FIHxUaoaLC5VeaECmAGHEBAbHnzGjLuz2%2FQz2siJwmffVDVj6aX5i5T6yIQX98vI76OT0tE0WlEny6CYcIyR%2FKRNDNthOseVgBTYrbe17%2BkrrLDRyv7eFQptKJW9%2FjeF93Ucg80s%2FQKPraC5SRIzdWMMtGU4c4GOkfQ435xlmKXzO5X%2BPQ46EvIKErb9NkiEWmPQkhKWs%2FHoqc7INdxeyBCA0VxS2bSnHsFgR6xmENpK6Us3rzN4FQHFBmGYsqs4htAMHOumoXkR1YDMY9Y1jvpIKNyhb1TASNuUSCNRV4GYf%2FuGt3wv64qfsCsOC99je%2FI6FyKe6pR9jnt6G4aBshJLV0g77avRlrrzQWQK7ec3NM%2BiI0jTpiuyIer2SRoONJVIwxKqITXQsI2fIFlUDn3J97PgZIRjk%2FwUV%2BA0PsVlV%2BadYrXtKFd%2Fc6QF4UmGtjVJa6WL%2Bbp5rdWPWyx6sv8S9DCSqOLCBjqkAZkj%2Fu97%2B%2FEbeBfp6Cr5rBJ22vdS6%2FPI%2BaAs9gd4PLOdu5fgIcvLCc8FdIO2L1oWKkAvyjP1G3Ie7o0ViqeBRT4yIWeDIHthtYoJqaaCMet3PehzWHupLVIvj95N9sZhf61dH61XiCxFxFYtms4SMqRrKLPdFtmFOZx%2B4yDGSnZ1XjBFOT6rXVf6tOXfWcn2wfrDbRKhkp7k0FawkREstrgMdoEt&X-Amz-Signature=c768ce0c1a0c78b75b316a7623d632c85fc642ea1f1234ff0b62a70de5cef848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQYZLGH5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIE%2FmIm41UFANFlqsWHsf6qwDbjTAeIfh%2B5IoMaY7cHAIhAM7jnGzmoicxGmA9dm86598WXURSXlOBITFgpgY1YuVeKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbz2Cgij2rIT8WWh4q3APgfUI0O6dXH2by6XCgqxNecu11UaoOZuQ0cQhEC3wDtWcFOO2Afm3t4RnAGDsyrZzIqIZGFoAda7PD2aBDgvybhGABivsYtuCD%2Fc434qSHqOErwqrogfp5C7yOBOCRBQjT1fGxMGnZcGkvHBUkt%2Fb5N3i3dRRbmn3F%2FIHxUaoaLC5VeaECmAGHEBAbHnzGjLuz2%2FQz2siJwmffVDVj6aX5i5T6yIQX98vI76OT0tE0WlEny6CYcIyR%2FKRNDNthOseVgBTYrbe17%2BkrrLDRyv7eFQptKJW9%2FjeF93Ucg80s%2FQKPraC5SRIzdWMMtGU4c4GOkfQ435xlmKXzO5X%2BPQ46EvIKErb9NkiEWmPQkhKWs%2FHoqc7INdxeyBCA0VxS2bSnHsFgR6xmENpK6Us3rzN4FQHFBmGYsqs4htAMHOumoXkR1YDMY9Y1jvpIKNyhb1TASNuUSCNRV4GYf%2FuGt3wv64qfsCsOC99je%2FI6FyKe6pR9jnt6G4aBshJLV0g77avRlrrzQWQK7ec3NM%2BiI0jTpiuyIer2SRoONJVIwxKqITXQsI2fIFlUDn3J97PgZIRjk%2FwUV%2BA0PsVlV%2BadYrXtKFd%2Fc6QF4UmGtjVJa6WL%2Bbp5rdWPWyx6sv8S9DCSqOLCBjqkAZkj%2Fu97%2B%2FEbeBfp6Cr5rBJ22vdS6%2FPI%2BaAs9gd4PLOdu5fgIcvLCc8FdIO2L1oWKkAvyjP1G3Ie7o0ViqeBRT4yIWeDIHthtYoJqaaCMet3PehzWHupLVIvj95N9sZhf61dH61XiCxFxFYtms4SMqRrKLPdFtmFOZx%2B4yDGSnZ1XjBFOT6rXVf6tOXfWcn2wfrDbRKhkp7k0FawkREstrgMdoEt&X-Amz-Signature=21fedab8394258328acac5d7c057ac6cca90943f961e777181f81e5e00c9837c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQYZLGH5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIE%2FmIm41UFANFlqsWHsf6qwDbjTAeIfh%2B5IoMaY7cHAIhAM7jnGzmoicxGmA9dm86598WXURSXlOBITFgpgY1YuVeKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbz2Cgij2rIT8WWh4q3APgfUI0O6dXH2by6XCgqxNecu11UaoOZuQ0cQhEC3wDtWcFOO2Afm3t4RnAGDsyrZzIqIZGFoAda7PD2aBDgvybhGABivsYtuCD%2Fc434qSHqOErwqrogfp5C7yOBOCRBQjT1fGxMGnZcGkvHBUkt%2Fb5N3i3dRRbmn3F%2FIHxUaoaLC5VeaECmAGHEBAbHnzGjLuz2%2FQz2siJwmffVDVj6aX5i5T6yIQX98vI76OT0tE0WlEny6CYcIyR%2FKRNDNthOseVgBTYrbe17%2BkrrLDRyv7eFQptKJW9%2FjeF93Ucg80s%2FQKPraC5SRIzdWMMtGU4c4GOkfQ435xlmKXzO5X%2BPQ46EvIKErb9NkiEWmPQkhKWs%2FHoqc7INdxeyBCA0VxS2bSnHsFgR6xmENpK6Us3rzN4FQHFBmGYsqs4htAMHOumoXkR1YDMY9Y1jvpIKNyhb1TASNuUSCNRV4GYf%2FuGt3wv64qfsCsOC99je%2FI6FyKe6pR9jnt6G4aBshJLV0g77avRlrrzQWQK7ec3NM%2BiI0jTpiuyIer2SRoONJVIwxKqITXQsI2fIFlUDn3J97PgZIRjk%2FwUV%2BA0PsVlV%2BadYrXtKFd%2Fc6QF4UmGtjVJa6WL%2Bbp5rdWPWyx6sv8S9DCSqOLCBjqkAZkj%2Fu97%2B%2FEbeBfp6Cr5rBJ22vdS6%2FPI%2BaAs9gd4PLOdu5fgIcvLCc8FdIO2L1oWKkAvyjP1G3Ie7o0ViqeBRT4yIWeDIHthtYoJqaaCMet3PehzWHupLVIvj95N9sZhf61dH61XiCxFxFYtms4SMqRrKLPdFtmFOZx%2B4yDGSnZ1XjBFOT6rXVf6tOXfWcn2wfrDbRKhkp7k0FawkREstrgMdoEt&X-Amz-Signature=a6ee49e3d54b0557fd28ea44477504d2e837ef20b6ecb7cb233a989ec3f0f5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQYZLGH5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIE%2FmIm41UFANFlqsWHsf6qwDbjTAeIfh%2B5IoMaY7cHAIhAM7jnGzmoicxGmA9dm86598WXURSXlOBITFgpgY1YuVeKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbz2Cgij2rIT8WWh4q3APgfUI0O6dXH2by6XCgqxNecu11UaoOZuQ0cQhEC3wDtWcFOO2Afm3t4RnAGDsyrZzIqIZGFoAda7PD2aBDgvybhGABivsYtuCD%2Fc434qSHqOErwqrogfp5C7yOBOCRBQjT1fGxMGnZcGkvHBUkt%2Fb5N3i3dRRbmn3F%2FIHxUaoaLC5VeaECmAGHEBAbHnzGjLuz2%2FQz2siJwmffVDVj6aX5i5T6yIQX98vI76OT0tE0WlEny6CYcIyR%2FKRNDNthOseVgBTYrbe17%2BkrrLDRyv7eFQptKJW9%2FjeF93Ucg80s%2FQKPraC5SRIzdWMMtGU4c4GOkfQ435xlmKXzO5X%2BPQ46EvIKErb9NkiEWmPQkhKWs%2FHoqc7INdxeyBCA0VxS2bSnHsFgR6xmENpK6Us3rzN4FQHFBmGYsqs4htAMHOumoXkR1YDMY9Y1jvpIKNyhb1TASNuUSCNRV4GYf%2FuGt3wv64qfsCsOC99je%2FI6FyKe6pR9jnt6G4aBshJLV0g77avRlrrzQWQK7ec3NM%2BiI0jTpiuyIer2SRoONJVIwxKqITXQsI2fIFlUDn3J97PgZIRjk%2FwUV%2BA0PsVlV%2BadYrXtKFd%2Fc6QF4UmGtjVJa6WL%2Bbp5rdWPWyx6sv8S9DCSqOLCBjqkAZkj%2Fu97%2B%2FEbeBfp6Cr5rBJ22vdS6%2FPI%2BaAs9gd4PLOdu5fgIcvLCc8FdIO2L1oWKkAvyjP1G3Ie7o0ViqeBRT4yIWeDIHthtYoJqaaCMet3PehzWHupLVIvj95N9sZhf61dH61XiCxFxFYtms4SMqRrKLPdFtmFOZx%2B4yDGSnZ1XjBFOT6rXVf6tOXfWcn2wfrDbRKhkp7k0FawkREstrgMdoEt&X-Amz-Signature=3266e8b80e0e6e85dff8af14ad581e5612b464c4c5b771e58ddefe961d1f32c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQYZLGH5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIE%2FmIm41UFANFlqsWHsf6qwDbjTAeIfh%2B5IoMaY7cHAIhAM7jnGzmoicxGmA9dm86598WXURSXlOBITFgpgY1YuVeKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbz2Cgij2rIT8WWh4q3APgfUI0O6dXH2by6XCgqxNecu11UaoOZuQ0cQhEC3wDtWcFOO2Afm3t4RnAGDsyrZzIqIZGFoAda7PD2aBDgvybhGABivsYtuCD%2Fc434qSHqOErwqrogfp5C7yOBOCRBQjT1fGxMGnZcGkvHBUkt%2Fb5N3i3dRRbmn3F%2FIHxUaoaLC5VeaECmAGHEBAbHnzGjLuz2%2FQz2siJwmffVDVj6aX5i5T6yIQX98vI76OT0tE0WlEny6CYcIyR%2FKRNDNthOseVgBTYrbe17%2BkrrLDRyv7eFQptKJW9%2FjeF93Ucg80s%2FQKPraC5SRIzdWMMtGU4c4GOkfQ435xlmKXzO5X%2BPQ46EvIKErb9NkiEWmPQkhKWs%2FHoqc7INdxeyBCA0VxS2bSnHsFgR6xmENpK6Us3rzN4FQHFBmGYsqs4htAMHOumoXkR1YDMY9Y1jvpIKNyhb1TASNuUSCNRV4GYf%2FuGt3wv64qfsCsOC99je%2FI6FyKe6pR9jnt6G4aBshJLV0g77avRlrrzQWQK7ec3NM%2BiI0jTpiuyIer2SRoONJVIwxKqITXQsI2fIFlUDn3J97PgZIRjk%2FwUV%2BA0PsVlV%2BadYrXtKFd%2Fc6QF4UmGtjVJa6WL%2Bbp5rdWPWyx6sv8S9DCSqOLCBjqkAZkj%2Fu97%2B%2FEbeBfp6Cr5rBJ22vdS6%2FPI%2BaAs9gd4PLOdu5fgIcvLCc8FdIO2L1oWKkAvyjP1G3Ie7o0ViqeBRT4yIWeDIHthtYoJqaaCMet3PehzWHupLVIvj95N9sZhf61dH61XiCxFxFYtms4SMqRrKLPdFtmFOZx%2B4yDGSnZ1XjBFOT6rXVf6tOXfWcn2wfrDbRKhkp7k0FawkREstrgMdoEt&X-Amz-Signature=bd76bc2e9fde09227a5434990ab990f52ee2ddbc2991ca1324a149948b7e3d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQYZLGH5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIE%2FmIm41UFANFlqsWHsf6qwDbjTAeIfh%2B5IoMaY7cHAIhAM7jnGzmoicxGmA9dm86598WXURSXlOBITFgpgY1YuVeKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbz2Cgij2rIT8WWh4q3APgfUI0O6dXH2by6XCgqxNecu11UaoOZuQ0cQhEC3wDtWcFOO2Afm3t4RnAGDsyrZzIqIZGFoAda7PD2aBDgvybhGABivsYtuCD%2Fc434qSHqOErwqrogfp5C7yOBOCRBQjT1fGxMGnZcGkvHBUkt%2Fb5N3i3dRRbmn3F%2FIHxUaoaLC5VeaECmAGHEBAbHnzGjLuz2%2FQz2siJwmffVDVj6aX5i5T6yIQX98vI76OT0tE0WlEny6CYcIyR%2FKRNDNthOseVgBTYrbe17%2BkrrLDRyv7eFQptKJW9%2FjeF93Ucg80s%2FQKPraC5SRIzdWMMtGU4c4GOkfQ435xlmKXzO5X%2BPQ46EvIKErb9NkiEWmPQkhKWs%2FHoqc7INdxeyBCA0VxS2bSnHsFgR6xmENpK6Us3rzN4FQHFBmGYsqs4htAMHOumoXkR1YDMY9Y1jvpIKNyhb1TASNuUSCNRV4GYf%2FuGt3wv64qfsCsOC99je%2FI6FyKe6pR9jnt6G4aBshJLV0g77avRlrrzQWQK7ec3NM%2BiI0jTpiuyIer2SRoONJVIwxKqITXQsI2fIFlUDn3J97PgZIRjk%2FwUV%2BA0PsVlV%2BadYrXtKFd%2Fc6QF4UmGtjVJa6WL%2Bbp5rdWPWyx6sv8S9DCSqOLCBjqkAZkj%2Fu97%2B%2FEbeBfp6Cr5rBJ22vdS6%2FPI%2BaAs9gd4PLOdu5fgIcvLCc8FdIO2L1oWKkAvyjP1G3Ie7o0ViqeBRT4yIWeDIHthtYoJqaaCMet3PehzWHupLVIvj95N9sZhf61dH61XiCxFxFYtms4SMqRrKLPdFtmFOZx%2B4yDGSnZ1XjBFOT6rXVf6tOXfWcn2wfrDbRKhkp7k0FawkREstrgMdoEt&X-Amz-Signature=2bceb88429f9b75bb906f1b94298cd7b1def6164de2d57d8ef2c6776922620c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQYZLGH5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIE%2FmIm41UFANFlqsWHsf6qwDbjTAeIfh%2B5IoMaY7cHAIhAM7jnGzmoicxGmA9dm86598WXURSXlOBITFgpgY1YuVeKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbz2Cgij2rIT8WWh4q3APgfUI0O6dXH2by6XCgqxNecu11UaoOZuQ0cQhEC3wDtWcFOO2Afm3t4RnAGDsyrZzIqIZGFoAda7PD2aBDgvybhGABivsYtuCD%2Fc434qSHqOErwqrogfp5C7yOBOCRBQjT1fGxMGnZcGkvHBUkt%2Fb5N3i3dRRbmn3F%2FIHxUaoaLC5VeaECmAGHEBAbHnzGjLuz2%2FQz2siJwmffVDVj6aX5i5T6yIQX98vI76OT0tE0WlEny6CYcIyR%2FKRNDNthOseVgBTYrbe17%2BkrrLDRyv7eFQptKJW9%2FjeF93Ucg80s%2FQKPraC5SRIzdWMMtGU4c4GOkfQ435xlmKXzO5X%2BPQ46EvIKErb9NkiEWmPQkhKWs%2FHoqc7INdxeyBCA0VxS2bSnHsFgR6xmENpK6Us3rzN4FQHFBmGYsqs4htAMHOumoXkR1YDMY9Y1jvpIKNyhb1TASNuUSCNRV4GYf%2FuGt3wv64qfsCsOC99je%2FI6FyKe6pR9jnt6G4aBshJLV0g77avRlrrzQWQK7ec3NM%2BiI0jTpiuyIer2SRoONJVIwxKqITXQsI2fIFlUDn3J97PgZIRjk%2FwUV%2BA0PsVlV%2BadYrXtKFd%2Fc6QF4UmGtjVJa6WL%2Bbp5rdWPWyx6sv8S9DCSqOLCBjqkAZkj%2Fu97%2B%2FEbeBfp6Cr5rBJ22vdS6%2FPI%2BaAs9gd4PLOdu5fgIcvLCc8FdIO2L1oWKkAvyjP1G3Ie7o0ViqeBRT4yIWeDIHthtYoJqaaCMet3PehzWHupLVIvj95N9sZhf61dH61XiCxFxFYtms4SMqRrKLPdFtmFOZx%2B4yDGSnZ1XjBFOT6rXVf6tOXfWcn2wfrDbRKhkp7k0FawkREstrgMdoEt&X-Amz-Signature=1de982d10147ea4e62657931377371e883ddc41a94a5b48fa29c37f13e927a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
