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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ZJGXI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFveC6E9J7%2FJlwAr6DEutzXNp6kcTzFt24O2lNSSH28DAiEAxAvuHZo9gj1nZb1O%2B2KD%2FS4fVs3AuHK%2BhFfMwJYzdfAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNlWfSw2KWgNUbZJ%2BircA20gBMLiQyS9LMVFzhQWFv10WZOeRnHc5H4OuFq07AwOSBxRoJ4vYKx80lSI73MKeYzhhssi4uixX6Ul%2FEbjFShzsQHwlZ68qmKVnJmGwNa%2FfAUpTPSYfMVWBfDBi0qr66%2BBmlNWhX%2BsKstJcVR7UhQS3Y7UYAlkWbOO%2FuAA5rcXrJjgCdgPW2N8kOqwjaGqwp%2FARl0BxM50bk0bBjUY2jH6EyhzR4EEZbLwUGAIFNvT5W3se0V1yx9%2FodL16zW5hclM%2FzuVwSj61gJ7WuPzJy2%2FbQZJTH8EaR5%2BTnpY7h6pdUMbYYbTE6Hzr%2BURCD56260GGLwYKbGu%2FPWpSUswvf88oczIi0JBW%2BEAhPM322uYO8OgHct7qFagfkugooQbZXJvoStgSYIjpXEq1mahr5%2BA%2BKEOkBqHSfR98NCIHYOjM7aUJooZYJ66C5VOXa6EujyDufqQNJL8nf4E8RQxKfl4k3zx%2BbMO1ahHKNak7LQaIHOyCuudmFQoJfj7xdhrQ%2Bn72cyMrYfrDN6wVOp%2BWCsn%2FzcQCO4M%2BRUO2YwA67rT%2F48CorRq%2FNZmcBKDoF5HT5eYVnXHP9L%2BN5koKhUUhZrYiZp7DTMhAQvenfzg5an9e7q1LyLxO5dk6Xd8MOTalL8GOqUBry%2Fqwm%2FuTk9YERNttCYkf5ymv9UCKT5SdA8TVJtsRXji9i2EdlIvTT8GnQr2HwLbuGLkszqbzUyq9XkY1pVRG6UtTV8bI71bS6NjdKs7fyFcnb7A4iHfJfzQVqi5G6acIghesYdzTW766hH6yl996p3XKAYp4D3kgFo%2BtT1SKUjFJ5oPBmAx4Jk66wXbpEiY%2BDuZrlkkQbV%2BYnHJaT60TFUPQQIG&X-Amz-Signature=d02ed2e56edddc228962eb995ca3f7ca378c896d325d7b5a4d25d63179d44b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ZJGXI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFveC6E9J7%2FJlwAr6DEutzXNp6kcTzFt24O2lNSSH28DAiEAxAvuHZo9gj1nZb1O%2B2KD%2FS4fVs3AuHK%2BhFfMwJYzdfAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNlWfSw2KWgNUbZJ%2BircA20gBMLiQyS9LMVFzhQWFv10WZOeRnHc5H4OuFq07AwOSBxRoJ4vYKx80lSI73MKeYzhhssi4uixX6Ul%2FEbjFShzsQHwlZ68qmKVnJmGwNa%2FfAUpTPSYfMVWBfDBi0qr66%2BBmlNWhX%2BsKstJcVR7UhQS3Y7UYAlkWbOO%2FuAA5rcXrJjgCdgPW2N8kOqwjaGqwp%2FARl0BxM50bk0bBjUY2jH6EyhzR4EEZbLwUGAIFNvT5W3se0V1yx9%2FodL16zW5hclM%2FzuVwSj61gJ7WuPzJy2%2FbQZJTH8EaR5%2BTnpY7h6pdUMbYYbTE6Hzr%2BURCD56260GGLwYKbGu%2FPWpSUswvf88oczIi0JBW%2BEAhPM322uYO8OgHct7qFagfkugooQbZXJvoStgSYIjpXEq1mahr5%2BA%2BKEOkBqHSfR98NCIHYOjM7aUJooZYJ66C5VOXa6EujyDufqQNJL8nf4E8RQxKfl4k3zx%2BbMO1ahHKNak7LQaIHOyCuudmFQoJfj7xdhrQ%2Bn72cyMrYfrDN6wVOp%2BWCsn%2FzcQCO4M%2BRUO2YwA67rT%2F48CorRq%2FNZmcBKDoF5HT5eYVnXHP9L%2BN5koKhUUhZrYiZp7DTMhAQvenfzg5an9e7q1LyLxO5dk6Xd8MOTalL8GOqUBry%2Fqwm%2FuTk9YERNttCYkf5ymv9UCKT5SdA8TVJtsRXji9i2EdlIvTT8GnQr2HwLbuGLkszqbzUyq9XkY1pVRG6UtTV8bI71bS6NjdKs7fyFcnb7A4iHfJfzQVqi5G6acIghesYdzTW766hH6yl996p3XKAYp4D3kgFo%2BtT1SKUjFJ5oPBmAx4Jk66wXbpEiY%2BDuZrlkkQbV%2BYnHJaT60TFUPQQIG&X-Amz-Signature=54fc63732d13b960ddd2fd47adff77738ecacda4935897e5b90f49188decfcec&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ZJGXI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFveC6E9J7%2FJlwAr6DEutzXNp6kcTzFt24O2lNSSH28DAiEAxAvuHZo9gj1nZb1O%2B2KD%2FS4fVs3AuHK%2BhFfMwJYzdfAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNlWfSw2KWgNUbZJ%2BircA20gBMLiQyS9LMVFzhQWFv10WZOeRnHc5H4OuFq07AwOSBxRoJ4vYKx80lSI73MKeYzhhssi4uixX6Ul%2FEbjFShzsQHwlZ68qmKVnJmGwNa%2FfAUpTPSYfMVWBfDBi0qr66%2BBmlNWhX%2BsKstJcVR7UhQS3Y7UYAlkWbOO%2FuAA5rcXrJjgCdgPW2N8kOqwjaGqwp%2FARl0BxM50bk0bBjUY2jH6EyhzR4EEZbLwUGAIFNvT5W3se0V1yx9%2FodL16zW5hclM%2FzuVwSj61gJ7WuPzJy2%2FbQZJTH8EaR5%2BTnpY7h6pdUMbYYbTE6Hzr%2BURCD56260GGLwYKbGu%2FPWpSUswvf88oczIi0JBW%2BEAhPM322uYO8OgHct7qFagfkugooQbZXJvoStgSYIjpXEq1mahr5%2BA%2BKEOkBqHSfR98NCIHYOjM7aUJooZYJ66C5VOXa6EujyDufqQNJL8nf4E8RQxKfl4k3zx%2BbMO1ahHKNak7LQaIHOyCuudmFQoJfj7xdhrQ%2Bn72cyMrYfrDN6wVOp%2BWCsn%2FzcQCO4M%2BRUO2YwA67rT%2F48CorRq%2FNZmcBKDoF5HT5eYVnXHP9L%2BN5koKhUUhZrYiZp7DTMhAQvenfzg5an9e7q1LyLxO5dk6Xd8MOTalL8GOqUBry%2Fqwm%2FuTk9YERNttCYkf5ymv9UCKT5SdA8TVJtsRXji9i2EdlIvTT8GnQr2HwLbuGLkszqbzUyq9XkY1pVRG6UtTV8bI71bS6NjdKs7fyFcnb7A4iHfJfzQVqi5G6acIghesYdzTW766hH6yl996p3XKAYp4D3kgFo%2BtT1SKUjFJ5oPBmAx4Jk66wXbpEiY%2BDuZrlkkQbV%2BYnHJaT60TFUPQQIG&X-Amz-Signature=3f27f1c2ee833c2bbd5bd37a67eb8a61bff310fa5b0d9b5d530d4bbc8c7c2913&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ZJGXI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFveC6E9J7%2FJlwAr6DEutzXNp6kcTzFt24O2lNSSH28DAiEAxAvuHZo9gj1nZb1O%2B2KD%2FS4fVs3AuHK%2BhFfMwJYzdfAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNlWfSw2KWgNUbZJ%2BircA20gBMLiQyS9LMVFzhQWFv10WZOeRnHc5H4OuFq07AwOSBxRoJ4vYKx80lSI73MKeYzhhssi4uixX6Ul%2FEbjFShzsQHwlZ68qmKVnJmGwNa%2FfAUpTPSYfMVWBfDBi0qr66%2BBmlNWhX%2BsKstJcVR7UhQS3Y7UYAlkWbOO%2FuAA5rcXrJjgCdgPW2N8kOqwjaGqwp%2FARl0BxM50bk0bBjUY2jH6EyhzR4EEZbLwUGAIFNvT5W3se0V1yx9%2FodL16zW5hclM%2FzuVwSj61gJ7WuPzJy2%2FbQZJTH8EaR5%2BTnpY7h6pdUMbYYbTE6Hzr%2BURCD56260GGLwYKbGu%2FPWpSUswvf88oczIi0JBW%2BEAhPM322uYO8OgHct7qFagfkugooQbZXJvoStgSYIjpXEq1mahr5%2BA%2BKEOkBqHSfR98NCIHYOjM7aUJooZYJ66C5VOXa6EujyDufqQNJL8nf4E8RQxKfl4k3zx%2BbMO1ahHKNak7LQaIHOyCuudmFQoJfj7xdhrQ%2Bn72cyMrYfrDN6wVOp%2BWCsn%2FzcQCO4M%2BRUO2YwA67rT%2F48CorRq%2FNZmcBKDoF5HT5eYVnXHP9L%2BN5koKhUUhZrYiZp7DTMhAQvenfzg5an9e7q1LyLxO5dk6Xd8MOTalL8GOqUBry%2Fqwm%2FuTk9YERNttCYkf5ymv9UCKT5SdA8TVJtsRXji9i2EdlIvTT8GnQr2HwLbuGLkszqbzUyq9XkY1pVRG6UtTV8bI71bS6NjdKs7fyFcnb7A4iHfJfzQVqi5G6acIghesYdzTW766hH6yl996p3XKAYp4D3kgFo%2BtT1SKUjFJ5oPBmAx4Jk66wXbpEiY%2BDuZrlkkQbV%2BYnHJaT60TFUPQQIG&X-Amz-Signature=6fd5f18d075807a2ab47aace08421abb13d4eea3a0f9bbb4627032671dc20ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ZJGXI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFveC6E9J7%2FJlwAr6DEutzXNp6kcTzFt24O2lNSSH28DAiEAxAvuHZo9gj1nZb1O%2B2KD%2FS4fVs3AuHK%2BhFfMwJYzdfAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNlWfSw2KWgNUbZJ%2BircA20gBMLiQyS9LMVFzhQWFv10WZOeRnHc5H4OuFq07AwOSBxRoJ4vYKx80lSI73MKeYzhhssi4uixX6Ul%2FEbjFShzsQHwlZ68qmKVnJmGwNa%2FfAUpTPSYfMVWBfDBi0qr66%2BBmlNWhX%2BsKstJcVR7UhQS3Y7UYAlkWbOO%2FuAA5rcXrJjgCdgPW2N8kOqwjaGqwp%2FARl0BxM50bk0bBjUY2jH6EyhzR4EEZbLwUGAIFNvT5W3se0V1yx9%2FodL16zW5hclM%2FzuVwSj61gJ7WuPzJy2%2FbQZJTH8EaR5%2BTnpY7h6pdUMbYYbTE6Hzr%2BURCD56260GGLwYKbGu%2FPWpSUswvf88oczIi0JBW%2BEAhPM322uYO8OgHct7qFagfkugooQbZXJvoStgSYIjpXEq1mahr5%2BA%2BKEOkBqHSfR98NCIHYOjM7aUJooZYJ66C5VOXa6EujyDufqQNJL8nf4E8RQxKfl4k3zx%2BbMO1ahHKNak7LQaIHOyCuudmFQoJfj7xdhrQ%2Bn72cyMrYfrDN6wVOp%2BWCsn%2FzcQCO4M%2BRUO2YwA67rT%2F48CorRq%2FNZmcBKDoF5HT5eYVnXHP9L%2BN5koKhUUhZrYiZp7DTMhAQvenfzg5an9e7q1LyLxO5dk6Xd8MOTalL8GOqUBry%2Fqwm%2FuTk9YERNttCYkf5ymv9UCKT5SdA8TVJtsRXji9i2EdlIvTT8GnQr2HwLbuGLkszqbzUyq9XkY1pVRG6UtTV8bI71bS6NjdKs7fyFcnb7A4iHfJfzQVqi5G6acIghesYdzTW766hH6yl996p3XKAYp4D3kgFo%2BtT1SKUjFJ5oPBmAx4Jk66wXbpEiY%2BDuZrlkkQbV%2BYnHJaT60TFUPQQIG&X-Amz-Signature=05d6ea169afb58998bc05ef31ee042666d6d51773d5e37a258bf7c59640848a4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ZJGXI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFveC6E9J7%2FJlwAr6DEutzXNp6kcTzFt24O2lNSSH28DAiEAxAvuHZo9gj1nZb1O%2B2KD%2FS4fVs3AuHK%2BhFfMwJYzdfAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNlWfSw2KWgNUbZJ%2BircA20gBMLiQyS9LMVFzhQWFv10WZOeRnHc5H4OuFq07AwOSBxRoJ4vYKx80lSI73MKeYzhhssi4uixX6Ul%2FEbjFShzsQHwlZ68qmKVnJmGwNa%2FfAUpTPSYfMVWBfDBi0qr66%2BBmlNWhX%2BsKstJcVR7UhQS3Y7UYAlkWbOO%2FuAA5rcXrJjgCdgPW2N8kOqwjaGqwp%2FARl0BxM50bk0bBjUY2jH6EyhzR4EEZbLwUGAIFNvT5W3se0V1yx9%2FodL16zW5hclM%2FzuVwSj61gJ7WuPzJy2%2FbQZJTH8EaR5%2BTnpY7h6pdUMbYYbTE6Hzr%2BURCD56260GGLwYKbGu%2FPWpSUswvf88oczIi0JBW%2BEAhPM322uYO8OgHct7qFagfkugooQbZXJvoStgSYIjpXEq1mahr5%2BA%2BKEOkBqHSfR98NCIHYOjM7aUJooZYJ66C5VOXa6EujyDufqQNJL8nf4E8RQxKfl4k3zx%2BbMO1ahHKNak7LQaIHOyCuudmFQoJfj7xdhrQ%2Bn72cyMrYfrDN6wVOp%2BWCsn%2FzcQCO4M%2BRUO2YwA67rT%2F48CorRq%2FNZmcBKDoF5HT5eYVnXHP9L%2BN5koKhUUhZrYiZp7DTMhAQvenfzg5an9e7q1LyLxO5dk6Xd8MOTalL8GOqUBry%2Fqwm%2FuTk9YERNttCYkf5ymv9UCKT5SdA8TVJtsRXji9i2EdlIvTT8GnQr2HwLbuGLkszqbzUyq9XkY1pVRG6UtTV8bI71bS6NjdKs7fyFcnb7A4iHfJfzQVqi5G6acIghesYdzTW766hH6yl996p3XKAYp4D3kgFo%2BtT1SKUjFJ5oPBmAx4Jk66wXbpEiY%2BDuZrlkkQbV%2BYnHJaT60TFUPQQIG&X-Amz-Signature=23d2aff0cd7471a3d2479b654c14a680899e1b7869c64929ef9637f4595f8852&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ZJGXI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFveC6E9J7%2FJlwAr6DEutzXNp6kcTzFt24O2lNSSH28DAiEAxAvuHZo9gj1nZb1O%2B2KD%2FS4fVs3AuHK%2BhFfMwJYzdfAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNlWfSw2KWgNUbZJ%2BircA20gBMLiQyS9LMVFzhQWFv10WZOeRnHc5H4OuFq07AwOSBxRoJ4vYKx80lSI73MKeYzhhssi4uixX6Ul%2FEbjFShzsQHwlZ68qmKVnJmGwNa%2FfAUpTPSYfMVWBfDBi0qr66%2BBmlNWhX%2BsKstJcVR7UhQS3Y7UYAlkWbOO%2FuAA5rcXrJjgCdgPW2N8kOqwjaGqwp%2FARl0BxM50bk0bBjUY2jH6EyhzR4EEZbLwUGAIFNvT5W3se0V1yx9%2FodL16zW5hclM%2FzuVwSj61gJ7WuPzJy2%2FbQZJTH8EaR5%2BTnpY7h6pdUMbYYbTE6Hzr%2BURCD56260GGLwYKbGu%2FPWpSUswvf88oczIi0JBW%2BEAhPM322uYO8OgHct7qFagfkugooQbZXJvoStgSYIjpXEq1mahr5%2BA%2BKEOkBqHSfR98NCIHYOjM7aUJooZYJ66C5VOXa6EujyDufqQNJL8nf4E8RQxKfl4k3zx%2BbMO1ahHKNak7LQaIHOyCuudmFQoJfj7xdhrQ%2Bn72cyMrYfrDN6wVOp%2BWCsn%2FzcQCO4M%2BRUO2YwA67rT%2F48CorRq%2FNZmcBKDoF5HT5eYVnXHP9L%2BN5koKhUUhZrYiZp7DTMhAQvenfzg5an9e7q1LyLxO5dk6Xd8MOTalL8GOqUBry%2Fqwm%2FuTk9YERNttCYkf5ymv9UCKT5SdA8TVJtsRXji9i2EdlIvTT8GnQr2HwLbuGLkszqbzUyq9XkY1pVRG6UtTV8bI71bS6NjdKs7fyFcnb7A4iHfJfzQVqi5G6acIghesYdzTW766hH6yl996p3XKAYp4D3kgFo%2BtT1SKUjFJ5oPBmAx4Jk66wXbpEiY%2BDuZrlkkQbV%2BYnHJaT60TFUPQQIG&X-Amz-Signature=4e80c0cec6d8de20e381f32c16ae6c3794cf8a2360d89041fe5a6cf5a87e9327&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
