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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2LSH7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6HOBCRjd9oga8mSG7gfUf%2FVoJu1tN9AG2JC4%2Fn%2BMRAAIgZtm4fxiKUenGTYcw6LTNp6VcKyZYgnT%2F1%2BeUj6Q96%2BMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6IzrenwMfcaZShtCrcAy3A6b3DXJlFady5R3gFnUQQCiy7x7toI2MPg1yb0hpBUVeApdii4NPVeA6A2Ji110pVs8kTAtVq1cnLqe7mqUQM%2BFBYkU0fsgIFB4gZ3IPfz3iNjxwNmMqUM6%2FPszL%2F1cbSjHLFXow2zGHmzEwJw5Okv0X5m9i3J4HHLzupowgdFzO54HRQYV3%2F7m%2FlhsxqH4W2C8wSbns0EN4rxbJKt7hKI5ZQph4cQQ78CZMwY%2B4%2BxDd7tKVfdR1CsOj8uQSC1fklgMPmA%2ByZj1Ulq1NAzkR7A3%2B7JP2Lsk9ILsAJBr1cTDccYOrOd%2Fj4FnPGIsc4GEu45Xz2Vgf3er51E3E3p6PIanQR64WjPBnGGKroe0N4LEKypEFMRJkVTN3Yimz1pjCh%2BV0p6ZhCVIUALHLCNR0szfINDighZy0QI7r%2F680GeAsrc1vJUvZSc6qQPNbzehwSloAvkxtZMuR4uUMZMg%2FoCqFygL6ScyrltHJNxR1HCYMhiNo5ccwTSPvJ%2Bj3jJteQlfUUAurI%2F6X25Va5fbrYNA6tgxdIsS7IFnrY3J7zsZW%2B5ebniUuhM4qci09xQRzkdMp%2B80EneTQ8BfkfzsWTNpIVCbedcRxDhdeH9eTVjDpRjIaC9vpGL9KCMNmgnsIGOqUB93hpgcBZ9u7iv%2FJbG7XM7iOa%2Fnq7xAUMtqPceh%2B%2FiNVKxa7aH63j05w3wwf9XfqwYtIos3DUYvJamuSovJKaC4dzH3idhuxtVkXXIHR0hAkQObmjxjAz3vnJx4u2WYWZTxzxIQ7rc81InNV6CBShc5NBg7SBfN5EjHs6Nx%2BXpDZVpjHfNbO1NAjtspKN0vKIycdl8HhnGoI3sl5VaWTVPLZlhh%2Fw&X-Amz-Signature=4c907cc7bd47033b341d627e3035bb6b26909488faa95fb32d8ee815f87cd6ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2LSH7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6HOBCRjd9oga8mSG7gfUf%2FVoJu1tN9AG2JC4%2Fn%2BMRAAIgZtm4fxiKUenGTYcw6LTNp6VcKyZYgnT%2F1%2BeUj6Q96%2BMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6IzrenwMfcaZShtCrcAy3A6b3DXJlFady5R3gFnUQQCiy7x7toI2MPg1yb0hpBUVeApdii4NPVeA6A2Ji110pVs8kTAtVq1cnLqe7mqUQM%2BFBYkU0fsgIFB4gZ3IPfz3iNjxwNmMqUM6%2FPszL%2F1cbSjHLFXow2zGHmzEwJw5Okv0X5m9i3J4HHLzupowgdFzO54HRQYV3%2F7m%2FlhsxqH4W2C8wSbns0EN4rxbJKt7hKI5ZQph4cQQ78CZMwY%2B4%2BxDd7tKVfdR1CsOj8uQSC1fklgMPmA%2ByZj1Ulq1NAzkR7A3%2B7JP2Lsk9ILsAJBr1cTDccYOrOd%2Fj4FnPGIsc4GEu45Xz2Vgf3er51E3E3p6PIanQR64WjPBnGGKroe0N4LEKypEFMRJkVTN3Yimz1pjCh%2BV0p6ZhCVIUALHLCNR0szfINDighZy0QI7r%2F680GeAsrc1vJUvZSc6qQPNbzehwSloAvkxtZMuR4uUMZMg%2FoCqFygL6ScyrltHJNxR1HCYMhiNo5ccwTSPvJ%2Bj3jJteQlfUUAurI%2F6X25Va5fbrYNA6tgxdIsS7IFnrY3J7zsZW%2B5ebniUuhM4qci09xQRzkdMp%2B80EneTQ8BfkfzsWTNpIVCbedcRxDhdeH9eTVjDpRjIaC9vpGL9KCMNmgnsIGOqUB93hpgcBZ9u7iv%2FJbG7XM7iOa%2Fnq7xAUMtqPceh%2B%2FiNVKxa7aH63j05w3wwf9XfqwYtIos3DUYvJamuSovJKaC4dzH3idhuxtVkXXIHR0hAkQObmjxjAz3vnJx4u2WYWZTxzxIQ7rc81InNV6CBShc5NBg7SBfN5EjHs6Nx%2BXpDZVpjHfNbO1NAjtspKN0vKIycdl8HhnGoI3sl5VaWTVPLZlhh%2Fw&X-Amz-Signature=099963fb39fc83455b44517661ddfe66fd7f7bea7644d32d319334fb941ba221&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2LSH7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6HOBCRjd9oga8mSG7gfUf%2FVoJu1tN9AG2JC4%2Fn%2BMRAAIgZtm4fxiKUenGTYcw6LTNp6VcKyZYgnT%2F1%2BeUj6Q96%2BMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6IzrenwMfcaZShtCrcAy3A6b3DXJlFady5R3gFnUQQCiy7x7toI2MPg1yb0hpBUVeApdii4NPVeA6A2Ji110pVs8kTAtVq1cnLqe7mqUQM%2BFBYkU0fsgIFB4gZ3IPfz3iNjxwNmMqUM6%2FPszL%2F1cbSjHLFXow2zGHmzEwJw5Okv0X5m9i3J4HHLzupowgdFzO54HRQYV3%2F7m%2FlhsxqH4W2C8wSbns0EN4rxbJKt7hKI5ZQph4cQQ78CZMwY%2B4%2BxDd7tKVfdR1CsOj8uQSC1fklgMPmA%2ByZj1Ulq1NAzkR7A3%2B7JP2Lsk9ILsAJBr1cTDccYOrOd%2Fj4FnPGIsc4GEu45Xz2Vgf3er51E3E3p6PIanQR64WjPBnGGKroe0N4LEKypEFMRJkVTN3Yimz1pjCh%2BV0p6ZhCVIUALHLCNR0szfINDighZy0QI7r%2F680GeAsrc1vJUvZSc6qQPNbzehwSloAvkxtZMuR4uUMZMg%2FoCqFygL6ScyrltHJNxR1HCYMhiNo5ccwTSPvJ%2Bj3jJteQlfUUAurI%2F6X25Va5fbrYNA6tgxdIsS7IFnrY3J7zsZW%2B5ebniUuhM4qci09xQRzkdMp%2B80EneTQ8BfkfzsWTNpIVCbedcRxDhdeH9eTVjDpRjIaC9vpGL9KCMNmgnsIGOqUB93hpgcBZ9u7iv%2FJbG7XM7iOa%2Fnq7xAUMtqPceh%2B%2FiNVKxa7aH63j05w3wwf9XfqwYtIos3DUYvJamuSovJKaC4dzH3idhuxtVkXXIHR0hAkQObmjxjAz3vnJx4u2WYWZTxzxIQ7rc81InNV6CBShc5NBg7SBfN5EjHs6Nx%2BXpDZVpjHfNbO1NAjtspKN0vKIycdl8HhnGoI3sl5VaWTVPLZlhh%2Fw&X-Amz-Signature=cc668b274dece4542ca7d23728bd2545f644fe564e5e7d9598f5eca3977ce595&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2LSH7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6HOBCRjd9oga8mSG7gfUf%2FVoJu1tN9AG2JC4%2Fn%2BMRAAIgZtm4fxiKUenGTYcw6LTNp6VcKyZYgnT%2F1%2BeUj6Q96%2BMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6IzrenwMfcaZShtCrcAy3A6b3DXJlFady5R3gFnUQQCiy7x7toI2MPg1yb0hpBUVeApdii4NPVeA6A2Ji110pVs8kTAtVq1cnLqe7mqUQM%2BFBYkU0fsgIFB4gZ3IPfz3iNjxwNmMqUM6%2FPszL%2F1cbSjHLFXow2zGHmzEwJw5Okv0X5m9i3J4HHLzupowgdFzO54HRQYV3%2F7m%2FlhsxqH4W2C8wSbns0EN4rxbJKt7hKI5ZQph4cQQ78CZMwY%2B4%2BxDd7tKVfdR1CsOj8uQSC1fklgMPmA%2ByZj1Ulq1NAzkR7A3%2B7JP2Lsk9ILsAJBr1cTDccYOrOd%2Fj4FnPGIsc4GEu45Xz2Vgf3er51E3E3p6PIanQR64WjPBnGGKroe0N4LEKypEFMRJkVTN3Yimz1pjCh%2BV0p6ZhCVIUALHLCNR0szfINDighZy0QI7r%2F680GeAsrc1vJUvZSc6qQPNbzehwSloAvkxtZMuR4uUMZMg%2FoCqFygL6ScyrltHJNxR1HCYMhiNo5ccwTSPvJ%2Bj3jJteQlfUUAurI%2F6X25Va5fbrYNA6tgxdIsS7IFnrY3J7zsZW%2B5ebniUuhM4qci09xQRzkdMp%2B80EneTQ8BfkfzsWTNpIVCbedcRxDhdeH9eTVjDpRjIaC9vpGL9KCMNmgnsIGOqUB93hpgcBZ9u7iv%2FJbG7XM7iOa%2Fnq7xAUMtqPceh%2B%2FiNVKxa7aH63j05w3wwf9XfqwYtIos3DUYvJamuSovJKaC4dzH3idhuxtVkXXIHR0hAkQObmjxjAz3vnJx4u2WYWZTxzxIQ7rc81InNV6CBShc5NBg7SBfN5EjHs6Nx%2BXpDZVpjHfNbO1NAjtspKN0vKIycdl8HhnGoI3sl5VaWTVPLZlhh%2Fw&X-Amz-Signature=c1eebe859eda965f5a4011cd8a5bdc99f070ce607bdd052bbd0aa66f4a6cbd52&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2LSH7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6HOBCRjd9oga8mSG7gfUf%2FVoJu1tN9AG2JC4%2Fn%2BMRAAIgZtm4fxiKUenGTYcw6LTNp6VcKyZYgnT%2F1%2BeUj6Q96%2BMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6IzrenwMfcaZShtCrcAy3A6b3DXJlFady5R3gFnUQQCiy7x7toI2MPg1yb0hpBUVeApdii4NPVeA6A2Ji110pVs8kTAtVq1cnLqe7mqUQM%2BFBYkU0fsgIFB4gZ3IPfz3iNjxwNmMqUM6%2FPszL%2F1cbSjHLFXow2zGHmzEwJw5Okv0X5m9i3J4HHLzupowgdFzO54HRQYV3%2F7m%2FlhsxqH4W2C8wSbns0EN4rxbJKt7hKI5ZQph4cQQ78CZMwY%2B4%2BxDd7tKVfdR1CsOj8uQSC1fklgMPmA%2ByZj1Ulq1NAzkR7A3%2B7JP2Lsk9ILsAJBr1cTDccYOrOd%2Fj4FnPGIsc4GEu45Xz2Vgf3er51E3E3p6PIanQR64WjPBnGGKroe0N4LEKypEFMRJkVTN3Yimz1pjCh%2BV0p6ZhCVIUALHLCNR0szfINDighZy0QI7r%2F680GeAsrc1vJUvZSc6qQPNbzehwSloAvkxtZMuR4uUMZMg%2FoCqFygL6ScyrltHJNxR1HCYMhiNo5ccwTSPvJ%2Bj3jJteQlfUUAurI%2F6X25Va5fbrYNA6tgxdIsS7IFnrY3J7zsZW%2B5ebniUuhM4qci09xQRzkdMp%2B80EneTQ8BfkfzsWTNpIVCbedcRxDhdeH9eTVjDpRjIaC9vpGL9KCMNmgnsIGOqUB93hpgcBZ9u7iv%2FJbG7XM7iOa%2Fnq7xAUMtqPceh%2B%2FiNVKxa7aH63j05w3wwf9XfqwYtIos3DUYvJamuSovJKaC4dzH3idhuxtVkXXIHR0hAkQObmjxjAz3vnJx4u2WYWZTxzxIQ7rc81InNV6CBShc5NBg7SBfN5EjHs6Nx%2BXpDZVpjHfNbO1NAjtspKN0vKIycdl8HhnGoI3sl5VaWTVPLZlhh%2Fw&X-Amz-Signature=b88caa9a17d4590551a8f19d8d23b8c663e0b0e26d33225f8d020b88644a9544&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2LSH7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6HOBCRjd9oga8mSG7gfUf%2FVoJu1tN9AG2JC4%2Fn%2BMRAAIgZtm4fxiKUenGTYcw6LTNp6VcKyZYgnT%2F1%2BeUj6Q96%2BMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6IzrenwMfcaZShtCrcAy3A6b3DXJlFady5R3gFnUQQCiy7x7toI2MPg1yb0hpBUVeApdii4NPVeA6A2Ji110pVs8kTAtVq1cnLqe7mqUQM%2BFBYkU0fsgIFB4gZ3IPfz3iNjxwNmMqUM6%2FPszL%2F1cbSjHLFXow2zGHmzEwJw5Okv0X5m9i3J4HHLzupowgdFzO54HRQYV3%2F7m%2FlhsxqH4W2C8wSbns0EN4rxbJKt7hKI5ZQph4cQQ78CZMwY%2B4%2BxDd7tKVfdR1CsOj8uQSC1fklgMPmA%2ByZj1Ulq1NAzkR7A3%2B7JP2Lsk9ILsAJBr1cTDccYOrOd%2Fj4FnPGIsc4GEu45Xz2Vgf3er51E3E3p6PIanQR64WjPBnGGKroe0N4LEKypEFMRJkVTN3Yimz1pjCh%2BV0p6ZhCVIUALHLCNR0szfINDighZy0QI7r%2F680GeAsrc1vJUvZSc6qQPNbzehwSloAvkxtZMuR4uUMZMg%2FoCqFygL6ScyrltHJNxR1HCYMhiNo5ccwTSPvJ%2Bj3jJteQlfUUAurI%2F6X25Va5fbrYNA6tgxdIsS7IFnrY3J7zsZW%2B5ebniUuhM4qci09xQRzkdMp%2B80EneTQ8BfkfzsWTNpIVCbedcRxDhdeH9eTVjDpRjIaC9vpGL9KCMNmgnsIGOqUB93hpgcBZ9u7iv%2FJbG7XM7iOa%2Fnq7xAUMtqPceh%2B%2FiNVKxa7aH63j05w3wwf9XfqwYtIos3DUYvJamuSovJKaC4dzH3idhuxtVkXXIHR0hAkQObmjxjAz3vnJx4u2WYWZTxzxIQ7rc81InNV6CBShc5NBg7SBfN5EjHs6Nx%2BXpDZVpjHfNbO1NAjtspKN0vKIycdl8HhnGoI3sl5VaWTVPLZlhh%2Fw&X-Amz-Signature=0178eee1a585da2f19782f9406a61bb4c8bea3364b480f84ba212f7c30acea58&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2LSH7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6HOBCRjd9oga8mSG7gfUf%2FVoJu1tN9AG2JC4%2Fn%2BMRAAIgZtm4fxiKUenGTYcw6LTNp6VcKyZYgnT%2F1%2BeUj6Q96%2BMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6IzrenwMfcaZShtCrcAy3A6b3DXJlFady5R3gFnUQQCiy7x7toI2MPg1yb0hpBUVeApdii4NPVeA6A2Ji110pVs8kTAtVq1cnLqe7mqUQM%2BFBYkU0fsgIFB4gZ3IPfz3iNjxwNmMqUM6%2FPszL%2F1cbSjHLFXow2zGHmzEwJw5Okv0X5m9i3J4HHLzupowgdFzO54HRQYV3%2F7m%2FlhsxqH4W2C8wSbns0EN4rxbJKt7hKI5ZQph4cQQ78CZMwY%2B4%2BxDd7tKVfdR1CsOj8uQSC1fklgMPmA%2ByZj1Ulq1NAzkR7A3%2B7JP2Lsk9ILsAJBr1cTDccYOrOd%2Fj4FnPGIsc4GEu45Xz2Vgf3er51E3E3p6PIanQR64WjPBnGGKroe0N4LEKypEFMRJkVTN3Yimz1pjCh%2BV0p6ZhCVIUALHLCNR0szfINDighZy0QI7r%2F680GeAsrc1vJUvZSc6qQPNbzehwSloAvkxtZMuR4uUMZMg%2FoCqFygL6ScyrltHJNxR1HCYMhiNo5ccwTSPvJ%2Bj3jJteQlfUUAurI%2F6X25Va5fbrYNA6tgxdIsS7IFnrY3J7zsZW%2B5ebniUuhM4qci09xQRzkdMp%2B80EneTQ8BfkfzsWTNpIVCbedcRxDhdeH9eTVjDpRjIaC9vpGL9KCMNmgnsIGOqUB93hpgcBZ9u7iv%2FJbG7XM7iOa%2Fnq7xAUMtqPceh%2B%2FiNVKxa7aH63j05w3wwf9XfqwYtIos3DUYvJamuSovJKaC4dzH3idhuxtVkXXIHR0hAkQObmjxjAz3vnJx4u2WYWZTxzxIQ7rc81InNV6CBShc5NBg7SBfN5EjHs6Nx%2BXpDZVpjHfNbO1NAjtspKN0vKIycdl8HhnGoI3sl5VaWTVPLZlhh%2Fw&X-Amz-Signature=0896fbdf69a67be90425b23106d1540c13147f524b45975026812dba32e12adf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
