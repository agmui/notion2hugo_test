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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JRFFTW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQC7I2kc%2BdbOCpiMqJhv%2Bar17KxcG67BcDLKU%2BkjjlbdyQIgIK64zn6y2e7OQTZlcu94nxUu43LbIIrWIxZiB6Pngcsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIoXsUeUepx05cl1hyrcA6mRN7JljS6YxaaHKrt4miH7E0EV67ubnNwlnWQSc5vT0oEltC4TJ26JCpUgWo8jgsoiQ9B0nn0TWSz%2FDJ23qGd6TMDryeaNMWaqFXOSjUtgX1snEa7IT%2FvSR3QFqv5yr7pHOMfbHqhBXyEdTk7jd%2Frpq07l%2BuGi8a9G73b%2FgGLpCwYSsYqN9YYtYRUyIxZMn6BLpZVOzZMFxBHLhigFZ1JPpmRoGgW%2BLD%2F89QFvh9%2BbiRX%2FqZkbGFzVD5rfQOv%2FLSC6G%2Bk6nbnFVYLe8fSxmpjCGK6fPFG5xSKbbuGML1PtSjVVGJO1ZzhLX30iZKBzDj7pichLAsz4BLxreTC0Fp%2B6Kf1jUGoKi%2BCk5vfsZrnGj282JbXr2d4oDMRuw9sa%2Ft3Gf%2FGMJyzclqBp58eMyDhAv7L8NV9SC0%2Fg6Nw3vuWXe7SW%2BfJjhrSzyB%2FvGnF5F0XIKc%2BwJ%2FbmbaWUetI0%2FRx39S4Uhf72Df%2Bh3BmlYQH6HLG1f%2F8%2FYNWFLwz32RVCYIU5hr9yh1AKKtD2C%2BBfEPXB3cemT%2B1ByG%2BSyabrbnqDkcnz4wgf%2FCVZpNP2iC24yhfqZUiAfRfCFOAkN%2BXUKY7451gNvumu2Scz%2BeqEickwhUr%2Fr77lRLZ9aUzcMOWkp8MGOqUB0R4569jF%2F2mwjbXx%2FHkqzX2mt6jqF0df9O1kztNSLjJoTUZ9ko2mJAnsyh8BEQd%2BGFOZKH8j%2BxCOEmHLbaA9a8hkunu7p3O0mt4MoIOd%2BjhBz0RU50IK34KZsuFw8fdCYlS6tHu1i%2FKFOzDVIQ0%2FEMCFjQZm06Tm1Hh3xmN1%2FxmQABQTaXQaVLLWIgTYaBSv6n9OeAdW0pFqMXduhLlJOIevqJW1&X-Amz-Signature=c06a3d4e32aa4c18476fd6195cbb091317e62eb2a4274eb424c7cf867ad0960d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JRFFTW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQC7I2kc%2BdbOCpiMqJhv%2Bar17KxcG67BcDLKU%2BkjjlbdyQIgIK64zn6y2e7OQTZlcu94nxUu43LbIIrWIxZiB6Pngcsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIoXsUeUepx05cl1hyrcA6mRN7JljS6YxaaHKrt4miH7E0EV67ubnNwlnWQSc5vT0oEltC4TJ26JCpUgWo8jgsoiQ9B0nn0TWSz%2FDJ23qGd6TMDryeaNMWaqFXOSjUtgX1snEa7IT%2FvSR3QFqv5yr7pHOMfbHqhBXyEdTk7jd%2Frpq07l%2BuGi8a9G73b%2FgGLpCwYSsYqN9YYtYRUyIxZMn6BLpZVOzZMFxBHLhigFZ1JPpmRoGgW%2BLD%2F89QFvh9%2BbiRX%2FqZkbGFzVD5rfQOv%2FLSC6G%2Bk6nbnFVYLe8fSxmpjCGK6fPFG5xSKbbuGML1PtSjVVGJO1ZzhLX30iZKBzDj7pichLAsz4BLxreTC0Fp%2B6Kf1jUGoKi%2BCk5vfsZrnGj282JbXr2d4oDMRuw9sa%2Ft3Gf%2FGMJyzclqBp58eMyDhAv7L8NV9SC0%2Fg6Nw3vuWXe7SW%2BfJjhrSzyB%2FvGnF5F0XIKc%2BwJ%2FbmbaWUetI0%2FRx39S4Uhf72Df%2Bh3BmlYQH6HLG1f%2F8%2FYNWFLwz32RVCYIU5hr9yh1AKKtD2C%2BBfEPXB3cemT%2B1ByG%2BSyabrbnqDkcnz4wgf%2FCVZpNP2iC24yhfqZUiAfRfCFOAkN%2BXUKY7451gNvumu2Scz%2BeqEickwhUr%2Fr77lRLZ9aUzcMOWkp8MGOqUB0R4569jF%2F2mwjbXx%2FHkqzX2mt6jqF0df9O1kztNSLjJoTUZ9ko2mJAnsyh8BEQd%2BGFOZKH8j%2BxCOEmHLbaA9a8hkunu7p3O0mt4MoIOd%2BjhBz0RU50IK34KZsuFw8fdCYlS6tHu1i%2FKFOzDVIQ0%2FEMCFjQZm06Tm1Hh3xmN1%2FxmQABQTaXQaVLLWIgTYaBSv6n9OeAdW0pFqMXduhLlJOIevqJW1&X-Amz-Signature=eddb8a77c2cdc12824b37063ad07c08fbbf0e8c5992c8693e5a8f576371a8f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JRFFTW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQC7I2kc%2BdbOCpiMqJhv%2Bar17KxcG67BcDLKU%2BkjjlbdyQIgIK64zn6y2e7OQTZlcu94nxUu43LbIIrWIxZiB6Pngcsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIoXsUeUepx05cl1hyrcA6mRN7JljS6YxaaHKrt4miH7E0EV67ubnNwlnWQSc5vT0oEltC4TJ26JCpUgWo8jgsoiQ9B0nn0TWSz%2FDJ23qGd6TMDryeaNMWaqFXOSjUtgX1snEa7IT%2FvSR3QFqv5yr7pHOMfbHqhBXyEdTk7jd%2Frpq07l%2BuGi8a9G73b%2FgGLpCwYSsYqN9YYtYRUyIxZMn6BLpZVOzZMFxBHLhigFZ1JPpmRoGgW%2BLD%2F89QFvh9%2BbiRX%2FqZkbGFzVD5rfQOv%2FLSC6G%2Bk6nbnFVYLe8fSxmpjCGK6fPFG5xSKbbuGML1PtSjVVGJO1ZzhLX30iZKBzDj7pichLAsz4BLxreTC0Fp%2B6Kf1jUGoKi%2BCk5vfsZrnGj282JbXr2d4oDMRuw9sa%2Ft3Gf%2FGMJyzclqBp58eMyDhAv7L8NV9SC0%2Fg6Nw3vuWXe7SW%2BfJjhrSzyB%2FvGnF5F0XIKc%2BwJ%2FbmbaWUetI0%2FRx39S4Uhf72Df%2Bh3BmlYQH6HLG1f%2F8%2FYNWFLwz32RVCYIU5hr9yh1AKKtD2C%2BBfEPXB3cemT%2B1ByG%2BSyabrbnqDkcnz4wgf%2FCVZpNP2iC24yhfqZUiAfRfCFOAkN%2BXUKY7451gNvumu2Scz%2BeqEickwhUr%2Fr77lRLZ9aUzcMOWkp8MGOqUB0R4569jF%2F2mwjbXx%2FHkqzX2mt6jqF0df9O1kztNSLjJoTUZ9ko2mJAnsyh8BEQd%2BGFOZKH8j%2BxCOEmHLbaA9a8hkunu7p3O0mt4MoIOd%2BjhBz0RU50IK34KZsuFw8fdCYlS6tHu1i%2FKFOzDVIQ0%2FEMCFjQZm06Tm1Hh3xmN1%2FxmQABQTaXQaVLLWIgTYaBSv6n9OeAdW0pFqMXduhLlJOIevqJW1&X-Amz-Signature=1645d63955ad9723863b602116bd1c71628eb229abf42768e032121d02df6d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JRFFTW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQC7I2kc%2BdbOCpiMqJhv%2Bar17KxcG67BcDLKU%2BkjjlbdyQIgIK64zn6y2e7OQTZlcu94nxUu43LbIIrWIxZiB6Pngcsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIoXsUeUepx05cl1hyrcA6mRN7JljS6YxaaHKrt4miH7E0EV67ubnNwlnWQSc5vT0oEltC4TJ26JCpUgWo8jgsoiQ9B0nn0TWSz%2FDJ23qGd6TMDryeaNMWaqFXOSjUtgX1snEa7IT%2FvSR3QFqv5yr7pHOMfbHqhBXyEdTk7jd%2Frpq07l%2BuGi8a9G73b%2FgGLpCwYSsYqN9YYtYRUyIxZMn6BLpZVOzZMFxBHLhigFZ1JPpmRoGgW%2BLD%2F89QFvh9%2BbiRX%2FqZkbGFzVD5rfQOv%2FLSC6G%2Bk6nbnFVYLe8fSxmpjCGK6fPFG5xSKbbuGML1PtSjVVGJO1ZzhLX30iZKBzDj7pichLAsz4BLxreTC0Fp%2B6Kf1jUGoKi%2BCk5vfsZrnGj282JbXr2d4oDMRuw9sa%2Ft3Gf%2FGMJyzclqBp58eMyDhAv7L8NV9SC0%2Fg6Nw3vuWXe7SW%2BfJjhrSzyB%2FvGnF5F0XIKc%2BwJ%2FbmbaWUetI0%2FRx39S4Uhf72Df%2Bh3BmlYQH6HLG1f%2F8%2FYNWFLwz32RVCYIU5hr9yh1AKKtD2C%2BBfEPXB3cemT%2B1ByG%2BSyabrbnqDkcnz4wgf%2FCVZpNP2iC24yhfqZUiAfRfCFOAkN%2BXUKY7451gNvumu2Scz%2BeqEickwhUr%2Fr77lRLZ9aUzcMOWkp8MGOqUB0R4569jF%2F2mwjbXx%2FHkqzX2mt6jqF0df9O1kztNSLjJoTUZ9ko2mJAnsyh8BEQd%2BGFOZKH8j%2BxCOEmHLbaA9a8hkunu7p3O0mt4MoIOd%2BjhBz0RU50IK34KZsuFw8fdCYlS6tHu1i%2FKFOzDVIQ0%2FEMCFjQZm06Tm1Hh3xmN1%2FxmQABQTaXQaVLLWIgTYaBSv6n9OeAdW0pFqMXduhLlJOIevqJW1&X-Amz-Signature=85d22d86513c2be049b560e385f5c6e87184375b1db0420518c2255227c809e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JRFFTW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQC7I2kc%2BdbOCpiMqJhv%2Bar17KxcG67BcDLKU%2BkjjlbdyQIgIK64zn6y2e7OQTZlcu94nxUu43LbIIrWIxZiB6Pngcsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIoXsUeUepx05cl1hyrcA6mRN7JljS6YxaaHKrt4miH7E0EV67ubnNwlnWQSc5vT0oEltC4TJ26JCpUgWo8jgsoiQ9B0nn0TWSz%2FDJ23qGd6TMDryeaNMWaqFXOSjUtgX1snEa7IT%2FvSR3QFqv5yr7pHOMfbHqhBXyEdTk7jd%2Frpq07l%2BuGi8a9G73b%2FgGLpCwYSsYqN9YYtYRUyIxZMn6BLpZVOzZMFxBHLhigFZ1JPpmRoGgW%2BLD%2F89QFvh9%2BbiRX%2FqZkbGFzVD5rfQOv%2FLSC6G%2Bk6nbnFVYLe8fSxmpjCGK6fPFG5xSKbbuGML1PtSjVVGJO1ZzhLX30iZKBzDj7pichLAsz4BLxreTC0Fp%2B6Kf1jUGoKi%2BCk5vfsZrnGj282JbXr2d4oDMRuw9sa%2Ft3Gf%2FGMJyzclqBp58eMyDhAv7L8NV9SC0%2Fg6Nw3vuWXe7SW%2BfJjhrSzyB%2FvGnF5F0XIKc%2BwJ%2FbmbaWUetI0%2FRx39S4Uhf72Df%2Bh3BmlYQH6HLG1f%2F8%2FYNWFLwz32RVCYIU5hr9yh1AKKtD2C%2BBfEPXB3cemT%2B1ByG%2BSyabrbnqDkcnz4wgf%2FCVZpNP2iC24yhfqZUiAfRfCFOAkN%2BXUKY7451gNvumu2Scz%2BeqEickwhUr%2Fr77lRLZ9aUzcMOWkp8MGOqUB0R4569jF%2F2mwjbXx%2FHkqzX2mt6jqF0df9O1kztNSLjJoTUZ9ko2mJAnsyh8BEQd%2BGFOZKH8j%2BxCOEmHLbaA9a8hkunu7p3O0mt4MoIOd%2BjhBz0RU50IK34KZsuFw8fdCYlS6tHu1i%2FKFOzDVIQ0%2FEMCFjQZm06Tm1Hh3xmN1%2FxmQABQTaXQaVLLWIgTYaBSv6n9OeAdW0pFqMXduhLlJOIevqJW1&X-Amz-Signature=c2c959441cc828cb9ff2a56bc321800baa2c378cb56222721803503077c4b298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JRFFTW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQC7I2kc%2BdbOCpiMqJhv%2Bar17KxcG67BcDLKU%2BkjjlbdyQIgIK64zn6y2e7OQTZlcu94nxUu43LbIIrWIxZiB6Pngcsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIoXsUeUepx05cl1hyrcA6mRN7JljS6YxaaHKrt4miH7E0EV67ubnNwlnWQSc5vT0oEltC4TJ26JCpUgWo8jgsoiQ9B0nn0TWSz%2FDJ23qGd6TMDryeaNMWaqFXOSjUtgX1snEa7IT%2FvSR3QFqv5yr7pHOMfbHqhBXyEdTk7jd%2Frpq07l%2BuGi8a9G73b%2FgGLpCwYSsYqN9YYtYRUyIxZMn6BLpZVOzZMFxBHLhigFZ1JPpmRoGgW%2BLD%2F89QFvh9%2BbiRX%2FqZkbGFzVD5rfQOv%2FLSC6G%2Bk6nbnFVYLe8fSxmpjCGK6fPFG5xSKbbuGML1PtSjVVGJO1ZzhLX30iZKBzDj7pichLAsz4BLxreTC0Fp%2B6Kf1jUGoKi%2BCk5vfsZrnGj282JbXr2d4oDMRuw9sa%2Ft3Gf%2FGMJyzclqBp58eMyDhAv7L8NV9SC0%2Fg6Nw3vuWXe7SW%2BfJjhrSzyB%2FvGnF5F0XIKc%2BwJ%2FbmbaWUetI0%2FRx39S4Uhf72Df%2Bh3BmlYQH6HLG1f%2F8%2FYNWFLwz32RVCYIU5hr9yh1AKKtD2C%2BBfEPXB3cemT%2B1ByG%2BSyabrbnqDkcnz4wgf%2FCVZpNP2iC24yhfqZUiAfRfCFOAkN%2BXUKY7451gNvumu2Scz%2BeqEickwhUr%2Fr77lRLZ9aUzcMOWkp8MGOqUB0R4569jF%2F2mwjbXx%2FHkqzX2mt6jqF0df9O1kztNSLjJoTUZ9ko2mJAnsyh8BEQd%2BGFOZKH8j%2BxCOEmHLbaA9a8hkunu7p3O0mt4MoIOd%2BjhBz0RU50IK34KZsuFw8fdCYlS6tHu1i%2FKFOzDVIQ0%2FEMCFjQZm06Tm1Hh3xmN1%2FxmQABQTaXQaVLLWIgTYaBSv6n9OeAdW0pFqMXduhLlJOIevqJW1&X-Amz-Signature=d67a3b67a30a9e9a7ee118f884948a784ffff2ffb499e7f935b9cf801ab7b54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JRFFTW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQC7I2kc%2BdbOCpiMqJhv%2Bar17KxcG67BcDLKU%2BkjjlbdyQIgIK64zn6y2e7OQTZlcu94nxUu43LbIIrWIxZiB6Pngcsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIoXsUeUepx05cl1hyrcA6mRN7JljS6YxaaHKrt4miH7E0EV67ubnNwlnWQSc5vT0oEltC4TJ26JCpUgWo8jgsoiQ9B0nn0TWSz%2FDJ23qGd6TMDryeaNMWaqFXOSjUtgX1snEa7IT%2FvSR3QFqv5yr7pHOMfbHqhBXyEdTk7jd%2Frpq07l%2BuGi8a9G73b%2FgGLpCwYSsYqN9YYtYRUyIxZMn6BLpZVOzZMFxBHLhigFZ1JPpmRoGgW%2BLD%2F89QFvh9%2BbiRX%2FqZkbGFzVD5rfQOv%2FLSC6G%2Bk6nbnFVYLe8fSxmpjCGK6fPFG5xSKbbuGML1PtSjVVGJO1ZzhLX30iZKBzDj7pichLAsz4BLxreTC0Fp%2B6Kf1jUGoKi%2BCk5vfsZrnGj282JbXr2d4oDMRuw9sa%2Ft3Gf%2FGMJyzclqBp58eMyDhAv7L8NV9SC0%2Fg6Nw3vuWXe7SW%2BfJjhrSzyB%2FvGnF5F0XIKc%2BwJ%2FbmbaWUetI0%2FRx39S4Uhf72Df%2Bh3BmlYQH6HLG1f%2F8%2FYNWFLwz32RVCYIU5hr9yh1AKKtD2C%2BBfEPXB3cemT%2B1ByG%2BSyabrbnqDkcnz4wgf%2FCVZpNP2iC24yhfqZUiAfRfCFOAkN%2BXUKY7451gNvumu2Scz%2BeqEickwhUr%2Fr77lRLZ9aUzcMOWkp8MGOqUB0R4569jF%2F2mwjbXx%2FHkqzX2mt6jqF0df9O1kztNSLjJoTUZ9ko2mJAnsyh8BEQd%2BGFOZKH8j%2BxCOEmHLbaA9a8hkunu7p3O0mt4MoIOd%2BjhBz0RU50IK34KZsuFw8fdCYlS6tHu1i%2FKFOzDVIQ0%2FEMCFjQZm06Tm1Hh3xmN1%2FxmQABQTaXQaVLLWIgTYaBSv6n9OeAdW0pFqMXduhLlJOIevqJW1&X-Amz-Signature=2ea9c0ea06c5c57a101122001cf0ed9b7e79252fc37ed2c5fea0b0df0abfdd9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
