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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEND2DHT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTG6JbGFaAhZGcSaQYTc%2BCi7vORoV30w8xEDxGFEYwAIhAJ6l%2BXXs2e%2FoCeZh8lMvocjJ46Qqeck9kMBfn%2FE0PuOMKv8DCBEQABoMNjM3NDIzMTgzODA1Igwh4E6S2%2B8ov5DOHaIq3AOozonM7caujq8qhY%2FWAkH5XSFiCQ55k4WtCdatbOm93ISCXH%2BRa94xq4Lj%2B19JV5AeAgfizb0LvoZmMYsLWbwk2YO4qTTfWZIKl9PmYue9JAe9q%2FrfqDDmS1%2BZtldIzwnoIKSdJ9piOluJtmxDFuP%2B1T7x8oNZArspNkGc%2BBAJhK3%2B%2F2wxngqPcZe0PDiecvq2jo57CQll7A8ILRAoTXU6XOssykdX8j4t94gVgoOvMnB9sSWxuK51YXpRV5p1QlkUZVwRqvyStyMDB7LDiWSjZ8cQOMYDc8Ve81vNmriipZHibe2xSGQgPUvEb2qXxrPMxBWKMBpJh80Qn75Gv6V341l5BTCHnNHO1wn6QDEnSNJdr82cNuVtIoEP7EOjhE6LfNk8p0SbWYvVjzzCfqWfGCrlzBXwcoUB1sz2cWm78l2FIB%2F0VHlDov%2F1%2FBOhnBT5XNg%2Bmjs65i9ayGAzP5Ku9RS7NmFT0Guo7o5L58eJ1ZnztQf8I8pa7XGKvTnekhOZ9Qro%2FcR%2FpT%2FFmx1j6R313yD14oAGymZBMqaNQ6cjr%2FstvDYXsOzO6vqiQqN%2B7yGhZHKQx412dNTrgg%2BBZrk8IT1mrCd3UKulPSpIuq8CofbAbgcf8BuIw9sZADD84dS%2BBjqkAaIeMIdrl2%2BZpXKVhsh8nc%2BFPAYoxA3kgpyOgeym0Fb6d1etjcZUb%2FcA1Sv9sE29zrcZEVA72n0wWEjtZTKlLX%2FQYidIFAAlVb4Ulcb0BRQq9Gx2hsd60tKbSgndWGHDponhMkbOc%2FKDsGSY2nekumKYisA7PyoqyQm36pPlXv7%2B6gmWw5ZyBP1XRmdbLtcZ9ePH%2BqUYjkTy2z5II1fjkpmYBiMr&X-Amz-Signature=9c3deb9c72dabba3e125131763cf5ce791f578e044211691820dd25ffd00bc95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEND2DHT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTG6JbGFaAhZGcSaQYTc%2BCi7vORoV30w8xEDxGFEYwAIhAJ6l%2BXXs2e%2FoCeZh8lMvocjJ46Qqeck9kMBfn%2FE0PuOMKv8DCBEQABoMNjM3NDIzMTgzODA1Igwh4E6S2%2B8ov5DOHaIq3AOozonM7caujq8qhY%2FWAkH5XSFiCQ55k4WtCdatbOm93ISCXH%2BRa94xq4Lj%2B19JV5AeAgfizb0LvoZmMYsLWbwk2YO4qTTfWZIKl9PmYue9JAe9q%2FrfqDDmS1%2BZtldIzwnoIKSdJ9piOluJtmxDFuP%2B1T7x8oNZArspNkGc%2BBAJhK3%2B%2F2wxngqPcZe0PDiecvq2jo57CQll7A8ILRAoTXU6XOssykdX8j4t94gVgoOvMnB9sSWxuK51YXpRV5p1QlkUZVwRqvyStyMDB7LDiWSjZ8cQOMYDc8Ve81vNmriipZHibe2xSGQgPUvEb2qXxrPMxBWKMBpJh80Qn75Gv6V341l5BTCHnNHO1wn6QDEnSNJdr82cNuVtIoEP7EOjhE6LfNk8p0SbWYvVjzzCfqWfGCrlzBXwcoUB1sz2cWm78l2FIB%2F0VHlDov%2F1%2FBOhnBT5XNg%2Bmjs65i9ayGAzP5Ku9RS7NmFT0Guo7o5L58eJ1ZnztQf8I8pa7XGKvTnekhOZ9Qro%2FcR%2FpT%2FFmx1j6R313yD14oAGymZBMqaNQ6cjr%2FstvDYXsOzO6vqiQqN%2B7yGhZHKQx412dNTrgg%2BBZrk8IT1mrCd3UKulPSpIuq8CofbAbgcf8BuIw9sZADD84dS%2BBjqkAaIeMIdrl2%2BZpXKVhsh8nc%2BFPAYoxA3kgpyOgeym0Fb6d1etjcZUb%2FcA1Sv9sE29zrcZEVA72n0wWEjtZTKlLX%2FQYidIFAAlVb4Ulcb0BRQq9Gx2hsd60tKbSgndWGHDponhMkbOc%2FKDsGSY2nekumKYisA7PyoqyQm36pPlXv7%2B6gmWw5ZyBP1XRmdbLtcZ9ePH%2BqUYjkTy2z5II1fjkpmYBiMr&X-Amz-Signature=2d9db1228098570a0f5860613247c3b8bc9f98eedfebb70e2df51061bc910675&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEND2DHT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTG6JbGFaAhZGcSaQYTc%2BCi7vORoV30w8xEDxGFEYwAIhAJ6l%2BXXs2e%2FoCeZh8lMvocjJ46Qqeck9kMBfn%2FE0PuOMKv8DCBEQABoMNjM3NDIzMTgzODA1Igwh4E6S2%2B8ov5DOHaIq3AOozonM7caujq8qhY%2FWAkH5XSFiCQ55k4WtCdatbOm93ISCXH%2BRa94xq4Lj%2B19JV5AeAgfizb0LvoZmMYsLWbwk2YO4qTTfWZIKl9PmYue9JAe9q%2FrfqDDmS1%2BZtldIzwnoIKSdJ9piOluJtmxDFuP%2B1T7x8oNZArspNkGc%2BBAJhK3%2B%2F2wxngqPcZe0PDiecvq2jo57CQll7A8ILRAoTXU6XOssykdX8j4t94gVgoOvMnB9sSWxuK51YXpRV5p1QlkUZVwRqvyStyMDB7LDiWSjZ8cQOMYDc8Ve81vNmriipZHibe2xSGQgPUvEb2qXxrPMxBWKMBpJh80Qn75Gv6V341l5BTCHnNHO1wn6QDEnSNJdr82cNuVtIoEP7EOjhE6LfNk8p0SbWYvVjzzCfqWfGCrlzBXwcoUB1sz2cWm78l2FIB%2F0VHlDov%2F1%2FBOhnBT5XNg%2Bmjs65i9ayGAzP5Ku9RS7NmFT0Guo7o5L58eJ1ZnztQf8I8pa7XGKvTnekhOZ9Qro%2FcR%2FpT%2FFmx1j6R313yD14oAGymZBMqaNQ6cjr%2FstvDYXsOzO6vqiQqN%2B7yGhZHKQx412dNTrgg%2BBZrk8IT1mrCd3UKulPSpIuq8CofbAbgcf8BuIw9sZADD84dS%2BBjqkAaIeMIdrl2%2BZpXKVhsh8nc%2BFPAYoxA3kgpyOgeym0Fb6d1etjcZUb%2FcA1Sv9sE29zrcZEVA72n0wWEjtZTKlLX%2FQYidIFAAlVb4Ulcb0BRQq9Gx2hsd60tKbSgndWGHDponhMkbOc%2FKDsGSY2nekumKYisA7PyoqyQm36pPlXv7%2B6gmWw5ZyBP1XRmdbLtcZ9ePH%2BqUYjkTy2z5II1fjkpmYBiMr&X-Amz-Signature=bcf2a8c80727271ab1798a3aeb10fae9d6f721b1352d8ba0872c4569930f86e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEND2DHT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTG6JbGFaAhZGcSaQYTc%2BCi7vORoV30w8xEDxGFEYwAIhAJ6l%2BXXs2e%2FoCeZh8lMvocjJ46Qqeck9kMBfn%2FE0PuOMKv8DCBEQABoMNjM3NDIzMTgzODA1Igwh4E6S2%2B8ov5DOHaIq3AOozonM7caujq8qhY%2FWAkH5XSFiCQ55k4WtCdatbOm93ISCXH%2BRa94xq4Lj%2B19JV5AeAgfizb0LvoZmMYsLWbwk2YO4qTTfWZIKl9PmYue9JAe9q%2FrfqDDmS1%2BZtldIzwnoIKSdJ9piOluJtmxDFuP%2B1T7x8oNZArspNkGc%2BBAJhK3%2B%2F2wxngqPcZe0PDiecvq2jo57CQll7A8ILRAoTXU6XOssykdX8j4t94gVgoOvMnB9sSWxuK51YXpRV5p1QlkUZVwRqvyStyMDB7LDiWSjZ8cQOMYDc8Ve81vNmriipZHibe2xSGQgPUvEb2qXxrPMxBWKMBpJh80Qn75Gv6V341l5BTCHnNHO1wn6QDEnSNJdr82cNuVtIoEP7EOjhE6LfNk8p0SbWYvVjzzCfqWfGCrlzBXwcoUB1sz2cWm78l2FIB%2F0VHlDov%2F1%2FBOhnBT5XNg%2Bmjs65i9ayGAzP5Ku9RS7NmFT0Guo7o5L58eJ1ZnztQf8I8pa7XGKvTnekhOZ9Qro%2FcR%2FpT%2FFmx1j6R313yD14oAGymZBMqaNQ6cjr%2FstvDYXsOzO6vqiQqN%2B7yGhZHKQx412dNTrgg%2BBZrk8IT1mrCd3UKulPSpIuq8CofbAbgcf8BuIw9sZADD84dS%2BBjqkAaIeMIdrl2%2BZpXKVhsh8nc%2BFPAYoxA3kgpyOgeym0Fb6d1etjcZUb%2FcA1Sv9sE29zrcZEVA72n0wWEjtZTKlLX%2FQYidIFAAlVb4Ulcb0BRQq9Gx2hsd60tKbSgndWGHDponhMkbOc%2FKDsGSY2nekumKYisA7PyoqyQm36pPlXv7%2B6gmWw5ZyBP1XRmdbLtcZ9ePH%2BqUYjkTy2z5II1fjkpmYBiMr&X-Amz-Signature=78b6fe56e42505ac7d4ed6b9b0391e50224e83195a43628cf4de417b0159de94&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEND2DHT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTG6JbGFaAhZGcSaQYTc%2BCi7vORoV30w8xEDxGFEYwAIhAJ6l%2BXXs2e%2FoCeZh8lMvocjJ46Qqeck9kMBfn%2FE0PuOMKv8DCBEQABoMNjM3NDIzMTgzODA1Igwh4E6S2%2B8ov5DOHaIq3AOozonM7caujq8qhY%2FWAkH5XSFiCQ55k4WtCdatbOm93ISCXH%2BRa94xq4Lj%2B19JV5AeAgfizb0LvoZmMYsLWbwk2YO4qTTfWZIKl9PmYue9JAe9q%2FrfqDDmS1%2BZtldIzwnoIKSdJ9piOluJtmxDFuP%2B1T7x8oNZArspNkGc%2BBAJhK3%2B%2F2wxngqPcZe0PDiecvq2jo57CQll7A8ILRAoTXU6XOssykdX8j4t94gVgoOvMnB9sSWxuK51YXpRV5p1QlkUZVwRqvyStyMDB7LDiWSjZ8cQOMYDc8Ve81vNmriipZHibe2xSGQgPUvEb2qXxrPMxBWKMBpJh80Qn75Gv6V341l5BTCHnNHO1wn6QDEnSNJdr82cNuVtIoEP7EOjhE6LfNk8p0SbWYvVjzzCfqWfGCrlzBXwcoUB1sz2cWm78l2FIB%2F0VHlDov%2F1%2FBOhnBT5XNg%2Bmjs65i9ayGAzP5Ku9RS7NmFT0Guo7o5L58eJ1ZnztQf8I8pa7XGKvTnekhOZ9Qro%2FcR%2FpT%2FFmx1j6R313yD14oAGymZBMqaNQ6cjr%2FstvDYXsOzO6vqiQqN%2B7yGhZHKQx412dNTrgg%2BBZrk8IT1mrCd3UKulPSpIuq8CofbAbgcf8BuIw9sZADD84dS%2BBjqkAaIeMIdrl2%2BZpXKVhsh8nc%2BFPAYoxA3kgpyOgeym0Fb6d1etjcZUb%2FcA1Sv9sE29zrcZEVA72n0wWEjtZTKlLX%2FQYidIFAAlVb4Ulcb0BRQq9Gx2hsd60tKbSgndWGHDponhMkbOc%2FKDsGSY2nekumKYisA7PyoqyQm36pPlXv7%2B6gmWw5ZyBP1XRmdbLtcZ9ePH%2BqUYjkTy2z5II1fjkpmYBiMr&X-Amz-Signature=09efb2888ecece94c2ec129f30faa097fc6aa4a57e28101b30f09c638f58ae3c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEND2DHT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTG6JbGFaAhZGcSaQYTc%2BCi7vORoV30w8xEDxGFEYwAIhAJ6l%2BXXs2e%2FoCeZh8lMvocjJ46Qqeck9kMBfn%2FE0PuOMKv8DCBEQABoMNjM3NDIzMTgzODA1Igwh4E6S2%2B8ov5DOHaIq3AOozonM7caujq8qhY%2FWAkH5XSFiCQ55k4WtCdatbOm93ISCXH%2BRa94xq4Lj%2B19JV5AeAgfizb0LvoZmMYsLWbwk2YO4qTTfWZIKl9PmYue9JAe9q%2FrfqDDmS1%2BZtldIzwnoIKSdJ9piOluJtmxDFuP%2B1T7x8oNZArspNkGc%2BBAJhK3%2B%2F2wxngqPcZe0PDiecvq2jo57CQll7A8ILRAoTXU6XOssykdX8j4t94gVgoOvMnB9sSWxuK51YXpRV5p1QlkUZVwRqvyStyMDB7LDiWSjZ8cQOMYDc8Ve81vNmriipZHibe2xSGQgPUvEb2qXxrPMxBWKMBpJh80Qn75Gv6V341l5BTCHnNHO1wn6QDEnSNJdr82cNuVtIoEP7EOjhE6LfNk8p0SbWYvVjzzCfqWfGCrlzBXwcoUB1sz2cWm78l2FIB%2F0VHlDov%2F1%2FBOhnBT5XNg%2Bmjs65i9ayGAzP5Ku9RS7NmFT0Guo7o5L58eJ1ZnztQf8I8pa7XGKvTnekhOZ9Qro%2FcR%2FpT%2FFmx1j6R313yD14oAGymZBMqaNQ6cjr%2FstvDYXsOzO6vqiQqN%2B7yGhZHKQx412dNTrgg%2BBZrk8IT1mrCd3UKulPSpIuq8CofbAbgcf8BuIw9sZADD84dS%2BBjqkAaIeMIdrl2%2BZpXKVhsh8nc%2BFPAYoxA3kgpyOgeym0Fb6d1etjcZUb%2FcA1Sv9sE29zrcZEVA72n0wWEjtZTKlLX%2FQYidIFAAlVb4Ulcb0BRQq9Gx2hsd60tKbSgndWGHDponhMkbOc%2FKDsGSY2nekumKYisA7PyoqyQm36pPlXv7%2B6gmWw5ZyBP1XRmdbLtcZ9ePH%2BqUYjkTy2z5II1fjkpmYBiMr&X-Amz-Signature=9e12d50f5bc8a2a27b057daabfaf68933e338f29609deb285b0bb3f92f0d08e5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEND2DHT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTG6JbGFaAhZGcSaQYTc%2BCi7vORoV30w8xEDxGFEYwAIhAJ6l%2BXXs2e%2FoCeZh8lMvocjJ46Qqeck9kMBfn%2FE0PuOMKv8DCBEQABoMNjM3NDIzMTgzODA1Igwh4E6S2%2B8ov5DOHaIq3AOozonM7caujq8qhY%2FWAkH5XSFiCQ55k4WtCdatbOm93ISCXH%2BRa94xq4Lj%2B19JV5AeAgfizb0LvoZmMYsLWbwk2YO4qTTfWZIKl9PmYue9JAe9q%2FrfqDDmS1%2BZtldIzwnoIKSdJ9piOluJtmxDFuP%2B1T7x8oNZArspNkGc%2BBAJhK3%2B%2F2wxngqPcZe0PDiecvq2jo57CQll7A8ILRAoTXU6XOssykdX8j4t94gVgoOvMnB9sSWxuK51YXpRV5p1QlkUZVwRqvyStyMDB7LDiWSjZ8cQOMYDc8Ve81vNmriipZHibe2xSGQgPUvEb2qXxrPMxBWKMBpJh80Qn75Gv6V341l5BTCHnNHO1wn6QDEnSNJdr82cNuVtIoEP7EOjhE6LfNk8p0SbWYvVjzzCfqWfGCrlzBXwcoUB1sz2cWm78l2FIB%2F0VHlDov%2F1%2FBOhnBT5XNg%2Bmjs65i9ayGAzP5Ku9RS7NmFT0Guo7o5L58eJ1ZnztQf8I8pa7XGKvTnekhOZ9Qro%2FcR%2FpT%2FFmx1j6R313yD14oAGymZBMqaNQ6cjr%2FstvDYXsOzO6vqiQqN%2B7yGhZHKQx412dNTrgg%2BBZrk8IT1mrCd3UKulPSpIuq8CofbAbgcf8BuIw9sZADD84dS%2BBjqkAaIeMIdrl2%2BZpXKVhsh8nc%2BFPAYoxA3kgpyOgeym0Fb6d1etjcZUb%2FcA1Sv9sE29zrcZEVA72n0wWEjtZTKlLX%2FQYidIFAAlVb4Ulcb0BRQq9Gx2hsd60tKbSgndWGHDponhMkbOc%2FKDsGSY2nekumKYisA7PyoqyQm36pPlXv7%2B6gmWw5ZyBP1XRmdbLtcZ9ePH%2BqUYjkTy2z5II1fjkpmYBiMr&X-Amz-Signature=f1d953acbc79582e0bfaeb93ecd290e124114cfb65802bbc4cfb9d7e5216794f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
