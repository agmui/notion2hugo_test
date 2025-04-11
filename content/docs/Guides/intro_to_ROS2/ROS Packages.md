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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVXEL2R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBRPDnLbJDv3ISyemF1gD2u7wlxKN4cgFwZA%2FPIMEuSUAiBJUS2F%2F%2B%2B%2BZAl%2FhjRNrJRZA1SL4mC0fR8%2FWspTUicNgSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVuVxgUkb6xG%2FG6UWKtwDwzgCRSFOm3oLJIXHJw6AmgYBpbmz5UIXE51Gkp6CvuD8YPorF5jNoupk%2FxGtziNd%2FWHKPPnIm57zis2Ap1O%2BiJG6Lc0bjaTUgq%2FIf9wb2EetwVyQ5bu1j3hFEoUf1MlnumB8QIRPRUtABghM%2BPU7zLbjTloPg3CJ8H3%2FaERR2ud3Ll0Crb6qeNblGBigGozlid%2FoX2bEByWFwMEIWbLKEr3k7hvErw17%2B8jWOi2BVfZjIp0rM5oHretE0V8%2BW6o6MUESPZfwHXC1dPrA92RXkFM9I4tUIoiQR95kgAcsqlpGWXKofGoGyUdAQajPhoICz8sVEc5Rvh8Fw0JuFda5X%2FBIMHTY3Bq7pWbMuWcs6kfA84AHjppmEOfePpaUoMhPbJpZ6e44k5pSVssi3owOSmZmMQsWCIoEZe%2BF%2F2%2FWVtIWUadvLnLVUyXCnW1KMWrxs4c10LVzNJJ1hCSCrJUD1YzBb1JMRlFIihM3HX1XMkfMGVnsX1To%2Bj0mevB1gZlgSy3ZYan6u5I13Lb1QjZDBqWiBR%2FbuK1qak34Wc%2FnaGtRxOkBJKrUGzlKQhXeE%2B2gc%2Biu9kPPIsKgMwzE%2B3GubRHU%2FBm%2F2zwkJjlBH6NXhdz65SnuqB7%2FIyvHRMwwg%2FLkvwY6pgHGBbTp29UXMod36H1afgijQVCCGW4DdIEbiy4H9uQMLsHTNS6a%2FPPNoB3Iaz6ed9oNblzm8hzqqufOheRI7l%2F9Ws%2FoZA2rD5T9OhHhI32DMApC2Lw4MnNZlojbn5%2F44vR1VC5q2MCMZDmXK337tm1h385Ojn0YO34v1iOwZQnXhN1shS%2Ft%2FZXqBbKxYm1vipOA9dj%2FyJo1XejgmbmhtMR6WXSUxOJM&X-Amz-Signature=7b48a71de1021b0c15cfc27bf73a78baa27b43f3104989fd35bfce405b419b66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVXEL2R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBRPDnLbJDv3ISyemF1gD2u7wlxKN4cgFwZA%2FPIMEuSUAiBJUS2F%2F%2B%2B%2BZAl%2FhjRNrJRZA1SL4mC0fR8%2FWspTUicNgSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVuVxgUkb6xG%2FG6UWKtwDwzgCRSFOm3oLJIXHJw6AmgYBpbmz5UIXE51Gkp6CvuD8YPorF5jNoupk%2FxGtziNd%2FWHKPPnIm57zis2Ap1O%2BiJG6Lc0bjaTUgq%2FIf9wb2EetwVyQ5bu1j3hFEoUf1MlnumB8QIRPRUtABghM%2BPU7zLbjTloPg3CJ8H3%2FaERR2ud3Ll0Crb6qeNblGBigGozlid%2FoX2bEByWFwMEIWbLKEr3k7hvErw17%2B8jWOi2BVfZjIp0rM5oHretE0V8%2BW6o6MUESPZfwHXC1dPrA92RXkFM9I4tUIoiQR95kgAcsqlpGWXKofGoGyUdAQajPhoICz8sVEc5Rvh8Fw0JuFda5X%2FBIMHTY3Bq7pWbMuWcs6kfA84AHjppmEOfePpaUoMhPbJpZ6e44k5pSVssi3owOSmZmMQsWCIoEZe%2BF%2F2%2FWVtIWUadvLnLVUyXCnW1KMWrxs4c10LVzNJJ1hCSCrJUD1YzBb1JMRlFIihM3HX1XMkfMGVnsX1To%2Bj0mevB1gZlgSy3ZYan6u5I13Lb1QjZDBqWiBR%2FbuK1qak34Wc%2FnaGtRxOkBJKrUGzlKQhXeE%2B2gc%2Biu9kPPIsKgMwzE%2B3GubRHU%2FBm%2F2zwkJjlBH6NXhdz65SnuqB7%2FIyvHRMwwg%2FLkvwY6pgHGBbTp29UXMod36H1afgijQVCCGW4DdIEbiy4H9uQMLsHTNS6a%2FPPNoB3Iaz6ed9oNblzm8hzqqufOheRI7l%2F9Ws%2FoZA2rD5T9OhHhI32DMApC2Lw4MnNZlojbn5%2F44vR1VC5q2MCMZDmXK337tm1h385Ojn0YO34v1iOwZQnXhN1shS%2Ft%2FZXqBbKxYm1vipOA9dj%2FyJo1XejgmbmhtMR6WXSUxOJM&X-Amz-Signature=e165a00d10541cbfb2c44dfc807d05add2799172d94a5cb5fc76a133eb95b483&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVXEL2R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBRPDnLbJDv3ISyemF1gD2u7wlxKN4cgFwZA%2FPIMEuSUAiBJUS2F%2F%2B%2B%2BZAl%2FhjRNrJRZA1SL4mC0fR8%2FWspTUicNgSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVuVxgUkb6xG%2FG6UWKtwDwzgCRSFOm3oLJIXHJw6AmgYBpbmz5UIXE51Gkp6CvuD8YPorF5jNoupk%2FxGtziNd%2FWHKPPnIm57zis2Ap1O%2BiJG6Lc0bjaTUgq%2FIf9wb2EetwVyQ5bu1j3hFEoUf1MlnumB8QIRPRUtABghM%2BPU7zLbjTloPg3CJ8H3%2FaERR2ud3Ll0Crb6qeNblGBigGozlid%2FoX2bEByWFwMEIWbLKEr3k7hvErw17%2B8jWOi2BVfZjIp0rM5oHretE0V8%2BW6o6MUESPZfwHXC1dPrA92RXkFM9I4tUIoiQR95kgAcsqlpGWXKofGoGyUdAQajPhoICz8sVEc5Rvh8Fw0JuFda5X%2FBIMHTY3Bq7pWbMuWcs6kfA84AHjppmEOfePpaUoMhPbJpZ6e44k5pSVssi3owOSmZmMQsWCIoEZe%2BF%2F2%2FWVtIWUadvLnLVUyXCnW1KMWrxs4c10LVzNJJ1hCSCrJUD1YzBb1JMRlFIihM3HX1XMkfMGVnsX1To%2Bj0mevB1gZlgSy3ZYan6u5I13Lb1QjZDBqWiBR%2FbuK1qak34Wc%2FnaGtRxOkBJKrUGzlKQhXeE%2B2gc%2Biu9kPPIsKgMwzE%2B3GubRHU%2FBm%2F2zwkJjlBH6NXhdz65SnuqB7%2FIyvHRMwwg%2FLkvwY6pgHGBbTp29UXMod36H1afgijQVCCGW4DdIEbiy4H9uQMLsHTNS6a%2FPPNoB3Iaz6ed9oNblzm8hzqqufOheRI7l%2F9Ws%2FoZA2rD5T9OhHhI32DMApC2Lw4MnNZlojbn5%2F44vR1VC5q2MCMZDmXK337tm1h385Ojn0YO34v1iOwZQnXhN1shS%2Ft%2FZXqBbKxYm1vipOA9dj%2FyJo1XejgmbmhtMR6WXSUxOJM&X-Amz-Signature=df6e6eb4ed2da6effd3f9cbe1342372e08cffcc132ac73cb46f82f73715d75ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVXEL2R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBRPDnLbJDv3ISyemF1gD2u7wlxKN4cgFwZA%2FPIMEuSUAiBJUS2F%2F%2B%2B%2BZAl%2FhjRNrJRZA1SL4mC0fR8%2FWspTUicNgSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVuVxgUkb6xG%2FG6UWKtwDwzgCRSFOm3oLJIXHJw6AmgYBpbmz5UIXE51Gkp6CvuD8YPorF5jNoupk%2FxGtziNd%2FWHKPPnIm57zis2Ap1O%2BiJG6Lc0bjaTUgq%2FIf9wb2EetwVyQ5bu1j3hFEoUf1MlnumB8QIRPRUtABghM%2BPU7zLbjTloPg3CJ8H3%2FaERR2ud3Ll0Crb6qeNblGBigGozlid%2FoX2bEByWFwMEIWbLKEr3k7hvErw17%2B8jWOi2BVfZjIp0rM5oHretE0V8%2BW6o6MUESPZfwHXC1dPrA92RXkFM9I4tUIoiQR95kgAcsqlpGWXKofGoGyUdAQajPhoICz8sVEc5Rvh8Fw0JuFda5X%2FBIMHTY3Bq7pWbMuWcs6kfA84AHjppmEOfePpaUoMhPbJpZ6e44k5pSVssi3owOSmZmMQsWCIoEZe%2BF%2F2%2FWVtIWUadvLnLVUyXCnW1KMWrxs4c10LVzNJJ1hCSCrJUD1YzBb1JMRlFIihM3HX1XMkfMGVnsX1To%2Bj0mevB1gZlgSy3ZYan6u5I13Lb1QjZDBqWiBR%2FbuK1qak34Wc%2FnaGtRxOkBJKrUGzlKQhXeE%2B2gc%2Biu9kPPIsKgMwzE%2B3GubRHU%2FBm%2F2zwkJjlBH6NXhdz65SnuqB7%2FIyvHRMwwg%2FLkvwY6pgHGBbTp29UXMod36H1afgijQVCCGW4DdIEbiy4H9uQMLsHTNS6a%2FPPNoB3Iaz6ed9oNblzm8hzqqufOheRI7l%2F9Ws%2FoZA2rD5T9OhHhI32DMApC2Lw4MnNZlojbn5%2F44vR1VC5q2MCMZDmXK337tm1h385Ojn0YO34v1iOwZQnXhN1shS%2Ft%2FZXqBbKxYm1vipOA9dj%2FyJo1XejgmbmhtMR6WXSUxOJM&X-Amz-Signature=7a6966cefa62ebbbd3b4c2bd8caa18c5b8bc7a491a5c73e78f5ec4d935b77512&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVXEL2R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBRPDnLbJDv3ISyemF1gD2u7wlxKN4cgFwZA%2FPIMEuSUAiBJUS2F%2F%2B%2B%2BZAl%2FhjRNrJRZA1SL4mC0fR8%2FWspTUicNgSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVuVxgUkb6xG%2FG6UWKtwDwzgCRSFOm3oLJIXHJw6AmgYBpbmz5UIXE51Gkp6CvuD8YPorF5jNoupk%2FxGtziNd%2FWHKPPnIm57zis2Ap1O%2BiJG6Lc0bjaTUgq%2FIf9wb2EetwVyQ5bu1j3hFEoUf1MlnumB8QIRPRUtABghM%2BPU7zLbjTloPg3CJ8H3%2FaERR2ud3Ll0Crb6qeNblGBigGozlid%2FoX2bEByWFwMEIWbLKEr3k7hvErw17%2B8jWOi2BVfZjIp0rM5oHretE0V8%2BW6o6MUESPZfwHXC1dPrA92RXkFM9I4tUIoiQR95kgAcsqlpGWXKofGoGyUdAQajPhoICz8sVEc5Rvh8Fw0JuFda5X%2FBIMHTY3Bq7pWbMuWcs6kfA84AHjppmEOfePpaUoMhPbJpZ6e44k5pSVssi3owOSmZmMQsWCIoEZe%2BF%2F2%2FWVtIWUadvLnLVUyXCnW1KMWrxs4c10LVzNJJ1hCSCrJUD1YzBb1JMRlFIihM3HX1XMkfMGVnsX1To%2Bj0mevB1gZlgSy3ZYan6u5I13Lb1QjZDBqWiBR%2FbuK1qak34Wc%2FnaGtRxOkBJKrUGzlKQhXeE%2B2gc%2Biu9kPPIsKgMwzE%2B3GubRHU%2FBm%2F2zwkJjlBH6NXhdz65SnuqB7%2FIyvHRMwwg%2FLkvwY6pgHGBbTp29UXMod36H1afgijQVCCGW4DdIEbiy4H9uQMLsHTNS6a%2FPPNoB3Iaz6ed9oNblzm8hzqqufOheRI7l%2F9Ws%2FoZA2rD5T9OhHhI32DMApC2Lw4MnNZlojbn5%2F44vR1VC5q2MCMZDmXK337tm1h385Ojn0YO34v1iOwZQnXhN1shS%2Ft%2FZXqBbKxYm1vipOA9dj%2FyJo1XejgmbmhtMR6WXSUxOJM&X-Amz-Signature=16263418d8632f71168751b632820704329004eff0219b2e8af20d1ea7021477&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVXEL2R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBRPDnLbJDv3ISyemF1gD2u7wlxKN4cgFwZA%2FPIMEuSUAiBJUS2F%2F%2B%2B%2BZAl%2FhjRNrJRZA1SL4mC0fR8%2FWspTUicNgSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVuVxgUkb6xG%2FG6UWKtwDwzgCRSFOm3oLJIXHJw6AmgYBpbmz5UIXE51Gkp6CvuD8YPorF5jNoupk%2FxGtziNd%2FWHKPPnIm57zis2Ap1O%2BiJG6Lc0bjaTUgq%2FIf9wb2EetwVyQ5bu1j3hFEoUf1MlnumB8QIRPRUtABghM%2BPU7zLbjTloPg3CJ8H3%2FaERR2ud3Ll0Crb6qeNblGBigGozlid%2FoX2bEByWFwMEIWbLKEr3k7hvErw17%2B8jWOi2BVfZjIp0rM5oHretE0V8%2BW6o6MUESPZfwHXC1dPrA92RXkFM9I4tUIoiQR95kgAcsqlpGWXKofGoGyUdAQajPhoICz8sVEc5Rvh8Fw0JuFda5X%2FBIMHTY3Bq7pWbMuWcs6kfA84AHjppmEOfePpaUoMhPbJpZ6e44k5pSVssi3owOSmZmMQsWCIoEZe%2BF%2F2%2FWVtIWUadvLnLVUyXCnW1KMWrxs4c10LVzNJJ1hCSCrJUD1YzBb1JMRlFIihM3HX1XMkfMGVnsX1To%2Bj0mevB1gZlgSy3ZYan6u5I13Lb1QjZDBqWiBR%2FbuK1qak34Wc%2FnaGtRxOkBJKrUGzlKQhXeE%2B2gc%2Biu9kPPIsKgMwzE%2B3GubRHU%2FBm%2F2zwkJjlBH6NXhdz65SnuqB7%2FIyvHRMwwg%2FLkvwY6pgHGBbTp29UXMod36H1afgijQVCCGW4DdIEbiy4H9uQMLsHTNS6a%2FPPNoB3Iaz6ed9oNblzm8hzqqufOheRI7l%2F9Ws%2FoZA2rD5T9OhHhI32DMApC2Lw4MnNZlojbn5%2F44vR1VC5q2MCMZDmXK337tm1h385Ojn0YO34v1iOwZQnXhN1shS%2Ft%2FZXqBbKxYm1vipOA9dj%2FyJo1XejgmbmhtMR6WXSUxOJM&X-Amz-Signature=38a9ac323eb049d1d06a92aef5095eeaf8390931248e1561cca9771eebc67841&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVXEL2R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBRPDnLbJDv3ISyemF1gD2u7wlxKN4cgFwZA%2FPIMEuSUAiBJUS2F%2F%2B%2B%2BZAl%2FhjRNrJRZA1SL4mC0fR8%2FWspTUicNgSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVuVxgUkb6xG%2FG6UWKtwDwzgCRSFOm3oLJIXHJw6AmgYBpbmz5UIXE51Gkp6CvuD8YPorF5jNoupk%2FxGtziNd%2FWHKPPnIm57zis2Ap1O%2BiJG6Lc0bjaTUgq%2FIf9wb2EetwVyQ5bu1j3hFEoUf1MlnumB8QIRPRUtABghM%2BPU7zLbjTloPg3CJ8H3%2FaERR2ud3Ll0Crb6qeNblGBigGozlid%2FoX2bEByWFwMEIWbLKEr3k7hvErw17%2B8jWOi2BVfZjIp0rM5oHretE0V8%2BW6o6MUESPZfwHXC1dPrA92RXkFM9I4tUIoiQR95kgAcsqlpGWXKofGoGyUdAQajPhoICz8sVEc5Rvh8Fw0JuFda5X%2FBIMHTY3Bq7pWbMuWcs6kfA84AHjppmEOfePpaUoMhPbJpZ6e44k5pSVssi3owOSmZmMQsWCIoEZe%2BF%2F2%2FWVtIWUadvLnLVUyXCnW1KMWrxs4c10LVzNJJ1hCSCrJUD1YzBb1JMRlFIihM3HX1XMkfMGVnsX1To%2Bj0mevB1gZlgSy3ZYan6u5I13Lb1QjZDBqWiBR%2FbuK1qak34Wc%2FnaGtRxOkBJKrUGzlKQhXeE%2B2gc%2Biu9kPPIsKgMwzE%2B3GubRHU%2FBm%2F2zwkJjlBH6NXhdz65SnuqB7%2FIyvHRMwwg%2FLkvwY6pgHGBbTp29UXMod36H1afgijQVCCGW4DdIEbiy4H9uQMLsHTNS6a%2FPPNoB3Iaz6ed9oNblzm8hzqqufOheRI7l%2F9Ws%2FoZA2rD5T9OhHhI32DMApC2Lw4MnNZlojbn5%2F44vR1VC5q2MCMZDmXK337tm1h385Ojn0YO34v1iOwZQnXhN1shS%2Ft%2FZXqBbKxYm1vipOA9dj%2FyJo1XejgmbmhtMR6WXSUxOJM&X-Amz-Signature=f22fb643e41f7d59f049d2099f89875e9102d6a6cc30e9012c024aef07eaae1f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
