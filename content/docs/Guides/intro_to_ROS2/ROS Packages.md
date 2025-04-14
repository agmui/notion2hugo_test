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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIGQXUC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuBf1FaFNB%2BTjkh9PVITQSigU8%2Bg13K%2B%2B%2FrUaLHkt%2BcAiEAgHjjHKTweH3X7Id04725yRYwatC%2BATMdlVLVRTs925wq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBAcyw2MfMj9YeU6NyrcA9HH6giugxBH1Sr%2Bg0ocz7t%2FGX6wPFSf3rJH8bxaZ2MmAzeB9Mz3rvz8I%2FiE7AtvfAbQHWk%2FykJutcEJOkTs5fTSgH90OV1%2BPNCtsyzR3eVfcKuPiEvnmPoxDvWSGZdm8lGiLZDEMpxZj0VGimCQq1QMRIwwMgJe8tYQFCgwfziIWGuQSA6w2ixmOxI5FHtTYcqwM3pWBvWlE2uIgnnN9eNVk7aEmysNFFkvvYB%2BF%2FqTkSdKvKy8qI5OOAOUu0LzO1t5%2FSji1bE172QbVyVWCSmB6t61eHQ68ok8OBwamR3FAapl%2Fp2COQWDGHxSvYMoT7JofnM7TZBT3qpnVFrwWpeuiA89ZX0amrtXfHy%2FC4CiqUYK7QfMUd8O%2BgXyIhPW%2FV7ZoaYr4b8rCqhYB6DSRbrQXY3GhODaM13Y0o4yNMSaUFWMrlBERHqjaHb%2BednnqH7tisddvTijBRR%2BSzd5ViWNzP0fUk6z%2BZwU4K3XzvQvZTgzubO1nNAQB%2F0Hhw9%2Bk4erAe0sATBlHs9Do3xy6Z59ejhHcUeCXaTUbuotdofZ8N2VGO9GNA3DPyewbYSLNQBi5OpTFqToRt4tkk0FZ4mxStbo%2BqZXAIJ8v%2BRlgFEzvn1MA58rkJqs0%2F0iMNPj8r8GOqUBjEq0eOrhV49Nv8q7Z3OP2PE%2FE%2FZYe2kheZy3u9btsRVb5AVEOVkqUdsrOiHqdNQyxcrEPVeKwLymFOFq2uDvk0W8bpoXJUX28Z8sqmXEVg3a4hBY0VFPDVe9QSjmlNMyEf5reeOyM6xfL9yGWkI00XZeSFDmGHBrwc%2BzarY6cGNZochj8mfld0lvuvhpt9ksaCWtqzPDGcNOOS30kwa0OkzCwOOa&X-Amz-Signature=6b6ed3eba0ac31ec4e44db0893ba90b5e511461902637b82b8f66b9e2d79a34b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIGQXUC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuBf1FaFNB%2BTjkh9PVITQSigU8%2Bg13K%2B%2B%2FrUaLHkt%2BcAiEAgHjjHKTweH3X7Id04725yRYwatC%2BATMdlVLVRTs925wq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBAcyw2MfMj9YeU6NyrcA9HH6giugxBH1Sr%2Bg0ocz7t%2FGX6wPFSf3rJH8bxaZ2MmAzeB9Mz3rvz8I%2FiE7AtvfAbQHWk%2FykJutcEJOkTs5fTSgH90OV1%2BPNCtsyzR3eVfcKuPiEvnmPoxDvWSGZdm8lGiLZDEMpxZj0VGimCQq1QMRIwwMgJe8tYQFCgwfziIWGuQSA6w2ixmOxI5FHtTYcqwM3pWBvWlE2uIgnnN9eNVk7aEmysNFFkvvYB%2BF%2FqTkSdKvKy8qI5OOAOUu0LzO1t5%2FSji1bE172QbVyVWCSmB6t61eHQ68ok8OBwamR3FAapl%2Fp2COQWDGHxSvYMoT7JofnM7TZBT3qpnVFrwWpeuiA89ZX0amrtXfHy%2FC4CiqUYK7QfMUd8O%2BgXyIhPW%2FV7ZoaYr4b8rCqhYB6DSRbrQXY3GhODaM13Y0o4yNMSaUFWMrlBERHqjaHb%2BednnqH7tisddvTijBRR%2BSzd5ViWNzP0fUk6z%2BZwU4K3XzvQvZTgzubO1nNAQB%2F0Hhw9%2Bk4erAe0sATBlHs9Do3xy6Z59ejhHcUeCXaTUbuotdofZ8N2VGO9GNA3DPyewbYSLNQBi5OpTFqToRt4tkk0FZ4mxStbo%2BqZXAIJ8v%2BRlgFEzvn1MA58rkJqs0%2F0iMNPj8r8GOqUBjEq0eOrhV49Nv8q7Z3OP2PE%2FE%2FZYe2kheZy3u9btsRVb5AVEOVkqUdsrOiHqdNQyxcrEPVeKwLymFOFq2uDvk0W8bpoXJUX28Z8sqmXEVg3a4hBY0VFPDVe9QSjmlNMyEf5reeOyM6xfL9yGWkI00XZeSFDmGHBrwc%2BzarY6cGNZochj8mfld0lvuvhpt9ksaCWtqzPDGcNOOS30kwa0OkzCwOOa&X-Amz-Signature=13be8f38afb7fe24c72317c83c6324d55b4abe50d6c5a813fff30715185ff50d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIGQXUC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuBf1FaFNB%2BTjkh9PVITQSigU8%2Bg13K%2B%2B%2FrUaLHkt%2BcAiEAgHjjHKTweH3X7Id04725yRYwatC%2BATMdlVLVRTs925wq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBAcyw2MfMj9YeU6NyrcA9HH6giugxBH1Sr%2Bg0ocz7t%2FGX6wPFSf3rJH8bxaZ2MmAzeB9Mz3rvz8I%2FiE7AtvfAbQHWk%2FykJutcEJOkTs5fTSgH90OV1%2BPNCtsyzR3eVfcKuPiEvnmPoxDvWSGZdm8lGiLZDEMpxZj0VGimCQq1QMRIwwMgJe8tYQFCgwfziIWGuQSA6w2ixmOxI5FHtTYcqwM3pWBvWlE2uIgnnN9eNVk7aEmysNFFkvvYB%2BF%2FqTkSdKvKy8qI5OOAOUu0LzO1t5%2FSji1bE172QbVyVWCSmB6t61eHQ68ok8OBwamR3FAapl%2Fp2COQWDGHxSvYMoT7JofnM7TZBT3qpnVFrwWpeuiA89ZX0amrtXfHy%2FC4CiqUYK7QfMUd8O%2BgXyIhPW%2FV7ZoaYr4b8rCqhYB6DSRbrQXY3GhODaM13Y0o4yNMSaUFWMrlBERHqjaHb%2BednnqH7tisddvTijBRR%2BSzd5ViWNzP0fUk6z%2BZwU4K3XzvQvZTgzubO1nNAQB%2F0Hhw9%2Bk4erAe0sATBlHs9Do3xy6Z59ejhHcUeCXaTUbuotdofZ8N2VGO9GNA3DPyewbYSLNQBi5OpTFqToRt4tkk0FZ4mxStbo%2BqZXAIJ8v%2BRlgFEzvn1MA58rkJqs0%2F0iMNPj8r8GOqUBjEq0eOrhV49Nv8q7Z3OP2PE%2FE%2FZYe2kheZy3u9btsRVb5AVEOVkqUdsrOiHqdNQyxcrEPVeKwLymFOFq2uDvk0W8bpoXJUX28Z8sqmXEVg3a4hBY0VFPDVe9QSjmlNMyEf5reeOyM6xfL9yGWkI00XZeSFDmGHBrwc%2BzarY6cGNZochj8mfld0lvuvhpt9ksaCWtqzPDGcNOOS30kwa0OkzCwOOa&X-Amz-Signature=cc88e64eec75edce77f7ff2f8835178e3d97e6364afe8fbe0061698d928e6b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIGQXUC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuBf1FaFNB%2BTjkh9PVITQSigU8%2Bg13K%2B%2B%2FrUaLHkt%2BcAiEAgHjjHKTweH3X7Id04725yRYwatC%2BATMdlVLVRTs925wq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBAcyw2MfMj9YeU6NyrcA9HH6giugxBH1Sr%2Bg0ocz7t%2FGX6wPFSf3rJH8bxaZ2MmAzeB9Mz3rvz8I%2FiE7AtvfAbQHWk%2FykJutcEJOkTs5fTSgH90OV1%2BPNCtsyzR3eVfcKuPiEvnmPoxDvWSGZdm8lGiLZDEMpxZj0VGimCQq1QMRIwwMgJe8tYQFCgwfziIWGuQSA6w2ixmOxI5FHtTYcqwM3pWBvWlE2uIgnnN9eNVk7aEmysNFFkvvYB%2BF%2FqTkSdKvKy8qI5OOAOUu0LzO1t5%2FSji1bE172QbVyVWCSmB6t61eHQ68ok8OBwamR3FAapl%2Fp2COQWDGHxSvYMoT7JofnM7TZBT3qpnVFrwWpeuiA89ZX0amrtXfHy%2FC4CiqUYK7QfMUd8O%2BgXyIhPW%2FV7ZoaYr4b8rCqhYB6DSRbrQXY3GhODaM13Y0o4yNMSaUFWMrlBERHqjaHb%2BednnqH7tisddvTijBRR%2BSzd5ViWNzP0fUk6z%2BZwU4K3XzvQvZTgzubO1nNAQB%2F0Hhw9%2Bk4erAe0sATBlHs9Do3xy6Z59ejhHcUeCXaTUbuotdofZ8N2VGO9GNA3DPyewbYSLNQBi5OpTFqToRt4tkk0FZ4mxStbo%2BqZXAIJ8v%2BRlgFEzvn1MA58rkJqs0%2F0iMNPj8r8GOqUBjEq0eOrhV49Nv8q7Z3OP2PE%2FE%2FZYe2kheZy3u9btsRVb5AVEOVkqUdsrOiHqdNQyxcrEPVeKwLymFOFq2uDvk0W8bpoXJUX28Z8sqmXEVg3a4hBY0VFPDVe9QSjmlNMyEf5reeOyM6xfL9yGWkI00XZeSFDmGHBrwc%2BzarY6cGNZochj8mfld0lvuvhpt9ksaCWtqzPDGcNOOS30kwa0OkzCwOOa&X-Amz-Signature=49c2dafbab48b8e0508c8b1b024e11235d2d6fe962ae6fe4487c101fdd517262&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIGQXUC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuBf1FaFNB%2BTjkh9PVITQSigU8%2Bg13K%2B%2B%2FrUaLHkt%2BcAiEAgHjjHKTweH3X7Id04725yRYwatC%2BATMdlVLVRTs925wq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBAcyw2MfMj9YeU6NyrcA9HH6giugxBH1Sr%2Bg0ocz7t%2FGX6wPFSf3rJH8bxaZ2MmAzeB9Mz3rvz8I%2FiE7AtvfAbQHWk%2FykJutcEJOkTs5fTSgH90OV1%2BPNCtsyzR3eVfcKuPiEvnmPoxDvWSGZdm8lGiLZDEMpxZj0VGimCQq1QMRIwwMgJe8tYQFCgwfziIWGuQSA6w2ixmOxI5FHtTYcqwM3pWBvWlE2uIgnnN9eNVk7aEmysNFFkvvYB%2BF%2FqTkSdKvKy8qI5OOAOUu0LzO1t5%2FSji1bE172QbVyVWCSmB6t61eHQ68ok8OBwamR3FAapl%2Fp2COQWDGHxSvYMoT7JofnM7TZBT3qpnVFrwWpeuiA89ZX0amrtXfHy%2FC4CiqUYK7QfMUd8O%2BgXyIhPW%2FV7ZoaYr4b8rCqhYB6DSRbrQXY3GhODaM13Y0o4yNMSaUFWMrlBERHqjaHb%2BednnqH7tisddvTijBRR%2BSzd5ViWNzP0fUk6z%2BZwU4K3XzvQvZTgzubO1nNAQB%2F0Hhw9%2Bk4erAe0sATBlHs9Do3xy6Z59ejhHcUeCXaTUbuotdofZ8N2VGO9GNA3DPyewbYSLNQBi5OpTFqToRt4tkk0FZ4mxStbo%2BqZXAIJ8v%2BRlgFEzvn1MA58rkJqs0%2F0iMNPj8r8GOqUBjEq0eOrhV49Nv8q7Z3OP2PE%2FE%2FZYe2kheZy3u9btsRVb5AVEOVkqUdsrOiHqdNQyxcrEPVeKwLymFOFq2uDvk0W8bpoXJUX28Z8sqmXEVg3a4hBY0VFPDVe9QSjmlNMyEf5reeOyM6xfL9yGWkI00XZeSFDmGHBrwc%2BzarY6cGNZochj8mfld0lvuvhpt9ksaCWtqzPDGcNOOS30kwa0OkzCwOOa&X-Amz-Signature=e80222a2b88c3527f7b53796c16c8e9a570348750a8f6da49e9931d46ce61655&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIGQXUC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuBf1FaFNB%2BTjkh9PVITQSigU8%2Bg13K%2B%2B%2FrUaLHkt%2BcAiEAgHjjHKTweH3X7Id04725yRYwatC%2BATMdlVLVRTs925wq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBAcyw2MfMj9YeU6NyrcA9HH6giugxBH1Sr%2Bg0ocz7t%2FGX6wPFSf3rJH8bxaZ2MmAzeB9Mz3rvz8I%2FiE7AtvfAbQHWk%2FykJutcEJOkTs5fTSgH90OV1%2BPNCtsyzR3eVfcKuPiEvnmPoxDvWSGZdm8lGiLZDEMpxZj0VGimCQq1QMRIwwMgJe8tYQFCgwfziIWGuQSA6w2ixmOxI5FHtTYcqwM3pWBvWlE2uIgnnN9eNVk7aEmysNFFkvvYB%2BF%2FqTkSdKvKy8qI5OOAOUu0LzO1t5%2FSji1bE172QbVyVWCSmB6t61eHQ68ok8OBwamR3FAapl%2Fp2COQWDGHxSvYMoT7JofnM7TZBT3qpnVFrwWpeuiA89ZX0amrtXfHy%2FC4CiqUYK7QfMUd8O%2BgXyIhPW%2FV7ZoaYr4b8rCqhYB6DSRbrQXY3GhODaM13Y0o4yNMSaUFWMrlBERHqjaHb%2BednnqH7tisddvTijBRR%2BSzd5ViWNzP0fUk6z%2BZwU4K3XzvQvZTgzubO1nNAQB%2F0Hhw9%2Bk4erAe0sATBlHs9Do3xy6Z59ejhHcUeCXaTUbuotdofZ8N2VGO9GNA3DPyewbYSLNQBi5OpTFqToRt4tkk0FZ4mxStbo%2BqZXAIJ8v%2BRlgFEzvn1MA58rkJqs0%2F0iMNPj8r8GOqUBjEq0eOrhV49Nv8q7Z3OP2PE%2FE%2FZYe2kheZy3u9btsRVb5AVEOVkqUdsrOiHqdNQyxcrEPVeKwLymFOFq2uDvk0W8bpoXJUX28Z8sqmXEVg3a4hBY0VFPDVe9QSjmlNMyEf5reeOyM6xfL9yGWkI00XZeSFDmGHBrwc%2BzarY6cGNZochj8mfld0lvuvhpt9ksaCWtqzPDGcNOOS30kwa0OkzCwOOa&X-Amz-Signature=cd3ade9326e1f798f78bc67f99f9c3e9c7390d21026b2b96d82fd817f6b3cff8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIGQXUC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuBf1FaFNB%2BTjkh9PVITQSigU8%2Bg13K%2B%2B%2FrUaLHkt%2BcAiEAgHjjHKTweH3X7Id04725yRYwatC%2BATMdlVLVRTs925wq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBAcyw2MfMj9YeU6NyrcA9HH6giugxBH1Sr%2Bg0ocz7t%2FGX6wPFSf3rJH8bxaZ2MmAzeB9Mz3rvz8I%2FiE7AtvfAbQHWk%2FykJutcEJOkTs5fTSgH90OV1%2BPNCtsyzR3eVfcKuPiEvnmPoxDvWSGZdm8lGiLZDEMpxZj0VGimCQq1QMRIwwMgJe8tYQFCgwfziIWGuQSA6w2ixmOxI5FHtTYcqwM3pWBvWlE2uIgnnN9eNVk7aEmysNFFkvvYB%2BF%2FqTkSdKvKy8qI5OOAOUu0LzO1t5%2FSji1bE172QbVyVWCSmB6t61eHQ68ok8OBwamR3FAapl%2Fp2COQWDGHxSvYMoT7JofnM7TZBT3qpnVFrwWpeuiA89ZX0amrtXfHy%2FC4CiqUYK7QfMUd8O%2BgXyIhPW%2FV7ZoaYr4b8rCqhYB6DSRbrQXY3GhODaM13Y0o4yNMSaUFWMrlBERHqjaHb%2BednnqH7tisddvTijBRR%2BSzd5ViWNzP0fUk6z%2BZwU4K3XzvQvZTgzubO1nNAQB%2F0Hhw9%2Bk4erAe0sATBlHs9Do3xy6Z59ejhHcUeCXaTUbuotdofZ8N2VGO9GNA3DPyewbYSLNQBi5OpTFqToRt4tkk0FZ4mxStbo%2BqZXAIJ8v%2BRlgFEzvn1MA58rkJqs0%2F0iMNPj8r8GOqUBjEq0eOrhV49Nv8q7Z3OP2PE%2FE%2FZYe2kheZy3u9btsRVb5AVEOVkqUdsrOiHqdNQyxcrEPVeKwLymFOFq2uDvk0W8bpoXJUX28Z8sqmXEVg3a4hBY0VFPDVe9QSjmlNMyEf5reeOyM6xfL9yGWkI00XZeSFDmGHBrwc%2BzarY6cGNZochj8mfld0lvuvhpt9ksaCWtqzPDGcNOOS30kwa0OkzCwOOa&X-Amz-Signature=0b9596b37efeab3ceee92eeac89fdffa61d9b429a53fd597811e99b0a2ec98d6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
