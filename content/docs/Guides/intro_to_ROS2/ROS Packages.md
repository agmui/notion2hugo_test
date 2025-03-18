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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSCLFXP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1Js2EbsDii%2BcTUeFrbn9XPn1Ex32GpXPrEhCvPJsHVQIhAL%2BACOc%2Fj3uh0X1UPnyo4ATlRFRXgLRm62LoLuBfxPP0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzeFJPlS4KFXu4zQIcq3AOUEWfVQwr8Qt4%2BkAI41I8ndd9qs%2BeWAM%2BVUNxveE8K4XVbChKPBhK7byg%2BddlvQPFmrvSb4yl%2F9%2FXLnMOpsAQ1CEXaDFjVNdOAjuDwYLyOO56kMc2wYKZxgeDcSWoArl62q%2FEGi4Qmdgij%2BFb1cI%2FJBMRtVdJoP8Cpg1rBrK9pARJNdHi7Bt1aGgSh2WRI8D62qA98whpT4Xp5pbGVkNMArU%2BkPPwOA4yz%2FWDM3xz0BVUQLFVO%2Bg9%2Frf6OyyRNTftdYRSZ9A9seZDXNZ5%2FtWViZ09NidvZqK1RVGU65RnyV0hpw%2FYLcgLIykwJ%2BhmdmwykdA2y6T0UM5GBY55mJsvq9KRay%2FtqWeFO64VC59oxxqrL3oDsFsBsNgMHJvdUHkP7cx%2BzMbzERrItAasZSP68Ad%2Bb4f5C9y2x9oqAdPaG0%2F0yTlmsjKxgqxeUj1OLdsblB%2FiV9zDiJHwy2JdlXiQO93zRyyQucCkeO4Je8EPVpDU3SOuj0FtZVADSnV4Z9T%2FoZ%2FDau9ZdUMTmiREvdA0a0uG2aKDiDsMkhjrTsLoN8H%2F8Nd1JLSt4o%2B5%2BP6Amh8hw2VmnMQwtgIa8VHwYpRTFD5Nzg3E0oSjFcalTg%2FWajmS96SihKiAtIQrKqzC0see%2BBjqkAaBVPinLA%2F%2Fes8Ve22b9G9iGBNrh3YbozFp5byVRc0B28divrrHNja1qFTD8Txe07ZbcT39KfbPg5WHjxKsj6kF%2B7DCIcOlki7JbwfHu1ROTPuhL7Nm0brt1VvVYz%2BOn%2BcZHShI7N0S2GNb2H1mD81D%2BrxGAxWA9hNcugAdTzgWOhQxj1KKY2QmiUs6yOtZG4PO6%2FXiuVyAFFbjNM5h%2BTlTwBm3A&X-Amz-Signature=3829a995494dee23da0139ee4f5476a1be687a301df408b6e93d930c209c23a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSCLFXP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1Js2EbsDii%2BcTUeFrbn9XPn1Ex32GpXPrEhCvPJsHVQIhAL%2BACOc%2Fj3uh0X1UPnyo4ATlRFRXgLRm62LoLuBfxPP0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzeFJPlS4KFXu4zQIcq3AOUEWfVQwr8Qt4%2BkAI41I8ndd9qs%2BeWAM%2BVUNxveE8K4XVbChKPBhK7byg%2BddlvQPFmrvSb4yl%2F9%2FXLnMOpsAQ1CEXaDFjVNdOAjuDwYLyOO56kMc2wYKZxgeDcSWoArl62q%2FEGi4Qmdgij%2BFb1cI%2FJBMRtVdJoP8Cpg1rBrK9pARJNdHi7Bt1aGgSh2WRI8D62qA98whpT4Xp5pbGVkNMArU%2BkPPwOA4yz%2FWDM3xz0BVUQLFVO%2Bg9%2Frf6OyyRNTftdYRSZ9A9seZDXNZ5%2FtWViZ09NidvZqK1RVGU65RnyV0hpw%2FYLcgLIykwJ%2BhmdmwykdA2y6T0UM5GBY55mJsvq9KRay%2FtqWeFO64VC59oxxqrL3oDsFsBsNgMHJvdUHkP7cx%2BzMbzERrItAasZSP68Ad%2Bb4f5C9y2x9oqAdPaG0%2F0yTlmsjKxgqxeUj1OLdsblB%2FiV9zDiJHwy2JdlXiQO93zRyyQucCkeO4Je8EPVpDU3SOuj0FtZVADSnV4Z9T%2FoZ%2FDau9ZdUMTmiREvdA0a0uG2aKDiDsMkhjrTsLoN8H%2F8Nd1JLSt4o%2B5%2BP6Amh8hw2VmnMQwtgIa8VHwYpRTFD5Nzg3E0oSjFcalTg%2FWajmS96SihKiAtIQrKqzC0see%2BBjqkAaBVPinLA%2F%2Fes8Ve22b9G9iGBNrh3YbozFp5byVRc0B28divrrHNja1qFTD8Txe07ZbcT39KfbPg5WHjxKsj6kF%2B7DCIcOlki7JbwfHu1ROTPuhL7Nm0brt1VvVYz%2BOn%2BcZHShI7N0S2GNb2H1mD81D%2BrxGAxWA9hNcugAdTzgWOhQxj1KKY2QmiUs6yOtZG4PO6%2FXiuVyAFFbjNM5h%2BTlTwBm3A&X-Amz-Signature=1014b94ae1e572c33e15d3303679d1b67cb429a01d08ca921c96cac6dd11d85a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSCLFXP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1Js2EbsDii%2BcTUeFrbn9XPn1Ex32GpXPrEhCvPJsHVQIhAL%2BACOc%2Fj3uh0X1UPnyo4ATlRFRXgLRm62LoLuBfxPP0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzeFJPlS4KFXu4zQIcq3AOUEWfVQwr8Qt4%2BkAI41I8ndd9qs%2BeWAM%2BVUNxveE8K4XVbChKPBhK7byg%2BddlvQPFmrvSb4yl%2F9%2FXLnMOpsAQ1CEXaDFjVNdOAjuDwYLyOO56kMc2wYKZxgeDcSWoArl62q%2FEGi4Qmdgij%2BFb1cI%2FJBMRtVdJoP8Cpg1rBrK9pARJNdHi7Bt1aGgSh2WRI8D62qA98whpT4Xp5pbGVkNMArU%2BkPPwOA4yz%2FWDM3xz0BVUQLFVO%2Bg9%2Frf6OyyRNTftdYRSZ9A9seZDXNZ5%2FtWViZ09NidvZqK1RVGU65RnyV0hpw%2FYLcgLIykwJ%2BhmdmwykdA2y6T0UM5GBY55mJsvq9KRay%2FtqWeFO64VC59oxxqrL3oDsFsBsNgMHJvdUHkP7cx%2BzMbzERrItAasZSP68Ad%2Bb4f5C9y2x9oqAdPaG0%2F0yTlmsjKxgqxeUj1OLdsblB%2FiV9zDiJHwy2JdlXiQO93zRyyQucCkeO4Je8EPVpDU3SOuj0FtZVADSnV4Z9T%2FoZ%2FDau9ZdUMTmiREvdA0a0uG2aKDiDsMkhjrTsLoN8H%2F8Nd1JLSt4o%2B5%2BP6Amh8hw2VmnMQwtgIa8VHwYpRTFD5Nzg3E0oSjFcalTg%2FWajmS96SihKiAtIQrKqzC0see%2BBjqkAaBVPinLA%2F%2Fes8Ve22b9G9iGBNrh3YbozFp5byVRc0B28divrrHNja1qFTD8Txe07ZbcT39KfbPg5WHjxKsj6kF%2B7DCIcOlki7JbwfHu1ROTPuhL7Nm0brt1VvVYz%2BOn%2BcZHShI7N0S2GNb2H1mD81D%2BrxGAxWA9hNcugAdTzgWOhQxj1KKY2QmiUs6yOtZG4PO6%2FXiuVyAFFbjNM5h%2BTlTwBm3A&X-Amz-Signature=e0ad362d1597b4eda686c705289152ae01f0787addb701f53f7300b208f693c7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSCLFXP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1Js2EbsDii%2BcTUeFrbn9XPn1Ex32GpXPrEhCvPJsHVQIhAL%2BACOc%2Fj3uh0X1UPnyo4ATlRFRXgLRm62LoLuBfxPP0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzeFJPlS4KFXu4zQIcq3AOUEWfVQwr8Qt4%2BkAI41I8ndd9qs%2BeWAM%2BVUNxveE8K4XVbChKPBhK7byg%2BddlvQPFmrvSb4yl%2F9%2FXLnMOpsAQ1CEXaDFjVNdOAjuDwYLyOO56kMc2wYKZxgeDcSWoArl62q%2FEGi4Qmdgij%2BFb1cI%2FJBMRtVdJoP8Cpg1rBrK9pARJNdHi7Bt1aGgSh2WRI8D62qA98whpT4Xp5pbGVkNMArU%2BkPPwOA4yz%2FWDM3xz0BVUQLFVO%2Bg9%2Frf6OyyRNTftdYRSZ9A9seZDXNZ5%2FtWViZ09NidvZqK1RVGU65RnyV0hpw%2FYLcgLIykwJ%2BhmdmwykdA2y6T0UM5GBY55mJsvq9KRay%2FtqWeFO64VC59oxxqrL3oDsFsBsNgMHJvdUHkP7cx%2BzMbzERrItAasZSP68Ad%2Bb4f5C9y2x9oqAdPaG0%2F0yTlmsjKxgqxeUj1OLdsblB%2FiV9zDiJHwy2JdlXiQO93zRyyQucCkeO4Je8EPVpDU3SOuj0FtZVADSnV4Z9T%2FoZ%2FDau9ZdUMTmiREvdA0a0uG2aKDiDsMkhjrTsLoN8H%2F8Nd1JLSt4o%2B5%2BP6Amh8hw2VmnMQwtgIa8VHwYpRTFD5Nzg3E0oSjFcalTg%2FWajmS96SihKiAtIQrKqzC0see%2BBjqkAaBVPinLA%2F%2Fes8Ve22b9G9iGBNrh3YbozFp5byVRc0B28divrrHNja1qFTD8Txe07ZbcT39KfbPg5WHjxKsj6kF%2B7DCIcOlki7JbwfHu1ROTPuhL7Nm0brt1VvVYz%2BOn%2BcZHShI7N0S2GNb2H1mD81D%2BrxGAxWA9hNcugAdTzgWOhQxj1KKY2QmiUs6yOtZG4PO6%2FXiuVyAFFbjNM5h%2BTlTwBm3A&X-Amz-Signature=8d814ad59bd8208401512f1bf2a025f6c14ffa99cc8faa4c2196ba52724e4303&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSCLFXP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1Js2EbsDii%2BcTUeFrbn9XPn1Ex32GpXPrEhCvPJsHVQIhAL%2BACOc%2Fj3uh0X1UPnyo4ATlRFRXgLRm62LoLuBfxPP0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzeFJPlS4KFXu4zQIcq3AOUEWfVQwr8Qt4%2BkAI41I8ndd9qs%2BeWAM%2BVUNxveE8K4XVbChKPBhK7byg%2BddlvQPFmrvSb4yl%2F9%2FXLnMOpsAQ1CEXaDFjVNdOAjuDwYLyOO56kMc2wYKZxgeDcSWoArl62q%2FEGi4Qmdgij%2BFb1cI%2FJBMRtVdJoP8Cpg1rBrK9pARJNdHi7Bt1aGgSh2WRI8D62qA98whpT4Xp5pbGVkNMArU%2BkPPwOA4yz%2FWDM3xz0BVUQLFVO%2Bg9%2Frf6OyyRNTftdYRSZ9A9seZDXNZ5%2FtWViZ09NidvZqK1RVGU65RnyV0hpw%2FYLcgLIykwJ%2BhmdmwykdA2y6T0UM5GBY55mJsvq9KRay%2FtqWeFO64VC59oxxqrL3oDsFsBsNgMHJvdUHkP7cx%2BzMbzERrItAasZSP68Ad%2Bb4f5C9y2x9oqAdPaG0%2F0yTlmsjKxgqxeUj1OLdsblB%2FiV9zDiJHwy2JdlXiQO93zRyyQucCkeO4Je8EPVpDU3SOuj0FtZVADSnV4Z9T%2FoZ%2FDau9ZdUMTmiREvdA0a0uG2aKDiDsMkhjrTsLoN8H%2F8Nd1JLSt4o%2B5%2BP6Amh8hw2VmnMQwtgIa8VHwYpRTFD5Nzg3E0oSjFcalTg%2FWajmS96SihKiAtIQrKqzC0see%2BBjqkAaBVPinLA%2F%2Fes8Ve22b9G9iGBNrh3YbozFp5byVRc0B28divrrHNja1qFTD8Txe07ZbcT39KfbPg5WHjxKsj6kF%2B7DCIcOlki7JbwfHu1ROTPuhL7Nm0brt1VvVYz%2BOn%2BcZHShI7N0S2GNb2H1mD81D%2BrxGAxWA9hNcugAdTzgWOhQxj1KKY2QmiUs6yOtZG4PO6%2FXiuVyAFFbjNM5h%2BTlTwBm3A&X-Amz-Signature=2e4172ee377cb3700857f069efb7cabfca7e1f0a1178db3b15fafa749bd31094&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSCLFXP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1Js2EbsDii%2BcTUeFrbn9XPn1Ex32GpXPrEhCvPJsHVQIhAL%2BACOc%2Fj3uh0X1UPnyo4ATlRFRXgLRm62LoLuBfxPP0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzeFJPlS4KFXu4zQIcq3AOUEWfVQwr8Qt4%2BkAI41I8ndd9qs%2BeWAM%2BVUNxveE8K4XVbChKPBhK7byg%2BddlvQPFmrvSb4yl%2F9%2FXLnMOpsAQ1CEXaDFjVNdOAjuDwYLyOO56kMc2wYKZxgeDcSWoArl62q%2FEGi4Qmdgij%2BFb1cI%2FJBMRtVdJoP8Cpg1rBrK9pARJNdHi7Bt1aGgSh2WRI8D62qA98whpT4Xp5pbGVkNMArU%2BkPPwOA4yz%2FWDM3xz0BVUQLFVO%2Bg9%2Frf6OyyRNTftdYRSZ9A9seZDXNZ5%2FtWViZ09NidvZqK1RVGU65RnyV0hpw%2FYLcgLIykwJ%2BhmdmwykdA2y6T0UM5GBY55mJsvq9KRay%2FtqWeFO64VC59oxxqrL3oDsFsBsNgMHJvdUHkP7cx%2BzMbzERrItAasZSP68Ad%2Bb4f5C9y2x9oqAdPaG0%2F0yTlmsjKxgqxeUj1OLdsblB%2FiV9zDiJHwy2JdlXiQO93zRyyQucCkeO4Je8EPVpDU3SOuj0FtZVADSnV4Z9T%2FoZ%2FDau9ZdUMTmiREvdA0a0uG2aKDiDsMkhjrTsLoN8H%2F8Nd1JLSt4o%2B5%2BP6Amh8hw2VmnMQwtgIa8VHwYpRTFD5Nzg3E0oSjFcalTg%2FWajmS96SihKiAtIQrKqzC0see%2BBjqkAaBVPinLA%2F%2Fes8Ve22b9G9iGBNrh3YbozFp5byVRc0B28divrrHNja1qFTD8Txe07ZbcT39KfbPg5WHjxKsj6kF%2B7DCIcOlki7JbwfHu1ROTPuhL7Nm0brt1VvVYz%2BOn%2BcZHShI7N0S2GNb2H1mD81D%2BrxGAxWA9hNcugAdTzgWOhQxj1KKY2QmiUs6yOtZG4PO6%2FXiuVyAFFbjNM5h%2BTlTwBm3A&X-Amz-Signature=44cd11e999273fba365ff09f91a6f40f7e940ff7c4c4b7cf5eb99629f5e42829&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSCLFXP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1Js2EbsDii%2BcTUeFrbn9XPn1Ex32GpXPrEhCvPJsHVQIhAL%2BACOc%2Fj3uh0X1UPnyo4ATlRFRXgLRm62LoLuBfxPP0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzeFJPlS4KFXu4zQIcq3AOUEWfVQwr8Qt4%2BkAI41I8ndd9qs%2BeWAM%2BVUNxveE8K4XVbChKPBhK7byg%2BddlvQPFmrvSb4yl%2F9%2FXLnMOpsAQ1CEXaDFjVNdOAjuDwYLyOO56kMc2wYKZxgeDcSWoArl62q%2FEGi4Qmdgij%2BFb1cI%2FJBMRtVdJoP8Cpg1rBrK9pARJNdHi7Bt1aGgSh2WRI8D62qA98whpT4Xp5pbGVkNMArU%2BkPPwOA4yz%2FWDM3xz0BVUQLFVO%2Bg9%2Frf6OyyRNTftdYRSZ9A9seZDXNZ5%2FtWViZ09NidvZqK1RVGU65RnyV0hpw%2FYLcgLIykwJ%2BhmdmwykdA2y6T0UM5GBY55mJsvq9KRay%2FtqWeFO64VC59oxxqrL3oDsFsBsNgMHJvdUHkP7cx%2BzMbzERrItAasZSP68Ad%2Bb4f5C9y2x9oqAdPaG0%2F0yTlmsjKxgqxeUj1OLdsblB%2FiV9zDiJHwy2JdlXiQO93zRyyQucCkeO4Je8EPVpDU3SOuj0FtZVADSnV4Z9T%2FoZ%2FDau9ZdUMTmiREvdA0a0uG2aKDiDsMkhjrTsLoN8H%2F8Nd1JLSt4o%2B5%2BP6Amh8hw2VmnMQwtgIa8VHwYpRTFD5Nzg3E0oSjFcalTg%2FWajmS96SihKiAtIQrKqzC0see%2BBjqkAaBVPinLA%2F%2Fes8Ve22b9G9iGBNrh3YbozFp5byVRc0B28divrrHNja1qFTD8Txe07ZbcT39KfbPg5WHjxKsj6kF%2B7DCIcOlki7JbwfHu1ROTPuhL7Nm0brt1VvVYz%2BOn%2BcZHShI7N0S2GNb2H1mD81D%2BrxGAxWA9hNcugAdTzgWOhQxj1KKY2QmiUs6yOtZG4PO6%2FXiuVyAFFbjNM5h%2BTlTwBm3A&X-Amz-Signature=254e5bbe817c4eb9db7c4ca56369ddcbd1696b5d7223d89f792f58e49df77246&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
