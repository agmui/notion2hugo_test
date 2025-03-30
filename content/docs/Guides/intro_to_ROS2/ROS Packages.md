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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQITFWVH%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD6ithNfLhfn%2BRgKu80oyZDhEDyUK9vDs5th8NvkRpAqQIgB2KoAZQ0NE3kTpWUIn5buQQ5Fg0xEnFwdUkdHrofWzEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTSttkaXz4veFsZZircA4eFUFtKy5l04ZBMkxFpRGT95a6XHAT%2FVDwyJc%2FVl8EHDddvMjZW60Xec8wEcEinuuFECVvnLy6HOVJjPkF0EsObE3J4WCc1FTZSQEPYzuDURyvWi75QtHHPBM47CPgCHb4fs89UKinOP9oFDUZ5mANfITW44w%2Bb2%2BAiEJb2oAJJjtpbMhxZ6JYnxU9Fk1MjGTE1Em%2Bol6azhgKlv1ZhpT01qTeuKfTnQzKVNEgWZpB3wwehdUx3lYITtBgobF50hLGuER5QC14nMUbJmyq8pVAKg0nSUL%2BKsMRsW0CJuyq8DNNs5J4QVAG6z2zJtX2wbE%2FvVo88l3TvjmVOT1tonIZfd%2BAx3bj%2BPnDQNRonQgS2pVdDeSIUU0kFEBO%2FaExsijcVJv82iGX96x5Z6sBSylvHEwrn%2BrELoFPtGcIdiihzhMkHukCsFxSfYg8EPSdx1XE5pZ9KvuOgIvUWNQ3z%2F%2B8uHKlGMbSt587wzabxS8%2BSkbPxPmqSSpNgBGWhzBLkqj0zQQpkwgfHfFVFueTJbmKXQLONW87WdntXV3UC%2FBp79qzcoGpyTBDR24Cx2Vg0RqeFegyBLjxfXbeO%2F0%2F0xTyeuz4nLjF6C5i3rH%2Bv27N046%2BAjs7q9jTPwqQMMIC2pr8GOqUB%2BX4FC8InvYVPdRA1xpCFwRjKj3EIxCU0%2FZVTVNBDr%2FLXtIecz2NPhs%2Fk9zP6xjNVzNxfd1t9CVHspHgd9AC6kqsV%2FEOq8A4U3KZt622t7Cs7mUD5cion8%2FjDcq5mz5LChBEGBILiqd%2BPwgctXhmji9xhTOFksefK7W1Fx%2FkMtyskH1BLWRpZ1Nqgb1OE7f%2FrncAUHl7ILuoXqkpx1MUIIk0H1sXb&X-Amz-Signature=a5e9b6979f95c4fda86d8541c9a99a9a6fe4c176828ab11e18ddc10682fed2f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQITFWVH%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD6ithNfLhfn%2BRgKu80oyZDhEDyUK9vDs5th8NvkRpAqQIgB2KoAZQ0NE3kTpWUIn5buQQ5Fg0xEnFwdUkdHrofWzEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTSttkaXz4veFsZZircA4eFUFtKy5l04ZBMkxFpRGT95a6XHAT%2FVDwyJc%2FVl8EHDddvMjZW60Xec8wEcEinuuFECVvnLy6HOVJjPkF0EsObE3J4WCc1FTZSQEPYzuDURyvWi75QtHHPBM47CPgCHb4fs89UKinOP9oFDUZ5mANfITW44w%2Bb2%2BAiEJb2oAJJjtpbMhxZ6JYnxU9Fk1MjGTE1Em%2Bol6azhgKlv1ZhpT01qTeuKfTnQzKVNEgWZpB3wwehdUx3lYITtBgobF50hLGuER5QC14nMUbJmyq8pVAKg0nSUL%2BKsMRsW0CJuyq8DNNs5J4QVAG6z2zJtX2wbE%2FvVo88l3TvjmVOT1tonIZfd%2BAx3bj%2BPnDQNRonQgS2pVdDeSIUU0kFEBO%2FaExsijcVJv82iGX96x5Z6sBSylvHEwrn%2BrELoFPtGcIdiihzhMkHukCsFxSfYg8EPSdx1XE5pZ9KvuOgIvUWNQ3z%2F%2B8uHKlGMbSt587wzabxS8%2BSkbPxPmqSSpNgBGWhzBLkqj0zQQpkwgfHfFVFueTJbmKXQLONW87WdntXV3UC%2FBp79qzcoGpyTBDR24Cx2Vg0RqeFegyBLjxfXbeO%2F0%2F0xTyeuz4nLjF6C5i3rH%2Bv27N046%2BAjs7q9jTPwqQMMIC2pr8GOqUB%2BX4FC8InvYVPdRA1xpCFwRjKj3EIxCU0%2FZVTVNBDr%2FLXtIecz2NPhs%2Fk9zP6xjNVzNxfd1t9CVHspHgd9AC6kqsV%2FEOq8A4U3KZt622t7Cs7mUD5cion8%2FjDcq5mz5LChBEGBILiqd%2BPwgctXhmji9xhTOFksefK7W1Fx%2FkMtyskH1BLWRpZ1Nqgb1OE7f%2FrncAUHl7ILuoXqkpx1MUIIk0H1sXb&X-Amz-Signature=bbd0c73dfd773a2c67a6d9ff106a6ac3fa9240093b48bd19299fed5f2a9b517d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQITFWVH%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD6ithNfLhfn%2BRgKu80oyZDhEDyUK9vDs5th8NvkRpAqQIgB2KoAZQ0NE3kTpWUIn5buQQ5Fg0xEnFwdUkdHrofWzEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTSttkaXz4veFsZZircA4eFUFtKy5l04ZBMkxFpRGT95a6XHAT%2FVDwyJc%2FVl8EHDddvMjZW60Xec8wEcEinuuFECVvnLy6HOVJjPkF0EsObE3J4WCc1FTZSQEPYzuDURyvWi75QtHHPBM47CPgCHb4fs89UKinOP9oFDUZ5mANfITW44w%2Bb2%2BAiEJb2oAJJjtpbMhxZ6JYnxU9Fk1MjGTE1Em%2Bol6azhgKlv1ZhpT01qTeuKfTnQzKVNEgWZpB3wwehdUx3lYITtBgobF50hLGuER5QC14nMUbJmyq8pVAKg0nSUL%2BKsMRsW0CJuyq8DNNs5J4QVAG6z2zJtX2wbE%2FvVo88l3TvjmVOT1tonIZfd%2BAx3bj%2BPnDQNRonQgS2pVdDeSIUU0kFEBO%2FaExsijcVJv82iGX96x5Z6sBSylvHEwrn%2BrELoFPtGcIdiihzhMkHukCsFxSfYg8EPSdx1XE5pZ9KvuOgIvUWNQ3z%2F%2B8uHKlGMbSt587wzabxS8%2BSkbPxPmqSSpNgBGWhzBLkqj0zQQpkwgfHfFVFueTJbmKXQLONW87WdntXV3UC%2FBp79qzcoGpyTBDR24Cx2Vg0RqeFegyBLjxfXbeO%2F0%2F0xTyeuz4nLjF6C5i3rH%2Bv27N046%2BAjs7q9jTPwqQMMIC2pr8GOqUB%2BX4FC8InvYVPdRA1xpCFwRjKj3EIxCU0%2FZVTVNBDr%2FLXtIecz2NPhs%2Fk9zP6xjNVzNxfd1t9CVHspHgd9AC6kqsV%2FEOq8A4U3KZt622t7Cs7mUD5cion8%2FjDcq5mz5LChBEGBILiqd%2BPwgctXhmji9xhTOFksefK7W1Fx%2FkMtyskH1BLWRpZ1Nqgb1OE7f%2FrncAUHl7ILuoXqkpx1MUIIk0H1sXb&X-Amz-Signature=84219342007a8bf6a5d23b6a4d89799c654b66c9130fec4d945d1b50a59b331a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQITFWVH%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD6ithNfLhfn%2BRgKu80oyZDhEDyUK9vDs5th8NvkRpAqQIgB2KoAZQ0NE3kTpWUIn5buQQ5Fg0xEnFwdUkdHrofWzEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTSttkaXz4veFsZZircA4eFUFtKy5l04ZBMkxFpRGT95a6XHAT%2FVDwyJc%2FVl8EHDddvMjZW60Xec8wEcEinuuFECVvnLy6HOVJjPkF0EsObE3J4WCc1FTZSQEPYzuDURyvWi75QtHHPBM47CPgCHb4fs89UKinOP9oFDUZ5mANfITW44w%2Bb2%2BAiEJb2oAJJjtpbMhxZ6JYnxU9Fk1MjGTE1Em%2Bol6azhgKlv1ZhpT01qTeuKfTnQzKVNEgWZpB3wwehdUx3lYITtBgobF50hLGuER5QC14nMUbJmyq8pVAKg0nSUL%2BKsMRsW0CJuyq8DNNs5J4QVAG6z2zJtX2wbE%2FvVo88l3TvjmVOT1tonIZfd%2BAx3bj%2BPnDQNRonQgS2pVdDeSIUU0kFEBO%2FaExsijcVJv82iGX96x5Z6sBSylvHEwrn%2BrELoFPtGcIdiihzhMkHukCsFxSfYg8EPSdx1XE5pZ9KvuOgIvUWNQ3z%2F%2B8uHKlGMbSt587wzabxS8%2BSkbPxPmqSSpNgBGWhzBLkqj0zQQpkwgfHfFVFueTJbmKXQLONW87WdntXV3UC%2FBp79qzcoGpyTBDR24Cx2Vg0RqeFegyBLjxfXbeO%2F0%2F0xTyeuz4nLjF6C5i3rH%2Bv27N046%2BAjs7q9jTPwqQMMIC2pr8GOqUB%2BX4FC8InvYVPdRA1xpCFwRjKj3EIxCU0%2FZVTVNBDr%2FLXtIecz2NPhs%2Fk9zP6xjNVzNxfd1t9CVHspHgd9AC6kqsV%2FEOq8A4U3KZt622t7Cs7mUD5cion8%2FjDcq5mz5LChBEGBILiqd%2BPwgctXhmji9xhTOFksefK7W1Fx%2FkMtyskH1BLWRpZ1Nqgb1OE7f%2FrncAUHl7ILuoXqkpx1MUIIk0H1sXb&X-Amz-Signature=da6267933c6d3191c58031ae6c90c0c740c0ee332f2dbd449456aa0f027345a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQITFWVH%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD6ithNfLhfn%2BRgKu80oyZDhEDyUK9vDs5th8NvkRpAqQIgB2KoAZQ0NE3kTpWUIn5buQQ5Fg0xEnFwdUkdHrofWzEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTSttkaXz4veFsZZircA4eFUFtKy5l04ZBMkxFpRGT95a6XHAT%2FVDwyJc%2FVl8EHDddvMjZW60Xec8wEcEinuuFECVvnLy6HOVJjPkF0EsObE3J4WCc1FTZSQEPYzuDURyvWi75QtHHPBM47CPgCHb4fs89UKinOP9oFDUZ5mANfITW44w%2Bb2%2BAiEJb2oAJJjtpbMhxZ6JYnxU9Fk1MjGTE1Em%2Bol6azhgKlv1ZhpT01qTeuKfTnQzKVNEgWZpB3wwehdUx3lYITtBgobF50hLGuER5QC14nMUbJmyq8pVAKg0nSUL%2BKsMRsW0CJuyq8DNNs5J4QVAG6z2zJtX2wbE%2FvVo88l3TvjmVOT1tonIZfd%2BAx3bj%2BPnDQNRonQgS2pVdDeSIUU0kFEBO%2FaExsijcVJv82iGX96x5Z6sBSylvHEwrn%2BrELoFPtGcIdiihzhMkHukCsFxSfYg8EPSdx1XE5pZ9KvuOgIvUWNQ3z%2F%2B8uHKlGMbSt587wzabxS8%2BSkbPxPmqSSpNgBGWhzBLkqj0zQQpkwgfHfFVFueTJbmKXQLONW87WdntXV3UC%2FBp79qzcoGpyTBDR24Cx2Vg0RqeFegyBLjxfXbeO%2F0%2F0xTyeuz4nLjF6C5i3rH%2Bv27N046%2BAjs7q9jTPwqQMMIC2pr8GOqUB%2BX4FC8InvYVPdRA1xpCFwRjKj3EIxCU0%2FZVTVNBDr%2FLXtIecz2NPhs%2Fk9zP6xjNVzNxfd1t9CVHspHgd9AC6kqsV%2FEOq8A4U3KZt622t7Cs7mUD5cion8%2FjDcq5mz5LChBEGBILiqd%2BPwgctXhmji9xhTOFksefK7W1Fx%2FkMtyskH1BLWRpZ1Nqgb1OE7f%2FrncAUHl7ILuoXqkpx1MUIIk0H1sXb&X-Amz-Signature=2ace44535d374f267c8446fdde8eeb9d5e01e4a95f3a70ec867868c3dacda31e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQITFWVH%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD6ithNfLhfn%2BRgKu80oyZDhEDyUK9vDs5th8NvkRpAqQIgB2KoAZQ0NE3kTpWUIn5buQQ5Fg0xEnFwdUkdHrofWzEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTSttkaXz4veFsZZircA4eFUFtKy5l04ZBMkxFpRGT95a6XHAT%2FVDwyJc%2FVl8EHDddvMjZW60Xec8wEcEinuuFECVvnLy6HOVJjPkF0EsObE3J4WCc1FTZSQEPYzuDURyvWi75QtHHPBM47CPgCHb4fs89UKinOP9oFDUZ5mANfITW44w%2Bb2%2BAiEJb2oAJJjtpbMhxZ6JYnxU9Fk1MjGTE1Em%2Bol6azhgKlv1ZhpT01qTeuKfTnQzKVNEgWZpB3wwehdUx3lYITtBgobF50hLGuER5QC14nMUbJmyq8pVAKg0nSUL%2BKsMRsW0CJuyq8DNNs5J4QVAG6z2zJtX2wbE%2FvVo88l3TvjmVOT1tonIZfd%2BAx3bj%2BPnDQNRonQgS2pVdDeSIUU0kFEBO%2FaExsijcVJv82iGX96x5Z6sBSylvHEwrn%2BrELoFPtGcIdiihzhMkHukCsFxSfYg8EPSdx1XE5pZ9KvuOgIvUWNQ3z%2F%2B8uHKlGMbSt587wzabxS8%2BSkbPxPmqSSpNgBGWhzBLkqj0zQQpkwgfHfFVFueTJbmKXQLONW87WdntXV3UC%2FBp79qzcoGpyTBDR24Cx2Vg0RqeFegyBLjxfXbeO%2F0%2F0xTyeuz4nLjF6C5i3rH%2Bv27N046%2BAjs7q9jTPwqQMMIC2pr8GOqUB%2BX4FC8InvYVPdRA1xpCFwRjKj3EIxCU0%2FZVTVNBDr%2FLXtIecz2NPhs%2Fk9zP6xjNVzNxfd1t9CVHspHgd9AC6kqsV%2FEOq8A4U3KZt622t7Cs7mUD5cion8%2FjDcq5mz5LChBEGBILiqd%2BPwgctXhmji9xhTOFksefK7W1Fx%2FkMtyskH1BLWRpZ1Nqgb1OE7f%2FrncAUHl7ILuoXqkpx1MUIIk0H1sXb&X-Amz-Signature=26bc7903373b1956e68149a11ad556edaadc611c5a9dbd66b3fb6340619c488a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQITFWVH%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD6ithNfLhfn%2BRgKu80oyZDhEDyUK9vDs5th8NvkRpAqQIgB2KoAZQ0NE3kTpWUIn5buQQ5Fg0xEnFwdUkdHrofWzEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTSttkaXz4veFsZZircA4eFUFtKy5l04ZBMkxFpRGT95a6XHAT%2FVDwyJc%2FVl8EHDddvMjZW60Xec8wEcEinuuFECVvnLy6HOVJjPkF0EsObE3J4WCc1FTZSQEPYzuDURyvWi75QtHHPBM47CPgCHb4fs89UKinOP9oFDUZ5mANfITW44w%2Bb2%2BAiEJb2oAJJjtpbMhxZ6JYnxU9Fk1MjGTE1Em%2Bol6azhgKlv1ZhpT01qTeuKfTnQzKVNEgWZpB3wwehdUx3lYITtBgobF50hLGuER5QC14nMUbJmyq8pVAKg0nSUL%2BKsMRsW0CJuyq8DNNs5J4QVAG6z2zJtX2wbE%2FvVo88l3TvjmVOT1tonIZfd%2BAx3bj%2BPnDQNRonQgS2pVdDeSIUU0kFEBO%2FaExsijcVJv82iGX96x5Z6sBSylvHEwrn%2BrELoFPtGcIdiihzhMkHukCsFxSfYg8EPSdx1XE5pZ9KvuOgIvUWNQ3z%2F%2B8uHKlGMbSt587wzabxS8%2BSkbPxPmqSSpNgBGWhzBLkqj0zQQpkwgfHfFVFueTJbmKXQLONW87WdntXV3UC%2FBp79qzcoGpyTBDR24Cx2Vg0RqeFegyBLjxfXbeO%2F0%2F0xTyeuz4nLjF6C5i3rH%2Bv27N046%2BAjs7q9jTPwqQMMIC2pr8GOqUB%2BX4FC8InvYVPdRA1xpCFwRjKj3EIxCU0%2FZVTVNBDr%2FLXtIecz2NPhs%2Fk9zP6xjNVzNxfd1t9CVHspHgd9AC6kqsV%2FEOq8A4U3KZt622t7Cs7mUD5cion8%2FjDcq5mz5LChBEGBILiqd%2BPwgctXhmji9xhTOFksefK7W1Fx%2FkMtyskH1BLWRpZ1Nqgb1OE7f%2FrncAUHl7ILuoXqkpx1MUIIk0H1sXb&X-Amz-Signature=6d7937926813d0f63380da798932c43291d51e18bf6a13d61f6aa080b2a1c4a2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
