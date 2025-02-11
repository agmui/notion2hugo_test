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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MU44VQI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWE81JgYj4uNPpkyeWjAQ6jVGsKxtEVrKZyT%2BUZOdyBAiEAq%2Fqk42ONEUiNoNp%2FaN9GT6vnjXTT78Fk3lmZsz%2FgNv0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIekqT2ZXQ0gvDkCrcA38RRHNu8DDoFU7%2B0ncCSxvaoBEaydIgmxm8hBatcA3hEXUEmhtrk6WSbz2YIqlvpUcKNNIHvuckjQSjPwVjzoN9jFTjlI79nIOEnfL3QEZDR2x%2F0B3RPGogxT%2BpVODwE%2B8Z9c6pp8BPigpYLKZCbBUYiQGkoY1z3nfXsRQcA7zrIINHpg2wR7C%2BOrbNW8wat1ZRYM%2BUdEzTgDOjzvunOD5k3XZvcV3YHhhRs99pYX5781rT%2BzEwF5XmYWPJ2UmJmPRYCbWu4%2BjkJufUEnMZOwFXNJXPQH8zPERCwHfRAWot8AOKogs0d8rxp6Gh%2FQ7MtMKbjaFm3e64aK1IVVySHtUVpqRrnD3dFtRlVErwfr1a6zDintmo6YNdQjNS072mTOjSDE%2Bnf%2FHEAYKeQiTRz%2Fia7%2BbNdHwoDryriy8kUiuwFJgk4MLIMkJJ3GJACurZ0SEBbhKXLH5rR6gu%2BmLXZCMHLGAEVXn49ccVLuTmfhkBc8eBUK6gvH%2B03tO9cyI5DbJ0g5p6jJ%2FLP07IVvYl4YEKRnOmhliJhCjg8bTkcdgWzJmTz0wLvjZOj7eiDtVY5OSwb%2Buc99S%2FkzkM4Na9iDlyHcS1c%2BF64AKXE2cYXbEVh9jNwA4xMtbUnjB0MNv3rb0GOqUB8MYK2XQcz7oK8rpSPyKXI5%2BzwJBS3Ls7PP6K00qnwHiHWCv3pEq31dQU2T68quzmXOg%2Bv7LE9KsnNCiNHYdz0Vy64QV%2F4huDdtmHwnP48lZqAEn0GaL1MEZJjDo1MEMStJAQzDFGGXXHwpAO6p5ETq8r50FymQ0NcwdytpsWDq%2BcTRCvCHGrSbYYOFvjimY4S2by%2F7f9slmFKi7GrAlKF4zwxG9e&X-Amz-Signature=01550e47110fdb23f43189aeab9afcddc46b16abc58336c6dfa9a25e726fc5b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MU44VQI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWE81JgYj4uNPpkyeWjAQ6jVGsKxtEVrKZyT%2BUZOdyBAiEAq%2Fqk42ONEUiNoNp%2FaN9GT6vnjXTT78Fk3lmZsz%2FgNv0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIekqT2ZXQ0gvDkCrcA38RRHNu8DDoFU7%2B0ncCSxvaoBEaydIgmxm8hBatcA3hEXUEmhtrk6WSbz2YIqlvpUcKNNIHvuckjQSjPwVjzoN9jFTjlI79nIOEnfL3QEZDR2x%2F0B3RPGogxT%2BpVODwE%2B8Z9c6pp8BPigpYLKZCbBUYiQGkoY1z3nfXsRQcA7zrIINHpg2wR7C%2BOrbNW8wat1ZRYM%2BUdEzTgDOjzvunOD5k3XZvcV3YHhhRs99pYX5781rT%2BzEwF5XmYWPJ2UmJmPRYCbWu4%2BjkJufUEnMZOwFXNJXPQH8zPERCwHfRAWot8AOKogs0d8rxp6Gh%2FQ7MtMKbjaFm3e64aK1IVVySHtUVpqRrnD3dFtRlVErwfr1a6zDintmo6YNdQjNS072mTOjSDE%2Bnf%2FHEAYKeQiTRz%2Fia7%2BbNdHwoDryriy8kUiuwFJgk4MLIMkJJ3GJACurZ0SEBbhKXLH5rR6gu%2BmLXZCMHLGAEVXn49ccVLuTmfhkBc8eBUK6gvH%2B03tO9cyI5DbJ0g5p6jJ%2FLP07IVvYl4YEKRnOmhliJhCjg8bTkcdgWzJmTz0wLvjZOj7eiDtVY5OSwb%2Buc99S%2FkzkM4Na9iDlyHcS1c%2BF64AKXE2cYXbEVh9jNwA4xMtbUnjB0MNv3rb0GOqUB8MYK2XQcz7oK8rpSPyKXI5%2BzwJBS3Ls7PP6K00qnwHiHWCv3pEq31dQU2T68quzmXOg%2Bv7LE9KsnNCiNHYdz0Vy64QV%2F4huDdtmHwnP48lZqAEn0GaL1MEZJjDo1MEMStJAQzDFGGXXHwpAO6p5ETq8r50FymQ0NcwdytpsWDq%2BcTRCvCHGrSbYYOFvjimY4S2by%2F7f9slmFKi7GrAlKF4zwxG9e&X-Amz-Signature=925cd7314a2c6894e8c4c30a35f8181ac553baa9aef408c1bdd4185ab5417cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MU44VQI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWE81JgYj4uNPpkyeWjAQ6jVGsKxtEVrKZyT%2BUZOdyBAiEAq%2Fqk42ONEUiNoNp%2FaN9GT6vnjXTT78Fk3lmZsz%2FgNv0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIekqT2ZXQ0gvDkCrcA38RRHNu8DDoFU7%2B0ncCSxvaoBEaydIgmxm8hBatcA3hEXUEmhtrk6WSbz2YIqlvpUcKNNIHvuckjQSjPwVjzoN9jFTjlI79nIOEnfL3QEZDR2x%2F0B3RPGogxT%2BpVODwE%2B8Z9c6pp8BPigpYLKZCbBUYiQGkoY1z3nfXsRQcA7zrIINHpg2wR7C%2BOrbNW8wat1ZRYM%2BUdEzTgDOjzvunOD5k3XZvcV3YHhhRs99pYX5781rT%2BzEwF5XmYWPJ2UmJmPRYCbWu4%2BjkJufUEnMZOwFXNJXPQH8zPERCwHfRAWot8AOKogs0d8rxp6Gh%2FQ7MtMKbjaFm3e64aK1IVVySHtUVpqRrnD3dFtRlVErwfr1a6zDintmo6YNdQjNS072mTOjSDE%2Bnf%2FHEAYKeQiTRz%2Fia7%2BbNdHwoDryriy8kUiuwFJgk4MLIMkJJ3GJACurZ0SEBbhKXLH5rR6gu%2BmLXZCMHLGAEVXn49ccVLuTmfhkBc8eBUK6gvH%2B03tO9cyI5DbJ0g5p6jJ%2FLP07IVvYl4YEKRnOmhliJhCjg8bTkcdgWzJmTz0wLvjZOj7eiDtVY5OSwb%2Buc99S%2FkzkM4Na9iDlyHcS1c%2BF64AKXE2cYXbEVh9jNwA4xMtbUnjB0MNv3rb0GOqUB8MYK2XQcz7oK8rpSPyKXI5%2BzwJBS3Ls7PP6K00qnwHiHWCv3pEq31dQU2T68quzmXOg%2Bv7LE9KsnNCiNHYdz0Vy64QV%2F4huDdtmHwnP48lZqAEn0GaL1MEZJjDo1MEMStJAQzDFGGXXHwpAO6p5ETq8r50FymQ0NcwdytpsWDq%2BcTRCvCHGrSbYYOFvjimY4S2by%2F7f9slmFKi7GrAlKF4zwxG9e&X-Amz-Signature=f45ff60164bfcaf7112c37aa411446c7ef5e01d372051006d3b84cf246d78d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MU44VQI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWE81JgYj4uNPpkyeWjAQ6jVGsKxtEVrKZyT%2BUZOdyBAiEAq%2Fqk42ONEUiNoNp%2FaN9GT6vnjXTT78Fk3lmZsz%2FgNv0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIekqT2ZXQ0gvDkCrcA38RRHNu8DDoFU7%2B0ncCSxvaoBEaydIgmxm8hBatcA3hEXUEmhtrk6WSbz2YIqlvpUcKNNIHvuckjQSjPwVjzoN9jFTjlI79nIOEnfL3QEZDR2x%2F0B3RPGogxT%2BpVODwE%2B8Z9c6pp8BPigpYLKZCbBUYiQGkoY1z3nfXsRQcA7zrIINHpg2wR7C%2BOrbNW8wat1ZRYM%2BUdEzTgDOjzvunOD5k3XZvcV3YHhhRs99pYX5781rT%2BzEwF5XmYWPJ2UmJmPRYCbWu4%2BjkJufUEnMZOwFXNJXPQH8zPERCwHfRAWot8AOKogs0d8rxp6Gh%2FQ7MtMKbjaFm3e64aK1IVVySHtUVpqRrnD3dFtRlVErwfr1a6zDintmo6YNdQjNS072mTOjSDE%2Bnf%2FHEAYKeQiTRz%2Fia7%2BbNdHwoDryriy8kUiuwFJgk4MLIMkJJ3GJACurZ0SEBbhKXLH5rR6gu%2BmLXZCMHLGAEVXn49ccVLuTmfhkBc8eBUK6gvH%2B03tO9cyI5DbJ0g5p6jJ%2FLP07IVvYl4YEKRnOmhliJhCjg8bTkcdgWzJmTz0wLvjZOj7eiDtVY5OSwb%2Buc99S%2FkzkM4Na9iDlyHcS1c%2BF64AKXE2cYXbEVh9jNwA4xMtbUnjB0MNv3rb0GOqUB8MYK2XQcz7oK8rpSPyKXI5%2BzwJBS3Ls7PP6K00qnwHiHWCv3pEq31dQU2T68quzmXOg%2Bv7LE9KsnNCiNHYdz0Vy64QV%2F4huDdtmHwnP48lZqAEn0GaL1MEZJjDo1MEMStJAQzDFGGXXHwpAO6p5ETq8r50FymQ0NcwdytpsWDq%2BcTRCvCHGrSbYYOFvjimY4S2by%2F7f9slmFKi7GrAlKF4zwxG9e&X-Amz-Signature=d7d0e346fac199357de836729d6af9877752f5eb4ead01b36542c0a588b2f5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MU44VQI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWE81JgYj4uNPpkyeWjAQ6jVGsKxtEVrKZyT%2BUZOdyBAiEAq%2Fqk42ONEUiNoNp%2FaN9GT6vnjXTT78Fk3lmZsz%2FgNv0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIekqT2ZXQ0gvDkCrcA38RRHNu8DDoFU7%2B0ncCSxvaoBEaydIgmxm8hBatcA3hEXUEmhtrk6WSbz2YIqlvpUcKNNIHvuckjQSjPwVjzoN9jFTjlI79nIOEnfL3QEZDR2x%2F0B3RPGogxT%2BpVODwE%2B8Z9c6pp8BPigpYLKZCbBUYiQGkoY1z3nfXsRQcA7zrIINHpg2wR7C%2BOrbNW8wat1ZRYM%2BUdEzTgDOjzvunOD5k3XZvcV3YHhhRs99pYX5781rT%2BzEwF5XmYWPJ2UmJmPRYCbWu4%2BjkJufUEnMZOwFXNJXPQH8zPERCwHfRAWot8AOKogs0d8rxp6Gh%2FQ7MtMKbjaFm3e64aK1IVVySHtUVpqRrnD3dFtRlVErwfr1a6zDintmo6YNdQjNS072mTOjSDE%2Bnf%2FHEAYKeQiTRz%2Fia7%2BbNdHwoDryriy8kUiuwFJgk4MLIMkJJ3GJACurZ0SEBbhKXLH5rR6gu%2BmLXZCMHLGAEVXn49ccVLuTmfhkBc8eBUK6gvH%2B03tO9cyI5DbJ0g5p6jJ%2FLP07IVvYl4YEKRnOmhliJhCjg8bTkcdgWzJmTz0wLvjZOj7eiDtVY5OSwb%2Buc99S%2FkzkM4Na9iDlyHcS1c%2BF64AKXE2cYXbEVh9jNwA4xMtbUnjB0MNv3rb0GOqUB8MYK2XQcz7oK8rpSPyKXI5%2BzwJBS3Ls7PP6K00qnwHiHWCv3pEq31dQU2T68quzmXOg%2Bv7LE9KsnNCiNHYdz0Vy64QV%2F4huDdtmHwnP48lZqAEn0GaL1MEZJjDo1MEMStJAQzDFGGXXHwpAO6p5ETq8r50FymQ0NcwdytpsWDq%2BcTRCvCHGrSbYYOFvjimY4S2by%2F7f9slmFKi7GrAlKF4zwxG9e&X-Amz-Signature=31130224f998b1bee4d77c5e54c8caf184adec6150630de8159af9eee462e959&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MU44VQI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWE81JgYj4uNPpkyeWjAQ6jVGsKxtEVrKZyT%2BUZOdyBAiEAq%2Fqk42ONEUiNoNp%2FaN9GT6vnjXTT78Fk3lmZsz%2FgNv0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIekqT2ZXQ0gvDkCrcA38RRHNu8DDoFU7%2B0ncCSxvaoBEaydIgmxm8hBatcA3hEXUEmhtrk6WSbz2YIqlvpUcKNNIHvuckjQSjPwVjzoN9jFTjlI79nIOEnfL3QEZDR2x%2F0B3RPGogxT%2BpVODwE%2B8Z9c6pp8BPigpYLKZCbBUYiQGkoY1z3nfXsRQcA7zrIINHpg2wR7C%2BOrbNW8wat1ZRYM%2BUdEzTgDOjzvunOD5k3XZvcV3YHhhRs99pYX5781rT%2BzEwF5XmYWPJ2UmJmPRYCbWu4%2BjkJufUEnMZOwFXNJXPQH8zPERCwHfRAWot8AOKogs0d8rxp6Gh%2FQ7MtMKbjaFm3e64aK1IVVySHtUVpqRrnD3dFtRlVErwfr1a6zDintmo6YNdQjNS072mTOjSDE%2Bnf%2FHEAYKeQiTRz%2Fia7%2BbNdHwoDryriy8kUiuwFJgk4MLIMkJJ3GJACurZ0SEBbhKXLH5rR6gu%2BmLXZCMHLGAEVXn49ccVLuTmfhkBc8eBUK6gvH%2B03tO9cyI5DbJ0g5p6jJ%2FLP07IVvYl4YEKRnOmhliJhCjg8bTkcdgWzJmTz0wLvjZOj7eiDtVY5OSwb%2Buc99S%2FkzkM4Na9iDlyHcS1c%2BF64AKXE2cYXbEVh9jNwA4xMtbUnjB0MNv3rb0GOqUB8MYK2XQcz7oK8rpSPyKXI5%2BzwJBS3Ls7PP6K00qnwHiHWCv3pEq31dQU2T68quzmXOg%2Bv7LE9KsnNCiNHYdz0Vy64QV%2F4huDdtmHwnP48lZqAEn0GaL1MEZJjDo1MEMStJAQzDFGGXXHwpAO6p5ETq8r50FymQ0NcwdytpsWDq%2BcTRCvCHGrSbYYOFvjimY4S2by%2F7f9slmFKi7GrAlKF4zwxG9e&X-Amz-Signature=662b23a4a30cfc74b9fefae4bdb57b657f4de470648431c59cebeae09bde441d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MU44VQI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWE81JgYj4uNPpkyeWjAQ6jVGsKxtEVrKZyT%2BUZOdyBAiEAq%2Fqk42ONEUiNoNp%2FaN9GT6vnjXTT78Fk3lmZsz%2FgNv0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIekqT2ZXQ0gvDkCrcA38RRHNu8DDoFU7%2B0ncCSxvaoBEaydIgmxm8hBatcA3hEXUEmhtrk6WSbz2YIqlvpUcKNNIHvuckjQSjPwVjzoN9jFTjlI79nIOEnfL3QEZDR2x%2F0B3RPGogxT%2BpVODwE%2B8Z9c6pp8BPigpYLKZCbBUYiQGkoY1z3nfXsRQcA7zrIINHpg2wR7C%2BOrbNW8wat1ZRYM%2BUdEzTgDOjzvunOD5k3XZvcV3YHhhRs99pYX5781rT%2BzEwF5XmYWPJ2UmJmPRYCbWu4%2BjkJufUEnMZOwFXNJXPQH8zPERCwHfRAWot8AOKogs0d8rxp6Gh%2FQ7MtMKbjaFm3e64aK1IVVySHtUVpqRrnD3dFtRlVErwfr1a6zDintmo6YNdQjNS072mTOjSDE%2Bnf%2FHEAYKeQiTRz%2Fia7%2BbNdHwoDryriy8kUiuwFJgk4MLIMkJJ3GJACurZ0SEBbhKXLH5rR6gu%2BmLXZCMHLGAEVXn49ccVLuTmfhkBc8eBUK6gvH%2B03tO9cyI5DbJ0g5p6jJ%2FLP07IVvYl4YEKRnOmhliJhCjg8bTkcdgWzJmTz0wLvjZOj7eiDtVY5OSwb%2Buc99S%2FkzkM4Na9iDlyHcS1c%2BF64AKXE2cYXbEVh9jNwA4xMtbUnjB0MNv3rb0GOqUB8MYK2XQcz7oK8rpSPyKXI5%2BzwJBS3Ls7PP6K00qnwHiHWCv3pEq31dQU2T68quzmXOg%2Bv7LE9KsnNCiNHYdz0Vy64QV%2F4huDdtmHwnP48lZqAEn0GaL1MEZJjDo1MEMStJAQzDFGGXXHwpAO6p5ETq8r50FymQ0NcwdytpsWDq%2BcTRCvCHGrSbYYOFvjimY4S2by%2F7f9slmFKi7GrAlKF4zwxG9e&X-Amz-Signature=d3f001723b15a0ff4ed0a293ea112f63cfde23eba44f0d3e0cac0f1d17fc3be7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
