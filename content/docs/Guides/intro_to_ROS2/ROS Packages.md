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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWWHRVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDDJ2zNvXbER4LE78lrO%2BHZZi5fZG3yhPQzbxz8ElOaCQIgfxTQTakMrVUxWRTN36t0SU16LlSLvLl2CTORL5UqRFIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxIYONAa3fXKKDbCCrcA8fl86SlcdKND%2FMYVqeHE0UeyL7pmw3%2FipQedl4eQkICbpEUutDl5pSbI7To1ccVZxcSkOXtV6pcpVKNX%2Fxqn%2B1q7lCpaiW3MzJZMnS9okQa5alcrJUJoHQvbCjqr%2F3DEmvKwQv4EbmvrcPte6pXVn%2Fxsi5x59pQWxqr4TmbQ3jpNStDpAPxmEOyYyAwePfFar976V9WymTOwE8PmKu5KayPbxdRR5t3lv6Alm%2BhmSi9Tzh1nvYEmb0mdRyXPh9hvKDKSObEtPipqT4AsXPeH6dH4HnE18b%2Fp7snbLLft2UtPbtoQqIVZsEx0kkycZu58g5omBcJnreYVD3lM%2Bse0du7NigeP1kqdrpnsP52%2B4UT1vxuLsAvjAuzedofiPu8OBFfKM2lTWMFJPYDvO4q1p1wMeNAN9QeN9%2FPJdR5t3VaHn9WL%2Bj%2FIivaKUKHpDTaX%2FrfAWur%2FLLa170jhqupDMQZEbdcjkOtO2Y7%2ByWhH2nsfeudi9yBvXj0rKfVpmK3RgdtGngxVUnEDa%2Bm6YesFPlOqHuDWgH0%2BjXX2gxLJ69qUqx4QmFRfk%2F3hWWQSne%2FCeK07FF92pMs%2F9nOS0yBaq1XrEukv1Ei8jI4kE6wvauwG57MUBuTgpd3JwNGMLXh778GOqUBeSwyi%2BFoe7YXDKqdGpqtU1ZaZKA1ffxarTMpBuDPm6mRAEFrqAlFX%2F8by4KUgtGCJmf1T9KQiKFZcEHAZgFTHoZwoeWg%2BKXlGwu5nzrRcGOUhbmUL3IlZKddnDaN85UVsWY6e%2BQ7jn7Z96rEevnm11%2BRSKQHuPkkZs8VAUSZFD6REGGE1nDnyTzxq8qCvb%2BJjBIb1JlbOL4HPQVYLQXbJ17Ls5Oj&X-Amz-Signature=bd997d3f386185c3371f7f693a81d96d9a1bdbcc06bd4388c024970664bac907&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWWHRVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDDJ2zNvXbER4LE78lrO%2BHZZi5fZG3yhPQzbxz8ElOaCQIgfxTQTakMrVUxWRTN36t0SU16LlSLvLl2CTORL5UqRFIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxIYONAa3fXKKDbCCrcA8fl86SlcdKND%2FMYVqeHE0UeyL7pmw3%2FipQedl4eQkICbpEUutDl5pSbI7To1ccVZxcSkOXtV6pcpVKNX%2Fxqn%2B1q7lCpaiW3MzJZMnS9okQa5alcrJUJoHQvbCjqr%2F3DEmvKwQv4EbmvrcPte6pXVn%2Fxsi5x59pQWxqr4TmbQ3jpNStDpAPxmEOyYyAwePfFar976V9WymTOwE8PmKu5KayPbxdRR5t3lv6Alm%2BhmSi9Tzh1nvYEmb0mdRyXPh9hvKDKSObEtPipqT4AsXPeH6dH4HnE18b%2Fp7snbLLft2UtPbtoQqIVZsEx0kkycZu58g5omBcJnreYVD3lM%2Bse0du7NigeP1kqdrpnsP52%2B4UT1vxuLsAvjAuzedofiPu8OBFfKM2lTWMFJPYDvO4q1p1wMeNAN9QeN9%2FPJdR5t3VaHn9WL%2Bj%2FIivaKUKHpDTaX%2FrfAWur%2FLLa170jhqupDMQZEbdcjkOtO2Y7%2ByWhH2nsfeudi9yBvXj0rKfVpmK3RgdtGngxVUnEDa%2Bm6YesFPlOqHuDWgH0%2BjXX2gxLJ69qUqx4QmFRfk%2F3hWWQSne%2FCeK07FF92pMs%2F9nOS0yBaq1XrEukv1Ei8jI4kE6wvauwG57MUBuTgpd3JwNGMLXh778GOqUBeSwyi%2BFoe7YXDKqdGpqtU1ZaZKA1ffxarTMpBuDPm6mRAEFrqAlFX%2F8by4KUgtGCJmf1T9KQiKFZcEHAZgFTHoZwoeWg%2BKXlGwu5nzrRcGOUhbmUL3IlZKddnDaN85UVsWY6e%2BQ7jn7Z96rEevnm11%2BRSKQHuPkkZs8VAUSZFD6REGGE1nDnyTzxq8qCvb%2BJjBIb1JlbOL4HPQVYLQXbJ17Ls5Oj&X-Amz-Signature=16d10bd5e1f4fe1019965b3f80d81769c6b0acf3cf35838551c04242993e8110&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWWHRVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDDJ2zNvXbER4LE78lrO%2BHZZi5fZG3yhPQzbxz8ElOaCQIgfxTQTakMrVUxWRTN36t0SU16LlSLvLl2CTORL5UqRFIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxIYONAa3fXKKDbCCrcA8fl86SlcdKND%2FMYVqeHE0UeyL7pmw3%2FipQedl4eQkICbpEUutDl5pSbI7To1ccVZxcSkOXtV6pcpVKNX%2Fxqn%2B1q7lCpaiW3MzJZMnS9okQa5alcrJUJoHQvbCjqr%2F3DEmvKwQv4EbmvrcPte6pXVn%2Fxsi5x59pQWxqr4TmbQ3jpNStDpAPxmEOyYyAwePfFar976V9WymTOwE8PmKu5KayPbxdRR5t3lv6Alm%2BhmSi9Tzh1nvYEmb0mdRyXPh9hvKDKSObEtPipqT4AsXPeH6dH4HnE18b%2Fp7snbLLft2UtPbtoQqIVZsEx0kkycZu58g5omBcJnreYVD3lM%2Bse0du7NigeP1kqdrpnsP52%2B4UT1vxuLsAvjAuzedofiPu8OBFfKM2lTWMFJPYDvO4q1p1wMeNAN9QeN9%2FPJdR5t3VaHn9WL%2Bj%2FIivaKUKHpDTaX%2FrfAWur%2FLLa170jhqupDMQZEbdcjkOtO2Y7%2ByWhH2nsfeudi9yBvXj0rKfVpmK3RgdtGngxVUnEDa%2Bm6YesFPlOqHuDWgH0%2BjXX2gxLJ69qUqx4QmFRfk%2F3hWWQSne%2FCeK07FF92pMs%2F9nOS0yBaq1XrEukv1Ei8jI4kE6wvauwG57MUBuTgpd3JwNGMLXh778GOqUBeSwyi%2BFoe7YXDKqdGpqtU1ZaZKA1ffxarTMpBuDPm6mRAEFrqAlFX%2F8by4KUgtGCJmf1T9KQiKFZcEHAZgFTHoZwoeWg%2BKXlGwu5nzrRcGOUhbmUL3IlZKddnDaN85UVsWY6e%2BQ7jn7Z96rEevnm11%2BRSKQHuPkkZs8VAUSZFD6REGGE1nDnyTzxq8qCvb%2BJjBIb1JlbOL4HPQVYLQXbJ17Ls5Oj&X-Amz-Signature=fbaa7fe657a85ca1e5f14e29cdd16ac91dff6bb0d2790cda65562038d03e42bb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWWHRVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDDJ2zNvXbER4LE78lrO%2BHZZi5fZG3yhPQzbxz8ElOaCQIgfxTQTakMrVUxWRTN36t0SU16LlSLvLl2CTORL5UqRFIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxIYONAa3fXKKDbCCrcA8fl86SlcdKND%2FMYVqeHE0UeyL7pmw3%2FipQedl4eQkICbpEUutDl5pSbI7To1ccVZxcSkOXtV6pcpVKNX%2Fxqn%2B1q7lCpaiW3MzJZMnS9okQa5alcrJUJoHQvbCjqr%2F3DEmvKwQv4EbmvrcPte6pXVn%2Fxsi5x59pQWxqr4TmbQ3jpNStDpAPxmEOyYyAwePfFar976V9WymTOwE8PmKu5KayPbxdRR5t3lv6Alm%2BhmSi9Tzh1nvYEmb0mdRyXPh9hvKDKSObEtPipqT4AsXPeH6dH4HnE18b%2Fp7snbLLft2UtPbtoQqIVZsEx0kkycZu58g5omBcJnreYVD3lM%2Bse0du7NigeP1kqdrpnsP52%2B4UT1vxuLsAvjAuzedofiPu8OBFfKM2lTWMFJPYDvO4q1p1wMeNAN9QeN9%2FPJdR5t3VaHn9WL%2Bj%2FIivaKUKHpDTaX%2FrfAWur%2FLLa170jhqupDMQZEbdcjkOtO2Y7%2ByWhH2nsfeudi9yBvXj0rKfVpmK3RgdtGngxVUnEDa%2Bm6YesFPlOqHuDWgH0%2BjXX2gxLJ69qUqx4QmFRfk%2F3hWWQSne%2FCeK07FF92pMs%2F9nOS0yBaq1XrEukv1Ei8jI4kE6wvauwG57MUBuTgpd3JwNGMLXh778GOqUBeSwyi%2BFoe7YXDKqdGpqtU1ZaZKA1ffxarTMpBuDPm6mRAEFrqAlFX%2F8by4KUgtGCJmf1T9KQiKFZcEHAZgFTHoZwoeWg%2BKXlGwu5nzrRcGOUhbmUL3IlZKddnDaN85UVsWY6e%2BQ7jn7Z96rEevnm11%2BRSKQHuPkkZs8VAUSZFD6REGGE1nDnyTzxq8qCvb%2BJjBIb1JlbOL4HPQVYLQXbJ17Ls5Oj&X-Amz-Signature=78be4315874619bd6949d6c66651b7c10c156d0a470e625860b59efd7fd22f53&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWWHRVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDDJ2zNvXbER4LE78lrO%2BHZZi5fZG3yhPQzbxz8ElOaCQIgfxTQTakMrVUxWRTN36t0SU16LlSLvLl2CTORL5UqRFIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxIYONAa3fXKKDbCCrcA8fl86SlcdKND%2FMYVqeHE0UeyL7pmw3%2FipQedl4eQkICbpEUutDl5pSbI7To1ccVZxcSkOXtV6pcpVKNX%2Fxqn%2B1q7lCpaiW3MzJZMnS9okQa5alcrJUJoHQvbCjqr%2F3DEmvKwQv4EbmvrcPte6pXVn%2Fxsi5x59pQWxqr4TmbQ3jpNStDpAPxmEOyYyAwePfFar976V9WymTOwE8PmKu5KayPbxdRR5t3lv6Alm%2BhmSi9Tzh1nvYEmb0mdRyXPh9hvKDKSObEtPipqT4AsXPeH6dH4HnE18b%2Fp7snbLLft2UtPbtoQqIVZsEx0kkycZu58g5omBcJnreYVD3lM%2Bse0du7NigeP1kqdrpnsP52%2B4UT1vxuLsAvjAuzedofiPu8OBFfKM2lTWMFJPYDvO4q1p1wMeNAN9QeN9%2FPJdR5t3VaHn9WL%2Bj%2FIivaKUKHpDTaX%2FrfAWur%2FLLa170jhqupDMQZEbdcjkOtO2Y7%2ByWhH2nsfeudi9yBvXj0rKfVpmK3RgdtGngxVUnEDa%2Bm6YesFPlOqHuDWgH0%2BjXX2gxLJ69qUqx4QmFRfk%2F3hWWQSne%2FCeK07FF92pMs%2F9nOS0yBaq1XrEukv1Ei8jI4kE6wvauwG57MUBuTgpd3JwNGMLXh778GOqUBeSwyi%2BFoe7YXDKqdGpqtU1ZaZKA1ffxarTMpBuDPm6mRAEFrqAlFX%2F8by4KUgtGCJmf1T9KQiKFZcEHAZgFTHoZwoeWg%2BKXlGwu5nzrRcGOUhbmUL3IlZKddnDaN85UVsWY6e%2BQ7jn7Z96rEevnm11%2BRSKQHuPkkZs8VAUSZFD6REGGE1nDnyTzxq8qCvb%2BJjBIb1JlbOL4HPQVYLQXbJ17Ls5Oj&X-Amz-Signature=01603ba8a826adf2f3651fffa9089fd294066b578879355c2f9efd0290121aef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWWHRVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDDJ2zNvXbER4LE78lrO%2BHZZi5fZG3yhPQzbxz8ElOaCQIgfxTQTakMrVUxWRTN36t0SU16LlSLvLl2CTORL5UqRFIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxIYONAa3fXKKDbCCrcA8fl86SlcdKND%2FMYVqeHE0UeyL7pmw3%2FipQedl4eQkICbpEUutDl5pSbI7To1ccVZxcSkOXtV6pcpVKNX%2Fxqn%2B1q7lCpaiW3MzJZMnS9okQa5alcrJUJoHQvbCjqr%2F3DEmvKwQv4EbmvrcPte6pXVn%2Fxsi5x59pQWxqr4TmbQ3jpNStDpAPxmEOyYyAwePfFar976V9WymTOwE8PmKu5KayPbxdRR5t3lv6Alm%2BhmSi9Tzh1nvYEmb0mdRyXPh9hvKDKSObEtPipqT4AsXPeH6dH4HnE18b%2Fp7snbLLft2UtPbtoQqIVZsEx0kkycZu58g5omBcJnreYVD3lM%2Bse0du7NigeP1kqdrpnsP52%2B4UT1vxuLsAvjAuzedofiPu8OBFfKM2lTWMFJPYDvO4q1p1wMeNAN9QeN9%2FPJdR5t3VaHn9WL%2Bj%2FIivaKUKHpDTaX%2FrfAWur%2FLLa170jhqupDMQZEbdcjkOtO2Y7%2ByWhH2nsfeudi9yBvXj0rKfVpmK3RgdtGngxVUnEDa%2Bm6YesFPlOqHuDWgH0%2BjXX2gxLJ69qUqx4QmFRfk%2F3hWWQSne%2FCeK07FF92pMs%2F9nOS0yBaq1XrEukv1Ei8jI4kE6wvauwG57MUBuTgpd3JwNGMLXh778GOqUBeSwyi%2BFoe7YXDKqdGpqtU1ZaZKA1ffxarTMpBuDPm6mRAEFrqAlFX%2F8by4KUgtGCJmf1T9KQiKFZcEHAZgFTHoZwoeWg%2BKXlGwu5nzrRcGOUhbmUL3IlZKddnDaN85UVsWY6e%2BQ7jn7Z96rEevnm11%2BRSKQHuPkkZs8VAUSZFD6REGGE1nDnyTzxq8qCvb%2BJjBIb1JlbOL4HPQVYLQXbJ17Ls5Oj&X-Amz-Signature=8148e9703c7ca9ceca8dc561c8c5adf959fbefa6c9f95311e34729f684f9d260&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWWHRVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDDJ2zNvXbER4LE78lrO%2BHZZi5fZG3yhPQzbxz8ElOaCQIgfxTQTakMrVUxWRTN36t0SU16LlSLvLl2CTORL5UqRFIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxIYONAa3fXKKDbCCrcA8fl86SlcdKND%2FMYVqeHE0UeyL7pmw3%2FipQedl4eQkICbpEUutDl5pSbI7To1ccVZxcSkOXtV6pcpVKNX%2Fxqn%2B1q7lCpaiW3MzJZMnS9okQa5alcrJUJoHQvbCjqr%2F3DEmvKwQv4EbmvrcPte6pXVn%2Fxsi5x59pQWxqr4TmbQ3jpNStDpAPxmEOyYyAwePfFar976V9WymTOwE8PmKu5KayPbxdRR5t3lv6Alm%2BhmSi9Tzh1nvYEmb0mdRyXPh9hvKDKSObEtPipqT4AsXPeH6dH4HnE18b%2Fp7snbLLft2UtPbtoQqIVZsEx0kkycZu58g5omBcJnreYVD3lM%2Bse0du7NigeP1kqdrpnsP52%2B4UT1vxuLsAvjAuzedofiPu8OBFfKM2lTWMFJPYDvO4q1p1wMeNAN9QeN9%2FPJdR5t3VaHn9WL%2Bj%2FIivaKUKHpDTaX%2FrfAWur%2FLLa170jhqupDMQZEbdcjkOtO2Y7%2ByWhH2nsfeudi9yBvXj0rKfVpmK3RgdtGngxVUnEDa%2Bm6YesFPlOqHuDWgH0%2BjXX2gxLJ69qUqx4QmFRfk%2F3hWWQSne%2FCeK07FF92pMs%2F9nOS0yBaq1XrEukv1Ei8jI4kE6wvauwG57MUBuTgpd3JwNGMLXh778GOqUBeSwyi%2BFoe7YXDKqdGpqtU1ZaZKA1ffxarTMpBuDPm6mRAEFrqAlFX%2F8by4KUgtGCJmf1T9KQiKFZcEHAZgFTHoZwoeWg%2BKXlGwu5nzrRcGOUhbmUL3IlZKddnDaN85UVsWY6e%2BQ7jn7Z96rEevnm11%2BRSKQHuPkkZs8VAUSZFD6REGGE1nDnyTzxq8qCvb%2BJjBIb1JlbOL4HPQVYLQXbJ17Ls5Oj&X-Amz-Signature=ebccf7f59b3845eda2eaad36752a42338e0c04129a429b343088c7d8c85d4552&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
