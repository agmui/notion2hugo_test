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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3UOLJ3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgKfzO8RwYzOCH2RPN4WNRC%2FjsJXcmdWOwH4ng0TNTgIgESzywHoMDe90t%2FEJ75YZ4pJjvQP2hVFUhXLVYBSllJ0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj%2FWw62lVT5qP291ircAzgl%2Fj%2BRwwvYvPrZQtYH%2FRSJs5BlrZK7hJ%2FBsy%2FhOXic6SjoT1HT5uPDcIMJOsQE58KlMxp7orPu2VXESwk1vyByLQ4bAj6OoTqyfv4zANKyVJLAE00rCJ%2FfzFSzK%2Bv6f1o%2BcGwJIEs3sZW6OPbILGC1N6t5BPZ0R6tRg56H5PYNT%2BW1zq5hGpW8H1lSSERPiKUa3SVz45%2Fy6uBX6SuXyggRyuHRutgSE99Zf6me2stn68WsyOwP2U%2BDUz1rv2NIYkhFq3sDPaI1nni7nwdco79WQve%2BnIcVumKnSLQIHXP02phl5cd0yMwyr4Bi2e8mFFaLMOGasa0NTttltk2ACiOTt7gf1ZhUlnYG9%2BCXJwTz%2F%2BDrtWMglUA1jJCnI7D0b%2ByHoqdzPwYngU6oV3ySVxQ8iwEVG4wTzTDArvHed1qhoQvBrhlQtLqwuUUpEkYn%2BDIk1mVq0xJTRt%2Fu6i9PCc9%2F2hVaS8uSkDl3gGptb4K91%2BGOGjjk3NuUxohRbcqUhk7sAzQgLdFUCJKVuorx2fupQJtE9F95rXiVM6OVd9IpN3J5LbYfMr0IjWRLxCx7%2F9zwlwtcNcBUILb5u%2BwME4L0%2BAxXz59glcTIq0mfIctKgvd0KNvwVvTWReveMOD8uL8GOqUBgVpDq5P37R5mYEOddIqPzUYD3KQ0EUCuX9l0hvZv5pHb1kTBsmYMJi2YtM1b4%2FE4zuPbVL%2Bv%2FCMAfl5yQtrZOGJNCRFLKz6w3MgyKaLn4OXzIk8jxSBENJNIwlY5TEXMYQDpVuQOjpASWjupSxBirJ4%2FWy9okKs8D8HQ76CGgQ49L0laP%2Bcph1VCrI0HP2lzq3a86jCHwxkLza0OSISBuOjTzTFL&X-Amz-Signature=cee19371b6a99d2598d67802c90aa1fbe35e8df85f6425110e55f48e81ef3a71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3UOLJ3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgKfzO8RwYzOCH2RPN4WNRC%2FjsJXcmdWOwH4ng0TNTgIgESzywHoMDe90t%2FEJ75YZ4pJjvQP2hVFUhXLVYBSllJ0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj%2FWw62lVT5qP291ircAzgl%2Fj%2BRwwvYvPrZQtYH%2FRSJs5BlrZK7hJ%2FBsy%2FhOXic6SjoT1HT5uPDcIMJOsQE58KlMxp7orPu2VXESwk1vyByLQ4bAj6OoTqyfv4zANKyVJLAE00rCJ%2FfzFSzK%2Bv6f1o%2BcGwJIEs3sZW6OPbILGC1N6t5BPZ0R6tRg56H5PYNT%2BW1zq5hGpW8H1lSSERPiKUa3SVz45%2Fy6uBX6SuXyggRyuHRutgSE99Zf6me2stn68WsyOwP2U%2BDUz1rv2NIYkhFq3sDPaI1nni7nwdco79WQve%2BnIcVumKnSLQIHXP02phl5cd0yMwyr4Bi2e8mFFaLMOGasa0NTttltk2ACiOTt7gf1ZhUlnYG9%2BCXJwTz%2F%2BDrtWMglUA1jJCnI7D0b%2ByHoqdzPwYngU6oV3ySVxQ8iwEVG4wTzTDArvHed1qhoQvBrhlQtLqwuUUpEkYn%2BDIk1mVq0xJTRt%2Fu6i9PCc9%2F2hVaS8uSkDl3gGptb4K91%2BGOGjjk3NuUxohRbcqUhk7sAzQgLdFUCJKVuorx2fupQJtE9F95rXiVM6OVd9IpN3J5LbYfMr0IjWRLxCx7%2F9zwlwtcNcBUILb5u%2BwME4L0%2BAxXz59glcTIq0mfIctKgvd0KNvwVvTWReveMOD8uL8GOqUBgVpDq5P37R5mYEOddIqPzUYD3KQ0EUCuX9l0hvZv5pHb1kTBsmYMJi2YtM1b4%2FE4zuPbVL%2Bv%2FCMAfl5yQtrZOGJNCRFLKz6w3MgyKaLn4OXzIk8jxSBENJNIwlY5TEXMYQDpVuQOjpASWjupSxBirJ4%2FWy9okKs8D8HQ76CGgQ49L0laP%2Bcph1VCrI0HP2lzq3a86jCHwxkLza0OSISBuOjTzTFL&X-Amz-Signature=35d2f7d83444922ed2948228556177f3f13bb13c78faa3bbca877ec38d169b88&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3UOLJ3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgKfzO8RwYzOCH2RPN4WNRC%2FjsJXcmdWOwH4ng0TNTgIgESzywHoMDe90t%2FEJ75YZ4pJjvQP2hVFUhXLVYBSllJ0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj%2FWw62lVT5qP291ircAzgl%2Fj%2BRwwvYvPrZQtYH%2FRSJs5BlrZK7hJ%2FBsy%2FhOXic6SjoT1HT5uPDcIMJOsQE58KlMxp7orPu2VXESwk1vyByLQ4bAj6OoTqyfv4zANKyVJLAE00rCJ%2FfzFSzK%2Bv6f1o%2BcGwJIEs3sZW6OPbILGC1N6t5BPZ0R6tRg56H5PYNT%2BW1zq5hGpW8H1lSSERPiKUa3SVz45%2Fy6uBX6SuXyggRyuHRutgSE99Zf6me2stn68WsyOwP2U%2BDUz1rv2NIYkhFq3sDPaI1nni7nwdco79WQve%2BnIcVumKnSLQIHXP02phl5cd0yMwyr4Bi2e8mFFaLMOGasa0NTttltk2ACiOTt7gf1ZhUlnYG9%2BCXJwTz%2F%2BDrtWMglUA1jJCnI7D0b%2ByHoqdzPwYngU6oV3ySVxQ8iwEVG4wTzTDArvHed1qhoQvBrhlQtLqwuUUpEkYn%2BDIk1mVq0xJTRt%2Fu6i9PCc9%2F2hVaS8uSkDl3gGptb4K91%2BGOGjjk3NuUxohRbcqUhk7sAzQgLdFUCJKVuorx2fupQJtE9F95rXiVM6OVd9IpN3J5LbYfMr0IjWRLxCx7%2F9zwlwtcNcBUILb5u%2BwME4L0%2BAxXz59glcTIq0mfIctKgvd0KNvwVvTWReveMOD8uL8GOqUBgVpDq5P37R5mYEOddIqPzUYD3KQ0EUCuX9l0hvZv5pHb1kTBsmYMJi2YtM1b4%2FE4zuPbVL%2Bv%2FCMAfl5yQtrZOGJNCRFLKz6w3MgyKaLn4OXzIk8jxSBENJNIwlY5TEXMYQDpVuQOjpASWjupSxBirJ4%2FWy9okKs8D8HQ76CGgQ49L0laP%2Bcph1VCrI0HP2lzq3a86jCHwxkLza0OSISBuOjTzTFL&X-Amz-Signature=3621bf23597bb4139a087707fa6e05daab9fc57946dc7d722ddb2e953e862add&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3UOLJ3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgKfzO8RwYzOCH2RPN4WNRC%2FjsJXcmdWOwH4ng0TNTgIgESzywHoMDe90t%2FEJ75YZ4pJjvQP2hVFUhXLVYBSllJ0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj%2FWw62lVT5qP291ircAzgl%2Fj%2BRwwvYvPrZQtYH%2FRSJs5BlrZK7hJ%2FBsy%2FhOXic6SjoT1HT5uPDcIMJOsQE58KlMxp7orPu2VXESwk1vyByLQ4bAj6OoTqyfv4zANKyVJLAE00rCJ%2FfzFSzK%2Bv6f1o%2BcGwJIEs3sZW6OPbILGC1N6t5BPZ0R6tRg56H5PYNT%2BW1zq5hGpW8H1lSSERPiKUa3SVz45%2Fy6uBX6SuXyggRyuHRutgSE99Zf6me2stn68WsyOwP2U%2BDUz1rv2NIYkhFq3sDPaI1nni7nwdco79WQve%2BnIcVumKnSLQIHXP02phl5cd0yMwyr4Bi2e8mFFaLMOGasa0NTttltk2ACiOTt7gf1ZhUlnYG9%2BCXJwTz%2F%2BDrtWMglUA1jJCnI7D0b%2ByHoqdzPwYngU6oV3ySVxQ8iwEVG4wTzTDArvHed1qhoQvBrhlQtLqwuUUpEkYn%2BDIk1mVq0xJTRt%2Fu6i9PCc9%2F2hVaS8uSkDl3gGptb4K91%2BGOGjjk3NuUxohRbcqUhk7sAzQgLdFUCJKVuorx2fupQJtE9F95rXiVM6OVd9IpN3J5LbYfMr0IjWRLxCx7%2F9zwlwtcNcBUILb5u%2BwME4L0%2BAxXz59glcTIq0mfIctKgvd0KNvwVvTWReveMOD8uL8GOqUBgVpDq5P37R5mYEOddIqPzUYD3KQ0EUCuX9l0hvZv5pHb1kTBsmYMJi2YtM1b4%2FE4zuPbVL%2Bv%2FCMAfl5yQtrZOGJNCRFLKz6w3MgyKaLn4OXzIk8jxSBENJNIwlY5TEXMYQDpVuQOjpASWjupSxBirJ4%2FWy9okKs8D8HQ76CGgQ49L0laP%2Bcph1VCrI0HP2lzq3a86jCHwxkLza0OSISBuOjTzTFL&X-Amz-Signature=24f6d316b43bb802fd8d7d9c0557028660ceeda184bc965ee4dbcd1a0a1c4cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3UOLJ3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgKfzO8RwYzOCH2RPN4WNRC%2FjsJXcmdWOwH4ng0TNTgIgESzywHoMDe90t%2FEJ75YZ4pJjvQP2hVFUhXLVYBSllJ0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj%2FWw62lVT5qP291ircAzgl%2Fj%2BRwwvYvPrZQtYH%2FRSJs5BlrZK7hJ%2FBsy%2FhOXic6SjoT1HT5uPDcIMJOsQE58KlMxp7orPu2VXESwk1vyByLQ4bAj6OoTqyfv4zANKyVJLAE00rCJ%2FfzFSzK%2Bv6f1o%2BcGwJIEs3sZW6OPbILGC1N6t5BPZ0R6tRg56H5PYNT%2BW1zq5hGpW8H1lSSERPiKUa3SVz45%2Fy6uBX6SuXyggRyuHRutgSE99Zf6me2stn68WsyOwP2U%2BDUz1rv2NIYkhFq3sDPaI1nni7nwdco79WQve%2BnIcVumKnSLQIHXP02phl5cd0yMwyr4Bi2e8mFFaLMOGasa0NTttltk2ACiOTt7gf1ZhUlnYG9%2BCXJwTz%2F%2BDrtWMglUA1jJCnI7D0b%2ByHoqdzPwYngU6oV3ySVxQ8iwEVG4wTzTDArvHed1qhoQvBrhlQtLqwuUUpEkYn%2BDIk1mVq0xJTRt%2Fu6i9PCc9%2F2hVaS8uSkDl3gGptb4K91%2BGOGjjk3NuUxohRbcqUhk7sAzQgLdFUCJKVuorx2fupQJtE9F95rXiVM6OVd9IpN3J5LbYfMr0IjWRLxCx7%2F9zwlwtcNcBUILb5u%2BwME4L0%2BAxXz59glcTIq0mfIctKgvd0KNvwVvTWReveMOD8uL8GOqUBgVpDq5P37R5mYEOddIqPzUYD3KQ0EUCuX9l0hvZv5pHb1kTBsmYMJi2YtM1b4%2FE4zuPbVL%2Bv%2FCMAfl5yQtrZOGJNCRFLKz6w3MgyKaLn4OXzIk8jxSBENJNIwlY5TEXMYQDpVuQOjpASWjupSxBirJ4%2FWy9okKs8D8HQ76CGgQ49L0laP%2Bcph1VCrI0HP2lzq3a86jCHwxkLza0OSISBuOjTzTFL&X-Amz-Signature=9bea0b5aec2c187f45086264d7ab0b4cf3804fe113ae233708801fc38a886607&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3UOLJ3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgKfzO8RwYzOCH2RPN4WNRC%2FjsJXcmdWOwH4ng0TNTgIgESzywHoMDe90t%2FEJ75YZ4pJjvQP2hVFUhXLVYBSllJ0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj%2FWw62lVT5qP291ircAzgl%2Fj%2BRwwvYvPrZQtYH%2FRSJs5BlrZK7hJ%2FBsy%2FhOXic6SjoT1HT5uPDcIMJOsQE58KlMxp7orPu2VXESwk1vyByLQ4bAj6OoTqyfv4zANKyVJLAE00rCJ%2FfzFSzK%2Bv6f1o%2BcGwJIEs3sZW6OPbILGC1N6t5BPZ0R6tRg56H5PYNT%2BW1zq5hGpW8H1lSSERPiKUa3SVz45%2Fy6uBX6SuXyggRyuHRutgSE99Zf6me2stn68WsyOwP2U%2BDUz1rv2NIYkhFq3sDPaI1nni7nwdco79WQve%2BnIcVumKnSLQIHXP02phl5cd0yMwyr4Bi2e8mFFaLMOGasa0NTttltk2ACiOTt7gf1ZhUlnYG9%2BCXJwTz%2F%2BDrtWMglUA1jJCnI7D0b%2ByHoqdzPwYngU6oV3ySVxQ8iwEVG4wTzTDArvHed1qhoQvBrhlQtLqwuUUpEkYn%2BDIk1mVq0xJTRt%2Fu6i9PCc9%2F2hVaS8uSkDl3gGptb4K91%2BGOGjjk3NuUxohRbcqUhk7sAzQgLdFUCJKVuorx2fupQJtE9F95rXiVM6OVd9IpN3J5LbYfMr0IjWRLxCx7%2F9zwlwtcNcBUILb5u%2BwME4L0%2BAxXz59glcTIq0mfIctKgvd0KNvwVvTWReveMOD8uL8GOqUBgVpDq5P37R5mYEOddIqPzUYD3KQ0EUCuX9l0hvZv5pHb1kTBsmYMJi2YtM1b4%2FE4zuPbVL%2Bv%2FCMAfl5yQtrZOGJNCRFLKz6w3MgyKaLn4OXzIk8jxSBENJNIwlY5TEXMYQDpVuQOjpASWjupSxBirJ4%2FWy9okKs8D8HQ76CGgQ49L0laP%2Bcph1VCrI0HP2lzq3a86jCHwxkLza0OSISBuOjTzTFL&X-Amz-Signature=e7648838d53916953ce08480bb59953cf26d4755db88f48dfbecc080c2d60845&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3UOLJ3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgKfzO8RwYzOCH2RPN4WNRC%2FjsJXcmdWOwH4ng0TNTgIgESzywHoMDe90t%2FEJ75YZ4pJjvQP2hVFUhXLVYBSllJ0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj%2FWw62lVT5qP291ircAzgl%2Fj%2BRwwvYvPrZQtYH%2FRSJs5BlrZK7hJ%2FBsy%2FhOXic6SjoT1HT5uPDcIMJOsQE58KlMxp7orPu2VXESwk1vyByLQ4bAj6OoTqyfv4zANKyVJLAE00rCJ%2FfzFSzK%2Bv6f1o%2BcGwJIEs3sZW6OPbILGC1N6t5BPZ0R6tRg56H5PYNT%2BW1zq5hGpW8H1lSSERPiKUa3SVz45%2Fy6uBX6SuXyggRyuHRutgSE99Zf6me2stn68WsyOwP2U%2BDUz1rv2NIYkhFq3sDPaI1nni7nwdco79WQve%2BnIcVumKnSLQIHXP02phl5cd0yMwyr4Bi2e8mFFaLMOGasa0NTttltk2ACiOTt7gf1ZhUlnYG9%2BCXJwTz%2F%2BDrtWMglUA1jJCnI7D0b%2ByHoqdzPwYngU6oV3ySVxQ8iwEVG4wTzTDArvHed1qhoQvBrhlQtLqwuUUpEkYn%2BDIk1mVq0xJTRt%2Fu6i9PCc9%2F2hVaS8uSkDl3gGptb4K91%2BGOGjjk3NuUxohRbcqUhk7sAzQgLdFUCJKVuorx2fupQJtE9F95rXiVM6OVd9IpN3J5LbYfMr0IjWRLxCx7%2F9zwlwtcNcBUILb5u%2BwME4L0%2BAxXz59glcTIq0mfIctKgvd0KNvwVvTWReveMOD8uL8GOqUBgVpDq5P37R5mYEOddIqPzUYD3KQ0EUCuX9l0hvZv5pHb1kTBsmYMJi2YtM1b4%2FE4zuPbVL%2Bv%2FCMAfl5yQtrZOGJNCRFLKz6w3MgyKaLn4OXzIk8jxSBENJNIwlY5TEXMYQDpVuQOjpASWjupSxBirJ4%2FWy9okKs8D8HQ76CGgQ49L0laP%2Bcph1VCrI0HP2lzq3a86jCHwxkLza0OSISBuOjTzTFL&X-Amz-Signature=333ca5c6f9b59df8c890465b19a5c9a370cca14cf07f86cccd7a48bab9de48ac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
