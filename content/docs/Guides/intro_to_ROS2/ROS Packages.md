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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B5JQ57P%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcmU6nZUrOI9P9ajIcr27fXUyl4nnwon2Yl3FcUWKsRgIgOTIYlHS0ABD%2B%2FLBVVCAYxD4osfq%2BrhjAm7wne3BqAIAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbHywEdhnlq1czOeircAzI1SqsfUWWx5mECZM19zn3dSsEvdl1iZnY0ws6GbDz5EPVWRVnFsm8AB1CSdOizEH%2B7D2nKS%2FOpE06sFpS%2BO4OKfDR6B4l3zPapnfbMEzhBg8Eq%2FGWtr%2BhvEw8jWP83AySmG2cvNU31wkLBkxd5Zaqwwh3Sa2u4NKzIXx8OFSDK5aX9gkPOaWaqnayiHlfDld0B7JyCmQL4mrtfG5Tmw0oiilZB8b9WSepeXoNmYSvxoJ5OhsIHI69u6klZnD%2FO5IMfLVeyP9pqMmgNSWpi3YQqa6Vx4ZrMgjMQvaUgEkMHMwJky5dkA0%2Br9kRoJr3BVWC%2BDIEY9h0CLRFAbzqeq5nMM0mmdPIwS6gP8DCS1lIiyD2q2I2PE6w%2BVZB%2FEw1h8fe5PfOztfh1GSK93%2BWmD6D0gTH02ubJ7x7iYg6q501R2TupBobb8lkKlDghXvt71jCAQjEpN5b8zPdsULOUIn3WsdxqTDbHEg7qxmB8ePY3Z%2BkFV5%2FWXKNeesQj4o9IscLw%2FO4hGu4h8Kbei%2BrxfdSJ1XKpbLNQXZKoFKLXNwYVPJ12sUVYwnwAbLUc3jqpOtcr3dAV1uWmYB7YSpGjuv4OU1VJA0Pt%2B1QFpjdPQou%2F3U7fShxaivS2uox%2FMLzTrL0GOqUB0QBBiKHfLkSPhyQkTXqUu2VqoB6T8p6kk6HWKnoHjIxVPMdYe08zNEH16VXMXxufELb49p6hNRhCnLuFhv%2B%2FloM44cWNLdr0nt%2B8OQo7Byb5pns3YXl1eOBBbsYfLN53u68DE9iuQmBNpiNsk1eBDEl8MdJUtYPPAUxKQL9FLCODGTWz4imF1lEcpAKl3LfOavGdJ7nXcUbLERBc0CF89RBEDbhA&X-Amz-Signature=76f06bca1f1563b0cd82d918fb3bf83324fc2f9f1c37b91820f7f2b272138482&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B5JQ57P%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcmU6nZUrOI9P9ajIcr27fXUyl4nnwon2Yl3FcUWKsRgIgOTIYlHS0ABD%2B%2FLBVVCAYxD4osfq%2BrhjAm7wne3BqAIAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbHywEdhnlq1czOeircAzI1SqsfUWWx5mECZM19zn3dSsEvdl1iZnY0ws6GbDz5EPVWRVnFsm8AB1CSdOizEH%2B7D2nKS%2FOpE06sFpS%2BO4OKfDR6B4l3zPapnfbMEzhBg8Eq%2FGWtr%2BhvEw8jWP83AySmG2cvNU31wkLBkxd5Zaqwwh3Sa2u4NKzIXx8OFSDK5aX9gkPOaWaqnayiHlfDld0B7JyCmQL4mrtfG5Tmw0oiilZB8b9WSepeXoNmYSvxoJ5OhsIHI69u6klZnD%2FO5IMfLVeyP9pqMmgNSWpi3YQqa6Vx4ZrMgjMQvaUgEkMHMwJky5dkA0%2Br9kRoJr3BVWC%2BDIEY9h0CLRFAbzqeq5nMM0mmdPIwS6gP8DCS1lIiyD2q2I2PE6w%2BVZB%2FEw1h8fe5PfOztfh1GSK93%2BWmD6D0gTH02ubJ7x7iYg6q501R2TupBobb8lkKlDghXvt71jCAQjEpN5b8zPdsULOUIn3WsdxqTDbHEg7qxmB8ePY3Z%2BkFV5%2FWXKNeesQj4o9IscLw%2FO4hGu4h8Kbei%2BrxfdSJ1XKpbLNQXZKoFKLXNwYVPJ12sUVYwnwAbLUc3jqpOtcr3dAV1uWmYB7YSpGjuv4OU1VJA0Pt%2B1QFpjdPQou%2F3U7fShxaivS2uox%2FMLzTrL0GOqUB0QBBiKHfLkSPhyQkTXqUu2VqoB6T8p6kk6HWKnoHjIxVPMdYe08zNEH16VXMXxufELb49p6hNRhCnLuFhv%2B%2FloM44cWNLdr0nt%2B8OQo7Byb5pns3YXl1eOBBbsYfLN53u68DE9iuQmBNpiNsk1eBDEl8MdJUtYPPAUxKQL9FLCODGTWz4imF1lEcpAKl3LfOavGdJ7nXcUbLERBc0CF89RBEDbhA&X-Amz-Signature=f3a78933a6c7deb56d3c7ed361be7217676820447c272c028d03c297bd3ead56&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B5JQ57P%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcmU6nZUrOI9P9ajIcr27fXUyl4nnwon2Yl3FcUWKsRgIgOTIYlHS0ABD%2B%2FLBVVCAYxD4osfq%2BrhjAm7wne3BqAIAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbHywEdhnlq1czOeircAzI1SqsfUWWx5mECZM19zn3dSsEvdl1iZnY0ws6GbDz5EPVWRVnFsm8AB1CSdOizEH%2B7D2nKS%2FOpE06sFpS%2BO4OKfDR6B4l3zPapnfbMEzhBg8Eq%2FGWtr%2BhvEw8jWP83AySmG2cvNU31wkLBkxd5Zaqwwh3Sa2u4NKzIXx8OFSDK5aX9gkPOaWaqnayiHlfDld0B7JyCmQL4mrtfG5Tmw0oiilZB8b9WSepeXoNmYSvxoJ5OhsIHI69u6klZnD%2FO5IMfLVeyP9pqMmgNSWpi3YQqa6Vx4ZrMgjMQvaUgEkMHMwJky5dkA0%2Br9kRoJr3BVWC%2BDIEY9h0CLRFAbzqeq5nMM0mmdPIwS6gP8DCS1lIiyD2q2I2PE6w%2BVZB%2FEw1h8fe5PfOztfh1GSK93%2BWmD6D0gTH02ubJ7x7iYg6q501R2TupBobb8lkKlDghXvt71jCAQjEpN5b8zPdsULOUIn3WsdxqTDbHEg7qxmB8ePY3Z%2BkFV5%2FWXKNeesQj4o9IscLw%2FO4hGu4h8Kbei%2BrxfdSJ1XKpbLNQXZKoFKLXNwYVPJ12sUVYwnwAbLUc3jqpOtcr3dAV1uWmYB7YSpGjuv4OU1VJA0Pt%2B1QFpjdPQou%2F3U7fShxaivS2uox%2FMLzTrL0GOqUB0QBBiKHfLkSPhyQkTXqUu2VqoB6T8p6kk6HWKnoHjIxVPMdYe08zNEH16VXMXxufELb49p6hNRhCnLuFhv%2B%2FloM44cWNLdr0nt%2B8OQo7Byb5pns3YXl1eOBBbsYfLN53u68DE9iuQmBNpiNsk1eBDEl8MdJUtYPPAUxKQL9FLCODGTWz4imF1lEcpAKl3LfOavGdJ7nXcUbLERBc0CF89RBEDbhA&X-Amz-Signature=5546fc1922bd298f8b0c0a132a3a24035c75387fb10e23e4dace799fba2a8e67&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B5JQ57P%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcmU6nZUrOI9P9ajIcr27fXUyl4nnwon2Yl3FcUWKsRgIgOTIYlHS0ABD%2B%2FLBVVCAYxD4osfq%2BrhjAm7wne3BqAIAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbHywEdhnlq1czOeircAzI1SqsfUWWx5mECZM19zn3dSsEvdl1iZnY0ws6GbDz5EPVWRVnFsm8AB1CSdOizEH%2B7D2nKS%2FOpE06sFpS%2BO4OKfDR6B4l3zPapnfbMEzhBg8Eq%2FGWtr%2BhvEw8jWP83AySmG2cvNU31wkLBkxd5Zaqwwh3Sa2u4NKzIXx8OFSDK5aX9gkPOaWaqnayiHlfDld0B7JyCmQL4mrtfG5Tmw0oiilZB8b9WSepeXoNmYSvxoJ5OhsIHI69u6klZnD%2FO5IMfLVeyP9pqMmgNSWpi3YQqa6Vx4ZrMgjMQvaUgEkMHMwJky5dkA0%2Br9kRoJr3BVWC%2BDIEY9h0CLRFAbzqeq5nMM0mmdPIwS6gP8DCS1lIiyD2q2I2PE6w%2BVZB%2FEw1h8fe5PfOztfh1GSK93%2BWmD6D0gTH02ubJ7x7iYg6q501R2TupBobb8lkKlDghXvt71jCAQjEpN5b8zPdsULOUIn3WsdxqTDbHEg7qxmB8ePY3Z%2BkFV5%2FWXKNeesQj4o9IscLw%2FO4hGu4h8Kbei%2BrxfdSJ1XKpbLNQXZKoFKLXNwYVPJ12sUVYwnwAbLUc3jqpOtcr3dAV1uWmYB7YSpGjuv4OU1VJA0Pt%2B1QFpjdPQou%2F3U7fShxaivS2uox%2FMLzTrL0GOqUB0QBBiKHfLkSPhyQkTXqUu2VqoB6T8p6kk6HWKnoHjIxVPMdYe08zNEH16VXMXxufELb49p6hNRhCnLuFhv%2B%2FloM44cWNLdr0nt%2B8OQo7Byb5pns3YXl1eOBBbsYfLN53u68DE9iuQmBNpiNsk1eBDEl8MdJUtYPPAUxKQL9FLCODGTWz4imF1lEcpAKl3LfOavGdJ7nXcUbLERBc0CF89RBEDbhA&X-Amz-Signature=9582487361c4b0c0a342fd5385e14e7f74abb2b3a05ad5ad07d66df07351763e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B5JQ57P%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcmU6nZUrOI9P9ajIcr27fXUyl4nnwon2Yl3FcUWKsRgIgOTIYlHS0ABD%2B%2FLBVVCAYxD4osfq%2BrhjAm7wne3BqAIAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbHywEdhnlq1czOeircAzI1SqsfUWWx5mECZM19zn3dSsEvdl1iZnY0ws6GbDz5EPVWRVnFsm8AB1CSdOizEH%2B7D2nKS%2FOpE06sFpS%2BO4OKfDR6B4l3zPapnfbMEzhBg8Eq%2FGWtr%2BhvEw8jWP83AySmG2cvNU31wkLBkxd5Zaqwwh3Sa2u4NKzIXx8OFSDK5aX9gkPOaWaqnayiHlfDld0B7JyCmQL4mrtfG5Tmw0oiilZB8b9WSepeXoNmYSvxoJ5OhsIHI69u6klZnD%2FO5IMfLVeyP9pqMmgNSWpi3YQqa6Vx4ZrMgjMQvaUgEkMHMwJky5dkA0%2Br9kRoJr3BVWC%2BDIEY9h0CLRFAbzqeq5nMM0mmdPIwS6gP8DCS1lIiyD2q2I2PE6w%2BVZB%2FEw1h8fe5PfOztfh1GSK93%2BWmD6D0gTH02ubJ7x7iYg6q501R2TupBobb8lkKlDghXvt71jCAQjEpN5b8zPdsULOUIn3WsdxqTDbHEg7qxmB8ePY3Z%2BkFV5%2FWXKNeesQj4o9IscLw%2FO4hGu4h8Kbei%2BrxfdSJ1XKpbLNQXZKoFKLXNwYVPJ12sUVYwnwAbLUc3jqpOtcr3dAV1uWmYB7YSpGjuv4OU1VJA0Pt%2B1QFpjdPQou%2F3U7fShxaivS2uox%2FMLzTrL0GOqUB0QBBiKHfLkSPhyQkTXqUu2VqoB6T8p6kk6HWKnoHjIxVPMdYe08zNEH16VXMXxufELb49p6hNRhCnLuFhv%2B%2FloM44cWNLdr0nt%2B8OQo7Byb5pns3YXl1eOBBbsYfLN53u68DE9iuQmBNpiNsk1eBDEl8MdJUtYPPAUxKQL9FLCODGTWz4imF1lEcpAKl3LfOavGdJ7nXcUbLERBc0CF89RBEDbhA&X-Amz-Signature=107d917e3194c86c91d25efe3455fbc7cdf3cfe9543e80a2f4994ff44aa6542c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B5JQ57P%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcmU6nZUrOI9P9ajIcr27fXUyl4nnwon2Yl3FcUWKsRgIgOTIYlHS0ABD%2B%2FLBVVCAYxD4osfq%2BrhjAm7wne3BqAIAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbHywEdhnlq1czOeircAzI1SqsfUWWx5mECZM19zn3dSsEvdl1iZnY0ws6GbDz5EPVWRVnFsm8AB1CSdOizEH%2B7D2nKS%2FOpE06sFpS%2BO4OKfDR6B4l3zPapnfbMEzhBg8Eq%2FGWtr%2BhvEw8jWP83AySmG2cvNU31wkLBkxd5Zaqwwh3Sa2u4NKzIXx8OFSDK5aX9gkPOaWaqnayiHlfDld0B7JyCmQL4mrtfG5Tmw0oiilZB8b9WSepeXoNmYSvxoJ5OhsIHI69u6klZnD%2FO5IMfLVeyP9pqMmgNSWpi3YQqa6Vx4ZrMgjMQvaUgEkMHMwJky5dkA0%2Br9kRoJr3BVWC%2BDIEY9h0CLRFAbzqeq5nMM0mmdPIwS6gP8DCS1lIiyD2q2I2PE6w%2BVZB%2FEw1h8fe5PfOztfh1GSK93%2BWmD6D0gTH02ubJ7x7iYg6q501R2TupBobb8lkKlDghXvt71jCAQjEpN5b8zPdsULOUIn3WsdxqTDbHEg7qxmB8ePY3Z%2BkFV5%2FWXKNeesQj4o9IscLw%2FO4hGu4h8Kbei%2BrxfdSJ1XKpbLNQXZKoFKLXNwYVPJ12sUVYwnwAbLUc3jqpOtcr3dAV1uWmYB7YSpGjuv4OU1VJA0Pt%2B1QFpjdPQou%2F3U7fShxaivS2uox%2FMLzTrL0GOqUB0QBBiKHfLkSPhyQkTXqUu2VqoB6T8p6kk6HWKnoHjIxVPMdYe08zNEH16VXMXxufELb49p6hNRhCnLuFhv%2B%2FloM44cWNLdr0nt%2B8OQo7Byb5pns3YXl1eOBBbsYfLN53u68DE9iuQmBNpiNsk1eBDEl8MdJUtYPPAUxKQL9FLCODGTWz4imF1lEcpAKl3LfOavGdJ7nXcUbLERBc0CF89RBEDbhA&X-Amz-Signature=da328333c41cfd964b9d84ac355176e1f169857389471c42589ce0eef7151ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B5JQ57P%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcmU6nZUrOI9P9ajIcr27fXUyl4nnwon2Yl3FcUWKsRgIgOTIYlHS0ABD%2B%2FLBVVCAYxD4osfq%2BrhjAm7wne3BqAIAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbHywEdhnlq1czOeircAzI1SqsfUWWx5mECZM19zn3dSsEvdl1iZnY0ws6GbDz5EPVWRVnFsm8AB1CSdOizEH%2B7D2nKS%2FOpE06sFpS%2BO4OKfDR6B4l3zPapnfbMEzhBg8Eq%2FGWtr%2BhvEw8jWP83AySmG2cvNU31wkLBkxd5Zaqwwh3Sa2u4NKzIXx8OFSDK5aX9gkPOaWaqnayiHlfDld0B7JyCmQL4mrtfG5Tmw0oiilZB8b9WSepeXoNmYSvxoJ5OhsIHI69u6klZnD%2FO5IMfLVeyP9pqMmgNSWpi3YQqa6Vx4ZrMgjMQvaUgEkMHMwJky5dkA0%2Br9kRoJr3BVWC%2BDIEY9h0CLRFAbzqeq5nMM0mmdPIwS6gP8DCS1lIiyD2q2I2PE6w%2BVZB%2FEw1h8fe5PfOztfh1GSK93%2BWmD6D0gTH02ubJ7x7iYg6q501R2TupBobb8lkKlDghXvt71jCAQjEpN5b8zPdsULOUIn3WsdxqTDbHEg7qxmB8ePY3Z%2BkFV5%2FWXKNeesQj4o9IscLw%2FO4hGu4h8Kbei%2BrxfdSJ1XKpbLNQXZKoFKLXNwYVPJ12sUVYwnwAbLUc3jqpOtcr3dAV1uWmYB7YSpGjuv4OU1VJA0Pt%2B1QFpjdPQou%2F3U7fShxaivS2uox%2FMLzTrL0GOqUB0QBBiKHfLkSPhyQkTXqUu2VqoB6T8p6kk6HWKnoHjIxVPMdYe08zNEH16VXMXxufELb49p6hNRhCnLuFhv%2B%2FloM44cWNLdr0nt%2B8OQo7Byb5pns3YXl1eOBBbsYfLN53u68DE9iuQmBNpiNsk1eBDEl8MdJUtYPPAUxKQL9FLCODGTWz4imF1lEcpAKl3LfOavGdJ7nXcUbLERBc0CF89RBEDbhA&X-Amz-Signature=9afbf5e3257f37f905c8532b0dd02169b65b0b58d273688f23b20469412ce26e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
