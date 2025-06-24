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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435I5PXR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnq0juGVvFy4a53DUeIOKM0NNzmmb57YBOntVpkMjlyAiAz5ItM%2FmlSpAyyTP0BboGMppXzrfcXMfCLsKawLJVwpir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM1jXLmZoX%2BhrcXL0CKtwDnSfJvOln5eTjqyKPehl2tYaQ3SxmFcQTmsTCBSKZmMYTBDOpEP7%2Ba2zKiwmMF0Cr4wBlu6vbX07hsqZL1wyKZknI8bcf1%2BJpMbVMT9tforcQ9OdMa74gmtPAmQr4z%2FUEkkQX6dZhYjJ7ZYnpyS%2FinEMLKDx0udqI4ZDW7NX9%2FOyBZNLJHJW9Bd0QeeILbqrFWSz0cY2I7GGQMwKHJec44ZFA0XbNPpgDXLAbqegSgYpbBavrZB5Z7zgucPuh%2BLelVkqmKgD%2F%2BCQyuBsakk6pmWpx3UAFymBk55Lc2K5pdwq1J2RARNIrbPbeFGDuzNDvFdSi6fBgFmPIWEmYtDIiMcf0YXYHAllsnIakLEnGZBnL1AjznuYTSNF5f75DlJSmJ9aUmWlxUIZ7qGTXeH4%2Ba14PcYrkVQUamXRL%2Ftu3Yis7P%2B7UfYUzT3nGx%2BI7U52Uj92Zq1oD1ooCnkvdb178ZGfex9msXwBa9kC3gMF%2FwIu3O78bclr0qAJzySWWMHjRNSMd5tDm0mykkmP5fB6F%2BcWxAzuhXJ82WTOnUpensOOGzNKPubfK86aDrNJu%2FzPk7DgIg0sxNfDh2j7lkzzdK2Xh2MYC%2FCrNPfA06JHlIAjqwn9A4mo0NAN3SMIwt5DrwgY6pgGxDJD0kdov83SbgUiGpTcBGRBsi6hF4ttXFQ2dMUqd2ekacpPJt3JzLLYdsMvedeoDPLPbh9zNEtUiG%2Fj4StzLxCXOIfg%2BfFNnhZwQsjsV2kla9gJZgs%2BG35gDxuAl04DTMtzayeMt95OvbMrwvemf6m%2F3dpkCaMDSExOErtirCfnoS%2FwJVjqGSHfe8fsifE6gqk%2BAoIyG97BuocUdXo3MOaBCbImg&X-Amz-Signature=0c9daa43c56d7d155abbb3c43a75cb62a101e2a7dcdf24634697c1974892c5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435I5PXR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnq0juGVvFy4a53DUeIOKM0NNzmmb57YBOntVpkMjlyAiAz5ItM%2FmlSpAyyTP0BboGMppXzrfcXMfCLsKawLJVwpir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM1jXLmZoX%2BhrcXL0CKtwDnSfJvOln5eTjqyKPehl2tYaQ3SxmFcQTmsTCBSKZmMYTBDOpEP7%2Ba2zKiwmMF0Cr4wBlu6vbX07hsqZL1wyKZknI8bcf1%2BJpMbVMT9tforcQ9OdMa74gmtPAmQr4z%2FUEkkQX6dZhYjJ7ZYnpyS%2FinEMLKDx0udqI4ZDW7NX9%2FOyBZNLJHJW9Bd0QeeILbqrFWSz0cY2I7GGQMwKHJec44ZFA0XbNPpgDXLAbqegSgYpbBavrZB5Z7zgucPuh%2BLelVkqmKgD%2F%2BCQyuBsakk6pmWpx3UAFymBk55Lc2K5pdwq1J2RARNIrbPbeFGDuzNDvFdSi6fBgFmPIWEmYtDIiMcf0YXYHAllsnIakLEnGZBnL1AjznuYTSNF5f75DlJSmJ9aUmWlxUIZ7qGTXeH4%2Ba14PcYrkVQUamXRL%2Ftu3Yis7P%2B7UfYUzT3nGx%2BI7U52Uj92Zq1oD1ooCnkvdb178ZGfex9msXwBa9kC3gMF%2FwIu3O78bclr0qAJzySWWMHjRNSMd5tDm0mykkmP5fB6F%2BcWxAzuhXJ82WTOnUpensOOGzNKPubfK86aDrNJu%2FzPk7DgIg0sxNfDh2j7lkzzdK2Xh2MYC%2FCrNPfA06JHlIAjqwn9A4mo0NAN3SMIwt5DrwgY6pgGxDJD0kdov83SbgUiGpTcBGRBsi6hF4ttXFQ2dMUqd2ekacpPJt3JzLLYdsMvedeoDPLPbh9zNEtUiG%2Fj4StzLxCXOIfg%2BfFNnhZwQsjsV2kla9gJZgs%2BG35gDxuAl04DTMtzayeMt95OvbMrwvemf6m%2F3dpkCaMDSExOErtirCfnoS%2FwJVjqGSHfe8fsifE6gqk%2BAoIyG97BuocUdXo3MOaBCbImg&X-Amz-Signature=150d10df07e32afce0eb42f14d3a854602dde6d31d6b28a66c62c380c009ddfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435I5PXR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnq0juGVvFy4a53DUeIOKM0NNzmmb57YBOntVpkMjlyAiAz5ItM%2FmlSpAyyTP0BboGMppXzrfcXMfCLsKawLJVwpir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM1jXLmZoX%2BhrcXL0CKtwDnSfJvOln5eTjqyKPehl2tYaQ3SxmFcQTmsTCBSKZmMYTBDOpEP7%2Ba2zKiwmMF0Cr4wBlu6vbX07hsqZL1wyKZknI8bcf1%2BJpMbVMT9tforcQ9OdMa74gmtPAmQr4z%2FUEkkQX6dZhYjJ7ZYnpyS%2FinEMLKDx0udqI4ZDW7NX9%2FOyBZNLJHJW9Bd0QeeILbqrFWSz0cY2I7GGQMwKHJec44ZFA0XbNPpgDXLAbqegSgYpbBavrZB5Z7zgucPuh%2BLelVkqmKgD%2F%2BCQyuBsakk6pmWpx3UAFymBk55Lc2K5pdwq1J2RARNIrbPbeFGDuzNDvFdSi6fBgFmPIWEmYtDIiMcf0YXYHAllsnIakLEnGZBnL1AjznuYTSNF5f75DlJSmJ9aUmWlxUIZ7qGTXeH4%2Ba14PcYrkVQUamXRL%2Ftu3Yis7P%2B7UfYUzT3nGx%2BI7U52Uj92Zq1oD1ooCnkvdb178ZGfex9msXwBa9kC3gMF%2FwIu3O78bclr0qAJzySWWMHjRNSMd5tDm0mykkmP5fB6F%2BcWxAzuhXJ82WTOnUpensOOGzNKPubfK86aDrNJu%2FzPk7DgIg0sxNfDh2j7lkzzdK2Xh2MYC%2FCrNPfA06JHlIAjqwn9A4mo0NAN3SMIwt5DrwgY6pgGxDJD0kdov83SbgUiGpTcBGRBsi6hF4ttXFQ2dMUqd2ekacpPJt3JzLLYdsMvedeoDPLPbh9zNEtUiG%2Fj4StzLxCXOIfg%2BfFNnhZwQsjsV2kla9gJZgs%2BG35gDxuAl04DTMtzayeMt95OvbMrwvemf6m%2F3dpkCaMDSExOErtirCfnoS%2FwJVjqGSHfe8fsifE6gqk%2BAoIyG97BuocUdXo3MOaBCbImg&X-Amz-Signature=34c0bf65c23843152a2ed0328c5b205c7a86a526007389dfd0d78db3f301913d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435I5PXR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnq0juGVvFy4a53DUeIOKM0NNzmmb57YBOntVpkMjlyAiAz5ItM%2FmlSpAyyTP0BboGMppXzrfcXMfCLsKawLJVwpir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM1jXLmZoX%2BhrcXL0CKtwDnSfJvOln5eTjqyKPehl2tYaQ3SxmFcQTmsTCBSKZmMYTBDOpEP7%2Ba2zKiwmMF0Cr4wBlu6vbX07hsqZL1wyKZknI8bcf1%2BJpMbVMT9tforcQ9OdMa74gmtPAmQr4z%2FUEkkQX6dZhYjJ7ZYnpyS%2FinEMLKDx0udqI4ZDW7NX9%2FOyBZNLJHJW9Bd0QeeILbqrFWSz0cY2I7GGQMwKHJec44ZFA0XbNPpgDXLAbqegSgYpbBavrZB5Z7zgucPuh%2BLelVkqmKgD%2F%2BCQyuBsakk6pmWpx3UAFymBk55Lc2K5pdwq1J2RARNIrbPbeFGDuzNDvFdSi6fBgFmPIWEmYtDIiMcf0YXYHAllsnIakLEnGZBnL1AjznuYTSNF5f75DlJSmJ9aUmWlxUIZ7qGTXeH4%2Ba14PcYrkVQUamXRL%2Ftu3Yis7P%2B7UfYUzT3nGx%2BI7U52Uj92Zq1oD1ooCnkvdb178ZGfex9msXwBa9kC3gMF%2FwIu3O78bclr0qAJzySWWMHjRNSMd5tDm0mykkmP5fB6F%2BcWxAzuhXJ82WTOnUpensOOGzNKPubfK86aDrNJu%2FzPk7DgIg0sxNfDh2j7lkzzdK2Xh2MYC%2FCrNPfA06JHlIAjqwn9A4mo0NAN3SMIwt5DrwgY6pgGxDJD0kdov83SbgUiGpTcBGRBsi6hF4ttXFQ2dMUqd2ekacpPJt3JzLLYdsMvedeoDPLPbh9zNEtUiG%2Fj4StzLxCXOIfg%2BfFNnhZwQsjsV2kla9gJZgs%2BG35gDxuAl04DTMtzayeMt95OvbMrwvemf6m%2F3dpkCaMDSExOErtirCfnoS%2FwJVjqGSHfe8fsifE6gqk%2BAoIyG97BuocUdXo3MOaBCbImg&X-Amz-Signature=bca379043521bb92ef5e8031f3e6914eefd96394886e7e207ab65ba74cde4289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435I5PXR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnq0juGVvFy4a53DUeIOKM0NNzmmb57YBOntVpkMjlyAiAz5ItM%2FmlSpAyyTP0BboGMppXzrfcXMfCLsKawLJVwpir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM1jXLmZoX%2BhrcXL0CKtwDnSfJvOln5eTjqyKPehl2tYaQ3SxmFcQTmsTCBSKZmMYTBDOpEP7%2Ba2zKiwmMF0Cr4wBlu6vbX07hsqZL1wyKZknI8bcf1%2BJpMbVMT9tforcQ9OdMa74gmtPAmQr4z%2FUEkkQX6dZhYjJ7ZYnpyS%2FinEMLKDx0udqI4ZDW7NX9%2FOyBZNLJHJW9Bd0QeeILbqrFWSz0cY2I7GGQMwKHJec44ZFA0XbNPpgDXLAbqegSgYpbBavrZB5Z7zgucPuh%2BLelVkqmKgD%2F%2BCQyuBsakk6pmWpx3UAFymBk55Lc2K5pdwq1J2RARNIrbPbeFGDuzNDvFdSi6fBgFmPIWEmYtDIiMcf0YXYHAllsnIakLEnGZBnL1AjznuYTSNF5f75DlJSmJ9aUmWlxUIZ7qGTXeH4%2Ba14PcYrkVQUamXRL%2Ftu3Yis7P%2B7UfYUzT3nGx%2BI7U52Uj92Zq1oD1ooCnkvdb178ZGfex9msXwBa9kC3gMF%2FwIu3O78bclr0qAJzySWWMHjRNSMd5tDm0mykkmP5fB6F%2BcWxAzuhXJ82WTOnUpensOOGzNKPubfK86aDrNJu%2FzPk7DgIg0sxNfDh2j7lkzzdK2Xh2MYC%2FCrNPfA06JHlIAjqwn9A4mo0NAN3SMIwt5DrwgY6pgGxDJD0kdov83SbgUiGpTcBGRBsi6hF4ttXFQ2dMUqd2ekacpPJt3JzLLYdsMvedeoDPLPbh9zNEtUiG%2Fj4StzLxCXOIfg%2BfFNnhZwQsjsV2kla9gJZgs%2BG35gDxuAl04DTMtzayeMt95OvbMrwvemf6m%2F3dpkCaMDSExOErtirCfnoS%2FwJVjqGSHfe8fsifE6gqk%2BAoIyG97BuocUdXo3MOaBCbImg&X-Amz-Signature=9a081dddb480b064ae756b40075bf23c9a971014e1aca9dc6e25b6e31c294a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435I5PXR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnq0juGVvFy4a53DUeIOKM0NNzmmb57YBOntVpkMjlyAiAz5ItM%2FmlSpAyyTP0BboGMppXzrfcXMfCLsKawLJVwpir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM1jXLmZoX%2BhrcXL0CKtwDnSfJvOln5eTjqyKPehl2tYaQ3SxmFcQTmsTCBSKZmMYTBDOpEP7%2Ba2zKiwmMF0Cr4wBlu6vbX07hsqZL1wyKZknI8bcf1%2BJpMbVMT9tforcQ9OdMa74gmtPAmQr4z%2FUEkkQX6dZhYjJ7ZYnpyS%2FinEMLKDx0udqI4ZDW7NX9%2FOyBZNLJHJW9Bd0QeeILbqrFWSz0cY2I7GGQMwKHJec44ZFA0XbNPpgDXLAbqegSgYpbBavrZB5Z7zgucPuh%2BLelVkqmKgD%2F%2BCQyuBsakk6pmWpx3UAFymBk55Lc2K5pdwq1J2RARNIrbPbeFGDuzNDvFdSi6fBgFmPIWEmYtDIiMcf0YXYHAllsnIakLEnGZBnL1AjznuYTSNF5f75DlJSmJ9aUmWlxUIZ7qGTXeH4%2Ba14PcYrkVQUamXRL%2Ftu3Yis7P%2B7UfYUzT3nGx%2BI7U52Uj92Zq1oD1ooCnkvdb178ZGfex9msXwBa9kC3gMF%2FwIu3O78bclr0qAJzySWWMHjRNSMd5tDm0mykkmP5fB6F%2BcWxAzuhXJ82WTOnUpensOOGzNKPubfK86aDrNJu%2FzPk7DgIg0sxNfDh2j7lkzzdK2Xh2MYC%2FCrNPfA06JHlIAjqwn9A4mo0NAN3SMIwt5DrwgY6pgGxDJD0kdov83SbgUiGpTcBGRBsi6hF4ttXFQ2dMUqd2ekacpPJt3JzLLYdsMvedeoDPLPbh9zNEtUiG%2Fj4StzLxCXOIfg%2BfFNnhZwQsjsV2kla9gJZgs%2BG35gDxuAl04DTMtzayeMt95OvbMrwvemf6m%2F3dpkCaMDSExOErtirCfnoS%2FwJVjqGSHfe8fsifE6gqk%2BAoIyG97BuocUdXo3MOaBCbImg&X-Amz-Signature=88546850d2500f03faacc2344a01c19e2856431e02e42e0e226270b3c0ea110b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435I5PXR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnq0juGVvFy4a53DUeIOKM0NNzmmb57YBOntVpkMjlyAiAz5ItM%2FmlSpAyyTP0BboGMppXzrfcXMfCLsKawLJVwpir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM1jXLmZoX%2BhrcXL0CKtwDnSfJvOln5eTjqyKPehl2tYaQ3SxmFcQTmsTCBSKZmMYTBDOpEP7%2Ba2zKiwmMF0Cr4wBlu6vbX07hsqZL1wyKZknI8bcf1%2BJpMbVMT9tforcQ9OdMa74gmtPAmQr4z%2FUEkkQX6dZhYjJ7ZYnpyS%2FinEMLKDx0udqI4ZDW7NX9%2FOyBZNLJHJW9Bd0QeeILbqrFWSz0cY2I7GGQMwKHJec44ZFA0XbNPpgDXLAbqegSgYpbBavrZB5Z7zgucPuh%2BLelVkqmKgD%2F%2BCQyuBsakk6pmWpx3UAFymBk55Lc2K5pdwq1J2RARNIrbPbeFGDuzNDvFdSi6fBgFmPIWEmYtDIiMcf0YXYHAllsnIakLEnGZBnL1AjznuYTSNF5f75DlJSmJ9aUmWlxUIZ7qGTXeH4%2Ba14PcYrkVQUamXRL%2Ftu3Yis7P%2B7UfYUzT3nGx%2BI7U52Uj92Zq1oD1ooCnkvdb178ZGfex9msXwBa9kC3gMF%2FwIu3O78bclr0qAJzySWWMHjRNSMd5tDm0mykkmP5fB6F%2BcWxAzuhXJ82WTOnUpensOOGzNKPubfK86aDrNJu%2FzPk7DgIg0sxNfDh2j7lkzzdK2Xh2MYC%2FCrNPfA06JHlIAjqwn9A4mo0NAN3SMIwt5DrwgY6pgGxDJD0kdov83SbgUiGpTcBGRBsi6hF4ttXFQ2dMUqd2ekacpPJt3JzLLYdsMvedeoDPLPbh9zNEtUiG%2Fj4StzLxCXOIfg%2BfFNnhZwQsjsV2kla9gJZgs%2BG35gDxuAl04DTMtzayeMt95OvbMrwvemf6m%2F3dpkCaMDSExOErtirCfnoS%2FwJVjqGSHfe8fsifE6gqk%2BAoIyG97BuocUdXo3MOaBCbImg&X-Amz-Signature=a8531233dce351ef1bad0f45c2cc2d0f06bbcfbcb4f8c80937e76042dd194416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
