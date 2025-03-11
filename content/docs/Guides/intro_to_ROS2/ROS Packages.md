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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMQ5SCA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIA%2BQxGVSXG90vApRnO%2BiCCIbsq4P8pikeBTg6KDamY9JAiEAvSOcyktgkqDPKeHAVPaQrNecRaUod2BoL4f8P8c1soAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHILpvNeZqx58hXR%2FCrcA96FPaTV5hMtVWLDkDvoK4wa1vjEeDYoWO7Ww%2FUfcgIfmCboQMwPuSVeW3wpCmW6Fw9d648AMQ8eMUMTYohx72IW2yVnAQGHvxZTVAr5iY7vkBI0Njj49RM3gtpmjiJST0KuDTST%2B%2FqRsqcgID5JbRtcmX8GH0fX1gAsGcG4K3KLGkhyVkRvKLhk8FPwkN%2FwfJEx3ltTOyNWQTJGKj7zWhseXnoeYvafgS60lGZk5jLyWSElziqc1VWFfWodb4iahn%2BAb6gcIZt5yAKzOgoppg8zN1inK5cAvZp6%2FgWKavkGhyqmJq9%2BQpsxPFFem5dEoynDFibVeVT3QM7Wcl7U2kOBcrbEthFepEixelwXg23%2FGSeLzzvljfhtYeZmRxIeubeC1OD5gfnzbMQkr2Gwx72TJ8inDogPw8pkzYZ2kqGsnxqoJ8HGG7ShM3WtnnkET1ygOak424rV500%2Bcx0uQdzndwYLpP1zQBx0uABrpsa%2BePEdNMBGIU%2B6glYbYktL69MclncM%2FA8zmX%2FfOlLyjbGGZ6ntSCaO%2B6iYu1xjbSm18RRxpUlSxMNTXwKDL%2FKGNo4elgHcY6icBzxFSq9pLBHWNIHoA%2BCmYGyyOaS2PgLs9Gtj1KF20%2FrBHg0CMM3Owb4GOqUBt38xIFAmeEdKFwbVsX3ScwVUjGgg4UutCIsOVso51U0Dhw5LHgb8Dx8sQgzo9IblXGkxJm%2FCJF1MPPdWiFoCaZSIwVg8m1s4b81N47wlU%2F1A9LzQNpQ1ZkjdaoVCpWy%2Bepg5VvyHhvSozaI3NiAO5ji845aB0GZ7yIo2YkG92TFQhn%2FfZY5qD4yhGiUjYEp6K9V2oJf4WZyNwl9rGSgLznhP9xZ%2B&X-Amz-Signature=cb61df70d47c9751d9384c0453f54096aa6006002aa725f1c3be08d958026320&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMQ5SCA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIA%2BQxGVSXG90vApRnO%2BiCCIbsq4P8pikeBTg6KDamY9JAiEAvSOcyktgkqDPKeHAVPaQrNecRaUod2BoL4f8P8c1soAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHILpvNeZqx58hXR%2FCrcA96FPaTV5hMtVWLDkDvoK4wa1vjEeDYoWO7Ww%2FUfcgIfmCboQMwPuSVeW3wpCmW6Fw9d648AMQ8eMUMTYohx72IW2yVnAQGHvxZTVAr5iY7vkBI0Njj49RM3gtpmjiJST0KuDTST%2B%2FqRsqcgID5JbRtcmX8GH0fX1gAsGcG4K3KLGkhyVkRvKLhk8FPwkN%2FwfJEx3ltTOyNWQTJGKj7zWhseXnoeYvafgS60lGZk5jLyWSElziqc1VWFfWodb4iahn%2BAb6gcIZt5yAKzOgoppg8zN1inK5cAvZp6%2FgWKavkGhyqmJq9%2BQpsxPFFem5dEoynDFibVeVT3QM7Wcl7U2kOBcrbEthFepEixelwXg23%2FGSeLzzvljfhtYeZmRxIeubeC1OD5gfnzbMQkr2Gwx72TJ8inDogPw8pkzYZ2kqGsnxqoJ8HGG7ShM3WtnnkET1ygOak424rV500%2Bcx0uQdzndwYLpP1zQBx0uABrpsa%2BePEdNMBGIU%2B6glYbYktL69MclncM%2FA8zmX%2FfOlLyjbGGZ6ntSCaO%2B6iYu1xjbSm18RRxpUlSxMNTXwKDL%2FKGNo4elgHcY6icBzxFSq9pLBHWNIHoA%2BCmYGyyOaS2PgLs9Gtj1KF20%2FrBHg0CMM3Owb4GOqUBt38xIFAmeEdKFwbVsX3ScwVUjGgg4UutCIsOVso51U0Dhw5LHgb8Dx8sQgzo9IblXGkxJm%2FCJF1MPPdWiFoCaZSIwVg8m1s4b81N47wlU%2F1A9LzQNpQ1ZkjdaoVCpWy%2Bepg5VvyHhvSozaI3NiAO5ji845aB0GZ7yIo2YkG92TFQhn%2FfZY5qD4yhGiUjYEp6K9V2oJf4WZyNwl9rGSgLznhP9xZ%2B&X-Amz-Signature=4bebc46c0ff027bbe839451091bb9a5ed47078e764b81fa08a3d31f3c3b8d7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMQ5SCA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIA%2BQxGVSXG90vApRnO%2BiCCIbsq4P8pikeBTg6KDamY9JAiEAvSOcyktgkqDPKeHAVPaQrNecRaUod2BoL4f8P8c1soAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHILpvNeZqx58hXR%2FCrcA96FPaTV5hMtVWLDkDvoK4wa1vjEeDYoWO7Ww%2FUfcgIfmCboQMwPuSVeW3wpCmW6Fw9d648AMQ8eMUMTYohx72IW2yVnAQGHvxZTVAr5iY7vkBI0Njj49RM3gtpmjiJST0KuDTST%2B%2FqRsqcgID5JbRtcmX8GH0fX1gAsGcG4K3KLGkhyVkRvKLhk8FPwkN%2FwfJEx3ltTOyNWQTJGKj7zWhseXnoeYvafgS60lGZk5jLyWSElziqc1VWFfWodb4iahn%2BAb6gcIZt5yAKzOgoppg8zN1inK5cAvZp6%2FgWKavkGhyqmJq9%2BQpsxPFFem5dEoynDFibVeVT3QM7Wcl7U2kOBcrbEthFepEixelwXg23%2FGSeLzzvljfhtYeZmRxIeubeC1OD5gfnzbMQkr2Gwx72TJ8inDogPw8pkzYZ2kqGsnxqoJ8HGG7ShM3WtnnkET1ygOak424rV500%2Bcx0uQdzndwYLpP1zQBx0uABrpsa%2BePEdNMBGIU%2B6glYbYktL69MclncM%2FA8zmX%2FfOlLyjbGGZ6ntSCaO%2B6iYu1xjbSm18RRxpUlSxMNTXwKDL%2FKGNo4elgHcY6icBzxFSq9pLBHWNIHoA%2BCmYGyyOaS2PgLs9Gtj1KF20%2FrBHg0CMM3Owb4GOqUBt38xIFAmeEdKFwbVsX3ScwVUjGgg4UutCIsOVso51U0Dhw5LHgb8Dx8sQgzo9IblXGkxJm%2FCJF1MPPdWiFoCaZSIwVg8m1s4b81N47wlU%2F1A9LzQNpQ1ZkjdaoVCpWy%2Bepg5VvyHhvSozaI3NiAO5ji845aB0GZ7yIo2YkG92TFQhn%2FfZY5qD4yhGiUjYEp6K9V2oJf4WZyNwl9rGSgLznhP9xZ%2B&X-Amz-Signature=92e8897849fea5e30739690fb8b47a5fbbe56116a3a13ad7a0ff1a7a6f6c233d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMQ5SCA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIA%2BQxGVSXG90vApRnO%2BiCCIbsq4P8pikeBTg6KDamY9JAiEAvSOcyktgkqDPKeHAVPaQrNecRaUod2BoL4f8P8c1soAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHILpvNeZqx58hXR%2FCrcA96FPaTV5hMtVWLDkDvoK4wa1vjEeDYoWO7Ww%2FUfcgIfmCboQMwPuSVeW3wpCmW6Fw9d648AMQ8eMUMTYohx72IW2yVnAQGHvxZTVAr5iY7vkBI0Njj49RM3gtpmjiJST0KuDTST%2B%2FqRsqcgID5JbRtcmX8GH0fX1gAsGcG4K3KLGkhyVkRvKLhk8FPwkN%2FwfJEx3ltTOyNWQTJGKj7zWhseXnoeYvafgS60lGZk5jLyWSElziqc1VWFfWodb4iahn%2BAb6gcIZt5yAKzOgoppg8zN1inK5cAvZp6%2FgWKavkGhyqmJq9%2BQpsxPFFem5dEoynDFibVeVT3QM7Wcl7U2kOBcrbEthFepEixelwXg23%2FGSeLzzvljfhtYeZmRxIeubeC1OD5gfnzbMQkr2Gwx72TJ8inDogPw8pkzYZ2kqGsnxqoJ8HGG7ShM3WtnnkET1ygOak424rV500%2Bcx0uQdzndwYLpP1zQBx0uABrpsa%2BePEdNMBGIU%2B6glYbYktL69MclncM%2FA8zmX%2FfOlLyjbGGZ6ntSCaO%2B6iYu1xjbSm18RRxpUlSxMNTXwKDL%2FKGNo4elgHcY6icBzxFSq9pLBHWNIHoA%2BCmYGyyOaS2PgLs9Gtj1KF20%2FrBHg0CMM3Owb4GOqUBt38xIFAmeEdKFwbVsX3ScwVUjGgg4UutCIsOVso51U0Dhw5LHgb8Dx8sQgzo9IblXGkxJm%2FCJF1MPPdWiFoCaZSIwVg8m1s4b81N47wlU%2F1A9LzQNpQ1ZkjdaoVCpWy%2Bepg5VvyHhvSozaI3NiAO5ji845aB0GZ7yIo2YkG92TFQhn%2FfZY5qD4yhGiUjYEp6K9V2oJf4WZyNwl9rGSgLznhP9xZ%2B&X-Amz-Signature=1265807f489d01d54ac4483bd6d99c9f9d05e5e35ed2aa96bae585bfb3772044&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMQ5SCA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIA%2BQxGVSXG90vApRnO%2BiCCIbsq4P8pikeBTg6KDamY9JAiEAvSOcyktgkqDPKeHAVPaQrNecRaUod2BoL4f8P8c1soAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHILpvNeZqx58hXR%2FCrcA96FPaTV5hMtVWLDkDvoK4wa1vjEeDYoWO7Ww%2FUfcgIfmCboQMwPuSVeW3wpCmW6Fw9d648AMQ8eMUMTYohx72IW2yVnAQGHvxZTVAr5iY7vkBI0Njj49RM3gtpmjiJST0KuDTST%2B%2FqRsqcgID5JbRtcmX8GH0fX1gAsGcG4K3KLGkhyVkRvKLhk8FPwkN%2FwfJEx3ltTOyNWQTJGKj7zWhseXnoeYvafgS60lGZk5jLyWSElziqc1VWFfWodb4iahn%2BAb6gcIZt5yAKzOgoppg8zN1inK5cAvZp6%2FgWKavkGhyqmJq9%2BQpsxPFFem5dEoynDFibVeVT3QM7Wcl7U2kOBcrbEthFepEixelwXg23%2FGSeLzzvljfhtYeZmRxIeubeC1OD5gfnzbMQkr2Gwx72TJ8inDogPw8pkzYZ2kqGsnxqoJ8HGG7ShM3WtnnkET1ygOak424rV500%2Bcx0uQdzndwYLpP1zQBx0uABrpsa%2BePEdNMBGIU%2B6glYbYktL69MclncM%2FA8zmX%2FfOlLyjbGGZ6ntSCaO%2B6iYu1xjbSm18RRxpUlSxMNTXwKDL%2FKGNo4elgHcY6icBzxFSq9pLBHWNIHoA%2BCmYGyyOaS2PgLs9Gtj1KF20%2FrBHg0CMM3Owb4GOqUBt38xIFAmeEdKFwbVsX3ScwVUjGgg4UutCIsOVso51U0Dhw5LHgb8Dx8sQgzo9IblXGkxJm%2FCJF1MPPdWiFoCaZSIwVg8m1s4b81N47wlU%2F1A9LzQNpQ1ZkjdaoVCpWy%2Bepg5VvyHhvSozaI3NiAO5ji845aB0GZ7yIo2YkG92TFQhn%2FfZY5qD4yhGiUjYEp6K9V2oJf4WZyNwl9rGSgLznhP9xZ%2B&X-Amz-Signature=6e99de233e62e02f2f4ed1e0f97b6c9e25706b460625ba3c0d4a1368bd0e0542&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMQ5SCA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIA%2BQxGVSXG90vApRnO%2BiCCIbsq4P8pikeBTg6KDamY9JAiEAvSOcyktgkqDPKeHAVPaQrNecRaUod2BoL4f8P8c1soAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHILpvNeZqx58hXR%2FCrcA96FPaTV5hMtVWLDkDvoK4wa1vjEeDYoWO7Ww%2FUfcgIfmCboQMwPuSVeW3wpCmW6Fw9d648AMQ8eMUMTYohx72IW2yVnAQGHvxZTVAr5iY7vkBI0Njj49RM3gtpmjiJST0KuDTST%2B%2FqRsqcgID5JbRtcmX8GH0fX1gAsGcG4K3KLGkhyVkRvKLhk8FPwkN%2FwfJEx3ltTOyNWQTJGKj7zWhseXnoeYvafgS60lGZk5jLyWSElziqc1VWFfWodb4iahn%2BAb6gcIZt5yAKzOgoppg8zN1inK5cAvZp6%2FgWKavkGhyqmJq9%2BQpsxPFFem5dEoynDFibVeVT3QM7Wcl7U2kOBcrbEthFepEixelwXg23%2FGSeLzzvljfhtYeZmRxIeubeC1OD5gfnzbMQkr2Gwx72TJ8inDogPw8pkzYZ2kqGsnxqoJ8HGG7ShM3WtnnkET1ygOak424rV500%2Bcx0uQdzndwYLpP1zQBx0uABrpsa%2BePEdNMBGIU%2B6glYbYktL69MclncM%2FA8zmX%2FfOlLyjbGGZ6ntSCaO%2B6iYu1xjbSm18RRxpUlSxMNTXwKDL%2FKGNo4elgHcY6icBzxFSq9pLBHWNIHoA%2BCmYGyyOaS2PgLs9Gtj1KF20%2FrBHg0CMM3Owb4GOqUBt38xIFAmeEdKFwbVsX3ScwVUjGgg4UutCIsOVso51U0Dhw5LHgb8Dx8sQgzo9IblXGkxJm%2FCJF1MPPdWiFoCaZSIwVg8m1s4b81N47wlU%2F1A9LzQNpQ1ZkjdaoVCpWy%2Bepg5VvyHhvSozaI3NiAO5ji845aB0GZ7yIo2YkG92TFQhn%2FfZY5qD4yhGiUjYEp6K9V2oJf4WZyNwl9rGSgLznhP9xZ%2B&X-Amz-Signature=d9a6a0f9f456fa9c9233bdd44c51c694dfc71802a72b19b22fa6e69aa3afce4f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMQ5SCA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIA%2BQxGVSXG90vApRnO%2BiCCIbsq4P8pikeBTg6KDamY9JAiEAvSOcyktgkqDPKeHAVPaQrNecRaUod2BoL4f8P8c1soAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHILpvNeZqx58hXR%2FCrcA96FPaTV5hMtVWLDkDvoK4wa1vjEeDYoWO7Ww%2FUfcgIfmCboQMwPuSVeW3wpCmW6Fw9d648AMQ8eMUMTYohx72IW2yVnAQGHvxZTVAr5iY7vkBI0Njj49RM3gtpmjiJST0KuDTST%2B%2FqRsqcgID5JbRtcmX8GH0fX1gAsGcG4K3KLGkhyVkRvKLhk8FPwkN%2FwfJEx3ltTOyNWQTJGKj7zWhseXnoeYvafgS60lGZk5jLyWSElziqc1VWFfWodb4iahn%2BAb6gcIZt5yAKzOgoppg8zN1inK5cAvZp6%2FgWKavkGhyqmJq9%2BQpsxPFFem5dEoynDFibVeVT3QM7Wcl7U2kOBcrbEthFepEixelwXg23%2FGSeLzzvljfhtYeZmRxIeubeC1OD5gfnzbMQkr2Gwx72TJ8inDogPw8pkzYZ2kqGsnxqoJ8HGG7ShM3WtnnkET1ygOak424rV500%2Bcx0uQdzndwYLpP1zQBx0uABrpsa%2BePEdNMBGIU%2B6glYbYktL69MclncM%2FA8zmX%2FfOlLyjbGGZ6ntSCaO%2B6iYu1xjbSm18RRxpUlSxMNTXwKDL%2FKGNo4elgHcY6icBzxFSq9pLBHWNIHoA%2BCmYGyyOaS2PgLs9Gtj1KF20%2FrBHg0CMM3Owb4GOqUBt38xIFAmeEdKFwbVsX3ScwVUjGgg4UutCIsOVso51U0Dhw5LHgb8Dx8sQgzo9IblXGkxJm%2FCJF1MPPdWiFoCaZSIwVg8m1s4b81N47wlU%2F1A9LzQNpQ1ZkjdaoVCpWy%2Bepg5VvyHhvSozaI3NiAO5ji845aB0GZ7yIo2YkG92TFQhn%2FfZY5qD4yhGiUjYEp6K9V2oJf4WZyNwl9rGSgLznhP9xZ%2B&X-Amz-Signature=689b2910f57e66bf432770fedb9d16da8453407f7812a93252c16b2188d64924&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
