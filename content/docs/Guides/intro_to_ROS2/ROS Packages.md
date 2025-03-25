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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGRVUTY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClbPMTuMNcxVQD8w84wFyhvedPRip6uQU%2FLD8aTUdLpAIgRsDcTci9Uo3p1tlXh1SvLrRkOHRo6S%2B%2FN%2B2d%2FBKIrLMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNMIj9aqv4jppZZ4DCrcA4LMSjIEBLQKuVq2%2FRGppzo7gCdh%2FQTWM368w2jIb3Y3EEACROx052MjUdbwbxcCTdNcGlZvYqGsZqz7HjI%2FTTqRBNSy9iOa%2F3thvwbG2Cv1NAeKHOOW21eNhUm8ryaPg2OhysOO2rDCvD6VaEGuHdlyiB1zra7QZKC7NDzb5uEf8qdRILCJko5AZv1kdNjU6%2Bf%2BSxuj5I5GKyNyIwxsAtxX7Y3qyCO2YyMjFPTrW1WLxHAlfXvKoHWmMvOnibyb%2FbjAC%2BdJ8b1Kd1A7ELV%2BgrIvJvHV4azngzFHtaqR4v7FGUlt0OZB3J%2FAJpspQwl%2Fd3l26iYz22PtDD5%2F1VEGLxIOlr93%2FfbAA4C96qEER7%2B9yb4ui%2FmlFeXu2YprU9X2zJhmIyWwJnDR9gKZwAj6%2BUneeRvcGVDBCM%2FD1ZATjMF%2BoeIl8sVZeB%2FXRYH4cU%2F8KZdmOhpj6rjlPOviS%2BfjDB9Q6bC7byeqxxT1K7WHKdfDbeTQ9XFaFvCD%2FYm3UjiPXHiiWABFWrf5FMz8xV6VR6X5xIwKjoxjo4c57NHHv7sz55QP29%2BB1lllSZqx70vZzzYlgrowgqIDiaRL23kZ16%2FFYZPc482VLlADlLq4vPO3nlVnb13uJmQZdrr8MJzFi78GOqUBBz7skgMIuFMoZYVKPlKOb0q7Nb%2BEL2VJNZGvzvuAEl4j7y3HjfYPAC3NWVAba292uPfu9gWgYFxD9kNs46ZS9SvmuW%2B%2FfjfETeZhfgGlFeLegLjIch9hWsphi5itZiukOLO5D7ufdqxTag5kWYlhKjMnRLtKGFmQgHUzzo3xN0W6fQ%2Bvyvxh5b3yNV6gIs%2BwI0mLMCmgIouilOq7WmdmKz2jSHXg&X-Amz-Signature=2a0c08db8a75592bf92d969c1be4ece2784b3275e863f89f7b412b869c89dbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGRVUTY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClbPMTuMNcxVQD8w84wFyhvedPRip6uQU%2FLD8aTUdLpAIgRsDcTci9Uo3p1tlXh1SvLrRkOHRo6S%2B%2FN%2B2d%2FBKIrLMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNMIj9aqv4jppZZ4DCrcA4LMSjIEBLQKuVq2%2FRGppzo7gCdh%2FQTWM368w2jIb3Y3EEACROx052MjUdbwbxcCTdNcGlZvYqGsZqz7HjI%2FTTqRBNSy9iOa%2F3thvwbG2Cv1NAeKHOOW21eNhUm8ryaPg2OhysOO2rDCvD6VaEGuHdlyiB1zra7QZKC7NDzb5uEf8qdRILCJko5AZv1kdNjU6%2Bf%2BSxuj5I5GKyNyIwxsAtxX7Y3qyCO2YyMjFPTrW1WLxHAlfXvKoHWmMvOnibyb%2FbjAC%2BdJ8b1Kd1A7ELV%2BgrIvJvHV4azngzFHtaqR4v7FGUlt0OZB3J%2FAJpspQwl%2Fd3l26iYz22PtDD5%2F1VEGLxIOlr93%2FfbAA4C96qEER7%2B9yb4ui%2FmlFeXu2YprU9X2zJhmIyWwJnDR9gKZwAj6%2BUneeRvcGVDBCM%2FD1ZATjMF%2BoeIl8sVZeB%2FXRYH4cU%2F8KZdmOhpj6rjlPOviS%2BfjDB9Q6bC7byeqxxT1K7WHKdfDbeTQ9XFaFvCD%2FYm3UjiPXHiiWABFWrf5FMz8xV6VR6X5xIwKjoxjo4c57NHHv7sz55QP29%2BB1lllSZqx70vZzzYlgrowgqIDiaRL23kZ16%2FFYZPc482VLlADlLq4vPO3nlVnb13uJmQZdrr8MJzFi78GOqUBBz7skgMIuFMoZYVKPlKOb0q7Nb%2BEL2VJNZGvzvuAEl4j7y3HjfYPAC3NWVAba292uPfu9gWgYFxD9kNs46ZS9SvmuW%2B%2FfjfETeZhfgGlFeLegLjIch9hWsphi5itZiukOLO5D7ufdqxTag5kWYlhKjMnRLtKGFmQgHUzzo3xN0W6fQ%2Bvyvxh5b3yNV6gIs%2BwI0mLMCmgIouilOq7WmdmKz2jSHXg&X-Amz-Signature=21f9ec7a27ed3d4c5de54e364cac5d3f8be69bdab5951aee51b1d3523b2d3fc9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGRVUTY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClbPMTuMNcxVQD8w84wFyhvedPRip6uQU%2FLD8aTUdLpAIgRsDcTci9Uo3p1tlXh1SvLrRkOHRo6S%2B%2FN%2B2d%2FBKIrLMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNMIj9aqv4jppZZ4DCrcA4LMSjIEBLQKuVq2%2FRGppzo7gCdh%2FQTWM368w2jIb3Y3EEACROx052MjUdbwbxcCTdNcGlZvYqGsZqz7HjI%2FTTqRBNSy9iOa%2F3thvwbG2Cv1NAeKHOOW21eNhUm8ryaPg2OhysOO2rDCvD6VaEGuHdlyiB1zra7QZKC7NDzb5uEf8qdRILCJko5AZv1kdNjU6%2Bf%2BSxuj5I5GKyNyIwxsAtxX7Y3qyCO2YyMjFPTrW1WLxHAlfXvKoHWmMvOnibyb%2FbjAC%2BdJ8b1Kd1A7ELV%2BgrIvJvHV4azngzFHtaqR4v7FGUlt0OZB3J%2FAJpspQwl%2Fd3l26iYz22PtDD5%2F1VEGLxIOlr93%2FfbAA4C96qEER7%2B9yb4ui%2FmlFeXu2YprU9X2zJhmIyWwJnDR9gKZwAj6%2BUneeRvcGVDBCM%2FD1ZATjMF%2BoeIl8sVZeB%2FXRYH4cU%2F8KZdmOhpj6rjlPOviS%2BfjDB9Q6bC7byeqxxT1K7WHKdfDbeTQ9XFaFvCD%2FYm3UjiPXHiiWABFWrf5FMz8xV6VR6X5xIwKjoxjo4c57NHHv7sz55QP29%2BB1lllSZqx70vZzzYlgrowgqIDiaRL23kZ16%2FFYZPc482VLlADlLq4vPO3nlVnb13uJmQZdrr8MJzFi78GOqUBBz7skgMIuFMoZYVKPlKOb0q7Nb%2BEL2VJNZGvzvuAEl4j7y3HjfYPAC3NWVAba292uPfu9gWgYFxD9kNs46ZS9SvmuW%2B%2FfjfETeZhfgGlFeLegLjIch9hWsphi5itZiukOLO5D7ufdqxTag5kWYlhKjMnRLtKGFmQgHUzzo3xN0W6fQ%2Bvyvxh5b3yNV6gIs%2BwI0mLMCmgIouilOq7WmdmKz2jSHXg&X-Amz-Signature=763dc5661ef9854a80e008ea96e7e76be1054a44099abfd2a2c28242b1b8f82e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGRVUTY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClbPMTuMNcxVQD8w84wFyhvedPRip6uQU%2FLD8aTUdLpAIgRsDcTci9Uo3p1tlXh1SvLrRkOHRo6S%2B%2FN%2B2d%2FBKIrLMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNMIj9aqv4jppZZ4DCrcA4LMSjIEBLQKuVq2%2FRGppzo7gCdh%2FQTWM368w2jIb3Y3EEACROx052MjUdbwbxcCTdNcGlZvYqGsZqz7HjI%2FTTqRBNSy9iOa%2F3thvwbG2Cv1NAeKHOOW21eNhUm8ryaPg2OhysOO2rDCvD6VaEGuHdlyiB1zra7QZKC7NDzb5uEf8qdRILCJko5AZv1kdNjU6%2Bf%2BSxuj5I5GKyNyIwxsAtxX7Y3qyCO2YyMjFPTrW1WLxHAlfXvKoHWmMvOnibyb%2FbjAC%2BdJ8b1Kd1A7ELV%2BgrIvJvHV4azngzFHtaqR4v7FGUlt0OZB3J%2FAJpspQwl%2Fd3l26iYz22PtDD5%2F1VEGLxIOlr93%2FfbAA4C96qEER7%2B9yb4ui%2FmlFeXu2YprU9X2zJhmIyWwJnDR9gKZwAj6%2BUneeRvcGVDBCM%2FD1ZATjMF%2BoeIl8sVZeB%2FXRYH4cU%2F8KZdmOhpj6rjlPOviS%2BfjDB9Q6bC7byeqxxT1K7WHKdfDbeTQ9XFaFvCD%2FYm3UjiPXHiiWABFWrf5FMz8xV6VR6X5xIwKjoxjo4c57NHHv7sz55QP29%2BB1lllSZqx70vZzzYlgrowgqIDiaRL23kZ16%2FFYZPc482VLlADlLq4vPO3nlVnb13uJmQZdrr8MJzFi78GOqUBBz7skgMIuFMoZYVKPlKOb0q7Nb%2BEL2VJNZGvzvuAEl4j7y3HjfYPAC3NWVAba292uPfu9gWgYFxD9kNs46ZS9SvmuW%2B%2FfjfETeZhfgGlFeLegLjIch9hWsphi5itZiukOLO5D7ufdqxTag5kWYlhKjMnRLtKGFmQgHUzzo3xN0W6fQ%2Bvyvxh5b3yNV6gIs%2BwI0mLMCmgIouilOq7WmdmKz2jSHXg&X-Amz-Signature=49ac0a587f34c6e421a78d7ea2da543431097e2c34a1b6160937716b8ac612d8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGRVUTY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClbPMTuMNcxVQD8w84wFyhvedPRip6uQU%2FLD8aTUdLpAIgRsDcTci9Uo3p1tlXh1SvLrRkOHRo6S%2B%2FN%2B2d%2FBKIrLMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNMIj9aqv4jppZZ4DCrcA4LMSjIEBLQKuVq2%2FRGppzo7gCdh%2FQTWM368w2jIb3Y3EEACROx052MjUdbwbxcCTdNcGlZvYqGsZqz7HjI%2FTTqRBNSy9iOa%2F3thvwbG2Cv1NAeKHOOW21eNhUm8ryaPg2OhysOO2rDCvD6VaEGuHdlyiB1zra7QZKC7NDzb5uEf8qdRILCJko5AZv1kdNjU6%2Bf%2BSxuj5I5GKyNyIwxsAtxX7Y3qyCO2YyMjFPTrW1WLxHAlfXvKoHWmMvOnibyb%2FbjAC%2BdJ8b1Kd1A7ELV%2BgrIvJvHV4azngzFHtaqR4v7FGUlt0OZB3J%2FAJpspQwl%2Fd3l26iYz22PtDD5%2F1VEGLxIOlr93%2FfbAA4C96qEER7%2B9yb4ui%2FmlFeXu2YprU9X2zJhmIyWwJnDR9gKZwAj6%2BUneeRvcGVDBCM%2FD1ZATjMF%2BoeIl8sVZeB%2FXRYH4cU%2F8KZdmOhpj6rjlPOviS%2BfjDB9Q6bC7byeqxxT1K7WHKdfDbeTQ9XFaFvCD%2FYm3UjiPXHiiWABFWrf5FMz8xV6VR6X5xIwKjoxjo4c57NHHv7sz55QP29%2BB1lllSZqx70vZzzYlgrowgqIDiaRL23kZ16%2FFYZPc482VLlADlLq4vPO3nlVnb13uJmQZdrr8MJzFi78GOqUBBz7skgMIuFMoZYVKPlKOb0q7Nb%2BEL2VJNZGvzvuAEl4j7y3HjfYPAC3NWVAba292uPfu9gWgYFxD9kNs46ZS9SvmuW%2B%2FfjfETeZhfgGlFeLegLjIch9hWsphi5itZiukOLO5D7ufdqxTag5kWYlhKjMnRLtKGFmQgHUzzo3xN0W6fQ%2Bvyvxh5b3yNV6gIs%2BwI0mLMCmgIouilOq7WmdmKz2jSHXg&X-Amz-Signature=1c40bf1e486469e14ce7cb2f4f63e7e331d75550e149163a50269f9325a25e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGRVUTY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClbPMTuMNcxVQD8w84wFyhvedPRip6uQU%2FLD8aTUdLpAIgRsDcTci9Uo3p1tlXh1SvLrRkOHRo6S%2B%2FN%2B2d%2FBKIrLMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNMIj9aqv4jppZZ4DCrcA4LMSjIEBLQKuVq2%2FRGppzo7gCdh%2FQTWM368w2jIb3Y3EEACROx052MjUdbwbxcCTdNcGlZvYqGsZqz7HjI%2FTTqRBNSy9iOa%2F3thvwbG2Cv1NAeKHOOW21eNhUm8ryaPg2OhysOO2rDCvD6VaEGuHdlyiB1zra7QZKC7NDzb5uEf8qdRILCJko5AZv1kdNjU6%2Bf%2BSxuj5I5GKyNyIwxsAtxX7Y3qyCO2YyMjFPTrW1WLxHAlfXvKoHWmMvOnibyb%2FbjAC%2BdJ8b1Kd1A7ELV%2BgrIvJvHV4azngzFHtaqR4v7FGUlt0OZB3J%2FAJpspQwl%2Fd3l26iYz22PtDD5%2F1VEGLxIOlr93%2FfbAA4C96qEER7%2B9yb4ui%2FmlFeXu2YprU9X2zJhmIyWwJnDR9gKZwAj6%2BUneeRvcGVDBCM%2FD1ZATjMF%2BoeIl8sVZeB%2FXRYH4cU%2F8KZdmOhpj6rjlPOviS%2BfjDB9Q6bC7byeqxxT1K7WHKdfDbeTQ9XFaFvCD%2FYm3UjiPXHiiWABFWrf5FMz8xV6VR6X5xIwKjoxjo4c57NHHv7sz55QP29%2BB1lllSZqx70vZzzYlgrowgqIDiaRL23kZ16%2FFYZPc482VLlADlLq4vPO3nlVnb13uJmQZdrr8MJzFi78GOqUBBz7skgMIuFMoZYVKPlKOb0q7Nb%2BEL2VJNZGvzvuAEl4j7y3HjfYPAC3NWVAba292uPfu9gWgYFxD9kNs46ZS9SvmuW%2B%2FfjfETeZhfgGlFeLegLjIch9hWsphi5itZiukOLO5D7ufdqxTag5kWYlhKjMnRLtKGFmQgHUzzo3xN0W6fQ%2Bvyvxh5b3yNV6gIs%2BwI0mLMCmgIouilOq7WmdmKz2jSHXg&X-Amz-Signature=c682791e9ddf675f52da66dfd5342f39e16efd7f7d60a73b995007b565ce136e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGRVUTY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClbPMTuMNcxVQD8w84wFyhvedPRip6uQU%2FLD8aTUdLpAIgRsDcTci9Uo3p1tlXh1SvLrRkOHRo6S%2B%2FN%2B2d%2FBKIrLMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNMIj9aqv4jppZZ4DCrcA4LMSjIEBLQKuVq2%2FRGppzo7gCdh%2FQTWM368w2jIb3Y3EEACROx052MjUdbwbxcCTdNcGlZvYqGsZqz7HjI%2FTTqRBNSy9iOa%2F3thvwbG2Cv1NAeKHOOW21eNhUm8ryaPg2OhysOO2rDCvD6VaEGuHdlyiB1zra7QZKC7NDzb5uEf8qdRILCJko5AZv1kdNjU6%2Bf%2BSxuj5I5GKyNyIwxsAtxX7Y3qyCO2YyMjFPTrW1WLxHAlfXvKoHWmMvOnibyb%2FbjAC%2BdJ8b1Kd1A7ELV%2BgrIvJvHV4azngzFHtaqR4v7FGUlt0OZB3J%2FAJpspQwl%2Fd3l26iYz22PtDD5%2F1VEGLxIOlr93%2FfbAA4C96qEER7%2B9yb4ui%2FmlFeXu2YprU9X2zJhmIyWwJnDR9gKZwAj6%2BUneeRvcGVDBCM%2FD1ZATjMF%2BoeIl8sVZeB%2FXRYH4cU%2F8KZdmOhpj6rjlPOviS%2BfjDB9Q6bC7byeqxxT1K7WHKdfDbeTQ9XFaFvCD%2FYm3UjiPXHiiWABFWrf5FMz8xV6VR6X5xIwKjoxjo4c57NHHv7sz55QP29%2BB1lllSZqx70vZzzYlgrowgqIDiaRL23kZ16%2FFYZPc482VLlADlLq4vPO3nlVnb13uJmQZdrr8MJzFi78GOqUBBz7skgMIuFMoZYVKPlKOb0q7Nb%2BEL2VJNZGvzvuAEl4j7y3HjfYPAC3NWVAba292uPfu9gWgYFxD9kNs46ZS9SvmuW%2B%2FfjfETeZhfgGlFeLegLjIch9hWsphi5itZiukOLO5D7ufdqxTag5kWYlhKjMnRLtKGFmQgHUzzo3xN0W6fQ%2Bvyvxh5b3yNV6gIs%2BwI0mLMCmgIouilOq7WmdmKz2jSHXg&X-Amz-Signature=8f6b81b2dde4e5281443be3494993c1e47cb77c63846ccd4c83c76872c9584f7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
