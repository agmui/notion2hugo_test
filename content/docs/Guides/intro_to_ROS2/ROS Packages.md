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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDGH4UI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDUUUI5lt7FRskyOEAR32YGv65b7vjnE%2B5mvvNHKdviQIhANE18EhziQpD6NiiBW9ZgLq2zW9TGhIrC4adMQWzzt6gKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQpD3swinXi60xJG4q3AM6Tt4T9aU4KCxEdwSJqHjBFnutBVx2liNSK666CoTVVn7vYmtxrFC6W57RdESCF9fbTSBXFXvUnOcsb%2Fm2Hsm%2FepGIP7iWWPxbp94EsB9Oaz1TmnD%2F4SBux%2Fi%2FvJtLWKtL1htu0EPhHJbOa6FQWfgksXHf7JrOnanFR94EGpQhXKRehbPu3ly6U5yOwR1eeCS%2F7iG6TNVD%2FNAvDfR0KpY273VqtrFTemnhnsPynxlelc3az1ZBC9ZtTFxKO8SN2S4Hji1WevQJe3SPLXratXU67ccxrLPNDTCiyO7sgKA9Uxg90Ah%2FHlWveBKnCEZfxcZZDwQeeMW%2BilEh7IK9misRez9BmvqL4f6Zt3bS69mfadnbNuMWFfpTxDxo8zsErrLSqPYFwsVvlFnySOOC8QVUUNWN0WKWkRk7k0YsoR%2BnROPF%2Fp5hDNW9VMCXY3eJ%2B4H%2B1CpkwO%2BatSiqSVNHtKss3MDJQ9%2BDArArwW1jKuQ9DISFbzUS9Lh%2Fj4E87dKq6yyuJykrTKNGi91UDZ7I64d%2FbHCKtmQ%2Bvyg%2FsGk3kVSAD%2F260dvZ2C1gqoB2iFL71lzEiGQ95JWqc16UwL%2B%2BkOk7g0OHMeIswwpOrPzfWP9HLjMwOlEA3IRx%2FTIxSjDHzvW8BjqkAVI%2Bqfl0eHzzm5gwn2zq9RZb5MzCZyYM9%2B8QfmZ9SCn9Rrd3YMnFKYUP3Msk25%2B4NTBq2Y9ISulbSR7bUy9Namia98EG88bm8fzPsV69Ckv%2FQTdnCHBvTMambJGRBkUBjklyzNTNGqc8%2FsY4dTu6oBExtxagZ61jE5zxJSPsyb1rtqBMi9vTIDWhBiqP1lzlwlOG8%2BkbQwIVbT7E4WFmsRT1dYix&X-Amz-Signature=aba318cf339d349feb94749d5e01d26b8a8c5096587a8b0bebfae8bc725d255f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDGH4UI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDUUUI5lt7FRskyOEAR32YGv65b7vjnE%2B5mvvNHKdviQIhANE18EhziQpD6NiiBW9ZgLq2zW9TGhIrC4adMQWzzt6gKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQpD3swinXi60xJG4q3AM6Tt4T9aU4KCxEdwSJqHjBFnutBVx2liNSK666CoTVVn7vYmtxrFC6W57RdESCF9fbTSBXFXvUnOcsb%2Fm2Hsm%2FepGIP7iWWPxbp94EsB9Oaz1TmnD%2F4SBux%2Fi%2FvJtLWKtL1htu0EPhHJbOa6FQWfgksXHf7JrOnanFR94EGpQhXKRehbPu3ly6U5yOwR1eeCS%2F7iG6TNVD%2FNAvDfR0KpY273VqtrFTemnhnsPynxlelc3az1ZBC9ZtTFxKO8SN2S4Hji1WevQJe3SPLXratXU67ccxrLPNDTCiyO7sgKA9Uxg90Ah%2FHlWveBKnCEZfxcZZDwQeeMW%2BilEh7IK9misRez9BmvqL4f6Zt3bS69mfadnbNuMWFfpTxDxo8zsErrLSqPYFwsVvlFnySOOC8QVUUNWN0WKWkRk7k0YsoR%2BnROPF%2Fp5hDNW9VMCXY3eJ%2B4H%2B1CpkwO%2BatSiqSVNHtKss3MDJQ9%2BDArArwW1jKuQ9DISFbzUS9Lh%2Fj4E87dKq6yyuJykrTKNGi91UDZ7I64d%2FbHCKtmQ%2Bvyg%2FsGk3kVSAD%2F260dvZ2C1gqoB2iFL71lzEiGQ95JWqc16UwL%2B%2BkOk7g0OHMeIswwpOrPzfWP9HLjMwOlEA3IRx%2FTIxSjDHzvW8BjqkAVI%2Bqfl0eHzzm5gwn2zq9RZb5MzCZyYM9%2B8QfmZ9SCn9Rrd3YMnFKYUP3Msk25%2B4NTBq2Y9ISulbSR7bUy9Namia98EG88bm8fzPsV69Ckv%2FQTdnCHBvTMambJGRBkUBjklyzNTNGqc8%2FsY4dTu6oBExtxagZ61jE5zxJSPsyb1rtqBMi9vTIDWhBiqP1lzlwlOG8%2BkbQwIVbT7E4WFmsRT1dYix&X-Amz-Signature=e0e2ef9c84ebb2b8f4f616b132ef1a65022bdf0cba3ae4b0e6442e35434aa04b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDGH4UI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDUUUI5lt7FRskyOEAR32YGv65b7vjnE%2B5mvvNHKdviQIhANE18EhziQpD6NiiBW9ZgLq2zW9TGhIrC4adMQWzzt6gKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQpD3swinXi60xJG4q3AM6Tt4T9aU4KCxEdwSJqHjBFnutBVx2liNSK666CoTVVn7vYmtxrFC6W57RdESCF9fbTSBXFXvUnOcsb%2Fm2Hsm%2FepGIP7iWWPxbp94EsB9Oaz1TmnD%2F4SBux%2Fi%2FvJtLWKtL1htu0EPhHJbOa6FQWfgksXHf7JrOnanFR94EGpQhXKRehbPu3ly6U5yOwR1eeCS%2F7iG6TNVD%2FNAvDfR0KpY273VqtrFTemnhnsPynxlelc3az1ZBC9ZtTFxKO8SN2S4Hji1WevQJe3SPLXratXU67ccxrLPNDTCiyO7sgKA9Uxg90Ah%2FHlWveBKnCEZfxcZZDwQeeMW%2BilEh7IK9misRez9BmvqL4f6Zt3bS69mfadnbNuMWFfpTxDxo8zsErrLSqPYFwsVvlFnySOOC8QVUUNWN0WKWkRk7k0YsoR%2BnROPF%2Fp5hDNW9VMCXY3eJ%2B4H%2B1CpkwO%2BatSiqSVNHtKss3MDJQ9%2BDArArwW1jKuQ9DISFbzUS9Lh%2Fj4E87dKq6yyuJykrTKNGi91UDZ7I64d%2FbHCKtmQ%2Bvyg%2FsGk3kVSAD%2F260dvZ2C1gqoB2iFL71lzEiGQ95JWqc16UwL%2B%2BkOk7g0OHMeIswwpOrPzfWP9HLjMwOlEA3IRx%2FTIxSjDHzvW8BjqkAVI%2Bqfl0eHzzm5gwn2zq9RZb5MzCZyYM9%2B8QfmZ9SCn9Rrd3YMnFKYUP3Msk25%2B4NTBq2Y9ISulbSR7bUy9Namia98EG88bm8fzPsV69Ckv%2FQTdnCHBvTMambJGRBkUBjklyzNTNGqc8%2FsY4dTu6oBExtxagZ61jE5zxJSPsyb1rtqBMi9vTIDWhBiqP1lzlwlOG8%2BkbQwIVbT7E4WFmsRT1dYix&X-Amz-Signature=5a6dfa45e7dad3a6e34aae84fa9b641b8042f18605b710befd68b3ff8fe7cde2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDGH4UI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDUUUI5lt7FRskyOEAR32YGv65b7vjnE%2B5mvvNHKdviQIhANE18EhziQpD6NiiBW9ZgLq2zW9TGhIrC4adMQWzzt6gKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQpD3swinXi60xJG4q3AM6Tt4T9aU4KCxEdwSJqHjBFnutBVx2liNSK666CoTVVn7vYmtxrFC6W57RdESCF9fbTSBXFXvUnOcsb%2Fm2Hsm%2FepGIP7iWWPxbp94EsB9Oaz1TmnD%2F4SBux%2Fi%2FvJtLWKtL1htu0EPhHJbOa6FQWfgksXHf7JrOnanFR94EGpQhXKRehbPu3ly6U5yOwR1eeCS%2F7iG6TNVD%2FNAvDfR0KpY273VqtrFTemnhnsPynxlelc3az1ZBC9ZtTFxKO8SN2S4Hji1WevQJe3SPLXratXU67ccxrLPNDTCiyO7sgKA9Uxg90Ah%2FHlWveBKnCEZfxcZZDwQeeMW%2BilEh7IK9misRez9BmvqL4f6Zt3bS69mfadnbNuMWFfpTxDxo8zsErrLSqPYFwsVvlFnySOOC8QVUUNWN0WKWkRk7k0YsoR%2BnROPF%2Fp5hDNW9VMCXY3eJ%2B4H%2B1CpkwO%2BatSiqSVNHtKss3MDJQ9%2BDArArwW1jKuQ9DISFbzUS9Lh%2Fj4E87dKq6yyuJykrTKNGi91UDZ7I64d%2FbHCKtmQ%2Bvyg%2FsGk3kVSAD%2F260dvZ2C1gqoB2iFL71lzEiGQ95JWqc16UwL%2B%2BkOk7g0OHMeIswwpOrPzfWP9HLjMwOlEA3IRx%2FTIxSjDHzvW8BjqkAVI%2Bqfl0eHzzm5gwn2zq9RZb5MzCZyYM9%2B8QfmZ9SCn9Rrd3YMnFKYUP3Msk25%2B4NTBq2Y9ISulbSR7bUy9Namia98EG88bm8fzPsV69Ckv%2FQTdnCHBvTMambJGRBkUBjklyzNTNGqc8%2FsY4dTu6oBExtxagZ61jE5zxJSPsyb1rtqBMi9vTIDWhBiqP1lzlwlOG8%2BkbQwIVbT7E4WFmsRT1dYix&X-Amz-Signature=78f226e06549e41e90e236db38c4c8ee125d384d00114a9e6de38a45d33cac29&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDGH4UI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDUUUI5lt7FRskyOEAR32YGv65b7vjnE%2B5mvvNHKdviQIhANE18EhziQpD6NiiBW9ZgLq2zW9TGhIrC4adMQWzzt6gKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQpD3swinXi60xJG4q3AM6Tt4T9aU4KCxEdwSJqHjBFnutBVx2liNSK666CoTVVn7vYmtxrFC6W57RdESCF9fbTSBXFXvUnOcsb%2Fm2Hsm%2FepGIP7iWWPxbp94EsB9Oaz1TmnD%2F4SBux%2Fi%2FvJtLWKtL1htu0EPhHJbOa6FQWfgksXHf7JrOnanFR94EGpQhXKRehbPu3ly6U5yOwR1eeCS%2F7iG6TNVD%2FNAvDfR0KpY273VqtrFTemnhnsPynxlelc3az1ZBC9ZtTFxKO8SN2S4Hji1WevQJe3SPLXratXU67ccxrLPNDTCiyO7sgKA9Uxg90Ah%2FHlWveBKnCEZfxcZZDwQeeMW%2BilEh7IK9misRez9BmvqL4f6Zt3bS69mfadnbNuMWFfpTxDxo8zsErrLSqPYFwsVvlFnySOOC8QVUUNWN0WKWkRk7k0YsoR%2BnROPF%2Fp5hDNW9VMCXY3eJ%2B4H%2B1CpkwO%2BatSiqSVNHtKss3MDJQ9%2BDArArwW1jKuQ9DISFbzUS9Lh%2Fj4E87dKq6yyuJykrTKNGi91UDZ7I64d%2FbHCKtmQ%2Bvyg%2FsGk3kVSAD%2F260dvZ2C1gqoB2iFL71lzEiGQ95JWqc16UwL%2B%2BkOk7g0OHMeIswwpOrPzfWP9HLjMwOlEA3IRx%2FTIxSjDHzvW8BjqkAVI%2Bqfl0eHzzm5gwn2zq9RZb5MzCZyYM9%2B8QfmZ9SCn9Rrd3YMnFKYUP3Msk25%2B4NTBq2Y9ISulbSR7bUy9Namia98EG88bm8fzPsV69Ckv%2FQTdnCHBvTMambJGRBkUBjklyzNTNGqc8%2FsY4dTu6oBExtxagZ61jE5zxJSPsyb1rtqBMi9vTIDWhBiqP1lzlwlOG8%2BkbQwIVbT7E4WFmsRT1dYix&X-Amz-Signature=61c72def2f2d077e50c7aef9b33884f1f9a8b75a5c1287301353d671854e6765&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDGH4UI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDUUUI5lt7FRskyOEAR32YGv65b7vjnE%2B5mvvNHKdviQIhANE18EhziQpD6NiiBW9ZgLq2zW9TGhIrC4adMQWzzt6gKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQpD3swinXi60xJG4q3AM6Tt4T9aU4KCxEdwSJqHjBFnutBVx2liNSK666CoTVVn7vYmtxrFC6W57RdESCF9fbTSBXFXvUnOcsb%2Fm2Hsm%2FepGIP7iWWPxbp94EsB9Oaz1TmnD%2F4SBux%2Fi%2FvJtLWKtL1htu0EPhHJbOa6FQWfgksXHf7JrOnanFR94EGpQhXKRehbPu3ly6U5yOwR1eeCS%2F7iG6TNVD%2FNAvDfR0KpY273VqtrFTemnhnsPynxlelc3az1ZBC9ZtTFxKO8SN2S4Hji1WevQJe3SPLXratXU67ccxrLPNDTCiyO7sgKA9Uxg90Ah%2FHlWveBKnCEZfxcZZDwQeeMW%2BilEh7IK9misRez9BmvqL4f6Zt3bS69mfadnbNuMWFfpTxDxo8zsErrLSqPYFwsVvlFnySOOC8QVUUNWN0WKWkRk7k0YsoR%2BnROPF%2Fp5hDNW9VMCXY3eJ%2B4H%2B1CpkwO%2BatSiqSVNHtKss3MDJQ9%2BDArArwW1jKuQ9DISFbzUS9Lh%2Fj4E87dKq6yyuJykrTKNGi91UDZ7I64d%2FbHCKtmQ%2Bvyg%2FsGk3kVSAD%2F260dvZ2C1gqoB2iFL71lzEiGQ95JWqc16UwL%2B%2BkOk7g0OHMeIswwpOrPzfWP9HLjMwOlEA3IRx%2FTIxSjDHzvW8BjqkAVI%2Bqfl0eHzzm5gwn2zq9RZb5MzCZyYM9%2B8QfmZ9SCn9Rrd3YMnFKYUP3Msk25%2B4NTBq2Y9ISulbSR7bUy9Namia98EG88bm8fzPsV69Ckv%2FQTdnCHBvTMambJGRBkUBjklyzNTNGqc8%2FsY4dTu6oBExtxagZ61jE5zxJSPsyb1rtqBMi9vTIDWhBiqP1lzlwlOG8%2BkbQwIVbT7E4WFmsRT1dYix&X-Amz-Signature=f4a33e9f001b6200c26d0f733114473384f56e94abf810233a9a5395db248c46&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDGH4UI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDUUUI5lt7FRskyOEAR32YGv65b7vjnE%2B5mvvNHKdviQIhANE18EhziQpD6NiiBW9ZgLq2zW9TGhIrC4adMQWzzt6gKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQpD3swinXi60xJG4q3AM6Tt4T9aU4KCxEdwSJqHjBFnutBVx2liNSK666CoTVVn7vYmtxrFC6W57RdESCF9fbTSBXFXvUnOcsb%2Fm2Hsm%2FepGIP7iWWPxbp94EsB9Oaz1TmnD%2F4SBux%2Fi%2FvJtLWKtL1htu0EPhHJbOa6FQWfgksXHf7JrOnanFR94EGpQhXKRehbPu3ly6U5yOwR1eeCS%2F7iG6TNVD%2FNAvDfR0KpY273VqtrFTemnhnsPynxlelc3az1ZBC9ZtTFxKO8SN2S4Hji1WevQJe3SPLXratXU67ccxrLPNDTCiyO7sgKA9Uxg90Ah%2FHlWveBKnCEZfxcZZDwQeeMW%2BilEh7IK9misRez9BmvqL4f6Zt3bS69mfadnbNuMWFfpTxDxo8zsErrLSqPYFwsVvlFnySOOC8QVUUNWN0WKWkRk7k0YsoR%2BnROPF%2Fp5hDNW9VMCXY3eJ%2B4H%2B1CpkwO%2BatSiqSVNHtKss3MDJQ9%2BDArArwW1jKuQ9DISFbzUS9Lh%2Fj4E87dKq6yyuJykrTKNGi91UDZ7I64d%2FbHCKtmQ%2Bvyg%2FsGk3kVSAD%2F260dvZ2C1gqoB2iFL71lzEiGQ95JWqc16UwL%2B%2BkOk7g0OHMeIswwpOrPzfWP9HLjMwOlEA3IRx%2FTIxSjDHzvW8BjqkAVI%2Bqfl0eHzzm5gwn2zq9RZb5MzCZyYM9%2B8QfmZ9SCn9Rrd3YMnFKYUP3Msk25%2B4NTBq2Y9ISulbSR7bUy9Namia98EG88bm8fzPsV69Ckv%2FQTdnCHBvTMambJGRBkUBjklyzNTNGqc8%2FsY4dTu6oBExtxagZ61jE5zxJSPsyb1rtqBMi9vTIDWhBiqP1lzlwlOG8%2BkbQwIVbT7E4WFmsRT1dYix&X-Amz-Signature=45153a886d45248db9b08291e02a8c651f828c5d452ff5cbc75ce08f143d1d55&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
