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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTWXKKK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCayfkAdrBHrQeWg8bYb3uO%2FdIqnRp0VxExu9rx92Sv%2BgIhAM4pfkg%2BdTkmzvMsZ%2BifaXAjztDLzoDNuRXMgslPWBmRKv8DCB4QABoMNjM3NDIzMTgzODA1IgwGp4Ao4oFXh4iuX4cq3APduJwCnn8lghE0tQ6bxC%2BNq7XEFc9WtutrNviyD0H5RyuZZcjcLMnCygmCo6jlEr30OTqhC%2Fv5yrQPO2Y5S0IJrkwA1pniddludC1q1GSI9nEM0onPiiKClYqFi2mp4dfeDp%2BMyJHwPHd%2FTNt1e7wZzIKe%2FXeH6OPbHUcHyZxuICn8V%2Ftuh3S%2BZv8L4q1rpAU3viNmwl0M3Kt8gsQpzZy0wtKqhJNafw0gJWfOs69qWw%2FiL%2FF9FyQTFHuy7wRZlHjTmjOredBTQpkiiJ%2BiZcgWFLzvAJeNEnOmwNqVoTATadoc8EDSI%2BkPL4RvUHTZvGRM6RsRyiJI9H8pdx6%2B6NAX9ii3fk0RC41oWZPLfpHrT5VpbxsEnM8nRx9Z9LRkmAxXNdO1mnNxzIInRcFja7foI10chbRCiNHbNW3%2FVvo6MwKT353rHmWPEG3XZTlHDcTr3ewitTRz4WNVSbq%2Fhk1psQvol5xgkE5kJhU06YDVLGSAatcRh6YRox3YbuFJ5XatBxESPTrM8PEdrDX5G18dAFcsBAtFUiCk5uxV6LqTOcXxOqikcJKYmG4HWhj0bg9jPs%2BsYY%2Bi%2BKtmUC3j8Z%2Br7CjymnDmF8Fex6lgoz78PsVjnG%2Bc%2Fn8QKXt3IzDTv6rABjqkAa1mtAPG4NOESBWvsavUCQcKDqSTeVdgwuEpDNwBzQ9vxXndUuYAfrvJiLN2CFR9CTu3FdshlbyDG4EKZAZPOY6MX3njNKcQSAz2BGyZ2Ol6jQNhY2bc%2FRXeK0kggwuwZVTiSUFwUS2D4SD6XgLMgNXi7nK8RBlhuckzKEGw4R1M6fLNKUYWXlG3U%2B%2F%2ByRm8x%2FSYvRPSfFBbYq7QKWgKtzf9Mvjc&X-Amz-Signature=f01855bd0d0360ceb21e0446a1f5a855b728851bb8e75dc8f87a394665029e88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTWXKKK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCayfkAdrBHrQeWg8bYb3uO%2FdIqnRp0VxExu9rx92Sv%2BgIhAM4pfkg%2BdTkmzvMsZ%2BifaXAjztDLzoDNuRXMgslPWBmRKv8DCB4QABoMNjM3NDIzMTgzODA1IgwGp4Ao4oFXh4iuX4cq3APduJwCnn8lghE0tQ6bxC%2BNq7XEFc9WtutrNviyD0H5RyuZZcjcLMnCygmCo6jlEr30OTqhC%2Fv5yrQPO2Y5S0IJrkwA1pniddludC1q1GSI9nEM0onPiiKClYqFi2mp4dfeDp%2BMyJHwPHd%2FTNt1e7wZzIKe%2FXeH6OPbHUcHyZxuICn8V%2Ftuh3S%2BZv8L4q1rpAU3viNmwl0M3Kt8gsQpzZy0wtKqhJNafw0gJWfOs69qWw%2FiL%2FF9FyQTFHuy7wRZlHjTmjOredBTQpkiiJ%2BiZcgWFLzvAJeNEnOmwNqVoTATadoc8EDSI%2BkPL4RvUHTZvGRM6RsRyiJI9H8pdx6%2B6NAX9ii3fk0RC41oWZPLfpHrT5VpbxsEnM8nRx9Z9LRkmAxXNdO1mnNxzIInRcFja7foI10chbRCiNHbNW3%2FVvo6MwKT353rHmWPEG3XZTlHDcTr3ewitTRz4WNVSbq%2Fhk1psQvol5xgkE5kJhU06YDVLGSAatcRh6YRox3YbuFJ5XatBxESPTrM8PEdrDX5G18dAFcsBAtFUiCk5uxV6LqTOcXxOqikcJKYmG4HWhj0bg9jPs%2BsYY%2Bi%2BKtmUC3j8Z%2Br7CjymnDmF8Fex6lgoz78PsVjnG%2Bc%2Fn8QKXt3IzDTv6rABjqkAa1mtAPG4NOESBWvsavUCQcKDqSTeVdgwuEpDNwBzQ9vxXndUuYAfrvJiLN2CFR9CTu3FdshlbyDG4EKZAZPOY6MX3njNKcQSAz2BGyZ2Ol6jQNhY2bc%2FRXeK0kggwuwZVTiSUFwUS2D4SD6XgLMgNXi7nK8RBlhuckzKEGw4R1M6fLNKUYWXlG3U%2B%2F%2ByRm8x%2FSYvRPSfFBbYq7QKWgKtzf9Mvjc&X-Amz-Signature=f56ad1d63527de4c701dc620b2c05ce583433266c47b2792efcbf89b889de5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTWXKKK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCayfkAdrBHrQeWg8bYb3uO%2FdIqnRp0VxExu9rx92Sv%2BgIhAM4pfkg%2BdTkmzvMsZ%2BifaXAjztDLzoDNuRXMgslPWBmRKv8DCB4QABoMNjM3NDIzMTgzODA1IgwGp4Ao4oFXh4iuX4cq3APduJwCnn8lghE0tQ6bxC%2BNq7XEFc9WtutrNviyD0H5RyuZZcjcLMnCygmCo6jlEr30OTqhC%2Fv5yrQPO2Y5S0IJrkwA1pniddludC1q1GSI9nEM0onPiiKClYqFi2mp4dfeDp%2BMyJHwPHd%2FTNt1e7wZzIKe%2FXeH6OPbHUcHyZxuICn8V%2Ftuh3S%2BZv8L4q1rpAU3viNmwl0M3Kt8gsQpzZy0wtKqhJNafw0gJWfOs69qWw%2FiL%2FF9FyQTFHuy7wRZlHjTmjOredBTQpkiiJ%2BiZcgWFLzvAJeNEnOmwNqVoTATadoc8EDSI%2BkPL4RvUHTZvGRM6RsRyiJI9H8pdx6%2B6NAX9ii3fk0RC41oWZPLfpHrT5VpbxsEnM8nRx9Z9LRkmAxXNdO1mnNxzIInRcFja7foI10chbRCiNHbNW3%2FVvo6MwKT353rHmWPEG3XZTlHDcTr3ewitTRz4WNVSbq%2Fhk1psQvol5xgkE5kJhU06YDVLGSAatcRh6YRox3YbuFJ5XatBxESPTrM8PEdrDX5G18dAFcsBAtFUiCk5uxV6LqTOcXxOqikcJKYmG4HWhj0bg9jPs%2BsYY%2Bi%2BKtmUC3j8Z%2Br7CjymnDmF8Fex6lgoz78PsVjnG%2Bc%2Fn8QKXt3IzDTv6rABjqkAa1mtAPG4NOESBWvsavUCQcKDqSTeVdgwuEpDNwBzQ9vxXndUuYAfrvJiLN2CFR9CTu3FdshlbyDG4EKZAZPOY6MX3njNKcQSAz2BGyZ2Ol6jQNhY2bc%2FRXeK0kggwuwZVTiSUFwUS2D4SD6XgLMgNXi7nK8RBlhuckzKEGw4R1M6fLNKUYWXlG3U%2B%2F%2ByRm8x%2FSYvRPSfFBbYq7QKWgKtzf9Mvjc&X-Amz-Signature=8b1580b571ef15e838969b9ce7f61642307e2e16118456a9053d21558c154e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTWXKKK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCayfkAdrBHrQeWg8bYb3uO%2FdIqnRp0VxExu9rx92Sv%2BgIhAM4pfkg%2BdTkmzvMsZ%2BifaXAjztDLzoDNuRXMgslPWBmRKv8DCB4QABoMNjM3NDIzMTgzODA1IgwGp4Ao4oFXh4iuX4cq3APduJwCnn8lghE0tQ6bxC%2BNq7XEFc9WtutrNviyD0H5RyuZZcjcLMnCygmCo6jlEr30OTqhC%2Fv5yrQPO2Y5S0IJrkwA1pniddludC1q1GSI9nEM0onPiiKClYqFi2mp4dfeDp%2BMyJHwPHd%2FTNt1e7wZzIKe%2FXeH6OPbHUcHyZxuICn8V%2Ftuh3S%2BZv8L4q1rpAU3viNmwl0M3Kt8gsQpzZy0wtKqhJNafw0gJWfOs69qWw%2FiL%2FF9FyQTFHuy7wRZlHjTmjOredBTQpkiiJ%2BiZcgWFLzvAJeNEnOmwNqVoTATadoc8EDSI%2BkPL4RvUHTZvGRM6RsRyiJI9H8pdx6%2B6NAX9ii3fk0RC41oWZPLfpHrT5VpbxsEnM8nRx9Z9LRkmAxXNdO1mnNxzIInRcFja7foI10chbRCiNHbNW3%2FVvo6MwKT353rHmWPEG3XZTlHDcTr3ewitTRz4WNVSbq%2Fhk1psQvol5xgkE5kJhU06YDVLGSAatcRh6YRox3YbuFJ5XatBxESPTrM8PEdrDX5G18dAFcsBAtFUiCk5uxV6LqTOcXxOqikcJKYmG4HWhj0bg9jPs%2BsYY%2Bi%2BKtmUC3j8Z%2Br7CjymnDmF8Fex6lgoz78PsVjnG%2Bc%2Fn8QKXt3IzDTv6rABjqkAa1mtAPG4NOESBWvsavUCQcKDqSTeVdgwuEpDNwBzQ9vxXndUuYAfrvJiLN2CFR9CTu3FdshlbyDG4EKZAZPOY6MX3njNKcQSAz2BGyZ2Ol6jQNhY2bc%2FRXeK0kggwuwZVTiSUFwUS2D4SD6XgLMgNXi7nK8RBlhuckzKEGw4R1M6fLNKUYWXlG3U%2B%2F%2ByRm8x%2FSYvRPSfFBbYq7QKWgKtzf9Mvjc&X-Amz-Signature=c6547715b53fbe8a6ea8ffb437272c6f8d64273a3b80d632ea5461deda6e2e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTWXKKK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCayfkAdrBHrQeWg8bYb3uO%2FdIqnRp0VxExu9rx92Sv%2BgIhAM4pfkg%2BdTkmzvMsZ%2BifaXAjztDLzoDNuRXMgslPWBmRKv8DCB4QABoMNjM3NDIzMTgzODA1IgwGp4Ao4oFXh4iuX4cq3APduJwCnn8lghE0tQ6bxC%2BNq7XEFc9WtutrNviyD0H5RyuZZcjcLMnCygmCo6jlEr30OTqhC%2Fv5yrQPO2Y5S0IJrkwA1pniddludC1q1GSI9nEM0onPiiKClYqFi2mp4dfeDp%2BMyJHwPHd%2FTNt1e7wZzIKe%2FXeH6OPbHUcHyZxuICn8V%2Ftuh3S%2BZv8L4q1rpAU3viNmwl0M3Kt8gsQpzZy0wtKqhJNafw0gJWfOs69qWw%2FiL%2FF9FyQTFHuy7wRZlHjTmjOredBTQpkiiJ%2BiZcgWFLzvAJeNEnOmwNqVoTATadoc8EDSI%2BkPL4RvUHTZvGRM6RsRyiJI9H8pdx6%2B6NAX9ii3fk0RC41oWZPLfpHrT5VpbxsEnM8nRx9Z9LRkmAxXNdO1mnNxzIInRcFja7foI10chbRCiNHbNW3%2FVvo6MwKT353rHmWPEG3XZTlHDcTr3ewitTRz4WNVSbq%2Fhk1psQvol5xgkE5kJhU06YDVLGSAatcRh6YRox3YbuFJ5XatBxESPTrM8PEdrDX5G18dAFcsBAtFUiCk5uxV6LqTOcXxOqikcJKYmG4HWhj0bg9jPs%2BsYY%2Bi%2BKtmUC3j8Z%2Br7CjymnDmF8Fex6lgoz78PsVjnG%2Bc%2Fn8QKXt3IzDTv6rABjqkAa1mtAPG4NOESBWvsavUCQcKDqSTeVdgwuEpDNwBzQ9vxXndUuYAfrvJiLN2CFR9CTu3FdshlbyDG4EKZAZPOY6MX3njNKcQSAz2BGyZ2Ol6jQNhY2bc%2FRXeK0kggwuwZVTiSUFwUS2D4SD6XgLMgNXi7nK8RBlhuckzKEGw4R1M6fLNKUYWXlG3U%2B%2F%2ByRm8x%2FSYvRPSfFBbYq7QKWgKtzf9Mvjc&X-Amz-Signature=35cf60ec3d51ad2d9e253cd8aa1f116433cca7306db293ae0e944b0d24bc400c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTWXKKK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCayfkAdrBHrQeWg8bYb3uO%2FdIqnRp0VxExu9rx92Sv%2BgIhAM4pfkg%2BdTkmzvMsZ%2BifaXAjztDLzoDNuRXMgslPWBmRKv8DCB4QABoMNjM3NDIzMTgzODA1IgwGp4Ao4oFXh4iuX4cq3APduJwCnn8lghE0tQ6bxC%2BNq7XEFc9WtutrNviyD0H5RyuZZcjcLMnCygmCo6jlEr30OTqhC%2Fv5yrQPO2Y5S0IJrkwA1pniddludC1q1GSI9nEM0onPiiKClYqFi2mp4dfeDp%2BMyJHwPHd%2FTNt1e7wZzIKe%2FXeH6OPbHUcHyZxuICn8V%2Ftuh3S%2BZv8L4q1rpAU3viNmwl0M3Kt8gsQpzZy0wtKqhJNafw0gJWfOs69qWw%2FiL%2FF9FyQTFHuy7wRZlHjTmjOredBTQpkiiJ%2BiZcgWFLzvAJeNEnOmwNqVoTATadoc8EDSI%2BkPL4RvUHTZvGRM6RsRyiJI9H8pdx6%2B6NAX9ii3fk0RC41oWZPLfpHrT5VpbxsEnM8nRx9Z9LRkmAxXNdO1mnNxzIInRcFja7foI10chbRCiNHbNW3%2FVvo6MwKT353rHmWPEG3XZTlHDcTr3ewitTRz4WNVSbq%2Fhk1psQvol5xgkE5kJhU06YDVLGSAatcRh6YRox3YbuFJ5XatBxESPTrM8PEdrDX5G18dAFcsBAtFUiCk5uxV6LqTOcXxOqikcJKYmG4HWhj0bg9jPs%2BsYY%2Bi%2BKtmUC3j8Z%2Br7CjymnDmF8Fex6lgoz78PsVjnG%2Bc%2Fn8QKXt3IzDTv6rABjqkAa1mtAPG4NOESBWvsavUCQcKDqSTeVdgwuEpDNwBzQ9vxXndUuYAfrvJiLN2CFR9CTu3FdshlbyDG4EKZAZPOY6MX3njNKcQSAz2BGyZ2Ol6jQNhY2bc%2FRXeK0kggwuwZVTiSUFwUS2D4SD6XgLMgNXi7nK8RBlhuckzKEGw4R1M6fLNKUYWXlG3U%2B%2F%2ByRm8x%2FSYvRPSfFBbYq7QKWgKtzf9Mvjc&X-Amz-Signature=3a18e9e180792e7e94047550318f52b63e020ffbdda5dbee05e75985885a0b10&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTWXKKK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCayfkAdrBHrQeWg8bYb3uO%2FdIqnRp0VxExu9rx92Sv%2BgIhAM4pfkg%2BdTkmzvMsZ%2BifaXAjztDLzoDNuRXMgslPWBmRKv8DCB4QABoMNjM3NDIzMTgzODA1IgwGp4Ao4oFXh4iuX4cq3APduJwCnn8lghE0tQ6bxC%2BNq7XEFc9WtutrNviyD0H5RyuZZcjcLMnCygmCo6jlEr30OTqhC%2Fv5yrQPO2Y5S0IJrkwA1pniddludC1q1GSI9nEM0onPiiKClYqFi2mp4dfeDp%2BMyJHwPHd%2FTNt1e7wZzIKe%2FXeH6OPbHUcHyZxuICn8V%2Ftuh3S%2BZv8L4q1rpAU3viNmwl0M3Kt8gsQpzZy0wtKqhJNafw0gJWfOs69qWw%2FiL%2FF9FyQTFHuy7wRZlHjTmjOredBTQpkiiJ%2BiZcgWFLzvAJeNEnOmwNqVoTATadoc8EDSI%2BkPL4RvUHTZvGRM6RsRyiJI9H8pdx6%2B6NAX9ii3fk0RC41oWZPLfpHrT5VpbxsEnM8nRx9Z9LRkmAxXNdO1mnNxzIInRcFja7foI10chbRCiNHbNW3%2FVvo6MwKT353rHmWPEG3XZTlHDcTr3ewitTRz4WNVSbq%2Fhk1psQvol5xgkE5kJhU06YDVLGSAatcRh6YRox3YbuFJ5XatBxESPTrM8PEdrDX5G18dAFcsBAtFUiCk5uxV6LqTOcXxOqikcJKYmG4HWhj0bg9jPs%2BsYY%2Bi%2BKtmUC3j8Z%2Br7CjymnDmF8Fex6lgoz78PsVjnG%2Bc%2Fn8QKXt3IzDTv6rABjqkAa1mtAPG4NOESBWvsavUCQcKDqSTeVdgwuEpDNwBzQ9vxXndUuYAfrvJiLN2CFR9CTu3FdshlbyDG4EKZAZPOY6MX3njNKcQSAz2BGyZ2Ol6jQNhY2bc%2FRXeK0kggwuwZVTiSUFwUS2D4SD6XgLMgNXi7nK8RBlhuckzKEGw4R1M6fLNKUYWXlG3U%2B%2F%2ByRm8x%2FSYvRPSfFBbYq7QKWgKtzf9Mvjc&X-Amz-Signature=9b7841832521b6c162d75b7058917b2b687f8af9f7f1582d936002cbd7b4f84f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
