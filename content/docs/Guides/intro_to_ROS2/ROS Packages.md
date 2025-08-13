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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=1b23a175a35fbf2c95c0528a8a7afec086dae9379c8f907bb1cd209b404b6060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=6b41a2d5e367e575cc1c2786555d8aae284cee1e645ab0636116447303648e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=280c27277d9ded8bedd9f7c24c77afb03e0175762602fc1e55f825361831a3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=297b31bcdcff3f60763555fa097dc944a8884599c64d00742ef2edd274e357de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=45af0d256c9f4e863b7d902b21b8e31e7c7b045b4aa065bdd405d98b7890dcfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=447d4384b8d3f5c9b2805b86fbac93ab8a8f43f69aad08e7861e6ad3de7f569e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=8c9cb80bd7ea1f3d83aeaa0031c7a613a0a1af2b7673f5c5f562dcd132d2b6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
