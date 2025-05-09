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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZT6MUQG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPxfsmKSM16CBm60uGBcmFGKmjYTJNHpitvrgUFJ%2FYXAiAfDtDNOOg8UmYqTyKHl3R%2BnmBe8PfrOrM%2FzBbn8uFoRSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2F1%2BzV4DsDVzv1NcKtwD3SZCiaU7Z78j3I%2BLQNTT6Z6J8jgJCshbyO3NQSqu%2B7gVK%2FGEN0wVhWQuJFgWQbSaS22cU4%2BkDb6dOsJMGAGZl0R9JfZrslE2Rm8mV7%2F%2BosIV8Sl%2Fb2smVh96wXOi8GHeXKYEABF0IT%2FC%2Fs1S%2BaYlczFoUN1XjRfkP9yaPebFUONvBVZBYC0Iad2LzczVDThTgtNfYPdy4EJiWUmySP3Z%2B3Ay8EbWgLO%2BIUo2LaOpRBBKyxPvtCKircN8Qkt3YMs5AA2%2BIU4hbGAqVBXF%2BmUqveX0Ri7C9tQRh6oiel0piaR1NkHPaNzeV0qLu0Bj%2F0A%2BSf%2Ff%2B6wo6tbbl153UVFcsXymfA1tV0LBsg4qomKprutsFvng0pmFphEqDrf2F7SrFTib80TvKJAyuTeQXgZxgaMiEI6HZ1dpYXil9vXpSukw31TAqyDWLDYsyk4ESJD9P8%2FoCe6jLlbr3WPsxpDAUKNHGUd9NWrd5AO7hEZF8q6JKMo5Mjl684rbf8dA6ruTA%2F4laYVPrbgImshIMWkufsgC%2F5L3gmLcCJUsGHbgj4NYTkw86kkDfyetvsFFZVifFje8YWIF46MV%2FaLJ1VIOLYbv%2Fqgc9dHl5utHjytNbISG24GclBl3gHhQCjsw2NX3wAY6pgFSe4s2qeQYsYAKTXk2aEwNkEv7LSjo5IU4O4ZleChaz3Mke5oq3FThOIPHZliESW67VC%2FBfqEq48%2BlAECVvcDLswODCeBUDf%2FHLbTRobUe%2F9Pfg%2BDJ%2Bj42LbYIluVsUfIY%2BVQj8hLEAEJArwv%2B7YiyrNRW9Yp7c0zPmofZ2ZoN2ZmnBR0zrQE54KF97mW%2B97G30QwqqWKeAg0zHuUUTJTHBx8Tuv%2Fn&X-Amz-Signature=205737700ab04d4a5c57bebc1b42c8de9b9c8678349aa98c8b96de7a0ba20e79&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZT6MUQG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPxfsmKSM16CBm60uGBcmFGKmjYTJNHpitvrgUFJ%2FYXAiAfDtDNOOg8UmYqTyKHl3R%2BnmBe8PfrOrM%2FzBbn8uFoRSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2F1%2BzV4DsDVzv1NcKtwD3SZCiaU7Z78j3I%2BLQNTT6Z6J8jgJCshbyO3NQSqu%2B7gVK%2FGEN0wVhWQuJFgWQbSaS22cU4%2BkDb6dOsJMGAGZl0R9JfZrslE2Rm8mV7%2F%2BosIV8Sl%2Fb2smVh96wXOi8GHeXKYEABF0IT%2FC%2Fs1S%2BaYlczFoUN1XjRfkP9yaPebFUONvBVZBYC0Iad2LzczVDThTgtNfYPdy4EJiWUmySP3Z%2B3Ay8EbWgLO%2BIUo2LaOpRBBKyxPvtCKircN8Qkt3YMs5AA2%2BIU4hbGAqVBXF%2BmUqveX0Ri7C9tQRh6oiel0piaR1NkHPaNzeV0qLu0Bj%2F0A%2BSf%2Ff%2B6wo6tbbl153UVFcsXymfA1tV0LBsg4qomKprutsFvng0pmFphEqDrf2F7SrFTib80TvKJAyuTeQXgZxgaMiEI6HZ1dpYXil9vXpSukw31TAqyDWLDYsyk4ESJD9P8%2FoCe6jLlbr3WPsxpDAUKNHGUd9NWrd5AO7hEZF8q6JKMo5Mjl684rbf8dA6ruTA%2F4laYVPrbgImshIMWkufsgC%2F5L3gmLcCJUsGHbgj4NYTkw86kkDfyetvsFFZVifFje8YWIF46MV%2FaLJ1VIOLYbv%2Fqgc9dHl5utHjytNbISG24GclBl3gHhQCjsw2NX3wAY6pgFSe4s2qeQYsYAKTXk2aEwNkEv7LSjo5IU4O4ZleChaz3Mke5oq3FThOIPHZliESW67VC%2FBfqEq48%2BlAECVvcDLswODCeBUDf%2FHLbTRobUe%2F9Pfg%2BDJ%2Bj42LbYIluVsUfIY%2BVQj8hLEAEJArwv%2B7YiyrNRW9Yp7c0zPmofZ2ZoN2ZmnBR0zrQE54KF97mW%2B97G30QwqqWKeAg0zHuUUTJTHBx8Tuv%2Fn&X-Amz-Signature=bb9186491719b574c6eed6607a128c1345ba6f51481c6974d49e3bd5d5d34503&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZT6MUQG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPxfsmKSM16CBm60uGBcmFGKmjYTJNHpitvrgUFJ%2FYXAiAfDtDNOOg8UmYqTyKHl3R%2BnmBe8PfrOrM%2FzBbn8uFoRSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2F1%2BzV4DsDVzv1NcKtwD3SZCiaU7Z78j3I%2BLQNTT6Z6J8jgJCshbyO3NQSqu%2B7gVK%2FGEN0wVhWQuJFgWQbSaS22cU4%2BkDb6dOsJMGAGZl0R9JfZrslE2Rm8mV7%2F%2BosIV8Sl%2Fb2smVh96wXOi8GHeXKYEABF0IT%2FC%2Fs1S%2BaYlczFoUN1XjRfkP9yaPebFUONvBVZBYC0Iad2LzczVDThTgtNfYPdy4EJiWUmySP3Z%2B3Ay8EbWgLO%2BIUo2LaOpRBBKyxPvtCKircN8Qkt3YMs5AA2%2BIU4hbGAqVBXF%2BmUqveX0Ri7C9tQRh6oiel0piaR1NkHPaNzeV0qLu0Bj%2F0A%2BSf%2Ff%2B6wo6tbbl153UVFcsXymfA1tV0LBsg4qomKprutsFvng0pmFphEqDrf2F7SrFTib80TvKJAyuTeQXgZxgaMiEI6HZ1dpYXil9vXpSukw31TAqyDWLDYsyk4ESJD9P8%2FoCe6jLlbr3WPsxpDAUKNHGUd9NWrd5AO7hEZF8q6JKMo5Mjl684rbf8dA6ruTA%2F4laYVPrbgImshIMWkufsgC%2F5L3gmLcCJUsGHbgj4NYTkw86kkDfyetvsFFZVifFje8YWIF46MV%2FaLJ1VIOLYbv%2Fqgc9dHl5utHjytNbISG24GclBl3gHhQCjsw2NX3wAY6pgFSe4s2qeQYsYAKTXk2aEwNkEv7LSjo5IU4O4ZleChaz3Mke5oq3FThOIPHZliESW67VC%2FBfqEq48%2BlAECVvcDLswODCeBUDf%2FHLbTRobUe%2F9Pfg%2BDJ%2Bj42LbYIluVsUfIY%2BVQj8hLEAEJArwv%2B7YiyrNRW9Yp7c0zPmofZ2ZoN2ZmnBR0zrQE54KF97mW%2B97G30QwqqWKeAg0zHuUUTJTHBx8Tuv%2Fn&X-Amz-Signature=50e8a15b89f99ef59faa2a863f73bdf83f005a74886606079409aecd1f198bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZT6MUQG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPxfsmKSM16CBm60uGBcmFGKmjYTJNHpitvrgUFJ%2FYXAiAfDtDNOOg8UmYqTyKHl3R%2BnmBe8PfrOrM%2FzBbn8uFoRSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2F1%2BzV4DsDVzv1NcKtwD3SZCiaU7Z78j3I%2BLQNTT6Z6J8jgJCshbyO3NQSqu%2B7gVK%2FGEN0wVhWQuJFgWQbSaS22cU4%2BkDb6dOsJMGAGZl0R9JfZrslE2Rm8mV7%2F%2BosIV8Sl%2Fb2smVh96wXOi8GHeXKYEABF0IT%2FC%2Fs1S%2BaYlczFoUN1XjRfkP9yaPebFUONvBVZBYC0Iad2LzczVDThTgtNfYPdy4EJiWUmySP3Z%2B3Ay8EbWgLO%2BIUo2LaOpRBBKyxPvtCKircN8Qkt3YMs5AA2%2BIU4hbGAqVBXF%2BmUqveX0Ri7C9tQRh6oiel0piaR1NkHPaNzeV0qLu0Bj%2F0A%2BSf%2Ff%2B6wo6tbbl153UVFcsXymfA1tV0LBsg4qomKprutsFvng0pmFphEqDrf2F7SrFTib80TvKJAyuTeQXgZxgaMiEI6HZ1dpYXil9vXpSukw31TAqyDWLDYsyk4ESJD9P8%2FoCe6jLlbr3WPsxpDAUKNHGUd9NWrd5AO7hEZF8q6JKMo5Mjl684rbf8dA6ruTA%2F4laYVPrbgImshIMWkufsgC%2F5L3gmLcCJUsGHbgj4NYTkw86kkDfyetvsFFZVifFje8YWIF46MV%2FaLJ1VIOLYbv%2Fqgc9dHl5utHjytNbISG24GclBl3gHhQCjsw2NX3wAY6pgFSe4s2qeQYsYAKTXk2aEwNkEv7LSjo5IU4O4ZleChaz3Mke5oq3FThOIPHZliESW67VC%2FBfqEq48%2BlAECVvcDLswODCeBUDf%2FHLbTRobUe%2F9Pfg%2BDJ%2Bj42LbYIluVsUfIY%2BVQj8hLEAEJArwv%2B7YiyrNRW9Yp7c0zPmofZ2ZoN2ZmnBR0zrQE54KF97mW%2B97G30QwqqWKeAg0zHuUUTJTHBx8Tuv%2Fn&X-Amz-Signature=a6427ad002d9b6dfa4a8b71122d92e8a0c2ddef6657b2bea5c37f2abc14e8d72&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZT6MUQG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPxfsmKSM16CBm60uGBcmFGKmjYTJNHpitvrgUFJ%2FYXAiAfDtDNOOg8UmYqTyKHl3R%2BnmBe8PfrOrM%2FzBbn8uFoRSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2F1%2BzV4DsDVzv1NcKtwD3SZCiaU7Z78j3I%2BLQNTT6Z6J8jgJCshbyO3NQSqu%2B7gVK%2FGEN0wVhWQuJFgWQbSaS22cU4%2BkDb6dOsJMGAGZl0R9JfZrslE2Rm8mV7%2F%2BosIV8Sl%2Fb2smVh96wXOi8GHeXKYEABF0IT%2FC%2Fs1S%2BaYlczFoUN1XjRfkP9yaPebFUONvBVZBYC0Iad2LzczVDThTgtNfYPdy4EJiWUmySP3Z%2B3Ay8EbWgLO%2BIUo2LaOpRBBKyxPvtCKircN8Qkt3YMs5AA2%2BIU4hbGAqVBXF%2BmUqveX0Ri7C9tQRh6oiel0piaR1NkHPaNzeV0qLu0Bj%2F0A%2BSf%2Ff%2B6wo6tbbl153UVFcsXymfA1tV0LBsg4qomKprutsFvng0pmFphEqDrf2F7SrFTib80TvKJAyuTeQXgZxgaMiEI6HZ1dpYXil9vXpSukw31TAqyDWLDYsyk4ESJD9P8%2FoCe6jLlbr3WPsxpDAUKNHGUd9NWrd5AO7hEZF8q6JKMo5Mjl684rbf8dA6ruTA%2F4laYVPrbgImshIMWkufsgC%2F5L3gmLcCJUsGHbgj4NYTkw86kkDfyetvsFFZVifFje8YWIF46MV%2FaLJ1VIOLYbv%2Fqgc9dHl5utHjytNbISG24GclBl3gHhQCjsw2NX3wAY6pgFSe4s2qeQYsYAKTXk2aEwNkEv7LSjo5IU4O4ZleChaz3Mke5oq3FThOIPHZliESW67VC%2FBfqEq48%2BlAECVvcDLswODCeBUDf%2FHLbTRobUe%2F9Pfg%2BDJ%2Bj42LbYIluVsUfIY%2BVQj8hLEAEJArwv%2B7YiyrNRW9Yp7c0zPmofZ2ZoN2ZmnBR0zrQE54KF97mW%2B97G30QwqqWKeAg0zHuUUTJTHBx8Tuv%2Fn&X-Amz-Signature=6823dd9b8ace2d9638dcf4c6ca59ce92c1727ddd2d7b68adf8b86035f069cb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZT6MUQG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPxfsmKSM16CBm60uGBcmFGKmjYTJNHpitvrgUFJ%2FYXAiAfDtDNOOg8UmYqTyKHl3R%2BnmBe8PfrOrM%2FzBbn8uFoRSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2F1%2BzV4DsDVzv1NcKtwD3SZCiaU7Z78j3I%2BLQNTT6Z6J8jgJCshbyO3NQSqu%2B7gVK%2FGEN0wVhWQuJFgWQbSaS22cU4%2BkDb6dOsJMGAGZl0R9JfZrslE2Rm8mV7%2F%2BosIV8Sl%2Fb2smVh96wXOi8GHeXKYEABF0IT%2FC%2Fs1S%2BaYlczFoUN1XjRfkP9yaPebFUONvBVZBYC0Iad2LzczVDThTgtNfYPdy4EJiWUmySP3Z%2B3Ay8EbWgLO%2BIUo2LaOpRBBKyxPvtCKircN8Qkt3YMs5AA2%2BIU4hbGAqVBXF%2BmUqveX0Ri7C9tQRh6oiel0piaR1NkHPaNzeV0qLu0Bj%2F0A%2BSf%2Ff%2B6wo6tbbl153UVFcsXymfA1tV0LBsg4qomKprutsFvng0pmFphEqDrf2F7SrFTib80TvKJAyuTeQXgZxgaMiEI6HZ1dpYXil9vXpSukw31TAqyDWLDYsyk4ESJD9P8%2FoCe6jLlbr3WPsxpDAUKNHGUd9NWrd5AO7hEZF8q6JKMo5Mjl684rbf8dA6ruTA%2F4laYVPrbgImshIMWkufsgC%2F5L3gmLcCJUsGHbgj4NYTkw86kkDfyetvsFFZVifFje8YWIF46MV%2FaLJ1VIOLYbv%2Fqgc9dHl5utHjytNbISG24GclBl3gHhQCjsw2NX3wAY6pgFSe4s2qeQYsYAKTXk2aEwNkEv7LSjo5IU4O4ZleChaz3Mke5oq3FThOIPHZliESW67VC%2FBfqEq48%2BlAECVvcDLswODCeBUDf%2FHLbTRobUe%2F9Pfg%2BDJ%2Bj42LbYIluVsUfIY%2BVQj8hLEAEJArwv%2B7YiyrNRW9Yp7c0zPmofZ2ZoN2ZmnBR0zrQE54KF97mW%2B97G30QwqqWKeAg0zHuUUTJTHBx8Tuv%2Fn&X-Amz-Signature=5932e34eb203dcca87442c7261cd42728aa61eccb2be33ec94c1133cf95e6564&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZT6MUQG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPxfsmKSM16CBm60uGBcmFGKmjYTJNHpitvrgUFJ%2FYXAiAfDtDNOOg8UmYqTyKHl3R%2BnmBe8PfrOrM%2FzBbn8uFoRSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2F1%2BzV4DsDVzv1NcKtwD3SZCiaU7Z78j3I%2BLQNTT6Z6J8jgJCshbyO3NQSqu%2B7gVK%2FGEN0wVhWQuJFgWQbSaS22cU4%2BkDb6dOsJMGAGZl0R9JfZrslE2Rm8mV7%2F%2BosIV8Sl%2Fb2smVh96wXOi8GHeXKYEABF0IT%2FC%2Fs1S%2BaYlczFoUN1XjRfkP9yaPebFUONvBVZBYC0Iad2LzczVDThTgtNfYPdy4EJiWUmySP3Z%2B3Ay8EbWgLO%2BIUo2LaOpRBBKyxPvtCKircN8Qkt3YMs5AA2%2BIU4hbGAqVBXF%2BmUqveX0Ri7C9tQRh6oiel0piaR1NkHPaNzeV0qLu0Bj%2F0A%2BSf%2Ff%2B6wo6tbbl153UVFcsXymfA1tV0LBsg4qomKprutsFvng0pmFphEqDrf2F7SrFTib80TvKJAyuTeQXgZxgaMiEI6HZ1dpYXil9vXpSukw31TAqyDWLDYsyk4ESJD9P8%2FoCe6jLlbr3WPsxpDAUKNHGUd9NWrd5AO7hEZF8q6JKMo5Mjl684rbf8dA6ruTA%2F4laYVPrbgImshIMWkufsgC%2F5L3gmLcCJUsGHbgj4NYTkw86kkDfyetvsFFZVifFje8YWIF46MV%2FaLJ1VIOLYbv%2Fqgc9dHl5utHjytNbISG24GclBl3gHhQCjsw2NX3wAY6pgFSe4s2qeQYsYAKTXk2aEwNkEv7LSjo5IU4O4ZleChaz3Mke5oq3FThOIPHZliESW67VC%2FBfqEq48%2BlAECVvcDLswODCeBUDf%2FHLbTRobUe%2F9Pfg%2BDJ%2Bj42LbYIluVsUfIY%2BVQj8hLEAEJArwv%2B7YiyrNRW9Yp7c0zPmofZ2ZoN2ZmnBR0zrQE54KF97mW%2B97G30QwqqWKeAg0zHuUUTJTHBx8Tuv%2Fn&X-Amz-Signature=6f32dcd66c6d07e2ea89e9ba29d7e910c4415a523f7413238dd1a78aa256f4ac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
