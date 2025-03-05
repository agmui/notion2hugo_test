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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HIX4LC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9TcOJOo1pTRw%2FqNsMSQDhE5epV8UKIcxE7HrXQlOaqAIgJZgDUEB7HNcesyst%2BTAPBh%2BXtHbSbUHm014sGUfuQUIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOSvjOOZmWnASfmR5CrcA5zC6Gve%2BGKr4nM3IbIk3yAdDCsNfXavF9Op17JcNezukVym2dUy6LeODtfar682lJOYcJnCBJ1atmQzByi1BHDfR9K30Hdv7oHzSzTgKSDg%2BZP%2B78R8yOefp4A40sEpt21YOV7I15OXb8CK4qSuETnR4d4Yc84Gg%2BoZavKoDHhg%2B5l7ZI52F0ZrwqeVOXdrEliNk%2BroYJLDgJp7JUdlMbIm%2BF7jM0JWoOLtsQQ3ZBtNehQ7rS3lYwMdi4iV5B%2Bg3R49dnJAsA4tklc19gAKufEYwLJrySlcEMDu5xFyiFb%2BmGg6mmrXSKtS5MrbRiuTfpJKnou2dQrQabq%2FHBWqigq%2B4u0yAkyyYBw3w7LizWXP%2B%2F1LkPgXXMmW8UCRsEyuVsMHw%2Bg7WTXe2JUz6icRD62T74615pAbKqKQIAEyq%2Bwp5JvzsEghWUKGb%2F%2Bkwvgjv37X5aGNgIgnos81XIdpYu53kOh7dqSv2f9A%2FVFY%2FGikiFG7347CqkO7O3nWZo4yO1S2gz5K1pHgIzGBdC08Z10tId76AICX4Oy9V6sRDWpQLW%2BLElNS%2BpfeqZ8aSGtnMiGfkXdIg3YmfACvemQ964HvwS4ZotoqSInqvGqiNpZwZbkrN6y3zqu6i%2BW%2FMPD0oL4GOqUByXbqzTwmXMYvGZpOkrTgCqpLN7Y2TfeFd2URyanSEqnCfIYLQ4oRIcqio9YX8Lq5eLc135f%2BDbSf0mq6dMcnCtbFru8iiqTG%2FVEsdpbLLusndMlSe1C6WOxl%2F4%2FtBH%2Fe9z2WHCdjAYA2EYAJ2W0QQKnbXND19UiVmjlVNixNBMthYKvxP4o4TElGKGsYUgFYI5Fk%2BMCHQV%2FHBwtqJ4q4KDG0SEey&X-Amz-Signature=6dd193fac2ed6acc1ba2209833c9aebfd1d7924ac1c3ccaf8982d51c28f1941c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HIX4LC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9TcOJOo1pTRw%2FqNsMSQDhE5epV8UKIcxE7HrXQlOaqAIgJZgDUEB7HNcesyst%2BTAPBh%2BXtHbSbUHm014sGUfuQUIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOSvjOOZmWnASfmR5CrcA5zC6Gve%2BGKr4nM3IbIk3yAdDCsNfXavF9Op17JcNezukVym2dUy6LeODtfar682lJOYcJnCBJ1atmQzByi1BHDfR9K30Hdv7oHzSzTgKSDg%2BZP%2B78R8yOefp4A40sEpt21YOV7I15OXb8CK4qSuETnR4d4Yc84Gg%2BoZavKoDHhg%2B5l7ZI52F0ZrwqeVOXdrEliNk%2BroYJLDgJp7JUdlMbIm%2BF7jM0JWoOLtsQQ3ZBtNehQ7rS3lYwMdi4iV5B%2Bg3R49dnJAsA4tklc19gAKufEYwLJrySlcEMDu5xFyiFb%2BmGg6mmrXSKtS5MrbRiuTfpJKnou2dQrQabq%2FHBWqigq%2B4u0yAkyyYBw3w7LizWXP%2B%2F1LkPgXXMmW8UCRsEyuVsMHw%2Bg7WTXe2JUz6icRD62T74615pAbKqKQIAEyq%2Bwp5JvzsEghWUKGb%2F%2Bkwvgjv37X5aGNgIgnos81XIdpYu53kOh7dqSv2f9A%2FVFY%2FGikiFG7347CqkO7O3nWZo4yO1S2gz5K1pHgIzGBdC08Z10tId76AICX4Oy9V6sRDWpQLW%2BLElNS%2BpfeqZ8aSGtnMiGfkXdIg3YmfACvemQ964HvwS4ZotoqSInqvGqiNpZwZbkrN6y3zqu6i%2BW%2FMPD0oL4GOqUByXbqzTwmXMYvGZpOkrTgCqpLN7Y2TfeFd2URyanSEqnCfIYLQ4oRIcqio9YX8Lq5eLc135f%2BDbSf0mq6dMcnCtbFru8iiqTG%2FVEsdpbLLusndMlSe1C6WOxl%2F4%2FtBH%2Fe9z2WHCdjAYA2EYAJ2W0QQKnbXND19UiVmjlVNixNBMthYKvxP4o4TElGKGsYUgFYI5Fk%2BMCHQV%2FHBwtqJ4q4KDG0SEey&X-Amz-Signature=3507da0efff5cf2ab341e6fce1d008167f1e24f9bddd295dcb5b172127b0965a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HIX4LC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9TcOJOo1pTRw%2FqNsMSQDhE5epV8UKIcxE7HrXQlOaqAIgJZgDUEB7HNcesyst%2BTAPBh%2BXtHbSbUHm014sGUfuQUIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOSvjOOZmWnASfmR5CrcA5zC6Gve%2BGKr4nM3IbIk3yAdDCsNfXavF9Op17JcNezukVym2dUy6LeODtfar682lJOYcJnCBJ1atmQzByi1BHDfR9K30Hdv7oHzSzTgKSDg%2BZP%2B78R8yOefp4A40sEpt21YOV7I15OXb8CK4qSuETnR4d4Yc84Gg%2BoZavKoDHhg%2B5l7ZI52F0ZrwqeVOXdrEliNk%2BroYJLDgJp7JUdlMbIm%2BF7jM0JWoOLtsQQ3ZBtNehQ7rS3lYwMdi4iV5B%2Bg3R49dnJAsA4tklc19gAKufEYwLJrySlcEMDu5xFyiFb%2BmGg6mmrXSKtS5MrbRiuTfpJKnou2dQrQabq%2FHBWqigq%2B4u0yAkyyYBw3w7LizWXP%2B%2F1LkPgXXMmW8UCRsEyuVsMHw%2Bg7WTXe2JUz6icRD62T74615pAbKqKQIAEyq%2Bwp5JvzsEghWUKGb%2F%2Bkwvgjv37X5aGNgIgnos81XIdpYu53kOh7dqSv2f9A%2FVFY%2FGikiFG7347CqkO7O3nWZo4yO1S2gz5K1pHgIzGBdC08Z10tId76AICX4Oy9V6sRDWpQLW%2BLElNS%2BpfeqZ8aSGtnMiGfkXdIg3YmfACvemQ964HvwS4ZotoqSInqvGqiNpZwZbkrN6y3zqu6i%2BW%2FMPD0oL4GOqUByXbqzTwmXMYvGZpOkrTgCqpLN7Y2TfeFd2URyanSEqnCfIYLQ4oRIcqio9YX8Lq5eLc135f%2BDbSf0mq6dMcnCtbFru8iiqTG%2FVEsdpbLLusndMlSe1C6WOxl%2F4%2FtBH%2Fe9z2WHCdjAYA2EYAJ2W0QQKnbXND19UiVmjlVNixNBMthYKvxP4o4TElGKGsYUgFYI5Fk%2BMCHQV%2FHBwtqJ4q4KDG0SEey&X-Amz-Signature=d5f50586b3e841c2268dd5d953c68d1ff48f428ae66658dd89c87eabc69b9be5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HIX4LC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9TcOJOo1pTRw%2FqNsMSQDhE5epV8UKIcxE7HrXQlOaqAIgJZgDUEB7HNcesyst%2BTAPBh%2BXtHbSbUHm014sGUfuQUIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOSvjOOZmWnASfmR5CrcA5zC6Gve%2BGKr4nM3IbIk3yAdDCsNfXavF9Op17JcNezukVym2dUy6LeODtfar682lJOYcJnCBJ1atmQzByi1BHDfR9K30Hdv7oHzSzTgKSDg%2BZP%2B78R8yOefp4A40sEpt21YOV7I15OXb8CK4qSuETnR4d4Yc84Gg%2BoZavKoDHhg%2B5l7ZI52F0ZrwqeVOXdrEliNk%2BroYJLDgJp7JUdlMbIm%2BF7jM0JWoOLtsQQ3ZBtNehQ7rS3lYwMdi4iV5B%2Bg3R49dnJAsA4tklc19gAKufEYwLJrySlcEMDu5xFyiFb%2BmGg6mmrXSKtS5MrbRiuTfpJKnou2dQrQabq%2FHBWqigq%2B4u0yAkyyYBw3w7LizWXP%2B%2F1LkPgXXMmW8UCRsEyuVsMHw%2Bg7WTXe2JUz6icRD62T74615pAbKqKQIAEyq%2Bwp5JvzsEghWUKGb%2F%2Bkwvgjv37X5aGNgIgnos81XIdpYu53kOh7dqSv2f9A%2FVFY%2FGikiFG7347CqkO7O3nWZo4yO1S2gz5K1pHgIzGBdC08Z10tId76AICX4Oy9V6sRDWpQLW%2BLElNS%2BpfeqZ8aSGtnMiGfkXdIg3YmfACvemQ964HvwS4ZotoqSInqvGqiNpZwZbkrN6y3zqu6i%2BW%2FMPD0oL4GOqUByXbqzTwmXMYvGZpOkrTgCqpLN7Y2TfeFd2URyanSEqnCfIYLQ4oRIcqio9YX8Lq5eLc135f%2BDbSf0mq6dMcnCtbFru8iiqTG%2FVEsdpbLLusndMlSe1C6WOxl%2F4%2FtBH%2Fe9z2WHCdjAYA2EYAJ2W0QQKnbXND19UiVmjlVNixNBMthYKvxP4o4TElGKGsYUgFYI5Fk%2BMCHQV%2FHBwtqJ4q4KDG0SEey&X-Amz-Signature=4b3876be50ed275617a66f76f1866554fbcd8439023182bc4aa84e8aae17778b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HIX4LC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9TcOJOo1pTRw%2FqNsMSQDhE5epV8UKIcxE7HrXQlOaqAIgJZgDUEB7HNcesyst%2BTAPBh%2BXtHbSbUHm014sGUfuQUIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOSvjOOZmWnASfmR5CrcA5zC6Gve%2BGKr4nM3IbIk3yAdDCsNfXavF9Op17JcNezukVym2dUy6LeODtfar682lJOYcJnCBJ1atmQzByi1BHDfR9K30Hdv7oHzSzTgKSDg%2BZP%2B78R8yOefp4A40sEpt21YOV7I15OXb8CK4qSuETnR4d4Yc84Gg%2BoZavKoDHhg%2B5l7ZI52F0ZrwqeVOXdrEliNk%2BroYJLDgJp7JUdlMbIm%2BF7jM0JWoOLtsQQ3ZBtNehQ7rS3lYwMdi4iV5B%2Bg3R49dnJAsA4tklc19gAKufEYwLJrySlcEMDu5xFyiFb%2BmGg6mmrXSKtS5MrbRiuTfpJKnou2dQrQabq%2FHBWqigq%2B4u0yAkyyYBw3w7LizWXP%2B%2F1LkPgXXMmW8UCRsEyuVsMHw%2Bg7WTXe2JUz6icRD62T74615pAbKqKQIAEyq%2Bwp5JvzsEghWUKGb%2F%2Bkwvgjv37X5aGNgIgnos81XIdpYu53kOh7dqSv2f9A%2FVFY%2FGikiFG7347CqkO7O3nWZo4yO1S2gz5K1pHgIzGBdC08Z10tId76AICX4Oy9V6sRDWpQLW%2BLElNS%2BpfeqZ8aSGtnMiGfkXdIg3YmfACvemQ964HvwS4ZotoqSInqvGqiNpZwZbkrN6y3zqu6i%2BW%2FMPD0oL4GOqUByXbqzTwmXMYvGZpOkrTgCqpLN7Y2TfeFd2URyanSEqnCfIYLQ4oRIcqio9YX8Lq5eLc135f%2BDbSf0mq6dMcnCtbFru8iiqTG%2FVEsdpbLLusndMlSe1C6WOxl%2F4%2FtBH%2Fe9z2WHCdjAYA2EYAJ2W0QQKnbXND19UiVmjlVNixNBMthYKvxP4o4TElGKGsYUgFYI5Fk%2BMCHQV%2FHBwtqJ4q4KDG0SEey&X-Amz-Signature=ff0c6816b69e5f7395a42889c91d0836ade373e020719f2a26d08bc47b56123f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HIX4LC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9TcOJOo1pTRw%2FqNsMSQDhE5epV8UKIcxE7HrXQlOaqAIgJZgDUEB7HNcesyst%2BTAPBh%2BXtHbSbUHm014sGUfuQUIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOSvjOOZmWnASfmR5CrcA5zC6Gve%2BGKr4nM3IbIk3yAdDCsNfXavF9Op17JcNezukVym2dUy6LeODtfar682lJOYcJnCBJ1atmQzByi1BHDfR9K30Hdv7oHzSzTgKSDg%2BZP%2B78R8yOefp4A40sEpt21YOV7I15OXb8CK4qSuETnR4d4Yc84Gg%2BoZavKoDHhg%2B5l7ZI52F0ZrwqeVOXdrEliNk%2BroYJLDgJp7JUdlMbIm%2BF7jM0JWoOLtsQQ3ZBtNehQ7rS3lYwMdi4iV5B%2Bg3R49dnJAsA4tklc19gAKufEYwLJrySlcEMDu5xFyiFb%2BmGg6mmrXSKtS5MrbRiuTfpJKnou2dQrQabq%2FHBWqigq%2B4u0yAkyyYBw3w7LizWXP%2B%2F1LkPgXXMmW8UCRsEyuVsMHw%2Bg7WTXe2JUz6icRD62T74615pAbKqKQIAEyq%2Bwp5JvzsEghWUKGb%2F%2Bkwvgjv37X5aGNgIgnos81XIdpYu53kOh7dqSv2f9A%2FVFY%2FGikiFG7347CqkO7O3nWZo4yO1S2gz5K1pHgIzGBdC08Z10tId76AICX4Oy9V6sRDWpQLW%2BLElNS%2BpfeqZ8aSGtnMiGfkXdIg3YmfACvemQ964HvwS4ZotoqSInqvGqiNpZwZbkrN6y3zqu6i%2BW%2FMPD0oL4GOqUByXbqzTwmXMYvGZpOkrTgCqpLN7Y2TfeFd2URyanSEqnCfIYLQ4oRIcqio9YX8Lq5eLc135f%2BDbSf0mq6dMcnCtbFru8iiqTG%2FVEsdpbLLusndMlSe1C6WOxl%2F4%2FtBH%2Fe9z2WHCdjAYA2EYAJ2W0QQKnbXND19UiVmjlVNixNBMthYKvxP4o4TElGKGsYUgFYI5Fk%2BMCHQV%2FHBwtqJ4q4KDG0SEey&X-Amz-Signature=666c4c05fd6ecabe668eb58d919a0d7fb718e0653d4f80a1e739221567619439&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HIX4LC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9TcOJOo1pTRw%2FqNsMSQDhE5epV8UKIcxE7HrXQlOaqAIgJZgDUEB7HNcesyst%2BTAPBh%2BXtHbSbUHm014sGUfuQUIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOSvjOOZmWnASfmR5CrcA5zC6Gve%2BGKr4nM3IbIk3yAdDCsNfXavF9Op17JcNezukVym2dUy6LeODtfar682lJOYcJnCBJ1atmQzByi1BHDfR9K30Hdv7oHzSzTgKSDg%2BZP%2B78R8yOefp4A40sEpt21YOV7I15OXb8CK4qSuETnR4d4Yc84Gg%2BoZavKoDHhg%2B5l7ZI52F0ZrwqeVOXdrEliNk%2BroYJLDgJp7JUdlMbIm%2BF7jM0JWoOLtsQQ3ZBtNehQ7rS3lYwMdi4iV5B%2Bg3R49dnJAsA4tklc19gAKufEYwLJrySlcEMDu5xFyiFb%2BmGg6mmrXSKtS5MrbRiuTfpJKnou2dQrQabq%2FHBWqigq%2B4u0yAkyyYBw3w7LizWXP%2B%2F1LkPgXXMmW8UCRsEyuVsMHw%2Bg7WTXe2JUz6icRD62T74615pAbKqKQIAEyq%2Bwp5JvzsEghWUKGb%2F%2Bkwvgjv37X5aGNgIgnos81XIdpYu53kOh7dqSv2f9A%2FVFY%2FGikiFG7347CqkO7O3nWZo4yO1S2gz5K1pHgIzGBdC08Z10tId76AICX4Oy9V6sRDWpQLW%2BLElNS%2BpfeqZ8aSGtnMiGfkXdIg3YmfACvemQ964HvwS4ZotoqSInqvGqiNpZwZbkrN6y3zqu6i%2BW%2FMPD0oL4GOqUByXbqzTwmXMYvGZpOkrTgCqpLN7Y2TfeFd2URyanSEqnCfIYLQ4oRIcqio9YX8Lq5eLc135f%2BDbSf0mq6dMcnCtbFru8iiqTG%2FVEsdpbLLusndMlSe1C6WOxl%2F4%2FtBH%2Fe9z2WHCdjAYA2EYAJ2W0QQKnbXND19UiVmjlVNixNBMthYKvxP4o4TElGKGsYUgFYI5Fk%2BMCHQV%2FHBwtqJ4q4KDG0SEey&X-Amz-Signature=50c92374cf2cc213ca752859c29b3b1ed15e02423ec1036a21b9e4da99310911&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
