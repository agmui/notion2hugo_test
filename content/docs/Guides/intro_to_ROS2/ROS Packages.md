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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7T647AO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHaHn0fglfaU99lAf2ckoc2GREXM1k02%2Bvv23kLVYShJAiA6E3bdYv3lFxGTvh1%2B3vBA8A0AthOW%2BJ4%2FsbaOeYiJeSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvg%2B6ctvaUqoQMm5MKtwDx%2Bod0pqXjE9JE9BFUctGODyGSe3uwrql17YAD1dIB4k3WpFmY6F8wfpLqhaDvl5MUk77SyOByx9yQ3%2BDSkIy2mCU0lznh%2FmSnLPRTSVyvLSRtOCKXqQ%2Fcya%2BLJtukTY3HRxscGjPxP6Rc0RDJB7ympz86Q1T6AxHe572h8ZIcqvRo2wgLnXTULjZylnX1H9c79A0tguk6Xtff8baOJV9A%2BHelbgpkeVOTJfVwDleGJRmD1%2BwAurL3boDpxciwzikPL0cvKueZTR9dbVIatKquRPM%2B79K6vNMu48uxicjVNjEo9bvxaF8oTzBNy6Ea1qP2zEsRA0CHZgFlKqz6U%2Bfe0tchkUzGu101QZDRgdo00SpS%2BhO7c%2F9W1%2BJ1pSSvOEqF%2Fz7z4NUEghkiID1gWxyNqjruO0llcti4A2UK14JvJeB2t3TgdopTN2OzJxy%2FuEUFtjtQH3Zof9TZNZGTGexDc63l%2FKJi8C7eueG2PgbfR4wtEkMLFPwmJOz8l6mxydCdtD6h6eH%2BwRRJXFBV2jiFgbFgpxyHCtl8AIQcbG5r%2BeefBZLashDAUvnk6VQDVi9ZhP1Nyqydiynoc%2FbHz%2F4mTB%2BkepGOHNoMDJAqYnDq3EIB5%2F%2BGmYd4BD0DIQw%2B9%2FwwQY6pgFPJroVeE1jk9TsBJEpe6Qp9AsTgWGz8hF2CnJonfuJ9ocUzYk04NTYqAUSJH5WyPLg9lIF54jxuCnTTYGZCIX6C4%2FhlRIcyegA4p4nlyidNj1h2J5kdFTmiBSUnCS8hpL%2B%2BeqY9Ttcc9jmS89sCvbQKdU9A73zDZi31AyXUtnxsagwMPkfzUJ8KakZFL81Y8HolVV1PkKGLwvbqrMgeoLfu%2Bz3eXlO&X-Amz-Signature=4ea544316d36eed783de5a14563104d801e825167335becd876d17d3706ab5c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7T647AO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHaHn0fglfaU99lAf2ckoc2GREXM1k02%2Bvv23kLVYShJAiA6E3bdYv3lFxGTvh1%2B3vBA8A0AthOW%2BJ4%2FsbaOeYiJeSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvg%2B6ctvaUqoQMm5MKtwDx%2Bod0pqXjE9JE9BFUctGODyGSe3uwrql17YAD1dIB4k3WpFmY6F8wfpLqhaDvl5MUk77SyOByx9yQ3%2BDSkIy2mCU0lznh%2FmSnLPRTSVyvLSRtOCKXqQ%2Fcya%2BLJtukTY3HRxscGjPxP6Rc0RDJB7ympz86Q1T6AxHe572h8ZIcqvRo2wgLnXTULjZylnX1H9c79A0tguk6Xtff8baOJV9A%2BHelbgpkeVOTJfVwDleGJRmD1%2BwAurL3boDpxciwzikPL0cvKueZTR9dbVIatKquRPM%2B79K6vNMu48uxicjVNjEo9bvxaF8oTzBNy6Ea1qP2zEsRA0CHZgFlKqz6U%2Bfe0tchkUzGu101QZDRgdo00SpS%2BhO7c%2F9W1%2BJ1pSSvOEqF%2Fz7z4NUEghkiID1gWxyNqjruO0llcti4A2UK14JvJeB2t3TgdopTN2OzJxy%2FuEUFtjtQH3Zof9TZNZGTGexDc63l%2FKJi8C7eueG2PgbfR4wtEkMLFPwmJOz8l6mxydCdtD6h6eH%2BwRRJXFBV2jiFgbFgpxyHCtl8AIQcbG5r%2BeefBZLashDAUvnk6VQDVi9ZhP1Nyqydiynoc%2FbHz%2F4mTB%2BkepGOHNoMDJAqYnDq3EIB5%2F%2BGmYd4BD0DIQw%2B9%2FwwQY6pgFPJroVeE1jk9TsBJEpe6Qp9AsTgWGz8hF2CnJonfuJ9ocUzYk04NTYqAUSJH5WyPLg9lIF54jxuCnTTYGZCIX6C4%2FhlRIcyegA4p4nlyidNj1h2J5kdFTmiBSUnCS8hpL%2B%2BeqY9Ttcc9jmS89sCvbQKdU9A73zDZi31AyXUtnxsagwMPkfzUJ8KakZFL81Y8HolVV1PkKGLwvbqrMgeoLfu%2Bz3eXlO&X-Amz-Signature=dc54d3872cde7a9e3480e572085c10502af2d08b68c911276e9d5c6282404e45&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7T647AO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHaHn0fglfaU99lAf2ckoc2GREXM1k02%2Bvv23kLVYShJAiA6E3bdYv3lFxGTvh1%2B3vBA8A0AthOW%2BJ4%2FsbaOeYiJeSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvg%2B6ctvaUqoQMm5MKtwDx%2Bod0pqXjE9JE9BFUctGODyGSe3uwrql17YAD1dIB4k3WpFmY6F8wfpLqhaDvl5MUk77SyOByx9yQ3%2BDSkIy2mCU0lznh%2FmSnLPRTSVyvLSRtOCKXqQ%2Fcya%2BLJtukTY3HRxscGjPxP6Rc0RDJB7ympz86Q1T6AxHe572h8ZIcqvRo2wgLnXTULjZylnX1H9c79A0tguk6Xtff8baOJV9A%2BHelbgpkeVOTJfVwDleGJRmD1%2BwAurL3boDpxciwzikPL0cvKueZTR9dbVIatKquRPM%2B79K6vNMu48uxicjVNjEo9bvxaF8oTzBNy6Ea1qP2zEsRA0CHZgFlKqz6U%2Bfe0tchkUzGu101QZDRgdo00SpS%2BhO7c%2F9W1%2BJ1pSSvOEqF%2Fz7z4NUEghkiID1gWxyNqjruO0llcti4A2UK14JvJeB2t3TgdopTN2OzJxy%2FuEUFtjtQH3Zof9TZNZGTGexDc63l%2FKJi8C7eueG2PgbfR4wtEkMLFPwmJOz8l6mxydCdtD6h6eH%2BwRRJXFBV2jiFgbFgpxyHCtl8AIQcbG5r%2BeefBZLashDAUvnk6VQDVi9ZhP1Nyqydiynoc%2FbHz%2F4mTB%2BkepGOHNoMDJAqYnDq3EIB5%2F%2BGmYd4BD0DIQw%2B9%2FwwQY6pgFPJroVeE1jk9TsBJEpe6Qp9AsTgWGz8hF2CnJonfuJ9ocUzYk04NTYqAUSJH5WyPLg9lIF54jxuCnTTYGZCIX6C4%2FhlRIcyegA4p4nlyidNj1h2J5kdFTmiBSUnCS8hpL%2B%2BeqY9Ttcc9jmS89sCvbQKdU9A73zDZi31AyXUtnxsagwMPkfzUJ8KakZFL81Y8HolVV1PkKGLwvbqrMgeoLfu%2Bz3eXlO&X-Amz-Signature=2ae1baaaede9650d1b2994cddacb714ea92460c1c12ec4b5baa6c703da6f3d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7T647AO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHaHn0fglfaU99lAf2ckoc2GREXM1k02%2Bvv23kLVYShJAiA6E3bdYv3lFxGTvh1%2B3vBA8A0AthOW%2BJ4%2FsbaOeYiJeSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvg%2B6ctvaUqoQMm5MKtwDx%2Bod0pqXjE9JE9BFUctGODyGSe3uwrql17YAD1dIB4k3WpFmY6F8wfpLqhaDvl5MUk77SyOByx9yQ3%2BDSkIy2mCU0lznh%2FmSnLPRTSVyvLSRtOCKXqQ%2Fcya%2BLJtukTY3HRxscGjPxP6Rc0RDJB7ympz86Q1T6AxHe572h8ZIcqvRo2wgLnXTULjZylnX1H9c79A0tguk6Xtff8baOJV9A%2BHelbgpkeVOTJfVwDleGJRmD1%2BwAurL3boDpxciwzikPL0cvKueZTR9dbVIatKquRPM%2B79K6vNMu48uxicjVNjEo9bvxaF8oTzBNy6Ea1qP2zEsRA0CHZgFlKqz6U%2Bfe0tchkUzGu101QZDRgdo00SpS%2BhO7c%2F9W1%2BJ1pSSvOEqF%2Fz7z4NUEghkiID1gWxyNqjruO0llcti4A2UK14JvJeB2t3TgdopTN2OzJxy%2FuEUFtjtQH3Zof9TZNZGTGexDc63l%2FKJi8C7eueG2PgbfR4wtEkMLFPwmJOz8l6mxydCdtD6h6eH%2BwRRJXFBV2jiFgbFgpxyHCtl8AIQcbG5r%2BeefBZLashDAUvnk6VQDVi9ZhP1Nyqydiynoc%2FbHz%2F4mTB%2BkepGOHNoMDJAqYnDq3EIB5%2F%2BGmYd4BD0DIQw%2B9%2FwwQY6pgFPJroVeE1jk9TsBJEpe6Qp9AsTgWGz8hF2CnJonfuJ9ocUzYk04NTYqAUSJH5WyPLg9lIF54jxuCnTTYGZCIX6C4%2FhlRIcyegA4p4nlyidNj1h2J5kdFTmiBSUnCS8hpL%2B%2BeqY9Ttcc9jmS89sCvbQKdU9A73zDZi31AyXUtnxsagwMPkfzUJ8KakZFL81Y8HolVV1PkKGLwvbqrMgeoLfu%2Bz3eXlO&X-Amz-Signature=3092eb33c753897c75225082514dbb59a75b5cb50edc2b5ff4811bd3128403e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7T647AO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHaHn0fglfaU99lAf2ckoc2GREXM1k02%2Bvv23kLVYShJAiA6E3bdYv3lFxGTvh1%2B3vBA8A0AthOW%2BJ4%2FsbaOeYiJeSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvg%2B6ctvaUqoQMm5MKtwDx%2Bod0pqXjE9JE9BFUctGODyGSe3uwrql17YAD1dIB4k3WpFmY6F8wfpLqhaDvl5MUk77SyOByx9yQ3%2BDSkIy2mCU0lznh%2FmSnLPRTSVyvLSRtOCKXqQ%2Fcya%2BLJtukTY3HRxscGjPxP6Rc0RDJB7ympz86Q1T6AxHe572h8ZIcqvRo2wgLnXTULjZylnX1H9c79A0tguk6Xtff8baOJV9A%2BHelbgpkeVOTJfVwDleGJRmD1%2BwAurL3boDpxciwzikPL0cvKueZTR9dbVIatKquRPM%2B79K6vNMu48uxicjVNjEo9bvxaF8oTzBNy6Ea1qP2zEsRA0CHZgFlKqz6U%2Bfe0tchkUzGu101QZDRgdo00SpS%2BhO7c%2F9W1%2BJ1pSSvOEqF%2Fz7z4NUEghkiID1gWxyNqjruO0llcti4A2UK14JvJeB2t3TgdopTN2OzJxy%2FuEUFtjtQH3Zof9TZNZGTGexDc63l%2FKJi8C7eueG2PgbfR4wtEkMLFPwmJOz8l6mxydCdtD6h6eH%2BwRRJXFBV2jiFgbFgpxyHCtl8AIQcbG5r%2BeefBZLashDAUvnk6VQDVi9ZhP1Nyqydiynoc%2FbHz%2F4mTB%2BkepGOHNoMDJAqYnDq3EIB5%2F%2BGmYd4BD0DIQw%2B9%2FwwQY6pgFPJroVeE1jk9TsBJEpe6Qp9AsTgWGz8hF2CnJonfuJ9ocUzYk04NTYqAUSJH5WyPLg9lIF54jxuCnTTYGZCIX6C4%2FhlRIcyegA4p4nlyidNj1h2J5kdFTmiBSUnCS8hpL%2B%2BeqY9Ttcc9jmS89sCvbQKdU9A73zDZi31AyXUtnxsagwMPkfzUJ8KakZFL81Y8HolVV1PkKGLwvbqrMgeoLfu%2Bz3eXlO&X-Amz-Signature=afdeb3b5ceeaf0e7eada332d869531f027060529fde46cfc42ba2c6685a24efe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7T647AO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHaHn0fglfaU99lAf2ckoc2GREXM1k02%2Bvv23kLVYShJAiA6E3bdYv3lFxGTvh1%2B3vBA8A0AthOW%2BJ4%2FsbaOeYiJeSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvg%2B6ctvaUqoQMm5MKtwDx%2Bod0pqXjE9JE9BFUctGODyGSe3uwrql17YAD1dIB4k3WpFmY6F8wfpLqhaDvl5MUk77SyOByx9yQ3%2BDSkIy2mCU0lznh%2FmSnLPRTSVyvLSRtOCKXqQ%2Fcya%2BLJtukTY3HRxscGjPxP6Rc0RDJB7ympz86Q1T6AxHe572h8ZIcqvRo2wgLnXTULjZylnX1H9c79A0tguk6Xtff8baOJV9A%2BHelbgpkeVOTJfVwDleGJRmD1%2BwAurL3boDpxciwzikPL0cvKueZTR9dbVIatKquRPM%2B79K6vNMu48uxicjVNjEo9bvxaF8oTzBNy6Ea1qP2zEsRA0CHZgFlKqz6U%2Bfe0tchkUzGu101QZDRgdo00SpS%2BhO7c%2F9W1%2BJ1pSSvOEqF%2Fz7z4NUEghkiID1gWxyNqjruO0llcti4A2UK14JvJeB2t3TgdopTN2OzJxy%2FuEUFtjtQH3Zof9TZNZGTGexDc63l%2FKJi8C7eueG2PgbfR4wtEkMLFPwmJOz8l6mxydCdtD6h6eH%2BwRRJXFBV2jiFgbFgpxyHCtl8AIQcbG5r%2BeefBZLashDAUvnk6VQDVi9ZhP1Nyqydiynoc%2FbHz%2F4mTB%2BkepGOHNoMDJAqYnDq3EIB5%2F%2BGmYd4BD0DIQw%2B9%2FwwQY6pgFPJroVeE1jk9TsBJEpe6Qp9AsTgWGz8hF2CnJonfuJ9ocUzYk04NTYqAUSJH5WyPLg9lIF54jxuCnTTYGZCIX6C4%2FhlRIcyegA4p4nlyidNj1h2J5kdFTmiBSUnCS8hpL%2B%2BeqY9Ttcc9jmS89sCvbQKdU9A73zDZi31AyXUtnxsagwMPkfzUJ8KakZFL81Y8HolVV1PkKGLwvbqrMgeoLfu%2Bz3eXlO&X-Amz-Signature=f50a4fae6a1f2c1a7fdd3492098f58c815c738c52e750ece1d77994c4b09a695&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7T647AO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHaHn0fglfaU99lAf2ckoc2GREXM1k02%2Bvv23kLVYShJAiA6E3bdYv3lFxGTvh1%2B3vBA8A0AthOW%2BJ4%2FsbaOeYiJeSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvg%2B6ctvaUqoQMm5MKtwDx%2Bod0pqXjE9JE9BFUctGODyGSe3uwrql17YAD1dIB4k3WpFmY6F8wfpLqhaDvl5MUk77SyOByx9yQ3%2BDSkIy2mCU0lznh%2FmSnLPRTSVyvLSRtOCKXqQ%2Fcya%2BLJtukTY3HRxscGjPxP6Rc0RDJB7ympz86Q1T6AxHe572h8ZIcqvRo2wgLnXTULjZylnX1H9c79A0tguk6Xtff8baOJV9A%2BHelbgpkeVOTJfVwDleGJRmD1%2BwAurL3boDpxciwzikPL0cvKueZTR9dbVIatKquRPM%2B79K6vNMu48uxicjVNjEo9bvxaF8oTzBNy6Ea1qP2zEsRA0CHZgFlKqz6U%2Bfe0tchkUzGu101QZDRgdo00SpS%2BhO7c%2F9W1%2BJ1pSSvOEqF%2Fz7z4NUEghkiID1gWxyNqjruO0llcti4A2UK14JvJeB2t3TgdopTN2OzJxy%2FuEUFtjtQH3Zof9TZNZGTGexDc63l%2FKJi8C7eueG2PgbfR4wtEkMLFPwmJOz8l6mxydCdtD6h6eH%2BwRRJXFBV2jiFgbFgpxyHCtl8AIQcbG5r%2BeefBZLashDAUvnk6VQDVi9ZhP1Nyqydiynoc%2FbHz%2F4mTB%2BkepGOHNoMDJAqYnDq3EIB5%2F%2BGmYd4BD0DIQw%2B9%2FwwQY6pgFPJroVeE1jk9TsBJEpe6Qp9AsTgWGz8hF2CnJonfuJ9ocUzYk04NTYqAUSJH5WyPLg9lIF54jxuCnTTYGZCIX6C4%2FhlRIcyegA4p4nlyidNj1h2J5kdFTmiBSUnCS8hpL%2B%2BeqY9Ttcc9jmS89sCvbQKdU9A73zDZi31AyXUtnxsagwMPkfzUJ8KakZFL81Y8HolVV1PkKGLwvbqrMgeoLfu%2Bz3eXlO&X-Amz-Signature=8bc9494a6aaff69f4c45812bbf18261a9416576900a423ef86fe0c80dcc5f794&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
