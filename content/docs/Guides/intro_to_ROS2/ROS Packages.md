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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PI72HHU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHaXR5BmvRAMjeemmMqlYaUwE0HC0cluBOX10NLj2h0CAiBU5B5hOy%2BoC4esuivavinwOtKIEmJfixK0Z7J8fNCXbCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM7EqVKVqBC4LbIPYgKtwDHkdBJJq4tTc55fJuCwU9M9CmH4MEZ%2F5bOFTAm5SsE8Bp2NRsXy82vHdkdT6CH0rgp44tsY%2B9jtGp6QuxTenTztP0XSyCIjZI1s06X7%2B%2BbMRPtsHMQbVFY%2FYhP40VU1rHfAKqGBxuWErWhGQDqDVfRrgdrBgBmsblRAFIBXcUMCFb8HjlMsu4ZGyCJ4JjuJKz01mH%2BoMs8fa7VLqR6tgOOkNsa7f5eGhWRw98g8Qy%2BGqWP7ubwid86qS%2B73BPXgNUgsy4Ox5RgOj5h%2F%2FjF7FwrS%2BzW0gEN5SQSU5XSRpZVeEkQ6yCLEWtwU%2BkLJe55QQiA7D6otDWE3z5wFQ8apWDp6DSSkve4yE8%2B7Tseh8zcW9F%2FzNoytDxviJr4YFIPxebrMGc7DdWKSb3XWLgW8PWY6PAT6oYbjoTH6yIxRxkcMxNYAJrrbiOBPoSsvLKLgkh9g0IKwDpG6Lt8qEVZEkynhNnv74JYgxfPM4nkavd%2FML94vTp9AosGBv0lA5JOHw927i5wvEzE4UrU5c6kx4eSJYzzLVsK%2FeEAiNKBeHswuw5zv1Wd1cteKCAFl%2FwJ7LVkA4Y5YltxoJXBAYpM3W6YLs%2BEXnrILBlOps0h2exmofXPV%2BJEHs77aa0p1cwpLuWxAY6pgHS1NuZQt1aXXo9FaqKVEb%2BnvR9AvTvmjad1RgVbBl3MKoIzUnZhf9jn7WsPssJ8vHRmOs90n6DwI6R8opGG5wN7ZgvXOSGHz0Y6zyERv9m%2Ba6qjga3IzBiJ8Sd9dd%2FGEMUaXmRme0J1HhiXYsLV2jaajgyzuvUJNDoAGswKdifibG85ptE8Bdh4U2GxHGZfgFM3F2JI%2BUOB47MwxqGKhZtXGIieBdy&X-Amz-Signature=1aa29dea37c862270222242fd76fb03d3eb6d1c2b2a47fe4682945fd0eb51174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PI72HHU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHaXR5BmvRAMjeemmMqlYaUwE0HC0cluBOX10NLj2h0CAiBU5B5hOy%2BoC4esuivavinwOtKIEmJfixK0Z7J8fNCXbCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM7EqVKVqBC4LbIPYgKtwDHkdBJJq4tTc55fJuCwU9M9CmH4MEZ%2F5bOFTAm5SsE8Bp2NRsXy82vHdkdT6CH0rgp44tsY%2B9jtGp6QuxTenTztP0XSyCIjZI1s06X7%2B%2BbMRPtsHMQbVFY%2FYhP40VU1rHfAKqGBxuWErWhGQDqDVfRrgdrBgBmsblRAFIBXcUMCFb8HjlMsu4ZGyCJ4JjuJKz01mH%2BoMs8fa7VLqR6tgOOkNsa7f5eGhWRw98g8Qy%2BGqWP7ubwid86qS%2B73BPXgNUgsy4Ox5RgOj5h%2F%2FjF7FwrS%2BzW0gEN5SQSU5XSRpZVeEkQ6yCLEWtwU%2BkLJe55QQiA7D6otDWE3z5wFQ8apWDp6DSSkve4yE8%2B7Tseh8zcW9F%2FzNoytDxviJr4YFIPxebrMGc7DdWKSb3XWLgW8PWY6PAT6oYbjoTH6yIxRxkcMxNYAJrrbiOBPoSsvLKLgkh9g0IKwDpG6Lt8qEVZEkynhNnv74JYgxfPM4nkavd%2FML94vTp9AosGBv0lA5JOHw927i5wvEzE4UrU5c6kx4eSJYzzLVsK%2FeEAiNKBeHswuw5zv1Wd1cteKCAFl%2FwJ7LVkA4Y5YltxoJXBAYpM3W6YLs%2BEXnrILBlOps0h2exmofXPV%2BJEHs77aa0p1cwpLuWxAY6pgHS1NuZQt1aXXo9FaqKVEb%2BnvR9AvTvmjad1RgVbBl3MKoIzUnZhf9jn7WsPssJ8vHRmOs90n6DwI6R8opGG5wN7ZgvXOSGHz0Y6zyERv9m%2Ba6qjga3IzBiJ8Sd9dd%2FGEMUaXmRme0J1HhiXYsLV2jaajgyzuvUJNDoAGswKdifibG85ptE8Bdh4U2GxHGZfgFM3F2JI%2BUOB47MwxqGKhZtXGIieBdy&X-Amz-Signature=be8164562c2b4df28b7a585ddd143a80907669cff4198730f0161f3dc0dd7e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PI72HHU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHaXR5BmvRAMjeemmMqlYaUwE0HC0cluBOX10NLj2h0CAiBU5B5hOy%2BoC4esuivavinwOtKIEmJfixK0Z7J8fNCXbCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM7EqVKVqBC4LbIPYgKtwDHkdBJJq4tTc55fJuCwU9M9CmH4MEZ%2F5bOFTAm5SsE8Bp2NRsXy82vHdkdT6CH0rgp44tsY%2B9jtGp6QuxTenTztP0XSyCIjZI1s06X7%2B%2BbMRPtsHMQbVFY%2FYhP40VU1rHfAKqGBxuWErWhGQDqDVfRrgdrBgBmsblRAFIBXcUMCFb8HjlMsu4ZGyCJ4JjuJKz01mH%2BoMs8fa7VLqR6tgOOkNsa7f5eGhWRw98g8Qy%2BGqWP7ubwid86qS%2B73BPXgNUgsy4Ox5RgOj5h%2F%2FjF7FwrS%2BzW0gEN5SQSU5XSRpZVeEkQ6yCLEWtwU%2BkLJe55QQiA7D6otDWE3z5wFQ8apWDp6DSSkve4yE8%2B7Tseh8zcW9F%2FzNoytDxviJr4YFIPxebrMGc7DdWKSb3XWLgW8PWY6PAT6oYbjoTH6yIxRxkcMxNYAJrrbiOBPoSsvLKLgkh9g0IKwDpG6Lt8qEVZEkynhNnv74JYgxfPM4nkavd%2FML94vTp9AosGBv0lA5JOHw927i5wvEzE4UrU5c6kx4eSJYzzLVsK%2FeEAiNKBeHswuw5zv1Wd1cteKCAFl%2FwJ7LVkA4Y5YltxoJXBAYpM3W6YLs%2BEXnrILBlOps0h2exmofXPV%2BJEHs77aa0p1cwpLuWxAY6pgHS1NuZQt1aXXo9FaqKVEb%2BnvR9AvTvmjad1RgVbBl3MKoIzUnZhf9jn7WsPssJ8vHRmOs90n6DwI6R8opGG5wN7ZgvXOSGHz0Y6zyERv9m%2Ba6qjga3IzBiJ8Sd9dd%2FGEMUaXmRme0J1HhiXYsLV2jaajgyzuvUJNDoAGswKdifibG85ptE8Bdh4U2GxHGZfgFM3F2JI%2BUOB47MwxqGKhZtXGIieBdy&X-Amz-Signature=6d11a427752b9a831052ba28a3898f160d174be92adb3830ecdf9476942fed44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PI72HHU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHaXR5BmvRAMjeemmMqlYaUwE0HC0cluBOX10NLj2h0CAiBU5B5hOy%2BoC4esuivavinwOtKIEmJfixK0Z7J8fNCXbCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM7EqVKVqBC4LbIPYgKtwDHkdBJJq4tTc55fJuCwU9M9CmH4MEZ%2F5bOFTAm5SsE8Bp2NRsXy82vHdkdT6CH0rgp44tsY%2B9jtGp6QuxTenTztP0XSyCIjZI1s06X7%2B%2BbMRPtsHMQbVFY%2FYhP40VU1rHfAKqGBxuWErWhGQDqDVfRrgdrBgBmsblRAFIBXcUMCFb8HjlMsu4ZGyCJ4JjuJKz01mH%2BoMs8fa7VLqR6tgOOkNsa7f5eGhWRw98g8Qy%2BGqWP7ubwid86qS%2B73BPXgNUgsy4Ox5RgOj5h%2F%2FjF7FwrS%2BzW0gEN5SQSU5XSRpZVeEkQ6yCLEWtwU%2BkLJe55QQiA7D6otDWE3z5wFQ8apWDp6DSSkve4yE8%2B7Tseh8zcW9F%2FzNoytDxviJr4YFIPxebrMGc7DdWKSb3XWLgW8PWY6PAT6oYbjoTH6yIxRxkcMxNYAJrrbiOBPoSsvLKLgkh9g0IKwDpG6Lt8qEVZEkynhNnv74JYgxfPM4nkavd%2FML94vTp9AosGBv0lA5JOHw927i5wvEzE4UrU5c6kx4eSJYzzLVsK%2FeEAiNKBeHswuw5zv1Wd1cteKCAFl%2FwJ7LVkA4Y5YltxoJXBAYpM3W6YLs%2BEXnrILBlOps0h2exmofXPV%2BJEHs77aa0p1cwpLuWxAY6pgHS1NuZQt1aXXo9FaqKVEb%2BnvR9AvTvmjad1RgVbBl3MKoIzUnZhf9jn7WsPssJ8vHRmOs90n6DwI6R8opGG5wN7ZgvXOSGHz0Y6zyERv9m%2Ba6qjga3IzBiJ8Sd9dd%2FGEMUaXmRme0J1HhiXYsLV2jaajgyzuvUJNDoAGswKdifibG85ptE8Bdh4U2GxHGZfgFM3F2JI%2BUOB47MwxqGKhZtXGIieBdy&X-Amz-Signature=add3a6446a8d0db8eec568a482de0942236f052b23d285ee4f6a8c22501d8828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PI72HHU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHaXR5BmvRAMjeemmMqlYaUwE0HC0cluBOX10NLj2h0CAiBU5B5hOy%2BoC4esuivavinwOtKIEmJfixK0Z7J8fNCXbCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM7EqVKVqBC4LbIPYgKtwDHkdBJJq4tTc55fJuCwU9M9CmH4MEZ%2F5bOFTAm5SsE8Bp2NRsXy82vHdkdT6CH0rgp44tsY%2B9jtGp6QuxTenTztP0XSyCIjZI1s06X7%2B%2BbMRPtsHMQbVFY%2FYhP40VU1rHfAKqGBxuWErWhGQDqDVfRrgdrBgBmsblRAFIBXcUMCFb8HjlMsu4ZGyCJ4JjuJKz01mH%2BoMs8fa7VLqR6tgOOkNsa7f5eGhWRw98g8Qy%2BGqWP7ubwid86qS%2B73BPXgNUgsy4Ox5RgOj5h%2F%2FjF7FwrS%2BzW0gEN5SQSU5XSRpZVeEkQ6yCLEWtwU%2BkLJe55QQiA7D6otDWE3z5wFQ8apWDp6DSSkve4yE8%2B7Tseh8zcW9F%2FzNoytDxviJr4YFIPxebrMGc7DdWKSb3XWLgW8PWY6PAT6oYbjoTH6yIxRxkcMxNYAJrrbiOBPoSsvLKLgkh9g0IKwDpG6Lt8qEVZEkynhNnv74JYgxfPM4nkavd%2FML94vTp9AosGBv0lA5JOHw927i5wvEzE4UrU5c6kx4eSJYzzLVsK%2FeEAiNKBeHswuw5zv1Wd1cteKCAFl%2FwJ7LVkA4Y5YltxoJXBAYpM3W6YLs%2BEXnrILBlOps0h2exmofXPV%2BJEHs77aa0p1cwpLuWxAY6pgHS1NuZQt1aXXo9FaqKVEb%2BnvR9AvTvmjad1RgVbBl3MKoIzUnZhf9jn7WsPssJ8vHRmOs90n6DwI6R8opGG5wN7ZgvXOSGHz0Y6zyERv9m%2Ba6qjga3IzBiJ8Sd9dd%2FGEMUaXmRme0J1HhiXYsLV2jaajgyzuvUJNDoAGswKdifibG85ptE8Bdh4U2GxHGZfgFM3F2JI%2BUOB47MwxqGKhZtXGIieBdy&X-Amz-Signature=cf0fb51986e50884b3c8ab1ed283730dbed474af89e6d1379456ba12f18153cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PI72HHU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHaXR5BmvRAMjeemmMqlYaUwE0HC0cluBOX10NLj2h0CAiBU5B5hOy%2BoC4esuivavinwOtKIEmJfixK0Z7J8fNCXbCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM7EqVKVqBC4LbIPYgKtwDHkdBJJq4tTc55fJuCwU9M9CmH4MEZ%2F5bOFTAm5SsE8Bp2NRsXy82vHdkdT6CH0rgp44tsY%2B9jtGp6QuxTenTztP0XSyCIjZI1s06X7%2B%2BbMRPtsHMQbVFY%2FYhP40VU1rHfAKqGBxuWErWhGQDqDVfRrgdrBgBmsblRAFIBXcUMCFb8HjlMsu4ZGyCJ4JjuJKz01mH%2BoMs8fa7VLqR6tgOOkNsa7f5eGhWRw98g8Qy%2BGqWP7ubwid86qS%2B73BPXgNUgsy4Ox5RgOj5h%2F%2FjF7FwrS%2BzW0gEN5SQSU5XSRpZVeEkQ6yCLEWtwU%2BkLJe55QQiA7D6otDWE3z5wFQ8apWDp6DSSkve4yE8%2B7Tseh8zcW9F%2FzNoytDxviJr4YFIPxebrMGc7DdWKSb3XWLgW8PWY6PAT6oYbjoTH6yIxRxkcMxNYAJrrbiOBPoSsvLKLgkh9g0IKwDpG6Lt8qEVZEkynhNnv74JYgxfPM4nkavd%2FML94vTp9AosGBv0lA5JOHw927i5wvEzE4UrU5c6kx4eSJYzzLVsK%2FeEAiNKBeHswuw5zv1Wd1cteKCAFl%2FwJ7LVkA4Y5YltxoJXBAYpM3W6YLs%2BEXnrILBlOps0h2exmofXPV%2BJEHs77aa0p1cwpLuWxAY6pgHS1NuZQt1aXXo9FaqKVEb%2BnvR9AvTvmjad1RgVbBl3MKoIzUnZhf9jn7WsPssJ8vHRmOs90n6DwI6R8opGG5wN7ZgvXOSGHz0Y6zyERv9m%2Ba6qjga3IzBiJ8Sd9dd%2FGEMUaXmRme0J1HhiXYsLV2jaajgyzuvUJNDoAGswKdifibG85ptE8Bdh4U2GxHGZfgFM3F2JI%2BUOB47MwxqGKhZtXGIieBdy&X-Amz-Signature=34a8db7dfb02a1b50eb0c295827608dd95ba02c19ef564aa9f8acfa0a3444d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PI72HHU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHaXR5BmvRAMjeemmMqlYaUwE0HC0cluBOX10NLj2h0CAiBU5B5hOy%2BoC4esuivavinwOtKIEmJfixK0Z7J8fNCXbCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM7EqVKVqBC4LbIPYgKtwDHkdBJJq4tTc55fJuCwU9M9CmH4MEZ%2F5bOFTAm5SsE8Bp2NRsXy82vHdkdT6CH0rgp44tsY%2B9jtGp6QuxTenTztP0XSyCIjZI1s06X7%2B%2BbMRPtsHMQbVFY%2FYhP40VU1rHfAKqGBxuWErWhGQDqDVfRrgdrBgBmsblRAFIBXcUMCFb8HjlMsu4ZGyCJ4JjuJKz01mH%2BoMs8fa7VLqR6tgOOkNsa7f5eGhWRw98g8Qy%2BGqWP7ubwid86qS%2B73BPXgNUgsy4Ox5RgOj5h%2F%2FjF7FwrS%2BzW0gEN5SQSU5XSRpZVeEkQ6yCLEWtwU%2BkLJe55QQiA7D6otDWE3z5wFQ8apWDp6DSSkve4yE8%2B7Tseh8zcW9F%2FzNoytDxviJr4YFIPxebrMGc7DdWKSb3XWLgW8PWY6PAT6oYbjoTH6yIxRxkcMxNYAJrrbiOBPoSsvLKLgkh9g0IKwDpG6Lt8qEVZEkynhNnv74JYgxfPM4nkavd%2FML94vTp9AosGBv0lA5JOHw927i5wvEzE4UrU5c6kx4eSJYzzLVsK%2FeEAiNKBeHswuw5zv1Wd1cteKCAFl%2FwJ7LVkA4Y5YltxoJXBAYpM3W6YLs%2BEXnrILBlOps0h2exmofXPV%2BJEHs77aa0p1cwpLuWxAY6pgHS1NuZQt1aXXo9FaqKVEb%2BnvR9AvTvmjad1RgVbBl3MKoIzUnZhf9jn7WsPssJ8vHRmOs90n6DwI6R8opGG5wN7ZgvXOSGHz0Y6zyERv9m%2Ba6qjga3IzBiJ8Sd9dd%2FGEMUaXmRme0J1HhiXYsLV2jaajgyzuvUJNDoAGswKdifibG85ptE8Bdh4U2GxHGZfgFM3F2JI%2BUOB47MwxqGKhZtXGIieBdy&X-Amz-Signature=ce75ca3dccffd6e61bd7b7613e4185cfbb58a0c7d92a25ea1a9ce7dbc777085a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
