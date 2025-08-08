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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETBLEBQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICEfLRca6blKU70%2FC5%2BFxlcmGBFylA5956oUQ2MgFZCSAiBre%2BbWLgHTDaUKrmDZno2JRimahIYQaGWBeUNx4JvS3yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8WKpUlSoFvEwzdTKtwDhVH%2FRZea5ofL5oA6cJdOtniidqpirVGKmdHnobs2XvVNghC2iaarmxoL1GvbsGmcyvtJxJDf%2B2ss%2BmlCIOm0ZLvPClkMHLVag7yj0plC3JrBAHNKAwVblKPWKyilOAqtmRGhg0sr4HUhvAMS0Qft%2Bbuty8WFb7RsKzcMDNu5eVx3Bb7wWx7VEGNA236HwsWER%2Fteaetb83vMJrBUsOn1zGZgRd%2F4vdcWoxVTDCxwJSkcleUdwKWd5hKWCamVjxT1TsIYYXNPTwMMtPrCVcF20NLfLbhAMR3kyqfLjorxXINEr%2FX%2FQh34g6%2BpWyUDTdbR1wVcmh9enajcuVjTkI68QKgmUMf%2F5HKCKE%2BH04ussAhNNXlNotw0QgDBfHxgnxutXxBbWjmpfriaHgJw94Sk7fMmU8UQVsJyvqs3ILahVxzbLSs0mknKDOPFiUICajflT06PvGf%2BZN2J%2FLrprglgvK5BeNt%2FdmgLA2DXJ0Ww15RlIWewAl938tehmqrK8Snyw2v4qDUI%2BKfRxvnbbUue5aA6MaVGy3pXYUkbntBiV9i02YeGcGi1V7wjkg7YehqQSrp0ipdOhezu4BL3bTYuYXMjNz8BpkY3CCO%2FxVmpBTwcY3TAwrwu38no%2FSIwqafYxAY6pgE%2FFfC3MXeNxCktcoNW0Afj5M5k%2B263w1%2BPJw00N0G4%2BT8nsiZcaG14wDyegREEzS2j%2F5DXtP5w62SuhvTmAMu%2BBVYw40Bb%2F28WOXLMRSzvF7mTlSvof9n3r%2BrcCi0BOiWsabaPQwyiGL54I%2FFPa1ZMwo5wzRIAAOlkE4ad6ZX%2B%2FmN%2FfSP6wV389YYi2SY7DLEtgpIALfGyHAy%2BxEV4vy6zIUZftpik&X-Amz-Signature=a137864d692c603bccf94ecc06dd03c91f546f0cf042f9119c9cfcf936e47a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETBLEBQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICEfLRca6blKU70%2FC5%2BFxlcmGBFylA5956oUQ2MgFZCSAiBre%2BbWLgHTDaUKrmDZno2JRimahIYQaGWBeUNx4JvS3yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8WKpUlSoFvEwzdTKtwDhVH%2FRZea5ofL5oA6cJdOtniidqpirVGKmdHnobs2XvVNghC2iaarmxoL1GvbsGmcyvtJxJDf%2B2ss%2BmlCIOm0ZLvPClkMHLVag7yj0plC3JrBAHNKAwVblKPWKyilOAqtmRGhg0sr4HUhvAMS0Qft%2Bbuty8WFb7RsKzcMDNu5eVx3Bb7wWx7VEGNA236HwsWER%2Fteaetb83vMJrBUsOn1zGZgRd%2F4vdcWoxVTDCxwJSkcleUdwKWd5hKWCamVjxT1TsIYYXNPTwMMtPrCVcF20NLfLbhAMR3kyqfLjorxXINEr%2FX%2FQh34g6%2BpWyUDTdbR1wVcmh9enajcuVjTkI68QKgmUMf%2F5HKCKE%2BH04ussAhNNXlNotw0QgDBfHxgnxutXxBbWjmpfriaHgJw94Sk7fMmU8UQVsJyvqs3ILahVxzbLSs0mknKDOPFiUICajflT06PvGf%2BZN2J%2FLrprglgvK5BeNt%2FdmgLA2DXJ0Ww15RlIWewAl938tehmqrK8Snyw2v4qDUI%2BKfRxvnbbUue5aA6MaVGy3pXYUkbntBiV9i02YeGcGi1V7wjkg7YehqQSrp0ipdOhezu4BL3bTYuYXMjNz8BpkY3CCO%2FxVmpBTwcY3TAwrwu38no%2FSIwqafYxAY6pgE%2FFfC3MXeNxCktcoNW0Afj5M5k%2B263w1%2BPJw00N0G4%2BT8nsiZcaG14wDyegREEzS2j%2F5DXtP5w62SuhvTmAMu%2BBVYw40Bb%2F28WOXLMRSzvF7mTlSvof9n3r%2BrcCi0BOiWsabaPQwyiGL54I%2FFPa1ZMwo5wzRIAAOlkE4ad6ZX%2B%2FmN%2FfSP6wV389YYi2SY7DLEtgpIALfGyHAy%2BxEV4vy6zIUZftpik&X-Amz-Signature=946309c5ba053c4679dbb886ae0796212781e2b403d426ea7d77f80ff2f60583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETBLEBQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICEfLRca6blKU70%2FC5%2BFxlcmGBFylA5956oUQ2MgFZCSAiBre%2BbWLgHTDaUKrmDZno2JRimahIYQaGWBeUNx4JvS3yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8WKpUlSoFvEwzdTKtwDhVH%2FRZea5ofL5oA6cJdOtniidqpirVGKmdHnobs2XvVNghC2iaarmxoL1GvbsGmcyvtJxJDf%2B2ss%2BmlCIOm0ZLvPClkMHLVag7yj0plC3JrBAHNKAwVblKPWKyilOAqtmRGhg0sr4HUhvAMS0Qft%2Bbuty8WFb7RsKzcMDNu5eVx3Bb7wWx7VEGNA236HwsWER%2Fteaetb83vMJrBUsOn1zGZgRd%2F4vdcWoxVTDCxwJSkcleUdwKWd5hKWCamVjxT1TsIYYXNPTwMMtPrCVcF20NLfLbhAMR3kyqfLjorxXINEr%2FX%2FQh34g6%2BpWyUDTdbR1wVcmh9enajcuVjTkI68QKgmUMf%2F5HKCKE%2BH04ussAhNNXlNotw0QgDBfHxgnxutXxBbWjmpfriaHgJw94Sk7fMmU8UQVsJyvqs3ILahVxzbLSs0mknKDOPFiUICajflT06PvGf%2BZN2J%2FLrprglgvK5BeNt%2FdmgLA2DXJ0Ww15RlIWewAl938tehmqrK8Snyw2v4qDUI%2BKfRxvnbbUue5aA6MaVGy3pXYUkbntBiV9i02YeGcGi1V7wjkg7YehqQSrp0ipdOhezu4BL3bTYuYXMjNz8BpkY3CCO%2FxVmpBTwcY3TAwrwu38no%2FSIwqafYxAY6pgE%2FFfC3MXeNxCktcoNW0Afj5M5k%2B263w1%2BPJw00N0G4%2BT8nsiZcaG14wDyegREEzS2j%2F5DXtP5w62SuhvTmAMu%2BBVYw40Bb%2F28WOXLMRSzvF7mTlSvof9n3r%2BrcCi0BOiWsabaPQwyiGL54I%2FFPa1ZMwo5wzRIAAOlkE4ad6ZX%2B%2FmN%2FfSP6wV389YYi2SY7DLEtgpIALfGyHAy%2BxEV4vy6zIUZftpik&X-Amz-Signature=f155618f3c02f4ad88426cb72eb875063f32f09679be48695bcf7446699d3275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETBLEBQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICEfLRca6blKU70%2FC5%2BFxlcmGBFylA5956oUQ2MgFZCSAiBre%2BbWLgHTDaUKrmDZno2JRimahIYQaGWBeUNx4JvS3yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8WKpUlSoFvEwzdTKtwDhVH%2FRZea5ofL5oA6cJdOtniidqpirVGKmdHnobs2XvVNghC2iaarmxoL1GvbsGmcyvtJxJDf%2B2ss%2BmlCIOm0ZLvPClkMHLVag7yj0plC3JrBAHNKAwVblKPWKyilOAqtmRGhg0sr4HUhvAMS0Qft%2Bbuty8WFb7RsKzcMDNu5eVx3Bb7wWx7VEGNA236HwsWER%2Fteaetb83vMJrBUsOn1zGZgRd%2F4vdcWoxVTDCxwJSkcleUdwKWd5hKWCamVjxT1TsIYYXNPTwMMtPrCVcF20NLfLbhAMR3kyqfLjorxXINEr%2FX%2FQh34g6%2BpWyUDTdbR1wVcmh9enajcuVjTkI68QKgmUMf%2F5HKCKE%2BH04ussAhNNXlNotw0QgDBfHxgnxutXxBbWjmpfriaHgJw94Sk7fMmU8UQVsJyvqs3ILahVxzbLSs0mknKDOPFiUICajflT06PvGf%2BZN2J%2FLrprglgvK5BeNt%2FdmgLA2DXJ0Ww15RlIWewAl938tehmqrK8Snyw2v4qDUI%2BKfRxvnbbUue5aA6MaVGy3pXYUkbntBiV9i02YeGcGi1V7wjkg7YehqQSrp0ipdOhezu4BL3bTYuYXMjNz8BpkY3CCO%2FxVmpBTwcY3TAwrwu38no%2FSIwqafYxAY6pgE%2FFfC3MXeNxCktcoNW0Afj5M5k%2B263w1%2BPJw00N0G4%2BT8nsiZcaG14wDyegREEzS2j%2F5DXtP5w62SuhvTmAMu%2BBVYw40Bb%2F28WOXLMRSzvF7mTlSvof9n3r%2BrcCi0BOiWsabaPQwyiGL54I%2FFPa1ZMwo5wzRIAAOlkE4ad6ZX%2B%2FmN%2FfSP6wV389YYi2SY7DLEtgpIALfGyHAy%2BxEV4vy6zIUZftpik&X-Amz-Signature=9afe985c1e1a680d81a1055ae6d4508ca701d5bfb2a50e2d6614288b7227c7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETBLEBQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICEfLRca6blKU70%2FC5%2BFxlcmGBFylA5956oUQ2MgFZCSAiBre%2BbWLgHTDaUKrmDZno2JRimahIYQaGWBeUNx4JvS3yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8WKpUlSoFvEwzdTKtwDhVH%2FRZea5ofL5oA6cJdOtniidqpirVGKmdHnobs2XvVNghC2iaarmxoL1GvbsGmcyvtJxJDf%2B2ss%2BmlCIOm0ZLvPClkMHLVag7yj0plC3JrBAHNKAwVblKPWKyilOAqtmRGhg0sr4HUhvAMS0Qft%2Bbuty8WFb7RsKzcMDNu5eVx3Bb7wWx7VEGNA236HwsWER%2Fteaetb83vMJrBUsOn1zGZgRd%2F4vdcWoxVTDCxwJSkcleUdwKWd5hKWCamVjxT1TsIYYXNPTwMMtPrCVcF20NLfLbhAMR3kyqfLjorxXINEr%2FX%2FQh34g6%2BpWyUDTdbR1wVcmh9enajcuVjTkI68QKgmUMf%2F5HKCKE%2BH04ussAhNNXlNotw0QgDBfHxgnxutXxBbWjmpfriaHgJw94Sk7fMmU8UQVsJyvqs3ILahVxzbLSs0mknKDOPFiUICajflT06PvGf%2BZN2J%2FLrprglgvK5BeNt%2FdmgLA2DXJ0Ww15RlIWewAl938tehmqrK8Snyw2v4qDUI%2BKfRxvnbbUue5aA6MaVGy3pXYUkbntBiV9i02YeGcGi1V7wjkg7YehqQSrp0ipdOhezu4BL3bTYuYXMjNz8BpkY3CCO%2FxVmpBTwcY3TAwrwu38no%2FSIwqafYxAY6pgE%2FFfC3MXeNxCktcoNW0Afj5M5k%2B263w1%2BPJw00N0G4%2BT8nsiZcaG14wDyegREEzS2j%2F5DXtP5w62SuhvTmAMu%2BBVYw40Bb%2F28WOXLMRSzvF7mTlSvof9n3r%2BrcCi0BOiWsabaPQwyiGL54I%2FFPa1ZMwo5wzRIAAOlkE4ad6ZX%2B%2FmN%2FfSP6wV389YYi2SY7DLEtgpIALfGyHAy%2BxEV4vy6zIUZftpik&X-Amz-Signature=65d009f644c3155106e7826417e4e3dc6e9b8fff04413c9388b285aa281c1116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETBLEBQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICEfLRca6blKU70%2FC5%2BFxlcmGBFylA5956oUQ2MgFZCSAiBre%2BbWLgHTDaUKrmDZno2JRimahIYQaGWBeUNx4JvS3yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8WKpUlSoFvEwzdTKtwDhVH%2FRZea5ofL5oA6cJdOtniidqpirVGKmdHnobs2XvVNghC2iaarmxoL1GvbsGmcyvtJxJDf%2B2ss%2BmlCIOm0ZLvPClkMHLVag7yj0plC3JrBAHNKAwVblKPWKyilOAqtmRGhg0sr4HUhvAMS0Qft%2Bbuty8WFb7RsKzcMDNu5eVx3Bb7wWx7VEGNA236HwsWER%2Fteaetb83vMJrBUsOn1zGZgRd%2F4vdcWoxVTDCxwJSkcleUdwKWd5hKWCamVjxT1TsIYYXNPTwMMtPrCVcF20NLfLbhAMR3kyqfLjorxXINEr%2FX%2FQh34g6%2BpWyUDTdbR1wVcmh9enajcuVjTkI68QKgmUMf%2F5HKCKE%2BH04ussAhNNXlNotw0QgDBfHxgnxutXxBbWjmpfriaHgJw94Sk7fMmU8UQVsJyvqs3ILahVxzbLSs0mknKDOPFiUICajflT06PvGf%2BZN2J%2FLrprglgvK5BeNt%2FdmgLA2DXJ0Ww15RlIWewAl938tehmqrK8Snyw2v4qDUI%2BKfRxvnbbUue5aA6MaVGy3pXYUkbntBiV9i02YeGcGi1V7wjkg7YehqQSrp0ipdOhezu4BL3bTYuYXMjNz8BpkY3CCO%2FxVmpBTwcY3TAwrwu38no%2FSIwqafYxAY6pgE%2FFfC3MXeNxCktcoNW0Afj5M5k%2B263w1%2BPJw00N0G4%2BT8nsiZcaG14wDyegREEzS2j%2F5DXtP5w62SuhvTmAMu%2BBVYw40Bb%2F28WOXLMRSzvF7mTlSvof9n3r%2BrcCi0BOiWsabaPQwyiGL54I%2FFPa1ZMwo5wzRIAAOlkE4ad6ZX%2B%2FmN%2FfSP6wV389YYi2SY7DLEtgpIALfGyHAy%2BxEV4vy6zIUZftpik&X-Amz-Signature=513ac24965589c2aa34a05433307df0ba7dc1e3b12b5fde4d372df67a7d1dce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETBLEBQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICEfLRca6blKU70%2FC5%2BFxlcmGBFylA5956oUQ2MgFZCSAiBre%2BbWLgHTDaUKrmDZno2JRimahIYQaGWBeUNx4JvS3yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8WKpUlSoFvEwzdTKtwDhVH%2FRZea5ofL5oA6cJdOtniidqpirVGKmdHnobs2XvVNghC2iaarmxoL1GvbsGmcyvtJxJDf%2B2ss%2BmlCIOm0ZLvPClkMHLVag7yj0plC3JrBAHNKAwVblKPWKyilOAqtmRGhg0sr4HUhvAMS0Qft%2Bbuty8WFb7RsKzcMDNu5eVx3Bb7wWx7VEGNA236HwsWER%2Fteaetb83vMJrBUsOn1zGZgRd%2F4vdcWoxVTDCxwJSkcleUdwKWd5hKWCamVjxT1TsIYYXNPTwMMtPrCVcF20NLfLbhAMR3kyqfLjorxXINEr%2FX%2FQh34g6%2BpWyUDTdbR1wVcmh9enajcuVjTkI68QKgmUMf%2F5HKCKE%2BH04ussAhNNXlNotw0QgDBfHxgnxutXxBbWjmpfriaHgJw94Sk7fMmU8UQVsJyvqs3ILahVxzbLSs0mknKDOPFiUICajflT06PvGf%2BZN2J%2FLrprglgvK5BeNt%2FdmgLA2DXJ0Ww15RlIWewAl938tehmqrK8Snyw2v4qDUI%2BKfRxvnbbUue5aA6MaVGy3pXYUkbntBiV9i02YeGcGi1V7wjkg7YehqQSrp0ipdOhezu4BL3bTYuYXMjNz8BpkY3CCO%2FxVmpBTwcY3TAwrwu38no%2FSIwqafYxAY6pgE%2FFfC3MXeNxCktcoNW0Afj5M5k%2B263w1%2BPJw00N0G4%2BT8nsiZcaG14wDyegREEzS2j%2F5DXtP5w62SuhvTmAMu%2BBVYw40Bb%2F28WOXLMRSzvF7mTlSvof9n3r%2BrcCi0BOiWsabaPQwyiGL54I%2FFPa1ZMwo5wzRIAAOlkE4ad6ZX%2B%2FmN%2FfSP6wV389YYi2SY7DLEtgpIALfGyHAy%2BxEV4vy6zIUZftpik&X-Amz-Signature=4aa4ebc9e77a6926cfd1c3bb87946eb487db52cd7f40c0a4159f8672170712a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
