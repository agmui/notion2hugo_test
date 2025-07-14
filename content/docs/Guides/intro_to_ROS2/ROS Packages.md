---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3RCA5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFaYe%2BnQAX0TNKTV4a0yyE0sTZ%2FU1nm2vhdXPzWVs0cxAiADCJjy1prlgUgISbBtkMgPOvEo%2F35CrBhdBu3F1ZuY5Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMOf5PBc%2BIDx6%2BpzG6KtwD2G0owKngLvBa1PNnfP%2FlY%2FDeMbLp%2FYSM8qklbVM2LPyNJtOh2fV%2F91lvCtfjS6FUViNe%2FIxf9Y2xW%2BIPxo7cxdOoIfwPCmHbzj0JH4ZqfBwc1VDgEC7SLhhs89FFANEtC0Xqaszfbylh4YIJP7Q21MdjbVSEnzg9aYQn9DNd9L7q9MnvwzmPEv%2BRxVKWc7mrPr1eEg%2FBFQUG9Qd6nIJtxS7aaKTmmG8LDEL%2FkXpw%2Fszf%2BwXfT9rbnhCrxynNdkn4nMh8Zq7bdWb3RqN5Yu%2FsV5lDYF4ogmd71ui3YH3vrF10Ir1nfBLlV8RTh%2FUGyg%2FOqQpThvDE1WzrhZO3MnBvnNBxoUUGVrs4kFZSAdEfIIELHZdRHACRaBsASumnXGHlPciYZLC8YGfwZ6ryrOp%2Be7E07JkUU%2BgqsOWCbqlxAjJDMbZvxxDivxk00dqSbvx6t9QZWdzvsAwEH%2Fn6mGPSrTXPH0V5OleuLA6zY%2BKlRLUrj0SWhMwWP%2Fv5uCNzNGJNx8JZo6rD88cA95hjJ4CDTulRMSDuwrKmjAS2%2Bpmxpl%2F385QyZ93D%2BZfYMonqHP%2FeHc3rfLTp8Tqox0MUHuPkFyw%2BnjVqBUE2R69wm%2FXDGLIbO1O7dRKZXgbFSZswiqTVwwY6pgEbOInN37OeZSJYxRZdkmYLpz%2B9pzQb8CRm14eFKEpxyqMkx%2Fq0FBW8m3hh2NdQf%2FbjdiAJP1RwTP5UMQQUq%2FrgldodPV31hl8tn3l3nb6cLLG1xYYJAPU%2FOL3MVVbCvJNEhI2xgesMJNcbc7Bfcx2j3AY1g9U3lKLxC2Vlo7tkZ%2BZs8Yu8YFRom%2FDLml3nE8rvYalrYWiKzP7%2FLRqLlDSLOEEGgWPG&X-Amz-Signature=d2e2d5319efbe51bb22c5282d5fbaf6af40c2eee304fa9ff41ed572f7fd6d4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3RCA5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFaYe%2BnQAX0TNKTV4a0yyE0sTZ%2FU1nm2vhdXPzWVs0cxAiADCJjy1prlgUgISbBtkMgPOvEo%2F35CrBhdBu3F1ZuY5Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMOf5PBc%2BIDx6%2BpzG6KtwD2G0owKngLvBa1PNnfP%2FlY%2FDeMbLp%2FYSM8qklbVM2LPyNJtOh2fV%2F91lvCtfjS6FUViNe%2FIxf9Y2xW%2BIPxo7cxdOoIfwPCmHbzj0JH4ZqfBwc1VDgEC7SLhhs89FFANEtC0Xqaszfbylh4YIJP7Q21MdjbVSEnzg9aYQn9DNd9L7q9MnvwzmPEv%2BRxVKWc7mrPr1eEg%2FBFQUG9Qd6nIJtxS7aaKTmmG8LDEL%2FkXpw%2Fszf%2BwXfT9rbnhCrxynNdkn4nMh8Zq7bdWb3RqN5Yu%2FsV5lDYF4ogmd71ui3YH3vrF10Ir1nfBLlV8RTh%2FUGyg%2FOqQpThvDE1WzrhZO3MnBvnNBxoUUGVrs4kFZSAdEfIIELHZdRHACRaBsASumnXGHlPciYZLC8YGfwZ6ryrOp%2Be7E07JkUU%2BgqsOWCbqlxAjJDMbZvxxDivxk00dqSbvx6t9QZWdzvsAwEH%2Fn6mGPSrTXPH0V5OleuLA6zY%2BKlRLUrj0SWhMwWP%2Fv5uCNzNGJNx8JZo6rD88cA95hjJ4CDTulRMSDuwrKmjAS2%2Bpmxpl%2F385QyZ93D%2BZfYMonqHP%2FeHc3rfLTp8Tqox0MUHuPkFyw%2BnjVqBUE2R69wm%2FXDGLIbO1O7dRKZXgbFSZswiqTVwwY6pgEbOInN37OeZSJYxRZdkmYLpz%2B9pzQb8CRm14eFKEpxyqMkx%2Fq0FBW8m3hh2NdQf%2FbjdiAJP1RwTP5UMQQUq%2FrgldodPV31hl8tn3l3nb6cLLG1xYYJAPU%2FOL3MVVbCvJNEhI2xgesMJNcbc7Bfcx2j3AY1g9U3lKLxC2Vlo7tkZ%2BZs8Yu8YFRom%2FDLml3nE8rvYalrYWiKzP7%2FLRqLlDSLOEEGgWPG&X-Amz-Signature=04f1de7bc42993bb357afc1c43d421281785a0fdb9389e2c5d8416d40a63eede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3RCA5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFaYe%2BnQAX0TNKTV4a0yyE0sTZ%2FU1nm2vhdXPzWVs0cxAiADCJjy1prlgUgISbBtkMgPOvEo%2F35CrBhdBu3F1ZuY5Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMOf5PBc%2BIDx6%2BpzG6KtwD2G0owKngLvBa1PNnfP%2FlY%2FDeMbLp%2FYSM8qklbVM2LPyNJtOh2fV%2F91lvCtfjS6FUViNe%2FIxf9Y2xW%2BIPxo7cxdOoIfwPCmHbzj0JH4ZqfBwc1VDgEC7SLhhs89FFANEtC0Xqaszfbylh4YIJP7Q21MdjbVSEnzg9aYQn9DNd9L7q9MnvwzmPEv%2BRxVKWc7mrPr1eEg%2FBFQUG9Qd6nIJtxS7aaKTmmG8LDEL%2FkXpw%2Fszf%2BwXfT9rbnhCrxynNdkn4nMh8Zq7bdWb3RqN5Yu%2FsV5lDYF4ogmd71ui3YH3vrF10Ir1nfBLlV8RTh%2FUGyg%2FOqQpThvDE1WzrhZO3MnBvnNBxoUUGVrs4kFZSAdEfIIELHZdRHACRaBsASumnXGHlPciYZLC8YGfwZ6ryrOp%2Be7E07JkUU%2BgqsOWCbqlxAjJDMbZvxxDivxk00dqSbvx6t9QZWdzvsAwEH%2Fn6mGPSrTXPH0V5OleuLA6zY%2BKlRLUrj0SWhMwWP%2Fv5uCNzNGJNx8JZo6rD88cA95hjJ4CDTulRMSDuwrKmjAS2%2Bpmxpl%2F385QyZ93D%2BZfYMonqHP%2FeHc3rfLTp8Tqox0MUHuPkFyw%2BnjVqBUE2R69wm%2FXDGLIbO1O7dRKZXgbFSZswiqTVwwY6pgEbOInN37OeZSJYxRZdkmYLpz%2B9pzQb8CRm14eFKEpxyqMkx%2Fq0FBW8m3hh2NdQf%2FbjdiAJP1RwTP5UMQQUq%2FrgldodPV31hl8tn3l3nb6cLLG1xYYJAPU%2FOL3MVVbCvJNEhI2xgesMJNcbc7Bfcx2j3AY1g9U3lKLxC2Vlo7tkZ%2BZs8Yu8YFRom%2FDLml3nE8rvYalrYWiKzP7%2FLRqLlDSLOEEGgWPG&X-Amz-Signature=ff08069af27895d18386afa4fd4a5d6cb3f5bf76d000bad8f5d500fad413cc7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3RCA5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFaYe%2BnQAX0TNKTV4a0yyE0sTZ%2FU1nm2vhdXPzWVs0cxAiADCJjy1prlgUgISbBtkMgPOvEo%2F35CrBhdBu3F1ZuY5Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMOf5PBc%2BIDx6%2BpzG6KtwD2G0owKngLvBa1PNnfP%2FlY%2FDeMbLp%2FYSM8qklbVM2LPyNJtOh2fV%2F91lvCtfjS6FUViNe%2FIxf9Y2xW%2BIPxo7cxdOoIfwPCmHbzj0JH4ZqfBwc1VDgEC7SLhhs89FFANEtC0Xqaszfbylh4YIJP7Q21MdjbVSEnzg9aYQn9DNd9L7q9MnvwzmPEv%2BRxVKWc7mrPr1eEg%2FBFQUG9Qd6nIJtxS7aaKTmmG8LDEL%2FkXpw%2Fszf%2BwXfT9rbnhCrxynNdkn4nMh8Zq7bdWb3RqN5Yu%2FsV5lDYF4ogmd71ui3YH3vrF10Ir1nfBLlV8RTh%2FUGyg%2FOqQpThvDE1WzrhZO3MnBvnNBxoUUGVrs4kFZSAdEfIIELHZdRHACRaBsASumnXGHlPciYZLC8YGfwZ6ryrOp%2Be7E07JkUU%2BgqsOWCbqlxAjJDMbZvxxDivxk00dqSbvx6t9QZWdzvsAwEH%2Fn6mGPSrTXPH0V5OleuLA6zY%2BKlRLUrj0SWhMwWP%2Fv5uCNzNGJNx8JZo6rD88cA95hjJ4CDTulRMSDuwrKmjAS2%2Bpmxpl%2F385QyZ93D%2BZfYMonqHP%2FeHc3rfLTp8Tqox0MUHuPkFyw%2BnjVqBUE2R69wm%2FXDGLIbO1O7dRKZXgbFSZswiqTVwwY6pgEbOInN37OeZSJYxRZdkmYLpz%2B9pzQb8CRm14eFKEpxyqMkx%2Fq0FBW8m3hh2NdQf%2FbjdiAJP1RwTP5UMQQUq%2FrgldodPV31hl8tn3l3nb6cLLG1xYYJAPU%2FOL3MVVbCvJNEhI2xgesMJNcbc7Bfcx2j3AY1g9U3lKLxC2Vlo7tkZ%2BZs8Yu8YFRom%2FDLml3nE8rvYalrYWiKzP7%2FLRqLlDSLOEEGgWPG&X-Amz-Signature=0fe771a3ba83eb6ef8da646a389bbb39ed01fa6ef8a78e709160bc7dc95e3571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3RCA5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFaYe%2BnQAX0TNKTV4a0yyE0sTZ%2FU1nm2vhdXPzWVs0cxAiADCJjy1prlgUgISbBtkMgPOvEo%2F35CrBhdBu3F1ZuY5Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMOf5PBc%2BIDx6%2BpzG6KtwD2G0owKngLvBa1PNnfP%2FlY%2FDeMbLp%2FYSM8qklbVM2LPyNJtOh2fV%2F91lvCtfjS6FUViNe%2FIxf9Y2xW%2BIPxo7cxdOoIfwPCmHbzj0JH4ZqfBwc1VDgEC7SLhhs89FFANEtC0Xqaszfbylh4YIJP7Q21MdjbVSEnzg9aYQn9DNd9L7q9MnvwzmPEv%2BRxVKWc7mrPr1eEg%2FBFQUG9Qd6nIJtxS7aaKTmmG8LDEL%2FkXpw%2Fszf%2BwXfT9rbnhCrxynNdkn4nMh8Zq7bdWb3RqN5Yu%2FsV5lDYF4ogmd71ui3YH3vrF10Ir1nfBLlV8RTh%2FUGyg%2FOqQpThvDE1WzrhZO3MnBvnNBxoUUGVrs4kFZSAdEfIIELHZdRHACRaBsASumnXGHlPciYZLC8YGfwZ6ryrOp%2Be7E07JkUU%2BgqsOWCbqlxAjJDMbZvxxDivxk00dqSbvx6t9QZWdzvsAwEH%2Fn6mGPSrTXPH0V5OleuLA6zY%2BKlRLUrj0SWhMwWP%2Fv5uCNzNGJNx8JZo6rD88cA95hjJ4CDTulRMSDuwrKmjAS2%2Bpmxpl%2F385QyZ93D%2BZfYMonqHP%2FeHc3rfLTp8Tqox0MUHuPkFyw%2BnjVqBUE2R69wm%2FXDGLIbO1O7dRKZXgbFSZswiqTVwwY6pgEbOInN37OeZSJYxRZdkmYLpz%2B9pzQb8CRm14eFKEpxyqMkx%2Fq0FBW8m3hh2NdQf%2FbjdiAJP1RwTP5UMQQUq%2FrgldodPV31hl8tn3l3nb6cLLG1xYYJAPU%2FOL3MVVbCvJNEhI2xgesMJNcbc7Bfcx2j3AY1g9U3lKLxC2Vlo7tkZ%2BZs8Yu8YFRom%2FDLml3nE8rvYalrYWiKzP7%2FLRqLlDSLOEEGgWPG&X-Amz-Signature=af3a6dc5360f19d399ef2741160b38e38541340c5643dc4af64d9177501a3720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3RCA5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFaYe%2BnQAX0TNKTV4a0yyE0sTZ%2FU1nm2vhdXPzWVs0cxAiADCJjy1prlgUgISbBtkMgPOvEo%2F35CrBhdBu3F1ZuY5Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMOf5PBc%2BIDx6%2BpzG6KtwD2G0owKngLvBa1PNnfP%2FlY%2FDeMbLp%2FYSM8qklbVM2LPyNJtOh2fV%2F91lvCtfjS6FUViNe%2FIxf9Y2xW%2BIPxo7cxdOoIfwPCmHbzj0JH4ZqfBwc1VDgEC7SLhhs89FFANEtC0Xqaszfbylh4YIJP7Q21MdjbVSEnzg9aYQn9DNd9L7q9MnvwzmPEv%2BRxVKWc7mrPr1eEg%2FBFQUG9Qd6nIJtxS7aaKTmmG8LDEL%2FkXpw%2Fszf%2BwXfT9rbnhCrxynNdkn4nMh8Zq7bdWb3RqN5Yu%2FsV5lDYF4ogmd71ui3YH3vrF10Ir1nfBLlV8RTh%2FUGyg%2FOqQpThvDE1WzrhZO3MnBvnNBxoUUGVrs4kFZSAdEfIIELHZdRHACRaBsASumnXGHlPciYZLC8YGfwZ6ryrOp%2Be7E07JkUU%2BgqsOWCbqlxAjJDMbZvxxDivxk00dqSbvx6t9QZWdzvsAwEH%2Fn6mGPSrTXPH0V5OleuLA6zY%2BKlRLUrj0SWhMwWP%2Fv5uCNzNGJNx8JZo6rD88cA95hjJ4CDTulRMSDuwrKmjAS2%2Bpmxpl%2F385QyZ93D%2BZfYMonqHP%2FeHc3rfLTp8Tqox0MUHuPkFyw%2BnjVqBUE2R69wm%2FXDGLIbO1O7dRKZXgbFSZswiqTVwwY6pgEbOInN37OeZSJYxRZdkmYLpz%2B9pzQb8CRm14eFKEpxyqMkx%2Fq0FBW8m3hh2NdQf%2FbjdiAJP1RwTP5UMQQUq%2FrgldodPV31hl8tn3l3nb6cLLG1xYYJAPU%2FOL3MVVbCvJNEhI2xgesMJNcbc7Bfcx2j3AY1g9U3lKLxC2Vlo7tkZ%2BZs8Yu8YFRom%2FDLml3nE8rvYalrYWiKzP7%2FLRqLlDSLOEEGgWPG&X-Amz-Signature=3cf03a1a925b39cd4dcc6c0af186a0920ef1ce5a390f5c4c74daeb938b77ad02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3RCA5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFaYe%2BnQAX0TNKTV4a0yyE0sTZ%2FU1nm2vhdXPzWVs0cxAiADCJjy1prlgUgISbBtkMgPOvEo%2F35CrBhdBu3F1ZuY5Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMOf5PBc%2BIDx6%2BpzG6KtwD2G0owKngLvBa1PNnfP%2FlY%2FDeMbLp%2FYSM8qklbVM2LPyNJtOh2fV%2F91lvCtfjS6FUViNe%2FIxf9Y2xW%2BIPxo7cxdOoIfwPCmHbzj0JH4ZqfBwc1VDgEC7SLhhs89FFANEtC0Xqaszfbylh4YIJP7Q21MdjbVSEnzg9aYQn9DNd9L7q9MnvwzmPEv%2BRxVKWc7mrPr1eEg%2FBFQUG9Qd6nIJtxS7aaKTmmG8LDEL%2FkXpw%2Fszf%2BwXfT9rbnhCrxynNdkn4nMh8Zq7bdWb3RqN5Yu%2FsV5lDYF4ogmd71ui3YH3vrF10Ir1nfBLlV8RTh%2FUGyg%2FOqQpThvDE1WzrhZO3MnBvnNBxoUUGVrs4kFZSAdEfIIELHZdRHACRaBsASumnXGHlPciYZLC8YGfwZ6ryrOp%2Be7E07JkUU%2BgqsOWCbqlxAjJDMbZvxxDivxk00dqSbvx6t9QZWdzvsAwEH%2Fn6mGPSrTXPH0V5OleuLA6zY%2BKlRLUrj0SWhMwWP%2Fv5uCNzNGJNx8JZo6rD88cA95hjJ4CDTulRMSDuwrKmjAS2%2Bpmxpl%2F385QyZ93D%2BZfYMonqHP%2FeHc3rfLTp8Tqox0MUHuPkFyw%2BnjVqBUE2R69wm%2FXDGLIbO1O7dRKZXgbFSZswiqTVwwY6pgEbOInN37OeZSJYxRZdkmYLpz%2B9pzQb8CRm14eFKEpxyqMkx%2Fq0FBW8m3hh2NdQf%2FbjdiAJP1RwTP5UMQQUq%2FrgldodPV31hl8tn3l3nb6cLLG1xYYJAPU%2FOL3MVVbCvJNEhI2xgesMJNcbc7Bfcx2j3AY1g9U3lKLxC2Vlo7tkZ%2BZs8Yu8YFRom%2FDLml3nE8rvYalrYWiKzP7%2FLRqLlDSLOEEGgWPG&X-Amz-Signature=bb6532b1e60b658b10151402b34e1fc81274faf9506ed5c926425c79b2ec22ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
