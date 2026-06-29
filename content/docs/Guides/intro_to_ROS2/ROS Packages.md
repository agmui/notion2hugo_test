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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTEQGBY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRYBsA%2FvcUi7EplKfmjckEHu04VM7U2qEDgmlBGh9HgIhAOSkElcoe%2FnjVOhxx6E2V62w%2BbMc%2BGGGFy%2FDP2wa%2B1LmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhetfMK%2F148q34qxwq3ANqNF1jjkL9TxyNkpG%2F0ZHEdgCRUEYNysq6v9sL6bfO6PxoqEtfHO7UxsP0IdjQADlfHPf14rhFA4yJlW%2BH7CoME8AGaBDqo8yUd1BVJGZN5RPPf1kXVAVkihNhRRyJO7r%2FQffQVofEFttJqtRp069pW6H5EwCoIV5SKetjJbNKsNqvUQp5R30K4D40qiyEKiurKqtGjsAybpZK96GxDJdchUO83N2ChRDt4awtSVT1Oh4HHLm1eJlGWFV%2BT6aqHB74PPDXjdpm6y%2Bu1OOuuH8wQDHcTN%2FHTBFDb%2BcOTG%2F5Bk7Hw5kTqLKFOXeIEkHZvp8XiAFaUj2g52Pkxd7rtzTo0zCTFFS4iPqwSHaiyCC1UH9xoWxxaaQ0fCoODBaufeGRZ00XXbEpMUcDbSUiVboAk9R1yNIgwzKykx4e15k1DTTOSH9HqWYYqf%2Bd9cCg7zVtrDqz%2F6COXtCvrBWn2NRHAP410m453zVQKsx3F9%2BHt%2FgmRRfUOzE1fqHIB7j70%2BDnFxwbj4vfbkxiuWO0SBEDO8id%2Bu8LF6u9%2FI1%2FhmOqcrDpuWPCb4PPWi70x%2BsPn9Ay0VWSq5rmQ76hZn%2Fa8l1xgIHSMKUMjycn9mWv6uNFVFamB3ntleAxCAK9aTCX2IfSBjqkAYLtq41ZXy0IWdUaS7kXaB8UTIGOwujbo2n26jCjDx64P62kdEo9LMmj9c%2BpW9D4CKl%2Fe3Vae7%2BnM09PywLkkVE2FZFUtH2LtpNQO0zIiKFABvn0%2FDwpPCnI%2F553%2B8FP1UJSzwr%2B0yL%2BKBuKb48O9eMGqlnKEPrdQFg5r8%2F9A4ekp9MDkkYlXMe8GXDYavBQgwxJunvF1qElyuvGEojbWE3WeOYE&X-Amz-Signature=181ce9fb75054c658281d47cff26c0168b15fa300fbfadee35de55304bca0ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTEQGBY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRYBsA%2FvcUi7EplKfmjckEHu04VM7U2qEDgmlBGh9HgIhAOSkElcoe%2FnjVOhxx6E2V62w%2BbMc%2BGGGFy%2FDP2wa%2B1LmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhetfMK%2F148q34qxwq3ANqNF1jjkL9TxyNkpG%2F0ZHEdgCRUEYNysq6v9sL6bfO6PxoqEtfHO7UxsP0IdjQADlfHPf14rhFA4yJlW%2BH7CoME8AGaBDqo8yUd1BVJGZN5RPPf1kXVAVkihNhRRyJO7r%2FQffQVofEFttJqtRp069pW6H5EwCoIV5SKetjJbNKsNqvUQp5R30K4D40qiyEKiurKqtGjsAybpZK96GxDJdchUO83N2ChRDt4awtSVT1Oh4HHLm1eJlGWFV%2BT6aqHB74PPDXjdpm6y%2Bu1OOuuH8wQDHcTN%2FHTBFDb%2BcOTG%2F5Bk7Hw5kTqLKFOXeIEkHZvp8XiAFaUj2g52Pkxd7rtzTo0zCTFFS4iPqwSHaiyCC1UH9xoWxxaaQ0fCoODBaufeGRZ00XXbEpMUcDbSUiVboAk9R1yNIgwzKykx4e15k1DTTOSH9HqWYYqf%2Bd9cCg7zVtrDqz%2F6COXtCvrBWn2NRHAP410m453zVQKsx3F9%2BHt%2FgmRRfUOzE1fqHIB7j70%2BDnFxwbj4vfbkxiuWO0SBEDO8id%2Bu8LF6u9%2FI1%2FhmOqcrDpuWPCb4PPWi70x%2BsPn9Ay0VWSq5rmQ76hZn%2Fa8l1xgIHSMKUMjycn9mWv6uNFVFamB3ntleAxCAK9aTCX2IfSBjqkAYLtq41ZXy0IWdUaS7kXaB8UTIGOwujbo2n26jCjDx64P62kdEo9LMmj9c%2BpW9D4CKl%2Fe3Vae7%2BnM09PywLkkVE2FZFUtH2LtpNQO0zIiKFABvn0%2FDwpPCnI%2F553%2B8FP1UJSzwr%2B0yL%2BKBuKb48O9eMGqlnKEPrdQFg5r8%2F9A4ekp9MDkkYlXMe8GXDYavBQgwxJunvF1qElyuvGEojbWE3WeOYE&X-Amz-Signature=9e3433c9648fb62bbfa3dcd56147428ee97d32f5c0ac14c5b4c991e4bb0a560b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTEQGBY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRYBsA%2FvcUi7EplKfmjckEHu04VM7U2qEDgmlBGh9HgIhAOSkElcoe%2FnjVOhxx6E2V62w%2BbMc%2BGGGFy%2FDP2wa%2B1LmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhetfMK%2F148q34qxwq3ANqNF1jjkL9TxyNkpG%2F0ZHEdgCRUEYNysq6v9sL6bfO6PxoqEtfHO7UxsP0IdjQADlfHPf14rhFA4yJlW%2BH7CoME8AGaBDqo8yUd1BVJGZN5RPPf1kXVAVkihNhRRyJO7r%2FQffQVofEFttJqtRp069pW6H5EwCoIV5SKetjJbNKsNqvUQp5R30K4D40qiyEKiurKqtGjsAybpZK96GxDJdchUO83N2ChRDt4awtSVT1Oh4HHLm1eJlGWFV%2BT6aqHB74PPDXjdpm6y%2Bu1OOuuH8wQDHcTN%2FHTBFDb%2BcOTG%2F5Bk7Hw5kTqLKFOXeIEkHZvp8XiAFaUj2g52Pkxd7rtzTo0zCTFFS4iPqwSHaiyCC1UH9xoWxxaaQ0fCoODBaufeGRZ00XXbEpMUcDbSUiVboAk9R1yNIgwzKykx4e15k1DTTOSH9HqWYYqf%2Bd9cCg7zVtrDqz%2F6COXtCvrBWn2NRHAP410m453zVQKsx3F9%2BHt%2FgmRRfUOzE1fqHIB7j70%2BDnFxwbj4vfbkxiuWO0SBEDO8id%2Bu8LF6u9%2FI1%2FhmOqcrDpuWPCb4PPWi70x%2BsPn9Ay0VWSq5rmQ76hZn%2Fa8l1xgIHSMKUMjycn9mWv6uNFVFamB3ntleAxCAK9aTCX2IfSBjqkAYLtq41ZXy0IWdUaS7kXaB8UTIGOwujbo2n26jCjDx64P62kdEo9LMmj9c%2BpW9D4CKl%2Fe3Vae7%2BnM09PywLkkVE2FZFUtH2LtpNQO0zIiKFABvn0%2FDwpPCnI%2F553%2B8FP1UJSzwr%2B0yL%2BKBuKb48O9eMGqlnKEPrdQFg5r8%2F9A4ekp9MDkkYlXMe8GXDYavBQgwxJunvF1qElyuvGEojbWE3WeOYE&X-Amz-Signature=b7e9739d26db185651ca2adf2b1b471077440889f9409f9fbec83335a92f68af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTEQGBY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRYBsA%2FvcUi7EplKfmjckEHu04VM7U2qEDgmlBGh9HgIhAOSkElcoe%2FnjVOhxx6E2V62w%2BbMc%2BGGGFy%2FDP2wa%2B1LmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhetfMK%2F148q34qxwq3ANqNF1jjkL9TxyNkpG%2F0ZHEdgCRUEYNysq6v9sL6bfO6PxoqEtfHO7UxsP0IdjQADlfHPf14rhFA4yJlW%2BH7CoME8AGaBDqo8yUd1BVJGZN5RPPf1kXVAVkihNhRRyJO7r%2FQffQVofEFttJqtRp069pW6H5EwCoIV5SKetjJbNKsNqvUQp5R30K4D40qiyEKiurKqtGjsAybpZK96GxDJdchUO83N2ChRDt4awtSVT1Oh4HHLm1eJlGWFV%2BT6aqHB74PPDXjdpm6y%2Bu1OOuuH8wQDHcTN%2FHTBFDb%2BcOTG%2F5Bk7Hw5kTqLKFOXeIEkHZvp8XiAFaUj2g52Pkxd7rtzTo0zCTFFS4iPqwSHaiyCC1UH9xoWxxaaQ0fCoODBaufeGRZ00XXbEpMUcDbSUiVboAk9R1yNIgwzKykx4e15k1DTTOSH9HqWYYqf%2Bd9cCg7zVtrDqz%2F6COXtCvrBWn2NRHAP410m453zVQKsx3F9%2BHt%2FgmRRfUOzE1fqHIB7j70%2BDnFxwbj4vfbkxiuWO0SBEDO8id%2Bu8LF6u9%2FI1%2FhmOqcrDpuWPCb4PPWi70x%2BsPn9Ay0VWSq5rmQ76hZn%2Fa8l1xgIHSMKUMjycn9mWv6uNFVFamB3ntleAxCAK9aTCX2IfSBjqkAYLtq41ZXy0IWdUaS7kXaB8UTIGOwujbo2n26jCjDx64P62kdEo9LMmj9c%2BpW9D4CKl%2Fe3Vae7%2BnM09PywLkkVE2FZFUtH2LtpNQO0zIiKFABvn0%2FDwpPCnI%2F553%2B8FP1UJSzwr%2B0yL%2BKBuKb48O9eMGqlnKEPrdQFg5r8%2F9A4ekp9MDkkYlXMe8GXDYavBQgwxJunvF1qElyuvGEojbWE3WeOYE&X-Amz-Signature=9e67aade7930a31b888c4357f838bde439e51c24e054d643004460f82efce0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTEQGBY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRYBsA%2FvcUi7EplKfmjckEHu04VM7U2qEDgmlBGh9HgIhAOSkElcoe%2FnjVOhxx6E2V62w%2BbMc%2BGGGFy%2FDP2wa%2B1LmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhetfMK%2F148q34qxwq3ANqNF1jjkL9TxyNkpG%2F0ZHEdgCRUEYNysq6v9sL6bfO6PxoqEtfHO7UxsP0IdjQADlfHPf14rhFA4yJlW%2BH7CoME8AGaBDqo8yUd1BVJGZN5RPPf1kXVAVkihNhRRyJO7r%2FQffQVofEFttJqtRp069pW6H5EwCoIV5SKetjJbNKsNqvUQp5R30K4D40qiyEKiurKqtGjsAybpZK96GxDJdchUO83N2ChRDt4awtSVT1Oh4HHLm1eJlGWFV%2BT6aqHB74PPDXjdpm6y%2Bu1OOuuH8wQDHcTN%2FHTBFDb%2BcOTG%2F5Bk7Hw5kTqLKFOXeIEkHZvp8XiAFaUj2g52Pkxd7rtzTo0zCTFFS4iPqwSHaiyCC1UH9xoWxxaaQ0fCoODBaufeGRZ00XXbEpMUcDbSUiVboAk9R1yNIgwzKykx4e15k1DTTOSH9HqWYYqf%2Bd9cCg7zVtrDqz%2F6COXtCvrBWn2NRHAP410m453zVQKsx3F9%2BHt%2FgmRRfUOzE1fqHIB7j70%2BDnFxwbj4vfbkxiuWO0SBEDO8id%2Bu8LF6u9%2FI1%2FhmOqcrDpuWPCb4PPWi70x%2BsPn9Ay0VWSq5rmQ76hZn%2Fa8l1xgIHSMKUMjycn9mWv6uNFVFamB3ntleAxCAK9aTCX2IfSBjqkAYLtq41ZXy0IWdUaS7kXaB8UTIGOwujbo2n26jCjDx64P62kdEo9LMmj9c%2BpW9D4CKl%2Fe3Vae7%2BnM09PywLkkVE2FZFUtH2LtpNQO0zIiKFABvn0%2FDwpPCnI%2F553%2B8FP1UJSzwr%2B0yL%2BKBuKb48O9eMGqlnKEPrdQFg5r8%2F9A4ekp9MDkkYlXMe8GXDYavBQgwxJunvF1qElyuvGEojbWE3WeOYE&X-Amz-Signature=b326d288106ba83b7edb1f29ec257baa6872af82d43f933a8e25e05872a9e8b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTEQGBY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRYBsA%2FvcUi7EplKfmjckEHu04VM7U2qEDgmlBGh9HgIhAOSkElcoe%2FnjVOhxx6E2V62w%2BbMc%2BGGGFy%2FDP2wa%2B1LmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhetfMK%2F148q34qxwq3ANqNF1jjkL9TxyNkpG%2F0ZHEdgCRUEYNysq6v9sL6bfO6PxoqEtfHO7UxsP0IdjQADlfHPf14rhFA4yJlW%2BH7CoME8AGaBDqo8yUd1BVJGZN5RPPf1kXVAVkihNhRRyJO7r%2FQffQVofEFttJqtRp069pW6H5EwCoIV5SKetjJbNKsNqvUQp5R30K4D40qiyEKiurKqtGjsAybpZK96GxDJdchUO83N2ChRDt4awtSVT1Oh4HHLm1eJlGWFV%2BT6aqHB74PPDXjdpm6y%2Bu1OOuuH8wQDHcTN%2FHTBFDb%2BcOTG%2F5Bk7Hw5kTqLKFOXeIEkHZvp8XiAFaUj2g52Pkxd7rtzTo0zCTFFS4iPqwSHaiyCC1UH9xoWxxaaQ0fCoODBaufeGRZ00XXbEpMUcDbSUiVboAk9R1yNIgwzKykx4e15k1DTTOSH9HqWYYqf%2Bd9cCg7zVtrDqz%2F6COXtCvrBWn2NRHAP410m453zVQKsx3F9%2BHt%2FgmRRfUOzE1fqHIB7j70%2BDnFxwbj4vfbkxiuWO0SBEDO8id%2Bu8LF6u9%2FI1%2FhmOqcrDpuWPCb4PPWi70x%2BsPn9Ay0VWSq5rmQ76hZn%2Fa8l1xgIHSMKUMjycn9mWv6uNFVFamB3ntleAxCAK9aTCX2IfSBjqkAYLtq41ZXy0IWdUaS7kXaB8UTIGOwujbo2n26jCjDx64P62kdEo9LMmj9c%2BpW9D4CKl%2Fe3Vae7%2BnM09PywLkkVE2FZFUtH2LtpNQO0zIiKFABvn0%2FDwpPCnI%2F553%2B8FP1UJSzwr%2B0yL%2BKBuKb48O9eMGqlnKEPrdQFg5r8%2F9A4ekp9MDkkYlXMe8GXDYavBQgwxJunvF1qElyuvGEojbWE3WeOYE&X-Amz-Signature=1601f98cb2477f7e59d801a63c13ca765bfb0ab0d5b4e70cee2100156ef3d1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTEQGBY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRYBsA%2FvcUi7EplKfmjckEHu04VM7U2qEDgmlBGh9HgIhAOSkElcoe%2FnjVOhxx6E2V62w%2BbMc%2BGGGFy%2FDP2wa%2B1LmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhetfMK%2F148q34qxwq3ANqNF1jjkL9TxyNkpG%2F0ZHEdgCRUEYNysq6v9sL6bfO6PxoqEtfHO7UxsP0IdjQADlfHPf14rhFA4yJlW%2BH7CoME8AGaBDqo8yUd1BVJGZN5RPPf1kXVAVkihNhRRyJO7r%2FQffQVofEFttJqtRp069pW6H5EwCoIV5SKetjJbNKsNqvUQp5R30K4D40qiyEKiurKqtGjsAybpZK96GxDJdchUO83N2ChRDt4awtSVT1Oh4HHLm1eJlGWFV%2BT6aqHB74PPDXjdpm6y%2Bu1OOuuH8wQDHcTN%2FHTBFDb%2BcOTG%2F5Bk7Hw5kTqLKFOXeIEkHZvp8XiAFaUj2g52Pkxd7rtzTo0zCTFFS4iPqwSHaiyCC1UH9xoWxxaaQ0fCoODBaufeGRZ00XXbEpMUcDbSUiVboAk9R1yNIgwzKykx4e15k1DTTOSH9HqWYYqf%2Bd9cCg7zVtrDqz%2F6COXtCvrBWn2NRHAP410m453zVQKsx3F9%2BHt%2FgmRRfUOzE1fqHIB7j70%2BDnFxwbj4vfbkxiuWO0SBEDO8id%2Bu8LF6u9%2FI1%2FhmOqcrDpuWPCb4PPWi70x%2BsPn9Ay0VWSq5rmQ76hZn%2Fa8l1xgIHSMKUMjycn9mWv6uNFVFamB3ntleAxCAK9aTCX2IfSBjqkAYLtq41ZXy0IWdUaS7kXaB8UTIGOwujbo2n26jCjDx64P62kdEo9LMmj9c%2BpW9D4CKl%2Fe3Vae7%2BnM09PywLkkVE2FZFUtH2LtpNQO0zIiKFABvn0%2FDwpPCnI%2F553%2B8FP1UJSzwr%2B0yL%2BKBuKb48O9eMGqlnKEPrdQFg5r8%2F9A4ekp9MDkkYlXMe8GXDYavBQgwxJunvF1qElyuvGEojbWE3WeOYE&X-Amz-Signature=80aef7a6304f2777788288f37f444b791771060584d672e3b5a7b847a1c18b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
