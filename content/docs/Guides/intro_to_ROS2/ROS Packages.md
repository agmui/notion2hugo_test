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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFC2X25E%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5I%2FeqmR2kLF9%2Fdk%2BV8VuB%2BwkXEaBrf5YZgE5qQImJhQIhAJSj31EVBHtrd%2BUEe907MAPIPIdC6wn%2BcPi%2B3BbpyAWvKv8DCDYQABoMNjM3NDIzMTgzODA1IgyDOz70Vd2RNSGpCgwq3APupt0PHdUA1qnGd95A%2FdsxlJ5AifG9fAkhkOLBnX2ob8s9xHcjs5eMwAUJfHRDfz25c7HZyWFm0Wdx206WrM62v9ZnE%2BxHJcMncVDNmHUCAN9jgenO4gIJwTH1BjNc4qWpqhTkMUlUJsySQMGszg8PGoU6f4stXkEZZ%2BZXC6NKTrpIdGD0IeA0K3NWJPqp0N8qpyc%2B4dhQAlGEsljPbcO19M3fa9flPN5Pbnha5Cxv23wCxzHseQnugLAvjzs8piIgEoZdolELrtcz2VDRmSqGkORRcJ35OhfViDgE1%2BEUU%2BgS%2B9VGXfOTzf8KFKFe8ENpyJsCQFmHW34fyHfPUSF4AonldmHvvllNjoWwd7M1vvMJmai5PG%2FziIdhVligV7zwSBaOMl1YXyNgy4QTy6wfyJApvHug6pgZlD0ps4B5K4lQyUg1Mkmc3jvGbTyGqVY1Wfcb9IxJYbiKp1UpCgtrUd8sNZo63gItABeESfCBJOKWdxs4NHind%2F540bISqkMPSUPh%2Fp9bn0kg2GzlhMduDrtYU4LlETFNRTDCap7790hZyQwObFohTbdt2H3ju2HznbZb81ptbA4wj2QcbG5ROBgqLQ7%2FIQBbUirkdkSMBPmki8eMP1bOXXesezDD7K%2FABjqkAQf7G0U9EPHyJpUfDw%2FRvG3B7bCixK%2Bx1ulXuTwJuqBTkxX2H1zQA0Yei3w3eMxpO2E5L5nuwKPo14sAQltW67YJusVR2e%2Fs5oEj89bWws7Lhzv3OaL%2BclFAhHCOjDfTq2h4YOsObXGPNZ8haS0v4mJIabSu%2Bk1saWQNRcAJB%2BFTkpMozqIrjWY7cYwOKofn%2Bl0d5F7%2BIjddvi01d8EhpGo0y962&X-Amz-Signature=45c6254ad18755e03a3d2e53f00aa05a24e363b877c449dd133d752db2c1ac02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFC2X25E%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5I%2FeqmR2kLF9%2Fdk%2BV8VuB%2BwkXEaBrf5YZgE5qQImJhQIhAJSj31EVBHtrd%2BUEe907MAPIPIdC6wn%2BcPi%2B3BbpyAWvKv8DCDYQABoMNjM3NDIzMTgzODA1IgyDOz70Vd2RNSGpCgwq3APupt0PHdUA1qnGd95A%2FdsxlJ5AifG9fAkhkOLBnX2ob8s9xHcjs5eMwAUJfHRDfz25c7HZyWFm0Wdx206WrM62v9ZnE%2BxHJcMncVDNmHUCAN9jgenO4gIJwTH1BjNc4qWpqhTkMUlUJsySQMGszg8PGoU6f4stXkEZZ%2BZXC6NKTrpIdGD0IeA0K3NWJPqp0N8qpyc%2B4dhQAlGEsljPbcO19M3fa9flPN5Pbnha5Cxv23wCxzHseQnugLAvjzs8piIgEoZdolELrtcz2VDRmSqGkORRcJ35OhfViDgE1%2BEUU%2BgS%2B9VGXfOTzf8KFKFe8ENpyJsCQFmHW34fyHfPUSF4AonldmHvvllNjoWwd7M1vvMJmai5PG%2FziIdhVligV7zwSBaOMl1YXyNgy4QTy6wfyJApvHug6pgZlD0ps4B5K4lQyUg1Mkmc3jvGbTyGqVY1Wfcb9IxJYbiKp1UpCgtrUd8sNZo63gItABeESfCBJOKWdxs4NHind%2F540bISqkMPSUPh%2Fp9bn0kg2GzlhMduDrtYU4LlETFNRTDCap7790hZyQwObFohTbdt2H3ju2HznbZb81ptbA4wj2QcbG5ROBgqLQ7%2FIQBbUirkdkSMBPmki8eMP1bOXXesezDD7K%2FABjqkAQf7G0U9EPHyJpUfDw%2FRvG3B7bCixK%2Bx1ulXuTwJuqBTkxX2H1zQA0Yei3w3eMxpO2E5L5nuwKPo14sAQltW67YJusVR2e%2Fs5oEj89bWws7Lhzv3OaL%2BclFAhHCOjDfTq2h4YOsObXGPNZ8haS0v4mJIabSu%2Bk1saWQNRcAJB%2BFTkpMozqIrjWY7cYwOKofn%2Bl0d5F7%2BIjddvi01d8EhpGo0y962&X-Amz-Signature=8d4afda7e5a31d191732b68ddc065aa014fc535d1d6ffc6ad458db18ab64ea7a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFC2X25E%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5I%2FeqmR2kLF9%2Fdk%2BV8VuB%2BwkXEaBrf5YZgE5qQImJhQIhAJSj31EVBHtrd%2BUEe907MAPIPIdC6wn%2BcPi%2B3BbpyAWvKv8DCDYQABoMNjM3NDIzMTgzODA1IgyDOz70Vd2RNSGpCgwq3APupt0PHdUA1qnGd95A%2FdsxlJ5AifG9fAkhkOLBnX2ob8s9xHcjs5eMwAUJfHRDfz25c7HZyWFm0Wdx206WrM62v9ZnE%2BxHJcMncVDNmHUCAN9jgenO4gIJwTH1BjNc4qWpqhTkMUlUJsySQMGszg8PGoU6f4stXkEZZ%2BZXC6NKTrpIdGD0IeA0K3NWJPqp0N8qpyc%2B4dhQAlGEsljPbcO19M3fa9flPN5Pbnha5Cxv23wCxzHseQnugLAvjzs8piIgEoZdolELrtcz2VDRmSqGkORRcJ35OhfViDgE1%2BEUU%2BgS%2B9VGXfOTzf8KFKFe8ENpyJsCQFmHW34fyHfPUSF4AonldmHvvllNjoWwd7M1vvMJmai5PG%2FziIdhVligV7zwSBaOMl1YXyNgy4QTy6wfyJApvHug6pgZlD0ps4B5K4lQyUg1Mkmc3jvGbTyGqVY1Wfcb9IxJYbiKp1UpCgtrUd8sNZo63gItABeESfCBJOKWdxs4NHind%2F540bISqkMPSUPh%2Fp9bn0kg2GzlhMduDrtYU4LlETFNRTDCap7790hZyQwObFohTbdt2H3ju2HznbZb81ptbA4wj2QcbG5ROBgqLQ7%2FIQBbUirkdkSMBPmki8eMP1bOXXesezDD7K%2FABjqkAQf7G0U9EPHyJpUfDw%2FRvG3B7bCixK%2Bx1ulXuTwJuqBTkxX2H1zQA0Yei3w3eMxpO2E5L5nuwKPo14sAQltW67YJusVR2e%2Fs5oEj89bWws7Lhzv3OaL%2BclFAhHCOjDfTq2h4YOsObXGPNZ8haS0v4mJIabSu%2Bk1saWQNRcAJB%2BFTkpMozqIrjWY7cYwOKofn%2Bl0d5F7%2BIjddvi01d8EhpGo0y962&X-Amz-Signature=bbeccf0aa39afe63423312eeeb46cbf71e4ae954aaa719411f8d68da8bda1090&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFC2X25E%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5I%2FeqmR2kLF9%2Fdk%2BV8VuB%2BwkXEaBrf5YZgE5qQImJhQIhAJSj31EVBHtrd%2BUEe907MAPIPIdC6wn%2BcPi%2B3BbpyAWvKv8DCDYQABoMNjM3NDIzMTgzODA1IgyDOz70Vd2RNSGpCgwq3APupt0PHdUA1qnGd95A%2FdsxlJ5AifG9fAkhkOLBnX2ob8s9xHcjs5eMwAUJfHRDfz25c7HZyWFm0Wdx206WrM62v9ZnE%2BxHJcMncVDNmHUCAN9jgenO4gIJwTH1BjNc4qWpqhTkMUlUJsySQMGszg8PGoU6f4stXkEZZ%2BZXC6NKTrpIdGD0IeA0K3NWJPqp0N8qpyc%2B4dhQAlGEsljPbcO19M3fa9flPN5Pbnha5Cxv23wCxzHseQnugLAvjzs8piIgEoZdolELrtcz2VDRmSqGkORRcJ35OhfViDgE1%2BEUU%2BgS%2B9VGXfOTzf8KFKFe8ENpyJsCQFmHW34fyHfPUSF4AonldmHvvllNjoWwd7M1vvMJmai5PG%2FziIdhVligV7zwSBaOMl1YXyNgy4QTy6wfyJApvHug6pgZlD0ps4B5K4lQyUg1Mkmc3jvGbTyGqVY1Wfcb9IxJYbiKp1UpCgtrUd8sNZo63gItABeESfCBJOKWdxs4NHind%2F540bISqkMPSUPh%2Fp9bn0kg2GzlhMduDrtYU4LlETFNRTDCap7790hZyQwObFohTbdt2H3ju2HznbZb81ptbA4wj2QcbG5ROBgqLQ7%2FIQBbUirkdkSMBPmki8eMP1bOXXesezDD7K%2FABjqkAQf7G0U9EPHyJpUfDw%2FRvG3B7bCixK%2Bx1ulXuTwJuqBTkxX2H1zQA0Yei3w3eMxpO2E5L5nuwKPo14sAQltW67YJusVR2e%2Fs5oEj89bWws7Lhzv3OaL%2BclFAhHCOjDfTq2h4YOsObXGPNZ8haS0v4mJIabSu%2Bk1saWQNRcAJB%2BFTkpMozqIrjWY7cYwOKofn%2Bl0d5F7%2BIjddvi01d8EhpGo0y962&X-Amz-Signature=5d4addc8fe3d1734950b9c2461d46cceae1572cf6f610eb9e09ba1170923c4f5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFC2X25E%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5I%2FeqmR2kLF9%2Fdk%2BV8VuB%2BwkXEaBrf5YZgE5qQImJhQIhAJSj31EVBHtrd%2BUEe907MAPIPIdC6wn%2BcPi%2B3BbpyAWvKv8DCDYQABoMNjM3NDIzMTgzODA1IgyDOz70Vd2RNSGpCgwq3APupt0PHdUA1qnGd95A%2FdsxlJ5AifG9fAkhkOLBnX2ob8s9xHcjs5eMwAUJfHRDfz25c7HZyWFm0Wdx206WrM62v9ZnE%2BxHJcMncVDNmHUCAN9jgenO4gIJwTH1BjNc4qWpqhTkMUlUJsySQMGszg8PGoU6f4stXkEZZ%2BZXC6NKTrpIdGD0IeA0K3NWJPqp0N8qpyc%2B4dhQAlGEsljPbcO19M3fa9flPN5Pbnha5Cxv23wCxzHseQnugLAvjzs8piIgEoZdolELrtcz2VDRmSqGkORRcJ35OhfViDgE1%2BEUU%2BgS%2B9VGXfOTzf8KFKFe8ENpyJsCQFmHW34fyHfPUSF4AonldmHvvllNjoWwd7M1vvMJmai5PG%2FziIdhVligV7zwSBaOMl1YXyNgy4QTy6wfyJApvHug6pgZlD0ps4B5K4lQyUg1Mkmc3jvGbTyGqVY1Wfcb9IxJYbiKp1UpCgtrUd8sNZo63gItABeESfCBJOKWdxs4NHind%2F540bISqkMPSUPh%2Fp9bn0kg2GzlhMduDrtYU4LlETFNRTDCap7790hZyQwObFohTbdt2H3ju2HznbZb81ptbA4wj2QcbG5ROBgqLQ7%2FIQBbUirkdkSMBPmki8eMP1bOXXesezDD7K%2FABjqkAQf7G0U9EPHyJpUfDw%2FRvG3B7bCixK%2Bx1ulXuTwJuqBTkxX2H1zQA0Yei3w3eMxpO2E5L5nuwKPo14sAQltW67YJusVR2e%2Fs5oEj89bWws7Lhzv3OaL%2BclFAhHCOjDfTq2h4YOsObXGPNZ8haS0v4mJIabSu%2Bk1saWQNRcAJB%2BFTkpMozqIrjWY7cYwOKofn%2Bl0d5F7%2BIjddvi01d8EhpGo0y962&X-Amz-Signature=c77b6b6ba5b884231cd41cec01036f92cf911a30f6e1292abd577301a2d51ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFC2X25E%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5I%2FeqmR2kLF9%2Fdk%2BV8VuB%2BwkXEaBrf5YZgE5qQImJhQIhAJSj31EVBHtrd%2BUEe907MAPIPIdC6wn%2BcPi%2B3BbpyAWvKv8DCDYQABoMNjM3NDIzMTgzODA1IgyDOz70Vd2RNSGpCgwq3APupt0PHdUA1qnGd95A%2FdsxlJ5AifG9fAkhkOLBnX2ob8s9xHcjs5eMwAUJfHRDfz25c7HZyWFm0Wdx206WrM62v9ZnE%2BxHJcMncVDNmHUCAN9jgenO4gIJwTH1BjNc4qWpqhTkMUlUJsySQMGszg8PGoU6f4stXkEZZ%2BZXC6NKTrpIdGD0IeA0K3NWJPqp0N8qpyc%2B4dhQAlGEsljPbcO19M3fa9flPN5Pbnha5Cxv23wCxzHseQnugLAvjzs8piIgEoZdolELrtcz2VDRmSqGkORRcJ35OhfViDgE1%2BEUU%2BgS%2B9VGXfOTzf8KFKFe8ENpyJsCQFmHW34fyHfPUSF4AonldmHvvllNjoWwd7M1vvMJmai5PG%2FziIdhVligV7zwSBaOMl1YXyNgy4QTy6wfyJApvHug6pgZlD0ps4B5K4lQyUg1Mkmc3jvGbTyGqVY1Wfcb9IxJYbiKp1UpCgtrUd8sNZo63gItABeESfCBJOKWdxs4NHind%2F540bISqkMPSUPh%2Fp9bn0kg2GzlhMduDrtYU4LlETFNRTDCap7790hZyQwObFohTbdt2H3ju2HznbZb81ptbA4wj2QcbG5ROBgqLQ7%2FIQBbUirkdkSMBPmki8eMP1bOXXesezDD7K%2FABjqkAQf7G0U9EPHyJpUfDw%2FRvG3B7bCixK%2Bx1ulXuTwJuqBTkxX2H1zQA0Yei3w3eMxpO2E5L5nuwKPo14sAQltW67YJusVR2e%2Fs5oEj89bWws7Lhzv3OaL%2BclFAhHCOjDfTq2h4YOsObXGPNZ8haS0v4mJIabSu%2Bk1saWQNRcAJB%2BFTkpMozqIrjWY7cYwOKofn%2Bl0d5F7%2BIjddvi01d8EhpGo0y962&X-Amz-Signature=301e69a3d889755e2761c41086d8e1c9e6c0ccb0b3b6379f1bbc3bc257baa497&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFC2X25E%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5I%2FeqmR2kLF9%2Fdk%2BV8VuB%2BwkXEaBrf5YZgE5qQImJhQIhAJSj31EVBHtrd%2BUEe907MAPIPIdC6wn%2BcPi%2B3BbpyAWvKv8DCDYQABoMNjM3NDIzMTgzODA1IgyDOz70Vd2RNSGpCgwq3APupt0PHdUA1qnGd95A%2FdsxlJ5AifG9fAkhkOLBnX2ob8s9xHcjs5eMwAUJfHRDfz25c7HZyWFm0Wdx206WrM62v9ZnE%2BxHJcMncVDNmHUCAN9jgenO4gIJwTH1BjNc4qWpqhTkMUlUJsySQMGszg8PGoU6f4stXkEZZ%2BZXC6NKTrpIdGD0IeA0K3NWJPqp0N8qpyc%2B4dhQAlGEsljPbcO19M3fa9flPN5Pbnha5Cxv23wCxzHseQnugLAvjzs8piIgEoZdolELrtcz2VDRmSqGkORRcJ35OhfViDgE1%2BEUU%2BgS%2B9VGXfOTzf8KFKFe8ENpyJsCQFmHW34fyHfPUSF4AonldmHvvllNjoWwd7M1vvMJmai5PG%2FziIdhVligV7zwSBaOMl1YXyNgy4QTy6wfyJApvHug6pgZlD0ps4B5K4lQyUg1Mkmc3jvGbTyGqVY1Wfcb9IxJYbiKp1UpCgtrUd8sNZo63gItABeESfCBJOKWdxs4NHind%2F540bISqkMPSUPh%2Fp9bn0kg2GzlhMduDrtYU4LlETFNRTDCap7790hZyQwObFohTbdt2H3ju2HznbZb81ptbA4wj2QcbG5ROBgqLQ7%2FIQBbUirkdkSMBPmki8eMP1bOXXesezDD7K%2FABjqkAQf7G0U9EPHyJpUfDw%2FRvG3B7bCixK%2Bx1ulXuTwJuqBTkxX2H1zQA0Yei3w3eMxpO2E5L5nuwKPo14sAQltW67YJusVR2e%2Fs5oEj89bWws7Lhzv3OaL%2BclFAhHCOjDfTq2h4YOsObXGPNZ8haS0v4mJIabSu%2Bk1saWQNRcAJB%2BFTkpMozqIrjWY7cYwOKofn%2Bl0d5F7%2BIjddvi01d8EhpGo0y962&X-Amz-Signature=eceba77925a67abb686400faaf86eb5fb6e7ac745301e836e420ee8ac6cd1568&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
