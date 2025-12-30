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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCBNPTW%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXDBETX9VSktBeIUtH0YffFIMPhBaZby9A0WmcABRidgIhAJMyax6intMwUxbmfCMrbKtU2bNXNtasmN9AUxGaAzhdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP2HnbrLQ34letmwIq3ANTV3RlmJjO2MaL1MM%2FP7AlBQUJiEa1MNNmgCoSgamIv7hBMarIqgStJAo0oPrLi7xeoYJm6UIwx%2BhgHdfBFmPKL1qqU2hNEeUVxGPTP%2FptrIQFi2oxOz51IhM4jI%2Frg5BeC49a%2FcCQB9SBClIOUyw5CjxQKBl2fL9zQgB4ABoaOIH1dLRLIK8ud2ei0fcFalbY0Z22HxuNFvrxDOlMF5lzRuVWRxR2jHQbpA5wqtpoxQX2h8R3VNRBMnYsQKIcxor0ct%2B9Cfc%2Bm%2BxCMyant7R2GO9%2BpK9aFU8%2FBi06OF8WG1swoOn0nZGmLDzG0KeLU8UU807rrYZ45jBXnTBxzhoMbUxzY%2BwZEtFbIakpE8nQ6lWsOwWi9iCY%2F9FMg3h9FlLq%2Bfxxh6KvrCnXuPjVieSWcqwGXIGC2u7fb8uv7yumVKjStu9E4IxtOel%2FVISsdp5o%2BQ%2FK6b1WjNltSCU8M9YjnXG7xzgCtE7rtQo%2B74KTKP33uvyw2ffBZ4H9BynoKW9pcvAOGVx%2FLVc8nRs1gHdXVWbaFJWTTVsTloBs2zd9wm3SZf3xIQA9pOCAUcw7%2FXBkYfVzpsQfRsXJ%2BMGUpDfI3Y12UMe6JgZtg%2F2L7ib8lo8WvTtCRAzwz0ExZTCU2czKBjqkAbI0x9AO8ZR04AYAWGXXViB9te0Ok0LwNgPrYjSo4qn0nfI1CsFqVJlwOam4bNKcbUvMHGV1cWQLsvnTOkDAWIkUaVqSgTmVeO7eV22XMjHnX3KQ2GXgXqfyAt5FRNtQz6DhFv8TV%2BLFgWBVYyXayEHmg0ohN6bk1F8030VB8t1xNUXDfo5pdqt9QoWb0lYLG2irEt%2FmP6iC1U%2FmTGLtBWqOHutR&X-Amz-Signature=784542b8d65f1081af4540c06846d3ac414de4138eea6e60efd14247fa3384e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCBNPTW%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXDBETX9VSktBeIUtH0YffFIMPhBaZby9A0WmcABRidgIhAJMyax6intMwUxbmfCMrbKtU2bNXNtasmN9AUxGaAzhdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP2HnbrLQ34letmwIq3ANTV3RlmJjO2MaL1MM%2FP7AlBQUJiEa1MNNmgCoSgamIv7hBMarIqgStJAo0oPrLi7xeoYJm6UIwx%2BhgHdfBFmPKL1qqU2hNEeUVxGPTP%2FptrIQFi2oxOz51IhM4jI%2Frg5BeC49a%2FcCQB9SBClIOUyw5CjxQKBl2fL9zQgB4ABoaOIH1dLRLIK8ud2ei0fcFalbY0Z22HxuNFvrxDOlMF5lzRuVWRxR2jHQbpA5wqtpoxQX2h8R3VNRBMnYsQKIcxor0ct%2B9Cfc%2Bm%2BxCMyant7R2GO9%2BpK9aFU8%2FBi06OF8WG1swoOn0nZGmLDzG0KeLU8UU807rrYZ45jBXnTBxzhoMbUxzY%2BwZEtFbIakpE8nQ6lWsOwWi9iCY%2F9FMg3h9FlLq%2Bfxxh6KvrCnXuPjVieSWcqwGXIGC2u7fb8uv7yumVKjStu9E4IxtOel%2FVISsdp5o%2BQ%2FK6b1WjNltSCU8M9YjnXG7xzgCtE7rtQo%2B74KTKP33uvyw2ffBZ4H9BynoKW9pcvAOGVx%2FLVc8nRs1gHdXVWbaFJWTTVsTloBs2zd9wm3SZf3xIQA9pOCAUcw7%2FXBkYfVzpsQfRsXJ%2BMGUpDfI3Y12UMe6JgZtg%2F2L7ib8lo8WvTtCRAzwz0ExZTCU2czKBjqkAbI0x9AO8ZR04AYAWGXXViB9te0Ok0LwNgPrYjSo4qn0nfI1CsFqVJlwOam4bNKcbUvMHGV1cWQLsvnTOkDAWIkUaVqSgTmVeO7eV22XMjHnX3KQ2GXgXqfyAt5FRNtQz6DhFv8TV%2BLFgWBVYyXayEHmg0ohN6bk1F8030VB8t1xNUXDfo5pdqt9QoWb0lYLG2irEt%2FmP6iC1U%2FmTGLtBWqOHutR&X-Amz-Signature=d3dcf2cdf09bd114ca44e97421184e7405080dfb778d374663688964dac5db30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCBNPTW%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXDBETX9VSktBeIUtH0YffFIMPhBaZby9A0WmcABRidgIhAJMyax6intMwUxbmfCMrbKtU2bNXNtasmN9AUxGaAzhdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP2HnbrLQ34letmwIq3ANTV3RlmJjO2MaL1MM%2FP7AlBQUJiEa1MNNmgCoSgamIv7hBMarIqgStJAo0oPrLi7xeoYJm6UIwx%2BhgHdfBFmPKL1qqU2hNEeUVxGPTP%2FptrIQFi2oxOz51IhM4jI%2Frg5BeC49a%2FcCQB9SBClIOUyw5CjxQKBl2fL9zQgB4ABoaOIH1dLRLIK8ud2ei0fcFalbY0Z22HxuNFvrxDOlMF5lzRuVWRxR2jHQbpA5wqtpoxQX2h8R3VNRBMnYsQKIcxor0ct%2B9Cfc%2Bm%2BxCMyant7R2GO9%2BpK9aFU8%2FBi06OF8WG1swoOn0nZGmLDzG0KeLU8UU807rrYZ45jBXnTBxzhoMbUxzY%2BwZEtFbIakpE8nQ6lWsOwWi9iCY%2F9FMg3h9FlLq%2Bfxxh6KvrCnXuPjVieSWcqwGXIGC2u7fb8uv7yumVKjStu9E4IxtOel%2FVISsdp5o%2BQ%2FK6b1WjNltSCU8M9YjnXG7xzgCtE7rtQo%2B74KTKP33uvyw2ffBZ4H9BynoKW9pcvAOGVx%2FLVc8nRs1gHdXVWbaFJWTTVsTloBs2zd9wm3SZf3xIQA9pOCAUcw7%2FXBkYfVzpsQfRsXJ%2BMGUpDfI3Y12UMe6JgZtg%2F2L7ib8lo8WvTtCRAzwz0ExZTCU2czKBjqkAbI0x9AO8ZR04AYAWGXXViB9te0Ok0LwNgPrYjSo4qn0nfI1CsFqVJlwOam4bNKcbUvMHGV1cWQLsvnTOkDAWIkUaVqSgTmVeO7eV22XMjHnX3KQ2GXgXqfyAt5FRNtQz6DhFv8TV%2BLFgWBVYyXayEHmg0ohN6bk1F8030VB8t1xNUXDfo5pdqt9QoWb0lYLG2irEt%2FmP6iC1U%2FmTGLtBWqOHutR&X-Amz-Signature=8192999ccfba9a8af4b3d1d33bd816a8444842b60231b36f23c48dc1c4c8f78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCBNPTW%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXDBETX9VSktBeIUtH0YffFIMPhBaZby9A0WmcABRidgIhAJMyax6intMwUxbmfCMrbKtU2bNXNtasmN9AUxGaAzhdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP2HnbrLQ34letmwIq3ANTV3RlmJjO2MaL1MM%2FP7AlBQUJiEa1MNNmgCoSgamIv7hBMarIqgStJAo0oPrLi7xeoYJm6UIwx%2BhgHdfBFmPKL1qqU2hNEeUVxGPTP%2FptrIQFi2oxOz51IhM4jI%2Frg5BeC49a%2FcCQB9SBClIOUyw5CjxQKBl2fL9zQgB4ABoaOIH1dLRLIK8ud2ei0fcFalbY0Z22HxuNFvrxDOlMF5lzRuVWRxR2jHQbpA5wqtpoxQX2h8R3VNRBMnYsQKIcxor0ct%2B9Cfc%2Bm%2BxCMyant7R2GO9%2BpK9aFU8%2FBi06OF8WG1swoOn0nZGmLDzG0KeLU8UU807rrYZ45jBXnTBxzhoMbUxzY%2BwZEtFbIakpE8nQ6lWsOwWi9iCY%2F9FMg3h9FlLq%2Bfxxh6KvrCnXuPjVieSWcqwGXIGC2u7fb8uv7yumVKjStu9E4IxtOel%2FVISsdp5o%2BQ%2FK6b1WjNltSCU8M9YjnXG7xzgCtE7rtQo%2B74KTKP33uvyw2ffBZ4H9BynoKW9pcvAOGVx%2FLVc8nRs1gHdXVWbaFJWTTVsTloBs2zd9wm3SZf3xIQA9pOCAUcw7%2FXBkYfVzpsQfRsXJ%2BMGUpDfI3Y12UMe6JgZtg%2F2L7ib8lo8WvTtCRAzwz0ExZTCU2czKBjqkAbI0x9AO8ZR04AYAWGXXViB9te0Ok0LwNgPrYjSo4qn0nfI1CsFqVJlwOam4bNKcbUvMHGV1cWQLsvnTOkDAWIkUaVqSgTmVeO7eV22XMjHnX3KQ2GXgXqfyAt5FRNtQz6DhFv8TV%2BLFgWBVYyXayEHmg0ohN6bk1F8030VB8t1xNUXDfo5pdqt9QoWb0lYLG2irEt%2FmP6iC1U%2FmTGLtBWqOHutR&X-Amz-Signature=d082da73ebc314bb821039b2c3a8ea3c622bdb7d1c617454f34f1071007d8414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCBNPTW%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXDBETX9VSktBeIUtH0YffFIMPhBaZby9A0WmcABRidgIhAJMyax6intMwUxbmfCMrbKtU2bNXNtasmN9AUxGaAzhdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP2HnbrLQ34letmwIq3ANTV3RlmJjO2MaL1MM%2FP7AlBQUJiEa1MNNmgCoSgamIv7hBMarIqgStJAo0oPrLi7xeoYJm6UIwx%2BhgHdfBFmPKL1qqU2hNEeUVxGPTP%2FptrIQFi2oxOz51IhM4jI%2Frg5BeC49a%2FcCQB9SBClIOUyw5CjxQKBl2fL9zQgB4ABoaOIH1dLRLIK8ud2ei0fcFalbY0Z22HxuNFvrxDOlMF5lzRuVWRxR2jHQbpA5wqtpoxQX2h8R3VNRBMnYsQKIcxor0ct%2B9Cfc%2Bm%2BxCMyant7R2GO9%2BpK9aFU8%2FBi06OF8WG1swoOn0nZGmLDzG0KeLU8UU807rrYZ45jBXnTBxzhoMbUxzY%2BwZEtFbIakpE8nQ6lWsOwWi9iCY%2F9FMg3h9FlLq%2Bfxxh6KvrCnXuPjVieSWcqwGXIGC2u7fb8uv7yumVKjStu9E4IxtOel%2FVISsdp5o%2BQ%2FK6b1WjNltSCU8M9YjnXG7xzgCtE7rtQo%2B74KTKP33uvyw2ffBZ4H9BynoKW9pcvAOGVx%2FLVc8nRs1gHdXVWbaFJWTTVsTloBs2zd9wm3SZf3xIQA9pOCAUcw7%2FXBkYfVzpsQfRsXJ%2BMGUpDfI3Y12UMe6JgZtg%2F2L7ib8lo8WvTtCRAzwz0ExZTCU2czKBjqkAbI0x9AO8ZR04AYAWGXXViB9te0Ok0LwNgPrYjSo4qn0nfI1CsFqVJlwOam4bNKcbUvMHGV1cWQLsvnTOkDAWIkUaVqSgTmVeO7eV22XMjHnX3KQ2GXgXqfyAt5FRNtQz6DhFv8TV%2BLFgWBVYyXayEHmg0ohN6bk1F8030VB8t1xNUXDfo5pdqt9QoWb0lYLG2irEt%2FmP6iC1U%2FmTGLtBWqOHutR&X-Amz-Signature=bc2fb4625a6e5910028eaa3a997460dda68cc4feabadef9552eeb3d2621ff735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCBNPTW%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXDBETX9VSktBeIUtH0YffFIMPhBaZby9A0WmcABRidgIhAJMyax6intMwUxbmfCMrbKtU2bNXNtasmN9AUxGaAzhdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP2HnbrLQ34letmwIq3ANTV3RlmJjO2MaL1MM%2FP7AlBQUJiEa1MNNmgCoSgamIv7hBMarIqgStJAo0oPrLi7xeoYJm6UIwx%2BhgHdfBFmPKL1qqU2hNEeUVxGPTP%2FptrIQFi2oxOz51IhM4jI%2Frg5BeC49a%2FcCQB9SBClIOUyw5CjxQKBl2fL9zQgB4ABoaOIH1dLRLIK8ud2ei0fcFalbY0Z22HxuNFvrxDOlMF5lzRuVWRxR2jHQbpA5wqtpoxQX2h8R3VNRBMnYsQKIcxor0ct%2B9Cfc%2Bm%2BxCMyant7R2GO9%2BpK9aFU8%2FBi06OF8WG1swoOn0nZGmLDzG0KeLU8UU807rrYZ45jBXnTBxzhoMbUxzY%2BwZEtFbIakpE8nQ6lWsOwWi9iCY%2F9FMg3h9FlLq%2Bfxxh6KvrCnXuPjVieSWcqwGXIGC2u7fb8uv7yumVKjStu9E4IxtOel%2FVISsdp5o%2BQ%2FK6b1WjNltSCU8M9YjnXG7xzgCtE7rtQo%2B74KTKP33uvyw2ffBZ4H9BynoKW9pcvAOGVx%2FLVc8nRs1gHdXVWbaFJWTTVsTloBs2zd9wm3SZf3xIQA9pOCAUcw7%2FXBkYfVzpsQfRsXJ%2BMGUpDfI3Y12UMe6JgZtg%2F2L7ib8lo8WvTtCRAzwz0ExZTCU2czKBjqkAbI0x9AO8ZR04AYAWGXXViB9te0Ok0LwNgPrYjSo4qn0nfI1CsFqVJlwOam4bNKcbUvMHGV1cWQLsvnTOkDAWIkUaVqSgTmVeO7eV22XMjHnX3KQ2GXgXqfyAt5FRNtQz6DhFv8TV%2BLFgWBVYyXayEHmg0ohN6bk1F8030VB8t1xNUXDfo5pdqt9QoWb0lYLG2irEt%2FmP6iC1U%2FmTGLtBWqOHutR&X-Amz-Signature=6583e894447e7060cc5bbfd67a473e70ee8e1363296db7407408fe8fe957003a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCBNPTW%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXDBETX9VSktBeIUtH0YffFIMPhBaZby9A0WmcABRidgIhAJMyax6intMwUxbmfCMrbKtU2bNXNtasmN9AUxGaAzhdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP2HnbrLQ34letmwIq3ANTV3RlmJjO2MaL1MM%2FP7AlBQUJiEa1MNNmgCoSgamIv7hBMarIqgStJAo0oPrLi7xeoYJm6UIwx%2BhgHdfBFmPKL1qqU2hNEeUVxGPTP%2FptrIQFi2oxOz51IhM4jI%2Frg5BeC49a%2FcCQB9SBClIOUyw5CjxQKBl2fL9zQgB4ABoaOIH1dLRLIK8ud2ei0fcFalbY0Z22HxuNFvrxDOlMF5lzRuVWRxR2jHQbpA5wqtpoxQX2h8R3VNRBMnYsQKIcxor0ct%2B9Cfc%2Bm%2BxCMyant7R2GO9%2BpK9aFU8%2FBi06OF8WG1swoOn0nZGmLDzG0KeLU8UU807rrYZ45jBXnTBxzhoMbUxzY%2BwZEtFbIakpE8nQ6lWsOwWi9iCY%2F9FMg3h9FlLq%2Bfxxh6KvrCnXuPjVieSWcqwGXIGC2u7fb8uv7yumVKjStu9E4IxtOel%2FVISsdp5o%2BQ%2FK6b1WjNltSCU8M9YjnXG7xzgCtE7rtQo%2B74KTKP33uvyw2ffBZ4H9BynoKW9pcvAOGVx%2FLVc8nRs1gHdXVWbaFJWTTVsTloBs2zd9wm3SZf3xIQA9pOCAUcw7%2FXBkYfVzpsQfRsXJ%2BMGUpDfI3Y12UMe6JgZtg%2F2L7ib8lo8WvTtCRAzwz0ExZTCU2czKBjqkAbI0x9AO8ZR04AYAWGXXViB9te0Ok0LwNgPrYjSo4qn0nfI1CsFqVJlwOam4bNKcbUvMHGV1cWQLsvnTOkDAWIkUaVqSgTmVeO7eV22XMjHnX3KQ2GXgXqfyAt5FRNtQz6DhFv8TV%2BLFgWBVYyXayEHmg0ohN6bk1F8030VB8t1xNUXDfo5pdqt9QoWb0lYLG2irEt%2FmP6iC1U%2FmTGLtBWqOHutR&X-Amz-Signature=5e28a4045796fe1c257cb2a06c3aa447cf167c650592462ad63dabde2847857d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
