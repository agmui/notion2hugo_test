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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3KD4MP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDy3FoiUdowrX5QgbQwjbN7NeJL3gjkAOBZOwPX%2FDnCzwIgMPlGqUrYgmA2SzXooN7ZlzE%2FDnNq2ybLvRxDlI4mRF8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjuJsukyp3exPKVnyrcA%2BDAVbvE5IUcO%2BXEXN9zNo4lZEGexPphcrml2Bb%2FMfxxApYTfdNp0qFqqiaS8WFQn8WNC63rd1i0PnttBOI5NA%2FtWyi3geAhuTXLhbrck4hqapWRcldRWNIjHOMhYdckqBsKcnEAg9j8YmTb9alEzOHIx7cEL1nXN3rlEGR%2B2BQGkTtnF1HImZnvSSZPfnFoOYeAwd8bceSPAznlImWGk97AmJ%2BZrNGAfMRXAs%2Fsg9NzGTGYOn2hio48ZAzYF1z2umYqmshOlz8L%2Bft%2FU2OTM0GFGuJeHKWnLJ%2FecePxNl3CSIjpqHUQ8jXVEjK6eXc%2BlXxsCok80xcBWqIQAw0FJd50ITdDQ3%2FDXXEd0T4Ch%2B6P81kXjW0p%2BYREKu4i%2BK322CKoAnEF%2BZ4gvCiPwON5ME5djgLFq18q0CxPHfwBlOB6o8Qx%2FGvtnF9raqfdZGj%2BhNlNMVDG3hBov7WKF2WzBKHV90PCZkrB1zT0Q78cvDPD9eAPB7ZALRiU2nGBz9%2BIhOrB6Tx%2F7F3y1HqPIJTk7O6fTN%2BJB0L7AROr1Nh26GW0yYrUrItoePQWky%2FA9E31feDsVJM%2Fa6%2FlMP0sCH%2FRdBIwaIw9nr68qE4zmJp1rVPHcZ8FSSOuBtnXokeIMN7eicEGOqUBRFUPcmaow941ijEgOjXttA6J8YF643%2BfljO9f9dJ5Y02rVLdriQwUZAVAuomMJPly7HUW%2FF8tDb2fnHG9VmwHHfTulhQwsc6Ganfn2zBgWn2fgkp6oLBlJ9cjnKiVcZL4Xs%2FRrBBF3UAerd3YZNFI9FtgpPT8RWSR4BXJIDv2x0SwBm%2BsfDMGxUJFyIn%2ByLzVChV8ekD2b170x18yqUVZ5zGCaZJ&X-Amz-Signature=9231ba1d8f22f186ee590f8456f52400930fc30c01a3836866c2cb3942aca575&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3KD4MP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDy3FoiUdowrX5QgbQwjbN7NeJL3gjkAOBZOwPX%2FDnCzwIgMPlGqUrYgmA2SzXooN7ZlzE%2FDnNq2ybLvRxDlI4mRF8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjuJsukyp3exPKVnyrcA%2BDAVbvE5IUcO%2BXEXN9zNo4lZEGexPphcrml2Bb%2FMfxxApYTfdNp0qFqqiaS8WFQn8WNC63rd1i0PnttBOI5NA%2FtWyi3geAhuTXLhbrck4hqapWRcldRWNIjHOMhYdckqBsKcnEAg9j8YmTb9alEzOHIx7cEL1nXN3rlEGR%2B2BQGkTtnF1HImZnvSSZPfnFoOYeAwd8bceSPAznlImWGk97AmJ%2BZrNGAfMRXAs%2Fsg9NzGTGYOn2hio48ZAzYF1z2umYqmshOlz8L%2Bft%2FU2OTM0GFGuJeHKWnLJ%2FecePxNl3CSIjpqHUQ8jXVEjK6eXc%2BlXxsCok80xcBWqIQAw0FJd50ITdDQ3%2FDXXEd0T4Ch%2B6P81kXjW0p%2BYREKu4i%2BK322CKoAnEF%2BZ4gvCiPwON5ME5djgLFq18q0CxPHfwBlOB6o8Qx%2FGvtnF9raqfdZGj%2BhNlNMVDG3hBov7WKF2WzBKHV90PCZkrB1zT0Q78cvDPD9eAPB7ZALRiU2nGBz9%2BIhOrB6Tx%2F7F3y1HqPIJTk7O6fTN%2BJB0L7AROr1Nh26GW0yYrUrItoePQWky%2FA9E31feDsVJM%2Fa6%2FlMP0sCH%2FRdBIwaIw9nr68qE4zmJp1rVPHcZ8FSSOuBtnXokeIMN7eicEGOqUBRFUPcmaow941ijEgOjXttA6J8YF643%2BfljO9f9dJ5Y02rVLdriQwUZAVAuomMJPly7HUW%2FF8tDb2fnHG9VmwHHfTulhQwsc6Ganfn2zBgWn2fgkp6oLBlJ9cjnKiVcZL4Xs%2FRrBBF3UAerd3YZNFI9FtgpPT8RWSR4BXJIDv2x0SwBm%2BsfDMGxUJFyIn%2ByLzVChV8ekD2b170x18yqUVZ5zGCaZJ&X-Amz-Signature=216b73306fdbed8d17edc2816c7afd2faf69e6e1d9371263e0152622ede463ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3KD4MP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDy3FoiUdowrX5QgbQwjbN7NeJL3gjkAOBZOwPX%2FDnCzwIgMPlGqUrYgmA2SzXooN7ZlzE%2FDnNq2ybLvRxDlI4mRF8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjuJsukyp3exPKVnyrcA%2BDAVbvE5IUcO%2BXEXN9zNo4lZEGexPphcrml2Bb%2FMfxxApYTfdNp0qFqqiaS8WFQn8WNC63rd1i0PnttBOI5NA%2FtWyi3geAhuTXLhbrck4hqapWRcldRWNIjHOMhYdckqBsKcnEAg9j8YmTb9alEzOHIx7cEL1nXN3rlEGR%2B2BQGkTtnF1HImZnvSSZPfnFoOYeAwd8bceSPAznlImWGk97AmJ%2BZrNGAfMRXAs%2Fsg9NzGTGYOn2hio48ZAzYF1z2umYqmshOlz8L%2Bft%2FU2OTM0GFGuJeHKWnLJ%2FecePxNl3CSIjpqHUQ8jXVEjK6eXc%2BlXxsCok80xcBWqIQAw0FJd50ITdDQ3%2FDXXEd0T4Ch%2B6P81kXjW0p%2BYREKu4i%2BK322CKoAnEF%2BZ4gvCiPwON5ME5djgLFq18q0CxPHfwBlOB6o8Qx%2FGvtnF9raqfdZGj%2BhNlNMVDG3hBov7WKF2WzBKHV90PCZkrB1zT0Q78cvDPD9eAPB7ZALRiU2nGBz9%2BIhOrB6Tx%2F7F3y1HqPIJTk7O6fTN%2BJB0L7AROr1Nh26GW0yYrUrItoePQWky%2FA9E31feDsVJM%2Fa6%2FlMP0sCH%2FRdBIwaIw9nr68qE4zmJp1rVPHcZ8FSSOuBtnXokeIMN7eicEGOqUBRFUPcmaow941ijEgOjXttA6J8YF643%2BfljO9f9dJ5Y02rVLdriQwUZAVAuomMJPly7HUW%2FF8tDb2fnHG9VmwHHfTulhQwsc6Ganfn2zBgWn2fgkp6oLBlJ9cjnKiVcZL4Xs%2FRrBBF3UAerd3YZNFI9FtgpPT8RWSR4BXJIDv2x0SwBm%2BsfDMGxUJFyIn%2ByLzVChV8ekD2b170x18yqUVZ5zGCaZJ&X-Amz-Signature=44577d10f4d0f3853c9d74225d4a7167bf0cce71d2a29a7eac32551b8f7e5f99&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3KD4MP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDy3FoiUdowrX5QgbQwjbN7NeJL3gjkAOBZOwPX%2FDnCzwIgMPlGqUrYgmA2SzXooN7ZlzE%2FDnNq2ybLvRxDlI4mRF8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjuJsukyp3exPKVnyrcA%2BDAVbvE5IUcO%2BXEXN9zNo4lZEGexPphcrml2Bb%2FMfxxApYTfdNp0qFqqiaS8WFQn8WNC63rd1i0PnttBOI5NA%2FtWyi3geAhuTXLhbrck4hqapWRcldRWNIjHOMhYdckqBsKcnEAg9j8YmTb9alEzOHIx7cEL1nXN3rlEGR%2B2BQGkTtnF1HImZnvSSZPfnFoOYeAwd8bceSPAznlImWGk97AmJ%2BZrNGAfMRXAs%2Fsg9NzGTGYOn2hio48ZAzYF1z2umYqmshOlz8L%2Bft%2FU2OTM0GFGuJeHKWnLJ%2FecePxNl3CSIjpqHUQ8jXVEjK6eXc%2BlXxsCok80xcBWqIQAw0FJd50ITdDQ3%2FDXXEd0T4Ch%2B6P81kXjW0p%2BYREKu4i%2BK322CKoAnEF%2BZ4gvCiPwON5ME5djgLFq18q0CxPHfwBlOB6o8Qx%2FGvtnF9raqfdZGj%2BhNlNMVDG3hBov7WKF2WzBKHV90PCZkrB1zT0Q78cvDPD9eAPB7ZALRiU2nGBz9%2BIhOrB6Tx%2F7F3y1HqPIJTk7O6fTN%2BJB0L7AROr1Nh26GW0yYrUrItoePQWky%2FA9E31feDsVJM%2Fa6%2FlMP0sCH%2FRdBIwaIw9nr68qE4zmJp1rVPHcZ8FSSOuBtnXokeIMN7eicEGOqUBRFUPcmaow941ijEgOjXttA6J8YF643%2BfljO9f9dJ5Y02rVLdriQwUZAVAuomMJPly7HUW%2FF8tDb2fnHG9VmwHHfTulhQwsc6Ganfn2zBgWn2fgkp6oLBlJ9cjnKiVcZL4Xs%2FRrBBF3UAerd3YZNFI9FtgpPT8RWSR4BXJIDv2x0SwBm%2BsfDMGxUJFyIn%2ByLzVChV8ekD2b170x18yqUVZ5zGCaZJ&X-Amz-Signature=8d923563acf9e9eae8e3473ab7b6601b0074ee9db7e329546146a7a6280e56b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3KD4MP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDy3FoiUdowrX5QgbQwjbN7NeJL3gjkAOBZOwPX%2FDnCzwIgMPlGqUrYgmA2SzXooN7ZlzE%2FDnNq2ybLvRxDlI4mRF8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjuJsukyp3exPKVnyrcA%2BDAVbvE5IUcO%2BXEXN9zNo4lZEGexPphcrml2Bb%2FMfxxApYTfdNp0qFqqiaS8WFQn8WNC63rd1i0PnttBOI5NA%2FtWyi3geAhuTXLhbrck4hqapWRcldRWNIjHOMhYdckqBsKcnEAg9j8YmTb9alEzOHIx7cEL1nXN3rlEGR%2B2BQGkTtnF1HImZnvSSZPfnFoOYeAwd8bceSPAznlImWGk97AmJ%2BZrNGAfMRXAs%2Fsg9NzGTGYOn2hio48ZAzYF1z2umYqmshOlz8L%2Bft%2FU2OTM0GFGuJeHKWnLJ%2FecePxNl3CSIjpqHUQ8jXVEjK6eXc%2BlXxsCok80xcBWqIQAw0FJd50ITdDQ3%2FDXXEd0T4Ch%2B6P81kXjW0p%2BYREKu4i%2BK322CKoAnEF%2BZ4gvCiPwON5ME5djgLFq18q0CxPHfwBlOB6o8Qx%2FGvtnF9raqfdZGj%2BhNlNMVDG3hBov7WKF2WzBKHV90PCZkrB1zT0Q78cvDPD9eAPB7ZALRiU2nGBz9%2BIhOrB6Tx%2F7F3y1HqPIJTk7O6fTN%2BJB0L7AROr1Nh26GW0yYrUrItoePQWky%2FA9E31feDsVJM%2Fa6%2FlMP0sCH%2FRdBIwaIw9nr68qE4zmJp1rVPHcZ8FSSOuBtnXokeIMN7eicEGOqUBRFUPcmaow941ijEgOjXttA6J8YF643%2BfljO9f9dJ5Y02rVLdriQwUZAVAuomMJPly7HUW%2FF8tDb2fnHG9VmwHHfTulhQwsc6Ganfn2zBgWn2fgkp6oLBlJ9cjnKiVcZL4Xs%2FRrBBF3UAerd3YZNFI9FtgpPT8RWSR4BXJIDv2x0SwBm%2BsfDMGxUJFyIn%2ByLzVChV8ekD2b170x18yqUVZ5zGCaZJ&X-Amz-Signature=803778b3db0b32002c33749fe3bccae3f113987d4511edd7289030d4a9cd5140&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3KD4MP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDy3FoiUdowrX5QgbQwjbN7NeJL3gjkAOBZOwPX%2FDnCzwIgMPlGqUrYgmA2SzXooN7ZlzE%2FDnNq2ybLvRxDlI4mRF8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjuJsukyp3exPKVnyrcA%2BDAVbvE5IUcO%2BXEXN9zNo4lZEGexPphcrml2Bb%2FMfxxApYTfdNp0qFqqiaS8WFQn8WNC63rd1i0PnttBOI5NA%2FtWyi3geAhuTXLhbrck4hqapWRcldRWNIjHOMhYdckqBsKcnEAg9j8YmTb9alEzOHIx7cEL1nXN3rlEGR%2B2BQGkTtnF1HImZnvSSZPfnFoOYeAwd8bceSPAznlImWGk97AmJ%2BZrNGAfMRXAs%2Fsg9NzGTGYOn2hio48ZAzYF1z2umYqmshOlz8L%2Bft%2FU2OTM0GFGuJeHKWnLJ%2FecePxNl3CSIjpqHUQ8jXVEjK6eXc%2BlXxsCok80xcBWqIQAw0FJd50ITdDQ3%2FDXXEd0T4Ch%2B6P81kXjW0p%2BYREKu4i%2BK322CKoAnEF%2BZ4gvCiPwON5ME5djgLFq18q0CxPHfwBlOB6o8Qx%2FGvtnF9raqfdZGj%2BhNlNMVDG3hBov7WKF2WzBKHV90PCZkrB1zT0Q78cvDPD9eAPB7ZALRiU2nGBz9%2BIhOrB6Tx%2F7F3y1HqPIJTk7O6fTN%2BJB0L7AROr1Nh26GW0yYrUrItoePQWky%2FA9E31feDsVJM%2Fa6%2FlMP0sCH%2FRdBIwaIw9nr68qE4zmJp1rVPHcZ8FSSOuBtnXokeIMN7eicEGOqUBRFUPcmaow941ijEgOjXttA6J8YF643%2BfljO9f9dJ5Y02rVLdriQwUZAVAuomMJPly7HUW%2FF8tDb2fnHG9VmwHHfTulhQwsc6Ganfn2zBgWn2fgkp6oLBlJ9cjnKiVcZL4Xs%2FRrBBF3UAerd3YZNFI9FtgpPT8RWSR4BXJIDv2x0SwBm%2BsfDMGxUJFyIn%2ByLzVChV8ekD2b170x18yqUVZ5zGCaZJ&X-Amz-Signature=ef0ad3fa0c2e02df46fe89e8ef6671388b418792ea22a099884053026dd3e688&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3KD4MP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDy3FoiUdowrX5QgbQwjbN7NeJL3gjkAOBZOwPX%2FDnCzwIgMPlGqUrYgmA2SzXooN7ZlzE%2FDnNq2ybLvRxDlI4mRF8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjuJsukyp3exPKVnyrcA%2BDAVbvE5IUcO%2BXEXN9zNo4lZEGexPphcrml2Bb%2FMfxxApYTfdNp0qFqqiaS8WFQn8WNC63rd1i0PnttBOI5NA%2FtWyi3geAhuTXLhbrck4hqapWRcldRWNIjHOMhYdckqBsKcnEAg9j8YmTb9alEzOHIx7cEL1nXN3rlEGR%2B2BQGkTtnF1HImZnvSSZPfnFoOYeAwd8bceSPAznlImWGk97AmJ%2BZrNGAfMRXAs%2Fsg9NzGTGYOn2hio48ZAzYF1z2umYqmshOlz8L%2Bft%2FU2OTM0GFGuJeHKWnLJ%2FecePxNl3CSIjpqHUQ8jXVEjK6eXc%2BlXxsCok80xcBWqIQAw0FJd50ITdDQ3%2FDXXEd0T4Ch%2B6P81kXjW0p%2BYREKu4i%2BK322CKoAnEF%2BZ4gvCiPwON5ME5djgLFq18q0CxPHfwBlOB6o8Qx%2FGvtnF9raqfdZGj%2BhNlNMVDG3hBov7WKF2WzBKHV90PCZkrB1zT0Q78cvDPD9eAPB7ZALRiU2nGBz9%2BIhOrB6Tx%2F7F3y1HqPIJTk7O6fTN%2BJB0L7AROr1Nh26GW0yYrUrItoePQWky%2FA9E31feDsVJM%2Fa6%2FlMP0sCH%2FRdBIwaIw9nr68qE4zmJp1rVPHcZ8FSSOuBtnXokeIMN7eicEGOqUBRFUPcmaow941ijEgOjXttA6J8YF643%2BfljO9f9dJ5Y02rVLdriQwUZAVAuomMJPly7HUW%2FF8tDb2fnHG9VmwHHfTulhQwsc6Ganfn2zBgWn2fgkp6oLBlJ9cjnKiVcZL4Xs%2FRrBBF3UAerd3YZNFI9FtgpPT8RWSR4BXJIDv2x0SwBm%2BsfDMGxUJFyIn%2ByLzVChV8ekD2b170x18yqUVZ5zGCaZJ&X-Amz-Signature=f535881c3c6940dd7888bfdbdbfd4dcc5a9697aed9355e0a1b7246aa7d754088&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
