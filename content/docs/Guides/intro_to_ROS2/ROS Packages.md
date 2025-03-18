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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3R46H%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIrWMndCC5x8pQn14estchDWAt%2BWCGFiDzzZQp92gmAiBTqkf4bNNrABdMHCbfJcSt1aSobMSluC%2Bo4Tp0P9lZnir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMR4PcdtHhVfLypT0FKtwDUxJ1BaJl%2B7%2FEyShe8%2Fl3bVHS%2Fmcrnaml4Txec2PFTsLXH8Bi8whs4lgB5M6ENJR54piPuk%2FD8nG7gFZXOxJrdpGuE%2FkxLNQG3QT8figP8Xg%2Fwb%2BzM4UyaqzQuw2AN0eLV3bjDytuf4hPQyWjRCNT9gb6ajvKSGcY3iH7I%2B3lZdxZGZ7N9BGUBsl5%2BGeEIZKy8NLb17MD8rRfADvtm0tmq0VpNHO5SGtC54PisM0Oo6MZCp0ZCyU3UWmYDU5Yp1Ni7rW8FcVH9TnKQApOYGuetbaPuYvlan1heOPuexI9AlEADKP8C16USGXC8HCb85BNWJdlNjulZhZRyDwBKeZjWl69neweeEp748ErovxYyLcyy3hczws7bmxp9jzkNECQ46QRdvw9j1PWKsNHebVtihTrU6Mfbms26nY3UNOvmxaMwqm6UVjnTTPebjV0UfSlRzu3ZWjs5pyVicDK%2BsSQAlm8ZycICNzfYEBCWby%2FSv4X4HvE38GEguF3vw8dEm9l7QAlOXdAsoQTeGmD558ek%2BKOVsNFG2zNCPeA%2FVjwZgvgNCVWp1OACSXEbj%2BuCyJuX7gDzWd2Yws4TRdZYWVlL5bloeANA1rxpAMlzcIFmqGoNIKeg6ckUFT9FG4wq6rjvgY6pgGOOCVGpK8BQu53OTcAKMXdXvBf%2FY%2F7UqzXdgzh4RI99akVyGsvZS0WNz8QqX9Amau6HBY7rNEkd6akN2i7xBNCzvc3M%2F%2FneQUYbt0p5a7G%2FDccMZR608HB5c7caJDtn3aXsz%2Fu4RsBCtVY7nahw34CTllFq8KOJTKkG3gsoiehCWMedhLnMXRcMQRtAiSzpVeA3ocmpPXlUnN41l6lYNQkX4ghaEpr&X-Amz-Signature=1b52b084819f4ecab62b59012e4022d28c4d5384d657e4c35216cd2b6538b381&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3R46H%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIrWMndCC5x8pQn14estchDWAt%2BWCGFiDzzZQp92gmAiBTqkf4bNNrABdMHCbfJcSt1aSobMSluC%2Bo4Tp0P9lZnir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMR4PcdtHhVfLypT0FKtwDUxJ1BaJl%2B7%2FEyShe8%2Fl3bVHS%2Fmcrnaml4Txec2PFTsLXH8Bi8whs4lgB5M6ENJR54piPuk%2FD8nG7gFZXOxJrdpGuE%2FkxLNQG3QT8figP8Xg%2Fwb%2BzM4UyaqzQuw2AN0eLV3bjDytuf4hPQyWjRCNT9gb6ajvKSGcY3iH7I%2B3lZdxZGZ7N9BGUBsl5%2BGeEIZKy8NLb17MD8rRfADvtm0tmq0VpNHO5SGtC54PisM0Oo6MZCp0ZCyU3UWmYDU5Yp1Ni7rW8FcVH9TnKQApOYGuetbaPuYvlan1heOPuexI9AlEADKP8C16USGXC8HCb85BNWJdlNjulZhZRyDwBKeZjWl69neweeEp748ErovxYyLcyy3hczws7bmxp9jzkNECQ46QRdvw9j1PWKsNHebVtihTrU6Mfbms26nY3UNOvmxaMwqm6UVjnTTPebjV0UfSlRzu3ZWjs5pyVicDK%2BsSQAlm8ZycICNzfYEBCWby%2FSv4X4HvE38GEguF3vw8dEm9l7QAlOXdAsoQTeGmD558ek%2BKOVsNFG2zNCPeA%2FVjwZgvgNCVWp1OACSXEbj%2BuCyJuX7gDzWd2Yws4TRdZYWVlL5bloeANA1rxpAMlzcIFmqGoNIKeg6ckUFT9FG4wq6rjvgY6pgGOOCVGpK8BQu53OTcAKMXdXvBf%2FY%2F7UqzXdgzh4RI99akVyGsvZS0WNz8QqX9Amau6HBY7rNEkd6akN2i7xBNCzvc3M%2F%2FneQUYbt0p5a7G%2FDccMZR608HB5c7caJDtn3aXsz%2Fu4RsBCtVY7nahw34CTllFq8KOJTKkG3gsoiehCWMedhLnMXRcMQRtAiSzpVeA3ocmpPXlUnN41l6lYNQkX4ghaEpr&X-Amz-Signature=9b5b5fdbd426ded4a80aa6f4704f3de9ab8b1d4b3a32f834ea27c9a520d4f440&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3R46H%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIrWMndCC5x8pQn14estchDWAt%2BWCGFiDzzZQp92gmAiBTqkf4bNNrABdMHCbfJcSt1aSobMSluC%2Bo4Tp0P9lZnir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMR4PcdtHhVfLypT0FKtwDUxJ1BaJl%2B7%2FEyShe8%2Fl3bVHS%2Fmcrnaml4Txec2PFTsLXH8Bi8whs4lgB5M6ENJR54piPuk%2FD8nG7gFZXOxJrdpGuE%2FkxLNQG3QT8figP8Xg%2Fwb%2BzM4UyaqzQuw2AN0eLV3bjDytuf4hPQyWjRCNT9gb6ajvKSGcY3iH7I%2B3lZdxZGZ7N9BGUBsl5%2BGeEIZKy8NLb17MD8rRfADvtm0tmq0VpNHO5SGtC54PisM0Oo6MZCp0ZCyU3UWmYDU5Yp1Ni7rW8FcVH9TnKQApOYGuetbaPuYvlan1heOPuexI9AlEADKP8C16USGXC8HCb85BNWJdlNjulZhZRyDwBKeZjWl69neweeEp748ErovxYyLcyy3hczws7bmxp9jzkNECQ46QRdvw9j1PWKsNHebVtihTrU6Mfbms26nY3UNOvmxaMwqm6UVjnTTPebjV0UfSlRzu3ZWjs5pyVicDK%2BsSQAlm8ZycICNzfYEBCWby%2FSv4X4HvE38GEguF3vw8dEm9l7QAlOXdAsoQTeGmD558ek%2BKOVsNFG2zNCPeA%2FVjwZgvgNCVWp1OACSXEbj%2BuCyJuX7gDzWd2Yws4TRdZYWVlL5bloeANA1rxpAMlzcIFmqGoNIKeg6ckUFT9FG4wq6rjvgY6pgGOOCVGpK8BQu53OTcAKMXdXvBf%2FY%2F7UqzXdgzh4RI99akVyGsvZS0WNz8QqX9Amau6HBY7rNEkd6akN2i7xBNCzvc3M%2F%2FneQUYbt0p5a7G%2FDccMZR608HB5c7caJDtn3aXsz%2Fu4RsBCtVY7nahw34CTllFq8KOJTKkG3gsoiehCWMedhLnMXRcMQRtAiSzpVeA3ocmpPXlUnN41l6lYNQkX4ghaEpr&X-Amz-Signature=878bdc9d0d98ad1a41c512d59f0492f096367339e7f8b90f0066b2ae95f57e66&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3R46H%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIrWMndCC5x8pQn14estchDWAt%2BWCGFiDzzZQp92gmAiBTqkf4bNNrABdMHCbfJcSt1aSobMSluC%2Bo4Tp0P9lZnir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMR4PcdtHhVfLypT0FKtwDUxJ1BaJl%2B7%2FEyShe8%2Fl3bVHS%2Fmcrnaml4Txec2PFTsLXH8Bi8whs4lgB5M6ENJR54piPuk%2FD8nG7gFZXOxJrdpGuE%2FkxLNQG3QT8figP8Xg%2Fwb%2BzM4UyaqzQuw2AN0eLV3bjDytuf4hPQyWjRCNT9gb6ajvKSGcY3iH7I%2B3lZdxZGZ7N9BGUBsl5%2BGeEIZKy8NLb17MD8rRfADvtm0tmq0VpNHO5SGtC54PisM0Oo6MZCp0ZCyU3UWmYDU5Yp1Ni7rW8FcVH9TnKQApOYGuetbaPuYvlan1heOPuexI9AlEADKP8C16USGXC8HCb85BNWJdlNjulZhZRyDwBKeZjWl69neweeEp748ErovxYyLcyy3hczws7bmxp9jzkNECQ46QRdvw9j1PWKsNHebVtihTrU6Mfbms26nY3UNOvmxaMwqm6UVjnTTPebjV0UfSlRzu3ZWjs5pyVicDK%2BsSQAlm8ZycICNzfYEBCWby%2FSv4X4HvE38GEguF3vw8dEm9l7QAlOXdAsoQTeGmD558ek%2BKOVsNFG2zNCPeA%2FVjwZgvgNCVWp1OACSXEbj%2BuCyJuX7gDzWd2Yws4TRdZYWVlL5bloeANA1rxpAMlzcIFmqGoNIKeg6ckUFT9FG4wq6rjvgY6pgGOOCVGpK8BQu53OTcAKMXdXvBf%2FY%2F7UqzXdgzh4RI99akVyGsvZS0WNz8QqX9Amau6HBY7rNEkd6akN2i7xBNCzvc3M%2F%2FneQUYbt0p5a7G%2FDccMZR608HB5c7caJDtn3aXsz%2Fu4RsBCtVY7nahw34CTllFq8KOJTKkG3gsoiehCWMedhLnMXRcMQRtAiSzpVeA3ocmpPXlUnN41l6lYNQkX4ghaEpr&X-Amz-Signature=6b76333af79b8d63d7a66e328ccd3bfebdd8fcb7e36e433ebfd3219463e83eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3R46H%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIrWMndCC5x8pQn14estchDWAt%2BWCGFiDzzZQp92gmAiBTqkf4bNNrABdMHCbfJcSt1aSobMSluC%2Bo4Tp0P9lZnir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMR4PcdtHhVfLypT0FKtwDUxJ1BaJl%2B7%2FEyShe8%2Fl3bVHS%2Fmcrnaml4Txec2PFTsLXH8Bi8whs4lgB5M6ENJR54piPuk%2FD8nG7gFZXOxJrdpGuE%2FkxLNQG3QT8figP8Xg%2Fwb%2BzM4UyaqzQuw2AN0eLV3bjDytuf4hPQyWjRCNT9gb6ajvKSGcY3iH7I%2B3lZdxZGZ7N9BGUBsl5%2BGeEIZKy8NLb17MD8rRfADvtm0tmq0VpNHO5SGtC54PisM0Oo6MZCp0ZCyU3UWmYDU5Yp1Ni7rW8FcVH9TnKQApOYGuetbaPuYvlan1heOPuexI9AlEADKP8C16USGXC8HCb85BNWJdlNjulZhZRyDwBKeZjWl69neweeEp748ErovxYyLcyy3hczws7bmxp9jzkNECQ46QRdvw9j1PWKsNHebVtihTrU6Mfbms26nY3UNOvmxaMwqm6UVjnTTPebjV0UfSlRzu3ZWjs5pyVicDK%2BsSQAlm8ZycICNzfYEBCWby%2FSv4X4HvE38GEguF3vw8dEm9l7QAlOXdAsoQTeGmD558ek%2BKOVsNFG2zNCPeA%2FVjwZgvgNCVWp1OACSXEbj%2BuCyJuX7gDzWd2Yws4TRdZYWVlL5bloeANA1rxpAMlzcIFmqGoNIKeg6ckUFT9FG4wq6rjvgY6pgGOOCVGpK8BQu53OTcAKMXdXvBf%2FY%2F7UqzXdgzh4RI99akVyGsvZS0WNz8QqX9Amau6HBY7rNEkd6akN2i7xBNCzvc3M%2F%2FneQUYbt0p5a7G%2FDccMZR608HB5c7caJDtn3aXsz%2Fu4RsBCtVY7nahw34CTllFq8KOJTKkG3gsoiehCWMedhLnMXRcMQRtAiSzpVeA3ocmpPXlUnN41l6lYNQkX4ghaEpr&X-Amz-Signature=97d86c3b90ac5d1c850fed0cbc9dc9f982ca99b1bc6fbafeda43fbc5291c3738&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3R46H%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIrWMndCC5x8pQn14estchDWAt%2BWCGFiDzzZQp92gmAiBTqkf4bNNrABdMHCbfJcSt1aSobMSluC%2Bo4Tp0P9lZnir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMR4PcdtHhVfLypT0FKtwDUxJ1BaJl%2B7%2FEyShe8%2Fl3bVHS%2Fmcrnaml4Txec2PFTsLXH8Bi8whs4lgB5M6ENJR54piPuk%2FD8nG7gFZXOxJrdpGuE%2FkxLNQG3QT8figP8Xg%2Fwb%2BzM4UyaqzQuw2AN0eLV3bjDytuf4hPQyWjRCNT9gb6ajvKSGcY3iH7I%2B3lZdxZGZ7N9BGUBsl5%2BGeEIZKy8NLb17MD8rRfADvtm0tmq0VpNHO5SGtC54PisM0Oo6MZCp0ZCyU3UWmYDU5Yp1Ni7rW8FcVH9TnKQApOYGuetbaPuYvlan1heOPuexI9AlEADKP8C16USGXC8HCb85BNWJdlNjulZhZRyDwBKeZjWl69neweeEp748ErovxYyLcyy3hczws7bmxp9jzkNECQ46QRdvw9j1PWKsNHebVtihTrU6Mfbms26nY3UNOvmxaMwqm6UVjnTTPebjV0UfSlRzu3ZWjs5pyVicDK%2BsSQAlm8ZycICNzfYEBCWby%2FSv4X4HvE38GEguF3vw8dEm9l7QAlOXdAsoQTeGmD558ek%2BKOVsNFG2zNCPeA%2FVjwZgvgNCVWp1OACSXEbj%2BuCyJuX7gDzWd2Yws4TRdZYWVlL5bloeANA1rxpAMlzcIFmqGoNIKeg6ckUFT9FG4wq6rjvgY6pgGOOCVGpK8BQu53OTcAKMXdXvBf%2FY%2F7UqzXdgzh4RI99akVyGsvZS0WNz8QqX9Amau6HBY7rNEkd6akN2i7xBNCzvc3M%2F%2FneQUYbt0p5a7G%2FDccMZR608HB5c7caJDtn3aXsz%2Fu4RsBCtVY7nahw34CTllFq8KOJTKkG3gsoiehCWMedhLnMXRcMQRtAiSzpVeA3ocmpPXlUnN41l6lYNQkX4ghaEpr&X-Amz-Signature=3b07a828cf1635bfca60e7ec92e258efcf5757d3a0c35f24aa99c9b02725048b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY3R46H%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIrWMndCC5x8pQn14estchDWAt%2BWCGFiDzzZQp92gmAiBTqkf4bNNrABdMHCbfJcSt1aSobMSluC%2Bo4Tp0P9lZnir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMR4PcdtHhVfLypT0FKtwDUxJ1BaJl%2B7%2FEyShe8%2Fl3bVHS%2Fmcrnaml4Txec2PFTsLXH8Bi8whs4lgB5M6ENJR54piPuk%2FD8nG7gFZXOxJrdpGuE%2FkxLNQG3QT8figP8Xg%2Fwb%2BzM4UyaqzQuw2AN0eLV3bjDytuf4hPQyWjRCNT9gb6ajvKSGcY3iH7I%2B3lZdxZGZ7N9BGUBsl5%2BGeEIZKy8NLb17MD8rRfADvtm0tmq0VpNHO5SGtC54PisM0Oo6MZCp0ZCyU3UWmYDU5Yp1Ni7rW8FcVH9TnKQApOYGuetbaPuYvlan1heOPuexI9AlEADKP8C16USGXC8HCb85BNWJdlNjulZhZRyDwBKeZjWl69neweeEp748ErovxYyLcyy3hczws7bmxp9jzkNECQ46QRdvw9j1PWKsNHebVtihTrU6Mfbms26nY3UNOvmxaMwqm6UVjnTTPebjV0UfSlRzu3ZWjs5pyVicDK%2BsSQAlm8ZycICNzfYEBCWby%2FSv4X4HvE38GEguF3vw8dEm9l7QAlOXdAsoQTeGmD558ek%2BKOVsNFG2zNCPeA%2FVjwZgvgNCVWp1OACSXEbj%2BuCyJuX7gDzWd2Yws4TRdZYWVlL5bloeANA1rxpAMlzcIFmqGoNIKeg6ckUFT9FG4wq6rjvgY6pgGOOCVGpK8BQu53OTcAKMXdXvBf%2FY%2F7UqzXdgzh4RI99akVyGsvZS0WNz8QqX9Amau6HBY7rNEkd6akN2i7xBNCzvc3M%2F%2FneQUYbt0p5a7G%2FDccMZR608HB5c7caJDtn3aXsz%2Fu4RsBCtVY7nahw34CTllFq8KOJTKkG3gsoiehCWMedhLnMXRcMQRtAiSzpVeA3ocmpPXlUnN41l6lYNQkX4ghaEpr&X-Amz-Signature=3a8fbc3828677fe6a4204301c48f0d9dce0f718099dd035ebbe3f20e15065d11&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
