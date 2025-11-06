---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QYJ2SR%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIAqLJyPrbh3O5fJKz%2BXVo5P4ZMO3M3J4DHI0JjaHrVAiBOP7XHhzniAb3LnusxQYxFyM7JcwMRfBNuMxK%2F%2FjBrpyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0L2hmqiwWEn1a2lVKtwDWOopz7TdjQzhcAWWkk7yAIAzUFvU1IzksCNpMOQHDu7Js4nO%2B1QMLS4AtneF9WSB43actBNVrvk%2B%2FTYdmZw9EqlVrkA0tWqJZbrIrc7Dgn10lN%2FOgo93SmFeeHADy8r%2FC2Oym8SXNDyNeccLBBOTrlLBDZv8ElDActvtWe7ZJ5HGFFrPzhEJWj5sBWzaQOdSJ71iVKLY5zzNu6LbauRjofFOhdq2q0Yc7OupZsJgGiYRQS%2BqTyI65DxLpQ8UR3VtvXqXwMXG85EuEjQVkJC%2BDXNVNJ45f38ePnVF7j0w8QnNy5j9aMg61e7u5gbMjp1i5yQx1b2J0yI1B0Gi7uWfgQtpKcX%2B7qTl%2B%2BU8RMzx8m7s9g616NVl04nFqkdcXNQjdjxrRMixmGkfnPoxZbSSMsEM3GWxqC4qBu9tcJnCIj7vpKer%2BTb61zi%2FaYBAsq2yH58rG%2BTbRjNHIIyvjiMJpwgTdDNNUG7J2bG3OdMDuK3FU7nljEFrPCx7jDpd%2BkoNUHSrwMed2NGAu3oRcwBDAx3ppJ8JuVOZVcxiasmD2d3fx1SxZ4Lrebudn96iv1FvQ1okmsjY7GdjfKDtySUBm%2Bd95iU6Y3tGW9Ray%2Fuh%2FblLa%2FCkELeRedvj7zMwkPKvyAY6pgHVKbfXnD4whx2Ce6M%2BWOmFCbgkdjah4Rq0U43PfIijejLFbFgl5sEZBgGG0%2BLmIb8vSELuusj5OYa3JElHC9%2BIpbworQ5b%2FLHJytgi1CqfR%2BiJGQFo4HrMOqMHNaRif0Ybcr3Vikjxy9tb%2Fom5oTJuNHiLvmUvowa1Pa9gJ4r99Z3Xjo127hgRapCZt0aunM9LwOnGcdEKDRCqr3%2F0J%2Fjw3miQOwGe&X-Amz-Signature=6d35a0ebd7121177f573b0076654caaa9ae7a9e69e9b9109f4943d4f6f8ae8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QYJ2SR%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIAqLJyPrbh3O5fJKz%2BXVo5P4ZMO3M3J4DHI0JjaHrVAiBOP7XHhzniAb3LnusxQYxFyM7JcwMRfBNuMxK%2F%2FjBrpyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0L2hmqiwWEn1a2lVKtwDWOopz7TdjQzhcAWWkk7yAIAzUFvU1IzksCNpMOQHDu7Js4nO%2B1QMLS4AtneF9WSB43actBNVrvk%2B%2FTYdmZw9EqlVrkA0tWqJZbrIrc7Dgn10lN%2FOgo93SmFeeHADy8r%2FC2Oym8SXNDyNeccLBBOTrlLBDZv8ElDActvtWe7ZJ5HGFFrPzhEJWj5sBWzaQOdSJ71iVKLY5zzNu6LbauRjofFOhdq2q0Yc7OupZsJgGiYRQS%2BqTyI65DxLpQ8UR3VtvXqXwMXG85EuEjQVkJC%2BDXNVNJ45f38ePnVF7j0w8QnNy5j9aMg61e7u5gbMjp1i5yQx1b2J0yI1B0Gi7uWfgQtpKcX%2B7qTl%2B%2BU8RMzx8m7s9g616NVl04nFqkdcXNQjdjxrRMixmGkfnPoxZbSSMsEM3GWxqC4qBu9tcJnCIj7vpKer%2BTb61zi%2FaYBAsq2yH58rG%2BTbRjNHIIyvjiMJpwgTdDNNUG7J2bG3OdMDuK3FU7nljEFrPCx7jDpd%2BkoNUHSrwMed2NGAu3oRcwBDAx3ppJ8JuVOZVcxiasmD2d3fx1SxZ4Lrebudn96iv1FvQ1okmsjY7GdjfKDtySUBm%2Bd95iU6Y3tGW9Ray%2Fuh%2FblLa%2FCkELeRedvj7zMwkPKvyAY6pgHVKbfXnD4whx2Ce6M%2BWOmFCbgkdjah4Rq0U43PfIijejLFbFgl5sEZBgGG0%2BLmIb8vSELuusj5OYa3JElHC9%2BIpbworQ5b%2FLHJytgi1CqfR%2BiJGQFo4HrMOqMHNaRif0Ybcr3Vikjxy9tb%2Fom5oTJuNHiLvmUvowa1Pa9gJ4r99Z3Xjo127hgRapCZt0aunM9LwOnGcdEKDRCqr3%2F0J%2Fjw3miQOwGe&X-Amz-Signature=26446a5bb6631b581ecb232e16b7a812cb0e5446307fbfc8681aa6eac0bc8354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QYJ2SR%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIAqLJyPrbh3O5fJKz%2BXVo5P4ZMO3M3J4DHI0JjaHrVAiBOP7XHhzniAb3LnusxQYxFyM7JcwMRfBNuMxK%2F%2FjBrpyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0L2hmqiwWEn1a2lVKtwDWOopz7TdjQzhcAWWkk7yAIAzUFvU1IzksCNpMOQHDu7Js4nO%2B1QMLS4AtneF9WSB43actBNVrvk%2B%2FTYdmZw9EqlVrkA0tWqJZbrIrc7Dgn10lN%2FOgo93SmFeeHADy8r%2FC2Oym8SXNDyNeccLBBOTrlLBDZv8ElDActvtWe7ZJ5HGFFrPzhEJWj5sBWzaQOdSJ71iVKLY5zzNu6LbauRjofFOhdq2q0Yc7OupZsJgGiYRQS%2BqTyI65DxLpQ8UR3VtvXqXwMXG85EuEjQVkJC%2BDXNVNJ45f38ePnVF7j0w8QnNy5j9aMg61e7u5gbMjp1i5yQx1b2J0yI1B0Gi7uWfgQtpKcX%2B7qTl%2B%2BU8RMzx8m7s9g616NVl04nFqkdcXNQjdjxrRMixmGkfnPoxZbSSMsEM3GWxqC4qBu9tcJnCIj7vpKer%2BTb61zi%2FaYBAsq2yH58rG%2BTbRjNHIIyvjiMJpwgTdDNNUG7J2bG3OdMDuK3FU7nljEFrPCx7jDpd%2BkoNUHSrwMed2NGAu3oRcwBDAx3ppJ8JuVOZVcxiasmD2d3fx1SxZ4Lrebudn96iv1FvQ1okmsjY7GdjfKDtySUBm%2Bd95iU6Y3tGW9Ray%2Fuh%2FblLa%2FCkELeRedvj7zMwkPKvyAY6pgHVKbfXnD4whx2Ce6M%2BWOmFCbgkdjah4Rq0U43PfIijejLFbFgl5sEZBgGG0%2BLmIb8vSELuusj5OYa3JElHC9%2BIpbworQ5b%2FLHJytgi1CqfR%2BiJGQFo4HrMOqMHNaRif0Ybcr3Vikjxy9tb%2Fom5oTJuNHiLvmUvowa1Pa9gJ4r99Z3Xjo127hgRapCZt0aunM9LwOnGcdEKDRCqr3%2F0J%2Fjw3miQOwGe&X-Amz-Signature=1c1d1ec954b53b39fb170d782e9eae1b69c032986e8f1b22ff67acbf5fc0b9b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QYJ2SR%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIAqLJyPrbh3O5fJKz%2BXVo5P4ZMO3M3J4DHI0JjaHrVAiBOP7XHhzniAb3LnusxQYxFyM7JcwMRfBNuMxK%2F%2FjBrpyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0L2hmqiwWEn1a2lVKtwDWOopz7TdjQzhcAWWkk7yAIAzUFvU1IzksCNpMOQHDu7Js4nO%2B1QMLS4AtneF9WSB43actBNVrvk%2B%2FTYdmZw9EqlVrkA0tWqJZbrIrc7Dgn10lN%2FOgo93SmFeeHADy8r%2FC2Oym8SXNDyNeccLBBOTrlLBDZv8ElDActvtWe7ZJ5HGFFrPzhEJWj5sBWzaQOdSJ71iVKLY5zzNu6LbauRjofFOhdq2q0Yc7OupZsJgGiYRQS%2BqTyI65DxLpQ8UR3VtvXqXwMXG85EuEjQVkJC%2BDXNVNJ45f38ePnVF7j0w8QnNy5j9aMg61e7u5gbMjp1i5yQx1b2J0yI1B0Gi7uWfgQtpKcX%2B7qTl%2B%2BU8RMzx8m7s9g616NVl04nFqkdcXNQjdjxrRMixmGkfnPoxZbSSMsEM3GWxqC4qBu9tcJnCIj7vpKer%2BTb61zi%2FaYBAsq2yH58rG%2BTbRjNHIIyvjiMJpwgTdDNNUG7J2bG3OdMDuK3FU7nljEFrPCx7jDpd%2BkoNUHSrwMed2NGAu3oRcwBDAx3ppJ8JuVOZVcxiasmD2d3fx1SxZ4Lrebudn96iv1FvQ1okmsjY7GdjfKDtySUBm%2Bd95iU6Y3tGW9Ray%2Fuh%2FblLa%2FCkELeRedvj7zMwkPKvyAY6pgHVKbfXnD4whx2Ce6M%2BWOmFCbgkdjah4Rq0U43PfIijejLFbFgl5sEZBgGG0%2BLmIb8vSELuusj5OYa3JElHC9%2BIpbworQ5b%2FLHJytgi1CqfR%2BiJGQFo4HrMOqMHNaRif0Ybcr3Vikjxy9tb%2Fom5oTJuNHiLvmUvowa1Pa9gJ4r99Z3Xjo127hgRapCZt0aunM9LwOnGcdEKDRCqr3%2F0J%2Fjw3miQOwGe&X-Amz-Signature=4845a0c0ce4fb832331c6f0b3cd08a2cee154474b0be3b980a0da438395a9758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QYJ2SR%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIAqLJyPrbh3O5fJKz%2BXVo5P4ZMO3M3J4DHI0JjaHrVAiBOP7XHhzniAb3LnusxQYxFyM7JcwMRfBNuMxK%2F%2FjBrpyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0L2hmqiwWEn1a2lVKtwDWOopz7TdjQzhcAWWkk7yAIAzUFvU1IzksCNpMOQHDu7Js4nO%2B1QMLS4AtneF9WSB43actBNVrvk%2B%2FTYdmZw9EqlVrkA0tWqJZbrIrc7Dgn10lN%2FOgo93SmFeeHADy8r%2FC2Oym8SXNDyNeccLBBOTrlLBDZv8ElDActvtWe7ZJ5HGFFrPzhEJWj5sBWzaQOdSJ71iVKLY5zzNu6LbauRjofFOhdq2q0Yc7OupZsJgGiYRQS%2BqTyI65DxLpQ8UR3VtvXqXwMXG85EuEjQVkJC%2BDXNVNJ45f38ePnVF7j0w8QnNy5j9aMg61e7u5gbMjp1i5yQx1b2J0yI1B0Gi7uWfgQtpKcX%2B7qTl%2B%2BU8RMzx8m7s9g616NVl04nFqkdcXNQjdjxrRMixmGkfnPoxZbSSMsEM3GWxqC4qBu9tcJnCIj7vpKer%2BTb61zi%2FaYBAsq2yH58rG%2BTbRjNHIIyvjiMJpwgTdDNNUG7J2bG3OdMDuK3FU7nljEFrPCx7jDpd%2BkoNUHSrwMed2NGAu3oRcwBDAx3ppJ8JuVOZVcxiasmD2d3fx1SxZ4Lrebudn96iv1FvQ1okmsjY7GdjfKDtySUBm%2Bd95iU6Y3tGW9Ray%2Fuh%2FblLa%2FCkELeRedvj7zMwkPKvyAY6pgHVKbfXnD4whx2Ce6M%2BWOmFCbgkdjah4Rq0U43PfIijejLFbFgl5sEZBgGG0%2BLmIb8vSELuusj5OYa3JElHC9%2BIpbworQ5b%2FLHJytgi1CqfR%2BiJGQFo4HrMOqMHNaRif0Ybcr3Vikjxy9tb%2Fom5oTJuNHiLvmUvowa1Pa9gJ4r99Z3Xjo127hgRapCZt0aunM9LwOnGcdEKDRCqr3%2F0J%2Fjw3miQOwGe&X-Amz-Signature=4239233bdde7d0422fd1b7a9ee3494df6824a0108d0a964d4faca5156cd26491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QYJ2SR%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIAqLJyPrbh3O5fJKz%2BXVo5P4ZMO3M3J4DHI0JjaHrVAiBOP7XHhzniAb3LnusxQYxFyM7JcwMRfBNuMxK%2F%2FjBrpyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0L2hmqiwWEn1a2lVKtwDWOopz7TdjQzhcAWWkk7yAIAzUFvU1IzksCNpMOQHDu7Js4nO%2B1QMLS4AtneF9WSB43actBNVrvk%2B%2FTYdmZw9EqlVrkA0tWqJZbrIrc7Dgn10lN%2FOgo93SmFeeHADy8r%2FC2Oym8SXNDyNeccLBBOTrlLBDZv8ElDActvtWe7ZJ5HGFFrPzhEJWj5sBWzaQOdSJ71iVKLY5zzNu6LbauRjofFOhdq2q0Yc7OupZsJgGiYRQS%2BqTyI65DxLpQ8UR3VtvXqXwMXG85EuEjQVkJC%2BDXNVNJ45f38ePnVF7j0w8QnNy5j9aMg61e7u5gbMjp1i5yQx1b2J0yI1B0Gi7uWfgQtpKcX%2B7qTl%2B%2BU8RMzx8m7s9g616NVl04nFqkdcXNQjdjxrRMixmGkfnPoxZbSSMsEM3GWxqC4qBu9tcJnCIj7vpKer%2BTb61zi%2FaYBAsq2yH58rG%2BTbRjNHIIyvjiMJpwgTdDNNUG7J2bG3OdMDuK3FU7nljEFrPCx7jDpd%2BkoNUHSrwMed2NGAu3oRcwBDAx3ppJ8JuVOZVcxiasmD2d3fx1SxZ4Lrebudn96iv1FvQ1okmsjY7GdjfKDtySUBm%2Bd95iU6Y3tGW9Ray%2Fuh%2FblLa%2FCkELeRedvj7zMwkPKvyAY6pgHVKbfXnD4whx2Ce6M%2BWOmFCbgkdjah4Rq0U43PfIijejLFbFgl5sEZBgGG0%2BLmIb8vSELuusj5OYa3JElHC9%2BIpbworQ5b%2FLHJytgi1CqfR%2BiJGQFo4HrMOqMHNaRif0Ybcr3Vikjxy9tb%2Fom5oTJuNHiLvmUvowa1Pa9gJ4r99Z3Xjo127hgRapCZt0aunM9LwOnGcdEKDRCqr3%2F0J%2Fjw3miQOwGe&X-Amz-Signature=29cee2ea25ecba546349d194996fc1c1eb94ae8e13821910b51c4d7cdba16812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QYJ2SR%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIAqLJyPrbh3O5fJKz%2BXVo5P4ZMO3M3J4DHI0JjaHrVAiBOP7XHhzniAb3LnusxQYxFyM7JcwMRfBNuMxK%2F%2FjBrpyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0L2hmqiwWEn1a2lVKtwDWOopz7TdjQzhcAWWkk7yAIAzUFvU1IzksCNpMOQHDu7Js4nO%2B1QMLS4AtneF9WSB43actBNVrvk%2B%2FTYdmZw9EqlVrkA0tWqJZbrIrc7Dgn10lN%2FOgo93SmFeeHADy8r%2FC2Oym8SXNDyNeccLBBOTrlLBDZv8ElDActvtWe7ZJ5HGFFrPzhEJWj5sBWzaQOdSJ71iVKLY5zzNu6LbauRjofFOhdq2q0Yc7OupZsJgGiYRQS%2BqTyI65DxLpQ8UR3VtvXqXwMXG85EuEjQVkJC%2BDXNVNJ45f38ePnVF7j0w8QnNy5j9aMg61e7u5gbMjp1i5yQx1b2J0yI1B0Gi7uWfgQtpKcX%2B7qTl%2B%2BU8RMzx8m7s9g616NVl04nFqkdcXNQjdjxrRMixmGkfnPoxZbSSMsEM3GWxqC4qBu9tcJnCIj7vpKer%2BTb61zi%2FaYBAsq2yH58rG%2BTbRjNHIIyvjiMJpwgTdDNNUG7J2bG3OdMDuK3FU7nljEFrPCx7jDpd%2BkoNUHSrwMed2NGAu3oRcwBDAx3ppJ8JuVOZVcxiasmD2d3fx1SxZ4Lrebudn96iv1FvQ1okmsjY7GdjfKDtySUBm%2Bd95iU6Y3tGW9Ray%2Fuh%2FblLa%2FCkELeRedvj7zMwkPKvyAY6pgHVKbfXnD4whx2Ce6M%2BWOmFCbgkdjah4Rq0U43PfIijejLFbFgl5sEZBgGG0%2BLmIb8vSELuusj5OYa3JElHC9%2BIpbworQ5b%2FLHJytgi1CqfR%2BiJGQFo4HrMOqMHNaRif0Ybcr3Vikjxy9tb%2Fom5oTJuNHiLvmUvowa1Pa9gJ4r99Z3Xjo127hgRapCZt0aunM9LwOnGcdEKDRCqr3%2F0J%2Fjw3miQOwGe&X-Amz-Signature=994513bb22eebf32cb102664d5c9b1de64859f34d34761370faac6e83324ea9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
