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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR23SBKD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEIHiGFyiJH90i3wOUBki6JKO%2F0heRCr1Vgt%2B3%2BTT2uAiEArAXzeO3WQW7oJ0aywl8StLe2zbFUIsI9OjHaq9vRHVUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jh1erNgByQxPBECrcA34Itt1q4r1Lj1HY3QkylE8XWAC6Gb7Sive%2FqH2hvvyWoq9jRcQ4OJcwzDiH0R4YTKBWZSNsiZtfnY7g2k6c%2F4utR5Cv5Y4ArenqgeqaclKtndDBU6sksTo%2BmkLMYlAo6ZIqm1Qpt1DusQ77ALD8uyZ0ML%2Bb3mgn7ThfotutUZ5RdCbQkJ7gW4aGOzhvrZN3dinJwX%2FeiiN7yNeuvI7fk%2BopJmCkf9S1HTf4F2z9E0nQ%2BZuVJ1xd5e1i8WdOEDmHBaEAEVwZCzA%2FLNqhOkBJAu4%2FHxId%2Bgdp3bwX279KPAGbqoILhWO8Eq3mjzZf9k%2Fr7q6pXWXtfNiOUosraGSFrl2uY91kfmLWtEpGdHYOcrUeB5iEyvVorBjXCtCM%2FPAjKc5Y3MXlgAA8uRQGjKPjQX0sKy38Mfuo8CjNvOA8hTdOIqtX18CAetyWR5joVKcqB4ZE4h1p5625eN54KheQ8XPtJk2WxHHd%2Ba7vXHUwG8cHD9BX8XLuXnbZSgLzW2Z1CC9PvKOPdoPXEmBeEqnnqgb59Apr66yKqD%2BykE2H0Biqrt2bD5M5dzwz%2BGy3UaGpa%2BfZ02NfsXDrofxT3eHJPCZjwbcnFJXRJMrqBBD0Mn5a1L5udVVoRUPt0ryXMKySsb0GOqUBIblz2SIQEJ30LJjB6OlWKjQOI%2FWhSH3a6hYxr%2B4RdjR%2BIBjvz4DtsOM3ZoXgzWfHsmYpGN31I8FhaLna97qTdnY6i0bo07sEckVoJTwuhmYMP0LZETwjplSvch4EoVEBN92okoQisEV41hZkeZHORXGAKU3AXeK4qMLSs3pf5abV48%2BS085%2FIk8%2BVlyhF48Rp4nptICik9vrZ1rSrJmqYWz2jXwy&X-Amz-Signature=8d1d545fcda1b0d02a7efd896375f54905b487635d45eb2b4f3252debbe1f7df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR23SBKD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEIHiGFyiJH90i3wOUBki6JKO%2F0heRCr1Vgt%2B3%2BTT2uAiEArAXzeO3WQW7oJ0aywl8StLe2zbFUIsI9OjHaq9vRHVUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jh1erNgByQxPBECrcA34Itt1q4r1Lj1HY3QkylE8XWAC6Gb7Sive%2FqH2hvvyWoq9jRcQ4OJcwzDiH0R4YTKBWZSNsiZtfnY7g2k6c%2F4utR5Cv5Y4ArenqgeqaclKtndDBU6sksTo%2BmkLMYlAo6ZIqm1Qpt1DusQ77ALD8uyZ0ML%2Bb3mgn7ThfotutUZ5RdCbQkJ7gW4aGOzhvrZN3dinJwX%2FeiiN7yNeuvI7fk%2BopJmCkf9S1HTf4F2z9E0nQ%2BZuVJ1xd5e1i8WdOEDmHBaEAEVwZCzA%2FLNqhOkBJAu4%2FHxId%2Bgdp3bwX279KPAGbqoILhWO8Eq3mjzZf9k%2Fr7q6pXWXtfNiOUosraGSFrl2uY91kfmLWtEpGdHYOcrUeB5iEyvVorBjXCtCM%2FPAjKc5Y3MXlgAA8uRQGjKPjQX0sKy38Mfuo8CjNvOA8hTdOIqtX18CAetyWR5joVKcqB4ZE4h1p5625eN54KheQ8XPtJk2WxHHd%2Ba7vXHUwG8cHD9BX8XLuXnbZSgLzW2Z1CC9PvKOPdoPXEmBeEqnnqgb59Apr66yKqD%2BykE2H0Biqrt2bD5M5dzwz%2BGy3UaGpa%2BfZ02NfsXDrofxT3eHJPCZjwbcnFJXRJMrqBBD0Mn5a1L5udVVoRUPt0ryXMKySsb0GOqUBIblz2SIQEJ30LJjB6OlWKjQOI%2FWhSH3a6hYxr%2B4RdjR%2BIBjvz4DtsOM3ZoXgzWfHsmYpGN31I8FhaLna97qTdnY6i0bo07sEckVoJTwuhmYMP0LZETwjplSvch4EoVEBN92okoQisEV41hZkeZHORXGAKU3AXeK4qMLSs3pf5abV48%2BS085%2FIk8%2BVlyhF48Rp4nptICik9vrZ1rSrJmqYWz2jXwy&X-Amz-Signature=203f463930b800e80d1ae2b5ea7b0ad1edbf32c2a029eb4ff31e4759cb5fe658&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR23SBKD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEIHiGFyiJH90i3wOUBki6JKO%2F0heRCr1Vgt%2B3%2BTT2uAiEArAXzeO3WQW7oJ0aywl8StLe2zbFUIsI9OjHaq9vRHVUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jh1erNgByQxPBECrcA34Itt1q4r1Lj1HY3QkylE8XWAC6Gb7Sive%2FqH2hvvyWoq9jRcQ4OJcwzDiH0R4YTKBWZSNsiZtfnY7g2k6c%2F4utR5Cv5Y4ArenqgeqaclKtndDBU6sksTo%2BmkLMYlAo6ZIqm1Qpt1DusQ77ALD8uyZ0ML%2Bb3mgn7ThfotutUZ5RdCbQkJ7gW4aGOzhvrZN3dinJwX%2FeiiN7yNeuvI7fk%2BopJmCkf9S1HTf4F2z9E0nQ%2BZuVJ1xd5e1i8WdOEDmHBaEAEVwZCzA%2FLNqhOkBJAu4%2FHxId%2Bgdp3bwX279KPAGbqoILhWO8Eq3mjzZf9k%2Fr7q6pXWXtfNiOUosraGSFrl2uY91kfmLWtEpGdHYOcrUeB5iEyvVorBjXCtCM%2FPAjKc5Y3MXlgAA8uRQGjKPjQX0sKy38Mfuo8CjNvOA8hTdOIqtX18CAetyWR5joVKcqB4ZE4h1p5625eN54KheQ8XPtJk2WxHHd%2Ba7vXHUwG8cHD9BX8XLuXnbZSgLzW2Z1CC9PvKOPdoPXEmBeEqnnqgb59Apr66yKqD%2BykE2H0Biqrt2bD5M5dzwz%2BGy3UaGpa%2BfZ02NfsXDrofxT3eHJPCZjwbcnFJXRJMrqBBD0Mn5a1L5udVVoRUPt0ryXMKySsb0GOqUBIblz2SIQEJ30LJjB6OlWKjQOI%2FWhSH3a6hYxr%2B4RdjR%2BIBjvz4DtsOM3ZoXgzWfHsmYpGN31I8FhaLna97qTdnY6i0bo07sEckVoJTwuhmYMP0LZETwjplSvch4EoVEBN92okoQisEV41hZkeZHORXGAKU3AXeK4qMLSs3pf5abV48%2BS085%2FIk8%2BVlyhF48Rp4nptICik9vrZ1rSrJmqYWz2jXwy&X-Amz-Signature=dbffb00afb3b8bf70134364f38ef95502a73d53ee45b532615fae0524c5080ce&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR23SBKD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEIHiGFyiJH90i3wOUBki6JKO%2F0heRCr1Vgt%2B3%2BTT2uAiEArAXzeO3WQW7oJ0aywl8StLe2zbFUIsI9OjHaq9vRHVUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jh1erNgByQxPBECrcA34Itt1q4r1Lj1HY3QkylE8XWAC6Gb7Sive%2FqH2hvvyWoq9jRcQ4OJcwzDiH0R4YTKBWZSNsiZtfnY7g2k6c%2F4utR5Cv5Y4ArenqgeqaclKtndDBU6sksTo%2BmkLMYlAo6ZIqm1Qpt1DusQ77ALD8uyZ0ML%2Bb3mgn7ThfotutUZ5RdCbQkJ7gW4aGOzhvrZN3dinJwX%2FeiiN7yNeuvI7fk%2BopJmCkf9S1HTf4F2z9E0nQ%2BZuVJ1xd5e1i8WdOEDmHBaEAEVwZCzA%2FLNqhOkBJAu4%2FHxId%2Bgdp3bwX279KPAGbqoILhWO8Eq3mjzZf9k%2Fr7q6pXWXtfNiOUosraGSFrl2uY91kfmLWtEpGdHYOcrUeB5iEyvVorBjXCtCM%2FPAjKc5Y3MXlgAA8uRQGjKPjQX0sKy38Mfuo8CjNvOA8hTdOIqtX18CAetyWR5joVKcqB4ZE4h1p5625eN54KheQ8XPtJk2WxHHd%2Ba7vXHUwG8cHD9BX8XLuXnbZSgLzW2Z1CC9PvKOPdoPXEmBeEqnnqgb59Apr66yKqD%2BykE2H0Biqrt2bD5M5dzwz%2BGy3UaGpa%2BfZ02NfsXDrofxT3eHJPCZjwbcnFJXRJMrqBBD0Mn5a1L5udVVoRUPt0ryXMKySsb0GOqUBIblz2SIQEJ30LJjB6OlWKjQOI%2FWhSH3a6hYxr%2B4RdjR%2BIBjvz4DtsOM3ZoXgzWfHsmYpGN31I8FhaLna97qTdnY6i0bo07sEckVoJTwuhmYMP0LZETwjplSvch4EoVEBN92okoQisEV41hZkeZHORXGAKU3AXeK4qMLSs3pf5abV48%2BS085%2FIk8%2BVlyhF48Rp4nptICik9vrZ1rSrJmqYWz2jXwy&X-Amz-Signature=f4bbb1029962b29aa062bb71825264068119c9dac20ece18489d3ccf7388ae77&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR23SBKD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEIHiGFyiJH90i3wOUBki6JKO%2F0heRCr1Vgt%2B3%2BTT2uAiEArAXzeO3WQW7oJ0aywl8StLe2zbFUIsI9OjHaq9vRHVUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jh1erNgByQxPBECrcA34Itt1q4r1Lj1HY3QkylE8XWAC6Gb7Sive%2FqH2hvvyWoq9jRcQ4OJcwzDiH0R4YTKBWZSNsiZtfnY7g2k6c%2F4utR5Cv5Y4ArenqgeqaclKtndDBU6sksTo%2BmkLMYlAo6ZIqm1Qpt1DusQ77ALD8uyZ0ML%2Bb3mgn7ThfotutUZ5RdCbQkJ7gW4aGOzhvrZN3dinJwX%2FeiiN7yNeuvI7fk%2BopJmCkf9S1HTf4F2z9E0nQ%2BZuVJ1xd5e1i8WdOEDmHBaEAEVwZCzA%2FLNqhOkBJAu4%2FHxId%2Bgdp3bwX279KPAGbqoILhWO8Eq3mjzZf9k%2Fr7q6pXWXtfNiOUosraGSFrl2uY91kfmLWtEpGdHYOcrUeB5iEyvVorBjXCtCM%2FPAjKc5Y3MXlgAA8uRQGjKPjQX0sKy38Mfuo8CjNvOA8hTdOIqtX18CAetyWR5joVKcqB4ZE4h1p5625eN54KheQ8XPtJk2WxHHd%2Ba7vXHUwG8cHD9BX8XLuXnbZSgLzW2Z1CC9PvKOPdoPXEmBeEqnnqgb59Apr66yKqD%2BykE2H0Biqrt2bD5M5dzwz%2BGy3UaGpa%2BfZ02NfsXDrofxT3eHJPCZjwbcnFJXRJMrqBBD0Mn5a1L5udVVoRUPt0ryXMKySsb0GOqUBIblz2SIQEJ30LJjB6OlWKjQOI%2FWhSH3a6hYxr%2B4RdjR%2BIBjvz4DtsOM3ZoXgzWfHsmYpGN31I8FhaLna97qTdnY6i0bo07sEckVoJTwuhmYMP0LZETwjplSvch4EoVEBN92okoQisEV41hZkeZHORXGAKU3AXeK4qMLSs3pf5abV48%2BS085%2FIk8%2BVlyhF48Rp4nptICik9vrZ1rSrJmqYWz2jXwy&X-Amz-Signature=7df4db44b6e75ad4834667e2cb3957f208316004e25d3e152235fe82d44aefa1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR23SBKD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEIHiGFyiJH90i3wOUBki6JKO%2F0heRCr1Vgt%2B3%2BTT2uAiEArAXzeO3WQW7oJ0aywl8StLe2zbFUIsI9OjHaq9vRHVUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jh1erNgByQxPBECrcA34Itt1q4r1Lj1HY3QkylE8XWAC6Gb7Sive%2FqH2hvvyWoq9jRcQ4OJcwzDiH0R4YTKBWZSNsiZtfnY7g2k6c%2F4utR5Cv5Y4ArenqgeqaclKtndDBU6sksTo%2BmkLMYlAo6ZIqm1Qpt1DusQ77ALD8uyZ0ML%2Bb3mgn7ThfotutUZ5RdCbQkJ7gW4aGOzhvrZN3dinJwX%2FeiiN7yNeuvI7fk%2BopJmCkf9S1HTf4F2z9E0nQ%2BZuVJ1xd5e1i8WdOEDmHBaEAEVwZCzA%2FLNqhOkBJAu4%2FHxId%2Bgdp3bwX279KPAGbqoILhWO8Eq3mjzZf9k%2Fr7q6pXWXtfNiOUosraGSFrl2uY91kfmLWtEpGdHYOcrUeB5iEyvVorBjXCtCM%2FPAjKc5Y3MXlgAA8uRQGjKPjQX0sKy38Mfuo8CjNvOA8hTdOIqtX18CAetyWR5joVKcqB4ZE4h1p5625eN54KheQ8XPtJk2WxHHd%2Ba7vXHUwG8cHD9BX8XLuXnbZSgLzW2Z1CC9PvKOPdoPXEmBeEqnnqgb59Apr66yKqD%2BykE2H0Biqrt2bD5M5dzwz%2BGy3UaGpa%2BfZ02NfsXDrofxT3eHJPCZjwbcnFJXRJMrqBBD0Mn5a1L5udVVoRUPt0ryXMKySsb0GOqUBIblz2SIQEJ30LJjB6OlWKjQOI%2FWhSH3a6hYxr%2B4RdjR%2BIBjvz4DtsOM3ZoXgzWfHsmYpGN31I8FhaLna97qTdnY6i0bo07sEckVoJTwuhmYMP0LZETwjplSvch4EoVEBN92okoQisEV41hZkeZHORXGAKU3AXeK4qMLSs3pf5abV48%2BS085%2FIk8%2BVlyhF48Rp4nptICik9vrZ1rSrJmqYWz2jXwy&X-Amz-Signature=bd2aff95e99813f689856e7286a1ae45b18731dd914110ecdc122149a45693dc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR23SBKD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEIHiGFyiJH90i3wOUBki6JKO%2F0heRCr1Vgt%2B3%2BTT2uAiEArAXzeO3WQW7oJ0aywl8StLe2zbFUIsI9OjHaq9vRHVUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jh1erNgByQxPBECrcA34Itt1q4r1Lj1HY3QkylE8XWAC6Gb7Sive%2FqH2hvvyWoq9jRcQ4OJcwzDiH0R4YTKBWZSNsiZtfnY7g2k6c%2F4utR5Cv5Y4ArenqgeqaclKtndDBU6sksTo%2BmkLMYlAo6ZIqm1Qpt1DusQ77ALD8uyZ0ML%2Bb3mgn7ThfotutUZ5RdCbQkJ7gW4aGOzhvrZN3dinJwX%2FeiiN7yNeuvI7fk%2BopJmCkf9S1HTf4F2z9E0nQ%2BZuVJ1xd5e1i8WdOEDmHBaEAEVwZCzA%2FLNqhOkBJAu4%2FHxId%2Bgdp3bwX279KPAGbqoILhWO8Eq3mjzZf9k%2Fr7q6pXWXtfNiOUosraGSFrl2uY91kfmLWtEpGdHYOcrUeB5iEyvVorBjXCtCM%2FPAjKc5Y3MXlgAA8uRQGjKPjQX0sKy38Mfuo8CjNvOA8hTdOIqtX18CAetyWR5joVKcqB4ZE4h1p5625eN54KheQ8XPtJk2WxHHd%2Ba7vXHUwG8cHD9BX8XLuXnbZSgLzW2Z1CC9PvKOPdoPXEmBeEqnnqgb59Apr66yKqD%2BykE2H0Biqrt2bD5M5dzwz%2BGy3UaGpa%2BfZ02NfsXDrofxT3eHJPCZjwbcnFJXRJMrqBBD0Mn5a1L5udVVoRUPt0ryXMKySsb0GOqUBIblz2SIQEJ30LJjB6OlWKjQOI%2FWhSH3a6hYxr%2B4RdjR%2BIBjvz4DtsOM3ZoXgzWfHsmYpGN31I8FhaLna97qTdnY6i0bo07sEckVoJTwuhmYMP0LZETwjplSvch4EoVEBN92okoQisEV41hZkeZHORXGAKU3AXeK4qMLSs3pf5abV48%2BS085%2FIk8%2BVlyhF48Rp4nptICik9vrZ1rSrJmqYWz2jXwy&X-Amz-Signature=bdf6ef5ddb2942c05e2e1ddadb3571bd47f8044a2dc891f2297b1439585d7bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
