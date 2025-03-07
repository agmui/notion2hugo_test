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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU62N7YC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjJaZDfkgEftEgc%2BTfLBszn4H7A0qKEs9ssZCkBIK4fAiEA2oIbxpv6FcvchNvijtbJQXaPvCeKFsAQokT47fS3yn0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE61uvHgycxUZBqPdCrcA20K3nZUOxNMnNRvAoISQ7m%2FxLOh1JY0PRzvz25G8DPDNAOthWE%2B4AeL0cna7CTdar1A%2BRYRRcQFVK5ZAc2CmEA%2Bo2dxCMileEdOtDI1%2FSUs5LwbU1%2B6DQ7odgzD1nWZhSlu94CCF5piPNegknLYwUDxfm8C%2FRiaxNwGptCNvp4%2BImVoExRNOcrA0Jhyf5n967QOUD71GPp1i9QqNibG6Mwg%2Fq7apRpn1Kb2liu2dJpSOHyR9uxK%2BFSQ8ZFLxS%2BAiPW7uHQrXhP4IkQNYVtslPgLBqQPWsJ3Z5%2BNLb9XlvMiy%2F4hciHN0FTF3%2FPod8OxtTM1H0V%2F596URH7lp1R0DZ%2Bp5GaX0feko9%2BwgKdqXVKcRPPNerINU7LYjtOveZwu55XhTsZ6UDWOA3xWLOrob8SSejR%2FJl4YcS1V7EfF%2Bao%2F8zEGmaZ4d9D44XO3AjwjJba%2F8vYeuZmQaXdZ7s2fB%2FMvmxNPIHGcdGziV6RfkrSxW5d%2B70WFyzX%2BdUHh%2BQQek3e3tcMozWjaVv0BIKeFVNTko12Qc34O27P3mTh4XdFI4GCeYRGm1IOC3P48NxOlA3qjcq83xTTwfTWVhilk%2FE%2BlAu1dmffGo5CQGFkXt0mFsbcFmsmkqdGoSIjhMNvlqr4GOqUBlGw4MnaRQo%2BMLjNZheiu%2FoVEBI7oHXv1oMWLlmvnqK7q%2Bhaguf20F60NtCViuJ%2BkTwT4M6WUNKojG3Tb4kEaRCmzQXm05FlsNL6sfRHrzxP%2FVcLzifBNOC%2F93IqmjXf3Wr35DYc6EyidNzgjMxBebaaupLm%2BX46mZ%2ByHo4DVlEPsHOaetM97vNZCn6ZV4ukiBaBR6FnqYxdGIA51me1T9pLJCuND&X-Amz-Signature=80f53487f8f7574e60251d9f90fcee066dd1228a797be1b6d07da9c7e8eb66a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU62N7YC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjJaZDfkgEftEgc%2BTfLBszn4H7A0qKEs9ssZCkBIK4fAiEA2oIbxpv6FcvchNvijtbJQXaPvCeKFsAQokT47fS3yn0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE61uvHgycxUZBqPdCrcA20K3nZUOxNMnNRvAoISQ7m%2FxLOh1JY0PRzvz25G8DPDNAOthWE%2B4AeL0cna7CTdar1A%2BRYRRcQFVK5ZAc2CmEA%2Bo2dxCMileEdOtDI1%2FSUs5LwbU1%2B6DQ7odgzD1nWZhSlu94CCF5piPNegknLYwUDxfm8C%2FRiaxNwGptCNvp4%2BImVoExRNOcrA0Jhyf5n967QOUD71GPp1i9QqNibG6Mwg%2Fq7apRpn1Kb2liu2dJpSOHyR9uxK%2BFSQ8ZFLxS%2BAiPW7uHQrXhP4IkQNYVtslPgLBqQPWsJ3Z5%2BNLb9XlvMiy%2F4hciHN0FTF3%2FPod8OxtTM1H0V%2F596URH7lp1R0DZ%2Bp5GaX0feko9%2BwgKdqXVKcRPPNerINU7LYjtOveZwu55XhTsZ6UDWOA3xWLOrob8SSejR%2FJl4YcS1V7EfF%2Bao%2F8zEGmaZ4d9D44XO3AjwjJba%2F8vYeuZmQaXdZ7s2fB%2FMvmxNPIHGcdGziV6RfkrSxW5d%2B70WFyzX%2BdUHh%2BQQek3e3tcMozWjaVv0BIKeFVNTko12Qc34O27P3mTh4XdFI4GCeYRGm1IOC3P48NxOlA3qjcq83xTTwfTWVhilk%2FE%2BlAu1dmffGo5CQGFkXt0mFsbcFmsmkqdGoSIjhMNvlqr4GOqUBlGw4MnaRQo%2BMLjNZheiu%2FoVEBI7oHXv1oMWLlmvnqK7q%2Bhaguf20F60NtCViuJ%2BkTwT4M6WUNKojG3Tb4kEaRCmzQXm05FlsNL6sfRHrzxP%2FVcLzifBNOC%2F93IqmjXf3Wr35DYc6EyidNzgjMxBebaaupLm%2BX46mZ%2ByHo4DVlEPsHOaetM97vNZCn6ZV4ukiBaBR6FnqYxdGIA51me1T9pLJCuND&X-Amz-Signature=a896f2771350a36b40e5a8d4d96d08fe4c776e8c3d370aa2108b74493a2ce695&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU62N7YC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjJaZDfkgEftEgc%2BTfLBszn4H7A0qKEs9ssZCkBIK4fAiEA2oIbxpv6FcvchNvijtbJQXaPvCeKFsAQokT47fS3yn0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE61uvHgycxUZBqPdCrcA20K3nZUOxNMnNRvAoISQ7m%2FxLOh1JY0PRzvz25G8DPDNAOthWE%2B4AeL0cna7CTdar1A%2BRYRRcQFVK5ZAc2CmEA%2Bo2dxCMileEdOtDI1%2FSUs5LwbU1%2B6DQ7odgzD1nWZhSlu94CCF5piPNegknLYwUDxfm8C%2FRiaxNwGptCNvp4%2BImVoExRNOcrA0Jhyf5n967QOUD71GPp1i9QqNibG6Mwg%2Fq7apRpn1Kb2liu2dJpSOHyR9uxK%2BFSQ8ZFLxS%2BAiPW7uHQrXhP4IkQNYVtslPgLBqQPWsJ3Z5%2BNLb9XlvMiy%2F4hciHN0FTF3%2FPod8OxtTM1H0V%2F596URH7lp1R0DZ%2Bp5GaX0feko9%2BwgKdqXVKcRPPNerINU7LYjtOveZwu55XhTsZ6UDWOA3xWLOrob8SSejR%2FJl4YcS1V7EfF%2Bao%2F8zEGmaZ4d9D44XO3AjwjJba%2F8vYeuZmQaXdZ7s2fB%2FMvmxNPIHGcdGziV6RfkrSxW5d%2B70WFyzX%2BdUHh%2BQQek3e3tcMozWjaVv0BIKeFVNTko12Qc34O27P3mTh4XdFI4GCeYRGm1IOC3P48NxOlA3qjcq83xTTwfTWVhilk%2FE%2BlAu1dmffGo5CQGFkXt0mFsbcFmsmkqdGoSIjhMNvlqr4GOqUBlGw4MnaRQo%2BMLjNZheiu%2FoVEBI7oHXv1oMWLlmvnqK7q%2Bhaguf20F60NtCViuJ%2BkTwT4M6WUNKojG3Tb4kEaRCmzQXm05FlsNL6sfRHrzxP%2FVcLzifBNOC%2F93IqmjXf3Wr35DYc6EyidNzgjMxBebaaupLm%2BX46mZ%2ByHo4DVlEPsHOaetM97vNZCn6ZV4ukiBaBR6FnqYxdGIA51me1T9pLJCuND&X-Amz-Signature=9df1c3fd2af1e6a79893cdfe8af4edd1479203174307c3a296098d6e89cde33f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU62N7YC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjJaZDfkgEftEgc%2BTfLBszn4H7A0qKEs9ssZCkBIK4fAiEA2oIbxpv6FcvchNvijtbJQXaPvCeKFsAQokT47fS3yn0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE61uvHgycxUZBqPdCrcA20K3nZUOxNMnNRvAoISQ7m%2FxLOh1JY0PRzvz25G8DPDNAOthWE%2B4AeL0cna7CTdar1A%2BRYRRcQFVK5ZAc2CmEA%2Bo2dxCMileEdOtDI1%2FSUs5LwbU1%2B6DQ7odgzD1nWZhSlu94CCF5piPNegknLYwUDxfm8C%2FRiaxNwGptCNvp4%2BImVoExRNOcrA0Jhyf5n967QOUD71GPp1i9QqNibG6Mwg%2Fq7apRpn1Kb2liu2dJpSOHyR9uxK%2BFSQ8ZFLxS%2BAiPW7uHQrXhP4IkQNYVtslPgLBqQPWsJ3Z5%2BNLb9XlvMiy%2F4hciHN0FTF3%2FPod8OxtTM1H0V%2F596URH7lp1R0DZ%2Bp5GaX0feko9%2BwgKdqXVKcRPPNerINU7LYjtOveZwu55XhTsZ6UDWOA3xWLOrob8SSejR%2FJl4YcS1V7EfF%2Bao%2F8zEGmaZ4d9D44XO3AjwjJba%2F8vYeuZmQaXdZ7s2fB%2FMvmxNPIHGcdGziV6RfkrSxW5d%2B70WFyzX%2BdUHh%2BQQek3e3tcMozWjaVv0BIKeFVNTko12Qc34O27P3mTh4XdFI4GCeYRGm1IOC3P48NxOlA3qjcq83xTTwfTWVhilk%2FE%2BlAu1dmffGo5CQGFkXt0mFsbcFmsmkqdGoSIjhMNvlqr4GOqUBlGw4MnaRQo%2BMLjNZheiu%2FoVEBI7oHXv1oMWLlmvnqK7q%2Bhaguf20F60NtCViuJ%2BkTwT4M6WUNKojG3Tb4kEaRCmzQXm05FlsNL6sfRHrzxP%2FVcLzifBNOC%2F93IqmjXf3Wr35DYc6EyidNzgjMxBebaaupLm%2BX46mZ%2ByHo4DVlEPsHOaetM97vNZCn6ZV4ukiBaBR6FnqYxdGIA51me1T9pLJCuND&X-Amz-Signature=d577ec12c2bfc98354eebc22574829c45cc5f650ad3d9f82d4b8d9285787a0ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU62N7YC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjJaZDfkgEftEgc%2BTfLBszn4H7A0qKEs9ssZCkBIK4fAiEA2oIbxpv6FcvchNvijtbJQXaPvCeKFsAQokT47fS3yn0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE61uvHgycxUZBqPdCrcA20K3nZUOxNMnNRvAoISQ7m%2FxLOh1JY0PRzvz25G8DPDNAOthWE%2B4AeL0cna7CTdar1A%2BRYRRcQFVK5ZAc2CmEA%2Bo2dxCMileEdOtDI1%2FSUs5LwbU1%2B6DQ7odgzD1nWZhSlu94CCF5piPNegknLYwUDxfm8C%2FRiaxNwGptCNvp4%2BImVoExRNOcrA0Jhyf5n967QOUD71GPp1i9QqNibG6Mwg%2Fq7apRpn1Kb2liu2dJpSOHyR9uxK%2BFSQ8ZFLxS%2BAiPW7uHQrXhP4IkQNYVtslPgLBqQPWsJ3Z5%2BNLb9XlvMiy%2F4hciHN0FTF3%2FPod8OxtTM1H0V%2F596URH7lp1R0DZ%2Bp5GaX0feko9%2BwgKdqXVKcRPPNerINU7LYjtOveZwu55XhTsZ6UDWOA3xWLOrob8SSejR%2FJl4YcS1V7EfF%2Bao%2F8zEGmaZ4d9D44XO3AjwjJba%2F8vYeuZmQaXdZ7s2fB%2FMvmxNPIHGcdGziV6RfkrSxW5d%2B70WFyzX%2BdUHh%2BQQek3e3tcMozWjaVv0BIKeFVNTko12Qc34O27P3mTh4XdFI4GCeYRGm1IOC3P48NxOlA3qjcq83xTTwfTWVhilk%2FE%2BlAu1dmffGo5CQGFkXt0mFsbcFmsmkqdGoSIjhMNvlqr4GOqUBlGw4MnaRQo%2BMLjNZheiu%2FoVEBI7oHXv1oMWLlmvnqK7q%2Bhaguf20F60NtCViuJ%2BkTwT4M6WUNKojG3Tb4kEaRCmzQXm05FlsNL6sfRHrzxP%2FVcLzifBNOC%2F93IqmjXf3Wr35DYc6EyidNzgjMxBebaaupLm%2BX46mZ%2ByHo4DVlEPsHOaetM97vNZCn6ZV4ukiBaBR6FnqYxdGIA51me1T9pLJCuND&X-Amz-Signature=30954a577969d4c0645fbb4d52abdbbce760e617da2a14ac47b3f121ecd73ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU62N7YC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjJaZDfkgEftEgc%2BTfLBszn4H7A0qKEs9ssZCkBIK4fAiEA2oIbxpv6FcvchNvijtbJQXaPvCeKFsAQokT47fS3yn0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE61uvHgycxUZBqPdCrcA20K3nZUOxNMnNRvAoISQ7m%2FxLOh1JY0PRzvz25G8DPDNAOthWE%2B4AeL0cna7CTdar1A%2BRYRRcQFVK5ZAc2CmEA%2Bo2dxCMileEdOtDI1%2FSUs5LwbU1%2B6DQ7odgzD1nWZhSlu94CCF5piPNegknLYwUDxfm8C%2FRiaxNwGptCNvp4%2BImVoExRNOcrA0Jhyf5n967QOUD71GPp1i9QqNibG6Mwg%2Fq7apRpn1Kb2liu2dJpSOHyR9uxK%2BFSQ8ZFLxS%2BAiPW7uHQrXhP4IkQNYVtslPgLBqQPWsJ3Z5%2BNLb9XlvMiy%2F4hciHN0FTF3%2FPod8OxtTM1H0V%2F596URH7lp1R0DZ%2Bp5GaX0feko9%2BwgKdqXVKcRPPNerINU7LYjtOveZwu55XhTsZ6UDWOA3xWLOrob8SSejR%2FJl4YcS1V7EfF%2Bao%2F8zEGmaZ4d9D44XO3AjwjJba%2F8vYeuZmQaXdZ7s2fB%2FMvmxNPIHGcdGziV6RfkrSxW5d%2B70WFyzX%2BdUHh%2BQQek3e3tcMozWjaVv0BIKeFVNTko12Qc34O27P3mTh4XdFI4GCeYRGm1IOC3P48NxOlA3qjcq83xTTwfTWVhilk%2FE%2BlAu1dmffGo5CQGFkXt0mFsbcFmsmkqdGoSIjhMNvlqr4GOqUBlGw4MnaRQo%2BMLjNZheiu%2FoVEBI7oHXv1oMWLlmvnqK7q%2Bhaguf20F60NtCViuJ%2BkTwT4M6WUNKojG3Tb4kEaRCmzQXm05FlsNL6sfRHrzxP%2FVcLzifBNOC%2F93IqmjXf3Wr35DYc6EyidNzgjMxBebaaupLm%2BX46mZ%2ByHo4DVlEPsHOaetM97vNZCn6ZV4ukiBaBR6FnqYxdGIA51me1T9pLJCuND&X-Amz-Signature=4d2c2b7f51f57def9e8d8305a91340ceb859bc18ec02618f9ad32feb41ffe503&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU62N7YC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjJaZDfkgEftEgc%2BTfLBszn4H7A0qKEs9ssZCkBIK4fAiEA2oIbxpv6FcvchNvijtbJQXaPvCeKFsAQokT47fS3yn0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE61uvHgycxUZBqPdCrcA20K3nZUOxNMnNRvAoISQ7m%2FxLOh1JY0PRzvz25G8DPDNAOthWE%2B4AeL0cna7CTdar1A%2BRYRRcQFVK5ZAc2CmEA%2Bo2dxCMileEdOtDI1%2FSUs5LwbU1%2B6DQ7odgzD1nWZhSlu94CCF5piPNegknLYwUDxfm8C%2FRiaxNwGptCNvp4%2BImVoExRNOcrA0Jhyf5n967QOUD71GPp1i9QqNibG6Mwg%2Fq7apRpn1Kb2liu2dJpSOHyR9uxK%2BFSQ8ZFLxS%2BAiPW7uHQrXhP4IkQNYVtslPgLBqQPWsJ3Z5%2BNLb9XlvMiy%2F4hciHN0FTF3%2FPod8OxtTM1H0V%2F596URH7lp1R0DZ%2Bp5GaX0feko9%2BwgKdqXVKcRPPNerINU7LYjtOveZwu55XhTsZ6UDWOA3xWLOrob8SSejR%2FJl4YcS1V7EfF%2Bao%2F8zEGmaZ4d9D44XO3AjwjJba%2F8vYeuZmQaXdZ7s2fB%2FMvmxNPIHGcdGziV6RfkrSxW5d%2B70WFyzX%2BdUHh%2BQQek3e3tcMozWjaVv0BIKeFVNTko12Qc34O27P3mTh4XdFI4GCeYRGm1IOC3P48NxOlA3qjcq83xTTwfTWVhilk%2FE%2BlAu1dmffGo5CQGFkXt0mFsbcFmsmkqdGoSIjhMNvlqr4GOqUBlGw4MnaRQo%2BMLjNZheiu%2FoVEBI7oHXv1oMWLlmvnqK7q%2Bhaguf20F60NtCViuJ%2BkTwT4M6WUNKojG3Tb4kEaRCmzQXm05FlsNL6sfRHrzxP%2FVcLzifBNOC%2F93IqmjXf3Wr35DYc6EyidNzgjMxBebaaupLm%2BX46mZ%2ByHo4DVlEPsHOaetM97vNZCn6ZV4ukiBaBR6FnqYxdGIA51me1T9pLJCuND&X-Amz-Signature=63c041e924a5bc20b2b04c8f8930bb1dd2e0b20c443b5221a3b652f4a7fc41f6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
