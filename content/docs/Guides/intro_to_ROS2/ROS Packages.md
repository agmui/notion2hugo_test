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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCPZQB5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC%2BbNDNUCWf5WJbcNghRJw%2FhFa6aMmDvaThGo4xBDcPaAIhAN51QGHcuUClLtZvaw3t9QzdaZbWjmtlx%2BOlJC%2ByyDnoKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ecY1Ygs8B4kWc%2Fkq3AMDRv%2FuTfcG98RrSYvAjuOsZBv3skvRZeFka%2FtUc6Ta%2FCa%2Fi2mSJHXxehhKX7os5wVbR%2BJXZR8UzI1lqlVz7pbM6Lq64x39o9kYA9ZhGq8CYWgFIHpNT06M2RxoRMFr4644nCNCxDBgrWRQ8MhbOMi2FE89hs%2FbUXT9kK6EDiBr%2BO706uV%2Bmo%2BHnFa6wQWYqitnIOIqsr2x71Te2aWY3mwPGL2EhR7VQ3fOzi2llF8NC7AxYQZ1esclJ8vbKoZruICSYgn54SrEtV%2BcK4U6vLeTU8B9XSQrnNvb6d5hzd%2BmPdvj012t2G55an5iDQVni0Rs9y1PChkM6z68VUnP6Lwl6RqoVfUsyKf%2BreY%2Fq5Xy9ue6A6uRD7LyHyBT7s%2FuvVs2MBXuJwH6ZwjhE8Un5Vsvof%2FjArjW9DD3PZVC%2B9iv7g6yZwIToxtFrkWnbhPP00hDMtx7YrbtYwE7dJGa9NJzdKiY%2FUOJI78eUIggv3jJCtjU77Eop6F5VpE%2F1C7qjYSxQsPkdzy%2Fv2ZjUemjPYaDes%2FtFtsECC%2FV25gYKnDb%2BpcVwLv38glWcoogPWY3fB4LTsroVwt5e4WKozJ%2B6rZ%2B9eaDZeluH5Bb1sJ7rudiQYPpFcxfTsTscqgblDDNkMrABjqkAe%2Brny17xvrsQR3fKjzjRHD%2FOTpCICPNgChPvK9s7xgsP72op3dKJvxfQBKVLcyBl2L9rlafNoi0Uckwxcb0%2BY2ddH91gXwuA6VccrsfvGbYcINWDodHQ46E%2FTjsmIGcMiwiIGYzVU1VMVh6BPa6ZPGHmxfmeL9QZpkgK%2FLWaILj4Z3%2FBvOjXxtRMqe5MRwIIc9XWXSZVYdwCA34%2Bhz2v5rgNRCW&X-Amz-Signature=1392d09a5346979a84ef43d7c936ef06cb50b58cea64b1698476b8d961d9cb71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCPZQB5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC%2BbNDNUCWf5WJbcNghRJw%2FhFa6aMmDvaThGo4xBDcPaAIhAN51QGHcuUClLtZvaw3t9QzdaZbWjmtlx%2BOlJC%2ByyDnoKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ecY1Ygs8B4kWc%2Fkq3AMDRv%2FuTfcG98RrSYvAjuOsZBv3skvRZeFka%2FtUc6Ta%2FCa%2Fi2mSJHXxehhKX7os5wVbR%2BJXZR8UzI1lqlVz7pbM6Lq64x39o9kYA9ZhGq8CYWgFIHpNT06M2RxoRMFr4644nCNCxDBgrWRQ8MhbOMi2FE89hs%2FbUXT9kK6EDiBr%2BO706uV%2Bmo%2BHnFa6wQWYqitnIOIqsr2x71Te2aWY3mwPGL2EhR7VQ3fOzi2llF8NC7AxYQZ1esclJ8vbKoZruICSYgn54SrEtV%2BcK4U6vLeTU8B9XSQrnNvb6d5hzd%2BmPdvj012t2G55an5iDQVni0Rs9y1PChkM6z68VUnP6Lwl6RqoVfUsyKf%2BreY%2Fq5Xy9ue6A6uRD7LyHyBT7s%2FuvVs2MBXuJwH6ZwjhE8Un5Vsvof%2FjArjW9DD3PZVC%2B9iv7g6yZwIToxtFrkWnbhPP00hDMtx7YrbtYwE7dJGa9NJzdKiY%2FUOJI78eUIggv3jJCtjU77Eop6F5VpE%2F1C7qjYSxQsPkdzy%2Fv2ZjUemjPYaDes%2FtFtsECC%2FV25gYKnDb%2BpcVwLv38glWcoogPWY3fB4LTsroVwt5e4WKozJ%2B6rZ%2B9eaDZeluH5Bb1sJ7rudiQYPpFcxfTsTscqgblDDNkMrABjqkAe%2Brny17xvrsQR3fKjzjRHD%2FOTpCICPNgChPvK9s7xgsP72op3dKJvxfQBKVLcyBl2L9rlafNoi0Uckwxcb0%2BY2ddH91gXwuA6VccrsfvGbYcINWDodHQ46E%2FTjsmIGcMiwiIGYzVU1VMVh6BPa6ZPGHmxfmeL9QZpkgK%2FLWaILj4Z3%2FBvOjXxtRMqe5MRwIIc9XWXSZVYdwCA34%2Bhz2v5rgNRCW&X-Amz-Signature=3a1f7876376b490cb63ed3784c001e2b4070785bc28f25a87484d9317604578d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCPZQB5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC%2BbNDNUCWf5WJbcNghRJw%2FhFa6aMmDvaThGo4xBDcPaAIhAN51QGHcuUClLtZvaw3t9QzdaZbWjmtlx%2BOlJC%2ByyDnoKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ecY1Ygs8B4kWc%2Fkq3AMDRv%2FuTfcG98RrSYvAjuOsZBv3skvRZeFka%2FtUc6Ta%2FCa%2Fi2mSJHXxehhKX7os5wVbR%2BJXZR8UzI1lqlVz7pbM6Lq64x39o9kYA9ZhGq8CYWgFIHpNT06M2RxoRMFr4644nCNCxDBgrWRQ8MhbOMi2FE89hs%2FbUXT9kK6EDiBr%2BO706uV%2Bmo%2BHnFa6wQWYqitnIOIqsr2x71Te2aWY3mwPGL2EhR7VQ3fOzi2llF8NC7AxYQZ1esclJ8vbKoZruICSYgn54SrEtV%2BcK4U6vLeTU8B9XSQrnNvb6d5hzd%2BmPdvj012t2G55an5iDQVni0Rs9y1PChkM6z68VUnP6Lwl6RqoVfUsyKf%2BreY%2Fq5Xy9ue6A6uRD7LyHyBT7s%2FuvVs2MBXuJwH6ZwjhE8Un5Vsvof%2FjArjW9DD3PZVC%2B9iv7g6yZwIToxtFrkWnbhPP00hDMtx7YrbtYwE7dJGa9NJzdKiY%2FUOJI78eUIggv3jJCtjU77Eop6F5VpE%2F1C7qjYSxQsPkdzy%2Fv2ZjUemjPYaDes%2FtFtsECC%2FV25gYKnDb%2BpcVwLv38glWcoogPWY3fB4LTsroVwt5e4WKozJ%2B6rZ%2B9eaDZeluH5Bb1sJ7rudiQYPpFcxfTsTscqgblDDNkMrABjqkAe%2Brny17xvrsQR3fKjzjRHD%2FOTpCICPNgChPvK9s7xgsP72op3dKJvxfQBKVLcyBl2L9rlafNoi0Uckwxcb0%2BY2ddH91gXwuA6VccrsfvGbYcINWDodHQ46E%2FTjsmIGcMiwiIGYzVU1VMVh6BPa6ZPGHmxfmeL9QZpkgK%2FLWaILj4Z3%2FBvOjXxtRMqe5MRwIIc9XWXSZVYdwCA34%2Bhz2v5rgNRCW&X-Amz-Signature=bc4dae9e513f3469d715a9e75a5e7171eaaa9e87e446cc3025345a15e167f457&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCPZQB5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC%2BbNDNUCWf5WJbcNghRJw%2FhFa6aMmDvaThGo4xBDcPaAIhAN51QGHcuUClLtZvaw3t9QzdaZbWjmtlx%2BOlJC%2ByyDnoKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ecY1Ygs8B4kWc%2Fkq3AMDRv%2FuTfcG98RrSYvAjuOsZBv3skvRZeFka%2FtUc6Ta%2FCa%2Fi2mSJHXxehhKX7os5wVbR%2BJXZR8UzI1lqlVz7pbM6Lq64x39o9kYA9ZhGq8CYWgFIHpNT06M2RxoRMFr4644nCNCxDBgrWRQ8MhbOMi2FE89hs%2FbUXT9kK6EDiBr%2BO706uV%2Bmo%2BHnFa6wQWYqitnIOIqsr2x71Te2aWY3mwPGL2EhR7VQ3fOzi2llF8NC7AxYQZ1esclJ8vbKoZruICSYgn54SrEtV%2BcK4U6vLeTU8B9XSQrnNvb6d5hzd%2BmPdvj012t2G55an5iDQVni0Rs9y1PChkM6z68VUnP6Lwl6RqoVfUsyKf%2BreY%2Fq5Xy9ue6A6uRD7LyHyBT7s%2FuvVs2MBXuJwH6ZwjhE8Un5Vsvof%2FjArjW9DD3PZVC%2B9iv7g6yZwIToxtFrkWnbhPP00hDMtx7YrbtYwE7dJGa9NJzdKiY%2FUOJI78eUIggv3jJCtjU77Eop6F5VpE%2F1C7qjYSxQsPkdzy%2Fv2ZjUemjPYaDes%2FtFtsECC%2FV25gYKnDb%2BpcVwLv38glWcoogPWY3fB4LTsroVwt5e4WKozJ%2B6rZ%2B9eaDZeluH5Bb1sJ7rudiQYPpFcxfTsTscqgblDDNkMrABjqkAe%2Brny17xvrsQR3fKjzjRHD%2FOTpCICPNgChPvK9s7xgsP72op3dKJvxfQBKVLcyBl2L9rlafNoi0Uckwxcb0%2BY2ddH91gXwuA6VccrsfvGbYcINWDodHQ46E%2FTjsmIGcMiwiIGYzVU1VMVh6BPa6ZPGHmxfmeL9QZpkgK%2FLWaILj4Z3%2FBvOjXxtRMqe5MRwIIc9XWXSZVYdwCA34%2Bhz2v5rgNRCW&X-Amz-Signature=11ea095433bb048ab5180472f95106df0b796795d05be72acf552cf3a54c18a5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCPZQB5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC%2BbNDNUCWf5WJbcNghRJw%2FhFa6aMmDvaThGo4xBDcPaAIhAN51QGHcuUClLtZvaw3t9QzdaZbWjmtlx%2BOlJC%2ByyDnoKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ecY1Ygs8B4kWc%2Fkq3AMDRv%2FuTfcG98RrSYvAjuOsZBv3skvRZeFka%2FtUc6Ta%2FCa%2Fi2mSJHXxehhKX7os5wVbR%2BJXZR8UzI1lqlVz7pbM6Lq64x39o9kYA9ZhGq8CYWgFIHpNT06M2RxoRMFr4644nCNCxDBgrWRQ8MhbOMi2FE89hs%2FbUXT9kK6EDiBr%2BO706uV%2Bmo%2BHnFa6wQWYqitnIOIqsr2x71Te2aWY3mwPGL2EhR7VQ3fOzi2llF8NC7AxYQZ1esclJ8vbKoZruICSYgn54SrEtV%2BcK4U6vLeTU8B9XSQrnNvb6d5hzd%2BmPdvj012t2G55an5iDQVni0Rs9y1PChkM6z68VUnP6Lwl6RqoVfUsyKf%2BreY%2Fq5Xy9ue6A6uRD7LyHyBT7s%2FuvVs2MBXuJwH6ZwjhE8Un5Vsvof%2FjArjW9DD3PZVC%2B9iv7g6yZwIToxtFrkWnbhPP00hDMtx7YrbtYwE7dJGa9NJzdKiY%2FUOJI78eUIggv3jJCtjU77Eop6F5VpE%2F1C7qjYSxQsPkdzy%2Fv2ZjUemjPYaDes%2FtFtsECC%2FV25gYKnDb%2BpcVwLv38glWcoogPWY3fB4LTsroVwt5e4WKozJ%2B6rZ%2B9eaDZeluH5Bb1sJ7rudiQYPpFcxfTsTscqgblDDNkMrABjqkAe%2Brny17xvrsQR3fKjzjRHD%2FOTpCICPNgChPvK9s7xgsP72op3dKJvxfQBKVLcyBl2L9rlafNoi0Uckwxcb0%2BY2ddH91gXwuA6VccrsfvGbYcINWDodHQ46E%2FTjsmIGcMiwiIGYzVU1VMVh6BPa6ZPGHmxfmeL9QZpkgK%2FLWaILj4Z3%2FBvOjXxtRMqe5MRwIIc9XWXSZVYdwCA34%2Bhz2v5rgNRCW&X-Amz-Signature=318594f0472b09b01ccbcdb039a0b217cca7d4c88ff99c2ed2fe1d34d176fd86&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCPZQB5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC%2BbNDNUCWf5WJbcNghRJw%2FhFa6aMmDvaThGo4xBDcPaAIhAN51QGHcuUClLtZvaw3t9QzdaZbWjmtlx%2BOlJC%2ByyDnoKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ecY1Ygs8B4kWc%2Fkq3AMDRv%2FuTfcG98RrSYvAjuOsZBv3skvRZeFka%2FtUc6Ta%2FCa%2Fi2mSJHXxehhKX7os5wVbR%2BJXZR8UzI1lqlVz7pbM6Lq64x39o9kYA9ZhGq8CYWgFIHpNT06M2RxoRMFr4644nCNCxDBgrWRQ8MhbOMi2FE89hs%2FbUXT9kK6EDiBr%2BO706uV%2Bmo%2BHnFa6wQWYqitnIOIqsr2x71Te2aWY3mwPGL2EhR7VQ3fOzi2llF8NC7AxYQZ1esclJ8vbKoZruICSYgn54SrEtV%2BcK4U6vLeTU8B9XSQrnNvb6d5hzd%2BmPdvj012t2G55an5iDQVni0Rs9y1PChkM6z68VUnP6Lwl6RqoVfUsyKf%2BreY%2Fq5Xy9ue6A6uRD7LyHyBT7s%2FuvVs2MBXuJwH6ZwjhE8Un5Vsvof%2FjArjW9DD3PZVC%2B9iv7g6yZwIToxtFrkWnbhPP00hDMtx7YrbtYwE7dJGa9NJzdKiY%2FUOJI78eUIggv3jJCtjU77Eop6F5VpE%2F1C7qjYSxQsPkdzy%2Fv2ZjUemjPYaDes%2FtFtsECC%2FV25gYKnDb%2BpcVwLv38glWcoogPWY3fB4LTsroVwt5e4WKozJ%2B6rZ%2B9eaDZeluH5Bb1sJ7rudiQYPpFcxfTsTscqgblDDNkMrABjqkAe%2Brny17xvrsQR3fKjzjRHD%2FOTpCICPNgChPvK9s7xgsP72op3dKJvxfQBKVLcyBl2L9rlafNoi0Uckwxcb0%2BY2ddH91gXwuA6VccrsfvGbYcINWDodHQ46E%2FTjsmIGcMiwiIGYzVU1VMVh6BPa6ZPGHmxfmeL9QZpkgK%2FLWaILj4Z3%2FBvOjXxtRMqe5MRwIIc9XWXSZVYdwCA34%2Bhz2v5rgNRCW&X-Amz-Signature=4b338451d0cb06e6a998b32a320e43a69af02523d668691098dc4399c5ac99f5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCPZQB5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC%2BbNDNUCWf5WJbcNghRJw%2FhFa6aMmDvaThGo4xBDcPaAIhAN51QGHcuUClLtZvaw3t9QzdaZbWjmtlx%2BOlJC%2ByyDnoKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ecY1Ygs8B4kWc%2Fkq3AMDRv%2FuTfcG98RrSYvAjuOsZBv3skvRZeFka%2FtUc6Ta%2FCa%2Fi2mSJHXxehhKX7os5wVbR%2BJXZR8UzI1lqlVz7pbM6Lq64x39o9kYA9ZhGq8CYWgFIHpNT06M2RxoRMFr4644nCNCxDBgrWRQ8MhbOMi2FE89hs%2FbUXT9kK6EDiBr%2BO706uV%2Bmo%2BHnFa6wQWYqitnIOIqsr2x71Te2aWY3mwPGL2EhR7VQ3fOzi2llF8NC7AxYQZ1esclJ8vbKoZruICSYgn54SrEtV%2BcK4U6vLeTU8B9XSQrnNvb6d5hzd%2BmPdvj012t2G55an5iDQVni0Rs9y1PChkM6z68VUnP6Lwl6RqoVfUsyKf%2BreY%2Fq5Xy9ue6A6uRD7LyHyBT7s%2FuvVs2MBXuJwH6ZwjhE8Un5Vsvof%2FjArjW9DD3PZVC%2B9iv7g6yZwIToxtFrkWnbhPP00hDMtx7YrbtYwE7dJGa9NJzdKiY%2FUOJI78eUIggv3jJCtjU77Eop6F5VpE%2F1C7qjYSxQsPkdzy%2Fv2ZjUemjPYaDes%2FtFtsECC%2FV25gYKnDb%2BpcVwLv38glWcoogPWY3fB4LTsroVwt5e4WKozJ%2B6rZ%2B9eaDZeluH5Bb1sJ7rudiQYPpFcxfTsTscqgblDDNkMrABjqkAe%2Brny17xvrsQR3fKjzjRHD%2FOTpCICPNgChPvK9s7xgsP72op3dKJvxfQBKVLcyBl2L9rlafNoi0Uckwxcb0%2BY2ddH91gXwuA6VccrsfvGbYcINWDodHQ46E%2FTjsmIGcMiwiIGYzVU1VMVh6BPa6ZPGHmxfmeL9QZpkgK%2FLWaILj4Z3%2FBvOjXxtRMqe5MRwIIc9XWXSZVYdwCA34%2Bhz2v5rgNRCW&X-Amz-Signature=9c18fcf27426f9b211698bbfa4791101b228573b91dc6fe874d22af5bd6b7d2e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
