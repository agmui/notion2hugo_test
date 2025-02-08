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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWFIPPP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD3QrmKSMKGNKhUkqclPwsZzIiGSYFjXYP2dNzAWHPsvAIgf0Y1CihB2rV3mg65Az92ksX%2FGICbtSUJxiSdmZ2gnNAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBk5x4iyfMwBW7KniCrcA%2BRiBTdnvqmgsCYhKUrNl2htCVKJJT795FUYSS464K3%2FtgWY02qe83lj07cxbJYAJBPk2d0N%2F78oLekReONQ0rex3LtOIKoGC%2FGCskWXG%2FNqP9Icetmfg6IDZV7ueCWFK19H6NoygWTvr%2Bw9uFJznpJBa0kEV6eOiD88FpsM%2ByHX7Bh0kUG0RFC9W5ZqEB5RPXlOhnqmIxf8s1gT9a2QnGj7Ok5OxJslQfrKlb0d8xnnMkti95CvK6KQAXBMBtyUJVgTDahHPy9iNXNwQzxy4Zb02rMYFyAxpa%2BuBycxeXuZCpUPuK6VNitt1MjUeCJVNrx%2FDzUbBfJVwLsKpVRrnXeTf%2FpvlmRmlGD3%2FnKGj7G9TahTVA8g%2B3dSYUyncR4bj23UiQ1BKHhjGwh7NnoRlSpgEsCz1h8zoLhhX3G5Oo9y0QQCiIewildw8R9vhpD%2B47bKvi4Z2EqDRqjfY5IcZbN3qTZCCRMFcPDXS86yTlAk30CBff1rjUGzMxFo8PSUuZZ9%2B2UUZ0108qbxCioYXfbQenHT6n91tVtycJGOQwJDLo%2FTGs3%2FVJfTa18aFhRMirPM9lr14rk3vXcbJlnrmb%2Bic4giP5RvasOxKwy3GOjgBbsJzwhmnb%2BM7mSdMJPAmr0GOqUBhXTdwsRZlVfxfGgSlGDB5341HJ4UlqRpypGemZ%2BSCIFGk8FRyqFU%2FQmFSHFWXPF2r89Eo49MAIRr7pMX40I25qOaeg6h3sIJ4SKcmCVSLLc18YOwvkZ9p5hic9ewRBS1dIC7yUBY4bx%2BE4e8bubSSdyO1mZ64e7P88%2BHHmnhycgLpPJhSZK986t%2BqkkHW8o67s0k%2BrUNqua88D5XRwBFV2Nl378N&X-Amz-Signature=8071ac28c7f9bd6a490ddeb8f5bd1393343b958e075941212064c70a878c1283&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWFIPPP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD3QrmKSMKGNKhUkqclPwsZzIiGSYFjXYP2dNzAWHPsvAIgf0Y1CihB2rV3mg65Az92ksX%2FGICbtSUJxiSdmZ2gnNAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBk5x4iyfMwBW7KniCrcA%2BRiBTdnvqmgsCYhKUrNl2htCVKJJT795FUYSS464K3%2FtgWY02qe83lj07cxbJYAJBPk2d0N%2F78oLekReONQ0rex3LtOIKoGC%2FGCskWXG%2FNqP9Icetmfg6IDZV7ueCWFK19H6NoygWTvr%2Bw9uFJznpJBa0kEV6eOiD88FpsM%2ByHX7Bh0kUG0RFC9W5ZqEB5RPXlOhnqmIxf8s1gT9a2QnGj7Ok5OxJslQfrKlb0d8xnnMkti95CvK6KQAXBMBtyUJVgTDahHPy9iNXNwQzxy4Zb02rMYFyAxpa%2BuBycxeXuZCpUPuK6VNitt1MjUeCJVNrx%2FDzUbBfJVwLsKpVRrnXeTf%2FpvlmRmlGD3%2FnKGj7G9TahTVA8g%2B3dSYUyncR4bj23UiQ1BKHhjGwh7NnoRlSpgEsCz1h8zoLhhX3G5Oo9y0QQCiIewildw8R9vhpD%2B47bKvi4Z2EqDRqjfY5IcZbN3qTZCCRMFcPDXS86yTlAk30CBff1rjUGzMxFo8PSUuZZ9%2B2UUZ0108qbxCioYXfbQenHT6n91tVtycJGOQwJDLo%2FTGs3%2FVJfTa18aFhRMirPM9lr14rk3vXcbJlnrmb%2Bic4giP5RvasOxKwy3GOjgBbsJzwhmnb%2BM7mSdMJPAmr0GOqUBhXTdwsRZlVfxfGgSlGDB5341HJ4UlqRpypGemZ%2BSCIFGk8FRyqFU%2FQmFSHFWXPF2r89Eo49MAIRr7pMX40I25qOaeg6h3sIJ4SKcmCVSLLc18YOwvkZ9p5hic9ewRBS1dIC7yUBY4bx%2BE4e8bubSSdyO1mZ64e7P88%2BHHmnhycgLpPJhSZK986t%2BqkkHW8o67s0k%2BrUNqua88D5XRwBFV2Nl378N&X-Amz-Signature=c2b3f28dc7bce0e1f875a28c074e2a9866bece1396e6f213b3af5575672fb992&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWFIPPP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD3QrmKSMKGNKhUkqclPwsZzIiGSYFjXYP2dNzAWHPsvAIgf0Y1CihB2rV3mg65Az92ksX%2FGICbtSUJxiSdmZ2gnNAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBk5x4iyfMwBW7KniCrcA%2BRiBTdnvqmgsCYhKUrNl2htCVKJJT795FUYSS464K3%2FtgWY02qe83lj07cxbJYAJBPk2d0N%2F78oLekReONQ0rex3LtOIKoGC%2FGCskWXG%2FNqP9Icetmfg6IDZV7ueCWFK19H6NoygWTvr%2Bw9uFJznpJBa0kEV6eOiD88FpsM%2ByHX7Bh0kUG0RFC9W5ZqEB5RPXlOhnqmIxf8s1gT9a2QnGj7Ok5OxJslQfrKlb0d8xnnMkti95CvK6KQAXBMBtyUJVgTDahHPy9iNXNwQzxy4Zb02rMYFyAxpa%2BuBycxeXuZCpUPuK6VNitt1MjUeCJVNrx%2FDzUbBfJVwLsKpVRrnXeTf%2FpvlmRmlGD3%2FnKGj7G9TahTVA8g%2B3dSYUyncR4bj23UiQ1BKHhjGwh7NnoRlSpgEsCz1h8zoLhhX3G5Oo9y0QQCiIewildw8R9vhpD%2B47bKvi4Z2EqDRqjfY5IcZbN3qTZCCRMFcPDXS86yTlAk30CBff1rjUGzMxFo8PSUuZZ9%2B2UUZ0108qbxCioYXfbQenHT6n91tVtycJGOQwJDLo%2FTGs3%2FVJfTa18aFhRMirPM9lr14rk3vXcbJlnrmb%2Bic4giP5RvasOxKwy3GOjgBbsJzwhmnb%2BM7mSdMJPAmr0GOqUBhXTdwsRZlVfxfGgSlGDB5341HJ4UlqRpypGemZ%2BSCIFGk8FRyqFU%2FQmFSHFWXPF2r89Eo49MAIRr7pMX40I25qOaeg6h3sIJ4SKcmCVSLLc18YOwvkZ9p5hic9ewRBS1dIC7yUBY4bx%2BE4e8bubSSdyO1mZ64e7P88%2BHHmnhycgLpPJhSZK986t%2BqkkHW8o67s0k%2BrUNqua88D5XRwBFV2Nl378N&X-Amz-Signature=2ccec8ec1757ce526485f342055247d3eb6de1ce9118328abd27b6a99d8dff65&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWFIPPP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD3QrmKSMKGNKhUkqclPwsZzIiGSYFjXYP2dNzAWHPsvAIgf0Y1CihB2rV3mg65Az92ksX%2FGICbtSUJxiSdmZ2gnNAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBk5x4iyfMwBW7KniCrcA%2BRiBTdnvqmgsCYhKUrNl2htCVKJJT795FUYSS464K3%2FtgWY02qe83lj07cxbJYAJBPk2d0N%2F78oLekReONQ0rex3LtOIKoGC%2FGCskWXG%2FNqP9Icetmfg6IDZV7ueCWFK19H6NoygWTvr%2Bw9uFJznpJBa0kEV6eOiD88FpsM%2ByHX7Bh0kUG0RFC9W5ZqEB5RPXlOhnqmIxf8s1gT9a2QnGj7Ok5OxJslQfrKlb0d8xnnMkti95CvK6KQAXBMBtyUJVgTDahHPy9iNXNwQzxy4Zb02rMYFyAxpa%2BuBycxeXuZCpUPuK6VNitt1MjUeCJVNrx%2FDzUbBfJVwLsKpVRrnXeTf%2FpvlmRmlGD3%2FnKGj7G9TahTVA8g%2B3dSYUyncR4bj23UiQ1BKHhjGwh7NnoRlSpgEsCz1h8zoLhhX3G5Oo9y0QQCiIewildw8R9vhpD%2B47bKvi4Z2EqDRqjfY5IcZbN3qTZCCRMFcPDXS86yTlAk30CBff1rjUGzMxFo8PSUuZZ9%2B2UUZ0108qbxCioYXfbQenHT6n91tVtycJGOQwJDLo%2FTGs3%2FVJfTa18aFhRMirPM9lr14rk3vXcbJlnrmb%2Bic4giP5RvasOxKwy3GOjgBbsJzwhmnb%2BM7mSdMJPAmr0GOqUBhXTdwsRZlVfxfGgSlGDB5341HJ4UlqRpypGemZ%2BSCIFGk8FRyqFU%2FQmFSHFWXPF2r89Eo49MAIRr7pMX40I25qOaeg6h3sIJ4SKcmCVSLLc18YOwvkZ9p5hic9ewRBS1dIC7yUBY4bx%2BE4e8bubSSdyO1mZ64e7P88%2BHHmnhycgLpPJhSZK986t%2BqkkHW8o67s0k%2BrUNqua88D5XRwBFV2Nl378N&X-Amz-Signature=173fe71f8cfa059c1bf719e3329b31016e738570f8d2e26e01e45f2b555fc734&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWFIPPP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD3QrmKSMKGNKhUkqclPwsZzIiGSYFjXYP2dNzAWHPsvAIgf0Y1CihB2rV3mg65Az92ksX%2FGICbtSUJxiSdmZ2gnNAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBk5x4iyfMwBW7KniCrcA%2BRiBTdnvqmgsCYhKUrNl2htCVKJJT795FUYSS464K3%2FtgWY02qe83lj07cxbJYAJBPk2d0N%2F78oLekReONQ0rex3LtOIKoGC%2FGCskWXG%2FNqP9Icetmfg6IDZV7ueCWFK19H6NoygWTvr%2Bw9uFJznpJBa0kEV6eOiD88FpsM%2ByHX7Bh0kUG0RFC9W5ZqEB5RPXlOhnqmIxf8s1gT9a2QnGj7Ok5OxJslQfrKlb0d8xnnMkti95CvK6KQAXBMBtyUJVgTDahHPy9iNXNwQzxy4Zb02rMYFyAxpa%2BuBycxeXuZCpUPuK6VNitt1MjUeCJVNrx%2FDzUbBfJVwLsKpVRrnXeTf%2FpvlmRmlGD3%2FnKGj7G9TahTVA8g%2B3dSYUyncR4bj23UiQ1BKHhjGwh7NnoRlSpgEsCz1h8zoLhhX3G5Oo9y0QQCiIewildw8R9vhpD%2B47bKvi4Z2EqDRqjfY5IcZbN3qTZCCRMFcPDXS86yTlAk30CBff1rjUGzMxFo8PSUuZZ9%2B2UUZ0108qbxCioYXfbQenHT6n91tVtycJGOQwJDLo%2FTGs3%2FVJfTa18aFhRMirPM9lr14rk3vXcbJlnrmb%2Bic4giP5RvasOxKwy3GOjgBbsJzwhmnb%2BM7mSdMJPAmr0GOqUBhXTdwsRZlVfxfGgSlGDB5341HJ4UlqRpypGemZ%2BSCIFGk8FRyqFU%2FQmFSHFWXPF2r89Eo49MAIRr7pMX40I25qOaeg6h3sIJ4SKcmCVSLLc18YOwvkZ9p5hic9ewRBS1dIC7yUBY4bx%2BE4e8bubSSdyO1mZ64e7P88%2BHHmnhycgLpPJhSZK986t%2BqkkHW8o67s0k%2BrUNqua88D5XRwBFV2Nl378N&X-Amz-Signature=794b350542e8a54cb996e93d1fd91f826492d91ba2a8c57a9f128326f5d63a4b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWFIPPP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD3QrmKSMKGNKhUkqclPwsZzIiGSYFjXYP2dNzAWHPsvAIgf0Y1CihB2rV3mg65Az92ksX%2FGICbtSUJxiSdmZ2gnNAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBk5x4iyfMwBW7KniCrcA%2BRiBTdnvqmgsCYhKUrNl2htCVKJJT795FUYSS464K3%2FtgWY02qe83lj07cxbJYAJBPk2d0N%2F78oLekReONQ0rex3LtOIKoGC%2FGCskWXG%2FNqP9Icetmfg6IDZV7ueCWFK19H6NoygWTvr%2Bw9uFJznpJBa0kEV6eOiD88FpsM%2ByHX7Bh0kUG0RFC9W5ZqEB5RPXlOhnqmIxf8s1gT9a2QnGj7Ok5OxJslQfrKlb0d8xnnMkti95CvK6KQAXBMBtyUJVgTDahHPy9iNXNwQzxy4Zb02rMYFyAxpa%2BuBycxeXuZCpUPuK6VNitt1MjUeCJVNrx%2FDzUbBfJVwLsKpVRrnXeTf%2FpvlmRmlGD3%2FnKGj7G9TahTVA8g%2B3dSYUyncR4bj23UiQ1BKHhjGwh7NnoRlSpgEsCz1h8zoLhhX3G5Oo9y0QQCiIewildw8R9vhpD%2B47bKvi4Z2EqDRqjfY5IcZbN3qTZCCRMFcPDXS86yTlAk30CBff1rjUGzMxFo8PSUuZZ9%2B2UUZ0108qbxCioYXfbQenHT6n91tVtycJGOQwJDLo%2FTGs3%2FVJfTa18aFhRMirPM9lr14rk3vXcbJlnrmb%2Bic4giP5RvasOxKwy3GOjgBbsJzwhmnb%2BM7mSdMJPAmr0GOqUBhXTdwsRZlVfxfGgSlGDB5341HJ4UlqRpypGemZ%2BSCIFGk8FRyqFU%2FQmFSHFWXPF2r89Eo49MAIRr7pMX40I25qOaeg6h3sIJ4SKcmCVSLLc18YOwvkZ9p5hic9ewRBS1dIC7yUBY4bx%2BE4e8bubSSdyO1mZ64e7P88%2BHHmnhycgLpPJhSZK986t%2BqkkHW8o67s0k%2BrUNqua88D5XRwBFV2Nl378N&X-Amz-Signature=693e557b71796f760a4b7d2b3d5ca2b9500b2a539430a04b6ec16378d62112b0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWFIPPP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD3QrmKSMKGNKhUkqclPwsZzIiGSYFjXYP2dNzAWHPsvAIgf0Y1CihB2rV3mg65Az92ksX%2FGICbtSUJxiSdmZ2gnNAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBk5x4iyfMwBW7KniCrcA%2BRiBTdnvqmgsCYhKUrNl2htCVKJJT795FUYSS464K3%2FtgWY02qe83lj07cxbJYAJBPk2d0N%2F78oLekReONQ0rex3LtOIKoGC%2FGCskWXG%2FNqP9Icetmfg6IDZV7ueCWFK19H6NoygWTvr%2Bw9uFJznpJBa0kEV6eOiD88FpsM%2ByHX7Bh0kUG0RFC9W5ZqEB5RPXlOhnqmIxf8s1gT9a2QnGj7Ok5OxJslQfrKlb0d8xnnMkti95CvK6KQAXBMBtyUJVgTDahHPy9iNXNwQzxy4Zb02rMYFyAxpa%2BuBycxeXuZCpUPuK6VNitt1MjUeCJVNrx%2FDzUbBfJVwLsKpVRrnXeTf%2FpvlmRmlGD3%2FnKGj7G9TahTVA8g%2B3dSYUyncR4bj23UiQ1BKHhjGwh7NnoRlSpgEsCz1h8zoLhhX3G5Oo9y0QQCiIewildw8R9vhpD%2B47bKvi4Z2EqDRqjfY5IcZbN3qTZCCRMFcPDXS86yTlAk30CBff1rjUGzMxFo8PSUuZZ9%2B2UUZ0108qbxCioYXfbQenHT6n91tVtycJGOQwJDLo%2FTGs3%2FVJfTa18aFhRMirPM9lr14rk3vXcbJlnrmb%2Bic4giP5RvasOxKwy3GOjgBbsJzwhmnb%2BM7mSdMJPAmr0GOqUBhXTdwsRZlVfxfGgSlGDB5341HJ4UlqRpypGemZ%2BSCIFGk8FRyqFU%2FQmFSHFWXPF2r89Eo49MAIRr7pMX40I25qOaeg6h3sIJ4SKcmCVSLLc18YOwvkZ9p5hic9ewRBS1dIC7yUBY4bx%2BE4e8bubSSdyO1mZ64e7P88%2BHHmnhycgLpPJhSZK986t%2BqkkHW8o67s0k%2BrUNqua88D5XRwBFV2Nl378N&X-Amz-Signature=bf14c11e3726ce26f938cc0184b74f6e05a1555cb32b82dc425ca14c6c764333&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
