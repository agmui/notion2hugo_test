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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVIAMIS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCosbi9Dgt37WtmKS6x3YmpKDr5XAidvxHIXga12BH8LwIgJ1e1myfR28xs16%2FgzGLUdtPknISQf2u7zuEWlIVn9vQqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfFHu2O8Rb1Rh9e5yrcA0WaV9ieR5GeQBi0RrdInzJKveTSSNzOfA9fhuBh1BBC6uNJ1XgF00Ts7zvKBVHSfDypLEJZU01%2FsWbYJnDrvru0rkYGnhrlu5Jevb5nAEM09TGOo%2BqMSMsXcLx1RD6MFhSzU3d31kIfoCbnuofZmfsWBlq6T5mOFVwKZqT0nRYH5kx%2Bhw601X89JbYlO9YxgnY4Geq8mVfpNEFcJ9t3ErhvgKIknpgVy4za8TeVyfZRe3DUHOw8dKYytsYbx4K6bb07al2KDWFGh4VCmYC1tDTs8XhQGFZUKweDz5eOXDdO5C1dIZmCmYbctBNwIaUlDQ2WDXAHpbWmVJaa8wSdjPZiWfDjKZrOKzuxQjsvVEwdHlqdawm8liwMvADlXnDaBXUkI0%2BIP1Tn%2BTYYxPgrf1bvkQkTTzvoXENJnMRlCP%2FMLcvlCbl3agv5dP3fiwaEhMdH4wytdg%2FVdTfjXYzzU%2BziDyOLFSQYw6V5vGCC%2BLJxHTooFXTAjk8IC0CXhpx2B1NDHMjgrwMEmpw4ieGdkEtlB1pQhqRAVYMS0VAdgIxU%2BpwgfmEP6M5bhAJ%2B0ySLG%2BFw0oOnvEDgqkLBsYcUsVafoonzqVg%2B6pr%2FYefXT9UKC0tZSmAuyNwqyP%2FZMKODxsMGOqUBZ%2FOXI6wH9Zb2K9PUXkMmVZcXjZMjinRmu6N2mA%2BZcB5aWvYaWge227mpr96Mz2HbzednTdayMjnwJBuMy42ybrHKzXntQojaH4ubn%2F1ug8BQ1wLPxLpD9eqnVwD9dMyVZUcKSRZ2hftMLZFlUGRenaBNSBZGXDkYmya6nlFDgdahC5gsay5Z6uTmbyEQHD7W9hxUpgqJYlvxENq3YDAImOTXUVbi&X-Amz-Signature=2cf50d806ea4b2eb3cf3e81f12dcb8783aeec96df0cad5066f223d9512d8910a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVIAMIS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCosbi9Dgt37WtmKS6x3YmpKDr5XAidvxHIXga12BH8LwIgJ1e1myfR28xs16%2FgzGLUdtPknISQf2u7zuEWlIVn9vQqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfFHu2O8Rb1Rh9e5yrcA0WaV9ieR5GeQBi0RrdInzJKveTSSNzOfA9fhuBh1BBC6uNJ1XgF00Ts7zvKBVHSfDypLEJZU01%2FsWbYJnDrvru0rkYGnhrlu5Jevb5nAEM09TGOo%2BqMSMsXcLx1RD6MFhSzU3d31kIfoCbnuofZmfsWBlq6T5mOFVwKZqT0nRYH5kx%2Bhw601X89JbYlO9YxgnY4Geq8mVfpNEFcJ9t3ErhvgKIknpgVy4za8TeVyfZRe3DUHOw8dKYytsYbx4K6bb07al2KDWFGh4VCmYC1tDTs8XhQGFZUKweDz5eOXDdO5C1dIZmCmYbctBNwIaUlDQ2WDXAHpbWmVJaa8wSdjPZiWfDjKZrOKzuxQjsvVEwdHlqdawm8liwMvADlXnDaBXUkI0%2BIP1Tn%2BTYYxPgrf1bvkQkTTzvoXENJnMRlCP%2FMLcvlCbl3agv5dP3fiwaEhMdH4wytdg%2FVdTfjXYzzU%2BziDyOLFSQYw6V5vGCC%2BLJxHTooFXTAjk8IC0CXhpx2B1NDHMjgrwMEmpw4ieGdkEtlB1pQhqRAVYMS0VAdgIxU%2BpwgfmEP6M5bhAJ%2B0ySLG%2BFw0oOnvEDgqkLBsYcUsVafoonzqVg%2B6pr%2FYefXT9UKC0tZSmAuyNwqyP%2FZMKODxsMGOqUBZ%2FOXI6wH9Zb2K9PUXkMmVZcXjZMjinRmu6N2mA%2BZcB5aWvYaWge227mpr96Mz2HbzednTdayMjnwJBuMy42ybrHKzXntQojaH4ubn%2F1ug8BQ1wLPxLpD9eqnVwD9dMyVZUcKSRZ2hftMLZFlUGRenaBNSBZGXDkYmya6nlFDgdahC5gsay5Z6uTmbyEQHD7W9hxUpgqJYlvxENq3YDAImOTXUVbi&X-Amz-Signature=4dbf5648761c8ef651696040fe8e6de88135f34a80185dca943620781356ac6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVIAMIS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCosbi9Dgt37WtmKS6x3YmpKDr5XAidvxHIXga12BH8LwIgJ1e1myfR28xs16%2FgzGLUdtPknISQf2u7zuEWlIVn9vQqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfFHu2O8Rb1Rh9e5yrcA0WaV9ieR5GeQBi0RrdInzJKveTSSNzOfA9fhuBh1BBC6uNJ1XgF00Ts7zvKBVHSfDypLEJZU01%2FsWbYJnDrvru0rkYGnhrlu5Jevb5nAEM09TGOo%2BqMSMsXcLx1RD6MFhSzU3d31kIfoCbnuofZmfsWBlq6T5mOFVwKZqT0nRYH5kx%2Bhw601X89JbYlO9YxgnY4Geq8mVfpNEFcJ9t3ErhvgKIknpgVy4za8TeVyfZRe3DUHOw8dKYytsYbx4K6bb07al2KDWFGh4VCmYC1tDTs8XhQGFZUKweDz5eOXDdO5C1dIZmCmYbctBNwIaUlDQ2WDXAHpbWmVJaa8wSdjPZiWfDjKZrOKzuxQjsvVEwdHlqdawm8liwMvADlXnDaBXUkI0%2BIP1Tn%2BTYYxPgrf1bvkQkTTzvoXENJnMRlCP%2FMLcvlCbl3agv5dP3fiwaEhMdH4wytdg%2FVdTfjXYzzU%2BziDyOLFSQYw6V5vGCC%2BLJxHTooFXTAjk8IC0CXhpx2B1NDHMjgrwMEmpw4ieGdkEtlB1pQhqRAVYMS0VAdgIxU%2BpwgfmEP6M5bhAJ%2B0ySLG%2BFw0oOnvEDgqkLBsYcUsVafoonzqVg%2B6pr%2FYefXT9UKC0tZSmAuyNwqyP%2FZMKODxsMGOqUBZ%2FOXI6wH9Zb2K9PUXkMmVZcXjZMjinRmu6N2mA%2BZcB5aWvYaWge227mpr96Mz2HbzednTdayMjnwJBuMy42ybrHKzXntQojaH4ubn%2F1ug8BQ1wLPxLpD9eqnVwD9dMyVZUcKSRZ2hftMLZFlUGRenaBNSBZGXDkYmya6nlFDgdahC5gsay5Z6uTmbyEQHD7W9hxUpgqJYlvxENq3YDAImOTXUVbi&X-Amz-Signature=af741b10d880c2c86b70a91af4d38ca1acef87daca107105f3ab21dbe1547a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVIAMIS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCosbi9Dgt37WtmKS6x3YmpKDr5XAidvxHIXga12BH8LwIgJ1e1myfR28xs16%2FgzGLUdtPknISQf2u7zuEWlIVn9vQqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfFHu2O8Rb1Rh9e5yrcA0WaV9ieR5GeQBi0RrdInzJKveTSSNzOfA9fhuBh1BBC6uNJ1XgF00Ts7zvKBVHSfDypLEJZU01%2FsWbYJnDrvru0rkYGnhrlu5Jevb5nAEM09TGOo%2BqMSMsXcLx1RD6MFhSzU3d31kIfoCbnuofZmfsWBlq6T5mOFVwKZqT0nRYH5kx%2Bhw601X89JbYlO9YxgnY4Geq8mVfpNEFcJ9t3ErhvgKIknpgVy4za8TeVyfZRe3DUHOw8dKYytsYbx4K6bb07al2KDWFGh4VCmYC1tDTs8XhQGFZUKweDz5eOXDdO5C1dIZmCmYbctBNwIaUlDQ2WDXAHpbWmVJaa8wSdjPZiWfDjKZrOKzuxQjsvVEwdHlqdawm8liwMvADlXnDaBXUkI0%2BIP1Tn%2BTYYxPgrf1bvkQkTTzvoXENJnMRlCP%2FMLcvlCbl3agv5dP3fiwaEhMdH4wytdg%2FVdTfjXYzzU%2BziDyOLFSQYw6V5vGCC%2BLJxHTooFXTAjk8IC0CXhpx2B1NDHMjgrwMEmpw4ieGdkEtlB1pQhqRAVYMS0VAdgIxU%2BpwgfmEP6M5bhAJ%2B0ySLG%2BFw0oOnvEDgqkLBsYcUsVafoonzqVg%2B6pr%2FYefXT9UKC0tZSmAuyNwqyP%2FZMKODxsMGOqUBZ%2FOXI6wH9Zb2K9PUXkMmVZcXjZMjinRmu6N2mA%2BZcB5aWvYaWge227mpr96Mz2HbzednTdayMjnwJBuMy42ybrHKzXntQojaH4ubn%2F1ug8BQ1wLPxLpD9eqnVwD9dMyVZUcKSRZ2hftMLZFlUGRenaBNSBZGXDkYmya6nlFDgdahC5gsay5Z6uTmbyEQHD7W9hxUpgqJYlvxENq3YDAImOTXUVbi&X-Amz-Signature=8bd51c2cd16593672506488de552e3e2b7951f9e5c286adf84f7af5c13154e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVIAMIS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCosbi9Dgt37WtmKS6x3YmpKDr5XAidvxHIXga12BH8LwIgJ1e1myfR28xs16%2FgzGLUdtPknISQf2u7zuEWlIVn9vQqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfFHu2O8Rb1Rh9e5yrcA0WaV9ieR5GeQBi0RrdInzJKveTSSNzOfA9fhuBh1BBC6uNJ1XgF00Ts7zvKBVHSfDypLEJZU01%2FsWbYJnDrvru0rkYGnhrlu5Jevb5nAEM09TGOo%2BqMSMsXcLx1RD6MFhSzU3d31kIfoCbnuofZmfsWBlq6T5mOFVwKZqT0nRYH5kx%2Bhw601X89JbYlO9YxgnY4Geq8mVfpNEFcJ9t3ErhvgKIknpgVy4za8TeVyfZRe3DUHOw8dKYytsYbx4K6bb07al2KDWFGh4VCmYC1tDTs8XhQGFZUKweDz5eOXDdO5C1dIZmCmYbctBNwIaUlDQ2WDXAHpbWmVJaa8wSdjPZiWfDjKZrOKzuxQjsvVEwdHlqdawm8liwMvADlXnDaBXUkI0%2BIP1Tn%2BTYYxPgrf1bvkQkTTzvoXENJnMRlCP%2FMLcvlCbl3agv5dP3fiwaEhMdH4wytdg%2FVdTfjXYzzU%2BziDyOLFSQYw6V5vGCC%2BLJxHTooFXTAjk8IC0CXhpx2B1NDHMjgrwMEmpw4ieGdkEtlB1pQhqRAVYMS0VAdgIxU%2BpwgfmEP6M5bhAJ%2B0ySLG%2BFw0oOnvEDgqkLBsYcUsVafoonzqVg%2B6pr%2FYefXT9UKC0tZSmAuyNwqyP%2FZMKODxsMGOqUBZ%2FOXI6wH9Zb2K9PUXkMmVZcXjZMjinRmu6N2mA%2BZcB5aWvYaWge227mpr96Mz2HbzednTdayMjnwJBuMy42ybrHKzXntQojaH4ubn%2F1ug8BQ1wLPxLpD9eqnVwD9dMyVZUcKSRZ2hftMLZFlUGRenaBNSBZGXDkYmya6nlFDgdahC5gsay5Z6uTmbyEQHD7W9hxUpgqJYlvxENq3YDAImOTXUVbi&X-Amz-Signature=2625e187d83ef9abe6b15650a0271fda34f53802694786043e04c326677239f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVIAMIS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCosbi9Dgt37WtmKS6x3YmpKDr5XAidvxHIXga12BH8LwIgJ1e1myfR28xs16%2FgzGLUdtPknISQf2u7zuEWlIVn9vQqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfFHu2O8Rb1Rh9e5yrcA0WaV9ieR5GeQBi0RrdInzJKveTSSNzOfA9fhuBh1BBC6uNJ1XgF00Ts7zvKBVHSfDypLEJZU01%2FsWbYJnDrvru0rkYGnhrlu5Jevb5nAEM09TGOo%2BqMSMsXcLx1RD6MFhSzU3d31kIfoCbnuofZmfsWBlq6T5mOFVwKZqT0nRYH5kx%2Bhw601X89JbYlO9YxgnY4Geq8mVfpNEFcJ9t3ErhvgKIknpgVy4za8TeVyfZRe3DUHOw8dKYytsYbx4K6bb07al2KDWFGh4VCmYC1tDTs8XhQGFZUKweDz5eOXDdO5C1dIZmCmYbctBNwIaUlDQ2WDXAHpbWmVJaa8wSdjPZiWfDjKZrOKzuxQjsvVEwdHlqdawm8liwMvADlXnDaBXUkI0%2BIP1Tn%2BTYYxPgrf1bvkQkTTzvoXENJnMRlCP%2FMLcvlCbl3agv5dP3fiwaEhMdH4wytdg%2FVdTfjXYzzU%2BziDyOLFSQYw6V5vGCC%2BLJxHTooFXTAjk8IC0CXhpx2B1NDHMjgrwMEmpw4ieGdkEtlB1pQhqRAVYMS0VAdgIxU%2BpwgfmEP6M5bhAJ%2B0ySLG%2BFw0oOnvEDgqkLBsYcUsVafoonzqVg%2B6pr%2FYefXT9UKC0tZSmAuyNwqyP%2FZMKODxsMGOqUBZ%2FOXI6wH9Zb2K9PUXkMmVZcXjZMjinRmu6N2mA%2BZcB5aWvYaWge227mpr96Mz2HbzednTdayMjnwJBuMy42ybrHKzXntQojaH4ubn%2F1ug8BQ1wLPxLpD9eqnVwD9dMyVZUcKSRZ2hftMLZFlUGRenaBNSBZGXDkYmya6nlFDgdahC5gsay5Z6uTmbyEQHD7W9hxUpgqJYlvxENq3YDAImOTXUVbi&X-Amz-Signature=678e7b3366e03e92c0d671d74cd308534bc7844af02fb6cbdc5097f69547a471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVIAMIS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCosbi9Dgt37WtmKS6x3YmpKDr5XAidvxHIXga12BH8LwIgJ1e1myfR28xs16%2FgzGLUdtPknISQf2u7zuEWlIVn9vQqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfFHu2O8Rb1Rh9e5yrcA0WaV9ieR5GeQBi0RrdInzJKveTSSNzOfA9fhuBh1BBC6uNJ1XgF00Ts7zvKBVHSfDypLEJZU01%2FsWbYJnDrvru0rkYGnhrlu5Jevb5nAEM09TGOo%2BqMSMsXcLx1RD6MFhSzU3d31kIfoCbnuofZmfsWBlq6T5mOFVwKZqT0nRYH5kx%2Bhw601X89JbYlO9YxgnY4Geq8mVfpNEFcJ9t3ErhvgKIknpgVy4za8TeVyfZRe3DUHOw8dKYytsYbx4K6bb07al2KDWFGh4VCmYC1tDTs8XhQGFZUKweDz5eOXDdO5C1dIZmCmYbctBNwIaUlDQ2WDXAHpbWmVJaa8wSdjPZiWfDjKZrOKzuxQjsvVEwdHlqdawm8liwMvADlXnDaBXUkI0%2BIP1Tn%2BTYYxPgrf1bvkQkTTzvoXENJnMRlCP%2FMLcvlCbl3agv5dP3fiwaEhMdH4wytdg%2FVdTfjXYzzU%2BziDyOLFSQYw6V5vGCC%2BLJxHTooFXTAjk8IC0CXhpx2B1NDHMjgrwMEmpw4ieGdkEtlB1pQhqRAVYMS0VAdgIxU%2BpwgfmEP6M5bhAJ%2B0ySLG%2BFw0oOnvEDgqkLBsYcUsVafoonzqVg%2B6pr%2FYefXT9UKC0tZSmAuyNwqyP%2FZMKODxsMGOqUBZ%2FOXI6wH9Zb2K9PUXkMmVZcXjZMjinRmu6N2mA%2BZcB5aWvYaWge227mpr96Mz2HbzednTdayMjnwJBuMy42ybrHKzXntQojaH4ubn%2F1ug8BQ1wLPxLpD9eqnVwD9dMyVZUcKSRZ2hftMLZFlUGRenaBNSBZGXDkYmya6nlFDgdahC5gsay5Z6uTmbyEQHD7W9hxUpgqJYlvxENq3YDAImOTXUVbi&X-Amz-Signature=71a4b531bef981e245038a53872e96154bd96681717d8fb092352ddd800913ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
