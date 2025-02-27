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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJT2YI3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA6K0b%2Bw60IffyQkZlCw1IH4a9SgOhV7EiJG1Jn3FAmVAiBxMfszeq2dEtuhG6pBSWfQ0hEboNwmJ5c1IlGk2a3QSyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM27FLpFYKXE%2FPke7MKtwDvLBCzaKnRao5oq3CdcqJCkNzK4%2F0bm8i4OxFDsJS9k2L7AwVZB2lWorkAnIEVtEcTHozxqBAjXhHycDramabHc8hevDErXn6jYCWQ7A90WCRRb1XyKigCMJRsKe6O%2BIdv3rAxUHTLUF7ybzP10IAWACz8RjzmfQ1DyOlzvsqqrJ8a9g5X69%2Btov3e7uZ108GWLkMxg7awyz1lD75FKv51UTSE1rXZ1gRFRkPyky4Ja8vlVoxsFCYiQ3YSHr%2FzaIu8QQ5S2IcC3kGJfUOdW9w2qN13NkA03k5s0wG5G6PwJSI94Xhrv7u9HV%2FNuorrZOwXR3Rnf9sQYo4%2B3SfgkTzWmwMWWoHGKS3%2FAzNCFC4gXRxKfPtzY49udOPoUxlvOp7USMU859gNaeT5VnX8UL3UESk%2FYwE6njvfErY0eNv7vFPHJreYXj%2B00OudeJPJ%2F9zhAsT28XYR%2BGs9XPg0W44Tk90Oxm5hL1Pmhvm4S7l4QUj5pdg0A9zny4Xc0YJMXDP%2BC5TRGCg7M5Yne%2BgdFRBBs%2FRO2my%2BPwxfFJs6Dft89uVwycTekZ9MFGBlDzjfHAWu8QqpleA8cJKZgKn6POcue1D4UuoJk5P95ePb%2BBWan6aCv%2BPPjvz7TexcfMwlrP%2FvQY6pgHyAQlnvBFD2N57SfimFTfzqLOr8rBb%2Fh4IqGJMPIo6Zx3fuytSE3HRZ6E3emZZOf6bKjbUh16EvAMy3InlJZNekM8s%2BiBMl2GQSu%2Ftv8%2FIMOmH2jI%2BnxY%2BMvGB4alL814gi%2Fsu4y8exC6adnyUfNdbJzBomHsk5qnf2NCMfVDOCsKdLZPoBq5GZgrHYO9HsKYaDjKerzuxOskt2osqSXHmsMa3Isc%2B&X-Amz-Signature=dd056a3c8be92ae5b5210883917ae6334a55aa33cfab33f077860604317971fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJT2YI3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA6K0b%2Bw60IffyQkZlCw1IH4a9SgOhV7EiJG1Jn3FAmVAiBxMfszeq2dEtuhG6pBSWfQ0hEboNwmJ5c1IlGk2a3QSyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM27FLpFYKXE%2FPke7MKtwDvLBCzaKnRao5oq3CdcqJCkNzK4%2F0bm8i4OxFDsJS9k2L7AwVZB2lWorkAnIEVtEcTHozxqBAjXhHycDramabHc8hevDErXn6jYCWQ7A90WCRRb1XyKigCMJRsKe6O%2BIdv3rAxUHTLUF7ybzP10IAWACz8RjzmfQ1DyOlzvsqqrJ8a9g5X69%2Btov3e7uZ108GWLkMxg7awyz1lD75FKv51UTSE1rXZ1gRFRkPyky4Ja8vlVoxsFCYiQ3YSHr%2FzaIu8QQ5S2IcC3kGJfUOdW9w2qN13NkA03k5s0wG5G6PwJSI94Xhrv7u9HV%2FNuorrZOwXR3Rnf9sQYo4%2B3SfgkTzWmwMWWoHGKS3%2FAzNCFC4gXRxKfPtzY49udOPoUxlvOp7USMU859gNaeT5VnX8UL3UESk%2FYwE6njvfErY0eNv7vFPHJreYXj%2B00OudeJPJ%2F9zhAsT28XYR%2BGs9XPg0W44Tk90Oxm5hL1Pmhvm4S7l4QUj5pdg0A9zny4Xc0YJMXDP%2BC5TRGCg7M5Yne%2BgdFRBBs%2FRO2my%2BPwxfFJs6Dft89uVwycTekZ9MFGBlDzjfHAWu8QqpleA8cJKZgKn6POcue1D4UuoJk5P95ePb%2BBWan6aCv%2BPPjvz7TexcfMwlrP%2FvQY6pgHyAQlnvBFD2N57SfimFTfzqLOr8rBb%2Fh4IqGJMPIo6Zx3fuytSE3HRZ6E3emZZOf6bKjbUh16EvAMy3InlJZNekM8s%2BiBMl2GQSu%2Ftv8%2FIMOmH2jI%2BnxY%2BMvGB4alL814gi%2Fsu4y8exC6adnyUfNdbJzBomHsk5qnf2NCMfVDOCsKdLZPoBq5GZgrHYO9HsKYaDjKerzuxOskt2osqSXHmsMa3Isc%2B&X-Amz-Signature=b49ccb9cb76a6d261528f12104da961a63b9a1cf66030788c4ab69fbb151f063&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJT2YI3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA6K0b%2Bw60IffyQkZlCw1IH4a9SgOhV7EiJG1Jn3FAmVAiBxMfszeq2dEtuhG6pBSWfQ0hEboNwmJ5c1IlGk2a3QSyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM27FLpFYKXE%2FPke7MKtwDvLBCzaKnRao5oq3CdcqJCkNzK4%2F0bm8i4OxFDsJS9k2L7AwVZB2lWorkAnIEVtEcTHozxqBAjXhHycDramabHc8hevDErXn6jYCWQ7A90WCRRb1XyKigCMJRsKe6O%2BIdv3rAxUHTLUF7ybzP10IAWACz8RjzmfQ1DyOlzvsqqrJ8a9g5X69%2Btov3e7uZ108GWLkMxg7awyz1lD75FKv51UTSE1rXZ1gRFRkPyky4Ja8vlVoxsFCYiQ3YSHr%2FzaIu8QQ5S2IcC3kGJfUOdW9w2qN13NkA03k5s0wG5G6PwJSI94Xhrv7u9HV%2FNuorrZOwXR3Rnf9sQYo4%2B3SfgkTzWmwMWWoHGKS3%2FAzNCFC4gXRxKfPtzY49udOPoUxlvOp7USMU859gNaeT5VnX8UL3UESk%2FYwE6njvfErY0eNv7vFPHJreYXj%2B00OudeJPJ%2F9zhAsT28XYR%2BGs9XPg0W44Tk90Oxm5hL1Pmhvm4S7l4QUj5pdg0A9zny4Xc0YJMXDP%2BC5TRGCg7M5Yne%2BgdFRBBs%2FRO2my%2BPwxfFJs6Dft89uVwycTekZ9MFGBlDzjfHAWu8QqpleA8cJKZgKn6POcue1D4UuoJk5P95ePb%2BBWan6aCv%2BPPjvz7TexcfMwlrP%2FvQY6pgHyAQlnvBFD2N57SfimFTfzqLOr8rBb%2Fh4IqGJMPIo6Zx3fuytSE3HRZ6E3emZZOf6bKjbUh16EvAMy3InlJZNekM8s%2BiBMl2GQSu%2Ftv8%2FIMOmH2jI%2BnxY%2BMvGB4alL814gi%2Fsu4y8exC6adnyUfNdbJzBomHsk5qnf2NCMfVDOCsKdLZPoBq5GZgrHYO9HsKYaDjKerzuxOskt2osqSXHmsMa3Isc%2B&X-Amz-Signature=788fef245e69bc3acdc04db1ad1312b4131f2cad0bacf50b20aaf69fb73a7082&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJT2YI3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA6K0b%2Bw60IffyQkZlCw1IH4a9SgOhV7EiJG1Jn3FAmVAiBxMfszeq2dEtuhG6pBSWfQ0hEboNwmJ5c1IlGk2a3QSyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM27FLpFYKXE%2FPke7MKtwDvLBCzaKnRao5oq3CdcqJCkNzK4%2F0bm8i4OxFDsJS9k2L7AwVZB2lWorkAnIEVtEcTHozxqBAjXhHycDramabHc8hevDErXn6jYCWQ7A90WCRRb1XyKigCMJRsKe6O%2BIdv3rAxUHTLUF7ybzP10IAWACz8RjzmfQ1DyOlzvsqqrJ8a9g5X69%2Btov3e7uZ108GWLkMxg7awyz1lD75FKv51UTSE1rXZ1gRFRkPyky4Ja8vlVoxsFCYiQ3YSHr%2FzaIu8QQ5S2IcC3kGJfUOdW9w2qN13NkA03k5s0wG5G6PwJSI94Xhrv7u9HV%2FNuorrZOwXR3Rnf9sQYo4%2B3SfgkTzWmwMWWoHGKS3%2FAzNCFC4gXRxKfPtzY49udOPoUxlvOp7USMU859gNaeT5VnX8UL3UESk%2FYwE6njvfErY0eNv7vFPHJreYXj%2B00OudeJPJ%2F9zhAsT28XYR%2BGs9XPg0W44Tk90Oxm5hL1Pmhvm4S7l4QUj5pdg0A9zny4Xc0YJMXDP%2BC5TRGCg7M5Yne%2BgdFRBBs%2FRO2my%2BPwxfFJs6Dft89uVwycTekZ9MFGBlDzjfHAWu8QqpleA8cJKZgKn6POcue1D4UuoJk5P95ePb%2BBWan6aCv%2BPPjvz7TexcfMwlrP%2FvQY6pgHyAQlnvBFD2N57SfimFTfzqLOr8rBb%2Fh4IqGJMPIo6Zx3fuytSE3HRZ6E3emZZOf6bKjbUh16EvAMy3InlJZNekM8s%2BiBMl2GQSu%2Ftv8%2FIMOmH2jI%2BnxY%2BMvGB4alL814gi%2Fsu4y8exC6adnyUfNdbJzBomHsk5qnf2NCMfVDOCsKdLZPoBq5GZgrHYO9HsKYaDjKerzuxOskt2osqSXHmsMa3Isc%2B&X-Amz-Signature=787558a9b5f015b84570aac0466fb7dfbb63250e0bc7191dbc362b2e3e577dac&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJT2YI3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA6K0b%2Bw60IffyQkZlCw1IH4a9SgOhV7EiJG1Jn3FAmVAiBxMfszeq2dEtuhG6pBSWfQ0hEboNwmJ5c1IlGk2a3QSyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM27FLpFYKXE%2FPke7MKtwDvLBCzaKnRao5oq3CdcqJCkNzK4%2F0bm8i4OxFDsJS9k2L7AwVZB2lWorkAnIEVtEcTHozxqBAjXhHycDramabHc8hevDErXn6jYCWQ7A90WCRRb1XyKigCMJRsKe6O%2BIdv3rAxUHTLUF7ybzP10IAWACz8RjzmfQ1DyOlzvsqqrJ8a9g5X69%2Btov3e7uZ108GWLkMxg7awyz1lD75FKv51UTSE1rXZ1gRFRkPyky4Ja8vlVoxsFCYiQ3YSHr%2FzaIu8QQ5S2IcC3kGJfUOdW9w2qN13NkA03k5s0wG5G6PwJSI94Xhrv7u9HV%2FNuorrZOwXR3Rnf9sQYo4%2B3SfgkTzWmwMWWoHGKS3%2FAzNCFC4gXRxKfPtzY49udOPoUxlvOp7USMU859gNaeT5VnX8UL3UESk%2FYwE6njvfErY0eNv7vFPHJreYXj%2B00OudeJPJ%2F9zhAsT28XYR%2BGs9XPg0W44Tk90Oxm5hL1Pmhvm4S7l4QUj5pdg0A9zny4Xc0YJMXDP%2BC5TRGCg7M5Yne%2BgdFRBBs%2FRO2my%2BPwxfFJs6Dft89uVwycTekZ9MFGBlDzjfHAWu8QqpleA8cJKZgKn6POcue1D4UuoJk5P95ePb%2BBWan6aCv%2BPPjvz7TexcfMwlrP%2FvQY6pgHyAQlnvBFD2N57SfimFTfzqLOr8rBb%2Fh4IqGJMPIo6Zx3fuytSE3HRZ6E3emZZOf6bKjbUh16EvAMy3InlJZNekM8s%2BiBMl2GQSu%2Ftv8%2FIMOmH2jI%2BnxY%2BMvGB4alL814gi%2Fsu4y8exC6adnyUfNdbJzBomHsk5qnf2NCMfVDOCsKdLZPoBq5GZgrHYO9HsKYaDjKerzuxOskt2osqSXHmsMa3Isc%2B&X-Amz-Signature=cc510efc8fe56e21e8d4b20e231e2b451d0cefeb720cd0f25946e734fea07d59&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJT2YI3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA6K0b%2Bw60IffyQkZlCw1IH4a9SgOhV7EiJG1Jn3FAmVAiBxMfszeq2dEtuhG6pBSWfQ0hEboNwmJ5c1IlGk2a3QSyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM27FLpFYKXE%2FPke7MKtwDvLBCzaKnRao5oq3CdcqJCkNzK4%2F0bm8i4OxFDsJS9k2L7AwVZB2lWorkAnIEVtEcTHozxqBAjXhHycDramabHc8hevDErXn6jYCWQ7A90WCRRb1XyKigCMJRsKe6O%2BIdv3rAxUHTLUF7ybzP10IAWACz8RjzmfQ1DyOlzvsqqrJ8a9g5X69%2Btov3e7uZ108GWLkMxg7awyz1lD75FKv51UTSE1rXZ1gRFRkPyky4Ja8vlVoxsFCYiQ3YSHr%2FzaIu8QQ5S2IcC3kGJfUOdW9w2qN13NkA03k5s0wG5G6PwJSI94Xhrv7u9HV%2FNuorrZOwXR3Rnf9sQYo4%2B3SfgkTzWmwMWWoHGKS3%2FAzNCFC4gXRxKfPtzY49udOPoUxlvOp7USMU859gNaeT5VnX8UL3UESk%2FYwE6njvfErY0eNv7vFPHJreYXj%2B00OudeJPJ%2F9zhAsT28XYR%2BGs9XPg0W44Tk90Oxm5hL1Pmhvm4S7l4QUj5pdg0A9zny4Xc0YJMXDP%2BC5TRGCg7M5Yne%2BgdFRBBs%2FRO2my%2BPwxfFJs6Dft89uVwycTekZ9MFGBlDzjfHAWu8QqpleA8cJKZgKn6POcue1D4UuoJk5P95ePb%2BBWan6aCv%2BPPjvz7TexcfMwlrP%2FvQY6pgHyAQlnvBFD2N57SfimFTfzqLOr8rBb%2Fh4IqGJMPIo6Zx3fuytSE3HRZ6E3emZZOf6bKjbUh16EvAMy3InlJZNekM8s%2BiBMl2GQSu%2Ftv8%2FIMOmH2jI%2BnxY%2BMvGB4alL814gi%2Fsu4y8exC6adnyUfNdbJzBomHsk5qnf2NCMfVDOCsKdLZPoBq5GZgrHYO9HsKYaDjKerzuxOskt2osqSXHmsMa3Isc%2B&X-Amz-Signature=3cde040bed58165c2aa8e59fb90d0a70819b6f9c00b7bc4b06a2ffa9cbede2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJT2YI3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA6K0b%2Bw60IffyQkZlCw1IH4a9SgOhV7EiJG1Jn3FAmVAiBxMfszeq2dEtuhG6pBSWfQ0hEboNwmJ5c1IlGk2a3QSyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM27FLpFYKXE%2FPke7MKtwDvLBCzaKnRao5oq3CdcqJCkNzK4%2F0bm8i4OxFDsJS9k2L7AwVZB2lWorkAnIEVtEcTHozxqBAjXhHycDramabHc8hevDErXn6jYCWQ7A90WCRRb1XyKigCMJRsKe6O%2BIdv3rAxUHTLUF7ybzP10IAWACz8RjzmfQ1DyOlzvsqqrJ8a9g5X69%2Btov3e7uZ108GWLkMxg7awyz1lD75FKv51UTSE1rXZ1gRFRkPyky4Ja8vlVoxsFCYiQ3YSHr%2FzaIu8QQ5S2IcC3kGJfUOdW9w2qN13NkA03k5s0wG5G6PwJSI94Xhrv7u9HV%2FNuorrZOwXR3Rnf9sQYo4%2B3SfgkTzWmwMWWoHGKS3%2FAzNCFC4gXRxKfPtzY49udOPoUxlvOp7USMU859gNaeT5VnX8UL3UESk%2FYwE6njvfErY0eNv7vFPHJreYXj%2B00OudeJPJ%2F9zhAsT28XYR%2BGs9XPg0W44Tk90Oxm5hL1Pmhvm4S7l4QUj5pdg0A9zny4Xc0YJMXDP%2BC5TRGCg7M5Yne%2BgdFRBBs%2FRO2my%2BPwxfFJs6Dft89uVwycTekZ9MFGBlDzjfHAWu8QqpleA8cJKZgKn6POcue1D4UuoJk5P95ePb%2BBWan6aCv%2BPPjvz7TexcfMwlrP%2FvQY6pgHyAQlnvBFD2N57SfimFTfzqLOr8rBb%2Fh4IqGJMPIo6Zx3fuytSE3HRZ6E3emZZOf6bKjbUh16EvAMy3InlJZNekM8s%2BiBMl2GQSu%2Ftv8%2FIMOmH2jI%2BnxY%2BMvGB4alL814gi%2Fsu4y8exC6adnyUfNdbJzBomHsk5qnf2NCMfVDOCsKdLZPoBq5GZgrHYO9HsKYaDjKerzuxOskt2osqSXHmsMa3Isc%2B&X-Amz-Signature=375306ba4577f72ac46154558f371b88cf66a4b3aa5298074153ce23e487f2e4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
