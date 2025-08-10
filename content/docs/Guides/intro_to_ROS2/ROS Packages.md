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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD2SRKWS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmaPpaHClpbhiksVUsyOt9u%2Fr6QVHEHOv0ESi7UBwiUgIgXlbBbndRstCHhoRmUkdPSqv9g83egfMHxCGv2t5xMXcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUHvVyzBem4yvDInCrcA9%2BTWHoXIt2V32L1YKmaynQI9zL%2F3kMvQnzNvUMJaKmbmSR%2FfvwauEIkcT%2Fr%2Bhminkxo%2FETgo0EfYzqf%2BZU6O%2Bwg%2BQIepvyMAMO6yFm%2BYIKIkbeSHJwa9xSmuGfzjjsSxo7HNBq4PkDOnC1nihcNPhZrrZp%2FPcPKGudzTm4pr91Nz2Pz%2BocPl%2Bxcy3mGBNZVyTkqKyA%2FqPJg6rgFQEVLJa9HC8Xlvy2U%2FvEBUU%2F9fF7WQVYhGnk8QIorJQx5RIZ2TKWeYNIv9sje2GLRhVtkn2cjM%2BvqMVyWBrUaXR%2BPjrjiko8BkZcxEKGRllpE5C8UFMAY3XUdshBBT8LBxVxztjg3a74YDuZwyCSRESvz4DA0jsR4SN2RwN5dlgnrYd%2F%2BcGXjilMi6Hjt6oqC3%2B%2BgXW8ZSrVq%2BPF4PIPYGgfYRvmrUaNYogP8K6y3rdVsv0PjOaezsIEgit9AF4wY2PfhZW2X%2FXmsmOTq0O9lVzqi8AJwVRwcjodsHeFyLYE9kWRDP8X%2B%2Bb59i55Ql9Hd6Ogl33wRFJMrvMfxDQwgiA3Xj48ril0EXRpxDfOO8CaVZr7qtZRapTX1prfi1GwkxYdJeI4yg5au13rvhoUPTzAi3TbMCNwJGa3QV%2BEp62iNMIO%2F4sQGOqUBmst3D4taGnB7bRT3DHKfgreVaAAC55QkF6JKYUqJVd8HmDUuhtmFoxBgPdoKDTrN4eAXZDN0e6L9wN9Md5BB0wxYuW5NROdIJao0vpw2htIG3Wis%2BQ0XaEOpU%2Fed4gEEcw%2BtsaWBmSayLweWnZI7RY5%2B%2F5uhP0g7rNGsaZWU8zRie2BaaYyPpyNomg%2BxqraRUx4%2FKFJjtRSudZnrgU9rtNOhslia&X-Amz-Signature=cc9a3ac5b5c16c9e4f5ae01c806e1513a66a567af96093566981a8661ef129fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD2SRKWS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmaPpaHClpbhiksVUsyOt9u%2Fr6QVHEHOv0ESi7UBwiUgIgXlbBbndRstCHhoRmUkdPSqv9g83egfMHxCGv2t5xMXcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUHvVyzBem4yvDInCrcA9%2BTWHoXIt2V32L1YKmaynQI9zL%2F3kMvQnzNvUMJaKmbmSR%2FfvwauEIkcT%2Fr%2Bhminkxo%2FETgo0EfYzqf%2BZU6O%2Bwg%2BQIepvyMAMO6yFm%2BYIKIkbeSHJwa9xSmuGfzjjsSxo7HNBq4PkDOnC1nihcNPhZrrZp%2FPcPKGudzTm4pr91Nz2Pz%2BocPl%2Bxcy3mGBNZVyTkqKyA%2FqPJg6rgFQEVLJa9HC8Xlvy2U%2FvEBUU%2F9fF7WQVYhGnk8QIorJQx5RIZ2TKWeYNIv9sje2GLRhVtkn2cjM%2BvqMVyWBrUaXR%2BPjrjiko8BkZcxEKGRllpE5C8UFMAY3XUdshBBT8LBxVxztjg3a74YDuZwyCSRESvz4DA0jsR4SN2RwN5dlgnrYd%2F%2BcGXjilMi6Hjt6oqC3%2B%2BgXW8ZSrVq%2BPF4PIPYGgfYRvmrUaNYogP8K6y3rdVsv0PjOaezsIEgit9AF4wY2PfhZW2X%2FXmsmOTq0O9lVzqi8AJwVRwcjodsHeFyLYE9kWRDP8X%2B%2Bb59i55Ql9Hd6Ogl33wRFJMrvMfxDQwgiA3Xj48ril0EXRpxDfOO8CaVZr7qtZRapTX1prfi1GwkxYdJeI4yg5au13rvhoUPTzAi3TbMCNwJGa3QV%2BEp62iNMIO%2F4sQGOqUBmst3D4taGnB7bRT3DHKfgreVaAAC55QkF6JKYUqJVd8HmDUuhtmFoxBgPdoKDTrN4eAXZDN0e6L9wN9Md5BB0wxYuW5NROdIJao0vpw2htIG3Wis%2BQ0XaEOpU%2Fed4gEEcw%2BtsaWBmSayLweWnZI7RY5%2B%2F5uhP0g7rNGsaZWU8zRie2BaaYyPpyNomg%2BxqraRUx4%2FKFJjtRSudZnrgU9rtNOhslia&X-Amz-Signature=a9350611a653ffc0c131efe5ac033b89ba302a3894ac2c65d4fd352f363fd9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD2SRKWS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmaPpaHClpbhiksVUsyOt9u%2Fr6QVHEHOv0ESi7UBwiUgIgXlbBbndRstCHhoRmUkdPSqv9g83egfMHxCGv2t5xMXcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUHvVyzBem4yvDInCrcA9%2BTWHoXIt2V32L1YKmaynQI9zL%2F3kMvQnzNvUMJaKmbmSR%2FfvwauEIkcT%2Fr%2Bhminkxo%2FETgo0EfYzqf%2BZU6O%2Bwg%2BQIepvyMAMO6yFm%2BYIKIkbeSHJwa9xSmuGfzjjsSxo7HNBq4PkDOnC1nihcNPhZrrZp%2FPcPKGudzTm4pr91Nz2Pz%2BocPl%2Bxcy3mGBNZVyTkqKyA%2FqPJg6rgFQEVLJa9HC8Xlvy2U%2FvEBUU%2F9fF7WQVYhGnk8QIorJQx5RIZ2TKWeYNIv9sje2GLRhVtkn2cjM%2BvqMVyWBrUaXR%2BPjrjiko8BkZcxEKGRllpE5C8UFMAY3XUdshBBT8LBxVxztjg3a74YDuZwyCSRESvz4DA0jsR4SN2RwN5dlgnrYd%2F%2BcGXjilMi6Hjt6oqC3%2B%2BgXW8ZSrVq%2BPF4PIPYGgfYRvmrUaNYogP8K6y3rdVsv0PjOaezsIEgit9AF4wY2PfhZW2X%2FXmsmOTq0O9lVzqi8AJwVRwcjodsHeFyLYE9kWRDP8X%2B%2Bb59i55Ql9Hd6Ogl33wRFJMrvMfxDQwgiA3Xj48ril0EXRpxDfOO8CaVZr7qtZRapTX1prfi1GwkxYdJeI4yg5au13rvhoUPTzAi3TbMCNwJGa3QV%2BEp62iNMIO%2F4sQGOqUBmst3D4taGnB7bRT3DHKfgreVaAAC55QkF6JKYUqJVd8HmDUuhtmFoxBgPdoKDTrN4eAXZDN0e6L9wN9Md5BB0wxYuW5NROdIJao0vpw2htIG3Wis%2BQ0XaEOpU%2Fed4gEEcw%2BtsaWBmSayLweWnZI7RY5%2B%2F5uhP0g7rNGsaZWU8zRie2BaaYyPpyNomg%2BxqraRUx4%2FKFJjtRSudZnrgU9rtNOhslia&X-Amz-Signature=556a605bef2f27ccc210ad0dd04cfb6347997409912a7aefb39f3557521f2a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD2SRKWS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmaPpaHClpbhiksVUsyOt9u%2Fr6QVHEHOv0ESi7UBwiUgIgXlbBbndRstCHhoRmUkdPSqv9g83egfMHxCGv2t5xMXcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUHvVyzBem4yvDInCrcA9%2BTWHoXIt2V32L1YKmaynQI9zL%2F3kMvQnzNvUMJaKmbmSR%2FfvwauEIkcT%2Fr%2Bhminkxo%2FETgo0EfYzqf%2BZU6O%2Bwg%2BQIepvyMAMO6yFm%2BYIKIkbeSHJwa9xSmuGfzjjsSxo7HNBq4PkDOnC1nihcNPhZrrZp%2FPcPKGudzTm4pr91Nz2Pz%2BocPl%2Bxcy3mGBNZVyTkqKyA%2FqPJg6rgFQEVLJa9HC8Xlvy2U%2FvEBUU%2F9fF7WQVYhGnk8QIorJQx5RIZ2TKWeYNIv9sje2GLRhVtkn2cjM%2BvqMVyWBrUaXR%2BPjrjiko8BkZcxEKGRllpE5C8UFMAY3XUdshBBT8LBxVxztjg3a74YDuZwyCSRESvz4DA0jsR4SN2RwN5dlgnrYd%2F%2BcGXjilMi6Hjt6oqC3%2B%2BgXW8ZSrVq%2BPF4PIPYGgfYRvmrUaNYogP8K6y3rdVsv0PjOaezsIEgit9AF4wY2PfhZW2X%2FXmsmOTq0O9lVzqi8AJwVRwcjodsHeFyLYE9kWRDP8X%2B%2Bb59i55Ql9Hd6Ogl33wRFJMrvMfxDQwgiA3Xj48ril0EXRpxDfOO8CaVZr7qtZRapTX1prfi1GwkxYdJeI4yg5au13rvhoUPTzAi3TbMCNwJGa3QV%2BEp62iNMIO%2F4sQGOqUBmst3D4taGnB7bRT3DHKfgreVaAAC55QkF6JKYUqJVd8HmDUuhtmFoxBgPdoKDTrN4eAXZDN0e6L9wN9Md5BB0wxYuW5NROdIJao0vpw2htIG3Wis%2BQ0XaEOpU%2Fed4gEEcw%2BtsaWBmSayLweWnZI7RY5%2B%2F5uhP0g7rNGsaZWU8zRie2BaaYyPpyNomg%2BxqraRUx4%2FKFJjtRSudZnrgU9rtNOhslia&X-Amz-Signature=a81845376581c0fc48c68d3b9b50a35918823f27e75aa5597652d921af140227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD2SRKWS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmaPpaHClpbhiksVUsyOt9u%2Fr6QVHEHOv0ESi7UBwiUgIgXlbBbndRstCHhoRmUkdPSqv9g83egfMHxCGv2t5xMXcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUHvVyzBem4yvDInCrcA9%2BTWHoXIt2V32L1YKmaynQI9zL%2F3kMvQnzNvUMJaKmbmSR%2FfvwauEIkcT%2Fr%2Bhminkxo%2FETgo0EfYzqf%2BZU6O%2Bwg%2BQIepvyMAMO6yFm%2BYIKIkbeSHJwa9xSmuGfzjjsSxo7HNBq4PkDOnC1nihcNPhZrrZp%2FPcPKGudzTm4pr91Nz2Pz%2BocPl%2Bxcy3mGBNZVyTkqKyA%2FqPJg6rgFQEVLJa9HC8Xlvy2U%2FvEBUU%2F9fF7WQVYhGnk8QIorJQx5RIZ2TKWeYNIv9sje2GLRhVtkn2cjM%2BvqMVyWBrUaXR%2BPjrjiko8BkZcxEKGRllpE5C8UFMAY3XUdshBBT8LBxVxztjg3a74YDuZwyCSRESvz4DA0jsR4SN2RwN5dlgnrYd%2F%2BcGXjilMi6Hjt6oqC3%2B%2BgXW8ZSrVq%2BPF4PIPYGgfYRvmrUaNYogP8K6y3rdVsv0PjOaezsIEgit9AF4wY2PfhZW2X%2FXmsmOTq0O9lVzqi8AJwVRwcjodsHeFyLYE9kWRDP8X%2B%2Bb59i55Ql9Hd6Ogl33wRFJMrvMfxDQwgiA3Xj48ril0EXRpxDfOO8CaVZr7qtZRapTX1prfi1GwkxYdJeI4yg5au13rvhoUPTzAi3TbMCNwJGa3QV%2BEp62iNMIO%2F4sQGOqUBmst3D4taGnB7bRT3DHKfgreVaAAC55QkF6JKYUqJVd8HmDUuhtmFoxBgPdoKDTrN4eAXZDN0e6L9wN9Md5BB0wxYuW5NROdIJao0vpw2htIG3Wis%2BQ0XaEOpU%2Fed4gEEcw%2BtsaWBmSayLweWnZI7RY5%2B%2F5uhP0g7rNGsaZWU8zRie2BaaYyPpyNomg%2BxqraRUx4%2FKFJjtRSudZnrgU9rtNOhslia&X-Amz-Signature=d99c8ae6959fbb54b7560f590c9cc788090fdd82828eefd939b74b82d68add7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD2SRKWS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmaPpaHClpbhiksVUsyOt9u%2Fr6QVHEHOv0ESi7UBwiUgIgXlbBbndRstCHhoRmUkdPSqv9g83egfMHxCGv2t5xMXcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUHvVyzBem4yvDInCrcA9%2BTWHoXIt2V32L1YKmaynQI9zL%2F3kMvQnzNvUMJaKmbmSR%2FfvwauEIkcT%2Fr%2Bhminkxo%2FETgo0EfYzqf%2BZU6O%2Bwg%2BQIepvyMAMO6yFm%2BYIKIkbeSHJwa9xSmuGfzjjsSxo7HNBq4PkDOnC1nihcNPhZrrZp%2FPcPKGudzTm4pr91Nz2Pz%2BocPl%2Bxcy3mGBNZVyTkqKyA%2FqPJg6rgFQEVLJa9HC8Xlvy2U%2FvEBUU%2F9fF7WQVYhGnk8QIorJQx5RIZ2TKWeYNIv9sje2GLRhVtkn2cjM%2BvqMVyWBrUaXR%2BPjrjiko8BkZcxEKGRllpE5C8UFMAY3XUdshBBT8LBxVxztjg3a74YDuZwyCSRESvz4DA0jsR4SN2RwN5dlgnrYd%2F%2BcGXjilMi6Hjt6oqC3%2B%2BgXW8ZSrVq%2BPF4PIPYGgfYRvmrUaNYogP8K6y3rdVsv0PjOaezsIEgit9AF4wY2PfhZW2X%2FXmsmOTq0O9lVzqi8AJwVRwcjodsHeFyLYE9kWRDP8X%2B%2Bb59i55Ql9Hd6Ogl33wRFJMrvMfxDQwgiA3Xj48ril0EXRpxDfOO8CaVZr7qtZRapTX1prfi1GwkxYdJeI4yg5au13rvhoUPTzAi3TbMCNwJGa3QV%2BEp62iNMIO%2F4sQGOqUBmst3D4taGnB7bRT3DHKfgreVaAAC55QkF6JKYUqJVd8HmDUuhtmFoxBgPdoKDTrN4eAXZDN0e6L9wN9Md5BB0wxYuW5NROdIJao0vpw2htIG3Wis%2BQ0XaEOpU%2Fed4gEEcw%2BtsaWBmSayLweWnZI7RY5%2B%2F5uhP0g7rNGsaZWU8zRie2BaaYyPpyNomg%2BxqraRUx4%2FKFJjtRSudZnrgU9rtNOhslia&X-Amz-Signature=91e0b6dc33cd9595a0710409cc40f3db58c13864916a0a38aec4eefe7c943e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD2SRKWS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmaPpaHClpbhiksVUsyOt9u%2Fr6QVHEHOv0ESi7UBwiUgIgXlbBbndRstCHhoRmUkdPSqv9g83egfMHxCGv2t5xMXcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUHvVyzBem4yvDInCrcA9%2BTWHoXIt2V32L1YKmaynQI9zL%2F3kMvQnzNvUMJaKmbmSR%2FfvwauEIkcT%2Fr%2Bhminkxo%2FETgo0EfYzqf%2BZU6O%2Bwg%2BQIepvyMAMO6yFm%2BYIKIkbeSHJwa9xSmuGfzjjsSxo7HNBq4PkDOnC1nihcNPhZrrZp%2FPcPKGudzTm4pr91Nz2Pz%2BocPl%2Bxcy3mGBNZVyTkqKyA%2FqPJg6rgFQEVLJa9HC8Xlvy2U%2FvEBUU%2F9fF7WQVYhGnk8QIorJQx5RIZ2TKWeYNIv9sje2GLRhVtkn2cjM%2BvqMVyWBrUaXR%2BPjrjiko8BkZcxEKGRllpE5C8UFMAY3XUdshBBT8LBxVxztjg3a74YDuZwyCSRESvz4DA0jsR4SN2RwN5dlgnrYd%2F%2BcGXjilMi6Hjt6oqC3%2B%2BgXW8ZSrVq%2BPF4PIPYGgfYRvmrUaNYogP8K6y3rdVsv0PjOaezsIEgit9AF4wY2PfhZW2X%2FXmsmOTq0O9lVzqi8AJwVRwcjodsHeFyLYE9kWRDP8X%2B%2Bb59i55Ql9Hd6Ogl33wRFJMrvMfxDQwgiA3Xj48ril0EXRpxDfOO8CaVZr7qtZRapTX1prfi1GwkxYdJeI4yg5au13rvhoUPTzAi3TbMCNwJGa3QV%2BEp62iNMIO%2F4sQGOqUBmst3D4taGnB7bRT3DHKfgreVaAAC55QkF6JKYUqJVd8HmDUuhtmFoxBgPdoKDTrN4eAXZDN0e6L9wN9Md5BB0wxYuW5NROdIJao0vpw2htIG3Wis%2BQ0XaEOpU%2Fed4gEEcw%2BtsaWBmSayLweWnZI7RY5%2B%2F5uhP0g7rNGsaZWU8zRie2BaaYyPpyNomg%2BxqraRUx4%2FKFJjtRSudZnrgU9rtNOhslia&X-Amz-Signature=8fb6748c82942f702d2093d246bef5e2621ee91da55f1914dd01010ffc8c7437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
