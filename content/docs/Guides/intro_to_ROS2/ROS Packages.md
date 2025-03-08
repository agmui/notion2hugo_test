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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAY2YFXK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH6Nq43qRbiVe%2B2NtB28rStVwaQHsjqs1vSRvj85zDUSAiBncHTg2DBYeaMN5StfhmxWKcS0vXecsnt6wpnUx59vKir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMxowVS3mgDYQ3IQc9KtwDP42x6KDPn2EGxm7u5ovrrKeKm7eKIJY%2FBqKA5z1HasC69%2BmHARIVR1I7P%2FN9OTWwLYB2%2Fno%2FCu%2B14O%2Fo%2B4MwNUha2QoPEanHhk7XmdvBiPsSpVeyZyqACcN%2BMBKWqovs8AZS830zbzwxFdYo%2BizudTkPtNYYaV7LyGUSUPe%2B5YJefahk90BSMZqgn%2FhPy57K7I9TKELxPcUN7xuJi3HzjclossbWKM9NYBKVMtAPdnHjeNKGEo088jEwcf3Z%2FsjyqB%2Flmce%2BHUO8uXWjUSH2DXOi704lHeFHkxVflrkDly8wkJiVpp6c7E9fhoHgYdiws24fm5jOHrM3TweBvrQJIMkmGy9%2BpVTKjHTUTAtU9MchfNhP8NehEdBJmuhhrUixtn0lEs51Dcc1BbUNgXOrxxlpa8rjSaQEsnXEAD%2FOcoZBjxI6lca9rnK2Ms5BICErR8EvtE0XtCDpEu8eKb1gqXBUIxrMwo3CZqFbzu0XhKz%2B04f9bqNZxaqV7cc00U2k1MVsy3xFU0%2BNyFFp%2Fv5RFWx%2B81VdvOe9r%2BTGJeUameC%2FRp3PBpZ%2F%2Bb0aRvpvSmvK%2B8jCE5nYezAQsomOSzMAIwQ22NkgzL6lisID0uHHpaFYY9RycbCSuVPeencw%2F%2F6vvgY6pgEprlEAXqdDrq6TU%2BxZCRsydtEsBMR00U%2Fpu4ycfMySCr76Hi1tWiDqQswZQAFphsng5l%2FQlJb8Uv6L0m9hOdl2WnV67kFPSlFtxgQ2G1NkeJSKwKSLnhSjxz%2BHXBL1iQ8LniuHlyzT%2F7AB2M4DM2A%2Bk4cea0LgZFsSJGG1%2FxnQkH9LTsTG21QAaWPRYiuH2jKKS%2BuVxnpdfweRE2iRiCmz%2BeiPUwRv&X-Amz-Signature=d7f32f1f09a5cf1e30fd750695d80359b6231e2998d99d32c79aaa90960a921e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAY2YFXK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH6Nq43qRbiVe%2B2NtB28rStVwaQHsjqs1vSRvj85zDUSAiBncHTg2DBYeaMN5StfhmxWKcS0vXecsnt6wpnUx59vKir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMxowVS3mgDYQ3IQc9KtwDP42x6KDPn2EGxm7u5ovrrKeKm7eKIJY%2FBqKA5z1HasC69%2BmHARIVR1I7P%2FN9OTWwLYB2%2Fno%2FCu%2B14O%2Fo%2B4MwNUha2QoPEanHhk7XmdvBiPsSpVeyZyqACcN%2BMBKWqovs8AZS830zbzwxFdYo%2BizudTkPtNYYaV7LyGUSUPe%2B5YJefahk90BSMZqgn%2FhPy57K7I9TKELxPcUN7xuJi3HzjclossbWKM9NYBKVMtAPdnHjeNKGEo088jEwcf3Z%2FsjyqB%2Flmce%2BHUO8uXWjUSH2DXOi704lHeFHkxVflrkDly8wkJiVpp6c7E9fhoHgYdiws24fm5jOHrM3TweBvrQJIMkmGy9%2BpVTKjHTUTAtU9MchfNhP8NehEdBJmuhhrUixtn0lEs51Dcc1BbUNgXOrxxlpa8rjSaQEsnXEAD%2FOcoZBjxI6lca9rnK2Ms5BICErR8EvtE0XtCDpEu8eKb1gqXBUIxrMwo3CZqFbzu0XhKz%2B04f9bqNZxaqV7cc00U2k1MVsy3xFU0%2BNyFFp%2Fv5RFWx%2B81VdvOe9r%2BTGJeUameC%2FRp3PBpZ%2F%2Bb0aRvpvSmvK%2B8jCE5nYezAQsomOSzMAIwQ22NkgzL6lisID0uHHpaFYY9RycbCSuVPeencw%2F%2F6vvgY6pgEprlEAXqdDrq6TU%2BxZCRsydtEsBMR00U%2Fpu4ycfMySCr76Hi1tWiDqQswZQAFphsng5l%2FQlJb8Uv6L0m9hOdl2WnV67kFPSlFtxgQ2G1NkeJSKwKSLnhSjxz%2BHXBL1iQ8LniuHlyzT%2F7AB2M4DM2A%2Bk4cea0LgZFsSJGG1%2FxnQkH9LTsTG21QAaWPRYiuH2jKKS%2BuVxnpdfweRE2iRiCmz%2BeiPUwRv&X-Amz-Signature=c32d815a0bb2eedd0ebd6e9a6d600ac6e1a7585b7a4b5236cd881e17dc94d3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAY2YFXK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH6Nq43qRbiVe%2B2NtB28rStVwaQHsjqs1vSRvj85zDUSAiBncHTg2DBYeaMN5StfhmxWKcS0vXecsnt6wpnUx59vKir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMxowVS3mgDYQ3IQc9KtwDP42x6KDPn2EGxm7u5ovrrKeKm7eKIJY%2FBqKA5z1HasC69%2BmHARIVR1I7P%2FN9OTWwLYB2%2Fno%2FCu%2B14O%2Fo%2B4MwNUha2QoPEanHhk7XmdvBiPsSpVeyZyqACcN%2BMBKWqovs8AZS830zbzwxFdYo%2BizudTkPtNYYaV7LyGUSUPe%2B5YJefahk90BSMZqgn%2FhPy57K7I9TKELxPcUN7xuJi3HzjclossbWKM9NYBKVMtAPdnHjeNKGEo088jEwcf3Z%2FsjyqB%2Flmce%2BHUO8uXWjUSH2DXOi704lHeFHkxVflrkDly8wkJiVpp6c7E9fhoHgYdiws24fm5jOHrM3TweBvrQJIMkmGy9%2BpVTKjHTUTAtU9MchfNhP8NehEdBJmuhhrUixtn0lEs51Dcc1BbUNgXOrxxlpa8rjSaQEsnXEAD%2FOcoZBjxI6lca9rnK2Ms5BICErR8EvtE0XtCDpEu8eKb1gqXBUIxrMwo3CZqFbzu0XhKz%2B04f9bqNZxaqV7cc00U2k1MVsy3xFU0%2BNyFFp%2Fv5RFWx%2B81VdvOe9r%2BTGJeUameC%2FRp3PBpZ%2F%2Bb0aRvpvSmvK%2B8jCE5nYezAQsomOSzMAIwQ22NkgzL6lisID0uHHpaFYY9RycbCSuVPeencw%2F%2F6vvgY6pgEprlEAXqdDrq6TU%2BxZCRsydtEsBMR00U%2Fpu4ycfMySCr76Hi1tWiDqQswZQAFphsng5l%2FQlJb8Uv6L0m9hOdl2WnV67kFPSlFtxgQ2G1NkeJSKwKSLnhSjxz%2BHXBL1iQ8LniuHlyzT%2F7AB2M4DM2A%2Bk4cea0LgZFsSJGG1%2FxnQkH9LTsTG21QAaWPRYiuH2jKKS%2BuVxnpdfweRE2iRiCmz%2BeiPUwRv&X-Amz-Signature=4c8242dc554606b128f26e01981883a8a047c1a680b70de073d1719299d6b35e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAY2YFXK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH6Nq43qRbiVe%2B2NtB28rStVwaQHsjqs1vSRvj85zDUSAiBncHTg2DBYeaMN5StfhmxWKcS0vXecsnt6wpnUx59vKir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMxowVS3mgDYQ3IQc9KtwDP42x6KDPn2EGxm7u5ovrrKeKm7eKIJY%2FBqKA5z1HasC69%2BmHARIVR1I7P%2FN9OTWwLYB2%2Fno%2FCu%2B14O%2Fo%2B4MwNUha2QoPEanHhk7XmdvBiPsSpVeyZyqACcN%2BMBKWqovs8AZS830zbzwxFdYo%2BizudTkPtNYYaV7LyGUSUPe%2B5YJefahk90BSMZqgn%2FhPy57K7I9TKELxPcUN7xuJi3HzjclossbWKM9NYBKVMtAPdnHjeNKGEo088jEwcf3Z%2FsjyqB%2Flmce%2BHUO8uXWjUSH2DXOi704lHeFHkxVflrkDly8wkJiVpp6c7E9fhoHgYdiws24fm5jOHrM3TweBvrQJIMkmGy9%2BpVTKjHTUTAtU9MchfNhP8NehEdBJmuhhrUixtn0lEs51Dcc1BbUNgXOrxxlpa8rjSaQEsnXEAD%2FOcoZBjxI6lca9rnK2Ms5BICErR8EvtE0XtCDpEu8eKb1gqXBUIxrMwo3CZqFbzu0XhKz%2B04f9bqNZxaqV7cc00U2k1MVsy3xFU0%2BNyFFp%2Fv5RFWx%2B81VdvOe9r%2BTGJeUameC%2FRp3PBpZ%2F%2Bb0aRvpvSmvK%2B8jCE5nYezAQsomOSzMAIwQ22NkgzL6lisID0uHHpaFYY9RycbCSuVPeencw%2F%2F6vvgY6pgEprlEAXqdDrq6TU%2BxZCRsydtEsBMR00U%2Fpu4ycfMySCr76Hi1tWiDqQswZQAFphsng5l%2FQlJb8Uv6L0m9hOdl2WnV67kFPSlFtxgQ2G1NkeJSKwKSLnhSjxz%2BHXBL1iQ8LniuHlyzT%2F7AB2M4DM2A%2Bk4cea0LgZFsSJGG1%2FxnQkH9LTsTG21QAaWPRYiuH2jKKS%2BuVxnpdfweRE2iRiCmz%2BeiPUwRv&X-Amz-Signature=81b87ea388630c3c01dae4b688fb1bf086fb02f87c0234e4922dae4f27964292&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAY2YFXK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH6Nq43qRbiVe%2B2NtB28rStVwaQHsjqs1vSRvj85zDUSAiBncHTg2DBYeaMN5StfhmxWKcS0vXecsnt6wpnUx59vKir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMxowVS3mgDYQ3IQc9KtwDP42x6KDPn2EGxm7u5ovrrKeKm7eKIJY%2FBqKA5z1HasC69%2BmHARIVR1I7P%2FN9OTWwLYB2%2Fno%2FCu%2B14O%2Fo%2B4MwNUha2QoPEanHhk7XmdvBiPsSpVeyZyqACcN%2BMBKWqovs8AZS830zbzwxFdYo%2BizudTkPtNYYaV7LyGUSUPe%2B5YJefahk90BSMZqgn%2FhPy57K7I9TKELxPcUN7xuJi3HzjclossbWKM9NYBKVMtAPdnHjeNKGEo088jEwcf3Z%2FsjyqB%2Flmce%2BHUO8uXWjUSH2DXOi704lHeFHkxVflrkDly8wkJiVpp6c7E9fhoHgYdiws24fm5jOHrM3TweBvrQJIMkmGy9%2BpVTKjHTUTAtU9MchfNhP8NehEdBJmuhhrUixtn0lEs51Dcc1BbUNgXOrxxlpa8rjSaQEsnXEAD%2FOcoZBjxI6lca9rnK2Ms5BICErR8EvtE0XtCDpEu8eKb1gqXBUIxrMwo3CZqFbzu0XhKz%2B04f9bqNZxaqV7cc00U2k1MVsy3xFU0%2BNyFFp%2Fv5RFWx%2B81VdvOe9r%2BTGJeUameC%2FRp3PBpZ%2F%2Bb0aRvpvSmvK%2B8jCE5nYezAQsomOSzMAIwQ22NkgzL6lisID0uHHpaFYY9RycbCSuVPeencw%2F%2F6vvgY6pgEprlEAXqdDrq6TU%2BxZCRsydtEsBMR00U%2Fpu4ycfMySCr76Hi1tWiDqQswZQAFphsng5l%2FQlJb8Uv6L0m9hOdl2WnV67kFPSlFtxgQ2G1NkeJSKwKSLnhSjxz%2BHXBL1iQ8LniuHlyzT%2F7AB2M4DM2A%2Bk4cea0LgZFsSJGG1%2FxnQkH9LTsTG21QAaWPRYiuH2jKKS%2BuVxnpdfweRE2iRiCmz%2BeiPUwRv&X-Amz-Signature=63d8d4e8b5bf7a8c5f8932f5f921bd4c559923e1afdab1ad667a1a22595eeed8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAY2YFXK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH6Nq43qRbiVe%2B2NtB28rStVwaQHsjqs1vSRvj85zDUSAiBncHTg2DBYeaMN5StfhmxWKcS0vXecsnt6wpnUx59vKir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMxowVS3mgDYQ3IQc9KtwDP42x6KDPn2EGxm7u5ovrrKeKm7eKIJY%2FBqKA5z1HasC69%2BmHARIVR1I7P%2FN9OTWwLYB2%2Fno%2FCu%2B14O%2Fo%2B4MwNUha2QoPEanHhk7XmdvBiPsSpVeyZyqACcN%2BMBKWqovs8AZS830zbzwxFdYo%2BizudTkPtNYYaV7LyGUSUPe%2B5YJefahk90BSMZqgn%2FhPy57K7I9TKELxPcUN7xuJi3HzjclossbWKM9NYBKVMtAPdnHjeNKGEo088jEwcf3Z%2FsjyqB%2Flmce%2BHUO8uXWjUSH2DXOi704lHeFHkxVflrkDly8wkJiVpp6c7E9fhoHgYdiws24fm5jOHrM3TweBvrQJIMkmGy9%2BpVTKjHTUTAtU9MchfNhP8NehEdBJmuhhrUixtn0lEs51Dcc1BbUNgXOrxxlpa8rjSaQEsnXEAD%2FOcoZBjxI6lca9rnK2Ms5BICErR8EvtE0XtCDpEu8eKb1gqXBUIxrMwo3CZqFbzu0XhKz%2B04f9bqNZxaqV7cc00U2k1MVsy3xFU0%2BNyFFp%2Fv5RFWx%2B81VdvOe9r%2BTGJeUameC%2FRp3PBpZ%2F%2Bb0aRvpvSmvK%2B8jCE5nYezAQsomOSzMAIwQ22NkgzL6lisID0uHHpaFYY9RycbCSuVPeencw%2F%2F6vvgY6pgEprlEAXqdDrq6TU%2BxZCRsydtEsBMR00U%2Fpu4ycfMySCr76Hi1tWiDqQswZQAFphsng5l%2FQlJb8Uv6L0m9hOdl2WnV67kFPSlFtxgQ2G1NkeJSKwKSLnhSjxz%2BHXBL1iQ8LniuHlyzT%2F7AB2M4DM2A%2Bk4cea0LgZFsSJGG1%2FxnQkH9LTsTG21QAaWPRYiuH2jKKS%2BuVxnpdfweRE2iRiCmz%2BeiPUwRv&X-Amz-Signature=d12d31667200140687de467a6de551bf3cb6750be21ca79fc6df1de621fda765&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAY2YFXK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH6Nq43qRbiVe%2B2NtB28rStVwaQHsjqs1vSRvj85zDUSAiBncHTg2DBYeaMN5StfhmxWKcS0vXecsnt6wpnUx59vKir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMxowVS3mgDYQ3IQc9KtwDP42x6KDPn2EGxm7u5ovrrKeKm7eKIJY%2FBqKA5z1HasC69%2BmHARIVR1I7P%2FN9OTWwLYB2%2Fno%2FCu%2B14O%2Fo%2B4MwNUha2QoPEanHhk7XmdvBiPsSpVeyZyqACcN%2BMBKWqovs8AZS830zbzwxFdYo%2BizudTkPtNYYaV7LyGUSUPe%2B5YJefahk90BSMZqgn%2FhPy57K7I9TKELxPcUN7xuJi3HzjclossbWKM9NYBKVMtAPdnHjeNKGEo088jEwcf3Z%2FsjyqB%2Flmce%2BHUO8uXWjUSH2DXOi704lHeFHkxVflrkDly8wkJiVpp6c7E9fhoHgYdiws24fm5jOHrM3TweBvrQJIMkmGy9%2BpVTKjHTUTAtU9MchfNhP8NehEdBJmuhhrUixtn0lEs51Dcc1BbUNgXOrxxlpa8rjSaQEsnXEAD%2FOcoZBjxI6lca9rnK2Ms5BICErR8EvtE0XtCDpEu8eKb1gqXBUIxrMwo3CZqFbzu0XhKz%2B04f9bqNZxaqV7cc00U2k1MVsy3xFU0%2BNyFFp%2Fv5RFWx%2B81VdvOe9r%2BTGJeUameC%2FRp3PBpZ%2F%2Bb0aRvpvSmvK%2B8jCE5nYezAQsomOSzMAIwQ22NkgzL6lisID0uHHpaFYY9RycbCSuVPeencw%2F%2F6vvgY6pgEprlEAXqdDrq6TU%2BxZCRsydtEsBMR00U%2Fpu4ycfMySCr76Hi1tWiDqQswZQAFphsng5l%2FQlJb8Uv6L0m9hOdl2WnV67kFPSlFtxgQ2G1NkeJSKwKSLnhSjxz%2BHXBL1iQ8LniuHlyzT%2F7AB2M4DM2A%2Bk4cea0LgZFsSJGG1%2FxnQkH9LTsTG21QAaWPRYiuH2jKKS%2BuVxnpdfweRE2iRiCmz%2BeiPUwRv&X-Amz-Signature=2f1cd6f4fb9e3b7e81d1e1143874e622482fb08fb2d234c82c3cb2275a0f33ca&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
