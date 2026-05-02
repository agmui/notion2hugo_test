---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SVAZCKP%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC7z3Wk0eqp3TOsV75ZcsrV7f7ijVBubfOqm59KEM6idAIhANn6G8QNQn52M05n3hN8REcV7X4dxPD%2B9UHyL7hH3FleKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0eTelrtyUBLksxDcq3ANOLRTUezfSMgNyg%2FHNQELqnb4mQQO4hbMiW9r%2FANaOTd6uoFuS7uaoQxtX3sAfV9gNq%2F6du2afs3F6TVhFfZYJiw2gE4l0wgme5iDPquwrPABM%2BMH9%2BcakUM5O9xpwIQ%2F7hGjL5Qts6A3zi1BNRucHrFCWaFjSsKYXyJiECN%2F0NIaIF%2BZN2w0BO9AyLlfKZ99Q5OPa49RH3NRuFyldUzw2tDyS1%2BHBZoZVFwYmfj3heikbdjyCwM16raSBIHC2SB23Q%2FavIyuyhA%2FgPgrmNYWYNzLyEdo%2BfPLAQv6a403EXPUQjiHVRwyrTrPdmpH%2FQEBqqTKVNhsjMpBR2Yibe71kWyoWGQMvYUtcZ%2FoOHLtUbcSlMJr2XS%2BgzQ3QsoD58ceDdii6oZtt7%2BgWcEJmxr8V%2BR9NBZNgfvVKWUmE2wBvZ9JPYyXBM8XQotpz8V5pINArCz1HQb3quiy21NZosZMP1wfcU3hTyKJw8p%2FCSMAnhnv6Z1qOCKpLmqtDdseFBHRk0XjBgNLzh1knf5fFBoqvSfqhoJDSp%2Fi%2FuI%2F0G2Y%2BZSq%2B%2BF3k%2BpOPYewkX5qM8Hx4qP%2BUsmcSFLpVGeP0V3wzHlqmStlr01qTJFcnze3iBPcWdYIfdbq2Bo7JNzC4ptXPBjqkATNHii7dscoBoP3uxk9kSdEsj1lTDGJcAInRhGY%2Fj%2Be36TYUX57ucNSEuQEInRqEY27jgSm%2Fid2RkIUzSFln20yc0C5eT11OlhG77Dni964Btz4Kf9yoHdZ%2FLxkmbGTTTFo5KU9Jt174kLzRb%2BA%2B0PQlA4l2ZzuVKO34Y35yerYaS6k%2FUWzuB4%2FKiqYuTugrsteHHyFFSmHqiRkD3fJSyp8wHuZC&X-Amz-Signature=4288028ce41b4727a0245e5548cc8fb8c610b05803a7bcc5e3d4fedbbed687d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SVAZCKP%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC7z3Wk0eqp3TOsV75ZcsrV7f7ijVBubfOqm59KEM6idAIhANn6G8QNQn52M05n3hN8REcV7X4dxPD%2B9UHyL7hH3FleKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0eTelrtyUBLksxDcq3ANOLRTUezfSMgNyg%2FHNQELqnb4mQQO4hbMiW9r%2FANaOTd6uoFuS7uaoQxtX3sAfV9gNq%2F6du2afs3F6TVhFfZYJiw2gE4l0wgme5iDPquwrPABM%2BMH9%2BcakUM5O9xpwIQ%2F7hGjL5Qts6A3zi1BNRucHrFCWaFjSsKYXyJiECN%2F0NIaIF%2BZN2w0BO9AyLlfKZ99Q5OPa49RH3NRuFyldUzw2tDyS1%2BHBZoZVFwYmfj3heikbdjyCwM16raSBIHC2SB23Q%2FavIyuyhA%2FgPgrmNYWYNzLyEdo%2BfPLAQv6a403EXPUQjiHVRwyrTrPdmpH%2FQEBqqTKVNhsjMpBR2Yibe71kWyoWGQMvYUtcZ%2FoOHLtUbcSlMJr2XS%2BgzQ3QsoD58ceDdii6oZtt7%2BgWcEJmxr8V%2BR9NBZNgfvVKWUmE2wBvZ9JPYyXBM8XQotpz8V5pINArCz1HQb3quiy21NZosZMP1wfcU3hTyKJw8p%2FCSMAnhnv6Z1qOCKpLmqtDdseFBHRk0XjBgNLzh1knf5fFBoqvSfqhoJDSp%2Fi%2FuI%2F0G2Y%2BZSq%2B%2BF3k%2BpOPYewkX5qM8Hx4qP%2BUsmcSFLpVGeP0V3wzHlqmStlr01qTJFcnze3iBPcWdYIfdbq2Bo7JNzC4ptXPBjqkATNHii7dscoBoP3uxk9kSdEsj1lTDGJcAInRhGY%2Fj%2Be36TYUX57ucNSEuQEInRqEY27jgSm%2Fid2RkIUzSFln20yc0C5eT11OlhG77Dni964Btz4Kf9yoHdZ%2FLxkmbGTTTFo5KU9Jt174kLzRb%2BA%2B0PQlA4l2ZzuVKO34Y35yerYaS6k%2FUWzuB4%2FKiqYuTugrsteHHyFFSmHqiRkD3fJSyp8wHuZC&X-Amz-Signature=36b1f54d934ee0bd1084b4e3bf8003ee3f0d4c08bb2929c21409781df5f63f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SVAZCKP%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC7z3Wk0eqp3TOsV75ZcsrV7f7ijVBubfOqm59KEM6idAIhANn6G8QNQn52M05n3hN8REcV7X4dxPD%2B9UHyL7hH3FleKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0eTelrtyUBLksxDcq3ANOLRTUezfSMgNyg%2FHNQELqnb4mQQO4hbMiW9r%2FANaOTd6uoFuS7uaoQxtX3sAfV9gNq%2F6du2afs3F6TVhFfZYJiw2gE4l0wgme5iDPquwrPABM%2BMH9%2BcakUM5O9xpwIQ%2F7hGjL5Qts6A3zi1BNRucHrFCWaFjSsKYXyJiECN%2F0NIaIF%2BZN2w0BO9AyLlfKZ99Q5OPa49RH3NRuFyldUzw2tDyS1%2BHBZoZVFwYmfj3heikbdjyCwM16raSBIHC2SB23Q%2FavIyuyhA%2FgPgrmNYWYNzLyEdo%2BfPLAQv6a403EXPUQjiHVRwyrTrPdmpH%2FQEBqqTKVNhsjMpBR2Yibe71kWyoWGQMvYUtcZ%2FoOHLtUbcSlMJr2XS%2BgzQ3QsoD58ceDdii6oZtt7%2BgWcEJmxr8V%2BR9NBZNgfvVKWUmE2wBvZ9JPYyXBM8XQotpz8V5pINArCz1HQb3quiy21NZosZMP1wfcU3hTyKJw8p%2FCSMAnhnv6Z1qOCKpLmqtDdseFBHRk0XjBgNLzh1knf5fFBoqvSfqhoJDSp%2Fi%2FuI%2F0G2Y%2BZSq%2B%2BF3k%2BpOPYewkX5qM8Hx4qP%2BUsmcSFLpVGeP0V3wzHlqmStlr01qTJFcnze3iBPcWdYIfdbq2Bo7JNzC4ptXPBjqkATNHii7dscoBoP3uxk9kSdEsj1lTDGJcAInRhGY%2Fj%2Be36TYUX57ucNSEuQEInRqEY27jgSm%2Fid2RkIUzSFln20yc0C5eT11OlhG77Dni964Btz4Kf9yoHdZ%2FLxkmbGTTTFo5KU9Jt174kLzRb%2BA%2B0PQlA4l2ZzuVKO34Y35yerYaS6k%2FUWzuB4%2FKiqYuTugrsteHHyFFSmHqiRkD3fJSyp8wHuZC&X-Amz-Signature=0559f94848235102904eec7bd5f280d94d2c7fe3bc5a35054a083192a24b44de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SVAZCKP%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC7z3Wk0eqp3TOsV75ZcsrV7f7ijVBubfOqm59KEM6idAIhANn6G8QNQn52M05n3hN8REcV7X4dxPD%2B9UHyL7hH3FleKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0eTelrtyUBLksxDcq3ANOLRTUezfSMgNyg%2FHNQELqnb4mQQO4hbMiW9r%2FANaOTd6uoFuS7uaoQxtX3sAfV9gNq%2F6du2afs3F6TVhFfZYJiw2gE4l0wgme5iDPquwrPABM%2BMH9%2BcakUM5O9xpwIQ%2F7hGjL5Qts6A3zi1BNRucHrFCWaFjSsKYXyJiECN%2F0NIaIF%2BZN2w0BO9AyLlfKZ99Q5OPa49RH3NRuFyldUzw2tDyS1%2BHBZoZVFwYmfj3heikbdjyCwM16raSBIHC2SB23Q%2FavIyuyhA%2FgPgrmNYWYNzLyEdo%2BfPLAQv6a403EXPUQjiHVRwyrTrPdmpH%2FQEBqqTKVNhsjMpBR2Yibe71kWyoWGQMvYUtcZ%2FoOHLtUbcSlMJr2XS%2BgzQ3QsoD58ceDdii6oZtt7%2BgWcEJmxr8V%2BR9NBZNgfvVKWUmE2wBvZ9JPYyXBM8XQotpz8V5pINArCz1HQb3quiy21NZosZMP1wfcU3hTyKJw8p%2FCSMAnhnv6Z1qOCKpLmqtDdseFBHRk0XjBgNLzh1knf5fFBoqvSfqhoJDSp%2Fi%2FuI%2F0G2Y%2BZSq%2B%2BF3k%2BpOPYewkX5qM8Hx4qP%2BUsmcSFLpVGeP0V3wzHlqmStlr01qTJFcnze3iBPcWdYIfdbq2Bo7JNzC4ptXPBjqkATNHii7dscoBoP3uxk9kSdEsj1lTDGJcAInRhGY%2Fj%2Be36TYUX57ucNSEuQEInRqEY27jgSm%2Fid2RkIUzSFln20yc0C5eT11OlhG77Dni964Btz4Kf9yoHdZ%2FLxkmbGTTTFo5KU9Jt174kLzRb%2BA%2B0PQlA4l2ZzuVKO34Y35yerYaS6k%2FUWzuB4%2FKiqYuTugrsteHHyFFSmHqiRkD3fJSyp8wHuZC&X-Amz-Signature=0dd3cf01c98652159cb826b5118842f0a808f0238d1e37003f6cafbfb508b8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SVAZCKP%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC7z3Wk0eqp3TOsV75ZcsrV7f7ijVBubfOqm59KEM6idAIhANn6G8QNQn52M05n3hN8REcV7X4dxPD%2B9UHyL7hH3FleKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0eTelrtyUBLksxDcq3ANOLRTUezfSMgNyg%2FHNQELqnb4mQQO4hbMiW9r%2FANaOTd6uoFuS7uaoQxtX3sAfV9gNq%2F6du2afs3F6TVhFfZYJiw2gE4l0wgme5iDPquwrPABM%2BMH9%2BcakUM5O9xpwIQ%2F7hGjL5Qts6A3zi1BNRucHrFCWaFjSsKYXyJiECN%2F0NIaIF%2BZN2w0BO9AyLlfKZ99Q5OPa49RH3NRuFyldUzw2tDyS1%2BHBZoZVFwYmfj3heikbdjyCwM16raSBIHC2SB23Q%2FavIyuyhA%2FgPgrmNYWYNzLyEdo%2BfPLAQv6a403EXPUQjiHVRwyrTrPdmpH%2FQEBqqTKVNhsjMpBR2Yibe71kWyoWGQMvYUtcZ%2FoOHLtUbcSlMJr2XS%2BgzQ3QsoD58ceDdii6oZtt7%2BgWcEJmxr8V%2BR9NBZNgfvVKWUmE2wBvZ9JPYyXBM8XQotpz8V5pINArCz1HQb3quiy21NZosZMP1wfcU3hTyKJw8p%2FCSMAnhnv6Z1qOCKpLmqtDdseFBHRk0XjBgNLzh1knf5fFBoqvSfqhoJDSp%2Fi%2FuI%2F0G2Y%2BZSq%2B%2BF3k%2BpOPYewkX5qM8Hx4qP%2BUsmcSFLpVGeP0V3wzHlqmStlr01qTJFcnze3iBPcWdYIfdbq2Bo7JNzC4ptXPBjqkATNHii7dscoBoP3uxk9kSdEsj1lTDGJcAInRhGY%2Fj%2Be36TYUX57ucNSEuQEInRqEY27jgSm%2Fid2RkIUzSFln20yc0C5eT11OlhG77Dni964Btz4Kf9yoHdZ%2FLxkmbGTTTFo5KU9Jt174kLzRb%2BA%2B0PQlA4l2ZzuVKO34Y35yerYaS6k%2FUWzuB4%2FKiqYuTugrsteHHyFFSmHqiRkD3fJSyp8wHuZC&X-Amz-Signature=ea9026b7a0addc51c7656fd1ae4fd5588015901ba6d97c9f8fb56aca9aabd18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SVAZCKP%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC7z3Wk0eqp3TOsV75ZcsrV7f7ijVBubfOqm59KEM6idAIhANn6G8QNQn52M05n3hN8REcV7X4dxPD%2B9UHyL7hH3FleKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0eTelrtyUBLksxDcq3ANOLRTUezfSMgNyg%2FHNQELqnb4mQQO4hbMiW9r%2FANaOTd6uoFuS7uaoQxtX3sAfV9gNq%2F6du2afs3F6TVhFfZYJiw2gE4l0wgme5iDPquwrPABM%2BMH9%2BcakUM5O9xpwIQ%2F7hGjL5Qts6A3zi1BNRucHrFCWaFjSsKYXyJiECN%2F0NIaIF%2BZN2w0BO9AyLlfKZ99Q5OPa49RH3NRuFyldUzw2tDyS1%2BHBZoZVFwYmfj3heikbdjyCwM16raSBIHC2SB23Q%2FavIyuyhA%2FgPgrmNYWYNzLyEdo%2BfPLAQv6a403EXPUQjiHVRwyrTrPdmpH%2FQEBqqTKVNhsjMpBR2Yibe71kWyoWGQMvYUtcZ%2FoOHLtUbcSlMJr2XS%2BgzQ3QsoD58ceDdii6oZtt7%2BgWcEJmxr8V%2BR9NBZNgfvVKWUmE2wBvZ9JPYyXBM8XQotpz8V5pINArCz1HQb3quiy21NZosZMP1wfcU3hTyKJw8p%2FCSMAnhnv6Z1qOCKpLmqtDdseFBHRk0XjBgNLzh1knf5fFBoqvSfqhoJDSp%2Fi%2FuI%2F0G2Y%2BZSq%2B%2BF3k%2BpOPYewkX5qM8Hx4qP%2BUsmcSFLpVGeP0V3wzHlqmStlr01qTJFcnze3iBPcWdYIfdbq2Bo7JNzC4ptXPBjqkATNHii7dscoBoP3uxk9kSdEsj1lTDGJcAInRhGY%2Fj%2Be36TYUX57ucNSEuQEInRqEY27jgSm%2Fid2RkIUzSFln20yc0C5eT11OlhG77Dni964Btz4Kf9yoHdZ%2FLxkmbGTTTFo5KU9Jt174kLzRb%2BA%2B0PQlA4l2ZzuVKO34Y35yerYaS6k%2FUWzuB4%2FKiqYuTugrsteHHyFFSmHqiRkD3fJSyp8wHuZC&X-Amz-Signature=ecc1173bff6890a746dd903b96e503f7bd2422266dce064760bed7fd870e3a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SVAZCKP%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC7z3Wk0eqp3TOsV75ZcsrV7f7ijVBubfOqm59KEM6idAIhANn6G8QNQn52M05n3hN8REcV7X4dxPD%2B9UHyL7hH3FleKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0eTelrtyUBLksxDcq3ANOLRTUezfSMgNyg%2FHNQELqnb4mQQO4hbMiW9r%2FANaOTd6uoFuS7uaoQxtX3sAfV9gNq%2F6du2afs3F6TVhFfZYJiw2gE4l0wgme5iDPquwrPABM%2BMH9%2BcakUM5O9xpwIQ%2F7hGjL5Qts6A3zi1BNRucHrFCWaFjSsKYXyJiECN%2F0NIaIF%2BZN2w0BO9AyLlfKZ99Q5OPa49RH3NRuFyldUzw2tDyS1%2BHBZoZVFwYmfj3heikbdjyCwM16raSBIHC2SB23Q%2FavIyuyhA%2FgPgrmNYWYNzLyEdo%2BfPLAQv6a403EXPUQjiHVRwyrTrPdmpH%2FQEBqqTKVNhsjMpBR2Yibe71kWyoWGQMvYUtcZ%2FoOHLtUbcSlMJr2XS%2BgzQ3QsoD58ceDdii6oZtt7%2BgWcEJmxr8V%2BR9NBZNgfvVKWUmE2wBvZ9JPYyXBM8XQotpz8V5pINArCz1HQb3quiy21NZosZMP1wfcU3hTyKJw8p%2FCSMAnhnv6Z1qOCKpLmqtDdseFBHRk0XjBgNLzh1knf5fFBoqvSfqhoJDSp%2Fi%2FuI%2F0G2Y%2BZSq%2B%2BF3k%2BpOPYewkX5qM8Hx4qP%2BUsmcSFLpVGeP0V3wzHlqmStlr01qTJFcnze3iBPcWdYIfdbq2Bo7JNzC4ptXPBjqkATNHii7dscoBoP3uxk9kSdEsj1lTDGJcAInRhGY%2Fj%2Be36TYUX57ucNSEuQEInRqEY27jgSm%2Fid2RkIUzSFln20yc0C5eT11OlhG77Dni964Btz4Kf9yoHdZ%2FLxkmbGTTTFo5KU9Jt174kLzRb%2BA%2B0PQlA4l2ZzuVKO34Y35yerYaS6k%2FUWzuB4%2FKiqYuTugrsteHHyFFSmHqiRkD3fJSyp8wHuZC&X-Amz-Signature=cf31ebcf678205683a3d54a8977c8e4b8a184114e0a9115e52b0445b0fb870c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
