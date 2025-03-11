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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZTY5CH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCb1LZe6yhhubOK6KIR6NNgsjn8JX%2FurNZkuYsAcBsXvAIgErbON46R8c1%2BLHMJOrJNkbc3vAPaE2VvxRaExphkmuQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA4UnnaHT0WgiQScCrcAzOzMYILeNrWEOGlRTa1taAV4ZRRCC5uijcN467doyqYJKpJeQnmuFkyitr38uusyPy8LcY8A1ZShCJFw2TpTnZ6%2F3qUh%2BfQmNZFcLjlWZJU5jNQaLe10yIZQwR8YMdnhOWdnPPJe6uTf94u9k48jVsHjiIOeCesYUpLsfR1no9msRMJkur6h4G17vFKdEwPRFE%2BWUvkSM2WN%2BHZRqYTYAxqM2rdZOA7F3%2Bu5TJdn34m8IOPGkbxPonm%2BWYYFFOOVtwNGaHlWRR4mhgFfaG0tRrozKwpD%2BW3jx3zIx7rA1D8B9BnnISea4nkzLyac5XfNv1rGYiEnBbrXEE3whBanzN1JlSe0OP7NgE%2BGfDPiw8DG0p%2BIu%2Fox8FE8Tcpt0dyCYIcQAtU6Vp2ggf57FKpdCClaMBXemM6pyPrtSP8m%2Fon7wzPjWXL2xZIqn5WAG7vRVcJwNYao3WcG2sbV02ElkI0k2CHMf2NMunJLUT7knsVZ1eyHVviLInLACB2rqnU6MHO54NcmIffpGBaHRbuYXLhGEJukDolOCXRIe9P0436CwLZzOYTqWCYutc%2FIbForuYgrJRzt20x7Xd6umzjKcTdX%2Ba4aC8%2FrcZU311jjta%2FEN36en8jnM0GRcK1MLrywr4GOqUBtQvs2HWgLSdNNKXFKk2NreaS%2B9pOUZLucgUALmRQ7UR31PB2VHuC1KwV0oeWxb2B0WF%2F27OKtvC6Ie0O7Lxs9bStah5UmbTmgB0Lxeffymi5ETxQSwAseSyxfTxplFulE%2F2zmcWHKC3MzY8ZM9p1EapVNJU2gfsCWPNJZI8O3RdLpgSE%2FygTsBl8BmE%2B1Y2JS37qHR9i4eLBwBxiIFli2aJwNti2&X-Amz-Signature=7e72b06c7d64a7222bc34432b4c7f630ce63dab2cae609ddcaa90cfbfd6945c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZTY5CH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCb1LZe6yhhubOK6KIR6NNgsjn8JX%2FurNZkuYsAcBsXvAIgErbON46R8c1%2BLHMJOrJNkbc3vAPaE2VvxRaExphkmuQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA4UnnaHT0WgiQScCrcAzOzMYILeNrWEOGlRTa1taAV4ZRRCC5uijcN467doyqYJKpJeQnmuFkyitr38uusyPy8LcY8A1ZShCJFw2TpTnZ6%2F3qUh%2BfQmNZFcLjlWZJU5jNQaLe10yIZQwR8YMdnhOWdnPPJe6uTf94u9k48jVsHjiIOeCesYUpLsfR1no9msRMJkur6h4G17vFKdEwPRFE%2BWUvkSM2WN%2BHZRqYTYAxqM2rdZOA7F3%2Bu5TJdn34m8IOPGkbxPonm%2BWYYFFOOVtwNGaHlWRR4mhgFfaG0tRrozKwpD%2BW3jx3zIx7rA1D8B9BnnISea4nkzLyac5XfNv1rGYiEnBbrXEE3whBanzN1JlSe0OP7NgE%2BGfDPiw8DG0p%2BIu%2Fox8FE8Tcpt0dyCYIcQAtU6Vp2ggf57FKpdCClaMBXemM6pyPrtSP8m%2Fon7wzPjWXL2xZIqn5WAG7vRVcJwNYao3WcG2sbV02ElkI0k2CHMf2NMunJLUT7knsVZ1eyHVviLInLACB2rqnU6MHO54NcmIffpGBaHRbuYXLhGEJukDolOCXRIe9P0436CwLZzOYTqWCYutc%2FIbForuYgrJRzt20x7Xd6umzjKcTdX%2Ba4aC8%2FrcZU311jjta%2FEN36en8jnM0GRcK1MLrywr4GOqUBtQvs2HWgLSdNNKXFKk2NreaS%2B9pOUZLucgUALmRQ7UR31PB2VHuC1KwV0oeWxb2B0WF%2F27OKtvC6Ie0O7Lxs9bStah5UmbTmgB0Lxeffymi5ETxQSwAseSyxfTxplFulE%2F2zmcWHKC3MzY8ZM9p1EapVNJU2gfsCWPNJZI8O3RdLpgSE%2FygTsBl8BmE%2B1Y2JS37qHR9i4eLBwBxiIFli2aJwNti2&X-Amz-Signature=83f9f3fc5c6f7875ff1e0391885506991feaf8c996a66af9d093d298552c74ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZTY5CH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCb1LZe6yhhubOK6KIR6NNgsjn8JX%2FurNZkuYsAcBsXvAIgErbON46R8c1%2BLHMJOrJNkbc3vAPaE2VvxRaExphkmuQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA4UnnaHT0WgiQScCrcAzOzMYILeNrWEOGlRTa1taAV4ZRRCC5uijcN467doyqYJKpJeQnmuFkyitr38uusyPy8LcY8A1ZShCJFw2TpTnZ6%2F3qUh%2BfQmNZFcLjlWZJU5jNQaLe10yIZQwR8YMdnhOWdnPPJe6uTf94u9k48jVsHjiIOeCesYUpLsfR1no9msRMJkur6h4G17vFKdEwPRFE%2BWUvkSM2WN%2BHZRqYTYAxqM2rdZOA7F3%2Bu5TJdn34m8IOPGkbxPonm%2BWYYFFOOVtwNGaHlWRR4mhgFfaG0tRrozKwpD%2BW3jx3zIx7rA1D8B9BnnISea4nkzLyac5XfNv1rGYiEnBbrXEE3whBanzN1JlSe0OP7NgE%2BGfDPiw8DG0p%2BIu%2Fox8FE8Tcpt0dyCYIcQAtU6Vp2ggf57FKpdCClaMBXemM6pyPrtSP8m%2Fon7wzPjWXL2xZIqn5WAG7vRVcJwNYao3WcG2sbV02ElkI0k2CHMf2NMunJLUT7knsVZ1eyHVviLInLACB2rqnU6MHO54NcmIffpGBaHRbuYXLhGEJukDolOCXRIe9P0436CwLZzOYTqWCYutc%2FIbForuYgrJRzt20x7Xd6umzjKcTdX%2Ba4aC8%2FrcZU311jjta%2FEN36en8jnM0GRcK1MLrywr4GOqUBtQvs2HWgLSdNNKXFKk2NreaS%2B9pOUZLucgUALmRQ7UR31PB2VHuC1KwV0oeWxb2B0WF%2F27OKtvC6Ie0O7Lxs9bStah5UmbTmgB0Lxeffymi5ETxQSwAseSyxfTxplFulE%2F2zmcWHKC3MzY8ZM9p1EapVNJU2gfsCWPNJZI8O3RdLpgSE%2FygTsBl8BmE%2B1Y2JS37qHR9i4eLBwBxiIFli2aJwNti2&X-Amz-Signature=be53ada223e1c0bedf596daecd251008979d18b738ece513d095415103ccd439&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZTY5CH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCb1LZe6yhhubOK6KIR6NNgsjn8JX%2FurNZkuYsAcBsXvAIgErbON46R8c1%2BLHMJOrJNkbc3vAPaE2VvxRaExphkmuQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA4UnnaHT0WgiQScCrcAzOzMYILeNrWEOGlRTa1taAV4ZRRCC5uijcN467doyqYJKpJeQnmuFkyitr38uusyPy8LcY8A1ZShCJFw2TpTnZ6%2F3qUh%2BfQmNZFcLjlWZJU5jNQaLe10yIZQwR8YMdnhOWdnPPJe6uTf94u9k48jVsHjiIOeCesYUpLsfR1no9msRMJkur6h4G17vFKdEwPRFE%2BWUvkSM2WN%2BHZRqYTYAxqM2rdZOA7F3%2Bu5TJdn34m8IOPGkbxPonm%2BWYYFFOOVtwNGaHlWRR4mhgFfaG0tRrozKwpD%2BW3jx3zIx7rA1D8B9BnnISea4nkzLyac5XfNv1rGYiEnBbrXEE3whBanzN1JlSe0OP7NgE%2BGfDPiw8DG0p%2BIu%2Fox8FE8Tcpt0dyCYIcQAtU6Vp2ggf57FKpdCClaMBXemM6pyPrtSP8m%2Fon7wzPjWXL2xZIqn5WAG7vRVcJwNYao3WcG2sbV02ElkI0k2CHMf2NMunJLUT7knsVZ1eyHVviLInLACB2rqnU6MHO54NcmIffpGBaHRbuYXLhGEJukDolOCXRIe9P0436CwLZzOYTqWCYutc%2FIbForuYgrJRzt20x7Xd6umzjKcTdX%2Ba4aC8%2FrcZU311jjta%2FEN36en8jnM0GRcK1MLrywr4GOqUBtQvs2HWgLSdNNKXFKk2NreaS%2B9pOUZLucgUALmRQ7UR31PB2VHuC1KwV0oeWxb2B0WF%2F27OKtvC6Ie0O7Lxs9bStah5UmbTmgB0Lxeffymi5ETxQSwAseSyxfTxplFulE%2F2zmcWHKC3MzY8ZM9p1EapVNJU2gfsCWPNJZI8O3RdLpgSE%2FygTsBl8BmE%2B1Y2JS37qHR9i4eLBwBxiIFli2aJwNti2&X-Amz-Signature=b2ff625e3c3d5844f441937beeda7d838a3f6729051d001344824406ad93da92&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZTY5CH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCb1LZe6yhhubOK6KIR6NNgsjn8JX%2FurNZkuYsAcBsXvAIgErbON46R8c1%2BLHMJOrJNkbc3vAPaE2VvxRaExphkmuQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA4UnnaHT0WgiQScCrcAzOzMYILeNrWEOGlRTa1taAV4ZRRCC5uijcN467doyqYJKpJeQnmuFkyitr38uusyPy8LcY8A1ZShCJFw2TpTnZ6%2F3qUh%2BfQmNZFcLjlWZJU5jNQaLe10yIZQwR8YMdnhOWdnPPJe6uTf94u9k48jVsHjiIOeCesYUpLsfR1no9msRMJkur6h4G17vFKdEwPRFE%2BWUvkSM2WN%2BHZRqYTYAxqM2rdZOA7F3%2Bu5TJdn34m8IOPGkbxPonm%2BWYYFFOOVtwNGaHlWRR4mhgFfaG0tRrozKwpD%2BW3jx3zIx7rA1D8B9BnnISea4nkzLyac5XfNv1rGYiEnBbrXEE3whBanzN1JlSe0OP7NgE%2BGfDPiw8DG0p%2BIu%2Fox8FE8Tcpt0dyCYIcQAtU6Vp2ggf57FKpdCClaMBXemM6pyPrtSP8m%2Fon7wzPjWXL2xZIqn5WAG7vRVcJwNYao3WcG2sbV02ElkI0k2CHMf2NMunJLUT7knsVZ1eyHVviLInLACB2rqnU6MHO54NcmIffpGBaHRbuYXLhGEJukDolOCXRIe9P0436CwLZzOYTqWCYutc%2FIbForuYgrJRzt20x7Xd6umzjKcTdX%2Ba4aC8%2FrcZU311jjta%2FEN36en8jnM0GRcK1MLrywr4GOqUBtQvs2HWgLSdNNKXFKk2NreaS%2B9pOUZLucgUALmRQ7UR31PB2VHuC1KwV0oeWxb2B0WF%2F27OKtvC6Ie0O7Lxs9bStah5UmbTmgB0Lxeffymi5ETxQSwAseSyxfTxplFulE%2F2zmcWHKC3MzY8ZM9p1EapVNJU2gfsCWPNJZI8O3RdLpgSE%2FygTsBl8BmE%2B1Y2JS37qHR9i4eLBwBxiIFli2aJwNti2&X-Amz-Signature=fdee20fec24d0670319777d80df1e141d064a5804afd1b34d627c1898556425d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZTY5CH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCb1LZe6yhhubOK6KIR6NNgsjn8JX%2FurNZkuYsAcBsXvAIgErbON46R8c1%2BLHMJOrJNkbc3vAPaE2VvxRaExphkmuQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA4UnnaHT0WgiQScCrcAzOzMYILeNrWEOGlRTa1taAV4ZRRCC5uijcN467doyqYJKpJeQnmuFkyitr38uusyPy8LcY8A1ZShCJFw2TpTnZ6%2F3qUh%2BfQmNZFcLjlWZJU5jNQaLe10yIZQwR8YMdnhOWdnPPJe6uTf94u9k48jVsHjiIOeCesYUpLsfR1no9msRMJkur6h4G17vFKdEwPRFE%2BWUvkSM2WN%2BHZRqYTYAxqM2rdZOA7F3%2Bu5TJdn34m8IOPGkbxPonm%2BWYYFFOOVtwNGaHlWRR4mhgFfaG0tRrozKwpD%2BW3jx3zIx7rA1D8B9BnnISea4nkzLyac5XfNv1rGYiEnBbrXEE3whBanzN1JlSe0OP7NgE%2BGfDPiw8DG0p%2BIu%2Fox8FE8Tcpt0dyCYIcQAtU6Vp2ggf57FKpdCClaMBXemM6pyPrtSP8m%2Fon7wzPjWXL2xZIqn5WAG7vRVcJwNYao3WcG2sbV02ElkI0k2CHMf2NMunJLUT7knsVZ1eyHVviLInLACB2rqnU6MHO54NcmIffpGBaHRbuYXLhGEJukDolOCXRIe9P0436CwLZzOYTqWCYutc%2FIbForuYgrJRzt20x7Xd6umzjKcTdX%2Ba4aC8%2FrcZU311jjta%2FEN36en8jnM0GRcK1MLrywr4GOqUBtQvs2HWgLSdNNKXFKk2NreaS%2B9pOUZLucgUALmRQ7UR31PB2VHuC1KwV0oeWxb2B0WF%2F27OKtvC6Ie0O7Lxs9bStah5UmbTmgB0Lxeffymi5ETxQSwAseSyxfTxplFulE%2F2zmcWHKC3MzY8ZM9p1EapVNJU2gfsCWPNJZI8O3RdLpgSE%2FygTsBl8BmE%2B1Y2JS37qHR9i4eLBwBxiIFli2aJwNti2&X-Amz-Signature=2fe6080d73b6416460a06c78c11dee58c5917d87f710eff9c14a1c307ee1069e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZTY5CH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCb1LZe6yhhubOK6KIR6NNgsjn8JX%2FurNZkuYsAcBsXvAIgErbON46R8c1%2BLHMJOrJNkbc3vAPaE2VvxRaExphkmuQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA4UnnaHT0WgiQScCrcAzOzMYILeNrWEOGlRTa1taAV4ZRRCC5uijcN467doyqYJKpJeQnmuFkyitr38uusyPy8LcY8A1ZShCJFw2TpTnZ6%2F3qUh%2BfQmNZFcLjlWZJU5jNQaLe10yIZQwR8YMdnhOWdnPPJe6uTf94u9k48jVsHjiIOeCesYUpLsfR1no9msRMJkur6h4G17vFKdEwPRFE%2BWUvkSM2WN%2BHZRqYTYAxqM2rdZOA7F3%2Bu5TJdn34m8IOPGkbxPonm%2BWYYFFOOVtwNGaHlWRR4mhgFfaG0tRrozKwpD%2BW3jx3zIx7rA1D8B9BnnISea4nkzLyac5XfNv1rGYiEnBbrXEE3whBanzN1JlSe0OP7NgE%2BGfDPiw8DG0p%2BIu%2Fox8FE8Tcpt0dyCYIcQAtU6Vp2ggf57FKpdCClaMBXemM6pyPrtSP8m%2Fon7wzPjWXL2xZIqn5WAG7vRVcJwNYao3WcG2sbV02ElkI0k2CHMf2NMunJLUT7knsVZ1eyHVviLInLACB2rqnU6MHO54NcmIffpGBaHRbuYXLhGEJukDolOCXRIe9P0436CwLZzOYTqWCYutc%2FIbForuYgrJRzt20x7Xd6umzjKcTdX%2Ba4aC8%2FrcZU311jjta%2FEN36en8jnM0GRcK1MLrywr4GOqUBtQvs2HWgLSdNNKXFKk2NreaS%2B9pOUZLucgUALmRQ7UR31PB2VHuC1KwV0oeWxb2B0WF%2F27OKtvC6Ie0O7Lxs9bStah5UmbTmgB0Lxeffymi5ETxQSwAseSyxfTxplFulE%2F2zmcWHKC3MzY8ZM9p1EapVNJU2gfsCWPNJZI8O3RdLpgSE%2FygTsBl8BmE%2B1Y2JS37qHR9i4eLBwBxiIFli2aJwNti2&X-Amz-Signature=c0ea3d8ae8bc58659bd33c0e45065b5815b57abbf5ed42afe537f0ae4ffe8272&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
