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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JKFA5P%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVNGT81AZ%2F9GbatJH5te%2BN45zdYxjpa9HkpFy13v5ioAiBZayeRnn9PmiSPLUT%2BcYYj4BT5vPiNsMX9VYH0P6dAGSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM65m9n0dR9nXNQaPwKtwDNHLanylYxOW1R%2BWxKvwJHNGgMMZ7QSIIXxBkoHGO4cP8CQdCLO8HF2N2AnjCDwbUMntYu1Tp5FZa9592pTC8z81HfyS6uSqU1ECpU1Fv2Ntl4bxnfbz2nfBQrdbNFxVTFXr3kT4s79yb8X1oTyEaft2zhzdxdU22ue7zDgtqQEMqKUMivHpwZbFwZpWV%2FYG5Y%2F3tL6q0LuInnizf8jOp2bvQI4iJzlCevXEVncPGyLb%2BsZVBE0Bytr7or%2BR8VB7%2Bx7ZF%2FjelFakghqCJtJy9AS5YowuxZjpIRmN5bekddJCuH2JC1sCATGY957OipGNsdBSmEN5w4yTpR8WSJaPM8O2tNxh%2Ffq2JfhuAZRBuhVSmxhRZEvB6%2FjV%2BPmNwt%2FQHKpJYll7OLw38ZUJRN4Kjxjy6%2B4riDzuGB%2FkOLdHM3FlclkGoN4BKnpFCVgXT%2BbPHY%2FOqI2TX%2BBbE%2FGK8RUEI8V23x299bbweyZTU3bRPFfqMvHIMhy9AiHZcp4XlpVQ4n9c38%2FzAqZ%2FJErU5Ypy5nxI1pQnr1f5nnbeT8Yk%2FEgDGW4qLM%2FNywah%2FdjtFT6JLTmK90UX%2FbZ16w78%2BoYuah7x1exUUrwZZ3mPYKUbkzJfly%2FiItooZdFnUHl4wtKzxwAY6pgFdB8s%2BnNBcDrTnrXBP6%2F4px2aX1KVvTIXds%2Fgjj6Sj4mQr0RgAn2ugANvNsxL9uA7Mr2lJoL%2BeO4Y7BhXHWAoR3PX56VfUg5qCCOYdCZ8BrBsE7Q8%2FOEtXHr1hdrM6i9QaKYMT42MMxriJRUltmN8zyo6b1TPNYUf%2BM7WvGzl8Rh4gHtrRIItCpzJTInSnb2Vo9K67EFl7e7gyvvOi0DYcHak4YPbL&X-Amz-Signature=5cc6741511164fc8aa312ba9fd515f0c6a3be0e69db24da831b84422e554c965&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JKFA5P%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVNGT81AZ%2F9GbatJH5te%2BN45zdYxjpa9HkpFy13v5ioAiBZayeRnn9PmiSPLUT%2BcYYj4BT5vPiNsMX9VYH0P6dAGSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM65m9n0dR9nXNQaPwKtwDNHLanylYxOW1R%2BWxKvwJHNGgMMZ7QSIIXxBkoHGO4cP8CQdCLO8HF2N2AnjCDwbUMntYu1Tp5FZa9592pTC8z81HfyS6uSqU1ECpU1Fv2Ntl4bxnfbz2nfBQrdbNFxVTFXr3kT4s79yb8X1oTyEaft2zhzdxdU22ue7zDgtqQEMqKUMivHpwZbFwZpWV%2FYG5Y%2F3tL6q0LuInnizf8jOp2bvQI4iJzlCevXEVncPGyLb%2BsZVBE0Bytr7or%2BR8VB7%2Bx7ZF%2FjelFakghqCJtJy9AS5YowuxZjpIRmN5bekddJCuH2JC1sCATGY957OipGNsdBSmEN5w4yTpR8WSJaPM8O2tNxh%2Ffq2JfhuAZRBuhVSmxhRZEvB6%2FjV%2BPmNwt%2FQHKpJYll7OLw38ZUJRN4Kjxjy6%2B4riDzuGB%2FkOLdHM3FlclkGoN4BKnpFCVgXT%2BbPHY%2FOqI2TX%2BBbE%2FGK8RUEI8V23x299bbweyZTU3bRPFfqMvHIMhy9AiHZcp4XlpVQ4n9c38%2FzAqZ%2FJErU5Ypy5nxI1pQnr1f5nnbeT8Yk%2FEgDGW4qLM%2FNywah%2FdjtFT6JLTmK90UX%2FbZ16w78%2BoYuah7x1exUUrwZZ3mPYKUbkzJfly%2FiItooZdFnUHl4wtKzxwAY6pgFdB8s%2BnNBcDrTnrXBP6%2F4px2aX1KVvTIXds%2Fgjj6Sj4mQr0RgAn2ugANvNsxL9uA7Mr2lJoL%2BeO4Y7BhXHWAoR3PX56VfUg5qCCOYdCZ8BrBsE7Q8%2FOEtXHr1hdrM6i9QaKYMT42MMxriJRUltmN8zyo6b1TPNYUf%2BM7WvGzl8Rh4gHtrRIItCpzJTInSnb2Vo9K67EFl7e7gyvvOi0DYcHak4YPbL&X-Amz-Signature=75c1b442d91ae2259fe654cb49e4973893df53e9cd467be4826abe254c91e5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JKFA5P%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVNGT81AZ%2F9GbatJH5te%2BN45zdYxjpa9HkpFy13v5ioAiBZayeRnn9PmiSPLUT%2BcYYj4BT5vPiNsMX9VYH0P6dAGSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM65m9n0dR9nXNQaPwKtwDNHLanylYxOW1R%2BWxKvwJHNGgMMZ7QSIIXxBkoHGO4cP8CQdCLO8HF2N2AnjCDwbUMntYu1Tp5FZa9592pTC8z81HfyS6uSqU1ECpU1Fv2Ntl4bxnfbz2nfBQrdbNFxVTFXr3kT4s79yb8X1oTyEaft2zhzdxdU22ue7zDgtqQEMqKUMivHpwZbFwZpWV%2FYG5Y%2F3tL6q0LuInnizf8jOp2bvQI4iJzlCevXEVncPGyLb%2BsZVBE0Bytr7or%2BR8VB7%2Bx7ZF%2FjelFakghqCJtJy9AS5YowuxZjpIRmN5bekddJCuH2JC1sCATGY957OipGNsdBSmEN5w4yTpR8WSJaPM8O2tNxh%2Ffq2JfhuAZRBuhVSmxhRZEvB6%2FjV%2BPmNwt%2FQHKpJYll7OLw38ZUJRN4Kjxjy6%2B4riDzuGB%2FkOLdHM3FlclkGoN4BKnpFCVgXT%2BbPHY%2FOqI2TX%2BBbE%2FGK8RUEI8V23x299bbweyZTU3bRPFfqMvHIMhy9AiHZcp4XlpVQ4n9c38%2FzAqZ%2FJErU5Ypy5nxI1pQnr1f5nnbeT8Yk%2FEgDGW4qLM%2FNywah%2FdjtFT6JLTmK90UX%2FbZ16w78%2BoYuah7x1exUUrwZZ3mPYKUbkzJfly%2FiItooZdFnUHl4wtKzxwAY6pgFdB8s%2BnNBcDrTnrXBP6%2F4px2aX1KVvTIXds%2Fgjj6Sj4mQr0RgAn2ugANvNsxL9uA7Mr2lJoL%2BeO4Y7BhXHWAoR3PX56VfUg5qCCOYdCZ8BrBsE7Q8%2FOEtXHr1hdrM6i9QaKYMT42MMxriJRUltmN8zyo6b1TPNYUf%2BM7WvGzl8Rh4gHtrRIItCpzJTInSnb2Vo9K67EFl7e7gyvvOi0DYcHak4YPbL&X-Amz-Signature=ea14abaad892a50764130a2a6a5c9cd80ba66fe19140bd271787a5ff1c4eedc4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JKFA5P%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVNGT81AZ%2F9GbatJH5te%2BN45zdYxjpa9HkpFy13v5ioAiBZayeRnn9PmiSPLUT%2BcYYj4BT5vPiNsMX9VYH0P6dAGSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM65m9n0dR9nXNQaPwKtwDNHLanylYxOW1R%2BWxKvwJHNGgMMZ7QSIIXxBkoHGO4cP8CQdCLO8HF2N2AnjCDwbUMntYu1Tp5FZa9592pTC8z81HfyS6uSqU1ECpU1Fv2Ntl4bxnfbz2nfBQrdbNFxVTFXr3kT4s79yb8X1oTyEaft2zhzdxdU22ue7zDgtqQEMqKUMivHpwZbFwZpWV%2FYG5Y%2F3tL6q0LuInnizf8jOp2bvQI4iJzlCevXEVncPGyLb%2BsZVBE0Bytr7or%2BR8VB7%2Bx7ZF%2FjelFakghqCJtJy9AS5YowuxZjpIRmN5bekddJCuH2JC1sCATGY957OipGNsdBSmEN5w4yTpR8WSJaPM8O2tNxh%2Ffq2JfhuAZRBuhVSmxhRZEvB6%2FjV%2BPmNwt%2FQHKpJYll7OLw38ZUJRN4Kjxjy6%2B4riDzuGB%2FkOLdHM3FlclkGoN4BKnpFCVgXT%2BbPHY%2FOqI2TX%2BBbE%2FGK8RUEI8V23x299bbweyZTU3bRPFfqMvHIMhy9AiHZcp4XlpVQ4n9c38%2FzAqZ%2FJErU5Ypy5nxI1pQnr1f5nnbeT8Yk%2FEgDGW4qLM%2FNywah%2FdjtFT6JLTmK90UX%2FbZ16w78%2BoYuah7x1exUUrwZZ3mPYKUbkzJfly%2FiItooZdFnUHl4wtKzxwAY6pgFdB8s%2BnNBcDrTnrXBP6%2F4px2aX1KVvTIXds%2Fgjj6Sj4mQr0RgAn2ugANvNsxL9uA7Mr2lJoL%2BeO4Y7BhXHWAoR3PX56VfUg5qCCOYdCZ8BrBsE7Q8%2FOEtXHr1hdrM6i9QaKYMT42MMxriJRUltmN8zyo6b1TPNYUf%2BM7WvGzl8Rh4gHtrRIItCpzJTInSnb2Vo9K67EFl7e7gyvvOi0DYcHak4YPbL&X-Amz-Signature=9c99806b2a91df429b7ca23a77262a17e75bc8d8a5992b77222bb6fde4a40998&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JKFA5P%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVNGT81AZ%2F9GbatJH5te%2BN45zdYxjpa9HkpFy13v5ioAiBZayeRnn9PmiSPLUT%2BcYYj4BT5vPiNsMX9VYH0P6dAGSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM65m9n0dR9nXNQaPwKtwDNHLanylYxOW1R%2BWxKvwJHNGgMMZ7QSIIXxBkoHGO4cP8CQdCLO8HF2N2AnjCDwbUMntYu1Tp5FZa9592pTC8z81HfyS6uSqU1ECpU1Fv2Ntl4bxnfbz2nfBQrdbNFxVTFXr3kT4s79yb8X1oTyEaft2zhzdxdU22ue7zDgtqQEMqKUMivHpwZbFwZpWV%2FYG5Y%2F3tL6q0LuInnizf8jOp2bvQI4iJzlCevXEVncPGyLb%2BsZVBE0Bytr7or%2BR8VB7%2Bx7ZF%2FjelFakghqCJtJy9AS5YowuxZjpIRmN5bekddJCuH2JC1sCATGY957OipGNsdBSmEN5w4yTpR8WSJaPM8O2tNxh%2Ffq2JfhuAZRBuhVSmxhRZEvB6%2FjV%2BPmNwt%2FQHKpJYll7OLw38ZUJRN4Kjxjy6%2B4riDzuGB%2FkOLdHM3FlclkGoN4BKnpFCVgXT%2BbPHY%2FOqI2TX%2BBbE%2FGK8RUEI8V23x299bbweyZTU3bRPFfqMvHIMhy9AiHZcp4XlpVQ4n9c38%2FzAqZ%2FJErU5Ypy5nxI1pQnr1f5nnbeT8Yk%2FEgDGW4qLM%2FNywah%2FdjtFT6JLTmK90UX%2FbZ16w78%2BoYuah7x1exUUrwZZ3mPYKUbkzJfly%2FiItooZdFnUHl4wtKzxwAY6pgFdB8s%2BnNBcDrTnrXBP6%2F4px2aX1KVvTIXds%2Fgjj6Sj4mQr0RgAn2ugANvNsxL9uA7Mr2lJoL%2BeO4Y7BhXHWAoR3PX56VfUg5qCCOYdCZ8BrBsE7Q8%2FOEtXHr1hdrM6i9QaKYMT42MMxriJRUltmN8zyo6b1TPNYUf%2BM7WvGzl8Rh4gHtrRIItCpzJTInSnb2Vo9K67EFl7e7gyvvOi0DYcHak4YPbL&X-Amz-Signature=bf430844a913e6c8aaf259f2262718511bed5ad9d173bde1e87b922d59a6e724&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JKFA5P%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVNGT81AZ%2F9GbatJH5te%2BN45zdYxjpa9HkpFy13v5ioAiBZayeRnn9PmiSPLUT%2BcYYj4BT5vPiNsMX9VYH0P6dAGSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM65m9n0dR9nXNQaPwKtwDNHLanylYxOW1R%2BWxKvwJHNGgMMZ7QSIIXxBkoHGO4cP8CQdCLO8HF2N2AnjCDwbUMntYu1Tp5FZa9592pTC8z81HfyS6uSqU1ECpU1Fv2Ntl4bxnfbz2nfBQrdbNFxVTFXr3kT4s79yb8X1oTyEaft2zhzdxdU22ue7zDgtqQEMqKUMivHpwZbFwZpWV%2FYG5Y%2F3tL6q0LuInnizf8jOp2bvQI4iJzlCevXEVncPGyLb%2BsZVBE0Bytr7or%2BR8VB7%2Bx7ZF%2FjelFakghqCJtJy9AS5YowuxZjpIRmN5bekddJCuH2JC1sCATGY957OipGNsdBSmEN5w4yTpR8WSJaPM8O2tNxh%2Ffq2JfhuAZRBuhVSmxhRZEvB6%2FjV%2BPmNwt%2FQHKpJYll7OLw38ZUJRN4Kjxjy6%2B4riDzuGB%2FkOLdHM3FlclkGoN4BKnpFCVgXT%2BbPHY%2FOqI2TX%2BBbE%2FGK8RUEI8V23x299bbweyZTU3bRPFfqMvHIMhy9AiHZcp4XlpVQ4n9c38%2FzAqZ%2FJErU5Ypy5nxI1pQnr1f5nnbeT8Yk%2FEgDGW4qLM%2FNywah%2FdjtFT6JLTmK90UX%2FbZ16w78%2BoYuah7x1exUUrwZZ3mPYKUbkzJfly%2FiItooZdFnUHl4wtKzxwAY6pgFdB8s%2BnNBcDrTnrXBP6%2F4px2aX1KVvTIXds%2Fgjj6Sj4mQr0RgAn2ugANvNsxL9uA7Mr2lJoL%2BeO4Y7BhXHWAoR3PX56VfUg5qCCOYdCZ8BrBsE7Q8%2FOEtXHr1hdrM6i9QaKYMT42MMxriJRUltmN8zyo6b1TPNYUf%2BM7WvGzl8Rh4gHtrRIItCpzJTInSnb2Vo9K67EFl7e7gyvvOi0DYcHak4YPbL&X-Amz-Signature=1734ccacf037022541f5a08b079717913407eeff704f0f0ef9e137f64e6eb979&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JKFA5P%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVNGT81AZ%2F9GbatJH5te%2BN45zdYxjpa9HkpFy13v5ioAiBZayeRnn9PmiSPLUT%2BcYYj4BT5vPiNsMX9VYH0P6dAGSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM65m9n0dR9nXNQaPwKtwDNHLanylYxOW1R%2BWxKvwJHNGgMMZ7QSIIXxBkoHGO4cP8CQdCLO8HF2N2AnjCDwbUMntYu1Tp5FZa9592pTC8z81HfyS6uSqU1ECpU1Fv2Ntl4bxnfbz2nfBQrdbNFxVTFXr3kT4s79yb8X1oTyEaft2zhzdxdU22ue7zDgtqQEMqKUMivHpwZbFwZpWV%2FYG5Y%2F3tL6q0LuInnizf8jOp2bvQI4iJzlCevXEVncPGyLb%2BsZVBE0Bytr7or%2BR8VB7%2Bx7ZF%2FjelFakghqCJtJy9AS5YowuxZjpIRmN5bekddJCuH2JC1sCATGY957OipGNsdBSmEN5w4yTpR8WSJaPM8O2tNxh%2Ffq2JfhuAZRBuhVSmxhRZEvB6%2FjV%2BPmNwt%2FQHKpJYll7OLw38ZUJRN4Kjxjy6%2B4riDzuGB%2FkOLdHM3FlclkGoN4BKnpFCVgXT%2BbPHY%2FOqI2TX%2BBbE%2FGK8RUEI8V23x299bbweyZTU3bRPFfqMvHIMhy9AiHZcp4XlpVQ4n9c38%2FzAqZ%2FJErU5Ypy5nxI1pQnr1f5nnbeT8Yk%2FEgDGW4qLM%2FNywah%2FdjtFT6JLTmK90UX%2FbZ16w78%2BoYuah7x1exUUrwZZ3mPYKUbkzJfly%2FiItooZdFnUHl4wtKzxwAY6pgFdB8s%2BnNBcDrTnrXBP6%2F4px2aX1KVvTIXds%2Fgjj6Sj4mQr0RgAn2ugANvNsxL9uA7Mr2lJoL%2BeO4Y7BhXHWAoR3PX56VfUg5qCCOYdCZ8BrBsE7Q8%2FOEtXHr1hdrM6i9QaKYMT42MMxriJRUltmN8zyo6b1TPNYUf%2BM7WvGzl8Rh4gHtrRIItCpzJTInSnb2Vo9K67EFl7e7gyvvOi0DYcHak4YPbL&X-Amz-Signature=967e74503c99fe080f0f925adae380fc86a12f097fb6b040969c816278fb82e1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
