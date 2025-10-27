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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBOMKZ5%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1bWvUareG5T4CI7BBe9nytLdQWoHMy0ECckwjX08BKAiBMzgXgiXuXhwAJjXfGl2%2BNmcWsJQ%2FVyXYPcMMtPxGeKSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTlPbsCx1MA4vudmKtwDxeluGJ6it6RoOVp9GI6s2ImC1RkSVBL6JUi62nNardNxJqnzKI7zTTxPecWEdnsupTtoZYIQEcRMbSiU9mdPOrmC5WKrGJ8pmKzkw402a02Rux5W0p0A2guEST99uahSk%2BpjuzeKkzeViRaizUN1len1w2Cv1mnHn4uCWAhQmYBgMmFhPHpj2J1B9W5pEeFXqj%2FYEMDJan0E6W63pMENcJDPBpTmA8Ncg2IojeYDCvVcEg%2Bfhrj3ny0g%2But8k0me1WGd5UP%2B7dmSCFAYrPZcZ3ZIsFOmUW812ZDiA7CuQstfxfXu%2FFWT16olkehfUHWRd5hHQCeFdXJVB9cuEcmv19OZkbriAAR6H8bxZETpX9hZBeppIUgr98Lr2xSvfVJP3rn3jAgaxJxSmuDGnSrL%2BSI2BSJ6C%2Filo65S9j4b5xj6c%2FMK7tnfsBuKlj7UTHtY3FAfuxoDRhW81oszoDhPmgKkS9cHb%2Fe52mb2ruViWXfItjUAZLUS0ewP3%2BLpAzx9vDeRoJiSP2dPEayZDJIorUiJdwmcPApMVRnTjsQnONmlyvYjmpvAvZDMOWCRfV%2BgYMVt%2BQ4oJmTGIDE2AInmXsTTz%2B9WVsYsJJngpvaqJeBqRxvRjasHuTXTt2Uwi4%2F7xwY6pgHeeyYLoFaXU5dF8%2FmI1we5RKImOG0gBNCZcN5aUyrGaiZ%2FD0xNgQb2EKNcYhaXXUT3rtqoL66DqFh81fQwO50fTaQF9xVl47zMMj9fBuQ32qIkft0EJanKk08QXZ1VRiOUskCq3Oew2ZQhNbFxBHiP8J1xrbjtecdDLy5prXkmc5JrTjyGSvSRY%2BE3w%2FOBJl5EI2Ep%2BlNTxzNd7pMiP6nKvKyjL8Ms&X-Amz-Signature=85e18b10005797ccffcdf8fba8fa99e79a18bf77e5b1f089c7e088870078e2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBOMKZ5%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1bWvUareG5T4CI7BBe9nytLdQWoHMy0ECckwjX08BKAiBMzgXgiXuXhwAJjXfGl2%2BNmcWsJQ%2FVyXYPcMMtPxGeKSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTlPbsCx1MA4vudmKtwDxeluGJ6it6RoOVp9GI6s2ImC1RkSVBL6JUi62nNardNxJqnzKI7zTTxPecWEdnsupTtoZYIQEcRMbSiU9mdPOrmC5WKrGJ8pmKzkw402a02Rux5W0p0A2guEST99uahSk%2BpjuzeKkzeViRaizUN1len1w2Cv1mnHn4uCWAhQmYBgMmFhPHpj2J1B9W5pEeFXqj%2FYEMDJan0E6W63pMENcJDPBpTmA8Ncg2IojeYDCvVcEg%2Bfhrj3ny0g%2But8k0me1WGd5UP%2B7dmSCFAYrPZcZ3ZIsFOmUW812ZDiA7CuQstfxfXu%2FFWT16olkehfUHWRd5hHQCeFdXJVB9cuEcmv19OZkbriAAR6H8bxZETpX9hZBeppIUgr98Lr2xSvfVJP3rn3jAgaxJxSmuDGnSrL%2BSI2BSJ6C%2Filo65S9j4b5xj6c%2FMK7tnfsBuKlj7UTHtY3FAfuxoDRhW81oszoDhPmgKkS9cHb%2Fe52mb2ruViWXfItjUAZLUS0ewP3%2BLpAzx9vDeRoJiSP2dPEayZDJIorUiJdwmcPApMVRnTjsQnONmlyvYjmpvAvZDMOWCRfV%2BgYMVt%2BQ4oJmTGIDE2AInmXsTTz%2B9WVsYsJJngpvaqJeBqRxvRjasHuTXTt2Uwi4%2F7xwY6pgHeeyYLoFaXU5dF8%2FmI1we5RKImOG0gBNCZcN5aUyrGaiZ%2FD0xNgQb2EKNcYhaXXUT3rtqoL66DqFh81fQwO50fTaQF9xVl47zMMj9fBuQ32qIkft0EJanKk08QXZ1VRiOUskCq3Oew2ZQhNbFxBHiP8J1xrbjtecdDLy5prXkmc5JrTjyGSvSRY%2BE3w%2FOBJl5EI2Ep%2BlNTxzNd7pMiP6nKvKyjL8Ms&X-Amz-Signature=1dbb62760aabee7dbe62afcbecdd7f169cbca318445f342c8e0f064aa871d0f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBOMKZ5%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1bWvUareG5T4CI7BBe9nytLdQWoHMy0ECckwjX08BKAiBMzgXgiXuXhwAJjXfGl2%2BNmcWsJQ%2FVyXYPcMMtPxGeKSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTlPbsCx1MA4vudmKtwDxeluGJ6it6RoOVp9GI6s2ImC1RkSVBL6JUi62nNardNxJqnzKI7zTTxPecWEdnsupTtoZYIQEcRMbSiU9mdPOrmC5WKrGJ8pmKzkw402a02Rux5W0p0A2guEST99uahSk%2BpjuzeKkzeViRaizUN1len1w2Cv1mnHn4uCWAhQmYBgMmFhPHpj2J1B9W5pEeFXqj%2FYEMDJan0E6W63pMENcJDPBpTmA8Ncg2IojeYDCvVcEg%2Bfhrj3ny0g%2But8k0me1WGd5UP%2B7dmSCFAYrPZcZ3ZIsFOmUW812ZDiA7CuQstfxfXu%2FFWT16olkehfUHWRd5hHQCeFdXJVB9cuEcmv19OZkbriAAR6H8bxZETpX9hZBeppIUgr98Lr2xSvfVJP3rn3jAgaxJxSmuDGnSrL%2BSI2BSJ6C%2Filo65S9j4b5xj6c%2FMK7tnfsBuKlj7UTHtY3FAfuxoDRhW81oszoDhPmgKkS9cHb%2Fe52mb2ruViWXfItjUAZLUS0ewP3%2BLpAzx9vDeRoJiSP2dPEayZDJIorUiJdwmcPApMVRnTjsQnONmlyvYjmpvAvZDMOWCRfV%2BgYMVt%2BQ4oJmTGIDE2AInmXsTTz%2B9WVsYsJJngpvaqJeBqRxvRjasHuTXTt2Uwi4%2F7xwY6pgHeeyYLoFaXU5dF8%2FmI1we5RKImOG0gBNCZcN5aUyrGaiZ%2FD0xNgQb2EKNcYhaXXUT3rtqoL66DqFh81fQwO50fTaQF9xVl47zMMj9fBuQ32qIkft0EJanKk08QXZ1VRiOUskCq3Oew2ZQhNbFxBHiP8J1xrbjtecdDLy5prXkmc5JrTjyGSvSRY%2BE3w%2FOBJl5EI2Ep%2BlNTxzNd7pMiP6nKvKyjL8Ms&X-Amz-Signature=7ba2bfb5c9dd9325dfcf497a2aa98f9b62cf32f382acd671dc16285ac7e3ef61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBOMKZ5%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1bWvUareG5T4CI7BBe9nytLdQWoHMy0ECckwjX08BKAiBMzgXgiXuXhwAJjXfGl2%2BNmcWsJQ%2FVyXYPcMMtPxGeKSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTlPbsCx1MA4vudmKtwDxeluGJ6it6RoOVp9GI6s2ImC1RkSVBL6JUi62nNardNxJqnzKI7zTTxPecWEdnsupTtoZYIQEcRMbSiU9mdPOrmC5WKrGJ8pmKzkw402a02Rux5W0p0A2guEST99uahSk%2BpjuzeKkzeViRaizUN1len1w2Cv1mnHn4uCWAhQmYBgMmFhPHpj2J1B9W5pEeFXqj%2FYEMDJan0E6W63pMENcJDPBpTmA8Ncg2IojeYDCvVcEg%2Bfhrj3ny0g%2But8k0me1WGd5UP%2B7dmSCFAYrPZcZ3ZIsFOmUW812ZDiA7CuQstfxfXu%2FFWT16olkehfUHWRd5hHQCeFdXJVB9cuEcmv19OZkbriAAR6H8bxZETpX9hZBeppIUgr98Lr2xSvfVJP3rn3jAgaxJxSmuDGnSrL%2BSI2BSJ6C%2Filo65S9j4b5xj6c%2FMK7tnfsBuKlj7UTHtY3FAfuxoDRhW81oszoDhPmgKkS9cHb%2Fe52mb2ruViWXfItjUAZLUS0ewP3%2BLpAzx9vDeRoJiSP2dPEayZDJIorUiJdwmcPApMVRnTjsQnONmlyvYjmpvAvZDMOWCRfV%2BgYMVt%2BQ4oJmTGIDE2AInmXsTTz%2B9WVsYsJJngpvaqJeBqRxvRjasHuTXTt2Uwi4%2F7xwY6pgHeeyYLoFaXU5dF8%2FmI1we5RKImOG0gBNCZcN5aUyrGaiZ%2FD0xNgQb2EKNcYhaXXUT3rtqoL66DqFh81fQwO50fTaQF9xVl47zMMj9fBuQ32qIkft0EJanKk08QXZ1VRiOUskCq3Oew2ZQhNbFxBHiP8J1xrbjtecdDLy5prXkmc5JrTjyGSvSRY%2BE3w%2FOBJl5EI2Ep%2BlNTxzNd7pMiP6nKvKyjL8Ms&X-Amz-Signature=dcd56968ae5eeddf723b5734cfd0cf4ee6500e5251ebacd04459176bd7b1a484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBOMKZ5%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1bWvUareG5T4CI7BBe9nytLdQWoHMy0ECckwjX08BKAiBMzgXgiXuXhwAJjXfGl2%2BNmcWsJQ%2FVyXYPcMMtPxGeKSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTlPbsCx1MA4vudmKtwDxeluGJ6it6RoOVp9GI6s2ImC1RkSVBL6JUi62nNardNxJqnzKI7zTTxPecWEdnsupTtoZYIQEcRMbSiU9mdPOrmC5WKrGJ8pmKzkw402a02Rux5W0p0A2guEST99uahSk%2BpjuzeKkzeViRaizUN1len1w2Cv1mnHn4uCWAhQmYBgMmFhPHpj2J1B9W5pEeFXqj%2FYEMDJan0E6W63pMENcJDPBpTmA8Ncg2IojeYDCvVcEg%2Bfhrj3ny0g%2But8k0me1WGd5UP%2B7dmSCFAYrPZcZ3ZIsFOmUW812ZDiA7CuQstfxfXu%2FFWT16olkehfUHWRd5hHQCeFdXJVB9cuEcmv19OZkbriAAR6H8bxZETpX9hZBeppIUgr98Lr2xSvfVJP3rn3jAgaxJxSmuDGnSrL%2BSI2BSJ6C%2Filo65S9j4b5xj6c%2FMK7tnfsBuKlj7UTHtY3FAfuxoDRhW81oszoDhPmgKkS9cHb%2Fe52mb2ruViWXfItjUAZLUS0ewP3%2BLpAzx9vDeRoJiSP2dPEayZDJIorUiJdwmcPApMVRnTjsQnONmlyvYjmpvAvZDMOWCRfV%2BgYMVt%2BQ4oJmTGIDE2AInmXsTTz%2B9WVsYsJJngpvaqJeBqRxvRjasHuTXTt2Uwi4%2F7xwY6pgHeeyYLoFaXU5dF8%2FmI1we5RKImOG0gBNCZcN5aUyrGaiZ%2FD0xNgQb2EKNcYhaXXUT3rtqoL66DqFh81fQwO50fTaQF9xVl47zMMj9fBuQ32qIkft0EJanKk08QXZ1VRiOUskCq3Oew2ZQhNbFxBHiP8J1xrbjtecdDLy5prXkmc5JrTjyGSvSRY%2BE3w%2FOBJl5EI2Ep%2BlNTxzNd7pMiP6nKvKyjL8Ms&X-Amz-Signature=c1038d3828fb87862ad66f209811b4f2b351052cd07794ba0a00b23c6ce48538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBOMKZ5%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1bWvUareG5T4CI7BBe9nytLdQWoHMy0ECckwjX08BKAiBMzgXgiXuXhwAJjXfGl2%2BNmcWsJQ%2FVyXYPcMMtPxGeKSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTlPbsCx1MA4vudmKtwDxeluGJ6it6RoOVp9GI6s2ImC1RkSVBL6JUi62nNardNxJqnzKI7zTTxPecWEdnsupTtoZYIQEcRMbSiU9mdPOrmC5WKrGJ8pmKzkw402a02Rux5W0p0A2guEST99uahSk%2BpjuzeKkzeViRaizUN1len1w2Cv1mnHn4uCWAhQmYBgMmFhPHpj2J1B9W5pEeFXqj%2FYEMDJan0E6W63pMENcJDPBpTmA8Ncg2IojeYDCvVcEg%2Bfhrj3ny0g%2But8k0me1WGd5UP%2B7dmSCFAYrPZcZ3ZIsFOmUW812ZDiA7CuQstfxfXu%2FFWT16olkehfUHWRd5hHQCeFdXJVB9cuEcmv19OZkbriAAR6H8bxZETpX9hZBeppIUgr98Lr2xSvfVJP3rn3jAgaxJxSmuDGnSrL%2BSI2BSJ6C%2Filo65S9j4b5xj6c%2FMK7tnfsBuKlj7UTHtY3FAfuxoDRhW81oszoDhPmgKkS9cHb%2Fe52mb2ruViWXfItjUAZLUS0ewP3%2BLpAzx9vDeRoJiSP2dPEayZDJIorUiJdwmcPApMVRnTjsQnONmlyvYjmpvAvZDMOWCRfV%2BgYMVt%2BQ4oJmTGIDE2AInmXsTTz%2B9WVsYsJJngpvaqJeBqRxvRjasHuTXTt2Uwi4%2F7xwY6pgHeeyYLoFaXU5dF8%2FmI1we5RKImOG0gBNCZcN5aUyrGaiZ%2FD0xNgQb2EKNcYhaXXUT3rtqoL66DqFh81fQwO50fTaQF9xVl47zMMj9fBuQ32qIkft0EJanKk08QXZ1VRiOUskCq3Oew2ZQhNbFxBHiP8J1xrbjtecdDLy5prXkmc5JrTjyGSvSRY%2BE3w%2FOBJl5EI2Ep%2BlNTxzNd7pMiP6nKvKyjL8Ms&X-Amz-Signature=1ac5181c37f978149d315404f39ddf59e4e11dd25ebb60ad50cca0328f6e798a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBOMKZ5%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1bWvUareG5T4CI7BBe9nytLdQWoHMy0ECckwjX08BKAiBMzgXgiXuXhwAJjXfGl2%2BNmcWsJQ%2FVyXYPcMMtPxGeKSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfTlPbsCx1MA4vudmKtwDxeluGJ6it6RoOVp9GI6s2ImC1RkSVBL6JUi62nNardNxJqnzKI7zTTxPecWEdnsupTtoZYIQEcRMbSiU9mdPOrmC5WKrGJ8pmKzkw402a02Rux5W0p0A2guEST99uahSk%2BpjuzeKkzeViRaizUN1len1w2Cv1mnHn4uCWAhQmYBgMmFhPHpj2J1B9W5pEeFXqj%2FYEMDJan0E6W63pMENcJDPBpTmA8Ncg2IojeYDCvVcEg%2Bfhrj3ny0g%2But8k0me1WGd5UP%2B7dmSCFAYrPZcZ3ZIsFOmUW812ZDiA7CuQstfxfXu%2FFWT16olkehfUHWRd5hHQCeFdXJVB9cuEcmv19OZkbriAAR6H8bxZETpX9hZBeppIUgr98Lr2xSvfVJP3rn3jAgaxJxSmuDGnSrL%2BSI2BSJ6C%2Filo65S9j4b5xj6c%2FMK7tnfsBuKlj7UTHtY3FAfuxoDRhW81oszoDhPmgKkS9cHb%2Fe52mb2ruViWXfItjUAZLUS0ewP3%2BLpAzx9vDeRoJiSP2dPEayZDJIorUiJdwmcPApMVRnTjsQnONmlyvYjmpvAvZDMOWCRfV%2BgYMVt%2BQ4oJmTGIDE2AInmXsTTz%2B9WVsYsJJngpvaqJeBqRxvRjasHuTXTt2Uwi4%2F7xwY6pgHeeyYLoFaXU5dF8%2FmI1we5RKImOG0gBNCZcN5aUyrGaiZ%2FD0xNgQb2EKNcYhaXXUT3rtqoL66DqFh81fQwO50fTaQF9xVl47zMMj9fBuQ32qIkft0EJanKk08QXZ1VRiOUskCq3Oew2ZQhNbFxBHiP8J1xrbjtecdDLy5prXkmc5JrTjyGSvSRY%2BE3w%2FOBJl5EI2Ep%2BlNTxzNd7pMiP6nKvKyjL8Ms&X-Amz-Signature=4130c7b4077e0ec7e9e342ac8ea5df48b7a46217401e7f2a3234976af42d0492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
