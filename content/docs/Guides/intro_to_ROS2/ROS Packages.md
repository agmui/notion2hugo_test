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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3X5QHA2%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYZ%2FO25m2tZW9QhfxbLrQPS8CMM8%2F4v9M8%2Fk1k3bq56AiEAt1GNbhrxcECnv%2FZQqSJwKsPTY7TIEW%2Fnn%2BWYUj70GpQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIPrtZEWrg1JAcZAyrcA9gvUKxkx%2FX1FKpngwY%2BTLwI36wuAkSTmYOS%2F22egKDe4on6jrvqDd2pxdtriNFXx3ETYPDgPp28Rs5vHctm9Ntu4pnsYsHFeZNM1e3UiuLHvnRya8mSbmrgpkHXmNp5STxtgh1FxJ6OWdoKYMhCuar0%2BaSS78ZKmSAb6Mh2pr2KJsUD2JzHQZCIlMCMMOVKH7Abe48sL%2FEBaF21YuEuLlVfX2aDEk5xj2SG%2FpGr5KpGNqcQEJ14NS%2FVC%2BATeLnI2%2FRkK4WwcqVUUiClP6E%2BTrDoIaTlJ31Dh75Ph5cqId0z8vYSN4TGQ78FgcyusxjUgTVqraE7sX7meEj2SAsu%2Bvg6UxDaNutflH8YVEnsZqgjHPgu%2FiwZHSSC0L9Is5Ze1z3n%2FW6qELbK25PAM%2B1C%2Bp7kFRSWQDsMMnbj4OSs1S8IU46K5nMU%2FOPdyxYm8oxOnba3Cq95qXv8miXonlTDavN3l%2BL8VH1gpzYaExBHEK8I%2F1xM6CxJrpxt%2FsiLkACD3U5ofvoIzxCxqhaTskVowcKBmimKzVjCB9yTXnuo1xP65UipkdB71lRZ%2FDy1HSBPZRBopvvr6IyJaWpIaDwywel6CeMfGqxPaKWqcHnOiBZPRk%2FKbwoWMtZ8ohS%2BMPDctcsGOqUBuCiPNbn1aJEDscBkJNWc%2BNfkPodT9A0UGaW59kwzerNidsXk41WZ03SH7dU30pn5YczsKZRDq7ea1BPxZbFKub3mQhYh3N3qTP3AN9UUtfcSrM5ybf1h%2Bul1FogZ97xMkVeyXMIF1G7PQ6J90KTxt9ZGQ6kLxU8wGALtxaLuQkZTAeq2DRL7FnVxGanJ9DOlv9d3kxBs4mP1GZALzzpOJz5eViz8&X-Amz-Signature=00b6001954f02b14fdc6db885b1f5c8a87f7cabd177c453a58a2618065409df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3X5QHA2%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYZ%2FO25m2tZW9QhfxbLrQPS8CMM8%2F4v9M8%2Fk1k3bq56AiEAt1GNbhrxcECnv%2FZQqSJwKsPTY7TIEW%2Fnn%2BWYUj70GpQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIPrtZEWrg1JAcZAyrcA9gvUKxkx%2FX1FKpngwY%2BTLwI36wuAkSTmYOS%2F22egKDe4on6jrvqDd2pxdtriNFXx3ETYPDgPp28Rs5vHctm9Ntu4pnsYsHFeZNM1e3UiuLHvnRya8mSbmrgpkHXmNp5STxtgh1FxJ6OWdoKYMhCuar0%2BaSS78ZKmSAb6Mh2pr2KJsUD2JzHQZCIlMCMMOVKH7Abe48sL%2FEBaF21YuEuLlVfX2aDEk5xj2SG%2FpGr5KpGNqcQEJ14NS%2FVC%2BATeLnI2%2FRkK4WwcqVUUiClP6E%2BTrDoIaTlJ31Dh75Ph5cqId0z8vYSN4TGQ78FgcyusxjUgTVqraE7sX7meEj2SAsu%2Bvg6UxDaNutflH8YVEnsZqgjHPgu%2FiwZHSSC0L9Is5Ze1z3n%2FW6qELbK25PAM%2B1C%2Bp7kFRSWQDsMMnbj4OSs1S8IU46K5nMU%2FOPdyxYm8oxOnba3Cq95qXv8miXonlTDavN3l%2BL8VH1gpzYaExBHEK8I%2F1xM6CxJrpxt%2FsiLkACD3U5ofvoIzxCxqhaTskVowcKBmimKzVjCB9yTXnuo1xP65UipkdB71lRZ%2FDy1HSBPZRBopvvr6IyJaWpIaDwywel6CeMfGqxPaKWqcHnOiBZPRk%2FKbwoWMtZ8ohS%2BMPDctcsGOqUBuCiPNbn1aJEDscBkJNWc%2BNfkPodT9A0UGaW59kwzerNidsXk41WZ03SH7dU30pn5YczsKZRDq7ea1BPxZbFKub3mQhYh3N3qTP3AN9UUtfcSrM5ybf1h%2Bul1FogZ97xMkVeyXMIF1G7PQ6J90KTxt9ZGQ6kLxU8wGALtxaLuQkZTAeq2DRL7FnVxGanJ9DOlv9d3kxBs4mP1GZALzzpOJz5eViz8&X-Amz-Signature=0105234f7d67da729b5e1edd3bb0159134e35a24b458509012afd3e795045375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3X5QHA2%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYZ%2FO25m2tZW9QhfxbLrQPS8CMM8%2F4v9M8%2Fk1k3bq56AiEAt1GNbhrxcECnv%2FZQqSJwKsPTY7TIEW%2Fnn%2BWYUj70GpQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIPrtZEWrg1JAcZAyrcA9gvUKxkx%2FX1FKpngwY%2BTLwI36wuAkSTmYOS%2F22egKDe4on6jrvqDd2pxdtriNFXx3ETYPDgPp28Rs5vHctm9Ntu4pnsYsHFeZNM1e3UiuLHvnRya8mSbmrgpkHXmNp5STxtgh1FxJ6OWdoKYMhCuar0%2BaSS78ZKmSAb6Mh2pr2KJsUD2JzHQZCIlMCMMOVKH7Abe48sL%2FEBaF21YuEuLlVfX2aDEk5xj2SG%2FpGr5KpGNqcQEJ14NS%2FVC%2BATeLnI2%2FRkK4WwcqVUUiClP6E%2BTrDoIaTlJ31Dh75Ph5cqId0z8vYSN4TGQ78FgcyusxjUgTVqraE7sX7meEj2SAsu%2Bvg6UxDaNutflH8YVEnsZqgjHPgu%2FiwZHSSC0L9Is5Ze1z3n%2FW6qELbK25PAM%2B1C%2Bp7kFRSWQDsMMnbj4OSs1S8IU46K5nMU%2FOPdyxYm8oxOnba3Cq95qXv8miXonlTDavN3l%2BL8VH1gpzYaExBHEK8I%2F1xM6CxJrpxt%2FsiLkACD3U5ofvoIzxCxqhaTskVowcKBmimKzVjCB9yTXnuo1xP65UipkdB71lRZ%2FDy1HSBPZRBopvvr6IyJaWpIaDwywel6CeMfGqxPaKWqcHnOiBZPRk%2FKbwoWMtZ8ohS%2BMPDctcsGOqUBuCiPNbn1aJEDscBkJNWc%2BNfkPodT9A0UGaW59kwzerNidsXk41WZ03SH7dU30pn5YczsKZRDq7ea1BPxZbFKub3mQhYh3N3qTP3AN9UUtfcSrM5ybf1h%2Bul1FogZ97xMkVeyXMIF1G7PQ6J90KTxt9ZGQ6kLxU8wGALtxaLuQkZTAeq2DRL7FnVxGanJ9DOlv9d3kxBs4mP1GZALzzpOJz5eViz8&X-Amz-Signature=0eba4318bd352b364270ac3296d884b1f5497657faa259a51520b35fa9067299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3X5QHA2%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYZ%2FO25m2tZW9QhfxbLrQPS8CMM8%2F4v9M8%2Fk1k3bq56AiEAt1GNbhrxcECnv%2FZQqSJwKsPTY7TIEW%2Fnn%2BWYUj70GpQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIPrtZEWrg1JAcZAyrcA9gvUKxkx%2FX1FKpngwY%2BTLwI36wuAkSTmYOS%2F22egKDe4on6jrvqDd2pxdtriNFXx3ETYPDgPp28Rs5vHctm9Ntu4pnsYsHFeZNM1e3UiuLHvnRya8mSbmrgpkHXmNp5STxtgh1FxJ6OWdoKYMhCuar0%2BaSS78ZKmSAb6Mh2pr2KJsUD2JzHQZCIlMCMMOVKH7Abe48sL%2FEBaF21YuEuLlVfX2aDEk5xj2SG%2FpGr5KpGNqcQEJ14NS%2FVC%2BATeLnI2%2FRkK4WwcqVUUiClP6E%2BTrDoIaTlJ31Dh75Ph5cqId0z8vYSN4TGQ78FgcyusxjUgTVqraE7sX7meEj2SAsu%2Bvg6UxDaNutflH8YVEnsZqgjHPgu%2FiwZHSSC0L9Is5Ze1z3n%2FW6qELbK25PAM%2B1C%2Bp7kFRSWQDsMMnbj4OSs1S8IU46K5nMU%2FOPdyxYm8oxOnba3Cq95qXv8miXonlTDavN3l%2BL8VH1gpzYaExBHEK8I%2F1xM6CxJrpxt%2FsiLkACD3U5ofvoIzxCxqhaTskVowcKBmimKzVjCB9yTXnuo1xP65UipkdB71lRZ%2FDy1HSBPZRBopvvr6IyJaWpIaDwywel6CeMfGqxPaKWqcHnOiBZPRk%2FKbwoWMtZ8ohS%2BMPDctcsGOqUBuCiPNbn1aJEDscBkJNWc%2BNfkPodT9A0UGaW59kwzerNidsXk41WZ03SH7dU30pn5YczsKZRDq7ea1BPxZbFKub3mQhYh3N3qTP3AN9UUtfcSrM5ybf1h%2Bul1FogZ97xMkVeyXMIF1G7PQ6J90KTxt9ZGQ6kLxU8wGALtxaLuQkZTAeq2DRL7FnVxGanJ9DOlv9d3kxBs4mP1GZALzzpOJz5eViz8&X-Amz-Signature=9dba5511a7a636a25f948043de4aa348c77b02e1ea8e6205709573382d610545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3X5QHA2%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYZ%2FO25m2tZW9QhfxbLrQPS8CMM8%2F4v9M8%2Fk1k3bq56AiEAt1GNbhrxcECnv%2FZQqSJwKsPTY7TIEW%2Fnn%2BWYUj70GpQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIPrtZEWrg1JAcZAyrcA9gvUKxkx%2FX1FKpngwY%2BTLwI36wuAkSTmYOS%2F22egKDe4on6jrvqDd2pxdtriNFXx3ETYPDgPp28Rs5vHctm9Ntu4pnsYsHFeZNM1e3UiuLHvnRya8mSbmrgpkHXmNp5STxtgh1FxJ6OWdoKYMhCuar0%2BaSS78ZKmSAb6Mh2pr2KJsUD2JzHQZCIlMCMMOVKH7Abe48sL%2FEBaF21YuEuLlVfX2aDEk5xj2SG%2FpGr5KpGNqcQEJ14NS%2FVC%2BATeLnI2%2FRkK4WwcqVUUiClP6E%2BTrDoIaTlJ31Dh75Ph5cqId0z8vYSN4TGQ78FgcyusxjUgTVqraE7sX7meEj2SAsu%2Bvg6UxDaNutflH8YVEnsZqgjHPgu%2FiwZHSSC0L9Is5Ze1z3n%2FW6qELbK25PAM%2B1C%2Bp7kFRSWQDsMMnbj4OSs1S8IU46K5nMU%2FOPdyxYm8oxOnba3Cq95qXv8miXonlTDavN3l%2BL8VH1gpzYaExBHEK8I%2F1xM6CxJrpxt%2FsiLkACD3U5ofvoIzxCxqhaTskVowcKBmimKzVjCB9yTXnuo1xP65UipkdB71lRZ%2FDy1HSBPZRBopvvr6IyJaWpIaDwywel6CeMfGqxPaKWqcHnOiBZPRk%2FKbwoWMtZ8ohS%2BMPDctcsGOqUBuCiPNbn1aJEDscBkJNWc%2BNfkPodT9A0UGaW59kwzerNidsXk41WZ03SH7dU30pn5YczsKZRDq7ea1BPxZbFKub3mQhYh3N3qTP3AN9UUtfcSrM5ybf1h%2Bul1FogZ97xMkVeyXMIF1G7PQ6J90KTxt9ZGQ6kLxU8wGALtxaLuQkZTAeq2DRL7FnVxGanJ9DOlv9d3kxBs4mP1GZALzzpOJz5eViz8&X-Amz-Signature=725799f6bbf60574842cd67cdca5b8793904bc4c99a733e31935c1509117554e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3X5QHA2%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYZ%2FO25m2tZW9QhfxbLrQPS8CMM8%2F4v9M8%2Fk1k3bq56AiEAt1GNbhrxcECnv%2FZQqSJwKsPTY7TIEW%2Fnn%2BWYUj70GpQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIPrtZEWrg1JAcZAyrcA9gvUKxkx%2FX1FKpngwY%2BTLwI36wuAkSTmYOS%2F22egKDe4on6jrvqDd2pxdtriNFXx3ETYPDgPp28Rs5vHctm9Ntu4pnsYsHFeZNM1e3UiuLHvnRya8mSbmrgpkHXmNp5STxtgh1FxJ6OWdoKYMhCuar0%2BaSS78ZKmSAb6Mh2pr2KJsUD2JzHQZCIlMCMMOVKH7Abe48sL%2FEBaF21YuEuLlVfX2aDEk5xj2SG%2FpGr5KpGNqcQEJ14NS%2FVC%2BATeLnI2%2FRkK4WwcqVUUiClP6E%2BTrDoIaTlJ31Dh75Ph5cqId0z8vYSN4TGQ78FgcyusxjUgTVqraE7sX7meEj2SAsu%2Bvg6UxDaNutflH8YVEnsZqgjHPgu%2FiwZHSSC0L9Is5Ze1z3n%2FW6qELbK25PAM%2B1C%2Bp7kFRSWQDsMMnbj4OSs1S8IU46K5nMU%2FOPdyxYm8oxOnba3Cq95qXv8miXonlTDavN3l%2BL8VH1gpzYaExBHEK8I%2F1xM6CxJrpxt%2FsiLkACD3U5ofvoIzxCxqhaTskVowcKBmimKzVjCB9yTXnuo1xP65UipkdB71lRZ%2FDy1HSBPZRBopvvr6IyJaWpIaDwywel6CeMfGqxPaKWqcHnOiBZPRk%2FKbwoWMtZ8ohS%2BMPDctcsGOqUBuCiPNbn1aJEDscBkJNWc%2BNfkPodT9A0UGaW59kwzerNidsXk41WZ03SH7dU30pn5YczsKZRDq7ea1BPxZbFKub3mQhYh3N3qTP3AN9UUtfcSrM5ybf1h%2Bul1FogZ97xMkVeyXMIF1G7PQ6J90KTxt9ZGQ6kLxU8wGALtxaLuQkZTAeq2DRL7FnVxGanJ9DOlv9d3kxBs4mP1GZALzzpOJz5eViz8&X-Amz-Signature=78402ce7934c08da4705b0f629e35abef3bdeec897259a2204bbfade2132dd64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3X5QHA2%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYZ%2FO25m2tZW9QhfxbLrQPS8CMM8%2F4v9M8%2Fk1k3bq56AiEAt1GNbhrxcECnv%2FZQqSJwKsPTY7TIEW%2Fnn%2BWYUj70GpQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIPrtZEWrg1JAcZAyrcA9gvUKxkx%2FX1FKpngwY%2BTLwI36wuAkSTmYOS%2F22egKDe4on6jrvqDd2pxdtriNFXx3ETYPDgPp28Rs5vHctm9Ntu4pnsYsHFeZNM1e3UiuLHvnRya8mSbmrgpkHXmNp5STxtgh1FxJ6OWdoKYMhCuar0%2BaSS78ZKmSAb6Mh2pr2KJsUD2JzHQZCIlMCMMOVKH7Abe48sL%2FEBaF21YuEuLlVfX2aDEk5xj2SG%2FpGr5KpGNqcQEJ14NS%2FVC%2BATeLnI2%2FRkK4WwcqVUUiClP6E%2BTrDoIaTlJ31Dh75Ph5cqId0z8vYSN4TGQ78FgcyusxjUgTVqraE7sX7meEj2SAsu%2Bvg6UxDaNutflH8YVEnsZqgjHPgu%2FiwZHSSC0L9Is5Ze1z3n%2FW6qELbK25PAM%2B1C%2Bp7kFRSWQDsMMnbj4OSs1S8IU46K5nMU%2FOPdyxYm8oxOnba3Cq95qXv8miXonlTDavN3l%2BL8VH1gpzYaExBHEK8I%2F1xM6CxJrpxt%2FsiLkACD3U5ofvoIzxCxqhaTskVowcKBmimKzVjCB9yTXnuo1xP65UipkdB71lRZ%2FDy1HSBPZRBopvvr6IyJaWpIaDwywel6CeMfGqxPaKWqcHnOiBZPRk%2FKbwoWMtZ8ohS%2BMPDctcsGOqUBuCiPNbn1aJEDscBkJNWc%2BNfkPodT9A0UGaW59kwzerNidsXk41WZ03SH7dU30pn5YczsKZRDq7ea1BPxZbFKub3mQhYh3N3qTP3AN9UUtfcSrM5ybf1h%2Bul1FogZ97xMkVeyXMIF1G7PQ6J90KTxt9ZGQ6kLxU8wGALtxaLuQkZTAeq2DRL7FnVxGanJ9DOlv9d3kxBs4mP1GZALzzpOJz5eViz8&X-Amz-Signature=dbdc5ab64133690c8c4808fd864bd0b1d261a64381d517edbaa009202430446f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
