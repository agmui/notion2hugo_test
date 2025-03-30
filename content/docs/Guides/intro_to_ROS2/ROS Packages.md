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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQRT2RD4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCdMBPWW%2FJhPf%2FbvHBC3CQKI54cTdfNgnAjlmiCeewX9gIgLOMUHPrAYdm052XxHAFOW%2FG1uAoHlHIYiGb%2F4qUVktsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxQE%2B%2BkB3J1Yf4kDircA1f6ibufYMMyQ1LFZjqma6kDn78HJuo15GNk%2BocoTKyCkdDViM7rGOzfdNVe3ypMTcpd63y%2FfR1AfsI6r%2B%2B4cVFLVhphtXsOCmIfZGkmTKgJ%2Bl9vFNFAvgILO5GRIkFJ49EJV3hFS5AX5vxf09MNOJTPuchuKwXG0eYGNfL3zCReTh4%2BuqpK7MXxAtTjjeiQEz9%2FUG8W%2BRa8Kf5L7UlypwEezQpGKjx9HjdzNBx9MCI59O4joN2Uxq%2FuCCSetajpH80TIQbJj9fAWe87%2Fe%2FHPgd6S4a%2BYRR%2BcYph6JOeiPsptedydjG%2B1D0gM9l%2FuY7hM9durWleh8YHexP1R5%2F3RMTFUjx4d9dI%2FLPKQC67XCeHvKLWOhaAvDcBSPTQY%2F7TiFFyt%2FUKFXWnNl294CKoD5baaYwaYcZhWbKAQymhbs2mGAeVg5QaBZolOMuwqm%2BRBgxNE6vUQ07Z%2FYq1p7sZP%2FhaeckDdKDPI4jHG57njhELQSAyu2ggPkadni3lmIsFUVAUtUck38eQk2MozwknEJUMJfN%2FphJVr6SpBYf%2BtGKM1J8x4U%2FziGRAJjRkBjakh2Tgohdxu5PW%2BMlGNuQVvgR%2BG2So1JdwM8Co%2FB7daArEaaeAdLQWSehyt4iVMOjpor8GOqUBTl6C5urktAFRfPnF5OL8K7Sd23fVN5h0u5Qv1ebMX11q%2Fp%2FcOGC1smDOE1svs1xMg%2BLn4gj9MCHIfZotdAOzdgs0wL7yI8m%2FEdbmOMVAnn78OrIG7pZOfS6ID7DvGfH9LSSEFmqOgwXyHk%2BQgCaE99lfWca4b8Cw5rB2a7AwCPjK01d5gNtMIGZmhvRFQwTnUg98IGdhWpl1lmC7%2FBRx4Pei5xh6&X-Amz-Signature=7f91721e5c98ca75f0387f85f0afb3c42f9cc46a1bb0479b0fc313cc947c37fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQRT2RD4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCdMBPWW%2FJhPf%2FbvHBC3CQKI54cTdfNgnAjlmiCeewX9gIgLOMUHPrAYdm052XxHAFOW%2FG1uAoHlHIYiGb%2F4qUVktsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxQE%2B%2BkB3J1Yf4kDircA1f6ibufYMMyQ1LFZjqma6kDn78HJuo15GNk%2BocoTKyCkdDViM7rGOzfdNVe3ypMTcpd63y%2FfR1AfsI6r%2B%2B4cVFLVhphtXsOCmIfZGkmTKgJ%2Bl9vFNFAvgILO5GRIkFJ49EJV3hFS5AX5vxf09MNOJTPuchuKwXG0eYGNfL3zCReTh4%2BuqpK7MXxAtTjjeiQEz9%2FUG8W%2BRa8Kf5L7UlypwEezQpGKjx9HjdzNBx9MCI59O4joN2Uxq%2FuCCSetajpH80TIQbJj9fAWe87%2Fe%2FHPgd6S4a%2BYRR%2BcYph6JOeiPsptedydjG%2B1D0gM9l%2FuY7hM9durWleh8YHexP1R5%2F3RMTFUjx4d9dI%2FLPKQC67XCeHvKLWOhaAvDcBSPTQY%2F7TiFFyt%2FUKFXWnNl294CKoD5baaYwaYcZhWbKAQymhbs2mGAeVg5QaBZolOMuwqm%2BRBgxNE6vUQ07Z%2FYq1p7sZP%2FhaeckDdKDPI4jHG57njhELQSAyu2ggPkadni3lmIsFUVAUtUck38eQk2MozwknEJUMJfN%2FphJVr6SpBYf%2BtGKM1J8x4U%2FziGRAJjRkBjakh2Tgohdxu5PW%2BMlGNuQVvgR%2BG2So1JdwM8Co%2FB7daArEaaeAdLQWSehyt4iVMOjpor8GOqUBTl6C5urktAFRfPnF5OL8K7Sd23fVN5h0u5Qv1ebMX11q%2Fp%2FcOGC1smDOE1svs1xMg%2BLn4gj9MCHIfZotdAOzdgs0wL7yI8m%2FEdbmOMVAnn78OrIG7pZOfS6ID7DvGfH9LSSEFmqOgwXyHk%2BQgCaE99lfWca4b8Cw5rB2a7AwCPjK01d5gNtMIGZmhvRFQwTnUg98IGdhWpl1lmC7%2FBRx4Pei5xh6&X-Amz-Signature=13cc788115accd7e2c290339a2fef37c7695361dbeb02d96dc7a67ab9c2a51d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQRT2RD4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCdMBPWW%2FJhPf%2FbvHBC3CQKI54cTdfNgnAjlmiCeewX9gIgLOMUHPrAYdm052XxHAFOW%2FG1uAoHlHIYiGb%2F4qUVktsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxQE%2B%2BkB3J1Yf4kDircA1f6ibufYMMyQ1LFZjqma6kDn78HJuo15GNk%2BocoTKyCkdDViM7rGOzfdNVe3ypMTcpd63y%2FfR1AfsI6r%2B%2B4cVFLVhphtXsOCmIfZGkmTKgJ%2Bl9vFNFAvgILO5GRIkFJ49EJV3hFS5AX5vxf09MNOJTPuchuKwXG0eYGNfL3zCReTh4%2BuqpK7MXxAtTjjeiQEz9%2FUG8W%2BRa8Kf5L7UlypwEezQpGKjx9HjdzNBx9MCI59O4joN2Uxq%2FuCCSetajpH80TIQbJj9fAWe87%2Fe%2FHPgd6S4a%2BYRR%2BcYph6JOeiPsptedydjG%2B1D0gM9l%2FuY7hM9durWleh8YHexP1R5%2F3RMTFUjx4d9dI%2FLPKQC67XCeHvKLWOhaAvDcBSPTQY%2F7TiFFyt%2FUKFXWnNl294CKoD5baaYwaYcZhWbKAQymhbs2mGAeVg5QaBZolOMuwqm%2BRBgxNE6vUQ07Z%2FYq1p7sZP%2FhaeckDdKDPI4jHG57njhELQSAyu2ggPkadni3lmIsFUVAUtUck38eQk2MozwknEJUMJfN%2FphJVr6SpBYf%2BtGKM1J8x4U%2FziGRAJjRkBjakh2Tgohdxu5PW%2BMlGNuQVvgR%2BG2So1JdwM8Co%2FB7daArEaaeAdLQWSehyt4iVMOjpor8GOqUBTl6C5urktAFRfPnF5OL8K7Sd23fVN5h0u5Qv1ebMX11q%2Fp%2FcOGC1smDOE1svs1xMg%2BLn4gj9MCHIfZotdAOzdgs0wL7yI8m%2FEdbmOMVAnn78OrIG7pZOfS6ID7DvGfH9LSSEFmqOgwXyHk%2BQgCaE99lfWca4b8Cw5rB2a7AwCPjK01d5gNtMIGZmhvRFQwTnUg98IGdhWpl1lmC7%2FBRx4Pei5xh6&X-Amz-Signature=ccdd41fa56d306672826c41b59f8cccb7c932567c06feb75af5fc882ffe059f7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQRT2RD4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCdMBPWW%2FJhPf%2FbvHBC3CQKI54cTdfNgnAjlmiCeewX9gIgLOMUHPrAYdm052XxHAFOW%2FG1uAoHlHIYiGb%2F4qUVktsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxQE%2B%2BkB3J1Yf4kDircA1f6ibufYMMyQ1LFZjqma6kDn78HJuo15GNk%2BocoTKyCkdDViM7rGOzfdNVe3ypMTcpd63y%2FfR1AfsI6r%2B%2B4cVFLVhphtXsOCmIfZGkmTKgJ%2Bl9vFNFAvgILO5GRIkFJ49EJV3hFS5AX5vxf09MNOJTPuchuKwXG0eYGNfL3zCReTh4%2BuqpK7MXxAtTjjeiQEz9%2FUG8W%2BRa8Kf5L7UlypwEezQpGKjx9HjdzNBx9MCI59O4joN2Uxq%2FuCCSetajpH80TIQbJj9fAWe87%2Fe%2FHPgd6S4a%2BYRR%2BcYph6JOeiPsptedydjG%2B1D0gM9l%2FuY7hM9durWleh8YHexP1R5%2F3RMTFUjx4d9dI%2FLPKQC67XCeHvKLWOhaAvDcBSPTQY%2F7TiFFyt%2FUKFXWnNl294CKoD5baaYwaYcZhWbKAQymhbs2mGAeVg5QaBZolOMuwqm%2BRBgxNE6vUQ07Z%2FYq1p7sZP%2FhaeckDdKDPI4jHG57njhELQSAyu2ggPkadni3lmIsFUVAUtUck38eQk2MozwknEJUMJfN%2FphJVr6SpBYf%2BtGKM1J8x4U%2FziGRAJjRkBjakh2Tgohdxu5PW%2BMlGNuQVvgR%2BG2So1JdwM8Co%2FB7daArEaaeAdLQWSehyt4iVMOjpor8GOqUBTl6C5urktAFRfPnF5OL8K7Sd23fVN5h0u5Qv1ebMX11q%2Fp%2FcOGC1smDOE1svs1xMg%2BLn4gj9MCHIfZotdAOzdgs0wL7yI8m%2FEdbmOMVAnn78OrIG7pZOfS6ID7DvGfH9LSSEFmqOgwXyHk%2BQgCaE99lfWca4b8Cw5rB2a7AwCPjK01d5gNtMIGZmhvRFQwTnUg98IGdhWpl1lmC7%2FBRx4Pei5xh6&X-Amz-Signature=0ab2a73b6d3ddf13fc8e064c71ce706bab46c1ec676cbdded7265ae37774081d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQRT2RD4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCdMBPWW%2FJhPf%2FbvHBC3CQKI54cTdfNgnAjlmiCeewX9gIgLOMUHPrAYdm052XxHAFOW%2FG1uAoHlHIYiGb%2F4qUVktsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxQE%2B%2BkB3J1Yf4kDircA1f6ibufYMMyQ1LFZjqma6kDn78HJuo15GNk%2BocoTKyCkdDViM7rGOzfdNVe3ypMTcpd63y%2FfR1AfsI6r%2B%2B4cVFLVhphtXsOCmIfZGkmTKgJ%2Bl9vFNFAvgILO5GRIkFJ49EJV3hFS5AX5vxf09MNOJTPuchuKwXG0eYGNfL3zCReTh4%2BuqpK7MXxAtTjjeiQEz9%2FUG8W%2BRa8Kf5L7UlypwEezQpGKjx9HjdzNBx9MCI59O4joN2Uxq%2FuCCSetajpH80TIQbJj9fAWe87%2Fe%2FHPgd6S4a%2BYRR%2BcYph6JOeiPsptedydjG%2B1D0gM9l%2FuY7hM9durWleh8YHexP1R5%2F3RMTFUjx4d9dI%2FLPKQC67XCeHvKLWOhaAvDcBSPTQY%2F7TiFFyt%2FUKFXWnNl294CKoD5baaYwaYcZhWbKAQymhbs2mGAeVg5QaBZolOMuwqm%2BRBgxNE6vUQ07Z%2FYq1p7sZP%2FhaeckDdKDPI4jHG57njhELQSAyu2ggPkadni3lmIsFUVAUtUck38eQk2MozwknEJUMJfN%2FphJVr6SpBYf%2BtGKM1J8x4U%2FziGRAJjRkBjakh2Tgohdxu5PW%2BMlGNuQVvgR%2BG2So1JdwM8Co%2FB7daArEaaeAdLQWSehyt4iVMOjpor8GOqUBTl6C5urktAFRfPnF5OL8K7Sd23fVN5h0u5Qv1ebMX11q%2Fp%2FcOGC1smDOE1svs1xMg%2BLn4gj9MCHIfZotdAOzdgs0wL7yI8m%2FEdbmOMVAnn78OrIG7pZOfS6ID7DvGfH9LSSEFmqOgwXyHk%2BQgCaE99lfWca4b8Cw5rB2a7AwCPjK01d5gNtMIGZmhvRFQwTnUg98IGdhWpl1lmC7%2FBRx4Pei5xh6&X-Amz-Signature=295c7072e5846f682dd79f98e783673fefb6960f65eb1a702ce26dfea7d61b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQRT2RD4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCdMBPWW%2FJhPf%2FbvHBC3CQKI54cTdfNgnAjlmiCeewX9gIgLOMUHPrAYdm052XxHAFOW%2FG1uAoHlHIYiGb%2F4qUVktsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxQE%2B%2BkB3J1Yf4kDircA1f6ibufYMMyQ1LFZjqma6kDn78HJuo15GNk%2BocoTKyCkdDViM7rGOzfdNVe3ypMTcpd63y%2FfR1AfsI6r%2B%2B4cVFLVhphtXsOCmIfZGkmTKgJ%2Bl9vFNFAvgILO5GRIkFJ49EJV3hFS5AX5vxf09MNOJTPuchuKwXG0eYGNfL3zCReTh4%2BuqpK7MXxAtTjjeiQEz9%2FUG8W%2BRa8Kf5L7UlypwEezQpGKjx9HjdzNBx9MCI59O4joN2Uxq%2FuCCSetajpH80TIQbJj9fAWe87%2Fe%2FHPgd6S4a%2BYRR%2BcYph6JOeiPsptedydjG%2B1D0gM9l%2FuY7hM9durWleh8YHexP1R5%2F3RMTFUjx4d9dI%2FLPKQC67XCeHvKLWOhaAvDcBSPTQY%2F7TiFFyt%2FUKFXWnNl294CKoD5baaYwaYcZhWbKAQymhbs2mGAeVg5QaBZolOMuwqm%2BRBgxNE6vUQ07Z%2FYq1p7sZP%2FhaeckDdKDPI4jHG57njhELQSAyu2ggPkadni3lmIsFUVAUtUck38eQk2MozwknEJUMJfN%2FphJVr6SpBYf%2BtGKM1J8x4U%2FziGRAJjRkBjakh2Tgohdxu5PW%2BMlGNuQVvgR%2BG2So1JdwM8Co%2FB7daArEaaeAdLQWSehyt4iVMOjpor8GOqUBTl6C5urktAFRfPnF5OL8K7Sd23fVN5h0u5Qv1ebMX11q%2Fp%2FcOGC1smDOE1svs1xMg%2BLn4gj9MCHIfZotdAOzdgs0wL7yI8m%2FEdbmOMVAnn78OrIG7pZOfS6ID7DvGfH9LSSEFmqOgwXyHk%2BQgCaE99lfWca4b8Cw5rB2a7AwCPjK01d5gNtMIGZmhvRFQwTnUg98IGdhWpl1lmC7%2FBRx4Pei5xh6&X-Amz-Signature=143713b09d65c15db24eb6fc965fd8d5bf09aa50605fc4a559441a8f8a98717f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQRT2RD4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCdMBPWW%2FJhPf%2FbvHBC3CQKI54cTdfNgnAjlmiCeewX9gIgLOMUHPrAYdm052XxHAFOW%2FG1uAoHlHIYiGb%2F4qUVktsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxQE%2B%2BkB3J1Yf4kDircA1f6ibufYMMyQ1LFZjqma6kDn78HJuo15GNk%2BocoTKyCkdDViM7rGOzfdNVe3ypMTcpd63y%2FfR1AfsI6r%2B%2B4cVFLVhphtXsOCmIfZGkmTKgJ%2Bl9vFNFAvgILO5GRIkFJ49EJV3hFS5AX5vxf09MNOJTPuchuKwXG0eYGNfL3zCReTh4%2BuqpK7MXxAtTjjeiQEz9%2FUG8W%2BRa8Kf5L7UlypwEezQpGKjx9HjdzNBx9MCI59O4joN2Uxq%2FuCCSetajpH80TIQbJj9fAWe87%2Fe%2FHPgd6S4a%2BYRR%2BcYph6JOeiPsptedydjG%2B1D0gM9l%2FuY7hM9durWleh8YHexP1R5%2F3RMTFUjx4d9dI%2FLPKQC67XCeHvKLWOhaAvDcBSPTQY%2F7TiFFyt%2FUKFXWnNl294CKoD5baaYwaYcZhWbKAQymhbs2mGAeVg5QaBZolOMuwqm%2BRBgxNE6vUQ07Z%2FYq1p7sZP%2FhaeckDdKDPI4jHG57njhELQSAyu2ggPkadni3lmIsFUVAUtUck38eQk2MozwknEJUMJfN%2FphJVr6SpBYf%2BtGKM1J8x4U%2FziGRAJjRkBjakh2Tgohdxu5PW%2BMlGNuQVvgR%2BG2So1JdwM8Co%2FB7daArEaaeAdLQWSehyt4iVMOjpor8GOqUBTl6C5urktAFRfPnF5OL8K7Sd23fVN5h0u5Qv1ebMX11q%2Fp%2FcOGC1smDOE1svs1xMg%2BLn4gj9MCHIfZotdAOzdgs0wL7yI8m%2FEdbmOMVAnn78OrIG7pZOfS6ID7DvGfH9LSSEFmqOgwXyHk%2BQgCaE99lfWca4b8Cw5rB2a7AwCPjK01d5gNtMIGZmhvRFQwTnUg98IGdhWpl1lmC7%2FBRx4Pei5xh6&X-Amz-Signature=9f96707b92e3e6f1cd932eb31d22d6f9d2ad9834522e8eb8e2d968965b727f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
