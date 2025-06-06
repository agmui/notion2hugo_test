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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJ6HW2N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA0ovDEzaXToRguBD0AGrcGTSXMLaIX1B%2FKagbUj7ke4AiEAx%2B8AnuZoxXRT4jZffr8tJ1kjr82Cu8vP2Sn7Fk68%2Bb8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGn9OsgypuINFOQCByrcA4gGtu7sH21geLdwyMWcZi3zjlMZGZExjLyCCvs%2FOkmSVie3gSgmZoxfcviKYKpxsfoUdK0oD5yQF45l4uUhfg%2BZiMomhYvXLcbm6yvXgHxUCFl635f1HijbI39WBpHU4JvtNhd4tIQVrn%2FjP5cPECIztecYxhxbrGRuGoeEYRONtU8sZVfL%2BhxVLj3RXa7kPRJcwCkpkdaYgxzSOfcqSZwX6SA50dyolu82%2BIpYffXw9P5MydGun%2B1ajUBhDHCUdHgvBv88wxDN43AB7XNa4B5PgDwQP0ukAhMqbLcGANPMUZXj5dzvFMbLQrIXtXpkF5oXE02olUWWLBVtIYYxBgy7zL5siL79%2BM3kvk42E2yhno9ELxWu%2ByhKUCw3Wo35kznFsSs5nE44Znlal5TGE%2BanTwQ62QeKvQvWAohUIc3ySHf1j7nQ5Xkdlz8msrK2weBufDONXfj%2F%2BeaaAinuJPPbWxEPHypXibfg3E%2Bb4QdMPY%2B31WIz4K%2B8eP8GmiiPm16Yj8WPJFcA4JMN0kmw7gv9KA4Uun1F9luG5mpw834ek6IOpH34cVz41a5Q2cPXREvwEwxAAH4TxBYULpoeJDGgcIYKTxDn6LBQ19H0PdSVcN2SQ9N4TklXHL5SMIypicIGOqUBIrYbfzUpLrKRUSXBChjWnSBgoTEbcn7pmobjA8yV75D8ym5C8Rt9mbYItqBe3%2B0W7qSxI5AyU6%2BrzpaAfrTB8VBwHy%2F51%2FuwqJ4X8%2FDoNO3ggLn8z8Mxc1Kn75VqTI0ZJL%2BDIeFeKxrSuxLLRQ312tAVtWPpbnl7%2FevWUDRP62mnKmtZGqoksZXUeYWmoCTJ4KNreimDko7fU5c88%2BDpUmrrHcPA&X-Amz-Signature=c41df3ae0c5fdeeced258fa012b2dcec8f682e13cfbd80a60976cd381b2cb19a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJ6HW2N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA0ovDEzaXToRguBD0AGrcGTSXMLaIX1B%2FKagbUj7ke4AiEAx%2B8AnuZoxXRT4jZffr8tJ1kjr82Cu8vP2Sn7Fk68%2Bb8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGn9OsgypuINFOQCByrcA4gGtu7sH21geLdwyMWcZi3zjlMZGZExjLyCCvs%2FOkmSVie3gSgmZoxfcviKYKpxsfoUdK0oD5yQF45l4uUhfg%2BZiMomhYvXLcbm6yvXgHxUCFl635f1HijbI39WBpHU4JvtNhd4tIQVrn%2FjP5cPECIztecYxhxbrGRuGoeEYRONtU8sZVfL%2BhxVLj3RXa7kPRJcwCkpkdaYgxzSOfcqSZwX6SA50dyolu82%2BIpYffXw9P5MydGun%2B1ajUBhDHCUdHgvBv88wxDN43AB7XNa4B5PgDwQP0ukAhMqbLcGANPMUZXj5dzvFMbLQrIXtXpkF5oXE02olUWWLBVtIYYxBgy7zL5siL79%2BM3kvk42E2yhno9ELxWu%2ByhKUCw3Wo35kznFsSs5nE44Znlal5TGE%2BanTwQ62QeKvQvWAohUIc3ySHf1j7nQ5Xkdlz8msrK2weBufDONXfj%2F%2BeaaAinuJPPbWxEPHypXibfg3E%2Bb4QdMPY%2B31WIz4K%2B8eP8GmiiPm16Yj8WPJFcA4JMN0kmw7gv9KA4Uun1F9luG5mpw834ek6IOpH34cVz41a5Q2cPXREvwEwxAAH4TxBYULpoeJDGgcIYKTxDn6LBQ19H0PdSVcN2SQ9N4TklXHL5SMIypicIGOqUBIrYbfzUpLrKRUSXBChjWnSBgoTEbcn7pmobjA8yV75D8ym5C8Rt9mbYItqBe3%2B0W7qSxI5AyU6%2BrzpaAfrTB8VBwHy%2F51%2FuwqJ4X8%2FDoNO3ggLn8z8Mxc1Kn75VqTI0ZJL%2BDIeFeKxrSuxLLRQ312tAVtWPpbnl7%2FevWUDRP62mnKmtZGqoksZXUeYWmoCTJ4KNreimDko7fU5c88%2BDpUmrrHcPA&X-Amz-Signature=0c803c59316bb9d1a9f0defd7d0f4b40c02fce5cb95e6da38c341171c3411e32&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJ6HW2N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA0ovDEzaXToRguBD0AGrcGTSXMLaIX1B%2FKagbUj7ke4AiEAx%2B8AnuZoxXRT4jZffr8tJ1kjr82Cu8vP2Sn7Fk68%2Bb8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGn9OsgypuINFOQCByrcA4gGtu7sH21geLdwyMWcZi3zjlMZGZExjLyCCvs%2FOkmSVie3gSgmZoxfcviKYKpxsfoUdK0oD5yQF45l4uUhfg%2BZiMomhYvXLcbm6yvXgHxUCFl635f1HijbI39WBpHU4JvtNhd4tIQVrn%2FjP5cPECIztecYxhxbrGRuGoeEYRONtU8sZVfL%2BhxVLj3RXa7kPRJcwCkpkdaYgxzSOfcqSZwX6SA50dyolu82%2BIpYffXw9P5MydGun%2B1ajUBhDHCUdHgvBv88wxDN43AB7XNa4B5PgDwQP0ukAhMqbLcGANPMUZXj5dzvFMbLQrIXtXpkF5oXE02olUWWLBVtIYYxBgy7zL5siL79%2BM3kvk42E2yhno9ELxWu%2ByhKUCw3Wo35kznFsSs5nE44Znlal5TGE%2BanTwQ62QeKvQvWAohUIc3ySHf1j7nQ5Xkdlz8msrK2weBufDONXfj%2F%2BeaaAinuJPPbWxEPHypXibfg3E%2Bb4QdMPY%2B31WIz4K%2B8eP8GmiiPm16Yj8WPJFcA4JMN0kmw7gv9KA4Uun1F9luG5mpw834ek6IOpH34cVz41a5Q2cPXREvwEwxAAH4TxBYULpoeJDGgcIYKTxDn6LBQ19H0PdSVcN2SQ9N4TklXHL5SMIypicIGOqUBIrYbfzUpLrKRUSXBChjWnSBgoTEbcn7pmobjA8yV75D8ym5C8Rt9mbYItqBe3%2B0W7qSxI5AyU6%2BrzpaAfrTB8VBwHy%2F51%2FuwqJ4X8%2FDoNO3ggLn8z8Mxc1Kn75VqTI0ZJL%2BDIeFeKxrSuxLLRQ312tAVtWPpbnl7%2FevWUDRP62mnKmtZGqoksZXUeYWmoCTJ4KNreimDko7fU5c88%2BDpUmrrHcPA&X-Amz-Signature=9e616d3965492a0aafc81aab95b3b8861c494ddc21e27e61d5725b991521f9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJ6HW2N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA0ovDEzaXToRguBD0AGrcGTSXMLaIX1B%2FKagbUj7ke4AiEAx%2B8AnuZoxXRT4jZffr8tJ1kjr82Cu8vP2Sn7Fk68%2Bb8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGn9OsgypuINFOQCByrcA4gGtu7sH21geLdwyMWcZi3zjlMZGZExjLyCCvs%2FOkmSVie3gSgmZoxfcviKYKpxsfoUdK0oD5yQF45l4uUhfg%2BZiMomhYvXLcbm6yvXgHxUCFl635f1HijbI39WBpHU4JvtNhd4tIQVrn%2FjP5cPECIztecYxhxbrGRuGoeEYRONtU8sZVfL%2BhxVLj3RXa7kPRJcwCkpkdaYgxzSOfcqSZwX6SA50dyolu82%2BIpYffXw9P5MydGun%2B1ajUBhDHCUdHgvBv88wxDN43AB7XNa4B5PgDwQP0ukAhMqbLcGANPMUZXj5dzvFMbLQrIXtXpkF5oXE02olUWWLBVtIYYxBgy7zL5siL79%2BM3kvk42E2yhno9ELxWu%2ByhKUCw3Wo35kznFsSs5nE44Znlal5TGE%2BanTwQ62QeKvQvWAohUIc3ySHf1j7nQ5Xkdlz8msrK2weBufDONXfj%2F%2BeaaAinuJPPbWxEPHypXibfg3E%2Bb4QdMPY%2B31WIz4K%2B8eP8GmiiPm16Yj8WPJFcA4JMN0kmw7gv9KA4Uun1F9luG5mpw834ek6IOpH34cVz41a5Q2cPXREvwEwxAAH4TxBYULpoeJDGgcIYKTxDn6LBQ19H0PdSVcN2SQ9N4TklXHL5SMIypicIGOqUBIrYbfzUpLrKRUSXBChjWnSBgoTEbcn7pmobjA8yV75D8ym5C8Rt9mbYItqBe3%2B0W7qSxI5AyU6%2BrzpaAfrTB8VBwHy%2F51%2FuwqJ4X8%2FDoNO3ggLn8z8Mxc1Kn75VqTI0ZJL%2BDIeFeKxrSuxLLRQ312tAVtWPpbnl7%2FevWUDRP62mnKmtZGqoksZXUeYWmoCTJ4KNreimDko7fU5c88%2BDpUmrrHcPA&X-Amz-Signature=114180bc6fb2b4aa69c1f57858b413823f7e606646e49d8158e71fbbea265abe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJ6HW2N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA0ovDEzaXToRguBD0AGrcGTSXMLaIX1B%2FKagbUj7ke4AiEAx%2B8AnuZoxXRT4jZffr8tJ1kjr82Cu8vP2Sn7Fk68%2Bb8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGn9OsgypuINFOQCByrcA4gGtu7sH21geLdwyMWcZi3zjlMZGZExjLyCCvs%2FOkmSVie3gSgmZoxfcviKYKpxsfoUdK0oD5yQF45l4uUhfg%2BZiMomhYvXLcbm6yvXgHxUCFl635f1HijbI39WBpHU4JvtNhd4tIQVrn%2FjP5cPECIztecYxhxbrGRuGoeEYRONtU8sZVfL%2BhxVLj3RXa7kPRJcwCkpkdaYgxzSOfcqSZwX6SA50dyolu82%2BIpYffXw9P5MydGun%2B1ajUBhDHCUdHgvBv88wxDN43AB7XNa4B5PgDwQP0ukAhMqbLcGANPMUZXj5dzvFMbLQrIXtXpkF5oXE02olUWWLBVtIYYxBgy7zL5siL79%2BM3kvk42E2yhno9ELxWu%2ByhKUCw3Wo35kznFsSs5nE44Znlal5TGE%2BanTwQ62QeKvQvWAohUIc3ySHf1j7nQ5Xkdlz8msrK2weBufDONXfj%2F%2BeaaAinuJPPbWxEPHypXibfg3E%2Bb4QdMPY%2B31WIz4K%2B8eP8GmiiPm16Yj8WPJFcA4JMN0kmw7gv9KA4Uun1F9luG5mpw834ek6IOpH34cVz41a5Q2cPXREvwEwxAAH4TxBYULpoeJDGgcIYKTxDn6LBQ19H0PdSVcN2SQ9N4TklXHL5SMIypicIGOqUBIrYbfzUpLrKRUSXBChjWnSBgoTEbcn7pmobjA8yV75D8ym5C8Rt9mbYItqBe3%2B0W7qSxI5AyU6%2BrzpaAfrTB8VBwHy%2F51%2FuwqJ4X8%2FDoNO3ggLn8z8Mxc1Kn75VqTI0ZJL%2BDIeFeKxrSuxLLRQ312tAVtWPpbnl7%2FevWUDRP62mnKmtZGqoksZXUeYWmoCTJ4KNreimDko7fU5c88%2BDpUmrrHcPA&X-Amz-Signature=c7bda6f71dbfbfd337a66bf0576761d6e714c7e4b6854aa1f18a19ae6564e938&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJ6HW2N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA0ovDEzaXToRguBD0AGrcGTSXMLaIX1B%2FKagbUj7ke4AiEAx%2B8AnuZoxXRT4jZffr8tJ1kjr82Cu8vP2Sn7Fk68%2Bb8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGn9OsgypuINFOQCByrcA4gGtu7sH21geLdwyMWcZi3zjlMZGZExjLyCCvs%2FOkmSVie3gSgmZoxfcviKYKpxsfoUdK0oD5yQF45l4uUhfg%2BZiMomhYvXLcbm6yvXgHxUCFl635f1HijbI39WBpHU4JvtNhd4tIQVrn%2FjP5cPECIztecYxhxbrGRuGoeEYRONtU8sZVfL%2BhxVLj3RXa7kPRJcwCkpkdaYgxzSOfcqSZwX6SA50dyolu82%2BIpYffXw9P5MydGun%2B1ajUBhDHCUdHgvBv88wxDN43AB7XNa4B5PgDwQP0ukAhMqbLcGANPMUZXj5dzvFMbLQrIXtXpkF5oXE02olUWWLBVtIYYxBgy7zL5siL79%2BM3kvk42E2yhno9ELxWu%2ByhKUCw3Wo35kznFsSs5nE44Znlal5TGE%2BanTwQ62QeKvQvWAohUIc3ySHf1j7nQ5Xkdlz8msrK2weBufDONXfj%2F%2BeaaAinuJPPbWxEPHypXibfg3E%2Bb4QdMPY%2B31WIz4K%2B8eP8GmiiPm16Yj8WPJFcA4JMN0kmw7gv9KA4Uun1F9luG5mpw834ek6IOpH34cVz41a5Q2cPXREvwEwxAAH4TxBYULpoeJDGgcIYKTxDn6LBQ19H0PdSVcN2SQ9N4TklXHL5SMIypicIGOqUBIrYbfzUpLrKRUSXBChjWnSBgoTEbcn7pmobjA8yV75D8ym5C8Rt9mbYItqBe3%2B0W7qSxI5AyU6%2BrzpaAfrTB8VBwHy%2F51%2FuwqJ4X8%2FDoNO3ggLn8z8Mxc1Kn75VqTI0ZJL%2BDIeFeKxrSuxLLRQ312tAVtWPpbnl7%2FevWUDRP62mnKmtZGqoksZXUeYWmoCTJ4KNreimDko7fU5c88%2BDpUmrrHcPA&X-Amz-Signature=eefd5af93d00752ccd73ded43c7e651c9029d570dbb6604236b39ee499cc5831&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJ6HW2N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA0ovDEzaXToRguBD0AGrcGTSXMLaIX1B%2FKagbUj7ke4AiEAx%2B8AnuZoxXRT4jZffr8tJ1kjr82Cu8vP2Sn7Fk68%2Bb8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGn9OsgypuINFOQCByrcA4gGtu7sH21geLdwyMWcZi3zjlMZGZExjLyCCvs%2FOkmSVie3gSgmZoxfcviKYKpxsfoUdK0oD5yQF45l4uUhfg%2BZiMomhYvXLcbm6yvXgHxUCFl635f1HijbI39WBpHU4JvtNhd4tIQVrn%2FjP5cPECIztecYxhxbrGRuGoeEYRONtU8sZVfL%2BhxVLj3RXa7kPRJcwCkpkdaYgxzSOfcqSZwX6SA50dyolu82%2BIpYffXw9P5MydGun%2B1ajUBhDHCUdHgvBv88wxDN43AB7XNa4B5PgDwQP0ukAhMqbLcGANPMUZXj5dzvFMbLQrIXtXpkF5oXE02olUWWLBVtIYYxBgy7zL5siL79%2BM3kvk42E2yhno9ELxWu%2ByhKUCw3Wo35kznFsSs5nE44Znlal5TGE%2BanTwQ62QeKvQvWAohUIc3ySHf1j7nQ5Xkdlz8msrK2weBufDONXfj%2F%2BeaaAinuJPPbWxEPHypXibfg3E%2Bb4QdMPY%2B31WIz4K%2B8eP8GmiiPm16Yj8WPJFcA4JMN0kmw7gv9KA4Uun1F9luG5mpw834ek6IOpH34cVz41a5Q2cPXREvwEwxAAH4TxBYULpoeJDGgcIYKTxDn6LBQ19H0PdSVcN2SQ9N4TklXHL5SMIypicIGOqUBIrYbfzUpLrKRUSXBChjWnSBgoTEbcn7pmobjA8yV75D8ym5C8Rt9mbYItqBe3%2B0W7qSxI5AyU6%2BrzpaAfrTB8VBwHy%2F51%2FuwqJ4X8%2FDoNO3ggLn8z8Mxc1Kn75VqTI0ZJL%2BDIeFeKxrSuxLLRQ312tAVtWPpbnl7%2FevWUDRP62mnKmtZGqoksZXUeYWmoCTJ4KNreimDko7fU5c88%2BDpUmrrHcPA&X-Amz-Signature=32e8ee41a295de2974524a87ec264c7b0234a0d44262a8fd0c84defa0b7ab1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
