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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXUTVMT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa231%2FzkWio%2FL4Wsv0cdeY1ouXZjqoW0AEEFyOzTmaFAiARh%2Bz0ApZdSOvi%2BPwHBXaUbEQYK5uPRgaR%2FbyGIHi48iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxyQ%2BF8KridOHHXH0KtwDg0n0AFMzoyN%2FNe8nde73W8P%2BvNeqaDF6vNIE8nTQhNJefFBaW5uu9mOHS3M8h66kYOE3NYh3s%2ByS3Erg5gw0DSE07l2Zxzd0wEudpi4Jqoe7ph79xN3c5sSi5UZqgM6oG7VTc2bbodo0x9BBvecVSE6FyxBj5Ef6p%2BO0ucyJ6kyWNWtw1wf2JWJ0AfWxpINxjhkV%2F1YOkn2k4SnIh7H4Lp18k8Q948qScLfmS220OC6PZZMA%2FkmyFExt9%2F2TCrOgYhrh%2BTt8tUbMTCU0hImM7jPuwdMakujvi4ig2a%2FNjXx56so67cskbAXgJKc9JGiOGcs8wmnfsfsBiCqzR3Qo1Rs1rF2LxWvhS%2FPhsj9QGKLWqj%2FwyvBtfTnAPBbMU%2BHqpltyZbnEb7ca4BLRfHrvJ6Hu5ehvjNPfxIDDKQXOw2f4p6M%2BX4v%2BTPL37YG2SrnrOIEnQIJeKrW%2BQyl03ZOZt75t0xktZSIOZ0%2FGpJYyDpcUgkc4OrRvIVy1x2YN84JSSKSMKZAYNLeCJgBg%2BO%2BmjBxuu0U0J5Gp1oXOFb3KKUrjmDZJxQN0fFOwRAvTJP6g3P6eiEBYXXGICcHdTd7frERDL854lz9lgbikfJkmw%2Bjh%2BmFvCK8SOIsFSX4w5sXswwY6pgGQpdZrOZ4Q6AckWDQWTEamiXbJ4PDM3s2Gmms69n8VylB5Daj3SmoV8d9ipTOzkJ0FsZHKIkS8EdXog1CCqXwrGs9IzTi2LHP3wMMrXtWkANynOVD%2BEpv%2F8J0ek5AiCufRuhy6b2oRw16pLINJRxcpMtfLp2nDn1Pw%2Fg7uYAKPTuxEudT45BIkHCP7MWjF8PTh0n0tFH26we4Zti%2BZf00kC%2FJpaFXj&X-Amz-Signature=74d7fcb38ede793f9b133482dc68bc768ad77148af29853aa3406dd13d6023b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXUTVMT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa231%2FzkWio%2FL4Wsv0cdeY1ouXZjqoW0AEEFyOzTmaFAiARh%2Bz0ApZdSOvi%2BPwHBXaUbEQYK5uPRgaR%2FbyGIHi48iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxyQ%2BF8KridOHHXH0KtwDg0n0AFMzoyN%2FNe8nde73W8P%2BvNeqaDF6vNIE8nTQhNJefFBaW5uu9mOHS3M8h66kYOE3NYh3s%2ByS3Erg5gw0DSE07l2Zxzd0wEudpi4Jqoe7ph79xN3c5sSi5UZqgM6oG7VTc2bbodo0x9BBvecVSE6FyxBj5Ef6p%2BO0ucyJ6kyWNWtw1wf2JWJ0AfWxpINxjhkV%2F1YOkn2k4SnIh7H4Lp18k8Q948qScLfmS220OC6PZZMA%2FkmyFExt9%2F2TCrOgYhrh%2BTt8tUbMTCU0hImM7jPuwdMakujvi4ig2a%2FNjXx56so67cskbAXgJKc9JGiOGcs8wmnfsfsBiCqzR3Qo1Rs1rF2LxWvhS%2FPhsj9QGKLWqj%2FwyvBtfTnAPBbMU%2BHqpltyZbnEb7ca4BLRfHrvJ6Hu5ehvjNPfxIDDKQXOw2f4p6M%2BX4v%2BTPL37YG2SrnrOIEnQIJeKrW%2BQyl03ZOZt75t0xktZSIOZ0%2FGpJYyDpcUgkc4OrRvIVy1x2YN84JSSKSMKZAYNLeCJgBg%2BO%2BmjBxuu0U0J5Gp1oXOFb3KKUrjmDZJxQN0fFOwRAvTJP6g3P6eiEBYXXGICcHdTd7frERDL854lz9lgbikfJkmw%2Bjh%2BmFvCK8SOIsFSX4w5sXswwY6pgGQpdZrOZ4Q6AckWDQWTEamiXbJ4PDM3s2Gmms69n8VylB5Daj3SmoV8d9ipTOzkJ0FsZHKIkS8EdXog1CCqXwrGs9IzTi2LHP3wMMrXtWkANynOVD%2BEpv%2F8J0ek5AiCufRuhy6b2oRw16pLINJRxcpMtfLp2nDn1Pw%2Fg7uYAKPTuxEudT45BIkHCP7MWjF8PTh0n0tFH26we4Zti%2BZf00kC%2FJpaFXj&X-Amz-Signature=e55bad5b3e163868bbc4178e7aa0d4809e2bf4367457fafba80d2ae04902d010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXUTVMT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa231%2FzkWio%2FL4Wsv0cdeY1ouXZjqoW0AEEFyOzTmaFAiARh%2Bz0ApZdSOvi%2BPwHBXaUbEQYK5uPRgaR%2FbyGIHi48iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxyQ%2BF8KridOHHXH0KtwDg0n0AFMzoyN%2FNe8nde73W8P%2BvNeqaDF6vNIE8nTQhNJefFBaW5uu9mOHS3M8h66kYOE3NYh3s%2ByS3Erg5gw0DSE07l2Zxzd0wEudpi4Jqoe7ph79xN3c5sSi5UZqgM6oG7VTc2bbodo0x9BBvecVSE6FyxBj5Ef6p%2BO0ucyJ6kyWNWtw1wf2JWJ0AfWxpINxjhkV%2F1YOkn2k4SnIh7H4Lp18k8Q948qScLfmS220OC6PZZMA%2FkmyFExt9%2F2TCrOgYhrh%2BTt8tUbMTCU0hImM7jPuwdMakujvi4ig2a%2FNjXx56so67cskbAXgJKc9JGiOGcs8wmnfsfsBiCqzR3Qo1Rs1rF2LxWvhS%2FPhsj9QGKLWqj%2FwyvBtfTnAPBbMU%2BHqpltyZbnEb7ca4BLRfHrvJ6Hu5ehvjNPfxIDDKQXOw2f4p6M%2BX4v%2BTPL37YG2SrnrOIEnQIJeKrW%2BQyl03ZOZt75t0xktZSIOZ0%2FGpJYyDpcUgkc4OrRvIVy1x2YN84JSSKSMKZAYNLeCJgBg%2BO%2BmjBxuu0U0J5Gp1oXOFb3KKUrjmDZJxQN0fFOwRAvTJP6g3P6eiEBYXXGICcHdTd7frERDL854lz9lgbikfJkmw%2Bjh%2BmFvCK8SOIsFSX4w5sXswwY6pgGQpdZrOZ4Q6AckWDQWTEamiXbJ4PDM3s2Gmms69n8VylB5Daj3SmoV8d9ipTOzkJ0FsZHKIkS8EdXog1CCqXwrGs9IzTi2LHP3wMMrXtWkANynOVD%2BEpv%2F8J0ek5AiCufRuhy6b2oRw16pLINJRxcpMtfLp2nDn1Pw%2Fg7uYAKPTuxEudT45BIkHCP7MWjF8PTh0n0tFH26we4Zti%2BZf00kC%2FJpaFXj&X-Amz-Signature=80c64535fee7315676cd50a4dc287857e390e89f31366b52359afa1ab656bf0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXUTVMT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa231%2FzkWio%2FL4Wsv0cdeY1ouXZjqoW0AEEFyOzTmaFAiARh%2Bz0ApZdSOvi%2BPwHBXaUbEQYK5uPRgaR%2FbyGIHi48iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxyQ%2BF8KridOHHXH0KtwDg0n0AFMzoyN%2FNe8nde73W8P%2BvNeqaDF6vNIE8nTQhNJefFBaW5uu9mOHS3M8h66kYOE3NYh3s%2ByS3Erg5gw0DSE07l2Zxzd0wEudpi4Jqoe7ph79xN3c5sSi5UZqgM6oG7VTc2bbodo0x9BBvecVSE6FyxBj5Ef6p%2BO0ucyJ6kyWNWtw1wf2JWJ0AfWxpINxjhkV%2F1YOkn2k4SnIh7H4Lp18k8Q948qScLfmS220OC6PZZMA%2FkmyFExt9%2F2TCrOgYhrh%2BTt8tUbMTCU0hImM7jPuwdMakujvi4ig2a%2FNjXx56so67cskbAXgJKc9JGiOGcs8wmnfsfsBiCqzR3Qo1Rs1rF2LxWvhS%2FPhsj9QGKLWqj%2FwyvBtfTnAPBbMU%2BHqpltyZbnEb7ca4BLRfHrvJ6Hu5ehvjNPfxIDDKQXOw2f4p6M%2BX4v%2BTPL37YG2SrnrOIEnQIJeKrW%2BQyl03ZOZt75t0xktZSIOZ0%2FGpJYyDpcUgkc4OrRvIVy1x2YN84JSSKSMKZAYNLeCJgBg%2BO%2BmjBxuu0U0J5Gp1oXOFb3KKUrjmDZJxQN0fFOwRAvTJP6g3P6eiEBYXXGICcHdTd7frERDL854lz9lgbikfJkmw%2Bjh%2BmFvCK8SOIsFSX4w5sXswwY6pgGQpdZrOZ4Q6AckWDQWTEamiXbJ4PDM3s2Gmms69n8VylB5Daj3SmoV8d9ipTOzkJ0FsZHKIkS8EdXog1CCqXwrGs9IzTi2LHP3wMMrXtWkANynOVD%2BEpv%2F8J0ek5AiCufRuhy6b2oRw16pLINJRxcpMtfLp2nDn1Pw%2Fg7uYAKPTuxEudT45BIkHCP7MWjF8PTh0n0tFH26we4Zti%2BZf00kC%2FJpaFXj&X-Amz-Signature=3cc8b03d05aaf0e72b3c3bd5c3d98eff0cef7e7939946bff98caecf4a0318247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXUTVMT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa231%2FzkWio%2FL4Wsv0cdeY1ouXZjqoW0AEEFyOzTmaFAiARh%2Bz0ApZdSOvi%2BPwHBXaUbEQYK5uPRgaR%2FbyGIHi48iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxyQ%2BF8KridOHHXH0KtwDg0n0AFMzoyN%2FNe8nde73W8P%2BvNeqaDF6vNIE8nTQhNJefFBaW5uu9mOHS3M8h66kYOE3NYh3s%2ByS3Erg5gw0DSE07l2Zxzd0wEudpi4Jqoe7ph79xN3c5sSi5UZqgM6oG7VTc2bbodo0x9BBvecVSE6FyxBj5Ef6p%2BO0ucyJ6kyWNWtw1wf2JWJ0AfWxpINxjhkV%2F1YOkn2k4SnIh7H4Lp18k8Q948qScLfmS220OC6PZZMA%2FkmyFExt9%2F2TCrOgYhrh%2BTt8tUbMTCU0hImM7jPuwdMakujvi4ig2a%2FNjXx56so67cskbAXgJKc9JGiOGcs8wmnfsfsBiCqzR3Qo1Rs1rF2LxWvhS%2FPhsj9QGKLWqj%2FwyvBtfTnAPBbMU%2BHqpltyZbnEb7ca4BLRfHrvJ6Hu5ehvjNPfxIDDKQXOw2f4p6M%2BX4v%2BTPL37YG2SrnrOIEnQIJeKrW%2BQyl03ZOZt75t0xktZSIOZ0%2FGpJYyDpcUgkc4OrRvIVy1x2YN84JSSKSMKZAYNLeCJgBg%2BO%2BmjBxuu0U0J5Gp1oXOFb3KKUrjmDZJxQN0fFOwRAvTJP6g3P6eiEBYXXGICcHdTd7frERDL854lz9lgbikfJkmw%2Bjh%2BmFvCK8SOIsFSX4w5sXswwY6pgGQpdZrOZ4Q6AckWDQWTEamiXbJ4PDM3s2Gmms69n8VylB5Daj3SmoV8d9ipTOzkJ0FsZHKIkS8EdXog1CCqXwrGs9IzTi2LHP3wMMrXtWkANynOVD%2BEpv%2F8J0ek5AiCufRuhy6b2oRw16pLINJRxcpMtfLp2nDn1Pw%2Fg7uYAKPTuxEudT45BIkHCP7MWjF8PTh0n0tFH26we4Zti%2BZf00kC%2FJpaFXj&X-Amz-Signature=72b26b71503ec8a963e34f974d83ce0086ee39aa5df97497031e8c81768fd774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXUTVMT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa231%2FzkWio%2FL4Wsv0cdeY1ouXZjqoW0AEEFyOzTmaFAiARh%2Bz0ApZdSOvi%2BPwHBXaUbEQYK5uPRgaR%2FbyGIHi48iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxyQ%2BF8KridOHHXH0KtwDg0n0AFMzoyN%2FNe8nde73W8P%2BvNeqaDF6vNIE8nTQhNJefFBaW5uu9mOHS3M8h66kYOE3NYh3s%2ByS3Erg5gw0DSE07l2Zxzd0wEudpi4Jqoe7ph79xN3c5sSi5UZqgM6oG7VTc2bbodo0x9BBvecVSE6FyxBj5Ef6p%2BO0ucyJ6kyWNWtw1wf2JWJ0AfWxpINxjhkV%2F1YOkn2k4SnIh7H4Lp18k8Q948qScLfmS220OC6PZZMA%2FkmyFExt9%2F2TCrOgYhrh%2BTt8tUbMTCU0hImM7jPuwdMakujvi4ig2a%2FNjXx56so67cskbAXgJKc9JGiOGcs8wmnfsfsBiCqzR3Qo1Rs1rF2LxWvhS%2FPhsj9QGKLWqj%2FwyvBtfTnAPBbMU%2BHqpltyZbnEb7ca4BLRfHrvJ6Hu5ehvjNPfxIDDKQXOw2f4p6M%2BX4v%2BTPL37YG2SrnrOIEnQIJeKrW%2BQyl03ZOZt75t0xktZSIOZ0%2FGpJYyDpcUgkc4OrRvIVy1x2YN84JSSKSMKZAYNLeCJgBg%2BO%2BmjBxuu0U0J5Gp1oXOFb3KKUrjmDZJxQN0fFOwRAvTJP6g3P6eiEBYXXGICcHdTd7frERDL854lz9lgbikfJkmw%2Bjh%2BmFvCK8SOIsFSX4w5sXswwY6pgGQpdZrOZ4Q6AckWDQWTEamiXbJ4PDM3s2Gmms69n8VylB5Daj3SmoV8d9ipTOzkJ0FsZHKIkS8EdXog1CCqXwrGs9IzTi2LHP3wMMrXtWkANynOVD%2BEpv%2F8J0ek5AiCufRuhy6b2oRw16pLINJRxcpMtfLp2nDn1Pw%2Fg7uYAKPTuxEudT45BIkHCP7MWjF8PTh0n0tFH26we4Zti%2BZf00kC%2FJpaFXj&X-Amz-Signature=af2376260aa7baac568954b60f1da4bd5c530a85eb668fee8b9fd66bae007996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXUTVMT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa231%2FzkWio%2FL4Wsv0cdeY1ouXZjqoW0AEEFyOzTmaFAiARh%2Bz0ApZdSOvi%2BPwHBXaUbEQYK5uPRgaR%2FbyGIHi48iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxyQ%2BF8KridOHHXH0KtwDg0n0AFMzoyN%2FNe8nde73W8P%2BvNeqaDF6vNIE8nTQhNJefFBaW5uu9mOHS3M8h66kYOE3NYh3s%2ByS3Erg5gw0DSE07l2Zxzd0wEudpi4Jqoe7ph79xN3c5sSi5UZqgM6oG7VTc2bbodo0x9BBvecVSE6FyxBj5Ef6p%2BO0ucyJ6kyWNWtw1wf2JWJ0AfWxpINxjhkV%2F1YOkn2k4SnIh7H4Lp18k8Q948qScLfmS220OC6PZZMA%2FkmyFExt9%2F2TCrOgYhrh%2BTt8tUbMTCU0hImM7jPuwdMakujvi4ig2a%2FNjXx56so67cskbAXgJKc9JGiOGcs8wmnfsfsBiCqzR3Qo1Rs1rF2LxWvhS%2FPhsj9QGKLWqj%2FwyvBtfTnAPBbMU%2BHqpltyZbnEb7ca4BLRfHrvJ6Hu5ehvjNPfxIDDKQXOw2f4p6M%2BX4v%2BTPL37YG2SrnrOIEnQIJeKrW%2BQyl03ZOZt75t0xktZSIOZ0%2FGpJYyDpcUgkc4OrRvIVy1x2YN84JSSKSMKZAYNLeCJgBg%2BO%2BmjBxuu0U0J5Gp1oXOFb3KKUrjmDZJxQN0fFOwRAvTJP6g3P6eiEBYXXGICcHdTd7frERDL854lz9lgbikfJkmw%2Bjh%2BmFvCK8SOIsFSX4w5sXswwY6pgGQpdZrOZ4Q6AckWDQWTEamiXbJ4PDM3s2Gmms69n8VylB5Daj3SmoV8d9ipTOzkJ0FsZHKIkS8EdXog1CCqXwrGs9IzTi2LHP3wMMrXtWkANynOVD%2BEpv%2F8J0ek5AiCufRuhy6b2oRw16pLINJRxcpMtfLp2nDn1Pw%2Fg7uYAKPTuxEudT45BIkHCP7MWjF8PTh0n0tFH26we4Zti%2BZf00kC%2FJpaFXj&X-Amz-Signature=334079c6b001e0cecbca63e2248a0f26631f3325e3778e9b6ff8918bd47a7159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
