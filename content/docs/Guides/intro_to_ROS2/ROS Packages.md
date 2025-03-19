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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6A6MNA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIB4CZuJlZZAehDkcP8AlMuv7Zgok5Z47Ha7StnYk4G8qAiEArUh2U75tb%2BY8syDZEZY01Y3m8NlJXebwCh0cpLoOV8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAzOa%2BjCel5dFadcpCrcA%2F2osy%2BmBmbYj2N1Pj60OLbWfmLWDHyV%2FTZpcubmNDqQA%2FtC9K2aaY0cY9NfU5VQXhdy3xAA0wX%2BQ%2Fkt4hBCH%2FpNc5e4Eo94ryaZCN4cteiMf9fgGtT4UybDEQOuh2RiTCHrIiyWv9VljXS3ESjws%2FVo4UDnul4HVOUEuLODUxnFxkUoCfwM84BSHd41HRsO4MvWl0OU54Pyu%2BJ8Mi79n6aTxeoQ7WHHNbNt%2BM5uRsrjX8vEWagv3Cw7uGJmPqLjfUFnPEO5lMbBN5pszViiDsqi8yhnUIGxLXtuvy0U0nLKc0xrmLG2XhPYkN%2Btr2T0T1QjiY8vmup77DMXS7smAO9BRYoj4xDIyo105KZrYgJRSIKLlukSr3gTr3sv%2F2ZNt0hYVp%2B87DBVk%2BLxqQVIfULrQnnVTvGVTxrg6Rgd6E9jHL%2FlJn7MkENIpMYeMjd%2Fon4hOp7cRY6CslQgAkZyCWxdStx2UTTYQFjkAAcZ5T1%2FqlxlALy09jTE%2FP6lVwPo1ymallQtBoYj3SJKCR0de%2ByK53qyjmJUy%2BCWX%2BGrBD4YWWf7GgWW%2FjcakA77NMi1em2Zzi6eG6Bt14ZfWvejt6A%2FcCQWuqoG5rAmn9d7qemQaqGdmJTWakJv9Y8yMIbA6r4GOqUBThwfqK77PbU9uwj9bXABpLueBIV99vD3y6utYSDnIzyNNz7bl%2BLL37wONbjJ1Npmps7nNOVtFasyJygj6pPgr6cYpLbuD5%2FnO3ZXECTQ4OosGu1VLkRRfj5r1m%2FjElItmnxSAsctdN7ebTkWGoVTpFv%2FSa1%2Febin6V6ceRVee0%2BkmeCCq%2BpJHYHpfPtUD8avebmGrq0Q7dlfPno8cFwMXFs1i05q&X-Amz-Signature=ce82664598b742eec57c0962d930384f7cca025594cf6ade467f8b97762cee9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6A6MNA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIB4CZuJlZZAehDkcP8AlMuv7Zgok5Z47Ha7StnYk4G8qAiEArUh2U75tb%2BY8syDZEZY01Y3m8NlJXebwCh0cpLoOV8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAzOa%2BjCel5dFadcpCrcA%2F2osy%2BmBmbYj2N1Pj60OLbWfmLWDHyV%2FTZpcubmNDqQA%2FtC9K2aaY0cY9NfU5VQXhdy3xAA0wX%2BQ%2Fkt4hBCH%2FpNc5e4Eo94ryaZCN4cteiMf9fgGtT4UybDEQOuh2RiTCHrIiyWv9VljXS3ESjws%2FVo4UDnul4HVOUEuLODUxnFxkUoCfwM84BSHd41HRsO4MvWl0OU54Pyu%2BJ8Mi79n6aTxeoQ7WHHNbNt%2BM5uRsrjX8vEWagv3Cw7uGJmPqLjfUFnPEO5lMbBN5pszViiDsqi8yhnUIGxLXtuvy0U0nLKc0xrmLG2XhPYkN%2Btr2T0T1QjiY8vmup77DMXS7smAO9BRYoj4xDIyo105KZrYgJRSIKLlukSr3gTr3sv%2F2ZNt0hYVp%2B87DBVk%2BLxqQVIfULrQnnVTvGVTxrg6Rgd6E9jHL%2FlJn7MkENIpMYeMjd%2Fon4hOp7cRY6CslQgAkZyCWxdStx2UTTYQFjkAAcZ5T1%2FqlxlALy09jTE%2FP6lVwPo1ymallQtBoYj3SJKCR0de%2ByK53qyjmJUy%2BCWX%2BGrBD4YWWf7GgWW%2FjcakA77NMi1em2Zzi6eG6Bt14ZfWvejt6A%2FcCQWuqoG5rAmn9d7qemQaqGdmJTWakJv9Y8yMIbA6r4GOqUBThwfqK77PbU9uwj9bXABpLueBIV99vD3y6utYSDnIzyNNz7bl%2BLL37wONbjJ1Npmps7nNOVtFasyJygj6pPgr6cYpLbuD5%2FnO3ZXECTQ4OosGu1VLkRRfj5r1m%2FjElItmnxSAsctdN7ebTkWGoVTpFv%2FSa1%2Febin6V6ceRVee0%2BkmeCCq%2BpJHYHpfPtUD8avebmGrq0Q7dlfPno8cFwMXFs1i05q&X-Amz-Signature=d800afa40ba364af91cf0274372edb1e4a980fb219b47cc55e2bf6ab60d58552&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6A6MNA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIB4CZuJlZZAehDkcP8AlMuv7Zgok5Z47Ha7StnYk4G8qAiEArUh2U75tb%2BY8syDZEZY01Y3m8NlJXebwCh0cpLoOV8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAzOa%2BjCel5dFadcpCrcA%2F2osy%2BmBmbYj2N1Pj60OLbWfmLWDHyV%2FTZpcubmNDqQA%2FtC9K2aaY0cY9NfU5VQXhdy3xAA0wX%2BQ%2Fkt4hBCH%2FpNc5e4Eo94ryaZCN4cteiMf9fgGtT4UybDEQOuh2RiTCHrIiyWv9VljXS3ESjws%2FVo4UDnul4HVOUEuLODUxnFxkUoCfwM84BSHd41HRsO4MvWl0OU54Pyu%2BJ8Mi79n6aTxeoQ7WHHNbNt%2BM5uRsrjX8vEWagv3Cw7uGJmPqLjfUFnPEO5lMbBN5pszViiDsqi8yhnUIGxLXtuvy0U0nLKc0xrmLG2XhPYkN%2Btr2T0T1QjiY8vmup77DMXS7smAO9BRYoj4xDIyo105KZrYgJRSIKLlukSr3gTr3sv%2F2ZNt0hYVp%2B87DBVk%2BLxqQVIfULrQnnVTvGVTxrg6Rgd6E9jHL%2FlJn7MkENIpMYeMjd%2Fon4hOp7cRY6CslQgAkZyCWxdStx2UTTYQFjkAAcZ5T1%2FqlxlALy09jTE%2FP6lVwPo1ymallQtBoYj3SJKCR0de%2ByK53qyjmJUy%2BCWX%2BGrBD4YWWf7GgWW%2FjcakA77NMi1em2Zzi6eG6Bt14ZfWvejt6A%2FcCQWuqoG5rAmn9d7qemQaqGdmJTWakJv9Y8yMIbA6r4GOqUBThwfqK77PbU9uwj9bXABpLueBIV99vD3y6utYSDnIzyNNz7bl%2BLL37wONbjJ1Npmps7nNOVtFasyJygj6pPgr6cYpLbuD5%2FnO3ZXECTQ4OosGu1VLkRRfj5r1m%2FjElItmnxSAsctdN7ebTkWGoVTpFv%2FSa1%2Febin6V6ceRVee0%2BkmeCCq%2BpJHYHpfPtUD8avebmGrq0Q7dlfPno8cFwMXFs1i05q&X-Amz-Signature=6e89291deda5192edceb63cc9b25c2bd8a5ffaabca799bedfb69eba8489f4753&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6A6MNA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIB4CZuJlZZAehDkcP8AlMuv7Zgok5Z47Ha7StnYk4G8qAiEArUh2U75tb%2BY8syDZEZY01Y3m8NlJXebwCh0cpLoOV8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAzOa%2BjCel5dFadcpCrcA%2F2osy%2BmBmbYj2N1Pj60OLbWfmLWDHyV%2FTZpcubmNDqQA%2FtC9K2aaY0cY9NfU5VQXhdy3xAA0wX%2BQ%2Fkt4hBCH%2FpNc5e4Eo94ryaZCN4cteiMf9fgGtT4UybDEQOuh2RiTCHrIiyWv9VljXS3ESjws%2FVo4UDnul4HVOUEuLODUxnFxkUoCfwM84BSHd41HRsO4MvWl0OU54Pyu%2BJ8Mi79n6aTxeoQ7WHHNbNt%2BM5uRsrjX8vEWagv3Cw7uGJmPqLjfUFnPEO5lMbBN5pszViiDsqi8yhnUIGxLXtuvy0U0nLKc0xrmLG2XhPYkN%2Btr2T0T1QjiY8vmup77DMXS7smAO9BRYoj4xDIyo105KZrYgJRSIKLlukSr3gTr3sv%2F2ZNt0hYVp%2B87DBVk%2BLxqQVIfULrQnnVTvGVTxrg6Rgd6E9jHL%2FlJn7MkENIpMYeMjd%2Fon4hOp7cRY6CslQgAkZyCWxdStx2UTTYQFjkAAcZ5T1%2FqlxlALy09jTE%2FP6lVwPo1ymallQtBoYj3SJKCR0de%2ByK53qyjmJUy%2BCWX%2BGrBD4YWWf7GgWW%2FjcakA77NMi1em2Zzi6eG6Bt14ZfWvejt6A%2FcCQWuqoG5rAmn9d7qemQaqGdmJTWakJv9Y8yMIbA6r4GOqUBThwfqK77PbU9uwj9bXABpLueBIV99vD3y6utYSDnIzyNNz7bl%2BLL37wONbjJ1Npmps7nNOVtFasyJygj6pPgr6cYpLbuD5%2FnO3ZXECTQ4OosGu1VLkRRfj5r1m%2FjElItmnxSAsctdN7ebTkWGoVTpFv%2FSa1%2Febin6V6ceRVee0%2BkmeCCq%2BpJHYHpfPtUD8avebmGrq0Q7dlfPno8cFwMXFs1i05q&X-Amz-Signature=6d1b53d41834dd01e375f2c45fea4646bc98f0c272fd72e597a4d3af42096c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6A6MNA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIB4CZuJlZZAehDkcP8AlMuv7Zgok5Z47Ha7StnYk4G8qAiEArUh2U75tb%2BY8syDZEZY01Y3m8NlJXebwCh0cpLoOV8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAzOa%2BjCel5dFadcpCrcA%2F2osy%2BmBmbYj2N1Pj60OLbWfmLWDHyV%2FTZpcubmNDqQA%2FtC9K2aaY0cY9NfU5VQXhdy3xAA0wX%2BQ%2Fkt4hBCH%2FpNc5e4Eo94ryaZCN4cteiMf9fgGtT4UybDEQOuh2RiTCHrIiyWv9VljXS3ESjws%2FVo4UDnul4HVOUEuLODUxnFxkUoCfwM84BSHd41HRsO4MvWl0OU54Pyu%2BJ8Mi79n6aTxeoQ7WHHNbNt%2BM5uRsrjX8vEWagv3Cw7uGJmPqLjfUFnPEO5lMbBN5pszViiDsqi8yhnUIGxLXtuvy0U0nLKc0xrmLG2XhPYkN%2Btr2T0T1QjiY8vmup77DMXS7smAO9BRYoj4xDIyo105KZrYgJRSIKLlukSr3gTr3sv%2F2ZNt0hYVp%2B87DBVk%2BLxqQVIfULrQnnVTvGVTxrg6Rgd6E9jHL%2FlJn7MkENIpMYeMjd%2Fon4hOp7cRY6CslQgAkZyCWxdStx2UTTYQFjkAAcZ5T1%2FqlxlALy09jTE%2FP6lVwPo1ymallQtBoYj3SJKCR0de%2ByK53qyjmJUy%2BCWX%2BGrBD4YWWf7GgWW%2FjcakA77NMi1em2Zzi6eG6Bt14ZfWvejt6A%2FcCQWuqoG5rAmn9d7qemQaqGdmJTWakJv9Y8yMIbA6r4GOqUBThwfqK77PbU9uwj9bXABpLueBIV99vD3y6utYSDnIzyNNz7bl%2BLL37wONbjJ1Npmps7nNOVtFasyJygj6pPgr6cYpLbuD5%2FnO3ZXECTQ4OosGu1VLkRRfj5r1m%2FjElItmnxSAsctdN7ebTkWGoVTpFv%2FSa1%2Febin6V6ceRVee0%2BkmeCCq%2BpJHYHpfPtUD8avebmGrq0Q7dlfPno8cFwMXFs1i05q&X-Amz-Signature=87496b08bffbdba3c35d8a4540b5d01dba2f87c4c9165a7421dbca445b3497fd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6A6MNA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIB4CZuJlZZAehDkcP8AlMuv7Zgok5Z47Ha7StnYk4G8qAiEArUh2U75tb%2BY8syDZEZY01Y3m8NlJXebwCh0cpLoOV8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAzOa%2BjCel5dFadcpCrcA%2F2osy%2BmBmbYj2N1Pj60OLbWfmLWDHyV%2FTZpcubmNDqQA%2FtC9K2aaY0cY9NfU5VQXhdy3xAA0wX%2BQ%2Fkt4hBCH%2FpNc5e4Eo94ryaZCN4cteiMf9fgGtT4UybDEQOuh2RiTCHrIiyWv9VljXS3ESjws%2FVo4UDnul4HVOUEuLODUxnFxkUoCfwM84BSHd41HRsO4MvWl0OU54Pyu%2BJ8Mi79n6aTxeoQ7WHHNbNt%2BM5uRsrjX8vEWagv3Cw7uGJmPqLjfUFnPEO5lMbBN5pszViiDsqi8yhnUIGxLXtuvy0U0nLKc0xrmLG2XhPYkN%2Btr2T0T1QjiY8vmup77DMXS7smAO9BRYoj4xDIyo105KZrYgJRSIKLlukSr3gTr3sv%2F2ZNt0hYVp%2B87DBVk%2BLxqQVIfULrQnnVTvGVTxrg6Rgd6E9jHL%2FlJn7MkENIpMYeMjd%2Fon4hOp7cRY6CslQgAkZyCWxdStx2UTTYQFjkAAcZ5T1%2FqlxlALy09jTE%2FP6lVwPo1ymallQtBoYj3SJKCR0de%2ByK53qyjmJUy%2BCWX%2BGrBD4YWWf7GgWW%2FjcakA77NMi1em2Zzi6eG6Bt14ZfWvejt6A%2FcCQWuqoG5rAmn9d7qemQaqGdmJTWakJv9Y8yMIbA6r4GOqUBThwfqK77PbU9uwj9bXABpLueBIV99vD3y6utYSDnIzyNNz7bl%2BLL37wONbjJ1Npmps7nNOVtFasyJygj6pPgr6cYpLbuD5%2FnO3ZXECTQ4OosGu1VLkRRfj5r1m%2FjElItmnxSAsctdN7ebTkWGoVTpFv%2FSa1%2Febin6V6ceRVee0%2BkmeCCq%2BpJHYHpfPtUD8avebmGrq0Q7dlfPno8cFwMXFs1i05q&X-Amz-Signature=eef0121f32a674a9d064328b1644d585ecab0a1afdcdf4e81b411174481413ac&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6A6MNA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIB4CZuJlZZAehDkcP8AlMuv7Zgok5Z47Ha7StnYk4G8qAiEArUh2U75tb%2BY8syDZEZY01Y3m8NlJXebwCh0cpLoOV8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAzOa%2BjCel5dFadcpCrcA%2F2osy%2BmBmbYj2N1Pj60OLbWfmLWDHyV%2FTZpcubmNDqQA%2FtC9K2aaY0cY9NfU5VQXhdy3xAA0wX%2BQ%2Fkt4hBCH%2FpNc5e4Eo94ryaZCN4cteiMf9fgGtT4UybDEQOuh2RiTCHrIiyWv9VljXS3ESjws%2FVo4UDnul4HVOUEuLODUxnFxkUoCfwM84BSHd41HRsO4MvWl0OU54Pyu%2BJ8Mi79n6aTxeoQ7WHHNbNt%2BM5uRsrjX8vEWagv3Cw7uGJmPqLjfUFnPEO5lMbBN5pszViiDsqi8yhnUIGxLXtuvy0U0nLKc0xrmLG2XhPYkN%2Btr2T0T1QjiY8vmup77DMXS7smAO9BRYoj4xDIyo105KZrYgJRSIKLlukSr3gTr3sv%2F2ZNt0hYVp%2B87DBVk%2BLxqQVIfULrQnnVTvGVTxrg6Rgd6E9jHL%2FlJn7MkENIpMYeMjd%2Fon4hOp7cRY6CslQgAkZyCWxdStx2UTTYQFjkAAcZ5T1%2FqlxlALy09jTE%2FP6lVwPo1ymallQtBoYj3SJKCR0de%2ByK53qyjmJUy%2BCWX%2BGrBD4YWWf7GgWW%2FjcakA77NMi1em2Zzi6eG6Bt14ZfWvejt6A%2FcCQWuqoG5rAmn9d7qemQaqGdmJTWakJv9Y8yMIbA6r4GOqUBThwfqK77PbU9uwj9bXABpLueBIV99vD3y6utYSDnIzyNNz7bl%2BLL37wONbjJ1Npmps7nNOVtFasyJygj6pPgr6cYpLbuD5%2FnO3ZXECTQ4OosGu1VLkRRfj5r1m%2FjElItmnxSAsctdN7ebTkWGoVTpFv%2FSa1%2Febin6V6ceRVee0%2BkmeCCq%2BpJHYHpfPtUD8avebmGrq0Q7dlfPno8cFwMXFs1i05q&X-Amz-Signature=4f10856e358b334724877453734abdf7366c6134b82f43b908f92a231673ad27&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
