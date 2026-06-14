---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEQTD6U%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFxXs5Kuoc5tb9k4ad9gfXk%2Fp7yzUUUYJpAfVCX1tnYAiEAkiQ%2BhJOYkrR1ZXDGI6mTLdlAkAVWb%2B9z9e4wbbtVyJ8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDODTEyI%2F3zTUkmwqCCrcA5MQz%2F9Xow0ucpH5dHt2Aw1OAVRwQB%2FpqC8LpiGMPbMTAlswZpiKUMRIn9SBaW90fWatUpwdvpbehA66%2Byr6Cc1N2Px2yiMdA0hFPGHaRxsuVleWMmJFmRw3srjz%2FzTd7Soctsuey1m9TSZE%2FwriXQz0H%2F0P7i9Jh7DoxcvtrGZ3kD%2FIgp4wBuaxuQLYK%2BvsH91FsEK0sPrSR0hz%2F6JdtGefI8zwuoOyvVbZBthlcCQ3vQb01Q3qtKvbTGpX4fGspc%2FttdBfjSNYxffNMbi1Qv25nVmNX5UuVEDH742tpjllBfGMFjpO8gPOEAj7iP9tbe6jKuV7zMimJaA2Dewxwieb5Vm1kBMyqW%2BCYBrrdxLPQQ2CivMcpdEg2ujxlBjt74taNRP161GsF4y%2B6mH1NFC9BWTOhFU%2FRhxM3NxJG2S8tBX%2Fm9MN0kPRzzQdOTj1B6qRPiXeMRr67WT4PfluX%2BhKSfEbUaocLoM7HSIF%2B2E%2FvE%2BnV%2BVUaJ8EBgeb%2BIIp0VBKRj7Zl8SimTcD6YMFM%2FJ%2FpAzOppqB0gkMXjBfww9L2Sn7ef1hhNyj9UUvffDO7Z78uMW7U%2Fqm2pT2vuS%2B1HQgv6xZp09q3HRsza4EA5HIGtZsaZRPSM0WQw4pMPycuNEGOqUBGYeEaFS%2FyeWy60YlMuB8xgoYKdwfj2AivqL2qvd5THz1r4N3aA9PZ39Mdym%2B1GX8uqCDOzXAAb0uzuCgI3Avw6TbP99W824gqRUNsCSv5tKGrQrK3SCQX%2BHw8DSPNz0Qe573yOnwuhatbTpLPe%2BB6J0ZrQ7dGnBGKDKau0P%2FPp5ZyTT7pJKOFJJNRraQXssN4uaOTPOQdodzIJtFmOHDGXpq%2FSvf&X-Amz-Signature=ae501b4030b29238b4c48287822397afb2cf6bf3480cd58a2b07bb059761b187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEQTD6U%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFxXs5Kuoc5tb9k4ad9gfXk%2Fp7yzUUUYJpAfVCX1tnYAiEAkiQ%2BhJOYkrR1ZXDGI6mTLdlAkAVWb%2B9z9e4wbbtVyJ8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDODTEyI%2F3zTUkmwqCCrcA5MQz%2F9Xow0ucpH5dHt2Aw1OAVRwQB%2FpqC8LpiGMPbMTAlswZpiKUMRIn9SBaW90fWatUpwdvpbehA66%2Byr6Cc1N2Px2yiMdA0hFPGHaRxsuVleWMmJFmRw3srjz%2FzTd7Soctsuey1m9TSZE%2FwriXQz0H%2F0P7i9Jh7DoxcvtrGZ3kD%2FIgp4wBuaxuQLYK%2BvsH91FsEK0sPrSR0hz%2F6JdtGefI8zwuoOyvVbZBthlcCQ3vQb01Q3qtKvbTGpX4fGspc%2FttdBfjSNYxffNMbi1Qv25nVmNX5UuVEDH742tpjllBfGMFjpO8gPOEAj7iP9tbe6jKuV7zMimJaA2Dewxwieb5Vm1kBMyqW%2BCYBrrdxLPQQ2CivMcpdEg2ujxlBjt74taNRP161GsF4y%2B6mH1NFC9BWTOhFU%2FRhxM3NxJG2S8tBX%2Fm9MN0kPRzzQdOTj1B6qRPiXeMRr67WT4PfluX%2BhKSfEbUaocLoM7HSIF%2B2E%2FvE%2BnV%2BVUaJ8EBgeb%2BIIp0VBKRj7Zl8SimTcD6YMFM%2FJ%2FpAzOppqB0gkMXjBfww9L2Sn7ef1hhNyj9UUvffDO7Z78uMW7U%2Fqm2pT2vuS%2B1HQgv6xZp09q3HRsza4EA5HIGtZsaZRPSM0WQw4pMPycuNEGOqUBGYeEaFS%2FyeWy60YlMuB8xgoYKdwfj2AivqL2qvd5THz1r4N3aA9PZ39Mdym%2B1GX8uqCDOzXAAb0uzuCgI3Avw6TbP99W824gqRUNsCSv5tKGrQrK3SCQX%2BHw8DSPNz0Qe573yOnwuhatbTpLPe%2BB6J0ZrQ7dGnBGKDKau0P%2FPp5ZyTT7pJKOFJJNRraQXssN4uaOTPOQdodzIJtFmOHDGXpq%2FSvf&X-Amz-Signature=deff1abccbcc2e3a52127b5534a045a14144bdd075741f1b968249382b7eee05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEQTD6U%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFxXs5Kuoc5tb9k4ad9gfXk%2Fp7yzUUUYJpAfVCX1tnYAiEAkiQ%2BhJOYkrR1ZXDGI6mTLdlAkAVWb%2B9z9e4wbbtVyJ8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDODTEyI%2F3zTUkmwqCCrcA5MQz%2F9Xow0ucpH5dHt2Aw1OAVRwQB%2FpqC8LpiGMPbMTAlswZpiKUMRIn9SBaW90fWatUpwdvpbehA66%2Byr6Cc1N2Px2yiMdA0hFPGHaRxsuVleWMmJFmRw3srjz%2FzTd7Soctsuey1m9TSZE%2FwriXQz0H%2F0P7i9Jh7DoxcvtrGZ3kD%2FIgp4wBuaxuQLYK%2BvsH91FsEK0sPrSR0hz%2F6JdtGefI8zwuoOyvVbZBthlcCQ3vQb01Q3qtKvbTGpX4fGspc%2FttdBfjSNYxffNMbi1Qv25nVmNX5UuVEDH742tpjllBfGMFjpO8gPOEAj7iP9tbe6jKuV7zMimJaA2Dewxwieb5Vm1kBMyqW%2BCYBrrdxLPQQ2CivMcpdEg2ujxlBjt74taNRP161GsF4y%2B6mH1NFC9BWTOhFU%2FRhxM3NxJG2S8tBX%2Fm9MN0kPRzzQdOTj1B6qRPiXeMRr67WT4PfluX%2BhKSfEbUaocLoM7HSIF%2B2E%2FvE%2BnV%2BVUaJ8EBgeb%2BIIp0VBKRj7Zl8SimTcD6YMFM%2FJ%2FpAzOppqB0gkMXjBfww9L2Sn7ef1hhNyj9UUvffDO7Z78uMW7U%2Fqm2pT2vuS%2B1HQgv6xZp09q3HRsza4EA5HIGtZsaZRPSM0WQw4pMPycuNEGOqUBGYeEaFS%2FyeWy60YlMuB8xgoYKdwfj2AivqL2qvd5THz1r4N3aA9PZ39Mdym%2B1GX8uqCDOzXAAb0uzuCgI3Avw6TbP99W824gqRUNsCSv5tKGrQrK3SCQX%2BHw8DSPNz0Qe573yOnwuhatbTpLPe%2BB6J0ZrQ7dGnBGKDKau0P%2FPp5ZyTT7pJKOFJJNRraQXssN4uaOTPOQdodzIJtFmOHDGXpq%2FSvf&X-Amz-Signature=3c7fac8aa5cf15c6d71ed03f98de34d3064eef1f8115b42a5239111675777368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEQTD6U%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFxXs5Kuoc5tb9k4ad9gfXk%2Fp7yzUUUYJpAfVCX1tnYAiEAkiQ%2BhJOYkrR1ZXDGI6mTLdlAkAVWb%2B9z9e4wbbtVyJ8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDODTEyI%2F3zTUkmwqCCrcA5MQz%2F9Xow0ucpH5dHt2Aw1OAVRwQB%2FpqC8LpiGMPbMTAlswZpiKUMRIn9SBaW90fWatUpwdvpbehA66%2Byr6Cc1N2Px2yiMdA0hFPGHaRxsuVleWMmJFmRw3srjz%2FzTd7Soctsuey1m9TSZE%2FwriXQz0H%2F0P7i9Jh7DoxcvtrGZ3kD%2FIgp4wBuaxuQLYK%2BvsH91FsEK0sPrSR0hz%2F6JdtGefI8zwuoOyvVbZBthlcCQ3vQb01Q3qtKvbTGpX4fGspc%2FttdBfjSNYxffNMbi1Qv25nVmNX5UuVEDH742tpjllBfGMFjpO8gPOEAj7iP9tbe6jKuV7zMimJaA2Dewxwieb5Vm1kBMyqW%2BCYBrrdxLPQQ2CivMcpdEg2ujxlBjt74taNRP161GsF4y%2B6mH1NFC9BWTOhFU%2FRhxM3NxJG2S8tBX%2Fm9MN0kPRzzQdOTj1B6qRPiXeMRr67WT4PfluX%2BhKSfEbUaocLoM7HSIF%2B2E%2FvE%2BnV%2BVUaJ8EBgeb%2BIIp0VBKRj7Zl8SimTcD6YMFM%2FJ%2FpAzOppqB0gkMXjBfww9L2Sn7ef1hhNyj9UUvffDO7Z78uMW7U%2Fqm2pT2vuS%2B1HQgv6xZp09q3HRsza4EA5HIGtZsaZRPSM0WQw4pMPycuNEGOqUBGYeEaFS%2FyeWy60YlMuB8xgoYKdwfj2AivqL2qvd5THz1r4N3aA9PZ39Mdym%2B1GX8uqCDOzXAAb0uzuCgI3Avw6TbP99W824gqRUNsCSv5tKGrQrK3SCQX%2BHw8DSPNz0Qe573yOnwuhatbTpLPe%2BB6J0ZrQ7dGnBGKDKau0P%2FPp5ZyTT7pJKOFJJNRraQXssN4uaOTPOQdodzIJtFmOHDGXpq%2FSvf&X-Amz-Signature=f78d82fbaef6514d371780e26c43ff19e83bf47a0672fc5b550e1d839d79156b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEQTD6U%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFxXs5Kuoc5tb9k4ad9gfXk%2Fp7yzUUUYJpAfVCX1tnYAiEAkiQ%2BhJOYkrR1ZXDGI6mTLdlAkAVWb%2B9z9e4wbbtVyJ8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDODTEyI%2F3zTUkmwqCCrcA5MQz%2F9Xow0ucpH5dHt2Aw1OAVRwQB%2FpqC8LpiGMPbMTAlswZpiKUMRIn9SBaW90fWatUpwdvpbehA66%2Byr6Cc1N2Px2yiMdA0hFPGHaRxsuVleWMmJFmRw3srjz%2FzTd7Soctsuey1m9TSZE%2FwriXQz0H%2F0P7i9Jh7DoxcvtrGZ3kD%2FIgp4wBuaxuQLYK%2BvsH91FsEK0sPrSR0hz%2F6JdtGefI8zwuoOyvVbZBthlcCQ3vQb01Q3qtKvbTGpX4fGspc%2FttdBfjSNYxffNMbi1Qv25nVmNX5UuVEDH742tpjllBfGMFjpO8gPOEAj7iP9tbe6jKuV7zMimJaA2Dewxwieb5Vm1kBMyqW%2BCYBrrdxLPQQ2CivMcpdEg2ujxlBjt74taNRP161GsF4y%2B6mH1NFC9BWTOhFU%2FRhxM3NxJG2S8tBX%2Fm9MN0kPRzzQdOTj1B6qRPiXeMRr67WT4PfluX%2BhKSfEbUaocLoM7HSIF%2B2E%2FvE%2BnV%2BVUaJ8EBgeb%2BIIp0VBKRj7Zl8SimTcD6YMFM%2FJ%2FpAzOppqB0gkMXjBfww9L2Sn7ef1hhNyj9UUvffDO7Z78uMW7U%2Fqm2pT2vuS%2B1HQgv6xZp09q3HRsza4EA5HIGtZsaZRPSM0WQw4pMPycuNEGOqUBGYeEaFS%2FyeWy60YlMuB8xgoYKdwfj2AivqL2qvd5THz1r4N3aA9PZ39Mdym%2B1GX8uqCDOzXAAb0uzuCgI3Avw6TbP99W824gqRUNsCSv5tKGrQrK3SCQX%2BHw8DSPNz0Qe573yOnwuhatbTpLPe%2BB6J0ZrQ7dGnBGKDKau0P%2FPp5ZyTT7pJKOFJJNRraQXssN4uaOTPOQdodzIJtFmOHDGXpq%2FSvf&X-Amz-Signature=4bb3bc5eea387ede9d2f983c03e5ef50d83f073c87e28a2df83a8439cb02ead3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEQTD6U%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFxXs5Kuoc5tb9k4ad9gfXk%2Fp7yzUUUYJpAfVCX1tnYAiEAkiQ%2BhJOYkrR1ZXDGI6mTLdlAkAVWb%2B9z9e4wbbtVyJ8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDODTEyI%2F3zTUkmwqCCrcA5MQz%2F9Xow0ucpH5dHt2Aw1OAVRwQB%2FpqC8LpiGMPbMTAlswZpiKUMRIn9SBaW90fWatUpwdvpbehA66%2Byr6Cc1N2Px2yiMdA0hFPGHaRxsuVleWMmJFmRw3srjz%2FzTd7Soctsuey1m9TSZE%2FwriXQz0H%2F0P7i9Jh7DoxcvtrGZ3kD%2FIgp4wBuaxuQLYK%2BvsH91FsEK0sPrSR0hz%2F6JdtGefI8zwuoOyvVbZBthlcCQ3vQb01Q3qtKvbTGpX4fGspc%2FttdBfjSNYxffNMbi1Qv25nVmNX5UuVEDH742tpjllBfGMFjpO8gPOEAj7iP9tbe6jKuV7zMimJaA2Dewxwieb5Vm1kBMyqW%2BCYBrrdxLPQQ2CivMcpdEg2ujxlBjt74taNRP161GsF4y%2B6mH1NFC9BWTOhFU%2FRhxM3NxJG2S8tBX%2Fm9MN0kPRzzQdOTj1B6qRPiXeMRr67WT4PfluX%2BhKSfEbUaocLoM7HSIF%2B2E%2FvE%2BnV%2BVUaJ8EBgeb%2BIIp0VBKRj7Zl8SimTcD6YMFM%2FJ%2FpAzOppqB0gkMXjBfww9L2Sn7ef1hhNyj9UUvffDO7Z78uMW7U%2Fqm2pT2vuS%2B1HQgv6xZp09q3HRsza4EA5HIGtZsaZRPSM0WQw4pMPycuNEGOqUBGYeEaFS%2FyeWy60YlMuB8xgoYKdwfj2AivqL2qvd5THz1r4N3aA9PZ39Mdym%2B1GX8uqCDOzXAAb0uzuCgI3Avw6TbP99W824gqRUNsCSv5tKGrQrK3SCQX%2BHw8DSPNz0Qe573yOnwuhatbTpLPe%2BB6J0ZrQ7dGnBGKDKau0P%2FPp5ZyTT7pJKOFJJNRraQXssN4uaOTPOQdodzIJtFmOHDGXpq%2FSvf&X-Amz-Signature=b3e0e0fa8eb379cdd6d5c89bf58de79447a7c1af9b9feab3b4d6e5cbe4b2649a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEQTD6U%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDFxXs5Kuoc5tb9k4ad9gfXk%2Fp7yzUUUYJpAfVCX1tnYAiEAkiQ%2BhJOYkrR1ZXDGI6mTLdlAkAVWb%2B9z9e4wbbtVyJ8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDODTEyI%2F3zTUkmwqCCrcA5MQz%2F9Xow0ucpH5dHt2Aw1OAVRwQB%2FpqC8LpiGMPbMTAlswZpiKUMRIn9SBaW90fWatUpwdvpbehA66%2Byr6Cc1N2Px2yiMdA0hFPGHaRxsuVleWMmJFmRw3srjz%2FzTd7Soctsuey1m9TSZE%2FwriXQz0H%2F0P7i9Jh7DoxcvtrGZ3kD%2FIgp4wBuaxuQLYK%2BvsH91FsEK0sPrSR0hz%2F6JdtGefI8zwuoOyvVbZBthlcCQ3vQb01Q3qtKvbTGpX4fGspc%2FttdBfjSNYxffNMbi1Qv25nVmNX5UuVEDH742tpjllBfGMFjpO8gPOEAj7iP9tbe6jKuV7zMimJaA2Dewxwieb5Vm1kBMyqW%2BCYBrrdxLPQQ2CivMcpdEg2ujxlBjt74taNRP161GsF4y%2B6mH1NFC9BWTOhFU%2FRhxM3NxJG2S8tBX%2Fm9MN0kPRzzQdOTj1B6qRPiXeMRr67WT4PfluX%2BhKSfEbUaocLoM7HSIF%2B2E%2FvE%2BnV%2BVUaJ8EBgeb%2BIIp0VBKRj7Zl8SimTcD6YMFM%2FJ%2FpAzOppqB0gkMXjBfww9L2Sn7ef1hhNyj9UUvffDO7Z78uMW7U%2Fqm2pT2vuS%2B1HQgv6xZp09q3HRsza4EA5HIGtZsaZRPSM0WQw4pMPycuNEGOqUBGYeEaFS%2FyeWy60YlMuB8xgoYKdwfj2AivqL2qvd5THz1r4N3aA9PZ39Mdym%2B1GX8uqCDOzXAAb0uzuCgI3Avw6TbP99W824gqRUNsCSv5tKGrQrK3SCQX%2BHw8DSPNz0Qe573yOnwuhatbTpLPe%2BB6J0ZrQ7dGnBGKDKau0P%2FPp5ZyTT7pJKOFJJNRraQXssN4uaOTPOQdodzIJtFmOHDGXpq%2FSvf&X-Amz-Signature=fefb542c079e2d4f1ef95740d3136e9806d4c726d1a85b2f057cc26b0a879c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
