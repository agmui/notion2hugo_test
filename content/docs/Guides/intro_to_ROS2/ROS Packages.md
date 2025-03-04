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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCOARFP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFZwLkWIGXZJH5XLUKDg5qA08t9pV9jG1QfNGDcKb63QIgUeStRvB9%2Ft5aIyD05AnlTE0Oa4k4ZRYbvjnBlf%2B%2BaUMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfRlGGDBMdU0WlDWyrcA4shVIWM34mrZy%2Bpjxe9zlEAcqGcIdrxzv0tFNDku%2FDiLzYwOh3531Jmy6%2FErgBnbZ8PS4G8NaDU78OScdCWUskgqV2VoPFoBjdIu%2F4dcrjogeHLOvf3b%2BwUacyAWAEpvjVTiowDbSVQrCDrzb9OxLimrLk2vOc8Xahh2MswTtJX08ly82CjCGFGzA5eFoZyGGK8njGbJZjiymN3DZ06Ig%2FFOcuswnFT7d6zwJdQh13Wj31vLb0Cg9niEHkqqwVdU11kYoAXUdXqBKqnLyCOWUd5toEAukfQP95iTXBidZrlQqC%2FtBhsj6%2BW7whHE9x8uYrlIgJZuHYAo9lThdg3UM0fkGhbIpktC2PYkDGQ1nXx3KzOL64sHsNYXf4z%2FROJXkuuUhW3CcXs2q7xBB%2B7X26xH815iyfv06ieTvWWsklUkfMYSAjru3UNZTI4TuC%2BUnLUkeoFZlnwbC%2FGhObZgX2Qy0TUjy37x6ZMpBmL6C6qbRBm5blWlw157KLp134MfSqA%2BAdKY0kdBSnSRIxrzv8ekcP52S%2FFTnp%2Fe%2BrInWHWutOtlJL7C%2BH8KIJoHycwhVsFfPA8BKm2BXmdwJN8CiiQyRP2%2FetJELQPPfoJ%2B%2FCmxPYQe%2BJUljYVcdsqMLL%2Fnb4GOqUBE3IiJLXTbL4AL%2FCNGHJqXuX1vCt9ec4JdsDIbkXRGWXBFRmtpFd55EQ8YfsCGsCEnpeLRmUwuxRM6907YFGkNcWKuogTSfKjnURbg5Oha3bI%2FXUiv4p%2B5%2BeahegsFUyM5c%2Fzi06wW2pCeJjEQfuTsFxN4CZoeGZi1YgtA4v3QsCKTDAcxNGCYiQsgIlZ4unEwPjMXIWP6f8RuAP8ja%2F5gLc6i04l&X-Amz-Signature=4ba6b0198daa0b0265151c6f10268ed4d23765c622180ec9791b976167e0b618&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCOARFP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFZwLkWIGXZJH5XLUKDg5qA08t9pV9jG1QfNGDcKb63QIgUeStRvB9%2Ft5aIyD05AnlTE0Oa4k4ZRYbvjnBlf%2B%2BaUMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfRlGGDBMdU0WlDWyrcA4shVIWM34mrZy%2Bpjxe9zlEAcqGcIdrxzv0tFNDku%2FDiLzYwOh3531Jmy6%2FErgBnbZ8PS4G8NaDU78OScdCWUskgqV2VoPFoBjdIu%2F4dcrjogeHLOvf3b%2BwUacyAWAEpvjVTiowDbSVQrCDrzb9OxLimrLk2vOc8Xahh2MswTtJX08ly82CjCGFGzA5eFoZyGGK8njGbJZjiymN3DZ06Ig%2FFOcuswnFT7d6zwJdQh13Wj31vLb0Cg9niEHkqqwVdU11kYoAXUdXqBKqnLyCOWUd5toEAukfQP95iTXBidZrlQqC%2FtBhsj6%2BW7whHE9x8uYrlIgJZuHYAo9lThdg3UM0fkGhbIpktC2PYkDGQ1nXx3KzOL64sHsNYXf4z%2FROJXkuuUhW3CcXs2q7xBB%2B7X26xH815iyfv06ieTvWWsklUkfMYSAjru3UNZTI4TuC%2BUnLUkeoFZlnwbC%2FGhObZgX2Qy0TUjy37x6ZMpBmL6C6qbRBm5blWlw157KLp134MfSqA%2BAdKY0kdBSnSRIxrzv8ekcP52S%2FFTnp%2Fe%2BrInWHWutOtlJL7C%2BH8KIJoHycwhVsFfPA8BKm2BXmdwJN8CiiQyRP2%2FetJELQPPfoJ%2B%2FCmxPYQe%2BJUljYVcdsqMLL%2Fnb4GOqUBE3IiJLXTbL4AL%2FCNGHJqXuX1vCt9ec4JdsDIbkXRGWXBFRmtpFd55EQ8YfsCGsCEnpeLRmUwuxRM6907YFGkNcWKuogTSfKjnURbg5Oha3bI%2FXUiv4p%2B5%2BeahegsFUyM5c%2Fzi06wW2pCeJjEQfuTsFxN4CZoeGZi1YgtA4v3QsCKTDAcxNGCYiQsgIlZ4unEwPjMXIWP6f8RuAP8ja%2F5gLc6i04l&X-Amz-Signature=0c4b367203023c09035a33fcefd55b022c641b0c46aa15ff2fcbb8345fae0b54&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCOARFP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFZwLkWIGXZJH5XLUKDg5qA08t9pV9jG1QfNGDcKb63QIgUeStRvB9%2Ft5aIyD05AnlTE0Oa4k4ZRYbvjnBlf%2B%2BaUMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfRlGGDBMdU0WlDWyrcA4shVIWM34mrZy%2Bpjxe9zlEAcqGcIdrxzv0tFNDku%2FDiLzYwOh3531Jmy6%2FErgBnbZ8PS4G8NaDU78OScdCWUskgqV2VoPFoBjdIu%2F4dcrjogeHLOvf3b%2BwUacyAWAEpvjVTiowDbSVQrCDrzb9OxLimrLk2vOc8Xahh2MswTtJX08ly82CjCGFGzA5eFoZyGGK8njGbJZjiymN3DZ06Ig%2FFOcuswnFT7d6zwJdQh13Wj31vLb0Cg9niEHkqqwVdU11kYoAXUdXqBKqnLyCOWUd5toEAukfQP95iTXBidZrlQqC%2FtBhsj6%2BW7whHE9x8uYrlIgJZuHYAo9lThdg3UM0fkGhbIpktC2PYkDGQ1nXx3KzOL64sHsNYXf4z%2FROJXkuuUhW3CcXs2q7xBB%2B7X26xH815iyfv06ieTvWWsklUkfMYSAjru3UNZTI4TuC%2BUnLUkeoFZlnwbC%2FGhObZgX2Qy0TUjy37x6ZMpBmL6C6qbRBm5blWlw157KLp134MfSqA%2BAdKY0kdBSnSRIxrzv8ekcP52S%2FFTnp%2Fe%2BrInWHWutOtlJL7C%2BH8KIJoHycwhVsFfPA8BKm2BXmdwJN8CiiQyRP2%2FetJELQPPfoJ%2B%2FCmxPYQe%2BJUljYVcdsqMLL%2Fnb4GOqUBE3IiJLXTbL4AL%2FCNGHJqXuX1vCt9ec4JdsDIbkXRGWXBFRmtpFd55EQ8YfsCGsCEnpeLRmUwuxRM6907YFGkNcWKuogTSfKjnURbg5Oha3bI%2FXUiv4p%2B5%2BeahegsFUyM5c%2Fzi06wW2pCeJjEQfuTsFxN4CZoeGZi1YgtA4v3QsCKTDAcxNGCYiQsgIlZ4unEwPjMXIWP6f8RuAP8ja%2F5gLc6i04l&X-Amz-Signature=99bbaa1540bc72a9e92632e77db9a3ee975e4e29bcad02769029d5a3fb8e3921&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCOARFP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFZwLkWIGXZJH5XLUKDg5qA08t9pV9jG1QfNGDcKb63QIgUeStRvB9%2Ft5aIyD05AnlTE0Oa4k4ZRYbvjnBlf%2B%2BaUMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfRlGGDBMdU0WlDWyrcA4shVIWM34mrZy%2Bpjxe9zlEAcqGcIdrxzv0tFNDku%2FDiLzYwOh3531Jmy6%2FErgBnbZ8PS4G8NaDU78OScdCWUskgqV2VoPFoBjdIu%2F4dcrjogeHLOvf3b%2BwUacyAWAEpvjVTiowDbSVQrCDrzb9OxLimrLk2vOc8Xahh2MswTtJX08ly82CjCGFGzA5eFoZyGGK8njGbJZjiymN3DZ06Ig%2FFOcuswnFT7d6zwJdQh13Wj31vLb0Cg9niEHkqqwVdU11kYoAXUdXqBKqnLyCOWUd5toEAukfQP95iTXBidZrlQqC%2FtBhsj6%2BW7whHE9x8uYrlIgJZuHYAo9lThdg3UM0fkGhbIpktC2PYkDGQ1nXx3KzOL64sHsNYXf4z%2FROJXkuuUhW3CcXs2q7xBB%2B7X26xH815iyfv06ieTvWWsklUkfMYSAjru3UNZTI4TuC%2BUnLUkeoFZlnwbC%2FGhObZgX2Qy0TUjy37x6ZMpBmL6C6qbRBm5blWlw157KLp134MfSqA%2BAdKY0kdBSnSRIxrzv8ekcP52S%2FFTnp%2Fe%2BrInWHWutOtlJL7C%2BH8KIJoHycwhVsFfPA8BKm2BXmdwJN8CiiQyRP2%2FetJELQPPfoJ%2B%2FCmxPYQe%2BJUljYVcdsqMLL%2Fnb4GOqUBE3IiJLXTbL4AL%2FCNGHJqXuX1vCt9ec4JdsDIbkXRGWXBFRmtpFd55EQ8YfsCGsCEnpeLRmUwuxRM6907YFGkNcWKuogTSfKjnURbg5Oha3bI%2FXUiv4p%2B5%2BeahegsFUyM5c%2Fzi06wW2pCeJjEQfuTsFxN4CZoeGZi1YgtA4v3QsCKTDAcxNGCYiQsgIlZ4unEwPjMXIWP6f8RuAP8ja%2F5gLc6i04l&X-Amz-Signature=c981826fe22c6ada9ea7dac296b8f3056a41d604ca0561a138bebe8376d9a10e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCOARFP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFZwLkWIGXZJH5XLUKDg5qA08t9pV9jG1QfNGDcKb63QIgUeStRvB9%2Ft5aIyD05AnlTE0Oa4k4ZRYbvjnBlf%2B%2BaUMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfRlGGDBMdU0WlDWyrcA4shVIWM34mrZy%2Bpjxe9zlEAcqGcIdrxzv0tFNDku%2FDiLzYwOh3531Jmy6%2FErgBnbZ8PS4G8NaDU78OScdCWUskgqV2VoPFoBjdIu%2F4dcrjogeHLOvf3b%2BwUacyAWAEpvjVTiowDbSVQrCDrzb9OxLimrLk2vOc8Xahh2MswTtJX08ly82CjCGFGzA5eFoZyGGK8njGbJZjiymN3DZ06Ig%2FFOcuswnFT7d6zwJdQh13Wj31vLb0Cg9niEHkqqwVdU11kYoAXUdXqBKqnLyCOWUd5toEAukfQP95iTXBidZrlQqC%2FtBhsj6%2BW7whHE9x8uYrlIgJZuHYAo9lThdg3UM0fkGhbIpktC2PYkDGQ1nXx3KzOL64sHsNYXf4z%2FROJXkuuUhW3CcXs2q7xBB%2B7X26xH815iyfv06ieTvWWsklUkfMYSAjru3UNZTI4TuC%2BUnLUkeoFZlnwbC%2FGhObZgX2Qy0TUjy37x6ZMpBmL6C6qbRBm5blWlw157KLp134MfSqA%2BAdKY0kdBSnSRIxrzv8ekcP52S%2FFTnp%2Fe%2BrInWHWutOtlJL7C%2BH8KIJoHycwhVsFfPA8BKm2BXmdwJN8CiiQyRP2%2FetJELQPPfoJ%2B%2FCmxPYQe%2BJUljYVcdsqMLL%2Fnb4GOqUBE3IiJLXTbL4AL%2FCNGHJqXuX1vCt9ec4JdsDIbkXRGWXBFRmtpFd55EQ8YfsCGsCEnpeLRmUwuxRM6907YFGkNcWKuogTSfKjnURbg5Oha3bI%2FXUiv4p%2B5%2BeahegsFUyM5c%2Fzi06wW2pCeJjEQfuTsFxN4CZoeGZi1YgtA4v3QsCKTDAcxNGCYiQsgIlZ4unEwPjMXIWP6f8RuAP8ja%2F5gLc6i04l&X-Amz-Signature=c4d889c42de3cad579a3238dc4a4ad09cbb0810991534796fe273b8b87e299da&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCOARFP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFZwLkWIGXZJH5XLUKDg5qA08t9pV9jG1QfNGDcKb63QIgUeStRvB9%2Ft5aIyD05AnlTE0Oa4k4ZRYbvjnBlf%2B%2BaUMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfRlGGDBMdU0WlDWyrcA4shVIWM34mrZy%2Bpjxe9zlEAcqGcIdrxzv0tFNDku%2FDiLzYwOh3531Jmy6%2FErgBnbZ8PS4G8NaDU78OScdCWUskgqV2VoPFoBjdIu%2F4dcrjogeHLOvf3b%2BwUacyAWAEpvjVTiowDbSVQrCDrzb9OxLimrLk2vOc8Xahh2MswTtJX08ly82CjCGFGzA5eFoZyGGK8njGbJZjiymN3DZ06Ig%2FFOcuswnFT7d6zwJdQh13Wj31vLb0Cg9niEHkqqwVdU11kYoAXUdXqBKqnLyCOWUd5toEAukfQP95iTXBidZrlQqC%2FtBhsj6%2BW7whHE9x8uYrlIgJZuHYAo9lThdg3UM0fkGhbIpktC2PYkDGQ1nXx3KzOL64sHsNYXf4z%2FROJXkuuUhW3CcXs2q7xBB%2B7X26xH815iyfv06ieTvWWsklUkfMYSAjru3UNZTI4TuC%2BUnLUkeoFZlnwbC%2FGhObZgX2Qy0TUjy37x6ZMpBmL6C6qbRBm5blWlw157KLp134MfSqA%2BAdKY0kdBSnSRIxrzv8ekcP52S%2FFTnp%2Fe%2BrInWHWutOtlJL7C%2BH8KIJoHycwhVsFfPA8BKm2BXmdwJN8CiiQyRP2%2FetJELQPPfoJ%2B%2FCmxPYQe%2BJUljYVcdsqMLL%2Fnb4GOqUBE3IiJLXTbL4AL%2FCNGHJqXuX1vCt9ec4JdsDIbkXRGWXBFRmtpFd55EQ8YfsCGsCEnpeLRmUwuxRM6907YFGkNcWKuogTSfKjnURbg5Oha3bI%2FXUiv4p%2B5%2BeahegsFUyM5c%2Fzi06wW2pCeJjEQfuTsFxN4CZoeGZi1YgtA4v3QsCKTDAcxNGCYiQsgIlZ4unEwPjMXIWP6f8RuAP8ja%2F5gLc6i04l&X-Amz-Signature=a1f08e2b0f9ba940834c7f32ce69b7e4ac0b08fa803b3eb8ba4958d2518cad3f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCOARFP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFZwLkWIGXZJH5XLUKDg5qA08t9pV9jG1QfNGDcKb63QIgUeStRvB9%2Ft5aIyD05AnlTE0Oa4k4ZRYbvjnBlf%2B%2BaUMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfRlGGDBMdU0WlDWyrcA4shVIWM34mrZy%2Bpjxe9zlEAcqGcIdrxzv0tFNDku%2FDiLzYwOh3531Jmy6%2FErgBnbZ8PS4G8NaDU78OScdCWUskgqV2VoPFoBjdIu%2F4dcrjogeHLOvf3b%2BwUacyAWAEpvjVTiowDbSVQrCDrzb9OxLimrLk2vOc8Xahh2MswTtJX08ly82CjCGFGzA5eFoZyGGK8njGbJZjiymN3DZ06Ig%2FFOcuswnFT7d6zwJdQh13Wj31vLb0Cg9niEHkqqwVdU11kYoAXUdXqBKqnLyCOWUd5toEAukfQP95iTXBidZrlQqC%2FtBhsj6%2BW7whHE9x8uYrlIgJZuHYAo9lThdg3UM0fkGhbIpktC2PYkDGQ1nXx3KzOL64sHsNYXf4z%2FROJXkuuUhW3CcXs2q7xBB%2B7X26xH815iyfv06ieTvWWsklUkfMYSAjru3UNZTI4TuC%2BUnLUkeoFZlnwbC%2FGhObZgX2Qy0TUjy37x6ZMpBmL6C6qbRBm5blWlw157KLp134MfSqA%2BAdKY0kdBSnSRIxrzv8ekcP52S%2FFTnp%2Fe%2BrInWHWutOtlJL7C%2BH8KIJoHycwhVsFfPA8BKm2BXmdwJN8CiiQyRP2%2FetJELQPPfoJ%2B%2FCmxPYQe%2BJUljYVcdsqMLL%2Fnb4GOqUBE3IiJLXTbL4AL%2FCNGHJqXuX1vCt9ec4JdsDIbkXRGWXBFRmtpFd55EQ8YfsCGsCEnpeLRmUwuxRM6907YFGkNcWKuogTSfKjnURbg5Oha3bI%2FXUiv4p%2B5%2BeahegsFUyM5c%2Fzi06wW2pCeJjEQfuTsFxN4CZoeGZi1YgtA4v3QsCKTDAcxNGCYiQsgIlZ4unEwPjMXIWP6f8RuAP8ja%2F5gLc6i04l&X-Amz-Signature=eea3f4fc09f1c64793e75cd5fa069e0425d713187a5a6ec46717573d8fb0ab93&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
