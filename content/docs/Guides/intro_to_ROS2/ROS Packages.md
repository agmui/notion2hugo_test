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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EX4I42Y%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC87sJBKtUC%2FCErT1%2FddkdNnBdC4wcHDc8ZYfpxMhbQuAIgS09SURzC%2F233tGwmq5GqIiu4ZTEJ%2B%2Bmw5tjKgfaN1J0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2UhUfnWN5vSn2u%2FircA1nVFS1WVDhKy1AX%2BXuYi2%2FI%2FTClfVctXRysgPW5zkcFTSDxCw8z%2F%2Fb2S2y%2F3JJ6VNAA11WCfasQg%2FwWjACXmtWmDrh4FPOqwPeGXKKS%2FYCQMvmy3AaOB%2FCme9R6ZJHYHR2O2odNrtAOmhRLFpcdbEb35eCPcLgeCXvCmh%2FQR%2BSk5bKIJQSp27iUsb37GQNLjoNZV3anZggMGDbvUfLXbOTNfZZkaIDf9nvZKMHXdccMHTe2AB2YWJkZJM1Q9U4xIhF2mbO2nf6cPKNOe7zNTTzz5t84d059tdP5xRbYuZZ5lXIyEEHz4%2Bnv9eLIwAW3OZmmLjP7c4sKx2bDl1kl2etO%2FxYXTAI%2BDUmWoY4bUf0etUpKQaCza4rrPRw4%2B0fXMgki09I4Zcwtmu9clfz6xJuq2LTGNAddi6I2xxRHa0bNcJRq1cHI0COl2keAzblCWYrk3nnLwkKZqt3LZ9Tb5LkyTmOdomPTV1aPZEULmCws55XLPzxQmpKNAbp%2BptMI%2BdGSHpfJE2Ica4x0ZyMy9cA9XQH9GlLJRL59kbgv7VC64o687xrvhns1yFsT%2F9BMTn6J166OKhudG%2FDCiyczgRbEqEJ6SQ%2FI5qtLRddhgBs27hRhpCsFXrK6u1CDMNbw%2BMAGOqUBGA%2FP%2B%2FHK3%2FJyU7%2Fw9WHpMnm86h8Y2FEYfLOBiJLkp%2F0HDPolTO8A7EfntBGbiJFg8SN28j%2FfGTQcwHpiuECUZQOOFjtQtIm6mBm67WAHIBagudkzGN%2BCv5OY%2Fn1C92IeZfjUHiu2cHD%2BRxrEzDZlBX1vSZbopWRfhgwZuDqwWjxWjWMNTXs3%2FWCf%2B7iEOZLLnKwI8TP9naBDe1H3UhL%2BOxx7MFdI&X-Amz-Signature=fd8915f705b1afc1b6849a67d6c8e24970a6422524b70225ae43cadd7310ca06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EX4I42Y%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC87sJBKtUC%2FCErT1%2FddkdNnBdC4wcHDc8ZYfpxMhbQuAIgS09SURzC%2F233tGwmq5GqIiu4ZTEJ%2B%2Bmw5tjKgfaN1J0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2UhUfnWN5vSn2u%2FircA1nVFS1WVDhKy1AX%2BXuYi2%2FI%2FTClfVctXRysgPW5zkcFTSDxCw8z%2F%2Fb2S2y%2F3JJ6VNAA11WCfasQg%2FwWjACXmtWmDrh4FPOqwPeGXKKS%2FYCQMvmy3AaOB%2FCme9R6ZJHYHR2O2odNrtAOmhRLFpcdbEb35eCPcLgeCXvCmh%2FQR%2BSk5bKIJQSp27iUsb37GQNLjoNZV3anZggMGDbvUfLXbOTNfZZkaIDf9nvZKMHXdccMHTe2AB2YWJkZJM1Q9U4xIhF2mbO2nf6cPKNOe7zNTTzz5t84d059tdP5xRbYuZZ5lXIyEEHz4%2Bnv9eLIwAW3OZmmLjP7c4sKx2bDl1kl2etO%2FxYXTAI%2BDUmWoY4bUf0etUpKQaCza4rrPRw4%2B0fXMgki09I4Zcwtmu9clfz6xJuq2LTGNAddi6I2xxRHa0bNcJRq1cHI0COl2keAzblCWYrk3nnLwkKZqt3LZ9Tb5LkyTmOdomPTV1aPZEULmCws55XLPzxQmpKNAbp%2BptMI%2BdGSHpfJE2Ica4x0ZyMy9cA9XQH9GlLJRL59kbgv7VC64o687xrvhns1yFsT%2F9BMTn6J166OKhudG%2FDCiyczgRbEqEJ6SQ%2FI5qtLRddhgBs27hRhpCsFXrK6u1CDMNbw%2BMAGOqUBGA%2FP%2B%2FHK3%2FJyU7%2Fw9WHpMnm86h8Y2FEYfLOBiJLkp%2F0HDPolTO8A7EfntBGbiJFg8SN28j%2FfGTQcwHpiuECUZQOOFjtQtIm6mBm67WAHIBagudkzGN%2BCv5OY%2Fn1C92IeZfjUHiu2cHD%2BRxrEzDZlBX1vSZbopWRfhgwZuDqwWjxWjWMNTXs3%2FWCf%2B7iEOZLLnKwI8TP9naBDe1H3UhL%2BOxx7MFdI&X-Amz-Signature=23bff519c0e5485b4ed6107f4738c9f23e20f69cea15cbd201079d0407f60ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EX4I42Y%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC87sJBKtUC%2FCErT1%2FddkdNnBdC4wcHDc8ZYfpxMhbQuAIgS09SURzC%2F233tGwmq5GqIiu4ZTEJ%2B%2Bmw5tjKgfaN1J0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2UhUfnWN5vSn2u%2FircA1nVFS1WVDhKy1AX%2BXuYi2%2FI%2FTClfVctXRysgPW5zkcFTSDxCw8z%2F%2Fb2S2y%2F3JJ6VNAA11WCfasQg%2FwWjACXmtWmDrh4FPOqwPeGXKKS%2FYCQMvmy3AaOB%2FCme9R6ZJHYHR2O2odNrtAOmhRLFpcdbEb35eCPcLgeCXvCmh%2FQR%2BSk5bKIJQSp27iUsb37GQNLjoNZV3anZggMGDbvUfLXbOTNfZZkaIDf9nvZKMHXdccMHTe2AB2YWJkZJM1Q9U4xIhF2mbO2nf6cPKNOe7zNTTzz5t84d059tdP5xRbYuZZ5lXIyEEHz4%2Bnv9eLIwAW3OZmmLjP7c4sKx2bDl1kl2etO%2FxYXTAI%2BDUmWoY4bUf0etUpKQaCza4rrPRw4%2B0fXMgki09I4Zcwtmu9clfz6xJuq2LTGNAddi6I2xxRHa0bNcJRq1cHI0COl2keAzblCWYrk3nnLwkKZqt3LZ9Tb5LkyTmOdomPTV1aPZEULmCws55XLPzxQmpKNAbp%2BptMI%2BdGSHpfJE2Ica4x0ZyMy9cA9XQH9GlLJRL59kbgv7VC64o687xrvhns1yFsT%2F9BMTn6J166OKhudG%2FDCiyczgRbEqEJ6SQ%2FI5qtLRddhgBs27hRhpCsFXrK6u1CDMNbw%2BMAGOqUBGA%2FP%2B%2FHK3%2FJyU7%2Fw9WHpMnm86h8Y2FEYfLOBiJLkp%2F0HDPolTO8A7EfntBGbiJFg8SN28j%2FfGTQcwHpiuECUZQOOFjtQtIm6mBm67WAHIBagudkzGN%2BCv5OY%2Fn1C92IeZfjUHiu2cHD%2BRxrEzDZlBX1vSZbopWRfhgwZuDqwWjxWjWMNTXs3%2FWCf%2B7iEOZLLnKwI8TP9naBDe1H3UhL%2BOxx7MFdI&X-Amz-Signature=9db42febd0ff6a78e1ee85eb993eeca5734496a8c723a1f59624052aa61f7637&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EX4I42Y%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC87sJBKtUC%2FCErT1%2FddkdNnBdC4wcHDc8ZYfpxMhbQuAIgS09SURzC%2F233tGwmq5GqIiu4ZTEJ%2B%2Bmw5tjKgfaN1J0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2UhUfnWN5vSn2u%2FircA1nVFS1WVDhKy1AX%2BXuYi2%2FI%2FTClfVctXRysgPW5zkcFTSDxCw8z%2F%2Fb2S2y%2F3JJ6VNAA11WCfasQg%2FwWjACXmtWmDrh4FPOqwPeGXKKS%2FYCQMvmy3AaOB%2FCme9R6ZJHYHR2O2odNrtAOmhRLFpcdbEb35eCPcLgeCXvCmh%2FQR%2BSk5bKIJQSp27iUsb37GQNLjoNZV3anZggMGDbvUfLXbOTNfZZkaIDf9nvZKMHXdccMHTe2AB2YWJkZJM1Q9U4xIhF2mbO2nf6cPKNOe7zNTTzz5t84d059tdP5xRbYuZZ5lXIyEEHz4%2Bnv9eLIwAW3OZmmLjP7c4sKx2bDl1kl2etO%2FxYXTAI%2BDUmWoY4bUf0etUpKQaCza4rrPRw4%2B0fXMgki09I4Zcwtmu9clfz6xJuq2LTGNAddi6I2xxRHa0bNcJRq1cHI0COl2keAzblCWYrk3nnLwkKZqt3LZ9Tb5LkyTmOdomPTV1aPZEULmCws55XLPzxQmpKNAbp%2BptMI%2BdGSHpfJE2Ica4x0ZyMy9cA9XQH9GlLJRL59kbgv7VC64o687xrvhns1yFsT%2F9BMTn6J166OKhudG%2FDCiyczgRbEqEJ6SQ%2FI5qtLRddhgBs27hRhpCsFXrK6u1CDMNbw%2BMAGOqUBGA%2FP%2B%2FHK3%2FJyU7%2Fw9WHpMnm86h8Y2FEYfLOBiJLkp%2F0HDPolTO8A7EfntBGbiJFg8SN28j%2FfGTQcwHpiuECUZQOOFjtQtIm6mBm67WAHIBagudkzGN%2BCv5OY%2Fn1C92IeZfjUHiu2cHD%2BRxrEzDZlBX1vSZbopWRfhgwZuDqwWjxWjWMNTXs3%2FWCf%2B7iEOZLLnKwI8TP9naBDe1H3UhL%2BOxx7MFdI&X-Amz-Signature=42791e514bfb1200d748db8f0610ac006a91d6a5b30ad708776230b44308e5ff&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EX4I42Y%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC87sJBKtUC%2FCErT1%2FddkdNnBdC4wcHDc8ZYfpxMhbQuAIgS09SURzC%2F233tGwmq5GqIiu4ZTEJ%2B%2Bmw5tjKgfaN1J0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2UhUfnWN5vSn2u%2FircA1nVFS1WVDhKy1AX%2BXuYi2%2FI%2FTClfVctXRysgPW5zkcFTSDxCw8z%2F%2Fb2S2y%2F3JJ6VNAA11WCfasQg%2FwWjACXmtWmDrh4FPOqwPeGXKKS%2FYCQMvmy3AaOB%2FCme9R6ZJHYHR2O2odNrtAOmhRLFpcdbEb35eCPcLgeCXvCmh%2FQR%2BSk5bKIJQSp27iUsb37GQNLjoNZV3anZggMGDbvUfLXbOTNfZZkaIDf9nvZKMHXdccMHTe2AB2YWJkZJM1Q9U4xIhF2mbO2nf6cPKNOe7zNTTzz5t84d059tdP5xRbYuZZ5lXIyEEHz4%2Bnv9eLIwAW3OZmmLjP7c4sKx2bDl1kl2etO%2FxYXTAI%2BDUmWoY4bUf0etUpKQaCza4rrPRw4%2B0fXMgki09I4Zcwtmu9clfz6xJuq2LTGNAddi6I2xxRHa0bNcJRq1cHI0COl2keAzblCWYrk3nnLwkKZqt3LZ9Tb5LkyTmOdomPTV1aPZEULmCws55XLPzxQmpKNAbp%2BptMI%2BdGSHpfJE2Ica4x0ZyMy9cA9XQH9GlLJRL59kbgv7VC64o687xrvhns1yFsT%2F9BMTn6J166OKhudG%2FDCiyczgRbEqEJ6SQ%2FI5qtLRddhgBs27hRhpCsFXrK6u1CDMNbw%2BMAGOqUBGA%2FP%2B%2FHK3%2FJyU7%2Fw9WHpMnm86h8Y2FEYfLOBiJLkp%2F0HDPolTO8A7EfntBGbiJFg8SN28j%2FfGTQcwHpiuECUZQOOFjtQtIm6mBm67WAHIBagudkzGN%2BCv5OY%2Fn1C92IeZfjUHiu2cHD%2BRxrEzDZlBX1vSZbopWRfhgwZuDqwWjxWjWMNTXs3%2FWCf%2B7iEOZLLnKwI8TP9naBDe1H3UhL%2BOxx7MFdI&X-Amz-Signature=dbbf9156d024b075040a0afd8c3ae47e57227a81f8301d5735fe544bf2c0a6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EX4I42Y%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC87sJBKtUC%2FCErT1%2FddkdNnBdC4wcHDc8ZYfpxMhbQuAIgS09SURzC%2F233tGwmq5GqIiu4ZTEJ%2B%2Bmw5tjKgfaN1J0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2UhUfnWN5vSn2u%2FircA1nVFS1WVDhKy1AX%2BXuYi2%2FI%2FTClfVctXRysgPW5zkcFTSDxCw8z%2F%2Fb2S2y%2F3JJ6VNAA11WCfasQg%2FwWjACXmtWmDrh4FPOqwPeGXKKS%2FYCQMvmy3AaOB%2FCme9R6ZJHYHR2O2odNrtAOmhRLFpcdbEb35eCPcLgeCXvCmh%2FQR%2BSk5bKIJQSp27iUsb37GQNLjoNZV3anZggMGDbvUfLXbOTNfZZkaIDf9nvZKMHXdccMHTe2AB2YWJkZJM1Q9U4xIhF2mbO2nf6cPKNOe7zNTTzz5t84d059tdP5xRbYuZZ5lXIyEEHz4%2Bnv9eLIwAW3OZmmLjP7c4sKx2bDl1kl2etO%2FxYXTAI%2BDUmWoY4bUf0etUpKQaCza4rrPRw4%2B0fXMgki09I4Zcwtmu9clfz6xJuq2LTGNAddi6I2xxRHa0bNcJRq1cHI0COl2keAzblCWYrk3nnLwkKZqt3LZ9Tb5LkyTmOdomPTV1aPZEULmCws55XLPzxQmpKNAbp%2BptMI%2BdGSHpfJE2Ica4x0ZyMy9cA9XQH9GlLJRL59kbgv7VC64o687xrvhns1yFsT%2F9BMTn6J166OKhudG%2FDCiyczgRbEqEJ6SQ%2FI5qtLRddhgBs27hRhpCsFXrK6u1CDMNbw%2BMAGOqUBGA%2FP%2B%2FHK3%2FJyU7%2Fw9WHpMnm86h8Y2FEYfLOBiJLkp%2F0HDPolTO8A7EfntBGbiJFg8SN28j%2FfGTQcwHpiuECUZQOOFjtQtIm6mBm67WAHIBagudkzGN%2BCv5OY%2Fn1C92IeZfjUHiu2cHD%2BRxrEzDZlBX1vSZbopWRfhgwZuDqwWjxWjWMNTXs3%2FWCf%2B7iEOZLLnKwI8TP9naBDe1H3UhL%2BOxx7MFdI&X-Amz-Signature=23b98884a5227c0064a4b5356a65b7e64d50c81a4493acc06c8251a3b191010d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EX4I42Y%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC87sJBKtUC%2FCErT1%2FddkdNnBdC4wcHDc8ZYfpxMhbQuAIgS09SURzC%2F233tGwmq5GqIiu4ZTEJ%2B%2Bmw5tjKgfaN1J0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2UhUfnWN5vSn2u%2FircA1nVFS1WVDhKy1AX%2BXuYi2%2FI%2FTClfVctXRysgPW5zkcFTSDxCw8z%2F%2Fb2S2y%2F3JJ6VNAA11WCfasQg%2FwWjACXmtWmDrh4FPOqwPeGXKKS%2FYCQMvmy3AaOB%2FCme9R6ZJHYHR2O2odNrtAOmhRLFpcdbEb35eCPcLgeCXvCmh%2FQR%2BSk5bKIJQSp27iUsb37GQNLjoNZV3anZggMGDbvUfLXbOTNfZZkaIDf9nvZKMHXdccMHTe2AB2YWJkZJM1Q9U4xIhF2mbO2nf6cPKNOe7zNTTzz5t84d059tdP5xRbYuZZ5lXIyEEHz4%2Bnv9eLIwAW3OZmmLjP7c4sKx2bDl1kl2etO%2FxYXTAI%2BDUmWoY4bUf0etUpKQaCza4rrPRw4%2B0fXMgki09I4Zcwtmu9clfz6xJuq2LTGNAddi6I2xxRHa0bNcJRq1cHI0COl2keAzblCWYrk3nnLwkKZqt3LZ9Tb5LkyTmOdomPTV1aPZEULmCws55XLPzxQmpKNAbp%2BptMI%2BdGSHpfJE2Ica4x0ZyMy9cA9XQH9GlLJRL59kbgv7VC64o687xrvhns1yFsT%2F9BMTn6J166OKhudG%2FDCiyczgRbEqEJ6SQ%2FI5qtLRddhgBs27hRhpCsFXrK6u1CDMNbw%2BMAGOqUBGA%2FP%2B%2FHK3%2FJyU7%2Fw9WHpMnm86h8Y2FEYfLOBiJLkp%2F0HDPolTO8A7EfntBGbiJFg8SN28j%2FfGTQcwHpiuECUZQOOFjtQtIm6mBm67WAHIBagudkzGN%2BCv5OY%2Fn1C92IeZfjUHiu2cHD%2BRxrEzDZlBX1vSZbopWRfhgwZuDqwWjxWjWMNTXs3%2FWCf%2B7iEOZLLnKwI8TP9naBDe1H3UhL%2BOxx7MFdI&X-Amz-Signature=8519516bfdbe63cf43e3c6a56abc7d4942c7cac0268177e1102f042f3d8b37d4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
