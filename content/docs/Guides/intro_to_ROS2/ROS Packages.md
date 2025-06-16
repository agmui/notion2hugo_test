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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADYHSHY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFiYla4Wp9Gj0gi9OibjmZPIBRl8PJfNvXncZ78m9VW4AiA0ieTzZ5EdFl%2BpHW5t%2BANy8b5P3nsCTZMHEVjTXeBJAyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMdnF0SJnwVCSVDN37KtwD9SQBwWKnBHBnTzmGU3oGJthWn2Bhmw%2BeI7iX9Xn1woAIArq2CcZp6gH6lEyaD9dddH8vusnq%2FWpgA6%2Fx%2Bp9oAyny3sv2S3sdzlCF2Lu6UfQ4RlmI%2FI9CfgBfHlZBiPben1S%2FSqpRKuORZAyoiU9oCMyA%2FOMlAF0H42VF%2FP8Xg6irv3pKvYKVirYjr5JJ5ibUhHa2J96bSPNrs3475DRrqfHWd4frGQXCSwFOK4ygjnUNqIRaVZuIQfzu70tZgRhab9JBOHkJwPW%2B8I%2BuvP2ok6A5lyl4ixf5kymQZaOVgHHHTzMG2mwOuskXXVDunFx8ynTRZ8C5nrjAQoiyFfIg7aWBipZMrCy32r9CmVDikkwYty9oO43NbWGkH6nuCzoHOG5UZi2kARB19iLVosK4kutelP4cPuoDIrIF9gZwfQZpd6N30sT%2B6320BV%2FRQsIV7ZOcys9HVPjGcIbX6205w6Co%2B%2BWIGIwG6OJi%2BC172leVI2hm%2FGCuxwnVCuqgqSSa651tJ0THAJaYuo4LmEuDCCN4BWKSzESq4EHqQhWclVHTwKpvFYncShX%2BmxnxRBuiRhD1sEFD0rteEX0X8WuYs%2FKStKqg3kD7Kz8WaMMZJb76vADIIL1lJtxVxm4wqoi%2FwgY6pgFZglpAGcH59dStgdMHXEUTi0rympFY3M1QCe1k9lqByEpm6MRqTer507SVFW6fxW%2FphsegoxnhrAq3hnDAB%2BKevQaDjwN5MOvBY%2Fq%2BcYgbEXFLGiBYeVIX3N7I%2BSzSEOPdt4a0qhDPpgBdfYaewd7PVC5dFTw1LJQalDsC4jjGmg2gFyaNZfwqTpSqapaV%2BIDOshbDacTLvyQgi%2F%2BtP0QC3gu%2FTunK&X-Amz-Signature=f9e6456319aabaf6efb1c883a4f17bce21364f032cc6f2c5435bd1d8e52f1d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADYHSHY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFiYla4Wp9Gj0gi9OibjmZPIBRl8PJfNvXncZ78m9VW4AiA0ieTzZ5EdFl%2BpHW5t%2BANy8b5P3nsCTZMHEVjTXeBJAyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMdnF0SJnwVCSVDN37KtwD9SQBwWKnBHBnTzmGU3oGJthWn2Bhmw%2BeI7iX9Xn1woAIArq2CcZp6gH6lEyaD9dddH8vusnq%2FWpgA6%2Fx%2Bp9oAyny3sv2S3sdzlCF2Lu6UfQ4RlmI%2FI9CfgBfHlZBiPben1S%2FSqpRKuORZAyoiU9oCMyA%2FOMlAF0H42VF%2FP8Xg6irv3pKvYKVirYjr5JJ5ibUhHa2J96bSPNrs3475DRrqfHWd4frGQXCSwFOK4ygjnUNqIRaVZuIQfzu70tZgRhab9JBOHkJwPW%2B8I%2BuvP2ok6A5lyl4ixf5kymQZaOVgHHHTzMG2mwOuskXXVDunFx8ynTRZ8C5nrjAQoiyFfIg7aWBipZMrCy32r9CmVDikkwYty9oO43NbWGkH6nuCzoHOG5UZi2kARB19iLVosK4kutelP4cPuoDIrIF9gZwfQZpd6N30sT%2B6320BV%2FRQsIV7ZOcys9HVPjGcIbX6205w6Co%2B%2BWIGIwG6OJi%2BC172leVI2hm%2FGCuxwnVCuqgqSSa651tJ0THAJaYuo4LmEuDCCN4BWKSzESq4EHqQhWclVHTwKpvFYncShX%2BmxnxRBuiRhD1sEFD0rteEX0X8WuYs%2FKStKqg3kD7Kz8WaMMZJb76vADIIL1lJtxVxm4wqoi%2FwgY6pgFZglpAGcH59dStgdMHXEUTi0rympFY3M1QCe1k9lqByEpm6MRqTer507SVFW6fxW%2FphsegoxnhrAq3hnDAB%2BKevQaDjwN5MOvBY%2Fq%2BcYgbEXFLGiBYeVIX3N7I%2BSzSEOPdt4a0qhDPpgBdfYaewd7PVC5dFTw1LJQalDsC4jjGmg2gFyaNZfwqTpSqapaV%2BIDOshbDacTLvyQgi%2F%2BtP0QC3gu%2FTunK&X-Amz-Signature=228261854e18e46659d240d383e7d1b1c2bd70253a005c516f0542447ef49e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADYHSHY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFiYla4Wp9Gj0gi9OibjmZPIBRl8PJfNvXncZ78m9VW4AiA0ieTzZ5EdFl%2BpHW5t%2BANy8b5P3nsCTZMHEVjTXeBJAyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMdnF0SJnwVCSVDN37KtwD9SQBwWKnBHBnTzmGU3oGJthWn2Bhmw%2BeI7iX9Xn1woAIArq2CcZp6gH6lEyaD9dddH8vusnq%2FWpgA6%2Fx%2Bp9oAyny3sv2S3sdzlCF2Lu6UfQ4RlmI%2FI9CfgBfHlZBiPben1S%2FSqpRKuORZAyoiU9oCMyA%2FOMlAF0H42VF%2FP8Xg6irv3pKvYKVirYjr5JJ5ibUhHa2J96bSPNrs3475DRrqfHWd4frGQXCSwFOK4ygjnUNqIRaVZuIQfzu70tZgRhab9JBOHkJwPW%2B8I%2BuvP2ok6A5lyl4ixf5kymQZaOVgHHHTzMG2mwOuskXXVDunFx8ynTRZ8C5nrjAQoiyFfIg7aWBipZMrCy32r9CmVDikkwYty9oO43NbWGkH6nuCzoHOG5UZi2kARB19iLVosK4kutelP4cPuoDIrIF9gZwfQZpd6N30sT%2B6320BV%2FRQsIV7ZOcys9HVPjGcIbX6205w6Co%2B%2BWIGIwG6OJi%2BC172leVI2hm%2FGCuxwnVCuqgqSSa651tJ0THAJaYuo4LmEuDCCN4BWKSzESq4EHqQhWclVHTwKpvFYncShX%2BmxnxRBuiRhD1sEFD0rteEX0X8WuYs%2FKStKqg3kD7Kz8WaMMZJb76vADIIL1lJtxVxm4wqoi%2FwgY6pgFZglpAGcH59dStgdMHXEUTi0rympFY3M1QCe1k9lqByEpm6MRqTer507SVFW6fxW%2FphsegoxnhrAq3hnDAB%2BKevQaDjwN5MOvBY%2Fq%2BcYgbEXFLGiBYeVIX3N7I%2BSzSEOPdt4a0qhDPpgBdfYaewd7PVC5dFTw1LJQalDsC4jjGmg2gFyaNZfwqTpSqapaV%2BIDOshbDacTLvyQgi%2F%2BtP0QC3gu%2FTunK&X-Amz-Signature=46f5a8920a697c5f6744522016f302a3b9bebd90fc06df378e21dea03a837af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADYHSHY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFiYla4Wp9Gj0gi9OibjmZPIBRl8PJfNvXncZ78m9VW4AiA0ieTzZ5EdFl%2BpHW5t%2BANy8b5P3nsCTZMHEVjTXeBJAyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMdnF0SJnwVCSVDN37KtwD9SQBwWKnBHBnTzmGU3oGJthWn2Bhmw%2BeI7iX9Xn1woAIArq2CcZp6gH6lEyaD9dddH8vusnq%2FWpgA6%2Fx%2Bp9oAyny3sv2S3sdzlCF2Lu6UfQ4RlmI%2FI9CfgBfHlZBiPben1S%2FSqpRKuORZAyoiU9oCMyA%2FOMlAF0H42VF%2FP8Xg6irv3pKvYKVirYjr5JJ5ibUhHa2J96bSPNrs3475DRrqfHWd4frGQXCSwFOK4ygjnUNqIRaVZuIQfzu70tZgRhab9JBOHkJwPW%2B8I%2BuvP2ok6A5lyl4ixf5kymQZaOVgHHHTzMG2mwOuskXXVDunFx8ynTRZ8C5nrjAQoiyFfIg7aWBipZMrCy32r9CmVDikkwYty9oO43NbWGkH6nuCzoHOG5UZi2kARB19iLVosK4kutelP4cPuoDIrIF9gZwfQZpd6N30sT%2B6320BV%2FRQsIV7ZOcys9HVPjGcIbX6205w6Co%2B%2BWIGIwG6OJi%2BC172leVI2hm%2FGCuxwnVCuqgqSSa651tJ0THAJaYuo4LmEuDCCN4BWKSzESq4EHqQhWclVHTwKpvFYncShX%2BmxnxRBuiRhD1sEFD0rteEX0X8WuYs%2FKStKqg3kD7Kz8WaMMZJb76vADIIL1lJtxVxm4wqoi%2FwgY6pgFZglpAGcH59dStgdMHXEUTi0rympFY3M1QCe1k9lqByEpm6MRqTer507SVFW6fxW%2FphsegoxnhrAq3hnDAB%2BKevQaDjwN5MOvBY%2Fq%2BcYgbEXFLGiBYeVIX3N7I%2BSzSEOPdt4a0qhDPpgBdfYaewd7PVC5dFTw1LJQalDsC4jjGmg2gFyaNZfwqTpSqapaV%2BIDOshbDacTLvyQgi%2F%2BtP0QC3gu%2FTunK&X-Amz-Signature=d3b2525fe7de6a2c142528019e8db786ac51d80977030c11b39809ba70b8ef8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADYHSHY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFiYla4Wp9Gj0gi9OibjmZPIBRl8PJfNvXncZ78m9VW4AiA0ieTzZ5EdFl%2BpHW5t%2BANy8b5P3nsCTZMHEVjTXeBJAyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMdnF0SJnwVCSVDN37KtwD9SQBwWKnBHBnTzmGU3oGJthWn2Bhmw%2BeI7iX9Xn1woAIArq2CcZp6gH6lEyaD9dddH8vusnq%2FWpgA6%2Fx%2Bp9oAyny3sv2S3sdzlCF2Lu6UfQ4RlmI%2FI9CfgBfHlZBiPben1S%2FSqpRKuORZAyoiU9oCMyA%2FOMlAF0H42VF%2FP8Xg6irv3pKvYKVirYjr5JJ5ibUhHa2J96bSPNrs3475DRrqfHWd4frGQXCSwFOK4ygjnUNqIRaVZuIQfzu70tZgRhab9JBOHkJwPW%2B8I%2BuvP2ok6A5lyl4ixf5kymQZaOVgHHHTzMG2mwOuskXXVDunFx8ynTRZ8C5nrjAQoiyFfIg7aWBipZMrCy32r9CmVDikkwYty9oO43NbWGkH6nuCzoHOG5UZi2kARB19iLVosK4kutelP4cPuoDIrIF9gZwfQZpd6N30sT%2B6320BV%2FRQsIV7ZOcys9HVPjGcIbX6205w6Co%2B%2BWIGIwG6OJi%2BC172leVI2hm%2FGCuxwnVCuqgqSSa651tJ0THAJaYuo4LmEuDCCN4BWKSzESq4EHqQhWclVHTwKpvFYncShX%2BmxnxRBuiRhD1sEFD0rteEX0X8WuYs%2FKStKqg3kD7Kz8WaMMZJb76vADIIL1lJtxVxm4wqoi%2FwgY6pgFZglpAGcH59dStgdMHXEUTi0rympFY3M1QCe1k9lqByEpm6MRqTer507SVFW6fxW%2FphsegoxnhrAq3hnDAB%2BKevQaDjwN5MOvBY%2Fq%2BcYgbEXFLGiBYeVIX3N7I%2BSzSEOPdt4a0qhDPpgBdfYaewd7PVC5dFTw1LJQalDsC4jjGmg2gFyaNZfwqTpSqapaV%2BIDOshbDacTLvyQgi%2F%2BtP0QC3gu%2FTunK&X-Amz-Signature=9e730ca3b59d1559c7b202f89d5bca27f704712b7505dc541c0ce8a27247ca01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADYHSHY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFiYla4Wp9Gj0gi9OibjmZPIBRl8PJfNvXncZ78m9VW4AiA0ieTzZ5EdFl%2BpHW5t%2BANy8b5P3nsCTZMHEVjTXeBJAyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMdnF0SJnwVCSVDN37KtwD9SQBwWKnBHBnTzmGU3oGJthWn2Bhmw%2BeI7iX9Xn1woAIArq2CcZp6gH6lEyaD9dddH8vusnq%2FWpgA6%2Fx%2Bp9oAyny3sv2S3sdzlCF2Lu6UfQ4RlmI%2FI9CfgBfHlZBiPben1S%2FSqpRKuORZAyoiU9oCMyA%2FOMlAF0H42VF%2FP8Xg6irv3pKvYKVirYjr5JJ5ibUhHa2J96bSPNrs3475DRrqfHWd4frGQXCSwFOK4ygjnUNqIRaVZuIQfzu70tZgRhab9JBOHkJwPW%2B8I%2BuvP2ok6A5lyl4ixf5kymQZaOVgHHHTzMG2mwOuskXXVDunFx8ynTRZ8C5nrjAQoiyFfIg7aWBipZMrCy32r9CmVDikkwYty9oO43NbWGkH6nuCzoHOG5UZi2kARB19iLVosK4kutelP4cPuoDIrIF9gZwfQZpd6N30sT%2B6320BV%2FRQsIV7ZOcys9HVPjGcIbX6205w6Co%2B%2BWIGIwG6OJi%2BC172leVI2hm%2FGCuxwnVCuqgqSSa651tJ0THAJaYuo4LmEuDCCN4BWKSzESq4EHqQhWclVHTwKpvFYncShX%2BmxnxRBuiRhD1sEFD0rteEX0X8WuYs%2FKStKqg3kD7Kz8WaMMZJb76vADIIL1lJtxVxm4wqoi%2FwgY6pgFZglpAGcH59dStgdMHXEUTi0rympFY3M1QCe1k9lqByEpm6MRqTer507SVFW6fxW%2FphsegoxnhrAq3hnDAB%2BKevQaDjwN5MOvBY%2Fq%2BcYgbEXFLGiBYeVIX3N7I%2BSzSEOPdt4a0qhDPpgBdfYaewd7PVC5dFTw1LJQalDsC4jjGmg2gFyaNZfwqTpSqapaV%2BIDOshbDacTLvyQgi%2F%2BtP0QC3gu%2FTunK&X-Amz-Signature=b590a0f3d17c038d8bac2bcb4c519d23ae20010f09fc5d7cdaf19e5e7811e40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADYHSHY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFiYla4Wp9Gj0gi9OibjmZPIBRl8PJfNvXncZ78m9VW4AiA0ieTzZ5EdFl%2BpHW5t%2BANy8b5P3nsCTZMHEVjTXeBJAyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMdnF0SJnwVCSVDN37KtwD9SQBwWKnBHBnTzmGU3oGJthWn2Bhmw%2BeI7iX9Xn1woAIArq2CcZp6gH6lEyaD9dddH8vusnq%2FWpgA6%2Fx%2Bp9oAyny3sv2S3sdzlCF2Lu6UfQ4RlmI%2FI9CfgBfHlZBiPben1S%2FSqpRKuORZAyoiU9oCMyA%2FOMlAF0H42VF%2FP8Xg6irv3pKvYKVirYjr5JJ5ibUhHa2J96bSPNrs3475DRrqfHWd4frGQXCSwFOK4ygjnUNqIRaVZuIQfzu70tZgRhab9JBOHkJwPW%2B8I%2BuvP2ok6A5lyl4ixf5kymQZaOVgHHHTzMG2mwOuskXXVDunFx8ynTRZ8C5nrjAQoiyFfIg7aWBipZMrCy32r9CmVDikkwYty9oO43NbWGkH6nuCzoHOG5UZi2kARB19iLVosK4kutelP4cPuoDIrIF9gZwfQZpd6N30sT%2B6320BV%2FRQsIV7ZOcys9HVPjGcIbX6205w6Co%2B%2BWIGIwG6OJi%2BC172leVI2hm%2FGCuxwnVCuqgqSSa651tJ0THAJaYuo4LmEuDCCN4BWKSzESq4EHqQhWclVHTwKpvFYncShX%2BmxnxRBuiRhD1sEFD0rteEX0X8WuYs%2FKStKqg3kD7Kz8WaMMZJb76vADIIL1lJtxVxm4wqoi%2FwgY6pgFZglpAGcH59dStgdMHXEUTi0rympFY3M1QCe1k9lqByEpm6MRqTer507SVFW6fxW%2FphsegoxnhrAq3hnDAB%2BKevQaDjwN5MOvBY%2Fq%2BcYgbEXFLGiBYeVIX3N7I%2BSzSEOPdt4a0qhDPpgBdfYaewd7PVC5dFTw1LJQalDsC4jjGmg2gFyaNZfwqTpSqapaV%2BIDOshbDacTLvyQgi%2F%2BtP0QC3gu%2FTunK&X-Amz-Signature=51cbdb2af66398f275f49cffd01fe44f9fb2a004eaba44233c0d4b7beb44c920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
