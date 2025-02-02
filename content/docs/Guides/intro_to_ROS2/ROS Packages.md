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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43RG7PC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK3bTfxWi5AF62S81pGPZJpE%2FnNseMkdqq7NdMMbAxAwIgYBgBkE%2FmJlPvDqarg0XKogNogEGWRb0dMfE6Ph%2FA8jIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE77bmcxf69el1Ci4CrcA5iEbhUqLd%2BziGOOMXGbJEYJT%2BWqGjl7FQAtQYzYP80BE9zbfz%2Bu9cc%2FE87PCgsxnjy8d6z4vuhbGeZdrpUK%2BRDMfjAaSGP5px8ODetHUpLvyKa4IOMrVh%2BRX9gpbBIPWb0nvz6oQzArkYFPUUnpS1osrxFwkORP8aDa9eXRDeFWnRYS2lh0RJ9YHDlcHPTvj2vfxJSxCGSlMVvJkgXMW1pGUA9cuKJ24lZsayPfeeNzopL0Zv5nk1%2F9Uw%2BZrmj2LSbs3XHlLxVvBa0XPquVV%2B%2BAY%2F0v7M77tk2q1%2FNjgmVeycyw6oBWbr3aRz4oZ748pfOeHJUn7joQDsSnMQEsc8MlRLbvfpjdYHLPHMokkPdiYDoz779VLpjOKZnd9YqhqqXDraQF9HCV7rNXIdrxcBmlNyYhU16s5zE36nu0d%2BttpWQc4c3mAIFlqi8thnLMYAKd%2BjZpQ745MkzXXj9R4YVTbznZy5v%2FUMD7TevybY%2B5TZ1EqzznxXYKBNV2%2BoBNYJu6%2Fzk6ulqf7xHzUD7c18x2jeILHN4KZX4fLGTkHkoFNYAzyiVkPdKQNTlD%2B3dTtdhHZgIXgsUnj%2Bd8XrZEB6irOKrMYxIq9U5PQZ4vLZaDEbnXBL%2F2l5YQ2voSMNW5%2FbwGOqUBvVHw90CDel2aeStpBnV0wteXd6xOFwcT1pX1tiL9Zv3plDHip0reCqod%2Fks7oFqJRZut9JSjDeQMnBR3IEMk4zxo%2BEefPiZvydvxprJYjJGUJXboCIghphC4dKrvHwhm0wc79XbhmELA6G11r67L5kl%2FUry5gHVnRYKgf0NZIkECGqZUIQdGOCrLYxaggCieStQxoOJ9HYh2rrcS%2FM3IMdjRWgmh&X-Amz-Signature=a533f7523a396d215bcb6d31676d593467dacf0a58f8da1c169b59cb27461f76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43RG7PC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK3bTfxWi5AF62S81pGPZJpE%2FnNseMkdqq7NdMMbAxAwIgYBgBkE%2FmJlPvDqarg0XKogNogEGWRb0dMfE6Ph%2FA8jIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE77bmcxf69el1Ci4CrcA5iEbhUqLd%2BziGOOMXGbJEYJT%2BWqGjl7FQAtQYzYP80BE9zbfz%2Bu9cc%2FE87PCgsxnjy8d6z4vuhbGeZdrpUK%2BRDMfjAaSGP5px8ODetHUpLvyKa4IOMrVh%2BRX9gpbBIPWb0nvz6oQzArkYFPUUnpS1osrxFwkORP8aDa9eXRDeFWnRYS2lh0RJ9YHDlcHPTvj2vfxJSxCGSlMVvJkgXMW1pGUA9cuKJ24lZsayPfeeNzopL0Zv5nk1%2F9Uw%2BZrmj2LSbs3XHlLxVvBa0XPquVV%2B%2BAY%2F0v7M77tk2q1%2FNjgmVeycyw6oBWbr3aRz4oZ748pfOeHJUn7joQDsSnMQEsc8MlRLbvfpjdYHLPHMokkPdiYDoz779VLpjOKZnd9YqhqqXDraQF9HCV7rNXIdrxcBmlNyYhU16s5zE36nu0d%2BttpWQc4c3mAIFlqi8thnLMYAKd%2BjZpQ745MkzXXj9R4YVTbznZy5v%2FUMD7TevybY%2B5TZ1EqzznxXYKBNV2%2BoBNYJu6%2Fzk6ulqf7xHzUD7c18x2jeILHN4KZX4fLGTkHkoFNYAzyiVkPdKQNTlD%2B3dTtdhHZgIXgsUnj%2Bd8XrZEB6irOKrMYxIq9U5PQZ4vLZaDEbnXBL%2F2l5YQ2voSMNW5%2FbwGOqUBvVHw90CDel2aeStpBnV0wteXd6xOFwcT1pX1tiL9Zv3plDHip0reCqod%2Fks7oFqJRZut9JSjDeQMnBR3IEMk4zxo%2BEefPiZvydvxprJYjJGUJXboCIghphC4dKrvHwhm0wc79XbhmELA6G11r67L5kl%2FUry5gHVnRYKgf0NZIkECGqZUIQdGOCrLYxaggCieStQxoOJ9HYh2rrcS%2FM3IMdjRWgmh&X-Amz-Signature=2deff41f9bcd784612a02c05a92d8b9f56b9368f6b6bc928f7490224b572e8c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43RG7PC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK3bTfxWi5AF62S81pGPZJpE%2FnNseMkdqq7NdMMbAxAwIgYBgBkE%2FmJlPvDqarg0XKogNogEGWRb0dMfE6Ph%2FA8jIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE77bmcxf69el1Ci4CrcA5iEbhUqLd%2BziGOOMXGbJEYJT%2BWqGjl7FQAtQYzYP80BE9zbfz%2Bu9cc%2FE87PCgsxnjy8d6z4vuhbGeZdrpUK%2BRDMfjAaSGP5px8ODetHUpLvyKa4IOMrVh%2BRX9gpbBIPWb0nvz6oQzArkYFPUUnpS1osrxFwkORP8aDa9eXRDeFWnRYS2lh0RJ9YHDlcHPTvj2vfxJSxCGSlMVvJkgXMW1pGUA9cuKJ24lZsayPfeeNzopL0Zv5nk1%2F9Uw%2BZrmj2LSbs3XHlLxVvBa0XPquVV%2B%2BAY%2F0v7M77tk2q1%2FNjgmVeycyw6oBWbr3aRz4oZ748pfOeHJUn7joQDsSnMQEsc8MlRLbvfpjdYHLPHMokkPdiYDoz779VLpjOKZnd9YqhqqXDraQF9HCV7rNXIdrxcBmlNyYhU16s5zE36nu0d%2BttpWQc4c3mAIFlqi8thnLMYAKd%2BjZpQ745MkzXXj9R4YVTbznZy5v%2FUMD7TevybY%2B5TZ1EqzznxXYKBNV2%2BoBNYJu6%2Fzk6ulqf7xHzUD7c18x2jeILHN4KZX4fLGTkHkoFNYAzyiVkPdKQNTlD%2B3dTtdhHZgIXgsUnj%2Bd8XrZEB6irOKrMYxIq9U5PQZ4vLZaDEbnXBL%2F2l5YQ2voSMNW5%2FbwGOqUBvVHw90CDel2aeStpBnV0wteXd6xOFwcT1pX1tiL9Zv3plDHip0reCqod%2Fks7oFqJRZut9JSjDeQMnBR3IEMk4zxo%2BEefPiZvydvxprJYjJGUJXboCIghphC4dKrvHwhm0wc79XbhmELA6G11r67L5kl%2FUry5gHVnRYKgf0NZIkECGqZUIQdGOCrLYxaggCieStQxoOJ9HYh2rrcS%2FM3IMdjRWgmh&X-Amz-Signature=4642ef5c172573367c088b964117b444103f81fd7d13b9726461cac6784b6769&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43RG7PC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK3bTfxWi5AF62S81pGPZJpE%2FnNseMkdqq7NdMMbAxAwIgYBgBkE%2FmJlPvDqarg0XKogNogEGWRb0dMfE6Ph%2FA8jIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE77bmcxf69el1Ci4CrcA5iEbhUqLd%2BziGOOMXGbJEYJT%2BWqGjl7FQAtQYzYP80BE9zbfz%2Bu9cc%2FE87PCgsxnjy8d6z4vuhbGeZdrpUK%2BRDMfjAaSGP5px8ODetHUpLvyKa4IOMrVh%2BRX9gpbBIPWb0nvz6oQzArkYFPUUnpS1osrxFwkORP8aDa9eXRDeFWnRYS2lh0RJ9YHDlcHPTvj2vfxJSxCGSlMVvJkgXMW1pGUA9cuKJ24lZsayPfeeNzopL0Zv5nk1%2F9Uw%2BZrmj2LSbs3XHlLxVvBa0XPquVV%2B%2BAY%2F0v7M77tk2q1%2FNjgmVeycyw6oBWbr3aRz4oZ748pfOeHJUn7joQDsSnMQEsc8MlRLbvfpjdYHLPHMokkPdiYDoz779VLpjOKZnd9YqhqqXDraQF9HCV7rNXIdrxcBmlNyYhU16s5zE36nu0d%2BttpWQc4c3mAIFlqi8thnLMYAKd%2BjZpQ745MkzXXj9R4YVTbznZy5v%2FUMD7TevybY%2B5TZ1EqzznxXYKBNV2%2BoBNYJu6%2Fzk6ulqf7xHzUD7c18x2jeILHN4KZX4fLGTkHkoFNYAzyiVkPdKQNTlD%2B3dTtdhHZgIXgsUnj%2Bd8XrZEB6irOKrMYxIq9U5PQZ4vLZaDEbnXBL%2F2l5YQ2voSMNW5%2FbwGOqUBvVHw90CDel2aeStpBnV0wteXd6xOFwcT1pX1tiL9Zv3plDHip0reCqod%2Fks7oFqJRZut9JSjDeQMnBR3IEMk4zxo%2BEefPiZvydvxprJYjJGUJXboCIghphC4dKrvHwhm0wc79XbhmELA6G11r67L5kl%2FUry5gHVnRYKgf0NZIkECGqZUIQdGOCrLYxaggCieStQxoOJ9HYh2rrcS%2FM3IMdjRWgmh&X-Amz-Signature=5446487385c4e4591873cebce6c775e585f73d49c1030632e478bbe5c765a83b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43RG7PC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK3bTfxWi5AF62S81pGPZJpE%2FnNseMkdqq7NdMMbAxAwIgYBgBkE%2FmJlPvDqarg0XKogNogEGWRb0dMfE6Ph%2FA8jIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE77bmcxf69el1Ci4CrcA5iEbhUqLd%2BziGOOMXGbJEYJT%2BWqGjl7FQAtQYzYP80BE9zbfz%2Bu9cc%2FE87PCgsxnjy8d6z4vuhbGeZdrpUK%2BRDMfjAaSGP5px8ODetHUpLvyKa4IOMrVh%2BRX9gpbBIPWb0nvz6oQzArkYFPUUnpS1osrxFwkORP8aDa9eXRDeFWnRYS2lh0RJ9YHDlcHPTvj2vfxJSxCGSlMVvJkgXMW1pGUA9cuKJ24lZsayPfeeNzopL0Zv5nk1%2F9Uw%2BZrmj2LSbs3XHlLxVvBa0XPquVV%2B%2BAY%2F0v7M77tk2q1%2FNjgmVeycyw6oBWbr3aRz4oZ748pfOeHJUn7joQDsSnMQEsc8MlRLbvfpjdYHLPHMokkPdiYDoz779VLpjOKZnd9YqhqqXDraQF9HCV7rNXIdrxcBmlNyYhU16s5zE36nu0d%2BttpWQc4c3mAIFlqi8thnLMYAKd%2BjZpQ745MkzXXj9R4YVTbznZy5v%2FUMD7TevybY%2B5TZ1EqzznxXYKBNV2%2BoBNYJu6%2Fzk6ulqf7xHzUD7c18x2jeILHN4KZX4fLGTkHkoFNYAzyiVkPdKQNTlD%2B3dTtdhHZgIXgsUnj%2Bd8XrZEB6irOKrMYxIq9U5PQZ4vLZaDEbnXBL%2F2l5YQ2voSMNW5%2FbwGOqUBvVHw90CDel2aeStpBnV0wteXd6xOFwcT1pX1tiL9Zv3plDHip0reCqod%2Fks7oFqJRZut9JSjDeQMnBR3IEMk4zxo%2BEefPiZvydvxprJYjJGUJXboCIghphC4dKrvHwhm0wc79XbhmELA6G11r67L5kl%2FUry5gHVnRYKgf0NZIkECGqZUIQdGOCrLYxaggCieStQxoOJ9HYh2rrcS%2FM3IMdjRWgmh&X-Amz-Signature=f9f76a77ce8857b16838aeec9b7802886dcf10604d6359b5f7a3961d9c0e1272&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43RG7PC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK3bTfxWi5AF62S81pGPZJpE%2FnNseMkdqq7NdMMbAxAwIgYBgBkE%2FmJlPvDqarg0XKogNogEGWRb0dMfE6Ph%2FA8jIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE77bmcxf69el1Ci4CrcA5iEbhUqLd%2BziGOOMXGbJEYJT%2BWqGjl7FQAtQYzYP80BE9zbfz%2Bu9cc%2FE87PCgsxnjy8d6z4vuhbGeZdrpUK%2BRDMfjAaSGP5px8ODetHUpLvyKa4IOMrVh%2BRX9gpbBIPWb0nvz6oQzArkYFPUUnpS1osrxFwkORP8aDa9eXRDeFWnRYS2lh0RJ9YHDlcHPTvj2vfxJSxCGSlMVvJkgXMW1pGUA9cuKJ24lZsayPfeeNzopL0Zv5nk1%2F9Uw%2BZrmj2LSbs3XHlLxVvBa0XPquVV%2B%2BAY%2F0v7M77tk2q1%2FNjgmVeycyw6oBWbr3aRz4oZ748pfOeHJUn7joQDsSnMQEsc8MlRLbvfpjdYHLPHMokkPdiYDoz779VLpjOKZnd9YqhqqXDraQF9HCV7rNXIdrxcBmlNyYhU16s5zE36nu0d%2BttpWQc4c3mAIFlqi8thnLMYAKd%2BjZpQ745MkzXXj9R4YVTbznZy5v%2FUMD7TevybY%2B5TZ1EqzznxXYKBNV2%2BoBNYJu6%2Fzk6ulqf7xHzUD7c18x2jeILHN4KZX4fLGTkHkoFNYAzyiVkPdKQNTlD%2B3dTtdhHZgIXgsUnj%2Bd8XrZEB6irOKrMYxIq9U5PQZ4vLZaDEbnXBL%2F2l5YQ2voSMNW5%2FbwGOqUBvVHw90CDel2aeStpBnV0wteXd6xOFwcT1pX1tiL9Zv3plDHip0reCqod%2Fks7oFqJRZut9JSjDeQMnBR3IEMk4zxo%2BEefPiZvydvxprJYjJGUJXboCIghphC4dKrvHwhm0wc79XbhmELA6G11r67L5kl%2FUry5gHVnRYKgf0NZIkECGqZUIQdGOCrLYxaggCieStQxoOJ9HYh2rrcS%2FM3IMdjRWgmh&X-Amz-Signature=4ad0815367875efc2fdb56ab73ae25b512f303b7417161ee995fff65cdc1f5a6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43RG7PC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK3bTfxWi5AF62S81pGPZJpE%2FnNseMkdqq7NdMMbAxAwIgYBgBkE%2FmJlPvDqarg0XKogNogEGWRb0dMfE6Ph%2FA8jIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE77bmcxf69el1Ci4CrcA5iEbhUqLd%2BziGOOMXGbJEYJT%2BWqGjl7FQAtQYzYP80BE9zbfz%2Bu9cc%2FE87PCgsxnjy8d6z4vuhbGeZdrpUK%2BRDMfjAaSGP5px8ODetHUpLvyKa4IOMrVh%2BRX9gpbBIPWb0nvz6oQzArkYFPUUnpS1osrxFwkORP8aDa9eXRDeFWnRYS2lh0RJ9YHDlcHPTvj2vfxJSxCGSlMVvJkgXMW1pGUA9cuKJ24lZsayPfeeNzopL0Zv5nk1%2F9Uw%2BZrmj2LSbs3XHlLxVvBa0XPquVV%2B%2BAY%2F0v7M77tk2q1%2FNjgmVeycyw6oBWbr3aRz4oZ748pfOeHJUn7joQDsSnMQEsc8MlRLbvfpjdYHLPHMokkPdiYDoz779VLpjOKZnd9YqhqqXDraQF9HCV7rNXIdrxcBmlNyYhU16s5zE36nu0d%2BttpWQc4c3mAIFlqi8thnLMYAKd%2BjZpQ745MkzXXj9R4YVTbznZy5v%2FUMD7TevybY%2B5TZ1EqzznxXYKBNV2%2BoBNYJu6%2Fzk6ulqf7xHzUD7c18x2jeILHN4KZX4fLGTkHkoFNYAzyiVkPdKQNTlD%2B3dTtdhHZgIXgsUnj%2Bd8XrZEB6irOKrMYxIq9U5PQZ4vLZaDEbnXBL%2F2l5YQ2voSMNW5%2FbwGOqUBvVHw90CDel2aeStpBnV0wteXd6xOFwcT1pX1tiL9Zv3plDHip0reCqod%2Fks7oFqJRZut9JSjDeQMnBR3IEMk4zxo%2BEefPiZvydvxprJYjJGUJXboCIghphC4dKrvHwhm0wc79XbhmELA6G11r67L5kl%2FUry5gHVnRYKgf0NZIkECGqZUIQdGOCrLYxaggCieStQxoOJ9HYh2rrcS%2FM3IMdjRWgmh&X-Amz-Signature=41db431783dc89a7c6dea1daac4614351a7de8aa8f71741a0e38b1a09e806979&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
