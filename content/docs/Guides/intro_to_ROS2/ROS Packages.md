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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXCHTUK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIasq%2FU%2B8dLNb9%2BkVbClDrEonfwuLFeQnJXfYm6%2Fp6pwIgNWqSj0KjPY7uTIDQfSMzTUO4GH7RRNuDyHgfwgGWc10q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIbwGYS9svcvziHlfyrcA2Z9gRBVILvKlk1%2BklId8g9zo2C%2BsRvbeH1sOcM5nmNj55rJ%2FfHnQpjn7M2MqbRQoVj1eFA5AZcWTGIoMmD5oxmv3t0XiclWx3q%2B%2FMUv75Mvy8T1yoBGfXFcZv%2B%2Fyjd4n2zpeC8F52EDXLhKWjGHw6PPmOEQhfoBAmZHIcwKEhthRu739vBrd%2BOT5zKXUxrXRO%2F%2Fu%2BDeru7imtcdbp3wvgpT83yVA5Cqy4jEHHcZcfU%2BhCCZy7uZXpUYOwtLNTBPnI6Cuyw0b3zmWz160WTDwldy%2BAoVrQdkCps%2FLdIFE%2BTsCk7ylgfuCmN3IG21yd1alHXJ0ikTR6nbHBfIWNfrpuXR5l0a6cquGzUKMCrQ%2FHtdPUbbabqsqMyP6ri7kaEU%2BuI61tffbK1R5fmEdmtvrObOANUkKeBQ01ut9inbrhI%2FLoX1UGR71DbDF5THhkvHTZlrIDL0wbuRIbPBERT8rSFHv0GUVxPtMGPnXW0xb%2BQ0mJeyD11RsX3Sht5a8lDLIjrWdu3noJW7nIC%2FkZPJgtmv%2FFWnwz%2FYV90Rxi3UNj4BQOgD9jV57nbrIZW4qema5CIeyXNvrzG7lmBoMpRVwVuqHBlXBdQg5mitga5H9vH5MAVswnnvYcEdDT0GMMncn8EGOqUBZ3w2vzf2B9CUSaFRacXKyAdPrr%2FWl08GzlgYjZlNq3vzfxnVFuVntoHRz0NkVuEdyU8nLv9Ay0Bcok%2BgMhJ0jJOxJ4LTLU%2Fzk%2BWjSeaVTcCNI4wtBRb1Mffb3N2vRrPQd5%2Fk%2FcsKeO3Fcwwaw6BCHtGqyrh6%2BAtdKGredKmOvI4Gs8q41hysIZon2N%2BBkaIR%2FkT9pxZSLj5quNAXjf6IlcdLXGZQ&X-Amz-Signature=adf86dd3be41d5683dbaabfc8cda74aa9cfc08771f72f073f5436981f5b982c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXCHTUK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIasq%2FU%2B8dLNb9%2BkVbClDrEonfwuLFeQnJXfYm6%2Fp6pwIgNWqSj0KjPY7uTIDQfSMzTUO4GH7RRNuDyHgfwgGWc10q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIbwGYS9svcvziHlfyrcA2Z9gRBVILvKlk1%2BklId8g9zo2C%2BsRvbeH1sOcM5nmNj55rJ%2FfHnQpjn7M2MqbRQoVj1eFA5AZcWTGIoMmD5oxmv3t0XiclWx3q%2B%2FMUv75Mvy8T1yoBGfXFcZv%2B%2Fyjd4n2zpeC8F52EDXLhKWjGHw6PPmOEQhfoBAmZHIcwKEhthRu739vBrd%2BOT5zKXUxrXRO%2F%2Fu%2BDeru7imtcdbp3wvgpT83yVA5Cqy4jEHHcZcfU%2BhCCZy7uZXpUYOwtLNTBPnI6Cuyw0b3zmWz160WTDwldy%2BAoVrQdkCps%2FLdIFE%2BTsCk7ylgfuCmN3IG21yd1alHXJ0ikTR6nbHBfIWNfrpuXR5l0a6cquGzUKMCrQ%2FHtdPUbbabqsqMyP6ri7kaEU%2BuI61tffbK1R5fmEdmtvrObOANUkKeBQ01ut9inbrhI%2FLoX1UGR71DbDF5THhkvHTZlrIDL0wbuRIbPBERT8rSFHv0GUVxPtMGPnXW0xb%2BQ0mJeyD11RsX3Sht5a8lDLIjrWdu3noJW7nIC%2FkZPJgtmv%2FFWnwz%2FYV90Rxi3UNj4BQOgD9jV57nbrIZW4qema5CIeyXNvrzG7lmBoMpRVwVuqHBlXBdQg5mitga5H9vH5MAVswnnvYcEdDT0GMMncn8EGOqUBZ3w2vzf2B9CUSaFRacXKyAdPrr%2FWl08GzlgYjZlNq3vzfxnVFuVntoHRz0NkVuEdyU8nLv9Ay0Bcok%2BgMhJ0jJOxJ4LTLU%2Fzk%2BWjSeaVTcCNI4wtBRb1Mffb3N2vRrPQd5%2Fk%2FcsKeO3Fcwwaw6BCHtGqyrh6%2BAtdKGredKmOvI4Gs8q41hysIZon2N%2BBkaIR%2FkT9pxZSLj5quNAXjf6IlcdLXGZQ&X-Amz-Signature=ec3d31ed182394bd01fd85ac733bab6ed2ad85d6fcdd8dfac10d76779ff75158&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXCHTUK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIasq%2FU%2B8dLNb9%2BkVbClDrEonfwuLFeQnJXfYm6%2Fp6pwIgNWqSj0KjPY7uTIDQfSMzTUO4GH7RRNuDyHgfwgGWc10q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIbwGYS9svcvziHlfyrcA2Z9gRBVILvKlk1%2BklId8g9zo2C%2BsRvbeH1sOcM5nmNj55rJ%2FfHnQpjn7M2MqbRQoVj1eFA5AZcWTGIoMmD5oxmv3t0XiclWx3q%2B%2FMUv75Mvy8T1yoBGfXFcZv%2B%2Fyjd4n2zpeC8F52EDXLhKWjGHw6PPmOEQhfoBAmZHIcwKEhthRu739vBrd%2BOT5zKXUxrXRO%2F%2Fu%2BDeru7imtcdbp3wvgpT83yVA5Cqy4jEHHcZcfU%2BhCCZy7uZXpUYOwtLNTBPnI6Cuyw0b3zmWz160WTDwldy%2BAoVrQdkCps%2FLdIFE%2BTsCk7ylgfuCmN3IG21yd1alHXJ0ikTR6nbHBfIWNfrpuXR5l0a6cquGzUKMCrQ%2FHtdPUbbabqsqMyP6ri7kaEU%2BuI61tffbK1R5fmEdmtvrObOANUkKeBQ01ut9inbrhI%2FLoX1UGR71DbDF5THhkvHTZlrIDL0wbuRIbPBERT8rSFHv0GUVxPtMGPnXW0xb%2BQ0mJeyD11RsX3Sht5a8lDLIjrWdu3noJW7nIC%2FkZPJgtmv%2FFWnwz%2FYV90Rxi3UNj4BQOgD9jV57nbrIZW4qema5CIeyXNvrzG7lmBoMpRVwVuqHBlXBdQg5mitga5H9vH5MAVswnnvYcEdDT0GMMncn8EGOqUBZ3w2vzf2B9CUSaFRacXKyAdPrr%2FWl08GzlgYjZlNq3vzfxnVFuVntoHRz0NkVuEdyU8nLv9Ay0Bcok%2BgMhJ0jJOxJ4LTLU%2Fzk%2BWjSeaVTcCNI4wtBRb1Mffb3N2vRrPQd5%2Fk%2FcsKeO3Fcwwaw6BCHtGqyrh6%2BAtdKGredKmOvI4Gs8q41hysIZon2N%2BBkaIR%2FkT9pxZSLj5quNAXjf6IlcdLXGZQ&X-Amz-Signature=1214f611713cf5fef5ebbac08679c9ed8854a6c2c0dde8bd40354a09d6a7f67e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXCHTUK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIasq%2FU%2B8dLNb9%2BkVbClDrEonfwuLFeQnJXfYm6%2Fp6pwIgNWqSj0KjPY7uTIDQfSMzTUO4GH7RRNuDyHgfwgGWc10q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIbwGYS9svcvziHlfyrcA2Z9gRBVILvKlk1%2BklId8g9zo2C%2BsRvbeH1sOcM5nmNj55rJ%2FfHnQpjn7M2MqbRQoVj1eFA5AZcWTGIoMmD5oxmv3t0XiclWx3q%2B%2FMUv75Mvy8T1yoBGfXFcZv%2B%2Fyjd4n2zpeC8F52EDXLhKWjGHw6PPmOEQhfoBAmZHIcwKEhthRu739vBrd%2BOT5zKXUxrXRO%2F%2Fu%2BDeru7imtcdbp3wvgpT83yVA5Cqy4jEHHcZcfU%2BhCCZy7uZXpUYOwtLNTBPnI6Cuyw0b3zmWz160WTDwldy%2BAoVrQdkCps%2FLdIFE%2BTsCk7ylgfuCmN3IG21yd1alHXJ0ikTR6nbHBfIWNfrpuXR5l0a6cquGzUKMCrQ%2FHtdPUbbabqsqMyP6ri7kaEU%2BuI61tffbK1R5fmEdmtvrObOANUkKeBQ01ut9inbrhI%2FLoX1UGR71DbDF5THhkvHTZlrIDL0wbuRIbPBERT8rSFHv0GUVxPtMGPnXW0xb%2BQ0mJeyD11RsX3Sht5a8lDLIjrWdu3noJW7nIC%2FkZPJgtmv%2FFWnwz%2FYV90Rxi3UNj4BQOgD9jV57nbrIZW4qema5CIeyXNvrzG7lmBoMpRVwVuqHBlXBdQg5mitga5H9vH5MAVswnnvYcEdDT0GMMncn8EGOqUBZ3w2vzf2B9CUSaFRacXKyAdPrr%2FWl08GzlgYjZlNq3vzfxnVFuVntoHRz0NkVuEdyU8nLv9Ay0Bcok%2BgMhJ0jJOxJ4LTLU%2Fzk%2BWjSeaVTcCNI4wtBRb1Mffb3N2vRrPQd5%2Fk%2FcsKeO3Fcwwaw6BCHtGqyrh6%2BAtdKGredKmOvI4Gs8q41hysIZon2N%2BBkaIR%2FkT9pxZSLj5quNAXjf6IlcdLXGZQ&X-Amz-Signature=c1d4b3958b3088b4deccf5ad71f89d67f75cb507b061cb494791ce168308ea7c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXCHTUK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIasq%2FU%2B8dLNb9%2BkVbClDrEonfwuLFeQnJXfYm6%2Fp6pwIgNWqSj0KjPY7uTIDQfSMzTUO4GH7RRNuDyHgfwgGWc10q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIbwGYS9svcvziHlfyrcA2Z9gRBVILvKlk1%2BklId8g9zo2C%2BsRvbeH1sOcM5nmNj55rJ%2FfHnQpjn7M2MqbRQoVj1eFA5AZcWTGIoMmD5oxmv3t0XiclWx3q%2B%2FMUv75Mvy8T1yoBGfXFcZv%2B%2Fyjd4n2zpeC8F52EDXLhKWjGHw6PPmOEQhfoBAmZHIcwKEhthRu739vBrd%2BOT5zKXUxrXRO%2F%2Fu%2BDeru7imtcdbp3wvgpT83yVA5Cqy4jEHHcZcfU%2BhCCZy7uZXpUYOwtLNTBPnI6Cuyw0b3zmWz160WTDwldy%2BAoVrQdkCps%2FLdIFE%2BTsCk7ylgfuCmN3IG21yd1alHXJ0ikTR6nbHBfIWNfrpuXR5l0a6cquGzUKMCrQ%2FHtdPUbbabqsqMyP6ri7kaEU%2BuI61tffbK1R5fmEdmtvrObOANUkKeBQ01ut9inbrhI%2FLoX1UGR71DbDF5THhkvHTZlrIDL0wbuRIbPBERT8rSFHv0GUVxPtMGPnXW0xb%2BQ0mJeyD11RsX3Sht5a8lDLIjrWdu3noJW7nIC%2FkZPJgtmv%2FFWnwz%2FYV90Rxi3UNj4BQOgD9jV57nbrIZW4qema5CIeyXNvrzG7lmBoMpRVwVuqHBlXBdQg5mitga5H9vH5MAVswnnvYcEdDT0GMMncn8EGOqUBZ3w2vzf2B9CUSaFRacXKyAdPrr%2FWl08GzlgYjZlNq3vzfxnVFuVntoHRz0NkVuEdyU8nLv9Ay0Bcok%2BgMhJ0jJOxJ4LTLU%2Fzk%2BWjSeaVTcCNI4wtBRb1Mffb3N2vRrPQd5%2Fk%2FcsKeO3Fcwwaw6BCHtGqyrh6%2BAtdKGredKmOvI4Gs8q41hysIZon2N%2BBkaIR%2FkT9pxZSLj5quNAXjf6IlcdLXGZQ&X-Amz-Signature=9f5f2824aace411eed4b5c50044c05be95d98b770b51fd262dbb5219bf6121e7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXCHTUK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIasq%2FU%2B8dLNb9%2BkVbClDrEonfwuLFeQnJXfYm6%2Fp6pwIgNWqSj0KjPY7uTIDQfSMzTUO4GH7RRNuDyHgfwgGWc10q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIbwGYS9svcvziHlfyrcA2Z9gRBVILvKlk1%2BklId8g9zo2C%2BsRvbeH1sOcM5nmNj55rJ%2FfHnQpjn7M2MqbRQoVj1eFA5AZcWTGIoMmD5oxmv3t0XiclWx3q%2B%2FMUv75Mvy8T1yoBGfXFcZv%2B%2Fyjd4n2zpeC8F52EDXLhKWjGHw6PPmOEQhfoBAmZHIcwKEhthRu739vBrd%2BOT5zKXUxrXRO%2F%2Fu%2BDeru7imtcdbp3wvgpT83yVA5Cqy4jEHHcZcfU%2BhCCZy7uZXpUYOwtLNTBPnI6Cuyw0b3zmWz160WTDwldy%2BAoVrQdkCps%2FLdIFE%2BTsCk7ylgfuCmN3IG21yd1alHXJ0ikTR6nbHBfIWNfrpuXR5l0a6cquGzUKMCrQ%2FHtdPUbbabqsqMyP6ri7kaEU%2BuI61tffbK1R5fmEdmtvrObOANUkKeBQ01ut9inbrhI%2FLoX1UGR71DbDF5THhkvHTZlrIDL0wbuRIbPBERT8rSFHv0GUVxPtMGPnXW0xb%2BQ0mJeyD11RsX3Sht5a8lDLIjrWdu3noJW7nIC%2FkZPJgtmv%2FFWnwz%2FYV90Rxi3UNj4BQOgD9jV57nbrIZW4qema5CIeyXNvrzG7lmBoMpRVwVuqHBlXBdQg5mitga5H9vH5MAVswnnvYcEdDT0GMMncn8EGOqUBZ3w2vzf2B9CUSaFRacXKyAdPrr%2FWl08GzlgYjZlNq3vzfxnVFuVntoHRz0NkVuEdyU8nLv9Ay0Bcok%2BgMhJ0jJOxJ4LTLU%2Fzk%2BWjSeaVTcCNI4wtBRb1Mffb3N2vRrPQd5%2Fk%2FcsKeO3Fcwwaw6BCHtGqyrh6%2BAtdKGredKmOvI4Gs8q41hysIZon2N%2BBkaIR%2FkT9pxZSLj5quNAXjf6IlcdLXGZQ&X-Amz-Signature=ea5a1ce49592f801e7fcd970900f4929e48a26788dafa7d3f31963938ffa4e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXCHTUK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIasq%2FU%2B8dLNb9%2BkVbClDrEonfwuLFeQnJXfYm6%2Fp6pwIgNWqSj0KjPY7uTIDQfSMzTUO4GH7RRNuDyHgfwgGWc10q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIbwGYS9svcvziHlfyrcA2Z9gRBVILvKlk1%2BklId8g9zo2C%2BsRvbeH1sOcM5nmNj55rJ%2FfHnQpjn7M2MqbRQoVj1eFA5AZcWTGIoMmD5oxmv3t0XiclWx3q%2B%2FMUv75Mvy8T1yoBGfXFcZv%2B%2Fyjd4n2zpeC8F52EDXLhKWjGHw6PPmOEQhfoBAmZHIcwKEhthRu739vBrd%2BOT5zKXUxrXRO%2F%2Fu%2BDeru7imtcdbp3wvgpT83yVA5Cqy4jEHHcZcfU%2BhCCZy7uZXpUYOwtLNTBPnI6Cuyw0b3zmWz160WTDwldy%2BAoVrQdkCps%2FLdIFE%2BTsCk7ylgfuCmN3IG21yd1alHXJ0ikTR6nbHBfIWNfrpuXR5l0a6cquGzUKMCrQ%2FHtdPUbbabqsqMyP6ri7kaEU%2BuI61tffbK1R5fmEdmtvrObOANUkKeBQ01ut9inbrhI%2FLoX1UGR71DbDF5THhkvHTZlrIDL0wbuRIbPBERT8rSFHv0GUVxPtMGPnXW0xb%2BQ0mJeyD11RsX3Sht5a8lDLIjrWdu3noJW7nIC%2FkZPJgtmv%2FFWnwz%2FYV90Rxi3UNj4BQOgD9jV57nbrIZW4qema5CIeyXNvrzG7lmBoMpRVwVuqHBlXBdQg5mitga5H9vH5MAVswnnvYcEdDT0GMMncn8EGOqUBZ3w2vzf2B9CUSaFRacXKyAdPrr%2FWl08GzlgYjZlNq3vzfxnVFuVntoHRz0NkVuEdyU8nLv9Ay0Bcok%2BgMhJ0jJOxJ4LTLU%2Fzk%2BWjSeaVTcCNI4wtBRb1Mffb3N2vRrPQd5%2Fk%2FcsKeO3Fcwwaw6BCHtGqyrh6%2BAtdKGredKmOvI4Gs8q41hysIZon2N%2BBkaIR%2FkT9pxZSLj5quNAXjf6IlcdLXGZQ&X-Amz-Signature=df8882524943a7bf3376a4941c9abd92fc4f4c55ee72f1a15a853c51d669b81a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
