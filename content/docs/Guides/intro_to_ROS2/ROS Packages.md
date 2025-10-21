---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY2LFOM%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDYd79T039tU%2BKKiDtEXd0ikLmQi%2Bb7WMVgUb%2BgsBNqMAiEA5qqAieNDWQZ4tRbwdu%2F0QVmVZsBt3RmX2wSK6MjRB%2BwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJP0HhZl2cZqZs9WzCrcAxENerk8WRXPz63QGXtZPwiSMcqpO9VqKb4Zd4X%2FOYzoYoYFYyn85ZAG7YvuPY2T89Y%2BEte%2FFhtTp%2BZnsiEfB9N3nTs5zXrfiU9%2BkRbHsUXGbLuL02w0jrtsNruACMTViO0%2Ba9tHVaGRc88E8SxEI7VpON%2FNFbSBy88S0qtkuLIxPiwniNhHcTBkAY3d8EUgcdzB7feSBdqLNkRZdarwhND40lks%2FGyj6LsP7Kjyiu1D1%2BC2BugF1BLGxZ2zOzmESHVWD5ljd9KYGRihxV5vxwjtIGCBD1KpJ4zbkERd%2Fqy7eOs7wvgxMI140dJyCpX8eNAXXRWBoKoug8IJ%2BsNbQMk%2FEpv%2BfA7496MZIYQocrA52ve4KTsX1gOVXMF%2B3GUY7TDDAWRSGw%2B45%2FaJdwH94MbP3VTA9Fv%2BgRHc2lGYi%2BZLUIndTlcfrtodHwswxDEZ5LANVej4KxG2blk6DrPv28i1kWdz0at7P6HSbbP7UIZRsd7pJdUbTt%2BtfIneWPdxIX8fr7Z5OKX%2BrLkdZDz2p111r8rwaYxNIeRSY6s2UGuJBou1VE9KTwbRRNnb4zOLxcav%2F9hJsqe3tWmzopW5G7dGzCzeIVoqKDjabBR2JW6s%2F7TxfCO%2FNRSFWKHKMOGt28cGOqUBJIVr2sVxPJGUptQyc7un9lXh7XyBLW7UkVTzOYBoZAxnWTl4H%2FKlabijYMaZcQVCVoXuq2Ka%2BtNJFBmPt65o18j5I6U0Z2D%2ByPWvVqm7yF3lgjx2gqZlbmskmK4gIFtBQijAqEl7xEQK3B18p%2FoEoWbZKhRYGL%2F0HTW4V20cRfHiME8BIH8Y3o%2Bj%2FyFoj8XEFn0o2BRKZgFeDJ9W0aCvQnsCaNaY&X-Amz-Signature=d03dbdd59a52fad24dcef3db308ea403d702aa5de267f5531aa9bb25fb71fbe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY2LFOM%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDYd79T039tU%2BKKiDtEXd0ikLmQi%2Bb7WMVgUb%2BgsBNqMAiEA5qqAieNDWQZ4tRbwdu%2F0QVmVZsBt3RmX2wSK6MjRB%2BwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJP0HhZl2cZqZs9WzCrcAxENerk8WRXPz63QGXtZPwiSMcqpO9VqKb4Zd4X%2FOYzoYoYFYyn85ZAG7YvuPY2T89Y%2BEte%2FFhtTp%2BZnsiEfB9N3nTs5zXrfiU9%2BkRbHsUXGbLuL02w0jrtsNruACMTViO0%2Ba9tHVaGRc88E8SxEI7VpON%2FNFbSBy88S0qtkuLIxPiwniNhHcTBkAY3d8EUgcdzB7feSBdqLNkRZdarwhND40lks%2FGyj6LsP7Kjyiu1D1%2BC2BugF1BLGxZ2zOzmESHVWD5ljd9KYGRihxV5vxwjtIGCBD1KpJ4zbkERd%2Fqy7eOs7wvgxMI140dJyCpX8eNAXXRWBoKoug8IJ%2BsNbQMk%2FEpv%2BfA7496MZIYQocrA52ve4KTsX1gOVXMF%2B3GUY7TDDAWRSGw%2B45%2FaJdwH94MbP3VTA9Fv%2BgRHc2lGYi%2BZLUIndTlcfrtodHwswxDEZ5LANVej4KxG2blk6DrPv28i1kWdz0at7P6HSbbP7UIZRsd7pJdUbTt%2BtfIneWPdxIX8fr7Z5OKX%2BrLkdZDz2p111r8rwaYxNIeRSY6s2UGuJBou1VE9KTwbRRNnb4zOLxcav%2F9hJsqe3tWmzopW5G7dGzCzeIVoqKDjabBR2JW6s%2F7TxfCO%2FNRSFWKHKMOGt28cGOqUBJIVr2sVxPJGUptQyc7un9lXh7XyBLW7UkVTzOYBoZAxnWTl4H%2FKlabijYMaZcQVCVoXuq2Ka%2BtNJFBmPt65o18j5I6U0Z2D%2ByPWvVqm7yF3lgjx2gqZlbmskmK4gIFtBQijAqEl7xEQK3B18p%2FoEoWbZKhRYGL%2F0HTW4V20cRfHiME8BIH8Y3o%2Bj%2FyFoj8XEFn0o2BRKZgFeDJ9W0aCvQnsCaNaY&X-Amz-Signature=e3a60020f3b78ad063eca925ebb0e0740a8faa2057730701e0412fe7cfb43615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY2LFOM%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDYd79T039tU%2BKKiDtEXd0ikLmQi%2Bb7WMVgUb%2BgsBNqMAiEA5qqAieNDWQZ4tRbwdu%2F0QVmVZsBt3RmX2wSK6MjRB%2BwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJP0HhZl2cZqZs9WzCrcAxENerk8WRXPz63QGXtZPwiSMcqpO9VqKb4Zd4X%2FOYzoYoYFYyn85ZAG7YvuPY2T89Y%2BEte%2FFhtTp%2BZnsiEfB9N3nTs5zXrfiU9%2BkRbHsUXGbLuL02w0jrtsNruACMTViO0%2Ba9tHVaGRc88E8SxEI7VpON%2FNFbSBy88S0qtkuLIxPiwniNhHcTBkAY3d8EUgcdzB7feSBdqLNkRZdarwhND40lks%2FGyj6LsP7Kjyiu1D1%2BC2BugF1BLGxZ2zOzmESHVWD5ljd9KYGRihxV5vxwjtIGCBD1KpJ4zbkERd%2Fqy7eOs7wvgxMI140dJyCpX8eNAXXRWBoKoug8IJ%2BsNbQMk%2FEpv%2BfA7496MZIYQocrA52ve4KTsX1gOVXMF%2B3GUY7TDDAWRSGw%2B45%2FaJdwH94MbP3VTA9Fv%2BgRHc2lGYi%2BZLUIndTlcfrtodHwswxDEZ5LANVej4KxG2blk6DrPv28i1kWdz0at7P6HSbbP7UIZRsd7pJdUbTt%2BtfIneWPdxIX8fr7Z5OKX%2BrLkdZDz2p111r8rwaYxNIeRSY6s2UGuJBou1VE9KTwbRRNnb4zOLxcav%2F9hJsqe3tWmzopW5G7dGzCzeIVoqKDjabBR2JW6s%2F7TxfCO%2FNRSFWKHKMOGt28cGOqUBJIVr2sVxPJGUptQyc7un9lXh7XyBLW7UkVTzOYBoZAxnWTl4H%2FKlabijYMaZcQVCVoXuq2Ka%2BtNJFBmPt65o18j5I6U0Z2D%2ByPWvVqm7yF3lgjx2gqZlbmskmK4gIFtBQijAqEl7xEQK3B18p%2FoEoWbZKhRYGL%2F0HTW4V20cRfHiME8BIH8Y3o%2Bj%2FyFoj8XEFn0o2BRKZgFeDJ9W0aCvQnsCaNaY&X-Amz-Signature=dd6d4f3e7e111f27f43b39c3f3171680251521e781c29b5281b404d87c10d899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY2LFOM%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDYd79T039tU%2BKKiDtEXd0ikLmQi%2Bb7WMVgUb%2BgsBNqMAiEA5qqAieNDWQZ4tRbwdu%2F0QVmVZsBt3RmX2wSK6MjRB%2BwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJP0HhZl2cZqZs9WzCrcAxENerk8WRXPz63QGXtZPwiSMcqpO9VqKb4Zd4X%2FOYzoYoYFYyn85ZAG7YvuPY2T89Y%2BEte%2FFhtTp%2BZnsiEfB9N3nTs5zXrfiU9%2BkRbHsUXGbLuL02w0jrtsNruACMTViO0%2Ba9tHVaGRc88E8SxEI7VpON%2FNFbSBy88S0qtkuLIxPiwniNhHcTBkAY3d8EUgcdzB7feSBdqLNkRZdarwhND40lks%2FGyj6LsP7Kjyiu1D1%2BC2BugF1BLGxZ2zOzmESHVWD5ljd9KYGRihxV5vxwjtIGCBD1KpJ4zbkERd%2Fqy7eOs7wvgxMI140dJyCpX8eNAXXRWBoKoug8IJ%2BsNbQMk%2FEpv%2BfA7496MZIYQocrA52ve4KTsX1gOVXMF%2B3GUY7TDDAWRSGw%2B45%2FaJdwH94MbP3VTA9Fv%2BgRHc2lGYi%2BZLUIndTlcfrtodHwswxDEZ5LANVej4KxG2blk6DrPv28i1kWdz0at7P6HSbbP7UIZRsd7pJdUbTt%2BtfIneWPdxIX8fr7Z5OKX%2BrLkdZDz2p111r8rwaYxNIeRSY6s2UGuJBou1VE9KTwbRRNnb4zOLxcav%2F9hJsqe3tWmzopW5G7dGzCzeIVoqKDjabBR2JW6s%2F7TxfCO%2FNRSFWKHKMOGt28cGOqUBJIVr2sVxPJGUptQyc7un9lXh7XyBLW7UkVTzOYBoZAxnWTl4H%2FKlabijYMaZcQVCVoXuq2Ka%2BtNJFBmPt65o18j5I6U0Z2D%2ByPWvVqm7yF3lgjx2gqZlbmskmK4gIFtBQijAqEl7xEQK3B18p%2FoEoWbZKhRYGL%2F0HTW4V20cRfHiME8BIH8Y3o%2Bj%2FyFoj8XEFn0o2BRKZgFeDJ9W0aCvQnsCaNaY&X-Amz-Signature=555c9c21a99ff26a28d9bce839e8fa13479140d3bcc8434702327e545921210f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY2LFOM%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDYd79T039tU%2BKKiDtEXd0ikLmQi%2Bb7WMVgUb%2BgsBNqMAiEA5qqAieNDWQZ4tRbwdu%2F0QVmVZsBt3RmX2wSK6MjRB%2BwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJP0HhZl2cZqZs9WzCrcAxENerk8WRXPz63QGXtZPwiSMcqpO9VqKb4Zd4X%2FOYzoYoYFYyn85ZAG7YvuPY2T89Y%2BEte%2FFhtTp%2BZnsiEfB9N3nTs5zXrfiU9%2BkRbHsUXGbLuL02w0jrtsNruACMTViO0%2Ba9tHVaGRc88E8SxEI7VpON%2FNFbSBy88S0qtkuLIxPiwniNhHcTBkAY3d8EUgcdzB7feSBdqLNkRZdarwhND40lks%2FGyj6LsP7Kjyiu1D1%2BC2BugF1BLGxZ2zOzmESHVWD5ljd9KYGRihxV5vxwjtIGCBD1KpJ4zbkERd%2Fqy7eOs7wvgxMI140dJyCpX8eNAXXRWBoKoug8IJ%2BsNbQMk%2FEpv%2BfA7496MZIYQocrA52ve4KTsX1gOVXMF%2B3GUY7TDDAWRSGw%2B45%2FaJdwH94MbP3VTA9Fv%2BgRHc2lGYi%2BZLUIndTlcfrtodHwswxDEZ5LANVej4KxG2blk6DrPv28i1kWdz0at7P6HSbbP7UIZRsd7pJdUbTt%2BtfIneWPdxIX8fr7Z5OKX%2BrLkdZDz2p111r8rwaYxNIeRSY6s2UGuJBou1VE9KTwbRRNnb4zOLxcav%2F9hJsqe3tWmzopW5G7dGzCzeIVoqKDjabBR2JW6s%2F7TxfCO%2FNRSFWKHKMOGt28cGOqUBJIVr2sVxPJGUptQyc7un9lXh7XyBLW7UkVTzOYBoZAxnWTl4H%2FKlabijYMaZcQVCVoXuq2Ka%2BtNJFBmPt65o18j5I6U0Z2D%2ByPWvVqm7yF3lgjx2gqZlbmskmK4gIFtBQijAqEl7xEQK3B18p%2FoEoWbZKhRYGL%2F0HTW4V20cRfHiME8BIH8Y3o%2Bj%2FyFoj8XEFn0o2BRKZgFeDJ9W0aCvQnsCaNaY&X-Amz-Signature=27aac35f6fd1ba48a1e4cadbd8de3f8fb226c588205781b642a5ef5b0ae07a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY2LFOM%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDYd79T039tU%2BKKiDtEXd0ikLmQi%2Bb7WMVgUb%2BgsBNqMAiEA5qqAieNDWQZ4tRbwdu%2F0QVmVZsBt3RmX2wSK6MjRB%2BwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJP0HhZl2cZqZs9WzCrcAxENerk8WRXPz63QGXtZPwiSMcqpO9VqKb4Zd4X%2FOYzoYoYFYyn85ZAG7YvuPY2T89Y%2BEte%2FFhtTp%2BZnsiEfB9N3nTs5zXrfiU9%2BkRbHsUXGbLuL02w0jrtsNruACMTViO0%2Ba9tHVaGRc88E8SxEI7VpON%2FNFbSBy88S0qtkuLIxPiwniNhHcTBkAY3d8EUgcdzB7feSBdqLNkRZdarwhND40lks%2FGyj6LsP7Kjyiu1D1%2BC2BugF1BLGxZ2zOzmESHVWD5ljd9KYGRihxV5vxwjtIGCBD1KpJ4zbkERd%2Fqy7eOs7wvgxMI140dJyCpX8eNAXXRWBoKoug8IJ%2BsNbQMk%2FEpv%2BfA7496MZIYQocrA52ve4KTsX1gOVXMF%2B3GUY7TDDAWRSGw%2B45%2FaJdwH94MbP3VTA9Fv%2BgRHc2lGYi%2BZLUIndTlcfrtodHwswxDEZ5LANVej4KxG2blk6DrPv28i1kWdz0at7P6HSbbP7UIZRsd7pJdUbTt%2BtfIneWPdxIX8fr7Z5OKX%2BrLkdZDz2p111r8rwaYxNIeRSY6s2UGuJBou1VE9KTwbRRNnb4zOLxcav%2F9hJsqe3tWmzopW5G7dGzCzeIVoqKDjabBR2JW6s%2F7TxfCO%2FNRSFWKHKMOGt28cGOqUBJIVr2sVxPJGUptQyc7un9lXh7XyBLW7UkVTzOYBoZAxnWTl4H%2FKlabijYMaZcQVCVoXuq2Ka%2BtNJFBmPt65o18j5I6U0Z2D%2ByPWvVqm7yF3lgjx2gqZlbmskmK4gIFtBQijAqEl7xEQK3B18p%2FoEoWbZKhRYGL%2F0HTW4V20cRfHiME8BIH8Y3o%2Bj%2FyFoj8XEFn0o2BRKZgFeDJ9W0aCvQnsCaNaY&X-Amz-Signature=ef0b28e0c879460996a13e101bf22930a167577f9422b5fe5c89a621d515d5a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY2LFOM%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDYd79T039tU%2BKKiDtEXd0ikLmQi%2Bb7WMVgUb%2BgsBNqMAiEA5qqAieNDWQZ4tRbwdu%2F0QVmVZsBt3RmX2wSK6MjRB%2BwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJP0HhZl2cZqZs9WzCrcAxENerk8WRXPz63QGXtZPwiSMcqpO9VqKb4Zd4X%2FOYzoYoYFYyn85ZAG7YvuPY2T89Y%2BEte%2FFhtTp%2BZnsiEfB9N3nTs5zXrfiU9%2BkRbHsUXGbLuL02w0jrtsNruACMTViO0%2Ba9tHVaGRc88E8SxEI7VpON%2FNFbSBy88S0qtkuLIxPiwniNhHcTBkAY3d8EUgcdzB7feSBdqLNkRZdarwhND40lks%2FGyj6LsP7Kjyiu1D1%2BC2BugF1BLGxZ2zOzmESHVWD5ljd9KYGRihxV5vxwjtIGCBD1KpJ4zbkERd%2Fqy7eOs7wvgxMI140dJyCpX8eNAXXRWBoKoug8IJ%2BsNbQMk%2FEpv%2BfA7496MZIYQocrA52ve4KTsX1gOVXMF%2B3GUY7TDDAWRSGw%2B45%2FaJdwH94MbP3VTA9Fv%2BgRHc2lGYi%2BZLUIndTlcfrtodHwswxDEZ5LANVej4KxG2blk6DrPv28i1kWdz0at7P6HSbbP7UIZRsd7pJdUbTt%2BtfIneWPdxIX8fr7Z5OKX%2BrLkdZDz2p111r8rwaYxNIeRSY6s2UGuJBou1VE9KTwbRRNnb4zOLxcav%2F9hJsqe3tWmzopW5G7dGzCzeIVoqKDjabBR2JW6s%2F7TxfCO%2FNRSFWKHKMOGt28cGOqUBJIVr2sVxPJGUptQyc7un9lXh7XyBLW7UkVTzOYBoZAxnWTl4H%2FKlabijYMaZcQVCVoXuq2Ka%2BtNJFBmPt65o18j5I6U0Z2D%2ByPWvVqm7yF3lgjx2gqZlbmskmK4gIFtBQijAqEl7xEQK3B18p%2FoEoWbZKhRYGL%2F0HTW4V20cRfHiME8BIH8Y3o%2Bj%2FyFoj8XEFn0o2BRKZgFeDJ9W0aCvQnsCaNaY&X-Amz-Signature=fa2282da3935c98f5a0b198fa6b07698d3b59d19ea6dccc31facba2d1e674c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
