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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODTKJN5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIByGq28e9rCPLhI1K89biTle02Wljxh358343UwD5V0%2BAiB%2FlxnFBVDoRoCv3Wc7Uk6tBD15%2F3YNC70UkplJ8kxCPSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGLmhDB4NLyE5WA5KtwDf2E8Jq1RZ78myBVYwanP83%2FIQ3bTHVK7P8LoY5vd%2FOMRLyJL6oNqg6Me0JQkjexxndj%2B%2F%2BtPRfaR32AQ2Mz%2B1XZYVjzDec38dn5Z0MY6f37tBggNSVtI9izMo6wlj7nz2OmC313woUkbZ2184IujTQ%2BS2eIsQMk92TJJ3cM6jdQhCrApcZxgFY%2F%2B5oGw7YjxI2bihecIhq8TaPBvVorJ7T34wZhjDMcto4DNikaJx4ezVOl5byC1sO8jkr%2FVjifShWONYgphroeWlNQEperWb3T3FPseo%2BB09nvro0YPQGv%2FTYMHa5U%2FpQrD6zFwCsnb7StLJ6OaJiVaybKLW23ZbrfInGRZ3rtFNU5fQTw2tOpHK9B58l%2Fgdbdl5iS%2B8mpuYEGk8E2SJkYdfJBD9b8tBUqXn7TtFq%2F9puUencmYdvbc3PQKhYveizrzyAelCc05okzm3exDkiftvVO3pwYxLfja7kNceeUYEZVQ1ojunBIAEf9oQU2pssx7RXiBd38Wdt5Bfx8lxivSUyJVHvgJsZeHa49uTQ6QHemFcEPV04s8NLiis%2Bhl0PsdSSaz5KL1gBY8P1SPTh8EkIkElausQdQCmhauUiUZjBgJWpHltcbuYP%2FXhxIYG1HSSugw9df3vgY6pgFOHMee0uagaerUuyPV5Wxe%2B2ISZu3wZ4x9ReO%2BxizMHOr%2F736td8DJ7XD2Bu2CvU2Y3Lr80wNt%2Bkq%2FQ9bxP17j9nIdoCckAMOTdy8IFwTUuZEA%2FgoGwLAYeUroLSq4NMQLNKdifkt1WPXYBiygMngyz8fEJqfkRnALJF1WwJ0HG3%2FGK%2BAIS2SVTWzPzdcrr3IPj8FYAYsBemyiFPtSB28xFx%2ByyysI&X-Amz-Signature=4eb83b3ae3e10651ac5a6ddb4c198a8a0571b0d82cc8aa0d86ca20923d7e2f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODTKJN5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIByGq28e9rCPLhI1K89biTle02Wljxh358343UwD5V0%2BAiB%2FlxnFBVDoRoCv3Wc7Uk6tBD15%2F3YNC70UkplJ8kxCPSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGLmhDB4NLyE5WA5KtwDf2E8Jq1RZ78myBVYwanP83%2FIQ3bTHVK7P8LoY5vd%2FOMRLyJL6oNqg6Me0JQkjexxndj%2B%2F%2BtPRfaR32AQ2Mz%2B1XZYVjzDec38dn5Z0MY6f37tBggNSVtI9izMo6wlj7nz2OmC313woUkbZ2184IujTQ%2BS2eIsQMk92TJJ3cM6jdQhCrApcZxgFY%2F%2B5oGw7YjxI2bihecIhq8TaPBvVorJ7T34wZhjDMcto4DNikaJx4ezVOl5byC1sO8jkr%2FVjifShWONYgphroeWlNQEperWb3T3FPseo%2BB09nvro0YPQGv%2FTYMHa5U%2FpQrD6zFwCsnb7StLJ6OaJiVaybKLW23ZbrfInGRZ3rtFNU5fQTw2tOpHK9B58l%2Fgdbdl5iS%2B8mpuYEGk8E2SJkYdfJBD9b8tBUqXn7TtFq%2F9puUencmYdvbc3PQKhYveizrzyAelCc05okzm3exDkiftvVO3pwYxLfja7kNceeUYEZVQ1ojunBIAEf9oQU2pssx7RXiBd38Wdt5Bfx8lxivSUyJVHvgJsZeHa49uTQ6QHemFcEPV04s8NLiis%2Bhl0PsdSSaz5KL1gBY8P1SPTh8EkIkElausQdQCmhauUiUZjBgJWpHltcbuYP%2FXhxIYG1HSSugw9df3vgY6pgFOHMee0uagaerUuyPV5Wxe%2B2ISZu3wZ4x9ReO%2BxizMHOr%2F736td8DJ7XD2Bu2CvU2Y3Lr80wNt%2Bkq%2FQ9bxP17j9nIdoCckAMOTdy8IFwTUuZEA%2FgoGwLAYeUroLSq4NMQLNKdifkt1WPXYBiygMngyz8fEJqfkRnALJF1WwJ0HG3%2FGK%2BAIS2SVTWzPzdcrr3IPj8FYAYsBemyiFPtSB28xFx%2ByyysI&X-Amz-Signature=ab30b235c86865df0e44ed402664ffd99e8eecaed2063538c46fc9fbc474f4c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODTKJN5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIByGq28e9rCPLhI1K89biTle02Wljxh358343UwD5V0%2BAiB%2FlxnFBVDoRoCv3Wc7Uk6tBD15%2F3YNC70UkplJ8kxCPSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGLmhDB4NLyE5WA5KtwDf2E8Jq1RZ78myBVYwanP83%2FIQ3bTHVK7P8LoY5vd%2FOMRLyJL6oNqg6Me0JQkjexxndj%2B%2F%2BtPRfaR32AQ2Mz%2B1XZYVjzDec38dn5Z0MY6f37tBggNSVtI9izMo6wlj7nz2OmC313woUkbZ2184IujTQ%2BS2eIsQMk92TJJ3cM6jdQhCrApcZxgFY%2F%2B5oGw7YjxI2bihecIhq8TaPBvVorJ7T34wZhjDMcto4DNikaJx4ezVOl5byC1sO8jkr%2FVjifShWONYgphroeWlNQEperWb3T3FPseo%2BB09nvro0YPQGv%2FTYMHa5U%2FpQrD6zFwCsnb7StLJ6OaJiVaybKLW23ZbrfInGRZ3rtFNU5fQTw2tOpHK9B58l%2Fgdbdl5iS%2B8mpuYEGk8E2SJkYdfJBD9b8tBUqXn7TtFq%2F9puUencmYdvbc3PQKhYveizrzyAelCc05okzm3exDkiftvVO3pwYxLfja7kNceeUYEZVQ1ojunBIAEf9oQU2pssx7RXiBd38Wdt5Bfx8lxivSUyJVHvgJsZeHa49uTQ6QHemFcEPV04s8NLiis%2Bhl0PsdSSaz5KL1gBY8P1SPTh8EkIkElausQdQCmhauUiUZjBgJWpHltcbuYP%2FXhxIYG1HSSugw9df3vgY6pgFOHMee0uagaerUuyPV5Wxe%2B2ISZu3wZ4x9ReO%2BxizMHOr%2F736td8DJ7XD2Bu2CvU2Y3Lr80wNt%2Bkq%2FQ9bxP17j9nIdoCckAMOTdy8IFwTUuZEA%2FgoGwLAYeUroLSq4NMQLNKdifkt1WPXYBiygMngyz8fEJqfkRnALJF1WwJ0HG3%2FGK%2BAIS2SVTWzPzdcrr3IPj8FYAYsBemyiFPtSB28xFx%2ByyysI&X-Amz-Signature=9475619fbe7076446513749d75f0bbc5f02de3ca91b9adc4762ea025b43b8dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODTKJN5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIByGq28e9rCPLhI1K89biTle02Wljxh358343UwD5V0%2BAiB%2FlxnFBVDoRoCv3Wc7Uk6tBD15%2F3YNC70UkplJ8kxCPSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGLmhDB4NLyE5WA5KtwDf2E8Jq1RZ78myBVYwanP83%2FIQ3bTHVK7P8LoY5vd%2FOMRLyJL6oNqg6Me0JQkjexxndj%2B%2F%2BtPRfaR32AQ2Mz%2B1XZYVjzDec38dn5Z0MY6f37tBggNSVtI9izMo6wlj7nz2OmC313woUkbZ2184IujTQ%2BS2eIsQMk92TJJ3cM6jdQhCrApcZxgFY%2F%2B5oGw7YjxI2bihecIhq8TaPBvVorJ7T34wZhjDMcto4DNikaJx4ezVOl5byC1sO8jkr%2FVjifShWONYgphroeWlNQEperWb3T3FPseo%2BB09nvro0YPQGv%2FTYMHa5U%2FpQrD6zFwCsnb7StLJ6OaJiVaybKLW23ZbrfInGRZ3rtFNU5fQTw2tOpHK9B58l%2Fgdbdl5iS%2B8mpuYEGk8E2SJkYdfJBD9b8tBUqXn7TtFq%2F9puUencmYdvbc3PQKhYveizrzyAelCc05okzm3exDkiftvVO3pwYxLfja7kNceeUYEZVQ1ojunBIAEf9oQU2pssx7RXiBd38Wdt5Bfx8lxivSUyJVHvgJsZeHa49uTQ6QHemFcEPV04s8NLiis%2Bhl0PsdSSaz5KL1gBY8P1SPTh8EkIkElausQdQCmhauUiUZjBgJWpHltcbuYP%2FXhxIYG1HSSugw9df3vgY6pgFOHMee0uagaerUuyPV5Wxe%2B2ISZu3wZ4x9ReO%2BxizMHOr%2F736td8DJ7XD2Bu2CvU2Y3Lr80wNt%2Bkq%2FQ9bxP17j9nIdoCckAMOTdy8IFwTUuZEA%2FgoGwLAYeUroLSq4NMQLNKdifkt1WPXYBiygMngyz8fEJqfkRnALJF1WwJ0HG3%2FGK%2BAIS2SVTWzPzdcrr3IPj8FYAYsBemyiFPtSB28xFx%2ByyysI&X-Amz-Signature=daaad6640bb31e66f4977ee46852b03e13560011c5c32709693940f151dcbf1b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODTKJN5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIByGq28e9rCPLhI1K89biTle02Wljxh358343UwD5V0%2BAiB%2FlxnFBVDoRoCv3Wc7Uk6tBD15%2F3YNC70UkplJ8kxCPSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGLmhDB4NLyE5WA5KtwDf2E8Jq1RZ78myBVYwanP83%2FIQ3bTHVK7P8LoY5vd%2FOMRLyJL6oNqg6Me0JQkjexxndj%2B%2F%2BtPRfaR32AQ2Mz%2B1XZYVjzDec38dn5Z0MY6f37tBggNSVtI9izMo6wlj7nz2OmC313woUkbZ2184IujTQ%2BS2eIsQMk92TJJ3cM6jdQhCrApcZxgFY%2F%2B5oGw7YjxI2bihecIhq8TaPBvVorJ7T34wZhjDMcto4DNikaJx4ezVOl5byC1sO8jkr%2FVjifShWONYgphroeWlNQEperWb3T3FPseo%2BB09nvro0YPQGv%2FTYMHa5U%2FpQrD6zFwCsnb7StLJ6OaJiVaybKLW23ZbrfInGRZ3rtFNU5fQTw2tOpHK9B58l%2Fgdbdl5iS%2B8mpuYEGk8E2SJkYdfJBD9b8tBUqXn7TtFq%2F9puUencmYdvbc3PQKhYveizrzyAelCc05okzm3exDkiftvVO3pwYxLfja7kNceeUYEZVQ1ojunBIAEf9oQU2pssx7RXiBd38Wdt5Bfx8lxivSUyJVHvgJsZeHa49uTQ6QHemFcEPV04s8NLiis%2Bhl0PsdSSaz5KL1gBY8P1SPTh8EkIkElausQdQCmhauUiUZjBgJWpHltcbuYP%2FXhxIYG1HSSugw9df3vgY6pgFOHMee0uagaerUuyPV5Wxe%2B2ISZu3wZ4x9ReO%2BxizMHOr%2F736td8DJ7XD2Bu2CvU2Y3Lr80wNt%2Bkq%2FQ9bxP17j9nIdoCckAMOTdy8IFwTUuZEA%2FgoGwLAYeUroLSq4NMQLNKdifkt1WPXYBiygMngyz8fEJqfkRnALJF1WwJ0HG3%2FGK%2BAIS2SVTWzPzdcrr3IPj8FYAYsBemyiFPtSB28xFx%2ByyysI&X-Amz-Signature=3a78f9b0216843dc12ec93f10c53aed96da3da89bea7e89b48e33e30ba3d9677&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODTKJN5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIByGq28e9rCPLhI1K89biTle02Wljxh358343UwD5V0%2BAiB%2FlxnFBVDoRoCv3Wc7Uk6tBD15%2F3YNC70UkplJ8kxCPSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGLmhDB4NLyE5WA5KtwDf2E8Jq1RZ78myBVYwanP83%2FIQ3bTHVK7P8LoY5vd%2FOMRLyJL6oNqg6Me0JQkjexxndj%2B%2F%2BtPRfaR32AQ2Mz%2B1XZYVjzDec38dn5Z0MY6f37tBggNSVtI9izMo6wlj7nz2OmC313woUkbZ2184IujTQ%2BS2eIsQMk92TJJ3cM6jdQhCrApcZxgFY%2F%2B5oGw7YjxI2bihecIhq8TaPBvVorJ7T34wZhjDMcto4DNikaJx4ezVOl5byC1sO8jkr%2FVjifShWONYgphroeWlNQEperWb3T3FPseo%2BB09nvro0YPQGv%2FTYMHa5U%2FpQrD6zFwCsnb7StLJ6OaJiVaybKLW23ZbrfInGRZ3rtFNU5fQTw2tOpHK9B58l%2Fgdbdl5iS%2B8mpuYEGk8E2SJkYdfJBD9b8tBUqXn7TtFq%2F9puUencmYdvbc3PQKhYveizrzyAelCc05okzm3exDkiftvVO3pwYxLfja7kNceeUYEZVQ1ojunBIAEf9oQU2pssx7RXiBd38Wdt5Bfx8lxivSUyJVHvgJsZeHa49uTQ6QHemFcEPV04s8NLiis%2Bhl0PsdSSaz5KL1gBY8P1SPTh8EkIkElausQdQCmhauUiUZjBgJWpHltcbuYP%2FXhxIYG1HSSugw9df3vgY6pgFOHMee0uagaerUuyPV5Wxe%2B2ISZu3wZ4x9ReO%2BxizMHOr%2F736td8DJ7XD2Bu2CvU2Y3Lr80wNt%2Bkq%2FQ9bxP17j9nIdoCckAMOTdy8IFwTUuZEA%2FgoGwLAYeUroLSq4NMQLNKdifkt1WPXYBiygMngyz8fEJqfkRnALJF1WwJ0HG3%2FGK%2BAIS2SVTWzPzdcrr3IPj8FYAYsBemyiFPtSB28xFx%2ByyysI&X-Amz-Signature=6888d73b24ed2c4f60003193d5fc8e7086316e89ccb6a669a5d6bd2ab1a1026a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODTKJN5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIByGq28e9rCPLhI1K89biTle02Wljxh358343UwD5V0%2BAiB%2FlxnFBVDoRoCv3Wc7Uk6tBD15%2F3YNC70UkplJ8kxCPSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGLmhDB4NLyE5WA5KtwDf2E8Jq1RZ78myBVYwanP83%2FIQ3bTHVK7P8LoY5vd%2FOMRLyJL6oNqg6Me0JQkjexxndj%2B%2F%2BtPRfaR32AQ2Mz%2B1XZYVjzDec38dn5Z0MY6f37tBggNSVtI9izMo6wlj7nz2OmC313woUkbZ2184IujTQ%2BS2eIsQMk92TJJ3cM6jdQhCrApcZxgFY%2F%2B5oGw7YjxI2bihecIhq8TaPBvVorJ7T34wZhjDMcto4DNikaJx4ezVOl5byC1sO8jkr%2FVjifShWONYgphroeWlNQEperWb3T3FPseo%2BB09nvro0YPQGv%2FTYMHa5U%2FpQrD6zFwCsnb7StLJ6OaJiVaybKLW23ZbrfInGRZ3rtFNU5fQTw2tOpHK9B58l%2Fgdbdl5iS%2B8mpuYEGk8E2SJkYdfJBD9b8tBUqXn7TtFq%2F9puUencmYdvbc3PQKhYveizrzyAelCc05okzm3exDkiftvVO3pwYxLfja7kNceeUYEZVQ1ojunBIAEf9oQU2pssx7RXiBd38Wdt5Bfx8lxivSUyJVHvgJsZeHa49uTQ6QHemFcEPV04s8NLiis%2Bhl0PsdSSaz5KL1gBY8P1SPTh8EkIkElausQdQCmhauUiUZjBgJWpHltcbuYP%2FXhxIYG1HSSugw9df3vgY6pgFOHMee0uagaerUuyPV5Wxe%2B2ISZu3wZ4x9ReO%2BxizMHOr%2F736td8DJ7XD2Bu2CvU2Y3Lr80wNt%2Bkq%2FQ9bxP17j9nIdoCckAMOTdy8IFwTUuZEA%2FgoGwLAYeUroLSq4NMQLNKdifkt1WPXYBiygMngyz8fEJqfkRnALJF1WwJ0HG3%2FGK%2BAIS2SVTWzPzdcrr3IPj8FYAYsBemyiFPtSB28xFx%2ByyysI&X-Amz-Signature=6b86947af99bd1b368e47a8f0192b7663c5303012b8d6148b30eac93adc5d8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
