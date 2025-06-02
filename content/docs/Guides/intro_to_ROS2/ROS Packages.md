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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM76SR3Q%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDXi%2FUPN9CwKTal3%2FrOMUUQsHMyr2BnyrUzDLfg0r%2FtgQIgEzrBM4VI4TKW07lfNQH%2FMkiig9UlgJdpdUnowEusCbIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKjMHk8HAgNGlUbxSrcAwKm45jLr491XghSs%2FcLibmWE6MExe0VbWLjqdVEiAdXQ2sVZ6%2BUgWe9jaU8mJrG4VjYCDD0e7Jc%2Futy3Q3MfZM88A74MeR%2FM86YJ6W9SZCfbEdpRqa97dt4yTenq%2BsBiiNb7nBITKe4aB2qEzFvfI7pxFC3VW0%2FHJdU2XD%2FsrId6GBcr1u%2BvI73KpUYGAKdZRSgWEjL6Cn43kaK1AeM2ZDhuPbytt6Amc44JHgnz9xniz5VQURFcrsu54EmfBUxoaVkz6MQPltdpTqlv5UE0p%2FP22DJZXv8XJZwXWvV2bChmVZgy7MXaIZIl8ZDt%2BNoNtOHKywXBpaCOeHg3yNil%2BKMq%2F193RI%2FP3csDooy%2Faak6%2FeUOHxuQeuyjCylj245XlOiDwTi1kGhDzLi15FZIODoI3MJHWz%2FimiyLvm44YbUhw2o%2BezOTix2O%2BXlis7r8fZXZgVE06qditQ%2FgsBHK8g5295VDHmWP%2BEvQx9nfa49vU1GKt1N3KlqH5HgYERYARHZCOemA10PisrVUVzCPYjMLCOKbwMX81Ew2P3%2BRyZqQwJ7fOO%2BDWPd8cjQVAqGMyS0167j1DwXQDeNZwCO3SY%2BBqE5g9syQ2rEL1OOyrawXabTZ8vmpQN6w5c6MKmT%2BMEGOqUBIIw1lKfghVFmA8E6116kU9hNa1DDtFkKYEbirF5W5EBHbSF9N%2FmeT4K%2F%2FZipMWNB7UxXw5F63EIMsND4vGgL04C%2BLEik9DuO546h%2BvECJax9ZM41OTvsWIxOc%2BjYC9%2BA%2FV8HYsdecSADobi9AK583ZzOUnJM2RkcuOhMQE%2Fn5veN345sA%2Fueh%2Btfk0gVACwwcZ%2BAwA0REDWY2DI1Xk1wsvcmQ8dN&X-Amz-Signature=60394e463bf43f5f224d5b0a9498e4ddf74b6ed269d9d0630d6d5ac9df2f8dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM76SR3Q%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDXi%2FUPN9CwKTal3%2FrOMUUQsHMyr2BnyrUzDLfg0r%2FtgQIgEzrBM4VI4TKW07lfNQH%2FMkiig9UlgJdpdUnowEusCbIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKjMHk8HAgNGlUbxSrcAwKm45jLr491XghSs%2FcLibmWE6MExe0VbWLjqdVEiAdXQ2sVZ6%2BUgWe9jaU8mJrG4VjYCDD0e7Jc%2Futy3Q3MfZM88A74MeR%2FM86YJ6W9SZCfbEdpRqa97dt4yTenq%2BsBiiNb7nBITKe4aB2qEzFvfI7pxFC3VW0%2FHJdU2XD%2FsrId6GBcr1u%2BvI73KpUYGAKdZRSgWEjL6Cn43kaK1AeM2ZDhuPbytt6Amc44JHgnz9xniz5VQURFcrsu54EmfBUxoaVkz6MQPltdpTqlv5UE0p%2FP22DJZXv8XJZwXWvV2bChmVZgy7MXaIZIl8ZDt%2BNoNtOHKywXBpaCOeHg3yNil%2BKMq%2F193RI%2FP3csDooy%2Faak6%2FeUOHxuQeuyjCylj245XlOiDwTi1kGhDzLi15FZIODoI3MJHWz%2FimiyLvm44YbUhw2o%2BezOTix2O%2BXlis7r8fZXZgVE06qditQ%2FgsBHK8g5295VDHmWP%2BEvQx9nfa49vU1GKt1N3KlqH5HgYERYARHZCOemA10PisrVUVzCPYjMLCOKbwMX81Ew2P3%2BRyZqQwJ7fOO%2BDWPd8cjQVAqGMyS0167j1DwXQDeNZwCO3SY%2BBqE5g9syQ2rEL1OOyrawXabTZ8vmpQN6w5c6MKmT%2BMEGOqUBIIw1lKfghVFmA8E6116kU9hNa1DDtFkKYEbirF5W5EBHbSF9N%2FmeT4K%2F%2FZipMWNB7UxXw5F63EIMsND4vGgL04C%2BLEik9DuO546h%2BvECJax9ZM41OTvsWIxOc%2BjYC9%2BA%2FV8HYsdecSADobi9AK583ZzOUnJM2RkcuOhMQE%2Fn5veN345sA%2Fueh%2Btfk0gVACwwcZ%2BAwA0REDWY2DI1Xk1wsvcmQ8dN&X-Amz-Signature=96635b3c68d6aa12f3c5f0145f0e53aa6c5c317cee1ae88cb45b48d6405774b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM76SR3Q%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDXi%2FUPN9CwKTal3%2FrOMUUQsHMyr2BnyrUzDLfg0r%2FtgQIgEzrBM4VI4TKW07lfNQH%2FMkiig9UlgJdpdUnowEusCbIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKjMHk8HAgNGlUbxSrcAwKm45jLr491XghSs%2FcLibmWE6MExe0VbWLjqdVEiAdXQ2sVZ6%2BUgWe9jaU8mJrG4VjYCDD0e7Jc%2Futy3Q3MfZM88A74MeR%2FM86YJ6W9SZCfbEdpRqa97dt4yTenq%2BsBiiNb7nBITKe4aB2qEzFvfI7pxFC3VW0%2FHJdU2XD%2FsrId6GBcr1u%2BvI73KpUYGAKdZRSgWEjL6Cn43kaK1AeM2ZDhuPbytt6Amc44JHgnz9xniz5VQURFcrsu54EmfBUxoaVkz6MQPltdpTqlv5UE0p%2FP22DJZXv8XJZwXWvV2bChmVZgy7MXaIZIl8ZDt%2BNoNtOHKywXBpaCOeHg3yNil%2BKMq%2F193RI%2FP3csDooy%2Faak6%2FeUOHxuQeuyjCylj245XlOiDwTi1kGhDzLi15FZIODoI3MJHWz%2FimiyLvm44YbUhw2o%2BezOTix2O%2BXlis7r8fZXZgVE06qditQ%2FgsBHK8g5295VDHmWP%2BEvQx9nfa49vU1GKt1N3KlqH5HgYERYARHZCOemA10PisrVUVzCPYjMLCOKbwMX81Ew2P3%2BRyZqQwJ7fOO%2BDWPd8cjQVAqGMyS0167j1DwXQDeNZwCO3SY%2BBqE5g9syQ2rEL1OOyrawXabTZ8vmpQN6w5c6MKmT%2BMEGOqUBIIw1lKfghVFmA8E6116kU9hNa1DDtFkKYEbirF5W5EBHbSF9N%2FmeT4K%2F%2FZipMWNB7UxXw5F63EIMsND4vGgL04C%2BLEik9DuO546h%2BvECJax9ZM41OTvsWIxOc%2BjYC9%2BA%2FV8HYsdecSADobi9AK583ZzOUnJM2RkcuOhMQE%2Fn5veN345sA%2Fueh%2Btfk0gVACwwcZ%2BAwA0REDWY2DI1Xk1wsvcmQ8dN&X-Amz-Signature=deedf762e927202da287856f295f3678dc1f0c45c88c5fed6047397224a808e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM76SR3Q%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDXi%2FUPN9CwKTal3%2FrOMUUQsHMyr2BnyrUzDLfg0r%2FtgQIgEzrBM4VI4TKW07lfNQH%2FMkiig9UlgJdpdUnowEusCbIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKjMHk8HAgNGlUbxSrcAwKm45jLr491XghSs%2FcLibmWE6MExe0VbWLjqdVEiAdXQ2sVZ6%2BUgWe9jaU8mJrG4VjYCDD0e7Jc%2Futy3Q3MfZM88A74MeR%2FM86YJ6W9SZCfbEdpRqa97dt4yTenq%2BsBiiNb7nBITKe4aB2qEzFvfI7pxFC3VW0%2FHJdU2XD%2FsrId6GBcr1u%2BvI73KpUYGAKdZRSgWEjL6Cn43kaK1AeM2ZDhuPbytt6Amc44JHgnz9xniz5VQURFcrsu54EmfBUxoaVkz6MQPltdpTqlv5UE0p%2FP22DJZXv8XJZwXWvV2bChmVZgy7MXaIZIl8ZDt%2BNoNtOHKywXBpaCOeHg3yNil%2BKMq%2F193RI%2FP3csDooy%2Faak6%2FeUOHxuQeuyjCylj245XlOiDwTi1kGhDzLi15FZIODoI3MJHWz%2FimiyLvm44YbUhw2o%2BezOTix2O%2BXlis7r8fZXZgVE06qditQ%2FgsBHK8g5295VDHmWP%2BEvQx9nfa49vU1GKt1N3KlqH5HgYERYARHZCOemA10PisrVUVzCPYjMLCOKbwMX81Ew2P3%2BRyZqQwJ7fOO%2BDWPd8cjQVAqGMyS0167j1DwXQDeNZwCO3SY%2BBqE5g9syQ2rEL1OOyrawXabTZ8vmpQN6w5c6MKmT%2BMEGOqUBIIw1lKfghVFmA8E6116kU9hNa1DDtFkKYEbirF5W5EBHbSF9N%2FmeT4K%2F%2FZipMWNB7UxXw5F63EIMsND4vGgL04C%2BLEik9DuO546h%2BvECJax9ZM41OTvsWIxOc%2BjYC9%2BA%2FV8HYsdecSADobi9AK583ZzOUnJM2RkcuOhMQE%2Fn5veN345sA%2Fueh%2Btfk0gVACwwcZ%2BAwA0REDWY2DI1Xk1wsvcmQ8dN&X-Amz-Signature=d25ebbaf7165f23723923aa5c10d908fac33964d9a6136e269b502dc8f6b0573&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM76SR3Q%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDXi%2FUPN9CwKTal3%2FrOMUUQsHMyr2BnyrUzDLfg0r%2FtgQIgEzrBM4VI4TKW07lfNQH%2FMkiig9UlgJdpdUnowEusCbIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKjMHk8HAgNGlUbxSrcAwKm45jLr491XghSs%2FcLibmWE6MExe0VbWLjqdVEiAdXQ2sVZ6%2BUgWe9jaU8mJrG4VjYCDD0e7Jc%2Futy3Q3MfZM88A74MeR%2FM86YJ6W9SZCfbEdpRqa97dt4yTenq%2BsBiiNb7nBITKe4aB2qEzFvfI7pxFC3VW0%2FHJdU2XD%2FsrId6GBcr1u%2BvI73KpUYGAKdZRSgWEjL6Cn43kaK1AeM2ZDhuPbytt6Amc44JHgnz9xniz5VQURFcrsu54EmfBUxoaVkz6MQPltdpTqlv5UE0p%2FP22DJZXv8XJZwXWvV2bChmVZgy7MXaIZIl8ZDt%2BNoNtOHKywXBpaCOeHg3yNil%2BKMq%2F193RI%2FP3csDooy%2Faak6%2FeUOHxuQeuyjCylj245XlOiDwTi1kGhDzLi15FZIODoI3MJHWz%2FimiyLvm44YbUhw2o%2BezOTix2O%2BXlis7r8fZXZgVE06qditQ%2FgsBHK8g5295VDHmWP%2BEvQx9nfa49vU1GKt1N3KlqH5HgYERYARHZCOemA10PisrVUVzCPYjMLCOKbwMX81Ew2P3%2BRyZqQwJ7fOO%2BDWPd8cjQVAqGMyS0167j1DwXQDeNZwCO3SY%2BBqE5g9syQ2rEL1OOyrawXabTZ8vmpQN6w5c6MKmT%2BMEGOqUBIIw1lKfghVFmA8E6116kU9hNa1DDtFkKYEbirF5W5EBHbSF9N%2FmeT4K%2F%2FZipMWNB7UxXw5F63EIMsND4vGgL04C%2BLEik9DuO546h%2BvECJax9ZM41OTvsWIxOc%2BjYC9%2BA%2FV8HYsdecSADobi9AK583ZzOUnJM2RkcuOhMQE%2Fn5veN345sA%2Fueh%2Btfk0gVACwwcZ%2BAwA0REDWY2DI1Xk1wsvcmQ8dN&X-Amz-Signature=06bb42f791c5c444cd982d02d4ec216863f796f021ad8678b426443d7f740db0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM76SR3Q%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDXi%2FUPN9CwKTal3%2FrOMUUQsHMyr2BnyrUzDLfg0r%2FtgQIgEzrBM4VI4TKW07lfNQH%2FMkiig9UlgJdpdUnowEusCbIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKjMHk8HAgNGlUbxSrcAwKm45jLr491XghSs%2FcLibmWE6MExe0VbWLjqdVEiAdXQ2sVZ6%2BUgWe9jaU8mJrG4VjYCDD0e7Jc%2Futy3Q3MfZM88A74MeR%2FM86YJ6W9SZCfbEdpRqa97dt4yTenq%2BsBiiNb7nBITKe4aB2qEzFvfI7pxFC3VW0%2FHJdU2XD%2FsrId6GBcr1u%2BvI73KpUYGAKdZRSgWEjL6Cn43kaK1AeM2ZDhuPbytt6Amc44JHgnz9xniz5VQURFcrsu54EmfBUxoaVkz6MQPltdpTqlv5UE0p%2FP22DJZXv8XJZwXWvV2bChmVZgy7MXaIZIl8ZDt%2BNoNtOHKywXBpaCOeHg3yNil%2BKMq%2F193RI%2FP3csDooy%2Faak6%2FeUOHxuQeuyjCylj245XlOiDwTi1kGhDzLi15FZIODoI3MJHWz%2FimiyLvm44YbUhw2o%2BezOTix2O%2BXlis7r8fZXZgVE06qditQ%2FgsBHK8g5295VDHmWP%2BEvQx9nfa49vU1GKt1N3KlqH5HgYERYARHZCOemA10PisrVUVzCPYjMLCOKbwMX81Ew2P3%2BRyZqQwJ7fOO%2BDWPd8cjQVAqGMyS0167j1DwXQDeNZwCO3SY%2BBqE5g9syQ2rEL1OOyrawXabTZ8vmpQN6w5c6MKmT%2BMEGOqUBIIw1lKfghVFmA8E6116kU9hNa1DDtFkKYEbirF5W5EBHbSF9N%2FmeT4K%2F%2FZipMWNB7UxXw5F63EIMsND4vGgL04C%2BLEik9DuO546h%2BvECJax9ZM41OTvsWIxOc%2BjYC9%2BA%2FV8HYsdecSADobi9AK583ZzOUnJM2RkcuOhMQE%2Fn5veN345sA%2Fueh%2Btfk0gVACwwcZ%2BAwA0REDWY2DI1Xk1wsvcmQ8dN&X-Amz-Signature=a522822cdc39208d3bab81c4a2e2115cc787efd98cdaaba67ee8c4ef62efef50&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM76SR3Q%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDXi%2FUPN9CwKTal3%2FrOMUUQsHMyr2BnyrUzDLfg0r%2FtgQIgEzrBM4VI4TKW07lfNQH%2FMkiig9UlgJdpdUnowEusCbIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKjMHk8HAgNGlUbxSrcAwKm45jLr491XghSs%2FcLibmWE6MExe0VbWLjqdVEiAdXQ2sVZ6%2BUgWe9jaU8mJrG4VjYCDD0e7Jc%2Futy3Q3MfZM88A74MeR%2FM86YJ6W9SZCfbEdpRqa97dt4yTenq%2BsBiiNb7nBITKe4aB2qEzFvfI7pxFC3VW0%2FHJdU2XD%2FsrId6GBcr1u%2BvI73KpUYGAKdZRSgWEjL6Cn43kaK1AeM2ZDhuPbytt6Amc44JHgnz9xniz5VQURFcrsu54EmfBUxoaVkz6MQPltdpTqlv5UE0p%2FP22DJZXv8XJZwXWvV2bChmVZgy7MXaIZIl8ZDt%2BNoNtOHKywXBpaCOeHg3yNil%2BKMq%2F193RI%2FP3csDooy%2Faak6%2FeUOHxuQeuyjCylj245XlOiDwTi1kGhDzLi15FZIODoI3MJHWz%2FimiyLvm44YbUhw2o%2BezOTix2O%2BXlis7r8fZXZgVE06qditQ%2FgsBHK8g5295VDHmWP%2BEvQx9nfa49vU1GKt1N3KlqH5HgYERYARHZCOemA10PisrVUVzCPYjMLCOKbwMX81Ew2P3%2BRyZqQwJ7fOO%2BDWPd8cjQVAqGMyS0167j1DwXQDeNZwCO3SY%2BBqE5g9syQ2rEL1OOyrawXabTZ8vmpQN6w5c6MKmT%2BMEGOqUBIIw1lKfghVFmA8E6116kU9hNa1DDtFkKYEbirF5W5EBHbSF9N%2FmeT4K%2F%2FZipMWNB7UxXw5F63EIMsND4vGgL04C%2BLEik9DuO546h%2BvECJax9ZM41OTvsWIxOc%2BjYC9%2BA%2FV8HYsdecSADobi9AK583ZzOUnJM2RkcuOhMQE%2Fn5veN345sA%2Fueh%2Btfk0gVACwwcZ%2BAwA0REDWY2DI1Xk1wsvcmQ8dN&X-Amz-Signature=1860e03567a5c8f703f2cf29df41ecacbcf670ed0a14553d5124038f3730d9e3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
