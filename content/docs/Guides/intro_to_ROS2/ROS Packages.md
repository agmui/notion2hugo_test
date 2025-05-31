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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZBQ5LT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8j9zitxei8mCHeByh%2BRVUIt5iQGWn%2BVQR%2Bh8fn4YFcQIhALuqCuifXLZOfXA6sTflhpdZLcZcjtRGflZg9UXTdhXCKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKhLhhYGS6rx8dG9kq3AMyCb0QLe6ytWFo3JDy3yvROLWKvc%2B0OSMCpe71t%2BDPJJaK7UOkjJcVsGVLIX1ZpwyPcjmB6pPszrmrO0n%2FllRHTkiHmmOju%2BfT%2F3AjLajiHg3SQex3Eg6AFdK7EODhHjnGHtNSI02On5U%2Bb5VJ54zoc8Xjn3dxuIKfOjEbJp3TtYwNOOG8H7QaNDouyoXgKjmgca%2F2mIuzT2P%2FLoVZasZ2A%2BFZAYSgxsrgfzBFBs%2B9jaEnec4SIwQ7FIJFRR%2FFnhDEr5FQM5E61AU%2BXrLZOLGrQ9OYuSOHbJ7SeriwsUdAeQYHOASjhx65nx%2FVpBKraVA%2BSjd1aWkSWngLRVF700i8h%2FQRfALjgP9e1c%2BXrSV0KEBf%2FGOWhDWb10nF3V6%2BfCOl5HwGRnz7rY3IgW2axPkZPKCaaXzvT9YtmSB7WyTIBMjGlCWV%2FEABxY9%2B%2F%2FybgtDkBt89gB6%2F5Tob4RbhvMaUS7BbBGlCN2tLpsLLUD03%2B9dBFMd48sa%2Fdr3U7CArKhJhsA1LI84iSlVYCh4gY9p0ZJcGMG09%2FURZE7j8nHcLgLqs1w4%2FIbrwx%2BHgTz0uFgDnEpPnEbmyw7UG2P4eMuFt4RtNgewiPsKGQRJwh1cVsJUFM8Oci%2BNhl%2FRJ5zCPxe3BBjqkAfZiqrgbfcYjEBVmjZUYW7DZc8cVyM%2Bp5tZtijAUmANVp05VO%2F%2FLHA%2FhmVXcpXXgUAdxtOcV9BwXonJxTie9JucWaKAvb16Xp0h6V9xQrM9ftxZjgQgCDWVMJSTzCNOE7lWGxeFayX86K7%2BYgd%2Fiuk320mtSglIFqyQ8%2FSATQeGfbhux%2BVrl8SCGNBJsFfNQy64V2bgQC%2BwQkFNd0NlRNPDfz2Em&X-Amz-Signature=8c63fdaa36cd17e9c297caf73a8cddde4369a46727bd342a5c063e5d1d995c12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZBQ5LT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8j9zitxei8mCHeByh%2BRVUIt5iQGWn%2BVQR%2Bh8fn4YFcQIhALuqCuifXLZOfXA6sTflhpdZLcZcjtRGflZg9UXTdhXCKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKhLhhYGS6rx8dG9kq3AMyCb0QLe6ytWFo3JDy3yvROLWKvc%2B0OSMCpe71t%2BDPJJaK7UOkjJcVsGVLIX1ZpwyPcjmB6pPszrmrO0n%2FllRHTkiHmmOju%2BfT%2F3AjLajiHg3SQex3Eg6AFdK7EODhHjnGHtNSI02On5U%2Bb5VJ54zoc8Xjn3dxuIKfOjEbJp3TtYwNOOG8H7QaNDouyoXgKjmgca%2F2mIuzT2P%2FLoVZasZ2A%2BFZAYSgxsrgfzBFBs%2B9jaEnec4SIwQ7FIJFRR%2FFnhDEr5FQM5E61AU%2BXrLZOLGrQ9OYuSOHbJ7SeriwsUdAeQYHOASjhx65nx%2FVpBKraVA%2BSjd1aWkSWngLRVF700i8h%2FQRfALjgP9e1c%2BXrSV0KEBf%2FGOWhDWb10nF3V6%2BfCOl5HwGRnz7rY3IgW2axPkZPKCaaXzvT9YtmSB7WyTIBMjGlCWV%2FEABxY9%2B%2F%2FybgtDkBt89gB6%2F5Tob4RbhvMaUS7BbBGlCN2tLpsLLUD03%2B9dBFMd48sa%2Fdr3U7CArKhJhsA1LI84iSlVYCh4gY9p0ZJcGMG09%2FURZE7j8nHcLgLqs1w4%2FIbrwx%2BHgTz0uFgDnEpPnEbmyw7UG2P4eMuFt4RtNgewiPsKGQRJwh1cVsJUFM8Oci%2BNhl%2FRJ5zCPxe3BBjqkAfZiqrgbfcYjEBVmjZUYW7DZc8cVyM%2Bp5tZtijAUmANVp05VO%2F%2FLHA%2FhmVXcpXXgUAdxtOcV9BwXonJxTie9JucWaKAvb16Xp0h6V9xQrM9ftxZjgQgCDWVMJSTzCNOE7lWGxeFayX86K7%2BYgd%2Fiuk320mtSglIFqyQ8%2FSATQeGfbhux%2BVrl8SCGNBJsFfNQy64V2bgQC%2BwQkFNd0NlRNPDfz2Em&X-Amz-Signature=b2441b12c7f79c00f1c5610a667d7c7e992bed3b8dc15b79590944bf8904126a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZBQ5LT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8j9zitxei8mCHeByh%2BRVUIt5iQGWn%2BVQR%2Bh8fn4YFcQIhALuqCuifXLZOfXA6sTflhpdZLcZcjtRGflZg9UXTdhXCKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKhLhhYGS6rx8dG9kq3AMyCb0QLe6ytWFo3JDy3yvROLWKvc%2B0OSMCpe71t%2BDPJJaK7UOkjJcVsGVLIX1ZpwyPcjmB6pPszrmrO0n%2FllRHTkiHmmOju%2BfT%2F3AjLajiHg3SQex3Eg6AFdK7EODhHjnGHtNSI02On5U%2Bb5VJ54zoc8Xjn3dxuIKfOjEbJp3TtYwNOOG8H7QaNDouyoXgKjmgca%2F2mIuzT2P%2FLoVZasZ2A%2BFZAYSgxsrgfzBFBs%2B9jaEnec4SIwQ7FIJFRR%2FFnhDEr5FQM5E61AU%2BXrLZOLGrQ9OYuSOHbJ7SeriwsUdAeQYHOASjhx65nx%2FVpBKraVA%2BSjd1aWkSWngLRVF700i8h%2FQRfALjgP9e1c%2BXrSV0KEBf%2FGOWhDWb10nF3V6%2BfCOl5HwGRnz7rY3IgW2axPkZPKCaaXzvT9YtmSB7WyTIBMjGlCWV%2FEABxY9%2B%2F%2FybgtDkBt89gB6%2F5Tob4RbhvMaUS7BbBGlCN2tLpsLLUD03%2B9dBFMd48sa%2Fdr3U7CArKhJhsA1LI84iSlVYCh4gY9p0ZJcGMG09%2FURZE7j8nHcLgLqs1w4%2FIbrwx%2BHgTz0uFgDnEpPnEbmyw7UG2P4eMuFt4RtNgewiPsKGQRJwh1cVsJUFM8Oci%2BNhl%2FRJ5zCPxe3BBjqkAfZiqrgbfcYjEBVmjZUYW7DZc8cVyM%2Bp5tZtijAUmANVp05VO%2F%2FLHA%2FhmVXcpXXgUAdxtOcV9BwXonJxTie9JucWaKAvb16Xp0h6V9xQrM9ftxZjgQgCDWVMJSTzCNOE7lWGxeFayX86K7%2BYgd%2Fiuk320mtSglIFqyQ8%2FSATQeGfbhux%2BVrl8SCGNBJsFfNQy64V2bgQC%2BwQkFNd0NlRNPDfz2Em&X-Amz-Signature=7bc32d80d492f672dff4bab9628fda402a16eac8a96d75d8cbc5c8bff63a039d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZBQ5LT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8j9zitxei8mCHeByh%2BRVUIt5iQGWn%2BVQR%2Bh8fn4YFcQIhALuqCuifXLZOfXA6sTflhpdZLcZcjtRGflZg9UXTdhXCKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKhLhhYGS6rx8dG9kq3AMyCb0QLe6ytWFo3JDy3yvROLWKvc%2B0OSMCpe71t%2BDPJJaK7UOkjJcVsGVLIX1ZpwyPcjmB6pPszrmrO0n%2FllRHTkiHmmOju%2BfT%2F3AjLajiHg3SQex3Eg6AFdK7EODhHjnGHtNSI02On5U%2Bb5VJ54zoc8Xjn3dxuIKfOjEbJp3TtYwNOOG8H7QaNDouyoXgKjmgca%2F2mIuzT2P%2FLoVZasZ2A%2BFZAYSgxsrgfzBFBs%2B9jaEnec4SIwQ7FIJFRR%2FFnhDEr5FQM5E61AU%2BXrLZOLGrQ9OYuSOHbJ7SeriwsUdAeQYHOASjhx65nx%2FVpBKraVA%2BSjd1aWkSWngLRVF700i8h%2FQRfALjgP9e1c%2BXrSV0KEBf%2FGOWhDWb10nF3V6%2BfCOl5HwGRnz7rY3IgW2axPkZPKCaaXzvT9YtmSB7WyTIBMjGlCWV%2FEABxY9%2B%2F%2FybgtDkBt89gB6%2F5Tob4RbhvMaUS7BbBGlCN2tLpsLLUD03%2B9dBFMd48sa%2Fdr3U7CArKhJhsA1LI84iSlVYCh4gY9p0ZJcGMG09%2FURZE7j8nHcLgLqs1w4%2FIbrwx%2BHgTz0uFgDnEpPnEbmyw7UG2P4eMuFt4RtNgewiPsKGQRJwh1cVsJUFM8Oci%2BNhl%2FRJ5zCPxe3BBjqkAfZiqrgbfcYjEBVmjZUYW7DZc8cVyM%2Bp5tZtijAUmANVp05VO%2F%2FLHA%2FhmVXcpXXgUAdxtOcV9BwXonJxTie9JucWaKAvb16Xp0h6V9xQrM9ftxZjgQgCDWVMJSTzCNOE7lWGxeFayX86K7%2BYgd%2Fiuk320mtSglIFqyQ8%2FSATQeGfbhux%2BVrl8SCGNBJsFfNQy64V2bgQC%2BwQkFNd0NlRNPDfz2Em&X-Amz-Signature=d11f9c162a365fd4dda761dac46d67b3ab5dedf33e556111a4dffec1f2612396&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZBQ5LT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8j9zitxei8mCHeByh%2BRVUIt5iQGWn%2BVQR%2Bh8fn4YFcQIhALuqCuifXLZOfXA6sTflhpdZLcZcjtRGflZg9UXTdhXCKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKhLhhYGS6rx8dG9kq3AMyCb0QLe6ytWFo3JDy3yvROLWKvc%2B0OSMCpe71t%2BDPJJaK7UOkjJcVsGVLIX1ZpwyPcjmB6pPszrmrO0n%2FllRHTkiHmmOju%2BfT%2F3AjLajiHg3SQex3Eg6AFdK7EODhHjnGHtNSI02On5U%2Bb5VJ54zoc8Xjn3dxuIKfOjEbJp3TtYwNOOG8H7QaNDouyoXgKjmgca%2F2mIuzT2P%2FLoVZasZ2A%2BFZAYSgxsrgfzBFBs%2B9jaEnec4SIwQ7FIJFRR%2FFnhDEr5FQM5E61AU%2BXrLZOLGrQ9OYuSOHbJ7SeriwsUdAeQYHOASjhx65nx%2FVpBKraVA%2BSjd1aWkSWngLRVF700i8h%2FQRfALjgP9e1c%2BXrSV0KEBf%2FGOWhDWb10nF3V6%2BfCOl5HwGRnz7rY3IgW2axPkZPKCaaXzvT9YtmSB7WyTIBMjGlCWV%2FEABxY9%2B%2F%2FybgtDkBt89gB6%2F5Tob4RbhvMaUS7BbBGlCN2tLpsLLUD03%2B9dBFMd48sa%2Fdr3U7CArKhJhsA1LI84iSlVYCh4gY9p0ZJcGMG09%2FURZE7j8nHcLgLqs1w4%2FIbrwx%2BHgTz0uFgDnEpPnEbmyw7UG2P4eMuFt4RtNgewiPsKGQRJwh1cVsJUFM8Oci%2BNhl%2FRJ5zCPxe3BBjqkAfZiqrgbfcYjEBVmjZUYW7DZc8cVyM%2Bp5tZtijAUmANVp05VO%2F%2FLHA%2FhmVXcpXXgUAdxtOcV9BwXonJxTie9JucWaKAvb16Xp0h6V9xQrM9ftxZjgQgCDWVMJSTzCNOE7lWGxeFayX86K7%2BYgd%2Fiuk320mtSglIFqyQ8%2FSATQeGfbhux%2BVrl8SCGNBJsFfNQy64V2bgQC%2BwQkFNd0NlRNPDfz2Em&X-Amz-Signature=4f4977c949acb9af1e28595ae65c81cba71d9db93dac24e5cc398d98dc0920eb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZBQ5LT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8j9zitxei8mCHeByh%2BRVUIt5iQGWn%2BVQR%2Bh8fn4YFcQIhALuqCuifXLZOfXA6sTflhpdZLcZcjtRGflZg9UXTdhXCKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKhLhhYGS6rx8dG9kq3AMyCb0QLe6ytWFo3JDy3yvROLWKvc%2B0OSMCpe71t%2BDPJJaK7UOkjJcVsGVLIX1ZpwyPcjmB6pPszrmrO0n%2FllRHTkiHmmOju%2BfT%2F3AjLajiHg3SQex3Eg6AFdK7EODhHjnGHtNSI02On5U%2Bb5VJ54zoc8Xjn3dxuIKfOjEbJp3TtYwNOOG8H7QaNDouyoXgKjmgca%2F2mIuzT2P%2FLoVZasZ2A%2BFZAYSgxsrgfzBFBs%2B9jaEnec4SIwQ7FIJFRR%2FFnhDEr5FQM5E61AU%2BXrLZOLGrQ9OYuSOHbJ7SeriwsUdAeQYHOASjhx65nx%2FVpBKraVA%2BSjd1aWkSWngLRVF700i8h%2FQRfALjgP9e1c%2BXrSV0KEBf%2FGOWhDWb10nF3V6%2BfCOl5HwGRnz7rY3IgW2axPkZPKCaaXzvT9YtmSB7WyTIBMjGlCWV%2FEABxY9%2B%2F%2FybgtDkBt89gB6%2F5Tob4RbhvMaUS7BbBGlCN2tLpsLLUD03%2B9dBFMd48sa%2Fdr3U7CArKhJhsA1LI84iSlVYCh4gY9p0ZJcGMG09%2FURZE7j8nHcLgLqs1w4%2FIbrwx%2BHgTz0uFgDnEpPnEbmyw7UG2P4eMuFt4RtNgewiPsKGQRJwh1cVsJUFM8Oci%2BNhl%2FRJ5zCPxe3BBjqkAfZiqrgbfcYjEBVmjZUYW7DZc8cVyM%2Bp5tZtijAUmANVp05VO%2F%2FLHA%2FhmVXcpXXgUAdxtOcV9BwXonJxTie9JucWaKAvb16Xp0h6V9xQrM9ftxZjgQgCDWVMJSTzCNOE7lWGxeFayX86K7%2BYgd%2Fiuk320mtSglIFqyQ8%2FSATQeGfbhux%2BVrl8SCGNBJsFfNQy64V2bgQC%2BwQkFNd0NlRNPDfz2Em&X-Amz-Signature=39f10e995dd9c3bc84fa63e63f6f1d411235422f002cae84153c5a51457a8a38&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZBQ5LT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8j9zitxei8mCHeByh%2BRVUIt5iQGWn%2BVQR%2Bh8fn4YFcQIhALuqCuifXLZOfXA6sTflhpdZLcZcjtRGflZg9UXTdhXCKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKhLhhYGS6rx8dG9kq3AMyCb0QLe6ytWFo3JDy3yvROLWKvc%2B0OSMCpe71t%2BDPJJaK7UOkjJcVsGVLIX1ZpwyPcjmB6pPszrmrO0n%2FllRHTkiHmmOju%2BfT%2F3AjLajiHg3SQex3Eg6AFdK7EODhHjnGHtNSI02On5U%2Bb5VJ54zoc8Xjn3dxuIKfOjEbJp3TtYwNOOG8H7QaNDouyoXgKjmgca%2F2mIuzT2P%2FLoVZasZ2A%2BFZAYSgxsrgfzBFBs%2B9jaEnec4SIwQ7FIJFRR%2FFnhDEr5FQM5E61AU%2BXrLZOLGrQ9OYuSOHbJ7SeriwsUdAeQYHOASjhx65nx%2FVpBKraVA%2BSjd1aWkSWngLRVF700i8h%2FQRfALjgP9e1c%2BXrSV0KEBf%2FGOWhDWb10nF3V6%2BfCOl5HwGRnz7rY3IgW2axPkZPKCaaXzvT9YtmSB7WyTIBMjGlCWV%2FEABxY9%2B%2F%2FybgtDkBt89gB6%2F5Tob4RbhvMaUS7BbBGlCN2tLpsLLUD03%2B9dBFMd48sa%2Fdr3U7CArKhJhsA1LI84iSlVYCh4gY9p0ZJcGMG09%2FURZE7j8nHcLgLqs1w4%2FIbrwx%2BHgTz0uFgDnEpPnEbmyw7UG2P4eMuFt4RtNgewiPsKGQRJwh1cVsJUFM8Oci%2BNhl%2FRJ5zCPxe3BBjqkAfZiqrgbfcYjEBVmjZUYW7DZc8cVyM%2Bp5tZtijAUmANVp05VO%2F%2FLHA%2FhmVXcpXXgUAdxtOcV9BwXonJxTie9JucWaKAvb16Xp0h6V9xQrM9ftxZjgQgCDWVMJSTzCNOE7lWGxeFayX86K7%2BYgd%2Fiuk320mtSglIFqyQ8%2FSATQeGfbhux%2BVrl8SCGNBJsFfNQy64V2bgQC%2BwQkFNd0NlRNPDfz2Em&X-Amz-Signature=d8101529a110f33c6845bf55de0d7804b73cec7a343fba0ba95dedfc04f0e903&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
