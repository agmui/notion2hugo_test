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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6PPQIY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQz%2B6Jy4%2BGORTDe6eBIHgGmvjB8clMhH4FYqwddbSHKgIgPRB5WJXbduJqSDTWhz9Wou8QOpguo22xt0pBWp6B0uwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNYOSObEds6pXPrqgSrcA%2Bd%2F7Y%2BrjAh03SF1T9fSXsVN4E8sLD9H6OE5msru4Ujt%2B5rAV7p75hd6qM09fF2dKQUmmDi4R3U8vaM6C49USR2%2BIa%2BEkYVrQ2du3n8Cu3HIShscmpJ%2Fz4Cp4rQBM55ZBN8eTO9aWUPQ0vX1PK1a15FboFWzHIi4tNXzJX2U3ElFMSCCbSO%2B7T%2FGia4et2MfEqWteJz29bcAOa4BxyMdyDwj%2BIf3ae7mRAUFJ8Pw0Cmw6GX%2FB7t9L%2BV7qPUa%2FLmmcoE6Fs71IIoWTxmmx%2FsOUGiglfsIMsRME0HzZh1CkAwlnqk5Lh7zkuRszQc%2F1CgV%2BDkNd7BnTpNXnZ3KxoyUU46Osa3GdYhSEUkDwzTyRMnvdt7%2Bos4E1mAaiwcQpxAV71vAisltFYeYvDITR25R01SggFgaPT0GQNLbwKDd4cVVShDSqHNQTdizx%2F%2FJCrsCgd4UbPrA%2BEbEsr8Ipaa6Wkie9R0vtWsGvaYvev9Tb69d6OcObU6nfiFrPe%2FDf1CpZiAHiXd4ayiO%2BkWudV0iKfgTCow4BiwlKd%2FsPGUKKkf0IKkAP0DF8GqXjAcK6sNY4IKKeIB11eO0EUkqfGIsiUy8RBCNIaMMZaLvsFQzVQKH4g5dZ6fF5RvHYDOIMPL9rcAGOqUBsheYeiFFLi886iCqD1sVTHnecUSejv%2F3GyhReYWqohERQzlc6mRSk4ZYACL4EBRRXIQfuttBy0qtJJDT8TPBmJ64iHsFWRr5%2B6QuzXiy%2BE3gyo7cwRIxcQevykb2920Y3pl1KAV%2Bmye%2FuIJCrzKLM24wgF9WJ6b5agepdpR%2B9plXSvHKj6F6nZL%2BuUifV9PL1K1mbVF%2B%2FpRfeped4WzDayjV1QoN&X-Amz-Signature=bbac6cae91e5925d6971465ba3ec3ac127d3389a42512ba6e931bb83d4ac8d19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6PPQIY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQz%2B6Jy4%2BGORTDe6eBIHgGmvjB8clMhH4FYqwddbSHKgIgPRB5WJXbduJqSDTWhz9Wou8QOpguo22xt0pBWp6B0uwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNYOSObEds6pXPrqgSrcA%2Bd%2F7Y%2BrjAh03SF1T9fSXsVN4E8sLD9H6OE5msru4Ujt%2B5rAV7p75hd6qM09fF2dKQUmmDi4R3U8vaM6C49USR2%2BIa%2BEkYVrQ2du3n8Cu3HIShscmpJ%2Fz4Cp4rQBM55ZBN8eTO9aWUPQ0vX1PK1a15FboFWzHIi4tNXzJX2U3ElFMSCCbSO%2B7T%2FGia4et2MfEqWteJz29bcAOa4BxyMdyDwj%2BIf3ae7mRAUFJ8Pw0Cmw6GX%2FB7t9L%2BV7qPUa%2FLmmcoE6Fs71IIoWTxmmx%2FsOUGiglfsIMsRME0HzZh1CkAwlnqk5Lh7zkuRszQc%2F1CgV%2BDkNd7BnTpNXnZ3KxoyUU46Osa3GdYhSEUkDwzTyRMnvdt7%2Bos4E1mAaiwcQpxAV71vAisltFYeYvDITR25R01SggFgaPT0GQNLbwKDd4cVVShDSqHNQTdizx%2F%2FJCrsCgd4UbPrA%2BEbEsr8Ipaa6Wkie9R0vtWsGvaYvev9Tb69d6OcObU6nfiFrPe%2FDf1CpZiAHiXd4ayiO%2BkWudV0iKfgTCow4BiwlKd%2FsPGUKKkf0IKkAP0DF8GqXjAcK6sNY4IKKeIB11eO0EUkqfGIsiUy8RBCNIaMMZaLvsFQzVQKH4g5dZ6fF5RvHYDOIMPL9rcAGOqUBsheYeiFFLi886iCqD1sVTHnecUSejv%2F3GyhReYWqohERQzlc6mRSk4ZYACL4EBRRXIQfuttBy0qtJJDT8TPBmJ64iHsFWRr5%2B6QuzXiy%2BE3gyo7cwRIxcQevykb2920Y3pl1KAV%2Bmye%2FuIJCrzKLM24wgF9WJ6b5agepdpR%2B9plXSvHKj6F6nZL%2BuUifV9PL1K1mbVF%2B%2FpRfeped4WzDayjV1QoN&X-Amz-Signature=ee1197ec6fcbf00daf0ce1c89d58674f4fbd71c6a5534d8186121f79adc83101&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6PPQIY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQz%2B6Jy4%2BGORTDe6eBIHgGmvjB8clMhH4FYqwddbSHKgIgPRB5WJXbduJqSDTWhz9Wou8QOpguo22xt0pBWp6B0uwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNYOSObEds6pXPrqgSrcA%2Bd%2F7Y%2BrjAh03SF1T9fSXsVN4E8sLD9H6OE5msru4Ujt%2B5rAV7p75hd6qM09fF2dKQUmmDi4R3U8vaM6C49USR2%2BIa%2BEkYVrQ2du3n8Cu3HIShscmpJ%2Fz4Cp4rQBM55ZBN8eTO9aWUPQ0vX1PK1a15FboFWzHIi4tNXzJX2U3ElFMSCCbSO%2B7T%2FGia4et2MfEqWteJz29bcAOa4BxyMdyDwj%2BIf3ae7mRAUFJ8Pw0Cmw6GX%2FB7t9L%2BV7qPUa%2FLmmcoE6Fs71IIoWTxmmx%2FsOUGiglfsIMsRME0HzZh1CkAwlnqk5Lh7zkuRszQc%2F1CgV%2BDkNd7BnTpNXnZ3KxoyUU46Osa3GdYhSEUkDwzTyRMnvdt7%2Bos4E1mAaiwcQpxAV71vAisltFYeYvDITR25R01SggFgaPT0GQNLbwKDd4cVVShDSqHNQTdizx%2F%2FJCrsCgd4UbPrA%2BEbEsr8Ipaa6Wkie9R0vtWsGvaYvev9Tb69d6OcObU6nfiFrPe%2FDf1CpZiAHiXd4ayiO%2BkWudV0iKfgTCow4BiwlKd%2FsPGUKKkf0IKkAP0DF8GqXjAcK6sNY4IKKeIB11eO0EUkqfGIsiUy8RBCNIaMMZaLvsFQzVQKH4g5dZ6fF5RvHYDOIMPL9rcAGOqUBsheYeiFFLi886iCqD1sVTHnecUSejv%2F3GyhReYWqohERQzlc6mRSk4ZYACL4EBRRXIQfuttBy0qtJJDT8TPBmJ64iHsFWRr5%2B6QuzXiy%2BE3gyo7cwRIxcQevykb2920Y3pl1KAV%2Bmye%2FuIJCrzKLM24wgF9WJ6b5agepdpR%2B9plXSvHKj6F6nZL%2BuUifV9PL1K1mbVF%2B%2FpRfeped4WzDayjV1QoN&X-Amz-Signature=d3d66a82bff0cbaee2bd8444edd88637c3c8202c3173cc0e05fe4aeffa36422b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6PPQIY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQz%2B6Jy4%2BGORTDe6eBIHgGmvjB8clMhH4FYqwddbSHKgIgPRB5WJXbduJqSDTWhz9Wou8QOpguo22xt0pBWp6B0uwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNYOSObEds6pXPrqgSrcA%2Bd%2F7Y%2BrjAh03SF1T9fSXsVN4E8sLD9H6OE5msru4Ujt%2B5rAV7p75hd6qM09fF2dKQUmmDi4R3U8vaM6C49USR2%2BIa%2BEkYVrQ2du3n8Cu3HIShscmpJ%2Fz4Cp4rQBM55ZBN8eTO9aWUPQ0vX1PK1a15FboFWzHIi4tNXzJX2U3ElFMSCCbSO%2B7T%2FGia4et2MfEqWteJz29bcAOa4BxyMdyDwj%2BIf3ae7mRAUFJ8Pw0Cmw6GX%2FB7t9L%2BV7qPUa%2FLmmcoE6Fs71IIoWTxmmx%2FsOUGiglfsIMsRME0HzZh1CkAwlnqk5Lh7zkuRszQc%2F1CgV%2BDkNd7BnTpNXnZ3KxoyUU46Osa3GdYhSEUkDwzTyRMnvdt7%2Bos4E1mAaiwcQpxAV71vAisltFYeYvDITR25R01SggFgaPT0GQNLbwKDd4cVVShDSqHNQTdizx%2F%2FJCrsCgd4UbPrA%2BEbEsr8Ipaa6Wkie9R0vtWsGvaYvev9Tb69d6OcObU6nfiFrPe%2FDf1CpZiAHiXd4ayiO%2BkWudV0iKfgTCow4BiwlKd%2FsPGUKKkf0IKkAP0DF8GqXjAcK6sNY4IKKeIB11eO0EUkqfGIsiUy8RBCNIaMMZaLvsFQzVQKH4g5dZ6fF5RvHYDOIMPL9rcAGOqUBsheYeiFFLi886iCqD1sVTHnecUSejv%2F3GyhReYWqohERQzlc6mRSk4ZYACL4EBRRXIQfuttBy0qtJJDT8TPBmJ64iHsFWRr5%2B6QuzXiy%2BE3gyo7cwRIxcQevykb2920Y3pl1KAV%2Bmye%2FuIJCrzKLM24wgF9WJ6b5agepdpR%2B9plXSvHKj6F6nZL%2BuUifV9PL1K1mbVF%2B%2FpRfeped4WzDayjV1QoN&X-Amz-Signature=9054cf9a95255b6f831dbd5e30230313b4e10793b36361056cf238c892285b36&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6PPQIY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQz%2B6Jy4%2BGORTDe6eBIHgGmvjB8clMhH4FYqwddbSHKgIgPRB5WJXbduJqSDTWhz9Wou8QOpguo22xt0pBWp6B0uwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNYOSObEds6pXPrqgSrcA%2Bd%2F7Y%2BrjAh03SF1T9fSXsVN4E8sLD9H6OE5msru4Ujt%2B5rAV7p75hd6qM09fF2dKQUmmDi4R3U8vaM6C49USR2%2BIa%2BEkYVrQ2du3n8Cu3HIShscmpJ%2Fz4Cp4rQBM55ZBN8eTO9aWUPQ0vX1PK1a15FboFWzHIi4tNXzJX2U3ElFMSCCbSO%2B7T%2FGia4et2MfEqWteJz29bcAOa4BxyMdyDwj%2BIf3ae7mRAUFJ8Pw0Cmw6GX%2FB7t9L%2BV7qPUa%2FLmmcoE6Fs71IIoWTxmmx%2FsOUGiglfsIMsRME0HzZh1CkAwlnqk5Lh7zkuRszQc%2F1CgV%2BDkNd7BnTpNXnZ3KxoyUU46Osa3GdYhSEUkDwzTyRMnvdt7%2Bos4E1mAaiwcQpxAV71vAisltFYeYvDITR25R01SggFgaPT0GQNLbwKDd4cVVShDSqHNQTdizx%2F%2FJCrsCgd4UbPrA%2BEbEsr8Ipaa6Wkie9R0vtWsGvaYvev9Tb69d6OcObU6nfiFrPe%2FDf1CpZiAHiXd4ayiO%2BkWudV0iKfgTCow4BiwlKd%2FsPGUKKkf0IKkAP0DF8GqXjAcK6sNY4IKKeIB11eO0EUkqfGIsiUy8RBCNIaMMZaLvsFQzVQKH4g5dZ6fF5RvHYDOIMPL9rcAGOqUBsheYeiFFLi886iCqD1sVTHnecUSejv%2F3GyhReYWqohERQzlc6mRSk4ZYACL4EBRRXIQfuttBy0qtJJDT8TPBmJ64iHsFWRr5%2B6QuzXiy%2BE3gyo7cwRIxcQevykb2920Y3pl1KAV%2Bmye%2FuIJCrzKLM24wgF9WJ6b5agepdpR%2B9plXSvHKj6F6nZL%2BuUifV9PL1K1mbVF%2B%2FpRfeped4WzDayjV1QoN&X-Amz-Signature=59b4f4f2e63f3bad3b091d5d7eeb036ac80496e3c3a161405249b69e0e2b5584&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6PPQIY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQz%2B6Jy4%2BGORTDe6eBIHgGmvjB8clMhH4FYqwddbSHKgIgPRB5WJXbduJqSDTWhz9Wou8QOpguo22xt0pBWp6B0uwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNYOSObEds6pXPrqgSrcA%2Bd%2F7Y%2BrjAh03SF1T9fSXsVN4E8sLD9H6OE5msru4Ujt%2B5rAV7p75hd6qM09fF2dKQUmmDi4R3U8vaM6C49USR2%2BIa%2BEkYVrQ2du3n8Cu3HIShscmpJ%2Fz4Cp4rQBM55ZBN8eTO9aWUPQ0vX1PK1a15FboFWzHIi4tNXzJX2U3ElFMSCCbSO%2B7T%2FGia4et2MfEqWteJz29bcAOa4BxyMdyDwj%2BIf3ae7mRAUFJ8Pw0Cmw6GX%2FB7t9L%2BV7qPUa%2FLmmcoE6Fs71IIoWTxmmx%2FsOUGiglfsIMsRME0HzZh1CkAwlnqk5Lh7zkuRszQc%2F1CgV%2BDkNd7BnTpNXnZ3KxoyUU46Osa3GdYhSEUkDwzTyRMnvdt7%2Bos4E1mAaiwcQpxAV71vAisltFYeYvDITR25R01SggFgaPT0GQNLbwKDd4cVVShDSqHNQTdizx%2F%2FJCrsCgd4UbPrA%2BEbEsr8Ipaa6Wkie9R0vtWsGvaYvev9Tb69d6OcObU6nfiFrPe%2FDf1CpZiAHiXd4ayiO%2BkWudV0iKfgTCow4BiwlKd%2FsPGUKKkf0IKkAP0DF8GqXjAcK6sNY4IKKeIB11eO0EUkqfGIsiUy8RBCNIaMMZaLvsFQzVQKH4g5dZ6fF5RvHYDOIMPL9rcAGOqUBsheYeiFFLi886iCqD1sVTHnecUSejv%2F3GyhReYWqohERQzlc6mRSk4ZYACL4EBRRXIQfuttBy0qtJJDT8TPBmJ64iHsFWRr5%2B6QuzXiy%2BE3gyo7cwRIxcQevykb2920Y3pl1KAV%2Bmye%2FuIJCrzKLM24wgF9WJ6b5agepdpR%2B9plXSvHKj6F6nZL%2BuUifV9PL1K1mbVF%2B%2FpRfeped4WzDayjV1QoN&X-Amz-Signature=c52b463cdb6e19e0c5419aa7b9325d1524fd92e7f8b6aff2032389de1c81f851&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6PPQIY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQz%2B6Jy4%2BGORTDe6eBIHgGmvjB8clMhH4FYqwddbSHKgIgPRB5WJXbduJqSDTWhz9Wou8QOpguo22xt0pBWp6B0uwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNYOSObEds6pXPrqgSrcA%2Bd%2F7Y%2BrjAh03SF1T9fSXsVN4E8sLD9H6OE5msru4Ujt%2B5rAV7p75hd6qM09fF2dKQUmmDi4R3U8vaM6C49USR2%2BIa%2BEkYVrQ2du3n8Cu3HIShscmpJ%2Fz4Cp4rQBM55ZBN8eTO9aWUPQ0vX1PK1a15FboFWzHIi4tNXzJX2U3ElFMSCCbSO%2B7T%2FGia4et2MfEqWteJz29bcAOa4BxyMdyDwj%2BIf3ae7mRAUFJ8Pw0Cmw6GX%2FB7t9L%2BV7qPUa%2FLmmcoE6Fs71IIoWTxmmx%2FsOUGiglfsIMsRME0HzZh1CkAwlnqk5Lh7zkuRszQc%2F1CgV%2BDkNd7BnTpNXnZ3KxoyUU46Osa3GdYhSEUkDwzTyRMnvdt7%2Bos4E1mAaiwcQpxAV71vAisltFYeYvDITR25R01SggFgaPT0GQNLbwKDd4cVVShDSqHNQTdizx%2F%2FJCrsCgd4UbPrA%2BEbEsr8Ipaa6Wkie9R0vtWsGvaYvev9Tb69d6OcObU6nfiFrPe%2FDf1CpZiAHiXd4ayiO%2BkWudV0iKfgTCow4BiwlKd%2FsPGUKKkf0IKkAP0DF8GqXjAcK6sNY4IKKeIB11eO0EUkqfGIsiUy8RBCNIaMMZaLvsFQzVQKH4g5dZ6fF5RvHYDOIMPL9rcAGOqUBsheYeiFFLi886iCqD1sVTHnecUSejv%2F3GyhReYWqohERQzlc6mRSk4ZYACL4EBRRXIQfuttBy0qtJJDT8TPBmJ64iHsFWRr5%2B6QuzXiy%2BE3gyo7cwRIxcQevykb2920Y3pl1KAV%2Bmye%2FuIJCrzKLM24wgF9WJ6b5agepdpR%2B9plXSvHKj6F6nZL%2BuUifV9PL1K1mbVF%2B%2FpRfeped4WzDayjV1QoN&X-Amz-Signature=1364f844941547cc71f0b2d87680abbc7bac77ef340d2fdc06cc94cbb37cd19d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
