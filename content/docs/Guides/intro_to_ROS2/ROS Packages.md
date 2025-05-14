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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRN7YJ7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDry1SMwlD%2FXLIhG8DYQpdMdyurfvBWRPGpGwiXO4NjJAIhANXMNhkYVm3x0bbeUYTQb08bY13beaqEJNke8Tud0UkgKv8DCBIQABoMNjM3NDIzMTgzODA1IgzGrKv5nXnOEWjTCrcq3AM6%2BvqsonG39DhOaAwDl9OnNIceuLYgl%2BWKoam%2Fh1zlFJb56t83FfHhbrsqj15gdhAoTc5AjfGP8aZeehY%2BuCCbj67XPUT4doQKVTZOsKRnJwt2KdYhnMw%2Fa8g1xgwTDHvwJbZmdemeq%2B4RBrhoJ1VJjji%2FVj1RA3XWcstVvoeMe3%2B%2BY%2FA8dF5fH6Yhwwj4DLA76TfvPUy90eCwiTAken%2FzZKx7eSQ8h78xh%2BZ0VkVOV%2FmZFCizZBZd9Mn%2BA%2B3ySITHFmkYUxjSLLQeSqyfHLuNXBB%2Fh%2Fc%2BJsUoUADKQxVbQsc3x1uz3mxSpBYjwVGKRndWKlrPcHVshw0hnRRL6iFfsYZ80FoiKpPSlVzKSG6L3PSqCU5ESYYkQse8xQC9Vwgnw%2F8FWv4J04jcdXz1wCOlquD%2FTxdOOaDyuyjlMG6smarTrr9CO5w2QHxdSx%2B3Le0alxDyO6NqfOKh0BRo6koXjBJ2Ti813J%2BOefgTyGfGLn94NvySiltVn36a9wxOBMVchr%2FxlCuQGviNxSasrvhLqOZs9oshfK12Pd5x8lwUuE8Gxxhz7%2FkZ2VJ7vpYwIDGH524Si1wiob7W2sotwMwrw5mCKaTxdt8jzumH5pY60XBmjn1owfj3kQPUszCAuZHBBjqkAUGsIshNBIIIAJG%2FKLxnWZV%2Fyz99GPgi%2FtO44Xt0cEVYTJuHE4xCM6xwdevODwwR7ikkgDVg%2FS0L%2Bg03uBnYPMpeazWM69ZQEh3gxwYlhhwmS6sNhJDWQCQVbe11Q0b9wfH0tMTy8sngwLjOSvfK%2F3YIAfAhQQWfHjt%2BpZDzjjFXmgUkKHrleT%2FTw29gYDNRMK6PKtA5rgSEtiepnUr5aw2Q14Ij&X-Amz-Signature=b84ad377c09d028e878829a892b847deb248c0b4922e7ec5606b4214ca9a8d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRN7YJ7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDry1SMwlD%2FXLIhG8DYQpdMdyurfvBWRPGpGwiXO4NjJAIhANXMNhkYVm3x0bbeUYTQb08bY13beaqEJNke8Tud0UkgKv8DCBIQABoMNjM3NDIzMTgzODA1IgzGrKv5nXnOEWjTCrcq3AM6%2BvqsonG39DhOaAwDl9OnNIceuLYgl%2BWKoam%2Fh1zlFJb56t83FfHhbrsqj15gdhAoTc5AjfGP8aZeehY%2BuCCbj67XPUT4doQKVTZOsKRnJwt2KdYhnMw%2Fa8g1xgwTDHvwJbZmdemeq%2B4RBrhoJ1VJjji%2FVj1RA3XWcstVvoeMe3%2B%2BY%2FA8dF5fH6Yhwwj4DLA76TfvPUy90eCwiTAken%2FzZKx7eSQ8h78xh%2BZ0VkVOV%2FmZFCizZBZd9Mn%2BA%2B3ySITHFmkYUxjSLLQeSqyfHLuNXBB%2Fh%2Fc%2BJsUoUADKQxVbQsc3x1uz3mxSpBYjwVGKRndWKlrPcHVshw0hnRRL6iFfsYZ80FoiKpPSlVzKSG6L3PSqCU5ESYYkQse8xQC9Vwgnw%2F8FWv4J04jcdXz1wCOlquD%2FTxdOOaDyuyjlMG6smarTrr9CO5w2QHxdSx%2B3Le0alxDyO6NqfOKh0BRo6koXjBJ2Ti813J%2BOefgTyGfGLn94NvySiltVn36a9wxOBMVchr%2FxlCuQGviNxSasrvhLqOZs9oshfK12Pd5x8lwUuE8Gxxhz7%2FkZ2VJ7vpYwIDGH524Si1wiob7W2sotwMwrw5mCKaTxdt8jzumH5pY60XBmjn1owfj3kQPUszCAuZHBBjqkAUGsIshNBIIIAJG%2FKLxnWZV%2Fyz99GPgi%2FtO44Xt0cEVYTJuHE4xCM6xwdevODwwR7ikkgDVg%2FS0L%2Bg03uBnYPMpeazWM69ZQEh3gxwYlhhwmS6sNhJDWQCQVbe11Q0b9wfH0tMTy8sngwLjOSvfK%2F3YIAfAhQQWfHjt%2BpZDzjjFXmgUkKHrleT%2FTw29gYDNRMK6PKtA5rgSEtiepnUr5aw2Q14Ij&X-Amz-Signature=319aa0e021b0b0655560c53b2f6b3ff1982047b017c819edbe09552ff793aaf3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRN7YJ7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDry1SMwlD%2FXLIhG8DYQpdMdyurfvBWRPGpGwiXO4NjJAIhANXMNhkYVm3x0bbeUYTQb08bY13beaqEJNke8Tud0UkgKv8DCBIQABoMNjM3NDIzMTgzODA1IgzGrKv5nXnOEWjTCrcq3AM6%2BvqsonG39DhOaAwDl9OnNIceuLYgl%2BWKoam%2Fh1zlFJb56t83FfHhbrsqj15gdhAoTc5AjfGP8aZeehY%2BuCCbj67XPUT4doQKVTZOsKRnJwt2KdYhnMw%2Fa8g1xgwTDHvwJbZmdemeq%2B4RBrhoJ1VJjji%2FVj1RA3XWcstVvoeMe3%2B%2BY%2FA8dF5fH6Yhwwj4DLA76TfvPUy90eCwiTAken%2FzZKx7eSQ8h78xh%2BZ0VkVOV%2FmZFCizZBZd9Mn%2BA%2B3ySITHFmkYUxjSLLQeSqyfHLuNXBB%2Fh%2Fc%2BJsUoUADKQxVbQsc3x1uz3mxSpBYjwVGKRndWKlrPcHVshw0hnRRL6iFfsYZ80FoiKpPSlVzKSG6L3PSqCU5ESYYkQse8xQC9Vwgnw%2F8FWv4J04jcdXz1wCOlquD%2FTxdOOaDyuyjlMG6smarTrr9CO5w2QHxdSx%2B3Le0alxDyO6NqfOKh0BRo6koXjBJ2Ti813J%2BOefgTyGfGLn94NvySiltVn36a9wxOBMVchr%2FxlCuQGviNxSasrvhLqOZs9oshfK12Pd5x8lwUuE8Gxxhz7%2FkZ2VJ7vpYwIDGH524Si1wiob7W2sotwMwrw5mCKaTxdt8jzumH5pY60XBmjn1owfj3kQPUszCAuZHBBjqkAUGsIshNBIIIAJG%2FKLxnWZV%2Fyz99GPgi%2FtO44Xt0cEVYTJuHE4xCM6xwdevODwwR7ikkgDVg%2FS0L%2Bg03uBnYPMpeazWM69ZQEh3gxwYlhhwmS6sNhJDWQCQVbe11Q0b9wfH0tMTy8sngwLjOSvfK%2F3YIAfAhQQWfHjt%2BpZDzjjFXmgUkKHrleT%2FTw29gYDNRMK6PKtA5rgSEtiepnUr5aw2Q14Ij&X-Amz-Signature=3910204ebc4f5598673f5833b0e0b5d8c2e8a836e3e959359224088487360c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRN7YJ7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDry1SMwlD%2FXLIhG8DYQpdMdyurfvBWRPGpGwiXO4NjJAIhANXMNhkYVm3x0bbeUYTQb08bY13beaqEJNke8Tud0UkgKv8DCBIQABoMNjM3NDIzMTgzODA1IgzGrKv5nXnOEWjTCrcq3AM6%2BvqsonG39DhOaAwDl9OnNIceuLYgl%2BWKoam%2Fh1zlFJb56t83FfHhbrsqj15gdhAoTc5AjfGP8aZeehY%2BuCCbj67XPUT4doQKVTZOsKRnJwt2KdYhnMw%2Fa8g1xgwTDHvwJbZmdemeq%2B4RBrhoJ1VJjji%2FVj1RA3XWcstVvoeMe3%2B%2BY%2FA8dF5fH6Yhwwj4DLA76TfvPUy90eCwiTAken%2FzZKx7eSQ8h78xh%2BZ0VkVOV%2FmZFCizZBZd9Mn%2BA%2B3ySITHFmkYUxjSLLQeSqyfHLuNXBB%2Fh%2Fc%2BJsUoUADKQxVbQsc3x1uz3mxSpBYjwVGKRndWKlrPcHVshw0hnRRL6iFfsYZ80FoiKpPSlVzKSG6L3PSqCU5ESYYkQse8xQC9Vwgnw%2F8FWv4J04jcdXz1wCOlquD%2FTxdOOaDyuyjlMG6smarTrr9CO5w2QHxdSx%2B3Le0alxDyO6NqfOKh0BRo6koXjBJ2Ti813J%2BOefgTyGfGLn94NvySiltVn36a9wxOBMVchr%2FxlCuQGviNxSasrvhLqOZs9oshfK12Pd5x8lwUuE8Gxxhz7%2FkZ2VJ7vpYwIDGH524Si1wiob7W2sotwMwrw5mCKaTxdt8jzumH5pY60XBmjn1owfj3kQPUszCAuZHBBjqkAUGsIshNBIIIAJG%2FKLxnWZV%2Fyz99GPgi%2FtO44Xt0cEVYTJuHE4xCM6xwdevODwwR7ikkgDVg%2FS0L%2Bg03uBnYPMpeazWM69ZQEh3gxwYlhhwmS6sNhJDWQCQVbe11Q0b9wfH0tMTy8sngwLjOSvfK%2F3YIAfAhQQWfHjt%2BpZDzjjFXmgUkKHrleT%2FTw29gYDNRMK6PKtA5rgSEtiepnUr5aw2Q14Ij&X-Amz-Signature=07df6e78d04e96ed245d4f54168f3bb789ca727684766941dd2a157af88cb720&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRN7YJ7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDry1SMwlD%2FXLIhG8DYQpdMdyurfvBWRPGpGwiXO4NjJAIhANXMNhkYVm3x0bbeUYTQb08bY13beaqEJNke8Tud0UkgKv8DCBIQABoMNjM3NDIzMTgzODA1IgzGrKv5nXnOEWjTCrcq3AM6%2BvqsonG39DhOaAwDl9OnNIceuLYgl%2BWKoam%2Fh1zlFJb56t83FfHhbrsqj15gdhAoTc5AjfGP8aZeehY%2BuCCbj67XPUT4doQKVTZOsKRnJwt2KdYhnMw%2Fa8g1xgwTDHvwJbZmdemeq%2B4RBrhoJ1VJjji%2FVj1RA3XWcstVvoeMe3%2B%2BY%2FA8dF5fH6Yhwwj4DLA76TfvPUy90eCwiTAken%2FzZKx7eSQ8h78xh%2BZ0VkVOV%2FmZFCizZBZd9Mn%2BA%2B3ySITHFmkYUxjSLLQeSqyfHLuNXBB%2Fh%2Fc%2BJsUoUADKQxVbQsc3x1uz3mxSpBYjwVGKRndWKlrPcHVshw0hnRRL6iFfsYZ80FoiKpPSlVzKSG6L3PSqCU5ESYYkQse8xQC9Vwgnw%2F8FWv4J04jcdXz1wCOlquD%2FTxdOOaDyuyjlMG6smarTrr9CO5w2QHxdSx%2B3Le0alxDyO6NqfOKh0BRo6koXjBJ2Ti813J%2BOefgTyGfGLn94NvySiltVn36a9wxOBMVchr%2FxlCuQGviNxSasrvhLqOZs9oshfK12Pd5x8lwUuE8Gxxhz7%2FkZ2VJ7vpYwIDGH524Si1wiob7W2sotwMwrw5mCKaTxdt8jzumH5pY60XBmjn1owfj3kQPUszCAuZHBBjqkAUGsIshNBIIIAJG%2FKLxnWZV%2Fyz99GPgi%2FtO44Xt0cEVYTJuHE4xCM6xwdevODwwR7ikkgDVg%2FS0L%2Bg03uBnYPMpeazWM69ZQEh3gxwYlhhwmS6sNhJDWQCQVbe11Q0b9wfH0tMTy8sngwLjOSvfK%2F3YIAfAhQQWfHjt%2BpZDzjjFXmgUkKHrleT%2FTw29gYDNRMK6PKtA5rgSEtiepnUr5aw2Q14Ij&X-Amz-Signature=2f653421bac545dd764f6d54aa59a9aa586d79ce56f5ec1733fa9cd10ac79475&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRN7YJ7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDry1SMwlD%2FXLIhG8DYQpdMdyurfvBWRPGpGwiXO4NjJAIhANXMNhkYVm3x0bbeUYTQb08bY13beaqEJNke8Tud0UkgKv8DCBIQABoMNjM3NDIzMTgzODA1IgzGrKv5nXnOEWjTCrcq3AM6%2BvqsonG39DhOaAwDl9OnNIceuLYgl%2BWKoam%2Fh1zlFJb56t83FfHhbrsqj15gdhAoTc5AjfGP8aZeehY%2BuCCbj67XPUT4doQKVTZOsKRnJwt2KdYhnMw%2Fa8g1xgwTDHvwJbZmdemeq%2B4RBrhoJ1VJjji%2FVj1RA3XWcstVvoeMe3%2B%2BY%2FA8dF5fH6Yhwwj4DLA76TfvPUy90eCwiTAken%2FzZKx7eSQ8h78xh%2BZ0VkVOV%2FmZFCizZBZd9Mn%2BA%2B3ySITHFmkYUxjSLLQeSqyfHLuNXBB%2Fh%2Fc%2BJsUoUADKQxVbQsc3x1uz3mxSpBYjwVGKRndWKlrPcHVshw0hnRRL6iFfsYZ80FoiKpPSlVzKSG6L3PSqCU5ESYYkQse8xQC9Vwgnw%2F8FWv4J04jcdXz1wCOlquD%2FTxdOOaDyuyjlMG6smarTrr9CO5w2QHxdSx%2B3Le0alxDyO6NqfOKh0BRo6koXjBJ2Ti813J%2BOefgTyGfGLn94NvySiltVn36a9wxOBMVchr%2FxlCuQGviNxSasrvhLqOZs9oshfK12Pd5x8lwUuE8Gxxhz7%2FkZ2VJ7vpYwIDGH524Si1wiob7W2sotwMwrw5mCKaTxdt8jzumH5pY60XBmjn1owfj3kQPUszCAuZHBBjqkAUGsIshNBIIIAJG%2FKLxnWZV%2Fyz99GPgi%2FtO44Xt0cEVYTJuHE4xCM6xwdevODwwR7ikkgDVg%2FS0L%2Bg03uBnYPMpeazWM69ZQEh3gxwYlhhwmS6sNhJDWQCQVbe11Q0b9wfH0tMTy8sngwLjOSvfK%2F3YIAfAhQQWfHjt%2BpZDzjjFXmgUkKHrleT%2FTw29gYDNRMK6PKtA5rgSEtiepnUr5aw2Q14Ij&X-Amz-Signature=ac79200486b31c9cce1163e134ec1fc265aef3ed5294de1b02e07eb3a6838c6d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRN7YJ7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDry1SMwlD%2FXLIhG8DYQpdMdyurfvBWRPGpGwiXO4NjJAIhANXMNhkYVm3x0bbeUYTQb08bY13beaqEJNke8Tud0UkgKv8DCBIQABoMNjM3NDIzMTgzODA1IgzGrKv5nXnOEWjTCrcq3AM6%2BvqsonG39DhOaAwDl9OnNIceuLYgl%2BWKoam%2Fh1zlFJb56t83FfHhbrsqj15gdhAoTc5AjfGP8aZeehY%2BuCCbj67XPUT4doQKVTZOsKRnJwt2KdYhnMw%2Fa8g1xgwTDHvwJbZmdemeq%2B4RBrhoJ1VJjji%2FVj1RA3XWcstVvoeMe3%2B%2BY%2FA8dF5fH6Yhwwj4DLA76TfvPUy90eCwiTAken%2FzZKx7eSQ8h78xh%2BZ0VkVOV%2FmZFCizZBZd9Mn%2BA%2B3ySITHFmkYUxjSLLQeSqyfHLuNXBB%2Fh%2Fc%2BJsUoUADKQxVbQsc3x1uz3mxSpBYjwVGKRndWKlrPcHVshw0hnRRL6iFfsYZ80FoiKpPSlVzKSG6L3PSqCU5ESYYkQse8xQC9Vwgnw%2F8FWv4J04jcdXz1wCOlquD%2FTxdOOaDyuyjlMG6smarTrr9CO5w2QHxdSx%2B3Le0alxDyO6NqfOKh0BRo6koXjBJ2Ti813J%2BOefgTyGfGLn94NvySiltVn36a9wxOBMVchr%2FxlCuQGviNxSasrvhLqOZs9oshfK12Pd5x8lwUuE8Gxxhz7%2FkZ2VJ7vpYwIDGH524Si1wiob7W2sotwMwrw5mCKaTxdt8jzumH5pY60XBmjn1owfj3kQPUszCAuZHBBjqkAUGsIshNBIIIAJG%2FKLxnWZV%2Fyz99GPgi%2FtO44Xt0cEVYTJuHE4xCM6xwdevODwwR7ikkgDVg%2FS0L%2Bg03uBnYPMpeazWM69ZQEh3gxwYlhhwmS6sNhJDWQCQVbe11Q0b9wfH0tMTy8sngwLjOSvfK%2F3YIAfAhQQWfHjt%2BpZDzjjFXmgUkKHrleT%2FTw29gYDNRMK6PKtA5rgSEtiepnUr5aw2Q14Ij&X-Amz-Signature=6bb020bb28cdeea6984b1f7b3a2c5a7670d012f4ceef074d14b6ea736edb5bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
