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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXV7TVNE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDyiAKHm4jbvbZq%2FJAT14akHwNvf0CDYYPzPWdj2WBZXQIgSSDyypJ0kYQ2A%2FiJBqX45wjyXFRMSro2wDboWWTOKp4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJuIC35wsnSTGcKRircA5K1V0emfD0nh%2BlnysDT8pOKvciO5zEcxhwsIQgTNszWwMFp8g273KffObID%2FdrAfEGWG7qqezyQ03X4C7qwzKU5dpTUxyU9Ds8TPGOvZgEL2k3SLgwoi3dgIElReyAN%2FbBTnVkHDSEpzPK7fPcwDkowXdNhSqeC%2F091V5lFRxpInh8WZq9xXECgd2K%2BCI6MfFRzO8RLA1OPrqRIRU0X5Yco244uBFmQHKAxR4NImxdE0iAXKzTbUfxAPJBirOBGqVC5Zlf7grYKfUg%2BWyjKYB9IrhZFHiQHKvGX4wGpQbzmigw105gyLXzzWfjYtkjwpoOAx%2FrRrwYQvsRIqfw8lhBSHC6y%2B32rRypK%2B1tPtc8DPlx4ZOLi5byzVdKSh89lN%2Fk0LMli8TX7EW4umxxHZbrFwAO3gtMOHp10UF480FeIp23ocTXTo1Vetvf4X%2B%2B0uly7bC9EE2tIGvQSrgZTKly5aCf6gr2MFhL2AzFyAPDrK3z3ryi2vW6O0XUJL7xEAefqgFXboKxF8vduKw2hR3bIlNqGO4XJR5nQdRSPjgmg%2BFq2Lkfhz4xeOKDE2mS%2BYGGsR%2FLPWdouXwTEBZGWC%2FUgdSGw%2BU54kllGBWCx0mp1%2F%2FIsl2CbPwefmaQeMI2%2Bj8EGOqUBtAiysDdbBxoaJp6a4e%2BotbaR%2B32lDQ9y%2Bhh8yCrNf5ZJCdNMiNHIpxQs2hlDaQeJldy2xJHxUl5qzBC4Dfm0%2FCpYg1Nqim8%2BNl%2FJTcdeBxW50ED%2BAVIGDZ7bFHNyRE5fFV0LXfl7H6hhYFS3LinhkjV2%2FkPo8UeN%2BtaPczjTA5vPHZJ%2FIJRSOYqxliaiCtxE0Lw7rNioIuN2fcXa2CuUfsP%2BM6md&X-Amz-Signature=ee88f9ad1fa994abfcc1c36618057fa16e1bb2aab74d9e036d586a8a37547a26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXV7TVNE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDyiAKHm4jbvbZq%2FJAT14akHwNvf0CDYYPzPWdj2WBZXQIgSSDyypJ0kYQ2A%2FiJBqX45wjyXFRMSro2wDboWWTOKp4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJuIC35wsnSTGcKRircA5K1V0emfD0nh%2BlnysDT8pOKvciO5zEcxhwsIQgTNszWwMFp8g273KffObID%2FdrAfEGWG7qqezyQ03X4C7qwzKU5dpTUxyU9Ds8TPGOvZgEL2k3SLgwoi3dgIElReyAN%2FbBTnVkHDSEpzPK7fPcwDkowXdNhSqeC%2F091V5lFRxpInh8WZq9xXECgd2K%2BCI6MfFRzO8RLA1OPrqRIRU0X5Yco244uBFmQHKAxR4NImxdE0iAXKzTbUfxAPJBirOBGqVC5Zlf7grYKfUg%2BWyjKYB9IrhZFHiQHKvGX4wGpQbzmigw105gyLXzzWfjYtkjwpoOAx%2FrRrwYQvsRIqfw8lhBSHC6y%2B32rRypK%2B1tPtc8DPlx4ZOLi5byzVdKSh89lN%2Fk0LMli8TX7EW4umxxHZbrFwAO3gtMOHp10UF480FeIp23ocTXTo1Vetvf4X%2B%2B0uly7bC9EE2tIGvQSrgZTKly5aCf6gr2MFhL2AzFyAPDrK3z3ryi2vW6O0XUJL7xEAefqgFXboKxF8vduKw2hR3bIlNqGO4XJR5nQdRSPjgmg%2BFq2Lkfhz4xeOKDE2mS%2BYGGsR%2FLPWdouXwTEBZGWC%2FUgdSGw%2BU54kllGBWCx0mp1%2F%2FIsl2CbPwefmaQeMI2%2Bj8EGOqUBtAiysDdbBxoaJp6a4e%2BotbaR%2B32lDQ9y%2Bhh8yCrNf5ZJCdNMiNHIpxQs2hlDaQeJldy2xJHxUl5qzBC4Dfm0%2FCpYg1Nqim8%2BNl%2FJTcdeBxW50ED%2BAVIGDZ7bFHNyRE5fFV0LXfl7H6hhYFS3LinhkjV2%2FkPo8UeN%2BtaPczjTA5vPHZJ%2FIJRSOYqxliaiCtxE0Lw7rNioIuN2fcXa2CuUfsP%2BM6md&X-Amz-Signature=639aa05b126328c6393fd9cc71163d5890aa450b33f66fc80215378e1d0ce9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXV7TVNE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDyiAKHm4jbvbZq%2FJAT14akHwNvf0CDYYPzPWdj2WBZXQIgSSDyypJ0kYQ2A%2FiJBqX45wjyXFRMSro2wDboWWTOKp4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJuIC35wsnSTGcKRircA5K1V0emfD0nh%2BlnysDT8pOKvciO5zEcxhwsIQgTNszWwMFp8g273KffObID%2FdrAfEGWG7qqezyQ03X4C7qwzKU5dpTUxyU9Ds8TPGOvZgEL2k3SLgwoi3dgIElReyAN%2FbBTnVkHDSEpzPK7fPcwDkowXdNhSqeC%2F091V5lFRxpInh8WZq9xXECgd2K%2BCI6MfFRzO8RLA1OPrqRIRU0X5Yco244uBFmQHKAxR4NImxdE0iAXKzTbUfxAPJBirOBGqVC5Zlf7grYKfUg%2BWyjKYB9IrhZFHiQHKvGX4wGpQbzmigw105gyLXzzWfjYtkjwpoOAx%2FrRrwYQvsRIqfw8lhBSHC6y%2B32rRypK%2B1tPtc8DPlx4ZOLi5byzVdKSh89lN%2Fk0LMli8TX7EW4umxxHZbrFwAO3gtMOHp10UF480FeIp23ocTXTo1Vetvf4X%2B%2B0uly7bC9EE2tIGvQSrgZTKly5aCf6gr2MFhL2AzFyAPDrK3z3ryi2vW6O0XUJL7xEAefqgFXboKxF8vduKw2hR3bIlNqGO4XJR5nQdRSPjgmg%2BFq2Lkfhz4xeOKDE2mS%2BYGGsR%2FLPWdouXwTEBZGWC%2FUgdSGw%2BU54kllGBWCx0mp1%2F%2FIsl2CbPwefmaQeMI2%2Bj8EGOqUBtAiysDdbBxoaJp6a4e%2BotbaR%2B32lDQ9y%2Bhh8yCrNf5ZJCdNMiNHIpxQs2hlDaQeJldy2xJHxUl5qzBC4Dfm0%2FCpYg1Nqim8%2BNl%2FJTcdeBxW50ED%2BAVIGDZ7bFHNyRE5fFV0LXfl7H6hhYFS3LinhkjV2%2FkPo8UeN%2BtaPczjTA5vPHZJ%2FIJRSOYqxliaiCtxE0Lw7rNioIuN2fcXa2CuUfsP%2BM6md&X-Amz-Signature=bf8ab7c52e3e3bda718ca29ffa91694718d3ddc846ed927d7a5544fd7f152382&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXV7TVNE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDyiAKHm4jbvbZq%2FJAT14akHwNvf0CDYYPzPWdj2WBZXQIgSSDyypJ0kYQ2A%2FiJBqX45wjyXFRMSro2wDboWWTOKp4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJuIC35wsnSTGcKRircA5K1V0emfD0nh%2BlnysDT8pOKvciO5zEcxhwsIQgTNszWwMFp8g273KffObID%2FdrAfEGWG7qqezyQ03X4C7qwzKU5dpTUxyU9Ds8TPGOvZgEL2k3SLgwoi3dgIElReyAN%2FbBTnVkHDSEpzPK7fPcwDkowXdNhSqeC%2F091V5lFRxpInh8WZq9xXECgd2K%2BCI6MfFRzO8RLA1OPrqRIRU0X5Yco244uBFmQHKAxR4NImxdE0iAXKzTbUfxAPJBirOBGqVC5Zlf7grYKfUg%2BWyjKYB9IrhZFHiQHKvGX4wGpQbzmigw105gyLXzzWfjYtkjwpoOAx%2FrRrwYQvsRIqfw8lhBSHC6y%2B32rRypK%2B1tPtc8DPlx4ZOLi5byzVdKSh89lN%2Fk0LMli8TX7EW4umxxHZbrFwAO3gtMOHp10UF480FeIp23ocTXTo1Vetvf4X%2B%2B0uly7bC9EE2tIGvQSrgZTKly5aCf6gr2MFhL2AzFyAPDrK3z3ryi2vW6O0XUJL7xEAefqgFXboKxF8vduKw2hR3bIlNqGO4XJR5nQdRSPjgmg%2BFq2Lkfhz4xeOKDE2mS%2BYGGsR%2FLPWdouXwTEBZGWC%2FUgdSGw%2BU54kllGBWCx0mp1%2F%2FIsl2CbPwefmaQeMI2%2Bj8EGOqUBtAiysDdbBxoaJp6a4e%2BotbaR%2B32lDQ9y%2Bhh8yCrNf5ZJCdNMiNHIpxQs2hlDaQeJldy2xJHxUl5qzBC4Dfm0%2FCpYg1Nqim8%2BNl%2FJTcdeBxW50ED%2BAVIGDZ7bFHNyRE5fFV0LXfl7H6hhYFS3LinhkjV2%2FkPo8UeN%2BtaPczjTA5vPHZJ%2FIJRSOYqxliaiCtxE0Lw7rNioIuN2fcXa2CuUfsP%2BM6md&X-Amz-Signature=2f9282d0750dacf4db58a29e32323d42d384169dcbd6c2aa9794692bc2672991&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXV7TVNE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDyiAKHm4jbvbZq%2FJAT14akHwNvf0CDYYPzPWdj2WBZXQIgSSDyypJ0kYQ2A%2FiJBqX45wjyXFRMSro2wDboWWTOKp4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJuIC35wsnSTGcKRircA5K1V0emfD0nh%2BlnysDT8pOKvciO5zEcxhwsIQgTNszWwMFp8g273KffObID%2FdrAfEGWG7qqezyQ03X4C7qwzKU5dpTUxyU9Ds8TPGOvZgEL2k3SLgwoi3dgIElReyAN%2FbBTnVkHDSEpzPK7fPcwDkowXdNhSqeC%2F091V5lFRxpInh8WZq9xXECgd2K%2BCI6MfFRzO8RLA1OPrqRIRU0X5Yco244uBFmQHKAxR4NImxdE0iAXKzTbUfxAPJBirOBGqVC5Zlf7grYKfUg%2BWyjKYB9IrhZFHiQHKvGX4wGpQbzmigw105gyLXzzWfjYtkjwpoOAx%2FrRrwYQvsRIqfw8lhBSHC6y%2B32rRypK%2B1tPtc8DPlx4ZOLi5byzVdKSh89lN%2Fk0LMli8TX7EW4umxxHZbrFwAO3gtMOHp10UF480FeIp23ocTXTo1Vetvf4X%2B%2B0uly7bC9EE2tIGvQSrgZTKly5aCf6gr2MFhL2AzFyAPDrK3z3ryi2vW6O0XUJL7xEAefqgFXboKxF8vduKw2hR3bIlNqGO4XJR5nQdRSPjgmg%2BFq2Lkfhz4xeOKDE2mS%2BYGGsR%2FLPWdouXwTEBZGWC%2FUgdSGw%2BU54kllGBWCx0mp1%2F%2FIsl2CbPwefmaQeMI2%2Bj8EGOqUBtAiysDdbBxoaJp6a4e%2BotbaR%2B32lDQ9y%2Bhh8yCrNf5ZJCdNMiNHIpxQs2hlDaQeJldy2xJHxUl5qzBC4Dfm0%2FCpYg1Nqim8%2BNl%2FJTcdeBxW50ED%2BAVIGDZ7bFHNyRE5fFV0LXfl7H6hhYFS3LinhkjV2%2FkPo8UeN%2BtaPczjTA5vPHZJ%2FIJRSOYqxliaiCtxE0Lw7rNioIuN2fcXa2CuUfsP%2BM6md&X-Amz-Signature=18e7e5d6b7216e5cb9786125c660ceb7b15c5e5d040fc1ab2e070a7d5943811b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXV7TVNE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDyiAKHm4jbvbZq%2FJAT14akHwNvf0CDYYPzPWdj2WBZXQIgSSDyypJ0kYQ2A%2FiJBqX45wjyXFRMSro2wDboWWTOKp4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJuIC35wsnSTGcKRircA5K1V0emfD0nh%2BlnysDT8pOKvciO5zEcxhwsIQgTNszWwMFp8g273KffObID%2FdrAfEGWG7qqezyQ03X4C7qwzKU5dpTUxyU9Ds8TPGOvZgEL2k3SLgwoi3dgIElReyAN%2FbBTnVkHDSEpzPK7fPcwDkowXdNhSqeC%2F091V5lFRxpInh8WZq9xXECgd2K%2BCI6MfFRzO8RLA1OPrqRIRU0X5Yco244uBFmQHKAxR4NImxdE0iAXKzTbUfxAPJBirOBGqVC5Zlf7grYKfUg%2BWyjKYB9IrhZFHiQHKvGX4wGpQbzmigw105gyLXzzWfjYtkjwpoOAx%2FrRrwYQvsRIqfw8lhBSHC6y%2B32rRypK%2B1tPtc8DPlx4ZOLi5byzVdKSh89lN%2Fk0LMli8TX7EW4umxxHZbrFwAO3gtMOHp10UF480FeIp23ocTXTo1Vetvf4X%2B%2B0uly7bC9EE2tIGvQSrgZTKly5aCf6gr2MFhL2AzFyAPDrK3z3ryi2vW6O0XUJL7xEAefqgFXboKxF8vduKw2hR3bIlNqGO4XJR5nQdRSPjgmg%2BFq2Lkfhz4xeOKDE2mS%2BYGGsR%2FLPWdouXwTEBZGWC%2FUgdSGw%2BU54kllGBWCx0mp1%2F%2FIsl2CbPwefmaQeMI2%2Bj8EGOqUBtAiysDdbBxoaJp6a4e%2BotbaR%2B32lDQ9y%2Bhh8yCrNf5ZJCdNMiNHIpxQs2hlDaQeJldy2xJHxUl5qzBC4Dfm0%2FCpYg1Nqim8%2BNl%2FJTcdeBxW50ED%2BAVIGDZ7bFHNyRE5fFV0LXfl7H6hhYFS3LinhkjV2%2FkPo8UeN%2BtaPczjTA5vPHZJ%2FIJRSOYqxliaiCtxE0Lw7rNioIuN2fcXa2CuUfsP%2BM6md&X-Amz-Signature=308c1d97a3ce5c70ab162815314a088f4079f0c0710f67a067b15a2fbc9c22a7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXV7TVNE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDyiAKHm4jbvbZq%2FJAT14akHwNvf0CDYYPzPWdj2WBZXQIgSSDyypJ0kYQ2A%2FiJBqX45wjyXFRMSro2wDboWWTOKp4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJuIC35wsnSTGcKRircA5K1V0emfD0nh%2BlnysDT8pOKvciO5zEcxhwsIQgTNszWwMFp8g273KffObID%2FdrAfEGWG7qqezyQ03X4C7qwzKU5dpTUxyU9Ds8TPGOvZgEL2k3SLgwoi3dgIElReyAN%2FbBTnVkHDSEpzPK7fPcwDkowXdNhSqeC%2F091V5lFRxpInh8WZq9xXECgd2K%2BCI6MfFRzO8RLA1OPrqRIRU0X5Yco244uBFmQHKAxR4NImxdE0iAXKzTbUfxAPJBirOBGqVC5Zlf7grYKfUg%2BWyjKYB9IrhZFHiQHKvGX4wGpQbzmigw105gyLXzzWfjYtkjwpoOAx%2FrRrwYQvsRIqfw8lhBSHC6y%2B32rRypK%2B1tPtc8DPlx4ZOLi5byzVdKSh89lN%2Fk0LMli8TX7EW4umxxHZbrFwAO3gtMOHp10UF480FeIp23ocTXTo1Vetvf4X%2B%2B0uly7bC9EE2tIGvQSrgZTKly5aCf6gr2MFhL2AzFyAPDrK3z3ryi2vW6O0XUJL7xEAefqgFXboKxF8vduKw2hR3bIlNqGO4XJR5nQdRSPjgmg%2BFq2Lkfhz4xeOKDE2mS%2BYGGsR%2FLPWdouXwTEBZGWC%2FUgdSGw%2BU54kllGBWCx0mp1%2F%2FIsl2CbPwefmaQeMI2%2Bj8EGOqUBtAiysDdbBxoaJp6a4e%2BotbaR%2B32lDQ9y%2Bhh8yCrNf5ZJCdNMiNHIpxQs2hlDaQeJldy2xJHxUl5qzBC4Dfm0%2FCpYg1Nqim8%2BNl%2FJTcdeBxW50ED%2BAVIGDZ7bFHNyRE5fFV0LXfl7H6hhYFS3LinhkjV2%2FkPo8UeN%2BtaPczjTA5vPHZJ%2FIJRSOYqxliaiCtxE0Lw7rNioIuN2fcXa2CuUfsP%2BM6md&X-Amz-Signature=166212ca1ae93323480e5c7fedc3dbe8aa9d74f208e37ff9399df2efbe487e92&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
