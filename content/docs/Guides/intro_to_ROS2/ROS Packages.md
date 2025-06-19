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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD3TVEKZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjW%2Boz3Dlt%2FwvfGJGTmXTbruZCiHVrdVI9Yp8AE9gjAiEAxouc24TEeOMceQKl8yPECtGRR5a%2FPcnjw20Ar0KrilUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWebBJRrURoxva0syrcA7%2F4ZNhiqJZgvE0LIwBveudxmo%2FzXXTDy9i%2FmvUUpXAPpA%2Ft06vTjm1Gh7dZuSLoJWAFXzsbs33PJw9Nf99iIkKeC3T8m18%2F1cwUPmfEPImhaJqgPR1VsejawCJTyIY7Uy1Ii81bIjfazmisGxKAwPtrQrZzjVf3uz1r1hN2s%2FxSKWJwPFX7y51b32MBHUPvVrTi15Wpt%2B%2FYh9IG6wbEZpVua6l%2FcFSKTHfOGG5PRsMu5l2eAwLHAd%2BPrReuRt9uQAo35kHLi3exgpfSCyJWOwrE5S4OelgHzvsN%2BuzH6VqKVPxjJ%2FEt6870dIkq7UA7MZobvC%2BHZW%2FEjlJG5pUj68hmJYwQcahiTddRXL9WISjxCaBvsdDaS5JX2YcbXv61QvKCv5vmOWzVP4m2WWGUdYnelJ0Lz3jcseJpyx4Aty7D6ytndF72kMlFgINYbJg%2BieY1SkcR4va2s41BgByM6kmuFEuX2VO7lsyYZJVs%2BnGBFi2MdCS%2FfbJpYntfGVw%2F%2BO36Gw2WN3dFAS2OZlXKDBkT5a0w5g3%2FFIOkd0IaPdfL%2Btab3yf75cxdBxoTLkhVOC9TrJ%2BnSUgzt6u%2F038SlJ71kRNLMNO2xfI91HzxuSpO9EfKFMfsub4hw1RuMMbRz8IGOqUBnbzIbssJFrTsWuhr7Dg%2BJ8UsbNCtrpiOfFZ52vTaGmGXMVe%2BsIpvXKvet09bzKY6kbdFALxr6WenwxjXZj7WL11Zy3smFLynTun1QoeT5o9BuQgcJ%2BCC%2F2w5duveLYz0%2BaXlkAlIQET%2BbW95UHIGoVdyxmB%2BtKVhrI49GoRq5kh8r73xy%2FnH4Ic%2FTF73Xvl8WyfZeKtQaLRzhFlKyCtuhyFwtbF4&X-Amz-Signature=c731e7f4e1263f43d69f418d60ed60e704eec72848da49f04360e135797bfe94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD3TVEKZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjW%2Boz3Dlt%2FwvfGJGTmXTbruZCiHVrdVI9Yp8AE9gjAiEAxouc24TEeOMceQKl8yPECtGRR5a%2FPcnjw20Ar0KrilUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWebBJRrURoxva0syrcA7%2F4ZNhiqJZgvE0LIwBveudxmo%2FzXXTDy9i%2FmvUUpXAPpA%2Ft06vTjm1Gh7dZuSLoJWAFXzsbs33PJw9Nf99iIkKeC3T8m18%2F1cwUPmfEPImhaJqgPR1VsejawCJTyIY7Uy1Ii81bIjfazmisGxKAwPtrQrZzjVf3uz1r1hN2s%2FxSKWJwPFX7y51b32MBHUPvVrTi15Wpt%2B%2FYh9IG6wbEZpVua6l%2FcFSKTHfOGG5PRsMu5l2eAwLHAd%2BPrReuRt9uQAo35kHLi3exgpfSCyJWOwrE5S4OelgHzvsN%2BuzH6VqKVPxjJ%2FEt6870dIkq7UA7MZobvC%2BHZW%2FEjlJG5pUj68hmJYwQcahiTddRXL9WISjxCaBvsdDaS5JX2YcbXv61QvKCv5vmOWzVP4m2WWGUdYnelJ0Lz3jcseJpyx4Aty7D6ytndF72kMlFgINYbJg%2BieY1SkcR4va2s41BgByM6kmuFEuX2VO7lsyYZJVs%2BnGBFi2MdCS%2FfbJpYntfGVw%2F%2BO36Gw2WN3dFAS2OZlXKDBkT5a0w5g3%2FFIOkd0IaPdfL%2Btab3yf75cxdBxoTLkhVOC9TrJ%2BnSUgzt6u%2F038SlJ71kRNLMNO2xfI91HzxuSpO9EfKFMfsub4hw1RuMMbRz8IGOqUBnbzIbssJFrTsWuhr7Dg%2BJ8UsbNCtrpiOfFZ52vTaGmGXMVe%2BsIpvXKvet09bzKY6kbdFALxr6WenwxjXZj7WL11Zy3smFLynTun1QoeT5o9BuQgcJ%2BCC%2F2w5duveLYz0%2BaXlkAlIQET%2BbW95UHIGoVdyxmB%2BtKVhrI49GoRq5kh8r73xy%2FnH4Ic%2FTF73Xvl8WyfZeKtQaLRzhFlKyCtuhyFwtbF4&X-Amz-Signature=3cc7693236734a1b556822a47053c30695ce9b88d1aa499ce13665b4422e8eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD3TVEKZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjW%2Boz3Dlt%2FwvfGJGTmXTbruZCiHVrdVI9Yp8AE9gjAiEAxouc24TEeOMceQKl8yPECtGRR5a%2FPcnjw20Ar0KrilUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWebBJRrURoxva0syrcA7%2F4ZNhiqJZgvE0LIwBveudxmo%2FzXXTDy9i%2FmvUUpXAPpA%2Ft06vTjm1Gh7dZuSLoJWAFXzsbs33PJw9Nf99iIkKeC3T8m18%2F1cwUPmfEPImhaJqgPR1VsejawCJTyIY7Uy1Ii81bIjfazmisGxKAwPtrQrZzjVf3uz1r1hN2s%2FxSKWJwPFX7y51b32MBHUPvVrTi15Wpt%2B%2FYh9IG6wbEZpVua6l%2FcFSKTHfOGG5PRsMu5l2eAwLHAd%2BPrReuRt9uQAo35kHLi3exgpfSCyJWOwrE5S4OelgHzvsN%2BuzH6VqKVPxjJ%2FEt6870dIkq7UA7MZobvC%2BHZW%2FEjlJG5pUj68hmJYwQcahiTddRXL9WISjxCaBvsdDaS5JX2YcbXv61QvKCv5vmOWzVP4m2WWGUdYnelJ0Lz3jcseJpyx4Aty7D6ytndF72kMlFgINYbJg%2BieY1SkcR4va2s41BgByM6kmuFEuX2VO7lsyYZJVs%2BnGBFi2MdCS%2FfbJpYntfGVw%2F%2BO36Gw2WN3dFAS2OZlXKDBkT5a0w5g3%2FFIOkd0IaPdfL%2Btab3yf75cxdBxoTLkhVOC9TrJ%2BnSUgzt6u%2F038SlJ71kRNLMNO2xfI91HzxuSpO9EfKFMfsub4hw1RuMMbRz8IGOqUBnbzIbssJFrTsWuhr7Dg%2BJ8UsbNCtrpiOfFZ52vTaGmGXMVe%2BsIpvXKvet09bzKY6kbdFALxr6WenwxjXZj7WL11Zy3smFLynTun1QoeT5o9BuQgcJ%2BCC%2F2w5duveLYz0%2BaXlkAlIQET%2BbW95UHIGoVdyxmB%2BtKVhrI49GoRq5kh8r73xy%2FnH4Ic%2FTF73Xvl8WyfZeKtQaLRzhFlKyCtuhyFwtbF4&X-Amz-Signature=dab1187095ff2a6546576671247599dd7ef1c8de285b67588de87927b111139e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD3TVEKZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjW%2Boz3Dlt%2FwvfGJGTmXTbruZCiHVrdVI9Yp8AE9gjAiEAxouc24TEeOMceQKl8yPECtGRR5a%2FPcnjw20Ar0KrilUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWebBJRrURoxva0syrcA7%2F4ZNhiqJZgvE0LIwBveudxmo%2FzXXTDy9i%2FmvUUpXAPpA%2Ft06vTjm1Gh7dZuSLoJWAFXzsbs33PJw9Nf99iIkKeC3T8m18%2F1cwUPmfEPImhaJqgPR1VsejawCJTyIY7Uy1Ii81bIjfazmisGxKAwPtrQrZzjVf3uz1r1hN2s%2FxSKWJwPFX7y51b32MBHUPvVrTi15Wpt%2B%2FYh9IG6wbEZpVua6l%2FcFSKTHfOGG5PRsMu5l2eAwLHAd%2BPrReuRt9uQAo35kHLi3exgpfSCyJWOwrE5S4OelgHzvsN%2BuzH6VqKVPxjJ%2FEt6870dIkq7UA7MZobvC%2BHZW%2FEjlJG5pUj68hmJYwQcahiTddRXL9WISjxCaBvsdDaS5JX2YcbXv61QvKCv5vmOWzVP4m2WWGUdYnelJ0Lz3jcseJpyx4Aty7D6ytndF72kMlFgINYbJg%2BieY1SkcR4va2s41BgByM6kmuFEuX2VO7lsyYZJVs%2BnGBFi2MdCS%2FfbJpYntfGVw%2F%2BO36Gw2WN3dFAS2OZlXKDBkT5a0w5g3%2FFIOkd0IaPdfL%2Btab3yf75cxdBxoTLkhVOC9TrJ%2BnSUgzt6u%2F038SlJ71kRNLMNO2xfI91HzxuSpO9EfKFMfsub4hw1RuMMbRz8IGOqUBnbzIbssJFrTsWuhr7Dg%2BJ8UsbNCtrpiOfFZ52vTaGmGXMVe%2BsIpvXKvet09bzKY6kbdFALxr6WenwxjXZj7WL11Zy3smFLynTun1QoeT5o9BuQgcJ%2BCC%2F2w5duveLYz0%2BaXlkAlIQET%2BbW95UHIGoVdyxmB%2BtKVhrI49GoRq5kh8r73xy%2FnH4Ic%2FTF73Xvl8WyfZeKtQaLRzhFlKyCtuhyFwtbF4&X-Amz-Signature=1fa33059782c6b1f4193442abc697698313a14186588c1784b6289735385e456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD3TVEKZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjW%2Boz3Dlt%2FwvfGJGTmXTbruZCiHVrdVI9Yp8AE9gjAiEAxouc24TEeOMceQKl8yPECtGRR5a%2FPcnjw20Ar0KrilUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWebBJRrURoxva0syrcA7%2F4ZNhiqJZgvE0LIwBveudxmo%2FzXXTDy9i%2FmvUUpXAPpA%2Ft06vTjm1Gh7dZuSLoJWAFXzsbs33PJw9Nf99iIkKeC3T8m18%2F1cwUPmfEPImhaJqgPR1VsejawCJTyIY7Uy1Ii81bIjfazmisGxKAwPtrQrZzjVf3uz1r1hN2s%2FxSKWJwPFX7y51b32MBHUPvVrTi15Wpt%2B%2FYh9IG6wbEZpVua6l%2FcFSKTHfOGG5PRsMu5l2eAwLHAd%2BPrReuRt9uQAo35kHLi3exgpfSCyJWOwrE5S4OelgHzvsN%2BuzH6VqKVPxjJ%2FEt6870dIkq7UA7MZobvC%2BHZW%2FEjlJG5pUj68hmJYwQcahiTddRXL9WISjxCaBvsdDaS5JX2YcbXv61QvKCv5vmOWzVP4m2WWGUdYnelJ0Lz3jcseJpyx4Aty7D6ytndF72kMlFgINYbJg%2BieY1SkcR4va2s41BgByM6kmuFEuX2VO7lsyYZJVs%2BnGBFi2MdCS%2FfbJpYntfGVw%2F%2BO36Gw2WN3dFAS2OZlXKDBkT5a0w5g3%2FFIOkd0IaPdfL%2Btab3yf75cxdBxoTLkhVOC9TrJ%2BnSUgzt6u%2F038SlJ71kRNLMNO2xfI91HzxuSpO9EfKFMfsub4hw1RuMMbRz8IGOqUBnbzIbssJFrTsWuhr7Dg%2BJ8UsbNCtrpiOfFZ52vTaGmGXMVe%2BsIpvXKvet09bzKY6kbdFALxr6WenwxjXZj7WL11Zy3smFLynTun1QoeT5o9BuQgcJ%2BCC%2F2w5duveLYz0%2BaXlkAlIQET%2BbW95UHIGoVdyxmB%2BtKVhrI49GoRq5kh8r73xy%2FnH4Ic%2FTF73Xvl8WyfZeKtQaLRzhFlKyCtuhyFwtbF4&X-Amz-Signature=928ac5e5a55bc298d629ad2f870afb9bf96b27bc6ed9408363d78ad446c5c8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD3TVEKZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjW%2Boz3Dlt%2FwvfGJGTmXTbruZCiHVrdVI9Yp8AE9gjAiEAxouc24TEeOMceQKl8yPECtGRR5a%2FPcnjw20Ar0KrilUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWebBJRrURoxva0syrcA7%2F4ZNhiqJZgvE0LIwBveudxmo%2FzXXTDy9i%2FmvUUpXAPpA%2Ft06vTjm1Gh7dZuSLoJWAFXzsbs33PJw9Nf99iIkKeC3T8m18%2F1cwUPmfEPImhaJqgPR1VsejawCJTyIY7Uy1Ii81bIjfazmisGxKAwPtrQrZzjVf3uz1r1hN2s%2FxSKWJwPFX7y51b32MBHUPvVrTi15Wpt%2B%2FYh9IG6wbEZpVua6l%2FcFSKTHfOGG5PRsMu5l2eAwLHAd%2BPrReuRt9uQAo35kHLi3exgpfSCyJWOwrE5S4OelgHzvsN%2BuzH6VqKVPxjJ%2FEt6870dIkq7UA7MZobvC%2BHZW%2FEjlJG5pUj68hmJYwQcahiTddRXL9WISjxCaBvsdDaS5JX2YcbXv61QvKCv5vmOWzVP4m2WWGUdYnelJ0Lz3jcseJpyx4Aty7D6ytndF72kMlFgINYbJg%2BieY1SkcR4va2s41BgByM6kmuFEuX2VO7lsyYZJVs%2BnGBFi2MdCS%2FfbJpYntfGVw%2F%2BO36Gw2WN3dFAS2OZlXKDBkT5a0w5g3%2FFIOkd0IaPdfL%2Btab3yf75cxdBxoTLkhVOC9TrJ%2BnSUgzt6u%2F038SlJ71kRNLMNO2xfI91HzxuSpO9EfKFMfsub4hw1RuMMbRz8IGOqUBnbzIbssJFrTsWuhr7Dg%2BJ8UsbNCtrpiOfFZ52vTaGmGXMVe%2BsIpvXKvet09bzKY6kbdFALxr6WenwxjXZj7WL11Zy3smFLynTun1QoeT5o9BuQgcJ%2BCC%2F2w5duveLYz0%2BaXlkAlIQET%2BbW95UHIGoVdyxmB%2BtKVhrI49GoRq5kh8r73xy%2FnH4Ic%2FTF73Xvl8WyfZeKtQaLRzhFlKyCtuhyFwtbF4&X-Amz-Signature=8a13e321bb430b0366e8fa1b17702dd24777f86a9483572118b8dbec0362c310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD3TVEKZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjW%2Boz3Dlt%2FwvfGJGTmXTbruZCiHVrdVI9Yp8AE9gjAiEAxouc24TEeOMceQKl8yPECtGRR5a%2FPcnjw20Ar0KrilUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWebBJRrURoxva0syrcA7%2F4ZNhiqJZgvE0LIwBveudxmo%2FzXXTDy9i%2FmvUUpXAPpA%2Ft06vTjm1Gh7dZuSLoJWAFXzsbs33PJw9Nf99iIkKeC3T8m18%2F1cwUPmfEPImhaJqgPR1VsejawCJTyIY7Uy1Ii81bIjfazmisGxKAwPtrQrZzjVf3uz1r1hN2s%2FxSKWJwPFX7y51b32MBHUPvVrTi15Wpt%2B%2FYh9IG6wbEZpVua6l%2FcFSKTHfOGG5PRsMu5l2eAwLHAd%2BPrReuRt9uQAo35kHLi3exgpfSCyJWOwrE5S4OelgHzvsN%2BuzH6VqKVPxjJ%2FEt6870dIkq7UA7MZobvC%2BHZW%2FEjlJG5pUj68hmJYwQcahiTddRXL9WISjxCaBvsdDaS5JX2YcbXv61QvKCv5vmOWzVP4m2WWGUdYnelJ0Lz3jcseJpyx4Aty7D6ytndF72kMlFgINYbJg%2BieY1SkcR4va2s41BgByM6kmuFEuX2VO7lsyYZJVs%2BnGBFi2MdCS%2FfbJpYntfGVw%2F%2BO36Gw2WN3dFAS2OZlXKDBkT5a0w5g3%2FFIOkd0IaPdfL%2Btab3yf75cxdBxoTLkhVOC9TrJ%2BnSUgzt6u%2F038SlJ71kRNLMNO2xfI91HzxuSpO9EfKFMfsub4hw1RuMMbRz8IGOqUBnbzIbssJFrTsWuhr7Dg%2BJ8UsbNCtrpiOfFZ52vTaGmGXMVe%2BsIpvXKvet09bzKY6kbdFALxr6WenwxjXZj7WL11Zy3smFLynTun1QoeT5o9BuQgcJ%2BCC%2F2w5duveLYz0%2BaXlkAlIQET%2BbW95UHIGoVdyxmB%2BtKVhrI49GoRq5kh8r73xy%2FnH4Ic%2FTF73Xvl8WyfZeKtQaLRzhFlKyCtuhyFwtbF4&X-Amz-Signature=372150762aeecf6e83c5daecbc2f5f3f6817972538e78fcb81cb5680e1d9f961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
