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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5H5YGRH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPTzDif1iLjgRz0hJHYogSC4FruSWtrCWGrZYa%2Bj%2BqQIgTVe078Cjj4EAS9XguhW%2F2f7fc%2FuWEQbEU9eaw%2FeTlJwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1Oj%2FYv%2F1DLqAM10SrcA4AreWwwbmaKfIUGNcx0JJEzV%2FLJny%2BJ4WFv1e4MPp0CZJSOhtSwRDKAYmTx1ln3coibzrESO4pIta9Vb7rCKZYPsBHp17A1p1StR9eEUv1C1L9h1pQF3kg43AQKLpjtcOhM7%2F7Y5S2s%2FaHw8%2Bvow5lqz9%2F2S5LQFSNY8XyCOCnkBAm%2BVZMQmM1ObTWQz60alDPbngOaYW2U5qjUK8thTPCEAVwyR5CP%2FVeuB%2FCbhqdk1BMvW5OB40nmn7R1ywjUCTfYXd8mlN4%2BZ8C4wW93EoziwzsJ%2FJV2sIPALaNJLuANGsx8SXTgUlc1dJkvTtqXt%2F4yS3%2Fys8FEjtsdxFfSv9Ov2SLgd%2BBJie79kZ%2FN3ymBr8LwavSBKWZzPPCnEj33Cv7v4ZWKQvQ%2B8ej4%2BLfbT%2Bgd1egKgZQC9wyMIkyXakZRUne%2BjNkBQiE70BU6NMs6ZWdCqWxSZVemvgkOVN1znPdRXVy9CkysQAS11E3gSh1zpBGisb%2FeQIAGWtSHKJumWLf24uiuVn6%2FCqRVmQ0b2YLxNnPVUPvKqUsTyLcCVBQh9jCrX%2FExJAZL9Q%2B8waWaGD5tI9ge3eo%2Btvme1TqlMRx7Wl%2FNZXpqnakB7j2fnRzxiK4lXD2WxqOLrfh8MMSQpL0GOqUBz2SFIl6Vd1VJRQBoTYOAxJ5C2s0AgZJ09WejeMjBdyTqZf6nvgUNbZ2kFUk%2Bcca7hbUr8JZMCp4VO886Dav%2BgBiywWS3DEvbcP5yCSGvtZ%2BVEqEUP45IEaeo9EXsnK0fta%2BZ679%2BBAuYY3Pqk0pP9JO6IvMyhrZ6Jcmv7CP8Iq1C9aB9vsQPUWqeGaTriLAx%2FTpK70fBYO3Ha%2Bg99VDL%2FjPCFuoG&X-Amz-Signature=1d375e7c0d4a662144472336128ea1abdc96bfdbb4f97b1643651772ff94f75b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5H5YGRH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPTzDif1iLjgRz0hJHYogSC4FruSWtrCWGrZYa%2Bj%2BqQIgTVe078Cjj4EAS9XguhW%2F2f7fc%2FuWEQbEU9eaw%2FeTlJwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1Oj%2FYv%2F1DLqAM10SrcA4AreWwwbmaKfIUGNcx0JJEzV%2FLJny%2BJ4WFv1e4MPp0CZJSOhtSwRDKAYmTx1ln3coibzrESO4pIta9Vb7rCKZYPsBHp17A1p1StR9eEUv1C1L9h1pQF3kg43AQKLpjtcOhM7%2F7Y5S2s%2FaHw8%2Bvow5lqz9%2F2S5LQFSNY8XyCOCnkBAm%2BVZMQmM1ObTWQz60alDPbngOaYW2U5qjUK8thTPCEAVwyR5CP%2FVeuB%2FCbhqdk1BMvW5OB40nmn7R1ywjUCTfYXd8mlN4%2BZ8C4wW93EoziwzsJ%2FJV2sIPALaNJLuANGsx8SXTgUlc1dJkvTtqXt%2F4yS3%2Fys8FEjtsdxFfSv9Ov2SLgd%2BBJie79kZ%2FN3ymBr8LwavSBKWZzPPCnEj33Cv7v4ZWKQvQ%2B8ej4%2BLfbT%2Bgd1egKgZQC9wyMIkyXakZRUne%2BjNkBQiE70BU6NMs6ZWdCqWxSZVemvgkOVN1znPdRXVy9CkysQAS11E3gSh1zpBGisb%2FeQIAGWtSHKJumWLf24uiuVn6%2FCqRVmQ0b2YLxNnPVUPvKqUsTyLcCVBQh9jCrX%2FExJAZL9Q%2B8waWaGD5tI9ge3eo%2Btvme1TqlMRx7Wl%2FNZXpqnakB7j2fnRzxiK4lXD2WxqOLrfh8MMSQpL0GOqUBz2SFIl6Vd1VJRQBoTYOAxJ5C2s0AgZJ09WejeMjBdyTqZf6nvgUNbZ2kFUk%2Bcca7hbUr8JZMCp4VO886Dav%2BgBiywWS3DEvbcP5yCSGvtZ%2BVEqEUP45IEaeo9EXsnK0fta%2BZ679%2BBAuYY3Pqk0pP9JO6IvMyhrZ6Jcmv7CP8Iq1C9aB9vsQPUWqeGaTriLAx%2FTpK70fBYO3Ha%2Bg99VDL%2FjPCFuoG&X-Amz-Signature=6d3c8c9f93404e53442531823a66ebe2f77237c703c33fdff31f95c67d8523a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5H5YGRH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPTzDif1iLjgRz0hJHYogSC4FruSWtrCWGrZYa%2Bj%2BqQIgTVe078Cjj4EAS9XguhW%2F2f7fc%2FuWEQbEU9eaw%2FeTlJwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1Oj%2FYv%2F1DLqAM10SrcA4AreWwwbmaKfIUGNcx0JJEzV%2FLJny%2BJ4WFv1e4MPp0CZJSOhtSwRDKAYmTx1ln3coibzrESO4pIta9Vb7rCKZYPsBHp17A1p1StR9eEUv1C1L9h1pQF3kg43AQKLpjtcOhM7%2F7Y5S2s%2FaHw8%2Bvow5lqz9%2F2S5LQFSNY8XyCOCnkBAm%2BVZMQmM1ObTWQz60alDPbngOaYW2U5qjUK8thTPCEAVwyR5CP%2FVeuB%2FCbhqdk1BMvW5OB40nmn7R1ywjUCTfYXd8mlN4%2BZ8C4wW93EoziwzsJ%2FJV2sIPALaNJLuANGsx8SXTgUlc1dJkvTtqXt%2F4yS3%2Fys8FEjtsdxFfSv9Ov2SLgd%2BBJie79kZ%2FN3ymBr8LwavSBKWZzPPCnEj33Cv7v4ZWKQvQ%2B8ej4%2BLfbT%2Bgd1egKgZQC9wyMIkyXakZRUne%2BjNkBQiE70BU6NMs6ZWdCqWxSZVemvgkOVN1znPdRXVy9CkysQAS11E3gSh1zpBGisb%2FeQIAGWtSHKJumWLf24uiuVn6%2FCqRVmQ0b2YLxNnPVUPvKqUsTyLcCVBQh9jCrX%2FExJAZL9Q%2B8waWaGD5tI9ge3eo%2Btvme1TqlMRx7Wl%2FNZXpqnakB7j2fnRzxiK4lXD2WxqOLrfh8MMSQpL0GOqUBz2SFIl6Vd1VJRQBoTYOAxJ5C2s0AgZJ09WejeMjBdyTqZf6nvgUNbZ2kFUk%2Bcca7hbUr8JZMCp4VO886Dav%2BgBiywWS3DEvbcP5yCSGvtZ%2BVEqEUP45IEaeo9EXsnK0fta%2BZ679%2BBAuYY3Pqk0pP9JO6IvMyhrZ6Jcmv7CP8Iq1C9aB9vsQPUWqeGaTriLAx%2FTpK70fBYO3Ha%2Bg99VDL%2FjPCFuoG&X-Amz-Signature=5bcfdb8a932cab83174341933e4523788eb9a19962fab7826cba3c47595c4722&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5H5YGRH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPTzDif1iLjgRz0hJHYogSC4FruSWtrCWGrZYa%2Bj%2BqQIgTVe078Cjj4EAS9XguhW%2F2f7fc%2FuWEQbEU9eaw%2FeTlJwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1Oj%2FYv%2F1DLqAM10SrcA4AreWwwbmaKfIUGNcx0JJEzV%2FLJny%2BJ4WFv1e4MPp0CZJSOhtSwRDKAYmTx1ln3coibzrESO4pIta9Vb7rCKZYPsBHp17A1p1StR9eEUv1C1L9h1pQF3kg43AQKLpjtcOhM7%2F7Y5S2s%2FaHw8%2Bvow5lqz9%2F2S5LQFSNY8XyCOCnkBAm%2BVZMQmM1ObTWQz60alDPbngOaYW2U5qjUK8thTPCEAVwyR5CP%2FVeuB%2FCbhqdk1BMvW5OB40nmn7R1ywjUCTfYXd8mlN4%2BZ8C4wW93EoziwzsJ%2FJV2sIPALaNJLuANGsx8SXTgUlc1dJkvTtqXt%2F4yS3%2Fys8FEjtsdxFfSv9Ov2SLgd%2BBJie79kZ%2FN3ymBr8LwavSBKWZzPPCnEj33Cv7v4ZWKQvQ%2B8ej4%2BLfbT%2Bgd1egKgZQC9wyMIkyXakZRUne%2BjNkBQiE70BU6NMs6ZWdCqWxSZVemvgkOVN1znPdRXVy9CkysQAS11E3gSh1zpBGisb%2FeQIAGWtSHKJumWLf24uiuVn6%2FCqRVmQ0b2YLxNnPVUPvKqUsTyLcCVBQh9jCrX%2FExJAZL9Q%2B8waWaGD5tI9ge3eo%2Btvme1TqlMRx7Wl%2FNZXpqnakB7j2fnRzxiK4lXD2WxqOLrfh8MMSQpL0GOqUBz2SFIl6Vd1VJRQBoTYOAxJ5C2s0AgZJ09WejeMjBdyTqZf6nvgUNbZ2kFUk%2Bcca7hbUr8JZMCp4VO886Dav%2BgBiywWS3DEvbcP5yCSGvtZ%2BVEqEUP45IEaeo9EXsnK0fta%2BZ679%2BBAuYY3Pqk0pP9JO6IvMyhrZ6Jcmv7CP8Iq1C9aB9vsQPUWqeGaTriLAx%2FTpK70fBYO3Ha%2Bg99VDL%2FjPCFuoG&X-Amz-Signature=30ccf1c44a2643d66b021674d66e7f4242ce2509632479a17acc08255a89d091&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5H5YGRH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPTzDif1iLjgRz0hJHYogSC4FruSWtrCWGrZYa%2Bj%2BqQIgTVe078Cjj4EAS9XguhW%2F2f7fc%2FuWEQbEU9eaw%2FeTlJwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1Oj%2FYv%2F1DLqAM10SrcA4AreWwwbmaKfIUGNcx0JJEzV%2FLJny%2BJ4WFv1e4MPp0CZJSOhtSwRDKAYmTx1ln3coibzrESO4pIta9Vb7rCKZYPsBHp17A1p1StR9eEUv1C1L9h1pQF3kg43AQKLpjtcOhM7%2F7Y5S2s%2FaHw8%2Bvow5lqz9%2F2S5LQFSNY8XyCOCnkBAm%2BVZMQmM1ObTWQz60alDPbngOaYW2U5qjUK8thTPCEAVwyR5CP%2FVeuB%2FCbhqdk1BMvW5OB40nmn7R1ywjUCTfYXd8mlN4%2BZ8C4wW93EoziwzsJ%2FJV2sIPALaNJLuANGsx8SXTgUlc1dJkvTtqXt%2F4yS3%2Fys8FEjtsdxFfSv9Ov2SLgd%2BBJie79kZ%2FN3ymBr8LwavSBKWZzPPCnEj33Cv7v4ZWKQvQ%2B8ej4%2BLfbT%2Bgd1egKgZQC9wyMIkyXakZRUne%2BjNkBQiE70BU6NMs6ZWdCqWxSZVemvgkOVN1znPdRXVy9CkysQAS11E3gSh1zpBGisb%2FeQIAGWtSHKJumWLf24uiuVn6%2FCqRVmQ0b2YLxNnPVUPvKqUsTyLcCVBQh9jCrX%2FExJAZL9Q%2B8waWaGD5tI9ge3eo%2Btvme1TqlMRx7Wl%2FNZXpqnakB7j2fnRzxiK4lXD2WxqOLrfh8MMSQpL0GOqUBz2SFIl6Vd1VJRQBoTYOAxJ5C2s0AgZJ09WejeMjBdyTqZf6nvgUNbZ2kFUk%2Bcca7hbUr8JZMCp4VO886Dav%2BgBiywWS3DEvbcP5yCSGvtZ%2BVEqEUP45IEaeo9EXsnK0fta%2BZ679%2BBAuYY3Pqk0pP9JO6IvMyhrZ6Jcmv7CP8Iq1C9aB9vsQPUWqeGaTriLAx%2FTpK70fBYO3Ha%2Bg99VDL%2FjPCFuoG&X-Amz-Signature=38ea16a44420077ce2714fe8f3b2fe5e91b3c17452e5811d1c0edb9f609baba5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5H5YGRH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPTzDif1iLjgRz0hJHYogSC4FruSWtrCWGrZYa%2Bj%2BqQIgTVe078Cjj4EAS9XguhW%2F2f7fc%2FuWEQbEU9eaw%2FeTlJwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1Oj%2FYv%2F1DLqAM10SrcA4AreWwwbmaKfIUGNcx0JJEzV%2FLJny%2BJ4WFv1e4MPp0CZJSOhtSwRDKAYmTx1ln3coibzrESO4pIta9Vb7rCKZYPsBHp17A1p1StR9eEUv1C1L9h1pQF3kg43AQKLpjtcOhM7%2F7Y5S2s%2FaHw8%2Bvow5lqz9%2F2S5LQFSNY8XyCOCnkBAm%2BVZMQmM1ObTWQz60alDPbngOaYW2U5qjUK8thTPCEAVwyR5CP%2FVeuB%2FCbhqdk1BMvW5OB40nmn7R1ywjUCTfYXd8mlN4%2BZ8C4wW93EoziwzsJ%2FJV2sIPALaNJLuANGsx8SXTgUlc1dJkvTtqXt%2F4yS3%2Fys8FEjtsdxFfSv9Ov2SLgd%2BBJie79kZ%2FN3ymBr8LwavSBKWZzPPCnEj33Cv7v4ZWKQvQ%2B8ej4%2BLfbT%2Bgd1egKgZQC9wyMIkyXakZRUne%2BjNkBQiE70BU6NMs6ZWdCqWxSZVemvgkOVN1znPdRXVy9CkysQAS11E3gSh1zpBGisb%2FeQIAGWtSHKJumWLf24uiuVn6%2FCqRVmQ0b2YLxNnPVUPvKqUsTyLcCVBQh9jCrX%2FExJAZL9Q%2B8waWaGD5tI9ge3eo%2Btvme1TqlMRx7Wl%2FNZXpqnakB7j2fnRzxiK4lXD2WxqOLrfh8MMSQpL0GOqUBz2SFIl6Vd1VJRQBoTYOAxJ5C2s0AgZJ09WejeMjBdyTqZf6nvgUNbZ2kFUk%2Bcca7hbUr8JZMCp4VO886Dav%2BgBiywWS3DEvbcP5yCSGvtZ%2BVEqEUP45IEaeo9EXsnK0fta%2BZ679%2BBAuYY3Pqk0pP9JO6IvMyhrZ6Jcmv7CP8Iq1C9aB9vsQPUWqeGaTriLAx%2FTpK70fBYO3Ha%2Bg99VDL%2FjPCFuoG&X-Amz-Signature=1234151e9f540bca47f3347b616c441ac74243190b5134d3c485e4c67a74aa0f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5H5YGRH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPTzDif1iLjgRz0hJHYogSC4FruSWtrCWGrZYa%2Bj%2BqQIgTVe078Cjj4EAS9XguhW%2F2f7fc%2FuWEQbEU9eaw%2FeTlJwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1Oj%2FYv%2F1DLqAM10SrcA4AreWwwbmaKfIUGNcx0JJEzV%2FLJny%2BJ4WFv1e4MPp0CZJSOhtSwRDKAYmTx1ln3coibzrESO4pIta9Vb7rCKZYPsBHp17A1p1StR9eEUv1C1L9h1pQF3kg43AQKLpjtcOhM7%2F7Y5S2s%2FaHw8%2Bvow5lqz9%2F2S5LQFSNY8XyCOCnkBAm%2BVZMQmM1ObTWQz60alDPbngOaYW2U5qjUK8thTPCEAVwyR5CP%2FVeuB%2FCbhqdk1BMvW5OB40nmn7R1ywjUCTfYXd8mlN4%2BZ8C4wW93EoziwzsJ%2FJV2sIPALaNJLuANGsx8SXTgUlc1dJkvTtqXt%2F4yS3%2Fys8FEjtsdxFfSv9Ov2SLgd%2BBJie79kZ%2FN3ymBr8LwavSBKWZzPPCnEj33Cv7v4ZWKQvQ%2B8ej4%2BLfbT%2Bgd1egKgZQC9wyMIkyXakZRUne%2BjNkBQiE70BU6NMs6ZWdCqWxSZVemvgkOVN1znPdRXVy9CkysQAS11E3gSh1zpBGisb%2FeQIAGWtSHKJumWLf24uiuVn6%2FCqRVmQ0b2YLxNnPVUPvKqUsTyLcCVBQh9jCrX%2FExJAZL9Q%2B8waWaGD5tI9ge3eo%2Btvme1TqlMRx7Wl%2FNZXpqnakB7j2fnRzxiK4lXD2WxqOLrfh8MMSQpL0GOqUBz2SFIl6Vd1VJRQBoTYOAxJ5C2s0AgZJ09WejeMjBdyTqZf6nvgUNbZ2kFUk%2Bcca7hbUr8JZMCp4VO886Dav%2BgBiywWS3DEvbcP5yCSGvtZ%2BVEqEUP45IEaeo9EXsnK0fta%2BZ679%2BBAuYY3Pqk0pP9JO6IvMyhrZ6Jcmv7CP8Iq1C9aB9vsQPUWqeGaTriLAx%2FTpK70fBYO3Ha%2Bg99VDL%2FjPCFuoG&X-Amz-Signature=c2670eb13faf7ff1f9fb170f9f8ba34f296d357393a67574410ab95d858e3a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
