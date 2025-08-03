---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUCBUB2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFCoHL1Y8f5j2U62IUd38RJlGIqc1P8fg6JQ8ypZB6CAIgH%2Fbyes87fgA81A37n63at8U3JpEgC7brboQpR3q8IdIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGnITPS4LNYsrDgdsyrcA%2B54yH8EwYgroB728yyJHN5VJE3YotfE32f8SeSqFLfH74EiBa5tpcWLl92jBaK93NWQdjMOCvSUNSNJq5HZAh0bdK7EhHriNd89uVueGNzComDMgfV%2BL8%2FemnNktVjIqxK69oto8N0ATZetaRs0wWsVeekAI0MF3p5HS6YlBUmwBfl36Rny750FtJAO%2BvAawlvFCaTxUN5pY%2FD%2BknvgCH5tBua2liq5Fr0A9ry%2BG17t00Sa7r%2FAPwF6Wy9Z%2BW583wqV3VeCLdpvqlv3WIAnWoV0Mnzq3USuGX%2FMYq95IBt9w3s2lTfyeXTpjh9bnKqBN%2Ff%2FtO3yt2NTZwZMxyiSiGSGK%2FVn4nMCSJ4tBsDAeS57lFxfU%2BisiSf%2Fyj3xTeOUE6JTKE6xLtxdlBtlKUlNYUGHyvuogG%2B0HCd7FoaC9bazGM4Cgm7itNR0FUS2GKvW3CHBzywLcxpQr%2FDrdqFMGjMHhbc0hnx%2B97x7%2BXzfZYhz6iu4Sl3VPzBZ%2F6uKA90MGI1lZGzVkTpTEw5aQIu5RzXQmkUkNIRYVIaVyH1tAtUMsQFLaE5TXrdwrQqUyd%2Fs4uJGuwh0x%2BiASGm0wycZoPPFggHkDPqR%2B0dOKjmfw2qM%2BnzPNhdtwCg6qWyzMIDavsQGOqUBV8vnWJIpziCWYQqkQyY6WBmE0fwSb7BX3ystzzRa6JC1jxtzBpfzDwzpUWje71g6Yplc%2FwyyP8H2unZSo%2FEPWyEybyHsDkMjPVKeDi6tzxntAY6LqiojOuisd2KrIiYDHRKJuKn1Fh3K0BPOX2gyCvVp7oVNXGP6NsCEjENDvii8N%2FgRqtCjnr037aP9ViiMugmee1CkUwtVxq4bw3VshK7GXgpE&X-Amz-Signature=470f033f79d08990c70e0797d8b0a3833a53a0152e3613c23997c13b475f3aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUCBUB2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFCoHL1Y8f5j2U62IUd38RJlGIqc1P8fg6JQ8ypZB6CAIgH%2Fbyes87fgA81A37n63at8U3JpEgC7brboQpR3q8IdIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGnITPS4LNYsrDgdsyrcA%2B54yH8EwYgroB728yyJHN5VJE3YotfE32f8SeSqFLfH74EiBa5tpcWLl92jBaK93NWQdjMOCvSUNSNJq5HZAh0bdK7EhHriNd89uVueGNzComDMgfV%2BL8%2FemnNktVjIqxK69oto8N0ATZetaRs0wWsVeekAI0MF3p5HS6YlBUmwBfl36Rny750FtJAO%2BvAawlvFCaTxUN5pY%2FD%2BknvgCH5tBua2liq5Fr0A9ry%2BG17t00Sa7r%2FAPwF6Wy9Z%2BW583wqV3VeCLdpvqlv3WIAnWoV0Mnzq3USuGX%2FMYq95IBt9w3s2lTfyeXTpjh9bnKqBN%2Ff%2FtO3yt2NTZwZMxyiSiGSGK%2FVn4nMCSJ4tBsDAeS57lFxfU%2BisiSf%2Fyj3xTeOUE6JTKE6xLtxdlBtlKUlNYUGHyvuogG%2B0HCd7FoaC9bazGM4Cgm7itNR0FUS2GKvW3CHBzywLcxpQr%2FDrdqFMGjMHhbc0hnx%2B97x7%2BXzfZYhz6iu4Sl3VPzBZ%2F6uKA90MGI1lZGzVkTpTEw5aQIu5RzXQmkUkNIRYVIaVyH1tAtUMsQFLaE5TXrdwrQqUyd%2Fs4uJGuwh0x%2BiASGm0wycZoPPFggHkDPqR%2B0dOKjmfw2qM%2BnzPNhdtwCg6qWyzMIDavsQGOqUBV8vnWJIpziCWYQqkQyY6WBmE0fwSb7BX3ystzzRa6JC1jxtzBpfzDwzpUWje71g6Yplc%2FwyyP8H2unZSo%2FEPWyEybyHsDkMjPVKeDi6tzxntAY6LqiojOuisd2KrIiYDHRKJuKn1Fh3K0BPOX2gyCvVp7oVNXGP6NsCEjENDvii8N%2FgRqtCjnr037aP9ViiMugmee1CkUwtVxq4bw3VshK7GXgpE&X-Amz-Signature=419c45d71a3d51e7173e3b18d450d562b25228a440094e78b1312726bf61f6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUCBUB2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFCoHL1Y8f5j2U62IUd38RJlGIqc1P8fg6JQ8ypZB6CAIgH%2Fbyes87fgA81A37n63at8U3JpEgC7brboQpR3q8IdIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGnITPS4LNYsrDgdsyrcA%2B54yH8EwYgroB728yyJHN5VJE3YotfE32f8SeSqFLfH74EiBa5tpcWLl92jBaK93NWQdjMOCvSUNSNJq5HZAh0bdK7EhHriNd89uVueGNzComDMgfV%2BL8%2FemnNktVjIqxK69oto8N0ATZetaRs0wWsVeekAI0MF3p5HS6YlBUmwBfl36Rny750FtJAO%2BvAawlvFCaTxUN5pY%2FD%2BknvgCH5tBua2liq5Fr0A9ry%2BG17t00Sa7r%2FAPwF6Wy9Z%2BW583wqV3VeCLdpvqlv3WIAnWoV0Mnzq3USuGX%2FMYq95IBt9w3s2lTfyeXTpjh9bnKqBN%2Ff%2FtO3yt2NTZwZMxyiSiGSGK%2FVn4nMCSJ4tBsDAeS57lFxfU%2BisiSf%2Fyj3xTeOUE6JTKE6xLtxdlBtlKUlNYUGHyvuogG%2B0HCd7FoaC9bazGM4Cgm7itNR0FUS2GKvW3CHBzywLcxpQr%2FDrdqFMGjMHhbc0hnx%2B97x7%2BXzfZYhz6iu4Sl3VPzBZ%2F6uKA90MGI1lZGzVkTpTEw5aQIu5RzXQmkUkNIRYVIaVyH1tAtUMsQFLaE5TXrdwrQqUyd%2Fs4uJGuwh0x%2BiASGm0wycZoPPFggHkDPqR%2B0dOKjmfw2qM%2BnzPNhdtwCg6qWyzMIDavsQGOqUBV8vnWJIpziCWYQqkQyY6WBmE0fwSb7BX3ystzzRa6JC1jxtzBpfzDwzpUWje71g6Yplc%2FwyyP8H2unZSo%2FEPWyEybyHsDkMjPVKeDi6tzxntAY6LqiojOuisd2KrIiYDHRKJuKn1Fh3K0BPOX2gyCvVp7oVNXGP6NsCEjENDvii8N%2FgRqtCjnr037aP9ViiMugmee1CkUwtVxq4bw3VshK7GXgpE&X-Amz-Signature=547c5dac4a34995c67faf798b5b1b46b29ee960af09c8a8e5f7ac6a7203912ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUCBUB2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFCoHL1Y8f5j2U62IUd38RJlGIqc1P8fg6JQ8ypZB6CAIgH%2Fbyes87fgA81A37n63at8U3JpEgC7brboQpR3q8IdIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGnITPS4LNYsrDgdsyrcA%2B54yH8EwYgroB728yyJHN5VJE3YotfE32f8SeSqFLfH74EiBa5tpcWLl92jBaK93NWQdjMOCvSUNSNJq5HZAh0bdK7EhHriNd89uVueGNzComDMgfV%2BL8%2FemnNktVjIqxK69oto8N0ATZetaRs0wWsVeekAI0MF3p5HS6YlBUmwBfl36Rny750FtJAO%2BvAawlvFCaTxUN5pY%2FD%2BknvgCH5tBua2liq5Fr0A9ry%2BG17t00Sa7r%2FAPwF6Wy9Z%2BW583wqV3VeCLdpvqlv3WIAnWoV0Mnzq3USuGX%2FMYq95IBt9w3s2lTfyeXTpjh9bnKqBN%2Ff%2FtO3yt2NTZwZMxyiSiGSGK%2FVn4nMCSJ4tBsDAeS57lFxfU%2BisiSf%2Fyj3xTeOUE6JTKE6xLtxdlBtlKUlNYUGHyvuogG%2B0HCd7FoaC9bazGM4Cgm7itNR0FUS2GKvW3CHBzywLcxpQr%2FDrdqFMGjMHhbc0hnx%2B97x7%2BXzfZYhz6iu4Sl3VPzBZ%2F6uKA90MGI1lZGzVkTpTEw5aQIu5RzXQmkUkNIRYVIaVyH1tAtUMsQFLaE5TXrdwrQqUyd%2Fs4uJGuwh0x%2BiASGm0wycZoPPFggHkDPqR%2B0dOKjmfw2qM%2BnzPNhdtwCg6qWyzMIDavsQGOqUBV8vnWJIpziCWYQqkQyY6WBmE0fwSb7BX3ystzzRa6JC1jxtzBpfzDwzpUWje71g6Yplc%2FwyyP8H2unZSo%2FEPWyEybyHsDkMjPVKeDi6tzxntAY6LqiojOuisd2KrIiYDHRKJuKn1Fh3K0BPOX2gyCvVp7oVNXGP6NsCEjENDvii8N%2FgRqtCjnr037aP9ViiMugmee1CkUwtVxq4bw3VshK7GXgpE&X-Amz-Signature=4fc68b98737f1047fc0ce5851f703900f00d562df431d637b133e65f14edbd03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUCBUB2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFCoHL1Y8f5j2U62IUd38RJlGIqc1P8fg6JQ8ypZB6CAIgH%2Fbyes87fgA81A37n63at8U3JpEgC7brboQpR3q8IdIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGnITPS4LNYsrDgdsyrcA%2B54yH8EwYgroB728yyJHN5VJE3YotfE32f8SeSqFLfH74EiBa5tpcWLl92jBaK93NWQdjMOCvSUNSNJq5HZAh0bdK7EhHriNd89uVueGNzComDMgfV%2BL8%2FemnNktVjIqxK69oto8N0ATZetaRs0wWsVeekAI0MF3p5HS6YlBUmwBfl36Rny750FtJAO%2BvAawlvFCaTxUN5pY%2FD%2BknvgCH5tBua2liq5Fr0A9ry%2BG17t00Sa7r%2FAPwF6Wy9Z%2BW583wqV3VeCLdpvqlv3WIAnWoV0Mnzq3USuGX%2FMYq95IBt9w3s2lTfyeXTpjh9bnKqBN%2Ff%2FtO3yt2NTZwZMxyiSiGSGK%2FVn4nMCSJ4tBsDAeS57lFxfU%2BisiSf%2Fyj3xTeOUE6JTKE6xLtxdlBtlKUlNYUGHyvuogG%2B0HCd7FoaC9bazGM4Cgm7itNR0FUS2GKvW3CHBzywLcxpQr%2FDrdqFMGjMHhbc0hnx%2B97x7%2BXzfZYhz6iu4Sl3VPzBZ%2F6uKA90MGI1lZGzVkTpTEw5aQIu5RzXQmkUkNIRYVIaVyH1tAtUMsQFLaE5TXrdwrQqUyd%2Fs4uJGuwh0x%2BiASGm0wycZoPPFggHkDPqR%2B0dOKjmfw2qM%2BnzPNhdtwCg6qWyzMIDavsQGOqUBV8vnWJIpziCWYQqkQyY6WBmE0fwSb7BX3ystzzRa6JC1jxtzBpfzDwzpUWje71g6Yplc%2FwyyP8H2unZSo%2FEPWyEybyHsDkMjPVKeDi6tzxntAY6LqiojOuisd2KrIiYDHRKJuKn1Fh3K0BPOX2gyCvVp7oVNXGP6NsCEjENDvii8N%2FgRqtCjnr037aP9ViiMugmee1CkUwtVxq4bw3VshK7GXgpE&X-Amz-Signature=bf9fb439276f767933c716cc95854b9ca478bddcf65bc65058d03d51f986c00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUCBUB2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFCoHL1Y8f5j2U62IUd38RJlGIqc1P8fg6JQ8ypZB6CAIgH%2Fbyes87fgA81A37n63at8U3JpEgC7brboQpR3q8IdIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGnITPS4LNYsrDgdsyrcA%2B54yH8EwYgroB728yyJHN5VJE3YotfE32f8SeSqFLfH74EiBa5tpcWLl92jBaK93NWQdjMOCvSUNSNJq5HZAh0bdK7EhHriNd89uVueGNzComDMgfV%2BL8%2FemnNktVjIqxK69oto8N0ATZetaRs0wWsVeekAI0MF3p5HS6YlBUmwBfl36Rny750FtJAO%2BvAawlvFCaTxUN5pY%2FD%2BknvgCH5tBua2liq5Fr0A9ry%2BG17t00Sa7r%2FAPwF6Wy9Z%2BW583wqV3VeCLdpvqlv3WIAnWoV0Mnzq3USuGX%2FMYq95IBt9w3s2lTfyeXTpjh9bnKqBN%2Ff%2FtO3yt2NTZwZMxyiSiGSGK%2FVn4nMCSJ4tBsDAeS57lFxfU%2BisiSf%2Fyj3xTeOUE6JTKE6xLtxdlBtlKUlNYUGHyvuogG%2B0HCd7FoaC9bazGM4Cgm7itNR0FUS2GKvW3CHBzywLcxpQr%2FDrdqFMGjMHhbc0hnx%2B97x7%2BXzfZYhz6iu4Sl3VPzBZ%2F6uKA90MGI1lZGzVkTpTEw5aQIu5RzXQmkUkNIRYVIaVyH1tAtUMsQFLaE5TXrdwrQqUyd%2Fs4uJGuwh0x%2BiASGm0wycZoPPFggHkDPqR%2B0dOKjmfw2qM%2BnzPNhdtwCg6qWyzMIDavsQGOqUBV8vnWJIpziCWYQqkQyY6WBmE0fwSb7BX3ystzzRa6JC1jxtzBpfzDwzpUWje71g6Yplc%2FwyyP8H2unZSo%2FEPWyEybyHsDkMjPVKeDi6tzxntAY6LqiojOuisd2KrIiYDHRKJuKn1Fh3K0BPOX2gyCvVp7oVNXGP6NsCEjENDvii8N%2FgRqtCjnr037aP9ViiMugmee1CkUwtVxq4bw3VshK7GXgpE&X-Amz-Signature=0da84df3aa975b131c3e4fac38aacc2577310b2c72b1572560362cb1b3884648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUCBUB2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFCoHL1Y8f5j2U62IUd38RJlGIqc1P8fg6JQ8ypZB6CAIgH%2Fbyes87fgA81A37n63at8U3JpEgC7brboQpR3q8IdIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGnITPS4LNYsrDgdsyrcA%2B54yH8EwYgroB728yyJHN5VJE3YotfE32f8SeSqFLfH74EiBa5tpcWLl92jBaK93NWQdjMOCvSUNSNJq5HZAh0bdK7EhHriNd89uVueGNzComDMgfV%2BL8%2FemnNktVjIqxK69oto8N0ATZetaRs0wWsVeekAI0MF3p5HS6YlBUmwBfl36Rny750FtJAO%2BvAawlvFCaTxUN5pY%2FD%2BknvgCH5tBua2liq5Fr0A9ry%2BG17t00Sa7r%2FAPwF6Wy9Z%2BW583wqV3VeCLdpvqlv3WIAnWoV0Mnzq3USuGX%2FMYq95IBt9w3s2lTfyeXTpjh9bnKqBN%2Ff%2FtO3yt2NTZwZMxyiSiGSGK%2FVn4nMCSJ4tBsDAeS57lFxfU%2BisiSf%2Fyj3xTeOUE6JTKE6xLtxdlBtlKUlNYUGHyvuogG%2B0HCd7FoaC9bazGM4Cgm7itNR0FUS2GKvW3CHBzywLcxpQr%2FDrdqFMGjMHhbc0hnx%2B97x7%2BXzfZYhz6iu4Sl3VPzBZ%2F6uKA90MGI1lZGzVkTpTEw5aQIu5RzXQmkUkNIRYVIaVyH1tAtUMsQFLaE5TXrdwrQqUyd%2Fs4uJGuwh0x%2BiASGm0wycZoPPFggHkDPqR%2B0dOKjmfw2qM%2BnzPNhdtwCg6qWyzMIDavsQGOqUBV8vnWJIpziCWYQqkQyY6WBmE0fwSb7BX3ystzzRa6JC1jxtzBpfzDwzpUWje71g6Yplc%2FwyyP8H2unZSo%2FEPWyEybyHsDkMjPVKeDi6tzxntAY6LqiojOuisd2KrIiYDHRKJuKn1Fh3K0BPOX2gyCvVp7oVNXGP6NsCEjENDvii8N%2FgRqtCjnr037aP9ViiMugmee1CkUwtVxq4bw3VshK7GXgpE&X-Amz-Signature=d1db08968f06e92e4ac60d1850eb357b40ca7dd7e5ca1c0029c2e6f23f51d9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
