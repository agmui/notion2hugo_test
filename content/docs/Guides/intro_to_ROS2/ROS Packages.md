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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2CASCO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Q2hrh%2BUfRwTIWhT8dPt4Ww49KsEkO92QIpTaTZHCRwIgZoTAxJP4Gf6yN0ki7UAMbdoVzXHhFsebPtwuG7PzUTkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5h2eh3E3eum7cOrSrcA7Y69t1n%2FDv7dg8cUL%2BOijxPEwKe%2BAJnoHJtG%2FyLXkQ1slevYCXtxHlVhtDwNdFc2iL6pVzXBsR2QaFLgGRiqTJn2db6YUD6YGmq%2BniHQxLxHCdX8x3i34d3nhJKZp%2Bg2ErCRKuLX%2BekIvqXQozZs5A4hQnONUH7AdzFpdgQYrqPP37eTpFsdOFAQTyxTVXBB24sU3KDQfiVRcVzLbldl0Rp3keLJSyoaFdERZcYgWe4OszMuJfOoFdhbvrFwW8HLWY2a9tOdNjO7hWwjW%2BmcJVHNhO5lHYtgrj%2FtjEMF9RcoW80hy9uKMBsJXiVtlh3fxAr%2BsAmIObkDC%2BQc2FkzwzF%2Bv2jg1KtekN%2BOZ32m%2FwvBgyj%2FRtZMvloKH0MdNTWsIYAkZ5585Cl6gyB%2Fv%2FF2h7edXbbxdsToGc%2FJ7us1VwXvkgN1S0tz7X1ZjzsersvaU%2BEZqf9gLc4W19FdjXqDVnRG1hSAqvZkO%2Bz%2FGURFqzM0nXdXEmz5qp%2FpCu6cssj%2BUkjDrnQqGs83CoiYw8oEaDM8evmuk2nMgfz%2BL1K9w%2BpdB%2BST8ftPZdWTVT%2Fw3dDzsTchRpTYvvej0HD0PCFWPDjRVs6KvuFWPZloVhl%2F%2B5sUGMJJjcIkiQD5u2OMKLEkMMGOqUBfBVtG2hwQ3SVKC78o5TDjJvIJ82R6VJJwZZnXU1ByduakeFAqKgqKPO%2BY6dDJ1iwdFJiwpQKLpkYHK0ljlEmnwSkNxPDhERda5oRBAKRWq84Bm86Px940CGWK5W3tgfcSyTvAUo5nkQCxarPEwZgU5cUdan%2BIskJuNEoFXnJouwPPGkrXnmuLFQZfLeK8Fx6kMouQPTqdR7mHumuGLIM76QQ986o&X-Amz-Signature=1c7190f1f50a1a4880b72f16457bbd6751ae0c098bf7ea7c21fbf37b1d4ea118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2CASCO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Q2hrh%2BUfRwTIWhT8dPt4Ww49KsEkO92QIpTaTZHCRwIgZoTAxJP4Gf6yN0ki7UAMbdoVzXHhFsebPtwuG7PzUTkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5h2eh3E3eum7cOrSrcA7Y69t1n%2FDv7dg8cUL%2BOijxPEwKe%2BAJnoHJtG%2FyLXkQ1slevYCXtxHlVhtDwNdFc2iL6pVzXBsR2QaFLgGRiqTJn2db6YUD6YGmq%2BniHQxLxHCdX8x3i34d3nhJKZp%2Bg2ErCRKuLX%2BekIvqXQozZs5A4hQnONUH7AdzFpdgQYrqPP37eTpFsdOFAQTyxTVXBB24sU3KDQfiVRcVzLbldl0Rp3keLJSyoaFdERZcYgWe4OszMuJfOoFdhbvrFwW8HLWY2a9tOdNjO7hWwjW%2BmcJVHNhO5lHYtgrj%2FtjEMF9RcoW80hy9uKMBsJXiVtlh3fxAr%2BsAmIObkDC%2BQc2FkzwzF%2Bv2jg1KtekN%2BOZ32m%2FwvBgyj%2FRtZMvloKH0MdNTWsIYAkZ5585Cl6gyB%2Fv%2FF2h7edXbbxdsToGc%2FJ7us1VwXvkgN1S0tz7X1ZjzsersvaU%2BEZqf9gLc4W19FdjXqDVnRG1hSAqvZkO%2Bz%2FGURFqzM0nXdXEmz5qp%2FpCu6cssj%2BUkjDrnQqGs83CoiYw8oEaDM8evmuk2nMgfz%2BL1K9w%2BpdB%2BST8ftPZdWTVT%2Fw3dDzsTchRpTYvvej0HD0PCFWPDjRVs6KvuFWPZloVhl%2F%2B5sUGMJJjcIkiQD5u2OMKLEkMMGOqUBfBVtG2hwQ3SVKC78o5TDjJvIJ82R6VJJwZZnXU1ByduakeFAqKgqKPO%2BY6dDJ1iwdFJiwpQKLpkYHK0ljlEmnwSkNxPDhERda5oRBAKRWq84Bm86Px940CGWK5W3tgfcSyTvAUo5nkQCxarPEwZgU5cUdan%2BIskJuNEoFXnJouwPPGkrXnmuLFQZfLeK8Fx6kMouQPTqdR7mHumuGLIM76QQ986o&X-Amz-Signature=8fd38cc103b6af6041ebc8bed98323a732e55fdd5b94e0ca6b6cd4b8c2450576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2CASCO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Q2hrh%2BUfRwTIWhT8dPt4Ww49KsEkO92QIpTaTZHCRwIgZoTAxJP4Gf6yN0ki7UAMbdoVzXHhFsebPtwuG7PzUTkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5h2eh3E3eum7cOrSrcA7Y69t1n%2FDv7dg8cUL%2BOijxPEwKe%2BAJnoHJtG%2FyLXkQ1slevYCXtxHlVhtDwNdFc2iL6pVzXBsR2QaFLgGRiqTJn2db6YUD6YGmq%2BniHQxLxHCdX8x3i34d3nhJKZp%2Bg2ErCRKuLX%2BekIvqXQozZs5A4hQnONUH7AdzFpdgQYrqPP37eTpFsdOFAQTyxTVXBB24sU3KDQfiVRcVzLbldl0Rp3keLJSyoaFdERZcYgWe4OszMuJfOoFdhbvrFwW8HLWY2a9tOdNjO7hWwjW%2BmcJVHNhO5lHYtgrj%2FtjEMF9RcoW80hy9uKMBsJXiVtlh3fxAr%2BsAmIObkDC%2BQc2FkzwzF%2Bv2jg1KtekN%2BOZ32m%2FwvBgyj%2FRtZMvloKH0MdNTWsIYAkZ5585Cl6gyB%2Fv%2FF2h7edXbbxdsToGc%2FJ7us1VwXvkgN1S0tz7X1ZjzsersvaU%2BEZqf9gLc4W19FdjXqDVnRG1hSAqvZkO%2Bz%2FGURFqzM0nXdXEmz5qp%2FpCu6cssj%2BUkjDrnQqGs83CoiYw8oEaDM8evmuk2nMgfz%2BL1K9w%2BpdB%2BST8ftPZdWTVT%2Fw3dDzsTchRpTYvvej0HD0PCFWPDjRVs6KvuFWPZloVhl%2F%2B5sUGMJJjcIkiQD5u2OMKLEkMMGOqUBfBVtG2hwQ3SVKC78o5TDjJvIJ82R6VJJwZZnXU1ByduakeFAqKgqKPO%2BY6dDJ1iwdFJiwpQKLpkYHK0ljlEmnwSkNxPDhERda5oRBAKRWq84Bm86Px940CGWK5W3tgfcSyTvAUo5nkQCxarPEwZgU5cUdan%2BIskJuNEoFXnJouwPPGkrXnmuLFQZfLeK8Fx6kMouQPTqdR7mHumuGLIM76QQ986o&X-Amz-Signature=5f5c1417ac1ad7ace821cec376172efe4be7b4c72b3a4f3c3588f06399dcb8b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2CASCO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Q2hrh%2BUfRwTIWhT8dPt4Ww49KsEkO92QIpTaTZHCRwIgZoTAxJP4Gf6yN0ki7UAMbdoVzXHhFsebPtwuG7PzUTkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5h2eh3E3eum7cOrSrcA7Y69t1n%2FDv7dg8cUL%2BOijxPEwKe%2BAJnoHJtG%2FyLXkQ1slevYCXtxHlVhtDwNdFc2iL6pVzXBsR2QaFLgGRiqTJn2db6YUD6YGmq%2BniHQxLxHCdX8x3i34d3nhJKZp%2Bg2ErCRKuLX%2BekIvqXQozZs5A4hQnONUH7AdzFpdgQYrqPP37eTpFsdOFAQTyxTVXBB24sU3KDQfiVRcVzLbldl0Rp3keLJSyoaFdERZcYgWe4OszMuJfOoFdhbvrFwW8HLWY2a9tOdNjO7hWwjW%2BmcJVHNhO5lHYtgrj%2FtjEMF9RcoW80hy9uKMBsJXiVtlh3fxAr%2BsAmIObkDC%2BQc2FkzwzF%2Bv2jg1KtekN%2BOZ32m%2FwvBgyj%2FRtZMvloKH0MdNTWsIYAkZ5585Cl6gyB%2Fv%2FF2h7edXbbxdsToGc%2FJ7us1VwXvkgN1S0tz7X1ZjzsersvaU%2BEZqf9gLc4W19FdjXqDVnRG1hSAqvZkO%2Bz%2FGURFqzM0nXdXEmz5qp%2FpCu6cssj%2BUkjDrnQqGs83CoiYw8oEaDM8evmuk2nMgfz%2BL1K9w%2BpdB%2BST8ftPZdWTVT%2Fw3dDzsTchRpTYvvej0HD0PCFWPDjRVs6KvuFWPZloVhl%2F%2B5sUGMJJjcIkiQD5u2OMKLEkMMGOqUBfBVtG2hwQ3SVKC78o5TDjJvIJ82R6VJJwZZnXU1ByduakeFAqKgqKPO%2BY6dDJ1iwdFJiwpQKLpkYHK0ljlEmnwSkNxPDhERda5oRBAKRWq84Bm86Px940CGWK5W3tgfcSyTvAUo5nkQCxarPEwZgU5cUdan%2BIskJuNEoFXnJouwPPGkrXnmuLFQZfLeK8Fx6kMouQPTqdR7mHumuGLIM76QQ986o&X-Amz-Signature=e7f2b85d2c1fb634b5c38c103ef7af8d8df04cf2b658a38f3f6e2d7469044c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2CASCO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Q2hrh%2BUfRwTIWhT8dPt4Ww49KsEkO92QIpTaTZHCRwIgZoTAxJP4Gf6yN0ki7UAMbdoVzXHhFsebPtwuG7PzUTkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5h2eh3E3eum7cOrSrcA7Y69t1n%2FDv7dg8cUL%2BOijxPEwKe%2BAJnoHJtG%2FyLXkQ1slevYCXtxHlVhtDwNdFc2iL6pVzXBsR2QaFLgGRiqTJn2db6YUD6YGmq%2BniHQxLxHCdX8x3i34d3nhJKZp%2Bg2ErCRKuLX%2BekIvqXQozZs5A4hQnONUH7AdzFpdgQYrqPP37eTpFsdOFAQTyxTVXBB24sU3KDQfiVRcVzLbldl0Rp3keLJSyoaFdERZcYgWe4OszMuJfOoFdhbvrFwW8HLWY2a9tOdNjO7hWwjW%2BmcJVHNhO5lHYtgrj%2FtjEMF9RcoW80hy9uKMBsJXiVtlh3fxAr%2BsAmIObkDC%2BQc2FkzwzF%2Bv2jg1KtekN%2BOZ32m%2FwvBgyj%2FRtZMvloKH0MdNTWsIYAkZ5585Cl6gyB%2Fv%2FF2h7edXbbxdsToGc%2FJ7us1VwXvkgN1S0tz7X1ZjzsersvaU%2BEZqf9gLc4W19FdjXqDVnRG1hSAqvZkO%2Bz%2FGURFqzM0nXdXEmz5qp%2FpCu6cssj%2BUkjDrnQqGs83CoiYw8oEaDM8evmuk2nMgfz%2BL1K9w%2BpdB%2BST8ftPZdWTVT%2Fw3dDzsTchRpTYvvej0HD0PCFWPDjRVs6KvuFWPZloVhl%2F%2B5sUGMJJjcIkiQD5u2OMKLEkMMGOqUBfBVtG2hwQ3SVKC78o5TDjJvIJ82R6VJJwZZnXU1ByduakeFAqKgqKPO%2BY6dDJ1iwdFJiwpQKLpkYHK0ljlEmnwSkNxPDhERda5oRBAKRWq84Bm86Px940CGWK5W3tgfcSyTvAUo5nkQCxarPEwZgU5cUdan%2BIskJuNEoFXnJouwPPGkrXnmuLFQZfLeK8Fx6kMouQPTqdR7mHumuGLIM76QQ986o&X-Amz-Signature=0e382f039c1f4021dafe003a0c827ffd0718e8be8325cc2aed1e2bd899071d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2CASCO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Q2hrh%2BUfRwTIWhT8dPt4Ww49KsEkO92QIpTaTZHCRwIgZoTAxJP4Gf6yN0ki7UAMbdoVzXHhFsebPtwuG7PzUTkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5h2eh3E3eum7cOrSrcA7Y69t1n%2FDv7dg8cUL%2BOijxPEwKe%2BAJnoHJtG%2FyLXkQ1slevYCXtxHlVhtDwNdFc2iL6pVzXBsR2QaFLgGRiqTJn2db6YUD6YGmq%2BniHQxLxHCdX8x3i34d3nhJKZp%2Bg2ErCRKuLX%2BekIvqXQozZs5A4hQnONUH7AdzFpdgQYrqPP37eTpFsdOFAQTyxTVXBB24sU3KDQfiVRcVzLbldl0Rp3keLJSyoaFdERZcYgWe4OszMuJfOoFdhbvrFwW8HLWY2a9tOdNjO7hWwjW%2BmcJVHNhO5lHYtgrj%2FtjEMF9RcoW80hy9uKMBsJXiVtlh3fxAr%2BsAmIObkDC%2BQc2FkzwzF%2Bv2jg1KtekN%2BOZ32m%2FwvBgyj%2FRtZMvloKH0MdNTWsIYAkZ5585Cl6gyB%2Fv%2FF2h7edXbbxdsToGc%2FJ7us1VwXvkgN1S0tz7X1ZjzsersvaU%2BEZqf9gLc4W19FdjXqDVnRG1hSAqvZkO%2Bz%2FGURFqzM0nXdXEmz5qp%2FpCu6cssj%2BUkjDrnQqGs83CoiYw8oEaDM8evmuk2nMgfz%2BL1K9w%2BpdB%2BST8ftPZdWTVT%2Fw3dDzsTchRpTYvvej0HD0PCFWPDjRVs6KvuFWPZloVhl%2F%2B5sUGMJJjcIkiQD5u2OMKLEkMMGOqUBfBVtG2hwQ3SVKC78o5TDjJvIJ82R6VJJwZZnXU1ByduakeFAqKgqKPO%2BY6dDJ1iwdFJiwpQKLpkYHK0ljlEmnwSkNxPDhERda5oRBAKRWq84Bm86Px940CGWK5W3tgfcSyTvAUo5nkQCxarPEwZgU5cUdan%2BIskJuNEoFXnJouwPPGkrXnmuLFQZfLeK8Fx6kMouQPTqdR7mHumuGLIM76QQ986o&X-Amz-Signature=0a65043fdc2b0f5e93a1d161422d527369f675e2b8aecf083eeca3de63bf8027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2CASCO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Q2hrh%2BUfRwTIWhT8dPt4Ww49KsEkO92QIpTaTZHCRwIgZoTAxJP4Gf6yN0ki7UAMbdoVzXHhFsebPtwuG7PzUTkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5h2eh3E3eum7cOrSrcA7Y69t1n%2FDv7dg8cUL%2BOijxPEwKe%2BAJnoHJtG%2FyLXkQ1slevYCXtxHlVhtDwNdFc2iL6pVzXBsR2QaFLgGRiqTJn2db6YUD6YGmq%2BniHQxLxHCdX8x3i34d3nhJKZp%2Bg2ErCRKuLX%2BekIvqXQozZs5A4hQnONUH7AdzFpdgQYrqPP37eTpFsdOFAQTyxTVXBB24sU3KDQfiVRcVzLbldl0Rp3keLJSyoaFdERZcYgWe4OszMuJfOoFdhbvrFwW8HLWY2a9tOdNjO7hWwjW%2BmcJVHNhO5lHYtgrj%2FtjEMF9RcoW80hy9uKMBsJXiVtlh3fxAr%2BsAmIObkDC%2BQc2FkzwzF%2Bv2jg1KtekN%2BOZ32m%2FwvBgyj%2FRtZMvloKH0MdNTWsIYAkZ5585Cl6gyB%2Fv%2FF2h7edXbbxdsToGc%2FJ7us1VwXvkgN1S0tz7X1ZjzsersvaU%2BEZqf9gLc4W19FdjXqDVnRG1hSAqvZkO%2Bz%2FGURFqzM0nXdXEmz5qp%2FpCu6cssj%2BUkjDrnQqGs83CoiYw8oEaDM8evmuk2nMgfz%2BL1K9w%2BpdB%2BST8ftPZdWTVT%2Fw3dDzsTchRpTYvvej0HD0PCFWPDjRVs6KvuFWPZloVhl%2F%2B5sUGMJJjcIkiQD5u2OMKLEkMMGOqUBfBVtG2hwQ3SVKC78o5TDjJvIJ82R6VJJwZZnXU1ByduakeFAqKgqKPO%2BY6dDJ1iwdFJiwpQKLpkYHK0ljlEmnwSkNxPDhERda5oRBAKRWq84Bm86Px940CGWK5W3tgfcSyTvAUo5nkQCxarPEwZgU5cUdan%2BIskJuNEoFXnJouwPPGkrXnmuLFQZfLeK8Fx6kMouQPTqdR7mHumuGLIM76QQ986o&X-Amz-Signature=1127fbfd0add47397c9def682c6d87397f5d71d08db1e9eec49bf0f54bbae956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
