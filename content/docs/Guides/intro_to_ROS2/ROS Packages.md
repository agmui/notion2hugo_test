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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZAP24JX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICqNf%2FtzWlTZNJ7sO3j8cGLeZukd1y13xXvHBWzCSDytAiA4pKhXi8h%2Bdz1L52E0AfLzekkrtkcTfEtJFUgFtLeENiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF0eZoM4jymob24c1KtwDd74zrRKMp%2BTvL%2FUA2Lh7oS8QoSRB7lxRpMBSGyz6xrDXg7pgKuefUIuI1BEkzsyugSUovrI2Xy5g%2FAPZZrgTVqa6ud7cgCpBmCN%2BObkZ51ykDJL7bLyX4MrTYopqkn0fhkcZYzPGzrNeMNR03b3JwcbzYTzYxSFEOhE9DxRlCA23LhLYDzfL1olNLnwZu4xZ1p0I6Tvxku1L7V4x7iMTujM6Dn855c%2F9AePkYixckH7G%2BUon%2FfxtVCcnqzZ9dQdCgaVBrPiVpYgdbbViPmEJa4eKNRGhxIbssfWFdxd9Dr9oWeco%2Ft6r7ftDpB5BrEGxFK3Dp8uN%2BbWZKBOI8NX61xKUn7bYBdQfm1JpfdtAWUSfA42o%2BZD29Ts5%2Fbse2iflWATp4r8tQCujfpk%2BnEhp99WwtSnMAmepo67veRKntxsNpd5itg6F4fTynr%2B%2BwpilqLR5ThLE2Hwvpd1P76IsihO5yPtL3%2BXPYcnkPHgwbGVVHuhNT6u%2FbfGJ%2B0y3PbOwljn4pSuWtb3ciDDO9tevb9fHxShYXFnnvX77Vo4bNEfk77ELPg8sXKfkbkrucBYjB%2FazDbSG0KY0mhVQsTVsYlzc%2BPQo4TV%2BJGItePkiVUTYe1kjO0dvLjIepwAw0sq7vgY6pgFZrL0XFTzRMGrCZLjPftyd7CDTS5v1i4Rre6U9Oksb8gJN16gEyCxhBrLCvNJGp0S9BkuiSoQ63N7hAdPuj9iqQ7KlVeBpRidPyYi65yhhqFGL3r2tDvNBcbaUP%2FnYCJR3IcXsuIvXhedLmQAxCRJetxZx%2F211InyL1pOnulJiISvca%2F7nUC%2FS6bZVhVbEb2yFxCc9Z6tnB2%2FDZF5Idj2yWJ8FRCA9&X-Amz-Signature=84bf108d4dee73abc23212d822ace4ae9d196fbdc9471622bdf767bd385f2d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZAP24JX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICqNf%2FtzWlTZNJ7sO3j8cGLeZukd1y13xXvHBWzCSDytAiA4pKhXi8h%2Bdz1L52E0AfLzekkrtkcTfEtJFUgFtLeENiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF0eZoM4jymob24c1KtwDd74zrRKMp%2BTvL%2FUA2Lh7oS8QoSRB7lxRpMBSGyz6xrDXg7pgKuefUIuI1BEkzsyugSUovrI2Xy5g%2FAPZZrgTVqa6ud7cgCpBmCN%2BObkZ51ykDJL7bLyX4MrTYopqkn0fhkcZYzPGzrNeMNR03b3JwcbzYTzYxSFEOhE9DxRlCA23LhLYDzfL1olNLnwZu4xZ1p0I6Tvxku1L7V4x7iMTujM6Dn855c%2F9AePkYixckH7G%2BUon%2FfxtVCcnqzZ9dQdCgaVBrPiVpYgdbbViPmEJa4eKNRGhxIbssfWFdxd9Dr9oWeco%2Ft6r7ftDpB5BrEGxFK3Dp8uN%2BbWZKBOI8NX61xKUn7bYBdQfm1JpfdtAWUSfA42o%2BZD29Ts5%2Fbse2iflWATp4r8tQCujfpk%2BnEhp99WwtSnMAmepo67veRKntxsNpd5itg6F4fTynr%2B%2BwpilqLR5ThLE2Hwvpd1P76IsihO5yPtL3%2BXPYcnkPHgwbGVVHuhNT6u%2FbfGJ%2B0y3PbOwljn4pSuWtb3ciDDO9tevb9fHxShYXFnnvX77Vo4bNEfk77ELPg8sXKfkbkrucBYjB%2FazDbSG0KY0mhVQsTVsYlzc%2BPQo4TV%2BJGItePkiVUTYe1kjO0dvLjIepwAw0sq7vgY6pgFZrL0XFTzRMGrCZLjPftyd7CDTS5v1i4Rre6U9Oksb8gJN16gEyCxhBrLCvNJGp0S9BkuiSoQ63N7hAdPuj9iqQ7KlVeBpRidPyYi65yhhqFGL3r2tDvNBcbaUP%2FnYCJR3IcXsuIvXhedLmQAxCRJetxZx%2F211InyL1pOnulJiISvca%2F7nUC%2FS6bZVhVbEb2yFxCc9Z6tnB2%2FDZF5Idj2yWJ8FRCA9&X-Amz-Signature=9fa7958f12d80ab05f2426741c0739a312951a73794daea013813864981295e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZAP24JX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICqNf%2FtzWlTZNJ7sO3j8cGLeZukd1y13xXvHBWzCSDytAiA4pKhXi8h%2Bdz1L52E0AfLzekkrtkcTfEtJFUgFtLeENiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF0eZoM4jymob24c1KtwDd74zrRKMp%2BTvL%2FUA2Lh7oS8QoSRB7lxRpMBSGyz6xrDXg7pgKuefUIuI1BEkzsyugSUovrI2Xy5g%2FAPZZrgTVqa6ud7cgCpBmCN%2BObkZ51ykDJL7bLyX4MrTYopqkn0fhkcZYzPGzrNeMNR03b3JwcbzYTzYxSFEOhE9DxRlCA23LhLYDzfL1olNLnwZu4xZ1p0I6Tvxku1L7V4x7iMTujM6Dn855c%2F9AePkYixckH7G%2BUon%2FfxtVCcnqzZ9dQdCgaVBrPiVpYgdbbViPmEJa4eKNRGhxIbssfWFdxd9Dr9oWeco%2Ft6r7ftDpB5BrEGxFK3Dp8uN%2BbWZKBOI8NX61xKUn7bYBdQfm1JpfdtAWUSfA42o%2BZD29Ts5%2Fbse2iflWATp4r8tQCujfpk%2BnEhp99WwtSnMAmepo67veRKntxsNpd5itg6F4fTynr%2B%2BwpilqLR5ThLE2Hwvpd1P76IsihO5yPtL3%2BXPYcnkPHgwbGVVHuhNT6u%2FbfGJ%2B0y3PbOwljn4pSuWtb3ciDDO9tevb9fHxShYXFnnvX77Vo4bNEfk77ELPg8sXKfkbkrucBYjB%2FazDbSG0KY0mhVQsTVsYlzc%2BPQo4TV%2BJGItePkiVUTYe1kjO0dvLjIepwAw0sq7vgY6pgFZrL0XFTzRMGrCZLjPftyd7CDTS5v1i4Rre6U9Oksb8gJN16gEyCxhBrLCvNJGp0S9BkuiSoQ63N7hAdPuj9iqQ7KlVeBpRidPyYi65yhhqFGL3r2tDvNBcbaUP%2FnYCJR3IcXsuIvXhedLmQAxCRJetxZx%2F211InyL1pOnulJiISvca%2F7nUC%2FS6bZVhVbEb2yFxCc9Z6tnB2%2FDZF5Idj2yWJ8FRCA9&X-Amz-Signature=47a81ef7dd9b1b5f1c81080e3a9e44db7febac10969ee51dbb3af3ed7adef741&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZAP24JX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICqNf%2FtzWlTZNJ7sO3j8cGLeZukd1y13xXvHBWzCSDytAiA4pKhXi8h%2Bdz1L52E0AfLzekkrtkcTfEtJFUgFtLeENiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF0eZoM4jymob24c1KtwDd74zrRKMp%2BTvL%2FUA2Lh7oS8QoSRB7lxRpMBSGyz6xrDXg7pgKuefUIuI1BEkzsyugSUovrI2Xy5g%2FAPZZrgTVqa6ud7cgCpBmCN%2BObkZ51ykDJL7bLyX4MrTYopqkn0fhkcZYzPGzrNeMNR03b3JwcbzYTzYxSFEOhE9DxRlCA23LhLYDzfL1olNLnwZu4xZ1p0I6Tvxku1L7V4x7iMTujM6Dn855c%2F9AePkYixckH7G%2BUon%2FfxtVCcnqzZ9dQdCgaVBrPiVpYgdbbViPmEJa4eKNRGhxIbssfWFdxd9Dr9oWeco%2Ft6r7ftDpB5BrEGxFK3Dp8uN%2BbWZKBOI8NX61xKUn7bYBdQfm1JpfdtAWUSfA42o%2BZD29Ts5%2Fbse2iflWATp4r8tQCujfpk%2BnEhp99WwtSnMAmepo67veRKntxsNpd5itg6F4fTynr%2B%2BwpilqLR5ThLE2Hwvpd1P76IsihO5yPtL3%2BXPYcnkPHgwbGVVHuhNT6u%2FbfGJ%2B0y3PbOwljn4pSuWtb3ciDDO9tevb9fHxShYXFnnvX77Vo4bNEfk77ELPg8sXKfkbkrucBYjB%2FazDbSG0KY0mhVQsTVsYlzc%2BPQo4TV%2BJGItePkiVUTYe1kjO0dvLjIepwAw0sq7vgY6pgFZrL0XFTzRMGrCZLjPftyd7CDTS5v1i4Rre6U9Oksb8gJN16gEyCxhBrLCvNJGp0S9BkuiSoQ63N7hAdPuj9iqQ7KlVeBpRidPyYi65yhhqFGL3r2tDvNBcbaUP%2FnYCJR3IcXsuIvXhedLmQAxCRJetxZx%2F211InyL1pOnulJiISvca%2F7nUC%2FS6bZVhVbEb2yFxCc9Z6tnB2%2FDZF5Idj2yWJ8FRCA9&X-Amz-Signature=6d11fc611d8dd31566e8409b7b9ffdae8273571e7c7ebca68530a4f7e837460e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZAP24JX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICqNf%2FtzWlTZNJ7sO3j8cGLeZukd1y13xXvHBWzCSDytAiA4pKhXi8h%2Bdz1L52E0AfLzekkrtkcTfEtJFUgFtLeENiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF0eZoM4jymob24c1KtwDd74zrRKMp%2BTvL%2FUA2Lh7oS8QoSRB7lxRpMBSGyz6xrDXg7pgKuefUIuI1BEkzsyugSUovrI2Xy5g%2FAPZZrgTVqa6ud7cgCpBmCN%2BObkZ51ykDJL7bLyX4MrTYopqkn0fhkcZYzPGzrNeMNR03b3JwcbzYTzYxSFEOhE9DxRlCA23LhLYDzfL1olNLnwZu4xZ1p0I6Tvxku1L7V4x7iMTujM6Dn855c%2F9AePkYixckH7G%2BUon%2FfxtVCcnqzZ9dQdCgaVBrPiVpYgdbbViPmEJa4eKNRGhxIbssfWFdxd9Dr9oWeco%2Ft6r7ftDpB5BrEGxFK3Dp8uN%2BbWZKBOI8NX61xKUn7bYBdQfm1JpfdtAWUSfA42o%2BZD29Ts5%2Fbse2iflWATp4r8tQCujfpk%2BnEhp99WwtSnMAmepo67veRKntxsNpd5itg6F4fTynr%2B%2BwpilqLR5ThLE2Hwvpd1P76IsihO5yPtL3%2BXPYcnkPHgwbGVVHuhNT6u%2FbfGJ%2B0y3PbOwljn4pSuWtb3ciDDO9tevb9fHxShYXFnnvX77Vo4bNEfk77ELPg8sXKfkbkrucBYjB%2FazDbSG0KY0mhVQsTVsYlzc%2BPQo4TV%2BJGItePkiVUTYe1kjO0dvLjIepwAw0sq7vgY6pgFZrL0XFTzRMGrCZLjPftyd7CDTS5v1i4Rre6U9Oksb8gJN16gEyCxhBrLCvNJGp0S9BkuiSoQ63N7hAdPuj9iqQ7KlVeBpRidPyYi65yhhqFGL3r2tDvNBcbaUP%2FnYCJR3IcXsuIvXhedLmQAxCRJetxZx%2F211InyL1pOnulJiISvca%2F7nUC%2FS6bZVhVbEb2yFxCc9Z6tnB2%2FDZF5Idj2yWJ8FRCA9&X-Amz-Signature=f5eee49ddb7b95f7043a7c338e2bba17f8e4885b3390a11704398b30e413c953&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZAP24JX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICqNf%2FtzWlTZNJ7sO3j8cGLeZukd1y13xXvHBWzCSDytAiA4pKhXi8h%2Bdz1L52E0AfLzekkrtkcTfEtJFUgFtLeENiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF0eZoM4jymob24c1KtwDd74zrRKMp%2BTvL%2FUA2Lh7oS8QoSRB7lxRpMBSGyz6xrDXg7pgKuefUIuI1BEkzsyugSUovrI2Xy5g%2FAPZZrgTVqa6ud7cgCpBmCN%2BObkZ51ykDJL7bLyX4MrTYopqkn0fhkcZYzPGzrNeMNR03b3JwcbzYTzYxSFEOhE9DxRlCA23LhLYDzfL1olNLnwZu4xZ1p0I6Tvxku1L7V4x7iMTujM6Dn855c%2F9AePkYixckH7G%2BUon%2FfxtVCcnqzZ9dQdCgaVBrPiVpYgdbbViPmEJa4eKNRGhxIbssfWFdxd9Dr9oWeco%2Ft6r7ftDpB5BrEGxFK3Dp8uN%2BbWZKBOI8NX61xKUn7bYBdQfm1JpfdtAWUSfA42o%2BZD29Ts5%2Fbse2iflWATp4r8tQCujfpk%2BnEhp99WwtSnMAmepo67veRKntxsNpd5itg6F4fTynr%2B%2BwpilqLR5ThLE2Hwvpd1P76IsihO5yPtL3%2BXPYcnkPHgwbGVVHuhNT6u%2FbfGJ%2B0y3PbOwljn4pSuWtb3ciDDO9tevb9fHxShYXFnnvX77Vo4bNEfk77ELPg8sXKfkbkrucBYjB%2FazDbSG0KY0mhVQsTVsYlzc%2BPQo4TV%2BJGItePkiVUTYe1kjO0dvLjIepwAw0sq7vgY6pgFZrL0XFTzRMGrCZLjPftyd7CDTS5v1i4Rre6U9Oksb8gJN16gEyCxhBrLCvNJGp0S9BkuiSoQ63N7hAdPuj9iqQ7KlVeBpRidPyYi65yhhqFGL3r2tDvNBcbaUP%2FnYCJR3IcXsuIvXhedLmQAxCRJetxZx%2F211InyL1pOnulJiISvca%2F7nUC%2FS6bZVhVbEb2yFxCc9Z6tnB2%2FDZF5Idj2yWJ8FRCA9&X-Amz-Signature=2ab168d05cda28385e3bb0cb311099c119a467c8546d15fc29e2ef4fc418372d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZAP24JX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICqNf%2FtzWlTZNJ7sO3j8cGLeZukd1y13xXvHBWzCSDytAiA4pKhXi8h%2Bdz1L52E0AfLzekkrtkcTfEtJFUgFtLeENiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF0eZoM4jymob24c1KtwDd74zrRKMp%2BTvL%2FUA2Lh7oS8QoSRB7lxRpMBSGyz6xrDXg7pgKuefUIuI1BEkzsyugSUovrI2Xy5g%2FAPZZrgTVqa6ud7cgCpBmCN%2BObkZ51ykDJL7bLyX4MrTYopqkn0fhkcZYzPGzrNeMNR03b3JwcbzYTzYxSFEOhE9DxRlCA23LhLYDzfL1olNLnwZu4xZ1p0I6Tvxku1L7V4x7iMTujM6Dn855c%2F9AePkYixckH7G%2BUon%2FfxtVCcnqzZ9dQdCgaVBrPiVpYgdbbViPmEJa4eKNRGhxIbssfWFdxd9Dr9oWeco%2Ft6r7ftDpB5BrEGxFK3Dp8uN%2BbWZKBOI8NX61xKUn7bYBdQfm1JpfdtAWUSfA42o%2BZD29Ts5%2Fbse2iflWATp4r8tQCujfpk%2BnEhp99WwtSnMAmepo67veRKntxsNpd5itg6F4fTynr%2B%2BwpilqLR5ThLE2Hwvpd1P76IsihO5yPtL3%2BXPYcnkPHgwbGVVHuhNT6u%2FbfGJ%2B0y3PbOwljn4pSuWtb3ciDDO9tevb9fHxShYXFnnvX77Vo4bNEfk77ELPg8sXKfkbkrucBYjB%2FazDbSG0KY0mhVQsTVsYlzc%2BPQo4TV%2BJGItePkiVUTYe1kjO0dvLjIepwAw0sq7vgY6pgFZrL0XFTzRMGrCZLjPftyd7CDTS5v1i4Rre6U9Oksb8gJN16gEyCxhBrLCvNJGp0S9BkuiSoQ63N7hAdPuj9iqQ7KlVeBpRidPyYi65yhhqFGL3r2tDvNBcbaUP%2FnYCJR3IcXsuIvXhedLmQAxCRJetxZx%2F211InyL1pOnulJiISvca%2F7nUC%2FS6bZVhVbEb2yFxCc9Z6tnB2%2FDZF5Idj2yWJ8FRCA9&X-Amz-Signature=9e06e524c784cf9f4e32a70a9ace1b95f0f6dcc17b6702eda58cb69442d26365&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
