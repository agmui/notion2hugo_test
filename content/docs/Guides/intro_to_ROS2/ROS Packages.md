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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYLTPCA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD27V4xnShOOy6tyX3quNRjiOLvRwSCmcecdUwc%2B7VmVwIgAyD8HtvnhRWgUh%2FMuAnV6eyBXOcYl62q26bmyYk%2BlcoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3XcHyovcZGyyEo6yrcA0TvxID%2FU4Pr9fdTWYTE5pD3VSqgPGkpEJA%2FMa9CYF%2F7PxKKaC%2BYR9CbV6jq3AHdn4aQ3ZqHC8rB%2BhsTpwLnle4vHTv%2FyQtB35Hn91s4Fn1IQJ8LFaTlW6K3LRF3Ubp5mHXsMb7RWLLUDCFGIDwjhQdsItxPXnjIFGlq5MVDVqAxk942r%2FSWD5RynFACgV5INPyQIze8bhoGNeExRQO3GRT1lfoOpd9LcNwx7osFte0%2Bk%2FYW875x7FKTXnYsk32qz4Kr9Qj5kcGIFDz%2FiUkLinH3H3qbFbccmBOSrfFJPX%2BEKpXnQR9UNY5iArERejL2uhwonjEPOuV3XTm9fxMDGkSF2cmq446aTdooKhVcYVl65FZAMoottuCtttakO6dyXAuSGxbsmSEWig9R2oEhcyl5wrVqcT0I%2BZAJSpFI5gMV2xx0jXtztbKZ4Iou3FBXUJmd1onJS90u2g86lEUyJHfooy4jDDXV0BqFE5xhdsw29Il8iBXoImitSeW8FpA3YaCLECz3KFzWRvZ7wJ6MsVQmcLo2v%2FrcLhLwyBPTYDbiB6Kjxv25%2BtWXUZbIleTmQoQJXlVjw%2FJ2a5u%2Bc0LfnbBp3DEXmd6DMpsrJ6Mq%2FKSEsBroh%2Bdty34Lr6RKMO6%2B8sMGOqUB4Y1vjXMA6k4E92A1jfWV5MUnO%2BOXJ2J5VX31rcxhvaO%2FzgjrtALxfaJ7Mn8r29K5jWybjxirsismL5YuPsFGEI4PMoSevjASxp%2FQj2t6RRhJDAfZs0hBt5CR1J0uA6ElzHJoliWlfTyV1%2Bt5OZgTX3uP7iyQ44fMkbmgjzyqGHOWWucAfBfWDiFiEukrqMbHbr9Tl0e47bcKxHoklacJPC350Fmh&X-Amz-Signature=02d08f46ba973fe069e72e6c1b5eeae5d3171c499fb8e6ea6ccb78a1011132ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYLTPCA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD27V4xnShOOy6tyX3quNRjiOLvRwSCmcecdUwc%2B7VmVwIgAyD8HtvnhRWgUh%2FMuAnV6eyBXOcYl62q26bmyYk%2BlcoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3XcHyovcZGyyEo6yrcA0TvxID%2FU4Pr9fdTWYTE5pD3VSqgPGkpEJA%2FMa9CYF%2F7PxKKaC%2BYR9CbV6jq3AHdn4aQ3ZqHC8rB%2BhsTpwLnle4vHTv%2FyQtB35Hn91s4Fn1IQJ8LFaTlW6K3LRF3Ubp5mHXsMb7RWLLUDCFGIDwjhQdsItxPXnjIFGlq5MVDVqAxk942r%2FSWD5RynFACgV5INPyQIze8bhoGNeExRQO3GRT1lfoOpd9LcNwx7osFte0%2Bk%2FYW875x7FKTXnYsk32qz4Kr9Qj5kcGIFDz%2FiUkLinH3H3qbFbccmBOSrfFJPX%2BEKpXnQR9UNY5iArERejL2uhwonjEPOuV3XTm9fxMDGkSF2cmq446aTdooKhVcYVl65FZAMoottuCtttakO6dyXAuSGxbsmSEWig9R2oEhcyl5wrVqcT0I%2BZAJSpFI5gMV2xx0jXtztbKZ4Iou3FBXUJmd1onJS90u2g86lEUyJHfooy4jDDXV0BqFE5xhdsw29Il8iBXoImitSeW8FpA3YaCLECz3KFzWRvZ7wJ6MsVQmcLo2v%2FrcLhLwyBPTYDbiB6Kjxv25%2BtWXUZbIleTmQoQJXlVjw%2FJ2a5u%2Bc0LfnbBp3DEXmd6DMpsrJ6Mq%2FKSEsBroh%2Bdty34Lr6RKMO6%2B8sMGOqUB4Y1vjXMA6k4E92A1jfWV5MUnO%2BOXJ2J5VX31rcxhvaO%2FzgjrtALxfaJ7Mn8r29K5jWybjxirsismL5YuPsFGEI4PMoSevjASxp%2FQj2t6RRhJDAfZs0hBt5CR1J0uA6ElzHJoliWlfTyV1%2Bt5OZgTX3uP7iyQ44fMkbmgjzyqGHOWWucAfBfWDiFiEukrqMbHbr9Tl0e47bcKxHoklacJPC350Fmh&X-Amz-Signature=352ed547bbc776857f3c88151ade3d22fcf89147d394a317f3a3c1b8e9b12cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYLTPCA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD27V4xnShOOy6tyX3quNRjiOLvRwSCmcecdUwc%2B7VmVwIgAyD8HtvnhRWgUh%2FMuAnV6eyBXOcYl62q26bmyYk%2BlcoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3XcHyovcZGyyEo6yrcA0TvxID%2FU4Pr9fdTWYTE5pD3VSqgPGkpEJA%2FMa9CYF%2F7PxKKaC%2BYR9CbV6jq3AHdn4aQ3ZqHC8rB%2BhsTpwLnle4vHTv%2FyQtB35Hn91s4Fn1IQJ8LFaTlW6K3LRF3Ubp5mHXsMb7RWLLUDCFGIDwjhQdsItxPXnjIFGlq5MVDVqAxk942r%2FSWD5RynFACgV5INPyQIze8bhoGNeExRQO3GRT1lfoOpd9LcNwx7osFte0%2Bk%2FYW875x7FKTXnYsk32qz4Kr9Qj5kcGIFDz%2FiUkLinH3H3qbFbccmBOSrfFJPX%2BEKpXnQR9UNY5iArERejL2uhwonjEPOuV3XTm9fxMDGkSF2cmq446aTdooKhVcYVl65FZAMoottuCtttakO6dyXAuSGxbsmSEWig9R2oEhcyl5wrVqcT0I%2BZAJSpFI5gMV2xx0jXtztbKZ4Iou3FBXUJmd1onJS90u2g86lEUyJHfooy4jDDXV0BqFE5xhdsw29Il8iBXoImitSeW8FpA3YaCLECz3KFzWRvZ7wJ6MsVQmcLo2v%2FrcLhLwyBPTYDbiB6Kjxv25%2BtWXUZbIleTmQoQJXlVjw%2FJ2a5u%2Bc0LfnbBp3DEXmd6DMpsrJ6Mq%2FKSEsBroh%2Bdty34Lr6RKMO6%2B8sMGOqUB4Y1vjXMA6k4E92A1jfWV5MUnO%2BOXJ2J5VX31rcxhvaO%2FzgjrtALxfaJ7Mn8r29K5jWybjxirsismL5YuPsFGEI4PMoSevjASxp%2FQj2t6RRhJDAfZs0hBt5CR1J0uA6ElzHJoliWlfTyV1%2Bt5OZgTX3uP7iyQ44fMkbmgjzyqGHOWWucAfBfWDiFiEukrqMbHbr9Tl0e47bcKxHoklacJPC350Fmh&X-Amz-Signature=7df5653000f63e25ca3dc000054b5231d2b2d49fae7c48d0973d8bcae31a3d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYLTPCA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD27V4xnShOOy6tyX3quNRjiOLvRwSCmcecdUwc%2B7VmVwIgAyD8HtvnhRWgUh%2FMuAnV6eyBXOcYl62q26bmyYk%2BlcoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3XcHyovcZGyyEo6yrcA0TvxID%2FU4Pr9fdTWYTE5pD3VSqgPGkpEJA%2FMa9CYF%2F7PxKKaC%2BYR9CbV6jq3AHdn4aQ3ZqHC8rB%2BhsTpwLnle4vHTv%2FyQtB35Hn91s4Fn1IQJ8LFaTlW6K3LRF3Ubp5mHXsMb7RWLLUDCFGIDwjhQdsItxPXnjIFGlq5MVDVqAxk942r%2FSWD5RynFACgV5INPyQIze8bhoGNeExRQO3GRT1lfoOpd9LcNwx7osFte0%2Bk%2FYW875x7FKTXnYsk32qz4Kr9Qj5kcGIFDz%2FiUkLinH3H3qbFbccmBOSrfFJPX%2BEKpXnQR9UNY5iArERejL2uhwonjEPOuV3XTm9fxMDGkSF2cmq446aTdooKhVcYVl65FZAMoottuCtttakO6dyXAuSGxbsmSEWig9R2oEhcyl5wrVqcT0I%2BZAJSpFI5gMV2xx0jXtztbKZ4Iou3FBXUJmd1onJS90u2g86lEUyJHfooy4jDDXV0BqFE5xhdsw29Il8iBXoImitSeW8FpA3YaCLECz3KFzWRvZ7wJ6MsVQmcLo2v%2FrcLhLwyBPTYDbiB6Kjxv25%2BtWXUZbIleTmQoQJXlVjw%2FJ2a5u%2Bc0LfnbBp3DEXmd6DMpsrJ6Mq%2FKSEsBroh%2Bdty34Lr6RKMO6%2B8sMGOqUB4Y1vjXMA6k4E92A1jfWV5MUnO%2BOXJ2J5VX31rcxhvaO%2FzgjrtALxfaJ7Mn8r29K5jWybjxirsismL5YuPsFGEI4PMoSevjASxp%2FQj2t6RRhJDAfZs0hBt5CR1J0uA6ElzHJoliWlfTyV1%2Bt5OZgTX3uP7iyQ44fMkbmgjzyqGHOWWucAfBfWDiFiEukrqMbHbr9Tl0e47bcKxHoklacJPC350Fmh&X-Amz-Signature=b81fc3858f1735d6bb145bf53b1d857ec09db6cb99741d5bb33245de564f98c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYLTPCA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD27V4xnShOOy6tyX3quNRjiOLvRwSCmcecdUwc%2B7VmVwIgAyD8HtvnhRWgUh%2FMuAnV6eyBXOcYl62q26bmyYk%2BlcoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3XcHyovcZGyyEo6yrcA0TvxID%2FU4Pr9fdTWYTE5pD3VSqgPGkpEJA%2FMa9CYF%2F7PxKKaC%2BYR9CbV6jq3AHdn4aQ3ZqHC8rB%2BhsTpwLnle4vHTv%2FyQtB35Hn91s4Fn1IQJ8LFaTlW6K3LRF3Ubp5mHXsMb7RWLLUDCFGIDwjhQdsItxPXnjIFGlq5MVDVqAxk942r%2FSWD5RynFACgV5INPyQIze8bhoGNeExRQO3GRT1lfoOpd9LcNwx7osFte0%2Bk%2FYW875x7FKTXnYsk32qz4Kr9Qj5kcGIFDz%2FiUkLinH3H3qbFbccmBOSrfFJPX%2BEKpXnQR9UNY5iArERejL2uhwonjEPOuV3XTm9fxMDGkSF2cmq446aTdooKhVcYVl65FZAMoottuCtttakO6dyXAuSGxbsmSEWig9R2oEhcyl5wrVqcT0I%2BZAJSpFI5gMV2xx0jXtztbKZ4Iou3FBXUJmd1onJS90u2g86lEUyJHfooy4jDDXV0BqFE5xhdsw29Il8iBXoImitSeW8FpA3YaCLECz3KFzWRvZ7wJ6MsVQmcLo2v%2FrcLhLwyBPTYDbiB6Kjxv25%2BtWXUZbIleTmQoQJXlVjw%2FJ2a5u%2Bc0LfnbBp3DEXmd6DMpsrJ6Mq%2FKSEsBroh%2Bdty34Lr6RKMO6%2B8sMGOqUB4Y1vjXMA6k4E92A1jfWV5MUnO%2BOXJ2J5VX31rcxhvaO%2FzgjrtALxfaJ7Mn8r29K5jWybjxirsismL5YuPsFGEI4PMoSevjASxp%2FQj2t6RRhJDAfZs0hBt5CR1J0uA6ElzHJoliWlfTyV1%2Bt5OZgTX3uP7iyQ44fMkbmgjzyqGHOWWucAfBfWDiFiEukrqMbHbr9Tl0e47bcKxHoklacJPC350Fmh&X-Amz-Signature=2e03857515f389358d9eab4f9e02003848b56eeac056a131c338d2d541b1c281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYLTPCA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD27V4xnShOOy6tyX3quNRjiOLvRwSCmcecdUwc%2B7VmVwIgAyD8HtvnhRWgUh%2FMuAnV6eyBXOcYl62q26bmyYk%2BlcoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3XcHyovcZGyyEo6yrcA0TvxID%2FU4Pr9fdTWYTE5pD3VSqgPGkpEJA%2FMa9CYF%2F7PxKKaC%2BYR9CbV6jq3AHdn4aQ3ZqHC8rB%2BhsTpwLnle4vHTv%2FyQtB35Hn91s4Fn1IQJ8LFaTlW6K3LRF3Ubp5mHXsMb7RWLLUDCFGIDwjhQdsItxPXnjIFGlq5MVDVqAxk942r%2FSWD5RynFACgV5INPyQIze8bhoGNeExRQO3GRT1lfoOpd9LcNwx7osFte0%2Bk%2FYW875x7FKTXnYsk32qz4Kr9Qj5kcGIFDz%2FiUkLinH3H3qbFbccmBOSrfFJPX%2BEKpXnQR9UNY5iArERejL2uhwonjEPOuV3XTm9fxMDGkSF2cmq446aTdooKhVcYVl65FZAMoottuCtttakO6dyXAuSGxbsmSEWig9R2oEhcyl5wrVqcT0I%2BZAJSpFI5gMV2xx0jXtztbKZ4Iou3FBXUJmd1onJS90u2g86lEUyJHfooy4jDDXV0BqFE5xhdsw29Il8iBXoImitSeW8FpA3YaCLECz3KFzWRvZ7wJ6MsVQmcLo2v%2FrcLhLwyBPTYDbiB6Kjxv25%2BtWXUZbIleTmQoQJXlVjw%2FJ2a5u%2Bc0LfnbBp3DEXmd6DMpsrJ6Mq%2FKSEsBroh%2Bdty34Lr6RKMO6%2B8sMGOqUB4Y1vjXMA6k4E92A1jfWV5MUnO%2BOXJ2J5VX31rcxhvaO%2FzgjrtALxfaJ7Mn8r29K5jWybjxirsismL5YuPsFGEI4PMoSevjASxp%2FQj2t6RRhJDAfZs0hBt5CR1J0uA6ElzHJoliWlfTyV1%2Bt5OZgTX3uP7iyQ44fMkbmgjzyqGHOWWucAfBfWDiFiEukrqMbHbr9Tl0e47bcKxHoklacJPC350Fmh&X-Amz-Signature=f6be156c85a1bde0ef284d107a70b3e25a6698869d3cae66edb4fd3e5ef13800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYLTPCA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD27V4xnShOOy6tyX3quNRjiOLvRwSCmcecdUwc%2B7VmVwIgAyD8HtvnhRWgUh%2FMuAnV6eyBXOcYl62q26bmyYk%2BlcoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3XcHyovcZGyyEo6yrcA0TvxID%2FU4Pr9fdTWYTE5pD3VSqgPGkpEJA%2FMa9CYF%2F7PxKKaC%2BYR9CbV6jq3AHdn4aQ3ZqHC8rB%2BhsTpwLnle4vHTv%2FyQtB35Hn91s4Fn1IQJ8LFaTlW6K3LRF3Ubp5mHXsMb7RWLLUDCFGIDwjhQdsItxPXnjIFGlq5MVDVqAxk942r%2FSWD5RynFACgV5INPyQIze8bhoGNeExRQO3GRT1lfoOpd9LcNwx7osFte0%2Bk%2FYW875x7FKTXnYsk32qz4Kr9Qj5kcGIFDz%2FiUkLinH3H3qbFbccmBOSrfFJPX%2BEKpXnQR9UNY5iArERejL2uhwonjEPOuV3XTm9fxMDGkSF2cmq446aTdooKhVcYVl65FZAMoottuCtttakO6dyXAuSGxbsmSEWig9R2oEhcyl5wrVqcT0I%2BZAJSpFI5gMV2xx0jXtztbKZ4Iou3FBXUJmd1onJS90u2g86lEUyJHfooy4jDDXV0BqFE5xhdsw29Il8iBXoImitSeW8FpA3YaCLECz3KFzWRvZ7wJ6MsVQmcLo2v%2FrcLhLwyBPTYDbiB6Kjxv25%2BtWXUZbIleTmQoQJXlVjw%2FJ2a5u%2Bc0LfnbBp3DEXmd6DMpsrJ6Mq%2FKSEsBroh%2Bdty34Lr6RKMO6%2B8sMGOqUB4Y1vjXMA6k4E92A1jfWV5MUnO%2BOXJ2J5VX31rcxhvaO%2FzgjrtALxfaJ7Mn8r29K5jWybjxirsismL5YuPsFGEI4PMoSevjASxp%2FQj2t6RRhJDAfZs0hBt5CR1J0uA6ElzHJoliWlfTyV1%2Bt5OZgTX3uP7iyQ44fMkbmgjzyqGHOWWucAfBfWDiFiEukrqMbHbr9Tl0e47bcKxHoklacJPC350Fmh&X-Amz-Signature=86bbc21c87525510744582e0366ecd8cddcef2429b36acdef115b90de1b6874a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
