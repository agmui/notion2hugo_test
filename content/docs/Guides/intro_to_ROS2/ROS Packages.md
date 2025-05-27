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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2ZRHLJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMnyk%2BxYjBO3n7aIKTuoAw%2BR7puNEzMb3r2J3FSd6PoAiBVdXE73HwtOWyQQ3dTocdxKJRboZy8Ho4M13bMPkmKsCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCqIbHtP53kXO7cN2KtwDiRB7u4L%2BgiXRpX%2FzY6brpsEs3ZuQtqRGMooQNceWQzPyOTh4gJ2rZcCMikHCr9ayFQraZdO1bv9C4vAQcLdKrIjR56YVXT%2F4LzgSl4SuCUSEISuQgMPfaEnr2qpt7ex33qeSJ0oCb1GcA3AmlZ1PXcvam0W17O1Nnio8YUF63kTrpwqREeyNdZq9dD4DIxEU2qWzSOePoBibW1RFqGkCC%2FsdtXdNwU8n6U4fKxLUN4l3jJhazsacHFreVUIZlv9w%2BMnKzs5%2Bjf00Ctt%2Boat29pEBF7QNszNNhP%2B3lo80oIYaxQMEfPYfwvY4jX89TyHyBQ%2B87czRD4%2BdjL8SsOzMEvQJVoTSd4q3d%2BYXiUHwZyWz9dK5dKmyaq8ALYAkRY0mF96VDlM8RhcuUT338Vqz8seUrHZWaGDpsbRJUuzgJMCCjI8q164mtL1ZpckDXtXmkZHQ%2BSuq%2BZ44L43BO35AkJ10fEtZUWC06z9iN8o8Iu%2FQGUR2BwKpLlqUGM2ZHB6chlXJyqCpp0Ai31KhubRmW%2FDiugpbim6HxVKu3FyQcX7eZugKa1%2FFLlUPy2XCmc0gKZImekHMW%2FZIhUduB0LFg4M5EB1qSnWZ77u6S27%2FpLxQylZk5AlXVoQHueYwuuTXwQY6pgGlOX23iGSJRdFmre3llidmew1nIUlxCnR5eLiL4UpqpbPbsAljeZmojIk4OvCii5P8ViTVSQws2E9UHrLCnF5sTbj%2Fy6B5y9056AWLkCuIGOJ1eF4qj0%2BPlQkX2K3ElImkX3d80CqzzNJNxC3XvQcdQ4KazHueCokjPHRXImD6kVLNi1PPtpwNbxtXz2n2b%2BGCzd5wL9pjfdVLg6%2Br3V0KbBheLJ%2FB&X-Amz-Signature=e02a3be7618d609c5732191342fb2ea4690d84ca5e6baea10d826216d2ce6cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2ZRHLJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMnyk%2BxYjBO3n7aIKTuoAw%2BR7puNEzMb3r2J3FSd6PoAiBVdXE73HwtOWyQQ3dTocdxKJRboZy8Ho4M13bMPkmKsCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCqIbHtP53kXO7cN2KtwDiRB7u4L%2BgiXRpX%2FzY6brpsEs3ZuQtqRGMooQNceWQzPyOTh4gJ2rZcCMikHCr9ayFQraZdO1bv9C4vAQcLdKrIjR56YVXT%2F4LzgSl4SuCUSEISuQgMPfaEnr2qpt7ex33qeSJ0oCb1GcA3AmlZ1PXcvam0W17O1Nnio8YUF63kTrpwqREeyNdZq9dD4DIxEU2qWzSOePoBibW1RFqGkCC%2FsdtXdNwU8n6U4fKxLUN4l3jJhazsacHFreVUIZlv9w%2BMnKzs5%2Bjf00Ctt%2Boat29pEBF7QNszNNhP%2B3lo80oIYaxQMEfPYfwvY4jX89TyHyBQ%2B87czRD4%2BdjL8SsOzMEvQJVoTSd4q3d%2BYXiUHwZyWz9dK5dKmyaq8ALYAkRY0mF96VDlM8RhcuUT338Vqz8seUrHZWaGDpsbRJUuzgJMCCjI8q164mtL1ZpckDXtXmkZHQ%2BSuq%2BZ44L43BO35AkJ10fEtZUWC06z9iN8o8Iu%2FQGUR2BwKpLlqUGM2ZHB6chlXJyqCpp0Ai31KhubRmW%2FDiugpbim6HxVKu3FyQcX7eZugKa1%2FFLlUPy2XCmc0gKZImekHMW%2FZIhUduB0LFg4M5EB1qSnWZ77u6S27%2FpLxQylZk5AlXVoQHueYwuuTXwQY6pgGlOX23iGSJRdFmre3llidmew1nIUlxCnR5eLiL4UpqpbPbsAljeZmojIk4OvCii5P8ViTVSQws2E9UHrLCnF5sTbj%2Fy6B5y9056AWLkCuIGOJ1eF4qj0%2BPlQkX2K3ElImkX3d80CqzzNJNxC3XvQcdQ4KazHueCokjPHRXImD6kVLNi1PPtpwNbxtXz2n2b%2BGCzd5wL9pjfdVLg6%2Br3V0KbBheLJ%2FB&X-Amz-Signature=50882e8a2e7273ef76f751dbe58a12cca885c514fcfee2b638da90f3f75e63db&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2ZRHLJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMnyk%2BxYjBO3n7aIKTuoAw%2BR7puNEzMb3r2J3FSd6PoAiBVdXE73HwtOWyQQ3dTocdxKJRboZy8Ho4M13bMPkmKsCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCqIbHtP53kXO7cN2KtwDiRB7u4L%2BgiXRpX%2FzY6brpsEs3ZuQtqRGMooQNceWQzPyOTh4gJ2rZcCMikHCr9ayFQraZdO1bv9C4vAQcLdKrIjR56YVXT%2F4LzgSl4SuCUSEISuQgMPfaEnr2qpt7ex33qeSJ0oCb1GcA3AmlZ1PXcvam0W17O1Nnio8YUF63kTrpwqREeyNdZq9dD4DIxEU2qWzSOePoBibW1RFqGkCC%2FsdtXdNwU8n6U4fKxLUN4l3jJhazsacHFreVUIZlv9w%2BMnKzs5%2Bjf00Ctt%2Boat29pEBF7QNszNNhP%2B3lo80oIYaxQMEfPYfwvY4jX89TyHyBQ%2B87czRD4%2BdjL8SsOzMEvQJVoTSd4q3d%2BYXiUHwZyWz9dK5dKmyaq8ALYAkRY0mF96VDlM8RhcuUT338Vqz8seUrHZWaGDpsbRJUuzgJMCCjI8q164mtL1ZpckDXtXmkZHQ%2BSuq%2BZ44L43BO35AkJ10fEtZUWC06z9iN8o8Iu%2FQGUR2BwKpLlqUGM2ZHB6chlXJyqCpp0Ai31KhubRmW%2FDiugpbim6HxVKu3FyQcX7eZugKa1%2FFLlUPy2XCmc0gKZImekHMW%2FZIhUduB0LFg4M5EB1qSnWZ77u6S27%2FpLxQylZk5AlXVoQHueYwuuTXwQY6pgGlOX23iGSJRdFmre3llidmew1nIUlxCnR5eLiL4UpqpbPbsAljeZmojIk4OvCii5P8ViTVSQws2E9UHrLCnF5sTbj%2Fy6B5y9056AWLkCuIGOJ1eF4qj0%2BPlQkX2K3ElImkX3d80CqzzNJNxC3XvQcdQ4KazHueCokjPHRXImD6kVLNi1PPtpwNbxtXz2n2b%2BGCzd5wL9pjfdVLg6%2Br3V0KbBheLJ%2FB&X-Amz-Signature=bebcdd7ca5a607db8211d56563e67163a4d3e0d2c8512abd3ee001391ad25336&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2ZRHLJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMnyk%2BxYjBO3n7aIKTuoAw%2BR7puNEzMb3r2J3FSd6PoAiBVdXE73HwtOWyQQ3dTocdxKJRboZy8Ho4M13bMPkmKsCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCqIbHtP53kXO7cN2KtwDiRB7u4L%2BgiXRpX%2FzY6brpsEs3ZuQtqRGMooQNceWQzPyOTh4gJ2rZcCMikHCr9ayFQraZdO1bv9C4vAQcLdKrIjR56YVXT%2F4LzgSl4SuCUSEISuQgMPfaEnr2qpt7ex33qeSJ0oCb1GcA3AmlZ1PXcvam0W17O1Nnio8YUF63kTrpwqREeyNdZq9dD4DIxEU2qWzSOePoBibW1RFqGkCC%2FsdtXdNwU8n6U4fKxLUN4l3jJhazsacHFreVUIZlv9w%2BMnKzs5%2Bjf00Ctt%2Boat29pEBF7QNszNNhP%2B3lo80oIYaxQMEfPYfwvY4jX89TyHyBQ%2B87czRD4%2BdjL8SsOzMEvQJVoTSd4q3d%2BYXiUHwZyWz9dK5dKmyaq8ALYAkRY0mF96VDlM8RhcuUT338Vqz8seUrHZWaGDpsbRJUuzgJMCCjI8q164mtL1ZpckDXtXmkZHQ%2BSuq%2BZ44L43BO35AkJ10fEtZUWC06z9iN8o8Iu%2FQGUR2BwKpLlqUGM2ZHB6chlXJyqCpp0Ai31KhubRmW%2FDiugpbim6HxVKu3FyQcX7eZugKa1%2FFLlUPy2XCmc0gKZImekHMW%2FZIhUduB0LFg4M5EB1qSnWZ77u6S27%2FpLxQylZk5AlXVoQHueYwuuTXwQY6pgGlOX23iGSJRdFmre3llidmew1nIUlxCnR5eLiL4UpqpbPbsAljeZmojIk4OvCii5P8ViTVSQws2E9UHrLCnF5sTbj%2Fy6B5y9056AWLkCuIGOJ1eF4qj0%2BPlQkX2K3ElImkX3d80CqzzNJNxC3XvQcdQ4KazHueCokjPHRXImD6kVLNi1PPtpwNbxtXz2n2b%2BGCzd5wL9pjfdVLg6%2Br3V0KbBheLJ%2FB&X-Amz-Signature=7c873dd22a19a65bf10506df9781e50fe9f33abf074f814ba52e7e9164c092bb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2ZRHLJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMnyk%2BxYjBO3n7aIKTuoAw%2BR7puNEzMb3r2J3FSd6PoAiBVdXE73HwtOWyQQ3dTocdxKJRboZy8Ho4M13bMPkmKsCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCqIbHtP53kXO7cN2KtwDiRB7u4L%2BgiXRpX%2FzY6brpsEs3ZuQtqRGMooQNceWQzPyOTh4gJ2rZcCMikHCr9ayFQraZdO1bv9C4vAQcLdKrIjR56YVXT%2F4LzgSl4SuCUSEISuQgMPfaEnr2qpt7ex33qeSJ0oCb1GcA3AmlZ1PXcvam0W17O1Nnio8YUF63kTrpwqREeyNdZq9dD4DIxEU2qWzSOePoBibW1RFqGkCC%2FsdtXdNwU8n6U4fKxLUN4l3jJhazsacHFreVUIZlv9w%2BMnKzs5%2Bjf00Ctt%2Boat29pEBF7QNszNNhP%2B3lo80oIYaxQMEfPYfwvY4jX89TyHyBQ%2B87czRD4%2BdjL8SsOzMEvQJVoTSd4q3d%2BYXiUHwZyWz9dK5dKmyaq8ALYAkRY0mF96VDlM8RhcuUT338Vqz8seUrHZWaGDpsbRJUuzgJMCCjI8q164mtL1ZpckDXtXmkZHQ%2BSuq%2BZ44L43BO35AkJ10fEtZUWC06z9iN8o8Iu%2FQGUR2BwKpLlqUGM2ZHB6chlXJyqCpp0Ai31KhubRmW%2FDiugpbim6HxVKu3FyQcX7eZugKa1%2FFLlUPy2XCmc0gKZImekHMW%2FZIhUduB0LFg4M5EB1qSnWZ77u6S27%2FpLxQylZk5AlXVoQHueYwuuTXwQY6pgGlOX23iGSJRdFmre3llidmew1nIUlxCnR5eLiL4UpqpbPbsAljeZmojIk4OvCii5P8ViTVSQws2E9UHrLCnF5sTbj%2Fy6B5y9056AWLkCuIGOJ1eF4qj0%2BPlQkX2K3ElImkX3d80CqzzNJNxC3XvQcdQ4KazHueCokjPHRXImD6kVLNi1PPtpwNbxtXz2n2b%2BGCzd5wL9pjfdVLg6%2Br3V0KbBheLJ%2FB&X-Amz-Signature=56172163c8284d8cdf2927f877b1b8d443419edeb59d371abca35fd82738ebfe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2ZRHLJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMnyk%2BxYjBO3n7aIKTuoAw%2BR7puNEzMb3r2J3FSd6PoAiBVdXE73HwtOWyQQ3dTocdxKJRboZy8Ho4M13bMPkmKsCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCqIbHtP53kXO7cN2KtwDiRB7u4L%2BgiXRpX%2FzY6brpsEs3ZuQtqRGMooQNceWQzPyOTh4gJ2rZcCMikHCr9ayFQraZdO1bv9C4vAQcLdKrIjR56YVXT%2F4LzgSl4SuCUSEISuQgMPfaEnr2qpt7ex33qeSJ0oCb1GcA3AmlZ1PXcvam0W17O1Nnio8YUF63kTrpwqREeyNdZq9dD4DIxEU2qWzSOePoBibW1RFqGkCC%2FsdtXdNwU8n6U4fKxLUN4l3jJhazsacHFreVUIZlv9w%2BMnKzs5%2Bjf00Ctt%2Boat29pEBF7QNszNNhP%2B3lo80oIYaxQMEfPYfwvY4jX89TyHyBQ%2B87czRD4%2BdjL8SsOzMEvQJVoTSd4q3d%2BYXiUHwZyWz9dK5dKmyaq8ALYAkRY0mF96VDlM8RhcuUT338Vqz8seUrHZWaGDpsbRJUuzgJMCCjI8q164mtL1ZpckDXtXmkZHQ%2BSuq%2BZ44L43BO35AkJ10fEtZUWC06z9iN8o8Iu%2FQGUR2BwKpLlqUGM2ZHB6chlXJyqCpp0Ai31KhubRmW%2FDiugpbim6HxVKu3FyQcX7eZugKa1%2FFLlUPy2XCmc0gKZImekHMW%2FZIhUduB0LFg4M5EB1qSnWZ77u6S27%2FpLxQylZk5AlXVoQHueYwuuTXwQY6pgGlOX23iGSJRdFmre3llidmew1nIUlxCnR5eLiL4UpqpbPbsAljeZmojIk4OvCii5P8ViTVSQws2E9UHrLCnF5sTbj%2Fy6B5y9056AWLkCuIGOJ1eF4qj0%2BPlQkX2K3ElImkX3d80CqzzNJNxC3XvQcdQ4KazHueCokjPHRXImD6kVLNi1PPtpwNbxtXz2n2b%2BGCzd5wL9pjfdVLg6%2Br3V0KbBheLJ%2FB&X-Amz-Signature=888e1a60e81bd6c7baa948958e3f970caece6636098e780042e9e3e2fc005f93&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2ZRHLJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMnyk%2BxYjBO3n7aIKTuoAw%2BR7puNEzMb3r2J3FSd6PoAiBVdXE73HwtOWyQQ3dTocdxKJRboZy8Ho4M13bMPkmKsCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCqIbHtP53kXO7cN2KtwDiRB7u4L%2BgiXRpX%2FzY6brpsEs3ZuQtqRGMooQNceWQzPyOTh4gJ2rZcCMikHCr9ayFQraZdO1bv9C4vAQcLdKrIjR56YVXT%2F4LzgSl4SuCUSEISuQgMPfaEnr2qpt7ex33qeSJ0oCb1GcA3AmlZ1PXcvam0W17O1Nnio8YUF63kTrpwqREeyNdZq9dD4DIxEU2qWzSOePoBibW1RFqGkCC%2FsdtXdNwU8n6U4fKxLUN4l3jJhazsacHFreVUIZlv9w%2BMnKzs5%2Bjf00Ctt%2Boat29pEBF7QNszNNhP%2B3lo80oIYaxQMEfPYfwvY4jX89TyHyBQ%2B87czRD4%2BdjL8SsOzMEvQJVoTSd4q3d%2BYXiUHwZyWz9dK5dKmyaq8ALYAkRY0mF96VDlM8RhcuUT338Vqz8seUrHZWaGDpsbRJUuzgJMCCjI8q164mtL1ZpckDXtXmkZHQ%2BSuq%2BZ44L43BO35AkJ10fEtZUWC06z9iN8o8Iu%2FQGUR2BwKpLlqUGM2ZHB6chlXJyqCpp0Ai31KhubRmW%2FDiugpbim6HxVKu3FyQcX7eZugKa1%2FFLlUPy2XCmc0gKZImekHMW%2FZIhUduB0LFg4M5EB1qSnWZ77u6S27%2FpLxQylZk5AlXVoQHueYwuuTXwQY6pgGlOX23iGSJRdFmre3llidmew1nIUlxCnR5eLiL4UpqpbPbsAljeZmojIk4OvCii5P8ViTVSQws2E9UHrLCnF5sTbj%2Fy6B5y9056AWLkCuIGOJ1eF4qj0%2BPlQkX2K3ElImkX3d80CqzzNJNxC3XvQcdQ4KazHueCokjPHRXImD6kVLNi1PPtpwNbxtXz2n2b%2BGCzd5wL9pjfdVLg6%2Br3V0KbBheLJ%2FB&X-Amz-Signature=a7086c37fe4f95aed9e91430820cfd0b77ccba1b287854ac448f67261b4c7728&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
