---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMYI6AU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBglS1rlCAtIjZqOwOJmSoOVToRa822dm%2FvWfdPyrbkRAiAqDhcnqJgAY%2FDMkKVBnvIaMV7yTZHHefeZUAXjpnvTCCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW4ITG%2FioppEW%2B2%2FHKtwD2Ad1JtOCf3v3gQYJZC1Gx4EA0CnzUcZ6T7fTYUECu8pU3H3j%2FoQTGeoSWXRI8QBJQX4p5UD5Tj%2F27QIOy4Of53svQk%2BZvtSeDvuN3RZfby9srwnMkKX85rL8Qzi1P%2Fe1y3XaIk7I8Mjh6PO676wqnpMqKwKxz5yAdW9qhTE2I%2BWWaggBRnv8SSjhtP%2Fecw9tJdkCwmFlVeyvU3%2FzZbMGS%2F%2BsnpsApUjaeLkyujufcrMlzI0hDyoYwOZfx4IQOHlxewpLFXQNnkr4fFtLp57blbkHvwlxrH4VT3UcmyvhQwt0JuHvOpqw%2Fa6Mpq7g9Fl2AWYIBusIsByGbl23dwnudgUvg1BrNE4UtxpRJLavJt8QffZDQIfKFEW2AA49EkJBVkmc3GatRxcwGD4jc3tEMOAqGKFMpDPNGITPSZuyn3UNfP92uUPm4xeXxWdsa3lvtmbRTE5eftzCJv6JRA69MHGX7DUmv0NheFSftEXjXf7If0Wj51GEjVNCVbJAXDJAjJeCDajWJUpzM3U7VcJP7qLbmb3OrbfTgyiED1CdHKcAqHY5eMzVbH2B%2FmjjPk8HHq5ihWh1rMEjQWvEYXG17yVOetQ0fEg0LMtBDZdKQJig3LllKD9aFbFXAo8w9c%2FowwY6pgHrE1q1444A7q4NXyDSNJyx90wmIikk1c4vakGGwCSlPT0jiHlK9C94HvNafFC%2FLk8eE3H42NM0%2FNzeIIBGGKUPELpMmNIf465PobeR6UEVJcTf1akvN38RTQ0NKnp4INwdz5BBs80AxYlBi8z7s9o%2F1IOHWtMlaOkaz74x2vziAzksQQPrUjNutjwcU0CIcOxmM8uWO62vTMBgbecyh%2B51Q6%2FsXXe2&X-Amz-Signature=a67dc06a43a94979f8e9a0a7e9b9f4b0f73e7dd4bdbf15acaf0d095a680116f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMYI6AU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBglS1rlCAtIjZqOwOJmSoOVToRa822dm%2FvWfdPyrbkRAiAqDhcnqJgAY%2FDMkKVBnvIaMV7yTZHHefeZUAXjpnvTCCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW4ITG%2FioppEW%2B2%2FHKtwD2Ad1JtOCf3v3gQYJZC1Gx4EA0CnzUcZ6T7fTYUECu8pU3H3j%2FoQTGeoSWXRI8QBJQX4p5UD5Tj%2F27QIOy4Of53svQk%2BZvtSeDvuN3RZfby9srwnMkKX85rL8Qzi1P%2Fe1y3XaIk7I8Mjh6PO676wqnpMqKwKxz5yAdW9qhTE2I%2BWWaggBRnv8SSjhtP%2Fecw9tJdkCwmFlVeyvU3%2FzZbMGS%2F%2BsnpsApUjaeLkyujufcrMlzI0hDyoYwOZfx4IQOHlxewpLFXQNnkr4fFtLp57blbkHvwlxrH4VT3UcmyvhQwt0JuHvOpqw%2Fa6Mpq7g9Fl2AWYIBusIsByGbl23dwnudgUvg1BrNE4UtxpRJLavJt8QffZDQIfKFEW2AA49EkJBVkmc3GatRxcwGD4jc3tEMOAqGKFMpDPNGITPSZuyn3UNfP92uUPm4xeXxWdsa3lvtmbRTE5eftzCJv6JRA69MHGX7DUmv0NheFSftEXjXf7If0Wj51GEjVNCVbJAXDJAjJeCDajWJUpzM3U7VcJP7qLbmb3OrbfTgyiED1CdHKcAqHY5eMzVbH2B%2FmjjPk8HHq5ihWh1rMEjQWvEYXG17yVOetQ0fEg0LMtBDZdKQJig3LllKD9aFbFXAo8w9c%2FowwY6pgHrE1q1444A7q4NXyDSNJyx90wmIikk1c4vakGGwCSlPT0jiHlK9C94HvNafFC%2FLk8eE3H42NM0%2FNzeIIBGGKUPELpMmNIf465PobeR6UEVJcTf1akvN38RTQ0NKnp4INwdz5BBs80AxYlBi8z7s9o%2F1IOHWtMlaOkaz74x2vziAzksQQPrUjNutjwcU0CIcOxmM8uWO62vTMBgbecyh%2B51Q6%2FsXXe2&X-Amz-Signature=46ee6181f0ea711b08327b82edf3dcf14bd128f49c09eb2bcbd325d7b465ec4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMYI6AU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBglS1rlCAtIjZqOwOJmSoOVToRa822dm%2FvWfdPyrbkRAiAqDhcnqJgAY%2FDMkKVBnvIaMV7yTZHHefeZUAXjpnvTCCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW4ITG%2FioppEW%2B2%2FHKtwD2Ad1JtOCf3v3gQYJZC1Gx4EA0CnzUcZ6T7fTYUECu8pU3H3j%2FoQTGeoSWXRI8QBJQX4p5UD5Tj%2F27QIOy4Of53svQk%2BZvtSeDvuN3RZfby9srwnMkKX85rL8Qzi1P%2Fe1y3XaIk7I8Mjh6PO676wqnpMqKwKxz5yAdW9qhTE2I%2BWWaggBRnv8SSjhtP%2Fecw9tJdkCwmFlVeyvU3%2FzZbMGS%2F%2BsnpsApUjaeLkyujufcrMlzI0hDyoYwOZfx4IQOHlxewpLFXQNnkr4fFtLp57blbkHvwlxrH4VT3UcmyvhQwt0JuHvOpqw%2Fa6Mpq7g9Fl2AWYIBusIsByGbl23dwnudgUvg1BrNE4UtxpRJLavJt8QffZDQIfKFEW2AA49EkJBVkmc3GatRxcwGD4jc3tEMOAqGKFMpDPNGITPSZuyn3UNfP92uUPm4xeXxWdsa3lvtmbRTE5eftzCJv6JRA69MHGX7DUmv0NheFSftEXjXf7If0Wj51GEjVNCVbJAXDJAjJeCDajWJUpzM3U7VcJP7qLbmb3OrbfTgyiED1CdHKcAqHY5eMzVbH2B%2FmjjPk8HHq5ihWh1rMEjQWvEYXG17yVOetQ0fEg0LMtBDZdKQJig3LllKD9aFbFXAo8w9c%2FowwY6pgHrE1q1444A7q4NXyDSNJyx90wmIikk1c4vakGGwCSlPT0jiHlK9C94HvNafFC%2FLk8eE3H42NM0%2FNzeIIBGGKUPELpMmNIf465PobeR6UEVJcTf1akvN38RTQ0NKnp4INwdz5BBs80AxYlBi8z7s9o%2F1IOHWtMlaOkaz74x2vziAzksQQPrUjNutjwcU0CIcOxmM8uWO62vTMBgbecyh%2B51Q6%2FsXXe2&X-Amz-Signature=d0de740084362b6e74a347e80b9fc243fe65616b6b1bbc5f37348760231a9ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMYI6AU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBglS1rlCAtIjZqOwOJmSoOVToRa822dm%2FvWfdPyrbkRAiAqDhcnqJgAY%2FDMkKVBnvIaMV7yTZHHefeZUAXjpnvTCCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW4ITG%2FioppEW%2B2%2FHKtwD2Ad1JtOCf3v3gQYJZC1Gx4EA0CnzUcZ6T7fTYUECu8pU3H3j%2FoQTGeoSWXRI8QBJQX4p5UD5Tj%2F27QIOy4Of53svQk%2BZvtSeDvuN3RZfby9srwnMkKX85rL8Qzi1P%2Fe1y3XaIk7I8Mjh6PO676wqnpMqKwKxz5yAdW9qhTE2I%2BWWaggBRnv8SSjhtP%2Fecw9tJdkCwmFlVeyvU3%2FzZbMGS%2F%2BsnpsApUjaeLkyujufcrMlzI0hDyoYwOZfx4IQOHlxewpLFXQNnkr4fFtLp57blbkHvwlxrH4VT3UcmyvhQwt0JuHvOpqw%2Fa6Mpq7g9Fl2AWYIBusIsByGbl23dwnudgUvg1BrNE4UtxpRJLavJt8QffZDQIfKFEW2AA49EkJBVkmc3GatRxcwGD4jc3tEMOAqGKFMpDPNGITPSZuyn3UNfP92uUPm4xeXxWdsa3lvtmbRTE5eftzCJv6JRA69MHGX7DUmv0NheFSftEXjXf7If0Wj51GEjVNCVbJAXDJAjJeCDajWJUpzM3U7VcJP7qLbmb3OrbfTgyiED1CdHKcAqHY5eMzVbH2B%2FmjjPk8HHq5ihWh1rMEjQWvEYXG17yVOetQ0fEg0LMtBDZdKQJig3LllKD9aFbFXAo8w9c%2FowwY6pgHrE1q1444A7q4NXyDSNJyx90wmIikk1c4vakGGwCSlPT0jiHlK9C94HvNafFC%2FLk8eE3H42NM0%2FNzeIIBGGKUPELpMmNIf465PobeR6UEVJcTf1akvN38RTQ0NKnp4INwdz5BBs80AxYlBi8z7s9o%2F1IOHWtMlaOkaz74x2vziAzksQQPrUjNutjwcU0CIcOxmM8uWO62vTMBgbecyh%2B51Q6%2FsXXe2&X-Amz-Signature=22a3056ebaf5dc96a1ddbb43cd28d08f6384f19df72aa3a515c756636e286a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMYI6AU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBglS1rlCAtIjZqOwOJmSoOVToRa822dm%2FvWfdPyrbkRAiAqDhcnqJgAY%2FDMkKVBnvIaMV7yTZHHefeZUAXjpnvTCCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW4ITG%2FioppEW%2B2%2FHKtwD2Ad1JtOCf3v3gQYJZC1Gx4EA0CnzUcZ6T7fTYUECu8pU3H3j%2FoQTGeoSWXRI8QBJQX4p5UD5Tj%2F27QIOy4Of53svQk%2BZvtSeDvuN3RZfby9srwnMkKX85rL8Qzi1P%2Fe1y3XaIk7I8Mjh6PO676wqnpMqKwKxz5yAdW9qhTE2I%2BWWaggBRnv8SSjhtP%2Fecw9tJdkCwmFlVeyvU3%2FzZbMGS%2F%2BsnpsApUjaeLkyujufcrMlzI0hDyoYwOZfx4IQOHlxewpLFXQNnkr4fFtLp57blbkHvwlxrH4VT3UcmyvhQwt0JuHvOpqw%2Fa6Mpq7g9Fl2AWYIBusIsByGbl23dwnudgUvg1BrNE4UtxpRJLavJt8QffZDQIfKFEW2AA49EkJBVkmc3GatRxcwGD4jc3tEMOAqGKFMpDPNGITPSZuyn3UNfP92uUPm4xeXxWdsa3lvtmbRTE5eftzCJv6JRA69MHGX7DUmv0NheFSftEXjXf7If0Wj51GEjVNCVbJAXDJAjJeCDajWJUpzM3U7VcJP7qLbmb3OrbfTgyiED1CdHKcAqHY5eMzVbH2B%2FmjjPk8HHq5ihWh1rMEjQWvEYXG17yVOetQ0fEg0LMtBDZdKQJig3LllKD9aFbFXAo8w9c%2FowwY6pgHrE1q1444A7q4NXyDSNJyx90wmIikk1c4vakGGwCSlPT0jiHlK9C94HvNafFC%2FLk8eE3H42NM0%2FNzeIIBGGKUPELpMmNIf465PobeR6UEVJcTf1akvN38RTQ0NKnp4INwdz5BBs80AxYlBi8z7s9o%2F1IOHWtMlaOkaz74x2vziAzksQQPrUjNutjwcU0CIcOxmM8uWO62vTMBgbecyh%2B51Q6%2FsXXe2&X-Amz-Signature=8b6659f21157a3cd629779f90ce1f3925785438a024fd42beac9a6c57ea588ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMYI6AU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBglS1rlCAtIjZqOwOJmSoOVToRa822dm%2FvWfdPyrbkRAiAqDhcnqJgAY%2FDMkKVBnvIaMV7yTZHHefeZUAXjpnvTCCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW4ITG%2FioppEW%2B2%2FHKtwD2Ad1JtOCf3v3gQYJZC1Gx4EA0CnzUcZ6T7fTYUECu8pU3H3j%2FoQTGeoSWXRI8QBJQX4p5UD5Tj%2F27QIOy4Of53svQk%2BZvtSeDvuN3RZfby9srwnMkKX85rL8Qzi1P%2Fe1y3XaIk7I8Mjh6PO676wqnpMqKwKxz5yAdW9qhTE2I%2BWWaggBRnv8SSjhtP%2Fecw9tJdkCwmFlVeyvU3%2FzZbMGS%2F%2BsnpsApUjaeLkyujufcrMlzI0hDyoYwOZfx4IQOHlxewpLFXQNnkr4fFtLp57blbkHvwlxrH4VT3UcmyvhQwt0JuHvOpqw%2Fa6Mpq7g9Fl2AWYIBusIsByGbl23dwnudgUvg1BrNE4UtxpRJLavJt8QffZDQIfKFEW2AA49EkJBVkmc3GatRxcwGD4jc3tEMOAqGKFMpDPNGITPSZuyn3UNfP92uUPm4xeXxWdsa3lvtmbRTE5eftzCJv6JRA69MHGX7DUmv0NheFSftEXjXf7If0Wj51GEjVNCVbJAXDJAjJeCDajWJUpzM3U7VcJP7qLbmb3OrbfTgyiED1CdHKcAqHY5eMzVbH2B%2FmjjPk8HHq5ihWh1rMEjQWvEYXG17yVOetQ0fEg0LMtBDZdKQJig3LllKD9aFbFXAo8w9c%2FowwY6pgHrE1q1444A7q4NXyDSNJyx90wmIikk1c4vakGGwCSlPT0jiHlK9C94HvNafFC%2FLk8eE3H42NM0%2FNzeIIBGGKUPELpMmNIf465PobeR6UEVJcTf1akvN38RTQ0NKnp4INwdz5BBs80AxYlBi8z7s9o%2F1IOHWtMlaOkaz74x2vziAzksQQPrUjNutjwcU0CIcOxmM8uWO62vTMBgbecyh%2B51Q6%2FsXXe2&X-Amz-Signature=4e27c836a35e8a3c06f56fb5166fecb4bd262169ee81f9c9abbf52d24807cf25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMYI6AU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBglS1rlCAtIjZqOwOJmSoOVToRa822dm%2FvWfdPyrbkRAiAqDhcnqJgAY%2FDMkKVBnvIaMV7yTZHHefeZUAXjpnvTCCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW4ITG%2FioppEW%2B2%2FHKtwD2Ad1JtOCf3v3gQYJZC1Gx4EA0CnzUcZ6T7fTYUECu8pU3H3j%2FoQTGeoSWXRI8QBJQX4p5UD5Tj%2F27QIOy4Of53svQk%2BZvtSeDvuN3RZfby9srwnMkKX85rL8Qzi1P%2Fe1y3XaIk7I8Mjh6PO676wqnpMqKwKxz5yAdW9qhTE2I%2BWWaggBRnv8SSjhtP%2Fecw9tJdkCwmFlVeyvU3%2FzZbMGS%2F%2BsnpsApUjaeLkyujufcrMlzI0hDyoYwOZfx4IQOHlxewpLFXQNnkr4fFtLp57blbkHvwlxrH4VT3UcmyvhQwt0JuHvOpqw%2Fa6Mpq7g9Fl2AWYIBusIsByGbl23dwnudgUvg1BrNE4UtxpRJLavJt8QffZDQIfKFEW2AA49EkJBVkmc3GatRxcwGD4jc3tEMOAqGKFMpDPNGITPSZuyn3UNfP92uUPm4xeXxWdsa3lvtmbRTE5eftzCJv6JRA69MHGX7DUmv0NheFSftEXjXf7If0Wj51GEjVNCVbJAXDJAjJeCDajWJUpzM3U7VcJP7qLbmb3OrbfTgyiED1CdHKcAqHY5eMzVbH2B%2FmjjPk8HHq5ihWh1rMEjQWvEYXG17yVOetQ0fEg0LMtBDZdKQJig3LllKD9aFbFXAo8w9c%2FowwY6pgHrE1q1444A7q4NXyDSNJyx90wmIikk1c4vakGGwCSlPT0jiHlK9C94HvNafFC%2FLk8eE3H42NM0%2FNzeIIBGGKUPELpMmNIf465PobeR6UEVJcTf1akvN38RTQ0NKnp4INwdz5BBs80AxYlBi8z7s9o%2F1IOHWtMlaOkaz74x2vziAzksQQPrUjNutjwcU0CIcOxmM8uWO62vTMBgbecyh%2B51Q6%2FsXXe2&X-Amz-Signature=6a8b1a891b5dbf8f1ec039d9fc60ae7947ee73e7b076aee0e5ff13d256a1bf6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
