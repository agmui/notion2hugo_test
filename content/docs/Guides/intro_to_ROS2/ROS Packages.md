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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5I7SGX2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPYTFtGtDAXvu9182dOeZbRVIG%2BSx%2F%2BmjmuAKojdB2xAiEAzuzlofNKi5kv6DBJgl8h2nQSivhUAPbhyp33kYZ7U0oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb4ZrwjY%2BPFb0MzVyrcA7zMG4%2FiI02Zr176qbypgf98vVOwB8wTwPOdsI%2FFZiaC%2FRrvXoji05EI0DPIHNYkMoVDbTZLdFKDgxlLOoSMPN%2FTP%2FnxQ8YY%2BE%2F8cUeMKrZvYowjdcpjA0HVJ860EEUChGC%2Fu3lyRReszaqSfCcA81JEORsoESoLHlIUf6G9ojx0UpUp7Tx96C9iR%2FH8jkLw5B9Kl9Plsv6NSf0XLo5KSP4tbzZrwhN7l3%2B8g21ztxs9Jf1ooQc5SyvP1TxHqH55fb8ewRM%2Feo3uPhDVqpl41RlSXXvyLr54lUGkCxas7xWISZD%2FedVhzrbv3AJfMp%2FWCQIAtkHG1%2FzQcOLH3qPgdl3AhqskokmPOgR1KHJKmuB9Mq2p41hNBZC405O2Mzyhd8tTWGsyAl8Hjoh5KHFqFi9tRg5zDT0f%2FSiSKZA12L69ze58xZclv%2F7JPKyZup9O9poXlww%2BvWH%2B7ZW%2B9xn4pI%2FXjDMdy%2By%2FEjlt5ZnklwVpDS6nqStNMVwHRvjQGVB0aKH%2F6wMIrnrinSHw7b2wzM%2Bgk1hjEToUL47lB49%2BurzH3wZM7L5K2BzR74sP6tH3s7U4TMOp5XJEi7up%2FHu2UuOcIYDWf%2FjdfNAlJ1Jrg2%2FGu38YW0u1qLRrxVHgMK%2Frh8MGOqUBGV2WzzzkVP6oZoF%2FKiq6Ele01DUM6MNFOXTt1TOnO3VRZx8wjYCx07VOcWv0TEc%2F%2BR6UZa28MZohU2%2FS5AWUWsNGjqgX6zSHfdxcU0P83Tls8halVGMGGEUFz%2BZJJHVir%2BoQNGVigIXYtIp9XEgi0a89608xRpzQgvjHSm%2FnCQijqopIut8w7s16rYln0KJooP66FfyCMlbvPM0YX2ugy8O%2FDgMJ&X-Amz-Signature=8faedb6b38fa2215b45c45bb02512d1e7b9f01c538df92456042d3b441e54601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5I7SGX2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPYTFtGtDAXvu9182dOeZbRVIG%2BSx%2F%2BmjmuAKojdB2xAiEAzuzlofNKi5kv6DBJgl8h2nQSivhUAPbhyp33kYZ7U0oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb4ZrwjY%2BPFb0MzVyrcA7zMG4%2FiI02Zr176qbypgf98vVOwB8wTwPOdsI%2FFZiaC%2FRrvXoji05EI0DPIHNYkMoVDbTZLdFKDgxlLOoSMPN%2FTP%2FnxQ8YY%2BE%2F8cUeMKrZvYowjdcpjA0HVJ860EEUChGC%2Fu3lyRReszaqSfCcA81JEORsoESoLHlIUf6G9ojx0UpUp7Tx96C9iR%2FH8jkLw5B9Kl9Plsv6NSf0XLo5KSP4tbzZrwhN7l3%2B8g21ztxs9Jf1ooQc5SyvP1TxHqH55fb8ewRM%2Feo3uPhDVqpl41RlSXXvyLr54lUGkCxas7xWISZD%2FedVhzrbv3AJfMp%2FWCQIAtkHG1%2FzQcOLH3qPgdl3AhqskokmPOgR1KHJKmuB9Mq2p41hNBZC405O2Mzyhd8tTWGsyAl8Hjoh5KHFqFi9tRg5zDT0f%2FSiSKZA12L69ze58xZclv%2F7JPKyZup9O9poXlww%2BvWH%2B7ZW%2B9xn4pI%2FXjDMdy%2By%2FEjlt5ZnklwVpDS6nqStNMVwHRvjQGVB0aKH%2F6wMIrnrinSHw7b2wzM%2Bgk1hjEToUL47lB49%2BurzH3wZM7L5K2BzR74sP6tH3s7U4TMOp5XJEi7up%2FHu2UuOcIYDWf%2FjdfNAlJ1Jrg2%2FGu38YW0u1qLRrxVHgMK%2Frh8MGOqUBGV2WzzzkVP6oZoF%2FKiq6Ele01DUM6MNFOXTt1TOnO3VRZx8wjYCx07VOcWv0TEc%2F%2BR6UZa28MZohU2%2FS5AWUWsNGjqgX6zSHfdxcU0P83Tls8halVGMGGEUFz%2BZJJHVir%2BoQNGVigIXYtIp9XEgi0a89608xRpzQgvjHSm%2FnCQijqopIut8w7s16rYln0KJooP66FfyCMlbvPM0YX2ugy8O%2FDgMJ&X-Amz-Signature=a890c5d3d6c7e0cf52de6c88e64a1ce0bf142d34327887e880b775813cf4bcb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5I7SGX2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPYTFtGtDAXvu9182dOeZbRVIG%2BSx%2F%2BmjmuAKojdB2xAiEAzuzlofNKi5kv6DBJgl8h2nQSivhUAPbhyp33kYZ7U0oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb4ZrwjY%2BPFb0MzVyrcA7zMG4%2FiI02Zr176qbypgf98vVOwB8wTwPOdsI%2FFZiaC%2FRrvXoji05EI0DPIHNYkMoVDbTZLdFKDgxlLOoSMPN%2FTP%2FnxQ8YY%2BE%2F8cUeMKrZvYowjdcpjA0HVJ860EEUChGC%2Fu3lyRReszaqSfCcA81JEORsoESoLHlIUf6G9ojx0UpUp7Tx96C9iR%2FH8jkLw5B9Kl9Plsv6NSf0XLo5KSP4tbzZrwhN7l3%2B8g21ztxs9Jf1ooQc5SyvP1TxHqH55fb8ewRM%2Feo3uPhDVqpl41RlSXXvyLr54lUGkCxas7xWISZD%2FedVhzrbv3AJfMp%2FWCQIAtkHG1%2FzQcOLH3qPgdl3AhqskokmPOgR1KHJKmuB9Mq2p41hNBZC405O2Mzyhd8tTWGsyAl8Hjoh5KHFqFi9tRg5zDT0f%2FSiSKZA12L69ze58xZclv%2F7JPKyZup9O9poXlww%2BvWH%2B7ZW%2B9xn4pI%2FXjDMdy%2By%2FEjlt5ZnklwVpDS6nqStNMVwHRvjQGVB0aKH%2F6wMIrnrinSHw7b2wzM%2Bgk1hjEToUL47lB49%2BurzH3wZM7L5K2BzR74sP6tH3s7U4TMOp5XJEi7up%2FHu2UuOcIYDWf%2FjdfNAlJ1Jrg2%2FGu38YW0u1qLRrxVHgMK%2Frh8MGOqUBGV2WzzzkVP6oZoF%2FKiq6Ele01DUM6MNFOXTt1TOnO3VRZx8wjYCx07VOcWv0TEc%2F%2BR6UZa28MZohU2%2FS5AWUWsNGjqgX6zSHfdxcU0P83Tls8halVGMGGEUFz%2BZJJHVir%2BoQNGVigIXYtIp9XEgi0a89608xRpzQgvjHSm%2FnCQijqopIut8w7s16rYln0KJooP66FfyCMlbvPM0YX2ugy8O%2FDgMJ&X-Amz-Signature=b9d497ae96038310bcf1f0a3e50bcb1f36391dd7b2ddbc78d89c8394b2931a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5I7SGX2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPYTFtGtDAXvu9182dOeZbRVIG%2BSx%2F%2BmjmuAKojdB2xAiEAzuzlofNKi5kv6DBJgl8h2nQSivhUAPbhyp33kYZ7U0oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb4ZrwjY%2BPFb0MzVyrcA7zMG4%2FiI02Zr176qbypgf98vVOwB8wTwPOdsI%2FFZiaC%2FRrvXoji05EI0DPIHNYkMoVDbTZLdFKDgxlLOoSMPN%2FTP%2FnxQ8YY%2BE%2F8cUeMKrZvYowjdcpjA0HVJ860EEUChGC%2Fu3lyRReszaqSfCcA81JEORsoESoLHlIUf6G9ojx0UpUp7Tx96C9iR%2FH8jkLw5B9Kl9Plsv6NSf0XLo5KSP4tbzZrwhN7l3%2B8g21ztxs9Jf1ooQc5SyvP1TxHqH55fb8ewRM%2Feo3uPhDVqpl41RlSXXvyLr54lUGkCxas7xWISZD%2FedVhzrbv3AJfMp%2FWCQIAtkHG1%2FzQcOLH3qPgdl3AhqskokmPOgR1KHJKmuB9Mq2p41hNBZC405O2Mzyhd8tTWGsyAl8Hjoh5KHFqFi9tRg5zDT0f%2FSiSKZA12L69ze58xZclv%2F7JPKyZup9O9poXlww%2BvWH%2B7ZW%2B9xn4pI%2FXjDMdy%2By%2FEjlt5ZnklwVpDS6nqStNMVwHRvjQGVB0aKH%2F6wMIrnrinSHw7b2wzM%2Bgk1hjEToUL47lB49%2BurzH3wZM7L5K2BzR74sP6tH3s7U4TMOp5XJEi7up%2FHu2UuOcIYDWf%2FjdfNAlJ1Jrg2%2FGu38YW0u1qLRrxVHgMK%2Frh8MGOqUBGV2WzzzkVP6oZoF%2FKiq6Ele01DUM6MNFOXTt1TOnO3VRZx8wjYCx07VOcWv0TEc%2F%2BR6UZa28MZohU2%2FS5AWUWsNGjqgX6zSHfdxcU0P83Tls8halVGMGGEUFz%2BZJJHVir%2BoQNGVigIXYtIp9XEgi0a89608xRpzQgvjHSm%2FnCQijqopIut8w7s16rYln0KJooP66FfyCMlbvPM0YX2ugy8O%2FDgMJ&X-Amz-Signature=4679949f3b4d27ddafe6c38a2f60ab66ef196b2927a7e6a07b40f4d7b67c904f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5I7SGX2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPYTFtGtDAXvu9182dOeZbRVIG%2BSx%2F%2BmjmuAKojdB2xAiEAzuzlofNKi5kv6DBJgl8h2nQSivhUAPbhyp33kYZ7U0oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb4ZrwjY%2BPFb0MzVyrcA7zMG4%2FiI02Zr176qbypgf98vVOwB8wTwPOdsI%2FFZiaC%2FRrvXoji05EI0DPIHNYkMoVDbTZLdFKDgxlLOoSMPN%2FTP%2FnxQ8YY%2BE%2F8cUeMKrZvYowjdcpjA0HVJ860EEUChGC%2Fu3lyRReszaqSfCcA81JEORsoESoLHlIUf6G9ojx0UpUp7Tx96C9iR%2FH8jkLw5B9Kl9Plsv6NSf0XLo5KSP4tbzZrwhN7l3%2B8g21ztxs9Jf1ooQc5SyvP1TxHqH55fb8ewRM%2Feo3uPhDVqpl41RlSXXvyLr54lUGkCxas7xWISZD%2FedVhzrbv3AJfMp%2FWCQIAtkHG1%2FzQcOLH3qPgdl3AhqskokmPOgR1KHJKmuB9Mq2p41hNBZC405O2Mzyhd8tTWGsyAl8Hjoh5KHFqFi9tRg5zDT0f%2FSiSKZA12L69ze58xZclv%2F7JPKyZup9O9poXlww%2BvWH%2B7ZW%2B9xn4pI%2FXjDMdy%2By%2FEjlt5ZnklwVpDS6nqStNMVwHRvjQGVB0aKH%2F6wMIrnrinSHw7b2wzM%2Bgk1hjEToUL47lB49%2BurzH3wZM7L5K2BzR74sP6tH3s7U4TMOp5XJEi7up%2FHu2UuOcIYDWf%2FjdfNAlJ1Jrg2%2FGu38YW0u1qLRrxVHgMK%2Frh8MGOqUBGV2WzzzkVP6oZoF%2FKiq6Ele01DUM6MNFOXTt1TOnO3VRZx8wjYCx07VOcWv0TEc%2F%2BR6UZa28MZohU2%2FS5AWUWsNGjqgX6zSHfdxcU0P83Tls8halVGMGGEUFz%2BZJJHVir%2BoQNGVigIXYtIp9XEgi0a89608xRpzQgvjHSm%2FnCQijqopIut8w7s16rYln0KJooP66FfyCMlbvPM0YX2ugy8O%2FDgMJ&X-Amz-Signature=4d1ae413caf91425ed126e012c888263cee029c7561297bdccd5a53af667e7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5I7SGX2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPYTFtGtDAXvu9182dOeZbRVIG%2BSx%2F%2BmjmuAKojdB2xAiEAzuzlofNKi5kv6DBJgl8h2nQSivhUAPbhyp33kYZ7U0oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb4ZrwjY%2BPFb0MzVyrcA7zMG4%2FiI02Zr176qbypgf98vVOwB8wTwPOdsI%2FFZiaC%2FRrvXoji05EI0DPIHNYkMoVDbTZLdFKDgxlLOoSMPN%2FTP%2FnxQ8YY%2BE%2F8cUeMKrZvYowjdcpjA0HVJ860EEUChGC%2Fu3lyRReszaqSfCcA81JEORsoESoLHlIUf6G9ojx0UpUp7Tx96C9iR%2FH8jkLw5B9Kl9Plsv6NSf0XLo5KSP4tbzZrwhN7l3%2B8g21ztxs9Jf1ooQc5SyvP1TxHqH55fb8ewRM%2Feo3uPhDVqpl41RlSXXvyLr54lUGkCxas7xWISZD%2FedVhzrbv3AJfMp%2FWCQIAtkHG1%2FzQcOLH3qPgdl3AhqskokmPOgR1KHJKmuB9Mq2p41hNBZC405O2Mzyhd8tTWGsyAl8Hjoh5KHFqFi9tRg5zDT0f%2FSiSKZA12L69ze58xZclv%2F7JPKyZup9O9poXlww%2BvWH%2B7ZW%2B9xn4pI%2FXjDMdy%2By%2FEjlt5ZnklwVpDS6nqStNMVwHRvjQGVB0aKH%2F6wMIrnrinSHw7b2wzM%2Bgk1hjEToUL47lB49%2BurzH3wZM7L5K2BzR74sP6tH3s7U4TMOp5XJEi7up%2FHu2UuOcIYDWf%2FjdfNAlJ1Jrg2%2FGu38YW0u1qLRrxVHgMK%2Frh8MGOqUBGV2WzzzkVP6oZoF%2FKiq6Ele01DUM6MNFOXTt1TOnO3VRZx8wjYCx07VOcWv0TEc%2F%2BR6UZa28MZohU2%2FS5AWUWsNGjqgX6zSHfdxcU0P83Tls8halVGMGGEUFz%2BZJJHVir%2BoQNGVigIXYtIp9XEgi0a89608xRpzQgvjHSm%2FnCQijqopIut8w7s16rYln0KJooP66FfyCMlbvPM0YX2ugy8O%2FDgMJ&X-Amz-Signature=dcb21dfa5305113ad0393fba091932eb1571f977a43d9fae1f73c725ce204253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5I7SGX2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPYTFtGtDAXvu9182dOeZbRVIG%2BSx%2F%2BmjmuAKojdB2xAiEAzuzlofNKi5kv6DBJgl8h2nQSivhUAPbhyp33kYZ7U0oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb4ZrwjY%2BPFb0MzVyrcA7zMG4%2FiI02Zr176qbypgf98vVOwB8wTwPOdsI%2FFZiaC%2FRrvXoji05EI0DPIHNYkMoVDbTZLdFKDgxlLOoSMPN%2FTP%2FnxQ8YY%2BE%2F8cUeMKrZvYowjdcpjA0HVJ860EEUChGC%2Fu3lyRReszaqSfCcA81JEORsoESoLHlIUf6G9ojx0UpUp7Tx96C9iR%2FH8jkLw5B9Kl9Plsv6NSf0XLo5KSP4tbzZrwhN7l3%2B8g21ztxs9Jf1ooQc5SyvP1TxHqH55fb8ewRM%2Feo3uPhDVqpl41RlSXXvyLr54lUGkCxas7xWISZD%2FedVhzrbv3AJfMp%2FWCQIAtkHG1%2FzQcOLH3qPgdl3AhqskokmPOgR1KHJKmuB9Mq2p41hNBZC405O2Mzyhd8tTWGsyAl8Hjoh5KHFqFi9tRg5zDT0f%2FSiSKZA12L69ze58xZclv%2F7JPKyZup9O9poXlww%2BvWH%2B7ZW%2B9xn4pI%2FXjDMdy%2By%2FEjlt5ZnklwVpDS6nqStNMVwHRvjQGVB0aKH%2F6wMIrnrinSHw7b2wzM%2Bgk1hjEToUL47lB49%2BurzH3wZM7L5K2BzR74sP6tH3s7U4TMOp5XJEi7up%2FHu2UuOcIYDWf%2FjdfNAlJ1Jrg2%2FGu38YW0u1qLRrxVHgMK%2Frh8MGOqUBGV2WzzzkVP6oZoF%2FKiq6Ele01DUM6MNFOXTt1TOnO3VRZx8wjYCx07VOcWv0TEc%2F%2BR6UZa28MZohU2%2FS5AWUWsNGjqgX6zSHfdxcU0P83Tls8halVGMGGEUFz%2BZJJHVir%2BoQNGVigIXYtIp9XEgi0a89608xRpzQgvjHSm%2FnCQijqopIut8w7s16rYln0KJooP66FfyCMlbvPM0YX2ugy8O%2FDgMJ&X-Amz-Signature=465f774a0719c66efe56d9e8038dcc1979100818931378948f5331fc989bb720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
