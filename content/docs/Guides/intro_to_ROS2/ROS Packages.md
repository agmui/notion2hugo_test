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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PICKVJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC7k4CVzUgTojWNLgsvK7sk26zBeRqcR9bOF0efBe3IRAIgbkJWgmrufOlMIbAIN%2F4vMY3BgDYwV5Z343WmqzUdzLEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAXv3nXDrGZhDpcoLyrcAxnV0bTY%2FNZaDONG6EbfdagCu5tU7rnfNS7clIB5fHP3ktqWXFDTFs2HvV0ojF%2BB%2FjvzCFuoyUD6HRSOkaEVCubJswgozMmg%2BkvPXULR9NRxzB%2F8xVmfHfdI1G%2F4cz6e4QL3a6r5USA9r6cWpKrQ%2FHZG%2BG9NoI0RWEG2XA89TzDkMIWA7ykC17PUir695OLGMl4SAiPEhqRAQUFRNaybFRjEZoEdhKpw5yVccvtrD5wvjB%2BcXHFAV4QjtKrWsb5dL8SfnAN63ycLXw2hFwBcBemMwq2QwaSQrES4MAxLH9tc0PGBgMS%2FXEidnTbO%2BzVUHhrTNRehN6wQ48g%2BV4ztXWtKl%2BKGPcH3G1ghYabwzeF6lCr3B%2FyunkEyDQrZNUKcZRoQYYyzn2HQ7X9xS%2B4whJIH1fBYemPcspspY08OUo9gxEcjsJdGMnWqX3F6RKg%2B%2FtdubY0uUiG9Pd6dKeJXwqYWytGKemCj7DznRYYjapz4YWQ%2FMxfKRe4aVnAXdtu77gg9XbDCdGEDNBOF%2FC2bdZO2Mswb6eEczsSl8YkwvkU%2BCY7AOB40zcmBYfvZ2lvNfKOWAU1vZ5NhUX2ZxU9oKAHPLQps0sIlMxiddV0Q2ihMJ7Bs%2BALoLUAb74H9MKLJsMIGOqUB2scPghO9%2BwbbIGXX%2Ffstvq04G37wMKg4fNVY5hj5YgnQZPIS6%2ButSlqePItY6yXS9ePFW85Uv75ZburkAgEJMn2DN5qOpTxS92U4HartF%2FhaJR8QuPPsqmmhaPDLfA9IAVVhGYJZC5Q5TRuPxuE8bsr%2BNg5zxu39u5BNRahtskqjYb1XnDJqm%2FrlbWzeglhuZTQQm6L9dwRqpr%2BePlr4ntn4QGCj&X-Amz-Signature=4badf47a10921d551fc59508d571c6f34ba244a6fe602b00931c593098792d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PICKVJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC7k4CVzUgTojWNLgsvK7sk26zBeRqcR9bOF0efBe3IRAIgbkJWgmrufOlMIbAIN%2F4vMY3BgDYwV5Z343WmqzUdzLEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAXv3nXDrGZhDpcoLyrcAxnV0bTY%2FNZaDONG6EbfdagCu5tU7rnfNS7clIB5fHP3ktqWXFDTFs2HvV0ojF%2BB%2FjvzCFuoyUD6HRSOkaEVCubJswgozMmg%2BkvPXULR9NRxzB%2F8xVmfHfdI1G%2F4cz6e4QL3a6r5USA9r6cWpKrQ%2FHZG%2BG9NoI0RWEG2XA89TzDkMIWA7ykC17PUir695OLGMl4SAiPEhqRAQUFRNaybFRjEZoEdhKpw5yVccvtrD5wvjB%2BcXHFAV4QjtKrWsb5dL8SfnAN63ycLXw2hFwBcBemMwq2QwaSQrES4MAxLH9tc0PGBgMS%2FXEidnTbO%2BzVUHhrTNRehN6wQ48g%2BV4ztXWtKl%2BKGPcH3G1ghYabwzeF6lCr3B%2FyunkEyDQrZNUKcZRoQYYyzn2HQ7X9xS%2B4whJIH1fBYemPcspspY08OUo9gxEcjsJdGMnWqX3F6RKg%2B%2FtdubY0uUiG9Pd6dKeJXwqYWytGKemCj7DznRYYjapz4YWQ%2FMxfKRe4aVnAXdtu77gg9XbDCdGEDNBOF%2FC2bdZO2Mswb6eEczsSl8YkwvkU%2BCY7AOB40zcmBYfvZ2lvNfKOWAU1vZ5NhUX2ZxU9oKAHPLQps0sIlMxiddV0Q2ihMJ7Bs%2BALoLUAb74H9MKLJsMIGOqUB2scPghO9%2BwbbIGXX%2Ffstvq04G37wMKg4fNVY5hj5YgnQZPIS6%2ButSlqePItY6yXS9ePFW85Uv75ZburkAgEJMn2DN5qOpTxS92U4HartF%2FhaJR8QuPPsqmmhaPDLfA9IAVVhGYJZC5Q5TRuPxuE8bsr%2BNg5zxu39u5BNRahtskqjYb1XnDJqm%2FrlbWzeglhuZTQQm6L9dwRqpr%2BePlr4ntn4QGCj&X-Amz-Signature=aefcdcacaaf0be9d2301499d7ce857453c5f139fa42b604d3d54627952dea37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PICKVJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC7k4CVzUgTojWNLgsvK7sk26zBeRqcR9bOF0efBe3IRAIgbkJWgmrufOlMIbAIN%2F4vMY3BgDYwV5Z343WmqzUdzLEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAXv3nXDrGZhDpcoLyrcAxnV0bTY%2FNZaDONG6EbfdagCu5tU7rnfNS7clIB5fHP3ktqWXFDTFs2HvV0ojF%2BB%2FjvzCFuoyUD6HRSOkaEVCubJswgozMmg%2BkvPXULR9NRxzB%2F8xVmfHfdI1G%2F4cz6e4QL3a6r5USA9r6cWpKrQ%2FHZG%2BG9NoI0RWEG2XA89TzDkMIWA7ykC17PUir695OLGMl4SAiPEhqRAQUFRNaybFRjEZoEdhKpw5yVccvtrD5wvjB%2BcXHFAV4QjtKrWsb5dL8SfnAN63ycLXw2hFwBcBemMwq2QwaSQrES4MAxLH9tc0PGBgMS%2FXEidnTbO%2BzVUHhrTNRehN6wQ48g%2BV4ztXWtKl%2BKGPcH3G1ghYabwzeF6lCr3B%2FyunkEyDQrZNUKcZRoQYYyzn2HQ7X9xS%2B4whJIH1fBYemPcspspY08OUo9gxEcjsJdGMnWqX3F6RKg%2B%2FtdubY0uUiG9Pd6dKeJXwqYWytGKemCj7DznRYYjapz4YWQ%2FMxfKRe4aVnAXdtu77gg9XbDCdGEDNBOF%2FC2bdZO2Mswb6eEczsSl8YkwvkU%2BCY7AOB40zcmBYfvZ2lvNfKOWAU1vZ5NhUX2ZxU9oKAHPLQps0sIlMxiddV0Q2ihMJ7Bs%2BALoLUAb74H9MKLJsMIGOqUB2scPghO9%2BwbbIGXX%2Ffstvq04G37wMKg4fNVY5hj5YgnQZPIS6%2ButSlqePItY6yXS9ePFW85Uv75ZburkAgEJMn2DN5qOpTxS92U4HartF%2FhaJR8QuPPsqmmhaPDLfA9IAVVhGYJZC5Q5TRuPxuE8bsr%2BNg5zxu39u5BNRahtskqjYb1XnDJqm%2FrlbWzeglhuZTQQm6L9dwRqpr%2BePlr4ntn4QGCj&X-Amz-Signature=5959f1008b5d79f56289b42a3f2800a1f2a6e5987f85457b69d0c7535b578697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PICKVJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC7k4CVzUgTojWNLgsvK7sk26zBeRqcR9bOF0efBe3IRAIgbkJWgmrufOlMIbAIN%2F4vMY3BgDYwV5Z343WmqzUdzLEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAXv3nXDrGZhDpcoLyrcAxnV0bTY%2FNZaDONG6EbfdagCu5tU7rnfNS7clIB5fHP3ktqWXFDTFs2HvV0ojF%2BB%2FjvzCFuoyUD6HRSOkaEVCubJswgozMmg%2BkvPXULR9NRxzB%2F8xVmfHfdI1G%2F4cz6e4QL3a6r5USA9r6cWpKrQ%2FHZG%2BG9NoI0RWEG2XA89TzDkMIWA7ykC17PUir695OLGMl4SAiPEhqRAQUFRNaybFRjEZoEdhKpw5yVccvtrD5wvjB%2BcXHFAV4QjtKrWsb5dL8SfnAN63ycLXw2hFwBcBemMwq2QwaSQrES4MAxLH9tc0PGBgMS%2FXEidnTbO%2BzVUHhrTNRehN6wQ48g%2BV4ztXWtKl%2BKGPcH3G1ghYabwzeF6lCr3B%2FyunkEyDQrZNUKcZRoQYYyzn2HQ7X9xS%2B4whJIH1fBYemPcspspY08OUo9gxEcjsJdGMnWqX3F6RKg%2B%2FtdubY0uUiG9Pd6dKeJXwqYWytGKemCj7DznRYYjapz4YWQ%2FMxfKRe4aVnAXdtu77gg9XbDCdGEDNBOF%2FC2bdZO2Mswb6eEczsSl8YkwvkU%2BCY7AOB40zcmBYfvZ2lvNfKOWAU1vZ5NhUX2ZxU9oKAHPLQps0sIlMxiddV0Q2ihMJ7Bs%2BALoLUAb74H9MKLJsMIGOqUB2scPghO9%2BwbbIGXX%2Ffstvq04G37wMKg4fNVY5hj5YgnQZPIS6%2ButSlqePItY6yXS9ePFW85Uv75ZburkAgEJMn2DN5qOpTxS92U4HartF%2FhaJR8QuPPsqmmhaPDLfA9IAVVhGYJZC5Q5TRuPxuE8bsr%2BNg5zxu39u5BNRahtskqjYb1XnDJqm%2FrlbWzeglhuZTQQm6L9dwRqpr%2BePlr4ntn4QGCj&X-Amz-Signature=7d82bfe05567c890225ab51cb3a9126a312b941adc203d38dcc5b3b200b94eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PICKVJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC7k4CVzUgTojWNLgsvK7sk26zBeRqcR9bOF0efBe3IRAIgbkJWgmrufOlMIbAIN%2F4vMY3BgDYwV5Z343WmqzUdzLEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAXv3nXDrGZhDpcoLyrcAxnV0bTY%2FNZaDONG6EbfdagCu5tU7rnfNS7clIB5fHP3ktqWXFDTFs2HvV0ojF%2BB%2FjvzCFuoyUD6HRSOkaEVCubJswgozMmg%2BkvPXULR9NRxzB%2F8xVmfHfdI1G%2F4cz6e4QL3a6r5USA9r6cWpKrQ%2FHZG%2BG9NoI0RWEG2XA89TzDkMIWA7ykC17PUir695OLGMl4SAiPEhqRAQUFRNaybFRjEZoEdhKpw5yVccvtrD5wvjB%2BcXHFAV4QjtKrWsb5dL8SfnAN63ycLXw2hFwBcBemMwq2QwaSQrES4MAxLH9tc0PGBgMS%2FXEidnTbO%2BzVUHhrTNRehN6wQ48g%2BV4ztXWtKl%2BKGPcH3G1ghYabwzeF6lCr3B%2FyunkEyDQrZNUKcZRoQYYyzn2HQ7X9xS%2B4whJIH1fBYemPcspspY08OUo9gxEcjsJdGMnWqX3F6RKg%2B%2FtdubY0uUiG9Pd6dKeJXwqYWytGKemCj7DznRYYjapz4YWQ%2FMxfKRe4aVnAXdtu77gg9XbDCdGEDNBOF%2FC2bdZO2Mswb6eEczsSl8YkwvkU%2BCY7AOB40zcmBYfvZ2lvNfKOWAU1vZ5NhUX2ZxU9oKAHPLQps0sIlMxiddV0Q2ihMJ7Bs%2BALoLUAb74H9MKLJsMIGOqUB2scPghO9%2BwbbIGXX%2Ffstvq04G37wMKg4fNVY5hj5YgnQZPIS6%2ButSlqePItY6yXS9ePFW85Uv75ZburkAgEJMn2DN5qOpTxS92U4HartF%2FhaJR8QuPPsqmmhaPDLfA9IAVVhGYJZC5Q5TRuPxuE8bsr%2BNg5zxu39u5BNRahtskqjYb1XnDJqm%2FrlbWzeglhuZTQQm6L9dwRqpr%2BePlr4ntn4QGCj&X-Amz-Signature=7e02d401c40da78731a25a7852a4b2b740bdd7ac939a3d9ae73eff76efe3f888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PICKVJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC7k4CVzUgTojWNLgsvK7sk26zBeRqcR9bOF0efBe3IRAIgbkJWgmrufOlMIbAIN%2F4vMY3BgDYwV5Z343WmqzUdzLEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAXv3nXDrGZhDpcoLyrcAxnV0bTY%2FNZaDONG6EbfdagCu5tU7rnfNS7clIB5fHP3ktqWXFDTFs2HvV0ojF%2BB%2FjvzCFuoyUD6HRSOkaEVCubJswgozMmg%2BkvPXULR9NRxzB%2F8xVmfHfdI1G%2F4cz6e4QL3a6r5USA9r6cWpKrQ%2FHZG%2BG9NoI0RWEG2XA89TzDkMIWA7ykC17PUir695OLGMl4SAiPEhqRAQUFRNaybFRjEZoEdhKpw5yVccvtrD5wvjB%2BcXHFAV4QjtKrWsb5dL8SfnAN63ycLXw2hFwBcBemMwq2QwaSQrES4MAxLH9tc0PGBgMS%2FXEidnTbO%2BzVUHhrTNRehN6wQ48g%2BV4ztXWtKl%2BKGPcH3G1ghYabwzeF6lCr3B%2FyunkEyDQrZNUKcZRoQYYyzn2HQ7X9xS%2B4whJIH1fBYemPcspspY08OUo9gxEcjsJdGMnWqX3F6RKg%2B%2FtdubY0uUiG9Pd6dKeJXwqYWytGKemCj7DznRYYjapz4YWQ%2FMxfKRe4aVnAXdtu77gg9XbDCdGEDNBOF%2FC2bdZO2Mswb6eEczsSl8YkwvkU%2BCY7AOB40zcmBYfvZ2lvNfKOWAU1vZ5NhUX2ZxU9oKAHPLQps0sIlMxiddV0Q2ihMJ7Bs%2BALoLUAb74H9MKLJsMIGOqUB2scPghO9%2BwbbIGXX%2Ffstvq04G37wMKg4fNVY5hj5YgnQZPIS6%2ButSlqePItY6yXS9ePFW85Uv75ZburkAgEJMn2DN5qOpTxS92U4HartF%2FhaJR8QuPPsqmmhaPDLfA9IAVVhGYJZC5Q5TRuPxuE8bsr%2BNg5zxu39u5BNRahtskqjYb1XnDJqm%2FrlbWzeglhuZTQQm6L9dwRqpr%2BePlr4ntn4QGCj&X-Amz-Signature=69536d38094bb91ea77e208667f71882b4bdbd03b58d49af2f1620b258c03800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PICKVJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC7k4CVzUgTojWNLgsvK7sk26zBeRqcR9bOF0efBe3IRAIgbkJWgmrufOlMIbAIN%2F4vMY3BgDYwV5Z343WmqzUdzLEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAXv3nXDrGZhDpcoLyrcAxnV0bTY%2FNZaDONG6EbfdagCu5tU7rnfNS7clIB5fHP3ktqWXFDTFs2HvV0ojF%2BB%2FjvzCFuoyUD6HRSOkaEVCubJswgozMmg%2BkvPXULR9NRxzB%2F8xVmfHfdI1G%2F4cz6e4QL3a6r5USA9r6cWpKrQ%2FHZG%2BG9NoI0RWEG2XA89TzDkMIWA7ykC17PUir695OLGMl4SAiPEhqRAQUFRNaybFRjEZoEdhKpw5yVccvtrD5wvjB%2BcXHFAV4QjtKrWsb5dL8SfnAN63ycLXw2hFwBcBemMwq2QwaSQrES4MAxLH9tc0PGBgMS%2FXEidnTbO%2BzVUHhrTNRehN6wQ48g%2BV4ztXWtKl%2BKGPcH3G1ghYabwzeF6lCr3B%2FyunkEyDQrZNUKcZRoQYYyzn2HQ7X9xS%2B4whJIH1fBYemPcspspY08OUo9gxEcjsJdGMnWqX3F6RKg%2B%2FtdubY0uUiG9Pd6dKeJXwqYWytGKemCj7DznRYYjapz4YWQ%2FMxfKRe4aVnAXdtu77gg9XbDCdGEDNBOF%2FC2bdZO2Mswb6eEczsSl8YkwvkU%2BCY7AOB40zcmBYfvZ2lvNfKOWAU1vZ5NhUX2ZxU9oKAHPLQps0sIlMxiddV0Q2ihMJ7Bs%2BALoLUAb74H9MKLJsMIGOqUB2scPghO9%2BwbbIGXX%2Ffstvq04G37wMKg4fNVY5hj5YgnQZPIS6%2ButSlqePItY6yXS9ePFW85Uv75ZburkAgEJMn2DN5qOpTxS92U4HartF%2FhaJR8QuPPsqmmhaPDLfA9IAVVhGYJZC5Q5TRuPxuE8bsr%2BNg5zxu39u5BNRahtskqjYb1XnDJqm%2FrlbWzeglhuZTQQm6L9dwRqpr%2BePlr4ntn4QGCj&X-Amz-Signature=6a824adb742d0729dae046f654dda0696bc4fdd46637bde5753630547e889f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
