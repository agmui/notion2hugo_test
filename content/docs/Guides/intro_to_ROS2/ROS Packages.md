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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPXN3AZZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAvx3VdMIGvYc543GQz2%2B8%2BPmvHZDtxoctcC3DGwpPyUAiEA3Mjol3vMQsfcTIQjYRlXozCUh7hhK1PvhjIKmqE8Yo0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEkLpeANJ%2FgT%2FOW2LircA8ygKZ4Wr%2B1Y3QWUp4axFMqQgK7GaYzpVfgCjSR4w6rez7hiMAXkCY4MlqxXGnTma8AnkgZqUx0W9moPL53%2FaEouqy7BNfPsJZ6AlTCj5MQFaO%2Bzp5w1nYRTuSej6QvIsvVNmnkJ1Ux03gB4LliXQXiJm6NqX1yYugL3L19DPEF1H6YPx0LWSOc3gxZa%2FDcE%2BaSqleDlG2k4hb8lazMElz327aJGJ%2BJoU3CCfChVXoWgg9%2BKx%2BK%2Bqum%2B3bCGU3L5DTWz9poaMpoJknl8prHaTeV5HO2xXM7Qhty9YvZXwKtIOjUarpeTAYLnY7pJ87USV%2BNQ%2B1Vy1N4wvktN0etMbqJTbdgTe0sL5tGDh1W9n3b6JYLJLE2Hh2%2B7Y89A8ExrmEwgqPSWnlNQyHvhrHgNgzw6zh%2B%2FUxoBUplED2GjdRw3Z%2FZOHGGLbG4uWzGEJ6h%2F6GHpzlo1HCATLic6V8k8RKJjJ%2BeZxuB0qRErFr3ellUZ9VR2JAYhmPWVQEINpKemLl1Sa3WDMuJ6aPKrcL5pzilVEpwhHwVzA64eDAyfCkwkNmPBy48heLt0cs0NG3qVwhUhChTEiNhDNRBivTcyj%2FC6sYYQ5edQR3tlU3tVMJgpICPctMOUcBR52o%2BlMI28tMIGOqUBP33xdFor4P%2B7LQ1KHdGe%2FQ547OTsSRHrP8VNotTKO8gjLUPi87E6DuSbVRUBV0GxEW%2B76iXZ0jsAzytKgzwB%2B%2B6VIcci4GKzCZXUOZVUT7kHp7i2EBeuTFQTEFaeLGyI8aQNN5hGB744ywF0AjkK6M%2BbiXUcnypOd3tt1w4Yoj5U0xt6XH0sHs1SDg7Rp6a%2FLbUiRMA8Dy6K5%2BAw1fYk9ItGLdrC&X-Amz-Signature=64e20128bc584628d7fe9a7f5723432605dc8b528546dcf84cdce8b4c386d556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPXN3AZZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAvx3VdMIGvYc543GQz2%2B8%2BPmvHZDtxoctcC3DGwpPyUAiEA3Mjol3vMQsfcTIQjYRlXozCUh7hhK1PvhjIKmqE8Yo0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEkLpeANJ%2FgT%2FOW2LircA8ygKZ4Wr%2B1Y3QWUp4axFMqQgK7GaYzpVfgCjSR4w6rez7hiMAXkCY4MlqxXGnTma8AnkgZqUx0W9moPL53%2FaEouqy7BNfPsJZ6AlTCj5MQFaO%2Bzp5w1nYRTuSej6QvIsvVNmnkJ1Ux03gB4LliXQXiJm6NqX1yYugL3L19DPEF1H6YPx0LWSOc3gxZa%2FDcE%2BaSqleDlG2k4hb8lazMElz327aJGJ%2BJoU3CCfChVXoWgg9%2BKx%2BK%2Bqum%2B3bCGU3L5DTWz9poaMpoJknl8prHaTeV5HO2xXM7Qhty9YvZXwKtIOjUarpeTAYLnY7pJ87USV%2BNQ%2B1Vy1N4wvktN0etMbqJTbdgTe0sL5tGDh1W9n3b6JYLJLE2Hh2%2B7Y89A8ExrmEwgqPSWnlNQyHvhrHgNgzw6zh%2B%2FUxoBUplED2GjdRw3Z%2FZOHGGLbG4uWzGEJ6h%2F6GHpzlo1HCATLic6V8k8RKJjJ%2BeZxuB0qRErFr3ellUZ9VR2JAYhmPWVQEINpKemLl1Sa3WDMuJ6aPKrcL5pzilVEpwhHwVzA64eDAyfCkwkNmPBy48heLt0cs0NG3qVwhUhChTEiNhDNRBivTcyj%2FC6sYYQ5edQR3tlU3tVMJgpICPctMOUcBR52o%2BlMI28tMIGOqUBP33xdFor4P%2B7LQ1KHdGe%2FQ547OTsSRHrP8VNotTKO8gjLUPi87E6DuSbVRUBV0GxEW%2B76iXZ0jsAzytKgzwB%2B%2B6VIcci4GKzCZXUOZVUT7kHp7i2EBeuTFQTEFaeLGyI8aQNN5hGB744ywF0AjkK6M%2BbiXUcnypOd3tt1w4Yoj5U0xt6XH0sHs1SDg7Rp6a%2FLbUiRMA8Dy6K5%2BAw1fYk9ItGLdrC&X-Amz-Signature=c7fbb64395655fec52d658876dde413ea24611535908263eca29de6ceaa4d3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPXN3AZZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAvx3VdMIGvYc543GQz2%2B8%2BPmvHZDtxoctcC3DGwpPyUAiEA3Mjol3vMQsfcTIQjYRlXozCUh7hhK1PvhjIKmqE8Yo0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEkLpeANJ%2FgT%2FOW2LircA8ygKZ4Wr%2B1Y3QWUp4axFMqQgK7GaYzpVfgCjSR4w6rez7hiMAXkCY4MlqxXGnTma8AnkgZqUx0W9moPL53%2FaEouqy7BNfPsJZ6AlTCj5MQFaO%2Bzp5w1nYRTuSej6QvIsvVNmnkJ1Ux03gB4LliXQXiJm6NqX1yYugL3L19DPEF1H6YPx0LWSOc3gxZa%2FDcE%2BaSqleDlG2k4hb8lazMElz327aJGJ%2BJoU3CCfChVXoWgg9%2BKx%2BK%2Bqum%2B3bCGU3L5DTWz9poaMpoJknl8prHaTeV5HO2xXM7Qhty9YvZXwKtIOjUarpeTAYLnY7pJ87USV%2BNQ%2B1Vy1N4wvktN0etMbqJTbdgTe0sL5tGDh1W9n3b6JYLJLE2Hh2%2B7Y89A8ExrmEwgqPSWnlNQyHvhrHgNgzw6zh%2B%2FUxoBUplED2GjdRw3Z%2FZOHGGLbG4uWzGEJ6h%2F6GHpzlo1HCATLic6V8k8RKJjJ%2BeZxuB0qRErFr3ellUZ9VR2JAYhmPWVQEINpKemLl1Sa3WDMuJ6aPKrcL5pzilVEpwhHwVzA64eDAyfCkwkNmPBy48heLt0cs0NG3qVwhUhChTEiNhDNRBivTcyj%2FC6sYYQ5edQR3tlU3tVMJgpICPctMOUcBR52o%2BlMI28tMIGOqUBP33xdFor4P%2B7LQ1KHdGe%2FQ547OTsSRHrP8VNotTKO8gjLUPi87E6DuSbVRUBV0GxEW%2B76iXZ0jsAzytKgzwB%2B%2B6VIcci4GKzCZXUOZVUT7kHp7i2EBeuTFQTEFaeLGyI8aQNN5hGB744ywF0AjkK6M%2BbiXUcnypOd3tt1w4Yoj5U0xt6XH0sHs1SDg7Rp6a%2FLbUiRMA8Dy6K5%2BAw1fYk9ItGLdrC&X-Amz-Signature=c481eea0c27532258e8c7b62750b651530d3cfb299306152c9c824ac9ddaae29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPXN3AZZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAvx3VdMIGvYc543GQz2%2B8%2BPmvHZDtxoctcC3DGwpPyUAiEA3Mjol3vMQsfcTIQjYRlXozCUh7hhK1PvhjIKmqE8Yo0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEkLpeANJ%2FgT%2FOW2LircA8ygKZ4Wr%2B1Y3QWUp4axFMqQgK7GaYzpVfgCjSR4w6rez7hiMAXkCY4MlqxXGnTma8AnkgZqUx0W9moPL53%2FaEouqy7BNfPsJZ6AlTCj5MQFaO%2Bzp5w1nYRTuSej6QvIsvVNmnkJ1Ux03gB4LliXQXiJm6NqX1yYugL3L19DPEF1H6YPx0LWSOc3gxZa%2FDcE%2BaSqleDlG2k4hb8lazMElz327aJGJ%2BJoU3CCfChVXoWgg9%2BKx%2BK%2Bqum%2B3bCGU3L5DTWz9poaMpoJknl8prHaTeV5HO2xXM7Qhty9YvZXwKtIOjUarpeTAYLnY7pJ87USV%2BNQ%2B1Vy1N4wvktN0etMbqJTbdgTe0sL5tGDh1W9n3b6JYLJLE2Hh2%2B7Y89A8ExrmEwgqPSWnlNQyHvhrHgNgzw6zh%2B%2FUxoBUplED2GjdRw3Z%2FZOHGGLbG4uWzGEJ6h%2F6GHpzlo1HCATLic6V8k8RKJjJ%2BeZxuB0qRErFr3ellUZ9VR2JAYhmPWVQEINpKemLl1Sa3WDMuJ6aPKrcL5pzilVEpwhHwVzA64eDAyfCkwkNmPBy48heLt0cs0NG3qVwhUhChTEiNhDNRBivTcyj%2FC6sYYQ5edQR3tlU3tVMJgpICPctMOUcBR52o%2BlMI28tMIGOqUBP33xdFor4P%2B7LQ1KHdGe%2FQ547OTsSRHrP8VNotTKO8gjLUPi87E6DuSbVRUBV0GxEW%2B76iXZ0jsAzytKgzwB%2B%2B6VIcci4GKzCZXUOZVUT7kHp7i2EBeuTFQTEFaeLGyI8aQNN5hGB744ywF0AjkK6M%2BbiXUcnypOd3tt1w4Yoj5U0xt6XH0sHs1SDg7Rp6a%2FLbUiRMA8Dy6K5%2BAw1fYk9ItGLdrC&X-Amz-Signature=f3d2a2664abf98333005a83c3047a10392a7cea87eba5b0945f114923dbad2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPXN3AZZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAvx3VdMIGvYc543GQz2%2B8%2BPmvHZDtxoctcC3DGwpPyUAiEA3Mjol3vMQsfcTIQjYRlXozCUh7hhK1PvhjIKmqE8Yo0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEkLpeANJ%2FgT%2FOW2LircA8ygKZ4Wr%2B1Y3QWUp4axFMqQgK7GaYzpVfgCjSR4w6rez7hiMAXkCY4MlqxXGnTma8AnkgZqUx0W9moPL53%2FaEouqy7BNfPsJZ6AlTCj5MQFaO%2Bzp5w1nYRTuSej6QvIsvVNmnkJ1Ux03gB4LliXQXiJm6NqX1yYugL3L19DPEF1H6YPx0LWSOc3gxZa%2FDcE%2BaSqleDlG2k4hb8lazMElz327aJGJ%2BJoU3CCfChVXoWgg9%2BKx%2BK%2Bqum%2B3bCGU3L5DTWz9poaMpoJknl8prHaTeV5HO2xXM7Qhty9YvZXwKtIOjUarpeTAYLnY7pJ87USV%2BNQ%2B1Vy1N4wvktN0etMbqJTbdgTe0sL5tGDh1W9n3b6JYLJLE2Hh2%2B7Y89A8ExrmEwgqPSWnlNQyHvhrHgNgzw6zh%2B%2FUxoBUplED2GjdRw3Z%2FZOHGGLbG4uWzGEJ6h%2F6GHpzlo1HCATLic6V8k8RKJjJ%2BeZxuB0qRErFr3ellUZ9VR2JAYhmPWVQEINpKemLl1Sa3WDMuJ6aPKrcL5pzilVEpwhHwVzA64eDAyfCkwkNmPBy48heLt0cs0NG3qVwhUhChTEiNhDNRBivTcyj%2FC6sYYQ5edQR3tlU3tVMJgpICPctMOUcBR52o%2BlMI28tMIGOqUBP33xdFor4P%2B7LQ1KHdGe%2FQ547OTsSRHrP8VNotTKO8gjLUPi87E6DuSbVRUBV0GxEW%2B76iXZ0jsAzytKgzwB%2B%2B6VIcci4GKzCZXUOZVUT7kHp7i2EBeuTFQTEFaeLGyI8aQNN5hGB744ywF0AjkK6M%2BbiXUcnypOd3tt1w4Yoj5U0xt6XH0sHs1SDg7Rp6a%2FLbUiRMA8Dy6K5%2BAw1fYk9ItGLdrC&X-Amz-Signature=0b738b7debbfa1843d6957b66d619235debbc07141559e9d61575d3f2b3a938d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPXN3AZZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAvx3VdMIGvYc543GQz2%2B8%2BPmvHZDtxoctcC3DGwpPyUAiEA3Mjol3vMQsfcTIQjYRlXozCUh7hhK1PvhjIKmqE8Yo0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEkLpeANJ%2FgT%2FOW2LircA8ygKZ4Wr%2B1Y3QWUp4axFMqQgK7GaYzpVfgCjSR4w6rez7hiMAXkCY4MlqxXGnTma8AnkgZqUx0W9moPL53%2FaEouqy7BNfPsJZ6AlTCj5MQFaO%2Bzp5w1nYRTuSej6QvIsvVNmnkJ1Ux03gB4LliXQXiJm6NqX1yYugL3L19DPEF1H6YPx0LWSOc3gxZa%2FDcE%2BaSqleDlG2k4hb8lazMElz327aJGJ%2BJoU3CCfChVXoWgg9%2BKx%2BK%2Bqum%2B3bCGU3L5DTWz9poaMpoJknl8prHaTeV5HO2xXM7Qhty9YvZXwKtIOjUarpeTAYLnY7pJ87USV%2BNQ%2B1Vy1N4wvktN0etMbqJTbdgTe0sL5tGDh1W9n3b6JYLJLE2Hh2%2B7Y89A8ExrmEwgqPSWnlNQyHvhrHgNgzw6zh%2B%2FUxoBUplED2GjdRw3Z%2FZOHGGLbG4uWzGEJ6h%2F6GHpzlo1HCATLic6V8k8RKJjJ%2BeZxuB0qRErFr3ellUZ9VR2JAYhmPWVQEINpKemLl1Sa3WDMuJ6aPKrcL5pzilVEpwhHwVzA64eDAyfCkwkNmPBy48heLt0cs0NG3qVwhUhChTEiNhDNRBivTcyj%2FC6sYYQ5edQR3tlU3tVMJgpICPctMOUcBR52o%2BlMI28tMIGOqUBP33xdFor4P%2B7LQ1KHdGe%2FQ547OTsSRHrP8VNotTKO8gjLUPi87E6DuSbVRUBV0GxEW%2B76iXZ0jsAzytKgzwB%2B%2B6VIcci4GKzCZXUOZVUT7kHp7i2EBeuTFQTEFaeLGyI8aQNN5hGB744ywF0AjkK6M%2BbiXUcnypOd3tt1w4Yoj5U0xt6XH0sHs1SDg7Rp6a%2FLbUiRMA8Dy6K5%2BAw1fYk9ItGLdrC&X-Amz-Signature=129a27a386f423cd0e2f3fcde1b740c96562b20b559883131fd7ba23897c2a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPXN3AZZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAvx3VdMIGvYc543GQz2%2B8%2BPmvHZDtxoctcC3DGwpPyUAiEA3Mjol3vMQsfcTIQjYRlXozCUh7hhK1PvhjIKmqE8Yo0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEkLpeANJ%2FgT%2FOW2LircA8ygKZ4Wr%2B1Y3QWUp4axFMqQgK7GaYzpVfgCjSR4w6rez7hiMAXkCY4MlqxXGnTma8AnkgZqUx0W9moPL53%2FaEouqy7BNfPsJZ6AlTCj5MQFaO%2Bzp5w1nYRTuSej6QvIsvVNmnkJ1Ux03gB4LliXQXiJm6NqX1yYugL3L19DPEF1H6YPx0LWSOc3gxZa%2FDcE%2BaSqleDlG2k4hb8lazMElz327aJGJ%2BJoU3CCfChVXoWgg9%2BKx%2BK%2Bqum%2B3bCGU3L5DTWz9poaMpoJknl8prHaTeV5HO2xXM7Qhty9YvZXwKtIOjUarpeTAYLnY7pJ87USV%2BNQ%2B1Vy1N4wvktN0etMbqJTbdgTe0sL5tGDh1W9n3b6JYLJLE2Hh2%2B7Y89A8ExrmEwgqPSWnlNQyHvhrHgNgzw6zh%2B%2FUxoBUplED2GjdRw3Z%2FZOHGGLbG4uWzGEJ6h%2F6GHpzlo1HCATLic6V8k8RKJjJ%2BeZxuB0qRErFr3ellUZ9VR2JAYhmPWVQEINpKemLl1Sa3WDMuJ6aPKrcL5pzilVEpwhHwVzA64eDAyfCkwkNmPBy48heLt0cs0NG3qVwhUhChTEiNhDNRBivTcyj%2FC6sYYQ5edQR3tlU3tVMJgpICPctMOUcBR52o%2BlMI28tMIGOqUBP33xdFor4P%2B7LQ1KHdGe%2FQ547OTsSRHrP8VNotTKO8gjLUPi87E6DuSbVRUBV0GxEW%2B76iXZ0jsAzytKgzwB%2B%2B6VIcci4GKzCZXUOZVUT7kHp7i2EBeuTFQTEFaeLGyI8aQNN5hGB744ywF0AjkK6M%2BbiXUcnypOd3tt1w4Yoj5U0xt6XH0sHs1SDg7Rp6a%2FLbUiRMA8Dy6K5%2BAw1fYk9ItGLdrC&X-Amz-Signature=a1a481bf9f1cdbdbc46fb2730d5ecce7d4319bac3425354559052da92c9364d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
