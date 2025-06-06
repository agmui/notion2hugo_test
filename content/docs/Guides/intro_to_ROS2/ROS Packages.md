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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOSFGAP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCD2ggL5b%2FJLwOADJ6vWgokir9am%2BDd6ag1l70ZR%2B6wHgIhANaCA9Q6zWYW1oETp60G%2FBcvE0RkPjrDTKLQOF5hM5atKv8DCFIQABoMNjM3NDIzMTgzODA1Igx%2FoPeCA1gWLbDSwbAq3AMCiksxANmWfTElM08S5XUJIv41mOJwqY655IGC1Fip9RipDrNOpxkSn8uEbvkCNm2x75JweyjXG8zHUj8Z%2FNHykugartgQGDB0rNQwCisPtmi12fy%2FBAUJ6bAZcqt966BZ5YtLh1TAAhTX%2FhlUUW6fMFEvakoUNF4e6dHRco%2BqZZ4DRRhnJH7C24ifc2%2B83inVvdw4cUr%2F6loQn3vWsGz%2BVc7xeOGvCWSUPY9OR1oLXGn5GdwgrsbDmnw0vjRnKcMGBjbpojg1JSYfpTx%2FCETC%2BkIK0kjhs1yocqJnQcW%2Bj9FXYKFiBZBwwHa34N3E%2FB3tC781AoTD5JpvCsaKwku8CdzgMMpR7PAP2CCC%2BGd5Il%2Ba1%2BGH652i9BeK1QtZSuDyh20t5bU37LcVXIbee5Nf60ylkD26PGNq0Nu2GhmL6%2BAa%2FoDgxXTyhSPGHfd5clVfC8ZGMaLhuYzhOR1C6Cw0JefByJdROz37yPMmz4p4nu0k%2BF2DJmQ%2FNLaKT3zBsAmZagrc44Cz7R%2FUD3OcghiVR8qpQU%2FtgtOpI2%2BRROPcGQeBX7lFCMEtmj3o1TB1bPAk40wY4wFJ1NkyPVhHSwtCyqTetiOs%2BBWjZ2%2B8etOhEO45rjyH9YLpw4F4oTDt8ojCBjqkAWjc9sa%2Bz6l0FVVI7iqoMnr1v%2BBfzfa2yZfCVOltCfvCJ1tGTcnnwJBpW6PsmUCTqW8ipg4p1sze2c9YSO%2FwJBs56pyN9ICs6T3kP03lT7KMt2GMeS99Y9ch9XWzmt0R0ZtZ7%2BX3oeCXvvqbdplR3Ueog0M%2B66e3Ss7Jvf3EBspyrcBOD9M6ibHyrqHaVpX4Hgo%2FWveNRit6T6jOp62BCVm%2F3l%2BN&X-Amz-Signature=96a6b165e1100a37b014e06a72f0daadf793c0afb2f291a5144bcaea41db42c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOSFGAP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCD2ggL5b%2FJLwOADJ6vWgokir9am%2BDd6ag1l70ZR%2B6wHgIhANaCA9Q6zWYW1oETp60G%2FBcvE0RkPjrDTKLQOF5hM5atKv8DCFIQABoMNjM3NDIzMTgzODA1Igx%2FoPeCA1gWLbDSwbAq3AMCiksxANmWfTElM08S5XUJIv41mOJwqY655IGC1Fip9RipDrNOpxkSn8uEbvkCNm2x75JweyjXG8zHUj8Z%2FNHykugartgQGDB0rNQwCisPtmi12fy%2FBAUJ6bAZcqt966BZ5YtLh1TAAhTX%2FhlUUW6fMFEvakoUNF4e6dHRco%2BqZZ4DRRhnJH7C24ifc2%2B83inVvdw4cUr%2F6loQn3vWsGz%2BVc7xeOGvCWSUPY9OR1oLXGn5GdwgrsbDmnw0vjRnKcMGBjbpojg1JSYfpTx%2FCETC%2BkIK0kjhs1yocqJnQcW%2Bj9FXYKFiBZBwwHa34N3E%2FB3tC781AoTD5JpvCsaKwku8CdzgMMpR7PAP2CCC%2BGd5Il%2Ba1%2BGH652i9BeK1QtZSuDyh20t5bU37LcVXIbee5Nf60ylkD26PGNq0Nu2GhmL6%2BAa%2FoDgxXTyhSPGHfd5clVfC8ZGMaLhuYzhOR1C6Cw0JefByJdROz37yPMmz4p4nu0k%2BF2DJmQ%2FNLaKT3zBsAmZagrc44Cz7R%2FUD3OcghiVR8qpQU%2FtgtOpI2%2BRROPcGQeBX7lFCMEtmj3o1TB1bPAk40wY4wFJ1NkyPVhHSwtCyqTetiOs%2BBWjZ2%2B8etOhEO45rjyH9YLpw4F4oTDt8ojCBjqkAWjc9sa%2Bz6l0FVVI7iqoMnr1v%2BBfzfa2yZfCVOltCfvCJ1tGTcnnwJBpW6PsmUCTqW8ipg4p1sze2c9YSO%2FwJBs56pyN9ICs6T3kP03lT7KMt2GMeS99Y9ch9XWzmt0R0ZtZ7%2BX3oeCXvvqbdplR3Ueog0M%2B66e3Ss7Jvf3EBspyrcBOD9M6ibHyrqHaVpX4Hgo%2FWveNRit6T6jOp62BCVm%2F3l%2BN&X-Amz-Signature=f4214cc920adcb74757f2183661ddb24321ebc26a7aacb98330878629bde469c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOSFGAP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCD2ggL5b%2FJLwOADJ6vWgokir9am%2BDd6ag1l70ZR%2B6wHgIhANaCA9Q6zWYW1oETp60G%2FBcvE0RkPjrDTKLQOF5hM5atKv8DCFIQABoMNjM3NDIzMTgzODA1Igx%2FoPeCA1gWLbDSwbAq3AMCiksxANmWfTElM08S5XUJIv41mOJwqY655IGC1Fip9RipDrNOpxkSn8uEbvkCNm2x75JweyjXG8zHUj8Z%2FNHykugartgQGDB0rNQwCisPtmi12fy%2FBAUJ6bAZcqt966BZ5YtLh1TAAhTX%2FhlUUW6fMFEvakoUNF4e6dHRco%2BqZZ4DRRhnJH7C24ifc2%2B83inVvdw4cUr%2F6loQn3vWsGz%2BVc7xeOGvCWSUPY9OR1oLXGn5GdwgrsbDmnw0vjRnKcMGBjbpojg1JSYfpTx%2FCETC%2BkIK0kjhs1yocqJnQcW%2Bj9FXYKFiBZBwwHa34N3E%2FB3tC781AoTD5JpvCsaKwku8CdzgMMpR7PAP2CCC%2BGd5Il%2Ba1%2BGH652i9BeK1QtZSuDyh20t5bU37LcVXIbee5Nf60ylkD26PGNq0Nu2GhmL6%2BAa%2FoDgxXTyhSPGHfd5clVfC8ZGMaLhuYzhOR1C6Cw0JefByJdROz37yPMmz4p4nu0k%2BF2DJmQ%2FNLaKT3zBsAmZagrc44Cz7R%2FUD3OcghiVR8qpQU%2FtgtOpI2%2BRROPcGQeBX7lFCMEtmj3o1TB1bPAk40wY4wFJ1NkyPVhHSwtCyqTetiOs%2BBWjZ2%2B8etOhEO45rjyH9YLpw4F4oTDt8ojCBjqkAWjc9sa%2Bz6l0FVVI7iqoMnr1v%2BBfzfa2yZfCVOltCfvCJ1tGTcnnwJBpW6PsmUCTqW8ipg4p1sze2c9YSO%2FwJBs56pyN9ICs6T3kP03lT7KMt2GMeS99Y9ch9XWzmt0R0ZtZ7%2BX3oeCXvvqbdplR3Ueog0M%2B66e3Ss7Jvf3EBspyrcBOD9M6ibHyrqHaVpX4Hgo%2FWveNRit6T6jOp62BCVm%2F3l%2BN&X-Amz-Signature=d0f54f4f874cbd8dbf9c025ea039de539455872f3f2af6d0a3e5b0af56c40622&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOSFGAP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCD2ggL5b%2FJLwOADJ6vWgokir9am%2BDd6ag1l70ZR%2B6wHgIhANaCA9Q6zWYW1oETp60G%2FBcvE0RkPjrDTKLQOF5hM5atKv8DCFIQABoMNjM3NDIzMTgzODA1Igx%2FoPeCA1gWLbDSwbAq3AMCiksxANmWfTElM08S5XUJIv41mOJwqY655IGC1Fip9RipDrNOpxkSn8uEbvkCNm2x75JweyjXG8zHUj8Z%2FNHykugartgQGDB0rNQwCisPtmi12fy%2FBAUJ6bAZcqt966BZ5YtLh1TAAhTX%2FhlUUW6fMFEvakoUNF4e6dHRco%2BqZZ4DRRhnJH7C24ifc2%2B83inVvdw4cUr%2F6loQn3vWsGz%2BVc7xeOGvCWSUPY9OR1oLXGn5GdwgrsbDmnw0vjRnKcMGBjbpojg1JSYfpTx%2FCETC%2BkIK0kjhs1yocqJnQcW%2Bj9FXYKFiBZBwwHa34N3E%2FB3tC781AoTD5JpvCsaKwku8CdzgMMpR7PAP2CCC%2BGd5Il%2Ba1%2BGH652i9BeK1QtZSuDyh20t5bU37LcVXIbee5Nf60ylkD26PGNq0Nu2GhmL6%2BAa%2FoDgxXTyhSPGHfd5clVfC8ZGMaLhuYzhOR1C6Cw0JefByJdROz37yPMmz4p4nu0k%2BF2DJmQ%2FNLaKT3zBsAmZagrc44Cz7R%2FUD3OcghiVR8qpQU%2FtgtOpI2%2BRROPcGQeBX7lFCMEtmj3o1TB1bPAk40wY4wFJ1NkyPVhHSwtCyqTetiOs%2BBWjZ2%2B8etOhEO45rjyH9YLpw4F4oTDt8ojCBjqkAWjc9sa%2Bz6l0FVVI7iqoMnr1v%2BBfzfa2yZfCVOltCfvCJ1tGTcnnwJBpW6PsmUCTqW8ipg4p1sze2c9YSO%2FwJBs56pyN9ICs6T3kP03lT7KMt2GMeS99Y9ch9XWzmt0R0ZtZ7%2BX3oeCXvvqbdplR3Ueog0M%2B66e3Ss7Jvf3EBspyrcBOD9M6ibHyrqHaVpX4Hgo%2FWveNRit6T6jOp62BCVm%2F3l%2BN&X-Amz-Signature=24bc4d5ee1d40dc4b933636c136bfb13c8075ef317245a558d57fe4b6ab1f776&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOSFGAP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCD2ggL5b%2FJLwOADJ6vWgokir9am%2BDd6ag1l70ZR%2B6wHgIhANaCA9Q6zWYW1oETp60G%2FBcvE0RkPjrDTKLQOF5hM5atKv8DCFIQABoMNjM3NDIzMTgzODA1Igx%2FoPeCA1gWLbDSwbAq3AMCiksxANmWfTElM08S5XUJIv41mOJwqY655IGC1Fip9RipDrNOpxkSn8uEbvkCNm2x75JweyjXG8zHUj8Z%2FNHykugartgQGDB0rNQwCisPtmi12fy%2FBAUJ6bAZcqt966BZ5YtLh1TAAhTX%2FhlUUW6fMFEvakoUNF4e6dHRco%2BqZZ4DRRhnJH7C24ifc2%2B83inVvdw4cUr%2F6loQn3vWsGz%2BVc7xeOGvCWSUPY9OR1oLXGn5GdwgrsbDmnw0vjRnKcMGBjbpojg1JSYfpTx%2FCETC%2BkIK0kjhs1yocqJnQcW%2Bj9FXYKFiBZBwwHa34N3E%2FB3tC781AoTD5JpvCsaKwku8CdzgMMpR7PAP2CCC%2BGd5Il%2Ba1%2BGH652i9BeK1QtZSuDyh20t5bU37LcVXIbee5Nf60ylkD26PGNq0Nu2GhmL6%2BAa%2FoDgxXTyhSPGHfd5clVfC8ZGMaLhuYzhOR1C6Cw0JefByJdROz37yPMmz4p4nu0k%2BF2DJmQ%2FNLaKT3zBsAmZagrc44Cz7R%2FUD3OcghiVR8qpQU%2FtgtOpI2%2BRROPcGQeBX7lFCMEtmj3o1TB1bPAk40wY4wFJ1NkyPVhHSwtCyqTetiOs%2BBWjZ2%2B8etOhEO45rjyH9YLpw4F4oTDt8ojCBjqkAWjc9sa%2Bz6l0FVVI7iqoMnr1v%2BBfzfa2yZfCVOltCfvCJ1tGTcnnwJBpW6PsmUCTqW8ipg4p1sze2c9YSO%2FwJBs56pyN9ICs6T3kP03lT7KMt2GMeS99Y9ch9XWzmt0R0ZtZ7%2BX3oeCXvvqbdplR3Ueog0M%2B66e3Ss7Jvf3EBspyrcBOD9M6ibHyrqHaVpX4Hgo%2FWveNRit6T6jOp62BCVm%2F3l%2BN&X-Amz-Signature=9df9409892189480f50c331d07a24d2039da0c6864bca1166465e3010119f92b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOSFGAP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCD2ggL5b%2FJLwOADJ6vWgokir9am%2BDd6ag1l70ZR%2B6wHgIhANaCA9Q6zWYW1oETp60G%2FBcvE0RkPjrDTKLQOF5hM5atKv8DCFIQABoMNjM3NDIzMTgzODA1Igx%2FoPeCA1gWLbDSwbAq3AMCiksxANmWfTElM08S5XUJIv41mOJwqY655IGC1Fip9RipDrNOpxkSn8uEbvkCNm2x75JweyjXG8zHUj8Z%2FNHykugartgQGDB0rNQwCisPtmi12fy%2FBAUJ6bAZcqt966BZ5YtLh1TAAhTX%2FhlUUW6fMFEvakoUNF4e6dHRco%2BqZZ4DRRhnJH7C24ifc2%2B83inVvdw4cUr%2F6loQn3vWsGz%2BVc7xeOGvCWSUPY9OR1oLXGn5GdwgrsbDmnw0vjRnKcMGBjbpojg1JSYfpTx%2FCETC%2BkIK0kjhs1yocqJnQcW%2Bj9FXYKFiBZBwwHa34N3E%2FB3tC781AoTD5JpvCsaKwku8CdzgMMpR7PAP2CCC%2BGd5Il%2Ba1%2BGH652i9BeK1QtZSuDyh20t5bU37LcVXIbee5Nf60ylkD26PGNq0Nu2GhmL6%2BAa%2FoDgxXTyhSPGHfd5clVfC8ZGMaLhuYzhOR1C6Cw0JefByJdROz37yPMmz4p4nu0k%2BF2DJmQ%2FNLaKT3zBsAmZagrc44Cz7R%2FUD3OcghiVR8qpQU%2FtgtOpI2%2BRROPcGQeBX7lFCMEtmj3o1TB1bPAk40wY4wFJ1NkyPVhHSwtCyqTetiOs%2BBWjZ2%2B8etOhEO45rjyH9YLpw4F4oTDt8ojCBjqkAWjc9sa%2Bz6l0FVVI7iqoMnr1v%2BBfzfa2yZfCVOltCfvCJ1tGTcnnwJBpW6PsmUCTqW8ipg4p1sze2c9YSO%2FwJBs56pyN9ICs6T3kP03lT7KMt2GMeS99Y9ch9XWzmt0R0ZtZ7%2BX3oeCXvvqbdplR3Ueog0M%2B66e3Ss7Jvf3EBspyrcBOD9M6ibHyrqHaVpX4Hgo%2FWveNRit6T6jOp62BCVm%2F3l%2BN&X-Amz-Signature=0b97421d4807a5602a852bd44c0c58e57660958f1b1021aaf6ab1dd685266b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOSFGAP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCD2ggL5b%2FJLwOADJ6vWgokir9am%2BDd6ag1l70ZR%2B6wHgIhANaCA9Q6zWYW1oETp60G%2FBcvE0RkPjrDTKLQOF5hM5atKv8DCFIQABoMNjM3NDIzMTgzODA1Igx%2FoPeCA1gWLbDSwbAq3AMCiksxANmWfTElM08S5XUJIv41mOJwqY655IGC1Fip9RipDrNOpxkSn8uEbvkCNm2x75JweyjXG8zHUj8Z%2FNHykugartgQGDB0rNQwCisPtmi12fy%2FBAUJ6bAZcqt966BZ5YtLh1TAAhTX%2FhlUUW6fMFEvakoUNF4e6dHRco%2BqZZ4DRRhnJH7C24ifc2%2B83inVvdw4cUr%2F6loQn3vWsGz%2BVc7xeOGvCWSUPY9OR1oLXGn5GdwgrsbDmnw0vjRnKcMGBjbpojg1JSYfpTx%2FCETC%2BkIK0kjhs1yocqJnQcW%2Bj9FXYKFiBZBwwHa34N3E%2FB3tC781AoTD5JpvCsaKwku8CdzgMMpR7PAP2CCC%2BGd5Il%2Ba1%2BGH652i9BeK1QtZSuDyh20t5bU37LcVXIbee5Nf60ylkD26PGNq0Nu2GhmL6%2BAa%2FoDgxXTyhSPGHfd5clVfC8ZGMaLhuYzhOR1C6Cw0JefByJdROz37yPMmz4p4nu0k%2BF2DJmQ%2FNLaKT3zBsAmZagrc44Cz7R%2FUD3OcghiVR8qpQU%2FtgtOpI2%2BRROPcGQeBX7lFCMEtmj3o1TB1bPAk40wY4wFJ1NkyPVhHSwtCyqTetiOs%2BBWjZ2%2B8etOhEO45rjyH9YLpw4F4oTDt8ojCBjqkAWjc9sa%2Bz6l0FVVI7iqoMnr1v%2BBfzfa2yZfCVOltCfvCJ1tGTcnnwJBpW6PsmUCTqW8ipg4p1sze2c9YSO%2FwJBs56pyN9ICs6T3kP03lT7KMt2GMeS99Y9ch9XWzmt0R0ZtZ7%2BX3oeCXvvqbdplR3Ueog0M%2B66e3Ss7Jvf3EBspyrcBOD9M6ibHyrqHaVpX4Hgo%2FWveNRit6T6jOp62BCVm%2F3l%2BN&X-Amz-Signature=9f8cdc685002edd09ff78af8fc14f3cf4c677864d66b10fa9bbfe64fe559b8cd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
