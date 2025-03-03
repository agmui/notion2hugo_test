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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUCWQXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMhQpP9ecvEcjTNBUynegMydZxouhg1m2R%2FHwUgPyttAiAtntP2RM6t763%2B8fSofZ%2BfQUHVqSdtI6gCWoaLRqs3yyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvt0e%2FysW5vhkaQ7ZKtwDHFG8SlrXqbFa%2B1nePFf6bbcg7Yx6w%2F4Zs8apTp5F2OTrjfT7QQPi4txukQyjScsz6%2FZqhX0yWQG67cQRauj76OJnkO%2FzDOSIZkutt8H1DOV5Oi3I%2Fq5mYI5ZA2EREk2GrbXoyZo3%2FZV3e%2FPu2pJli9knEoY5tVI6kcM3LYsr3C5q3JmJ%2FkNbVtAJj8mp4dxqjib%2FGlzS%2FKhRgJnNaGhwVN%2FCJsnt5Yp6TmFiok6vpvAm%2B%2FV3LIzh5du19EPd71cs3kXLl%2ByEl9rAoRQjeqr1rASoJ0vmkqeQfjvjNJBij%2FHr1QQGw1GTzueAYifq6eAOJq%2FNquWHXrS8BH24CT217y8nuhrRvdM%2FZ7mTctHDshrS23uFcp5jr%2By1OFRx%2Fgzyh3pSMCaHERHlFi2b9IdD4J4TrYlzmKVPhA%2FsYwvyG%2BQFjnGNFI%2FW3pKv1Wb0Adnjsp2aOfM9KgiN7XTnCvqd8wxv4M3GmXGYgmtJwDsyyul7EecvoTQGlBAYE%2Bs8r9UGOflxL7I8tHn6tyZnfw9rBoTuTVHUchadwd714BjpK8TOG9A8esM54BYYgjgT%2B%2F5mktSbCheMSRqgIIDxLGToZvRE6XAcBz1Leji2WQsS%2BJhvuncOseBk0XKS4CgwiruWvgY6pgEGrvWtxYIBLnbg05T%2BEvcKI8a%2FSFn8lNmHGUmjuTsMJQ%2FW7y4G7Y9NfhUGIlsRNLIWSdpeLwvuxZPMM8qwchAaloo8g9ufOwq2jAryQ%2BdWSA2HMBelVdH5chG7%2FxctdrdK9zXv%2FSXNmZJIFX4jxguQfL7uW9fPUgNZBQrHYMc8vU1T9fP%2BKFTrcMiB0UA2AfhKo4N76FmYYAL17ovqKiWXRsSg%2BeKa&X-Amz-Signature=530e2a8154fa628c15ea43045642809a53f609d49d2ca975f49dbfad20e62493&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUCWQXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMhQpP9ecvEcjTNBUynegMydZxouhg1m2R%2FHwUgPyttAiAtntP2RM6t763%2B8fSofZ%2BfQUHVqSdtI6gCWoaLRqs3yyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvt0e%2FysW5vhkaQ7ZKtwDHFG8SlrXqbFa%2B1nePFf6bbcg7Yx6w%2F4Zs8apTp5F2OTrjfT7QQPi4txukQyjScsz6%2FZqhX0yWQG67cQRauj76OJnkO%2FzDOSIZkutt8H1DOV5Oi3I%2Fq5mYI5ZA2EREk2GrbXoyZo3%2FZV3e%2FPu2pJli9knEoY5tVI6kcM3LYsr3C5q3JmJ%2FkNbVtAJj8mp4dxqjib%2FGlzS%2FKhRgJnNaGhwVN%2FCJsnt5Yp6TmFiok6vpvAm%2B%2FV3LIzh5du19EPd71cs3kXLl%2ByEl9rAoRQjeqr1rASoJ0vmkqeQfjvjNJBij%2FHr1QQGw1GTzueAYifq6eAOJq%2FNquWHXrS8BH24CT217y8nuhrRvdM%2FZ7mTctHDshrS23uFcp5jr%2By1OFRx%2Fgzyh3pSMCaHERHlFi2b9IdD4J4TrYlzmKVPhA%2FsYwvyG%2BQFjnGNFI%2FW3pKv1Wb0Adnjsp2aOfM9KgiN7XTnCvqd8wxv4M3GmXGYgmtJwDsyyul7EecvoTQGlBAYE%2Bs8r9UGOflxL7I8tHn6tyZnfw9rBoTuTVHUchadwd714BjpK8TOG9A8esM54BYYgjgT%2B%2F5mktSbCheMSRqgIIDxLGToZvRE6XAcBz1Leji2WQsS%2BJhvuncOseBk0XKS4CgwiruWvgY6pgEGrvWtxYIBLnbg05T%2BEvcKI8a%2FSFn8lNmHGUmjuTsMJQ%2FW7y4G7Y9NfhUGIlsRNLIWSdpeLwvuxZPMM8qwchAaloo8g9ufOwq2jAryQ%2BdWSA2HMBelVdH5chG7%2FxctdrdK9zXv%2FSXNmZJIFX4jxguQfL7uW9fPUgNZBQrHYMc8vU1T9fP%2BKFTrcMiB0UA2AfhKo4N76FmYYAL17ovqKiWXRsSg%2BeKa&X-Amz-Signature=b8874fb04cff5766b205ed37042e0be98755a97110bda57128ef38668c2e29b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUCWQXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMhQpP9ecvEcjTNBUynegMydZxouhg1m2R%2FHwUgPyttAiAtntP2RM6t763%2B8fSofZ%2BfQUHVqSdtI6gCWoaLRqs3yyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvt0e%2FysW5vhkaQ7ZKtwDHFG8SlrXqbFa%2B1nePFf6bbcg7Yx6w%2F4Zs8apTp5F2OTrjfT7QQPi4txukQyjScsz6%2FZqhX0yWQG67cQRauj76OJnkO%2FzDOSIZkutt8H1DOV5Oi3I%2Fq5mYI5ZA2EREk2GrbXoyZo3%2FZV3e%2FPu2pJli9knEoY5tVI6kcM3LYsr3C5q3JmJ%2FkNbVtAJj8mp4dxqjib%2FGlzS%2FKhRgJnNaGhwVN%2FCJsnt5Yp6TmFiok6vpvAm%2B%2FV3LIzh5du19EPd71cs3kXLl%2ByEl9rAoRQjeqr1rASoJ0vmkqeQfjvjNJBij%2FHr1QQGw1GTzueAYifq6eAOJq%2FNquWHXrS8BH24CT217y8nuhrRvdM%2FZ7mTctHDshrS23uFcp5jr%2By1OFRx%2Fgzyh3pSMCaHERHlFi2b9IdD4J4TrYlzmKVPhA%2FsYwvyG%2BQFjnGNFI%2FW3pKv1Wb0Adnjsp2aOfM9KgiN7XTnCvqd8wxv4M3GmXGYgmtJwDsyyul7EecvoTQGlBAYE%2Bs8r9UGOflxL7I8tHn6tyZnfw9rBoTuTVHUchadwd714BjpK8TOG9A8esM54BYYgjgT%2B%2F5mktSbCheMSRqgIIDxLGToZvRE6XAcBz1Leji2WQsS%2BJhvuncOseBk0XKS4CgwiruWvgY6pgEGrvWtxYIBLnbg05T%2BEvcKI8a%2FSFn8lNmHGUmjuTsMJQ%2FW7y4G7Y9NfhUGIlsRNLIWSdpeLwvuxZPMM8qwchAaloo8g9ufOwq2jAryQ%2BdWSA2HMBelVdH5chG7%2FxctdrdK9zXv%2FSXNmZJIFX4jxguQfL7uW9fPUgNZBQrHYMc8vU1T9fP%2BKFTrcMiB0UA2AfhKo4N76FmYYAL17ovqKiWXRsSg%2BeKa&X-Amz-Signature=f705333d1c10c34b67357227fbc4e7c5a0aa0da8caedc25af0f9c431f3e62695&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUCWQXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMhQpP9ecvEcjTNBUynegMydZxouhg1m2R%2FHwUgPyttAiAtntP2RM6t763%2B8fSofZ%2BfQUHVqSdtI6gCWoaLRqs3yyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvt0e%2FysW5vhkaQ7ZKtwDHFG8SlrXqbFa%2B1nePFf6bbcg7Yx6w%2F4Zs8apTp5F2OTrjfT7QQPi4txukQyjScsz6%2FZqhX0yWQG67cQRauj76OJnkO%2FzDOSIZkutt8H1DOV5Oi3I%2Fq5mYI5ZA2EREk2GrbXoyZo3%2FZV3e%2FPu2pJli9knEoY5tVI6kcM3LYsr3C5q3JmJ%2FkNbVtAJj8mp4dxqjib%2FGlzS%2FKhRgJnNaGhwVN%2FCJsnt5Yp6TmFiok6vpvAm%2B%2FV3LIzh5du19EPd71cs3kXLl%2ByEl9rAoRQjeqr1rASoJ0vmkqeQfjvjNJBij%2FHr1QQGw1GTzueAYifq6eAOJq%2FNquWHXrS8BH24CT217y8nuhrRvdM%2FZ7mTctHDshrS23uFcp5jr%2By1OFRx%2Fgzyh3pSMCaHERHlFi2b9IdD4J4TrYlzmKVPhA%2FsYwvyG%2BQFjnGNFI%2FW3pKv1Wb0Adnjsp2aOfM9KgiN7XTnCvqd8wxv4M3GmXGYgmtJwDsyyul7EecvoTQGlBAYE%2Bs8r9UGOflxL7I8tHn6tyZnfw9rBoTuTVHUchadwd714BjpK8TOG9A8esM54BYYgjgT%2B%2F5mktSbCheMSRqgIIDxLGToZvRE6XAcBz1Leji2WQsS%2BJhvuncOseBk0XKS4CgwiruWvgY6pgEGrvWtxYIBLnbg05T%2BEvcKI8a%2FSFn8lNmHGUmjuTsMJQ%2FW7y4G7Y9NfhUGIlsRNLIWSdpeLwvuxZPMM8qwchAaloo8g9ufOwq2jAryQ%2BdWSA2HMBelVdH5chG7%2FxctdrdK9zXv%2FSXNmZJIFX4jxguQfL7uW9fPUgNZBQrHYMc8vU1T9fP%2BKFTrcMiB0UA2AfhKo4N76FmYYAL17ovqKiWXRsSg%2BeKa&X-Amz-Signature=8c8ef3276abfb2b0c6aded32d20af8ddca52e14167cc2c51d0c3f04c5ea96b15&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUCWQXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMhQpP9ecvEcjTNBUynegMydZxouhg1m2R%2FHwUgPyttAiAtntP2RM6t763%2B8fSofZ%2BfQUHVqSdtI6gCWoaLRqs3yyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvt0e%2FysW5vhkaQ7ZKtwDHFG8SlrXqbFa%2B1nePFf6bbcg7Yx6w%2F4Zs8apTp5F2OTrjfT7QQPi4txukQyjScsz6%2FZqhX0yWQG67cQRauj76OJnkO%2FzDOSIZkutt8H1DOV5Oi3I%2Fq5mYI5ZA2EREk2GrbXoyZo3%2FZV3e%2FPu2pJli9knEoY5tVI6kcM3LYsr3C5q3JmJ%2FkNbVtAJj8mp4dxqjib%2FGlzS%2FKhRgJnNaGhwVN%2FCJsnt5Yp6TmFiok6vpvAm%2B%2FV3LIzh5du19EPd71cs3kXLl%2ByEl9rAoRQjeqr1rASoJ0vmkqeQfjvjNJBij%2FHr1QQGw1GTzueAYifq6eAOJq%2FNquWHXrS8BH24CT217y8nuhrRvdM%2FZ7mTctHDshrS23uFcp5jr%2By1OFRx%2Fgzyh3pSMCaHERHlFi2b9IdD4J4TrYlzmKVPhA%2FsYwvyG%2BQFjnGNFI%2FW3pKv1Wb0Adnjsp2aOfM9KgiN7XTnCvqd8wxv4M3GmXGYgmtJwDsyyul7EecvoTQGlBAYE%2Bs8r9UGOflxL7I8tHn6tyZnfw9rBoTuTVHUchadwd714BjpK8TOG9A8esM54BYYgjgT%2B%2F5mktSbCheMSRqgIIDxLGToZvRE6XAcBz1Leji2WQsS%2BJhvuncOseBk0XKS4CgwiruWvgY6pgEGrvWtxYIBLnbg05T%2BEvcKI8a%2FSFn8lNmHGUmjuTsMJQ%2FW7y4G7Y9NfhUGIlsRNLIWSdpeLwvuxZPMM8qwchAaloo8g9ufOwq2jAryQ%2BdWSA2HMBelVdH5chG7%2FxctdrdK9zXv%2FSXNmZJIFX4jxguQfL7uW9fPUgNZBQrHYMc8vU1T9fP%2BKFTrcMiB0UA2AfhKo4N76FmYYAL17ovqKiWXRsSg%2BeKa&X-Amz-Signature=725983e320ed655beaa46701b5dea1d3f7272d1ee930e0f7230272ec22cad858&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUCWQXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMhQpP9ecvEcjTNBUynegMydZxouhg1m2R%2FHwUgPyttAiAtntP2RM6t763%2B8fSofZ%2BfQUHVqSdtI6gCWoaLRqs3yyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvt0e%2FysW5vhkaQ7ZKtwDHFG8SlrXqbFa%2B1nePFf6bbcg7Yx6w%2F4Zs8apTp5F2OTrjfT7QQPi4txukQyjScsz6%2FZqhX0yWQG67cQRauj76OJnkO%2FzDOSIZkutt8H1DOV5Oi3I%2Fq5mYI5ZA2EREk2GrbXoyZo3%2FZV3e%2FPu2pJli9knEoY5tVI6kcM3LYsr3C5q3JmJ%2FkNbVtAJj8mp4dxqjib%2FGlzS%2FKhRgJnNaGhwVN%2FCJsnt5Yp6TmFiok6vpvAm%2B%2FV3LIzh5du19EPd71cs3kXLl%2ByEl9rAoRQjeqr1rASoJ0vmkqeQfjvjNJBij%2FHr1QQGw1GTzueAYifq6eAOJq%2FNquWHXrS8BH24CT217y8nuhrRvdM%2FZ7mTctHDshrS23uFcp5jr%2By1OFRx%2Fgzyh3pSMCaHERHlFi2b9IdD4J4TrYlzmKVPhA%2FsYwvyG%2BQFjnGNFI%2FW3pKv1Wb0Adnjsp2aOfM9KgiN7XTnCvqd8wxv4M3GmXGYgmtJwDsyyul7EecvoTQGlBAYE%2Bs8r9UGOflxL7I8tHn6tyZnfw9rBoTuTVHUchadwd714BjpK8TOG9A8esM54BYYgjgT%2B%2F5mktSbCheMSRqgIIDxLGToZvRE6XAcBz1Leji2WQsS%2BJhvuncOseBk0XKS4CgwiruWvgY6pgEGrvWtxYIBLnbg05T%2BEvcKI8a%2FSFn8lNmHGUmjuTsMJQ%2FW7y4G7Y9NfhUGIlsRNLIWSdpeLwvuxZPMM8qwchAaloo8g9ufOwq2jAryQ%2BdWSA2HMBelVdH5chG7%2FxctdrdK9zXv%2FSXNmZJIFX4jxguQfL7uW9fPUgNZBQrHYMc8vU1T9fP%2BKFTrcMiB0UA2AfhKo4N76FmYYAL17ovqKiWXRsSg%2BeKa&X-Amz-Signature=88ae304d97fa3a027065b35453fabb0be1096e13840bde194147c4d8a4e7c689&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUCWQXB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMhQpP9ecvEcjTNBUynegMydZxouhg1m2R%2FHwUgPyttAiAtntP2RM6t763%2B8fSofZ%2BfQUHVqSdtI6gCWoaLRqs3yyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvt0e%2FysW5vhkaQ7ZKtwDHFG8SlrXqbFa%2B1nePFf6bbcg7Yx6w%2F4Zs8apTp5F2OTrjfT7QQPi4txukQyjScsz6%2FZqhX0yWQG67cQRauj76OJnkO%2FzDOSIZkutt8H1DOV5Oi3I%2Fq5mYI5ZA2EREk2GrbXoyZo3%2FZV3e%2FPu2pJli9knEoY5tVI6kcM3LYsr3C5q3JmJ%2FkNbVtAJj8mp4dxqjib%2FGlzS%2FKhRgJnNaGhwVN%2FCJsnt5Yp6TmFiok6vpvAm%2B%2FV3LIzh5du19EPd71cs3kXLl%2ByEl9rAoRQjeqr1rASoJ0vmkqeQfjvjNJBij%2FHr1QQGw1GTzueAYifq6eAOJq%2FNquWHXrS8BH24CT217y8nuhrRvdM%2FZ7mTctHDshrS23uFcp5jr%2By1OFRx%2Fgzyh3pSMCaHERHlFi2b9IdD4J4TrYlzmKVPhA%2FsYwvyG%2BQFjnGNFI%2FW3pKv1Wb0Adnjsp2aOfM9KgiN7XTnCvqd8wxv4M3GmXGYgmtJwDsyyul7EecvoTQGlBAYE%2Bs8r9UGOflxL7I8tHn6tyZnfw9rBoTuTVHUchadwd714BjpK8TOG9A8esM54BYYgjgT%2B%2F5mktSbCheMSRqgIIDxLGToZvRE6XAcBz1Leji2WQsS%2BJhvuncOseBk0XKS4CgwiruWvgY6pgEGrvWtxYIBLnbg05T%2BEvcKI8a%2FSFn8lNmHGUmjuTsMJQ%2FW7y4G7Y9NfhUGIlsRNLIWSdpeLwvuxZPMM8qwchAaloo8g9ufOwq2jAryQ%2BdWSA2HMBelVdH5chG7%2FxctdrdK9zXv%2FSXNmZJIFX4jxguQfL7uW9fPUgNZBQrHYMc8vU1T9fP%2BKFTrcMiB0UA2AfhKo4N76FmYYAL17ovqKiWXRsSg%2BeKa&X-Amz-Signature=3bdd9543f0c40ea8ff287d18d3c5aaa6e034946bea39904b1ddfd27f969d7566&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
