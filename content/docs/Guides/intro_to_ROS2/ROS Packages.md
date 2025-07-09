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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34QQAWW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn67gSokmR6Qc5CZUGY1gByu%2Fe8HAF7tBYCth02Pn%2B0wIhAJuKcmOsySc%2FPTqctCj2uhPhVRUV0w7bdwkSKPpmm6b%2FKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaDzkL1igNa%2B6ZCCIq3APC0EMVOWXhbVk38UkHHYAmaCq11I4R0xMbpexGkG2Zxu72axf81HsqmQSVgnHsKVepT1G19w2Q36h7OZ1lDan8P%2BLP%2B5YTSVgnyw%2FmetC0XKovDm4D6ScMe%2FSQlZo81%2F1sMraYNyuAt63cmyXpEYm22XhmLxoKfrFNMYoF8bbToTK1Oi9rajgEgfKqSu91TJ2ncBNF%2BTBKGTUBdUsy51txEVIk9BcDeQPNljjCez3GniQquzn37bGUWpsM67nB%2BnzpWMOuyRzf%2FViRRkkVyW0JWXna8cWZezVCVWfHsZLO%2BSx2%2Ft6w8ySx6ZToepGvqFUZDEWHTInH5NPhjWiTqR945%2FJEId6AuRkTLw41%2BSoZb4%2FObLATK2mTEtUpHsQyyaLoixyY1HCzozXP6QjiAQWSnO42L0X91EdpPtTGaHAgPNTuFgdA1jO35aKYcEofxAfs%2BtMYldsjqvDYtjXf4X034lK5c3OjqLX10ixvzRGdqGf66MtX0xwHQfsIoLtHhKS0GOmeJcGqBj8LPLuCbyxYyXhopHuEyee3MI97HdQ6ir1VSdZw4e9pOY5V6%2FzfBxEoYYy2Bxq2PUV1JRmB0Q81sbqKFWPTKLMhviuOvydZ37Gkmks38w0RVCExMjCr67nDBjqkAVD8S8LU9JNZ2HruKhKu9TZtt15XzJD5qxEni8AjSFgEtvPIOhcoQGO3sMm%2BWI67t%2BBl5nlclS%2FvlLXBcAhxakCbbVUW2SBwQ0Q76fi7urJpJdqtHDNHCz7SDNCLgDF8kl1i51T2rGop6aXxi7X5C99%2FoSfEpw4KfpWMVGyKCtdtd2lbAJLN5jBwghyErs0vLI0IwiuDzkXi3NFSIxaBd%2FngWidX&X-Amz-Signature=18a9eb08a0b46fbbadb927545ce4a20356bfa874834bd899a973b3f89b37ea28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34QQAWW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn67gSokmR6Qc5CZUGY1gByu%2Fe8HAF7tBYCth02Pn%2B0wIhAJuKcmOsySc%2FPTqctCj2uhPhVRUV0w7bdwkSKPpmm6b%2FKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaDzkL1igNa%2B6ZCCIq3APC0EMVOWXhbVk38UkHHYAmaCq11I4R0xMbpexGkG2Zxu72axf81HsqmQSVgnHsKVepT1G19w2Q36h7OZ1lDan8P%2BLP%2B5YTSVgnyw%2FmetC0XKovDm4D6ScMe%2FSQlZo81%2F1sMraYNyuAt63cmyXpEYm22XhmLxoKfrFNMYoF8bbToTK1Oi9rajgEgfKqSu91TJ2ncBNF%2BTBKGTUBdUsy51txEVIk9BcDeQPNljjCez3GniQquzn37bGUWpsM67nB%2BnzpWMOuyRzf%2FViRRkkVyW0JWXna8cWZezVCVWfHsZLO%2BSx2%2Ft6w8ySx6ZToepGvqFUZDEWHTInH5NPhjWiTqR945%2FJEId6AuRkTLw41%2BSoZb4%2FObLATK2mTEtUpHsQyyaLoixyY1HCzozXP6QjiAQWSnO42L0X91EdpPtTGaHAgPNTuFgdA1jO35aKYcEofxAfs%2BtMYldsjqvDYtjXf4X034lK5c3OjqLX10ixvzRGdqGf66MtX0xwHQfsIoLtHhKS0GOmeJcGqBj8LPLuCbyxYyXhopHuEyee3MI97HdQ6ir1VSdZw4e9pOY5V6%2FzfBxEoYYy2Bxq2PUV1JRmB0Q81sbqKFWPTKLMhviuOvydZ37Gkmks38w0RVCExMjCr67nDBjqkAVD8S8LU9JNZ2HruKhKu9TZtt15XzJD5qxEni8AjSFgEtvPIOhcoQGO3sMm%2BWI67t%2BBl5nlclS%2FvlLXBcAhxakCbbVUW2SBwQ0Q76fi7urJpJdqtHDNHCz7SDNCLgDF8kl1i51T2rGop6aXxi7X5C99%2FoSfEpw4KfpWMVGyKCtdtd2lbAJLN5jBwghyErs0vLI0IwiuDzkXi3NFSIxaBd%2FngWidX&X-Amz-Signature=9afb7c3c9531ed4ebbc69c340f0bf626c078f38a0650536e9ca8a9ca5c0adfa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34QQAWW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn67gSokmR6Qc5CZUGY1gByu%2Fe8HAF7tBYCth02Pn%2B0wIhAJuKcmOsySc%2FPTqctCj2uhPhVRUV0w7bdwkSKPpmm6b%2FKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaDzkL1igNa%2B6ZCCIq3APC0EMVOWXhbVk38UkHHYAmaCq11I4R0xMbpexGkG2Zxu72axf81HsqmQSVgnHsKVepT1G19w2Q36h7OZ1lDan8P%2BLP%2B5YTSVgnyw%2FmetC0XKovDm4D6ScMe%2FSQlZo81%2F1sMraYNyuAt63cmyXpEYm22XhmLxoKfrFNMYoF8bbToTK1Oi9rajgEgfKqSu91TJ2ncBNF%2BTBKGTUBdUsy51txEVIk9BcDeQPNljjCez3GniQquzn37bGUWpsM67nB%2BnzpWMOuyRzf%2FViRRkkVyW0JWXna8cWZezVCVWfHsZLO%2BSx2%2Ft6w8ySx6ZToepGvqFUZDEWHTInH5NPhjWiTqR945%2FJEId6AuRkTLw41%2BSoZb4%2FObLATK2mTEtUpHsQyyaLoixyY1HCzozXP6QjiAQWSnO42L0X91EdpPtTGaHAgPNTuFgdA1jO35aKYcEofxAfs%2BtMYldsjqvDYtjXf4X034lK5c3OjqLX10ixvzRGdqGf66MtX0xwHQfsIoLtHhKS0GOmeJcGqBj8LPLuCbyxYyXhopHuEyee3MI97HdQ6ir1VSdZw4e9pOY5V6%2FzfBxEoYYy2Bxq2PUV1JRmB0Q81sbqKFWPTKLMhviuOvydZ37Gkmks38w0RVCExMjCr67nDBjqkAVD8S8LU9JNZ2HruKhKu9TZtt15XzJD5qxEni8AjSFgEtvPIOhcoQGO3sMm%2BWI67t%2BBl5nlclS%2FvlLXBcAhxakCbbVUW2SBwQ0Q76fi7urJpJdqtHDNHCz7SDNCLgDF8kl1i51T2rGop6aXxi7X5C99%2FoSfEpw4KfpWMVGyKCtdtd2lbAJLN5jBwghyErs0vLI0IwiuDzkXi3NFSIxaBd%2FngWidX&X-Amz-Signature=3df948581d97b694cbc4ab9e2dfd2fed5735240799d895b90b95b871c1e8b6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34QQAWW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn67gSokmR6Qc5CZUGY1gByu%2Fe8HAF7tBYCth02Pn%2B0wIhAJuKcmOsySc%2FPTqctCj2uhPhVRUV0w7bdwkSKPpmm6b%2FKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaDzkL1igNa%2B6ZCCIq3APC0EMVOWXhbVk38UkHHYAmaCq11I4R0xMbpexGkG2Zxu72axf81HsqmQSVgnHsKVepT1G19w2Q36h7OZ1lDan8P%2BLP%2B5YTSVgnyw%2FmetC0XKovDm4D6ScMe%2FSQlZo81%2F1sMraYNyuAt63cmyXpEYm22XhmLxoKfrFNMYoF8bbToTK1Oi9rajgEgfKqSu91TJ2ncBNF%2BTBKGTUBdUsy51txEVIk9BcDeQPNljjCez3GniQquzn37bGUWpsM67nB%2BnzpWMOuyRzf%2FViRRkkVyW0JWXna8cWZezVCVWfHsZLO%2BSx2%2Ft6w8ySx6ZToepGvqFUZDEWHTInH5NPhjWiTqR945%2FJEId6AuRkTLw41%2BSoZb4%2FObLATK2mTEtUpHsQyyaLoixyY1HCzozXP6QjiAQWSnO42L0X91EdpPtTGaHAgPNTuFgdA1jO35aKYcEofxAfs%2BtMYldsjqvDYtjXf4X034lK5c3OjqLX10ixvzRGdqGf66MtX0xwHQfsIoLtHhKS0GOmeJcGqBj8LPLuCbyxYyXhopHuEyee3MI97HdQ6ir1VSdZw4e9pOY5V6%2FzfBxEoYYy2Bxq2PUV1JRmB0Q81sbqKFWPTKLMhviuOvydZ37Gkmks38w0RVCExMjCr67nDBjqkAVD8S8LU9JNZ2HruKhKu9TZtt15XzJD5qxEni8AjSFgEtvPIOhcoQGO3sMm%2BWI67t%2BBl5nlclS%2FvlLXBcAhxakCbbVUW2SBwQ0Q76fi7urJpJdqtHDNHCz7SDNCLgDF8kl1i51T2rGop6aXxi7X5C99%2FoSfEpw4KfpWMVGyKCtdtd2lbAJLN5jBwghyErs0vLI0IwiuDzkXi3NFSIxaBd%2FngWidX&X-Amz-Signature=c1baaa1250e7818f10c7e7a829e437104e43522caf92003a354386a07fad02c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34QQAWW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn67gSokmR6Qc5CZUGY1gByu%2Fe8HAF7tBYCth02Pn%2B0wIhAJuKcmOsySc%2FPTqctCj2uhPhVRUV0w7bdwkSKPpmm6b%2FKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaDzkL1igNa%2B6ZCCIq3APC0EMVOWXhbVk38UkHHYAmaCq11I4R0xMbpexGkG2Zxu72axf81HsqmQSVgnHsKVepT1G19w2Q36h7OZ1lDan8P%2BLP%2B5YTSVgnyw%2FmetC0XKovDm4D6ScMe%2FSQlZo81%2F1sMraYNyuAt63cmyXpEYm22XhmLxoKfrFNMYoF8bbToTK1Oi9rajgEgfKqSu91TJ2ncBNF%2BTBKGTUBdUsy51txEVIk9BcDeQPNljjCez3GniQquzn37bGUWpsM67nB%2BnzpWMOuyRzf%2FViRRkkVyW0JWXna8cWZezVCVWfHsZLO%2BSx2%2Ft6w8ySx6ZToepGvqFUZDEWHTInH5NPhjWiTqR945%2FJEId6AuRkTLw41%2BSoZb4%2FObLATK2mTEtUpHsQyyaLoixyY1HCzozXP6QjiAQWSnO42L0X91EdpPtTGaHAgPNTuFgdA1jO35aKYcEofxAfs%2BtMYldsjqvDYtjXf4X034lK5c3OjqLX10ixvzRGdqGf66MtX0xwHQfsIoLtHhKS0GOmeJcGqBj8LPLuCbyxYyXhopHuEyee3MI97HdQ6ir1VSdZw4e9pOY5V6%2FzfBxEoYYy2Bxq2PUV1JRmB0Q81sbqKFWPTKLMhviuOvydZ37Gkmks38w0RVCExMjCr67nDBjqkAVD8S8LU9JNZ2HruKhKu9TZtt15XzJD5qxEni8AjSFgEtvPIOhcoQGO3sMm%2BWI67t%2BBl5nlclS%2FvlLXBcAhxakCbbVUW2SBwQ0Q76fi7urJpJdqtHDNHCz7SDNCLgDF8kl1i51T2rGop6aXxi7X5C99%2FoSfEpw4KfpWMVGyKCtdtd2lbAJLN5jBwghyErs0vLI0IwiuDzkXi3NFSIxaBd%2FngWidX&X-Amz-Signature=376d84a55cdec9d7c01acd18a2e3b762e0fcaa9552d4e15ea7ad9c25497bd76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34QQAWW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn67gSokmR6Qc5CZUGY1gByu%2Fe8HAF7tBYCth02Pn%2B0wIhAJuKcmOsySc%2FPTqctCj2uhPhVRUV0w7bdwkSKPpmm6b%2FKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaDzkL1igNa%2B6ZCCIq3APC0EMVOWXhbVk38UkHHYAmaCq11I4R0xMbpexGkG2Zxu72axf81HsqmQSVgnHsKVepT1G19w2Q36h7OZ1lDan8P%2BLP%2B5YTSVgnyw%2FmetC0XKovDm4D6ScMe%2FSQlZo81%2F1sMraYNyuAt63cmyXpEYm22XhmLxoKfrFNMYoF8bbToTK1Oi9rajgEgfKqSu91TJ2ncBNF%2BTBKGTUBdUsy51txEVIk9BcDeQPNljjCez3GniQquzn37bGUWpsM67nB%2BnzpWMOuyRzf%2FViRRkkVyW0JWXna8cWZezVCVWfHsZLO%2BSx2%2Ft6w8ySx6ZToepGvqFUZDEWHTInH5NPhjWiTqR945%2FJEId6AuRkTLw41%2BSoZb4%2FObLATK2mTEtUpHsQyyaLoixyY1HCzozXP6QjiAQWSnO42L0X91EdpPtTGaHAgPNTuFgdA1jO35aKYcEofxAfs%2BtMYldsjqvDYtjXf4X034lK5c3OjqLX10ixvzRGdqGf66MtX0xwHQfsIoLtHhKS0GOmeJcGqBj8LPLuCbyxYyXhopHuEyee3MI97HdQ6ir1VSdZw4e9pOY5V6%2FzfBxEoYYy2Bxq2PUV1JRmB0Q81sbqKFWPTKLMhviuOvydZ37Gkmks38w0RVCExMjCr67nDBjqkAVD8S8LU9JNZ2HruKhKu9TZtt15XzJD5qxEni8AjSFgEtvPIOhcoQGO3sMm%2BWI67t%2BBl5nlclS%2FvlLXBcAhxakCbbVUW2SBwQ0Q76fi7urJpJdqtHDNHCz7SDNCLgDF8kl1i51T2rGop6aXxi7X5C99%2FoSfEpw4KfpWMVGyKCtdtd2lbAJLN5jBwghyErs0vLI0IwiuDzkXi3NFSIxaBd%2FngWidX&X-Amz-Signature=446747b10c27f17910e744854c2f4e26b50f856fee01b9c89a8809a6359e17ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34QQAWW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn67gSokmR6Qc5CZUGY1gByu%2Fe8HAF7tBYCth02Pn%2B0wIhAJuKcmOsySc%2FPTqctCj2uhPhVRUV0w7bdwkSKPpmm6b%2FKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaDzkL1igNa%2B6ZCCIq3APC0EMVOWXhbVk38UkHHYAmaCq11I4R0xMbpexGkG2Zxu72axf81HsqmQSVgnHsKVepT1G19w2Q36h7OZ1lDan8P%2BLP%2B5YTSVgnyw%2FmetC0XKovDm4D6ScMe%2FSQlZo81%2F1sMraYNyuAt63cmyXpEYm22XhmLxoKfrFNMYoF8bbToTK1Oi9rajgEgfKqSu91TJ2ncBNF%2BTBKGTUBdUsy51txEVIk9BcDeQPNljjCez3GniQquzn37bGUWpsM67nB%2BnzpWMOuyRzf%2FViRRkkVyW0JWXna8cWZezVCVWfHsZLO%2BSx2%2Ft6w8ySx6ZToepGvqFUZDEWHTInH5NPhjWiTqR945%2FJEId6AuRkTLw41%2BSoZb4%2FObLATK2mTEtUpHsQyyaLoixyY1HCzozXP6QjiAQWSnO42L0X91EdpPtTGaHAgPNTuFgdA1jO35aKYcEofxAfs%2BtMYldsjqvDYtjXf4X034lK5c3OjqLX10ixvzRGdqGf66MtX0xwHQfsIoLtHhKS0GOmeJcGqBj8LPLuCbyxYyXhopHuEyee3MI97HdQ6ir1VSdZw4e9pOY5V6%2FzfBxEoYYy2Bxq2PUV1JRmB0Q81sbqKFWPTKLMhviuOvydZ37Gkmks38w0RVCExMjCr67nDBjqkAVD8S8LU9JNZ2HruKhKu9TZtt15XzJD5qxEni8AjSFgEtvPIOhcoQGO3sMm%2BWI67t%2BBl5nlclS%2FvlLXBcAhxakCbbVUW2SBwQ0Q76fi7urJpJdqtHDNHCz7SDNCLgDF8kl1i51T2rGop6aXxi7X5C99%2FoSfEpw4KfpWMVGyKCtdtd2lbAJLN5jBwghyErs0vLI0IwiuDzkXi3NFSIxaBd%2FngWidX&X-Amz-Signature=54cbd50f78d827662b961bf98a48fdebd446a567534dedf818b04d66ad254e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
