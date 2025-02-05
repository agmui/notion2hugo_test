---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Packages.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRPJQHX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFJ08XJLGxdLwH7Dqu8amESfSeQgAHHW%2BCZXy8Kzx9wTAiAtWytcghB2Xc%2FeIEvD9Fmm1K0iNSTna6%2FYReXnndg7kSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMSkgQks4GHoZy%2FUSoKtwDrfh16Si1Kb2U9hg9%2BHHGsaKP7NOTCEGOAtuRHSaH698yrLAyv57QBpB3xI1Z0rgRkWStI2l7934I%2FKhiNx8LjQRjAkL65kE9Iy3pU%2ByhaeKEeXJYlfqWAy0l%2BVYvs1NPNVfVqpXl2ZecBElMZjBUHf4lnvtAAHGC%2B4D9Qt2nJVBhQJUuU%2FRRnvfBi29ufcmBqbV%2FsJuoFYNsun6JVwqEPe9CpbJs99k2DOyLqxkuhk6QoMxOKW8G5gV3QTgf4FitTYC3Aat2JIYG%2BJVZQhdPtnZ8ABfoAMW2lPeiFDLwYSGdfpLyy5J5h%2FUwCIiKpbJQsgigq9K9C43ZBZFfWQjntYzuspZCWAKyjtiutnLeUS9xyeyC0QX5Z6ptU73o54gCVnKRsuNtLsbmDMyeV1McrPiEbllYl9Z2DuteingdsEcF1aHZH9pCtd2QrOh0LXzdx80nDpxXKNJwfh%2FOiggRFWTuZUjXv0lheiVLo7WYX9SW2X%2FV9oEOwUhLAstgWj8cUAAo2bpf4cTo9QhfFSvC457HIbbMZYXLKUnWKFxVCTmnMKSmtio3rFjFbhANEP5A8XUWX77OOGS%2FAZBBhrRWVefbHhu0kTOYkRirwzVr4XWGtgg1Ah1hUHJom5Qwvs%2BKvQY6pgGiZpGUHM10j2WwKiMHBUpmP1MYKtYjNsdrWaOdM9o9tYieroooFaYyXeK1CxbG5AOnniXtlkZB%2B8ZzKBk4rR%2BIqdk6jzqP5KSL3lgVo5uJQhrzXMxqtyEVO7651s75OXnErTzTwUeCwNdNPSKtnLXA8R268wkczxig2PxAG07Obm8RvAFbge0S4euX%2FFE1UTnB9Seme3SD1IZu4kEWVXo1LC%2BTA1W6&X-Amz-Signature=d5df9015242c2f1867adfb92aa1190c6b111bbc31839571df19da863210fbcc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRPJQHX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFJ08XJLGxdLwH7Dqu8amESfSeQgAHHW%2BCZXy8Kzx9wTAiAtWytcghB2Xc%2FeIEvD9Fmm1K0iNSTna6%2FYReXnndg7kSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMSkgQks4GHoZy%2FUSoKtwDrfh16Si1Kb2U9hg9%2BHHGsaKP7NOTCEGOAtuRHSaH698yrLAyv57QBpB3xI1Z0rgRkWStI2l7934I%2FKhiNx8LjQRjAkL65kE9Iy3pU%2ByhaeKEeXJYlfqWAy0l%2BVYvs1NPNVfVqpXl2ZecBElMZjBUHf4lnvtAAHGC%2B4D9Qt2nJVBhQJUuU%2FRRnvfBi29ufcmBqbV%2FsJuoFYNsun6JVwqEPe9CpbJs99k2DOyLqxkuhk6QoMxOKW8G5gV3QTgf4FitTYC3Aat2JIYG%2BJVZQhdPtnZ8ABfoAMW2lPeiFDLwYSGdfpLyy5J5h%2FUwCIiKpbJQsgigq9K9C43ZBZFfWQjntYzuspZCWAKyjtiutnLeUS9xyeyC0QX5Z6ptU73o54gCVnKRsuNtLsbmDMyeV1McrPiEbllYl9Z2DuteingdsEcF1aHZH9pCtd2QrOh0LXzdx80nDpxXKNJwfh%2FOiggRFWTuZUjXv0lheiVLo7WYX9SW2X%2FV9oEOwUhLAstgWj8cUAAo2bpf4cTo9QhfFSvC457HIbbMZYXLKUnWKFxVCTmnMKSmtio3rFjFbhANEP5A8XUWX77OOGS%2FAZBBhrRWVefbHhu0kTOYkRirwzVr4XWGtgg1Ah1hUHJom5Qwvs%2BKvQY6pgGiZpGUHM10j2WwKiMHBUpmP1MYKtYjNsdrWaOdM9o9tYieroooFaYyXeK1CxbG5AOnniXtlkZB%2B8ZzKBk4rR%2BIqdk6jzqP5KSL3lgVo5uJQhrzXMxqtyEVO7651s75OXnErTzTwUeCwNdNPSKtnLXA8R268wkczxig2PxAG07Obm8RvAFbge0S4euX%2FFE1UTnB9Seme3SD1IZu4kEWVXo1LC%2BTA1W6&X-Amz-Signature=02ffb9e5703313f3995f085952277d09b81ea5d93fee5d9d753cb34666d5e574&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRPJQHX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFJ08XJLGxdLwH7Dqu8amESfSeQgAHHW%2BCZXy8Kzx9wTAiAtWytcghB2Xc%2FeIEvD9Fmm1K0iNSTna6%2FYReXnndg7kSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMSkgQks4GHoZy%2FUSoKtwDrfh16Si1Kb2U9hg9%2BHHGsaKP7NOTCEGOAtuRHSaH698yrLAyv57QBpB3xI1Z0rgRkWStI2l7934I%2FKhiNx8LjQRjAkL65kE9Iy3pU%2ByhaeKEeXJYlfqWAy0l%2BVYvs1NPNVfVqpXl2ZecBElMZjBUHf4lnvtAAHGC%2B4D9Qt2nJVBhQJUuU%2FRRnvfBi29ufcmBqbV%2FsJuoFYNsun6JVwqEPe9CpbJs99k2DOyLqxkuhk6QoMxOKW8G5gV3QTgf4FitTYC3Aat2JIYG%2BJVZQhdPtnZ8ABfoAMW2lPeiFDLwYSGdfpLyy5J5h%2FUwCIiKpbJQsgigq9K9C43ZBZFfWQjntYzuspZCWAKyjtiutnLeUS9xyeyC0QX5Z6ptU73o54gCVnKRsuNtLsbmDMyeV1McrPiEbllYl9Z2DuteingdsEcF1aHZH9pCtd2QrOh0LXzdx80nDpxXKNJwfh%2FOiggRFWTuZUjXv0lheiVLo7WYX9SW2X%2FV9oEOwUhLAstgWj8cUAAo2bpf4cTo9QhfFSvC457HIbbMZYXLKUnWKFxVCTmnMKSmtio3rFjFbhANEP5A8XUWX77OOGS%2FAZBBhrRWVefbHhu0kTOYkRirwzVr4XWGtgg1Ah1hUHJom5Qwvs%2BKvQY6pgGiZpGUHM10j2WwKiMHBUpmP1MYKtYjNsdrWaOdM9o9tYieroooFaYyXeK1CxbG5AOnniXtlkZB%2B8ZzKBk4rR%2BIqdk6jzqP5KSL3lgVo5uJQhrzXMxqtyEVO7651s75OXnErTzTwUeCwNdNPSKtnLXA8R268wkczxig2PxAG07Obm8RvAFbge0S4euX%2FFE1UTnB9Seme3SD1IZu4kEWVXo1LC%2BTA1W6&X-Amz-Signature=532dd9b7c6ab601dc11595d6e4d7a446c8a6f5aabf387ba8be945d4dc1e26caf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRPJQHX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFJ08XJLGxdLwH7Dqu8amESfSeQgAHHW%2BCZXy8Kzx9wTAiAtWytcghB2Xc%2FeIEvD9Fmm1K0iNSTna6%2FYReXnndg7kSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMSkgQks4GHoZy%2FUSoKtwDrfh16Si1Kb2U9hg9%2BHHGsaKP7NOTCEGOAtuRHSaH698yrLAyv57QBpB3xI1Z0rgRkWStI2l7934I%2FKhiNx8LjQRjAkL65kE9Iy3pU%2ByhaeKEeXJYlfqWAy0l%2BVYvs1NPNVfVqpXl2ZecBElMZjBUHf4lnvtAAHGC%2B4D9Qt2nJVBhQJUuU%2FRRnvfBi29ufcmBqbV%2FsJuoFYNsun6JVwqEPe9CpbJs99k2DOyLqxkuhk6QoMxOKW8G5gV3QTgf4FitTYC3Aat2JIYG%2BJVZQhdPtnZ8ABfoAMW2lPeiFDLwYSGdfpLyy5J5h%2FUwCIiKpbJQsgigq9K9C43ZBZFfWQjntYzuspZCWAKyjtiutnLeUS9xyeyC0QX5Z6ptU73o54gCVnKRsuNtLsbmDMyeV1McrPiEbllYl9Z2DuteingdsEcF1aHZH9pCtd2QrOh0LXzdx80nDpxXKNJwfh%2FOiggRFWTuZUjXv0lheiVLo7WYX9SW2X%2FV9oEOwUhLAstgWj8cUAAo2bpf4cTo9QhfFSvC457HIbbMZYXLKUnWKFxVCTmnMKSmtio3rFjFbhANEP5A8XUWX77OOGS%2FAZBBhrRWVefbHhu0kTOYkRirwzVr4XWGtgg1Ah1hUHJom5Qwvs%2BKvQY6pgGiZpGUHM10j2WwKiMHBUpmP1MYKtYjNsdrWaOdM9o9tYieroooFaYyXeK1CxbG5AOnniXtlkZB%2B8ZzKBk4rR%2BIqdk6jzqP5KSL3lgVo5uJQhrzXMxqtyEVO7651s75OXnErTzTwUeCwNdNPSKtnLXA8R268wkczxig2PxAG07Obm8RvAFbge0S4euX%2FFE1UTnB9Seme3SD1IZu4kEWVXo1LC%2BTA1W6&X-Amz-Signature=0b15ba0cdbb20923230f7a0cdd808581ba09197f06481a10ce947cb298ba38ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRPJQHX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFJ08XJLGxdLwH7Dqu8amESfSeQgAHHW%2BCZXy8Kzx9wTAiAtWytcghB2Xc%2FeIEvD9Fmm1K0iNSTna6%2FYReXnndg7kSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMSkgQks4GHoZy%2FUSoKtwDrfh16Si1Kb2U9hg9%2BHHGsaKP7NOTCEGOAtuRHSaH698yrLAyv57QBpB3xI1Z0rgRkWStI2l7934I%2FKhiNx8LjQRjAkL65kE9Iy3pU%2ByhaeKEeXJYlfqWAy0l%2BVYvs1NPNVfVqpXl2ZecBElMZjBUHf4lnvtAAHGC%2B4D9Qt2nJVBhQJUuU%2FRRnvfBi29ufcmBqbV%2FsJuoFYNsun6JVwqEPe9CpbJs99k2DOyLqxkuhk6QoMxOKW8G5gV3QTgf4FitTYC3Aat2JIYG%2BJVZQhdPtnZ8ABfoAMW2lPeiFDLwYSGdfpLyy5J5h%2FUwCIiKpbJQsgigq9K9C43ZBZFfWQjntYzuspZCWAKyjtiutnLeUS9xyeyC0QX5Z6ptU73o54gCVnKRsuNtLsbmDMyeV1McrPiEbllYl9Z2DuteingdsEcF1aHZH9pCtd2QrOh0LXzdx80nDpxXKNJwfh%2FOiggRFWTuZUjXv0lheiVLo7WYX9SW2X%2FV9oEOwUhLAstgWj8cUAAo2bpf4cTo9QhfFSvC457HIbbMZYXLKUnWKFxVCTmnMKSmtio3rFjFbhANEP5A8XUWX77OOGS%2FAZBBhrRWVefbHhu0kTOYkRirwzVr4XWGtgg1Ah1hUHJom5Qwvs%2BKvQY6pgGiZpGUHM10j2WwKiMHBUpmP1MYKtYjNsdrWaOdM9o9tYieroooFaYyXeK1CxbG5AOnniXtlkZB%2B8ZzKBk4rR%2BIqdk6jzqP5KSL3lgVo5uJQhrzXMxqtyEVO7651s75OXnErTzTwUeCwNdNPSKtnLXA8R268wkczxig2PxAG07Obm8RvAFbge0S4euX%2FFE1UTnB9Seme3SD1IZu4kEWVXo1LC%2BTA1W6&X-Amz-Signature=47058107467a699b56a8964bd34a48fb8017e5b692d46208813b992c2943fe18&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRPJQHX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFJ08XJLGxdLwH7Dqu8amESfSeQgAHHW%2BCZXy8Kzx9wTAiAtWytcghB2Xc%2FeIEvD9Fmm1K0iNSTna6%2FYReXnndg7kSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMSkgQks4GHoZy%2FUSoKtwDrfh16Si1Kb2U9hg9%2BHHGsaKP7NOTCEGOAtuRHSaH698yrLAyv57QBpB3xI1Z0rgRkWStI2l7934I%2FKhiNx8LjQRjAkL65kE9Iy3pU%2ByhaeKEeXJYlfqWAy0l%2BVYvs1NPNVfVqpXl2ZecBElMZjBUHf4lnvtAAHGC%2B4D9Qt2nJVBhQJUuU%2FRRnvfBi29ufcmBqbV%2FsJuoFYNsun6JVwqEPe9CpbJs99k2DOyLqxkuhk6QoMxOKW8G5gV3QTgf4FitTYC3Aat2JIYG%2BJVZQhdPtnZ8ABfoAMW2lPeiFDLwYSGdfpLyy5J5h%2FUwCIiKpbJQsgigq9K9C43ZBZFfWQjntYzuspZCWAKyjtiutnLeUS9xyeyC0QX5Z6ptU73o54gCVnKRsuNtLsbmDMyeV1McrPiEbllYl9Z2DuteingdsEcF1aHZH9pCtd2QrOh0LXzdx80nDpxXKNJwfh%2FOiggRFWTuZUjXv0lheiVLo7WYX9SW2X%2FV9oEOwUhLAstgWj8cUAAo2bpf4cTo9QhfFSvC457HIbbMZYXLKUnWKFxVCTmnMKSmtio3rFjFbhANEP5A8XUWX77OOGS%2FAZBBhrRWVefbHhu0kTOYkRirwzVr4XWGtgg1Ah1hUHJom5Qwvs%2BKvQY6pgGiZpGUHM10j2WwKiMHBUpmP1MYKtYjNsdrWaOdM9o9tYieroooFaYyXeK1CxbG5AOnniXtlkZB%2B8ZzKBk4rR%2BIqdk6jzqP5KSL3lgVo5uJQhrzXMxqtyEVO7651s75OXnErTzTwUeCwNdNPSKtnLXA8R268wkczxig2PxAG07Obm8RvAFbge0S4euX%2FFE1UTnB9Seme3SD1IZu4kEWVXo1LC%2BTA1W6&X-Amz-Signature=d7f25b03212a58c8b6428d123f02808be64c92170e24f9e89a059d291d26c424&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRPJQHX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFJ08XJLGxdLwH7Dqu8amESfSeQgAHHW%2BCZXy8Kzx9wTAiAtWytcghB2Xc%2FeIEvD9Fmm1K0iNSTna6%2FYReXnndg7kSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMSkgQks4GHoZy%2FUSoKtwDrfh16Si1Kb2U9hg9%2BHHGsaKP7NOTCEGOAtuRHSaH698yrLAyv57QBpB3xI1Z0rgRkWStI2l7934I%2FKhiNx8LjQRjAkL65kE9Iy3pU%2ByhaeKEeXJYlfqWAy0l%2BVYvs1NPNVfVqpXl2ZecBElMZjBUHf4lnvtAAHGC%2B4D9Qt2nJVBhQJUuU%2FRRnvfBi29ufcmBqbV%2FsJuoFYNsun6JVwqEPe9CpbJs99k2DOyLqxkuhk6QoMxOKW8G5gV3QTgf4FitTYC3Aat2JIYG%2BJVZQhdPtnZ8ABfoAMW2lPeiFDLwYSGdfpLyy5J5h%2FUwCIiKpbJQsgigq9K9C43ZBZFfWQjntYzuspZCWAKyjtiutnLeUS9xyeyC0QX5Z6ptU73o54gCVnKRsuNtLsbmDMyeV1McrPiEbllYl9Z2DuteingdsEcF1aHZH9pCtd2QrOh0LXzdx80nDpxXKNJwfh%2FOiggRFWTuZUjXv0lheiVLo7WYX9SW2X%2FV9oEOwUhLAstgWj8cUAAo2bpf4cTo9QhfFSvC457HIbbMZYXLKUnWKFxVCTmnMKSmtio3rFjFbhANEP5A8XUWX77OOGS%2FAZBBhrRWVefbHhu0kTOYkRirwzVr4XWGtgg1Ah1hUHJom5Qwvs%2BKvQY6pgGiZpGUHM10j2WwKiMHBUpmP1MYKtYjNsdrWaOdM9o9tYieroooFaYyXeK1CxbG5AOnniXtlkZB%2B8ZzKBk4rR%2BIqdk6jzqP5KSL3lgVo5uJQhrzXMxqtyEVO7651s75OXnErTzTwUeCwNdNPSKtnLXA8R268wkczxig2PxAG07Obm8RvAFbge0S4euX%2FFE1UTnB9Seme3SD1IZu4kEWVXo1LC%2BTA1W6&X-Amz-Signature=322262ebcf37f4d80f440ed7c84c4763de760fcf1dd5219f93a1b5bc60ab0dba&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
