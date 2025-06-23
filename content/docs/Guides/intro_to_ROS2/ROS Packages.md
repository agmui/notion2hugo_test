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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZDIG6R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDRdy%2BfXWIQU3KK7%2Fx36ZMwbiDCJwgMGBjfjjdKxw81%2FAIgYyRP6OoiD6blbqBUU8Gql7n%2FGuthynYBcPh7Km1nsFwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDYdtj71X71nkyBb1SrcAz5p8FgodHRFcoyh8JK93cKxqc%2B7Vyjt%2B9Qe4ULpk09Uh%2FNPUtUt0qPEp945DgPDt889N83bumFyzHUlKtmraKQLP8KKD5rwTpGCISrQqGWcR0TXapynC9HtQETR4a8pSroEJBTBXQ%2F4WPx9urNhOV6oKllNJSpjxo89KAXi9N7eXfnvjIAmi85%2FFYr%2BSOUTS181DBS7yBJzyc5LUoREXkpiLYrCpBFQXtbGRVKA5dY5ppBgR4gdf7bmKOp3S85ROSwvvqAXJondpnPliXvmZIbNqqiPVxERFbfaJdfAiirJh29ukSRDScaGwTTJAkGSOMC1IuTLeBZqqSBC2DKmfAt5GcLQU3Qfhvv9N1wVHDngxKiNaAcwdUsoPhp3s7KutKWgvHiuIt5XslYz6Y%2Br7D2wgAEGXNf%2FYhZDI0aOKkUuzepMbUQY9BjCKHiuVirwtykXLuDNNkELNQ5gc0wDCNQ1g5OGj8qXYLJnD7kmAI1Ygg9lHCBaOLkpvTTB2tuPt%2BtNCrGtK2vuR%2BCYi%2FR9b1xDI0avceAhhiVACiCKv6YCvMsEEr61uRv%2BHl2rtAX7pQgwUgffNd6XiLgnKTs9QTA3UgIXkndN6ykZ%2Brc8jWlghJ9PexUghzAv%2BUR%2FMK6q5sIGOqUBDXh2mELy8vjPgh3kbMad9M0r05DuJWjG9pl0%2FCFEZZdc4tqVQgzhm3YUlL5DnCLuFAId2ocsSmUzompIqRYTSuNz9gA2917DcdvZvY3js0CtiJYMwINRe%2BJBvoPHAKUX7e759M1b5TpP%2FLAh%2BQpg%2B0i0ru9tjbcecP%2BR64tuujV2q%2BvZYLy7ppaJeNKu6EfOww2G%2B08E0PDTwCd0%2BMHHonLe6Z%2FP&X-Amz-Signature=d5501f32289236c13a39ca3ac77d9f5e854aa52d2c6b4812c78e35235c119a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZDIG6R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDRdy%2BfXWIQU3KK7%2Fx36ZMwbiDCJwgMGBjfjjdKxw81%2FAIgYyRP6OoiD6blbqBUU8Gql7n%2FGuthynYBcPh7Km1nsFwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDYdtj71X71nkyBb1SrcAz5p8FgodHRFcoyh8JK93cKxqc%2B7Vyjt%2B9Qe4ULpk09Uh%2FNPUtUt0qPEp945DgPDt889N83bumFyzHUlKtmraKQLP8KKD5rwTpGCISrQqGWcR0TXapynC9HtQETR4a8pSroEJBTBXQ%2F4WPx9urNhOV6oKllNJSpjxo89KAXi9N7eXfnvjIAmi85%2FFYr%2BSOUTS181DBS7yBJzyc5LUoREXkpiLYrCpBFQXtbGRVKA5dY5ppBgR4gdf7bmKOp3S85ROSwvvqAXJondpnPliXvmZIbNqqiPVxERFbfaJdfAiirJh29ukSRDScaGwTTJAkGSOMC1IuTLeBZqqSBC2DKmfAt5GcLQU3Qfhvv9N1wVHDngxKiNaAcwdUsoPhp3s7KutKWgvHiuIt5XslYz6Y%2Br7D2wgAEGXNf%2FYhZDI0aOKkUuzepMbUQY9BjCKHiuVirwtykXLuDNNkELNQ5gc0wDCNQ1g5OGj8qXYLJnD7kmAI1Ygg9lHCBaOLkpvTTB2tuPt%2BtNCrGtK2vuR%2BCYi%2FR9b1xDI0avceAhhiVACiCKv6YCvMsEEr61uRv%2BHl2rtAX7pQgwUgffNd6XiLgnKTs9QTA3UgIXkndN6ykZ%2Brc8jWlghJ9PexUghzAv%2BUR%2FMK6q5sIGOqUBDXh2mELy8vjPgh3kbMad9M0r05DuJWjG9pl0%2FCFEZZdc4tqVQgzhm3YUlL5DnCLuFAId2ocsSmUzompIqRYTSuNz9gA2917DcdvZvY3js0CtiJYMwINRe%2BJBvoPHAKUX7e759M1b5TpP%2FLAh%2BQpg%2B0i0ru9tjbcecP%2BR64tuujV2q%2BvZYLy7ppaJeNKu6EfOww2G%2B08E0PDTwCd0%2BMHHonLe6Z%2FP&X-Amz-Signature=2ed5f6666c31044eaa82a72dc8c376cd481767795f4252ee99ef39c416b5a32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZDIG6R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDRdy%2BfXWIQU3KK7%2Fx36ZMwbiDCJwgMGBjfjjdKxw81%2FAIgYyRP6OoiD6blbqBUU8Gql7n%2FGuthynYBcPh7Km1nsFwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDYdtj71X71nkyBb1SrcAz5p8FgodHRFcoyh8JK93cKxqc%2B7Vyjt%2B9Qe4ULpk09Uh%2FNPUtUt0qPEp945DgPDt889N83bumFyzHUlKtmraKQLP8KKD5rwTpGCISrQqGWcR0TXapynC9HtQETR4a8pSroEJBTBXQ%2F4WPx9urNhOV6oKllNJSpjxo89KAXi9N7eXfnvjIAmi85%2FFYr%2BSOUTS181DBS7yBJzyc5LUoREXkpiLYrCpBFQXtbGRVKA5dY5ppBgR4gdf7bmKOp3S85ROSwvvqAXJondpnPliXvmZIbNqqiPVxERFbfaJdfAiirJh29ukSRDScaGwTTJAkGSOMC1IuTLeBZqqSBC2DKmfAt5GcLQU3Qfhvv9N1wVHDngxKiNaAcwdUsoPhp3s7KutKWgvHiuIt5XslYz6Y%2Br7D2wgAEGXNf%2FYhZDI0aOKkUuzepMbUQY9BjCKHiuVirwtykXLuDNNkELNQ5gc0wDCNQ1g5OGj8qXYLJnD7kmAI1Ygg9lHCBaOLkpvTTB2tuPt%2BtNCrGtK2vuR%2BCYi%2FR9b1xDI0avceAhhiVACiCKv6YCvMsEEr61uRv%2BHl2rtAX7pQgwUgffNd6XiLgnKTs9QTA3UgIXkndN6ykZ%2Brc8jWlghJ9PexUghzAv%2BUR%2FMK6q5sIGOqUBDXh2mELy8vjPgh3kbMad9M0r05DuJWjG9pl0%2FCFEZZdc4tqVQgzhm3YUlL5DnCLuFAId2ocsSmUzompIqRYTSuNz9gA2917DcdvZvY3js0CtiJYMwINRe%2BJBvoPHAKUX7e759M1b5TpP%2FLAh%2BQpg%2B0i0ru9tjbcecP%2BR64tuujV2q%2BvZYLy7ppaJeNKu6EfOww2G%2B08E0PDTwCd0%2BMHHonLe6Z%2FP&X-Amz-Signature=233927b69a5350f52616765267412c72e855b04bc3bc895eb88bfed2137c0449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZDIG6R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDRdy%2BfXWIQU3KK7%2Fx36ZMwbiDCJwgMGBjfjjdKxw81%2FAIgYyRP6OoiD6blbqBUU8Gql7n%2FGuthynYBcPh7Km1nsFwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDYdtj71X71nkyBb1SrcAz5p8FgodHRFcoyh8JK93cKxqc%2B7Vyjt%2B9Qe4ULpk09Uh%2FNPUtUt0qPEp945DgPDt889N83bumFyzHUlKtmraKQLP8KKD5rwTpGCISrQqGWcR0TXapynC9HtQETR4a8pSroEJBTBXQ%2F4WPx9urNhOV6oKllNJSpjxo89KAXi9N7eXfnvjIAmi85%2FFYr%2BSOUTS181DBS7yBJzyc5LUoREXkpiLYrCpBFQXtbGRVKA5dY5ppBgR4gdf7bmKOp3S85ROSwvvqAXJondpnPliXvmZIbNqqiPVxERFbfaJdfAiirJh29ukSRDScaGwTTJAkGSOMC1IuTLeBZqqSBC2DKmfAt5GcLQU3Qfhvv9N1wVHDngxKiNaAcwdUsoPhp3s7KutKWgvHiuIt5XslYz6Y%2Br7D2wgAEGXNf%2FYhZDI0aOKkUuzepMbUQY9BjCKHiuVirwtykXLuDNNkELNQ5gc0wDCNQ1g5OGj8qXYLJnD7kmAI1Ygg9lHCBaOLkpvTTB2tuPt%2BtNCrGtK2vuR%2BCYi%2FR9b1xDI0avceAhhiVACiCKv6YCvMsEEr61uRv%2BHl2rtAX7pQgwUgffNd6XiLgnKTs9QTA3UgIXkndN6ykZ%2Brc8jWlghJ9PexUghzAv%2BUR%2FMK6q5sIGOqUBDXh2mELy8vjPgh3kbMad9M0r05DuJWjG9pl0%2FCFEZZdc4tqVQgzhm3YUlL5DnCLuFAId2ocsSmUzompIqRYTSuNz9gA2917DcdvZvY3js0CtiJYMwINRe%2BJBvoPHAKUX7e759M1b5TpP%2FLAh%2BQpg%2B0i0ru9tjbcecP%2BR64tuujV2q%2BvZYLy7ppaJeNKu6EfOww2G%2B08E0PDTwCd0%2BMHHonLe6Z%2FP&X-Amz-Signature=a80c44b8d513c96afebce77c17a56b8aae55f3cb5976c122ba371ed8a19be156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZDIG6R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDRdy%2BfXWIQU3KK7%2Fx36ZMwbiDCJwgMGBjfjjdKxw81%2FAIgYyRP6OoiD6blbqBUU8Gql7n%2FGuthynYBcPh7Km1nsFwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDYdtj71X71nkyBb1SrcAz5p8FgodHRFcoyh8JK93cKxqc%2B7Vyjt%2B9Qe4ULpk09Uh%2FNPUtUt0qPEp945DgPDt889N83bumFyzHUlKtmraKQLP8KKD5rwTpGCISrQqGWcR0TXapynC9HtQETR4a8pSroEJBTBXQ%2F4WPx9urNhOV6oKllNJSpjxo89KAXi9N7eXfnvjIAmi85%2FFYr%2BSOUTS181DBS7yBJzyc5LUoREXkpiLYrCpBFQXtbGRVKA5dY5ppBgR4gdf7bmKOp3S85ROSwvvqAXJondpnPliXvmZIbNqqiPVxERFbfaJdfAiirJh29ukSRDScaGwTTJAkGSOMC1IuTLeBZqqSBC2DKmfAt5GcLQU3Qfhvv9N1wVHDngxKiNaAcwdUsoPhp3s7KutKWgvHiuIt5XslYz6Y%2Br7D2wgAEGXNf%2FYhZDI0aOKkUuzepMbUQY9BjCKHiuVirwtykXLuDNNkELNQ5gc0wDCNQ1g5OGj8qXYLJnD7kmAI1Ygg9lHCBaOLkpvTTB2tuPt%2BtNCrGtK2vuR%2BCYi%2FR9b1xDI0avceAhhiVACiCKv6YCvMsEEr61uRv%2BHl2rtAX7pQgwUgffNd6XiLgnKTs9QTA3UgIXkndN6ykZ%2Brc8jWlghJ9PexUghzAv%2BUR%2FMK6q5sIGOqUBDXh2mELy8vjPgh3kbMad9M0r05DuJWjG9pl0%2FCFEZZdc4tqVQgzhm3YUlL5DnCLuFAId2ocsSmUzompIqRYTSuNz9gA2917DcdvZvY3js0CtiJYMwINRe%2BJBvoPHAKUX7e759M1b5TpP%2FLAh%2BQpg%2B0i0ru9tjbcecP%2BR64tuujV2q%2BvZYLy7ppaJeNKu6EfOww2G%2B08E0PDTwCd0%2BMHHonLe6Z%2FP&X-Amz-Signature=5c568c07579e6f47a3b366b00a1042b7c7c6d304f58f3cd614e1adbf77daf392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZDIG6R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDRdy%2BfXWIQU3KK7%2Fx36ZMwbiDCJwgMGBjfjjdKxw81%2FAIgYyRP6OoiD6blbqBUU8Gql7n%2FGuthynYBcPh7Km1nsFwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDYdtj71X71nkyBb1SrcAz5p8FgodHRFcoyh8JK93cKxqc%2B7Vyjt%2B9Qe4ULpk09Uh%2FNPUtUt0qPEp945DgPDt889N83bumFyzHUlKtmraKQLP8KKD5rwTpGCISrQqGWcR0TXapynC9HtQETR4a8pSroEJBTBXQ%2F4WPx9urNhOV6oKllNJSpjxo89KAXi9N7eXfnvjIAmi85%2FFYr%2BSOUTS181DBS7yBJzyc5LUoREXkpiLYrCpBFQXtbGRVKA5dY5ppBgR4gdf7bmKOp3S85ROSwvvqAXJondpnPliXvmZIbNqqiPVxERFbfaJdfAiirJh29ukSRDScaGwTTJAkGSOMC1IuTLeBZqqSBC2DKmfAt5GcLQU3Qfhvv9N1wVHDngxKiNaAcwdUsoPhp3s7KutKWgvHiuIt5XslYz6Y%2Br7D2wgAEGXNf%2FYhZDI0aOKkUuzepMbUQY9BjCKHiuVirwtykXLuDNNkELNQ5gc0wDCNQ1g5OGj8qXYLJnD7kmAI1Ygg9lHCBaOLkpvTTB2tuPt%2BtNCrGtK2vuR%2BCYi%2FR9b1xDI0avceAhhiVACiCKv6YCvMsEEr61uRv%2BHl2rtAX7pQgwUgffNd6XiLgnKTs9QTA3UgIXkndN6ykZ%2Brc8jWlghJ9PexUghzAv%2BUR%2FMK6q5sIGOqUBDXh2mELy8vjPgh3kbMad9M0r05DuJWjG9pl0%2FCFEZZdc4tqVQgzhm3YUlL5DnCLuFAId2ocsSmUzompIqRYTSuNz9gA2917DcdvZvY3js0CtiJYMwINRe%2BJBvoPHAKUX7e759M1b5TpP%2FLAh%2BQpg%2B0i0ru9tjbcecP%2BR64tuujV2q%2BvZYLy7ppaJeNKu6EfOww2G%2B08E0PDTwCd0%2BMHHonLe6Z%2FP&X-Amz-Signature=d88afaa7be3ff07607ecba668d7289433fcf8c54696a2f0f3a065fd46ce56c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZDIG6R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDRdy%2BfXWIQU3KK7%2Fx36ZMwbiDCJwgMGBjfjjdKxw81%2FAIgYyRP6OoiD6blbqBUU8Gql7n%2FGuthynYBcPh7Km1nsFwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDYdtj71X71nkyBb1SrcAz5p8FgodHRFcoyh8JK93cKxqc%2B7Vyjt%2B9Qe4ULpk09Uh%2FNPUtUt0qPEp945DgPDt889N83bumFyzHUlKtmraKQLP8KKD5rwTpGCISrQqGWcR0TXapynC9HtQETR4a8pSroEJBTBXQ%2F4WPx9urNhOV6oKllNJSpjxo89KAXi9N7eXfnvjIAmi85%2FFYr%2BSOUTS181DBS7yBJzyc5LUoREXkpiLYrCpBFQXtbGRVKA5dY5ppBgR4gdf7bmKOp3S85ROSwvvqAXJondpnPliXvmZIbNqqiPVxERFbfaJdfAiirJh29ukSRDScaGwTTJAkGSOMC1IuTLeBZqqSBC2DKmfAt5GcLQU3Qfhvv9N1wVHDngxKiNaAcwdUsoPhp3s7KutKWgvHiuIt5XslYz6Y%2Br7D2wgAEGXNf%2FYhZDI0aOKkUuzepMbUQY9BjCKHiuVirwtykXLuDNNkELNQ5gc0wDCNQ1g5OGj8qXYLJnD7kmAI1Ygg9lHCBaOLkpvTTB2tuPt%2BtNCrGtK2vuR%2BCYi%2FR9b1xDI0avceAhhiVACiCKv6YCvMsEEr61uRv%2BHl2rtAX7pQgwUgffNd6XiLgnKTs9QTA3UgIXkndN6ykZ%2Brc8jWlghJ9PexUghzAv%2BUR%2FMK6q5sIGOqUBDXh2mELy8vjPgh3kbMad9M0r05DuJWjG9pl0%2FCFEZZdc4tqVQgzhm3YUlL5DnCLuFAId2ocsSmUzompIqRYTSuNz9gA2917DcdvZvY3js0CtiJYMwINRe%2BJBvoPHAKUX7e759M1b5TpP%2FLAh%2BQpg%2B0i0ru9tjbcecP%2BR64tuujV2q%2BvZYLy7ppaJeNKu6EfOww2G%2B08E0PDTwCd0%2BMHHonLe6Z%2FP&X-Amz-Signature=ce055bb389f715521d74657bac1c93c6343468ffdaa84bcddc9ae05bff6117aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
