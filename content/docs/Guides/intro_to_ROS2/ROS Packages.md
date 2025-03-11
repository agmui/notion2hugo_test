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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YVLTIIM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCuVECrabktJAKwTe7WbCOzKfyEDZq8uxGIYtQ1stcwawIhAIKjFi15c%2BriTCdk%2F%2BzSh63EPZoYEK3u43%2BZ6PSVgqSzKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy6cGPOQql8lePo8cq3AMbaxd0qhCqmtMPTvEcICS82p80fQsWm7v3a%2FaRPFKB2mrx7YIztFUQ%2FMRpv5UX24sndMIcyHLbjq8n501NXBwi9D2PHBaJtKAaI4g7sSVFdekbaj3%2BR8JvYqePjJU%2B4ca3s3IWV9HRvmg0%2FQh41DDscfpjSlZwEHoek9aHTNrlYhHbNSOO4qjjQzj4MNCYkNnySnoVD33gXAKHAlR3Ykp3zQM1YdHTZyBLR4WRe9N3Kq9p3h0ucidH9jGDEupyxZ2Da6yiWlk1dnNn%2FIDgn31px0iZmhX0HPnWt9du7yr2ZhJ7gEDuafFjxZIHjKXMVxMTYH6SxaRwHB3du96fNrCWJKTjoTownlXL9oPsWkPowZin9Xlvvp%2FuzgQc0lZX%2BMcpUGHmGCJal%2BOaw8I1NLhxdppZplACYje6NuM4UOUFD5EQTEEJgWHZIA3lgUtcV9tOBiHeFOvrIp1brqmP15FHhGkVZq%2Bwr9jIYq6IvL8fYd%2B42k5mqnYBM%2Bhvj6hltXjf82uPoqVtNfq%2BRw43JblblxzjCNxAp6jOSODcKoLw%2FYw%2BaLshLN%2Fgd0b%2BqdXhForZC94gEMNkm4EV2eE0Hkwoh%2BduW33AwZUaCo5vwk%2BFRqxiuqYUBf8aWGbnsTDOkMK%2BBjqkAfMEBPrOSNYoaePKnssXMvnAqZH2AQqt9EhPrwdqzsytVnPwK1xaDBCqC8KGur%2Fbtz8V3ww%2FtsS4tANa10JANKtXP9C5cq85MhBZsCVPmv776mKgpSmfumOOJ8m9prqRJ965B%2BgDWpmyPfn9bNZbDnNKv7%2F%2B1qHHpN%2FLwt2u8b9suwOEeujGrhKTljr3E3t7%2FyumMp8M1WcxB0baqb73FSY0R472&X-Amz-Signature=87ea8903e7933e685e8a46e9bac1900e28f379f471bc7c3efadaec90b8b60158&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YVLTIIM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCuVECrabktJAKwTe7WbCOzKfyEDZq8uxGIYtQ1stcwawIhAIKjFi15c%2BriTCdk%2F%2BzSh63EPZoYEK3u43%2BZ6PSVgqSzKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy6cGPOQql8lePo8cq3AMbaxd0qhCqmtMPTvEcICS82p80fQsWm7v3a%2FaRPFKB2mrx7YIztFUQ%2FMRpv5UX24sndMIcyHLbjq8n501NXBwi9D2PHBaJtKAaI4g7sSVFdekbaj3%2BR8JvYqePjJU%2B4ca3s3IWV9HRvmg0%2FQh41DDscfpjSlZwEHoek9aHTNrlYhHbNSOO4qjjQzj4MNCYkNnySnoVD33gXAKHAlR3Ykp3zQM1YdHTZyBLR4WRe9N3Kq9p3h0ucidH9jGDEupyxZ2Da6yiWlk1dnNn%2FIDgn31px0iZmhX0HPnWt9du7yr2ZhJ7gEDuafFjxZIHjKXMVxMTYH6SxaRwHB3du96fNrCWJKTjoTownlXL9oPsWkPowZin9Xlvvp%2FuzgQc0lZX%2BMcpUGHmGCJal%2BOaw8I1NLhxdppZplACYje6NuM4UOUFD5EQTEEJgWHZIA3lgUtcV9tOBiHeFOvrIp1brqmP15FHhGkVZq%2Bwr9jIYq6IvL8fYd%2B42k5mqnYBM%2Bhvj6hltXjf82uPoqVtNfq%2BRw43JblblxzjCNxAp6jOSODcKoLw%2FYw%2BaLshLN%2Fgd0b%2BqdXhForZC94gEMNkm4EV2eE0Hkwoh%2BduW33AwZUaCo5vwk%2BFRqxiuqYUBf8aWGbnsTDOkMK%2BBjqkAfMEBPrOSNYoaePKnssXMvnAqZH2AQqt9EhPrwdqzsytVnPwK1xaDBCqC8KGur%2Fbtz8V3ww%2FtsS4tANa10JANKtXP9C5cq85MhBZsCVPmv776mKgpSmfumOOJ8m9prqRJ965B%2BgDWpmyPfn9bNZbDnNKv7%2F%2B1qHHpN%2FLwt2u8b9suwOEeujGrhKTljr3E3t7%2FyumMp8M1WcxB0baqb73FSY0R472&X-Amz-Signature=423335807aa3db5dfc81db2de033cc68721955f0639d649373f1f4cf1aa6f98a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YVLTIIM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCuVECrabktJAKwTe7WbCOzKfyEDZq8uxGIYtQ1stcwawIhAIKjFi15c%2BriTCdk%2F%2BzSh63EPZoYEK3u43%2BZ6PSVgqSzKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy6cGPOQql8lePo8cq3AMbaxd0qhCqmtMPTvEcICS82p80fQsWm7v3a%2FaRPFKB2mrx7YIztFUQ%2FMRpv5UX24sndMIcyHLbjq8n501NXBwi9D2PHBaJtKAaI4g7sSVFdekbaj3%2BR8JvYqePjJU%2B4ca3s3IWV9HRvmg0%2FQh41DDscfpjSlZwEHoek9aHTNrlYhHbNSOO4qjjQzj4MNCYkNnySnoVD33gXAKHAlR3Ykp3zQM1YdHTZyBLR4WRe9N3Kq9p3h0ucidH9jGDEupyxZ2Da6yiWlk1dnNn%2FIDgn31px0iZmhX0HPnWt9du7yr2ZhJ7gEDuafFjxZIHjKXMVxMTYH6SxaRwHB3du96fNrCWJKTjoTownlXL9oPsWkPowZin9Xlvvp%2FuzgQc0lZX%2BMcpUGHmGCJal%2BOaw8I1NLhxdppZplACYje6NuM4UOUFD5EQTEEJgWHZIA3lgUtcV9tOBiHeFOvrIp1brqmP15FHhGkVZq%2Bwr9jIYq6IvL8fYd%2B42k5mqnYBM%2Bhvj6hltXjf82uPoqVtNfq%2BRw43JblblxzjCNxAp6jOSODcKoLw%2FYw%2BaLshLN%2Fgd0b%2BqdXhForZC94gEMNkm4EV2eE0Hkwoh%2BduW33AwZUaCo5vwk%2BFRqxiuqYUBf8aWGbnsTDOkMK%2BBjqkAfMEBPrOSNYoaePKnssXMvnAqZH2AQqt9EhPrwdqzsytVnPwK1xaDBCqC8KGur%2Fbtz8V3ww%2FtsS4tANa10JANKtXP9C5cq85MhBZsCVPmv776mKgpSmfumOOJ8m9prqRJ965B%2BgDWpmyPfn9bNZbDnNKv7%2F%2B1qHHpN%2FLwt2u8b9suwOEeujGrhKTljr3E3t7%2FyumMp8M1WcxB0baqb73FSY0R472&X-Amz-Signature=3328881c78fb5dfee12869c3ef3af9f30c5e40324284cf6a0df1ed5f4f0acc85&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YVLTIIM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCuVECrabktJAKwTe7WbCOzKfyEDZq8uxGIYtQ1stcwawIhAIKjFi15c%2BriTCdk%2F%2BzSh63EPZoYEK3u43%2BZ6PSVgqSzKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy6cGPOQql8lePo8cq3AMbaxd0qhCqmtMPTvEcICS82p80fQsWm7v3a%2FaRPFKB2mrx7YIztFUQ%2FMRpv5UX24sndMIcyHLbjq8n501NXBwi9D2PHBaJtKAaI4g7sSVFdekbaj3%2BR8JvYqePjJU%2B4ca3s3IWV9HRvmg0%2FQh41DDscfpjSlZwEHoek9aHTNrlYhHbNSOO4qjjQzj4MNCYkNnySnoVD33gXAKHAlR3Ykp3zQM1YdHTZyBLR4WRe9N3Kq9p3h0ucidH9jGDEupyxZ2Da6yiWlk1dnNn%2FIDgn31px0iZmhX0HPnWt9du7yr2ZhJ7gEDuafFjxZIHjKXMVxMTYH6SxaRwHB3du96fNrCWJKTjoTownlXL9oPsWkPowZin9Xlvvp%2FuzgQc0lZX%2BMcpUGHmGCJal%2BOaw8I1NLhxdppZplACYje6NuM4UOUFD5EQTEEJgWHZIA3lgUtcV9tOBiHeFOvrIp1brqmP15FHhGkVZq%2Bwr9jIYq6IvL8fYd%2B42k5mqnYBM%2Bhvj6hltXjf82uPoqVtNfq%2BRw43JblblxzjCNxAp6jOSODcKoLw%2FYw%2BaLshLN%2Fgd0b%2BqdXhForZC94gEMNkm4EV2eE0Hkwoh%2BduW33AwZUaCo5vwk%2BFRqxiuqYUBf8aWGbnsTDOkMK%2BBjqkAfMEBPrOSNYoaePKnssXMvnAqZH2AQqt9EhPrwdqzsytVnPwK1xaDBCqC8KGur%2Fbtz8V3ww%2FtsS4tANa10JANKtXP9C5cq85MhBZsCVPmv776mKgpSmfumOOJ8m9prqRJ965B%2BgDWpmyPfn9bNZbDnNKv7%2F%2B1qHHpN%2FLwt2u8b9suwOEeujGrhKTljr3E3t7%2FyumMp8M1WcxB0baqb73FSY0R472&X-Amz-Signature=9dbd684bd8beaabd66417f0669f43d679c287c73bd0665d2b30cfbf9942d3f54&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YVLTIIM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCuVECrabktJAKwTe7WbCOzKfyEDZq8uxGIYtQ1stcwawIhAIKjFi15c%2BriTCdk%2F%2BzSh63EPZoYEK3u43%2BZ6PSVgqSzKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy6cGPOQql8lePo8cq3AMbaxd0qhCqmtMPTvEcICS82p80fQsWm7v3a%2FaRPFKB2mrx7YIztFUQ%2FMRpv5UX24sndMIcyHLbjq8n501NXBwi9D2PHBaJtKAaI4g7sSVFdekbaj3%2BR8JvYqePjJU%2B4ca3s3IWV9HRvmg0%2FQh41DDscfpjSlZwEHoek9aHTNrlYhHbNSOO4qjjQzj4MNCYkNnySnoVD33gXAKHAlR3Ykp3zQM1YdHTZyBLR4WRe9N3Kq9p3h0ucidH9jGDEupyxZ2Da6yiWlk1dnNn%2FIDgn31px0iZmhX0HPnWt9du7yr2ZhJ7gEDuafFjxZIHjKXMVxMTYH6SxaRwHB3du96fNrCWJKTjoTownlXL9oPsWkPowZin9Xlvvp%2FuzgQc0lZX%2BMcpUGHmGCJal%2BOaw8I1NLhxdppZplACYje6NuM4UOUFD5EQTEEJgWHZIA3lgUtcV9tOBiHeFOvrIp1brqmP15FHhGkVZq%2Bwr9jIYq6IvL8fYd%2B42k5mqnYBM%2Bhvj6hltXjf82uPoqVtNfq%2BRw43JblblxzjCNxAp6jOSODcKoLw%2FYw%2BaLshLN%2Fgd0b%2BqdXhForZC94gEMNkm4EV2eE0Hkwoh%2BduW33AwZUaCo5vwk%2BFRqxiuqYUBf8aWGbnsTDOkMK%2BBjqkAfMEBPrOSNYoaePKnssXMvnAqZH2AQqt9EhPrwdqzsytVnPwK1xaDBCqC8KGur%2Fbtz8V3ww%2FtsS4tANa10JANKtXP9C5cq85MhBZsCVPmv776mKgpSmfumOOJ8m9prqRJ965B%2BgDWpmyPfn9bNZbDnNKv7%2F%2B1qHHpN%2FLwt2u8b9suwOEeujGrhKTljr3E3t7%2FyumMp8M1WcxB0baqb73FSY0R472&X-Amz-Signature=ef38551cb6b98c09132fcba1893012e85cac3d88e97fe87387866c42cbd0ab77&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YVLTIIM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCuVECrabktJAKwTe7WbCOzKfyEDZq8uxGIYtQ1stcwawIhAIKjFi15c%2BriTCdk%2F%2BzSh63EPZoYEK3u43%2BZ6PSVgqSzKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy6cGPOQql8lePo8cq3AMbaxd0qhCqmtMPTvEcICS82p80fQsWm7v3a%2FaRPFKB2mrx7YIztFUQ%2FMRpv5UX24sndMIcyHLbjq8n501NXBwi9D2PHBaJtKAaI4g7sSVFdekbaj3%2BR8JvYqePjJU%2B4ca3s3IWV9HRvmg0%2FQh41DDscfpjSlZwEHoek9aHTNrlYhHbNSOO4qjjQzj4MNCYkNnySnoVD33gXAKHAlR3Ykp3zQM1YdHTZyBLR4WRe9N3Kq9p3h0ucidH9jGDEupyxZ2Da6yiWlk1dnNn%2FIDgn31px0iZmhX0HPnWt9du7yr2ZhJ7gEDuafFjxZIHjKXMVxMTYH6SxaRwHB3du96fNrCWJKTjoTownlXL9oPsWkPowZin9Xlvvp%2FuzgQc0lZX%2BMcpUGHmGCJal%2BOaw8I1NLhxdppZplACYje6NuM4UOUFD5EQTEEJgWHZIA3lgUtcV9tOBiHeFOvrIp1brqmP15FHhGkVZq%2Bwr9jIYq6IvL8fYd%2B42k5mqnYBM%2Bhvj6hltXjf82uPoqVtNfq%2BRw43JblblxzjCNxAp6jOSODcKoLw%2FYw%2BaLshLN%2Fgd0b%2BqdXhForZC94gEMNkm4EV2eE0Hkwoh%2BduW33AwZUaCo5vwk%2BFRqxiuqYUBf8aWGbnsTDOkMK%2BBjqkAfMEBPrOSNYoaePKnssXMvnAqZH2AQqt9EhPrwdqzsytVnPwK1xaDBCqC8KGur%2Fbtz8V3ww%2FtsS4tANa10JANKtXP9C5cq85MhBZsCVPmv776mKgpSmfumOOJ8m9prqRJ965B%2BgDWpmyPfn9bNZbDnNKv7%2F%2B1qHHpN%2FLwt2u8b9suwOEeujGrhKTljr3E3t7%2FyumMp8M1WcxB0baqb73FSY0R472&X-Amz-Signature=5ba5d04977068863305518fce254e01256f56bed9cdb93543845a00265de4608&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YVLTIIM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCuVECrabktJAKwTe7WbCOzKfyEDZq8uxGIYtQ1stcwawIhAIKjFi15c%2BriTCdk%2F%2BzSh63EPZoYEK3u43%2BZ6PSVgqSzKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy6cGPOQql8lePo8cq3AMbaxd0qhCqmtMPTvEcICS82p80fQsWm7v3a%2FaRPFKB2mrx7YIztFUQ%2FMRpv5UX24sndMIcyHLbjq8n501NXBwi9D2PHBaJtKAaI4g7sSVFdekbaj3%2BR8JvYqePjJU%2B4ca3s3IWV9HRvmg0%2FQh41DDscfpjSlZwEHoek9aHTNrlYhHbNSOO4qjjQzj4MNCYkNnySnoVD33gXAKHAlR3Ykp3zQM1YdHTZyBLR4WRe9N3Kq9p3h0ucidH9jGDEupyxZ2Da6yiWlk1dnNn%2FIDgn31px0iZmhX0HPnWt9du7yr2ZhJ7gEDuafFjxZIHjKXMVxMTYH6SxaRwHB3du96fNrCWJKTjoTownlXL9oPsWkPowZin9Xlvvp%2FuzgQc0lZX%2BMcpUGHmGCJal%2BOaw8I1NLhxdppZplACYje6NuM4UOUFD5EQTEEJgWHZIA3lgUtcV9tOBiHeFOvrIp1brqmP15FHhGkVZq%2Bwr9jIYq6IvL8fYd%2B42k5mqnYBM%2Bhvj6hltXjf82uPoqVtNfq%2BRw43JblblxzjCNxAp6jOSODcKoLw%2FYw%2BaLshLN%2Fgd0b%2BqdXhForZC94gEMNkm4EV2eE0Hkwoh%2BduW33AwZUaCo5vwk%2BFRqxiuqYUBf8aWGbnsTDOkMK%2BBjqkAfMEBPrOSNYoaePKnssXMvnAqZH2AQqt9EhPrwdqzsytVnPwK1xaDBCqC8KGur%2Fbtz8V3ww%2FtsS4tANa10JANKtXP9C5cq85MhBZsCVPmv776mKgpSmfumOOJ8m9prqRJ965B%2BgDWpmyPfn9bNZbDnNKv7%2F%2B1qHHpN%2FLwt2u8b9suwOEeujGrhKTljr3E3t7%2FyumMp8M1WcxB0baqb73FSY0R472&X-Amz-Signature=65f5811df66ad3812265dc91b0f6ca086b9937c5661fe3b189a4b317791e0d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
