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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXJCIOC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BxEXz%2BvteV5tGGz%2BNk2PbVqMH6qKbwLCMSBcJ2MjtBAiBNgfb51zRVx%2BRUJCXDNPkEfsZAoTSlODFV6xlo9Y5lFCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMXG%2FNJuLdkE8Yii%2FTKtwDbvZcga%2F0QnykkoP%2B56B7FSgPPDs3KDwHpKeU%2BSh21W6z%2Fjqcil0FiyLqyzNacsbBgH6bK6PIeicLEKIf2KJ0dgvm7c1SsZfbfUPbYpD2KL9WK2D%2Fv2GkZkj5gRuqhGf%2BZnmpd0ORbdNZ8MD7JHTZqwBIwpDXOWq3DivFteqVyA%2BP%2FNL%2FIwxQHz%2F4fVvbmmp%2BVHo84ETaGJ9%2BYDJBliGp3DnpgxctAj%2FjwEhuDOu%2BxRYyfPos6hj0sGxjHC7CLS1s82hqmfCaaTwQrOBsFzpl6suzx92YUm8BM2p90HVs%2BLR3adgCPc%2FMRK1BjREujn3H%2BqQ%2FI6Ym52JhZtIDzYVZ4dKECMa4qikc%2FP2YEUD8%2FA2IVGcZwfH2sc8MI9CvMHWc182jlc3jISrkODQSrcNTshd3cgwwbueTxKp0bn5vEcuxFyWaibwLeJLWkdZjpwVz4ZYMRaxDxrjI9S%2F4JCQ%2FT%2FLcEOF%2BjRpCLgyRlicxifjI7oX1eEGwcUMe0zWj%2B7VhhTru1kzGM0L0te2HErcxGIb5SCHJeLp2i3eKuhQ0r2dDbdtT%2FWuZY23RmASft9WyvS57tLpRwF4k3w8mgDpBo3itU%2BIMTih9UjzNTJxOYNXH8ph5lrVKX8eFd5Mw%2F6jwwAY6pgEn5y6pD9v7gA8eLIX8A4jiBvIlDFm93YSIILnBkta8hR%2Foyqfnx%2FBVGGtLD9zvS%2F4uNjiEGE6iqZmgEmHOYjBunFYeGymHJbH0vNdozu9Giu6xd8dIHzBfdtXcQu1QRNvmrWrj7ZzXOm1qXeH81bxgFWCoeaxztSEW7UHAXdoBW6eg6jYFC%2BbxxSixJ48ltaJj2Hq1E9ysnvcDoxZ%2FAMIAUUDTwK4x&X-Amz-Signature=a2013aa9599b57f31cc2a26b8d1947115ca366bda4e6fbc5475be0e529f65f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXJCIOC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BxEXz%2BvteV5tGGz%2BNk2PbVqMH6qKbwLCMSBcJ2MjtBAiBNgfb51zRVx%2BRUJCXDNPkEfsZAoTSlODFV6xlo9Y5lFCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMXG%2FNJuLdkE8Yii%2FTKtwDbvZcga%2F0QnykkoP%2B56B7FSgPPDs3KDwHpKeU%2BSh21W6z%2Fjqcil0FiyLqyzNacsbBgH6bK6PIeicLEKIf2KJ0dgvm7c1SsZfbfUPbYpD2KL9WK2D%2Fv2GkZkj5gRuqhGf%2BZnmpd0ORbdNZ8MD7JHTZqwBIwpDXOWq3DivFteqVyA%2BP%2FNL%2FIwxQHz%2F4fVvbmmp%2BVHo84ETaGJ9%2BYDJBliGp3DnpgxctAj%2FjwEhuDOu%2BxRYyfPos6hj0sGxjHC7CLS1s82hqmfCaaTwQrOBsFzpl6suzx92YUm8BM2p90HVs%2BLR3adgCPc%2FMRK1BjREujn3H%2BqQ%2FI6Ym52JhZtIDzYVZ4dKECMa4qikc%2FP2YEUD8%2FA2IVGcZwfH2sc8MI9CvMHWc182jlc3jISrkODQSrcNTshd3cgwwbueTxKp0bn5vEcuxFyWaibwLeJLWkdZjpwVz4ZYMRaxDxrjI9S%2F4JCQ%2FT%2FLcEOF%2BjRpCLgyRlicxifjI7oX1eEGwcUMe0zWj%2B7VhhTru1kzGM0L0te2HErcxGIb5SCHJeLp2i3eKuhQ0r2dDbdtT%2FWuZY23RmASft9WyvS57tLpRwF4k3w8mgDpBo3itU%2BIMTih9UjzNTJxOYNXH8ph5lrVKX8eFd5Mw%2F6jwwAY6pgEn5y6pD9v7gA8eLIX8A4jiBvIlDFm93YSIILnBkta8hR%2Foyqfnx%2FBVGGtLD9zvS%2F4uNjiEGE6iqZmgEmHOYjBunFYeGymHJbH0vNdozu9Giu6xd8dIHzBfdtXcQu1QRNvmrWrj7ZzXOm1qXeH81bxgFWCoeaxztSEW7UHAXdoBW6eg6jYFC%2BbxxSixJ48ltaJj2Hq1E9ysnvcDoxZ%2FAMIAUUDTwK4x&X-Amz-Signature=0bd8604b9df746b7ebe78e255d7a6214a35eca711a727678c9cf9229ab6199ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXJCIOC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BxEXz%2BvteV5tGGz%2BNk2PbVqMH6qKbwLCMSBcJ2MjtBAiBNgfb51zRVx%2BRUJCXDNPkEfsZAoTSlODFV6xlo9Y5lFCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMXG%2FNJuLdkE8Yii%2FTKtwDbvZcga%2F0QnykkoP%2B56B7FSgPPDs3KDwHpKeU%2BSh21W6z%2Fjqcil0FiyLqyzNacsbBgH6bK6PIeicLEKIf2KJ0dgvm7c1SsZfbfUPbYpD2KL9WK2D%2Fv2GkZkj5gRuqhGf%2BZnmpd0ORbdNZ8MD7JHTZqwBIwpDXOWq3DivFteqVyA%2BP%2FNL%2FIwxQHz%2F4fVvbmmp%2BVHo84ETaGJ9%2BYDJBliGp3DnpgxctAj%2FjwEhuDOu%2BxRYyfPos6hj0sGxjHC7CLS1s82hqmfCaaTwQrOBsFzpl6suzx92YUm8BM2p90HVs%2BLR3adgCPc%2FMRK1BjREujn3H%2BqQ%2FI6Ym52JhZtIDzYVZ4dKECMa4qikc%2FP2YEUD8%2FA2IVGcZwfH2sc8MI9CvMHWc182jlc3jISrkODQSrcNTshd3cgwwbueTxKp0bn5vEcuxFyWaibwLeJLWkdZjpwVz4ZYMRaxDxrjI9S%2F4JCQ%2FT%2FLcEOF%2BjRpCLgyRlicxifjI7oX1eEGwcUMe0zWj%2B7VhhTru1kzGM0L0te2HErcxGIb5SCHJeLp2i3eKuhQ0r2dDbdtT%2FWuZY23RmASft9WyvS57tLpRwF4k3w8mgDpBo3itU%2BIMTih9UjzNTJxOYNXH8ph5lrVKX8eFd5Mw%2F6jwwAY6pgEn5y6pD9v7gA8eLIX8A4jiBvIlDFm93YSIILnBkta8hR%2Foyqfnx%2FBVGGtLD9zvS%2F4uNjiEGE6iqZmgEmHOYjBunFYeGymHJbH0vNdozu9Giu6xd8dIHzBfdtXcQu1QRNvmrWrj7ZzXOm1qXeH81bxgFWCoeaxztSEW7UHAXdoBW6eg6jYFC%2BbxxSixJ48ltaJj2Hq1E9ysnvcDoxZ%2FAMIAUUDTwK4x&X-Amz-Signature=9af39df77dbac6db478e93c2e5227316fbc2f084550874dd3c29bd021b2e54e3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXJCIOC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BxEXz%2BvteV5tGGz%2BNk2PbVqMH6qKbwLCMSBcJ2MjtBAiBNgfb51zRVx%2BRUJCXDNPkEfsZAoTSlODFV6xlo9Y5lFCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMXG%2FNJuLdkE8Yii%2FTKtwDbvZcga%2F0QnykkoP%2B56B7FSgPPDs3KDwHpKeU%2BSh21W6z%2Fjqcil0FiyLqyzNacsbBgH6bK6PIeicLEKIf2KJ0dgvm7c1SsZfbfUPbYpD2KL9WK2D%2Fv2GkZkj5gRuqhGf%2BZnmpd0ORbdNZ8MD7JHTZqwBIwpDXOWq3DivFteqVyA%2BP%2FNL%2FIwxQHz%2F4fVvbmmp%2BVHo84ETaGJ9%2BYDJBliGp3DnpgxctAj%2FjwEhuDOu%2BxRYyfPos6hj0sGxjHC7CLS1s82hqmfCaaTwQrOBsFzpl6suzx92YUm8BM2p90HVs%2BLR3adgCPc%2FMRK1BjREujn3H%2BqQ%2FI6Ym52JhZtIDzYVZ4dKECMa4qikc%2FP2YEUD8%2FA2IVGcZwfH2sc8MI9CvMHWc182jlc3jISrkODQSrcNTshd3cgwwbueTxKp0bn5vEcuxFyWaibwLeJLWkdZjpwVz4ZYMRaxDxrjI9S%2F4JCQ%2FT%2FLcEOF%2BjRpCLgyRlicxifjI7oX1eEGwcUMe0zWj%2B7VhhTru1kzGM0L0te2HErcxGIb5SCHJeLp2i3eKuhQ0r2dDbdtT%2FWuZY23RmASft9WyvS57tLpRwF4k3w8mgDpBo3itU%2BIMTih9UjzNTJxOYNXH8ph5lrVKX8eFd5Mw%2F6jwwAY6pgEn5y6pD9v7gA8eLIX8A4jiBvIlDFm93YSIILnBkta8hR%2Foyqfnx%2FBVGGtLD9zvS%2F4uNjiEGE6iqZmgEmHOYjBunFYeGymHJbH0vNdozu9Giu6xd8dIHzBfdtXcQu1QRNvmrWrj7ZzXOm1qXeH81bxgFWCoeaxztSEW7UHAXdoBW6eg6jYFC%2BbxxSixJ48ltaJj2Hq1E9ysnvcDoxZ%2FAMIAUUDTwK4x&X-Amz-Signature=d2ded77de73fd66fc1e377cb33d357a7b30412d33d838208b7bea30c153c434f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXJCIOC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BxEXz%2BvteV5tGGz%2BNk2PbVqMH6qKbwLCMSBcJ2MjtBAiBNgfb51zRVx%2BRUJCXDNPkEfsZAoTSlODFV6xlo9Y5lFCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMXG%2FNJuLdkE8Yii%2FTKtwDbvZcga%2F0QnykkoP%2B56B7FSgPPDs3KDwHpKeU%2BSh21W6z%2Fjqcil0FiyLqyzNacsbBgH6bK6PIeicLEKIf2KJ0dgvm7c1SsZfbfUPbYpD2KL9WK2D%2Fv2GkZkj5gRuqhGf%2BZnmpd0ORbdNZ8MD7JHTZqwBIwpDXOWq3DivFteqVyA%2BP%2FNL%2FIwxQHz%2F4fVvbmmp%2BVHo84ETaGJ9%2BYDJBliGp3DnpgxctAj%2FjwEhuDOu%2BxRYyfPos6hj0sGxjHC7CLS1s82hqmfCaaTwQrOBsFzpl6suzx92YUm8BM2p90HVs%2BLR3adgCPc%2FMRK1BjREujn3H%2BqQ%2FI6Ym52JhZtIDzYVZ4dKECMa4qikc%2FP2YEUD8%2FA2IVGcZwfH2sc8MI9CvMHWc182jlc3jISrkODQSrcNTshd3cgwwbueTxKp0bn5vEcuxFyWaibwLeJLWkdZjpwVz4ZYMRaxDxrjI9S%2F4JCQ%2FT%2FLcEOF%2BjRpCLgyRlicxifjI7oX1eEGwcUMe0zWj%2B7VhhTru1kzGM0L0te2HErcxGIb5SCHJeLp2i3eKuhQ0r2dDbdtT%2FWuZY23RmASft9WyvS57tLpRwF4k3w8mgDpBo3itU%2BIMTih9UjzNTJxOYNXH8ph5lrVKX8eFd5Mw%2F6jwwAY6pgEn5y6pD9v7gA8eLIX8A4jiBvIlDFm93YSIILnBkta8hR%2Foyqfnx%2FBVGGtLD9zvS%2F4uNjiEGE6iqZmgEmHOYjBunFYeGymHJbH0vNdozu9Giu6xd8dIHzBfdtXcQu1QRNvmrWrj7ZzXOm1qXeH81bxgFWCoeaxztSEW7UHAXdoBW6eg6jYFC%2BbxxSixJ48ltaJj2Hq1E9ysnvcDoxZ%2FAMIAUUDTwK4x&X-Amz-Signature=4b44a1ef31bea6571b868bb1cc2d0e11a09234f3417c5fbbc130ea1cfd1aa18e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXJCIOC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BxEXz%2BvteV5tGGz%2BNk2PbVqMH6qKbwLCMSBcJ2MjtBAiBNgfb51zRVx%2BRUJCXDNPkEfsZAoTSlODFV6xlo9Y5lFCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMXG%2FNJuLdkE8Yii%2FTKtwDbvZcga%2F0QnykkoP%2B56B7FSgPPDs3KDwHpKeU%2BSh21W6z%2Fjqcil0FiyLqyzNacsbBgH6bK6PIeicLEKIf2KJ0dgvm7c1SsZfbfUPbYpD2KL9WK2D%2Fv2GkZkj5gRuqhGf%2BZnmpd0ORbdNZ8MD7JHTZqwBIwpDXOWq3DivFteqVyA%2BP%2FNL%2FIwxQHz%2F4fVvbmmp%2BVHo84ETaGJ9%2BYDJBliGp3DnpgxctAj%2FjwEhuDOu%2BxRYyfPos6hj0sGxjHC7CLS1s82hqmfCaaTwQrOBsFzpl6suzx92YUm8BM2p90HVs%2BLR3adgCPc%2FMRK1BjREujn3H%2BqQ%2FI6Ym52JhZtIDzYVZ4dKECMa4qikc%2FP2YEUD8%2FA2IVGcZwfH2sc8MI9CvMHWc182jlc3jISrkODQSrcNTshd3cgwwbueTxKp0bn5vEcuxFyWaibwLeJLWkdZjpwVz4ZYMRaxDxrjI9S%2F4JCQ%2FT%2FLcEOF%2BjRpCLgyRlicxifjI7oX1eEGwcUMe0zWj%2B7VhhTru1kzGM0L0te2HErcxGIb5SCHJeLp2i3eKuhQ0r2dDbdtT%2FWuZY23RmASft9WyvS57tLpRwF4k3w8mgDpBo3itU%2BIMTih9UjzNTJxOYNXH8ph5lrVKX8eFd5Mw%2F6jwwAY6pgEn5y6pD9v7gA8eLIX8A4jiBvIlDFm93YSIILnBkta8hR%2Foyqfnx%2FBVGGtLD9zvS%2F4uNjiEGE6iqZmgEmHOYjBunFYeGymHJbH0vNdozu9Giu6xd8dIHzBfdtXcQu1QRNvmrWrj7ZzXOm1qXeH81bxgFWCoeaxztSEW7UHAXdoBW6eg6jYFC%2BbxxSixJ48ltaJj2Hq1E9ysnvcDoxZ%2FAMIAUUDTwK4x&X-Amz-Signature=fc8934df864bb1de66a285dbd0c074899660aefae573d0d169887af5173c4f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXJCIOC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BxEXz%2BvteV5tGGz%2BNk2PbVqMH6qKbwLCMSBcJ2MjtBAiBNgfb51zRVx%2BRUJCXDNPkEfsZAoTSlODFV6xlo9Y5lFCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMXG%2FNJuLdkE8Yii%2FTKtwDbvZcga%2F0QnykkoP%2B56B7FSgPPDs3KDwHpKeU%2BSh21W6z%2Fjqcil0FiyLqyzNacsbBgH6bK6PIeicLEKIf2KJ0dgvm7c1SsZfbfUPbYpD2KL9WK2D%2Fv2GkZkj5gRuqhGf%2BZnmpd0ORbdNZ8MD7JHTZqwBIwpDXOWq3DivFteqVyA%2BP%2FNL%2FIwxQHz%2F4fVvbmmp%2BVHo84ETaGJ9%2BYDJBliGp3DnpgxctAj%2FjwEhuDOu%2BxRYyfPos6hj0sGxjHC7CLS1s82hqmfCaaTwQrOBsFzpl6suzx92YUm8BM2p90HVs%2BLR3adgCPc%2FMRK1BjREujn3H%2BqQ%2FI6Ym52JhZtIDzYVZ4dKECMa4qikc%2FP2YEUD8%2FA2IVGcZwfH2sc8MI9CvMHWc182jlc3jISrkODQSrcNTshd3cgwwbueTxKp0bn5vEcuxFyWaibwLeJLWkdZjpwVz4ZYMRaxDxrjI9S%2F4JCQ%2FT%2FLcEOF%2BjRpCLgyRlicxifjI7oX1eEGwcUMe0zWj%2B7VhhTru1kzGM0L0te2HErcxGIb5SCHJeLp2i3eKuhQ0r2dDbdtT%2FWuZY23RmASft9WyvS57tLpRwF4k3w8mgDpBo3itU%2BIMTih9UjzNTJxOYNXH8ph5lrVKX8eFd5Mw%2F6jwwAY6pgEn5y6pD9v7gA8eLIX8A4jiBvIlDFm93YSIILnBkta8hR%2Foyqfnx%2FBVGGtLD9zvS%2F4uNjiEGE6iqZmgEmHOYjBunFYeGymHJbH0vNdozu9Giu6xd8dIHzBfdtXcQu1QRNvmrWrj7ZzXOm1qXeH81bxgFWCoeaxztSEW7UHAXdoBW6eg6jYFC%2BbxxSixJ48ltaJj2Hq1E9ysnvcDoxZ%2FAMIAUUDTwK4x&X-Amz-Signature=574bb56d237da59904aadf94772ef9285b184c4749171706b5b5d1fcf74d847b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
