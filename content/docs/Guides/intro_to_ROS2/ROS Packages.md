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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V76UHRHL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFNhijCVVLo%2FtLBowo2wWhKRUzI%2BGBLbORixqYpIVtZhAiAflip6DEP1IJ2BmaJiTONNYxG1mcxLc2tymbcPzzslGir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM148SoLPvkcuSU0REKtwDfF5wYJUky52BpKQ%2FrmJiWkmYjcfjqdJw9iIlUUnxWQMkC%2F9SZHlgU8cxr6HZ5UN%2BidLTI6CaSPSo%2FsMhUlGHDRwZWGUu0ua8RBHYF8k5lDD5g11Qv2Cde7aS4MT9gjH%2BmJNYPB4DKcbEkyAt9hC%2BdBq4ghFJalZb7nzz1cmdkpWkzmaq3fx9aZeeZaNTk1KbCxDN%2Bc57AUoti9bdgwkHRe0OtdV%2BKV2abMqMhw2OGUDQ4G2KEOL8N7i3L2vnVzIBANzDLZYqArde5wAPK6aPXHPZiFpEdlOqDmGlpRyarQhRdNSraeIY3NCBI72vM1Kw9f5CsE%2BuuTNlI2jFx5zqIvy%2FVQg03tCYHT8E8ZqsvPK6C4ms6PcY2c%2FjfWzkYTiG%2FxZsB19i%2BoBmQMuBh%2FjTRD1Q9qBGQWfWKUhHev7eOMaPoYAjPNQFk3rhQHRQ2biMI9MpYXHWW2mEkUhCYfbypbWz0ilwOtOmy2q5dM0NqQtsQmTlOCsqLdeEeg5r584aN7RGDLxhWd%2FUpg0tZCjJ3ABtIPd5V%2BX8siLZ%2BKdBzmh1ZOHDe91hlG1pDyPai9RBHJe%2FzissqQAJlP2vrJIpTbPNJy4KvL2ueYm1KttDcvCwWl6SFsSBV5wKsXowg6m3vgY6pgGzn%2BNVq70JtMxMzgPeOJcbEH9NElM9lHKGULOkNx7m6V8YF%2FLz1chghF1T0GNEXIjd%2Bdis3vCngAR7DhBdyAf%2BaH2iniDs0ZXisrM7GhSh%2FfO4F83wpAZplqBpbordAuM6Bms06rKBUn18aERStdkW81Lp%2FWLm%2B4SC%2BIJIY6DUWWxUC%2BgtsBb%2BBDCq74ecdmjGy5mJwB8ltKGbMjYiuBO69mojHkXa&X-Amz-Signature=94b6618bfa5ca8d8927a0a7ae54acd25366785086f7933f8dc16a6f22f5c4009&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V76UHRHL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFNhijCVVLo%2FtLBowo2wWhKRUzI%2BGBLbORixqYpIVtZhAiAflip6DEP1IJ2BmaJiTONNYxG1mcxLc2tymbcPzzslGir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM148SoLPvkcuSU0REKtwDfF5wYJUky52BpKQ%2FrmJiWkmYjcfjqdJw9iIlUUnxWQMkC%2F9SZHlgU8cxr6HZ5UN%2BidLTI6CaSPSo%2FsMhUlGHDRwZWGUu0ua8RBHYF8k5lDD5g11Qv2Cde7aS4MT9gjH%2BmJNYPB4DKcbEkyAt9hC%2BdBq4ghFJalZb7nzz1cmdkpWkzmaq3fx9aZeeZaNTk1KbCxDN%2Bc57AUoti9bdgwkHRe0OtdV%2BKV2abMqMhw2OGUDQ4G2KEOL8N7i3L2vnVzIBANzDLZYqArde5wAPK6aPXHPZiFpEdlOqDmGlpRyarQhRdNSraeIY3NCBI72vM1Kw9f5CsE%2BuuTNlI2jFx5zqIvy%2FVQg03tCYHT8E8ZqsvPK6C4ms6PcY2c%2FjfWzkYTiG%2FxZsB19i%2BoBmQMuBh%2FjTRD1Q9qBGQWfWKUhHev7eOMaPoYAjPNQFk3rhQHRQ2biMI9MpYXHWW2mEkUhCYfbypbWz0ilwOtOmy2q5dM0NqQtsQmTlOCsqLdeEeg5r584aN7RGDLxhWd%2FUpg0tZCjJ3ABtIPd5V%2BX8siLZ%2BKdBzmh1ZOHDe91hlG1pDyPai9RBHJe%2FzissqQAJlP2vrJIpTbPNJy4KvL2ueYm1KttDcvCwWl6SFsSBV5wKsXowg6m3vgY6pgGzn%2BNVq70JtMxMzgPeOJcbEH9NElM9lHKGULOkNx7m6V8YF%2FLz1chghF1T0GNEXIjd%2Bdis3vCngAR7DhBdyAf%2BaH2iniDs0ZXisrM7GhSh%2FfO4F83wpAZplqBpbordAuM6Bms06rKBUn18aERStdkW81Lp%2FWLm%2B4SC%2BIJIY6DUWWxUC%2BgtsBb%2BBDCq74ecdmjGy5mJwB8ltKGbMjYiuBO69mojHkXa&X-Amz-Signature=d80a549515a2028d31eb0e32721c9d3a5de990730553f5b7ebb3be2a4a3fabb8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V76UHRHL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFNhijCVVLo%2FtLBowo2wWhKRUzI%2BGBLbORixqYpIVtZhAiAflip6DEP1IJ2BmaJiTONNYxG1mcxLc2tymbcPzzslGir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM148SoLPvkcuSU0REKtwDfF5wYJUky52BpKQ%2FrmJiWkmYjcfjqdJw9iIlUUnxWQMkC%2F9SZHlgU8cxr6HZ5UN%2BidLTI6CaSPSo%2FsMhUlGHDRwZWGUu0ua8RBHYF8k5lDD5g11Qv2Cde7aS4MT9gjH%2BmJNYPB4DKcbEkyAt9hC%2BdBq4ghFJalZb7nzz1cmdkpWkzmaq3fx9aZeeZaNTk1KbCxDN%2Bc57AUoti9bdgwkHRe0OtdV%2BKV2abMqMhw2OGUDQ4G2KEOL8N7i3L2vnVzIBANzDLZYqArde5wAPK6aPXHPZiFpEdlOqDmGlpRyarQhRdNSraeIY3NCBI72vM1Kw9f5CsE%2BuuTNlI2jFx5zqIvy%2FVQg03tCYHT8E8ZqsvPK6C4ms6PcY2c%2FjfWzkYTiG%2FxZsB19i%2BoBmQMuBh%2FjTRD1Q9qBGQWfWKUhHev7eOMaPoYAjPNQFk3rhQHRQ2biMI9MpYXHWW2mEkUhCYfbypbWz0ilwOtOmy2q5dM0NqQtsQmTlOCsqLdeEeg5r584aN7RGDLxhWd%2FUpg0tZCjJ3ABtIPd5V%2BX8siLZ%2BKdBzmh1ZOHDe91hlG1pDyPai9RBHJe%2FzissqQAJlP2vrJIpTbPNJy4KvL2ueYm1KttDcvCwWl6SFsSBV5wKsXowg6m3vgY6pgGzn%2BNVq70JtMxMzgPeOJcbEH9NElM9lHKGULOkNx7m6V8YF%2FLz1chghF1T0GNEXIjd%2Bdis3vCngAR7DhBdyAf%2BaH2iniDs0ZXisrM7GhSh%2FfO4F83wpAZplqBpbordAuM6Bms06rKBUn18aERStdkW81Lp%2FWLm%2B4SC%2BIJIY6DUWWxUC%2BgtsBb%2BBDCq74ecdmjGy5mJwB8ltKGbMjYiuBO69mojHkXa&X-Amz-Signature=dd2df9293ef82321d8616144c192b3b167cc843daf4e8577e853e6ccd42754c2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V76UHRHL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFNhijCVVLo%2FtLBowo2wWhKRUzI%2BGBLbORixqYpIVtZhAiAflip6DEP1IJ2BmaJiTONNYxG1mcxLc2tymbcPzzslGir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM148SoLPvkcuSU0REKtwDfF5wYJUky52BpKQ%2FrmJiWkmYjcfjqdJw9iIlUUnxWQMkC%2F9SZHlgU8cxr6HZ5UN%2BidLTI6CaSPSo%2FsMhUlGHDRwZWGUu0ua8RBHYF8k5lDD5g11Qv2Cde7aS4MT9gjH%2BmJNYPB4DKcbEkyAt9hC%2BdBq4ghFJalZb7nzz1cmdkpWkzmaq3fx9aZeeZaNTk1KbCxDN%2Bc57AUoti9bdgwkHRe0OtdV%2BKV2abMqMhw2OGUDQ4G2KEOL8N7i3L2vnVzIBANzDLZYqArde5wAPK6aPXHPZiFpEdlOqDmGlpRyarQhRdNSraeIY3NCBI72vM1Kw9f5CsE%2BuuTNlI2jFx5zqIvy%2FVQg03tCYHT8E8ZqsvPK6C4ms6PcY2c%2FjfWzkYTiG%2FxZsB19i%2BoBmQMuBh%2FjTRD1Q9qBGQWfWKUhHev7eOMaPoYAjPNQFk3rhQHRQ2biMI9MpYXHWW2mEkUhCYfbypbWz0ilwOtOmy2q5dM0NqQtsQmTlOCsqLdeEeg5r584aN7RGDLxhWd%2FUpg0tZCjJ3ABtIPd5V%2BX8siLZ%2BKdBzmh1ZOHDe91hlG1pDyPai9RBHJe%2FzissqQAJlP2vrJIpTbPNJy4KvL2ueYm1KttDcvCwWl6SFsSBV5wKsXowg6m3vgY6pgGzn%2BNVq70JtMxMzgPeOJcbEH9NElM9lHKGULOkNx7m6V8YF%2FLz1chghF1T0GNEXIjd%2Bdis3vCngAR7DhBdyAf%2BaH2iniDs0ZXisrM7GhSh%2FfO4F83wpAZplqBpbordAuM6Bms06rKBUn18aERStdkW81Lp%2FWLm%2B4SC%2BIJIY6DUWWxUC%2BgtsBb%2BBDCq74ecdmjGy5mJwB8ltKGbMjYiuBO69mojHkXa&X-Amz-Signature=212c1fd237b1c2cc0ce3cc535fed2f3a271d32b615d0eab08ff53d975d3484e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V76UHRHL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFNhijCVVLo%2FtLBowo2wWhKRUzI%2BGBLbORixqYpIVtZhAiAflip6DEP1IJ2BmaJiTONNYxG1mcxLc2tymbcPzzslGir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM148SoLPvkcuSU0REKtwDfF5wYJUky52BpKQ%2FrmJiWkmYjcfjqdJw9iIlUUnxWQMkC%2F9SZHlgU8cxr6HZ5UN%2BidLTI6CaSPSo%2FsMhUlGHDRwZWGUu0ua8RBHYF8k5lDD5g11Qv2Cde7aS4MT9gjH%2BmJNYPB4DKcbEkyAt9hC%2BdBq4ghFJalZb7nzz1cmdkpWkzmaq3fx9aZeeZaNTk1KbCxDN%2Bc57AUoti9bdgwkHRe0OtdV%2BKV2abMqMhw2OGUDQ4G2KEOL8N7i3L2vnVzIBANzDLZYqArde5wAPK6aPXHPZiFpEdlOqDmGlpRyarQhRdNSraeIY3NCBI72vM1Kw9f5CsE%2BuuTNlI2jFx5zqIvy%2FVQg03tCYHT8E8ZqsvPK6C4ms6PcY2c%2FjfWzkYTiG%2FxZsB19i%2BoBmQMuBh%2FjTRD1Q9qBGQWfWKUhHev7eOMaPoYAjPNQFk3rhQHRQ2biMI9MpYXHWW2mEkUhCYfbypbWz0ilwOtOmy2q5dM0NqQtsQmTlOCsqLdeEeg5r584aN7RGDLxhWd%2FUpg0tZCjJ3ABtIPd5V%2BX8siLZ%2BKdBzmh1ZOHDe91hlG1pDyPai9RBHJe%2FzissqQAJlP2vrJIpTbPNJy4KvL2ueYm1KttDcvCwWl6SFsSBV5wKsXowg6m3vgY6pgGzn%2BNVq70JtMxMzgPeOJcbEH9NElM9lHKGULOkNx7m6V8YF%2FLz1chghF1T0GNEXIjd%2Bdis3vCngAR7DhBdyAf%2BaH2iniDs0ZXisrM7GhSh%2FfO4F83wpAZplqBpbordAuM6Bms06rKBUn18aERStdkW81Lp%2FWLm%2B4SC%2BIJIY6DUWWxUC%2BgtsBb%2BBDCq74ecdmjGy5mJwB8ltKGbMjYiuBO69mojHkXa&X-Amz-Signature=8e953c848ea9c1fc6a94e5ce7d90c4fd5699ce5835ff4f8d43f83fbdadaea6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V76UHRHL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFNhijCVVLo%2FtLBowo2wWhKRUzI%2BGBLbORixqYpIVtZhAiAflip6DEP1IJ2BmaJiTONNYxG1mcxLc2tymbcPzzslGir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM148SoLPvkcuSU0REKtwDfF5wYJUky52BpKQ%2FrmJiWkmYjcfjqdJw9iIlUUnxWQMkC%2F9SZHlgU8cxr6HZ5UN%2BidLTI6CaSPSo%2FsMhUlGHDRwZWGUu0ua8RBHYF8k5lDD5g11Qv2Cde7aS4MT9gjH%2BmJNYPB4DKcbEkyAt9hC%2BdBq4ghFJalZb7nzz1cmdkpWkzmaq3fx9aZeeZaNTk1KbCxDN%2Bc57AUoti9bdgwkHRe0OtdV%2BKV2abMqMhw2OGUDQ4G2KEOL8N7i3L2vnVzIBANzDLZYqArde5wAPK6aPXHPZiFpEdlOqDmGlpRyarQhRdNSraeIY3NCBI72vM1Kw9f5CsE%2BuuTNlI2jFx5zqIvy%2FVQg03tCYHT8E8ZqsvPK6C4ms6PcY2c%2FjfWzkYTiG%2FxZsB19i%2BoBmQMuBh%2FjTRD1Q9qBGQWfWKUhHev7eOMaPoYAjPNQFk3rhQHRQ2biMI9MpYXHWW2mEkUhCYfbypbWz0ilwOtOmy2q5dM0NqQtsQmTlOCsqLdeEeg5r584aN7RGDLxhWd%2FUpg0tZCjJ3ABtIPd5V%2BX8siLZ%2BKdBzmh1ZOHDe91hlG1pDyPai9RBHJe%2FzissqQAJlP2vrJIpTbPNJy4KvL2ueYm1KttDcvCwWl6SFsSBV5wKsXowg6m3vgY6pgGzn%2BNVq70JtMxMzgPeOJcbEH9NElM9lHKGULOkNx7m6V8YF%2FLz1chghF1T0GNEXIjd%2Bdis3vCngAR7DhBdyAf%2BaH2iniDs0ZXisrM7GhSh%2FfO4F83wpAZplqBpbordAuM6Bms06rKBUn18aERStdkW81Lp%2FWLm%2B4SC%2BIJIY6DUWWxUC%2BgtsBb%2BBDCq74ecdmjGy5mJwB8ltKGbMjYiuBO69mojHkXa&X-Amz-Signature=1ec0470ac6d058e5f9362db52f8e5aaf592383eb4f40d20e6eff617f5b5a48e6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V76UHRHL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFNhijCVVLo%2FtLBowo2wWhKRUzI%2BGBLbORixqYpIVtZhAiAflip6DEP1IJ2BmaJiTONNYxG1mcxLc2tymbcPzzslGir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM148SoLPvkcuSU0REKtwDfF5wYJUky52BpKQ%2FrmJiWkmYjcfjqdJw9iIlUUnxWQMkC%2F9SZHlgU8cxr6HZ5UN%2BidLTI6CaSPSo%2FsMhUlGHDRwZWGUu0ua8RBHYF8k5lDD5g11Qv2Cde7aS4MT9gjH%2BmJNYPB4DKcbEkyAt9hC%2BdBq4ghFJalZb7nzz1cmdkpWkzmaq3fx9aZeeZaNTk1KbCxDN%2Bc57AUoti9bdgwkHRe0OtdV%2BKV2abMqMhw2OGUDQ4G2KEOL8N7i3L2vnVzIBANzDLZYqArde5wAPK6aPXHPZiFpEdlOqDmGlpRyarQhRdNSraeIY3NCBI72vM1Kw9f5CsE%2BuuTNlI2jFx5zqIvy%2FVQg03tCYHT8E8ZqsvPK6C4ms6PcY2c%2FjfWzkYTiG%2FxZsB19i%2BoBmQMuBh%2FjTRD1Q9qBGQWfWKUhHev7eOMaPoYAjPNQFk3rhQHRQ2biMI9MpYXHWW2mEkUhCYfbypbWz0ilwOtOmy2q5dM0NqQtsQmTlOCsqLdeEeg5r584aN7RGDLxhWd%2FUpg0tZCjJ3ABtIPd5V%2BX8siLZ%2BKdBzmh1ZOHDe91hlG1pDyPai9RBHJe%2FzissqQAJlP2vrJIpTbPNJy4KvL2ueYm1KttDcvCwWl6SFsSBV5wKsXowg6m3vgY6pgGzn%2BNVq70JtMxMzgPeOJcbEH9NElM9lHKGULOkNx7m6V8YF%2FLz1chghF1T0GNEXIjd%2Bdis3vCngAR7DhBdyAf%2BaH2iniDs0ZXisrM7GhSh%2FfO4F83wpAZplqBpbordAuM6Bms06rKBUn18aERStdkW81Lp%2FWLm%2B4SC%2BIJIY6DUWWxUC%2BgtsBb%2BBDCq74ecdmjGy5mJwB8ltKGbMjYiuBO69mojHkXa&X-Amz-Signature=520bded6b952003eda6c195019aa9b17aae64d5f82dcda1372a224ffa73b336c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
