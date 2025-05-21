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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPSHGSV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ZbtnpTlPoX4x8ougUuTVfPdEA0kdsBSag6q2qra3vAiBXZmhzIuWhUwHZRO0V8jxVjoNI9nBmOoqxhgS0wbIGpCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8HxJSq%2FO06zhBR9KtwDxTvt89dgu48f9eWOc2ucqRfOQc4LplLTci7Vmi9WAYjS%2BWib8%2BA2k6GSLMEU71%2FuOv04kLbp6HUeMmLKbSm6RRPQTtuFE8pFGU8rovQa0XC%2B5EvvglyTQdWr5M1E7vzRqHVf2hmDpoDxL1tTwnW9NXRanxD64JQukHT%2FAUTfCuKr09gkIejTSjD1kDKGxy27bnCkmbesE2BJ1OHfJHCVCS7Wck29VHyRlIDr1hilV1D6rARWhnBVonVqUDc1AkKveFvgOTGoh8SVBMKWcYV9wJYhqllEuF1XzaKUf8o9ggA5i0yXBwgddRBBMacXu8LOy4qhiPsuh%2B4Wxn8iNZAzjpGzU6qs7cyBAlg3p7RIZmUFTwXND7kU9WA%2FxfrCJEw8DWM89DXvwKseY8Aaa8tNiBu9tRLd3ytvXFWKCtOz4Gc4B3L5sb7xhbmSfRS9o1qVAYUhT1AZtaNa9l0U6PYnBtxrTNWg7rnOP1%2BK8zuieXbLgqf68gs9tuNP1wKz4es9xkT45lUumkgxLtm6gGidtm1fC2rf%2BAU1Plzzu%2Fkozu4IUuaSR22EIea7dekKbGDaF4jZgEb7mrFf7NBPk%2Fgu9P1NmBNZy7i6qXHZV1cMCG0QT7GLJ4jEYMjdpfcwia%2B1wQY6pgEAw7LoEuoK5UsrSRXTmPVnG3Y5yzSeUxnIaJQBi5TcEivK%2F7RaY1NGcMkYuFUuJQcqGIS8Ww7ZKyhMKOQ%2F4qqNDUxnT8Sfzy%2Frc%2F%2BsRzJQR22oZwb4hU352ah%2Bkl4PGjv6R34N63%2BPCChBKZQV2s8sRpobCRIQr4GvAja9SLts1RoFWvT1AyYKVDgVgt5%2F6iYyYOl80KatrkcH9%2FRFQZ5a6Ykzqr1A&X-Amz-Signature=cd51576365607ef233a131df9dfb6221d891d9faaac4a51a3dcc2e9b1e8b5402&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPSHGSV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ZbtnpTlPoX4x8ougUuTVfPdEA0kdsBSag6q2qra3vAiBXZmhzIuWhUwHZRO0V8jxVjoNI9nBmOoqxhgS0wbIGpCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8HxJSq%2FO06zhBR9KtwDxTvt89dgu48f9eWOc2ucqRfOQc4LplLTci7Vmi9WAYjS%2BWib8%2BA2k6GSLMEU71%2FuOv04kLbp6HUeMmLKbSm6RRPQTtuFE8pFGU8rovQa0XC%2B5EvvglyTQdWr5M1E7vzRqHVf2hmDpoDxL1tTwnW9NXRanxD64JQukHT%2FAUTfCuKr09gkIejTSjD1kDKGxy27bnCkmbesE2BJ1OHfJHCVCS7Wck29VHyRlIDr1hilV1D6rARWhnBVonVqUDc1AkKveFvgOTGoh8SVBMKWcYV9wJYhqllEuF1XzaKUf8o9ggA5i0yXBwgddRBBMacXu8LOy4qhiPsuh%2B4Wxn8iNZAzjpGzU6qs7cyBAlg3p7RIZmUFTwXND7kU9WA%2FxfrCJEw8DWM89DXvwKseY8Aaa8tNiBu9tRLd3ytvXFWKCtOz4Gc4B3L5sb7xhbmSfRS9o1qVAYUhT1AZtaNa9l0U6PYnBtxrTNWg7rnOP1%2BK8zuieXbLgqf68gs9tuNP1wKz4es9xkT45lUumkgxLtm6gGidtm1fC2rf%2BAU1Plzzu%2Fkozu4IUuaSR22EIea7dekKbGDaF4jZgEb7mrFf7NBPk%2Fgu9P1NmBNZy7i6qXHZV1cMCG0QT7GLJ4jEYMjdpfcwia%2B1wQY6pgEAw7LoEuoK5UsrSRXTmPVnG3Y5yzSeUxnIaJQBi5TcEivK%2F7RaY1NGcMkYuFUuJQcqGIS8Ww7ZKyhMKOQ%2F4qqNDUxnT8Sfzy%2Frc%2F%2BsRzJQR22oZwb4hU352ah%2Bkl4PGjv6R34N63%2BPCChBKZQV2s8sRpobCRIQr4GvAja9SLts1RoFWvT1AyYKVDgVgt5%2F6iYyYOl80KatrkcH9%2FRFQZ5a6Ykzqr1A&X-Amz-Signature=f542ff6adf9f61c1111d72d672e227f6920ad60ca9f97000704572b00d6a2423&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPSHGSV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ZbtnpTlPoX4x8ougUuTVfPdEA0kdsBSag6q2qra3vAiBXZmhzIuWhUwHZRO0V8jxVjoNI9nBmOoqxhgS0wbIGpCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8HxJSq%2FO06zhBR9KtwDxTvt89dgu48f9eWOc2ucqRfOQc4LplLTci7Vmi9WAYjS%2BWib8%2BA2k6GSLMEU71%2FuOv04kLbp6HUeMmLKbSm6RRPQTtuFE8pFGU8rovQa0XC%2B5EvvglyTQdWr5M1E7vzRqHVf2hmDpoDxL1tTwnW9NXRanxD64JQukHT%2FAUTfCuKr09gkIejTSjD1kDKGxy27bnCkmbesE2BJ1OHfJHCVCS7Wck29VHyRlIDr1hilV1D6rARWhnBVonVqUDc1AkKveFvgOTGoh8SVBMKWcYV9wJYhqllEuF1XzaKUf8o9ggA5i0yXBwgddRBBMacXu8LOy4qhiPsuh%2B4Wxn8iNZAzjpGzU6qs7cyBAlg3p7RIZmUFTwXND7kU9WA%2FxfrCJEw8DWM89DXvwKseY8Aaa8tNiBu9tRLd3ytvXFWKCtOz4Gc4B3L5sb7xhbmSfRS9o1qVAYUhT1AZtaNa9l0U6PYnBtxrTNWg7rnOP1%2BK8zuieXbLgqf68gs9tuNP1wKz4es9xkT45lUumkgxLtm6gGidtm1fC2rf%2BAU1Plzzu%2Fkozu4IUuaSR22EIea7dekKbGDaF4jZgEb7mrFf7NBPk%2Fgu9P1NmBNZy7i6qXHZV1cMCG0QT7GLJ4jEYMjdpfcwia%2B1wQY6pgEAw7LoEuoK5UsrSRXTmPVnG3Y5yzSeUxnIaJQBi5TcEivK%2F7RaY1NGcMkYuFUuJQcqGIS8Ww7ZKyhMKOQ%2F4qqNDUxnT8Sfzy%2Frc%2F%2BsRzJQR22oZwb4hU352ah%2Bkl4PGjv6R34N63%2BPCChBKZQV2s8sRpobCRIQr4GvAja9SLts1RoFWvT1AyYKVDgVgt5%2F6iYyYOl80KatrkcH9%2FRFQZ5a6Ykzqr1A&X-Amz-Signature=4f1fbd092e09159495ed6a0bd9c5f1a894b627d40a53fd43d90c409520c68586&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPSHGSV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ZbtnpTlPoX4x8ougUuTVfPdEA0kdsBSag6q2qra3vAiBXZmhzIuWhUwHZRO0V8jxVjoNI9nBmOoqxhgS0wbIGpCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8HxJSq%2FO06zhBR9KtwDxTvt89dgu48f9eWOc2ucqRfOQc4LplLTci7Vmi9WAYjS%2BWib8%2BA2k6GSLMEU71%2FuOv04kLbp6HUeMmLKbSm6RRPQTtuFE8pFGU8rovQa0XC%2B5EvvglyTQdWr5M1E7vzRqHVf2hmDpoDxL1tTwnW9NXRanxD64JQukHT%2FAUTfCuKr09gkIejTSjD1kDKGxy27bnCkmbesE2BJ1OHfJHCVCS7Wck29VHyRlIDr1hilV1D6rARWhnBVonVqUDc1AkKveFvgOTGoh8SVBMKWcYV9wJYhqllEuF1XzaKUf8o9ggA5i0yXBwgddRBBMacXu8LOy4qhiPsuh%2B4Wxn8iNZAzjpGzU6qs7cyBAlg3p7RIZmUFTwXND7kU9WA%2FxfrCJEw8DWM89DXvwKseY8Aaa8tNiBu9tRLd3ytvXFWKCtOz4Gc4B3L5sb7xhbmSfRS9o1qVAYUhT1AZtaNa9l0U6PYnBtxrTNWg7rnOP1%2BK8zuieXbLgqf68gs9tuNP1wKz4es9xkT45lUumkgxLtm6gGidtm1fC2rf%2BAU1Plzzu%2Fkozu4IUuaSR22EIea7dekKbGDaF4jZgEb7mrFf7NBPk%2Fgu9P1NmBNZy7i6qXHZV1cMCG0QT7GLJ4jEYMjdpfcwia%2B1wQY6pgEAw7LoEuoK5UsrSRXTmPVnG3Y5yzSeUxnIaJQBi5TcEivK%2F7RaY1NGcMkYuFUuJQcqGIS8Ww7ZKyhMKOQ%2F4qqNDUxnT8Sfzy%2Frc%2F%2BsRzJQR22oZwb4hU352ah%2Bkl4PGjv6R34N63%2BPCChBKZQV2s8sRpobCRIQr4GvAja9SLts1RoFWvT1AyYKVDgVgt5%2F6iYyYOl80KatrkcH9%2FRFQZ5a6Ykzqr1A&X-Amz-Signature=5be39389a138a687d047fc2a1c5d07ecb0affaffca64394926e5ea32a4a0758b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPSHGSV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ZbtnpTlPoX4x8ougUuTVfPdEA0kdsBSag6q2qra3vAiBXZmhzIuWhUwHZRO0V8jxVjoNI9nBmOoqxhgS0wbIGpCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8HxJSq%2FO06zhBR9KtwDxTvt89dgu48f9eWOc2ucqRfOQc4LplLTci7Vmi9WAYjS%2BWib8%2BA2k6GSLMEU71%2FuOv04kLbp6HUeMmLKbSm6RRPQTtuFE8pFGU8rovQa0XC%2B5EvvglyTQdWr5M1E7vzRqHVf2hmDpoDxL1tTwnW9NXRanxD64JQukHT%2FAUTfCuKr09gkIejTSjD1kDKGxy27bnCkmbesE2BJ1OHfJHCVCS7Wck29VHyRlIDr1hilV1D6rARWhnBVonVqUDc1AkKveFvgOTGoh8SVBMKWcYV9wJYhqllEuF1XzaKUf8o9ggA5i0yXBwgddRBBMacXu8LOy4qhiPsuh%2B4Wxn8iNZAzjpGzU6qs7cyBAlg3p7RIZmUFTwXND7kU9WA%2FxfrCJEw8DWM89DXvwKseY8Aaa8tNiBu9tRLd3ytvXFWKCtOz4Gc4B3L5sb7xhbmSfRS9o1qVAYUhT1AZtaNa9l0U6PYnBtxrTNWg7rnOP1%2BK8zuieXbLgqf68gs9tuNP1wKz4es9xkT45lUumkgxLtm6gGidtm1fC2rf%2BAU1Plzzu%2Fkozu4IUuaSR22EIea7dekKbGDaF4jZgEb7mrFf7NBPk%2Fgu9P1NmBNZy7i6qXHZV1cMCG0QT7GLJ4jEYMjdpfcwia%2B1wQY6pgEAw7LoEuoK5UsrSRXTmPVnG3Y5yzSeUxnIaJQBi5TcEivK%2F7RaY1NGcMkYuFUuJQcqGIS8Ww7ZKyhMKOQ%2F4qqNDUxnT8Sfzy%2Frc%2F%2BsRzJQR22oZwb4hU352ah%2Bkl4PGjv6R34N63%2BPCChBKZQV2s8sRpobCRIQr4GvAja9SLts1RoFWvT1AyYKVDgVgt5%2F6iYyYOl80KatrkcH9%2FRFQZ5a6Ykzqr1A&X-Amz-Signature=4c4238c77594f1943cabf967729560bbe687e0c85db20fe320152b9f0996d0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPSHGSV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ZbtnpTlPoX4x8ougUuTVfPdEA0kdsBSag6q2qra3vAiBXZmhzIuWhUwHZRO0V8jxVjoNI9nBmOoqxhgS0wbIGpCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8HxJSq%2FO06zhBR9KtwDxTvt89dgu48f9eWOc2ucqRfOQc4LplLTci7Vmi9WAYjS%2BWib8%2BA2k6GSLMEU71%2FuOv04kLbp6HUeMmLKbSm6RRPQTtuFE8pFGU8rovQa0XC%2B5EvvglyTQdWr5M1E7vzRqHVf2hmDpoDxL1tTwnW9NXRanxD64JQukHT%2FAUTfCuKr09gkIejTSjD1kDKGxy27bnCkmbesE2BJ1OHfJHCVCS7Wck29VHyRlIDr1hilV1D6rARWhnBVonVqUDc1AkKveFvgOTGoh8SVBMKWcYV9wJYhqllEuF1XzaKUf8o9ggA5i0yXBwgddRBBMacXu8LOy4qhiPsuh%2B4Wxn8iNZAzjpGzU6qs7cyBAlg3p7RIZmUFTwXND7kU9WA%2FxfrCJEw8DWM89DXvwKseY8Aaa8tNiBu9tRLd3ytvXFWKCtOz4Gc4B3L5sb7xhbmSfRS9o1qVAYUhT1AZtaNa9l0U6PYnBtxrTNWg7rnOP1%2BK8zuieXbLgqf68gs9tuNP1wKz4es9xkT45lUumkgxLtm6gGidtm1fC2rf%2BAU1Plzzu%2Fkozu4IUuaSR22EIea7dekKbGDaF4jZgEb7mrFf7NBPk%2Fgu9P1NmBNZy7i6qXHZV1cMCG0QT7GLJ4jEYMjdpfcwia%2B1wQY6pgEAw7LoEuoK5UsrSRXTmPVnG3Y5yzSeUxnIaJQBi5TcEivK%2F7RaY1NGcMkYuFUuJQcqGIS8Ww7ZKyhMKOQ%2F4qqNDUxnT8Sfzy%2Frc%2F%2BsRzJQR22oZwb4hU352ah%2Bkl4PGjv6R34N63%2BPCChBKZQV2s8sRpobCRIQr4GvAja9SLts1RoFWvT1AyYKVDgVgt5%2F6iYyYOl80KatrkcH9%2FRFQZ5a6Ykzqr1A&X-Amz-Signature=3847327762548db47b545b9fa0430c18c61b210c805a494fdb85852ac12073d2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPSHGSV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ZbtnpTlPoX4x8ougUuTVfPdEA0kdsBSag6q2qra3vAiBXZmhzIuWhUwHZRO0V8jxVjoNI9nBmOoqxhgS0wbIGpCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8HxJSq%2FO06zhBR9KtwDxTvt89dgu48f9eWOc2ucqRfOQc4LplLTci7Vmi9WAYjS%2BWib8%2BA2k6GSLMEU71%2FuOv04kLbp6HUeMmLKbSm6RRPQTtuFE8pFGU8rovQa0XC%2B5EvvglyTQdWr5M1E7vzRqHVf2hmDpoDxL1tTwnW9NXRanxD64JQukHT%2FAUTfCuKr09gkIejTSjD1kDKGxy27bnCkmbesE2BJ1OHfJHCVCS7Wck29VHyRlIDr1hilV1D6rARWhnBVonVqUDc1AkKveFvgOTGoh8SVBMKWcYV9wJYhqllEuF1XzaKUf8o9ggA5i0yXBwgddRBBMacXu8LOy4qhiPsuh%2B4Wxn8iNZAzjpGzU6qs7cyBAlg3p7RIZmUFTwXND7kU9WA%2FxfrCJEw8DWM89DXvwKseY8Aaa8tNiBu9tRLd3ytvXFWKCtOz4Gc4B3L5sb7xhbmSfRS9o1qVAYUhT1AZtaNa9l0U6PYnBtxrTNWg7rnOP1%2BK8zuieXbLgqf68gs9tuNP1wKz4es9xkT45lUumkgxLtm6gGidtm1fC2rf%2BAU1Plzzu%2Fkozu4IUuaSR22EIea7dekKbGDaF4jZgEb7mrFf7NBPk%2Fgu9P1NmBNZy7i6qXHZV1cMCG0QT7GLJ4jEYMjdpfcwia%2B1wQY6pgEAw7LoEuoK5UsrSRXTmPVnG3Y5yzSeUxnIaJQBi5TcEivK%2F7RaY1NGcMkYuFUuJQcqGIS8Ww7ZKyhMKOQ%2F4qqNDUxnT8Sfzy%2Frc%2F%2BsRzJQR22oZwb4hU352ah%2Bkl4PGjv6R34N63%2BPCChBKZQV2s8sRpobCRIQr4GvAja9SLts1RoFWvT1AyYKVDgVgt5%2F6iYyYOl80KatrkcH9%2FRFQZ5a6Ykzqr1A&X-Amz-Signature=ea0fefb8c605fa7ee361bcee3b33fab22fe1d1a93e3f6444167956de4da5edc5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
