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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLANQNH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEiJJ0WNH7QOmXDN4ykmbFVSNVFiXgkRgyUKPqXkptXwAiEAgGn5M7KBLJAJPIwfsdbgW19gqnsfE%2FHVzb7vBwhI2ooqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgmcPHW5bCdsG2dgyrcAxHOMgC3zMPLibXRPuQSaYu9ZPRgvPHROwxEBpNTHONGdneb8LLBqCB7YHkL8uLfQvF4CYNOBZpRKoKzBW07jy5gY5swmPVeyY7KvLsUJeR2DEzQlozWUl04kql52n%2FQNCXmz1H1XCc8Vo5d0CYP%2BYd6KwQAQc6TQAiwe981SIA%2BU0A5e%2FLnVtEYe4a0H7Ln7YCRKrQzAcBDie90XRjf6UbYYnltVgPYhM5SwHXV8GmmpTfjZY1XQ5%2F4goKoqsN%2F01rNaPEkQEzK14CX0cEyDUocztT0AvpHrYUcII27WCJBqeef15t23DhVPUcVZFe7zsX9pLxeN7wmnQC%2FZ%2Flufp9oK8zjietI%2BtTTHqXpHZThNnUP6vtxC9%2FEa9LHS3h7pIZxTrCJqPQGFF5KJY4kW0dxTnsFJeC9Pe8pfA88WT8gYYjbD0%2FtjkTweZvOWiuUyXbIF4KmNoeP08NpZXAM6Hzlm0RteoFTp9HLUg8T0dnYJ1Vp4We66IDGbEWWNXYbh7oV7VRDqbs1Ng95lFKmbQffHRL8fv6yp9BIoYBbRPKKUxaGO58iVe%2B770yKPxzW%2BZ91qqo5jaJDlVIEkPMr%2FdPVh95N79C5U2gMnO42yESng0iI%2FQ7kKZxaOLLQMO7ohsEGOqUB94MN676xBPFHGbihylife7Egt2wEWrgaDMqEMVbFeU%2BJY30kkdSdjm%2BnI1CLsMoociQkXhdrzgyUnRtWwJ4KF%2F2bQ4CSjSjv0PVpfJfOX8jowM9YAsw6gBI%2FLeEizyFukBOUUzSfkCYTJACP%2FOQr0tiPSN55mhk7jnVlIUGBLD6tWvJw9E8kEgHvGPRS9Rcc%2BhAYyuT7brTc6x3s279G9Af3v8DQ&X-Amz-Signature=50c48c598155eebd56e6d99799ed7a3d8c9fd09a2816b86bbde6a96f86d049bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLANQNH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEiJJ0WNH7QOmXDN4ykmbFVSNVFiXgkRgyUKPqXkptXwAiEAgGn5M7KBLJAJPIwfsdbgW19gqnsfE%2FHVzb7vBwhI2ooqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgmcPHW5bCdsG2dgyrcAxHOMgC3zMPLibXRPuQSaYu9ZPRgvPHROwxEBpNTHONGdneb8LLBqCB7YHkL8uLfQvF4CYNOBZpRKoKzBW07jy5gY5swmPVeyY7KvLsUJeR2DEzQlozWUl04kql52n%2FQNCXmz1H1XCc8Vo5d0CYP%2BYd6KwQAQc6TQAiwe981SIA%2BU0A5e%2FLnVtEYe4a0H7Ln7YCRKrQzAcBDie90XRjf6UbYYnltVgPYhM5SwHXV8GmmpTfjZY1XQ5%2F4goKoqsN%2F01rNaPEkQEzK14CX0cEyDUocztT0AvpHrYUcII27WCJBqeef15t23DhVPUcVZFe7zsX9pLxeN7wmnQC%2FZ%2Flufp9oK8zjietI%2BtTTHqXpHZThNnUP6vtxC9%2FEa9LHS3h7pIZxTrCJqPQGFF5KJY4kW0dxTnsFJeC9Pe8pfA88WT8gYYjbD0%2FtjkTweZvOWiuUyXbIF4KmNoeP08NpZXAM6Hzlm0RteoFTp9HLUg8T0dnYJ1Vp4We66IDGbEWWNXYbh7oV7VRDqbs1Ng95lFKmbQffHRL8fv6yp9BIoYBbRPKKUxaGO58iVe%2B770yKPxzW%2BZ91qqo5jaJDlVIEkPMr%2FdPVh95N79C5U2gMnO42yESng0iI%2FQ7kKZxaOLLQMO7ohsEGOqUB94MN676xBPFHGbihylife7Egt2wEWrgaDMqEMVbFeU%2BJY30kkdSdjm%2BnI1CLsMoociQkXhdrzgyUnRtWwJ4KF%2F2bQ4CSjSjv0PVpfJfOX8jowM9YAsw6gBI%2FLeEizyFukBOUUzSfkCYTJACP%2FOQr0tiPSN55mhk7jnVlIUGBLD6tWvJw9E8kEgHvGPRS9Rcc%2BhAYyuT7brTc6x3s279G9Af3v8DQ&X-Amz-Signature=845a90f1207c9d88a1d574f5f76011a0267ba2d63f707f39126780a002b866bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLANQNH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEiJJ0WNH7QOmXDN4ykmbFVSNVFiXgkRgyUKPqXkptXwAiEAgGn5M7KBLJAJPIwfsdbgW19gqnsfE%2FHVzb7vBwhI2ooqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgmcPHW5bCdsG2dgyrcAxHOMgC3zMPLibXRPuQSaYu9ZPRgvPHROwxEBpNTHONGdneb8LLBqCB7YHkL8uLfQvF4CYNOBZpRKoKzBW07jy5gY5swmPVeyY7KvLsUJeR2DEzQlozWUl04kql52n%2FQNCXmz1H1XCc8Vo5d0CYP%2BYd6KwQAQc6TQAiwe981SIA%2BU0A5e%2FLnVtEYe4a0H7Ln7YCRKrQzAcBDie90XRjf6UbYYnltVgPYhM5SwHXV8GmmpTfjZY1XQ5%2F4goKoqsN%2F01rNaPEkQEzK14CX0cEyDUocztT0AvpHrYUcII27WCJBqeef15t23DhVPUcVZFe7zsX9pLxeN7wmnQC%2FZ%2Flufp9oK8zjietI%2BtTTHqXpHZThNnUP6vtxC9%2FEa9LHS3h7pIZxTrCJqPQGFF5KJY4kW0dxTnsFJeC9Pe8pfA88WT8gYYjbD0%2FtjkTweZvOWiuUyXbIF4KmNoeP08NpZXAM6Hzlm0RteoFTp9HLUg8T0dnYJ1Vp4We66IDGbEWWNXYbh7oV7VRDqbs1Ng95lFKmbQffHRL8fv6yp9BIoYBbRPKKUxaGO58iVe%2B770yKPxzW%2BZ91qqo5jaJDlVIEkPMr%2FdPVh95N79C5U2gMnO42yESng0iI%2FQ7kKZxaOLLQMO7ohsEGOqUB94MN676xBPFHGbihylife7Egt2wEWrgaDMqEMVbFeU%2BJY30kkdSdjm%2BnI1CLsMoociQkXhdrzgyUnRtWwJ4KF%2F2bQ4CSjSjv0PVpfJfOX8jowM9YAsw6gBI%2FLeEizyFukBOUUzSfkCYTJACP%2FOQr0tiPSN55mhk7jnVlIUGBLD6tWvJw9E8kEgHvGPRS9Rcc%2BhAYyuT7brTc6x3s279G9Af3v8DQ&X-Amz-Signature=5c91247b30d2689082fd90e1a3831d44b783dffa151b54722266251656d06685&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLANQNH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEiJJ0WNH7QOmXDN4ykmbFVSNVFiXgkRgyUKPqXkptXwAiEAgGn5M7KBLJAJPIwfsdbgW19gqnsfE%2FHVzb7vBwhI2ooqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgmcPHW5bCdsG2dgyrcAxHOMgC3zMPLibXRPuQSaYu9ZPRgvPHROwxEBpNTHONGdneb8LLBqCB7YHkL8uLfQvF4CYNOBZpRKoKzBW07jy5gY5swmPVeyY7KvLsUJeR2DEzQlozWUl04kql52n%2FQNCXmz1H1XCc8Vo5d0CYP%2BYd6KwQAQc6TQAiwe981SIA%2BU0A5e%2FLnVtEYe4a0H7Ln7YCRKrQzAcBDie90XRjf6UbYYnltVgPYhM5SwHXV8GmmpTfjZY1XQ5%2F4goKoqsN%2F01rNaPEkQEzK14CX0cEyDUocztT0AvpHrYUcII27WCJBqeef15t23DhVPUcVZFe7zsX9pLxeN7wmnQC%2FZ%2Flufp9oK8zjietI%2BtTTHqXpHZThNnUP6vtxC9%2FEa9LHS3h7pIZxTrCJqPQGFF5KJY4kW0dxTnsFJeC9Pe8pfA88WT8gYYjbD0%2FtjkTweZvOWiuUyXbIF4KmNoeP08NpZXAM6Hzlm0RteoFTp9HLUg8T0dnYJ1Vp4We66IDGbEWWNXYbh7oV7VRDqbs1Ng95lFKmbQffHRL8fv6yp9BIoYBbRPKKUxaGO58iVe%2B770yKPxzW%2BZ91qqo5jaJDlVIEkPMr%2FdPVh95N79C5U2gMnO42yESng0iI%2FQ7kKZxaOLLQMO7ohsEGOqUB94MN676xBPFHGbihylife7Egt2wEWrgaDMqEMVbFeU%2BJY30kkdSdjm%2BnI1CLsMoociQkXhdrzgyUnRtWwJ4KF%2F2bQ4CSjSjv0PVpfJfOX8jowM9YAsw6gBI%2FLeEizyFukBOUUzSfkCYTJACP%2FOQr0tiPSN55mhk7jnVlIUGBLD6tWvJw9E8kEgHvGPRS9Rcc%2BhAYyuT7brTc6x3s279G9Af3v8DQ&X-Amz-Signature=1f4c0820b97ce24328e8f967a1793f680f6c4815d5f068a1ed65d0817f29a02a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLANQNH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEiJJ0WNH7QOmXDN4ykmbFVSNVFiXgkRgyUKPqXkptXwAiEAgGn5M7KBLJAJPIwfsdbgW19gqnsfE%2FHVzb7vBwhI2ooqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgmcPHW5bCdsG2dgyrcAxHOMgC3zMPLibXRPuQSaYu9ZPRgvPHROwxEBpNTHONGdneb8LLBqCB7YHkL8uLfQvF4CYNOBZpRKoKzBW07jy5gY5swmPVeyY7KvLsUJeR2DEzQlozWUl04kql52n%2FQNCXmz1H1XCc8Vo5d0CYP%2BYd6KwQAQc6TQAiwe981SIA%2BU0A5e%2FLnVtEYe4a0H7Ln7YCRKrQzAcBDie90XRjf6UbYYnltVgPYhM5SwHXV8GmmpTfjZY1XQ5%2F4goKoqsN%2F01rNaPEkQEzK14CX0cEyDUocztT0AvpHrYUcII27WCJBqeef15t23DhVPUcVZFe7zsX9pLxeN7wmnQC%2FZ%2Flufp9oK8zjietI%2BtTTHqXpHZThNnUP6vtxC9%2FEa9LHS3h7pIZxTrCJqPQGFF5KJY4kW0dxTnsFJeC9Pe8pfA88WT8gYYjbD0%2FtjkTweZvOWiuUyXbIF4KmNoeP08NpZXAM6Hzlm0RteoFTp9HLUg8T0dnYJ1Vp4We66IDGbEWWNXYbh7oV7VRDqbs1Ng95lFKmbQffHRL8fv6yp9BIoYBbRPKKUxaGO58iVe%2B770yKPxzW%2BZ91qqo5jaJDlVIEkPMr%2FdPVh95N79C5U2gMnO42yESng0iI%2FQ7kKZxaOLLQMO7ohsEGOqUB94MN676xBPFHGbihylife7Egt2wEWrgaDMqEMVbFeU%2BJY30kkdSdjm%2BnI1CLsMoociQkXhdrzgyUnRtWwJ4KF%2F2bQ4CSjSjv0PVpfJfOX8jowM9YAsw6gBI%2FLeEizyFukBOUUzSfkCYTJACP%2FOQr0tiPSN55mhk7jnVlIUGBLD6tWvJw9E8kEgHvGPRS9Rcc%2BhAYyuT7brTc6x3s279G9Af3v8DQ&X-Amz-Signature=2354bd0b9a6de756ee6620b2d740bcf028a2dc6704c17080d1cc8f5b44693cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLANQNH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEiJJ0WNH7QOmXDN4ykmbFVSNVFiXgkRgyUKPqXkptXwAiEAgGn5M7KBLJAJPIwfsdbgW19gqnsfE%2FHVzb7vBwhI2ooqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgmcPHW5bCdsG2dgyrcAxHOMgC3zMPLibXRPuQSaYu9ZPRgvPHROwxEBpNTHONGdneb8LLBqCB7YHkL8uLfQvF4CYNOBZpRKoKzBW07jy5gY5swmPVeyY7KvLsUJeR2DEzQlozWUl04kql52n%2FQNCXmz1H1XCc8Vo5d0CYP%2BYd6KwQAQc6TQAiwe981SIA%2BU0A5e%2FLnVtEYe4a0H7Ln7YCRKrQzAcBDie90XRjf6UbYYnltVgPYhM5SwHXV8GmmpTfjZY1XQ5%2F4goKoqsN%2F01rNaPEkQEzK14CX0cEyDUocztT0AvpHrYUcII27WCJBqeef15t23DhVPUcVZFe7zsX9pLxeN7wmnQC%2FZ%2Flufp9oK8zjietI%2BtTTHqXpHZThNnUP6vtxC9%2FEa9LHS3h7pIZxTrCJqPQGFF5KJY4kW0dxTnsFJeC9Pe8pfA88WT8gYYjbD0%2FtjkTweZvOWiuUyXbIF4KmNoeP08NpZXAM6Hzlm0RteoFTp9HLUg8T0dnYJ1Vp4We66IDGbEWWNXYbh7oV7VRDqbs1Ng95lFKmbQffHRL8fv6yp9BIoYBbRPKKUxaGO58iVe%2B770yKPxzW%2BZ91qqo5jaJDlVIEkPMr%2FdPVh95N79C5U2gMnO42yESng0iI%2FQ7kKZxaOLLQMO7ohsEGOqUB94MN676xBPFHGbihylife7Egt2wEWrgaDMqEMVbFeU%2BJY30kkdSdjm%2BnI1CLsMoociQkXhdrzgyUnRtWwJ4KF%2F2bQ4CSjSjv0PVpfJfOX8jowM9YAsw6gBI%2FLeEizyFukBOUUzSfkCYTJACP%2FOQr0tiPSN55mhk7jnVlIUGBLD6tWvJw9E8kEgHvGPRS9Rcc%2BhAYyuT7brTc6x3s279G9Af3v8DQ&X-Amz-Signature=970837e343b7c2b2cea29a54502b7f03bad7ba29fb721371cd2dcf24ae6ef57e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLANQNH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEiJJ0WNH7QOmXDN4ykmbFVSNVFiXgkRgyUKPqXkptXwAiEAgGn5M7KBLJAJPIwfsdbgW19gqnsfE%2FHVzb7vBwhI2ooqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgmcPHW5bCdsG2dgyrcAxHOMgC3zMPLibXRPuQSaYu9ZPRgvPHROwxEBpNTHONGdneb8LLBqCB7YHkL8uLfQvF4CYNOBZpRKoKzBW07jy5gY5swmPVeyY7KvLsUJeR2DEzQlozWUl04kql52n%2FQNCXmz1H1XCc8Vo5d0CYP%2BYd6KwQAQc6TQAiwe981SIA%2BU0A5e%2FLnVtEYe4a0H7Ln7YCRKrQzAcBDie90XRjf6UbYYnltVgPYhM5SwHXV8GmmpTfjZY1XQ5%2F4goKoqsN%2F01rNaPEkQEzK14CX0cEyDUocztT0AvpHrYUcII27WCJBqeef15t23DhVPUcVZFe7zsX9pLxeN7wmnQC%2FZ%2Flufp9oK8zjietI%2BtTTHqXpHZThNnUP6vtxC9%2FEa9LHS3h7pIZxTrCJqPQGFF5KJY4kW0dxTnsFJeC9Pe8pfA88WT8gYYjbD0%2FtjkTweZvOWiuUyXbIF4KmNoeP08NpZXAM6Hzlm0RteoFTp9HLUg8T0dnYJ1Vp4We66IDGbEWWNXYbh7oV7VRDqbs1Ng95lFKmbQffHRL8fv6yp9BIoYBbRPKKUxaGO58iVe%2B770yKPxzW%2BZ91qqo5jaJDlVIEkPMr%2FdPVh95N79C5U2gMnO42yESng0iI%2FQ7kKZxaOLLQMO7ohsEGOqUB94MN676xBPFHGbihylife7Egt2wEWrgaDMqEMVbFeU%2BJY30kkdSdjm%2BnI1CLsMoociQkXhdrzgyUnRtWwJ4KF%2F2bQ4CSjSjv0PVpfJfOX8jowM9YAsw6gBI%2FLeEizyFukBOUUzSfkCYTJACP%2FOQr0tiPSN55mhk7jnVlIUGBLD6tWvJw9E8kEgHvGPRS9Rcc%2BhAYyuT7brTc6x3s279G9Af3v8DQ&X-Amz-Signature=66cddc10ed02c698223a0b837ecb178afc5a72126fa4a6d4a54a647dc5fc8045&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
