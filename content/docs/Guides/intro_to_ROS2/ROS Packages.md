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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHWOBGY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAVa0%2BTbX4ODMpfCjsix50ngoMv%2FFCeVveYr1uF6NYGUAiEA6lWztupeJ%2Fh9p6vQAf5wdkTCqW8w5DpkJ10Vz6SC9iUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOaSygPJtLBEMd7VCrcA%2FC7zjtshPTN3WJguzRameX0XDE8C%2FW0HeEQdbHePm3XB0MHVao1hGAzKd8XcyPB6cRcWBdWm%2B4%2Ftm5tXQvNpb1Tu26habR2%2Bcl3xxnhG%2F%2FFJpRuKGyzRGHL%2B9tlL72q33blpSfC%2Bw424LlhjQtcWCn0LzXmxU8FzFK%2BR5nlxP4uthyEhSWNhcEnO4cMGXe4CHxKuun5Bv9bSr5C6DN2iuO9Qi5FxTePSKrWvw3f%2FbIuytNLfYXdE%2FLxgXOgZF9sE3QoFKhn9mGdVgiQcRyNPFDUq9OCdc49SlozDW26rt%2BrwdAUaS3fHsmP4MR7ij2wNfkT%2Fzl%2BoplthyNSjxaC%2BMKf%2FDKmdrz%2FXE%2FqEbDMKqNdNCMq1V4ZLkrZXPfRtS8GMmugXMr7CmUs5owbjV8GUL8WDuZSBUtXtTo4A1lQM5JG3mAODpcZnMJsPxAv9OtAlpnPT1zGPBb%2Brl6nHk4bGk%2FLeE2HM3HMBFoGXEZ73g81PyiHtDV7BsJsOmmAp8q19MOhN7PV3Y9siK2WKa3LItZfrsC9B9i4JuiQ5RmQQdMSNk%2BABljFKI0nMToSM15pSHmGUU0l8GesuIFxQBPA8BWt%2BmnyefAhRDvRdGay4%2BLZcR%2FpzBX0r0bsmqZuMOSQrMIGOqUBjvqJ0Q2b2THBJqVd5f5RyzEFiga5r6SWFCbPxtK9Z8RZZ068GpDwOjM35pONwYmKWhzFHHbWV%2BXz%2FZNXvvdYfMdPYCW%2FnTvfXLSVLUA2W%2FdZ9H6zVEbwRfOKPRor%2B199fQNqUV972b%2FweSA20VftTWj4g2%2BGmRl0cQloOlvcLiG40W3HqoJ3YXpbLNUh%2Bguvucr1Fpds%2FJRCHjUgyWTpBXmOeloX&X-Amz-Signature=e36389a3f6b25922f6a36c6cca41df65e9944ac8a938b3c0ae3819c54ac2e486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHWOBGY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAVa0%2BTbX4ODMpfCjsix50ngoMv%2FFCeVveYr1uF6NYGUAiEA6lWztupeJ%2Fh9p6vQAf5wdkTCqW8w5DpkJ10Vz6SC9iUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOaSygPJtLBEMd7VCrcA%2FC7zjtshPTN3WJguzRameX0XDE8C%2FW0HeEQdbHePm3XB0MHVao1hGAzKd8XcyPB6cRcWBdWm%2B4%2Ftm5tXQvNpb1Tu26habR2%2Bcl3xxnhG%2F%2FFJpRuKGyzRGHL%2B9tlL72q33blpSfC%2Bw424LlhjQtcWCn0LzXmxU8FzFK%2BR5nlxP4uthyEhSWNhcEnO4cMGXe4CHxKuun5Bv9bSr5C6DN2iuO9Qi5FxTePSKrWvw3f%2FbIuytNLfYXdE%2FLxgXOgZF9sE3QoFKhn9mGdVgiQcRyNPFDUq9OCdc49SlozDW26rt%2BrwdAUaS3fHsmP4MR7ij2wNfkT%2Fzl%2BoplthyNSjxaC%2BMKf%2FDKmdrz%2FXE%2FqEbDMKqNdNCMq1V4ZLkrZXPfRtS8GMmugXMr7CmUs5owbjV8GUL8WDuZSBUtXtTo4A1lQM5JG3mAODpcZnMJsPxAv9OtAlpnPT1zGPBb%2Brl6nHk4bGk%2FLeE2HM3HMBFoGXEZ73g81PyiHtDV7BsJsOmmAp8q19MOhN7PV3Y9siK2WKa3LItZfrsC9B9i4JuiQ5RmQQdMSNk%2BABljFKI0nMToSM15pSHmGUU0l8GesuIFxQBPA8BWt%2BmnyefAhRDvRdGay4%2BLZcR%2FpzBX0r0bsmqZuMOSQrMIGOqUBjvqJ0Q2b2THBJqVd5f5RyzEFiga5r6SWFCbPxtK9Z8RZZ068GpDwOjM35pONwYmKWhzFHHbWV%2BXz%2FZNXvvdYfMdPYCW%2FnTvfXLSVLUA2W%2FdZ9H6zVEbwRfOKPRor%2B199fQNqUV972b%2FweSA20VftTWj4g2%2BGmRl0cQloOlvcLiG40W3HqoJ3YXpbLNUh%2Bguvucr1Fpds%2FJRCHjUgyWTpBXmOeloX&X-Amz-Signature=a545b5864b7ea1fa895f22b0248f8cfe0cc7ce5f1fe24daf859cf9b57c876342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHWOBGY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAVa0%2BTbX4ODMpfCjsix50ngoMv%2FFCeVveYr1uF6NYGUAiEA6lWztupeJ%2Fh9p6vQAf5wdkTCqW8w5DpkJ10Vz6SC9iUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOaSygPJtLBEMd7VCrcA%2FC7zjtshPTN3WJguzRameX0XDE8C%2FW0HeEQdbHePm3XB0MHVao1hGAzKd8XcyPB6cRcWBdWm%2B4%2Ftm5tXQvNpb1Tu26habR2%2Bcl3xxnhG%2F%2FFJpRuKGyzRGHL%2B9tlL72q33blpSfC%2Bw424LlhjQtcWCn0LzXmxU8FzFK%2BR5nlxP4uthyEhSWNhcEnO4cMGXe4CHxKuun5Bv9bSr5C6DN2iuO9Qi5FxTePSKrWvw3f%2FbIuytNLfYXdE%2FLxgXOgZF9sE3QoFKhn9mGdVgiQcRyNPFDUq9OCdc49SlozDW26rt%2BrwdAUaS3fHsmP4MR7ij2wNfkT%2Fzl%2BoplthyNSjxaC%2BMKf%2FDKmdrz%2FXE%2FqEbDMKqNdNCMq1V4ZLkrZXPfRtS8GMmugXMr7CmUs5owbjV8GUL8WDuZSBUtXtTo4A1lQM5JG3mAODpcZnMJsPxAv9OtAlpnPT1zGPBb%2Brl6nHk4bGk%2FLeE2HM3HMBFoGXEZ73g81PyiHtDV7BsJsOmmAp8q19MOhN7PV3Y9siK2WKa3LItZfrsC9B9i4JuiQ5RmQQdMSNk%2BABljFKI0nMToSM15pSHmGUU0l8GesuIFxQBPA8BWt%2BmnyefAhRDvRdGay4%2BLZcR%2FpzBX0r0bsmqZuMOSQrMIGOqUBjvqJ0Q2b2THBJqVd5f5RyzEFiga5r6SWFCbPxtK9Z8RZZ068GpDwOjM35pONwYmKWhzFHHbWV%2BXz%2FZNXvvdYfMdPYCW%2FnTvfXLSVLUA2W%2FdZ9H6zVEbwRfOKPRor%2B199fQNqUV972b%2FweSA20VftTWj4g2%2BGmRl0cQloOlvcLiG40W3HqoJ3YXpbLNUh%2Bguvucr1Fpds%2FJRCHjUgyWTpBXmOeloX&X-Amz-Signature=9967f1541a23031342ccc331472b51e97185fe91d0a7bf223126fa49b4dc1520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHWOBGY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAVa0%2BTbX4ODMpfCjsix50ngoMv%2FFCeVveYr1uF6NYGUAiEA6lWztupeJ%2Fh9p6vQAf5wdkTCqW8w5DpkJ10Vz6SC9iUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOaSygPJtLBEMd7VCrcA%2FC7zjtshPTN3WJguzRameX0XDE8C%2FW0HeEQdbHePm3XB0MHVao1hGAzKd8XcyPB6cRcWBdWm%2B4%2Ftm5tXQvNpb1Tu26habR2%2Bcl3xxnhG%2F%2FFJpRuKGyzRGHL%2B9tlL72q33blpSfC%2Bw424LlhjQtcWCn0LzXmxU8FzFK%2BR5nlxP4uthyEhSWNhcEnO4cMGXe4CHxKuun5Bv9bSr5C6DN2iuO9Qi5FxTePSKrWvw3f%2FbIuytNLfYXdE%2FLxgXOgZF9sE3QoFKhn9mGdVgiQcRyNPFDUq9OCdc49SlozDW26rt%2BrwdAUaS3fHsmP4MR7ij2wNfkT%2Fzl%2BoplthyNSjxaC%2BMKf%2FDKmdrz%2FXE%2FqEbDMKqNdNCMq1V4ZLkrZXPfRtS8GMmugXMr7CmUs5owbjV8GUL8WDuZSBUtXtTo4A1lQM5JG3mAODpcZnMJsPxAv9OtAlpnPT1zGPBb%2Brl6nHk4bGk%2FLeE2HM3HMBFoGXEZ73g81PyiHtDV7BsJsOmmAp8q19MOhN7PV3Y9siK2WKa3LItZfrsC9B9i4JuiQ5RmQQdMSNk%2BABljFKI0nMToSM15pSHmGUU0l8GesuIFxQBPA8BWt%2BmnyefAhRDvRdGay4%2BLZcR%2FpzBX0r0bsmqZuMOSQrMIGOqUBjvqJ0Q2b2THBJqVd5f5RyzEFiga5r6SWFCbPxtK9Z8RZZ068GpDwOjM35pONwYmKWhzFHHbWV%2BXz%2FZNXvvdYfMdPYCW%2FnTvfXLSVLUA2W%2FdZ9H6zVEbwRfOKPRor%2B199fQNqUV972b%2FweSA20VftTWj4g2%2BGmRl0cQloOlvcLiG40W3HqoJ3YXpbLNUh%2Bguvucr1Fpds%2FJRCHjUgyWTpBXmOeloX&X-Amz-Signature=7a84bdd14357fa383bfb44d36e8e23f2c5887fa9bfbba2066095eda035803a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHWOBGY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAVa0%2BTbX4ODMpfCjsix50ngoMv%2FFCeVveYr1uF6NYGUAiEA6lWztupeJ%2Fh9p6vQAf5wdkTCqW8w5DpkJ10Vz6SC9iUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOaSygPJtLBEMd7VCrcA%2FC7zjtshPTN3WJguzRameX0XDE8C%2FW0HeEQdbHePm3XB0MHVao1hGAzKd8XcyPB6cRcWBdWm%2B4%2Ftm5tXQvNpb1Tu26habR2%2Bcl3xxnhG%2F%2FFJpRuKGyzRGHL%2B9tlL72q33blpSfC%2Bw424LlhjQtcWCn0LzXmxU8FzFK%2BR5nlxP4uthyEhSWNhcEnO4cMGXe4CHxKuun5Bv9bSr5C6DN2iuO9Qi5FxTePSKrWvw3f%2FbIuytNLfYXdE%2FLxgXOgZF9sE3QoFKhn9mGdVgiQcRyNPFDUq9OCdc49SlozDW26rt%2BrwdAUaS3fHsmP4MR7ij2wNfkT%2Fzl%2BoplthyNSjxaC%2BMKf%2FDKmdrz%2FXE%2FqEbDMKqNdNCMq1V4ZLkrZXPfRtS8GMmugXMr7CmUs5owbjV8GUL8WDuZSBUtXtTo4A1lQM5JG3mAODpcZnMJsPxAv9OtAlpnPT1zGPBb%2Brl6nHk4bGk%2FLeE2HM3HMBFoGXEZ73g81PyiHtDV7BsJsOmmAp8q19MOhN7PV3Y9siK2WKa3LItZfrsC9B9i4JuiQ5RmQQdMSNk%2BABljFKI0nMToSM15pSHmGUU0l8GesuIFxQBPA8BWt%2BmnyefAhRDvRdGay4%2BLZcR%2FpzBX0r0bsmqZuMOSQrMIGOqUBjvqJ0Q2b2THBJqVd5f5RyzEFiga5r6SWFCbPxtK9Z8RZZ068GpDwOjM35pONwYmKWhzFHHbWV%2BXz%2FZNXvvdYfMdPYCW%2FnTvfXLSVLUA2W%2FdZ9H6zVEbwRfOKPRor%2B199fQNqUV972b%2FweSA20VftTWj4g2%2BGmRl0cQloOlvcLiG40W3HqoJ3YXpbLNUh%2Bguvucr1Fpds%2FJRCHjUgyWTpBXmOeloX&X-Amz-Signature=c63bb399308c3f07787c86e3cc82bb1710ac84a0d163aaaf27ac813b461ac6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHWOBGY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAVa0%2BTbX4ODMpfCjsix50ngoMv%2FFCeVveYr1uF6NYGUAiEA6lWztupeJ%2Fh9p6vQAf5wdkTCqW8w5DpkJ10Vz6SC9iUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOaSygPJtLBEMd7VCrcA%2FC7zjtshPTN3WJguzRameX0XDE8C%2FW0HeEQdbHePm3XB0MHVao1hGAzKd8XcyPB6cRcWBdWm%2B4%2Ftm5tXQvNpb1Tu26habR2%2Bcl3xxnhG%2F%2FFJpRuKGyzRGHL%2B9tlL72q33blpSfC%2Bw424LlhjQtcWCn0LzXmxU8FzFK%2BR5nlxP4uthyEhSWNhcEnO4cMGXe4CHxKuun5Bv9bSr5C6DN2iuO9Qi5FxTePSKrWvw3f%2FbIuytNLfYXdE%2FLxgXOgZF9sE3QoFKhn9mGdVgiQcRyNPFDUq9OCdc49SlozDW26rt%2BrwdAUaS3fHsmP4MR7ij2wNfkT%2Fzl%2BoplthyNSjxaC%2BMKf%2FDKmdrz%2FXE%2FqEbDMKqNdNCMq1V4ZLkrZXPfRtS8GMmugXMr7CmUs5owbjV8GUL8WDuZSBUtXtTo4A1lQM5JG3mAODpcZnMJsPxAv9OtAlpnPT1zGPBb%2Brl6nHk4bGk%2FLeE2HM3HMBFoGXEZ73g81PyiHtDV7BsJsOmmAp8q19MOhN7PV3Y9siK2WKa3LItZfrsC9B9i4JuiQ5RmQQdMSNk%2BABljFKI0nMToSM15pSHmGUU0l8GesuIFxQBPA8BWt%2BmnyefAhRDvRdGay4%2BLZcR%2FpzBX0r0bsmqZuMOSQrMIGOqUBjvqJ0Q2b2THBJqVd5f5RyzEFiga5r6SWFCbPxtK9Z8RZZ068GpDwOjM35pONwYmKWhzFHHbWV%2BXz%2FZNXvvdYfMdPYCW%2FnTvfXLSVLUA2W%2FdZ9H6zVEbwRfOKPRor%2B199fQNqUV972b%2FweSA20VftTWj4g2%2BGmRl0cQloOlvcLiG40W3HqoJ3YXpbLNUh%2Bguvucr1Fpds%2FJRCHjUgyWTpBXmOeloX&X-Amz-Signature=d11c30963c01cab4333515482d1b20c3e934ec332fa02447c340da834e4f5168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHWOBGY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAVa0%2BTbX4ODMpfCjsix50ngoMv%2FFCeVveYr1uF6NYGUAiEA6lWztupeJ%2Fh9p6vQAf5wdkTCqW8w5DpkJ10Vz6SC9iUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOaSygPJtLBEMd7VCrcA%2FC7zjtshPTN3WJguzRameX0XDE8C%2FW0HeEQdbHePm3XB0MHVao1hGAzKd8XcyPB6cRcWBdWm%2B4%2Ftm5tXQvNpb1Tu26habR2%2Bcl3xxnhG%2F%2FFJpRuKGyzRGHL%2B9tlL72q33blpSfC%2Bw424LlhjQtcWCn0LzXmxU8FzFK%2BR5nlxP4uthyEhSWNhcEnO4cMGXe4CHxKuun5Bv9bSr5C6DN2iuO9Qi5FxTePSKrWvw3f%2FbIuytNLfYXdE%2FLxgXOgZF9sE3QoFKhn9mGdVgiQcRyNPFDUq9OCdc49SlozDW26rt%2BrwdAUaS3fHsmP4MR7ij2wNfkT%2Fzl%2BoplthyNSjxaC%2BMKf%2FDKmdrz%2FXE%2FqEbDMKqNdNCMq1V4ZLkrZXPfRtS8GMmugXMr7CmUs5owbjV8GUL8WDuZSBUtXtTo4A1lQM5JG3mAODpcZnMJsPxAv9OtAlpnPT1zGPBb%2Brl6nHk4bGk%2FLeE2HM3HMBFoGXEZ73g81PyiHtDV7BsJsOmmAp8q19MOhN7PV3Y9siK2WKa3LItZfrsC9B9i4JuiQ5RmQQdMSNk%2BABljFKI0nMToSM15pSHmGUU0l8GesuIFxQBPA8BWt%2BmnyefAhRDvRdGay4%2BLZcR%2FpzBX0r0bsmqZuMOSQrMIGOqUBjvqJ0Q2b2THBJqVd5f5RyzEFiga5r6SWFCbPxtK9Z8RZZ068GpDwOjM35pONwYmKWhzFHHbWV%2BXz%2FZNXvvdYfMdPYCW%2FnTvfXLSVLUA2W%2FdZ9H6zVEbwRfOKPRor%2B199fQNqUV972b%2FweSA20VftTWj4g2%2BGmRl0cQloOlvcLiG40W3HqoJ3YXpbLNUh%2Bguvucr1Fpds%2FJRCHjUgyWTpBXmOeloX&X-Amz-Signature=dbe339858f0366a5607128102610c141a1283257dfb580f5a05b40c1d5de3fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
