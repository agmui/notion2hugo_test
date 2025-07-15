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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEH6FSFP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCBxvBCsO%2BFuhAWQsd%2By3sAYVmcrhg4vADbdcU6L2uilQIgSEK29FBSbdW%2FbAKZg80rxJ0bIK3xqdEe5A09ahIaGv4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFkmUdWH8t8bQaCnsyrcA7NWIZ22Qu%2BxjBZrjYCGslp1xcnKtnVmquDprJrqAmVy6%2FcBX2ZDAPURcs%2F5f76CbrMR0RLQSOizPedF6weD48zhO1I8tmQqed%2BogdFwg5nOf%2B0RRf4dDcVxgWMyMClQ8Rm8KGSFwPSd8fH2ROtij1vBKoPHNeYhRK5ajv6nWLBGjhxw7xc2VVtfon0FzreGZIj1u5XvSHdU8e9gaxdk0UuknNwEJy7HgLuotl6eM0ywEgX0T%2BQek20yEj5MRvbI1Rxoje1oKFJ93hckM33zHOUXKPz8V9u3O7a7K5OrTxTBXu4Y9HsamV%2FuA9BvtWScI%2B2GGv%2B2vHh%2BLSnYTieHh3QlYXeHLI2vBb4QTYTtiNzdIGgoplKoxttENpQoJ1ppJqSonl2aN7c8ycki1sW2r%2BXK7bg5B7jiqlP2z9Fid1Eq9X6XeRdz70yObE43NN7yciYUHZuQ2c%2F3oeiSMvFQrrsRKNJaW5%2F6TrTUE4VC3eeb78LS10jyLhVi7zIKJK3bqFmDg2iou5s5YXT%2BII6v2jN481SgWZ4m5k2tvuvCTeZcCAFwaaQfqz7Ux1PifoUJCUhilEvxnGKKzp64g8mfLFYL9qlGgNxeqyFMdX6V3PgtJJiwwDz7zQLhukoTMKrb2cMGOqUBGo9Dolpsf40YfSxi8J3JLXxDHycKDOqvuYLE3M2MBLoSKRYYKOTk2jJjKukbI%2FIktm8lTRWy4zb4zpOLF8u%2FmOMAVreqZme26mXkwBnY7WGsO%2BYyVyOG70B3SHwnrKT1NMag%2BRE40NtQMw%2FkmLCxIZgw6Edyn6XK87BIP%2B9XqJfpW0NnyBojEvz%2FQljhLc2MiYZKmSnLDGoKGqKOp91BaH2vPkh2&X-Amz-Signature=710b01f527f398dba7a311d8a889eac142cd1d85b39af17a9c0ac512161b1767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEH6FSFP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCBxvBCsO%2BFuhAWQsd%2By3sAYVmcrhg4vADbdcU6L2uilQIgSEK29FBSbdW%2FbAKZg80rxJ0bIK3xqdEe5A09ahIaGv4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFkmUdWH8t8bQaCnsyrcA7NWIZ22Qu%2BxjBZrjYCGslp1xcnKtnVmquDprJrqAmVy6%2FcBX2ZDAPURcs%2F5f76CbrMR0RLQSOizPedF6weD48zhO1I8tmQqed%2BogdFwg5nOf%2B0RRf4dDcVxgWMyMClQ8Rm8KGSFwPSd8fH2ROtij1vBKoPHNeYhRK5ajv6nWLBGjhxw7xc2VVtfon0FzreGZIj1u5XvSHdU8e9gaxdk0UuknNwEJy7HgLuotl6eM0ywEgX0T%2BQek20yEj5MRvbI1Rxoje1oKFJ93hckM33zHOUXKPz8V9u3O7a7K5OrTxTBXu4Y9HsamV%2FuA9BvtWScI%2B2GGv%2B2vHh%2BLSnYTieHh3QlYXeHLI2vBb4QTYTtiNzdIGgoplKoxttENpQoJ1ppJqSonl2aN7c8ycki1sW2r%2BXK7bg5B7jiqlP2z9Fid1Eq9X6XeRdz70yObE43NN7yciYUHZuQ2c%2F3oeiSMvFQrrsRKNJaW5%2F6TrTUE4VC3eeb78LS10jyLhVi7zIKJK3bqFmDg2iou5s5YXT%2BII6v2jN481SgWZ4m5k2tvuvCTeZcCAFwaaQfqz7Ux1PifoUJCUhilEvxnGKKzp64g8mfLFYL9qlGgNxeqyFMdX6V3PgtJJiwwDz7zQLhukoTMKrb2cMGOqUBGo9Dolpsf40YfSxi8J3JLXxDHycKDOqvuYLE3M2MBLoSKRYYKOTk2jJjKukbI%2FIktm8lTRWy4zb4zpOLF8u%2FmOMAVreqZme26mXkwBnY7WGsO%2BYyVyOG70B3SHwnrKT1NMag%2BRE40NtQMw%2FkmLCxIZgw6Edyn6XK87BIP%2B9XqJfpW0NnyBojEvz%2FQljhLc2MiYZKmSnLDGoKGqKOp91BaH2vPkh2&X-Amz-Signature=b0e9633a0c7f39fc99039fc2ca538d777b8c4bff85b7398051941eb8b206fa34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEH6FSFP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCBxvBCsO%2BFuhAWQsd%2By3sAYVmcrhg4vADbdcU6L2uilQIgSEK29FBSbdW%2FbAKZg80rxJ0bIK3xqdEe5A09ahIaGv4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFkmUdWH8t8bQaCnsyrcA7NWIZ22Qu%2BxjBZrjYCGslp1xcnKtnVmquDprJrqAmVy6%2FcBX2ZDAPURcs%2F5f76CbrMR0RLQSOizPedF6weD48zhO1I8tmQqed%2BogdFwg5nOf%2B0RRf4dDcVxgWMyMClQ8Rm8KGSFwPSd8fH2ROtij1vBKoPHNeYhRK5ajv6nWLBGjhxw7xc2VVtfon0FzreGZIj1u5XvSHdU8e9gaxdk0UuknNwEJy7HgLuotl6eM0ywEgX0T%2BQek20yEj5MRvbI1Rxoje1oKFJ93hckM33zHOUXKPz8V9u3O7a7K5OrTxTBXu4Y9HsamV%2FuA9BvtWScI%2B2GGv%2B2vHh%2BLSnYTieHh3QlYXeHLI2vBb4QTYTtiNzdIGgoplKoxttENpQoJ1ppJqSonl2aN7c8ycki1sW2r%2BXK7bg5B7jiqlP2z9Fid1Eq9X6XeRdz70yObE43NN7yciYUHZuQ2c%2F3oeiSMvFQrrsRKNJaW5%2F6TrTUE4VC3eeb78LS10jyLhVi7zIKJK3bqFmDg2iou5s5YXT%2BII6v2jN481SgWZ4m5k2tvuvCTeZcCAFwaaQfqz7Ux1PifoUJCUhilEvxnGKKzp64g8mfLFYL9qlGgNxeqyFMdX6V3PgtJJiwwDz7zQLhukoTMKrb2cMGOqUBGo9Dolpsf40YfSxi8J3JLXxDHycKDOqvuYLE3M2MBLoSKRYYKOTk2jJjKukbI%2FIktm8lTRWy4zb4zpOLF8u%2FmOMAVreqZme26mXkwBnY7WGsO%2BYyVyOG70B3SHwnrKT1NMag%2BRE40NtQMw%2FkmLCxIZgw6Edyn6XK87BIP%2B9XqJfpW0NnyBojEvz%2FQljhLc2MiYZKmSnLDGoKGqKOp91BaH2vPkh2&X-Amz-Signature=cd00f7e7745aa0c4702180104623a52b8ff9955deb108830b8fcee0947977b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEH6FSFP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCBxvBCsO%2BFuhAWQsd%2By3sAYVmcrhg4vADbdcU6L2uilQIgSEK29FBSbdW%2FbAKZg80rxJ0bIK3xqdEe5A09ahIaGv4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFkmUdWH8t8bQaCnsyrcA7NWIZ22Qu%2BxjBZrjYCGslp1xcnKtnVmquDprJrqAmVy6%2FcBX2ZDAPURcs%2F5f76CbrMR0RLQSOizPedF6weD48zhO1I8tmQqed%2BogdFwg5nOf%2B0RRf4dDcVxgWMyMClQ8Rm8KGSFwPSd8fH2ROtij1vBKoPHNeYhRK5ajv6nWLBGjhxw7xc2VVtfon0FzreGZIj1u5XvSHdU8e9gaxdk0UuknNwEJy7HgLuotl6eM0ywEgX0T%2BQek20yEj5MRvbI1Rxoje1oKFJ93hckM33zHOUXKPz8V9u3O7a7K5OrTxTBXu4Y9HsamV%2FuA9BvtWScI%2B2GGv%2B2vHh%2BLSnYTieHh3QlYXeHLI2vBb4QTYTtiNzdIGgoplKoxttENpQoJ1ppJqSonl2aN7c8ycki1sW2r%2BXK7bg5B7jiqlP2z9Fid1Eq9X6XeRdz70yObE43NN7yciYUHZuQ2c%2F3oeiSMvFQrrsRKNJaW5%2F6TrTUE4VC3eeb78LS10jyLhVi7zIKJK3bqFmDg2iou5s5YXT%2BII6v2jN481SgWZ4m5k2tvuvCTeZcCAFwaaQfqz7Ux1PifoUJCUhilEvxnGKKzp64g8mfLFYL9qlGgNxeqyFMdX6V3PgtJJiwwDz7zQLhukoTMKrb2cMGOqUBGo9Dolpsf40YfSxi8J3JLXxDHycKDOqvuYLE3M2MBLoSKRYYKOTk2jJjKukbI%2FIktm8lTRWy4zb4zpOLF8u%2FmOMAVreqZme26mXkwBnY7WGsO%2BYyVyOG70B3SHwnrKT1NMag%2BRE40NtQMw%2FkmLCxIZgw6Edyn6XK87BIP%2B9XqJfpW0NnyBojEvz%2FQljhLc2MiYZKmSnLDGoKGqKOp91BaH2vPkh2&X-Amz-Signature=aa161fa60d423775a28bbca38313f18cb7d21aba67b7f8a1e30cddd1250486a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEH6FSFP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCBxvBCsO%2BFuhAWQsd%2By3sAYVmcrhg4vADbdcU6L2uilQIgSEK29FBSbdW%2FbAKZg80rxJ0bIK3xqdEe5A09ahIaGv4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFkmUdWH8t8bQaCnsyrcA7NWIZ22Qu%2BxjBZrjYCGslp1xcnKtnVmquDprJrqAmVy6%2FcBX2ZDAPURcs%2F5f76CbrMR0RLQSOizPedF6weD48zhO1I8tmQqed%2BogdFwg5nOf%2B0RRf4dDcVxgWMyMClQ8Rm8KGSFwPSd8fH2ROtij1vBKoPHNeYhRK5ajv6nWLBGjhxw7xc2VVtfon0FzreGZIj1u5XvSHdU8e9gaxdk0UuknNwEJy7HgLuotl6eM0ywEgX0T%2BQek20yEj5MRvbI1Rxoje1oKFJ93hckM33zHOUXKPz8V9u3O7a7K5OrTxTBXu4Y9HsamV%2FuA9BvtWScI%2B2GGv%2B2vHh%2BLSnYTieHh3QlYXeHLI2vBb4QTYTtiNzdIGgoplKoxttENpQoJ1ppJqSonl2aN7c8ycki1sW2r%2BXK7bg5B7jiqlP2z9Fid1Eq9X6XeRdz70yObE43NN7yciYUHZuQ2c%2F3oeiSMvFQrrsRKNJaW5%2F6TrTUE4VC3eeb78LS10jyLhVi7zIKJK3bqFmDg2iou5s5YXT%2BII6v2jN481SgWZ4m5k2tvuvCTeZcCAFwaaQfqz7Ux1PifoUJCUhilEvxnGKKzp64g8mfLFYL9qlGgNxeqyFMdX6V3PgtJJiwwDz7zQLhukoTMKrb2cMGOqUBGo9Dolpsf40YfSxi8J3JLXxDHycKDOqvuYLE3M2MBLoSKRYYKOTk2jJjKukbI%2FIktm8lTRWy4zb4zpOLF8u%2FmOMAVreqZme26mXkwBnY7WGsO%2BYyVyOG70B3SHwnrKT1NMag%2BRE40NtQMw%2FkmLCxIZgw6Edyn6XK87BIP%2B9XqJfpW0NnyBojEvz%2FQljhLc2MiYZKmSnLDGoKGqKOp91BaH2vPkh2&X-Amz-Signature=1f90d2ba050e0e304f5f74a3ee89f97b09d5698af8ba65c67c2648ee02690c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEH6FSFP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCBxvBCsO%2BFuhAWQsd%2By3sAYVmcrhg4vADbdcU6L2uilQIgSEK29FBSbdW%2FbAKZg80rxJ0bIK3xqdEe5A09ahIaGv4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFkmUdWH8t8bQaCnsyrcA7NWIZ22Qu%2BxjBZrjYCGslp1xcnKtnVmquDprJrqAmVy6%2FcBX2ZDAPURcs%2F5f76CbrMR0RLQSOizPedF6weD48zhO1I8tmQqed%2BogdFwg5nOf%2B0RRf4dDcVxgWMyMClQ8Rm8KGSFwPSd8fH2ROtij1vBKoPHNeYhRK5ajv6nWLBGjhxw7xc2VVtfon0FzreGZIj1u5XvSHdU8e9gaxdk0UuknNwEJy7HgLuotl6eM0ywEgX0T%2BQek20yEj5MRvbI1Rxoje1oKFJ93hckM33zHOUXKPz8V9u3O7a7K5OrTxTBXu4Y9HsamV%2FuA9BvtWScI%2B2GGv%2B2vHh%2BLSnYTieHh3QlYXeHLI2vBb4QTYTtiNzdIGgoplKoxttENpQoJ1ppJqSonl2aN7c8ycki1sW2r%2BXK7bg5B7jiqlP2z9Fid1Eq9X6XeRdz70yObE43NN7yciYUHZuQ2c%2F3oeiSMvFQrrsRKNJaW5%2F6TrTUE4VC3eeb78LS10jyLhVi7zIKJK3bqFmDg2iou5s5YXT%2BII6v2jN481SgWZ4m5k2tvuvCTeZcCAFwaaQfqz7Ux1PifoUJCUhilEvxnGKKzp64g8mfLFYL9qlGgNxeqyFMdX6V3PgtJJiwwDz7zQLhukoTMKrb2cMGOqUBGo9Dolpsf40YfSxi8J3JLXxDHycKDOqvuYLE3M2MBLoSKRYYKOTk2jJjKukbI%2FIktm8lTRWy4zb4zpOLF8u%2FmOMAVreqZme26mXkwBnY7WGsO%2BYyVyOG70B3SHwnrKT1NMag%2BRE40NtQMw%2FkmLCxIZgw6Edyn6XK87BIP%2B9XqJfpW0NnyBojEvz%2FQljhLc2MiYZKmSnLDGoKGqKOp91BaH2vPkh2&X-Amz-Signature=5a23db9c710bd33e6a1361283633721a00ddb98abe0de58b96edd98ba57f646a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEH6FSFP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCBxvBCsO%2BFuhAWQsd%2By3sAYVmcrhg4vADbdcU6L2uilQIgSEK29FBSbdW%2FbAKZg80rxJ0bIK3xqdEe5A09ahIaGv4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFkmUdWH8t8bQaCnsyrcA7NWIZ22Qu%2BxjBZrjYCGslp1xcnKtnVmquDprJrqAmVy6%2FcBX2ZDAPURcs%2F5f76CbrMR0RLQSOizPedF6weD48zhO1I8tmQqed%2BogdFwg5nOf%2B0RRf4dDcVxgWMyMClQ8Rm8KGSFwPSd8fH2ROtij1vBKoPHNeYhRK5ajv6nWLBGjhxw7xc2VVtfon0FzreGZIj1u5XvSHdU8e9gaxdk0UuknNwEJy7HgLuotl6eM0ywEgX0T%2BQek20yEj5MRvbI1Rxoje1oKFJ93hckM33zHOUXKPz8V9u3O7a7K5OrTxTBXu4Y9HsamV%2FuA9BvtWScI%2B2GGv%2B2vHh%2BLSnYTieHh3QlYXeHLI2vBb4QTYTtiNzdIGgoplKoxttENpQoJ1ppJqSonl2aN7c8ycki1sW2r%2BXK7bg5B7jiqlP2z9Fid1Eq9X6XeRdz70yObE43NN7yciYUHZuQ2c%2F3oeiSMvFQrrsRKNJaW5%2F6TrTUE4VC3eeb78LS10jyLhVi7zIKJK3bqFmDg2iou5s5YXT%2BII6v2jN481SgWZ4m5k2tvuvCTeZcCAFwaaQfqz7Ux1PifoUJCUhilEvxnGKKzp64g8mfLFYL9qlGgNxeqyFMdX6V3PgtJJiwwDz7zQLhukoTMKrb2cMGOqUBGo9Dolpsf40YfSxi8J3JLXxDHycKDOqvuYLE3M2MBLoSKRYYKOTk2jJjKukbI%2FIktm8lTRWy4zb4zpOLF8u%2FmOMAVreqZme26mXkwBnY7WGsO%2BYyVyOG70B3SHwnrKT1NMag%2BRE40NtQMw%2FkmLCxIZgw6Edyn6XK87BIP%2B9XqJfpW0NnyBojEvz%2FQljhLc2MiYZKmSnLDGoKGqKOp91BaH2vPkh2&X-Amz-Signature=6240595be17e6c6736c5902321ed5184c35349b1da3985b302880bd6685c7a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
