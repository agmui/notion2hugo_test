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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEHEM7M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrMMRTaeJjjos1Qt1RCipyuEQNJ8fy%2BSVoNsErjXUxQIhAIwgRjKHfl3XmublaFlZ%2FpLpgfFZ175RJRIUXDq0SwzZKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFEK5rI2w6wxKkD4q3ANojYFd4%2F%2B9vLrkabwTeIb%2BQtlRi6N7GbDwUgLR5%2Fy3FpkJvTrUfUQpyTKNhH63N1g1XGlSIfQ8Xu2TSflUIJJ0GvFbHfTpduF1%2BiSf3fCGFebF%2BQFdGxs8VYawzgm3MYs2Z6BxUMxTGHCzrnps%2FEq3ywWFbiJBzVfK%2B1c7u5krqps%2Fukjmx3xZ9pFhhaiVPDwHWZYfbH%2Fp6d7LvRd7828R%2FUmqD60Hl%2F%2FFUGpI8D7L1HPN0iybElq1mkwAeSwC1IbmC4nfdpjiKH%2FSeexQGbQfqLSZi%2BHZM53F2JN7oWlTSs01br5NTvtolq%2BKY3VmYSXwMnTHSzvfjAlbx9H9is1D85dvVnekFuSzljP%2BSQ7Ne4TrKS8r7a2OKgd7rgL%2BW27cXFXyLt%2FwnCwGNFq9dipnpunCqBPxC7p%2BaEvLYPV8owi38EQOtpxqXXq76qGJ0lRdfB5X64rf3yDySQ8Fhg4GnuA1VN2JjXpF5COJBUt1KBRsanJVe9uqxX1C0cJFwvi0LE3VMv8jE1Wig9h9rUtF8Gy3EfB%2Bdf8u%2FKTAfI8rTRql%2FXULCM050tkAQX89VAb71IzWYW9pwIj5Gc80AphtRbfc9HrIp6CD988bdZtOSxsTSlZU8GO4b2gPjzCNluPEBjqkAU%2Bq%2BvU29iMX2HRbo68943cYL0OUKlz6coGXj9aRMuIPQ2CuTTPAC7pupHxiAZn0hCqHELCFKLe3YkjV1k%2FE3yNSxwspIEPHXbHKNLzbiFneA2t0nmUA0IoaQkNRNHXjEqKSplLKEszReiUC6o3foomBeTn1COFuTATN6AzBbHhYMmrl%2Fw16gtQmH1UyFsdN%2F%2FwtkQpqNpqnf5IvJuuUeBN27sx1&X-Amz-Signature=747473c6276dea97c3b2cf6d2331ca0f022092bf68771e75241ea37bf09b0495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEHEM7M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrMMRTaeJjjos1Qt1RCipyuEQNJ8fy%2BSVoNsErjXUxQIhAIwgRjKHfl3XmublaFlZ%2FpLpgfFZ175RJRIUXDq0SwzZKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFEK5rI2w6wxKkD4q3ANojYFd4%2F%2B9vLrkabwTeIb%2BQtlRi6N7GbDwUgLR5%2Fy3FpkJvTrUfUQpyTKNhH63N1g1XGlSIfQ8Xu2TSflUIJJ0GvFbHfTpduF1%2BiSf3fCGFebF%2BQFdGxs8VYawzgm3MYs2Z6BxUMxTGHCzrnps%2FEq3ywWFbiJBzVfK%2B1c7u5krqps%2Fukjmx3xZ9pFhhaiVPDwHWZYfbH%2Fp6d7LvRd7828R%2FUmqD60Hl%2F%2FFUGpI8D7L1HPN0iybElq1mkwAeSwC1IbmC4nfdpjiKH%2FSeexQGbQfqLSZi%2BHZM53F2JN7oWlTSs01br5NTvtolq%2BKY3VmYSXwMnTHSzvfjAlbx9H9is1D85dvVnekFuSzljP%2BSQ7Ne4TrKS8r7a2OKgd7rgL%2BW27cXFXyLt%2FwnCwGNFq9dipnpunCqBPxC7p%2BaEvLYPV8owi38EQOtpxqXXq76qGJ0lRdfB5X64rf3yDySQ8Fhg4GnuA1VN2JjXpF5COJBUt1KBRsanJVe9uqxX1C0cJFwvi0LE3VMv8jE1Wig9h9rUtF8Gy3EfB%2Bdf8u%2FKTAfI8rTRql%2FXULCM050tkAQX89VAb71IzWYW9pwIj5Gc80AphtRbfc9HrIp6CD988bdZtOSxsTSlZU8GO4b2gPjzCNluPEBjqkAU%2Bq%2BvU29iMX2HRbo68943cYL0OUKlz6coGXj9aRMuIPQ2CuTTPAC7pupHxiAZn0hCqHELCFKLe3YkjV1k%2FE3yNSxwspIEPHXbHKNLzbiFneA2t0nmUA0IoaQkNRNHXjEqKSplLKEszReiUC6o3foomBeTn1COFuTATN6AzBbHhYMmrl%2Fw16gtQmH1UyFsdN%2F%2FwtkQpqNpqnf5IvJuuUeBN27sx1&X-Amz-Signature=37865b57f75c1d1c13d7afb2440c6b0da8d548bed9525274b4c5dfae6cddf27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEHEM7M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrMMRTaeJjjos1Qt1RCipyuEQNJ8fy%2BSVoNsErjXUxQIhAIwgRjKHfl3XmublaFlZ%2FpLpgfFZ175RJRIUXDq0SwzZKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFEK5rI2w6wxKkD4q3ANojYFd4%2F%2B9vLrkabwTeIb%2BQtlRi6N7GbDwUgLR5%2Fy3FpkJvTrUfUQpyTKNhH63N1g1XGlSIfQ8Xu2TSflUIJJ0GvFbHfTpduF1%2BiSf3fCGFebF%2BQFdGxs8VYawzgm3MYs2Z6BxUMxTGHCzrnps%2FEq3ywWFbiJBzVfK%2B1c7u5krqps%2Fukjmx3xZ9pFhhaiVPDwHWZYfbH%2Fp6d7LvRd7828R%2FUmqD60Hl%2F%2FFUGpI8D7L1HPN0iybElq1mkwAeSwC1IbmC4nfdpjiKH%2FSeexQGbQfqLSZi%2BHZM53F2JN7oWlTSs01br5NTvtolq%2BKY3VmYSXwMnTHSzvfjAlbx9H9is1D85dvVnekFuSzljP%2BSQ7Ne4TrKS8r7a2OKgd7rgL%2BW27cXFXyLt%2FwnCwGNFq9dipnpunCqBPxC7p%2BaEvLYPV8owi38EQOtpxqXXq76qGJ0lRdfB5X64rf3yDySQ8Fhg4GnuA1VN2JjXpF5COJBUt1KBRsanJVe9uqxX1C0cJFwvi0LE3VMv8jE1Wig9h9rUtF8Gy3EfB%2Bdf8u%2FKTAfI8rTRql%2FXULCM050tkAQX89VAb71IzWYW9pwIj5Gc80AphtRbfc9HrIp6CD988bdZtOSxsTSlZU8GO4b2gPjzCNluPEBjqkAU%2Bq%2BvU29iMX2HRbo68943cYL0OUKlz6coGXj9aRMuIPQ2CuTTPAC7pupHxiAZn0hCqHELCFKLe3YkjV1k%2FE3yNSxwspIEPHXbHKNLzbiFneA2t0nmUA0IoaQkNRNHXjEqKSplLKEszReiUC6o3foomBeTn1COFuTATN6AzBbHhYMmrl%2Fw16gtQmH1UyFsdN%2F%2FwtkQpqNpqnf5IvJuuUeBN27sx1&X-Amz-Signature=32e53ad71835f13e5ebd5869a32f6d49323f473f9ecfe6a04342c03a60fde549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEHEM7M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrMMRTaeJjjos1Qt1RCipyuEQNJ8fy%2BSVoNsErjXUxQIhAIwgRjKHfl3XmublaFlZ%2FpLpgfFZ175RJRIUXDq0SwzZKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFEK5rI2w6wxKkD4q3ANojYFd4%2F%2B9vLrkabwTeIb%2BQtlRi6N7GbDwUgLR5%2Fy3FpkJvTrUfUQpyTKNhH63N1g1XGlSIfQ8Xu2TSflUIJJ0GvFbHfTpduF1%2BiSf3fCGFebF%2BQFdGxs8VYawzgm3MYs2Z6BxUMxTGHCzrnps%2FEq3ywWFbiJBzVfK%2B1c7u5krqps%2Fukjmx3xZ9pFhhaiVPDwHWZYfbH%2Fp6d7LvRd7828R%2FUmqD60Hl%2F%2FFUGpI8D7L1HPN0iybElq1mkwAeSwC1IbmC4nfdpjiKH%2FSeexQGbQfqLSZi%2BHZM53F2JN7oWlTSs01br5NTvtolq%2BKY3VmYSXwMnTHSzvfjAlbx9H9is1D85dvVnekFuSzljP%2BSQ7Ne4TrKS8r7a2OKgd7rgL%2BW27cXFXyLt%2FwnCwGNFq9dipnpunCqBPxC7p%2BaEvLYPV8owi38EQOtpxqXXq76qGJ0lRdfB5X64rf3yDySQ8Fhg4GnuA1VN2JjXpF5COJBUt1KBRsanJVe9uqxX1C0cJFwvi0LE3VMv8jE1Wig9h9rUtF8Gy3EfB%2Bdf8u%2FKTAfI8rTRql%2FXULCM050tkAQX89VAb71IzWYW9pwIj5Gc80AphtRbfc9HrIp6CD988bdZtOSxsTSlZU8GO4b2gPjzCNluPEBjqkAU%2Bq%2BvU29iMX2HRbo68943cYL0OUKlz6coGXj9aRMuIPQ2CuTTPAC7pupHxiAZn0hCqHELCFKLe3YkjV1k%2FE3yNSxwspIEPHXbHKNLzbiFneA2t0nmUA0IoaQkNRNHXjEqKSplLKEszReiUC6o3foomBeTn1COFuTATN6AzBbHhYMmrl%2Fw16gtQmH1UyFsdN%2F%2FwtkQpqNpqnf5IvJuuUeBN27sx1&X-Amz-Signature=021934ffa94777cebb25a34a536b23f991b9434dcaf34ae084fd3cfc6ea7e24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEHEM7M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrMMRTaeJjjos1Qt1RCipyuEQNJ8fy%2BSVoNsErjXUxQIhAIwgRjKHfl3XmublaFlZ%2FpLpgfFZ175RJRIUXDq0SwzZKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFEK5rI2w6wxKkD4q3ANojYFd4%2F%2B9vLrkabwTeIb%2BQtlRi6N7GbDwUgLR5%2Fy3FpkJvTrUfUQpyTKNhH63N1g1XGlSIfQ8Xu2TSflUIJJ0GvFbHfTpduF1%2BiSf3fCGFebF%2BQFdGxs8VYawzgm3MYs2Z6BxUMxTGHCzrnps%2FEq3ywWFbiJBzVfK%2B1c7u5krqps%2Fukjmx3xZ9pFhhaiVPDwHWZYfbH%2Fp6d7LvRd7828R%2FUmqD60Hl%2F%2FFUGpI8D7L1HPN0iybElq1mkwAeSwC1IbmC4nfdpjiKH%2FSeexQGbQfqLSZi%2BHZM53F2JN7oWlTSs01br5NTvtolq%2BKY3VmYSXwMnTHSzvfjAlbx9H9is1D85dvVnekFuSzljP%2BSQ7Ne4TrKS8r7a2OKgd7rgL%2BW27cXFXyLt%2FwnCwGNFq9dipnpunCqBPxC7p%2BaEvLYPV8owi38EQOtpxqXXq76qGJ0lRdfB5X64rf3yDySQ8Fhg4GnuA1VN2JjXpF5COJBUt1KBRsanJVe9uqxX1C0cJFwvi0LE3VMv8jE1Wig9h9rUtF8Gy3EfB%2Bdf8u%2FKTAfI8rTRql%2FXULCM050tkAQX89VAb71IzWYW9pwIj5Gc80AphtRbfc9HrIp6CD988bdZtOSxsTSlZU8GO4b2gPjzCNluPEBjqkAU%2Bq%2BvU29iMX2HRbo68943cYL0OUKlz6coGXj9aRMuIPQ2CuTTPAC7pupHxiAZn0hCqHELCFKLe3YkjV1k%2FE3yNSxwspIEPHXbHKNLzbiFneA2t0nmUA0IoaQkNRNHXjEqKSplLKEszReiUC6o3foomBeTn1COFuTATN6AzBbHhYMmrl%2Fw16gtQmH1UyFsdN%2F%2FwtkQpqNpqnf5IvJuuUeBN27sx1&X-Amz-Signature=14083a02b78308ce82ed2456fff83b0d06fa581bd056f6fcc203c999481987bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEHEM7M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrMMRTaeJjjos1Qt1RCipyuEQNJ8fy%2BSVoNsErjXUxQIhAIwgRjKHfl3XmublaFlZ%2FpLpgfFZ175RJRIUXDq0SwzZKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFEK5rI2w6wxKkD4q3ANojYFd4%2F%2B9vLrkabwTeIb%2BQtlRi6N7GbDwUgLR5%2Fy3FpkJvTrUfUQpyTKNhH63N1g1XGlSIfQ8Xu2TSflUIJJ0GvFbHfTpduF1%2BiSf3fCGFebF%2BQFdGxs8VYawzgm3MYs2Z6BxUMxTGHCzrnps%2FEq3ywWFbiJBzVfK%2B1c7u5krqps%2Fukjmx3xZ9pFhhaiVPDwHWZYfbH%2Fp6d7LvRd7828R%2FUmqD60Hl%2F%2FFUGpI8D7L1HPN0iybElq1mkwAeSwC1IbmC4nfdpjiKH%2FSeexQGbQfqLSZi%2BHZM53F2JN7oWlTSs01br5NTvtolq%2BKY3VmYSXwMnTHSzvfjAlbx9H9is1D85dvVnekFuSzljP%2BSQ7Ne4TrKS8r7a2OKgd7rgL%2BW27cXFXyLt%2FwnCwGNFq9dipnpunCqBPxC7p%2BaEvLYPV8owi38EQOtpxqXXq76qGJ0lRdfB5X64rf3yDySQ8Fhg4GnuA1VN2JjXpF5COJBUt1KBRsanJVe9uqxX1C0cJFwvi0LE3VMv8jE1Wig9h9rUtF8Gy3EfB%2Bdf8u%2FKTAfI8rTRql%2FXULCM050tkAQX89VAb71IzWYW9pwIj5Gc80AphtRbfc9HrIp6CD988bdZtOSxsTSlZU8GO4b2gPjzCNluPEBjqkAU%2Bq%2BvU29iMX2HRbo68943cYL0OUKlz6coGXj9aRMuIPQ2CuTTPAC7pupHxiAZn0hCqHELCFKLe3YkjV1k%2FE3yNSxwspIEPHXbHKNLzbiFneA2t0nmUA0IoaQkNRNHXjEqKSplLKEszReiUC6o3foomBeTn1COFuTATN6AzBbHhYMmrl%2Fw16gtQmH1UyFsdN%2F%2FwtkQpqNpqnf5IvJuuUeBN27sx1&X-Amz-Signature=dd4eb35825ed7009f760113d09653f82df1e38230d029b659c28f522e63a7bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEHEM7M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrMMRTaeJjjos1Qt1RCipyuEQNJ8fy%2BSVoNsErjXUxQIhAIwgRjKHfl3XmublaFlZ%2FpLpgfFZ175RJRIUXDq0SwzZKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFEK5rI2w6wxKkD4q3ANojYFd4%2F%2B9vLrkabwTeIb%2BQtlRi6N7GbDwUgLR5%2Fy3FpkJvTrUfUQpyTKNhH63N1g1XGlSIfQ8Xu2TSflUIJJ0GvFbHfTpduF1%2BiSf3fCGFebF%2BQFdGxs8VYawzgm3MYs2Z6BxUMxTGHCzrnps%2FEq3ywWFbiJBzVfK%2B1c7u5krqps%2Fukjmx3xZ9pFhhaiVPDwHWZYfbH%2Fp6d7LvRd7828R%2FUmqD60Hl%2F%2FFUGpI8D7L1HPN0iybElq1mkwAeSwC1IbmC4nfdpjiKH%2FSeexQGbQfqLSZi%2BHZM53F2JN7oWlTSs01br5NTvtolq%2BKY3VmYSXwMnTHSzvfjAlbx9H9is1D85dvVnekFuSzljP%2BSQ7Ne4TrKS8r7a2OKgd7rgL%2BW27cXFXyLt%2FwnCwGNFq9dipnpunCqBPxC7p%2BaEvLYPV8owi38EQOtpxqXXq76qGJ0lRdfB5X64rf3yDySQ8Fhg4GnuA1VN2JjXpF5COJBUt1KBRsanJVe9uqxX1C0cJFwvi0LE3VMv8jE1Wig9h9rUtF8Gy3EfB%2Bdf8u%2FKTAfI8rTRql%2FXULCM050tkAQX89VAb71IzWYW9pwIj5Gc80AphtRbfc9HrIp6CD988bdZtOSxsTSlZU8GO4b2gPjzCNluPEBjqkAU%2Bq%2BvU29iMX2HRbo68943cYL0OUKlz6coGXj9aRMuIPQ2CuTTPAC7pupHxiAZn0hCqHELCFKLe3YkjV1k%2FE3yNSxwspIEPHXbHKNLzbiFneA2t0nmUA0IoaQkNRNHXjEqKSplLKEszReiUC6o3foomBeTn1COFuTATN6AzBbHhYMmrl%2Fw16gtQmH1UyFsdN%2F%2FwtkQpqNpqnf5IvJuuUeBN27sx1&X-Amz-Signature=51460976a38a38e4b5ff3f0dafbccf9ea1c5ca9b6051a6399331e2c3c870b3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
