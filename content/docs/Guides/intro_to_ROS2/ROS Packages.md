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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATG36IA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT1EgRTimCheXbbLtO0KNwCFrcSZNJPycLMEoaOSvekAiEA13aEMIu9DFzoBWXCfcJNOnfzH24SEK3tY499F%2BOG520q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAHOiVNIMuqEI689zCrcA6pBeobgW0LUfC9gz%2F75MgA9zFwkSKdRPwY4h6OQsiykEGLMJxIMLbb3VSPCfKFLQQaMn9Gtb6Yyx4%2F%2FrO0CGztVmQum50gRKH9bMc%2F40cChe1ip6MmudrL6uwMpyw5A4hTFts8DpQQ3TfQ7CwDyHOkhmN%2Bn9mqmaKfoGFOQ%2Bsc%2F7xk%2BMrdkroVnduYVPDvIekpVWUM9A0zj5EVPQfMGOAzoMm%2Bccfcfa%2BSguP8c%2FfJdEZP%2FlgQIxa8K2Tk0Lw1K4cbjKL0BEqzBZpLIb1WXP7OX5XHsCE2TwFQkSZNFQGvyfGBRcrGbAdnXbhQxD2D3cMKS%2BDCoPhF6pBrB4dWgEVzrZqFVc%2BTvNnx4KfuEA9muuU5mC5nfHa0z2scAnEgw9ISf0kTLDYqy2GhWm95fMn%2BdDOrSWN%2B6b%2BpOo3zv%2BmTvYnv1FiLhGZTmmAXZfKh%2BxVMJqvbGuHd08hkI7uEr2wVRzeNdLht69cyc%2F2XdjpIXGpuax0OiOwpFoHOkWuToGyMmvuJkSuvdxfHoQJ%2Byi46RwwghfQZPGRkxTBwhA%2BkALQUOYZl8tAdHGqY9giFMGhsR6HYeqgorUVPt9HSjzsIeUlpnc3ibdC79FUIXyFwxCWcDpsw5JIrjSolsMLWJx8IGOqUBQksQdE%2BguPPCUPcSFsBa4m8At20G4Q0CujkBFF8agWfv1DA%2BGXBvJ9U4cwM76OAkDqh%2FnIN9Y%2FGH8PbXwAAcLr62CHTlvjNP4KAyoNQ3w%2BwZedlk6FURtcidBKWEOc6YEg1oTDa%2Bie48X34%2F%2BKdvvobGJTzUiZE1xHibu7KK%2BcPiU6cO4RT5Io8A8%2Bi012ow7zkGJV%2BHh8K5oYTAJjL3%2B4okn%2FwR&X-Amz-Signature=c688f4ca53bfaa7acd0539547be927fe7ef1ee35ee1582882dfe64a5c710e5ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATG36IA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT1EgRTimCheXbbLtO0KNwCFrcSZNJPycLMEoaOSvekAiEA13aEMIu9DFzoBWXCfcJNOnfzH24SEK3tY499F%2BOG520q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAHOiVNIMuqEI689zCrcA6pBeobgW0LUfC9gz%2F75MgA9zFwkSKdRPwY4h6OQsiykEGLMJxIMLbb3VSPCfKFLQQaMn9Gtb6Yyx4%2F%2FrO0CGztVmQum50gRKH9bMc%2F40cChe1ip6MmudrL6uwMpyw5A4hTFts8DpQQ3TfQ7CwDyHOkhmN%2Bn9mqmaKfoGFOQ%2Bsc%2F7xk%2BMrdkroVnduYVPDvIekpVWUM9A0zj5EVPQfMGOAzoMm%2Bccfcfa%2BSguP8c%2FfJdEZP%2FlgQIxa8K2Tk0Lw1K4cbjKL0BEqzBZpLIb1WXP7OX5XHsCE2TwFQkSZNFQGvyfGBRcrGbAdnXbhQxD2D3cMKS%2BDCoPhF6pBrB4dWgEVzrZqFVc%2BTvNnx4KfuEA9muuU5mC5nfHa0z2scAnEgw9ISf0kTLDYqy2GhWm95fMn%2BdDOrSWN%2B6b%2BpOo3zv%2BmTvYnv1FiLhGZTmmAXZfKh%2BxVMJqvbGuHd08hkI7uEr2wVRzeNdLht69cyc%2F2XdjpIXGpuax0OiOwpFoHOkWuToGyMmvuJkSuvdxfHoQJ%2Byi46RwwghfQZPGRkxTBwhA%2BkALQUOYZl8tAdHGqY9giFMGhsR6HYeqgorUVPt9HSjzsIeUlpnc3ibdC79FUIXyFwxCWcDpsw5JIrjSolsMLWJx8IGOqUBQksQdE%2BguPPCUPcSFsBa4m8At20G4Q0CujkBFF8agWfv1DA%2BGXBvJ9U4cwM76OAkDqh%2FnIN9Y%2FGH8PbXwAAcLr62CHTlvjNP4KAyoNQ3w%2BwZedlk6FURtcidBKWEOc6YEg1oTDa%2Bie48X34%2F%2BKdvvobGJTzUiZE1xHibu7KK%2BcPiU6cO4RT5Io8A8%2Bi012ow7zkGJV%2BHh8K5oYTAJjL3%2B4okn%2FwR&X-Amz-Signature=3472f6a42a30d45e31c2bb13fccccd189303499537502e0b332f1c85a87f9653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATG36IA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT1EgRTimCheXbbLtO0KNwCFrcSZNJPycLMEoaOSvekAiEA13aEMIu9DFzoBWXCfcJNOnfzH24SEK3tY499F%2BOG520q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAHOiVNIMuqEI689zCrcA6pBeobgW0LUfC9gz%2F75MgA9zFwkSKdRPwY4h6OQsiykEGLMJxIMLbb3VSPCfKFLQQaMn9Gtb6Yyx4%2F%2FrO0CGztVmQum50gRKH9bMc%2F40cChe1ip6MmudrL6uwMpyw5A4hTFts8DpQQ3TfQ7CwDyHOkhmN%2Bn9mqmaKfoGFOQ%2Bsc%2F7xk%2BMrdkroVnduYVPDvIekpVWUM9A0zj5EVPQfMGOAzoMm%2Bccfcfa%2BSguP8c%2FfJdEZP%2FlgQIxa8K2Tk0Lw1K4cbjKL0BEqzBZpLIb1WXP7OX5XHsCE2TwFQkSZNFQGvyfGBRcrGbAdnXbhQxD2D3cMKS%2BDCoPhF6pBrB4dWgEVzrZqFVc%2BTvNnx4KfuEA9muuU5mC5nfHa0z2scAnEgw9ISf0kTLDYqy2GhWm95fMn%2BdDOrSWN%2B6b%2BpOo3zv%2BmTvYnv1FiLhGZTmmAXZfKh%2BxVMJqvbGuHd08hkI7uEr2wVRzeNdLht69cyc%2F2XdjpIXGpuax0OiOwpFoHOkWuToGyMmvuJkSuvdxfHoQJ%2Byi46RwwghfQZPGRkxTBwhA%2BkALQUOYZl8tAdHGqY9giFMGhsR6HYeqgorUVPt9HSjzsIeUlpnc3ibdC79FUIXyFwxCWcDpsw5JIrjSolsMLWJx8IGOqUBQksQdE%2BguPPCUPcSFsBa4m8At20G4Q0CujkBFF8agWfv1DA%2BGXBvJ9U4cwM76OAkDqh%2FnIN9Y%2FGH8PbXwAAcLr62CHTlvjNP4KAyoNQ3w%2BwZedlk6FURtcidBKWEOc6YEg1oTDa%2Bie48X34%2F%2BKdvvobGJTzUiZE1xHibu7KK%2BcPiU6cO4RT5Io8A8%2Bi012ow7zkGJV%2BHh8K5oYTAJjL3%2B4okn%2FwR&X-Amz-Signature=63848acb27fd4304b0008651d2c92013b608f189b1589144d74d391fa201f619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATG36IA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT1EgRTimCheXbbLtO0KNwCFrcSZNJPycLMEoaOSvekAiEA13aEMIu9DFzoBWXCfcJNOnfzH24SEK3tY499F%2BOG520q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAHOiVNIMuqEI689zCrcA6pBeobgW0LUfC9gz%2F75MgA9zFwkSKdRPwY4h6OQsiykEGLMJxIMLbb3VSPCfKFLQQaMn9Gtb6Yyx4%2F%2FrO0CGztVmQum50gRKH9bMc%2F40cChe1ip6MmudrL6uwMpyw5A4hTFts8DpQQ3TfQ7CwDyHOkhmN%2Bn9mqmaKfoGFOQ%2Bsc%2F7xk%2BMrdkroVnduYVPDvIekpVWUM9A0zj5EVPQfMGOAzoMm%2Bccfcfa%2BSguP8c%2FfJdEZP%2FlgQIxa8K2Tk0Lw1K4cbjKL0BEqzBZpLIb1WXP7OX5XHsCE2TwFQkSZNFQGvyfGBRcrGbAdnXbhQxD2D3cMKS%2BDCoPhF6pBrB4dWgEVzrZqFVc%2BTvNnx4KfuEA9muuU5mC5nfHa0z2scAnEgw9ISf0kTLDYqy2GhWm95fMn%2BdDOrSWN%2B6b%2BpOo3zv%2BmTvYnv1FiLhGZTmmAXZfKh%2BxVMJqvbGuHd08hkI7uEr2wVRzeNdLht69cyc%2F2XdjpIXGpuax0OiOwpFoHOkWuToGyMmvuJkSuvdxfHoQJ%2Byi46RwwghfQZPGRkxTBwhA%2BkALQUOYZl8tAdHGqY9giFMGhsR6HYeqgorUVPt9HSjzsIeUlpnc3ibdC79FUIXyFwxCWcDpsw5JIrjSolsMLWJx8IGOqUBQksQdE%2BguPPCUPcSFsBa4m8At20G4Q0CujkBFF8agWfv1DA%2BGXBvJ9U4cwM76OAkDqh%2FnIN9Y%2FGH8PbXwAAcLr62CHTlvjNP4KAyoNQ3w%2BwZedlk6FURtcidBKWEOc6YEg1oTDa%2Bie48X34%2F%2BKdvvobGJTzUiZE1xHibu7KK%2BcPiU6cO4RT5Io8A8%2Bi012ow7zkGJV%2BHh8K5oYTAJjL3%2B4okn%2FwR&X-Amz-Signature=13f413382a9530e0e824a58bc246765136c24cf8883e9a44a28dc147b274f950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATG36IA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT1EgRTimCheXbbLtO0KNwCFrcSZNJPycLMEoaOSvekAiEA13aEMIu9DFzoBWXCfcJNOnfzH24SEK3tY499F%2BOG520q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAHOiVNIMuqEI689zCrcA6pBeobgW0LUfC9gz%2F75MgA9zFwkSKdRPwY4h6OQsiykEGLMJxIMLbb3VSPCfKFLQQaMn9Gtb6Yyx4%2F%2FrO0CGztVmQum50gRKH9bMc%2F40cChe1ip6MmudrL6uwMpyw5A4hTFts8DpQQ3TfQ7CwDyHOkhmN%2Bn9mqmaKfoGFOQ%2Bsc%2F7xk%2BMrdkroVnduYVPDvIekpVWUM9A0zj5EVPQfMGOAzoMm%2Bccfcfa%2BSguP8c%2FfJdEZP%2FlgQIxa8K2Tk0Lw1K4cbjKL0BEqzBZpLIb1WXP7OX5XHsCE2TwFQkSZNFQGvyfGBRcrGbAdnXbhQxD2D3cMKS%2BDCoPhF6pBrB4dWgEVzrZqFVc%2BTvNnx4KfuEA9muuU5mC5nfHa0z2scAnEgw9ISf0kTLDYqy2GhWm95fMn%2BdDOrSWN%2B6b%2BpOo3zv%2BmTvYnv1FiLhGZTmmAXZfKh%2BxVMJqvbGuHd08hkI7uEr2wVRzeNdLht69cyc%2F2XdjpIXGpuax0OiOwpFoHOkWuToGyMmvuJkSuvdxfHoQJ%2Byi46RwwghfQZPGRkxTBwhA%2BkALQUOYZl8tAdHGqY9giFMGhsR6HYeqgorUVPt9HSjzsIeUlpnc3ibdC79FUIXyFwxCWcDpsw5JIrjSolsMLWJx8IGOqUBQksQdE%2BguPPCUPcSFsBa4m8At20G4Q0CujkBFF8agWfv1DA%2BGXBvJ9U4cwM76OAkDqh%2FnIN9Y%2FGH8PbXwAAcLr62CHTlvjNP4KAyoNQ3w%2BwZedlk6FURtcidBKWEOc6YEg1oTDa%2Bie48X34%2F%2BKdvvobGJTzUiZE1xHibu7KK%2BcPiU6cO4RT5Io8A8%2Bi012ow7zkGJV%2BHh8K5oYTAJjL3%2B4okn%2FwR&X-Amz-Signature=2a6cd97d21e6a577a059348f119ec5d8e36c96a3b46a53b5a136d5d371564388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATG36IA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT1EgRTimCheXbbLtO0KNwCFrcSZNJPycLMEoaOSvekAiEA13aEMIu9DFzoBWXCfcJNOnfzH24SEK3tY499F%2BOG520q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAHOiVNIMuqEI689zCrcA6pBeobgW0LUfC9gz%2F75MgA9zFwkSKdRPwY4h6OQsiykEGLMJxIMLbb3VSPCfKFLQQaMn9Gtb6Yyx4%2F%2FrO0CGztVmQum50gRKH9bMc%2F40cChe1ip6MmudrL6uwMpyw5A4hTFts8DpQQ3TfQ7CwDyHOkhmN%2Bn9mqmaKfoGFOQ%2Bsc%2F7xk%2BMrdkroVnduYVPDvIekpVWUM9A0zj5EVPQfMGOAzoMm%2Bccfcfa%2BSguP8c%2FfJdEZP%2FlgQIxa8K2Tk0Lw1K4cbjKL0BEqzBZpLIb1WXP7OX5XHsCE2TwFQkSZNFQGvyfGBRcrGbAdnXbhQxD2D3cMKS%2BDCoPhF6pBrB4dWgEVzrZqFVc%2BTvNnx4KfuEA9muuU5mC5nfHa0z2scAnEgw9ISf0kTLDYqy2GhWm95fMn%2BdDOrSWN%2B6b%2BpOo3zv%2BmTvYnv1FiLhGZTmmAXZfKh%2BxVMJqvbGuHd08hkI7uEr2wVRzeNdLht69cyc%2F2XdjpIXGpuax0OiOwpFoHOkWuToGyMmvuJkSuvdxfHoQJ%2Byi46RwwghfQZPGRkxTBwhA%2BkALQUOYZl8tAdHGqY9giFMGhsR6HYeqgorUVPt9HSjzsIeUlpnc3ibdC79FUIXyFwxCWcDpsw5JIrjSolsMLWJx8IGOqUBQksQdE%2BguPPCUPcSFsBa4m8At20G4Q0CujkBFF8agWfv1DA%2BGXBvJ9U4cwM76OAkDqh%2FnIN9Y%2FGH8PbXwAAcLr62CHTlvjNP4KAyoNQ3w%2BwZedlk6FURtcidBKWEOc6YEg1oTDa%2Bie48X34%2F%2BKdvvobGJTzUiZE1xHibu7KK%2BcPiU6cO4RT5Io8A8%2Bi012ow7zkGJV%2BHh8K5oYTAJjL3%2B4okn%2FwR&X-Amz-Signature=e13fd7d02b8248ec9d2a264fdf73976a0370f6079e3c0da628ce5a80fdb3b6bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATG36IA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT1EgRTimCheXbbLtO0KNwCFrcSZNJPycLMEoaOSvekAiEA13aEMIu9DFzoBWXCfcJNOnfzH24SEK3tY499F%2BOG520q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAHOiVNIMuqEI689zCrcA6pBeobgW0LUfC9gz%2F75MgA9zFwkSKdRPwY4h6OQsiykEGLMJxIMLbb3VSPCfKFLQQaMn9Gtb6Yyx4%2F%2FrO0CGztVmQum50gRKH9bMc%2F40cChe1ip6MmudrL6uwMpyw5A4hTFts8DpQQ3TfQ7CwDyHOkhmN%2Bn9mqmaKfoGFOQ%2Bsc%2F7xk%2BMrdkroVnduYVPDvIekpVWUM9A0zj5EVPQfMGOAzoMm%2Bccfcfa%2BSguP8c%2FfJdEZP%2FlgQIxa8K2Tk0Lw1K4cbjKL0BEqzBZpLIb1WXP7OX5XHsCE2TwFQkSZNFQGvyfGBRcrGbAdnXbhQxD2D3cMKS%2BDCoPhF6pBrB4dWgEVzrZqFVc%2BTvNnx4KfuEA9muuU5mC5nfHa0z2scAnEgw9ISf0kTLDYqy2GhWm95fMn%2BdDOrSWN%2B6b%2BpOo3zv%2BmTvYnv1FiLhGZTmmAXZfKh%2BxVMJqvbGuHd08hkI7uEr2wVRzeNdLht69cyc%2F2XdjpIXGpuax0OiOwpFoHOkWuToGyMmvuJkSuvdxfHoQJ%2Byi46RwwghfQZPGRkxTBwhA%2BkALQUOYZl8tAdHGqY9giFMGhsR6HYeqgorUVPt9HSjzsIeUlpnc3ibdC79FUIXyFwxCWcDpsw5JIrjSolsMLWJx8IGOqUBQksQdE%2BguPPCUPcSFsBa4m8At20G4Q0CujkBFF8agWfv1DA%2BGXBvJ9U4cwM76OAkDqh%2FnIN9Y%2FGH8PbXwAAcLr62CHTlvjNP4KAyoNQ3w%2BwZedlk6FURtcidBKWEOc6YEg1oTDa%2Bie48X34%2F%2BKdvvobGJTzUiZE1xHibu7KK%2BcPiU6cO4RT5Io8A8%2Bi012ow7zkGJV%2BHh8K5oYTAJjL3%2B4okn%2FwR&X-Amz-Signature=08b4ca63e02b3496530e68da6731de5f2def1f9f5815dd0e02efc0e81b22e12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
