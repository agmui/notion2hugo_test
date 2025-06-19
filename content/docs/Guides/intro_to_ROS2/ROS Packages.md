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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3JHDUW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1oMa8PlNVxFZEkDaMoqy2HwDZUQ48RVFqL65LWFyJQAiEA3fd3ogk5Fkhq2wgM7T2Os5PXyzLWWLYTZuAzmqR7%2ByQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASDjCbMJ4dvrKEOIyrcA2FEbxxtp4ajDN%2BPSOzTD%2BWUegdk0ujMQywDwqAANaPNBoHvRnRjg63jc6lPpD58Rrr66OfRo%2F1UD7MAYwoMNrAYZj8XbfVr4fUCmNZNpLxS031MUQKEwCqOjl6fd5%2FZC6FV9yjllrBkGFz2aQFv3B%2BLBv0iebxKwP%2BPPBY0MR5ekslosD%2Fe59O2qqIaNzTzIhZg87tMja%2FRWOPfJkvcJ7Xl8OqFlgPjfWelSS2YUMivlHA5TYGPlOFP4TGb2wqCZz3tmQZaBFY206%2BOzq0cDSnQSNvDQZabiMLvxvA3jTWryxUISlWry7CNSviWbZjLqSBUli6IWaUrxJFSMBpq3EQjZXIr40CP88H%2FDqY8JTZljM1nswozwGN3BnTLNVUGRUP6B1wGUYFPBJp88DJD2TOsopDoCH3kdXUI67laxlbhRT3ZVc1WkWBouswKzkJWnMAqtyEhimsnlNF6eDa9O7cBUA8WYuInKHQnUGPKXshF5IF6gXijgb1PJ3gfVhXBzm7%2BLx7xvlzs4EK90nUeID%2BuMOspgDJCM6akWUYx26nD8e0ODmIpq4ug2hVieT%2FzsBhuzDEYtfLMz8pXVjr329mB7eSAYwlfWdh3YCMI44SG62RS4DS35SZItYMzMOvKzcIGOqUBQDBu5KkgQB4d0Um5NBM4Y3pcV5I94YbyDxLLj%2Filg%2FrhpfCdoGPgvVDuv7tHEla4%2BaMdFEMAZd6f5%2BO%2BGsVxoUxSIHT9rciUv39NSu7nrlCblbjORrnK%2BlyJtKteTssShuq9gsNH7EpcuYb60RN8CF9BsqgakNuhb0gPv%2BFcMt9Wf2kMfa4z%2Fi78HRkyUvW2R1nifOeNVwuATq8hXqNc2nhm3fLi&X-Amz-Signature=1a877442ebbbdd9f6e7d3fe506b61317a44e2aa745564a1cf16c76e1e67f6440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3JHDUW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1oMa8PlNVxFZEkDaMoqy2HwDZUQ48RVFqL65LWFyJQAiEA3fd3ogk5Fkhq2wgM7T2Os5PXyzLWWLYTZuAzmqR7%2ByQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASDjCbMJ4dvrKEOIyrcA2FEbxxtp4ajDN%2BPSOzTD%2BWUegdk0ujMQywDwqAANaPNBoHvRnRjg63jc6lPpD58Rrr66OfRo%2F1UD7MAYwoMNrAYZj8XbfVr4fUCmNZNpLxS031MUQKEwCqOjl6fd5%2FZC6FV9yjllrBkGFz2aQFv3B%2BLBv0iebxKwP%2BPPBY0MR5ekslosD%2Fe59O2qqIaNzTzIhZg87tMja%2FRWOPfJkvcJ7Xl8OqFlgPjfWelSS2YUMivlHA5TYGPlOFP4TGb2wqCZz3tmQZaBFY206%2BOzq0cDSnQSNvDQZabiMLvxvA3jTWryxUISlWry7CNSviWbZjLqSBUli6IWaUrxJFSMBpq3EQjZXIr40CP88H%2FDqY8JTZljM1nswozwGN3BnTLNVUGRUP6B1wGUYFPBJp88DJD2TOsopDoCH3kdXUI67laxlbhRT3ZVc1WkWBouswKzkJWnMAqtyEhimsnlNF6eDa9O7cBUA8WYuInKHQnUGPKXshF5IF6gXijgb1PJ3gfVhXBzm7%2BLx7xvlzs4EK90nUeID%2BuMOspgDJCM6akWUYx26nD8e0ODmIpq4ug2hVieT%2FzsBhuzDEYtfLMz8pXVjr329mB7eSAYwlfWdh3YCMI44SG62RS4DS35SZItYMzMOvKzcIGOqUBQDBu5KkgQB4d0Um5NBM4Y3pcV5I94YbyDxLLj%2Filg%2FrhpfCdoGPgvVDuv7tHEla4%2BaMdFEMAZd6f5%2BO%2BGsVxoUxSIHT9rciUv39NSu7nrlCblbjORrnK%2BlyJtKteTssShuq9gsNH7EpcuYb60RN8CF9BsqgakNuhb0gPv%2BFcMt9Wf2kMfa4z%2Fi78HRkyUvW2R1nifOeNVwuATq8hXqNc2nhm3fLi&X-Amz-Signature=f62449c5dada79a2c2dcabbebe1c9edff825187a5867a75c12cdbf92c611e34b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3JHDUW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1oMa8PlNVxFZEkDaMoqy2HwDZUQ48RVFqL65LWFyJQAiEA3fd3ogk5Fkhq2wgM7T2Os5PXyzLWWLYTZuAzmqR7%2ByQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASDjCbMJ4dvrKEOIyrcA2FEbxxtp4ajDN%2BPSOzTD%2BWUegdk0ujMQywDwqAANaPNBoHvRnRjg63jc6lPpD58Rrr66OfRo%2F1UD7MAYwoMNrAYZj8XbfVr4fUCmNZNpLxS031MUQKEwCqOjl6fd5%2FZC6FV9yjllrBkGFz2aQFv3B%2BLBv0iebxKwP%2BPPBY0MR5ekslosD%2Fe59O2qqIaNzTzIhZg87tMja%2FRWOPfJkvcJ7Xl8OqFlgPjfWelSS2YUMivlHA5TYGPlOFP4TGb2wqCZz3tmQZaBFY206%2BOzq0cDSnQSNvDQZabiMLvxvA3jTWryxUISlWry7CNSviWbZjLqSBUli6IWaUrxJFSMBpq3EQjZXIr40CP88H%2FDqY8JTZljM1nswozwGN3BnTLNVUGRUP6B1wGUYFPBJp88DJD2TOsopDoCH3kdXUI67laxlbhRT3ZVc1WkWBouswKzkJWnMAqtyEhimsnlNF6eDa9O7cBUA8WYuInKHQnUGPKXshF5IF6gXijgb1PJ3gfVhXBzm7%2BLx7xvlzs4EK90nUeID%2BuMOspgDJCM6akWUYx26nD8e0ODmIpq4ug2hVieT%2FzsBhuzDEYtfLMz8pXVjr329mB7eSAYwlfWdh3YCMI44SG62RS4DS35SZItYMzMOvKzcIGOqUBQDBu5KkgQB4d0Um5NBM4Y3pcV5I94YbyDxLLj%2Filg%2FrhpfCdoGPgvVDuv7tHEla4%2BaMdFEMAZd6f5%2BO%2BGsVxoUxSIHT9rciUv39NSu7nrlCblbjORrnK%2BlyJtKteTssShuq9gsNH7EpcuYb60RN8CF9BsqgakNuhb0gPv%2BFcMt9Wf2kMfa4z%2Fi78HRkyUvW2R1nifOeNVwuATq8hXqNc2nhm3fLi&X-Amz-Signature=4c72847917515e87329c02a3b9227e4957bf3f2773c5072cf06fc0ee49fe748b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3JHDUW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1oMa8PlNVxFZEkDaMoqy2HwDZUQ48RVFqL65LWFyJQAiEA3fd3ogk5Fkhq2wgM7T2Os5PXyzLWWLYTZuAzmqR7%2ByQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASDjCbMJ4dvrKEOIyrcA2FEbxxtp4ajDN%2BPSOzTD%2BWUegdk0ujMQywDwqAANaPNBoHvRnRjg63jc6lPpD58Rrr66OfRo%2F1UD7MAYwoMNrAYZj8XbfVr4fUCmNZNpLxS031MUQKEwCqOjl6fd5%2FZC6FV9yjllrBkGFz2aQFv3B%2BLBv0iebxKwP%2BPPBY0MR5ekslosD%2Fe59O2qqIaNzTzIhZg87tMja%2FRWOPfJkvcJ7Xl8OqFlgPjfWelSS2YUMivlHA5TYGPlOFP4TGb2wqCZz3tmQZaBFY206%2BOzq0cDSnQSNvDQZabiMLvxvA3jTWryxUISlWry7CNSviWbZjLqSBUli6IWaUrxJFSMBpq3EQjZXIr40CP88H%2FDqY8JTZljM1nswozwGN3BnTLNVUGRUP6B1wGUYFPBJp88DJD2TOsopDoCH3kdXUI67laxlbhRT3ZVc1WkWBouswKzkJWnMAqtyEhimsnlNF6eDa9O7cBUA8WYuInKHQnUGPKXshF5IF6gXijgb1PJ3gfVhXBzm7%2BLx7xvlzs4EK90nUeID%2BuMOspgDJCM6akWUYx26nD8e0ODmIpq4ug2hVieT%2FzsBhuzDEYtfLMz8pXVjr329mB7eSAYwlfWdh3YCMI44SG62RS4DS35SZItYMzMOvKzcIGOqUBQDBu5KkgQB4d0Um5NBM4Y3pcV5I94YbyDxLLj%2Filg%2FrhpfCdoGPgvVDuv7tHEla4%2BaMdFEMAZd6f5%2BO%2BGsVxoUxSIHT9rciUv39NSu7nrlCblbjORrnK%2BlyJtKteTssShuq9gsNH7EpcuYb60RN8CF9BsqgakNuhb0gPv%2BFcMt9Wf2kMfa4z%2Fi78HRkyUvW2R1nifOeNVwuATq8hXqNc2nhm3fLi&X-Amz-Signature=1ca3be153e91494a2f9ae6199fad160c21a4b9f427d9c01c08f9008ffa960548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3JHDUW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1oMa8PlNVxFZEkDaMoqy2HwDZUQ48RVFqL65LWFyJQAiEA3fd3ogk5Fkhq2wgM7T2Os5PXyzLWWLYTZuAzmqR7%2ByQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASDjCbMJ4dvrKEOIyrcA2FEbxxtp4ajDN%2BPSOzTD%2BWUegdk0ujMQywDwqAANaPNBoHvRnRjg63jc6lPpD58Rrr66OfRo%2F1UD7MAYwoMNrAYZj8XbfVr4fUCmNZNpLxS031MUQKEwCqOjl6fd5%2FZC6FV9yjllrBkGFz2aQFv3B%2BLBv0iebxKwP%2BPPBY0MR5ekslosD%2Fe59O2qqIaNzTzIhZg87tMja%2FRWOPfJkvcJ7Xl8OqFlgPjfWelSS2YUMivlHA5TYGPlOFP4TGb2wqCZz3tmQZaBFY206%2BOzq0cDSnQSNvDQZabiMLvxvA3jTWryxUISlWry7CNSviWbZjLqSBUli6IWaUrxJFSMBpq3EQjZXIr40CP88H%2FDqY8JTZljM1nswozwGN3BnTLNVUGRUP6B1wGUYFPBJp88DJD2TOsopDoCH3kdXUI67laxlbhRT3ZVc1WkWBouswKzkJWnMAqtyEhimsnlNF6eDa9O7cBUA8WYuInKHQnUGPKXshF5IF6gXijgb1PJ3gfVhXBzm7%2BLx7xvlzs4EK90nUeID%2BuMOspgDJCM6akWUYx26nD8e0ODmIpq4ug2hVieT%2FzsBhuzDEYtfLMz8pXVjr329mB7eSAYwlfWdh3YCMI44SG62RS4DS35SZItYMzMOvKzcIGOqUBQDBu5KkgQB4d0Um5NBM4Y3pcV5I94YbyDxLLj%2Filg%2FrhpfCdoGPgvVDuv7tHEla4%2BaMdFEMAZd6f5%2BO%2BGsVxoUxSIHT9rciUv39NSu7nrlCblbjORrnK%2BlyJtKteTssShuq9gsNH7EpcuYb60RN8CF9BsqgakNuhb0gPv%2BFcMt9Wf2kMfa4z%2Fi78HRkyUvW2R1nifOeNVwuATq8hXqNc2nhm3fLi&X-Amz-Signature=bd25f47d4ab5e2d2ed8b7eaf5eb5a8869a94a9136e3d899b7b4f749748d0d34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3JHDUW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1oMa8PlNVxFZEkDaMoqy2HwDZUQ48RVFqL65LWFyJQAiEA3fd3ogk5Fkhq2wgM7T2Os5PXyzLWWLYTZuAzmqR7%2ByQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASDjCbMJ4dvrKEOIyrcA2FEbxxtp4ajDN%2BPSOzTD%2BWUegdk0ujMQywDwqAANaPNBoHvRnRjg63jc6lPpD58Rrr66OfRo%2F1UD7MAYwoMNrAYZj8XbfVr4fUCmNZNpLxS031MUQKEwCqOjl6fd5%2FZC6FV9yjllrBkGFz2aQFv3B%2BLBv0iebxKwP%2BPPBY0MR5ekslosD%2Fe59O2qqIaNzTzIhZg87tMja%2FRWOPfJkvcJ7Xl8OqFlgPjfWelSS2YUMivlHA5TYGPlOFP4TGb2wqCZz3tmQZaBFY206%2BOzq0cDSnQSNvDQZabiMLvxvA3jTWryxUISlWry7CNSviWbZjLqSBUli6IWaUrxJFSMBpq3EQjZXIr40CP88H%2FDqY8JTZljM1nswozwGN3BnTLNVUGRUP6B1wGUYFPBJp88DJD2TOsopDoCH3kdXUI67laxlbhRT3ZVc1WkWBouswKzkJWnMAqtyEhimsnlNF6eDa9O7cBUA8WYuInKHQnUGPKXshF5IF6gXijgb1PJ3gfVhXBzm7%2BLx7xvlzs4EK90nUeID%2BuMOspgDJCM6akWUYx26nD8e0ODmIpq4ug2hVieT%2FzsBhuzDEYtfLMz8pXVjr329mB7eSAYwlfWdh3YCMI44SG62RS4DS35SZItYMzMOvKzcIGOqUBQDBu5KkgQB4d0Um5NBM4Y3pcV5I94YbyDxLLj%2Filg%2FrhpfCdoGPgvVDuv7tHEla4%2BaMdFEMAZd6f5%2BO%2BGsVxoUxSIHT9rciUv39NSu7nrlCblbjORrnK%2BlyJtKteTssShuq9gsNH7EpcuYb60RN8CF9BsqgakNuhb0gPv%2BFcMt9Wf2kMfa4z%2Fi78HRkyUvW2R1nifOeNVwuATq8hXqNc2nhm3fLi&X-Amz-Signature=8ff22b6473678f75ce7fb05ec4edc9424d0a6d3143039643c1c4278d1c6bb35f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3JHDUW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1oMa8PlNVxFZEkDaMoqy2HwDZUQ48RVFqL65LWFyJQAiEA3fd3ogk5Fkhq2wgM7T2Os5PXyzLWWLYTZuAzmqR7%2ByQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASDjCbMJ4dvrKEOIyrcA2FEbxxtp4ajDN%2BPSOzTD%2BWUegdk0ujMQywDwqAANaPNBoHvRnRjg63jc6lPpD58Rrr66OfRo%2F1UD7MAYwoMNrAYZj8XbfVr4fUCmNZNpLxS031MUQKEwCqOjl6fd5%2FZC6FV9yjllrBkGFz2aQFv3B%2BLBv0iebxKwP%2BPPBY0MR5ekslosD%2Fe59O2qqIaNzTzIhZg87tMja%2FRWOPfJkvcJ7Xl8OqFlgPjfWelSS2YUMivlHA5TYGPlOFP4TGb2wqCZz3tmQZaBFY206%2BOzq0cDSnQSNvDQZabiMLvxvA3jTWryxUISlWry7CNSviWbZjLqSBUli6IWaUrxJFSMBpq3EQjZXIr40CP88H%2FDqY8JTZljM1nswozwGN3BnTLNVUGRUP6B1wGUYFPBJp88DJD2TOsopDoCH3kdXUI67laxlbhRT3ZVc1WkWBouswKzkJWnMAqtyEhimsnlNF6eDa9O7cBUA8WYuInKHQnUGPKXshF5IF6gXijgb1PJ3gfVhXBzm7%2BLx7xvlzs4EK90nUeID%2BuMOspgDJCM6akWUYx26nD8e0ODmIpq4ug2hVieT%2FzsBhuzDEYtfLMz8pXVjr329mB7eSAYwlfWdh3YCMI44SG62RS4DS35SZItYMzMOvKzcIGOqUBQDBu5KkgQB4d0Um5NBM4Y3pcV5I94YbyDxLLj%2Filg%2FrhpfCdoGPgvVDuv7tHEla4%2BaMdFEMAZd6f5%2BO%2BGsVxoUxSIHT9rciUv39NSu7nrlCblbjORrnK%2BlyJtKteTssShuq9gsNH7EpcuYb60RN8CF9BsqgakNuhb0gPv%2BFcMt9Wf2kMfa4z%2Fi78HRkyUvW2R1nifOeNVwuATq8hXqNc2nhm3fLi&X-Amz-Signature=d2b6709e1372ddf2c08ea2a34bb0f2155b63ff2312a143978b72441655dd6aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
