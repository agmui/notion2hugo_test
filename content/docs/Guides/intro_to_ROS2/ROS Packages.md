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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSRESIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnzCTumPOq9lELD9ERK7iPekxAY7DFdOrn9%2FpOtZvOOAiEAtwAQjieQrT6M%2FGicGWfgoGF8L6nEAJrESfSNLE342UkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTtxZvETy3IoAG6ESrcA6Dppd7T7al1srt3NLkV%2FnRyVmlA5F5OrRvj6eMy44GPmM%2BM7qxRBeFzV3K%2Ft3buVCMH%2BrYgWjnuOsfppdhcnQ7aCVCenGaVIUeWqMB1EV%2B4tpDS5%2F7s%2FoxGG4TNrrkOUDdCVBcEQBaw2wOAMDCAkDb6flq%2BS2F6I%2B639Pi3k95TfSKl7CubZzhJs%2FVhJkYndIFZ1lkT8KOaXyU1iB3hPcK38Q3TZiqyI8B9X%2B0cq1PfbDtFWT58ILUwy%2FQONwVAt3OcjQ0WaaQv708FqtJu8c1lTYm172BTyLI7YL9ePcwspErAQLXGbSeWfNx3BcX9mAozKZSuV4RiZRP5H7I5WHMHnHTvC%2BZGI4NnvvjHc6g5ASv6ou4NHjgxOSdtxZecUMJrOhCcLB7hjyOtq6x8uAbZzfqnbtswCT%2BhJwNsYGBZ%2Fog9cUyxKyodmy5%2BPosl3zCHyvBFTRIU5Vh68UOraNqGshlqt9S0LgByTxGClhTpi7eLCPV%2FTCJ3tzxqeMn5KAKN6FBNf96ukEVlp4ICU82XQogg788fw8QHbDE3e3SwxEbY2qfKUywThQqI8k9fhaV55GZJpbRgq211VNFQs23Ci6TpHfxnx9QgQZf41%2BVL1OEwdUUz8lickwnpMLfNqb0GOqUBkWe15RUhhMmWKP2933nPD24lo49pZG8PL%2FxAeNWqnpXHEzyCpq7sZaf05mckSt6gJP9KrMEMuYvEK15DO95l%2FU%2FcN4k5M1HWj1C0IXbIm1HLQ9MskifngwgSENYc0R2Bo0P2mvuqJ8CqWpxTnKO0NKRrikasnRluz7JP2MdMrhx%2Frcm7Y1lWpBnAAi%2Fftme%2F%2BFhvLi2oUmh8KBCDfmqn7yq7%2B%2Fo%2F&X-Amz-Signature=0d11e9a441e0b633471d4352e08d99f5a3a79ade76793a12e5cd1a1f855e2fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSRESIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnzCTumPOq9lELD9ERK7iPekxAY7DFdOrn9%2FpOtZvOOAiEAtwAQjieQrT6M%2FGicGWfgoGF8L6nEAJrESfSNLE342UkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTtxZvETy3IoAG6ESrcA6Dppd7T7al1srt3NLkV%2FnRyVmlA5F5OrRvj6eMy44GPmM%2BM7qxRBeFzV3K%2Ft3buVCMH%2BrYgWjnuOsfppdhcnQ7aCVCenGaVIUeWqMB1EV%2B4tpDS5%2F7s%2FoxGG4TNrrkOUDdCVBcEQBaw2wOAMDCAkDb6flq%2BS2F6I%2B639Pi3k95TfSKl7CubZzhJs%2FVhJkYndIFZ1lkT8KOaXyU1iB3hPcK38Q3TZiqyI8B9X%2B0cq1PfbDtFWT58ILUwy%2FQONwVAt3OcjQ0WaaQv708FqtJu8c1lTYm172BTyLI7YL9ePcwspErAQLXGbSeWfNx3BcX9mAozKZSuV4RiZRP5H7I5WHMHnHTvC%2BZGI4NnvvjHc6g5ASv6ou4NHjgxOSdtxZecUMJrOhCcLB7hjyOtq6x8uAbZzfqnbtswCT%2BhJwNsYGBZ%2Fog9cUyxKyodmy5%2BPosl3zCHyvBFTRIU5Vh68UOraNqGshlqt9S0LgByTxGClhTpi7eLCPV%2FTCJ3tzxqeMn5KAKN6FBNf96ukEVlp4ICU82XQogg788fw8QHbDE3e3SwxEbY2qfKUywThQqI8k9fhaV55GZJpbRgq211VNFQs23Ci6TpHfxnx9QgQZf41%2BVL1OEwdUUz8lickwnpMLfNqb0GOqUBkWe15RUhhMmWKP2933nPD24lo49pZG8PL%2FxAeNWqnpXHEzyCpq7sZaf05mckSt6gJP9KrMEMuYvEK15DO95l%2FU%2FcN4k5M1HWj1C0IXbIm1HLQ9MskifngwgSENYc0R2Bo0P2mvuqJ8CqWpxTnKO0NKRrikasnRluz7JP2MdMrhx%2Frcm7Y1lWpBnAAi%2Fftme%2F%2BFhvLi2oUmh8KBCDfmqn7yq7%2B%2Fo%2F&X-Amz-Signature=14077b1b7b9618326104585060f661211b007c49fc81a46c2efba44a2aada0be&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSRESIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnzCTumPOq9lELD9ERK7iPekxAY7DFdOrn9%2FpOtZvOOAiEAtwAQjieQrT6M%2FGicGWfgoGF8L6nEAJrESfSNLE342UkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTtxZvETy3IoAG6ESrcA6Dppd7T7al1srt3NLkV%2FnRyVmlA5F5OrRvj6eMy44GPmM%2BM7qxRBeFzV3K%2Ft3buVCMH%2BrYgWjnuOsfppdhcnQ7aCVCenGaVIUeWqMB1EV%2B4tpDS5%2F7s%2FoxGG4TNrrkOUDdCVBcEQBaw2wOAMDCAkDb6flq%2BS2F6I%2B639Pi3k95TfSKl7CubZzhJs%2FVhJkYndIFZ1lkT8KOaXyU1iB3hPcK38Q3TZiqyI8B9X%2B0cq1PfbDtFWT58ILUwy%2FQONwVAt3OcjQ0WaaQv708FqtJu8c1lTYm172BTyLI7YL9ePcwspErAQLXGbSeWfNx3BcX9mAozKZSuV4RiZRP5H7I5WHMHnHTvC%2BZGI4NnvvjHc6g5ASv6ou4NHjgxOSdtxZecUMJrOhCcLB7hjyOtq6x8uAbZzfqnbtswCT%2BhJwNsYGBZ%2Fog9cUyxKyodmy5%2BPosl3zCHyvBFTRIU5Vh68UOraNqGshlqt9S0LgByTxGClhTpi7eLCPV%2FTCJ3tzxqeMn5KAKN6FBNf96ukEVlp4ICU82XQogg788fw8QHbDE3e3SwxEbY2qfKUywThQqI8k9fhaV55GZJpbRgq211VNFQs23Ci6TpHfxnx9QgQZf41%2BVL1OEwdUUz8lickwnpMLfNqb0GOqUBkWe15RUhhMmWKP2933nPD24lo49pZG8PL%2FxAeNWqnpXHEzyCpq7sZaf05mckSt6gJP9KrMEMuYvEK15DO95l%2FU%2FcN4k5M1HWj1C0IXbIm1HLQ9MskifngwgSENYc0R2Bo0P2mvuqJ8CqWpxTnKO0NKRrikasnRluz7JP2MdMrhx%2Frcm7Y1lWpBnAAi%2Fftme%2F%2BFhvLi2oUmh8KBCDfmqn7yq7%2B%2Fo%2F&X-Amz-Signature=49ea0dffc683cebc7b5a456b0df3a3be7c54e858ce980cc245f792b0f1120108&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSRESIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnzCTumPOq9lELD9ERK7iPekxAY7DFdOrn9%2FpOtZvOOAiEAtwAQjieQrT6M%2FGicGWfgoGF8L6nEAJrESfSNLE342UkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTtxZvETy3IoAG6ESrcA6Dppd7T7al1srt3NLkV%2FnRyVmlA5F5OrRvj6eMy44GPmM%2BM7qxRBeFzV3K%2Ft3buVCMH%2BrYgWjnuOsfppdhcnQ7aCVCenGaVIUeWqMB1EV%2B4tpDS5%2F7s%2FoxGG4TNrrkOUDdCVBcEQBaw2wOAMDCAkDb6flq%2BS2F6I%2B639Pi3k95TfSKl7CubZzhJs%2FVhJkYndIFZ1lkT8KOaXyU1iB3hPcK38Q3TZiqyI8B9X%2B0cq1PfbDtFWT58ILUwy%2FQONwVAt3OcjQ0WaaQv708FqtJu8c1lTYm172BTyLI7YL9ePcwspErAQLXGbSeWfNx3BcX9mAozKZSuV4RiZRP5H7I5WHMHnHTvC%2BZGI4NnvvjHc6g5ASv6ou4NHjgxOSdtxZecUMJrOhCcLB7hjyOtq6x8uAbZzfqnbtswCT%2BhJwNsYGBZ%2Fog9cUyxKyodmy5%2BPosl3zCHyvBFTRIU5Vh68UOraNqGshlqt9S0LgByTxGClhTpi7eLCPV%2FTCJ3tzxqeMn5KAKN6FBNf96ukEVlp4ICU82XQogg788fw8QHbDE3e3SwxEbY2qfKUywThQqI8k9fhaV55GZJpbRgq211VNFQs23Ci6TpHfxnx9QgQZf41%2BVL1OEwdUUz8lickwnpMLfNqb0GOqUBkWe15RUhhMmWKP2933nPD24lo49pZG8PL%2FxAeNWqnpXHEzyCpq7sZaf05mckSt6gJP9KrMEMuYvEK15DO95l%2FU%2FcN4k5M1HWj1C0IXbIm1HLQ9MskifngwgSENYc0R2Bo0P2mvuqJ8CqWpxTnKO0NKRrikasnRluz7JP2MdMrhx%2Frcm7Y1lWpBnAAi%2Fftme%2F%2BFhvLi2oUmh8KBCDfmqn7yq7%2B%2Fo%2F&X-Amz-Signature=9027b346cfb0f85821664baea931b384b137f03fb90f64b1b5b0727cfd59a1bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSRESIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnzCTumPOq9lELD9ERK7iPekxAY7DFdOrn9%2FpOtZvOOAiEAtwAQjieQrT6M%2FGicGWfgoGF8L6nEAJrESfSNLE342UkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTtxZvETy3IoAG6ESrcA6Dppd7T7al1srt3NLkV%2FnRyVmlA5F5OrRvj6eMy44GPmM%2BM7qxRBeFzV3K%2Ft3buVCMH%2BrYgWjnuOsfppdhcnQ7aCVCenGaVIUeWqMB1EV%2B4tpDS5%2F7s%2FoxGG4TNrrkOUDdCVBcEQBaw2wOAMDCAkDb6flq%2BS2F6I%2B639Pi3k95TfSKl7CubZzhJs%2FVhJkYndIFZ1lkT8KOaXyU1iB3hPcK38Q3TZiqyI8B9X%2B0cq1PfbDtFWT58ILUwy%2FQONwVAt3OcjQ0WaaQv708FqtJu8c1lTYm172BTyLI7YL9ePcwspErAQLXGbSeWfNx3BcX9mAozKZSuV4RiZRP5H7I5WHMHnHTvC%2BZGI4NnvvjHc6g5ASv6ou4NHjgxOSdtxZecUMJrOhCcLB7hjyOtq6x8uAbZzfqnbtswCT%2BhJwNsYGBZ%2Fog9cUyxKyodmy5%2BPosl3zCHyvBFTRIU5Vh68UOraNqGshlqt9S0LgByTxGClhTpi7eLCPV%2FTCJ3tzxqeMn5KAKN6FBNf96ukEVlp4ICU82XQogg788fw8QHbDE3e3SwxEbY2qfKUywThQqI8k9fhaV55GZJpbRgq211VNFQs23Ci6TpHfxnx9QgQZf41%2BVL1OEwdUUz8lickwnpMLfNqb0GOqUBkWe15RUhhMmWKP2933nPD24lo49pZG8PL%2FxAeNWqnpXHEzyCpq7sZaf05mckSt6gJP9KrMEMuYvEK15DO95l%2FU%2FcN4k5M1HWj1C0IXbIm1HLQ9MskifngwgSENYc0R2Bo0P2mvuqJ8CqWpxTnKO0NKRrikasnRluz7JP2MdMrhx%2Frcm7Y1lWpBnAAi%2Fftme%2F%2BFhvLi2oUmh8KBCDfmqn7yq7%2B%2Fo%2F&X-Amz-Signature=4d9e8beb1fc8e099560a32d666bba1779b778c966eee5dfbf3af337ff3b8d5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSRESIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnzCTumPOq9lELD9ERK7iPekxAY7DFdOrn9%2FpOtZvOOAiEAtwAQjieQrT6M%2FGicGWfgoGF8L6nEAJrESfSNLE342UkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTtxZvETy3IoAG6ESrcA6Dppd7T7al1srt3NLkV%2FnRyVmlA5F5OrRvj6eMy44GPmM%2BM7qxRBeFzV3K%2Ft3buVCMH%2BrYgWjnuOsfppdhcnQ7aCVCenGaVIUeWqMB1EV%2B4tpDS5%2F7s%2FoxGG4TNrrkOUDdCVBcEQBaw2wOAMDCAkDb6flq%2BS2F6I%2B639Pi3k95TfSKl7CubZzhJs%2FVhJkYndIFZ1lkT8KOaXyU1iB3hPcK38Q3TZiqyI8B9X%2B0cq1PfbDtFWT58ILUwy%2FQONwVAt3OcjQ0WaaQv708FqtJu8c1lTYm172BTyLI7YL9ePcwspErAQLXGbSeWfNx3BcX9mAozKZSuV4RiZRP5H7I5WHMHnHTvC%2BZGI4NnvvjHc6g5ASv6ou4NHjgxOSdtxZecUMJrOhCcLB7hjyOtq6x8uAbZzfqnbtswCT%2BhJwNsYGBZ%2Fog9cUyxKyodmy5%2BPosl3zCHyvBFTRIU5Vh68UOraNqGshlqt9S0LgByTxGClhTpi7eLCPV%2FTCJ3tzxqeMn5KAKN6FBNf96ukEVlp4ICU82XQogg788fw8QHbDE3e3SwxEbY2qfKUywThQqI8k9fhaV55GZJpbRgq211VNFQs23Ci6TpHfxnx9QgQZf41%2BVL1OEwdUUz8lickwnpMLfNqb0GOqUBkWe15RUhhMmWKP2933nPD24lo49pZG8PL%2FxAeNWqnpXHEzyCpq7sZaf05mckSt6gJP9KrMEMuYvEK15DO95l%2FU%2FcN4k5M1HWj1C0IXbIm1HLQ9MskifngwgSENYc0R2Bo0P2mvuqJ8CqWpxTnKO0NKRrikasnRluz7JP2MdMrhx%2Frcm7Y1lWpBnAAi%2Fftme%2F%2BFhvLi2oUmh8KBCDfmqn7yq7%2B%2Fo%2F&X-Amz-Signature=c6e29cc5c24927a778d17cde0079fde7ebfc7fbf0a04dae3601a64d29883e495&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSRESIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnzCTumPOq9lELD9ERK7iPekxAY7DFdOrn9%2FpOtZvOOAiEAtwAQjieQrT6M%2FGicGWfgoGF8L6nEAJrESfSNLE342UkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTtxZvETy3IoAG6ESrcA6Dppd7T7al1srt3NLkV%2FnRyVmlA5F5OrRvj6eMy44GPmM%2BM7qxRBeFzV3K%2Ft3buVCMH%2BrYgWjnuOsfppdhcnQ7aCVCenGaVIUeWqMB1EV%2B4tpDS5%2F7s%2FoxGG4TNrrkOUDdCVBcEQBaw2wOAMDCAkDb6flq%2BS2F6I%2B639Pi3k95TfSKl7CubZzhJs%2FVhJkYndIFZ1lkT8KOaXyU1iB3hPcK38Q3TZiqyI8B9X%2B0cq1PfbDtFWT58ILUwy%2FQONwVAt3OcjQ0WaaQv708FqtJu8c1lTYm172BTyLI7YL9ePcwspErAQLXGbSeWfNx3BcX9mAozKZSuV4RiZRP5H7I5WHMHnHTvC%2BZGI4NnvvjHc6g5ASv6ou4NHjgxOSdtxZecUMJrOhCcLB7hjyOtq6x8uAbZzfqnbtswCT%2BhJwNsYGBZ%2Fog9cUyxKyodmy5%2BPosl3zCHyvBFTRIU5Vh68UOraNqGshlqt9S0LgByTxGClhTpi7eLCPV%2FTCJ3tzxqeMn5KAKN6FBNf96ukEVlp4ICU82XQogg788fw8QHbDE3e3SwxEbY2qfKUywThQqI8k9fhaV55GZJpbRgq211VNFQs23Ci6TpHfxnx9QgQZf41%2BVL1OEwdUUz8lickwnpMLfNqb0GOqUBkWe15RUhhMmWKP2933nPD24lo49pZG8PL%2FxAeNWqnpXHEzyCpq7sZaf05mckSt6gJP9KrMEMuYvEK15DO95l%2FU%2FcN4k5M1HWj1C0IXbIm1HLQ9MskifngwgSENYc0R2Bo0P2mvuqJ8CqWpxTnKO0NKRrikasnRluz7JP2MdMrhx%2Frcm7Y1lWpBnAAi%2Fftme%2F%2BFhvLi2oUmh8KBCDfmqn7yq7%2B%2Fo%2F&X-Amz-Signature=20599894682849c89dd3dcff70254f7260240e2bae8d5a19f53b2f95d4e8ef50&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
