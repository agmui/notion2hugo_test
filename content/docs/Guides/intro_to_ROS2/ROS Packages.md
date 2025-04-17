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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBQTEED%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPsV5LJaK2D5P221u0YTscPO4hsHUcP3lA1Tm6gBIjAAiAbgaFY6aDoDEc8oPyHkdQwuHKkWC3L2bVGlUv4HuXjYir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMvi92SFpbZvMgDV22KtwDkcwLH9jK%2BXAVomNsV9gmq9HCy0vp4TjJhq2m045tkUc8%2B0wVED4zSSXzIeGIzTDKpEsxo4nQCrUYMWIL9uCtY9QLFTL12qN9mYZPHQi%2BhqTw21mq8muaocH1bm8tpJxglSUItqND5HwAC6jxxA8TbsYfamumsZ9b1s8KAZZzNSPLoC7zs%2BHcsX5lBeLxq70DTE3Xd7uJygn1l1ON%2BRUV4Zd08lZJAUvrADV8hWGoJGOYWVs26UgW3PmnVeBA3YSEbzDyreEokxpyLtjzWv7j0o%2BmH6%2BOP%2F3HSvMpr5rXA13k71SA97KSPWSOF3cIOZ5ILyW%2BJ4oOOWzPs%2FhR1hwpaDYL1hzWAsOdvsMph%2FaeBoxPybzy8YniJSUWfsEawc5lB5aughajQPRupo5eTrb3FqX3Mqa9sQ%2FkExwKIIAgBEGDw4MJ%2F%2BDCrdet3fslNPAdYLIztQAVz645V4Q0q1MjEuuYuqEkNQOc8NDannDKcqnNmkI12XvlfpsdpCWvHM039zUxkDWGUG5i%2BcMBlxyiePmiSwwFKgZvfD%2FwPfmaWAu82%2B7tX%2BL%2FGdCnUOMPFEIdxyfDocQy4gkGIiMI%2FGk9KwF4QaDVTOHSnh7zNM43I7cXcjBiuZWgyDsL4xUwxseDwAY6pgES1J%2F3U4xmfM9vLHcx%2B745A8l4%2Fz%2FNCL5FhV8eoiE6CzLPs7jp6GfuMsZFP9AO3E03Vm1AUuxF7oHyr5EIiItNc1iysIbCtJLDbSWbQZ7joxaPglpvVXIA5d0Q%2FZK4G95cnSRQ6fwn7gRh1I6S5ouTcd99vqDexjSy0FertZFU49TKscxCY%2BVZtCOMHSU2PlL7C0ORR7ek9lShfWHMOxQgylzEnMmQ&X-Amz-Signature=34638de55636554abe2f696f28c386f2a598c86c03c5252e6d578ea77b9a785f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBQTEED%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPsV5LJaK2D5P221u0YTscPO4hsHUcP3lA1Tm6gBIjAAiAbgaFY6aDoDEc8oPyHkdQwuHKkWC3L2bVGlUv4HuXjYir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMvi92SFpbZvMgDV22KtwDkcwLH9jK%2BXAVomNsV9gmq9HCy0vp4TjJhq2m045tkUc8%2B0wVED4zSSXzIeGIzTDKpEsxo4nQCrUYMWIL9uCtY9QLFTL12qN9mYZPHQi%2BhqTw21mq8muaocH1bm8tpJxglSUItqND5HwAC6jxxA8TbsYfamumsZ9b1s8KAZZzNSPLoC7zs%2BHcsX5lBeLxq70DTE3Xd7uJygn1l1ON%2BRUV4Zd08lZJAUvrADV8hWGoJGOYWVs26UgW3PmnVeBA3YSEbzDyreEokxpyLtjzWv7j0o%2BmH6%2BOP%2F3HSvMpr5rXA13k71SA97KSPWSOF3cIOZ5ILyW%2BJ4oOOWzPs%2FhR1hwpaDYL1hzWAsOdvsMph%2FaeBoxPybzy8YniJSUWfsEawc5lB5aughajQPRupo5eTrb3FqX3Mqa9sQ%2FkExwKIIAgBEGDw4MJ%2F%2BDCrdet3fslNPAdYLIztQAVz645V4Q0q1MjEuuYuqEkNQOc8NDannDKcqnNmkI12XvlfpsdpCWvHM039zUxkDWGUG5i%2BcMBlxyiePmiSwwFKgZvfD%2FwPfmaWAu82%2B7tX%2BL%2FGdCnUOMPFEIdxyfDocQy4gkGIiMI%2FGk9KwF4QaDVTOHSnh7zNM43I7cXcjBiuZWgyDsL4xUwxseDwAY6pgES1J%2F3U4xmfM9vLHcx%2B745A8l4%2Fz%2FNCL5FhV8eoiE6CzLPs7jp6GfuMsZFP9AO3E03Vm1AUuxF7oHyr5EIiItNc1iysIbCtJLDbSWbQZ7joxaPglpvVXIA5d0Q%2FZK4G95cnSRQ6fwn7gRh1I6S5ouTcd99vqDexjSy0FertZFU49TKscxCY%2BVZtCOMHSU2PlL7C0ORR7ek9lShfWHMOxQgylzEnMmQ&X-Amz-Signature=72853a45d2f08f90b8a50de841610cf0f48696b7166198fe481d4a46b767311c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBQTEED%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPsV5LJaK2D5P221u0YTscPO4hsHUcP3lA1Tm6gBIjAAiAbgaFY6aDoDEc8oPyHkdQwuHKkWC3L2bVGlUv4HuXjYir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMvi92SFpbZvMgDV22KtwDkcwLH9jK%2BXAVomNsV9gmq9HCy0vp4TjJhq2m045tkUc8%2B0wVED4zSSXzIeGIzTDKpEsxo4nQCrUYMWIL9uCtY9QLFTL12qN9mYZPHQi%2BhqTw21mq8muaocH1bm8tpJxglSUItqND5HwAC6jxxA8TbsYfamumsZ9b1s8KAZZzNSPLoC7zs%2BHcsX5lBeLxq70DTE3Xd7uJygn1l1ON%2BRUV4Zd08lZJAUvrADV8hWGoJGOYWVs26UgW3PmnVeBA3YSEbzDyreEokxpyLtjzWv7j0o%2BmH6%2BOP%2F3HSvMpr5rXA13k71SA97KSPWSOF3cIOZ5ILyW%2BJ4oOOWzPs%2FhR1hwpaDYL1hzWAsOdvsMph%2FaeBoxPybzy8YniJSUWfsEawc5lB5aughajQPRupo5eTrb3FqX3Mqa9sQ%2FkExwKIIAgBEGDw4MJ%2F%2BDCrdet3fslNPAdYLIztQAVz645V4Q0q1MjEuuYuqEkNQOc8NDannDKcqnNmkI12XvlfpsdpCWvHM039zUxkDWGUG5i%2BcMBlxyiePmiSwwFKgZvfD%2FwPfmaWAu82%2B7tX%2BL%2FGdCnUOMPFEIdxyfDocQy4gkGIiMI%2FGk9KwF4QaDVTOHSnh7zNM43I7cXcjBiuZWgyDsL4xUwxseDwAY6pgES1J%2F3U4xmfM9vLHcx%2B745A8l4%2Fz%2FNCL5FhV8eoiE6CzLPs7jp6GfuMsZFP9AO3E03Vm1AUuxF7oHyr5EIiItNc1iysIbCtJLDbSWbQZ7joxaPglpvVXIA5d0Q%2FZK4G95cnSRQ6fwn7gRh1I6S5ouTcd99vqDexjSy0FertZFU49TKscxCY%2BVZtCOMHSU2PlL7C0ORR7ek9lShfWHMOxQgylzEnMmQ&X-Amz-Signature=97c9ded46879db3127aa5efc82005474e6461a55f693a14e86371b3ca3eb46d5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBQTEED%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPsV5LJaK2D5P221u0YTscPO4hsHUcP3lA1Tm6gBIjAAiAbgaFY6aDoDEc8oPyHkdQwuHKkWC3L2bVGlUv4HuXjYir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMvi92SFpbZvMgDV22KtwDkcwLH9jK%2BXAVomNsV9gmq9HCy0vp4TjJhq2m045tkUc8%2B0wVED4zSSXzIeGIzTDKpEsxo4nQCrUYMWIL9uCtY9QLFTL12qN9mYZPHQi%2BhqTw21mq8muaocH1bm8tpJxglSUItqND5HwAC6jxxA8TbsYfamumsZ9b1s8KAZZzNSPLoC7zs%2BHcsX5lBeLxq70DTE3Xd7uJygn1l1ON%2BRUV4Zd08lZJAUvrADV8hWGoJGOYWVs26UgW3PmnVeBA3YSEbzDyreEokxpyLtjzWv7j0o%2BmH6%2BOP%2F3HSvMpr5rXA13k71SA97KSPWSOF3cIOZ5ILyW%2BJ4oOOWzPs%2FhR1hwpaDYL1hzWAsOdvsMph%2FaeBoxPybzy8YniJSUWfsEawc5lB5aughajQPRupo5eTrb3FqX3Mqa9sQ%2FkExwKIIAgBEGDw4MJ%2F%2BDCrdet3fslNPAdYLIztQAVz645V4Q0q1MjEuuYuqEkNQOc8NDannDKcqnNmkI12XvlfpsdpCWvHM039zUxkDWGUG5i%2BcMBlxyiePmiSwwFKgZvfD%2FwPfmaWAu82%2B7tX%2BL%2FGdCnUOMPFEIdxyfDocQy4gkGIiMI%2FGk9KwF4QaDVTOHSnh7zNM43I7cXcjBiuZWgyDsL4xUwxseDwAY6pgES1J%2F3U4xmfM9vLHcx%2B745A8l4%2Fz%2FNCL5FhV8eoiE6CzLPs7jp6GfuMsZFP9AO3E03Vm1AUuxF7oHyr5EIiItNc1iysIbCtJLDbSWbQZ7joxaPglpvVXIA5d0Q%2FZK4G95cnSRQ6fwn7gRh1I6S5ouTcd99vqDexjSy0FertZFU49TKscxCY%2BVZtCOMHSU2PlL7C0ORR7ek9lShfWHMOxQgylzEnMmQ&X-Amz-Signature=5c7992f7381e2fe8f0f9f31d97a7a9c7716c6ad49d020d6f0656e88a43478a83&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBQTEED%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPsV5LJaK2D5P221u0YTscPO4hsHUcP3lA1Tm6gBIjAAiAbgaFY6aDoDEc8oPyHkdQwuHKkWC3L2bVGlUv4HuXjYir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMvi92SFpbZvMgDV22KtwDkcwLH9jK%2BXAVomNsV9gmq9HCy0vp4TjJhq2m045tkUc8%2B0wVED4zSSXzIeGIzTDKpEsxo4nQCrUYMWIL9uCtY9QLFTL12qN9mYZPHQi%2BhqTw21mq8muaocH1bm8tpJxglSUItqND5HwAC6jxxA8TbsYfamumsZ9b1s8KAZZzNSPLoC7zs%2BHcsX5lBeLxq70DTE3Xd7uJygn1l1ON%2BRUV4Zd08lZJAUvrADV8hWGoJGOYWVs26UgW3PmnVeBA3YSEbzDyreEokxpyLtjzWv7j0o%2BmH6%2BOP%2F3HSvMpr5rXA13k71SA97KSPWSOF3cIOZ5ILyW%2BJ4oOOWzPs%2FhR1hwpaDYL1hzWAsOdvsMph%2FaeBoxPybzy8YniJSUWfsEawc5lB5aughajQPRupo5eTrb3FqX3Mqa9sQ%2FkExwKIIAgBEGDw4MJ%2F%2BDCrdet3fslNPAdYLIztQAVz645V4Q0q1MjEuuYuqEkNQOc8NDannDKcqnNmkI12XvlfpsdpCWvHM039zUxkDWGUG5i%2BcMBlxyiePmiSwwFKgZvfD%2FwPfmaWAu82%2B7tX%2BL%2FGdCnUOMPFEIdxyfDocQy4gkGIiMI%2FGk9KwF4QaDVTOHSnh7zNM43I7cXcjBiuZWgyDsL4xUwxseDwAY6pgES1J%2F3U4xmfM9vLHcx%2B745A8l4%2Fz%2FNCL5FhV8eoiE6CzLPs7jp6GfuMsZFP9AO3E03Vm1AUuxF7oHyr5EIiItNc1iysIbCtJLDbSWbQZ7joxaPglpvVXIA5d0Q%2FZK4G95cnSRQ6fwn7gRh1I6S5ouTcd99vqDexjSy0FertZFU49TKscxCY%2BVZtCOMHSU2PlL7C0ORR7ek9lShfWHMOxQgylzEnMmQ&X-Amz-Signature=e41aef7ef741e929b8688b74d704de93a6c336255e8e65c8ab26451453130bda&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBQTEED%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPsV5LJaK2D5P221u0YTscPO4hsHUcP3lA1Tm6gBIjAAiAbgaFY6aDoDEc8oPyHkdQwuHKkWC3L2bVGlUv4HuXjYir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMvi92SFpbZvMgDV22KtwDkcwLH9jK%2BXAVomNsV9gmq9HCy0vp4TjJhq2m045tkUc8%2B0wVED4zSSXzIeGIzTDKpEsxo4nQCrUYMWIL9uCtY9QLFTL12qN9mYZPHQi%2BhqTw21mq8muaocH1bm8tpJxglSUItqND5HwAC6jxxA8TbsYfamumsZ9b1s8KAZZzNSPLoC7zs%2BHcsX5lBeLxq70DTE3Xd7uJygn1l1ON%2BRUV4Zd08lZJAUvrADV8hWGoJGOYWVs26UgW3PmnVeBA3YSEbzDyreEokxpyLtjzWv7j0o%2BmH6%2BOP%2F3HSvMpr5rXA13k71SA97KSPWSOF3cIOZ5ILyW%2BJ4oOOWzPs%2FhR1hwpaDYL1hzWAsOdvsMph%2FaeBoxPybzy8YniJSUWfsEawc5lB5aughajQPRupo5eTrb3FqX3Mqa9sQ%2FkExwKIIAgBEGDw4MJ%2F%2BDCrdet3fslNPAdYLIztQAVz645V4Q0q1MjEuuYuqEkNQOc8NDannDKcqnNmkI12XvlfpsdpCWvHM039zUxkDWGUG5i%2BcMBlxyiePmiSwwFKgZvfD%2FwPfmaWAu82%2B7tX%2BL%2FGdCnUOMPFEIdxyfDocQy4gkGIiMI%2FGk9KwF4QaDVTOHSnh7zNM43I7cXcjBiuZWgyDsL4xUwxseDwAY6pgES1J%2F3U4xmfM9vLHcx%2B745A8l4%2Fz%2FNCL5FhV8eoiE6CzLPs7jp6GfuMsZFP9AO3E03Vm1AUuxF7oHyr5EIiItNc1iysIbCtJLDbSWbQZ7joxaPglpvVXIA5d0Q%2FZK4G95cnSRQ6fwn7gRh1I6S5ouTcd99vqDexjSy0FertZFU49TKscxCY%2BVZtCOMHSU2PlL7C0ORR7ek9lShfWHMOxQgylzEnMmQ&X-Amz-Signature=61548dbe3885ceb2af2990accd38f90526d01e14c46a3ca7254aa57c0d3eb08d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBQTEED%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPsV5LJaK2D5P221u0YTscPO4hsHUcP3lA1Tm6gBIjAAiAbgaFY6aDoDEc8oPyHkdQwuHKkWC3L2bVGlUv4HuXjYir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMvi92SFpbZvMgDV22KtwDkcwLH9jK%2BXAVomNsV9gmq9HCy0vp4TjJhq2m045tkUc8%2B0wVED4zSSXzIeGIzTDKpEsxo4nQCrUYMWIL9uCtY9QLFTL12qN9mYZPHQi%2BhqTw21mq8muaocH1bm8tpJxglSUItqND5HwAC6jxxA8TbsYfamumsZ9b1s8KAZZzNSPLoC7zs%2BHcsX5lBeLxq70DTE3Xd7uJygn1l1ON%2BRUV4Zd08lZJAUvrADV8hWGoJGOYWVs26UgW3PmnVeBA3YSEbzDyreEokxpyLtjzWv7j0o%2BmH6%2BOP%2F3HSvMpr5rXA13k71SA97KSPWSOF3cIOZ5ILyW%2BJ4oOOWzPs%2FhR1hwpaDYL1hzWAsOdvsMph%2FaeBoxPybzy8YniJSUWfsEawc5lB5aughajQPRupo5eTrb3FqX3Mqa9sQ%2FkExwKIIAgBEGDw4MJ%2F%2BDCrdet3fslNPAdYLIztQAVz645V4Q0q1MjEuuYuqEkNQOc8NDannDKcqnNmkI12XvlfpsdpCWvHM039zUxkDWGUG5i%2BcMBlxyiePmiSwwFKgZvfD%2FwPfmaWAu82%2B7tX%2BL%2FGdCnUOMPFEIdxyfDocQy4gkGIiMI%2FGk9KwF4QaDVTOHSnh7zNM43I7cXcjBiuZWgyDsL4xUwxseDwAY6pgES1J%2F3U4xmfM9vLHcx%2B745A8l4%2Fz%2FNCL5FhV8eoiE6CzLPs7jp6GfuMsZFP9AO3E03Vm1AUuxF7oHyr5EIiItNc1iysIbCtJLDbSWbQZ7joxaPglpvVXIA5d0Q%2FZK4G95cnSRQ6fwn7gRh1I6S5ouTcd99vqDexjSy0FertZFU49TKscxCY%2BVZtCOMHSU2PlL7C0ORR7ek9lShfWHMOxQgylzEnMmQ&X-Amz-Signature=3525f702d0ad4b0677d274bd9a0c1af8df716c3379756d28f84a67d8691ce399&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
