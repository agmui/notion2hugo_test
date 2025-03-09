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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6T4GEL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCQoVEcG2PQ7mRbweFk59Frit%2FyGuCw1AbsDiGa%2BckFhgIgcknysPxb9VH2bxIUhFwYatq%2B5GfNaTAxaRIW%2Bzv5EFAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAYAD6OqgDLaI1atPCrcAyR2pv4H04GNQtx5l2s0pp6nW07ch1PfRm%2B7ddiCsunAW17dYgkuXM64Af2bnDmt4PS59sVyPhUIZUdMx%2BZf%2FnICOGm8sGrK3gtY9IUbGrcsTOK0AzeJthSxdq77TbegsNNEEBYkPUbqT8MAy5KwUycfVKZgakz0TK5iSLyeu%2F5mNY7WyalRWlrZDpTSGCr3QDByZH7uag%2FwhpQ2J87KBlUSkyFsefwauXIRx2bfYsyot0TABB71YBhJLjRT2FA%2F5r2FLYHUc4XhVNZnj4eLvCbkvCgjTBY6K9XDNzUU0wpkO9%2BSB0AUvLhkguXjToZOL0ErFGJ8XSAVOaCj%2FBIq2z%2FbmhkG30XYTxIr4C9we6uYuKhvtFDkgHtpS1y27lco%2BwUVewRCHzzi8Sr2MllTf24p8%2F9Op1JbFBOzx7i2aVQMk7vp5ByIf6UyNaKFbHTeMMi48%2BEp8BDc17DzywTaNFqudX4u5IfY1SC0sADEArW5dPBD%2FdR8HRT9kGptXF7tpskDFXtTMoKPqhOaGJaTXFUQMEe%2BR4SFbj0QrOCPZFq033agMuV9rQYerN00Z396GKXEibm5D17EYTCxnxXzex%2F43KOYFsQRJ16k0tloqihtODBrZRcHZuIHQXmZMPXrtL4GOqUBOB1JJQYnlxbiUMZJRXxmu1BEbYCkSBlTxAiuuhDbx1ncsgjR%2BAkEOEyeC%2BTVH2UKrYED5nWi13QDwDmKq4ixyHsiiyLY6H3kRLnONzXbBKI7qYE%2FETPrAA2v5rGrJ3VodOXasR93vmxZxR6lkPrc8Fmb7Ht757rRMQRAGelgM%2FdeZNCBIvAMuGtOVx5VzVSvoJiJyKEfEI%2Bc95RE7v27r6SqhPQi&X-Amz-Signature=f3d1078062cbf071b1c665ba7aa5e6b57a30131ab14f6fb98bce0a473c27267a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6T4GEL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCQoVEcG2PQ7mRbweFk59Frit%2FyGuCw1AbsDiGa%2BckFhgIgcknysPxb9VH2bxIUhFwYatq%2B5GfNaTAxaRIW%2Bzv5EFAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAYAD6OqgDLaI1atPCrcAyR2pv4H04GNQtx5l2s0pp6nW07ch1PfRm%2B7ddiCsunAW17dYgkuXM64Af2bnDmt4PS59sVyPhUIZUdMx%2BZf%2FnICOGm8sGrK3gtY9IUbGrcsTOK0AzeJthSxdq77TbegsNNEEBYkPUbqT8MAy5KwUycfVKZgakz0TK5iSLyeu%2F5mNY7WyalRWlrZDpTSGCr3QDByZH7uag%2FwhpQ2J87KBlUSkyFsefwauXIRx2bfYsyot0TABB71YBhJLjRT2FA%2F5r2FLYHUc4XhVNZnj4eLvCbkvCgjTBY6K9XDNzUU0wpkO9%2BSB0AUvLhkguXjToZOL0ErFGJ8XSAVOaCj%2FBIq2z%2FbmhkG30XYTxIr4C9we6uYuKhvtFDkgHtpS1y27lco%2BwUVewRCHzzi8Sr2MllTf24p8%2F9Op1JbFBOzx7i2aVQMk7vp5ByIf6UyNaKFbHTeMMi48%2BEp8BDc17DzywTaNFqudX4u5IfY1SC0sADEArW5dPBD%2FdR8HRT9kGptXF7tpskDFXtTMoKPqhOaGJaTXFUQMEe%2BR4SFbj0QrOCPZFq033agMuV9rQYerN00Z396GKXEibm5D17EYTCxnxXzex%2F43KOYFsQRJ16k0tloqihtODBrZRcHZuIHQXmZMPXrtL4GOqUBOB1JJQYnlxbiUMZJRXxmu1BEbYCkSBlTxAiuuhDbx1ncsgjR%2BAkEOEyeC%2BTVH2UKrYED5nWi13QDwDmKq4ixyHsiiyLY6H3kRLnONzXbBKI7qYE%2FETPrAA2v5rGrJ3VodOXasR93vmxZxR6lkPrc8Fmb7Ht757rRMQRAGelgM%2FdeZNCBIvAMuGtOVx5VzVSvoJiJyKEfEI%2Bc95RE7v27r6SqhPQi&X-Amz-Signature=63ecea49ad6387ab3d8b3b0a70a3cb5a03fa05811cc14105e1e44993d0f583bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6T4GEL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCQoVEcG2PQ7mRbweFk59Frit%2FyGuCw1AbsDiGa%2BckFhgIgcknysPxb9VH2bxIUhFwYatq%2B5GfNaTAxaRIW%2Bzv5EFAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAYAD6OqgDLaI1atPCrcAyR2pv4H04GNQtx5l2s0pp6nW07ch1PfRm%2B7ddiCsunAW17dYgkuXM64Af2bnDmt4PS59sVyPhUIZUdMx%2BZf%2FnICOGm8sGrK3gtY9IUbGrcsTOK0AzeJthSxdq77TbegsNNEEBYkPUbqT8MAy5KwUycfVKZgakz0TK5iSLyeu%2F5mNY7WyalRWlrZDpTSGCr3QDByZH7uag%2FwhpQ2J87KBlUSkyFsefwauXIRx2bfYsyot0TABB71YBhJLjRT2FA%2F5r2FLYHUc4XhVNZnj4eLvCbkvCgjTBY6K9XDNzUU0wpkO9%2BSB0AUvLhkguXjToZOL0ErFGJ8XSAVOaCj%2FBIq2z%2FbmhkG30XYTxIr4C9we6uYuKhvtFDkgHtpS1y27lco%2BwUVewRCHzzi8Sr2MllTf24p8%2F9Op1JbFBOzx7i2aVQMk7vp5ByIf6UyNaKFbHTeMMi48%2BEp8BDc17DzywTaNFqudX4u5IfY1SC0sADEArW5dPBD%2FdR8HRT9kGptXF7tpskDFXtTMoKPqhOaGJaTXFUQMEe%2BR4SFbj0QrOCPZFq033agMuV9rQYerN00Z396GKXEibm5D17EYTCxnxXzex%2F43KOYFsQRJ16k0tloqihtODBrZRcHZuIHQXmZMPXrtL4GOqUBOB1JJQYnlxbiUMZJRXxmu1BEbYCkSBlTxAiuuhDbx1ncsgjR%2BAkEOEyeC%2BTVH2UKrYED5nWi13QDwDmKq4ixyHsiiyLY6H3kRLnONzXbBKI7qYE%2FETPrAA2v5rGrJ3VodOXasR93vmxZxR6lkPrc8Fmb7Ht757rRMQRAGelgM%2FdeZNCBIvAMuGtOVx5VzVSvoJiJyKEfEI%2Bc95RE7v27r6SqhPQi&X-Amz-Signature=4c3d249c4e8a36b8d648a138057447ca7974f2dc36aa7dd2ca338a1e591e60d2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6T4GEL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCQoVEcG2PQ7mRbweFk59Frit%2FyGuCw1AbsDiGa%2BckFhgIgcknysPxb9VH2bxIUhFwYatq%2B5GfNaTAxaRIW%2Bzv5EFAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAYAD6OqgDLaI1atPCrcAyR2pv4H04GNQtx5l2s0pp6nW07ch1PfRm%2B7ddiCsunAW17dYgkuXM64Af2bnDmt4PS59sVyPhUIZUdMx%2BZf%2FnICOGm8sGrK3gtY9IUbGrcsTOK0AzeJthSxdq77TbegsNNEEBYkPUbqT8MAy5KwUycfVKZgakz0TK5iSLyeu%2F5mNY7WyalRWlrZDpTSGCr3QDByZH7uag%2FwhpQ2J87KBlUSkyFsefwauXIRx2bfYsyot0TABB71YBhJLjRT2FA%2F5r2FLYHUc4XhVNZnj4eLvCbkvCgjTBY6K9XDNzUU0wpkO9%2BSB0AUvLhkguXjToZOL0ErFGJ8XSAVOaCj%2FBIq2z%2FbmhkG30XYTxIr4C9we6uYuKhvtFDkgHtpS1y27lco%2BwUVewRCHzzi8Sr2MllTf24p8%2F9Op1JbFBOzx7i2aVQMk7vp5ByIf6UyNaKFbHTeMMi48%2BEp8BDc17DzywTaNFqudX4u5IfY1SC0sADEArW5dPBD%2FdR8HRT9kGptXF7tpskDFXtTMoKPqhOaGJaTXFUQMEe%2BR4SFbj0QrOCPZFq033agMuV9rQYerN00Z396GKXEibm5D17EYTCxnxXzex%2F43KOYFsQRJ16k0tloqihtODBrZRcHZuIHQXmZMPXrtL4GOqUBOB1JJQYnlxbiUMZJRXxmu1BEbYCkSBlTxAiuuhDbx1ncsgjR%2BAkEOEyeC%2BTVH2UKrYED5nWi13QDwDmKq4ixyHsiiyLY6H3kRLnONzXbBKI7qYE%2FETPrAA2v5rGrJ3VodOXasR93vmxZxR6lkPrc8Fmb7Ht757rRMQRAGelgM%2FdeZNCBIvAMuGtOVx5VzVSvoJiJyKEfEI%2Bc95RE7v27r6SqhPQi&X-Amz-Signature=21ffb8274a32f7d3c7275a052cb7a419be5eb87f4813b240b2ef54d5191755e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6T4GEL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCQoVEcG2PQ7mRbweFk59Frit%2FyGuCw1AbsDiGa%2BckFhgIgcknysPxb9VH2bxIUhFwYatq%2B5GfNaTAxaRIW%2Bzv5EFAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAYAD6OqgDLaI1atPCrcAyR2pv4H04GNQtx5l2s0pp6nW07ch1PfRm%2B7ddiCsunAW17dYgkuXM64Af2bnDmt4PS59sVyPhUIZUdMx%2BZf%2FnICOGm8sGrK3gtY9IUbGrcsTOK0AzeJthSxdq77TbegsNNEEBYkPUbqT8MAy5KwUycfVKZgakz0TK5iSLyeu%2F5mNY7WyalRWlrZDpTSGCr3QDByZH7uag%2FwhpQ2J87KBlUSkyFsefwauXIRx2bfYsyot0TABB71YBhJLjRT2FA%2F5r2FLYHUc4XhVNZnj4eLvCbkvCgjTBY6K9XDNzUU0wpkO9%2BSB0AUvLhkguXjToZOL0ErFGJ8XSAVOaCj%2FBIq2z%2FbmhkG30XYTxIr4C9we6uYuKhvtFDkgHtpS1y27lco%2BwUVewRCHzzi8Sr2MllTf24p8%2F9Op1JbFBOzx7i2aVQMk7vp5ByIf6UyNaKFbHTeMMi48%2BEp8BDc17DzywTaNFqudX4u5IfY1SC0sADEArW5dPBD%2FdR8HRT9kGptXF7tpskDFXtTMoKPqhOaGJaTXFUQMEe%2BR4SFbj0QrOCPZFq033agMuV9rQYerN00Z396GKXEibm5D17EYTCxnxXzex%2F43KOYFsQRJ16k0tloqihtODBrZRcHZuIHQXmZMPXrtL4GOqUBOB1JJQYnlxbiUMZJRXxmu1BEbYCkSBlTxAiuuhDbx1ncsgjR%2BAkEOEyeC%2BTVH2UKrYED5nWi13QDwDmKq4ixyHsiiyLY6H3kRLnONzXbBKI7qYE%2FETPrAA2v5rGrJ3VodOXasR93vmxZxR6lkPrc8Fmb7Ht757rRMQRAGelgM%2FdeZNCBIvAMuGtOVx5VzVSvoJiJyKEfEI%2Bc95RE7v27r6SqhPQi&X-Amz-Signature=937e76d66736e2c4194e7cae1ba12c884cc4368d4dd1ae230c67e816aad640a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6T4GEL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCQoVEcG2PQ7mRbweFk59Frit%2FyGuCw1AbsDiGa%2BckFhgIgcknysPxb9VH2bxIUhFwYatq%2B5GfNaTAxaRIW%2Bzv5EFAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAYAD6OqgDLaI1atPCrcAyR2pv4H04GNQtx5l2s0pp6nW07ch1PfRm%2B7ddiCsunAW17dYgkuXM64Af2bnDmt4PS59sVyPhUIZUdMx%2BZf%2FnICOGm8sGrK3gtY9IUbGrcsTOK0AzeJthSxdq77TbegsNNEEBYkPUbqT8MAy5KwUycfVKZgakz0TK5iSLyeu%2F5mNY7WyalRWlrZDpTSGCr3QDByZH7uag%2FwhpQ2J87KBlUSkyFsefwauXIRx2bfYsyot0TABB71YBhJLjRT2FA%2F5r2FLYHUc4XhVNZnj4eLvCbkvCgjTBY6K9XDNzUU0wpkO9%2BSB0AUvLhkguXjToZOL0ErFGJ8XSAVOaCj%2FBIq2z%2FbmhkG30XYTxIr4C9we6uYuKhvtFDkgHtpS1y27lco%2BwUVewRCHzzi8Sr2MllTf24p8%2F9Op1JbFBOzx7i2aVQMk7vp5ByIf6UyNaKFbHTeMMi48%2BEp8BDc17DzywTaNFqudX4u5IfY1SC0sADEArW5dPBD%2FdR8HRT9kGptXF7tpskDFXtTMoKPqhOaGJaTXFUQMEe%2BR4SFbj0QrOCPZFq033agMuV9rQYerN00Z396GKXEibm5D17EYTCxnxXzex%2F43KOYFsQRJ16k0tloqihtODBrZRcHZuIHQXmZMPXrtL4GOqUBOB1JJQYnlxbiUMZJRXxmu1BEbYCkSBlTxAiuuhDbx1ncsgjR%2BAkEOEyeC%2BTVH2UKrYED5nWi13QDwDmKq4ixyHsiiyLY6H3kRLnONzXbBKI7qYE%2FETPrAA2v5rGrJ3VodOXasR93vmxZxR6lkPrc8Fmb7Ht757rRMQRAGelgM%2FdeZNCBIvAMuGtOVx5VzVSvoJiJyKEfEI%2Bc95RE7v27r6SqhPQi&X-Amz-Signature=c8cafbfadf702dfb7c7280b65edc3e476afcc764a0ba6a22ab876ad05098c0c9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6T4GEL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCQoVEcG2PQ7mRbweFk59Frit%2FyGuCw1AbsDiGa%2BckFhgIgcknysPxb9VH2bxIUhFwYatq%2B5GfNaTAxaRIW%2Bzv5EFAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAYAD6OqgDLaI1atPCrcAyR2pv4H04GNQtx5l2s0pp6nW07ch1PfRm%2B7ddiCsunAW17dYgkuXM64Af2bnDmt4PS59sVyPhUIZUdMx%2BZf%2FnICOGm8sGrK3gtY9IUbGrcsTOK0AzeJthSxdq77TbegsNNEEBYkPUbqT8MAy5KwUycfVKZgakz0TK5iSLyeu%2F5mNY7WyalRWlrZDpTSGCr3QDByZH7uag%2FwhpQ2J87KBlUSkyFsefwauXIRx2bfYsyot0TABB71YBhJLjRT2FA%2F5r2FLYHUc4XhVNZnj4eLvCbkvCgjTBY6K9XDNzUU0wpkO9%2BSB0AUvLhkguXjToZOL0ErFGJ8XSAVOaCj%2FBIq2z%2FbmhkG30XYTxIr4C9we6uYuKhvtFDkgHtpS1y27lco%2BwUVewRCHzzi8Sr2MllTf24p8%2F9Op1JbFBOzx7i2aVQMk7vp5ByIf6UyNaKFbHTeMMi48%2BEp8BDc17DzywTaNFqudX4u5IfY1SC0sADEArW5dPBD%2FdR8HRT9kGptXF7tpskDFXtTMoKPqhOaGJaTXFUQMEe%2BR4SFbj0QrOCPZFq033agMuV9rQYerN00Z396GKXEibm5D17EYTCxnxXzex%2F43KOYFsQRJ16k0tloqihtODBrZRcHZuIHQXmZMPXrtL4GOqUBOB1JJQYnlxbiUMZJRXxmu1BEbYCkSBlTxAiuuhDbx1ncsgjR%2BAkEOEyeC%2BTVH2UKrYED5nWi13QDwDmKq4ixyHsiiyLY6H3kRLnONzXbBKI7qYE%2FETPrAA2v5rGrJ3VodOXasR93vmxZxR6lkPrc8Fmb7Ht757rRMQRAGelgM%2FdeZNCBIvAMuGtOVx5VzVSvoJiJyKEfEI%2Bc95RE7v27r6SqhPQi&X-Amz-Signature=5e1ea2ebafbf5bc1694e20978538b70bbfa78ece37522d98a453ab2bd8ea7e8f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
