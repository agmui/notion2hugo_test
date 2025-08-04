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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBOVHTH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH38nT87lFsItK3t2xwLdzF9PNLejSzAMHqLvPzNIIR1AiEAmbCRxBDPQ%2BiXC%2B1ykYKqPjC72k1WtR3%2F7J2B%2BK6F1oAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLg4c7DpSRexr0U8GyrcA%2B5ZUsorQ6v4CQr8mwAv%2B%2FaEHP2jdMXT0hRaeNXh%2F3cnrhjehM1RqkB7Wq3K6Q9Yhj4UbooAy5lK5K2EFX9Y%2FPaW9%2BKiic6OhbDRQ2j5UQJKenedm1qUCsBXOII8UX5x423u9W7dfgrIHw6GG2NccnMjBmLLkL%2Bwfex%2BwcKA8j%2FeTB7IBPpPB7Z%2BYVMMI%2BL4E93azopmMfDYeMcGsSRAUV%2FaRUbAU2zIYenAxU5Kq55W0Iwxteqgup%2BVnpPQd0zfNPvqPUijBVPWvlMmyFRKVWmcoiUhyN%2B3rRGbFNEP0ZtqqY6Kdi7XEqfpVoziqcvQeApdgsKkFWu3Lwl1hu7D8K8S%2FO8o1q45yGS0MTqiaIaVEaCGTBeuajMDEp0s3nf74GffGaBFWAgYkr2Z%2FoypFDOuu4j6CVSDtFGrv3U%2BaliDyDtBLccN9uGIZb4ibJdGRtCXcT9HYsVnjOmSR3PKTkawMBUc%2BUUq69u4%2FGhc3Hprxxtzs2XJfdkHDQnnqSzbTsbN%2FEVM5hyCvinFZmV3I81jKCrdCjL8tIE2B7BOCPqu1R3jmm3z6r1okKgTlKXWGTGAL9HDzC%2FE6CDMYPBKVtl%2B3tAqdsKydNXXEZB1oNeoHmQHk8AF1O6CRP7zMKvAxMQGOqUBJL6cd5n9IiZAEAjDMi28Nagl%2Fz25fXb8AE7cWVl9A0hMuYrlFxs2KpBHCzZsr5ubJRoGdFrWoaSShe%2BA7Rf5qLBxRD0rkZD%2BnG1LnKvtxf2EjJCUQmOMMoJSRvlPYvBG3N4U1JQP1KbLmUV4H7loXzSCnYY%2BhX3HYBPCM37isDPFbFDpbNBAV7ScVTE99O89nLaiatr2T7X73H7KiX3mXKPCtRaL&X-Amz-Signature=5d873c0cb09ebe85b73c429a6a2c54939add4b76a35f3bc9dabfa15275131f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBOVHTH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH38nT87lFsItK3t2xwLdzF9PNLejSzAMHqLvPzNIIR1AiEAmbCRxBDPQ%2BiXC%2B1ykYKqPjC72k1WtR3%2F7J2B%2BK6F1oAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLg4c7DpSRexr0U8GyrcA%2B5ZUsorQ6v4CQr8mwAv%2B%2FaEHP2jdMXT0hRaeNXh%2F3cnrhjehM1RqkB7Wq3K6Q9Yhj4UbooAy5lK5K2EFX9Y%2FPaW9%2BKiic6OhbDRQ2j5UQJKenedm1qUCsBXOII8UX5x423u9W7dfgrIHw6GG2NccnMjBmLLkL%2Bwfex%2BwcKA8j%2FeTB7IBPpPB7Z%2BYVMMI%2BL4E93azopmMfDYeMcGsSRAUV%2FaRUbAU2zIYenAxU5Kq55W0Iwxteqgup%2BVnpPQd0zfNPvqPUijBVPWvlMmyFRKVWmcoiUhyN%2B3rRGbFNEP0ZtqqY6Kdi7XEqfpVoziqcvQeApdgsKkFWu3Lwl1hu7D8K8S%2FO8o1q45yGS0MTqiaIaVEaCGTBeuajMDEp0s3nf74GffGaBFWAgYkr2Z%2FoypFDOuu4j6CVSDtFGrv3U%2BaliDyDtBLccN9uGIZb4ibJdGRtCXcT9HYsVnjOmSR3PKTkawMBUc%2BUUq69u4%2FGhc3Hprxxtzs2XJfdkHDQnnqSzbTsbN%2FEVM5hyCvinFZmV3I81jKCrdCjL8tIE2B7BOCPqu1R3jmm3z6r1okKgTlKXWGTGAL9HDzC%2FE6CDMYPBKVtl%2B3tAqdsKydNXXEZB1oNeoHmQHk8AF1O6CRP7zMKvAxMQGOqUBJL6cd5n9IiZAEAjDMi28Nagl%2Fz25fXb8AE7cWVl9A0hMuYrlFxs2KpBHCzZsr5ubJRoGdFrWoaSShe%2BA7Rf5qLBxRD0rkZD%2BnG1LnKvtxf2EjJCUQmOMMoJSRvlPYvBG3N4U1JQP1KbLmUV4H7loXzSCnYY%2BhX3HYBPCM37isDPFbFDpbNBAV7ScVTE99O89nLaiatr2T7X73H7KiX3mXKPCtRaL&X-Amz-Signature=9bdc4b079bcdefd089511e40a1bd9f1ef38a51e7b7e529003998727a80ba377c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBOVHTH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH38nT87lFsItK3t2xwLdzF9PNLejSzAMHqLvPzNIIR1AiEAmbCRxBDPQ%2BiXC%2B1ykYKqPjC72k1WtR3%2F7J2B%2BK6F1oAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLg4c7DpSRexr0U8GyrcA%2B5ZUsorQ6v4CQr8mwAv%2B%2FaEHP2jdMXT0hRaeNXh%2F3cnrhjehM1RqkB7Wq3K6Q9Yhj4UbooAy5lK5K2EFX9Y%2FPaW9%2BKiic6OhbDRQ2j5UQJKenedm1qUCsBXOII8UX5x423u9W7dfgrIHw6GG2NccnMjBmLLkL%2Bwfex%2BwcKA8j%2FeTB7IBPpPB7Z%2BYVMMI%2BL4E93azopmMfDYeMcGsSRAUV%2FaRUbAU2zIYenAxU5Kq55W0Iwxteqgup%2BVnpPQd0zfNPvqPUijBVPWvlMmyFRKVWmcoiUhyN%2B3rRGbFNEP0ZtqqY6Kdi7XEqfpVoziqcvQeApdgsKkFWu3Lwl1hu7D8K8S%2FO8o1q45yGS0MTqiaIaVEaCGTBeuajMDEp0s3nf74GffGaBFWAgYkr2Z%2FoypFDOuu4j6CVSDtFGrv3U%2BaliDyDtBLccN9uGIZb4ibJdGRtCXcT9HYsVnjOmSR3PKTkawMBUc%2BUUq69u4%2FGhc3Hprxxtzs2XJfdkHDQnnqSzbTsbN%2FEVM5hyCvinFZmV3I81jKCrdCjL8tIE2B7BOCPqu1R3jmm3z6r1okKgTlKXWGTGAL9HDzC%2FE6CDMYPBKVtl%2B3tAqdsKydNXXEZB1oNeoHmQHk8AF1O6CRP7zMKvAxMQGOqUBJL6cd5n9IiZAEAjDMi28Nagl%2Fz25fXb8AE7cWVl9A0hMuYrlFxs2KpBHCzZsr5ubJRoGdFrWoaSShe%2BA7Rf5qLBxRD0rkZD%2BnG1LnKvtxf2EjJCUQmOMMoJSRvlPYvBG3N4U1JQP1KbLmUV4H7loXzSCnYY%2BhX3HYBPCM37isDPFbFDpbNBAV7ScVTE99O89nLaiatr2T7X73H7KiX3mXKPCtRaL&X-Amz-Signature=e75dba31880f2ff809c0ed20627d05dc9954211f585e00bfcfd3a6219a4913fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBOVHTH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH38nT87lFsItK3t2xwLdzF9PNLejSzAMHqLvPzNIIR1AiEAmbCRxBDPQ%2BiXC%2B1ykYKqPjC72k1WtR3%2F7J2B%2BK6F1oAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLg4c7DpSRexr0U8GyrcA%2B5ZUsorQ6v4CQr8mwAv%2B%2FaEHP2jdMXT0hRaeNXh%2F3cnrhjehM1RqkB7Wq3K6Q9Yhj4UbooAy5lK5K2EFX9Y%2FPaW9%2BKiic6OhbDRQ2j5UQJKenedm1qUCsBXOII8UX5x423u9W7dfgrIHw6GG2NccnMjBmLLkL%2Bwfex%2BwcKA8j%2FeTB7IBPpPB7Z%2BYVMMI%2BL4E93azopmMfDYeMcGsSRAUV%2FaRUbAU2zIYenAxU5Kq55W0Iwxteqgup%2BVnpPQd0zfNPvqPUijBVPWvlMmyFRKVWmcoiUhyN%2B3rRGbFNEP0ZtqqY6Kdi7XEqfpVoziqcvQeApdgsKkFWu3Lwl1hu7D8K8S%2FO8o1q45yGS0MTqiaIaVEaCGTBeuajMDEp0s3nf74GffGaBFWAgYkr2Z%2FoypFDOuu4j6CVSDtFGrv3U%2BaliDyDtBLccN9uGIZb4ibJdGRtCXcT9HYsVnjOmSR3PKTkawMBUc%2BUUq69u4%2FGhc3Hprxxtzs2XJfdkHDQnnqSzbTsbN%2FEVM5hyCvinFZmV3I81jKCrdCjL8tIE2B7BOCPqu1R3jmm3z6r1okKgTlKXWGTGAL9HDzC%2FE6CDMYPBKVtl%2B3tAqdsKydNXXEZB1oNeoHmQHk8AF1O6CRP7zMKvAxMQGOqUBJL6cd5n9IiZAEAjDMi28Nagl%2Fz25fXb8AE7cWVl9A0hMuYrlFxs2KpBHCzZsr5ubJRoGdFrWoaSShe%2BA7Rf5qLBxRD0rkZD%2BnG1LnKvtxf2EjJCUQmOMMoJSRvlPYvBG3N4U1JQP1KbLmUV4H7loXzSCnYY%2BhX3HYBPCM37isDPFbFDpbNBAV7ScVTE99O89nLaiatr2T7X73H7KiX3mXKPCtRaL&X-Amz-Signature=7ae1f25f69c2cf15c70398bccdee8a539a7f4711737afe2f4e6319d71f032ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBOVHTH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH38nT87lFsItK3t2xwLdzF9PNLejSzAMHqLvPzNIIR1AiEAmbCRxBDPQ%2BiXC%2B1ykYKqPjC72k1WtR3%2F7J2B%2BK6F1oAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLg4c7DpSRexr0U8GyrcA%2B5ZUsorQ6v4CQr8mwAv%2B%2FaEHP2jdMXT0hRaeNXh%2F3cnrhjehM1RqkB7Wq3K6Q9Yhj4UbooAy5lK5K2EFX9Y%2FPaW9%2BKiic6OhbDRQ2j5UQJKenedm1qUCsBXOII8UX5x423u9W7dfgrIHw6GG2NccnMjBmLLkL%2Bwfex%2BwcKA8j%2FeTB7IBPpPB7Z%2BYVMMI%2BL4E93azopmMfDYeMcGsSRAUV%2FaRUbAU2zIYenAxU5Kq55W0Iwxteqgup%2BVnpPQd0zfNPvqPUijBVPWvlMmyFRKVWmcoiUhyN%2B3rRGbFNEP0ZtqqY6Kdi7XEqfpVoziqcvQeApdgsKkFWu3Lwl1hu7D8K8S%2FO8o1q45yGS0MTqiaIaVEaCGTBeuajMDEp0s3nf74GffGaBFWAgYkr2Z%2FoypFDOuu4j6CVSDtFGrv3U%2BaliDyDtBLccN9uGIZb4ibJdGRtCXcT9HYsVnjOmSR3PKTkawMBUc%2BUUq69u4%2FGhc3Hprxxtzs2XJfdkHDQnnqSzbTsbN%2FEVM5hyCvinFZmV3I81jKCrdCjL8tIE2B7BOCPqu1R3jmm3z6r1okKgTlKXWGTGAL9HDzC%2FE6CDMYPBKVtl%2B3tAqdsKydNXXEZB1oNeoHmQHk8AF1O6CRP7zMKvAxMQGOqUBJL6cd5n9IiZAEAjDMi28Nagl%2Fz25fXb8AE7cWVl9A0hMuYrlFxs2KpBHCzZsr5ubJRoGdFrWoaSShe%2BA7Rf5qLBxRD0rkZD%2BnG1LnKvtxf2EjJCUQmOMMoJSRvlPYvBG3N4U1JQP1KbLmUV4H7loXzSCnYY%2BhX3HYBPCM37isDPFbFDpbNBAV7ScVTE99O89nLaiatr2T7X73H7KiX3mXKPCtRaL&X-Amz-Signature=994c1b7779dabf70733d19db3ef6c033f36c675ccfc62adc724bb231e1d1c424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBOVHTH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH38nT87lFsItK3t2xwLdzF9PNLejSzAMHqLvPzNIIR1AiEAmbCRxBDPQ%2BiXC%2B1ykYKqPjC72k1WtR3%2F7J2B%2BK6F1oAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLg4c7DpSRexr0U8GyrcA%2B5ZUsorQ6v4CQr8mwAv%2B%2FaEHP2jdMXT0hRaeNXh%2F3cnrhjehM1RqkB7Wq3K6Q9Yhj4UbooAy5lK5K2EFX9Y%2FPaW9%2BKiic6OhbDRQ2j5UQJKenedm1qUCsBXOII8UX5x423u9W7dfgrIHw6GG2NccnMjBmLLkL%2Bwfex%2BwcKA8j%2FeTB7IBPpPB7Z%2BYVMMI%2BL4E93azopmMfDYeMcGsSRAUV%2FaRUbAU2zIYenAxU5Kq55W0Iwxteqgup%2BVnpPQd0zfNPvqPUijBVPWvlMmyFRKVWmcoiUhyN%2B3rRGbFNEP0ZtqqY6Kdi7XEqfpVoziqcvQeApdgsKkFWu3Lwl1hu7D8K8S%2FO8o1q45yGS0MTqiaIaVEaCGTBeuajMDEp0s3nf74GffGaBFWAgYkr2Z%2FoypFDOuu4j6CVSDtFGrv3U%2BaliDyDtBLccN9uGIZb4ibJdGRtCXcT9HYsVnjOmSR3PKTkawMBUc%2BUUq69u4%2FGhc3Hprxxtzs2XJfdkHDQnnqSzbTsbN%2FEVM5hyCvinFZmV3I81jKCrdCjL8tIE2B7BOCPqu1R3jmm3z6r1okKgTlKXWGTGAL9HDzC%2FE6CDMYPBKVtl%2B3tAqdsKydNXXEZB1oNeoHmQHk8AF1O6CRP7zMKvAxMQGOqUBJL6cd5n9IiZAEAjDMi28Nagl%2Fz25fXb8AE7cWVl9A0hMuYrlFxs2KpBHCzZsr5ubJRoGdFrWoaSShe%2BA7Rf5qLBxRD0rkZD%2BnG1LnKvtxf2EjJCUQmOMMoJSRvlPYvBG3N4U1JQP1KbLmUV4H7loXzSCnYY%2BhX3HYBPCM37isDPFbFDpbNBAV7ScVTE99O89nLaiatr2T7X73H7KiX3mXKPCtRaL&X-Amz-Signature=4ab15d8b7ef6631ed19f5e6b39cc9e41c6b7c0801bb1bf6c858092b6f8a92197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBOVHTH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH38nT87lFsItK3t2xwLdzF9PNLejSzAMHqLvPzNIIR1AiEAmbCRxBDPQ%2BiXC%2B1ykYKqPjC72k1WtR3%2F7J2B%2BK6F1oAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLg4c7DpSRexr0U8GyrcA%2B5ZUsorQ6v4CQr8mwAv%2B%2FaEHP2jdMXT0hRaeNXh%2F3cnrhjehM1RqkB7Wq3K6Q9Yhj4UbooAy5lK5K2EFX9Y%2FPaW9%2BKiic6OhbDRQ2j5UQJKenedm1qUCsBXOII8UX5x423u9W7dfgrIHw6GG2NccnMjBmLLkL%2Bwfex%2BwcKA8j%2FeTB7IBPpPB7Z%2BYVMMI%2BL4E93azopmMfDYeMcGsSRAUV%2FaRUbAU2zIYenAxU5Kq55W0Iwxteqgup%2BVnpPQd0zfNPvqPUijBVPWvlMmyFRKVWmcoiUhyN%2B3rRGbFNEP0ZtqqY6Kdi7XEqfpVoziqcvQeApdgsKkFWu3Lwl1hu7D8K8S%2FO8o1q45yGS0MTqiaIaVEaCGTBeuajMDEp0s3nf74GffGaBFWAgYkr2Z%2FoypFDOuu4j6CVSDtFGrv3U%2BaliDyDtBLccN9uGIZb4ibJdGRtCXcT9HYsVnjOmSR3PKTkawMBUc%2BUUq69u4%2FGhc3Hprxxtzs2XJfdkHDQnnqSzbTsbN%2FEVM5hyCvinFZmV3I81jKCrdCjL8tIE2B7BOCPqu1R3jmm3z6r1okKgTlKXWGTGAL9HDzC%2FE6CDMYPBKVtl%2B3tAqdsKydNXXEZB1oNeoHmQHk8AF1O6CRP7zMKvAxMQGOqUBJL6cd5n9IiZAEAjDMi28Nagl%2Fz25fXb8AE7cWVl9A0hMuYrlFxs2KpBHCzZsr5ubJRoGdFrWoaSShe%2BA7Rf5qLBxRD0rkZD%2BnG1LnKvtxf2EjJCUQmOMMoJSRvlPYvBG3N4U1JQP1KbLmUV4H7loXzSCnYY%2BhX3HYBPCM37isDPFbFDpbNBAV7ScVTE99O89nLaiatr2T7X73H7KiX3mXKPCtRaL&X-Amz-Signature=fea8f964049a71643ad461fea66eadba6e7005510c826f13d39e35924e19a02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
