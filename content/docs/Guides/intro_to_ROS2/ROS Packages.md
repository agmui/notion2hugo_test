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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK3TUCEL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQC1rObLbHPtz13%2BKbSjYis4B5sreowAh%2BBxVASqufN2dgIgA2KBnWb%2Bk26Av5w%2FwBejnbipCK5qH01j7pKnXs8RFsgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbDGrurqqEYLu228CrcA2%2BYKIqPM3cBUBvv9pVyYBaIfPS5DCmwdLDQFGGCbc8Y7QjdNVu1ldJmHLUnWmuJqOSPlrr1Wub5mOdfkxKyYVgt0A9Q%2FuzKIRJndzepCmRQtuXutq9YYkyqtGWU85uNzCj4H4RJ%2FO5SCVmRHpJXWiaboZ%2FEabaQJOrEa91Y%2FjUSqiBcahOhNUon6B8on9KlCwE7%2Fd6JQA2Pm9nC5SmTSdhOTRZ8GZWtuLkTuQj01HKuGjpWi25M79ffnzK7FrsvtnRniUj8xoFwTYslBnvPGK9J1immzAikLmvupEwHkOrgXsSMaic3t1YrkzybNVCfU%2FA95%2B8a6ScZgGakE6nAv3HYCN5s8hZbDqbGIxWeeyLneBQkvz8yQfKCqs58uXCBSGLv1xWg6vN2S3hx809%2FW51noR5kVsSlvWZwfaEqiQo4Tl6YjLed6wIyNXLc8%2BfKYUMUWl%2BeLDk1AQUYFbgOYm8e%2F2Z0OGv2KmlaGqWC5q%2FyeoApzzVBz3hBdlAqeNAJvqNPA74c77oaJyBeLwb%2FGQ4ewMy8rw2Fj3tFC6lXnie4bkNwMiN6U2WA4IXspCGLB2jabR2rE9vQvONsqJJbFG1Enf%2FWBqD0AOoHyUb0QzQWix2OlydCRJjZ0agHMLWrxcEGOqUBUgsab9GM9i3aX%2BXRr9hamTcW12mjAyUX7B3lbDkZr5axa891B6S1VgBt1TCgJGzdN%2B4gatxpAvZe8rLgdhriZPLD8jNMOBpm3E0PdgbsMmtL63X9yEd6V8KiY7PLVcTK3XZe2ZXADMrnw%2BvTAPei4ZPv7sDhdLwhp9J4pEl2DEBk%2FRNXpK7a1GwZRvXRzuJw9UDmGziSV%2BVPbOVd8cwqNIM2Nah%2F&X-Amz-Signature=3232a3103db82c0b9ac677360026356b921d4b99801cee2a7bab6ecb0e1b04d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK3TUCEL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQC1rObLbHPtz13%2BKbSjYis4B5sreowAh%2BBxVASqufN2dgIgA2KBnWb%2Bk26Av5w%2FwBejnbipCK5qH01j7pKnXs8RFsgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbDGrurqqEYLu228CrcA2%2BYKIqPM3cBUBvv9pVyYBaIfPS5DCmwdLDQFGGCbc8Y7QjdNVu1ldJmHLUnWmuJqOSPlrr1Wub5mOdfkxKyYVgt0A9Q%2FuzKIRJndzepCmRQtuXutq9YYkyqtGWU85uNzCj4H4RJ%2FO5SCVmRHpJXWiaboZ%2FEabaQJOrEa91Y%2FjUSqiBcahOhNUon6B8on9KlCwE7%2Fd6JQA2Pm9nC5SmTSdhOTRZ8GZWtuLkTuQj01HKuGjpWi25M79ffnzK7FrsvtnRniUj8xoFwTYslBnvPGK9J1immzAikLmvupEwHkOrgXsSMaic3t1YrkzybNVCfU%2FA95%2B8a6ScZgGakE6nAv3HYCN5s8hZbDqbGIxWeeyLneBQkvz8yQfKCqs58uXCBSGLv1xWg6vN2S3hx809%2FW51noR5kVsSlvWZwfaEqiQo4Tl6YjLed6wIyNXLc8%2BfKYUMUWl%2BeLDk1AQUYFbgOYm8e%2F2Z0OGv2KmlaGqWC5q%2FyeoApzzVBz3hBdlAqeNAJvqNPA74c77oaJyBeLwb%2FGQ4ewMy8rw2Fj3tFC6lXnie4bkNwMiN6U2WA4IXspCGLB2jabR2rE9vQvONsqJJbFG1Enf%2FWBqD0AOoHyUb0QzQWix2OlydCRJjZ0agHMLWrxcEGOqUBUgsab9GM9i3aX%2BXRr9hamTcW12mjAyUX7B3lbDkZr5axa891B6S1VgBt1TCgJGzdN%2B4gatxpAvZe8rLgdhriZPLD8jNMOBpm3E0PdgbsMmtL63X9yEd6V8KiY7PLVcTK3XZe2ZXADMrnw%2BvTAPei4ZPv7sDhdLwhp9J4pEl2DEBk%2FRNXpK7a1GwZRvXRzuJw9UDmGziSV%2BVPbOVd8cwqNIM2Nah%2F&X-Amz-Signature=dcc764475853bf665d6cc34b3f9478d078bd5d446a9ee53901a4318e53bb1701&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK3TUCEL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQC1rObLbHPtz13%2BKbSjYis4B5sreowAh%2BBxVASqufN2dgIgA2KBnWb%2Bk26Av5w%2FwBejnbipCK5qH01j7pKnXs8RFsgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbDGrurqqEYLu228CrcA2%2BYKIqPM3cBUBvv9pVyYBaIfPS5DCmwdLDQFGGCbc8Y7QjdNVu1ldJmHLUnWmuJqOSPlrr1Wub5mOdfkxKyYVgt0A9Q%2FuzKIRJndzepCmRQtuXutq9YYkyqtGWU85uNzCj4H4RJ%2FO5SCVmRHpJXWiaboZ%2FEabaQJOrEa91Y%2FjUSqiBcahOhNUon6B8on9KlCwE7%2Fd6JQA2Pm9nC5SmTSdhOTRZ8GZWtuLkTuQj01HKuGjpWi25M79ffnzK7FrsvtnRniUj8xoFwTYslBnvPGK9J1immzAikLmvupEwHkOrgXsSMaic3t1YrkzybNVCfU%2FA95%2B8a6ScZgGakE6nAv3HYCN5s8hZbDqbGIxWeeyLneBQkvz8yQfKCqs58uXCBSGLv1xWg6vN2S3hx809%2FW51noR5kVsSlvWZwfaEqiQo4Tl6YjLed6wIyNXLc8%2BfKYUMUWl%2BeLDk1AQUYFbgOYm8e%2F2Z0OGv2KmlaGqWC5q%2FyeoApzzVBz3hBdlAqeNAJvqNPA74c77oaJyBeLwb%2FGQ4ewMy8rw2Fj3tFC6lXnie4bkNwMiN6U2WA4IXspCGLB2jabR2rE9vQvONsqJJbFG1Enf%2FWBqD0AOoHyUb0QzQWix2OlydCRJjZ0agHMLWrxcEGOqUBUgsab9GM9i3aX%2BXRr9hamTcW12mjAyUX7B3lbDkZr5axa891B6S1VgBt1TCgJGzdN%2B4gatxpAvZe8rLgdhriZPLD8jNMOBpm3E0PdgbsMmtL63X9yEd6V8KiY7PLVcTK3XZe2ZXADMrnw%2BvTAPei4ZPv7sDhdLwhp9J4pEl2DEBk%2FRNXpK7a1GwZRvXRzuJw9UDmGziSV%2BVPbOVd8cwqNIM2Nah%2F&X-Amz-Signature=c3d8836c96b0193b5eab5545ef63e07cef033e451c7b60a9db324a4336d9bc1c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK3TUCEL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQC1rObLbHPtz13%2BKbSjYis4B5sreowAh%2BBxVASqufN2dgIgA2KBnWb%2Bk26Av5w%2FwBejnbipCK5qH01j7pKnXs8RFsgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbDGrurqqEYLu228CrcA2%2BYKIqPM3cBUBvv9pVyYBaIfPS5DCmwdLDQFGGCbc8Y7QjdNVu1ldJmHLUnWmuJqOSPlrr1Wub5mOdfkxKyYVgt0A9Q%2FuzKIRJndzepCmRQtuXutq9YYkyqtGWU85uNzCj4H4RJ%2FO5SCVmRHpJXWiaboZ%2FEabaQJOrEa91Y%2FjUSqiBcahOhNUon6B8on9KlCwE7%2Fd6JQA2Pm9nC5SmTSdhOTRZ8GZWtuLkTuQj01HKuGjpWi25M79ffnzK7FrsvtnRniUj8xoFwTYslBnvPGK9J1immzAikLmvupEwHkOrgXsSMaic3t1YrkzybNVCfU%2FA95%2B8a6ScZgGakE6nAv3HYCN5s8hZbDqbGIxWeeyLneBQkvz8yQfKCqs58uXCBSGLv1xWg6vN2S3hx809%2FW51noR5kVsSlvWZwfaEqiQo4Tl6YjLed6wIyNXLc8%2BfKYUMUWl%2BeLDk1AQUYFbgOYm8e%2F2Z0OGv2KmlaGqWC5q%2FyeoApzzVBz3hBdlAqeNAJvqNPA74c77oaJyBeLwb%2FGQ4ewMy8rw2Fj3tFC6lXnie4bkNwMiN6U2WA4IXspCGLB2jabR2rE9vQvONsqJJbFG1Enf%2FWBqD0AOoHyUb0QzQWix2OlydCRJjZ0agHMLWrxcEGOqUBUgsab9GM9i3aX%2BXRr9hamTcW12mjAyUX7B3lbDkZr5axa891B6S1VgBt1TCgJGzdN%2B4gatxpAvZe8rLgdhriZPLD8jNMOBpm3E0PdgbsMmtL63X9yEd6V8KiY7PLVcTK3XZe2ZXADMrnw%2BvTAPei4ZPv7sDhdLwhp9J4pEl2DEBk%2FRNXpK7a1GwZRvXRzuJw9UDmGziSV%2BVPbOVd8cwqNIM2Nah%2F&X-Amz-Signature=985e4ab8474b0f6fdeaa74089c8f18ed98fbb8369bddb04377704aff380bf9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK3TUCEL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQC1rObLbHPtz13%2BKbSjYis4B5sreowAh%2BBxVASqufN2dgIgA2KBnWb%2Bk26Av5w%2FwBejnbipCK5qH01j7pKnXs8RFsgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbDGrurqqEYLu228CrcA2%2BYKIqPM3cBUBvv9pVyYBaIfPS5DCmwdLDQFGGCbc8Y7QjdNVu1ldJmHLUnWmuJqOSPlrr1Wub5mOdfkxKyYVgt0A9Q%2FuzKIRJndzepCmRQtuXutq9YYkyqtGWU85uNzCj4H4RJ%2FO5SCVmRHpJXWiaboZ%2FEabaQJOrEa91Y%2FjUSqiBcahOhNUon6B8on9KlCwE7%2Fd6JQA2Pm9nC5SmTSdhOTRZ8GZWtuLkTuQj01HKuGjpWi25M79ffnzK7FrsvtnRniUj8xoFwTYslBnvPGK9J1immzAikLmvupEwHkOrgXsSMaic3t1YrkzybNVCfU%2FA95%2B8a6ScZgGakE6nAv3HYCN5s8hZbDqbGIxWeeyLneBQkvz8yQfKCqs58uXCBSGLv1xWg6vN2S3hx809%2FW51noR5kVsSlvWZwfaEqiQo4Tl6YjLed6wIyNXLc8%2BfKYUMUWl%2BeLDk1AQUYFbgOYm8e%2F2Z0OGv2KmlaGqWC5q%2FyeoApzzVBz3hBdlAqeNAJvqNPA74c77oaJyBeLwb%2FGQ4ewMy8rw2Fj3tFC6lXnie4bkNwMiN6U2WA4IXspCGLB2jabR2rE9vQvONsqJJbFG1Enf%2FWBqD0AOoHyUb0QzQWix2OlydCRJjZ0agHMLWrxcEGOqUBUgsab9GM9i3aX%2BXRr9hamTcW12mjAyUX7B3lbDkZr5axa891B6S1VgBt1TCgJGzdN%2B4gatxpAvZe8rLgdhriZPLD8jNMOBpm3E0PdgbsMmtL63X9yEd6V8KiY7PLVcTK3XZe2ZXADMrnw%2BvTAPei4ZPv7sDhdLwhp9J4pEl2DEBk%2FRNXpK7a1GwZRvXRzuJw9UDmGziSV%2BVPbOVd8cwqNIM2Nah%2F&X-Amz-Signature=c14847e0d78414597e3f9a8759ed95653f8b0e1eacc06c80f462b9633551e092&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK3TUCEL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQC1rObLbHPtz13%2BKbSjYis4B5sreowAh%2BBxVASqufN2dgIgA2KBnWb%2Bk26Av5w%2FwBejnbipCK5qH01j7pKnXs8RFsgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbDGrurqqEYLu228CrcA2%2BYKIqPM3cBUBvv9pVyYBaIfPS5DCmwdLDQFGGCbc8Y7QjdNVu1ldJmHLUnWmuJqOSPlrr1Wub5mOdfkxKyYVgt0A9Q%2FuzKIRJndzepCmRQtuXutq9YYkyqtGWU85uNzCj4H4RJ%2FO5SCVmRHpJXWiaboZ%2FEabaQJOrEa91Y%2FjUSqiBcahOhNUon6B8on9KlCwE7%2Fd6JQA2Pm9nC5SmTSdhOTRZ8GZWtuLkTuQj01HKuGjpWi25M79ffnzK7FrsvtnRniUj8xoFwTYslBnvPGK9J1immzAikLmvupEwHkOrgXsSMaic3t1YrkzybNVCfU%2FA95%2B8a6ScZgGakE6nAv3HYCN5s8hZbDqbGIxWeeyLneBQkvz8yQfKCqs58uXCBSGLv1xWg6vN2S3hx809%2FW51noR5kVsSlvWZwfaEqiQo4Tl6YjLed6wIyNXLc8%2BfKYUMUWl%2BeLDk1AQUYFbgOYm8e%2F2Z0OGv2KmlaGqWC5q%2FyeoApzzVBz3hBdlAqeNAJvqNPA74c77oaJyBeLwb%2FGQ4ewMy8rw2Fj3tFC6lXnie4bkNwMiN6U2WA4IXspCGLB2jabR2rE9vQvONsqJJbFG1Enf%2FWBqD0AOoHyUb0QzQWix2OlydCRJjZ0agHMLWrxcEGOqUBUgsab9GM9i3aX%2BXRr9hamTcW12mjAyUX7B3lbDkZr5axa891B6S1VgBt1TCgJGzdN%2B4gatxpAvZe8rLgdhriZPLD8jNMOBpm3E0PdgbsMmtL63X9yEd6V8KiY7PLVcTK3XZe2ZXADMrnw%2BvTAPei4ZPv7sDhdLwhp9J4pEl2DEBk%2FRNXpK7a1GwZRvXRzuJw9UDmGziSV%2BVPbOVd8cwqNIM2Nah%2F&X-Amz-Signature=03c252db9efe190ab4a174e71e6b7888719caa43437746be8eaaa9941055441f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK3TUCEL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQC1rObLbHPtz13%2BKbSjYis4B5sreowAh%2BBxVASqufN2dgIgA2KBnWb%2Bk26Av5w%2FwBejnbipCK5qH01j7pKnXs8RFsgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbDGrurqqEYLu228CrcA2%2BYKIqPM3cBUBvv9pVyYBaIfPS5DCmwdLDQFGGCbc8Y7QjdNVu1ldJmHLUnWmuJqOSPlrr1Wub5mOdfkxKyYVgt0A9Q%2FuzKIRJndzepCmRQtuXutq9YYkyqtGWU85uNzCj4H4RJ%2FO5SCVmRHpJXWiaboZ%2FEabaQJOrEa91Y%2FjUSqiBcahOhNUon6B8on9KlCwE7%2Fd6JQA2Pm9nC5SmTSdhOTRZ8GZWtuLkTuQj01HKuGjpWi25M79ffnzK7FrsvtnRniUj8xoFwTYslBnvPGK9J1immzAikLmvupEwHkOrgXsSMaic3t1YrkzybNVCfU%2FA95%2B8a6ScZgGakE6nAv3HYCN5s8hZbDqbGIxWeeyLneBQkvz8yQfKCqs58uXCBSGLv1xWg6vN2S3hx809%2FW51noR5kVsSlvWZwfaEqiQo4Tl6YjLed6wIyNXLc8%2BfKYUMUWl%2BeLDk1AQUYFbgOYm8e%2F2Z0OGv2KmlaGqWC5q%2FyeoApzzVBz3hBdlAqeNAJvqNPA74c77oaJyBeLwb%2FGQ4ewMy8rw2Fj3tFC6lXnie4bkNwMiN6U2WA4IXspCGLB2jabR2rE9vQvONsqJJbFG1Enf%2FWBqD0AOoHyUb0QzQWix2OlydCRJjZ0agHMLWrxcEGOqUBUgsab9GM9i3aX%2BXRr9hamTcW12mjAyUX7B3lbDkZr5axa891B6S1VgBt1TCgJGzdN%2B4gatxpAvZe8rLgdhriZPLD8jNMOBpm3E0PdgbsMmtL63X9yEd6V8KiY7PLVcTK3XZe2ZXADMrnw%2BvTAPei4ZPv7sDhdLwhp9J4pEl2DEBk%2FRNXpK7a1GwZRvXRzuJw9UDmGziSV%2BVPbOVd8cwqNIM2Nah%2F&X-Amz-Signature=c0fb913edbc9fd4ea1380d755236aab328544457ca39289f0967547d364944d3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
