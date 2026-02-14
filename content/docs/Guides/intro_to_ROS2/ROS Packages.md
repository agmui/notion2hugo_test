---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEK7YJG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCg%2BPGvXGj7V9DWd8cDnDuTRyVTHucq5LKZNdMF8pS0%2FAIhAOwvYWIQQ59%2BBf6B9901uA2M57aRdDOlIsZsYzbDkzjOKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbkejaZiebUVxs2aIq3APnfPe1jlCvLkjmkHUGrmcI7s5WnZRA5muzJNoGsdNgxx6XF3BNFgHAa0g%2Bznn2vQKCz7wp2d9o6bNdr1LBMU7a056Wh1yxGRjzQ0DMRouEBOJXHtv3K48bpDUOHXfUKwujj7A%2BbMZYSPX4PjxwgY29Nt%2FV20sLtBqLFyS1fID2n2VXqkLZZVgj8CzalyMPP6bMKyoZxkh3uwCnAZIGk7qGJU7fJjQD1swarVqSp%2F82T3ENZcAvlwuTgON4gdowm5IJkaXValWf%2FA9%2Bx%2FunkDkrnAAv%2BcRYrsMBGb0Umw%2BBeGAvoRKxexIIZHZ8rU5RH%2BzPpoFD5Kyb2xbUGmYbuxCcq6OYtmnpAu91e4DPzOkdEck4kLqyO3TcNv3uhpKKyBLSa0o2X%2FW36IU7Xhi9NmWHhkj5hXo2L1tG387X4hOfHVMZCXQWfz3n1ipgUTMEFQ00YjScD3YHd2xluDabPtbs99uq50CLdyh3sejCFuFC7HbxNPEHI48wQ1XJ1o8ZgBh8DEeG5ncm7fRE7vEWwQv4fYtMy4mxQHNJ5bxVPAHgAxeVHbEX0tfqVZ7UUYRf2Izj%2BjhSJNBSK4fctgjrYxYIIhRrCydJ0%2BQk0Nf1EOa8MJra8wB5wHJx7zNCaTC1kr%2FMBjqkAdnn7zb6iVJpWzlkjpwMNNQTFfJNptMPEtYVmMEsF1hmQCA6CA5wj7etesSO652vuQ6Z1iObiN608L%2F5yNtRV3NcT0caraLAxR3eCQcp8Fff0DBL0WSy8chkFDJzkRjiBtl95LVyEABVwZC0H%2FWCjBCDMxOMUpT0dAhH6Ux5n2enhKnV35bTnvKolTqJnRO33P6q%2FG3ic68Kgdn2JupyjT%2Fb7B7G&X-Amz-Signature=2d189ce4b5f9810768dbbacb360b5f3a4b9fc897a17926acb977a79664c07e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEK7YJG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCg%2BPGvXGj7V9DWd8cDnDuTRyVTHucq5LKZNdMF8pS0%2FAIhAOwvYWIQQ59%2BBf6B9901uA2M57aRdDOlIsZsYzbDkzjOKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbkejaZiebUVxs2aIq3APnfPe1jlCvLkjmkHUGrmcI7s5WnZRA5muzJNoGsdNgxx6XF3BNFgHAa0g%2Bznn2vQKCz7wp2d9o6bNdr1LBMU7a056Wh1yxGRjzQ0DMRouEBOJXHtv3K48bpDUOHXfUKwujj7A%2BbMZYSPX4PjxwgY29Nt%2FV20sLtBqLFyS1fID2n2VXqkLZZVgj8CzalyMPP6bMKyoZxkh3uwCnAZIGk7qGJU7fJjQD1swarVqSp%2F82T3ENZcAvlwuTgON4gdowm5IJkaXValWf%2FA9%2Bx%2FunkDkrnAAv%2BcRYrsMBGb0Umw%2BBeGAvoRKxexIIZHZ8rU5RH%2BzPpoFD5Kyb2xbUGmYbuxCcq6OYtmnpAu91e4DPzOkdEck4kLqyO3TcNv3uhpKKyBLSa0o2X%2FW36IU7Xhi9NmWHhkj5hXo2L1tG387X4hOfHVMZCXQWfz3n1ipgUTMEFQ00YjScD3YHd2xluDabPtbs99uq50CLdyh3sejCFuFC7HbxNPEHI48wQ1XJ1o8ZgBh8DEeG5ncm7fRE7vEWwQv4fYtMy4mxQHNJ5bxVPAHgAxeVHbEX0tfqVZ7UUYRf2Izj%2BjhSJNBSK4fctgjrYxYIIhRrCydJ0%2BQk0Nf1EOa8MJra8wB5wHJx7zNCaTC1kr%2FMBjqkAdnn7zb6iVJpWzlkjpwMNNQTFfJNptMPEtYVmMEsF1hmQCA6CA5wj7etesSO652vuQ6Z1iObiN608L%2F5yNtRV3NcT0caraLAxR3eCQcp8Fff0DBL0WSy8chkFDJzkRjiBtl95LVyEABVwZC0H%2FWCjBCDMxOMUpT0dAhH6Ux5n2enhKnV35bTnvKolTqJnRO33P6q%2FG3ic68Kgdn2JupyjT%2Fb7B7G&X-Amz-Signature=8c32f994887d11435e38ea07f14791072cbf7ddcad660034da4444a5aa97ddcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEK7YJG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCg%2BPGvXGj7V9DWd8cDnDuTRyVTHucq5LKZNdMF8pS0%2FAIhAOwvYWIQQ59%2BBf6B9901uA2M57aRdDOlIsZsYzbDkzjOKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbkejaZiebUVxs2aIq3APnfPe1jlCvLkjmkHUGrmcI7s5WnZRA5muzJNoGsdNgxx6XF3BNFgHAa0g%2Bznn2vQKCz7wp2d9o6bNdr1LBMU7a056Wh1yxGRjzQ0DMRouEBOJXHtv3K48bpDUOHXfUKwujj7A%2BbMZYSPX4PjxwgY29Nt%2FV20sLtBqLFyS1fID2n2VXqkLZZVgj8CzalyMPP6bMKyoZxkh3uwCnAZIGk7qGJU7fJjQD1swarVqSp%2F82T3ENZcAvlwuTgON4gdowm5IJkaXValWf%2FA9%2Bx%2FunkDkrnAAv%2BcRYrsMBGb0Umw%2BBeGAvoRKxexIIZHZ8rU5RH%2BzPpoFD5Kyb2xbUGmYbuxCcq6OYtmnpAu91e4DPzOkdEck4kLqyO3TcNv3uhpKKyBLSa0o2X%2FW36IU7Xhi9NmWHhkj5hXo2L1tG387X4hOfHVMZCXQWfz3n1ipgUTMEFQ00YjScD3YHd2xluDabPtbs99uq50CLdyh3sejCFuFC7HbxNPEHI48wQ1XJ1o8ZgBh8DEeG5ncm7fRE7vEWwQv4fYtMy4mxQHNJ5bxVPAHgAxeVHbEX0tfqVZ7UUYRf2Izj%2BjhSJNBSK4fctgjrYxYIIhRrCydJ0%2BQk0Nf1EOa8MJra8wB5wHJx7zNCaTC1kr%2FMBjqkAdnn7zb6iVJpWzlkjpwMNNQTFfJNptMPEtYVmMEsF1hmQCA6CA5wj7etesSO652vuQ6Z1iObiN608L%2F5yNtRV3NcT0caraLAxR3eCQcp8Fff0DBL0WSy8chkFDJzkRjiBtl95LVyEABVwZC0H%2FWCjBCDMxOMUpT0dAhH6Ux5n2enhKnV35bTnvKolTqJnRO33P6q%2FG3ic68Kgdn2JupyjT%2Fb7B7G&X-Amz-Signature=7d7b139c4ee6aa1bd6e3f25a448db8ffbd5ba67a551c1049ead068ede5796628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEK7YJG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCg%2BPGvXGj7V9DWd8cDnDuTRyVTHucq5LKZNdMF8pS0%2FAIhAOwvYWIQQ59%2BBf6B9901uA2M57aRdDOlIsZsYzbDkzjOKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbkejaZiebUVxs2aIq3APnfPe1jlCvLkjmkHUGrmcI7s5WnZRA5muzJNoGsdNgxx6XF3BNFgHAa0g%2Bznn2vQKCz7wp2d9o6bNdr1LBMU7a056Wh1yxGRjzQ0DMRouEBOJXHtv3K48bpDUOHXfUKwujj7A%2BbMZYSPX4PjxwgY29Nt%2FV20sLtBqLFyS1fID2n2VXqkLZZVgj8CzalyMPP6bMKyoZxkh3uwCnAZIGk7qGJU7fJjQD1swarVqSp%2F82T3ENZcAvlwuTgON4gdowm5IJkaXValWf%2FA9%2Bx%2FunkDkrnAAv%2BcRYrsMBGb0Umw%2BBeGAvoRKxexIIZHZ8rU5RH%2BzPpoFD5Kyb2xbUGmYbuxCcq6OYtmnpAu91e4DPzOkdEck4kLqyO3TcNv3uhpKKyBLSa0o2X%2FW36IU7Xhi9NmWHhkj5hXo2L1tG387X4hOfHVMZCXQWfz3n1ipgUTMEFQ00YjScD3YHd2xluDabPtbs99uq50CLdyh3sejCFuFC7HbxNPEHI48wQ1XJ1o8ZgBh8DEeG5ncm7fRE7vEWwQv4fYtMy4mxQHNJ5bxVPAHgAxeVHbEX0tfqVZ7UUYRf2Izj%2BjhSJNBSK4fctgjrYxYIIhRrCydJ0%2BQk0Nf1EOa8MJra8wB5wHJx7zNCaTC1kr%2FMBjqkAdnn7zb6iVJpWzlkjpwMNNQTFfJNptMPEtYVmMEsF1hmQCA6CA5wj7etesSO652vuQ6Z1iObiN608L%2F5yNtRV3NcT0caraLAxR3eCQcp8Fff0DBL0WSy8chkFDJzkRjiBtl95LVyEABVwZC0H%2FWCjBCDMxOMUpT0dAhH6Ux5n2enhKnV35bTnvKolTqJnRO33P6q%2FG3ic68Kgdn2JupyjT%2Fb7B7G&X-Amz-Signature=f65c5400eb525cd11991f6526034bb44959dde1742303ce710cf6e9ab5d4dec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEK7YJG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCg%2BPGvXGj7V9DWd8cDnDuTRyVTHucq5LKZNdMF8pS0%2FAIhAOwvYWIQQ59%2BBf6B9901uA2M57aRdDOlIsZsYzbDkzjOKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbkejaZiebUVxs2aIq3APnfPe1jlCvLkjmkHUGrmcI7s5WnZRA5muzJNoGsdNgxx6XF3BNFgHAa0g%2Bznn2vQKCz7wp2d9o6bNdr1LBMU7a056Wh1yxGRjzQ0DMRouEBOJXHtv3K48bpDUOHXfUKwujj7A%2BbMZYSPX4PjxwgY29Nt%2FV20sLtBqLFyS1fID2n2VXqkLZZVgj8CzalyMPP6bMKyoZxkh3uwCnAZIGk7qGJU7fJjQD1swarVqSp%2F82T3ENZcAvlwuTgON4gdowm5IJkaXValWf%2FA9%2Bx%2FunkDkrnAAv%2BcRYrsMBGb0Umw%2BBeGAvoRKxexIIZHZ8rU5RH%2BzPpoFD5Kyb2xbUGmYbuxCcq6OYtmnpAu91e4DPzOkdEck4kLqyO3TcNv3uhpKKyBLSa0o2X%2FW36IU7Xhi9NmWHhkj5hXo2L1tG387X4hOfHVMZCXQWfz3n1ipgUTMEFQ00YjScD3YHd2xluDabPtbs99uq50CLdyh3sejCFuFC7HbxNPEHI48wQ1XJ1o8ZgBh8DEeG5ncm7fRE7vEWwQv4fYtMy4mxQHNJ5bxVPAHgAxeVHbEX0tfqVZ7UUYRf2Izj%2BjhSJNBSK4fctgjrYxYIIhRrCydJ0%2BQk0Nf1EOa8MJra8wB5wHJx7zNCaTC1kr%2FMBjqkAdnn7zb6iVJpWzlkjpwMNNQTFfJNptMPEtYVmMEsF1hmQCA6CA5wj7etesSO652vuQ6Z1iObiN608L%2F5yNtRV3NcT0caraLAxR3eCQcp8Fff0DBL0WSy8chkFDJzkRjiBtl95LVyEABVwZC0H%2FWCjBCDMxOMUpT0dAhH6Ux5n2enhKnV35bTnvKolTqJnRO33P6q%2FG3ic68Kgdn2JupyjT%2Fb7B7G&X-Amz-Signature=1133c2e9d2dab4dccab5e190158f7d83fa4e381bb8afe7935d76f88e62fe8350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEK7YJG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCg%2BPGvXGj7V9DWd8cDnDuTRyVTHucq5LKZNdMF8pS0%2FAIhAOwvYWIQQ59%2BBf6B9901uA2M57aRdDOlIsZsYzbDkzjOKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbkejaZiebUVxs2aIq3APnfPe1jlCvLkjmkHUGrmcI7s5WnZRA5muzJNoGsdNgxx6XF3BNFgHAa0g%2Bznn2vQKCz7wp2d9o6bNdr1LBMU7a056Wh1yxGRjzQ0DMRouEBOJXHtv3K48bpDUOHXfUKwujj7A%2BbMZYSPX4PjxwgY29Nt%2FV20sLtBqLFyS1fID2n2VXqkLZZVgj8CzalyMPP6bMKyoZxkh3uwCnAZIGk7qGJU7fJjQD1swarVqSp%2F82T3ENZcAvlwuTgON4gdowm5IJkaXValWf%2FA9%2Bx%2FunkDkrnAAv%2BcRYrsMBGb0Umw%2BBeGAvoRKxexIIZHZ8rU5RH%2BzPpoFD5Kyb2xbUGmYbuxCcq6OYtmnpAu91e4DPzOkdEck4kLqyO3TcNv3uhpKKyBLSa0o2X%2FW36IU7Xhi9NmWHhkj5hXo2L1tG387X4hOfHVMZCXQWfz3n1ipgUTMEFQ00YjScD3YHd2xluDabPtbs99uq50CLdyh3sejCFuFC7HbxNPEHI48wQ1XJ1o8ZgBh8DEeG5ncm7fRE7vEWwQv4fYtMy4mxQHNJ5bxVPAHgAxeVHbEX0tfqVZ7UUYRf2Izj%2BjhSJNBSK4fctgjrYxYIIhRrCydJ0%2BQk0Nf1EOa8MJra8wB5wHJx7zNCaTC1kr%2FMBjqkAdnn7zb6iVJpWzlkjpwMNNQTFfJNptMPEtYVmMEsF1hmQCA6CA5wj7etesSO652vuQ6Z1iObiN608L%2F5yNtRV3NcT0caraLAxR3eCQcp8Fff0DBL0WSy8chkFDJzkRjiBtl95LVyEABVwZC0H%2FWCjBCDMxOMUpT0dAhH6Ux5n2enhKnV35bTnvKolTqJnRO33P6q%2FG3ic68Kgdn2JupyjT%2Fb7B7G&X-Amz-Signature=bc15efaede460e677a0c67846baecee5b456fb99fdf59fb3a74753e8290ffaa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEK7YJG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCg%2BPGvXGj7V9DWd8cDnDuTRyVTHucq5LKZNdMF8pS0%2FAIhAOwvYWIQQ59%2BBf6B9901uA2M57aRdDOlIsZsYzbDkzjOKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbkejaZiebUVxs2aIq3APnfPe1jlCvLkjmkHUGrmcI7s5WnZRA5muzJNoGsdNgxx6XF3BNFgHAa0g%2Bznn2vQKCz7wp2d9o6bNdr1LBMU7a056Wh1yxGRjzQ0DMRouEBOJXHtv3K48bpDUOHXfUKwujj7A%2BbMZYSPX4PjxwgY29Nt%2FV20sLtBqLFyS1fID2n2VXqkLZZVgj8CzalyMPP6bMKyoZxkh3uwCnAZIGk7qGJU7fJjQD1swarVqSp%2F82T3ENZcAvlwuTgON4gdowm5IJkaXValWf%2FA9%2Bx%2FunkDkrnAAv%2BcRYrsMBGb0Umw%2BBeGAvoRKxexIIZHZ8rU5RH%2BzPpoFD5Kyb2xbUGmYbuxCcq6OYtmnpAu91e4DPzOkdEck4kLqyO3TcNv3uhpKKyBLSa0o2X%2FW36IU7Xhi9NmWHhkj5hXo2L1tG387X4hOfHVMZCXQWfz3n1ipgUTMEFQ00YjScD3YHd2xluDabPtbs99uq50CLdyh3sejCFuFC7HbxNPEHI48wQ1XJ1o8ZgBh8DEeG5ncm7fRE7vEWwQv4fYtMy4mxQHNJ5bxVPAHgAxeVHbEX0tfqVZ7UUYRf2Izj%2BjhSJNBSK4fctgjrYxYIIhRrCydJ0%2BQk0Nf1EOa8MJra8wB5wHJx7zNCaTC1kr%2FMBjqkAdnn7zb6iVJpWzlkjpwMNNQTFfJNptMPEtYVmMEsF1hmQCA6CA5wj7etesSO652vuQ6Z1iObiN608L%2F5yNtRV3NcT0caraLAxR3eCQcp8Fff0DBL0WSy8chkFDJzkRjiBtl95LVyEABVwZC0H%2FWCjBCDMxOMUpT0dAhH6Ux5n2enhKnV35bTnvKolTqJnRO33P6q%2FG3ic68Kgdn2JupyjT%2Fb7B7G&X-Amz-Signature=3088b08521a98943c03447254c423dce1355cb3a18015bb841536b0de6b22467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
