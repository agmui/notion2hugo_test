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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL3LWMR5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5Y0k2HiouJuICI7q2pz81wbjchG7%2FsyRDywm%2BuTk2ZAiEAxttzCnRQuly43msMU6GwZQvYjE6NOsUNQ83MBKSeKe4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPOWciLlifHAhaAn2SrcA1EVrfhxbkte595Poza%2FzGuMMHI5o1yJ1FGkeRlczLjbuX9Gf1rAWhJEfrIXMa7CG444uu7WCfriSKGFOANBWb%2FfaPujM3ULM1o3tiRHxEng7PsjXFQsfPBYAbHf4zbqV3J7pSnq7NdKabOIFdNw9w9KxEpngEMLgN3xEo0KZ95oeYoS%2FbLWofclKbkun%2BwqcENaXCTFb3Ri2dGE5DrY%2FAoDHsAd7mcvXfW8s%2BocV%2BQ4XtPw0KIGF2sTbkHNW09E%2BSyP5Hf11hZad9ei3MbfP5j4sb41%2BR6BQqpSYnjWJSh3OnWImQ9CXujyCML20iqWLCSJ%2FXUiMCJKz88Hkl78QzE4yAXUwTuZKg0iNUgEzV8sqDrKpoOwD3fxw1rzxncBDzLUNR0IC1K3gE%2BnzhvXSYLcGB3JnPd%2FknMVjik%2BFDZGp3RzDmk8GrwfHEpf1H%2FPII8RuAZhuvj8dsHT%2FB6Zv8ItXPkEJKsnaFCPY%2BtguHQvIlzUpEt%2FSrWLniJurQx%2F0wYWHXvdb9rmJOw9Dlt9UmH6BR9C1L3BYXKGHl3tOoqfXUmzPFGYttTljkQoouCSm1Hmoo116Dgvw%2BiEGrk8AGKhMNXku9Ryfqe%2FG3hQIbP1vzNfVmJKLpo9Ug1iMOmi0cMGOqUBDEJoEDHkA5DOgUyhPk1tN1Fny7x0ghvzCZGL1laD8uJes3NbiepYPLN9Zrc%2FKAhQOax%2FSbJnBabkEZgzKPbBESZp6kOsxDle%2BLw81lOgryOY3w4kZEaGpjciJoM08ic8FNtpKWodkQbDVeY4EvzLGq%2BRNKa4fCd9cF5nKkh3zIxxq4%2F2%2BtOpBkQFEFVcx4fGYpshn0PQ8xI1BeeUOI9iahZLFU%2FD&X-Amz-Signature=65e446d78232dfb4afaf986104d68b248b768386bfe1d300be0b8b5b01ca7e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL3LWMR5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5Y0k2HiouJuICI7q2pz81wbjchG7%2FsyRDywm%2BuTk2ZAiEAxttzCnRQuly43msMU6GwZQvYjE6NOsUNQ83MBKSeKe4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPOWciLlifHAhaAn2SrcA1EVrfhxbkte595Poza%2FzGuMMHI5o1yJ1FGkeRlczLjbuX9Gf1rAWhJEfrIXMa7CG444uu7WCfriSKGFOANBWb%2FfaPujM3ULM1o3tiRHxEng7PsjXFQsfPBYAbHf4zbqV3J7pSnq7NdKabOIFdNw9w9KxEpngEMLgN3xEo0KZ95oeYoS%2FbLWofclKbkun%2BwqcENaXCTFb3Ri2dGE5DrY%2FAoDHsAd7mcvXfW8s%2BocV%2BQ4XtPw0KIGF2sTbkHNW09E%2BSyP5Hf11hZad9ei3MbfP5j4sb41%2BR6BQqpSYnjWJSh3OnWImQ9CXujyCML20iqWLCSJ%2FXUiMCJKz88Hkl78QzE4yAXUwTuZKg0iNUgEzV8sqDrKpoOwD3fxw1rzxncBDzLUNR0IC1K3gE%2BnzhvXSYLcGB3JnPd%2FknMVjik%2BFDZGp3RzDmk8GrwfHEpf1H%2FPII8RuAZhuvj8dsHT%2FB6Zv8ItXPkEJKsnaFCPY%2BtguHQvIlzUpEt%2FSrWLniJurQx%2F0wYWHXvdb9rmJOw9Dlt9UmH6BR9C1L3BYXKGHl3tOoqfXUmzPFGYttTljkQoouCSm1Hmoo116Dgvw%2BiEGrk8AGKhMNXku9Ryfqe%2FG3hQIbP1vzNfVmJKLpo9Ug1iMOmi0cMGOqUBDEJoEDHkA5DOgUyhPk1tN1Fny7x0ghvzCZGL1laD8uJes3NbiepYPLN9Zrc%2FKAhQOax%2FSbJnBabkEZgzKPbBESZp6kOsxDle%2BLw81lOgryOY3w4kZEaGpjciJoM08ic8FNtpKWodkQbDVeY4EvzLGq%2BRNKa4fCd9cF5nKkh3zIxxq4%2F2%2BtOpBkQFEFVcx4fGYpshn0PQ8xI1BeeUOI9iahZLFU%2FD&X-Amz-Signature=de8a0ae9a4081b4f11f37ee966fbc10cb737db52a35d610ec9fda439282e0b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL3LWMR5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5Y0k2HiouJuICI7q2pz81wbjchG7%2FsyRDywm%2BuTk2ZAiEAxttzCnRQuly43msMU6GwZQvYjE6NOsUNQ83MBKSeKe4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPOWciLlifHAhaAn2SrcA1EVrfhxbkte595Poza%2FzGuMMHI5o1yJ1FGkeRlczLjbuX9Gf1rAWhJEfrIXMa7CG444uu7WCfriSKGFOANBWb%2FfaPujM3ULM1o3tiRHxEng7PsjXFQsfPBYAbHf4zbqV3J7pSnq7NdKabOIFdNw9w9KxEpngEMLgN3xEo0KZ95oeYoS%2FbLWofclKbkun%2BwqcENaXCTFb3Ri2dGE5DrY%2FAoDHsAd7mcvXfW8s%2BocV%2BQ4XtPw0KIGF2sTbkHNW09E%2BSyP5Hf11hZad9ei3MbfP5j4sb41%2BR6BQqpSYnjWJSh3OnWImQ9CXujyCML20iqWLCSJ%2FXUiMCJKz88Hkl78QzE4yAXUwTuZKg0iNUgEzV8sqDrKpoOwD3fxw1rzxncBDzLUNR0IC1K3gE%2BnzhvXSYLcGB3JnPd%2FknMVjik%2BFDZGp3RzDmk8GrwfHEpf1H%2FPII8RuAZhuvj8dsHT%2FB6Zv8ItXPkEJKsnaFCPY%2BtguHQvIlzUpEt%2FSrWLniJurQx%2F0wYWHXvdb9rmJOw9Dlt9UmH6BR9C1L3BYXKGHl3tOoqfXUmzPFGYttTljkQoouCSm1Hmoo116Dgvw%2BiEGrk8AGKhMNXku9Ryfqe%2FG3hQIbP1vzNfVmJKLpo9Ug1iMOmi0cMGOqUBDEJoEDHkA5DOgUyhPk1tN1Fny7x0ghvzCZGL1laD8uJes3NbiepYPLN9Zrc%2FKAhQOax%2FSbJnBabkEZgzKPbBESZp6kOsxDle%2BLw81lOgryOY3w4kZEaGpjciJoM08ic8FNtpKWodkQbDVeY4EvzLGq%2BRNKa4fCd9cF5nKkh3zIxxq4%2F2%2BtOpBkQFEFVcx4fGYpshn0PQ8xI1BeeUOI9iahZLFU%2FD&X-Amz-Signature=3fa91170ee1ebfcddd6dcc6941f96f5e53cf6136a7ab658bfd0f66790bc66111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL3LWMR5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5Y0k2HiouJuICI7q2pz81wbjchG7%2FsyRDywm%2BuTk2ZAiEAxttzCnRQuly43msMU6GwZQvYjE6NOsUNQ83MBKSeKe4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPOWciLlifHAhaAn2SrcA1EVrfhxbkte595Poza%2FzGuMMHI5o1yJ1FGkeRlczLjbuX9Gf1rAWhJEfrIXMa7CG444uu7WCfriSKGFOANBWb%2FfaPujM3ULM1o3tiRHxEng7PsjXFQsfPBYAbHf4zbqV3J7pSnq7NdKabOIFdNw9w9KxEpngEMLgN3xEo0KZ95oeYoS%2FbLWofclKbkun%2BwqcENaXCTFb3Ri2dGE5DrY%2FAoDHsAd7mcvXfW8s%2BocV%2BQ4XtPw0KIGF2sTbkHNW09E%2BSyP5Hf11hZad9ei3MbfP5j4sb41%2BR6BQqpSYnjWJSh3OnWImQ9CXujyCML20iqWLCSJ%2FXUiMCJKz88Hkl78QzE4yAXUwTuZKg0iNUgEzV8sqDrKpoOwD3fxw1rzxncBDzLUNR0IC1K3gE%2BnzhvXSYLcGB3JnPd%2FknMVjik%2BFDZGp3RzDmk8GrwfHEpf1H%2FPII8RuAZhuvj8dsHT%2FB6Zv8ItXPkEJKsnaFCPY%2BtguHQvIlzUpEt%2FSrWLniJurQx%2F0wYWHXvdb9rmJOw9Dlt9UmH6BR9C1L3BYXKGHl3tOoqfXUmzPFGYttTljkQoouCSm1Hmoo116Dgvw%2BiEGrk8AGKhMNXku9Ryfqe%2FG3hQIbP1vzNfVmJKLpo9Ug1iMOmi0cMGOqUBDEJoEDHkA5DOgUyhPk1tN1Fny7x0ghvzCZGL1laD8uJes3NbiepYPLN9Zrc%2FKAhQOax%2FSbJnBabkEZgzKPbBESZp6kOsxDle%2BLw81lOgryOY3w4kZEaGpjciJoM08ic8FNtpKWodkQbDVeY4EvzLGq%2BRNKa4fCd9cF5nKkh3zIxxq4%2F2%2BtOpBkQFEFVcx4fGYpshn0PQ8xI1BeeUOI9iahZLFU%2FD&X-Amz-Signature=e2fb0c1f4a6d8d388f2f6e848050293d69ac142a6733024e1ef7a13065b461e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL3LWMR5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5Y0k2HiouJuICI7q2pz81wbjchG7%2FsyRDywm%2BuTk2ZAiEAxttzCnRQuly43msMU6GwZQvYjE6NOsUNQ83MBKSeKe4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPOWciLlifHAhaAn2SrcA1EVrfhxbkte595Poza%2FzGuMMHI5o1yJ1FGkeRlczLjbuX9Gf1rAWhJEfrIXMa7CG444uu7WCfriSKGFOANBWb%2FfaPujM3ULM1o3tiRHxEng7PsjXFQsfPBYAbHf4zbqV3J7pSnq7NdKabOIFdNw9w9KxEpngEMLgN3xEo0KZ95oeYoS%2FbLWofclKbkun%2BwqcENaXCTFb3Ri2dGE5DrY%2FAoDHsAd7mcvXfW8s%2BocV%2BQ4XtPw0KIGF2sTbkHNW09E%2BSyP5Hf11hZad9ei3MbfP5j4sb41%2BR6BQqpSYnjWJSh3OnWImQ9CXujyCML20iqWLCSJ%2FXUiMCJKz88Hkl78QzE4yAXUwTuZKg0iNUgEzV8sqDrKpoOwD3fxw1rzxncBDzLUNR0IC1K3gE%2BnzhvXSYLcGB3JnPd%2FknMVjik%2BFDZGp3RzDmk8GrwfHEpf1H%2FPII8RuAZhuvj8dsHT%2FB6Zv8ItXPkEJKsnaFCPY%2BtguHQvIlzUpEt%2FSrWLniJurQx%2F0wYWHXvdb9rmJOw9Dlt9UmH6BR9C1L3BYXKGHl3tOoqfXUmzPFGYttTljkQoouCSm1Hmoo116Dgvw%2BiEGrk8AGKhMNXku9Ryfqe%2FG3hQIbP1vzNfVmJKLpo9Ug1iMOmi0cMGOqUBDEJoEDHkA5DOgUyhPk1tN1Fny7x0ghvzCZGL1laD8uJes3NbiepYPLN9Zrc%2FKAhQOax%2FSbJnBabkEZgzKPbBESZp6kOsxDle%2BLw81lOgryOY3w4kZEaGpjciJoM08ic8FNtpKWodkQbDVeY4EvzLGq%2BRNKa4fCd9cF5nKkh3zIxxq4%2F2%2BtOpBkQFEFVcx4fGYpshn0PQ8xI1BeeUOI9iahZLFU%2FD&X-Amz-Signature=1a1987bb3f26847c14376d9be024b65af767aedc06eec06981ec7c42389c836e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL3LWMR5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5Y0k2HiouJuICI7q2pz81wbjchG7%2FsyRDywm%2BuTk2ZAiEAxttzCnRQuly43msMU6GwZQvYjE6NOsUNQ83MBKSeKe4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPOWciLlifHAhaAn2SrcA1EVrfhxbkte595Poza%2FzGuMMHI5o1yJ1FGkeRlczLjbuX9Gf1rAWhJEfrIXMa7CG444uu7WCfriSKGFOANBWb%2FfaPujM3ULM1o3tiRHxEng7PsjXFQsfPBYAbHf4zbqV3J7pSnq7NdKabOIFdNw9w9KxEpngEMLgN3xEo0KZ95oeYoS%2FbLWofclKbkun%2BwqcENaXCTFb3Ri2dGE5DrY%2FAoDHsAd7mcvXfW8s%2BocV%2BQ4XtPw0KIGF2sTbkHNW09E%2BSyP5Hf11hZad9ei3MbfP5j4sb41%2BR6BQqpSYnjWJSh3OnWImQ9CXujyCML20iqWLCSJ%2FXUiMCJKz88Hkl78QzE4yAXUwTuZKg0iNUgEzV8sqDrKpoOwD3fxw1rzxncBDzLUNR0IC1K3gE%2BnzhvXSYLcGB3JnPd%2FknMVjik%2BFDZGp3RzDmk8GrwfHEpf1H%2FPII8RuAZhuvj8dsHT%2FB6Zv8ItXPkEJKsnaFCPY%2BtguHQvIlzUpEt%2FSrWLniJurQx%2F0wYWHXvdb9rmJOw9Dlt9UmH6BR9C1L3BYXKGHl3tOoqfXUmzPFGYttTljkQoouCSm1Hmoo116Dgvw%2BiEGrk8AGKhMNXku9Ryfqe%2FG3hQIbP1vzNfVmJKLpo9Ug1iMOmi0cMGOqUBDEJoEDHkA5DOgUyhPk1tN1Fny7x0ghvzCZGL1laD8uJes3NbiepYPLN9Zrc%2FKAhQOax%2FSbJnBabkEZgzKPbBESZp6kOsxDle%2BLw81lOgryOY3w4kZEaGpjciJoM08ic8FNtpKWodkQbDVeY4EvzLGq%2BRNKa4fCd9cF5nKkh3zIxxq4%2F2%2BtOpBkQFEFVcx4fGYpshn0PQ8xI1BeeUOI9iahZLFU%2FD&X-Amz-Signature=e0abcdea52dbb2711a965875e3484272dc44cfce290a2114f86901acdf4f0c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL3LWMR5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5Y0k2HiouJuICI7q2pz81wbjchG7%2FsyRDywm%2BuTk2ZAiEAxttzCnRQuly43msMU6GwZQvYjE6NOsUNQ83MBKSeKe4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPOWciLlifHAhaAn2SrcA1EVrfhxbkte595Poza%2FzGuMMHI5o1yJ1FGkeRlczLjbuX9Gf1rAWhJEfrIXMa7CG444uu7WCfriSKGFOANBWb%2FfaPujM3ULM1o3tiRHxEng7PsjXFQsfPBYAbHf4zbqV3J7pSnq7NdKabOIFdNw9w9KxEpngEMLgN3xEo0KZ95oeYoS%2FbLWofclKbkun%2BwqcENaXCTFb3Ri2dGE5DrY%2FAoDHsAd7mcvXfW8s%2BocV%2BQ4XtPw0KIGF2sTbkHNW09E%2BSyP5Hf11hZad9ei3MbfP5j4sb41%2BR6BQqpSYnjWJSh3OnWImQ9CXujyCML20iqWLCSJ%2FXUiMCJKz88Hkl78QzE4yAXUwTuZKg0iNUgEzV8sqDrKpoOwD3fxw1rzxncBDzLUNR0IC1K3gE%2BnzhvXSYLcGB3JnPd%2FknMVjik%2BFDZGp3RzDmk8GrwfHEpf1H%2FPII8RuAZhuvj8dsHT%2FB6Zv8ItXPkEJKsnaFCPY%2BtguHQvIlzUpEt%2FSrWLniJurQx%2F0wYWHXvdb9rmJOw9Dlt9UmH6BR9C1L3BYXKGHl3tOoqfXUmzPFGYttTljkQoouCSm1Hmoo116Dgvw%2BiEGrk8AGKhMNXku9Ryfqe%2FG3hQIbP1vzNfVmJKLpo9Ug1iMOmi0cMGOqUBDEJoEDHkA5DOgUyhPk1tN1Fny7x0ghvzCZGL1laD8uJes3NbiepYPLN9Zrc%2FKAhQOax%2FSbJnBabkEZgzKPbBESZp6kOsxDle%2BLw81lOgryOY3w4kZEaGpjciJoM08ic8FNtpKWodkQbDVeY4EvzLGq%2BRNKa4fCd9cF5nKkh3zIxxq4%2F2%2BtOpBkQFEFVcx4fGYpshn0PQ8xI1BeeUOI9iahZLFU%2FD&X-Amz-Signature=2e4176a699899a42351c0c50188b2d74e697f31ff12993f5955cb58ca9f3fdb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
