---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664EI2WOS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGnQ%2FAJZysSJMU1sU4cDb6NofBEJJkJmj8F7nUdkRkmVAiAAj%2Fp4wl7Na2mkejPJUPSI6YER9nlDfvwc7sl3%2FZUFzSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMvnNDicG%2Bi399KxGZKtwDAZlSuKzlCGbjYoNRT%2BvpgHg1Ds9KKi0vepSWysL72WUuQ72pb1D%2BqxCS9K43hZKzCuP1p%2BbGUGXxVpkSABYUNAHtDr1kMM3lUSfl%2FU9wU%2Fi%2BQGe%2BgajzhQA1JL3m5hkU%2BXWIF909fWq%2F71wcygzkXF9FsGVH47%2F8e6B7r%2FGaG5H7%2Bf8dg3xq18p6rxjAep0fqX%2FBTckEzY%2FOUo0JvAHtimOXgRADo2m0156cldSof2AgXG9Dyz%2BY%2BdDGnIN90gxB6IbMCwBXpCm5fijYy3xT1v1DxXfaGmrfHUoXI712sh6yW05swIFpohBmzurCUAeYbUNhOPumsjER3naNiLPpNaXwgYS0MTPz05BunTBUDyxEySPbdaA2s0i%2B3b1%2Bc00A6yXPtT1E%2FjoLTu9OFrxfvQ4nWD2p%2FeFPRd7TDLGuuP%2FUwBoO13dos8fzqUy%2F0%2FWCf%2BFzTPO2Aa3skD2yB1OHSyUW2CfDf1Jgdrcis99nk5qcW5BcfTPFG13id2vslBPsDoHJ3pqDUQ3dpo%2FOdvEcy%2BlNMDFo%2BH%2B5%2BFuKicnI%2FEFa8oI276FAhptel0%2BC1FppHBEarx3aZrwNqetNPALI1emtQMj8%2FWiKLythFridsemYNWNEtizJQgURi24w0IqAxQY6pgFW2kDUMXi8vDTiZC2oDh3bzKmWwK4OFYAfWzxSrBMqqM3JWXKib4%2FRurRmfo3ys8ADscMjt3TjIEycMOIIF0rYwGzJPRa7yHnI%2BulLMRJWRdPip4IC7TBnPr1K4KxIXYHenTLr7NPiELn%2BkQYpAQbPaNXOFe0puNjk5HWCwSvUZLmzuLQLoOqnSdfIXmYTfK4HLKMvLRAQwhQX5qQXzWBzaFeYhpLd&X-Amz-Signature=2b5d9f3edad986b3000635f3f47fe4f167ddd09876e2fe54cf174882c7529491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664EI2WOS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGnQ%2FAJZysSJMU1sU4cDb6NofBEJJkJmj8F7nUdkRkmVAiAAj%2Fp4wl7Na2mkejPJUPSI6YER9nlDfvwc7sl3%2FZUFzSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMvnNDicG%2Bi399KxGZKtwDAZlSuKzlCGbjYoNRT%2BvpgHg1Ds9KKi0vepSWysL72WUuQ72pb1D%2BqxCS9K43hZKzCuP1p%2BbGUGXxVpkSABYUNAHtDr1kMM3lUSfl%2FU9wU%2Fi%2BQGe%2BgajzhQA1JL3m5hkU%2BXWIF909fWq%2F71wcygzkXF9FsGVH47%2F8e6B7r%2FGaG5H7%2Bf8dg3xq18p6rxjAep0fqX%2FBTckEzY%2FOUo0JvAHtimOXgRADo2m0156cldSof2AgXG9Dyz%2BY%2BdDGnIN90gxB6IbMCwBXpCm5fijYy3xT1v1DxXfaGmrfHUoXI712sh6yW05swIFpohBmzurCUAeYbUNhOPumsjER3naNiLPpNaXwgYS0MTPz05BunTBUDyxEySPbdaA2s0i%2B3b1%2Bc00A6yXPtT1E%2FjoLTu9OFrxfvQ4nWD2p%2FeFPRd7TDLGuuP%2FUwBoO13dos8fzqUy%2F0%2FWCf%2BFzTPO2Aa3skD2yB1OHSyUW2CfDf1Jgdrcis99nk5qcW5BcfTPFG13id2vslBPsDoHJ3pqDUQ3dpo%2FOdvEcy%2BlNMDFo%2BH%2B5%2BFuKicnI%2FEFa8oI276FAhptel0%2BC1FppHBEarx3aZrwNqetNPALI1emtQMj8%2FWiKLythFridsemYNWNEtizJQgURi24w0IqAxQY6pgFW2kDUMXi8vDTiZC2oDh3bzKmWwK4OFYAfWzxSrBMqqM3JWXKib4%2FRurRmfo3ys8ADscMjt3TjIEycMOIIF0rYwGzJPRa7yHnI%2BulLMRJWRdPip4IC7TBnPr1K4KxIXYHenTLr7NPiELn%2BkQYpAQbPaNXOFe0puNjk5HWCwSvUZLmzuLQLoOqnSdfIXmYTfK4HLKMvLRAQwhQX5qQXzWBzaFeYhpLd&X-Amz-Signature=1eab4de8ad97883420243d5e8ed694cf1a820603099ba489f71071d46e94e184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664EI2WOS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGnQ%2FAJZysSJMU1sU4cDb6NofBEJJkJmj8F7nUdkRkmVAiAAj%2Fp4wl7Na2mkejPJUPSI6YER9nlDfvwc7sl3%2FZUFzSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMvnNDicG%2Bi399KxGZKtwDAZlSuKzlCGbjYoNRT%2BvpgHg1Ds9KKi0vepSWysL72WUuQ72pb1D%2BqxCS9K43hZKzCuP1p%2BbGUGXxVpkSABYUNAHtDr1kMM3lUSfl%2FU9wU%2Fi%2BQGe%2BgajzhQA1JL3m5hkU%2BXWIF909fWq%2F71wcygzkXF9FsGVH47%2F8e6B7r%2FGaG5H7%2Bf8dg3xq18p6rxjAep0fqX%2FBTckEzY%2FOUo0JvAHtimOXgRADo2m0156cldSof2AgXG9Dyz%2BY%2BdDGnIN90gxB6IbMCwBXpCm5fijYy3xT1v1DxXfaGmrfHUoXI712sh6yW05swIFpohBmzurCUAeYbUNhOPumsjER3naNiLPpNaXwgYS0MTPz05BunTBUDyxEySPbdaA2s0i%2B3b1%2Bc00A6yXPtT1E%2FjoLTu9OFrxfvQ4nWD2p%2FeFPRd7TDLGuuP%2FUwBoO13dos8fzqUy%2F0%2FWCf%2BFzTPO2Aa3skD2yB1OHSyUW2CfDf1Jgdrcis99nk5qcW5BcfTPFG13id2vslBPsDoHJ3pqDUQ3dpo%2FOdvEcy%2BlNMDFo%2BH%2B5%2BFuKicnI%2FEFa8oI276FAhptel0%2BC1FppHBEarx3aZrwNqetNPALI1emtQMj8%2FWiKLythFridsemYNWNEtizJQgURi24w0IqAxQY6pgFW2kDUMXi8vDTiZC2oDh3bzKmWwK4OFYAfWzxSrBMqqM3JWXKib4%2FRurRmfo3ys8ADscMjt3TjIEycMOIIF0rYwGzJPRa7yHnI%2BulLMRJWRdPip4IC7TBnPr1K4KxIXYHenTLr7NPiELn%2BkQYpAQbPaNXOFe0puNjk5HWCwSvUZLmzuLQLoOqnSdfIXmYTfK4HLKMvLRAQwhQX5qQXzWBzaFeYhpLd&X-Amz-Signature=27305311cdf0b945e7ea956bb92a635ab352a9ca480de1c1e31ad4ac101086be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664EI2WOS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGnQ%2FAJZysSJMU1sU4cDb6NofBEJJkJmj8F7nUdkRkmVAiAAj%2Fp4wl7Na2mkejPJUPSI6YER9nlDfvwc7sl3%2FZUFzSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMvnNDicG%2Bi399KxGZKtwDAZlSuKzlCGbjYoNRT%2BvpgHg1Ds9KKi0vepSWysL72WUuQ72pb1D%2BqxCS9K43hZKzCuP1p%2BbGUGXxVpkSABYUNAHtDr1kMM3lUSfl%2FU9wU%2Fi%2BQGe%2BgajzhQA1JL3m5hkU%2BXWIF909fWq%2F71wcygzkXF9FsGVH47%2F8e6B7r%2FGaG5H7%2Bf8dg3xq18p6rxjAep0fqX%2FBTckEzY%2FOUo0JvAHtimOXgRADo2m0156cldSof2AgXG9Dyz%2BY%2BdDGnIN90gxB6IbMCwBXpCm5fijYy3xT1v1DxXfaGmrfHUoXI712sh6yW05swIFpohBmzurCUAeYbUNhOPumsjER3naNiLPpNaXwgYS0MTPz05BunTBUDyxEySPbdaA2s0i%2B3b1%2Bc00A6yXPtT1E%2FjoLTu9OFrxfvQ4nWD2p%2FeFPRd7TDLGuuP%2FUwBoO13dos8fzqUy%2F0%2FWCf%2BFzTPO2Aa3skD2yB1OHSyUW2CfDf1Jgdrcis99nk5qcW5BcfTPFG13id2vslBPsDoHJ3pqDUQ3dpo%2FOdvEcy%2BlNMDFo%2BH%2B5%2BFuKicnI%2FEFa8oI276FAhptel0%2BC1FppHBEarx3aZrwNqetNPALI1emtQMj8%2FWiKLythFridsemYNWNEtizJQgURi24w0IqAxQY6pgFW2kDUMXi8vDTiZC2oDh3bzKmWwK4OFYAfWzxSrBMqqM3JWXKib4%2FRurRmfo3ys8ADscMjt3TjIEycMOIIF0rYwGzJPRa7yHnI%2BulLMRJWRdPip4IC7TBnPr1K4KxIXYHenTLr7NPiELn%2BkQYpAQbPaNXOFe0puNjk5HWCwSvUZLmzuLQLoOqnSdfIXmYTfK4HLKMvLRAQwhQX5qQXzWBzaFeYhpLd&X-Amz-Signature=284e54949db6ee072324b1afdce06a74e9fd905684f9eec2d47e7630e7e18319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664EI2WOS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGnQ%2FAJZysSJMU1sU4cDb6NofBEJJkJmj8F7nUdkRkmVAiAAj%2Fp4wl7Na2mkejPJUPSI6YER9nlDfvwc7sl3%2FZUFzSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMvnNDicG%2Bi399KxGZKtwDAZlSuKzlCGbjYoNRT%2BvpgHg1Ds9KKi0vepSWysL72WUuQ72pb1D%2BqxCS9K43hZKzCuP1p%2BbGUGXxVpkSABYUNAHtDr1kMM3lUSfl%2FU9wU%2Fi%2BQGe%2BgajzhQA1JL3m5hkU%2BXWIF909fWq%2F71wcygzkXF9FsGVH47%2F8e6B7r%2FGaG5H7%2Bf8dg3xq18p6rxjAep0fqX%2FBTckEzY%2FOUo0JvAHtimOXgRADo2m0156cldSof2AgXG9Dyz%2BY%2BdDGnIN90gxB6IbMCwBXpCm5fijYy3xT1v1DxXfaGmrfHUoXI712sh6yW05swIFpohBmzurCUAeYbUNhOPumsjER3naNiLPpNaXwgYS0MTPz05BunTBUDyxEySPbdaA2s0i%2B3b1%2Bc00A6yXPtT1E%2FjoLTu9OFrxfvQ4nWD2p%2FeFPRd7TDLGuuP%2FUwBoO13dos8fzqUy%2F0%2FWCf%2BFzTPO2Aa3skD2yB1OHSyUW2CfDf1Jgdrcis99nk5qcW5BcfTPFG13id2vslBPsDoHJ3pqDUQ3dpo%2FOdvEcy%2BlNMDFo%2BH%2B5%2BFuKicnI%2FEFa8oI276FAhptel0%2BC1FppHBEarx3aZrwNqetNPALI1emtQMj8%2FWiKLythFridsemYNWNEtizJQgURi24w0IqAxQY6pgFW2kDUMXi8vDTiZC2oDh3bzKmWwK4OFYAfWzxSrBMqqM3JWXKib4%2FRurRmfo3ys8ADscMjt3TjIEycMOIIF0rYwGzJPRa7yHnI%2BulLMRJWRdPip4IC7TBnPr1K4KxIXYHenTLr7NPiELn%2BkQYpAQbPaNXOFe0puNjk5HWCwSvUZLmzuLQLoOqnSdfIXmYTfK4HLKMvLRAQwhQX5qQXzWBzaFeYhpLd&X-Amz-Signature=d6b446ee8b79f7ccb5abca9fb4275c545427aaa2ce594a5fe70c07aec1f81ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664EI2WOS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGnQ%2FAJZysSJMU1sU4cDb6NofBEJJkJmj8F7nUdkRkmVAiAAj%2Fp4wl7Na2mkejPJUPSI6YER9nlDfvwc7sl3%2FZUFzSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMvnNDicG%2Bi399KxGZKtwDAZlSuKzlCGbjYoNRT%2BvpgHg1Ds9KKi0vepSWysL72WUuQ72pb1D%2BqxCS9K43hZKzCuP1p%2BbGUGXxVpkSABYUNAHtDr1kMM3lUSfl%2FU9wU%2Fi%2BQGe%2BgajzhQA1JL3m5hkU%2BXWIF909fWq%2F71wcygzkXF9FsGVH47%2F8e6B7r%2FGaG5H7%2Bf8dg3xq18p6rxjAep0fqX%2FBTckEzY%2FOUo0JvAHtimOXgRADo2m0156cldSof2AgXG9Dyz%2BY%2BdDGnIN90gxB6IbMCwBXpCm5fijYy3xT1v1DxXfaGmrfHUoXI712sh6yW05swIFpohBmzurCUAeYbUNhOPumsjER3naNiLPpNaXwgYS0MTPz05BunTBUDyxEySPbdaA2s0i%2B3b1%2Bc00A6yXPtT1E%2FjoLTu9OFrxfvQ4nWD2p%2FeFPRd7TDLGuuP%2FUwBoO13dos8fzqUy%2F0%2FWCf%2BFzTPO2Aa3skD2yB1OHSyUW2CfDf1Jgdrcis99nk5qcW5BcfTPFG13id2vslBPsDoHJ3pqDUQ3dpo%2FOdvEcy%2BlNMDFo%2BH%2B5%2BFuKicnI%2FEFa8oI276FAhptel0%2BC1FppHBEarx3aZrwNqetNPALI1emtQMj8%2FWiKLythFridsemYNWNEtizJQgURi24w0IqAxQY6pgFW2kDUMXi8vDTiZC2oDh3bzKmWwK4OFYAfWzxSrBMqqM3JWXKib4%2FRurRmfo3ys8ADscMjt3TjIEycMOIIF0rYwGzJPRa7yHnI%2BulLMRJWRdPip4IC7TBnPr1K4KxIXYHenTLr7NPiELn%2BkQYpAQbPaNXOFe0puNjk5HWCwSvUZLmzuLQLoOqnSdfIXmYTfK4HLKMvLRAQwhQX5qQXzWBzaFeYhpLd&X-Amz-Signature=56e2f2d11b34f1cbfbfafbccf1f79f655a0187f47f4c2a5502ca320ebeeeee45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664EI2WOS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGnQ%2FAJZysSJMU1sU4cDb6NofBEJJkJmj8F7nUdkRkmVAiAAj%2Fp4wl7Na2mkejPJUPSI6YER9nlDfvwc7sl3%2FZUFzSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMvnNDicG%2Bi399KxGZKtwDAZlSuKzlCGbjYoNRT%2BvpgHg1Ds9KKi0vepSWysL72WUuQ72pb1D%2BqxCS9K43hZKzCuP1p%2BbGUGXxVpkSABYUNAHtDr1kMM3lUSfl%2FU9wU%2Fi%2BQGe%2BgajzhQA1JL3m5hkU%2BXWIF909fWq%2F71wcygzkXF9FsGVH47%2F8e6B7r%2FGaG5H7%2Bf8dg3xq18p6rxjAep0fqX%2FBTckEzY%2FOUo0JvAHtimOXgRADo2m0156cldSof2AgXG9Dyz%2BY%2BdDGnIN90gxB6IbMCwBXpCm5fijYy3xT1v1DxXfaGmrfHUoXI712sh6yW05swIFpohBmzurCUAeYbUNhOPumsjER3naNiLPpNaXwgYS0MTPz05BunTBUDyxEySPbdaA2s0i%2B3b1%2Bc00A6yXPtT1E%2FjoLTu9OFrxfvQ4nWD2p%2FeFPRd7TDLGuuP%2FUwBoO13dos8fzqUy%2F0%2FWCf%2BFzTPO2Aa3skD2yB1OHSyUW2CfDf1Jgdrcis99nk5qcW5BcfTPFG13id2vslBPsDoHJ3pqDUQ3dpo%2FOdvEcy%2BlNMDFo%2BH%2B5%2BFuKicnI%2FEFa8oI276FAhptel0%2BC1FppHBEarx3aZrwNqetNPALI1emtQMj8%2FWiKLythFridsemYNWNEtizJQgURi24w0IqAxQY6pgFW2kDUMXi8vDTiZC2oDh3bzKmWwK4OFYAfWzxSrBMqqM3JWXKib4%2FRurRmfo3ys8ADscMjt3TjIEycMOIIF0rYwGzJPRa7yHnI%2BulLMRJWRdPip4IC7TBnPr1K4KxIXYHenTLr7NPiELn%2BkQYpAQbPaNXOFe0puNjk5HWCwSvUZLmzuLQLoOqnSdfIXmYTfK4HLKMvLRAQwhQX5qQXzWBzaFeYhpLd&X-Amz-Signature=e37487ffdc0230687212c56fde9c1675950d9302aa64b10c5780ed787450968f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
