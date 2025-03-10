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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4R4LSWH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCXTxCZMF08NtAs%2FMMlUwXSQI06c%2B%2FtCWtxdRK%2FgpI3igIgPAA9kvxFLsYJg5JZcjautieW0qhMCT2T20i5udNCzFUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmKxgZloonf8CnY9yrcA2gQ2d7E1ozGI7ZZ%2BkwizIa2D2%2B40D%2FNw0qsc1MufiGloOa1cpuOft4hr4IxheyHqhWKpQ998dt5hQshEihJAv3XGUyHMB9ntCS3rwwZmz3St0hL%2F0Xs%2BnWmKlzIcreZ958rL94qtwsW7Q%2BofZvi5dxaQC4kBqmB9o19xalbsKYj2TahQR7LT4xP2WX7Vo9BA%2BzSDXBL0AJomD3o4LIbz96yuccKClPvuryHmX7dJc8068TLj1LommkTljuDb1Oa1my90dASG8ZiyLdBkVd4x9cgv9nfo%2B2d7WchVBxxKwgDHuc46xzQZVqFASchfV9W9K4c6v9R0nWvayjcJ4pS4oNBFbwBkh9jLd84PRCV5EwnR%2F61V%2F0g1y%2BxBYxPQH0thbpMg1Az%2BUBpwQRXf5kue5pxuiMNaN0Vvks5fl0vPKl6k7eOPcUygfkE69vXGOnrWV68IBiPorP%2FY26V3tIFV5f3R%2FNjvcrxz%2BjMjroKQWnwdMvZ3wIJszeScgnMeUf5kK5PINA5wsDuNNu32iVFNsqKGAFZbTiVjGCziKywXN8nu0SD%2B29WhDC2%2BmLl4DGKZOQc%2BlG3T5VUTneSQ5uIM%2Bdx6KhAo4g9h%2BcyPzkX4Kx3XZqEpxrPlH1LC26GMPqJur4GOqUBBV8L7r36fyWlw%2FRBMeWk9N1fXjbsq2CR28cseJDqUQBqsniP%2FryvkKGHrwcswrtXlDhiWzCBw7K06Q5Tei%2FZoaobkFc8vHiPgeqMd8Eubem0W%2FAIWey5hhglVKCHZyUZHC5Xt2VW0974J7cPhYQaINBEC%2FTRGdNSWyNQyW44ekBva62lu5bxPAo039tjgMMT4Wxo5Ccm6%2FQ2j%2FCzsssOTDwNCSTW&X-Amz-Signature=6ba025d7e1b93317862a82c78cccc66f24056ebcb8769434f0d676902cd9d711&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4R4LSWH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCXTxCZMF08NtAs%2FMMlUwXSQI06c%2B%2FtCWtxdRK%2FgpI3igIgPAA9kvxFLsYJg5JZcjautieW0qhMCT2T20i5udNCzFUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmKxgZloonf8CnY9yrcA2gQ2d7E1ozGI7ZZ%2BkwizIa2D2%2B40D%2FNw0qsc1MufiGloOa1cpuOft4hr4IxheyHqhWKpQ998dt5hQshEihJAv3XGUyHMB9ntCS3rwwZmz3St0hL%2F0Xs%2BnWmKlzIcreZ958rL94qtwsW7Q%2BofZvi5dxaQC4kBqmB9o19xalbsKYj2TahQR7LT4xP2WX7Vo9BA%2BzSDXBL0AJomD3o4LIbz96yuccKClPvuryHmX7dJc8068TLj1LommkTljuDb1Oa1my90dASG8ZiyLdBkVd4x9cgv9nfo%2B2d7WchVBxxKwgDHuc46xzQZVqFASchfV9W9K4c6v9R0nWvayjcJ4pS4oNBFbwBkh9jLd84PRCV5EwnR%2F61V%2F0g1y%2BxBYxPQH0thbpMg1Az%2BUBpwQRXf5kue5pxuiMNaN0Vvks5fl0vPKl6k7eOPcUygfkE69vXGOnrWV68IBiPorP%2FY26V3tIFV5f3R%2FNjvcrxz%2BjMjroKQWnwdMvZ3wIJszeScgnMeUf5kK5PINA5wsDuNNu32iVFNsqKGAFZbTiVjGCziKywXN8nu0SD%2B29WhDC2%2BmLl4DGKZOQc%2BlG3T5VUTneSQ5uIM%2Bdx6KhAo4g9h%2BcyPzkX4Kx3XZqEpxrPlH1LC26GMPqJur4GOqUBBV8L7r36fyWlw%2FRBMeWk9N1fXjbsq2CR28cseJDqUQBqsniP%2FryvkKGHrwcswrtXlDhiWzCBw7K06Q5Tei%2FZoaobkFc8vHiPgeqMd8Eubem0W%2FAIWey5hhglVKCHZyUZHC5Xt2VW0974J7cPhYQaINBEC%2FTRGdNSWyNQyW44ekBva62lu5bxPAo039tjgMMT4Wxo5Ccm6%2FQ2j%2FCzsssOTDwNCSTW&X-Amz-Signature=04201667809177cdea87d645c71307bd265a949ea71c55650eefd7cbc74d13a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4R4LSWH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCXTxCZMF08NtAs%2FMMlUwXSQI06c%2B%2FtCWtxdRK%2FgpI3igIgPAA9kvxFLsYJg5JZcjautieW0qhMCT2T20i5udNCzFUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmKxgZloonf8CnY9yrcA2gQ2d7E1ozGI7ZZ%2BkwizIa2D2%2B40D%2FNw0qsc1MufiGloOa1cpuOft4hr4IxheyHqhWKpQ998dt5hQshEihJAv3XGUyHMB9ntCS3rwwZmz3St0hL%2F0Xs%2BnWmKlzIcreZ958rL94qtwsW7Q%2BofZvi5dxaQC4kBqmB9o19xalbsKYj2TahQR7LT4xP2WX7Vo9BA%2BzSDXBL0AJomD3o4LIbz96yuccKClPvuryHmX7dJc8068TLj1LommkTljuDb1Oa1my90dASG8ZiyLdBkVd4x9cgv9nfo%2B2d7WchVBxxKwgDHuc46xzQZVqFASchfV9W9K4c6v9R0nWvayjcJ4pS4oNBFbwBkh9jLd84PRCV5EwnR%2F61V%2F0g1y%2BxBYxPQH0thbpMg1Az%2BUBpwQRXf5kue5pxuiMNaN0Vvks5fl0vPKl6k7eOPcUygfkE69vXGOnrWV68IBiPorP%2FY26V3tIFV5f3R%2FNjvcrxz%2BjMjroKQWnwdMvZ3wIJszeScgnMeUf5kK5PINA5wsDuNNu32iVFNsqKGAFZbTiVjGCziKywXN8nu0SD%2B29WhDC2%2BmLl4DGKZOQc%2BlG3T5VUTneSQ5uIM%2Bdx6KhAo4g9h%2BcyPzkX4Kx3XZqEpxrPlH1LC26GMPqJur4GOqUBBV8L7r36fyWlw%2FRBMeWk9N1fXjbsq2CR28cseJDqUQBqsniP%2FryvkKGHrwcswrtXlDhiWzCBw7K06Q5Tei%2FZoaobkFc8vHiPgeqMd8Eubem0W%2FAIWey5hhglVKCHZyUZHC5Xt2VW0974J7cPhYQaINBEC%2FTRGdNSWyNQyW44ekBva62lu5bxPAo039tjgMMT4Wxo5Ccm6%2FQ2j%2FCzsssOTDwNCSTW&X-Amz-Signature=b6664d52cbdf612f1f790844c749b53c2fb8f5a2f78f9e2b6cbe7239eb3399f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4R4LSWH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCXTxCZMF08NtAs%2FMMlUwXSQI06c%2B%2FtCWtxdRK%2FgpI3igIgPAA9kvxFLsYJg5JZcjautieW0qhMCT2T20i5udNCzFUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmKxgZloonf8CnY9yrcA2gQ2d7E1ozGI7ZZ%2BkwizIa2D2%2B40D%2FNw0qsc1MufiGloOa1cpuOft4hr4IxheyHqhWKpQ998dt5hQshEihJAv3XGUyHMB9ntCS3rwwZmz3St0hL%2F0Xs%2BnWmKlzIcreZ958rL94qtwsW7Q%2BofZvi5dxaQC4kBqmB9o19xalbsKYj2TahQR7LT4xP2WX7Vo9BA%2BzSDXBL0AJomD3o4LIbz96yuccKClPvuryHmX7dJc8068TLj1LommkTljuDb1Oa1my90dASG8ZiyLdBkVd4x9cgv9nfo%2B2d7WchVBxxKwgDHuc46xzQZVqFASchfV9W9K4c6v9R0nWvayjcJ4pS4oNBFbwBkh9jLd84PRCV5EwnR%2F61V%2F0g1y%2BxBYxPQH0thbpMg1Az%2BUBpwQRXf5kue5pxuiMNaN0Vvks5fl0vPKl6k7eOPcUygfkE69vXGOnrWV68IBiPorP%2FY26V3tIFV5f3R%2FNjvcrxz%2BjMjroKQWnwdMvZ3wIJszeScgnMeUf5kK5PINA5wsDuNNu32iVFNsqKGAFZbTiVjGCziKywXN8nu0SD%2B29WhDC2%2BmLl4DGKZOQc%2BlG3T5VUTneSQ5uIM%2Bdx6KhAo4g9h%2BcyPzkX4Kx3XZqEpxrPlH1LC26GMPqJur4GOqUBBV8L7r36fyWlw%2FRBMeWk9N1fXjbsq2CR28cseJDqUQBqsniP%2FryvkKGHrwcswrtXlDhiWzCBw7K06Q5Tei%2FZoaobkFc8vHiPgeqMd8Eubem0W%2FAIWey5hhglVKCHZyUZHC5Xt2VW0974J7cPhYQaINBEC%2FTRGdNSWyNQyW44ekBva62lu5bxPAo039tjgMMT4Wxo5Ccm6%2FQ2j%2FCzsssOTDwNCSTW&X-Amz-Signature=c2f6b12542b1c7322281eb0d19572c505a4c8a6555c5f109dabf7a43c4a25ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4R4LSWH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCXTxCZMF08NtAs%2FMMlUwXSQI06c%2B%2FtCWtxdRK%2FgpI3igIgPAA9kvxFLsYJg5JZcjautieW0qhMCT2T20i5udNCzFUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmKxgZloonf8CnY9yrcA2gQ2d7E1ozGI7ZZ%2BkwizIa2D2%2B40D%2FNw0qsc1MufiGloOa1cpuOft4hr4IxheyHqhWKpQ998dt5hQshEihJAv3XGUyHMB9ntCS3rwwZmz3St0hL%2F0Xs%2BnWmKlzIcreZ958rL94qtwsW7Q%2BofZvi5dxaQC4kBqmB9o19xalbsKYj2TahQR7LT4xP2WX7Vo9BA%2BzSDXBL0AJomD3o4LIbz96yuccKClPvuryHmX7dJc8068TLj1LommkTljuDb1Oa1my90dASG8ZiyLdBkVd4x9cgv9nfo%2B2d7WchVBxxKwgDHuc46xzQZVqFASchfV9W9K4c6v9R0nWvayjcJ4pS4oNBFbwBkh9jLd84PRCV5EwnR%2F61V%2F0g1y%2BxBYxPQH0thbpMg1Az%2BUBpwQRXf5kue5pxuiMNaN0Vvks5fl0vPKl6k7eOPcUygfkE69vXGOnrWV68IBiPorP%2FY26V3tIFV5f3R%2FNjvcrxz%2BjMjroKQWnwdMvZ3wIJszeScgnMeUf5kK5PINA5wsDuNNu32iVFNsqKGAFZbTiVjGCziKywXN8nu0SD%2B29WhDC2%2BmLl4DGKZOQc%2BlG3T5VUTneSQ5uIM%2Bdx6KhAo4g9h%2BcyPzkX4Kx3XZqEpxrPlH1LC26GMPqJur4GOqUBBV8L7r36fyWlw%2FRBMeWk9N1fXjbsq2CR28cseJDqUQBqsniP%2FryvkKGHrwcswrtXlDhiWzCBw7K06Q5Tei%2FZoaobkFc8vHiPgeqMd8Eubem0W%2FAIWey5hhglVKCHZyUZHC5Xt2VW0974J7cPhYQaINBEC%2FTRGdNSWyNQyW44ekBva62lu5bxPAo039tjgMMT4Wxo5Ccm6%2FQ2j%2FCzsssOTDwNCSTW&X-Amz-Signature=ec6949aaaf901e6c04b54fd4da683039e6ce99d35d8abd17731c729eb42b1da2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4R4LSWH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCXTxCZMF08NtAs%2FMMlUwXSQI06c%2B%2FtCWtxdRK%2FgpI3igIgPAA9kvxFLsYJg5JZcjautieW0qhMCT2T20i5udNCzFUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmKxgZloonf8CnY9yrcA2gQ2d7E1ozGI7ZZ%2BkwizIa2D2%2B40D%2FNw0qsc1MufiGloOa1cpuOft4hr4IxheyHqhWKpQ998dt5hQshEihJAv3XGUyHMB9ntCS3rwwZmz3St0hL%2F0Xs%2BnWmKlzIcreZ958rL94qtwsW7Q%2BofZvi5dxaQC4kBqmB9o19xalbsKYj2TahQR7LT4xP2WX7Vo9BA%2BzSDXBL0AJomD3o4LIbz96yuccKClPvuryHmX7dJc8068TLj1LommkTljuDb1Oa1my90dASG8ZiyLdBkVd4x9cgv9nfo%2B2d7WchVBxxKwgDHuc46xzQZVqFASchfV9W9K4c6v9R0nWvayjcJ4pS4oNBFbwBkh9jLd84PRCV5EwnR%2F61V%2F0g1y%2BxBYxPQH0thbpMg1Az%2BUBpwQRXf5kue5pxuiMNaN0Vvks5fl0vPKl6k7eOPcUygfkE69vXGOnrWV68IBiPorP%2FY26V3tIFV5f3R%2FNjvcrxz%2BjMjroKQWnwdMvZ3wIJszeScgnMeUf5kK5PINA5wsDuNNu32iVFNsqKGAFZbTiVjGCziKywXN8nu0SD%2B29WhDC2%2BmLl4DGKZOQc%2BlG3T5VUTneSQ5uIM%2Bdx6KhAo4g9h%2BcyPzkX4Kx3XZqEpxrPlH1LC26GMPqJur4GOqUBBV8L7r36fyWlw%2FRBMeWk9N1fXjbsq2CR28cseJDqUQBqsniP%2FryvkKGHrwcswrtXlDhiWzCBw7K06Q5Tei%2FZoaobkFc8vHiPgeqMd8Eubem0W%2FAIWey5hhglVKCHZyUZHC5Xt2VW0974J7cPhYQaINBEC%2FTRGdNSWyNQyW44ekBva62lu5bxPAo039tjgMMT4Wxo5Ccm6%2FQ2j%2FCzsssOTDwNCSTW&X-Amz-Signature=70a547b1005386b9204cf6bb8ea162a02e47667d42366ec630e54383eb108a63&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4R4LSWH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCXTxCZMF08NtAs%2FMMlUwXSQI06c%2B%2FtCWtxdRK%2FgpI3igIgPAA9kvxFLsYJg5JZcjautieW0qhMCT2T20i5udNCzFUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmKxgZloonf8CnY9yrcA2gQ2d7E1ozGI7ZZ%2BkwizIa2D2%2B40D%2FNw0qsc1MufiGloOa1cpuOft4hr4IxheyHqhWKpQ998dt5hQshEihJAv3XGUyHMB9ntCS3rwwZmz3St0hL%2F0Xs%2BnWmKlzIcreZ958rL94qtwsW7Q%2BofZvi5dxaQC4kBqmB9o19xalbsKYj2TahQR7LT4xP2WX7Vo9BA%2BzSDXBL0AJomD3o4LIbz96yuccKClPvuryHmX7dJc8068TLj1LommkTljuDb1Oa1my90dASG8ZiyLdBkVd4x9cgv9nfo%2B2d7WchVBxxKwgDHuc46xzQZVqFASchfV9W9K4c6v9R0nWvayjcJ4pS4oNBFbwBkh9jLd84PRCV5EwnR%2F61V%2F0g1y%2BxBYxPQH0thbpMg1Az%2BUBpwQRXf5kue5pxuiMNaN0Vvks5fl0vPKl6k7eOPcUygfkE69vXGOnrWV68IBiPorP%2FY26V3tIFV5f3R%2FNjvcrxz%2BjMjroKQWnwdMvZ3wIJszeScgnMeUf5kK5PINA5wsDuNNu32iVFNsqKGAFZbTiVjGCziKywXN8nu0SD%2B29WhDC2%2BmLl4DGKZOQc%2BlG3T5VUTneSQ5uIM%2Bdx6KhAo4g9h%2BcyPzkX4Kx3XZqEpxrPlH1LC26GMPqJur4GOqUBBV8L7r36fyWlw%2FRBMeWk9N1fXjbsq2CR28cseJDqUQBqsniP%2FryvkKGHrwcswrtXlDhiWzCBw7K06Q5Tei%2FZoaobkFc8vHiPgeqMd8Eubem0W%2FAIWey5hhglVKCHZyUZHC5Xt2VW0974J7cPhYQaINBEC%2FTRGdNSWyNQyW44ekBva62lu5bxPAo039tjgMMT4Wxo5Ccm6%2FQ2j%2FCzsssOTDwNCSTW&X-Amz-Signature=7fbcf7b68f8a9de0d14459185785504491207053d83fd7a0c12106e704b68bea&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
