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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3F777IK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDpb6yeXElPHeNKv1M8qQTSbmy481e4krE%2BW0Di%2FMqkIwIgLG5op0XEQNmStqllrK2Alq7wAin7BWNMluq2azZ4euUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWoTVC3fpad2jDG1CrcA9TDg%2FLkfHjE2uCN8BFF%2FSKH27Rq%2B1c1bVDN2DpFjyfsBahznHSEhhs8jOYRF0kEWgS7n064R877WbEoNriFZjh8em8qifeXdNApsfBDrrXe3EYDj73%2FJW7GMi%2FT84jzR9HL%2FEOvglnB2Tm1N9jyFSPDADbGvKr2r%2F2ZUG%2BFOOfHXeeDszPoW%2FViXKYaFe3tD%2FGgP2LVVHbhtl%2FKzGnE8u0hGPYTihCyAZScLNEz3TzHZIuovMUsip70o5HJEPrfAjuIAjpMHsp7sAWwR4hux9fyaSb9t75eKbbDBG9oVD2sRylgq53tyciqHq8zRqb6ig1EzKrQav6UvMhBVkr3gQTkXRkI%2BCdJXbSqbQm7B2rXFm3k0WlhSxBEzIf5Pux5xXJF3a6XHPrYSdkr%2Bi9X8fqQVDVT%2BECb9PRqGjCm8V0dXVKAZ2TotxaeTp03MmaMyjJX5920%2B0gcsXyrqrpr1%2B%2BhNsnv5gbNJiK8%2FIMW5cNCFR2YtPAz7IHRYP94A4GNhgZGuaqdoK3g3L3NdSo71OVcMEWj54p4DCQwsegQ4c1gO3%2FNQuld0SQfbGfE9akcVTdiViolsIzwUQmKInI%2BBb%2BrNTGJir%2FRgDnNgiPhSmbTeBTyENmBCpQ7Jh%2FOMNnLvb4GOqUBGwVxm2ilZlbrOR7AeititenCH51%2BIAPoq4ynVnR9BoMwRNM8SnIoNSZ%2BVGFFfgChYfNSU4rF18j5KTB04DAq0fMtW68WO6k8LhHLb9y3z8Z9x8MmEk%2BdBR6dfkiOVwEoRepWE1131bZDB1oJbR8s1nLe73zCxPLYEQpPXYwL5hlTxki2envhDQQoS13jW3n6lpE9dXq%2B3g8OXgpDUl8UOFQAtbDK&X-Amz-Signature=61c537efc05b3205ec8844fb1e5af5acf6aebc8189c38816c02b1d31ab2ab795&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3F777IK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDpb6yeXElPHeNKv1M8qQTSbmy481e4krE%2BW0Di%2FMqkIwIgLG5op0XEQNmStqllrK2Alq7wAin7BWNMluq2azZ4euUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWoTVC3fpad2jDG1CrcA9TDg%2FLkfHjE2uCN8BFF%2FSKH27Rq%2B1c1bVDN2DpFjyfsBahznHSEhhs8jOYRF0kEWgS7n064R877WbEoNriFZjh8em8qifeXdNApsfBDrrXe3EYDj73%2FJW7GMi%2FT84jzR9HL%2FEOvglnB2Tm1N9jyFSPDADbGvKr2r%2F2ZUG%2BFOOfHXeeDszPoW%2FViXKYaFe3tD%2FGgP2LVVHbhtl%2FKzGnE8u0hGPYTihCyAZScLNEz3TzHZIuovMUsip70o5HJEPrfAjuIAjpMHsp7sAWwR4hux9fyaSb9t75eKbbDBG9oVD2sRylgq53tyciqHq8zRqb6ig1EzKrQav6UvMhBVkr3gQTkXRkI%2BCdJXbSqbQm7B2rXFm3k0WlhSxBEzIf5Pux5xXJF3a6XHPrYSdkr%2Bi9X8fqQVDVT%2BECb9PRqGjCm8V0dXVKAZ2TotxaeTp03MmaMyjJX5920%2B0gcsXyrqrpr1%2B%2BhNsnv5gbNJiK8%2FIMW5cNCFR2YtPAz7IHRYP94A4GNhgZGuaqdoK3g3L3NdSo71OVcMEWj54p4DCQwsegQ4c1gO3%2FNQuld0SQfbGfE9akcVTdiViolsIzwUQmKInI%2BBb%2BrNTGJir%2FRgDnNgiPhSmbTeBTyENmBCpQ7Jh%2FOMNnLvb4GOqUBGwVxm2ilZlbrOR7AeititenCH51%2BIAPoq4ynVnR9BoMwRNM8SnIoNSZ%2BVGFFfgChYfNSU4rF18j5KTB04DAq0fMtW68WO6k8LhHLb9y3z8Z9x8MmEk%2BdBR6dfkiOVwEoRepWE1131bZDB1oJbR8s1nLe73zCxPLYEQpPXYwL5hlTxki2envhDQQoS13jW3n6lpE9dXq%2B3g8OXgpDUl8UOFQAtbDK&X-Amz-Signature=39c12368f10556c76272d5d037c7713430f32ce7cb2bbf4e8d6e1b2f6bc3cfdc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3F777IK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDpb6yeXElPHeNKv1M8qQTSbmy481e4krE%2BW0Di%2FMqkIwIgLG5op0XEQNmStqllrK2Alq7wAin7BWNMluq2azZ4euUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWoTVC3fpad2jDG1CrcA9TDg%2FLkfHjE2uCN8BFF%2FSKH27Rq%2B1c1bVDN2DpFjyfsBahznHSEhhs8jOYRF0kEWgS7n064R877WbEoNriFZjh8em8qifeXdNApsfBDrrXe3EYDj73%2FJW7GMi%2FT84jzR9HL%2FEOvglnB2Tm1N9jyFSPDADbGvKr2r%2F2ZUG%2BFOOfHXeeDszPoW%2FViXKYaFe3tD%2FGgP2LVVHbhtl%2FKzGnE8u0hGPYTihCyAZScLNEz3TzHZIuovMUsip70o5HJEPrfAjuIAjpMHsp7sAWwR4hux9fyaSb9t75eKbbDBG9oVD2sRylgq53tyciqHq8zRqb6ig1EzKrQav6UvMhBVkr3gQTkXRkI%2BCdJXbSqbQm7B2rXFm3k0WlhSxBEzIf5Pux5xXJF3a6XHPrYSdkr%2Bi9X8fqQVDVT%2BECb9PRqGjCm8V0dXVKAZ2TotxaeTp03MmaMyjJX5920%2B0gcsXyrqrpr1%2B%2BhNsnv5gbNJiK8%2FIMW5cNCFR2YtPAz7IHRYP94A4GNhgZGuaqdoK3g3L3NdSo71OVcMEWj54p4DCQwsegQ4c1gO3%2FNQuld0SQfbGfE9akcVTdiViolsIzwUQmKInI%2BBb%2BrNTGJir%2FRgDnNgiPhSmbTeBTyENmBCpQ7Jh%2FOMNnLvb4GOqUBGwVxm2ilZlbrOR7AeititenCH51%2BIAPoq4ynVnR9BoMwRNM8SnIoNSZ%2BVGFFfgChYfNSU4rF18j5KTB04DAq0fMtW68WO6k8LhHLb9y3z8Z9x8MmEk%2BdBR6dfkiOVwEoRepWE1131bZDB1oJbR8s1nLe73zCxPLYEQpPXYwL5hlTxki2envhDQQoS13jW3n6lpE9dXq%2B3g8OXgpDUl8UOFQAtbDK&X-Amz-Signature=35fad514a3666477e41496f53edeead019ef75285b9d0fdcc6c4c9758f746207&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3F777IK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDpb6yeXElPHeNKv1M8qQTSbmy481e4krE%2BW0Di%2FMqkIwIgLG5op0XEQNmStqllrK2Alq7wAin7BWNMluq2azZ4euUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWoTVC3fpad2jDG1CrcA9TDg%2FLkfHjE2uCN8BFF%2FSKH27Rq%2B1c1bVDN2DpFjyfsBahznHSEhhs8jOYRF0kEWgS7n064R877WbEoNriFZjh8em8qifeXdNApsfBDrrXe3EYDj73%2FJW7GMi%2FT84jzR9HL%2FEOvglnB2Tm1N9jyFSPDADbGvKr2r%2F2ZUG%2BFOOfHXeeDszPoW%2FViXKYaFe3tD%2FGgP2LVVHbhtl%2FKzGnE8u0hGPYTihCyAZScLNEz3TzHZIuovMUsip70o5HJEPrfAjuIAjpMHsp7sAWwR4hux9fyaSb9t75eKbbDBG9oVD2sRylgq53tyciqHq8zRqb6ig1EzKrQav6UvMhBVkr3gQTkXRkI%2BCdJXbSqbQm7B2rXFm3k0WlhSxBEzIf5Pux5xXJF3a6XHPrYSdkr%2Bi9X8fqQVDVT%2BECb9PRqGjCm8V0dXVKAZ2TotxaeTp03MmaMyjJX5920%2B0gcsXyrqrpr1%2B%2BhNsnv5gbNJiK8%2FIMW5cNCFR2YtPAz7IHRYP94A4GNhgZGuaqdoK3g3L3NdSo71OVcMEWj54p4DCQwsegQ4c1gO3%2FNQuld0SQfbGfE9akcVTdiViolsIzwUQmKInI%2BBb%2BrNTGJir%2FRgDnNgiPhSmbTeBTyENmBCpQ7Jh%2FOMNnLvb4GOqUBGwVxm2ilZlbrOR7AeititenCH51%2BIAPoq4ynVnR9BoMwRNM8SnIoNSZ%2BVGFFfgChYfNSU4rF18j5KTB04DAq0fMtW68WO6k8LhHLb9y3z8Z9x8MmEk%2BdBR6dfkiOVwEoRepWE1131bZDB1oJbR8s1nLe73zCxPLYEQpPXYwL5hlTxki2envhDQQoS13jW3n6lpE9dXq%2B3g8OXgpDUl8UOFQAtbDK&X-Amz-Signature=9307b444ef153172b6003cec602ec4fcb5c0c6314ab5bab4f4b1c28911c33cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3F777IK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDpb6yeXElPHeNKv1M8qQTSbmy481e4krE%2BW0Di%2FMqkIwIgLG5op0XEQNmStqllrK2Alq7wAin7BWNMluq2azZ4euUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWoTVC3fpad2jDG1CrcA9TDg%2FLkfHjE2uCN8BFF%2FSKH27Rq%2B1c1bVDN2DpFjyfsBahznHSEhhs8jOYRF0kEWgS7n064R877WbEoNriFZjh8em8qifeXdNApsfBDrrXe3EYDj73%2FJW7GMi%2FT84jzR9HL%2FEOvglnB2Tm1N9jyFSPDADbGvKr2r%2F2ZUG%2BFOOfHXeeDszPoW%2FViXKYaFe3tD%2FGgP2LVVHbhtl%2FKzGnE8u0hGPYTihCyAZScLNEz3TzHZIuovMUsip70o5HJEPrfAjuIAjpMHsp7sAWwR4hux9fyaSb9t75eKbbDBG9oVD2sRylgq53tyciqHq8zRqb6ig1EzKrQav6UvMhBVkr3gQTkXRkI%2BCdJXbSqbQm7B2rXFm3k0WlhSxBEzIf5Pux5xXJF3a6XHPrYSdkr%2Bi9X8fqQVDVT%2BECb9PRqGjCm8V0dXVKAZ2TotxaeTp03MmaMyjJX5920%2B0gcsXyrqrpr1%2B%2BhNsnv5gbNJiK8%2FIMW5cNCFR2YtPAz7IHRYP94A4GNhgZGuaqdoK3g3L3NdSo71OVcMEWj54p4DCQwsegQ4c1gO3%2FNQuld0SQfbGfE9akcVTdiViolsIzwUQmKInI%2BBb%2BrNTGJir%2FRgDnNgiPhSmbTeBTyENmBCpQ7Jh%2FOMNnLvb4GOqUBGwVxm2ilZlbrOR7AeititenCH51%2BIAPoq4ynVnR9BoMwRNM8SnIoNSZ%2BVGFFfgChYfNSU4rF18j5KTB04DAq0fMtW68WO6k8LhHLb9y3z8Z9x8MmEk%2BdBR6dfkiOVwEoRepWE1131bZDB1oJbR8s1nLe73zCxPLYEQpPXYwL5hlTxki2envhDQQoS13jW3n6lpE9dXq%2B3g8OXgpDUl8UOFQAtbDK&X-Amz-Signature=994f33f9a53a59263208057590967b51be4c4f0b2dac11e9e38c87b844e46778&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3F777IK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDpb6yeXElPHeNKv1M8qQTSbmy481e4krE%2BW0Di%2FMqkIwIgLG5op0XEQNmStqllrK2Alq7wAin7BWNMluq2azZ4euUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWoTVC3fpad2jDG1CrcA9TDg%2FLkfHjE2uCN8BFF%2FSKH27Rq%2B1c1bVDN2DpFjyfsBahznHSEhhs8jOYRF0kEWgS7n064R877WbEoNriFZjh8em8qifeXdNApsfBDrrXe3EYDj73%2FJW7GMi%2FT84jzR9HL%2FEOvglnB2Tm1N9jyFSPDADbGvKr2r%2F2ZUG%2BFOOfHXeeDszPoW%2FViXKYaFe3tD%2FGgP2LVVHbhtl%2FKzGnE8u0hGPYTihCyAZScLNEz3TzHZIuovMUsip70o5HJEPrfAjuIAjpMHsp7sAWwR4hux9fyaSb9t75eKbbDBG9oVD2sRylgq53tyciqHq8zRqb6ig1EzKrQav6UvMhBVkr3gQTkXRkI%2BCdJXbSqbQm7B2rXFm3k0WlhSxBEzIf5Pux5xXJF3a6XHPrYSdkr%2Bi9X8fqQVDVT%2BECb9PRqGjCm8V0dXVKAZ2TotxaeTp03MmaMyjJX5920%2B0gcsXyrqrpr1%2B%2BhNsnv5gbNJiK8%2FIMW5cNCFR2YtPAz7IHRYP94A4GNhgZGuaqdoK3g3L3NdSo71OVcMEWj54p4DCQwsegQ4c1gO3%2FNQuld0SQfbGfE9akcVTdiViolsIzwUQmKInI%2BBb%2BrNTGJir%2FRgDnNgiPhSmbTeBTyENmBCpQ7Jh%2FOMNnLvb4GOqUBGwVxm2ilZlbrOR7AeititenCH51%2BIAPoq4ynVnR9BoMwRNM8SnIoNSZ%2BVGFFfgChYfNSU4rF18j5KTB04DAq0fMtW68WO6k8LhHLb9y3z8Z9x8MmEk%2BdBR6dfkiOVwEoRepWE1131bZDB1oJbR8s1nLe73zCxPLYEQpPXYwL5hlTxki2envhDQQoS13jW3n6lpE9dXq%2B3g8OXgpDUl8UOFQAtbDK&X-Amz-Signature=65d6b9d292c616bf52b2916e01ce7931b41cf5bd4d3e3619859ba782a2d6bd8b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3F777IK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDpb6yeXElPHeNKv1M8qQTSbmy481e4krE%2BW0Di%2FMqkIwIgLG5op0XEQNmStqllrK2Alq7wAin7BWNMluq2azZ4euUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWoTVC3fpad2jDG1CrcA9TDg%2FLkfHjE2uCN8BFF%2FSKH27Rq%2B1c1bVDN2DpFjyfsBahznHSEhhs8jOYRF0kEWgS7n064R877WbEoNriFZjh8em8qifeXdNApsfBDrrXe3EYDj73%2FJW7GMi%2FT84jzR9HL%2FEOvglnB2Tm1N9jyFSPDADbGvKr2r%2F2ZUG%2BFOOfHXeeDszPoW%2FViXKYaFe3tD%2FGgP2LVVHbhtl%2FKzGnE8u0hGPYTihCyAZScLNEz3TzHZIuovMUsip70o5HJEPrfAjuIAjpMHsp7sAWwR4hux9fyaSb9t75eKbbDBG9oVD2sRylgq53tyciqHq8zRqb6ig1EzKrQav6UvMhBVkr3gQTkXRkI%2BCdJXbSqbQm7B2rXFm3k0WlhSxBEzIf5Pux5xXJF3a6XHPrYSdkr%2Bi9X8fqQVDVT%2BECb9PRqGjCm8V0dXVKAZ2TotxaeTp03MmaMyjJX5920%2B0gcsXyrqrpr1%2B%2BhNsnv5gbNJiK8%2FIMW5cNCFR2YtPAz7IHRYP94A4GNhgZGuaqdoK3g3L3NdSo71OVcMEWj54p4DCQwsegQ4c1gO3%2FNQuld0SQfbGfE9akcVTdiViolsIzwUQmKInI%2BBb%2BrNTGJir%2FRgDnNgiPhSmbTeBTyENmBCpQ7Jh%2FOMNnLvb4GOqUBGwVxm2ilZlbrOR7AeititenCH51%2BIAPoq4ynVnR9BoMwRNM8SnIoNSZ%2BVGFFfgChYfNSU4rF18j5KTB04DAq0fMtW68WO6k8LhHLb9y3z8Z9x8MmEk%2BdBR6dfkiOVwEoRepWE1131bZDB1oJbR8s1nLe73zCxPLYEQpPXYwL5hlTxki2envhDQQoS13jW3n6lpE9dXq%2B3g8OXgpDUl8UOFQAtbDK&X-Amz-Signature=44680e91481e2ee5818820a7e7e9b2b28d2685cb757650e0a781dc3b826931a5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
