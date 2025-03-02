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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBUHCVN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPwY4VKwrZLnVax0cQtFlzAbKQQHnrMDSYFBCUq7VYjAiEA0AeM0u%2BmvBcPemoctTXYABJUSO8qwyxBSNAUGkmIaF8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdEcEs4QM1uAeUOQCrcA8KAFiIyno2Y6n6U%2BWO9sMbqEq2Hc7Y11PJK%2BRLh4onbVa8%2BN5m2O9P82qw%2FYj2e5GzYP5SrcC7YScYEWzBIVQXS32LRdsG9BmvnJK86gvD9sJDXyTt7wcpCr%2FAlxQg2CLF59qyBUSYlyGxtA4NWNQOmz1lkO6ZaOLDD%2FVb%2Fd%2FBc82aN1XUOJiQfikXMqtsm5SFKYluTvrig2CVGsysAMLsjgDPkNvxgSe7vwlBr0wrdGjPdIGrfn1KPms8XJ3upYhxNVLh%2B31u3KLmhkW9lui3JazabnSjxDrc2hw%2B8aYWUucJn315%2Bxr%2BjYlwKq7Z2IFlpJitgeQfGopEy3wpq%2F66XSCYMmY2vCzD6pWl1X9zNch6x80KMSBCwvfu9jcQ%2FSlI9I%2FMlS9Pywv7u9eLC4FJjUObKdzxoOX2%2FXnQv5W0l3HWS1KRC1QcIvpn1SdvYe9Ehp%2BVog0FNgJQmyvbcwTx8Ja3uElQ3FaS6F1oNoVWFOcPdVRDvZaHeKE2Yqm3HToDpdweg1ZNLS82bAzXLMBOgf73L2AeiQ2DD3nD%2BJOgye0b8f43gEbTrkjaEnoXxssbn0NsVFKStNJHNKpFPPxuZ5ZKtWL1g5%2FyF5FDFDyOpcID7OA9Y5%2FGUShYrMMCVkr4GOqUBi26MGzuHree6dIdDtQUPWO9s63mAWuQZalBVL3oAcCA5QKeaIxIUX1Y0ubiBLVbfahbQg4YcoOCvTmOO3nbkaZRtxqMkcmNmb%2FPgpB3RYCk5G%2FC49ma%2BZdEVxWhpFe%2FqH2gr%2Bxhras1n9CDaRR8V2cnRzC3eYHKCF%2F%2FCo2Uk17V145WhEwnot%2BNfzbPo5jJjJ0rgobvAQHakh77STezPdqZ8JD2z&X-Amz-Signature=035496ba414169698e8cf0496e04208f50b3184a5d17f7ca3b52088434211c85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBUHCVN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPwY4VKwrZLnVax0cQtFlzAbKQQHnrMDSYFBCUq7VYjAiEA0AeM0u%2BmvBcPemoctTXYABJUSO8qwyxBSNAUGkmIaF8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdEcEs4QM1uAeUOQCrcA8KAFiIyno2Y6n6U%2BWO9sMbqEq2Hc7Y11PJK%2BRLh4onbVa8%2BN5m2O9P82qw%2FYj2e5GzYP5SrcC7YScYEWzBIVQXS32LRdsG9BmvnJK86gvD9sJDXyTt7wcpCr%2FAlxQg2CLF59qyBUSYlyGxtA4NWNQOmz1lkO6ZaOLDD%2FVb%2Fd%2FBc82aN1XUOJiQfikXMqtsm5SFKYluTvrig2CVGsysAMLsjgDPkNvxgSe7vwlBr0wrdGjPdIGrfn1KPms8XJ3upYhxNVLh%2B31u3KLmhkW9lui3JazabnSjxDrc2hw%2B8aYWUucJn315%2Bxr%2BjYlwKq7Z2IFlpJitgeQfGopEy3wpq%2F66XSCYMmY2vCzD6pWl1X9zNch6x80KMSBCwvfu9jcQ%2FSlI9I%2FMlS9Pywv7u9eLC4FJjUObKdzxoOX2%2FXnQv5W0l3HWS1KRC1QcIvpn1SdvYe9Ehp%2BVog0FNgJQmyvbcwTx8Ja3uElQ3FaS6F1oNoVWFOcPdVRDvZaHeKE2Yqm3HToDpdweg1ZNLS82bAzXLMBOgf73L2AeiQ2DD3nD%2BJOgye0b8f43gEbTrkjaEnoXxssbn0NsVFKStNJHNKpFPPxuZ5ZKtWL1g5%2FyF5FDFDyOpcID7OA9Y5%2FGUShYrMMCVkr4GOqUBi26MGzuHree6dIdDtQUPWO9s63mAWuQZalBVL3oAcCA5QKeaIxIUX1Y0ubiBLVbfahbQg4YcoOCvTmOO3nbkaZRtxqMkcmNmb%2FPgpB3RYCk5G%2FC49ma%2BZdEVxWhpFe%2FqH2gr%2Bxhras1n9CDaRR8V2cnRzC3eYHKCF%2F%2FCo2Uk17V145WhEwnot%2BNfzbPo5jJjJ0rgobvAQHakh77STezPdqZ8JD2z&X-Amz-Signature=84f56baaf5d474bfdf8f8f930d0735edb0b97fb6467591e495df426bd48146cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBUHCVN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPwY4VKwrZLnVax0cQtFlzAbKQQHnrMDSYFBCUq7VYjAiEA0AeM0u%2BmvBcPemoctTXYABJUSO8qwyxBSNAUGkmIaF8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdEcEs4QM1uAeUOQCrcA8KAFiIyno2Y6n6U%2BWO9sMbqEq2Hc7Y11PJK%2BRLh4onbVa8%2BN5m2O9P82qw%2FYj2e5GzYP5SrcC7YScYEWzBIVQXS32LRdsG9BmvnJK86gvD9sJDXyTt7wcpCr%2FAlxQg2CLF59qyBUSYlyGxtA4NWNQOmz1lkO6ZaOLDD%2FVb%2Fd%2FBc82aN1XUOJiQfikXMqtsm5SFKYluTvrig2CVGsysAMLsjgDPkNvxgSe7vwlBr0wrdGjPdIGrfn1KPms8XJ3upYhxNVLh%2B31u3KLmhkW9lui3JazabnSjxDrc2hw%2B8aYWUucJn315%2Bxr%2BjYlwKq7Z2IFlpJitgeQfGopEy3wpq%2F66XSCYMmY2vCzD6pWl1X9zNch6x80KMSBCwvfu9jcQ%2FSlI9I%2FMlS9Pywv7u9eLC4FJjUObKdzxoOX2%2FXnQv5W0l3HWS1KRC1QcIvpn1SdvYe9Ehp%2BVog0FNgJQmyvbcwTx8Ja3uElQ3FaS6F1oNoVWFOcPdVRDvZaHeKE2Yqm3HToDpdweg1ZNLS82bAzXLMBOgf73L2AeiQ2DD3nD%2BJOgye0b8f43gEbTrkjaEnoXxssbn0NsVFKStNJHNKpFPPxuZ5ZKtWL1g5%2FyF5FDFDyOpcID7OA9Y5%2FGUShYrMMCVkr4GOqUBi26MGzuHree6dIdDtQUPWO9s63mAWuQZalBVL3oAcCA5QKeaIxIUX1Y0ubiBLVbfahbQg4YcoOCvTmOO3nbkaZRtxqMkcmNmb%2FPgpB3RYCk5G%2FC49ma%2BZdEVxWhpFe%2FqH2gr%2Bxhras1n9CDaRR8V2cnRzC3eYHKCF%2F%2FCo2Uk17V145WhEwnot%2BNfzbPo5jJjJ0rgobvAQHakh77STezPdqZ8JD2z&X-Amz-Signature=6e44f3e7719548d8b32021bb56d4aa87c0dc35f999e2b825b6c17af244636cff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBUHCVN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPwY4VKwrZLnVax0cQtFlzAbKQQHnrMDSYFBCUq7VYjAiEA0AeM0u%2BmvBcPemoctTXYABJUSO8qwyxBSNAUGkmIaF8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdEcEs4QM1uAeUOQCrcA8KAFiIyno2Y6n6U%2BWO9sMbqEq2Hc7Y11PJK%2BRLh4onbVa8%2BN5m2O9P82qw%2FYj2e5GzYP5SrcC7YScYEWzBIVQXS32LRdsG9BmvnJK86gvD9sJDXyTt7wcpCr%2FAlxQg2CLF59qyBUSYlyGxtA4NWNQOmz1lkO6ZaOLDD%2FVb%2Fd%2FBc82aN1XUOJiQfikXMqtsm5SFKYluTvrig2CVGsysAMLsjgDPkNvxgSe7vwlBr0wrdGjPdIGrfn1KPms8XJ3upYhxNVLh%2B31u3KLmhkW9lui3JazabnSjxDrc2hw%2B8aYWUucJn315%2Bxr%2BjYlwKq7Z2IFlpJitgeQfGopEy3wpq%2F66XSCYMmY2vCzD6pWl1X9zNch6x80KMSBCwvfu9jcQ%2FSlI9I%2FMlS9Pywv7u9eLC4FJjUObKdzxoOX2%2FXnQv5W0l3HWS1KRC1QcIvpn1SdvYe9Ehp%2BVog0FNgJQmyvbcwTx8Ja3uElQ3FaS6F1oNoVWFOcPdVRDvZaHeKE2Yqm3HToDpdweg1ZNLS82bAzXLMBOgf73L2AeiQ2DD3nD%2BJOgye0b8f43gEbTrkjaEnoXxssbn0NsVFKStNJHNKpFPPxuZ5ZKtWL1g5%2FyF5FDFDyOpcID7OA9Y5%2FGUShYrMMCVkr4GOqUBi26MGzuHree6dIdDtQUPWO9s63mAWuQZalBVL3oAcCA5QKeaIxIUX1Y0ubiBLVbfahbQg4YcoOCvTmOO3nbkaZRtxqMkcmNmb%2FPgpB3RYCk5G%2FC49ma%2BZdEVxWhpFe%2FqH2gr%2Bxhras1n9CDaRR8V2cnRzC3eYHKCF%2F%2FCo2Uk17V145WhEwnot%2BNfzbPo5jJjJ0rgobvAQHakh77STezPdqZ8JD2z&X-Amz-Signature=b16f5fe06758567f583a2bd8eea025aa173dee0ba4482cfb737d1d9ccc9992fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBUHCVN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPwY4VKwrZLnVax0cQtFlzAbKQQHnrMDSYFBCUq7VYjAiEA0AeM0u%2BmvBcPemoctTXYABJUSO8qwyxBSNAUGkmIaF8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdEcEs4QM1uAeUOQCrcA8KAFiIyno2Y6n6U%2BWO9sMbqEq2Hc7Y11PJK%2BRLh4onbVa8%2BN5m2O9P82qw%2FYj2e5GzYP5SrcC7YScYEWzBIVQXS32LRdsG9BmvnJK86gvD9sJDXyTt7wcpCr%2FAlxQg2CLF59qyBUSYlyGxtA4NWNQOmz1lkO6ZaOLDD%2FVb%2Fd%2FBc82aN1XUOJiQfikXMqtsm5SFKYluTvrig2CVGsysAMLsjgDPkNvxgSe7vwlBr0wrdGjPdIGrfn1KPms8XJ3upYhxNVLh%2B31u3KLmhkW9lui3JazabnSjxDrc2hw%2B8aYWUucJn315%2Bxr%2BjYlwKq7Z2IFlpJitgeQfGopEy3wpq%2F66XSCYMmY2vCzD6pWl1X9zNch6x80KMSBCwvfu9jcQ%2FSlI9I%2FMlS9Pywv7u9eLC4FJjUObKdzxoOX2%2FXnQv5W0l3HWS1KRC1QcIvpn1SdvYe9Ehp%2BVog0FNgJQmyvbcwTx8Ja3uElQ3FaS6F1oNoVWFOcPdVRDvZaHeKE2Yqm3HToDpdweg1ZNLS82bAzXLMBOgf73L2AeiQ2DD3nD%2BJOgye0b8f43gEbTrkjaEnoXxssbn0NsVFKStNJHNKpFPPxuZ5ZKtWL1g5%2FyF5FDFDyOpcID7OA9Y5%2FGUShYrMMCVkr4GOqUBi26MGzuHree6dIdDtQUPWO9s63mAWuQZalBVL3oAcCA5QKeaIxIUX1Y0ubiBLVbfahbQg4YcoOCvTmOO3nbkaZRtxqMkcmNmb%2FPgpB3RYCk5G%2FC49ma%2BZdEVxWhpFe%2FqH2gr%2Bxhras1n9CDaRR8V2cnRzC3eYHKCF%2F%2FCo2Uk17V145WhEwnot%2BNfzbPo5jJjJ0rgobvAQHakh77STezPdqZ8JD2z&X-Amz-Signature=f70b8806971f86f37c08f8f5d1bd0bc07d7e3aa012e44df0aa9b107582eadd5a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBUHCVN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPwY4VKwrZLnVax0cQtFlzAbKQQHnrMDSYFBCUq7VYjAiEA0AeM0u%2BmvBcPemoctTXYABJUSO8qwyxBSNAUGkmIaF8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdEcEs4QM1uAeUOQCrcA8KAFiIyno2Y6n6U%2BWO9sMbqEq2Hc7Y11PJK%2BRLh4onbVa8%2BN5m2O9P82qw%2FYj2e5GzYP5SrcC7YScYEWzBIVQXS32LRdsG9BmvnJK86gvD9sJDXyTt7wcpCr%2FAlxQg2CLF59qyBUSYlyGxtA4NWNQOmz1lkO6ZaOLDD%2FVb%2Fd%2FBc82aN1XUOJiQfikXMqtsm5SFKYluTvrig2CVGsysAMLsjgDPkNvxgSe7vwlBr0wrdGjPdIGrfn1KPms8XJ3upYhxNVLh%2B31u3KLmhkW9lui3JazabnSjxDrc2hw%2B8aYWUucJn315%2Bxr%2BjYlwKq7Z2IFlpJitgeQfGopEy3wpq%2F66XSCYMmY2vCzD6pWl1X9zNch6x80KMSBCwvfu9jcQ%2FSlI9I%2FMlS9Pywv7u9eLC4FJjUObKdzxoOX2%2FXnQv5W0l3HWS1KRC1QcIvpn1SdvYe9Ehp%2BVog0FNgJQmyvbcwTx8Ja3uElQ3FaS6F1oNoVWFOcPdVRDvZaHeKE2Yqm3HToDpdweg1ZNLS82bAzXLMBOgf73L2AeiQ2DD3nD%2BJOgye0b8f43gEbTrkjaEnoXxssbn0NsVFKStNJHNKpFPPxuZ5ZKtWL1g5%2FyF5FDFDyOpcID7OA9Y5%2FGUShYrMMCVkr4GOqUBi26MGzuHree6dIdDtQUPWO9s63mAWuQZalBVL3oAcCA5QKeaIxIUX1Y0ubiBLVbfahbQg4YcoOCvTmOO3nbkaZRtxqMkcmNmb%2FPgpB3RYCk5G%2FC49ma%2BZdEVxWhpFe%2FqH2gr%2Bxhras1n9CDaRR8V2cnRzC3eYHKCF%2F%2FCo2Uk17V145WhEwnot%2BNfzbPo5jJjJ0rgobvAQHakh77STezPdqZ8JD2z&X-Amz-Signature=a21a7785d06ae89dcf738ea44f752da4c52129cbc1211fafbc7667895fa85f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBUHCVN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPwY4VKwrZLnVax0cQtFlzAbKQQHnrMDSYFBCUq7VYjAiEA0AeM0u%2BmvBcPemoctTXYABJUSO8qwyxBSNAUGkmIaF8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdEcEs4QM1uAeUOQCrcA8KAFiIyno2Y6n6U%2BWO9sMbqEq2Hc7Y11PJK%2BRLh4onbVa8%2BN5m2O9P82qw%2FYj2e5GzYP5SrcC7YScYEWzBIVQXS32LRdsG9BmvnJK86gvD9sJDXyTt7wcpCr%2FAlxQg2CLF59qyBUSYlyGxtA4NWNQOmz1lkO6ZaOLDD%2FVb%2Fd%2FBc82aN1XUOJiQfikXMqtsm5SFKYluTvrig2CVGsysAMLsjgDPkNvxgSe7vwlBr0wrdGjPdIGrfn1KPms8XJ3upYhxNVLh%2B31u3KLmhkW9lui3JazabnSjxDrc2hw%2B8aYWUucJn315%2Bxr%2BjYlwKq7Z2IFlpJitgeQfGopEy3wpq%2F66XSCYMmY2vCzD6pWl1X9zNch6x80KMSBCwvfu9jcQ%2FSlI9I%2FMlS9Pywv7u9eLC4FJjUObKdzxoOX2%2FXnQv5W0l3HWS1KRC1QcIvpn1SdvYe9Ehp%2BVog0FNgJQmyvbcwTx8Ja3uElQ3FaS6F1oNoVWFOcPdVRDvZaHeKE2Yqm3HToDpdweg1ZNLS82bAzXLMBOgf73L2AeiQ2DD3nD%2BJOgye0b8f43gEbTrkjaEnoXxssbn0NsVFKStNJHNKpFPPxuZ5ZKtWL1g5%2FyF5FDFDyOpcID7OA9Y5%2FGUShYrMMCVkr4GOqUBi26MGzuHree6dIdDtQUPWO9s63mAWuQZalBVL3oAcCA5QKeaIxIUX1Y0ubiBLVbfahbQg4YcoOCvTmOO3nbkaZRtxqMkcmNmb%2FPgpB3RYCk5G%2FC49ma%2BZdEVxWhpFe%2FqH2gr%2Bxhras1n9CDaRR8V2cnRzC3eYHKCF%2F%2FCo2Uk17V145WhEwnot%2BNfzbPo5jJjJ0rgobvAQHakh77STezPdqZ8JD2z&X-Amz-Signature=cf6081c088fa9ed6ed356b5cba91e82df03c5e31bde3ac9fbacd3800c4b6978b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
