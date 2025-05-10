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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4E2BA5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEkiS7lFpJKvz5cljW5esro5rkBVDfHuZQiSvmi6azMsAiAlqxnm0rzq2mnMrrTlCzqXYtW4L%2B7fv0QvzPR4RjWhNSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw0cWqT6%2FzejjcibgKtwDDv137KZPfVFMModmRwS%2FkGayScdRsUIoLcj0xPOjhdmA447KA2d1lvHNYUljQOXgiWW2RhIWXEaMFE4Y6DzUZ6TAtUFDcIHmOk%2F%2FblRirn2hAaFZh%2BQ2GiUAddN9UNO0Ek%2B9x7WWzd525mrWTEl6T6hYaFJxX%2BtqVwAX%2BoF9Y6%2FgpYrYnM3HPEpf01cDZSN4pgdFlmLePJ8JkqGpKQZeKndRpkP02iAwAZVUeL%2F6IOqIixJ%2FSABG2Ryuy6VBGZQ8Q2MQaRzj0mtRUk%2ByRLYRBHs%2F8X23B6vvvyx8PbDScwPQO67%2Fhpa4c4c1ZwH%2BddWpllQvBQt%2BTudL6xCxoEKLfl%2B8VtSnRZGNZnUko4wtnh4Igy0wU0ALq0AarcS%2FSmwUT82erIHuPDFwJ9Ka4VoH68nLlfLnAfqiMSnuGcrZz8YLx%2FH15HCTPj7oRyBQcojP7Sq0gb90m0NDX5q3LnKaZWnB6xUAHidnMxYoD1cAyxajjONGMFL%2FTink6QnPvj1FBve8RyLonv%2F58vw%2B3m8huh2bx%2F%2B6Ok4pUiGDirS3tbz8drSEC5htjtwqASTMqihDmVakvt2sdHuqDOG4sxk07s4Awy7l%2B9F%2F1ygidrvHfL9Rr1pgMVS46h5Ko78w2Ir%2FwAY6pgF8JYPh9tgRTaGfMWHY18Z5IELHEyjlI7BG%2FrEfMHMiU7r%2FT58ys%2Bt5kBe0Qn8wfsWSiyn7XcjOg5yS63QLuo5Jk4%2BUd4N3aPywvxRT4uanKxqpVKAZrL9TxYGfojv1%2FvTU1OZc5KAu7ZZRnkLOzGcvv3w8l2UIRLa%2FtSgFUoCHHus2T7TVdEUFSWvj7lQX9vqYS%2BM7Qs7VZIUB%2F4q5rS8IS7PabuH9&X-Amz-Signature=75001d07ef342f08904fb553c01c8d2eebb232147d7ef2863d4931a17386d2f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4E2BA5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEkiS7lFpJKvz5cljW5esro5rkBVDfHuZQiSvmi6azMsAiAlqxnm0rzq2mnMrrTlCzqXYtW4L%2B7fv0QvzPR4RjWhNSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw0cWqT6%2FzejjcibgKtwDDv137KZPfVFMModmRwS%2FkGayScdRsUIoLcj0xPOjhdmA447KA2d1lvHNYUljQOXgiWW2RhIWXEaMFE4Y6DzUZ6TAtUFDcIHmOk%2F%2FblRirn2hAaFZh%2BQ2GiUAddN9UNO0Ek%2B9x7WWzd525mrWTEl6T6hYaFJxX%2BtqVwAX%2BoF9Y6%2FgpYrYnM3HPEpf01cDZSN4pgdFlmLePJ8JkqGpKQZeKndRpkP02iAwAZVUeL%2F6IOqIixJ%2FSABG2Ryuy6VBGZQ8Q2MQaRzj0mtRUk%2ByRLYRBHs%2F8X23B6vvvyx8PbDScwPQO67%2Fhpa4c4c1ZwH%2BddWpllQvBQt%2BTudL6xCxoEKLfl%2B8VtSnRZGNZnUko4wtnh4Igy0wU0ALq0AarcS%2FSmwUT82erIHuPDFwJ9Ka4VoH68nLlfLnAfqiMSnuGcrZz8YLx%2FH15HCTPj7oRyBQcojP7Sq0gb90m0NDX5q3LnKaZWnB6xUAHidnMxYoD1cAyxajjONGMFL%2FTink6QnPvj1FBve8RyLonv%2F58vw%2B3m8huh2bx%2F%2B6Ok4pUiGDirS3tbz8drSEC5htjtwqASTMqihDmVakvt2sdHuqDOG4sxk07s4Awy7l%2B9F%2F1ygidrvHfL9Rr1pgMVS46h5Ko78w2Ir%2FwAY6pgF8JYPh9tgRTaGfMWHY18Z5IELHEyjlI7BG%2FrEfMHMiU7r%2FT58ys%2Bt5kBe0Qn8wfsWSiyn7XcjOg5yS63QLuo5Jk4%2BUd4N3aPywvxRT4uanKxqpVKAZrL9TxYGfojv1%2FvTU1OZc5KAu7ZZRnkLOzGcvv3w8l2UIRLa%2FtSgFUoCHHus2T7TVdEUFSWvj7lQX9vqYS%2BM7Qs7VZIUB%2F4q5rS8IS7PabuH9&X-Amz-Signature=678b0b8c6dbf90224babd6d963ce93e5f051699d5bf3f651bbcaef2ee1d6df3f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4E2BA5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEkiS7lFpJKvz5cljW5esro5rkBVDfHuZQiSvmi6azMsAiAlqxnm0rzq2mnMrrTlCzqXYtW4L%2B7fv0QvzPR4RjWhNSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw0cWqT6%2FzejjcibgKtwDDv137KZPfVFMModmRwS%2FkGayScdRsUIoLcj0xPOjhdmA447KA2d1lvHNYUljQOXgiWW2RhIWXEaMFE4Y6DzUZ6TAtUFDcIHmOk%2F%2FblRirn2hAaFZh%2BQ2GiUAddN9UNO0Ek%2B9x7WWzd525mrWTEl6T6hYaFJxX%2BtqVwAX%2BoF9Y6%2FgpYrYnM3HPEpf01cDZSN4pgdFlmLePJ8JkqGpKQZeKndRpkP02iAwAZVUeL%2F6IOqIixJ%2FSABG2Ryuy6VBGZQ8Q2MQaRzj0mtRUk%2ByRLYRBHs%2F8X23B6vvvyx8PbDScwPQO67%2Fhpa4c4c1ZwH%2BddWpllQvBQt%2BTudL6xCxoEKLfl%2B8VtSnRZGNZnUko4wtnh4Igy0wU0ALq0AarcS%2FSmwUT82erIHuPDFwJ9Ka4VoH68nLlfLnAfqiMSnuGcrZz8YLx%2FH15HCTPj7oRyBQcojP7Sq0gb90m0NDX5q3LnKaZWnB6xUAHidnMxYoD1cAyxajjONGMFL%2FTink6QnPvj1FBve8RyLonv%2F58vw%2B3m8huh2bx%2F%2B6Ok4pUiGDirS3tbz8drSEC5htjtwqASTMqihDmVakvt2sdHuqDOG4sxk07s4Awy7l%2B9F%2F1ygidrvHfL9Rr1pgMVS46h5Ko78w2Ir%2FwAY6pgF8JYPh9tgRTaGfMWHY18Z5IELHEyjlI7BG%2FrEfMHMiU7r%2FT58ys%2Bt5kBe0Qn8wfsWSiyn7XcjOg5yS63QLuo5Jk4%2BUd4N3aPywvxRT4uanKxqpVKAZrL9TxYGfojv1%2FvTU1OZc5KAu7ZZRnkLOzGcvv3w8l2UIRLa%2FtSgFUoCHHus2T7TVdEUFSWvj7lQX9vqYS%2BM7Qs7VZIUB%2F4q5rS8IS7PabuH9&X-Amz-Signature=e76c8c02a9aa5780ec5b2a1b91b2c1eaab5878e7386a45d7d6798a677c3cf5a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4E2BA5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEkiS7lFpJKvz5cljW5esro5rkBVDfHuZQiSvmi6azMsAiAlqxnm0rzq2mnMrrTlCzqXYtW4L%2B7fv0QvzPR4RjWhNSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw0cWqT6%2FzejjcibgKtwDDv137KZPfVFMModmRwS%2FkGayScdRsUIoLcj0xPOjhdmA447KA2d1lvHNYUljQOXgiWW2RhIWXEaMFE4Y6DzUZ6TAtUFDcIHmOk%2F%2FblRirn2hAaFZh%2BQ2GiUAddN9UNO0Ek%2B9x7WWzd525mrWTEl6T6hYaFJxX%2BtqVwAX%2BoF9Y6%2FgpYrYnM3HPEpf01cDZSN4pgdFlmLePJ8JkqGpKQZeKndRpkP02iAwAZVUeL%2F6IOqIixJ%2FSABG2Ryuy6VBGZQ8Q2MQaRzj0mtRUk%2ByRLYRBHs%2F8X23B6vvvyx8PbDScwPQO67%2Fhpa4c4c1ZwH%2BddWpllQvBQt%2BTudL6xCxoEKLfl%2B8VtSnRZGNZnUko4wtnh4Igy0wU0ALq0AarcS%2FSmwUT82erIHuPDFwJ9Ka4VoH68nLlfLnAfqiMSnuGcrZz8YLx%2FH15HCTPj7oRyBQcojP7Sq0gb90m0NDX5q3LnKaZWnB6xUAHidnMxYoD1cAyxajjONGMFL%2FTink6QnPvj1FBve8RyLonv%2F58vw%2B3m8huh2bx%2F%2B6Ok4pUiGDirS3tbz8drSEC5htjtwqASTMqihDmVakvt2sdHuqDOG4sxk07s4Awy7l%2B9F%2F1ygidrvHfL9Rr1pgMVS46h5Ko78w2Ir%2FwAY6pgF8JYPh9tgRTaGfMWHY18Z5IELHEyjlI7BG%2FrEfMHMiU7r%2FT58ys%2Bt5kBe0Qn8wfsWSiyn7XcjOg5yS63QLuo5Jk4%2BUd4N3aPywvxRT4uanKxqpVKAZrL9TxYGfojv1%2FvTU1OZc5KAu7ZZRnkLOzGcvv3w8l2UIRLa%2FtSgFUoCHHus2T7TVdEUFSWvj7lQX9vqYS%2BM7Qs7VZIUB%2F4q5rS8IS7PabuH9&X-Amz-Signature=4b0797bf6847fe884a3eb649f7ef2c69e7b2e36039e0cd5da6dfc3673b3f7c81&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4E2BA5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEkiS7lFpJKvz5cljW5esro5rkBVDfHuZQiSvmi6azMsAiAlqxnm0rzq2mnMrrTlCzqXYtW4L%2B7fv0QvzPR4RjWhNSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw0cWqT6%2FzejjcibgKtwDDv137KZPfVFMModmRwS%2FkGayScdRsUIoLcj0xPOjhdmA447KA2d1lvHNYUljQOXgiWW2RhIWXEaMFE4Y6DzUZ6TAtUFDcIHmOk%2F%2FblRirn2hAaFZh%2BQ2GiUAddN9UNO0Ek%2B9x7WWzd525mrWTEl6T6hYaFJxX%2BtqVwAX%2BoF9Y6%2FgpYrYnM3HPEpf01cDZSN4pgdFlmLePJ8JkqGpKQZeKndRpkP02iAwAZVUeL%2F6IOqIixJ%2FSABG2Ryuy6VBGZQ8Q2MQaRzj0mtRUk%2ByRLYRBHs%2F8X23B6vvvyx8PbDScwPQO67%2Fhpa4c4c1ZwH%2BddWpllQvBQt%2BTudL6xCxoEKLfl%2B8VtSnRZGNZnUko4wtnh4Igy0wU0ALq0AarcS%2FSmwUT82erIHuPDFwJ9Ka4VoH68nLlfLnAfqiMSnuGcrZz8YLx%2FH15HCTPj7oRyBQcojP7Sq0gb90m0NDX5q3LnKaZWnB6xUAHidnMxYoD1cAyxajjONGMFL%2FTink6QnPvj1FBve8RyLonv%2F58vw%2B3m8huh2bx%2F%2B6Ok4pUiGDirS3tbz8drSEC5htjtwqASTMqihDmVakvt2sdHuqDOG4sxk07s4Awy7l%2B9F%2F1ygidrvHfL9Rr1pgMVS46h5Ko78w2Ir%2FwAY6pgF8JYPh9tgRTaGfMWHY18Z5IELHEyjlI7BG%2FrEfMHMiU7r%2FT58ys%2Bt5kBe0Qn8wfsWSiyn7XcjOg5yS63QLuo5Jk4%2BUd4N3aPywvxRT4uanKxqpVKAZrL9TxYGfojv1%2FvTU1OZc5KAu7ZZRnkLOzGcvv3w8l2UIRLa%2FtSgFUoCHHus2T7TVdEUFSWvj7lQX9vqYS%2BM7Qs7VZIUB%2F4q5rS8IS7PabuH9&X-Amz-Signature=05df34f2ae9b1e9a6f1a33bbd0c85f933ec937ff20171dec5e1f22358d193fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4E2BA5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEkiS7lFpJKvz5cljW5esro5rkBVDfHuZQiSvmi6azMsAiAlqxnm0rzq2mnMrrTlCzqXYtW4L%2B7fv0QvzPR4RjWhNSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw0cWqT6%2FzejjcibgKtwDDv137KZPfVFMModmRwS%2FkGayScdRsUIoLcj0xPOjhdmA447KA2d1lvHNYUljQOXgiWW2RhIWXEaMFE4Y6DzUZ6TAtUFDcIHmOk%2F%2FblRirn2hAaFZh%2BQ2GiUAddN9UNO0Ek%2B9x7WWzd525mrWTEl6T6hYaFJxX%2BtqVwAX%2BoF9Y6%2FgpYrYnM3HPEpf01cDZSN4pgdFlmLePJ8JkqGpKQZeKndRpkP02iAwAZVUeL%2F6IOqIixJ%2FSABG2Ryuy6VBGZQ8Q2MQaRzj0mtRUk%2ByRLYRBHs%2F8X23B6vvvyx8PbDScwPQO67%2Fhpa4c4c1ZwH%2BddWpllQvBQt%2BTudL6xCxoEKLfl%2B8VtSnRZGNZnUko4wtnh4Igy0wU0ALq0AarcS%2FSmwUT82erIHuPDFwJ9Ka4VoH68nLlfLnAfqiMSnuGcrZz8YLx%2FH15HCTPj7oRyBQcojP7Sq0gb90m0NDX5q3LnKaZWnB6xUAHidnMxYoD1cAyxajjONGMFL%2FTink6QnPvj1FBve8RyLonv%2F58vw%2B3m8huh2bx%2F%2B6Ok4pUiGDirS3tbz8drSEC5htjtwqASTMqihDmVakvt2sdHuqDOG4sxk07s4Awy7l%2B9F%2F1ygidrvHfL9Rr1pgMVS46h5Ko78w2Ir%2FwAY6pgF8JYPh9tgRTaGfMWHY18Z5IELHEyjlI7BG%2FrEfMHMiU7r%2FT58ys%2Bt5kBe0Qn8wfsWSiyn7XcjOg5yS63QLuo5Jk4%2BUd4N3aPywvxRT4uanKxqpVKAZrL9TxYGfojv1%2FvTU1OZc5KAu7ZZRnkLOzGcvv3w8l2UIRLa%2FtSgFUoCHHus2T7TVdEUFSWvj7lQX9vqYS%2BM7Qs7VZIUB%2F4q5rS8IS7PabuH9&X-Amz-Signature=4488270e0612df5ce1199625e319eb143287441ea69064efed2df20f7dab1b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4E2BA5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEkiS7lFpJKvz5cljW5esro5rkBVDfHuZQiSvmi6azMsAiAlqxnm0rzq2mnMrrTlCzqXYtW4L%2B7fv0QvzPR4RjWhNSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw0cWqT6%2FzejjcibgKtwDDv137KZPfVFMModmRwS%2FkGayScdRsUIoLcj0xPOjhdmA447KA2d1lvHNYUljQOXgiWW2RhIWXEaMFE4Y6DzUZ6TAtUFDcIHmOk%2F%2FblRirn2hAaFZh%2BQ2GiUAddN9UNO0Ek%2B9x7WWzd525mrWTEl6T6hYaFJxX%2BtqVwAX%2BoF9Y6%2FgpYrYnM3HPEpf01cDZSN4pgdFlmLePJ8JkqGpKQZeKndRpkP02iAwAZVUeL%2F6IOqIixJ%2FSABG2Ryuy6VBGZQ8Q2MQaRzj0mtRUk%2ByRLYRBHs%2F8X23B6vvvyx8PbDScwPQO67%2Fhpa4c4c1ZwH%2BddWpllQvBQt%2BTudL6xCxoEKLfl%2B8VtSnRZGNZnUko4wtnh4Igy0wU0ALq0AarcS%2FSmwUT82erIHuPDFwJ9Ka4VoH68nLlfLnAfqiMSnuGcrZz8YLx%2FH15HCTPj7oRyBQcojP7Sq0gb90m0NDX5q3LnKaZWnB6xUAHidnMxYoD1cAyxajjONGMFL%2FTink6QnPvj1FBve8RyLonv%2F58vw%2B3m8huh2bx%2F%2B6Ok4pUiGDirS3tbz8drSEC5htjtwqASTMqihDmVakvt2sdHuqDOG4sxk07s4Awy7l%2B9F%2F1ygidrvHfL9Rr1pgMVS46h5Ko78w2Ir%2FwAY6pgF8JYPh9tgRTaGfMWHY18Z5IELHEyjlI7BG%2FrEfMHMiU7r%2FT58ys%2Bt5kBe0Qn8wfsWSiyn7XcjOg5yS63QLuo5Jk4%2BUd4N3aPywvxRT4uanKxqpVKAZrL9TxYGfojv1%2FvTU1OZc5KAu7ZZRnkLOzGcvv3w8l2UIRLa%2FtSgFUoCHHus2T7TVdEUFSWvj7lQX9vqYS%2BM7Qs7VZIUB%2F4q5rS8IS7PabuH9&X-Amz-Signature=85b96d9470dc57f3687efd1dca4f57fc906a077ec607d072e25a670c14db01b1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
