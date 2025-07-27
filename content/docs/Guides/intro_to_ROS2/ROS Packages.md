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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624KQD4GD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDPH4bGKwRIyzcewwot6mmVLYhcN09POlhHfY69Ck68AAiA23kRcmpk5vnnU06znfq%2BtsERiCrBeQadN%2BkcuqOaWCCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMXDvM5zJyCqbFsmTdKtwDBKnmkh%2BnUxrHfm3oreCrzMevwJiYKxXt2RaElYXeKI2kGmNCmU%2FBGAZ8p6DvASNqYfPj3g7WmEh5jHdawY7N%2F0or4f5zeAc%2BgawoaPLvrFDeobV2MMld2bSvKekaRf9FTf1bZfx3i1xtp0Key6t5%2F6OdjoKskWoxGozbhAl5MDcNk65oNbqY0He2CvsRAgFRICyUppovdd6A7KS8lWYR%2FFtdL%2FlZMXUof6BCsyZ3t5WcsT2kP0K03hb40ty96GWnFQyUOSNlD3XXGLVuuwGJcvLDbB9gUIo2%2BuMujaP6Gyj8vKdmQrNiKV1W%2B4yDPKCJU8iev29x%2Fq8fn%2BZtHhTQjd%2B%2BJjo6UJHlWidwkLjCwfJWDj6CcWMKkZqL2IMBIkB1r6Lr1RDZ86px85ju%2FlSKMprpu3kLNfhTjqLem1ZoCqP5DONAeeF1rJraDGAbwWRzBDUAX%2FPoqWIrpkzi2NX8fydlhxsckrK222v3MSIUh7VYgoOzYec64kiDWhmpWIMo0JtxNHdDtKuDOYPol%2FB0Spc8wSVwro%2BGJjHQHKTnnZG8yKhR%2BPZvzWO5a2syU2ikCAwGO20SkxvE6xD6V1c33nvyWUri6jpjUUjBckSa14uLyORkivw%2FHTCdUwUw8feYxAY6pgEsEJ8nmmQ6pXSBVa4K8F8pWPZr1K%2FuRpwFyzD5gOuiIr9X0s9sSoPNWGGVkuYSJ4dei1wOE5WOXGChjBMI037X7Ar4WRrrI9%2FEOozER9kGJUQxkJsykuDxtTdfZj0gn%2F9%2FX3zV95eAz3Ua3lZRVPuAm7Ky2u7sIZEkDfdHUkojUxu5JSNPxB5g4YvzebwsD5Bp%2BQ2yJL%2FoWhwWyzFPuQg0nz9ESFFt&X-Amz-Signature=c54f84af937c77fb71df5c349bfa397abcc83620f1b54ef44cd6820c2ec6acd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624KQD4GD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDPH4bGKwRIyzcewwot6mmVLYhcN09POlhHfY69Ck68AAiA23kRcmpk5vnnU06znfq%2BtsERiCrBeQadN%2BkcuqOaWCCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMXDvM5zJyCqbFsmTdKtwDBKnmkh%2BnUxrHfm3oreCrzMevwJiYKxXt2RaElYXeKI2kGmNCmU%2FBGAZ8p6DvASNqYfPj3g7WmEh5jHdawY7N%2F0or4f5zeAc%2BgawoaPLvrFDeobV2MMld2bSvKekaRf9FTf1bZfx3i1xtp0Key6t5%2F6OdjoKskWoxGozbhAl5MDcNk65oNbqY0He2CvsRAgFRICyUppovdd6A7KS8lWYR%2FFtdL%2FlZMXUof6BCsyZ3t5WcsT2kP0K03hb40ty96GWnFQyUOSNlD3XXGLVuuwGJcvLDbB9gUIo2%2BuMujaP6Gyj8vKdmQrNiKV1W%2B4yDPKCJU8iev29x%2Fq8fn%2BZtHhTQjd%2B%2BJjo6UJHlWidwkLjCwfJWDj6CcWMKkZqL2IMBIkB1r6Lr1RDZ86px85ju%2FlSKMprpu3kLNfhTjqLem1ZoCqP5DONAeeF1rJraDGAbwWRzBDUAX%2FPoqWIrpkzi2NX8fydlhxsckrK222v3MSIUh7VYgoOzYec64kiDWhmpWIMo0JtxNHdDtKuDOYPol%2FB0Spc8wSVwro%2BGJjHQHKTnnZG8yKhR%2BPZvzWO5a2syU2ikCAwGO20SkxvE6xD6V1c33nvyWUri6jpjUUjBckSa14uLyORkivw%2FHTCdUwUw8feYxAY6pgEsEJ8nmmQ6pXSBVa4K8F8pWPZr1K%2FuRpwFyzD5gOuiIr9X0s9sSoPNWGGVkuYSJ4dei1wOE5WOXGChjBMI037X7Ar4WRrrI9%2FEOozER9kGJUQxkJsykuDxtTdfZj0gn%2F9%2FX3zV95eAz3Ua3lZRVPuAm7Ky2u7sIZEkDfdHUkojUxu5JSNPxB5g4YvzebwsD5Bp%2BQ2yJL%2FoWhwWyzFPuQg0nz9ESFFt&X-Amz-Signature=fd5a2d82947b55b9a59dc7b0502f426d968a6e8dc2b7f42a851f39e3cd7fe8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624KQD4GD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDPH4bGKwRIyzcewwot6mmVLYhcN09POlhHfY69Ck68AAiA23kRcmpk5vnnU06znfq%2BtsERiCrBeQadN%2BkcuqOaWCCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMXDvM5zJyCqbFsmTdKtwDBKnmkh%2BnUxrHfm3oreCrzMevwJiYKxXt2RaElYXeKI2kGmNCmU%2FBGAZ8p6DvASNqYfPj3g7WmEh5jHdawY7N%2F0or4f5zeAc%2BgawoaPLvrFDeobV2MMld2bSvKekaRf9FTf1bZfx3i1xtp0Key6t5%2F6OdjoKskWoxGozbhAl5MDcNk65oNbqY0He2CvsRAgFRICyUppovdd6A7KS8lWYR%2FFtdL%2FlZMXUof6BCsyZ3t5WcsT2kP0K03hb40ty96GWnFQyUOSNlD3XXGLVuuwGJcvLDbB9gUIo2%2BuMujaP6Gyj8vKdmQrNiKV1W%2B4yDPKCJU8iev29x%2Fq8fn%2BZtHhTQjd%2B%2BJjo6UJHlWidwkLjCwfJWDj6CcWMKkZqL2IMBIkB1r6Lr1RDZ86px85ju%2FlSKMprpu3kLNfhTjqLem1ZoCqP5DONAeeF1rJraDGAbwWRzBDUAX%2FPoqWIrpkzi2NX8fydlhxsckrK222v3MSIUh7VYgoOzYec64kiDWhmpWIMo0JtxNHdDtKuDOYPol%2FB0Spc8wSVwro%2BGJjHQHKTnnZG8yKhR%2BPZvzWO5a2syU2ikCAwGO20SkxvE6xD6V1c33nvyWUri6jpjUUjBckSa14uLyORkivw%2FHTCdUwUw8feYxAY6pgEsEJ8nmmQ6pXSBVa4K8F8pWPZr1K%2FuRpwFyzD5gOuiIr9X0s9sSoPNWGGVkuYSJ4dei1wOE5WOXGChjBMI037X7Ar4WRrrI9%2FEOozER9kGJUQxkJsykuDxtTdfZj0gn%2F9%2FX3zV95eAz3Ua3lZRVPuAm7Ky2u7sIZEkDfdHUkojUxu5JSNPxB5g4YvzebwsD5Bp%2BQ2yJL%2FoWhwWyzFPuQg0nz9ESFFt&X-Amz-Signature=a5723ab989111d796ea77fa0a457dbd075155f7d166234a1563600fc86b3d253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624KQD4GD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDPH4bGKwRIyzcewwot6mmVLYhcN09POlhHfY69Ck68AAiA23kRcmpk5vnnU06znfq%2BtsERiCrBeQadN%2BkcuqOaWCCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMXDvM5zJyCqbFsmTdKtwDBKnmkh%2BnUxrHfm3oreCrzMevwJiYKxXt2RaElYXeKI2kGmNCmU%2FBGAZ8p6DvASNqYfPj3g7WmEh5jHdawY7N%2F0or4f5zeAc%2BgawoaPLvrFDeobV2MMld2bSvKekaRf9FTf1bZfx3i1xtp0Key6t5%2F6OdjoKskWoxGozbhAl5MDcNk65oNbqY0He2CvsRAgFRICyUppovdd6A7KS8lWYR%2FFtdL%2FlZMXUof6BCsyZ3t5WcsT2kP0K03hb40ty96GWnFQyUOSNlD3XXGLVuuwGJcvLDbB9gUIo2%2BuMujaP6Gyj8vKdmQrNiKV1W%2B4yDPKCJU8iev29x%2Fq8fn%2BZtHhTQjd%2B%2BJjo6UJHlWidwkLjCwfJWDj6CcWMKkZqL2IMBIkB1r6Lr1RDZ86px85ju%2FlSKMprpu3kLNfhTjqLem1ZoCqP5DONAeeF1rJraDGAbwWRzBDUAX%2FPoqWIrpkzi2NX8fydlhxsckrK222v3MSIUh7VYgoOzYec64kiDWhmpWIMo0JtxNHdDtKuDOYPol%2FB0Spc8wSVwro%2BGJjHQHKTnnZG8yKhR%2BPZvzWO5a2syU2ikCAwGO20SkxvE6xD6V1c33nvyWUri6jpjUUjBckSa14uLyORkivw%2FHTCdUwUw8feYxAY6pgEsEJ8nmmQ6pXSBVa4K8F8pWPZr1K%2FuRpwFyzD5gOuiIr9X0s9sSoPNWGGVkuYSJ4dei1wOE5WOXGChjBMI037X7Ar4WRrrI9%2FEOozER9kGJUQxkJsykuDxtTdfZj0gn%2F9%2FX3zV95eAz3Ua3lZRVPuAm7Ky2u7sIZEkDfdHUkojUxu5JSNPxB5g4YvzebwsD5Bp%2BQ2yJL%2FoWhwWyzFPuQg0nz9ESFFt&X-Amz-Signature=d516a6bc8401082cb8639295abd9a9b48057b4c22fc029da9438d5c2ccd0d1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624KQD4GD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDPH4bGKwRIyzcewwot6mmVLYhcN09POlhHfY69Ck68AAiA23kRcmpk5vnnU06znfq%2BtsERiCrBeQadN%2BkcuqOaWCCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMXDvM5zJyCqbFsmTdKtwDBKnmkh%2BnUxrHfm3oreCrzMevwJiYKxXt2RaElYXeKI2kGmNCmU%2FBGAZ8p6DvASNqYfPj3g7WmEh5jHdawY7N%2F0or4f5zeAc%2BgawoaPLvrFDeobV2MMld2bSvKekaRf9FTf1bZfx3i1xtp0Key6t5%2F6OdjoKskWoxGozbhAl5MDcNk65oNbqY0He2CvsRAgFRICyUppovdd6A7KS8lWYR%2FFtdL%2FlZMXUof6BCsyZ3t5WcsT2kP0K03hb40ty96GWnFQyUOSNlD3XXGLVuuwGJcvLDbB9gUIo2%2BuMujaP6Gyj8vKdmQrNiKV1W%2B4yDPKCJU8iev29x%2Fq8fn%2BZtHhTQjd%2B%2BJjo6UJHlWidwkLjCwfJWDj6CcWMKkZqL2IMBIkB1r6Lr1RDZ86px85ju%2FlSKMprpu3kLNfhTjqLem1ZoCqP5DONAeeF1rJraDGAbwWRzBDUAX%2FPoqWIrpkzi2NX8fydlhxsckrK222v3MSIUh7VYgoOzYec64kiDWhmpWIMo0JtxNHdDtKuDOYPol%2FB0Spc8wSVwro%2BGJjHQHKTnnZG8yKhR%2BPZvzWO5a2syU2ikCAwGO20SkxvE6xD6V1c33nvyWUri6jpjUUjBckSa14uLyORkivw%2FHTCdUwUw8feYxAY6pgEsEJ8nmmQ6pXSBVa4K8F8pWPZr1K%2FuRpwFyzD5gOuiIr9X0s9sSoPNWGGVkuYSJ4dei1wOE5WOXGChjBMI037X7Ar4WRrrI9%2FEOozER9kGJUQxkJsykuDxtTdfZj0gn%2F9%2FX3zV95eAz3Ua3lZRVPuAm7Ky2u7sIZEkDfdHUkojUxu5JSNPxB5g4YvzebwsD5Bp%2BQ2yJL%2FoWhwWyzFPuQg0nz9ESFFt&X-Amz-Signature=28b223cce4b5d3dedc28227989a65c78b99513608b0e05c24c870a8eac4222fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624KQD4GD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDPH4bGKwRIyzcewwot6mmVLYhcN09POlhHfY69Ck68AAiA23kRcmpk5vnnU06znfq%2BtsERiCrBeQadN%2BkcuqOaWCCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMXDvM5zJyCqbFsmTdKtwDBKnmkh%2BnUxrHfm3oreCrzMevwJiYKxXt2RaElYXeKI2kGmNCmU%2FBGAZ8p6DvASNqYfPj3g7WmEh5jHdawY7N%2F0or4f5zeAc%2BgawoaPLvrFDeobV2MMld2bSvKekaRf9FTf1bZfx3i1xtp0Key6t5%2F6OdjoKskWoxGozbhAl5MDcNk65oNbqY0He2CvsRAgFRICyUppovdd6A7KS8lWYR%2FFtdL%2FlZMXUof6BCsyZ3t5WcsT2kP0K03hb40ty96GWnFQyUOSNlD3XXGLVuuwGJcvLDbB9gUIo2%2BuMujaP6Gyj8vKdmQrNiKV1W%2B4yDPKCJU8iev29x%2Fq8fn%2BZtHhTQjd%2B%2BJjo6UJHlWidwkLjCwfJWDj6CcWMKkZqL2IMBIkB1r6Lr1RDZ86px85ju%2FlSKMprpu3kLNfhTjqLem1ZoCqP5DONAeeF1rJraDGAbwWRzBDUAX%2FPoqWIrpkzi2NX8fydlhxsckrK222v3MSIUh7VYgoOzYec64kiDWhmpWIMo0JtxNHdDtKuDOYPol%2FB0Spc8wSVwro%2BGJjHQHKTnnZG8yKhR%2BPZvzWO5a2syU2ikCAwGO20SkxvE6xD6V1c33nvyWUri6jpjUUjBckSa14uLyORkivw%2FHTCdUwUw8feYxAY6pgEsEJ8nmmQ6pXSBVa4K8F8pWPZr1K%2FuRpwFyzD5gOuiIr9X0s9sSoPNWGGVkuYSJ4dei1wOE5WOXGChjBMI037X7Ar4WRrrI9%2FEOozER9kGJUQxkJsykuDxtTdfZj0gn%2F9%2FX3zV95eAz3Ua3lZRVPuAm7Ky2u7sIZEkDfdHUkojUxu5JSNPxB5g4YvzebwsD5Bp%2BQ2yJL%2FoWhwWyzFPuQg0nz9ESFFt&X-Amz-Signature=ccb3ab5b2d649992149a1e2645d4865c73b55d5c931fd2f14c825a1f8d01c3c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624KQD4GD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDPH4bGKwRIyzcewwot6mmVLYhcN09POlhHfY69Ck68AAiA23kRcmpk5vnnU06znfq%2BtsERiCrBeQadN%2BkcuqOaWCCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMXDvM5zJyCqbFsmTdKtwDBKnmkh%2BnUxrHfm3oreCrzMevwJiYKxXt2RaElYXeKI2kGmNCmU%2FBGAZ8p6DvASNqYfPj3g7WmEh5jHdawY7N%2F0or4f5zeAc%2BgawoaPLvrFDeobV2MMld2bSvKekaRf9FTf1bZfx3i1xtp0Key6t5%2F6OdjoKskWoxGozbhAl5MDcNk65oNbqY0He2CvsRAgFRICyUppovdd6A7KS8lWYR%2FFtdL%2FlZMXUof6BCsyZ3t5WcsT2kP0K03hb40ty96GWnFQyUOSNlD3XXGLVuuwGJcvLDbB9gUIo2%2BuMujaP6Gyj8vKdmQrNiKV1W%2B4yDPKCJU8iev29x%2Fq8fn%2BZtHhTQjd%2B%2BJjo6UJHlWidwkLjCwfJWDj6CcWMKkZqL2IMBIkB1r6Lr1RDZ86px85ju%2FlSKMprpu3kLNfhTjqLem1ZoCqP5DONAeeF1rJraDGAbwWRzBDUAX%2FPoqWIrpkzi2NX8fydlhxsckrK222v3MSIUh7VYgoOzYec64kiDWhmpWIMo0JtxNHdDtKuDOYPol%2FB0Spc8wSVwro%2BGJjHQHKTnnZG8yKhR%2BPZvzWO5a2syU2ikCAwGO20SkxvE6xD6V1c33nvyWUri6jpjUUjBckSa14uLyORkivw%2FHTCdUwUw8feYxAY6pgEsEJ8nmmQ6pXSBVa4K8F8pWPZr1K%2FuRpwFyzD5gOuiIr9X0s9sSoPNWGGVkuYSJ4dei1wOE5WOXGChjBMI037X7Ar4WRrrI9%2FEOozER9kGJUQxkJsykuDxtTdfZj0gn%2F9%2FX3zV95eAz3Ua3lZRVPuAm7Ky2u7sIZEkDfdHUkojUxu5JSNPxB5g4YvzebwsD5Bp%2BQ2yJL%2FoWhwWyzFPuQg0nz9ESFFt&X-Amz-Signature=f7ec53a8951af8b4f7390e78792885e2580a1b7f4d0b836a00355a1cfaf735ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
