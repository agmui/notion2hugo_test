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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EENXKWI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEBuBTBWJmfHDXkRxZtmmvsP0KjBorRNq0gNrwHHztnAiEAtUXcplxvG1PN1GBzAb15ZKzVZig2BmHlVsT6b%2BURMIAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDN9%2BPU6giCoZgdahESrcA1QMy8zw1T8hjqq3ax%2Bsf22JkCXkRq59nO%2FRqh%2BcL1nPfT%2BjDgvxDqqgxcyjBfPnRbX05cTRCow6fHS5lief4MbbXd4coK2rgjZ6gSW9runl65p7yus74RnwIheaDgyxKgKLovi%2Ba5SWzDyYEBUPu8tSAAR%2Fym5wVWL5HHJqZ5%2Bn8UkgUQ53TyQPKnxh7h3B28OBcBlGI51DnsgV0dODIOiG%2BgnFFGIWhy5CZpJlVycajRu%2BqoNLETdZSsWWxaSHK71xwEqjYzQAC%2FIS9wTZJGW%2FuItCdDtgvKqxAjeWLELNDczmwfYPcHHic6CfkHA3PAf7Gfr4VafbWUJ1R7X04Uawityx%2FeCnYFmj5UJcw2n37%2BOwy7%2FhyFFh88PdL9jPH2UwZdPKGKFR0eDc4qyqnG2yDQLMlypzEtmlfUndybViQZ7SpuZ%2BnB%2Fr8dwb%2Bf2L0mDGg5m%2FURAXnUlG13fUaKaQ8ELtpV8bOpfvZ7tUnpBsirtfPE0KVXJRQIsBLs8rzFxj4X%2FWSVpNgfzYpsWlBkjgMLIU0KngO8dbSXDG9ymJnJrLQR0C4FQsjBepYIEcsnzm3TEPMovBHLwh8E%2BKL9npdCIGUJqAfYwj6t184eAfdzDhicenYzpd9mTxMKzIxb8GOqUBBbLWkw7AM9QSQ57lfOJztMGRVicDc27U2LUMMH6FJ8Xvj3r%2Bkxs%2BLtX530kcoaICIkhK0tbmXGW8EcO00uueS7kYG%2FrTGg5lnHJjIdqiTNYjvAZL%2FsWc5RDNvIyzDBrtmFZ1C2cNuZjFmuchww3FrbvzhsjPFXWE06l8j860EW5MBISWtbj0xIf7M5EbsQFbKXePJ6gHTKaBe6HCcaUA52mNTwua&X-Amz-Signature=140e9465dd59c33ca8dc4b0c6a7795997874ac7d2db2149269336b770c894763&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EENXKWI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEBuBTBWJmfHDXkRxZtmmvsP0KjBorRNq0gNrwHHztnAiEAtUXcplxvG1PN1GBzAb15ZKzVZig2BmHlVsT6b%2BURMIAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDN9%2BPU6giCoZgdahESrcA1QMy8zw1T8hjqq3ax%2Bsf22JkCXkRq59nO%2FRqh%2BcL1nPfT%2BjDgvxDqqgxcyjBfPnRbX05cTRCow6fHS5lief4MbbXd4coK2rgjZ6gSW9runl65p7yus74RnwIheaDgyxKgKLovi%2Ba5SWzDyYEBUPu8tSAAR%2Fym5wVWL5HHJqZ5%2Bn8UkgUQ53TyQPKnxh7h3B28OBcBlGI51DnsgV0dODIOiG%2BgnFFGIWhy5CZpJlVycajRu%2BqoNLETdZSsWWxaSHK71xwEqjYzQAC%2FIS9wTZJGW%2FuItCdDtgvKqxAjeWLELNDczmwfYPcHHic6CfkHA3PAf7Gfr4VafbWUJ1R7X04Uawityx%2FeCnYFmj5UJcw2n37%2BOwy7%2FhyFFh88PdL9jPH2UwZdPKGKFR0eDc4qyqnG2yDQLMlypzEtmlfUndybViQZ7SpuZ%2BnB%2Fr8dwb%2Bf2L0mDGg5m%2FURAXnUlG13fUaKaQ8ELtpV8bOpfvZ7tUnpBsirtfPE0KVXJRQIsBLs8rzFxj4X%2FWSVpNgfzYpsWlBkjgMLIU0KngO8dbSXDG9ymJnJrLQR0C4FQsjBepYIEcsnzm3TEPMovBHLwh8E%2BKL9npdCIGUJqAfYwj6t184eAfdzDhicenYzpd9mTxMKzIxb8GOqUBBbLWkw7AM9QSQ57lfOJztMGRVicDc27U2LUMMH6FJ8Xvj3r%2Bkxs%2BLtX530kcoaICIkhK0tbmXGW8EcO00uueS7kYG%2FrTGg5lnHJjIdqiTNYjvAZL%2FsWc5RDNvIyzDBrtmFZ1C2cNuZjFmuchww3FrbvzhsjPFXWE06l8j860EW5MBISWtbj0xIf7M5EbsQFbKXePJ6gHTKaBe6HCcaUA52mNTwua&X-Amz-Signature=1d2057ed2529c3ce621f34052e3218f14db07ccbb27a7d3db9b2d7e928824ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EENXKWI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEBuBTBWJmfHDXkRxZtmmvsP0KjBorRNq0gNrwHHztnAiEAtUXcplxvG1PN1GBzAb15ZKzVZig2BmHlVsT6b%2BURMIAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDN9%2BPU6giCoZgdahESrcA1QMy8zw1T8hjqq3ax%2Bsf22JkCXkRq59nO%2FRqh%2BcL1nPfT%2BjDgvxDqqgxcyjBfPnRbX05cTRCow6fHS5lief4MbbXd4coK2rgjZ6gSW9runl65p7yus74RnwIheaDgyxKgKLovi%2Ba5SWzDyYEBUPu8tSAAR%2Fym5wVWL5HHJqZ5%2Bn8UkgUQ53TyQPKnxh7h3B28OBcBlGI51DnsgV0dODIOiG%2BgnFFGIWhy5CZpJlVycajRu%2BqoNLETdZSsWWxaSHK71xwEqjYzQAC%2FIS9wTZJGW%2FuItCdDtgvKqxAjeWLELNDczmwfYPcHHic6CfkHA3PAf7Gfr4VafbWUJ1R7X04Uawityx%2FeCnYFmj5UJcw2n37%2BOwy7%2FhyFFh88PdL9jPH2UwZdPKGKFR0eDc4qyqnG2yDQLMlypzEtmlfUndybViQZ7SpuZ%2BnB%2Fr8dwb%2Bf2L0mDGg5m%2FURAXnUlG13fUaKaQ8ELtpV8bOpfvZ7tUnpBsirtfPE0KVXJRQIsBLs8rzFxj4X%2FWSVpNgfzYpsWlBkjgMLIU0KngO8dbSXDG9ymJnJrLQR0C4FQsjBepYIEcsnzm3TEPMovBHLwh8E%2BKL9npdCIGUJqAfYwj6t184eAfdzDhicenYzpd9mTxMKzIxb8GOqUBBbLWkw7AM9QSQ57lfOJztMGRVicDc27U2LUMMH6FJ8Xvj3r%2Bkxs%2BLtX530kcoaICIkhK0tbmXGW8EcO00uueS7kYG%2FrTGg5lnHJjIdqiTNYjvAZL%2FsWc5RDNvIyzDBrtmFZ1C2cNuZjFmuchww3FrbvzhsjPFXWE06l8j860EW5MBISWtbj0xIf7M5EbsQFbKXePJ6gHTKaBe6HCcaUA52mNTwua&X-Amz-Signature=7fd51d225d0981c76b593e32151198ee1ba4d116dc0125c2e74fcd1277f97c40&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EENXKWI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEBuBTBWJmfHDXkRxZtmmvsP0KjBorRNq0gNrwHHztnAiEAtUXcplxvG1PN1GBzAb15ZKzVZig2BmHlVsT6b%2BURMIAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDN9%2BPU6giCoZgdahESrcA1QMy8zw1T8hjqq3ax%2Bsf22JkCXkRq59nO%2FRqh%2BcL1nPfT%2BjDgvxDqqgxcyjBfPnRbX05cTRCow6fHS5lief4MbbXd4coK2rgjZ6gSW9runl65p7yus74RnwIheaDgyxKgKLovi%2Ba5SWzDyYEBUPu8tSAAR%2Fym5wVWL5HHJqZ5%2Bn8UkgUQ53TyQPKnxh7h3B28OBcBlGI51DnsgV0dODIOiG%2BgnFFGIWhy5CZpJlVycajRu%2BqoNLETdZSsWWxaSHK71xwEqjYzQAC%2FIS9wTZJGW%2FuItCdDtgvKqxAjeWLELNDczmwfYPcHHic6CfkHA3PAf7Gfr4VafbWUJ1R7X04Uawityx%2FeCnYFmj5UJcw2n37%2BOwy7%2FhyFFh88PdL9jPH2UwZdPKGKFR0eDc4qyqnG2yDQLMlypzEtmlfUndybViQZ7SpuZ%2BnB%2Fr8dwb%2Bf2L0mDGg5m%2FURAXnUlG13fUaKaQ8ELtpV8bOpfvZ7tUnpBsirtfPE0KVXJRQIsBLs8rzFxj4X%2FWSVpNgfzYpsWlBkjgMLIU0KngO8dbSXDG9ymJnJrLQR0C4FQsjBepYIEcsnzm3TEPMovBHLwh8E%2BKL9npdCIGUJqAfYwj6t184eAfdzDhicenYzpd9mTxMKzIxb8GOqUBBbLWkw7AM9QSQ57lfOJztMGRVicDc27U2LUMMH6FJ8Xvj3r%2Bkxs%2BLtX530kcoaICIkhK0tbmXGW8EcO00uueS7kYG%2FrTGg5lnHJjIdqiTNYjvAZL%2FsWc5RDNvIyzDBrtmFZ1C2cNuZjFmuchww3FrbvzhsjPFXWE06l8j860EW5MBISWtbj0xIf7M5EbsQFbKXePJ6gHTKaBe6HCcaUA52mNTwua&X-Amz-Signature=35287301529f7dcad61bf4b3a333054695c468c48dd91cf667b6e64c59a886d3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EENXKWI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEBuBTBWJmfHDXkRxZtmmvsP0KjBorRNq0gNrwHHztnAiEAtUXcplxvG1PN1GBzAb15ZKzVZig2BmHlVsT6b%2BURMIAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDN9%2BPU6giCoZgdahESrcA1QMy8zw1T8hjqq3ax%2Bsf22JkCXkRq59nO%2FRqh%2BcL1nPfT%2BjDgvxDqqgxcyjBfPnRbX05cTRCow6fHS5lief4MbbXd4coK2rgjZ6gSW9runl65p7yus74RnwIheaDgyxKgKLovi%2Ba5SWzDyYEBUPu8tSAAR%2Fym5wVWL5HHJqZ5%2Bn8UkgUQ53TyQPKnxh7h3B28OBcBlGI51DnsgV0dODIOiG%2BgnFFGIWhy5CZpJlVycajRu%2BqoNLETdZSsWWxaSHK71xwEqjYzQAC%2FIS9wTZJGW%2FuItCdDtgvKqxAjeWLELNDczmwfYPcHHic6CfkHA3PAf7Gfr4VafbWUJ1R7X04Uawityx%2FeCnYFmj5UJcw2n37%2BOwy7%2FhyFFh88PdL9jPH2UwZdPKGKFR0eDc4qyqnG2yDQLMlypzEtmlfUndybViQZ7SpuZ%2BnB%2Fr8dwb%2Bf2L0mDGg5m%2FURAXnUlG13fUaKaQ8ELtpV8bOpfvZ7tUnpBsirtfPE0KVXJRQIsBLs8rzFxj4X%2FWSVpNgfzYpsWlBkjgMLIU0KngO8dbSXDG9ymJnJrLQR0C4FQsjBepYIEcsnzm3TEPMovBHLwh8E%2BKL9npdCIGUJqAfYwj6t184eAfdzDhicenYzpd9mTxMKzIxb8GOqUBBbLWkw7AM9QSQ57lfOJztMGRVicDc27U2LUMMH6FJ8Xvj3r%2Bkxs%2BLtX530kcoaICIkhK0tbmXGW8EcO00uueS7kYG%2FrTGg5lnHJjIdqiTNYjvAZL%2FsWc5RDNvIyzDBrtmFZ1C2cNuZjFmuchww3FrbvzhsjPFXWE06l8j860EW5MBISWtbj0xIf7M5EbsQFbKXePJ6gHTKaBe6HCcaUA52mNTwua&X-Amz-Signature=080228a925b474aaff2d48467aa6982152afcf32ec3fb9e9580461c46bc04510&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EENXKWI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEBuBTBWJmfHDXkRxZtmmvsP0KjBorRNq0gNrwHHztnAiEAtUXcplxvG1PN1GBzAb15ZKzVZig2BmHlVsT6b%2BURMIAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDN9%2BPU6giCoZgdahESrcA1QMy8zw1T8hjqq3ax%2Bsf22JkCXkRq59nO%2FRqh%2BcL1nPfT%2BjDgvxDqqgxcyjBfPnRbX05cTRCow6fHS5lief4MbbXd4coK2rgjZ6gSW9runl65p7yus74RnwIheaDgyxKgKLovi%2Ba5SWzDyYEBUPu8tSAAR%2Fym5wVWL5HHJqZ5%2Bn8UkgUQ53TyQPKnxh7h3B28OBcBlGI51DnsgV0dODIOiG%2BgnFFGIWhy5CZpJlVycajRu%2BqoNLETdZSsWWxaSHK71xwEqjYzQAC%2FIS9wTZJGW%2FuItCdDtgvKqxAjeWLELNDczmwfYPcHHic6CfkHA3PAf7Gfr4VafbWUJ1R7X04Uawityx%2FeCnYFmj5UJcw2n37%2BOwy7%2FhyFFh88PdL9jPH2UwZdPKGKFR0eDc4qyqnG2yDQLMlypzEtmlfUndybViQZ7SpuZ%2BnB%2Fr8dwb%2Bf2L0mDGg5m%2FURAXnUlG13fUaKaQ8ELtpV8bOpfvZ7tUnpBsirtfPE0KVXJRQIsBLs8rzFxj4X%2FWSVpNgfzYpsWlBkjgMLIU0KngO8dbSXDG9ymJnJrLQR0C4FQsjBepYIEcsnzm3TEPMovBHLwh8E%2BKL9npdCIGUJqAfYwj6t184eAfdzDhicenYzpd9mTxMKzIxb8GOqUBBbLWkw7AM9QSQ57lfOJztMGRVicDc27U2LUMMH6FJ8Xvj3r%2Bkxs%2BLtX530kcoaICIkhK0tbmXGW8EcO00uueS7kYG%2FrTGg5lnHJjIdqiTNYjvAZL%2FsWc5RDNvIyzDBrtmFZ1C2cNuZjFmuchww3FrbvzhsjPFXWE06l8j860EW5MBISWtbj0xIf7M5EbsQFbKXePJ6gHTKaBe6HCcaUA52mNTwua&X-Amz-Signature=f8498eb4cdf25ebb5c8b8bfc9503ce7995c0ad1e31d19b9e507637f027909433&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EENXKWI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEBuBTBWJmfHDXkRxZtmmvsP0KjBorRNq0gNrwHHztnAiEAtUXcplxvG1PN1GBzAb15ZKzVZig2BmHlVsT6b%2BURMIAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDN9%2BPU6giCoZgdahESrcA1QMy8zw1T8hjqq3ax%2Bsf22JkCXkRq59nO%2FRqh%2BcL1nPfT%2BjDgvxDqqgxcyjBfPnRbX05cTRCow6fHS5lief4MbbXd4coK2rgjZ6gSW9runl65p7yus74RnwIheaDgyxKgKLovi%2Ba5SWzDyYEBUPu8tSAAR%2Fym5wVWL5HHJqZ5%2Bn8UkgUQ53TyQPKnxh7h3B28OBcBlGI51DnsgV0dODIOiG%2BgnFFGIWhy5CZpJlVycajRu%2BqoNLETdZSsWWxaSHK71xwEqjYzQAC%2FIS9wTZJGW%2FuItCdDtgvKqxAjeWLELNDczmwfYPcHHic6CfkHA3PAf7Gfr4VafbWUJ1R7X04Uawityx%2FeCnYFmj5UJcw2n37%2BOwy7%2FhyFFh88PdL9jPH2UwZdPKGKFR0eDc4qyqnG2yDQLMlypzEtmlfUndybViQZ7SpuZ%2BnB%2Fr8dwb%2Bf2L0mDGg5m%2FURAXnUlG13fUaKaQ8ELtpV8bOpfvZ7tUnpBsirtfPE0KVXJRQIsBLs8rzFxj4X%2FWSVpNgfzYpsWlBkjgMLIU0KngO8dbSXDG9ymJnJrLQR0C4FQsjBepYIEcsnzm3TEPMovBHLwh8E%2BKL9npdCIGUJqAfYwj6t184eAfdzDhicenYzpd9mTxMKzIxb8GOqUBBbLWkw7AM9QSQ57lfOJztMGRVicDc27U2LUMMH6FJ8Xvj3r%2Bkxs%2BLtX530kcoaICIkhK0tbmXGW8EcO00uueS7kYG%2FrTGg5lnHJjIdqiTNYjvAZL%2FsWc5RDNvIyzDBrtmFZ1C2cNuZjFmuchww3FrbvzhsjPFXWE06l8j860EW5MBISWtbj0xIf7M5EbsQFbKXePJ6gHTKaBe6HCcaUA52mNTwua&X-Amz-Signature=ed01d553d1796105f735b2a199e3a004cef443b4d44d61118c24dcdeff25b1a2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
