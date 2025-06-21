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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCGSVDA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDGezpc19yCkSaRKtCTOoHTYIAIsybjn8q2B3%2FVxMAjgIgVK7GsLA166bSD9OByQvJXR%2BWZ8I6AL%2FAlAsU%2BdYKDC0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfe5P9qZfKPF1L05ircA%2BQKLcmL6a1NoHa0UNnSMV19V7W0IhHyQEbsq%2BzfFMkPtZeTtuz2N9T38wpUcoDfBMwqg7jUIPTmL6fOlu4WeDemBh6vqNMEDPCEFBzlKgTYIeCKVwUTck5IsjyofvhT%2BQlkoiPugRSxptFyQjKTstEu6xqPyGEExWpjM0ZVU5szFCNd6Kp7kh4TXMpTaZiMiwRZ%2Bt6esSukl9wB2VhVrjUubXqMKbnjsnzBLOLoNA%2B6J0ZSm2bMLUKyx647DxHnzPPKls1HX%2B8xwxJeJdZZiHGEideTyGUo7Za%2FmNB6yq6iMYFTea2u2bqzyh4RV8AKOFxZ%2BmE6q6WVnfi%2F6uwYZFhDgBl6i%2Frc4FB7hRdu7uCrl3dwGy9V7uMoljXvFEtSt6zokTCeLjUVmk7PC%2BzYtBgUws7cO3URJ0EkXIq8R7hw7MGFaBig947fxAFjmIyJH9YtDVXWGjjXVVv9A9d3aE%2BMXlQexper0ZD0DgHDweeyfwUjo%2FEnvvyXz7ifvpEh3VFQIfuT3K54rUhjqPXb3R%2B%2BFG9MqSsNCttaKQZYDfcebO2dkpOIUiU%2FcVxNl88qlCZU%2BCibMbGHjQQzcCw5TZnM5I6yiZVjzp%2BW9l%2FcbrmW2R9LYfnG497SNqUlMN3d3MIGOqUB5P33jsCFxGZGFBD4bEQen374bxjsoV4GBMFExL18%2Fgk3H%2B%2FxVtj1Lv1HMklg%2BFXejxQa%2Br7NAcN3yfZxbFGTYwUTUaAVbGVePcfALb4H2Pre1ECLA4LDs1QujD0bDr1dt8wyIWuIs8u2GBkMAaa9CeLyY6dGWEvPn1DCpphUE4ITmI4L0OYgHYDB9EVqE4qhF9nff4VyIvPie0uu0W6hopWwpeUQ&X-Amz-Signature=6c84010f3db7fec8040bc1a3a7e488e4772f21f54f8ca1ab9c924ff7093ce5b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCGSVDA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDGezpc19yCkSaRKtCTOoHTYIAIsybjn8q2B3%2FVxMAjgIgVK7GsLA166bSD9OByQvJXR%2BWZ8I6AL%2FAlAsU%2BdYKDC0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfe5P9qZfKPF1L05ircA%2BQKLcmL6a1NoHa0UNnSMV19V7W0IhHyQEbsq%2BzfFMkPtZeTtuz2N9T38wpUcoDfBMwqg7jUIPTmL6fOlu4WeDemBh6vqNMEDPCEFBzlKgTYIeCKVwUTck5IsjyofvhT%2BQlkoiPugRSxptFyQjKTstEu6xqPyGEExWpjM0ZVU5szFCNd6Kp7kh4TXMpTaZiMiwRZ%2Bt6esSukl9wB2VhVrjUubXqMKbnjsnzBLOLoNA%2B6J0ZSm2bMLUKyx647DxHnzPPKls1HX%2B8xwxJeJdZZiHGEideTyGUo7Za%2FmNB6yq6iMYFTea2u2bqzyh4RV8AKOFxZ%2BmE6q6WVnfi%2F6uwYZFhDgBl6i%2Frc4FB7hRdu7uCrl3dwGy9V7uMoljXvFEtSt6zokTCeLjUVmk7PC%2BzYtBgUws7cO3URJ0EkXIq8R7hw7MGFaBig947fxAFjmIyJH9YtDVXWGjjXVVv9A9d3aE%2BMXlQexper0ZD0DgHDweeyfwUjo%2FEnvvyXz7ifvpEh3VFQIfuT3K54rUhjqPXb3R%2B%2BFG9MqSsNCttaKQZYDfcebO2dkpOIUiU%2FcVxNl88qlCZU%2BCibMbGHjQQzcCw5TZnM5I6yiZVjzp%2BW9l%2FcbrmW2R9LYfnG497SNqUlMN3d3MIGOqUB5P33jsCFxGZGFBD4bEQen374bxjsoV4GBMFExL18%2Fgk3H%2B%2FxVtj1Lv1HMklg%2BFXejxQa%2Br7NAcN3yfZxbFGTYwUTUaAVbGVePcfALb4H2Pre1ECLA4LDs1QujD0bDr1dt8wyIWuIs8u2GBkMAaa9CeLyY6dGWEvPn1DCpphUE4ITmI4L0OYgHYDB9EVqE4qhF9nff4VyIvPie0uu0W6hopWwpeUQ&X-Amz-Signature=32b12beb6c9191c2be0082ce845f87760f46b2e7367a277e2868e056eaf90a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCGSVDA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDGezpc19yCkSaRKtCTOoHTYIAIsybjn8q2B3%2FVxMAjgIgVK7GsLA166bSD9OByQvJXR%2BWZ8I6AL%2FAlAsU%2BdYKDC0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfe5P9qZfKPF1L05ircA%2BQKLcmL6a1NoHa0UNnSMV19V7W0IhHyQEbsq%2BzfFMkPtZeTtuz2N9T38wpUcoDfBMwqg7jUIPTmL6fOlu4WeDemBh6vqNMEDPCEFBzlKgTYIeCKVwUTck5IsjyofvhT%2BQlkoiPugRSxptFyQjKTstEu6xqPyGEExWpjM0ZVU5szFCNd6Kp7kh4TXMpTaZiMiwRZ%2Bt6esSukl9wB2VhVrjUubXqMKbnjsnzBLOLoNA%2B6J0ZSm2bMLUKyx647DxHnzPPKls1HX%2B8xwxJeJdZZiHGEideTyGUo7Za%2FmNB6yq6iMYFTea2u2bqzyh4RV8AKOFxZ%2BmE6q6WVnfi%2F6uwYZFhDgBl6i%2Frc4FB7hRdu7uCrl3dwGy9V7uMoljXvFEtSt6zokTCeLjUVmk7PC%2BzYtBgUws7cO3URJ0EkXIq8R7hw7MGFaBig947fxAFjmIyJH9YtDVXWGjjXVVv9A9d3aE%2BMXlQexper0ZD0DgHDweeyfwUjo%2FEnvvyXz7ifvpEh3VFQIfuT3K54rUhjqPXb3R%2B%2BFG9MqSsNCttaKQZYDfcebO2dkpOIUiU%2FcVxNl88qlCZU%2BCibMbGHjQQzcCw5TZnM5I6yiZVjzp%2BW9l%2FcbrmW2R9LYfnG497SNqUlMN3d3MIGOqUB5P33jsCFxGZGFBD4bEQen374bxjsoV4GBMFExL18%2Fgk3H%2B%2FxVtj1Lv1HMklg%2BFXejxQa%2Br7NAcN3yfZxbFGTYwUTUaAVbGVePcfALb4H2Pre1ECLA4LDs1QujD0bDr1dt8wyIWuIs8u2GBkMAaa9CeLyY6dGWEvPn1DCpphUE4ITmI4L0OYgHYDB9EVqE4qhF9nff4VyIvPie0uu0W6hopWwpeUQ&X-Amz-Signature=5431590251b18ac159c23c7d7f54c6ef906cb68e5bad6fc5d040831a583537f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCGSVDA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDGezpc19yCkSaRKtCTOoHTYIAIsybjn8q2B3%2FVxMAjgIgVK7GsLA166bSD9OByQvJXR%2BWZ8I6AL%2FAlAsU%2BdYKDC0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfe5P9qZfKPF1L05ircA%2BQKLcmL6a1NoHa0UNnSMV19V7W0IhHyQEbsq%2BzfFMkPtZeTtuz2N9T38wpUcoDfBMwqg7jUIPTmL6fOlu4WeDemBh6vqNMEDPCEFBzlKgTYIeCKVwUTck5IsjyofvhT%2BQlkoiPugRSxptFyQjKTstEu6xqPyGEExWpjM0ZVU5szFCNd6Kp7kh4TXMpTaZiMiwRZ%2Bt6esSukl9wB2VhVrjUubXqMKbnjsnzBLOLoNA%2B6J0ZSm2bMLUKyx647DxHnzPPKls1HX%2B8xwxJeJdZZiHGEideTyGUo7Za%2FmNB6yq6iMYFTea2u2bqzyh4RV8AKOFxZ%2BmE6q6WVnfi%2F6uwYZFhDgBl6i%2Frc4FB7hRdu7uCrl3dwGy9V7uMoljXvFEtSt6zokTCeLjUVmk7PC%2BzYtBgUws7cO3URJ0EkXIq8R7hw7MGFaBig947fxAFjmIyJH9YtDVXWGjjXVVv9A9d3aE%2BMXlQexper0ZD0DgHDweeyfwUjo%2FEnvvyXz7ifvpEh3VFQIfuT3K54rUhjqPXb3R%2B%2BFG9MqSsNCttaKQZYDfcebO2dkpOIUiU%2FcVxNl88qlCZU%2BCibMbGHjQQzcCw5TZnM5I6yiZVjzp%2BW9l%2FcbrmW2R9LYfnG497SNqUlMN3d3MIGOqUB5P33jsCFxGZGFBD4bEQen374bxjsoV4GBMFExL18%2Fgk3H%2B%2FxVtj1Lv1HMklg%2BFXejxQa%2Br7NAcN3yfZxbFGTYwUTUaAVbGVePcfALb4H2Pre1ECLA4LDs1QujD0bDr1dt8wyIWuIs8u2GBkMAaa9CeLyY6dGWEvPn1DCpphUE4ITmI4L0OYgHYDB9EVqE4qhF9nff4VyIvPie0uu0W6hopWwpeUQ&X-Amz-Signature=4fe3abfdd2e1bf512cf45cf95484f0bf1a6aad28a92a2c596024dee1880d6a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCGSVDA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDGezpc19yCkSaRKtCTOoHTYIAIsybjn8q2B3%2FVxMAjgIgVK7GsLA166bSD9OByQvJXR%2BWZ8I6AL%2FAlAsU%2BdYKDC0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfe5P9qZfKPF1L05ircA%2BQKLcmL6a1NoHa0UNnSMV19V7W0IhHyQEbsq%2BzfFMkPtZeTtuz2N9T38wpUcoDfBMwqg7jUIPTmL6fOlu4WeDemBh6vqNMEDPCEFBzlKgTYIeCKVwUTck5IsjyofvhT%2BQlkoiPugRSxptFyQjKTstEu6xqPyGEExWpjM0ZVU5szFCNd6Kp7kh4TXMpTaZiMiwRZ%2Bt6esSukl9wB2VhVrjUubXqMKbnjsnzBLOLoNA%2B6J0ZSm2bMLUKyx647DxHnzPPKls1HX%2B8xwxJeJdZZiHGEideTyGUo7Za%2FmNB6yq6iMYFTea2u2bqzyh4RV8AKOFxZ%2BmE6q6WVnfi%2F6uwYZFhDgBl6i%2Frc4FB7hRdu7uCrl3dwGy9V7uMoljXvFEtSt6zokTCeLjUVmk7PC%2BzYtBgUws7cO3URJ0EkXIq8R7hw7MGFaBig947fxAFjmIyJH9YtDVXWGjjXVVv9A9d3aE%2BMXlQexper0ZD0DgHDweeyfwUjo%2FEnvvyXz7ifvpEh3VFQIfuT3K54rUhjqPXb3R%2B%2BFG9MqSsNCttaKQZYDfcebO2dkpOIUiU%2FcVxNl88qlCZU%2BCibMbGHjQQzcCw5TZnM5I6yiZVjzp%2BW9l%2FcbrmW2R9LYfnG497SNqUlMN3d3MIGOqUB5P33jsCFxGZGFBD4bEQen374bxjsoV4GBMFExL18%2Fgk3H%2B%2FxVtj1Lv1HMklg%2BFXejxQa%2Br7NAcN3yfZxbFGTYwUTUaAVbGVePcfALb4H2Pre1ECLA4LDs1QujD0bDr1dt8wyIWuIs8u2GBkMAaa9CeLyY6dGWEvPn1DCpphUE4ITmI4L0OYgHYDB9EVqE4qhF9nff4VyIvPie0uu0W6hopWwpeUQ&X-Amz-Signature=5cf9ae13fe0f7f387ff4c02c114f81d0f87362b689658e178facd2ea9dcd12d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCGSVDA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDGezpc19yCkSaRKtCTOoHTYIAIsybjn8q2B3%2FVxMAjgIgVK7GsLA166bSD9OByQvJXR%2BWZ8I6AL%2FAlAsU%2BdYKDC0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfe5P9qZfKPF1L05ircA%2BQKLcmL6a1NoHa0UNnSMV19V7W0IhHyQEbsq%2BzfFMkPtZeTtuz2N9T38wpUcoDfBMwqg7jUIPTmL6fOlu4WeDemBh6vqNMEDPCEFBzlKgTYIeCKVwUTck5IsjyofvhT%2BQlkoiPugRSxptFyQjKTstEu6xqPyGEExWpjM0ZVU5szFCNd6Kp7kh4TXMpTaZiMiwRZ%2Bt6esSukl9wB2VhVrjUubXqMKbnjsnzBLOLoNA%2B6J0ZSm2bMLUKyx647DxHnzPPKls1HX%2B8xwxJeJdZZiHGEideTyGUo7Za%2FmNB6yq6iMYFTea2u2bqzyh4RV8AKOFxZ%2BmE6q6WVnfi%2F6uwYZFhDgBl6i%2Frc4FB7hRdu7uCrl3dwGy9V7uMoljXvFEtSt6zokTCeLjUVmk7PC%2BzYtBgUws7cO3URJ0EkXIq8R7hw7MGFaBig947fxAFjmIyJH9YtDVXWGjjXVVv9A9d3aE%2BMXlQexper0ZD0DgHDweeyfwUjo%2FEnvvyXz7ifvpEh3VFQIfuT3K54rUhjqPXb3R%2B%2BFG9MqSsNCttaKQZYDfcebO2dkpOIUiU%2FcVxNl88qlCZU%2BCibMbGHjQQzcCw5TZnM5I6yiZVjzp%2BW9l%2FcbrmW2R9LYfnG497SNqUlMN3d3MIGOqUB5P33jsCFxGZGFBD4bEQen374bxjsoV4GBMFExL18%2Fgk3H%2B%2FxVtj1Lv1HMklg%2BFXejxQa%2Br7NAcN3yfZxbFGTYwUTUaAVbGVePcfALb4H2Pre1ECLA4LDs1QujD0bDr1dt8wyIWuIs8u2GBkMAaa9CeLyY6dGWEvPn1DCpphUE4ITmI4L0OYgHYDB9EVqE4qhF9nff4VyIvPie0uu0W6hopWwpeUQ&X-Amz-Signature=5d212558bbeb5fb1f1aa2ed2df86943d4be8eb78fea2c2c9e51502f2248a7966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCGSVDA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDGezpc19yCkSaRKtCTOoHTYIAIsybjn8q2B3%2FVxMAjgIgVK7GsLA166bSD9OByQvJXR%2BWZ8I6AL%2FAlAsU%2BdYKDC0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfe5P9qZfKPF1L05ircA%2BQKLcmL6a1NoHa0UNnSMV19V7W0IhHyQEbsq%2BzfFMkPtZeTtuz2N9T38wpUcoDfBMwqg7jUIPTmL6fOlu4WeDemBh6vqNMEDPCEFBzlKgTYIeCKVwUTck5IsjyofvhT%2BQlkoiPugRSxptFyQjKTstEu6xqPyGEExWpjM0ZVU5szFCNd6Kp7kh4TXMpTaZiMiwRZ%2Bt6esSukl9wB2VhVrjUubXqMKbnjsnzBLOLoNA%2B6J0ZSm2bMLUKyx647DxHnzPPKls1HX%2B8xwxJeJdZZiHGEideTyGUo7Za%2FmNB6yq6iMYFTea2u2bqzyh4RV8AKOFxZ%2BmE6q6WVnfi%2F6uwYZFhDgBl6i%2Frc4FB7hRdu7uCrl3dwGy9V7uMoljXvFEtSt6zokTCeLjUVmk7PC%2BzYtBgUws7cO3URJ0EkXIq8R7hw7MGFaBig947fxAFjmIyJH9YtDVXWGjjXVVv9A9d3aE%2BMXlQexper0ZD0DgHDweeyfwUjo%2FEnvvyXz7ifvpEh3VFQIfuT3K54rUhjqPXb3R%2B%2BFG9MqSsNCttaKQZYDfcebO2dkpOIUiU%2FcVxNl88qlCZU%2BCibMbGHjQQzcCw5TZnM5I6yiZVjzp%2BW9l%2FcbrmW2R9LYfnG497SNqUlMN3d3MIGOqUB5P33jsCFxGZGFBD4bEQen374bxjsoV4GBMFExL18%2Fgk3H%2B%2FxVtj1Lv1HMklg%2BFXejxQa%2Br7NAcN3yfZxbFGTYwUTUaAVbGVePcfALb4H2Pre1ECLA4LDs1QujD0bDr1dt8wyIWuIs8u2GBkMAaa9CeLyY6dGWEvPn1DCpphUE4ITmI4L0OYgHYDB9EVqE4qhF9nff4VyIvPie0uu0W6hopWwpeUQ&X-Amz-Signature=e1e19012c870353b7ab97cef822a16bfd4a8f2c4eea4953dfa1491895a6d2404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
