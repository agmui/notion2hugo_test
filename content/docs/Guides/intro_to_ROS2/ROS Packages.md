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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L2KD4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Z8ZZzHZfpBT1zZFVC3657XCu29kYnuzETlLFw39%2BQAIgcmPybewZfuSdWwnwNpZWKzvALCAGIAt7i0L4xjwSx9AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL45hc%2ByTyeeaIi00CrcAxJ9eJEfEnem1Vq%2FA8IwvBtq9OXPAFDXYnipHYhA6UmIE957CR79bguEgHi2xKEHNc27f8Cowie3zYuwv5do1HQtXy6K%2BlyTImCSxEA3rEL182KfA0MbpqAJjcrHRBqXfx4MvrsrRq1dp%2Fxgv9LEkfBuvoEY%2Fvl2AZFE5Ng5jU0JNUdhL5yX%2Brwou8u3D9GM1N9LAUqPW52wLOtlHiy1Ar6OgYyx7Od5asTRC7hXi7zk1N0IF6lTA4pJwSViErssTTRDc8bjdEVzvTybDFQUav0FadPEPJD7jzddbUb1BQLCpltY44T8VYr39Iyd2xFLQLcP5DqXN%2BDvtWGI3ayzvi0GeUjVKGT97oy8zak5VrdLhBhYMH8YUr8a4WCyw4p8Nb%2F0OesX1nuvQJUHhA3G8EFP7tYtfwrgndHWOs1cMUCh%2FsqdGcL9rlGFedkb%2FTiE5o5v%2FGr4JGnNn4uSgKjeCcgLhjdYx7%2Fl%2B%2BDhmsxt3G6wT2n4%2FC9V3Aseg9D3K7L%2FHgxLHWmLwZXCQISyUJ94m5Ei4BokmBtkp0I%2F9smGZ3eEl36TU1UbXGqQcf6%2By8ZII4RFJWFLbCESIRfnPqF%2Bu2EGwXxTYlWJWQGuN5AXPrIVM3szVYo8xFMGj5oZMOar77wGOqUBvdp89r%2BduqYvh3OVeP4iavRXfKUcUiHFwgtQmIOu9CV67mV9x3y11JiPU%2Bu3SA2KV0eqzaA3b9peugL9Btf8n7Uv4X1AfEgpMlVYug9TxpNFHZzScWHtVc6MIzrODJlcBh8ElIq9cY1aUMrZLLsQozoCS87ytP5NJPQfLGVXVD1UFabnVeiq%2BemR4OM85rHnDxWtckCaH%2FN9Dng%2BP1dPHHRb8MwP&X-Amz-Signature=6eb602ac749c9f8fde67fe494a0bf1583f74e5bb679969407bbab9614cc3bdcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L2KD4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Z8ZZzHZfpBT1zZFVC3657XCu29kYnuzETlLFw39%2BQAIgcmPybewZfuSdWwnwNpZWKzvALCAGIAt7i0L4xjwSx9AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL45hc%2ByTyeeaIi00CrcAxJ9eJEfEnem1Vq%2FA8IwvBtq9OXPAFDXYnipHYhA6UmIE957CR79bguEgHi2xKEHNc27f8Cowie3zYuwv5do1HQtXy6K%2BlyTImCSxEA3rEL182KfA0MbpqAJjcrHRBqXfx4MvrsrRq1dp%2Fxgv9LEkfBuvoEY%2Fvl2AZFE5Ng5jU0JNUdhL5yX%2Brwou8u3D9GM1N9LAUqPW52wLOtlHiy1Ar6OgYyx7Od5asTRC7hXi7zk1N0IF6lTA4pJwSViErssTTRDc8bjdEVzvTybDFQUav0FadPEPJD7jzddbUb1BQLCpltY44T8VYr39Iyd2xFLQLcP5DqXN%2BDvtWGI3ayzvi0GeUjVKGT97oy8zak5VrdLhBhYMH8YUr8a4WCyw4p8Nb%2F0OesX1nuvQJUHhA3G8EFP7tYtfwrgndHWOs1cMUCh%2FsqdGcL9rlGFedkb%2FTiE5o5v%2FGr4JGnNn4uSgKjeCcgLhjdYx7%2Fl%2B%2BDhmsxt3G6wT2n4%2FC9V3Aseg9D3K7L%2FHgxLHWmLwZXCQISyUJ94m5Ei4BokmBtkp0I%2F9smGZ3eEl36TU1UbXGqQcf6%2By8ZII4RFJWFLbCESIRfnPqF%2Bu2EGwXxTYlWJWQGuN5AXPrIVM3szVYo8xFMGj5oZMOar77wGOqUBvdp89r%2BduqYvh3OVeP4iavRXfKUcUiHFwgtQmIOu9CV67mV9x3y11JiPU%2Bu3SA2KV0eqzaA3b9peugL9Btf8n7Uv4X1AfEgpMlVYug9TxpNFHZzScWHtVc6MIzrODJlcBh8ElIq9cY1aUMrZLLsQozoCS87ytP5NJPQfLGVXVD1UFabnVeiq%2BemR4OM85rHnDxWtckCaH%2FN9Dng%2BP1dPHHRb8MwP&X-Amz-Signature=a42c06ee64168a823c6d2e0cf3a90594ba600fa0b7063714d0776855a757980f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L2KD4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Z8ZZzHZfpBT1zZFVC3657XCu29kYnuzETlLFw39%2BQAIgcmPybewZfuSdWwnwNpZWKzvALCAGIAt7i0L4xjwSx9AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL45hc%2ByTyeeaIi00CrcAxJ9eJEfEnem1Vq%2FA8IwvBtq9OXPAFDXYnipHYhA6UmIE957CR79bguEgHi2xKEHNc27f8Cowie3zYuwv5do1HQtXy6K%2BlyTImCSxEA3rEL182KfA0MbpqAJjcrHRBqXfx4MvrsrRq1dp%2Fxgv9LEkfBuvoEY%2Fvl2AZFE5Ng5jU0JNUdhL5yX%2Brwou8u3D9GM1N9LAUqPW52wLOtlHiy1Ar6OgYyx7Od5asTRC7hXi7zk1N0IF6lTA4pJwSViErssTTRDc8bjdEVzvTybDFQUav0FadPEPJD7jzddbUb1BQLCpltY44T8VYr39Iyd2xFLQLcP5DqXN%2BDvtWGI3ayzvi0GeUjVKGT97oy8zak5VrdLhBhYMH8YUr8a4WCyw4p8Nb%2F0OesX1nuvQJUHhA3G8EFP7tYtfwrgndHWOs1cMUCh%2FsqdGcL9rlGFedkb%2FTiE5o5v%2FGr4JGnNn4uSgKjeCcgLhjdYx7%2Fl%2B%2BDhmsxt3G6wT2n4%2FC9V3Aseg9D3K7L%2FHgxLHWmLwZXCQISyUJ94m5Ei4BokmBtkp0I%2F9smGZ3eEl36TU1UbXGqQcf6%2By8ZII4RFJWFLbCESIRfnPqF%2Bu2EGwXxTYlWJWQGuN5AXPrIVM3szVYo8xFMGj5oZMOar77wGOqUBvdp89r%2BduqYvh3OVeP4iavRXfKUcUiHFwgtQmIOu9CV67mV9x3y11JiPU%2Bu3SA2KV0eqzaA3b9peugL9Btf8n7Uv4X1AfEgpMlVYug9TxpNFHZzScWHtVc6MIzrODJlcBh8ElIq9cY1aUMrZLLsQozoCS87ytP5NJPQfLGVXVD1UFabnVeiq%2BemR4OM85rHnDxWtckCaH%2FN9Dng%2BP1dPHHRb8MwP&X-Amz-Signature=1562478da3fe83ce65dce221091b6caf97f62dd0df6c5395d712901b38abfca8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L2KD4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Z8ZZzHZfpBT1zZFVC3657XCu29kYnuzETlLFw39%2BQAIgcmPybewZfuSdWwnwNpZWKzvALCAGIAt7i0L4xjwSx9AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL45hc%2ByTyeeaIi00CrcAxJ9eJEfEnem1Vq%2FA8IwvBtq9OXPAFDXYnipHYhA6UmIE957CR79bguEgHi2xKEHNc27f8Cowie3zYuwv5do1HQtXy6K%2BlyTImCSxEA3rEL182KfA0MbpqAJjcrHRBqXfx4MvrsrRq1dp%2Fxgv9LEkfBuvoEY%2Fvl2AZFE5Ng5jU0JNUdhL5yX%2Brwou8u3D9GM1N9LAUqPW52wLOtlHiy1Ar6OgYyx7Od5asTRC7hXi7zk1N0IF6lTA4pJwSViErssTTRDc8bjdEVzvTybDFQUav0FadPEPJD7jzddbUb1BQLCpltY44T8VYr39Iyd2xFLQLcP5DqXN%2BDvtWGI3ayzvi0GeUjVKGT97oy8zak5VrdLhBhYMH8YUr8a4WCyw4p8Nb%2F0OesX1nuvQJUHhA3G8EFP7tYtfwrgndHWOs1cMUCh%2FsqdGcL9rlGFedkb%2FTiE5o5v%2FGr4JGnNn4uSgKjeCcgLhjdYx7%2Fl%2B%2BDhmsxt3G6wT2n4%2FC9V3Aseg9D3K7L%2FHgxLHWmLwZXCQISyUJ94m5Ei4BokmBtkp0I%2F9smGZ3eEl36TU1UbXGqQcf6%2By8ZII4RFJWFLbCESIRfnPqF%2Bu2EGwXxTYlWJWQGuN5AXPrIVM3szVYo8xFMGj5oZMOar77wGOqUBvdp89r%2BduqYvh3OVeP4iavRXfKUcUiHFwgtQmIOu9CV67mV9x3y11JiPU%2Bu3SA2KV0eqzaA3b9peugL9Btf8n7Uv4X1AfEgpMlVYug9TxpNFHZzScWHtVc6MIzrODJlcBh8ElIq9cY1aUMrZLLsQozoCS87ytP5NJPQfLGVXVD1UFabnVeiq%2BemR4OM85rHnDxWtckCaH%2FN9Dng%2BP1dPHHRb8MwP&X-Amz-Signature=98ae088a0cc2d371e826d8a1500ece73a9f61c0782e0a2e7a4ebf1c65d1e94d5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L2KD4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Z8ZZzHZfpBT1zZFVC3657XCu29kYnuzETlLFw39%2BQAIgcmPybewZfuSdWwnwNpZWKzvALCAGIAt7i0L4xjwSx9AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL45hc%2ByTyeeaIi00CrcAxJ9eJEfEnem1Vq%2FA8IwvBtq9OXPAFDXYnipHYhA6UmIE957CR79bguEgHi2xKEHNc27f8Cowie3zYuwv5do1HQtXy6K%2BlyTImCSxEA3rEL182KfA0MbpqAJjcrHRBqXfx4MvrsrRq1dp%2Fxgv9LEkfBuvoEY%2Fvl2AZFE5Ng5jU0JNUdhL5yX%2Brwou8u3D9GM1N9LAUqPW52wLOtlHiy1Ar6OgYyx7Od5asTRC7hXi7zk1N0IF6lTA4pJwSViErssTTRDc8bjdEVzvTybDFQUav0FadPEPJD7jzddbUb1BQLCpltY44T8VYr39Iyd2xFLQLcP5DqXN%2BDvtWGI3ayzvi0GeUjVKGT97oy8zak5VrdLhBhYMH8YUr8a4WCyw4p8Nb%2F0OesX1nuvQJUHhA3G8EFP7tYtfwrgndHWOs1cMUCh%2FsqdGcL9rlGFedkb%2FTiE5o5v%2FGr4JGnNn4uSgKjeCcgLhjdYx7%2Fl%2B%2BDhmsxt3G6wT2n4%2FC9V3Aseg9D3K7L%2FHgxLHWmLwZXCQISyUJ94m5Ei4BokmBtkp0I%2F9smGZ3eEl36TU1UbXGqQcf6%2By8ZII4RFJWFLbCESIRfnPqF%2Bu2EGwXxTYlWJWQGuN5AXPrIVM3szVYo8xFMGj5oZMOar77wGOqUBvdp89r%2BduqYvh3OVeP4iavRXfKUcUiHFwgtQmIOu9CV67mV9x3y11JiPU%2Bu3SA2KV0eqzaA3b9peugL9Btf8n7Uv4X1AfEgpMlVYug9TxpNFHZzScWHtVc6MIzrODJlcBh8ElIq9cY1aUMrZLLsQozoCS87ytP5NJPQfLGVXVD1UFabnVeiq%2BemR4OM85rHnDxWtckCaH%2FN9Dng%2BP1dPHHRb8MwP&X-Amz-Signature=ee4bca76574b26cf361a1ddc375083e80f55560b4780ac4d3e71f3d81e5df145&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L2KD4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Z8ZZzHZfpBT1zZFVC3657XCu29kYnuzETlLFw39%2BQAIgcmPybewZfuSdWwnwNpZWKzvALCAGIAt7i0L4xjwSx9AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL45hc%2ByTyeeaIi00CrcAxJ9eJEfEnem1Vq%2FA8IwvBtq9OXPAFDXYnipHYhA6UmIE957CR79bguEgHi2xKEHNc27f8Cowie3zYuwv5do1HQtXy6K%2BlyTImCSxEA3rEL182KfA0MbpqAJjcrHRBqXfx4MvrsrRq1dp%2Fxgv9LEkfBuvoEY%2Fvl2AZFE5Ng5jU0JNUdhL5yX%2Brwou8u3D9GM1N9LAUqPW52wLOtlHiy1Ar6OgYyx7Od5asTRC7hXi7zk1N0IF6lTA4pJwSViErssTTRDc8bjdEVzvTybDFQUav0FadPEPJD7jzddbUb1BQLCpltY44T8VYr39Iyd2xFLQLcP5DqXN%2BDvtWGI3ayzvi0GeUjVKGT97oy8zak5VrdLhBhYMH8YUr8a4WCyw4p8Nb%2F0OesX1nuvQJUHhA3G8EFP7tYtfwrgndHWOs1cMUCh%2FsqdGcL9rlGFedkb%2FTiE5o5v%2FGr4JGnNn4uSgKjeCcgLhjdYx7%2Fl%2B%2BDhmsxt3G6wT2n4%2FC9V3Aseg9D3K7L%2FHgxLHWmLwZXCQISyUJ94m5Ei4BokmBtkp0I%2F9smGZ3eEl36TU1UbXGqQcf6%2By8ZII4RFJWFLbCESIRfnPqF%2Bu2EGwXxTYlWJWQGuN5AXPrIVM3szVYo8xFMGj5oZMOar77wGOqUBvdp89r%2BduqYvh3OVeP4iavRXfKUcUiHFwgtQmIOu9CV67mV9x3y11JiPU%2Bu3SA2KV0eqzaA3b9peugL9Btf8n7Uv4X1AfEgpMlVYug9TxpNFHZzScWHtVc6MIzrODJlcBh8ElIq9cY1aUMrZLLsQozoCS87ytP5NJPQfLGVXVD1UFabnVeiq%2BemR4OM85rHnDxWtckCaH%2FN9Dng%2BP1dPHHRb8MwP&X-Amz-Signature=3f2a6a86c286a48cd1a90ff7efcce63346a718b077add4254681e1d897022f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L2KD4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Z8ZZzHZfpBT1zZFVC3657XCu29kYnuzETlLFw39%2BQAIgcmPybewZfuSdWwnwNpZWKzvALCAGIAt7i0L4xjwSx9AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL45hc%2ByTyeeaIi00CrcAxJ9eJEfEnem1Vq%2FA8IwvBtq9OXPAFDXYnipHYhA6UmIE957CR79bguEgHi2xKEHNc27f8Cowie3zYuwv5do1HQtXy6K%2BlyTImCSxEA3rEL182KfA0MbpqAJjcrHRBqXfx4MvrsrRq1dp%2Fxgv9LEkfBuvoEY%2Fvl2AZFE5Ng5jU0JNUdhL5yX%2Brwou8u3D9GM1N9LAUqPW52wLOtlHiy1Ar6OgYyx7Od5asTRC7hXi7zk1N0IF6lTA4pJwSViErssTTRDc8bjdEVzvTybDFQUav0FadPEPJD7jzddbUb1BQLCpltY44T8VYr39Iyd2xFLQLcP5DqXN%2BDvtWGI3ayzvi0GeUjVKGT97oy8zak5VrdLhBhYMH8YUr8a4WCyw4p8Nb%2F0OesX1nuvQJUHhA3G8EFP7tYtfwrgndHWOs1cMUCh%2FsqdGcL9rlGFedkb%2FTiE5o5v%2FGr4JGnNn4uSgKjeCcgLhjdYx7%2Fl%2B%2BDhmsxt3G6wT2n4%2FC9V3Aseg9D3K7L%2FHgxLHWmLwZXCQISyUJ94m5Ei4BokmBtkp0I%2F9smGZ3eEl36TU1UbXGqQcf6%2By8ZII4RFJWFLbCESIRfnPqF%2Bu2EGwXxTYlWJWQGuN5AXPrIVM3szVYo8xFMGj5oZMOar77wGOqUBvdp89r%2BduqYvh3OVeP4iavRXfKUcUiHFwgtQmIOu9CV67mV9x3y11JiPU%2Bu3SA2KV0eqzaA3b9peugL9Btf8n7Uv4X1AfEgpMlVYug9TxpNFHZzScWHtVc6MIzrODJlcBh8ElIq9cY1aUMrZLLsQozoCS87ytP5NJPQfLGVXVD1UFabnVeiq%2BemR4OM85rHnDxWtckCaH%2FN9Dng%2BP1dPHHRb8MwP&X-Amz-Signature=1d70e1fe0576e344e4238e37e7fa5694228dbb6eb1622e0da24ca2ded216b1a2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
