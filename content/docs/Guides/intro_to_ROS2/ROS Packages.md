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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBRODVUJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIClptXWlSKdn8Hqmfm%2B9SExbEYlTOAjwwKn4y26qYJIDAiEApm8hWyEjbIOoyAQhqplaQ5%2FZruXKZ0ogw9pQjtgGMCMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJRssgrFE0tzcomc0yrcA5KD9sXVBu9TbxGGKnvXckK%2Fi4Qnru%2BsK5li%2FaVDShO3xaWaVrejmrLnxy4tLOlbgMRji4xDEckAXNnKpC4bCz%2BAi8LbHAwlAe%2BV2vCeovTbbMYg9kCT8lMsFccY%2Bc6lqgQPnkV%2B21%2FenXXXhTYcOE8dIEPDcEUx0xL%2FbiILbKGqTcpZgR9B%2B8sIZMKDRTyBlCQLml2rz%2F5LW2hXRmArCSxx1rwSuAc82%2Bdr%2FYeuuhxEOPOIFLgY4EhWjY2oNztCZTOpOzcztEMpkXK6Fci3XJV1UaS5GFkcLZwUyXBXcrY4xQeT14GonY7YG%2BEsxXBYEqXqSXP0qTMvCuQsCl%2BiZ8yPAFf%2F8o79CfTVLVEPDU7EqxmT56z%2Bj%2BePasrdhPaPj8RfR9KSs12Y7Ylpwpv39kRYHNAKkGjbHCO0lgLeip8AUgkCYLHG2khkgCyi1eRxxKhlvuZYps1Jt%2Fv3dFM0kw4yr%2BG%2BV3sxLCHoVJOb%2Fm7%2Bhs7x2%2BT317tNgQewfx47GfmkIOyrm2Wg4ClSiyTC%2FRjj2EQZBdSo5neBCWz65UJfw4U5wbluLqyBFI1tO74Dh15OZ17mf6kXVVjMTZJIF%2FPXDXTRoJ87MONA6uCMbyqHp9Cch0cXOywUZdskMKC15b4GOqUBDiN0vmzvsUvUcaS6mTUw8U7OmY4s9a1ovw%2FtdIxdgyJeJkIfrWgCXeRKZfCXoeenUC1on%2BGRVCK5WfrvmxWsSjmPxQ%2F2WiwxK4P3MPimsOCEdU4Ycb9hInd20JEd6OUtl%2BI%2FtOWGsHNQ0jMDiWatYyQ4MYjWIONW3qwJcR3Z%2B7fvlU5dHPZGCORQHIQ4Qz47Jj7BtgVyJp%2Bw0UCt7V5xAbn1FXMk&X-Amz-Signature=42955a6a4b0342fbbf78b8d68dbe1ed1cea2d32250d59343db153c81f91e183e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBRODVUJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIClptXWlSKdn8Hqmfm%2B9SExbEYlTOAjwwKn4y26qYJIDAiEApm8hWyEjbIOoyAQhqplaQ5%2FZruXKZ0ogw9pQjtgGMCMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJRssgrFE0tzcomc0yrcA5KD9sXVBu9TbxGGKnvXckK%2Fi4Qnru%2BsK5li%2FaVDShO3xaWaVrejmrLnxy4tLOlbgMRji4xDEckAXNnKpC4bCz%2BAi8LbHAwlAe%2BV2vCeovTbbMYg9kCT8lMsFccY%2Bc6lqgQPnkV%2B21%2FenXXXhTYcOE8dIEPDcEUx0xL%2FbiILbKGqTcpZgR9B%2B8sIZMKDRTyBlCQLml2rz%2F5LW2hXRmArCSxx1rwSuAc82%2Bdr%2FYeuuhxEOPOIFLgY4EhWjY2oNztCZTOpOzcztEMpkXK6Fci3XJV1UaS5GFkcLZwUyXBXcrY4xQeT14GonY7YG%2BEsxXBYEqXqSXP0qTMvCuQsCl%2BiZ8yPAFf%2F8o79CfTVLVEPDU7EqxmT56z%2Bj%2BePasrdhPaPj8RfR9KSs12Y7Ylpwpv39kRYHNAKkGjbHCO0lgLeip8AUgkCYLHG2khkgCyi1eRxxKhlvuZYps1Jt%2Fv3dFM0kw4yr%2BG%2BV3sxLCHoVJOb%2Fm7%2Bhs7x2%2BT317tNgQewfx47GfmkIOyrm2Wg4ClSiyTC%2FRjj2EQZBdSo5neBCWz65UJfw4U5wbluLqyBFI1tO74Dh15OZ17mf6kXVVjMTZJIF%2FPXDXTRoJ87MONA6uCMbyqHp9Cch0cXOywUZdskMKC15b4GOqUBDiN0vmzvsUvUcaS6mTUw8U7OmY4s9a1ovw%2FtdIxdgyJeJkIfrWgCXeRKZfCXoeenUC1on%2BGRVCK5WfrvmxWsSjmPxQ%2F2WiwxK4P3MPimsOCEdU4Ycb9hInd20JEd6OUtl%2BI%2FtOWGsHNQ0jMDiWatYyQ4MYjWIONW3qwJcR3Z%2B7fvlU5dHPZGCORQHIQ4Qz47Jj7BtgVyJp%2Bw0UCt7V5xAbn1FXMk&X-Amz-Signature=ce0799e7e43da7a0377cf20c1c64b5c0239a605d67851d3353d06a03248774aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBRODVUJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIClptXWlSKdn8Hqmfm%2B9SExbEYlTOAjwwKn4y26qYJIDAiEApm8hWyEjbIOoyAQhqplaQ5%2FZruXKZ0ogw9pQjtgGMCMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJRssgrFE0tzcomc0yrcA5KD9sXVBu9TbxGGKnvXckK%2Fi4Qnru%2BsK5li%2FaVDShO3xaWaVrejmrLnxy4tLOlbgMRji4xDEckAXNnKpC4bCz%2BAi8LbHAwlAe%2BV2vCeovTbbMYg9kCT8lMsFccY%2Bc6lqgQPnkV%2B21%2FenXXXhTYcOE8dIEPDcEUx0xL%2FbiILbKGqTcpZgR9B%2B8sIZMKDRTyBlCQLml2rz%2F5LW2hXRmArCSxx1rwSuAc82%2Bdr%2FYeuuhxEOPOIFLgY4EhWjY2oNztCZTOpOzcztEMpkXK6Fci3XJV1UaS5GFkcLZwUyXBXcrY4xQeT14GonY7YG%2BEsxXBYEqXqSXP0qTMvCuQsCl%2BiZ8yPAFf%2F8o79CfTVLVEPDU7EqxmT56z%2Bj%2BePasrdhPaPj8RfR9KSs12Y7Ylpwpv39kRYHNAKkGjbHCO0lgLeip8AUgkCYLHG2khkgCyi1eRxxKhlvuZYps1Jt%2Fv3dFM0kw4yr%2BG%2BV3sxLCHoVJOb%2Fm7%2Bhs7x2%2BT317tNgQewfx47GfmkIOyrm2Wg4ClSiyTC%2FRjj2EQZBdSo5neBCWz65UJfw4U5wbluLqyBFI1tO74Dh15OZ17mf6kXVVjMTZJIF%2FPXDXTRoJ87MONA6uCMbyqHp9Cch0cXOywUZdskMKC15b4GOqUBDiN0vmzvsUvUcaS6mTUw8U7OmY4s9a1ovw%2FtdIxdgyJeJkIfrWgCXeRKZfCXoeenUC1on%2BGRVCK5WfrvmxWsSjmPxQ%2F2WiwxK4P3MPimsOCEdU4Ycb9hInd20JEd6OUtl%2BI%2FtOWGsHNQ0jMDiWatYyQ4MYjWIONW3qwJcR3Z%2B7fvlU5dHPZGCORQHIQ4Qz47Jj7BtgVyJp%2Bw0UCt7V5xAbn1FXMk&X-Amz-Signature=c7318f548a78feea9797948e1b9c0ecb85d6def7b1b1a5f92547bcf94e37f91f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBRODVUJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIClptXWlSKdn8Hqmfm%2B9SExbEYlTOAjwwKn4y26qYJIDAiEApm8hWyEjbIOoyAQhqplaQ5%2FZruXKZ0ogw9pQjtgGMCMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJRssgrFE0tzcomc0yrcA5KD9sXVBu9TbxGGKnvXckK%2Fi4Qnru%2BsK5li%2FaVDShO3xaWaVrejmrLnxy4tLOlbgMRji4xDEckAXNnKpC4bCz%2BAi8LbHAwlAe%2BV2vCeovTbbMYg9kCT8lMsFccY%2Bc6lqgQPnkV%2B21%2FenXXXhTYcOE8dIEPDcEUx0xL%2FbiILbKGqTcpZgR9B%2B8sIZMKDRTyBlCQLml2rz%2F5LW2hXRmArCSxx1rwSuAc82%2Bdr%2FYeuuhxEOPOIFLgY4EhWjY2oNztCZTOpOzcztEMpkXK6Fci3XJV1UaS5GFkcLZwUyXBXcrY4xQeT14GonY7YG%2BEsxXBYEqXqSXP0qTMvCuQsCl%2BiZ8yPAFf%2F8o79CfTVLVEPDU7EqxmT56z%2Bj%2BePasrdhPaPj8RfR9KSs12Y7Ylpwpv39kRYHNAKkGjbHCO0lgLeip8AUgkCYLHG2khkgCyi1eRxxKhlvuZYps1Jt%2Fv3dFM0kw4yr%2BG%2BV3sxLCHoVJOb%2Fm7%2Bhs7x2%2BT317tNgQewfx47GfmkIOyrm2Wg4ClSiyTC%2FRjj2EQZBdSo5neBCWz65UJfw4U5wbluLqyBFI1tO74Dh15OZ17mf6kXVVjMTZJIF%2FPXDXTRoJ87MONA6uCMbyqHp9Cch0cXOywUZdskMKC15b4GOqUBDiN0vmzvsUvUcaS6mTUw8U7OmY4s9a1ovw%2FtdIxdgyJeJkIfrWgCXeRKZfCXoeenUC1on%2BGRVCK5WfrvmxWsSjmPxQ%2F2WiwxK4P3MPimsOCEdU4Ycb9hInd20JEd6OUtl%2BI%2FtOWGsHNQ0jMDiWatYyQ4MYjWIONW3qwJcR3Z%2B7fvlU5dHPZGCORQHIQ4Qz47Jj7BtgVyJp%2Bw0UCt7V5xAbn1FXMk&X-Amz-Signature=26b18216f1f0e7009a355df6856783845e0a44023a66b390caf2eeaaf573f447&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBRODVUJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIClptXWlSKdn8Hqmfm%2B9SExbEYlTOAjwwKn4y26qYJIDAiEApm8hWyEjbIOoyAQhqplaQ5%2FZruXKZ0ogw9pQjtgGMCMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJRssgrFE0tzcomc0yrcA5KD9sXVBu9TbxGGKnvXckK%2Fi4Qnru%2BsK5li%2FaVDShO3xaWaVrejmrLnxy4tLOlbgMRji4xDEckAXNnKpC4bCz%2BAi8LbHAwlAe%2BV2vCeovTbbMYg9kCT8lMsFccY%2Bc6lqgQPnkV%2B21%2FenXXXhTYcOE8dIEPDcEUx0xL%2FbiILbKGqTcpZgR9B%2B8sIZMKDRTyBlCQLml2rz%2F5LW2hXRmArCSxx1rwSuAc82%2Bdr%2FYeuuhxEOPOIFLgY4EhWjY2oNztCZTOpOzcztEMpkXK6Fci3XJV1UaS5GFkcLZwUyXBXcrY4xQeT14GonY7YG%2BEsxXBYEqXqSXP0qTMvCuQsCl%2BiZ8yPAFf%2F8o79CfTVLVEPDU7EqxmT56z%2Bj%2BePasrdhPaPj8RfR9KSs12Y7Ylpwpv39kRYHNAKkGjbHCO0lgLeip8AUgkCYLHG2khkgCyi1eRxxKhlvuZYps1Jt%2Fv3dFM0kw4yr%2BG%2BV3sxLCHoVJOb%2Fm7%2Bhs7x2%2BT317tNgQewfx47GfmkIOyrm2Wg4ClSiyTC%2FRjj2EQZBdSo5neBCWz65UJfw4U5wbluLqyBFI1tO74Dh15OZ17mf6kXVVjMTZJIF%2FPXDXTRoJ87MONA6uCMbyqHp9Cch0cXOywUZdskMKC15b4GOqUBDiN0vmzvsUvUcaS6mTUw8U7OmY4s9a1ovw%2FtdIxdgyJeJkIfrWgCXeRKZfCXoeenUC1on%2BGRVCK5WfrvmxWsSjmPxQ%2F2WiwxK4P3MPimsOCEdU4Ycb9hInd20JEd6OUtl%2BI%2FtOWGsHNQ0jMDiWatYyQ4MYjWIONW3qwJcR3Z%2B7fvlU5dHPZGCORQHIQ4Qz47Jj7BtgVyJp%2Bw0UCt7V5xAbn1FXMk&X-Amz-Signature=f862aa8a7b00bd4a169144bd455172c114f3334dfebc7c09663770700b06c542&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBRODVUJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIClptXWlSKdn8Hqmfm%2B9SExbEYlTOAjwwKn4y26qYJIDAiEApm8hWyEjbIOoyAQhqplaQ5%2FZruXKZ0ogw9pQjtgGMCMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJRssgrFE0tzcomc0yrcA5KD9sXVBu9TbxGGKnvXckK%2Fi4Qnru%2BsK5li%2FaVDShO3xaWaVrejmrLnxy4tLOlbgMRji4xDEckAXNnKpC4bCz%2BAi8LbHAwlAe%2BV2vCeovTbbMYg9kCT8lMsFccY%2Bc6lqgQPnkV%2B21%2FenXXXhTYcOE8dIEPDcEUx0xL%2FbiILbKGqTcpZgR9B%2B8sIZMKDRTyBlCQLml2rz%2F5LW2hXRmArCSxx1rwSuAc82%2Bdr%2FYeuuhxEOPOIFLgY4EhWjY2oNztCZTOpOzcztEMpkXK6Fci3XJV1UaS5GFkcLZwUyXBXcrY4xQeT14GonY7YG%2BEsxXBYEqXqSXP0qTMvCuQsCl%2BiZ8yPAFf%2F8o79CfTVLVEPDU7EqxmT56z%2Bj%2BePasrdhPaPj8RfR9KSs12Y7Ylpwpv39kRYHNAKkGjbHCO0lgLeip8AUgkCYLHG2khkgCyi1eRxxKhlvuZYps1Jt%2Fv3dFM0kw4yr%2BG%2BV3sxLCHoVJOb%2Fm7%2Bhs7x2%2BT317tNgQewfx47GfmkIOyrm2Wg4ClSiyTC%2FRjj2EQZBdSo5neBCWz65UJfw4U5wbluLqyBFI1tO74Dh15OZ17mf6kXVVjMTZJIF%2FPXDXTRoJ87MONA6uCMbyqHp9Cch0cXOywUZdskMKC15b4GOqUBDiN0vmzvsUvUcaS6mTUw8U7OmY4s9a1ovw%2FtdIxdgyJeJkIfrWgCXeRKZfCXoeenUC1on%2BGRVCK5WfrvmxWsSjmPxQ%2F2WiwxK4P3MPimsOCEdU4Ycb9hInd20JEd6OUtl%2BI%2FtOWGsHNQ0jMDiWatYyQ4MYjWIONW3qwJcR3Z%2B7fvlU5dHPZGCORQHIQ4Qz47Jj7BtgVyJp%2Bw0UCt7V5xAbn1FXMk&X-Amz-Signature=87467b251d398480cb4f5a7dd03b22f5785e2865d973d44e4cbffa1081f1e30c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBRODVUJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIClptXWlSKdn8Hqmfm%2B9SExbEYlTOAjwwKn4y26qYJIDAiEApm8hWyEjbIOoyAQhqplaQ5%2FZruXKZ0ogw9pQjtgGMCMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJRssgrFE0tzcomc0yrcA5KD9sXVBu9TbxGGKnvXckK%2Fi4Qnru%2BsK5li%2FaVDShO3xaWaVrejmrLnxy4tLOlbgMRji4xDEckAXNnKpC4bCz%2BAi8LbHAwlAe%2BV2vCeovTbbMYg9kCT8lMsFccY%2Bc6lqgQPnkV%2B21%2FenXXXhTYcOE8dIEPDcEUx0xL%2FbiILbKGqTcpZgR9B%2B8sIZMKDRTyBlCQLml2rz%2F5LW2hXRmArCSxx1rwSuAc82%2Bdr%2FYeuuhxEOPOIFLgY4EhWjY2oNztCZTOpOzcztEMpkXK6Fci3XJV1UaS5GFkcLZwUyXBXcrY4xQeT14GonY7YG%2BEsxXBYEqXqSXP0qTMvCuQsCl%2BiZ8yPAFf%2F8o79CfTVLVEPDU7EqxmT56z%2Bj%2BePasrdhPaPj8RfR9KSs12Y7Ylpwpv39kRYHNAKkGjbHCO0lgLeip8AUgkCYLHG2khkgCyi1eRxxKhlvuZYps1Jt%2Fv3dFM0kw4yr%2BG%2BV3sxLCHoVJOb%2Fm7%2Bhs7x2%2BT317tNgQewfx47GfmkIOyrm2Wg4ClSiyTC%2FRjj2EQZBdSo5neBCWz65UJfw4U5wbluLqyBFI1tO74Dh15OZ17mf6kXVVjMTZJIF%2FPXDXTRoJ87MONA6uCMbyqHp9Cch0cXOywUZdskMKC15b4GOqUBDiN0vmzvsUvUcaS6mTUw8U7OmY4s9a1ovw%2FtdIxdgyJeJkIfrWgCXeRKZfCXoeenUC1on%2BGRVCK5WfrvmxWsSjmPxQ%2F2WiwxK4P3MPimsOCEdU4Ycb9hInd20JEd6OUtl%2BI%2FtOWGsHNQ0jMDiWatYyQ4MYjWIONW3qwJcR3Z%2B7fvlU5dHPZGCORQHIQ4Qz47Jj7BtgVyJp%2Bw0UCt7V5xAbn1FXMk&X-Amz-Signature=be2955fb057545c30af4cd050798f59b36b374097e28a9bca6375084d506c336&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
