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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUMIFHF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCx0IbGc0lAee6%2BhX9c%2FFt7btMxhH8S3Bggf%2Bvas0lkRgIgSKXr6Cn8eKMKHQ3LStgD1UnjH5RRed3A%2BytZwklzOGEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRWbCdAb8E4wrN%2FzircAx4zfuifzXUCrAGifaBLexzeCQZudusYAk1Liy8tWdtgyz%2BDq2WV3lv73AjpLioDxdmf6FLJxn8KruIdngvITetoP6MJkeNzhwPIckEBR%2BEaeBd3uAXUgx2oFa0U%2FKnv%2FsIuWymwMEIzGLYWjJts9qnTa1LAIoPtskX7QynuMhJCw1dlxYfCPBwfkKd2uCKSjPjERNjirV%2F8TAzX%2Fyu3CvyGoglGv9qwZ5c%2B8WuPOZzqNwUDVFpaykVYErpXSa546zll6yb8GsPcAjnQhmDnprlvhbPCfx38RldAQVSA6NGtdXQVflwKLMypzu%2BxJGgFoOs9PFmqFyceMZ%2BaU2Y894igaKAr956xh8JZHyYxw3WgqUGh6U0NyW1KRv00ShQV%2B9BZnpqmS8g8K7PdPHe9qyZfQ5ohnl9zZBqm%2FUV8zA%2Bp54gi9dMEH12ZtQZyEPdzyXmO1CtyVJnv42oYCerHynnnWclh%2FB0j0zPaBjFFO2iu%2B3HD%2BSnW47X31R0BfpKjlLPtvuIGCudfVvyNxNMZU2%2F1gmHKM%2Buv5avaqWcCxqsKLr9Z9uWTUAT24v8rXAuPFYyRUwcupbCktsS9lXFwxNm%2ByPO0f1e1Z%2B7k6MbKZGWBHLOPRANt28ZxgBsSMM%2FAutMGOqUBx%2BPQXHouGL1yqKp08JZs4RdEix0iDRFHVHD4QuxlirmK5tEFp0ofK%2F8GYfbJPYm2eI0otwqyEpcttUBd9IFJy%2FNhtoHF3bUW7bF1CaeczNOuC8JF5SnVUQAEXm%2B40gBj5zJMrQMsW8fsdBLFYUTiu5gmeHRCRcD5GMspMfxw%2FOspFA983gb0MCJKG25DRnwm5RhS673QlNiGhcJk6BV8Rpn%2B%2F406&X-Amz-Signature=5f7db1e822839bc3da7f0f507b0ecf5aa2950acb61e47f4d4e245e31b13445c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUMIFHF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCx0IbGc0lAee6%2BhX9c%2FFt7btMxhH8S3Bggf%2Bvas0lkRgIgSKXr6Cn8eKMKHQ3LStgD1UnjH5RRed3A%2BytZwklzOGEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRWbCdAb8E4wrN%2FzircAx4zfuifzXUCrAGifaBLexzeCQZudusYAk1Liy8tWdtgyz%2BDq2WV3lv73AjpLioDxdmf6FLJxn8KruIdngvITetoP6MJkeNzhwPIckEBR%2BEaeBd3uAXUgx2oFa0U%2FKnv%2FsIuWymwMEIzGLYWjJts9qnTa1LAIoPtskX7QynuMhJCw1dlxYfCPBwfkKd2uCKSjPjERNjirV%2F8TAzX%2Fyu3CvyGoglGv9qwZ5c%2B8WuPOZzqNwUDVFpaykVYErpXSa546zll6yb8GsPcAjnQhmDnprlvhbPCfx38RldAQVSA6NGtdXQVflwKLMypzu%2BxJGgFoOs9PFmqFyceMZ%2BaU2Y894igaKAr956xh8JZHyYxw3WgqUGh6U0NyW1KRv00ShQV%2B9BZnpqmS8g8K7PdPHe9qyZfQ5ohnl9zZBqm%2FUV8zA%2Bp54gi9dMEH12ZtQZyEPdzyXmO1CtyVJnv42oYCerHynnnWclh%2FB0j0zPaBjFFO2iu%2B3HD%2BSnW47X31R0BfpKjlLPtvuIGCudfVvyNxNMZU2%2F1gmHKM%2Buv5avaqWcCxqsKLr9Z9uWTUAT24v8rXAuPFYyRUwcupbCktsS9lXFwxNm%2ByPO0f1e1Z%2B7k6MbKZGWBHLOPRANt28ZxgBsSMM%2FAutMGOqUBx%2BPQXHouGL1yqKp08JZs4RdEix0iDRFHVHD4QuxlirmK5tEFp0ofK%2F8GYfbJPYm2eI0otwqyEpcttUBd9IFJy%2FNhtoHF3bUW7bF1CaeczNOuC8JF5SnVUQAEXm%2B40gBj5zJMrQMsW8fsdBLFYUTiu5gmeHRCRcD5GMspMfxw%2FOspFA983gb0MCJKG25DRnwm5RhS673QlNiGhcJk6BV8Rpn%2B%2F406&X-Amz-Signature=2e6d5fffabac245326f6409601d8deddcef11bef24cacdb1bf1fdf1b5258ade4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUMIFHF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCx0IbGc0lAee6%2BhX9c%2FFt7btMxhH8S3Bggf%2Bvas0lkRgIgSKXr6Cn8eKMKHQ3LStgD1UnjH5RRed3A%2BytZwklzOGEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRWbCdAb8E4wrN%2FzircAx4zfuifzXUCrAGifaBLexzeCQZudusYAk1Liy8tWdtgyz%2BDq2WV3lv73AjpLioDxdmf6FLJxn8KruIdngvITetoP6MJkeNzhwPIckEBR%2BEaeBd3uAXUgx2oFa0U%2FKnv%2FsIuWymwMEIzGLYWjJts9qnTa1LAIoPtskX7QynuMhJCw1dlxYfCPBwfkKd2uCKSjPjERNjirV%2F8TAzX%2Fyu3CvyGoglGv9qwZ5c%2B8WuPOZzqNwUDVFpaykVYErpXSa546zll6yb8GsPcAjnQhmDnprlvhbPCfx38RldAQVSA6NGtdXQVflwKLMypzu%2BxJGgFoOs9PFmqFyceMZ%2BaU2Y894igaKAr956xh8JZHyYxw3WgqUGh6U0NyW1KRv00ShQV%2B9BZnpqmS8g8K7PdPHe9qyZfQ5ohnl9zZBqm%2FUV8zA%2Bp54gi9dMEH12ZtQZyEPdzyXmO1CtyVJnv42oYCerHynnnWclh%2FB0j0zPaBjFFO2iu%2B3HD%2BSnW47X31R0BfpKjlLPtvuIGCudfVvyNxNMZU2%2F1gmHKM%2Buv5avaqWcCxqsKLr9Z9uWTUAT24v8rXAuPFYyRUwcupbCktsS9lXFwxNm%2ByPO0f1e1Z%2B7k6MbKZGWBHLOPRANt28ZxgBsSMM%2FAutMGOqUBx%2BPQXHouGL1yqKp08JZs4RdEix0iDRFHVHD4QuxlirmK5tEFp0ofK%2F8GYfbJPYm2eI0otwqyEpcttUBd9IFJy%2FNhtoHF3bUW7bF1CaeczNOuC8JF5SnVUQAEXm%2B40gBj5zJMrQMsW8fsdBLFYUTiu5gmeHRCRcD5GMspMfxw%2FOspFA983gb0MCJKG25DRnwm5RhS673QlNiGhcJk6BV8Rpn%2B%2F406&X-Amz-Signature=ee87464c0e55354906777a0d35503c839bc9d0174dc640d3ba6305746cca1fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUMIFHF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCx0IbGc0lAee6%2BhX9c%2FFt7btMxhH8S3Bggf%2Bvas0lkRgIgSKXr6Cn8eKMKHQ3LStgD1UnjH5RRed3A%2BytZwklzOGEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRWbCdAb8E4wrN%2FzircAx4zfuifzXUCrAGifaBLexzeCQZudusYAk1Liy8tWdtgyz%2BDq2WV3lv73AjpLioDxdmf6FLJxn8KruIdngvITetoP6MJkeNzhwPIckEBR%2BEaeBd3uAXUgx2oFa0U%2FKnv%2FsIuWymwMEIzGLYWjJts9qnTa1LAIoPtskX7QynuMhJCw1dlxYfCPBwfkKd2uCKSjPjERNjirV%2F8TAzX%2Fyu3CvyGoglGv9qwZ5c%2B8WuPOZzqNwUDVFpaykVYErpXSa546zll6yb8GsPcAjnQhmDnprlvhbPCfx38RldAQVSA6NGtdXQVflwKLMypzu%2BxJGgFoOs9PFmqFyceMZ%2BaU2Y894igaKAr956xh8JZHyYxw3WgqUGh6U0NyW1KRv00ShQV%2B9BZnpqmS8g8K7PdPHe9qyZfQ5ohnl9zZBqm%2FUV8zA%2Bp54gi9dMEH12ZtQZyEPdzyXmO1CtyVJnv42oYCerHynnnWclh%2FB0j0zPaBjFFO2iu%2B3HD%2BSnW47X31R0BfpKjlLPtvuIGCudfVvyNxNMZU2%2F1gmHKM%2Buv5avaqWcCxqsKLr9Z9uWTUAT24v8rXAuPFYyRUwcupbCktsS9lXFwxNm%2ByPO0f1e1Z%2B7k6MbKZGWBHLOPRANt28ZxgBsSMM%2FAutMGOqUBx%2BPQXHouGL1yqKp08JZs4RdEix0iDRFHVHD4QuxlirmK5tEFp0ofK%2F8GYfbJPYm2eI0otwqyEpcttUBd9IFJy%2FNhtoHF3bUW7bF1CaeczNOuC8JF5SnVUQAEXm%2B40gBj5zJMrQMsW8fsdBLFYUTiu5gmeHRCRcD5GMspMfxw%2FOspFA983gb0MCJKG25DRnwm5RhS673QlNiGhcJk6BV8Rpn%2B%2F406&X-Amz-Signature=c0ffcc33522359405f0bc331871333d8b58d006d52c294d2a2ce5a04f72076be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUMIFHF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCx0IbGc0lAee6%2BhX9c%2FFt7btMxhH8S3Bggf%2Bvas0lkRgIgSKXr6Cn8eKMKHQ3LStgD1UnjH5RRed3A%2BytZwklzOGEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRWbCdAb8E4wrN%2FzircAx4zfuifzXUCrAGifaBLexzeCQZudusYAk1Liy8tWdtgyz%2BDq2WV3lv73AjpLioDxdmf6FLJxn8KruIdngvITetoP6MJkeNzhwPIckEBR%2BEaeBd3uAXUgx2oFa0U%2FKnv%2FsIuWymwMEIzGLYWjJts9qnTa1LAIoPtskX7QynuMhJCw1dlxYfCPBwfkKd2uCKSjPjERNjirV%2F8TAzX%2Fyu3CvyGoglGv9qwZ5c%2B8WuPOZzqNwUDVFpaykVYErpXSa546zll6yb8GsPcAjnQhmDnprlvhbPCfx38RldAQVSA6NGtdXQVflwKLMypzu%2BxJGgFoOs9PFmqFyceMZ%2BaU2Y894igaKAr956xh8JZHyYxw3WgqUGh6U0NyW1KRv00ShQV%2B9BZnpqmS8g8K7PdPHe9qyZfQ5ohnl9zZBqm%2FUV8zA%2Bp54gi9dMEH12ZtQZyEPdzyXmO1CtyVJnv42oYCerHynnnWclh%2FB0j0zPaBjFFO2iu%2B3HD%2BSnW47X31R0BfpKjlLPtvuIGCudfVvyNxNMZU2%2F1gmHKM%2Buv5avaqWcCxqsKLr9Z9uWTUAT24v8rXAuPFYyRUwcupbCktsS9lXFwxNm%2ByPO0f1e1Z%2B7k6MbKZGWBHLOPRANt28ZxgBsSMM%2FAutMGOqUBx%2BPQXHouGL1yqKp08JZs4RdEix0iDRFHVHD4QuxlirmK5tEFp0ofK%2F8GYfbJPYm2eI0otwqyEpcttUBd9IFJy%2FNhtoHF3bUW7bF1CaeczNOuC8JF5SnVUQAEXm%2B40gBj5zJMrQMsW8fsdBLFYUTiu5gmeHRCRcD5GMspMfxw%2FOspFA983gb0MCJKG25DRnwm5RhS673QlNiGhcJk6BV8Rpn%2B%2F406&X-Amz-Signature=8edd85d8a9118e3bfa6887a593423b00344293946e54dd00649e83e25ddcb5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUMIFHF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCx0IbGc0lAee6%2BhX9c%2FFt7btMxhH8S3Bggf%2Bvas0lkRgIgSKXr6Cn8eKMKHQ3LStgD1UnjH5RRed3A%2BytZwklzOGEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRWbCdAb8E4wrN%2FzircAx4zfuifzXUCrAGifaBLexzeCQZudusYAk1Liy8tWdtgyz%2BDq2WV3lv73AjpLioDxdmf6FLJxn8KruIdngvITetoP6MJkeNzhwPIckEBR%2BEaeBd3uAXUgx2oFa0U%2FKnv%2FsIuWymwMEIzGLYWjJts9qnTa1LAIoPtskX7QynuMhJCw1dlxYfCPBwfkKd2uCKSjPjERNjirV%2F8TAzX%2Fyu3CvyGoglGv9qwZ5c%2B8WuPOZzqNwUDVFpaykVYErpXSa546zll6yb8GsPcAjnQhmDnprlvhbPCfx38RldAQVSA6NGtdXQVflwKLMypzu%2BxJGgFoOs9PFmqFyceMZ%2BaU2Y894igaKAr956xh8JZHyYxw3WgqUGh6U0NyW1KRv00ShQV%2B9BZnpqmS8g8K7PdPHe9qyZfQ5ohnl9zZBqm%2FUV8zA%2Bp54gi9dMEH12ZtQZyEPdzyXmO1CtyVJnv42oYCerHynnnWclh%2FB0j0zPaBjFFO2iu%2B3HD%2BSnW47X31R0BfpKjlLPtvuIGCudfVvyNxNMZU2%2F1gmHKM%2Buv5avaqWcCxqsKLr9Z9uWTUAT24v8rXAuPFYyRUwcupbCktsS9lXFwxNm%2ByPO0f1e1Z%2B7k6MbKZGWBHLOPRANt28ZxgBsSMM%2FAutMGOqUBx%2BPQXHouGL1yqKp08JZs4RdEix0iDRFHVHD4QuxlirmK5tEFp0ofK%2F8GYfbJPYm2eI0otwqyEpcttUBd9IFJy%2FNhtoHF3bUW7bF1CaeczNOuC8JF5SnVUQAEXm%2B40gBj5zJMrQMsW8fsdBLFYUTiu5gmeHRCRcD5GMspMfxw%2FOspFA983gb0MCJKG25DRnwm5RhS673QlNiGhcJk6BV8Rpn%2B%2F406&X-Amz-Signature=cdeb57b9723881713045b7351924a5d4b6057eef02abc83ad1042d258afae66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUMIFHF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCx0IbGc0lAee6%2BhX9c%2FFt7btMxhH8S3Bggf%2Bvas0lkRgIgSKXr6Cn8eKMKHQ3LStgD1UnjH5RRed3A%2BytZwklzOGEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRWbCdAb8E4wrN%2FzircAx4zfuifzXUCrAGifaBLexzeCQZudusYAk1Liy8tWdtgyz%2BDq2WV3lv73AjpLioDxdmf6FLJxn8KruIdngvITetoP6MJkeNzhwPIckEBR%2BEaeBd3uAXUgx2oFa0U%2FKnv%2FsIuWymwMEIzGLYWjJts9qnTa1LAIoPtskX7QynuMhJCw1dlxYfCPBwfkKd2uCKSjPjERNjirV%2F8TAzX%2Fyu3CvyGoglGv9qwZ5c%2B8WuPOZzqNwUDVFpaykVYErpXSa546zll6yb8GsPcAjnQhmDnprlvhbPCfx38RldAQVSA6NGtdXQVflwKLMypzu%2BxJGgFoOs9PFmqFyceMZ%2BaU2Y894igaKAr956xh8JZHyYxw3WgqUGh6U0NyW1KRv00ShQV%2B9BZnpqmS8g8K7PdPHe9qyZfQ5ohnl9zZBqm%2FUV8zA%2Bp54gi9dMEH12ZtQZyEPdzyXmO1CtyVJnv42oYCerHynnnWclh%2FB0j0zPaBjFFO2iu%2B3HD%2BSnW47X31R0BfpKjlLPtvuIGCudfVvyNxNMZU2%2F1gmHKM%2Buv5avaqWcCxqsKLr9Z9uWTUAT24v8rXAuPFYyRUwcupbCktsS9lXFwxNm%2ByPO0f1e1Z%2B7k6MbKZGWBHLOPRANt28ZxgBsSMM%2FAutMGOqUBx%2BPQXHouGL1yqKp08JZs4RdEix0iDRFHVHD4QuxlirmK5tEFp0ofK%2F8GYfbJPYm2eI0otwqyEpcttUBd9IFJy%2FNhtoHF3bUW7bF1CaeczNOuC8JF5SnVUQAEXm%2B40gBj5zJMrQMsW8fsdBLFYUTiu5gmeHRCRcD5GMspMfxw%2FOspFA983gb0MCJKG25DRnwm5RhS673QlNiGhcJk6BV8Rpn%2B%2F406&X-Amz-Signature=ccbe923c0ed2dff3921e486885494ec503af1853f1d83dbc7bd78c98af7f7d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
