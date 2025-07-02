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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5WFPVM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZS2eNlW6voJOZuMOA%2BNqhG6%2BNvRN3Zte0dDsEnW7%2FQIhAOPd%2BzQwGkfssLm7%2BXVu9inQYeNCkhF65Ve0ICOnW6CgKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxczrglerxWl5%2BJBQwq3AOKcxl633H3EBp5tF4PrbmtXIUqpV613kdJlhdENkGea%2Bz9d27VkrPTmozmUp3XgdDiS6TW4zZGvShvisJUJuAVMX9j5w%2Fq8G0PYy2oLvE5UCT2sHEY%2FOPpRmJ3QavUPNAh1unKYIFjtcg%2FWvMilScMLiD%2FCsTx6eArDB7e92GPipjQ68kh0RlZSmABYt0uUE%2BQXQvyzGmvY7youTg7P1iB91awcu0cUquVTkXjSjLJ%2B37j1ktDwmHAlAJgXVweQ7niD6HQFH%2BKR105Pjhm0ARlnWJk9Xj8rq79qobUwAp6WVOdVxVK9JGzvppCPKjbicnt%2BlDsx2YOnZk2RtNY78ugIyE%2FdFCz3wq6%2Bi%2FeuGL34BKgjk6rAtlUqu0jKwSmXkrNC2936sHnOTziDVQFQ39RmXDjcNMxODjXEHbT%2BuD3mSe1rt29raZF3haHVZT0VfCcO5nkvCIdeNudmcceOd0auu8wEELjdBPBqtGD7NvXtc%2BxjJo0XL9QJIFlpuG3JhSBDgOUVuEgTDaUsc1xfANF8zM3BHgzqyeC0ZUY2HTong1yB9K88lnlYNW91yhEOBgCGWdTmFqDwZxeZi%2BDKjQ6%2B14yTpkaUgT13f7GQJxyIZcshVLRHs%2FVSIVdujCuk5XDBjqkAYCdQpE3a4ivQmiruF2spiEOHBDw0KUe3P1sIB9IS2Cwf1dBojIbo%2BdW3Wy1drpKfQuJwV29nxtq48%2FDTQr8WWwcoS%2B%2BA4XtIwkMY5JqTbBmMGNUBV%2BhCg87niHzPdI4waf5jfgBH1GaJ56ae3Zj%2BUFqcFMRg8lMwgjsWOESIL8XVoMFCTkVS2jvDlM0ui5VEdvw8Ov9mWmxtN%2BGc%2BB9etZnv0OF&X-Amz-Signature=bfb43d362e3422af6a29835d22a264e43cce0ee48890a2f129e3e1ec05700e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5WFPVM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZS2eNlW6voJOZuMOA%2BNqhG6%2BNvRN3Zte0dDsEnW7%2FQIhAOPd%2BzQwGkfssLm7%2BXVu9inQYeNCkhF65Ve0ICOnW6CgKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxczrglerxWl5%2BJBQwq3AOKcxl633H3EBp5tF4PrbmtXIUqpV613kdJlhdENkGea%2Bz9d27VkrPTmozmUp3XgdDiS6TW4zZGvShvisJUJuAVMX9j5w%2Fq8G0PYy2oLvE5UCT2sHEY%2FOPpRmJ3QavUPNAh1unKYIFjtcg%2FWvMilScMLiD%2FCsTx6eArDB7e92GPipjQ68kh0RlZSmABYt0uUE%2BQXQvyzGmvY7youTg7P1iB91awcu0cUquVTkXjSjLJ%2B37j1ktDwmHAlAJgXVweQ7niD6HQFH%2BKR105Pjhm0ARlnWJk9Xj8rq79qobUwAp6WVOdVxVK9JGzvppCPKjbicnt%2BlDsx2YOnZk2RtNY78ugIyE%2FdFCz3wq6%2Bi%2FeuGL34BKgjk6rAtlUqu0jKwSmXkrNC2936sHnOTziDVQFQ39RmXDjcNMxODjXEHbT%2BuD3mSe1rt29raZF3haHVZT0VfCcO5nkvCIdeNudmcceOd0auu8wEELjdBPBqtGD7NvXtc%2BxjJo0XL9QJIFlpuG3JhSBDgOUVuEgTDaUsc1xfANF8zM3BHgzqyeC0ZUY2HTong1yB9K88lnlYNW91yhEOBgCGWdTmFqDwZxeZi%2BDKjQ6%2B14yTpkaUgT13f7GQJxyIZcshVLRHs%2FVSIVdujCuk5XDBjqkAYCdQpE3a4ivQmiruF2spiEOHBDw0KUe3P1sIB9IS2Cwf1dBojIbo%2BdW3Wy1drpKfQuJwV29nxtq48%2FDTQr8WWwcoS%2B%2BA4XtIwkMY5JqTbBmMGNUBV%2BhCg87niHzPdI4waf5jfgBH1GaJ56ae3Zj%2BUFqcFMRg8lMwgjsWOESIL8XVoMFCTkVS2jvDlM0ui5VEdvw8Ov9mWmxtN%2BGc%2BB9etZnv0OF&X-Amz-Signature=4c09f7e85b1f65ead14beb42998a03d929e60fee57c64d72373d0f8b8ab7554e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5WFPVM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZS2eNlW6voJOZuMOA%2BNqhG6%2BNvRN3Zte0dDsEnW7%2FQIhAOPd%2BzQwGkfssLm7%2BXVu9inQYeNCkhF65Ve0ICOnW6CgKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxczrglerxWl5%2BJBQwq3AOKcxl633H3EBp5tF4PrbmtXIUqpV613kdJlhdENkGea%2Bz9d27VkrPTmozmUp3XgdDiS6TW4zZGvShvisJUJuAVMX9j5w%2Fq8G0PYy2oLvE5UCT2sHEY%2FOPpRmJ3QavUPNAh1unKYIFjtcg%2FWvMilScMLiD%2FCsTx6eArDB7e92GPipjQ68kh0RlZSmABYt0uUE%2BQXQvyzGmvY7youTg7P1iB91awcu0cUquVTkXjSjLJ%2B37j1ktDwmHAlAJgXVweQ7niD6HQFH%2BKR105Pjhm0ARlnWJk9Xj8rq79qobUwAp6WVOdVxVK9JGzvppCPKjbicnt%2BlDsx2YOnZk2RtNY78ugIyE%2FdFCz3wq6%2Bi%2FeuGL34BKgjk6rAtlUqu0jKwSmXkrNC2936sHnOTziDVQFQ39RmXDjcNMxODjXEHbT%2BuD3mSe1rt29raZF3haHVZT0VfCcO5nkvCIdeNudmcceOd0auu8wEELjdBPBqtGD7NvXtc%2BxjJo0XL9QJIFlpuG3JhSBDgOUVuEgTDaUsc1xfANF8zM3BHgzqyeC0ZUY2HTong1yB9K88lnlYNW91yhEOBgCGWdTmFqDwZxeZi%2BDKjQ6%2B14yTpkaUgT13f7GQJxyIZcshVLRHs%2FVSIVdujCuk5XDBjqkAYCdQpE3a4ivQmiruF2spiEOHBDw0KUe3P1sIB9IS2Cwf1dBojIbo%2BdW3Wy1drpKfQuJwV29nxtq48%2FDTQr8WWwcoS%2B%2BA4XtIwkMY5JqTbBmMGNUBV%2BhCg87niHzPdI4waf5jfgBH1GaJ56ae3Zj%2BUFqcFMRg8lMwgjsWOESIL8XVoMFCTkVS2jvDlM0ui5VEdvw8Ov9mWmxtN%2BGc%2BB9etZnv0OF&X-Amz-Signature=89a452656d209b31fc5cddab45b3a2a2306fe0009f56a0a4b1379aaf9a7b1a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5WFPVM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZS2eNlW6voJOZuMOA%2BNqhG6%2BNvRN3Zte0dDsEnW7%2FQIhAOPd%2BzQwGkfssLm7%2BXVu9inQYeNCkhF65Ve0ICOnW6CgKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxczrglerxWl5%2BJBQwq3AOKcxl633H3EBp5tF4PrbmtXIUqpV613kdJlhdENkGea%2Bz9d27VkrPTmozmUp3XgdDiS6TW4zZGvShvisJUJuAVMX9j5w%2Fq8G0PYy2oLvE5UCT2sHEY%2FOPpRmJ3QavUPNAh1unKYIFjtcg%2FWvMilScMLiD%2FCsTx6eArDB7e92GPipjQ68kh0RlZSmABYt0uUE%2BQXQvyzGmvY7youTg7P1iB91awcu0cUquVTkXjSjLJ%2B37j1ktDwmHAlAJgXVweQ7niD6HQFH%2BKR105Pjhm0ARlnWJk9Xj8rq79qobUwAp6WVOdVxVK9JGzvppCPKjbicnt%2BlDsx2YOnZk2RtNY78ugIyE%2FdFCz3wq6%2Bi%2FeuGL34BKgjk6rAtlUqu0jKwSmXkrNC2936sHnOTziDVQFQ39RmXDjcNMxODjXEHbT%2BuD3mSe1rt29raZF3haHVZT0VfCcO5nkvCIdeNudmcceOd0auu8wEELjdBPBqtGD7NvXtc%2BxjJo0XL9QJIFlpuG3JhSBDgOUVuEgTDaUsc1xfANF8zM3BHgzqyeC0ZUY2HTong1yB9K88lnlYNW91yhEOBgCGWdTmFqDwZxeZi%2BDKjQ6%2B14yTpkaUgT13f7GQJxyIZcshVLRHs%2FVSIVdujCuk5XDBjqkAYCdQpE3a4ivQmiruF2spiEOHBDw0KUe3P1sIB9IS2Cwf1dBojIbo%2BdW3Wy1drpKfQuJwV29nxtq48%2FDTQr8WWwcoS%2B%2BA4XtIwkMY5JqTbBmMGNUBV%2BhCg87niHzPdI4waf5jfgBH1GaJ56ae3Zj%2BUFqcFMRg8lMwgjsWOESIL8XVoMFCTkVS2jvDlM0ui5VEdvw8Ov9mWmxtN%2BGc%2BB9etZnv0OF&X-Amz-Signature=6ef0c7a740185075b9629ee26ef9b832d2d40acbc3cfec81dca7168dbed2139f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5WFPVM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZS2eNlW6voJOZuMOA%2BNqhG6%2BNvRN3Zte0dDsEnW7%2FQIhAOPd%2BzQwGkfssLm7%2BXVu9inQYeNCkhF65Ve0ICOnW6CgKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxczrglerxWl5%2BJBQwq3AOKcxl633H3EBp5tF4PrbmtXIUqpV613kdJlhdENkGea%2Bz9d27VkrPTmozmUp3XgdDiS6TW4zZGvShvisJUJuAVMX9j5w%2Fq8G0PYy2oLvE5UCT2sHEY%2FOPpRmJ3QavUPNAh1unKYIFjtcg%2FWvMilScMLiD%2FCsTx6eArDB7e92GPipjQ68kh0RlZSmABYt0uUE%2BQXQvyzGmvY7youTg7P1iB91awcu0cUquVTkXjSjLJ%2B37j1ktDwmHAlAJgXVweQ7niD6HQFH%2BKR105Pjhm0ARlnWJk9Xj8rq79qobUwAp6WVOdVxVK9JGzvppCPKjbicnt%2BlDsx2YOnZk2RtNY78ugIyE%2FdFCz3wq6%2Bi%2FeuGL34BKgjk6rAtlUqu0jKwSmXkrNC2936sHnOTziDVQFQ39RmXDjcNMxODjXEHbT%2BuD3mSe1rt29raZF3haHVZT0VfCcO5nkvCIdeNudmcceOd0auu8wEELjdBPBqtGD7NvXtc%2BxjJo0XL9QJIFlpuG3JhSBDgOUVuEgTDaUsc1xfANF8zM3BHgzqyeC0ZUY2HTong1yB9K88lnlYNW91yhEOBgCGWdTmFqDwZxeZi%2BDKjQ6%2B14yTpkaUgT13f7GQJxyIZcshVLRHs%2FVSIVdujCuk5XDBjqkAYCdQpE3a4ivQmiruF2spiEOHBDw0KUe3P1sIB9IS2Cwf1dBojIbo%2BdW3Wy1drpKfQuJwV29nxtq48%2FDTQr8WWwcoS%2B%2BA4XtIwkMY5JqTbBmMGNUBV%2BhCg87niHzPdI4waf5jfgBH1GaJ56ae3Zj%2BUFqcFMRg8lMwgjsWOESIL8XVoMFCTkVS2jvDlM0ui5VEdvw8Ov9mWmxtN%2BGc%2BB9etZnv0OF&X-Amz-Signature=ebdf1852ead8ac29d62b6bb382ee70fa6361006e52d49707b5eab8a99eb85576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5WFPVM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZS2eNlW6voJOZuMOA%2BNqhG6%2BNvRN3Zte0dDsEnW7%2FQIhAOPd%2BzQwGkfssLm7%2BXVu9inQYeNCkhF65Ve0ICOnW6CgKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxczrglerxWl5%2BJBQwq3AOKcxl633H3EBp5tF4PrbmtXIUqpV613kdJlhdENkGea%2Bz9d27VkrPTmozmUp3XgdDiS6TW4zZGvShvisJUJuAVMX9j5w%2Fq8G0PYy2oLvE5UCT2sHEY%2FOPpRmJ3QavUPNAh1unKYIFjtcg%2FWvMilScMLiD%2FCsTx6eArDB7e92GPipjQ68kh0RlZSmABYt0uUE%2BQXQvyzGmvY7youTg7P1iB91awcu0cUquVTkXjSjLJ%2B37j1ktDwmHAlAJgXVweQ7niD6HQFH%2BKR105Pjhm0ARlnWJk9Xj8rq79qobUwAp6WVOdVxVK9JGzvppCPKjbicnt%2BlDsx2YOnZk2RtNY78ugIyE%2FdFCz3wq6%2Bi%2FeuGL34BKgjk6rAtlUqu0jKwSmXkrNC2936sHnOTziDVQFQ39RmXDjcNMxODjXEHbT%2BuD3mSe1rt29raZF3haHVZT0VfCcO5nkvCIdeNudmcceOd0auu8wEELjdBPBqtGD7NvXtc%2BxjJo0XL9QJIFlpuG3JhSBDgOUVuEgTDaUsc1xfANF8zM3BHgzqyeC0ZUY2HTong1yB9K88lnlYNW91yhEOBgCGWdTmFqDwZxeZi%2BDKjQ6%2B14yTpkaUgT13f7GQJxyIZcshVLRHs%2FVSIVdujCuk5XDBjqkAYCdQpE3a4ivQmiruF2spiEOHBDw0KUe3P1sIB9IS2Cwf1dBojIbo%2BdW3Wy1drpKfQuJwV29nxtq48%2FDTQr8WWwcoS%2B%2BA4XtIwkMY5JqTbBmMGNUBV%2BhCg87niHzPdI4waf5jfgBH1GaJ56ae3Zj%2BUFqcFMRg8lMwgjsWOESIL8XVoMFCTkVS2jvDlM0ui5VEdvw8Ov9mWmxtN%2BGc%2BB9etZnv0OF&X-Amz-Signature=d8301ffad8ab99505db9a3a2c9e58589caf91f9f8f71b1ef5ee419e40577cc53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5WFPVM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZS2eNlW6voJOZuMOA%2BNqhG6%2BNvRN3Zte0dDsEnW7%2FQIhAOPd%2BzQwGkfssLm7%2BXVu9inQYeNCkhF65Ve0ICOnW6CgKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxczrglerxWl5%2BJBQwq3AOKcxl633H3EBp5tF4PrbmtXIUqpV613kdJlhdENkGea%2Bz9d27VkrPTmozmUp3XgdDiS6TW4zZGvShvisJUJuAVMX9j5w%2Fq8G0PYy2oLvE5UCT2sHEY%2FOPpRmJ3QavUPNAh1unKYIFjtcg%2FWvMilScMLiD%2FCsTx6eArDB7e92GPipjQ68kh0RlZSmABYt0uUE%2BQXQvyzGmvY7youTg7P1iB91awcu0cUquVTkXjSjLJ%2B37j1ktDwmHAlAJgXVweQ7niD6HQFH%2BKR105Pjhm0ARlnWJk9Xj8rq79qobUwAp6WVOdVxVK9JGzvppCPKjbicnt%2BlDsx2YOnZk2RtNY78ugIyE%2FdFCz3wq6%2Bi%2FeuGL34BKgjk6rAtlUqu0jKwSmXkrNC2936sHnOTziDVQFQ39RmXDjcNMxODjXEHbT%2BuD3mSe1rt29raZF3haHVZT0VfCcO5nkvCIdeNudmcceOd0auu8wEELjdBPBqtGD7NvXtc%2BxjJo0XL9QJIFlpuG3JhSBDgOUVuEgTDaUsc1xfANF8zM3BHgzqyeC0ZUY2HTong1yB9K88lnlYNW91yhEOBgCGWdTmFqDwZxeZi%2BDKjQ6%2B14yTpkaUgT13f7GQJxyIZcshVLRHs%2FVSIVdujCuk5XDBjqkAYCdQpE3a4ivQmiruF2spiEOHBDw0KUe3P1sIB9IS2Cwf1dBojIbo%2BdW3Wy1drpKfQuJwV29nxtq48%2FDTQr8WWwcoS%2B%2BA4XtIwkMY5JqTbBmMGNUBV%2BhCg87niHzPdI4waf5jfgBH1GaJ56ae3Zj%2BUFqcFMRg8lMwgjsWOESIL8XVoMFCTkVS2jvDlM0ui5VEdvw8Ov9mWmxtN%2BGc%2BB9etZnv0OF&X-Amz-Signature=ca12f3bbdaaa93d5ce60545a6189a7645ae71e08092930a331e0f62d694eae3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
