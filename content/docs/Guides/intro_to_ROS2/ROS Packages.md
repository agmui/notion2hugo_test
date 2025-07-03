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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG7BXWLK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr7bwbUZFuiGLNKzgeRWc0okaQwseD89DgTzi5ZklDJwIgX5ke3G12UOL9oyCqhSLq0sdHAvXll2nW7j5v4RqRj%2Fsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDN%2Fb013%2FCCOkkrYvtSrcA%2B3HFJO86awJCOpkwcfzrH8ZQ3ufAK9Dd%2FUBecYamXCt4fq51n2meExXDGif9zxDWpR2pJOpaN5XrXxCwrTPdyM1xAxU%2BTTRZrS3EMfrKzxo9g1wObhr95c1Xbb6GZlKZoU%2BRnNYIQAiFpSBeK0rMx4z1pcgXU6GL%2BhhPr7kgK2%2FvVUgmB2gjh%2BzL%2B9TlL68si27zcuzxxZH4OsCcafPSkdJnKRGXvWqm%2BcV0bHfu8Cejp%2BlsxuZhBmPqEZNH45T0I5MWV2SU2TEVu9UYnGHgrHePndp93ntZ53sxDXuT7gOmT4%2BPTN3Ul%2BMrIetWaMOH2bBydpMELA4jlU%2FVp%2BKEHEu9MGUTHVSpnwPrr0hUsMewTmma5nSIlv8Pfl3csKC4Y7xSrhoWb82YaAOqQP0g4iV5or2eLrVKNRwQHOudYtN%2FT2WcGm9Be85e7%2Fy6Au9DcOz%2FhXk%2Bcn9DYoLxuz%2FjShxu3H05NPpuoBwXk4Eg9dRYWwFCxyRoyPuQVT7rE0kNS1Z%2FwTAOTEvdr0zXTpcwRuU7YgvKblVWT7AXIk5kQbsdjMv4q0h4tYbF5MhfVLd0h2mBsau7iDn5PjBA90q7wpiBYBS2voDIPDiwKmGDbvg4uQ8btcy2vNjdYQ0MJnmmsMGOqUBcyWJIeys%2Fcr8btcE2LFIXEBL7Ecl4er8UwyDVfCeuzZVxC4T19DXDTzqoxSy3nvg0dOh1WJMFq%2BJR%2BtneAYG2VozQnO2ZcdmeU6wNPo%2BFDz6yIlSzSbNz%2BmU0N%2BuR2GFrwUqLRvTQIuqBUIfdNHNsf0h%2Bx4gaM7Htd95bQJxhHF98YJdl2pimjVtiaK1VDCf6J%2FoLy5yahxDXe1macOYGBdXXtI0&X-Amz-Signature=a3191b5deaab836b651689bd3d36979739df840ac981e21ee8aa449368eca3fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG7BXWLK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr7bwbUZFuiGLNKzgeRWc0okaQwseD89DgTzi5ZklDJwIgX5ke3G12UOL9oyCqhSLq0sdHAvXll2nW7j5v4RqRj%2Fsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDN%2Fb013%2FCCOkkrYvtSrcA%2B3HFJO86awJCOpkwcfzrH8ZQ3ufAK9Dd%2FUBecYamXCt4fq51n2meExXDGif9zxDWpR2pJOpaN5XrXxCwrTPdyM1xAxU%2BTTRZrS3EMfrKzxo9g1wObhr95c1Xbb6GZlKZoU%2BRnNYIQAiFpSBeK0rMx4z1pcgXU6GL%2BhhPr7kgK2%2FvVUgmB2gjh%2BzL%2B9TlL68si27zcuzxxZH4OsCcafPSkdJnKRGXvWqm%2BcV0bHfu8Cejp%2BlsxuZhBmPqEZNH45T0I5MWV2SU2TEVu9UYnGHgrHePndp93ntZ53sxDXuT7gOmT4%2BPTN3Ul%2BMrIetWaMOH2bBydpMELA4jlU%2FVp%2BKEHEu9MGUTHVSpnwPrr0hUsMewTmma5nSIlv8Pfl3csKC4Y7xSrhoWb82YaAOqQP0g4iV5or2eLrVKNRwQHOudYtN%2FT2WcGm9Be85e7%2Fy6Au9DcOz%2FhXk%2Bcn9DYoLxuz%2FjShxu3H05NPpuoBwXk4Eg9dRYWwFCxyRoyPuQVT7rE0kNS1Z%2FwTAOTEvdr0zXTpcwRuU7YgvKblVWT7AXIk5kQbsdjMv4q0h4tYbF5MhfVLd0h2mBsau7iDn5PjBA90q7wpiBYBS2voDIPDiwKmGDbvg4uQ8btcy2vNjdYQ0MJnmmsMGOqUBcyWJIeys%2Fcr8btcE2LFIXEBL7Ecl4er8UwyDVfCeuzZVxC4T19DXDTzqoxSy3nvg0dOh1WJMFq%2BJR%2BtneAYG2VozQnO2ZcdmeU6wNPo%2BFDz6yIlSzSbNz%2BmU0N%2BuR2GFrwUqLRvTQIuqBUIfdNHNsf0h%2Bx4gaM7Htd95bQJxhHF98YJdl2pimjVtiaK1VDCf6J%2FoLy5yahxDXe1macOYGBdXXtI0&X-Amz-Signature=c6beca29a79c95af59b06164e5590da0d01f7be88e1bba1aa48de1e28bfd3a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG7BXWLK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr7bwbUZFuiGLNKzgeRWc0okaQwseD89DgTzi5ZklDJwIgX5ke3G12UOL9oyCqhSLq0sdHAvXll2nW7j5v4RqRj%2Fsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDN%2Fb013%2FCCOkkrYvtSrcA%2B3HFJO86awJCOpkwcfzrH8ZQ3ufAK9Dd%2FUBecYamXCt4fq51n2meExXDGif9zxDWpR2pJOpaN5XrXxCwrTPdyM1xAxU%2BTTRZrS3EMfrKzxo9g1wObhr95c1Xbb6GZlKZoU%2BRnNYIQAiFpSBeK0rMx4z1pcgXU6GL%2BhhPr7kgK2%2FvVUgmB2gjh%2BzL%2B9TlL68si27zcuzxxZH4OsCcafPSkdJnKRGXvWqm%2BcV0bHfu8Cejp%2BlsxuZhBmPqEZNH45T0I5MWV2SU2TEVu9UYnGHgrHePndp93ntZ53sxDXuT7gOmT4%2BPTN3Ul%2BMrIetWaMOH2bBydpMELA4jlU%2FVp%2BKEHEu9MGUTHVSpnwPrr0hUsMewTmma5nSIlv8Pfl3csKC4Y7xSrhoWb82YaAOqQP0g4iV5or2eLrVKNRwQHOudYtN%2FT2WcGm9Be85e7%2Fy6Au9DcOz%2FhXk%2Bcn9DYoLxuz%2FjShxu3H05NPpuoBwXk4Eg9dRYWwFCxyRoyPuQVT7rE0kNS1Z%2FwTAOTEvdr0zXTpcwRuU7YgvKblVWT7AXIk5kQbsdjMv4q0h4tYbF5MhfVLd0h2mBsau7iDn5PjBA90q7wpiBYBS2voDIPDiwKmGDbvg4uQ8btcy2vNjdYQ0MJnmmsMGOqUBcyWJIeys%2Fcr8btcE2LFIXEBL7Ecl4er8UwyDVfCeuzZVxC4T19DXDTzqoxSy3nvg0dOh1WJMFq%2BJR%2BtneAYG2VozQnO2ZcdmeU6wNPo%2BFDz6yIlSzSbNz%2BmU0N%2BuR2GFrwUqLRvTQIuqBUIfdNHNsf0h%2Bx4gaM7Htd95bQJxhHF98YJdl2pimjVtiaK1VDCf6J%2FoLy5yahxDXe1macOYGBdXXtI0&X-Amz-Signature=927f79d7a3953b2da8f28f4b5b7f5a059302f66c4761a3e34c97f02415efe2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG7BXWLK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr7bwbUZFuiGLNKzgeRWc0okaQwseD89DgTzi5ZklDJwIgX5ke3G12UOL9oyCqhSLq0sdHAvXll2nW7j5v4RqRj%2Fsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDN%2Fb013%2FCCOkkrYvtSrcA%2B3HFJO86awJCOpkwcfzrH8ZQ3ufAK9Dd%2FUBecYamXCt4fq51n2meExXDGif9zxDWpR2pJOpaN5XrXxCwrTPdyM1xAxU%2BTTRZrS3EMfrKzxo9g1wObhr95c1Xbb6GZlKZoU%2BRnNYIQAiFpSBeK0rMx4z1pcgXU6GL%2BhhPr7kgK2%2FvVUgmB2gjh%2BzL%2B9TlL68si27zcuzxxZH4OsCcafPSkdJnKRGXvWqm%2BcV0bHfu8Cejp%2BlsxuZhBmPqEZNH45T0I5MWV2SU2TEVu9UYnGHgrHePndp93ntZ53sxDXuT7gOmT4%2BPTN3Ul%2BMrIetWaMOH2bBydpMELA4jlU%2FVp%2BKEHEu9MGUTHVSpnwPrr0hUsMewTmma5nSIlv8Pfl3csKC4Y7xSrhoWb82YaAOqQP0g4iV5or2eLrVKNRwQHOudYtN%2FT2WcGm9Be85e7%2Fy6Au9DcOz%2FhXk%2Bcn9DYoLxuz%2FjShxu3H05NPpuoBwXk4Eg9dRYWwFCxyRoyPuQVT7rE0kNS1Z%2FwTAOTEvdr0zXTpcwRuU7YgvKblVWT7AXIk5kQbsdjMv4q0h4tYbF5MhfVLd0h2mBsau7iDn5PjBA90q7wpiBYBS2voDIPDiwKmGDbvg4uQ8btcy2vNjdYQ0MJnmmsMGOqUBcyWJIeys%2Fcr8btcE2LFIXEBL7Ecl4er8UwyDVfCeuzZVxC4T19DXDTzqoxSy3nvg0dOh1WJMFq%2BJR%2BtneAYG2VozQnO2ZcdmeU6wNPo%2BFDz6yIlSzSbNz%2BmU0N%2BuR2GFrwUqLRvTQIuqBUIfdNHNsf0h%2Bx4gaM7Htd95bQJxhHF98YJdl2pimjVtiaK1VDCf6J%2FoLy5yahxDXe1macOYGBdXXtI0&X-Amz-Signature=4c29787dde3d3484d06c02cb7872e3a7274801aa6fe03b9ae1ae96e2d1c5b0db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG7BXWLK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr7bwbUZFuiGLNKzgeRWc0okaQwseD89DgTzi5ZklDJwIgX5ke3G12UOL9oyCqhSLq0sdHAvXll2nW7j5v4RqRj%2Fsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDN%2Fb013%2FCCOkkrYvtSrcA%2B3HFJO86awJCOpkwcfzrH8ZQ3ufAK9Dd%2FUBecYamXCt4fq51n2meExXDGif9zxDWpR2pJOpaN5XrXxCwrTPdyM1xAxU%2BTTRZrS3EMfrKzxo9g1wObhr95c1Xbb6GZlKZoU%2BRnNYIQAiFpSBeK0rMx4z1pcgXU6GL%2BhhPr7kgK2%2FvVUgmB2gjh%2BzL%2B9TlL68si27zcuzxxZH4OsCcafPSkdJnKRGXvWqm%2BcV0bHfu8Cejp%2BlsxuZhBmPqEZNH45T0I5MWV2SU2TEVu9UYnGHgrHePndp93ntZ53sxDXuT7gOmT4%2BPTN3Ul%2BMrIetWaMOH2bBydpMELA4jlU%2FVp%2BKEHEu9MGUTHVSpnwPrr0hUsMewTmma5nSIlv8Pfl3csKC4Y7xSrhoWb82YaAOqQP0g4iV5or2eLrVKNRwQHOudYtN%2FT2WcGm9Be85e7%2Fy6Au9DcOz%2FhXk%2Bcn9DYoLxuz%2FjShxu3H05NPpuoBwXk4Eg9dRYWwFCxyRoyPuQVT7rE0kNS1Z%2FwTAOTEvdr0zXTpcwRuU7YgvKblVWT7AXIk5kQbsdjMv4q0h4tYbF5MhfVLd0h2mBsau7iDn5PjBA90q7wpiBYBS2voDIPDiwKmGDbvg4uQ8btcy2vNjdYQ0MJnmmsMGOqUBcyWJIeys%2Fcr8btcE2LFIXEBL7Ecl4er8UwyDVfCeuzZVxC4T19DXDTzqoxSy3nvg0dOh1WJMFq%2BJR%2BtneAYG2VozQnO2ZcdmeU6wNPo%2BFDz6yIlSzSbNz%2BmU0N%2BuR2GFrwUqLRvTQIuqBUIfdNHNsf0h%2Bx4gaM7Htd95bQJxhHF98YJdl2pimjVtiaK1VDCf6J%2FoLy5yahxDXe1macOYGBdXXtI0&X-Amz-Signature=2b4283ad211ecf5b48ffbfea341a7a87e26b3a120a76fba3c2b3e88278a5b2e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG7BXWLK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr7bwbUZFuiGLNKzgeRWc0okaQwseD89DgTzi5ZklDJwIgX5ke3G12UOL9oyCqhSLq0sdHAvXll2nW7j5v4RqRj%2Fsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDN%2Fb013%2FCCOkkrYvtSrcA%2B3HFJO86awJCOpkwcfzrH8ZQ3ufAK9Dd%2FUBecYamXCt4fq51n2meExXDGif9zxDWpR2pJOpaN5XrXxCwrTPdyM1xAxU%2BTTRZrS3EMfrKzxo9g1wObhr95c1Xbb6GZlKZoU%2BRnNYIQAiFpSBeK0rMx4z1pcgXU6GL%2BhhPr7kgK2%2FvVUgmB2gjh%2BzL%2B9TlL68si27zcuzxxZH4OsCcafPSkdJnKRGXvWqm%2BcV0bHfu8Cejp%2BlsxuZhBmPqEZNH45T0I5MWV2SU2TEVu9UYnGHgrHePndp93ntZ53sxDXuT7gOmT4%2BPTN3Ul%2BMrIetWaMOH2bBydpMELA4jlU%2FVp%2BKEHEu9MGUTHVSpnwPrr0hUsMewTmma5nSIlv8Pfl3csKC4Y7xSrhoWb82YaAOqQP0g4iV5or2eLrVKNRwQHOudYtN%2FT2WcGm9Be85e7%2Fy6Au9DcOz%2FhXk%2Bcn9DYoLxuz%2FjShxu3H05NPpuoBwXk4Eg9dRYWwFCxyRoyPuQVT7rE0kNS1Z%2FwTAOTEvdr0zXTpcwRuU7YgvKblVWT7AXIk5kQbsdjMv4q0h4tYbF5MhfVLd0h2mBsau7iDn5PjBA90q7wpiBYBS2voDIPDiwKmGDbvg4uQ8btcy2vNjdYQ0MJnmmsMGOqUBcyWJIeys%2Fcr8btcE2LFIXEBL7Ecl4er8UwyDVfCeuzZVxC4T19DXDTzqoxSy3nvg0dOh1WJMFq%2BJR%2BtneAYG2VozQnO2ZcdmeU6wNPo%2BFDz6yIlSzSbNz%2BmU0N%2BuR2GFrwUqLRvTQIuqBUIfdNHNsf0h%2Bx4gaM7Htd95bQJxhHF98YJdl2pimjVtiaK1VDCf6J%2FoLy5yahxDXe1macOYGBdXXtI0&X-Amz-Signature=fa746bb88736617282459828359786df5417b75269ebf9b60afafdc09ddadd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG7BXWLK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDr7bwbUZFuiGLNKzgeRWc0okaQwseD89DgTzi5ZklDJwIgX5ke3G12UOL9oyCqhSLq0sdHAvXll2nW7j5v4RqRj%2Fsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDN%2Fb013%2FCCOkkrYvtSrcA%2B3HFJO86awJCOpkwcfzrH8ZQ3ufAK9Dd%2FUBecYamXCt4fq51n2meExXDGif9zxDWpR2pJOpaN5XrXxCwrTPdyM1xAxU%2BTTRZrS3EMfrKzxo9g1wObhr95c1Xbb6GZlKZoU%2BRnNYIQAiFpSBeK0rMx4z1pcgXU6GL%2BhhPr7kgK2%2FvVUgmB2gjh%2BzL%2B9TlL68si27zcuzxxZH4OsCcafPSkdJnKRGXvWqm%2BcV0bHfu8Cejp%2BlsxuZhBmPqEZNH45T0I5MWV2SU2TEVu9UYnGHgrHePndp93ntZ53sxDXuT7gOmT4%2BPTN3Ul%2BMrIetWaMOH2bBydpMELA4jlU%2FVp%2BKEHEu9MGUTHVSpnwPrr0hUsMewTmma5nSIlv8Pfl3csKC4Y7xSrhoWb82YaAOqQP0g4iV5or2eLrVKNRwQHOudYtN%2FT2WcGm9Be85e7%2Fy6Au9DcOz%2FhXk%2Bcn9DYoLxuz%2FjShxu3H05NPpuoBwXk4Eg9dRYWwFCxyRoyPuQVT7rE0kNS1Z%2FwTAOTEvdr0zXTpcwRuU7YgvKblVWT7AXIk5kQbsdjMv4q0h4tYbF5MhfVLd0h2mBsau7iDn5PjBA90q7wpiBYBS2voDIPDiwKmGDbvg4uQ8btcy2vNjdYQ0MJnmmsMGOqUBcyWJIeys%2Fcr8btcE2LFIXEBL7Ecl4er8UwyDVfCeuzZVxC4T19DXDTzqoxSy3nvg0dOh1WJMFq%2BJR%2BtneAYG2VozQnO2ZcdmeU6wNPo%2BFDz6yIlSzSbNz%2BmU0N%2BuR2GFrwUqLRvTQIuqBUIfdNHNsf0h%2Bx4gaM7Htd95bQJxhHF98YJdl2pimjVtiaK1VDCf6J%2FoLy5yahxDXe1macOYGBdXXtI0&X-Amz-Signature=c666feffbd075e7518b51471da63cafe4f1541250a6d1cafef414012e3825f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
