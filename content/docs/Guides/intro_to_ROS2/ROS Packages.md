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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFDV4WO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGsTIq1r6LaURb6OHCzY2iu7L5N81cLHRoaNFyfW%2FwfAiEA3egdIdbMDb%2F4z3gUgZojL7gbP09WrnvcgZGMzMs4VGgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDXZFPB2mp8fUCkzyrcA2ej5buHq1CegJurxCV4EbfAGFIZ2NuNuLJUTw4wEV6rTik4HhGu6JvPjA5fag3iflYQvcB2EltHeEXKRjIDScO%2FnI71aNdemV10%2B7mDC2wozq0b09T5ydhrJuCckJlpvFCwfqvs0xZwKm2JifKnl2zGqU1boRZ0VgvMMVLwJ0lX6BsbUN%2B8IfdmFVnonrDBkTIdZDm%2BHd8K3QBRe9ORSFZCC54i26qPvdsSlqIEYXI1buzyZK8zczJSTA%2FVhNYu5jfflSYi1wIiya3FVjWgkH4MmbTCFqfqiajOPvvZzGWzFn2F8rguaQ3rI%2FBCcofwYQzXnt5ZM%2FZi13ZC1gmQZEttfDSYf%2BbGm1U6kqCv09j1Y6ZJhUuJ5N9bHXPoXWeHXBtn337J%2Bf25HNtarKdKxf6JpRh1q81ATtZDykGYWr3PGlvWQdKXBEEbWbyltJsOOtYW%2Bec4P8CsRWroos13cPW%2FLxjGaItjvbeHPkEUVtgz7IRr61BYSsM8MfvEwURQ6zD9UTo0Aqi2HKg3dQXRAHXt9SRADGKn5JO4tUC7yEd6bfUHyLV0cnrV2Z%2BABHfmSa75D1ppWcHOsWWBavx%2B7nbRZP0st0%2FoIsztVjSIZDUGKHqGdzDDvVgLE%2BIqMMf99sEGOqUB6kwu%2Bt3WSR0AhPGxgAVOTgjrwkto4DmQjl0hI3giXcU0us8B2etsAHTzM3DUnU7VbyWl2tq9vUlqx9HyWhJOYAqG8pEZR550o6xi7p5VxS9muSXqBxhmnKyZyOj4%2F4YSa4m8Xs6%2FfVUWsLgXEWT9c1xygb4lZNeXo1ntP7Qx4OuSsG8YpcybtVMjLtphgrSc1qx7OZ8cIL5cp%2FE%2FS8VWlvEub8Gi&X-Amz-Signature=ab32dddd6b486738664cb33c7db225d42172a2311bc0ca42869d265c8c4deced&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFDV4WO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGsTIq1r6LaURb6OHCzY2iu7L5N81cLHRoaNFyfW%2FwfAiEA3egdIdbMDb%2F4z3gUgZojL7gbP09WrnvcgZGMzMs4VGgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDXZFPB2mp8fUCkzyrcA2ej5buHq1CegJurxCV4EbfAGFIZ2NuNuLJUTw4wEV6rTik4HhGu6JvPjA5fag3iflYQvcB2EltHeEXKRjIDScO%2FnI71aNdemV10%2B7mDC2wozq0b09T5ydhrJuCckJlpvFCwfqvs0xZwKm2JifKnl2zGqU1boRZ0VgvMMVLwJ0lX6BsbUN%2B8IfdmFVnonrDBkTIdZDm%2BHd8K3QBRe9ORSFZCC54i26qPvdsSlqIEYXI1buzyZK8zczJSTA%2FVhNYu5jfflSYi1wIiya3FVjWgkH4MmbTCFqfqiajOPvvZzGWzFn2F8rguaQ3rI%2FBCcofwYQzXnt5ZM%2FZi13ZC1gmQZEttfDSYf%2BbGm1U6kqCv09j1Y6ZJhUuJ5N9bHXPoXWeHXBtn337J%2Bf25HNtarKdKxf6JpRh1q81ATtZDykGYWr3PGlvWQdKXBEEbWbyltJsOOtYW%2Bec4P8CsRWroos13cPW%2FLxjGaItjvbeHPkEUVtgz7IRr61BYSsM8MfvEwURQ6zD9UTo0Aqi2HKg3dQXRAHXt9SRADGKn5JO4tUC7yEd6bfUHyLV0cnrV2Z%2BABHfmSa75D1ppWcHOsWWBavx%2B7nbRZP0st0%2FoIsztVjSIZDUGKHqGdzDDvVgLE%2BIqMMf99sEGOqUB6kwu%2Bt3WSR0AhPGxgAVOTgjrwkto4DmQjl0hI3giXcU0us8B2etsAHTzM3DUnU7VbyWl2tq9vUlqx9HyWhJOYAqG8pEZR550o6xi7p5VxS9muSXqBxhmnKyZyOj4%2F4YSa4m8Xs6%2FfVUWsLgXEWT9c1xygb4lZNeXo1ntP7Qx4OuSsG8YpcybtVMjLtphgrSc1qx7OZ8cIL5cp%2FE%2FS8VWlvEub8Gi&X-Amz-Signature=95034f764ec19edde2bfda870b0fa80a191261d3a0a6b32e8c859ed3ffbcfdba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFDV4WO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGsTIq1r6LaURb6OHCzY2iu7L5N81cLHRoaNFyfW%2FwfAiEA3egdIdbMDb%2F4z3gUgZojL7gbP09WrnvcgZGMzMs4VGgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDXZFPB2mp8fUCkzyrcA2ej5buHq1CegJurxCV4EbfAGFIZ2NuNuLJUTw4wEV6rTik4HhGu6JvPjA5fag3iflYQvcB2EltHeEXKRjIDScO%2FnI71aNdemV10%2B7mDC2wozq0b09T5ydhrJuCckJlpvFCwfqvs0xZwKm2JifKnl2zGqU1boRZ0VgvMMVLwJ0lX6BsbUN%2B8IfdmFVnonrDBkTIdZDm%2BHd8K3QBRe9ORSFZCC54i26qPvdsSlqIEYXI1buzyZK8zczJSTA%2FVhNYu5jfflSYi1wIiya3FVjWgkH4MmbTCFqfqiajOPvvZzGWzFn2F8rguaQ3rI%2FBCcofwYQzXnt5ZM%2FZi13ZC1gmQZEttfDSYf%2BbGm1U6kqCv09j1Y6ZJhUuJ5N9bHXPoXWeHXBtn337J%2Bf25HNtarKdKxf6JpRh1q81ATtZDykGYWr3PGlvWQdKXBEEbWbyltJsOOtYW%2Bec4P8CsRWroos13cPW%2FLxjGaItjvbeHPkEUVtgz7IRr61BYSsM8MfvEwURQ6zD9UTo0Aqi2HKg3dQXRAHXt9SRADGKn5JO4tUC7yEd6bfUHyLV0cnrV2Z%2BABHfmSa75D1ppWcHOsWWBavx%2B7nbRZP0st0%2FoIsztVjSIZDUGKHqGdzDDvVgLE%2BIqMMf99sEGOqUB6kwu%2Bt3WSR0AhPGxgAVOTgjrwkto4DmQjl0hI3giXcU0us8B2etsAHTzM3DUnU7VbyWl2tq9vUlqx9HyWhJOYAqG8pEZR550o6xi7p5VxS9muSXqBxhmnKyZyOj4%2F4YSa4m8Xs6%2FfVUWsLgXEWT9c1xygb4lZNeXo1ntP7Qx4OuSsG8YpcybtVMjLtphgrSc1qx7OZ8cIL5cp%2FE%2FS8VWlvEub8Gi&X-Amz-Signature=54a02317183b17a163145e3976fcca8c2dfe2d1cb4bcb47fec3df90871d27003&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFDV4WO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGsTIq1r6LaURb6OHCzY2iu7L5N81cLHRoaNFyfW%2FwfAiEA3egdIdbMDb%2F4z3gUgZojL7gbP09WrnvcgZGMzMs4VGgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDXZFPB2mp8fUCkzyrcA2ej5buHq1CegJurxCV4EbfAGFIZ2NuNuLJUTw4wEV6rTik4HhGu6JvPjA5fag3iflYQvcB2EltHeEXKRjIDScO%2FnI71aNdemV10%2B7mDC2wozq0b09T5ydhrJuCckJlpvFCwfqvs0xZwKm2JifKnl2zGqU1boRZ0VgvMMVLwJ0lX6BsbUN%2B8IfdmFVnonrDBkTIdZDm%2BHd8K3QBRe9ORSFZCC54i26qPvdsSlqIEYXI1buzyZK8zczJSTA%2FVhNYu5jfflSYi1wIiya3FVjWgkH4MmbTCFqfqiajOPvvZzGWzFn2F8rguaQ3rI%2FBCcofwYQzXnt5ZM%2FZi13ZC1gmQZEttfDSYf%2BbGm1U6kqCv09j1Y6ZJhUuJ5N9bHXPoXWeHXBtn337J%2Bf25HNtarKdKxf6JpRh1q81ATtZDykGYWr3PGlvWQdKXBEEbWbyltJsOOtYW%2Bec4P8CsRWroos13cPW%2FLxjGaItjvbeHPkEUVtgz7IRr61BYSsM8MfvEwURQ6zD9UTo0Aqi2HKg3dQXRAHXt9SRADGKn5JO4tUC7yEd6bfUHyLV0cnrV2Z%2BABHfmSa75D1ppWcHOsWWBavx%2B7nbRZP0st0%2FoIsztVjSIZDUGKHqGdzDDvVgLE%2BIqMMf99sEGOqUB6kwu%2Bt3WSR0AhPGxgAVOTgjrwkto4DmQjl0hI3giXcU0us8B2etsAHTzM3DUnU7VbyWl2tq9vUlqx9HyWhJOYAqG8pEZR550o6xi7p5VxS9muSXqBxhmnKyZyOj4%2F4YSa4m8Xs6%2FfVUWsLgXEWT9c1xygb4lZNeXo1ntP7Qx4OuSsG8YpcybtVMjLtphgrSc1qx7OZ8cIL5cp%2FE%2FS8VWlvEub8Gi&X-Amz-Signature=7b77b7887f1879144518d5c5090d2730e9443e8f220fc089378bb39c23f03b29&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFDV4WO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGsTIq1r6LaURb6OHCzY2iu7L5N81cLHRoaNFyfW%2FwfAiEA3egdIdbMDb%2F4z3gUgZojL7gbP09WrnvcgZGMzMs4VGgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDXZFPB2mp8fUCkzyrcA2ej5buHq1CegJurxCV4EbfAGFIZ2NuNuLJUTw4wEV6rTik4HhGu6JvPjA5fag3iflYQvcB2EltHeEXKRjIDScO%2FnI71aNdemV10%2B7mDC2wozq0b09T5ydhrJuCckJlpvFCwfqvs0xZwKm2JifKnl2zGqU1boRZ0VgvMMVLwJ0lX6BsbUN%2B8IfdmFVnonrDBkTIdZDm%2BHd8K3QBRe9ORSFZCC54i26qPvdsSlqIEYXI1buzyZK8zczJSTA%2FVhNYu5jfflSYi1wIiya3FVjWgkH4MmbTCFqfqiajOPvvZzGWzFn2F8rguaQ3rI%2FBCcofwYQzXnt5ZM%2FZi13ZC1gmQZEttfDSYf%2BbGm1U6kqCv09j1Y6ZJhUuJ5N9bHXPoXWeHXBtn337J%2Bf25HNtarKdKxf6JpRh1q81ATtZDykGYWr3PGlvWQdKXBEEbWbyltJsOOtYW%2Bec4P8CsRWroos13cPW%2FLxjGaItjvbeHPkEUVtgz7IRr61BYSsM8MfvEwURQ6zD9UTo0Aqi2HKg3dQXRAHXt9SRADGKn5JO4tUC7yEd6bfUHyLV0cnrV2Z%2BABHfmSa75D1ppWcHOsWWBavx%2B7nbRZP0st0%2FoIsztVjSIZDUGKHqGdzDDvVgLE%2BIqMMf99sEGOqUB6kwu%2Bt3WSR0AhPGxgAVOTgjrwkto4DmQjl0hI3giXcU0us8B2etsAHTzM3DUnU7VbyWl2tq9vUlqx9HyWhJOYAqG8pEZR550o6xi7p5VxS9muSXqBxhmnKyZyOj4%2F4YSa4m8Xs6%2FfVUWsLgXEWT9c1xygb4lZNeXo1ntP7Qx4OuSsG8YpcybtVMjLtphgrSc1qx7OZ8cIL5cp%2FE%2FS8VWlvEub8Gi&X-Amz-Signature=94c37dec727a20d359d1689906132d60c4356e004b4cac4a15f06d763f91b398&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFDV4WO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGsTIq1r6LaURb6OHCzY2iu7L5N81cLHRoaNFyfW%2FwfAiEA3egdIdbMDb%2F4z3gUgZojL7gbP09WrnvcgZGMzMs4VGgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDXZFPB2mp8fUCkzyrcA2ej5buHq1CegJurxCV4EbfAGFIZ2NuNuLJUTw4wEV6rTik4HhGu6JvPjA5fag3iflYQvcB2EltHeEXKRjIDScO%2FnI71aNdemV10%2B7mDC2wozq0b09T5ydhrJuCckJlpvFCwfqvs0xZwKm2JifKnl2zGqU1boRZ0VgvMMVLwJ0lX6BsbUN%2B8IfdmFVnonrDBkTIdZDm%2BHd8K3QBRe9ORSFZCC54i26qPvdsSlqIEYXI1buzyZK8zczJSTA%2FVhNYu5jfflSYi1wIiya3FVjWgkH4MmbTCFqfqiajOPvvZzGWzFn2F8rguaQ3rI%2FBCcofwYQzXnt5ZM%2FZi13ZC1gmQZEttfDSYf%2BbGm1U6kqCv09j1Y6ZJhUuJ5N9bHXPoXWeHXBtn337J%2Bf25HNtarKdKxf6JpRh1q81ATtZDykGYWr3PGlvWQdKXBEEbWbyltJsOOtYW%2Bec4P8CsRWroos13cPW%2FLxjGaItjvbeHPkEUVtgz7IRr61BYSsM8MfvEwURQ6zD9UTo0Aqi2HKg3dQXRAHXt9SRADGKn5JO4tUC7yEd6bfUHyLV0cnrV2Z%2BABHfmSa75D1ppWcHOsWWBavx%2B7nbRZP0st0%2FoIsztVjSIZDUGKHqGdzDDvVgLE%2BIqMMf99sEGOqUB6kwu%2Bt3WSR0AhPGxgAVOTgjrwkto4DmQjl0hI3giXcU0us8B2etsAHTzM3DUnU7VbyWl2tq9vUlqx9HyWhJOYAqG8pEZR550o6xi7p5VxS9muSXqBxhmnKyZyOj4%2F4YSa4m8Xs6%2FfVUWsLgXEWT9c1xygb4lZNeXo1ntP7Qx4OuSsG8YpcybtVMjLtphgrSc1qx7OZ8cIL5cp%2FE%2FS8VWlvEub8Gi&X-Amz-Signature=a51e868d74bd0e0c82492e16336a01a4ac1ac99d6ffe0797bde342e4f0358d80&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFDV4WO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBGsTIq1r6LaURb6OHCzY2iu7L5N81cLHRoaNFyfW%2FwfAiEA3egdIdbMDb%2F4z3gUgZojL7gbP09WrnvcgZGMzMs4VGgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDXZFPB2mp8fUCkzyrcA2ej5buHq1CegJurxCV4EbfAGFIZ2NuNuLJUTw4wEV6rTik4HhGu6JvPjA5fag3iflYQvcB2EltHeEXKRjIDScO%2FnI71aNdemV10%2B7mDC2wozq0b09T5ydhrJuCckJlpvFCwfqvs0xZwKm2JifKnl2zGqU1boRZ0VgvMMVLwJ0lX6BsbUN%2B8IfdmFVnonrDBkTIdZDm%2BHd8K3QBRe9ORSFZCC54i26qPvdsSlqIEYXI1buzyZK8zczJSTA%2FVhNYu5jfflSYi1wIiya3FVjWgkH4MmbTCFqfqiajOPvvZzGWzFn2F8rguaQ3rI%2FBCcofwYQzXnt5ZM%2FZi13ZC1gmQZEttfDSYf%2BbGm1U6kqCv09j1Y6ZJhUuJ5N9bHXPoXWeHXBtn337J%2Bf25HNtarKdKxf6JpRh1q81ATtZDykGYWr3PGlvWQdKXBEEbWbyltJsOOtYW%2Bec4P8CsRWroos13cPW%2FLxjGaItjvbeHPkEUVtgz7IRr61BYSsM8MfvEwURQ6zD9UTo0Aqi2HKg3dQXRAHXt9SRADGKn5JO4tUC7yEd6bfUHyLV0cnrV2Z%2BABHfmSa75D1ppWcHOsWWBavx%2B7nbRZP0st0%2FoIsztVjSIZDUGKHqGdzDDvVgLE%2BIqMMf99sEGOqUB6kwu%2Bt3WSR0AhPGxgAVOTgjrwkto4DmQjl0hI3giXcU0us8B2etsAHTzM3DUnU7VbyWl2tq9vUlqx9HyWhJOYAqG8pEZR550o6xi7p5VxS9muSXqBxhmnKyZyOj4%2F4YSa4m8Xs6%2FfVUWsLgXEWT9c1xygb4lZNeXo1ntP7Qx4OuSsG8YpcybtVMjLtphgrSc1qx7OZ8cIL5cp%2FE%2FS8VWlvEub8Gi&X-Amz-Signature=81bad8db393828de8d7afbb2d6f7b4a9f8852f2e74fef5453bf57fb04dbf1872&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
