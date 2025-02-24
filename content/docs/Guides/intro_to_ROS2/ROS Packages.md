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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOY4BYSJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbHMXUY5qREVSU1kfS1Pngr2fT27wTKWboW36V3nuTAiEAkEScKY5f8bgtPyQ3v9q37S8s4GLqAfXiEfTGZmoS%2FWoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCfFXSEjQ19riw0F8CrcAxsgA7hJBqOrneA%2BYFfWamg3S1YUR0sh1Ag1kG4VOGvnfpOj%2BfmHpsbGDxdH1B2eQkz48sb%2F%2F2vIo2hHxQkumEYc5GxX%2F124G%2F6aAlaKRtL772Ch1rjezlgLBCPl%2FQA4grwvdSkzXdBsQK%2FhUzcyxohbS%2Bo%2B9rkPcNKnXzV8%2FfoSUtcyG6QbHbHvUdDG3%2BNL3rNB9%2F1K0cu5bGlp91%2FFKnmz%2Bc%2BsPGX5M%2FpiZjpU0m%2Ffxof2MkI94HtDsqu4bpBaFzGu%2BC%2F%2B6buYOfmd%2FtBQi2N7yhfHpbsOtGC9Kc073kLjPUcIUrLHOHVKGgCOctRvM%2Fu2WUH9HPSSQcYRoJrqrRbP7TYuw7gUR1aREDcrKq%2B0VEIS%2FoNohcXaLuvpl4j2xsUgcIMiWZ0VFqUs9DmWVG2W5hitQY9IcExbrST6fQsEa0wGguVxUzTespQ6OauCN%2FQoXUtAyNIdm%2B5AQrZA%2BpCrHpgHRbxuonbPYbu646bXMgMf8ioG1dib4NN%2B6FXzRcWJVmLRC4PG60fzAUHx%2FFLaiyTXQynAxZ8Sz3QAz5A2i1IBNyoDMdiIotDc5s7DTmIWWoQRWOIt6Nb6bcGooqwzf59YSm9xwjqLF3h362e7yyFoMxz0%2FE0C1yPFMN%2FW8b0GOqUBprPIxB1shAFX8nQfkjl3RMJAwImnDxm0fLXb0W3T9BtZg%2FAYFt0ruK3GX%2FxLgUBM%2B9AjHPj6d%2FNrNbez5YmMKWhoDwffqw1MHFTAeAUJTJpLcn4ALXzo4rg2VFz6feUOJASubt18aCdxnCMO6%2Bwrffrv7rCEsY5pFwiomJwJgX559T3RNgJ1SOT%2BZHrmPHg3UAw5%2BgaiHh9zGKAEeqUDP%2FJTGTUh&X-Amz-Signature=6d4afd2727e48942b37a89b86ee408220ebb098b4696ad68a771b0d3d682c1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOY4BYSJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbHMXUY5qREVSU1kfS1Pngr2fT27wTKWboW36V3nuTAiEAkEScKY5f8bgtPyQ3v9q37S8s4GLqAfXiEfTGZmoS%2FWoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCfFXSEjQ19riw0F8CrcAxsgA7hJBqOrneA%2BYFfWamg3S1YUR0sh1Ag1kG4VOGvnfpOj%2BfmHpsbGDxdH1B2eQkz48sb%2F%2F2vIo2hHxQkumEYc5GxX%2F124G%2F6aAlaKRtL772Ch1rjezlgLBCPl%2FQA4grwvdSkzXdBsQK%2FhUzcyxohbS%2Bo%2B9rkPcNKnXzV8%2FfoSUtcyG6QbHbHvUdDG3%2BNL3rNB9%2F1K0cu5bGlp91%2FFKnmz%2Bc%2BsPGX5M%2FpiZjpU0m%2Ffxof2MkI94HtDsqu4bpBaFzGu%2BC%2F%2B6buYOfmd%2FtBQi2N7yhfHpbsOtGC9Kc073kLjPUcIUrLHOHVKGgCOctRvM%2Fu2WUH9HPSSQcYRoJrqrRbP7TYuw7gUR1aREDcrKq%2B0VEIS%2FoNohcXaLuvpl4j2xsUgcIMiWZ0VFqUs9DmWVG2W5hitQY9IcExbrST6fQsEa0wGguVxUzTespQ6OauCN%2FQoXUtAyNIdm%2B5AQrZA%2BpCrHpgHRbxuonbPYbu646bXMgMf8ioG1dib4NN%2B6FXzRcWJVmLRC4PG60fzAUHx%2FFLaiyTXQynAxZ8Sz3QAz5A2i1IBNyoDMdiIotDc5s7DTmIWWoQRWOIt6Nb6bcGooqwzf59YSm9xwjqLF3h362e7yyFoMxz0%2FE0C1yPFMN%2FW8b0GOqUBprPIxB1shAFX8nQfkjl3RMJAwImnDxm0fLXb0W3T9BtZg%2FAYFt0ruK3GX%2FxLgUBM%2B9AjHPj6d%2FNrNbez5YmMKWhoDwffqw1MHFTAeAUJTJpLcn4ALXzo4rg2VFz6feUOJASubt18aCdxnCMO6%2Bwrffrv7rCEsY5pFwiomJwJgX559T3RNgJ1SOT%2BZHrmPHg3UAw5%2BgaiHh9zGKAEeqUDP%2FJTGTUh&X-Amz-Signature=710e3d4a7590309dc5b5ca20f4a4ae490cdd53a58b71cae4d574523a4b2b57ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOY4BYSJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbHMXUY5qREVSU1kfS1Pngr2fT27wTKWboW36V3nuTAiEAkEScKY5f8bgtPyQ3v9q37S8s4GLqAfXiEfTGZmoS%2FWoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCfFXSEjQ19riw0F8CrcAxsgA7hJBqOrneA%2BYFfWamg3S1YUR0sh1Ag1kG4VOGvnfpOj%2BfmHpsbGDxdH1B2eQkz48sb%2F%2F2vIo2hHxQkumEYc5GxX%2F124G%2F6aAlaKRtL772Ch1rjezlgLBCPl%2FQA4grwvdSkzXdBsQK%2FhUzcyxohbS%2Bo%2B9rkPcNKnXzV8%2FfoSUtcyG6QbHbHvUdDG3%2BNL3rNB9%2F1K0cu5bGlp91%2FFKnmz%2Bc%2BsPGX5M%2FpiZjpU0m%2Ffxof2MkI94HtDsqu4bpBaFzGu%2BC%2F%2B6buYOfmd%2FtBQi2N7yhfHpbsOtGC9Kc073kLjPUcIUrLHOHVKGgCOctRvM%2Fu2WUH9HPSSQcYRoJrqrRbP7TYuw7gUR1aREDcrKq%2B0VEIS%2FoNohcXaLuvpl4j2xsUgcIMiWZ0VFqUs9DmWVG2W5hitQY9IcExbrST6fQsEa0wGguVxUzTespQ6OauCN%2FQoXUtAyNIdm%2B5AQrZA%2BpCrHpgHRbxuonbPYbu646bXMgMf8ioG1dib4NN%2B6FXzRcWJVmLRC4PG60fzAUHx%2FFLaiyTXQynAxZ8Sz3QAz5A2i1IBNyoDMdiIotDc5s7DTmIWWoQRWOIt6Nb6bcGooqwzf59YSm9xwjqLF3h362e7yyFoMxz0%2FE0C1yPFMN%2FW8b0GOqUBprPIxB1shAFX8nQfkjl3RMJAwImnDxm0fLXb0W3T9BtZg%2FAYFt0ruK3GX%2FxLgUBM%2B9AjHPj6d%2FNrNbez5YmMKWhoDwffqw1MHFTAeAUJTJpLcn4ALXzo4rg2VFz6feUOJASubt18aCdxnCMO6%2Bwrffrv7rCEsY5pFwiomJwJgX559T3RNgJ1SOT%2BZHrmPHg3UAw5%2BgaiHh9zGKAEeqUDP%2FJTGTUh&X-Amz-Signature=a171273b3c956f1ca20887f452e5e7d13056b1568ecfe6aa5d31e6c0a042b2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOY4BYSJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbHMXUY5qREVSU1kfS1Pngr2fT27wTKWboW36V3nuTAiEAkEScKY5f8bgtPyQ3v9q37S8s4GLqAfXiEfTGZmoS%2FWoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCfFXSEjQ19riw0F8CrcAxsgA7hJBqOrneA%2BYFfWamg3S1YUR0sh1Ag1kG4VOGvnfpOj%2BfmHpsbGDxdH1B2eQkz48sb%2F%2F2vIo2hHxQkumEYc5GxX%2F124G%2F6aAlaKRtL772Ch1rjezlgLBCPl%2FQA4grwvdSkzXdBsQK%2FhUzcyxohbS%2Bo%2B9rkPcNKnXzV8%2FfoSUtcyG6QbHbHvUdDG3%2BNL3rNB9%2F1K0cu5bGlp91%2FFKnmz%2Bc%2BsPGX5M%2FpiZjpU0m%2Ffxof2MkI94HtDsqu4bpBaFzGu%2BC%2F%2B6buYOfmd%2FtBQi2N7yhfHpbsOtGC9Kc073kLjPUcIUrLHOHVKGgCOctRvM%2Fu2WUH9HPSSQcYRoJrqrRbP7TYuw7gUR1aREDcrKq%2B0VEIS%2FoNohcXaLuvpl4j2xsUgcIMiWZ0VFqUs9DmWVG2W5hitQY9IcExbrST6fQsEa0wGguVxUzTespQ6OauCN%2FQoXUtAyNIdm%2B5AQrZA%2BpCrHpgHRbxuonbPYbu646bXMgMf8ioG1dib4NN%2B6FXzRcWJVmLRC4PG60fzAUHx%2FFLaiyTXQynAxZ8Sz3QAz5A2i1IBNyoDMdiIotDc5s7DTmIWWoQRWOIt6Nb6bcGooqwzf59YSm9xwjqLF3h362e7yyFoMxz0%2FE0C1yPFMN%2FW8b0GOqUBprPIxB1shAFX8nQfkjl3RMJAwImnDxm0fLXb0W3T9BtZg%2FAYFt0ruK3GX%2FxLgUBM%2B9AjHPj6d%2FNrNbez5YmMKWhoDwffqw1MHFTAeAUJTJpLcn4ALXzo4rg2VFz6feUOJASubt18aCdxnCMO6%2Bwrffrv7rCEsY5pFwiomJwJgX559T3RNgJ1SOT%2BZHrmPHg3UAw5%2BgaiHh9zGKAEeqUDP%2FJTGTUh&X-Amz-Signature=64061da6d7e3a3a23a9aa06c58e28a397624b8d3eef14dacd09b173bcfac880f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOY4BYSJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbHMXUY5qREVSU1kfS1Pngr2fT27wTKWboW36V3nuTAiEAkEScKY5f8bgtPyQ3v9q37S8s4GLqAfXiEfTGZmoS%2FWoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCfFXSEjQ19riw0F8CrcAxsgA7hJBqOrneA%2BYFfWamg3S1YUR0sh1Ag1kG4VOGvnfpOj%2BfmHpsbGDxdH1B2eQkz48sb%2F%2F2vIo2hHxQkumEYc5GxX%2F124G%2F6aAlaKRtL772Ch1rjezlgLBCPl%2FQA4grwvdSkzXdBsQK%2FhUzcyxohbS%2Bo%2B9rkPcNKnXzV8%2FfoSUtcyG6QbHbHvUdDG3%2BNL3rNB9%2F1K0cu5bGlp91%2FFKnmz%2Bc%2BsPGX5M%2FpiZjpU0m%2Ffxof2MkI94HtDsqu4bpBaFzGu%2BC%2F%2B6buYOfmd%2FtBQi2N7yhfHpbsOtGC9Kc073kLjPUcIUrLHOHVKGgCOctRvM%2Fu2WUH9HPSSQcYRoJrqrRbP7TYuw7gUR1aREDcrKq%2B0VEIS%2FoNohcXaLuvpl4j2xsUgcIMiWZ0VFqUs9DmWVG2W5hitQY9IcExbrST6fQsEa0wGguVxUzTespQ6OauCN%2FQoXUtAyNIdm%2B5AQrZA%2BpCrHpgHRbxuonbPYbu646bXMgMf8ioG1dib4NN%2B6FXzRcWJVmLRC4PG60fzAUHx%2FFLaiyTXQynAxZ8Sz3QAz5A2i1IBNyoDMdiIotDc5s7DTmIWWoQRWOIt6Nb6bcGooqwzf59YSm9xwjqLF3h362e7yyFoMxz0%2FE0C1yPFMN%2FW8b0GOqUBprPIxB1shAFX8nQfkjl3RMJAwImnDxm0fLXb0W3T9BtZg%2FAYFt0ruK3GX%2FxLgUBM%2B9AjHPj6d%2FNrNbez5YmMKWhoDwffqw1MHFTAeAUJTJpLcn4ALXzo4rg2VFz6feUOJASubt18aCdxnCMO6%2Bwrffrv7rCEsY5pFwiomJwJgX559T3RNgJ1SOT%2BZHrmPHg3UAw5%2BgaiHh9zGKAEeqUDP%2FJTGTUh&X-Amz-Signature=4104a2af248ec5cd9054c86e4b10e20403d4c5847740d72aa5b1e6907b609faf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOY4BYSJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbHMXUY5qREVSU1kfS1Pngr2fT27wTKWboW36V3nuTAiEAkEScKY5f8bgtPyQ3v9q37S8s4GLqAfXiEfTGZmoS%2FWoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCfFXSEjQ19riw0F8CrcAxsgA7hJBqOrneA%2BYFfWamg3S1YUR0sh1Ag1kG4VOGvnfpOj%2BfmHpsbGDxdH1B2eQkz48sb%2F%2F2vIo2hHxQkumEYc5GxX%2F124G%2F6aAlaKRtL772Ch1rjezlgLBCPl%2FQA4grwvdSkzXdBsQK%2FhUzcyxohbS%2Bo%2B9rkPcNKnXzV8%2FfoSUtcyG6QbHbHvUdDG3%2BNL3rNB9%2F1K0cu5bGlp91%2FFKnmz%2Bc%2BsPGX5M%2FpiZjpU0m%2Ffxof2MkI94HtDsqu4bpBaFzGu%2BC%2F%2B6buYOfmd%2FtBQi2N7yhfHpbsOtGC9Kc073kLjPUcIUrLHOHVKGgCOctRvM%2Fu2WUH9HPSSQcYRoJrqrRbP7TYuw7gUR1aREDcrKq%2B0VEIS%2FoNohcXaLuvpl4j2xsUgcIMiWZ0VFqUs9DmWVG2W5hitQY9IcExbrST6fQsEa0wGguVxUzTespQ6OauCN%2FQoXUtAyNIdm%2B5AQrZA%2BpCrHpgHRbxuonbPYbu646bXMgMf8ioG1dib4NN%2B6FXzRcWJVmLRC4PG60fzAUHx%2FFLaiyTXQynAxZ8Sz3QAz5A2i1IBNyoDMdiIotDc5s7DTmIWWoQRWOIt6Nb6bcGooqwzf59YSm9xwjqLF3h362e7yyFoMxz0%2FE0C1yPFMN%2FW8b0GOqUBprPIxB1shAFX8nQfkjl3RMJAwImnDxm0fLXb0W3T9BtZg%2FAYFt0ruK3GX%2FxLgUBM%2B9AjHPj6d%2FNrNbez5YmMKWhoDwffqw1MHFTAeAUJTJpLcn4ALXzo4rg2VFz6feUOJASubt18aCdxnCMO6%2Bwrffrv7rCEsY5pFwiomJwJgX559T3RNgJ1SOT%2BZHrmPHg3UAw5%2BgaiHh9zGKAEeqUDP%2FJTGTUh&X-Amz-Signature=8e4c532ac446191381612108a4838b2f97a6caba820883b8b0b4968f97de0c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOY4BYSJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbHMXUY5qREVSU1kfS1Pngr2fT27wTKWboW36V3nuTAiEAkEScKY5f8bgtPyQ3v9q37S8s4GLqAfXiEfTGZmoS%2FWoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCfFXSEjQ19riw0F8CrcAxsgA7hJBqOrneA%2BYFfWamg3S1YUR0sh1Ag1kG4VOGvnfpOj%2BfmHpsbGDxdH1B2eQkz48sb%2F%2F2vIo2hHxQkumEYc5GxX%2F124G%2F6aAlaKRtL772Ch1rjezlgLBCPl%2FQA4grwvdSkzXdBsQK%2FhUzcyxohbS%2Bo%2B9rkPcNKnXzV8%2FfoSUtcyG6QbHbHvUdDG3%2BNL3rNB9%2F1K0cu5bGlp91%2FFKnmz%2Bc%2BsPGX5M%2FpiZjpU0m%2Ffxof2MkI94HtDsqu4bpBaFzGu%2BC%2F%2B6buYOfmd%2FtBQi2N7yhfHpbsOtGC9Kc073kLjPUcIUrLHOHVKGgCOctRvM%2Fu2WUH9HPSSQcYRoJrqrRbP7TYuw7gUR1aREDcrKq%2B0VEIS%2FoNohcXaLuvpl4j2xsUgcIMiWZ0VFqUs9DmWVG2W5hitQY9IcExbrST6fQsEa0wGguVxUzTespQ6OauCN%2FQoXUtAyNIdm%2B5AQrZA%2BpCrHpgHRbxuonbPYbu646bXMgMf8ioG1dib4NN%2B6FXzRcWJVmLRC4PG60fzAUHx%2FFLaiyTXQynAxZ8Sz3QAz5A2i1IBNyoDMdiIotDc5s7DTmIWWoQRWOIt6Nb6bcGooqwzf59YSm9xwjqLF3h362e7yyFoMxz0%2FE0C1yPFMN%2FW8b0GOqUBprPIxB1shAFX8nQfkjl3RMJAwImnDxm0fLXb0W3T9BtZg%2FAYFt0ruK3GX%2FxLgUBM%2B9AjHPj6d%2FNrNbez5YmMKWhoDwffqw1MHFTAeAUJTJpLcn4ALXzo4rg2VFz6feUOJASubt18aCdxnCMO6%2Bwrffrv7rCEsY5pFwiomJwJgX559T3RNgJ1SOT%2BZHrmPHg3UAw5%2BgaiHh9zGKAEeqUDP%2FJTGTUh&X-Amz-Signature=b92e09f63e1216fdffd186fdf01f315bab23f47c7be068c5aec8efd4731f46ff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
