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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBSHG6A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ZOZfEzlNYQsrUqb%2FaQGr4eKbNkFebHur1p4ZuPlImAiBz8j8dx6pm8e5nncYeTqdl52i4mypW6bgV1DCUJouo1Cr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3bXtppYq6h6co3sfKtwDl%2BgHs8luIOzDXTTUBXhUv%2B0kpehRrUBFInE3jrVLtNjIR49rkltluJc%2FQe6KNw1IaA2n1FSfaEg%2BuGSMwmOkI5pMu9xxs2q679Vpve6RlX77oHj14RFzRAToRW%2BMZ5tEttODjkJ6InYQ%2FHquMyLdMY7xm27L53avpWk2a6NJjQfTRXhNfqaZcHw8BQipA81YpUR5A2fYSR4vJx65QvI6%2BaFx%2Fov1q7HNLoUBrheC3RX5vBtOusivTtGcookae0lA1CKK0IW2JBWw5zL8IgZcUjx4SMEVNZEP3iDYG6Mfy7J1qBEyF%2BWEx%2FtCmiAaDmXLudeJyKHnRLH3XOLwf8HpdKvNNQ6Y5S2gm0GRkqV9oVHtpBcfm6%2B8aeDyMLMjrjKx8z9oQZjv3Sf2iHCHzZSENvuV%2BvanrXINob8nQQxUz08iIhJoSVorFCIgosJJtsattiwInVXR%2Bpb69aFtGCGUessN2SasiVn65mClSSy6VRRrNs9dIPWv9sEtAs%2BMSzD9hapBAiLiZT8f6oQ9L33C0hPwbv7wsFJhyRIc6gXe6avQ1hKezfe7%2FRv%2FBJ6J7FJHS3G803kH9Z%2FCVdKkFn9Fu4c6O8WE25xrPq4glZyqT7gMXOeYJMsu%2BP3BiCww27f3vwY6pgF6nwFrR2zLiE%2BGXCPDX3t%2Bjib7UW%2B9g46KhXUkmRAgPBvBDeflXHI9J3yo0KbeloMS6Ss1CX1KpE%2B6N91kjJ2j6jBoSQsj8x4oURMPkA2DrUf5hXSXm7ik18xAKtD425ZTc4XUlURegbkykJ5RJrCCipcAs%2FTwfd6mokPvofb5vbNyF%2BruMNSzjYXTCKl6opJwavo2WWNzzFMN1yIwoLvJGDX37M%2Bj&X-Amz-Signature=08b9f0981dd86741b49e3bdf97143f48ad73eca44d87dd8e79e2755f9e31ee35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBSHG6A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ZOZfEzlNYQsrUqb%2FaQGr4eKbNkFebHur1p4ZuPlImAiBz8j8dx6pm8e5nncYeTqdl52i4mypW6bgV1DCUJouo1Cr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3bXtppYq6h6co3sfKtwDl%2BgHs8luIOzDXTTUBXhUv%2B0kpehRrUBFInE3jrVLtNjIR49rkltluJc%2FQe6KNw1IaA2n1FSfaEg%2BuGSMwmOkI5pMu9xxs2q679Vpve6RlX77oHj14RFzRAToRW%2BMZ5tEttODjkJ6InYQ%2FHquMyLdMY7xm27L53avpWk2a6NJjQfTRXhNfqaZcHw8BQipA81YpUR5A2fYSR4vJx65QvI6%2BaFx%2Fov1q7HNLoUBrheC3RX5vBtOusivTtGcookae0lA1CKK0IW2JBWw5zL8IgZcUjx4SMEVNZEP3iDYG6Mfy7J1qBEyF%2BWEx%2FtCmiAaDmXLudeJyKHnRLH3XOLwf8HpdKvNNQ6Y5S2gm0GRkqV9oVHtpBcfm6%2B8aeDyMLMjrjKx8z9oQZjv3Sf2iHCHzZSENvuV%2BvanrXINob8nQQxUz08iIhJoSVorFCIgosJJtsattiwInVXR%2Bpb69aFtGCGUessN2SasiVn65mClSSy6VRRrNs9dIPWv9sEtAs%2BMSzD9hapBAiLiZT8f6oQ9L33C0hPwbv7wsFJhyRIc6gXe6avQ1hKezfe7%2FRv%2FBJ6J7FJHS3G803kH9Z%2FCVdKkFn9Fu4c6O8WE25xrPq4glZyqT7gMXOeYJMsu%2BP3BiCww27f3vwY6pgF6nwFrR2zLiE%2BGXCPDX3t%2Bjib7UW%2B9g46KhXUkmRAgPBvBDeflXHI9J3yo0KbeloMS6Ss1CX1KpE%2B6N91kjJ2j6jBoSQsj8x4oURMPkA2DrUf5hXSXm7ik18xAKtD425ZTc4XUlURegbkykJ5RJrCCipcAs%2FTwfd6mokPvofb5vbNyF%2BruMNSzjYXTCKl6opJwavo2WWNzzFMN1yIwoLvJGDX37M%2Bj&X-Amz-Signature=0fc98a4b2ba6118e128f97aa49f3c1fb4a20c1815d04b5887045cde0de8adaed&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBSHG6A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ZOZfEzlNYQsrUqb%2FaQGr4eKbNkFebHur1p4ZuPlImAiBz8j8dx6pm8e5nncYeTqdl52i4mypW6bgV1DCUJouo1Cr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3bXtppYq6h6co3sfKtwDl%2BgHs8luIOzDXTTUBXhUv%2B0kpehRrUBFInE3jrVLtNjIR49rkltluJc%2FQe6KNw1IaA2n1FSfaEg%2BuGSMwmOkI5pMu9xxs2q679Vpve6RlX77oHj14RFzRAToRW%2BMZ5tEttODjkJ6InYQ%2FHquMyLdMY7xm27L53avpWk2a6NJjQfTRXhNfqaZcHw8BQipA81YpUR5A2fYSR4vJx65QvI6%2BaFx%2Fov1q7HNLoUBrheC3RX5vBtOusivTtGcookae0lA1CKK0IW2JBWw5zL8IgZcUjx4SMEVNZEP3iDYG6Mfy7J1qBEyF%2BWEx%2FtCmiAaDmXLudeJyKHnRLH3XOLwf8HpdKvNNQ6Y5S2gm0GRkqV9oVHtpBcfm6%2B8aeDyMLMjrjKx8z9oQZjv3Sf2iHCHzZSENvuV%2BvanrXINob8nQQxUz08iIhJoSVorFCIgosJJtsattiwInVXR%2Bpb69aFtGCGUessN2SasiVn65mClSSy6VRRrNs9dIPWv9sEtAs%2BMSzD9hapBAiLiZT8f6oQ9L33C0hPwbv7wsFJhyRIc6gXe6avQ1hKezfe7%2FRv%2FBJ6J7FJHS3G803kH9Z%2FCVdKkFn9Fu4c6O8WE25xrPq4glZyqT7gMXOeYJMsu%2BP3BiCww27f3vwY6pgF6nwFrR2zLiE%2BGXCPDX3t%2Bjib7UW%2B9g46KhXUkmRAgPBvBDeflXHI9J3yo0KbeloMS6Ss1CX1KpE%2B6N91kjJ2j6jBoSQsj8x4oURMPkA2DrUf5hXSXm7ik18xAKtD425ZTc4XUlURegbkykJ5RJrCCipcAs%2FTwfd6mokPvofb5vbNyF%2BruMNSzjYXTCKl6opJwavo2WWNzzFMN1yIwoLvJGDX37M%2Bj&X-Amz-Signature=771c86a591ab903d1ff22496cb6cc5523ded387bef2c68832f4f64c091888798&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBSHG6A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ZOZfEzlNYQsrUqb%2FaQGr4eKbNkFebHur1p4ZuPlImAiBz8j8dx6pm8e5nncYeTqdl52i4mypW6bgV1DCUJouo1Cr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3bXtppYq6h6co3sfKtwDl%2BgHs8luIOzDXTTUBXhUv%2B0kpehRrUBFInE3jrVLtNjIR49rkltluJc%2FQe6KNw1IaA2n1FSfaEg%2BuGSMwmOkI5pMu9xxs2q679Vpve6RlX77oHj14RFzRAToRW%2BMZ5tEttODjkJ6InYQ%2FHquMyLdMY7xm27L53avpWk2a6NJjQfTRXhNfqaZcHw8BQipA81YpUR5A2fYSR4vJx65QvI6%2BaFx%2Fov1q7HNLoUBrheC3RX5vBtOusivTtGcookae0lA1CKK0IW2JBWw5zL8IgZcUjx4SMEVNZEP3iDYG6Mfy7J1qBEyF%2BWEx%2FtCmiAaDmXLudeJyKHnRLH3XOLwf8HpdKvNNQ6Y5S2gm0GRkqV9oVHtpBcfm6%2B8aeDyMLMjrjKx8z9oQZjv3Sf2iHCHzZSENvuV%2BvanrXINob8nQQxUz08iIhJoSVorFCIgosJJtsattiwInVXR%2Bpb69aFtGCGUessN2SasiVn65mClSSy6VRRrNs9dIPWv9sEtAs%2BMSzD9hapBAiLiZT8f6oQ9L33C0hPwbv7wsFJhyRIc6gXe6avQ1hKezfe7%2FRv%2FBJ6J7FJHS3G803kH9Z%2FCVdKkFn9Fu4c6O8WE25xrPq4glZyqT7gMXOeYJMsu%2BP3BiCww27f3vwY6pgF6nwFrR2zLiE%2BGXCPDX3t%2Bjib7UW%2B9g46KhXUkmRAgPBvBDeflXHI9J3yo0KbeloMS6Ss1CX1KpE%2B6N91kjJ2j6jBoSQsj8x4oURMPkA2DrUf5hXSXm7ik18xAKtD425ZTc4XUlURegbkykJ5RJrCCipcAs%2FTwfd6mokPvofb5vbNyF%2BruMNSzjYXTCKl6opJwavo2WWNzzFMN1yIwoLvJGDX37M%2Bj&X-Amz-Signature=20eb08fc5af4b0dac11f5e60554886bedcbccfea5753d69cfc766b060a749523&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBSHG6A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ZOZfEzlNYQsrUqb%2FaQGr4eKbNkFebHur1p4ZuPlImAiBz8j8dx6pm8e5nncYeTqdl52i4mypW6bgV1DCUJouo1Cr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3bXtppYq6h6co3sfKtwDl%2BgHs8luIOzDXTTUBXhUv%2B0kpehRrUBFInE3jrVLtNjIR49rkltluJc%2FQe6KNw1IaA2n1FSfaEg%2BuGSMwmOkI5pMu9xxs2q679Vpve6RlX77oHj14RFzRAToRW%2BMZ5tEttODjkJ6InYQ%2FHquMyLdMY7xm27L53avpWk2a6NJjQfTRXhNfqaZcHw8BQipA81YpUR5A2fYSR4vJx65QvI6%2BaFx%2Fov1q7HNLoUBrheC3RX5vBtOusivTtGcookae0lA1CKK0IW2JBWw5zL8IgZcUjx4SMEVNZEP3iDYG6Mfy7J1qBEyF%2BWEx%2FtCmiAaDmXLudeJyKHnRLH3XOLwf8HpdKvNNQ6Y5S2gm0GRkqV9oVHtpBcfm6%2B8aeDyMLMjrjKx8z9oQZjv3Sf2iHCHzZSENvuV%2BvanrXINob8nQQxUz08iIhJoSVorFCIgosJJtsattiwInVXR%2Bpb69aFtGCGUessN2SasiVn65mClSSy6VRRrNs9dIPWv9sEtAs%2BMSzD9hapBAiLiZT8f6oQ9L33C0hPwbv7wsFJhyRIc6gXe6avQ1hKezfe7%2FRv%2FBJ6J7FJHS3G803kH9Z%2FCVdKkFn9Fu4c6O8WE25xrPq4glZyqT7gMXOeYJMsu%2BP3BiCww27f3vwY6pgF6nwFrR2zLiE%2BGXCPDX3t%2Bjib7UW%2B9g46KhXUkmRAgPBvBDeflXHI9J3yo0KbeloMS6Ss1CX1KpE%2B6N91kjJ2j6jBoSQsj8x4oURMPkA2DrUf5hXSXm7ik18xAKtD425ZTc4XUlURegbkykJ5RJrCCipcAs%2FTwfd6mokPvofb5vbNyF%2BruMNSzjYXTCKl6opJwavo2WWNzzFMN1yIwoLvJGDX37M%2Bj&X-Amz-Signature=e9b3d442014b7b63be232e2da5b31932e17d36bb5692de67cd724035ef01f01e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBSHG6A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ZOZfEzlNYQsrUqb%2FaQGr4eKbNkFebHur1p4ZuPlImAiBz8j8dx6pm8e5nncYeTqdl52i4mypW6bgV1DCUJouo1Cr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3bXtppYq6h6co3sfKtwDl%2BgHs8luIOzDXTTUBXhUv%2B0kpehRrUBFInE3jrVLtNjIR49rkltluJc%2FQe6KNw1IaA2n1FSfaEg%2BuGSMwmOkI5pMu9xxs2q679Vpve6RlX77oHj14RFzRAToRW%2BMZ5tEttODjkJ6InYQ%2FHquMyLdMY7xm27L53avpWk2a6NJjQfTRXhNfqaZcHw8BQipA81YpUR5A2fYSR4vJx65QvI6%2BaFx%2Fov1q7HNLoUBrheC3RX5vBtOusivTtGcookae0lA1CKK0IW2JBWw5zL8IgZcUjx4SMEVNZEP3iDYG6Mfy7J1qBEyF%2BWEx%2FtCmiAaDmXLudeJyKHnRLH3XOLwf8HpdKvNNQ6Y5S2gm0GRkqV9oVHtpBcfm6%2B8aeDyMLMjrjKx8z9oQZjv3Sf2iHCHzZSENvuV%2BvanrXINob8nQQxUz08iIhJoSVorFCIgosJJtsattiwInVXR%2Bpb69aFtGCGUessN2SasiVn65mClSSy6VRRrNs9dIPWv9sEtAs%2BMSzD9hapBAiLiZT8f6oQ9L33C0hPwbv7wsFJhyRIc6gXe6avQ1hKezfe7%2FRv%2FBJ6J7FJHS3G803kH9Z%2FCVdKkFn9Fu4c6O8WE25xrPq4glZyqT7gMXOeYJMsu%2BP3BiCww27f3vwY6pgF6nwFrR2zLiE%2BGXCPDX3t%2Bjib7UW%2B9g46KhXUkmRAgPBvBDeflXHI9J3yo0KbeloMS6Ss1CX1KpE%2B6N91kjJ2j6jBoSQsj8x4oURMPkA2DrUf5hXSXm7ik18xAKtD425ZTc4XUlURegbkykJ5RJrCCipcAs%2FTwfd6mokPvofb5vbNyF%2BruMNSzjYXTCKl6opJwavo2WWNzzFMN1yIwoLvJGDX37M%2Bj&X-Amz-Signature=4c34799c880c7fb584f74c9064becdb567c5dd3b74e6daef608c652850df58a4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBSHG6A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ZOZfEzlNYQsrUqb%2FaQGr4eKbNkFebHur1p4ZuPlImAiBz8j8dx6pm8e5nncYeTqdl52i4mypW6bgV1DCUJouo1Cr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3bXtppYq6h6co3sfKtwDl%2BgHs8luIOzDXTTUBXhUv%2B0kpehRrUBFInE3jrVLtNjIR49rkltluJc%2FQe6KNw1IaA2n1FSfaEg%2BuGSMwmOkI5pMu9xxs2q679Vpve6RlX77oHj14RFzRAToRW%2BMZ5tEttODjkJ6InYQ%2FHquMyLdMY7xm27L53avpWk2a6NJjQfTRXhNfqaZcHw8BQipA81YpUR5A2fYSR4vJx65QvI6%2BaFx%2Fov1q7HNLoUBrheC3RX5vBtOusivTtGcookae0lA1CKK0IW2JBWw5zL8IgZcUjx4SMEVNZEP3iDYG6Mfy7J1qBEyF%2BWEx%2FtCmiAaDmXLudeJyKHnRLH3XOLwf8HpdKvNNQ6Y5S2gm0GRkqV9oVHtpBcfm6%2B8aeDyMLMjrjKx8z9oQZjv3Sf2iHCHzZSENvuV%2BvanrXINob8nQQxUz08iIhJoSVorFCIgosJJtsattiwInVXR%2Bpb69aFtGCGUessN2SasiVn65mClSSy6VRRrNs9dIPWv9sEtAs%2BMSzD9hapBAiLiZT8f6oQ9L33C0hPwbv7wsFJhyRIc6gXe6avQ1hKezfe7%2FRv%2FBJ6J7FJHS3G803kH9Z%2FCVdKkFn9Fu4c6O8WE25xrPq4glZyqT7gMXOeYJMsu%2BP3BiCww27f3vwY6pgF6nwFrR2zLiE%2BGXCPDX3t%2Bjib7UW%2B9g46KhXUkmRAgPBvBDeflXHI9J3yo0KbeloMS6Ss1CX1KpE%2B6N91kjJ2j6jBoSQsj8x4oURMPkA2DrUf5hXSXm7ik18xAKtD425ZTc4XUlURegbkykJ5RJrCCipcAs%2FTwfd6mokPvofb5vbNyF%2BruMNSzjYXTCKl6opJwavo2WWNzzFMN1yIwoLvJGDX37M%2Bj&X-Amz-Signature=1150dfc66316a94c197bb119a57f503e79926c84eb1c90f9e169bc5e0ff44898&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
