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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITFQBTC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDzaIX9r9%2FK%2BFPDeV7FIJXSoKV9hU7JlaIpIG5t0nq74wIgUj4G0YMG5doCgwu%2Fl6XQXs%2FXrygaz%2BuJtjxdVG%2F4w7sq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE1XuWS1c3gCg43XECrcA1%2FZzxI55LB%2Fr936F8kfjUEmTzfAacwLlGyfipAhrJKLy%2FY6t4V84Y0d4oPeMwSvOsQN8prhAuV7mNuRntx0tKopD5arhiQNN405S8cr1Yx9A1Caxvk%2BBAkjvsyhqqUieEAVCUKVrrpme2tGT7GUdmz6%2BbFZe7OQOGukxNjn%2FLvv7MyFCB%2B49KVwZUZlwP0Ia66G73a%2BggG1ooTN4lDrfljMLdCa69nmHsrP%2BhZ1xw3QbHB%2BEAmCCI7%2BwEIzx7QpsC2thssYKAdMB0joxKrrPNkXs%2FqVpX3syX4hCX51iXKjdxcpuERBC2qUvzbwOC%2B2RzhlOrD5pdRves9uV0nXizL2KgyrFmGY6FRzc28BWLqFi38d%2Blp9P00Jhtib04oyhYBujUdjvnnoZ%2By41D%2FCMPwLxMYSrq4oalvFQemfgPg5uxHO0G6uM9%2B5Gupmu0E3eto%2FndSMKpm8Z1IkJGB41B0CJRQDMdwLoIXNAMlpoplODrfSXQtZee%2FvjcqtwTicqQEB2wsYXsV5oPxXtx%2FAjk7hPk3tN8DZgygvEtgMDTsHUPfSlb14RzPcRVpki6sRTvVw3OshZ5jFc3OYFjwgHXc%2FlfWT5toYjgS0r08wkKA0hxBk1TYQ7dxuCEoPMPf5ksQGOqUBo6Q%2F9zXZY6sivoBW7F%2Bsm05Q47WukBQFp61IJDgIdRzTsZPO%2F%2BiuYa4tUPinEBlnA25p%2BFnRts84ggASbCx8kS6eSKhjtOaU9teJsix%2FjCOvjBxm9UtSabs9bdgUZa9hkOXZoqeS%2FqVCgXc9P%2Bk5Qcu8raq87M%2BTkDhCJW8hj3NvS4ZTJfCBJuV5yka1aExuFcoQiOLDIHpd2Fliz9twyWp2eRAG&X-Amz-Signature=39fb76850a08e64dfe4fecb5ffb08d2979e26cbb0bbf478286fc959eb9d8f279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITFQBTC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDzaIX9r9%2FK%2BFPDeV7FIJXSoKV9hU7JlaIpIG5t0nq74wIgUj4G0YMG5doCgwu%2Fl6XQXs%2FXrygaz%2BuJtjxdVG%2F4w7sq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE1XuWS1c3gCg43XECrcA1%2FZzxI55LB%2Fr936F8kfjUEmTzfAacwLlGyfipAhrJKLy%2FY6t4V84Y0d4oPeMwSvOsQN8prhAuV7mNuRntx0tKopD5arhiQNN405S8cr1Yx9A1Caxvk%2BBAkjvsyhqqUieEAVCUKVrrpme2tGT7GUdmz6%2BbFZe7OQOGukxNjn%2FLvv7MyFCB%2B49KVwZUZlwP0Ia66G73a%2BggG1ooTN4lDrfljMLdCa69nmHsrP%2BhZ1xw3QbHB%2BEAmCCI7%2BwEIzx7QpsC2thssYKAdMB0joxKrrPNkXs%2FqVpX3syX4hCX51iXKjdxcpuERBC2qUvzbwOC%2B2RzhlOrD5pdRves9uV0nXizL2KgyrFmGY6FRzc28BWLqFi38d%2Blp9P00Jhtib04oyhYBujUdjvnnoZ%2By41D%2FCMPwLxMYSrq4oalvFQemfgPg5uxHO0G6uM9%2B5Gupmu0E3eto%2FndSMKpm8Z1IkJGB41B0CJRQDMdwLoIXNAMlpoplODrfSXQtZee%2FvjcqtwTicqQEB2wsYXsV5oPxXtx%2FAjk7hPk3tN8DZgygvEtgMDTsHUPfSlb14RzPcRVpki6sRTvVw3OshZ5jFc3OYFjwgHXc%2FlfWT5toYjgS0r08wkKA0hxBk1TYQ7dxuCEoPMPf5ksQGOqUBo6Q%2F9zXZY6sivoBW7F%2Bsm05Q47WukBQFp61IJDgIdRzTsZPO%2F%2BiuYa4tUPinEBlnA25p%2BFnRts84ggASbCx8kS6eSKhjtOaU9teJsix%2FjCOvjBxm9UtSabs9bdgUZa9hkOXZoqeS%2FqVCgXc9P%2Bk5Qcu8raq87M%2BTkDhCJW8hj3NvS4ZTJfCBJuV5yka1aExuFcoQiOLDIHpd2Fliz9twyWp2eRAG&X-Amz-Signature=6e32f5f3d865efbe400abc3f4e7477384b3f10813da048cc519c97cfcb7889e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITFQBTC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDzaIX9r9%2FK%2BFPDeV7FIJXSoKV9hU7JlaIpIG5t0nq74wIgUj4G0YMG5doCgwu%2Fl6XQXs%2FXrygaz%2BuJtjxdVG%2F4w7sq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE1XuWS1c3gCg43XECrcA1%2FZzxI55LB%2Fr936F8kfjUEmTzfAacwLlGyfipAhrJKLy%2FY6t4V84Y0d4oPeMwSvOsQN8prhAuV7mNuRntx0tKopD5arhiQNN405S8cr1Yx9A1Caxvk%2BBAkjvsyhqqUieEAVCUKVrrpme2tGT7GUdmz6%2BbFZe7OQOGukxNjn%2FLvv7MyFCB%2B49KVwZUZlwP0Ia66G73a%2BggG1ooTN4lDrfljMLdCa69nmHsrP%2BhZ1xw3QbHB%2BEAmCCI7%2BwEIzx7QpsC2thssYKAdMB0joxKrrPNkXs%2FqVpX3syX4hCX51iXKjdxcpuERBC2qUvzbwOC%2B2RzhlOrD5pdRves9uV0nXizL2KgyrFmGY6FRzc28BWLqFi38d%2Blp9P00Jhtib04oyhYBujUdjvnnoZ%2By41D%2FCMPwLxMYSrq4oalvFQemfgPg5uxHO0G6uM9%2B5Gupmu0E3eto%2FndSMKpm8Z1IkJGB41B0CJRQDMdwLoIXNAMlpoplODrfSXQtZee%2FvjcqtwTicqQEB2wsYXsV5oPxXtx%2FAjk7hPk3tN8DZgygvEtgMDTsHUPfSlb14RzPcRVpki6sRTvVw3OshZ5jFc3OYFjwgHXc%2FlfWT5toYjgS0r08wkKA0hxBk1TYQ7dxuCEoPMPf5ksQGOqUBo6Q%2F9zXZY6sivoBW7F%2Bsm05Q47WukBQFp61IJDgIdRzTsZPO%2F%2BiuYa4tUPinEBlnA25p%2BFnRts84ggASbCx8kS6eSKhjtOaU9teJsix%2FjCOvjBxm9UtSabs9bdgUZa9hkOXZoqeS%2FqVCgXc9P%2Bk5Qcu8raq87M%2BTkDhCJW8hj3NvS4ZTJfCBJuV5yka1aExuFcoQiOLDIHpd2Fliz9twyWp2eRAG&X-Amz-Signature=556a09ffba5919339b830f5c468eae3476fe3a6d8104b40434bac5037ed5b15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITFQBTC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDzaIX9r9%2FK%2BFPDeV7FIJXSoKV9hU7JlaIpIG5t0nq74wIgUj4G0YMG5doCgwu%2Fl6XQXs%2FXrygaz%2BuJtjxdVG%2F4w7sq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE1XuWS1c3gCg43XECrcA1%2FZzxI55LB%2Fr936F8kfjUEmTzfAacwLlGyfipAhrJKLy%2FY6t4V84Y0d4oPeMwSvOsQN8prhAuV7mNuRntx0tKopD5arhiQNN405S8cr1Yx9A1Caxvk%2BBAkjvsyhqqUieEAVCUKVrrpme2tGT7GUdmz6%2BbFZe7OQOGukxNjn%2FLvv7MyFCB%2B49KVwZUZlwP0Ia66G73a%2BggG1ooTN4lDrfljMLdCa69nmHsrP%2BhZ1xw3QbHB%2BEAmCCI7%2BwEIzx7QpsC2thssYKAdMB0joxKrrPNkXs%2FqVpX3syX4hCX51iXKjdxcpuERBC2qUvzbwOC%2B2RzhlOrD5pdRves9uV0nXizL2KgyrFmGY6FRzc28BWLqFi38d%2Blp9P00Jhtib04oyhYBujUdjvnnoZ%2By41D%2FCMPwLxMYSrq4oalvFQemfgPg5uxHO0G6uM9%2B5Gupmu0E3eto%2FndSMKpm8Z1IkJGB41B0CJRQDMdwLoIXNAMlpoplODrfSXQtZee%2FvjcqtwTicqQEB2wsYXsV5oPxXtx%2FAjk7hPk3tN8DZgygvEtgMDTsHUPfSlb14RzPcRVpki6sRTvVw3OshZ5jFc3OYFjwgHXc%2FlfWT5toYjgS0r08wkKA0hxBk1TYQ7dxuCEoPMPf5ksQGOqUBo6Q%2F9zXZY6sivoBW7F%2Bsm05Q47WukBQFp61IJDgIdRzTsZPO%2F%2BiuYa4tUPinEBlnA25p%2BFnRts84ggASbCx8kS6eSKhjtOaU9teJsix%2FjCOvjBxm9UtSabs9bdgUZa9hkOXZoqeS%2FqVCgXc9P%2Bk5Qcu8raq87M%2BTkDhCJW8hj3NvS4ZTJfCBJuV5yka1aExuFcoQiOLDIHpd2Fliz9twyWp2eRAG&X-Amz-Signature=8555ac9292a5e748c844500f5cf0492f808e7af9e4fa929c6e4a06fda8cb6b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITFQBTC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDzaIX9r9%2FK%2BFPDeV7FIJXSoKV9hU7JlaIpIG5t0nq74wIgUj4G0YMG5doCgwu%2Fl6XQXs%2FXrygaz%2BuJtjxdVG%2F4w7sq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE1XuWS1c3gCg43XECrcA1%2FZzxI55LB%2Fr936F8kfjUEmTzfAacwLlGyfipAhrJKLy%2FY6t4V84Y0d4oPeMwSvOsQN8prhAuV7mNuRntx0tKopD5arhiQNN405S8cr1Yx9A1Caxvk%2BBAkjvsyhqqUieEAVCUKVrrpme2tGT7GUdmz6%2BbFZe7OQOGukxNjn%2FLvv7MyFCB%2B49KVwZUZlwP0Ia66G73a%2BggG1ooTN4lDrfljMLdCa69nmHsrP%2BhZ1xw3QbHB%2BEAmCCI7%2BwEIzx7QpsC2thssYKAdMB0joxKrrPNkXs%2FqVpX3syX4hCX51iXKjdxcpuERBC2qUvzbwOC%2B2RzhlOrD5pdRves9uV0nXizL2KgyrFmGY6FRzc28BWLqFi38d%2Blp9P00Jhtib04oyhYBujUdjvnnoZ%2By41D%2FCMPwLxMYSrq4oalvFQemfgPg5uxHO0G6uM9%2B5Gupmu0E3eto%2FndSMKpm8Z1IkJGB41B0CJRQDMdwLoIXNAMlpoplODrfSXQtZee%2FvjcqtwTicqQEB2wsYXsV5oPxXtx%2FAjk7hPk3tN8DZgygvEtgMDTsHUPfSlb14RzPcRVpki6sRTvVw3OshZ5jFc3OYFjwgHXc%2FlfWT5toYjgS0r08wkKA0hxBk1TYQ7dxuCEoPMPf5ksQGOqUBo6Q%2F9zXZY6sivoBW7F%2Bsm05Q47WukBQFp61IJDgIdRzTsZPO%2F%2BiuYa4tUPinEBlnA25p%2BFnRts84ggASbCx8kS6eSKhjtOaU9teJsix%2FjCOvjBxm9UtSabs9bdgUZa9hkOXZoqeS%2FqVCgXc9P%2Bk5Qcu8raq87M%2BTkDhCJW8hj3NvS4ZTJfCBJuV5yka1aExuFcoQiOLDIHpd2Fliz9twyWp2eRAG&X-Amz-Signature=6becfd7d33dfbee5c644d3ac18d718486deb685f440a62dacdde9198c1eb800a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITFQBTC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDzaIX9r9%2FK%2BFPDeV7FIJXSoKV9hU7JlaIpIG5t0nq74wIgUj4G0YMG5doCgwu%2Fl6XQXs%2FXrygaz%2BuJtjxdVG%2F4w7sq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE1XuWS1c3gCg43XECrcA1%2FZzxI55LB%2Fr936F8kfjUEmTzfAacwLlGyfipAhrJKLy%2FY6t4V84Y0d4oPeMwSvOsQN8prhAuV7mNuRntx0tKopD5arhiQNN405S8cr1Yx9A1Caxvk%2BBAkjvsyhqqUieEAVCUKVrrpme2tGT7GUdmz6%2BbFZe7OQOGukxNjn%2FLvv7MyFCB%2B49KVwZUZlwP0Ia66G73a%2BggG1ooTN4lDrfljMLdCa69nmHsrP%2BhZ1xw3QbHB%2BEAmCCI7%2BwEIzx7QpsC2thssYKAdMB0joxKrrPNkXs%2FqVpX3syX4hCX51iXKjdxcpuERBC2qUvzbwOC%2B2RzhlOrD5pdRves9uV0nXizL2KgyrFmGY6FRzc28BWLqFi38d%2Blp9P00Jhtib04oyhYBujUdjvnnoZ%2By41D%2FCMPwLxMYSrq4oalvFQemfgPg5uxHO0G6uM9%2B5Gupmu0E3eto%2FndSMKpm8Z1IkJGB41B0CJRQDMdwLoIXNAMlpoplODrfSXQtZee%2FvjcqtwTicqQEB2wsYXsV5oPxXtx%2FAjk7hPk3tN8DZgygvEtgMDTsHUPfSlb14RzPcRVpki6sRTvVw3OshZ5jFc3OYFjwgHXc%2FlfWT5toYjgS0r08wkKA0hxBk1TYQ7dxuCEoPMPf5ksQGOqUBo6Q%2F9zXZY6sivoBW7F%2Bsm05Q47WukBQFp61IJDgIdRzTsZPO%2F%2BiuYa4tUPinEBlnA25p%2BFnRts84ggASbCx8kS6eSKhjtOaU9teJsix%2FjCOvjBxm9UtSabs9bdgUZa9hkOXZoqeS%2FqVCgXc9P%2Bk5Qcu8raq87M%2BTkDhCJW8hj3NvS4ZTJfCBJuV5yka1aExuFcoQiOLDIHpd2Fliz9twyWp2eRAG&X-Amz-Signature=2d5601aaffa9442c4942dc91058a48665a92a70bcf69cb931e712c7e45f9450d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITFQBTC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDzaIX9r9%2FK%2BFPDeV7FIJXSoKV9hU7JlaIpIG5t0nq74wIgUj4G0YMG5doCgwu%2Fl6XQXs%2FXrygaz%2BuJtjxdVG%2F4w7sq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE1XuWS1c3gCg43XECrcA1%2FZzxI55LB%2Fr936F8kfjUEmTzfAacwLlGyfipAhrJKLy%2FY6t4V84Y0d4oPeMwSvOsQN8prhAuV7mNuRntx0tKopD5arhiQNN405S8cr1Yx9A1Caxvk%2BBAkjvsyhqqUieEAVCUKVrrpme2tGT7GUdmz6%2BbFZe7OQOGukxNjn%2FLvv7MyFCB%2B49KVwZUZlwP0Ia66G73a%2BggG1ooTN4lDrfljMLdCa69nmHsrP%2BhZ1xw3QbHB%2BEAmCCI7%2BwEIzx7QpsC2thssYKAdMB0joxKrrPNkXs%2FqVpX3syX4hCX51iXKjdxcpuERBC2qUvzbwOC%2B2RzhlOrD5pdRves9uV0nXizL2KgyrFmGY6FRzc28BWLqFi38d%2Blp9P00Jhtib04oyhYBujUdjvnnoZ%2By41D%2FCMPwLxMYSrq4oalvFQemfgPg5uxHO0G6uM9%2B5Gupmu0E3eto%2FndSMKpm8Z1IkJGB41B0CJRQDMdwLoIXNAMlpoplODrfSXQtZee%2FvjcqtwTicqQEB2wsYXsV5oPxXtx%2FAjk7hPk3tN8DZgygvEtgMDTsHUPfSlb14RzPcRVpki6sRTvVw3OshZ5jFc3OYFjwgHXc%2FlfWT5toYjgS0r08wkKA0hxBk1TYQ7dxuCEoPMPf5ksQGOqUBo6Q%2F9zXZY6sivoBW7F%2Bsm05Q47WukBQFp61IJDgIdRzTsZPO%2F%2BiuYa4tUPinEBlnA25p%2BFnRts84ggASbCx8kS6eSKhjtOaU9teJsix%2FjCOvjBxm9UtSabs9bdgUZa9hkOXZoqeS%2FqVCgXc9P%2Bk5Qcu8raq87M%2BTkDhCJW8hj3NvS4ZTJfCBJuV5yka1aExuFcoQiOLDIHpd2Fliz9twyWp2eRAG&X-Amz-Signature=540a348f39096fd42b501c3a4fad80d031248840c0ea6f36f967c16076c7791d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
