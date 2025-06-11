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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQC6KOW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHBvCIeKD7sg526syrzrDPrVlozQKmPBWcVLgwt7GueQIgXjYAK6GL%2FNlzGN6yEbHZg7zs8HmhrmjEMq%2FkM4UkfjAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBb5lGWhZsOPBidFGSrcA7aslpc4Mb5RUwF%2BAkouW5%2Fa24UswiT3BXI3NmbLGuCQR6u2BO4MVRQoiALbqlzIHSG71%2FpiM1zPRqq9JHFm2epxK3qQUW94Wgz%2BOteCq675ivau4vIA0eO%2BHnSziyTrPLa8Toe%2BYeCXq7lFJOGbK9zzheipLbsMC0T9kWRwAVrsmlouR9W3T3ruOLb2Tj3DyX9r2LZDw7Sqs50JVZq8AmCaiMI6lTXPuL%2FItog%2FoSr3kIxGW8jfpEFPc%2Ba7uRz5QwVR1GPZHTfMa2oPPitnh%2BlaaUJSREvibOXy5XtrC9kGPqri1jWokRfR1ZpHItvuq%2FDp0d0lvr%2FyL7MSPLNj%2FxzFoeRBrkPDHSX%2BkEldlKQFiANQjcXnWR1v78co8PJq%2FxfONTGCelqpdYlmET%2B4C1zlC00Yng5OJOIhJZ7dDdXKptuE0aWwDzIHJu76svzPma5DZXMFgowKAUezRg7bK0YtkDOIVp2QGr%2Fn22p3hDW%2FNC%2BRLXb2rndtCjbRcNN0212S%2Fw7y031wIHAZP89F%2BG%2FNG03xHZwY6S3sj70Wmv%2FgtnIBUNzuFrVn4z68NwParWUY4Lj2hxLTN5kLvFBJSFRhBu%2FoAy8jZ29l%2F5GFih6XCFXst63z3sfjazn0ML%2FJpMIGOqUBMudDpH72ICeAqHS2dP6DjW3EH3RcGwPR92HpWZ%2BkO9W%2FMqrWxiQ1dajXEhewBc1l76Fu25%2Fwz3naB30280VsMC4JSjeUyU%2BJynFHfYqjK1tJUc2qqPYiuhPjVS2lN%2BeykfhXfIqEF6CtUkJQNw%2FtkEIed5dgbDi5UBX5s%2B6%2BdWT8tdniTFHnfaMkOCxsyoBqe5GcmN%2FqdIdRjHPZdjgEX02PkcUI&X-Amz-Signature=bd1815abb2d1bcaa511660a9aa93bfbb1a53208da4f4f2ee26a90a55b04313bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQC6KOW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHBvCIeKD7sg526syrzrDPrVlozQKmPBWcVLgwt7GueQIgXjYAK6GL%2FNlzGN6yEbHZg7zs8HmhrmjEMq%2FkM4UkfjAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBb5lGWhZsOPBidFGSrcA7aslpc4Mb5RUwF%2BAkouW5%2Fa24UswiT3BXI3NmbLGuCQR6u2BO4MVRQoiALbqlzIHSG71%2FpiM1zPRqq9JHFm2epxK3qQUW94Wgz%2BOteCq675ivau4vIA0eO%2BHnSziyTrPLa8Toe%2BYeCXq7lFJOGbK9zzheipLbsMC0T9kWRwAVrsmlouR9W3T3ruOLb2Tj3DyX9r2LZDw7Sqs50JVZq8AmCaiMI6lTXPuL%2FItog%2FoSr3kIxGW8jfpEFPc%2Ba7uRz5QwVR1GPZHTfMa2oPPitnh%2BlaaUJSREvibOXy5XtrC9kGPqri1jWokRfR1ZpHItvuq%2FDp0d0lvr%2FyL7MSPLNj%2FxzFoeRBrkPDHSX%2BkEldlKQFiANQjcXnWR1v78co8PJq%2FxfONTGCelqpdYlmET%2B4C1zlC00Yng5OJOIhJZ7dDdXKptuE0aWwDzIHJu76svzPma5DZXMFgowKAUezRg7bK0YtkDOIVp2QGr%2Fn22p3hDW%2FNC%2BRLXb2rndtCjbRcNN0212S%2Fw7y031wIHAZP89F%2BG%2FNG03xHZwY6S3sj70Wmv%2FgtnIBUNzuFrVn4z68NwParWUY4Lj2hxLTN5kLvFBJSFRhBu%2FoAy8jZ29l%2F5GFih6XCFXst63z3sfjazn0ML%2FJpMIGOqUBMudDpH72ICeAqHS2dP6DjW3EH3RcGwPR92HpWZ%2BkO9W%2FMqrWxiQ1dajXEhewBc1l76Fu25%2Fwz3naB30280VsMC4JSjeUyU%2BJynFHfYqjK1tJUc2qqPYiuhPjVS2lN%2BeykfhXfIqEF6CtUkJQNw%2FtkEIed5dgbDi5UBX5s%2B6%2BdWT8tdniTFHnfaMkOCxsyoBqe5GcmN%2FqdIdRjHPZdjgEX02PkcUI&X-Amz-Signature=301b2d3016f14e84c8f8d654541332aeb864ac1f267ae408a13c71cbd7c8f726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQC6KOW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHBvCIeKD7sg526syrzrDPrVlozQKmPBWcVLgwt7GueQIgXjYAK6GL%2FNlzGN6yEbHZg7zs8HmhrmjEMq%2FkM4UkfjAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBb5lGWhZsOPBidFGSrcA7aslpc4Mb5RUwF%2BAkouW5%2Fa24UswiT3BXI3NmbLGuCQR6u2BO4MVRQoiALbqlzIHSG71%2FpiM1zPRqq9JHFm2epxK3qQUW94Wgz%2BOteCq675ivau4vIA0eO%2BHnSziyTrPLa8Toe%2BYeCXq7lFJOGbK9zzheipLbsMC0T9kWRwAVrsmlouR9W3T3ruOLb2Tj3DyX9r2LZDw7Sqs50JVZq8AmCaiMI6lTXPuL%2FItog%2FoSr3kIxGW8jfpEFPc%2Ba7uRz5QwVR1GPZHTfMa2oPPitnh%2BlaaUJSREvibOXy5XtrC9kGPqri1jWokRfR1ZpHItvuq%2FDp0d0lvr%2FyL7MSPLNj%2FxzFoeRBrkPDHSX%2BkEldlKQFiANQjcXnWR1v78co8PJq%2FxfONTGCelqpdYlmET%2B4C1zlC00Yng5OJOIhJZ7dDdXKptuE0aWwDzIHJu76svzPma5DZXMFgowKAUezRg7bK0YtkDOIVp2QGr%2Fn22p3hDW%2FNC%2BRLXb2rndtCjbRcNN0212S%2Fw7y031wIHAZP89F%2BG%2FNG03xHZwY6S3sj70Wmv%2FgtnIBUNzuFrVn4z68NwParWUY4Lj2hxLTN5kLvFBJSFRhBu%2FoAy8jZ29l%2F5GFih6XCFXst63z3sfjazn0ML%2FJpMIGOqUBMudDpH72ICeAqHS2dP6DjW3EH3RcGwPR92HpWZ%2BkO9W%2FMqrWxiQ1dajXEhewBc1l76Fu25%2Fwz3naB30280VsMC4JSjeUyU%2BJynFHfYqjK1tJUc2qqPYiuhPjVS2lN%2BeykfhXfIqEF6CtUkJQNw%2FtkEIed5dgbDi5UBX5s%2B6%2BdWT8tdniTFHnfaMkOCxsyoBqe5GcmN%2FqdIdRjHPZdjgEX02PkcUI&X-Amz-Signature=f991996a1e680a11e1f5b8296124177e85e8a52843cf441ca1309cf1fdbf337c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQC6KOW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHBvCIeKD7sg526syrzrDPrVlozQKmPBWcVLgwt7GueQIgXjYAK6GL%2FNlzGN6yEbHZg7zs8HmhrmjEMq%2FkM4UkfjAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBb5lGWhZsOPBidFGSrcA7aslpc4Mb5RUwF%2BAkouW5%2Fa24UswiT3BXI3NmbLGuCQR6u2BO4MVRQoiALbqlzIHSG71%2FpiM1zPRqq9JHFm2epxK3qQUW94Wgz%2BOteCq675ivau4vIA0eO%2BHnSziyTrPLa8Toe%2BYeCXq7lFJOGbK9zzheipLbsMC0T9kWRwAVrsmlouR9W3T3ruOLb2Tj3DyX9r2LZDw7Sqs50JVZq8AmCaiMI6lTXPuL%2FItog%2FoSr3kIxGW8jfpEFPc%2Ba7uRz5QwVR1GPZHTfMa2oPPitnh%2BlaaUJSREvibOXy5XtrC9kGPqri1jWokRfR1ZpHItvuq%2FDp0d0lvr%2FyL7MSPLNj%2FxzFoeRBrkPDHSX%2BkEldlKQFiANQjcXnWR1v78co8PJq%2FxfONTGCelqpdYlmET%2B4C1zlC00Yng5OJOIhJZ7dDdXKptuE0aWwDzIHJu76svzPma5DZXMFgowKAUezRg7bK0YtkDOIVp2QGr%2Fn22p3hDW%2FNC%2BRLXb2rndtCjbRcNN0212S%2Fw7y031wIHAZP89F%2BG%2FNG03xHZwY6S3sj70Wmv%2FgtnIBUNzuFrVn4z68NwParWUY4Lj2hxLTN5kLvFBJSFRhBu%2FoAy8jZ29l%2F5GFih6XCFXst63z3sfjazn0ML%2FJpMIGOqUBMudDpH72ICeAqHS2dP6DjW3EH3RcGwPR92HpWZ%2BkO9W%2FMqrWxiQ1dajXEhewBc1l76Fu25%2Fwz3naB30280VsMC4JSjeUyU%2BJynFHfYqjK1tJUc2qqPYiuhPjVS2lN%2BeykfhXfIqEF6CtUkJQNw%2FtkEIed5dgbDi5UBX5s%2B6%2BdWT8tdniTFHnfaMkOCxsyoBqe5GcmN%2FqdIdRjHPZdjgEX02PkcUI&X-Amz-Signature=44a23066cfffce77bf56c54aa5be47ffde951a0fcd917bafd1659d9d7173caf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQC6KOW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHBvCIeKD7sg526syrzrDPrVlozQKmPBWcVLgwt7GueQIgXjYAK6GL%2FNlzGN6yEbHZg7zs8HmhrmjEMq%2FkM4UkfjAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBb5lGWhZsOPBidFGSrcA7aslpc4Mb5RUwF%2BAkouW5%2Fa24UswiT3BXI3NmbLGuCQR6u2BO4MVRQoiALbqlzIHSG71%2FpiM1zPRqq9JHFm2epxK3qQUW94Wgz%2BOteCq675ivau4vIA0eO%2BHnSziyTrPLa8Toe%2BYeCXq7lFJOGbK9zzheipLbsMC0T9kWRwAVrsmlouR9W3T3ruOLb2Tj3DyX9r2LZDw7Sqs50JVZq8AmCaiMI6lTXPuL%2FItog%2FoSr3kIxGW8jfpEFPc%2Ba7uRz5QwVR1GPZHTfMa2oPPitnh%2BlaaUJSREvibOXy5XtrC9kGPqri1jWokRfR1ZpHItvuq%2FDp0d0lvr%2FyL7MSPLNj%2FxzFoeRBrkPDHSX%2BkEldlKQFiANQjcXnWR1v78co8PJq%2FxfONTGCelqpdYlmET%2B4C1zlC00Yng5OJOIhJZ7dDdXKptuE0aWwDzIHJu76svzPma5DZXMFgowKAUezRg7bK0YtkDOIVp2QGr%2Fn22p3hDW%2FNC%2BRLXb2rndtCjbRcNN0212S%2Fw7y031wIHAZP89F%2BG%2FNG03xHZwY6S3sj70Wmv%2FgtnIBUNzuFrVn4z68NwParWUY4Lj2hxLTN5kLvFBJSFRhBu%2FoAy8jZ29l%2F5GFih6XCFXst63z3sfjazn0ML%2FJpMIGOqUBMudDpH72ICeAqHS2dP6DjW3EH3RcGwPR92HpWZ%2BkO9W%2FMqrWxiQ1dajXEhewBc1l76Fu25%2Fwz3naB30280VsMC4JSjeUyU%2BJynFHfYqjK1tJUc2qqPYiuhPjVS2lN%2BeykfhXfIqEF6CtUkJQNw%2FtkEIed5dgbDi5UBX5s%2B6%2BdWT8tdniTFHnfaMkOCxsyoBqe5GcmN%2FqdIdRjHPZdjgEX02PkcUI&X-Amz-Signature=bbb6fc75e599a2ccaf88e1ee37b143e85401bc57b48b54287efaddd3724bc9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQC6KOW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHBvCIeKD7sg526syrzrDPrVlozQKmPBWcVLgwt7GueQIgXjYAK6GL%2FNlzGN6yEbHZg7zs8HmhrmjEMq%2FkM4UkfjAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBb5lGWhZsOPBidFGSrcA7aslpc4Mb5RUwF%2BAkouW5%2Fa24UswiT3BXI3NmbLGuCQR6u2BO4MVRQoiALbqlzIHSG71%2FpiM1zPRqq9JHFm2epxK3qQUW94Wgz%2BOteCq675ivau4vIA0eO%2BHnSziyTrPLa8Toe%2BYeCXq7lFJOGbK9zzheipLbsMC0T9kWRwAVrsmlouR9W3T3ruOLb2Tj3DyX9r2LZDw7Sqs50JVZq8AmCaiMI6lTXPuL%2FItog%2FoSr3kIxGW8jfpEFPc%2Ba7uRz5QwVR1GPZHTfMa2oPPitnh%2BlaaUJSREvibOXy5XtrC9kGPqri1jWokRfR1ZpHItvuq%2FDp0d0lvr%2FyL7MSPLNj%2FxzFoeRBrkPDHSX%2BkEldlKQFiANQjcXnWR1v78co8PJq%2FxfONTGCelqpdYlmET%2B4C1zlC00Yng5OJOIhJZ7dDdXKptuE0aWwDzIHJu76svzPma5DZXMFgowKAUezRg7bK0YtkDOIVp2QGr%2Fn22p3hDW%2FNC%2BRLXb2rndtCjbRcNN0212S%2Fw7y031wIHAZP89F%2BG%2FNG03xHZwY6S3sj70Wmv%2FgtnIBUNzuFrVn4z68NwParWUY4Lj2hxLTN5kLvFBJSFRhBu%2FoAy8jZ29l%2F5GFih6XCFXst63z3sfjazn0ML%2FJpMIGOqUBMudDpH72ICeAqHS2dP6DjW3EH3RcGwPR92HpWZ%2BkO9W%2FMqrWxiQ1dajXEhewBc1l76Fu25%2Fwz3naB30280VsMC4JSjeUyU%2BJynFHfYqjK1tJUc2qqPYiuhPjVS2lN%2BeykfhXfIqEF6CtUkJQNw%2FtkEIed5dgbDi5UBX5s%2B6%2BdWT8tdniTFHnfaMkOCxsyoBqe5GcmN%2FqdIdRjHPZdjgEX02PkcUI&X-Amz-Signature=fdcd60785ebe48ae7a323c13c3d144223df49bdbe07768fa05c5a35cbf697f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQC6KOW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHBvCIeKD7sg526syrzrDPrVlozQKmPBWcVLgwt7GueQIgXjYAK6GL%2FNlzGN6yEbHZg7zs8HmhrmjEMq%2FkM4UkfjAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBb5lGWhZsOPBidFGSrcA7aslpc4Mb5RUwF%2BAkouW5%2Fa24UswiT3BXI3NmbLGuCQR6u2BO4MVRQoiALbqlzIHSG71%2FpiM1zPRqq9JHFm2epxK3qQUW94Wgz%2BOteCq675ivau4vIA0eO%2BHnSziyTrPLa8Toe%2BYeCXq7lFJOGbK9zzheipLbsMC0T9kWRwAVrsmlouR9W3T3ruOLb2Tj3DyX9r2LZDw7Sqs50JVZq8AmCaiMI6lTXPuL%2FItog%2FoSr3kIxGW8jfpEFPc%2Ba7uRz5QwVR1GPZHTfMa2oPPitnh%2BlaaUJSREvibOXy5XtrC9kGPqri1jWokRfR1ZpHItvuq%2FDp0d0lvr%2FyL7MSPLNj%2FxzFoeRBrkPDHSX%2BkEldlKQFiANQjcXnWR1v78co8PJq%2FxfONTGCelqpdYlmET%2B4C1zlC00Yng5OJOIhJZ7dDdXKptuE0aWwDzIHJu76svzPma5DZXMFgowKAUezRg7bK0YtkDOIVp2QGr%2Fn22p3hDW%2FNC%2BRLXb2rndtCjbRcNN0212S%2Fw7y031wIHAZP89F%2BG%2FNG03xHZwY6S3sj70Wmv%2FgtnIBUNzuFrVn4z68NwParWUY4Lj2hxLTN5kLvFBJSFRhBu%2FoAy8jZ29l%2F5GFih6XCFXst63z3sfjazn0ML%2FJpMIGOqUBMudDpH72ICeAqHS2dP6DjW3EH3RcGwPR92HpWZ%2BkO9W%2FMqrWxiQ1dajXEhewBc1l76Fu25%2Fwz3naB30280VsMC4JSjeUyU%2BJynFHfYqjK1tJUc2qqPYiuhPjVS2lN%2BeykfhXfIqEF6CtUkJQNw%2FtkEIed5dgbDi5UBX5s%2B6%2BdWT8tdniTFHnfaMkOCxsyoBqe5GcmN%2FqdIdRjHPZdjgEX02PkcUI&X-Amz-Signature=af96bdcee568a14473df6ac2fa6db9721cbe091b059cab192b7b3fc689176958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
