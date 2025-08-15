---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV4EMNHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICfoC5vVjIDGqKqaVwkE9NFTDaDnNjvmUGyLBgF0SK%2FCAiBRTvlTNXGrYBZcIHCE%2F8UJp5ny7c2xNfTAb4H%2FAeGKBSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM1vJYC%2Bu5ebiUgKSXKtwD1fPDhpEx7zj6Z1Ysvybmp8OP0%2FBZEcWBG9zVC2pa%2BXYlx0wYbhbSyFMnjLlwpKJgT1BV1OCr6LkBpEaKrdGVJEBHgUkXLMTI8g6hlS3SJxbMFxoXkBurTJAbiITJ6F9HrXUZQ%2BzlomzM3WnOX%2FX%2F5buQh3%2B3kreKwZLXNizmkzAmWxuJ2qnIBvpLiR%2BsoTvgiOKnKoIegA2KO0CWW%2BhIXYaeNgmHL6b1rBF5fcou0jWqXIq4xZ0xd%2BVphRIfiADN7SfyqHHGk0M8pndCbJhpbr5hj6hc19bhFhpWs01iwgWZ4%2BSJrbwYz6JHkxQH6ZhGf8r23vYGgINzBB9ANX3knHdVdBnn%2FGcmf2nor1babBH7SvSrYk2o2I4bWf5WJq%2FsoZkFoSF9AePvB4W8A9LnNVy%2F3XmAkHbEFetQS3vfdBXkuJf1RRapMgGPqDkwLbtznuBXgb%2BbYvMcFEBfBsQoSrHCFMWn%2FsrOUkR77KkUqzXmu61u8lZMm1%2F%2FwxojgFQYKKRU%2Be4v1hKZSmKamalDOQ97dxu3EsPFijYVjfLSLmI%2FDG01TBVPij5nti7aTdhtMJUgy2%2FkS4rCc3tlXCIi41QjoeHgketwdtI%2FoI32Gnl7Hp6d8ELbqqMUX%2B0wz6L7xAY6pgHxm5okmcE7Ye2GfVlfnUAfSFEQGUwUGS%2BSIY6keSu0M933fYYjLQnZyodQS0n8atQofZ%2FvW4Ff4bFKDMlMpRCa25yj3DI9fmEe9BrsDJhxxdxH1W0GKoSj8XDBwEtw5zobwHPFQh3ma9CAsjh03PbPNHN45i%2B2vcXNqjvbBjSozoBrbLjg7G6y6AZbvnKkbxM6F1%2BHnaqpdeKFCmw9XMcs1R2ap5ZI&X-Amz-Signature=86618130441344ea099a271989c528f1cd0bdd68311017f5e3707db97aa63d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV4EMNHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICfoC5vVjIDGqKqaVwkE9NFTDaDnNjvmUGyLBgF0SK%2FCAiBRTvlTNXGrYBZcIHCE%2F8UJp5ny7c2xNfTAb4H%2FAeGKBSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM1vJYC%2Bu5ebiUgKSXKtwD1fPDhpEx7zj6Z1Ysvybmp8OP0%2FBZEcWBG9zVC2pa%2BXYlx0wYbhbSyFMnjLlwpKJgT1BV1OCr6LkBpEaKrdGVJEBHgUkXLMTI8g6hlS3SJxbMFxoXkBurTJAbiITJ6F9HrXUZQ%2BzlomzM3WnOX%2FX%2F5buQh3%2B3kreKwZLXNizmkzAmWxuJ2qnIBvpLiR%2BsoTvgiOKnKoIegA2KO0CWW%2BhIXYaeNgmHL6b1rBF5fcou0jWqXIq4xZ0xd%2BVphRIfiADN7SfyqHHGk0M8pndCbJhpbr5hj6hc19bhFhpWs01iwgWZ4%2BSJrbwYz6JHkxQH6ZhGf8r23vYGgINzBB9ANX3knHdVdBnn%2FGcmf2nor1babBH7SvSrYk2o2I4bWf5WJq%2FsoZkFoSF9AePvB4W8A9LnNVy%2F3XmAkHbEFetQS3vfdBXkuJf1RRapMgGPqDkwLbtznuBXgb%2BbYvMcFEBfBsQoSrHCFMWn%2FsrOUkR77KkUqzXmu61u8lZMm1%2F%2FwxojgFQYKKRU%2Be4v1hKZSmKamalDOQ97dxu3EsPFijYVjfLSLmI%2FDG01TBVPij5nti7aTdhtMJUgy2%2FkS4rCc3tlXCIi41QjoeHgketwdtI%2FoI32Gnl7Hp6d8ELbqqMUX%2B0wz6L7xAY6pgHxm5okmcE7Ye2GfVlfnUAfSFEQGUwUGS%2BSIY6keSu0M933fYYjLQnZyodQS0n8atQofZ%2FvW4Ff4bFKDMlMpRCa25yj3DI9fmEe9BrsDJhxxdxH1W0GKoSj8XDBwEtw5zobwHPFQh3ma9CAsjh03PbPNHN45i%2B2vcXNqjvbBjSozoBrbLjg7G6y6AZbvnKkbxM6F1%2BHnaqpdeKFCmw9XMcs1R2ap5ZI&X-Amz-Signature=c5d9540cc6f14594fc1fb8fb753e3c60fb9c48b2a5715af78c2d6d60f18d1738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV4EMNHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICfoC5vVjIDGqKqaVwkE9NFTDaDnNjvmUGyLBgF0SK%2FCAiBRTvlTNXGrYBZcIHCE%2F8UJp5ny7c2xNfTAb4H%2FAeGKBSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM1vJYC%2Bu5ebiUgKSXKtwD1fPDhpEx7zj6Z1Ysvybmp8OP0%2FBZEcWBG9zVC2pa%2BXYlx0wYbhbSyFMnjLlwpKJgT1BV1OCr6LkBpEaKrdGVJEBHgUkXLMTI8g6hlS3SJxbMFxoXkBurTJAbiITJ6F9HrXUZQ%2BzlomzM3WnOX%2FX%2F5buQh3%2B3kreKwZLXNizmkzAmWxuJ2qnIBvpLiR%2BsoTvgiOKnKoIegA2KO0CWW%2BhIXYaeNgmHL6b1rBF5fcou0jWqXIq4xZ0xd%2BVphRIfiADN7SfyqHHGk0M8pndCbJhpbr5hj6hc19bhFhpWs01iwgWZ4%2BSJrbwYz6JHkxQH6ZhGf8r23vYGgINzBB9ANX3knHdVdBnn%2FGcmf2nor1babBH7SvSrYk2o2I4bWf5WJq%2FsoZkFoSF9AePvB4W8A9LnNVy%2F3XmAkHbEFetQS3vfdBXkuJf1RRapMgGPqDkwLbtznuBXgb%2BbYvMcFEBfBsQoSrHCFMWn%2FsrOUkR77KkUqzXmu61u8lZMm1%2F%2FwxojgFQYKKRU%2Be4v1hKZSmKamalDOQ97dxu3EsPFijYVjfLSLmI%2FDG01TBVPij5nti7aTdhtMJUgy2%2FkS4rCc3tlXCIi41QjoeHgketwdtI%2FoI32Gnl7Hp6d8ELbqqMUX%2B0wz6L7xAY6pgHxm5okmcE7Ye2GfVlfnUAfSFEQGUwUGS%2BSIY6keSu0M933fYYjLQnZyodQS0n8atQofZ%2FvW4Ff4bFKDMlMpRCa25yj3DI9fmEe9BrsDJhxxdxH1W0GKoSj8XDBwEtw5zobwHPFQh3ma9CAsjh03PbPNHN45i%2B2vcXNqjvbBjSozoBrbLjg7G6y6AZbvnKkbxM6F1%2BHnaqpdeKFCmw9XMcs1R2ap5ZI&X-Amz-Signature=01e06f6c3078557440da8a4b445ff95516975102cba081182cd38c2764ddb1c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV4EMNHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICfoC5vVjIDGqKqaVwkE9NFTDaDnNjvmUGyLBgF0SK%2FCAiBRTvlTNXGrYBZcIHCE%2F8UJp5ny7c2xNfTAb4H%2FAeGKBSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM1vJYC%2Bu5ebiUgKSXKtwD1fPDhpEx7zj6Z1Ysvybmp8OP0%2FBZEcWBG9zVC2pa%2BXYlx0wYbhbSyFMnjLlwpKJgT1BV1OCr6LkBpEaKrdGVJEBHgUkXLMTI8g6hlS3SJxbMFxoXkBurTJAbiITJ6F9HrXUZQ%2BzlomzM3WnOX%2FX%2F5buQh3%2B3kreKwZLXNizmkzAmWxuJ2qnIBvpLiR%2BsoTvgiOKnKoIegA2KO0CWW%2BhIXYaeNgmHL6b1rBF5fcou0jWqXIq4xZ0xd%2BVphRIfiADN7SfyqHHGk0M8pndCbJhpbr5hj6hc19bhFhpWs01iwgWZ4%2BSJrbwYz6JHkxQH6ZhGf8r23vYGgINzBB9ANX3knHdVdBnn%2FGcmf2nor1babBH7SvSrYk2o2I4bWf5WJq%2FsoZkFoSF9AePvB4W8A9LnNVy%2F3XmAkHbEFetQS3vfdBXkuJf1RRapMgGPqDkwLbtznuBXgb%2BbYvMcFEBfBsQoSrHCFMWn%2FsrOUkR77KkUqzXmu61u8lZMm1%2F%2FwxojgFQYKKRU%2Be4v1hKZSmKamalDOQ97dxu3EsPFijYVjfLSLmI%2FDG01TBVPij5nti7aTdhtMJUgy2%2FkS4rCc3tlXCIi41QjoeHgketwdtI%2FoI32Gnl7Hp6d8ELbqqMUX%2B0wz6L7xAY6pgHxm5okmcE7Ye2GfVlfnUAfSFEQGUwUGS%2BSIY6keSu0M933fYYjLQnZyodQS0n8atQofZ%2FvW4Ff4bFKDMlMpRCa25yj3DI9fmEe9BrsDJhxxdxH1W0GKoSj8XDBwEtw5zobwHPFQh3ma9CAsjh03PbPNHN45i%2B2vcXNqjvbBjSozoBrbLjg7G6y6AZbvnKkbxM6F1%2BHnaqpdeKFCmw9XMcs1R2ap5ZI&X-Amz-Signature=127455f6f93b82b3b15a68823740362776b9264759d24a9d1aff05f874f0ae1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV4EMNHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICfoC5vVjIDGqKqaVwkE9NFTDaDnNjvmUGyLBgF0SK%2FCAiBRTvlTNXGrYBZcIHCE%2F8UJp5ny7c2xNfTAb4H%2FAeGKBSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM1vJYC%2Bu5ebiUgKSXKtwD1fPDhpEx7zj6Z1Ysvybmp8OP0%2FBZEcWBG9zVC2pa%2BXYlx0wYbhbSyFMnjLlwpKJgT1BV1OCr6LkBpEaKrdGVJEBHgUkXLMTI8g6hlS3SJxbMFxoXkBurTJAbiITJ6F9HrXUZQ%2BzlomzM3WnOX%2FX%2F5buQh3%2B3kreKwZLXNizmkzAmWxuJ2qnIBvpLiR%2BsoTvgiOKnKoIegA2KO0CWW%2BhIXYaeNgmHL6b1rBF5fcou0jWqXIq4xZ0xd%2BVphRIfiADN7SfyqHHGk0M8pndCbJhpbr5hj6hc19bhFhpWs01iwgWZ4%2BSJrbwYz6JHkxQH6ZhGf8r23vYGgINzBB9ANX3knHdVdBnn%2FGcmf2nor1babBH7SvSrYk2o2I4bWf5WJq%2FsoZkFoSF9AePvB4W8A9LnNVy%2F3XmAkHbEFetQS3vfdBXkuJf1RRapMgGPqDkwLbtznuBXgb%2BbYvMcFEBfBsQoSrHCFMWn%2FsrOUkR77KkUqzXmu61u8lZMm1%2F%2FwxojgFQYKKRU%2Be4v1hKZSmKamalDOQ97dxu3EsPFijYVjfLSLmI%2FDG01TBVPij5nti7aTdhtMJUgy2%2FkS4rCc3tlXCIi41QjoeHgketwdtI%2FoI32Gnl7Hp6d8ELbqqMUX%2B0wz6L7xAY6pgHxm5okmcE7Ye2GfVlfnUAfSFEQGUwUGS%2BSIY6keSu0M933fYYjLQnZyodQS0n8atQofZ%2FvW4Ff4bFKDMlMpRCa25yj3DI9fmEe9BrsDJhxxdxH1W0GKoSj8XDBwEtw5zobwHPFQh3ma9CAsjh03PbPNHN45i%2B2vcXNqjvbBjSozoBrbLjg7G6y6AZbvnKkbxM6F1%2BHnaqpdeKFCmw9XMcs1R2ap5ZI&X-Amz-Signature=230098becc296c8c50162175354c26d60ef85a80a04a2dc8697648939f99b0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV4EMNHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICfoC5vVjIDGqKqaVwkE9NFTDaDnNjvmUGyLBgF0SK%2FCAiBRTvlTNXGrYBZcIHCE%2F8UJp5ny7c2xNfTAb4H%2FAeGKBSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM1vJYC%2Bu5ebiUgKSXKtwD1fPDhpEx7zj6Z1Ysvybmp8OP0%2FBZEcWBG9zVC2pa%2BXYlx0wYbhbSyFMnjLlwpKJgT1BV1OCr6LkBpEaKrdGVJEBHgUkXLMTI8g6hlS3SJxbMFxoXkBurTJAbiITJ6F9HrXUZQ%2BzlomzM3WnOX%2FX%2F5buQh3%2B3kreKwZLXNizmkzAmWxuJ2qnIBvpLiR%2BsoTvgiOKnKoIegA2KO0CWW%2BhIXYaeNgmHL6b1rBF5fcou0jWqXIq4xZ0xd%2BVphRIfiADN7SfyqHHGk0M8pndCbJhpbr5hj6hc19bhFhpWs01iwgWZ4%2BSJrbwYz6JHkxQH6ZhGf8r23vYGgINzBB9ANX3knHdVdBnn%2FGcmf2nor1babBH7SvSrYk2o2I4bWf5WJq%2FsoZkFoSF9AePvB4W8A9LnNVy%2F3XmAkHbEFetQS3vfdBXkuJf1RRapMgGPqDkwLbtznuBXgb%2BbYvMcFEBfBsQoSrHCFMWn%2FsrOUkR77KkUqzXmu61u8lZMm1%2F%2FwxojgFQYKKRU%2Be4v1hKZSmKamalDOQ97dxu3EsPFijYVjfLSLmI%2FDG01TBVPij5nti7aTdhtMJUgy2%2FkS4rCc3tlXCIi41QjoeHgketwdtI%2FoI32Gnl7Hp6d8ELbqqMUX%2B0wz6L7xAY6pgHxm5okmcE7Ye2GfVlfnUAfSFEQGUwUGS%2BSIY6keSu0M933fYYjLQnZyodQS0n8atQofZ%2FvW4Ff4bFKDMlMpRCa25yj3DI9fmEe9BrsDJhxxdxH1W0GKoSj8XDBwEtw5zobwHPFQh3ma9CAsjh03PbPNHN45i%2B2vcXNqjvbBjSozoBrbLjg7G6y6AZbvnKkbxM6F1%2BHnaqpdeKFCmw9XMcs1R2ap5ZI&X-Amz-Signature=6fc363c1d165f324a85275e000d53a7395c5c17a1b813cb09eab80fbd6d0332a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV4EMNHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICfoC5vVjIDGqKqaVwkE9NFTDaDnNjvmUGyLBgF0SK%2FCAiBRTvlTNXGrYBZcIHCE%2F8UJp5ny7c2xNfTAb4H%2FAeGKBSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM1vJYC%2Bu5ebiUgKSXKtwD1fPDhpEx7zj6Z1Ysvybmp8OP0%2FBZEcWBG9zVC2pa%2BXYlx0wYbhbSyFMnjLlwpKJgT1BV1OCr6LkBpEaKrdGVJEBHgUkXLMTI8g6hlS3SJxbMFxoXkBurTJAbiITJ6F9HrXUZQ%2BzlomzM3WnOX%2FX%2F5buQh3%2B3kreKwZLXNizmkzAmWxuJ2qnIBvpLiR%2BsoTvgiOKnKoIegA2KO0CWW%2BhIXYaeNgmHL6b1rBF5fcou0jWqXIq4xZ0xd%2BVphRIfiADN7SfyqHHGk0M8pndCbJhpbr5hj6hc19bhFhpWs01iwgWZ4%2BSJrbwYz6JHkxQH6ZhGf8r23vYGgINzBB9ANX3knHdVdBnn%2FGcmf2nor1babBH7SvSrYk2o2I4bWf5WJq%2FsoZkFoSF9AePvB4W8A9LnNVy%2F3XmAkHbEFetQS3vfdBXkuJf1RRapMgGPqDkwLbtznuBXgb%2BbYvMcFEBfBsQoSrHCFMWn%2FsrOUkR77KkUqzXmu61u8lZMm1%2F%2FwxojgFQYKKRU%2Be4v1hKZSmKamalDOQ97dxu3EsPFijYVjfLSLmI%2FDG01TBVPij5nti7aTdhtMJUgy2%2FkS4rCc3tlXCIi41QjoeHgketwdtI%2FoI32Gnl7Hp6d8ELbqqMUX%2B0wz6L7xAY6pgHxm5okmcE7Ye2GfVlfnUAfSFEQGUwUGS%2BSIY6keSu0M933fYYjLQnZyodQS0n8atQofZ%2FvW4Ff4bFKDMlMpRCa25yj3DI9fmEe9BrsDJhxxdxH1W0GKoSj8XDBwEtw5zobwHPFQh3ma9CAsjh03PbPNHN45i%2B2vcXNqjvbBjSozoBrbLjg7G6y6AZbvnKkbxM6F1%2BHnaqpdeKFCmw9XMcs1R2ap5ZI&X-Amz-Signature=219f4aa6c7e1183b697c6e124a5cc1025135e615e2cc3f1e0be7d2b26599c30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
