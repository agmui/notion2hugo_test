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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ4OU3I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmLGpH%2FTMqqLHj2xAckGONw926sOea3%2BACgXRWxb3RoAiEAsIxyZnPAc03zZdaop%2BoY2spdk9g8BDMGdw7%2BE%2Bio5Nwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDAI8VZRINy1B%2BOfEsircA%2Btv6JAjMIcktLqLFIOUAyUNNYxHR8ZbFE0uRCxxiRuv5BN%2Fen%2FNoiS7YkGvPwaiMaWbBpWTwlnlZ8ymt5pNx2ud7g7Lr8k91tXZr0o%2FL3Jc%2BttpDZYA0M8jc5xXjA6Geboeixcm0anzCo%2Bn%2BvyIF9YqAZLC1%2BK8qRhKcgboTbV1ndMyR%2BnoJ8M1RyjH8q%2FunaoTfpo0VWSVmnWCusIHt5cs%2BSvPSf47p6N4KPGHUxE4PszBSl5ncZiSj%2BDGY33NeahgByJ64ErhNR9Kd%2FuSE%2FtdNmktXpZkTv19%2Fsl9veFtdl2n%2BuMuPEnVswNCDlrdoPmXXxxbizJ5ST7sO%2BXyEKpClxoSWNzoIscvs%2BiS3vjD9ki7QqzyfGJyXMrxpYMpY6lIGewWbXMSWUrzilIIm14d5Q3ueFI542w1YmmBDm8AqvjOEKiyem4bouzvn2HRBE%2BCnsVKPOfvF90FM8EkonOiRuguCYzrFlf94ukiVvQaZFzEURtXyYkOfUvcTS%2FJE%2BMwjxqkwL4tHPeklF2PNRif%2FPcfvJVfLee2%2F0GLqlB2%2BIxwCtfGGm0DYefx86H480MRSu8jHpQy8Y1Qi186BXa2xGXW7fdNaxt9B3xEn1EqM8204WlV2KHrQ25jMPvMv78GOqUBxRxY7DOYnMbRVCRWiuApnX7jbAjkZ%2BpWlUFPilnmkuKRDz4aL1bqBEbsTPg7HKd0yNhznkMQOmWsfqbo9QzDRqSaeDW6ov7AOvxoOeAVuGBpbkHDz%2BmNRKO3S9aSBot5CG1HMzroMOqN3nq7%2BiQPM5%2BSnRVYyw1cy8ltyFjgqTs%2BZhU3Uz2Frk3LqW9t3PoCWf9M%2BBNZAeKBazEIrGYcQTsKHe2d&X-Amz-Signature=74740bb312647330c5a7c15154158434258b30527bae0355232a58df7830ae94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ4OU3I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmLGpH%2FTMqqLHj2xAckGONw926sOea3%2BACgXRWxb3RoAiEAsIxyZnPAc03zZdaop%2BoY2spdk9g8BDMGdw7%2BE%2Bio5Nwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDAI8VZRINy1B%2BOfEsircA%2Btv6JAjMIcktLqLFIOUAyUNNYxHR8ZbFE0uRCxxiRuv5BN%2Fen%2FNoiS7YkGvPwaiMaWbBpWTwlnlZ8ymt5pNx2ud7g7Lr8k91tXZr0o%2FL3Jc%2BttpDZYA0M8jc5xXjA6Geboeixcm0anzCo%2Bn%2BvyIF9YqAZLC1%2BK8qRhKcgboTbV1ndMyR%2BnoJ8M1RyjH8q%2FunaoTfpo0VWSVmnWCusIHt5cs%2BSvPSf47p6N4KPGHUxE4PszBSl5ncZiSj%2BDGY33NeahgByJ64ErhNR9Kd%2FuSE%2FtdNmktXpZkTv19%2Fsl9veFtdl2n%2BuMuPEnVswNCDlrdoPmXXxxbizJ5ST7sO%2BXyEKpClxoSWNzoIscvs%2BiS3vjD9ki7QqzyfGJyXMrxpYMpY6lIGewWbXMSWUrzilIIm14d5Q3ueFI542w1YmmBDm8AqvjOEKiyem4bouzvn2HRBE%2BCnsVKPOfvF90FM8EkonOiRuguCYzrFlf94ukiVvQaZFzEURtXyYkOfUvcTS%2FJE%2BMwjxqkwL4tHPeklF2PNRif%2FPcfvJVfLee2%2F0GLqlB2%2BIxwCtfGGm0DYefx86H480MRSu8jHpQy8Y1Qi186BXa2xGXW7fdNaxt9B3xEn1EqM8204WlV2KHrQ25jMPvMv78GOqUBxRxY7DOYnMbRVCRWiuApnX7jbAjkZ%2BpWlUFPilnmkuKRDz4aL1bqBEbsTPg7HKd0yNhznkMQOmWsfqbo9QzDRqSaeDW6ov7AOvxoOeAVuGBpbkHDz%2BmNRKO3S9aSBot5CG1HMzroMOqN3nq7%2BiQPM5%2BSnRVYyw1cy8ltyFjgqTs%2BZhU3Uz2Frk3LqW9t3PoCWf9M%2BBNZAeKBazEIrGYcQTsKHe2d&X-Amz-Signature=37af9bd17a8ee7438cd76ec9c00c43ddca0ce945762d8498ad4589ba343a21d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ4OU3I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmLGpH%2FTMqqLHj2xAckGONw926sOea3%2BACgXRWxb3RoAiEAsIxyZnPAc03zZdaop%2BoY2spdk9g8BDMGdw7%2BE%2Bio5Nwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDAI8VZRINy1B%2BOfEsircA%2Btv6JAjMIcktLqLFIOUAyUNNYxHR8ZbFE0uRCxxiRuv5BN%2Fen%2FNoiS7YkGvPwaiMaWbBpWTwlnlZ8ymt5pNx2ud7g7Lr8k91tXZr0o%2FL3Jc%2BttpDZYA0M8jc5xXjA6Geboeixcm0anzCo%2Bn%2BvyIF9YqAZLC1%2BK8qRhKcgboTbV1ndMyR%2BnoJ8M1RyjH8q%2FunaoTfpo0VWSVmnWCusIHt5cs%2BSvPSf47p6N4KPGHUxE4PszBSl5ncZiSj%2BDGY33NeahgByJ64ErhNR9Kd%2FuSE%2FtdNmktXpZkTv19%2Fsl9veFtdl2n%2BuMuPEnVswNCDlrdoPmXXxxbizJ5ST7sO%2BXyEKpClxoSWNzoIscvs%2BiS3vjD9ki7QqzyfGJyXMrxpYMpY6lIGewWbXMSWUrzilIIm14d5Q3ueFI542w1YmmBDm8AqvjOEKiyem4bouzvn2HRBE%2BCnsVKPOfvF90FM8EkonOiRuguCYzrFlf94ukiVvQaZFzEURtXyYkOfUvcTS%2FJE%2BMwjxqkwL4tHPeklF2PNRif%2FPcfvJVfLee2%2F0GLqlB2%2BIxwCtfGGm0DYefx86H480MRSu8jHpQy8Y1Qi186BXa2xGXW7fdNaxt9B3xEn1EqM8204WlV2KHrQ25jMPvMv78GOqUBxRxY7DOYnMbRVCRWiuApnX7jbAjkZ%2BpWlUFPilnmkuKRDz4aL1bqBEbsTPg7HKd0yNhznkMQOmWsfqbo9QzDRqSaeDW6ov7AOvxoOeAVuGBpbkHDz%2BmNRKO3S9aSBot5CG1HMzroMOqN3nq7%2BiQPM5%2BSnRVYyw1cy8ltyFjgqTs%2BZhU3Uz2Frk3LqW9t3PoCWf9M%2BBNZAeKBazEIrGYcQTsKHe2d&X-Amz-Signature=f78e400690d1a90b2722cf3f172ef82ddb034f63ff39a996b80adde4b2f1b355&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ4OU3I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmLGpH%2FTMqqLHj2xAckGONw926sOea3%2BACgXRWxb3RoAiEAsIxyZnPAc03zZdaop%2BoY2spdk9g8BDMGdw7%2BE%2Bio5Nwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDAI8VZRINy1B%2BOfEsircA%2Btv6JAjMIcktLqLFIOUAyUNNYxHR8ZbFE0uRCxxiRuv5BN%2Fen%2FNoiS7YkGvPwaiMaWbBpWTwlnlZ8ymt5pNx2ud7g7Lr8k91tXZr0o%2FL3Jc%2BttpDZYA0M8jc5xXjA6Geboeixcm0anzCo%2Bn%2BvyIF9YqAZLC1%2BK8qRhKcgboTbV1ndMyR%2BnoJ8M1RyjH8q%2FunaoTfpo0VWSVmnWCusIHt5cs%2BSvPSf47p6N4KPGHUxE4PszBSl5ncZiSj%2BDGY33NeahgByJ64ErhNR9Kd%2FuSE%2FtdNmktXpZkTv19%2Fsl9veFtdl2n%2BuMuPEnVswNCDlrdoPmXXxxbizJ5ST7sO%2BXyEKpClxoSWNzoIscvs%2BiS3vjD9ki7QqzyfGJyXMrxpYMpY6lIGewWbXMSWUrzilIIm14d5Q3ueFI542w1YmmBDm8AqvjOEKiyem4bouzvn2HRBE%2BCnsVKPOfvF90FM8EkonOiRuguCYzrFlf94ukiVvQaZFzEURtXyYkOfUvcTS%2FJE%2BMwjxqkwL4tHPeklF2PNRif%2FPcfvJVfLee2%2F0GLqlB2%2BIxwCtfGGm0DYefx86H480MRSu8jHpQy8Y1Qi186BXa2xGXW7fdNaxt9B3xEn1EqM8204WlV2KHrQ25jMPvMv78GOqUBxRxY7DOYnMbRVCRWiuApnX7jbAjkZ%2BpWlUFPilnmkuKRDz4aL1bqBEbsTPg7HKd0yNhznkMQOmWsfqbo9QzDRqSaeDW6ov7AOvxoOeAVuGBpbkHDz%2BmNRKO3S9aSBot5CG1HMzroMOqN3nq7%2BiQPM5%2BSnRVYyw1cy8ltyFjgqTs%2BZhU3Uz2Frk3LqW9t3PoCWf9M%2BBNZAeKBazEIrGYcQTsKHe2d&X-Amz-Signature=34acb4af6614295aeeb80fd31d0d5860841042411486edd6a6f4c21ede860b08&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ4OU3I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmLGpH%2FTMqqLHj2xAckGONw926sOea3%2BACgXRWxb3RoAiEAsIxyZnPAc03zZdaop%2BoY2spdk9g8BDMGdw7%2BE%2Bio5Nwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDAI8VZRINy1B%2BOfEsircA%2Btv6JAjMIcktLqLFIOUAyUNNYxHR8ZbFE0uRCxxiRuv5BN%2Fen%2FNoiS7YkGvPwaiMaWbBpWTwlnlZ8ymt5pNx2ud7g7Lr8k91tXZr0o%2FL3Jc%2BttpDZYA0M8jc5xXjA6Geboeixcm0anzCo%2Bn%2BvyIF9YqAZLC1%2BK8qRhKcgboTbV1ndMyR%2BnoJ8M1RyjH8q%2FunaoTfpo0VWSVmnWCusIHt5cs%2BSvPSf47p6N4KPGHUxE4PszBSl5ncZiSj%2BDGY33NeahgByJ64ErhNR9Kd%2FuSE%2FtdNmktXpZkTv19%2Fsl9veFtdl2n%2BuMuPEnVswNCDlrdoPmXXxxbizJ5ST7sO%2BXyEKpClxoSWNzoIscvs%2BiS3vjD9ki7QqzyfGJyXMrxpYMpY6lIGewWbXMSWUrzilIIm14d5Q3ueFI542w1YmmBDm8AqvjOEKiyem4bouzvn2HRBE%2BCnsVKPOfvF90FM8EkonOiRuguCYzrFlf94ukiVvQaZFzEURtXyYkOfUvcTS%2FJE%2BMwjxqkwL4tHPeklF2PNRif%2FPcfvJVfLee2%2F0GLqlB2%2BIxwCtfGGm0DYefx86H480MRSu8jHpQy8Y1Qi186BXa2xGXW7fdNaxt9B3xEn1EqM8204WlV2KHrQ25jMPvMv78GOqUBxRxY7DOYnMbRVCRWiuApnX7jbAjkZ%2BpWlUFPilnmkuKRDz4aL1bqBEbsTPg7HKd0yNhznkMQOmWsfqbo9QzDRqSaeDW6ov7AOvxoOeAVuGBpbkHDz%2BmNRKO3S9aSBot5CG1HMzroMOqN3nq7%2BiQPM5%2BSnRVYyw1cy8ltyFjgqTs%2BZhU3Uz2Frk3LqW9t3PoCWf9M%2BBNZAeKBazEIrGYcQTsKHe2d&X-Amz-Signature=2778441a223564af16c741f2337859f71ab667209ae838c05cd6a3a96da816c0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ4OU3I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmLGpH%2FTMqqLHj2xAckGONw926sOea3%2BACgXRWxb3RoAiEAsIxyZnPAc03zZdaop%2BoY2spdk9g8BDMGdw7%2BE%2Bio5Nwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDAI8VZRINy1B%2BOfEsircA%2Btv6JAjMIcktLqLFIOUAyUNNYxHR8ZbFE0uRCxxiRuv5BN%2Fen%2FNoiS7YkGvPwaiMaWbBpWTwlnlZ8ymt5pNx2ud7g7Lr8k91tXZr0o%2FL3Jc%2BttpDZYA0M8jc5xXjA6Geboeixcm0anzCo%2Bn%2BvyIF9YqAZLC1%2BK8qRhKcgboTbV1ndMyR%2BnoJ8M1RyjH8q%2FunaoTfpo0VWSVmnWCusIHt5cs%2BSvPSf47p6N4KPGHUxE4PszBSl5ncZiSj%2BDGY33NeahgByJ64ErhNR9Kd%2FuSE%2FtdNmktXpZkTv19%2Fsl9veFtdl2n%2BuMuPEnVswNCDlrdoPmXXxxbizJ5ST7sO%2BXyEKpClxoSWNzoIscvs%2BiS3vjD9ki7QqzyfGJyXMrxpYMpY6lIGewWbXMSWUrzilIIm14d5Q3ueFI542w1YmmBDm8AqvjOEKiyem4bouzvn2HRBE%2BCnsVKPOfvF90FM8EkonOiRuguCYzrFlf94ukiVvQaZFzEURtXyYkOfUvcTS%2FJE%2BMwjxqkwL4tHPeklF2PNRif%2FPcfvJVfLee2%2F0GLqlB2%2BIxwCtfGGm0DYefx86H480MRSu8jHpQy8Y1Qi186BXa2xGXW7fdNaxt9B3xEn1EqM8204WlV2KHrQ25jMPvMv78GOqUBxRxY7DOYnMbRVCRWiuApnX7jbAjkZ%2BpWlUFPilnmkuKRDz4aL1bqBEbsTPg7HKd0yNhznkMQOmWsfqbo9QzDRqSaeDW6ov7AOvxoOeAVuGBpbkHDz%2BmNRKO3S9aSBot5CG1HMzroMOqN3nq7%2BiQPM5%2BSnRVYyw1cy8ltyFjgqTs%2BZhU3Uz2Frk3LqW9t3PoCWf9M%2BBNZAeKBazEIrGYcQTsKHe2d&X-Amz-Signature=d03df42640b4796eb15e3e8a746f9dacece37e52117e082d9a0b62c3f8f69a38&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ4OU3I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmLGpH%2FTMqqLHj2xAckGONw926sOea3%2BACgXRWxb3RoAiEAsIxyZnPAc03zZdaop%2BoY2spdk9g8BDMGdw7%2BE%2Bio5Nwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDAI8VZRINy1B%2BOfEsircA%2Btv6JAjMIcktLqLFIOUAyUNNYxHR8ZbFE0uRCxxiRuv5BN%2Fen%2FNoiS7YkGvPwaiMaWbBpWTwlnlZ8ymt5pNx2ud7g7Lr8k91tXZr0o%2FL3Jc%2BttpDZYA0M8jc5xXjA6Geboeixcm0anzCo%2Bn%2BvyIF9YqAZLC1%2BK8qRhKcgboTbV1ndMyR%2BnoJ8M1RyjH8q%2FunaoTfpo0VWSVmnWCusIHt5cs%2BSvPSf47p6N4KPGHUxE4PszBSl5ncZiSj%2BDGY33NeahgByJ64ErhNR9Kd%2FuSE%2FtdNmktXpZkTv19%2Fsl9veFtdl2n%2BuMuPEnVswNCDlrdoPmXXxxbizJ5ST7sO%2BXyEKpClxoSWNzoIscvs%2BiS3vjD9ki7QqzyfGJyXMrxpYMpY6lIGewWbXMSWUrzilIIm14d5Q3ueFI542w1YmmBDm8AqvjOEKiyem4bouzvn2HRBE%2BCnsVKPOfvF90FM8EkonOiRuguCYzrFlf94ukiVvQaZFzEURtXyYkOfUvcTS%2FJE%2BMwjxqkwL4tHPeklF2PNRif%2FPcfvJVfLee2%2F0GLqlB2%2BIxwCtfGGm0DYefx86H480MRSu8jHpQy8Y1Qi186BXa2xGXW7fdNaxt9B3xEn1EqM8204WlV2KHrQ25jMPvMv78GOqUBxRxY7DOYnMbRVCRWiuApnX7jbAjkZ%2BpWlUFPilnmkuKRDz4aL1bqBEbsTPg7HKd0yNhznkMQOmWsfqbo9QzDRqSaeDW6ov7AOvxoOeAVuGBpbkHDz%2BmNRKO3S9aSBot5CG1HMzroMOqN3nq7%2BiQPM5%2BSnRVYyw1cy8ltyFjgqTs%2BZhU3Uz2Frk3LqW9t3PoCWf9M%2BBNZAeKBazEIrGYcQTsKHe2d&X-Amz-Signature=e39de7fdb549531c662acc99412f087709e93d2e6e6ad47e1faf6dabd917a1db&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
