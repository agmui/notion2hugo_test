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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N4TR6W%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHlXwnm99zkKtpWHQVmE3GOdl56Gx1JthUCeNpkBG3tuAiEA3wYf8E6oJ5QSSvCxSlhMD455LpWijJ%2FLNDKfU9%2BefOAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFb7xdsdiZ2iCIDS1SrcA3MceLHB8q5WBIlGdj4scvOu75Q1%2F%2FuV0FWSpW5DMRC2%2FnPaUPlkv7IBIlG6eSQC4OYj5ooYgaO6VZz3X3HuYPOPGo3I1BtiqJD29scy0dUgDmXCRK2o0qpkd8MgrL4Cr7964p5xMSKHgMSMB7DWdCnrGe60BspmOC5CMj7MGZfiGH1K2sXmHI8b28agUeeD1xoLX%2FgZzyv0vKasW1hWI1p1A2qkSJUS21nh%2F%2BsZydI9HutqJfobm%2FzEkHY5Y6RUMD%2BRoIA0MadD759IuWUqRRjlpLMblkRWT774B28uu81QB12efOw9HJG9GG%2F%2B7xhIEPZxNtTu%2FlES6E%2F3cZDJogg7XrLBCPdViZdfsXYLaEELzuoubF4LjFWSYJlvnyS%2B%2FH6f02aqFsp4w4FQoLkQ4m5yiTav3SekoadWmEr08XrWqGZo7UIgC4FtVAsCnFwn6PIgm3ttzhb%2BB4cTb3u%2FsO4ysAiaP0BD9uxJd1UIPQXTK7v6b21UOlA7UElD5jViJdWQqg9WilN%2F5RyjPEUIZy%2B8bAZXu6f8U2WSRJsjmFOjyrSqOg%2Fv%2FgJPCfIPnXKW%2B3DNTR%2FtOJgJ%2BOtbbj73W8efYNS20n6%2BWL9a87wQa74p939%2B%2BazMnEA7JevXML6EzcQGOqUBZO5YwCfAq%2FzrzwtinlWRD%2Bnn8BUzFSCCg3FcRXMRaPzoeJ0zTfmWzK6H2CpVi5psJkcFIxoNXI%2BQ7Xcg3k8KP41VOGkSw1e2hUvT0iII%2BrrpTfhIt8Qy%2FME2XdsqENam%2FBc8b6CIufuoMq4uGBqCCZ7Oxkv5XRczAO4Hk%2BcZskr4O%2FEyEGKlFwjlLHtAejIkADQP3hiDWxeSs%2FVJnslR2Me4OdNS&X-Amz-Signature=742eef9e9b75ecf65b32e6203c1c9581ac2d8e9e67f31d416e74e958288b276f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N4TR6W%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHlXwnm99zkKtpWHQVmE3GOdl56Gx1JthUCeNpkBG3tuAiEA3wYf8E6oJ5QSSvCxSlhMD455LpWijJ%2FLNDKfU9%2BefOAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFb7xdsdiZ2iCIDS1SrcA3MceLHB8q5WBIlGdj4scvOu75Q1%2F%2FuV0FWSpW5DMRC2%2FnPaUPlkv7IBIlG6eSQC4OYj5ooYgaO6VZz3X3HuYPOPGo3I1BtiqJD29scy0dUgDmXCRK2o0qpkd8MgrL4Cr7964p5xMSKHgMSMB7DWdCnrGe60BspmOC5CMj7MGZfiGH1K2sXmHI8b28agUeeD1xoLX%2FgZzyv0vKasW1hWI1p1A2qkSJUS21nh%2F%2BsZydI9HutqJfobm%2FzEkHY5Y6RUMD%2BRoIA0MadD759IuWUqRRjlpLMblkRWT774B28uu81QB12efOw9HJG9GG%2F%2B7xhIEPZxNtTu%2FlES6E%2F3cZDJogg7XrLBCPdViZdfsXYLaEELzuoubF4LjFWSYJlvnyS%2B%2FH6f02aqFsp4w4FQoLkQ4m5yiTav3SekoadWmEr08XrWqGZo7UIgC4FtVAsCnFwn6PIgm3ttzhb%2BB4cTb3u%2FsO4ysAiaP0BD9uxJd1UIPQXTK7v6b21UOlA7UElD5jViJdWQqg9WilN%2F5RyjPEUIZy%2B8bAZXu6f8U2WSRJsjmFOjyrSqOg%2Fv%2FgJPCfIPnXKW%2B3DNTR%2FtOJgJ%2BOtbbj73W8efYNS20n6%2BWL9a87wQa74p939%2B%2BazMnEA7JevXML6EzcQGOqUBZO5YwCfAq%2FzrzwtinlWRD%2Bnn8BUzFSCCg3FcRXMRaPzoeJ0zTfmWzK6H2CpVi5psJkcFIxoNXI%2BQ7Xcg3k8KP41VOGkSw1e2hUvT0iII%2BrrpTfhIt8Qy%2FME2XdsqENam%2FBc8b6CIufuoMq4uGBqCCZ7Oxkv5XRczAO4Hk%2BcZskr4O%2FEyEGKlFwjlLHtAejIkADQP3hiDWxeSs%2FVJnslR2Me4OdNS&X-Amz-Signature=1a18b8bf774993820a3115c2846597453c6f1298028eadb0486f95313ee7a12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N4TR6W%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHlXwnm99zkKtpWHQVmE3GOdl56Gx1JthUCeNpkBG3tuAiEA3wYf8E6oJ5QSSvCxSlhMD455LpWijJ%2FLNDKfU9%2BefOAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFb7xdsdiZ2iCIDS1SrcA3MceLHB8q5WBIlGdj4scvOu75Q1%2F%2FuV0FWSpW5DMRC2%2FnPaUPlkv7IBIlG6eSQC4OYj5ooYgaO6VZz3X3HuYPOPGo3I1BtiqJD29scy0dUgDmXCRK2o0qpkd8MgrL4Cr7964p5xMSKHgMSMB7DWdCnrGe60BspmOC5CMj7MGZfiGH1K2sXmHI8b28agUeeD1xoLX%2FgZzyv0vKasW1hWI1p1A2qkSJUS21nh%2F%2BsZydI9HutqJfobm%2FzEkHY5Y6RUMD%2BRoIA0MadD759IuWUqRRjlpLMblkRWT774B28uu81QB12efOw9HJG9GG%2F%2B7xhIEPZxNtTu%2FlES6E%2F3cZDJogg7XrLBCPdViZdfsXYLaEELzuoubF4LjFWSYJlvnyS%2B%2FH6f02aqFsp4w4FQoLkQ4m5yiTav3SekoadWmEr08XrWqGZo7UIgC4FtVAsCnFwn6PIgm3ttzhb%2BB4cTb3u%2FsO4ysAiaP0BD9uxJd1UIPQXTK7v6b21UOlA7UElD5jViJdWQqg9WilN%2F5RyjPEUIZy%2B8bAZXu6f8U2WSRJsjmFOjyrSqOg%2Fv%2FgJPCfIPnXKW%2B3DNTR%2FtOJgJ%2BOtbbj73W8efYNS20n6%2BWL9a87wQa74p939%2B%2BazMnEA7JevXML6EzcQGOqUBZO5YwCfAq%2FzrzwtinlWRD%2Bnn8BUzFSCCg3FcRXMRaPzoeJ0zTfmWzK6H2CpVi5psJkcFIxoNXI%2BQ7Xcg3k8KP41VOGkSw1e2hUvT0iII%2BrrpTfhIt8Qy%2FME2XdsqENam%2FBc8b6CIufuoMq4uGBqCCZ7Oxkv5XRczAO4Hk%2BcZskr4O%2FEyEGKlFwjlLHtAejIkADQP3hiDWxeSs%2FVJnslR2Me4OdNS&X-Amz-Signature=29e927b70d4a166103f96b1df643e52d9c33808364d70c1a43c15b44588b304f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N4TR6W%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHlXwnm99zkKtpWHQVmE3GOdl56Gx1JthUCeNpkBG3tuAiEA3wYf8E6oJ5QSSvCxSlhMD455LpWijJ%2FLNDKfU9%2BefOAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFb7xdsdiZ2iCIDS1SrcA3MceLHB8q5WBIlGdj4scvOu75Q1%2F%2FuV0FWSpW5DMRC2%2FnPaUPlkv7IBIlG6eSQC4OYj5ooYgaO6VZz3X3HuYPOPGo3I1BtiqJD29scy0dUgDmXCRK2o0qpkd8MgrL4Cr7964p5xMSKHgMSMB7DWdCnrGe60BspmOC5CMj7MGZfiGH1K2sXmHI8b28agUeeD1xoLX%2FgZzyv0vKasW1hWI1p1A2qkSJUS21nh%2F%2BsZydI9HutqJfobm%2FzEkHY5Y6RUMD%2BRoIA0MadD759IuWUqRRjlpLMblkRWT774B28uu81QB12efOw9HJG9GG%2F%2B7xhIEPZxNtTu%2FlES6E%2F3cZDJogg7XrLBCPdViZdfsXYLaEELzuoubF4LjFWSYJlvnyS%2B%2FH6f02aqFsp4w4FQoLkQ4m5yiTav3SekoadWmEr08XrWqGZo7UIgC4FtVAsCnFwn6PIgm3ttzhb%2BB4cTb3u%2FsO4ysAiaP0BD9uxJd1UIPQXTK7v6b21UOlA7UElD5jViJdWQqg9WilN%2F5RyjPEUIZy%2B8bAZXu6f8U2WSRJsjmFOjyrSqOg%2Fv%2FgJPCfIPnXKW%2B3DNTR%2FtOJgJ%2BOtbbj73W8efYNS20n6%2BWL9a87wQa74p939%2B%2BazMnEA7JevXML6EzcQGOqUBZO5YwCfAq%2FzrzwtinlWRD%2Bnn8BUzFSCCg3FcRXMRaPzoeJ0zTfmWzK6H2CpVi5psJkcFIxoNXI%2BQ7Xcg3k8KP41VOGkSw1e2hUvT0iII%2BrrpTfhIt8Qy%2FME2XdsqENam%2FBc8b6CIufuoMq4uGBqCCZ7Oxkv5XRczAO4Hk%2BcZskr4O%2FEyEGKlFwjlLHtAejIkADQP3hiDWxeSs%2FVJnslR2Me4OdNS&X-Amz-Signature=c2b2bc8ce38e7c5ef7bd777be619c78a38dbde19f99169cc8ef0a5e30a362152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N4TR6W%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHlXwnm99zkKtpWHQVmE3GOdl56Gx1JthUCeNpkBG3tuAiEA3wYf8E6oJ5QSSvCxSlhMD455LpWijJ%2FLNDKfU9%2BefOAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFb7xdsdiZ2iCIDS1SrcA3MceLHB8q5WBIlGdj4scvOu75Q1%2F%2FuV0FWSpW5DMRC2%2FnPaUPlkv7IBIlG6eSQC4OYj5ooYgaO6VZz3X3HuYPOPGo3I1BtiqJD29scy0dUgDmXCRK2o0qpkd8MgrL4Cr7964p5xMSKHgMSMB7DWdCnrGe60BspmOC5CMj7MGZfiGH1K2sXmHI8b28agUeeD1xoLX%2FgZzyv0vKasW1hWI1p1A2qkSJUS21nh%2F%2BsZydI9HutqJfobm%2FzEkHY5Y6RUMD%2BRoIA0MadD759IuWUqRRjlpLMblkRWT774B28uu81QB12efOw9HJG9GG%2F%2B7xhIEPZxNtTu%2FlES6E%2F3cZDJogg7XrLBCPdViZdfsXYLaEELzuoubF4LjFWSYJlvnyS%2B%2FH6f02aqFsp4w4FQoLkQ4m5yiTav3SekoadWmEr08XrWqGZo7UIgC4FtVAsCnFwn6PIgm3ttzhb%2BB4cTb3u%2FsO4ysAiaP0BD9uxJd1UIPQXTK7v6b21UOlA7UElD5jViJdWQqg9WilN%2F5RyjPEUIZy%2B8bAZXu6f8U2WSRJsjmFOjyrSqOg%2Fv%2FgJPCfIPnXKW%2B3DNTR%2FtOJgJ%2BOtbbj73W8efYNS20n6%2BWL9a87wQa74p939%2B%2BazMnEA7JevXML6EzcQGOqUBZO5YwCfAq%2FzrzwtinlWRD%2Bnn8BUzFSCCg3FcRXMRaPzoeJ0zTfmWzK6H2CpVi5psJkcFIxoNXI%2BQ7Xcg3k8KP41VOGkSw1e2hUvT0iII%2BrrpTfhIt8Qy%2FME2XdsqENam%2FBc8b6CIufuoMq4uGBqCCZ7Oxkv5XRczAO4Hk%2BcZskr4O%2FEyEGKlFwjlLHtAejIkADQP3hiDWxeSs%2FVJnslR2Me4OdNS&X-Amz-Signature=7f57a157d4924e84a735208dc25ea4f1770713ca0cb0ee138fa7a0f4fcb5e09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N4TR6W%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHlXwnm99zkKtpWHQVmE3GOdl56Gx1JthUCeNpkBG3tuAiEA3wYf8E6oJ5QSSvCxSlhMD455LpWijJ%2FLNDKfU9%2BefOAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFb7xdsdiZ2iCIDS1SrcA3MceLHB8q5WBIlGdj4scvOu75Q1%2F%2FuV0FWSpW5DMRC2%2FnPaUPlkv7IBIlG6eSQC4OYj5ooYgaO6VZz3X3HuYPOPGo3I1BtiqJD29scy0dUgDmXCRK2o0qpkd8MgrL4Cr7964p5xMSKHgMSMB7DWdCnrGe60BspmOC5CMj7MGZfiGH1K2sXmHI8b28agUeeD1xoLX%2FgZzyv0vKasW1hWI1p1A2qkSJUS21nh%2F%2BsZydI9HutqJfobm%2FzEkHY5Y6RUMD%2BRoIA0MadD759IuWUqRRjlpLMblkRWT774B28uu81QB12efOw9HJG9GG%2F%2B7xhIEPZxNtTu%2FlES6E%2F3cZDJogg7XrLBCPdViZdfsXYLaEELzuoubF4LjFWSYJlvnyS%2B%2FH6f02aqFsp4w4FQoLkQ4m5yiTav3SekoadWmEr08XrWqGZo7UIgC4FtVAsCnFwn6PIgm3ttzhb%2BB4cTb3u%2FsO4ysAiaP0BD9uxJd1UIPQXTK7v6b21UOlA7UElD5jViJdWQqg9WilN%2F5RyjPEUIZy%2B8bAZXu6f8U2WSRJsjmFOjyrSqOg%2Fv%2FgJPCfIPnXKW%2B3DNTR%2FtOJgJ%2BOtbbj73W8efYNS20n6%2BWL9a87wQa74p939%2B%2BazMnEA7JevXML6EzcQGOqUBZO5YwCfAq%2FzrzwtinlWRD%2Bnn8BUzFSCCg3FcRXMRaPzoeJ0zTfmWzK6H2CpVi5psJkcFIxoNXI%2BQ7Xcg3k8KP41VOGkSw1e2hUvT0iII%2BrrpTfhIt8Qy%2FME2XdsqENam%2FBc8b6CIufuoMq4uGBqCCZ7Oxkv5XRczAO4Hk%2BcZskr4O%2FEyEGKlFwjlLHtAejIkADQP3hiDWxeSs%2FVJnslR2Me4OdNS&X-Amz-Signature=95f24f5e5f802c1a403ea30dab0611ef6280e6c4fad6eb696f138afbb7edf6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N4TR6W%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHlXwnm99zkKtpWHQVmE3GOdl56Gx1JthUCeNpkBG3tuAiEA3wYf8E6oJ5QSSvCxSlhMD455LpWijJ%2FLNDKfU9%2BefOAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFb7xdsdiZ2iCIDS1SrcA3MceLHB8q5WBIlGdj4scvOu75Q1%2F%2FuV0FWSpW5DMRC2%2FnPaUPlkv7IBIlG6eSQC4OYj5ooYgaO6VZz3X3HuYPOPGo3I1BtiqJD29scy0dUgDmXCRK2o0qpkd8MgrL4Cr7964p5xMSKHgMSMB7DWdCnrGe60BspmOC5CMj7MGZfiGH1K2sXmHI8b28agUeeD1xoLX%2FgZzyv0vKasW1hWI1p1A2qkSJUS21nh%2F%2BsZydI9HutqJfobm%2FzEkHY5Y6RUMD%2BRoIA0MadD759IuWUqRRjlpLMblkRWT774B28uu81QB12efOw9HJG9GG%2F%2B7xhIEPZxNtTu%2FlES6E%2F3cZDJogg7XrLBCPdViZdfsXYLaEELzuoubF4LjFWSYJlvnyS%2B%2FH6f02aqFsp4w4FQoLkQ4m5yiTav3SekoadWmEr08XrWqGZo7UIgC4FtVAsCnFwn6PIgm3ttzhb%2BB4cTb3u%2FsO4ysAiaP0BD9uxJd1UIPQXTK7v6b21UOlA7UElD5jViJdWQqg9WilN%2F5RyjPEUIZy%2B8bAZXu6f8U2WSRJsjmFOjyrSqOg%2Fv%2FgJPCfIPnXKW%2B3DNTR%2FtOJgJ%2BOtbbj73W8efYNS20n6%2BWL9a87wQa74p939%2B%2BazMnEA7JevXML6EzcQGOqUBZO5YwCfAq%2FzrzwtinlWRD%2Bnn8BUzFSCCg3FcRXMRaPzoeJ0zTfmWzK6H2CpVi5psJkcFIxoNXI%2BQ7Xcg3k8KP41VOGkSw1e2hUvT0iII%2BrrpTfhIt8Qy%2FME2XdsqENam%2FBc8b6CIufuoMq4uGBqCCZ7Oxkv5XRczAO4Hk%2BcZskr4O%2FEyEGKlFwjlLHtAejIkADQP3hiDWxeSs%2FVJnslR2Me4OdNS&X-Amz-Signature=135414edf9f4cb2f8153c5522ba5589e38e1ffa376264e85995976a6b38d3b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
