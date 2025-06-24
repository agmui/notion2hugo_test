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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSGQDHE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIE3cRXBYNui3yPXHfdgfCTrgnak2CSRMTrBCMRrEeLxhAiBO96erJTxB5Cs7pssoYkUidUCELWfgFq2yHRr9OUA%2FcCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMOkduzgZg0HE9zUtyKtwDKUcuIKM5QCj59yvOHEzrzTwsHoArBiqdXkzYwUE%2BWhSLM1NgiWo2uHoK3GLk4KT0Pk7ixTlaA60xjTiCQBL0R4gH8L%2FdZFPrvyqMuavDmzKDzcCuEHKDbyJeHhMqeO18Hfjhch2zqjoaI4XOKDlLFr5PSfq2cHIw58GI54v3HQOq2voMgEapJ6svrJwMV7nkjdWPOZW1NKlf67QG8LfPD%2Fm0IE8v%2FTZjsfBmNrTVItZq0TU1lXUW7KiJITEw2b7djrevVoQIT2u%2BDHet5u4YbOMYa8oj8OxPReNvxYOclCpFrf13jjwk9607rCwmu01STsD16WpCPleEoQxAlPaellhFItf7n3Tl0vrl6G%2BD0iQ0KSsUCssT2XXena%2BodgtB53p798sRgJoDatHkZ3oNqtDHYfUrMdkID2RrFaocZxhnQtrwxxxMtQxKsvUSiVgkombrh38kkXUpq2XYtLSNC3Wcca%2Bohz%2BjZX827NgtloKJmKMBZ4zNxCZpuAyiBEijkk75dRi4e312N%2BeaaStQE32%2BeLR9bU2bvbe0ASKr8WshZPKVZY%2BGkebAXQVNPdfUTfq1VGTilpFhwdQL71rVX3B9KxU0odbOUSL37r7Ohw3H4aCdR0VJEvaRbaAwlrLpwgY6pgG6kL5kggyMjESCvaC3mfiVfmkLnG7z75wxkOWzABbGDHW7jx15bbF7rk2gxhDZ%2FsMyLykEuFV%2B4kwkjGV0D7SAmp624QFFoWACNSxF4agdApWAZ%2B5OvPZChKdeImV0DdlIL0CnYYXmrp5c78Jdgi9NA9GIDbE%2Ff3gFD4RydXynSormpUKkB4FNkr18BVz69y%2FSmxDZXvRGVLDXHahxP947WpY%2FtSzb&X-Amz-Signature=538273f4a381d29662f320da484f46b56cc1f55b988da554491b74bee5249136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSGQDHE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIE3cRXBYNui3yPXHfdgfCTrgnak2CSRMTrBCMRrEeLxhAiBO96erJTxB5Cs7pssoYkUidUCELWfgFq2yHRr9OUA%2FcCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMOkduzgZg0HE9zUtyKtwDKUcuIKM5QCj59yvOHEzrzTwsHoArBiqdXkzYwUE%2BWhSLM1NgiWo2uHoK3GLk4KT0Pk7ixTlaA60xjTiCQBL0R4gH8L%2FdZFPrvyqMuavDmzKDzcCuEHKDbyJeHhMqeO18Hfjhch2zqjoaI4XOKDlLFr5PSfq2cHIw58GI54v3HQOq2voMgEapJ6svrJwMV7nkjdWPOZW1NKlf67QG8LfPD%2Fm0IE8v%2FTZjsfBmNrTVItZq0TU1lXUW7KiJITEw2b7djrevVoQIT2u%2BDHet5u4YbOMYa8oj8OxPReNvxYOclCpFrf13jjwk9607rCwmu01STsD16WpCPleEoQxAlPaellhFItf7n3Tl0vrl6G%2BD0iQ0KSsUCssT2XXena%2BodgtB53p798sRgJoDatHkZ3oNqtDHYfUrMdkID2RrFaocZxhnQtrwxxxMtQxKsvUSiVgkombrh38kkXUpq2XYtLSNC3Wcca%2Bohz%2BjZX827NgtloKJmKMBZ4zNxCZpuAyiBEijkk75dRi4e312N%2BeaaStQE32%2BeLR9bU2bvbe0ASKr8WshZPKVZY%2BGkebAXQVNPdfUTfq1VGTilpFhwdQL71rVX3B9KxU0odbOUSL37r7Ohw3H4aCdR0VJEvaRbaAwlrLpwgY6pgG6kL5kggyMjESCvaC3mfiVfmkLnG7z75wxkOWzABbGDHW7jx15bbF7rk2gxhDZ%2FsMyLykEuFV%2B4kwkjGV0D7SAmp624QFFoWACNSxF4agdApWAZ%2B5OvPZChKdeImV0DdlIL0CnYYXmrp5c78Jdgi9NA9GIDbE%2Ff3gFD4RydXynSormpUKkB4FNkr18BVz69y%2FSmxDZXvRGVLDXHahxP947WpY%2FtSzb&X-Amz-Signature=137815861a1e4e1f9f8d9d7de4a661cbca23afefa5000f41b96913612f16941d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSGQDHE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIE3cRXBYNui3yPXHfdgfCTrgnak2CSRMTrBCMRrEeLxhAiBO96erJTxB5Cs7pssoYkUidUCELWfgFq2yHRr9OUA%2FcCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMOkduzgZg0HE9zUtyKtwDKUcuIKM5QCj59yvOHEzrzTwsHoArBiqdXkzYwUE%2BWhSLM1NgiWo2uHoK3GLk4KT0Pk7ixTlaA60xjTiCQBL0R4gH8L%2FdZFPrvyqMuavDmzKDzcCuEHKDbyJeHhMqeO18Hfjhch2zqjoaI4XOKDlLFr5PSfq2cHIw58GI54v3HQOq2voMgEapJ6svrJwMV7nkjdWPOZW1NKlf67QG8LfPD%2Fm0IE8v%2FTZjsfBmNrTVItZq0TU1lXUW7KiJITEw2b7djrevVoQIT2u%2BDHet5u4YbOMYa8oj8OxPReNvxYOclCpFrf13jjwk9607rCwmu01STsD16WpCPleEoQxAlPaellhFItf7n3Tl0vrl6G%2BD0iQ0KSsUCssT2XXena%2BodgtB53p798sRgJoDatHkZ3oNqtDHYfUrMdkID2RrFaocZxhnQtrwxxxMtQxKsvUSiVgkombrh38kkXUpq2XYtLSNC3Wcca%2Bohz%2BjZX827NgtloKJmKMBZ4zNxCZpuAyiBEijkk75dRi4e312N%2BeaaStQE32%2BeLR9bU2bvbe0ASKr8WshZPKVZY%2BGkebAXQVNPdfUTfq1VGTilpFhwdQL71rVX3B9KxU0odbOUSL37r7Ohw3H4aCdR0VJEvaRbaAwlrLpwgY6pgG6kL5kggyMjESCvaC3mfiVfmkLnG7z75wxkOWzABbGDHW7jx15bbF7rk2gxhDZ%2FsMyLykEuFV%2B4kwkjGV0D7SAmp624QFFoWACNSxF4agdApWAZ%2B5OvPZChKdeImV0DdlIL0CnYYXmrp5c78Jdgi9NA9GIDbE%2Ff3gFD4RydXynSormpUKkB4FNkr18BVz69y%2FSmxDZXvRGVLDXHahxP947WpY%2FtSzb&X-Amz-Signature=539a7e496e27ed798501945c40cc0f1823beaad77d40b2690c7ecb7165ba357a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSGQDHE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIE3cRXBYNui3yPXHfdgfCTrgnak2CSRMTrBCMRrEeLxhAiBO96erJTxB5Cs7pssoYkUidUCELWfgFq2yHRr9OUA%2FcCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMOkduzgZg0HE9zUtyKtwDKUcuIKM5QCj59yvOHEzrzTwsHoArBiqdXkzYwUE%2BWhSLM1NgiWo2uHoK3GLk4KT0Pk7ixTlaA60xjTiCQBL0R4gH8L%2FdZFPrvyqMuavDmzKDzcCuEHKDbyJeHhMqeO18Hfjhch2zqjoaI4XOKDlLFr5PSfq2cHIw58GI54v3HQOq2voMgEapJ6svrJwMV7nkjdWPOZW1NKlf67QG8LfPD%2Fm0IE8v%2FTZjsfBmNrTVItZq0TU1lXUW7KiJITEw2b7djrevVoQIT2u%2BDHet5u4YbOMYa8oj8OxPReNvxYOclCpFrf13jjwk9607rCwmu01STsD16WpCPleEoQxAlPaellhFItf7n3Tl0vrl6G%2BD0iQ0KSsUCssT2XXena%2BodgtB53p798sRgJoDatHkZ3oNqtDHYfUrMdkID2RrFaocZxhnQtrwxxxMtQxKsvUSiVgkombrh38kkXUpq2XYtLSNC3Wcca%2Bohz%2BjZX827NgtloKJmKMBZ4zNxCZpuAyiBEijkk75dRi4e312N%2BeaaStQE32%2BeLR9bU2bvbe0ASKr8WshZPKVZY%2BGkebAXQVNPdfUTfq1VGTilpFhwdQL71rVX3B9KxU0odbOUSL37r7Ohw3H4aCdR0VJEvaRbaAwlrLpwgY6pgG6kL5kggyMjESCvaC3mfiVfmkLnG7z75wxkOWzABbGDHW7jx15bbF7rk2gxhDZ%2FsMyLykEuFV%2B4kwkjGV0D7SAmp624QFFoWACNSxF4agdApWAZ%2B5OvPZChKdeImV0DdlIL0CnYYXmrp5c78Jdgi9NA9GIDbE%2Ff3gFD4RydXynSormpUKkB4FNkr18BVz69y%2FSmxDZXvRGVLDXHahxP947WpY%2FtSzb&X-Amz-Signature=befb02b94e688fd7b5fbb5dc06fd34435caae76d9bf3e8aa0a99291205beeba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSGQDHE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIE3cRXBYNui3yPXHfdgfCTrgnak2CSRMTrBCMRrEeLxhAiBO96erJTxB5Cs7pssoYkUidUCELWfgFq2yHRr9OUA%2FcCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMOkduzgZg0HE9zUtyKtwDKUcuIKM5QCj59yvOHEzrzTwsHoArBiqdXkzYwUE%2BWhSLM1NgiWo2uHoK3GLk4KT0Pk7ixTlaA60xjTiCQBL0R4gH8L%2FdZFPrvyqMuavDmzKDzcCuEHKDbyJeHhMqeO18Hfjhch2zqjoaI4XOKDlLFr5PSfq2cHIw58GI54v3HQOq2voMgEapJ6svrJwMV7nkjdWPOZW1NKlf67QG8LfPD%2Fm0IE8v%2FTZjsfBmNrTVItZq0TU1lXUW7KiJITEw2b7djrevVoQIT2u%2BDHet5u4YbOMYa8oj8OxPReNvxYOclCpFrf13jjwk9607rCwmu01STsD16WpCPleEoQxAlPaellhFItf7n3Tl0vrl6G%2BD0iQ0KSsUCssT2XXena%2BodgtB53p798sRgJoDatHkZ3oNqtDHYfUrMdkID2RrFaocZxhnQtrwxxxMtQxKsvUSiVgkombrh38kkXUpq2XYtLSNC3Wcca%2Bohz%2BjZX827NgtloKJmKMBZ4zNxCZpuAyiBEijkk75dRi4e312N%2BeaaStQE32%2BeLR9bU2bvbe0ASKr8WshZPKVZY%2BGkebAXQVNPdfUTfq1VGTilpFhwdQL71rVX3B9KxU0odbOUSL37r7Ohw3H4aCdR0VJEvaRbaAwlrLpwgY6pgG6kL5kggyMjESCvaC3mfiVfmkLnG7z75wxkOWzABbGDHW7jx15bbF7rk2gxhDZ%2FsMyLykEuFV%2B4kwkjGV0D7SAmp624QFFoWACNSxF4agdApWAZ%2B5OvPZChKdeImV0DdlIL0CnYYXmrp5c78Jdgi9NA9GIDbE%2Ff3gFD4RydXynSormpUKkB4FNkr18BVz69y%2FSmxDZXvRGVLDXHahxP947WpY%2FtSzb&X-Amz-Signature=40bc68753e2d42af85e4466c0bbbd0ef06437cbbee7476ba36c254c6a19db0ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSGQDHE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIE3cRXBYNui3yPXHfdgfCTrgnak2CSRMTrBCMRrEeLxhAiBO96erJTxB5Cs7pssoYkUidUCELWfgFq2yHRr9OUA%2FcCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMOkduzgZg0HE9zUtyKtwDKUcuIKM5QCj59yvOHEzrzTwsHoArBiqdXkzYwUE%2BWhSLM1NgiWo2uHoK3GLk4KT0Pk7ixTlaA60xjTiCQBL0R4gH8L%2FdZFPrvyqMuavDmzKDzcCuEHKDbyJeHhMqeO18Hfjhch2zqjoaI4XOKDlLFr5PSfq2cHIw58GI54v3HQOq2voMgEapJ6svrJwMV7nkjdWPOZW1NKlf67QG8LfPD%2Fm0IE8v%2FTZjsfBmNrTVItZq0TU1lXUW7KiJITEw2b7djrevVoQIT2u%2BDHet5u4YbOMYa8oj8OxPReNvxYOclCpFrf13jjwk9607rCwmu01STsD16WpCPleEoQxAlPaellhFItf7n3Tl0vrl6G%2BD0iQ0KSsUCssT2XXena%2BodgtB53p798sRgJoDatHkZ3oNqtDHYfUrMdkID2RrFaocZxhnQtrwxxxMtQxKsvUSiVgkombrh38kkXUpq2XYtLSNC3Wcca%2Bohz%2BjZX827NgtloKJmKMBZ4zNxCZpuAyiBEijkk75dRi4e312N%2BeaaStQE32%2BeLR9bU2bvbe0ASKr8WshZPKVZY%2BGkebAXQVNPdfUTfq1VGTilpFhwdQL71rVX3B9KxU0odbOUSL37r7Ohw3H4aCdR0VJEvaRbaAwlrLpwgY6pgG6kL5kggyMjESCvaC3mfiVfmkLnG7z75wxkOWzABbGDHW7jx15bbF7rk2gxhDZ%2FsMyLykEuFV%2B4kwkjGV0D7SAmp624QFFoWACNSxF4agdApWAZ%2B5OvPZChKdeImV0DdlIL0CnYYXmrp5c78Jdgi9NA9GIDbE%2Ff3gFD4RydXynSormpUKkB4FNkr18BVz69y%2FSmxDZXvRGVLDXHahxP947WpY%2FtSzb&X-Amz-Signature=7b5410d81535780f6a1f8b67a510861ca809d0eb68d0b647ee48b38763021e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSGQDHE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIE3cRXBYNui3yPXHfdgfCTrgnak2CSRMTrBCMRrEeLxhAiBO96erJTxB5Cs7pssoYkUidUCELWfgFq2yHRr9OUA%2FcCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMOkduzgZg0HE9zUtyKtwDKUcuIKM5QCj59yvOHEzrzTwsHoArBiqdXkzYwUE%2BWhSLM1NgiWo2uHoK3GLk4KT0Pk7ixTlaA60xjTiCQBL0R4gH8L%2FdZFPrvyqMuavDmzKDzcCuEHKDbyJeHhMqeO18Hfjhch2zqjoaI4XOKDlLFr5PSfq2cHIw58GI54v3HQOq2voMgEapJ6svrJwMV7nkjdWPOZW1NKlf67QG8LfPD%2Fm0IE8v%2FTZjsfBmNrTVItZq0TU1lXUW7KiJITEw2b7djrevVoQIT2u%2BDHet5u4YbOMYa8oj8OxPReNvxYOclCpFrf13jjwk9607rCwmu01STsD16WpCPleEoQxAlPaellhFItf7n3Tl0vrl6G%2BD0iQ0KSsUCssT2XXena%2BodgtB53p798sRgJoDatHkZ3oNqtDHYfUrMdkID2RrFaocZxhnQtrwxxxMtQxKsvUSiVgkombrh38kkXUpq2XYtLSNC3Wcca%2Bohz%2BjZX827NgtloKJmKMBZ4zNxCZpuAyiBEijkk75dRi4e312N%2BeaaStQE32%2BeLR9bU2bvbe0ASKr8WshZPKVZY%2BGkebAXQVNPdfUTfq1VGTilpFhwdQL71rVX3B9KxU0odbOUSL37r7Ohw3H4aCdR0VJEvaRbaAwlrLpwgY6pgG6kL5kggyMjESCvaC3mfiVfmkLnG7z75wxkOWzABbGDHW7jx15bbF7rk2gxhDZ%2FsMyLykEuFV%2B4kwkjGV0D7SAmp624QFFoWACNSxF4agdApWAZ%2B5OvPZChKdeImV0DdlIL0CnYYXmrp5c78Jdgi9NA9GIDbE%2Ff3gFD4RydXynSormpUKkB4FNkr18BVz69y%2FSmxDZXvRGVLDXHahxP947WpY%2FtSzb&X-Amz-Signature=9d6ac145ee932cd151ae54a961c662570d4aca81ef3fb7b129033d2bf62fdbba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
