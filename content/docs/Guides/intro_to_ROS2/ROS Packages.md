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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7JACHY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs4h4uSBccPN%2FvM6rnUUXx4JZTChwBM%2F2YbngxLSiGwIgNnujF%2Bgz7zVT0Hw1ER%2BXVxQvMmDeL5oXLybU8APsIaMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYWoXIIR%2BN%2BvYl9zSrcAzMN9RUMRJmfX0tejKhQIpRVBbQx4XYesposrKlpsUhZ7IhAqM3%2Fy3GXq5TfcUq5nONY4hjc5Ow0XNAXz2DzOXWbaGDkzfsO8P8i%2FppO%2FpYlAAgJVBJ5MkeUdzsXuAwVPFokU0%2BTa6RtX3A7GD601%2BBEbaacdCLtzhl36XplVNhCAyNbgG3u%2F6pZviLpmG4daKk7YkfjU9yYZNGRGBpltvpoXlR3uzeg1HTChNetzvN9usnoD8X%2B%2FgtSu3GYT6lhJWa%2FgJwATHVZiCzZtUg0ROAKxBh2r%2F6I%2F32LD2qHomg8UlrvyZSAX2UKu9VM4AN2n%2FTyrOwlb7nQk48eMi%2BUsWxd8ifMlFRSJa2ZFggB%2BB1zOxFMYOgwbUoevujJO9WiViI1EGwFGZbmmlGm7izo1E5Tk7TetGyYVq48%2BLQTwSHF%2F%2BjRTsJt7v%2FWlTTOD9m7Ww3xGSEFTvm6Q37gJjdlAieY1uLE%2F8IGI6VYYcAt3YorPL2Ngtop5fEJXGI7YWa4AbSr2LbFd8Sio0gs22DjRYBOjylKsP3N%2F6575TcQGjLCxlE%2F01zQQqowj6nsXyH%2FdIs4dExq2SkGSa18QQiSrgqPtL9K2VBIJXua5TSrM%2BQRaVpgkJKT%2FlWknggeMNC9%2BMAGOqUBF5dHFfvMy7UceDIRiFMNMSCasveE8XDj2huWeMdG8dhTsA27kXcEw%2FqVG6fKWvyv882OjrljWvsl6%2Bne97Mc%2FRz3ussl%2FHORX6IoLHYffMozJwTX1LcUTNcf9eYzj4Gb9d5yDbijoHNdVrYJqT%2Ff5mc7AUONayY0LiUJ5y1HggiM9o0Q%2Fy2NGrP5PAD6K0ISVIYtYQ2TKo%2BlRLP%2F8wbs9JGuBqLD&X-Amz-Signature=daab852ca250011a3ec219ba96fd9dd402cd2d6cd21534acdba2d3857cc1a64f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7JACHY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs4h4uSBccPN%2FvM6rnUUXx4JZTChwBM%2F2YbngxLSiGwIgNnujF%2Bgz7zVT0Hw1ER%2BXVxQvMmDeL5oXLybU8APsIaMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYWoXIIR%2BN%2BvYl9zSrcAzMN9RUMRJmfX0tejKhQIpRVBbQx4XYesposrKlpsUhZ7IhAqM3%2Fy3GXq5TfcUq5nONY4hjc5Ow0XNAXz2DzOXWbaGDkzfsO8P8i%2FppO%2FpYlAAgJVBJ5MkeUdzsXuAwVPFokU0%2BTa6RtX3A7GD601%2BBEbaacdCLtzhl36XplVNhCAyNbgG3u%2F6pZviLpmG4daKk7YkfjU9yYZNGRGBpltvpoXlR3uzeg1HTChNetzvN9usnoD8X%2B%2FgtSu3GYT6lhJWa%2FgJwATHVZiCzZtUg0ROAKxBh2r%2F6I%2F32LD2qHomg8UlrvyZSAX2UKu9VM4AN2n%2FTyrOwlb7nQk48eMi%2BUsWxd8ifMlFRSJa2ZFggB%2BB1zOxFMYOgwbUoevujJO9WiViI1EGwFGZbmmlGm7izo1E5Tk7TetGyYVq48%2BLQTwSHF%2F%2BjRTsJt7v%2FWlTTOD9m7Ww3xGSEFTvm6Q37gJjdlAieY1uLE%2F8IGI6VYYcAt3YorPL2Ngtop5fEJXGI7YWa4AbSr2LbFd8Sio0gs22DjRYBOjylKsP3N%2F6575TcQGjLCxlE%2F01zQQqowj6nsXyH%2FdIs4dExq2SkGSa18QQiSrgqPtL9K2VBIJXua5TSrM%2BQRaVpgkJKT%2FlWknggeMNC9%2BMAGOqUBF5dHFfvMy7UceDIRiFMNMSCasveE8XDj2huWeMdG8dhTsA27kXcEw%2FqVG6fKWvyv882OjrljWvsl6%2Bne97Mc%2FRz3ussl%2FHORX6IoLHYffMozJwTX1LcUTNcf9eYzj4Gb9d5yDbijoHNdVrYJqT%2Ff5mc7AUONayY0LiUJ5y1HggiM9o0Q%2Fy2NGrP5PAD6K0ISVIYtYQ2TKo%2BlRLP%2F8wbs9JGuBqLD&X-Amz-Signature=4859ff4c76b7a54d9ad5e41e04a3bb32a3a14a361f6dea85f36d78844fdfc05e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7JACHY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs4h4uSBccPN%2FvM6rnUUXx4JZTChwBM%2F2YbngxLSiGwIgNnujF%2Bgz7zVT0Hw1ER%2BXVxQvMmDeL5oXLybU8APsIaMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYWoXIIR%2BN%2BvYl9zSrcAzMN9RUMRJmfX0tejKhQIpRVBbQx4XYesposrKlpsUhZ7IhAqM3%2Fy3GXq5TfcUq5nONY4hjc5Ow0XNAXz2DzOXWbaGDkzfsO8P8i%2FppO%2FpYlAAgJVBJ5MkeUdzsXuAwVPFokU0%2BTa6RtX3A7GD601%2BBEbaacdCLtzhl36XplVNhCAyNbgG3u%2F6pZviLpmG4daKk7YkfjU9yYZNGRGBpltvpoXlR3uzeg1HTChNetzvN9usnoD8X%2B%2FgtSu3GYT6lhJWa%2FgJwATHVZiCzZtUg0ROAKxBh2r%2F6I%2F32LD2qHomg8UlrvyZSAX2UKu9VM4AN2n%2FTyrOwlb7nQk48eMi%2BUsWxd8ifMlFRSJa2ZFggB%2BB1zOxFMYOgwbUoevujJO9WiViI1EGwFGZbmmlGm7izo1E5Tk7TetGyYVq48%2BLQTwSHF%2F%2BjRTsJt7v%2FWlTTOD9m7Ww3xGSEFTvm6Q37gJjdlAieY1uLE%2F8IGI6VYYcAt3YorPL2Ngtop5fEJXGI7YWa4AbSr2LbFd8Sio0gs22DjRYBOjylKsP3N%2F6575TcQGjLCxlE%2F01zQQqowj6nsXyH%2FdIs4dExq2SkGSa18QQiSrgqPtL9K2VBIJXua5TSrM%2BQRaVpgkJKT%2FlWknggeMNC9%2BMAGOqUBF5dHFfvMy7UceDIRiFMNMSCasveE8XDj2huWeMdG8dhTsA27kXcEw%2FqVG6fKWvyv882OjrljWvsl6%2Bne97Mc%2FRz3ussl%2FHORX6IoLHYffMozJwTX1LcUTNcf9eYzj4Gb9d5yDbijoHNdVrYJqT%2Ff5mc7AUONayY0LiUJ5y1HggiM9o0Q%2Fy2NGrP5PAD6K0ISVIYtYQ2TKo%2BlRLP%2F8wbs9JGuBqLD&X-Amz-Signature=06ed1ce6ed93a471ddf183cb4f2229e047d69e222f8c4e1bb096787dbb7da706&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7JACHY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs4h4uSBccPN%2FvM6rnUUXx4JZTChwBM%2F2YbngxLSiGwIgNnujF%2Bgz7zVT0Hw1ER%2BXVxQvMmDeL5oXLybU8APsIaMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYWoXIIR%2BN%2BvYl9zSrcAzMN9RUMRJmfX0tejKhQIpRVBbQx4XYesposrKlpsUhZ7IhAqM3%2Fy3GXq5TfcUq5nONY4hjc5Ow0XNAXz2DzOXWbaGDkzfsO8P8i%2FppO%2FpYlAAgJVBJ5MkeUdzsXuAwVPFokU0%2BTa6RtX3A7GD601%2BBEbaacdCLtzhl36XplVNhCAyNbgG3u%2F6pZviLpmG4daKk7YkfjU9yYZNGRGBpltvpoXlR3uzeg1HTChNetzvN9usnoD8X%2B%2FgtSu3GYT6lhJWa%2FgJwATHVZiCzZtUg0ROAKxBh2r%2F6I%2F32LD2qHomg8UlrvyZSAX2UKu9VM4AN2n%2FTyrOwlb7nQk48eMi%2BUsWxd8ifMlFRSJa2ZFggB%2BB1zOxFMYOgwbUoevujJO9WiViI1EGwFGZbmmlGm7izo1E5Tk7TetGyYVq48%2BLQTwSHF%2F%2BjRTsJt7v%2FWlTTOD9m7Ww3xGSEFTvm6Q37gJjdlAieY1uLE%2F8IGI6VYYcAt3YorPL2Ngtop5fEJXGI7YWa4AbSr2LbFd8Sio0gs22DjRYBOjylKsP3N%2F6575TcQGjLCxlE%2F01zQQqowj6nsXyH%2FdIs4dExq2SkGSa18QQiSrgqPtL9K2VBIJXua5TSrM%2BQRaVpgkJKT%2FlWknggeMNC9%2BMAGOqUBF5dHFfvMy7UceDIRiFMNMSCasveE8XDj2huWeMdG8dhTsA27kXcEw%2FqVG6fKWvyv882OjrljWvsl6%2Bne97Mc%2FRz3ussl%2FHORX6IoLHYffMozJwTX1LcUTNcf9eYzj4Gb9d5yDbijoHNdVrYJqT%2Ff5mc7AUONayY0LiUJ5y1HggiM9o0Q%2Fy2NGrP5PAD6K0ISVIYtYQ2TKo%2BlRLP%2F8wbs9JGuBqLD&X-Amz-Signature=0859bd4b5ecae4810d50ffb2c3b51b93e8686784fed522cbead9edff7c89b446&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7JACHY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs4h4uSBccPN%2FvM6rnUUXx4JZTChwBM%2F2YbngxLSiGwIgNnujF%2Bgz7zVT0Hw1ER%2BXVxQvMmDeL5oXLybU8APsIaMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYWoXIIR%2BN%2BvYl9zSrcAzMN9RUMRJmfX0tejKhQIpRVBbQx4XYesposrKlpsUhZ7IhAqM3%2Fy3GXq5TfcUq5nONY4hjc5Ow0XNAXz2DzOXWbaGDkzfsO8P8i%2FppO%2FpYlAAgJVBJ5MkeUdzsXuAwVPFokU0%2BTa6RtX3A7GD601%2BBEbaacdCLtzhl36XplVNhCAyNbgG3u%2F6pZviLpmG4daKk7YkfjU9yYZNGRGBpltvpoXlR3uzeg1HTChNetzvN9usnoD8X%2B%2FgtSu3GYT6lhJWa%2FgJwATHVZiCzZtUg0ROAKxBh2r%2F6I%2F32LD2qHomg8UlrvyZSAX2UKu9VM4AN2n%2FTyrOwlb7nQk48eMi%2BUsWxd8ifMlFRSJa2ZFggB%2BB1zOxFMYOgwbUoevujJO9WiViI1EGwFGZbmmlGm7izo1E5Tk7TetGyYVq48%2BLQTwSHF%2F%2BjRTsJt7v%2FWlTTOD9m7Ww3xGSEFTvm6Q37gJjdlAieY1uLE%2F8IGI6VYYcAt3YorPL2Ngtop5fEJXGI7YWa4AbSr2LbFd8Sio0gs22DjRYBOjylKsP3N%2F6575TcQGjLCxlE%2F01zQQqowj6nsXyH%2FdIs4dExq2SkGSa18QQiSrgqPtL9K2VBIJXua5TSrM%2BQRaVpgkJKT%2FlWknggeMNC9%2BMAGOqUBF5dHFfvMy7UceDIRiFMNMSCasveE8XDj2huWeMdG8dhTsA27kXcEw%2FqVG6fKWvyv882OjrljWvsl6%2Bne97Mc%2FRz3ussl%2FHORX6IoLHYffMozJwTX1LcUTNcf9eYzj4Gb9d5yDbijoHNdVrYJqT%2Ff5mc7AUONayY0LiUJ5y1HggiM9o0Q%2Fy2NGrP5PAD6K0ISVIYtYQ2TKo%2BlRLP%2F8wbs9JGuBqLD&X-Amz-Signature=966892cb574fce4c4319b5fc233cdcb6ea2fff4639b96f86f6cd5306f0d0cbd9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7JACHY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs4h4uSBccPN%2FvM6rnUUXx4JZTChwBM%2F2YbngxLSiGwIgNnujF%2Bgz7zVT0Hw1ER%2BXVxQvMmDeL5oXLybU8APsIaMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYWoXIIR%2BN%2BvYl9zSrcAzMN9RUMRJmfX0tejKhQIpRVBbQx4XYesposrKlpsUhZ7IhAqM3%2Fy3GXq5TfcUq5nONY4hjc5Ow0XNAXz2DzOXWbaGDkzfsO8P8i%2FppO%2FpYlAAgJVBJ5MkeUdzsXuAwVPFokU0%2BTa6RtX3A7GD601%2BBEbaacdCLtzhl36XplVNhCAyNbgG3u%2F6pZviLpmG4daKk7YkfjU9yYZNGRGBpltvpoXlR3uzeg1HTChNetzvN9usnoD8X%2B%2FgtSu3GYT6lhJWa%2FgJwATHVZiCzZtUg0ROAKxBh2r%2F6I%2F32LD2qHomg8UlrvyZSAX2UKu9VM4AN2n%2FTyrOwlb7nQk48eMi%2BUsWxd8ifMlFRSJa2ZFggB%2BB1zOxFMYOgwbUoevujJO9WiViI1EGwFGZbmmlGm7izo1E5Tk7TetGyYVq48%2BLQTwSHF%2F%2BjRTsJt7v%2FWlTTOD9m7Ww3xGSEFTvm6Q37gJjdlAieY1uLE%2F8IGI6VYYcAt3YorPL2Ngtop5fEJXGI7YWa4AbSr2LbFd8Sio0gs22DjRYBOjylKsP3N%2F6575TcQGjLCxlE%2F01zQQqowj6nsXyH%2FdIs4dExq2SkGSa18QQiSrgqPtL9K2VBIJXua5TSrM%2BQRaVpgkJKT%2FlWknggeMNC9%2BMAGOqUBF5dHFfvMy7UceDIRiFMNMSCasveE8XDj2huWeMdG8dhTsA27kXcEw%2FqVG6fKWvyv882OjrljWvsl6%2Bne97Mc%2FRz3ussl%2FHORX6IoLHYffMozJwTX1LcUTNcf9eYzj4Gb9d5yDbijoHNdVrYJqT%2Ff5mc7AUONayY0LiUJ5y1HggiM9o0Q%2Fy2NGrP5PAD6K0ISVIYtYQ2TKo%2BlRLP%2F8wbs9JGuBqLD&X-Amz-Signature=b6a8bded009554ac802e23a078cfd6b630c58c4182945cb4878cfe47b767e000&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7JACHY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs4h4uSBccPN%2FvM6rnUUXx4JZTChwBM%2F2YbngxLSiGwIgNnujF%2Bgz7zVT0Hw1ER%2BXVxQvMmDeL5oXLybU8APsIaMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYWoXIIR%2BN%2BvYl9zSrcAzMN9RUMRJmfX0tejKhQIpRVBbQx4XYesposrKlpsUhZ7IhAqM3%2Fy3GXq5TfcUq5nONY4hjc5Ow0XNAXz2DzOXWbaGDkzfsO8P8i%2FppO%2FpYlAAgJVBJ5MkeUdzsXuAwVPFokU0%2BTa6RtX3A7GD601%2BBEbaacdCLtzhl36XplVNhCAyNbgG3u%2F6pZviLpmG4daKk7YkfjU9yYZNGRGBpltvpoXlR3uzeg1HTChNetzvN9usnoD8X%2B%2FgtSu3GYT6lhJWa%2FgJwATHVZiCzZtUg0ROAKxBh2r%2F6I%2F32LD2qHomg8UlrvyZSAX2UKu9VM4AN2n%2FTyrOwlb7nQk48eMi%2BUsWxd8ifMlFRSJa2ZFggB%2BB1zOxFMYOgwbUoevujJO9WiViI1EGwFGZbmmlGm7izo1E5Tk7TetGyYVq48%2BLQTwSHF%2F%2BjRTsJt7v%2FWlTTOD9m7Ww3xGSEFTvm6Q37gJjdlAieY1uLE%2F8IGI6VYYcAt3YorPL2Ngtop5fEJXGI7YWa4AbSr2LbFd8Sio0gs22DjRYBOjylKsP3N%2F6575TcQGjLCxlE%2F01zQQqowj6nsXyH%2FdIs4dExq2SkGSa18QQiSrgqPtL9K2VBIJXua5TSrM%2BQRaVpgkJKT%2FlWknggeMNC9%2BMAGOqUBF5dHFfvMy7UceDIRiFMNMSCasveE8XDj2huWeMdG8dhTsA27kXcEw%2FqVG6fKWvyv882OjrljWvsl6%2Bne97Mc%2FRz3ussl%2FHORX6IoLHYffMozJwTX1LcUTNcf9eYzj4Gb9d5yDbijoHNdVrYJqT%2Ff5mc7AUONayY0LiUJ5y1HggiM9o0Q%2Fy2NGrP5PAD6K0ISVIYtYQ2TKo%2BlRLP%2F8wbs9JGuBqLD&X-Amz-Signature=d52afa480350eaae0942675691bc2c9515c3c045a719762abdb04644ceec8039&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
