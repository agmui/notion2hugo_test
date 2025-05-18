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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23WNDOB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4E40kqsSQ7mYolH7ZgjiQ21sSMxiwuC7AdiPZ1JOAgIhAJMbUYJQQjmzreVlI5m7hlmUS%2Fe3FCmZJM%2BHuKNMe4iNKv8DCGoQABoMNjM3NDIzMTgzODA1Igw3baqz%2FCNeGiBisCEq3AO3732oMe0DFOTct%2ByHVyOwUG%2FPu8BqOs9lUJLa%2F9S9P6tl46Uj%2FKbgiTyXKRwL2mS0cD78ww68d%2BwsCe3QQ2jZ7c3jVDfI2AmhTYfgMHhLfIbky3tsuqzg4f1q8ymKo26eJW70RVbcFiJuopwzyFaaJJyw6gJz4NmceltCacq%2FbwSkAAIXy7CDt8nRxZQj9893kS0QXi%2Bd%2BYBqZMwtTuwu3YLEzlVD5NnnDUVuGoIlwSJrqnA%2Bg6zVFonfI%2Fn%2Fjhkbp8AERwrF%2FL6yAEV%2FXn%2BNX4K4i4RyH5bnGei3J4RkE6vdDg8%2FWzK8e1R0cnE5TFqTHmDRnBEyPywphF2Ncew8t6ok1V%2B3GL3cCi5tXaDf4E2vKeZcKErTu%2FLXc9ZQUSmokuXSkcGBXy2DfHxruqjndaCtXhhEHc2lzHvr%2FBbUhzl2hhpAl%2FfJFELNx2UDV98swKpN8lJzoc7MG8B19b1xvmRK07WFAkczl8oTsDrJdKMxdhGR0r21a1qhFnEdG2FJj2ZXqDOo6HN463s9nhTLtc0TsfZ7f85MrSkNulPh%2Fq92GANX0PH82LogTuRYOfeuQhFTPYtudINjU1mXFL7DkoNGQDl3JI8iHNFrFmBp9wnOc2hwnfwsBrcymjDT16TBBjqkAe0hZCe%2F7OYwksr9mpD5KyqfBm%2BHNRH2rLbZ9U0y2h%2Bxah0K%2BDuMGCDNAi33j5boAhdPhQvtfXC3D98PZ%2B6BWFCtG0tUDAdIE8xY3BxxtZzn4PLMjG2djsT6%2B95e1fcNokooBO71%2F%2BWzflb5iFmtMY6pluJxqvk8vpInvTnwcrjllc%2BpoaRiDYtNhMiOHZFRv%2F16A2SqKUtfwzEDnMRGaxzX5GWw&X-Amz-Signature=dc2c2d34fe56739cc92abbc34d6a444d81cad633193242215ceb03e8dd105537&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23WNDOB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4E40kqsSQ7mYolH7ZgjiQ21sSMxiwuC7AdiPZ1JOAgIhAJMbUYJQQjmzreVlI5m7hlmUS%2Fe3FCmZJM%2BHuKNMe4iNKv8DCGoQABoMNjM3NDIzMTgzODA1Igw3baqz%2FCNeGiBisCEq3AO3732oMe0DFOTct%2ByHVyOwUG%2FPu8BqOs9lUJLa%2F9S9P6tl46Uj%2FKbgiTyXKRwL2mS0cD78ww68d%2BwsCe3QQ2jZ7c3jVDfI2AmhTYfgMHhLfIbky3tsuqzg4f1q8ymKo26eJW70RVbcFiJuopwzyFaaJJyw6gJz4NmceltCacq%2FbwSkAAIXy7CDt8nRxZQj9893kS0QXi%2Bd%2BYBqZMwtTuwu3YLEzlVD5NnnDUVuGoIlwSJrqnA%2Bg6zVFonfI%2Fn%2Fjhkbp8AERwrF%2FL6yAEV%2FXn%2BNX4K4i4RyH5bnGei3J4RkE6vdDg8%2FWzK8e1R0cnE5TFqTHmDRnBEyPywphF2Ncew8t6ok1V%2B3GL3cCi5tXaDf4E2vKeZcKErTu%2FLXc9ZQUSmokuXSkcGBXy2DfHxruqjndaCtXhhEHc2lzHvr%2FBbUhzl2hhpAl%2FfJFELNx2UDV98swKpN8lJzoc7MG8B19b1xvmRK07WFAkczl8oTsDrJdKMxdhGR0r21a1qhFnEdG2FJj2ZXqDOo6HN463s9nhTLtc0TsfZ7f85MrSkNulPh%2Fq92GANX0PH82LogTuRYOfeuQhFTPYtudINjU1mXFL7DkoNGQDl3JI8iHNFrFmBp9wnOc2hwnfwsBrcymjDT16TBBjqkAe0hZCe%2F7OYwksr9mpD5KyqfBm%2BHNRH2rLbZ9U0y2h%2Bxah0K%2BDuMGCDNAi33j5boAhdPhQvtfXC3D98PZ%2B6BWFCtG0tUDAdIE8xY3BxxtZzn4PLMjG2djsT6%2B95e1fcNokooBO71%2F%2BWzflb5iFmtMY6pluJxqvk8vpInvTnwcrjllc%2BpoaRiDYtNhMiOHZFRv%2F16A2SqKUtfwzEDnMRGaxzX5GWw&X-Amz-Signature=75154c89ed785e913e776438c15e37f3fc337d872003c15337f08c09ee308f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23WNDOB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4E40kqsSQ7mYolH7ZgjiQ21sSMxiwuC7AdiPZ1JOAgIhAJMbUYJQQjmzreVlI5m7hlmUS%2Fe3FCmZJM%2BHuKNMe4iNKv8DCGoQABoMNjM3NDIzMTgzODA1Igw3baqz%2FCNeGiBisCEq3AO3732oMe0DFOTct%2ByHVyOwUG%2FPu8BqOs9lUJLa%2F9S9P6tl46Uj%2FKbgiTyXKRwL2mS0cD78ww68d%2BwsCe3QQ2jZ7c3jVDfI2AmhTYfgMHhLfIbky3tsuqzg4f1q8ymKo26eJW70RVbcFiJuopwzyFaaJJyw6gJz4NmceltCacq%2FbwSkAAIXy7CDt8nRxZQj9893kS0QXi%2Bd%2BYBqZMwtTuwu3YLEzlVD5NnnDUVuGoIlwSJrqnA%2Bg6zVFonfI%2Fn%2Fjhkbp8AERwrF%2FL6yAEV%2FXn%2BNX4K4i4RyH5bnGei3J4RkE6vdDg8%2FWzK8e1R0cnE5TFqTHmDRnBEyPywphF2Ncew8t6ok1V%2B3GL3cCi5tXaDf4E2vKeZcKErTu%2FLXc9ZQUSmokuXSkcGBXy2DfHxruqjndaCtXhhEHc2lzHvr%2FBbUhzl2hhpAl%2FfJFELNx2UDV98swKpN8lJzoc7MG8B19b1xvmRK07WFAkczl8oTsDrJdKMxdhGR0r21a1qhFnEdG2FJj2ZXqDOo6HN463s9nhTLtc0TsfZ7f85MrSkNulPh%2Fq92GANX0PH82LogTuRYOfeuQhFTPYtudINjU1mXFL7DkoNGQDl3JI8iHNFrFmBp9wnOc2hwnfwsBrcymjDT16TBBjqkAe0hZCe%2F7OYwksr9mpD5KyqfBm%2BHNRH2rLbZ9U0y2h%2Bxah0K%2BDuMGCDNAi33j5boAhdPhQvtfXC3D98PZ%2B6BWFCtG0tUDAdIE8xY3BxxtZzn4PLMjG2djsT6%2B95e1fcNokooBO71%2F%2BWzflb5iFmtMY6pluJxqvk8vpInvTnwcrjllc%2BpoaRiDYtNhMiOHZFRv%2F16A2SqKUtfwzEDnMRGaxzX5GWw&X-Amz-Signature=fa373e2b3de00e0949451bdd60a7041d3d8f28b9b788d423affacebfafd4a80f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23WNDOB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4E40kqsSQ7mYolH7ZgjiQ21sSMxiwuC7AdiPZ1JOAgIhAJMbUYJQQjmzreVlI5m7hlmUS%2Fe3FCmZJM%2BHuKNMe4iNKv8DCGoQABoMNjM3NDIzMTgzODA1Igw3baqz%2FCNeGiBisCEq3AO3732oMe0DFOTct%2ByHVyOwUG%2FPu8BqOs9lUJLa%2F9S9P6tl46Uj%2FKbgiTyXKRwL2mS0cD78ww68d%2BwsCe3QQ2jZ7c3jVDfI2AmhTYfgMHhLfIbky3tsuqzg4f1q8ymKo26eJW70RVbcFiJuopwzyFaaJJyw6gJz4NmceltCacq%2FbwSkAAIXy7CDt8nRxZQj9893kS0QXi%2Bd%2BYBqZMwtTuwu3YLEzlVD5NnnDUVuGoIlwSJrqnA%2Bg6zVFonfI%2Fn%2Fjhkbp8AERwrF%2FL6yAEV%2FXn%2BNX4K4i4RyH5bnGei3J4RkE6vdDg8%2FWzK8e1R0cnE5TFqTHmDRnBEyPywphF2Ncew8t6ok1V%2B3GL3cCi5tXaDf4E2vKeZcKErTu%2FLXc9ZQUSmokuXSkcGBXy2DfHxruqjndaCtXhhEHc2lzHvr%2FBbUhzl2hhpAl%2FfJFELNx2UDV98swKpN8lJzoc7MG8B19b1xvmRK07WFAkczl8oTsDrJdKMxdhGR0r21a1qhFnEdG2FJj2ZXqDOo6HN463s9nhTLtc0TsfZ7f85MrSkNulPh%2Fq92GANX0PH82LogTuRYOfeuQhFTPYtudINjU1mXFL7DkoNGQDl3JI8iHNFrFmBp9wnOc2hwnfwsBrcymjDT16TBBjqkAe0hZCe%2F7OYwksr9mpD5KyqfBm%2BHNRH2rLbZ9U0y2h%2Bxah0K%2BDuMGCDNAi33j5boAhdPhQvtfXC3D98PZ%2B6BWFCtG0tUDAdIE8xY3BxxtZzn4PLMjG2djsT6%2B95e1fcNokooBO71%2F%2BWzflb5iFmtMY6pluJxqvk8vpInvTnwcrjllc%2BpoaRiDYtNhMiOHZFRv%2F16A2SqKUtfwzEDnMRGaxzX5GWw&X-Amz-Signature=42d4eb3fbc6303f9424503ce773eb47c72df859ccc52d7087b6adc971b0db609&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23WNDOB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4E40kqsSQ7mYolH7ZgjiQ21sSMxiwuC7AdiPZ1JOAgIhAJMbUYJQQjmzreVlI5m7hlmUS%2Fe3FCmZJM%2BHuKNMe4iNKv8DCGoQABoMNjM3NDIzMTgzODA1Igw3baqz%2FCNeGiBisCEq3AO3732oMe0DFOTct%2ByHVyOwUG%2FPu8BqOs9lUJLa%2F9S9P6tl46Uj%2FKbgiTyXKRwL2mS0cD78ww68d%2BwsCe3QQ2jZ7c3jVDfI2AmhTYfgMHhLfIbky3tsuqzg4f1q8ymKo26eJW70RVbcFiJuopwzyFaaJJyw6gJz4NmceltCacq%2FbwSkAAIXy7CDt8nRxZQj9893kS0QXi%2Bd%2BYBqZMwtTuwu3YLEzlVD5NnnDUVuGoIlwSJrqnA%2Bg6zVFonfI%2Fn%2Fjhkbp8AERwrF%2FL6yAEV%2FXn%2BNX4K4i4RyH5bnGei3J4RkE6vdDg8%2FWzK8e1R0cnE5TFqTHmDRnBEyPywphF2Ncew8t6ok1V%2B3GL3cCi5tXaDf4E2vKeZcKErTu%2FLXc9ZQUSmokuXSkcGBXy2DfHxruqjndaCtXhhEHc2lzHvr%2FBbUhzl2hhpAl%2FfJFELNx2UDV98swKpN8lJzoc7MG8B19b1xvmRK07WFAkczl8oTsDrJdKMxdhGR0r21a1qhFnEdG2FJj2ZXqDOo6HN463s9nhTLtc0TsfZ7f85MrSkNulPh%2Fq92GANX0PH82LogTuRYOfeuQhFTPYtudINjU1mXFL7DkoNGQDl3JI8iHNFrFmBp9wnOc2hwnfwsBrcymjDT16TBBjqkAe0hZCe%2F7OYwksr9mpD5KyqfBm%2BHNRH2rLbZ9U0y2h%2Bxah0K%2BDuMGCDNAi33j5boAhdPhQvtfXC3D98PZ%2B6BWFCtG0tUDAdIE8xY3BxxtZzn4PLMjG2djsT6%2B95e1fcNokooBO71%2F%2BWzflb5iFmtMY6pluJxqvk8vpInvTnwcrjllc%2BpoaRiDYtNhMiOHZFRv%2F16A2SqKUtfwzEDnMRGaxzX5GWw&X-Amz-Signature=77973c3ad7866f09cca27bb277135b5807353eeff777b979ecaa5401ebd17c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23WNDOB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4E40kqsSQ7mYolH7ZgjiQ21sSMxiwuC7AdiPZ1JOAgIhAJMbUYJQQjmzreVlI5m7hlmUS%2Fe3FCmZJM%2BHuKNMe4iNKv8DCGoQABoMNjM3NDIzMTgzODA1Igw3baqz%2FCNeGiBisCEq3AO3732oMe0DFOTct%2ByHVyOwUG%2FPu8BqOs9lUJLa%2F9S9P6tl46Uj%2FKbgiTyXKRwL2mS0cD78ww68d%2BwsCe3QQ2jZ7c3jVDfI2AmhTYfgMHhLfIbky3tsuqzg4f1q8ymKo26eJW70RVbcFiJuopwzyFaaJJyw6gJz4NmceltCacq%2FbwSkAAIXy7CDt8nRxZQj9893kS0QXi%2Bd%2BYBqZMwtTuwu3YLEzlVD5NnnDUVuGoIlwSJrqnA%2Bg6zVFonfI%2Fn%2Fjhkbp8AERwrF%2FL6yAEV%2FXn%2BNX4K4i4RyH5bnGei3J4RkE6vdDg8%2FWzK8e1R0cnE5TFqTHmDRnBEyPywphF2Ncew8t6ok1V%2B3GL3cCi5tXaDf4E2vKeZcKErTu%2FLXc9ZQUSmokuXSkcGBXy2DfHxruqjndaCtXhhEHc2lzHvr%2FBbUhzl2hhpAl%2FfJFELNx2UDV98swKpN8lJzoc7MG8B19b1xvmRK07WFAkczl8oTsDrJdKMxdhGR0r21a1qhFnEdG2FJj2ZXqDOo6HN463s9nhTLtc0TsfZ7f85MrSkNulPh%2Fq92GANX0PH82LogTuRYOfeuQhFTPYtudINjU1mXFL7DkoNGQDl3JI8iHNFrFmBp9wnOc2hwnfwsBrcymjDT16TBBjqkAe0hZCe%2F7OYwksr9mpD5KyqfBm%2BHNRH2rLbZ9U0y2h%2Bxah0K%2BDuMGCDNAi33j5boAhdPhQvtfXC3D98PZ%2B6BWFCtG0tUDAdIE8xY3BxxtZzn4PLMjG2djsT6%2B95e1fcNokooBO71%2F%2BWzflb5iFmtMY6pluJxqvk8vpInvTnwcrjllc%2BpoaRiDYtNhMiOHZFRv%2F16A2SqKUtfwzEDnMRGaxzX5GWw&X-Amz-Signature=ca0604335d51b3db8eba4b4e953158e39fd7652649393f8967b259cd396db8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23WNDOB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4E40kqsSQ7mYolH7ZgjiQ21sSMxiwuC7AdiPZ1JOAgIhAJMbUYJQQjmzreVlI5m7hlmUS%2Fe3FCmZJM%2BHuKNMe4iNKv8DCGoQABoMNjM3NDIzMTgzODA1Igw3baqz%2FCNeGiBisCEq3AO3732oMe0DFOTct%2ByHVyOwUG%2FPu8BqOs9lUJLa%2F9S9P6tl46Uj%2FKbgiTyXKRwL2mS0cD78ww68d%2BwsCe3QQ2jZ7c3jVDfI2AmhTYfgMHhLfIbky3tsuqzg4f1q8ymKo26eJW70RVbcFiJuopwzyFaaJJyw6gJz4NmceltCacq%2FbwSkAAIXy7CDt8nRxZQj9893kS0QXi%2Bd%2BYBqZMwtTuwu3YLEzlVD5NnnDUVuGoIlwSJrqnA%2Bg6zVFonfI%2Fn%2Fjhkbp8AERwrF%2FL6yAEV%2FXn%2BNX4K4i4RyH5bnGei3J4RkE6vdDg8%2FWzK8e1R0cnE5TFqTHmDRnBEyPywphF2Ncew8t6ok1V%2B3GL3cCi5tXaDf4E2vKeZcKErTu%2FLXc9ZQUSmokuXSkcGBXy2DfHxruqjndaCtXhhEHc2lzHvr%2FBbUhzl2hhpAl%2FfJFELNx2UDV98swKpN8lJzoc7MG8B19b1xvmRK07WFAkczl8oTsDrJdKMxdhGR0r21a1qhFnEdG2FJj2ZXqDOo6HN463s9nhTLtc0TsfZ7f85MrSkNulPh%2Fq92GANX0PH82LogTuRYOfeuQhFTPYtudINjU1mXFL7DkoNGQDl3JI8iHNFrFmBp9wnOc2hwnfwsBrcymjDT16TBBjqkAe0hZCe%2F7OYwksr9mpD5KyqfBm%2BHNRH2rLbZ9U0y2h%2Bxah0K%2BDuMGCDNAi33j5boAhdPhQvtfXC3D98PZ%2B6BWFCtG0tUDAdIE8xY3BxxtZzn4PLMjG2djsT6%2B95e1fcNokooBO71%2F%2BWzflb5iFmtMY6pluJxqvk8vpInvTnwcrjllc%2BpoaRiDYtNhMiOHZFRv%2F16A2SqKUtfwzEDnMRGaxzX5GWw&X-Amz-Signature=a96adb43d67ac15cfb6deabb7249747f26773ad1cb969895094fde26ad00ca01&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
