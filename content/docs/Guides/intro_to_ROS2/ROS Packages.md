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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7C4FFHA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBVsNBRlv8S937y93vaBu0jgUYK5NYLT9oYTvRnQ9RkzAiEA%2FJbtdvl98wFlVBwiJzYZ4J5Qvcl52KRTWZwIPs1pA14q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD08zhNxnlqggCbkkCrcA5CWuL7zx4GQLOgYxjpMBbfkdUEcOHzeUGW3QdLNn4XqBMiZ4%2F0yyxojJZjLulenvnKo4xO%2B%2FqOTh7fG5qZG6UoxQd2cSX%2BBUmyIgxaRXgxhEfyPY1ulOzzpClgapW752ThpFotgO1ofrRQWcZ1IUA7Gpv3eCnpORaQQuS8WYwRallOn4HxCiOhZNin9xNsfYYc4EmQ2TWmptTg0Z7pTbC%2Btu0szb5PoH149OJZZZWzJ3ZP894jMQkp6nrmpoCbzCeAGDnsrqQedj7mOqcDWFiDRL7na8yx6yoy5fOwmCEz9DCpTPAUA3UKGCEeNMN8KvWXYuJKoJxDydTDcRPaanhO%2BQcLVCb79MfA2tAiiXEW9b9zBm%2Bl8mPmzQcSJH9F9CXWT8TsbEXBAw0diCiHYqlVOzIkYDAa6D4a8AGnAOtZvvsCz96M1dkQyS34Zt3y72WIZClpOXrhQgduPjU52gxewrvGrjdo5F42g1qc988RTSm4JryRnWbW0cmWquDwC5RRb4rVE3IxRn%2B%2FQ6onMpn3RSBdDdVb1iGLLRpLlmfzFDcmHlOhoHldWZCqDvLQ5oV3sTXDp%2BIUnO4nQMwjGAktt4BM9gQt7ltNlL5QvBOmOahqVuBQpIuRjjbkTMPqP68IGOqUBAPQm077S0VCT61vx%2Bx5cF2kXYlNq5IgoOYBGlebW3yHaNRfGL7zOdaN768XPE9ZiFY0jULUE9uDLGcSVmrfvl5%2B9HFGcfK%2BE5BH2q1ZuY%2By2TZWwR7f2Ny9xVzB%2B68krWFke2dPmryusWkavHULkQJY3U%2F%2FxxafrqDQlxdHYNxJmDsjiNiHQ1YYcUC1SnDUqmF3tUrjsrktknZC8RdHnpErBzz7l&X-Amz-Signature=12d9be422c817ea8eff70af9b5fc5348eb53d6e91b5bbfb6365dc50946a660da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7C4FFHA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBVsNBRlv8S937y93vaBu0jgUYK5NYLT9oYTvRnQ9RkzAiEA%2FJbtdvl98wFlVBwiJzYZ4J5Qvcl52KRTWZwIPs1pA14q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD08zhNxnlqggCbkkCrcA5CWuL7zx4GQLOgYxjpMBbfkdUEcOHzeUGW3QdLNn4XqBMiZ4%2F0yyxojJZjLulenvnKo4xO%2B%2FqOTh7fG5qZG6UoxQd2cSX%2BBUmyIgxaRXgxhEfyPY1ulOzzpClgapW752ThpFotgO1ofrRQWcZ1IUA7Gpv3eCnpORaQQuS8WYwRallOn4HxCiOhZNin9xNsfYYc4EmQ2TWmptTg0Z7pTbC%2Btu0szb5PoH149OJZZZWzJ3ZP894jMQkp6nrmpoCbzCeAGDnsrqQedj7mOqcDWFiDRL7na8yx6yoy5fOwmCEz9DCpTPAUA3UKGCEeNMN8KvWXYuJKoJxDydTDcRPaanhO%2BQcLVCb79MfA2tAiiXEW9b9zBm%2Bl8mPmzQcSJH9F9CXWT8TsbEXBAw0diCiHYqlVOzIkYDAa6D4a8AGnAOtZvvsCz96M1dkQyS34Zt3y72WIZClpOXrhQgduPjU52gxewrvGrjdo5F42g1qc988RTSm4JryRnWbW0cmWquDwC5RRb4rVE3IxRn%2B%2FQ6onMpn3RSBdDdVb1iGLLRpLlmfzFDcmHlOhoHldWZCqDvLQ5oV3sTXDp%2BIUnO4nQMwjGAktt4BM9gQt7ltNlL5QvBOmOahqVuBQpIuRjjbkTMPqP68IGOqUBAPQm077S0VCT61vx%2Bx5cF2kXYlNq5IgoOYBGlebW3yHaNRfGL7zOdaN768XPE9ZiFY0jULUE9uDLGcSVmrfvl5%2B9HFGcfK%2BE5BH2q1ZuY%2By2TZWwR7f2Ny9xVzB%2B68krWFke2dPmryusWkavHULkQJY3U%2F%2FxxafrqDQlxdHYNxJmDsjiNiHQ1YYcUC1SnDUqmF3tUrjsrktknZC8RdHnpErBzz7l&X-Amz-Signature=aa8d2c88931e438e0992b7ea017764a134ebaae568e2a91664d457694daa55f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7C4FFHA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBVsNBRlv8S937y93vaBu0jgUYK5NYLT9oYTvRnQ9RkzAiEA%2FJbtdvl98wFlVBwiJzYZ4J5Qvcl52KRTWZwIPs1pA14q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD08zhNxnlqggCbkkCrcA5CWuL7zx4GQLOgYxjpMBbfkdUEcOHzeUGW3QdLNn4XqBMiZ4%2F0yyxojJZjLulenvnKo4xO%2B%2FqOTh7fG5qZG6UoxQd2cSX%2BBUmyIgxaRXgxhEfyPY1ulOzzpClgapW752ThpFotgO1ofrRQWcZ1IUA7Gpv3eCnpORaQQuS8WYwRallOn4HxCiOhZNin9xNsfYYc4EmQ2TWmptTg0Z7pTbC%2Btu0szb5PoH149OJZZZWzJ3ZP894jMQkp6nrmpoCbzCeAGDnsrqQedj7mOqcDWFiDRL7na8yx6yoy5fOwmCEz9DCpTPAUA3UKGCEeNMN8KvWXYuJKoJxDydTDcRPaanhO%2BQcLVCb79MfA2tAiiXEW9b9zBm%2Bl8mPmzQcSJH9F9CXWT8TsbEXBAw0diCiHYqlVOzIkYDAa6D4a8AGnAOtZvvsCz96M1dkQyS34Zt3y72WIZClpOXrhQgduPjU52gxewrvGrjdo5F42g1qc988RTSm4JryRnWbW0cmWquDwC5RRb4rVE3IxRn%2B%2FQ6onMpn3RSBdDdVb1iGLLRpLlmfzFDcmHlOhoHldWZCqDvLQ5oV3sTXDp%2BIUnO4nQMwjGAktt4BM9gQt7ltNlL5QvBOmOahqVuBQpIuRjjbkTMPqP68IGOqUBAPQm077S0VCT61vx%2Bx5cF2kXYlNq5IgoOYBGlebW3yHaNRfGL7zOdaN768XPE9ZiFY0jULUE9uDLGcSVmrfvl5%2B9HFGcfK%2BE5BH2q1ZuY%2By2TZWwR7f2Ny9xVzB%2B68krWFke2dPmryusWkavHULkQJY3U%2F%2FxxafrqDQlxdHYNxJmDsjiNiHQ1YYcUC1SnDUqmF3tUrjsrktknZC8RdHnpErBzz7l&X-Amz-Signature=94bb63301b2b67f24a911eba639da8df04b7ef53e0f3c1ef406cbe7f1c276e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7C4FFHA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBVsNBRlv8S937y93vaBu0jgUYK5NYLT9oYTvRnQ9RkzAiEA%2FJbtdvl98wFlVBwiJzYZ4J5Qvcl52KRTWZwIPs1pA14q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD08zhNxnlqggCbkkCrcA5CWuL7zx4GQLOgYxjpMBbfkdUEcOHzeUGW3QdLNn4XqBMiZ4%2F0yyxojJZjLulenvnKo4xO%2B%2FqOTh7fG5qZG6UoxQd2cSX%2BBUmyIgxaRXgxhEfyPY1ulOzzpClgapW752ThpFotgO1ofrRQWcZ1IUA7Gpv3eCnpORaQQuS8WYwRallOn4HxCiOhZNin9xNsfYYc4EmQ2TWmptTg0Z7pTbC%2Btu0szb5PoH149OJZZZWzJ3ZP894jMQkp6nrmpoCbzCeAGDnsrqQedj7mOqcDWFiDRL7na8yx6yoy5fOwmCEz9DCpTPAUA3UKGCEeNMN8KvWXYuJKoJxDydTDcRPaanhO%2BQcLVCb79MfA2tAiiXEW9b9zBm%2Bl8mPmzQcSJH9F9CXWT8TsbEXBAw0diCiHYqlVOzIkYDAa6D4a8AGnAOtZvvsCz96M1dkQyS34Zt3y72WIZClpOXrhQgduPjU52gxewrvGrjdo5F42g1qc988RTSm4JryRnWbW0cmWquDwC5RRb4rVE3IxRn%2B%2FQ6onMpn3RSBdDdVb1iGLLRpLlmfzFDcmHlOhoHldWZCqDvLQ5oV3sTXDp%2BIUnO4nQMwjGAktt4BM9gQt7ltNlL5QvBOmOahqVuBQpIuRjjbkTMPqP68IGOqUBAPQm077S0VCT61vx%2Bx5cF2kXYlNq5IgoOYBGlebW3yHaNRfGL7zOdaN768XPE9ZiFY0jULUE9uDLGcSVmrfvl5%2B9HFGcfK%2BE5BH2q1ZuY%2By2TZWwR7f2Ny9xVzB%2B68krWFke2dPmryusWkavHULkQJY3U%2F%2FxxafrqDQlxdHYNxJmDsjiNiHQ1YYcUC1SnDUqmF3tUrjsrktknZC8RdHnpErBzz7l&X-Amz-Signature=988c3f366731cb4de367e8d25a167a566a280b6806099cb894532e3c2888057a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7C4FFHA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBVsNBRlv8S937y93vaBu0jgUYK5NYLT9oYTvRnQ9RkzAiEA%2FJbtdvl98wFlVBwiJzYZ4J5Qvcl52KRTWZwIPs1pA14q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD08zhNxnlqggCbkkCrcA5CWuL7zx4GQLOgYxjpMBbfkdUEcOHzeUGW3QdLNn4XqBMiZ4%2F0yyxojJZjLulenvnKo4xO%2B%2FqOTh7fG5qZG6UoxQd2cSX%2BBUmyIgxaRXgxhEfyPY1ulOzzpClgapW752ThpFotgO1ofrRQWcZ1IUA7Gpv3eCnpORaQQuS8WYwRallOn4HxCiOhZNin9xNsfYYc4EmQ2TWmptTg0Z7pTbC%2Btu0szb5PoH149OJZZZWzJ3ZP894jMQkp6nrmpoCbzCeAGDnsrqQedj7mOqcDWFiDRL7na8yx6yoy5fOwmCEz9DCpTPAUA3UKGCEeNMN8KvWXYuJKoJxDydTDcRPaanhO%2BQcLVCb79MfA2tAiiXEW9b9zBm%2Bl8mPmzQcSJH9F9CXWT8TsbEXBAw0diCiHYqlVOzIkYDAa6D4a8AGnAOtZvvsCz96M1dkQyS34Zt3y72WIZClpOXrhQgduPjU52gxewrvGrjdo5F42g1qc988RTSm4JryRnWbW0cmWquDwC5RRb4rVE3IxRn%2B%2FQ6onMpn3RSBdDdVb1iGLLRpLlmfzFDcmHlOhoHldWZCqDvLQ5oV3sTXDp%2BIUnO4nQMwjGAktt4BM9gQt7ltNlL5QvBOmOahqVuBQpIuRjjbkTMPqP68IGOqUBAPQm077S0VCT61vx%2Bx5cF2kXYlNq5IgoOYBGlebW3yHaNRfGL7zOdaN768XPE9ZiFY0jULUE9uDLGcSVmrfvl5%2B9HFGcfK%2BE5BH2q1ZuY%2By2TZWwR7f2Ny9xVzB%2B68krWFke2dPmryusWkavHULkQJY3U%2F%2FxxafrqDQlxdHYNxJmDsjiNiHQ1YYcUC1SnDUqmF3tUrjsrktknZC8RdHnpErBzz7l&X-Amz-Signature=a1da6971f8b2d9aba3d97de62873b08e49ec53c1d9adea44b9772d8fd8c60e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7C4FFHA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBVsNBRlv8S937y93vaBu0jgUYK5NYLT9oYTvRnQ9RkzAiEA%2FJbtdvl98wFlVBwiJzYZ4J5Qvcl52KRTWZwIPs1pA14q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD08zhNxnlqggCbkkCrcA5CWuL7zx4GQLOgYxjpMBbfkdUEcOHzeUGW3QdLNn4XqBMiZ4%2F0yyxojJZjLulenvnKo4xO%2B%2FqOTh7fG5qZG6UoxQd2cSX%2BBUmyIgxaRXgxhEfyPY1ulOzzpClgapW752ThpFotgO1ofrRQWcZ1IUA7Gpv3eCnpORaQQuS8WYwRallOn4HxCiOhZNin9xNsfYYc4EmQ2TWmptTg0Z7pTbC%2Btu0szb5PoH149OJZZZWzJ3ZP894jMQkp6nrmpoCbzCeAGDnsrqQedj7mOqcDWFiDRL7na8yx6yoy5fOwmCEz9DCpTPAUA3UKGCEeNMN8KvWXYuJKoJxDydTDcRPaanhO%2BQcLVCb79MfA2tAiiXEW9b9zBm%2Bl8mPmzQcSJH9F9CXWT8TsbEXBAw0diCiHYqlVOzIkYDAa6D4a8AGnAOtZvvsCz96M1dkQyS34Zt3y72WIZClpOXrhQgduPjU52gxewrvGrjdo5F42g1qc988RTSm4JryRnWbW0cmWquDwC5RRb4rVE3IxRn%2B%2FQ6onMpn3RSBdDdVb1iGLLRpLlmfzFDcmHlOhoHldWZCqDvLQ5oV3sTXDp%2BIUnO4nQMwjGAktt4BM9gQt7ltNlL5QvBOmOahqVuBQpIuRjjbkTMPqP68IGOqUBAPQm077S0VCT61vx%2Bx5cF2kXYlNq5IgoOYBGlebW3yHaNRfGL7zOdaN768XPE9ZiFY0jULUE9uDLGcSVmrfvl5%2B9HFGcfK%2BE5BH2q1ZuY%2By2TZWwR7f2Ny9xVzB%2B68krWFke2dPmryusWkavHULkQJY3U%2F%2FxxafrqDQlxdHYNxJmDsjiNiHQ1YYcUC1SnDUqmF3tUrjsrktknZC8RdHnpErBzz7l&X-Amz-Signature=a19c8989494e7d5615d94305af8f4bf54130c5c2283f876116b8c7186cd790a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7C4FFHA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBVsNBRlv8S937y93vaBu0jgUYK5NYLT9oYTvRnQ9RkzAiEA%2FJbtdvl98wFlVBwiJzYZ4J5Qvcl52KRTWZwIPs1pA14q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD08zhNxnlqggCbkkCrcA5CWuL7zx4GQLOgYxjpMBbfkdUEcOHzeUGW3QdLNn4XqBMiZ4%2F0yyxojJZjLulenvnKo4xO%2B%2FqOTh7fG5qZG6UoxQd2cSX%2BBUmyIgxaRXgxhEfyPY1ulOzzpClgapW752ThpFotgO1ofrRQWcZ1IUA7Gpv3eCnpORaQQuS8WYwRallOn4HxCiOhZNin9xNsfYYc4EmQ2TWmptTg0Z7pTbC%2Btu0szb5PoH149OJZZZWzJ3ZP894jMQkp6nrmpoCbzCeAGDnsrqQedj7mOqcDWFiDRL7na8yx6yoy5fOwmCEz9DCpTPAUA3UKGCEeNMN8KvWXYuJKoJxDydTDcRPaanhO%2BQcLVCb79MfA2tAiiXEW9b9zBm%2Bl8mPmzQcSJH9F9CXWT8TsbEXBAw0diCiHYqlVOzIkYDAa6D4a8AGnAOtZvvsCz96M1dkQyS34Zt3y72WIZClpOXrhQgduPjU52gxewrvGrjdo5F42g1qc988RTSm4JryRnWbW0cmWquDwC5RRb4rVE3IxRn%2B%2FQ6onMpn3RSBdDdVb1iGLLRpLlmfzFDcmHlOhoHldWZCqDvLQ5oV3sTXDp%2BIUnO4nQMwjGAktt4BM9gQt7ltNlL5QvBOmOahqVuBQpIuRjjbkTMPqP68IGOqUBAPQm077S0VCT61vx%2Bx5cF2kXYlNq5IgoOYBGlebW3yHaNRfGL7zOdaN768XPE9ZiFY0jULUE9uDLGcSVmrfvl5%2B9HFGcfK%2BE5BH2q1ZuY%2By2TZWwR7f2Ny9xVzB%2B68krWFke2dPmryusWkavHULkQJY3U%2F%2FxxafrqDQlxdHYNxJmDsjiNiHQ1YYcUC1SnDUqmF3tUrjsrktknZC8RdHnpErBzz7l&X-Amz-Signature=3927b6a4d57d2dd7700bcf1033002e12a2492db7116485c1e9a8a0882fb16100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
