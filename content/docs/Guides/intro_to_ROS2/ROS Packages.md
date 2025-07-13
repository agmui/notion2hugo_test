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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYHBVTR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWK6r0m9dVXVQBWtPeXwMCQh78Is5b9gsVos8QcLdSNwIgG5a2PujgmCJ2FeFOqPmGhwUfB4Q0lXZsUqRc6JA1Yf0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJL%2BcX8914nLw6im0ircAwE14jntUixWbPcEGiYiwKC3c9bclMUBusX6d8kHEP%2BMqqdCj3ID3FB%2Bagdm4QDKLjwSPmmxws8%2FJ1pALD9yZEuDVprF9lMUgT%2ByTVgtG6KZlzN6%2B5A2YhFoY8WLZa%2FbTlxWn5%2B3ASRwmNhbezGmxyWxVCvB31s2viyfNzbbM7dwuiSEfobtQ8RkKGMYad9mIyCcS%2FaOcTOioFfvwABCG3A8SwZa7z8BUgmGwWd29ePNJhfkL0ZClEn6RBCEUFlVnJYcWCgkGOL4%2BqdoFoGJTn1aInfDTd75x%2BmcgWqe2owxytuNkZN1GiQEDaxlGKRWh7mmWn8Y2CvKyf1Cef1e6%2FXOvivTC5u9Jz99TYw0voFC0LUn%2FPk92Pi8QDdv6mh0h6baAlhxKtAL104mr4toY5rtLxggCBKBtgAupHBUMot2RoLrvV2E1TgAAxUFe9Exsd4LzBN1FuIP%2FF3XskqsypMOmy2NlcrhhB8BFgcE3tapsf9iiJCAoGJol1dRMuN04boFKT3uQ3chptqQnQZyP4nK5HvlUX9dlhcceUOLerEyaysGNsSsJQovmLAW%2FzWCMfyKkHSRE79ELYeqGkVmU601BQHp5Oyu0i3%2Fz5KZW7wEKSZ%2Bh47AWBte%2Fi5SMJLEzsMGOqUBS8JOZuqQoSjIHQCwXXgf0c4p0bkS4SWkFBo%2BhhGuL00DcSXfZc0pPNpdtxwxr5H2%2Byr3bYOoMJ9g39VXd7tDu2IdsLNbf6rKuyW1arUmR%2Bh%2BaN8DYVFIBtoTyr6yC4OI6dYIye9O5B5%2FXUztIBNqdxQ4LDSPlGwqOtjfclxgjB7HGEkQKsHHZ5m9QV9bQTq6yVSFp%2BAgU3ZQuGFFuRcHGMps3Zwo&X-Amz-Signature=73886f430449493e8762e243e7ff8436cf4dfd60f4dee477c81105780150eefd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYHBVTR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWK6r0m9dVXVQBWtPeXwMCQh78Is5b9gsVos8QcLdSNwIgG5a2PujgmCJ2FeFOqPmGhwUfB4Q0lXZsUqRc6JA1Yf0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJL%2BcX8914nLw6im0ircAwE14jntUixWbPcEGiYiwKC3c9bclMUBusX6d8kHEP%2BMqqdCj3ID3FB%2Bagdm4QDKLjwSPmmxws8%2FJ1pALD9yZEuDVprF9lMUgT%2ByTVgtG6KZlzN6%2B5A2YhFoY8WLZa%2FbTlxWn5%2B3ASRwmNhbezGmxyWxVCvB31s2viyfNzbbM7dwuiSEfobtQ8RkKGMYad9mIyCcS%2FaOcTOioFfvwABCG3A8SwZa7z8BUgmGwWd29ePNJhfkL0ZClEn6RBCEUFlVnJYcWCgkGOL4%2BqdoFoGJTn1aInfDTd75x%2BmcgWqe2owxytuNkZN1GiQEDaxlGKRWh7mmWn8Y2CvKyf1Cef1e6%2FXOvivTC5u9Jz99TYw0voFC0LUn%2FPk92Pi8QDdv6mh0h6baAlhxKtAL104mr4toY5rtLxggCBKBtgAupHBUMot2RoLrvV2E1TgAAxUFe9Exsd4LzBN1FuIP%2FF3XskqsypMOmy2NlcrhhB8BFgcE3tapsf9iiJCAoGJol1dRMuN04boFKT3uQ3chptqQnQZyP4nK5HvlUX9dlhcceUOLerEyaysGNsSsJQovmLAW%2FzWCMfyKkHSRE79ELYeqGkVmU601BQHp5Oyu0i3%2Fz5KZW7wEKSZ%2Bh47AWBte%2Fi5SMJLEzsMGOqUBS8JOZuqQoSjIHQCwXXgf0c4p0bkS4SWkFBo%2BhhGuL00DcSXfZc0pPNpdtxwxr5H2%2Byr3bYOoMJ9g39VXd7tDu2IdsLNbf6rKuyW1arUmR%2Bh%2BaN8DYVFIBtoTyr6yC4OI6dYIye9O5B5%2FXUztIBNqdxQ4LDSPlGwqOtjfclxgjB7HGEkQKsHHZ5m9QV9bQTq6yVSFp%2BAgU3ZQuGFFuRcHGMps3Zwo&X-Amz-Signature=e41b61e762f70a49c49aa5b188b367064e7eb07c3e42ee83b7b132028aabec7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYHBVTR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWK6r0m9dVXVQBWtPeXwMCQh78Is5b9gsVos8QcLdSNwIgG5a2PujgmCJ2FeFOqPmGhwUfB4Q0lXZsUqRc6JA1Yf0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJL%2BcX8914nLw6im0ircAwE14jntUixWbPcEGiYiwKC3c9bclMUBusX6d8kHEP%2BMqqdCj3ID3FB%2Bagdm4QDKLjwSPmmxws8%2FJ1pALD9yZEuDVprF9lMUgT%2ByTVgtG6KZlzN6%2B5A2YhFoY8WLZa%2FbTlxWn5%2B3ASRwmNhbezGmxyWxVCvB31s2viyfNzbbM7dwuiSEfobtQ8RkKGMYad9mIyCcS%2FaOcTOioFfvwABCG3A8SwZa7z8BUgmGwWd29ePNJhfkL0ZClEn6RBCEUFlVnJYcWCgkGOL4%2BqdoFoGJTn1aInfDTd75x%2BmcgWqe2owxytuNkZN1GiQEDaxlGKRWh7mmWn8Y2CvKyf1Cef1e6%2FXOvivTC5u9Jz99TYw0voFC0LUn%2FPk92Pi8QDdv6mh0h6baAlhxKtAL104mr4toY5rtLxggCBKBtgAupHBUMot2RoLrvV2E1TgAAxUFe9Exsd4LzBN1FuIP%2FF3XskqsypMOmy2NlcrhhB8BFgcE3tapsf9iiJCAoGJol1dRMuN04boFKT3uQ3chptqQnQZyP4nK5HvlUX9dlhcceUOLerEyaysGNsSsJQovmLAW%2FzWCMfyKkHSRE79ELYeqGkVmU601BQHp5Oyu0i3%2Fz5KZW7wEKSZ%2Bh47AWBte%2Fi5SMJLEzsMGOqUBS8JOZuqQoSjIHQCwXXgf0c4p0bkS4SWkFBo%2BhhGuL00DcSXfZc0pPNpdtxwxr5H2%2Byr3bYOoMJ9g39VXd7tDu2IdsLNbf6rKuyW1arUmR%2Bh%2BaN8DYVFIBtoTyr6yC4OI6dYIye9O5B5%2FXUztIBNqdxQ4LDSPlGwqOtjfclxgjB7HGEkQKsHHZ5m9QV9bQTq6yVSFp%2BAgU3ZQuGFFuRcHGMps3Zwo&X-Amz-Signature=13ac32ae10d2e6b0863f7c07b6227009f808e309de5890420cee0428564cd2b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYHBVTR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWK6r0m9dVXVQBWtPeXwMCQh78Is5b9gsVos8QcLdSNwIgG5a2PujgmCJ2FeFOqPmGhwUfB4Q0lXZsUqRc6JA1Yf0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJL%2BcX8914nLw6im0ircAwE14jntUixWbPcEGiYiwKC3c9bclMUBusX6d8kHEP%2BMqqdCj3ID3FB%2Bagdm4QDKLjwSPmmxws8%2FJ1pALD9yZEuDVprF9lMUgT%2ByTVgtG6KZlzN6%2B5A2YhFoY8WLZa%2FbTlxWn5%2B3ASRwmNhbezGmxyWxVCvB31s2viyfNzbbM7dwuiSEfobtQ8RkKGMYad9mIyCcS%2FaOcTOioFfvwABCG3A8SwZa7z8BUgmGwWd29ePNJhfkL0ZClEn6RBCEUFlVnJYcWCgkGOL4%2BqdoFoGJTn1aInfDTd75x%2BmcgWqe2owxytuNkZN1GiQEDaxlGKRWh7mmWn8Y2CvKyf1Cef1e6%2FXOvivTC5u9Jz99TYw0voFC0LUn%2FPk92Pi8QDdv6mh0h6baAlhxKtAL104mr4toY5rtLxggCBKBtgAupHBUMot2RoLrvV2E1TgAAxUFe9Exsd4LzBN1FuIP%2FF3XskqsypMOmy2NlcrhhB8BFgcE3tapsf9iiJCAoGJol1dRMuN04boFKT3uQ3chptqQnQZyP4nK5HvlUX9dlhcceUOLerEyaysGNsSsJQovmLAW%2FzWCMfyKkHSRE79ELYeqGkVmU601BQHp5Oyu0i3%2Fz5KZW7wEKSZ%2Bh47AWBte%2Fi5SMJLEzsMGOqUBS8JOZuqQoSjIHQCwXXgf0c4p0bkS4SWkFBo%2BhhGuL00DcSXfZc0pPNpdtxwxr5H2%2Byr3bYOoMJ9g39VXd7tDu2IdsLNbf6rKuyW1arUmR%2Bh%2BaN8DYVFIBtoTyr6yC4OI6dYIye9O5B5%2FXUztIBNqdxQ4LDSPlGwqOtjfclxgjB7HGEkQKsHHZ5m9QV9bQTq6yVSFp%2BAgU3ZQuGFFuRcHGMps3Zwo&X-Amz-Signature=f6547f5fc5d13f4c43bc6e3cef040327d92e400e0558001f31cdef82d567e057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYHBVTR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWK6r0m9dVXVQBWtPeXwMCQh78Is5b9gsVos8QcLdSNwIgG5a2PujgmCJ2FeFOqPmGhwUfB4Q0lXZsUqRc6JA1Yf0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJL%2BcX8914nLw6im0ircAwE14jntUixWbPcEGiYiwKC3c9bclMUBusX6d8kHEP%2BMqqdCj3ID3FB%2Bagdm4QDKLjwSPmmxws8%2FJ1pALD9yZEuDVprF9lMUgT%2ByTVgtG6KZlzN6%2B5A2YhFoY8WLZa%2FbTlxWn5%2B3ASRwmNhbezGmxyWxVCvB31s2viyfNzbbM7dwuiSEfobtQ8RkKGMYad9mIyCcS%2FaOcTOioFfvwABCG3A8SwZa7z8BUgmGwWd29ePNJhfkL0ZClEn6RBCEUFlVnJYcWCgkGOL4%2BqdoFoGJTn1aInfDTd75x%2BmcgWqe2owxytuNkZN1GiQEDaxlGKRWh7mmWn8Y2CvKyf1Cef1e6%2FXOvivTC5u9Jz99TYw0voFC0LUn%2FPk92Pi8QDdv6mh0h6baAlhxKtAL104mr4toY5rtLxggCBKBtgAupHBUMot2RoLrvV2E1TgAAxUFe9Exsd4LzBN1FuIP%2FF3XskqsypMOmy2NlcrhhB8BFgcE3tapsf9iiJCAoGJol1dRMuN04boFKT3uQ3chptqQnQZyP4nK5HvlUX9dlhcceUOLerEyaysGNsSsJQovmLAW%2FzWCMfyKkHSRE79ELYeqGkVmU601BQHp5Oyu0i3%2Fz5KZW7wEKSZ%2Bh47AWBte%2Fi5SMJLEzsMGOqUBS8JOZuqQoSjIHQCwXXgf0c4p0bkS4SWkFBo%2BhhGuL00DcSXfZc0pPNpdtxwxr5H2%2Byr3bYOoMJ9g39VXd7tDu2IdsLNbf6rKuyW1arUmR%2Bh%2BaN8DYVFIBtoTyr6yC4OI6dYIye9O5B5%2FXUztIBNqdxQ4LDSPlGwqOtjfclxgjB7HGEkQKsHHZ5m9QV9bQTq6yVSFp%2BAgU3ZQuGFFuRcHGMps3Zwo&X-Amz-Signature=4d27f1595e5d695075057caf515c7946ccf43fdb0e3b1ec6e301b57be018a75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYHBVTR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWK6r0m9dVXVQBWtPeXwMCQh78Is5b9gsVos8QcLdSNwIgG5a2PujgmCJ2FeFOqPmGhwUfB4Q0lXZsUqRc6JA1Yf0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJL%2BcX8914nLw6im0ircAwE14jntUixWbPcEGiYiwKC3c9bclMUBusX6d8kHEP%2BMqqdCj3ID3FB%2Bagdm4QDKLjwSPmmxws8%2FJ1pALD9yZEuDVprF9lMUgT%2ByTVgtG6KZlzN6%2B5A2YhFoY8WLZa%2FbTlxWn5%2B3ASRwmNhbezGmxyWxVCvB31s2viyfNzbbM7dwuiSEfobtQ8RkKGMYad9mIyCcS%2FaOcTOioFfvwABCG3A8SwZa7z8BUgmGwWd29ePNJhfkL0ZClEn6RBCEUFlVnJYcWCgkGOL4%2BqdoFoGJTn1aInfDTd75x%2BmcgWqe2owxytuNkZN1GiQEDaxlGKRWh7mmWn8Y2CvKyf1Cef1e6%2FXOvivTC5u9Jz99TYw0voFC0LUn%2FPk92Pi8QDdv6mh0h6baAlhxKtAL104mr4toY5rtLxggCBKBtgAupHBUMot2RoLrvV2E1TgAAxUFe9Exsd4LzBN1FuIP%2FF3XskqsypMOmy2NlcrhhB8BFgcE3tapsf9iiJCAoGJol1dRMuN04boFKT3uQ3chptqQnQZyP4nK5HvlUX9dlhcceUOLerEyaysGNsSsJQovmLAW%2FzWCMfyKkHSRE79ELYeqGkVmU601BQHp5Oyu0i3%2Fz5KZW7wEKSZ%2Bh47AWBte%2Fi5SMJLEzsMGOqUBS8JOZuqQoSjIHQCwXXgf0c4p0bkS4SWkFBo%2BhhGuL00DcSXfZc0pPNpdtxwxr5H2%2Byr3bYOoMJ9g39VXd7tDu2IdsLNbf6rKuyW1arUmR%2Bh%2BaN8DYVFIBtoTyr6yC4OI6dYIye9O5B5%2FXUztIBNqdxQ4LDSPlGwqOtjfclxgjB7HGEkQKsHHZ5m9QV9bQTq6yVSFp%2BAgU3ZQuGFFuRcHGMps3Zwo&X-Amz-Signature=c7f3d955d3b20ea279d132889496345e62fd9c799a6368348093cff371d2ad4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYHBVTR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWK6r0m9dVXVQBWtPeXwMCQh78Is5b9gsVos8QcLdSNwIgG5a2PujgmCJ2FeFOqPmGhwUfB4Q0lXZsUqRc6JA1Yf0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJL%2BcX8914nLw6im0ircAwE14jntUixWbPcEGiYiwKC3c9bclMUBusX6d8kHEP%2BMqqdCj3ID3FB%2Bagdm4QDKLjwSPmmxws8%2FJ1pALD9yZEuDVprF9lMUgT%2ByTVgtG6KZlzN6%2B5A2YhFoY8WLZa%2FbTlxWn5%2B3ASRwmNhbezGmxyWxVCvB31s2viyfNzbbM7dwuiSEfobtQ8RkKGMYad9mIyCcS%2FaOcTOioFfvwABCG3A8SwZa7z8BUgmGwWd29ePNJhfkL0ZClEn6RBCEUFlVnJYcWCgkGOL4%2BqdoFoGJTn1aInfDTd75x%2BmcgWqe2owxytuNkZN1GiQEDaxlGKRWh7mmWn8Y2CvKyf1Cef1e6%2FXOvivTC5u9Jz99TYw0voFC0LUn%2FPk92Pi8QDdv6mh0h6baAlhxKtAL104mr4toY5rtLxggCBKBtgAupHBUMot2RoLrvV2E1TgAAxUFe9Exsd4LzBN1FuIP%2FF3XskqsypMOmy2NlcrhhB8BFgcE3tapsf9iiJCAoGJol1dRMuN04boFKT3uQ3chptqQnQZyP4nK5HvlUX9dlhcceUOLerEyaysGNsSsJQovmLAW%2FzWCMfyKkHSRE79ELYeqGkVmU601BQHp5Oyu0i3%2Fz5KZW7wEKSZ%2Bh47AWBte%2Fi5SMJLEzsMGOqUBS8JOZuqQoSjIHQCwXXgf0c4p0bkS4SWkFBo%2BhhGuL00DcSXfZc0pPNpdtxwxr5H2%2Byr3bYOoMJ9g39VXd7tDu2IdsLNbf6rKuyW1arUmR%2Bh%2BaN8DYVFIBtoTyr6yC4OI6dYIye9O5B5%2FXUztIBNqdxQ4LDSPlGwqOtjfclxgjB7HGEkQKsHHZ5m9QV9bQTq6yVSFp%2BAgU3ZQuGFFuRcHGMps3Zwo&X-Amz-Signature=8b4d776c47ba6eaf8a7c3ea798807f2dcfe74a4596f04effe3cf1911ba2a0e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
