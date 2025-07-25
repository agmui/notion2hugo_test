---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWMKL3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHZr%2FOkmpswUYX1YGJHcedkhOnJYFYuZ%2F5DoTHVycASdAiA7pu1p4be9Tg%2B8LS4gDC1fZWihsHcVfZ6EPG2Xpfkv8Cr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGF6AjtSKErHv%2BeQFKtwD419qTZybhXQDWVk9%2FRi76QkuuJCyVVquO6BIT1huHLGzcNbQIQOVKNOV9WIF%2FxmImDXGwT62IaDlz7mBvPpK299YinInJPGkTZzBcj%2FiSTjQ9%2BMCz%2B6ah2xQqpelSrgAu4jggnKIT4VFkEza%2FqpRyoiSaYgjDpd5TWj1zF%2Fl3A44c3P%2F1ImcWPCTOz2ERHwjOuo6slugxuZnYjObei7Dzz2Wglj5au2aF955nUBnJ1nG%2FEi7uZ6ebnrel2a4tGNaEkgleKew6oyFlar1aT3l7e6IStXQ%2By3zl3EFKaHolJRtXYN%2BPGiGGBenD1L%2BaeXqk%2BaBs4t7Ix7HZTEp5rgyP6DnpElIXrKhaSl2FzeaBgj%2BkJ9TS6vIEcBhGaqIE%2Bko7ncOOXJRVx0hT2fyO5AgwOR7qBhuhXHWjPldxSCbz6dkfiQ10piJ%2BYsHwiPVU7SmXoN2FCfJougqUYbu5qOcmICo5wa8YX1dkGj1JY5fwcfuwLGQSkpDyI57hOc71K%2FTctW90SHjh4Vx5PFDYqoZqgXRyGafX0do0dvAgZMaUrYbmWMX44qGwYIRl%2Bp45RthbNDVYlAc5op3ogc87gVXJhQTyOSjC1HodGG5H9KfOf5g6XJ6S1WgLUZnEEIw5byOxAY6pgEArcg8MqPH0bosZ8Of9cwPjtQVDilVlCtOLeI8JBeiEwcv7RgWY32btvwDJfwhH9zTeKrzss2ZJNv25ZXUEM9vFZOk0PhnQZDfxfn7pmWN1KXhdRXIUu6cgv6YcteA4rUuCVvnIzEwTqKBxQ2%2BymXXMxLSO29VDCGJjiktw3rXLk22E97uvliIp4AKfnW1LY5yPNRbU%2BOYOSwW6Xhg9iTVdaBGCh3r&X-Amz-Signature=740c52bfb151e2a530ffc094181a6925d9efe600dcb383d5ba2a4ffde38973f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWMKL3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHZr%2FOkmpswUYX1YGJHcedkhOnJYFYuZ%2F5DoTHVycASdAiA7pu1p4be9Tg%2B8LS4gDC1fZWihsHcVfZ6EPG2Xpfkv8Cr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGF6AjtSKErHv%2BeQFKtwD419qTZybhXQDWVk9%2FRi76QkuuJCyVVquO6BIT1huHLGzcNbQIQOVKNOV9WIF%2FxmImDXGwT62IaDlz7mBvPpK299YinInJPGkTZzBcj%2FiSTjQ9%2BMCz%2B6ah2xQqpelSrgAu4jggnKIT4VFkEza%2FqpRyoiSaYgjDpd5TWj1zF%2Fl3A44c3P%2F1ImcWPCTOz2ERHwjOuo6slugxuZnYjObei7Dzz2Wglj5au2aF955nUBnJ1nG%2FEi7uZ6ebnrel2a4tGNaEkgleKew6oyFlar1aT3l7e6IStXQ%2By3zl3EFKaHolJRtXYN%2BPGiGGBenD1L%2BaeXqk%2BaBs4t7Ix7HZTEp5rgyP6DnpElIXrKhaSl2FzeaBgj%2BkJ9TS6vIEcBhGaqIE%2Bko7ncOOXJRVx0hT2fyO5AgwOR7qBhuhXHWjPldxSCbz6dkfiQ10piJ%2BYsHwiPVU7SmXoN2FCfJougqUYbu5qOcmICo5wa8YX1dkGj1JY5fwcfuwLGQSkpDyI57hOc71K%2FTctW90SHjh4Vx5PFDYqoZqgXRyGafX0do0dvAgZMaUrYbmWMX44qGwYIRl%2Bp45RthbNDVYlAc5op3ogc87gVXJhQTyOSjC1HodGG5H9KfOf5g6XJ6S1WgLUZnEEIw5byOxAY6pgEArcg8MqPH0bosZ8Of9cwPjtQVDilVlCtOLeI8JBeiEwcv7RgWY32btvwDJfwhH9zTeKrzss2ZJNv25ZXUEM9vFZOk0PhnQZDfxfn7pmWN1KXhdRXIUu6cgv6YcteA4rUuCVvnIzEwTqKBxQ2%2BymXXMxLSO29VDCGJjiktw3rXLk22E97uvliIp4AKfnW1LY5yPNRbU%2BOYOSwW6Xhg9iTVdaBGCh3r&X-Amz-Signature=53f0ef23a4bc8a430092447ec10c8056a0fb8df9b233813bfbac49a7bff1737a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWMKL3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHZr%2FOkmpswUYX1YGJHcedkhOnJYFYuZ%2F5DoTHVycASdAiA7pu1p4be9Tg%2B8LS4gDC1fZWihsHcVfZ6EPG2Xpfkv8Cr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGF6AjtSKErHv%2BeQFKtwD419qTZybhXQDWVk9%2FRi76QkuuJCyVVquO6BIT1huHLGzcNbQIQOVKNOV9WIF%2FxmImDXGwT62IaDlz7mBvPpK299YinInJPGkTZzBcj%2FiSTjQ9%2BMCz%2B6ah2xQqpelSrgAu4jggnKIT4VFkEza%2FqpRyoiSaYgjDpd5TWj1zF%2Fl3A44c3P%2F1ImcWPCTOz2ERHwjOuo6slugxuZnYjObei7Dzz2Wglj5au2aF955nUBnJ1nG%2FEi7uZ6ebnrel2a4tGNaEkgleKew6oyFlar1aT3l7e6IStXQ%2By3zl3EFKaHolJRtXYN%2BPGiGGBenD1L%2BaeXqk%2BaBs4t7Ix7HZTEp5rgyP6DnpElIXrKhaSl2FzeaBgj%2BkJ9TS6vIEcBhGaqIE%2Bko7ncOOXJRVx0hT2fyO5AgwOR7qBhuhXHWjPldxSCbz6dkfiQ10piJ%2BYsHwiPVU7SmXoN2FCfJougqUYbu5qOcmICo5wa8YX1dkGj1JY5fwcfuwLGQSkpDyI57hOc71K%2FTctW90SHjh4Vx5PFDYqoZqgXRyGafX0do0dvAgZMaUrYbmWMX44qGwYIRl%2Bp45RthbNDVYlAc5op3ogc87gVXJhQTyOSjC1HodGG5H9KfOf5g6XJ6S1WgLUZnEEIw5byOxAY6pgEArcg8MqPH0bosZ8Of9cwPjtQVDilVlCtOLeI8JBeiEwcv7RgWY32btvwDJfwhH9zTeKrzss2ZJNv25ZXUEM9vFZOk0PhnQZDfxfn7pmWN1KXhdRXIUu6cgv6YcteA4rUuCVvnIzEwTqKBxQ2%2BymXXMxLSO29VDCGJjiktw3rXLk22E97uvliIp4AKfnW1LY5yPNRbU%2BOYOSwW6Xhg9iTVdaBGCh3r&X-Amz-Signature=ee78618fe392ed1119a54091aa8fc7a36225f3dea8a1472c6038afb9a1877611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWMKL3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHZr%2FOkmpswUYX1YGJHcedkhOnJYFYuZ%2F5DoTHVycASdAiA7pu1p4be9Tg%2B8LS4gDC1fZWihsHcVfZ6EPG2Xpfkv8Cr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGF6AjtSKErHv%2BeQFKtwD419qTZybhXQDWVk9%2FRi76QkuuJCyVVquO6BIT1huHLGzcNbQIQOVKNOV9WIF%2FxmImDXGwT62IaDlz7mBvPpK299YinInJPGkTZzBcj%2FiSTjQ9%2BMCz%2B6ah2xQqpelSrgAu4jggnKIT4VFkEza%2FqpRyoiSaYgjDpd5TWj1zF%2Fl3A44c3P%2F1ImcWPCTOz2ERHwjOuo6slugxuZnYjObei7Dzz2Wglj5au2aF955nUBnJ1nG%2FEi7uZ6ebnrel2a4tGNaEkgleKew6oyFlar1aT3l7e6IStXQ%2By3zl3EFKaHolJRtXYN%2BPGiGGBenD1L%2BaeXqk%2BaBs4t7Ix7HZTEp5rgyP6DnpElIXrKhaSl2FzeaBgj%2BkJ9TS6vIEcBhGaqIE%2Bko7ncOOXJRVx0hT2fyO5AgwOR7qBhuhXHWjPldxSCbz6dkfiQ10piJ%2BYsHwiPVU7SmXoN2FCfJougqUYbu5qOcmICo5wa8YX1dkGj1JY5fwcfuwLGQSkpDyI57hOc71K%2FTctW90SHjh4Vx5PFDYqoZqgXRyGafX0do0dvAgZMaUrYbmWMX44qGwYIRl%2Bp45RthbNDVYlAc5op3ogc87gVXJhQTyOSjC1HodGG5H9KfOf5g6XJ6S1WgLUZnEEIw5byOxAY6pgEArcg8MqPH0bosZ8Of9cwPjtQVDilVlCtOLeI8JBeiEwcv7RgWY32btvwDJfwhH9zTeKrzss2ZJNv25ZXUEM9vFZOk0PhnQZDfxfn7pmWN1KXhdRXIUu6cgv6YcteA4rUuCVvnIzEwTqKBxQ2%2BymXXMxLSO29VDCGJjiktw3rXLk22E97uvliIp4AKfnW1LY5yPNRbU%2BOYOSwW6Xhg9iTVdaBGCh3r&X-Amz-Signature=b8c7833821052111de1f9dfcdce8c11b75ca1a9347daba51f913107e5ecea4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWMKL3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHZr%2FOkmpswUYX1YGJHcedkhOnJYFYuZ%2F5DoTHVycASdAiA7pu1p4be9Tg%2B8LS4gDC1fZWihsHcVfZ6EPG2Xpfkv8Cr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGF6AjtSKErHv%2BeQFKtwD419qTZybhXQDWVk9%2FRi76QkuuJCyVVquO6BIT1huHLGzcNbQIQOVKNOV9WIF%2FxmImDXGwT62IaDlz7mBvPpK299YinInJPGkTZzBcj%2FiSTjQ9%2BMCz%2B6ah2xQqpelSrgAu4jggnKIT4VFkEza%2FqpRyoiSaYgjDpd5TWj1zF%2Fl3A44c3P%2F1ImcWPCTOz2ERHwjOuo6slugxuZnYjObei7Dzz2Wglj5au2aF955nUBnJ1nG%2FEi7uZ6ebnrel2a4tGNaEkgleKew6oyFlar1aT3l7e6IStXQ%2By3zl3EFKaHolJRtXYN%2BPGiGGBenD1L%2BaeXqk%2BaBs4t7Ix7HZTEp5rgyP6DnpElIXrKhaSl2FzeaBgj%2BkJ9TS6vIEcBhGaqIE%2Bko7ncOOXJRVx0hT2fyO5AgwOR7qBhuhXHWjPldxSCbz6dkfiQ10piJ%2BYsHwiPVU7SmXoN2FCfJougqUYbu5qOcmICo5wa8YX1dkGj1JY5fwcfuwLGQSkpDyI57hOc71K%2FTctW90SHjh4Vx5PFDYqoZqgXRyGafX0do0dvAgZMaUrYbmWMX44qGwYIRl%2Bp45RthbNDVYlAc5op3ogc87gVXJhQTyOSjC1HodGG5H9KfOf5g6XJ6S1WgLUZnEEIw5byOxAY6pgEArcg8MqPH0bosZ8Of9cwPjtQVDilVlCtOLeI8JBeiEwcv7RgWY32btvwDJfwhH9zTeKrzss2ZJNv25ZXUEM9vFZOk0PhnQZDfxfn7pmWN1KXhdRXIUu6cgv6YcteA4rUuCVvnIzEwTqKBxQ2%2BymXXMxLSO29VDCGJjiktw3rXLk22E97uvliIp4AKfnW1LY5yPNRbU%2BOYOSwW6Xhg9iTVdaBGCh3r&X-Amz-Signature=e4625b53f5de8924d0279e42a06c57c6480479f5fe2abbd29fcdcf542f0161aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWMKL3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHZr%2FOkmpswUYX1YGJHcedkhOnJYFYuZ%2F5DoTHVycASdAiA7pu1p4be9Tg%2B8LS4gDC1fZWihsHcVfZ6EPG2Xpfkv8Cr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGF6AjtSKErHv%2BeQFKtwD419qTZybhXQDWVk9%2FRi76QkuuJCyVVquO6BIT1huHLGzcNbQIQOVKNOV9WIF%2FxmImDXGwT62IaDlz7mBvPpK299YinInJPGkTZzBcj%2FiSTjQ9%2BMCz%2B6ah2xQqpelSrgAu4jggnKIT4VFkEza%2FqpRyoiSaYgjDpd5TWj1zF%2Fl3A44c3P%2F1ImcWPCTOz2ERHwjOuo6slugxuZnYjObei7Dzz2Wglj5au2aF955nUBnJ1nG%2FEi7uZ6ebnrel2a4tGNaEkgleKew6oyFlar1aT3l7e6IStXQ%2By3zl3EFKaHolJRtXYN%2BPGiGGBenD1L%2BaeXqk%2BaBs4t7Ix7HZTEp5rgyP6DnpElIXrKhaSl2FzeaBgj%2BkJ9TS6vIEcBhGaqIE%2Bko7ncOOXJRVx0hT2fyO5AgwOR7qBhuhXHWjPldxSCbz6dkfiQ10piJ%2BYsHwiPVU7SmXoN2FCfJougqUYbu5qOcmICo5wa8YX1dkGj1JY5fwcfuwLGQSkpDyI57hOc71K%2FTctW90SHjh4Vx5PFDYqoZqgXRyGafX0do0dvAgZMaUrYbmWMX44qGwYIRl%2Bp45RthbNDVYlAc5op3ogc87gVXJhQTyOSjC1HodGG5H9KfOf5g6XJ6S1WgLUZnEEIw5byOxAY6pgEArcg8MqPH0bosZ8Of9cwPjtQVDilVlCtOLeI8JBeiEwcv7RgWY32btvwDJfwhH9zTeKrzss2ZJNv25ZXUEM9vFZOk0PhnQZDfxfn7pmWN1KXhdRXIUu6cgv6YcteA4rUuCVvnIzEwTqKBxQ2%2BymXXMxLSO29VDCGJjiktw3rXLk22E97uvliIp4AKfnW1LY5yPNRbU%2BOYOSwW6Xhg9iTVdaBGCh3r&X-Amz-Signature=7b354e1bc83956537b5cc5845e6c0cc600655a5eece6994ff72ca8f77a87efa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWMKL3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHZr%2FOkmpswUYX1YGJHcedkhOnJYFYuZ%2F5DoTHVycASdAiA7pu1p4be9Tg%2B8LS4gDC1fZWihsHcVfZ6EPG2Xpfkv8Cr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGF6AjtSKErHv%2BeQFKtwD419qTZybhXQDWVk9%2FRi76QkuuJCyVVquO6BIT1huHLGzcNbQIQOVKNOV9WIF%2FxmImDXGwT62IaDlz7mBvPpK299YinInJPGkTZzBcj%2FiSTjQ9%2BMCz%2B6ah2xQqpelSrgAu4jggnKIT4VFkEza%2FqpRyoiSaYgjDpd5TWj1zF%2Fl3A44c3P%2F1ImcWPCTOz2ERHwjOuo6slugxuZnYjObei7Dzz2Wglj5au2aF955nUBnJ1nG%2FEi7uZ6ebnrel2a4tGNaEkgleKew6oyFlar1aT3l7e6IStXQ%2By3zl3EFKaHolJRtXYN%2BPGiGGBenD1L%2BaeXqk%2BaBs4t7Ix7HZTEp5rgyP6DnpElIXrKhaSl2FzeaBgj%2BkJ9TS6vIEcBhGaqIE%2Bko7ncOOXJRVx0hT2fyO5AgwOR7qBhuhXHWjPldxSCbz6dkfiQ10piJ%2BYsHwiPVU7SmXoN2FCfJougqUYbu5qOcmICo5wa8YX1dkGj1JY5fwcfuwLGQSkpDyI57hOc71K%2FTctW90SHjh4Vx5PFDYqoZqgXRyGafX0do0dvAgZMaUrYbmWMX44qGwYIRl%2Bp45RthbNDVYlAc5op3ogc87gVXJhQTyOSjC1HodGG5H9KfOf5g6XJ6S1WgLUZnEEIw5byOxAY6pgEArcg8MqPH0bosZ8Of9cwPjtQVDilVlCtOLeI8JBeiEwcv7RgWY32btvwDJfwhH9zTeKrzss2ZJNv25ZXUEM9vFZOk0PhnQZDfxfn7pmWN1KXhdRXIUu6cgv6YcteA4rUuCVvnIzEwTqKBxQ2%2BymXXMxLSO29VDCGJjiktw3rXLk22E97uvliIp4AKfnW1LY5yPNRbU%2BOYOSwW6Xhg9iTVdaBGCh3r&X-Amz-Signature=9e23521c110da381f17b0a5d5ffaa382231a247bcf06f4b5ee00c74c3b9c70d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
