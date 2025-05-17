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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44Z7UV7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNdSKhJ%2BcFwda7nnpfCPYHpKqmcuj42HHpAvUFX4STVAiBld28On81AWNvQp8rgExtELeZNrUFiyhk8xbW1Y3JF1Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMsFnrbXrXXzUMgn8TKtwDDynBZCkCyxOqToJtpYJS5%2BuX37nNFHHYGJ1NlucdF9zzMFe41pYBYFUFY%2FeteiUExtmtN4Fxmeo7IOqoUen5BCXMiG5frQf95yB6N2nn%2Fr2ju2jJVXzKf5u59brQVroaGaNpf99I7DVKM%2BfJAuNq4Tf7rTLP1LoxC%2FqB6EHoRKQq3TAeY3UzI%2Brzix2GOBnvKwi5JJg5SQvhOVQWxwhDMbDJyURL3os2u%2BrclY9KslbDNX4TSfXrpMQJSWwoUtwabJyAAVR7idiEYygTE0Djg2Pk6fa01GamnSF%2Ft%2BZLQ9U7BWjy92jNlqMAA86Gx1lFBeVaclMn8LZQX3G%2FoHPUSIvygVC4LlIu0mIPv1DNFXCPP1u2B3tcECuMUDRSZeD5tXUlXZJqTLmC8oW0bAvibB9JEG4Fvv0Mo3Ebo2VYuBc8KYpV%2BcsvXxuhC8eoAt19sJ4PDAbQ6uNWMn%2FgPLIkzVz0BMt5unnxhKnFdu3su3dayQOKQWadQO53sD29n2EVEg6rGO7Drpm3KSDeu2vkLYi%2Fu9KUMFtdEsIprVhBvjD2mTZRVEY2c7adExfP5aQDjjbmFM6mfVrsZshYloLb1YMZw5p%2F3IfAPYSg4LOWNlmJBL8H7UL3baOFFgUwyPefwQY6pgEmL5gzUpQm1JOgmfHnuHzLs49iKDqlZjBYvD34zZ5kTNqrxHMNgavSnC2rDHInGY4Ua%2F0TxbldmbvVjYyeAt9r5UGjDgbno6LUHVXx06vIYvTVFQBeng5cvasjmCoxcVL8VMOZSpzFgNGeB304h0YpGG5jyl83I1RhYb%2FN%2Btj1l3XE4yBmP3Ah1AxcXiJ71mmMrnGBFaQian9I09nWp%2FERipg5FMuf&X-Amz-Signature=b4b9ccd6d74d64961d1a9afb068642dc07ba44f87b9057ded95c1898a782f00b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44Z7UV7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNdSKhJ%2BcFwda7nnpfCPYHpKqmcuj42HHpAvUFX4STVAiBld28On81AWNvQp8rgExtELeZNrUFiyhk8xbW1Y3JF1Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMsFnrbXrXXzUMgn8TKtwDDynBZCkCyxOqToJtpYJS5%2BuX37nNFHHYGJ1NlucdF9zzMFe41pYBYFUFY%2FeteiUExtmtN4Fxmeo7IOqoUen5BCXMiG5frQf95yB6N2nn%2Fr2ju2jJVXzKf5u59brQVroaGaNpf99I7DVKM%2BfJAuNq4Tf7rTLP1LoxC%2FqB6EHoRKQq3TAeY3UzI%2Brzix2GOBnvKwi5JJg5SQvhOVQWxwhDMbDJyURL3os2u%2BrclY9KslbDNX4TSfXrpMQJSWwoUtwabJyAAVR7idiEYygTE0Djg2Pk6fa01GamnSF%2Ft%2BZLQ9U7BWjy92jNlqMAA86Gx1lFBeVaclMn8LZQX3G%2FoHPUSIvygVC4LlIu0mIPv1DNFXCPP1u2B3tcECuMUDRSZeD5tXUlXZJqTLmC8oW0bAvibB9JEG4Fvv0Mo3Ebo2VYuBc8KYpV%2BcsvXxuhC8eoAt19sJ4PDAbQ6uNWMn%2FgPLIkzVz0BMt5unnxhKnFdu3su3dayQOKQWadQO53sD29n2EVEg6rGO7Drpm3KSDeu2vkLYi%2Fu9KUMFtdEsIprVhBvjD2mTZRVEY2c7adExfP5aQDjjbmFM6mfVrsZshYloLb1YMZw5p%2F3IfAPYSg4LOWNlmJBL8H7UL3baOFFgUwyPefwQY6pgEmL5gzUpQm1JOgmfHnuHzLs49iKDqlZjBYvD34zZ5kTNqrxHMNgavSnC2rDHInGY4Ua%2F0TxbldmbvVjYyeAt9r5UGjDgbno6LUHVXx06vIYvTVFQBeng5cvasjmCoxcVL8VMOZSpzFgNGeB304h0YpGG5jyl83I1RhYb%2FN%2Btj1l3XE4yBmP3Ah1AxcXiJ71mmMrnGBFaQian9I09nWp%2FERipg5FMuf&X-Amz-Signature=6e98c3ce38eee832a1485cf0b513227c09918b75bd2a11a13a94ee1fbbbe15c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44Z7UV7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNdSKhJ%2BcFwda7nnpfCPYHpKqmcuj42HHpAvUFX4STVAiBld28On81AWNvQp8rgExtELeZNrUFiyhk8xbW1Y3JF1Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMsFnrbXrXXzUMgn8TKtwDDynBZCkCyxOqToJtpYJS5%2BuX37nNFHHYGJ1NlucdF9zzMFe41pYBYFUFY%2FeteiUExtmtN4Fxmeo7IOqoUen5BCXMiG5frQf95yB6N2nn%2Fr2ju2jJVXzKf5u59brQVroaGaNpf99I7DVKM%2BfJAuNq4Tf7rTLP1LoxC%2FqB6EHoRKQq3TAeY3UzI%2Brzix2GOBnvKwi5JJg5SQvhOVQWxwhDMbDJyURL3os2u%2BrclY9KslbDNX4TSfXrpMQJSWwoUtwabJyAAVR7idiEYygTE0Djg2Pk6fa01GamnSF%2Ft%2BZLQ9U7BWjy92jNlqMAA86Gx1lFBeVaclMn8LZQX3G%2FoHPUSIvygVC4LlIu0mIPv1DNFXCPP1u2B3tcECuMUDRSZeD5tXUlXZJqTLmC8oW0bAvibB9JEG4Fvv0Mo3Ebo2VYuBc8KYpV%2BcsvXxuhC8eoAt19sJ4PDAbQ6uNWMn%2FgPLIkzVz0BMt5unnxhKnFdu3su3dayQOKQWadQO53sD29n2EVEg6rGO7Drpm3KSDeu2vkLYi%2Fu9KUMFtdEsIprVhBvjD2mTZRVEY2c7adExfP5aQDjjbmFM6mfVrsZshYloLb1YMZw5p%2F3IfAPYSg4LOWNlmJBL8H7UL3baOFFgUwyPefwQY6pgEmL5gzUpQm1JOgmfHnuHzLs49iKDqlZjBYvD34zZ5kTNqrxHMNgavSnC2rDHInGY4Ua%2F0TxbldmbvVjYyeAt9r5UGjDgbno6LUHVXx06vIYvTVFQBeng5cvasjmCoxcVL8VMOZSpzFgNGeB304h0YpGG5jyl83I1RhYb%2FN%2Btj1l3XE4yBmP3Ah1AxcXiJ71mmMrnGBFaQian9I09nWp%2FERipg5FMuf&X-Amz-Signature=b06ae9525836b062b527070a2055e93af4ac45385e3272e661df0dc918cfc96d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44Z7UV7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNdSKhJ%2BcFwda7nnpfCPYHpKqmcuj42HHpAvUFX4STVAiBld28On81AWNvQp8rgExtELeZNrUFiyhk8xbW1Y3JF1Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMsFnrbXrXXzUMgn8TKtwDDynBZCkCyxOqToJtpYJS5%2BuX37nNFHHYGJ1NlucdF9zzMFe41pYBYFUFY%2FeteiUExtmtN4Fxmeo7IOqoUen5BCXMiG5frQf95yB6N2nn%2Fr2ju2jJVXzKf5u59brQVroaGaNpf99I7DVKM%2BfJAuNq4Tf7rTLP1LoxC%2FqB6EHoRKQq3TAeY3UzI%2Brzix2GOBnvKwi5JJg5SQvhOVQWxwhDMbDJyURL3os2u%2BrclY9KslbDNX4TSfXrpMQJSWwoUtwabJyAAVR7idiEYygTE0Djg2Pk6fa01GamnSF%2Ft%2BZLQ9U7BWjy92jNlqMAA86Gx1lFBeVaclMn8LZQX3G%2FoHPUSIvygVC4LlIu0mIPv1DNFXCPP1u2B3tcECuMUDRSZeD5tXUlXZJqTLmC8oW0bAvibB9JEG4Fvv0Mo3Ebo2VYuBc8KYpV%2BcsvXxuhC8eoAt19sJ4PDAbQ6uNWMn%2FgPLIkzVz0BMt5unnxhKnFdu3su3dayQOKQWadQO53sD29n2EVEg6rGO7Drpm3KSDeu2vkLYi%2Fu9KUMFtdEsIprVhBvjD2mTZRVEY2c7adExfP5aQDjjbmFM6mfVrsZshYloLb1YMZw5p%2F3IfAPYSg4LOWNlmJBL8H7UL3baOFFgUwyPefwQY6pgEmL5gzUpQm1JOgmfHnuHzLs49iKDqlZjBYvD34zZ5kTNqrxHMNgavSnC2rDHInGY4Ua%2F0TxbldmbvVjYyeAt9r5UGjDgbno6LUHVXx06vIYvTVFQBeng5cvasjmCoxcVL8VMOZSpzFgNGeB304h0YpGG5jyl83I1RhYb%2FN%2Btj1l3XE4yBmP3Ah1AxcXiJ71mmMrnGBFaQian9I09nWp%2FERipg5FMuf&X-Amz-Signature=d059b27aba1ef2882853a20fe3d07df77ee898dc9c33dc3e476b9cd1bc4ce831&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44Z7UV7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNdSKhJ%2BcFwda7nnpfCPYHpKqmcuj42HHpAvUFX4STVAiBld28On81AWNvQp8rgExtELeZNrUFiyhk8xbW1Y3JF1Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMsFnrbXrXXzUMgn8TKtwDDynBZCkCyxOqToJtpYJS5%2BuX37nNFHHYGJ1NlucdF9zzMFe41pYBYFUFY%2FeteiUExtmtN4Fxmeo7IOqoUen5BCXMiG5frQf95yB6N2nn%2Fr2ju2jJVXzKf5u59brQVroaGaNpf99I7DVKM%2BfJAuNq4Tf7rTLP1LoxC%2FqB6EHoRKQq3TAeY3UzI%2Brzix2GOBnvKwi5JJg5SQvhOVQWxwhDMbDJyURL3os2u%2BrclY9KslbDNX4TSfXrpMQJSWwoUtwabJyAAVR7idiEYygTE0Djg2Pk6fa01GamnSF%2Ft%2BZLQ9U7BWjy92jNlqMAA86Gx1lFBeVaclMn8LZQX3G%2FoHPUSIvygVC4LlIu0mIPv1DNFXCPP1u2B3tcECuMUDRSZeD5tXUlXZJqTLmC8oW0bAvibB9JEG4Fvv0Mo3Ebo2VYuBc8KYpV%2BcsvXxuhC8eoAt19sJ4PDAbQ6uNWMn%2FgPLIkzVz0BMt5unnxhKnFdu3su3dayQOKQWadQO53sD29n2EVEg6rGO7Drpm3KSDeu2vkLYi%2Fu9KUMFtdEsIprVhBvjD2mTZRVEY2c7adExfP5aQDjjbmFM6mfVrsZshYloLb1YMZw5p%2F3IfAPYSg4LOWNlmJBL8H7UL3baOFFgUwyPefwQY6pgEmL5gzUpQm1JOgmfHnuHzLs49iKDqlZjBYvD34zZ5kTNqrxHMNgavSnC2rDHInGY4Ua%2F0TxbldmbvVjYyeAt9r5UGjDgbno6LUHVXx06vIYvTVFQBeng5cvasjmCoxcVL8VMOZSpzFgNGeB304h0YpGG5jyl83I1RhYb%2FN%2Btj1l3XE4yBmP3Ah1AxcXiJ71mmMrnGBFaQian9I09nWp%2FERipg5FMuf&X-Amz-Signature=439966c357c07f6c3e89f649ba83a4b53c4fc1d6d619eea9d87c834b35a02bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44Z7UV7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNdSKhJ%2BcFwda7nnpfCPYHpKqmcuj42HHpAvUFX4STVAiBld28On81AWNvQp8rgExtELeZNrUFiyhk8xbW1Y3JF1Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMsFnrbXrXXzUMgn8TKtwDDynBZCkCyxOqToJtpYJS5%2BuX37nNFHHYGJ1NlucdF9zzMFe41pYBYFUFY%2FeteiUExtmtN4Fxmeo7IOqoUen5BCXMiG5frQf95yB6N2nn%2Fr2ju2jJVXzKf5u59brQVroaGaNpf99I7DVKM%2BfJAuNq4Tf7rTLP1LoxC%2FqB6EHoRKQq3TAeY3UzI%2Brzix2GOBnvKwi5JJg5SQvhOVQWxwhDMbDJyURL3os2u%2BrclY9KslbDNX4TSfXrpMQJSWwoUtwabJyAAVR7idiEYygTE0Djg2Pk6fa01GamnSF%2Ft%2BZLQ9U7BWjy92jNlqMAA86Gx1lFBeVaclMn8LZQX3G%2FoHPUSIvygVC4LlIu0mIPv1DNFXCPP1u2B3tcECuMUDRSZeD5tXUlXZJqTLmC8oW0bAvibB9JEG4Fvv0Mo3Ebo2VYuBc8KYpV%2BcsvXxuhC8eoAt19sJ4PDAbQ6uNWMn%2FgPLIkzVz0BMt5unnxhKnFdu3su3dayQOKQWadQO53sD29n2EVEg6rGO7Drpm3KSDeu2vkLYi%2Fu9KUMFtdEsIprVhBvjD2mTZRVEY2c7adExfP5aQDjjbmFM6mfVrsZshYloLb1YMZw5p%2F3IfAPYSg4LOWNlmJBL8H7UL3baOFFgUwyPefwQY6pgEmL5gzUpQm1JOgmfHnuHzLs49iKDqlZjBYvD34zZ5kTNqrxHMNgavSnC2rDHInGY4Ua%2F0TxbldmbvVjYyeAt9r5UGjDgbno6LUHVXx06vIYvTVFQBeng5cvasjmCoxcVL8VMOZSpzFgNGeB304h0YpGG5jyl83I1RhYb%2FN%2Btj1l3XE4yBmP3Ah1AxcXiJ71mmMrnGBFaQian9I09nWp%2FERipg5FMuf&X-Amz-Signature=096bae9e37ea5d8a72874375792b68997399282a9b34fd5a615f10aa26a881e1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44Z7UV7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNdSKhJ%2BcFwda7nnpfCPYHpKqmcuj42HHpAvUFX4STVAiBld28On81AWNvQp8rgExtELeZNrUFiyhk8xbW1Y3JF1Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMsFnrbXrXXzUMgn8TKtwDDynBZCkCyxOqToJtpYJS5%2BuX37nNFHHYGJ1NlucdF9zzMFe41pYBYFUFY%2FeteiUExtmtN4Fxmeo7IOqoUen5BCXMiG5frQf95yB6N2nn%2Fr2ju2jJVXzKf5u59brQVroaGaNpf99I7DVKM%2BfJAuNq4Tf7rTLP1LoxC%2FqB6EHoRKQq3TAeY3UzI%2Brzix2GOBnvKwi5JJg5SQvhOVQWxwhDMbDJyURL3os2u%2BrclY9KslbDNX4TSfXrpMQJSWwoUtwabJyAAVR7idiEYygTE0Djg2Pk6fa01GamnSF%2Ft%2BZLQ9U7BWjy92jNlqMAA86Gx1lFBeVaclMn8LZQX3G%2FoHPUSIvygVC4LlIu0mIPv1DNFXCPP1u2B3tcECuMUDRSZeD5tXUlXZJqTLmC8oW0bAvibB9JEG4Fvv0Mo3Ebo2VYuBc8KYpV%2BcsvXxuhC8eoAt19sJ4PDAbQ6uNWMn%2FgPLIkzVz0BMt5unnxhKnFdu3su3dayQOKQWadQO53sD29n2EVEg6rGO7Drpm3KSDeu2vkLYi%2Fu9KUMFtdEsIprVhBvjD2mTZRVEY2c7adExfP5aQDjjbmFM6mfVrsZshYloLb1YMZw5p%2F3IfAPYSg4LOWNlmJBL8H7UL3baOFFgUwyPefwQY6pgEmL5gzUpQm1JOgmfHnuHzLs49iKDqlZjBYvD34zZ5kTNqrxHMNgavSnC2rDHInGY4Ua%2F0TxbldmbvVjYyeAt9r5UGjDgbno6LUHVXx06vIYvTVFQBeng5cvasjmCoxcVL8VMOZSpzFgNGeB304h0YpGG5jyl83I1RhYb%2FN%2Btj1l3XE4yBmP3Ah1AxcXiJ71mmMrnGBFaQian9I09nWp%2FERipg5FMuf&X-Amz-Signature=e5698bfa9ab2b59d3887e36d57b17758a2ab4feec7745d5332f9558503299163&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
