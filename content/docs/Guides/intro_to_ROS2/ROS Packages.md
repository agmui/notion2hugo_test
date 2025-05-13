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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7J3MX7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE0q5q3QVOuuCwvZdvV%2BRZg3I4d97ahu4D5pOTpfCgGEAiEA0%2FsIkNN4UGY1qNUHJ87jaO8gzOUgETTYKwRtb%2Fs%2FwCUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElgZ8E6%2BSS2cpw29yrcAzKAM1ITybCIJUY65ac2lYjqm9ZqJumEqcbX7GEp4U3Qk7nnFhkXL7ucodI0NyjqbY2O9HiRmSvUZ0aMQunondTGpFLCv0ZepbQAuw7Lw%2BrO%2FXg9a7zNnmLVdPXZN7jiDQEHkAD30ndgk%2BViuFD24AEGNxL5OlRf85EulmuZ2jEnqMRQkBBs3%2FMpquWpKnm4wqj3kKkV7E9NsNgDRZB0d5KmW2MRKGWuMCr94L9OXxv6lUuiCO8ZHNLnw1M%2F1w0dzRN0vvJqB%2Bo1jxKEA%2FPtYeuDWU65v2iBT988yLE1vQiuVLSjS4jCsqiPO0YlTxgXBL%2FJW45by61OSqXTapln%2FFyTTaSAsAuFs1cEgSwogSJKjOULgDTN97Uo3vhdpdM5g%2B1tiX%2FD4EAsqD7FfmLVOEii68fzuN%2Bj0kEGOT7Z3A7oADXAEoiLRTVpsjd3ncc0TtVzb54pyyPn7DJ0Q1Hj0STfUS1HChTZiRoQTEwzabGCEDe42fL5pVBsRkl8alFnTlE%2BXBZdo6Afigz6xgpt9VpNkOFVBAYIfgA24dxVRdxMDbbx7yYCQy5j1ImrcW%2Brnu%2BmXR8qBRymUie186lOCKAehC4CC2cc5WzgxwrmczD9j1X2aZryzhlBauMPMLaRisEGOqUBGe%2BT9inKSJrvyi6svLCRNMoibzeoZDP1zEx8XZuD4hekd0LnHX1eh%2BSFrhG0kLHjvjWgtFv5bFu32L7EuJ4yE7RvZ8PPTwBM5LtPF8XoPuq7yY7EE3NXPkMr8xLnI2v6JJMKpw47%2BTpNEXhzbhRvFnWqy%2FSFtJqYJ3PANXLtQT%2B5Mv4lbCtfV8CaN76W97ZVmE4JfFMmAI0ShUn9bZwyembxOiiA&X-Amz-Signature=6986a9253db54f921e29a9dc16a69c7a9dd1f3c46cd35ed244ad783f5ccfb117&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7J3MX7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE0q5q3QVOuuCwvZdvV%2BRZg3I4d97ahu4D5pOTpfCgGEAiEA0%2FsIkNN4UGY1qNUHJ87jaO8gzOUgETTYKwRtb%2Fs%2FwCUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElgZ8E6%2BSS2cpw29yrcAzKAM1ITybCIJUY65ac2lYjqm9ZqJumEqcbX7GEp4U3Qk7nnFhkXL7ucodI0NyjqbY2O9HiRmSvUZ0aMQunondTGpFLCv0ZepbQAuw7Lw%2BrO%2FXg9a7zNnmLVdPXZN7jiDQEHkAD30ndgk%2BViuFD24AEGNxL5OlRf85EulmuZ2jEnqMRQkBBs3%2FMpquWpKnm4wqj3kKkV7E9NsNgDRZB0d5KmW2MRKGWuMCr94L9OXxv6lUuiCO8ZHNLnw1M%2F1w0dzRN0vvJqB%2Bo1jxKEA%2FPtYeuDWU65v2iBT988yLE1vQiuVLSjS4jCsqiPO0YlTxgXBL%2FJW45by61OSqXTapln%2FFyTTaSAsAuFs1cEgSwogSJKjOULgDTN97Uo3vhdpdM5g%2B1tiX%2FD4EAsqD7FfmLVOEii68fzuN%2Bj0kEGOT7Z3A7oADXAEoiLRTVpsjd3ncc0TtVzb54pyyPn7DJ0Q1Hj0STfUS1HChTZiRoQTEwzabGCEDe42fL5pVBsRkl8alFnTlE%2BXBZdo6Afigz6xgpt9VpNkOFVBAYIfgA24dxVRdxMDbbx7yYCQy5j1ImrcW%2Brnu%2BmXR8qBRymUie186lOCKAehC4CC2cc5WzgxwrmczD9j1X2aZryzhlBauMPMLaRisEGOqUBGe%2BT9inKSJrvyi6svLCRNMoibzeoZDP1zEx8XZuD4hekd0LnHX1eh%2BSFrhG0kLHjvjWgtFv5bFu32L7EuJ4yE7RvZ8PPTwBM5LtPF8XoPuq7yY7EE3NXPkMr8xLnI2v6JJMKpw47%2BTpNEXhzbhRvFnWqy%2FSFtJqYJ3PANXLtQT%2B5Mv4lbCtfV8CaN76W97ZVmE4JfFMmAI0ShUn9bZwyembxOiiA&X-Amz-Signature=9eeb0b9fac46fff3dc57867fcce38849e9190efdc83c4b9c5da69e14f0f18fb7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7J3MX7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE0q5q3QVOuuCwvZdvV%2BRZg3I4d97ahu4D5pOTpfCgGEAiEA0%2FsIkNN4UGY1qNUHJ87jaO8gzOUgETTYKwRtb%2Fs%2FwCUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElgZ8E6%2BSS2cpw29yrcAzKAM1ITybCIJUY65ac2lYjqm9ZqJumEqcbX7GEp4U3Qk7nnFhkXL7ucodI0NyjqbY2O9HiRmSvUZ0aMQunondTGpFLCv0ZepbQAuw7Lw%2BrO%2FXg9a7zNnmLVdPXZN7jiDQEHkAD30ndgk%2BViuFD24AEGNxL5OlRf85EulmuZ2jEnqMRQkBBs3%2FMpquWpKnm4wqj3kKkV7E9NsNgDRZB0d5KmW2MRKGWuMCr94L9OXxv6lUuiCO8ZHNLnw1M%2F1w0dzRN0vvJqB%2Bo1jxKEA%2FPtYeuDWU65v2iBT988yLE1vQiuVLSjS4jCsqiPO0YlTxgXBL%2FJW45by61OSqXTapln%2FFyTTaSAsAuFs1cEgSwogSJKjOULgDTN97Uo3vhdpdM5g%2B1tiX%2FD4EAsqD7FfmLVOEii68fzuN%2Bj0kEGOT7Z3A7oADXAEoiLRTVpsjd3ncc0TtVzb54pyyPn7DJ0Q1Hj0STfUS1HChTZiRoQTEwzabGCEDe42fL5pVBsRkl8alFnTlE%2BXBZdo6Afigz6xgpt9VpNkOFVBAYIfgA24dxVRdxMDbbx7yYCQy5j1ImrcW%2Brnu%2BmXR8qBRymUie186lOCKAehC4CC2cc5WzgxwrmczD9j1X2aZryzhlBauMPMLaRisEGOqUBGe%2BT9inKSJrvyi6svLCRNMoibzeoZDP1zEx8XZuD4hekd0LnHX1eh%2BSFrhG0kLHjvjWgtFv5bFu32L7EuJ4yE7RvZ8PPTwBM5LtPF8XoPuq7yY7EE3NXPkMr8xLnI2v6JJMKpw47%2BTpNEXhzbhRvFnWqy%2FSFtJqYJ3PANXLtQT%2B5Mv4lbCtfV8CaN76W97ZVmE4JfFMmAI0ShUn9bZwyembxOiiA&X-Amz-Signature=719d1c9d47d2441559dd7b94f4c6d8b4c9102347ed31ea95a3e628a6407caa3c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7J3MX7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE0q5q3QVOuuCwvZdvV%2BRZg3I4d97ahu4D5pOTpfCgGEAiEA0%2FsIkNN4UGY1qNUHJ87jaO8gzOUgETTYKwRtb%2Fs%2FwCUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElgZ8E6%2BSS2cpw29yrcAzKAM1ITybCIJUY65ac2lYjqm9ZqJumEqcbX7GEp4U3Qk7nnFhkXL7ucodI0NyjqbY2O9HiRmSvUZ0aMQunondTGpFLCv0ZepbQAuw7Lw%2BrO%2FXg9a7zNnmLVdPXZN7jiDQEHkAD30ndgk%2BViuFD24AEGNxL5OlRf85EulmuZ2jEnqMRQkBBs3%2FMpquWpKnm4wqj3kKkV7E9NsNgDRZB0d5KmW2MRKGWuMCr94L9OXxv6lUuiCO8ZHNLnw1M%2F1w0dzRN0vvJqB%2Bo1jxKEA%2FPtYeuDWU65v2iBT988yLE1vQiuVLSjS4jCsqiPO0YlTxgXBL%2FJW45by61OSqXTapln%2FFyTTaSAsAuFs1cEgSwogSJKjOULgDTN97Uo3vhdpdM5g%2B1tiX%2FD4EAsqD7FfmLVOEii68fzuN%2Bj0kEGOT7Z3A7oADXAEoiLRTVpsjd3ncc0TtVzb54pyyPn7DJ0Q1Hj0STfUS1HChTZiRoQTEwzabGCEDe42fL5pVBsRkl8alFnTlE%2BXBZdo6Afigz6xgpt9VpNkOFVBAYIfgA24dxVRdxMDbbx7yYCQy5j1ImrcW%2Brnu%2BmXR8qBRymUie186lOCKAehC4CC2cc5WzgxwrmczD9j1X2aZryzhlBauMPMLaRisEGOqUBGe%2BT9inKSJrvyi6svLCRNMoibzeoZDP1zEx8XZuD4hekd0LnHX1eh%2BSFrhG0kLHjvjWgtFv5bFu32L7EuJ4yE7RvZ8PPTwBM5LtPF8XoPuq7yY7EE3NXPkMr8xLnI2v6JJMKpw47%2BTpNEXhzbhRvFnWqy%2FSFtJqYJ3PANXLtQT%2B5Mv4lbCtfV8CaN76W97ZVmE4JfFMmAI0ShUn9bZwyembxOiiA&X-Amz-Signature=ae6e42f1e5b84c6825538a8be16dd2a48346a12728baa74d1263bde149f80e41&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7J3MX7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE0q5q3QVOuuCwvZdvV%2BRZg3I4d97ahu4D5pOTpfCgGEAiEA0%2FsIkNN4UGY1qNUHJ87jaO8gzOUgETTYKwRtb%2Fs%2FwCUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElgZ8E6%2BSS2cpw29yrcAzKAM1ITybCIJUY65ac2lYjqm9ZqJumEqcbX7GEp4U3Qk7nnFhkXL7ucodI0NyjqbY2O9HiRmSvUZ0aMQunondTGpFLCv0ZepbQAuw7Lw%2BrO%2FXg9a7zNnmLVdPXZN7jiDQEHkAD30ndgk%2BViuFD24AEGNxL5OlRf85EulmuZ2jEnqMRQkBBs3%2FMpquWpKnm4wqj3kKkV7E9NsNgDRZB0d5KmW2MRKGWuMCr94L9OXxv6lUuiCO8ZHNLnw1M%2F1w0dzRN0vvJqB%2Bo1jxKEA%2FPtYeuDWU65v2iBT988yLE1vQiuVLSjS4jCsqiPO0YlTxgXBL%2FJW45by61OSqXTapln%2FFyTTaSAsAuFs1cEgSwogSJKjOULgDTN97Uo3vhdpdM5g%2B1tiX%2FD4EAsqD7FfmLVOEii68fzuN%2Bj0kEGOT7Z3A7oADXAEoiLRTVpsjd3ncc0TtVzb54pyyPn7DJ0Q1Hj0STfUS1HChTZiRoQTEwzabGCEDe42fL5pVBsRkl8alFnTlE%2BXBZdo6Afigz6xgpt9VpNkOFVBAYIfgA24dxVRdxMDbbx7yYCQy5j1ImrcW%2Brnu%2BmXR8qBRymUie186lOCKAehC4CC2cc5WzgxwrmczD9j1X2aZryzhlBauMPMLaRisEGOqUBGe%2BT9inKSJrvyi6svLCRNMoibzeoZDP1zEx8XZuD4hekd0LnHX1eh%2BSFrhG0kLHjvjWgtFv5bFu32L7EuJ4yE7RvZ8PPTwBM5LtPF8XoPuq7yY7EE3NXPkMr8xLnI2v6JJMKpw47%2BTpNEXhzbhRvFnWqy%2FSFtJqYJ3PANXLtQT%2B5Mv4lbCtfV8CaN76W97ZVmE4JfFMmAI0ShUn9bZwyembxOiiA&X-Amz-Signature=edb68f2a4fbe30e0a7a71f0480a4d2c0c2c5ae59c034e9fae460aea59aeafbe9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7J3MX7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE0q5q3QVOuuCwvZdvV%2BRZg3I4d97ahu4D5pOTpfCgGEAiEA0%2FsIkNN4UGY1qNUHJ87jaO8gzOUgETTYKwRtb%2Fs%2FwCUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElgZ8E6%2BSS2cpw29yrcAzKAM1ITybCIJUY65ac2lYjqm9ZqJumEqcbX7GEp4U3Qk7nnFhkXL7ucodI0NyjqbY2O9HiRmSvUZ0aMQunondTGpFLCv0ZepbQAuw7Lw%2BrO%2FXg9a7zNnmLVdPXZN7jiDQEHkAD30ndgk%2BViuFD24AEGNxL5OlRf85EulmuZ2jEnqMRQkBBs3%2FMpquWpKnm4wqj3kKkV7E9NsNgDRZB0d5KmW2MRKGWuMCr94L9OXxv6lUuiCO8ZHNLnw1M%2F1w0dzRN0vvJqB%2Bo1jxKEA%2FPtYeuDWU65v2iBT988yLE1vQiuVLSjS4jCsqiPO0YlTxgXBL%2FJW45by61OSqXTapln%2FFyTTaSAsAuFs1cEgSwogSJKjOULgDTN97Uo3vhdpdM5g%2B1tiX%2FD4EAsqD7FfmLVOEii68fzuN%2Bj0kEGOT7Z3A7oADXAEoiLRTVpsjd3ncc0TtVzb54pyyPn7DJ0Q1Hj0STfUS1HChTZiRoQTEwzabGCEDe42fL5pVBsRkl8alFnTlE%2BXBZdo6Afigz6xgpt9VpNkOFVBAYIfgA24dxVRdxMDbbx7yYCQy5j1ImrcW%2Brnu%2BmXR8qBRymUie186lOCKAehC4CC2cc5WzgxwrmczD9j1X2aZryzhlBauMPMLaRisEGOqUBGe%2BT9inKSJrvyi6svLCRNMoibzeoZDP1zEx8XZuD4hekd0LnHX1eh%2BSFrhG0kLHjvjWgtFv5bFu32L7EuJ4yE7RvZ8PPTwBM5LtPF8XoPuq7yY7EE3NXPkMr8xLnI2v6JJMKpw47%2BTpNEXhzbhRvFnWqy%2FSFtJqYJ3PANXLtQT%2B5Mv4lbCtfV8CaN76W97ZVmE4JfFMmAI0ShUn9bZwyembxOiiA&X-Amz-Signature=31ee3ac068a5da0e450123e6906cd0925b94f6ac47bca84c707d225247e5b67c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7J3MX7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE0q5q3QVOuuCwvZdvV%2BRZg3I4d97ahu4D5pOTpfCgGEAiEA0%2FsIkNN4UGY1qNUHJ87jaO8gzOUgETTYKwRtb%2Fs%2FwCUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElgZ8E6%2BSS2cpw29yrcAzKAM1ITybCIJUY65ac2lYjqm9ZqJumEqcbX7GEp4U3Qk7nnFhkXL7ucodI0NyjqbY2O9HiRmSvUZ0aMQunondTGpFLCv0ZepbQAuw7Lw%2BrO%2FXg9a7zNnmLVdPXZN7jiDQEHkAD30ndgk%2BViuFD24AEGNxL5OlRf85EulmuZ2jEnqMRQkBBs3%2FMpquWpKnm4wqj3kKkV7E9NsNgDRZB0d5KmW2MRKGWuMCr94L9OXxv6lUuiCO8ZHNLnw1M%2F1w0dzRN0vvJqB%2Bo1jxKEA%2FPtYeuDWU65v2iBT988yLE1vQiuVLSjS4jCsqiPO0YlTxgXBL%2FJW45by61OSqXTapln%2FFyTTaSAsAuFs1cEgSwogSJKjOULgDTN97Uo3vhdpdM5g%2B1tiX%2FD4EAsqD7FfmLVOEii68fzuN%2Bj0kEGOT7Z3A7oADXAEoiLRTVpsjd3ncc0TtVzb54pyyPn7DJ0Q1Hj0STfUS1HChTZiRoQTEwzabGCEDe42fL5pVBsRkl8alFnTlE%2BXBZdo6Afigz6xgpt9VpNkOFVBAYIfgA24dxVRdxMDbbx7yYCQy5j1ImrcW%2Brnu%2BmXR8qBRymUie186lOCKAehC4CC2cc5WzgxwrmczD9j1X2aZryzhlBauMPMLaRisEGOqUBGe%2BT9inKSJrvyi6svLCRNMoibzeoZDP1zEx8XZuD4hekd0LnHX1eh%2BSFrhG0kLHjvjWgtFv5bFu32L7EuJ4yE7RvZ8PPTwBM5LtPF8XoPuq7yY7EE3NXPkMr8xLnI2v6JJMKpw47%2BTpNEXhzbhRvFnWqy%2FSFtJqYJ3PANXLtQT%2B5Mv4lbCtfV8CaN76W97ZVmE4JfFMmAI0ShUn9bZwyembxOiiA&X-Amz-Signature=5cef2963311412d419f1000fa719847ffc04c05b96febf1b1317dc7060d561f0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
