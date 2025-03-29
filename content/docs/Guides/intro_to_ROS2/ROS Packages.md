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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYXUQJB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD%2BMyohZVsxcMQyI29Jf5M5yaPacOwfo4PS%2BGltcOy38QIge0ZhLKXhtobWu4ArtUpNcWaI2lCAU7IHiSmWeO4NTikq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMwgJ2lYjJtwTqV%2B8yrcA6HVKAWhLt0iE93LxRKRZXNpxAJOKsnqG0%2BaK6WkzRNBYUmtsv6A2oAs%2BC7Oc8FDbe3QfkBONApUOkr6IT%2BEELwMvWkUmJN3GwC%2FPOxXrWRjaOV7si4zRk1krsEhfadI55aAmSJekj%2Bbv%2F3kturV9zYubsdSwDLYSRsgYXHqoqabZG0DMbTuzZmNX46nWDRfk7DDpwf9Gf46lFGLmHJWuL9LOYS%2FGbfClq9l6z%2FuOe%2B33T%2FFIJorvjpOkJ0pMpq5tdqqcD30aJzj%2Bitq3T3WXZTlQPp2N3AmrquZ30ngac2%2BC5pKpyJTKLreGeJLK5tl6oa5DVTPftzyHdg1Q8AUBL5RyUAc%2FiWfqO24rfSjShZ%2BCc3kksa8FliQH9FTxAh0SGIJ5%2BaCurzau%2Fvey%2BFLD2EpgiyZ77elyfmGNuhNwEsn7%2BwSJalWumqPnxK7Q9OUuEGs5%2BLsnyq4RdiPy1IZMEpiZDpDd2kMbflNj4iCqCATpUUYyYAe67XXx6Z%2FUIBuzHnaxrjfznWufElXfGlJBZObNq9O%2FMGnP%2Bm7xr9fG711hi1AhNPFBZxWEoZs9I18iKjJ%2FUBZQxT4ZYnR%2B%2FGFSRcyGGTIh%2B211MageKHISieKyAIX1%2BbHrWSfQJQqMP6qnr8GOqUBwymtn5R0jzsVbbPn0sxNDeXySoSx7SeknfQMGfmRruwtKKvABvPuWXTCcOgx%2FhMN1Y3SdQ0IhGuyK3M4o0IDftJg2Xu%2BwQ5jmp2%2BhwE1jnwUlMTFGIoyrA8%2FljydoTq6HdKlnf5I6CLi0XeEb6SIQ%2FYbViRxtwU7b13NQisHz6uT370%2Fgz5TCH%2BF9Bx54ulfNj7Rb1CYvjKRLv93xxTSTQGsggae&X-Amz-Signature=e3bd5e0e1d8607435be0eabde43688034248fbb13553498855b7373c3e6df344&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYXUQJB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD%2BMyohZVsxcMQyI29Jf5M5yaPacOwfo4PS%2BGltcOy38QIge0ZhLKXhtobWu4ArtUpNcWaI2lCAU7IHiSmWeO4NTikq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMwgJ2lYjJtwTqV%2B8yrcA6HVKAWhLt0iE93LxRKRZXNpxAJOKsnqG0%2BaK6WkzRNBYUmtsv6A2oAs%2BC7Oc8FDbe3QfkBONApUOkr6IT%2BEELwMvWkUmJN3GwC%2FPOxXrWRjaOV7si4zRk1krsEhfadI55aAmSJekj%2Bbv%2F3kturV9zYubsdSwDLYSRsgYXHqoqabZG0DMbTuzZmNX46nWDRfk7DDpwf9Gf46lFGLmHJWuL9LOYS%2FGbfClq9l6z%2FuOe%2B33T%2FFIJorvjpOkJ0pMpq5tdqqcD30aJzj%2Bitq3T3WXZTlQPp2N3AmrquZ30ngac2%2BC5pKpyJTKLreGeJLK5tl6oa5DVTPftzyHdg1Q8AUBL5RyUAc%2FiWfqO24rfSjShZ%2BCc3kksa8FliQH9FTxAh0SGIJ5%2BaCurzau%2Fvey%2BFLD2EpgiyZ77elyfmGNuhNwEsn7%2BwSJalWumqPnxK7Q9OUuEGs5%2BLsnyq4RdiPy1IZMEpiZDpDd2kMbflNj4iCqCATpUUYyYAe67XXx6Z%2FUIBuzHnaxrjfznWufElXfGlJBZObNq9O%2FMGnP%2Bm7xr9fG711hi1AhNPFBZxWEoZs9I18iKjJ%2FUBZQxT4ZYnR%2B%2FGFSRcyGGTIh%2B211MageKHISieKyAIX1%2BbHrWSfQJQqMP6qnr8GOqUBwymtn5R0jzsVbbPn0sxNDeXySoSx7SeknfQMGfmRruwtKKvABvPuWXTCcOgx%2FhMN1Y3SdQ0IhGuyK3M4o0IDftJg2Xu%2BwQ5jmp2%2BhwE1jnwUlMTFGIoyrA8%2FljydoTq6HdKlnf5I6CLi0XeEb6SIQ%2FYbViRxtwU7b13NQisHz6uT370%2Fgz5TCH%2BF9Bx54ulfNj7Rb1CYvjKRLv93xxTSTQGsggae&X-Amz-Signature=477626753dfe5c8fca464eec5203876d7200175143ae907ade7240d8fa5f17f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYXUQJB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD%2BMyohZVsxcMQyI29Jf5M5yaPacOwfo4PS%2BGltcOy38QIge0ZhLKXhtobWu4ArtUpNcWaI2lCAU7IHiSmWeO4NTikq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMwgJ2lYjJtwTqV%2B8yrcA6HVKAWhLt0iE93LxRKRZXNpxAJOKsnqG0%2BaK6WkzRNBYUmtsv6A2oAs%2BC7Oc8FDbe3QfkBONApUOkr6IT%2BEELwMvWkUmJN3GwC%2FPOxXrWRjaOV7si4zRk1krsEhfadI55aAmSJekj%2Bbv%2F3kturV9zYubsdSwDLYSRsgYXHqoqabZG0DMbTuzZmNX46nWDRfk7DDpwf9Gf46lFGLmHJWuL9LOYS%2FGbfClq9l6z%2FuOe%2B33T%2FFIJorvjpOkJ0pMpq5tdqqcD30aJzj%2Bitq3T3WXZTlQPp2N3AmrquZ30ngac2%2BC5pKpyJTKLreGeJLK5tl6oa5DVTPftzyHdg1Q8AUBL5RyUAc%2FiWfqO24rfSjShZ%2BCc3kksa8FliQH9FTxAh0SGIJ5%2BaCurzau%2Fvey%2BFLD2EpgiyZ77elyfmGNuhNwEsn7%2BwSJalWumqPnxK7Q9OUuEGs5%2BLsnyq4RdiPy1IZMEpiZDpDd2kMbflNj4iCqCATpUUYyYAe67XXx6Z%2FUIBuzHnaxrjfznWufElXfGlJBZObNq9O%2FMGnP%2Bm7xr9fG711hi1AhNPFBZxWEoZs9I18iKjJ%2FUBZQxT4ZYnR%2B%2FGFSRcyGGTIh%2B211MageKHISieKyAIX1%2BbHrWSfQJQqMP6qnr8GOqUBwymtn5R0jzsVbbPn0sxNDeXySoSx7SeknfQMGfmRruwtKKvABvPuWXTCcOgx%2FhMN1Y3SdQ0IhGuyK3M4o0IDftJg2Xu%2BwQ5jmp2%2BhwE1jnwUlMTFGIoyrA8%2FljydoTq6HdKlnf5I6CLi0XeEb6SIQ%2FYbViRxtwU7b13NQisHz6uT370%2Fgz5TCH%2BF9Bx54ulfNj7Rb1CYvjKRLv93xxTSTQGsggae&X-Amz-Signature=c9c37ededda6a7fb78f0ac7bb8c309aa357e324b9b0868cceadf28e46a8a5605&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYXUQJB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD%2BMyohZVsxcMQyI29Jf5M5yaPacOwfo4PS%2BGltcOy38QIge0ZhLKXhtobWu4ArtUpNcWaI2lCAU7IHiSmWeO4NTikq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMwgJ2lYjJtwTqV%2B8yrcA6HVKAWhLt0iE93LxRKRZXNpxAJOKsnqG0%2BaK6WkzRNBYUmtsv6A2oAs%2BC7Oc8FDbe3QfkBONApUOkr6IT%2BEELwMvWkUmJN3GwC%2FPOxXrWRjaOV7si4zRk1krsEhfadI55aAmSJekj%2Bbv%2F3kturV9zYubsdSwDLYSRsgYXHqoqabZG0DMbTuzZmNX46nWDRfk7DDpwf9Gf46lFGLmHJWuL9LOYS%2FGbfClq9l6z%2FuOe%2B33T%2FFIJorvjpOkJ0pMpq5tdqqcD30aJzj%2Bitq3T3WXZTlQPp2N3AmrquZ30ngac2%2BC5pKpyJTKLreGeJLK5tl6oa5DVTPftzyHdg1Q8AUBL5RyUAc%2FiWfqO24rfSjShZ%2BCc3kksa8FliQH9FTxAh0SGIJ5%2BaCurzau%2Fvey%2BFLD2EpgiyZ77elyfmGNuhNwEsn7%2BwSJalWumqPnxK7Q9OUuEGs5%2BLsnyq4RdiPy1IZMEpiZDpDd2kMbflNj4iCqCATpUUYyYAe67XXx6Z%2FUIBuzHnaxrjfznWufElXfGlJBZObNq9O%2FMGnP%2Bm7xr9fG711hi1AhNPFBZxWEoZs9I18iKjJ%2FUBZQxT4ZYnR%2B%2FGFSRcyGGTIh%2B211MageKHISieKyAIX1%2BbHrWSfQJQqMP6qnr8GOqUBwymtn5R0jzsVbbPn0sxNDeXySoSx7SeknfQMGfmRruwtKKvABvPuWXTCcOgx%2FhMN1Y3SdQ0IhGuyK3M4o0IDftJg2Xu%2BwQ5jmp2%2BhwE1jnwUlMTFGIoyrA8%2FljydoTq6HdKlnf5I6CLi0XeEb6SIQ%2FYbViRxtwU7b13NQisHz6uT370%2Fgz5TCH%2BF9Bx54ulfNj7Rb1CYvjKRLv93xxTSTQGsggae&X-Amz-Signature=792c198e294c5c593c0d4d95a152ee5c86428373f0ee5f89aa3566890284e1bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYXUQJB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD%2BMyohZVsxcMQyI29Jf5M5yaPacOwfo4PS%2BGltcOy38QIge0ZhLKXhtobWu4ArtUpNcWaI2lCAU7IHiSmWeO4NTikq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMwgJ2lYjJtwTqV%2B8yrcA6HVKAWhLt0iE93LxRKRZXNpxAJOKsnqG0%2BaK6WkzRNBYUmtsv6A2oAs%2BC7Oc8FDbe3QfkBONApUOkr6IT%2BEELwMvWkUmJN3GwC%2FPOxXrWRjaOV7si4zRk1krsEhfadI55aAmSJekj%2Bbv%2F3kturV9zYubsdSwDLYSRsgYXHqoqabZG0DMbTuzZmNX46nWDRfk7DDpwf9Gf46lFGLmHJWuL9LOYS%2FGbfClq9l6z%2FuOe%2B33T%2FFIJorvjpOkJ0pMpq5tdqqcD30aJzj%2Bitq3T3WXZTlQPp2N3AmrquZ30ngac2%2BC5pKpyJTKLreGeJLK5tl6oa5DVTPftzyHdg1Q8AUBL5RyUAc%2FiWfqO24rfSjShZ%2BCc3kksa8FliQH9FTxAh0SGIJ5%2BaCurzau%2Fvey%2BFLD2EpgiyZ77elyfmGNuhNwEsn7%2BwSJalWumqPnxK7Q9OUuEGs5%2BLsnyq4RdiPy1IZMEpiZDpDd2kMbflNj4iCqCATpUUYyYAe67XXx6Z%2FUIBuzHnaxrjfznWufElXfGlJBZObNq9O%2FMGnP%2Bm7xr9fG711hi1AhNPFBZxWEoZs9I18iKjJ%2FUBZQxT4ZYnR%2B%2FGFSRcyGGTIh%2B211MageKHISieKyAIX1%2BbHrWSfQJQqMP6qnr8GOqUBwymtn5R0jzsVbbPn0sxNDeXySoSx7SeknfQMGfmRruwtKKvABvPuWXTCcOgx%2FhMN1Y3SdQ0IhGuyK3M4o0IDftJg2Xu%2BwQ5jmp2%2BhwE1jnwUlMTFGIoyrA8%2FljydoTq6HdKlnf5I6CLi0XeEb6SIQ%2FYbViRxtwU7b13NQisHz6uT370%2Fgz5TCH%2BF9Bx54ulfNj7Rb1CYvjKRLv93xxTSTQGsggae&X-Amz-Signature=3dd1730ce039167ed118838312f2c86010633ac24db77c4d40f06239a6483ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYXUQJB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD%2BMyohZVsxcMQyI29Jf5M5yaPacOwfo4PS%2BGltcOy38QIge0ZhLKXhtobWu4ArtUpNcWaI2lCAU7IHiSmWeO4NTikq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMwgJ2lYjJtwTqV%2B8yrcA6HVKAWhLt0iE93LxRKRZXNpxAJOKsnqG0%2BaK6WkzRNBYUmtsv6A2oAs%2BC7Oc8FDbe3QfkBONApUOkr6IT%2BEELwMvWkUmJN3GwC%2FPOxXrWRjaOV7si4zRk1krsEhfadI55aAmSJekj%2Bbv%2F3kturV9zYubsdSwDLYSRsgYXHqoqabZG0DMbTuzZmNX46nWDRfk7DDpwf9Gf46lFGLmHJWuL9LOYS%2FGbfClq9l6z%2FuOe%2B33T%2FFIJorvjpOkJ0pMpq5tdqqcD30aJzj%2Bitq3T3WXZTlQPp2N3AmrquZ30ngac2%2BC5pKpyJTKLreGeJLK5tl6oa5DVTPftzyHdg1Q8AUBL5RyUAc%2FiWfqO24rfSjShZ%2BCc3kksa8FliQH9FTxAh0SGIJ5%2BaCurzau%2Fvey%2BFLD2EpgiyZ77elyfmGNuhNwEsn7%2BwSJalWumqPnxK7Q9OUuEGs5%2BLsnyq4RdiPy1IZMEpiZDpDd2kMbflNj4iCqCATpUUYyYAe67XXx6Z%2FUIBuzHnaxrjfznWufElXfGlJBZObNq9O%2FMGnP%2Bm7xr9fG711hi1AhNPFBZxWEoZs9I18iKjJ%2FUBZQxT4ZYnR%2B%2FGFSRcyGGTIh%2B211MageKHISieKyAIX1%2BbHrWSfQJQqMP6qnr8GOqUBwymtn5R0jzsVbbPn0sxNDeXySoSx7SeknfQMGfmRruwtKKvABvPuWXTCcOgx%2FhMN1Y3SdQ0IhGuyK3M4o0IDftJg2Xu%2BwQ5jmp2%2BhwE1jnwUlMTFGIoyrA8%2FljydoTq6HdKlnf5I6CLi0XeEb6SIQ%2FYbViRxtwU7b13NQisHz6uT370%2Fgz5TCH%2BF9Bx54ulfNj7Rb1CYvjKRLv93xxTSTQGsggae&X-Amz-Signature=38ab13b5237195553c1bc962029aa6f39a80cb66dd75168bc25639b676088081&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYXUQJB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD%2BMyohZVsxcMQyI29Jf5M5yaPacOwfo4PS%2BGltcOy38QIge0ZhLKXhtobWu4ArtUpNcWaI2lCAU7IHiSmWeO4NTikq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMwgJ2lYjJtwTqV%2B8yrcA6HVKAWhLt0iE93LxRKRZXNpxAJOKsnqG0%2BaK6WkzRNBYUmtsv6A2oAs%2BC7Oc8FDbe3QfkBONApUOkr6IT%2BEELwMvWkUmJN3GwC%2FPOxXrWRjaOV7si4zRk1krsEhfadI55aAmSJekj%2Bbv%2F3kturV9zYubsdSwDLYSRsgYXHqoqabZG0DMbTuzZmNX46nWDRfk7DDpwf9Gf46lFGLmHJWuL9LOYS%2FGbfClq9l6z%2FuOe%2B33T%2FFIJorvjpOkJ0pMpq5tdqqcD30aJzj%2Bitq3T3WXZTlQPp2N3AmrquZ30ngac2%2BC5pKpyJTKLreGeJLK5tl6oa5DVTPftzyHdg1Q8AUBL5RyUAc%2FiWfqO24rfSjShZ%2BCc3kksa8FliQH9FTxAh0SGIJ5%2BaCurzau%2Fvey%2BFLD2EpgiyZ77elyfmGNuhNwEsn7%2BwSJalWumqPnxK7Q9OUuEGs5%2BLsnyq4RdiPy1IZMEpiZDpDd2kMbflNj4iCqCATpUUYyYAe67XXx6Z%2FUIBuzHnaxrjfznWufElXfGlJBZObNq9O%2FMGnP%2Bm7xr9fG711hi1AhNPFBZxWEoZs9I18iKjJ%2FUBZQxT4ZYnR%2B%2FGFSRcyGGTIh%2B211MageKHISieKyAIX1%2BbHrWSfQJQqMP6qnr8GOqUBwymtn5R0jzsVbbPn0sxNDeXySoSx7SeknfQMGfmRruwtKKvABvPuWXTCcOgx%2FhMN1Y3SdQ0IhGuyK3M4o0IDftJg2Xu%2BwQ5jmp2%2BhwE1jnwUlMTFGIoyrA8%2FljydoTq6HdKlnf5I6CLi0XeEb6SIQ%2FYbViRxtwU7b13NQisHz6uT370%2Fgz5TCH%2BF9Bx54ulfNj7Rb1CYvjKRLv93xxTSTQGsggae&X-Amz-Signature=696e47da06418283d99dc23b73041aa0ae63ecc82514d1e5860eee4f667c1ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
