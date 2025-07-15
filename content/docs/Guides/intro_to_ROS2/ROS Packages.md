---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHMAFNC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDf0oGfCwKJs2sVCf%2FUYh46qbbr%2BcdiATkpe%2BwwPCu8tgIgI3D2gVSV1uA7mAjDX0%2BCuVlEZuOC2s9wFNfQ06JCWWUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKj4lgvjefk%2FMv7sEircA9WoaPLr44F29cz2gvJ9ZXuW1yV7eUZuTxJzyxuZqFVpJhpzr63ccsI8PSnTjD3Tw5Q5Uu0V35PHvW410M%2FM%2FoNiQkiiXuhJnpqBe%2FX6VkqmnWjRM3K3UrHVkWpO8JvqSB%2BpzneZ%2B0akZyw%2B0QcGUzICajEH8a%2FIQ5PVU2X%2BdD%2BtacvKvU5r6LSp%2BCXlYXO40q3lSVxmb21lN%2FtQ%2Bb%2B1TlIIXhgPUfdQf0sg3Y7VES%2FiwdnG6BUav421aWlB01cv2oGC9AZmtB5G7fNqVgt%2B6yp4oGY0K%2FZko56n7e3gt8mDZ4f5%2Bkb08lsYMhjQZ9hqBt%2B%2BEKtwmQKTDLVdY4w4cyDzE%2BGF5pkG3PEBP9MoWxqlGF3zT1qxvTcif8zwWuG1oBX%2FH6ImQNWT3AbLHZ0c1ickg0zUPeU8osKaUPsMS5AQm%2Bu%2FCQgO1OTm6nKCeVOuSyeNvHv%2FWGJZk%2F538VfQ7k0FCI95R5CJwCi0UBmB2o5IQju3XCX%2B3KRUDgLwyKSk%2BBkDmlJaOnqzlR7wanyUdJW6gBxUuEoUKP7euDAfyBB4z2qzRTMqYGSVExA6zo2bo3hdOeHQiI7gzxQh%2B5WQ%2Bf9gvRrGcAaDPlbn4%2BhvRFfI%2BnqoAbZ865bWoFJEMKSG2sMGOqUBXV3RzWi1zeS9%2BsY9xxlaKhkxTmF9aG3FaQSHwdl2eOhhnXGtAYsPIwpHnJ9dy5bNqvum1YRWStns8JxTFLV5t6MoXKg%2FpZvZ4cwpYDWSFibFoZpBcM8HL9%2Bq0Bfo8TkoYMTkN9N94iMThpesyMz7zcZDyb%2F8C5bwVY6u54xjBr7xhBWKJZiiSMPh8sH7amTwHT510eYHCgzPmrnnTduqLygiUKSK&X-Amz-Signature=5241d5e999b3b39f0182216c0144d21851bffb037be376ddc9c8e547016ab3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHMAFNC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDf0oGfCwKJs2sVCf%2FUYh46qbbr%2BcdiATkpe%2BwwPCu8tgIgI3D2gVSV1uA7mAjDX0%2BCuVlEZuOC2s9wFNfQ06JCWWUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKj4lgvjefk%2FMv7sEircA9WoaPLr44F29cz2gvJ9ZXuW1yV7eUZuTxJzyxuZqFVpJhpzr63ccsI8PSnTjD3Tw5Q5Uu0V35PHvW410M%2FM%2FoNiQkiiXuhJnpqBe%2FX6VkqmnWjRM3K3UrHVkWpO8JvqSB%2BpzneZ%2B0akZyw%2B0QcGUzICajEH8a%2FIQ5PVU2X%2BdD%2BtacvKvU5r6LSp%2BCXlYXO40q3lSVxmb21lN%2FtQ%2Bb%2B1TlIIXhgPUfdQf0sg3Y7VES%2FiwdnG6BUav421aWlB01cv2oGC9AZmtB5G7fNqVgt%2B6yp4oGY0K%2FZko56n7e3gt8mDZ4f5%2Bkb08lsYMhjQZ9hqBt%2B%2BEKtwmQKTDLVdY4w4cyDzE%2BGF5pkG3PEBP9MoWxqlGF3zT1qxvTcif8zwWuG1oBX%2FH6ImQNWT3AbLHZ0c1ickg0zUPeU8osKaUPsMS5AQm%2Bu%2FCQgO1OTm6nKCeVOuSyeNvHv%2FWGJZk%2F538VfQ7k0FCI95R5CJwCi0UBmB2o5IQju3XCX%2B3KRUDgLwyKSk%2BBkDmlJaOnqzlR7wanyUdJW6gBxUuEoUKP7euDAfyBB4z2qzRTMqYGSVExA6zo2bo3hdOeHQiI7gzxQh%2B5WQ%2Bf9gvRrGcAaDPlbn4%2BhvRFfI%2BnqoAbZ865bWoFJEMKSG2sMGOqUBXV3RzWi1zeS9%2BsY9xxlaKhkxTmF9aG3FaQSHwdl2eOhhnXGtAYsPIwpHnJ9dy5bNqvum1YRWStns8JxTFLV5t6MoXKg%2FpZvZ4cwpYDWSFibFoZpBcM8HL9%2Bq0Bfo8TkoYMTkN9N94iMThpesyMz7zcZDyb%2F8C5bwVY6u54xjBr7xhBWKJZiiSMPh8sH7amTwHT510eYHCgzPmrnnTduqLygiUKSK&X-Amz-Signature=1a4eca4cb2f87097a24c557a59b4266aaf211effc375c655119d69efa026674d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHMAFNC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDf0oGfCwKJs2sVCf%2FUYh46qbbr%2BcdiATkpe%2BwwPCu8tgIgI3D2gVSV1uA7mAjDX0%2BCuVlEZuOC2s9wFNfQ06JCWWUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKj4lgvjefk%2FMv7sEircA9WoaPLr44F29cz2gvJ9ZXuW1yV7eUZuTxJzyxuZqFVpJhpzr63ccsI8PSnTjD3Tw5Q5Uu0V35PHvW410M%2FM%2FoNiQkiiXuhJnpqBe%2FX6VkqmnWjRM3K3UrHVkWpO8JvqSB%2BpzneZ%2B0akZyw%2B0QcGUzICajEH8a%2FIQ5PVU2X%2BdD%2BtacvKvU5r6LSp%2BCXlYXO40q3lSVxmb21lN%2FtQ%2Bb%2B1TlIIXhgPUfdQf0sg3Y7VES%2FiwdnG6BUav421aWlB01cv2oGC9AZmtB5G7fNqVgt%2B6yp4oGY0K%2FZko56n7e3gt8mDZ4f5%2Bkb08lsYMhjQZ9hqBt%2B%2BEKtwmQKTDLVdY4w4cyDzE%2BGF5pkG3PEBP9MoWxqlGF3zT1qxvTcif8zwWuG1oBX%2FH6ImQNWT3AbLHZ0c1ickg0zUPeU8osKaUPsMS5AQm%2Bu%2FCQgO1OTm6nKCeVOuSyeNvHv%2FWGJZk%2F538VfQ7k0FCI95R5CJwCi0UBmB2o5IQju3XCX%2B3KRUDgLwyKSk%2BBkDmlJaOnqzlR7wanyUdJW6gBxUuEoUKP7euDAfyBB4z2qzRTMqYGSVExA6zo2bo3hdOeHQiI7gzxQh%2B5WQ%2Bf9gvRrGcAaDPlbn4%2BhvRFfI%2BnqoAbZ865bWoFJEMKSG2sMGOqUBXV3RzWi1zeS9%2BsY9xxlaKhkxTmF9aG3FaQSHwdl2eOhhnXGtAYsPIwpHnJ9dy5bNqvum1YRWStns8JxTFLV5t6MoXKg%2FpZvZ4cwpYDWSFibFoZpBcM8HL9%2Bq0Bfo8TkoYMTkN9N94iMThpesyMz7zcZDyb%2F8C5bwVY6u54xjBr7xhBWKJZiiSMPh8sH7amTwHT510eYHCgzPmrnnTduqLygiUKSK&X-Amz-Signature=520dbf8d6b313d770165a8277a2c2f266b5de955af52ef4360ba44536afd108b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHMAFNC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDf0oGfCwKJs2sVCf%2FUYh46qbbr%2BcdiATkpe%2BwwPCu8tgIgI3D2gVSV1uA7mAjDX0%2BCuVlEZuOC2s9wFNfQ06JCWWUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKj4lgvjefk%2FMv7sEircA9WoaPLr44F29cz2gvJ9ZXuW1yV7eUZuTxJzyxuZqFVpJhpzr63ccsI8PSnTjD3Tw5Q5Uu0V35PHvW410M%2FM%2FoNiQkiiXuhJnpqBe%2FX6VkqmnWjRM3K3UrHVkWpO8JvqSB%2BpzneZ%2B0akZyw%2B0QcGUzICajEH8a%2FIQ5PVU2X%2BdD%2BtacvKvU5r6LSp%2BCXlYXO40q3lSVxmb21lN%2FtQ%2Bb%2B1TlIIXhgPUfdQf0sg3Y7VES%2FiwdnG6BUav421aWlB01cv2oGC9AZmtB5G7fNqVgt%2B6yp4oGY0K%2FZko56n7e3gt8mDZ4f5%2Bkb08lsYMhjQZ9hqBt%2B%2BEKtwmQKTDLVdY4w4cyDzE%2BGF5pkG3PEBP9MoWxqlGF3zT1qxvTcif8zwWuG1oBX%2FH6ImQNWT3AbLHZ0c1ickg0zUPeU8osKaUPsMS5AQm%2Bu%2FCQgO1OTm6nKCeVOuSyeNvHv%2FWGJZk%2F538VfQ7k0FCI95R5CJwCi0UBmB2o5IQju3XCX%2B3KRUDgLwyKSk%2BBkDmlJaOnqzlR7wanyUdJW6gBxUuEoUKP7euDAfyBB4z2qzRTMqYGSVExA6zo2bo3hdOeHQiI7gzxQh%2B5WQ%2Bf9gvRrGcAaDPlbn4%2BhvRFfI%2BnqoAbZ865bWoFJEMKSG2sMGOqUBXV3RzWi1zeS9%2BsY9xxlaKhkxTmF9aG3FaQSHwdl2eOhhnXGtAYsPIwpHnJ9dy5bNqvum1YRWStns8JxTFLV5t6MoXKg%2FpZvZ4cwpYDWSFibFoZpBcM8HL9%2Bq0Bfo8TkoYMTkN9N94iMThpesyMz7zcZDyb%2F8C5bwVY6u54xjBr7xhBWKJZiiSMPh8sH7amTwHT510eYHCgzPmrnnTduqLygiUKSK&X-Amz-Signature=9108acf80637f9766b1e67f91e8bcfa05d8eb2d00f3991db9e16bff77a2fda70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHMAFNC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDf0oGfCwKJs2sVCf%2FUYh46qbbr%2BcdiATkpe%2BwwPCu8tgIgI3D2gVSV1uA7mAjDX0%2BCuVlEZuOC2s9wFNfQ06JCWWUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKj4lgvjefk%2FMv7sEircA9WoaPLr44F29cz2gvJ9ZXuW1yV7eUZuTxJzyxuZqFVpJhpzr63ccsI8PSnTjD3Tw5Q5Uu0V35PHvW410M%2FM%2FoNiQkiiXuhJnpqBe%2FX6VkqmnWjRM3K3UrHVkWpO8JvqSB%2BpzneZ%2B0akZyw%2B0QcGUzICajEH8a%2FIQ5PVU2X%2BdD%2BtacvKvU5r6LSp%2BCXlYXO40q3lSVxmb21lN%2FtQ%2Bb%2B1TlIIXhgPUfdQf0sg3Y7VES%2FiwdnG6BUav421aWlB01cv2oGC9AZmtB5G7fNqVgt%2B6yp4oGY0K%2FZko56n7e3gt8mDZ4f5%2Bkb08lsYMhjQZ9hqBt%2B%2BEKtwmQKTDLVdY4w4cyDzE%2BGF5pkG3PEBP9MoWxqlGF3zT1qxvTcif8zwWuG1oBX%2FH6ImQNWT3AbLHZ0c1ickg0zUPeU8osKaUPsMS5AQm%2Bu%2FCQgO1OTm6nKCeVOuSyeNvHv%2FWGJZk%2F538VfQ7k0FCI95R5CJwCi0UBmB2o5IQju3XCX%2B3KRUDgLwyKSk%2BBkDmlJaOnqzlR7wanyUdJW6gBxUuEoUKP7euDAfyBB4z2qzRTMqYGSVExA6zo2bo3hdOeHQiI7gzxQh%2B5WQ%2Bf9gvRrGcAaDPlbn4%2BhvRFfI%2BnqoAbZ865bWoFJEMKSG2sMGOqUBXV3RzWi1zeS9%2BsY9xxlaKhkxTmF9aG3FaQSHwdl2eOhhnXGtAYsPIwpHnJ9dy5bNqvum1YRWStns8JxTFLV5t6MoXKg%2FpZvZ4cwpYDWSFibFoZpBcM8HL9%2Bq0Bfo8TkoYMTkN9N94iMThpesyMz7zcZDyb%2F8C5bwVY6u54xjBr7xhBWKJZiiSMPh8sH7amTwHT510eYHCgzPmrnnTduqLygiUKSK&X-Amz-Signature=76103cdfd8baedc093a70c7f57807815d964721be7b62550ba793d724fd1f640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHMAFNC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDf0oGfCwKJs2sVCf%2FUYh46qbbr%2BcdiATkpe%2BwwPCu8tgIgI3D2gVSV1uA7mAjDX0%2BCuVlEZuOC2s9wFNfQ06JCWWUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKj4lgvjefk%2FMv7sEircA9WoaPLr44F29cz2gvJ9ZXuW1yV7eUZuTxJzyxuZqFVpJhpzr63ccsI8PSnTjD3Tw5Q5Uu0V35PHvW410M%2FM%2FoNiQkiiXuhJnpqBe%2FX6VkqmnWjRM3K3UrHVkWpO8JvqSB%2BpzneZ%2B0akZyw%2B0QcGUzICajEH8a%2FIQ5PVU2X%2BdD%2BtacvKvU5r6LSp%2BCXlYXO40q3lSVxmb21lN%2FtQ%2Bb%2B1TlIIXhgPUfdQf0sg3Y7VES%2FiwdnG6BUav421aWlB01cv2oGC9AZmtB5G7fNqVgt%2B6yp4oGY0K%2FZko56n7e3gt8mDZ4f5%2Bkb08lsYMhjQZ9hqBt%2B%2BEKtwmQKTDLVdY4w4cyDzE%2BGF5pkG3PEBP9MoWxqlGF3zT1qxvTcif8zwWuG1oBX%2FH6ImQNWT3AbLHZ0c1ickg0zUPeU8osKaUPsMS5AQm%2Bu%2FCQgO1OTm6nKCeVOuSyeNvHv%2FWGJZk%2F538VfQ7k0FCI95R5CJwCi0UBmB2o5IQju3XCX%2B3KRUDgLwyKSk%2BBkDmlJaOnqzlR7wanyUdJW6gBxUuEoUKP7euDAfyBB4z2qzRTMqYGSVExA6zo2bo3hdOeHQiI7gzxQh%2B5WQ%2Bf9gvRrGcAaDPlbn4%2BhvRFfI%2BnqoAbZ865bWoFJEMKSG2sMGOqUBXV3RzWi1zeS9%2BsY9xxlaKhkxTmF9aG3FaQSHwdl2eOhhnXGtAYsPIwpHnJ9dy5bNqvum1YRWStns8JxTFLV5t6MoXKg%2FpZvZ4cwpYDWSFibFoZpBcM8HL9%2Bq0Bfo8TkoYMTkN9N94iMThpesyMz7zcZDyb%2F8C5bwVY6u54xjBr7xhBWKJZiiSMPh8sH7amTwHT510eYHCgzPmrnnTduqLygiUKSK&X-Amz-Signature=fd39ef19b1f479e56b3871d0603acfad78bc8132463923cad5fc170183def17e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHMAFNC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDf0oGfCwKJs2sVCf%2FUYh46qbbr%2BcdiATkpe%2BwwPCu8tgIgI3D2gVSV1uA7mAjDX0%2BCuVlEZuOC2s9wFNfQ06JCWWUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKj4lgvjefk%2FMv7sEircA9WoaPLr44F29cz2gvJ9ZXuW1yV7eUZuTxJzyxuZqFVpJhpzr63ccsI8PSnTjD3Tw5Q5Uu0V35PHvW410M%2FM%2FoNiQkiiXuhJnpqBe%2FX6VkqmnWjRM3K3UrHVkWpO8JvqSB%2BpzneZ%2B0akZyw%2B0QcGUzICajEH8a%2FIQ5PVU2X%2BdD%2BtacvKvU5r6LSp%2BCXlYXO40q3lSVxmb21lN%2FtQ%2Bb%2B1TlIIXhgPUfdQf0sg3Y7VES%2FiwdnG6BUav421aWlB01cv2oGC9AZmtB5G7fNqVgt%2B6yp4oGY0K%2FZko56n7e3gt8mDZ4f5%2Bkb08lsYMhjQZ9hqBt%2B%2BEKtwmQKTDLVdY4w4cyDzE%2BGF5pkG3PEBP9MoWxqlGF3zT1qxvTcif8zwWuG1oBX%2FH6ImQNWT3AbLHZ0c1ickg0zUPeU8osKaUPsMS5AQm%2Bu%2FCQgO1OTm6nKCeVOuSyeNvHv%2FWGJZk%2F538VfQ7k0FCI95R5CJwCi0UBmB2o5IQju3XCX%2B3KRUDgLwyKSk%2BBkDmlJaOnqzlR7wanyUdJW6gBxUuEoUKP7euDAfyBB4z2qzRTMqYGSVExA6zo2bo3hdOeHQiI7gzxQh%2B5WQ%2Bf9gvRrGcAaDPlbn4%2BhvRFfI%2BnqoAbZ865bWoFJEMKSG2sMGOqUBXV3RzWi1zeS9%2BsY9xxlaKhkxTmF9aG3FaQSHwdl2eOhhnXGtAYsPIwpHnJ9dy5bNqvum1YRWStns8JxTFLV5t6MoXKg%2FpZvZ4cwpYDWSFibFoZpBcM8HL9%2Bq0Bfo8TkoYMTkN9N94iMThpesyMz7zcZDyb%2F8C5bwVY6u54xjBr7xhBWKJZiiSMPh8sH7amTwHT510eYHCgzPmrnnTduqLygiUKSK&X-Amz-Signature=8c870f0f4c390122e3b26db7ba9a2096f5a96159bd467cf6f3f1f6b4571d21cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
