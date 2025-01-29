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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLFEJMJC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPQlqu4bzsHjXF6SGUgpiVXcEiv50W89PIVidoigMS1QIhAKKunKHY7czrGt9i%2FePJRjtpeTEY6o7M9tSqE9Q%2B6cddKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvpRzQ1FyZ4psxG0Qq3APXPp%2BNsLjIDFYmBqeG4PH0MlrL0rZDYAED4dvQnaD0tBseCZV5vIksTSUltAN02h7IXBpSr7QydQu59tyWpwQqJtY9lu5YylehQgJRw18mRIF973LQd3i4c5KuquzODf%2FPieomwnoEgIvn7YFSiEQg07H0cRwXJgj4Oq0%2FuCXJ3eQCeYiH1nZMhCokmj%2B685yiujCquJUNbjO9tygxHl38Xlzbz2SSwIHdE%2BLdGesOBnKD2%2BXovEBtgeXMFMMGOcVgw33%2F4FHz2hdmAoYq9veH9tEpnIS%2FvSeQjEO3IEreYzT%2B%2B%2BKItaYksDydfWMuPyfWecBkFMwn3iBV%2BRigvF%2FMDQi%2BXP3DFf6sgGoCYkuzRWxDU8FLAOLKFMlsCTuqtwHQh%2FlMLX8YRvLCGv0DMjCiPiQWAjr%2Bs92KLq2OerwByGsHk1AChbVzuHXSCW9ZCKKzMXue8UfK3VDPbzSHNLQrRFKYuszU3k9vM7wlzclk30X2RMUe0WvKoItzvkXb0UgWD4Eh7utkanXn2b2wbaoSiC0ukUnNezfxeUkus6SgHJv7RP8LZ55R3ljnGyRA6pasPmc9C%2BzodQA9I4C9JZpFNsFpvHaIb5A%2BBAVjjrUpKmCJ5lxfB%2B4JGWMdtjDIsOi8BjqkAQQAauCubwnKev70dUNJEIigPCjogEdHFLn2leP8vMCN3THyptMiLmcVlyMjJPiLR8%2B%2BWOXrIOya75Zksb5ZQPNJRZdvbwdxYk2DhjR%2B4GUGPBG9dVXWPvN4UE%2Fn2Q5pqN3KYQDCMztcPeosRELhIWssXcrF69qSuDapyNtrcXYJCmb2E4PaaZcfTinGO4kf%2FCFM1fClCCNutBbPvLOxw8L7rW7d&X-Amz-Signature=d792e12f5dd74e0964f7983fb0369eb858567dc47ab77d167ec574819ea88ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLFEJMJC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPQlqu4bzsHjXF6SGUgpiVXcEiv50W89PIVidoigMS1QIhAKKunKHY7czrGt9i%2FePJRjtpeTEY6o7M9tSqE9Q%2B6cddKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvpRzQ1FyZ4psxG0Qq3APXPp%2BNsLjIDFYmBqeG4PH0MlrL0rZDYAED4dvQnaD0tBseCZV5vIksTSUltAN02h7IXBpSr7QydQu59tyWpwQqJtY9lu5YylehQgJRw18mRIF973LQd3i4c5KuquzODf%2FPieomwnoEgIvn7YFSiEQg07H0cRwXJgj4Oq0%2FuCXJ3eQCeYiH1nZMhCokmj%2B685yiujCquJUNbjO9tygxHl38Xlzbz2SSwIHdE%2BLdGesOBnKD2%2BXovEBtgeXMFMMGOcVgw33%2F4FHz2hdmAoYq9veH9tEpnIS%2FvSeQjEO3IEreYzT%2B%2B%2BKItaYksDydfWMuPyfWecBkFMwn3iBV%2BRigvF%2FMDQi%2BXP3DFf6sgGoCYkuzRWxDU8FLAOLKFMlsCTuqtwHQh%2FlMLX8YRvLCGv0DMjCiPiQWAjr%2Bs92KLq2OerwByGsHk1AChbVzuHXSCW9ZCKKzMXue8UfK3VDPbzSHNLQrRFKYuszU3k9vM7wlzclk30X2RMUe0WvKoItzvkXb0UgWD4Eh7utkanXn2b2wbaoSiC0ukUnNezfxeUkus6SgHJv7RP8LZ55R3ljnGyRA6pasPmc9C%2BzodQA9I4C9JZpFNsFpvHaIb5A%2BBAVjjrUpKmCJ5lxfB%2B4JGWMdtjDIsOi8BjqkAQQAauCubwnKev70dUNJEIigPCjogEdHFLn2leP8vMCN3THyptMiLmcVlyMjJPiLR8%2B%2BWOXrIOya75Zksb5ZQPNJRZdvbwdxYk2DhjR%2B4GUGPBG9dVXWPvN4UE%2Fn2Q5pqN3KYQDCMztcPeosRELhIWssXcrF69qSuDapyNtrcXYJCmb2E4PaaZcfTinGO4kf%2FCFM1fClCCNutBbPvLOxw8L7rW7d&X-Amz-Signature=56933a9f645bd167082061ccfccfc04fd44780eeec99bd62405c245576cb02fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLFEJMJC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPQlqu4bzsHjXF6SGUgpiVXcEiv50W89PIVidoigMS1QIhAKKunKHY7czrGt9i%2FePJRjtpeTEY6o7M9tSqE9Q%2B6cddKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvpRzQ1FyZ4psxG0Qq3APXPp%2BNsLjIDFYmBqeG4PH0MlrL0rZDYAED4dvQnaD0tBseCZV5vIksTSUltAN02h7IXBpSr7QydQu59tyWpwQqJtY9lu5YylehQgJRw18mRIF973LQd3i4c5KuquzODf%2FPieomwnoEgIvn7YFSiEQg07H0cRwXJgj4Oq0%2FuCXJ3eQCeYiH1nZMhCokmj%2B685yiujCquJUNbjO9tygxHl38Xlzbz2SSwIHdE%2BLdGesOBnKD2%2BXovEBtgeXMFMMGOcVgw33%2F4FHz2hdmAoYq9veH9tEpnIS%2FvSeQjEO3IEreYzT%2B%2B%2BKItaYksDydfWMuPyfWecBkFMwn3iBV%2BRigvF%2FMDQi%2BXP3DFf6sgGoCYkuzRWxDU8FLAOLKFMlsCTuqtwHQh%2FlMLX8YRvLCGv0DMjCiPiQWAjr%2Bs92KLq2OerwByGsHk1AChbVzuHXSCW9ZCKKzMXue8UfK3VDPbzSHNLQrRFKYuszU3k9vM7wlzclk30X2RMUe0WvKoItzvkXb0UgWD4Eh7utkanXn2b2wbaoSiC0ukUnNezfxeUkus6SgHJv7RP8LZ55R3ljnGyRA6pasPmc9C%2BzodQA9I4C9JZpFNsFpvHaIb5A%2BBAVjjrUpKmCJ5lxfB%2B4JGWMdtjDIsOi8BjqkAQQAauCubwnKev70dUNJEIigPCjogEdHFLn2leP8vMCN3THyptMiLmcVlyMjJPiLR8%2B%2BWOXrIOya75Zksb5ZQPNJRZdvbwdxYk2DhjR%2B4GUGPBG9dVXWPvN4UE%2Fn2Q5pqN3KYQDCMztcPeosRELhIWssXcrF69qSuDapyNtrcXYJCmb2E4PaaZcfTinGO4kf%2FCFM1fClCCNutBbPvLOxw8L7rW7d&X-Amz-Signature=56c326542135446c50b8648ab52f2b13f61a8c9718ced9e5a00896ceae63feaa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLFEJMJC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPQlqu4bzsHjXF6SGUgpiVXcEiv50W89PIVidoigMS1QIhAKKunKHY7czrGt9i%2FePJRjtpeTEY6o7M9tSqE9Q%2B6cddKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvpRzQ1FyZ4psxG0Qq3APXPp%2BNsLjIDFYmBqeG4PH0MlrL0rZDYAED4dvQnaD0tBseCZV5vIksTSUltAN02h7IXBpSr7QydQu59tyWpwQqJtY9lu5YylehQgJRw18mRIF973LQd3i4c5KuquzODf%2FPieomwnoEgIvn7YFSiEQg07H0cRwXJgj4Oq0%2FuCXJ3eQCeYiH1nZMhCokmj%2B685yiujCquJUNbjO9tygxHl38Xlzbz2SSwIHdE%2BLdGesOBnKD2%2BXovEBtgeXMFMMGOcVgw33%2F4FHz2hdmAoYq9veH9tEpnIS%2FvSeQjEO3IEreYzT%2B%2B%2BKItaYksDydfWMuPyfWecBkFMwn3iBV%2BRigvF%2FMDQi%2BXP3DFf6sgGoCYkuzRWxDU8FLAOLKFMlsCTuqtwHQh%2FlMLX8YRvLCGv0DMjCiPiQWAjr%2Bs92KLq2OerwByGsHk1AChbVzuHXSCW9ZCKKzMXue8UfK3VDPbzSHNLQrRFKYuszU3k9vM7wlzclk30X2RMUe0WvKoItzvkXb0UgWD4Eh7utkanXn2b2wbaoSiC0ukUnNezfxeUkus6SgHJv7RP8LZ55R3ljnGyRA6pasPmc9C%2BzodQA9I4C9JZpFNsFpvHaIb5A%2BBAVjjrUpKmCJ5lxfB%2B4JGWMdtjDIsOi8BjqkAQQAauCubwnKev70dUNJEIigPCjogEdHFLn2leP8vMCN3THyptMiLmcVlyMjJPiLR8%2B%2BWOXrIOya75Zksb5ZQPNJRZdvbwdxYk2DhjR%2B4GUGPBG9dVXWPvN4UE%2Fn2Q5pqN3KYQDCMztcPeosRELhIWssXcrF69qSuDapyNtrcXYJCmb2E4PaaZcfTinGO4kf%2FCFM1fClCCNutBbPvLOxw8L7rW7d&X-Amz-Signature=99d4977f2d1c2a857c9b6a1e04a0969bea9f6ccde2b1aaf46b0aa22b31256106&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLFEJMJC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPQlqu4bzsHjXF6SGUgpiVXcEiv50W89PIVidoigMS1QIhAKKunKHY7czrGt9i%2FePJRjtpeTEY6o7M9tSqE9Q%2B6cddKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvpRzQ1FyZ4psxG0Qq3APXPp%2BNsLjIDFYmBqeG4PH0MlrL0rZDYAED4dvQnaD0tBseCZV5vIksTSUltAN02h7IXBpSr7QydQu59tyWpwQqJtY9lu5YylehQgJRw18mRIF973LQd3i4c5KuquzODf%2FPieomwnoEgIvn7YFSiEQg07H0cRwXJgj4Oq0%2FuCXJ3eQCeYiH1nZMhCokmj%2B685yiujCquJUNbjO9tygxHl38Xlzbz2SSwIHdE%2BLdGesOBnKD2%2BXovEBtgeXMFMMGOcVgw33%2F4FHz2hdmAoYq9veH9tEpnIS%2FvSeQjEO3IEreYzT%2B%2B%2BKItaYksDydfWMuPyfWecBkFMwn3iBV%2BRigvF%2FMDQi%2BXP3DFf6sgGoCYkuzRWxDU8FLAOLKFMlsCTuqtwHQh%2FlMLX8YRvLCGv0DMjCiPiQWAjr%2Bs92KLq2OerwByGsHk1AChbVzuHXSCW9ZCKKzMXue8UfK3VDPbzSHNLQrRFKYuszU3k9vM7wlzclk30X2RMUe0WvKoItzvkXb0UgWD4Eh7utkanXn2b2wbaoSiC0ukUnNezfxeUkus6SgHJv7RP8LZ55R3ljnGyRA6pasPmc9C%2BzodQA9I4C9JZpFNsFpvHaIb5A%2BBAVjjrUpKmCJ5lxfB%2B4JGWMdtjDIsOi8BjqkAQQAauCubwnKev70dUNJEIigPCjogEdHFLn2leP8vMCN3THyptMiLmcVlyMjJPiLR8%2B%2BWOXrIOya75Zksb5ZQPNJRZdvbwdxYk2DhjR%2B4GUGPBG9dVXWPvN4UE%2Fn2Q5pqN3KYQDCMztcPeosRELhIWssXcrF69qSuDapyNtrcXYJCmb2E4PaaZcfTinGO4kf%2FCFM1fClCCNutBbPvLOxw8L7rW7d&X-Amz-Signature=19e3650616e4af5db66206a22588136e3b33030caa59dfa51a40d6b35f3717d5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLFEJMJC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPQlqu4bzsHjXF6SGUgpiVXcEiv50W89PIVidoigMS1QIhAKKunKHY7czrGt9i%2FePJRjtpeTEY6o7M9tSqE9Q%2B6cddKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvpRzQ1FyZ4psxG0Qq3APXPp%2BNsLjIDFYmBqeG4PH0MlrL0rZDYAED4dvQnaD0tBseCZV5vIksTSUltAN02h7IXBpSr7QydQu59tyWpwQqJtY9lu5YylehQgJRw18mRIF973LQd3i4c5KuquzODf%2FPieomwnoEgIvn7YFSiEQg07H0cRwXJgj4Oq0%2FuCXJ3eQCeYiH1nZMhCokmj%2B685yiujCquJUNbjO9tygxHl38Xlzbz2SSwIHdE%2BLdGesOBnKD2%2BXovEBtgeXMFMMGOcVgw33%2F4FHz2hdmAoYq9veH9tEpnIS%2FvSeQjEO3IEreYzT%2B%2B%2BKItaYksDydfWMuPyfWecBkFMwn3iBV%2BRigvF%2FMDQi%2BXP3DFf6sgGoCYkuzRWxDU8FLAOLKFMlsCTuqtwHQh%2FlMLX8YRvLCGv0DMjCiPiQWAjr%2Bs92KLq2OerwByGsHk1AChbVzuHXSCW9ZCKKzMXue8UfK3VDPbzSHNLQrRFKYuszU3k9vM7wlzclk30X2RMUe0WvKoItzvkXb0UgWD4Eh7utkanXn2b2wbaoSiC0ukUnNezfxeUkus6SgHJv7RP8LZ55R3ljnGyRA6pasPmc9C%2BzodQA9I4C9JZpFNsFpvHaIb5A%2BBAVjjrUpKmCJ5lxfB%2B4JGWMdtjDIsOi8BjqkAQQAauCubwnKev70dUNJEIigPCjogEdHFLn2leP8vMCN3THyptMiLmcVlyMjJPiLR8%2B%2BWOXrIOya75Zksb5ZQPNJRZdvbwdxYk2DhjR%2B4GUGPBG9dVXWPvN4UE%2Fn2Q5pqN3KYQDCMztcPeosRELhIWssXcrF69qSuDapyNtrcXYJCmb2E4PaaZcfTinGO4kf%2FCFM1fClCCNutBbPvLOxw8L7rW7d&X-Amz-Signature=ffa98214aea6f2a7726f6504c91a25e14e65933a80d18d57399cd79481a9d387&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLFEJMJC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPQlqu4bzsHjXF6SGUgpiVXcEiv50W89PIVidoigMS1QIhAKKunKHY7czrGt9i%2FePJRjtpeTEY6o7M9tSqE9Q%2B6cddKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvpRzQ1FyZ4psxG0Qq3APXPp%2BNsLjIDFYmBqeG4PH0MlrL0rZDYAED4dvQnaD0tBseCZV5vIksTSUltAN02h7IXBpSr7QydQu59tyWpwQqJtY9lu5YylehQgJRw18mRIF973LQd3i4c5KuquzODf%2FPieomwnoEgIvn7YFSiEQg07H0cRwXJgj4Oq0%2FuCXJ3eQCeYiH1nZMhCokmj%2B685yiujCquJUNbjO9tygxHl38Xlzbz2SSwIHdE%2BLdGesOBnKD2%2BXovEBtgeXMFMMGOcVgw33%2F4FHz2hdmAoYq9veH9tEpnIS%2FvSeQjEO3IEreYzT%2B%2B%2BKItaYksDydfWMuPyfWecBkFMwn3iBV%2BRigvF%2FMDQi%2BXP3DFf6sgGoCYkuzRWxDU8FLAOLKFMlsCTuqtwHQh%2FlMLX8YRvLCGv0DMjCiPiQWAjr%2Bs92KLq2OerwByGsHk1AChbVzuHXSCW9ZCKKzMXue8UfK3VDPbzSHNLQrRFKYuszU3k9vM7wlzclk30X2RMUe0WvKoItzvkXb0UgWD4Eh7utkanXn2b2wbaoSiC0ukUnNezfxeUkus6SgHJv7RP8LZ55R3ljnGyRA6pasPmc9C%2BzodQA9I4C9JZpFNsFpvHaIb5A%2BBAVjjrUpKmCJ5lxfB%2B4JGWMdtjDIsOi8BjqkAQQAauCubwnKev70dUNJEIigPCjogEdHFLn2leP8vMCN3THyptMiLmcVlyMjJPiLR8%2B%2BWOXrIOya75Zksb5ZQPNJRZdvbwdxYk2DhjR%2B4GUGPBG9dVXWPvN4UE%2Fn2Q5pqN3KYQDCMztcPeosRELhIWssXcrF69qSuDapyNtrcXYJCmb2E4PaaZcfTinGO4kf%2FCFM1fClCCNutBbPvLOxw8L7rW7d&X-Amz-Signature=3c8eee1b68087d4477ba2d1136e72b5c9ae61dcffee8e0ba1d5d11eb2d4949ef&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
