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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZXG2VR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDMaO08z5QWTeVpg3RKhQBU7TurVXMTY5vh5YJ%2BBCQA8QIgU%2F1BqAcwBpE1Q4gq98FpScrU%2B5rNeqi2LlOuyRU92Y8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpyElacbBuOpzlJ0yrcAz2AVjg3XGsjAvv2i4uANb8QiRlrXgmyA4b27lIEiTRaOwZZMNqWlGYLi8wKw%2BRvYAn3UfzwlxXNP6x9nKj6oE33uzY9s3%2FNcJD5vuYbMc4Hk%2FtR9eegFjp6l3H%2Fsu%2FeQ6h3qFD2Sw%2FZn1Ztcc5Vu5WzYkXT1mbZQXQxM4R3jaJY1F40zlv%2FteGS6wN0y79EqgwuRH4H1Dy6un8d4B%2BK1MPzHIMWiWwa85IOtgxODVskGRkb6PzZ1kosdqlTi60wCeT0r8i2allM50TstosXvlSo%2BhJgHbtN627wKsO%2FZkngO3bXMe7Eqbm0QexeEBkHi98JzcoPXSVYokoxHzRYHNNKrmZyUS8%2BkVFjw00TuQYr1LCAkQDpibmakt6Pg0Q0Moj2UdDPjoA%2BI6yJTLCQGswoOqUIpdf%2BkKIqHdlAyE8sJRpGkDg2JnGAdq9%2FO%2BDo9R6kuDPqhv6RvRHvCSlCx29F7lIDRLstLs41o7z5k78Ns%2BjTPB2NAoTwhP8Ql95gzMeH5PRnPsBW8YFjY7f8MiIsfu2xnyBWmO5rLmnpwWtIm57qNfvE4PMjL0GFGNumXzLxbgeoGogMYHBSfF2WBV9j%2BExB%2F1Cvd0l%2FtEMDwESGuBHF9Ml6GLlmkvgLMNuosb8GOqUB4M35TbFIqRpoYMNm3Jws4OI5Ete1AMm7NDwLTNgVW7jzusL0KLJYuIn0kftE0P6H7NXb0el2TvGk0I0k8YxJ7u6gMhYTecMsSyE0IklfPnaC658OauRS8UVGuYtD9ZuH8AWej1zSRk%2FVOJtSQk2znGT5xQYtepadLGT3ZCjHYN%2BaGKB32fKKgWs6WJ%2FJGeE7aAEkxrM%2FdvuQBvDX9%2FAURXYTFnp%2B&X-Amz-Signature=a9e8ed90f9b95d309f6ea06cfd4683e2bec3240dd9bc2eae0ff797d035670bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZXG2VR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDMaO08z5QWTeVpg3RKhQBU7TurVXMTY5vh5YJ%2BBCQA8QIgU%2F1BqAcwBpE1Q4gq98FpScrU%2B5rNeqi2LlOuyRU92Y8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpyElacbBuOpzlJ0yrcAz2AVjg3XGsjAvv2i4uANb8QiRlrXgmyA4b27lIEiTRaOwZZMNqWlGYLi8wKw%2BRvYAn3UfzwlxXNP6x9nKj6oE33uzY9s3%2FNcJD5vuYbMc4Hk%2FtR9eegFjp6l3H%2Fsu%2FeQ6h3qFD2Sw%2FZn1Ztcc5Vu5WzYkXT1mbZQXQxM4R3jaJY1F40zlv%2FteGS6wN0y79EqgwuRH4H1Dy6un8d4B%2BK1MPzHIMWiWwa85IOtgxODVskGRkb6PzZ1kosdqlTi60wCeT0r8i2allM50TstosXvlSo%2BhJgHbtN627wKsO%2FZkngO3bXMe7Eqbm0QexeEBkHi98JzcoPXSVYokoxHzRYHNNKrmZyUS8%2BkVFjw00TuQYr1LCAkQDpibmakt6Pg0Q0Moj2UdDPjoA%2BI6yJTLCQGswoOqUIpdf%2BkKIqHdlAyE8sJRpGkDg2JnGAdq9%2FO%2BDo9R6kuDPqhv6RvRHvCSlCx29F7lIDRLstLs41o7z5k78Ns%2BjTPB2NAoTwhP8Ql95gzMeH5PRnPsBW8YFjY7f8MiIsfu2xnyBWmO5rLmnpwWtIm57qNfvE4PMjL0GFGNumXzLxbgeoGogMYHBSfF2WBV9j%2BExB%2F1Cvd0l%2FtEMDwESGuBHF9Ml6GLlmkvgLMNuosb8GOqUB4M35TbFIqRpoYMNm3Jws4OI5Ete1AMm7NDwLTNgVW7jzusL0KLJYuIn0kftE0P6H7NXb0el2TvGk0I0k8YxJ7u6gMhYTecMsSyE0IklfPnaC658OauRS8UVGuYtD9ZuH8AWej1zSRk%2FVOJtSQk2znGT5xQYtepadLGT3ZCjHYN%2BaGKB32fKKgWs6WJ%2FJGeE7aAEkxrM%2FdvuQBvDX9%2FAURXYTFnp%2B&X-Amz-Signature=7977cd199c4b33977ea8124cac29f23a75515b70a3a35869bd37431143982b88&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZXG2VR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDMaO08z5QWTeVpg3RKhQBU7TurVXMTY5vh5YJ%2BBCQA8QIgU%2F1BqAcwBpE1Q4gq98FpScrU%2B5rNeqi2LlOuyRU92Y8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpyElacbBuOpzlJ0yrcAz2AVjg3XGsjAvv2i4uANb8QiRlrXgmyA4b27lIEiTRaOwZZMNqWlGYLi8wKw%2BRvYAn3UfzwlxXNP6x9nKj6oE33uzY9s3%2FNcJD5vuYbMc4Hk%2FtR9eegFjp6l3H%2Fsu%2FeQ6h3qFD2Sw%2FZn1Ztcc5Vu5WzYkXT1mbZQXQxM4R3jaJY1F40zlv%2FteGS6wN0y79EqgwuRH4H1Dy6un8d4B%2BK1MPzHIMWiWwa85IOtgxODVskGRkb6PzZ1kosdqlTi60wCeT0r8i2allM50TstosXvlSo%2BhJgHbtN627wKsO%2FZkngO3bXMe7Eqbm0QexeEBkHi98JzcoPXSVYokoxHzRYHNNKrmZyUS8%2BkVFjw00TuQYr1LCAkQDpibmakt6Pg0Q0Moj2UdDPjoA%2BI6yJTLCQGswoOqUIpdf%2BkKIqHdlAyE8sJRpGkDg2JnGAdq9%2FO%2BDo9R6kuDPqhv6RvRHvCSlCx29F7lIDRLstLs41o7z5k78Ns%2BjTPB2NAoTwhP8Ql95gzMeH5PRnPsBW8YFjY7f8MiIsfu2xnyBWmO5rLmnpwWtIm57qNfvE4PMjL0GFGNumXzLxbgeoGogMYHBSfF2WBV9j%2BExB%2F1Cvd0l%2FtEMDwESGuBHF9Ml6GLlmkvgLMNuosb8GOqUB4M35TbFIqRpoYMNm3Jws4OI5Ete1AMm7NDwLTNgVW7jzusL0KLJYuIn0kftE0P6H7NXb0el2TvGk0I0k8YxJ7u6gMhYTecMsSyE0IklfPnaC658OauRS8UVGuYtD9ZuH8AWej1zSRk%2FVOJtSQk2znGT5xQYtepadLGT3ZCjHYN%2BaGKB32fKKgWs6WJ%2FJGeE7aAEkxrM%2FdvuQBvDX9%2FAURXYTFnp%2B&X-Amz-Signature=620e7f37d4cb831bff1ebdf9dd28216bd31a9d471ffd508c358b7f619255b27d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZXG2VR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDMaO08z5QWTeVpg3RKhQBU7TurVXMTY5vh5YJ%2BBCQA8QIgU%2F1BqAcwBpE1Q4gq98FpScrU%2B5rNeqi2LlOuyRU92Y8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpyElacbBuOpzlJ0yrcAz2AVjg3XGsjAvv2i4uANb8QiRlrXgmyA4b27lIEiTRaOwZZMNqWlGYLi8wKw%2BRvYAn3UfzwlxXNP6x9nKj6oE33uzY9s3%2FNcJD5vuYbMc4Hk%2FtR9eegFjp6l3H%2Fsu%2FeQ6h3qFD2Sw%2FZn1Ztcc5Vu5WzYkXT1mbZQXQxM4R3jaJY1F40zlv%2FteGS6wN0y79EqgwuRH4H1Dy6un8d4B%2BK1MPzHIMWiWwa85IOtgxODVskGRkb6PzZ1kosdqlTi60wCeT0r8i2allM50TstosXvlSo%2BhJgHbtN627wKsO%2FZkngO3bXMe7Eqbm0QexeEBkHi98JzcoPXSVYokoxHzRYHNNKrmZyUS8%2BkVFjw00TuQYr1LCAkQDpibmakt6Pg0Q0Moj2UdDPjoA%2BI6yJTLCQGswoOqUIpdf%2BkKIqHdlAyE8sJRpGkDg2JnGAdq9%2FO%2BDo9R6kuDPqhv6RvRHvCSlCx29F7lIDRLstLs41o7z5k78Ns%2BjTPB2NAoTwhP8Ql95gzMeH5PRnPsBW8YFjY7f8MiIsfu2xnyBWmO5rLmnpwWtIm57qNfvE4PMjL0GFGNumXzLxbgeoGogMYHBSfF2WBV9j%2BExB%2F1Cvd0l%2FtEMDwESGuBHF9Ml6GLlmkvgLMNuosb8GOqUB4M35TbFIqRpoYMNm3Jws4OI5Ete1AMm7NDwLTNgVW7jzusL0KLJYuIn0kftE0P6H7NXb0el2TvGk0I0k8YxJ7u6gMhYTecMsSyE0IklfPnaC658OauRS8UVGuYtD9ZuH8AWej1zSRk%2FVOJtSQk2znGT5xQYtepadLGT3ZCjHYN%2BaGKB32fKKgWs6WJ%2FJGeE7aAEkxrM%2FdvuQBvDX9%2FAURXYTFnp%2B&X-Amz-Signature=6cd111e783edadb0e2b2357de1254a3252870ac8aa8d22e7de4eca5b786a0e17&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZXG2VR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDMaO08z5QWTeVpg3RKhQBU7TurVXMTY5vh5YJ%2BBCQA8QIgU%2F1BqAcwBpE1Q4gq98FpScrU%2B5rNeqi2LlOuyRU92Y8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpyElacbBuOpzlJ0yrcAz2AVjg3XGsjAvv2i4uANb8QiRlrXgmyA4b27lIEiTRaOwZZMNqWlGYLi8wKw%2BRvYAn3UfzwlxXNP6x9nKj6oE33uzY9s3%2FNcJD5vuYbMc4Hk%2FtR9eegFjp6l3H%2Fsu%2FeQ6h3qFD2Sw%2FZn1Ztcc5Vu5WzYkXT1mbZQXQxM4R3jaJY1F40zlv%2FteGS6wN0y79EqgwuRH4H1Dy6un8d4B%2BK1MPzHIMWiWwa85IOtgxODVskGRkb6PzZ1kosdqlTi60wCeT0r8i2allM50TstosXvlSo%2BhJgHbtN627wKsO%2FZkngO3bXMe7Eqbm0QexeEBkHi98JzcoPXSVYokoxHzRYHNNKrmZyUS8%2BkVFjw00TuQYr1LCAkQDpibmakt6Pg0Q0Moj2UdDPjoA%2BI6yJTLCQGswoOqUIpdf%2BkKIqHdlAyE8sJRpGkDg2JnGAdq9%2FO%2BDo9R6kuDPqhv6RvRHvCSlCx29F7lIDRLstLs41o7z5k78Ns%2BjTPB2NAoTwhP8Ql95gzMeH5PRnPsBW8YFjY7f8MiIsfu2xnyBWmO5rLmnpwWtIm57qNfvE4PMjL0GFGNumXzLxbgeoGogMYHBSfF2WBV9j%2BExB%2F1Cvd0l%2FtEMDwESGuBHF9Ml6GLlmkvgLMNuosb8GOqUB4M35TbFIqRpoYMNm3Jws4OI5Ete1AMm7NDwLTNgVW7jzusL0KLJYuIn0kftE0P6H7NXb0el2TvGk0I0k8YxJ7u6gMhYTecMsSyE0IklfPnaC658OauRS8UVGuYtD9ZuH8AWej1zSRk%2FVOJtSQk2znGT5xQYtepadLGT3ZCjHYN%2BaGKB32fKKgWs6WJ%2FJGeE7aAEkxrM%2FdvuQBvDX9%2FAURXYTFnp%2B&X-Amz-Signature=5b032ad99b30b86e52c5e342a733a4cd24e141ecafb75d9c018db00521ef395d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZXG2VR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDMaO08z5QWTeVpg3RKhQBU7TurVXMTY5vh5YJ%2BBCQA8QIgU%2F1BqAcwBpE1Q4gq98FpScrU%2B5rNeqi2LlOuyRU92Y8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpyElacbBuOpzlJ0yrcAz2AVjg3XGsjAvv2i4uANb8QiRlrXgmyA4b27lIEiTRaOwZZMNqWlGYLi8wKw%2BRvYAn3UfzwlxXNP6x9nKj6oE33uzY9s3%2FNcJD5vuYbMc4Hk%2FtR9eegFjp6l3H%2Fsu%2FeQ6h3qFD2Sw%2FZn1Ztcc5Vu5WzYkXT1mbZQXQxM4R3jaJY1F40zlv%2FteGS6wN0y79EqgwuRH4H1Dy6un8d4B%2BK1MPzHIMWiWwa85IOtgxODVskGRkb6PzZ1kosdqlTi60wCeT0r8i2allM50TstosXvlSo%2BhJgHbtN627wKsO%2FZkngO3bXMe7Eqbm0QexeEBkHi98JzcoPXSVYokoxHzRYHNNKrmZyUS8%2BkVFjw00TuQYr1LCAkQDpibmakt6Pg0Q0Moj2UdDPjoA%2BI6yJTLCQGswoOqUIpdf%2BkKIqHdlAyE8sJRpGkDg2JnGAdq9%2FO%2BDo9R6kuDPqhv6RvRHvCSlCx29F7lIDRLstLs41o7z5k78Ns%2BjTPB2NAoTwhP8Ql95gzMeH5PRnPsBW8YFjY7f8MiIsfu2xnyBWmO5rLmnpwWtIm57qNfvE4PMjL0GFGNumXzLxbgeoGogMYHBSfF2WBV9j%2BExB%2F1Cvd0l%2FtEMDwESGuBHF9Ml6GLlmkvgLMNuosb8GOqUB4M35TbFIqRpoYMNm3Jws4OI5Ete1AMm7NDwLTNgVW7jzusL0KLJYuIn0kftE0P6H7NXb0el2TvGk0I0k8YxJ7u6gMhYTecMsSyE0IklfPnaC658OauRS8UVGuYtD9ZuH8AWej1zSRk%2FVOJtSQk2znGT5xQYtepadLGT3ZCjHYN%2BaGKB32fKKgWs6WJ%2FJGeE7aAEkxrM%2FdvuQBvDX9%2FAURXYTFnp%2B&X-Amz-Signature=5bd09a344a44a58f88ba3693a7d1f959cd19f900b5790b3ec752c5bffd796360&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZXG2VR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDMaO08z5QWTeVpg3RKhQBU7TurVXMTY5vh5YJ%2BBCQA8QIgU%2F1BqAcwBpE1Q4gq98FpScrU%2B5rNeqi2LlOuyRU92Y8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpyElacbBuOpzlJ0yrcAz2AVjg3XGsjAvv2i4uANb8QiRlrXgmyA4b27lIEiTRaOwZZMNqWlGYLi8wKw%2BRvYAn3UfzwlxXNP6x9nKj6oE33uzY9s3%2FNcJD5vuYbMc4Hk%2FtR9eegFjp6l3H%2Fsu%2FeQ6h3qFD2Sw%2FZn1Ztcc5Vu5WzYkXT1mbZQXQxM4R3jaJY1F40zlv%2FteGS6wN0y79EqgwuRH4H1Dy6un8d4B%2BK1MPzHIMWiWwa85IOtgxODVskGRkb6PzZ1kosdqlTi60wCeT0r8i2allM50TstosXvlSo%2BhJgHbtN627wKsO%2FZkngO3bXMe7Eqbm0QexeEBkHi98JzcoPXSVYokoxHzRYHNNKrmZyUS8%2BkVFjw00TuQYr1LCAkQDpibmakt6Pg0Q0Moj2UdDPjoA%2BI6yJTLCQGswoOqUIpdf%2BkKIqHdlAyE8sJRpGkDg2JnGAdq9%2FO%2BDo9R6kuDPqhv6RvRHvCSlCx29F7lIDRLstLs41o7z5k78Ns%2BjTPB2NAoTwhP8Ql95gzMeH5PRnPsBW8YFjY7f8MiIsfu2xnyBWmO5rLmnpwWtIm57qNfvE4PMjL0GFGNumXzLxbgeoGogMYHBSfF2WBV9j%2BExB%2F1Cvd0l%2FtEMDwESGuBHF9Ml6GLlmkvgLMNuosb8GOqUB4M35TbFIqRpoYMNm3Jws4OI5Ete1AMm7NDwLTNgVW7jzusL0KLJYuIn0kftE0P6H7NXb0el2TvGk0I0k8YxJ7u6gMhYTecMsSyE0IklfPnaC658OauRS8UVGuYtD9ZuH8AWej1zSRk%2FVOJtSQk2znGT5xQYtepadLGT3ZCjHYN%2BaGKB32fKKgWs6WJ%2FJGeE7aAEkxrM%2FdvuQBvDX9%2FAURXYTFnp%2B&X-Amz-Signature=0a25677e7b4da04c4c81a492d17f5b154bffa0598d0ca8da6e6226a02ac33d30&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
