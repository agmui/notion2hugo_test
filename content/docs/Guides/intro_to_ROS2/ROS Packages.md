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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSDSPGO%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDgZkbCTI4IX1aOU5Ztvb8lFbQfK%2FWJnf7eyJO%2BOcJXcAiAX3x5DSx%2BGYUx9O9rMBPfjbPesMFcfSrmwo195HprAbyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7pE5ze8xbpUaxjdKtwDA2v5Ces7esajBHnUJYkJKT5XSrXYnvFFxGZmnebVoYg2wwmeTpCGHWUVYiYS375xsg%2BhtyD1vHDICRNyBBWJHcvx%2BqxeZ6Bei%2FYphtkqfIQRD34L1H5A16x0jbFcr2%2BMsvQkKxYFf9LUxDzoewASvZgt91OSKIzSOKt%2B3EPruAp%2BV6hZ3AdnlmHaDb9YzAThLoTLpxkloaLKlTrTPUglS1NVTwAwGbXWP1cxSwp2AnWqdGCro0%2B5W3SGalico3mC8eq5LOqepAWMs%2FBwbVemxANbEpdcBrqHu7OaB9PIPZIr7Z6W7DNXNopOI3EXUItDr5YKu1weUb3aRIFrShwI5D%2B22PyAb%2Bg%2FsfFxjmOFiZlUHyLNbACgSmEX571q4IyIgGzwHx9Z022JYZ5g0lBcTMxwiAHor%2B9Rt9gdz3%2F%2BW0aVy06v1GWll%2BqOLHDNCDooVAtYeJYhLazFiEd%2FoX%2FRZFVi%2BPO4yoQBTxoWu1V7Oz9QnK87mijVmoV9lqM%2BPXCg94YeraQAzD7SAN8jZ1Cdhnm9wvzVrg72vi3NedbLv3rViVFMBlS%2FYMHDFT6GpmGF13V9al30MIb66HSx0fr2KXyHN1XlKLUhouMh1T1kGrG8iS9oMXFK4Ei69Cow%2FOitzQY6pgGAPpPoiXCVmbQKQJnuaklBdsYdVXUCGBGvMGrHzUgjj1eC9q7tO9l47x9b2zdyxZ4yETruS0FENADDgf%2BX1RJdwtUkPNDlrTbJXIggxgBTliH%2BaPfCfqnwqbZi3S3a1%2BRs8bN%2BrK7i%2FDsH6TRgyvIYlTarquLNnu9VCpfBL%2FTTBHC6z4Ok7YypTniCh30Eb3udIpkrOsjd5dh0gotuDihG%2BLeHCS2c&X-Amz-Signature=2e7eba64769fa818a64377a8fe9c24d1d63dcb4aa4643ad35bd80ddd231188cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSDSPGO%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDgZkbCTI4IX1aOU5Ztvb8lFbQfK%2FWJnf7eyJO%2BOcJXcAiAX3x5DSx%2BGYUx9O9rMBPfjbPesMFcfSrmwo195HprAbyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7pE5ze8xbpUaxjdKtwDA2v5Ces7esajBHnUJYkJKT5XSrXYnvFFxGZmnebVoYg2wwmeTpCGHWUVYiYS375xsg%2BhtyD1vHDICRNyBBWJHcvx%2BqxeZ6Bei%2FYphtkqfIQRD34L1H5A16x0jbFcr2%2BMsvQkKxYFf9LUxDzoewASvZgt91OSKIzSOKt%2B3EPruAp%2BV6hZ3AdnlmHaDb9YzAThLoTLpxkloaLKlTrTPUglS1NVTwAwGbXWP1cxSwp2AnWqdGCro0%2B5W3SGalico3mC8eq5LOqepAWMs%2FBwbVemxANbEpdcBrqHu7OaB9PIPZIr7Z6W7DNXNopOI3EXUItDr5YKu1weUb3aRIFrShwI5D%2B22PyAb%2Bg%2FsfFxjmOFiZlUHyLNbACgSmEX571q4IyIgGzwHx9Z022JYZ5g0lBcTMxwiAHor%2B9Rt9gdz3%2F%2BW0aVy06v1GWll%2BqOLHDNCDooVAtYeJYhLazFiEd%2FoX%2FRZFVi%2BPO4yoQBTxoWu1V7Oz9QnK87mijVmoV9lqM%2BPXCg94YeraQAzD7SAN8jZ1Cdhnm9wvzVrg72vi3NedbLv3rViVFMBlS%2FYMHDFT6GpmGF13V9al30MIb66HSx0fr2KXyHN1XlKLUhouMh1T1kGrG8iS9oMXFK4Ei69Cow%2FOitzQY6pgGAPpPoiXCVmbQKQJnuaklBdsYdVXUCGBGvMGrHzUgjj1eC9q7tO9l47x9b2zdyxZ4yETruS0FENADDgf%2BX1RJdwtUkPNDlrTbJXIggxgBTliH%2BaPfCfqnwqbZi3S3a1%2BRs8bN%2BrK7i%2FDsH6TRgyvIYlTarquLNnu9VCpfBL%2FTTBHC6z4Ok7YypTniCh30Eb3udIpkrOsjd5dh0gotuDihG%2BLeHCS2c&X-Amz-Signature=074051f749014701abfcf706ba1bbf974b89ca869f5f741752de44af7f0768ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSDSPGO%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDgZkbCTI4IX1aOU5Ztvb8lFbQfK%2FWJnf7eyJO%2BOcJXcAiAX3x5DSx%2BGYUx9O9rMBPfjbPesMFcfSrmwo195HprAbyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7pE5ze8xbpUaxjdKtwDA2v5Ces7esajBHnUJYkJKT5XSrXYnvFFxGZmnebVoYg2wwmeTpCGHWUVYiYS375xsg%2BhtyD1vHDICRNyBBWJHcvx%2BqxeZ6Bei%2FYphtkqfIQRD34L1H5A16x0jbFcr2%2BMsvQkKxYFf9LUxDzoewASvZgt91OSKIzSOKt%2B3EPruAp%2BV6hZ3AdnlmHaDb9YzAThLoTLpxkloaLKlTrTPUglS1NVTwAwGbXWP1cxSwp2AnWqdGCro0%2B5W3SGalico3mC8eq5LOqepAWMs%2FBwbVemxANbEpdcBrqHu7OaB9PIPZIr7Z6W7DNXNopOI3EXUItDr5YKu1weUb3aRIFrShwI5D%2B22PyAb%2Bg%2FsfFxjmOFiZlUHyLNbACgSmEX571q4IyIgGzwHx9Z022JYZ5g0lBcTMxwiAHor%2B9Rt9gdz3%2F%2BW0aVy06v1GWll%2BqOLHDNCDooVAtYeJYhLazFiEd%2FoX%2FRZFVi%2BPO4yoQBTxoWu1V7Oz9QnK87mijVmoV9lqM%2BPXCg94YeraQAzD7SAN8jZ1Cdhnm9wvzVrg72vi3NedbLv3rViVFMBlS%2FYMHDFT6GpmGF13V9al30MIb66HSx0fr2KXyHN1XlKLUhouMh1T1kGrG8iS9oMXFK4Ei69Cow%2FOitzQY6pgGAPpPoiXCVmbQKQJnuaklBdsYdVXUCGBGvMGrHzUgjj1eC9q7tO9l47x9b2zdyxZ4yETruS0FENADDgf%2BX1RJdwtUkPNDlrTbJXIggxgBTliH%2BaPfCfqnwqbZi3S3a1%2BRs8bN%2BrK7i%2FDsH6TRgyvIYlTarquLNnu9VCpfBL%2FTTBHC6z4Ok7YypTniCh30Eb3udIpkrOsjd5dh0gotuDihG%2BLeHCS2c&X-Amz-Signature=df06c15549a3afffda83e69044952622de72f69facc2536b59983ffb31a43571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSDSPGO%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDgZkbCTI4IX1aOU5Ztvb8lFbQfK%2FWJnf7eyJO%2BOcJXcAiAX3x5DSx%2BGYUx9O9rMBPfjbPesMFcfSrmwo195HprAbyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7pE5ze8xbpUaxjdKtwDA2v5Ces7esajBHnUJYkJKT5XSrXYnvFFxGZmnebVoYg2wwmeTpCGHWUVYiYS375xsg%2BhtyD1vHDICRNyBBWJHcvx%2BqxeZ6Bei%2FYphtkqfIQRD34L1H5A16x0jbFcr2%2BMsvQkKxYFf9LUxDzoewASvZgt91OSKIzSOKt%2B3EPruAp%2BV6hZ3AdnlmHaDb9YzAThLoTLpxkloaLKlTrTPUglS1NVTwAwGbXWP1cxSwp2AnWqdGCro0%2B5W3SGalico3mC8eq5LOqepAWMs%2FBwbVemxANbEpdcBrqHu7OaB9PIPZIr7Z6W7DNXNopOI3EXUItDr5YKu1weUb3aRIFrShwI5D%2B22PyAb%2Bg%2FsfFxjmOFiZlUHyLNbACgSmEX571q4IyIgGzwHx9Z022JYZ5g0lBcTMxwiAHor%2B9Rt9gdz3%2F%2BW0aVy06v1GWll%2BqOLHDNCDooVAtYeJYhLazFiEd%2FoX%2FRZFVi%2BPO4yoQBTxoWu1V7Oz9QnK87mijVmoV9lqM%2BPXCg94YeraQAzD7SAN8jZ1Cdhnm9wvzVrg72vi3NedbLv3rViVFMBlS%2FYMHDFT6GpmGF13V9al30MIb66HSx0fr2KXyHN1XlKLUhouMh1T1kGrG8iS9oMXFK4Ei69Cow%2FOitzQY6pgGAPpPoiXCVmbQKQJnuaklBdsYdVXUCGBGvMGrHzUgjj1eC9q7tO9l47x9b2zdyxZ4yETruS0FENADDgf%2BX1RJdwtUkPNDlrTbJXIggxgBTliH%2BaPfCfqnwqbZi3S3a1%2BRs8bN%2BrK7i%2FDsH6TRgyvIYlTarquLNnu9VCpfBL%2FTTBHC6z4Ok7YypTniCh30Eb3udIpkrOsjd5dh0gotuDihG%2BLeHCS2c&X-Amz-Signature=68f2a6ab86534db5b4c9c546cce34e0f779fd6eec2456219efeda5aa5c56eb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSDSPGO%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDgZkbCTI4IX1aOU5Ztvb8lFbQfK%2FWJnf7eyJO%2BOcJXcAiAX3x5DSx%2BGYUx9O9rMBPfjbPesMFcfSrmwo195HprAbyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7pE5ze8xbpUaxjdKtwDA2v5Ces7esajBHnUJYkJKT5XSrXYnvFFxGZmnebVoYg2wwmeTpCGHWUVYiYS375xsg%2BhtyD1vHDICRNyBBWJHcvx%2BqxeZ6Bei%2FYphtkqfIQRD34L1H5A16x0jbFcr2%2BMsvQkKxYFf9LUxDzoewASvZgt91OSKIzSOKt%2B3EPruAp%2BV6hZ3AdnlmHaDb9YzAThLoTLpxkloaLKlTrTPUglS1NVTwAwGbXWP1cxSwp2AnWqdGCro0%2B5W3SGalico3mC8eq5LOqepAWMs%2FBwbVemxANbEpdcBrqHu7OaB9PIPZIr7Z6W7DNXNopOI3EXUItDr5YKu1weUb3aRIFrShwI5D%2B22PyAb%2Bg%2FsfFxjmOFiZlUHyLNbACgSmEX571q4IyIgGzwHx9Z022JYZ5g0lBcTMxwiAHor%2B9Rt9gdz3%2F%2BW0aVy06v1GWll%2BqOLHDNCDooVAtYeJYhLazFiEd%2FoX%2FRZFVi%2BPO4yoQBTxoWu1V7Oz9QnK87mijVmoV9lqM%2BPXCg94YeraQAzD7SAN8jZ1Cdhnm9wvzVrg72vi3NedbLv3rViVFMBlS%2FYMHDFT6GpmGF13V9al30MIb66HSx0fr2KXyHN1XlKLUhouMh1T1kGrG8iS9oMXFK4Ei69Cow%2FOitzQY6pgGAPpPoiXCVmbQKQJnuaklBdsYdVXUCGBGvMGrHzUgjj1eC9q7tO9l47x9b2zdyxZ4yETruS0FENADDgf%2BX1RJdwtUkPNDlrTbJXIggxgBTliH%2BaPfCfqnwqbZi3S3a1%2BRs8bN%2BrK7i%2FDsH6TRgyvIYlTarquLNnu9VCpfBL%2FTTBHC6z4Ok7YypTniCh30Eb3udIpkrOsjd5dh0gotuDihG%2BLeHCS2c&X-Amz-Signature=c595f58910eabb43bb896fef043b8dc2e02d94a50b5745977384d6a2041ebe7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSDSPGO%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDgZkbCTI4IX1aOU5Ztvb8lFbQfK%2FWJnf7eyJO%2BOcJXcAiAX3x5DSx%2BGYUx9O9rMBPfjbPesMFcfSrmwo195HprAbyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7pE5ze8xbpUaxjdKtwDA2v5Ces7esajBHnUJYkJKT5XSrXYnvFFxGZmnebVoYg2wwmeTpCGHWUVYiYS375xsg%2BhtyD1vHDICRNyBBWJHcvx%2BqxeZ6Bei%2FYphtkqfIQRD34L1H5A16x0jbFcr2%2BMsvQkKxYFf9LUxDzoewASvZgt91OSKIzSOKt%2B3EPruAp%2BV6hZ3AdnlmHaDb9YzAThLoTLpxkloaLKlTrTPUglS1NVTwAwGbXWP1cxSwp2AnWqdGCro0%2B5W3SGalico3mC8eq5LOqepAWMs%2FBwbVemxANbEpdcBrqHu7OaB9PIPZIr7Z6W7DNXNopOI3EXUItDr5YKu1weUb3aRIFrShwI5D%2B22PyAb%2Bg%2FsfFxjmOFiZlUHyLNbACgSmEX571q4IyIgGzwHx9Z022JYZ5g0lBcTMxwiAHor%2B9Rt9gdz3%2F%2BW0aVy06v1GWll%2BqOLHDNCDooVAtYeJYhLazFiEd%2FoX%2FRZFVi%2BPO4yoQBTxoWu1V7Oz9QnK87mijVmoV9lqM%2BPXCg94YeraQAzD7SAN8jZ1Cdhnm9wvzVrg72vi3NedbLv3rViVFMBlS%2FYMHDFT6GpmGF13V9al30MIb66HSx0fr2KXyHN1XlKLUhouMh1T1kGrG8iS9oMXFK4Ei69Cow%2FOitzQY6pgGAPpPoiXCVmbQKQJnuaklBdsYdVXUCGBGvMGrHzUgjj1eC9q7tO9l47x9b2zdyxZ4yETruS0FENADDgf%2BX1RJdwtUkPNDlrTbJXIggxgBTliH%2BaPfCfqnwqbZi3S3a1%2BRs8bN%2BrK7i%2FDsH6TRgyvIYlTarquLNnu9VCpfBL%2FTTBHC6z4Ok7YypTniCh30Eb3udIpkrOsjd5dh0gotuDihG%2BLeHCS2c&X-Amz-Signature=17aa369e9c161b040524bcb6a337d7b74f2feefc3cda81da9ae74decd07b6e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSDSPGO%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDgZkbCTI4IX1aOU5Ztvb8lFbQfK%2FWJnf7eyJO%2BOcJXcAiAX3x5DSx%2BGYUx9O9rMBPfjbPesMFcfSrmwo195HprAbyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7pE5ze8xbpUaxjdKtwDA2v5Ces7esajBHnUJYkJKT5XSrXYnvFFxGZmnebVoYg2wwmeTpCGHWUVYiYS375xsg%2BhtyD1vHDICRNyBBWJHcvx%2BqxeZ6Bei%2FYphtkqfIQRD34L1H5A16x0jbFcr2%2BMsvQkKxYFf9LUxDzoewASvZgt91OSKIzSOKt%2B3EPruAp%2BV6hZ3AdnlmHaDb9YzAThLoTLpxkloaLKlTrTPUglS1NVTwAwGbXWP1cxSwp2AnWqdGCro0%2B5W3SGalico3mC8eq5LOqepAWMs%2FBwbVemxANbEpdcBrqHu7OaB9PIPZIr7Z6W7DNXNopOI3EXUItDr5YKu1weUb3aRIFrShwI5D%2B22PyAb%2Bg%2FsfFxjmOFiZlUHyLNbACgSmEX571q4IyIgGzwHx9Z022JYZ5g0lBcTMxwiAHor%2B9Rt9gdz3%2F%2BW0aVy06v1GWll%2BqOLHDNCDooVAtYeJYhLazFiEd%2FoX%2FRZFVi%2BPO4yoQBTxoWu1V7Oz9QnK87mijVmoV9lqM%2BPXCg94YeraQAzD7SAN8jZ1Cdhnm9wvzVrg72vi3NedbLv3rViVFMBlS%2FYMHDFT6GpmGF13V9al30MIb66HSx0fr2KXyHN1XlKLUhouMh1T1kGrG8iS9oMXFK4Ei69Cow%2FOitzQY6pgGAPpPoiXCVmbQKQJnuaklBdsYdVXUCGBGvMGrHzUgjj1eC9q7tO9l47x9b2zdyxZ4yETruS0FENADDgf%2BX1RJdwtUkPNDlrTbJXIggxgBTliH%2BaPfCfqnwqbZi3S3a1%2BRs8bN%2BrK7i%2FDsH6TRgyvIYlTarquLNnu9VCpfBL%2FTTBHC6z4Ok7YypTniCh30Eb3udIpkrOsjd5dh0gotuDihG%2BLeHCS2c&X-Amz-Signature=8b5910e02b5f127641cf2185eafcca4cd244064d0c18a31f26b4523e5ffefdbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
