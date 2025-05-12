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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N64LZTD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEf%2BElBm5fi8OKBSCHK5TOSP6lSaddkL6sHsrtbePc5%2BAiEA%2FpZt2xz7%2FGCIR4HWxndVztETpaZ9DEOqapbKaNWEEL8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJY4QZkqo319xIt7RyrcA0RXkuAyBbzAjZg9zy%2Br7Z2V%2B%2BH71ta1DHKkosDqoI%2BCmFiJcfct6S10X%2F1X0Pn2A1zHQI8K3%2BqsbiH41jKa2f2zCgaUXydu3nBiwEDhc%2BbTSX9DqTe%2Fc2gYFQ0NKOl16dmBWpFCMdQVINXkzS%2FFixsoWgeSd8JjLGw%2FQEjkpvYiwdThYFj0zw%2BMUobSbjynPpp0Eh2CFMuhalJUlAY7u9uXtuqHOsLkZ8AcMBYuHn%2BF0kqPSbRdYwtH%2F0xeDcmp4L0MHAw9zWsRopUAd%2FGN%2FeAnEMO5CTjYjh2S7z21Ea%2B33lKGqsZR5nm7Y4XaHHvfgfBZJf2luUc%2BBs%2FOcnP3vRGxNQ42SvvGMl3XpRyzi43oqw8XC6%2FgKIL0e5sTK7iol5Q4RwPvt7Sdyl3PgWVaI61gq%2FmlTf0Viwj80vyvvbKeJZn8rEnR6am%2FaeJUpS0KQSTA54%2BlJdn9cNlUDe5iY4RwWdpBQ3ypDrX1RNzggyMJr5vCdCo09TStSaGBPxUraWS%2FRkokPl8w2HqmE7nyV9hVruEwC3AaHuy2kK%2FgKH2TCKaAG6uZGAvhmHaG7ixw1%2B4eM55tL2yKVUMiYBn43y4yYt3%2FHe9Dnsr%2F6qptnzXmCneIFyOpIF%2Fa16tGMOf1iMEGOqUBI90Uqm%2F2yWrcJbgvbDBxKyUuE3y%2Ban1tSHI5D9tSS4OBS4FbJ2iQRuoa2zfFeMbHz3kJNitDc8MDwvvYKnyhG%2FdbCcezbKCgKlcDd8i0KmWeQ7QyXbQ38vHz9N2XkEc94P2bqaVUs5WP9ZuC7HKA0gRFyIFiTSWZHQJE2dIegBPh97gOnWQUaH7WpBHhpWtUQ2Oae5AMzVQgEcwkJ31%2Bv8362daq&X-Amz-Signature=60fdaf5cbfab2ee119e4231b9a8c35d801fd6d007b219db0e8239a0cfe75380e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N64LZTD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEf%2BElBm5fi8OKBSCHK5TOSP6lSaddkL6sHsrtbePc5%2BAiEA%2FpZt2xz7%2FGCIR4HWxndVztETpaZ9DEOqapbKaNWEEL8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJY4QZkqo319xIt7RyrcA0RXkuAyBbzAjZg9zy%2Br7Z2V%2B%2BH71ta1DHKkosDqoI%2BCmFiJcfct6S10X%2F1X0Pn2A1zHQI8K3%2BqsbiH41jKa2f2zCgaUXydu3nBiwEDhc%2BbTSX9DqTe%2Fc2gYFQ0NKOl16dmBWpFCMdQVINXkzS%2FFixsoWgeSd8JjLGw%2FQEjkpvYiwdThYFj0zw%2BMUobSbjynPpp0Eh2CFMuhalJUlAY7u9uXtuqHOsLkZ8AcMBYuHn%2BF0kqPSbRdYwtH%2F0xeDcmp4L0MHAw9zWsRopUAd%2FGN%2FeAnEMO5CTjYjh2S7z21Ea%2B33lKGqsZR5nm7Y4XaHHvfgfBZJf2luUc%2BBs%2FOcnP3vRGxNQ42SvvGMl3XpRyzi43oqw8XC6%2FgKIL0e5sTK7iol5Q4RwPvt7Sdyl3PgWVaI61gq%2FmlTf0Viwj80vyvvbKeJZn8rEnR6am%2FaeJUpS0KQSTA54%2BlJdn9cNlUDe5iY4RwWdpBQ3ypDrX1RNzggyMJr5vCdCo09TStSaGBPxUraWS%2FRkokPl8w2HqmE7nyV9hVruEwC3AaHuy2kK%2FgKH2TCKaAG6uZGAvhmHaG7ixw1%2B4eM55tL2yKVUMiYBn43y4yYt3%2FHe9Dnsr%2F6qptnzXmCneIFyOpIF%2Fa16tGMOf1iMEGOqUBI90Uqm%2F2yWrcJbgvbDBxKyUuE3y%2Ban1tSHI5D9tSS4OBS4FbJ2iQRuoa2zfFeMbHz3kJNitDc8MDwvvYKnyhG%2FdbCcezbKCgKlcDd8i0KmWeQ7QyXbQ38vHz9N2XkEc94P2bqaVUs5WP9ZuC7HKA0gRFyIFiTSWZHQJE2dIegBPh97gOnWQUaH7WpBHhpWtUQ2Oae5AMzVQgEcwkJ31%2Bv8362daq&X-Amz-Signature=ef291899418d38a41494f408dc90917cb62bbd691fd5c653091a21289fe70446&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N64LZTD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEf%2BElBm5fi8OKBSCHK5TOSP6lSaddkL6sHsrtbePc5%2BAiEA%2FpZt2xz7%2FGCIR4HWxndVztETpaZ9DEOqapbKaNWEEL8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJY4QZkqo319xIt7RyrcA0RXkuAyBbzAjZg9zy%2Br7Z2V%2B%2BH71ta1DHKkosDqoI%2BCmFiJcfct6S10X%2F1X0Pn2A1zHQI8K3%2BqsbiH41jKa2f2zCgaUXydu3nBiwEDhc%2BbTSX9DqTe%2Fc2gYFQ0NKOl16dmBWpFCMdQVINXkzS%2FFixsoWgeSd8JjLGw%2FQEjkpvYiwdThYFj0zw%2BMUobSbjynPpp0Eh2CFMuhalJUlAY7u9uXtuqHOsLkZ8AcMBYuHn%2BF0kqPSbRdYwtH%2F0xeDcmp4L0MHAw9zWsRopUAd%2FGN%2FeAnEMO5CTjYjh2S7z21Ea%2B33lKGqsZR5nm7Y4XaHHvfgfBZJf2luUc%2BBs%2FOcnP3vRGxNQ42SvvGMl3XpRyzi43oqw8XC6%2FgKIL0e5sTK7iol5Q4RwPvt7Sdyl3PgWVaI61gq%2FmlTf0Viwj80vyvvbKeJZn8rEnR6am%2FaeJUpS0KQSTA54%2BlJdn9cNlUDe5iY4RwWdpBQ3ypDrX1RNzggyMJr5vCdCo09TStSaGBPxUraWS%2FRkokPl8w2HqmE7nyV9hVruEwC3AaHuy2kK%2FgKH2TCKaAG6uZGAvhmHaG7ixw1%2B4eM55tL2yKVUMiYBn43y4yYt3%2FHe9Dnsr%2F6qptnzXmCneIFyOpIF%2Fa16tGMOf1iMEGOqUBI90Uqm%2F2yWrcJbgvbDBxKyUuE3y%2Ban1tSHI5D9tSS4OBS4FbJ2iQRuoa2zfFeMbHz3kJNitDc8MDwvvYKnyhG%2FdbCcezbKCgKlcDd8i0KmWeQ7QyXbQ38vHz9N2XkEc94P2bqaVUs5WP9ZuC7HKA0gRFyIFiTSWZHQJE2dIegBPh97gOnWQUaH7WpBHhpWtUQ2Oae5AMzVQgEcwkJ31%2Bv8362daq&X-Amz-Signature=6944af9bc9f0e5892b6999f3e4dd57028c364184cf4e5a4334fe56110fd9e7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N64LZTD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEf%2BElBm5fi8OKBSCHK5TOSP6lSaddkL6sHsrtbePc5%2BAiEA%2FpZt2xz7%2FGCIR4HWxndVztETpaZ9DEOqapbKaNWEEL8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJY4QZkqo319xIt7RyrcA0RXkuAyBbzAjZg9zy%2Br7Z2V%2B%2BH71ta1DHKkosDqoI%2BCmFiJcfct6S10X%2F1X0Pn2A1zHQI8K3%2BqsbiH41jKa2f2zCgaUXydu3nBiwEDhc%2BbTSX9DqTe%2Fc2gYFQ0NKOl16dmBWpFCMdQVINXkzS%2FFixsoWgeSd8JjLGw%2FQEjkpvYiwdThYFj0zw%2BMUobSbjynPpp0Eh2CFMuhalJUlAY7u9uXtuqHOsLkZ8AcMBYuHn%2BF0kqPSbRdYwtH%2F0xeDcmp4L0MHAw9zWsRopUAd%2FGN%2FeAnEMO5CTjYjh2S7z21Ea%2B33lKGqsZR5nm7Y4XaHHvfgfBZJf2luUc%2BBs%2FOcnP3vRGxNQ42SvvGMl3XpRyzi43oqw8XC6%2FgKIL0e5sTK7iol5Q4RwPvt7Sdyl3PgWVaI61gq%2FmlTf0Viwj80vyvvbKeJZn8rEnR6am%2FaeJUpS0KQSTA54%2BlJdn9cNlUDe5iY4RwWdpBQ3ypDrX1RNzggyMJr5vCdCo09TStSaGBPxUraWS%2FRkokPl8w2HqmE7nyV9hVruEwC3AaHuy2kK%2FgKH2TCKaAG6uZGAvhmHaG7ixw1%2B4eM55tL2yKVUMiYBn43y4yYt3%2FHe9Dnsr%2F6qptnzXmCneIFyOpIF%2Fa16tGMOf1iMEGOqUBI90Uqm%2F2yWrcJbgvbDBxKyUuE3y%2Ban1tSHI5D9tSS4OBS4FbJ2iQRuoa2zfFeMbHz3kJNitDc8MDwvvYKnyhG%2FdbCcezbKCgKlcDd8i0KmWeQ7QyXbQ38vHz9N2XkEc94P2bqaVUs5WP9ZuC7HKA0gRFyIFiTSWZHQJE2dIegBPh97gOnWQUaH7WpBHhpWtUQ2Oae5AMzVQgEcwkJ31%2Bv8362daq&X-Amz-Signature=9528896ef702f32adf2530b774232df0335bc20e5170c00e699e16b4369aa83d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N64LZTD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEf%2BElBm5fi8OKBSCHK5TOSP6lSaddkL6sHsrtbePc5%2BAiEA%2FpZt2xz7%2FGCIR4HWxndVztETpaZ9DEOqapbKaNWEEL8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJY4QZkqo319xIt7RyrcA0RXkuAyBbzAjZg9zy%2Br7Z2V%2B%2BH71ta1DHKkosDqoI%2BCmFiJcfct6S10X%2F1X0Pn2A1zHQI8K3%2BqsbiH41jKa2f2zCgaUXydu3nBiwEDhc%2BbTSX9DqTe%2Fc2gYFQ0NKOl16dmBWpFCMdQVINXkzS%2FFixsoWgeSd8JjLGw%2FQEjkpvYiwdThYFj0zw%2BMUobSbjynPpp0Eh2CFMuhalJUlAY7u9uXtuqHOsLkZ8AcMBYuHn%2BF0kqPSbRdYwtH%2F0xeDcmp4L0MHAw9zWsRopUAd%2FGN%2FeAnEMO5CTjYjh2S7z21Ea%2B33lKGqsZR5nm7Y4XaHHvfgfBZJf2luUc%2BBs%2FOcnP3vRGxNQ42SvvGMl3XpRyzi43oqw8XC6%2FgKIL0e5sTK7iol5Q4RwPvt7Sdyl3PgWVaI61gq%2FmlTf0Viwj80vyvvbKeJZn8rEnR6am%2FaeJUpS0KQSTA54%2BlJdn9cNlUDe5iY4RwWdpBQ3ypDrX1RNzggyMJr5vCdCo09TStSaGBPxUraWS%2FRkokPl8w2HqmE7nyV9hVruEwC3AaHuy2kK%2FgKH2TCKaAG6uZGAvhmHaG7ixw1%2B4eM55tL2yKVUMiYBn43y4yYt3%2FHe9Dnsr%2F6qptnzXmCneIFyOpIF%2Fa16tGMOf1iMEGOqUBI90Uqm%2F2yWrcJbgvbDBxKyUuE3y%2Ban1tSHI5D9tSS4OBS4FbJ2iQRuoa2zfFeMbHz3kJNitDc8MDwvvYKnyhG%2FdbCcezbKCgKlcDd8i0KmWeQ7QyXbQ38vHz9N2XkEc94P2bqaVUs5WP9ZuC7HKA0gRFyIFiTSWZHQJE2dIegBPh97gOnWQUaH7WpBHhpWtUQ2Oae5AMzVQgEcwkJ31%2Bv8362daq&X-Amz-Signature=5c85dd5bcf3d6c42ae20e0817dd173f0cf82ced7e4565ea9874d31c737822109&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N64LZTD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEf%2BElBm5fi8OKBSCHK5TOSP6lSaddkL6sHsrtbePc5%2BAiEA%2FpZt2xz7%2FGCIR4HWxndVztETpaZ9DEOqapbKaNWEEL8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJY4QZkqo319xIt7RyrcA0RXkuAyBbzAjZg9zy%2Br7Z2V%2B%2BH71ta1DHKkosDqoI%2BCmFiJcfct6S10X%2F1X0Pn2A1zHQI8K3%2BqsbiH41jKa2f2zCgaUXydu3nBiwEDhc%2BbTSX9DqTe%2Fc2gYFQ0NKOl16dmBWpFCMdQVINXkzS%2FFixsoWgeSd8JjLGw%2FQEjkpvYiwdThYFj0zw%2BMUobSbjynPpp0Eh2CFMuhalJUlAY7u9uXtuqHOsLkZ8AcMBYuHn%2BF0kqPSbRdYwtH%2F0xeDcmp4L0MHAw9zWsRopUAd%2FGN%2FeAnEMO5CTjYjh2S7z21Ea%2B33lKGqsZR5nm7Y4XaHHvfgfBZJf2luUc%2BBs%2FOcnP3vRGxNQ42SvvGMl3XpRyzi43oqw8XC6%2FgKIL0e5sTK7iol5Q4RwPvt7Sdyl3PgWVaI61gq%2FmlTf0Viwj80vyvvbKeJZn8rEnR6am%2FaeJUpS0KQSTA54%2BlJdn9cNlUDe5iY4RwWdpBQ3ypDrX1RNzggyMJr5vCdCo09TStSaGBPxUraWS%2FRkokPl8w2HqmE7nyV9hVruEwC3AaHuy2kK%2FgKH2TCKaAG6uZGAvhmHaG7ixw1%2B4eM55tL2yKVUMiYBn43y4yYt3%2FHe9Dnsr%2F6qptnzXmCneIFyOpIF%2Fa16tGMOf1iMEGOqUBI90Uqm%2F2yWrcJbgvbDBxKyUuE3y%2Ban1tSHI5D9tSS4OBS4FbJ2iQRuoa2zfFeMbHz3kJNitDc8MDwvvYKnyhG%2FdbCcezbKCgKlcDd8i0KmWeQ7QyXbQ38vHz9N2XkEc94P2bqaVUs5WP9ZuC7HKA0gRFyIFiTSWZHQJE2dIegBPh97gOnWQUaH7WpBHhpWtUQ2Oae5AMzVQgEcwkJ31%2Bv8362daq&X-Amz-Signature=16b5a75d4fae12f21236c5b5178413751732c75c3387b37f42a31e80e6f5e7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N64LZTD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEf%2BElBm5fi8OKBSCHK5TOSP6lSaddkL6sHsrtbePc5%2BAiEA%2FpZt2xz7%2FGCIR4HWxndVztETpaZ9DEOqapbKaNWEEL8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJY4QZkqo319xIt7RyrcA0RXkuAyBbzAjZg9zy%2Br7Z2V%2B%2BH71ta1DHKkosDqoI%2BCmFiJcfct6S10X%2F1X0Pn2A1zHQI8K3%2BqsbiH41jKa2f2zCgaUXydu3nBiwEDhc%2BbTSX9DqTe%2Fc2gYFQ0NKOl16dmBWpFCMdQVINXkzS%2FFixsoWgeSd8JjLGw%2FQEjkpvYiwdThYFj0zw%2BMUobSbjynPpp0Eh2CFMuhalJUlAY7u9uXtuqHOsLkZ8AcMBYuHn%2BF0kqPSbRdYwtH%2F0xeDcmp4L0MHAw9zWsRopUAd%2FGN%2FeAnEMO5CTjYjh2S7z21Ea%2B33lKGqsZR5nm7Y4XaHHvfgfBZJf2luUc%2BBs%2FOcnP3vRGxNQ42SvvGMl3XpRyzi43oqw8XC6%2FgKIL0e5sTK7iol5Q4RwPvt7Sdyl3PgWVaI61gq%2FmlTf0Viwj80vyvvbKeJZn8rEnR6am%2FaeJUpS0KQSTA54%2BlJdn9cNlUDe5iY4RwWdpBQ3ypDrX1RNzggyMJr5vCdCo09TStSaGBPxUraWS%2FRkokPl8w2HqmE7nyV9hVruEwC3AaHuy2kK%2FgKH2TCKaAG6uZGAvhmHaG7ixw1%2B4eM55tL2yKVUMiYBn43y4yYt3%2FHe9Dnsr%2F6qptnzXmCneIFyOpIF%2Fa16tGMOf1iMEGOqUBI90Uqm%2F2yWrcJbgvbDBxKyUuE3y%2Ban1tSHI5D9tSS4OBS4FbJ2iQRuoa2zfFeMbHz3kJNitDc8MDwvvYKnyhG%2FdbCcezbKCgKlcDd8i0KmWeQ7QyXbQ38vHz9N2XkEc94P2bqaVUs5WP9ZuC7HKA0gRFyIFiTSWZHQJE2dIegBPh97gOnWQUaH7WpBHhpWtUQ2Oae5AMzVQgEcwkJ31%2Bv8362daq&X-Amz-Signature=69b3179735fba7566bde139adf3f01096ea76b0837889dee8242d91d4b4ed8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
