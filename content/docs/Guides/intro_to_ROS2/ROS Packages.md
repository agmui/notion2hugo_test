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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673AHC2VW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDsVBgdjbet5vXbo86KDW4qi93nWJfWdwyW8bcZB4TpdgIhAIzbODvIM1O%2B8RIFX8%2BnPkVcxOaspHDcGNo%2BiJ2kHTYAKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXtGxTLhJzcFLoGO0q3AOEVZs67uilnY5DjIMoEmxINtj%2FW74P9SDJP8vWhNONbHK8flTK7iltl3tkFYs1jzYf5i%2BkxkyGQyPojqcaVG%2FvQoIjYBF2JvQKD9u%2BZyk54gw2Xso7AuBNeC%2FDtJ34nvna2vkzTYRznc%2BJc%2Fdg%2FN217QYoD9bge2hkAaJyg1qgGS5St5%2FU%2BVo0LFLZqVVhAZHeaEtFt4sxiUqxo%2B6JSfpxbqeNIDITP2NBAwRY1wUD5KkNXPOrjbAyax62Y9%2BvNoFpdcbryssxFVPsuFe2lFHGDcYLktPfXNPur969AadNNQy3knHFkZTnQrOVueLCvPv%2FVLBjYXYxt2PBEPPM9V8czg2j%2FeQbkcQcG6MFDzfjfEL9u2DS%2F%2B4kYhmBuNrQYuqwAWxITSjmFwmhA5FAsKhS%2BiryQBWM4C7%2FmZPjrUG8VjWEkZGyRjiBx8KlroNIKiqrZnYNlUPjiEdQL7QeUjc9dZn6fMev9SugcBAASbXzBRqoS8Aag5y%2FbVKwGelOXygJuWQuqQVuCcbDnkpEognfPcrdAEoeX72TPyjj8koXc4w%2F%2BDyZ6aPaKbEDsH%2FfUm2oMFA0wGVG3YNLztMCGAgCrqt%2FTPVLn%2B5fkHuxdaoZfyGd2G4boFwXi1dy4DC%2F0NrEBjqkAfpjbzrFCFG4ja%2F4bv6uYZA8zKlSVL7iQNTXaJzDD%2FJhUnLNqGKQ8TLFGDVr%2F01UE4FkGTY03bGsVAZOnapkBxatJkgIeYa7dK0vMuxOh8ikolHeT5RYR5%2Bd6P9jqy7A2dIfSWRERugqGj5jqEuacmFVa%2BWLOuXxSBXEvRFOiyrBOV8kIcTf2jmjLdlZHYw3YXXIy866Y5AtuLMM3fMu%2FbgxzbUb&X-Amz-Signature=689dca6f9f90049e31ce694aa256b47a792fc7cce35e59ae17254b74eb155467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673AHC2VW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDsVBgdjbet5vXbo86KDW4qi93nWJfWdwyW8bcZB4TpdgIhAIzbODvIM1O%2B8RIFX8%2BnPkVcxOaspHDcGNo%2BiJ2kHTYAKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXtGxTLhJzcFLoGO0q3AOEVZs67uilnY5DjIMoEmxINtj%2FW74P9SDJP8vWhNONbHK8flTK7iltl3tkFYs1jzYf5i%2BkxkyGQyPojqcaVG%2FvQoIjYBF2JvQKD9u%2BZyk54gw2Xso7AuBNeC%2FDtJ34nvna2vkzTYRznc%2BJc%2Fdg%2FN217QYoD9bge2hkAaJyg1qgGS5St5%2FU%2BVo0LFLZqVVhAZHeaEtFt4sxiUqxo%2B6JSfpxbqeNIDITP2NBAwRY1wUD5KkNXPOrjbAyax62Y9%2BvNoFpdcbryssxFVPsuFe2lFHGDcYLktPfXNPur969AadNNQy3knHFkZTnQrOVueLCvPv%2FVLBjYXYxt2PBEPPM9V8czg2j%2FeQbkcQcG6MFDzfjfEL9u2DS%2F%2B4kYhmBuNrQYuqwAWxITSjmFwmhA5FAsKhS%2BiryQBWM4C7%2FmZPjrUG8VjWEkZGyRjiBx8KlroNIKiqrZnYNlUPjiEdQL7QeUjc9dZn6fMev9SugcBAASbXzBRqoS8Aag5y%2FbVKwGelOXygJuWQuqQVuCcbDnkpEognfPcrdAEoeX72TPyjj8koXc4w%2F%2BDyZ6aPaKbEDsH%2FfUm2oMFA0wGVG3YNLztMCGAgCrqt%2FTPVLn%2B5fkHuxdaoZfyGd2G4boFwXi1dy4DC%2F0NrEBjqkAfpjbzrFCFG4ja%2F4bv6uYZA8zKlSVL7iQNTXaJzDD%2FJhUnLNqGKQ8TLFGDVr%2F01UE4FkGTY03bGsVAZOnapkBxatJkgIeYa7dK0vMuxOh8ikolHeT5RYR5%2Bd6P9jqy7A2dIfSWRERugqGj5jqEuacmFVa%2BWLOuXxSBXEvRFOiyrBOV8kIcTf2jmjLdlZHYw3YXXIy866Y5AtuLMM3fMu%2FbgxzbUb&X-Amz-Signature=f87e4ed629ebfeb9728aecfe75f944f5377e7b3f270977f69206bdfa2c63e57e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673AHC2VW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDsVBgdjbet5vXbo86KDW4qi93nWJfWdwyW8bcZB4TpdgIhAIzbODvIM1O%2B8RIFX8%2BnPkVcxOaspHDcGNo%2BiJ2kHTYAKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXtGxTLhJzcFLoGO0q3AOEVZs67uilnY5DjIMoEmxINtj%2FW74P9SDJP8vWhNONbHK8flTK7iltl3tkFYs1jzYf5i%2BkxkyGQyPojqcaVG%2FvQoIjYBF2JvQKD9u%2BZyk54gw2Xso7AuBNeC%2FDtJ34nvna2vkzTYRznc%2BJc%2Fdg%2FN217QYoD9bge2hkAaJyg1qgGS5St5%2FU%2BVo0LFLZqVVhAZHeaEtFt4sxiUqxo%2B6JSfpxbqeNIDITP2NBAwRY1wUD5KkNXPOrjbAyax62Y9%2BvNoFpdcbryssxFVPsuFe2lFHGDcYLktPfXNPur969AadNNQy3knHFkZTnQrOVueLCvPv%2FVLBjYXYxt2PBEPPM9V8czg2j%2FeQbkcQcG6MFDzfjfEL9u2DS%2F%2B4kYhmBuNrQYuqwAWxITSjmFwmhA5FAsKhS%2BiryQBWM4C7%2FmZPjrUG8VjWEkZGyRjiBx8KlroNIKiqrZnYNlUPjiEdQL7QeUjc9dZn6fMev9SugcBAASbXzBRqoS8Aag5y%2FbVKwGelOXygJuWQuqQVuCcbDnkpEognfPcrdAEoeX72TPyjj8koXc4w%2F%2BDyZ6aPaKbEDsH%2FfUm2oMFA0wGVG3YNLztMCGAgCrqt%2FTPVLn%2B5fkHuxdaoZfyGd2G4boFwXi1dy4DC%2F0NrEBjqkAfpjbzrFCFG4ja%2F4bv6uYZA8zKlSVL7iQNTXaJzDD%2FJhUnLNqGKQ8TLFGDVr%2F01UE4FkGTY03bGsVAZOnapkBxatJkgIeYa7dK0vMuxOh8ikolHeT5RYR5%2Bd6P9jqy7A2dIfSWRERugqGj5jqEuacmFVa%2BWLOuXxSBXEvRFOiyrBOV8kIcTf2jmjLdlZHYw3YXXIy866Y5AtuLMM3fMu%2FbgxzbUb&X-Amz-Signature=92fbe7e17738151dde4669a97da4f8afaa7bcc386c1ff53456ad7c8722914fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673AHC2VW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDsVBgdjbet5vXbo86KDW4qi93nWJfWdwyW8bcZB4TpdgIhAIzbODvIM1O%2B8RIFX8%2BnPkVcxOaspHDcGNo%2BiJ2kHTYAKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXtGxTLhJzcFLoGO0q3AOEVZs67uilnY5DjIMoEmxINtj%2FW74P9SDJP8vWhNONbHK8flTK7iltl3tkFYs1jzYf5i%2BkxkyGQyPojqcaVG%2FvQoIjYBF2JvQKD9u%2BZyk54gw2Xso7AuBNeC%2FDtJ34nvna2vkzTYRznc%2BJc%2Fdg%2FN217QYoD9bge2hkAaJyg1qgGS5St5%2FU%2BVo0LFLZqVVhAZHeaEtFt4sxiUqxo%2B6JSfpxbqeNIDITP2NBAwRY1wUD5KkNXPOrjbAyax62Y9%2BvNoFpdcbryssxFVPsuFe2lFHGDcYLktPfXNPur969AadNNQy3knHFkZTnQrOVueLCvPv%2FVLBjYXYxt2PBEPPM9V8czg2j%2FeQbkcQcG6MFDzfjfEL9u2DS%2F%2B4kYhmBuNrQYuqwAWxITSjmFwmhA5FAsKhS%2BiryQBWM4C7%2FmZPjrUG8VjWEkZGyRjiBx8KlroNIKiqrZnYNlUPjiEdQL7QeUjc9dZn6fMev9SugcBAASbXzBRqoS8Aag5y%2FbVKwGelOXygJuWQuqQVuCcbDnkpEognfPcrdAEoeX72TPyjj8koXc4w%2F%2BDyZ6aPaKbEDsH%2FfUm2oMFA0wGVG3YNLztMCGAgCrqt%2FTPVLn%2B5fkHuxdaoZfyGd2G4boFwXi1dy4DC%2F0NrEBjqkAfpjbzrFCFG4ja%2F4bv6uYZA8zKlSVL7iQNTXaJzDD%2FJhUnLNqGKQ8TLFGDVr%2F01UE4FkGTY03bGsVAZOnapkBxatJkgIeYa7dK0vMuxOh8ikolHeT5RYR5%2Bd6P9jqy7A2dIfSWRERugqGj5jqEuacmFVa%2BWLOuXxSBXEvRFOiyrBOV8kIcTf2jmjLdlZHYw3YXXIy866Y5AtuLMM3fMu%2FbgxzbUb&X-Amz-Signature=297e568caa5112638c7dac3b54f894e3e543b21940a41bc08c08fdd0de250eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673AHC2VW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDsVBgdjbet5vXbo86KDW4qi93nWJfWdwyW8bcZB4TpdgIhAIzbODvIM1O%2B8RIFX8%2BnPkVcxOaspHDcGNo%2BiJ2kHTYAKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXtGxTLhJzcFLoGO0q3AOEVZs67uilnY5DjIMoEmxINtj%2FW74P9SDJP8vWhNONbHK8flTK7iltl3tkFYs1jzYf5i%2BkxkyGQyPojqcaVG%2FvQoIjYBF2JvQKD9u%2BZyk54gw2Xso7AuBNeC%2FDtJ34nvna2vkzTYRznc%2BJc%2Fdg%2FN217QYoD9bge2hkAaJyg1qgGS5St5%2FU%2BVo0LFLZqVVhAZHeaEtFt4sxiUqxo%2B6JSfpxbqeNIDITP2NBAwRY1wUD5KkNXPOrjbAyax62Y9%2BvNoFpdcbryssxFVPsuFe2lFHGDcYLktPfXNPur969AadNNQy3knHFkZTnQrOVueLCvPv%2FVLBjYXYxt2PBEPPM9V8czg2j%2FeQbkcQcG6MFDzfjfEL9u2DS%2F%2B4kYhmBuNrQYuqwAWxITSjmFwmhA5FAsKhS%2BiryQBWM4C7%2FmZPjrUG8VjWEkZGyRjiBx8KlroNIKiqrZnYNlUPjiEdQL7QeUjc9dZn6fMev9SugcBAASbXzBRqoS8Aag5y%2FbVKwGelOXygJuWQuqQVuCcbDnkpEognfPcrdAEoeX72TPyjj8koXc4w%2F%2BDyZ6aPaKbEDsH%2FfUm2oMFA0wGVG3YNLztMCGAgCrqt%2FTPVLn%2B5fkHuxdaoZfyGd2G4boFwXi1dy4DC%2F0NrEBjqkAfpjbzrFCFG4ja%2F4bv6uYZA8zKlSVL7iQNTXaJzDD%2FJhUnLNqGKQ8TLFGDVr%2F01UE4FkGTY03bGsVAZOnapkBxatJkgIeYa7dK0vMuxOh8ikolHeT5RYR5%2Bd6P9jqy7A2dIfSWRERugqGj5jqEuacmFVa%2BWLOuXxSBXEvRFOiyrBOV8kIcTf2jmjLdlZHYw3YXXIy866Y5AtuLMM3fMu%2FbgxzbUb&X-Amz-Signature=f1932c631ea87ffdd95bafc26d2380ddeb1eaadef84b28711ff816fefe59a0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673AHC2VW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDsVBgdjbet5vXbo86KDW4qi93nWJfWdwyW8bcZB4TpdgIhAIzbODvIM1O%2B8RIFX8%2BnPkVcxOaspHDcGNo%2BiJ2kHTYAKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXtGxTLhJzcFLoGO0q3AOEVZs67uilnY5DjIMoEmxINtj%2FW74P9SDJP8vWhNONbHK8flTK7iltl3tkFYs1jzYf5i%2BkxkyGQyPojqcaVG%2FvQoIjYBF2JvQKD9u%2BZyk54gw2Xso7AuBNeC%2FDtJ34nvna2vkzTYRznc%2BJc%2Fdg%2FN217QYoD9bge2hkAaJyg1qgGS5St5%2FU%2BVo0LFLZqVVhAZHeaEtFt4sxiUqxo%2B6JSfpxbqeNIDITP2NBAwRY1wUD5KkNXPOrjbAyax62Y9%2BvNoFpdcbryssxFVPsuFe2lFHGDcYLktPfXNPur969AadNNQy3knHFkZTnQrOVueLCvPv%2FVLBjYXYxt2PBEPPM9V8czg2j%2FeQbkcQcG6MFDzfjfEL9u2DS%2F%2B4kYhmBuNrQYuqwAWxITSjmFwmhA5FAsKhS%2BiryQBWM4C7%2FmZPjrUG8VjWEkZGyRjiBx8KlroNIKiqrZnYNlUPjiEdQL7QeUjc9dZn6fMev9SugcBAASbXzBRqoS8Aag5y%2FbVKwGelOXygJuWQuqQVuCcbDnkpEognfPcrdAEoeX72TPyjj8koXc4w%2F%2BDyZ6aPaKbEDsH%2FfUm2oMFA0wGVG3YNLztMCGAgCrqt%2FTPVLn%2B5fkHuxdaoZfyGd2G4boFwXi1dy4DC%2F0NrEBjqkAfpjbzrFCFG4ja%2F4bv6uYZA8zKlSVL7iQNTXaJzDD%2FJhUnLNqGKQ8TLFGDVr%2F01UE4FkGTY03bGsVAZOnapkBxatJkgIeYa7dK0vMuxOh8ikolHeT5RYR5%2Bd6P9jqy7A2dIfSWRERugqGj5jqEuacmFVa%2BWLOuXxSBXEvRFOiyrBOV8kIcTf2jmjLdlZHYw3YXXIy866Y5AtuLMM3fMu%2FbgxzbUb&X-Amz-Signature=16afbb315b189df4ddb91bbc33557a410dfbfd52a6cbb3eff67cd6fb43058e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673AHC2VW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDsVBgdjbet5vXbo86KDW4qi93nWJfWdwyW8bcZB4TpdgIhAIzbODvIM1O%2B8RIFX8%2BnPkVcxOaspHDcGNo%2BiJ2kHTYAKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXtGxTLhJzcFLoGO0q3AOEVZs67uilnY5DjIMoEmxINtj%2FW74P9SDJP8vWhNONbHK8flTK7iltl3tkFYs1jzYf5i%2BkxkyGQyPojqcaVG%2FvQoIjYBF2JvQKD9u%2BZyk54gw2Xso7AuBNeC%2FDtJ34nvna2vkzTYRznc%2BJc%2Fdg%2FN217QYoD9bge2hkAaJyg1qgGS5St5%2FU%2BVo0LFLZqVVhAZHeaEtFt4sxiUqxo%2B6JSfpxbqeNIDITP2NBAwRY1wUD5KkNXPOrjbAyax62Y9%2BvNoFpdcbryssxFVPsuFe2lFHGDcYLktPfXNPur969AadNNQy3knHFkZTnQrOVueLCvPv%2FVLBjYXYxt2PBEPPM9V8czg2j%2FeQbkcQcG6MFDzfjfEL9u2DS%2F%2B4kYhmBuNrQYuqwAWxITSjmFwmhA5FAsKhS%2BiryQBWM4C7%2FmZPjrUG8VjWEkZGyRjiBx8KlroNIKiqrZnYNlUPjiEdQL7QeUjc9dZn6fMev9SugcBAASbXzBRqoS8Aag5y%2FbVKwGelOXygJuWQuqQVuCcbDnkpEognfPcrdAEoeX72TPyjj8koXc4w%2F%2BDyZ6aPaKbEDsH%2FfUm2oMFA0wGVG3YNLztMCGAgCrqt%2FTPVLn%2B5fkHuxdaoZfyGd2G4boFwXi1dy4DC%2F0NrEBjqkAfpjbzrFCFG4ja%2F4bv6uYZA8zKlSVL7iQNTXaJzDD%2FJhUnLNqGKQ8TLFGDVr%2F01UE4FkGTY03bGsVAZOnapkBxatJkgIeYa7dK0vMuxOh8ikolHeT5RYR5%2Bd6P9jqy7A2dIfSWRERugqGj5jqEuacmFVa%2BWLOuXxSBXEvRFOiyrBOV8kIcTf2jmjLdlZHYw3YXXIy866Y5AtuLMM3fMu%2FbgxzbUb&X-Amz-Signature=f182bb0cee1f59bcdb6baff25f6e092695c22191c996ddc60828f8c4f8acab04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
