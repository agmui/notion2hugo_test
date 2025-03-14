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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCRQW7B%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLCjOikV6QkiHa9a8zTBzRgmW2SzdM6BOCr5EzqinQ9QIgXNV7P7lt2VyUhSoRvML7wrzq2hi3P%2FtpdSC14Dfff1wqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTta1gSYxOCM3z8ZSrcAwXvormMCJpeQ2LCUymjMSNF%2FdGfwo0%2BNlVyFnODcdd5kL84BEqYBK6Dhkd8LOi57GdFZ4%2FQFPDU58g8%2B9NzomuMmFwfSb2PKVdwSoS%2BH%2FiJC5n36P7shg2t9UZlN3LT8TeNftVzEck5qsF27820x1%2BulFEFxs%2FcQjw9fJdqgaUIYPvy9MRv%2FyKYKY%2BfPCPvI%2B1cJ2bABqqJfry49vF3x3FzhY9BMqy7rWe%2Fx9pDi2vYvxgoLSKT25JbEsQr4EFfY1a2vsnmF%2FH3%2B%2FkZRBnLFmey0m0abplLIKxbg7N4lqX3fzf3DeofqNEzBO49JbCcShEJNOXUZR4x7SHQ7S0y%2BOwY7YVEah%2B4ZehSlCVvf5CHUrgVefYSrzPSGLM%2FlDiEknVGireGauEc5njHk1UGPORZtD39AFFOxYv1h7InrPW2dJH%2B1DrJYolu8s4fWBEoepW1HruXHXXeqygibaagyv2KRV2eqGv8rCbly8xtd5NZtIpUf6tvcMSNhwZnPsHCcvZk9F2bL%2FNUxDY9Hi8oMMnwcjnOBHCByyDvpDi%2BDoANvP7atamKw5C1ufUvHdSjB8WVpoEZRpQGfwRJt20d7a7R%2F6ypQ%2B%2FtSlhejgRcvseb0Dp8%2Bh0l%2FjzX%2Ba88MMXNzr4GOqUBhksD3lkafqPfDp28tjCH%2FAJabbnNGQD2Ubvr%2B9HAENfqFIAf%2BDK6qkjJiYGl1OHn0ri%2FkWcBsbxPW3N2PoMinO%2FW4jf8JMOMijCAIaV0%2FSVGPooE7i89xB5S%2FeCRA3bcZQtXUFBkVByLx2b%2BtcHS8tVeIhcSj%2B9%2BzvXrAc6%2BJ%2B6nRQTKpghKb3LoPRkqPypmnUzxMvctMIXPWjryoyHWeE4f3BaE&X-Amz-Signature=1f870a899d16f929f3c76fc972ed8a77b2990c8576b77ee2911bf2c9c3c815c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCRQW7B%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLCjOikV6QkiHa9a8zTBzRgmW2SzdM6BOCr5EzqinQ9QIgXNV7P7lt2VyUhSoRvML7wrzq2hi3P%2FtpdSC14Dfff1wqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTta1gSYxOCM3z8ZSrcAwXvormMCJpeQ2LCUymjMSNF%2FdGfwo0%2BNlVyFnODcdd5kL84BEqYBK6Dhkd8LOi57GdFZ4%2FQFPDU58g8%2B9NzomuMmFwfSb2PKVdwSoS%2BH%2FiJC5n36P7shg2t9UZlN3LT8TeNftVzEck5qsF27820x1%2BulFEFxs%2FcQjw9fJdqgaUIYPvy9MRv%2FyKYKY%2BfPCPvI%2B1cJ2bABqqJfry49vF3x3FzhY9BMqy7rWe%2Fx9pDi2vYvxgoLSKT25JbEsQr4EFfY1a2vsnmF%2FH3%2B%2FkZRBnLFmey0m0abplLIKxbg7N4lqX3fzf3DeofqNEzBO49JbCcShEJNOXUZR4x7SHQ7S0y%2BOwY7YVEah%2B4ZehSlCVvf5CHUrgVefYSrzPSGLM%2FlDiEknVGireGauEc5njHk1UGPORZtD39AFFOxYv1h7InrPW2dJH%2B1DrJYolu8s4fWBEoepW1HruXHXXeqygibaagyv2KRV2eqGv8rCbly8xtd5NZtIpUf6tvcMSNhwZnPsHCcvZk9F2bL%2FNUxDY9Hi8oMMnwcjnOBHCByyDvpDi%2BDoANvP7atamKw5C1ufUvHdSjB8WVpoEZRpQGfwRJt20d7a7R%2F6ypQ%2B%2FtSlhejgRcvseb0Dp8%2Bh0l%2FjzX%2Ba88MMXNzr4GOqUBhksD3lkafqPfDp28tjCH%2FAJabbnNGQD2Ubvr%2B9HAENfqFIAf%2BDK6qkjJiYGl1OHn0ri%2FkWcBsbxPW3N2PoMinO%2FW4jf8JMOMijCAIaV0%2FSVGPooE7i89xB5S%2FeCRA3bcZQtXUFBkVByLx2b%2BtcHS8tVeIhcSj%2B9%2BzvXrAc6%2BJ%2B6nRQTKpghKb3LoPRkqPypmnUzxMvctMIXPWjryoyHWeE4f3BaE&X-Amz-Signature=3fbb6cd8e7a25925af39eeb6868f2641c5f3b891d7b9c850c06d850504613380&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCRQW7B%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLCjOikV6QkiHa9a8zTBzRgmW2SzdM6BOCr5EzqinQ9QIgXNV7P7lt2VyUhSoRvML7wrzq2hi3P%2FtpdSC14Dfff1wqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTta1gSYxOCM3z8ZSrcAwXvormMCJpeQ2LCUymjMSNF%2FdGfwo0%2BNlVyFnODcdd5kL84BEqYBK6Dhkd8LOi57GdFZ4%2FQFPDU58g8%2B9NzomuMmFwfSb2PKVdwSoS%2BH%2FiJC5n36P7shg2t9UZlN3LT8TeNftVzEck5qsF27820x1%2BulFEFxs%2FcQjw9fJdqgaUIYPvy9MRv%2FyKYKY%2BfPCPvI%2B1cJ2bABqqJfry49vF3x3FzhY9BMqy7rWe%2Fx9pDi2vYvxgoLSKT25JbEsQr4EFfY1a2vsnmF%2FH3%2B%2FkZRBnLFmey0m0abplLIKxbg7N4lqX3fzf3DeofqNEzBO49JbCcShEJNOXUZR4x7SHQ7S0y%2BOwY7YVEah%2B4ZehSlCVvf5CHUrgVefYSrzPSGLM%2FlDiEknVGireGauEc5njHk1UGPORZtD39AFFOxYv1h7InrPW2dJH%2B1DrJYolu8s4fWBEoepW1HruXHXXeqygibaagyv2KRV2eqGv8rCbly8xtd5NZtIpUf6tvcMSNhwZnPsHCcvZk9F2bL%2FNUxDY9Hi8oMMnwcjnOBHCByyDvpDi%2BDoANvP7atamKw5C1ufUvHdSjB8WVpoEZRpQGfwRJt20d7a7R%2F6ypQ%2B%2FtSlhejgRcvseb0Dp8%2Bh0l%2FjzX%2Ba88MMXNzr4GOqUBhksD3lkafqPfDp28tjCH%2FAJabbnNGQD2Ubvr%2B9HAENfqFIAf%2BDK6qkjJiYGl1OHn0ri%2FkWcBsbxPW3N2PoMinO%2FW4jf8JMOMijCAIaV0%2FSVGPooE7i89xB5S%2FeCRA3bcZQtXUFBkVByLx2b%2BtcHS8tVeIhcSj%2B9%2BzvXrAc6%2BJ%2B6nRQTKpghKb3LoPRkqPypmnUzxMvctMIXPWjryoyHWeE4f3BaE&X-Amz-Signature=f16de69f5b8bc912b9b4f5b5179f3769f416d669cc64727a29cf6b4de3d1e39b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCRQW7B%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLCjOikV6QkiHa9a8zTBzRgmW2SzdM6BOCr5EzqinQ9QIgXNV7P7lt2VyUhSoRvML7wrzq2hi3P%2FtpdSC14Dfff1wqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTta1gSYxOCM3z8ZSrcAwXvormMCJpeQ2LCUymjMSNF%2FdGfwo0%2BNlVyFnODcdd5kL84BEqYBK6Dhkd8LOi57GdFZ4%2FQFPDU58g8%2B9NzomuMmFwfSb2PKVdwSoS%2BH%2FiJC5n36P7shg2t9UZlN3LT8TeNftVzEck5qsF27820x1%2BulFEFxs%2FcQjw9fJdqgaUIYPvy9MRv%2FyKYKY%2BfPCPvI%2B1cJ2bABqqJfry49vF3x3FzhY9BMqy7rWe%2Fx9pDi2vYvxgoLSKT25JbEsQr4EFfY1a2vsnmF%2FH3%2B%2FkZRBnLFmey0m0abplLIKxbg7N4lqX3fzf3DeofqNEzBO49JbCcShEJNOXUZR4x7SHQ7S0y%2BOwY7YVEah%2B4ZehSlCVvf5CHUrgVefYSrzPSGLM%2FlDiEknVGireGauEc5njHk1UGPORZtD39AFFOxYv1h7InrPW2dJH%2B1DrJYolu8s4fWBEoepW1HruXHXXeqygibaagyv2KRV2eqGv8rCbly8xtd5NZtIpUf6tvcMSNhwZnPsHCcvZk9F2bL%2FNUxDY9Hi8oMMnwcjnOBHCByyDvpDi%2BDoANvP7atamKw5C1ufUvHdSjB8WVpoEZRpQGfwRJt20d7a7R%2F6ypQ%2B%2FtSlhejgRcvseb0Dp8%2Bh0l%2FjzX%2Ba88MMXNzr4GOqUBhksD3lkafqPfDp28tjCH%2FAJabbnNGQD2Ubvr%2B9HAENfqFIAf%2BDK6qkjJiYGl1OHn0ri%2FkWcBsbxPW3N2PoMinO%2FW4jf8JMOMijCAIaV0%2FSVGPooE7i89xB5S%2FeCRA3bcZQtXUFBkVByLx2b%2BtcHS8tVeIhcSj%2B9%2BzvXrAc6%2BJ%2B6nRQTKpghKb3LoPRkqPypmnUzxMvctMIXPWjryoyHWeE4f3BaE&X-Amz-Signature=c20d974a422383681ad05553a9d192804b135ef6b825a9f2e74e4284ab2a9cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCRQW7B%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLCjOikV6QkiHa9a8zTBzRgmW2SzdM6BOCr5EzqinQ9QIgXNV7P7lt2VyUhSoRvML7wrzq2hi3P%2FtpdSC14Dfff1wqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTta1gSYxOCM3z8ZSrcAwXvormMCJpeQ2LCUymjMSNF%2FdGfwo0%2BNlVyFnODcdd5kL84BEqYBK6Dhkd8LOi57GdFZ4%2FQFPDU58g8%2B9NzomuMmFwfSb2PKVdwSoS%2BH%2FiJC5n36P7shg2t9UZlN3LT8TeNftVzEck5qsF27820x1%2BulFEFxs%2FcQjw9fJdqgaUIYPvy9MRv%2FyKYKY%2BfPCPvI%2B1cJ2bABqqJfry49vF3x3FzhY9BMqy7rWe%2Fx9pDi2vYvxgoLSKT25JbEsQr4EFfY1a2vsnmF%2FH3%2B%2FkZRBnLFmey0m0abplLIKxbg7N4lqX3fzf3DeofqNEzBO49JbCcShEJNOXUZR4x7SHQ7S0y%2BOwY7YVEah%2B4ZehSlCVvf5CHUrgVefYSrzPSGLM%2FlDiEknVGireGauEc5njHk1UGPORZtD39AFFOxYv1h7InrPW2dJH%2B1DrJYolu8s4fWBEoepW1HruXHXXeqygibaagyv2KRV2eqGv8rCbly8xtd5NZtIpUf6tvcMSNhwZnPsHCcvZk9F2bL%2FNUxDY9Hi8oMMnwcjnOBHCByyDvpDi%2BDoANvP7atamKw5C1ufUvHdSjB8WVpoEZRpQGfwRJt20d7a7R%2F6ypQ%2B%2FtSlhejgRcvseb0Dp8%2Bh0l%2FjzX%2Ba88MMXNzr4GOqUBhksD3lkafqPfDp28tjCH%2FAJabbnNGQD2Ubvr%2B9HAENfqFIAf%2BDK6qkjJiYGl1OHn0ri%2FkWcBsbxPW3N2PoMinO%2FW4jf8JMOMijCAIaV0%2FSVGPooE7i89xB5S%2FeCRA3bcZQtXUFBkVByLx2b%2BtcHS8tVeIhcSj%2B9%2BzvXrAc6%2BJ%2B6nRQTKpghKb3LoPRkqPypmnUzxMvctMIXPWjryoyHWeE4f3BaE&X-Amz-Signature=eda9e1495001936c9663e5565bb42ed283f6c457faf22dd921b7a89b76df244a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCRQW7B%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLCjOikV6QkiHa9a8zTBzRgmW2SzdM6BOCr5EzqinQ9QIgXNV7P7lt2VyUhSoRvML7wrzq2hi3P%2FtpdSC14Dfff1wqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTta1gSYxOCM3z8ZSrcAwXvormMCJpeQ2LCUymjMSNF%2FdGfwo0%2BNlVyFnODcdd5kL84BEqYBK6Dhkd8LOi57GdFZ4%2FQFPDU58g8%2B9NzomuMmFwfSb2PKVdwSoS%2BH%2FiJC5n36P7shg2t9UZlN3LT8TeNftVzEck5qsF27820x1%2BulFEFxs%2FcQjw9fJdqgaUIYPvy9MRv%2FyKYKY%2BfPCPvI%2B1cJ2bABqqJfry49vF3x3FzhY9BMqy7rWe%2Fx9pDi2vYvxgoLSKT25JbEsQr4EFfY1a2vsnmF%2FH3%2B%2FkZRBnLFmey0m0abplLIKxbg7N4lqX3fzf3DeofqNEzBO49JbCcShEJNOXUZR4x7SHQ7S0y%2BOwY7YVEah%2B4ZehSlCVvf5CHUrgVefYSrzPSGLM%2FlDiEknVGireGauEc5njHk1UGPORZtD39AFFOxYv1h7InrPW2dJH%2B1DrJYolu8s4fWBEoepW1HruXHXXeqygibaagyv2KRV2eqGv8rCbly8xtd5NZtIpUf6tvcMSNhwZnPsHCcvZk9F2bL%2FNUxDY9Hi8oMMnwcjnOBHCByyDvpDi%2BDoANvP7atamKw5C1ufUvHdSjB8WVpoEZRpQGfwRJt20d7a7R%2F6ypQ%2B%2FtSlhejgRcvseb0Dp8%2Bh0l%2FjzX%2Ba88MMXNzr4GOqUBhksD3lkafqPfDp28tjCH%2FAJabbnNGQD2Ubvr%2B9HAENfqFIAf%2BDK6qkjJiYGl1OHn0ri%2FkWcBsbxPW3N2PoMinO%2FW4jf8JMOMijCAIaV0%2FSVGPooE7i89xB5S%2FeCRA3bcZQtXUFBkVByLx2b%2BtcHS8tVeIhcSj%2B9%2BzvXrAc6%2BJ%2B6nRQTKpghKb3LoPRkqPypmnUzxMvctMIXPWjryoyHWeE4f3BaE&X-Amz-Signature=3f9cf5f51710e60a9b5f3bcffb94264eacb2b1285e151bac9040ab0ea1ff9cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCRQW7B%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLCjOikV6QkiHa9a8zTBzRgmW2SzdM6BOCr5EzqinQ9QIgXNV7P7lt2VyUhSoRvML7wrzq2hi3P%2FtpdSC14Dfff1wqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTta1gSYxOCM3z8ZSrcAwXvormMCJpeQ2LCUymjMSNF%2FdGfwo0%2BNlVyFnODcdd5kL84BEqYBK6Dhkd8LOi57GdFZ4%2FQFPDU58g8%2B9NzomuMmFwfSb2PKVdwSoS%2BH%2FiJC5n36P7shg2t9UZlN3LT8TeNftVzEck5qsF27820x1%2BulFEFxs%2FcQjw9fJdqgaUIYPvy9MRv%2FyKYKY%2BfPCPvI%2B1cJ2bABqqJfry49vF3x3FzhY9BMqy7rWe%2Fx9pDi2vYvxgoLSKT25JbEsQr4EFfY1a2vsnmF%2FH3%2B%2FkZRBnLFmey0m0abplLIKxbg7N4lqX3fzf3DeofqNEzBO49JbCcShEJNOXUZR4x7SHQ7S0y%2BOwY7YVEah%2B4ZehSlCVvf5CHUrgVefYSrzPSGLM%2FlDiEknVGireGauEc5njHk1UGPORZtD39AFFOxYv1h7InrPW2dJH%2B1DrJYolu8s4fWBEoepW1HruXHXXeqygibaagyv2KRV2eqGv8rCbly8xtd5NZtIpUf6tvcMSNhwZnPsHCcvZk9F2bL%2FNUxDY9Hi8oMMnwcjnOBHCByyDvpDi%2BDoANvP7atamKw5C1ufUvHdSjB8WVpoEZRpQGfwRJt20d7a7R%2F6ypQ%2B%2FtSlhejgRcvseb0Dp8%2Bh0l%2FjzX%2Ba88MMXNzr4GOqUBhksD3lkafqPfDp28tjCH%2FAJabbnNGQD2Ubvr%2B9HAENfqFIAf%2BDK6qkjJiYGl1OHn0ri%2FkWcBsbxPW3N2PoMinO%2FW4jf8JMOMijCAIaV0%2FSVGPooE7i89xB5S%2FeCRA3bcZQtXUFBkVByLx2b%2BtcHS8tVeIhcSj%2B9%2BzvXrAc6%2BJ%2B6nRQTKpghKb3LoPRkqPypmnUzxMvctMIXPWjryoyHWeE4f3BaE&X-Amz-Signature=9b4232f550306e5e9839e075313c263aa452ac74bbf81cfafd2d78107ec898b7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
