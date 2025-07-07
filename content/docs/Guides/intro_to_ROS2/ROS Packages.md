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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NZMLMV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAPp0M4uZxBEfn%2B2CG7ndhDzhzpE%2BKcpvU3Apc0x%2BrMNAiEA3yUHptY5%2B03B6Tujg1XeYuIO1gMIdRUl5tNGRvDq0TQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLZl0G1ExE5G4nbBTSrcA0XL7aMY1pJz%2FxKJBZC5VKHDsc2uiy1JknJ20RWeQ%2FRJKI3Wuj13oYg1Rqs5cnF8ZpWEhKvunFPle0TZ8MKylBqgpyqPXrSf8VtcY9ORgTrKnf2iM5MCJ%2FRoeHDIokCY%2FTvc%2F6geymBIl6KFDXWDEVvT126Nxk0mknbn6tXrYRKjiURQc1Vfrv9%2F0nGYymSYmV1ivb%2BGmi1ZkURMejcG9qZyccofhtyAeDphdvQLY2EgRJDHwEQxQ2oCAm8w5eAvBac6vXVE3wJDmqmUKyLhECjVFEKoyomoOClRAanBqdsaXSCuMqaWD4t0HVM5ca9z6SGVbNEUh5YC2Z5Bd0tvAYXry0%2FnKAHFpA0NAZqQdmnoW%2BCrOOp6M%2FkHxL6UhYtY8u4rFmYYCbvFOxJGCjCsAAuWwnKzQ7KlAa2QtyQM9Phtouxv3TwZgVj4kZFdlstjhs%2F4UW%2FyrOp%2FicCPt8qCjmzcDRjfpQDoZaN2hUd97JimUaYGu0yxVJOsgaPr01VrhEnf7ekXDObAdyhppNEdg36L25yx%2BQBQrckCGiVcpiZC1laHei%2FxuaL0DC3jvX6wzZ1dV4ghyHScQ8pnQaHbKxLgGzppaDHoye0FcYAstPrKk%2Fke%2BpHAfr%2FJUqa4MJTqsMMGOqUBTQMSSS65yWYZBX9EddRW%2Bp%2FlZVoq4xxF4Swb3WDElmQz4tsQMUuGI1NsgJO6l6W9ETrgVxBWIlhEJyxiJQSiyyiTr%2FE8MjxR8eNQlVNEcjNeWb0i8YRpbsvosAeYs5snkRLBiPVeB5UR009%2BzEbAcpv4swMnW2h69KWTnRexHlvzo0HfU3x778NQPl4kOwhSLgF%2FiWzHeCWj3C1eUhG9QD8KAUZF&X-Amz-Signature=0724de49a5446f6d7858993e89d79a0aef40d7a37cf1b41b704f1f0f87d747c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NZMLMV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAPp0M4uZxBEfn%2B2CG7ndhDzhzpE%2BKcpvU3Apc0x%2BrMNAiEA3yUHptY5%2B03B6Tujg1XeYuIO1gMIdRUl5tNGRvDq0TQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLZl0G1ExE5G4nbBTSrcA0XL7aMY1pJz%2FxKJBZC5VKHDsc2uiy1JknJ20RWeQ%2FRJKI3Wuj13oYg1Rqs5cnF8ZpWEhKvunFPle0TZ8MKylBqgpyqPXrSf8VtcY9ORgTrKnf2iM5MCJ%2FRoeHDIokCY%2FTvc%2F6geymBIl6KFDXWDEVvT126Nxk0mknbn6tXrYRKjiURQc1Vfrv9%2F0nGYymSYmV1ivb%2BGmi1ZkURMejcG9qZyccofhtyAeDphdvQLY2EgRJDHwEQxQ2oCAm8w5eAvBac6vXVE3wJDmqmUKyLhECjVFEKoyomoOClRAanBqdsaXSCuMqaWD4t0HVM5ca9z6SGVbNEUh5YC2Z5Bd0tvAYXry0%2FnKAHFpA0NAZqQdmnoW%2BCrOOp6M%2FkHxL6UhYtY8u4rFmYYCbvFOxJGCjCsAAuWwnKzQ7KlAa2QtyQM9Phtouxv3TwZgVj4kZFdlstjhs%2F4UW%2FyrOp%2FicCPt8qCjmzcDRjfpQDoZaN2hUd97JimUaYGu0yxVJOsgaPr01VrhEnf7ekXDObAdyhppNEdg36L25yx%2BQBQrckCGiVcpiZC1laHei%2FxuaL0DC3jvX6wzZ1dV4ghyHScQ8pnQaHbKxLgGzppaDHoye0FcYAstPrKk%2Fke%2BpHAfr%2FJUqa4MJTqsMMGOqUBTQMSSS65yWYZBX9EddRW%2Bp%2FlZVoq4xxF4Swb3WDElmQz4tsQMUuGI1NsgJO6l6W9ETrgVxBWIlhEJyxiJQSiyyiTr%2FE8MjxR8eNQlVNEcjNeWb0i8YRpbsvosAeYs5snkRLBiPVeB5UR009%2BzEbAcpv4swMnW2h69KWTnRexHlvzo0HfU3x778NQPl4kOwhSLgF%2FiWzHeCWj3C1eUhG9QD8KAUZF&X-Amz-Signature=992837c86db78d7c7694a26ebd8014d58f911f28bd6d2c429c030051e30a13a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NZMLMV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAPp0M4uZxBEfn%2B2CG7ndhDzhzpE%2BKcpvU3Apc0x%2BrMNAiEA3yUHptY5%2B03B6Tujg1XeYuIO1gMIdRUl5tNGRvDq0TQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLZl0G1ExE5G4nbBTSrcA0XL7aMY1pJz%2FxKJBZC5VKHDsc2uiy1JknJ20RWeQ%2FRJKI3Wuj13oYg1Rqs5cnF8ZpWEhKvunFPle0TZ8MKylBqgpyqPXrSf8VtcY9ORgTrKnf2iM5MCJ%2FRoeHDIokCY%2FTvc%2F6geymBIl6KFDXWDEVvT126Nxk0mknbn6tXrYRKjiURQc1Vfrv9%2F0nGYymSYmV1ivb%2BGmi1ZkURMejcG9qZyccofhtyAeDphdvQLY2EgRJDHwEQxQ2oCAm8w5eAvBac6vXVE3wJDmqmUKyLhECjVFEKoyomoOClRAanBqdsaXSCuMqaWD4t0HVM5ca9z6SGVbNEUh5YC2Z5Bd0tvAYXry0%2FnKAHFpA0NAZqQdmnoW%2BCrOOp6M%2FkHxL6UhYtY8u4rFmYYCbvFOxJGCjCsAAuWwnKzQ7KlAa2QtyQM9Phtouxv3TwZgVj4kZFdlstjhs%2F4UW%2FyrOp%2FicCPt8qCjmzcDRjfpQDoZaN2hUd97JimUaYGu0yxVJOsgaPr01VrhEnf7ekXDObAdyhppNEdg36L25yx%2BQBQrckCGiVcpiZC1laHei%2FxuaL0DC3jvX6wzZ1dV4ghyHScQ8pnQaHbKxLgGzppaDHoye0FcYAstPrKk%2Fke%2BpHAfr%2FJUqa4MJTqsMMGOqUBTQMSSS65yWYZBX9EddRW%2Bp%2FlZVoq4xxF4Swb3WDElmQz4tsQMUuGI1NsgJO6l6W9ETrgVxBWIlhEJyxiJQSiyyiTr%2FE8MjxR8eNQlVNEcjNeWb0i8YRpbsvosAeYs5snkRLBiPVeB5UR009%2BzEbAcpv4swMnW2h69KWTnRexHlvzo0HfU3x778NQPl4kOwhSLgF%2FiWzHeCWj3C1eUhG9QD8KAUZF&X-Amz-Signature=3d0a40992774bde83dc9fc391ea898093a1e382d1fff591c2f09c491f048faef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NZMLMV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAPp0M4uZxBEfn%2B2CG7ndhDzhzpE%2BKcpvU3Apc0x%2BrMNAiEA3yUHptY5%2B03B6Tujg1XeYuIO1gMIdRUl5tNGRvDq0TQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLZl0G1ExE5G4nbBTSrcA0XL7aMY1pJz%2FxKJBZC5VKHDsc2uiy1JknJ20RWeQ%2FRJKI3Wuj13oYg1Rqs5cnF8ZpWEhKvunFPle0TZ8MKylBqgpyqPXrSf8VtcY9ORgTrKnf2iM5MCJ%2FRoeHDIokCY%2FTvc%2F6geymBIl6KFDXWDEVvT126Nxk0mknbn6tXrYRKjiURQc1Vfrv9%2F0nGYymSYmV1ivb%2BGmi1ZkURMejcG9qZyccofhtyAeDphdvQLY2EgRJDHwEQxQ2oCAm8w5eAvBac6vXVE3wJDmqmUKyLhECjVFEKoyomoOClRAanBqdsaXSCuMqaWD4t0HVM5ca9z6SGVbNEUh5YC2Z5Bd0tvAYXry0%2FnKAHFpA0NAZqQdmnoW%2BCrOOp6M%2FkHxL6UhYtY8u4rFmYYCbvFOxJGCjCsAAuWwnKzQ7KlAa2QtyQM9Phtouxv3TwZgVj4kZFdlstjhs%2F4UW%2FyrOp%2FicCPt8qCjmzcDRjfpQDoZaN2hUd97JimUaYGu0yxVJOsgaPr01VrhEnf7ekXDObAdyhppNEdg36L25yx%2BQBQrckCGiVcpiZC1laHei%2FxuaL0DC3jvX6wzZ1dV4ghyHScQ8pnQaHbKxLgGzppaDHoye0FcYAstPrKk%2Fke%2BpHAfr%2FJUqa4MJTqsMMGOqUBTQMSSS65yWYZBX9EddRW%2Bp%2FlZVoq4xxF4Swb3WDElmQz4tsQMUuGI1NsgJO6l6W9ETrgVxBWIlhEJyxiJQSiyyiTr%2FE8MjxR8eNQlVNEcjNeWb0i8YRpbsvosAeYs5snkRLBiPVeB5UR009%2BzEbAcpv4swMnW2h69KWTnRexHlvzo0HfU3x778NQPl4kOwhSLgF%2FiWzHeCWj3C1eUhG9QD8KAUZF&X-Amz-Signature=c6d160fde2f4fefbf2f7298e22b157a01aa27b3e3a3adc11cba4b38144084afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NZMLMV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAPp0M4uZxBEfn%2B2CG7ndhDzhzpE%2BKcpvU3Apc0x%2BrMNAiEA3yUHptY5%2B03B6Tujg1XeYuIO1gMIdRUl5tNGRvDq0TQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLZl0G1ExE5G4nbBTSrcA0XL7aMY1pJz%2FxKJBZC5VKHDsc2uiy1JknJ20RWeQ%2FRJKI3Wuj13oYg1Rqs5cnF8ZpWEhKvunFPle0TZ8MKylBqgpyqPXrSf8VtcY9ORgTrKnf2iM5MCJ%2FRoeHDIokCY%2FTvc%2F6geymBIl6KFDXWDEVvT126Nxk0mknbn6tXrYRKjiURQc1Vfrv9%2F0nGYymSYmV1ivb%2BGmi1ZkURMejcG9qZyccofhtyAeDphdvQLY2EgRJDHwEQxQ2oCAm8w5eAvBac6vXVE3wJDmqmUKyLhECjVFEKoyomoOClRAanBqdsaXSCuMqaWD4t0HVM5ca9z6SGVbNEUh5YC2Z5Bd0tvAYXry0%2FnKAHFpA0NAZqQdmnoW%2BCrOOp6M%2FkHxL6UhYtY8u4rFmYYCbvFOxJGCjCsAAuWwnKzQ7KlAa2QtyQM9Phtouxv3TwZgVj4kZFdlstjhs%2F4UW%2FyrOp%2FicCPt8qCjmzcDRjfpQDoZaN2hUd97JimUaYGu0yxVJOsgaPr01VrhEnf7ekXDObAdyhppNEdg36L25yx%2BQBQrckCGiVcpiZC1laHei%2FxuaL0DC3jvX6wzZ1dV4ghyHScQ8pnQaHbKxLgGzppaDHoye0FcYAstPrKk%2Fke%2BpHAfr%2FJUqa4MJTqsMMGOqUBTQMSSS65yWYZBX9EddRW%2Bp%2FlZVoq4xxF4Swb3WDElmQz4tsQMUuGI1NsgJO6l6W9ETrgVxBWIlhEJyxiJQSiyyiTr%2FE8MjxR8eNQlVNEcjNeWb0i8YRpbsvosAeYs5snkRLBiPVeB5UR009%2BzEbAcpv4swMnW2h69KWTnRexHlvzo0HfU3x778NQPl4kOwhSLgF%2FiWzHeCWj3C1eUhG9QD8KAUZF&X-Amz-Signature=2dc5358e4589d7c524401ee0fb937b238b5d6de5b226e1619e359cdf3f49799c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NZMLMV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAPp0M4uZxBEfn%2B2CG7ndhDzhzpE%2BKcpvU3Apc0x%2BrMNAiEA3yUHptY5%2B03B6Tujg1XeYuIO1gMIdRUl5tNGRvDq0TQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLZl0G1ExE5G4nbBTSrcA0XL7aMY1pJz%2FxKJBZC5VKHDsc2uiy1JknJ20RWeQ%2FRJKI3Wuj13oYg1Rqs5cnF8ZpWEhKvunFPle0TZ8MKylBqgpyqPXrSf8VtcY9ORgTrKnf2iM5MCJ%2FRoeHDIokCY%2FTvc%2F6geymBIl6KFDXWDEVvT126Nxk0mknbn6tXrYRKjiURQc1Vfrv9%2F0nGYymSYmV1ivb%2BGmi1ZkURMejcG9qZyccofhtyAeDphdvQLY2EgRJDHwEQxQ2oCAm8w5eAvBac6vXVE3wJDmqmUKyLhECjVFEKoyomoOClRAanBqdsaXSCuMqaWD4t0HVM5ca9z6SGVbNEUh5YC2Z5Bd0tvAYXry0%2FnKAHFpA0NAZqQdmnoW%2BCrOOp6M%2FkHxL6UhYtY8u4rFmYYCbvFOxJGCjCsAAuWwnKzQ7KlAa2QtyQM9Phtouxv3TwZgVj4kZFdlstjhs%2F4UW%2FyrOp%2FicCPt8qCjmzcDRjfpQDoZaN2hUd97JimUaYGu0yxVJOsgaPr01VrhEnf7ekXDObAdyhppNEdg36L25yx%2BQBQrckCGiVcpiZC1laHei%2FxuaL0DC3jvX6wzZ1dV4ghyHScQ8pnQaHbKxLgGzppaDHoye0FcYAstPrKk%2Fke%2BpHAfr%2FJUqa4MJTqsMMGOqUBTQMSSS65yWYZBX9EddRW%2Bp%2FlZVoq4xxF4Swb3WDElmQz4tsQMUuGI1NsgJO6l6W9ETrgVxBWIlhEJyxiJQSiyyiTr%2FE8MjxR8eNQlVNEcjNeWb0i8YRpbsvosAeYs5snkRLBiPVeB5UR009%2BzEbAcpv4swMnW2h69KWTnRexHlvzo0HfU3x778NQPl4kOwhSLgF%2FiWzHeCWj3C1eUhG9QD8KAUZF&X-Amz-Signature=2624a104d78c42d007befecc552827e9235ffd80fd6ca5d5ee862f94c59c251a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NZMLMV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAPp0M4uZxBEfn%2B2CG7ndhDzhzpE%2BKcpvU3Apc0x%2BrMNAiEA3yUHptY5%2B03B6Tujg1XeYuIO1gMIdRUl5tNGRvDq0TQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLZl0G1ExE5G4nbBTSrcA0XL7aMY1pJz%2FxKJBZC5VKHDsc2uiy1JknJ20RWeQ%2FRJKI3Wuj13oYg1Rqs5cnF8ZpWEhKvunFPle0TZ8MKylBqgpyqPXrSf8VtcY9ORgTrKnf2iM5MCJ%2FRoeHDIokCY%2FTvc%2F6geymBIl6KFDXWDEVvT126Nxk0mknbn6tXrYRKjiURQc1Vfrv9%2F0nGYymSYmV1ivb%2BGmi1ZkURMejcG9qZyccofhtyAeDphdvQLY2EgRJDHwEQxQ2oCAm8w5eAvBac6vXVE3wJDmqmUKyLhECjVFEKoyomoOClRAanBqdsaXSCuMqaWD4t0HVM5ca9z6SGVbNEUh5YC2Z5Bd0tvAYXry0%2FnKAHFpA0NAZqQdmnoW%2BCrOOp6M%2FkHxL6UhYtY8u4rFmYYCbvFOxJGCjCsAAuWwnKzQ7KlAa2QtyQM9Phtouxv3TwZgVj4kZFdlstjhs%2F4UW%2FyrOp%2FicCPt8qCjmzcDRjfpQDoZaN2hUd97JimUaYGu0yxVJOsgaPr01VrhEnf7ekXDObAdyhppNEdg36L25yx%2BQBQrckCGiVcpiZC1laHei%2FxuaL0DC3jvX6wzZ1dV4ghyHScQ8pnQaHbKxLgGzppaDHoye0FcYAstPrKk%2Fke%2BpHAfr%2FJUqa4MJTqsMMGOqUBTQMSSS65yWYZBX9EddRW%2Bp%2FlZVoq4xxF4Swb3WDElmQz4tsQMUuGI1NsgJO6l6W9ETrgVxBWIlhEJyxiJQSiyyiTr%2FE8MjxR8eNQlVNEcjNeWb0i8YRpbsvosAeYs5snkRLBiPVeB5UR009%2BzEbAcpv4swMnW2h69KWTnRexHlvzo0HfU3x778NQPl4kOwhSLgF%2FiWzHeCWj3C1eUhG9QD8KAUZF&X-Amz-Signature=c7c193ff0c61855af593b91f43e14d1debb5c500f9b44a5de57c605265a4e272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
