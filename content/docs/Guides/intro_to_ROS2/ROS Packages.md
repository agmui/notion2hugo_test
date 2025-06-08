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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJTHRQD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtopBi927QPClEtJTf8x4JAhXYmmU0vSaN7xbH5yJvmAiEAmPvFLjoWwj1iJPJJv6joCEHc7CXPVtvJPvcKc%2Fhb%2BQwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55Z32bORRA5ehC0yrcAwBYr%2BWP%2FoKEU8ftMp%2FcAlaM2hjfVZC9pVJ4epRnyXh9MJO9HlSPho7pGcWEIQNOpUj1ymqX6Ps5p9toZ9kzBH2s%2BqzRQ%2FHMTfz5JAk6BzKgbWAgo6VxBpN0DW6xrK1rOQZwzPO3OCMbWg9WhjipU70KP6iWL3mQQbSmh1IEdSFWUsl7T3VPyH4hRzNoSDSmVWvgrRGNU8ojYrJO8st1OTtJ5DiHf4xGL%2BOYeciKmQfqoS3xMR28uBVhiMKAFHgNBaL1YqhyEO9%2BaHMD%2F%2B5Qb2ZZQTPUBsLz46ZvBONvJz%2BW0ZQQ85BNicV8taMIWdPWKBlRu1lm%2FlYiIEqtlIvKmVHjbgEdyQlfbrhDPhgix5bFwHLchpic%2FHMTaog8V2mkkqJEdf%2Bj%2B2Smd1G7Hi0X7%2BU3xtOlWJ3Wjl18NgqOs%2Ff1lM3Yza7JO57NLt9eLwipQXJWYo9jS14OijU08pbWxKeWiMtayLa73%2FTmZA6JiNSX%2Fi%2Bbq8FenztWLE7xMEQkzIJ6pkowpzMCjps7KFDQWA%2B2qFE9WFHkC02PGwKsPOcUd3ZOFLB9xxUHmbnYzdcyxURXFD0L%2B1uapDwOl9ltSUCdhEztz5x3mUaf67t%2F9LJ3MLnCELe3mnONzh2DMP3hl8IGOqUBHTae6X%2BvmraykD83Fe1w4q0cbBXzJECArm5kL9tuv4tCG9Yw%2FeaJ%2FaKoZFd9pBwWk0v6ip2oCH8eBnPxLvgVG2x1ujY2EdLVVZOkgfIn8%2Beb70b9Qd1g%2FwdAdPDRjPS8M%2FM1WUoyugGvpqzaUClxcbcIuBkFgBrDzo0NYNXicReNn%2BVXNsNAxEsESDehVQebUtnceG96%2FmcE9Yx3ugyS9KfjqF7c&X-Amz-Signature=4381dc70c59668353fb517572bb1144d466ccf90a2a8781e34988dcfba85ec43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJTHRQD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtopBi927QPClEtJTf8x4JAhXYmmU0vSaN7xbH5yJvmAiEAmPvFLjoWwj1iJPJJv6joCEHc7CXPVtvJPvcKc%2Fhb%2BQwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55Z32bORRA5ehC0yrcAwBYr%2BWP%2FoKEU8ftMp%2FcAlaM2hjfVZC9pVJ4epRnyXh9MJO9HlSPho7pGcWEIQNOpUj1ymqX6Ps5p9toZ9kzBH2s%2BqzRQ%2FHMTfz5JAk6BzKgbWAgo6VxBpN0DW6xrK1rOQZwzPO3OCMbWg9WhjipU70KP6iWL3mQQbSmh1IEdSFWUsl7T3VPyH4hRzNoSDSmVWvgrRGNU8ojYrJO8st1OTtJ5DiHf4xGL%2BOYeciKmQfqoS3xMR28uBVhiMKAFHgNBaL1YqhyEO9%2BaHMD%2F%2B5Qb2ZZQTPUBsLz46ZvBONvJz%2BW0ZQQ85BNicV8taMIWdPWKBlRu1lm%2FlYiIEqtlIvKmVHjbgEdyQlfbrhDPhgix5bFwHLchpic%2FHMTaog8V2mkkqJEdf%2Bj%2B2Smd1G7Hi0X7%2BU3xtOlWJ3Wjl18NgqOs%2Ff1lM3Yza7JO57NLt9eLwipQXJWYo9jS14OijU08pbWxKeWiMtayLa73%2FTmZA6JiNSX%2Fi%2Bbq8FenztWLE7xMEQkzIJ6pkowpzMCjps7KFDQWA%2B2qFE9WFHkC02PGwKsPOcUd3ZOFLB9xxUHmbnYzdcyxURXFD0L%2B1uapDwOl9ltSUCdhEztz5x3mUaf67t%2F9LJ3MLnCELe3mnONzh2DMP3hl8IGOqUBHTae6X%2BvmraykD83Fe1w4q0cbBXzJECArm5kL9tuv4tCG9Yw%2FeaJ%2FaKoZFd9pBwWk0v6ip2oCH8eBnPxLvgVG2x1ujY2EdLVVZOkgfIn8%2Beb70b9Qd1g%2FwdAdPDRjPS8M%2FM1WUoyugGvpqzaUClxcbcIuBkFgBrDzo0NYNXicReNn%2BVXNsNAxEsESDehVQebUtnceG96%2FmcE9Yx3ugyS9KfjqF7c&X-Amz-Signature=91facdcf53dad3010d4cc8b0375df6849d79c3abbe5190ca35302db564a5360c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJTHRQD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtopBi927QPClEtJTf8x4JAhXYmmU0vSaN7xbH5yJvmAiEAmPvFLjoWwj1iJPJJv6joCEHc7CXPVtvJPvcKc%2Fhb%2BQwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55Z32bORRA5ehC0yrcAwBYr%2BWP%2FoKEU8ftMp%2FcAlaM2hjfVZC9pVJ4epRnyXh9MJO9HlSPho7pGcWEIQNOpUj1ymqX6Ps5p9toZ9kzBH2s%2BqzRQ%2FHMTfz5JAk6BzKgbWAgo6VxBpN0DW6xrK1rOQZwzPO3OCMbWg9WhjipU70KP6iWL3mQQbSmh1IEdSFWUsl7T3VPyH4hRzNoSDSmVWvgrRGNU8ojYrJO8st1OTtJ5DiHf4xGL%2BOYeciKmQfqoS3xMR28uBVhiMKAFHgNBaL1YqhyEO9%2BaHMD%2F%2B5Qb2ZZQTPUBsLz46ZvBONvJz%2BW0ZQQ85BNicV8taMIWdPWKBlRu1lm%2FlYiIEqtlIvKmVHjbgEdyQlfbrhDPhgix5bFwHLchpic%2FHMTaog8V2mkkqJEdf%2Bj%2B2Smd1G7Hi0X7%2BU3xtOlWJ3Wjl18NgqOs%2Ff1lM3Yza7JO57NLt9eLwipQXJWYo9jS14OijU08pbWxKeWiMtayLa73%2FTmZA6JiNSX%2Fi%2Bbq8FenztWLE7xMEQkzIJ6pkowpzMCjps7KFDQWA%2B2qFE9WFHkC02PGwKsPOcUd3ZOFLB9xxUHmbnYzdcyxURXFD0L%2B1uapDwOl9ltSUCdhEztz5x3mUaf67t%2F9LJ3MLnCELe3mnONzh2DMP3hl8IGOqUBHTae6X%2BvmraykD83Fe1w4q0cbBXzJECArm5kL9tuv4tCG9Yw%2FeaJ%2FaKoZFd9pBwWk0v6ip2oCH8eBnPxLvgVG2x1ujY2EdLVVZOkgfIn8%2Beb70b9Qd1g%2FwdAdPDRjPS8M%2FM1WUoyugGvpqzaUClxcbcIuBkFgBrDzo0NYNXicReNn%2BVXNsNAxEsESDehVQebUtnceG96%2FmcE9Yx3ugyS9KfjqF7c&X-Amz-Signature=b7f899294bb6b144a3c894e1cee23fd03f852be2637e992d5907ee5ad1b69a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJTHRQD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtopBi927QPClEtJTf8x4JAhXYmmU0vSaN7xbH5yJvmAiEAmPvFLjoWwj1iJPJJv6joCEHc7CXPVtvJPvcKc%2Fhb%2BQwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55Z32bORRA5ehC0yrcAwBYr%2BWP%2FoKEU8ftMp%2FcAlaM2hjfVZC9pVJ4epRnyXh9MJO9HlSPho7pGcWEIQNOpUj1ymqX6Ps5p9toZ9kzBH2s%2BqzRQ%2FHMTfz5JAk6BzKgbWAgo6VxBpN0DW6xrK1rOQZwzPO3OCMbWg9WhjipU70KP6iWL3mQQbSmh1IEdSFWUsl7T3VPyH4hRzNoSDSmVWvgrRGNU8ojYrJO8st1OTtJ5DiHf4xGL%2BOYeciKmQfqoS3xMR28uBVhiMKAFHgNBaL1YqhyEO9%2BaHMD%2F%2B5Qb2ZZQTPUBsLz46ZvBONvJz%2BW0ZQQ85BNicV8taMIWdPWKBlRu1lm%2FlYiIEqtlIvKmVHjbgEdyQlfbrhDPhgix5bFwHLchpic%2FHMTaog8V2mkkqJEdf%2Bj%2B2Smd1G7Hi0X7%2BU3xtOlWJ3Wjl18NgqOs%2Ff1lM3Yza7JO57NLt9eLwipQXJWYo9jS14OijU08pbWxKeWiMtayLa73%2FTmZA6JiNSX%2Fi%2Bbq8FenztWLE7xMEQkzIJ6pkowpzMCjps7KFDQWA%2B2qFE9WFHkC02PGwKsPOcUd3ZOFLB9xxUHmbnYzdcyxURXFD0L%2B1uapDwOl9ltSUCdhEztz5x3mUaf67t%2F9LJ3MLnCELe3mnONzh2DMP3hl8IGOqUBHTae6X%2BvmraykD83Fe1w4q0cbBXzJECArm5kL9tuv4tCG9Yw%2FeaJ%2FaKoZFd9pBwWk0v6ip2oCH8eBnPxLvgVG2x1ujY2EdLVVZOkgfIn8%2Beb70b9Qd1g%2FwdAdPDRjPS8M%2FM1WUoyugGvpqzaUClxcbcIuBkFgBrDzo0NYNXicReNn%2BVXNsNAxEsESDehVQebUtnceG96%2FmcE9Yx3ugyS9KfjqF7c&X-Amz-Signature=2ede518f6b1ebfca0f9fea12676fe3420557ffd93aff9c332fd3518423ef2d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJTHRQD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtopBi927QPClEtJTf8x4JAhXYmmU0vSaN7xbH5yJvmAiEAmPvFLjoWwj1iJPJJv6joCEHc7CXPVtvJPvcKc%2Fhb%2BQwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55Z32bORRA5ehC0yrcAwBYr%2BWP%2FoKEU8ftMp%2FcAlaM2hjfVZC9pVJ4epRnyXh9MJO9HlSPho7pGcWEIQNOpUj1ymqX6Ps5p9toZ9kzBH2s%2BqzRQ%2FHMTfz5JAk6BzKgbWAgo6VxBpN0DW6xrK1rOQZwzPO3OCMbWg9WhjipU70KP6iWL3mQQbSmh1IEdSFWUsl7T3VPyH4hRzNoSDSmVWvgrRGNU8ojYrJO8st1OTtJ5DiHf4xGL%2BOYeciKmQfqoS3xMR28uBVhiMKAFHgNBaL1YqhyEO9%2BaHMD%2F%2B5Qb2ZZQTPUBsLz46ZvBONvJz%2BW0ZQQ85BNicV8taMIWdPWKBlRu1lm%2FlYiIEqtlIvKmVHjbgEdyQlfbrhDPhgix5bFwHLchpic%2FHMTaog8V2mkkqJEdf%2Bj%2B2Smd1G7Hi0X7%2BU3xtOlWJ3Wjl18NgqOs%2Ff1lM3Yza7JO57NLt9eLwipQXJWYo9jS14OijU08pbWxKeWiMtayLa73%2FTmZA6JiNSX%2Fi%2Bbq8FenztWLE7xMEQkzIJ6pkowpzMCjps7KFDQWA%2B2qFE9WFHkC02PGwKsPOcUd3ZOFLB9xxUHmbnYzdcyxURXFD0L%2B1uapDwOl9ltSUCdhEztz5x3mUaf67t%2F9LJ3MLnCELe3mnONzh2DMP3hl8IGOqUBHTae6X%2BvmraykD83Fe1w4q0cbBXzJECArm5kL9tuv4tCG9Yw%2FeaJ%2FaKoZFd9pBwWk0v6ip2oCH8eBnPxLvgVG2x1ujY2EdLVVZOkgfIn8%2Beb70b9Qd1g%2FwdAdPDRjPS8M%2FM1WUoyugGvpqzaUClxcbcIuBkFgBrDzo0NYNXicReNn%2BVXNsNAxEsESDehVQebUtnceG96%2FmcE9Yx3ugyS9KfjqF7c&X-Amz-Signature=fd19a296da87b10ba65f8fcc1c0ddc2b37176c4f3812d97691d4c74dbea505b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJTHRQD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtopBi927QPClEtJTf8x4JAhXYmmU0vSaN7xbH5yJvmAiEAmPvFLjoWwj1iJPJJv6joCEHc7CXPVtvJPvcKc%2Fhb%2BQwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55Z32bORRA5ehC0yrcAwBYr%2BWP%2FoKEU8ftMp%2FcAlaM2hjfVZC9pVJ4epRnyXh9MJO9HlSPho7pGcWEIQNOpUj1ymqX6Ps5p9toZ9kzBH2s%2BqzRQ%2FHMTfz5JAk6BzKgbWAgo6VxBpN0DW6xrK1rOQZwzPO3OCMbWg9WhjipU70KP6iWL3mQQbSmh1IEdSFWUsl7T3VPyH4hRzNoSDSmVWvgrRGNU8ojYrJO8st1OTtJ5DiHf4xGL%2BOYeciKmQfqoS3xMR28uBVhiMKAFHgNBaL1YqhyEO9%2BaHMD%2F%2B5Qb2ZZQTPUBsLz46ZvBONvJz%2BW0ZQQ85BNicV8taMIWdPWKBlRu1lm%2FlYiIEqtlIvKmVHjbgEdyQlfbrhDPhgix5bFwHLchpic%2FHMTaog8V2mkkqJEdf%2Bj%2B2Smd1G7Hi0X7%2BU3xtOlWJ3Wjl18NgqOs%2Ff1lM3Yza7JO57NLt9eLwipQXJWYo9jS14OijU08pbWxKeWiMtayLa73%2FTmZA6JiNSX%2Fi%2Bbq8FenztWLE7xMEQkzIJ6pkowpzMCjps7KFDQWA%2B2qFE9WFHkC02PGwKsPOcUd3ZOFLB9xxUHmbnYzdcyxURXFD0L%2B1uapDwOl9ltSUCdhEztz5x3mUaf67t%2F9LJ3MLnCELe3mnONzh2DMP3hl8IGOqUBHTae6X%2BvmraykD83Fe1w4q0cbBXzJECArm5kL9tuv4tCG9Yw%2FeaJ%2FaKoZFd9pBwWk0v6ip2oCH8eBnPxLvgVG2x1ujY2EdLVVZOkgfIn8%2Beb70b9Qd1g%2FwdAdPDRjPS8M%2FM1WUoyugGvpqzaUClxcbcIuBkFgBrDzo0NYNXicReNn%2BVXNsNAxEsESDehVQebUtnceG96%2FmcE9Yx3ugyS9KfjqF7c&X-Amz-Signature=18bb50c74dbce78079da5a6e215bca35f71a60baf73490e37c2f9a08c892b36e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJTHRQD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtopBi927QPClEtJTf8x4JAhXYmmU0vSaN7xbH5yJvmAiEAmPvFLjoWwj1iJPJJv6joCEHc7CXPVtvJPvcKc%2Fhb%2BQwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55Z32bORRA5ehC0yrcAwBYr%2BWP%2FoKEU8ftMp%2FcAlaM2hjfVZC9pVJ4epRnyXh9MJO9HlSPho7pGcWEIQNOpUj1ymqX6Ps5p9toZ9kzBH2s%2BqzRQ%2FHMTfz5JAk6BzKgbWAgo6VxBpN0DW6xrK1rOQZwzPO3OCMbWg9WhjipU70KP6iWL3mQQbSmh1IEdSFWUsl7T3VPyH4hRzNoSDSmVWvgrRGNU8ojYrJO8st1OTtJ5DiHf4xGL%2BOYeciKmQfqoS3xMR28uBVhiMKAFHgNBaL1YqhyEO9%2BaHMD%2F%2B5Qb2ZZQTPUBsLz46ZvBONvJz%2BW0ZQQ85BNicV8taMIWdPWKBlRu1lm%2FlYiIEqtlIvKmVHjbgEdyQlfbrhDPhgix5bFwHLchpic%2FHMTaog8V2mkkqJEdf%2Bj%2B2Smd1G7Hi0X7%2BU3xtOlWJ3Wjl18NgqOs%2Ff1lM3Yza7JO57NLt9eLwipQXJWYo9jS14OijU08pbWxKeWiMtayLa73%2FTmZA6JiNSX%2Fi%2Bbq8FenztWLE7xMEQkzIJ6pkowpzMCjps7KFDQWA%2B2qFE9WFHkC02PGwKsPOcUd3ZOFLB9xxUHmbnYzdcyxURXFD0L%2B1uapDwOl9ltSUCdhEztz5x3mUaf67t%2F9LJ3MLnCELe3mnONzh2DMP3hl8IGOqUBHTae6X%2BvmraykD83Fe1w4q0cbBXzJECArm5kL9tuv4tCG9Yw%2FeaJ%2FaKoZFd9pBwWk0v6ip2oCH8eBnPxLvgVG2x1ujY2EdLVVZOkgfIn8%2Beb70b9Qd1g%2FwdAdPDRjPS8M%2FM1WUoyugGvpqzaUClxcbcIuBkFgBrDzo0NYNXicReNn%2BVXNsNAxEsESDehVQebUtnceG96%2FmcE9Yx3ugyS9KfjqF7c&X-Amz-Signature=463dfd0187aa4ec55b7fdc5efd659f88ab51ae28522d37a63b7039a6cd82c604&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
