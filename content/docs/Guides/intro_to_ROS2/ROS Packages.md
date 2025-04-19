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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FLBZPE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ZXwutdN6S%2Be99OkskXi3juN9%2B43vq0OzLa%2BeCnjnCgIhAI6LoYnBEN4gV3E5N5JCABfwElR1Iv6%2BTz2yUY3KuobxKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy47ylAVV7VILpyIugq3AMt076RDWCt%2BFpOGDZiX3L%2BNpU3T0CfG2DXYV1OJiRQEq6dYSDMbaZzeHIUynPDWZlbe7rlRoG6AybWGH%2FJvelgt0a90e8O4DVC3GsoRPna%2B4O%2BDJvGRSMXY3mhcXdLADg8TQkX5xJx2slwQUXf23wtbplw5TG7qMpdVbaPNcsOZQwk2PCCbeaWpDgeplMIQeFRsdjyMTavvSq96RAEweH5h12Ifr1yIl4kPUmoW0s8WmriD77W1mPbOlNsG3LQfs0ahtS2CQqvX8nGeg9UWreUouTIfipLHuRGsZ6ge%2FY5B1iElekpzQ5mDmQv9d1xPBWXwIS9mwy1vkJwWsjX20QB9fhPwIVAwym5ANgTwm%2FFSjeFkFWphDYTbnnzrHdRixqEhnduea%2FlQGlxdF%2FVJReJC7%2BbcQ9NMZGC%2FU8bkj0Hzs%2B5b5Af7JlQIE3Bm6KO15JJrqf2BGPxOf8cxx3e%2FEjbfjZNHq%2FxC3GwU0Zym%2B%2Fm3nXqXVZ8qVbp0wS%2FnfdW%2FBn7rvP9HweVtEW16Wu3sWnSHTkNLxrumWGBRuvew2ljeV9RmJNGpWeOTBmcajxhp9AJNcHMBI8UB2qqGp%2BukBx%2Bx71qGIEevrrrGVGtTKXVuR7odMhD3%2BV3pcYneDCqoozABjqkATcImvSWngPGVGiTq4GhMBFhCJAhi9L7OcK5bJQ2w2ocig%2F6ptN2%2F3vkoyPoJaIdoaEjN5NYqDz8hJ167fRjNW0rFLFY7Gi0yFvl%2FlhSx%2FS%2Fo%2FCi6z67%2BhCNDX14Ab0b4tzRztQc%2BWrvxpHcE4WgIfIGpiJErpULKfoPYFFSQv3DoWHAhQnmsCk1Mgm3v0UiCazrVDGiAxqERAWkzhJU0JLuc2Js&X-Amz-Signature=1824337851a1152b17230f4058010301cac2aad12987f777a47c1018c778d070&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FLBZPE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ZXwutdN6S%2Be99OkskXi3juN9%2B43vq0OzLa%2BeCnjnCgIhAI6LoYnBEN4gV3E5N5JCABfwElR1Iv6%2BTz2yUY3KuobxKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy47ylAVV7VILpyIugq3AMt076RDWCt%2BFpOGDZiX3L%2BNpU3T0CfG2DXYV1OJiRQEq6dYSDMbaZzeHIUynPDWZlbe7rlRoG6AybWGH%2FJvelgt0a90e8O4DVC3GsoRPna%2B4O%2BDJvGRSMXY3mhcXdLADg8TQkX5xJx2slwQUXf23wtbplw5TG7qMpdVbaPNcsOZQwk2PCCbeaWpDgeplMIQeFRsdjyMTavvSq96RAEweH5h12Ifr1yIl4kPUmoW0s8WmriD77W1mPbOlNsG3LQfs0ahtS2CQqvX8nGeg9UWreUouTIfipLHuRGsZ6ge%2FY5B1iElekpzQ5mDmQv9d1xPBWXwIS9mwy1vkJwWsjX20QB9fhPwIVAwym5ANgTwm%2FFSjeFkFWphDYTbnnzrHdRixqEhnduea%2FlQGlxdF%2FVJReJC7%2BbcQ9NMZGC%2FU8bkj0Hzs%2B5b5Af7JlQIE3Bm6KO15JJrqf2BGPxOf8cxx3e%2FEjbfjZNHq%2FxC3GwU0Zym%2B%2Fm3nXqXVZ8qVbp0wS%2FnfdW%2FBn7rvP9HweVtEW16Wu3sWnSHTkNLxrumWGBRuvew2ljeV9RmJNGpWeOTBmcajxhp9AJNcHMBI8UB2qqGp%2BukBx%2Bx71qGIEevrrrGVGtTKXVuR7odMhD3%2BV3pcYneDCqoozABjqkATcImvSWngPGVGiTq4GhMBFhCJAhi9L7OcK5bJQ2w2ocig%2F6ptN2%2F3vkoyPoJaIdoaEjN5NYqDz8hJ167fRjNW0rFLFY7Gi0yFvl%2FlhSx%2FS%2Fo%2FCi6z67%2BhCNDX14Ab0b4tzRztQc%2BWrvxpHcE4WgIfIGpiJErpULKfoPYFFSQv3DoWHAhQnmsCk1Mgm3v0UiCazrVDGiAxqERAWkzhJU0JLuc2Js&X-Amz-Signature=20fc905dbd4a862d343ae03a4dbf0f9f797d6030c6cfa8b862532b77d0f8053f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FLBZPE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ZXwutdN6S%2Be99OkskXi3juN9%2B43vq0OzLa%2BeCnjnCgIhAI6LoYnBEN4gV3E5N5JCABfwElR1Iv6%2BTz2yUY3KuobxKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy47ylAVV7VILpyIugq3AMt076RDWCt%2BFpOGDZiX3L%2BNpU3T0CfG2DXYV1OJiRQEq6dYSDMbaZzeHIUynPDWZlbe7rlRoG6AybWGH%2FJvelgt0a90e8O4DVC3GsoRPna%2B4O%2BDJvGRSMXY3mhcXdLADg8TQkX5xJx2slwQUXf23wtbplw5TG7qMpdVbaPNcsOZQwk2PCCbeaWpDgeplMIQeFRsdjyMTavvSq96RAEweH5h12Ifr1yIl4kPUmoW0s8WmriD77W1mPbOlNsG3LQfs0ahtS2CQqvX8nGeg9UWreUouTIfipLHuRGsZ6ge%2FY5B1iElekpzQ5mDmQv9d1xPBWXwIS9mwy1vkJwWsjX20QB9fhPwIVAwym5ANgTwm%2FFSjeFkFWphDYTbnnzrHdRixqEhnduea%2FlQGlxdF%2FVJReJC7%2BbcQ9NMZGC%2FU8bkj0Hzs%2B5b5Af7JlQIE3Bm6KO15JJrqf2BGPxOf8cxx3e%2FEjbfjZNHq%2FxC3GwU0Zym%2B%2Fm3nXqXVZ8qVbp0wS%2FnfdW%2FBn7rvP9HweVtEW16Wu3sWnSHTkNLxrumWGBRuvew2ljeV9RmJNGpWeOTBmcajxhp9AJNcHMBI8UB2qqGp%2BukBx%2Bx71qGIEevrrrGVGtTKXVuR7odMhD3%2BV3pcYneDCqoozABjqkATcImvSWngPGVGiTq4GhMBFhCJAhi9L7OcK5bJQ2w2ocig%2F6ptN2%2F3vkoyPoJaIdoaEjN5NYqDz8hJ167fRjNW0rFLFY7Gi0yFvl%2FlhSx%2FS%2Fo%2FCi6z67%2BhCNDX14Ab0b4tzRztQc%2BWrvxpHcE4WgIfIGpiJErpULKfoPYFFSQv3DoWHAhQnmsCk1Mgm3v0UiCazrVDGiAxqERAWkzhJU0JLuc2Js&X-Amz-Signature=b17d01b0095aee396cd725bc07e5cea10718f29c07b6cadec70aa4c20093a11f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FLBZPE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ZXwutdN6S%2Be99OkskXi3juN9%2B43vq0OzLa%2BeCnjnCgIhAI6LoYnBEN4gV3E5N5JCABfwElR1Iv6%2BTz2yUY3KuobxKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy47ylAVV7VILpyIugq3AMt076RDWCt%2BFpOGDZiX3L%2BNpU3T0CfG2DXYV1OJiRQEq6dYSDMbaZzeHIUynPDWZlbe7rlRoG6AybWGH%2FJvelgt0a90e8O4DVC3GsoRPna%2B4O%2BDJvGRSMXY3mhcXdLADg8TQkX5xJx2slwQUXf23wtbplw5TG7qMpdVbaPNcsOZQwk2PCCbeaWpDgeplMIQeFRsdjyMTavvSq96RAEweH5h12Ifr1yIl4kPUmoW0s8WmriD77W1mPbOlNsG3LQfs0ahtS2CQqvX8nGeg9UWreUouTIfipLHuRGsZ6ge%2FY5B1iElekpzQ5mDmQv9d1xPBWXwIS9mwy1vkJwWsjX20QB9fhPwIVAwym5ANgTwm%2FFSjeFkFWphDYTbnnzrHdRixqEhnduea%2FlQGlxdF%2FVJReJC7%2BbcQ9NMZGC%2FU8bkj0Hzs%2B5b5Af7JlQIE3Bm6KO15JJrqf2BGPxOf8cxx3e%2FEjbfjZNHq%2FxC3GwU0Zym%2B%2Fm3nXqXVZ8qVbp0wS%2FnfdW%2FBn7rvP9HweVtEW16Wu3sWnSHTkNLxrumWGBRuvew2ljeV9RmJNGpWeOTBmcajxhp9AJNcHMBI8UB2qqGp%2BukBx%2Bx71qGIEevrrrGVGtTKXVuR7odMhD3%2BV3pcYneDCqoozABjqkATcImvSWngPGVGiTq4GhMBFhCJAhi9L7OcK5bJQ2w2ocig%2F6ptN2%2F3vkoyPoJaIdoaEjN5NYqDz8hJ167fRjNW0rFLFY7Gi0yFvl%2FlhSx%2FS%2Fo%2FCi6z67%2BhCNDX14Ab0b4tzRztQc%2BWrvxpHcE4WgIfIGpiJErpULKfoPYFFSQv3DoWHAhQnmsCk1Mgm3v0UiCazrVDGiAxqERAWkzhJU0JLuc2Js&X-Amz-Signature=af31e7ad2f96e363a5a9cac5ff09e798cd3e94a3a21f2ae29472a529a949b920&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FLBZPE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ZXwutdN6S%2Be99OkskXi3juN9%2B43vq0OzLa%2BeCnjnCgIhAI6LoYnBEN4gV3E5N5JCABfwElR1Iv6%2BTz2yUY3KuobxKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy47ylAVV7VILpyIugq3AMt076RDWCt%2BFpOGDZiX3L%2BNpU3T0CfG2DXYV1OJiRQEq6dYSDMbaZzeHIUynPDWZlbe7rlRoG6AybWGH%2FJvelgt0a90e8O4DVC3GsoRPna%2B4O%2BDJvGRSMXY3mhcXdLADg8TQkX5xJx2slwQUXf23wtbplw5TG7qMpdVbaPNcsOZQwk2PCCbeaWpDgeplMIQeFRsdjyMTavvSq96RAEweH5h12Ifr1yIl4kPUmoW0s8WmriD77W1mPbOlNsG3LQfs0ahtS2CQqvX8nGeg9UWreUouTIfipLHuRGsZ6ge%2FY5B1iElekpzQ5mDmQv9d1xPBWXwIS9mwy1vkJwWsjX20QB9fhPwIVAwym5ANgTwm%2FFSjeFkFWphDYTbnnzrHdRixqEhnduea%2FlQGlxdF%2FVJReJC7%2BbcQ9NMZGC%2FU8bkj0Hzs%2B5b5Af7JlQIE3Bm6KO15JJrqf2BGPxOf8cxx3e%2FEjbfjZNHq%2FxC3GwU0Zym%2B%2Fm3nXqXVZ8qVbp0wS%2FnfdW%2FBn7rvP9HweVtEW16Wu3sWnSHTkNLxrumWGBRuvew2ljeV9RmJNGpWeOTBmcajxhp9AJNcHMBI8UB2qqGp%2BukBx%2Bx71qGIEevrrrGVGtTKXVuR7odMhD3%2BV3pcYneDCqoozABjqkATcImvSWngPGVGiTq4GhMBFhCJAhi9L7OcK5bJQ2w2ocig%2F6ptN2%2F3vkoyPoJaIdoaEjN5NYqDz8hJ167fRjNW0rFLFY7Gi0yFvl%2FlhSx%2FS%2Fo%2FCi6z67%2BhCNDX14Ab0b4tzRztQc%2BWrvxpHcE4WgIfIGpiJErpULKfoPYFFSQv3DoWHAhQnmsCk1Mgm3v0UiCazrVDGiAxqERAWkzhJU0JLuc2Js&X-Amz-Signature=20cb7f48eaddd31ad1d989ce590996af19218ab7af6baec95d885827318c4793&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FLBZPE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ZXwutdN6S%2Be99OkskXi3juN9%2B43vq0OzLa%2BeCnjnCgIhAI6LoYnBEN4gV3E5N5JCABfwElR1Iv6%2BTz2yUY3KuobxKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy47ylAVV7VILpyIugq3AMt076RDWCt%2BFpOGDZiX3L%2BNpU3T0CfG2DXYV1OJiRQEq6dYSDMbaZzeHIUynPDWZlbe7rlRoG6AybWGH%2FJvelgt0a90e8O4DVC3GsoRPna%2B4O%2BDJvGRSMXY3mhcXdLADg8TQkX5xJx2slwQUXf23wtbplw5TG7qMpdVbaPNcsOZQwk2PCCbeaWpDgeplMIQeFRsdjyMTavvSq96RAEweH5h12Ifr1yIl4kPUmoW0s8WmriD77W1mPbOlNsG3LQfs0ahtS2CQqvX8nGeg9UWreUouTIfipLHuRGsZ6ge%2FY5B1iElekpzQ5mDmQv9d1xPBWXwIS9mwy1vkJwWsjX20QB9fhPwIVAwym5ANgTwm%2FFSjeFkFWphDYTbnnzrHdRixqEhnduea%2FlQGlxdF%2FVJReJC7%2BbcQ9NMZGC%2FU8bkj0Hzs%2B5b5Af7JlQIE3Bm6KO15JJrqf2BGPxOf8cxx3e%2FEjbfjZNHq%2FxC3GwU0Zym%2B%2Fm3nXqXVZ8qVbp0wS%2FnfdW%2FBn7rvP9HweVtEW16Wu3sWnSHTkNLxrumWGBRuvew2ljeV9RmJNGpWeOTBmcajxhp9AJNcHMBI8UB2qqGp%2BukBx%2Bx71qGIEevrrrGVGtTKXVuR7odMhD3%2BV3pcYneDCqoozABjqkATcImvSWngPGVGiTq4GhMBFhCJAhi9L7OcK5bJQ2w2ocig%2F6ptN2%2F3vkoyPoJaIdoaEjN5NYqDz8hJ167fRjNW0rFLFY7Gi0yFvl%2FlhSx%2FS%2Fo%2FCi6z67%2BhCNDX14Ab0b4tzRztQc%2BWrvxpHcE4WgIfIGpiJErpULKfoPYFFSQv3DoWHAhQnmsCk1Mgm3v0UiCazrVDGiAxqERAWkzhJU0JLuc2Js&X-Amz-Signature=a5532423a9769899131b4c09e858a5f405375a9bb0534647a40253f819701470&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FLBZPE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ZXwutdN6S%2Be99OkskXi3juN9%2B43vq0OzLa%2BeCnjnCgIhAI6LoYnBEN4gV3E5N5JCABfwElR1Iv6%2BTz2yUY3KuobxKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy47ylAVV7VILpyIugq3AMt076RDWCt%2BFpOGDZiX3L%2BNpU3T0CfG2DXYV1OJiRQEq6dYSDMbaZzeHIUynPDWZlbe7rlRoG6AybWGH%2FJvelgt0a90e8O4DVC3GsoRPna%2B4O%2BDJvGRSMXY3mhcXdLADg8TQkX5xJx2slwQUXf23wtbplw5TG7qMpdVbaPNcsOZQwk2PCCbeaWpDgeplMIQeFRsdjyMTavvSq96RAEweH5h12Ifr1yIl4kPUmoW0s8WmriD77W1mPbOlNsG3LQfs0ahtS2CQqvX8nGeg9UWreUouTIfipLHuRGsZ6ge%2FY5B1iElekpzQ5mDmQv9d1xPBWXwIS9mwy1vkJwWsjX20QB9fhPwIVAwym5ANgTwm%2FFSjeFkFWphDYTbnnzrHdRixqEhnduea%2FlQGlxdF%2FVJReJC7%2BbcQ9NMZGC%2FU8bkj0Hzs%2B5b5Af7JlQIE3Bm6KO15JJrqf2BGPxOf8cxx3e%2FEjbfjZNHq%2FxC3GwU0Zym%2B%2Fm3nXqXVZ8qVbp0wS%2FnfdW%2FBn7rvP9HweVtEW16Wu3sWnSHTkNLxrumWGBRuvew2ljeV9RmJNGpWeOTBmcajxhp9AJNcHMBI8UB2qqGp%2BukBx%2Bx71qGIEevrrrGVGtTKXVuR7odMhD3%2BV3pcYneDCqoozABjqkATcImvSWngPGVGiTq4GhMBFhCJAhi9L7OcK5bJQ2w2ocig%2F6ptN2%2F3vkoyPoJaIdoaEjN5NYqDz8hJ167fRjNW0rFLFY7Gi0yFvl%2FlhSx%2FS%2Fo%2FCi6z67%2BhCNDX14Ab0b4tzRztQc%2BWrvxpHcE4WgIfIGpiJErpULKfoPYFFSQv3DoWHAhQnmsCk1Mgm3v0UiCazrVDGiAxqERAWkzhJU0JLuc2Js&X-Amz-Signature=3da8fd11192cecd9d840ee184e78aa7f46e8c17c3a477a95f2c346db43d5ede1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
