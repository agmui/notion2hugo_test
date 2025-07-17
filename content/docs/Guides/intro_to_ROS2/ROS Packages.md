---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2EXHU4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCe4u3Q69jgx61NrDpWbv%2Bd072biR1t1BqsgptGIkj68gIhAK3Za%2FqGEldouAuarBlk2iMlEyjbHnLzXqjZO9EdXBDGKv8DCG0QABoMNjM3NDIzMTgzODA1IgwaczdnQK7TvN8Q3dMq3AMGIzFGXd%2B%2FmyIX97BpEsIA0gWglQj6q9%2FCZ9KHlVF27PapxcY0A3YfgEIejZ%2BHCqFnwSw3txL1Kn3nijitTyIgqnr0%2ByyxrD3rAtOlGiasREdAl3iqlEHxixcto89k6I7n4FcC%2BvzpxJwAjvFZLTljiMMBgK76164WpTPSfP7k5gbdWEyGaAnNh%2BwfBQmNTofEI6%2BAYuNQsM9FIIub3%2BDnH9VEChRWlAXJ%2Fy%2BkIkNZ3v4hKmroCs%2BMhY6zZvvL0QAiiNN7%2FAi2QfAzy9ZTHeF9%2BVn5phBNWjajlJodxwfDC1OZCIHBT0jWxWzyp0K%2BSMcAFi89%2BrblENEvRHvJpDXVrx1fwQpcLZGp7nHPWkG0BQcxq%2BrXmB4ERv9A%2B9mPIv%2FrlP8Ir71olhGjV0Ozj9WDlPhOKTBF9Kub2oA6PUTHNy2AWH6ong3kuzr%2F1evHqG3TGzxLmzyrIAo%2FQ7tF9crZ8sV2pXHblJcwu4ZWJZHf3U2fR29tlnAmOne7oHoUDgMwSZIBVtK3QprgJ3xui%2BbI2YTlHZoh0AaF8DB6B%2FeVkqcjRaLXqdLSK92kCmeHy1c99XGmqjH%2F4vOtkWI4qmvZ%2BynUBs8WC6up3zlkefpSGelU7DwDRSxRmtPFfTCc7uHDBjqkAQxf%2FWT3NKSPu3wDkiwE6QIWjksHulYE3jvj3nA8mQM%2FGBdQku%2F2DPt5739GcMSoTrDjPYSabQRgkSv%2Fs1qVCFftS3kfIsWWpmZQaL%2B9WowbFoW9FNCYHepIV2aaWWHhSL6n9qBMV0TtlPK57aZCh1Z85gF7aGFThQMZeF%2FrPgxFsKzjE8%2B27hlnyspljtYaS%2FECLWq2YdMznlqj6qc6oNhuPith&X-Amz-Signature=374b3eb7f04b44d087321f07c18b4ff33af84789e5404baf951f0dac9577c8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2EXHU4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCe4u3Q69jgx61NrDpWbv%2Bd072biR1t1BqsgptGIkj68gIhAK3Za%2FqGEldouAuarBlk2iMlEyjbHnLzXqjZO9EdXBDGKv8DCG0QABoMNjM3NDIzMTgzODA1IgwaczdnQK7TvN8Q3dMq3AMGIzFGXd%2B%2FmyIX97BpEsIA0gWglQj6q9%2FCZ9KHlVF27PapxcY0A3YfgEIejZ%2BHCqFnwSw3txL1Kn3nijitTyIgqnr0%2ByyxrD3rAtOlGiasREdAl3iqlEHxixcto89k6I7n4FcC%2BvzpxJwAjvFZLTljiMMBgK76164WpTPSfP7k5gbdWEyGaAnNh%2BwfBQmNTofEI6%2BAYuNQsM9FIIub3%2BDnH9VEChRWlAXJ%2Fy%2BkIkNZ3v4hKmroCs%2BMhY6zZvvL0QAiiNN7%2FAi2QfAzy9ZTHeF9%2BVn5phBNWjajlJodxwfDC1OZCIHBT0jWxWzyp0K%2BSMcAFi89%2BrblENEvRHvJpDXVrx1fwQpcLZGp7nHPWkG0BQcxq%2BrXmB4ERv9A%2B9mPIv%2FrlP8Ir71olhGjV0Ozj9WDlPhOKTBF9Kub2oA6PUTHNy2AWH6ong3kuzr%2F1evHqG3TGzxLmzyrIAo%2FQ7tF9crZ8sV2pXHblJcwu4ZWJZHf3U2fR29tlnAmOne7oHoUDgMwSZIBVtK3QprgJ3xui%2BbI2YTlHZoh0AaF8DB6B%2FeVkqcjRaLXqdLSK92kCmeHy1c99XGmqjH%2F4vOtkWI4qmvZ%2BynUBs8WC6up3zlkefpSGelU7DwDRSxRmtPFfTCc7uHDBjqkAQxf%2FWT3NKSPu3wDkiwE6QIWjksHulYE3jvj3nA8mQM%2FGBdQku%2F2DPt5739GcMSoTrDjPYSabQRgkSv%2Fs1qVCFftS3kfIsWWpmZQaL%2B9WowbFoW9FNCYHepIV2aaWWHhSL6n9qBMV0TtlPK57aZCh1Z85gF7aGFThQMZeF%2FrPgxFsKzjE8%2B27hlnyspljtYaS%2FECLWq2YdMznlqj6qc6oNhuPith&X-Amz-Signature=b89ca854fed4fe40510e5ff02d490411cb95b495c141df90d8a782fc69cabbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2EXHU4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCe4u3Q69jgx61NrDpWbv%2Bd072biR1t1BqsgptGIkj68gIhAK3Za%2FqGEldouAuarBlk2iMlEyjbHnLzXqjZO9EdXBDGKv8DCG0QABoMNjM3NDIzMTgzODA1IgwaczdnQK7TvN8Q3dMq3AMGIzFGXd%2B%2FmyIX97BpEsIA0gWglQj6q9%2FCZ9KHlVF27PapxcY0A3YfgEIejZ%2BHCqFnwSw3txL1Kn3nijitTyIgqnr0%2ByyxrD3rAtOlGiasREdAl3iqlEHxixcto89k6I7n4FcC%2BvzpxJwAjvFZLTljiMMBgK76164WpTPSfP7k5gbdWEyGaAnNh%2BwfBQmNTofEI6%2BAYuNQsM9FIIub3%2BDnH9VEChRWlAXJ%2Fy%2BkIkNZ3v4hKmroCs%2BMhY6zZvvL0QAiiNN7%2FAi2QfAzy9ZTHeF9%2BVn5phBNWjajlJodxwfDC1OZCIHBT0jWxWzyp0K%2BSMcAFi89%2BrblENEvRHvJpDXVrx1fwQpcLZGp7nHPWkG0BQcxq%2BrXmB4ERv9A%2B9mPIv%2FrlP8Ir71olhGjV0Ozj9WDlPhOKTBF9Kub2oA6PUTHNy2AWH6ong3kuzr%2F1evHqG3TGzxLmzyrIAo%2FQ7tF9crZ8sV2pXHblJcwu4ZWJZHf3U2fR29tlnAmOne7oHoUDgMwSZIBVtK3QprgJ3xui%2BbI2YTlHZoh0AaF8DB6B%2FeVkqcjRaLXqdLSK92kCmeHy1c99XGmqjH%2F4vOtkWI4qmvZ%2BynUBs8WC6up3zlkefpSGelU7DwDRSxRmtPFfTCc7uHDBjqkAQxf%2FWT3NKSPu3wDkiwE6QIWjksHulYE3jvj3nA8mQM%2FGBdQku%2F2DPt5739GcMSoTrDjPYSabQRgkSv%2Fs1qVCFftS3kfIsWWpmZQaL%2B9WowbFoW9FNCYHepIV2aaWWHhSL6n9qBMV0TtlPK57aZCh1Z85gF7aGFThQMZeF%2FrPgxFsKzjE8%2B27hlnyspljtYaS%2FECLWq2YdMznlqj6qc6oNhuPith&X-Amz-Signature=a2abe3ad016481081d679fa1691365467780228700a6d4adcfbf148dce0bcef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2EXHU4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCe4u3Q69jgx61NrDpWbv%2Bd072biR1t1BqsgptGIkj68gIhAK3Za%2FqGEldouAuarBlk2iMlEyjbHnLzXqjZO9EdXBDGKv8DCG0QABoMNjM3NDIzMTgzODA1IgwaczdnQK7TvN8Q3dMq3AMGIzFGXd%2B%2FmyIX97BpEsIA0gWglQj6q9%2FCZ9KHlVF27PapxcY0A3YfgEIejZ%2BHCqFnwSw3txL1Kn3nijitTyIgqnr0%2ByyxrD3rAtOlGiasREdAl3iqlEHxixcto89k6I7n4FcC%2BvzpxJwAjvFZLTljiMMBgK76164WpTPSfP7k5gbdWEyGaAnNh%2BwfBQmNTofEI6%2BAYuNQsM9FIIub3%2BDnH9VEChRWlAXJ%2Fy%2BkIkNZ3v4hKmroCs%2BMhY6zZvvL0QAiiNN7%2FAi2QfAzy9ZTHeF9%2BVn5phBNWjajlJodxwfDC1OZCIHBT0jWxWzyp0K%2BSMcAFi89%2BrblENEvRHvJpDXVrx1fwQpcLZGp7nHPWkG0BQcxq%2BrXmB4ERv9A%2B9mPIv%2FrlP8Ir71olhGjV0Ozj9WDlPhOKTBF9Kub2oA6PUTHNy2AWH6ong3kuzr%2F1evHqG3TGzxLmzyrIAo%2FQ7tF9crZ8sV2pXHblJcwu4ZWJZHf3U2fR29tlnAmOne7oHoUDgMwSZIBVtK3QprgJ3xui%2BbI2YTlHZoh0AaF8DB6B%2FeVkqcjRaLXqdLSK92kCmeHy1c99XGmqjH%2F4vOtkWI4qmvZ%2BynUBs8WC6up3zlkefpSGelU7DwDRSxRmtPFfTCc7uHDBjqkAQxf%2FWT3NKSPu3wDkiwE6QIWjksHulYE3jvj3nA8mQM%2FGBdQku%2F2DPt5739GcMSoTrDjPYSabQRgkSv%2Fs1qVCFftS3kfIsWWpmZQaL%2B9WowbFoW9FNCYHepIV2aaWWHhSL6n9qBMV0TtlPK57aZCh1Z85gF7aGFThQMZeF%2FrPgxFsKzjE8%2B27hlnyspljtYaS%2FECLWq2YdMznlqj6qc6oNhuPith&X-Amz-Signature=e42798772f9fc8800ad3a79d372ea607cf9f4c9b4d3e696da5990de3fb625236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2EXHU4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCe4u3Q69jgx61NrDpWbv%2Bd072biR1t1BqsgptGIkj68gIhAK3Za%2FqGEldouAuarBlk2iMlEyjbHnLzXqjZO9EdXBDGKv8DCG0QABoMNjM3NDIzMTgzODA1IgwaczdnQK7TvN8Q3dMq3AMGIzFGXd%2B%2FmyIX97BpEsIA0gWglQj6q9%2FCZ9KHlVF27PapxcY0A3YfgEIejZ%2BHCqFnwSw3txL1Kn3nijitTyIgqnr0%2ByyxrD3rAtOlGiasREdAl3iqlEHxixcto89k6I7n4FcC%2BvzpxJwAjvFZLTljiMMBgK76164WpTPSfP7k5gbdWEyGaAnNh%2BwfBQmNTofEI6%2BAYuNQsM9FIIub3%2BDnH9VEChRWlAXJ%2Fy%2BkIkNZ3v4hKmroCs%2BMhY6zZvvL0QAiiNN7%2FAi2QfAzy9ZTHeF9%2BVn5phBNWjajlJodxwfDC1OZCIHBT0jWxWzyp0K%2BSMcAFi89%2BrblENEvRHvJpDXVrx1fwQpcLZGp7nHPWkG0BQcxq%2BrXmB4ERv9A%2B9mPIv%2FrlP8Ir71olhGjV0Ozj9WDlPhOKTBF9Kub2oA6PUTHNy2AWH6ong3kuzr%2F1evHqG3TGzxLmzyrIAo%2FQ7tF9crZ8sV2pXHblJcwu4ZWJZHf3U2fR29tlnAmOne7oHoUDgMwSZIBVtK3QprgJ3xui%2BbI2YTlHZoh0AaF8DB6B%2FeVkqcjRaLXqdLSK92kCmeHy1c99XGmqjH%2F4vOtkWI4qmvZ%2BynUBs8WC6up3zlkefpSGelU7DwDRSxRmtPFfTCc7uHDBjqkAQxf%2FWT3NKSPu3wDkiwE6QIWjksHulYE3jvj3nA8mQM%2FGBdQku%2F2DPt5739GcMSoTrDjPYSabQRgkSv%2Fs1qVCFftS3kfIsWWpmZQaL%2B9WowbFoW9FNCYHepIV2aaWWHhSL6n9qBMV0TtlPK57aZCh1Z85gF7aGFThQMZeF%2FrPgxFsKzjE8%2B27hlnyspljtYaS%2FECLWq2YdMznlqj6qc6oNhuPith&X-Amz-Signature=6c8618425c70da23d5bc0b41827b74d5005948559d60002dfa1e6cff2750d0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2EXHU4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCe4u3Q69jgx61NrDpWbv%2Bd072biR1t1BqsgptGIkj68gIhAK3Za%2FqGEldouAuarBlk2iMlEyjbHnLzXqjZO9EdXBDGKv8DCG0QABoMNjM3NDIzMTgzODA1IgwaczdnQK7TvN8Q3dMq3AMGIzFGXd%2B%2FmyIX97BpEsIA0gWglQj6q9%2FCZ9KHlVF27PapxcY0A3YfgEIejZ%2BHCqFnwSw3txL1Kn3nijitTyIgqnr0%2ByyxrD3rAtOlGiasREdAl3iqlEHxixcto89k6I7n4FcC%2BvzpxJwAjvFZLTljiMMBgK76164WpTPSfP7k5gbdWEyGaAnNh%2BwfBQmNTofEI6%2BAYuNQsM9FIIub3%2BDnH9VEChRWlAXJ%2Fy%2BkIkNZ3v4hKmroCs%2BMhY6zZvvL0QAiiNN7%2FAi2QfAzy9ZTHeF9%2BVn5phBNWjajlJodxwfDC1OZCIHBT0jWxWzyp0K%2BSMcAFi89%2BrblENEvRHvJpDXVrx1fwQpcLZGp7nHPWkG0BQcxq%2BrXmB4ERv9A%2B9mPIv%2FrlP8Ir71olhGjV0Ozj9WDlPhOKTBF9Kub2oA6PUTHNy2AWH6ong3kuzr%2F1evHqG3TGzxLmzyrIAo%2FQ7tF9crZ8sV2pXHblJcwu4ZWJZHf3U2fR29tlnAmOne7oHoUDgMwSZIBVtK3QprgJ3xui%2BbI2YTlHZoh0AaF8DB6B%2FeVkqcjRaLXqdLSK92kCmeHy1c99XGmqjH%2F4vOtkWI4qmvZ%2BynUBs8WC6up3zlkefpSGelU7DwDRSxRmtPFfTCc7uHDBjqkAQxf%2FWT3NKSPu3wDkiwE6QIWjksHulYE3jvj3nA8mQM%2FGBdQku%2F2DPt5739GcMSoTrDjPYSabQRgkSv%2Fs1qVCFftS3kfIsWWpmZQaL%2B9WowbFoW9FNCYHepIV2aaWWHhSL6n9qBMV0TtlPK57aZCh1Z85gF7aGFThQMZeF%2FrPgxFsKzjE8%2B27hlnyspljtYaS%2FECLWq2YdMznlqj6qc6oNhuPith&X-Amz-Signature=434e8171258a4bfaccaf87122f3404086a739dd5098e9a9a1de9aba9dead85f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2EXHU4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCe4u3Q69jgx61NrDpWbv%2Bd072biR1t1BqsgptGIkj68gIhAK3Za%2FqGEldouAuarBlk2iMlEyjbHnLzXqjZO9EdXBDGKv8DCG0QABoMNjM3NDIzMTgzODA1IgwaczdnQK7TvN8Q3dMq3AMGIzFGXd%2B%2FmyIX97BpEsIA0gWglQj6q9%2FCZ9KHlVF27PapxcY0A3YfgEIejZ%2BHCqFnwSw3txL1Kn3nijitTyIgqnr0%2ByyxrD3rAtOlGiasREdAl3iqlEHxixcto89k6I7n4FcC%2BvzpxJwAjvFZLTljiMMBgK76164WpTPSfP7k5gbdWEyGaAnNh%2BwfBQmNTofEI6%2BAYuNQsM9FIIub3%2BDnH9VEChRWlAXJ%2Fy%2BkIkNZ3v4hKmroCs%2BMhY6zZvvL0QAiiNN7%2FAi2QfAzy9ZTHeF9%2BVn5phBNWjajlJodxwfDC1OZCIHBT0jWxWzyp0K%2BSMcAFi89%2BrblENEvRHvJpDXVrx1fwQpcLZGp7nHPWkG0BQcxq%2BrXmB4ERv9A%2B9mPIv%2FrlP8Ir71olhGjV0Ozj9WDlPhOKTBF9Kub2oA6PUTHNy2AWH6ong3kuzr%2F1evHqG3TGzxLmzyrIAo%2FQ7tF9crZ8sV2pXHblJcwu4ZWJZHf3U2fR29tlnAmOne7oHoUDgMwSZIBVtK3QprgJ3xui%2BbI2YTlHZoh0AaF8DB6B%2FeVkqcjRaLXqdLSK92kCmeHy1c99XGmqjH%2F4vOtkWI4qmvZ%2BynUBs8WC6up3zlkefpSGelU7DwDRSxRmtPFfTCc7uHDBjqkAQxf%2FWT3NKSPu3wDkiwE6QIWjksHulYE3jvj3nA8mQM%2FGBdQku%2F2DPt5739GcMSoTrDjPYSabQRgkSv%2Fs1qVCFftS3kfIsWWpmZQaL%2B9WowbFoW9FNCYHepIV2aaWWHhSL6n9qBMV0TtlPK57aZCh1Z85gF7aGFThQMZeF%2FrPgxFsKzjE8%2B27hlnyspljtYaS%2FECLWq2YdMznlqj6qc6oNhuPith&X-Amz-Signature=b6e236d35de052f7b7b556a6b6e44292dd2e7fc3d687dc19467c862c9ae64336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
