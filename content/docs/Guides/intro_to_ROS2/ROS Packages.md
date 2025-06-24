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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNHZ76D%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHGxLUMoShbSzbBQ%2BxjI2PS1IL7iVDpI2Plf4eYQNSAOAiEA8RBgk8eYVPPM%2Bu6LYkfBM7lhSnREgRP5F72jkBC32FYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJypF%2FZtM9gS5ktXDircAw0B7jFoOegJeQL6FPmgN91nJ4RyIuFEQtMxwaxd8Ayfu0DDlrb%2BFTsC0gqf1bHjGl1NHEfCmZteurVczMY8V8hHVDCo4xuvQm%2BLMEwADwLOPnUAW%2F1A6OQbMljik8PHqH3FdpRUBr4VSY8vZSyjm3YC%2Fjdro0pcYbgI7O9t63%2BkVufMQyOQ7JDSnQFuatxj2A9S7%2FpB%2Bnb5MdcS7yatP2SxSmc%2BRbN2zox3FIWM94ivS9Gatmsl0VhtVSi5f3L5nVV06JIRA7WHETQ1L10%2ByWOIBvXODjyn8cP7GY64TK8vgKZ0sDACQC2gw25R%2FpGSFgHsHUTN1vVhfBkVuHA94zohU1Zeax9or9abZZgqiMxAlV8TWsI4waXxubdSx2x8Yhh7ES8CJYhyFLqG%2BTwihG4%2B23djCET%2BHGbCEq21%2BF2qQx2pXOcNnl4ymRMDxHdI0TFH3qM09qmRZB4haDP%2FS5Nh9alh1gwhy1tQenMK57G9ROqyjcjRufxIqrCCDSt%2B%2F1HiS6ohvn1dMr%2BADxpUNNaxmuzor%2BTAKmQQT2REQoiB4gZiwbnDVYNZb%2FFO0NY%2FKBq2r0zwXTvO6a7LTSz1clryKlTVU%2FBXkZoB0%2BVEfH9qV6xlRzZgYhsMxe5xMKiy6cIGOqUBge%2FjOCbD7SDWc1o6QppCiRmMkUmChneFaaqGMR4wL5pi42eTkq%2BHP%2FydCmQ6qCBbka3rv4zfRfvWvCevzg10kCNUPMNM1T7Ihmx2nGNUn1rDQWRQK51wc6Oi0IJdqamG1azX06TDuNoHc6gFwwAcXJk%2F%2BHFu9cq8aSJvZIGq7kTsJ4hyYKoM9JkKGOwsq4cLXxPeELUIS7BiUueeDMBoYOgp7Lge&X-Amz-Signature=59c219c9280ac25dc1c65f19f2aa031165444e43601aa76bd0e3772c3e48e3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNHZ76D%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHGxLUMoShbSzbBQ%2BxjI2PS1IL7iVDpI2Plf4eYQNSAOAiEA8RBgk8eYVPPM%2Bu6LYkfBM7lhSnREgRP5F72jkBC32FYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJypF%2FZtM9gS5ktXDircAw0B7jFoOegJeQL6FPmgN91nJ4RyIuFEQtMxwaxd8Ayfu0DDlrb%2BFTsC0gqf1bHjGl1NHEfCmZteurVczMY8V8hHVDCo4xuvQm%2BLMEwADwLOPnUAW%2F1A6OQbMljik8PHqH3FdpRUBr4VSY8vZSyjm3YC%2Fjdro0pcYbgI7O9t63%2BkVufMQyOQ7JDSnQFuatxj2A9S7%2FpB%2Bnb5MdcS7yatP2SxSmc%2BRbN2zox3FIWM94ivS9Gatmsl0VhtVSi5f3L5nVV06JIRA7WHETQ1L10%2ByWOIBvXODjyn8cP7GY64TK8vgKZ0sDACQC2gw25R%2FpGSFgHsHUTN1vVhfBkVuHA94zohU1Zeax9or9abZZgqiMxAlV8TWsI4waXxubdSx2x8Yhh7ES8CJYhyFLqG%2BTwihG4%2B23djCET%2BHGbCEq21%2BF2qQx2pXOcNnl4ymRMDxHdI0TFH3qM09qmRZB4haDP%2FS5Nh9alh1gwhy1tQenMK57G9ROqyjcjRufxIqrCCDSt%2B%2F1HiS6ohvn1dMr%2BADxpUNNaxmuzor%2BTAKmQQT2REQoiB4gZiwbnDVYNZb%2FFO0NY%2FKBq2r0zwXTvO6a7LTSz1clryKlTVU%2FBXkZoB0%2BVEfH9qV6xlRzZgYhsMxe5xMKiy6cIGOqUBge%2FjOCbD7SDWc1o6QppCiRmMkUmChneFaaqGMR4wL5pi42eTkq%2BHP%2FydCmQ6qCBbka3rv4zfRfvWvCevzg10kCNUPMNM1T7Ihmx2nGNUn1rDQWRQK51wc6Oi0IJdqamG1azX06TDuNoHc6gFwwAcXJk%2F%2BHFu9cq8aSJvZIGq7kTsJ4hyYKoM9JkKGOwsq4cLXxPeELUIS7BiUueeDMBoYOgp7Lge&X-Amz-Signature=5c627b7d02675a6aba95ecb661c5dcb73eda39c51ca30e811d15dd962ffa059b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNHZ76D%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHGxLUMoShbSzbBQ%2BxjI2PS1IL7iVDpI2Plf4eYQNSAOAiEA8RBgk8eYVPPM%2Bu6LYkfBM7lhSnREgRP5F72jkBC32FYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJypF%2FZtM9gS5ktXDircAw0B7jFoOegJeQL6FPmgN91nJ4RyIuFEQtMxwaxd8Ayfu0DDlrb%2BFTsC0gqf1bHjGl1NHEfCmZteurVczMY8V8hHVDCo4xuvQm%2BLMEwADwLOPnUAW%2F1A6OQbMljik8PHqH3FdpRUBr4VSY8vZSyjm3YC%2Fjdro0pcYbgI7O9t63%2BkVufMQyOQ7JDSnQFuatxj2A9S7%2FpB%2Bnb5MdcS7yatP2SxSmc%2BRbN2zox3FIWM94ivS9Gatmsl0VhtVSi5f3L5nVV06JIRA7WHETQ1L10%2ByWOIBvXODjyn8cP7GY64TK8vgKZ0sDACQC2gw25R%2FpGSFgHsHUTN1vVhfBkVuHA94zohU1Zeax9or9abZZgqiMxAlV8TWsI4waXxubdSx2x8Yhh7ES8CJYhyFLqG%2BTwihG4%2B23djCET%2BHGbCEq21%2BF2qQx2pXOcNnl4ymRMDxHdI0TFH3qM09qmRZB4haDP%2FS5Nh9alh1gwhy1tQenMK57G9ROqyjcjRufxIqrCCDSt%2B%2F1HiS6ohvn1dMr%2BADxpUNNaxmuzor%2BTAKmQQT2REQoiB4gZiwbnDVYNZb%2FFO0NY%2FKBq2r0zwXTvO6a7LTSz1clryKlTVU%2FBXkZoB0%2BVEfH9qV6xlRzZgYhsMxe5xMKiy6cIGOqUBge%2FjOCbD7SDWc1o6QppCiRmMkUmChneFaaqGMR4wL5pi42eTkq%2BHP%2FydCmQ6qCBbka3rv4zfRfvWvCevzg10kCNUPMNM1T7Ihmx2nGNUn1rDQWRQK51wc6Oi0IJdqamG1azX06TDuNoHc6gFwwAcXJk%2F%2BHFu9cq8aSJvZIGq7kTsJ4hyYKoM9JkKGOwsq4cLXxPeELUIS7BiUueeDMBoYOgp7Lge&X-Amz-Signature=edd1889ff2e50b6d2c33fd6d962c82af0e9beac662f82f915f52c18b60d94fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNHZ76D%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHGxLUMoShbSzbBQ%2BxjI2PS1IL7iVDpI2Plf4eYQNSAOAiEA8RBgk8eYVPPM%2Bu6LYkfBM7lhSnREgRP5F72jkBC32FYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJypF%2FZtM9gS5ktXDircAw0B7jFoOegJeQL6FPmgN91nJ4RyIuFEQtMxwaxd8Ayfu0DDlrb%2BFTsC0gqf1bHjGl1NHEfCmZteurVczMY8V8hHVDCo4xuvQm%2BLMEwADwLOPnUAW%2F1A6OQbMljik8PHqH3FdpRUBr4VSY8vZSyjm3YC%2Fjdro0pcYbgI7O9t63%2BkVufMQyOQ7JDSnQFuatxj2A9S7%2FpB%2Bnb5MdcS7yatP2SxSmc%2BRbN2zox3FIWM94ivS9Gatmsl0VhtVSi5f3L5nVV06JIRA7WHETQ1L10%2ByWOIBvXODjyn8cP7GY64TK8vgKZ0sDACQC2gw25R%2FpGSFgHsHUTN1vVhfBkVuHA94zohU1Zeax9or9abZZgqiMxAlV8TWsI4waXxubdSx2x8Yhh7ES8CJYhyFLqG%2BTwihG4%2B23djCET%2BHGbCEq21%2BF2qQx2pXOcNnl4ymRMDxHdI0TFH3qM09qmRZB4haDP%2FS5Nh9alh1gwhy1tQenMK57G9ROqyjcjRufxIqrCCDSt%2B%2F1HiS6ohvn1dMr%2BADxpUNNaxmuzor%2BTAKmQQT2REQoiB4gZiwbnDVYNZb%2FFO0NY%2FKBq2r0zwXTvO6a7LTSz1clryKlTVU%2FBXkZoB0%2BVEfH9qV6xlRzZgYhsMxe5xMKiy6cIGOqUBge%2FjOCbD7SDWc1o6QppCiRmMkUmChneFaaqGMR4wL5pi42eTkq%2BHP%2FydCmQ6qCBbka3rv4zfRfvWvCevzg10kCNUPMNM1T7Ihmx2nGNUn1rDQWRQK51wc6Oi0IJdqamG1azX06TDuNoHc6gFwwAcXJk%2F%2BHFu9cq8aSJvZIGq7kTsJ4hyYKoM9JkKGOwsq4cLXxPeELUIS7BiUueeDMBoYOgp7Lge&X-Amz-Signature=62875937477216bbd968f53a269891105a610a5d2526c52548641f541f3c88e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNHZ76D%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHGxLUMoShbSzbBQ%2BxjI2PS1IL7iVDpI2Plf4eYQNSAOAiEA8RBgk8eYVPPM%2Bu6LYkfBM7lhSnREgRP5F72jkBC32FYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJypF%2FZtM9gS5ktXDircAw0B7jFoOegJeQL6FPmgN91nJ4RyIuFEQtMxwaxd8Ayfu0DDlrb%2BFTsC0gqf1bHjGl1NHEfCmZteurVczMY8V8hHVDCo4xuvQm%2BLMEwADwLOPnUAW%2F1A6OQbMljik8PHqH3FdpRUBr4VSY8vZSyjm3YC%2Fjdro0pcYbgI7O9t63%2BkVufMQyOQ7JDSnQFuatxj2A9S7%2FpB%2Bnb5MdcS7yatP2SxSmc%2BRbN2zox3FIWM94ivS9Gatmsl0VhtVSi5f3L5nVV06JIRA7WHETQ1L10%2ByWOIBvXODjyn8cP7GY64TK8vgKZ0sDACQC2gw25R%2FpGSFgHsHUTN1vVhfBkVuHA94zohU1Zeax9or9abZZgqiMxAlV8TWsI4waXxubdSx2x8Yhh7ES8CJYhyFLqG%2BTwihG4%2B23djCET%2BHGbCEq21%2BF2qQx2pXOcNnl4ymRMDxHdI0TFH3qM09qmRZB4haDP%2FS5Nh9alh1gwhy1tQenMK57G9ROqyjcjRufxIqrCCDSt%2B%2F1HiS6ohvn1dMr%2BADxpUNNaxmuzor%2BTAKmQQT2REQoiB4gZiwbnDVYNZb%2FFO0NY%2FKBq2r0zwXTvO6a7LTSz1clryKlTVU%2FBXkZoB0%2BVEfH9qV6xlRzZgYhsMxe5xMKiy6cIGOqUBge%2FjOCbD7SDWc1o6QppCiRmMkUmChneFaaqGMR4wL5pi42eTkq%2BHP%2FydCmQ6qCBbka3rv4zfRfvWvCevzg10kCNUPMNM1T7Ihmx2nGNUn1rDQWRQK51wc6Oi0IJdqamG1azX06TDuNoHc6gFwwAcXJk%2F%2BHFu9cq8aSJvZIGq7kTsJ4hyYKoM9JkKGOwsq4cLXxPeELUIS7BiUueeDMBoYOgp7Lge&X-Amz-Signature=920199afeacf836f478248442bf9e4e94e43d524c933421883b27e0010ececaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNHZ76D%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHGxLUMoShbSzbBQ%2BxjI2PS1IL7iVDpI2Plf4eYQNSAOAiEA8RBgk8eYVPPM%2Bu6LYkfBM7lhSnREgRP5F72jkBC32FYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJypF%2FZtM9gS5ktXDircAw0B7jFoOegJeQL6FPmgN91nJ4RyIuFEQtMxwaxd8Ayfu0DDlrb%2BFTsC0gqf1bHjGl1NHEfCmZteurVczMY8V8hHVDCo4xuvQm%2BLMEwADwLOPnUAW%2F1A6OQbMljik8PHqH3FdpRUBr4VSY8vZSyjm3YC%2Fjdro0pcYbgI7O9t63%2BkVufMQyOQ7JDSnQFuatxj2A9S7%2FpB%2Bnb5MdcS7yatP2SxSmc%2BRbN2zox3FIWM94ivS9Gatmsl0VhtVSi5f3L5nVV06JIRA7WHETQ1L10%2ByWOIBvXODjyn8cP7GY64TK8vgKZ0sDACQC2gw25R%2FpGSFgHsHUTN1vVhfBkVuHA94zohU1Zeax9or9abZZgqiMxAlV8TWsI4waXxubdSx2x8Yhh7ES8CJYhyFLqG%2BTwihG4%2B23djCET%2BHGbCEq21%2BF2qQx2pXOcNnl4ymRMDxHdI0TFH3qM09qmRZB4haDP%2FS5Nh9alh1gwhy1tQenMK57G9ROqyjcjRufxIqrCCDSt%2B%2F1HiS6ohvn1dMr%2BADxpUNNaxmuzor%2BTAKmQQT2REQoiB4gZiwbnDVYNZb%2FFO0NY%2FKBq2r0zwXTvO6a7LTSz1clryKlTVU%2FBXkZoB0%2BVEfH9qV6xlRzZgYhsMxe5xMKiy6cIGOqUBge%2FjOCbD7SDWc1o6QppCiRmMkUmChneFaaqGMR4wL5pi42eTkq%2BHP%2FydCmQ6qCBbka3rv4zfRfvWvCevzg10kCNUPMNM1T7Ihmx2nGNUn1rDQWRQK51wc6Oi0IJdqamG1azX06TDuNoHc6gFwwAcXJk%2F%2BHFu9cq8aSJvZIGq7kTsJ4hyYKoM9JkKGOwsq4cLXxPeELUIS7BiUueeDMBoYOgp7Lge&X-Amz-Signature=3de75bb407b4af01a89e4be17db4077d65a1fe981a1cca95e6f2b9aa34963b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNHZ76D%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHGxLUMoShbSzbBQ%2BxjI2PS1IL7iVDpI2Plf4eYQNSAOAiEA8RBgk8eYVPPM%2Bu6LYkfBM7lhSnREgRP5F72jkBC32FYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJypF%2FZtM9gS5ktXDircAw0B7jFoOegJeQL6FPmgN91nJ4RyIuFEQtMxwaxd8Ayfu0DDlrb%2BFTsC0gqf1bHjGl1NHEfCmZteurVczMY8V8hHVDCo4xuvQm%2BLMEwADwLOPnUAW%2F1A6OQbMljik8PHqH3FdpRUBr4VSY8vZSyjm3YC%2Fjdro0pcYbgI7O9t63%2BkVufMQyOQ7JDSnQFuatxj2A9S7%2FpB%2Bnb5MdcS7yatP2SxSmc%2BRbN2zox3FIWM94ivS9Gatmsl0VhtVSi5f3L5nVV06JIRA7WHETQ1L10%2ByWOIBvXODjyn8cP7GY64TK8vgKZ0sDACQC2gw25R%2FpGSFgHsHUTN1vVhfBkVuHA94zohU1Zeax9or9abZZgqiMxAlV8TWsI4waXxubdSx2x8Yhh7ES8CJYhyFLqG%2BTwihG4%2B23djCET%2BHGbCEq21%2BF2qQx2pXOcNnl4ymRMDxHdI0TFH3qM09qmRZB4haDP%2FS5Nh9alh1gwhy1tQenMK57G9ROqyjcjRufxIqrCCDSt%2B%2F1HiS6ohvn1dMr%2BADxpUNNaxmuzor%2BTAKmQQT2REQoiB4gZiwbnDVYNZb%2FFO0NY%2FKBq2r0zwXTvO6a7LTSz1clryKlTVU%2FBXkZoB0%2BVEfH9qV6xlRzZgYhsMxe5xMKiy6cIGOqUBge%2FjOCbD7SDWc1o6QppCiRmMkUmChneFaaqGMR4wL5pi42eTkq%2BHP%2FydCmQ6qCBbka3rv4zfRfvWvCevzg10kCNUPMNM1T7Ihmx2nGNUn1rDQWRQK51wc6Oi0IJdqamG1azX06TDuNoHc6gFwwAcXJk%2F%2BHFu9cq8aSJvZIGq7kTsJ4hyYKoM9JkKGOwsq4cLXxPeELUIS7BiUueeDMBoYOgp7Lge&X-Amz-Signature=db1468ca9a8621515d5ec4c0040531f874651f8b42cf1a00ab5b31554f94dc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
