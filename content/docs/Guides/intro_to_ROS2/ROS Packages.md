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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX72A2DE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFBrQd%2BhA3VbCiDV48CiI8x4XkqpPlwkIFBGMU8dU7VgAiBeh6IfW9xuLTatBUZakACDQS%2BtNQWP6Z6GdsFuO3crnCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDfgsaCLYLnuDxR44KtwDBh7dIEjFP4buFdiYq5%2Bwd9BzKziQMow8HJKcKqS%2FYsn1MpHK4zWIotOpyXgW3wP25XuG0k%2F%2FV5%2FTi4YYedFcIGPa%2FFZl7WwPjvRNjfo0wzisrYmanOmjUhKiHlDNxCNFYbkubc67dBC4QGeaPhE49aSNvDPY5E%2B1f8ZaR9meWUJMLwUsEqpL8ox4O6hcWxuwSZ9uvvJdTp05Tef4yzjWNel7x69TX9xSzQUkZiEnbCOmj9cRX2pUaGYy6M1lFn7zWsxEkpbNOkL441UphXRou%2FZ4lRRnlL4PejGpGlfgDdinpkMR8B7vVVPs5T%2BF%2FZVs%2Ff1WrwL2uQGbKUSWB3WRz06elaumk7AbMQnhVjl2vOabz7NNIrNJHkVonv%2FIOF%2BvWRQpwiS9ajszPRYVGPH4VFIZ2nY1zN2dwE3uYTlnGmKXKWjhXhhGcY0w8inV1k5zHEOCU5%2Fa1QCrZ4hVbKvh7vZ9CoKWScFIae%2BWLECOgU9rUsLDcD88842kife8fM4rApvpzJfptmsTgRMp2RHjtS8hNiVXke%2Bj4oNF6gqKL6Zgz%2B7QMTGXAqFArGJOaCNDc2kjk65%2BtI5Zn2Pu5sHPL0K3f2SAH8oEF4CMed5ByMl2CRODpLg1BebUPrEwoIm2vgY6pgHB5gMDYLgQEClS5vBqvSL%2BkRhE%2B4OUEGLiWEiSipzpyeOjr6r5geQ8c39w73zS9iuHlJmY3UdWexTI6jQsiQGz5teV6r7M3lY8aRvcAbxRzbfR2JPrlmafhXMSSAQGSXgBKzSkfVlJYiPfKAVebdVnqpR6kpgTj4%2BW5DYEp9QQQ4IE4L6eZcaRYXaImc5DIkAYEG1vAg3gn0S0%2BkxRdAaODzF2ujDi&X-Amz-Signature=c577a9130357579fd465f6acec8440c35e434cc58cb4ad4fe9823b2b58935dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX72A2DE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFBrQd%2BhA3VbCiDV48CiI8x4XkqpPlwkIFBGMU8dU7VgAiBeh6IfW9xuLTatBUZakACDQS%2BtNQWP6Z6GdsFuO3crnCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDfgsaCLYLnuDxR44KtwDBh7dIEjFP4buFdiYq5%2Bwd9BzKziQMow8HJKcKqS%2FYsn1MpHK4zWIotOpyXgW3wP25XuG0k%2F%2FV5%2FTi4YYedFcIGPa%2FFZl7WwPjvRNjfo0wzisrYmanOmjUhKiHlDNxCNFYbkubc67dBC4QGeaPhE49aSNvDPY5E%2B1f8ZaR9meWUJMLwUsEqpL8ox4O6hcWxuwSZ9uvvJdTp05Tef4yzjWNel7x69TX9xSzQUkZiEnbCOmj9cRX2pUaGYy6M1lFn7zWsxEkpbNOkL441UphXRou%2FZ4lRRnlL4PejGpGlfgDdinpkMR8B7vVVPs5T%2BF%2FZVs%2Ff1WrwL2uQGbKUSWB3WRz06elaumk7AbMQnhVjl2vOabz7NNIrNJHkVonv%2FIOF%2BvWRQpwiS9ajszPRYVGPH4VFIZ2nY1zN2dwE3uYTlnGmKXKWjhXhhGcY0w8inV1k5zHEOCU5%2Fa1QCrZ4hVbKvh7vZ9CoKWScFIae%2BWLECOgU9rUsLDcD88842kife8fM4rApvpzJfptmsTgRMp2RHjtS8hNiVXke%2Bj4oNF6gqKL6Zgz%2B7QMTGXAqFArGJOaCNDc2kjk65%2BtI5Zn2Pu5sHPL0K3f2SAH8oEF4CMed5ByMl2CRODpLg1BebUPrEwoIm2vgY6pgHB5gMDYLgQEClS5vBqvSL%2BkRhE%2B4OUEGLiWEiSipzpyeOjr6r5geQ8c39w73zS9iuHlJmY3UdWexTI6jQsiQGz5teV6r7M3lY8aRvcAbxRzbfR2JPrlmafhXMSSAQGSXgBKzSkfVlJYiPfKAVebdVnqpR6kpgTj4%2BW5DYEp9QQQ4IE4L6eZcaRYXaImc5DIkAYEG1vAg3gn0S0%2BkxRdAaODzF2ujDi&X-Amz-Signature=063c2e5e85f78ff0b2ae38668ee4fa60e0d1e5274ac3566b8c28373398f4b2cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX72A2DE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFBrQd%2BhA3VbCiDV48CiI8x4XkqpPlwkIFBGMU8dU7VgAiBeh6IfW9xuLTatBUZakACDQS%2BtNQWP6Z6GdsFuO3crnCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDfgsaCLYLnuDxR44KtwDBh7dIEjFP4buFdiYq5%2Bwd9BzKziQMow8HJKcKqS%2FYsn1MpHK4zWIotOpyXgW3wP25XuG0k%2F%2FV5%2FTi4YYedFcIGPa%2FFZl7WwPjvRNjfo0wzisrYmanOmjUhKiHlDNxCNFYbkubc67dBC4QGeaPhE49aSNvDPY5E%2B1f8ZaR9meWUJMLwUsEqpL8ox4O6hcWxuwSZ9uvvJdTp05Tef4yzjWNel7x69TX9xSzQUkZiEnbCOmj9cRX2pUaGYy6M1lFn7zWsxEkpbNOkL441UphXRou%2FZ4lRRnlL4PejGpGlfgDdinpkMR8B7vVVPs5T%2BF%2FZVs%2Ff1WrwL2uQGbKUSWB3WRz06elaumk7AbMQnhVjl2vOabz7NNIrNJHkVonv%2FIOF%2BvWRQpwiS9ajszPRYVGPH4VFIZ2nY1zN2dwE3uYTlnGmKXKWjhXhhGcY0w8inV1k5zHEOCU5%2Fa1QCrZ4hVbKvh7vZ9CoKWScFIae%2BWLECOgU9rUsLDcD88842kife8fM4rApvpzJfptmsTgRMp2RHjtS8hNiVXke%2Bj4oNF6gqKL6Zgz%2B7QMTGXAqFArGJOaCNDc2kjk65%2BtI5Zn2Pu5sHPL0K3f2SAH8oEF4CMed5ByMl2CRODpLg1BebUPrEwoIm2vgY6pgHB5gMDYLgQEClS5vBqvSL%2BkRhE%2B4OUEGLiWEiSipzpyeOjr6r5geQ8c39w73zS9iuHlJmY3UdWexTI6jQsiQGz5teV6r7M3lY8aRvcAbxRzbfR2JPrlmafhXMSSAQGSXgBKzSkfVlJYiPfKAVebdVnqpR6kpgTj4%2BW5DYEp9QQQ4IE4L6eZcaRYXaImc5DIkAYEG1vAg3gn0S0%2BkxRdAaODzF2ujDi&X-Amz-Signature=9b24086b79ef76195c8d6db81f1b53d48c3a3040e6a93850bb05104908cbadaf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX72A2DE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFBrQd%2BhA3VbCiDV48CiI8x4XkqpPlwkIFBGMU8dU7VgAiBeh6IfW9xuLTatBUZakACDQS%2BtNQWP6Z6GdsFuO3crnCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDfgsaCLYLnuDxR44KtwDBh7dIEjFP4buFdiYq5%2Bwd9BzKziQMow8HJKcKqS%2FYsn1MpHK4zWIotOpyXgW3wP25XuG0k%2F%2FV5%2FTi4YYedFcIGPa%2FFZl7WwPjvRNjfo0wzisrYmanOmjUhKiHlDNxCNFYbkubc67dBC4QGeaPhE49aSNvDPY5E%2B1f8ZaR9meWUJMLwUsEqpL8ox4O6hcWxuwSZ9uvvJdTp05Tef4yzjWNel7x69TX9xSzQUkZiEnbCOmj9cRX2pUaGYy6M1lFn7zWsxEkpbNOkL441UphXRou%2FZ4lRRnlL4PejGpGlfgDdinpkMR8B7vVVPs5T%2BF%2FZVs%2Ff1WrwL2uQGbKUSWB3WRz06elaumk7AbMQnhVjl2vOabz7NNIrNJHkVonv%2FIOF%2BvWRQpwiS9ajszPRYVGPH4VFIZ2nY1zN2dwE3uYTlnGmKXKWjhXhhGcY0w8inV1k5zHEOCU5%2Fa1QCrZ4hVbKvh7vZ9CoKWScFIae%2BWLECOgU9rUsLDcD88842kife8fM4rApvpzJfptmsTgRMp2RHjtS8hNiVXke%2Bj4oNF6gqKL6Zgz%2B7QMTGXAqFArGJOaCNDc2kjk65%2BtI5Zn2Pu5sHPL0K3f2SAH8oEF4CMed5ByMl2CRODpLg1BebUPrEwoIm2vgY6pgHB5gMDYLgQEClS5vBqvSL%2BkRhE%2B4OUEGLiWEiSipzpyeOjr6r5geQ8c39w73zS9iuHlJmY3UdWexTI6jQsiQGz5teV6r7M3lY8aRvcAbxRzbfR2JPrlmafhXMSSAQGSXgBKzSkfVlJYiPfKAVebdVnqpR6kpgTj4%2BW5DYEp9QQQ4IE4L6eZcaRYXaImc5DIkAYEG1vAg3gn0S0%2BkxRdAaODzF2ujDi&X-Amz-Signature=b76863ab581965471470543d9ce163cc51bd10ce28601a403e061e2e544a6d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX72A2DE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFBrQd%2BhA3VbCiDV48CiI8x4XkqpPlwkIFBGMU8dU7VgAiBeh6IfW9xuLTatBUZakACDQS%2BtNQWP6Z6GdsFuO3crnCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDfgsaCLYLnuDxR44KtwDBh7dIEjFP4buFdiYq5%2Bwd9BzKziQMow8HJKcKqS%2FYsn1MpHK4zWIotOpyXgW3wP25XuG0k%2F%2FV5%2FTi4YYedFcIGPa%2FFZl7WwPjvRNjfo0wzisrYmanOmjUhKiHlDNxCNFYbkubc67dBC4QGeaPhE49aSNvDPY5E%2B1f8ZaR9meWUJMLwUsEqpL8ox4O6hcWxuwSZ9uvvJdTp05Tef4yzjWNel7x69TX9xSzQUkZiEnbCOmj9cRX2pUaGYy6M1lFn7zWsxEkpbNOkL441UphXRou%2FZ4lRRnlL4PejGpGlfgDdinpkMR8B7vVVPs5T%2BF%2FZVs%2Ff1WrwL2uQGbKUSWB3WRz06elaumk7AbMQnhVjl2vOabz7NNIrNJHkVonv%2FIOF%2BvWRQpwiS9ajszPRYVGPH4VFIZ2nY1zN2dwE3uYTlnGmKXKWjhXhhGcY0w8inV1k5zHEOCU5%2Fa1QCrZ4hVbKvh7vZ9CoKWScFIae%2BWLECOgU9rUsLDcD88842kife8fM4rApvpzJfptmsTgRMp2RHjtS8hNiVXke%2Bj4oNF6gqKL6Zgz%2B7QMTGXAqFArGJOaCNDc2kjk65%2BtI5Zn2Pu5sHPL0K3f2SAH8oEF4CMed5ByMl2CRODpLg1BebUPrEwoIm2vgY6pgHB5gMDYLgQEClS5vBqvSL%2BkRhE%2B4OUEGLiWEiSipzpyeOjr6r5geQ8c39w73zS9iuHlJmY3UdWexTI6jQsiQGz5teV6r7M3lY8aRvcAbxRzbfR2JPrlmafhXMSSAQGSXgBKzSkfVlJYiPfKAVebdVnqpR6kpgTj4%2BW5DYEp9QQQ4IE4L6eZcaRYXaImc5DIkAYEG1vAg3gn0S0%2BkxRdAaODzF2ujDi&X-Amz-Signature=9e4d2a7d20fdefa9affbb7f2e25e4f337bb2b0bb69de95936041410ba4fd1c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX72A2DE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFBrQd%2BhA3VbCiDV48CiI8x4XkqpPlwkIFBGMU8dU7VgAiBeh6IfW9xuLTatBUZakACDQS%2BtNQWP6Z6GdsFuO3crnCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDfgsaCLYLnuDxR44KtwDBh7dIEjFP4buFdiYq5%2Bwd9BzKziQMow8HJKcKqS%2FYsn1MpHK4zWIotOpyXgW3wP25XuG0k%2F%2FV5%2FTi4YYedFcIGPa%2FFZl7WwPjvRNjfo0wzisrYmanOmjUhKiHlDNxCNFYbkubc67dBC4QGeaPhE49aSNvDPY5E%2B1f8ZaR9meWUJMLwUsEqpL8ox4O6hcWxuwSZ9uvvJdTp05Tef4yzjWNel7x69TX9xSzQUkZiEnbCOmj9cRX2pUaGYy6M1lFn7zWsxEkpbNOkL441UphXRou%2FZ4lRRnlL4PejGpGlfgDdinpkMR8B7vVVPs5T%2BF%2FZVs%2Ff1WrwL2uQGbKUSWB3WRz06elaumk7AbMQnhVjl2vOabz7NNIrNJHkVonv%2FIOF%2BvWRQpwiS9ajszPRYVGPH4VFIZ2nY1zN2dwE3uYTlnGmKXKWjhXhhGcY0w8inV1k5zHEOCU5%2Fa1QCrZ4hVbKvh7vZ9CoKWScFIae%2BWLECOgU9rUsLDcD88842kife8fM4rApvpzJfptmsTgRMp2RHjtS8hNiVXke%2Bj4oNF6gqKL6Zgz%2B7QMTGXAqFArGJOaCNDc2kjk65%2BtI5Zn2Pu5sHPL0K3f2SAH8oEF4CMed5ByMl2CRODpLg1BebUPrEwoIm2vgY6pgHB5gMDYLgQEClS5vBqvSL%2BkRhE%2B4OUEGLiWEiSipzpyeOjr6r5geQ8c39w73zS9iuHlJmY3UdWexTI6jQsiQGz5teV6r7M3lY8aRvcAbxRzbfR2JPrlmafhXMSSAQGSXgBKzSkfVlJYiPfKAVebdVnqpR6kpgTj4%2BW5DYEp9QQQ4IE4L6eZcaRYXaImc5DIkAYEG1vAg3gn0S0%2BkxRdAaODzF2ujDi&X-Amz-Signature=3111b24a51f70cd83c181241b5201467396a8ec33d3429ec831dd5a15acebf8b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX72A2DE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFBrQd%2BhA3VbCiDV48CiI8x4XkqpPlwkIFBGMU8dU7VgAiBeh6IfW9xuLTatBUZakACDQS%2BtNQWP6Z6GdsFuO3crnCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDfgsaCLYLnuDxR44KtwDBh7dIEjFP4buFdiYq5%2Bwd9BzKziQMow8HJKcKqS%2FYsn1MpHK4zWIotOpyXgW3wP25XuG0k%2F%2FV5%2FTi4YYedFcIGPa%2FFZl7WwPjvRNjfo0wzisrYmanOmjUhKiHlDNxCNFYbkubc67dBC4QGeaPhE49aSNvDPY5E%2B1f8ZaR9meWUJMLwUsEqpL8ox4O6hcWxuwSZ9uvvJdTp05Tef4yzjWNel7x69TX9xSzQUkZiEnbCOmj9cRX2pUaGYy6M1lFn7zWsxEkpbNOkL441UphXRou%2FZ4lRRnlL4PejGpGlfgDdinpkMR8B7vVVPs5T%2BF%2FZVs%2Ff1WrwL2uQGbKUSWB3WRz06elaumk7AbMQnhVjl2vOabz7NNIrNJHkVonv%2FIOF%2BvWRQpwiS9ajszPRYVGPH4VFIZ2nY1zN2dwE3uYTlnGmKXKWjhXhhGcY0w8inV1k5zHEOCU5%2Fa1QCrZ4hVbKvh7vZ9CoKWScFIae%2BWLECOgU9rUsLDcD88842kife8fM4rApvpzJfptmsTgRMp2RHjtS8hNiVXke%2Bj4oNF6gqKL6Zgz%2B7QMTGXAqFArGJOaCNDc2kjk65%2BtI5Zn2Pu5sHPL0K3f2SAH8oEF4CMed5ByMl2CRODpLg1BebUPrEwoIm2vgY6pgHB5gMDYLgQEClS5vBqvSL%2BkRhE%2B4OUEGLiWEiSipzpyeOjr6r5geQ8c39w73zS9iuHlJmY3UdWexTI6jQsiQGz5teV6r7M3lY8aRvcAbxRzbfR2JPrlmafhXMSSAQGSXgBKzSkfVlJYiPfKAVebdVnqpR6kpgTj4%2BW5DYEp9QQQ4IE4L6eZcaRYXaImc5DIkAYEG1vAg3gn0S0%2BkxRdAaODzF2ujDi&X-Amz-Signature=3f2bbb7cbc387dc67c9c3c6e01dc75af28944ecd1c302ea2fafb871eba5d0b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
