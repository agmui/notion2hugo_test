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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBQIQC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNUXaeG37MBD2yJP%2FRpDe0d2f0jpnIKBVRvZZ9Kg80DAiEA6FpJ4NUkbzKOf5TMN6SBKb9j0BGdo5RSKkcMjZN4Fo4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkf%2B5DYfFyUpLMRWCrcA9ZkTDlVwUcl5e6URufT3lBKF1vJp9MG%2FlgCl6AGE0KyB5aBAqVlAhn97GAQF542aeSi2yhOmvF7YAZaYQ6u%2BgWTn7i6iOcRYiakIh67tB4FNhtb9bJ1ZXrsXB6JJ5Fa3ZBhB71%2FD42rrw8KbC7soBtONA0FErz7N%2BY9HfHNFewuqPIXAm%2FtUvENLK4v8VPU2Mnrsmq8DdyzVlxNb54XJR7N%2FcIpguA3QNJOK15MIzrCUBjWLTocTx3V%2FsR6Qa3JDMwnOLkOCQNCHImDKdQm5Wk89fO39MS77mpwrgdifp143t95cuM1LBUZTTGYJ1frbhgec3rN4AkMwTyhQCWvbY%2BKFocEp%2BRfSJTIJnaKJRHXezymWbnTaWmTTSEMg8BvfYx913oJXfbNd%2FJr9EbWr1swLEptRBbEXbi9x32Nvw%2BT9%2BjdU7QQiTRu5467DH0MfaHPcG%2FjdPm1ieiFsbCrfFU3%2BdxzL0KwyyK7k3iRVZA8d3Lkh%2F6QST5vH6qvlA6VJ4BtNGVgyX6LyCEcvA%2FolJVDnLWVZLOU8oB75wWLymsEo316beisTYqTzCvX0DVC5zBKa1U9w9YKww40tAuj11Q4LSCD50b66YhmQp%2FrmUowZAVZou5PBCiUbhq9MKKenr4GOqUB7yT9fvLSCEAWo7I7EmL5YIqCUI0KcmIOa%2Fff9Du1NSMbqfe%2FEZ4ESJAq0sUSU2%2B2Vw9caJIK4gI3HF9Wu%2F9QJ2LvRfr6ooiNIe6nPPnhnHyeJSs6TyHWgAG8kDTtjSmCYFulOR4H5jr1vcwmuRzLRTjzD2HMScpieUT4jrH0fFwizfVcypi8vUvpKdjggQe8a%2FGEXdnSNaevHH51IIZO46tF02o3&X-Amz-Signature=50c42456bf27398827fbd1696ec0e0b69b7d8fbd959984a2c022de229330e869&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBQIQC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNUXaeG37MBD2yJP%2FRpDe0d2f0jpnIKBVRvZZ9Kg80DAiEA6FpJ4NUkbzKOf5TMN6SBKb9j0BGdo5RSKkcMjZN4Fo4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkf%2B5DYfFyUpLMRWCrcA9ZkTDlVwUcl5e6URufT3lBKF1vJp9MG%2FlgCl6AGE0KyB5aBAqVlAhn97GAQF542aeSi2yhOmvF7YAZaYQ6u%2BgWTn7i6iOcRYiakIh67tB4FNhtb9bJ1ZXrsXB6JJ5Fa3ZBhB71%2FD42rrw8KbC7soBtONA0FErz7N%2BY9HfHNFewuqPIXAm%2FtUvENLK4v8VPU2Mnrsmq8DdyzVlxNb54XJR7N%2FcIpguA3QNJOK15MIzrCUBjWLTocTx3V%2FsR6Qa3JDMwnOLkOCQNCHImDKdQm5Wk89fO39MS77mpwrgdifp143t95cuM1LBUZTTGYJ1frbhgec3rN4AkMwTyhQCWvbY%2BKFocEp%2BRfSJTIJnaKJRHXezymWbnTaWmTTSEMg8BvfYx913oJXfbNd%2FJr9EbWr1swLEptRBbEXbi9x32Nvw%2BT9%2BjdU7QQiTRu5467DH0MfaHPcG%2FjdPm1ieiFsbCrfFU3%2BdxzL0KwyyK7k3iRVZA8d3Lkh%2F6QST5vH6qvlA6VJ4BtNGVgyX6LyCEcvA%2FolJVDnLWVZLOU8oB75wWLymsEo316beisTYqTzCvX0DVC5zBKa1U9w9YKww40tAuj11Q4LSCD50b66YhmQp%2FrmUowZAVZou5PBCiUbhq9MKKenr4GOqUB7yT9fvLSCEAWo7I7EmL5YIqCUI0KcmIOa%2Fff9Du1NSMbqfe%2FEZ4ESJAq0sUSU2%2B2Vw9caJIK4gI3HF9Wu%2F9QJ2LvRfr6ooiNIe6nPPnhnHyeJSs6TyHWgAG8kDTtjSmCYFulOR4H5jr1vcwmuRzLRTjzD2HMScpieUT4jrH0fFwizfVcypi8vUvpKdjggQe8a%2FGEXdnSNaevHH51IIZO46tF02o3&X-Amz-Signature=ab97bc9d75704229a34cbc2ac500d0f78421f7121dfb9b6a4cc79c50e100fb56&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBQIQC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNUXaeG37MBD2yJP%2FRpDe0d2f0jpnIKBVRvZZ9Kg80DAiEA6FpJ4NUkbzKOf5TMN6SBKb9j0BGdo5RSKkcMjZN4Fo4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkf%2B5DYfFyUpLMRWCrcA9ZkTDlVwUcl5e6URufT3lBKF1vJp9MG%2FlgCl6AGE0KyB5aBAqVlAhn97GAQF542aeSi2yhOmvF7YAZaYQ6u%2BgWTn7i6iOcRYiakIh67tB4FNhtb9bJ1ZXrsXB6JJ5Fa3ZBhB71%2FD42rrw8KbC7soBtONA0FErz7N%2BY9HfHNFewuqPIXAm%2FtUvENLK4v8VPU2Mnrsmq8DdyzVlxNb54XJR7N%2FcIpguA3QNJOK15MIzrCUBjWLTocTx3V%2FsR6Qa3JDMwnOLkOCQNCHImDKdQm5Wk89fO39MS77mpwrgdifp143t95cuM1LBUZTTGYJ1frbhgec3rN4AkMwTyhQCWvbY%2BKFocEp%2BRfSJTIJnaKJRHXezymWbnTaWmTTSEMg8BvfYx913oJXfbNd%2FJr9EbWr1swLEptRBbEXbi9x32Nvw%2BT9%2BjdU7QQiTRu5467DH0MfaHPcG%2FjdPm1ieiFsbCrfFU3%2BdxzL0KwyyK7k3iRVZA8d3Lkh%2F6QST5vH6qvlA6VJ4BtNGVgyX6LyCEcvA%2FolJVDnLWVZLOU8oB75wWLymsEo316beisTYqTzCvX0DVC5zBKa1U9w9YKww40tAuj11Q4LSCD50b66YhmQp%2FrmUowZAVZou5PBCiUbhq9MKKenr4GOqUB7yT9fvLSCEAWo7I7EmL5YIqCUI0KcmIOa%2Fff9Du1NSMbqfe%2FEZ4ESJAq0sUSU2%2B2Vw9caJIK4gI3HF9Wu%2F9QJ2LvRfr6ooiNIe6nPPnhnHyeJSs6TyHWgAG8kDTtjSmCYFulOR4H5jr1vcwmuRzLRTjzD2HMScpieUT4jrH0fFwizfVcypi8vUvpKdjggQe8a%2FGEXdnSNaevHH51IIZO46tF02o3&X-Amz-Signature=8413a73f718a5e59f31341fdcbd03c9fe836cd7c2719f405d3302fad2e57b5f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBQIQC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNUXaeG37MBD2yJP%2FRpDe0d2f0jpnIKBVRvZZ9Kg80DAiEA6FpJ4NUkbzKOf5TMN6SBKb9j0BGdo5RSKkcMjZN4Fo4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkf%2B5DYfFyUpLMRWCrcA9ZkTDlVwUcl5e6URufT3lBKF1vJp9MG%2FlgCl6AGE0KyB5aBAqVlAhn97GAQF542aeSi2yhOmvF7YAZaYQ6u%2BgWTn7i6iOcRYiakIh67tB4FNhtb9bJ1ZXrsXB6JJ5Fa3ZBhB71%2FD42rrw8KbC7soBtONA0FErz7N%2BY9HfHNFewuqPIXAm%2FtUvENLK4v8VPU2Mnrsmq8DdyzVlxNb54XJR7N%2FcIpguA3QNJOK15MIzrCUBjWLTocTx3V%2FsR6Qa3JDMwnOLkOCQNCHImDKdQm5Wk89fO39MS77mpwrgdifp143t95cuM1LBUZTTGYJ1frbhgec3rN4AkMwTyhQCWvbY%2BKFocEp%2BRfSJTIJnaKJRHXezymWbnTaWmTTSEMg8BvfYx913oJXfbNd%2FJr9EbWr1swLEptRBbEXbi9x32Nvw%2BT9%2BjdU7QQiTRu5467DH0MfaHPcG%2FjdPm1ieiFsbCrfFU3%2BdxzL0KwyyK7k3iRVZA8d3Lkh%2F6QST5vH6qvlA6VJ4BtNGVgyX6LyCEcvA%2FolJVDnLWVZLOU8oB75wWLymsEo316beisTYqTzCvX0DVC5zBKa1U9w9YKww40tAuj11Q4LSCD50b66YhmQp%2FrmUowZAVZou5PBCiUbhq9MKKenr4GOqUB7yT9fvLSCEAWo7I7EmL5YIqCUI0KcmIOa%2Fff9Du1NSMbqfe%2FEZ4ESJAq0sUSU2%2B2Vw9caJIK4gI3HF9Wu%2F9QJ2LvRfr6ooiNIe6nPPnhnHyeJSs6TyHWgAG8kDTtjSmCYFulOR4H5jr1vcwmuRzLRTjzD2HMScpieUT4jrH0fFwizfVcypi8vUvpKdjggQe8a%2FGEXdnSNaevHH51IIZO46tF02o3&X-Amz-Signature=34198cea0a6b396ecae76cd7a272450283e2fb2366a29070feff417afaf587d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBQIQC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNUXaeG37MBD2yJP%2FRpDe0d2f0jpnIKBVRvZZ9Kg80DAiEA6FpJ4NUkbzKOf5TMN6SBKb9j0BGdo5RSKkcMjZN4Fo4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkf%2B5DYfFyUpLMRWCrcA9ZkTDlVwUcl5e6URufT3lBKF1vJp9MG%2FlgCl6AGE0KyB5aBAqVlAhn97GAQF542aeSi2yhOmvF7YAZaYQ6u%2BgWTn7i6iOcRYiakIh67tB4FNhtb9bJ1ZXrsXB6JJ5Fa3ZBhB71%2FD42rrw8KbC7soBtONA0FErz7N%2BY9HfHNFewuqPIXAm%2FtUvENLK4v8VPU2Mnrsmq8DdyzVlxNb54XJR7N%2FcIpguA3QNJOK15MIzrCUBjWLTocTx3V%2FsR6Qa3JDMwnOLkOCQNCHImDKdQm5Wk89fO39MS77mpwrgdifp143t95cuM1LBUZTTGYJ1frbhgec3rN4AkMwTyhQCWvbY%2BKFocEp%2BRfSJTIJnaKJRHXezymWbnTaWmTTSEMg8BvfYx913oJXfbNd%2FJr9EbWr1swLEptRBbEXbi9x32Nvw%2BT9%2BjdU7QQiTRu5467DH0MfaHPcG%2FjdPm1ieiFsbCrfFU3%2BdxzL0KwyyK7k3iRVZA8d3Lkh%2F6QST5vH6qvlA6VJ4BtNGVgyX6LyCEcvA%2FolJVDnLWVZLOU8oB75wWLymsEo316beisTYqTzCvX0DVC5zBKa1U9w9YKww40tAuj11Q4LSCD50b66YhmQp%2FrmUowZAVZou5PBCiUbhq9MKKenr4GOqUB7yT9fvLSCEAWo7I7EmL5YIqCUI0KcmIOa%2Fff9Du1NSMbqfe%2FEZ4ESJAq0sUSU2%2B2Vw9caJIK4gI3HF9Wu%2F9QJ2LvRfr6ooiNIe6nPPnhnHyeJSs6TyHWgAG8kDTtjSmCYFulOR4H5jr1vcwmuRzLRTjzD2HMScpieUT4jrH0fFwizfVcypi8vUvpKdjggQe8a%2FGEXdnSNaevHH51IIZO46tF02o3&X-Amz-Signature=a6b05328f5041870c3f0f6052ea75bcdcd6e030f05cf36bad2da7c944ecfb4e8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBQIQC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNUXaeG37MBD2yJP%2FRpDe0d2f0jpnIKBVRvZZ9Kg80DAiEA6FpJ4NUkbzKOf5TMN6SBKb9j0BGdo5RSKkcMjZN4Fo4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkf%2B5DYfFyUpLMRWCrcA9ZkTDlVwUcl5e6URufT3lBKF1vJp9MG%2FlgCl6AGE0KyB5aBAqVlAhn97GAQF542aeSi2yhOmvF7YAZaYQ6u%2BgWTn7i6iOcRYiakIh67tB4FNhtb9bJ1ZXrsXB6JJ5Fa3ZBhB71%2FD42rrw8KbC7soBtONA0FErz7N%2BY9HfHNFewuqPIXAm%2FtUvENLK4v8VPU2Mnrsmq8DdyzVlxNb54XJR7N%2FcIpguA3QNJOK15MIzrCUBjWLTocTx3V%2FsR6Qa3JDMwnOLkOCQNCHImDKdQm5Wk89fO39MS77mpwrgdifp143t95cuM1LBUZTTGYJ1frbhgec3rN4AkMwTyhQCWvbY%2BKFocEp%2BRfSJTIJnaKJRHXezymWbnTaWmTTSEMg8BvfYx913oJXfbNd%2FJr9EbWr1swLEptRBbEXbi9x32Nvw%2BT9%2BjdU7QQiTRu5467DH0MfaHPcG%2FjdPm1ieiFsbCrfFU3%2BdxzL0KwyyK7k3iRVZA8d3Lkh%2F6QST5vH6qvlA6VJ4BtNGVgyX6LyCEcvA%2FolJVDnLWVZLOU8oB75wWLymsEo316beisTYqTzCvX0DVC5zBKa1U9w9YKww40tAuj11Q4LSCD50b66YhmQp%2FrmUowZAVZou5PBCiUbhq9MKKenr4GOqUB7yT9fvLSCEAWo7I7EmL5YIqCUI0KcmIOa%2Fff9Du1NSMbqfe%2FEZ4ESJAq0sUSU2%2B2Vw9caJIK4gI3HF9Wu%2F9QJ2LvRfr6ooiNIe6nPPnhnHyeJSs6TyHWgAG8kDTtjSmCYFulOR4H5jr1vcwmuRzLRTjzD2HMScpieUT4jrH0fFwizfVcypi8vUvpKdjggQe8a%2FGEXdnSNaevHH51IIZO46tF02o3&X-Amz-Signature=c32bb08b710a16ee34996dfdc3bfec70ddfe0d8d0eacf4ce258a06192dbd1f15&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBQIQC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNUXaeG37MBD2yJP%2FRpDe0d2f0jpnIKBVRvZZ9Kg80DAiEA6FpJ4NUkbzKOf5TMN6SBKb9j0BGdo5RSKkcMjZN4Fo4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkf%2B5DYfFyUpLMRWCrcA9ZkTDlVwUcl5e6URufT3lBKF1vJp9MG%2FlgCl6AGE0KyB5aBAqVlAhn97GAQF542aeSi2yhOmvF7YAZaYQ6u%2BgWTn7i6iOcRYiakIh67tB4FNhtb9bJ1ZXrsXB6JJ5Fa3ZBhB71%2FD42rrw8KbC7soBtONA0FErz7N%2BY9HfHNFewuqPIXAm%2FtUvENLK4v8VPU2Mnrsmq8DdyzVlxNb54XJR7N%2FcIpguA3QNJOK15MIzrCUBjWLTocTx3V%2FsR6Qa3JDMwnOLkOCQNCHImDKdQm5Wk89fO39MS77mpwrgdifp143t95cuM1LBUZTTGYJ1frbhgec3rN4AkMwTyhQCWvbY%2BKFocEp%2BRfSJTIJnaKJRHXezymWbnTaWmTTSEMg8BvfYx913oJXfbNd%2FJr9EbWr1swLEptRBbEXbi9x32Nvw%2BT9%2BjdU7QQiTRu5467DH0MfaHPcG%2FjdPm1ieiFsbCrfFU3%2BdxzL0KwyyK7k3iRVZA8d3Lkh%2F6QST5vH6qvlA6VJ4BtNGVgyX6LyCEcvA%2FolJVDnLWVZLOU8oB75wWLymsEo316beisTYqTzCvX0DVC5zBKa1U9w9YKww40tAuj11Q4LSCD50b66YhmQp%2FrmUowZAVZou5PBCiUbhq9MKKenr4GOqUB7yT9fvLSCEAWo7I7EmL5YIqCUI0KcmIOa%2Fff9Du1NSMbqfe%2FEZ4ESJAq0sUSU2%2B2Vw9caJIK4gI3HF9Wu%2F9QJ2LvRfr6ooiNIe6nPPnhnHyeJSs6TyHWgAG8kDTtjSmCYFulOR4H5jr1vcwmuRzLRTjzD2HMScpieUT4jrH0fFwizfVcypi8vUvpKdjggQe8a%2FGEXdnSNaevHH51IIZO46tF02o3&X-Amz-Signature=7849edf4a4e4c750e9c3153ba1e154674592b2df6228285fae49f0cf28d14f65&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
