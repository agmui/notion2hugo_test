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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7GRU4L%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F3O8%2FOtu6WlzbLdkq6SaGt0zHFgNP87Zk0F9rV6W7wAiEAn0g%2FCbhBaD9GRw1q9KPJy8Zo%2FR7jCMxVMn%2Fw47EghhwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWY7a7U%2BU1FxVTI9CrcA2D8RS0oA7mSCLeQoenka7miF0DHjzSdNRF1yDwZ8gCN4VyxvvjwRecsW0dHntZEyIypLj%2BUxE7T4BarWT4XduwHAIxJTCIx0XljzBUxY4tE5TSuUOzgpow6HT4HBrZglf4fpJUSGkyMhQcDnV0NFUk0j9R2ycTOkeJF8LRbMGdlod41Eif5Y0UYV7LnY6gKnllV7nqUgXag0t%2BXQ22N3AOGlCIIr3gshT4V4YT%2Fo4yK%2FGalWNoUuAt%2F7PQH8pwk5vFofmz%2FqBpFd5oxHyYSGujqQIEX4F%2Be25IylTTgigj%2BU3S3GPyUummCK%2FIo%2B1XQjXaUZt1i8pe%2Bjf9t%2Fb2pQWrTfEBGEteXv9%2FLjnZelMk5PRbSHj1nwX%2B2L14TwjiszZAbQKmUsc2ctiPinWG2pstrMpmJxm5EJcleDbgDoo1Z%2BNIKJD%2B1MX%2FmGEdIs3tAKjwdARIwsWm5QMroA6dV7irnNl%2BdJPhlhuqI8PjI6F%2BHPGiSNk7xeY2Z%2BTELxpeOqPI59kvEUiN07ZUE0rgeOWs22j%2FM8ZMn6e6Wp27qhGhdAEUqrFmh0HxYh2PFMqZtRhfHGFX7X5biXX%2Fqj%2B8PyHtAU%2BC%2BaugbuYuza4U2N%2BW5My55eK4EuEIIrJd0MO2Js8QGOqUBW9JXl6mnB5Vee1eBPhuRFGNQ9HFbRHg41I3Wq1AelFzvhG4cWO7b1jIVSYsDrXK2LL%2FB3EQHNPSA7%2FeBbGoM6PnGxeMmPkQRjX1Oxc62te8gUnn5Un5ZIRIXDyG0dkdPWKUU0GA6kyp8e5zLktGvSt2Ok1SPmu%2FP5rj0K5vY8nS6y1HirKzRlhTFOvhLrOvr5HlULF1%2B8hSOiiUBBxdGniDz%2BpZN&X-Amz-Signature=3b23e425cca64d59f17d3121d2b6f2054f50478929a1d2e8dabf9b191dcacff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7GRU4L%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F3O8%2FOtu6WlzbLdkq6SaGt0zHFgNP87Zk0F9rV6W7wAiEAn0g%2FCbhBaD9GRw1q9KPJy8Zo%2FR7jCMxVMn%2Fw47EghhwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWY7a7U%2BU1FxVTI9CrcA2D8RS0oA7mSCLeQoenka7miF0DHjzSdNRF1yDwZ8gCN4VyxvvjwRecsW0dHntZEyIypLj%2BUxE7T4BarWT4XduwHAIxJTCIx0XljzBUxY4tE5TSuUOzgpow6HT4HBrZglf4fpJUSGkyMhQcDnV0NFUk0j9R2ycTOkeJF8LRbMGdlod41Eif5Y0UYV7LnY6gKnllV7nqUgXag0t%2BXQ22N3AOGlCIIr3gshT4V4YT%2Fo4yK%2FGalWNoUuAt%2F7PQH8pwk5vFofmz%2FqBpFd5oxHyYSGujqQIEX4F%2Be25IylTTgigj%2BU3S3GPyUummCK%2FIo%2B1XQjXaUZt1i8pe%2Bjf9t%2Fb2pQWrTfEBGEteXv9%2FLjnZelMk5PRbSHj1nwX%2B2L14TwjiszZAbQKmUsc2ctiPinWG2pstrMpmJxm5EJcleDbgDoo1Z%2BNIKJD%2B1MX%2FmGEdIs3tAKjwdARIwsWm5QMroA6dV7irnNl%2BdJPhlhuqI8PjI6F%2BHPGiSNk7xeY2Z%2BTELxpeOqPI59kvEUiN07ZUE0rgeOWs22j%2FM8ZMn6e6Wp27qhGhdAEUqrFmh0HxYh2PFMqZtRhfHGFX7X5biXX%2Fqj%2B8PyHtAU%2BC%2BaugbuYuza4U2N%2BW5My55eK4EuEIIrJd0MO2Js8QGOqUBW9JXl6mnB5Vee1eBPhuRFGNQ9HFbRHg41I3Wq1AelFzvhG4cWO7b1jIVSYsDrXK2LL%2FB3EQHNPSA7%2FeBbGoM6PnGxeMmPkQRjX1Oxc62te8gUnn5Un5ZIRIXDyG0dkdPWKUU0GA6kyp8e5zLktGvSt2Ok1SPmu%2FP5rj0K5vY8nS6y1HirKzRlhTFOvhLrOvr5HlULF1%2B8hSOiiUBBxdGniDz%2BpZN&X-Amz-Signature=addd2e57027aa6296d69423adb73b741ef920dd6827fd93ccc0740ecaa8e673a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7GRU4L%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F3O8%2FOtu6WlzbLdkq6SaGt0zHFgNP87Zk0F9rV6W7wAiEAn0g%2FCbhBaD9GRw1q9KPJy8Zo%2FR7jCMxVMn%2Fw47EghhwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWY7a7U%2BU1FxVTI9CrcA2D8RS0oA7mSCLeQoenka7miF0DHjzSdNRF1yDwZ8gCN4VyxvvjwRecsW0dHntZEyIypLj%2BUxE7T4BarWT4XduwHAIxJTCIx0XljzBUxY4tE5TSuUOzgpow6HT4HBrZglf4fpJUSGkyMhQcDnV0NFUk0j9R2ycTOkeJF8LRbMGdlod41Eif5Y0UYV7LnY6gKnllV7nqUgXag0t%2BXQ22N3AOGlCIIr3gshT4V4YT%2Fo4yK%2FGalWNoUuAt%2F7PQH8pwk5vFofmz%2FqBpFd5oxHyYSGujqQIEX4F%2Be25IylTTgigj%2BU3S3GPyUummCK%2FIo%2B1XQjXaUZt1i8pe%2Bjf9t%2Fb2pQWrTfEBGEteXv9%2FLjnZelMk5PRbSHj1nwX%2B2L14TwjiszZAbQKmUsc2ctiPinWG2pstrMpmJxm5EJcleDbgDoo1Z%2BNIKJD%2B1MX%2FmGEdIs3tAKjwdARIwsWm5QMroA6dV7irnNl%2BdJPhlhuqI8PjI6F%2BHPGiSNk7xeY2Z%2BTELxpeOqPI59kvEUiN07ZUE0rgeOWs22j%2FM8ZMn6e6Wp27qhGhdAEUqrFmh0HxYh2PFMqZtRhfHGFX7X5biXX%2Fqj%2B8PyHtAU%2BC%2BaugbuYuza4U2N%2BW5My55eK4EuEIIrJd0MO2Js8QGOqUBW9JXl6mnB5Vee1eBPhuRFGNQ9HFbRHg41I3Wq1AelFzvhG4cWO7b1jIVSYsDrXK2LL%2FB3EQHNPSA7%2FeBbGoM6PnGxeMmPkQRjX1Oxc62te8gUnn5Un5ZIRIXDyG0dkdPWKUU0GA6kyp8e5zLktGvSt2Ok1SPmu%2FP5rj0K5vY8nS6y1HirKzRlhTFOvhLrOvr5HlULF1%2B8hSOiiUBBxdGniDz%2BpZN&X-Amz-Signature=bac73a69ec3bd2981ff7c8dd13c25ad60a017d3018d2da70bc7fefe8407354f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7GRU4L%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F3O8%2FOtu6WlzbLdkq6SaGt0zHFgNP87Zk0F9rV6W7wAiEAn0g%2FCbhBaD9GRw1q9KPJy8Zo%2FR7jCMxVMn%2Fw47EghhwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWY7a7U%2BU1FxVTI9CrcA2D8RS0oA7mSCLeQoenka7miF0DHjzSdNRF1yDwZ8gCN4VyxvvjwRecsW0dHntZEyIypLj%2BUxE7T4BarWT4XduwHAIxJTCIx0XljzBUxY4tE5TSuUOzgpow6HT4HBrZglf4fpJUSGkyMhQcDnV0NFUk0j9R2ycTOkeJF8LRbMGdlod41Eif5Y0UYV7LnY6gKnllV7nqUgXag0t%2BXQ22N3AOGlCIIr3gshT4V4YT%2Fo4yK%2FGalWNoUuAt%2F7PQH8pwk5vFofmz%2FqBpFd5oxHyYSGujqQIEX4F%2Be25IylTTgigj%2BU3S3GPyUummCK%2FIo%2B1XQjXaUZt1i8pe%2Bjf9t%2Fb2pQWrTfEBGEteXv9%2FLjnZelMk5PRbSHj1nwX%2B2L14TwjiszZAbQKmUsc2ctiPinWG2pstrMpmJxm5EJcleDbgDoo1Z%2BNIKJD%2B1MX%2FmGEdIs3tAKjwdARIwsWm5QMroA6dV7irnNl%2BdJPhlhuqI8PjI6F%2BHPGiSNk7xeY2Z%2BTELxpeOqPI59kvEUiN07ZUE0rgeOWs22j%2FM8ZMn6e6Wp27qhGhdAEUqrFmh0HxYh2PFMqZtRhfHGFX7X5biXX%2Fqj%2B8PyHtAU%2BC%2BaugbuYuza4U2N%2BW5My55eK4EuEIIrJd0MO2Js8QGOqUBW9JXl6mnB5Vee1eBPhuRFGNQ9HFbRHg41I3Wq1AelFzvhG4cWO7b1jIVSYsDrXK2LL%2FB3EQHNPSA7%2FeBbGoM6PnGxeMmPkQRjX1Oxc62te8gUnn5Un5ZIRIXDyG0dkdPWKUU0GA6kyp8e5zLktGvSt2Ok1SPmu%2FP5rj0K5vY8nS6y1HirKzRlhTFOvhLrOvr5HlULF1%2B8hSOiiUBBxdGniDz%2BpZN&X-Amz-Signature=e2d60786771d1b28cb08a6ac6f7c91a81a26726e2a3f3ad575c35ec05da23d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7GRU4L%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F3O8%2FOtu6WlzbLdkq6SaGt0zHFgNP87Zk0F9rV6W7wAiEAn0g%2FCbhBaD9GRw1q9KPJy8Zo%2FR7jCMxVMn%2Fw47EghhwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWY7a7U%2BU1FxVTI9CrcA2D8RS0oA7mSCLeQoenka7miF0DHjzSdNRF1yDwZ8gCN4VyxvvjwRecsW0dHntZEyIypLj%2BUxE7T4BarWT4XduwHAIxJTCIx0XljzBUxY4tE5TSuUOzgpow6HT4HBrZglf4fpJUSGkyMhQcDnV0NFUk0j9R2ycTOkeJF8LRbMGdlod41Eif5Y0UYV7LnY6gKnllV7nqUgXag0t%2BXQ22N3AOGlCIIr3gshT4V4YT%2Fo4yK%2FGalWNoUuAt%2F7PQH8pwk5vFofmz%2FqBpFd5oxHyYSGujqQIEX4F%2Be25IylTTgigj%2BU3S3GPyUummCK%2FIo%2B1XQjXaUZt1i8pe%2Bjf9t%2Fb2pQWrTfEBGEteXv9%2FLjnZelMk5PRbSHj1nwX%2B2L14TwjiszZAbQKmUsc2ctiPinWG2pstrMpmJxm5EJcleDbgDoo1Z%2BNIKJD%2B1MX%2FmGEdIs3tAKjwdARIwsWm5QMroA6dV7irnNl%2BdJPhlhuqI8PjI6F%2BHPGiSNk7xeY2Z%2BTELxpeOqPI59kvEUiN07ZUE0rgeOWs22j%2FM8ZMn6e6Wp27qhGhdAEUqrFmh0HxYh2PFMqZtRhfHGFX7X5biXX%2Fqj%2B8PyHtAU%2BC%2BaugbuYuza4U2N%2BW5My55eK4EuEIIrJd0MO2Js8QGOqUBW9JXl6mnB5Vee1eBPhuRFGNQ9HFbRHg41I3Wq1AelFzvhG4cWO7b1jIVSYsDrXK2LL%2FB3EQHNPSA7%2FeBbGoM6PnGxeMmPkQRjX1Oxc62te8gUnn5Un5ZIRIXDyG0dkdPWKUU0GA6kyp8e5zLktGvSt2Ok1SPmu%2FP5rj0K5vY8nS6y1HirKzRlhTFOvhLrOvr5HlULF1%2B8hSOiiUBBxdGniDz%2BpZN&X-Amz-Signature=c1e7a5e7188198254eff2243437ab967d4878e3fbfb1649f0cb38c8b1c7e5ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7GRU4L%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F3O8%2FOtu6WlzbLdkq6SaGt0zHFgNP87Zk0F9rV6W7wAiEAn0g%2FCbhBaD9GRw1q9KPJy8Zo%2FR7jCMxVMn%2Fw47EghhwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWY7a7U%2BU1FxVTI9CrcA2D8RS0oA7mSCLeQoenka7miF0DHjzSdNRF1yDwZ8gCN4VyxvvjwRecsW0dHntZEyIypLj%2BUxE7T4BarWT4XduwHAIxJTCIx0XljzBUxY4tE5TSuUOzgpow6HT4HBrZglf4fpJUSGkyMhQcDnV0NFUk0j9R2ycTOkeJF8LRbMGdlod41Eif5Y0UYV7LnY6gKnllV7nqUgXag0t%2BXQ22N3AOGlCIIr3gshT4V4YT%2Fo4yK%2FGalWNoUuAt%2F7PQH8pwk5vFofmz%2FqBpFd5oxHyYSGujqQIEX4F%2Be25IylTTgigj%2BU3S3GPyUummCK%2FIo%2B1XQjXaUZt1i8pe%2Bjf9t%2Fb2pQWrTfEBGEteXv9%2FLjnZelMk5PRbSHj1nwX%2B2L14TwjiszZAbQKmUsc2ctiPinWG2pstrMpmJxm5EJcleDbgDoo1Z%2BNIKJD%2B1MX%2FmGEdIs3tAKjwdARIwsWm5QMroA6dV7irnNl%2BdJPhlhuqI8PjI6F%2BHPGiSNk7xeY2Z%2BTELxpeOqPI59kvEUiN07ZUE0rgeOWs22j%2FM8ZMn6e6Wp27qhGhdAEUqrFmh0HxYh2PFMqZtRhfHGFX7X5biXX%2Fqj%2B8PyHtAU%2BC%2BaugbuYuza4U2N%2BW5My55eK4EuEIIrJd0MO2Js8QGOqUBW9JXl6mnB5Vee1eBPhuRFGNQ9HFbRHg41I3Wq1AelFzvhG4cWO7b1jIVSYsDrXK2LL%2FB3EQHNPSA7%2FeBbGoM6PnGxeMmPkQRjX1Oxc62te8gUnn5Un5ZIRIXDyG0dkdPWKUU0GA6kyp8e5zLktGvSt2Ok1SPmu%2FP5rj0K5vY8nS6y1HirKzRlhTFOvhLrOvr5HlULF1%2B8hSOiiUBBxdGniDz%2BpZN&X-Amz-Signature=ec86e7f48d468ecee355955b4bc92dd4aa38a399eb21e411c2971013277ab901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7GRU4L%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F3O8%2FOtu6WlzbLdkq6SaGt0zHFgNP87Zk0F9rV6W7wAiEAn0g%2FCbhBaD9GRw1q9KPJy8Zo%2FR7jCMxVMn%2Fw47EghhwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWY7a7U%2BU1FxVTI9CrcA2D8RS0oA7mSCLeQoenka7miF0DHjzSdNRF1yDwZ8gCN4VyxvvjwRecsW0dHntZEyIypLj%2BUxE7T4BarWT4XduwHAIxJTCIx0XljzBUxY4tE5TSuUOzgpow6HT4HBrZglf4fpJUSGkyMhQcDnV0NFUk0j9R2ycTOkeJF8LRbMGdlod41Eif5Y0UYV7LnY6gKnllV7nqUgXag0t%2BXQ22N3AOGlCIIr3gshT4V4YT%2Fo4yK%2FGalWNoUuAt%2F7PQH8pwk5vFofmz%2FqBpFd5oxHyYSGujqQIEX4F%2Be25IylTTgigj%2BU3S3GPyUummCK%2FIo%2B1XQjXaUZt1i8pe%2Bjf9t%2Fb2pQWrTfEBGEteXv9%2FLjnZelMk5PRbSHj1nwX%2B2L14TwjiszZAbQKmUsc2ctiPinWG2pstrMpmJxm5EJcleDbgDoo1Z%2BNIKJD%2B1MX%2FmGEdIs3tAKjwdARIwsWm5QMroA6dV7irnNl%2BdJPhlhuqI8PjI6F%2BHPGiSNk7xeY2Z%2BTELxpeOqPI59kvEUiN07ZUE0rgeOWs22j%2FM8ZMn6e6Wp27qhGhdAEUqrFmh0HxYh2PFMqZtRhfHGFX7X5biXX%2Fqj%2B8PyHtAU%2BC%2BaugbuYuza4U2N%2BW5My55eK4EuEIIrJd0MO2Js8QGOqUBW9JXl6mnB5Vee1eBPhuRFGNQ9HFbRHg41I3Wq1AelFzvhG4cWO7b1jIVSYsDrXK2LL%2FB3EQHNPSA7%2FeBbGoM6PnGxeMmPkQRjX1Oxc62te8gUnn5Un5ZIRIXDyG0dkdPWKUU0GA6kyp8e5zLktGvSt2Ok1SPmu%2FP5rj0K5vY8nS6y1HirKzRlhTFOvhLrOvr5HlULF1%2B8hSOiiUBBxdGniDz%2BpZN&X-Amz-Signature=cb4ded15df1888b938452be2164104a9f7b9b74f6a1d0eb20be7ed9c525524fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
