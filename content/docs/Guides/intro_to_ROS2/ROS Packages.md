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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637SEHOJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSjfWVCx3yET1cbzg1eIDedE4XKSzbtyg%2Bvnrq2DMXwAiEA96XKfgHqKKh1iMt5zxm3F7UXLfYYucRUmVmK8ayvxAEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGPyzKjLTmVGiVD4fircA2h7fbl7TLFzlZ8pbq8Ythaz2qROwc8sRd4oiIxEvAelCrBFBRt9e44qqa3YQRfe0xADUitmTLY1ufcrRJ83PSyUOcB%2BuOV3ry6zUNsjH1S1yHMmffMc0xZGSw9S6ClcLLRVQrMA%2Bo9n7nXLOpUeQ%2B0fQcC6eF7cI%2B5AoGdBaXCAeAHAp2uIJXfbiBtiOnkGzTlON0naq5SxjKmBPSWGIqM6ridD5yjLwZhYZnNP8QFCDWvU5ijC4GHDVGYL5FH2KO8dfZD9bZT54Zmf7f0G6DYGjQDaHoh1ofwgv07wc3LofynwwlD0rJ%2BxVT7C8rEEVntTUbFT%2B4upukO8eSX5lvU6iRXtXqjyO%2BWZ%2FjkZFbuiOvPW54vVe2BwVnk8xFCAExAeVbE9V1NlU94FemVX9NxzCd8tvWLpoDDOWZq%2BreZ%2Bj41wEfNru5bmT0ns%2B0TG4yt3n4hGopsvdNZcYz4LJkUwRhO6SfTkvOAsSYtrkgkp0H4P%2FkMaOIoilv3bhYFcFd5DP7EcNLWsxexz04tbqUsGUjPoOHnwPJclHDb1ST6FTiVzmvtR4tD9mIqpWcdSVaDRDNKECpMcSILfHvDmA4bEsFX0YRkpQlKICBxiaLC5HJcJimoS8W14J5WLMISkxb8GOqUBdjS%2BQslaFTBCKF%2BmG39tcvTc9lqQSnm8fiN1uucXPGI1NPZ%2FtXbtVTaHKOPN9gJI8gWRz8jzOLaHgC4hNPwOcSzElgZU6KwDnsax%2B6BHhPWyPRjjOUnZ%2FH%2FQSi%2B9I85od42ncR%2BbKPCFki9HrtsLfpO3MHsDEqdgnj9sef8AKwt5U730v6Fs%2BIV%2BtaPEB5%2BE5sgBxeBsUFhFDPjiUuWb0ARUxmph&X-Amz-Signature=e608284d1b653d230982e9151d643333e13880834afb31ede7a743e734acdc1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637SEHOJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSjfWVCx3yET1cbzg1eIDedE4XKSzbtyg%2Bvnrq2DMXwAiEA96XKfgHqKKh1iMt5zxm3F7UXLfYYucRUmVmK8ayvxAEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGPyzKjLTmVGiVD4fircA2h7fbl7TLFzlZ8pbq8Ythaz2qROwc8sRd4oiIxEvAelCrBFBRt9e44qqa3YQRfe0xADUitmTLY1ufcrRJ83PSyUOcB%2BuOV3ry6zUNsjH1S1yHMmffMc0xZGSw9S6ClcLLRVQrMA%2Bo9n7nXLOpUeQ%2B0fQcC6eF7cI%2B5AoGdBaXCAeAHAp2uIJXfbiBtiOnkGzTlON0naq5SxjKmBPSWGIqM6ridD5yjLwZhYZnNP8QFCDWvU5ijC4GHDVGYL5FH2KO8dfZD9bZT54Zmf7f0G6DYGjQDaHoh1ofwgv07wc3LofynwwlD0rJ%2BxVT7C8rEEVntTUbFT%2B4upukO8eSX5lvU6iRXtXqjyO%2BWZ%2FjkZFbuiOvPW54vVe2BwVnk8xFCAExAeVbE9V1NlU94FemVX9NxzCd8tvWLpoDDOWZq%2BreZ%2Bj41wEfNru5bmT0ns%2B0TG4yt3n4hGopsvdNZcYz4LJkUwRhO6SfTkvOAsSYtrkgkp0H4P%2FkMaOIoilv3bhYFcFd5DP7EcNLWsxexz04tbqUsGUjPoOHnwPJclHDb1ST6FTiVzmvtR4tD9mIqpWcdSVaDRDNKECpMcSILfHvDmA4bEsFX0YRkpQlKICBxiaLC5HJcJimoS8W14J5WLMISkxb8GOqUBdjS%2BQslaFTBCKF%2BmG39tcvTc9lqQSnm8fiN1uucXPGI1NPZ%2FtXbtVTaHKOPN9gJI8gWRz8jzOLaHgC4hNPwOcSzElgZU6KwDnsax%2B6BHhPWyPRjjOUnZ%2FH%2FQSi%2B9I85od42ncR%2BbKPCFki9HrtsLfpO3MHsDEqdgnj9sef8AKwt5U730v6Fs%2BIV%2BtaPEB5%2BE5sgBxeBsUFhFDPjiUuWb0ARUxmph&X-Amz-Signature=d1ac7dfd1c00c99f770dd69e13e5819aeeee442c02f174738796a702b3c81297&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637SEHOJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSjfWVCx3yET1cbzg1eIDedE4XKSzbtyg%2Bvnrq2DMXwAiEA96XKfgHqKKh1iMt5zxm3F7UXLfYYucRUmVmK8ayvxAEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGPyzKjLTmVGiVD4fircA2h7fbl7TLFzlZ8pbq8Ythaz2qROwc8sRd4oiIxEvAelCrBFBRt9e44qqa3YQRfe0xADUitmTLY1ufcrRJ83PSyUOcB%2BuOV3ry6zUNsjH1S1yHMmffMc0xZGSw9S6ClcLLRVQrMA%2Bo9n7nXLOpUeQ%2B0fQcC6eF7cI%2B5AoGdBaXCAeAHAp2uIJXfbiBtiOnkGzTlON0naq5SxjKmBPSWGIqM6ridD5yjLwZhYZnNP8QFCDWvU5ijC4GHDVGYL5FH2KO8dfZD9bZT54Zmf7f0G6DYGjQDaHoh1ofwgv07wc3LofynwwlD0rJ%2BxVT7C8rEEVntTUbFT%2B4upukO8eSX5lvU6iRXtXqjyO%2BWZ%2FjkZFbuiOvPW54vVe2BwVnk8xFCAExAeVbE9V1NlU94FemVX9NxzCd8tvWLpoDDOWZq%2BreZ%2Bj41wEfNru5bmT0ns%2B0TG4yt3n4hGopsvdNZcYz4LJkUwRhO6SfTkvOAsSYtrkgkp0H4P%2FkMaOIoilv3bhYFcFd5DP7EcNLWsxexz04tbqUsGUjPoOHnwPJclHDb1ST6FTiVzmvtR4tD9mIqpWcdSVaDRDNKECpMcSILfHvDmA4bEsFX0YRkpQlKICBxiaLC5HJcJimoS8W14J5WLMISkxb8GOqUBdjS%2BQslaFTBCKF%2BmG39tcvTc9lqQSnm8fiN1uucXPGI1NPZ%2FtXbtVTaHKOPN9gJI8gWRz8jzOLaHgC4hNPwOcSzElgZU6KwDnsax%2B6BHhPWyPRjjOUnZ%2FH%2FQSi%2B9I85od42ncR%2BbKPCFki9HrtsLfpO3MHsDEqdgnj9sef8AKwt5U730v6Fs%2BIV%2BtaPEB5%2BE5sgBxeBsUFhFDPjiUuWb0ARUxmph&X-Amz-Signature=7d5ade5b0da618d30f8a042ab0745a70290a44d09cd0f9646b39b68ff909f5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637SEHOJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSjfWVCx3yET1cbzg1eIDedE4XKSzbtyg%2Bvnrq2DMXwAiEA96XKfgHqKKh1iMt5zxm3F7UXLfYYucRUmVmK8ayvxAEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGPyzKjLTmVGiVD4fircA2h7fbl7TLFzlZ8pbq8Ythaz2qROwc8sRd4oiIxEvAelCrBFBRt9e44qqa3YQRfe0xADUitmTLY1ufcrRJ83PSyUOcB%2BuOV3ry6zUNsjH1S1yHMmffMc0xZGSw9S6ClcLLRVQrMA%2Bo9n7nXLOpUeQ%2B0fQcC6eF7cI%2B5AoGdBaXCAeAHAp2uIJXfbiBtiOnkGzTlON0naq5SxjKmBPSWGIqM6ridD5yjLwZhYZnNP8QFCDWvU5ijC4GHDVGYL5FH2KO8dfZD9bZT54Zmf7f0G6DYGjQDaHoh1ofwgv07wc3LofynwwlD0rJ%2BxVT7C8rEEVntTUbFT%2B4upukO8eSX5lvU6iRXtXqjyO%2BWZ%2FjkZFbuiOvPW54vVe2BwVnk8xFCAExAeVbE9V1NlU94FemVX9NxzCd8tvWLpoDDOWZq%2BreZ%2Bj41wEfNru5bmT0ns%2B0TG4yt3n4hGopsvdNZcYz4LJkUwRhO6SfTkvOAsSYtrkgkp0H4P%2FkMaOIoilv3bhYFcFd5DP7EcNLWsxexz04tbqUsGUjPoOHnwPJclHDb1ST6FTiVzmvtR4tD9mIqpWcdSVaDRDNKECpMcSILfHvDmA4bEsFX0YRkpQlKICBxiaLC5HJcJimoS8W14J5WLMISkxb8GOqUBdjS%2BQslaFTBCKF%2BmG39tcvTc9lqQSnm8fiN1uucXPGI1NPZ%2FtXbtVTaHKOPN9gJI8gWRz8jzOLaHgC4hNPwOcSzElgZU6KwDnsax%2B6BHhPWyPRjjOUnZ%2FH%2FQSi%2B9I85od42ncR%2BbKPCFki9HrtsLfpO3MHsDEqdgnj9sef8AKwt5U730v6Fs%2BIV%2BtaPEB5%2BE5sgBxeBsUFhFDPjiUuWb0ARUxmph&X-Amz-Signature=b4fe2cfa09520fe087f087441fd14eea4124ccae107ce5a70e0349aa16babb43&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637SEHOJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSjfWVCx3yET1cbzg1eIDedE4XKSzbtyg%2Bvnrq2DMXwAiEA96XKfgHqKKh1iMt5zxm3F7UXLfYYucRUmVmK8ayvxAEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGPyzKjLTmVGiVD4fircA2h7fbl7TLFzlZ8pbq8Ythaz2qROwc8sRd4oiIxEvAelCrBFBRt9e44qqa3YQRfe0xADUitmTLY1ufcrRJ83PSyUOcB%2BuOV3ry6zUNsjH1S1yHMmffMc0xZGSw9S6ClcLLRVQrMA%2Bo9n7nXLOpUeQ%2B0fQcC6eF7cI%2B5AoGdBaXCAeAHAp2uIJXfbiBtiOnkGzTlON0naq5SxjKmBPSWGIqM6ridD5yjLwZhYZnNP8QFCDWvU5ijC4GHDVGYL5FH2KO8dfZD9bZT54Zmf7f0G6DYGjQDaHoh1ofwgv07wc3LofynwwlD0rJ%2BxVT7C8rEEVntTUbFT%2B4upukO8eSX5lvU6iRXtXqjyO%2BWZ%2FjkZFbuiOvPW54vVe2BwVnk8xFCAExAeVbE9V1NlU94FemVX9NxzCd8tvWLpoDDOWZq%2BreZ%2Bj41wEfNru5bmT0ns%2B0TG4yt3n4hGopsvdNZcYz4LJkUwRhO6SfTkvOAsSYtrkgkp0H4P%2FkMaOIoilv3bhYFcFd5DP7EcNLWsxexz04tbqUsGUjPoOHnwPJclHDb1ST6FTiVzmvtR4tD9mIqpWcdSVaDRDNKECpMcSILfHvDmA4bEsFX0YRkpQlKICBxiaLC5HJcJimoS8W14J5WLMISkxb8GOqUBdjS%2BQslaFTBCKF%2BmG39tcvTc9lqQSnm8fiN1uucXPGI1NPZ%2FtXbtVTaHKOPN9gJI8gWRz8jzOLaHgC4hNPwOcSzElgZU6KwDnsax%2B6BHhPWyPRjjOUnZ%2FH%2FQSi%2B9I85od42ncR%2BbKPCFki9HrtsLfpO3MHsDEqdgnj9sef8AKwt5U730v6Fs%2BIV%2BtaPEB5%2BE5sgBxeBsUFhFDPjiUuWb0ARUxmph&X-Amz-Signature=7d6de94a3d66ebf58ea852cff676e0b969ebec45c2184681c54679000ca6404d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637SEHOJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSjfWVCx3yET1cbzg1eIDedE4XKSzbtyg%2Bvnrq2DMXwAiEA96XKfgHqKKh1iMt5zxm3F7UXLfYYucRUmVmK8ayvxAEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGPyzKjLTmVGiVD4fircA2h7fbl7TLFzlZ8pbq8Ythaz2qROwc8sRd4oiIxEvAelCrBFBRt9e44qqa3YQRfe0xADUitmTLY1ufcrRJ83PSyUOcB%2BuOV3ry6zUNsjH1S1yHMmffMc0xZGSw9S6ClcLLRVQrMA%2Bo9n7nXLOpUeQ%2B0fQcC6eF7cI%2B5AoGdBaXCAeAHAp2uIJXfbiBtiOnkGzTlON0naq5SxjKmBPSWGIqM6ridD5yjLwZhYZnNP8QFCDWvU5ijC4GHDVGYL5FH2KO8dfZD9bZT54Zmf7f0G6DYGjQDaHoh1ofwgv07wc3LofynwwlD0rJ%2BxVT7C8rEEVntTUbFT%2B4upukO8eSX5lvU6iRXtXqjyO%2BWZ%2FjkZFbuiOvPW54vVe2BwVnk8xFCAExAeVbE9V1NlU94FemVX9NxzCd8tvWLpoDDOWZq%2BreZ%2Bj41wEfNru5bmT0ns%2B0TG4yt3n4hGopsvdNZcYz4LJkUwRhO6SfTkvOAsSYtrkgkp0H4P%2FkMaOIoilv3bhYFcFd5DP7EcNLWsxexz04tbqUsGUjPoOHnwPJclHDb1ST6FTiVzmvtR4tD9mIqpWcdSVaDRDNKECpMcSILfHvDmA4bEsFX0YRkpQlKICBxiaLC5HJcJimoS8W14J5WLMISkxb8GOqUBdjS%2BQslaFTBCKF%2BmG39tcvTc9lqQSnm8fiN1uucXPGI1NPZ%2FtXbtVTaHKOPN9gJI8gWRz8jzOLaHgC4hNPwOcSzElgZU6KwDnsax%2B6BHhPWyPRjjOUnZ%2FH%2FQSi%2B9I85od42ncR%2BbKPCFki9HrtsLfpO3MHsDEqdgnj9sef8AKwt5U730v6Fs%2BIV%2BtaPEB5%2BE5sgBxeBsUFhFDPjiUuWb0ARUxmph&X-Amz-Signature=a46c2a147dc4fcc48370c1f8b27c97300ba8e1d4f9fb2a90b4a8e13a5caebca2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637SEHOJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSjfWVCx3yET1cbzg1eIDedE4XKSzbtyg%2Bvnrq2DMXwAiEA96XKfgHqKKh1iMt5zxm3F7UXLfYYucRUmVmK8ayvxAEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGPyzKjLTmVGiVD4fircA2h7fbl7TLFzlZ8pbq8Ythaz2qROwc8sRd4oiIxEvAelCrBFBRt9e44qqa3YQRfe0xADUitmTLY1ufcrRJ83PSyUOcB%2BuOV3ry6zUNsjH1S1yHMmffMc0xZGSw9S6ClcLLRVQrMA%2Bo9n7nXLOpUeQ%2B0fQcC6eF7cI%2B5AoGdBaXCAeAHAp2uIJXfbiBtiOnkGzTlON0naq5SxjKmBPSWGIqM6ridD5yjLwZhYZnNP8QFCDWvU5ijC4GHDVGYL5FH2KO8dfZD9bZT54Zmf7f0G6DYGjQDaHoh1ofwgv07wc3LofynwwlD0rJ%2BxVT7C8rEEVntTUbFT%2B4upukO8eSX5lvU6iRXtXqjyO%2BWZ%2FjkZFbuiOvPW54vVe2BwVnk8xFCAExAeVbE9V1NlU94FemVX9NxzCd8tvWLpoDDOWZq%2BreZ%2Bj41wEfNru5bmT0ns%2B0TG4yt3n4hGopsvdNZcYz4LJkUwRhO6SfTkvOAsSYtrkgkp0H4P%2FkMaOIoilv3bhYFcFd5DP7EcNLWsxexz04tbqUsGUjPoOHnwPJclHDb1ST6FTiVzmvtR4tD9mIqpWcdSVaDRDNKECpMcSILfHvDmA4bEsFX0YRkpQlKICBxiaLC5HJcJimoS8W14J5WLMISkxb8GOqUBdjS%2BQslaFTBCKF%2BmG39tcvTc9lqQSnm8fiN1uucXPGI1NPZ%2FtXbtVTaHKOPN9gJI8gWRz8jzOLaHgC4hNPwOcSzElgZU6KwDnsax%2B6BHhPWyPRjjOUnZ%2FH%2FQSi%2B9I85od42ncR%2BbKPCFki9HrtsLfpO3MHsDEqdgnj9sef8AKwt5U730v6Fs%2BIV%2BtaPEB5%2BE5sgBxeBsUFhFDPjiUuWb0ARUxmph&X-Amz-Signature=8790ea1562e757d4222dac3b99ab582ef2032240eb4c047ae0ab28b12b243222&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
