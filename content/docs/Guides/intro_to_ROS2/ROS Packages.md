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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE2CGMG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCoLeUvcV4UnH2RyRehCOQAHzxpF%2B81ZGzAWR4vTkCW6AIhAKHnkm2t%2FYhStcbJn4eC0qah57qCAMEX5MadEbaC3QTSKv8DCDIQABoMNjM3NDIzMTgzODA1IgyLOCnrCbO6BZpBOOEq3AO8NbFLcDC9xzm21OuAbKr2bMnyORiRsZxgIDbiQeuWx0HChRZC5%2F5%2BwcKeCowX61t7D5RxPm1zwAvhgOUpWJrJmL5TNQIPBPMGg40e%2FbV2SFf0MbmMYFI4%2BqQIboKhMgq2%2F4RPJEBUJAVNBcxYCS3iMfG9AL4dM9Ki5JATNsNH15VEAP9ZoYVKZZ9lq1OSIRkgnat5kJBpuMvlBS%2Bi3BE9Yf37Z4pqY2FesoBoTDKt45ji7fZwcPnhK44lQdUzU5liIUGHuKMKZhfiaxGeQJ651%2ByFsuJTHKih%2FB2mdNqtlvbte2FfLq7kq4kpKnFwMi%2B0dUcXnOCOrf8oNupj6Fy03Zarb7j9Dg6iSlq1DwCL6dc6%2Bhw9Y7KO7mc9y%2BFMYWRwzCzlLuhSn3r%2BCqywGEp26p5r6ssYpX4U5jx%2B1ptIcA95YAww5trfRCHKKahHBAWGGBKIJPoWNC1NPR267N21%2FzS87QE2nzqTFh1bqFLhZC8ze0ol%2FArE%2Fa7rmUURAcePHpryDNg4qk0GsLJj3JywUvNDZmTxcAyZzhwrfGEXgYrtkY4fiiPsCQdalNbjbVHLwgcWiqhtmZtIf3CrP8JIzIeICxN4lngllhTC3Xq6SjC2gcyRgvuGl%2FtPcjCjlaDDBjqkATCgwrkrXq5HQkrhR41YiJVzOa2U7E0HYxKimrvEDBr3yBfSyzsEuFd154u0HckhgJbpdZUqjLi%2BFyXCyy7JxmDHLZv47SHTFQXVKxTcKsc%2BkddTw9jW26PHhqpv2T%2BXCNfV98jsRqAZuzXJjkv%2BZTUsA93J4TKb94aP%2BTZnHf34xTD0kVyOQUIedeWxchgvgHk2L5dFvz3FDQ2fDOWQhrnXOc3I&X-Amz-Signature=0276419006c00570f990ed533264b843fdaf0da1d1916794e3e1f9ca6d3b4fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE2CGMG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCoLeUvcV4UnH2RyRehCOQAHzxpF%2B81ZGzAWR4vTkCW6AIhAKHnkm2t%2FYhStcbJn4eC0qah57qCAMEX5MadEbaC3QTSKv8DCDIQABoMNjM3NDIzMTgzODA1IgyLOCnrCbO6BZpBOOEq3AO8NbFLcDC9xzm21OuAbKr2bMnyORiRsZxgIDbiQeuWx0HChRZC5%2F5%2BwcKeCowX61t7D5RxPm1zwAvhgOUpWJrJmL5TNQIPBPMGg40e%2FbV2SFf0MbmMYFI4%2BqQIboKhMgq2%2F4RPJEBUJAVNBcxYCS3iMfG9AL4dM9Ki5JATNsNH15VEAP9ZoYVKZZ9lq1OSIRkgnat5kJBpuMvlBS%2Bi3BE9Yf37Z4pqY2FesoBoTDKt45ji7fZwcPnhK44lQdUzU5liIUGHuKMKZhfiaxGeQJ651%2ByFsuJTHKih%2FB2mdNqtlvbte2FfLq7kq4kpKnFwMi%2B0dUcXnOCOrf8oNupj6Fy03Zarb7j9Dg6iSlq1DwCL6dc6%2Bhw9Y7KO7mc9y%2BFMYWRwzCzlLuhSn3r%2BCqywGEp26p5r6ssYpX4U5jx%2B1ptIcA95YAww5trfRCHKKahHBAWGGBKIJPoWNC1NPR267N21%2FzS87QE2nzqTFh1bqFLhZC8ze0ol%2FArE%2Fa7rmUURAcePHpryDNg4qk0GsLJj3JywUvNDZmTxcAyZzhwrfGEXgYrtkY4fiiPsCQdalNbjbVHLwgcWiqhtmZtIf3CrP8JIzIeICxN4lngllhTC3Xq6SjC2gcyRgvuGl%2FtPcjCjlaDDBjqkATCgwrkrXq5HQkrhR41YiJVzOa2U7E0HYxKimrvEDBr3yBfSyzsEuFd154u0HckhgJbpdZUqjLi%2BFyXCyy7JxmDHLZv47SHTFQXVKxTcKsc%2BkddTw9jW26PHhqpv2T%2BXCNfV98jsRqAZuzXJjkv%2BZTUsA93J4TKb94aP%2BTZnHf34xTD0kVyOQUIedeWxchgvgHk2L5dFvz3FDQ2fDOWQhrnXOc3I&X-Amz-Signature=dac2251980dc2880af694ab65abddea0a05c5fd1931eb0c05450ac4909819025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE2CGMG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCoLeUvcV4UnH2RyRehCOQAHzxpF%2B81ZGzAWR4vTkCW6AIhAKHnkm2t%2FYhStcbJn4eC0qah57qCAMEX5MadEbaC3QTSKv8DCDIQABoMNjM3NDIzMTgzODA1IgyLOCnrCbO6BZpBOOEq3AO8NbFLcDC9xzm21OuAbKr2bMnyORiRsZxgIDbiQeuWx0HChRZC5%2F5%2BwcKeCowX61t7D5RxPm1zwAvhgOUpWJrJmL5TNQIPBPMGg40e%2FbV2SFf0MbmMYFI4%2BqQIboKhMgq2%2F4RPJEBUJAVNBcxYCS3iMfG9AL4dM9Ki5JATNsNH15VEAP9ZoYVKZZ9lq1OSIRkgnat5kJBpuMvlBS%2Bi3BE9Yf37Z4pqY2FesoBoTDKt45ji7fZwcPnhK44lQdUzU5liIUGHuKMKZhfiaxGeQJ651%2ByFsuJTHKih%2FB2mdNqtlvbte2FfLq7kq4kpKnFwMi%2B0dUcXnOCOrf8oNupj6Fy03Zarb7j9Dg6iSlq1DwCL6dc6%2Bhw9Y7KO7mc9y%2BFMYWRwzCzlLuhSn3r%2BCqywGEp26p5r6ssYpX4U5jx%2B1ptIcA95YAww5trfRCHKKahHBAWGGBKIJPoWNC1NPR267N21%2FzS87QE2nzqTFh1bqFLhZC8ze0ol%2FArE%2Fa7rmUURAcePHpryDNg4qk0GsLJj3JywUvNDZmTxcAyZzhwrfGEXgYrtkY4fiiPsCQdalNbjbVHLwgcWiqhtmZtIf3CrP8JIzIeICxN4lngllhTC3Xq6SjC2gcyRgvuGl%2FtPcjCjlaDDBjqkATCgwrkrXq5HQkrhR41YiJVzOa2U7E0HYxKimrvEDBr3yBfSyzsEuFd154u0HckhgJbpdZUqjLi%2BFyXCyy7JxmDHLZv47SHTFQXVKxTcKsc%2BkddTw9jW26PHhqpv2T%2BXCNfV98jsRqAZuzXJjkv%2BZTUsA93J4TKb94aP%2BTZnHf34xTD0kVyOQUIedeWxchgvgHk2L5dFvz3FDQ2fDOWQhrnXOc3I&X-Amz-Signature=d2d213a76cea22c8bae5efae53ff785f5fc89a89b78551d4dcdb6f340a3ee432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE2CGMG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCoLeUvcV4UnH2RyRehCOQAHzxpF%2B81ZGzAWR4vTkCW6AIhAKHnkm2t%2FYhStcbJn4eC0qah57qCAMEX5MadEbaC3QTSKv8DCDIQABoMNjM3NDIzMTgzODA1IgyLOCnrCbO6BZpBOOEq3AO8NbFLcDC9xzm21OuAbKr2bMnyORiRsZxgIDbiQeuWx0HChRZC5%2F5%2BwcKeCowX61t7D5RxPm1zwAvhgOUpWJrJmL5TNQIPBPMGg40e%2FbV2SFf0MbmMYFI4%2BqQIboKhMgq2%2F4RPJEBUJAVNBcxYCS3iMfG9AL4dM9Ki5JATNsNH15VEAP9ZoYVKZZ9lq1OSIRkgnat5kJBpuMvlBS%2Bi3BE9Yf37Z4pqY2FesoBoTDKt45ji7fZwcPnhK44lQdUzU5liIUGHuKMKZhfiaxGeQJ651%2ByFsuJTHKih%2FB2mdNqtlvbte2FfLq7kq4kpKnFwMi%2B0dUcXnOCOrf8oNupj6Fy03Zarb7j9Dg6iSlq1DwCL6dc6%2Bhw9Y7KO7mc9y%2BFMYWRwzCzlLuhSn3r%2BCqywGEp26p5r6ssYpX4U5jx%2B1ptIcA95YAww5trfRCHKKahHBAWGGBKIJPoWNC1NPR267N21%2FzS87QE2nzqTFh1bqFLhZC8ze0ol%2FArE%2Fa7rmUURAcePHpryDNg4qk0GsLJj3JywUvNDZmTxcAyZzhwrfGEXgYrtkY4fiiPsCQdalNbjbVHLwgcWiqhtmZtIf3CrP8JIzIeICxN4lngllhTC3Xq6SjC2gcyRgvuGl%2FtPcjCjlaDDBjqkATCgwrkrXq5HQkrhR41YiJVzOa2U7E0HYxKimrvEDBr3yBfSyzsEuFd154u0HckhgJbpdZUqjLi%2BFyXCyy7JxmDHLZv47SHTFQXVKxTcKsc%2BkddTw9jW26PHhqpv2T%2BXCNfV98jsRqAZuzXJjkv%2BZTUsA93J4TKb94aP%2BTZnHf34xTD0kVyOQUIedeWxchgvgHk2L5dFvz3FDQ2fDOWQhrnXOc3I&X-Amz-Signature=40e3e41751dbbb03747f2dcf611e520ef2ed01ce0f87b9c2dc15b1a35ae7ee6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE2CGMG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCoLeUvcV4UnH2RyRehCOQAHzxpF%2B81ZGzAWR4vTkCW6AIhAKHnkm2t%2FYhStcbJn4eC0qah57qCAMEX5MadEbaC3QTSKv8DCDIQABoMNjM3NDIzMTgzODA1IgyLOCnrCbO6BZpBOOEq3AO8NbFLcDC9xzm21OuAbKr2bMnyORiRsZxgIDbiQeuWx0HChRZC5%2F5%2BwcKeCowX61t7D5RxPm1zwAvhgOUpWJrJmL5TNQIPBPMGg40e%2FbV2SFf0MbmMYFI4%2BqQIboKhMgq2%2F4RPJEBUJAVNBcxYCS3iMfG9AL4dM9Ki5JATNsNH15VEAP9ZoYVKZZ9lq1OSIRkgnat5kJBpuMvlBS%2Bi3BE9Yf37Z4pqY2FesoBoTDKt45ji7fZwcPnhK44lQdUzU5liIUGHuKMKZhfiaxGeQJ651%2ByFsuJTHKih%2FB2mdNqtlvbte2FfLq7kq4kpKnFwMi%2B0dUcXnOCOrf8oNupj6Fy03Zarb7j9Dg6iSlq1DwCL6dc6%2Bhw9Y7KO7mc9y%2BFMYWRwzCzlLuhSn3r%2BCqywGEp26p5r6ssYpX4U5jx%2B1ptIcA95YAww5trfRCHKKahHBAWGGBKIJPoWNC1NPR267N21%2FzS87QE2nzqTFh1bqFLhZC8ze0ol%2FArE%2Fa7rmUURAcePHpryDNg4qk0GsLJj3JywUvNDZmTxcAyZzhwrfGEXgYrtkY4fiiPsCQdalNbjbVHLwgcWiqhtmZtIf3CrP8JIzIeICxN4lngllhTC3Xq6SjC2gcyRgvuGl%2FtPcjCjlaDDBjqkATCgwrkrXq5HQkrhR41YiJVzOa2U7E0HYxKimrvEDBr3yBfSyzsEuFd154u0HckhgJbpdZUqjLi%2BFyXCyy7JxmDHLZv47SHTFQXVKxTcKsc%2BkddTw9jW26PHhqpv2T%2BXCNfV98jsRqAZuzXJjkv%2BZTUsA93J4TKb94aP%2BTZnHf34xTD0kVyOQUIedeWxchgvgHk2L5dFvz3FDQ2fDOWQhrnXOc3I&X-Amz-Signature=74510f752ca612419cbc0653962fae36ee5ef657f46fb6b224d6314c26ded95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE2CGMG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCoLeUvcV4UnH2RyRehCOQAHzxpF%2B81ZGzAWR4vTkCW6AIhAKHnkm2t%2FYhStcbJn4eC0qah57qCAMEX5MadEbaC3QTSKv8DCDIQABoMNjM3NDIzMTgzODA1IgyLOCnrCbO6BZpBOOEq3AO8NbFLcDC9xzm21OuAbKr2bMnyORiRsZxgIDbiQeuWx0HChRZC5%2F5%2BwcKeCowX61t7D5RxPm1zwAvhgOUpWJrJmL5TNQIPBPMGg40e%2FbV2SFf0MbmMYFI4%2BqQIboKhMgq2%2F4RPJEBUJAVNBcxYCS3iMfG9AL4dM9Ki5JATNsNH15VEAP9ZoYVKZZ9lq1OSIRkgnat5kJBpuMvlBS%2Bi3BE9Yf37Z4pqY2FesoBoTDKt45ji7fZwcPnhK44lQdUzU5liIUGHuKMKZhfiaxGeQJ651%2ByFsuJTHKih%2FB2mdNqtlvbte2FfLq7kq4kpKnFwMi%2B0dUcXnOCOrf8oNupj6Fy03Zarb7j9Dg6iSlq1DwCL6dc6%2Bhw9Y7KO7mc9y%2BFMYWRwzCzlLuhSn3r%2BCqywGEp26p5r6ssYpX4U5jx%2B1ptIcA95YAww5trfRCHKKahHBAWGGBKIJPoWNC1NPR267N21%2FzS87QE2nzqTFh1bqFLhZC8ze0ol%2FArE%2Fa7rmUURAcePHpryDNg4qk0GsLJj3JywUvNDZmTxcAyZzhwrfGEXgYrtkY4fiiPsCQdalNbjbVHLwgcWiqhtmZtIf3CrP8JIzIeICxN4lngllhTC3Xq6SjC2gcyRgvuGl%2FtPcjCjlaDDBjqkATCgwrkrXq5HQkrhR41YiJVzOa2U7E0HYxKimrvEDBr3yBfSyzsEuFd154u0HckhgJbpdZUqjLi%2BFyXCyy7JxmDHLZv47SHTFQXVKxTcKsc%2BkddTw9jW26PHhqpv2T%2BXCNfV98jsRqAZuzXJjkv%2BZTUsA93J4TKb94aP%2BTZnHf34xTD0kVyOQUIedeWxchgvgHk2L5dFvz3FDQ2fDOWQhrnXOc3I&X-Amz-Signature=5824f1e050b9651d0047b2a9f795452b3364d6affda90c3b20d9acdedcd7c497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE2CGMG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCoLeUvcV4UnH2RyRehCOQAHzxpF%2B81ZGzAWR4vTkCW6AIhAKHnkm2t%2FYhStcbJn4eC0qah57qCAMEX5MadEbaC3QTSKv8DCDIQABoMNjM3NDIzMTgzODA1IgyLOCnrCbO6BZpBOOEq3AO8NbFLcDC9xzm21OuAbKr2bMnyORiRsZxgIDbiQeuWx0HChRZC5%2F5%2BwcKeCowX61t7D5RxPm1zwAvhgOUpWJrJmL5TNQIPBPMGg40e%2FbV2SFf0MbmMYFI4%2BqQIboKhMgq2%2F4RPJEBUJAVNBcxYCS3iMfG9AL4dM9Ki5JATNsNH15VEAP9ZoYVKZZ9lq1OSIRkgnat5kJBpuMvlBS%2Bi3BE9Yf37Z4pqY2FesoBoTDKt45ji7fZwcPnhK44lQdUzU5liIUGHuKMKZhfiaxGeQJ651%2ByFsuJTHKih%2FB2mdNqtlvbte2FfLq7kq4kpKnFwMi%2B0dUcXnOCOrf8oNupj6Fy03Zarb7j9Dg6iSlq1DwCL6dc6%2Bhw9Y7KO7mc9y%2BFMYWRwzCzlLuhSn3r%2BCqywGEp26p5r6ssYpX4U5jx%2B1ptIcA95YAww5trfRCHKKahHBAWGGBKIJPoWNC1NPR267N21%2FzS87QE2nzqTFh1bqFLhZC8ze0ol%2FArE%2Fa7rmUURAcePHpryDNg4qk0GsLJj3JywUvNDZmTxcAyZzhwrfGEXgYrtkY4fiiPsCQdalNbjbVHLwgcWiqhtmZtIf3CrP8JIzIeICxN4lngllhTC3Xq6SjC2gcyRgvuGl%2FtPcjCjlaDDBjqkATCgwrkrXq5HQkrhR41YiJVzOa2U7E0HYxKimrvEDBr3yBfSyzsEuFd154u0HckhgJbpdZUqjLi%2BFyXCyy7JxmDHLZv47SHTFQXVKxTcKsc%2BkddTw9jW26PHhqpv2T%2BXCNfV98jsRqAZuzXJjkv%2BZTUsA93J4TKb94aP%2BTZnHf34xTD0kVyOQUIedeWxchgvgHk2L5dFvz3FDQ2fDOWQhrnXOc3I&X-Amz-Signature=68dcb64d7b02f81faf03426b45995c754eae93460b7dafcc3f6f2f5f6cdf6a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
