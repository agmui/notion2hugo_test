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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M55KHB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNLtAGeq2G9WssydPYMdSq76yHTbn9QkYkI80TvUzN4AIgWi1mo2QNxxWwTsrewcSrBcvTCz%2FGaEbdbCuHUCGjXVAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENYX3NgFpBbTl5zfircAz5xkwtY5HYyG0swTfnG8rgtuKEfqQT8R0Dk7OUTFyFV%2F4oLnbvtl7E9EXL5VK07e1eYqhRdw0%2BXUZUruL%2Blnb9UYZYgkf0A2jUW3tvsPDaF7zSUd8YeLyY14SFOGcDnAb8ir0Nbot948x7RTs04ckRQSWLf8yM7n6r3F5TV2lGArNLt6Ynp7DGWGS1Uy%2FBNU0X8bi2YBTW3FK8mdsSdWHoWki6QBdVSmxb4kiDuBPukTmkI8dya%2FEfO3oi5FxmUt2J%2F8n9N7PaGd38n7YQoHyTvyiGFB1a8X%2FA%2FkuhWw7Gy8J0nRAAkYRbFdnLcFkdgAZCqnDoMJKxpdDcWrEndn9f7CkIwpI8aaLb478Y3to%2F0z3NpypaeajxDydybyt4em2llaBmGB6Da4NvPyvlp%2FDN20GemsQCsFIgkNEcmyUPsZ%2F%2FQtpXJHOKDlG2tA%2BhVYcRQkAhFD5FNnMU%2FpXD1mo8O5gFkfce9Icze%2BvUdaGycFhv13lWJgrfbRVJ5RE5PmHkgCyXGHiZOwGzQWclRBNxZ39vM3PQtZiH2JnjSUc%2Fopu6LeMy0D9f7%2FzklsM89e7Q%2Fo0i0vA1cUxj4tqdUMNtCQLKAvpprGuSQaLY3JJSuUqNlCBb9Dvwl2gzDMIXmpcIGOqUB9%2FtgoYTxUM4XvgnuN0kv6K6civwxq%2FEcIp49wHLlc1KwylxY7yDFjAhlP0z7R94YV2gz9mPWxXlL65JcX6KQc6V5C28iDwISgVy2Hx2o1wiFYGJVpE4qQYxd48mV5J23YXYh%2B%2FsIvpxznCUxYxVNhKgXwaKMI0bqVsYGc%2Bq5xIEoFyKIOdPhJXV205v3Azt6a8z6obRxdUyWLzW6A%2B2bX8vH5ecw&X-Amz-Signature=10d638c98616e4f40a5b300357e505bdaa3d32479c0ed30c67ad43a0b24bfade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M55KHB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNLtAGeq2G9WssydPYMdSq76yHTbn9QkYkI80TvUzN4AIgWi1mo2QNxxWwTsrewcSrBcvTCz%2FGaEbdbCuHUCGjXVAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENYX3NgFpBbTl5zfircAz5xkwtY5HYyG0swTfnG8rgtuKEfqQT8R0Dk7OUTFyFV%2F4oLnbvtl7E9EXL5VK07e1eYqhRdw0%2BXUZUruL%2Blnb9UYZYgkf0A2jUW3tvsPDaF7zSUd8YeLyY14SFOGcDnAb8ir0Nbot948x7RTs04ckRQSWLf8yM7n6r3F5TV2lGArNLt6Ynp7DGWGS1Uy%2FBNU0X8bi2YBTW3FK8mdsSdWHoWki6QBdVSmxb4kiDuBPukTmkI8dya%2FEfO3oi5FxmUt2J%2F8n9N7PaGd38n7YQoHyTvyiGFB1a8X%2FA%2FkuhWw7Gy8J0nRAAkYRbFdnLcFkdgAZCqnDoMJKxpdDcWrEndn9f7CkIwpI8aaLb478Y3to%2F0z3NpypaeajxDydybyt4em2llaBmGB6Da4NvPyvlp%2FDN20GemsQCsFIgkNEcmyUPsZ%2F%2FQtpXJHOKDlG2tA%2BhVYcRQkAhFD5FNnMU%2FpXD1mo8O5gFkfce9Icze%2BvUdaGycFhv13lWJgrfbRVJ5RE5PmHkgCyXGHiZOwGzQWclRBNxZ39vM3PQtZiH2JnjSUc%2Fopu6LeMy0D9f7%2FzklsM89e7Q%2Fo0i0vA1cUxj4tqdUMNtCQLKAvpprGuSQaLY3JJSuUqNlCBb9Dvwl2gzDMIXmpcIGOqUB9%2FtgoYTxUM4XvgnuN0kv6K6civwxq%2FEcIp49wHLlc1KwylxY7yDFjAhlP0z7R94YV2gz9mPWxXlL65JcX6KQc6V5C28iDwISgVy2Hx2o1wiFYGJVpE4qQYxd48mV5J23YXYh%2B%2FsIvpxznCUxYxVNhKgXwaKMI0bqVsYGc%2Bq5xIEoFyKIOdPhJXV205v3Azt6a8z6obRxdUyWLzW6A%2B2bX8vH5ecw&X-Amz-Signature=c1175d1968170bc72ca2d9560d95bb1837510456853e8b42b0d34b3e41f29298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M55KHB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNLtAGeq2G9WssydPYMdSq76yHTbn9QkYkI80TvUzN4AIgWi1mo2QNxxWwTsrewcSrBcvTCz%2FGaEbdbCuHUCGjXVAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENYX3NgFpBbTl5zfircAz5xkwtY5HYyG0swTfnG8rgtuKEfqQT8R0Dk7OUTFyFV%2F4oLnbvtl7E9EXL5VK07e1eYqhRdw0%2BXUZUruL%2Blnb9UYZYgkf0A2jUW3tvsPDaF7zSUd8YeLyY14SFOGcDnAb8ir0Nbot948x7RTs04ckRQSWLf8yM7n6r3F5TV2lGArNLt6Ynp7DGWGS1Uy%2FBNU0X8bi2YBTW3FK8mdsSdWHoWki6QBdVSmxb4kiDuBPukTmkI8dya%2FEfO3oi5FxmUt2J%2F8n9N7PaGd38n7YQoHyTvyiGFB1a8X%2FA%2FkuhWw7Gy8J0nRAAkYRbFdnLcFkdgAZCqnDoMJKxpdDcWrEndn9f7CkIwpI8aaLb478Y3to%2F0z3NpypaeajxDydybyt4em2llaBmGB6Da4NvPyvlp%2FDN20GemsQCsFIgkNEcmyUPsZ%2F%2FQtpXJHOKDlG2tA%2BhVYcRQkAhFD5FNnMU%2FpXD1mo8O5gFkfce9Icze%2BvUdaGycFhv13lWJgrfbRVJ5RE5PmHkgCyXGHiZOwGzQWclRBNxZ39vM3PQtZiH2JnjSUc%2Fopu6LeMy0D9f7%2FzklsM89e7Q%2Fo0i0vA1cUxj4tqdUMNtCQLKAvpprGuSQaLY3JJSuUqNlCBb9Dvwl2gzDMIXmpcIGOqUB9%2FtgoYTxUM4XvgnuN0kv6K6civwxq%2FEcIp49wHLlc1KwylxY7yDFjAhlP0z7R94YV2gz9mPWxXlL65JcX6KQc6V5C28iDwISgVy2Hx2o1wiFYGJVpE4qQYxd48mV5J23YXYh%2B%2FsIvpxznCUxYxVNhKgXwaKMI0bqVsYGc%2Bq5xIEoFyKIOdPhJXV205v3Azt6a8z6obRxdUyWLzW6A%2B2bX8vH5ecw&X-Amz-Signature=17129a8d72d867fbca26e5253933dcdba8afc1ff9be8da2919bc6688c022a2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M55KHB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNLtAGeq2G9WssydPYMdSq76yHTbn9QkYkI80TvUzN4AIgWi1mo2QNxxWwTsrewcSrBcvTCz%2FGaEbdbCuHUCGjXVAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENYX3NgFpBbTl5zfircAz5xkwtY5HYyG0swTfnG8rgtuKEfqQT8R0Dk7OUTFyFV%2F4oLnbvtl7E9EXL5VK07e1eYqhRdw0%2BXUZUruL%2Blnb9UYZYgkf0A2jUW3tvsPDaF7zSUd8YeLyY14SFOGcDnAb8ir0Nbot948x7RTs04ckRQSWLf8yM7n6r3F5TV2lGArNLt6Ynp7DGWGS1Uy%2FBNU0X8bi2YBTW3FK8mdsSdWHoWki6QBdVSmxb4kiDuBPukTmkI8dya%2FEfO3oi5FxmUt2J%2F8n9N7PaGd38n7YQoHyTvyiGFB1a8X%2FA%2FkuhWw7Gy8J0nRAAkYRbFdnLcFkdgAZCqnDoMJKxpdDcWrEndn9f7CkIwpI8aaLb478Y3to%2F0z3NpypaeajxDydybyt4em2llaBmGB6Da4NvPyvlp%2FDN20GemsQCsFIgkNEcmyUPsZ%2F%2FQtpXJHOKDlG2tA%2BhVYcRQkAhFD5FNnMU%2FpXD1mo8O5gFkfce9Icze%2BvUdaGycFhv13lWJgrfbRVJ5RE5PmHkgCyXGHiZOwGzQWclRBNxZ39vM3PQtZiH2JnjSUc%2Fopu6LeMy0D9f7%2FzklsM89e7Q%2Fo0i0vA1cUxj4tqdUMNtCQLKAvpprGuSQaLY3JJSuUqNlCBb9Dvwl2gzDMIXmpcIGOqUB9%2FtgoYTxUM4XvgnuN0kv6K6civwxq%2FEcIp49wHLlc1KwylxY7yDFjAhlP0z7R94YV2gz9mPWxXlL65JcX6KQc6V5C28iDwISgVy2Hx2o1wiFYGJVpE4qQYxd48mV5J23YXYh%2B%2FsIvpxznCUxYxVNhKgXwaKMI0bqVsYGc%2Bq5xIEoFyKIOdPhJXV205v3Azt6a8z6obRxdUyWLzW6A%2B2bX8vH5ecw&X-Amz-Signature=3309b7d057af2af65544a8dd73a048b9bab8d0c773a768e5b5ecf66130a9f3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M55KHB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNLtAGeq2G9WssydPYMdSq76yHTbn9QkYkI80TvUzN4AIgWi1mo2QNxxWwTsrewcSrBcvTCz%2FGaEbdbCuHUCGjXVAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENYX3NgFpBbTl5zfircAz5xkwtY5HYyG0swTfnG8rgtuKEfqQT8R0Dk7OUTFyFV%2F4oLnbvtl7E9EXL5VK07e1eYqhRdw0%2BXUZUruL%2Blnb9UYZYgkf0A2jUW3tvsPDaF7zSUd8YeLyY14SFOGcDnAb8ir0Nbot948x7RTs04ckRQSWLf8yM7n6r3F5TV2lGArNLt6Ynp7DGWGS1Uy%2FBNU0X8bi2YBTW3FK8mdsSdWHoWki6QBdVSmxb4kiDuBPukTmkI8dya%2FEfO3oi5FxmUt2J%2F8n9N7PaGd38n7YQoHyTvyiGFB1a8X%2FA%2FkuhWw7Gy8J0nRAAkYRbFdnLcFkdgAZCqnDoMJKxpdDcWrEndn9f7CkIwpI8aaLb478Y3to%2F0z3NpypaeajxDydybyt4em2llaBmGB6Da4NvPyvlp%2FDN20GemsQCsFIgkNEcmyUPsZ%2F%2FQtpXJHOKDlG2tA%2BhVYcRQkAhFD5FNnMU%2FpXD1mo8O5gFkfce9Icze%2BvUdaGycFhv13lWJgrfbRVJ5RE5PmHkgCyXGHiZOwGzQWclRBNxZ39vM3PQtZiH2JnjSUc%2Fopu6LeMy0D9f7%2FzklsM89e7Q%2Fo0i0vA1cUxj4tqdUMNtCQLKAvpprGuSQaLY3JJSuUqNlCBb9Dvwl2gzDMIXmpcIGOqUB9%2FtgoYTxUM4XvgnuN0kv6K6civwxq%2FEcIp49wHLlc1KwylxY7yDFjAhlP0z7R94YV2gz9mPWxXlL65JcX6KQc6V5C28iDwISgVy2Hx2o1wiFYGJVpE4qQYxd48mV5J23YXYh%2B%2FsIvpxznCUxYxVNhKgXwaKMI0bqVsYGc%2Bq5xIEoFyKIOdPhJXV205v3Azt6a8z6obRxdUyWLzW6A%2B2bX8vH5ecw&X-Amz-Signature=b5ccb1c52e0e769617e91d6bb21519485ed85afe0b4d42c66914f5daef12501f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M55KHB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNLtAGeq2G9WssydPYMdSq76yHTbn9QkYkI80TvUzN4AIgWi1mo2QNxxWwTsrewcSrBcvTCz%2FGaEbdbCuHUCGjXVAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENYX3NgFpBbTl5zfircAz5xkwtY5HYyG0swTfnG8rgtuKEfqQT8R0Dk7OUTFyFV%2F4oLnbvtl7E9EXL5VK07e1eYqhRdw0%2BXUZUruL%2Blnb9UYZYgkf0A2jUW3tvsPDaF7zSUd8YeLyY14SFOGcDnAb8ir0Nbot948x7RTs04ckRQSWLf8yM7n6r3F5TV2lGArNLt6Ynp7DGWGS1Uy%2FBNU0X8bi2YBTW3FK8mdsSdWHoWki6QBdVSmxb4kiDuBPukTmkI8dya%2FEfO3oi5FxmUt2J%2F8n9N7PaGd38n7YQoHyTvyiGFB1a8X%2FA%2FkuhWw7Gy8J0nRAAkYRbFdnLcFkdgAZCqnDoMJKxpdDcWrEndn9f7CkIwpI8aaLb478Y3to%2F0z3NpypaeajxDydybyt4em2llaBmGB6Da4NvPyvlp%2FDN20GemsQCsFIgkNEcmyUPsZ%2F%2FQtpXJHOKDlG2tA%2BhVYcRQkAhFD5FNnMU%2FpXD1mo8O5gFkfce9Icze%2BvUdaGycFhv13lWJgrfbRVJ5RE5PmHkgCyXGHiZOwGzQWclRBNxZ39vM3PQtZiH2JnjSUc%2Fopu6LeMy0D9f7%2FzklsM89e7Q%2Fo0i0vA1cUxj4tqdUMNtCQLKAvpprGuSQaLY3JJSuUqNlCBb9Dvwl2gzDMIXmpcIGOqUB9%2FtgoYTxUM4XvgnuN0kv6K6civwxq%2FEcIp49wHLlc1KwylxY7yDFjAhlP0z7R94YV2gz9mPWxXlL65JcX6KQc6V5C28iDwISgVy2Hx2o1wiFYGJVpE4qQYxd48mV5J23YXYh%2B%2FsIvpxznCUxYxVNhKgXwaKMI0bqVsYGc%2Bq5xIEoFyKIOdPhJXV205v3Azt6a8z6obRxdUyWLzW6A%2B2bX8vH5ecw&X-Amz-Signature=f4b0e0dcb81812d36b2724c1fec33630dfb8372b4ada3b5302bfb2ff89d53807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M55KHB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNLtAGeq2G9WssydPYMdSq76yHTbn9QkYkI80TvUzN4AIgWi1mo2QNxxWwTsrewcSrBcvTCz%2FGaEbdbCuHUCGjXVAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENYX3NgFpBbTl5zfircAz5xkwtY5HYyG0swTfnG8rgtuKEfqQT8R0Dk7OUTFyFV%2F4oLnbvtl7E9EXL5VK07e1eYqhRdw0%2BXUZUruL%2Blnb9UYZYgkf0A2jUW3tvsPDaF7zSUd8YeLyY14SFOGcDnAb8ir0Nbot948x7RTs04ckRQSWLf8yM7n6r3F5TV2lGArNLt6Ynp7DGWGS1Uy%2FBNU0X8bi2YBTW3FK8mdsSdWHoWki6QBdVSmxb4kiDuBPukTmkI8dya%2FEfO3oi5FxmUt2J%2F8n9N7PaGd38n7YQoHyTvyiGFB1a8X%2FA%2FkuhWw7Gy8J0nRAAkYRbFdnLcFkdgAZCqnDoMJKxpdDcWrEndn9f7CkIwpI8aaLb478Y3to%2F0z3NpypaeajxDydybyt4em2llaBmGB6Da4NvPyvlp%2FDN20GemsQCsFIgkNEcmyUPsZ%2F%2FQtpXJHOKDlG2tA%2BhVYcRQkAhFD5FNnMU%2FpXD1mo8O5gFkfce9Icze%2BvUdaGycFhv13lWJgrfbRVJ5RE5PmHkgCyXGHiZOwGzQWclRBNxZ39vM3PQtZiH2JnjSUc%2Fopu6LeMy0D9f7%2FzklsM89e7Q%2Fo0i0vA1cUxj4tqdUMNtCQLKAvpprGuSQaLY3JJSuUqNlCBb9Dvwl2gzDMIXmpcIGOqUB9%2FtgoYTxUM4XvgnuN0kv6K6civwxq%2FEcIp49wHLlc1KwylxY7yDFjAhlP0z7R94YV2gz9mPWxXlL65JcX6KQc6V5C28iDwISgVy2Hx2o1wiFYGJVpE4qQYxd48mV5J23YXYh%2B%2FsIvpxznCUxYxVNhKgXwaKMI0bqVsYGc%2Bq5xIEoFyKIOdPhJXV205v3Azt6a8z6obRxdUyWLzW6A%2B2bX8vH5ecw&X-Amz-Signature=e14ea70e4f8c8681990a4bf516cd37c7399e26d5549e787f9a32d25dcd13398a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
