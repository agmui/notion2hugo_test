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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJY55GJD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjHOd50T%2Fxk3KL9YarFvrXjWKa%2F%2BenkOneqYWX60GZxAiAodn%2BDll1jma7MlolNYJY04z%2BREWLoWui3e1hqfCsaxyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMI2WBHwW4g4D8Jw4DKtwDtWv2l2yTdskAQOY%2Ff2ukkoNEpFjQxaKuuHCGQJr2tcEBAR0m7yaLXDQP5NA2%2FyfX4ixFv6ZRd9sf11353JFABGbWjm0lrS2VZRkM6lgn1ObALSZmKr0pZ3SG2dap%2B5%2BoQnjEw5%2FUowwnLD1wBTLYt7W2H%2BcgTSEVdsneFOrb58%2BXH5fHz%2FUXSSU7gEZn65IGNfSRzbWJzVbw2CgDuBrmXvVpqTbM0UUwR7wuMXpcinVUdnM9LVhoVxe18caKnWssKqnvf99xniOYU0pnKWgPycP8o0Nj%2FMmdYnnSYjWBbGF4GIqndBDqPjXWnWzG4pA0M2QTS3gWX1hALtr6HDCQiZNCaXmt0Fs9B6albPNJHYhM8KQnriMOCS4vWgXyMIv5qzjybg9Z6mexx9zS4kYfSjxGGNLeLWxQA3VnUdWaRPQ9rVjKEVsi4CX2xilSvoaGBg52GxneYIk0rdOTxYFcStsT6eJYqJd53dKcCJ8OT5rfun8zTsWDafPbC6dnT6BPUdcG6C2pPF39GkqnjUHwFnrptBkFbQawL5pd2Ir5izwPioFi1HHsPakMflrOdmWuHzjkARa%2BWo8KjWAkxWuB%2BmYt1EfIOprFen0gpz664uEsLjK31ZevkwxicaswmP%2FkwAY6pgFa1fgudwznxLKG11l7Kq1N3c7uyWC2mdJSc3fDeeQY3qrK7dJccJwSAQJyb0sDrayWB6qT0%2F0PNuwQSW60WSxDMMXIENngFzitffDyv%2BjPjJZcRR26Fys2%2FR0rCm%2B0sd37Sm7gm%2FzIKbdDvrA%2BVUWrsh5yTbBKG0KNPl6%2B66vc0o%2FdC7NElpGmBpjPH05VNeC1vTWOykLZRZ%2BWLbIbWiN6srS9CsvD&X-Amz-Signature=d5259a6e17bf1473bbfd5603f86e1c14462193b5a67fed41393f643db617ea59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJY55GJD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjHOd50T%2Fxk3KL9YarFvrXjWKa%2F%2BenkOneqYWX60GZxAiAodn%2BDll1jma7MlolNYJY04z%2BREWLoWui3e1hqfCsaxyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMI2WBHwW4g4D8Jw4DKtwDtWv2l2yTdskAQOY%2Ff2ukkoNEpFjQxaKuuHCGQJr2tcEBAR0m7yaLXDQP5NA2%2FyfX4ixFv6ZRd9sf11353JFABGbWjm0lrS2VZRkM6lgn1ObALSZmKr0pZ3SG2dap%2B5%2BoQnjEw5%2FUowwnLD1wBTLYt7W2H%2BcgTSEVdsneFOrb58%2BXH5fHz%2FUXSSU7gEZn65IGNfSRzbWJzVbw2CgDuBrmXvVpqTbM0UUwR7wuMXpcinVUdnM9LVhoVxe18caKnWssKqnvf99xniOYU0pnKWgPycP8o0Nj%2FMmdYnnSYjWBbGF4GIqndBDqPjXWnWzG4pA0M2QTS3gWX1hALtr6HDCQiZNCaXmt0Fs9B6albPNJHYhM8KQnriMOCS4vWgXyMIv5qzjybg9Z6mexx9zS4kYfSjxGGNLeLWxQA3VnUdWaRPQ9rVjKEVsi4CX2xilSvoaGBg52GxneYIk0rdOTxYFcStsT6eJYqJd53dKcCJ8OT5rfun8zTsWDafPbC6dnT6BPUdcG6C2pPF39GkqnjUHwFnrptBkFbQawL5pd2Ir5izwPioFi1HHsPakMflrOdmWuHzjkARa%2BWo8KjWAkxWuB%2BmYt1EfIOprFen0gpz664uEsLjK31ZevkwxicaswmP%2FkwAY6pgFa1fgudwznxLKG11l7Kq1N3c7uyWC2mdJSc3fDeeQY3qrK7dJccJwSAQJyb0sDrayWB6qT0%2F0PNuwQSW60WSxDMMXIENngFzitffDyv%2BjPjJZcRR26Fys2%2FR0rCm%2B0sd37Sm7gm%2FzIKbdDvrA%2BVUWrsh5yTbBKG0KNPl6%2B66vc0o%2FdC7NElpGmBpjPH05VNeC1vTWOykLZRZ%2BWLbIbWiN6srS9CsvD&X-Amz-Signature=bc72a8b099cee0946bf718c42b4f869924fff88d53ed6f5b54614706434eca3d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJY55GJD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjHOd50T%2Fxk3KL9YarFvrXjWKa%2F%2BenkOneqYWX60GZxAiAodn%2BDll1jma7MlolNYJY04z%2BREWLoWui3e1hqfCsaxyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMI2WBHwW4g4D8Jw4DKtwDtWv2l2yTdskAQOY%2Ff2ukkoNEpFjQxaKuuHCGQJr2tcEBAR0m7yaLXDQP5NA2%2FyfX4ixFv6ZRd9sf11353JFABGbWjm0lrS2VZRkM6lgn1ObALSZmKr0pZ3SG2dap%2B5%2BoQnjEw5%2FUowwnLD1wBTLYt7W2H%2BcgTSEVdsneFOrb58%2BXH5fHz%2FUXSSU7gEZn65IGNfSRzbWJzVbw2CgDuBrmXvVpqTbM0UUwR7wuMXpcinVUdnM9LVhoVxe18caKnWssKqnvf99xniOYU0pnKWgPycP8o0Nj%2FMmdYnnSYjWBbGF4GIqndBDqPjXWnWzG4pA0M2QTS3gWX1hALtr6HDCQiZNCaXmt0Fs9B6albPNJHYhM8KQnriMOCS4vWgXyMIv5qzjybg9Z6mexx9zS4kYfSjxGGNLeLWxQA3VnUdWaRPQ9rVjKEVsi4CX2xilSvoaGBg52GxneYIk0rdOTxYFcStsT6eJYqJd53dKcCJ8OT5rfun8zTsWDafPbC6dnT6BPUdcG6C2pPF39GkqnjUHwFnrptBkFbQawL5pd2Ir5izwPioFi1HHsPakMflrOdmWuHzjkARa%2BWo8KjWAkxWuB%2BmYt1EfIOprFen0gpz664uEsLjK31ZevkwxicaswmP%2FkwAY6pgFa1fgudwznxLKG11l7Kq1N3c7uyWC2mdJSc3fDeeQY3qrK7dJccJwSAQJyb0sDrayWB6qT0%2F0PNuwQSW60WSxDMMXIENngFzitffDyv%2BjPjJZcRR26Fys2%2FR0rCm%2B0sd37Sm7gm%2FzIKbdDvrA%2BVUWrsh5yTbBKG0KNPl6%2B66vc0o%2FdC7NElpGmBpjPH05VNeC1vTWOykLZRZ%2BWLbIbWiN6srS9CsvD&X-Amz-Signature=0dc7080c51749c5739aa8ffafd018e70198b04c07e901314d68d8342cea0d357&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJY55GJD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjHOd50T%2Fxk3KL9YarFvrXjWKa%2F%2BenkOneqYWX60GZxAiAodn%2BDll1jma7MlolNYJY04z%2BREWLoWui3e1hqfCsaxyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMI2WBHwW4g4D8Jw4DKtwDtWv2l2yTdskAQOY%2Ff2ukkoNEpFjQxaKuuHCGQJr2tcEBAR0m7yaLXDQP5NA2%2FyfX4ixFv6ZRd9sf11353JFABGbWjm0lrS2VZRkM6lgn1ObALSZmKr0pZ3SG2dap%2B5%2BoQnjEw5%2FUowwnLD1wBTLYt7W2H%2BcgTSEVdsneFOrb58%2BXH5fHz%2FUXSSU7gEZn65IGNfSRzbWJzVbw2CgDuBrmXvVpqTbM0UUwR7wuMXpcinVUdnM9LVhoVxe18caKnWssKqnvf99xniOYU0pnKWgPycP8o0Nj%2FMmdYnnSYjWBbGF4GIqndBDqPjXWnWzG4pA0M2QTS3gWX1hALtr6HDCQiZNCaXmt0Fs9B6albPNJHYhM8KQnriMOCS4vWgXyMIv5qzjybg9Z6mexx9zS4kYfSjxGGNLeLWxQA3VnUdWaRPQ9rVjKEVsi4CX2xilSvoaGBg52GxneYIk0rdOTxYFcStsT6eJYqJd53dKcCJ8OT5rfun8zTsWDafPbC6dnT6BPUdcG6C2pPF39GkqnjUHwFnrptBkFbQawL5pd2Ir5izwPioFi1HHsPakMflrOdmWuHzjkARa%2BWo8KjWAkxWuB%2BmYt1EfIOprFen0gpz664uEsLjK31ZevkwxicaswmP%2FkwAY6pgFa1fgudwznxLKG11l7Kq1N3c7uyWC2mdJSc3fDeeQY3qrK7dJccJwSAQJyb0sDrayWB6qT0%2F0PNuwQSW60WSxDMMXIENngFzitffDyv%2BjPjJZcRR26Fys2%2FR0rCm%2B0sd37Sm7gm%2FzIKbdDvrA%2BVUWrsh5yTbBKG0KNPl6%2B66vc0o%2FdC7NElpGmBpjPH05VNeC1vTWOykLZRZ%2BWLbIbWiN6srS9CsvD&X-Amz-Signature=667c98a748dd663556551a7017c11ce1f860c4f2e87a38f6ab90ea303ef667ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJY55GJD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjHOd50T%2Fxk3KL9YarFvrXjWKa%2F%2BenkOneqYWX60GZxAiAodn%2BDll1jma7MlolNYJY04z%2BREWLoWui3e1hqfCsaxyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMI2WBHwW4g4D8Jw4DKtwDtWv2l2yTdskAQOY%2Ff2ukkoNEpFjQxaKuuHCGQJr2tcEBAR0m7yaLXDQP5NA2%2FyfX4ixFv6ZRd9sf11353JFABGbWjm0lrS2VZRkM6lgn1ObALSZmKr0pZ3SG2dap%2B5%2BoQnjEw5%2FUowwnLD1wBTLYt7W2H%2BcgTSEVdsneFOrb58%2BXH5fHz%2FUXSSU7gEZn65IGNfSRzbWJzVbw2CgDuBrmXvVpqTbM0UUwR7wuMXpcinVUdnM9LVhoVxe18caKnWssKqnvf99xniOYU0pnKWgPycP8o0Nj%2FMmdYnnSYjWBbGF4GIqndBDqPjXWnWzG4pA0M2QTS3gWX1hALtr6HDCQiZNCaXmt0Fs9B6albPNJHYhM8KQnriMOCS4vWgXyMIv5qzjybg9Z6mexx9zS4kYfSjxGGNLeLWxQA3VnUdWaRPQ9rVjKEVsi4CX2xilSvoaGBg52GxneYIk0rdOTxYFcStsT6eJYqJd53dKcCJ8OT5rfun8zTsWDafPbC6dnT6BPUdcG6C2pPF39GkqnjUHwFnrptBkFbQawL5pd2Ir5izwPioFi1HHsPakMflrOdmWuHzjkARa%2BWo8KjWAkxWuB%2BmYt1EfIOprFen0gpz664uEsLjK31ZevkwxicaswmP%2FkwAY6pgFa1fgudwznxLKG11l7Kq1N3c7uyWC2mdJSc3fDeeQY3qrK7dJccJwSAQJyb0sDrayWB6qT0%2F0PNuwQSW60WSxDMMXIENngFzitffDyv%2BjPjJZcRR26Fys2%2FR0rCm%2B0sd37Sm7gm%2FzIKbdDvrA%2BVUWrsh5yTbBKG0KNPl6%2B66vc0o%2FdC7NElpGmBpjPH05VNeC1vTWOykLZRZ%2BWLbIbWiN6srS9CsvD&X-Amz-Signature=1184d0cf987fc5fff7705c934df424c7a0636011b082068be5dab301e49d005c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJY55GJD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjHOd50T%2Fxk3KL9YarFvrXjWKa%2F%2BenkOneqYWX60GZxAiAodn%2BDll1jma7MlolNYJY04z%2BREWLoWui3e1hqfCsaxyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMI2WBHwW4g4D8Jw4DKtwDtWv2l2yTdskAQOY%2Ff2ukkoNEpFjQxaKuuHCGQJr2tcEBAR0m7yaLXDQP5NA2%2FyfX4ixFv6ZRd9sf11353JFABGbWjm0lrS2VZRkM6lgn1ObALSZmKr0pZ3SG2dap%2B5%2BoQnjEw5%2FUowwnLD1wBTLYt7W2H%2BcgTSEVdsneFOrb58%2BXH5fHz%2FUXSSU7gEZn65IGNfSRzbWJzVbw2CgDuBrmXvVpqTbM0UUwR7wuMXpcinVUdnM9LVhoVxe18caKnWssKqnvf99xniOYU0pnKWgPycP8o0Nj%2FMmdYnnSYjWBbGF4GIqndBDqPjXWnWzG4pA0M2QTS3gWX1hALtr6HDCQiZNCaXmt0Fs9B6albPNJHYhM8KQnriMOCS4vWgXyMIv5qzjybg9Z6mexx9zS4kYfSjxGGNLeLWxQA3VnUdWaRPQ9rVjKEVsi4CX2xilSvoaGBg52GxneYIk0rdOTxYFcStsT6eJYqJd53dKcCJ8OT5rfun8zTsWDafPbC6dnT6BPUdcG6C2pPF39GkqnjUHwFnrptBkFbQawL5pd2Ir5izwPioFi1HHsPakMflrOdmWuHzjkARa%2BWo8KjWAkxWuB%2BmYt1EfIOprFen0gpz664uEsLjK31ZevkwxicaswmP%2FkwAY6pgFa1fgudwznxLKG11l7Kq1N3c7uyWC2mdJSc3fDeeQY3qrK7dJccJwSAQJyb0sDrayWB6qT0%2F0PNuwQSW60WSxDMMXIENngFzitffDyv%2BjPjJZcRR26Fys2%2FR0rCm%2B0sd37Sm7gm%2FzIKbdDvrA%2BVUWrsh5yTbBKG0KNPl6%2B66vc0o%2FdC7NElpGmBpjPH05VNeC1vTWOykLZRZ%2BWLbIbWiN6srS9CsvD&X-Amz-Signature=ec3acfc7a6ed56f084ee9798e5bcd3d7d7b7ad3cb520898c83f28ae3ca8adca1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJY55GJD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjHOd50T%2Fxk3KL9YarFvrXjWKa%2F%2BenkOneqYWX60GZxAiAodn%2BDll1jma7MlolNYJY04z%2BREWLoWui3e1hqfCsaxyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMI2WBHwW4g4D8Jw4DKtwDtWv2l2yTdskAQOY%2Ff2ukkoNEpFjQxaKuuHCGQJr2tcEBAR0m7yaLXDQP5NA2%2FyfX4ixFv6ZRd9sf11353JFABGbWjm0lrS2VZRkM6lgn1ObALSZmKr0pZ3SG2dap%2B5%2BoQnjEw5%2FUowwnLD1wBTLYt7W2H%2BcgTSEVdsneFOrb58%2BXH5fHz%2FUXSSU7gEZn65IGNfSRzbWJzVbw2CgDuBrmXvVpqTbM0UUwR7wuMXpcinVUdnM9LVhoVxe18caKnWssKqnvf99xniOYU0pnKWgPycP8o0Nj%2FMmdYnnSYjWBbGF4GIqndBDqPjXWnWzG4pA0M2QTS3gWX1hALtr6HDCQiZNCaXmt0Fs9B6albPNJHYhM8KQnriMOCS4vWgXyMIv5qzjybg9Z6mexx9zS4kYfSjxGGNLeLWxQA3VnUdWaRPQ9rVjKEVsi4CX2xilSvoaGBg52GxneYIk0rdOTxYFcStsT6eJYqJd53dKcCJ8OT5rfun8zTsWDafPbC6dnT6BPUdcG6C2pPF39GkqnjUHwFnrptBkFbQawL5pd2Ir5izwPioFi1HHsPakMflrOdmWuHzjkARa%2BWo8KjWAkxWuB%2BmYt1EfIOprFen0gpz664uEsLjK31ZevkwxicaswmP%2FkwAY6pgFa1fgudwznxLKG11l7Kq1N3c7uyWC2mdJSc3fDeeQY3qrK7dJccJwSAQJyb0sDrayWB6qT0%2F0PNuwQSW60WSxDMMXIENngFzitffDyv%2BjPjJZcRR26Fys2%2FR0rCm%2B0sd37Sm7gm%2FzIKbdDvrA%2BVUWrsh5yTbBKG0KNPl6%2B66vc0o%2FdC7NElpGmBpjPH05VNeC1vTWOykLZRZ%2BWLbIbWiN6srS9CsvD&X-Amz-Signature=bc46939d0c6f9bf900548b5091c1f67aa9896a0b2af3c7ccf9b0cf22b6f74b82&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
