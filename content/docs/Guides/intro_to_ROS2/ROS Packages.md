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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVU6AMHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYgCapioLjVk4g11KLroebv5sSPU2GbDpiOFVjqqJcRAiEAuXgKbyyXg5kMIj6ryCaXms%2FkIxl6IDh9CAPuFECrIb0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNL8hw9El2RVBO2b5CrcA7isKqEToZ3wwsEfvzm0UzrDGoDWKoPZ8T%2BIfmyo19ds%2BL1Dd5lkALXDjKTP3Tpn%2FI5T3QoP9CQ8IoIL6k5WC6bKeul%2BVIq6VKW3xvVDg32CD2aPhwqtavegkhqYOMZY2nm2CQ7PZBbysOuuSaLhflSmsmWvBTPgh1y2yXMxItUWdxglGJWE9QpwH8s3xrJu7ryLm9gClh5o2km9CzV4yXYp0iD5sYVAwhDastgz5GBzE9oioe1tLADrP1HZbJ%2FVffZYvaUFWSYCySdpWhONBh79WkYn06DclwfQL8i33mKfJnG0Sa8Dzc%2F8NZTTlNxjqG%2BXakJwshFJszaHAwt3woDtK7jnIzLCF32oBmmw7O39nOtb3M6zntmOQkcR1wG%2Begu5AddxyGAWUGLkrlqlsVwcC%2BsCt6xP%2FCIuQ3dRNNWVTtKKgv2OhjSFMltfwBWGCTYrw9XQLGAbwXvT%2FktzeNaZRgcemi34dysZaLPuyniHkkLuYtGDdo73k1%2F0YFdLR1WNIRVRANnzLe22yaH%2BF0crGK%2Bv6YCQEt2Xil9N49DHga%2F622o2bwlLEJ9iPT%2FuyLaD7YGOrAX2I1e6E0DJbrFLvmxnyO0GbnkZ7XD66STZeY%2Fzf%2Fgqn3wBQWZMMIPwwr8GOqUBdZsYpOt50A8A1BxCpc9P%2Fc0rlhQXJzOHSud9npCJvv1M4S%2BAly%2Fpz5Nw9S5Y25m6cfPaf3XzSXW2Qh72EddsS87JPDoO24UiJ%2B1k6Gru%2B45RJaw1W5a%2FL30Qvu3L6U%2F9kuV0HTrNt1YG6g6K8VVNzNOsxjZGGm7mdvkW6Y%2Bh06IOoYMq%2BxoAd0Nkn5EFnePM8MQMuTlWMHEF6QhEvbI4a6v3RDeD&X-Amz-Signature=9d5cfcf1f6370eb8c07821d6e70727327137514ce00001a2540f66ac2d5598df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVU6AMHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYgCapioLjVk4g11KLroebv5sSPU2GbDpiOFVjqqJcRAiEAuXgKbyyXg5kMIj6ryCaXms%2FkIxl6IDh9CAPuFECrIb0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNL8hw9El2RVBO2b5CrcA7isKqEToZ3wwsEfvzm0UzrDGoDWKoPZ8T%2BIfmyo19ds%2BL1Dd5lkALXDjKTP3Tpn%2FI5T3QoP9CQ8IoIL6k5WC6bKeul%2BVIq6VKW3xvVDg32CD2aPhwqtavegkhqYOMZY2nm2CQ7PZBbysOuuSaLhflSmsmWvBTPgh1y2yXMxItUWdxglGJWE9QpwH8s3xrJu7ryLm9gClh5o2km9CzV4yXYp0iD5sYVAwhDastgz5GBzE9oioe1tLADrP1HZbJ%2FVffZYvaUFWSYCySdpWhONBh79WkYn06DclwfQL8i33mKfJnG0Sa8Dzc%2F8NZTTlNxjqG%2BXakJwshFJszaHAwt3woDtK7jnIzLCF32oBmmw7O39nOtb3M6zntmOQkcR1wG%2Begu5AddxyGAWUGLkrlqlsVwcC%2BsCt6xP%2FCIuQ3dRNNWVTtKKgv2OhjSFMltfwBWGCTYrw9XQLGAbwXvT%2FktzeNaZRgcemi34dysZaLPuyniHkkLuYtGDdo73k1%2F0YFdLR1WNIRVRANnzLe22yaH%2BF0crGK%2Bv6YCQEt2Xil9N49DHga%2F622o2bwlLEJ9iPT%2FuyLaD7YGOrAX2I1e6E0DJbrFLvmxnyO0GbnkZ7XD66STZeY%2Fzf%2Fgqn3wBQWZMMIPwwr8GOqUBdZsYpOt50A8A1BxCpc9P%2Fc0rlhQXJzOHSud9npCJvv1M4S%2BAly%2Fpz5Nw9S5Y25m6cfPaf3XzSXW2Qh72EddsS87JPDoO24UiJ%2B1k6Gru%2B45RJaw1W5a%2FL30Qvu3L6U%2F9kuV0HTrNt1YG6g6K8VVNzNOsxjZGGm7mdvkW6Y%2Bh06IOoYMq%2BxoAd0Nkn5EFnePM8MQMuTlWMHEF6QhEvbI4a6v3RDeD&X-Amz-Signature=6bee62e3506651f93ae38257e25138b9a0af5fbc28d8809bd1054ca9f1121c72&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVU6AMHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYgCapioLjVk4g11KLroebv5sSPU2GbDpiOFVjqqJcRAiEAuXgKbyyXg5kMIj6ryCaXms%2FkIxl6IDh9CAPuFECrIb0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNL8hw9El2RVBO2b5CrcA7isKqEToZ3wwsEfvzm0UzrDGoDWKoPZ8T%2BIfmyo19ds%2BL1Dd5lkALXDjKTP3Tpn%2FI5T3QoP9CQ8IoIL6k5WC6bKeul%2BVIq6VKW3xvVDg32CD2aPhwqtavegkhqYOMZY2nm2CQ7PZBbysOuuSaLhflSmsmWvBTPgh1y2yXMxItUWdxglGJWE9QpwH8s3xrJu7ryLm9gClh5o2km9CzV4yXYp0iD5sYVAwhDastgz5GBzE9oioe1tLADrP1HZbJ%2FVffZYvaUFWSYCySdpWhONBh79WkYn06DclwfQL8i33mKfJnG0Sa8Dzc%2F8NZTTlNxjqG%2BXakJwshFJszaHAwt3woDtK7jnIzLCF32oBmmw7O39nOtb3M6zntmOQkcR1wG%2Begu5AddxyGAWUGLkrlqlsVwcC%2BsCt6xP%2FCIuQ3dRNNWVTtKKgv2OhjSFMltfwBWGCTYrw9XQLGAbwXvT%2FktzeNaZRgcemi34dysZaLPuyniHkkLuYtGDdo73k1%2F0YFdLR1WNIRVRANnzLe22yaH%2BF0crGK%2Bv6YCQEt2Xil9N49DHga%2F622o2bwlLEJ9iPT%2FuyLaD7YGOrAX2I1e6E0DJbrFLvmxnyO0GbnkZ7XD66STZeY%2Fzf%2Fgqn3wBQWZMMIPwwr8GOqUBdZsYpOt50A8A1BxCpc9P%2Fc0rlhQXJzOHSud9npCJvv1M4S%2BAly%2Fpz5Nw9S5Y25m6cfPaf3XzSXW2Qh72EddsS87JPDoO24UiJ%2B1k6Gru%2B45RJaw1W5a%2FL30Qvu3L6U%2F9kuV0HTrNt1YG6g6K8VVNzNOsxjZGGm7mdvkW6Y%2Bh06IOoYMq%2BxoAd0Nkn5EFnePM8MQMuTlWMHEF6QhEvbI4a6v3RDeD&X-Amz-Signature=1da04c5aa3f4359c559d3ea36827ef6f32fb8ee3493341462fb64d9874677122&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVU6AMHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYgCapioLjVk4g11KLroebv5sSPU2GbDpiOFVjqqJcRAiEAuXgKbyyXg5kMIj6ryCaXms%2FkIxl6IDh9CAPuFECrIb0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNL8hw9El2RVBO2b5CrcA7isKqEToZ3wwsEfvzm0UzrDGoDWKoPZ8T%2BIfmyo19ds%2BL1Dd5lkALXDjKTP3Tpn%2FI5T3QoP9CQ8IoIL6k5WC6bKeul%2BVIq6VKW3xvVDg32CD2aPhwqtavegkhqYOMZY2nm2CQ7PZBbysOuuSaLhflSmsmWvBTPgh1y2yXMxItUWdxglGJWE9QpwH8s3xrJu7ryLm9gClh5o2km9CzV4yXYp0iD5sYVAwhDastgz5GBzE9oioe1tLADrP1HZbJ%2FVffZYvaUFWSYCySdpWhONBh79WkYn06DclwfQL8i33mKfJnG0Sa8Dzc%2F8NZTTlNxjqG%2BXakJwshFJszaHAwt3woDtK7jnIzLCF32oBmmw7O39nOtb3M6zntmOQkcR1wG%2Begu5AddxyGAWUGLkrlqlsVwcC%2BsCt6xP%2FCIuQ3dRNNWVTtKKgv2OhjSFMltfwBWGCTYrw9XQLGAbwXvT%2FktzeNaZRgcemi34dysZaLPuyniHkkLuYtGDdo73k1%2F0YFdLR1WNIRVRANnzLe22yaH%2BF0crGK%2Bv6YCQEt2Xil9N49DHga%2F622o2bwlLEJ9iPT%2FuyLaD7YGOrAX2I1e6E0DJbrFLvmxnyO0GbnkZ7XD66STZeY%2Fzf%2Fgqn3wBQWZMMIPwwr8GOqUBdZsYpOt50A8A1BxCpc9P%2Fc0rlhQXJzOHSud9npCJvv1M4S%2BAly%2Fpz5Nw9S5Y25m6cfPaf3XzSXW2Qh72EddsS87JPDoO24UiJ%2B1k6Gru%2B45RJaw1W5a%2FL30Qvu3L6U%2F9kuV0HTrNt1YG6g6K8VVNzNOsxjZGGm7mdvkW6Y%2Bh06IOoYMq%2BxoAd0Nkn5EFnePM8MQMuTlWMHEF6QhEvbI4a6v3RDeD&X-Amz-Signature=4556b81ae94721dbfd95a6dc7fb232d06978736c6b03b32fc3ad970cc1dd0c83&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVU6AMHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYgCapioLjVk4g11KLroebv5sSPU2GbDpiOFVjqqJcRAiEAuXgKbyyXg5kMIj6ryCaXms%2FkIxl6IDh9CAPuFECrIb0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNL8hw9El2RVBO2b5CrcA7isKqEToZ3wwsEfvzm0UzrDGoDWKoPZ8T%2BIfmyo19ds%2BL1Dd5lkALXDjKTP3Tpn%2FI5T3QoP9CQ8IoIL6k5WC6bKeul%2BVIq6VKW3xvVDg32CD2aPhwqtavegkhqYOMZY2nm2CQ7PZBbysOuuSaLhflSmsmWvBTPgh1y2yXMxItUWdxglGJWE9QpwH8s3xrJu7ryLm9gClh5o2km9CzV4yXYp0iD5sYVAwhDastgz5GBzE9oioe1tLADrP1HZbJ%2FVffZYvaUFWSYCySdpWhONBh79WkYn06DclwfQL8i33mKfJnG0Sa8Dzc%2F8NZTTlNxjqG%2BXakJwshFJszaHAwt3woDtK7jnIzLCF32oBmmw7O39nOtb3M6zntmOQkcR1wG%2Begu5AddxyGAWUGLkrlqlsVwcC%2BsCt6xP%2FCIuQ3dRNNWVTtKKgv2OhjSFMltfwBWGCTYrw9XQLGAbwXvT%2FktzeNaZRgcemi34dysZaLPuyniHkkLuYtGDdo73k1%2F0YFdLR1WNIRVRANnzLe22yaH%2BF0crGK%2Bv6YCQEt2Xil9N49DHga%2F622o2bwlLEJ9iPT%2FuyLaD7YGOrAX2I1e6E0DJbrFLvmxnyO0GbnkZ7XD66STZeY%2Fzf%2Fgqn3wBQWZMMIPwwr8GOqUBdZsYpOt50A8A1BxCpc9P%2Fc0rlhQXJzOHSud9npCJvv1M4S%2BAly%2Fpz5Nw9S5Y25m6cfPaf3XzSXW2Qh72EddsS87JPDoO24UiJ%2B1k6Gru%2B45RJaw1W5a%2FL30Qvu3L6U%2F9kuV0HTrNt1YG6g6K8VVNzNOsxjZGGm7mdvkW6Y%2Bh06IOoYMq%2BxoAd0Nkn5EFnePM8MQMuTlWMHEF6QhEvbI4a6v3RDeD&X-Amz-Signature=192fbf281db6375b5a79b6db1bc55cbec64c750561660c2f7ffa8d51ab50e13b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVU6AMHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYgCapioLjVk4g11KLroebv5sSPU2GbDpiOFVjqqJcRAiEAuXgKbyyXg5kMIj6ryCaXms%2FkIxl6IDh9CAPuFECrIb0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNL8hw9El2RVBO2b5CrcA7isKqEToZ3wwsEfvzm0UzrDGoDWKoPZ8T%2BIfmyo19ds%2BL1Dd5lkALXDjKTP3Tpn%2FI5T3QoP9CQ8IoIL6k5WC6bKeul%2BVIq6VKW3xvVDg32CD2aPhwqtavegkhqYOMZY2nm2CQ7PZBbysOuuSaLhflSmsmWvBTPgh1y2yXMxItUWdxglGJWE9QpwH8s3xrJu7ryLm9gClh5o2km9CzV4yXYp0iD5sYVAwhDastgz5GBzE9oioe1tLADrP1HZbJ%2FVffZYvaUFWSYCySdpWhONBh79WkYn06DclwfQL8i33mKfJnG0Sa8Dzc%2F8NZTTlNxjqG%2BXakJwshFJszaHAwt3woDtK7jnIzLCF32oBmmw7O39nOtb3M6zntmOQkcR1wG%2Begu5AddxyGAWUGLkrlqlsVwcC%2BsCt6xP%2FCIuQ3dRNNWVTtKKgv2OhjSFMltfwBWGCTYrw9XQLGAbwXvT%2FktzeNaZRgcemi34dysZaLPuyniHkkLuYtGDdo73k1%2F0YFdLR1WNIRVRANnzLe22yaH%2BF0crGK%2Bv6YCQEt2Xil9N49DHga%2F622o2bwlLEJ9iPT%2FuyLaD7YGOrAX2I1e6E0DJbrFLvmxnyO0GbnkZ7XD66STZeY%2Fzf%2Fgqn3wBQWZMMIPwwr8GOqUBdZsYpOt50A8A1BxCpc9P%2Fc0rlhQXJzOHSud9npCJvv1M4S%2BAly%2Fpz5Nw9S5Y25m6cfPaf3XzSXW2Qh72EddsS87JPDoO24UiJ%2B1k6Gru%2B45RJaw1W5a%2FL30Qvu3L6U%2F9kuV0HTrNt1YG6g6K8VVNzNOsxjZGGm7mdvkW6Y%2Bh06IOoYMq%2BxoAd0Nkn5EFnePM8MQMuTlWMHEF6QhEvbI4a6v3RDeD&X-Amz-Signature=d8bd7f86a4e77a280c0b86ac9ce12ff2f5ddebbc23c17047cfe8f06fc36c4242&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVU6AMHB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYgCapioLjVk4g11KLroebv5sSPU2GbDpiOFVjqqJcRAiEAuXgKbyyXg5kMIj6ryCaXms%2FkIxl6IDh9CAPuFECrIb0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNL8hw9El2RVBO2b5CrcA7isKqEToZ3wwsEfvzm0UzrDGoDWKoPZ8T%2BIfmyo19ds%2BL1Dd5lkALXDjKTP3Tpn%2FI5T3QoP9CQ8IoIL6k5WC6bKeul%2BVIq6VKW3xvVDg32CD2aPhwqtavegkhqYOMZY2nm2CQ7PZBbysOuuSaLhflSmsmWvBTPgh1y2yXMxItUWdxglGJWE9QpwH8s3xrJu7ryLm9gClh5o2km9CzV4yXYp0iD5sYVAwhDastgz5GBzE9oioe1tLADrP1HZbJ%2FVffZYvaUFWSYCySdpWhONBh79WkYn06DclwfQL8i33mKfJnG0Sa8Dzc%2F8NZTTlNxjqG%2BXakJwshFJszaHAwt3woDtK7jnIzLCF32oBmmw7O39nOtb3M6zntmOQkcR1wG%2Begu5AddxyGAWUGLkrlqlsVwcC%2BsCt6xP%2FCIuQ3dRNNWVTtKKgv2OhjSFMltfwBWGCTYrw9XQLGAbwXvT%2FktzeNaZRgcemi34dysZaLPuyniHkkLuYtGDdo73k1%2F0YFdLR1WNIRVRANnzLe22yaH%2BF0crGK%2Bv6YCQEt2Xil9N49DHga%2F622o2bwlLEJ9iPT%2FuyLaD7YGOrAX2I1e6E0DJbrFLvmxnyO0GbnkZ7XD66STZeY%2Fzf%2Fgqn3wBQWZMMIPwwr8GOqUBdZsYpOt50A8A1BxCpc9P%2Fc0rlhQXJzOHSud9npCJvv1M4S%2BAly%2Fpz5Nw9S5Y25m6cfPaf3XzSXW2Qh72EddsS87JPDoO24UiJ%2B1k6Gru%2B45RJaw1W5a%2FL30Qvu3L6U%2F9kuV0HTrNt1YG6g6K8VVNzNOsxjZGGm7mdvkW6Y%2Bh06IOoYMq%2BxoAd0Nkn5EFnePM8MQMuTlWMHEF6QhEvbI4a6v3RDeD&X-Amz-Signature=95d72bffdd01ea52cc83c76bb4bb4aabbdbb9e7cb2776c3b8f75b8dfc0ce2cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
