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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCNIW3N%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGuL443NezhmzP7pay9w7h%2BsgrtPjqAUfk%2FiiHVeL5XxAiEApbAPBNPKoJgMkgaiRG%2FM7IjnYUOLGXjpyWTx19T8ac0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCqYGoSxsF61KdvTMCrcA7OysqeYhDxyWaN8q%2BNV%2FU1523lvjerfL46gsLO0wszKu6AtYMzwl1QSbnOjhz40J5QnClNP2TOEzEKwxXSLe9qs%2F8NCqYPsz4p4m%2FW4rf0f5Gr8gf9rmHaEtV%2FrGqcXLAMBD2lZtgaoMXAay8IcZVNeDgW3ukEXZAUOkGvpin1Gk8nFNljWBgpix8N496TjjvfmXpw2wUwP06UuCrTzvTBZ4anpw996fdYPHFaE2cbL73ZRsbIvKbUazNr%2BTpg%2BsIcqwCobjvE%2F3pJMbiqlCMb7wPTIG7fOxqJYvrs6H2KMiSY8%2B8Vxnq2RO3U3Jp5SdwOj8xVnR71AJdEa0P8w7yGyFtTJikWRVXiUjWRJP62E0vbaQ5d2YPn2iBCpxryXJr1f3h8kJbLOZj2wbzonGNq1nIj630puMGLGei2CDecwiFBgEtfhB8PnGy5uTKAE%2BUkRe7OfF466OAcIImm7jRH%2Fh0iqpy%2FoQa701pykgPCUdDt1WgddGJZ71rX%2ByvHBjb095waf7iLbiyhhu6cU59VeVmihoAD7EBeuzYkeY9Mb6BNDp5pRLxS0xAEWx7%2FBfrCTz7C6glz%2BqwWGdCgnI2aDnHP6Mq1xJVmX1UAEwOO8VIUbC0ZLTI1pWj01MP2F2sMGOqUB8Hp%2FArN5XmZltseT15SlFCsGS5PmdZ1fh%2BqnD6r38bqCKE6Rvn1RHT3%2FmifmPIzkgvNPZHVCyQTuecQ6W3DTT6VH6HOQZpVNmfnhuCERvCc2j0zFwJgfa40cOiYVHY2jwKMN4udSMfQieq1QsLP7vGSTaH78p5pbVm%2FLDKnaXzM15JNDZ5aitzgPmWnaz51tl1ew5QRdvV9Av81fSf35zUADEbZX&X-Amz-Signature=6507b5b51ad10ce6152cddef25c81f47b17aa6900c507303573454b9a7756f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCNIW3N%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGuL443NezhmzP7pay9w7h%2BsgrtPjqAUfk%2FiiHVeL5XxAiEApbAPBNPKoJgMkgaiRG%2FM7IjnYUOLGXjpyWTx19T8ac0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCqYGoSxsF61KdvTMCrcA7OysqeYhDxyWaN8q%2BNV%2FU1523lvjerfL46gsLO0wszKu6AtYMzwl1QSbnOjhz40J5QnClNP2TOEzEKwxXSLe9qs%2F8NCqYPsz4p4m%2FW4rf0f5Gr8gf9rmHaEtV%2FrGqcXLAMBD2lZtgaoMXAay8IcZVNeDgW3ukEXZAUOkGvpin1Gk8nFNljWBgpix8N496TjjvfmXpw2wUwP06UuCrTzvTBZ4anpw996fdYPHFaE2cbL73ZRsbIvKbUazNr%2BTpg%2BsIcqwCobjvE%2F3pJMbiqlCMb7wPTIG7fOxqJYvrs6H2KMiSY8%2B8Vxnq2RO3U3Jp5SdwOj8xVnR71AJdEa0P8w7yGyFtTJikWRVXiUjWRJP62E0vbaQ5d2YPn2iBCpxryXJr1f3h8kJbLOZj2wbzonGNq1nIj630puMGLGei2CDecwiFBgEtfhB8PnGy5uTKAE%2BUkRe7OfF466OAcIImm7jRH%2Fh0iqpy%2FoQa701pykgPCUdDt1WgddGJZ71rX%2ByvHBjb095waf7iLbiyhhu6cU59VeVmihoAD7EBeuzYkeY9Mb6BNDp5pRLxS0xAEWx7%2FBfrCTz7C6glz%2BqwWGdCgnI2aDnHP6Mq1xJVmX1UAEwOO8VIUbC0ZLTI1pWj01MP2F2sMGOqUB8Hp%2FArN5XmZltseT15SlFCsGS5PmdZ1fh%2BqnD6r38bqCKE6Rvn1RHT3%2FmifmPIzkgvNPZHVCyQTuecQ6W3DTT6VH6HOQZpVNmfnhuCERvCc2j0zFwJgfa40cOiYVHY2jwKMN4udSMfQieq1QsLP7vGSTaH78p5pbVm%2FLDKnaXzM15JNDZ5aitzgPmWnaz51tl1ew5QRdvV9Av81fSf35zUADEbZX&X-Amz-Signature=db4c136d146d34ef00040181f4097df88eb7ad3c73f83865e79ed6ee5fd2c84c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCNIW3N%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGuL443NezhmzP7pay9w7h%2BsgrtPjqAUfk%2FiiHVeL5XxAiEApbAPBNPKoJgMkgaiRG%2FM7IjnYUOLGXjpyWTx19T8ac0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCqYGoSxsF61KdvTMCrcA7OysqeYhDxyWaN8q%2BNV%2FU1523lvjerfL46gsLO0wszKu6AtYMzwl1QSbnOjhz40J5QnClNP2TOEzEKwxXSLe9qs%2F8NCqYPsz4p4m%2FW4rf0f5Gr8gf9rmHaEtV%2FrGqcXLAMBD2lZtgaoMXAay8IcZVNeDgW3ukEXZAUOkGvpin1Gk8nFNljWBgpix8N496TjjvfmXpw2wUwP06UuCrTzvTBZ4anpw996fdYPHFaE2cbL73ZRsbIvKbUazNr%2BTpg%2BsIcqwCobjvE%2F3pJMbiqlCMb7wPTIG7fOxqJYvrs6H2KMiSY8%2B8Vxnq2RO3U3Jp5SdwOj8xVnR71AJdEa0P8w7yGyFtTJikWRVXiUjWRJP62E0vbaQ5d2YPn2iBCpxryXJr1f3h8kJbLOZj2wbzonGNq1nIj630puMGLGei2CDecwiFBgEtfhB8PnGy5uTKAE%2BUkRe7OfF466OAcIImm7jRH%2Fh0iqpy%2FoQa701pykgPCUdDt1WgddGJZ71rX%2ByvHBjb095waf7iLbiyhhu6cU59VeVmihoAD7EBeuzYkeY9Mb6BNDp5pRLxS0xAEWx7%2FBfrCTz7C6glz%2BqwWGdCgnI2aDnHP6Mq1xJVmX1UAEwOO8VIUbC0ZLTI1pWj01MP2F2sMGOqUB8Hp%2FArN5XmZltseT15SlFCsGS5PmdZ1fh%2BqnD6r38bqCKE6Rvn1RHT3%2FmifmPIzkgvNPZHVCyQTuecQ6W3DTT6VH6HOQZpVNmfnhuCERvCc2j0zFwJgfa40cOiYVHY2jwKMN4udSMfQieq1QsLP7vGSTaH78p5pbVm%2FLDKnaXzM15JNDZ5aitzgPmWnaz51tl1ew5QRdvV9Av81fSf35zUADEbZX&X-Amz-Signature=b6f21266b26519c073ae6764e9bacec740fe2115a844f9b318e6356b0f3ae607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCNIW3N%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGuL443NezhmzP7pay9w7h%2BsgrtPjqAUfk%2FiiHVeL5XxAiEApbAPBNPKoJgMkgaiRG%2FM7IjnYUOLGXjpyWTx19T8ac0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCqYGoSxsF61KdvTMCrcA7OysqeYhDxyWaN8q%2BNV%2FU1523lvjerfL46gsLO0wszKu6AtYMzwl1QSbnOjhz40J5QnClNP2TOEzEKwxXSLe9qs%2F8NCqYPsz4p4m%2FW4rf0f5Gr8gf9rmHaEtV%2FrGqcXLAMBD2lZtgaoMXAay8IcZVNeDgW3ukEXZAUOkGvpin1Gk8nFNljWBgpix8N496TjjvfmXpw2wUwP06UuCrTzvTBZ4anpw996fdYPHFaE2cbL73ZRsbIvKbUazNr%2BTpg%2BsIcqwCobjvE%2F3pJMbiqlCMb7wPTIG7fOxqJYvrs6H2KMiSY8%2B8Vxnq2RO3U3Jp5SdwOj8xVnR71AJdEa0P8w7yGyFtTJikWRVXiUjWRJP62E0vbaQ5d2YPn2iBCpxryXJr1f3h8kJbLOZj2wbzonGNq1nIj630puMGLGei2CDecwiFBgEtfhB8PnGy5uTKAE%2BUkRe7OfF466OAcIImm7jRH%2Fh0iqpy%2FoQa701pykgPCUdDt1WgddGJZ71rX%2ByvHBjb095waf7iLbiyhhu6cU59VeVmihoAD7EBeuzYkeY9Mb6BNDp5pRLxS0xAEWx7%2FBfrCTz7C6glz%2BqwWGdCgnI2aDnHP6Mq1xJVmX1UAEwOO8VIUbC0ZLTI1pWj01MP2F2sMGOqUB8Hp%2FArN5XmZltseT15SlFCsGS5PmdZ1fh%2BqnD6r38bqCKE6Rvn1RHT3%2FmifmPIzkgvNPZHVCyQTuecQ6W3DTT6VH6HOQZpVNmfnhuCERvCc2j0zFwJgfa40cOiYVHY2jwKMN4udSMfQieq1QsLP7vGSTaH78p5pbVm%2FLDKnaXzM15JNDZ5aitzgPmWnaz51tl1ew5QRdvV9Av81fSf35zUADEbZX&X-Amz-Signature=e98f98c4a9b44be63d5b33e63e607d5a3e788a52082c5e106b29d0dc84e7097c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCNIW3N%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGuL443NezhmzP7pay9w7h%2BsgrtPjqAUfk%2FiiHVeL5XxAiEApbAPBNPKoJgMkgaiRG%2FM7IjnYUOLGXjpyWTx19T8ac0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCqYGoSxsF61KdvTMCrcA7OysqeYhDxyWaN8q%2BNV%2FU1523lvjerfL46gsLO0wszKu6AtYMzwl1QSbnOjhz40J5QnClNP2TOEzEKwxXSLe9qs%2F8NCqYPsz4p4m%2FW4rf0f5Gr8gf9rmHaEtV%2FrGqcXLAMBD2lZtgaoMXAay8IcZVNeDgW3ukEXZAUOkGvpin1Gk8nFNljWBgpix8N496TjjvfmXpw2wUwP06UuCrTzvTBZ4anpw996fdYPHFaE2cbL73ZRsbIvKbUazNr%2BTpg%2BsIcqwCobjvE%2F3pJMbiqlCMb7wPTIG7fOxqJYvrs6H2KMiSY8%2B8Vxnq2RO3U3Jp5SdwOj8xVnR71AJdEa0P8w7yGyFtTJikWRVXiUjWRJP62E0vbaQ5d2YPn2iBCpxryXJr1f3h8kJbLOZj2wbzonGNq1nIj630puMGLGei2CDecwiFBgEtfhB8PnGy5uTKAE%2BUkRe7OfF466OAcIImm7jRH%2Fh0iqpy%2FoQa701pykgPCUdDt1WgddGJZ71rX%2ByvHBjb095waf7iLbiyhhu6cU59VeVmihoAD7EBeuzYkeY9Mb6BNDp5pRLxS0xAEWx7%2FBfrCTz7C6glz%2BqwWGdCgnI2aDnHP6Mq1xJVmX1UAEwOO8VIUbC0ZLTI1pWj01MP2F2sMGOqUB8Hp%2FArN5XmZltseT15SlFCsGS5PmdZ1fh%2BqnD6r38bqCKE6Rvn1RHT3%2FmifmPIzkgvNPZHVCyQTuecQ6W3DTT6VH6HOQZpVNmfnhuCERvCc2j0zFwJgfa40cOiYVHY2jwKMN4udSMfQieq1QsLP7vGSTaH78p5pbVm%2FLDKnaXzM15JNDZ5aitzgPmWnaz51tl1ew5QRdvV9Av81fSf35zUADEbZX&X-Amz-Signature=6e4936e46ee23987bfeb182d91d6ccb53132595199232d78d798259da07d8ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCNIW3N%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGuL443NezhmzP7pay9w7h%2BsgrtPjqAUfk%2FiiHVeL5XxAiEApbAPBNPKoJgMkgaiRG%2FM7IjnYUOLGXjpyWTx19T8ac0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCqYGoSxsF61KdvTMCrcA7OysqeYhDxyWaN8q%2BNV%2FU1523lvjerfL46gsLO0wszKu6AtYMzwl1QSbnOjhz40J5QnClNP2TOEzEKwxXSLe9qs%2F8NCqYPsz4p4m%2FW4rf0f5Gr8gf9rmHaEtV%2FrGqcXLAMBD2lZtgaoMXAay8IcZVNeDgW3ukEXZAUOkGvpin1Gk8nFNljWBgpix8N496TjjvfmXpw2wUwP06UuCrTzvTBZ4anpw996fdYPHFaE2cbL73ZRsbIvKbUazNr%2BTpg%2BsIcqwCobjvE%2F3pJMbiqlCMb7wPTIG7fOxqJYvrs6H2KMiSY8%2B8Vxnq2RO3U3Jp5SdwOj8xVnR71AJdEa0P8w7yGyFtTJikWRVXiUjWRJP62E0vbaQ5d2YPn2iBCpxryXJr1f3h8kJbLOZj2wbzonGNq1nIj630puMGLGei2CDecwiFBgEtfhB8PnGy5uTKAE%2BUkRe7OfF466OAcIImm7jRH%2Fh0iqpy%2FoQa701pykgPCUdDt1WgddGJZ71rX%2ByvHBjb095waf7iLbiyhhu6cU59VeVmihoAD7EBeuzYkeY9Mb6BNDp5pRLxS0xAEWx7%2FBfrCTz7C6glz%2BqwWGdCgnI2aDnHP6Mq1xJVmX1UAEwOO8VIUbC0ZLTI1pWj01MP2F2sMGOqUB8Hp%2FArN5XmZltseT15SlFCsGS5PmdZ1fh%2BqnD6r38bqCKE6Rvn1RHT3%2FmifmPIzkgvNPZHVCyQTuecQ6W3DTT6VH6HOQZpVNmfnhuCERvCc2j0zFwJgfa40cOiYVHY2jwKMN4udSMfQieq1QsLP7vGSTaH78p5pbVm%2FLDKnaXzM15JNDZ5aitzgPmWnaz51tl1ew5QRdvV9Av81fSf35zUADEbZX&X-Amz-Signature=5d6d7cd45bd78d64ddaeac3c1ab9eb3cfa4878fce86134f01613b4700f9d1f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCNIW3N%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGuL443NezhmzP7pay9w7h%2BsgrtPjqAUfk%2FiiHVeL5XxAiEApbAPBNPKoJgMkgaiRG%2FM7IjnYUOLGXjpyWTx19T8ac0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCqYGoSxsF61KdvTMCrcA7OysqeYhDxyWaN8q%2BNV%2FU1523lvjerfL46gsLO0wszKu6AtYMzwl1QSbnOjhz40J5QnClNP2TOEzEKwxXSLe9qs%2F8NCqYPsz4p4m%2FW4rf0f5Gr8gf9rmHaEtV%2FrGqcXLAMBD2lZtgaoMXAay8IcZVNeDgW3ukEXZAUOkGvpin1Gk8nFNljWBgpix8N496TjjvfmXpw2wUwP06UuCrTzvTBZ4anpw996fdYPHFaE2cbL73ZRsbIvKbUazNr%2BTpg%2BsIcqwCobjvE%2F3pJMbiqlCMb7wPTIG7fOxqJYvrs6H2KMiSY8%2B8Vxnq2RO3U3Jp5SdwOj8xVnR71AJdEa0P8w7yGyFtTJikWRVXiUjWRJP62E0vbaQ5d2YPn2iBCpxryXJr1f3h8kJbLOZj2wbzonGNq1nIj630puMGLGei2CDecwiFBgEtfhB8PnGy5uTKAE%2BUkRe7OfF466OAcIImm7jRH%2Fh0iqpy%2FoQa701pykgPCUdDt1WgddGJZ71rX%2ByvHBjb095waf7iLbiyhhu6cU59VeVmihoAD7EBeuzYkeY9Mb6BNDp5pRLxS0xAEWx7%2FBfrCTz7C6glz%2BqwWGdCgnI2aDnHP6Mq1xJVmX1UAEwOO8VIUbC0ZLTI1pWj01MP2F2sMGOqUB8Hp%2FArN5XmZltseT15SlFCsGS5PmdZ1fh%2BqnD6r38bqCKE6Rvn1RHT3%2FmifmPIzkgvNPZHVCyQTuecQ6W3DTT6VH6HOQZpVNmfnhuCERvCc2j0zFwJgfa40cOiYVHY2jwKMN4udSMfQieq1QsLP7vGSTaH78p5pbVm%2FLDKnaXzM15JNDZ5aitzgPmWnaz51tl1ew5QRdvV9Av81fSf35zUADEbZX&X-Amz-Signature=4082e285ec20e9f2f9d2cb34f8e9d661926df2b741900ad4da37e0a5ddf850a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
