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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Z7OTRQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1JBiWJiAny4M0eObzwULur9ASbd5tsXRxOhRMJXCgAAiB2G1iZMAFKzZok3lD9oM00Qm1dNM34D%2BsriA3CQY%2BBlyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyce6epobKEyJc6BUKtwDp5w9W1sJBf3PtOUaPC%2B%2BSLSQ0dEBwd2VEesFEtbAypdVPeJ%2FQG0V4fnrGBbSW9nmWzWbcJ2bo2l0HCzop1QT04Ehw7w%2Fgii31Vh4Vd2vFlqKlR4lDY2R4ncp39ViVqeEU0Jn2LSv1f8OUaxo43PrbG1M2u1zN0sNRG0pSLH8knnT8RArgqRXwOpHkgm%2BFWuRaUn2tFsOo%2B%2FfoChEuWZB90pEQC59nZoTCiXE%2Fivigm4vFx5f%2FmUGgEd7gEhSelUtLOCstbTmDPElHG7tUhT96zIcG%2FASui%2B4zY1n7rPWuquYjv2t8qWoAeDxmoqs43beESYUH8DgqjjymOkGT90sRiQ5Vlqawaidtg3eHrrss9vdin1I9FQDo8c32owOHvgGXcbTX6hvV6ex0sPAT01ZeGrcXL3rdJiAZ1RUyRX327An5dDgcs5QeaptUoX4IHDPPRz7K03YxDZ5LhnHsPYzy%2FChFGtdD55P%2FjAtCYAwTDwQRYuTVlV5JZZOsdiHrxl3t1nQ1P5TSeOp7pJ0fhD1TzbyiorOdOAYKH4Nvcg2KCSGuJKFxWDzBE5ixdJZs9VsFo4D6fmlgdtr%2FN8SvSRx0M7akN6brCCUMKM7IfrqoTUf1JOrg%2Bt2LRY3yLEw2I3evQY6pgF540ffCXaCuku1CuYcEtg%2FcrWRs5TnHlrV0yM9v8cp0Ot5ckLwqSoOQfZ8fEHxeEtF5AW5HsKDz%2Bavim5xmxREPDXqSaBWItBptqEocomRUvn%2Fts9%2FwiuGc2OUgvfI9xr9LjuCZlyIJalJFYtXPXVyXv%2FrQSGVCIOOtVlyJDajBhu%2FizvZAtjzk5x1MRtOFuRr1cVv%2B4BUlavlXyeMTgUkEOL5mX5y&X-Amz-Signature=05be2146736dae8c7c886c340e0b7545070ac5f95b303ac3d1e0d4cd9ad9f845&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Z7OTRQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1JBiWJiAny4M0eObzwULur9ASbd5tsXRxOhRMJXCgAAiB2G1iZMAFKzZok3lD9oM00Qm1dNM34D%2BsriA3CQY%2BBlyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyce6epobKEyJc6BUKtwDp5w9W1sJBf3PtOUaPC%2B%2BSLSQ0dEBwd2VEesFEtbAypdVPeJ%2FQG0V4fnrGBbSW9nmWzWbcJ2bo2l0HCzop1QT04Ehw7w%2Fgii31Vh4Vd2vFlqKlR4lDY2R4ncp39ViVqeEU0Jn2LSv1f8OUaxo43PrbG1M2u1zN0sNRG0pSLH8knnT8RArgqRXwOpHkgm%2BFWuRaUn2tFsOo%2B%2FfoChEuWZB90pEQC59nZoTCiXE%2Fivigm4vFx5f%2FmUGgEd7gEhSelUtLOCstbTmDPElHG7tUhT96zIcG%2FASui%2B4zY1n7rPWuquYjv2t8qWoAeDxmoqs43beESYUH8DgqjjymOkGT90sRiQ5Vlqawaidtg3eHrrss9vdin1I9FQDo8c32owOHvgGXcbTX6hvV6ex0sPAT01ZeGrcXL3rdJiAZ1RUyRX327An5dDgcs5QeaptUoX4IHDPPRz7K03YxDZ5LhnHsPYzy%2FChFGtdD55P%2FjAtCYAwTDwQRYuTVlV5JZZOsdiHrxl3t1nQ1P5TSeOp7pJ0fhD1TzbyiorOdOAYKH4Nvcg2KCSGuJKFxWDzBE5ixdJZs9VsFo4D6fmlgdtr%2FN8SvSRx0M7akN6brCCUMKM7IfrqoTUf1JOrg%2Bt2LRY3yLEw2I3evQY6pgF540ffCXaCuku1CuYcEtg%2FcrWRs5TnHlrV0yM9v8cp0Ot5ckLwqSoOQfZ8fEHxeEtF5AW5HsKDz%2Bavim5xmxREPDXqSaBWItBptqEocomRUvn%2Fts9%2FwiuGc2OUgvfI9xr9LjuCZlyIJalJFYtXPXVyXv%2FrQSGVCIOOtVlyJDajBhu%2FizvZAtjzk5x1MRtOFuRr1cVv%2B4BUlavlXyeMTgUkEOL5mX5y&X-Amz-Signature=ed153271ad2b82d1bdc19697bdfd6705e01de7c7c103ee55b6d36e4eee4d4e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Z7OTRQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1JBiWJiAny4M0eObzwULur9ASbd5tsXRxOhRMJXCgAAiB2G1iZMAFKzZok3lD9oM00Qm1dNM34D%2BsriA3CQY%2BBlyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyce6epobKEyJc6BUKtwDp5w9W1sJBf3PtOUaPC%2B%2BSLSQ0dEBwd2VEesFEtbAypdVPeJ%2FQG0V4fnrGBbSW9nmWzWbcJ2bo2l0HCzop1QT04Ehw7w%2Fgii31Vh4Vd2vFlqKlR4lDY2R4ncp39ViVqeEU0Jn2LSv1f8OUaxo43PrbG1M2u1zN0sNRG0pSLH8knnT8RArgqRXwOpHkgm%2BFWuRaUn2tFsOo%2B%2FfoChEuWZB90pEQC59nZoTCiXE%2Fivigm4vFx5f%2FmUGgEd7gEhSelUtLOCstbTmDPElHG7tUhT96zIcG%2FASui%2B4zY1n7rPWuquYjv2t8qWoAeDxmoqs43beESYUH8DgqjjymOkGT90sRiQ5Vlqawaidtg3eHrrss9vdin1I9FQDo8c32owOHvgGXcbTX6hvV6ex0sPAT01ZeGrcXL3rdJiAZ1RUyRX327An5dDgcs5QeaptUoX4IHDPPRz7K03YxDZ5LhnHsPYzy%2FChFGtdD55P%2FjAtCYAwTDwQRYuTVlV5JZZOsdiHrxl3t1nQ1P5TSeOp7pJ0fhD1TzbyiorOdOAYKH4Nvcg2KCSGuJKFxWDzBE5ixdJZs9VsFo4D6fmlgdtr%2FN8SvSRx0M7akN6brCCUMKM7IfrqoTUf1JOrg%2Bt2LRY3yLEw2I3evQY6pgF540ffCXaCuku1CuYcEtg%2FcrWRs5TnHlrV0yM9v8cp0Ot5ckLwqSoOQfZ8fEHxeEtF5AW5HsKDz%2Bavim5xmxREPDXqSaBWItBptqEocomRUvn%2Fts9%2FwiuGc2OUgvfI9xr9LjuCZlyIJalJFYtXPXVyXv%2FrQSGVCIOOtVlyJDajBhu%2FizvZAtjzk5x1MRtOFuRr1cVv%2B4BUlavlXyeMTgUkEOL5mX5y&X-Amz-Signature=29e2fa9da420745322db74686d992f8a9c4310ab00674aba1836859949b2c045&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Z7OTRQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1JBiWJiAny4M0eObzwULur9ASbd5tsXRxOhRMJXCgAAiB2G1iZMAFKzZok3lD9oM00Qm1dNM34D%2BsriA3CQY%2BBlyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyce6epobKEyJc6BUKtwDp5w9W1sJBf3PtOUaPC%2B%2BSLSQ0dEBwd2VEesFEtbAypdVPeJ%2FQG0V4fnrGBbSW9nmWzWbcJ2bo2l0HCzop1QT04Ehw7w%2Fgii31Vh4Vd2vFlqKlR4lDY2R4ncp39ViVqeEU0Jn2LSv1f8OUaxo43PrbG1M2u1zN0sNRG0pSLH8knnT8RArgqRXwOpHkgm%2BFWuRaUn2tFsOo%2B%2FfoChEuWZB90pEQC59nZoTCiXE%2Fivigm4vFx5f%2FmUGgEd7gEhSelUtLOCstbTmDPElHG7tUhT96zIcG%2FASui%2B4zY1n7rPWuquYjv2t8qWoAeDxmoqs43beESYUH8DgqjjymOkGT90sRiQ5Vlqawaidtg3eHrrss9vdin1I9FQDo8c32owOHvgGXcbTX6hvV6ex0sPAT01ZeGrcXL3rdJiAZ1RUyRX327An5dDgcs5QeaptUoX4IHDPPRz7K03YxDZ5LhnHsPYzy%2FChFGtdD55P%2FjAtCYAwTDwQRYuTVlV5JZZOsdiHrxl3t1nQ1P5TSeOp7pJ0fhD1TzbyiorOdOAYKH4Nvcg2KCSGuJKFxWDzBE5ixdJZs9VsFo4D6fmlgdtr%2FN8SvSRx0M7akN6brCCUMKM7IfrqoTUf1JOrg%2Bt2LRY3yLEw2I3evQY6pgF540ffCXaCuku1CuYcEtg%2FcrWRs5TnHlrV0yM9v8cp0Ot5ckLwqSoOQfZ8fEHxeEtF5AW5HsKDz%2Bavim5xmxREPDXqSaBWItBptqEocomRUvn%2Fts9%2FwiuGc2OUgvfI9xr9LjuCZlyIJalJFYtXPXVyXv%2FrQSGVCIOOtVlyJDajBhu%2FizvZAtjzk5x1MRtOFuRr1cVv%2B4BUlavlXyeMTgUkEOL5mX5y&X-Amz-Signature=ec7a62494a139da430d384686a7a1ca99822d74a7d9ce4ce658893f774650648&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Z7OTRQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1JBiWJiAny4M0eObzwULur9ASbd5tsXRxOhRMJXCgAAiB2G1iZMAFKzZok3lD9oM00Qm1dNM34D%2BsriA3CQY%2BBlyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyce6epobKEyJc6BUKtwDp5w9W1sJBf3PtOUaPC%2B%2BSLSQ0dEBwd2VEesFEtbAypdVPeJ%2FQG0V4fnrGBbSW9nmWzWbcJ2bo2l0HCzop1QT04Ehw7w%2Fgii31Vh4Vd2vFlqKlR4lDY2R4ncp39ViVqeEU0Jn2LSv1f8OUaxo43PrbG1M2u1zN0sNRG0pSLH8knnT8RArgqRXwOpHkgm%2BFWuRaUn2tFsOo%2B%2FfoChEuWZB90pEQC59nZoTCiXE%2Fivigm4vFx5f%2FmUGgEd7gEhSelUtLOCstbTmDPElHG7tUhT96zIcG%2FASui%2B4zY1n7rPWuquYjv2t8qWoAeDxmoqs43beESYUH8DgqjjymOkGT90sRiQ5Vlqawaidtg3eHrrss9vdin1I9FQDo8c32owOHvgGXcbTX6hvV6ex0sPAT01ZeGrcXL3rdJiAZ1RUyRX327An5dDgcs5QeaptUoX4IHDPPRz7K03YxDZ5LhnHsPYzy%2FChFGtdD55P%2FjAtCYAwTDwQRYuTVlV5JZZOsdiHrxl3t1nQ1P5TSeOp7pJ0fhD1TzbyiorOdOAYKH4Nvcg2KCSGuJKFxWDzBE5ixdJZs9VsFo4D6fmlgdtr%2FN8SvSRx0M7akN6brCCUMKM7IfrqoTUf1JOrg%2Bt2LRY3yLEw2I3evQY6pgF540ffCXaCuku1CuYcEtg%2FcrWRs5TnHlrV0yM9v8cp0Ot5ckLwqSoOQfZ8fEHxeEtF5AW5HsKDz%2Bavim5xmxREPDXqSaBWItBptqEocomRUvn%2Fts9%2FwiuGc2OUgvfI9xr9LjuCZlyIJalJFYtXPXVyXv%2FrQSGVCIOOtVlyJDajBhu%2FizvZAtjzk5x1MRtOFuRr1cVv%2B4BUlavlXyeMTgUkEOL5mX5y&X-Amz-Signature=268991855d66b06eca7c0dcec2dfc7876308456b3e9196407abfbd51439a3f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Z7OTRQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1JBiWJiAny4M0eObzwULur9ASbd5tsXRxOhRMJXCgAAiB2G1iZMAFKzZok3lD9oM00Qm1dNM34D%2BsriA3CQY%2BBlyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyce6epobKEyJc6BUKtwDp5w9W1sJBf3PtOUaPC%2B%2BSLSQ0dEBwd2VEesFEtbAypdVPeJ%2FQG0V4fnrGBbSW9nmWzWbcJ2bo2l0HCzop1QT04Ehw7w%2Fgii31Vh4Vd2vFlqKlR4lDY2R4ncp39ViVqeEU0Jn2LSv1f8OUaxo43PrbG1M2u1zN0sNRG0pSLH8knnT8RArgqRXwOpHkgm%2BFWuRaUn2tFsOo%2B%2FfoChEuWZB90pEQC59nZoTCiXE%2Fivigm4vFx5f%2FmUGgEd7gEhSelUtLOCstbTmDPElHG7tUhT96zIcG%2FASui%2B4zY1n7rPWuquYjv2t8qWoAeDxmoqs43beESYUH8DgqjjymOkGT90sRiQ5Vlqawaidtg3eHrrss9vdin1I9FQDo8c32owOHvgGXcbTX6hvV6ex0sPAT01ZeGrcXL3rdJiAZ1RUyRX327An5dDgcs5QeaptUoX4IHDPPRz7K03YxDZ5LhnHsPYzy%2FChFGtdD55P%2FjAtCYAwTDwQRYuTVlV5JZZOsdiHrxl3t1nQ1P5TSeOp7pJ0fhD1TzbyiorOdOAYKH4Nvcg2KCSGuJKFxWDzBE5ixdJZs9VsFo4D6fmlgdtr%2FN8SvSRx0M7akN6brCCUMKM7IfrqoTUf1JOrg%2Bt2LRY3yLEw2I3evQY6pgF540ffCXaCuku1CuYcEtg%2FcrWRs5TnHlrV0yM9v8cp0Ot5ckLwqSoOQfZ8fEHxeEtF5AW5HsKDz%2Bavim5xmxREPDXqSaBWItBptqEocomRUvn%2Fts9%2FwiuGc2OUgvfI9xr9LjuCZlyIJalJFYtXPXVyXv%2FrQSGVCIOOtVlyJDajBhu%2FizvZAtjzk5x1MRtOFuRr1cVv%2B4BUlavlXyeMTgUkEOL5mX5y&X-Amz-Signature=32c7607780f3b9b7ec7de0e61459907721ac51bc500233c98bc2e43e85dbe548&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Z7OTRQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1JBiWJiAny4M0eObzwULur9ASbd5tsXRxOhRMJXCgAAiB2G1iZMAFKzZok3lD9oM00Qm1dNM34D%2BsriA3CQY%2BBlyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyce6epobKEyJc6BUKtwDp5w9W1sJBf3PtOUaPC%2B%2BSLSQ0dEBwd2VEesFEtbAypdVPeJ%2FQG0V4fnrGBbSW9nmWzWbcJ2bo2l0HCzop1QT04Ehw7w%2Fgii31Vh4Vd2vFlqKlR4lDY2R4ncp39ViVqeEU0Jn2LSv1f8OUaxo43PrbG1M2u1zN0sNRG0pSLH8knnT8RArgqRXwOpHkgm%2BFWuRaUn2tFsOo%2B%2FfoChEuWZB90pEQC59nZoTCiXE%2Fivigm4vFx5f%2FmUGgEd7gEhSelUtLOCstbTmDPElHG7tUhT96zIcG%2FASui%2B4zY1n7rPWuquYjv2t8qWoAeDxmoqs43beESYUH8DgqjjymOkGT90sRiQ5Vlqawaidtg3eHrrss9vdin1I9FQDo8c32owOHvgGXcbTX6hvV6ex0sPAT01ZeGrcXL3rdJiAZ1RUyRX327An5dDgcs5QeaptUoX4IHDPPRz7K03YxDZ5LhnHsPYzy%2FChFGtdD55P%2FjAtCYAwTDwQRYuTVlV5JZZOsdiHrxl3t1nQ1P5TSeOp7pJ0fhD1TzbyiorOdOAYKH4Nvcg2KCSGuJKFxWDzBE5ixdJZs9VsFo4D6fmlgdtr%2FN8SvSRx0M7akN6brCCUMKM7IfrqoTUf1JOrg%2Bt2LRY3yLEw2I3evQY6pgF540ffCXaCuku1CuYcEtg%2FcrWRs5TnHlrV0yM9v8cp0Ot5ckLwqSoOQfZ8fEHxeEtF5AW5HsKDz%2Bavim5xmxREPDXqSaBWItBptqEocomRUvn%2Fts9%2FwiuGc2OUgvfI9xr9LjuCZlyIJalJFYtXPXVyXv%2FrQSGVCIOOtVlyJDajBhu%2FizvZAtjzk5x1MRtOFuRr1cVv%2B4BUlavlXyeMTgUkEOL5mX5y&X-Amz-Signature=f23e124fd6c7d03c579a37444e11c922fa3477d6b0473776f62a8f39c2f7645d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
