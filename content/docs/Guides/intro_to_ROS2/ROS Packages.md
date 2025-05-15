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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UAR4ER%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGKuzEoDUmPicIzkscOAJfi8evzn9Q6WtdVzjXJqhh87AiEAikC6bgfhpKs1I45D%2BAnJPx1fZDjhDv1A7L%2BOHg88%2Ba0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDF97CA6HNvRfoQXwHyrcAwrCAHYw5yPKV1EuUk6Durzwfn21xMyoT6Zgrz8PkGk%2FQUiPEL1RKmUuyslUJFU8PVvvG1aOr3wcWhJbgMC1zFWtLDy7dy3XXYTAgG0pMrZle0x6jYRWmSHu%2BbTFmrUK5kji5sRr9WILhunLZHIUNiga4T7Fi0ghRSaeuNDqrm9cxjcdJ4%2FtnZgDqkdmItNcsJHwOATblzAVsRjpVjc4gBlc2Rf7ZPApj%2Fbelm8BiSU91pwxpcITtKccGK4%2BAUrsw9ClrrvjGM16X7%2BfSqMGK69bmznOmPszxefNO8I6FjWAKu1yXG9Dj%2Fdmw%2BQUGyr2unxjYq150eiEhun0yHKskHZ5e30LinSOy3tghr%2FEDm%2BDzYQ7492fn1IJ3NalY8dY65XpJtuszQLux0ODVN1v2UhSMYJIwRujh1OKOT%2Ftro55%2BTiY3vMT%2BozjounW5ag2DJ9VT3yAKM6SsGO9iFz%2BswKufu2Btj7lhOHnjFzL%2FZjh5p0xos%2FaA9GHE1T5PTys79ar3t4yPEuLtli8ntEV7fzmAURVe4lsW7vnB7sQhk90FkCDvXwZzwYFExjrYIfMkC2hHnwbRKhOgSYUZkyCwwLiBtspGCTGPBBSjCYazVabh43X5UHS%2BZy3uTOnMOuclsEGOqUBA7U4VOqqfFTXG%2BbSEytPjFd4htUsrXxfUcl5%2FE%2BAz0iAtq0wzIkZOmmrFAGpHT6u5myjILl%2FckB4nk97Xo8eA2LbSFT3HPWQBx4fpDmxdgZyMTHE%2BVCQk%2F6ThcXDDtX%2B%2BWKmoSnosb9nIIg7m9N0DH3zWCC5N1iUmeHC%2Fzq%2B2WmjftgrZ0Sya36WX3xboMFm%2FnDW6%2Fre%2BPoQRaaGPYtprKXTUisl&X-Amz-Signature=2bbf8c162ca1c2747948ab1ff0ab0dc3a3e9857d04cf4e2cb5d66763eac47674&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UAR4ER%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGKuzEoDUmPicIzkscOAJfi8evzn9Q6WtdVzjXJqhh87AiEAikC6bgfhpKs1I45D%2BAnJPx1fZDjhDv1A7L%2BOHg88%2Ba0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDF97CA6HNvRfoQXwHyrcAwrCAHYw5yPKV1EuUk6Durzwfn21xMyoT6Zgrz8PkGk%2FQUiPEL1RKmUuyslUJFU8PVvvG1aOr3wcWhJbgMC1zFWtLDy7dy3XXYTAgG0pMrZle0x6jYRWmSHu%2BbTFmrUK5kji5sRr9WILhunLZHIUNiga4T7Fi0ghRSaeuNDqrm9cxjcdJ4%2FtnZgDqkdmItNcsJHwOATblzAVsRjpVjc4gBlc2Rf7ZPApj%2Fbelm8BiSU91pwxpcITtKccGK4%2BAUrsw9ClrrvjGM16X7%2BfSqMGK69bmznOmPszxefNO8I6FjWAKu1yXG9Dj%2Fdmw%2BQUGyr2unxjYq150eiEhun0yHKskHZ5e30LinSOy3tghr%2FEDm%2BDzYQ7492fn1IJ3NalY8dY65XpJtuszQLux0ODVN1v2UhSMYJIwRujh1OKOT%2Ftro55%2BTiY3vMT%2BozjounW5ag2DJ9VT3yAKM6SsGO9iFz%2BswKufu2Btj7lhOHnjFzL%2FZjh5p0xos%2FaA9GHE1T5PTys79ar3t4yPEuLtli8ntEV7fzmAURVe4lsW7vnB7sQhk90FkCDvXwZzwYFExjrYIfMkC2hHnwbRKhOgSYUZkyCwwLiBtspGCTGPBBSjCYazVabh43X5UHS%2BZy3uTOnMOuclsEGOqUBA7U4VOqqfFTXG%2BbSEytPjFd4htUsrXxfUcl5%2FE%2BAz0iAtq0wzIkZOmmrFAGpHT6u5myjILl%2FckB4nk97Xo8eA2LbSFT3HPWQBx4fpDmxdgZyMTHE%2BVCQk%2F6ThcXDDtX%2B%2BWKmoSnosb9nIIg7m9N0DH3zWCC5N1iUmeHC%2Fzq%2B2WmjftgrZ0Sya36WX3xboMFm%2FnDW6%2Fre%2BPoQRaaGPYtprKXTUisl&X-Amz-Signature=9f720404af18275cccec04a1d0b3427289be73ef5cc24b4351da9abcd99b7241&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UAR4ER%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGKuzEoDUmPicIzkscOAJfi8evzn9Q6WtdVzjXJqhh87AiEAikC6bgfhpKs1I45D%2BAnJPx1fZDjhDv1A7L%2BOHg88%2Ba0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDF97CA6HNvRfoQXwHyrcAwrCAHYw5yPKV1EuUk6Durzwfn21xMyoT6Zgrz8PkGk%2FQUiPEL1RKmUuyslUJFU8PVvvG1aOr3wcWhJbgMC1zFWtLDy7dy3XXYTAgG0pMrZle0x6jYRWmSHu%2BbTFmrUK5kji5sRr9WILhunLZHIUNiga4T7Fi0ghRSaeuNDqrm9cxjcdJ4%2FtnZgDqkdmItNcsJHwOATblzAVsRjpVjc4gBlc2Rf7ZPApj%2Fbelm8BiSU91pwxpcITtKccGK4%2BAUrsw9ClrrvjGM16X7%2BfSqMGK69bmznOmPszxefNO8I6FjWAKu1yXG9Dj%2Fdmw%2BQUGyr2unxjYq150eiEhun0yHKskHZ5e30LinSOy3tghr%2FEDm%2BDzYQ7492fn1IJ3NalY8dY65XpJtuszQLux0ODVN1v2UhSMYJIwRujh1OKOT%2Ftro55%2BTiY3vMT%2BozjounW5ag2DJ9VT3yAKM6SsGO9iFz%2BswKufu2Btj7lhOHnjFzL%2FZjh5p0xos%2FaA9GHE1T5PTys79ar3t4yPEuLtli8ntEV7fzmAURVe4lsW7vnB7sQhk90FkCDvXwZzwYFExjrYIfMkC2hHnwbRKhOgSYUZkyCwwLiBtspGCTGPBBSjCYazVabh43X5UHS%2BZy3uTOnMOuclsEGOqUBA7U4VOqqfFTXG%2BbSEytPjFd4htUsrXxfUcl5%2FE%2BAz0iAtq0wzIkZOmmrFAGpHT6u5myjILl%2FckB4nk97Xo8eA2LbSFT3HPWQBx4fpDmxdgZyMTHE%2BVCQk%2F6ThcXDDtX%2B%2BWKmoSnosb9nIIg7m9N0DH3zWCC5N1iUmeHC%2Fzq%2B2WmjftgrZ0Sya36WX3xboMFm%2FnDW6%2Fre%2BPoQRaaGPYtprKXTUisl&X-Amz-Signature=13b4cb7e7fb895ef6d80c4c5c1b200fb3ef2bda7579723b81165bb88f9adf416&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UAR4ER%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGKuzEoDUmPicIzkscOAJfi8evzn9Q6WtdVzjXJqhh87AiEAikC6bgfhpKs1I45D%2BAnJPx1fZDjhDv1A7L%2BOHg88%2Ba0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDF97CA6HNvRfoQXwHyrcAwrCAHYw5yPKV1EuUk6Durzwfn21xMyoT6Zgrz8PkGk%2FQUiPEL1RKmUuyslUJFU8PVvvG1aOr3wcWhJbgMC1zFWtLDy7dy3XXYTAgG0pMrZle0x6jYRWmSHu%2BbTFmrUK5kji5sRr9WILhunLZHIUNiga4T7Fi0ghRSaeuNDqrm9cxjcdJ4%2FtnZgDqkdmItNcsJHwOATblzAVsRjpVjc4gBlc2Rf7ZPApj%2Fbelm8BiSU91pwxpcITtKccGK4%2BAUrsw9ClrrvjGM16X7%2BfSqMGK69bmznOmPszxefNO8I6FjWAKu1yXG9Dj%2Fdmw%2BQUGyr2unxjYq150eiEhun0yHKskHZ5e30LinSOy3tghr%2FEDm%2BDzYQ7492fn1IJ3NalY8dY65XpJtuszQLux0ODVN1v2UhSMYJIwRujh1OKOT%2Ftro55%2BTiY3vMT%2BozjounW5ag2DJ9VT3yAKM6SsGO9iFz%2BswKufu2Btj7lhOHnjFzL%2FZjh5p0xos%2FaA9GHE1T5PTys79ar3t4yPEuLtli8ntEV7fzmAURVe4lsW7vnB7sQhk90FkCDvXwZzwYFExjrYIfMkC2hHnwbRKhOgSYUZkyCwwLiBtspGCTGPBBSjCYazVabh43X5UHS%2BZy3uTOnMOuclsEGOqUBA7U4VOqqfFTXG%2BbSEytPjFd4htUsrXxfUcl5%2FE%2BAz0iAtq0wzIkZOmmrFAGpHT6u5myjILl%2FckB4nk97Xo8eA2LbSFT3HPWQBx4fpDmxdgZyMTHE%2BVCQk%2F6ThcXDDtX%2B%2BWKmoSnosb9nIIg7m9N0DH3zWCC5N1iUmeHC%2Fzq%2B2WmjftgrZ0Sya36WX3xboMFm%2FnDW6%2Fre%2BPoQRaaGPYtprKXTUisl&X-Amz-Signature=a8927ad153451654c07e8acc59414b6bc96b01dfb7200ddf4315104040012fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UAR4ER%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGKuzEoDUmPicIzkscOAJfi8evzn9Q6WtdVzjXJqhh87AiEAikC6bgfhpKs1I45D%2BAnJPx1fZDjhDv1A7L%2BOHg88%2Ba0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDF97CA6HNvRfoQXwHyrcAwrCAHYw5yPKV1EuUk6Durzwfn21xMyoT6Zgrz8PkGk%2FQUiPEL1RKmUuyslUJFU8PVvvG1aOr3wcWhJbgMC1zFWtLDy7dy3XXYTAgG0pMrZle0x6jYRWmSHu%2BbTFmrUK5kji5sRr9WILhunLZHIUNiga4T7Fi0ghRSaeuNDqrm9cxjcdJ4%2FtnZgDqkdmItNcsJHwOATblzAVsRjpVjc4gBlc2Rf7ZPApj%2Fbelm8BiSU91pwxpcITtKccGK4%2BAUrsw9ClrrvjGM16X7%2BfSqMGK69bmznOmPszxefNO8I6FjWAKu1yXG9Dj%2Fdmw%2BQUGyr2unxjYq150eiEhun0yHKskHZ5e30LinSOy3tghr%2FEDm%2BDzYQ7492fn1IJ3NalY8dY65XpJtuszQLux0ODVN1v2UhSMYJIwRujh1OKOT%2Ftro55%2BTiY3vMT%2BozjounW5ag2DJ9VT3yAKM6SsGO9iFz%2BswKufu2Btj7lhOHnjFzL%2FZjh5p0xos%2FaA9GHE1T5PTys79ar3t4yPEuLtli8ntEV7fzmAURVe4lsW7vnB7sQhk90FkCDvXwZzwYFExjrYIfMkC2hHnwbRKhOgSYUZkyCwwLiBtspGCTGPBBSjCYazVabh43X5UHS%2BZy3uTOnMOuclsEGOqUBA7U4VOqqfFTXG%2BbSEytPjFd4htUsrXxfUcl5%2FE%2BAz0iAtq0wzIkZOmmrFAGpHT6u5myjILl%2FckB4nk97Xo8eA2LbSFT3HPWQBx4fpDmxdgZyMTHE%2BVCQk%2F6ThcXDDtX%2B%2BWKmoSnosb9nIIg7m9N0DH3zWCC5N1iUmeHC%2Fzq%2B2WmjftgrZ0Sya36WX3xboMFm%2FnDW6%2Fre%2BPoQRaaGPYtprKXTUisl&X-Amz-Signature=4ad8e2ccec020bb5372ae17218e7dc6fb4eb78eb1c924d9340498b3d666c1f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UAR4ER%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGKuzEoDUmPicIzkscOAJfi8evzn9Q6WtdVzjXJqhh87AiEAikC6bgfhpKs1I45D%2BAnJPx1fZDjhDv1A7L%2BOHg88%2Ba0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDF97CA6HNvRfoQXwHyrcAwrCAHYw5yPKV1EuUk6Durzwfn21xMyoT6Zgrz8PkGk%2FQUiPEL1RKmUuyslUJFU8PVvvG1aOr3wcWhJbgMC1zFWtLDy7dy3XXYTAgG0pMrZle0x6jYRWmSHu%2BbTFmrUK5kji5sRr9WILhunLZHIUNiga4T7Fi0ghRSaeuNDqrm9cxjcdJ4%2FtnZgDqkdmItNcsJHwOATblzAVsRjpVjc4gBlc2Rf7ZPApj%2Fbelm8BiSU91pwxpcITtKccGK4%2BAUrsw9ClrrvjGM16X7%2BfSqMGK69bmznOmPszxefNO8I6FjWAKu1yXG9Dj%2Fdmw%2BQUGyr2unxjYq150eiEhun0yHKskHZ5e30LinSOy3tghr%2FEDm%2BDzYQ7492fn1IJ3NalY8dY65XpJtuszQLux0ODVN1v2UhSMYJIwRujh1OKOT%2Ftro55%2BTiY3vMT%2BozjounW5ag2DJ9VT3yAKM6SsGO9iFz%2BswKufu2Btj7lhOHnjFzL%2FZjh5p0xos%2FaA9GHE1T5PTys79ar3t4yPEuLtli8ntEV7fzmAURVe4lsW7vnB7sQhk90FkCDvXwZzwYFExjrYIfMkC2hHnwbRKhOgSYUZkyCwwLiBtspGCTGPBBSjCYazVabh43X5UHS%2BZy3uTOnMOuclsEGOqUBA7U4VOqqfFTXG%2BbSEytPjFd4htUsrXxfUcl5%2FE%2BAz0iAtq0wzIkZOmmrFAGpHT6u5myjILl%2FckB4nk97Xo8eA2LbSFT3HPWQBx4fpDmxdgZyMTHE%2BVCQk%2F6ThcXDDtX%2B%2BWKmoSnosb9nIIg7m9N0DH3zWCC5N1iUmeHC%2Fzq%2B2WmjftgrZ0Sya36WX3xboMFm%2FnDW6%2Fre%2BPoQRaaGPYtprKXTUisl&X-Amz-Signature=588f2826a0b9e95432c423ee495761599ab53c5fe88792e966d6073968d31c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UAR4ER%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGKuzEoDUmPicIzkscOAJfi8evzn9Q6WtdVzjXJqhh87AiEAikC6bgfhpKs1I45D%2BAnJPx1fZDjhDv1A7L%2BOHg88%2Ba0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDF97CA6HNvRfoQXwHyrcAwrCAHYw5yPKV1EuUk6Durzwfn21xMyoT6Zgrz8PkGk%2FQUiPEL1RKmUuyslUJFU8PVvvG1aOr3wcWhJbgMC1zFWtLDy7dy3XXYTAgG0pMrZle0x6jYRWmSHu%2BbTFmrUK5kji5sRr9WILhunLZHIUNiga4T7Fi0ghRSaeuNDqrm9cxjcdJ4%2FtnZgDqkdmItNcsJHwOATblzAVsRjpVjc4gBlc2Rf7ZPApj%2Fbelm8BiSU91pwxpcITtKccGK4%2BAUrsw9ClrrvjGM16X7%2BfSqMGK69bmznOmPszxefNO8I6FjWAKu1yXG9Dj%2Fdmw%2BQUGyr2unxjYq150eiEhun0yHKskHZ5e30LinSOy3tghr%2FEDm%2BDzYQ7492fn1IJ3NalY8dY65XpJtuszQLux0ODVN1v2UhSMYJIwRujh1OKOT%2Ftro55%2BTiY3vMT%2BozjounW5ag2DJ9VT3yAKM6SsGO9iFz%2BswKufu2Btj7lhOHnjFzL%2FZjh5p0xos%2FaA9GHE1T5PTys79ar3t4yPEuLtli8ntEV7fzmAURVe4lsW7vnB7sQhk90FkCDvXwZzwYFExjrYIfMkC2hHnwbRKhOgSYUZkyCwwLiBtspGCTGPBBSjCYazVabh43X5UHS%2BZy3uTOnMOuclsEGOqUBA7U4VOqqfFTXG%2BbSEytPjFd4htUsrXxfUcl5%2FE%2BAz0iAtq0wzIkZOmmrFAGpHT6u5myjILl%2FckB4nk97Xo8eA2LbSFT3HPWQBx4fpDmxdgZyMTHE%2BVCQk%2F6ThcXDDtX%2B%2BWKmoSnosb9nIIg7m9N0DH3zWCC5N1iUmeHC%2Fzq%2B2WmjftgrZ0Sya36WX3xboMFm%2FnDW6%2Fre%2BPoQRaaGPYtprKXTUisl&X-Amz-Signature=c5bdd0bd8edd96c97b3b82aeb764bc3d95f1530e4d5fe3faa6077f4ecab19860&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
