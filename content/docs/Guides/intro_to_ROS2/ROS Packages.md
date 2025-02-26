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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH65HCSY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDLfrc92rtlWHkAl6uU%2Bd3BGX4YTRZZ%2B5W17xX53anjSAiEAwaHpS%2FoGtvQAKO5DZEK8UZADPVeVAvFrP%2F63HJAPAu0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGi7vspd7%2FS%2B8pBaOCrcAxBtcEcBGPjEkCHz7u8lQgjtwBRfS8K5iD6EdoUSXwNpJ52OYnJKlyXNUklPTAJE8avAejM%2F7wtlI2AeobRTbm%2FTSc%2BdyfTrcZeEcnrdv1VLE6iW4MakxUZOeNeS0t0R8L3VYsJ37rvBPw2I%2B9wbN0wOvVnZHOJ%2BojIq1Do%2BLWS7cCY3O2scGj1%2BvU5mbtmgmZvREKykF9NIbcJpV1tFMjIqL95ElxYk%2FMZRGH%2BjnrMXnOUmNk3a7Vqa7Ti90ZyR90hOOfqJ1F2zEP30AnQ0TG8WSuR32LuIJ%2BiJzCfGAuzA4Fp7j%2FWtM3i4frrehJaw3q3MKFED6WnKOkTQSOOZzq0RQtKlCKsvQFPFAc%2FSsCZoChXYIc4jMvjTAw3Of7uNO7yQIZwil5%2Bo3Fa%2BD69corbzBZh8OX1dEWC3NOkUm5vRkCJnrS3KUdaKEh6j6fddJKhapB10s5dlMiXetdYpF7763JAxZFSUnh0TPCVr8tduV2TJrnvIpx%2Bx0leZiP%2BgzCzQuYFeiQrWwHoOEb0BM4Xjv5mJS66VxusUDoqCaNhjrUOcTQkTZr%2BhmFlN%2BiSa03Tvs2%2FUjXb6DB41htVl64wK2CR3rAPLNo7qRuSxBTxhqSaSwgASRz0Pmnn1MKG9%2Bb0GOqUBdgn3q%2B7pdDlwVX8FGynOx70bZvD2aL9%2FncZpkkKLiceQmiu461QTTXgQLWHEdiQgZVhyiIP1DHaZnvR99NuFXdPdqowyrqcl0Ns8c8YuXTzKER%2F4gKKzXEog63rOU9qvMro4L9BC2gMkhbFvU3Uolx02LCjLBb6sJOd6CZEMM9wAZcv%2F2ow1IGzhTXL8PjHbdcMXq%2BGshEPUFXk2k1IP7H4WRXtK&X-Amz-Signature=e0dcf483358d9b90204cf0adeb8df4848a4cbea388fbb6ea78da8f942eff898e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH65HCSY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDLfrc92rtlWHkAl6uU%2Bd3BGX4YTRZZ%2B5W17xX53anjSAiEAwaHpS%2FoGtvQAKO5DZEK8UZADPVeVAvFrP%2F63HJAPAu0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGi7vspd7%2FS%2B8pBaOCrcAxBtcEcBGPjEkCHz7u8lQgjtwBRfS8K5iD6EdoUSXwNpJ52OYnJKlyXNUklPTAJE8avAejM%2F7wtlI2AeobRTbm%2FTSc%2BdyfTrcZeEcnrdv1VLE6iW4MakxUZOeNeS0t0R8L3VYsJ37rvBPw2I%2B9wbN0wOvVnZHOJ%2BojIq1Do%2BLWS7cCY3O2scGj1%2BvU5mbtmgmZvREKykF9NIbcJpV1tFMjIqL95ElxYk%2FMZRGH%2BjnrMXnOUmNk3a7Vqa7Ti90ZyR90hOOfqJ1F2zEP30AnQ0TG8WSuR32LuIJ%2BiJzCfGAuzA4Fp7j%2FWtM3i4frrehJaw3q3MKFED6WnKOkTQSOOZzq0RQtKlCKsvQFPFAc%2FSsCZoChXYIc4jMvjTAw3Of7uNO7yQIZwil5%2Bo3Fa%2BD69corbzBZh8OX1dEWC3NOkUm5vRkCJnrS3KUdaKEh6j6fddJKhapB10s5dlMiXetdYpF7763JAxZFSUnh0TPCVr8tduV2TJrnvIpx%2Bx0leZiP%2BgzCzQuYFeiQrWwHoOEb0BM4Xjv5mJS66VxusUDoqCaNhjrUOcTQkTZr%2BhmFlN%2BiSa03Tvs2%2FUjXb6DB41htVl64wK2CR3rAPLNo7qRuSxBTxhqSaSwgASRz0Pmnn1MKG9%2Bb0GOqUBdgn3q%2B7pdDlwVX8FGynOx70bZvD2aL9%2FncZpkkKLiceQmiu461QTTXgQLWHEdiQgZVhyiIP1DHaZnvR99NuFXdPdqowyrqcl0Ns8c8YuXTzKER%2F4gKKzXEog63rOU9qvMro4L9BC2gMkhbFvU3Uolx02LCjLBb6sJOd6CZEMM9wAZcv%2F2ow1IGzhTXL8PjHbdcMXq%2BGshEPUFXk2k1IP7H4WRXtK&X-Amz-Signature=c0b53837dd2c73746470b7afccfa7294d51879c605043013c5b9fdc27de4fec9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH65HCSY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDLfrc92rtlWHkAl6uU%2Bd3BGX4YTRZZ%2B5W17xX53anjSAiEAwaHpS%2FoGtvQAKO5DZEK8UZADPVeVAvFrP%2F63HJAPAu0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGi7vspd7%2FS%2B8pBaOCrcAxBtcEcBGPjEkCHz7u8lQgjtwBRfS8K5iD6EdoUSXwNpJ52OYnJKlyXNUklPTAJE8avAejM%2F7wtlI2AeobRTbm%2FTSc%2BdyfTrcZeEcnrdv1VLE6iW4MakxUZOeNeS0t0R8L3VYsJ37rvBPw2I%2B9wbN0wOvVnZHOJ%2BojIq1Do%2BLWS7cCY3O2scGj1%2BvU5mbtmgmZvREKykF9NIbcJpV1tFMjIqL95ElxYk%2FMZRGH%2BjnrMXnOUmNk3a7Vqa7Ti90ZyR90hOOfqJ1F2zEP30AnQ0TG8WSuR32LuIJ%2BiJzCfGAuzA4Fp7j%2FWtM3i4frrehJaw3q3MKFED6WnKOkTQSOOZzq0RQtKlCKsvQFPFAc%2FSsCZoChXYIc4jMvjTAw3Of7uNO7yQIZwil5%2Bo3Fa%2BD69corbzBZh8OX1dEWC3NOkUm5vRkCJnrS3KUdaKEh6j6fddJKhapB10s5dlMiXetdYpF7763JAxZFSUnh0TPCVr8tduV2TJrnvIpx%2Bx0leZiP%2BgzCzQuYFeiQrWwHoOEb0BM4Xjv5mJS66VxusUDoqCaNhjrUOcTQkTZr%2BhmFlN%2BiSa03Tvs2%2FUjXb6DB41htVl64wK2CR3rAPLNo7qRuSxBTxhqSaSwgASRz0Pmnn1MKG9%2Bb0GOqUBdgn3q%2B7pdDlwVX8FGynOx70bZvD2aL9%2FncZpkkKLiceQmiu461QTTXgQLWHEdiQgZVhyiIP1DHaZnvR99NuFXdPdqowyrqcl0Ns8c8YuXTzKER%2F4gKKzXEog63rOU9qvMro4L9BC2gMkhbFvU3Uolx02LCjLBb6sJOd6CZEMM9wAZcv%2F2ow1IGzhTXL8PjHbdcMXq%2BGshEPUFXk2k1IP7H4WRXtK&X-Amz-Signature=cd00eb7ebba6d5ff35aff3937c911b989c4a1c154ffcb6d724f3aed7ee85c3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH65HCSY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDLfrc92rtlWHkAl6uU%2Bd3BGX4YTRZZ%2B5W17xX53anjSAiEAwaHpS%2FoGtvQAKO5DZEK8UZADPVeVAvFrP%2F63HJAPAu0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGi7vspd7%2FS%2B8pBaOCrcAxBtcEcBGPjEkCHz7u8lQgjtwBRfS8K5iD6EdoUSXwNpJ52OYnJKlyXNUklPTAJE8avAejM%2F7wtlI2AeobRTbm%2FTSc%2BdyfTrcZeEcnrdv1VLE6iW4MakxUZOeNeS0t0R8L3VYsJ37rvBPw2I%2B9wbN0wOvVnZHOJ%2BojIq1Do%2BLWS7cCY3O2scGj1%2BvU5mbtmgmZvREKykF9NIbcJpV1tFMjIqL95ElxYk%2FMZRGH%2BjnrMXnOUmNk3a7Vqa7Ti90ZyR90hOOfqJ1F2zEP30AnQ0TG8WSuR32LuIJ%2BiJzCfGAuzA4Fp7j%2FWtM3i4frrehJaw3q3MKFED6WnKOkTQSOOZzq0RQtKlCKsvQFPFAc%2FSsCZoChXYIc4jMvjTAw3Of7uNO7yQIZwil5%2Bo3Fa%2BD69corbzBZh8OX1dEWC3NOkUm5vRkCJnrS3KUdaKEh6j6fddJKhapB10s5dlMiXetdYpF7763JAxZFSUnh0TPCVr8tduV2TJrnvIpx%2Bx0leZiP%2BgzCzQuYFeiQrWwHoOEb0BM4Xjv5mJS66VxusUDoqCaNhjrUOcTQkTZr%2BhmFlN%2BiSa03Tvs2%2FUjXb6DB41htVl64wK2CR3rAPLNo7qRuSxBTxhqSaSwgASRz0Pmnn1MKG9%2Bb0GOqUBdgn3q%2B7pdDlwVX8FGynOx70bZvD2aL9%2FncZpkkKLiceQmiu461QTTXgQLWHEdiQgZVhyiIP1DHaZnvR99NuFXdPdqowyrqcl0Ns8c8YuXTzKER%2F4gKKzXEog63rOU9qvMro4L9BC2gMkhbFvU3Uolx02LCjLBb6sJOd6CZEMM9wAZcv%2F2ow1IGzhTXL8PjHbdcMXq%2BGshEPUFXk2k1IP7H4WRXtK&X-Amz-Signature=48d16c99b6555b6197efc3c3fd2fa4b455e783758c06974bab28563caaa0bc53&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH65HCSY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDLfrc92rtlWHkAl6uU%2Bd3BGX4YTRZZ%2B5W17xX53anjSAiEAwaHpS%2FoGtvQAKO5DZEK8UZADPVeVAvFrP%2F63HJAPAu0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGi7vspd7%2FS%2B8pBaOCrcAxBtcEcBGPjEkCHz7u8lQgjtwBRfS8K5iD6EdoUSXwNpJ52OYnJKlyXNUklPTAJE8avAejM%2F7wtlI2AeobRTbm%2FTSc%2BdyfTrcZeEcnrdv1VLE6iW4MakxUZOeNeS0t0R8L3VYsJ37rvBPw2I%2B9wbN0wOvVnZHOJ%2BojIq1Do%2BLWS7cCY3O2scGj1%2BvU5mbtmgmZvREKykF9NIbcJpV1tFMjIqL95ElxYk%2FMZRGH%2BjnrMXnOUmNk3a7Vqa7Ti90ZyR90hOOfqJ1F2zEP30AnQ0TG8WSuR32LuIJ%2BiJzCfGAuzA4Fp7j%2FWtM3i4frrehJaw3q3MKFED6WnKOkTQSOOZzq0RQtKlCKsvQFPFAc%2FSsCZoChXYIc4jMvjTAw3Of7uNO7yQIZwil5%2Bo3Fa%2BD69corbzBZh8OX1dEWC3NOkUm5vRkCJnrS3KUdaKEh6j6fddJKhapB10s5dlMiXetdYpF7763JAxZFSUnh0TPCVr8tduV2TJrnvIpx%2Bx0leZiP%2BgzCzQuYFeiQrWwHoOEb0BM4Xjv5mJS66VxusUDoqCaNhjrUOcTQkTZr%2BhmFlN%2BiSa03Tvs2%2FUjXb6DB41htVl64wK2CR3rAPLNo7qRuSxBTxhqSaSwgASRz0Pmnn1MKG9%2Bb0GOqUBdgn3q%2B7pdDlwVX8FGynOx70bZvD2aL9%2FncZpkkKLiceQmiu461QTTXgQLWHEdiQgZVhyiIP1DHaZnvR99NuFXdPdqowyrqcl0Ns8c8YuXTzKER%2F4gKKzXEog63rOU9qvMro4L9BC2gMkhbFvU3Uolx02LCjLBb6sJOd6CZEMM9wAZcv%2F2ow1IGzhTXL8PjHbdcMXq%2BGshEPUFXk2k1IP7H4WRXtK&X-Amz-Signature=b1136a43622cf76e495a686e5f599f10650c471714e35bd6d127faa664943954&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH65HCSY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDLfrc92rtlWHkAl6uU%2Bd3BGX4YTRZZ%2B5W17xX53anjSAiEAwaHpS%2FoGtvQAKO5DZEK8UZADPVeVAvFrP%2F63HJAPAu0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGi7vspd7%2FS%2B8pBaOCrcAxBtcEcBGPjEkCHz7u8lQgjtwBRfS8K5iD6EdoUSXwNpJ52OYnJKlyXNUklPTAJE8avAejM%2F7wtlI2AeobRTbm%2FTSc%2BdyfTrcZeEcnrdv1VLE6iW4MakxUZOeNeS0t0R8L3VYsJ37rvBPw2I%2B9wbN0wOvVnZHOJ%2BojIq1Do%2BLWS7cCY3O2scGj1%2BvU5mbtmgmZvREKykF9NIbcJpV1tFMjIqL95ElxYk%2FMZRGH%2BjnrMXnOUmNk3a7Vqa7Ti90ZyR90hOOfqJ1F2zEP30AnQ0TG8WSuR32LuIJ%2BiJzCfGAuzA4Fp7j%2FWtM3i4frrehJaw3q3MKFED6WnKOkTQSOOZzq0RQtKlCKsvQFPFAc%2FSsCZoChXYIc4jMvjTAw3Of7uNO7yQIZwil5%2Bo3Fa%2BD69corbzBZh8OX1dEWC3NOkUm5vRkCJnrS3KUdaKEh6j6fddJKhapB10s5dlMiXetdYpF7763JAxZFSUnh0TPCVr8tduV2TJrnvIpx%2Bx0leZiP%2BgzCzQuYFeiQrWwHoOEb0BM4Xjv5mJS66VxusUDoqCaNhjrUOcTQkTZr%2BhmFlN%2BiSa03Tvs2%2FUjXb6DB41htVl64wK2CR3rAPLNo7qRuSxBTxhqSaSwgASRz0Pmnn1MKG9%2Bb0GOqUBdgn3q%2B7pdDlwVX8FGynOx70bZvD2aL9%2FncZpkkKLiceQmiu461QTTXgQLWHEdiQgZVhyiIP1DHaZnvR99NuFXdPdqowyrqcl0Ns8c8YuXTzKER%2F4gKKzXEog63rOU9qvMro4L9BC2gMkhbFvU3Uolx02LCjLBb6sJOd6CZEMM9wAZcv%2F2ow1IGzhTXL8PjHbdcMXq%2BGshEPUFXk2k1IP7H4WRXtK&X-Amz-Signature=d3851820acc375af661d1808fba075d99a71d5038050515094cc4506b55d419c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH65HCSY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDLfrc92rtlWHkAl6uU%2Bd3BGX4YTRZZ%2B5W17xX53anjSAiEAwaHpS%2FoGtvQAKO5DZEK8UZADPVeVAvFrP%2F63HJAPAu0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGi7vspd7%2FS%2B8pBaOCrcAxBtcEcBGPjEkCHz7u8lQgjtwBRfS8K5iD6EdoUSXwNpJ52OYnJKlyXNUklPTAJE8avAejM%2F7wtlI2AeobRTbm%2FTSc%2BdyfTrcZeEcnrdv1VLE6iW4MakxUZOeNeS0t0R8L3VYsJ37rvBPw2I%2B9wbN0wOvVnZHOJ%2BojIq1Do%2BLWS7cCY3O2scGj1%2BvU5mbtmgmZvREKykF9NIbcJpV1tFMjIqL95ElxYk%2FMZRGH%2BjnrMXnOUmNk3a7Vqa7Ti90ZyR90hOOfqJ1F2zEP30AnQ0TG8WSuR32LuIJ%2BiJzCfGAuzA4Fp7j%2FWtM3i4frrehJaw3q3MKFED6WnKOkTQSOOZzq0RQtKlCKsvQFPFAc%2FSsCZoChXYIc4jMvjTAw3Of7uNO7yQIZwil5%2Bo3Fa%2BD69corbzBZh8OX1dEWC3NOkUm5vRkCJnrS3KUdaKEh6j6fddJKhapB10s5dlMiXetdYpF7763JAxZFSUnh0TPCVr8tduV2TJrnvIpx%2Bx0leZiP%2BgzCzQuYFeiQrWwHoOEb0BM4Xjv5mJS66VxusUDoqCaNhjrUOcTQkTZr%2BhmFlN%2BiSa03Tvs2%2FUjXb6DB41htVl64wK2CR3rAPLNo7qRuSxBTxhqSaSwgASRz0Pmnn1MKG9%2Bb0GOqUBdgn3q%2B7pdDlwVX8FGynOx70bZvD2aL9%2FncZpkkKLiceQmiu461QTTXgQLWHEdiQgZVhyiIP1DHaZnvR99NuFXdPdqowyrqcl0Ns8c8YuXTzKER%2F4gKKzXEog63rOU9qvMro4L9BC2gMkhbFvU3Uolx02LCjLBb6sJOd6CZEMM9wAZcv%2F2ow1IGzhTXL8PjHbdcMXq%2BGshEPUFXk2k1IP7H4WRXtK&X-Amz-Signature=b53e5f36453446960f8e09d23eb331cae082a768bf6c0e103d1d67cc7aaf8b72&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
