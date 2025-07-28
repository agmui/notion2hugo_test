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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5F7HN7I%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD822t8hYhBuOk2IQSb0CtKd84mZTO6qsS4Pm8svBcrBAIgaARS2zK%2Fgor7YEynvM9qK8pdQkbvwJ0ZqdcYEKpmW3MqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6pBALih6Wbk2H5zCrcA3mXS6nFMkJYPMwmrU33P%2Byn2MzcrQkxCs%2F4nbN%2FveaDfiQacTVkthbRijZpoD%2FaIVZjftd1TXpirmkSB0ZZBYxDCeq0hDdJx06bvbSekxUyke9TKItLdKmkZXSMsQGpxOey6p76u8aP4XJQHsNCG4VGIj9Ei3%2F9JG%2B2ayaGkDZZdKseRtX9sFH9RmSwKjlU11tAajRmf1CIuYixgLcjTNcvVE1zSa7IRSYXqMMxyBjbxY5PnmGUWXLRJvn4BZ3u%2BoiSFM4hNLCcbzI23I%2FxsuhHvDDnROntk3yXZ%2BLTmOjF5tSOcMs4Vn%2F7G%2FPpeXATUT2vqx2de39rAuMAWvIxm%2B7vtLkWyV1iDB%2ByqtmWCB852KbyBnVCDrq135z1iKXbyP7QMd1crfQWQFOOv5CRugtqD6ql5g1%2Fp9mZp3GiitqWW59gImW4%2B0LEXAN3ncVbc2FQQs1nT%2BGa9jMM4RxSc%2F3xnDZmcGYpUlhXSJhiT20HIFj8og8I5NcXzPIwGhNorP58mq1Z5%2Fcfdm3buqIpgYvIYgxAGJIxswkqDpsjWz7Y9O4gXYP3qwC4VUMtaZPWQr9qRiQb081XeiW1rkwoeYw%2FMXJ2t7DQAvfFvGT%2FRFSs%2F%2FuDeVU5XGHNEfBXMM%2B0ncQGOqUBdo%2Bd4BmgC577zskf0XA5as%2FIEtPLMgt%2Bpq%2FxS%2FzmL6f1HZNTLRGNUhV1Q2VVe5mnjelzB5C405kAy922W7%2BiveC3oh8UjcN7xtcQiV7xixMeu90PGJcyH2PtXGeePT0qWyoWmEbB5DuNwOh%2BU7VK2r0XrQJGzqWB3vqaHsvTdI98ZQ2QYqZhqi%2FTOOFSL0DORlRtL7S5M6CVuUKKbX3w17RHPstZ&X-Amz-Signature=0aed48d62f57f1d144fc2f3fe8c5b8e4fd5e8231186de1b1415d785d9da9aa30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5F7HN7I%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD822t8hYhBuOk2IQSb0CtKd84mZTO6qsS4Pm8svBcrBAIgaARS2zK%2Fgor7YEynvM9qK8pdQkbvwJ0ZqdcYEKpmW3MqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6pBALih6Wbk2H5zCrcA3mXS6nFMkJYPMwmrU33P%2Byn2MzcrQkxCs%2F4nbN%2FveaDfiQacTVkthbRijZpoD%2FaIVZjftd1TXpirmkSB0ZZBYxDCeq0hDdJx06bvbSekxUyke9TKItLdKmkZXSMsQGpxOey6p76u8aP4XJQHsNCG4VGIj9Ei3%2F9JG%2B2ayaGkDZZdKseRtX9sFH9RmSwKjlU11tAajRmf1CIuYixgLcjTNcvVE1zSa7IRSYXqMMxyBjbxY5PnmGUWXLRJvn4BZ3u%2BoiSFM4hNLCcbzI23I%2FxsuhHvDDnROntk3yXZ%2BLTmOjF5tSOcMs4Vn%2F7G%2FPpeXATUT2vqx2de39rAuMAWvIxm%2B7vtLkWyV1iDB%2ByqtmWCB852KbyBnVCDrq135z1iKXbyP7QMd1crfQWQFOOv5CRugtqD6ql5g1%2Fp9mZp3GiitqWW59gImW4%2B0LEXAN3ncVbc2FQQs1nT%2BGa9jMM4RxSc%2F3xnDZmcGYpUlhXSJhiT20HIFj8og8I5NcXzPIwGhNorP58mq1Z5%2Fcfdm3buqIpgYvIYgxAGJIxswkqDpsjWz7Y9O4gXYP3qwC4VUMtaZPWQr9qRiQb081XeiW1rkwoeYw%2FMXJ2t7DQAvfFvGT%2FRFSs%2F%2FuDeVU5XGHNEfBXMM%2B0ncQGOqUBdo%2Bd4BmgC577zskf0XA5as%2FIEtPLMgt%2Bpq%2FxS%2FzmL6f1HZNTLRGNUhV1Q2VVe5mnjelzB5C405kAy922W7%2BiveC3oh8UjcN7xtcQiV7xixMeu90PGJcyH2PtXGeePT0qWyoWmEbB5DuNwOh%2BU7VK2r0XrQJGzqWB3vqaHsvTdI98ZQ2QYqZhqi%2FTOOFSL0DORlRtL7S5M6CVuUKKbX3w17RHPstZ&X-Amz-Signature=fb3e05b2dee5ae5f8dc587bfa2281554c8970ef493fa9d1c48825ece854c3e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5F7HN7I%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD822t8hYhBuOk2IQSb0CtKd84mZTO6qsS4Pm8svBcrBAIgaARS2zK%2Fgor7YEynvM9qK8pdQkbvwJ0ZqdcYEKpmW3MqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6pBALih6Wbk2H5zCrcA3mXS6nFMkJYPMwmrU33P%2Byn2MzcrQkxCs%2F4nbN%2FveaDfiQacTVkthbRijZpoD%2FaIVZjftd1TXpirmkSB0ZZBYxDCeq0hDdJx06bvbSekxUyke9TKItLdKmkZXSMsQGpxOey6p76u8aP4XJQHsNCG4VGIj9Ei3%2F9JG%2B2ayaGkDZZdKseRtX9sFH9RmSwKjlU11tAajRmf1CIuYixgLcjTNcvVE1zSa7IRSYXqMMxyBjbxY5PnmGUWXLRJvn4BZ3u%2BoiSFM4hNLCcbzI23I%2FxsuhHvDDnROntk3yXZ%2BLTmOjF5tSOcMs4Vn%2F7G%2FPpeXATUT2vqx2de39rAuMAWvIxm%2B7vtLkWyV1iDB%2ByqtmWCB852KbyBnVCDrq135z1iKXbyP7QMd1crfQWQFOOv5CRugtqD6ql5g1%2Fp9mZp3GiitqWW59gImW4%2B0LEXAN3ncVbc2FQQs1nT%2BGa9jMM4RxSc%2F3xnDZmcGYpUlhXSJhiT20HIFj8og8I5NcXzPIwGhNorP58mq1Z5%2Fcfdm3buqIpgYvIYgxAGJIxswkqDpsjWz7Y9O4gXYP3qwC4VUMtaZPWQr9qRiQb081XeiW1rkwoeYw%2FMXJ2t7DQAvfFvGT%2FRFSs%2F%2FuDeVU5XGHNEfBXMM%2B0ncQGOqUBdo%2Bd4BmgC577zskf0XA5as%2FIEtPLMgt%2Bpq%2FxS%2FzmL6f1HZNTLRGNUhV1Q2VVe5mnjelzB5C405kAy922W7%2BiveC3oh8UjcN7xtcQiV7xixMeu90PGJcyH2PtXGeePT0qWyoWmEbB5DuNwOh%2BU7VK2r0XrQJGzqWB3vqaHsvTdI98ZQ2QYqZhqi%2FTOOFSL0DORlRtL7S5M6CVuUKKbX3w17RHPstZ&X-Amz-Signature=45f6ab394b9588702ae176fe58d6c732e32528bda68bca825750d49a36617d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5F7HN7I%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD822t8hYhBuOk2IQSb0CtKd84mZTO6qsS4Pm8svBcrBAIgaARS2zK%2Fgor7YEynvM9qK8pdQkbvwJ0ZqdcYEKpmW3MqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6pBALih6Wbk2H5zCrcA3mXS6nFMkJYPMwmrU33P%2Byn2MzcrQkxCs%2F4nbN%2FveaDfiQacTVkthbRijZpoD%2FaIVZjftd1TXpirmkSB0ZZBYxDCeq0hDdJx06bvbSekxUyke9TKItLdKmkZXSMsQGpxOey6p76u8aP4XJQHsNCG4VGIj9Ei3%2F9JG%2B2ayaGkDZZdKseRtX9sFH9RmSwKjlU11tAajRmf1CIuYixgLcjTNcvVE1zSa7IRSYXqMMxyBjbxY5PnmGUWXLRJvn4BZ3u%2BoiSFM4hNLCcbzI23I%2FxsuhHvDDnROntk3yXZ%2BLTmOjF5tSOcMs4Vn%2F7G%2FPpeXATUT2vqx2de39rAuMAWvIxm%2B7vtLkWyV1iDB%2ByqtmWCB852KbyBnVCDrq135z1iKXbyP7QMd1crfQWQFOOv5CRugtqD6ql5g1%2Fp9mZp3GiitqWW59gImW4%2B0LEXAN3ncVbc2FQQs1nT%2BGa9jMM4RxSc%2F3xnDZmcGYpUlhXSJhiT20HIFj8og8I5NcXzPIwGhNorP58mq1Z5%2Fcfdm3buqIpgYvIYgxAGJIxswkqDpsjWz7Y9O4gXYP3qwC4VUMtaZPWQr9qRiQb081XeiW1rkwoeYw%2FMXJ2t7DQAvfFvGT%2FRFSs%2F%2FuDeVU5XGHNEfBXMM%2B0ncQGOqUBdo%2Bd4BmgC577zskf0XA5as%2FIEtPLMgt%2Bpq%2FxS%2FzmL6f1HZNTLRGNUhV1Q2VVe5mnjelzB5C405kAy922W7%2BiveC3oh8UjcN7xtcQiV7xixMeu90PGJcyH2PtXGeePT0qWyoWmEbB5DuNwOh%2BU7VK2r0XrQJGzqWB3vqaHsvTdI98ZQ2QYqZhqi%2FTOOFSL0DORlRtL7S5M6CVuUKKbX3w17RHPstZ&X-Amz-Signature=5f2189312ed59e769d481f0551be53ce0cb4aa14a2a6ef321efc7ae7fcddcd9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5F7HN7I%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD822t8hYhBuOk2IQSb0CtKd84mZTO6qsS4Pm8svBcrBAIgaARS2zK%2Fgor7YEynvM9qK8pdQkbvwJ0ZqdcYEKpmW3MqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6pBALih6Wbk2H5zCrcA3mXS6nFMkJYPMwmrU33P%2Byn2MzcrQkxCs%2F4nbN%2FveaDfiQacTVkthbRijZpoD%2FaIVZjftd1TXpirmkSB0ZZBYxDCeq0hDdJx06bvbSekxUyke9TKItLdKmkZXSMsQGpxOey6p76u8aP4XJQHsNCG4VGIj9Ei3%2F9JG%2B2ayaGkDZZdKseRtX9sFH9RmSwKjlU11tAajRmf1CIuYixgLcjTNcvVE1zSa7IRSYXqMMxyBjbxY5PnmGUWXLRJvn4BZ3u%2BoiSFM4hNLCcbzI23I%2FxsuhHvDDnROntk3yXZ%2BLTmOjF5tSOcMs4Vn%2F7G%2FPpeXATUT2vqx2de39rAuMAWvIxm%2B7vtLkWyV1iDB%2ByqtmWCB852KbyBnVCDrq135z1iKXbyP7QMd1crfQWQFOOv5CRugtqD6ql5g1%2Fp9mZp3GiitqWW59gImW4%2B0LEXAN3ncVbc2FQQs1nT%2BGa9jMM4RxSc%2F3xnDZmcGYpUlhXSJhiT20HIFj8og8I5NcXzPIwGhNorP58mq1Z5%2Fcfdm3buqIpgYvIYgxAGJIxswkqDpsjWz7Y9O4gXYP3qwC4VUMtaZPWQr9qRiQb081XeiW1rkwoeYw%2FMXJ2t7DQAvfFvGT%2FRFSs%2F%2FuDeVU5XGHNEfBXMM%2B0ncQGOqUBdo%2Bd4BmgC577zskf0XA5as%2FIEtPLMgt%2Bpq%2FxS%2FzmL6f1HZNTLRGNUhV1Q2VVe5mnjelzB5C405kAy922W7%2BiveC3oh8UjcN7xtcQiV7xixMeu90PGJcyH2PtXGeePT0qWyoWmEbB5DuNwOh%2BU7VK2r0XrQJGzqWB3vqaHsvTdI98ZQ2QYqZhqi%2FTOOFSL0DORlRtL7S5M6CVuUKKbX3w17RHPstZ&X-Amz-Signature=2ed487212535760b8573c482a26e00236f2baf58b4dc2e95f10a6c1c10292f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5F7HN7I%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD822t8hYhBuOk2IQSb0CtKd84mZTO6qsS4Pm8svBcrBAIgaARS2zK%2Fgor7YEynvM9qK8pdQkbvwJ0ZqdcYEKpmW3MqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6pBALih6Wbk2H5zCrcA3mXS6nFMkJYPMwmrU33P%2Byn2MzcrQkxCs%2F4nbN%2FveaDfiQacTVkthbRijZpoD%2FaIVZjftd1TXpirmkSB0ZZBYxDCeq0hDdJx06bvbSekxUyke9TKItLdKmkZXSMsQGpxOey6p76u8aP4XJQHsNCG4VGIj9Ei3%2F9JG%2B2ayaGkDZZdKseRtX9sFH9RmSwKjlU11tAajRmf1CIuYixgLcjTNcvVE1zSa7IRSYXqMMxyBjbxY5PnmGUWXLRJvn4BZ3u%2BoiSFM4hNLCcbzI23I%2FxsuhHvDDnROntk3yXZ%2BLTmOjF5tSOcMs4Vn%2F7G%2FPpeXATUT2vqx2de39rAuMAWvIxm%2B7vtLkWyV1iDB%2ByqtmWCB852KbyBnVCDrq135z1iKXbyP7QMd1crfQWQFOOv5CRugtqD6ql5g1%2Fp9mZp3GiitqWW59gImW4%2B0LEXAN3ncVbc2FQQs1nT%2BGa9jMM4RxSc%2F3xnDZmcGYpUlhXSJhiT20HIFj8og8I5NcXzPIwGhNorP58mq1Z5%2Fcfdm3buqIpgYvIYgxAGJIxswkqDpsjWz7Y9O4gXYP3qwC4VUMtaZPWQr9qRiQb081XeiW1rkwoeYw%2FMXJ2t7DQAvfFvGT%2FRFSs%2F%2FuDeVU5XGHNEfBXMM%2B0ncQGOqUBdo%2Bd4BmgC577zskf0XA5as%2FIEtPLMgt%2Bpq%2FxS%2FzmL6f1HZNTLRGNUhV1Q2VVe5mnjelzB5C405kAy922W7%2BiveC3oh8UjcN7xtcQiV7xixMeu90PGJcyH2PtXGeePT0qWyoWmEbB5DuNwOh%2BU7VK2r0XrQJGzqWB3vqaHsvTdI98ZQ2QYqZhqi%2FTOOFSL0DORlRtL7S5M6CVuUKKbX3w17RHPstZ&X-Amz-Signature=f2532801b289ec782d67479129a2d2f76ea119cb4fe75f1c41ae63c87f724983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5F7HN7I%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD822t8hYhBuOk2IQSb0CtKd84mZTO6qsS4Pm8svBcrBAIgaARS2zK%2Fgor7YEynvM9qK8pdQkbvwJ0ZqdcYEKpmW3MqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6pBALih6Wbk2H5zCrcA3mXS6nFMkJYPMwmrU33P%2Byn2MzcrQkxCs%2F4nbN%2FveaDfiQacTVkthbRijZpoD%2FaIVZjftd1TXpirmkSB0ZZBYxDCeq0hDdJx06bvbSekxUyke9TKItLdKmkZXSMsQGpxOey6p76u8aP4XJQHsNCG4VGIj9Ei3%2F9JG%2B2ayaGkDZZdKseRtX9sFH9RmSwKjlU11tAajRmf1CIuYixgLcjTNcvVE1zSa7IRSYXqMMxyBjbxY5PnmGUWXLRJvn4BZ3u%2BoiSFM4hNLCcbzI23I%2FxsuhHvDDnROntk3yXZ%2BLTmOjF5tSOcMs4Vn%2F7G%2FPpeXATUT2vqx2de39rAuMAWvIxm%2B7vtLkWyV1iDB%2ByqtmWCB852KbyBnVCDrq135z1iKXbyP7QMd1crfQWQFOOv5CRugtqD6ql5g1%2Fp9mZp3GiitqWW59gImW4%2B0LEXAN3ncVbc2FQQs1nT%2BGa9jMM4RxSc%2F3xnDZmcGYpUlhXSJhiT20HIFj8og8I5NcXzPIwGhNorP58mq1Z5%2Fcfdm3buqIpgYvIYgxAGJIxswkqDpsjWz7Y9O4gXYP3qwC4VUMtaZPWQr9qRiQb081XeiW1rkwoeYw%2FMXJ2t7DQAvfFvGT%2FRFSs%2F%2FuDeVU5XGHNEfBXMM%2B0ncQGOqUBdo%2Bd4BmgC577zskf0XA5as%2FIEtPLMgt%2Bpq%2FxS%2FzmL6f1HZNTLRGNUhV1Q2VVe5mnjelzB5C405kAy922W7%2BiveC3oh8UjcN7xtcQiV7xixMeu90PGJcyH2PtXGeePT0qWyoWmEbB5DuNwOh%2BU7VK2r0XrQJGzqWB3vqaHsvTdI98ZQ2QYqZhqi%2FTOOFSL0DORlRtL7S5M6CVuUKKbX3w17RHPstZ&X-Amz-Signature=4d687f4788bba952930caa006fa2f85ecb9ed3be6a90e4f8e4d36f653b0081d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
