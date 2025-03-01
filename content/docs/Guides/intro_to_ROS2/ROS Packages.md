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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4ZTRTZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCBgE%2FCzfQG%2BnDH4W52OqLHEbEPbsAkgKNLv9x6RJQyRAIgXv77zMbtDkMDE1tmDBYs0F1ktN3iuSp5UaXlgczmFQAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR2c060q0VZX9GYNSrcAyKOWwB8Sx%2FtPkA%2B0JHthAkA8BQUBYF1xfbXQ7AUmcePxdCnkxwmj2yOEy2dU52%2B9WOlTEoxxF9XU2RFpeZfZgVmoeZ2L1zarIYCINxffHR9WGzhQDO2tOocvf5HNvRZ9xVTGzec5FcpwBXH6n0LIcTdm0B85ZgE1js0GPBR1NQElo0yCI1%2BNI0bV8cOUZZPjdhce0BLY9WJhYsIvl2bE3qWtAB8aC64BpDpTJYIi73EHZtkiO7RTGq1pa73pWsPwfKonRlPqAAyUDICo6E%2B3yIa4h%2FDB1%2FrnZPXXmFawozPQDTyoerwcx9rap0UFWxuKXM6P365p84Kb5qwhlbninsodi8NSesFvx6tHt%2BaRykxbhE1%2FdCvp0MZCOWoltUoeBz96Oq8yb3trHgpXkPKLeeD%2BzirajAG0PXDQ9kOWo15xRENc35Dl67714%2FiDvNIoJyk027p%2FvdJXj0wfrCFymjzJp7zSiWAbwXAIpXxgmBmxm9Ib27kWq7Nj8RlkL4MJArz7OmxQe4GPXynWkAKNq%2FJgHWQz45uvZzmEL%2BJviPwGZvtFzCZ0ruI9fLmh3vedmJTV7gXoCTshAQxE6D74vfqZGYFYAy5AVz1a3GhzAeUJTinUNraPlmCYrwXMLSQir4GOqUBJK9wdxMTAwfqSsUzIBXWiiRrQQyAK%2BN5Z92nad0gYvEO%2FBlJQqnFM4Cg866XxFX0e%2F98uVPy9sF8UsvKsQQm9TLYHqRAZrkxulc%2B9VU8ksMi33jati2PD2k95Iixs6UHV8%2BtyvLq05%2BoLzrkVEDl9WwiblfARvuX%2BLN8ue7cwgUDiYGUm0MwIXZsa9Z9FMvDAKj9f%2BjaNMF3ssAPWHDAE4nGG0U%2F&X-Amz-Signature=c0f2cb7a679b949ae25ac576fb268690c70b3a1172ca5bf7d2db5de114f648e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4ZTRTZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCBgE%2FCzfQG%2BnDH4W52OqLHEbEPbsAkgKNLv9x6RJQyRAIgXv77zMbtDkMDE1tmDBYs0F1ktN3iuSp5UaXlgczmFQAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR2c060q0VZX9GYNSrcAyKOWwB8Sx%2FtPkA%2B0JHthAkA8BQUBYF1xfbXQ7AUmcePxdCnkxwmj2yOEy2dU52%2B9WOlTEoxxF9XU2RFpeZfZgVmoeZ2L1zarIYCINxffHR9WGzhQDO2tOocvf5HNvRZ9xVTGzec5FcpwBXH6n0LIcTdm0B85ZgE1js0GPBR1NQElo0yCI1%2BNI0bV8cOUZZPjdhce0BLY9WJhYsIvl2bE3qWtAB8aC64BpDpTJYIi73EHZtkiO7RTGq1pa73pWsPwfKonRlPqAAyUDICo6E%2B3yIa4h%2FDB1%2FrnZPXXmFawozPQDTyoerwcx9rap0UFWxuKXM6P365p84Kb5qwhlbninsodi8NSesFvx6tHt%2BaRykxbhE1%2FdCvp0MZCOWoltUoeBz96Oq8yb3trHgpXkPKLeeD%2BzirajAG0PXDQ9kOWo15xRENc35Dl67714%2FiDvNIoJyk027p%2FvdJXj0wfrCFymjzJp7zSiWAbwXAIpXxgmBmxm9Ib27kWq7Nj8RlkL4MJArz7OmxQe4GPXynWkAKNq%2FJgHWQz45uvZzmEL%2BJviPwGZvtFzCZ0ruI9fLmh3vedmJTV7gXoCTshAQxE6D74vfqZGYFYAy5AVz1a3GhzAeUJTinUNraPlmCYrwXMLSQir4GOqUBJK9wdxMTAwfqSsUzIBXWiiRrQQyAK%2BN5Z92nad0gYvEO%2FBlJQqnFM4Cg866XxFX0e%2F98uVPy9sF8UsvKsQQm9TLYHqRAZrkxulc%2B9VU8ksMi33jati2PD2k95Iixs6UHV8%2BtyvLq05%2BoLzrkVEDl9WwiblfARvuX%2BLN8ue7cwgUDiYGUm0MwIXZsa9Z9FMvDAKj9f%2BjaNMF3ssAPWHDAE4nGG0U%2F&X-Amz-Signature=c4cbea54e8e3ce446e761374bd49cd1179cd8ae91183c6783769ef92f1ba04a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4ZTRTZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCBgE%2FCzfQG%2BnDH4W52OqLHEbEPbsAkgKNLv9x6RJQyRAIgXv77zMbtDkMDE1tmDBYs0F1ktN3iuSp5UaXlgczmFQAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR2c060q0VZX9GYNSrcAyKOWwB8Sx%2FtPkA%2B0JHthAkA8BQUBYF1xfbXQ7AUmcePxdCnkxwmj2yOEy2dU52%2B9WOlTEoxxF9XU2RFpeZfZgVmoeZ2L1zarIYCINxffHR9WGzhQDO2tOocvf5HNvRZ9xVTGzec5FcpwBXH6n0LIcTdm0B85ZgE1js0GPBR1NQElo0yCI1%2BNI0bV8cOUZZPjdhce0BLY9WJhYsIvl2bE3qWtAB8aC64BpDpTJYIi73EHZtkiO7RTGq1pa73pWsPwfKonRlPqAAyUDICo6E%2B3yIa4h%2FDB1%2FrnZPXXmFawozPQDTyoerwcx9rap0UFWxuKXM6P365p84Kb5qwhlbninsodi8NSesFvx6tHt%2BaRykxbhE1%2FdCvp0MZCOWoltUoeBz96Oq8yb3trHgpXkPKLeeD%2BzirajAG0PXDQ9kOWo15xRENc35Dl67714%2FiDvNIoJyk027p%2FvdJXj0wfrCFymjzJp7zSiWAbwXAIpXxgmBmxm9Ib27kWq7Nj8RlkL4MJArz7OmxQe4GPXynWkAKNq%2FJgHWQz45uvZzmEL%2BJviPwGZvtFzCZ0ruI9fLmh3vedmJTV7gXoCTshAQxE6D74vfqZGYFYAy5AVz1a3GhzAeUJTinUNraPlmCYrwXMLSQir4GOqUBJK9wdxMTAwfqSsUzIBXWiiRrQQyAK%2BN5Z92nad0gYvEO%2FBlJQqnFM4Cg866XxFX0e%2F98uVPy9sF8UsvKsQQm9TLYHqRAZrkxulc%2B9VU8ksMi33jati2PD2k95Iixs6UHV8%2BtyvLq05%2BoLzrkVEDl9WwiblfARvuX%2BLN8ue7cwgUDiYGUm0MwIXZsa9Z9FMvDAKj9f%2BjaNMF3ssAPWHDAE4nGG0U%2F&X-Amz-Signature=2c0e78ae8db68057aab9176674d67779c693073c3f8c60de0a5aaea6af47c036&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4ZTRTZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCBgE%2FCzfQG%2BnDH4W52OqLHEbEPbsAkgKNLv9x6RJQyRAIgXv77zMbtDkMDE1tmDBYs0F1ktN3iuSp5UaXlgczmFQAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR2c060q0VZX9GYNSrcAyKOWwB8Sx%2FtPkA%2B0JHthAkA8BQUBYF1xfbXQ7AUmcePxdCnkxwmj2yOEy2dU52%2B9WOlTEoxxF9XU2RFpeZfZgVmoeZ2L1zarIYCINxffHR9WGzhQDO2tOocvf5HNvRZ9xVTGzec5FcpwBXH6n0LIcTdm0B85ZgE1js0GPBR1NQElo0yCI1%2BNI0bV8cOUZZPjdhce0BLY9WJhYsIvl2bE3qWtAB8aC64BpDpTJYIi73EHZtkiO7RTGq1pa73pWsPwfKonRlPqAAyUDICo6E%2B3yIa4h%2FDB1%2FrnZPXXmFawozPQDTyoerwcx9rap0UFWxuKXM6P365p84Kb5qwhlbninsodi8NSesFvx6tHt%2BaRykxbhE1%2FdCvp0MZCOWoltUoeBz96Oq8yb3trHgpXkPKLeeD%2BzirajAG0PXDQ9kOWo15xRENc35Dl67714%2FiDvNIoJyk027p%2FvdJXj0wfrCFymjzJp7zSiWAbwXAIpXxgmBmxm9Ib27kWq7Nj8RlkL4MJArz7OmxQe4GPXynWkAKNq%2FJgHWQz45uvZzmEL%2BJviPwGZvtFzCZ0ruI9fLmh3vedmJTV7gXoCTshAQxE6D74vfqZGYFYAy5AVz1a3GhzAeUJTinUNraPlmCYrwXMLSQir4GOqUBJK9wdxMTAwfqSsUzIBXWiiRrQQyAK%2BN5Z92nad0gYvEO%2FBlJQqnFM4Cg866XxFX0e%2F98uVPy9sF8UsvKsQQm9TLYHqRAZrkxulc%2B9VU8ksMi33jati2PD2k95Iixs6UHV8%2BtyvLq05%2BoLzrkVEDl9WwiblfARvuX%2BLN8ue7cwgUDiYGUm0MwIXZsa9Z9FMvDAKj9f%2BjaNMF3ssAPWHDAE4nGG0U%2F&X-Amz-Signature=8d9d10fc9ed3ccc802c1a22e38c94149e1000228fdee1b84db9a033686e6c582&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4ZTRTZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCBgE%2FCzfQG%2BnDH4W52OqLHEbEPbsAkgKNLv9x6RJQyRAIgXv77zMbtDkMDE1tmDBYs0F1ktN3iuSp5UaXlgczmFQAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR2c060q0VZX9GYNSrcAyKOWwB8Sx%2FtPkA%2B0JHthAkA8BQUBYF1xfbXQ7AUmcePxdCnkxwmj2yOEy2dU52%2B9WOlTEoxxF9XU2RFpeZfZgVmoeZ2L1zarIYCINxffHR9WGzhQDO2tOocvf5HNvRZ9xVTGzec5FcpwBXH6n0LIcTdm0B85ZgE1js0GPBR1NQElo0yCI1%2BNI0bV8cOUZZPjdhce0BLY9WJhYsIvl2bE3qWtAB8aC64BpDpTJYIi73EHZtkiO7RTGq1pa73pWsPwfKonRlPqAAyUDICo6E%2B3yIa4h%2FDB1%2FrnZPXXmFawozPQDTyoerwcx9rap0UFWxuKXM6P365p84Kb5qwhlbninsodi8NSesFvx6tHt%2BaRykxbhE1%2FdCvp0MZCOWoltUoeBz96Oq8yb3trHgpXkPKLeeD%2BzirajAG0PXDQ9kOWo15xRENc35Dl67714%2FiDvNIoJyk027p%2FvdJXj0wfrCFymjzJp7zSiWAbwXAIpXxgmBmxm9Ib27kWq7Nj8RlkL4MJArz7OmxQe4GPXynWkAKNq%2FJgHWQz45uvZzmEL%2BJviPwGZvtFzCZ0ruI9fLmh3vedmJTV7gXoCTshAQxE6D74vfqZGYFYAy5AVz1a3GhzAeUJTinUNraPlmCYrwXMLSQir4GOqUBJK9wdxMTAwfqSsUzIBXWiiRrQQyAK%2BN5Z92nad0gYvEO%2FBlJQqnFM4Cg866XxFX0e%2F98uVPy9sF8UsvKsQQm9TLYHqRAZrkxulc%2B9VU8ksMi33jati2PD2k95Iixs6UHV8%2BtyvLq05%2BoLzrkVEDl9WwiblfARvuX%2BLN8ue7cwgUDiYGUm0MwIXZsa9Z9FMvDAKj9f%2BjaNMF3ssAPWHDAE4nGG0U%2F&X-Amz-Signature=66c9bc6e9843642d4aeda6ab8bfc54d7a84fde0eac5c2eda412d69caf0d23386&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4ZTRTZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCBgE%2FCzfQG%2BnDH4W52OqLHEbEPbsAkgKNLv9x6RJQyRAIgXv77zMbtDkMDE1tmDBYs0F1ktN3iuSp5UaXlgczmFQAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR2c060q0VZX9GYNSrcAyKOWwB8Sx%2FtPkA%2B0JHthAkA8BQUBYF1xfbXQ7AUmcePxdCnkxwmj2yOEy2dU52%2B9WOlTEoxxF9XU2RFpeZfZgVmoeZ2L1zarIYCINxffHR9WGzhQDO2tOocvf5HNvRZ9xVTGzec5FcpwBXH6n0LIcTdm0B85ZgE1js0GPBR1NQElo0yCI1%2BNI0bV8cOUZZPjdhce0BLY9WJhYsIvl2bE3qWtAB8aC64BpDpTJYIi73EHZtkiO7RTGq1pa73pWsPwfKonRlPqAAyUDICo6E%2B3yIa4h%2FDB1%2FrnZPXXmFawozPQDTyoerwcx9rap0UFWxuKXM6P365p84Kb5qwhlbninsodi8NSesFvx6tHt%2BaRykxbhE1%2FdCvp0MZCOWoltUoeBz96Oq8yb3trHgpXkPKLeeD%2BzirajAG0PXDQ9kOWo15xRENc35Dl67714%2FiDvNIoJyk027p%2FvdJXj0wfrCFymjzJp7zSiWAbwXAIpXxgmBmxm9Ib27kWq7Nj8RlkL4MJArz7OmxQe4GPXynWkAKNq%2FJgHWQz45uvZzmEL%2BJviPwGZvtFzCZ0ruI9fLmh3vedmJTV7gXoCTshAQxE6D74vfqZGYFYAy5AVz1a3GhzAeUJTinUNraPlmCYrwXMLSQir4GOqUBJK9wdxMTAwfqSsUzIBXWiiRrQQyAK%2BN5Z92nad0gYvEO%2FBlJQqnFM4Cg866XxFX0e%2F98uVPy9sF8UsvKsQQm9TLYHqRAZrkxulc%2B9VU8ksMi33jati2PD2k95Iixs6UHV8%2BtyvLq05%2BoLzrkVEDl9WwiblfARvuX%2BLN8ue7cwgUDiYGUm0MwIXZsa9Z9FMvDAKj9f%2BjaNMF3ssAPWHDAE4nGG0U%2F&X-Amz-Signature=601664f16c48fa717bbd60e901923b544f545a8fe34f3a2ba1db33e98f20226a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4ZTRTZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCBgE%2FCzfQG%2BnDH4W52OqLHEbEPbsAkgKNLv9x6RJQyRAIgXv77zMbtDkMDE1tmDBYs0F1ktN3iuSp5UaXlgczmFQAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR2c060q0VZX9GYNSrcAyKOWwB8Sx%2FtPkA%2B0JHthAkA8BQUBYF1xfbXQ7AUmcePxdCnkxwmj2yOEy2dU52%2B9WOlTEoxxF9XU2RFpeZfZgVmoeZ2L1zarIYCINxffHR9WGzhQDO2tOocvf5HNvRZ9xVTGzec5FcpwBXH6n0LIcTdm0B85ZgE1js0GPBR1NQElo0yCI1%2BNI0bV8cOUZZPjdhce0BLY9WJhYsIvl2bE3qWtAB8aC64BpDpTJYIi73EHZtkiO7RTGq1pa73pWsPwfKonRlPqAAyUDICo6E%2B3yIa4h%2FDB1%2FrnZPXXmFawozPQDTyoerwcx9rap0UFWxuKXM6P365p84Kb5qwhlbninsodi8NSesFvx6tHt%2BaRykxbhE1%2FdCvp0MZCOWoltUoeBz96Oq8yb3trHgpXkPKLeeD%2BzirajAG0PXDQ9kOWo15xRENc35Dl67714%2FiDvNIoJyk027p%2FvdJXj0wfrCFymjzJp7zSiWAbwXAIpXxgmBmxm9Ib27kWq7Nj8RlkL4MJArz7OmxQe4GPXynWkAKNq%2FJgHWQz45uvZzmEL%2BJviPwGZvtFzCZ0ruI9fLmh3vedmJTV7gXoCTshAQxE6D74vfqZGYFYAy5AVz1a3GhzAeUJTinUNraPlmCYrwXMLSQir4GOqUBJK9wdxMTAwfqSsUzIBXWiiRrQQyAK%2BN5Z92nad0gYvEO%2FBlJQqnFM4Cg866XxFX0e%2F98uVPy9sF8UsvKsQQm9TLYHqRAZrkxulc%2B9VU8ksMi33jati2PD2k95Iixs6UHV8%2BtyvLq05%2BoLzrkVEDl9WwiblfARvuX%2BLN8ue7cwgUDiYGUm0MwIXZsa9Z9FMvDAKj9f%2BjaNMF3ssAPWHDAE4nGG0U%2F&X-Amz-Signature=98a345de2317882f424ea967eb942f171044dbf8b145a9b44a047695c6bd63cb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
