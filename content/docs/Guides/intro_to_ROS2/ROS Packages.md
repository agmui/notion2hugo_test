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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHJEWRR%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIE2ms1BGx03TwNBhuFCsW4NISBM6fKCeClDA7ex4RdnyAiEAt5Rz%2BFarUTIRzcxFTcqgiOZ3PxCs2SX9crU%2FH%2FD%2B0x8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVsdxqvytGKCjij2SrcA1pJGEfHSPMDGw5dkId%2Bm5fiYJR17MgMOMEetrIFadRfeQZeXLoCDZ50BfwNzpNCw0eYk2KNySTuxY5CUZNQg38EObW8u%2BYG655P4ygZ8s8Y2icBUOc7%2Buar5FemO44RyBmpoIIWn7pPHwdSpGO%2FxIVkD9A9AjVj1OagyhoQbIodK1cIwsv%2BEb2K82guRm9mLFccJXLjLVJIhmBCtgEGWeeaOk4BYxxnpgF3LBYyuKuAtHJmfCuibuqvdIKC3QidbA4T1OLoj8M%2FDaFDQt%2F2G8VSMzAI3oASuXfbagYuu1zQEtF3apN8qE4tQKznetYzXK%2BzazfqrINYZ%2BZE%2BQljeoJENosYcEbJKyf45UCkzKqTHB2NyZsT2MhDJ%2FXIrdA4pjFWRV6SH1h7jxGXx7F6ENiZe82JCQco8jJFT56ZzomuWHItdiG%2FnoISP7FZ%2BpYTt1YJprJFMN%2FPrG%2Bsv2ziTPsVV6OCCWkiTSyYQ70XaSFmt%2B%2BHSLRNNTEeFI%2F9w71JsaXA3zttjG79tVTOCo5pfoAyxQJOGzNj%2Buf0pZXSJm0VhMgKptz8o2sCHloV3KbYuFgswES2xbLaPoH5TTJISMFq%2FPOppaGTz5kuXU%2FXjWUfpznsT3KkpSBXhSw4MLry%2FcUGOqUBcKNT%2B6XQr4bilSTlljj3p%2FOAW1YcpGuNPFEoqu%2BY%2BRSlnrV%2BejVFjoKIDG%2FdC7yXDFQyKTufEQJStHqNKKxL9xQM8aJqnaWLzPacIGpHQaxEiIQW9e3ccsBnVcswxHs%2FZidQJYnQBOwzAo%2Br7KqDgc0zRYMw8hiWDw1sczV1IeDsRByM%2BFhZ84aMa%2FB2CJUW%2BK98CSXERbVsEsNMb61gvKgrHiZZ&X-Amz-Signature=78915392aff52f166e1318385d5d6aeaf63cc0eab7793fde28724ced91eefaad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHJEWRR%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIE2ms1BGx03TwNBhuFCsW4NISBM6fKCeClDA7ex4RdnyAiEAt5Rz%2BFarUTIRzcxFTcqgiOZ3PxCs2SX9crU%2FH%2FD%2B0x8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVsdxqvytGKCjij2SrcA1pJGEfHSPMDGw5dkId%2Bm5fiYJR17MgMOMEetrIFadRfeQZeXLoCDZ50BfwNzpNCw0eYk2KNySTuxY5CUZNQg38EObW8u%2BYG655P4ygZ8s8Y2icBUOc7%2Buar5FemO44RyBmpoIIWn7pPHwdSpGO%2FxIVkD9A9AjVj1OagyhoQbIodK1cIwsv%2BEb2K82guRm9mLFccJXLjLVJIhmBCtgEGWeeaOk4BYxxnpgF3LBYyuKuAtHJmfCuibuqvdIKC3QidbA4T1OLoj8M%2FDaFDQt%2F2G8VSMzAI3oASuXfbagYuu1zQEtF3apN8qE4tQKznetYzXK%2BzazfqrINYZ%2BZE%2BQljeoJENosYcEbJKyf45UCkzKqTHB2NyZsT2MhDJ%2FXIrdA4pjFWRV6SH1h7jxGXx7F6ENiZe82JCQco8jJFT56ZzomuWHItdiG%2FnoISP7FZ%2BpYTt1YJprJFMN%2FPrG%2Bsv2ziTPsVV6OCCWkiTSyYQ70XaSFmt%2B%2BHSLRNNTEeFI%2F9w71JsaXA3zttjG79tVTOCo5pfoAyxQJOGzNj%2Buf0pZXSJm0VhMgKptz8o2sCHloV3KbYuFgswES2xbLaPoH5TTJISMFq%2FPOppaGTz5kuXU%2FXjWUfpznsT3KkpSBXhSw4MLry%2FcUGOqUBcKNT%2B6XQr4bilSTlljj3p%2FOAW1YcpGuNPFEoqu%2BY%2BRSlnrV%2BejVFjoKIDG%2FdC7yXDFQyKTufEQJStHqNKKxL9xQM8aJqnaWLzPacIGpHQaxEiIQW9e3ccsBnVcswxHs%2FZidQJYnQBOwzAo%2Br7KqDgc0zRYMw8hiWDw1sczV1IeDsRByM%2BFhZ84aMa%2FB2CJUW%2BK98CSXERbVsEsNMb61gvKgrHiZZ&X-Amz-Signature=34a6847c827777c97a5463c647ac22ad19f89d1f933eb159427a13b25001d1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHJEWRR%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIE2ms1BGx03TwNBhuFCsW4NISBM6fKCeClDA7ex4RdnyAiEAt5Rz%2BFarUTIRzcxFTcqgiOZ3PxCs2SX9crU%2FH%2FD%2B0x8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVsdxqvytGKCjij2SrcA1pJGEfHSPMDGw5dkId%2Bm5fiYJR17MgMOMEetrIFadRfeQZeXLoCDZ50BfwNzpNCw0eYk2KNySTuxY5CUZNQg38EObW8u%2BYG655P4ygZ8s8Y2icBUOc7%2Buar5FemO44RyBmpoIIWn7pPHwdSpGO%2FxIVkD9A9AjVj1OagyhoQbIodK1cIwsv%2BEb2K82guRm9mLFccJXLjLVJIhmBCtgEGWeeaOk4BYxxnpgF3LBYyuKuAtHJmfCuibuqvdIKC3QidbA4T1OLoj8M%2FDaFDQt%2F2G8VSMzAI3oASuXfbagYuu1zQEtF3apN8qE4tQKznetYzXK%2BzazfqrINYZ%2BZE%2BQljeoJENosYcEbJKyf45UCkzKqTHB2NyZsT2MhDJ%2FXIrdA4pjFWRV6SH1h7jxGXx7F6ENiZe82JCQco8jJFT56ZzomuWHItdiG%2FnoISP7FZ%2BpYTt1YJprJFMN%2FPrG%2Bsv2ziTPsVV6OCCWkiTSyYQ70XaSFmt%2B%2BHSLRNNTEeFI%2F9w71JsaXA3zttjG79tVTOCo5pfoAyxQJOGzNj%2Buf0pZXSJm0VhMgKptz8o2sCHloV3KbYuFgswES2xbLaPoH5TTJISMFq%2FPOppaGTz5kuXU%2FXjWUfpznsT3KkpSBXhSw4MLry%2FcUGOqUBcKNT%2B6XQr4bilSTlljj3p%2FOAW1YcpGuNPFEoqu%2BY%2BRSlnrV%2BejVFjoKIDG%2FdC7yXDFQyKTufEQJStHqNKKxL9xQM8aJqnaWLzPacIGpHQaxEiIQW9e3ccsBnVcswxHs%2FZidQJYnQBOwzAo%2Br7KqDgc0zRYMw8hiWDw1sczV1IeDsRByM%2BFhZ84aMa%2FB2CJUW%2BK98CSXERbVsEsNMb61gvKgrHiZZ&X-Amz-Signature=cf8b6400b94469a327f2b61387bff5ae069a312d54ae0522a0965e59b3de5eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHJEWRR%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIE2ms1BGx03TwNBhuFCsW4NISBM6fKCeClDA7ex4RdnyAiEAt5Rz%2BFarUTIRzcxFTcqgiOZ3PxCs2SX9crU%2FH%2FD%2B0x8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVsdxqvytGKCjij2SrcA1pJGEfHSPMDGw5dkId%2Bm5fiYJR17MgMOMEetrIFadRfeQZeXLoCDZ50BfwNzpNCw0eYk2KNySTuxY5CUZNQg38EObW8u%2BYG655P4ygZ8s8Y2icBUOc7%2Buar5FemO44RyBmpoIIWn7pPHwdSpGO%2FxIVkD9A9AjVj1OagyhoQbIodK1cIwsv%2BEb2K82guRm9mLFccJXLjLVJIhmBCtgEGWeeaOk4BYxxnpgF3LBYyuKuAtHJmfCuibuqvdIKC3QidbA4T1OLoj8M%2FDaFDQt%2F2G8VSMzAI3oASuXfbagYuu1zQEtF3apN8qE4tQKznetYzXK%2BzazfqrINYZ%2BZE%2BQljeoJENosYcEbJKyf45UCkzKqTHB2NyZsT2MhDJ%2FXIrdA4pjFWRV6SH1h7jxGXx7F6ENiZe82JCQco8jJFT56ZzomuWHItdiG%2FnoISP7FZ%2BpYTt1YJprJFMN%2FPrG%2Bsv2ziTPsVV6OCCWkiTSyYQ70XaSFmt%2B%2BHSLRNNTEeFI%2F9w71JsaXA3zttjG79tVTOCo5pfoAyxQJOGzNj%2Buf0pZXSJm0VhMgKptz8o2sCHloV3KbYuFgswES2xbLaPoH5TTJISMFq%2FPOppaGTz5kuXU%2FXjWUfpznsT3KkpSBXhSw4MLry%2FcUGOqUBcKNT%2B6XQr4bilSTlljj3p%2FOAW1YcpGuNPFEoqu%2BY%2BRSlnrV%2BejVFjoKIDG%2FdC7yXDFQyKTufEQJStHqNKKxL9xQM8aJqnaWLzPacIGpHQaxEiIQW9e3ccsBnVcswxHs%2FZidQJYnQBOwzAo%2Br7KqDgc0zRYMw8hiWDw1sczV1IeDsRByM%2BFhZ84aMa%2FB2CJUW%2BK98CSXERbVsEsNMb61gvKgrHiZZ&X-Amz-Signature=f9f776c9f28233167e5668cc6e8def4562f15183cce78df63dfa570ac6d29011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHJEWRR%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIE2ms1BGx03TwNBhuFCsW4NISBM6fKCeClDA7ex4RdnyAiEAt5Rz%2BFarUTIRzcxFTcqgiOZ3PxCs2SX9crU%2FH%2FD%2B0x8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVsdxqvytGKCjij2SrcA1pJGEfHSPMDGw5dkId%2Bm5fiYJR17MgMOMEetrIFadRfeQZeXLoCDZ50BfwNzpNCw0eYk2KNySTuxY5CUZNQg38EObW8u%2BYG655P4ygZ8s8Y2icBUOc7%2Buar5FemO44RyBmpoIIWn7pPHwdSpGO%2FxIVkD9A9AjVj1OagyhoQbIodK1cIwsv%2BEb2K82guRm9mLFccJXLjLVJIhmBCtgEGWeeaOk4BYxxnpgF3LBYyuKuAtHJmfCuibuqvdIKC3QidbA4T1OLoj8M%2FDaFDQt%2F2G8VSMzAI3oASuXfbagYuu1zQEtF3apN8qE4tQKznetYzXK%2BzazfqrINYZ%2BZE%2BQljeoJENosYcEbJKyf45UCkzKqTHB2NyZsT2MhDJ%2FXIrdA4pjFWRV6SH1h7jxGXx7F6ENiZe82JCQco8jJFT56ZzomuWHItdiG%2FnoISP7FZ%2BpYTt1YJprJFMN%2FPrG%2Bsv2ziTPsVV6OCCWkiTSyYQ70XaSFmt%2B%2BHSLRNNTEeFI%2F9w71JsaXA3zttjG79tVTOCo5pfoAyxQJOGzNj%2Buf0pZXSJm0VhMgKptz8o2sCHloV3KbYuFgswES2xbLaPoH5TTJISMFq%2FPOppaGTz5kuXU%2FXjWUfpznsT3KkpSBXhSw4MLry%2FcUGOqUBcKNT%2B6XQr4bilSTlljj3p%2FOAW1YcpGuNPFEoqu%2BY%2BRSlnrV%2BejVFjoKIDG%2FdC7yXDFQyKTufEQJStHqNKKxL9xQM8aJqnaWLzPacIGpHQaxEiIQW9e3ccsBnVcswxHs%2FZidQJYnQBOwzAo%2Br7KqDgc0zRYMw8hiWDw1sczV1IeDsRByM%2BFhZ84aMa%2FB2CJUW%2BK98CSXERbVsEsNMb61gvKgrHiZZ&X-Amz-Signature=4d09bea4c848e5f23506a3ab7e9dbc5719041fd9d4760f668fe4a4e044086dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHJEWRR%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIE2ms1BGx03TwNBhuFCsW4NISBM6fKCeClDA7ex4RdnyAiEAt5Rz%2BFarUTIRzcxFTcqgiOZ3PxCs2SX9crU%2FH%2FD%2B0x8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVsdxqvytGKCjij2SrcA1pJGEfHSPMDGw5dkId%2Bm5fiYJR17MgMOMEetrIFadRfeQZeXLoCDZ50BfwNzpNCw0eYk2KNySTuxY5CUZNQg38EObW8u%2BYG655P4ygZ8s8Y2icBUOc7%2Buar5FemO44RyBmpoIIWn7pPHwdSpGO%2FxIVkD9A9AjVj1OagyhoQbIodK1cIwsv%2BEb2K82guRm9mLFccJXLjLVJIhmBCtgEGWeeaOk4BYxxnpgF3LBYyuKuAtHJmfCuibuqvdIKC3QidbA4T1OLoj8M%2FDaFDQt%2F2G8VSMzAI3oASuXfbagYuu1zQEtF3apN8qE4tQKznetYzXK%2BzazfqrINYZ%2BZE%2BQljeoJENosYcEbJKyf45UCkzKqTHB2NyZsT2MhDJ%2FXIrdA4pjFWRV6SH1h7jxGXx7F6ENiZe82JCQco8jJFT56ZzomuWHItdiG%2FnoISP7FZ%2BpYTt1YJprJFMN%2FPrG%2Bsv2ziTPsVV6OCCWkiTSyYQ70XaSFmt%2B%2BHSLRNNTEeFI%2F9w71JsaXA3zttjG79tVTOCo5pfoAyxQJOGzNj%2Buf0pZXSJm0VhMgKptz8o2sCHloV3KbYuFgswES2xbLaPoH5TTJISMFq%2FPOppaGTz5kuXU%2FXjWUfpznsT3KkpSBXhSw4MLry%2FcUGOqUBcKNT%2B6XQr4bilSTlljj3p%2FOAW1YcpGuNPFEoqu%2BY%2BRSlnrV%2BejVFjoKIDG%2FdC7yXDFQyKTufEQJStHqNKKxL9xQM8aJqnaWLzPacIGpHQaxEiIQW9e3ccsBnVcswxHs%2FZidQJYnQBOwzAo%2Br7KqDgc0zRYMw8hiWDw1sczV1IeDsRByM%2BFhZ84aMa%2FB2CJUW%2BK98CSXERbVsEsNMb61gvKgrHiZZ&X-Amz-Signature=14476f4b4996ff617d9469aeacb698969a8b497f093d672d53216bb472f40b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHJEWRR%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIE2ms1BGx03TwNBhuFCsW4NISBM6fKCeClDA7ex4RdnyAiEAt5Rz%2BFarUTIRzcxFTcqgiOZ3PxCs2SX9crU%2FH%2FD%2B0x8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVsdxqvytGKCjij2SrcA1pJGEfHSPMDGw5dkId%2Bm5fiYJR17MgMOMEetrIFadRfeQZeXLoCDZ50BfwNzpNCw0eYk2KNySTuxY5CUZNQg38EObW8u%2BYG655P4ygZ8s8Y2icBUOc7%2Buar5FemO44RyBmpoIIWn7pPHwdSpGO%2FxIVkD9A9AjVj1OagyhoQbIodK1cIwsv%2BEb2K82guRm9mLFccJXLjLVJIhmBCtgEGWeeaOk4BYxxnpgF3LBYyuKuAtHJmfCuibuqvdIKC3QidbA4T1OLoj8M%2FDaFDQt%2F2G8VSMzAI3oASuXfbagYuu1zQEtF3apN8qE4tQKznetYzXK%2BzazfqrINYZ%2BZE%2BQljeoJENosYcEbJKyf45UCkzKqTHB2NyZsT2MhDJ%2FXIrdA4pjFWRV6SH1h7jxGXx7F6ENiZe82JCQco8jJFT56ZzomuWHItdiG%2FnoISP7FZ%2BpYTt1YJprJFMN%2FPrG%2Bsv2ziTPsVV6OCCWkiTSyYQ70XaSFmt%2B%2BHSLRNNTEeFI%2F9w71JsaXA3zttjG79tVTOCo5pfoAyxQJOGzNj%2Buf0pZXSJm0VhMgKptz8o2sCHloV3KbYuFgswES2xbLaPoH5TTJISMFq%2FPOppaGTz5kuXU%2FXjWUfpznsT3KkpSBXhSw4MLry%2FcUGOqUBcKNT%2B6XQr4bilSTlljj3p%2FOAW1YcpGuNPFEoqu%2BY%2BRSlnrV%2BejVFjoKIDG%2FdC7yXDFQyKTufEQJStHqNKKxL9xQM8aJqnaWLzPacIGpHQaxEiIQW9e3ccsBnVcswxHs%2FZidQJYnQBOwzAo%2Br7KqDgc0zRYMw8hiWDw1sczV1IeDsRByM%2BFhZ84aMa%2FB2CJUW%2BK98CSXERbVsEsNMb61gvKgrHiZZ&X-Amz-Signature=1d3bd1a8a348c069dd04a58b6d77566b9e1ea07a8a9c6a35e905f77f7c7e6662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
