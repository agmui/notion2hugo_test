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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HNKLOR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxU4tnwnK9fFZbcWgtPSHv7T2IbulJW8zKiACTMcXaFAIgTEiHIAr4c4LX5qvO%2Bjn9lvDz1xddKXTJsVb5%2BahsfNEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpAH7iOSZbRtrG1UyrcA7GVuySkeHCHSdyf3e1F46RcKxFe9k15OxPtFOP2IX8d8iJ8xDQ38T8PcDM2%2BJNjRRlJ3Qxn6yVWEVNpVknObYV7Ww7xEPhujpOzkg8GvtxODfqKYy823%2FoPuP5BrEty1NoGE970hRkITUFZ%2FzjAtFJp0M6%2BN3sEpcgc4tWsNmc49ODCixvmrPLooPARNjp2AF6%2BUvIdcqXSdt%2FD5N%2Bsy5P9PPwX0iKxCK6bKkccnmsw3QpYHI24KsYXCpAwhl1qODg7MKmNpaKuK0CSU9rImdrxQB%2B%2BtfpmIhtxubWqo1lWNbzUBBN7mAKD%2BWDlwmiXN%2B70XaDkZ6GLxzuHHxT4kr%2F5BbAreyOWe1Myg6jdn1cTE4OWk3qgR4pT%2BdC6aVYdeCjS5TzgibPnZG0QuGZYPlnDoWJ919J7ryk1x6qVDPImLfpNdxgggTdIQ5j%2FycViAHPuBaC49nKi3BdCsNijRsH94OFbIJKYtpA2si1DbNO6sRCvxTcWuU0V6sDor8MHIhTKo%2BPOm9LWgPGivVhMH9DyddBmgJt9odCOm%2FBqSbj9aQCzIkv73rfKro6lcjU8nqnkosivQQJXeql1EUwwPC5DzBYyQ2YKkbShe4fFUckYtdID%2FbEfFTT%2FU7JBMMHB9LwGOqUBrCKQzEnlAkcufguFww5%2BKMWJV0YjxUeD28MjhELtJ09RINLdekF4khswGlikhD60c4bD0AmpKHAr9YwKg82PWuB0Sg7Kr3%2BpYHzzE5BIhQ%2F6u2d3vF0MG150gF4dcv4J2zOTwywxScds%2B7Qf0xwDAPlRjCii920gkWnRKYfS9xY7AUBJQzDAoW2tyNVoSU9o%2BqCaqong7mfFT%2FK4cRTWmACXQqDq&X-Amz-Signature=e8376161f42b31722537059145f98c5eab806015f44ae8746548b177adc7b0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HNKLOR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxU4tnwnK9fFZbcWgtPSHv7T2IbulJW8zKiACTMcXaFAIgTEiHIAr4c4LX5qvO%2Bjn9lvDz1xddKXTJsVb5%2BahsfNEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpAH7iOSZbRtrG1UyrcA7GVuySkeHCHSdyf3e1F46RcKxFe9k15OxPtFOP2IX8d8iJ8xDQ38T8PcDM2%2BJNjRRlJ3Qxn6yVWEVNpVknObYV7Ww7xEPhujpOzkg8GvtxODfqKYy823%2FoPuP5BrEty1NoGE970hRkITUFZ%2FzjAtFJp0M6%2BN3sEpcgc4tWsNmc49ODCixvmrPLooPARNjp2AF6%2BUvIdcqXSdt%2FD5N%2Bsy5P9PPwX0iKxCK6bKkccnmsw3QpYHI24KsYXCpAwhl1qODg7MKmNpaKuK0CSU9rImdrxQB%2B%2BtfpmIhtxubWqo1lWNbzUBBN7mAKD%2BWDlwmiXN%2B70XaDkZ6GLxzuHHxT4kr%2F5BbAreyOWe1Myg6jdn1cTE4OWk3qgR4pT%2BdC6aVYdeCjS5TzgibPnZG0QuGZYPlnDoWJ919J7ryk1x6qVDPImLfpNdxgggTdIQ5j%2FycViAHPuBaC49nKi3BdCsNijRsH94OFbIJKYtpA2si1DbNO6sRCvxTcWuU0V6sDor8MHIhTKo%2BPOm9LWgPGivVhMH9DyddBmgJt9odCOm%2FBqSbj9aQCzIkv73rfKro6lcjU8nqnkosivQQJXeql1EUwwPC5DzBYyQ2YKkbShe4fFUckYtdID%2FbEfFTT%2FU7JBMMHB9LwGOqUBrCKQzEnlAkcufguFww5%2BKMWJV0YjxUeD28MjhELtJ09RINLdekF4khswGlikhD60c4bD0AmpKHAr9YwKg82PWuB0Sg7Kr3%2BpYHzzE5BIhQ%2F6u2d3vF0MG150gF4dcv4J2zOTwywxScds%2B7Qf0xwDAPlRjCii920gkWnRKYfS9xY7AUBJQzDAoW2tyNVoSU9o%2BqCaqong7mfFT%2FK4cRTWmACXQqDq&X-Amz-Signature=6c0260ac8cf8a7179c58da5c001193540cde3af0f193b6f437fceb9aa28976e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HNKLOR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxU4tnwnK9fFZbcWgtPSHv7T2IbulJW8zKiACTMcXaFAIgTEiHIAr4c4LX5qvO%2Bjn9lvDz1xddKXTJsVb5%2BahsfNEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpAH7iOSZbRtrG1UyrcA7GVuySkeHCHSdyf3e1F46RcKxFe9k15OxPtFOP2IX8d8iJ8xDQ38T8PcDM2%2BJNjRRlJ3Qxn6yVWEVNpVknObYV7Ww7xEPhujpOzkg8GvtxODfqKYy823%2FoPuP5BrEty1NoGE970hRkITUFZ%2FzjAtFJp0M6%2BN3sEpcgc4tWsNmc49ODCixvmrPLooPARNjp2AF6%2BUvIdcqXSdt%2FD5N%2Bsy5P9PPwX0iKxCK6bKkccnmsw3QpYHI24KsYXCpAwhl1qODg7MKmNpaKuK0CSU9rImdrxQB%2B%2BtfpmIhtxubWqo1lWNbzUBBN7mAKD%2BWDlwmiXN%2B70XaDkZ6GLxzuHHxT4kr%2F5BbAreyOWe1Myg6jdn1cTE4OWk3qgR4pT%2BdC6aVYdeCjS5TzgibPnZG0QuGZYPlnDoWJ919J7ryk1x6qVDPImLfpNdxgggTdIQ5j%2FycViAHPuBaC49nKi3BdCsNijRsH94OFbIJKYtpA2si1DbNO6sRCvxTcWuU0V6sDor8MHIhTKo%2BPOm9LWgPGivVhMH9DyddBmgJt9odCOm%2FBqSbj9aQCzIkv73rfKro6lcjU8nqnkosivQQJXeql1EUwwPC5DzBYyQ2YKkbShe4fFUckYtdID%2FbEfFTT%2FU7JBMMHB9LwGOqUBrCKQzEnlAkcufguFww5%2BKMWJV0YjxUeD28MjhELtJ09RINLdekF4khswGlikhD60c4bD0AmpKHAr9YwKg82PWuB0Sg7Kr3%2BpYHzzE5BIhQ%2F6u2d3vF0MG150gF4dcv4J2zOTwywxScds%2B7Qf0xwDAPlRjCii920gkWnRKYfS9xY7AUBJQzDAoW2tyNVoSU9o%2BqCaqong7mfFT%2FK4cRTWmACXQqDq&X-Amz-Signature=71145776989f0f9eeb1add609346750f1a09e4e0736da0112e7b7a3656c86b77&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HNKLOR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxU4tnwnK9fFZbcWgtPSHv7T2IbulJW8zKiACTMcXaFAIgTEiHIAr4c4LX5qvO%2Bjn9lvDz1xddKXTJsVb5%2BahsfNEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpAH7iOSZbRtrG1UyrcA7GVuySkeHCHSdyf3e1F46RcKxFe9k15OxPtFOP2IX8d8iJ8xDQ38T8PcDM2%2BJNjRRlJ3Qxn6yVWEVNpVknObYV7Ww7xEPhujpOzkg8GvtxODfqKYy823%2FoPuP5BrEty1NoGE970hRkITUFZ%2FzjAtFJp0M6%2BN3sEpcgc4tWsNmc49ODCixvmrPLooPARNjp2AF6%2BUvIdcqXSdt%2FD5N%2Bsy5P9PPwX0iKxCK6bKkccnmsw3QpYHI24KsYXCpAwhl1qODg7MKmNpaKuK0CSU9rImdrxQB%2B%2BtfpmIhtxubWqo1lWNbzUBBN7mAKD%2BWDlwmiXN%2B70XaDkZ6GLxzuHHxT4kr%2F5BbAreyOWe1Myg6jdn1cTE4OWk3qgR4pT%2BdC6aVYdeCjS5TzgibPnZG0QuGZYPlnDoWJ919J7ryk1x6qVDPImLfpNdxgggTdIQ5j%2FycViAHPuBaC49nKi3BdCsNijRsH94OFbIJKYtpA2si1DbNO6sRCvxTcWuU0V6sDor8MHIhTKo%2BPOm9LWgPGivVhMH9DyddBmgJt9odCOm%2FBqSbj9aQCzIkv73rfKro6lcjU8nqnkosivQQJXeql1EUwwPC5DzBYyQ2YKkbShe4fFUckYtdID%2FbEfFTT%2FU7JBMMHB9LwGOqUBrCKQzEnlAkcufguFww5%2BKMWJV0YjxUeD28MjhELtJ09RINLdekF4khswGlikhD60c4bD0AmpKHAr9YwKg82PWuB0Sg7Kr3%2BpYHzzE5BIhQ%2F6u2d3vF0MG150gF4dcv4J2zOTwywxScds%2B7Qf0xwDAPlRjCii920gkWnRKYfS9xY7AUBJQzDAoW2tyNVoSU9o%2BqCaqong7mfFT%2FK4cRTWmACXQqDq&X-Amz-Signature=32a3c01f4a75c639cdff86156df3470eedeed534bf824a4e535f7f9952e01a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HNKLOR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxU4tnwnK9fFZbcWgtPSHv7T2IbulJW8zKiACTMcXaFAIgTEiHIAr4c4LX5qvO%2Bjn9lvDz1xddKXTJsVb5%2BahsfNEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpAH7iOSZbRtrG1UyrcA7GVuySkeHCHSdyf3e1F46RcKxFe9k15OxPtFOP2IX8d8iJ8xDQ38T8PcDM2%2BJNjRRlJ3Qxn6yVWEVNpVknObYV7Ww7xEPhujpOzkg8GvtxODfqKYy823%2FoPuP5BrEty1NoGE970hRkITUFZ%2FzjAtFJp0M6%2BN3sEpcgc4tWsNmc49ODCixvmrPLooPARNjp2AF6%2BUvIdcqXSdt%2FD5N%2Bsy5P9PPwX0iKxCK6bKkccnmsw3QpYHI24KsYXCpAwhl1qODg7MKmNpaKuK0CSU9rImdrxQB%2B%2BtfpmIhtxubWqo1lWNbzUBBN7mAKD%2BWDlwmiXN%2B70XaDkZ6GLxzuHHxT4kr%2F5BbAreyOWe1Myg6jdn1cTE4OWk3qgR4pT%2BdC6aVYdeCjS5TzgibPnZG0QuGZYPlnDoWJ919J7ryk1x6qVDPImLfpNdxgggTdIQ5j%2FycViAHPuBaC49nKi3BdCsNijRsH94OFbIJKYtpA2si1DbNO6sRCvxTcWuU0V6sDor8MHIhTKo%2BPOm9LWgPGivVhMH9DyddBmgJt9odCOm%2FBqSbj9aQCzIkv73rfKro6lcjU8nqnkosivQQJXeql1EUwwPC5DzBYyQ2YKkbShe4fFUckYtdID%2FbEfFTT%2FU7JBMMHB9LwGOqUBrCKQzEnlAkcufguFww5%2BKMWJV0YjxUeD28MjhELtJ09RINLdekF4khswGlikhD60c4bD0AmpKHAr9YwKg82PWuB0Sg7Kr3%2BpYHzzE5BIhQ%2F6u2d3vF0MG150gF4dcv4J2zOTwywxScds%2B7Qf0xwDAPlRjCii920gkWnRKYfS9xY7AUBJQzDAoW2tyNVoSU9o%2BqCaqong7mfFT%2FK4cRTWmACXQqDq&X-Amz-Signature=9852099a38eafdff9b39ac9c4677f920ab59778376e830b619570d621b2097ea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HNKLOR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxU4tnwnK9fFZbcWgtPSHv7T2IbulJW8zKiACTMcXaFAIgTEiHIAr4c4LX5qvO%2Bjn9lvDz1xddKXTJsVb5%2BahsfNEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpAH7iOSZbRtrG1UyrcA7GVuySkeHCHSdyf3e1F46RcKxFe9k15OxPtFOP2IX8d8iJ8xDQ38T8PcDM2%2BJNjRRlJ3Qxn6yVWEVNpVknObYV7Ww7xEPhujpOzkg8GvtxODfqKYy823%2FoPuP5BrEty1NoGE970hRkITUFZ%2FzjAtFJp0M6%2BN3sEpcgc4tWsNmc49ODCixvmrPLooPARNjp2AF6%2BUvIdcqXSdt%2FD5N%2Bsy5P9PPwX0iKxCK6bKkccnmsw3QpYHI24KsYXCpAwhl1qODg7MKmNpaKuK0CSU9rImdrxQB%2B%2BtfpmIhtxubWqo1lWNbzUBBN7mAKD%2BWDlwmiXN%2B70XaDkZ6GLxzuHHxT4kr%2F5BbAreyOWe1Myg6jdn1cTE4OWk3qgR4pT%2BdC6aVYdeCjS5TzgibPnZG0QuGZYPlnDoWJ919J7ryk1x6qVDPImLfpNdxgggTdIQ5j%2FycViAHPuBaC49nKi3BdCsNijRsH94OFbIJKYtpA2si1DbNO6sRCvxTcWuU0V6sDor8MHIhTKo%2BPOm9LWgPGivVhMH9DyddBmgJt9odCOm%2FBqSbj9aQCzIkv73rfKro6lcjU8nqnkosivQQJXeql1EUwwPC5DzBYyQ2YKkbShe4fFUckYtdID%2FbEfFTT%2FU7JBMMHB9LwGOqUBrCKQzEnlAkcufguFww5%2BKMWJV0YjxUeD28MjhELtJ09RINLdekF4khswGlikhD60c4bD0AmpKHAr9YwKg82PWuB0Sg7Kr3%2BpYHzzE5BIhQ%2F6u2d3vF0MG150gF4dcv4J2zOTwywxScds%2B7Qf0xwDAPlRjCii920gkWnRKYfS9xY7AUBJQzDAoW2tyNVoSU9o%2BqCaqong7mfFT%2FK4cRTWmACXQqDq&X-Amz-Signature=f4dae94562f3a7fb1ce988deff11b656fefde4f746406edd54117e5a52fb6b72&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HNKLOR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxU4tnwnK9fFZbcWgtPSHv7T2IbulJW8zKiACTMcXaFAIgTEiHIAr4c4LX5qvO%2Bjn9lvDz1xddKXTJsVb5%2BahsfNEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpAH7iOSZbRtrG1UyrcA7GVuySkeHCHSdyf3e1F46RcKxFe9k15OxPtFOP2IX8d8iJ8xDQ38T8PcDM2%2BJNjRRlJ3Qxn6yVWEVNpVknObYV7Ww7xEPhujpOzkg8GvtxODfqKYy823%2FoPuP5BrEty1NoGE970hRkITUFZ%2FzjAtFJp0M6%2BN3sEpcgc4tWsNmc49ODCixvmrPLooPARNjp2AF6%2BUvIdcqXSdt%2FD5N%2Bsy5P9PPwX0iKxCK6bKkccnmsw3QpYHI24KsYXCpAwhl1qODg7MKmNpaKuK0CSU9rImdrxQB%2B%2BtfpmIhtxubWqo1lWNbzUBBN7mAKD%2BWDlwmiXN%2B70XaDkZ6GLxzuHHxT4kr%2F5BbAreyOWe1Myg6jdn1cTE4OWk3qgR4pT%2BdC6aVYdeCjS5TzgibPnZG0QuGZYPlnDoWJ919J7ryk1x6qVDPImLfpNdxgggTdIQ5j%2FycViAHPuBaC49nKi3BdCsNijRsH94OFbIJKYtpA2si1DbNO6sRCvxTcWuU0V6sDor8MHIhTKo%2BPOm9LWgPGivVhMH9DyddBmgJt9odCOm%2FBqSbj9aQCzIkv73rfKro6lcjU8nqnkosivQQJXeql1EUwwPC5DzBYyQ2YKkbShe4fFUckYtdID%2FbEfFTT%2FU7JBMMHB9LwGOqUBrCKQzEnlAkcufguFww5%2BKMWJV0YjxUeD28MjhELtJ09RINLdekF4khswGlikhD60c4bD0AmpKHAr9YwKg82PWuB0Sg7Kr3%2BpYHzzE5BIhQ%2F6u2d3vF0MG150gF4dcv4J2zOTwywxScds%2B7Qf0xwDAPlRjCii920gkWnRKYfS9xY7AUBJQzDAoW2tyNVoSU9o%2BqCaqong7mfFT%2FK4cRTWmACXQqDq&X-Amz-Signature=051221bcf45592838852f1b92243d2cc4169d0e1c2941b97c5ae88d8136935c0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
