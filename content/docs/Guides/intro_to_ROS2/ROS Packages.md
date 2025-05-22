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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFABOHI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDTDg%2FRnkOpbjBtp%2FyHda%2FCYnArRhMe%2BhqRMzc5fDRLpwIgMBpqo3foGr9QQjOHSSbccreagFFCK395P6wDG3pXQ5UqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1Kk5LA3KBNzQE44SrcA0dsOMm2AWuGkQnwA0twdwLhu4QCb5hNY9%2F%2B7vPdu04HwT8zK1S9YbqrgruRVGLEdL7WH74k5OuxUVdTVbo3dcIklC28BjdehDQoyOOCimQ4lzuDwMXd5kTCIax%2Be0ff%2FJHNsHphxAFSSDO9Za8J%2B3rTZxgnQ14fFQGVvWDmpbZT1hfXU8bXXDVOKTKkNDExKqSsv%2FZnlACtprZF91RXCS5b85npLp%2BbcTAbE85mjXQoTuyujL8CC9QpcRSUSXpvkGIv%2Fu6SLyuWG1Vvx5f3C4EiT%2F5M%2Bttg3lgbVCF42FS2FJNiwDHx7F7t9aju%2FwvE56R%2BdRiE3HL1MEv1KssOqSAf%2Fb5wzzoLswlc%2B2NmFdwPn%2FoSAz0Pmo8gElol%2B5I8UWQio9ZYnj3vYvJGExjaIda5sROB0wkIvgTjHoCMMzxemmHyWWZ31KC5PnWe%2FiO5EDuCLauO9RNewUDwq%2BEAwQ%2FoRiiQj4SEJDnMt%2BoswV7bPAk83OHdgruOqg%2B43EyS7mqan7equgIsWgtGWN98h8E10KxRduZZVdJVdhfUdqzwT9k1NJt0R3kftGXdX5qLhZZPqZqP%2BWDDLDSB0Vz1DEFhHDSqJ5RjTbhO0detJP8dQi3KlC%2BnZLu9%2Bkk5MN3EvMEGOqUBkUAxb1Lh9jZEZqKV83%2BqIYm8owEyao%2BGU46P76S5%2BMi9F0J7FvvMtyrk7oQLZTXF4OWnhkYC9n0NNkr6UkGmI0tsxChaxj%2FcaHpbZWIdIm%2FtsraQ3cIcDcyFWh9cZMIxPrvY6qjK%2BOUl0qC2rhVqL0%2FNsvuf4JvfQLbDTAbQLYgwXbpclvPliPjNWn3VUYWXpPzmjlumwsqCqAdGGDdPEl839RFV&X-Amz-Signature=6e004dd8dea61a8a9962e65ae6169371368cc038f7ba3e8cfe5471de05e91122&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFABOHI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDTDg%2FRnkOpbjBtp%2FyHda%2FCYnArRhMe%2BhqRMzc5fDRLpwIgMBpqo3foGr9QQjOHSSbccreagFFCK395P6wDG3pXQ5UqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1Kk5LA3KBNzQE44SrcA0dsOMm2AWuGkQnwA0twdwLhu4QCb5hNY9%2F%2B7vPdu04HwT8zK1S9YbqrgruRVGLEdL7WH74k5OuxUVdTVbo3dcIklC28BjdehDQoyOOCimQ4lzuDwMXd5kTCIax%2Be0ff%2FJHNsHphxAFSSDO9Za8J%2B3rTZxgnQ14fFQGVvWDmpbZT1hfXU8bXXDVOKTKkNDExKqSsv%2FZnlACtprZF91RXCS5b85npLp%2BbcTAbE85mjXQoTuyujL8CC9QpcRSUSXpvkGIv%2Fu6SLyuWG1Vvx5f3C4EiT%2F5M%2Bttg3lgbVCF42FS2FJNiwDHx7F7t9aju%2FwvE56R%2BdRiE3HL1MEv1KssOqSAf%2Fb5wzzoLswlc%2B2NmFdwPn%2FoSAz0Pmo8gElol%2B5I8UWQio9ZYnj3vYvJGExjaIda5sROB0wkIvgTjHoCMMzxemmHyWWZ31KC5PnWe%2FiO5EDuCLauO9RNewUDwq%2BEAwQ%2FoRiiQj4SEJDnMt%2BoswV7bPAk83OHdgruOqg%2B43EyS7mqan7equgIsWgtGWN98h8E10KxRduZZVdJVdhfUdqzwT9k1NJt0R3kftGXdX5qLhZZPqZqP%2BWDDLDSB0Vz1DEFhHDSqJ5RjTbhO0detJP8dQi3KlC%2BnZLu9%2Bkk5MN3EvMEGOqUBkUAxb1Lh9jZEZqKV83%2BqIYm8owEyao%2BGU46P76S5%2BMi9F0J7FvvMtyrk7oQLZTXF4OWnhkYC9n0NNkr6UkGmI0tsxChaxj%2FcaHpbZWIdIm%2FtsraQ3cIcDcyFWh9cZMIxPrvY6qjK%2BOUl0qC2rhVqL0%2FNsvuf4JvfQLbDTAbQLYgwXbpclvPliPjNWn3VUYWXpPzmjlumwsqCqAdGGDdPEl839RFV&X-Amz-Signature=1185faf6be4cda3f753ce47afa57bc7fe845f25f5880a9cc15ff541f969e58d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFABOHI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDTDg%2FRnkOpbjBtp%2FyHda%2FCYnArRhMe%2BhqRMzc5fDRLpwIgMBpqo3foGr9QQjOHSSbccreagFFCK395P6wDG3pXQ5UqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1Kk5LA3KBNzQE44SrcA0dsOMm2AWuGkQnwA0twdwLhu4QCb5hNY9%2F%2B7vPdu04HwT8zK1S9YbqrgruRVGLEdL7WH74k5OuxUVdTVbo3dcIklC28BjdehDQoyOOCimQ4lzuDwMXd5kTCIax%2Be0ff%2FJHNsHphxAFSSDO9Za8J%2B3rTZxgnQ14fFQGVvWDmpbZT1hfXU8bXXDVOKTKkNDExKqSsv%2FZnlACtprZF91RXCS5b85npLp%2BbcTAbE85mjXQoTuyujL8CC9QpcRSUSXpvkGIv%2Fu6SLyuWG1Vvx5f3C4EiT%2F5M%2Bttg3lgbVCF42FS2FJNiwDHx7F7t9aju%2FwvE56R%2BdRiE3HL1MEv1KssOqSAf%2Fb5wzzoLswlc%2B2NmFdwPn%2FoSAz0Pmo8gElol%2B5I8UWQio9ZYnj3vYvJGExjaIda5sROB0wkIvgTjHoCMMzxemmHyWWZ31KC5PnWe%2FiO5EDuCLauO9RNewUDwq%2BEAwQ%2FoRiiQj4SEJDnMt%2BoswV7bPAk83OHdgruOqg%2B43EyS7mqan7equgIsWgtGWN98h8E10KxRduZZVdJVdhfUdqzwT9k1NJt0R3kftGXdX5qLhZZPqZqP%2BWDDLDSB0Vz1DEFhHDSqJ5RjTbhO0detJP8dQi3KlC%2BnZLu9%2Bkk5MN3EvMEGOqUBkUAxb1Lh9jZEZqKV83%2BqIYm8owEyao%2BGU46P76S5%2BMi9F0J7FvvMtyrk7oQLZTXF4OWnhkYC9n0NNkr6UkGmI0tsxChaxj%2FcaHpbZWIdIm%2FtsraQ3cIcDcyFWh9cZMIxPrvY6qjK%2BOUl0qC2rhVqL0%2FNsvuf4JvfQLbDTAbQLYgwXbpclvPliPjNWn3VUYWXpPzmjlumwsqCqAdGGDdPEl839RFV&X-Amz-Signature=c7d428b77eaa6c4b2280bcf6dc17fdcf8084cced94d6feccfc6b7d1c80e2f44c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFABOHI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDTDg%2FRnkOpbjBtp%2FyHda%2FCYnArRhMe%2BhqRMzc5fDRLpwIgMBpqo3foGr9QQjOHSSbccreagFFCK395P6wDG3pXQ5UqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1Kk5LA3KBNzQE44SrcA0dsOMm2AWuGkQnwA0twdwLhu4QCb5hNY9%2F%2B7vPdu04HwT8zK1S9YbqrgruRVGLEdL7WH74k5OuxUVdTVbo3dcIklC28BjdehDQoyOOCimQ4lzuDwMXd5kTCIax%2Be0ff%2FJHNsHphxAFSSDO9Za8J%2B3rTZxgnQ14fFQGVvWDmpbZT1hfXU8bXXDVOKTKkNDExKqSsv%2FZnlACtprZF91RXCS5b85npLp%2BbcTAbE85mjXQoTuyujL8CC9QpcRSUSXpvkGIv%2Fu6SLyuWG1Vvx5f3C4EiT%2F5M%2Bttg3lgbVCF42FS2FJNiwDHx7F7t9aju%2FwvE56R%2BdRiE3HL1MEv1KssOqSAf%2Fb5wzzoLswlc%2B2NmFdwPn%2FoSAz0Pmo8gElol%2B5I8UWQio9ZYnj3vYvJGExjaIda5sROB0wkIvgTjHoCMMzxemmHyWWZ31KC5PnWe%2FiO5EDuCLauO9RNewUDwq%2BEAwQ%2FoRiiQj4SEJDnMt%2BoswV7bPAk83OHdgruOqg%2B43EyS7mqan7equgIsWgtGWN98h8E10KxRduZZVdJVdhfUdqzwT9k1NJt0R3kftGXdX5qLhZZPqZqP%2BWDDLDSB0Vz1DEFhHDSqJ5RjTbhO0detJP8dQi3KlC%2BnZLu9%2Bkk5MN3EvMEGOqUBkUAxb1Lh9jZEZqKV83%2BqIYm8owEyao%2BGU46P76S5%2BMi9F0J7FvvMtyrk7oQLZTXF4OWnhkYC9n0NNkr6UkGmI0tsxChaxj%2FcaHpbZWIdIm%2FtsraQ3cIcDcyFWh9cZMIxPrvY6qjK%2BOUl0qC2rhVqL0%2FNsvuf4JvfQLbDTAbQLYgwXbpclvPliPjNWn3VUYWXpPzmjlumwsqCqAdGGDdPEl839RFV&X-Amz-Signature=e537e7294187f373b54bdb60decb73ed9c0cf0cdf95e325c65379c9e2898fd7f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFABOHI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDTDg%2FRnkOpbjBtp%2FyHda%2FCYnArRhMe%2BhqRMzc5fDRLpwIgMBpqo3foGr9QQjOHSSbccreagFFCK395P6wDG3pXQ5UqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1Kk5LA3KBNzQE44SrcA0dsOMm2AWuGkQnwA0twdwLhu4QCb5hNY9%2F%2B7vPdu04HwT8zK1S9YbqrgruRVGLEdL7WH74k5OuxUVdTVbo3dcIklC28BjdehDQoyOOCimQ4lzuDwMXd5kTCIax%2Be0ff%2FJHNsHphxAFSSDO9Za8J%2B3rTZxgnQ14fFQGVvWDmpbZT1hfXU8bXXDVOKTKkNDExKqSsv%2FZnlACtprZF91RXCS5b85npLp%2BbcTAbE85mjXQoTuyujL8CC9QpcRSUSXpvkGIv%2Fu6SLyuWG1Vvx5f3C4EiT%2F5M%2Bttg3lgbVCF42FS2FJNiwDHx7F7t9aju%2FwvE56R%2BdRiE3HL1MEv1KssOqSAf%2Fb5wzzoLswlc%2B2NmFdwPn%2FoSAz0Pmo8gElol%2B5I8UWQio9ZYnj3vYvJGExjaIda5sROB0wkIvgTjHoCMMzxemmHyWWZ31KC5PnWe%2FiO5EDuCLauO9RNewUDwq%2BEAwQ%2FoRiiQj4SEJDnMt%2BoswV7bPAk83OHdgruOqg%2B43EyS7mqan7equgIsWgtGWN98h8E10KxRduZZVdJVdhfUdqzwT9k1NJt0R3kftGXdX5qLhZZPqZqP%2BWDDLDSB0Vz1DEFhHDSqJ5RjTbhO0detJP8dQi3KlC%2BnZLu9%2Bkk5MN3EvMEGOqUBkUAxb1Lh9jZEZqKV83%2BqIYm8owEyao%2BGU46P76S5%2BMi9F0J7FvvMtyrk7oQLZTXF4OWnhkYC9n0NNkr6UkGmI0tsxChaxj%2FcaHpbZWIdIm%2FtsraQ3cIcDcyFWh9cZMIxPrvY6qjK%2BOUl0qC2rhVqL0%2FNsvuf4JvfQLbDTAbQLYgwXbpclvPliPjNWn3VUYWXpPzmjlumwsqCqAdGGDdPEl839RFV&X-Amz-Signature=8a6d8be5901a9b2a91c4d8b14e44e8a7d7635493d80f5721bb08a8e8c46bf815&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFABOHI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDTDg%2FRnkOpbjBtp%2FyHda%2FCYnArRhMe%2BhqRMzc5fDRLpwIgMBpqo3foGr9QQjOHSSbccreagFFCK395P6wDG3pXQ5UqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1Kk5LA3KBNzQE44SrcA0dsOMm2AWuGkQnwA0twdwLhu4QCb5hNY9%2F%2B7vPdu04HwT8zK1S9YbqrgruRVGLEdL7WH74k5OuxUVdTVbo3dcIklC28BjdehDQoyOOCimQ4lzuDwMXd5kTCIax%2Be0ff%2FJHNsHphxAFSSDO9Za8J%2B3rTZxgnQ14fFQGVvWDmpbZT1hfXU8bXXDVOKTKkNDExKqSsv%2FZnlACtprZF91RXCS5b85npLp%2BbcTAbE85mjXQoTuyujL8CC9QpcRSUSXpvkGIv%2Fu6SLyuWG1Vvx5f3C4EiT%2F5M%2Bttg3lgbVCF42FS2FJNiwDHx7F7t9aju%2FwvE56R%2BdRiE3HL1MEv1KssOqSAf%2Fb5wzzoLswlc%2B2NmFdwPn%2FoSAz0Pmo8gElol%2B5I8UWQio9ZYnj3vYvJGExjaIda5sROB0wkIvgTjHoCMMzxemmHyWWZ31KC5PnWe%2FiO5EDuCLauO9RNewUDwq%2BEAwQ%2FoRiiQj4SEJDnMt%2BoswV7bPAk83OHdgruOqg%2B43EyS7mqan7equgIsWgtGWN98h8E10KxRduZZVdJVdhfUdqzwT9k1NJt0R3kftGXdX5qLhZZPqZqP%2BWDDLDSB0Vz1DEFhHDSqJ5RjTbhO0detJP8dQi3KlC%2BnZLu9%2Bkk5MN3EvMEGOqUBkUAxb1Lh9jZEZqKV83%2BqIYm8owEyao%2BGU46P76S5%2BMi9F0J7FvvMtyrk7oQLZTXF4OWnhkYC9n0NNkr6UkGmI0tsxChaxj%2FcaHpbZWIdIm%2FtsraQ3cIcDcyFWh9cZMIxPrvY6qjK%2BOUl0qC2rhVqL0%2FNsvuf4JvfQLbDTAbQLYgwXbpclvPliPjNWn3VUYWXpPzmjlumwsqCqAdGGDdPEl839RFV&X-Amz-Signature=5d723e5643a9453d43873ca986fbf7b9927104f5886d54adbf713a6b5f3a7b96&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFABOHI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDTDg%2FRnkOpbjBtp%2FyHda%2FCYnArRhMe%2BhqRMzc5fDRLpwIgMBpqo3foGr9QQjOHSSbccreagFFCK395P6wDG3pXQ5UqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1Kk5LA3KBNzQE44SrcA0dsOMm2AWuGkQnwA0twdwLhu4QCb5hNY9%2F%2B7vPdu04HwT8zK1S9YbqrgruRVGLEdL7WH74k5OuxUVdTVbo3dcIklC28BjdehDQoyOOCimQ4lzuDwMXd5kTCIax%2Be0ff%2FJHNsHphxAFSSDO9Za8J%2B3rTZxgnQ14fFQGVvWDmpbZT1hfXU8bXXDVOKTKkNDExKqSsv%2FZnlACtprZF91RXCS5b85npLp%2BbcTAbE85mjXQoTuyujL8CC9QpcRSUSXpvkGIv%2Fu6SLyuWG1Vvx5f3C4EiT%2F5M%2Bttg3lgbVCF42FS2FJNiwDHx7F7t9aju%2FwvE56R%2BdRiE3HL1MEv1KssOqSAf%2Fb5wzzoLswlc%2B2NmFdwPn%2FoSAz0Pmo8gElol%2B5I8UWQio9ZYnj3vYvJGExjaIda5sROB0wkIvgTjHoCMMzxemmHyWWZ31KC5PnWe%2FiO5EDuCLauO9RNewUDwq%2BEAwQ%2FoRiiQj4SEJDnMt%2BoswV7bPAk83OHdgruOqg%2B43EyS7mqan7equgIsWgtGWN98h8E10KxRduZZVdJVdhfUdqzwT9k1NJt0R3kftGXdX5qLhZZPqZqP%2BWDDLDSB0Vz1DEFhHDSqJ5RjTbhO0detJP8dQi3KlC%2BnZLu9%2Bkk5MN3EvMEGOqUBkUAxb1Lh9jZEZqKV83%2BqIYm8owEyao%2BGU46P76S5%2BMi9F0J7FvvMtyrk7oQLZTXF4OWnhkYC9n0NNkr6UkGmI0tsxChaxj%2FcaHpbZWIdIm%2FtsraQ3cIcDcyFWh9cZMIxPrvY6qjK%2BOUl0qC2rhVqL0%2FNsvuf4JvfQLbDTAbQLYgwXbpclvPliPjNWn3VUYWXpPzmjlumwsqCqAdGGDdPEl839RFV&X-Amz-Signature=a3b391ab2cf7a3ed28582a4f702ec9f5d0cc4b0721850785e2c04f45524e9e22&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
