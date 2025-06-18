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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7ZNMJW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI9EXJnSqikwTQWV1Uk5Vemay2o1b6%2BGV0jj%2FZYjxYuQIhAOH9C0NHoaBL%2F3OXD6j5QHjIbxmLGguuJuNePhGj8hZaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj4ymtMM97WPVeoesq3ANfGp17yznHQdWYZX%2B5XUIbh1TbXYDaIRlBEMGXKkkyND1GujBd8u5PXuTYDFwcB8rVVM%2FO0k2EUMPfchuN%2BfSf7Qy7ypO0d1KqroxG2enxPkRRZL3QnpTTvThciPmE0FeZAHXHIvGmBz72Xs004y0gNNveFA%2BP2lMC6v5JuIObdA3SFwHcektvuOhuljlH2jHmCf5dIzMKkfm1PkK4%2BIaSkkeD9%2FoBLQ%2BqNhW5%2BDjZablgj2WGHU3hpN5S4KeLL9DI2xVZN7WzSNLtX%2F7Sq4kCFveaajk5Hkxm8ZyuGBoUGGdparms%2ByTaqNG%2FwOnoEYycjBxn2GREUXflw80wvb5yDpZwUTpcgfLAJ1sqfSjARqo9KZ%2BLJxTXNHGopDeA%2BadmtJYgstBAcBpIdN2hooFOhZp0E4oW1Ld6bxB8hKjXnLetUh63jlFVMbTeC2U2gMu57mh99EDkTf0gg22LmrooYVPkp%2BMCfyJp%2FMh3oyoacrGhe1%2BhhPiGm%2FxcJNgU5xrVvBsvP62dzvQezMHDfgZTOTuNzMEM1vCAn2nb1vsblvR6HoK%2FIoMYbF4YGkYBhCQBQITbjLshdm7jH20mTgfJ18rxJAykzd9jr1EBXBKeI0KglDMxQMClcGbMMTDk88rCBjqkAav72TNzQW4lrZcPE7VhNcvp2I7vCBzzbkZabSmFn5kmX53ySOk%2BwseTZewn3ZXvtAdunsz6vysiPDF4kkv0F6O4CreJp7mz2dJrzPCmPf0jtYgdK%2BjHT49aCXyKirsaQva01%2BIMvO47vR1iZk7TZtGMEp1YMbbQfSqIkRToScaXqhjlFef4vpdTb19HmMp4r2%2Bd%2FyVlOrxczag%2Fm2WwSFfwXLBT&X-Amz-Signature=2491b2233181b230d6c748af5fbe3bcaad929c72e5802dec8cc0ffed0edb6fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7ZNMJW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI9EXJnSqikwTQWV1Uk5Vemay2o1b6%2BGV0jj%2FZYjxYuQIhAOH9C0NHoaBL%2F3OXD6j5QHjIbxmLGguuJuNePhGj8hZaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj4ymtMM97WPVeoesq3ANfGp17yznHQdWYZX%2B5XUIbh1TbXYDaIRlBEMGXKkkyND1GujBd8u5PXuTYDFwcB8rVVM%2FO0k2EUMPfchuN%2BfSf7Qy7ypO0d1KqroxG2enxPkRRZL3QnpTTvThciPmE0FeZAHXHIvGmBz72Xs004y0gNNveFA%2BP2lMC6v5JuIObdA3SFwHcektvuOhuljlH2jHmCf5dIzMKkfm1PkK4%2BIaSkkeD9%2FoBLQ%2BqNhW5%2BDjZablgj2WGHU3hpN5S4KeLL9DI2xVZN7WzSNLtX%2F7Sq4kCFveaajk5Hkxm8ZyuGBoUGGdparms%2ByTaqNG%2FwOnoEYycjBxn2GREUXflw80wvb5yDpZwUTpcgfLAJ1sqfSjARqo9KZ%2BLJxTXNHGopDeA%2BadmtJYgstBAcBpIdN2hooFOhZp0E4oW1Ld6bxB8hKjXnLetUh63jlFVMbTeC2U2gMu57mh99EDkTf0gg22LmrooYVPkp%2BMCfyJp%2FMh3oyoacrGhe1%2BhhPiGm%2FxcJNgU5xrVvBsvP62dzvQezMHDfgZTOTuNzMEM1vCAn2nb1vsblvR6HoK%2FIoMYbF4YGkYBhCQBQITbjLshdm7jH20mTgfJ18rxJAykzd9jr1EBXBKeI0KglDMxQMClcGbMMTDk88rCBjqkAav72TNzQW4lrZcPE7VhNcvp2I7vCBzzbkZabSmFn5kmX53ySOk%2BwseTZewn3ZXvtAdunsz6vysiPDF4kkv0F6O4CreJp7mz2dJrzPCmPf0jtYgdK%2BjHT49aCXyKirsaQva01%2BIMvO47vR1iZk7TZtGMEp1YMbbQfSqIkRToScaXqhjlFef4vpdTb19HmMp4r2%2Bd%2FyVlOrxczag%2Fm2WwSFfwXLBT&X-Amz-Signature=d32679d292fd3d8774c730c553f251f448a03cb7ac7283b45adb1804e425b923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7ZNMJW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI9EXJnSqikwTQWV1Uk5Vemay2o1b6%2BGV0jj%2FZYjxYuQIhAOH9C0NHoaBL%2F3OXD6j5QHjIbxmLGguuJuNePhGj8hZaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj4ymtMM97WPVeoesq3ANfGp17yznHQdWYZX%2B5XUIbh1TbXYDaIRlBEMGXKkkyND1GujBd8u5PXuTYDFwcB8rVVM%2FO0k2EUMPfchuN%2BfSf7Qy7ypO0d1KqroxG2enxPkRRZL3QnpTTvThciPmE0FeZAHXHIvGmBz72Xs004y0gNNveFA%2BP2lMC6v5JuIObdA3SFwHcektvuOhuljlH2jHmCf5dIzMKkfm1PkK4%2BIaSkkeD9%2FoBLQ%2BqNhW5%2BDjZablgj2WGHU3hpN5S4KeLL9DI2xVZN7WzSNLtX%2F7Sq4kCFveaajk5Hkxm8ZyuGBoUGGdparms%2ByTaqNG%2FwOnoEYycjBxn2GREUXflw80wvb5yDpZwUTpcgfLAJ1sqfSjARqo9KZ%2BLJxTXNHGopDeA%2BadmtJYgstBAcBpIdN2hooFOhZp0E4oW1Ld6bxB8hKjXnLetUh63jlFVMbTeC2U2gMu57mh99EDkTf0gg22LmrooYVPkp%2BMCfyJp%2FMh3oyoacrGhe1%2BhhPiGm%2FxcJNgU5xrVvBsvP62dzvQezMHDfgZTOTuNzMEM1vCAn2nb1vsblvR6HoK%2FIoMYbF4YGkYBhCQBQITbjLshdm7jH20mTgfJ18rxJAykzd9jr1EBXBKeI0KglDMxQMClcGbMMTDk88rCBjqkAav72TNzQW4lrZcPE7VhNcvp2I7vCBzzbkZabSmFn5kmX53ySOk%2BwseTZewn3ZXvtAdunsz6vysiPDF4kkv0F6O4CreJp7mz2dJrzPCmPf0jtYgdK%2BjHT49aCXyKirsaQva01%2BIMvO47vR1iZk7TZtGMEp1YMbbQfSqIkRToScaXqhjlFef4vpdTb19HmMp4r2%2Bd%2FyVlOrxczag%2Fm2WwSFfwXLBT&X-Amz-Signature=5e6703c5915b240d446574600f763b43ca0f8924ccfc8f0ac24662a7ccbbb359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7ZNMJW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI9EXJnSqikwTQWV1Uk5Vemay2o1b6%2BGV0jj%2FZYjxYuQIhAOH9C0NHoaBL%2F3OXD6j5QHjIbxmLGguuJuNePhGj8hZaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj4ymtMM97WPVeoesq3ANfGp17yznHQdWYZX%2B5XUIbh1TbXYDaIRlBEMGXKkkyND1GujBd8u5PXuTYDFwcB8rVVM%2FO0k2EUMPfchuN%2BfSf7Qy7ypO0d1KqroxG2enxPkRRZL3QnpTTvThciPmE0FeZAHXHIvGmBz72Xs004y0gNNveFA%2BP2lMC6v5JuIObdA3SFwHcektvuOhuljlH2jHmCf5dIzMKkfm1PkK4%2BIaSkkeD9%2FoBLQ%2BqNhW5%2BDjZablgj2WGHU3hpN5S4KeLL9DI2xVZN7WzSNLtX%2F7Sq4kCFveaajk5Hkxm8ZyuGBoUGGdparms%2ByTaqNG%2FwOnoEYycjBxn2GREUXflw80wvb5yDpZwUTpcgfLAJ1sqfSjARqo9KZ%2BLJxTXNHGopDeA%2BadmtJYgstBAcBpIdN2hooFOhZp0E4oW1Ld6bxB8hKjXnLetUh63jlFVMbTeC2U2gMu57mh99EDkTf0gg22LmrooYVPkp%2BMCfyJp%2FMh3oyoacrGhe1%2BhhPiGm%2FxcJNgU5xrVvBsvP62dzvQezMHDfgZTOTuNzMEM1vCAn2nb1vsblvR6HoK%2FIoMYbF4YGkYBhCQBQITbjLshdm7jH20mTgfJ18rxJAykzd9jr1EBXBKeI0KglDMxQMClcGbMMTDk88rCBjqkAav72TNzQW4lrZcPE7VhNcvp2I7vCBzzbkZabSmFn5kmX53ySOk%2BwseTZewn3ZXvtAdunsz6vysiPDF4kkv0F6O4CreJp7mz2dJrzPCmPf0jtYgdK%2BjHT49aCXyKirsaQva01%2BIMvO47vR1iZk7TZtGMEp1YMbbQfSqIkRToScaXqhjlFef4vpdTb19HmMp4r2%2Bd%2FyVlOrxczag%2Fm2WwSFfwXLBT&X-Amz-Signature=bbd1dcdb94ef7720fb80b53033761fc542019c4869c9bf7e1a52f890a996de50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7ZNMJW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI9EXJnSqikwTQWV1Uk5Vemay2o1b6%2BGV0jj%2FZYjxYuQIhAOH9C0NHoaBL%2F3OXD6j5QHjIbxmLGguuJuNePhGj8hZaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj4ymtMM97WPVeoesq3ANfGp17yznHQdWYZX%2B5XUIbh1TbXYDaIRlBEMGXKkkyND1GujBd8u5PXuTYDFwcB8rVVM%2FO0k2EUMPfchuN%2BfSf7Qy7ypO0d1KqroxG2enxPkRRZL3QnpTTvThciPmE0FeZAHXHIvGmBz72Xs004y0gNNveFA%2BP2lMC6v5JuIObdA3SFwHcektvuOhuljlH2jHmCf5dIzMKkfm1PkK4%2BIaSkkeD9%2FoBLQ%2BqNhW5%2BDjZablgj2WGHU3hpN5S4KeLL9DI2xVZN7WzSNLtX%2F7Sq4kCFveaajk5Hkxm8ZyuGBoUGGdparms%2ByTaqNG%2FwOnoEYycjBxn2GREUXflw80wvb5yDpZwUTpcgfLAJ1sqfSjARqo9KZ%2BLJxTXNHGopDeA%2BadmtJYgstBAcBpIdN2hooFOhZp0E4oW1Ld6bxB8hKjXnLetUh63jlFVMbTeC2U2gMu57mh99EDkTf0gg22LmrooYVPkp%2BMCfyJp%2FMh3oyoacrGhe1%2BhhPiGm%2FxcJNgU5xrVvBsvP62dzvQezMHDfgZTOTuNzMEM1vCAn2nb1vsblvR6HoK%2FIoMYbF4YGkYBhCQBQITbjLshdm7jH20mTgfJ18rxJAykzd9jr1EBXBKeI0KglDMxQMClcGbMMTDk88rCBjqkAav72TNzQW4lrZcPE7VhNcvp2I7vCBzzbkZabSmFn5kmX53ySOk%2BwseTZewn3ZXvtAdunsz6vysiPDF4kkv0F6O4CreJp7mz2dJrzPCmPf0jtYgdK%2BjHT49aCXyKirsaQva01%2BIMvO47vR1iZk7TZtGMEp1YMbbQfSqIkRToScaXqhjlFef4vpdTb19HmMp4r2%2Bd%2FyVlOrxczag%2Fm2WwSFfwXLBT&X-Amz-Signature=3c5ec37c24701294c4ed7b2942f51ad478250ac2f9b30d73f8d7fc21d4cade9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7ZNMJW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI9EXJnSqikwTQWV1Uk5Vemay2o1b6%2BGV0jj%2FZYjxYuQIhAOH9C0NHoaBL%2F3OXD6j5QHjIbxmLGguuJuNePhGj8hZaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj4ymtMM97WPVeoesq3ANfGp17yznHQdWYZX%2B5XUIbh1TbXYDaIRlBEMGXKkkyND1GujBd8u5PXuTYDFwcB8rVVM%2FO0k2EUMPfchuN%2BfSf7Qy7ypO0d1KqroxG2enxPkRRZL3QnpTTvThciPmE0FeZAHXHIvGmBz72Xs004y0gNNveFA%2BP2lMC6v5JuIObdA3SFwHcektvuOhuljlH2jHmCf5dIzMKkfm1PkK4%2BIaSkkeD9%2FoBLQ%2BqNhW5%2BDjZablgj2WGHU3hpN5S4KeLL9DI2xVZN7WzSNLtX%2F7Sq4kCFveaajk5Hkxm8ZyuGBoUGGdparms%2ByTaqNG%2FwOnoEYycjBxn2GREUXflw80wvb5yDpZwUTpcgfLAJ1sqfSjARqo9KZ%2BLJxTXNHGopDeA%2BadmtJYgstBAcBpIdN2hooFOhZp0E4oW1Ld6bxB8hKjXnLetUh63jlFVMbTeC2U2gMu57mh99EDkTf0gg22LmrooYVPkp%2BMCfyJp%2FMh3oyoacrGhe1%2BhhPiGm%2FxcJNgU5xrVvBsvP62dzvQezMHDfgZTOTuNzMEM1vCAn2nb1vsblvR6HoK%2FIoMYbF4YGkYBhCQBQITbjLshdm7jH20mTgfJ18rxJAykzd9jr1EBXBKeI0KglDMxQMClcGbMMTDk88rCBjqkAav72TNzQW4lrZcPE7VhNcvp2I7vCBzzbkZabSmFn5kmX53ySOk%2BwseTZewn3ZXvtAdunsz6vysiPDF4kkv0F6O4CreJp7mz2dJrzPCmPf0jtYgdK%2BjHT49aCXyKirsaQva01%2BIMvO47vR1iZk7TZtGMEp1YMbbQfSqIkRToScaXqhjlFef4vpdTb19HmMp4r2%2Bd%2FyVlOrxczag%2Fm2WwSFfwXLBT&X-Amz-Signature=3f22e84fca82eab9884611babe71353277244e4b23bf2861a3a50262dccdd5ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7ZNMJW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI9EXJnSqikwTQWV1Uk5Vemay2o1b6%2BGV0jj%2FZYjxYuQIhAOH9C0NHoaBL%2F3OXD6j5QHjIbxmLGguuJuNePhGj8hZaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj4ymtMM97WPVeoesq3ANfGp17yznHQdWYZX%2B5XUIbh1TbXYDaIRlBEMGXKkkyND1GujBd8u5PXuTYDFwcB8rVVM%2FO0k2EUMPfchuN%2BfSf7Qy7ypO0d1KqroxG2enxPkRRZL3QnpTTvThciPmE0FeZAHXHIvGmBz72Xs004y0gNNveFA%2BP2lMC6v5JuIObdA3SFwHcektvuOhuljlH2jHmCf5dIzMKkfm1PkK4%2BIaSkkeD9%2FoBLQ%2BqNhW5%2BDjZablgj2WGHU3hpN5S4KeLL9DI2xVZN7WzSNLtX%2F7Sq4kCFveaajk5Hkxm8ZyuGBoUGGdparms%2ByTaqNG%2FwOnoEYycjBxn2GREUXflw80wvb5yDpZwUTpcgfLAJ1sqfSjARqo9KZ%2BLJxTXNHGopDeA%2BadmtJYgstBAcBpIdN2hooFOhZp0E4oW1Ld6bxB8hKjXnLetUh63jlFVMbTeC2U2gMu57mh99EDkTf0gg22LmrooYVPkp%2BMCfyJp%2FMh3oyoacrGhe1%2BhhPiGm%2FxcJNgU5xrVvBsvP62dzvQezMHDfgZTOTuNzMEM1vCAn2nb1vsblvR6HoK%2FIoMYbF4YGkYBhCQBQITbjLshdm7jH20mTgfJ18rxJAykzd9jr1EBXBKeI0KglDMxQMClcGbMMTDk88rCBjqkAav72TNzQW4lrZcPE7VhNcvp2I7vCBzzbkZabSmFn5kmX53ySOk%2BwseTZewn3ZXvtAdunsz6vysiPDF4kkv0F6O4CreJp7mz2dJrzPCmPf0jtYgdK%2BjHT49aCXyKirsaQva01%2BIMvO47vR1iZk7TZtGMEp1YMbbQfSqIkRToScaXqhjlFef4vpdTb19HmMp4r2%2Bd%2FyVlOrxczag%2Fm2WwSFfwXLBT&X-Amz-Signature=f3c8cf7c98203b3aacdd75433b12bad3642e6cdf2e527394cb84f11848a90524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
