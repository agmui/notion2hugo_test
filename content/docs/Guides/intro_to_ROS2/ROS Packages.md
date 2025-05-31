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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXQAPWE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2Ot%2BIUCR23YIx%2FwaDdvPpaZEjH2ca3cVznHmYnxtCAIhAPc43YstdRr9Mej5eed8Z%2F9vOLAeUHiOWDa8DeT7I871KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz51Lb9R%2BB9rAkkXAQq3ANOsOahWEfiqzUnIyFGdOicSTe5c%2B8xRkqLiNnDhtj3ESippkFbt%2BywvnlkREdyb70VXJBw8QHjw22DbxyONjYuU1KUP1A9XIzE9dNnNJS8ixP7FFBL%2BTkf3tUGZO6epdrY5I65HSvz1PHW1uSZna%2FN0bKXIWqMwdP7BtBtuzI8kJYY7kHWcB7VvehHdDS8bgU0cDTALvIImA6rl%2FQRNyYE%2F9atxrbezuMUOlafzpg%2FdNNCnNceS0NaDe9ZVkOB0rycH2i6YB29DqS6rb5rcIvwwSNlwCS150SZbbjYCaXEo0R05KQbRGz0n8WhVXxRc7wTdTP2pEaWuXxj%2F3S5UPsYkGiBcqZhfoFgGGp9WpQuBAAOeQc2XgMc7QyWxRFj7In68SK8dsRUxhMZlLdLYG%2FdOIyxwm2BZgyNDi79VMmj%2BeGeFFQ3WrcCFGHO7gyQqw42Bjo%2F3CaEnUeWT5TiZj%2BfZmvwReDYnYN0Efm0%2BlDh%2B9afBpuy0uE9KzaYq323wd7hoQva7DDvveqGbounr6LwZnywbwZqGqsf59WtONGI0UBtPdUE6fLQmNULcpRFx8rKsIGl15FJxkNMfpRgZ6%2FJ8BDrej%2BWASmDQHPlLkfFN07%2FxvpspUvF9Z4sbzDn3erBBjqkAXIklM8UVvEJllEFAtcu4afdPx06eV49mtPu4sdg50BrLTMHaV8vyyeCWW0eAkFDI8LWqIdl9ZwYzOM5%2FCcAOAOelsgen70%2BNtGAB5v%2FwvdQ1jWhMAXjaRH9epDL%2FaJ8yhlJgMmBlJWojgbZgmKRM5L3nDvcIb%2B25JPHkGqMD%2FS6ETM%2FYND5zQXz9ITygDU%2BVcjZlUDQg3AbV3bhdPHRZ9vqwE7b&X-Amz-Signature=00aac279189a88fd3621b854521c5e6df02aec2d4dd2543a2a0d4ebacea5f0fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXQAPWE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2Ot%2BIUCR23YIx%2FwaDdvPpaZEjH2ca3cVznHmYnxtCAIhAPc43YstdRr9Mej5eed8Z%2F9vOLAeUHiOWDa8DeT7I871KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz51Lb9R%2BB9rAkkXAQq3ANOsOahWEfiqzUnIyFGdOicSTe5c%2B8xRkqLiNnDhtj3ESippkFbt%2BywvnlkREdyb70VXJBw8QHjw22DbxyONjYuU1KUP1A9XIzE9dNnNJS8ixP7FFBL%2BTkf3tUGZO6epdrY5I65HSvz1PHW1uSZna%2FN0bKXIWqMwdP7BtBtuzI8kJYY7kHWcB7VvehHdDS8bgU0cDTALvIImA6rl%2FQRNyYE%2F9atxrbezuMUOlafzpg%2FdNNCnNceS0NaDe9ZVkOB0rycH2i6YB29DqS6rb5rcIvwwSNlwCS150SZbbjYCaXEo0R05KQbRGz0n8WhVXxRc7wTdTP2pEaWuXxj%2F3S5UPsYkGiBcqZhfoFgGGp9WpQuBAAOeQc2XgMc7QyWxRFj7In68SK8dsRUxhMZlLdLYG%2FdOIyxwm2BZgyNDi79VMmj%2BeGeFFQ3WrcCFGHO7gyQqw42Bjo%2F3CaEnUeWT5TiZj%2BfZmvwReDYnYN0Efm0%2BlDh%2B9afBpuy0uE9KzaYq323wd7hoQva7DDvveqGbounr6LwZnywbwZqGqsf59WtONGI0UBtPdUE6fLQmNULcpRFx8rKsIGl15FJxkNMfpRgZ6%2FJ8BDrej%2BWASmDQHPlLkfFN07%2FxvpspUvF9Z4sbzDn3erBBjqkAXIklM8UVvEJllEFAtcu4afdPx06eV49mtPu4sdg50BrLTMHaV8vyyeCWW0eAkFDI8LWqIdl9ZwYzOM5%2FCcAOAOelsgen70%2BNtGAB5v%2FwvdQ1jWhMAXjaRH9epDL%2FaJ8yhlJgMmBlJWojgbZgmKRM5L3nDvcIb%2B25JPHkGqMD%2FS6ETM%2FYND5zQXz9ITygDU%2BVcjZlUDQg3AbV3bhdPHRZ9vqwE7b&X-Amz-Signature=cdc75368b11b8c45b6078aa4dacb398f52949b4562ca09cbb1b5279fe9bbecf1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXQAPWE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2Ot%2BIUCR23YIx%2FwaDdvPpaZEjH2ca3cVznHmYnxtCAIhAPc43YstdRr9Mej5eed8Z%2F9vOLAeUHiOWDa8DeT7I871KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz51Lb9R%2BB9rAkkXAQq3ANOsOahWEfiqzUnIyFGdOicSTe5c%2B8xRkqLiNnDhtj3ESippkFbt%2BywvnlkREdyb70VXJBw8QHjw22DbxyONjYuU1KUP1A9XIzE9dNnNJS8ixP7FFBL%2BTkf3tUGZO6epdrY5I65HSvz1PHW1uSZna%2FN0bKXIWqMwdP7BtBtuzI8kJYY7kHWcB7VvehHdDS8bgU0cDTALvIImA6rl%2FQRNyYE%2F9atxrbezuMUOlafzpg%2FdNNCnNceS0NaDe9ZVkOB0rycH2i6YB29DqS6rb5rcIvwwSNlwCS150SZbbjYCaXEo0R05KQbRGz0n8WhVXxRc7wTdTP2pEaWuXxj%2F3S5UPsYkGiBcqZhfoFgGGp9WpQuBAAOeQc2XgMc7QyWxRFj7In68SK8dsRUxhMZlLdLYG%2FdOIyxwm2BZgyNDi79VMmj%2BeGeFFQ3WrcCFGHO7gyQqw42Bjo%2F3CaEnUeWT5TiZj%2BfZmvwReDYnYN0Efm0%2BlDh%2B9afBpuy0uE9KzaYq323wd7hoQva7DDvveqGbounr6LwZnywbwZqGqsf59WtONGI0UBtPdUE6fLQmNULcpRFx8rKsIGl15FJxkNMfpRgZ6%2FJ8BDrej%2BWASmDQHPlLkfFN07%2FxvpspUvF9Z4sbzDn3erBBjqkAXIklM8UVvEJllEFAtcu4afdPx06eV49mtPu4sdg50BrLTMHaV8vyyeCWW0eAkFDI8LWqIdl9ZwYzOM5%2FCcAOAOelsgen70%2BNtGAB5v%2FwvdQ1jWhMAXjaRH9epDL%2FaJ8yhlJgMmBlJWojgbZgmKRM5L3nDvcIb%2B25JPHkGqMD%2FS6ETM%2FYND5zQXz9ITygDU%2BVcjZlUDQg3AbV3bhdPHRZ9vqwE7b&X-Amz-Signature=b5c4b6470bcb801d4c79e8498574cca2b6a3de252e13c5f1eebd0ea839724c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXQAPWE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2Ot%2BIUCR23YIx%2FwaDdvPpaZEjH2ca3cVznHmYnxtCAIhAPc43YstdRr9Mej5eed8Z%2F9vOLAeUHiOWDa8DeT7I871KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz51Lb9R%2BB9rAkkXAQq3ANOsOahWEfiqzUnIyFGdOicSTe5c%2B8xRkqLiNnDhtj3ESippkFbt%2BywvnlkREdyb70VXJBw8QHjw22DbxyONjYuU1KUP1A9XIzE9dNnNJS8ixP7FFBL%2BTkf3tUGZO6epdrY5I65HSvz1PHW1uSZna%2FN0bKXIWqMwdP7BtBtuzI8kJYY7kHWcB7VvehHdDS8bgU0cDTALvIImA6rl%2FQRNyYE%2F9atxrbezuMUOlafzpg%2FdNNCnNceS0NaDe9ZVkOB0rycH2i6YB29DqS6rb5rcIvwwSNlwCS150SZbbjYCaXEo0R05KQbRGz0n8WhVXxRc7wTdTP2pEaWuXxj%2F3S5UPsYkGiBcqZhfoFgGGp9WpQuBAAOeQc2XgMc7QyWxRFj7In68SK8dsRUxhMZlLdLYG%2FdOIyxwm2BZgyNDi79VMmj%2BeGeFFQ3WrcCFGHO7gyQqw42Bjo%2F3CaEnUeWT5TiZj%2BfZmvwReDYnYN0Efm0%2BlDh%2B9afBpuy0uE9KzaYq323wd7hoQva7DDvveqGbounr6LwZnywbwZqGqsf59WtONGI0UBtPdUE6fLQmNULcpRFx8rKsIGl15FJxkNMfpRgZ6%2FJ8BDrej%2BWASmDQHPlLkfFN07%2FxvpspUvF9Z4sbzDn3erBBjqkAXIklM8UVvEJllEFAtcu4afdPx06eV49mtPu4sdg50BrLTMHaV8vyyeCWW0eAkFDI8LWqIdl9ZwYzOM5%2FCcAOAOelsgen70%2BNtGAB5v%2FwvdQ1jWhMAXjaRH9epDL%2FaJ8yhlJgMmBlJWojgbZgmKRM5L3nDvcIb%2B25JPHkGqMD%2FS6ETM%2FYND5zQXz9ITygDU%2BVcjZlUDQg3AbV3bhdPHRZ9vqwE7b&X-Amz-Signature=d55047bbb169a740dbe000664cf4f9030a8bc145957b3bc11b04aecd8b0d3d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXQAPWE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2Ot%2BIUCR23YIx%2FwaDdvPpaZEjH2ca3cVznHmYnxtCAIhAPc43YstdRr9Mej5eed8Z%2F9vOLAeUHiOWDa8DeT7I871KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz51Lb9R%2BB9rAkkXAQq3ANOsOahWEfiqzUnIyFGdOicSTe5c%2B8xRkqLiNnDhtj3ESippkFbt%2BywvnlkREdyb70VXJBw8QHjw22DbxyONjYuU1KUP1A9XIzE9dNnNJS8ixP7FFBL%2BTkf3tUGZO6epdrY5I65HSvz1PHW1uSZna%2FN0bKXIWqMwdP7BtBtuzI8kJYY7kHWcB7VvehHdDS8bgU0cDTALvIImA6rl%2FQRNyYE%2F9atxrbezuMUOlafzpg%2FdNNCnNceS0NaDe9ZVkOB0rycH2i6YB29DqS6rb5rcIvwwSNlwCS150SZbbjYCaXEo0R05KQbRGz0n8WhVXxRc7wTdTP2pEaWuXxj%2F3S5UPsYkGiBcqZhfoFgGGp9WpQuBAAOeQc2XgMc7QyWxRFj7In68SK8dsRUxhMZlLdLYG%2FdOIyxwm2BZgyNDi79VMmj%2BeGeFFQ3WrcCFGHO7gyQqw42Bjo%2F3CaEnUeWT5TiZj%2BfZmvwReDYnYN0Efm0%2BlDh%2B9afBpuy0uE9KzaYq323wd7hoQva7DDvveqGbounr6LwZnywbwZqGqsf59WtONGI0UBtPdUE6fLQmNULcpRFx8rKsIGl15FJxkNMfpRgZ6%2FJ8BDrej%2BWASmDQHPlLkfFN07%2FxvpspUvF9Z4sbzDn3erBBjqkAXIklM8UVvEJllEFAtcu4afdPx06eV49mtPu4sdg50BrLTMHaV8vyyeCWW0eAkFDI8LWqIdl9ZwYzOM5%2FCcAOAOelsgen70%2BNtGAB5v%2FwvdQ1jWhMAXjaRH9epDL%2FaJ8yhlJgMmBlJWojgbZgmKRM5L3nDvcIb%2B25JPHkGqMD%2FS6ETM%2FYND5zQXz9ITygDU%2BVcjZlUDQg3AbV3bhdPHRZ9vqwE7b&X-Amz-Signature=cd5a242227c076efe9c215416d07f7a259d8df4acfc1c5be7086bfd657d63eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXQAPWE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2Ot%2BIUCR23YIx%2FwaDdvPpaZEjH2ca3cVznHmYnxtCAIhAPc43YstdRr9Mej5eed8Z%2F9vOLAeUHiOWDa8DeT7I871KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz51Lb9R%2BB9rAkkXAQq3ANOsOahWEfiqzUnIyFGdOicSTe5c%2B8xRkqLiNnDhtj3ESippkFbt%2BywvnlkREdyb70VXJBw8QHjw22DbxyONjYuU1KUP1A9XIzE9dNnNJS8ixP7FFBL%2BTkf3tUGZO6epdrY5I65HSvz1PHW1uSZna%2FN0bKXIWqMwdP7BtBtuzI8kJYY7kHWcB7VvehHdDS8bgU0cDTALvIImA6rl%2FQRNyYE%2F9atxrbezuMUOlafzpg%2FdNNCnNceS0NaDe9ZVkOB0rycH2i6YB29DqS6rb5rcIvwwSNlwCS150SZbbjYCaXEo0R05KQbRGz0n8WhVXxRc7wTdTP2pEaWuXxj%2F3S5UPsYkGiBcqZhfoFgGGp9WpQuBAAOeQc2XgMc7QyWxRFj7In68SK8dsRUxhMZlLdLYG%2FdOIyxwm2BZgyNDi79VMmj%2BeGeFFQ3WrcCFGHO7gyQqw42Bjo%2F3CaEnUeWT5TiZj%2BfZmvwReDYnYN0Efm0%2BlDh%2B9afBpuy0uE9KzaYq323wd7hoQva7DDvveqGbounr6LwZnywbwZqGqsf59WtONGI0UBtPdUE6fLQmNULcpRFx8rKsIGl15FJxkNMfpRgZ6%2FJ8BDrej%2BWASmDQHPlLkfFN07%2FxvpspUvF9Z4sbzDn3erBBjqkAXIklM8UVvEJllEFAtcu4afdPx06eV49mtPu4sdg50BrLTMHaV8vyyeCWW0eAkFDI8LWqIdl9ZwYzOM5%2FCcAOAOelsgen70%2BNtGAB5v%2FwvdQ1jWhMAXjaRH9epDL%2FaJ8yhlJgMmBlJWojgbZgmKRM5L3nDvcIb%2B25JPHkGqMD%2FS6ETM%2FYND5zQXz9ITygDU%2BVcjZlUDQg3AbV3bhdPHRZ9vqwE7b&X-Amz-Signature=b04de800fac6fe1e684f36be550ab27ff4e5fe255907b44e1ae9e9584a3baa73&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXQAPWE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2Ot%2BIUCR23YIx%2FwaDdvPpaZEjH2ca3cVznHmYnxtCAIhAPc43YstdRr9Mej5eed8Z%2F9vOLAeUHiOWDa8DeT7I871KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz51Lb9R%2BB9rAkkXAQq3ANOsOahWEfiqzUnIyFGdOicSTe5c%2B8xRkqLiNnDhtj3ESippkFbt%2BywvnlkREdyb70VXJBw8QHjw22DbxyONjYuU1KUP1A9XIzE9dNnNJS8ixP7FFBL%2BTkf3tUGZO6epdrY5I65HSvz1PHW1uSZna%2FN0bKXIWqMwdP7BtBtuzI8kJYY7kHWcB7VvehHdDS8bgU0cDTALvIImA6rl%2FQRNyYE%2F9atxrbezuMUOlafzpg%2FdNNCnNceS0NaDe9ZVkOB0rycH2i6YB29DqS6rb5rcIvwwSNlwCS150SZbbjYCaXEo0R05KQbRGz0n8WhVXxRc7wTdTP2pEaWuXxj%2F3S5UPsYkGiBcqZhfoFgGGp9WpQuBAAOeQc2XgMc7QyWxRFj7In68SK8dsRUxhMZlLdLYG%2FdOIyxwm2BZgyNDi79VMmj%2BeGeFFQ3WrcCFGHO7gyQqw42Bjo%2F3CaEnUeWT5TiZj%2BfZmvwReDYnYN0Efm0%2BlDh%2B9afBpuy0uE9KzaYq323wd7hoQva7DDvveqGbounr6LwZnywbwZqGqsf59WtONGI0UBtPdUE6fLQmNULcpRFx8rKsIGl15FJxkNMfpRgZ6%2FJ8BDrej%2BWASmDQHPlLkfFN07%2FxvpspUvF9Z4sbzDn3erBBjqkAXIklM8UVvEJllEFAtcu4afdPx06eV49mtPu4sdg50BrLTMHaV8vyyeCWW0eAkFDI8LWqIdl9ZwYzOM5%2FCcAOAOelsgen70%2BNtGAB5v%2FwvdQ1jWhMAXjaRH9epDL%2FaJ8yhlJgMmBlJWojgbZgmKRM5L3nDvcIb%2B25JPHkGqMD%2FS6ETM%2FYND5zQXz9ITygDU%2BVcjZlUDQg3AbV3bhdPHRZ9vqwE7b&X-Amz-Signature=900fb8bcfbabcc9fac9f671de1f52a8f6827d94919d0dbcf2279d6e91126b00f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
