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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA7WI2B%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCmjdAoVDLlZmgtouI4NCG8cfdiaHdUtcTUoojZ4O2LXQIgYICd7G63enfBvJg7QdvPBjEMk4GTGV82XpRAGD7drIEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK8wA6G521DKFaLJSrcAyGn5V%2FuwFM%2FgLfhQECweLEJgct5KyX5Qfidnzu91bay1PAnNTJ9JEjQsvTGNvYs4oqE2NWTLoZ0uvURZmcJNXpMzDGW%2FqCucBI7zIB0ie9AkQspj%2FuWhitpaaKRNYAcCmcleaGSQ3hsOuuhDzmc63xPRmlFa9kv2%2FB8lW8b6FObRwjr1DbTAEMoR7h4T6H5vFUW48xJmz46FTIB880ni57KGjY2YmdU5F2wu6Et7VPEB851JBBcesHcqzVBeyWnEAKd1hqxu1QTFM06qlupNNC9Yn14x0VgGR8qfeGcnQsJzS78ZKnHSNo87p69OafMNc4bKJsvYTdzDnq665Mmcocf6RAe2XioXTaOnqg%2FsJjDo5L%2BJkLtsbg2HJryQGPCCYRhGzu60SRbYyMwLeqsfVW7xe5Uso7c1d5XaRS7Kl3flz%2B3zVQw5G6eu3GgfXNrKHqw%2BrWvjjLQbCs0LkZjhsbB36ry%2B%2B8Qi7rif0ByMovKRW6TyBauEUWX3sxqWjrzVHADk%2B8W3uFDwn4g3lD4oV3h%2BBkwgZIfmPxeQrRoySSBWxPlMAFAF6uW7ApqqHWCyLIos5XH%2F2YIg5BZGEPsuF3s2sIPC4YNRCctxGo8MR9gcF8eUS2KMUfeJYRZMJrLu74GOqUB8vg82MtRGML4WNVpGPWhdsKp1RJjkQ857%2FSZaH0XYKJ762f%2FehRQAoAUK7pv4FiJen1sTipzpmTfAWQQWJUNAmjfo5S4Zb4zxoY0oTZB2nxxCm2nhMb5AcCkkMbejcOZzYvxqAZWTsFlCbUXH4JnHc9JQg2qhpYrDiVouPH7BgV2ZF1U4ndUJC41iV8LApDcBWPkR50tRMB4ddBL4DPXn50x78JB&X-Amz-Signature=8a0716496bcfbd801748629e0b23a74428a81acde4afd605f4177d8c8b95a860&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA7WI2B%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCmjdAoVDLlZmgtouI4NCG8cfdiaHdUtcTUoojZ4O2LXQIgYICd7G63enfBvJg7QdvPBjEMk4GTGV82XpRAGD7drIEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK8wA6G521DKFaLJSrcAyGn5V%2FuwFM%2FgLfhQECweLEJgct5KyX5Qfidnzu91bay1PAnNTJ9JEjQsvTGNvYs4oqE2NWTLoZ0uvURZmcJNXpMzDGW%2FqCucBI7zIB0ie9AkQspj%2FuWhitpaaKRNYAcCmcleaGSQ3hsOuuhDzmc63xPRmlFa9kv2%2FB8lW8b6FObRwjr1DbTAEMoR7h4T6H5vFUW48xJmz46FTIB880ni57KGjY2YmdU5F2wu6Et7VPEB851JBBcesHcqzVBeyWnEAKd1hqxu1QTFM06qlupNNC9Yn14x0VgGR8qfeGcnQsJzS78ZKnHSNo87p69OafMNc4bKJsvYTdzDnq665Mmcocf6RAe2XioXTaOnqg%2FsJjDo5L%2BJkLtsbg2HJryQGPCCYRhGzu60SRbYyMwLeqsfVW7xe5Uso7c1d5XaRS7Kl3flz%2B3zVQw5G6eu3GgfXNrKHqw%2BrWvjjLQbCs0LkZjhsbB36ry%2B%2B8Qi7rif0ByMovKRW6TyBauEUWX3sxqWjrzVHADk%2B8W3uFDwn4g3lD4oV3h%2BBkwgZIfmPxeQrRoySSBWxPlMAFAF6uW7ApqqHWCyLIos5XH%2F2YIg5BZGEPsuF3s2sIPC4YNRCctxGo8MR9gcF8eUS2KMUfeJYRZMJrLu74GOqUB8vg82MtRGML4WNVpGPWhdsKp1RJjkQ857%2FSZaH0XYKJ762f%2FehRQAoAUK7pv4FiJen1sTipzpmTfAWQQWJUNAmjfo5S4Zb4zxoY0oTZB2nxxCm2nhMb5AcCkkMbejcOZzYvxqAZWTsFlCbUXH4JnHc9JQg2qhpYrDiVouPH7BgV2ZF1U4ndUJC41iV8LApDcBWPkR50tRMB4ddBL4DPXn50x78JB&X-Amz-Signature=9242bac8ac01fbde561f3d712c87b02898153a4c981a1376ffd6562c374445a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA7WI2B%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCmjdAoVDLlZmgtouI4NCG8cfdiaHdUtcTUoojZ4O2LXQIgYICd7G63enfBvJg7QdvPBjEMk4GTGV82XpRAGD7drIEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK8wA6G521DKFaLJSrcAyGn5V%2FuwFM%2FgLfhQECweLEJgct5KyX5Qfidnzu91bay1PAnNTJ9JEjQsvTGNvYs4oqE2NWTLoZ0uvURZmcJNXpMzDGW%2FqCucBI7zIB0ie9AkQspj%2FuWhitpaaKRNYAcCmcleaGSQ3hsOuuhDzmc63xPRmlFa9kv2%2FB8lW8b6FObRwjr1DbTAEMoR7h4T6H5vFUW48xJmz46FTIB880ni57KGjY2YmdU5F2wu6Et7VPEB851JBBcesHcqzVBeyWnEAKd1hqxu1QTFM06qlupNNC9Yn14x0VgGR8qfeGcnQsJzS78ZKnHSNo87p69OafMNc4bKJsvYTdzDnq665Mmcocf6RAe2XioXTaOnqg%2FsJjDo5L%2BJkLtsbg2HJryQGPCCYRhGzu60SRbYyMwLeqsfVW7xe5Uso7c1d5XaRS7Kl3flz%2B3zVQw5G6eu3GgfXNrKHqw%2BrWvjjLQbCs0LkZjhsbB36ry%2B%2B8Qi7rif0ByMovKRW6TyBauEUWX3sxqWjrzVHADk%2B8W3uFDwn4g3lD4oV3h%2BBkwgZIfmPxeQrRoySSBWxPlMAFAF6uW7ApqqHWCyLIos5XH%2F2YIg5BZGEPsuF3s2sIPC4YNRCctxGo8MR9gcF8eUS2KMUfeJYRZMJrLu74GOqUB8vg82MtRGML4WNVpGPWhdsKp1RJjkQ857%2FSZaH0XYKJ762f%2FehRQAoAUK7pv4FiJen1sTipzpmTfAWQQWJUNAmjfo5S4Zb4zxoY0oTZB2nxxCm2nhMb5AcCkkMbejcOZzYvxqAZWTsFlCbUXH4JnHc9JQg2qhpYrDiVouPH7BgV2ZF1U4ndUJC41iV8LApDcBWPkR50tRMB4ddBL4DPXn50x78JB&X-Amz-Signature=68ad2419c90acba016650da41966ab6dbf64748b3a232bd123b1d88fe3e3eaae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA7WI2B%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCmjdAoVDLlZmgtouI4NCG8cfdiaHdUtcTUoojZ4O2LXQIgYICd7G63enfBvJg7QdvPBjEMk4GTGV82XpRAGD7drIEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK8wA6G521DKFaLJSrcAyGn5V%2FuwFM%2FgLfhQECweLEJgct5KyX5Qfidnzu91bay1PAnNTJ9JEjQsvTGNvYs4oqE2NWTLoZ0uvURZmcJNXpMzDGW%2FqCucBI7zIB0ie9AkQspj%2FuWhitpaaKRNYAcCmcleaGSQ3hsOuuhDzmc63xPRmlFa9kv2%2FB8lW8b6FObRwjr1DbTAEMoR7h4T6H5vFUW48xJmz46FTIB880ni57KGjY2YmdU5F2wu6Et7VPEB851JBBcesHcqzVBeyWnEAKd1hqxu1QTFM06qlupNNC9Yn14x0VgGR8qfeGcnQsJzS78ZKnHSNo87p69OafMNc4bKJsvYTdzDnq665Mmcocf6RAe2XioXTaOnqg%2FsJjDo5L%2BJkLtsbg2HJryQGPCCYRhGzu60SRbYyMwLeqsfVW7xe5Uso7c1d5XaRS7Kl3flz%2B3zVQw5G6eu3GgfXNrKHqw%2BrWvjjLQbCs0LkZjhsbB36ry%2B%2B8Qi7rif0ByMovKRW6TyBauEUWX3sxqWjrzVHADk%2B8W3uFDwn4g3lD4oV3h%2BBkwgZIfmPxeQrRoySSBWxPlMAFAF6uW7ApqqHWCyLIos5XH%2F2YIg5BZGEPsuF3s2sIPC4YNRCctxGo8MR9gcF8eUS2KMUfeJYRZMJrLu74GOqUB8vg82MtRGML4WNVpGPWhdsKp1RJjkQ857%2FSZaH0XYKJ762f%2FehRQAoAUK7pv4FiJen1sTipzpmTfAWQQWJUNAmjfo5S4Zb4zxoY0oTZB2nxxCm2nhMb5AcCkkMbejcOZzYvxqAZWTsFlCbUXH4JnHc9JQg2qhpYrDiVouPH7BgV2ZF1U4ndUJC41iV8LApDcBWPkR50tRMB4ddBL4DPXn50x78JB&X-Amz-Signature=a1c59c3b088e872ee70038935447f30112ac840134d4c290454bdd1bb4e3d468&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA7WI2B%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCmjdAoVDLlZmgtouI4NCG8cfdiaHdUtcTUoojZ4O2LXQIgYICd7G63enfBvJg7QdvPBjEMk4GTGV82XpRAGD7drIEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK8wA6G521DKFaLJSrcAyGn5V%2FuwFM%2FgLfhQECweLEJgct5KyX5Qfidnzu91bay1PAnNTJ9JEjQsvTGNvYs4oqE2NWTLoZ0uvURZmcJNXpMzDGW%2FqCucBI7zIB0ie9AkQspj%2FuWhitpaaKRNYAcCmcleaGSQ3hsOuuhDzmc63xPRmlFa9kv2%2FB8lW8b6FObRwjr1DbTAEMoR7h4T6H5vFUW48xJmz46FTIB880ni57KGjY2YmdU5F2wu6Et7VPEB851JBBcesHcqzVBeyWnEAKd1hqxu1QTFM06qlupNNC9Yn14x0VgGR8qfeGcnQsJzS78ZKnHSNo87p69OafMNc4bKJsvYTdzDnq665Mmcocf6RAe2XioXTaOnqg%2FsJjDo5L%2BJkLtsbg2HJryQGPCCYRhGzu60SRbYyMwLeqsfVW7xe5Uso7c1d5XaRS7Kl3flz%2B3zVQw5G6eu3GgfXNrKHqw%2BrWvjjLQbCs0LkZjhsbB36ry%2B%2B8Qi7rif0ByMovKRW6TyBauEUWX3sxqWjrzVHADk%2B8W3uFDwn4g3lD4oV3h%2BBkwgZIfmPxeQrRoySSBWxPlMAFAF6uW7ApqqHWCyLIos5XH%2F2YIg5BZGEPsuF3s2sIPC4YNRCctxGo8MR9gcF8eUS2KMUfeJYRZMJrLu74GOqUB8vg82MtRGML4WNVpGPWhdsKp1RJjkQ857%2FSZaH0XYKJ762f%2FehRQAoAUK7pv4FiJen1sTipzpmTfAWQQWJUNAmjfo5S4Zb4zxoY0oTZB2nxxCm2nhMb5AcCkkMbejcOZzYvxqAZWTsFlCbUXH4JnHc9JQg2qhpYrDiVouPH7BgV2ZF1U4ndUJC41iV8LApDcBWPkR50tRMB4ddBL4DPXn50x78JB&X-Amz-Signature=ed1ef45736e5eb38be7c20a7616149d926958b063eff1c0afd2e58107dbe7fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA7WI2B%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCmjdAoVDLlZmgtouI4NCG8cfdiaHdUtcTUoojZ4O2LXQIgYICd7G63enfBvJg7QdvPBjEMk4GTGV82XpRAGD7drIEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK8wA6G521DKFaLJSrcAyGn5V%2FuwFM%2FgLfhQECweLEJgct5KyX5Qfidnzu91bay1PAnNTJ9JEjQsvTGNvYs4oqE2NWTLoZ0uvURZmcJNXpMzDGW%2FqCucBI7zIB0ie9AkQspj%2FuWhitpaaKRNYAcCmcleaGSQ3hsOuuhDzmc63xPRmlFa9kv2%2FB8lW8b6FObRwjr1DbTAEMoR7h4T6H5vFUW48xJmz46FTIB880ni57KGjY2YmdU5F2wu6Et7VPEB851JBBcesHcqzVBeyWnEAKd1hqxu1QTFM06qlupNNC9Yn14x0VgGR8qfeGcnQsJzS78ZKnHSNo87p69OafMNc4bKJsvYTdzDnq665Mmcocf6RAe2XioXTaOnqg%2FsJjDo5L%2BJkLtsbg2HJryQGPCCYRhGzu60SRbYyMwLeqsfVW7xe5Uso7c1d5XaRS7Kl3flz%2B3zVQw5G6eu3GgfXNrKHqw%2BrWvjjLQbCs0LkZjhsbB36ry%2B%2B8Qi7rif0ByMovKRW6TyBauEUWX3sxqWjrzVHADk%2B8W3uFDwn4g3lD4oV3h%2BBkwgZIfmPxeQrRoySSBWxPlMAFAF6uW7ApqqHWCyLIos5XH%2F2YIg5BZGEPsuF3s2sIPC4YNRCctxGo8MR9gcF8eUS2KMUfeJYRZMJrLu74GOqUB8vg82MtRGML4WNVpGPWhdsKp1RJjkQ857%2FSZaH0XYKJ762f%2FehRQAoAUK7pv4FiJen1sTipzpmTfAWQQWJUNAmjfo5S4Zb4zxoY0oTZB2nxxCm2nhMb5AcCkkMbejcOZzYvxqAZWTsFlCbUXH4JnHc9JQg2qhpYrDiVouPH7BgV2ZF1U4ndUJC41iV8LApDcBWPkR50tRMB4ddBL4DPXn50x78JB&X-Amz-Signature=449d3235d5e028fea33fc8f386ef07682a22534397ff7a2a57aee830db929e76&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA7WI2B%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCmjdAoVDLlZmgtouI4NCG8cfdiaHdUtcTUoojZ4O2LXQIgYICd7G63enfBvJg7QdvPBjEMk4GTGV82XpRAGD7drIEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK8wA6G521DKFaLJSrcAyGn5V%2FuwFM%2FgLfhQECweLEJgct5KyX5Qfidnzu91bay1PAnNTJ9JEjQsvTGNvYs4oqE2NWTLoZ0uvURZmcJNXpMzDGW%2FqCucBI7zIB0ie9AkQspj%2FuWhitpaaKRNYAcCmcleaGSQ3hsOuuhDzmc63xPRmlFa9kv2%2FB8lW8b6FObRwjr1DbTAEMoR7h4T6H5vFUW48xJmz46FTIB880ni57KGjY2YmdU5F2wu6Et7VPEB851JBBcesHcqzVBeyWnEAKd1hqxu1QTFM06qlupNNC9Yn14x0VgGR8qfeGcnQsJzS78ZKnHSNo87p69OafMNc4bKJsvYTdzDnq665Mmcocf6RAe2XioXTaOnqg%2FsJjDo5L%2BJkLtsbg2HJryQGPCCYRhGzu60SRbYyMwLeqsfVW7xe5Uso7c1d5XaRS7Kl3flz%2B3zVQw5G6eu3GgfXNrKHqw%2BrWvjjLQbCs0LkZjhsbB36ry%2B%2B8Qi7rif0ByMovKRW6TyBauEUWX3sxqWjrzVHADk%2B8W3uFDwn4g3lD4oV3h%2BBkwgZIfmPxeQrRoySSBWxPlMAFAF6uW7ApqqHWCyLIos5XH%2F2YIg5BZGEPsuF3s2sIPC4YNRCctxGo8MR9gcF8eUS2KMUfeJYRZMJrLu74GOqUB8vg82MtRGML4WNVpGPWhdsKp1RJjkQ857%2FSZaH0XYKJ762f%2FehRQAoAUK7pv4FiJen1sTipzpmTfAWQQWJUNAmjfo5S4Zb4zxoY0oTZB2nxxCm2nhMb5AcCkkMbejcOZzYvxqAZWTsFlCbUXH4JnHc9JQg2qhpYrDiVouPH7BgV2ZF1U4ndUJC41iV8LApDcBWPkR50tRMB4ddBL4DPXn50x78JB&X-Amz-Signature=aacfc0b95ef44e03ff25af0820ee6452b0673aff560f15fb76c2c86675724e1c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
