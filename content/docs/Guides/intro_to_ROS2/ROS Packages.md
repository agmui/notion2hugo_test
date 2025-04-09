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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WPPYP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCjSi8MW%2BpyTt7zBAaZZmIVrXP3fsRMFWche71bSdQ%2B1gIhAIFvRPU31EQ66uOSArb4Qw3FjLGZmeQlnbR1t00oaG07KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7CNwQP%2B9w8%2Bvg7MQq3APrAbseDWuxU%2BR0upl8k%2B7vy2EAA21VOx%2F5UD4EyDtEVzZ82ZYxMKtSFT5t%2F3zKTYQLIu%2FdL0rgHenENqON0Jq%2Bnt%2FquToo%2FnneXa3jGGCjyTvp7BbEG68eQyGl9vTnBdXrc6Vx3gQZJjYIBT8BWU6SfYu4DTACrWJXP7oZ%2FJMf4cZwzLxSq0GpomQo2C5A0a3QSvJ7TZjQwNPG3WfHHst6neJS4kaZmlYJIYqpqwPeDdHUaw4YB5NGLWQmQJhD2Qc6Qu%2B8F4UT6y1QK2%2Fwei2of0yLOpPibvSolFcDNEJXNHbZdBRun%2FN7ly4cKwmaK7UE3jFPz4m9cpZ%2FtJriweKXYUIB9wZjE3NB1ZdcOJ7x%2BCkNNf2PcyiICPDW8u7TYvamQC822gUDW%2Bpd%2BQ1hqiTDPtkRpuC3bpOo1kwfj6Ixjqzfj5IKEAckvrDyJ%2BJa4NdWVURyBa2%2Fw0PEyqHj%2FDf1sqfp65speu0%2BMy9fyxJs4bMLTcMQUrjecrrEZdEbV4xlU%2BLgCg%2BIvatAllCZb6mJPrb61TiyHQuvK6uF3jXHrQTN%2Bjy%2Fv9pRKP%2FyWQd%2BavtmhtfTczfwb0u2bdBXg9VylZx7gnA%2FkGWf4buzp1Q%2FHIo6bo%2B2c%2F47TSM86TDSstm%2FBjqkAUDKpbS%2FpQsu56VuJgzZNOn22mEhIPGMrvypGeGB4boO6pJ8anW2Yl7jPpuqseqCU3URof4HRSNzIZm7yVWPPcyuusrEMHoZk3Fz%2BdXj8cwbzSA21nSMT89BveAIsY6dDEKu1qZy%2FrjKQYwcRWy2ns%2BiqkhWq5URyAjAmQTbWZ2ox0vNuWef%2FxpqUPMhO2%2FRc9ICie8lAH4vjpElKqCtvXnf%2FLQx&X-Amz-Signature=dd6b001bd81e58a86822a23fd953ebd22c9458da2b2df34b2acea8bc09fa0b17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WPPYP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCjSi8MW%2BpyTt7zBAaZZmIVrXP3fsRMFWche71bSdQ%2B1gIhAIFvRPU31EQ66uOSArb4Qw3FjLGZmeQlnbR1t00oaG07KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7CNwQP%2B9w8%2Bvg7MQq3APrAbseDWuxU%2BR0upl8k%2B7vy2EAA21VOx%2F5UD4EyDtEVzZ82ZYxMKtSFT5t%2F3zKTYQLIu%2FdL0rgHenENqON0Jq%2Bnt%2FquToo%2FnneXa3jGGCjyTvp7BbEG68eQyGl9vTnBdXrc6Vx3gQZJjYIBT8BWU6SfYu4DTACrWJXP7oZ%2FJMf4cZwzLxSq0GpomQo2C5A0a3QSvJ7TZjQwNPG3WfHHst6neJS4kaZmlYJIYqpqwPeDdHUaw4YB5NGLWQmQJhD2Qc6Qu%2B8F4UT6y1QK2%2Fwei2of0yLOpPibvSolFcDNEJXNHbZdBRun%2FN7ly4cKwmaK7UE3jFPz4m9cpZ%2FtJriweKXYUIB9wZjE3NB1ZdcOJ7x%2BCkNNf2PcyiICPDW8u7TYvamQC822gUDW%2Bpd%2BQ1hqiTDPtkRpuC3bpOo1kwfj6Ixjqzfj5IKEAckvrDyJ%2BJa4NdWVURyBa2%2Fw0PEyqHj%2FDf1sqfp65speu0%2BMy9fyxJs4bMLTcMQUrjecrrEZdEbV4xlU%2BLgCg%2BIvatAllCZb6mJPrb61TiyHQuvK6uF3jXHrQTN%2Bjy%2Fv9pRKP%2FyWQd%2BavtmhtfTczfwb0u2bdBXg9VylZx7gnA%2FkGWf4buzp1Q%2FHIo6bo%2B2c%2F47TSM86TDSstm%2FBjqkAUDKpbS%2FpQsu56VuJgzZNOn22mEhIPGMrvypGeGB4boO6pJ8anW2Yl7jPpuqseqCU3URof4HRSNzIZm7yVWPPcyuusrEMHoZk3Fz%2BdXj8cwbzSA21nSMT89BveAIsY6dDEKu1qZy%2FrjKQYwcRWy2ns%2BiqkhWq5URyAjAmQTbWZ2ox0vNuWef%2FxpqUPMhO2%2FRc9ICie8lAH4vjpElKqCtvXnf%2FLQx&X-Amz-Signature=f4037e9f49cda39e23179906482024f7bad7299ad2cb57c315100e6ca3de15cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WPPYP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCjSi8MW%2BpyTt7zBAaZZmIVrXP3fsRMFWche71bSdQ%2B1gIhAIFvRPU31EQ66uOSArb4Qw3FjLGZmeQlnbR1t00oaG07KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7CNwQP%2B9w8%2Bvg7MQq3APrAbseDWuxU%2BR0upl8k%2B7vy2EAA21VOx%2F5UD4EyDtEVzZ82ZYxMKtSFT5t%2F3zKTYQLIu%2FdL0rgHenENqON0Jq%2Bnt%2FquToo%2FnneXa3jGGCjyTvp7BbEG68eQyGl9vTnBdXrc6Vx3gQZJjYIBT8BWU6SfYu4DTACrWJXP7oZ%2FJMf4cZwzLxSq0GpomQo2C5A0a3QSvJ7TZjQwNPG3WfHHst6neJS4kaZmlYJIYqpqwPeDdHUaw4YB5NGLWQmQJhD2Qc6Qu%2B8F4UT6y1QK2%2Fwei2of0yLOpPibvSolFcDNEJXNHbZdBRun%2FN7ly4cKwmaK7UE3jFPz4m9cpZ%2FtJriweKXYUIB9wZjE3NB1ZdcOJ7x%2BCkNNf2PcyiICPDW8u7TYvamQC822gUDW%2Bpd%2BQ1hqiTDPtkRpuC3bpOo1kwfj6Ixjqzfj5IKEAckvrDyJ%2BJa4NdWVURyBa2%2Fw0PEyqHj%2FDf1sqfp65speu0%2BMy9fyxJs4bMLTcMQUrjecrrEZdEbV4xlU%2BLgCg%2BIvatAllCZb6mJPrb61TiyHQuvK6uF3jXHrQTN%2Bjy%2Fv9pRKP%2FyWQd%2BavtmhtfTczfwb0u2bdBXg9VylZx7gnA%2FkGWf4buzp1Q%2FHIo6bo%2B2c%2F47TSM86TDSstm%2FBjqkAUDKpbS%2FpQsu56VuJgzZNOn22mEhIPGMrvypGeGB4boO6pJ8anW2Yl7jPpuqseqCU3URof4HRSNzIZm7yVWPPcyuusrEMHoZk3Fz%2BdXj8cwbzSA21nSMT89BveAIsY6dDEKu1qZy%2FrjKQYwcRWy2ns%2BiqkhWq5URyAjAmQTbWZ2ox0vNuWef%2FxpqUPMhO2%2FRc9ICie8lAH4vjpElKqCtvXnf%2FLQx&X-Amz-Signature=8ba7a72e6e09f7f01617f592a4f886ea0464ab6c466dca310c0178f582b6a79f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WPPYP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCjSi8MW%2BpyTt7zBAaZZmIVrXP3fsRMFWche71bSdQ%2B1gIhAIFvRPU31EQ66uOSArb4Qw3FjLGZmeQlnbR1t00oaG07KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7CNwQP%2B9w8%2Bvg7MQq3APrAbseDWuxU%2BR0upl8k%2B7vy2EAA21VOx%2F5UD4EyDtEVzZ82ZYxMKtSFT5t%2F3zKTYQLIu%2FdL0rgHenENqON0Jq%2Bnt%2FquToo%2FnneXa3jGGCjyTvp7BbEG68eQyGl9vTnBdXrc6Vx3gQZJjYIBT8BWU6SfYu4DTACrWJXP7oZ%2FJMf4cZwzLxSq0GpomQo2C5A0a3QSvJ7TZjQwNPG3WfHHst6neJS4kaZmlYJIYqpqwPeDdHUaw4YB5NGLWQmQJhD2Qc6Qu%2B8F4UT6y1QK2%2Fwei2of0yLOpPibvSolFcDNEJXNHbZdBRun%2FN7ly4cKwmaK7UE3jFPz4m9cpZ%2FtJriweKXYUIB9wZjE3NB1ZdcOJ7x%2BCkNNf2PcyiICPDW8u7TYvamQC822gUDW%2Bpd%2BQ1hqiTDPtkRpuC3bpOo1kwfj6Ixjqzfj5IKEAckvrDyJ%2BJa4NdWVURyBa2%2Fw0PEyqHj%2FDf1sqfp65speu0%2BMy9fyxJs4bMLTcMQUrjecrrEZdEbV4xlU%2BLgCg%2BIvatAllCZb6mJPrb61TiyHQuvK6uF3jXHrQTN%2Bjy%2Fv9pRKP%2FyWQd%2BavtmhtfTczfwb0u2bdBXg9VylZx7gnA%2FkGWf4buzp1Q%2FHIo6bo%2B2c%2F47TSM86TDSstm%2FBjqkAUDKpbS%2FpQsu56VuJgzZNOn22mEhIPGMrvypGeGB4boO6pJ8anW2Yl7jPpuqseqCU3URof4HRSNzIZm7yVWPPcyuusrEMHoZk3Fz%2BdXj8cwbzSA21nSMT89BveAIsY6dDEKu1qZy%2FrjKQYwcRWy2ns%2BiqkhWq5URyAjAmQTbWZ2ox0vNuWef%2FxpqUPMhO2%2FRc9ICie8lAH4vjpElKqCtvXnf%2FLQx&X-Amz-Signature=dcc5c17d820c2629916d319981c543b79e655553912b733c26cff7d4c99000d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WPPYP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCjSi8MW%2BpyTt7zBAaZZmIVrXP3fsRMFWche71bSdQ%2B1gIhAIFvRPU31EQ66uOSArb4Qw3FjLGZmeQlnbR1t00oaG07KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7CNwQP%2B9w8%2Bvg7MQq3APrAbseDWuxU%2BR0upl8k%2B7vy2EAA21VOx%2F5UD4EyDtEVzZ82ZYxMKtSFT5t%2F3zKTYQLIu%2FdL0rgHenENqON0Jq%2Bnt%2FquToo%2FnneXa3jGGCjyTvp7BbEG68eQyGl9vTnBdXrc6Vx3gQZJjYIBT8BWU6SfYu4DTACrWJXP7oZ%2FJMf4cZwzLxSq0GpomQo2C5A0a3QSvJ7TZjQwNPG3WfHHst6neJS4kaZmlYJIYqpqwPeDdHUaw4YB5NGLWQmQJhD2Qc6Qu%2B8F4UT6y1QK2%2Fwei2of0yLOpPibvSolFcDNEJXNHbZdBRun%2FN7ly4cKwmaK7UE3jFPz4m9cpZ%2FtJriweKXYUIB9wZjE3NB1ZdcOJ7x%2BCkNNf2PcyiICPDW8u7TYvamQC822gUDW%2Bpd%2BQ1hqiTDPtkRpuC3bpOo1kwfj6Ixjqzfj5IKEAckvrDyJ%2BJa4NdWVURyBa2%2Fw0PEyqHj%2FDf1sqfp65speu0%2BMy9fyxJs4bMLTcMQUrjecrrEZdEbV4xlU%2BLgCg%2BIvatAllCZb6mJPrb61TiyHQuvK6uF3jXHrQTN%2Bjy%2Fv9pRKP%2FyWQd%2BavtmhtfTczfwb0u2bdBXg9VylZx7gnA%2FkGWf4buzp1Q%2FHIo6bo%2B2c%2F47TSM86TDSstm%2FBjqkAUDKpbS%2FpQsu56VuJgzZNOn22mEhIPGMrvypGeGB4boO6pJ8anW2Yl7jPpuqseqCU3URof4HRSNzIZm7yVWPPcyuusrEMHoZk3Fz%2BdXj8cwbzSA21nSMT89BveAIsY6dDEKu1qZy%2FrjKQYwcRWy2ns%2BiqkhWq5URyAjAmQTbWZ2ox0vNuWef%2FxpqUPMhO2%2FRc9ICie8lAH4vjpElKqCtvXnf%2FLQx&X-Amz-Signature=6a466e16eba087d8302de8e75d0ebd496b0b64e46ed5e114c057fc5b2efa4929&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WPPYP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCjSi8MW%2BpyTt7zBAaZZmIVrXP3fsRMFWche71bSdQ%2B1gIhAIFvRPU31EQ66uOSArb4Qw3FjLGZmeQlnbR1t00oaG07KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7CNwQP%2B9w8%2Bvg7MQq3APrAbseDWuxU%2BR0upl8k%2B7vy2EAA21VOx%2F5UD4EyDtEVzZ82ZYxMKtSFT5t%2F3zKTYQLIu%2FdL0rgHenENqON0Jq%2Bnt%2FquToo%2FnneXa3jGGCjyTvp7BbEG68eQyGl9vTnBdXrc6Vx3gQZJjYIBT8BWU6SfYu4DTACrWJXP7oZ%2FJMf4cZwzLxSq0GpomQo2C5A0a3QSvJ7TZjQwNPG3WfHHst6neJS4kaZmlYJIYqpqwPeDdHUaw4YB5NGLWQmQJhD2Qc6Qu%2B8F4UT6y1QK2%2Fwei2of0yLOpPibvSolFcDNEJXNHbZdBRun%2FN7ly4cKwmaK7UE3jFPz4m9cpZ%2FtJriweKXYUIB9wZjE3NB1ZdcOJ7x%2BCkNNf2PcyiICPDW8u7TYvamQC822gUDW%2Bpd%2BQ1hqiTDPtkRpuC3bpOo1kwfj6Ixjqzfj5IKEAckvrDyJ%2BJa4NdWVURyBa2%2Fw0PEyqHj%2FDf1sqfp65speu0%2BMy9fyxJs4bMLTcMQUrjecrrEZdEbV4xlU%2BLgCg%2BIvatAllCZb6mJPrb61TiyHQuvK6uF3jXHrQTN%2Bjy%2Fv9pRKP%2FyWQd%2BavtmhtfTczfwb0u2bdBXg9VylZx7gnA%2FkGWf4buzp1Q%2FHIo6bo%2B2c%2F47TSM86TDSstm%2FBjqkAUDKpbS%2FpQsu56VuJgzZNOn22mEhIPGMrvypGeGB4boO6pJ8anW2Yl7jPpuqseqCU3URof4HRSNzIZm7yVWPPcyuusrEMHoZk3Fz%2BdXj8cwbzSA21nSMT89BveAIsY6dDEKu1qZy%2FrjKQYwcRWy2ns%2BiqkhWq5URyAjAmQTbWZ2ox0vNuWef%2FxpqUPMhO2%2FRc9ICie8lAH4vjpElKqCtvXnf%2FLQx&X-Amz-Signature=e1124ebe4e9746ab4bb182467804cc7620617cd7b96ee5f77cd7c7779ee36e26&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WPPYP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCjSi8MW%2BpyTt7zBAaZZmIVrXP3fsRMFWche71bSdQ%2B1gIhAIFvRPU31EQ66uOSArb4Qw3FjLGZmeQlnbR1t00oaG07KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7CNwQP%2B9w8%2Bvg7MQq3APrAbseDWuxU%2BR0upl8k%2B7vy2EAA21VOx%2F5UD4EyDtEVzZ82ZYxMKtSFT5t%2F3zKTYQLIu%2FdL0rgHenENqON0Jq%2Bnt%2FquToo%2FnneXa3jGGCjyTvp7BbEG68eQyGl9vTnBdXrc6Vx3gQZJjYIBT8BWU6SfYu4DTACrWJXP7oZ%2FJMf4cZwzLxSq0GpomQo2C5A0a3QSvJ7TZjQwNPG3WfHHst6neJS4kaZmlYJIYqpqwPeDdHUaw4YB5NGLWQmQJhD2Qc6Qu%2B8F4UT6y1QK2%2Fwei2of0yLOpPibvSolFcDNEJXNHbZdBRun%2FN7ly4cKwmaK7UE3jFPz4m9cpZ%2FtJriweKXYUIB9wZjE3NB1ZdcOJ7x%2BCkNNf2PcyiICPDW8u7TYvamQC822gUDW%2Bpd%2BQ1hqiTDPtkRpuC3bpOo1kwfj6Ixjqzfj5IKEAckvrDyJ%2BJa4NdWVURyBa2%2Fw0PEyqHj%2FDf1sqfp65speu0%2BMy9fyxJs4bMLTcMQUrjecrrEZdEbV4xlU%2BLgCg%2BIvatAllCZb6mJPrb61TiyHQuvK6uF3jXHrQTN%2Bjy%2Fv9pRKP%2FyWQd%2BavtmhtfTczfwb0u2bdBXg9VylZx7gnA%2FkGWf4buzp1Q%2FHIo6bo%2B2c%2F47TSM86TDSstm%2FBjqkAUDKpbS%2FpQsu56VuJgzZNOn22mEhIPGMrvypGeGB4boO6pJ8anW2Yl7jPpuqseqCU3URof4HRSNzIZm7yVWPPcyuusrEMHoZk3Fz%2BdXj8cwbzSA21nSMT89BveAIsY6dDEKu1qZy%2FrjKQYwcRWy2ns%2BiqkhWq5URyAjAmQTbWZ2ox0vNuWef%2FxpqUPMhO2%2FRc9ICie8lAH4vjpElKqCtvXnf%2FLQx&X-Amz-Signature=0926455a6bf72a2f8aa127be3b4b7bbb9883d8e47c233254a31f62f79d93fc41&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
