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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJWQXLPK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDsLdR68quZdsE9xYKZZ0tSInTOZRP1vSoKDqKvz5nbRQIhAMLgWHJcirfcCepemf1Yg8TbNWywPHtV0xDpCKCfapWhKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyHy%2B2jwxBGCQXp%2F0q3ANoLUODinmOhzEJUhrtOUj9QBDcVI0opt7CF7q%2FJp7bT0bG%2BoRdJnauHNzpi87D2fIQEp4%2FVL60yrtRJKJ9RYd3EBK4AixaM1WZevKQtsppZQy%2F6K5rRef39otHn%2BbKuVU1hYWiDbUzZBrpRH7XPOGij5tX0BI%2FD3swPdstTOW%2FEEJFRFHfqo0yKwoTSY6znGGWSxLB7oMgNjWeWIHDHNwNDscz6xLi82tiBhAYisvtojAQnL5Js3kW42ypyiHVBtjFpi7ReVfAwDt4x7mpiIQPMfQv9tedSezqyEbj7F88XaqHOk6stuhs8Yj4eqLG5l8%2Ba98mXaFJnhmbgo2thQPKJdOM77ewZT6pONIFzzyx2nwyHBPFoVw7SQjW6RphcIofNJT1pwLKlXZB4X9%2BN4bdeLiWpzgwuTvPKRlCLzUcOvZuFpzn%2BKC7ZvCaPXhXeuVGvODcdAMkmhpeGuGuoMeD6uOygqe%2FYN7B8z9p3k6tb9CPuQRGqUQK1pOXnknJGw91RmPQARVSde7ShPPJ4CJfZaCe%2FAnFdHAEEJzHCtZxPbEW5L5l9h0gbmwIZczR92bJkFfKD4Rc%2FTExpSgOiTZfIADsdPOFwJjwP%2FwuWGde5WHtJk4dOKpm58M9vDDgxMjABjqkAQXHnLn%2FRi1VaI9rEZQAM6E9XLxOf3ipAdgSfBk4Vi%2FbdEg7pljsv4YYJYrlx7pgRP73wNrKE40Eyq4s6FxuZoTbTVfTRJyi%2BHak1anLsIKJOwu31ur403mMgBIhjg2%2FYjHFeH%2BdXj5r0TioB%2FjgfTDGEyM3FrYJ93SdfrYsmJMuy2pITrTL9xowCcqYZdO0TdyZs7poKCE3jAwYCwBsjmXYPfHt&X-Amz-Signature=d37fe9d7ef657bf6ebb28b54ac58e8ab82b50a08e70da10fb0145b5d88b9df7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJWQXLPK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDsLdR68quZdsE9xYKZZ0tSInTOZRP1vSoKDqKvz5nbRQIhAMLgWHJcirfcCepemf1Yg8TbNWywPHtV0xDpCKCfapWhKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyHy%2B2jwxBGCQXp%2F0q3ANoLUODinmOhzEJUhrtOUj9QBDcVI0opt7CF7q%2FJp7bT0bG%2BoRdJnauHNzpi87D2fIQEp4%2FVL60yrtRJKJ9RYd3EBK4AixaM1WZevKQtsppZQy%2F6K5rRef39otHn%2BbKuVU1hYWiDbUzZBrpRH7XPOGij5tX0BI%2FD3swPdstTOW%2FEEJFRFHfqo0yKwoTSY6znGGWSxLB7oMgNjWeWIHDHNwNDscz6xLi82tiBhAYisvtojAQnL5Js3kW42ypyiHVBtjFpi7ReVfAwDt4x7mpiIQPMfQv9tedSezqyEbj7F88XaqHOk6stuhs8Yj4eqLG5l8%2Ba98mXaFJnhmbgo2thQPKJdOM77ewZT6pONIFzzyx2nwyHBPFoVw7SQjW6RphcIofNJT1pwLKlXZB4X9%2BN4bdeLiWpzgwuTvPKRlCLzUcOvZuFpzn%2BKC7ZvCaPXhXeuVGvODcdAMkmhpeGuGuoMeD6uOygqe%2FYN7B8z9p3k6tb9CPuQRGqUQK1pOXnknJGw91RmPQARVSde7ShPPJ4CJfZaCe%2FAnFdHAEEJzHCtZxPbEW5L5l9h0gbmwIZczR92bJkFfKD4Rc%2FTExpSgOiTZfIADsdPOFwJjwP%2FwuWGde5WHtJk4dOKpm58M9vDDgxMjABjqkAQXHnLn%2FRi1VaI9rEZQAM6E9XLxOf3ipAdgSfBk4Vi%2FbdEg7pljsv4YYJYrlx7pgRP73wNrKE40Eyq4s6FxuZoTbTVfTRJyi%2BHak1anLsIKJOwu31ur403mMgBIhjg2%2FYjHFeH%2BdXj5r0TioB%2FjgfTDGEyM3FrYJ93SdfrYsmJMuy2pITrTL9xowCcqYZdO0TdyZs7poKCE3jAwYCwBsjmXYPfHt&X-Amz-Signature=4ddcd2af290d699d613647e669c8cc0631e73254a89a213ca3a7889b8004bfc5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJWQXLPK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDsLdR68quZdsE9xYKZZ0tSInTOZRP1vSoKDqKvz5nbRQIhAMLgWHJcirfcCepemf1Yg8TbNWywPHtV0xDpCKCfapWhKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyHy%2B2jwxBGCQXp%2F0q3ANoLUODinmOhzEJUhrtOUj9QBDcVI0opt7CF7q%2FJp7bT0bG%2BoRdJnauHNzpi87D2fIQEp4%2FVL60yrtRJKJ9RYd3EBK4AixaM1WZevKQtsppZQy%2F6K5rRef39otHn%2BbKuVU1hYWiDbUzZBrpRH7XPOGij5tX0BI%2FD3swPdstTOW%2FEEJFRFHfqo0yKwoTSY6znGGWSxLB7oMgNjWeWIHDHNwNDscz6xLi82tiBhAYisvtojAQnL5Js3kW42ypyiHVBtjFpi7ReVfAwDt4x7mpiIQPMfQv9tedSezqyEbj7F88XaqHOk6stuhs8Yj4eqLG5l8%2Ba98mXaFJnhmbgo2thQPKJdOM77ewZT6pONIFzzyx2nwyHBPFoVw7SQjW6RphcIofNJT1pwLKlXZB4X9%2BN4bdeLiWpzgwuTvPKRlCLzUcOvZuFpzn%2BKC7ZvCaPXhXeuVGvODcdAMkmhpeGuGuoMeD6uOygqe%2FYN7B8z9p3k6tb9CPuQRGqUQK1pOXnknJGw91RmPQARVSde7ShPPJ4CJfZaCe%2FAnFdHAEEJzHCtZxPbEW5L5l9h0gbmwIZczR92bJkFfKD4Rc%2FTExpSgOiTZfIADsdPOFwJjwP%2FwuWGde5WHtJk4dOKpm58M9vDDgxMjABjqkAQXHnLn%2FRi1VaI9rEZQAM6E9XLxOf3ipAdgSfBk4Vi%2FbdEg7pljsv4YYJYrlx7pgRP73wNrKE40Eyq4s6FxuZoTbTVfTRJyi%2BHak1anLsIKJOwu31ur403mMgBIhjg2%2FYjHFeH%2BdXj5r0TioB%2FjgfTDGEyM3FrYJ93SdfrYsmJMuy2pITrTL9xowCcqYZdO0TdyZs7poKCE3jAwYCwBsjmXYPfHt&X-Amz-Signature=1ff92633f9209053b2fa19412c77bbe03c6ef0d5347d77f5e200fdfaa8be0ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJWQXLPK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDsLdR68quZdsE9xYKZZ0tSInTOZRP1vSoKDqKvz5nbRQIhAMLgWHJcirfcCepemf1Yg8TbNWywPHtV0xDpCKCfapWhKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyHy%2B2jwxBGCQXp%2F0q3ANoLUODinmOhzEJUhrtOUj9QBDcVI0opt7CF7q%2FJp7bT0bG%2BoRdJnauHNzpi87D2fIQEp4%2FVL60yrtRJKJ9RYd3EBK4AixaM1WZevKQtsppZQy%2F6K5rRef39otHn%2BbKuVU1hYWiDbUzZBrpRH7XPOGij5tX0BI%2FD3swPdstTOW%2FEEJFRFHfqo0yKwoTSY6znGGWSxLB7oMgNjWeWIHDHNwNDscz6xLi82tiBhAYisvtojAQnL5Js3kW42ypyiHVBtjFpi7ReVfAwDt4x7mpiIQPMfQv9tedSezqyEbj7F88XaqHOk6stuhs8Yj4eqLG5l8%2Ba98mXaFJnhmbgo2thQPKJdOM77ewZT6pONIFzzyx2nwyHBPFoVw7SQjW6RphcIofNJT1pwLKlXZB4X9%2BN4bdeLiWpzgwuTvPKRlCLzUcOvZuFpzn%2BKC7ZvCaPXhXeuVGvODcdAMkmhpeGuGuoMeD6uOygqe%2FYN7B8z9p3k6tb9CPuQRGqUQK1pOXnknJGw91RmPQARVSde7ShPPJ4CJfZaCe%2FAnFdHAEEJzHCtZxPbEW5L5l9h0gbmwIZczR92bJkFfKD4Rc%2FTExpSgOiTZfIADsdPOFwJjwP%2FwuWGde5WHtJk4dOKpm58M9vDDgxMjABjqkAQXHnLn%2FRi1VaI9rEZQAM6E9XLxOf3ipAdgSfBk4Vi%2FbdEg7pljsv4YYJYrlx7pgRP73wNrKE40Eyq4s6FxuZoTbTVfTRJyi%2BHak1anLsIKJOwu31ur403mMgBIhjg2%2FYjHFeH%2BdXj5r0TioB%2FjgfTDGEyM3FrYJ93SdfrYsmJMuy2pITrTL9xowCcqYZdO0TdyZs7poKCE3jAwYCwBsjmXYPfHt&X-Amz-Signature=323ba341b68c50ab6ff1604d44e55e12370c29cf8c8e27aefcda7320ce64479c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJWQXLPK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDsLdR68quZdsE9xYKZZ0tSInTOZRP1vSoKDqKvz5nbRQIhAMLgWHJcirfcCepemf1Yg8TbNWywPHtV0xDpCKCfapWhKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyHy%2B2jwxBGCQXp%2F0q3ANoLUODinmOhzEJUhrtOUj9QBDcVI0opt7CF7q%2FJp7bT0bG%2BoRdJnauHNzpi87D2fIQEp4%2FVL60yrtRJKJ9RYd3EBK4AixaM1WZevKQtsppZQy%2F6K5rRef39otHn%2BbKuVU1hYWiDbUzZBrpRH7XPOGij5tX0BI%2FD3swPdstTOW%2FEEJFRFHfqo0yKwoTSY6znGGWSxLB7oMgNjWeWIHDHNwNDscz6xLi82tiBhAYisvtojAQnL5Js3kW42ypyiHVBtjFpi7ReVfAwDt4x7mpiIQPMfQv9tedSezqyEbj7F88XaqHOk6stuhs8Yj4eqLG5l8%2Ba98mXaFJnhmbgo2thQPKJdOM77ewZT6pONIFzzyx2nwyHBPFoVw7SQjW6RphcIofNJT1pwLKlXZB4X9%2BN4bdeLiWpzgwuTvPKRlCLzUcOvZuFpzn%2BKC7ZvCaPXhXeuVGvODcdAMkmhpeGuGuoMeD6uOygqe%2FYN7B8z9p3k6tb9CPuQRGqUQK1pOXnknJGw91RmPQARVSde7ShPPJ4CJfZaCe%2FAnFdHAEEJzHCtZxPbEW5L5l9h0gbmwIZczR92bJkFfKD4Rc%2FTExpSgOiTZfIADsdPOFwJjwP%2FwuWGde5WHtJk4dOKpm58M9vDDgxMjABjqkAQXHnLn%2FRi1VaI9rEZQAM6E9XLxOf3ipAdgSfBk4Vi%2FbdEg7pljsv4YYJYrlx7pgRP73wNrKE40Eyq4s6FxuZoTbTVfTRJyi%2BHak1anLsIKJOwu31ur403mMgBIhjg2%2FYjHFeH%2BdXj5r0TioB%2FjgfTDGEyM3FrYJ93SdfrYsmJMuy2pITrTL9xowCcqYZdO0TdyZs7poKCE3jAwYCwBsjmXYPfHt&X-Amz-Signature=66f5c6fe39b55b68dc7e93f69712d6ba5f77c1b1c86506b6d9e8ac4aca587bee&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJWQXLPK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDsLdR68quZdsE9xYKZZ0tSInTOZRP1vSoKDqKvz5nbRQIhAMLgWHJcirfcCepemf1Yg8TbNWywPHtV0xDpCKCfapWhKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyHy%2B2jwxBGCQXp%2F0q3ANoLUODinmOhzEJUhrtOUj9QBDcVI0opt7CF7q%2FJp7bT0bG%2BoRdJnauHNzpi87D2fIQEp4%2FVL60yrtRJKJ9RYd3EBK4AixaM1WZevKQtsppZQy%2F6K5rRef39otHn%2BbKuVU1hYWiDbUzZBrpRH7XPOGij5tX0BI%2FD3swPdstTOW%2FEEJFRFHfqo0yKwoTSY6znGGWSxLB7oMgNjWeWIHDHNwNDscz6xLi82tiBhAYisvtojAQnL5Js3kW42ypyiHVBtjFpi7ReVfAwDt4x7mpiIQPMfQv9tedSezqyEbj7F88XaqHOk6stuhs8Yj4eqLG5l8%2Ba98mXaFJnhmbgo2thQPKJdOM77ewZT6pONIFzzyx2nwyHBPFoVw7SQjW6RphcIofNJT1pwLKlXZB4X9%2BN4bdeLiWpzgwuTvPKRlCLzUcOvZuFpzn%2BKC7ZvCaPXhXeuVGvODcdAMkmhpeGuGuoMeD6uOygqe%2FYN7B8z9p3k6tb9CPuQRGqUQK1pOXnknJGw91RmPQARVSde7ShPPJ4CJfZaCe%2FAnFdHAEEJzHCtZxPbEW5L5l9h0gbmwIZczR92bJkFfKD4Rc%2FTExpSgOiTZfIADsdPOFwJjwP%2FwuWGde5WHtJk4dOKpm58M9vDDgxMjABjqkAQXHnLn%2FRi1VaI9rEZQAM6E9XLxOf3ipAdgSfBk4Vi%2FbdEg7pljsv4YYJYrlx7pgRP73wNrKE40Eyq4s6FxuZoTbTVfTRJyi%2BHak1anLsIKJOwu31ur403mMgBIhjg2%2FYjHFeH%2BdXj5r0TioB%2FjgfTDGEyM3FrYJ93SdfrYsmJMuy2pITrTL9xowCcqYZdO0TdyZs7poKCE3jAwYCwBsjmXYPfHt&X-Amz-Signature=a67814000771833126175806182cdc05f1ef9c6e7bd217a4da58df96b6fc00c7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJWQXLPK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDsLdR68quZdsE9xYKZZ0tSInTOZRP1vSoKDqKvz5nbRQIhAMLgWHJcirfcCepemf1Yg8TbNWywPHtV0xDpCKCfapWhKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyHy%2B2jwxBGCQXp%2F0q3ANoLUODinmOhzEJUhrtOUj9QBDcVI0opt7CF7q%2FJp7bT0bG%2BoRdJnauHNzpi87D2fIQEp4%2FVL60yrtRJKJ9RYd3EBK4AixaM1WZevKQtsppZQy%2F6K5rRef39otHn%2BbKuVU1hYWiDbUzZBrpRH7XPOGij5tX0BI%2FD3swPdstTOW%2FEEJFRFHfqo0yKwoTSY6znGGWSxLB7oMgNjWeWIHDHNwNDscz6xLi82tiBhAYisvtojAQnL5Js3kW42ypyiHVBtjFpi7ReVfAwDt4x7mpiIQPMfQv9tedSezqyEbj7F88XaqHOk6stuhs8Yj4eqLG5l8%2Ba98mXaFJnhmbgo2thQPKJdOM77ewZT6pONIFzzyx2nwyHBPFoVw7SQjW6RphcIofNJT1pwLKlXZB4X9%2BN4bdeLiWpzgwuTvPKRlCLzUcOvZuFpzn%2BKC7ZvCaPXhXeuVGvODcdAMkmhpeGuGuoMeD6uOygqe%2FYN7B8z9p3k6tb9CPuQRGqUQK1pOXnknJGw91RmPQARVSde7ShPPJ4CJfZaCe%2FAnFdHAEEJzHCtZxPbEW5L5l9h0gbmwIZczR92bJkFfKD4Rc%2FTExpSgOiTZfIADsdPOFwJjwP%2FwuWGde5WHtJk4dOKpm58M9vDDgxMjABjqkAQXHnLn%2FRi1VaI9rEZQAM6E9XLxOf3ipAdgSfBk4Vi%2FbdEg7pljsv4YYJYrlx7pgRP73wNrKE40Eyq4s6FxuZoTbTVfTRJyi%2BHak1anLsIKJOwu31ur403mMgBIhjg2%2FYjHFeH%2BdXj5r0TioB%2FjgfTDGEyM3FrYJ93SdfrYsmJMuy2pITrTL9xowCcqYZdO0TdyZs7poKCE3jAwYCwBsjmXYPfHt&X-Amz-Signature=cc6d0ec22920e8ca03a8e284b97962765892395f8ae77b9c065da5dc3bb67fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
