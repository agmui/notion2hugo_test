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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO4RIR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCDgW7q9L5tNLAmS3H3v%2FzhLrIaFp9aRulSVaCu7RcW3QIgXkkXR2ryBAHTyFBZqun4alBScJsnrVkrTaoSoyMHbw8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsvObY8%2FT1vfqZ8CSrcA0XtP%2FrfI0%2FwpURKx2et68OIDIw2hgiCXZSngWM0oTWpKS1iZSpTUqYNQpT07TMkcmMqvCuqXztOqa9wzkkDH2kb%2BKqMMeYrNuJrgAC3pYQWCMdgimVp2pHqFtGXO7ewXPb%2B2NtiLlBMwVH58V3F6v8nujcac9MM9a0XvdiA3lSSFIOTZ8bWKJ%2Fp3smaa442ISaad%2BHQgQUOlg0t%2Fbcqczi%2FQkXto%2BqiINmrv0CdszTBVD75ksgd7ErJlx4rjfH6tvhh0cSa9XZMcGgW2Hb5jnv7vtCEFlytcdluIHY6vbk0IjbiNxFPA0ggc3KQh3p8PY0l4hNjBxOPdT2GFH9t3%2BwB8QSKv2eeNC6%2F7gwnkCQ0%2F1jUGi6Ymv2ndpspIcbHs252DsdmnqtGi3cPPCL2x2i%2FqPXhXVKANC3AoljUwEv%2BF0YebWwwKgA5NLD8kwdzASqsSXXKKFFlrF0uwsgMzACIWkruaP7yvfnRYJIXbnZZRSNJ8TSS7zaa7jVLxero3HlFQdWsozh6rNozuJPBmfvWMSezKq5i0LCoSThhfUyV2kiVLWmSpAB7i1ehAgQXfZDO%2FKK4KxajdLESoAZqbKolcd3VBmXDjuVkeLB8VZ1f5Mbp%2FmNbXFZn2IW0MJWjx74GOqUB%2B15Vj45UokA%2B6054kMaj0aEhcf%2B%2BHfQdTnNL746sDRCJY5w93TVD72kWTxnwWraXW9MsWvJgM2dRsx7UTeX6dET1lFApyAgS0Phr352BpJUWBig5tc41gDPBpsantMXvCcMrJyXrWqMbKwLKiPVj5rf54%2FVhbV%2B61OxpG4B4MVs03ZhQKB0PFyalsTPM2xbrZtxdSn%2ByL24%2FdRaJw2U8AwI4mZLP&X-Amz-Signature=75c7e61be265dfe012bd9ef9654acccb9d0945e624b1f9bc3afaee3ab883204e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO4RIR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCDgW7q9L5tNLAmS3H3v%2FzhLrIaFp9aRulSVaCu7RcW3QIgXkkXR2ryBAHTyFBZqun4alBScJsnrVkrTaoSoyMHbw8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsvObY8%2FT1vfqZ8CSrcA0XtP%2FrfI0%2FwpURKx2et68OIDIw2hgiCXZSngWM0oTWpKS1iZSpTUqYNQpT07TMkcmMqvCuqXztOqa9wzkkDH2kb%2BKqMMeYrNuJrgAC3pYQWCMdgimVp2pHqFtGXO7ewXPb%2B2NtiLlBMwVH58V3F6v8nujcac9MM9a0XvdiA3lSSFIOTZ8bWKJ%2Fp3smaa442ISaad%2BHQgQUOlg0t%2Fbcqczi%2FQkXto%2BqiINmrv0CdszTBVD75ksgd7ErJlx4rjfH6tvhh0cSa9XZMcGgW2Hb5jnv7vtCEFlytcdluIHY6vbk0IjbiNxFPA0ggc3KQh3p8PY0l4hNjBxOPdT2GFH9t3%2BwB8QSKv2eeNC6%2F7gwnkCQ0%2F1jUGi6Ymv2ndpspIcbHs252DsdmnqtGi3cPPCL2x2i%2FqPXhXVKANC3AoljUwEv%2BF0YebWwwKgA5NLD8kwdzASqsSXXKKFFlrF0uwsgMzACIWkruaP7yvfnRYJIXbnZZRSNJ8TSS7zaa7jVLxero3HlFQdWsozh6rNozuJPBmfvWMSezKq5i0LCoSThhfUyV2kiVLWmSpAB7i1ehAgQXfZDO%2FKK4KxajdLESoAZqbKolcd3VBmXDjuVkeLB8VZ1f5Mbp%2FmNbXFZn2IW0MJWjx74GOqUB%2B15Vj45UokA%2B6054kMaj0aEhcf%2B%2BHfQdTnNL746sDRCJY5w93TVD72kWTxnwWraXW9MsWvJgM2dRsx7UTeX6dET1lFApyAgS0Phr352BpJUWBig5tc41gDPBpsantMXvCcMrJyXrWqMbKwLKiPVj5rf54%2FVhbV%2B61OxpG4B4MVs03ZhQKB0PFyalsTPM2xbrZtxdSn%2ByL24%2FdRaJw2U8AwI4mZLP&X-Amz-Signature=506a8467a81b900d035d3c80191ecd0100f8f969dd3293f5c921c524c8aa8f06&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO4RIR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCDgW7q9L5tNLAmS3H3v%2FzhLrIaFp9aRulSVaCu7RcW3QIgXkkXR2ryBAHTyFBZqun4alBScJsnrVkrTaoSoyMHbw8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsvObY8%2FT1vfqZ8CSrcA0XtP%2FrfI0%2FwpURKx2et68OIDIw2hgiCXZSngWM0oTWpKS1iZSpTUqYNQpT07TMkcmMqvCuqXztOqa9wzkkDH2kb%2BKqMMeYrNuJrgAC3pYQWCMdgimVp2pHqFtGXO7ewXPb%2B2NtiLlBMwVH58V3F6v8nujcac9MM9a0XvdiA3lSSFIOTZ8bWKJ%2Fp3smaa442ISaad%2BHQgQUOlg0t%2Fbcqczi%2FQkXto%2BqiINmrv0CdszTBVD75ksgd7ErJlx4rjfH6tvhh0cSa9XZMcGgW2Hb5jnv7vtCEFlytcdluIHY6vbk0IjbiNxFPA0ggc3KQh3p8PY0l4hNjBxOPdT2GFH9t3%2BwB8QSKv2eeNC6%2F7gwnkCQ0%2F1jUGi6Ymv2ndpspIcbHs252DsdmnqtGi3cPPCL2x2i%2FqPXhXVKANC3AoljUwEv%2BF0YebWwwKgA5NLD8kwdzASqsSXXKKFFlrF0uwsgMzACIWkruaP7yvfnRYJIXbnZZRSNJ8TSS7zaa7jVLxero3HlFQdWsozh6rNozuJPBmfvWMSezKq5i0LCoSThhfUyV2kiVLWmSpAB7i1ehAgQXfZDO%2FKK4KxajdLESoAZqbKolcd3VBmXDjuVkeLB8VZ1f5Mbp%2FmNbXFZn2IW0MJWjx74GOqUB%2B15Vj45UokA%2B6054kMaj0aEhcf%2B%2BHfQdTnNL746sDRCJY5w93TVD72kWTxnwWraXW9MsWvJgM2dRsx7UTeX6dET1lFApyAgS0Phr352BpJUWBig5tc41gDPBpsantMXvCcMrJyXrWqMbKwLKiPVj5rf54%2FVhbV%2B61OxpG4B4MVs03ZhQKB0PFyalsTPM2xbrZtxdSn%2ByL24%2FdRaJw2U8AwI4mZLP&X-Amz-Signature=1537f49b768f15a1c2645a56d44636561caba221bc7e2e812e4836c324fd62fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO4RIR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCDgW7q9L5tNLAmS3H3v%2FzhLrIaFp9aRulSVaCu7RcW3QIgXkkXR2ryBAHTyFBZqun4alBScJsnrVkrTaoSoyMHbw8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsvObY8%2FT1vfqZ8CSrcA0XtP%2FrfI0%2FwpURKx2et68OIDIw2hgiCXZSngWM0oTWpKS1iZSpTUqYNQpT07TMkcmMqvCuqXztOqa9wzkkDH2kb%2BKqMMeYrNuJrgAC3pYQWCMdgimVp2pHqFtGXO7ewXPb%2B2NtiLlBMwVH58V3F6v8nujcac9MM9a0XvdiA3lSSFIOTZ8bWKJ%2Fp3smaa442ISaad%2BHQgQUOlg0t%2Fbcqczi%2FQkXto%2BqiINmrv0CdszTBVD75ksgd7ErJlx4rjfH6tvhh0cSa9XZMcGgW2Hb5jnv7vtCEFlytcdluIHY6vbk0IjbiNxFPA0ggc3KQh3p8PY0l4hNjBxOPdT2GFH9t3%2BwB8QSKv2eeNC6%2F7gwnkCQ0%2F1jUGi6Ymv2ndpspIcbHs252DsdmnqtGi3cPPCL2x2i%2FqPXhXVKANC3AoljUwEv%2BF0YebWwwKgA5NLD8kwdzASqsSXXKKFFlrF0uwsgMzACIWkruaP7yvfnRYJIXbnZZRSNJ8TSS7zaa7jVLxero3HlFQdWsozh6rNozuJPBmfvWMSezKq5i0LCoSThhfUyV2kiVLWmSpAB7i1ehAgQXfZDO%2FKK4KxajdLESoAZqbKolcd3VBmXDjuVkeLB8VZ1f5Mbp%2FmNbXFZn2IW0MJWjx74GOqUB%2B15Vj45UokA%2B6054kMaj0aEhcf%2B%2BHfQdTnNL746sDRCJY5w93TVD72kWTxnwWraXW9MsWvJgM2dRsx7UTeX6dET1lFApyAgS0Phr352BpJUWBig5tc41gDPBpsantMXvCcMrJyXrWqMbKwLKiPVj5rf54%2FVhbV%2B61OxpG4B4MVs03ZhQKB0PFyalsTPM2xbrZtxdSn%2ByL24%2FdRaJw2U8AwI4mZLP&X-Amz-Signature=4fcdf06478710456c1a79eb0af29be9c22672218724d18f6ada1d02e8bb1b236&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO4RIR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCDgW7q9L5tNLAmS3H3v%2FzhLrIaFp9aRulSVaCu7RcW3QIgXkkXR2ryBAHTyFBZqun4alBScJsnrVkrTaoSoyMHbw8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsvObY8%2FT1vfqZ8CSrcA0XtP%2FrfI0%2FwpURKx2et68OIDIw2hgiCXZSngWM0oTWpKS1iZSpTUqYNQpT07TMkcmMqvCuqXztOqa9wzkkDH2kb%2BKqMMeYrNuJrgAC3pYQWCMdgimVp2pHqFtGXO7ewXPb%2B2NtiLlBMwVH58V3F6v8nujcac9MM9a0XvdiA3lSSFIOTZ8bWKJ%2Fp3smaa442ISaad%2BHQgQUOlg0t%2Fbcqczi%2FQkXto%2BqiINmrv0CdszTBVD75ksgd7ErJlx4rjfH6tvhh0cSa9XZMcGgW2Hb5jnv7vtCEFlytcdluIHY6vbk0IjbiNxFPA0ggc3KQh3p8PY0l4hNjBxOPdT2GFH9t3%2BwB8QSKv2eeNC6%2F7gwnkCQ0%2F1jUGi6Ymv2ndpspIcbHs252DsdmnqtGi3cPPCL2x2i%2FqPXhXVKANC3AoljUwEv%2BF0YebWwwKgA5NLD8kwdzASqsSXXKKFFlrF0uwsgMzACIWkruaP7yvfnRYJIXbnZZRSNJ8TSS7zaa7jVLxero3HlFQdWsozh6rNozuJPBmfvWMSezKq5i0LCoSThhfUyV2kiVLWmSpAB7i1ehAgQXfZDO%2FKK4KxajdLESoAZqbKolcd3VBmXDjuVkeLB8VZ1f5Mbp%2FmNbXFZn2IW0MJWjx74GOqUB%2B15Vj45UokA%2B6054kMaj0aEhcf%2B%2BHfQdTnNL746sDRCJY5w93TVD72kWTxnwWraXW9MsWvJgM2dRsx7UTeX6dET1lFApyAgS0Phr352BpJUWBig5tc41gDPBpsantMXvCcMrJyXrWqMbKwLKiPVj5rf54%2FVhbV%2B61OxpG4B4MVs03ZhQKB0PFyalsTPM2xbrZtxdSn%2ByL24%2FdRaJw2U8AwI4mZLP&X-Amz-Signature=58fdf59e7f3eac307f7622ce6e643620df13ed5dd0274628442dd9bced1b2c86&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO4RIR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCDgW7q9L5tNLAmS3H3v%2FzhLrIaFp9aRulSVaCu7RcW3QIgXkkXR2ryBAHTyFBZqun4alBScJsnrVkrTaoSoyMHbw8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsvObY8%2FT1vfqZ8CSrcA0XtP%2FrfI0%2FwpURKx2et68OIDIw2hgiCXZSngWM0oTWpKS1iZSpTUqYNQpT07TMkcmMqvCuqXztOqa9wzkkDH2kb%2BKqMMeYrNuJrgAC3pYQWCMdgimVp2pHqFtGXO7ewXPb%2B2NtiLlBMwVH58V3F6v8nujcac9MM9a0XvdiA3lSSFIOTZ8bWKJ%2Fp3smaa442ISaad%2BHQgQUOlg0t%2Fbcqczi%2FQkXto%2BqiINmrv0CdszTBVD75ksgd7ErJlx4rjfH6tvhh0cSa9XZMcGgW2Hb5jnv7vtCEFlytcdluIHY6vbk0IjbiNxFPA0ggc3KQh3p8PY0l4hNjBxOPdT2GFH9t3%2BwB8QSKv2eeNC6%2F7gwnkCQ0%2F1jUGi6Ymv2ndpspIcbHs252DsdmnqtGi3cPPCL2x2i%2FqPXhXVKANC3AoljUwEv%2BF0YebWwwKgA5NLD8kwdzASqsSXXKKFFlrF0uwsgMzACIWkruaP7yvfnRYJIXbnZZRSNJ8TSS7zaa7jVLxero3HlFQdWsozh6rNozuJPBmfvWMSezKq5i0LCoSThhfUyV2kiVLWmSpAB7i1ehAgQXfZDO%2FKK4KxajdLESoAZqbKolcd3VBmXDjuVkeLB8VZ1f5Mbp%2FmNbXFZn2IW0MJWjx74GOqUB%2B15Vj45UokA%2B6054kMaj0aEhcf%2B%2BHfQdTnNL746sDRCJY5w93TVD72kWTxnwWraXW9MsWvJgM2dRsx7UTeX6dET1lFApyAgS0Phr352BpJUWBig5tc41gDPBpsantMXvCcMrJyXrWqMbKwLKiPVj5rf54%2FVhbV%2B61OxpG4B4MVs03ZhQKB0PFyalsTPM2xbrZtxdSn%2ByL24%2FdRaJw2U8AwI4mZLP&X-Amz-Signature=ba847f9f5d76f48c31951b3eac6826b287d2b2d6caa9522ad302ec1fda4b213b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO4RIR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCDgW7q9L5tNLAmS3H3v%2FzhLrIaFp9aRulSVaCu7RcW3QIgXkkXR2ryBAHTyFBZqun4alBScJsnrVkrTaoSoyMHbw8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsvObY8%2FT1vfqZ8CSrcA0XtP%2FrfI0%2FwpURKx2et68OIDIw2hgiCXZSngWM0oTWpKS1iZSpTUqYNQpT07TMkcmMqvCuqXztOqa9wzkkDH2kb%2BKqMMeYrNuJrgAC3pYQWCMdgimVp2pHqFtGXO7ewXPb%2B2NtiLlBMwVH58V3F6v8nujcac9MM9a0XvdiA3lSSFIOTZ8bWKJ%2Fp3smaa442ISaad%2BHQgQUOlg0t%2Fbcqczi%2FQkXto%2BqiINmrv0CdszTBVD75ksgd7ErJlx4rjfH6tvhh0cSa9XZMcGgW2Hb5jnv7vtCEFlytcdluIHY6vbk0IjbiNxFPA0ggc3KQh3p8PY0l4hNjBxOPdT2GFH9t3%2BwB8QSKv2eeNC6%2F7gwnkCQ0%2F1jUGi6Ymv2ndpspIcbHs252DsdmnqtGi3cPPCL2x2i%2FqPXhXVKANC3AoljUwEv%2BF0YebWwwKgA5NLD8kwdzASqsSXXKKFFlrF0uwsgMzACIWkruaP7yvfnRYJIXbnZZRSNJ8TSS7zaa7jVLxero3HlFQdWsozh6rNozuJPBmfvWMSezKq5i0LCoSThhfUyV2kiVLWmSpAB7i1ehAgQXfZDO%2FKK4KxajdLESoAZqbKolcd3VBmXDjuVkeLB8VZ1f5Mbp%2FmNbXFZn2IW0MJWjx74GOqUB%2B15Vj45UokA%2B6054kMaj0aEhcf%2B%2BHfQdTnNL746sDRCJY5w93TVD72kWTxnwWraXW9MsWvJgM2dRsx7UTeX6dET1lFApyAgS0Phr352BpJUWBig5tc41gDPBpsantMXvCcMrJyXrWqMbKwLKiPVj5rf54%2FVhbV%2B61OxpG4B4MVs03ZhQKB0PFyalsTPM2xbrZtxdSn%2ByL24%2FdRaJw2U8AwI4mZLP&X-Amz-Signature=09202b26021ee3eede547c30a8d7bae83d0b39b6462ea04c135a05661df68de7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
