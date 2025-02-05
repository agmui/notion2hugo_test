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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKK46SL4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFfDsofh1GYiMdoA7gan2%2F%2FUP0%2BnQ4t0oe%2Bz5Fr1d0fQIgVLKCACpvrh2MTLcnCRWazgepvWzaooN9v3JjQpXwZjAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAUGr0F3owwlyaY4WCrcA2kFIfLDj2Oh6P5LCqMkK%2BtIXcK1bIF8Hb36eJWWFzgJCXg17lTYf7qnNUxH5sFf2iSVZougAPOe5lMvrNH7YyGZphvxM4q6cpZdP%2BhGWAQunOQjXhn02Q8YRFSWYHdt1U1mp9jlLXd%2BlQUazWIy7l4VwzzOJQ%2F6P5XW7de5agjjz4k0nUFyofJUqChBQvkr1yt2udnL52TkDs5s845TKW%2BY1Pkcxg3s%2F0qFVdP6cuPD2slx0mOXQyi5JtisznRLpsPpiQ%2FUrCPiM8LYg3dnUlHhpPQ02dk3lL2Y1VTQndQn3Q7HFXtkPqYfX6dyHhQFE5E%2FRqrz6pW23eETRiElfPdg8%2BS5rh%2FVzQRE%2FBdT%2BJVZAJM9BcGkK63k5%2Bb99E5HBeHzdMnTpmWyNS%2BHU7hoOtDQMdptDbqAhEv72NkMDerE1todsDFNkeSS%2BQcMKatUgYQRWDbh7jE4X2W6zwwbsINFQUtZE2KkyJD5uJe5dAqh2tB%2Fs%2BxMs%2BAJNTf0wMgjjcAn3LK9WFfn3s2WsWPoqHUrJFTl3ZvjZho2MYkjqjBfyv5HqXKsVgyJYvGFtEqZldbg993wDnUBP8ZfYJWTyqDPX48PMXxZ3RxqoNaAjAclJye1GJl93GimiiYLMOG7jr0GOqUBYQZ002p%2FGkaWk7X0SB3QCzGZocBapbqZy3jkuGMRlKdF7d4boGQMmvYS024%2FC7vJeuZoVpubq7IHFxlFYDEsubslRCIvPbfLqg3Mwt8jTWaxo19C5WjUkndkZbwMPAUL%2FGAZdz0IIW068Md1jKCR7i4L6VnuuChIquq8dz4ChS3PwIg63syykbLMhFG4POLyCzRyFOyw5XCVFXkUchNVx1eijCXD&X-Amz-Signature=a226d38899a04943ef7d3597f88d09070414c7241d5bfc99439ae9adc8989594&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKK46SL4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFfDsofh1GYiMdoA7gan2%2F%2FUP0%2BnQ4t0oe%2Bz5Fr1d0fQIgVLKCACpvrh2MTLcnCRWazgepvWzaooN9v3JjQpXwZjAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAUGr0F3owwlyaY4WCrcA2kFIfLDj2Oh6P5LCqMkK%2BtIXcK1bIF8Hb36eJWWFzgJCXg17lTYf7qnNUxH5sFf2iSVZougAPOe5lMvrNH7YyGZphvxM4q6cpZdP%2BhGWAQunOQjXhn02Q8YRFSWYHdt1U1mp9jlLXd%2BlQUazWIy7l4VwzzOJQ%2F6P5XW7de5agjjz4k0nUFyofJUqChBQvkr1yt2udnL52TkDs5s845TKW%2BY1Pkcxg3s%2F0qFVdP6cuPD2slx0mOXQyi5JtisznRLpsPpiQ%2FUrCPiM8LYg3dnUlHhpPQ02dk3lL2Y1VTQndQn3Q7HFXtkPqYfX6dyHhQFE5E%2FRqrz6pW23eETRiElfPdg8%2BS5rh%2FVzQRE%2FBdT%2BJVZAJM9BcGkK63k5%2Bb99E5HBeHzdMnTpmWyNS%2BHU7hoOtDQMdptDbqAhEv72NkMDerE1todsDFNkeSS%2BQcMKatUgYQRWDbh7jE4X2W6zwwbsINFQUtZE2KkyJD5uJe5dAqh2tB%2Fs%2BxMs%2BAJNTf0wMgjjcAn3LK9WFfn3s2WsWPoqHUrJFTl3ZvjZho2MYkjqjBfyv5HqXKsVgyJYvGFtEqZldbg993wDnUBP8ZfYJWTyqDPX48PMXxZ3RxqoNaAjAclJye1GJl93GimiiYLMOG7jr0GOqUBYQZ002p%2FGkaWk7X0SB3QCzGZocBapbqZy3jkuGMRlKdF7d4boGQMmvYS024%2FC7vJeuZoVpubq7IHFxlFYDEsubslRCIvPbfLqg3Mwt8jTWaxo19C5WjUkndkZbwMPAUL%2FGAZdz0IIW068Md1jKCR7i4L6VnuuChIquq8dz4ChS3PwIg63syykbLMhFG4POLyCzRyFOyw5XCVFXkUchNVx1eijCXD&X-Amz-Signature=0e87253dd7c56ce0034b956a8c9c8858139239c50df91874fbfb8f36709a7480&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKK46SL4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFfDsofh1GYiMdoA7gan2%2F%2FUP0%2BnQ4t0oe%2Bz5Fr1d0fQIgVLKCACpvrh2MTLcnCRWazgepvWzaooN9v3JjQpXwZjAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAUGr0F3owwlyaY4WCrcA2kFIfLDj2Oh6P5LCqMkK%2BtIXcK1bIF8Hb36eJWWFzgJCXg17lTYf7qnNUxH5sFf2iSVZougAPOe5lMvrNH7YyGZphvxM4q6cpZdP%2BhGWAQunOQjXhn02Q8YRFSWYHdt1U1mp9jlLXd%2BlQUazWIy7l4VwzzOJQ%2F6P5XW7de5agjjz4k0nUFyofJUqChBQvkr1yt2udnL52TkDs5s845TKW%2BY1Pkcxg3s%2F0qFVdP6cuPD2slx0mOXQyi5JtisznRLpsPpiQ%2FUrCPiM8LYg3dnUlHhpPQ02dk3lL2Y1VTQndQn3Q7HFXtkPqYfX6dyHhQFE5E%2FRqrz6pW23eETRiElfPdg8%2BS5rh%2FVzQRE%2FBdT%2BJVZAJM9BcGkK63k5%2Bb99E5HBeHzdMnTpmWyNS%2BHU7hoOtDQMdptDbqAhEv72NkMDerE1todsDFNkeSS%2BQcMKatUgYQRWDbh7jE4X2W6zwwbsINFQUtZE2KkyJD5uJe5dAqh2tB%2Fs%2BxMs%2BAJNTf0wMgjjcAn3LK9WFfn3s2WsWPoqHUrJFTl3ZvjZho2MYkjqjBfyv5HqXKsVgyJYvGFtEqZldbg993wDnUBP8ZfYJWTyqDPX48PMXxZ3RxqoNaAjAclJye1GJl93GimiiYLMOG7jr0GOqUBYQZ002p%2FGkaWk7X0SB3QCzGZocBapbqZy3jkuGMRlKdF7d4boGQMmvYS024%2FC7vJeuZoVpubq7IHFxlFYDEsubslRCIvPbfLqg3Mwt8jTWaxo19C5WjUkndkZbwMPAUL%2FGAZdz0IIW068Md1jKCR7i4L6VnuuChIquq8dz4ChS3PwIg63syykbLMhFG4POLyCzRyFOyw5XCVFXkUchNVx1eijCXD&X-Amz-Signature=78ce6bf13c8919b66d2e1b5444d5bd718b59fa52722eb9db42f2d352399dc3be&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKK46SL4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFfDsofh1GYiMdoA7gan2%2F%2FUP0%2BnQ4t0oe%2Bz5Fr1d0fQIgVLKCACpvrh2MTLcnCRWazgepvWzaooN9v3JjQpXwZjAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAUGr0F3owwlyaY4WCrcA2kFIfLDj2Oh6P5LCqMkK%2BtIXcK1bIF8Hb36eJWWFzgJCXg17lTYf7qnNUxH5sFf2iSVZougAPOe5lMvrNH7YyGZphvxM4q6cpZdP%2BhGWAQunOQjXhn02Q8YRFSWYHdt1U1mp9jlLXd%2BlQUazWIy7l4VwzzOJQ%2F6P5XW7de5agjjz4k0nUFyofJUqChBQvkr1yt2udnL52TkDs5s845TKW%2BY1Pkcxg3s%2F0qFVdP6cuPD2slx0mOXQyi5JtisznRLpsPpiQ%2FUrCPiM8LYg3dnUlHhpPQ02dk3lL2Y1VTQndQn3Q7HFXtkPqYfX6dyHhQFE5E%2FRqrz6pW23eETRiElfPdg8%2BS5rh%2FVzQRE%2FBdT%2BJVZAJM9BcGkK63k5%2Bb99E5HBeHzdMnTpmWyNS%2BHU7hoOtDQMdptDbqAhEv72NkMDerE1todsDFNkeSS%2BQcMKatUgYQRWDbh7jE4X2W6zwwbsINFQUtZE2KkyJD5uJe5dAqh2tB%2Fs%2BxMs%2BAJNTf0wMgjjcAn3LK9WFfn3s2WsWPoqHUrJFTl3ZvjZho2MYkjqjBfyv5HqXKsVgyJYvGFtEqZldbg993wDnUBP8ZfYJWTyqDPX48PMXxZ3RxqoNaAjAclJye1GJl93GimiiYLMOG7jr0GOqUBYQZ002p%2FGkaWk7X0SB3QCzGZocBapbqZy3jkuGMRlKdF7d4boGQMmvYS024%2FC7vJeuZoVpubq7IHFxlFYDEsubslRCIvPbfLqg3Mwt8jTWaxo19C5WjUkndkZbwMPAUL%2FGAZdz0IIW068Md1jKCR7i4L6VnuuChIquq8dz4ChS3PwIg63syykbLMhFG4POLyCzRyFOyw5XCVFXkUchNVx1eijCXD&X-Amz-Signature=601412b909c7a550af7359ae2b1939f5042f7a7f2bc9c8f042009885e059796c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKK46SL4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFfDsofh1GYiMdoA7gan2%2F%2FUP0%2BnQ4t0oe%2Bz5Fr1d0fQIgVLKCACpvrh2MTLcnCRWazgepvWzaooN9v3JjQpXwZjAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAUGr0F3owwlyaY4WCrcA2kFIfLDj2Oh6P5LCqMkK%2BtIXcK1bIF8Hb36eJWWFzgJCXg17lTYf7qnNUxH5sFf2iSVZougAPOe5lMvrNH7YyGZphvxM4q6cpZdP%2BhGWAQunOQjXhn02Q8YRFSWYHdt1U1mp9jlLXd%2BlQUazWIy7l4VwzzOJQ%2F6P5XW7de5agjjz4k0nUFyofJUqChBQvkr1yt2udnL52TkDs5s845TKW%2BY1Pkcxg3s%2F0qFVdP6cuPD2slx0mOXQyi5JtisznRLpsPpiQ%2FUrCPiM8LYg3dnUlHhpPQ02dk3lL2Y1VTQndQn3Q7HFXtkPqYfX6dyHhQFE5E%2FRqrz6pW23eETRiElfPdg8%2BS5rh%2FVzQRE%2FBdT%2BJVZAJM9BcGkK63k5%2Bb99E5HBeHzdMnTpmWyNS%2BHU7hoOtDQMdptDbqAhEv72NkMDerE1todsDFNkeSS%2BQcMKatUgYQRWDbh7jE4X2W6zwwbsINFQUtZE2KkyJD5uJe5dAqh2tB%2Fs%2BxMs%2BAJNTf0wMgjjcAn3LK9WFfn3s2WsWPoqHUrJFTl3ZvjZho2MYkjqjBfyv5HqXKsVgyJYvGFtEqZldbg993wDnUBP8ZfYJWTyqDPX48PMXxZ3RxqoNaAjAclJye1GJl93GimiiYLMOG7jr0GOqUBYQZ002p%2FGkaWk7X0SB3QCzGZocBapbqZy3jkuGMRlKdF7d4boGQMmvYS024%2FC7vJeuZoVpubq7IHFxlFYDEsubslRCIvPbfLqg3Mwt8jTWaxo19C5WjUkndkZbwMPAUL%2FGAZdz0IIW068Md1jKCR7i4L6VnuuChIquq8dz4ChS3PwIg63syykbLMhFG4POLyCzRyFOyw5XCVFXkUchNVx1eijCXD&X-Amz-Signature=55c39a50596185d8d5e1368752fa19c9a6717a0b632c97ab67c90734ee1ccaf1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKK46SL4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFfDsofh1GYiMdoA7gan2%2F%2FUP0%2BnQ4t0oe%2Bz5Fr1d0fQIgVLKCACpvrh2MTLcnCRWazgepvWzaooN9v3JjQpXwZjAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAUGr0F3owwlyaY4WCrcA2kFIfLDj2Oh6P5LCqMkK%2BtIXcK1bIF8Hb36eJWWFzgJCXg17lTYf7qnNUxH5sFf2iSVZougAPOe5lMvrNH7YyGZphvxM4q6cpZdP%2BhGWAQunOQjXhn02Q8YRFSWYHdt1U1mp9jlLXd%2BlQUazWIy7l4VwzzOJQ%2F6P5XW7de5agjjz4k0nUFyofJUqChBQvkr1yt2udnL52TkDs5s845TKW%2BY1Pkcxg3s%2F0qFVdP6cuPD2slx0mOXQyi5JtisznRLpsPpiQ%2FUrCPiM8LYg3dnUlHhpPQ02dk3lL2Y1VTQndQn3Q7HFXtkPqYfX6dyHhQFE5E%2FRqrz6pW23eETRiElfPdg8%2BS5rh%2FVzQRE%2FBdT%2BJVZAJM9BcGkK63k5%2Bb99E5HBeHzdMnTpmWyNS%2BHU7hoOtDQMdptDbqAhEv72NkMDerE1todsDFNkeSS%2BQcMKatUgYQRWDbh7jE4X2W6zwwbsINFQUtZE2KkyJD5uJe5dAqh2tB%2Fs%2BxMs%2BAJNTf0wMgjjcAn3LK9WFfn3s2WsWPoqHUrJFTl3ZvjZho2MYkjqjBfyv5HqXKsVgyJYvGFtEqZldbg993wDnUBP8ZfYJWTyqDPX48PMXxZ3RxqoNaAjAclJye1GJl93GimiiYLMOG7jr0GOqUBYQZ002p%2FGkaWk7X0SB3QCzGZocBapbqZy3jkuGMRlKdF7d4boGQMmvYS024%2FC7vJeuZoVpubq7IHFxlFYDEsubslRCIvPbfLqg3Mwt8jTWaxo19C5WjUkndkZbwMPAUL%2FGAZdz0IIW068Md1jKCR7i4L6VnuuChIquq8dz4ChS3PwIg63syykbLMhFG4POLyCzRyFOyw5XCVFXkUchNVx1eijCXD&X-Amz-Signature=60e1994f3eccb65959f55762dc5b64e01dfb8f43d0f6f7dc1a8397e49a8d0692&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKK46SL4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFfDsofh1GYiMdoA7gan2%2F%2FUP0%2BnQ4t0oe%2Bz5Fr1d0fQIgVLKCACpvrh2MTLcnCRWazgepvWzaooN9v3JjQpXwZjAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAUGr0F3owwlyaY4WCrcA2kFIfLDj2Oh6P5LCqMkK%2BtIXcK1bIF8Hb36eJWWFzgJCXg17lTYf7qnNUxH5sFf2iSVZougAPOe5lMvrNH7YyGZphvxM4q6cpZdP%2BhGWAQunOQjXhn02Q8YRFSWYHdt1U1mp9jlLXd%2BlQUazWIy7l4VwzzOJQ%2F6P5XW7de5agjjz4k0nUFyofJUqChBQvkr1yt2udnL52TkDs5s845TKW%2BY1Pkcxg3s%2F0qFVdP6cuPD2slx0mOXQyi5JtisznRLpsPpiQ%2FUrCPiM8LYg3dnUlHhpPQ02dk3lL2Y1VTQndQn3Q7HFXtkPqYfX6dyHhQFE5E%2FRqrz6pW23eETRiElfPdg8%2BS5rh%2FVzQRE%2FBdT%2BJVZAJM9BcGkK63k5%2Bb99E5HBeHzdMnTpmWyNS%2BHU7hoOtDQMdptDbqAhEv72NkMDerE1todsDFNkeSS%2BQcMKatUgYQRWDbh7jE4X2W6zwwbsINFQUtZE2KkyJD5uJe5dAqh2tB%2Fs%2BxMs%2BAJNTf0wMgjjcAn3LK9WFfn3s2WsWPoqHUrJFTl3ZvjZho2MYkjqjBfyv5HqXKsVgyJYvGFtEqZldbg993wDnUBP8ZfYJWTyqDPX48PMXxZ3RxqoNaAjAclJye1GJl93GimiiYLMOG7jr0GOqUBYQZ002p%2FGkaWk7X0SB3QCzGZocBapbqZy3jkuGMRlKdF7d4boGQMmvYS024%2FC7vJeuZoVpubq7IHFxlFYDEsubslRCIvPbfLqg3Mwt8jTWaxo19C5WjUkndkZbwMPAUL%2FGAZdz0IIW068Md1jKCR7i4L6VnuuChIquq8dz4ChS3PwIg63syykbLMhFG4POLyCzRyFOyw5XCVFXkUchNVx1eijCXD&X-Amz-Signature=1c4817e80b657b2a6397d977059a1f4666bfb021fd5564c91463ca49180431d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
