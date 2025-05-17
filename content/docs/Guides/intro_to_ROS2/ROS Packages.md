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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64IAY4E%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvPoBMqKnFQ7pw9GszkXOhk8hNfZbvFDpsnSXj4saD7AiEAh2BJCeMuIcXShPDb58WFzE0R6eQQ0ktnmxBJqcf47Ewq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL7C6zEyhcrVNW7gsyrcAwey2pbOOTgsWrwY75wGgLKBk5WwygWLk%2B3Yt8Sy%2B0tJSOCIX27hfpXwxyO%2B%2Ft0YrTmcgbQ32fhJdYxz%2FctsESjLuAn3lAoRn%2FJIr6Te2K21hgzOQHC4OsvWMiyDybu7%2B6tSpZRnD6YXKmsFw0lmm2iL8S%2BrJsh%2FItT6szNdIrwRgppVfPU7Fi%2FgxAjuUn16LM7NUA706buQYkfuaeQS1N6UM0Y98U8nkzE4axU8VmGuVxSq4CI1Uwv%2BSDBKPKWK3d3O%2BtQu9V8HLxfS4Ht%2BcKvRQjRqPe1mxK92QH%2FcxBJUV6aFzNIOO0DeaPFxJlbdxvW4Hc9UNy56A4N8v8p4qla1EaYjqQz%2FENmKhThxSLLM6ojYZ0l8WSlIV5p8aiauKuLafdHiiUKI37JYBI8JbHGsGsJ2rV5ejGP2ynx3ynU4o8XmeCYSWvOBOabgScKchweoWWyYv9fDFVDIwznG88W2lqaupiR370fYF5CIw3EIK5YKif%2BR2ST3DDptP89Bv%2BO6sOZ4B5ekLgvBQe7W9o1hOSwAPgCEWwRJp14b1X72ruFX3DmLGjKIKX6tS%2F4QLn5hVfi0cq9isE05BPLapoqsKDqme%2FOQvHLThK%2FtxzrfF3LyqgtimCH6W4VpMMaroMEGOqUBDYqjbB7BB2PsHnUy9L0E%2BnxFpVqX4k8KhQ2BryVc9HyUxYVAjiSbSOxOS8KmgcOkRXewpoFI4lwQB49yZ6gt6bQ0Jr7fHYK3%2BInx5phOCY12pqoew5z075LI5dtAXKkj9T%2B%2F%2FAAJBz%2Bm6LwtofNt8HXv%2FH7CcRPo%2Bu2W9uBZIJrtYWbvLvDFPwl9XjR9gd9G8GnbJAUhkQjdPc1lCExh93OhPqK%2F&X-Amz-Signature=12ba7833d8517e8df8e70b2bfcf19dab25da7763d5de28d3ca2457ce1aed491f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64IAY4E%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvPoBMqKnFQ7pw9GszkXOhk8hNfZbvFDpsnSXj4saD7AiEAh2BJCeMuIcXShPDb58WFzE0R6eQQ0ktnmxBJqcf47Ewq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL7C6zEyhcrVNW7gsyrcAwey2pbOOTgsWrwY75wGgLKBk5WwygWLk%2B3Yt8Sy%2B0tJSOCIX27hfpXwxyO%2B%2Ft0YrTmcgbQ32fhJdYxz%2FctsESjLuAn3lAoRn%2FJIr6Te2K21hgzOQHC4OsvWMiyDybu7%2B6tSpZRnD6YXKmsFw0lmm2iL8S%2BrJsh%2FItT6szNdIrwRgppVfPU7Fi%2FgxAjuUn16LM7NUA706buQYkfuaeQS1N6UM0Y98U8nkzE4axU8VmGuVxSq4CI1Uwv%2BSDBKPKWK3d3O%2BtQu9V8HLxfS4Ht%2BcKvRQjRqPe1mxK92QH%2FcxBJUV6aFzNIOO0DeaPFxJlbdxvW4Hc9UNy56A4N8v8p4qla1EaYjqQz%2FENmKhThxSLLM6ojYZ0l8WSlIV5p8aiauKuLafdHiiUKI37JYBI8JbHGsGsJ2rV5ejGP2ynx3ynU4o8XmeCYSWvOBOabgScKchweoWWyYv9fDFVDIwznG88W2lqaupiR370fYF5CIw3EIK5YKif%2BR2ST3DDptP89Bv%2BO6sOZ4B5ekLgvBQe7W9o1hOSwAPgCEWwRJp14b1X72ruFX3DmLGjKIKX6tS%2F4QLn5hVfi0cq9isE05BPLapoqsKDqme%2FOQvHLThK%2FtxzrfF3LyqgtimCH6W4VpMMaroMEGOqUBDYqjbB7BB2PsHnUy9L0E%2BnxFpVqX4k8KhQ2BryVc9HyUxYVAjiSbSOxOS8KmgcOkRXewpoFI4lwQB49yZ6gt6bQ0Jr7fHYK3%2BInx5phOCY12pqoew5z075LI5dtAXKkj9T%2B%2F%2FAAJBz%2Bm6LwtofNt8HXv%2FH7CcRPo%2Bu2W9uBZIJrtYWbvLvDFPwl9XjR9gd9G8GnbJAUhkQjdPc1lCExh93OhPqK%2F&X-Amz-Signature=ad222990a094fadca9372a9bbcf72b4559a13e8cec59d4ba41059088568c90b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64IAY4E%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvPoBMqKnFQ7pw9GszkXOhk8hNfZbvFDpsnSXj4saD7AiEAh2BJCeMuIcXShPDb58WFzE0R6eQQ0ktnmxBJqcf47Ewq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL7C6zEyhcrVNW7gsyrcAwey2pbOOTgsWrwY75wGgLKBk5WwygWLk%2B3Yt8Sy%2B0tJSOCIX27hfpXwxyO%2B%2Ft0YrTmcgbQ32fhJdYxz%2FctsESjLuAn3lAoRn%2FJIr6Te2K21hgzOQHC4OsvWMiyDybu7%2B6tSpZRnD6YXKmsFw0lmm2iL8S%2BrJsh%2FItT6szNdIrwRgppVfPU7Fi%2FgxAjuUn16LM7NUA706buQYkfuaeQS1N6UM0Y98U8nkzE4axU8VmGuVxSq4CI1Uwv%2BSDBKPKWK3d3O%2BtQu9V8HLxfS4Ht%2BcKvRQjRqPe1mxK92QH%2FcxBJUV6aFzNIOO0DeaPFxJlbdxvW4Hc9UNy56A4N8v8p4qla1EaYjqQz%2FENmKhThxSLLM6ojYZ0l8WSlIV5p8aiauKuLafdHiiUKI37JYBI8JbHGsGsJ2rV5ejGP2ynx3ynU4o8XmeCYSWvOBOabgScKchweoWWyYv9fDFVDIwznG88W2lqaupiR370fYF5CIw3EIK5YKif%2BR2ST3DDptP89Bv%2BO6sOZ4B5ekLgvBQe7W9o1hOSwAPgCEWwRJp14b1X72ruFX3DmLGjKIKX6tS%2F4QLn5hVfi0cq9isE05BPLapoqsKDqme%2FOQvHLThK%2FtxzrfF3LyqgtimCH6W4VpMMaroMEGOqUBDYqjbB7BB2PsHnUy9L0E%2BnxFpVqX4k8KhQ2BryVc9HyUxYVAjiSbSOxOS8KmgcOkRXewpoFI4lwQB49yZ6gt6bQ0Jr7fHYK3%2BInx5phOCY12pqoew5z075LI5dtAXKkj9T%2B%2F%2FAAJBz%2Bm6LwtofNt8HXv%2FH7CcRPo%2Bu2W9uBZIJrtYWbvLvDFPwl9XjR9gd9G8GnbJAUhkQjdPc1lCExh93OhPqK%2F&X-Amz-Signature=84d58ea9d86aa0ab21e81093237e0a1d711642032faf816627bd84fd1d365e19&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64IAY4E%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvPoBMqKnFQ7pw9GszkXOhk8hNfZbvFDpsnSXj4saD7AiEAh2BJCeMuIcXShPDb58WFzE0R6eQQ0ktnmxBJqcf47Ewq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL7C6zEyhcrVNW7gsyrcAwey2pbOOTgsWrwY75wGgLKBk5WwygWLk%2B3Yt8Sy%2B0tJSOCIX27hfpXwxyO%2B%2Ft0YrTmcgbQ32fhJdYxz%2FctsESjLuAn3lAoRn%2FJIr6Te2K21hgzOQHC4OsvWMiyDybu7%2B6tSpZRnD6YXKmsFw0lmm2iL8S%2BrJsh%2FItT6szNdIrwRgppVfPU7Fi%2FgxAjuUn16LM7NUA706buQYkfuaeQS1N6UM0Y98U8nkzE4axU8VmGuVxSq4CI1Uwv%2BSDBKPKWK3d3O%2BtQu9V8HLxfS4Ht%2BcKvRQjRqPe1mxK92QH%2FcxBJUV6aFzNIOO0DeaPFxJlbdxvW4Hc9UNy56A4N8v8p4qla1EaYjqQz%2FENmKhThxSLLM6ojYZ0l8WSlIV5p8aiauKuLafdHiiUKI37JYBI8JbHGsGsJ2rV5ejGP2ynx3ynU4o8XmeCYSWvOBOabgScKchweoWWyYv9fDFVDIwznG88W2lqaupiR370fYF5CIw3EIK5YKif%2BR2ST3DDptP89Bv%2BO6sOZ4B5ekLgvBQe7W9o1hOSwAPgCEWwRJp14b1X72ruFX3DmLGjKIKX6tS%2F4QLn5hVfi0cq9isE05BPLapoqsKDqme%2FOQvHLThK%2FtxzrfF3LyqgtimCH6W4VpMMaroMEGOqUBDYqjbB7BB2PsHnUy9L0E%2BnxFpVqX4k8KhQ2BryVc9HyUxYVAjiSbSOxOS8KmgcOkRXewpoFI4lwQB49yZ6gt6bQ0Jr7fHYK3%2BInx5phOCY12pqoew5z075LI5dtAXKkj9T%2B%2F%2FAAJBz%2Bm6LwtofNt8HXv%2FH7CcRPo%2Bu2W9uBZIJrtYWbvLvDFPwl9XjR9gd9G8GnbJAUhkQjdPc1lCExh93OhPqK%2F&X-Amz-Signature=69849981a1ea0015f90b74f48f58c29ad4a6086936d04ac9b7d42477fc4bae1b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64IAY4E%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvPoBMqKnFQ7pw9GszkXOhk8hNfZbvFDpsnSXj4saD7AiEAh2BJCeMuIcXShPDb58WFzE0R6eQQ0ktnmxBJqcf47Ewq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL7C6zEyhcrVNW7gsyrcAwey2pbOOTgsWrwY75wGgLKBk5WwygWLk%2B3Yt8Sy%2B0tJSOCIX27hfpXwxyO%2B%2Ft0YrTmcgbQ32fhJdYxz%2FctsESjLuAn3lAoRn%2FJIr6Te2K21hgzOQHC4OsvWMiyDybu7%2B6tSpZRnD6YXKmsFw0lmm2iL8S%2BrJsh%2FItT6szNdIrwRgppVfPU7Fi%2FgxAjuUn16LM7NUA706buQYkfuaeQS1N6UM0Y98U8nkzE4axU8VmGuVxSq4CI1Uwv%2BSDBKPKWK3d3O%2BtQu9V8HLxfS4Ht%2BcKvRQjRqPe1mxK92QH%2FcxBJUV6aFzNIOO0DeaPFxJlbdxvW4Hc9UNy56A4N8v8p4qla1EaYjqQz%2FENmKhThxSLLM6ojYZ0l8WSlIV5p8aiauKuLafdHiiUKI37JYBI8JbHGsGsJ2rV5ejGP2ynx3ynU4o8XmeCYSWvOBOabgScKchweoWWyYv9fDFVDIwznG88W2lqaupiR370fYF5CIw3EIK5YKif%2BR2ST3DDptP89Bv%2BO6sOZ4B5ekLgvBQe7W9o1hOSwAPgCEWwRJp14b1X72ruFX3DmLGjKIKX6tS%2F4QLn5hVfi0cq9isE05BPLapoqsKDqme%2FOQvHLThK%2FtxzrfF3LyqgtimCH6W4VpMMaroMEGOqUBDYqjbB7BB2PsHnUy9L0E%2BnxFpVqX4k8KhQ2BryVc9HyUxYVAjiSbSOxOS8KmgcOkRXewpoFI4lwQB49yZ6gt6bQ0Jr7fHYK3%2BInx5phOCY12pqoew5z075LI5dtAXKkj9T%2B%2F%2FAAJBz%2Bm6LwtofNt8HXv%2FH7CcRPo%2Bu2W9uBZIJrtYWbvLvDFPwl9XjR9gd9G8GnbJAUhkQjdPc1lCExh93OhPqK%2F&X-Amz-Signature=c05de3dde97c0a4a5bf5eb73d2df6c091d52ac17cae4d522c5f88d51a97b4db3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64IAY4E%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvPoBMqKnFQ7pw9GszkXOhk8hNfZbvFDpsnSXj4saD7AiEAh2BJCeMuIcXShPDb58WFzE0R6eQQ0ktnmxBJqcf47Ewq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL7C6zEyhcrVNW7gsyrcAwey2pbOOTgsWrwY75wGgLKBk5WwygWLk%2B3Yt8Sy%2B0tJSOCIX27hfpXwxyO%2B%2Ft0YrTmcgbQ32fhJdYxz%2FctsESjLuAn3lAoRn%2FJIr6Te2K21hgzOQHC4OsvWMiyDybu7%2B6tSpZRnD6YXKmsFw0lmm2iL8S%2BrJsh%2FItT6szNdIrwRgppVfPU7Fi%2FgxAjuUn16LM7NUA706buQYkfuaeQS1N6UM0Y98U8nkzE4axU8VmGuVxSq4CI1Uwv%2BSDBKPKWK3d3O%2BtQu9V8HLxfS4Ht%2BcKvRQjRqPe1mxK92QH%2FcxBJUV6aFzNIOO0DeaPFxJlbdxvW4Hc9UNy56A4N8v8p4qla1EaYjqQz%2FENmKhThxSLLM6ojYZ0l8WSlIV5p8aiauKuLafdHiiUKI37JYBI8JbHGsGsJ2rV5ejGP2ynx3ynU4o8XmeCYSWvOBOabgScKchweoWWyYv9fDFVDIwznG88W2lqaupiR370fYF5CIw3EIK5YKif%2BR2ST3DDptP89Bv%2BO6sOZ4B5ekLgvBQe7W9o1hOSwAPgCEWwRJp14b1X72ruFX3DmLGjKIKX6tS%2F4QLn5hVfi0cq9isE05BPLapoqsKDqme%2FOQvHLThK%2FtxzrfF3LyqgtimCH6W4VpMMaroMEGOqUBDYqjbB7BB2PsHnUy9L0E%2BnxFpVqX4k8KhQ2BryVc9HyUxYVAjiSbSOxOS8KmgcOkRXewpoFI4lwQB49yZ6gt6bQ0Jr7fHYK3%2BInx5phOCY12pqoew5z075LI5dtAXKkj9T%2B%2F%2FAAJBz%2Bm6LwtofNt8HXv%2FH7CcRPo%2Bu2W9uBZIJrtYWbvLvDFPwl9XjR9gd9G8GnbJAUhkQjdPc1lCExh93OhPqK%2F&X-Amz-Signature=4c86e2ddedc2e72da331462b0b1dd4c511387dccef881b0eef3a26de8b9a2426&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64IAY4E%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvPoBMqKnFQ7pw9GszkXOhk8hNfZbvFDpsnSXj4saD7AiEAh2BJCeMuIcXShPDb58WFzE0R6eQQ0ktnmxBJqcf47Ewq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL7C6zEyhcrVNW7gsyrcAwey2pbOOTgsWrwY75wGgLKBk5WwygWLk%2B3Yt8Sy%2B0tJSOCIX27hfpXwxyO%2B%2Ft0YrTmcgbQ32fhJdYxz%2FctsESjLuAn3lAoRn%2FJIr6Te2K21hgzOQHC4OsvWMiyDybu7%2B6tSpZRnD6YXKmsFw0lmm2iL8S%2BrJsh%2FItT6szNdIrwRgppVfPU7Fi%2FgxAjuUn16LM7NUA706buQYkfuaeQS1N6UM0Y98U8nkzE4axU8VmGuVxSq4CI1Uwv%2BSDBKPKWK3d3O%2BtQu9V8HLxfS4Ht%2BcKvRQjRqPe1mxK92QH%2FcxBJUV6aFzNIOO0DeaPFxJlbdxvW4Hc9UNy56A4N8v8p4qla1EaYjqQz%2FENmKhThxSLLM6ojYZ0l8WSlIV5p8aiauKuLafdHiiUKI37JYBI8JbHGsGsJ2rV5ejGP2ynx3ynU4o8XmeCYSWvOBOabgScKchweoWWyYv9fDFVDIwznG88W2lqaupiR370fYF5CIw3EIK5YKif%2BR2ST3DDptP89Bv%2BO6sOZ4B5ekLgvBQe7W9o1hOSwAPgCEWwRJp14b1X72ruFX3DmLGjKIKX6tS%2F4QLn5hVfi0cq9isE05BPLapoqsKDqme%2FOQvHLThK%2FtxzrfF3LyqgtimCH6W4VpMMaroMEGOqUBDYqjbB7BB2PsHnUy9L0E%2BnxFpVqX4k8KhQ2BryVc9HyUxYVAjiSbSOxOS8KmgcOkRXewpoFI4lwQB49yZ6gt6bQ0Jr7fHYK3%2BInx5phOCY12pqoew5z075LI5dtAXKkj9T%2B%2F%2FAAJBz%2Bm6LwtofNt8HXv%2FH7CcRPo%2Bu2W9uBZIJrtYWbvLvDFPwl9XjR9gd9G8GnbJAUhkQjdPc1lCExh93OhPqK%2F&X-Amz-Signature=6a68fcc7c7ec4f88d5007090e36b57fc4f3a19e7c8b6f4840100f5e68202e64d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
