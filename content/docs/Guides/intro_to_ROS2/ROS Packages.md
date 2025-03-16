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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5OCD3I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOjrjGo%2F9xGNLkanvaSo4Xyr0g6yEiL8AW%2B%2FOM6potYAiEAwATu2RG4ADOJ%2B0s7%2BiNfDX6G9WMwpYPtOAMPpHi3yYMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDRFUW%2FqpTI%2FQ08%2FiircA%2FWPnKfoslPdLpYcz5tvu2Wj3ICuwr2rGmapiqAjE82462Sbr3w1pw2YLVTo0LgTUrIg0G1y9eqGB%2BhTq8q3OCy1bIm8d9fYIlWtUnX5MBHpF4mTiRq4oGffLLNEguQZfipaTp9m5RX%2BBBDNq1Ap%2FX8G9hN0LZqJsQNTSVcSh4i1bJuBpQ2cl%2B6ZSedRsP%2BRcTnK5Q6foewXhRS63n24%2BIZ2ifpLlN%2FXGcqsSyIoBFH%2F4lLxuDX8tj7zrZE3uwGxJ8Izg52Q2CW0NrAXEwHpWV74r7WiyFB0OSVJlnAbNWqTew7ljSwraCa%2FsB0HNLB7nqRNaogjeD34wmcyNJuNdxB4eq6CJOrdyt%2F1WAhU%2FKMiogDdIxw%2BgfP5DCf0i7IaKmC0qptI6XxO54fWzsgnJmob%2Fr692DtKIZKBiJ63htW2v0DXVBjBhZVyxtUJ620%2FHkj0Y8%2Fv28F5fd7xwGgwbbhU14ab0eGHCPKtOOLeiMhiq%2F3Xgl6Giz%2Fz4hGO%2BEETzpNTSmm8Yq2gLIwB6xVNhR63LmcuwmtTE%2F5hGtnAMDufFLFqjT3jzoxWxAkaIEPqLTwdjjEO%2FUqn1weraAw8mASKuV3kY%2FImzFD9PrqzKZN1DFB9FCtRiTaQDzV3MLSq274GOqUBXkucz%2FCCg70oEXiqRYvCNHCdHIOTOkAfBjttAhx6AkntS2N0HTQztohmFT2yp7%2BEYVJijqRRt1IfGhcoHSe3eCxD5VQCjr%2BfmyOs7ftwLVnvZx9DbVk8D9NHTwf6keACyCJx19qy1Oul9tYtq%2BYdX2L2v6NqQApjYvi8JH%2BLqTHR%2BKlQ79kQLPX10QHEPOR1RW0Af0%2FL%2Fu03c4TJ23rpZMiLivIJ&X-Amz-Signature=fe8d9bf1d242013572f8922c8cf861724a2b50c5041228720376bae3720f5428&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5OCD3I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOjrjGo%2F9xGNLkanvaSo4Xyr0g6yEiL8AW%2B%2FOM6potYAiEAwATu2RG4ADOJ%2B0s7%2BiNfDX6G9WMwpYPtOAMPpHi3yYMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDRFUW%2FqpTI%2FQ08%2FiircA%2FWPnKfoslPdLpYcz5tvu2Wj3ICuwr2rGmapiqAjE82462Sbr3w1pw2YLVTo0LgTUrIg0G1y9eqGB%2BhTq8q3OCy1bIm8d9fYIlWtUnX5MBHpF4mTiRq4oGffLLNEguQZfipaTp9m5RX%2BBBDNq1Ap%2FX8G9hN0LZqJsQNTSVcSh4i1bJuBpQ2cl%2B6ZSedRsP%2BRcTnK5Q6foewXhRS63n24%2BIZ2ifpLlN%2FXGcqsSyIoBFH%2F4lLxuDX8tj7zrZE3uwGxJ8Izg52Q2CW0NrAXEwHpWV74r7WiyFB0OSVJlnAbNWqTew7ljSwraCa%2FsB0HNLB7nqRNaogjeD34wmcyNJuNdxB4eq6CJOrdyt%2F1WAhU%2FKMiogDdIxw%2BgfP5DCf0i7IaKmC0qptI6XxO54fWzsgnJmob%2Fr692DtKIZKBiJ63htW2v0DXVBjBhZVyxtUJ620%2FHkj0Y8%2Fv28F5fd7xwGgwbbhU14ab0eGHCPKtOOLeiMhiq%2F3Xgl6Giz%2Fz4hGO%2BEETzpNTSmm8Yq2gLIwB6xVNhR63LmcuwmtTE%2F5hGtnAMDufFLFqjT3jzoxWxAkaIEPqLTwdjjEO%2FUqn1weraAw8mASKuV3kY%2FImzFD9PrqzKZN1DFB9FCtRiTaQDzV3MLSq274GOqUBXkucz%2FCCg70oEXiqRYvCNHCdHIOTOkAfBjttAhx6AkntS2N0HTQztohmFT2yp7%2BEYVJijqRRt1IfGhcoHSe3eCxD5VQCjr%2BfmyOs7ftwLVnvZx9DbVk8D9NHTwf6keACyCJx19qy1Oul9tYtq%2BYdX2L2v6NqQApjYvi8JH%2BLqTHR%2BKlQ79kQLPX10QHEPOR1RW0Af0%2FL%2Fu03c4TJ23rpZMiLivIJ&X-Amz-Signature=cfe52693f849cee9c7f863052056919c19abbf4b177749fb121ff4251fe3f01f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5OCD3I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOjrjGo%2F9xGNLkanvaSo4Xyr0g6yEiL8AW%2B%2FOM6potYAiEAwATu2RG4ADOJ%2B0s7%2BiNfDX6G9WMwpYPtOAMPpHi3yYMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDRFUW%2FqpTI%2FQ08%2FiircA%2FWPnKfoslPdLpYcz5tvu2Wj3ICuwr2rGmapiqAjE82462Sbr3w1pw2YLVTo0LgTUrIg0G1y9eqGB%2BhTq8q3OCy1bIm8d9fYIlWtUnX5MBHpF4mTiRq4oGffLLNEguQZfipaTp9m5RX%2BBBDNq1Ap%2FX8G9hN0LZqJsQNTSVcSh4i1bJuBpQ2cl%2B6ZSedRsP%2BRcTnK5Q6foewXhRS63n24%2BIZ2ifpLlN%2FXGcqsSyIoBFH%2F4lLxuDX8tj7zrZE3uwGxJ8Izg52Q2CW0NrAXEwHpWV74r7WiyFB0OSVJlnAbNWqTew7ljSwraCa%2FsB0HNLB7nqRNaogjeD34wmcyNJuNdxB4eq6CJOrdyt%2F1WAhU%2FKMiogDdIxw%2BgfP5DCf0i7IaKmC0qptI6XxO54fWzsgnJmob%2Fr692DtKIZKBiJ63htW2v0DXVBjBhZVyxtUJ620%2FHkj0Y8%2Fv28F5fd7xwGgwbbhU14ab0eGHCPKtOOLeiMhiq%2F3Xgl6Giz%2Fz4hGO%2BEETzpNTSmm8Yq2gLIwB6xVNhR63LmcuwmtTE%2F5hGtnAMDufFLFqjT3jzoxWxAkaIEPqLTwdjjEO%2FUqn1weraAw8mASKuV3kY%2FImzFD9PrqzKZN1DFB9FCtRiTaQDzV3MLSq274GOqUBXkucz%2FCCg70oEXiqRYvCNHCdHIOTOkAfBjttAhx6AkntS2N0HTQztohmFT2yp7%2BEYVJijqRRt1IfGhcoHSe3eCxD5VQCjr%2BfmyOs7ftwLVnvZx9DbVk8D9NHTwf6keACyCJx19qy1Oul9tYtq%2BYdX2L2v6NqQApjYvi8JH%2BLqTHR%2BKlQ79kQLPX10QHEPOR1RW0Af0%2FL%2Fu03c4TJ23rpZMiLivIJ&X-Amz-Signature=9ba7b007aee782cb91be6d98ff373b44a174a45201d9a2425b75faf3c199b334&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5OCD3I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOjrjGo%2F9xGNLkanvaSo4Xyr0g6yEiL8AW%2B%2FOM6potYAiEAwATu2RG4ADOJ%2B0s7%2BiNfDX6G9WMwpYPtOAMPpHi3yYMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDRFUW%2FqpTI%2FQ08%2FiircA%2FWPnKfoslPdLpYcz5tvu2Wj3ICuwr2rGmapiqAjE82462Sbr3w1pw2YLVTo0LgTUrIg0G1y9eqGB%2BhTq8q3OCy1bIm8d9fYIlWtUnX5MBHpF4mTiRq4oGffLLNEguQZfipaTp9m5RX%2BBBDNq1Ap%2FX8G9hN0LZqJsQNTSVcSh4i1bJuBpQ2cl%2B6ZSedRsP%2BRcTnK5Q6foewXhRS63n24%2BIZ2ifpLlN%2FXGcqsSyIoBFH%2F4lLxuDX8tj7zrZE3uwGxJ8Izg52Q2CW0NrAXEwHpWV74r7WiyFB0OSVJlnAbNWqTew7ljSwraCa%2FsB0HNLB7nqRNaogjeD34wmcyNJuNdxB4eq6CJOrdyt%2F1WAhU%2FKMiogDdIxw%2BgfP5DCf0i7IaKmC0qptI6XxO54fWzsgnJmob%2Fr692DtKIZKBiJ63htW2v0DXVBjBhZVyxtUJ620%2FHkj0Y8%2Fv28F5fd7xwGgwbbhU14ab0eGHCPKtOOLeiMhiq%2F3Xgl6Giz%2Fz4hGO%2BEETzpNTSmm8Yq2gLIwB6xVNhR63LmcuwmtTE%2F5hGtnAMDufFLFqjT3jzoxWxAkaIEPqLTwdjjEO%2FUqn1weraAw8mASKuV3kY%2FImzFD9PrqzKZN1DFB9FCtRiTaQDzV3MLSq274GOqUBXkucz%2FCCg70oEXiqRYvCNHCdHIOTOkAfBjttAhx6AkntS2N0HTQztohmFT2yp7%2BEYVJijqRRt1IfGhcoHSe3eCxD5VQCjr%2BfmyOs7ftwLVnvZx9DbVk8D9NHTwf6keACyCJx19qy1Oul9tYtq%2BYdX2L2v6NqQApjYvi8JH%2BLqTHR%2BKlQ79kQLPX10QHEPOR1RW0Af0%2FL%2Fu03c4TJ23rpZMiLivIJ&X-Amz-Signature=773e90bd590d56ec08ded693130f474bf911642c72da14b2061f29861d9025f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5OCD3I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOjrjGo%2F9xGNLkanvaSo4Xyr0g6yEiL8AW%2B%2FOM6potYAiEAwATu2RG4ADOJ%2B0s7%2BiNfDX6G9WMwpYPtOAMPpHi3yYMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDRFUW%2FqpTI%2FQ08%2FiircA%2FWPnKfoslPdLpYcz5tvu2Wj3ICuwr2rGmapiqAjE82462Sbr3w1pw2YLVTo0LgTUrIg0G1y9eqGB%2BhTq8q3OCy1bIm8d9fYIlWtUnX5MBHpF4mTiRq4oGffLLNEguQZfipaTp9m5RX%2BBBDNq1Ap%2FX8G9hN0LZqJsQNTSVcSh4i1bJuBpQ2cl%2B6ZSedRsP%2BRcTnK5Q6foewXhRS63n24%2BIZ2ifpLlN%2FXGcqsSyIoBFH%2F4lLxuDX8tj7zrZE3uwGxJ8Izg52Q2CW0NrAXEwHpWV74r7WiyFB0OSVJlnAbNWqTew7ljSwraCa%2FsB0HNLB7nqRNaogjeD34wmcyNJuNdxB4eq6CJOrdyt%2F1WAhU%2FKMiogDdIxw%2BgfP5DCf0i7IaKmC0qptI6XxO54fWzsgnJmob%2Fr692DtKIZKBiJ63htW2v0DXVBjBhZVyxtUJ620%2FHkj0Y8%2Fv28F5fd7xwGgwbbhU14ab0eGHCPKtOOLeiMhiq%2F3Xgl6Giz%2Fz4hGO%2BEETzpNTSmm8Yq2gLIwB6xVNhR63LmcuwmtTE%2F5hGtnAMDufFLFqjT3jzoxWxAkaIEPqLTwdjjEO%2FUqn1weraAw8mASKuV3kY%2FImzFD9PrqzKZN1DFB9FCtRiTaQDzV3MLSq274GOqUBXkucz%2FCCg70oEXiqRYvCNHCdHIOTOkAfBjttAhx6AkntS2N0HTQztohmFT2yp7%2BEYVJijqRRt1IfGhcoHSe3eCxD5VQCjr%2BfmyOs7ftwLVnvZx9DbVk8D9NHTwf6keACyCJx19qy1Oul9tYtq%2BYdX2L2v6NqQApjYvi8JH%2BLqTHR%2BKlQ79kQLPX10QHEPOR1RW0Af0%2FL%2Fu03c4TJ23rpZMiLivIJ&X-Amz-Signature=5c7813e062edd0b66143e781b0fb606f9b0a69f34eadee19041019aac4711e10&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5OCD3I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOjrjGo%2F9xGNLkanvaSo4Xyr0g6yEiL8AW%2B%2FOM6potYAiEAwATu2RG4ADOJ%2B0s7%2BiNfDX6G9WMwpYPtOAMPpHi3yYMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDRFUW%2FqpTI%2FQ08%2FiircA%2FWPnKfoslPdLpYcz5tvu2Wj3ICuwr2rGmapiqAjE82462Sbr3w1pw2YLVTo0LgTUrIg0G1y9eqGB%2BhTq8q3OCy1bIm8d9fYIlWtUnX5MBHpF4mTiRq4oGffLLNEguQZfipaTp9m5RX%2BBBDNq1Ap%2FX8G9hN0LZqJsQNTSVcSh4i1bJuBpQ2cl%2B6ZSedRsP%2BRcTnK5Q6foewXhRS63n24%2BIZ2ifpLlN%2FXGcqsSyIoBFH%2F4lLxuDX8tj7zrZE3uwGxJ8Izg52Q2CW0NrAXEwHpWV74r7WiyFB0OSVJlnAbNWqTew7ljSwraCa%2FsB0HNLB7nqRNaogjeD34wmcyNJuNdxB4eq6CJOrdyt%2F1WAhU%2FKMiogDdIxw%2BgfP5DCf0i7IaKmC0qptI6XxO54fWzsgnJmob%2Fr692DtKIZKBiJ63htW2v0DXVBjBhZVyxtUJ620%2FHkj0Y8%2Fv28F5fd7xwGgwbbhU14ab0eGHCPKtOOLeiMhiq%2F3Xgl6Giz%2Fz4hGO%2BEETzpNTSmm8Yq2gLIwB6xVNhR63LmcuwmtTE%2F5hGtnAMDufFLFqjT3jzoxWxAkaIEPqLTwdjjEO%2FUqn1weraAw8mASKuV3kY%2FImzFD9PrqzKZN1DFB9FCtRiTaQDzV3MLSq274GOqUBXkucz%2FCCg70oEXiqRYvCNHCdHIOTOkAfBjttAhx6AkntS2N0HTQztohmFT2yp7%2BEYVJijqRRt1IfGhcoHSe3eCxD5VQCjr%2BfmyOs7ftwLVnvZx9DbVk8D9NHTwf6keACyCJx19qy1Oul9tYtq%2BYdX2L2v6NqQApjYvi8JH%2BLqTHR%2BKlQ79kQLPX10QHEPOR1RW0Af0%2FL%2Fu03c4TJ23rpZMiLivIJ&X-Amz-Signature=45c766fd9c2f50405022ccebf0fe3e24627d04fae68aa25e6d2f761f45c2d3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5OCD3I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOjrjGo%2F9xGNLkanvaSo4Xyr0g6yEiL8AW%2B%2FOM6potYAiEAwATu2RG4ADOJ%2B0s7%2BiNfDX6G9WMwpYPtOAMPpHi3yYMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDRFUW%2FqpTI%2FQ08%2FiircA%2FWPnKfoslPdLpYcz5tvu2Wj3ICuwr2rGmapiqAjE82462Sbr3w1pw2YLVTo0LgTUrIg0G1y9eqGB%2BhTq8q3OCy1bIm8d9fYIlWtUnX5MBHpF4mTiRq4oGffLLNEguQZfipaTp9m5RX%2BBBDNq1Ap%2FX8G9hN0LZqJsQNTSVcSh4i1bJuBpQ2cl%2B6ZSedRsP%2BRcTnK5Q6foewXhRS63n24%2BIZ2ifpLlN%2FXGcqsSyIoBFH%2F4lLxuDX8tj7zrZE3uwGxJ8Izg52Q2CW0NrAXEwHpWV74r7WiyFB0OSVJlnAbNWqTew7ljSwraCa%2FsB0HNLB7nqRNaogjeD34wmcyNJuNdxB4eq6CJOrdyt%2F1WAhU%2FKMiogDdIxw%2BgfP5DCf0i7IaKmC0qptI6XxO54fWzsgnJmob%2Fr692DtKIZKBiJ63htW2v0DXVBjBhZVyxtUJ620%2FHkj0Y8%2Fv28F5fd7xwGgwbbhU14ab0eGHCPKtOOLeiMhiq%2F3Xgl6Giz%2Fz4hGO%2BEETzpNTSmm8Yq2gLIwB6xVNhR63LmcuwmtTE%2F5hGtnAMDufFLFqjT3jzoxWxAkaIEPqLTwdjjEO%2FUqn1weraAw8mASKuV3kY%2FImzFD9PrqzKZN1DFB9FCtRiTaQDzV3MLSq274GOqUBXkucz%2FCCg70oEXiqRYvCNHCdHIOTOkAfBjttAhx6AkntS2N0HTQztohmFT2yp7%2BEYVJijqRRt1IfGhcoHSe3eCxD5VQCjr%2BfmyOs7ftwLVnvZx9DbVk8D9NHTwf6keACyCJx19qy1Oul9tYtq%2BYdX2L2v6NqQApjYvi8JH%2BLqTHR%2BKlQ79kQLPX10QHEPOR1RW0Af0%2FL%2Fu03c4TJ23rpZMiLivIJ&X-Amz-Signature=5f6f1dee2a260656b4e318e8bc1d4ba3345accdffbdb0b52460801aad1d69547&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
