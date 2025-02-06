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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIKVTOQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDGyOv7Se7C%2FRd5LW71XiyvilbKLbJPU2PJroOpobWR1AiEAhG4lpAyzkUp%2FKf1XQy0P%2FDD7uXGT3FN7q9arXZiu7m4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJooZtkoLkG3lsPFKircA1Ct4QGX9QwEbyMywvewnawzWaWUDvRCb%2F9RMKtx7ZvEbozcRuLE0jKzAHtsCOcXCRA0M6Dh3yE67RN38XG0Ew14tzZhxTTy%2BgacLaltyd%2Fi%2F8o3QyoMV56RHy%2BBfgXqMkrP6jtPa0aWRDARNrkKNTWiVofC2pHD1JtcEagUKoRHZjKgyiqlXFD%2BBz8M6HM%2ByG6beH9sr1dKUj2SNl3cvlA1t6JdvFXfvFD08vdXye8MNZnuJ81FlJBnvRyaGtdl9BzUAhK0dUr6%2F2qALYyE4UkUM7%2BMeAM3g%2BVEAizYYMQwCSDu2mwctu80qnQ7fHhe%2Bv5JIEiCqt582mX5qdcb0ReAfmiiTtWkt529RbnCniraWpMoZnqKHiMFpUrrzGo%2BqVhxnt%2B0hvZml%2BiW1REf4J5hKDgwBRS8oHHFLCXBp2gnZGyTsyrcYf23HWjpvAKas%2F7p0Tk2%2Bxde7cRw6kVRB5VGKNqpMMX2Al645u8mdFWbJ4yelcNJFMq6vK11bC5yLiee6Bh2ReZD9nQgCX5DS1VSYYlN6i%2FtckKvSWuVrWJkFMtunOzhT15O8pfZ1GGa6rZmA9g5Y2DiPAr1NqhWUjGs3jDILLeZd04FKjnwOvh9WSx%2FbtLcuc1hZa8tMPmbkb0GOqUBzMfN%2FZ5iLrUyVdBEvNfLd0m69EDpqXU92f5kKOkTaLzqtkJF8K5VsBB9MJAGciq43aKl%2Bjoeyc%2FkupPEAywY011BZo%2BCoiPYYGFLN4HfCL7pLIaMFEy6dQA5b%2FU%2BgMkCxfhGy2xOi6iNTK81mcnoOIIE2Cih3KVhrAk6zxZQa6%2FkeJZkFfHPSS6rsvm70kzWLVbGnyQbd1323GTq6HLNBOdGnfvL&X-Amz-Signature=077f8e3b91a2fb4936ff42ef221ebe3edf54e6980f07ce125c10604ae2458b25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIKVTOQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDGyOv7Se7C%2FRd5LW71XiyvilbKLbJPU2PJroOpobWR1AiEAhG4lpAyzkUp%2FKf1XQy0P%2FDD7uXGT3FN7q9arXZiu7m4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJooZtkoLkG3lsPFKircA1Ct4QGX9QwEbyMywvewnawzWaWUDvRCb%2F9RMKtx7ZvEbozcRuLE0jKzAHtsCOcXCRA0M6Dh3yE67RN38XG0Ew14tzZhxTTy%2BgacLaltyd%2Fi%2F8o3QyoMV56RHy%2BBfgXqMkrP6jtPa0aWRDARNrkKNTWiVofC2pHD1JtcEagUKoRHZjKgyiqlXFD%2BBz8M6HM%2ByG6beH9sr1dKUj2SNl3cvlA1t6JdvFXfvFD08vdXye8MNZnuJ81FlJBnvRyaGtdl9BzUAhK0dUr6%2F2qALYyE4UkUM7%2BMeAM3g%2BVEAizYYMQwCSDu2mwctu80qnQ7fHhe%2Bv5JIEiCqt582mX5qdcb0ReAfmiiTtWkt529RbnCniraWpMoZnqKHiMFpUrrzGo%2BqVhxnt%2B0hvZml%2BiW1REf4J5hKDgwBRS8oHHFLCXBp2gnZGyTsyrcYf23HWjpvAKas%2F7p0Tk2%2Bxde7cRw6kVRB5VGKNqpMMX2Al645u8mdFWbJ4yelcNJFMq6vK11bC5yLiee6Bh2ReZD9nQgCX5DS1VSYYlN6i%2FtckKvSWuVrWJkFMtunOzhT15O8pfZ1GGa6rZmA9g5Y2DiPAr1NqhWUjGs3jDILLeZd04FKjnwOvh9WSx%2FbtLcuc1hZa8tMPmbkb0GOqUBzMfN%2FZ5iLrUyVdBEvNfLd0m69EDpqXU92f5kKOkTaLzqtkJF8K5VsBB9MJAGciq43aKl%2Bjoeyc%2FkupPEAywY011BZo%2BCoiPYYGFLN4HfCL7pLIaMFEy6dQA5b%2FU%2BgMkCxfhGy2xOi6iNTK81mcnoOIIE2Cih3KVhrAk6zxZQa6%2FkeJZkFfHPSS6rsvm70kzWLVbGnyQbd1323GTq6HLNBOdGnfvL&X-Amz-Signature=9c8f0b79961094d3e66d2f6bba9d5b6c8b53017dcc12a23d21b1bb61974811fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIKVTOQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDGyOv7Se7C%2FRd5LW71XiyvilbKLbJPU2PJroOpobWR1AiEAhG4lpAyzkUp%2FKf1XQy0P%2FDD7uXGT3FN7q9arXZiu7m4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJooZtkoLkG3lsPFKircA1Ct4QGX9QwEbyMywvewnawzWaWUDvRCb%2F9RMKtx7ZvEbozcRuLE0jKzAHtsCOcXCRA0M6Dh3yE67RN38XG0Ew14tzZhxTTy%2BgacLaltyd%2Fi%2F8o3QyoMV56RHy%2BBfgXqMkrP6jtPa0aWRDARNrkKNTWiVofC2pHD1JtcEagUKoRHZjKgyiqlXFD%2BBz8M6HM%2ByG6beH9sr1dKUj2SNl3cvlA1t6JdvFXfvFD08vdXye8MNZnuJ81FlJBnvRyaGtdl9BzUAhK0dUr6%2F2qALYyE4UkUM7%2BMeAM3g%2BVEAizYYMQwCSDu2mwctu80qnQ7fHhe%2Bv5JIEiCqt582mX5qdcb0ReAfmiiTtWkt529RbnCniraWpMoZnqKHiMFpUrrzGo%2BqVhxnt%2B0hvZml%2BiW1REf4J5hKDgwBRS8oHHFLCXBp2gnZGyTsyrcYf23HWjpvAKas%2F7p0Tk2%2Bxde7cRw6kVRB5VGKNqpMMX2Al645u8mdFWbJ4yelcNJFMq6vK11bC5yLiee6Bh2ReZD9nQgCX5DS1VSYYlN6i%2FtckKvSWuVrWJkFMtunOzhT15O8pfZ1GGa6rZmA9g5Y2DiPAr1NqhWUjGs3jDILLeZd04FKjnwOvh9WSx%2FbtLcuc1hZa8tMPmbkb0GOqUBzMfN%2FZ5iLrUyVdBEvNfLd0m69EDpqXU92f5kKOkTaLzqtkJF8K5VsBB9MJAGciq43aKl%2Bjoeyc%2FkupPEAywY011BZo%2BCoiPYYGFLN4HfCL7pLIaMFEy6dQA5b%2FU%2BgMkCxfhGy2xOi6iNTK81mcnoOIIE2Cih3KVhrAk6zxZQa6%2FkeJZkFfHPSS6rsvm70kzWLVbGnyQbd1323GTq6HLNBOdGnfvL&X-Amz-Signature=ae5f13e97488ff81fb5130b215300d97aafbc93d68170b1a29e797d74cdefe55&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIKVTOQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDGyOv7Se7C%2FRd5LW71XiyvilbKLbJPU2PJroOpobWR1AiEAhG4lpAyzkUp%2FKf1XQy0P%2FDD7uXGT3FN7q9arXZiu7m4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJooZtkoLkG3lsPFKircA1Ct4QGX9QwEbyMywvewnawzWaWUDvRCb%2F9RMKtx7ZvEbozcRuLE0jKzAHtsCOcXCRA0M6Dh3yE67RN38XG0Ew14tzZhxTTy%2BgacLaltyd%2Fi%2F8o3QyoMV56RHy%2BBfgXqMkrP6jtPa0aWRDARNrkKNTWiVofC2pHD1JtcEagUKoRHZjKgyiqlXFD%2BBz8M6HM%2ByG6beH9sr1dKUj2SNl3cvlA1t6JdvFXfvFD08vdXye8MNZnuJ81FlJBnvRyaGtdl9BzUAhK0dUr6%2F2qALYyE4UkUM7%2BMeAM3g%2BVEAizYYMQwCSDu2mwctu80qnQ7fHhe%2Bv5JIEiCqt582mX5qdcb0ReAfmiiTtWkt529RbnCniraWpMoZnqKHiMFpUrrzGo%2BqVhxnt%2B0hvZml%2BiW1REf4J5hKDgwBRS8oHHFLCXBp2gnZGyTsyrcYf23HWjpvAKas%2F7p0Tk2%2Bxde7cRw6kVRB5VGKNqpMMX2Al645u8mdFWbJ4yelcNJFMq6vK11bC5yLiee6Bh2ReZD9nQgCX5DS1VSYYlN6i%2FtckKvSWuVrWJkFMtunOzhT15O8pfZ1GGa6rZmA9g5Y2DiPAr1NqhWUjGs3jDILLeZd04FKjnwOvh9WSx%2FbtLcuc1hZa8tMPmbkb0GOqUBzMfN%2FZ5iLrUyVdBEvNfLd0m69EDpqXU92f5kKOkTaLzqtkJF8K5VsBB9MJAGciq43aKl%2Bjoeyc%2FkupPEAywY011BZo%2BCoiPYYGFLN4HfCL7pLIaMFEy6dQA5b%2FU%2BgMkCxfhGy2xOi6iNTK81mcnoOIIE2Cih3KVhrAk6zxZQa6%2FkeJZkFfHPSS6rsvm70kzWLVbGnyQbd1323GTq6HLNBOdGnfvL&X-Amz-Signature=35a5c696e9380a5c373d89ce7dd78fae3b9f0f5374cc410bc757ef8dfa872635&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIKVTOQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDGyOv7Se7C%2FRd5LW71XiyvilbKLbJPU2PJroOpobWR1AiEAhG4lpAyzkUp%2FKf1XQy0P%2FDD7uXGT3FN7q9arXZiu7m4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJooZtkoLkG3lsPFKircA1Ct4QGX9QwEbyMywvewnawzWaWUDvRCb%2F9RMKtx7ZvEbozcRuLE0jKzAHtsCOcXCRA0M6Dh3yE67RN38XG0Ew14tzZhxTTy%2BgacLaltyd%2Fi%2F8o3QyoMV56RHy%2BBfgXqMkrP6jtPa0aWRDARNrkKNTWiVofC2pHD1JtcEagUKoRHZjKgyiqlXFD%2BBz8M6HM%2ByG6beH9sr1dKUj2SNl3cvlA1t6JdvFXfvFD08vdXye8MNZnuJ81FlJBnvRyaGtdl9BzUAhK0dUr6%2F2qALYyE4UkUM7%2BMeAM3g%2BVEAizYYMQwCSDu2mwctu80qnQ7fHhe%2Bv5JIEiCqt582mX5qdcb0ReAfmiiTtWkt529RbnCniraWpMoZnqKHiMFpUrrzGo%2BqVhxnt%2B0hvZml%2BiW1REf4J5hKDgwBRS8oHHFLCXBp2gnZGyTsyrcYf23HWjpvAKas%2F7p0Tk2%2Bxde7cRw6kVRB5VGKNqpMMX2Al645u8mdFWbJ4yelcNJFMq6vK11bC5yLiee6Bh2ReZD9nQgCX5DS1VSYYlN6i%2FtckKvSWuVrWJkFMtunOzhT15O8pfZ1GGa6rZmA9g5Y2DiPAr1NqhWUjGs3jDILLeZd04FKjnwOvh9WSx%2FbtLcuc1hZa8tMPmbkb0GOqUBzMfN%2FZ5iLrUyVdBEvNfLd0m69EDpqXU92f5kKOkTaLzqtkJF8K5VsBB9MJAGciq43aKl%2Bjoeyc%2FkupPEAywY011BZo%2BCoiPYYGFLN4HfCL7pLIaMFEy6dQA5b%2FU%2BgMkCxfhGy2xOi6iNTK81mcnoOIIE2Cih3KVhrAk6zxZQa6%2FkeJZkFfHPSS6rsvm70kzWLVbGnyQbd1323GTq6HLNBOdGnfvL&X-Amz-Signature=3a98b2cee72122da1efcc88a1bec98010eb7ec7fd4786f837b84097bfbfd1558&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIKVTOQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDGyOv7Se7C%2FRd5LW71XiyvilbKLbJPU2PJroOpobWR1AiEAhG4lpAyzkUp%2FKf1XQy0P%2FDD7uXGT3FN7q9arXZiu7m4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJooZtkoLkG3lsPFKircA1Ct4QGX9QwEbyMywvewnawzWaWUDvRCb%2F9RMKtx7ZvEbozcRuLE0jKzAHtsCOcXCRA0M6Dh3yE67RN38XG0Ew14tzZhxTTy%2BgacLaltyd%2Fi%2F8o3QyoMV56RHy%2BBfgXqMkrP6jtPa0aWRDARNrkKNTWiVofC2pHD1JtcEagUKoRHZjKgyiqlXFD%2BBz8M6HM%2ByG6beH9sr1dKUj2SNl3cvlA1t6JdvFXfvFD08vdXye8MNZnuJ81FlJBnvRyaGtdl9BzUAhK0dUr6%2F2qALYyE4UkUM7%2BMeAM3g%2BVEAizYYMQwCSDu2mwctu80qnQ7fHhe%2Bv5JIEiCqt582mX5qdcb0ReAfmiiTtWkt529RbnCniraWpMoZnqKHiMFpUrrzGo%2BqVhxnt%2B0hvZml%2BiW1REf4J5hKDgwBRS8oHHFLCXBp2gnZGyTsyrcYf23HWjpvAKas%2F7p0Tk2%2Bxde7cRw6kVRB5VGKNqpMMX2Al645u8mdFWbJ4yelcNJFMq6vK11bC5yLiee6Bh2ReZD9nQgCX5DS1VSYYlN6i%2FtckKvSWuVrWJkFMtunOzhT15O8pfZ1GGa6rZmA9g5Y2DiPAr1NqhWUjGs3jDILLeZd04FKjnwOvh9WSx%2FbtLcuc1hZa8tMPmbkb0GOqUBzMfN%2FZ5iLrUyVdBEvNfLd0m69EDpqXU92f5kKOkTaLzqtkJF8K5VsBB9MJAGciq43aKl%2Bjoeyc%2FkupPEAywY011BZo%2BCoiPYYGFLN4HfCL7pLIaMFEy6dQA5b%2FU%2BgMkCxfhGy2xOi6iNTK81mcnoOIIE2Cih3KVhrAk6zxZQa6%2FkeJZkFfHPSS6rsvm70kzWLVbGnyQbd1323GTq6HLNBOdGnfvL&X-Amz-Signature=52debb87a871deb63072b0080f4f926494af4c436de5d1df11e8a7f74222280b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIKVTOQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDGyOv7Se7C%2FRd5LW71XiyvilbKLbJPU2PJroOpobWR1AiEAhG4lpAyzkUp%2FKf1XQy0P%2FDD7uXGT3FN7q9arXZiu7m4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJooZtkoLkG3lsPFKircA1Ct4QGX9QwEbyMywvewnawzWaWUDvRCb%2F9RMKtx7ZvEbozcRuLE0jKzAHtsCOcXCRA0M6Dh3yE67RN38XG0Ew14tzZhxTTy%2BgacLaltyd%2Fi%2F8o3QyoMV56RHy%2BBfgXqMkrP6jtPa0aWRDARNrkKNTWiVofC2pHD1JtcEagUKoRHZjKgyiqlXFD%2BBz8M6HM%2ByG6beH9sr1dKUj2SNl3cvlA1t6JdvFXfvFD08vdXye8MNZnuJ81FlJBnvRyaGtdl9BzUAhK0dUr6%2F2qALYyE4UkUM7%2BMeAM3g%2BVEAizYYMQwCSDu2mwctu80qnQ7fHhe%2Bv5JIEiCqt582mX5qdcb0ReAfmiiTtWkt529RbnCniraWpMoZnqKHiMFpUrrzGo%2BqVhxnt%2B0hvZml%2BiW1REf4J5hKDgwBRS8oHHFLCXBp2gnZGyTsyrcYf23HWjpvAKas%2F7p0Tk2%2Bxde7cRw6kVRB5VGKNqpMMX2Al645u8mdFWbJ4yelcNJFMq6vK11bC5yLiee6Bh2ReZD9nQgCX5DS1VSYYlN6i%2FtckKvSWuVrWJkFMtunOzhT15O8pfZ1GGa6rZmA9g5Y2DiPAr1NqhWUjGs3jDILLeZd04FKjnwOvh9WSx%2FbtLcuc1hZa8tMPmbkb0GOqUBzMfN%2FZ5iLrUyVdBEvNfLd0m69EDpqXU92f5kKOkTaLzqtkJF8K5VsBB9MJAGciq43aKl%2Bjoeyc%2FkupPEAywY011BZo%2BCoiPYYGFLN4HfCL7pLIaMFEy6dQA5b%2FU%2BgMkCxfhGy2xOi6iNTK81mcnoOIIE2Cih3KVhrAk6zxZQa6%2FkeJZkFfHPSS6rsvm70kzWLVbGnyQbd1323GTq6HLNBOdGnfvL&X-Amz-Signature=f2b94d0a208fb54a7e477b1682b8133e9d67896b65317725425f65a4c0053749&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
