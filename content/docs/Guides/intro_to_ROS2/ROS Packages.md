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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKOMPH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO1cFpVXRAmRyKXF7Z1bWuGib97wXCxzAtxX1M3tI%2FjAiEA3V9YMaYVI1ZGXd9qj2F7ukuSbyjxFFMnXyDH0XABexgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuCPDdu%2FDKw9m3jLircA5hsEmQBBeUgIuX9hj36NPZnvrqTQ8H3SdZbhsU3Tu2dGSLom%2FAApaEaDNvyPbnWJgaMWDf8iT3GbqorSzo%2BhVTYvCDkRMMmaqS50u1bNG%2F%2BWdTZv%2Fot%2B%2B43f%2FPjxfXj0mYLemb6odRIE%2B6ZKOFdpPfIDdTNwKH4bafRyBtHV6GLAMqXIGgcCKgYTsXyKvxUGkwQATlzVHzuI267dNvdV6XMRUmq%2Ff2f9fJz5IfO2V4sk0J3moMH5oVGApSmKmtYYSuQ9wj0v3WCg2VySeqUinzX9x37jzGg4ee3gxteSvdOt79LUQIe0WrBjw6g1pXC%2B2r%2B0rNwQ9mluDB3GQF25%2BhKjtbcSIu%2Fw%2FRYpEiuMfCwU3GKOepxYUJoDdBjRPqYiyKA13q2mpTvBaLGOTU2dLv1pgx0xZcB6c5L%2Bkc5L0D9rBUCfUsenA33qTq55xjP%2FbwZDyvn4hjJyPtyUCaRgXx7%2FsQAMvb4JuJLtS%2FD%2Bfe3aGu8bA768sOebRpFxlc75SkVmO6xDeJfk5DUbzFn4ACnrHjMYNhMO67m1bp%2BAkRfMOUKFtwUi5pRTgtEFTP58arE4UaRvefUhhQdBR%2BdOXtb7%2BTdQoWnb7It55nyHHRERHmRYXOI1OSLMZ65MO7Kq8QGOqUBk3Xyd2e%2BbkkJfnxgQrZNLZw2FKfllA574yho7CjMEhDTnPKUmDpSw%2BJJueMr99ptNMhaXSIRhdK1WSKZOkBXhTwBo22eehJXUxskDkwHX5o0t7E0UOayOIX%2BIrdoJsKOr0oZbm3jgMMeN5ENyOR8Fqvg4Oc3%2BqfecLuO%2B5wFDwbrpicTBg5eYesw%2F3LGDLTIwYpcTofOfqLxlOwCw5NUI2tPdiIj&X-Amz-Signature=e8e7eab2ca428afc1c81677c1cd9a01f441d92d697046aaccd546657a852f672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKOMPH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO1cFpVXRAmRyKXF7Z1bWuGib97wXCxzAtxX1M3tI%2FjAiEA3V9YMaYVI1ZGXd9qj2F7ukuSbyjxFFMnXyDH0XABexgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuCPDdu%2FDKw9m3jLircA5hsEmQBBeUgIuX9hj36NPZnvrqTQ8H3SdZbhsU3Tu2dGSLom%2FAApaEaDNvyPbnWJgaMWDf8iT3GbqorSzo%2BhVTYvCDkRMMmaqS50u1bNG%2F%2BWdTZv%2Fot%2B%2B43f%2FPjxfXj0mYLemb6odRIE%2B6ZKOFdpPfIDdTNwKH4bafRyBtHV6GLAMqXIGgcCKgYTsXyKvxUGkwQATlzVHzuI267dNvdV6XMRUmq%2Ff2f9fJz5IfO2V4sk0J3moMH5oVGApSmKmtYYSuQ9wj0v3WCg2VySeqUinzX9x37jzGg4ee3gxteSvdOt79LUQIe0WrBjw6g1pXC%2B2r%2B0rNwQ9mluDB3GQF25%2BhKjtbcSIu%2Fw%2FRYpEiuMfCwU3GKOepxYUJoDdBjRPqYiyKA13q2mpTvBaLGOTU2dLv1pgx0xZcB6c5L%2Bkc5L0D9rBUCfUsenA33qTq55xjP%2FbwZDyvn4hjJyPtyUCaRgXx7%2FsQAMvb4JuJLtS%2FD%2Bfe3aGu8bA768sOebRpFxlc75SkVmO6xDeJfk5DUbzFn4ACnrHjMYNhMO67m1bp%2BAkRfMOUKFtwUi5pRTgtEFTP58arE4UaRvefUhhQdBR%2BdOXtb7%2BTdQoWnb7It55nyHHRERHmRYXOI1OSLMZ65MO7Kq8QGOqUBk3Xyd2e%2BbkkJfnxgQrZNLZw2FKfllA574yho7CjMEhDTnPKUmDpSw%2BJJueMr99ptNMhaXSIRhdK1WSKZOkBXhTwBo22eehJXUxskDkwHX5o0t7E0UOayOIX%2BIrdoJsKOr0oZbm3jgMMeN5ENyOR8Fqvg4Oc3%2BqfecLuO%2B5wFDwbrpicTBg5eYesw%2F3LGDLTIwYpcTofOfqLxlOwCw5NUI2tPdiIj&X-Amz-Signature=630abe0267e77f9dc3d63d87ecf58b01d5736655bee690d7ea3853f3b573008a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKOMPH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO1cFpVXRAmRyKXF7Z1bWuGib97wXCxzAtxX1M3tI%2FjAiEA3V9YMaYVI1ZGXd9qj2F7ukuSbyjxFFMnXyDH0XABexgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuCPDdu%2FDKw9m3jLircA5hsEmQBBeUgIuX9hj36NPZnvrqTQ8H3SdZbhsU3Tu2dGSLom%2FAApaEaDNvyPbnWJgaMWDf8iT3GbqorSzo%2BhVTYvCDkRMMmaqS50u1bNG%2F%2BWdTZv%2Fot%2B%2B43f%2FPjxfXj0mYLemb6odRIE%2B6ZKOFdpPfIDdTNwKH4bafRyBtHV6GLAMqXIGgcCKgYTsXyKvxUGkwQATlzVHzuI267dNvdV6XMRUmq%2Ff2f9fJz5IfO2V4sk0J3moMH5oVGApSmKmtYYSuQ9wj0v3WCg2VySeqUinzX9x37jzGg4ee3gxteSvdOt79LUQIe0WrBjw6g1pXC%2B2r%2B0rNwQ9mluDB3GQF25%2BhKjtbcSIu%2Fw%2FRYpEiuMfCwU3GKOepxYUJoDdBjRPqYiyKA13q2mpTvBaLGOTU2dLv1pgx0xZcB6c5L%2Bkc5L0D9rBUCfUsenA33qTq55xjP%2FbwZDyvn4hjJyPtyUCaRgXx7%2FsQAMvb4JuJLtS%2FD%2Bfe3aGu8bA768sOebRpFxlc75SkVmO6xDeJfk5DUbzFn4ACnrHjMYNhMO67m1bp%2BAkRfMOUKFtwUi5pRTgtEFTP58arE4UaRvefUhhQdBR%2BdOXtb7%2BTdQoWnb7It55nyHHRERHmRYXOI1OSLMZ65MO7Kq8QGOqUBk3Xyd2e%2BbkkJfnxgQrZNLZw2FKfllA574yho7CjMEhDTnPKUmDpSw%2BJJueMr99ptNMhaXSIRhdK1WSKZOkBXhTwBo22eehJXUxskDkwHX5o0t7E0UOayOIX%2BIrdoJsKOr0oZbm3jgMMeN5ENyOR8Fqvg4Oc3%2BqfecLuO%2B5wFDwbrpicTBg5eYesw%2F3LGDLTIwYpcTofOfqLxlOwCw5NUI2tPdiIj&X-Amz-Signature=67512981d22f44090af204e31668349e38be50ec2b2ab3a84955635b8e05fde5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKOMPH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO1cFpVXRAmRyKXF7Z1bWuGib97wXCxzAtxX1M3tI%2FjAiEA3V9YMaYVI1ZGXd9qj2F7ukuSbyjxFFMnXyDH0XABexgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuCPDdu%2FDKw9m3jLircA5hsEmQBBeUgIuX9hj36NPZnvrqTQ8H3SdZbhsU3Tu2dGSLom%2FAApaEaDNvyPbnWJgaMWDf8iT3GbqorSzo%2BhVTYvCDkRMMmaqS50u1bNG%2F%2BWdTZv%2Fot%2B%2B43f%2FPjxfXj0mYLemb6odRIE%2B6ZKOFdpPfIDdTNwKH4bafRyBtHV6GLAMqXIGgcCKgYTsXyKvxUGkwQATlzVHzuI267dNvdV6XMRUmq%2Ff2f9fJz5IfO2V4sk0J3moMH5oVGApSmKmtYYSuQ9wj0v3WCg2VySeqUinzX9x37jzGg4ee3gxteSvdOt79LUQIe0WrBjw6g1pXC%2B2r%2B0rNwQ9mluDB3GQF25%2BhKjtbcSIu%2Fw%2FRYpEiuMfCwU3GKOepxYUJoDdBjRPqYiyKA13q2mpTvBaLGOTU2dLv1pgx0xZcB6c5L%2Bkc5L0D9rBUCfUsenA33qTq55xjP%2FbwZDyvn4hjJyPtyUCaRgXx7%2FsQAMvb4JuJLtS%2FD%2Bfe3aGu8bA768sOebRpFxlc75SkVmO6xDeJfk5DUbzFn4ACnrHjMYNhMO67m1bp%2BAkRfMOUKFtwUi5pRTgtEFTP58arE4UaRvefUhhQdBR%2BdOXtb7%2BTdQoWnb7It55nyHHRERHmRYXOI1OSLMZ65MO7Kq8QGOqUBk3Xyd2e%2BbkkJfnxgQrZNLZw2FKfllA574yho7CjMEhDTnPKUmDpSw%2BJJueMr99ptNMhaXSIRhdK1WSKZOkBXhTwBo22eehJXUxskDkwHX5o0t7E0UOayOIX%2BIrdoJsKOr0oZbm3jgMMeN5ENyOR8Fqvg4Oc3%2BqfecLuO%2B5wFDwbrpicTBg5eYesw%2F3LGDLTIwYpcTofOfqLxlOwCw5NUI2tPdiIj&X-Amz-Signature=962c48516bdf38637eb77dc394988100c63ce13bb90f9a5784ddb2d9ad25a7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKOMPH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO1cFpVXRAmRyKXF7Z1bWuGib97wXCxzAtxX1M3tI%2FjAiEA3V9YMaYVI1ZGXd9qj2F7ukuSbyjxFFMnXyDH0XABexgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuCPDdu%2FDKw9m3jLircA5hsEmQBBeUgIuX9hj36NPZnvrqTQ8H3SdZbhsU3Tu2dGSLom%2FAApaEaDNvyPbnWJgaMWDf8iT3GbqorSzo%2BhVTYvCDkRMMmaqS50u1bNG%2F%2BWdTZv%2Fot%2B%2B43f%2FPjxfXj0mYLemb6odRIE%2B6ZKOFdpPfIDdTNwKH4bafRyBtHV6GLAMqXIGgcCKgYTsXyKvxUGkwQATlzVHzuI267dNvdV6XMRUmq%2Ff2f9fJz5IfO2V4sk0J3moMH5oVGApSmKmtYYSuQ9wj0v3WCg2VySeqUinzX9x37jzGg4ee3gxteSvdOt79LUQIe0WrBjw6g1pXC%2B2r%2B0rNwQ9mluDB3GQF25%2BhKjtbcSIu%2Fw%2FRYpEiuMfCwU3GKOepxYUJoDdBjRPqYiyKA13q2mpTvBaLGOTU2dLv1pgx0xZcB6c5L%2Bkc5L0D9rBUCfUsenA33qTq55xjP%2FbwZDyvn4hjJyPtyUCaRgXx7%2FsQAMvb4JuJLtS%2FD%2Bfe3aGu8bA768sOebRpFxlc75SkVmO6xDeJfk5DUbzFn4ACnrHjMYNhMO67m1bp%2BAkRfMOUKFtwUi5pRTgtEFTP58arE4UaRvefUhhQdBR%2BdOXtb7%2BTdQoWnb7It55nyHHRERHmRYXOI1OSLMZ65MO7Kq8QGOqUBk3Xyd2e%2BbkkJfnxgQrZNLZw2FKfllA574yho7CjMEhDTnPKUmDpSw%2BJJueMr99ptNMhaXSIRhdK1WSKZOkBXhTwBo22eehJXUxskDkwHX5o0t7E0UOayOIX%2BIrdoJsKOr0oZbm3jgMMeN5ENyOR8Fqvg4Oc3%2BqfecLuO%2B5wFDwbrpicTBg5eYesw%2F3LGDLTIwYpcTofOfqLxlOwCw5NUI2tPdiIj&X-Amz-Signature=14c36f0cf181c39a8dc3aa6d22bf7db6acc1f76769ecdfa1b3815871247433fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKOMPH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO1cFpVXRAmRyKXF7Z1bWuGib97wXCxzAtxX1M3tI%2FjAiEA3V9YMaYVI1ZGXd9qj2F7ukuSbyjxFFMnXyDH0XABexgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuCPDdu%2FDKw9m3jLircA5hsEmQBBeUgIuX9hj36NPZnvrqTQ8H3SdZbhsU3Tu2dGSLom%2FAApaEaDNvyPbnWJgaMWDf8iT3GbqorSzo%2BhVTYvCDkRMMmaqS50u1bNG%2F%2BWdTZv%2Fot%2B%2B43f%2FPjxfXj0mYLemb6odRIE%2B6ZKOFdpPfIDdTNwKH4bafRyBtHV6GLAMqXIGgcCKgYTsXyKvxUGkwQATlzVHzuI267dNvdV6XMRUmq%2Ff2f9fJz5IfO2V4sk0J3moMH5oVGApSmKmtYYSuQ9wj0v3WCg2VySeqUinzX9x37jzGg4ee3gxteSvdOt79LUQIe0WrBjw6g1pXC%2B2r%2B0rNwQ9mluDB3GQF25%2BhKjtbcSIu%2Fw%2FRYpEiuMfCwU3GKOepxYUJoDdBjRPqYiyKA13q2mpTvBaLGOTU2dLv1pgx0xZcB6c5L%2Bkc5L0D9rBUCfUsenA33qTq55xjP%2FbwZDyvn4hjJyPtyUCaRgXx7%2FsQAMvb4JuJLtS%2FD%2Bfe3aGu8bA768sOebRpFxlc75SkVmO6xDeJfk5DUbzFn4ACnrHjMYNhMO67m1bp%2BAkRfMOUKFtwUi5pRTgtEFTP58arE4UaRvefUhhQdBR%2BdOXtb7%2BTdQoWnb7It55nyHHRERHmRYXOI1OSLMZ65MO7Kq8QGOqUBk3Xyd2e%2BbkkJfnxgQrZNLZw2FKfllA574yho7CjMEhDTnPKUmDpSw%2BJJueMr99ptNMhaXSIRhdK1WSKZOkBXhTwBo22eehJXUxskDkwHX5o0t7E0UOayOIX%2BIrdoJsKOr0oZbm3jgMMeN5ENyOR8Fqvg4Oc3%2BqfecLuO%2B5wFDwbrpicTBg5eYesw%2F3LGDLTIwYpcTofOfqLxlOwCw5NUI2tPdiIj&X-Amz-Signature=0497958f4628263a0145d4d5e88bfd1920fd519146214af364a089a1f7167759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSKOMPH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO1cFpVXRAmRyKXF7Z1bWuGib97wXCxzAtxX1M3tI%2FjAiEA3V9YMaYVI1ZGXd9qj2F7ukuSbyjxFFMnXyDH0XABexgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuCPDdu%2FDKw9m3jLircA5hsEmQBBeUgIuX9hj36NPZnvrqTQ8H3SdZbhsU3Tu2dGSLom%2FAApaEaDNvyPbnWJgaMWDf8iT3GbqorSzo%2BhVTYvCDkRMMmaqS50u1bNG%2F%2BWdTZv%2Fot%2B%2B43f%2FPjxfXj0mYLemb6odRIE%2B6ZKOFdpPfIDdTNwKH4bafRyBtHV6GLAMqXIGgcCKgYTsXyKvxUGkwQATlzVHzuI267dNvdV6XMRUmq%2Ff2f9fJz5IfO2V4sk0J3moMH5oVGApSmKmtYYSuQ9wj0v3WCg2VySeqUinzX9x37jzGg4ee3gxteSvdOt79LUQIe0WrBjw6g1pXC%2B2r%2B0rNwQ9mluDB3GQF25%2BhKjtbcSIu%2Fw%2FRYpEiuMfCwU3GKOepxYUJoDdBjRPqYiyKA13q2mpTvBaLGOTU2dLv1pgx0xZcB6c5L%2Bkc5L0D9rBUCfUsenA33qTq55xjP%2FbwZDyvn4hjJyPtyUCaRgXx7%2FsQAMvb4JuJLtS%2FD%2Bfe3aGu8bA768sOebRpFxlc75SkVmO6xDeJfk5DUbzFn4ACnrHjMYNhMO67m1bp%2BAkRfMOUKFtwUi5pRTgtEFTP58arE4UaRvefUhhQdBR%2BdOXtb7%2BTdQoWnb7It55nyHHRERHmRYXOI1OSLMZ65MO7Kq8QGOqUBk3Xyd2e%2BbkkJfnxgQrZNLZw2FKfllA574yho7CjMEhDTnPKUmDpSw%2BJJueMr99ptNMhaXSIRhdK1WSKZOkBXhTwBo22eehJXUxskDkwHX5o0t7E0UOayOIX%2BIrdoJsKOr0oZbm3jgMMeN5ENyOR8Fqvg4Oc3%2BqfecLuO%2B5wFDwbrpicTBg5eYesw%2F3LGDLTIwYpcTofOfqLxlOwCw5NUI2tPdiIj&X-Amz-Signature=c53a89bf6007ffb36e3124a32eb62082059245dcbbc2d0d0a57f2f6032f2f2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
