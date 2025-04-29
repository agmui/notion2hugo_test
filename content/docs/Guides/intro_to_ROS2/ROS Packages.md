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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73IOJ2Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTcCc7KuDLFNZO9E9PA7nbrXJCk0ij82WthU%2BQcNGj9QIhAM8IN94k5plBd3GVcFFQoVpFFdBo4Gc80cAYhiqJGjS%2BKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIJ13s%2BHH3fLvyM5oq3AMGQxmHEjTDInx8GakyjUVMb376NPIgyDyMOn%2BwEzSlDKsVOwWTv3b7%2Bb3WUH3oZbwqzgI%2BgMdh0oyLhQkKrUZ3W%2Fkeozx6IjT1WZ7CVdGyxavSZypjXpPDf60f6XbLK4wpsvIQBpfwOSRmD%2FJoeerg3dJzAeRm1EDeGM4gNrt2KhCsaOWutzECncX6Cvjt06F6z5cgIdb3pKq5ic6da4qagGUBgTr6XIIAQwB%2BSxoBQ0jPX%2B%2BvXqHSVUdhCdrPxTmVUZryRRcNSFpAwjE72n%2BXpKSTDLDpAuWgNJO%2FJCudnnLTI04a3vLmtzXubxKhpBcC00tI9nwfe8t4LS2Mi%2Bc1cJNj1%2FJtIzr7is%2FoESYm1iMT8wbYMdFiIQqQpTO9x%2FLQ59STB3v2yfFqxna2Q6L%2B9P9LELgpALV3YbJWhvzI1dgakI%2Fl7EVw8%2B2VxoOXn8%2B4%2B7644uF%2Fw7s%2Bhl3pKIlX2oIetEmnlo3ezStNFtBzJcsPlEgUJrosmp6PlfYQZHg00VuJ9qUkpQjMbTHon2g%2BpJGeMrIRSiKBVq7Ovf4Gs7ZkWuqcGBIPSABHUHCP%2FXjzcxV1h81%2FvM%2BtzsCNS2b5SRLeep7vJYNQNkJB1I3iGzcTMJ4DCIVJDhlWeDCvmsHABjqkAebFrvt87QezTY4jUFxNO5x%2BwI5CzvG0mB%2BpU%2FTsFiouepsTErYEYfvhz9MKmT9OU4m0AC4z0qSkHRr3kQCih%2Bqs8DnKxuPiYMvKvamYEZka3lQFXxh6IbnJH%2BMEn0Ofx1WS0vZgwa1iTxovibiD6b2JXi3TgKEs%2FMW62YP%2FaBLxyzjYMzIzYMFzJQ3OgVqGwbRd%2FbpxEMREjeRnkJXH5%2B7fPx3I&X-Amz-Signature=2caec790df0215cb40747817ee00f41101b3426e56ecdb05bbf62866a15ec064&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73IOJ2Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTcCc7KuDLFNZO9E9PA7nbrXJCk0ij82WthU%2BQcNGj9QIhAM8IN94k5plBd3GVcFFQoVpFFdBo4Gc80cAYhiqJGjS%2BKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIJ13s%2BHH3fLvyM5oq3AMGQxmHEjTDInx8GakyjUVMb376NPIgyDyMOn%2BwEzSlDKsVOwWTv3b7%2Bb3WUH3oZbwqzgI%2BgMdh0oyLhQkKrUZ3W%2Fkeozx6IjT1WZ7CVdGyxavSZypjXpPDf60f6XbLK4wpsvIQBpfwOSRmD%2FJoeerg3dJzAeRm1EDeGM4gNrt2KhCsaOWutzECncX6Cvjt06F6z5cgIdb3pKq5ic6da4qagGUBgTr6XIIAQwB%2BSxoBQ0jPX%2B%2BvXqHSVUdhCdrPxTmVUZryRRcNSFpAwjE72n%2BXpKSTDLDpAuWgNJO%2FJCudnnLTI04a3vLmtzXubxKhpBcC00tI9nwfe8t4LS2Mi%2Bc1cJNj1%2FJtIzr7is%2FoESYm1iMT8wbYMdFiIQqQpTO9x%2FLQ59STB3v2yfFqxna2Q6L%2B9P9LELgpALV3YbJWhvzI1dgakI%2Fl7EVw8%2B2VxoOXn8%2B4%2B7644uF%2Fw7s%2Bhl3pKIlX2oIetEmnlo3ezStNFtBzJcsPlEgUJrosmp6PlfYQZHg00VuJ9qUkpQjMbTHon2g%2BpJGeMrIRSiKBVq7Ovf4Gs7ZkWuqcGBIPSABHUHCP%2FXjzcxV1h81%2FvM%2BtzsCNS2b5SRLeep7vJYNQNkJB1I3iGzcTMJ4DCIVJDhlWeDCvmsHABjqkAebFrvt87QezTY4jUFxNO5x%2BwI5CzvG0mB%2BpU%2FTsFiouepsTErYEYfvhz9MKmT9OU4m0AC4z0qSkHRr3kQCih%2Bqs8DnKxuPiYMvKvamYEZka3lQFXxh6IbnJH%2BMEn0Ofx1WS0vZgwa1iTxovibiD6b2JXi3TgKEs%2FMW62YP%2FaBLxyzjYMzIzYMFzJQ3OgVqGwbRd%2FbpxEMREjeRnkJXH5%2B7fPx3I&X-Amz-Signature=24fd1967e4535cd19cdf5545a661bcfdf2137c89a94424d565d851c104fb7452&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73IOJ2Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTcCc7KuDLFNZO9E9PA7nbrXJCk0ij82WthU%2BQcNGj9QIhAM8IN94k5plBd3GVcFFQoVpFFdBo4Gc80cAYhiqJGjS%2BKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIJ13s%2BHH3fLvyM5oq3AMGQxmHEjTDInx8GakyjUVMb376NPIgyDyMOn%2BwEzSlDKsVOwWTv3b7%2Bb3WUH3oZbwqzgI%2BgMdh0oyLhQkKrUZ3W%2Fkeozx6IjT1WZ7CVdGyxavSZypjXpPDf60f6XbLK4wpsvIQBpfwOSRmD%2FJoeerg3dJzAeRm1EDeGM4gNrt2KhCsaOWutzECncX6Cvjt06F6z5cgIdb3pKq5ic6da4qagGUBgTr6XIIAQwB%2BSxoBQ0jPX%2B%2BvXqHSVUdhCdrPxTmVUZryRRcNSFpAwjE72n%2BXpKSTDLDpAuWgNJO%2FJCudnnLTI04a3vLmtzXubxKhpBcC00tI9nwfe8t4LS2Mi%2Bc1cJNj1%2FJtIzr7is%2FoESYm1iMT8wbYMdFiIQqQpTO9x%2FLQ59STB3v2yfFqxna2Q6L%2B9P9LELgpALV3YbJWhvzI1dgakI%2Fl7EVw8%2B2VxoOXn8%2B4%2B7644uF%2Fw7s%2Bhl3pKIlX2oIetEmnlo3ezStNFtBzJcsPlEgUJrosmp6PlfYQZHg00VuJ9qUkpQjMbTHon2g%2BpJGeMrIRSiKBVq7Ovf4Gs7ZkWuqcGBIPSABHUHCP%2FXjzcxV1h81%2FvM%2BtzsCNS2b5SRLeep7vJYNQNkJB1I3iGzcTMJ4DCIVJDhlWeDCvmsHABjqkAebFrvt87QezTY4jUFxNO5x%2BwI5CzvG0mB%2BpU%2FTsFiouepsTErYEYfvhz9MKmT9OU4m0AC4z0qSkHRr3kQCih%2Bqs8DnKxuPiYMvKvamYEZka3lQFXxh6IbnJH%2BMEn0Ofx1WS0vZgwa1iTxovibiD6b2JXi3TgKEs%2FMW62YP%2FaBLxyzjYMzIzYMFzJQ3OgVqGwbRd%2FbpxEMREjeRnkJXH5%2B7fPx3I&X-Amz-Signature=a24a8063842180ef9c3ab919d3afd391f6f1c31bdb820173d43f55fba7035a39&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73IOJ2Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTcCc7KuDLFNZO9E9PA7nbrXJCk0ij82WthU%2BQcNGj9QIhAM8IN94k5plBd3GVcFFQoVpFFdBo4Gc80cAYhiqJGjS%2BKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIJ13s%2BHH3fLvyM5oq3AMGQxmHEjTDInx8GakyjUVMb376NPIgyDyMOn%2BwEzSlDKsVOwWTv3b7%2Bb3WUH3oZbwqzgI%2BgMdh0oyLhQkKrUZ3W%2Fkeozx6IjT1WZ7CVdGyxavSZypjXpPDf60f6XbLK4wpsvIQBpfwOSRmD%2FJoeerg3dJzAeRm1EDeGM4gNrt2KhCsaOWutzECncX6Cvjt06F6z5cgIdb3pKq5ic6da4qagGUBgTr6XIIAQwB%2BSxoBQ0jPX%2B%2BvXqHSVUdhCdrPxTmVUZryRRcNSFpAwjE72n%2BXpKSTDLDpAuWgNJO%2FJCudnnLTI04a3vLmtzXubxKhpBcC00tI9nwfe8t4LS2Mi%2Bc1cJNj1%2FJtIzr7is%2FoESYm1iMT8wbYMdFiIQqQpTO9x%2FLQ59STB3v2yfFqxna2Q6L%2B9P9LELgpALV3YbJWhvzI1dgakI%2Fl7EVw8%2B2VxoOXn8%2B4%2B7644uF%2Fw7s%2Bhl3pKIlX2oIetEmnlo3ezStNFtBzJcsPlEgUJrosmp6PlfYQZHg00VuJ9qUkpQjMbTHon2g%2BpJGeMrIRSiKBVq7Ovf4Gs7ZkWuqcGBIPSABHUHCP%2FXjzcxV1h81%2FvM%2BtzsCNS2b5SRLeep7vJYNQNkJB1I3iGzcTMJ4DCIVJDhlWeDCvmsHABjqkAebFrvt87QezTY4jUFxNO5x%2BwI5CzvG0mB%2BpU%2FTsFiouepsTErYEYfvhz9MKmT9OU4m0AC4z0qSkHRr3kQCih%2Bqs8DnKxuPiYMvKvamYEZka3lQFXxh6IbnJH%2BMEn0Ofx1WS0vZgwa1iTxovibiD6b2JXi3TgKEs%2FMW62YP%2FaBLxyzjYMzIzYMFzJQ3OgVqGwbRd%2FbpxEMREjeRnkJXH5%2B7fPx3I&X-Amz-Signature=cfb0b787572003e8e70a7fd44e38abbb90ae5c5c11be7cfb3b04177d1f54d802&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73IOJ2Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTcCc7KuDLFNZO9E9PA7nbrXJCk0ij82WthU%2BQcNGj9QIhAM8IN94k5plBd3GVcFFQoVpFFdBo4Gc80cAYhiqJGjS%2BKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIJ13s%2BHH3fLvyM5oq3AMGQxmHEjTDInx8GakyjUVMb376NPIgyDyMOn%2BwEzSlDKsVOwWTv3b7%2Bb3WUH3oZbwqzgI%2BgMdh0oyLhQkKrUZ3W%2Fkeozx6IjT1WZ7CVdGyxavSZypjXpPDf60f6XbLK4wpsvIQBpfwOSRmD%2FJoeerg3dJzAeRm1EDeGM4gNrt2KhCsaOWutzECncX6Cvjt06F6z5cgIdb3pKq5ic6da4qagGUBgTr6XIIAQwB%2BSxoBQ0jPX%2B%2BvXqHSVUdhCdrPxTmVUZryRRcNSFpAwjE72n%2BXpKSTDLDpAuWgNJO%2FJCudnnLTI04a3vLmtzXubxKhpBcC00tI9nwfe8t4LS2Mi%2Bc1cJNj1%2FJtIzr7is%2FoESYm1iMT8wbYMdFiIQqQpTO9x%2FLQ59STB3v2yfFqxna2Q6L%2B9P9LELgpALV3YbJWhvzI1dgakI%2Fl7EVw8%2B2VxoOXn8%2B4%2B7644uF%2Fw7s%2Bhl3pKIlX2oIetEmnlo3ezStNFtBzJcsPlEgUJrosmp6PlfYQZHg00VuJ9qUkpQjMbTHon2g%2BpJGeMrIRSiKBVq7Ovf4Gs7ZkWuqcGBIPSABHUHCP%2FXjzcxV1h81%2FvM%2BtzsCNS2b5SRLeep7vJYNQNkJB1I3iGzcTMJ4DCIVJDhlWeDCvmsHABjqkAebFrvt87QezTY4jUFxNO5x%2BwI5CzvG0mB%2BpU%2FTsFiouepsTErYEYfvhz9MKmT9OU4m0AC4z0qSkHRr3kQCih%2Bqs8DnKxuPiYMvKvamYEZka3lQFXxh6IbnJH%2BMEn0Ofx1WS0vZgwa1iTxovibiD6b2JXi3TgKEs%2FMW62YP%2FaBLxyzjYMzIzYMFzJQ3OgVqGwbRd%2FbpxEMREjeRnkJXH5%2B7fPx3I&X-Amz-Signature=5d2b73cfbb5c6d100a72c85cbf6210e70a8bf1652b1927bbeba416f9a2b08990&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73IOJ2Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTcCc7KuDLFNZO9E9PA7nbrXJCk0ij82WthU%2BQcNGj9QIhAM8IN94k5plBd3GVcFFQoVpFFdBo4Gc80cAYhiqJGjS%2BKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIJ13s%2BHH3fLvyM5oq3AMGQxmHEjTDInx8GakyjUVMb376NPIgyDyMOn%2BwEzSlDKsVOwWTv3b7%2Bb3WUH3oZbwqzgI%2BgMdh0oyLhQkKrUZ3W%2Fkeozx6IjT1WZ7CVdGyxavSZypjXpPDf60f6XbLK4wpsvIQBpfwOSRmD%2FJoeerg3dJzAeRm1EDeGM4gNrt2KhCsaOWutzECncX6Cvjt06F6z5cgIdb3pKq5ic6da4qagGUBgTr6XIIAQwB%2BSxoBQ0jPX%2B%2BvXqHSVUdhCdrPxTmVUZryRRcNSFpAwjE72n%2BXpKSTDLDpAuWgNJO%2FJCudnnLTI04a3vLmtzXubxKhpBcC00tI9nwfe8t4LS2Mi%2Bc1cJNj1%2FJtIzr7is%2FoESYm1iMT8wbYMdFiIQqQpTO9x%2FLQ59STB3v2yfFqxna2Q6L%2B9P9LELgpALV3YbJWhvzI1dgakI%2Fl7EVw8%2B2VxoOXn8%2B4%2B7644uF%2Fw7s%2Bhl3pKIlX2oIetEmnlo3ezStNFtBzJcsPlEgUJrosmp6PlfYQZHg00VuJ9qUkpQjMbTHon2g%2BpJGeMrIRSiKBVq7Ovf4Gs7ZkWuqcGBIPSABHUHCP%2FXjzcxV1h81%2FvM%2BtzsCNS2b5SRLeep7vJYNQNkJB1I3iGzcTMJ4DCIVJDhlWeDCvmsHABjqkAebFrvt87QezTY4jUFxNO5x%2BwI5CzvG0mB%2BpU%2FTsFiouepsTErYEYfvhz9MKmT9OU4m0AC4z0qSkHRr3kQCih%2Bqs8DnKxuPiYMvKvamYEZka3lQFXxh6IbnJH%2BMEn0Ofx1WS0vZgwa1iTxovibiD6b2JXi3TgKEs%2FMW62YP%2FaBLxyzjYMzIzYMFzJQ3OgVqGwbRd%2FbpxEMREjeRnkJXH5%2B7fPx3I&X-Amz-Signature=2319e812bb635f2e988a1a64134269faa2288d6c70dcecc19012b8265b62d94f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73IOJ2Y%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTcCc7KuDLFNZO9E9PA7nbrXJCk0ij82WthU%2BQcNGj9QIhAM8IN94k5plBd3GVcFFQoVpFFdBo4Gc80cAYhiqJGjS%2BKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIJ13s%2BHH3fLvyM5oq3AMGQxmHEjTDInx8GakyjUVMb376NPIgyDyMOn%2BwEzSlDKsVOwWTv3b7%2Bb3WUH3oZbwqzgI%2BgMdh0oyLhQkKrUZ3W%2Fkeozx6IjT1WZ7CVdGyxavSZypjXpPDf60f6XbLK4wpsvIQBpfwOSRmD%2FJoeerg3dJzAeRm1EDeGM4gNrt2KhCsaOWutzECncX6Cvjt06F6z5cgIdb3pKq5ic6da4qagGUBgTr6XIIAQwB%2BSxoBQ0jPX%2B%2BvXqHSVUdhCdrPxTmVUZryRRcNSFpAwjE72n%2BXpKSTDLDpAuWgNJO%2FJCudnnLTI04a3vLmtzXubxKhpBcC00tI9nwfe8t4LS2Mi%2Bc1cJNj1%2FJtIzr7is%2FoESYm1iMT8wbYMdFiIQqQpTO9x%2FLQ59STB3v2yfFqxna2Q6L%2B9P9LELgpALV3YbJWhvzI1dgakI%2Fl7EVw8%2B2VxoOXn8%2B4%2B7644uF%2Fw7s%2Bhl3pKIlX2oIetEmnlo3ezStNFtBzJcsPlEgUJrosmp6PlfYQZHg00VuJ9qUkpQjMbTHon2g%2BpJGeMrIRSiKBVq7Ovf4Gs7ZkWuqcGBIPSABHUHCP%2FXjzcxV1h81%2FvM%2BtzsCNS2b5SRLeep7vJYNQNkJB1I3iGzcTMJ4DCIVJDhlWeDCvmsHABjqkAebFrvt87QezTY4jUFxNO5x%2BwI5CzvG0mB%2BpU%2FTsFiouepsTErYEYfvhz9MKmT9OU4m0AC4z0qSkHRr3kQCih%2Bqs8DnKxuPiYMvKvamYEZka3lQFXxh6IbnJH%2BMEn0Ofx1WS0vZgwa1iTxovibiD6b2JXi3TgKEs%2FMW62YP%2FaBLxyzjYMzIzYMFzJQ3OgVqGwbRd%2FbpxEMREjeRnkJXH5%2B7fPx3I&X-Amz-Signature=f5d8706d89d62ad0f512f80514edf5c00efbb004dc46ee7c77af8f7a0d825b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
