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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4TGKDK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElcpCkdGpMjge4rJbYwbgslB6V3qTXM5FtMngfwXeyCAiEAgL%2FwdMHkESLIgwfQVKn4UsXscwWxYlQj1gLnKiQQyvIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuTMPzyM1CqyHRyyCrcAyVnWNXLj2D5tGI1riTomS9uLB3Bv0u4bk16PhMkMElU3eQJXPHrcHzTEWnpxLwDQ0c4Sg2dTxknUtfKpF2XsaSMGTQpvtSEoGDBZGBLuAn%2BGXqs0RwsaoOFAuzLN4xKs7FxnUOlTq9Ol2e%2FjK4aP9E7UwjKx24gEIJceQN4BVwyPngg0T1jsJN%2B8FXOoW1PF8Hz7Scg5GedmDaIVA%2Bp4drG9sHaxLoWBPzFn497LDbAJxrtJnOrN8PwPcWFx5rxqR84CP9ngwJ646H0OwokC9vwgUiq%2FV3Po%2F13WeqtJaAdmDmILobyEbS7MLH7qmJelIdk8EzauF9KAgnX9dOqhiEP10y5N26SUJgb0UbpPNJZZJ73LF8CYab%2BgQ0cO1pFWEOgR3YcZvt8xhn60GL96aA1iXbsWlojXMxnu5%2B4BgsbVJZSv6G9oHCbmPA7wRblqDYx1gRnbMt9EL744vFQ9zWaBVe6YjSBWlESq54mqtRKSiZNb3447gVDXBDgtTi8BSo%2FL5HjfiQTBN21nB%2FEbVzNkJdBxoAdNkNW8ckLLf1fBy1xAUuYc2uSeOR7rbtOrVNyCYmUhhbnI69y%2Fz9D7Co7GwFtAIbmZIUeIfMrNuNXCxjXt%2BGJGAEPm3bOMLyxzb4GOqUBZjYWXg7eFEXwKpRYYzfGMr424aC3tGpOlvcFlNLyvDdtsu8Urx%2Fu3APR5iCooxEeV7L1CrwBsAwWCnNmCl90x%2FXsMAnnhRIXIzyRBQ7Rkm2oNrRayRRG3OsbZoEEiKxieTv7TXbySvjzaxGKiVyolD6PViC549WJ8rNhfHjGC2HO0w%2FgTiEj%2FlT58yvIGy5pNn7eVMwdrYvBYwlRSmFbJLvkoLG%2B&X-Amz-Signature=db85f92959ea352bb1685b22cb5bb311aa2657195c9f323fae91cd7915429e40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4TGKDK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElcpCkdGpMjge4rJbYwbgslB6V3qTXM5FtMngfwXeyCAiEAgL%2FwdMHkESLIgwfQVKn4UsXscwWxYlQj1gLnKiQQyvIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuTMPzyM1CqyHRyyCrcAyVnWNXLj2D5tGI1riTomS9uLB3Bv0u4bk16PhMkMElU3eQJXPHrcHzTEWnpxLwDQ0c4Sg2dTxknUtfKpF2XsaSMGTQpvtSEoGDBZGBLuAn%2BGXqs0RwsaoOFAuzLN4xKs7FxnUOlTq9Ol2e%2FjK4aP9E7UwjKx24gEIJceQN4BVwyPngg0T1jsJN%2B8FXOoW1PF8Hz7Scg5GedmDaIVA%2Bp4drG9sHaxLoWBPzFn497LDbAJxrtJnOrN8PwPcWFx5rxqR84CP9ngwJ646H0OwokC9vwgUiq%2FV3Po%2F13WeqtJaAdmDmILobyEbS7MLH7qmJelIdk8EzauF9KAgnX9dOqhiEP10y5N26SUJgb0UbpPNJZZJ73LF8CYab%2BgQ0cO1pFWEOgR3YcZvt8xhn60GL96aA1iXbsWlojXMxnu5%2B4BgsbVJZSv6G9oHCbmPA7wRblqDYx1gRnbMt9EL744vFQ9zWaBVe6YjSBWlESq54mqtRKSiZNb3447gVDXBDgtTi8BSo%2FL5HjfiQTBN21nB%2FEbVzNkJdBxoAdNkNW8ckLLf1fBy1xAUuYc2uSeOR7rbtOrVNyCYmUhhbnI69y%2Fz9D7Co7GwFtAIbmZIUeIfMrNuNXCxjXt%2BGJGAEPm3bOMLyxzb4GOqUBZjYWXg7eFEXwKpRYYzfGMr424aC3tGpOlvcFlNLyvDdtsu8Urx%2Fu3APR5iCooxEeV7L1CrwBsAwWCnNmCl90x%2FXsMAnnhRIXIzyRBQ7Rkm2oNrRayRRG3OsbZoEEiKxieTv7TXbySvjzaxGKiVyolD6PViC549WJ8rNhfHjGC2HO0w%2FgTiEj%2FlT58yvIGy5pNn7eVMwdrYvBYwlRSmFbJLvkoLG%2B&X-Amz-Signature=71f48bfe412e963a0ccb1d2476143e028bbcf2d684b089882dfc9b474caa3da4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4TGKDK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElcpCkdGpMjge4rJbYwbgslB6V3qTXM5FtMngfwXeyCAiEAgL%2FwdMHkESLIgwfQVKn4UsXscwWxYlQj1gLnKiQQyvIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuTMPzyM1CqyHRyyCrcAyVnWNXLj2D5tGI1riTomS9uLB3Bv0u4bk16PhMkMElU3eQJXPHrcHzTEWnpxLwDQ0c4Sg2dTxknUtfKpF2XsaSMGTQpvtSEoGDBZGBLuAn%2BGXqs0RwsaoOFAuzLN4xKs7FxnUOlTq9Ol2e%2FjK4aP9E7UwjKx24gEIJceQN4BVwyPngg0T1jsJN%2B8FXOoW1PF8Hz7Scg5GedmDaIVA%2Bp4drG9sHaxLoWBPzFn497LDbAJxrtJnOrN8PwPcWFx5rxqR84CP9ngwJ646H0OwokC9vwgUiq%2FV3Po%2F13WeqtJaAdmDmILobyEbS7MLH7qmJelIdk8EzauF9KAgnX9dOqhiEP10y5N26SUJgb0UbpPNJZZJ73LF8CYab%2BgQ0cO1pFWEOgR3YcZvt8xhn60GL96aA1iXbsWlojXMxnu5%2B4BgsbVJZSv6G9oHCbmPA7wRblqDYx1gRnbMt9EL744vFQ9zWaBVe6YjSBWlESq54mqtRKSiZNb3447gVDXBDgtTi8BSo%2FL5HjfiQTBN21nB%2FEbVzNkJdBxoAdNkNW8ckLLf1fBy1xAUuYc2uSeOR7rbtOrVNyCYmUhhbnI69y%2Fz9D7Co7GwFtAIbmZIUeIfMrNuNXCxjXt%2BGJGAEPm3bOMLyxzb4GOqUBZjYWXg7eFEXwKpRYYzfGMr424aC3tGpOlvcFlNLyvDdtsu8Urx%2Fu3APR5iCooxEeV7L1CrwBsAwWCnNmCl90x%2FXsMAnnhRIXIzyRBQ7Rkm2oNrRayRRG3OsbZoEEiKxieTv7TXbySvjzaxGKiVyolD6PViC549WJ8rNhfHjGC2HO0w%2FgTiEj%2FlT58yvIGy5pNn7eVMwdrYvBYwlRSmFbJLvkoLG%2B&X-Amz-Signature=e89cb96356dcdef25c36a5beacd9246cce10e0c5cbdc1e89dc6797dd924e5272&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4TGKDK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElcpCkdGpMjge4rJbYwbgslB6V3qTXM5FtMngfwXeyCAiEAgL%2FwdMHkESLIgwfQVKn4UsXscwWxYlQj1gLnKiQQyvIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuTMPzyM1CqyHRyyCrcAyVnWNXLj2D5tGI1riTomS9uLB3Bv0u4bk16PhMkMElU3eQJXPHrcHzTEWnpxLwDQ0c4Sg2dTxknUtfKpF2XsaSMGTQpvtSEoGDBZGBLuAn%2BGXqs0RwsaoOFAuzLN4xKs7FxnUOlTq9Ol2e%2FjK4aP9E7UwjKx24gEIJceQN4BVwyPngg0T1jsJN%2B8FXOoW1PF8Hz7Scg5GedmDaIVA%2Bp4drG9sHaxLoWBPzFn497LDbAJxrtJnOrN8PwPcWFx5rxqR84CP9ngwJ646H0OwokC9vwgUiq%2FV3Po%2F13WeqtJaAdmDmILobyEbS7MLH7qmJelIdk8EzauF9KAgnX9dOqhiEP10y5N26SUJgb0UbpPNJZZJ73LF8CYab%2BgQ0cO1pFWEOgR3YcZvt8xhn60GL96aA1iXbsWlojXMxnu5%2B4BgsbVJZSv6G9oHCbmPA7wRblqDYx1gRnbMt9EL744vFQ9zWaBVe6YjSBWlESq54mqtRKSiZNb3447gVDXBDgtTi8BSo%2FL5HjfiQTBN21nB%2FEbVzNkJdBxoAdNkNW8ckLLf1fBy1xAUuYc2uSeOR7rbtOrVNyCYmUhhbnI69y%2Fz9D7Co7GwFtAIbmZIUeIfMrNuNXCxjXt%2BGJGAEPm3bOMLyxzb4GOqUBZjYWXg7eFEXwKpRYYzfGMr424aC3tGpOlvcFlNLyvDdtsu8Urx%2Fu3APR5iCooxEeV7L1CrwBsAwWCnNmCl90x%2FXsMAnnhRIXIzyRBQ7Rkm2oNrRayRRG3OsbZoEEiKxieTv7TXbySvjzaxGKiVyolD6PViC549WJ8rNhfHjGC2HO0w%2FgTiEj%2FlT58yvIGy5pNn7eVMwdrYvBYwlRSmFbJLvkoLG%2B&X-Amz-Signature=936678eb0d399471110aed79b205576c40b452e681d0308a5996bba5f14de77d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4TGKDK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElcpCkdGpMjge4rJbYwbgslB6V3qTXM5FtMngfwXeyCAiEAgL%2FwdMHkESLIgwfQVKn4UsXscwWxYlQj1gLnKiQQyvIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuTMPzyM1CqyHRyyCrcAyVnWNXLj2D5tGI1riTomS9uLB3Bv0u4bk16PhMkMElU3eQJXPHrcHzTEWnpxLwDQ0c4Sg2dTxknUtfKpF2XsaSMGTQpvtSEoGDBZGBLuAn%2BGXqs0RwsaoOFAuzLN4xKs7FxnUOlTq9Ol2e%2FjK4aP9E7UwjKx24gEIJceQN4BVwyPngg0T1jsJN%2B8FXOoW1PF8Hz7Scg5GedmDaIVA%2Bp4drG9sHaxLoWBPzFn497LDbAJxrtJnOrN8PwPcWFx5rxqR84CP9ngwJ646H0OwokC9vwgUiq%2FV3Po%2F13WeqtJaAdmDmILobyEbS7MLH7qmJelIdk8EzauF9KAgnX9dOqhiEP10y5N26SUJgb0UbpPNJZZJ73LF8CYab%2BgQ0cO1pFWEOgR3YcZvt8xhn60GL96aA1iXbsWlojXMxnu5%2B4BgsbVJZSv6G9oHCbmPA7wRblqDYx1gRnbMt9EL744vFQ9zWaBVe6YjSBWlESq54mqtRKSiZNb3447gVDXBDgtTi8BSo%2FL5HjfiQTBN21nB%2FEbVzNkJdBxoAdNkNW8ckLLf1fBy1xAUuYc2uSeOR7rbtOrVNyCYmUhhbnI69y%2Fz9D7Co7GwFtAIbmZIUeIfMrNuNXCxjXt%2BGJGAEPm3bOMLyxzb4GOqUBZjYWXg7eFEXwKpRYYzfGMr424aC3tGpOlvcFlNLyvDdtsu8Urx%2Fu3APR5iCooxEeV7L1CrwBsAwWCnNmCl90x%2FXsMAnnhRIXIzyRBQ7Rkm2oNrRayRRG3OsbZoEEiKxieTv7TXbySvjzaxGKiVyolD6PViC549WJ8rNhfHjGC2HO0w%2FgTiEj%2FlT58yvIGy5pNn7eVMwdrYvBYwlRSmFbJLvkoLG%2B&X-Amz-Signature=c72398ca16cf0e57e20fb23c373b7eee433ffed19c6f7a9fc835410ea76a9f68&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4TGKDK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElcpCkdGpMjge4rJbYwbgslB6V3qTXM5FtMngfwXeyCAiEAgL%2FwdMHkESLIgwfQVKn4UsXscwWxYlQj1gLnKiQQyvIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuTMPzyM1CqyHRyyCrcAyVnWNXLj2D5tGI1riTomS9uLB3Bv0u4bk16PhMkMElU3eQJXPHrcHzTEWnpxLwDQ0c4Sg2dTxknUtfKpF2XsaSMGTQpvtSEoGDBZGBLuAn%2BGXqs0RwsaoOFAuzLN4xKs7FxnUOlTq9Ol2e%2FjK4aP9E7UwjKx24gEIJceQN4BVwyPngg0T1jsJN%2B8FXOoW1PF8Hz7Scg5GedmDaIVA%2Bp4drG9sHaxLoWBPzFn497LDbAJxrtJnOrN8PwPcWFx5rxqR84CP9ngwJ646H0OwokC9vwgUiq%2FV3Po%2F13WeqtJaAdmDmILobyEbS7MLH7qmJelIdk8EzauF9KAgnX9dOqhiEP10y5N26SUJgb0UbpPNJZZJ73LF8CYab%2BgQ0cO1pFWEOgR3YcZvt8xhn60GL96aA1iXbsWlojXMxnu5%2B4BgsbVJZSv6G9oHCbmPA7wRblqDYx1gRnbMt9EL744vFQ9zWaBVe6YjSBWlESq54mqtRKSiZNb3447gVDXBDgtTi8BSo%2FL5HjfiQTBN21nB%2FEbVzNkJdBxoAdNkNW8ckLLf1fBy1xAUuYc2uSeOR7rbtOrVNyCYmUhhbnI69y%2Fz9D7Co7GwFtAIbmZIUeIfMrNuNXCxjXt%2BGJGAEPm3bOMLyxzb4GOqUBZjYWXg7eFEXwKpRYYzfGMr424aC3tGpOlvcFlNLyvDdtsu8Urx%2Fu3APR5iCooxEeV7L1CrwBsAwWCnNmCl90x%2FXsMAnnhRIXIzyRBQ7Rkm2oNrRayRRG3OsbZoEEiKxieTv7TXbySvjzaxGKiVyolD6PViC549WJ8rNhfHjGC2HO0w%2FgTiEj%2FlT58yvIGy5pNn7eVMwdrYvBYwlRSmFbJLvkoLG%2B&X-Amz-Signature=5f9d118ce3c6e8bba6e0bcdaf392f8e8fd8a2fd3c70ea6b650d3bc852b8f9e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4TGKDK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElcpCkdGpMjge4rJbYwbgslB6V3qTXM5FtMngfwXeyCAiEAgL%2FwdMHkESLIgwfQVKn4UsXscwWxYlQj1gLnKiQQyvIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuTMPzyM1CqyHRyyCrcAyVnWNXLj2D5tGI1riTomS9uLB3Bv0u4bk16PhMkMElU3eQJXPHrcHzTEWnpxLwDQ0c4Sg2dTxknUtfKpF2XsaSMGTQpvtSEoGDBZGBLuAn%2BGXqs0RwsaoOFAuzLN4xKs7FxnUOlTq9Ol2e%2FjK4aP9E7UwjKx24gEIJceQN4BVwyPngg0T1jsJN%2B8FXOoW1PF8Hz7Scg5GedmDaIVA%2Bp4drG9sHaxLoWBPzFn497LDbAJxrtJnOrN8PwPcWFx5rxqR84CP9ngwJ646H0OwokC9vwgUiq%2FV3Po%2F13WeqtJaAdmDmILobyEbS7MLH7qmJelIdk8EzauF9KAgnX9dOqhiEP10y5N26SUJgb0UbpPNJZZJ73LF8CYab%2BgQ0cO1pFWEOgR3YcZvt8xhn60GL96aA1iXbsWlojXMxnu5%2B4BgsbVJZSv6G9oHCbmPA7wRblqDYx1gRnbMt9EL744vFQ9zWaBVe6YjSBWlESq54mqtRKSiZNb3447gVDXBDgtTi8BSo%2FL5HjfiQTBN21nB%2FEbVzNkJdBxoAdNkNW8ckLLf1fBy1xAUuYc2uSeOR7rbtOrVNyCYmUhhbnI69y%2Fz9D7Co7GwFtAIbmZIUeIfMrNuNXCxjXt%2BGJGAEPm3bOMLyxzb4GOqUBZjYWXg7eFEXwKpRYYzfGMr424aC3tGpOlvcFlNLyvDdtsu8Urx%2Fu3APR5iCooxEeV7L1CrwBsAwWCnNmCl90x%2FXsMAnnhRIXIzyRBQ7Rkm2oNrRayRRG3OsbZoEEiKxieTv7TXbySvjzaxGKiVyolD6PViC549WJ8rNhfHjGC2HO0w%2FgTiEj%2FlT58yvIGy5pNn7eVMwdrYvBYwlRSmFbJLvkoLG%2B&X-Amz-Signature=404744cc204effd3d87ce780aceb2c15ee50b273c3a018b54be5d52e4bdff004&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
