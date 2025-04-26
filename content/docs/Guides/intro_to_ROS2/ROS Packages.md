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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZOH776%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAenTZkmIO4Ojdfo4PRvNBIZc7TbgcHvj1sdwYviM%2FyLAiEAyVgfI1Hd2mNmHxg6CCcXAtT3CVAY2bNRuzyT6wl0U5cq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFfqdO53qDOE%2BnPhzSrcA5aPfxsqHE3i9UQE3gJa%2Bpkcq2o%2FoeWm%2Bal0M39DpvLhiebC3d15WxiAEn1PbL8KgXGUNeZO8xIZJijCkvpoxXrWSEqmERR1kADdzM99igAWBYT23x%2FldjLz9pJpKduyI4vR249Z5uTyhJt3HxzOm%2FuclZjpEpWr7e5xGC8CpLRdX0LGLFe3bWXqdsWiz%2BCvpY6zq%2BSB2scceLxBAErgUnGXiz%2BSaXUSxJv0psgh4TzO2edsBnSyWycWCKpdT5n9gdbfu9Aj3M%2BYJW5%2F7UmAvI16lLrHEQ3ZbZwt0LC3xYW9JsIjBEZfzQy92a1852LgtEyTqybcxtMcGOCNk1T6LEQ0zgjKA%2Fdoaefn2dOcYtTbuyi6KuziZ0WL2dwjgn3WQFhwm5objl9AqWHf2Qlr1BuLUUgQXGAVcifaccZ1dioh%2Bd%2F8pcI4MpOxe3yN9%2BOX8LOOdJ2i6d8mWO13tf1WVA1ORQiaNoG7cgqup5RSiZomxrsmv9Q53ncHDrHvQPzfluPSwQ6%2Fsn6Wsr%2BXLn%2Fh9J3ejGe18oN7wx0V1D3KNySOl2noZVtJY%2Fsn7LBkWKGrcjNecfRWFr%2Fn1ChLBbrXMIchKr5dqwh5%2BAqPTEeE3Nxjs6Ubku3Bq1hFqTmGMKiEssAGOqUBPluL0PRw3w5hsmYQml3upsCiYsVHaES1zMwpc0i2g1TLFPy87Urxzl1a0PQT4wvkgceueP2mbdoiDv2Ugqf27UClPAcyjW4fbvd8A2ZbPuzsjaVXmPP7aWotIQLgsw%2FUaDegXq%2FzbdfhMSYXJwD5XTVEkWCZAvE2uguCYP4mfOV%2FXlZ3ofEOF8sMuY9doHa25XbxGDjw%2BPavrnPwX7FD7zBTa3Us&X-Amz-Signature=9858eef9e9b7bf1d2f65b081a9aa8077cf4e07843eee4b2d8e61445f0fa3071f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZOH776%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAenTZkmIO4Ojdfo4PRvNBIZc7TbgcHvj1sdwYviM%2FyLAiEAyVgfI1Hd2mNmHxg6CCcXAtT3CVAY2bNRuzyT6wl0U5cq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFfqdO53qDOE%2BnPhzSrcA5aPfxsqHE3i9UQE3gJa%2Bpkcq2o%2FoeWm%2Bal0M39DpvLhiebC3d15WxiAEn1PbL8KgXGUNeZO8xIZJijCkvpoxXrWSEqmERR1kADdzM99igAWBYT23x%2FldjLz9pJpKduyI4vR249Z5uTyhJt3HxzOm%2FuclZjpEpWr7e5xGC8CpLRdX0LGLFe3bWXqdsWiz%2BCvpY6zq%2BSB2scceLxBAErgUnGXiz%2BSaXUSxJv0psgh4TzO2edsBnSyWycWCKpdT5n9gdbfu9Aj3M%2BYJW5%2F7UmAvI16lLrHEQ3ZbZwt0LC3xYW9JsIjBEZfzQy92a1852LgtEyTqybcxtMcGOCNk1T6LEQ0zgjKA%2Fdoaefn2dOcYtTbuyi6KuziZ0WL2dwjgn3WQFhwm5objl9AqWHf2Qlr1BuLUUgQXGAVcifaccZ1dioh%2Bd%2F8pcI4MpOxe3yN9%2BOX8LOOdJ2i6d8mWO13tf1WVA1ORQiaNoG7cgqup5RSiZomxrsmv9Q53ncHDrHvQPzfluPSwQ6%2Fsn6Wsr%2BXLn%2Fh9J3ejGe18oN7wx0V1D3KNySOl2noZVtJY%2Fsn7LBkWKGrcjNecfRWFr%2Fn1ChLBbrXMIchKr5dqwh5%2BAqPTEeE3Nxjs6Ubku3Bq1hFqTmGMKiEssAGOqUBPluL0PRw3w5hsmYQml3upsCiYsVHaES1zMwpc0i2g1TLFPy87Urxzl1a0PQT4wvkgceueP2mbdoiDv2Ugqf27UClPAcyjW4fbvd8A2ZbPuzsjaVXmPP7aWotIQLgsw%2FUaDegXq%2FzbdfhMSYXJwD5XTVEkWCZAvE2uguCYP4mfOV%2FXlZ3ofEOF8sMuY9doHa25XbxGDjw%2BPavrnPwX7FD7zBTa3Us&X-Amz-Signature=2abce46fa03d78c4f81f5de97c72d5ca752d77ecb8052d74b2cce416c3b698b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZOH776%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAenTZkmIO4Ojdfo4PRvNBIZc7TbgcHvj1sdwYviM%2FyLAiEAyVgfI1Hd2mNmHxg6CCcXAtT3CVAY2bNRuzyT6wl0U5cq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFfqdO53qDOE%2BnPhzSrcA5aPfxsqHE3i9UQE3gJa%2Bpkcq2o%2FoeWm%2Bal0M39DpvLhiebC3d15WxiAEn1PbL8KgXGUNeZO8xIZJijCkvpoxXrWSEqmERR1kADdzM99igAWBYT23x%2FldjLz9pJpKduyI4vR249Z5uTyhJt3HxzOm%2FuclZjpEpWr7e5xGC8CpLRdX0LGLFe3bWXqdsWiz%2BCvpY6zq%2BSB2scceLxBAErgUnGXiz%2BSaXUSxJv0psgh4TzO2edsBnSyWycWCKpdT5n9gdbfu9Aj3M%2BYJW5%2F7UmAvI16lLrHEQ3ZbZwt0LC3xYW9JsIjBEZfzQy92a1852LgtEyTqybcxtMcGOCNk1T6LEQ0zgjKA%2Fdoaefn2dOcYtTbuyi6KuziZ0WL2dwjgn3WQFhwm5objl9AqWHf2Qlr1BuLUUgQXGAVcifaccZ1dioh%2Bd%2F8pcI4MpOxe3yN9%2BOX8LOOdJ2i6d8mWO13tf1WVA1ORQiaNoG7cgqup5RSiZomxrsmv9Q53ncHDrHvQPzfluPSwQ6%2Fsn6Wsr%2BXLn%2Fh9J3ejGe18oN7wx0V1D3KNySOl2noZVtJY%2Fsn7LBkWKGrcjNecfRWFr%2Fn1ChLBbrXMIchKr5dqwh5%2BAqPTEeE3Nxjs6Ubku3Bq1hFqTmGMKiEssAGOqUBPluL0PRw3w5hsmYQml3upsCiYsVHaES1zMwpc0i2g1TLFPy87Urxzl1a0PQT4wvkgceueP2mbdoiDv2Ugqf27UClPAcyjW4fbvd8A2ZbPuzsjaVXmPP7aWotIQLgsw%2FUaDegXq%2FzbdfhMSYXJwD5XTVEkWCZAvE2uguCYP4mfOV%2FXlZ3ofEOF8sMuY9doHa25XbxGDjw%2BPavrnPwX7FD7zBTa3Us&X-Amz-Signature=8fef81bc97898b6ab2d7e8a41728ec0b89b4f130cec6a7ef1d6f2dd064163bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZOH776%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAenTZkmIO4Ojdfo4PRvNBIZc7TbgcHvj1sdwYviM%2FyLAiEAyVgfI1Hd2mNmHxg6CCcXAtT3CVAY2bNRuzyT6wl0U5cq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFfqdO53qDOE%2BnPhzSrcA5aPfxsqHE3i9UQE3gJa%2Bpkcq2o%2FoeWm%2Bal0M39DpvLhiebC3d15WxiAEn1PbL8KgXGUNeZO8xIZJijCkvpoxXrWSEqmERR1kADdzM99igAWBYT23x%2FldjLz9pJpKduyI4vR249Z5uTyhJt3HxzOm%2FuclZjpEpWr7e5xGC8CpLRdX0LGLFe3bWXqdsWiz%2BCvpY6zq%2BSB2scceLxBAErgUnGXiz%2BSaXUSxJv0psgh4TzO2edsBnSyWycWCKpdT5n9gdbfu9Aj3M%2BYJW5%2F7UmAvI16lLrHEQ3ZbZwt0LC3xYW9JsIjBEZfzQy92a1852LgtEyTqybcxtMcGOCNk1T6LEQ0zgjKA%2Fdoaefn2dOcYtTbuyi6KuziZ0WL2dwjgn3WQFhwm5objl9AqWHf2Qlr1BuLUUgQXGAVcifaccZ1dioh%2Bd%2F8pcI4MpOxe3yN9%2BOX8LOOdJ2i6d8mWO13tf1WVA1ORQiaNoG7cgqup5RSiZomxrsmv9Q53ncHDrHvQPzfluPSwQ6%2Fsn6Wsr%2BXLn%2Fh9J3ejGe18oN7wx0V1D3KNySOl2noZVtJY%2Fsn7LBkWKGrcjNecfRWFr%2Fn1ChLBbrXMIchKr5dqwh5%2BAqPTEeE3Nxjs6Ubku3Bq1hFqTmGMKiEssAGOqUBPluL0PRw3w5hsmYQml3upsCiYsVHaES1zMwpc0i2g1TLFPy87Urxzl1a0PQT4wvkgceueP2mbdoiDv2Ugqf27UClPAcyjW4fbvd8A2ZbPuzsjaVXmPP7aWotIQLgsw%2FUaDegXq%2FzbdfhMSYXJwD5XTVEkWCZAvE2uguCYP4mfOV%2FXlZ3ofEOF8sMuY9doHa25XbxGDjw%2BPavrnPwX7FD7zBTa3Us&X-Amz-Signature=75bc1a96409f21e66897b0208090b401aef8aa254a2905e41dbf96a2fadd3b53&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZOH776%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAenTZkmIO4Ojdfo4PRvNBIZc7TbgcHvj1sdwYviM%2FyLAiEAyVgfI1Hd2mNmHxg6CCcXAtT3CVAY2bNRuzyT6wl0U5cq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFfqdO53qDOE%2BnPhzSrcA5aPfxsqHE3i9UQE3gJa%2Bpkcq2o%2FoeWm%2Bal0M39DpvLhiebC3d15WxiAEn1PbL8KgXGUNeZO8xIZJijCkvpoxXrWSEqmERR1kADdzM99igAWBYT23x%2FldjLz9pJpKduyI4vR249Z5uTyhJt3HxzOm%2FuclZjpEpWr7e5xGC8CpLRdX0LGLFe3bWXqdsWiz%2BCvpY6zq%2BSB2scceLxBAErgUnGXiz%2BSaXUSxJv0psgh4TzO2edsBnSyWycWCKpdT5n9gdbfu9Aj3M%2BYJW5%2F7UmAvI16lLrHEQ3ZbZwt0LC3xYW9JsIjBEZfzQy92a1852LgtEyTqybcxtMcGOCNk1T6LEQ0zgjKA%2Fdoaefn2dOcYtTbuyi6KuziZ0WL2dwjgn3WQFhwm5objl9AqWHf2Qlr1BuLUUgQXGAVcifaccZ1dioh%2Bd%2F8pcI4MpOxe3yN9%2BOX8LOOdJ2i6d8mWO13tf1WVA1ORQiaNoG7cgqup5RSiZomxrsmv9Q53ncHDrHvQPzfluPSwQ6%2Fsn6Wsr%2BXLn%2Fh9J3ejGe18oN7wx0V1D3KNySOl2noZVtJY%2Fsn7LBkWKGrcjNecfRWFr%2Fn1ChLBbrXMIchKr5dqwh5%2BAqPTEeE3Nxjs6Ubku3Bq1hFqTmGMKiEssAGOqUBPluL0PRw3w5hsmYQml3upsCiYsVHaES1zMwpc0i2g1TLFPy87Urxzl1a0PQT4wvkgceueP2mbdoiDv2Ugqf27UClPAcyjW4fbvd8A2ZbPuzsjaVXmPP7aWotIQLgsw%2FUaDegXq%2FzbdfhMSYXJwD5XTVEkWCZAvE2uguCYP4mfOV%2FXlZ3ofEOF8sMuY9doHa25XbxGDjw%2BPavrnPwX7FD7zBTa3Us&X-Amz-Signature=de217ed8d6d10b116b39b8ea59e0e2fe8cf40e2a7b29919f46f077a584f2e6e8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZOH776%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAenTZkmIO4Ojdfo4PRvNBIZc7TbgcHvj1sdwYviM%2FyLAiEAyVgfI1Hd2mNmHxg6CCcXAtT3CVAY2bNRuzyT6wl0U5cq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFfqdO53qDOE%2BnPhzSrcA5aPfxsqHE3i9UQE3gJa%2Bpkcq2o%2FoeWm%2Bal0M39DpvLhiebC3d15WxiAEn1PbL8KgXGUNeZO8xIZJijCkvpoxXrWSEqmERR1kADdzM99igAWBYT23x%2FldjLz9pJpKduyI4vR249Z5uTyhJt3HxzOm%2FuclZjpEpWr7e5xGC8CpLRdX0LGLFe3bWXqdsWiz%2BCvpY6zq%2BSB2scceLxBAErgUnGXiz%2BSaXUSxJv0psgh4TzO2edsBnSyWycWCKpdT5n9gdbfu9Aj3M%2BYJW5%2F7UmAvI16lLrHEQ3ZbZwt0LC3xYW9JsIjBEZfzQy92a1852LgtEyTqybcxtMcGOCNk1T6LEQ0zgjKA%2Fdoaefn2dOcYtTbuyi6KuziZ0WL2dwjgn3WQFhwm5objl9AqWHf2Qlr1BuLUUgQXGAVcifaccZ1dioh%2Bd%2F8pcI4MpOxe3yN9%2BOX8LOOdJ2i6d8mWO13tf1WVA1ORQiaNoG7cgqup5RSiZomxrsmv9Q53ncHDrHvQPzfluPSwQ6%2Fsn6Wsr%2BXLn%2Fh9J3ejGe18oN7wx0V1D3KNySOl2noZVtJY%2Fsn7LBkWKGrcjNecfRWFr%2Fn1ChLBbrXMIchKr5dqwh5%2BAqPTEeE3Nxjs6Ubku3Bq1hFqTmGMKiEssAGOqUBPluL0PRw3w5hsmYQml3upsCiYsVHaES1zMwpc0i2g1TLFPy87Urxzl1a0PQT4wvkgceueP2mbdoiDv2Ugqf27UClPAcyjW4fbvd8A2ZbPuzsjaVXmPP7aWotIQLgsw%2FUaDegXq%2FzbdfhMSYXJwD5XTVEkWCZAvE2uguCYP4mfOV%2FXlZ3ofEOF8sMuY9doHa25XbxGDjw%2BPavrnPwX7FD7zBTa3Us&X-Amz-Signature=fc8f0ca59b173bd9d5161232836a361107c568b66b2029a759b4a51963744701&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZOH776%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAenTZkmIO4Ojdfo4PRvNBIZc7TbgcHvj1sdwYviM%2FyLAiEAyVgfI1Hd2mNmHxg6CCcXAtT3CVAY2bNRuzyT6wl0U5cq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFfqdO53qDOE%2BnPhzSrcA5aPfxsqHE3i9UQE3gJa%2Bpkcq2o%2FoeWm%2Bal0M39DpvLhiebC3d15WxiAEn1PbL8KgXGUNeZO8xIZJijCkvpoxXrWSEqmERR1kADdzM99igAWBYT23x%2FldjLz9pJpKduyI4vR249Z5uTyhJt3HxzOm%2FuclZjpEpWr7e5xGC8CpLRdX0LGLFe3bWXqdsWiz%2BCvpY6zq%2BSB2scceLxBAErgUnGXiz%2BSaXUSxJv0psgh4TzO2edsBnSyWycWCKpdT5n9gdbfu9Aj3M%2BYJW5%2F7UmAvI16lLrHEQ3ZbZwt0LC3xYW9JsIjBEZfzQy92a1852LgtEyTqybcxtMcGOCNk1T6LEQ0zgjKA%2Fdoaefn2dOcYtTbuyi6KuziZ0WL2dwjgn3WQFhwm5objl9AqWHf2Qlr1BuLUUgQXGAVcifaccZ1dioh%2Bd%2F8pcI4MpOxe3yN9%2BOX8LOOdJ2i6d8mWO13tf1WVA1ORQiaNoG7cgqup5RSiZomxrsmv9Q53ncHDrHvQPzfluPSwQ6%2Fsn6Wsr%2BXLn%2Fh9J3ejGe18oN7wx0V1D3KNySOl2noZVtJY%2Fsn7LBkWKGrcjNecfRWFr%2Fn1ChLBbrXMIchKr5dqwh5%2BAqPTEeE3Nxjs6Ubku3Bq1hFqTmGMKiEssAGOqUBPluL0PRw3w5hsmYQml3upsCiYsVHaES1zMwpc0i2g1TLFPy87Urxzl1a0PQT4wvkgceueP2mbdoiDv2Ugqf27UClPAcyjW4fbvd8A2ZbPuzsjaVXmPP7aWotIQLgsw%2FUaDegXq%2FzbdfhMSYXJwD5XTVEkWCZAvE2uguCYP4mfOV%2FXlZ3ofEOF8sMuY9doHa25XbxGDjw%2BPavrnPwX7FD7zBTa3Us&X-Amz-Signature=017763c650347d9195ebd67e40a30114540f0e26fa9db57de1ed63e1389b8de7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
