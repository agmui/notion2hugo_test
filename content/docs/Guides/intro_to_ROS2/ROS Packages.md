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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLAQAKK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvM0ThV1hgUE6mmtc1etnLWjACvYfPp7hB%2FqChfnYxlgIhAOXv7Y4H3ev9dwuhUSbGM7R6HVEasWoUB7q%2BI8d5VtLFKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BRmZT%2BwI1x%2B%2Bg0Coq3AMFFG9GFvfGSgnFp6axRtYO8azVO1lpc%2B0SUgvHthYFCs6rjM%2F%2BA6Q4UIT8bR%2BG9vvF2S9j0A2ZnU8HgltdcAYoNoI3mWpgYCn74vjANyhPyFbUalQXqzqi%2BXDbEL%2FOZs%2FbZlW0VyrScJYPIfSVXK99OHBwzxVJCwItVtNj06uZSVQT4ybKqD2FcqbCVgtc9QUJgNG0XiMVYiW2VOSRzptAtfXX0aub4geHPVWe%2Fs90djCCY4WXOw8WPzx23b4nB1r4KKz0nTcB6UZfh88BVne8MOBtJPkPIktnjP96LAMasJDUM2Ketu7i9nxbKa23zl1kg3ockEjiO%2BAoVlS7O%2B3EdVtsVY3UuIMVLhLe12UWsoKFQqjyfIVCZAqTj86JBmXPbdzM48ENCI%2FxqPd%2BAsPA9%2F9nDkYr1rQvAoQmvY9hay79krtLiu6fItIm3HfCe2Ii%2By53Udh1ZkkE0OM4Az3DKZGvOH8RAjBbPwl%2BmpK5P8cKK1UXF%2FPyaly%2BzhDXRvEhfGLjF2oC7uGcC3jUcTywZb2jPxI2EEYAGoUpuLZpaBXPK3dNbBtPNo91ov513xW9X5IjcFHMks%2FEbyWXdGupUunGchXqyX1fkCcU4ggZk7%2FTwVeqrGtrQZmsFDCGlqTCBjqkAdKZUFEtN8LnunXeAEYh%2FzIGPN94Ku1w6QFtZvg1eXcW%2FLDrRRfa%2FUPh22LSELH6qEJiybw%2FctbCanEJ9dKzUbKqYDNEL0IUwXAvsKZSCSkTySrGWp6Rs%2FPZqAqcy4TNPrQuP%2B8r2PN%2BNNzPj5VOfMjDxYCRbfR012t2V2M6ldsqs0Vklu8a%2FzfzGjFaemD3x8Ft1nLWSg2%2B9uymig2DNprfDp7q&X-Amz-Signature=f4acc1165b9b35dbba456a2177d1a7b97dd88aa4909e401f63ca1a040e426578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLAQAKK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvM0ThV1hgUE6mmtc1etnLWjACvYfPp7hB%2FqChfnYxlgIhAOXv7Y4H3ev9dwuhUSbGM7R6HVEasWoUB7q%2BI8d5VtLFKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BRmZT%2BwI1x%2B%2Bg0Coq3AMFFG9GFvfGSgnFp6axRtYO8azVO1lpc%2B0SUgvHthYFCs6rjM%2F%2BA6Q4UIT8bR%2BG9vvF2S9j0A2ZnU8HgltdcAYoNoI3mWpgYCn74vjANyhPyFbUalQXqzqi%2BXDbEL%2FOZs%2FbZlW0VyrScJYPIfSVXK99OHBwzxVJCwItVtNj06uZSVQT4ybKqD2FcqbCVgtc9QUJgNG0XiMVYiW2VOSRzptAtfXX0aub4geHPVWe%2Fs90djCCY4WXOw8WPzx23b4nB1r4KKz0nTcB6UZfh88BVne8MOBtJPkPIktnjP96LAMasJDUM2Ketu7i9nxbKa23zl1kg3ockEjiO%2BAoVlS7O%2B3EdVtsVY3UuIMVLhLe12UWsoKFQqjyfIVCZAqTj86JBmXPbdzM48ENCI%2FxqPd%2BAsPA9%2F9nDkYr1rQvAoQmvY9hay79krtLiu6fItIm3HfCe2Ii%2By53Udh1ZkkE0OM4Az3DKZGvOH8RAjBbPwl%2BmpK5P8cKK1UXF%2FPyaly%2BzhDXRvEhfGLjF2oC7uGcC3jUcTywZb2jPxI2EEYAGoUpuLZpaBXPK3dNbBtPNo91ov513xW9X5IjcFHMks%2FEbyWXdGupUunGchXqyX1fkCcU4ggZk7%2FTwVeqrGtrQZmsFDCGlqTCBjqkAdKZUFEtN8LnunXeAEYh%2FzIGPN94Ku1w6QFtZvg1eXcW%2FLDrRRfa%2FUPh22LSELH6qEJiybw%2FctbCanEJ9dKzUbKqYDNEL0IUwXAvsKZSCSkTySrGWp6Rs%2FPZqAqcy4TNPrQuP%2B8r2PN%2BNNzPj5VOfMjDxYCRbfR012t2V2M6ldsqs0Vklu8a%2FzfzGjFaemD3x8Ft1nLWSg2%2B9uymig2DNprfDp7q&X-Amz-Signature=dd4bb8b49ea64fac9d24e684e5c2140bbd0d67cc8892b6d2641ae41b9d61fff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLAQAKK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvM0ThV1hgUE6mmtc1etnLWjACvYfPp7hB%2FqChfnYxlgIhAOXv7Y4H3ev9dwuhUSbGM7R6HVEasWoUB7q%2BI8d5VtLFKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BRmZT%2BwI1x%2B%2Bg0Coq3AMFFG9GFvfGSgnFp6axRtYO8azVO1lpc%2B0SUgvHthYFCs6rjM%2F%2BA6Q4UIT8bR%2BG9vvF2S9j0A2ZnU8HgltdcAYoNoI3mWpgYCn74vjANyhPyFbUalQXqzqi%2BXDbEL%2FOZs%2FbZlW0VyrScJYPIfSVXK99OHBwzxVJCwItVtNj06uZSVQT4ybKqD2FcqbCVgtc9QUJgNG0XiMVYiW2VOSRzptAtfXX0aub4geHPVWe%2Fs90djCCY4WXOw8WPzx23b4nB1r4KKz0nTcB6UZfh88BVne8MOBtJPkPIktnjP96LAMasJDUM2Ketu7i9nxbKa23zl1kg3ockEjiO%2BAoVlS7O%2B3EdVtsVY3UuIMVLhLe12UWsoKFQqjyfIVCZAqTj86JBmXPbdzM48ENCI%2FxqPd%2BAsPA9%2F9nDkYr1rQvAoQmvY9hay79krtLiu6fItIm3HfCe2Ii%2By53Udh1ZkkE0OM4Az3DKZGvOH8RAjBbPwl%2BmpK5P8cKK1UXF%2FPyaly%2BzhDXRvEhfGLjF2oC7uGcC3jUcTywZb2jPxI2EEYAGoUpuLZpaBXPK3dNbBtPNo91ov513xW9X5IjcFHMks%2FEbyWXdGupUunGchXqyX1fkCcU4ggZk7%2FTwVeqrGtrQZmsFDCGlqTCBjqkAdKZUFEtN8LnunXeAEYh%2FzIGPN94Ku1w6QFtZvg1eXcW%2FLDrRRfa%2FUPh22LSELH6qEJiybw%2FctbCanEJ9dKzUbKqYDNEL0IUwXAvsKZSCSkTySrGWp6Rs%2FPZqAqcy4TNPrQuP%2B8r2PN%2BNNzPj5VOfMjDxYCRbfR012t2V2M6ldsqs0Vklu8a%2FzfzGjFaemD3x8Ft1nLWSg2%2B9uymig2DNprfDp7q&X-Amz-Signature=5edaa7d2e986547d726d0cb7a8c34133617715da2c34eb8869da08c640602bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLAQAKK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvM0ThV1hgUE6mmtc1etnLWjACvYfPp7hB%2FqChfnYxlgIhAOXv7Y4H3ev9dwuhUSbGM7R6HVEasWoUB7q%2BI8d5VtLFKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BRmZT%2BwI1x%2B%2Bg0Coq3AMFFG9GFvfGSgnFp6axRtYO8azVO1lpc%2B0SUgvHthYFCs6rjM%2F%2BA6Q4UIT8bR%2BG9vvF2S9j0A2ZnU8HgltdcAYoNoI3mWpgYCn74vjANyhPyFbUalQXqzqi%2BXDbEL%2FOZs%2FbZlW0VyrScJYPIfSVXK99OHBwzxVJCwItVtNj06uZSVQT4ybKqD2FcqbCVgtc9QUJgNG0XiMVYiW2VOSRzptAtfXX0aub4geHPVWe%2Fs90djCCY4WXOw8WPzx23b4nB1r4KKz0nTcB6UZfh88BVne8MOBtJPkPIktnjP96LAMasJDUM2Ketu7i9nxbKa23zl1kg3ockEjiO%2BAoVlS7O%2B3EdVtsVY3UuIMVLhLe12UWsoKFQqjyfIVCZAqTj86JBmXPbdzM48ENCI%2FxqPd%2BAsPA9%2F9nDkYr1rQvAoQmvY9hay79krtLiu6fItIm3HfCe2Ii%2By53Udh1ZkkE0OM4Az3DKZGvOH8RAjBbPwl%2BmpK5P8cKK1UXF%2FPyaly%2BzhDXRvEhfGLjF2oC7uGcC3jUcTywZb2jPxI2EEYAGoUpuLZpaBXPK3dNbBtPNo91ov513xW9X5IjcFHMks%2FEbyWXdGupUunGchXqyX1fkCcU4ggZk7%2FTwVeqrGtrQZmsFDCGlqTCBjqkAdKZUFEtN8LnunXeAEYh%2FzIGPN94Ku1w6QFtZvg1eXcW%2FLDrRRfa%2FUPh22LSELH6qEJiybw%2FctbCanEJ9dKzUbKqYDNEL0IUwXAvsKZSCSkTySrGWp6Rs%2FPZqAqcy4TNPrQuP%2B8r2PN%2BNNzPj5VOfMjDxYCRbfR012t2V2M6ldsqs0Vklu8a%2FzfzGjFaemD3x8Ft1nLWSg2%2B9uymig2DNprfDp7q&X-Amz-Signature=c450673cac3b631b2dc115464ab0f2d5d6e837f136f5531044768be7d67a5fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLAQAKK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvM0ThV1hgUE6mmtc1etnLWjACvYfPp7hB%2FqChfnYxlgIhAOXv7Y4H3ev9dwuhUSbGM7R6HVEasWoUB7q%2BI8d5VtLFKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BRmZT%2BwI1x%2B%2Bg0Coq3AMFFG9GFvfGSgnFp6axRtYO8azVO1lpc%2B0SUgvHthYFCs6rjM%2F%2BA6Q4UIT8bR%2BG9vvF2S9j0A2ZnU8HgltdcAYoNoI3mWpgYCn74vjANyhPyFbUalQXqzqi%2BXDbEL%2FOZs%2FbZlW0VyrScJYPIfSVXK99OHBwzxVJCwItVtNj06uZSVQT4ybKqD2FcqbCVgtc9QUJgNG0XiMVYiW2VOSRzptAtfXX0aub4geHPVWe%2Fs90djCCY4WXOw8WPzx23b4nB1r4KKz0nTcB6UZfh88BVne8MOBtJPkPIktnjP96LAMasJDUM2Ketu7i9nxbKa23zl1kg3ockEjiO%2BAoVlS7O%2B3EdVtsVY3UuIMVLhLe12UWsoKFQqjyfIVCZAqTj86JBmXPbdzM48ENCI%2FxqPd%2BAsPA9%2F9nDkYr1rQvAoQmvY9hay79krtLiu6fItIm3HfCe2Ii%2By53Udh1ZkkE0OM4Az3DKZGvOH8RAjBbPwl%2BmpK5P8cKK1UXF%2FPyaly%2BzhDXRvEhfGLjF2oC7uGcC3jUcTywZb2jPxI2EEYAGoUpuLZpaBXPK3dNbBtPNo91ov513xW9X5IjcFHMks%2FEbyWXdGupUunGchXqyX1fkCcU4ggZk7%2FTwVeqrGtrQZmsFDCGlqTCBjqkAdKZUFEtN8LnunXeAEYh%2FzIGPN94Ku1w6QFtZvg1eXcW%2FLDrRRfa%2FUPh22LSELH6qEJiybw%2FctbCanEJ9dKzUbKqYDNEL0IUwXAvsKZSCSkTySrGWp6Rs%2FPZqAqcy4TNPrQuP%2B8r2PN%2BNNzPj5VOfMjDxYCRbfR012t2V2M6ldsqs0Vklu8a%2FzfzGjFaemD3x8Ft1nLWSg2%2B9uymig2DNprfDp7q&X-Amz-Signature=4293d2a3f3f6ffdc9dff0721395e1a0dcf7fd0299182a40e26571c714fc4ba72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLAQAKK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvM0ThV1hgUE6mmtc1etnLWjACvYfPp7hB%2FqChfnYxlgIhAOXv7Y4H3ev9dwuhUSbGM7R6HVEasWoUB7q%2BI8d5VtLFKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BRmZT%2BwI1x%2B%2Bg0Coq3AMFFG9GFvfGSgnFp6axRtYO8azVO1lpc%2B0SUgvHthYFCs6rjM%2F%2BA6Q4UIT8bR%2BG9vvF2S9j0A2ZnU8HgltdcAYoNoI3mWpgYCn74vjANyhPyFbUalQXqzqi%2BXDbEL%2FOZs%2FbZlW0VyrScJYPIfSVXK99OHBwzxVJCwItVtNj06uZSVQT4ybKqD2FcqbCVgtc9QUJgNG0XiMVYiW2VOSRzptAtfXX0aub4geHPVWe%2Fs90djCCY4WXOw8WPzx23b4nB1r4KKz0nTcB6UZfh88BVne8MOBtJPkPIktnjP96LAMasJDUM2Ketu7i9nxbKa23zl1kg3ockEjiO%2BAoVlS7O%2B3EdVtsVY3UuIMVLhLe12UWsoKFQqjyfIVCZAqTj86JBmXPbdzM48ENCI%2FxqPd%2BAsPA9%2F9nDkYr1rQvAoQmvY9hay79krtLiu6fItIm3HfCe2Ii%2By53Udh1ZkkE0OM4Az3DKZGvOH8RAjBbPwl%2BmpK5P8cKK1UXF%2FPyaly%2BzhDXRvEhfGLjF2oC7uGcC3jUcTywZb2jPxI2EEYAGoUpuLZpaBXPK3dNbBtPNo91ov513xW9X5IjcFHMks%2FEbyWXdGupUunGchXqyX1fkCcU4ggZk7%2FTwVeqrGtrQZmsFDCGlqTCBjqkAdKZUFEtN8LnunXeAEYh%2FzIGPN94Ku1w6QFtZvg1eXcW%2FLDrRRfa%2FUPh22LSELH6qEJiybw%2FctbCanEJ9dKzUbKqYDNEL0IUwXAvsKZSCSkTySrGWp6Rs%2FPZqAqcy4TNPrQuP%2B8r2PN%2BNNzPj5VOfMjDxYCRbfR012t2V2M6ldsqs0Vklu8a%2FzfzGjFaemD3x8Ft1nLWSg2%2B9uymig2DNprfDp7q&X-Amz-Signature=a087438ef4b540c7ecf69b2ae74ebf576c125ebb8ebc513dbc4a4561ee9372c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLAQAKK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvM0ThV1hgUE6mmtc1etnLWjACvYfPp7hB%2FqChfnYxlgIhAOXv7Y4H3ev9dwuhUSbGM7R6HVEasWoUB7q%2BI8d5VtLFKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BRmZT%2BwI1x%2B%2Bg0Coq3AMFFG9GFvfGSgnFp6axRtYO8azVO1lpc%2B0SUgvHthYFCs6rjM%2F%2BA6Q4UIT8bR%2BG9vvF2S9j0A2ZnU8HgltdcAYoNoI3mWpgYCn74vjANyhPyFbUalQXqzqi%2BXDbEL%2FOZs%2FbZlW0VyrScJYPIfSVXK99OHBwzxVJCwItVtNj06uZSVQT4ybKqD2FcqbCVgtc9QUJgNG0XiMVYiW2VOSRzptAtfXX0aub4geHPVWe%2Fs90djCCY4WXOw8WPzx23b4nB1r4KKz0nTcB6UZfh88BVne8MOBtJPkPIktnjP96LAMasJDUM2Ketu7i9nxbKa23zl1kg3ockEjiO%2BAoVlS7O%2B3EdVtsVY3UuIMVLhLe12UWsoKFQqjyfIVCZAqTj86JBmXPbdzM48ENCI%2FxqPd%2BAsPA9%2F9nDkYr1rQvAoQmvY9hay79krtLiu6fItIm3HfCe2Ii%2By53Udh1ZkkE0OM4Az3DKZGvOH8RAjBbPwl%2BmpK5P8cKK1UXF%2FPyaly%2BzhDXRvEhfGLjF2oC7uGcC3jUcTywZb2jPxI2EEYAGoUpuLZpaBXPK3dNbBtPNo91ov513xW9X5IjcFHMks%2FEbyWXdGupUunGchXqyX1fkCcU4ggZk7%2FTwVeqrGtrQZmsFDCGlqTCBjqkAdKZUFEtN8LnunXeAEYh%2FzIGPN94Ku1w6QFtZvg1eXcW%2FLDrRRfa%2FUPh22LSELH6qEJiybw%2FctbCanEJ9dKzUbKqYDNEL0IUwXAvsKZSCSkTySrGWp6Rs%2FPZqAqcy4TNPrQuP%2B8r2PN%2BNNzPj5VOfMjDxYCRbfR012t2V2M6ldsqs0Vklu8a%2FzfzGjFaemD3x8Ft1nLWSg2%2B9uymig2DNprfDp7q&X-Amz-Signature=e7c63cb7eafc55b864932e8273a1efce23e83028dfb9b7646f81c79ea7a4f533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
