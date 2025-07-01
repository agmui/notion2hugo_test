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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQQUCYT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCslGBLEH01jfVV67j%2FXlM3kTtkzzrzkSVtptmX6DKBKwIhALRGV%2F9KYNJNoBwFmzk9pTcP480p4F9xsPGm0R3Ne5mzKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSbWyCMuAgRAKMboq3ANSk8fSGf4oOhhoeW%2FwC%2FRr1nqd1B%2F0hNa%2FHjPi42Byn%2Bjj6CwB3kAo1r68c61lVE2zn08RwTIS0MPaVh9T10speGUvuYhd6UVc0vl08cN0a7VPdhCdB662KoI2N35HmTH4GPz54UHRtEqJPtgcIlx67q88pcwGJz8UswQZiU7TqdxgCqwtjLZrG615KvX%2Fjj69NGFEE7mjt5nZ1TB5cc7oftXO3toTNyZG0nJ87YGv46Bu%2FAh2OVddGiU%2FXteVS%2BEWJWOGQPPix16HqqyrbZ3nBXOf7BoJJ5ru9RS%2BtD%2B0tZUw0iVJYaZNcvYItu4ZKgp2Ht4mLr4%2BTcdqPyNhlCisAGxoJpbxV8Jh6CzhXj%2FqMitVaiOjRCavM65a34Q0AtcIQmDlW9HPzetUfXgdos1iySwUO42lRJhL3NRGnSoMueP7mF57WS5fDWDsYDoPa0e8wfu%2FnzQoNpXnyi24mK%2Bgs1R6S7xdDJr7Cnm9I%2Bw8kvfg4HXCbeR7HfQFgfmGqQqC6VozHCK9v0sm9UDoFAAjlg1fcCw%2FvaoaljsXImt5vNfVluoFRT5CgY7LJHUlNcU4F%2BYoNF20XE7zVq4GXepqMexCTVLeoCMlggtC9t3tiI8qn3In2i3KZpcWjTCFpY%2FDBjqkAVPdjCj%2BfFZMQ7VPj5q%2B8jPZ8M2g0cn7LFbWsCkQiZfocwVcVfVLRUACWhTh1mKgrdHiTktQGFuqbjsfq%2FtfKRwKR%2BMv1PL7NHHx5tllJqJSH6iuB3aJ5jOlOvDQU41vJy4gVFgUaEKFCm7Zj6cinxVl061mXgO43hN9CWQkiTgJTKEM3QJTtV4MF%2FgtBGQnm12Q6SCJdH3uq4EgHPi2WotxB%2Fcp&X-Amz-Signature=b409ed61963a35d1bf17a2d69bd996c214bd7b74cca51e3e5d07423530dfef7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQQUCYT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCslGBLEH01jfVV67j%2FXlM3kTtkzzrzkSVtptmX6DKBKwIhALRGV%2F9KYNJNoBwFmzk9pTcP480p4F9xsPGm0R3Ne5mzKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSbWyCMuAgRAKMboq3ANSk8fSGf4oOhhoeW%2FwC%2FRr1nqd1B%2F0hNa%2FHjPi42Byn%2Bjj6CwB3kAo1r68c61lVE2zn08RwTIS0MPaVh9T10speGUvuYhd6UVc0vl08cN0a7VPdhCdB662KoI2N35HmTH4GPz54UHRtEqJPtgcIlx67q88pcwGJz8UswQZiU7TqdxgCqwtjLZrG615KvX%2Fjj69NGFEE7mjt5nZ1TB5cc7oftXO3toTNyZG0nJ87YGv46Bu%2FAh2OVddGiU%2FXteVS%2BEWJWOGQPPix16HqqyrbZ3nBXOf7BoJJ5ru9RS%2BtD%2B0tZUw0iVJYaZNcvYItu4ZKgp2Ht4mLr4%2BTcdqPyNhlCisAGxoJpbxV8Jh6CzhXj%2FqMitVaiOjRCavM65a34Q0AtcIQmDlW9HPzetUfXgdos1iySwUO42lRJhL3NRGnSoMueP7mF57WS5fDWDsYDoPa0e8wfu%2FnzQoNpXnyi24mK%2Bgs1R6S7xdDJr7Cnm9I%2Bw8kvfg4HXCbeR7HfQFgfmGqQqC6VozHCK9v0sm9UDoFAAjlg1fcCw%2FvaoaljsXImt5vNfVluoFRT5CgY7LJHUlNcU4F%2BYoNF20XE7zVq4GXepqMexCTVLeoCMlggtC9t3tiI8qn3In2i3KZpcWjTCFpY%2FDBjqkAVPdjCj%2BfFZMQ7VPj5q%2B8jPZ8M2g0cn7LFbWsCkQiZfocwVcVfVLRUACWhTh1mKgrdHiTktQGFuqbjsfq%2FtfKRwKR%2BMv1PL7NHHx5tllJqJSH6iuB3aJ5jOlOvDQU41vJy4gVFgUaEKFCm7Zj6cinxVl061mXgO43hN9CWQkiTgJTKEM3QJTtV4MF%2FgtBGQnm12Q6SCJdH3uq4EgHPi2WotxB%2Fcp&X-Amz-Signature=40dccc68e69bb6ee1cff49d90205ab9887bbfab6069621ae7d477a4fa12a5217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQQUCYT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCslGBLEH01jfVV67j%2FXlM3kTtkzzrzkSVtptmX6DKBKwIhALRGV%2F9KYNJNoBwFmzk9pTcP480p4F9xsPGm0R3Ne5mzKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSbWyCMuAgRAKMboq3ANSk8fSGf4oOhhoeW%2FwC%2FRr1nqd1B%2F0hNa%2FHjPi42Byn%2Bjj6CwB3kAo1r68c61lVE2zn08RwTIS0MPaVh9T10speGUvuYhd6UVc0vl08cN0a7VPdhCdB662KoI2N35HmTH4GPz54UHRtEqJPtgcIlx67q88pcwGJz8UswQZiU7TqdxgCqwtjLZrG615KvX%2Fjj69NGFEE7mjt5nZ1TB5cc7oftXO3toTNyZG0nJ87YGv46Bu%2FAh2OVddGiU%2FXteVS%2BEWJWOGQPPix16HqqyrbZ3nBXOf7BoJJ5ru9RS%2BtD%2B0tZUw0iVJYaZNcvYItu4ZKgp2Ht4mLr4%2BTcdqPyNhlCisAGxoJpbxV8Jh6CzhXj%2FqMitVaiOjRCavM65a34Q0AtcIQmDlW9HPzetUfXgdos1iySwUO42lRJhL3NRGnSoMueP7mF57WS5fDWDsYDoPa0e8wfu%2FnzQoNpXnyi24mK%2Bgs1R6S7xdDJr7Cnm9I%2Bw8kvfg4HXCbeR7HfQFgfmGqQqC6VozHCK9v0sm9UDoFAAjlg1fcCw%2FvaoaljsXImt5vNfVluoFRT5CgY7LJHUlNcU4F%2BYoNF20XE7zVq4GXepqMexCTVLeoCMlggtC9t3tiI8qn3In2i3KZpcWjTCFpY%2FDBjqkAVPdjCj%2BfFZMQ7VPj5q%2B8jPZ8M2g0cn7LFbWsCkQiZfocwVcVfVLRUACWhTh1mKgrdHiTktQGFuqbjsfq%2FtfKRwKR%2BMv1PL7NHHx5tllJqJSH6iuB3aJ5jOlOvDQU41vJy4gVFgUaEKFCm7Zj6cinxVl061mXgO43hN9CWQkiTgJTKEM3QJTtV4MF%2FgtBGQnm12Q6SCJdH3uq4EgHPi2WotxB%2Fcp&X-Amz-Signature=35250ead7384687a3af6c684d79a5ee600fb12cb567a67448a6fa27d76026851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQQUCYT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCslGBLEH01jfVV67j%2FXlM3kTtkzzrzkSVtptmX6DKBKwIhALRGV%2F9KYNJNoBwFmzk9pTcP480p4F9xsPGm0R3Ne5mzKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSbWyCMuAgRAKMboq3ANSk8fSGf4oOhhoeW%2FwC%2FRr1nqd1B%2F0hNa%2FHjPi42Byn%2Bjj6CwB3kAo1r68c61lVE2zn08RwTIS0MPaVh9T10speGUvuYhd6UVc0vl08cN0a7VPdhCdB662KoI2N35HmTH4GPz54UHRtEqJPtgcIlx67q88pcwGJz8UswQZiU7TqdxgCqwtjLZrG615KvX%2Fjj69NGFEE7mjt5nZ1TB5cc7oftXO3toTNyZG0nJ87YGv46Bu%2FAh2OVddGiU%2FXteVS%2BEWJWOGQPPix16HqqyrbZ3nBXOf7BoJJ5ru9RS%2BtD%2B0tZUw0iVJYaZNcvYItu4ZKgp2Ht4mLr4%2BTcdqPyNhlCisAGxoJpbxV8Jh6CzhXj%2FqMitVaiOjRCavM65a34Q0AtcIQmDlW9HPzetUfXgdos1iySwUO42lRJhL3NRGnSoMueP7mF57WS5fDWDsYDoPa0e8wfu%2FnzQoNpXnyi24mK%2Bgs1R6S7xdDJr7Cnm9I%2Bw8kvfg4HXCbeR7HfQFgfmGqQqC6VozHCK9v0sm9UDoFAAjlg1fcCw%2FvaoaljsXImt5vNfVluoFRT5CgY7LJHUlNcU4F%2BYoNF20XE7zVq4GXepqMexCTVLeoCMlggtC9t3tiI8qn3In2i3KZpcWjTCFpY%2FDBjqkAVPdjCj%2BfFZMQ7VPj5q%2B8jPZ8M2g0cn7LFbWsCkQiZfocwVcVfVLRUACWhTh1mKgrdHiTktQGFuqbjsfq%2FtfKRwKR%2BMv1PL7NHHx5tllJqJSH6iuB3aJ5jOlOvDQU41vJy4gVFgUaEKFCm7Zj6cinxVl061mXgO43hN9CWQkiTgJTKEM3QJTtV4MF%2FgtBGQnm12Q6SCJdH3uq4EgHPi2WotxB%2Fcp&X-Amz-Signature=29ab6375590a76cf3dbdaffb5a73cb519bd7902774b6998ebb12d184f6c06c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQQUCYT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCslGBLEH01jfVV67j%2FXlM3kTtkzzrzkSVtptmX6DKBKwIhALRGV%2F9KYNJNoBwFmzk9pTcP480p4F9xsPGm0R3Ne5mzKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSbWyCMuAgRAKMboq3ANSk8fSGf4oOhhoeW%2FwC%2FRr1nqd1B%2F0hNa%2FHjPi42Byn%2Bjj6CwB3kAo1r68c61lVE2zn08RwTIS0MPaVh9T10speGUvuYhd6UVc0vl08cN0a7VPdhCdB662KoI2N35HmTH4GPz54UHRtEqJPtgcIlx67q88pcwGJz8UswQZiU7TqdxgCqwtjLZrG615KvX%2Fjj69NGFEE7mjt5nZ1TB5cc7oftXO3toTNyZG0nJ87YGv46Bu%2FAh2OVddGiU%2FXteVS%2BEWJWOGQPPix16HqqyrbZ3nBXOf7BoJJ5ru9RS%2BtD%2B0tZUw0iVJYaZNcvYItu4ZKgp2Ht4mLr4%2BTcdqPyNhlCisAGxoJpbxV8Jh6CzhXj%2FqMitVaiOjRCavM65a34Q0AtcIQmDlW9HPzetUfXgdos1iySwUO42lRJhL3NRGnSoMueP7mF57WS5fDWDsYDoPa0e8wfu%2FnzQoNpXnyi24mK%2Bgs1R6S7xdDJr7Cnm9I%2Bw8kvfg4HXCbeR7HfQFgfmGqQqC6VozHCK9v0sm9UDoFAAjlg1fcCw%2FvaoaljsXImt5vNfVluoFRT5CgY7LJHUlNcU4F%2BYoNF20XE7zVq4GXepqMexCTVLeoCMlggtC9t3tiI8qn3In2i3KZpcWjTCFpY%2FDBjqkAVPdjCj%2BfFZMQ7VPj5q%2B8jPZ8M2g0cn7LFbWsCkQiZfocwVcVfVLRUACWhTh1mKgrdHiTktQGFuqbjsfq%2FtfKRwKR%2BMv1PL7NHHx5tllJqJSH6iuB3aJ5jOlOvDQU41vJy4gVFgUaEKFCm7Zj6cinxVl061mXgO43hN9CWQkiTgJTKEM3QJTtV4MF%2FgtBGQnm12Q6SCJdH3uq4EgHPi2WotxB%2Fcp&X-Amz-Signature=13a3635241487d840dbeca73f55d7eab9222f8f44da1c108cabfca448b7e8b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQQUCYT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCslGBLEH01jfVV67j%2FXlM3kTtkzzrzkSVtptmX6DKBKwIhALRGV%2F9KYNJNoBwFmzk9pTcP480p4F9xsPGm0R3Ne5mzKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSbWyCMuAgRAKMboq3ANSk8fSGf4oOhhoeW%2FwC%2FRr1nqd1B%2F0hNa%2FHjPi42Byn%2Bjj6CwB3kAo1r68c61lVE2zn08RwTIS0MPaVh9T10speGUvuYhd6UVc0vl08cN0a7VPdhCdB662KoI2N35HmTH4GPz54UHRtEqJPtgcIlx67q88pcwGJz8UswQZiU7TqdxgCqwtjLZrG615KvX%2Fjj69NGFEE7mjt5nZ1TB5cc7oftXO3toTNyZG0nJ87YGv46Bu%2FAh2OVddGiU%2FXteVS%2BEWJWOGQPPix16HqqyrbZ3nBXOf7BoJJ5ru9RS%2BtD%2B0tZUw0iVJYaZNcvYItu4ZKgp2Ht4mLr4%2BTcdqPyNhlCisAGxoJpbxV8Jh6CzhXj%2FqMitVaiOjRCavM65a34Q0AtcIQmDlW9HPzetUfXgdos1iySwUO42lRJhL3NRGnSoMueP7mF57WS5fDWDsYDoPa0e8wfu%2FnzQoNpXnyi24mK%2Bgs1R6S7xdDJr7Cnm9I%2Bw8kvfg4HXCbeR7HfQFgfmGqQqC6VozHCK9v0sm9UDoFAAjlg1fcCw%2FvaoaljsXImt5vNfVluoFRT5CgY7LJHUlNcU4F%2BYoNF20XE7zVq4GXepqMexCTVLeoCMlggtC9t3tiI8qn3In2i3KZpcWjTCFpY%2FDBjqkAVPdjCj%2BfFZMQ7VPj5q%2B8jPZ8M2g0cn7LFbWsCkQiZfocwVcVfVLRUACWhTh1mKgrdHiTktQGFuqbjsfq%2FtfKRwKR%2BMv1PL7NHHx5tllJqJSH6iuB3aJ5jOlOvDQU41vJy4gVFgUaEKFCm7Zj6cinxVl061mXgO43hN9CWQkiTgJTKEM3QJTtV4MF%2FgtBGQnm12Q6SCJdH3uq4EgHPi2WotxB%2Fcp&X-Amz-Signature=495a7ec2e9db5c0c4e877dc73d82f9150083553cd43007fde909aff47ed8e0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQQUCYT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCslGBLEH01jfVV67j%2FXlM3kTtkzzrzkSVtptmX6DKBKwIhALRGV%2F9KYNJNoBwFmzk9pTcP480p4F9xsPGm0R3Ne5mzKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSbWyCMuAgRAKMboq3ANSk8fSGf4oOhhoeW%2FwC%2FRr1nqd1B%2F0hNa%2FHjPi42Byn%2Bjj6CwB3kAo1r68c61lVE2zn08RwTIS0MPaVh9T10speGUvuYhd6UVc0vl08cN0a7VPdhCdB662KoI2N35HmTH4GPz54UHRtEqJPtgcIlx67q88pcwGJz8UswQZiU7TqdxgCqwtjLZrG615KvX%2Fjj69NGFEE7mjt5nZ1TB5cc7oftXO3toTNyZG0nJ87YGv46Bu%2FAh2OVddGiU%2FXteVS%2BEWJWOGQPPix16HqqyrbZ3nBXOf7BoJJ5ru9RS%2BtD%2B0tZUw0iVJYaZNcvYItu4ZKgp2Ht4mLr4%2BTcdqPyNhlCisAGxoJpbxV8Jh6CzhXj%2FqMitVaiOjRCavM65a34Q0AtcIQmDlW9HPzetUfXgdos1iySwUO42lRJhL3NRGnSoMueP7mF57WS5fDWDsYDoPa0e8wfu%2FnzQoNpXnyi24mK%2Bgs1R6S7xdDJr7Cnm9I%2Bw8kvfg4HXCbeR7HfQFgfmGqQqC6VozHCK9v0sm9UDoFAAjlg1fcCw%2FvaoaljsXImt5vNfVluoFRT5CgY7LJHUlNcU4F%2BYoNF20XE7zVq4GXepqMexCTVLeoCMlggtC9t3tiI8qn3In2i3KZpcWjTCFpY%2FDBjqkAVPdjCj%2BfFZMQ7VPj5q%2B8jPZ8M2g0cn7LFbWsCkQiZfocwVcVfVLRUACWhTh1mKgrdHiTktQGFuqbjsfq%2FtfKRwKR%2BMv1PL7NHHx5tllJqJSH6iuB3aJ5jOlOvDQU41vJy4gVFgUaEKFCm7Zj6cinxVl061mXgO43hN9CWQkiTgJTKEM3QJTtV4MF%2FgtBGQnm12Q6SCJdH3uq4EgHPi2WotxB%2Fcp&X-Amz-Signature=205d74ead0cc5ee9449323b9e39e6367ba6997b984eadb829acddeda45abdcab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
