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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWCPM55%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID0HXxxPHlYKSRAU1CInHwMGHypa2urfMH6uNJzaXdvlAiEA6fNAyhjPnokyne2LL%2B%2B2RnIug1SNK4%2Bp3lY5w9XKJKYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhDvL9c4zkjnaFZlCrcAwdBiX5A7aPzI7e9zhseREMVGVIj9VWv5DH2IHu3%2BGBpKl1oiUwvKkoAS8brYfskjeia4vbuUqRIPzhOkvwzo4BbrWqhznwQCLlnPHehbUhRAWe%2BhRNB5EMn0PwUPMbSxq7wUB6Ao%2Fntk8kqC6Cqg9M31dLsCcnDxvfGAie7i5PQJfEEGEX1RdBsXy8oQ1Suea9Vl70WuSDzEoO4PNA8UZ7SElQQEPNBKFmEBBev6N7ZSY%2BbXAdMG%2BSZbRPsuPdX6sWpcHHuyjiP1PFSFtxrwpsWa%2Be6OCKQlrLgWm4IR9QHgfoxwpDcH8rMH5Mz5dK0omG7nDawNnUToU%2Fi5f6qnqCNj3%2FpZpIQIFU2CBXyIZuxhES2QpDseb9xaiNRz3JfyM3VVLdqipIjAOw2oHuWaYvHUwcP1HVM3wtqjgZxCCzYaFLDvbgPKgcEIZre6XIj3eFY4UlCQgn24HLhyEfeByPIZ6zR4XCVxaRqbhnOOYIvwJ%2BOF2ZijIsem1uPkFrGfS2XH%2B2RDry9TZrnXLozLKhkSJmv3PSbfdYIcoN28vqdz%2Bif2uzxHsDeSl1G47es%2FDSucPCfdliVsFANggA4auU3f9CWwmfpC3OT6%2FR%2BbFvwqZHeGEfy202Vc9GtMIKCq78GOqUBzHDk1U6sAjAbHTOSla4K9AoZMXMnxdaqvUPrCnd2P4fhFt%2BpYyTf%2BpdrsU2TGg5sUcgUOdXk0JUsn2XxlFf6FYScba45c8Wnb5Lja8AeVVkFHBJrNm%2Blniq0aAaKF6sqlqV8GCvLT5GUhobk%2BmXZkOocML5FUzG7F%2BOZmHkIavyvRnnaEvUbyg0ssoo%2FJNRXlNsIRTJDVW5rHZR2jyaOYaE8jqvv&X-Amz-Signature=adfb4e4a685ebcc65300b5dea2e3b971cb43d32c88d03c6b095d9e9863c33c38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWCPM55%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID0HXxxPHlYKSRAU1CInHwMGHypa2urfMH6uNJzaXdvlAiEA6fNAyhjPnokyne2LL%2B%2B2RnIug1SNK4%2Bp3lY5w9XKJKYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhDvL9c4zkjnaFZlCrcAwdBiX5A7aPzI7e9zhseREMVGVIj9VWv5DH2IHu3%2BGBpKl1oiUwvKkoAS8brYfskjeia4vbuUqRIPzhOkvwzo4BbrWqhznwQCLlnPHehbUhRAWe%2BhRNB5EMn0PwUPMbSxq7wUB6Ao%2Fntk8kqC6Cqg9M31dLsCcnDxvfGAie7i5PQJfEEGEX1RdBsXy8oQ1Suea9Vl70WuSDzEoO4PNA8UZ7SElQQEPNBKFmEBBev6N7ZSY%2BbXAdMG%2BSZbRPsuPdX6sWpcHHuyjiP1PFSFtxrwpsWa%2Be6OCKQlrLgWm4IR9QHgfoxwpDcH8rMH5Mz5dK0omG7nDawNnUToU%2Fi5f6qnqCNj3%2FpZpIQIFU2CBXyIZuxhES2QpDseb9xaiNRz3JfyM3VVLdqipIjAOw2oHuWaYvHUwcP1HVM3wtqjgZxCCzYaFLDvbgPKgcEIZre6XIj3eFY4UlCQgn24HLhyEfeByPIZ6zR4XCVxaRqbhnOOYIvwJ%2BOF2ZijIsem1uPkFrGfS2XH%2B2RDry9TZrnXLozLKhkSJmv3PSbfdYIcoN28vqdz%2Bif2uzxHsDeSl1G47es%2FDSucPCfdliVsFANggA4auU3f9CWwmfpC3OT6%2FR%2BbFvwqZHeGEfy202Vc9GtMIKCq78GOqUBzHDk1U6sAjAbHTOSla4K9AoZMXMnxdaqvUPrCnd2P4fhFt%2BpYyTf%2BpdrsU2TGg5sUcgUOdXk0JUsn2XxlFf6FYScba45c8Wnb5Lja8AeVVkFHBJrNm%2Blniq0aAaKF6sqlqV8GCvLT5GUhobk%2BmXZkOocML5FUzG7F%2BOZmHkIavyvRnnaEvUbyg0ssoo%2FJNRXlNsIRTJDVW5rHZR2jyaOYaE8jqvv&X-Amz-Signature=3f90270e95a4e4eb5198241716e1c6fa83f524040f8d2ad8dcd3079cef22b160&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWCPM55%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID0HXxxPHlYKSRAU1CInHwMGHypa2urfMH6uNJzaXdvlAiEA6fNAyhjPnokyne2LL%2B%2B2RnIug1SNK4%2Bp3lY5w9XKJKYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhDvL9c4zkjnaFZlCrcAwdBiX5A7aPzI7e9zhseREMVGVIj9VWv5DH2IHu3%2BGBpKl1oiUwvKkoAS8brYfskjeia4vbuUqRIPzhOkvwzo4BbrWqhznwQCLlnPHehbUhRAWe%2BhRNB5EMn0PwUPMbSxq7wUB6Ao%2Fntk8kqC6Cqg9M31dLsCcnDxvfGAie7i5PQJfEEGEX1RdBsXy8oQ1Suea9Vl70WuSDzEoO4PNA8UZ7SElQQEPNBKFmEBBev6N7ZSY%2BbXAdMG%2BSZbRPsuPdX6sWpcHHuyjiP1PFSFtxrwpsWa%2Be6OCKQlrLgWm4IR9QHgfoxwpDcH8rMH5Mz5dK0omG7nDawNnUToU%2Fi5f6qnqCNj3%2FpZpIQIFU2CBXyIZuxhES2QpDseb9xaiNRz3JfyM3VVLdqipIjAOw2oHuWaYvHUwcP1HVM3wtqjgZxCCzYaFLDvbgPKgcEIZre6XIj3eFY4UlCQgn24HLhyEfeByPIZ6zR4XCVxaRqbhnOOYIvwJ%2BOF2ZijIsem1uPkFrGfS2XH%2B2RDry9TZrnXLozLKhkSJmv3PSbfdYIcoN28vqdz%2Bif2uzxHsDeSl1G47es%2FDSucPCfdliVsFANggA4auU3f9CWwmfpC3OT6%2FR%2BbFvwqZHeGEfy202Vc9GtMIKCq78GOqUBzHDk1U6sAjAbHTOSla4K9AoZMXMnxdaqvUPrCnd2P4fhFt%2BpYyTf%2BpdrsU2TGg5sUcgUOdXk0JUsn2XxlFf6FYScba45c8Wnb5Lja8AeVVkFHBJrNm%2Blniq0aAaKF6sqlqV8GCvLT5GUhobk%2BmXZkOocML5FUzG7F%2BOZmHkIavyvRnnaEvUbyg0ssoo%2FJNRXlNsIRTJDVW5rHZR2jyaOYaE8jqvv&X-Amz-Signature=72458780edd3db5b0c690be60bdf4c0f781effb2501bd8de53aa0297e5764143&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWCPM55%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID0HXxxPHlYKSRAU1CInHwMGHypa2urfMH6uNJzaXdvlAiEA6fNAyhjPnokyne2LL%2B%2B2RnIug1SNK4%2Bp3lY5w9XKJKYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhDvL9c4zkjnaFZlCrcAwdBiX5A7aPzI7e9zhseREMVGVIj9VWv5DH2IHu3%2BGBpKl1oiUwvKkoAS8brYfskjeia4vbuUqRIPzhOkvwzo4BbrWqhznwQCLlnPHehbUhRAWe%2BhRNB5EMn0PwUPMbSxq7wUB6Ao%2Fntk8kqC6Cqg9M31dLsCcnDxvfGAie7i5PQJfEEGEX1RdBsXy8oQ1Suea9Vl70WuSDzEoO4PNA8UZ7SElQQEPNBKFmEBBev6N7ZSY%2BbXAdMG%2BSZbRPsuPdX6sWpcHHuyjiP1PFSFtxrwpsWa%2Be6OCKQlrLgWm4IR9QHgfoxwpDcH8rMH5Mz5dK0omG7nDawNnUToU%2Fi5f6qnqCNj3%2FpZpIQIFU2CBXyIZuxhES2QpDseb9xaiNRz3JfyM3VVLdqipIjAOw2oHuWaYvHUwcP1HVM3wtqjgZxCCzYaFLDvbgPKgcEIZre6XIj3eFY4UlCQgn24HLhyEfeByPIZ6zR4XCVxaRqbhnOOYIvwJ%2BOF2ZijIsem1uPkFrGfS2XH%2B2RDry9TZrnXLozLKhkSJmv3PSbfdYIcoN28vqdz%2Bif2uzxHsDeSl1G47es%2FDSucPCfdliVsFANggA4auU3f9CWwmfpC3OT6%2FR%2BbFvwqZHeGEfy202Vc9GtMIKCq78GOqUBzHDk1U6sAjAbHTOSla4K9AoZMXMnxdaqvUPrCnd2P4fhFt%2BpYyTf%2BpdrsU2TGg5sUcgUOdXk0JUsn2XxlFf6FYScba45c8Wnb5Lja8AeVVkFHBJrNm%2Blniq0aAaKF6sqlqV8GCvLT5GUhobk%2BmXZkOocML5FUzG7F%2BOZmHkIavyvRnnaEvUbyg0ssoo%2FJNRXlNsIRTJDVW5rHZR2jyaOYaE8jqvv&X-Amz-Signature=721e5bdf5941f2917f492d37d19a68b51a48221763a472db3025276a3a1b2bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWCPM55%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID0HXxxPHlYKSRAU1CInHwMGHypa2urfMH6uNJzaXdvlAiEA6fNAyhjPnokyne2LL%2B%2B2RnIug1SNK4%2Bp3lY5w9XKJKYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhDvL9c4zkjnaFZlCrcAwdBiX5A7aPzI7e9zhseREMVGVIj9VWv5DH2IHu3%2BGBpKl1oiUwvKkoAS8brYfskjeia4vbuUqRIPzhOkvwzo4BbrWqhznwQCLlnPHehbUhRAWe%2BhRNB5EMn0PwUPMbSxq7wUB6Ao%2Fntk8kqC6Cqg9M31dLsCcnDxvfGAie7i5PQJfEEGEX1RdBsXy8oQ1Suea9Vl70WuSDzEoO4PNA8UZ7SElQQEPNBKFmEBBev6N7ZSY%2BbXAdMG%2BSZbRPsuPdX6sWpcHHuyjiP1PFSFtxrwpsWa%2Be6OCKQlrLgWm4IR9QHgfoxwpDcH8rMH5Mz5dK0omG7nDawNnUToU%2Fi5f6qnqCNj3%2FpZpIQIFU2CBXyIZuxhES2QpDseb9xaiNRz3JfyM3VVLdqipIjAOw2oHuWaYvHUwcP1HVM3wtqjgZxCCzYaFLDvbgPKgcEIZre6XIj3eFY4UlCQgn24HLhyEfeByPIZ6zR4XCVxaRqbhnOOYIvwJ%2BOF2ZijIsem1uPkFrGfS2XH%2B2RDry9TZrnXLozLKhkSJmv3PSbfdYIcoN28vqdz%2Bif2uzxHsDeSl1G47es%2FDSucPCfdliVsFANggA4auU3f9CWwmfpC3OT6%2FR%2BbFvwqZHeGEfy202Vc9GtMIKCq78GOqUBzHDk1U6sAjAbHTOSla4K9AoZMXMnxdaqvUPrCnd2P4fhFt%2BpYyTf%2BpdrsU2TGg5sUcgUOdXk0JUsn2XxlFf6FYScba45c8Wnb5Lja8AeVVkFHBJrNm%2Blniq0aAaKF6sqlqV8GCvLT5GUhobk%2BmXZkOocML5FUzG7F%2BOZmHkIavyvRnnaEvUbyg0ssoo%2FJNRXlNsIRTJDVW5rHZR2jyaOYaE8jqvv&X-Amz-Signature=84bbcafffcfd4c107cec47ffadc0a1cc67c710ca93a82a2d2c7b00603d60f23e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWCPM55%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID0HXxxPHlYKSRAU1CInHwMGHypa2urfMH6uNJzaXdvlAiEA6fNAyhjPnokyne2LL%2B%2B2RnIug1SNK4%2Bp3lY5w9XKJKYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhDvL9c4zkjnaFZlCrcAwdBiX5A7aPzI7e9zhseREMVGVIj9VWv5DH2IHu3%2BGBpKl1oiUwvKkoAS8brYfskjeia4vbuUqRIPzhOkvwzo4BbrWqhznwQCLlnPHehbUhRAWe%2BhRNB5EMn0PwUPMbSxq7wUB6Ao%2Fntk8kqC6Cqg9M31dLsCcnDxvfGAie7i5PQJfEEGEX1RdBsXy8oQ1Suea9Vl70WuSDzEoO4PNA8UZ7SElQQEPNBKFmEBBev6N7ZSY%2BbXAdMG%2BSZbRPsuPdX6sWpcHHuyjiP1PFSFtxrwpsWa%2Be6OCKQlrLgWm4IR9QHgfoxwpDcH8rMH5Mz5dK0omG7nDawNnUToU%2Fi5f6qnqCNj3%2FpZpIQIFU2CBXyIZuxhES2QpDseb9xaiNRz3JfyM3VVLdqipIjAOw2oHuWaYvHUwcP1HVM3wtqjgZxCCzYaFLDvbgPKgcEIZre6XIj3eFY4UlCQgn24HLhyEfeByPIZ6zR4XCVxaRqbhnOOYIvwJ%2BOF2ZijIsem1uPkFrGfS2XH%2B2RDry9TZrnXLozLKhkSJmv3PSbfdYIcoN28vqdz%2Bif2uzxHsDeSl1G47es%2FDSucPCfdliVsFANggA4auU3f9CWwmfpC3OT6%2FR%2BbFvwqZHeGEfy202Vc9GtMIKCq78GOqUBzHDk1U6sAjAbHTOSla4K9AoZMXMnxdaqvUPrCnd2P4fhFt%2BpYyTf%2BpdrsU2TGg5sUcgUOdXk0JUsn2XxlFf6FYScba45c8Wnb5Lja8AeVVkFHBJrNm%2Blniq0aAaKF6sqlqV8GCvLT5GUhobk%2BmXZkOocML5FUzG7F%2BOZmHkIavyvRnnaEvUbyg0ssoo%2FJNRXlNsIRTJDVW5rHZR2jyaOYaE8jqvv&X-Amz-Signature=d57a1c59a83be64d903cfe8cb21ade537d45abb5ce0a92b19d535256b66abf26&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWCPM55%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID0HXxxPHlYKSRAU1CInHwMGHypa2urfMH6uNJzaXdvlAiEA6fNAyhjPnokyne2LL%2B%2B2RnIug1SNK4%2Bp3lY5w9XKJKYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhDvL9c4zkjnaFZlCrcAwdBiX5A7aPzI7e9zhseREMVGVIj9VWv5DH2IHu3%2BGBpKl1oiUwvKkoAS8brYfskjeia4vbuUqRIPzhOkvwzo4BbrWqhznwQCLlnPHehbUhRAWe%2BhRNB5EMn0PwUPMbSxq7wUB6Ao%2Fntk8kqC6Cqg9M31dLsCcnDxvfGAie7i5PQJfEEGEX1RdBsXy8oQ1Suea9Vl70WuSDzEoO4PNA8UZ7SElQQEPNBKFmEBBev6N7ZSY%2BbXAdMG%2BSZbRPsuPdX6sWpcHHuyjiP1PFSFtxrwpsWa%2Be6OCKQlrLgWm4IR9QHgfoxwpDcH8rMH5Mz5dK0omG7nDawNnUToU%2Fi5f6qnqCNj3%2FpZpIQIFU2CBXyIZuxhES2QpDseb9xaiNRz3JfyM3VVLdqipIjAOw2oHuWaYvHUwcP1HVM3wtqjgZxCCzYaFLDvbgPKgcEIZre6XIj3eFY4UlCQgn24HLhyEfeByPIZ6zR4XCVxaRqbhnOOYIvwJ%2BOF2ZijIsem1uPkFrGfS2XH%2B2RDry9TZrnXLozLKhkSJmv3PSbfdYIcoN28vqdz%2Bif2uzxHsDeSl1G47es%2FDSucPCfdliVsFANggA4auU3f9CWwmfpC3OT6%2FR%2BbFvwqZHeGEfy202Vc9GtMIKCq78GOqUBzHDk1U6sAjAbHTOSla4K9AoZMXMnxdaqvUPrCnd2P4fhFt%2BpYyTf%2BpdrsU2TGg5sUcgUOdXk0JUsn2XxlFf6FYScba45c8Wnb5Lja8AeVVkFHBJrNm%2Blniq0aAaKF6sqlqV8GCvLT5GUhobk%2BmXZkOocML5FUzG7F%2BOZmHkIavyvRnnaEvUbyg0ssoo%2FJNRXlNsIRTJDVW5rHZR2jyaOYaE8jqvv&X-Amz-Signature=3ba7dcae515905d3cfa0174c16376eb7d1d270fb6f21a2ae01da10afe1e7a1bf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
