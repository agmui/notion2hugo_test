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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFBXAEE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD9KRUINvsKvJHv6Z4Jz1%2F87980afsdvqnG38Fes9lABgIgS2jUgpl2OH4jbQSxcqDbFmkkVs4OvrfTF7b7w3mUk2cq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAV10eu10ojGjWHE%2BSrcA%2FKnd2jxikwG55%2FvQqYkvSufdNYFTdS%2FESwJVNkduev6wBzRqQL%2F6ZWcgeXSwb0RRH4XPVtg3wE0jERtkAJZN6d0BSgzo4FK9ud47FXPd5jHzWJggfsGVKn4iqDnHbLYTOjKATfkAAj4lO4KftfuUXf2Z0bkrlbelA2aksmuUTnYTn8GuoVx8t3dXjC9qh1RJAA1YRxNCaxwuHugsMia03wf3e1h0VYalo3Qp4F%2B5wZ4AohejuFpuVRjLeDGk%2Frj8H0RnmtA9PDVKXDs6YTqZOGkpBFTqHsQ5SKnfQsEij1GvEENPQiWc9qqKP0Zrwfl7l4YfWQbB67w7ckIrmhzHcjdy6Jkv%2FlIOXHccIURZijz58rKZxLCqseHjJ3jsGTx4DkqDEJTYbG69vyj6CE7vqsbSaLp3fmLXiuUgjogq012%2B7cCXNe4Rpp%2BzPKGhEn1v33hw6A7SpRRqVSgDUw74AxPO9%2FqvgPlfpsk%2FL2D6JIjK7RaNKRVpxAUfx8HRzS2%2FeGu29ZK7%2FeEwuP9%2FhBr1oxoRrZP%2B14NbHJwGXpnte%2Fog3gy7m%2BPfuY6jRE5isH9vt1zRxw2FWk%2FLdkn6HKrYs4SxsdiqqSDfOtVS2V%2B54vsA3CdJSezWl6zCYw2MNbu7MIGOqUBRrYryG%2FprbMdHK9I5psl%2BnMO6TRK1296m6B9jVaHa1ep7eWr%2FQKaudChzA17SEm%2FgGX71ZuQhiFUEyXEtko%2BQEHiQsgfGLacLBeSQsH3GIPhiXciBdftbqD2XHaKOoXFozKA%2FXfBTffh2ZmBdKvXkcCoEBoe3xvX%2Fe4Tm%2FV8%2BWaJvzeeTqMJHisHmzapYlhvukuW2ZiFuXqEe5fmCLGAwoilnNcb&X-Amz-Signature=50b55aeadd83de318e5dc03037982db6920c3e681579056bc4f18a18827c820f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFBXAEE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD9KRUINvsKvJHv6Z4Jz1%2F87980afsdvqnG38Fes9lABgIgS2jUgpl2OH4jbQSxcqDbFmkkVs4OvrfTF7b7w3mUk2cq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAV10eu10ojGjWHE%2BSrcA%2FKnd2jxikwG55%2FvQqYkvSufdNYFTdS%2FESwJVNkduev6wBzRqQL%2F6ZWcgeXSwb0RRH4XPVtg3wE0jERtkAJZN6d0BSgzo4FK9ud47FXPd5jHzWJggfsGVKn4iqDnHbLYTOjKATfkAAj4lO4KftfuUXf2Z0bkrlbelA2aksmuUTnYTn8GuoVx8t3dXjC9qh1RJAA1YRxNCaxwuHugsMia03wf3e1h0VYalo3Qp4F%2B5wZ4AohejuFpuVRjLeDGk%2Frj8H0RnmtA9PDVKXDs6YTqZOGkpBFTqHsQ5SKnfQsEij1GvEENPQiWc9qqKP0Zrwfl7l4YfWQbB67w7ckIrmhzHcjdy6Jkv%2FlIOXHccIURZijz58rKZxLCqseHjJ3jsGTx4DkqDEJTYbG69vyj6CE7vqsbSaLp3fmLXiuUgjogq012%2B7cCXNe4Rpp%2BzPKGhEn1v33hw6A7SpRRqVSgDUw74AxPO9%2FqvgPlfpsk%2FL2D6JIjK7RaNKRVpxAUfx8HRzS2%2FeGu29ZK7%2FeEwuP9%2FhBr1oxoRrZP%2B14NbHJwGXpnte%2Fog3gy7m%2BPfuY6jRE5isH9vt1zRxw2FWk%2FLdkn6HKrYs4SxsdiqqSDfOtVS2V%2B54vsA3CdJSezWl6zCYw2MNbu7MIGOqUBRrYryG%2FprbMdHK9I5psl%2BnMO6TRK1296m6B9jVaHa1ep7eWr%2FQKaudChzA17SEm%2FgGX71ZuQhiFUEyXEtko%2BQEHiQsgfGLacLBeSQsH3GIPhiXciBdftbqD2XHaKOoXFozKA%2FXfBTffh2ZmBdKvXkcCoEBoe3xvX%2Fe4Tm%2FV8%2BWaJvzeeTqMJHisHmzapYlhvukuW2ZiFuXqEe5fmCLGAwoilnNcb&X-Amz-Signature=c0799575dd460e957f618549b863bf80686378fa36f818e40c76cf006675e10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFBXAEE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD9KRUINvsKvJHv6Z4Jz1%2F87980afsdvqnG38Fes9lABgIgS2jUgpl2OH4jbQSxcqDbFmkkVs4OvrfTF7b7w3mUk2cq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAV10eu10ojGjWHE%2BSrcA%2FKnd2jxikwG55%2FvQqYkvSufdNYFTdS%2FESwJVNkduev6wBzRqQL%2F6ZWcgeXSwb0RRH4XPVtg3wE0jERtkAJZN6d0BSgzo4FK9ud47FXPd5jHzWJggfsGVKn4iqDnHbLYTOjKATfkAAj4lO4KftfuUXf2Z0bkrlbelA2aksmuUTnYTn8GuoVx8t3dXjC9qh1RJAA1YRxNCaxwuHugsMia03wf3e1h0VYalo3Qp4F%2B5wZ4AohejuFpuVRjLeDGk%2Frj8H0RnmtA9PDVKXDs6YTqZOGkpBFTqHsQ5SKnfQsEij1GvEENPQiWc9qqKP0Zrwfl7l4YfWQbB67w7ckIrmhzHcjdy6Jkv%2FlIOXHccIURZijz58rKZxLCqseHjJ3jsGTx4DkqDEJTYbG69vyj6CE7vqsbSaLp3fmLXiuUgjogq012%2B7cCXNe4Rpp%2BzPKGhEn1v33hw6A7SpRRqVSgDUw74AxPO9%2FqvgPlfpsk%2FL2D6JIjK7RaNKRVpxAUfx8HRzS2%2FeGu29ZK7%2FeEwuP9%2FhBr1oxoRrZP%2B14NbHJwGXpnte%2Fog3gy7m%2BPfuY6jRE5isH9vt1zRxw2FWk%2FLdkn6HKrYs4SxsdiqqSDfOtVS2V%2B54vsA3CdJSezWl6zCYw2MNbu7MIGOqUBRrYryG%2FprbMdHK9I5psl%2BnMO6TRK1296m6B9jVaHa1ep7eWr%2FQKaudChzA17SEm%2FgGX71ZuQhiFUEyXEtko%2BQEHiQsgfGLacLBeSQsH3GIPhiXciBdftbqD2XHaKOoXFozKA%2FXfBTffh2ZmBdKvXkcCoEBoe3xvX%2Fe4Tm%2FV8%2BWaJvzeeTqMJHisHmzapYlhvukuW2ZiFuXqEe5fmCLGAwoilnNcb&X-Amz-Signature=fd0e9b501f9fec398311ce0ce7e80d6c7bf8f84343a0323294744af0de5499a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFBXAEE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD9KRUINvsKvJHv6Z4Jz1%2F87980afsdvqnG38Fes9lABgIgS2jUgpl2OH4jbQSxcqDbFmkkVs4OvrfTF7b7w3mUk2cq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAV10eu10ojGjWHE%2BSrcA%2FKnd2jxikwG55%2FvQqYkvSufdNYFTdS%2FESwJVNkduev6wBzRqQL%2F6ZWcgeXSwb0RRH4XPVtg3wE0jERtkAJZN6d0BSgzo4FK9ud47FXPd5jHzWJggfsGVKn4iqDnHbLYTOjKATfkAAj4lO4KftfuUXf2Z0bkrlbelA2aksmuUTnYTn8GuoVx8t3dXjC9qh1RJAA1YRxNCaxwuHugsMia03wf3e1h0VYalo3Qp4F%2B5wZ4AohejuFpuVRjLeDGk%2Frj8H0RnmtA9PDVKXDs6YTqZOGkpBFTqHsQ5SKnfQsEij1GvEENPQiWc9qqKP0Zrwfl7l4YfWQbB67w7ckIrmhzHcjdy6Jkv%2FlIOXHccIURZijz58rKZxLCqseHjJ3jsGTx4DkqDEJTYbG69vyj6CE7vqsbSaLp3fmLXiuUgjogq012%2B7cCXNe4Rpp%2BzPKGhEn1v33hw6A7SpRRqVSgDUw74AxPO9%2FqvgPlfpsk%2FL2D6JIjK7RaNKRVpxAUfx8HRzS2%2FeGu29ZK7%2FeEwuP9%2FhBr1oxoRrZP%2B14NbHJwGXpnte%2Fog3gy7m%2BPfuY6jRE5isH9vt1zRxw2FWk%2FLdkn6HKrYs4SxsdiqqSDfOtVS2V%2B54vsA3CdJSezWl6zCYw2MNbu7MIGOqUBRrYryG%2FprbMdHK9I5psl%2BnMO6TRK1296m6B9jVaHa1ep7eWr%2FQKaudChzA17SEm%2FgGX71ZuQhiFUEyXEtko%2BQEHiQsgfGLacLBeSQsH3GIPhiXciBdftbqD2XHaKOoXFozKA%2FXfBTffh2ZmBdKvXkcCoEBoe3xvX%2Fe4Tm%2FV8%2BWaJvzeeTqMJHisHmzapYlhvukuW2ZiFuXqEe5fmCLGAwoilnNcb&X-Amz-Signature=91fc08bdc23256309b461c2eea01c0f24122d92f1c6321500879ba00c717fb5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFBXAEE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD9KRUINvsKvJHv6Z4Jz1%2F87980afsdvqnG38Fes9lABgIgS2jUgpl2OH4jbQSxcqDbFmkkVs4OvrfTF7b7w3mUk2cq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAV10eu10ojGjWHE%2BSrcA%2FKnd2jxikwG55%2FvQqYkvSufdNYFTdS%2FESwJVNkduev6wBzRqQL%2F6ZWcgeXSwb0RRH4XPVtg3wE0jERtkAJZN6d0BSgzo4FK9ud47FXPd5jHzWJggfsGVKn4iqDnHbLYTOjKATfkAAj4lO4KftfuUXf2Z0bkrlbelA2aksmuUTnYTn8GuoVx8t3dXjC9qh1RJAA1YRxNCaxwuHugsMia03wf3e1h0VYalo3Qp4F%2B5wZ4AohejuFpuVRjLeDGk%2Frj8H0RnmtA9PDVKXDs6YTqZOGkpBFTqHsQ5SKnfQsEij1GvEENPQiWc9qqKP0Zrwfl7l4YfWQbB67w7ckIrmhzHcjdy6Jkv%2FlIOXHccIURZijz58rKZxLCqseHjJ3jsGTx4DkqDEJTYbG69vyj6CE7vqsbSaLp3fmLXiuUgjogq012%2B7cCXNe4Rpp%2BzPKGhEn1v33hw6A7SpRRqVSgDUw74AxPO9%2FqvgPlfpsk%2FL2D6JIjK7RaNKRVpxAUfx8HRzS2%2FeGu29ZK7%2FeEwuP9%2FhBr1oxoRrZP%2B14NbHJwGXpnte%2Fog3gy7m%2BPfuY6jRE5isH9vt1zRxw2FWk%2FLdkn6HKrYs4SxsdiqqSDfOtVS2V%2B54vsA3CdJSezWl6zCYw2MNbu7MIGOqUBRrYryG%2FprbMdHK9I5psl%2BnMO6TRK1296m6B9jVaHa1ep7eWr%2FQKaudChzA17SEm%2FgGX71ZuQhiFUEyXEtko%2BQEHiQsgfGLacLBeSQsH3GIPhiXciBdftbqD2XHaKOoXFozKA%2FXfBTffh2ZmBdKvXkcCoEBoe3xvX%2Fe4Tm%2FV8%2BWaJvzeeTqMJHisHmzapYlhvukuW2ZiFuXqEe5fmCLGAwoilnNcb&X-Amz-Signature=571dcc32912d7ac2e4e7ba7ed48bb14c1ed4bd6df43802a014a5fa34e0bd1ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFBXAEE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD9KRUINvsKvJHv6Z4Jz1%2F87980afsdvqnG38Fes9lABgIgS2jUgpl2OH4jbQSxcqDbFmkkVs4OvrfTF7b7w3mUk2cq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAV10eu10ojGjWHE%2BSrcA%2FKnd2jxikwG55%2FvQqYkvSufdNYFTdS%2FESwJVNkduev6wBzRqQL%2F6ZWcgeXSwb0RRH4XPVtg3wE0jERtkAJZN6d0BSgzo4FK9ud47FXPd5jHzWJggfsGVKn4iqDnHbLYTOjKATfkAAj4lO4KftfuUXf2Z0bkrlbelA2aksmuUTnYTn8GuoVx8t3dXjC9qh1RJAA1YRxNCaxwuHugsMia03wf3e1h0VYalo3Qp4F%2B5wZ4AohejuFpuVRjLeDGk%2Frj8H0RnmtA9PDVKXDs6YTqZOGkpBFTqHsQ5SKnfQsEij1GvEENPQiWc9qqKP0Zrwfl7l4YfWQbB67w7ckIrmhzHcjdy6Jkv%2FlIOXHccIURZijz58rKZxLCqseHjJ3jsGTx4DkqDEJTYbG69vyj6CE7vqsbSaLp3fmLXiuUgjogq012%2B7cCXNe4Rpp%2BzPKGhEn1v33hw6A7SpRRqVSgDUw74AxPO9%2FqvgPlfpsk%2FL2D6JIjK7RaNKRVpxAUfx8HRzS2%2FeGu29ZK7%2FeEwuP9%2FhBr1oxoRrZP%2B14NbHJwGXpnte%2Fog3gy7m%2BPfuY6jRE5isH9vt1zRxw2FWk%2FLdkn6HKrYs4SxsdiqqSDfOtVS2V%2B54vsA3CdJSezWl6zCYw2MNbu7MIGOqUBRrYryG%2FprbMdHK9I5psl%2BnMO6TRK1296m6B9jVaHa1ep7eWr%2FQKaudChzA17SEm%2FgGX71ZuQhiFUEyXEtko%2BQEHiQsgfGLacLBeSQsH3GIPhiXciBdftbqD2XHaKOoXFozKA%2FXfBTffh2ZmBdKvXkcCoEBoe3xvX%2Fe4Tm%2FV8%2BWaJvzeeTqMJHisHmzapYlhvukuW2ZiFuXqEe5fmCLGAwoilnNcb&X-Amz-Signature=0211088b372d2763f4025dbc45e902c04f34308d109730063e19795350978008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFBXAEE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD9KRUINvsKvJHv6Z4Jz1%2F87980afsdvqnG38Fes9lABgIgS2jUgpl2OH4jbQSxcqDbFmkkVs4OvrfTF7b7w3mUk2cq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAV10eu10ojGjWHE%2BSrcA%2FKnd2jxikwG55%2FvQqYkvSufdNYFTdS%2FESwJVNkduev6wBzRqQL%2F6ZWcgeXSwb0RRH4XPVtg3wE0jERtkAJZN6d0BSgzo4FK9ud47FXPd5jHzWJggfsGVKn4iqDnHbLYTOjKATfkAAj4lO4KftfuUXf2Z0bkrlbelA2aksmuUTnYTn8GuoVx8t3dXjC9qh1RJAA1YRxNCaxwuHugsMia03wf3e1h0VYalo3Qp4F%2B5wZ4AohejuFpuVRjLeDGk%2Frj8H0RnmtA9PDVKXDs6YTqZOGkpBFTqHsQ5SKnfQsEij1GvEENPQiWc9qqKP0Zrwfl7l4YfWQbB67w7ckIrmhzHcjdy6Jkv%2FlIOXHccIURZijz58rKZxLCqseHjJ3jsGTx4DkqDEJTYbG69vyj6CE7vqsbSaLp3fmLXiuUgjogq012%2B7cCXNe4Rpp%2BzPKGhEn1v33hw6A7SpRRqVSgDUw74AxPO9%2FqvgPlfpsk%2FL2D6JIjK7RaNKRVpxAUfx8HRzS2%2FeGu29ZK7%2FeEwuP9%2FhBr1oxoRrZP%2B14NbHJwGXpnte%2Fog3gy7m%2BPfuY6jRE5isH9vt1zRxw2FWk%2FLdkn6HKrYs4SxsdiqqSDfOtVS2V%2B54vsA3CdJSezWl6zCYw2MNbu7MIGOqUBRrYryG%2FprbMdHK9I5psl%2BnMO6TRK1296m6B9jVaHa1ep7eWr%2FQKaudChzA17SEm%2FgGX71ZuQhiFUEyXEtko%2BQEHiQsgfGLacLBeSQsH3GIPhiXciBdftbqD2XHaKOoXFozKA%2FXfBTffh2ZmBdKvXkcCoEBoe3xvX%2Fe4Tm%2FV8%2BWaJvzeeTqMJHisHmzapYlhvukuW2ZiFuXqEe5fmCLGAwoilnNcb&X-Amz-Signature=57aeeb1510a71c6f83d5ba5fdc5cae20146cfbba99f2e038812aba8cfc22224c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
