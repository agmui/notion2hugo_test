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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZGNQMI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbrlOIcydlXoZ0vwjO48kgZogHrgj9%2BUYPbtVu4K9NYAiAVdX1sSoVB%2FDcGEOoA9xPLBmrHTsCLzT4TbEkzKjg9MSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOywBndHNToEzO2QKtwDam10y7f%2BTQ6tW6EgKU%2FAlRmU7%2FeaNnXQpxygZENY23L3WgYzljrSRwFzoHVewFtj4dFBgkfVphHfYBy%2FbLDH6LVfBGY%2Fi6lz9dYxlcgOafZoznVbPmprBRTBzZQWf1IFfmoMHf9wl4z9GafnvbcF6PFQc4z8jsWeEu4x695hfRExdYvTPfkKiRS9eLMLDvIdObZsJUurYg235BoxLv7XOKcCXp91svzeFkvrLFYCv6HGgSqnk7pTgipqRWYi%2FepQdLCHrRCfABoNLuSNjD4Qt8V4MTKYmYqaGaHbYUbCnRBfjMGRhr0RmjPA0uZ0lc3u%2B9iBMlWBqhaeOr%2F1IsoaDcNhYu%2FSGV8hnt69zDanT1o0y4w1vR%2FjUqDoRW5WGKDxrkwC4XuL0YTxre6eYSy62ACd9jBXnfG5M01LyEtjwwfyvwp1QVWVw5BM5Q7n%2FZkYnSvFxKPhLkx26WkBuKjelX2IfnyMc6a4VlqWU0f4uhqtWZVC0Z6s6CAiWFftJjDdXZD7ShtztRGhr86q%2BsFLxl%2Btj%2Fj6s2eTC5hJBzUnTYImURA3O56iYYkamTsXzsf3DMvDzeDZSJv83N1kl2a01oKWCmX%2BbxBscKZUBF4S9D7nRD9KR3QhTbbOpbwwsLL6vAY6pgEmeTmj8%2BqxWiXa%2F3YfYalZb77FrbjmnUpkN6%2F%2ByJkA9YTblcdc4EpMZo8zd8upHdN54aFbep3ZLubmQHC7yrZ92IpSSQygsp%2Ft%2FAGWTRrK2qRfHpASFzKyZnK95CE1xdUBY496OOcyQHStsI3jinb%2BtvQXa90f7xm5nmHwPI1MN%2Fj%2FQ2f73SdCo01pce2v9dZyR%2BOvrarhU99j%2BjTyzHNQ%2BMRjVWs2&X-Amz-Signature=d48542b909c3076316b80d0ec9696d7aa40e6df663457a547eb623ae77935ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZGNQMI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbrlOIcydlXoZ0vwjO48kgZogHrgj9%2BUYPbtVu4K9NYAiAVdX1sSoVB%2FDcGEOoA9xPLBmrHTsCLzT4TbEkzKjg9MSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOywBndHNToEzO2QKtwDam10y7f%2BTQ6tW6EgKU%2FAlRmU7%2FeaNnXQpxygZENY23L3WgYzljrSRwFzoHVewFtj4dFBgkfVphHfYBy%2FbLDH6LVfBGY%2Fi6lz9dYxlcgOafZoznVbPmprBRTBzZQWf1IFfmoMHf9wl4z9GafnvbcF6PFQc4z8jsWeEu4x695hfRExdYvTPfkKiRS9eLMLDvIdObZsJUurYg235BoxLv7XOKcCXp91svzeFkvrLFYCv6HGgSqnk7pTgipqRWYi%2FepQdLCHrRCfABoNLuSNjD4Qt8V4MTKYmYqaGaHbYUbCnRBfjMGRhr0RmjPA0uZ0lc3u%2B9iBMlWBqhaeOr%2F1IsoaDcNhYu%2FSGV8hnt69zDanT1o0y4w1vR%2FjUqDoRW5WGKDxrkwC4XuL0YTxre6eYSy62ACd9jBXnfG5M01LyEtjwwfyvwp1QVWVw5BM5Q7n%2FZkYnSvFxKPhLkx26WkBuKjelX2IfnyMc6a4VlqWU0f4uhqtWZVC0Z6s6CAiWFftJjDdXZD7ShtztRGhr86q%2BsFLxl%2Btj%2Fj6s2eTC5hJBzUnTYImURA3O56iYYkamTsXzsf3DMvDzeDZSJv83N1kl2a01oKWCmX%2BbxBscKZUBF4S9D7nRD9KR3QhTbbOpbwwsLL6vAY6pgEmeTmj8%2BqxWiXa%2F3YfYalZb77FrbjmnUpkN6%2F%2ByJkA9YTblcdc4EpMZo8zd8upHdN54aFbep3ZLubmQHC7yrZ92IpSSQygsp%2Ft%2FAGWTRrK2qRfHpASFzKyZnK95CE1xdUBY496OOcyQHStsI3jinb%2BtvQXa90f7xm5nmHwPI1MN%2Fj%2FQ2f73SdCo01pce2v9dZyR%2BOvrarhU99j%2BjTyzHNQ%2BMRjVWs2&X-Amz-Signature=026dfd174ddbae98103e563a39ff446d8ae13da05d75c510bd96f6a915d8e993&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZGNQMI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbrlOIcydlXoZ0vwjO48kgZogHrgj9%2BUYPbtVu4K9NYAiAVdX1sSoVB%2FDcGEOoA9xPLBmrHTsCLzT4TbEkzKjg9MSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOywBndHNToEzO2QKtwDam10y7f%2BTQ6tW6EgKU%2FAlRmU7%2FeaNnXQpxygZENY23L3WgYzljrSRwFzoHVewFtj4dFBgkfVphHfYBy%2FbLDH6LVfBGY%2Fi6lz9dYxlcgOafZoznVbPmprBRTBzZQWf1IFfmoMHf9wl4z9GafnvbcF6PFQc4z8jsWeEu4x695hfRExdYvTPfkKiRS9eLMLDvIdObZsJUurYg235BoxLv7XOKcCXp91svzeFkvrLFYCv6HGgSqnk7pTgipqRWYi%2FepQdLCHrRCfABoNLuSNjD4Qt8V4MTKYmYqaGaHbYUbCnRBfjMGRhr0RmjPA0uZ0lc3u%2B9iBMlWBqhaeOr%2F1IsoaDcNhYu%2FSGV8hnt69zDanT1o0y4w1vR%2FjUqDoRW5WGKDxrkwC4XuL0YTxre6eYSy62ACd9jBXnfG5M01LyEtjwwfyvwp1QVWVw5BM5Q7n%2FZkYnSvFxKPhLkx26WkBuKjelX2IfnyMc6a4VlqWU0f4uhqtWZVC0Z6s6CAiWFftJjDdXZD7ShtztRGhr86q%2BsFLxl%2Btj%2Fj6s2eTC5hJBzUnTYImURA3O56iYYkamTsXzsf3DMvDzeDZSJv83N1kl2a01oKWCmX%2BbxBscKZUBF4S9D7nRD9KR3QhTbbOpbwwsLL6vAY6pgEmeTmj8%2BqxWiXa%2F3YfYalZb77FrbjmnUpkN6%2F%2ByJkA9YTblcdc4EpMZo8zd8upHdN54aFbep3ZLubmQHC7yrZ92IpSSQygsp%2Ft%2FAGWTRrK2qRfHpASFzKyZnK95CE1xdUBY496OOcyQHStsI3jinb%2BtvQXa90f7xm5nmHwPI1MN%2Fj%2FQ2f73SdCo01pce2v9dZyR%2BOvrarhU99j%2BjTyzHNQ%2BMRjVWs2&X-Amz-Signature=d40e871b7981241e8de464d25c153007e5cfcfb41459e850f855a15f31fad5fa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZGNQMI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbrlOIcydlXoZ0vwjO48kgZogHrgj9%2BUYPbtVu4K9NYAiAVdX1sSoVB%2FDcGEOoA9xPLBmrHTsCLzT4TbEkzKjg9MSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOywBndHNToEzO2QKtwDam10y7f%2BTQ6tW6EgKU%2FAlRmU7%2FeaNnXQpxygZENY23L3WgYzljrSRwFzoHVewFtj4dFBgkfVphHfYBy%2FbLDH6LVfBGY%2Fi6lz9dYxlcgOafZoznVbPmprBRTBzZQWf1IFfmoMHf9wl4z9GafnvbcF6PFQc4z8jsWeEu4x695hfRExdYvTPfkKiRS9eLMLDvIdObZsJUurYg235BoxLv7XOKcCXp91svzeFkvrLFYCv6HGgSqnk7pTgipqRWYi%2FepQdLCHrRCfABoNLuSNjD4Qt8V4MTKYmYqaGaHbYUbCnRBfjMGRhr0RmjPA0uZ0lc3u%2B9iBMlWBqhaeOr%2F1IsoaDcNhYu%2FSGV8hnt69zDanT1o0y4w1vR%2FjUqDoRW5WGKDxrkwC4XuL0YTxre6eYSy62ACd9jBXnfG5M01LyEtjwwfyvwp1QVWVw5BM5Q7n%2FZkYnSvFxKPhLkx26WkBuKjelX2IfnyMc6a4VlqWU0f4uhqtWZVC0Z6s6CAiWFftJjDdXZD7ShtztRGhr86q%2BsFLxl%2Btj%2Fj6s2eTC5hJBzUnTYImURA3O56iYYkamTsXzsf3DMvDzeDZSJv83N1kl2a01oKWCmX%2BbxBscKZUBF4S9D7nRD9KR3QhTbbOpbwwsLL6vAY6pgEmeTmj8%2BqxWiXa%2F3YfYalZb77FrbjmnUpkN6%2F%2ByJkA9YTblcdc4EpMZo8zd8upHdN54aFbep3ZLubmQHC7yrZ92IpSSQygsp%2Ft%2FAGWTRrK2qRfHpASFzKyZnK95CE1xdUBY496OOcyQHStsI3jinb%2BtvQXa90f7xm5nmHwPI1MN%2Fj%2FQ2f73SdCo01pce2v9dZyR%2BOvrarhU99j%2BjTyzHNQ%2BMRjVWs2&X-Amz-Signature=76925af60a2a60eb30287ac7c6798615dd077089d4c4c6f67a40f1082827301c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZGNQMI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbrlOIcydlXoZ0vwjO48kgZogHrgj9%2BUYPbtVu4K9NYAiAVdX1sSoVB%2FDcGEOoA9xPLBmrHTsCLzT4TbEkzKjg9MSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOywBndHNToEzO2QKtwDam10y7f%2BTQ6tW6EgKU%2FAlRmU7%2FeaNnXQpxygZENY23L3WgYzljrSRwFzoHVewFtj4dFBgkfVphHfYBy%2FbLDH6LVfBGY%2Fi6lz9dYxlcgOafZoznVbPmprBRTBzZQWf1IFfmoMHf9wl4z9GafnvbcF6PFQc4z8jsWeEu4x695hfRExdYvTPfkKiRS9eLMLDvIdObZsJUurYg235BoxLv7XOKcCXp91svzeFkvrLFYCv6HGgSqnk7pTgipqRWYi%2FepQdLCHrRCfABoNLuSNjD4Qt8V4MTKYmYqaGaHbYUbCnRBfjMGRhr0RmjPA0uZ0lc3u%2B9iBMlWBqhaeOr%2F1IsoaDcNhYu%2FSGV8hnt69zDanT1o0y4w1vR%2FjUqDoRW5WGKDxrkwC4XuL0YTxre6eYSy62ACd9jBXnfG5M01LyEtjwwfyvwp1QVWVw5BM5Q7n%2FZkYnSvFxKPhLkx26WkBuKjelX2IfnyMc6a4VlqWU0f4uhqtWZVC0Z6s6CAiWFftJjDdXZD7ShtztRGhr86q%2BsFLxl%2Btj%2Fj6s2eTC5hJBzUnTYImURA3O56iYYkamTsXzsf3DMvDzeDZSJv83N1kl2a01oKWCmX%2BbxBscKZUBF4S9D7nRD9KR3QhTbbOpbwwsLL6vAY6pgEmeTmj8%2BqxWiXa%2F3YfYalZb77FrbjmnUpkN6%2F%2ByJkA9YTblcdc4EpMZo8zd8upHdN54aFbep3ZLubmQHC7yrZ92IpSSQygsp%2Ft%2FAGWTRrK2qRfHpASFzKyZnK95CE1xdUBY496OOcyQHStsI3jinb%2BtvQXa90f7xm5nmHwPI1MN%2Fj%2FQ2f73SdCo01pce2v9dZyR%2BOvrarhU99j%2BjTyzHNQ%2BMRjVWs2&X-Amz-Signature=2d02a572b93f73a7a51c770696429d85f4074c9450eddb16fdf207898436989c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZGNQMI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbrlOIcydlXoZ0vwjO48kgZogHrgj9%2BUYPbtVu4K9NYAiAVdX1sSoVB%2FDcGEOoA9xPLBmrHTsCLzT4TbEkzKjg9MSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOywBndHNToEzO2QKtwDam10y7f%2BTQ6tW6EgKU%2FAlRmU7%2FeaNnXQpxygZENY23L3WgYzljrSRwFzoHVewFtj4dFBgkfVphHfYBy%2FbLDH6LVfBGY%2Fi6lz9dYxlcgOafZoznVbPmprBRTBzZQWf1IFfmoMHf9wl4z9GafnvbcF6PFQc4z8jsWeEu4x695hfRExdYvTPfkKiRS9eLMLDvIdObZsJUurYg235BoxLv7XOKcCXp91svzeFkvrLFYCv6HGgSqnk7pTgipqRWYi%2FepQdLCHrRCfABoNLuSNjD4Qt8V4MTKYmYqaGaHbYUbCnRBfjMGRhr0RmjPA0uZ0lc3u%2B9iBMlWBqhaeOr%2F1IsoaDcNhYu%2FSGV8hnt69zDanT1o0y4w1vR%2FjUqDoRW5WGKDxrkwC4XuL0YTxre6eYSy62ACd9jBXnfG5M01LyEtjwwfyvwp1QVWVw5BM5Q7n%2FZkYnSvFxKPhLkx26WkBuKjelX2IfnyMc6a4VlqWU0f4uhqtWZVC0Z6s6CAiWFftJjDdXZD7ShtztRGhr86q%2BsFLxl%2Btj%2Fj6s2eTC5hJBzUnTYImURA3O56iYYkamTsXzsf3DMvDzeDZSJv83N1kl2a01oKWCmX%2BbxBscKZUBF4S9D7nRD9KR3QhTbbOpbwwsLL6vAY6pgEmeTmj8%2BqxWiXa%2F3YfYalZb77FrbjmnUpkN6%2F%2ByJkA9YTblcdc4EpMZo8zd8upHdN54aFbep3ZLubmQHC7yrZ92IpSSQygsp%2Ft%2FAGWTRrK2qRfHpASFzKyZnK95CE1xdUBY496OOcyQHStsI3jinb%2BtvQXa90f7xm5nmHwPI1MN%2Fj%2FQ2f73SdCo01pce2v9dZyR%2BOvrarhU99j%2BjTyzHNQ%2BMRjVWs2&X-Amz-Signature=ae99b715dac5f35deddad73805790373a704df41a839dd010a6a83c9c95289b7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZGNQMI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbrlOIcydlXoZ0vwjO48kgZogHrgj9%2BUYPbtVu4K9NYAiAVdX1sSoVB%2FDcGEOoA9xPLBmrHTsCLzT4TbEkzKjg9MSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOywBndHNToEzO2QKtwDam10y7f%2BTQ6tW6EgKU%2FAlRmU7%2FeaNnXQpxygZENY23L3WgYzljrSRwFzoHVewFtj4dFBgkfVphHfYBy%2FbLDH6LVfBGY%2Fi6lz9dYxlcgOafZoznVbPmprBRTBzZQWf1IFfmoMHf9wl4z9GafnvbcF6PFQc4z8jsWeEu4x695hfRExdYvTPfkKiRS9eLMLDvIdObZsJUurYg235BoxLv7XOKcCXp91svzeFkvrLFYCv6HGgSqnk7pTgipqRWYi%2FepQdLCHrRCfABoNLuSNjD4Qt8V4MTKYmYqaGaHbYUbCnRBfjMGRhr0RmjPA0uZ0lc3u%2B9iBMlWBqhaeOr%2F1IsoaDcNhYu%2FSGV8hnt69zDanT1o0y4w1vR%2FjUqDoRW5WGKDxrkwC4XuL0YTxre6eYSy62ACd9jBXnfG5M01LyEtjwwfyvwp1QVWVw5BM5Q7n%2FZkYnSvFxKPhLkx26WkBuKjelX2IfnyMc6a4VlqWU0f4uhqtWZVC0Z6s6CAiWFftJjDdXZD7ShtztRGhr86q%2BsFLxl%2Btj%2Fj6s2eTC5hJBzUnTYImURA3O56iYYkamTsXzsf3DMvDzeDZSJv83N1kl2a01oKWCmX%2BbxBscKZUBF4S9D7nRD9KR3QhTbbOpbwwsLL6vAY6pgEmeTmj8%2BqxWiXa%2F3YfYalZb77FrbjmnUpkN6%2F%2ByJkA9YTblcdc4EpMZo8zd8upHdN54aFbep3ZLubmQHC7yrZ92IpSSQygsp%2Ft%2FAGWTRrK2qRfHpASFzKyZnK95CE1xdUBY496OOcyQHStsI3jinb%2BtvQXa90f7xm5nmHwPI1MN%2Fj%2FQ2f73SdCo01pce2v9dZyR%2BOvrarhU99j%2BjTyzHNQ%2BMRjVWs2&X-Amz-Signature=739444c17506d3aff04202d7b16af610eb2e702e37d43d4e1008a4c82334fb35&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
