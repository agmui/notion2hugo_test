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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAHULUV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACNDSkgvxFVDF4h81mZHdSO%2B%2BIGtBXDMSGJ2EW763kUAiEA8KqdY7%2BvScuCrc1fFpHcGJHD2oCNn3u6UPNYa%2FHzq0MqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4Fm6SCLl%2FnN4KQACrcA6ln3Tjd6CRqJR2QpxoEBAiHK3SM68o8rBkRzjub3I6GmVvlaIxH3jQ%2FAZyooFfd8IX4rp6a6Uk%2FKQlFoUHZnAcabPjJOpajN4J8mgu0QD0hjw6iT6t15Ne%2B7nWYrp7uMRBDvC2hpkVRLW3Sxg%2BepOsA71cV9%2FFjmyZXSYSvOUlRngRjy5bh7fngrUb8doGCX5xGU20Zkd94yaT81P83g8kdbBVL%2F4V%2BQUFbv3xKNjGnMnpY3co4vmVlxNA9DCKWR22xtswUhuuE2Smq3on%2Bs1kFb4RW%2B%2BjwMbL181n5IBvXgm68zjJP5d85QXle0CKS5OdK5YXM3NmG8Oh879R76WM6cgZSG6PAsdiv8rJsL62lyOB3l%2BilaE3rXZa7h5HyG%2FWAV3rx5MdZq6CoLv8Q723UJABkUGcqPXo%2B8iOFDv39PM92HYYvYfOcsK3cFmfRM%2FHus2SBdy1rm82uOZFS2OMX%2BIXVx7usiHMxk8NAJVmya294R0Z%2Bvxv0Qvr%2B7eeMKNU%2BiZZ89KTUZZNGq2bxk0%2FazmeT08sM%2BLtcaCc%2F%2FgThGoOY%2BBW3xv0NGO1ILAc9eRoaKE14BbQ4SoHXpVys80t%2Bq03c2lI0p83XlP3mU1lQ1NU97wzexknfVc%2FmMIzNqb0GOqUBozlSgCYQ7cygZsUFXEmTlLsQQFAaQ%2B6UGz8tIjiFl%2BY0xxtq0ceF38R8yideds5Ny3OJL20Us5nAe2ccXqcx9Nmhb9wP%2BRkYo7ZQiQpCRRrtCHNdxABvAD4n%2BF2m1r0FQISpA05tWydFwYI0Ht6059tQPBsbMsP%2BYJ27vsspMDefKlymqu0K72Y0%2BRqEshQ2X4cZFEt%2BvpwEu1RP%2B06iGc9psvGZ&X-Amz-Signature=7d42c43f05afb8462012a93289367102efbcc203076de2fd4b97bd5e48341746&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAHULUV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACNDSkgvxFVDF4h81mZHdSO%2B%2BIGtBXDMSGJ2EW763kUAiEA8KqdY7%2BvScuCrc1fFpHcGJHD2oCNn3u6UPNYa%2FHzq0MqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4Fm6SCLl%2FnN4KQACrcA6ln3Tjd6CRqJR2QpxoEBAiHK3SM68o8rBkRzjub3I6GmVvlaIxH3jQ%2FAZyooFfd8IX4rp6a6Uk%2FKQlFoUHZnAcabPjJOpajN4J8mgu0QD0hjw6iT6t15Ne%2B7nWYrp7uMRBDvC2hpkVRLW3Sxg%2BepOsA71cV9%2FFjmyZXSYSvOUlRngRjy5bh7fngrUb8doGCX5xGU20Zkd94yaT81P83g8kdbBVL%2F4V%2BQUFbv3xKNjGnMnpY3co4vmVlxNA9DCKWR22xtswUhuuE2Smq3on%2Bs1kFb4RW%2B%2BjwMbL181n5IBvXgm68zjJP5d85QXle0CKS5OdK5YXM3NmG8Oh879R76WM6cgZSG6PAsdiv8rJsL62lyOB3l%2BilaE3rXZa7h5HyG%2FWAV3rx5MdZq6CoLv8Q723UJABkUGcqPXo%2B8iOFDv39PM92HYYvYfOcsK3cFmfRM%2FHus2SBdy1rm82uOZFS2OMX%2BIXVx7usiHMxk8NAJVmya294R0Z%2Bvxv0Qvr%2B7eeMKNU%2BiZZ89KTUZZNGq2bxk0%2FazmeT08sM%2BLtcaCc%2F%2FgThGoOY%2BBW3xv0NGO1ILAc9eRoaKE14BbQ4SoHXpVys80t%2Bq03c2lI0p83XlP3mU1lQ1NU97wzexknfVc%2FmMIzNqb0GOqUBozlSgCYQ7cygZsUFXEmTlLsQQFAaQ%2B6UGz8tIjiFl%2BY0xxtq0ceF38R8yideds5Ny3OJL20Us5nAe2ccXqcx9Nmhb9wP%2BRkYo7ZQiQpCRRrtCHNdxABvAD4n%2BF2m1r0FQISpA05tWydFwYI0Ht6059tQPBsbMsP%2BYJ27vsspMDefKlymqu0K72Y0%2BRqEshQ2X4cZFEt%2BvpwEu1RP%2B06iGc9psvGZ&X-Amz-Signature=fc1bd3e7ea51e21f010d0b2f7173646d1c14bc9ce854df44e6c3764fd9148dca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAHULUV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACNDSkgvxFVDF4h81mZHdSO%2B%2BIGtBXDMSGJ2EW763kUAiEA8KqdY7%2BvScuCrc1fFpHcGJHD2oCNn3u6UPNYa%2FHzq0MqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4Fm6SCLl%2FnN4KQACrcA6ln3Tjd6CRqJR2QpxoEBAiHK3SM68o8rBkRzjub3I6GmVvlaIxH3jQ%2FAZyooFfd8IX4rp6a6Uk%2FKQlFoUHZnAcabPjJOpajN4J8mgu0QD0hjw6iT6t15Ne%2B7nWYrp7uMRBDvC2hpkVRLW3Sxg%2BepOsA71cV9%2FFjmyZXSYSvOUlRngRjy5bh7fngrUb8doGCX5xGU20Zkd94yaT81P83g8kdbBVL%2F4V%2BQUFbv3xKNjGnMnpY3co4vmVlxNA9DCKWR22xtswUhuuE2Smq3on%2Bs1kFb4RW%2B%2BjwMbL181n5IBvXgm68zjJP5d85QXle0CKS5OdK5YXM3NmG8Oh879R76WM6cgZSG6PAsdiv8rJsL62lyOB3l%2BilaE3rXZa7h5HyG%2FWAV3rx5MdZq6CoLv8Q723UJABkUGcqPXo%2B8iOFDv39PM92HYYvYfOcsK3cFmfRM%2FHus2SBdy1rm82uOZFS2OMX%2BIXVx7usiHMxk8NAJVmya294R0Z%2Bvxv0Qvr%2B7eeMKNU%2BiZZ89KTUZZNGq2bxk0%2FazmeT08sM%2BLtcaCc%2F%2FgThGoOY%2BBW3xv0NGO1ILAc9eRoaKE14BbQ4SoHXpVys80t%2Bq03c2lI0p83XlP3mU1lQ1NU97wzexknfVc%2FmMIzNqb0GOqUBozlSgCYQ7cygZsUFXEmTlLsQQFAaQ%2B6UGz8tIjiFl%2BY0xxtq0ceF38R8yideds5Ny3OJL20Us5nAe2ccXqcx9Nmhb9wP%2BRkYo7ZQiQpCRRrtCHNdxABvAD4n%2BF2m1r0FQISpA05tWydFwYI0Ht6059tQPBsbMsP%2BYJ27vsspMDefKlymqu0K72Y0%2BRqEshQ2X4cZFEt%2BvpwEu1RP%2B06iGc9psvGZ&X-Amz-Signature=5c720119d4799d64057ef868a7063e485aad67e5016fcfcf239025df0b1020e4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAHULUV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACNDSkgvxFVDF4h81mZHdSO%2B%2BIGtBXDMSGJ2EW763kUAiEA8KqdY7%2BvScuCrc1fFpHcGJHD2oCNn3u6UPNYa%2FHzq0MqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4Fm6SCLl%2FnN4KQACrcA6ln3Tjd6CRqJR2QpxoEBAiHK3SM68o8rBkRzjub3I6GmVvlaIxH3jQ%2FAZyooFfd8IX4rp6a6Uk%2FKQlFoUHZnAcabPjJOpajN4J8mgu0QD0hjw6iT6t15Ne%2B7nWYrp7uMRBDvC2hpkVRLW3Sxg%2BepOsA71cV9%2FFjmyZXSYSvOUlRngRjy5bh7fngrUb8doGCX5xGU20Zkd94yaT81P83g8kdbBVL%2F4V%2BQUFbv3xKNjGnMnpY3co4vmVlxNA9DCKWR22xtswUhuuE2Smq3on%2Bs1kFb4RW%2B%2BjwMbL181n5IBvXgm68zjJP5d85QXle0CKS5OdK5YXM3NmG8Oh879R76WM6cgZSG6PAsdiv8rJsL62lyOB3l%2BilaE3rXZa7h5HyG%2FWAV3rx5MdZq6CoLv8Q723UJABkUGcqPXo%2B8iOFDv39PM92HYYvYfOcsK3cFmfRM%2FHus2SBdy1rm82uOZFS2OMX%2BIXVx7usiHMxk8NAJVmya294R0Z%2Bvxv0Qvr%2B7eeMKNU%2BiZZ89KTUZZNGq2bxk0%2FazmeT08sM%2BLtcaCc%2F%2FgThGoOY%2BBW3xv0NGO1ILAc9eRoaKE14BbQ4SoHXpVys80t%2Bq03c2lI0p83XlP3mU1lQ1NU97wzexknfVc%2FmMIzNqb0GOqUBozlSgCYQ7cygZsUFXEmTlLsQQFAaQ%2B6UGz8tIjiFl%2BY0xxtq0ceF38R8yideds5Ny3OJL20Us5nAe2ccXqcx9Nmhb9wP%2BRkYo7ZQiQpCRRrtCHNdxABvAD4n%2BF2m1r0FQISpA05tWydFwYI0Ht6059tQPBsbMsP%2BYJ27vsspMDefKlymqu0K72Y0%2BRqEshQ2X4cZFEt%2BvpwEu1RP%2B06iGc9psvGZ&X-Amz-Signature=7b55948aca3923455fc7691d7f5db0e3007f5ea9fc0d9b296756e1cca34f989c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAHULUV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACNDSkgvxFVDF4h81mZHdSO%2B%2BIGtBXDMSGJ2EW763kUAiEA8KqdY7%2BvScuCrc1fFpHcGJHD2oCNn3u6UPNYa%2FHzq0MqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4Fm6SCLl%2FnN4KQACrcA6ln3Tjd6CRqJR2QpxoEBAiHK3SM68o8rBkRzjub3I6GmVvlaIxH3jQ%2FAZyooFfd8IX4rp6a6Uk%2FKQlFoUHZnAcabPjJOpajN4J8mgu0QD0hjw6iT6t15Ne%2B7nWYrp7uMRBDvC2hpkVRLW3Sxg%2BepOsA71cV9%2FFjmyZXSYSvOUlRngRjy5bh7fngrUb8doGCX5xGU20Zkd94yaT81P83g8kdbBVL%2F4V%2BQUFbv3xKNjGnMnpY3co4vmVlxNA9DCKWR22xtswUhuuE2Smq3on%2Bs1kFb4RW%2B%2BjwMbL181n5IBvXgm68zjJP5d85QXle0CKS5OdK5YXM3NmG8Oh879R76WM6cgZSG6PAsdiv8rJsL62lyOB3l%2BilaE3rXZa7h5HyG%2FWAV3rx5MdZq6CoLv8Q723UJABkUGcqPXo%2B8iOFDv39PM92HYYvYfOcsK3cFmfRM%2FHus2SBdy1rm82uOZFS2OMX%2BIXVx7usiHMxk8NAJVmya294R0Z%2Bvxv0Qvr%2B7eeMKNU%2BiZZ89KTUZZNGq2bxk0%2FazmeT08sM%2BLtcaCc%2F%2FgThGoOY%2BBW3xv0NGO1ILAc9eRoaKE14BbQ4SoHXpVys80t%2Bq03c2lI0p83XlP3mU1lQ1NU97wzexknfVc%2FmMIzNqb0GOqUBozlSgCYQ7cygZsUFXEmTlLsQQFAaQ%2B6UGz8tIjiFl%2BY0xxtq0ceF38R8yideds5Ny3OJL20Us5nAe2ccXqcx9Nmhb9wP%2BRkYo7ZQiQpCRRrtCHNdxABvAD4n%2BF2m1r0FQISpA05tWydFwYI0Ht6059tQPBsbMsP%2BYJ27vsspMDefKlymqu0K72Y0%2BRqEshQ2X4cZFEt%2BvpwEu1RP%2B06iGc9psvGZ&X-Amz-Signature=73310aaa6dcfd775fdf3037aba31bd2077893b3d43aed3f77549e14e3c4897bd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAHULUV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACNDSkgvxFVDF4h81mZHdSO%2B%2BIGtBXDMSGJ2EW763kUAiEA8KqdY7%2BvScuCrc1fFpHcGJHD2oCNn3u6UPNYa%2FHzq0MqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4Fm6SCLl%2FnN4KQACrcA6ln3Tjd6CRqJR2QpxoEBAiHK3SM68o8rBkRzjub3I6GmVvlaIxH3jQ%2FAZyooFfd8IX4rp6a6Uk%2FKQlFoUHZnAcabPjJOpajN4J8mgu0QD0hjw6iT6t15Ne%2B7nWYrp7uMRBDvC2hpkVRLW3Sxg%2BepOsA71cV9%2FFjmyZXSYSvOUlRngRjy5bh7fngrUb8doGCX5xGU20Zkd94yaT81P83g8kdbBVL%2F4V%2BQUFbv3xKNjGnMnpY3co4vmVlxNA9DCKWR22xtswUhuuE2Smq3on%2Bs1kFb4RW%2B%2BjwMbL181n5IBvXgm68zjJP5d85QXle0CKS5OdK5YXM3NmG8Oh879R76WM6cgZSG6PAsdiv8rJsL62lyOB3l%2BilaE3rXZa7h5HyG%2FWAV3rx5MdZq6CoLv8Q723UJABkUGcqPXo%2B8iOFDv39PM92HYYvYfOcsK3cFmfRM%2FHus2SBdy1rm82uOZFS2OMX%2BIXVx7usiHMxk8NAJVmya294R0Z%2Bvxv0Qvr%2B7eeMKNU%2BiZZ89KTUZZNGq2bxk0%2FazmeT08sM%2BLtcaCc%2F%2FgThGoOY%2BBW3xv0NGO1ILAc9eRoaKE14BbQ4SoHXpVys80t%2Bq03c2lI0p83XlP3mU1lQ1NU97wzexknfVc%2FmMIzNqb0GOqUBozlSgCYQ7cygZsUFXEmTlLsQQFAaQ%2B6UGz8tIjiFl%2BY0xxtq0ceF38R8yideds5Ny3OJL20Us5nAe2ccXqcx9Nmhb9wP%2BRkYo7ZQiQpCRRrtCHNdxABvAD4n%2BF2m1r0FQISpA05tWydFwYI0Ht6059tQPBsbMsP%2BYJ27vsspMDefKlymqu0K72Y0%2BRqEshQ2X4cZFEt%2BvpwEu1RP%2B06iGc9psvGZ&X-Amz-Signature=153a9a551d9d63e4811b4ba4bf40dd71dfa27f5eba86d40c1a1842f5e1921ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAHULUV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACNDSkgvxFVDF4h81mZHdSO%2B%2BIGtBXDMSGJ2EW763kUAiEA8KqdY7%2BvScuCrc1fFpHcGJHD2oCNn3u6UPNYa%2FHzq0MqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4Fm6SCLl%2FnN4KQACrcA6ln3Tjd6CRqJR2QpxoEBAiHK3SM68o8rBkRzjub3I6GmVvlaIxH3jQ%2FAZyooFfd8IX4rp6a6Uk%2FKQlFoUHZnAcabPjJOpajN4J8mgu0QD0hjw6iT6t15Ne%2B7nWYrp7uMRBDvC2hpkVRLW3Sxg%2BepOsA71cV9%2FFjmyZXSYSvOUlRngRjy5bh7fngrUb8doGCX5xGU20Zkd94yaT81P83g8kdbBVL%2F4V%2BQUFbv3xKNjGnMnpY3co4vmVlxNA9DCKWR22xtswUhuuE2Smq3on%2Bs1kFb4RW%2B%2BjwMbL181n5IBvXgm68zjJP5d85QXle0CKS5OdK5YXM3NmG8Oh879R76WM6cgZSG6PAsdiv8rJsL62lyOB3l%2BilaE3rXZa7h5HyG%2FWAV3rx5MdZq6CoLv8Q723UJABkUGcqPXo%2B8iOFDv39PM92HYYvYfOcsK3cFmfRM%2FHus2SBdy1rm82uOZFS2OMX%2BIXVx7usiHMxk8NAJVmya294R0Z%2Bvxv0Qvr%2B7eeMKNU%2BiZZ89KTUZZNGq2bxk0%2FazmeT08sM%2BLtcaCc%2F%2FgThGoOY%2BBW3xv0NGO1ILAc9eRoaKE14BbQ4SoHXpVys80t%2Bq03c2lI0p83XlP3mU1lQ1NU97wzexknfVc%2FmMIzNqb0GOqUBozlSgCYQ7cygZsUFXEmTlLsQQFAaQ%2B6UGz8tIjiFl%2BY0xxtq0ceF38R8yideds5Ny3OJL20Us5nAe2ccXqcx9Nmhb9wP%2BRkYo7ZQiQpCRRrtCHNdxABvAD4n%2BF2m1r0FQISpA05tWydFwYI0Ht6059tQPBsbMsP%2BYJ27vsspMDefKlymqu0K72Y0%2BRqEshQ2X4cZFEt%2BvpwEu1RP%2B06iGc9psvGZ&X-Amz-Signature=a528f4666efa847c8a531f85b2934c3fdc13a36a09ab35e4d2d774495282d5eb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
