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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR4UOJC7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDYBJVhh6hO54cf51S3K8eWsbLOESmrOh6fIxt9p4iwCwIgeYbg4ndQ4NDQ6kRiEjzKf3xiNfTRePNkvNr4p8kDRMYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENx9onBls9YrowGdSrcA%2FiqTztf%2FlQQplosnrHmc%2FxNOBviszG%2BNMfbZrt13Ai3LaxQhrjiVSrc4d1febzA7dmYQ2jgZhJEiwKH7m9H95CifU3IZJ4PA92F3EwIfzHWDVCAsTEBdDNBPammDg6%2FWBCRu4K0qXf2e7LDNFGjMHNF2lIQaRyjt5cNMlbjuXuz%2Bb%2B%2BYpf%2FX6Ex%2Bhh5p23XTMe0CmNijbalfF2P4%2Fx2Ueqbu0kiIFru%2FQc7Edez6KWl6%2F7zSsB0E7kM6%2By%2BdY7u2PmhAMPBCQ6f8farwNZQmuvvCLTkaUO61nh%2BgfSYLUZQa5rtaA07%2BbrAruJDw0uj7LTtAWPhkZWA96%2F23L8LrqCfKdyR4hciyrgo6PjhRu5%2BhiZ64HUGThhRtJ6XSXTKa0EXBnkdbP%2F9aQPs3z%2B9CvUEj4IsxrFBezaRzj9xn0nS3evr9EIZUD0ZL%2BKtP9jGuShwWV9qlbEIwe5UnFscKqYvUiSTEZV5%2Bja9sbuvXi82FmVM%2Fjl3Xajr51yyYGyIdiEKWFuOY1jvtOegIvsTXgpvk%2FC6TuWepV22XKniiZXeib7MXuz1MqVaShmhw1OIOw%2B4SQS9UjyFJJuQzzBFA5VMvhsrc0K6JUQ6TfR1qggq4GmZ1rRUmrFfcTgEMIvMpsAGOqUBKXAFt8JRWGI1Hr2%2FqCNvt5pocLh%2BH6gLbFAOGo7DJ62yXET71wH3gJ%2Bnd6OqoWJ95K7b9zWzwPdHPr1MUOxeNdyCeOMS8Sv4C4qJt%2FSft1G0g7qnJYICjKK4M46zG07GHm4p18iVCgTjhP5%2FpNNSNd7whmY41rQb0aL3pI8klLacaT2RiNEUPJKcTxiZ1euwV%2BrBm0YdhB1BFM8NH3aVpQJF%2BA7o&X-Amz-Signature=cd4efb122f314fd61343d77a91693c3341db62006bb82cf952365da793f60a70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR4UOJC7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDYBJVhh6hO54cf51S3K8eWsbLOESmrOh6fIxt9p4iwCwIgeYbg4ndQ4NDQ6kRiEjzKf3xiNfTRePNkvNr4p8kDRMYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENx9onBls9YrowGdSrcA%2FiqTztf%2FlQQplosnrHmc%2FxNOBviszG%2BNMfbZrt13Ai3LaxQhrjiVSrc4d1febzA7dmYQ2jgZhJEiwKH7m9H95CifU3IZJ4PA92F3EwIfzHWDVCAsTEBdDNBPammDg6%2FWBCRu4K0qXf2e7LDNFGjMHNF2lIQaRyjt5cNMlbjuXuz%2Bb%2B%2BYpf%2FX6Ex%2Bhh5p23XTMe0CmNijbalfF2P4%2Fx2Ueqbu0kiIFru%2FQc7Edez6KWl6%2F7zSsB0E7kM6%2By%2BdY7u2PmhAMPBCQ6f8farwNZQmuvvCLTkaUO61nh%2BgfSYLUZQa5rtaA07%2BbrAruJDw0uj7LTtAWPhkZWA96%2F23L8LrqCfKdyR4hciyrgo6PjhRu5%2BhiZ64HUGThhRtJ6XSXTKa0EXBnkdbP%2F9aQPs3z%2B9CvUEj4IsxrFBezaRzj9xn0nS3evr9EIZUD0ZL%2BKtP9jGuShwWV9qlbEIwe5UnFscKqYvUiSTEZV5%2Bja9sbuvXi82FmVM%2Fjl3Xajr51yyYGyIdiEKWFuOY1jvtOegIvsTXgpvk%2FC6TuWepV22XKniiZXeib7MXuz1MqVaShmhw1OIOw%2B4SQS9UjyFJJuQzzBFA5VMvhsrc0K6JUQ6TfR1qggq4GmZ1rRUmrFfcTgEMIvMpsAGOqUBKXAFt8JRWGI1Hr2%2FqCNvt5pocLh%2BH6gLbFAOGo7DJ62yXET71wH3gJ%2Bnd6OqoWJ95K7b9zWzwPdHPr1MUOxeNdyCeOMS8Sv4C4qJt%2FSft1G0g7qnJYICjKK4M46zG07GHm4p18iVCgTjhP5%2FpNNSNd7whmY41rQb0aL3pI8klLacaT2RiNEUPJKcTxiZ1euwV%2BrBm0YdhB1BFM8NH3aVpQJF%2BA7o&X-Amz-Signature=190981779b9a42b22170441dec4446be0540772a52f94b00d1de0e3190105b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR4UOJC7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDYBJVhh6hO54cf51S3K8eWsbLOESmrOh6fIxt9p4iwCwIgeYbg4ndQ4NDQ6kRiEjzKf3xiNfTRePNkvNr4p8kDRMYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENx9onBls9YrowGdSrcA%2FiqTztf%2FlQQplosnrHmc%2FxNOBviszG%2BNMfbZrt13Ai3LaxQhrjiVSrc4d1febzA7dmYQ2jgZhJEiwKH7m9H95CifU3IZJ4PA92F3EwIfzHWDVCAsTEBdDNBPammDg6%2FWBCRu4K0qXf2e7LDNFGjMHNF2lIQaRyjt5cNMlbjuXuz%2Bb%2B%2BYpf%2FX6Ex%2Bhh5p23XTMe0CmNijbalfF2P4%2Fx2Ueqbu0kiIFru%2FQc7Edez6KWl6%2F7zSsB0E7kM6%2By%2BdY7u2PmhAMPBCQ6f8farwNZQmuvvCLTkaUO61nh%2BgfSYLUZQa5rtaA07%2BbrAruJDw0uj7LTtAWPhkZWA96%2F23L8LrqCfKdyR4hciyrgo6PjhRu5%2BhiZ64HUGThhRtJ6XSXTKa0EXBnkdbP%2F9aQPs3z%2B9CvUEj4IsxrFBezaRzj9xn0nS3evr9EIZUD0ZL%2BKtP9jGuShwWV9qlbEIwe5UnFscKqYvUiSTEZV5%2Bja9sbuvXi82FmVM%2Fjl3Xajr51yyYGyIdiEKWFuOY1jvtOegIvsTXgpvk%2FC6TuWepV22XKniiZXeib7MXuz1MqVaShmhw1OIOw%2B4SQS9UjyFJJuQzzBFA5VMvhsrc0K6JUQ6TfR1qggq4GmZ1rRUmrFfcTgEMIvMpsAGOqUBKXAFt8JRWGI1Hr2%2FqCNvt5pocLh%2BH6gLbFAOGo7DJ62yXET71wH3gJ%2Bnd6OqoWJ95K7b9zWzwPdHPr1MUOxeNdyCeOMS8Sv4C4qJt%2FSft1G0g7qnJYICjKK4M46zG07GHm4p18iVCgTjhP5%2FpNNSNd7whmY41rQb0aL3pI8klLacaT2RiNEUPJKcTxiZ1euwV%2BrBm0YdhB1BFM8NH3aVpQJF%2BA7o&X-Amz-Signature=a66ee6f81e04aea88f6c003fe1ea57bdbacd464dd8fcd8eb48d039dbddd8b74d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR4UOJC7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDYBJVhh6hO54cf51S3K8eWsbLOESmrOh6fIxt9p4iwCwIgeYbg4ndQ4NDQ6kRiEjzKf3xiNfTRePNkvNr4p8kDRMYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENx9onBls9YrowGdSrcA%2FiqTztf%2FlQQplosnrHmc%2FxNOBviszG%2BNMfbZrt13Ai3LaxQhrjiVSrc4d1febzA7dmYQ2jgZhJEiwKH7m9H95CifU3IZJ4PA92F3EwIfzHWDVCAsTEBdDNBPammDg6%2FWBCRu4K0qXf2e7LDNFGjMHNF2lIQaRyjt5cNMlbjuXuz%2Bb%2B%2BYpf%2FX6Ex%2Bhh5p23XTMe0CmNijbalfF2P4%2Fx2Ueqbu0kiIFru%2FQc7Edez6KWl6%2F7zSsB0E7kM6%2By%2BdY7u2PmhAMPBCQ6f8farwNZQmuvvCLTkaUO61nh%2BgfSYLUZQa5rtaA07%2BbrAruJDw0uj7LTtAWPhkZWA96%2F23L8LrqCfKdyR4hciyrgo6PjhRu5%2BhiZ64HUGThhRtJ6XSXTKa0EXBnkdbP%2F9aQPs3z%2B9CvUEj4IsxrFBezaRzj9xn0nS3evr9EIZUD0ZL%2BKtP9jGuShwWV9qlbEIwe5UnFscKqYvUiSTEZV5%2Bja9sbuvXi82FmVM%2Fjl3Xajr51yyYGyIdiEKWFuOY1jvtOegIvsTXgpvk%2FC6TuWepV22XKniiZXeib7MXuz1MqVaShmhw1OIOw%2B4SQS9UjyFJJuQzzBFA5VMvhsrc0K6JUQ6TfR1qggq4GmZ1rRUmrFfcTgEMIvMpsAGOqUBKXAFt8JRWGI1Hr2%2FqCNvt5pocLh%2BH6gLbFAOGo7DJ62yXET71wH3gJ%2Bnd6OqoWJ95K7b9zWzwPdHPr1MUOxeNdyCeOMS8Sv4C4qJt%2FSft1G0g7qnJYICjKK4M46zG07GHm4p18iVCgTjhP5%2FpNNSNd7whmY41rQb0aL3pI8klLacaT2RiNEUPJKcTxiZ1euwV%2BrBm0YdhB1BFM8NH3aVpQJF%2BA7o&X-Amz-Signature=c99e18fb858e0fabffb25255227f63eac34029cc42e7f0a541454f247077a822&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR4UOJC7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDYBJVhh6hO54cf51S3K8eWsbLOESmrOh6fIxt9p4iwCwIgeYbg4ndQ4NDQ6kRiEjzKf3xiNfTRePNkvNr4p8kDRMYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENx9onBls9YrowGdSrcA%2FiqTztf%2FlQQplosnrHmc%2FxNOBviszG%2BNMfbZrt13Ai3LaxQhrjiVSrc4d1febzA7dmYQ2jgZhJEiwKH7m9H95CifU3IZJ4PA92F3EwIfzHWDVCAsTEBdDNBPammDg6%2FWBCRu4K0qXf2e7LDNFGjMHNF2lIQaRyjt5cNMlbjuXuz%2Bb%2B%2BYpf%2FX6Ex%2Bhh5p23XTMe0CmNijbalfF2P4%2Fx2Ueqbu0kiIFru%2FQc7Edez6KWl6%2F7zSsB0E7kM6%2By%2BdY7u2PmhAMPBCQ6f8farwNZQmuvvCLTkaUO61nh%2BgfSYLUZQa5rtaA07%2BbrAruJDw0uj7LTtAWPhkZWA96%2F23L8LrqCfKdyR4hciyrgo6PjhRu5%2BhiZ64HUGThhRtJ6XSXTKa0EXBnkdbP%2F9aQPs3z%2B9CvUEj4IsxrFBezaRzj9xn0nS3evr9EIZUD0ZL%2BKtP9jGuShwWV9qlbEIwe5UnFscKqYvUiSTEZV5%2Bja9sbuvXi82FmVM%2Fjl3Xajr51yyYGyIdiEKWFuOY1jvtOegIvsTXgpvk%2FC6TuWepV22XKniiZXeib7MXuz1MqVaShmhw1OIOw%2B4SQS9UjyFJJuQzzBFA5VMvhsrc0K6JUQ6TfR1qggq4GmZ1rRUmrFfcTgEMIvMpsAGOqUBKXAFt8JRWGI1Hr2%2FqCNvt5pocLh%2BH6gLbFAOGo7DJ62yXET71wH3gJ%2Bnd6OqoWJ95K7b9zWzwPdHPr1MUOxeNdyCeOMS8Sv4C4qJt%2FSft1G0g7qnJYICjKK4M46zG07GHm4p18iVCgTjhP5%2FpNNSNd7whmY41rQb0aL3pI8klLacaT2RiNEUPJKcTxiZ1euwV%2BrBm0YdhB1BFM8NH3aVpQJF%2BA7o&X-Amz-Signature=477381bfaccda1bb3a8d6a43351528fdfd3436300b07d9a1c092dd7e9085b4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR4UOJC7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDYBJVhh6hO54cf51S3K8eWsbLOESmrOh6fIxt9p4iwCwIgeYbg4ndQ4NDQ6kRiEjzKf3xiNfTRePNkvNr4p8kDRMYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENx9onBls9YrowGdSrcA%2FiqTztf%2FlQQplosnrHmc%2FxNOBviszG%2BNMfbZrt13Ai3LaxQhrjiVSrc4d1febzA7dmYQ2jgZhJEiwKH7m9H95CifU3IZJ4PA92F3EwIfzHWDVCAsTEBdDNBPammDg6%2FWBCRu4K0qXf2e7LDNFGjMHNF2lIQaRyjt5cNMlbjuXuz%2Bb%2B%2BYpf%2FX6Ex%2Bhh5p23XTMe0CmNijbalfF2P4%2Fx2Ueqbu0kiIFru%2FQc7Edez6KWl6%2F7zSsB0E7kM6%2By%2BdY7u2PmhAMPBCQ6f8farwNZQmuvvCLTkaUO61nh%2BgfSYLUZQa5rtaA07%2BbrAruJDw0uj7LTtAWPhkZWA96%2F23L8LrqCfKdyR4hciyrgo6PjhRu5%2BhiZ64HUGThhRtJ6XSXTKa0EXBnkdbP%2F9aQPs3z%2B9CvUEj4IsxrFBezaRzj9xn0nS3evr9EIZUD0ZL%2BKtP9jGuShwWV9qlbEIwe5UnFscKqYvUiSTEZV5%2Bja9sbuvXi82FmVM%2Fjl3Xajr51yyYGyIdiEKWFuOY1jvtOegIvsTXgpvk%2FC6TuWepV22XKniiZXeib7MXuz1MqVaShmhw1OIOw%2B4SQS9UjyFJJuQzzBFA5VMvhsrc0K6JUQ6TfR1qggq4GmZ1rRUmrFfcTgEMIvMpsAGOqUBKXAFt8JRWGI1Hr2%2FqCNvt5pocLh%2BH6gLbFAOGo7DJ62yXET71wH3gJ%2Bnd6OqoWJ95K7b9zWzwPdHPr1MUOxeNdyCeOMS8Sv4C4qJt%2FSft1G0g7qnJYICjKK4M46zG07GHm4p18iVCgTjhP5%2FpNNSNd7whmY41rQb0aL3pI8klLacaT2RiNEUPJKcTxiZ1euwV%2BrBm0YdhB1BFM8NH3aVpQJF%2BA7o&X-Amz-Signature=f813359050787f9b22db3fa2ada75640c8ed09943de027abfbe70f26cd1dd7d3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR4UOJC7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDYBJVhh6hO54cf51S3K8eWsbLOESmrOh6fIxt9p4iwCwIgeYbg4ndQ4NDQ6kRiEjzKf3xiNfTRePNkvNr4p8kDRMYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENx9onBls9YrowGdSrcA%2FiqTztf%2FlQQplosnrHmc%2FxNOBviszG%2BNMfbZrt13Ai3LaxQhrjiVSrc4d1febzA7dmYQ2jgZhJEiwKH7m9H95CifU3IZJ4PA92F3EwIfzHWDVCAsTEBdDNBPammDg6%2FWBCRu4K0qXf2e7LDNFGjMHNF2lIQaRyjt5cNMlbjuXuz%2Bb%2B%2BYpf%2FX6Ex%2Bhh5p23XTMe0CmNijbalfF2P4%2Fx2Ueqbu0kiIFru%2FQc7Edez6KWl6%2F7zSsB0E7kM6%2By%2BdY7u2PmhAMPBCQ6f8farwNZQmuvvCLTkaUO61nh%2BgfSYLUZQa5rtaA07%2BbrAruJDw0uj7LTtAWPhkZWA96%2F23L8LrqCfKdyR4hciyrgo6PjhRu5%2BhiZ64HUGThhRtJ6XSXTKa0EXBnkdbP%2F9aQPs3z%2B9CvUEj4IsxrFBezaRzj9xn0nS3evr9EIZUD0ZL%2BKtP9jGuShwWV9qlbEIwe5UnFscKqYvUiSTEZV5%2Bja9sbuvXi82FmVM%2Fjl3Xajr51yyYGyIdiEKWFuOY1jvtOegIvsTXgpvk%2FC6TuWepV22XKniiZXeib7MXuz1MqVaShmhw1OIOw%2B4SQS9UjyFJJuQzzBFA5VMvhsrc0K6JUQ6TfR1qggq4GmZ1rRUmrFfcTgEMIvMpsAGOqUBKXAFt8JRWGI1Hr2%2FqCNvt5pocLh%2BH6gLbFAOGo7DJ62yXET71wH3gJ%2Bnd6OqoWJ95K7b9zWzwPdHPr1MUOxeNdyCeOMS8Sv4C4qJt%2FSft1G0g7qnJYICjKK4M46zG07GHm4p18iVCgTjhP5%2FpNNSNd7whmY41rQb0aL3pI8klLacaT2RiNEUPJKcTxiZ1euwV%2BrBm0YdhB1BFM8NH3aVpQJF%2BA7o&X-Amz-Signature=5ad5c7397fa0346c5e04816a45e6008a44717b7a99e3833ec6a4425eb0b6fbbb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
