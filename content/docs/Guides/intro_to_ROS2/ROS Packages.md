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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJOGVOI%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbPO%2BVO1wNHi8O4szrawM9MVEOD8rQ7c945vnv1yJU3QIhAOAyKyIXbfSZtzhLfjM5dTccnssHdYJmJ%2BxEKHyWZEmuKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvIgOKsBTCN%2FoQF%2F0q3AOYf%2FWJZZkZjM33lOyOIISeLuriFCvPJs2ewJXSRU8R9zgXhFszP6qQIp1SWty89KlRV1K16wDs0636xukqdJj0OC5eWHMzXHPip7X7PjLvWwrFtoaANJ%2FvEOkl%2F4aJ8W4URCTppeHPSjifmgSS3sJ3BRL%2FbrYC9olRQ63gNxgM5c%2BHrd7Vu8JoBYN5SHJITmMl4mg21mf2o9tEXuv3KL2JNbaGVik96Chv7OMRpXq0FCKalS%2BdTzAq2O60ANUvcScGv3czOan3PJnNmR%2BKzEr4wlD5GpSO7cP6VLXEepwWu%2BuI4l11qZLcKDy%2FClzBWw2pZ9FJsTppUpM6kZVervGR7i%2B0B0FKraOiqEOx5CDOzEGUuvXLIDnVfdgxVgrIdrtFpobpPAfcTvfJiIb3EIoZwdoAUMgJXPiSJwIGfPNuSuCO4JZeNN5LzB8VGChq%2FViSrWy2XLclR3kyXhicZkWqHmWXqQuRxJTdq%2BnpiLVnyxiH9yl95oXduy1fay3buhBUk4V43QW%2BI3ffvqae4RvZTDOCJQOFQa01nO4Py3vyzsDYzBC7v1Tl5piszSMGm1cND96Y1cHXZhd4O4Xlb54qlz%2BepYWgEO8j4PDNuuKOAO89UV5Vt1WomFy1izD184zOBjqkAaH5ypNpEfTC05sP%2BX3ugAEFXoBAsOcKDKY%2FpQk83847aA1d%2BDX8q%2ByKYCqEpoOYbDhA%2Fu%2Fktb24EWUjQsZoBQiI5eGuRs53VC4%2FVJ2945bV%2FRAaONDP2P8rK1AjUuWh%2FsFi2VOZAG9koHtGYUSB54HyuaFEw%2BtnHQGSa4FEQ20yfjY62%2BvKTCGEzGo6HQ8e%2FhQRkoLkzwupyG976PcyckTIKG3J&X-Amz-Signature=9696eb9cd23ed378bf27d53cbb75d02815dafc6900679406096e673ca2a61ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJOGVOI%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbPO%2BVO1wNHi8O4szrawM9MVEOD8rQ7c945vnv1yJU3QIhAOAyKyIXbfSZtzhLfjM5dTccnssHdYJmJ%2BxEKHyWZEmuKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvIgOKsBTCN%2FoQF%2F0q3AOYf%2FWJZZkZjM33lOyOIISeLuriFCvPJs2ewJXSRU8R9zgXhFszP6qQIp1SWty89KlRV1K16wDs0636xukqdJj0OC5eWHMzXHPip7X7PjLvWwrFtoaANJ%2FvEOkl%2F4aJ8W4URCTppeHPSjifmgSS3sJ3BRL%2FbrYC9olRQ63gNxgM5c%2BHrd7Vu8JoBYN5SHJITmMl4mg21mf2o9tEXuv3KL2JNbaGVik96Chv7OMRpXq0FCKalS%2BdTzAq2O60ANUvcScGv3czOan3PJnNmR%2BKzEr4wlD5GpSO7cP6VLXEepwWu%2BuI4l11qZLcKDy%2FClzBWw2pZ9FJsTppUpM6kZVervGR7i%2B0B0FKraOiqEOx5CDOzEGUuvXLIDnVfdgxVgrIdrtFpobpPAfcTvfJiIb3EIoZwdoAUMgJXPiSJwIGfPNuSuCO4JZeNN5LzB8VGChq%2FViSrWy2XLclR3kyXhicZkWqHmWXqQuRxJTdq%2BnpiLVnyxiH9yl95oXduy1fay3buhBUk4V43QW%2BI3ffvqae4RvZTDOCJQOFQa01nO4Py3vyzsDYzBC7v1Tl5piszSMGm1cND96Y1cHXZhd4O4Xlb54qlz%2BepYWgEO8j4PDNuuKOAO89UV5Vt1WomFy1izD184zOBjqkAaH5ypNpEfTC05sP%2BX3ugAEFXoBAsOcKDKY%2FpQk83847aA1d%2BDX8q%2ByKYCqEpoOYbDhA%2Fu%2Fktb24EWUjQsZoBQiI5eGuRs53VC4%2FVJ2945bV%2FRAaONDP2P8rK1AjUuWh%2FsFi2VOZAG9koHtGYUSB54HyuaFEw%2BtnHQGSa4FEQ20yfjY62%2BvKTCGEzGo6HQ8e%2FhQRkoLkzwupyG976PcyckTIKG3J&X-Amz-Signature=936c1766621c278bb6cb5cd8d834660ec031eb85f7f75d99415a827faf686774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJOGVOI%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbPO%2BVO1wNHi8O4szrawM9MVEOD8rQ7c945vnv1yJU3QIhAOAyKyIXbfSZtzhLfjM5dTccnssHdYJmJ%2BxEKHyWZEmuKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvIgOKsBTCN%2FoQF%2F0q3AOYf%2FWJZZkZjM33lOyOIISeLuriFCvPJs2ewJXSRU8R9zgXhFszP6qQIp1SWty89KlRV1K16wDs0636xukqdJj0OC5eWHMzXHPip7X7PjLvWwrFtoaANJ%2FvEOkl%2F4aJ8W4URCTppeHPSjifmgSS3sJ3BRL%2FbrYC9olRQ63gNxgM5c%2BHrd7Vu8JoBYN5SHJITmMl4mg21mf2o9tEXuv3KL2JNbaGVik96Chv7OMRpXq0FCKalS%2BdTzAq2O60ANUvcScGv3czOan3PJnNmR%2BKzEr4wlD5GpSO7cP6VLXEepwWu%2BuI4l11qZLcKDy%2FClzBWw2pZ9FJsTppUpM6kZVervGR7i%2B0B0FKraOiqEOx5CDOzEGUuvXLIDnVfdgxVgrIdrtFpobpPAfcTvfJiIb3EIoZwdoAUMgJXPiSJwIGfPNuSuCO4JZeNN5LzB8VGChq%2FViSrWy2XLclR3kyXhicZkWqHmWXqQuRxJTdq%2BnpiLVnyxiH9yl95oXduy1fay3buhBUk4V43QW%2BI3ffvqae4RvZTDOCJQOFQa01nO4Py3vyzsDYzBC7v1Tl5piszSMGm1cND96Y1cHXZhd4O4Xlb54qlz%2BepYWgEO8j4PDNuuKOAO89UV5Vt1WomFy1izD184zOBjqkAaH5ypNpEfTC05sP%2BX3ugAEFXoBAsOcKDKY%2FpQk83847aA1d%2BDX8q%2ByKYCqEpoOYbDhA%2Fu%2Fktb24EWUjQsZoBQiI5eGuRs53VC4%2FVJ2945bV%2FRAaONDP2P8rK1AjUuWh%2FsFi2VOZAG9koHtGYUSB54HyuaFEw%2BtnHQGSa4FEQ20yfjY62%2BvKTCGEzGo6HQ8e%2FhQRkoLkzwupyG976PcyckTIKG3J&X-Amz-Signature=0f27f3528fa2ee707ca179cf31bdae83822167f7dc9208d78415bff63733dd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJOGVOI%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbPO%2BVO1wNHi8O4szrawM9MVEOD8rQ7c945vnv1yJU3QIhAOAyKyIXbfSZtzhLfjM5dTccnssHdYJmJ%2BxEKHyWZEmuKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvIgOKsBTCN%2FoQF%2F0q3AOYf%2FWJZZkZjM33lOyOIISeLuriFCvPJs2ewJXSRU8R9zgXhFszP6qQIp1SWty89KlRV1K16wDs0636xukqdJj0OC5eWHMzXHPip7X7PjLvWwrFtoaANJ%2FvEOkl%2F4aJ8W4URCTppeHPSjifmgSS3sJ3BRL%2FbrYC9olRQ63gNxgM5c%2BHrd7Vu8JoBYN5SHJITmMl4mg21mf2o9tEXuv3KL2JNbaGVik96Chv7OMRpXq0FCKalS%2BdTzAq2O60ANUvcScGv3czOan3PJnNmR%2BKzEr4wlD5GpSO7cP6VLXEepwWu%2BuI4l11qZLcKDy%2FClzBWw2pZ9FJsTppUpM6kZVervGR7i%2B0B0FKraOiqEOx5CDOzEGUuvXLIDnVfdgxVgrIdrtFpobpPAfcTvfJiIb3EIoZwdoAUMgJXPiSJwIGfPNuSuCO4JZeNN5LzB8VGChq%2FViSrWy2XLclR3kyXhicZkWqHmWXqQuRxJTdq%2BnpiLVnyxiH9yl95oXduy1fay3buhBUk4V43QW%2BI3ffvqae4RvZTDOCJQOFQa01nO4Py3vyzsDYzBC7v1Tl5piszSMGm1cND96Y1cHXZhd4O4Xlb54qlz%2BepYWgEO8j4PDNuuKOAO89UV5Vt1WomFy1izD184zOBjqkAaH5ypNpEfTC05sP%2BX3ugAEFXoBAsOcKDKY%2FpQk83847aA1d%2BDX8q%2ByKYCqEpoOYbDhA%2Fu%2Fktb24EWUjQsZoBQiI5eGuRs53VC4%2FVJ2945bV%2FRAaONDP2P8rK1AjUuWh%2FsFi2VOZAG9koHtGYUSB54HyuaFEw%2BtnHQGSa4FEQ20yfjY62%2BvKTCGEzGo6HQ8e%2FhQRkoLkzwupyG976PcyckTIKG3J&X-Amz-Signature=83993e6e4cc79c881257a7b550f6c2df10fd1a829128c14961e9737ec8049653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJOGVOI%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbPO%2BVO1wNHi8O4szrawM9MVEOD8rQ7c945vnv1yJU3QIhAOAyKyIXbfSZtzhLfjM5dTccnssHdYJmJ%2BxEKHyWZEmuKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvIgOKsBTCN%2FoQF%2F0q3AOYf%2FWJZZkZjM33lOyOIISeLuriFCvPJs2ewJXSRU8R9zgXhFszP6qQIp1SWty89KlRV1K16wDs0636xukqdJj0OC5eWHMzXHPip7X7PjLvWwrFtoaANJ%2FvEOkl%2F4aJ8W4URCTppeHPSjifmgSS3sJ3BRL%2FbrYC9olRQ63gNxgM5c%2BHrd7Vu8JoBYN5SHJITmMl4mg21mf2o9tEXuv3KL2JNbaGVik96Chv7OMRpXq0FCKalS%2BdTzAq2O60ANUvcScGv3czOan3PJnNmR%2BKzEr4wlD5GpSO7cP6VLXEepwWu%2BuI4l11qZLcKDy%2FClzBWw2pZ9FJsTppUpM6kZVervGR7i%2B0B0FKraOiqEOx5CDOzEGUuvXLIDnVfdgxVgrIdrtFpobpPAfcTvfJiIb3EIoZwdoAUMgJXPiSJwIGfPNuSuCO4JZeNN5LzB8VGChq%2FViSrWy2XLclR3kyXhicZkWqHmWXqQuRxJTdq%2BnpiLVnyxiH9yl95oXduy1fay3buhBUk4V43QW%2BI3ffvqae4RvZTDOCJQOFQa01nO4Py3vyzsDYzBC7v1Tl5piszSMGm1cND96Y1cHXZhd4O4Xlb54qlz%2BepYWgEO8j4PDNuuKOAO89UV5Vt1WomFy1izD184zOBjqkAaH5ypNpEfTC05sP%2BX3ugAEFXoBAsOcKDKY%2FpQk83847aA1d%2BDX8q%2ByKYCqEpoOYbDhA%2Fu%2Fktb24EWUjQsZoBQiI5eGuRs53VC4%2FVJ2945bV%2FRAaONDP2P8rK1AjUuWh%2FsFi2VOZAG9koHtGYUSB54HyuaFEw%2BtnHQGSa4FEQ20yfjY62%2BvKTCGEzGo6HQ8e%2FhQRkoLkzwupyG976PcyckTIKG3J&X-Amz-Signature=13b8928c89409e9346ba6af735f7667251a4285584f1dde91ffe188bd36722c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJOGVOI%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbPO%2BVO1wNHi8O4szrawM9MVEOD8rQ7c945vnv1yJU3QIhAOAyKyIXbfSZtzhLfjM5dTccnssHdYJmJ%2BxEKHyWZEmuKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvIgOKsBTCN%2FoQF%2F0q3AOYf%2FWJZZkZjM33lOyOIISeLuriFCvPJs2ewJXSRU8R9zgXhFszP6qQIp1SWty89KlRV1K16wDs0636xukqdJj0OC5eWHMzXHPip7X7PjLvWwrFtoaANJ%2FvEOkl%2F4aJ8W4URCTppeHPSjifmgSS3sJ3BRL%2FbrYC9olRQ63gNxgM5c%2BHrd7Vu8JoBYN5SHJITmMl4mg21mf2o9tEXuv3KL2JNbaGVik96Chv7OMRpXq0FCKalS%2BdTzAq2O60ANUvcScGv3czOan3PJnNmR%2BKzEr4wlD5GpSO7cP6VLXEepwWu%2BuI4l11qZLcKDy%2FClzBWw2pZ9FJsTppUpM6kZVervGR7i%2B0B0FKraOiqEOx5CDOzEGUuvXLIDnVfdgxVgrIdrtFpobpPAfcTvfJiIb3EIoZwdoAUMgJXPiSJwIGfPNuSuCO4JZeNN5LzB8VGChq%2FViSrWy2XLclR3kyXhicZkWqHmWXqQuRxJTdq%2BnpiLVnyxiH9yl95oXduy1fay3buhBUk4V43QW%2BI3ffvqae4RvZTDOCJQOFQa01nO4Py3vyzsDYzBC7v1Tl5piszSMGm1cND96Y1cHXZhd4O4Xlb54qlz%2BepYWgEO8j4PDNuuKOAO89UV5Vt1WomFy1izD184zOBjqkAaH5ypNpEfTC05sP%2BX3ugAEFXoBAsOcKDKY%2FpQk83847aA1d%2BDX8q%2ByKYCqEpoOYbDhA%2Fu%2Fktb24EWUjQsZoBQiI5eGuRs53VC4%2FVJ2945bV%2FRAaONDP2P8rK1AjUuWh%2FsFi2VOZAG9koHtGYUSB54HyuaFEw%2BtnHQGSa4FEQ20yfjY62%2BvKTCGEzGo6HQ8e%2FhQRkoLkzwupyG976PcyckTIKG3J&X-Amz-Signature=6e3d5120aff3cd2280a5f9d807b67a5c61427b57c111a7091d6e6f89118cfb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJOGVOI%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbPO%2BVO1wNHi8O4szrawM9MVEOD8rQ7c945vnv1yJU3QIhAOAyKyIXbfSZtzhLfjM5dTccnssHdYJmJ%2BxEKHyWZEmuKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvIgOKsBTCN%2FoQF%2F0q3AOYf%2FWJZZkZjM33lOyOIISeLuriFCvPJs2ewJXSRU8R9zgXhFszP6qQIp1SWty89KlRV1K16wDs0636xukqdJj0OC5eWHMzXHPip7X7PjLvWwrFtoaANJ%2FvEOkl%2F4aJ8W4URCTppeHPSjifmgSS3sJ3BRL%2FbrYC9olRQ63gNxgM5c%2BHrd7Vu8JoBYN5SHJITmMl4mg21mf2o9tEXuv3KL2JNbaGVik96Chv7OMRpXq0FCKalS%2BdTzAq2O60ANUvcScGv3czOan3PJnNmR%2BKzEr4wlD5GpSO7cP6VLXEepwWu%2BuI4l11qZLcKDy%2FClzBWw2pZ9FJsTppUpM6kZVervGR7i%2B0B0FKraOiqEOx5CDOzEGUuvXLIDnVfdgxVgrIdrtFpobpPAfcTvfJiIb3EIoZwdoAUMgJXPiSJwIGfPNuSuCO4JZeNN5LzB8VGChq%2FViSrWy2XLclR3kyXhicZkWqHmWXqQuRxJTdq%2BnpiLVnyxiH9yl95oXduy1fay3buhBUk4V43QW%2BI3ffvqae4RvZTDOCJQOFQa01nO4Py3vyzsDYzBC7v1Tl5piszSMGm1cND96Y1cHXZhd4O4Xlb54qlz%2BepYWgEO8j4PDNuuKOAO89UV5Vt1WomFy1izD184zOBjqkAaH5ypNpEfTC05sP%2BX3ugAEFXoBAsOcKDKY%2FpQk83847aA1d%2BDX8q%2ByKYCqEpoOYbDhA%2Fu%2Fktb24EWUjQsZoBQiI5eGuRs53VC4%2FVJ2945bV%2FRAaONDP2P8rK1AjUuWh%2FsFi2VOZAG9koHtGYUSB54HyuaFEw%2BtnHQGSa4FEQ20yfjY62%2BvKTCGEzGo6HQ8e%2FhQRkoLkzwupyG976PcyckTIKG3J&X-Amz-Signature=b3b57f0bd3ffb18959fc3a2a3a43aa410a859c8fbfa74fa58d73b623984aa401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
