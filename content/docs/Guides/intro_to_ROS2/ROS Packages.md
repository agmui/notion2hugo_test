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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3KEJ7U%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCeQEZkE58Q5VNQIn9e%2FNDuNz8c24EK9eBCU2KFSPs31AIhAJYRf%2BMEV%2F%2FVpBRsY19zQ4r7qMUdK%2FCTHr5Qje%2Br4HM9Kv8DCD8QABoMNjM3NDIzMTgzODA1IgyFa9PnLesd5lwE5Esq3AOY1DLcxF7OgAx4cMF0ch5%2BigPuIDIrHDL94I2DutXoqla%2Bv68bY3RY7Sc1tK4grRNeDzehPC9XhT1ayWQZyAuSseC7Yqv3ZGwSAXNABZqqbU1mRMBqjmwsKCMRcyAP3z9kaW06E03Ip9egdcd9lpo7v2uvIi%2F9En4x9h2Ibm18Cvrbp2hU0Sda5Go568PyVw3JalaOYJ2pOt7o6I23AFVsZP60t4meoDYDgQeAGE7TLHzx1XO90lw1F88SnetXCCj9YrGJK1YOAcOWyQPq48L2qfIWHvp618W2hwiw4kS%2Bb54fMAo%2BeNzqsTCdR8oagJeYKzL5k0RZB6UrDu8ZWZ2y4NvNlhdmt0%2FZL90xasuUa4TKzR1oeKxWf7C8utqNVjexNvHFGpQDMd7PMelCptHS7cbAu9aQrKXtluQkMppYgvyjGFA8zi1JP%2FAjwXzpC3H2%2FvL%2FdFKR8IELx6H%2BvWB0QIUj80VE140B8AcybhOSdbjLgydtyouvbTlgS%2Fr6ecRwRGQjihFfjnk5osu3ObWoIJMBn4mEdPbLK9oB7ZTRSbvgQzxTXn4hbh00XNl1EJw7qRiZtKLFyrsomj30OmJ10un7bwl1SbSfIEfW81Wthpkg%2FTE9O7ihlFvVvTD01NfDBjqkAXVY1ndqA%2BOY%2FsGaVNbe%2Fx2nDYQlkBpCxM0SSOFH9IQhXlAb3apXBtTWm1sZyaRZ1zpLQiLQdkYRijkYXqVQnCniM4lmIjSsqW3tpv6jXFUz5Gqj%2BPlaDJSkhlk3jPnSpW4D6GTMtVYK1e%2BNHe6IfMtpv%2BEt%2Bu6a67npQrpCcnFrNa6VzbDhkIpuurtxKRTn6mt5zwNhAxwh8W%2Fsh5PrFfw9g0Y5&X-Amz-Signature=b4ddeae88aa2fc606c41bd5dcde99716a8404cb560a06c41e07e0f9519bfe0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3KEJ7U%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCeQEZkE58Q5VNQIn9e%2FNDuNz8c24EK9eBCU2KFSPs31AIhAJYRf%2BMEV%2F%2FVpBRsY19zQ4r7qMUdK%2FCTHr5Qje%2Br4HM9Kv8DCD8QABoMNjM3NDIzMTgzODA1IgyFa9PnLesd5lwE5Esq3AOY1DLcxF7OgAx4cMF0ch5%2BigPuIDIrHDL94I2DutXoqla%2Bv68bY3RY7Sc1tK4grRNeDzehPC9XhT1ayWQZyAuSseC7Yqv3ZGwSAXNABZqqbU1mRMBqjmwsKCMRcyAP3z9kaW06E03Ip9egdcd9lpo7v2uvIi%2F9En4x9h2Ibm18Cvrbp2hU0Sda5Go568PyVw3JalaOYJ2pOt7o6I23AFVsZP60t4meoDYDgQeAGE7TLHzx1XO90lw1F88SnetXCCj9YrGJK1YOAcOWyQPq48L2qfIWHvp618W2hwiw4kS%2Bb54fMAo%2BeNzqsTCdR8oagJeYKzL5k0RZB6UrDu8ZWZ2y4NvNlhdmt0%2FZL90xasuUa4TKzR1oeKxWf7C8utqNVjexNvHFGpQDMd7PMelCptHS7cbAu9aQrKXtluQkMppYgvyjGFA8zi1JP%2FAjwXzpC3H2%2FvL%2FdFKR8IELx6H%2BvWB0QIUj80VE140B8AcybhOSdbjLgydtyouvbTlgS%2Fr6ecRwRGQjihFfjnk5osu3ObWoIJMBn4mEdPbLK9oB7ZTRSbvgQzxTXn4hbh00XNl1EJw7qRiZtKLFyrsomj30OmJ10un7bwl1SbSfIEfW81Wthpkg%2FTE9O7ihlFvVvTD01NfDBjqkAXVY1ndqA%2BOY%2FsGaVNbe%2Fx2nDYQlkBpCxM0SSOFH9IQhXlAb3apXBtTWm1sZyaRZ1zpLQiLQdkYRijkYXqVQnCniM4lmIjSsqW3tpv6jXFUz5Gqj%2BPlaDJSkhlk3jPnSpW4D6GTMtVYK1e%2BNHe6IfMtpv%2BEt%2Bu6a67npQrpCcnFrNa6VzbDhkIpuurtxKRTn6mt5zwNhAxwh8W%2Fsh5PrFfw9g0Y5&X-Amz-Signature=fd63959197adc45a46e576730b4e7e62528866e5fa31102fda50f415ec53539c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3KEJ7U%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCeQEZkE58Q5VNQIn9e%2FNDuNz8c24EK9eBCU2KFSPs31AIhAJYRf%2BMEV%2F%2FVpBRsY19zQ4r7qMUdK%2FCTHr5Qje%2Br4HM9Kv8DCD8QABoMNjM3NDIzMTgzODA1IgyFa9PnLesd5lwE5Esq3AOY1DLcxF7OgAx4cMF0ch5%2BigPuIDIrHDL94I2DutXoqla%2Bv68bY3RY7Sc1tK4grRNeDzehPC9XhT1ayWQZyAuSseC7Yqv3ZGwSAXNABZqqbU1mRMBqjmwsKCMRcyAP3z9kaW06E03Ip9egdcd9lpo7v2uvIi%2F9En4x9h2Ibm18Cvrbp2hU0Sda5Go568PyVw3JalaOYJ2pOt7o6I23AFVsZP60t4meoDYDgQeAGE7TLHzx1XO90lw1F88SnetXCCj9YrGJK1YOAcOWyQPq48L2qfIWHvp618W2hwiw4kS%2Bb54fMAo%2BeNzqsTCdR8oagJeYKzL5k0RZB6UrDu8ZWZ2y4NvNlhdmt0%2FZL90xasuUa4TKzR1oeKxWf7C8utqNVjexNvHFGpQDMd7PMelCptHS7cbAu9aQrKXtluQkMppYgvyjGFA8zi1JP%2FAjwXzpC3H2%2FvL%2FdFKR8IELx6H%2BvWB0QIUj80VE140B8AcybhOSdbjLgydtyouvbTlgS%2Fr6ecRwRGQjihFfjnk5osu3ObWoIJMBn4mEdPbLK9oB7ZTRSbvgQzxTXn4hbh00XNl1EJw7qRiZtKLFyrsomj30OmJ10un7bwl1SbSfIEfW81Wthpkg%2FTE9O7ihlFvVvTD01NfDBjqkAXVY1ndqA%2BOY%2FsGaVNbe%2Fx2nDYQlkBpCxM0SSOFH9IQhXlAb3apXBtTWm1sZyaRZ1zpLQiLQdkYRijkYXqVQnCniM4lmIjSsqW3tpv6jXFUz5Gqj%2BPlaDJSkhlk3jPnSpW4D6GTMtVYK1e%2BNHe6IfMtpv%2BEt%2Bu6a67npQrpCcnFrNa6VzbDhkIpuurtxKRTn6mt5zwNhAxwh8W%2Fsh5PrFfw9g0Y5&X-Amz-Signature=0c742f2dc83c9f24b9b4ef637ab8bb26ac81ee78e5ec86ea33235550e69a15e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3KEJ7U%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCeQEZkE58Q5VNQIn9e%2FNDuNz8c24EK9eBCU2KFSPs31AIhAJYRf%2BMEV%2F%2FVpBRsY19zQ4r7qMUdK%2FCTHr5Qje%2Br4HM9Kv8DCD8QABoMNjM3NDIzMTgzODA1IgyFa9PnLesd5lwE5Esq3AOY1DLcxF7OgAx4cMF0ch5%2BigPuIDIrHDL94I2DutXoqla%2Bv68bY3RY7Sc1tK4grRNeDzehPC9XhT1ayWQZyAuSseC7Yqv3ZGwSAXNABZqqbU1mRMBqjmwsKCMRcyAP3z9kaW06E03Ip9egdcd9lpo7v2uvIi%2F9En4x9h2Ibm18Cvrbp2hU0Sda5Go568PyVw3JalaOYJ2pOt7o6I23AFVsZP60t4meoDYDgQeAGE7TLHzx1XO90lw1F88SnetXCCj9YrGJK1YOAcOWyQPq48L2qfIWHvp618W2hwiw4kS%2Bb54fMAo%2BeNzqsTCdR8oagJeYKzL5k0RZB6UrDu8ZWZ2y4NvNlhdmt0%2FZL90xasuUa4TKzR1oeKxWf7C8utqNVjexNvHFGpQDMd7PMelCptHS7cbAu9aQrKXtluQkMppYgvyjGFA8zi1JP%2FAjwXzpC3H2%2FvL%2FdFKR8IELx6H%2BvWB0QIUj80VE140B8AcybhOSdbjLgydtyouvbTlgS%2Fr6ecRwRGQjihFfjnk5osu3ObWoIJMBn4mEdPbLK9oB7ZTRSbvgQzxTXn4hbh00XNl1EJw7qRiZtKLFyrsomj30OmJ10un7bwl1SbSfIEfW81Wthpkg%2FTE9O7ihlFvVvTD01NfDBjqkAXVY1ndqA%2BOY%2FsGaVNbe%2Fx2nDYQlkBpCxM0SSOFH9IQhXlAb3apXBtTWm1sZyaRZ1zpLQiLQdkYRijkYXqVQnCniM4lmIjSsqW3tpv6jXFUz5Gqj%2BPlaDJSkhlk3jPnSpW4D6GTMtVYK1e%2BNHe6IfMtpv%2BEt%2Bu6a67npQrpCcnFrNa6VzbDhkIpuurtxKRTn6mt5zwNhAxwh8W%2Fsh5PrFfw9g0Y5&X-Amz-Signature=84eaad9bfb7b22725ae8d95705de5ed742811aa8d8f74bbc344d6ab7585c77f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3KEJ7U%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCeQEZkE58Q5VNQIn9e%2FNDuNz8c24EK9eBCU2KFSPs31AIhAJYRf%2BMEV%2F%2FVpBRsY19zQ4r7qMUdK%2FCTHr5Qje%2Br4HM9Kv8DCD8QABoMNjM3NDIzMTgzODA1IgyFa9PnLesd5lwE5Esq3AOY1DLcxF7OgAx4cMF0ch5%2BigPuIDIrHDL94I2DutXoqla%2Bv68bY3RY7Sc1tK4grRNeDzehPC9XhT1ayWQZyAuSseC7Yqv3ZGwSAXNABZqqbU1mRMBqjmwsKCMRcyAP3z9kaW06E03Ip9egdcd9lpo7v2uvIi%2F9En4x9h2Ibm18Cvrbp2hU0Sda5Go568PyVw3JalaOYJ2pOt7o6I23AFVsZP60t4meoDYDgQeAGE7TLHzx1XO90lw1F88SnetXCCj9YrGJK1YOAcOWyQPq48L2qfIWHvp618W2hwiw4kS%2Bb54fMAo%2BeNzqsTCdR8oagJeYKzL5k0RZB6UrDu8ZWZ2y4NvNlhdmt0%2FZL90xasuUa4TKzR1oeKxWf7C8utqNVjexNvHFGpQDMd7PMelCptHS7cbAu9aQrKXtluQkMppYgvyjGFA8zi1JP%2FAjwXzpC3H2%2FvL%2FdFKR8IELx6H%2BvWB0QIUj80VE140B8AcybhOSdbjLgydtyouvbTlgS%2Fr6ecRwRGQjihFfjnk5osu3ObWoIJMBn4mEdPbLK9oB7ZTRSbvgQzxTXn4hbh00XNl1EJw7qRiZtKLFyrsomj30OmJ10un7bwl1SbSfIEfW81Wthpkg%2FTE9O7ihlFvVvTD01NfDBjqkAXVY1ndqA%2BOY%2FsGaVNbe%2Fx2nDYQlkBpCxM0SSOFH9IQhXlAb3apXBtTWm1sZyaRZ1zpLQiLQdkYRijkYXqVQnCniM4lmIjSsqW3tpv6jXFUz5Gqj%2BPlaDJSkhlk3jPnSpW4D6GTMtVYK1e%2BNHe6IfMtpv%2BEt%2Bu6a67npQrpCcnFrNa6VzbDhkIpuurtxKRTn6mt5zwNhAxwh8W%2Fsh5PrFfw9g0Y5&X-Amz-Signature=acb736a40b2db58f5a68b5c757b09cf1c2b6c8d7d95595809a41725093dca313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3KEJ7U%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCeQEZkE58Q5VNQIn9e%2FNDuNz8c24EK9eBCU2KFSPs31AIhAJYRf%2BMEV%2F%2FVpBRsY19zQ4r7qMUdK%2FCTHr5Qje%2Br4HM9Kv8DCD8QABoMNjM3NDIzMTgzODA1IgyFa9PnLesd5lwE5Esq3AOY1DLcxF7OgAx4cMF0ch5%2BigPuIDIrHDL94I2DutXoqla%2Bv68bY3RY7Sc1tK4grRNeDzehPC9XhT1ayWQZyAuSseC7Yqv3ZGwSAXNABZqqbU1mRMBqjmwsKCMRcyAP3z9kaW06E03Ip9egdcd9lpo7v2uvIi%2F9En4x9h2Ibm18Cvrbp2hU0Sda5Go568PyVw3JalaOYJ2pOt7o6I23AFVsZP60t4meoDYDgQeAGE7TLHzx1XO90lw1F88SnetXCCj9YrGJK1YOAcOWyQPq48L2qfIWHvp618W2hwiw4kS%2Bb54fMAo%2BeNzqsTCdR8oagJeYKzL5k0RZB6UrDu8ZWZ2y4NvNlhdmt0%2FZL90xasuUa4TKzR1oeKxWf7C8utqNVjexNvHFGpQDMd7PMelCptHS7cbAu9aQrKXtluQkMppYgvyjGFA8zi1JP%2FAjwXzpC3H2%2FvL%2FdFKR8IELx6H%2BvWB0QIUj80VE140B8AcybhOSdbjLgydtyouvbTlgS%2Fr6ecRwRGQjihFfjnk5osu3ObWoIJMBn4mEdPbLK9oB7ZTRSbvgQzxTXn4hbh00XNl1EJw7qRiZtKLFyrsomj30OmJ10un7bwl1SbSfIEfW81Wthpkg%2FTE9O7ihlFvVvTD01NfDBjqkAXVY1ndqA%2BOY%2FsGaVNbe%2Fx2nDYQlkBpCxM0SSOFH9IQhXlAb3apXBtTWm1sZyaRZ1zpLQiLQdkYRijkYXqVQnCniM4lmIjSsqW3tpv6jXFUz5Gqj%2BPlaDJSkhlk3jPnSpW4D6GTMtVYK1e%2BNHe6IfMtpv%2BEt%2Bu6a67npQrpCcnFrNa6VzbDhkIpuurtxKRTn6mt5zwNhAxwh8W%2Fsh5PrFfw9g0Y5&X-Amz-Signature=42305d329820dbb66e64fb745ac489f6c6c8f11fc9d57777385310c0214eb5ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3KEJ7U%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCeQEZkE58Q5VNQIn9e%2FNDuNz8c24EK9eBCU2KFSPs31AIhAJYRf%2BMEV%2F%2FVpBRsY19zQ4r7qMUdK%2FCTHr5Qje%2Br4HM9Kv8DCD8QABoMNjM3NDIzMTgzODA1IgyFa9PnLesd5lwE5Esq3AOY1DLcxF7OgAx4cMF0ch5%2BigPuIDIrHDL94I2DutXoqla%2Bv68bY3RY7Sc1tK4grRNeDzehPC9XhT1ayWQZyAuSseC7Yqv3ZGwSAXNABZqqbU1mRMBqjmwsKCMRcyAP3z9kaW06E03Ip9egdcd9lpo7v2uvIi%2F9En4x9h2Ibm18Cvrbp2hU0Sda5Go568PyVw3JalaOYJ2pOt7o6I23AFVsZP60t4meoDYDgQeAGE7TLHzx1XO90lw1F88SnetXCCj9YrGJK1YOAcOWyQPq48L2qfIWHvp618W2hwiw4kS%2Bb54fMAo%2BeNzqsTCdR8oagJeYKzL5k0RZB6UrDu8ZWZ2y4NvNlhdmt0%2FZL90xasuUa4TKzR1oeKxWf7C8utqNVjexNvHFGpQDMd7PMelCptHS7cbAu9aQrKXtluQkMppYgvyjGFA8zi1JP%2FAjwXzpC3H2%2FvL%2FdFKR8IELx6H%2BvWB0QIUj80VE140B8AcybhOSdbjLgydtyouvbTlgS%2Fr6ecRwRGQjihFfjnk5osu3ObWoIJMBn4mEdPbLK9oB7ZTRSbvgQzxTXn4hbh00XNl1EJw7qRiZtKLFyrsomj30OmJ10un7bwl1SbSfIEfW81Wthpkg%2FTE9O7ihlFvVvTD01NfDBjqkAXVY1ndqA%2BOY%2FsGaVNbe%2Fx2nDYQlkBpCxM0SSOFH9IQhXlAb3apXBtTWm1sZyaRZ1zpLQiLQdkYRijkYXqVQnCniM4lmIjSsqW3tpv6jXFUz5Gqj%2BPlaDJSkhlk3jPnSpW4D6GTMtVYK1e%2BNHe6IfMtpv%2BEt%2Bu6a67npQrpCcnFrNa6VzbDhkIpuurtxKRTn6mt5zwNhAxwh8W%2Fsh5PrFfw9g0Y5&X-Amz-Signature=3571816e55a4be9f5f80428eb4f7b5b8fc1142b186c1ebd204d801f50bf5cffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
