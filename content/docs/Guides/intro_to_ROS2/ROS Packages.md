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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMF5PNJE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEUgMAYOLJ0GgOT52XGumNJMCRKNHFKr0AfNhuduQE8QAiEAnpTnlAsbCohXyv8BLfX6LAZp%2Bu2qsj92jJaPzcV6COkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsR%2BTXO7EyBIeYAyrcA5RWhIPxUJ5yC53t9gg6eNrIF1pBWe1sCLUyVSZY9iwBUqbwZAVz2kVPAAZjmSlcT74JTXBZQ4bttDQ4M6lq3%2FclK8mctODUGRqgXWucfHkAaUh7C7LOChxrUgOUX9T4WxOarNHjljykos7DmIKf%2BGqXO3HWqIAHBFOG0gZvbDos89CI4ro%2FijhOx8%2BUljM2Gnm5JT6LeUcRgzl8FspZSytPPb1QRxbgjgNHKgGqPiFO7ykR3oDrzjqjE9ovxQlp3ig6MXcdZ0xjyiLBSm%2BT5UYZXhGu1zcVVj49o0wseSBwq6LGBcMigZjIfn507fg0wKKVa7xZSRmjIGQRUDKYSFYbC%2Bi583bsc8w%2Bsg9fCWdpuyT7JlP9PaZQwgcyhPbE%2B9I9aMpgisU7bWpQUq87y7B3Kr%2Ba7M3cRkJ5KoOSDgzBIq6Vk2zvcr2gDesWYChNBm7gIK4Zfn3O8xiMBP50EgND3%2B6GngEUTGPHRNkiietWpcbkOnj2YU1UDt6dW9gkK%2FYyTEZFr5G8MLS%2FWcjyrHdT1FgWwWGsWdRh6SuZwaePKTZ2g77flGZEkj6HyJLG1dfBgwv4J2CKYCj%2FEEziweIYozIQ0FeMMG2EYDTOKzVLfbPVGqtzM9vD0m7aMKmmtr8GOqUBMsUezHR%2BIowXa1EaM0jN0yVGIFP7RwGge3uhYeMALeKsoObo9UaNK%2FsKIHmhWkcd96Omly9bee79cCwPwUE6n4jhLUiS3HcbRDBD1NtB9ljkv%2Bocm41gesyri3r6l3c8hojMxHfLIqBe2dxQtC0YeHAFJKXLb1ZCQZK1hWGxXjbmiDR6wFDMG3whEpP0ILu6wsrsk1Gb2%2FiJhw9NTEQAwAYbt3bj&X-Amz-Signature=53335a9be1684f762dba1fc087090ab88a29e17a8e4db44bc031c4882b23897d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMF5PNJE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEUgMAYOLJ0GgOT52XGumNJMCRKNHFKr0AfNhuduQE8QAiEAnpTnlAsbCohXyv8BLfX6LAZp%2Bu2qsj92jJaPzcV6COkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsR%2BTXO7EyBIeYAyrcA5RWhIPxUJ5yC53t9gg6eNrIF1pBWe1sCLUyVSZY9iwBUqbwZAVz2kVPAAZjmSlcT74JTXBZQ4bttDQ4M6lq3%2FclK8mctODUGRqgXWucfHkAaUh7C7LOChxrUgOUX9T4WxOarNHjljykos7DmIKf%2BGqXO3HWqIAHBFOG0gZvbDos89CI4ro%2FijhOx8%2BUljM2Gnm5JT6LeUcRgzl8FspZSytPPb1QRxbgjgNHKgGqPiFO7ykR3oDrzjqjE9ovxQlp3ig6MXcdZ0xjyiLBSm%2BT5UYZXhGu1zcVVj49o0wseSBwq6LGBcMigZjIfn507fg0wKKVa7xZSRmjIGQRUDKYSFYbC%2Bi583bsc8w%2Bsg9fCWdpuyT7JlP9PaZQwgcyhPbE%2B9I9aMpgisU7bWpQUq87y7B3Kr%2Ba7M3cRkJ5KoOSDgzBIq6Vk2zvcr2gDesWYChNBm7gIK4Zfn3O8xiMBP50EgND3%2B6GngEUTGPHRNkiietWpcbkOnj2YU1UDt6dW9gkK%2FYyTEZFr5G8MLS%2FWcjyrHdT1FgWwWGsWdRh6SuZwaePKTZ2g77flGZEkj6HyJLG1dfBgwv4J2CKYCj%2FEEziweIYozIQ0FeMMG2EYDTOKzVLfbPVGqtzM9vD0m7aMKmmtr8GOqUBMsUezHR%2BIowXa1EaM0jN0yVGIFP7RwGge3uhYeMALeKsoObo9UaNK%2FsKIHmhWkcd96Omly9bee79cCwPwUE6n4jhLUiS3HcbRDBD1NtB9ljkv%2Bocm41gesyri3r6l3c8hojMxHfLIqBe2dxQtC0YeHAFJKXLb1ZCQZK1hWGxXjbmiDR6wFDMG3whEpP0ILu6wsrsk1Gb2%2FiJhw9NTEQAwAYbt3bj&X-Amz-Signature=2d90d0aca0ccafb0a670ccc3df878abc500729bd4e5b2059ee9a2ee6a77ddc5d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMF5PNJE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEUgMAYOLJ0GgOT52XGumNJMCRKNHFKr0AfNhuduQE8QAiEAnpTnlAsbCohXyv8BLfX6LAZp%2Bu2qsj92jJaPzcV6COkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsR%2BTXO7EyBIeYAyrcA5RWhIPxUJ5yC53t9gg6eNrIF1pBWe1sCLUyVSZY9iwBUqbwZAVz2kVPAAZjmSlcT74JTXBZQ4bttDQ4M6lq3%2FclK8mctODUGRqgXWucfHkAaUh7C7LOChxrUgOUX9T4WxOarNHjljykos7DmIKf%2BGqXO3HWqIAHBFOG0gZvbDos89CI4ro%2FijhOx8%2BUljM2Gnm5JT6LeUcRgzl8FspZSytPPb1QRxbgjgNHKgGqPiFO7ykR3oDrzjqjE9ovxQlp3ig6MXcdZ0xjyiLBSm%2BT5UYZXhGu1zcVVj49o0wseSBwq6LGBcMigZjIfn507fg0wKKVa7xZSRmjIGQRUDKYSFYbC%2Bi583bsc8w%2Bsg9fCWdpuyT7JlP9PaZQwgcyhPbE%2B9I9aMpgisU7bWpQUq87y7B3Kr%2Ba7M3cRkJ5KoOSDgzBIq6Vk2zvcr2gDesWYChNBm7gIK4Zfn3O8xiMBP50EgND3%2B6GngEUTGPHRNkiietWpcbkOnj2YU1UDt6dW9gkK%2FYyTEZFr5G8MLS%2FWcjyrHdT1FgWwWGsWdRh6SuZwaePKTZ2g77flGZEkj6HyJLG1dfBgwv4J2CKYCj%2FEEziweIYozIQ0FeMMG2EYDTOKzVLfbPVGqtzM9vD0m7aMKmmtr8GOqUBMsUezHR%2BIowXa1EaM0jN0yVGIFP7RwGge3uhYeMALeKsoObo9UaNK%2FsKIHmhWkcd96Omly9bee79cCwPwUE6n4jhLUiS3HcbRDBD1NtB9ljkv%2Bocm41gesyri3r6l3c8hojMxHfLIqBe2dxQtC0YeHAFJKXLb1ZCQZK1hWGxXjbmiDR6wFDMG3whEpP0ILu6wsrsk1Gb2%2FiJhw9NTEQAwAYbt3bj&X-Amz-Signature=fc000259474a25628bb63f1258aa5b6b8b6da968a950274c867ba2cbc7f81ccd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMF5PNJE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEUgMAYOLJ0GgOT52XGumNJMCRKNHFKr0AfNhuduQE8QAiEAnpTnlAsbCohXyv8BLfX6LAZp%2Bu2qsj92jJaPzcV6COkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsR%2BTXO7EyBIeYAyrcA5RWhIPxUJ5yC53t9gg6eNrIF1pBWe1sCLUyVSZY9iwBUqbwZAVz2kVPAAZjmSlcT74JTXBZQ4bttDQ4M6lq3%2FclK8mctODUGRqgXWucfHkAaUh7C7LOChxrUgOUX9T4WxOarNHjljykos7DmIKf%2BGqXO3HWqIAHBFOG0gZvbDos89CI4ro%2FijhOx8%2BUljM2Gnm5JT6LeUcRgzl8FspZSytPPb1QRxbgjgNHKgGqPiFO7ykR3oDrzjqjE9ovxQlp3ig6MXcdZ0xjyiLBSm%2BT5UYZXhGu1zcVVj49o0wseSBwq6LGBcMigZjIfn507fg0wKKVa7xZSRmjIGQRUDKYSFYbC%2Bi583bsc8w%2Bsg9fCWdpuyT7JlP9PaZQwgcyhPbE%2B9I9aMpgisU7bWpQUq87y7B3Kr%2Ba7M3cRkJ5KoOSDgzBIq6Vk2zvcr2gDesWYChNBm7gIK4Zfn3O8xiMBP50EgND3%2B6GngEUTGPHRNkiietWpcbkOnj2YU1UDt6dW9gkK%2FYyTEZFr5G8MLS%2FWcjyrHdT1FgWwWGsWdRh6SuZwaePKTZ2g77flGZEkj6HyJLG1dfBgwv4J2CKYCj%2FEEziweIYozIQ0FeMMG2EYDTOKzVLfbPVGqtzM9vD0m7aMKmmtr8GOqUBMsUezHR%2BIowXa1EaM0jN0yVGIFP7RwGge3uhYeMALeKsoObo9UaNK%2FsKIHmhWkcd96Omly9bee79cCwPwUE6n4jhLUiS3HcbRDBD1NtB9ljkv%2Bocm41gesyri3r6l3c8hojMxHfLIqBe2dxQtC0YeHAFJKXLb1ZCQZK1hWGxXjbmiDR6wFDMG3whEpP0ILu6wsrsk1Gb2%2FiJhw9NTEQAwAYbt3bj&X-Amz-Signature=75b81057dddc365c036282c86c8236b771158421e308b2441e69926bc86d3467&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMF5PNJE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEUgMAYOLJ0GgOT52XGumNJMCRKNHFKr0AfNhuduQE8QAiEAnpTnlAsbCohXyv8BLfX6LAZp%2Bu2qsj92jJaPzcV6COkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsR%2BTXO7EyBIeYAyrcA5RWhIPxUJ5yC53t9gg6eNrIF1pBWe1sCLUyVSZY9iwBUqbwZAVz2kVPAAZjmSlcT74JTXBZQ4bttDQ4M6lq3%2FclK8mctODUGRqgXWucfHkAaUh7C7LOChxrUgOUX9T4WxOarNHjljykos7DmIKf%2BGqXO3HWqIAHBFOG0gZvbDos89CI4ro%2FijhOx8%2BUljM2Gnm5JT6LeUcRgzl8FspZSytPPb1QRxbgjgNHKgGqPiFO7ykR3oDrzjqjE9ovxQlp3ig6MXcdZ0xjyiLBSm%2BT5UYZXhGu1zcVVj49o0wseSBwq6LGBcMigZjIfn507fg0wKKVa7xZSRmjIGQRUDKYSFYbC%2Bi583bsc8w%2Bsg9fCWdpuyT7JlP9PaZQwgcyhPbE%2B9I9aMpgisU7bWpQUq87y7B3Kr%2Ba7M3cRkJ5KoOSDgzBIq6Vk2zvcr2gDesWYChNBm7gIK4Zfn3O8xiMBP50EgND3%2B6GngEUTGPHRNkiietWpcbkOnj2YU1UDt6dW9gkK%2FYyTEZFr5G8MLS%2FWcjyrHdT1FgWwWGsWdRh6SuZwaePKTZ2g77flGZEkj6HyJLG1dfBgwv4J2CKYCj%2FEEziweIYozIQ0FeMMG2EYDTOKzVLfbPVGqtzM9vD0m7aMKmmtr8GOqUBMsUezHR%2BIowXa1EaM0jN0yVGIFP7RwGge3uhYeMALeKsoObo9UaNK%2FsKIHmhWkcd96Omly9bee79cCwPwUE6n4jhLUiS3HcbRDBD1NtB9ljkv%2Bocm41gesyri3r6l3c8hojMxHfLIqBe2dxQtC0YeHAFJKXLb1ZCQZK1hWGxXjbmiDR6wFDMG3whEpP0ILu6wsrsk1Gb2%2FiJhw9NTEQAwAYbt3bj&X-Amz-Signature=c1eca6b89d68614b9f737bcabd4ed11fc71382834aaf51ba498b9ba5ed2516ca&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMF5PNJE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEUgMAYOLJ0GgOT52XGumNJMCRKNHFKr0AfNhuduQE8QAiEAnpTnlAsbCohXyv8BLfX6LAZp%2Bu2qsj92jJaPzcV6COkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsR%2BTXO7EyBIeYAyrcA5RWhIPxUJ5yC53t9gg6eNrIF1pBWe1sCLUyVSZY9iwBUqbwZAVz2kVPAAZjmSlcT74JTXBZQ4bttDQ4M6lq3%2FclK8mctODUGRqgXWucfHkAaUh7C7LOChxrUgOUX9T4WxOarNHjljykos7DmIKf%2BGqXO3HWqIAHBFOG0gZvbDos89CI4ro%2FijhOx8%2BUljM2Gnm5JT6LeUcRgzl8FspZSytPPb1QRxbgjgNHKgGqPiFO7ykR3oDrzjqjE9ovxQlp3ig6MXcdZ0xjyiLBSm%2BT5UYZXhGu1zcVVj49o0wseSBwq6LGBcMigZjIfn507fg0wKKVa7xZSRmjIGQRUDKYSFYbC%2Bi583bsc8w%2Bsg9fCWdpuyT7JlP9PaZQwgcyhPbE%2B9I9aMpgisU7bWpQUq87y7B3Kr%2Ba7M3cRkJ5KoOSDgzBIq6Vk2zvcr2gDesWYChNBm7gIK4Zfn3O8xiMBP50EgND3%2B6GngEUTGPHRNkiietWpcbkOnj2YU1UDt6dW9gkK%2FYyTEZFr5G8MLS%2FWcjyrHdT1FgWwWGsWdRh6SuZwaePKTZ2g77flGZEkj6HyJLG1dfBgwv4J2CKYCj%2FEEziweIYozIQ0FeMMG2EYDTOKzVLfbPVGqtzM9vD0m7aMKmmtr8GOqUBMsUezHR%2BIowXa1EaM0jN0yVGIFP7RwGge3uhYeMALeKsoObo9UaNK%2FsKIHmhWkcd96Omly9bee79cCwPwUE6n4jhLUiS3HcbRDBD1NtB9ljkv%2Bocm41gesyri3r6l3c8hojMxHfLIqBe2dxQtC0YeHAFJKXLb1ZCQZK1hWGxXjbmiDR6wFDMG3whEpP0ILu6wsrsk1Gb2%2FiJhw9NTEQAwAYbt3bj&X-Amz-Signature=631e8bd4aa4df7e5ce2a0d72b436114ad5da98c9415b85faf9f05abaa006589d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMF5PNJE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEUgMAYOLJ0GgOT52XGumNJMCRKNHFKr0AfNhuduQE8QAiEAnpTnlAsbCohXyv8BLfX6LAZp%2Bu2qsj92jJaPzcV6COkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsR%2BTXO7EyBIeYAyrcA5RWhIPxUJ5yC53t9gg6eNrIF1pBWe1sCLUyVSZY9iwBUqbwZAVz2kVPAAZjmSlcT74JTXBZQ4bttDQ4M6lq3%2FclK8mctODUGRqgXWucfHkAaUh7C7LOChxrUgOUX9T4WxOarNHjljykos7DmIKf%2BGqXO3HWqIAHBFOG0gZvbDos89CI4ro%2FijhOx8%2BUljM2Gnm5JT6LeUcRgzl8FspZSytPPb1QRxbgjgNHKgGqPiFO7ykR3oDrzjqjE9ovxQlp3ig6MXcdZ0xjyiLBSm%2BT5UYZXhGu1zcVVj49o0wseSBwq6LGBcMigZjIfn507fg0wKKVa7xZSRmjIGQRUDKYSFYbC%2Bi583bsc8w%2Bsg9fCWdpuyT7JlP9PaZQwgcyhPbE%2B9I9aMpgisU7bWpQUq87y7B3Kr%2Ba7M3cRkJ5KoOSDgzBIq6Vk2zvcr2gDesWYChNBm7gIK4Zfn3O8xiMBP50EgND3%2B6GngEUTGPHRNkiietWpcbkOnj2YU1UDt6dW9gkK%2FYyTEZFr5G8MLS%2FWcjyrHdT1FgWwWGsWdRh6SuZwaePKTZ2g77flGZEkj6HyJLG1dfBgwv4J2CKYCj%2FEEziweIYozIQ0FeMMG2EYDTOKzVLfbPVGqtzM9vD0m7aMKmmtr8GOqUBMsUezHR%2BIowXa1EaM0jN0yVGIFP7RwGge3uhYeMALeKsoObo9UaNK%2FsKIHmhWkcd96Omly9bee79cCwPwUE6n4jhLUiS3HcbRDBD1NtB9ljkv%2Bocm41gesyri3r6l3c8hojMxHfLIqBe2dxQtC0YeHAFJKXLb1ZCQZK1hWGxXjbmiDR6wFDMG3whEpP0ILu6wsrsk1Gb2%2FiJhw9NTEQAwAYbt3bj&X-Amz-Signature=d620a167d14cd909a816b24a58bf19f901bf831d9a3debe43c16435bd912b689&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
