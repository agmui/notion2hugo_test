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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQO5PVO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfaBZsmsF8%2BVJNyBrhxT1ztc5GY1RUQjHVZpxCn%2BdOwIgA%2FQ3mREKHE8OtK7Dju0eOyXMCeN0bKSJYrQ9yO09bawqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV5EZMxYT82Jq1jcircA6%2BdyeTIyX58lwAZmwjs8%2BnndbjeMr%2B%2B9Gn3pAcrOCfe%2FPJfBRR4I1jNwu9QoINxTIHpv1EUJNLAzSP5mTsK9RFehem60TdzxdAYqB%2BOiExYN2%2BQ6kWff7kp9yTRGt1rKIZVmy562OEZaWI3W3FqpLBkF54XtbFmImhZNIjra7K3mdqmTrKAagm4OQGrKavyWCHr1RHnFzdhk9%2BR7NMYUTQr7ul38RQ21ftVvFeft9i91J%2Fk9RdXjaQ0Jot23W3ZGHnhWN%2FRkNr%2FA2heoz%2Bmg07QvgCBVDm0wO1juoO1SinD4eiD7CF%2Feq1%2Fr2Kmwm1Cch0y4OvZh9pVahDZ6lA8byFzNGqR0r6JOxYMNGjKZjWOsf6Ej6LBdDMbXkWMKhzY%2F1l0PrUqRQS5hMeWBROKTr57bUsyDt4JrySTJTOchprA%2BUq9hgbgrPMxF%2B4w0LBzmaRK86O3kbjAFlJ3EwUQRUKkFOyEKqs691Tva5V70Y5SA%2BEZr%2BZUxQCOMeQB4Znu33jwjcvnphW2NcJ4UGpPUPTuzELgtYE%2F3hKDbN4cjlrQCMZDjBsJHzHl1DQ3ao0SN1MKpdj%2FInzXqqt0eRu7%2BfdK%2FW4G0f5ZzW8e7xvY5O8OPwhPofF%2FgB9tF5jQMLjV2cIGOqUBDxH7Ig0J1uxCUyoK1pWW1Saq41Q57gfE9hyj0wLz1%2FLnd6NsaC1rIprNzBYFr3dmq6eCEdpig1kWLgskIh3B374Z%2F1UxJqgFmozzAUEy19qi%2BjtAdgh%2B54Gt4z0dNs%2BHWTvchSphgcOzUVNwROxssxAvqd0Vchh%2BO7UGctQ%2FeRntLIbZI6Ski%2FEBf01AhMeiQOKEadKFSKaZQ4HMP3q43Efqa7ZG&X-Amz-Signature=b94f503978d293710fa0d5847094793d166040c04c3aad1a5d0c061b7b2b44e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQO5PVO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfaBZsmsF8%2BVJNyBrhxT1ztc5GY1RUQjHVZpxCn%2BdOwIgA%2FQ3mREKHE8OtK7Dju0eOyXMCeN0bKSJYrQ9yO09bawqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV5EZMxYT82Jq1jcircA6%2BdyeTIyX58lwAZmwjs8%2BnndbjeMr%2B%2B9Gn3pAcrOCfe%2FPJfBRR4I1jNwu9QoINxTIHpv1EUJNLAzSP5mTsK9RFehem60TdzxdAYqB%2BOiExYN2%2BQ6kWff7kp9yTRGt1rKIZVmy562OEZaWI3W3FqpLBkF54XtbFmImhZNIjra7K3mdqmTrKAagm4OQGrKavyWCHr1RHnFzdhk9%2BR7NMYUTQr7ul38RQ21ftVvFeft9i91J%2Fk9RdXjaQ0Jot23W3ZGHnhWN%2FRkNr%2FA2heoz%2Bmg07QvgCBVDm0wO1juoO1SinD4eiD7CF%2Feq1%2Fr2Kmwm1Cch0y4OvZh9pVahDZ6lA8byFzNGqR0r6JOxYMNGjKZjWOsf6Ej6LBdDMbXkWMKhzY%2F1l0PrUqRQS5hMeWBROKTr57bUsyDt4JrySTJTOchprA%2BUq9hgbgrPMxF%2B4w0LBzmaRK86O3kbjAFlJ3EwUQRUKkFOyEKqs691Tva5V70Y5SA%2BEZr%2BZUxQCOMeQB4Znu33jwjcvnphW2NcJ4UGpPUPTuzELgtYE%2F3hKDbN4cjlrQCMZDjBsJHzHl1DQ3ao0SN1MKpdj%2FInzXqqt0eRu7%2BfdK%2FW4G0f5ZzW8e7xvY5O8OPwhPofF%2FgB9tF5jQMLjV2cIGOqUBDxH7Ig0J1uxCUyoK1pWW1Saq41Q57gfE9hyj0wLz1%2FLnd6NsaC1rIprNzBYFr3dmq6eCEdpig1kWLgskIh3B374Z%2F1UxJqgFmozzAUEy19qi%2BjtAdgh%2B54Gt4z0dNs%2BHWTvchSphgcOzUVNwROxssxAvqd0Vchh%2BO7UGctQ%2FeRntLIbZI6Ski%2FEBf01AhMeiQOKEadKFSKaZQ4HMP3q43Efqa7ZG&X-Amz-Signature=d4e7c7b9c66869ee1b55dfdcae88c92ef1dc963ff5c735c1cf79cee50e762156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQO5PVO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfaBZsmsF8%2BVJNyBrhxT1ztc5GY1RUQjHVZpxCn%2BdOwIgA%2FQ3mREKHE8OtK7Dju0eOyXMCeN0bKSJYrQ9yO09bawqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV5EZMxYT82Jq1jcircA6%2BdyeTIyX58lwAZmwjs8%2BnndbjeMr%2B%2B9Gn3pAcrOCfe%2FPJfBRR4I1jNwu9QoINxTIHpv1EUJNLAzSP5mTsK9RFehem60TdzxdAYqB%2BOiExYN2%2BQ6kWff7kp9yTRGt1rKIZVmy562OEZaWI3W3FqpLBkF54XtbFmImhZNIjra7K3mdqmTrKAagm4OQGrKavyWCHr1RHnFzdhk9%2BR7NMYUTQr7ul38RQ21ftVvFeft9i91J%2Fk9RdXjaQ0Jot23W3ZGHnhWN%2FRkNr%2FA2heoz%2Bmg07QvgCBVDm0wO1juoO1SinD4eiD7CF%2Feq1%2Fr2Kmwm1Cch0y4OvZh9pVahDZ6lA8byFzNGqR0r6JOxYMNGjKZjWOsf6Ej6LBdDMbXkWMKhzY%2F1l0PrUqRQS5hMeWBROKTr57bUsyDt4JrySTJTOchprA%2BUq9hgbgrPMxF%2B4w0LBzmaRK86O3kbjAFlJ3EwUQRUKkFOyEKqs691Tva5V70Y5SA%2BEZr%2BZUxQCOMeQB4Znu33jwjcvnphW2NcJ4UGpPUPTuzELgtYE%2F3hKDbN4cjlrQCMZDjBsJHzHl1DQ3ao0SN1MKpdj%2FInzXqqt0eRu7%2BfdK%2FW4G0f5ZzW8e7xvY5O8OPwhPofF%2FgB9tF5jQMLjV2cIGOqUBDxH7Ig0J1uxCUyoK1pWW1Saq41Q57gfE9hyj0wLz1%2FLnd6NsaC1rIprNzBYFr3dmq6eCEdpig1kWLgskIh3B374Z%2F1UxJqgFmozzAUEy19qi%2BjtAdgh%2B54Gt4z0dNs%2BHWTvchSphgcOzUVNwROxssxAvqd0Vchh%2BO7UGctQ%2FeRntLIbZI6Ski%2FEBf01AhMeiQOKEadKFSKaZQ4HMP3q43Efqa7ZG&X-Amz-Signature=58969ecaf0b6e4979cc5e5f9b54895c57e2cbbc088bb49408c05c27f841f57be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQO5PVO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfaBZsmsF8%2BVJNyBrhxT1ztc5GY1RUQjHVZpxCn%2BdOwIgA%2FQ3mREKHE8OtK7Dju0eOyXMCeN0bKSJYrQ9yO09bawqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV5EZMxYT82Jq1jcircA6%2BdyeTIyX58lwAZmwjs8%2BnndbjeMr%2B%2B9Gn3pAcrOCfe%2FPJfBRR4I1jNwu9QoINxTIHpv1EUJNLAzSP5mTsK9RFehem60TdzxdAYqB%2BOiExYN2%2BQ6kWff7kp9yTRGt1rKIZVmy562OEZaWI3W3FqpLBkF54XtbFmImhZNIjra7K3mdqmTrKAagm4OQGrKavyWCHr1RHnFzdhk9%2BR7NMYUTQr7ul38RQ21ftVvFeft9i91J%2Fk9RdXjaQ0Jot23W3ZGHnhWN%2FRkNr%2FA2heoz%2Bmg07QvgCBVDm0wO1juoO1SinD4eiD7CF%2Feq1%2Fr2Kmwm1Cch0y4OvZh9pVahDZ6lA8byFzNGqR0r6JOxYMNGjKZjWOsf6Ej6LBdDMbXkWMKhzY%2F1l0PrUqRQS5hMeWBROKTr57bUsyDt4JrySTJTOchprA%2BUq9hgbgrPMxF%2B4w0LBzmaRK86O3kbjAFlJ3EwUQRUKkFOyEKqs691Tva5V70Y5SA%2BEZr%2BZUxQCOMeQB4Znu33jwjcvnphW2NcJ4UGpPUPTuzELgtYE%2F3hKDbN4cjlrQCMZDjBsJHzHl1DQ3ao0SN1MKpdj%2FInzXqqt0eRu7%2BfdK%2FW4G0f5ZzW8e7xvY5O8OPwhPofF%2FgB9tF5jQMLjV2cIGOqUBDxH7Ig0J1uxCUyoK1pWW1Saq41Q57gfE9hyj0wLz1%2FLnd6NsaC1rIprNzBYFr3dmq6eCEdpig1kWLgskIh3B374Z%2F1UxJqgFmozzAUEy19qi%2BjtAdgh%2B54Gt4z0dNs%2BHWTvchSphgcOzUVNwROxssxAvqd0Vchh%2BO7UGctQ%2FeRntLIbZI6Ski%2FEBf01AhMeiQOKEadKFSKaZQ4HMP3q43Efqa7ZG&X-Amz-Signature=e6582ad374d948a935b59f6991fb29fc5a704fa1d6e92d3d39b865a03f5e640b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQO5PVO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfaBZsmsF8%2BVJNyBrhxT1ztc5GY1RUQjHVZpxCn%2BdOwIgA%2FQ3mREKHE8OtK7Dju0eOyXMCeN0bKSJYrQ9yO09bawqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV5EZMxYT82Jq1jcircA6%2BdyeTIyX58lwAZmwjs8%2BnndbjeMr%2B%2B9Gn3pAcrOCfe%2FPJfBRR4I1jNwu9QoINxTIHpv1EUJNLAzSP5mTsK9RFehem60TdzxdAYqB%2BOiExYN2%2BQ6kWff7kp9yTRGt1rKIZVmy562OEZaWI3W3FqpLBkF54XtbFmImhZNIjra7K3mdqmTrKAagm4OQGrKavyWCHr1RHnFzdhk9%2BR7NMYUTQr7ul38RQ21ftVvFeft9i91J%2Fk9RdXjaQ0Jot23W3ZGHnhWN%2FRkNr%2FA2heoz%2Bmg07QvgCBVDm0wO1juoO1SinD4eiD7CF%2Feq1%2Fr2Kmwm1Cch0y4OvZh9pVahDZ6lA8byFzNGqR0r6JOxYMNGjKZjWOsf6Ej6LBdDMbXkWMKhzY%2F1l0PrUqRQS5hMeWBROKTr57bUsyDt4JrySTJTOchprA%2BUq9hgbgrPMxF%2B4w0LBzmaRK86O3kbjAFlJ3EwUQRUKkFOyEKqs691Tva5V70Y5SA%2BEZr%2BZUxQCOMeQB4Znu33jwjcvnphW2NcJ4UGpPUPTuzELgtYE%2F3hKDbN4cjlrQCMZDjBsJHzHl1DQ3ao0SN1MKpdj%2FInzXqqt0eRu7%2BfdK%2FW4G0f5ZzW8e7xvY5O8OPwhPofF%2FgB9tF5jQMLjV2cIGOqUBDxH7Ig0J1uxCUyoK1pWW1Saq41Q57gfE9hyj0wLz1%2FLnd6NsaC1rIprNzBYFr3dmq6eCEdpig1kWLgskIh3B374Z%2F1UxJqgFmozzAUEy19qi%2BjtAdgh%2B54Gt4z0dNs%2BHWTvchSphgcOzUVNwROxssxAvqd0Vchh%2BO7UGctQ%2FeRntLIbZI6Ski%2FEBf01AhMeiQOKEadKFSKaZQ4HMP3q43Efqa7ZG&X-Amz-Signature=17ad573e50c3b1d6c4a9a31787283989636f8d4d40a283cc3fc3e03e05bf01c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQO5PVO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfaBZsmsF8%2BVJNyBrhxT1ztc5GY1RUQjHVZpxCn%2BdOwIgA%2FQ3mREKHE8OtK7Dju0eOyXMCeN0bKSJYrQ9yO09bawqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV5EZMxYT82Jq1jcircA6%2BdyeTIyX58lwAZmwjs8%2BnndbjeMr%2B%2B9Gn3pAcrOCfe%2FPJfBRR4I1jNwu9QoINxTIHpv1EUJNLAzSP5mTsK9RFehem60TdzxdAYqB%2BOiExYN2%2BQ6kWff7kp9yTRGt1rKIZVmy562OEZaWI3W3FqpLBkF54XtbFmImhZNIjra7K3mdqmTrKAagm4OQGrKavyWCHr1RHnFzdhk9%2BR7NMYUTQr7ul38RQ21ftVvFeft9i91J%2Fk9RdXjaQ0Jot23W3ZGHnhWN%2FRkNr%2FA2heoz%2Bmg07QvgCBVDm0wO1juoO1SinD4eiD7CF%2Feq1%2Fr2Kmwm1Cch0y4OvZh9pVahDZ6lA8byFzNGqR0r6JOxYMNGjKZjWOsf6Ej6LBdDMbXkWMKhzY%2F1l0PrUqRQS5hMeWBROKTr57bUsyDt4JrySTJTOchprA%2BUq9hgbgrPMxF%2B4w0LBzmaRK86O3kbjAFlJ3EwUQRUKkFOyEKqs691Tva5V70Y5SA%2BEZr%2BZUxQCOMeQB4Znu33jwjcvnphW2NcJ4UGpPUPTuzELgtYE%2F3hKDbN4cjlrQCMZDjBsJHzHl1DQ3ao0SN1MKpdj%2FInzXqqt0eRu7%2BfdK%2FW4G0f5ZzW8e7xvY5O8OPwhPofF%2FgB9tF5jQMLjV2cIGOqUBDxH7Ig0J1uxCUyoK1pWW1Saq41Q57gfE9hyj0wLz1%2FLnd6NsaC1rIprNzBYFr3dmq6eCEdpig1kWLgskIh3B374Z%2F1UxJqgFmozzAUEy19qi%2BjtAdgh%2B54Gt4z0dNs%2BHWTvchSphgcOzUVNwROxssxAvqd0Vchh%2BO7UGctQ%2FeRntLIbZI6Ski%2FEBf01AhMeiQOKEadKFSKaZQ4HMP3q43Efqa7ZG&X-Amz-Signature=858a772bdc124a8432766ebac12b0af4ce1294edc411822ddefe794c3a18aab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQO5PVO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfaBZsmsF8%2BVJNyBrhxT1ztc5GY1RUQjHVZpxCn%2BdOwIgA%2FQ3mREKHE8OtK7Dju0eOyXMCeN0bKSJYrQ9yO09bawqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV5EZMxYT82Jq1jcircA6%2BdyeTIyX58lwAZmwjs8%2BnndbjeMr%2B%2B9Gn3pAcrOCfe%2FPJfBRR4I1jNwu9QoINxTIHpv1EUJNLAzSP5mTsK9RFehem60TdzxdAYqB%2BOiExYN2%2BQ6kWff7kp9yTRGt1rKIZVmy562OEZaWI3W3FqpLBkF54XtbFmImhZNIjra7K3mdqmTrKAagm4OQGrKavyWCHr1RHnFzdhk9%2BR7NMYUTQr7ul38RQ21ftVvFeft9i91J%2Fk9RdXjaQ0Jot23W3ZGHnhWN%2FRkNr%2FA2heoz%2Bmg07QvgCBVDm0wO1juoO1SinD4eiD7CF%2Feq1%2Fr2Kmwm1Cch0y4OvZh9pVahDZ6lA8byFzNGqR0r6JOxYMNGjKZjWOsf6Ej6LBdDMbXkWMKhzY%2F1l0PrUqRQS5hMeWBROKTr57bUsyDt4JrySTJTOchprA%2BUq9hgbgrPMxF%2B4w0LBzmaRK86O3kbjAFlJ3EwUQRUKkFOyEKqs691Tva5V70Y5SA%2BEZr%2BZUxQCOMeQB4Znu33jwjcvnphW2NcJ4UGpPUPTuzELgtYE%2F3hKDbN4cjlrQCMZDjBsJHzHl1DQ3ao0SN1MKpdj%2FInzXqqt0eRu7%2BfdK%2FW4G0f5ZzW8e7xvY5O8OPwhPofF%2FgB9tF5jQMLjV2cIGOqUBDxH7Ig0J1uxCUyoK1pWW1Saq41Q57gfE9hyj0wLz1%2FLnd6NsaC1rIprNzBYFr3dmq6eCEdpig1kWLgskIh3B374Z%2F1UxJqgFmozzAUEy19qi%2BjtAdgh%2B54Gt4z0dNs%2BHWTvchSphgcOzUVNwROxssxAvqd0Vchh%2BO7UGctQ%2FeRntLIbZI6Ski%2FEBf01AhMeiQOKEadKFSKaZQ4HMP3q43Efqa7ZG&X-Amz-Signature=51d77445d4977b93cef8e4aafe95040f0cc60eb4f25d788adabf397d4298b8c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
