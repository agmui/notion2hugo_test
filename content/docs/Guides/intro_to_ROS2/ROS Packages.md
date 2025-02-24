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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNY5RFW5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbj50V7xq65aHOlwV2SwxpPKy%2FhUhcxCrVvadQDI5NtgIgeOaN9QBpBA5lAOS3LAHshKjaDddCnpA9%2BRPcHkEfUB0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJoI6GTrhdqwAIUQyyrcAwW7NySG5fCxqnIUZWmzhDOWzv%2BjzspI8FSTEh0qN0zf%2FLCbsFhpnuKmOFYvFph7wM2KuefdVlWT58GXNZUcEqgwDrZqYh77C29BoNmKryTJ8Quf5hiVtwII4x9RPTVMJyQH2fjherZTdcovRB8xHdDOodzNLyXeOdfB3%2B6jWgtg9WftGlF4Sl0JD%2FK6VMZrQs8t9oTp9SURuu0TzgR7OPtki8JBgKtexoe%2FEcut5YJkCJvmAd9fkmzMf2VUf6zOwDchwFry75GJ%2FfzUYyofPldBR8XIc4yD3CWVP3tk6yyxLubQpHusMOGyNQoTgEX6CIC5ik%2FO2DKyQrhUljExSi2dou2s8sXIQQuv0f55tg7d5GMDZC9r2SqdEDs7a00PGABz%2F72dEw9UxtvNZsTzRiV6MVtxMQmI%2FsnVgVvWh0Xt7WySAT33f4wCRVSx2sL8aUMIc81bCoFbmnmwOH%2BrQJcPQIIT9pjvYqMyxWtj%2B3Hta%2B%2FyxDK8UfgVKoHMjAjLAXu1EgfqFifWv1SGj9xLGz9p4DJQq3si%2B5yTtkBX9LapDrLf1wFJ4Ord5BLbD2MEsCAP8f7jKcSEbCkKkpwx5NOS3RH4JU81u6nr9uB0m5lUqFwlJIGZe%2FOEQ7I8MPrx7r0GOqUBNk4u1MLDc%2Fn1OfGs%2FazRn60%2B0c9Ji0Wp7D8YQQLl8xKf8aJTLWVVNWOovhCX28aaNiAgE%2F2G9%2B2evsNuvzQRjudZ0LiqsMjgkb%2FfjlrireQsC33B64y5Ofiw0Hd%2Fv6sFnTYZ0Y86jhld%2FqXR011qF71R6ea1MDeudFqzoQCebiIzdGeW2ct8PtLMJlOivpe3NX2hNp3%2B0toZwWL6ITCBDa59KMdd&X-Amz-Signature=32ee7a77e3165f499fb099447f665432ea131b6aa1f08cf453b5a3e431504305&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNY5RFW5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbj50V7xq65aHOlwV2SwxpPKy%2FhUhcxCrVvadQDI5NtgIgeOaN9QBpBA5lAOS3LAHshKjaDddCnpA9%2BRPcHkEfUB0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJoI6GTrhdqwAIUQyyrcAwW7NySG5fCxqnIUZWmzhDOWzv%2BjzspI8FSTEh0qN0zf%2FLCbsFhpnuKmOFYvFph7wM2KuefdVlWT58GXNZUcEqgwDrZqYh77C29BoNmKryTJ8Quf5hiVtwII4x9RPTVMJyQH2fjherZTdcovRB8xHdDOodzNLyXeOdfB3%2B6jWgtg9WftGlF4Sl0JD%2FK6VMZrQs8t9oTp9SURuu0TzgR7OPtki8JBgKtexoe%2FEcut5YJkCJvmAd9fkmzMf2VUf6zOwDchwFry75GJ%2FfzUYyofPldBR8XIc4yD3CWVP3tk6yyxLubQpHusMOGyNQoTgEX6CIC5ik%2FO2DKyQrhUljExSi2dou2s8sXIQQuv0f55tg7d5GMDZC9r2SqdEDs7a00PGABz%2F72dEw9UxtvNZsTzRiV6MVtxMQmI%2FsnVgVvWh0Xt7WySAT33f4wCRVSx2sL8aUMIc81bCoFbmnmwOH%2BrQJcPQIIT9pjvYqMyxWtj%2B3Hta%2B%2FyxDK8UfgVKoHMjAjLAXu1EgfqFifWv1SGj9xLGz9p4DJQq3si%2B5yTtkBX9LapDrLf1wFJ4Ord5BLbD2MEsCAP8f7jKcSEbCkKkpwx5NOS3RH4JU81u6nr9uB0m5lUqFwlJIGZe%2FOEQ7I8MPrx7r0GOqUBNk4u1MLDc%2Fn1OfGs%2FazRn60%2B0c9Ji0Wp7D8YQQLl8xKf8aJTLWVVNWOovhCX28aaNiAgE%2F2G9%2B2evsNuvzQRjudZ0LiqsMjgkb%2FfjlrireQsC33B64y5Ofiw0Hd%2Fv6sFnTYZ0Y86jhld%2FqXR011qF71R6ea1MDeudFqzoQCebiIzdGeW2ct8PtLMJlOivpe3NX2hNp3%2B0toZwWL6ITCBDa59KMdd&X-Amz-Signature=1fe7f79e6cde409794f3dbd1f92666161b16957c8a651ff2509981f619c090c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNY5RFW5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbj50V7xq65aHOlwV2SwxpPKy%2FhUhcxCrVvadQDI5NtgIgeOaN9QBpBA5lAOS3LAHshKjaDddCnpA9%2BRPcHkEfUB0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJoI6GTrhdqwAIUQyyrcAwW7NySG5fCxqnIUZWmzhDOWzv%2BjzspI8FSTEh0qN0zf%2FLCbsFhpnuKmOFYvFph7wM2KuefdVlWT58GXNZUcEqgwDrZqYh77C29BoNmKryTJ8Quf5hiVtwII4x9RPTVMJyQH2fjherZTdcovRB8xHdDOodzNLyXeOdfB3%2B6jWgtg9WftGlF4Sl0JD%2FK6VMZrQs8t9oTp9SURuu0TzgR7OPtki8JBgKtexoe%2FEcut5YJkCJvmAd9fkmzMf2VUf6zOwDchwFry75GJ%2FfzUYyofPldBR8XIc4yD3CWVP3tk6yyxLubQpHusMOGyNQoTgEX6CIC5ik%2FO2DKyQrhUljExSi2dou2s8sXIQQuv0f55tg7d5GMDZC9r2SqdEDs7a00PGABz%2F72dEw9UxtvNZsTzRiV6MVtxMQmI%2FsnVgVvWh0Xt7WySAT33f4wCRVSx2sL8aUMIc81bCoFbmnmwOH%2BrQJcPQIIT9pjvYqMyxWtj%2B3Hta%2B%2FyxDK8UfgVKoHMjAjLAXu1EgfqFifWv1SGj9xLGz9p4DJQq3si%2B5yTtkBX9LapDrLf1wFJ4Ord5BLbD2MEsCAP8f7jKcSEbCkKkpwx5NOS3RH4JU81u6nr9uB0m5lUqFwlJIGZe%2FOEQ7I8MPrx7r0GOqUBNk4u1MLDc%2Fn1OfGs%2FazRn60%2B0c9Ji0Wp7D8YQQLl8xKf8aJTLWVVNWOovhCX28aaNiAgE%2F2G9%2B2evsNuvzQRjudZ0LiqsMjgkb%2FfjlrireQsC33B64y5Ofiw0Hd%2Fv6sFnTYZ0Y86jhld%2FqXR011qF71R6ea1MDeudFqzoQCebiIzdGeW2ct8PtLMJlOivpe3NX2hNp3%2B0toZwWL6ITCBDa59KMdd&X-Amz-Signature=bd56be559afc37effa87c60f844f98ed91c0fb9fbd6f71c0b1589283471f2dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNY5RFW5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbj50V7xq65aHOlwV2SwxpPKy%2FhUhcxCrVvadQDI5NtgIgeOaN9QBpBA5lAOS3LAHshKjaDddCnpA9%2BRPcHkEfUB0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJoI6GTrhdqwAIUQyyrcAwW7NySG5fCxqnIUZWmzhDOWzv%2BjzspI8FSTEh0qN0zf%2FLCbsFhpnuKmOFYvFph7wM2KuefdVlWT58GXNZUcEqgwDrZqYh77C29BoNmKryTJ8Quf5hiVtwII4x9RPTVMJyQH2fjherZTdcovRB8xHdDOodzNLyXeOdfB3%2B6jWgtg9WftGlF4Sl0JD%2FK6VMZrQs8t9oTp9SURuu0TzgR7OPtki8JBgKtexoe%2FEcut5YJkCJvmAd9fkmzMf2VUf6zOwDchwFry75GJ%2FfzUYyofPldBR8XIc4yD3CWVP3tk6yyxLubQpHusMOGyNQoTgEX6CIC5ik%2FO2DKyQrhUljExSi2dou2s8sXIQQuv0f55tg7d5GMDZC9r2SqdEDs7a00PGABz%2F72dEw9UxtvNZsTzRiV6MVtxMQmI%2FsnVgVvWh0Xt7WySAT33f4wCRVSx2sL8aUMIc81bCoFbmnmwOH%2BrQJcPQIIT9pjvYqMyxWtj%2B3Hta%2B%2FyxDK8UfgVKoHMjAjLAXu1EgfqFifWv1SGj9xLGz9p4DJQq3si%2B5yTtkBX9LapDrLf1wFJ4Ord5BLbD2MEsCAP8f7jKcSEbCkKkpwx5NOS3RH4JU81u6nr9uB0m5lUqFwlJIGZe%2FOEQ7I8MPrx7r0GOqUBNk4u1MLDc%2Fn1OfGs%2FazRn60%2B0c9Ji0Wp7D8YQQLl8xKf8aJTLWVVNWOovhCX28aaNiAgE%2F2G9%2B2evsNuvzQRjudZ0LiqsMjgkb%2FfjlrireQsC33B64y5Ofiw0Hd%2Fv6sFnTYZ0Y86jhld%2FqXR011qF71R6ea1MDeudFqzoQCebiIzdGeW2ct8PtLMJlOivpe3NX2hNp3%2B0toZwWL6ITCBDa59KMdd&X-Amz-Signature=3e69930fa67db055f38232b4500e0cdfb0f1d003a674e1c093b47bc307812851&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNY5RFW5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbj50V7xq65aHOlwV2SwxpPKy%2FhUhcxCrVvadQDI5NtgIgeOaN9QBpBA5lAOS3LAHshKjaDddCnpA9%2BRPcHkEfUB0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJoI6GTrhdqwAIUQyyrcAwW7NySG5fCxqnIUZWmzhDOWzv%2BjzspI8FSTEh0qN0zf%2FLCbsFhpnuKmOFYvFph7wM2KuefdVlWT58GXNZUcEqgwDrZqYh77C29BoNmKryTJ8Quf5hiVtwII4x9RPTVMJyQH2fjherZTdcovRB8xHdDOodzNLyXeOdfB3%2B6jWgtg9WftGlF4Sl0JD%2FK6VMZrQs8t9oTp9SURuu0TzgR7OPtki8JBgKtexoe%2FEcut5YJkCJvmAd9fkmzMf2VUf6zOwDchwFry75GJ%2FfzUYyofPldBR8XIc4yD3CWVP3tk6yyxLubQpHusMOGyNQoTgEX6CIC5ik%2FO2DKyQrhUljExSi2dou2s8sXIQQuv0f55tg7d5GMDZC9r2SqdEDs7a00PGABz%2F72dEw9UxtvNZsTzRiV6MVtxMQmI%2FsnVgVvWh0Xt7WySAT33f4wCRVSx2sL8aUMIc81bCoFbmnmwOH%2BrQJcPQIIT9pjvYqMyxWtj%2B3Hta%2B%2FyxDK8UfgVKoHMjAjLAXu1EgfqFifWv1SGj9xLGz9p4DJQq3si%2B5yTtkBX9LapDrLf1wFJ4Ord5BLbD2MEsCAP8f7jKcSEbCkKkpwx5NOS3RH4JU81u6nr9uB0m5lUqFwlJIGZe%2FOEQ7I8MPrx7r0GOqUBNk4u1MLDc%2Fn1OfGs%2FazRn60%2B0c9Ji0Wp7D8YQQLl8xKf8aJTLWVVNWOovhCX28aaNiAgE%2F2G9%2B2evsNuvzQRjudZ0LiqsMjgkb%2FfjlrireQsC33B64y5Ofiw0Hd%2Fv6sFnTYZ0Y86jhld%2FqXR011qF71R6ea1MDeudFqzoQCebiIzdGeW2ct8PtLMJlOivpe3NX2hNp3%2B0toZwWL6ITCBDa59KMdd&X-Amz-Signature=58805046a8508db77cd1717ad34de0805281e9564cfc40c4e238b98c4e2c9679&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNY5RFW5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbj50V7xq65aHOlwV2SwxpPKy%2FhUhcxCrVvadQDI5NtgIgeOaN9QBpBA5lAOS3LAHshKjaDddCnpA9%2BRPcHkEfUB0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJoI6GTrhdqwAIUQyyrcAwW7NySG5fCxqnIUZWmzhDOWzv%2BjzspI8FSTEh0qN0zf%2FLCbsFhpnuKmOFYvFph7wM2KuefdVlWT58GXNZUcEqgwDrZqYh77C29BoNmKryTJ8Quf5hiVtwII4x9RPTVMJyQH2fjherZTdcovRB8xHdDOodzNLyXeOdfB3%2B6jWgtg9WftGlF4Sl0JD%2FK6VMZrQs8t9oTp9SURuu0TzgR7OPtki8JBgKtexoe%2FEcut5YJkCJvmAd9fkmzMf2VUf6zOwDchwFry75GJ%2FfzUYyofPldBR8XIc4yD3CWVP3tk6yyxLubQpHusMOGyNQoTgEX6CIC5ik%2FO2DKyQrhUljExSi2dou2s8sXIQQuv0f55tg7d5GMDZC9r2SqdEDs7a00PGABz%2F72dEw9UxtvNZsTzRiV6MVtxMQmI%2FsnVgVvWh0Xt7WySAT33f4wCRVSx2sL8aUMIc81bCoFbmnmwOH%2BrQJcPQIIT9pjvYqMyxWtj%2B3Hta%2B%2FyxDK8UfgVKoHMjAjLAXu1EgfqFifWv1SGj9xLGz9p4DJQq3si%2B5yTtkBX9LapDrLf1wFJ4Ord5BLbD2MEsCAP8f7jKcSEbCkKkpwx5NOS3RH4JU81u6nr9uB0m5lUqFwlJIGZe%2FOEQ7I8MPrx7r0GOqUBNk4u1MLDc%2Fn1OfGs%2FazRn60%2B0c9Ji0Wp7D8YQQLl8xKf8aJTLWVVNWOovhCX28aaNiAgE%2F2G9%2B2evsNuvzQRjudZ0LiqsMjgkb%2FfjlrireQsC33B64y5Ofiw0Hd%2Fv6sFnTYZ0Y86jhld%2FqXR011qF71R6ea1MDeudFqzoQCebiIzdGeW2ct8PtLMJlOivpe3NX2hNp3%2B0toZwWL6ITCBDa59KMdd&X-Amz-Signature=e4fd26ac748a3b8b08143834ac6e7b5b10a317d1fee9d5fb080640417f111e36&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNY5RFW5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbj50V7xq65aHOlwV2SwxpPKy%2FhUhcxCrVvadQDI5NtgIgeOaN9QBpBA5lAOS3LAHshKjaDddCnpA9%2BRPcHkEfUB0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJoI6GTrhdqwAIUQyyrcAwW7NySG5fCxqnIUZWmzhDOWzv%2BjzspI8FSTEh0qN0zf%2FLCbsFhpnuKmOFYvFph7wM2KuefdVlWT58GXNZUcEqgwDrZqYh77C29BoNmKryTJ8Quf5hiVtwII4x9RPTVMJyQH2fjherZTdcovRB8xHdDOodzNLyXeOdfB3%2B6jWgtg9WftGlF4Sl0JD%2FK6VMZrQs8t9oTp9SURuu0TzgR7OPtki8JBgKtexoe%2FEcut5YJkCJvmAd9fkmzMf2VUf6zOwDchwFry75GJ%2FfzUYyofPldBR8XIc4yD3CWVP3tk6yyxLubQpHusMOGyNQoTgEX6CIC5ik%2FO2DKyQrhUljExSi2dou2s8sXIQQuv0f55tg7d5GMDZC9r2SqdEDs7a00PGABz%2F72dEw9UxtvNZsTzRiV6MVtxMQmI%2FsnVgVvWh0Xt7WySAT33f4wCRVSx2sL8aUMIc81bCoFbmnmwOH%2BrQJcPQIIT9pjvYqMyxWtj%2B3Hta%2B%2FyxDK8UfgVKoHMjAjLAXu1EgfqFifWv1SGj9xLGz9p4DJQq3si%2B5yTtkBX9LapDrLf1wFJ4Ord5BLbD2MEsCAP8f7jKcSEbCkKkpwx5NOS3RH4JU81u6nr9uB0m5lUqFwlJIGZe%2FOEQ7I8MPrx7r0GOqUBNk4u1MLDc%2Fn1OfGs%2FazRn60%2B0c9Ji0Wp7D8YQQLl8xKf8aJTLWVVNWOovhCX28aaNiAgE%2F2G9%2B2evsNuvzQRjudZ0LiqsMjgkb%2FfjlrireQsC33B64y5Ofiw0Hd%2Fv6sFnTYZ0Y86jhld%2FqXR011qF71R6ea1MDeudFqzoQCebiIzdGeW2ct8PtLMJlOivpe3NX2hNp3%2B0toZwWL6ITCBDa59KMdd&X-Amz-Signature=efb61007003bcf0f4ed87df535b887d2dbed58c147d497a9d4b3896638220792&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
