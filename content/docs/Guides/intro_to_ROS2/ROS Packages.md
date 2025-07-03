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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7YCCBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBIFnO10iDVXj%2FOhfkBwyxOMu0LG1QWHtPrcoa8oUPozAiEAylig3Mg8tsl0pKt%2BjaVoAoRV70XyZrv5WPeJb4SrjlMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjXqceFDJTdI7YMaCrcA69hLq4LL3S0xZ6%2FrGjw5KQ6q8ZsUsBFjE%2F9EA4t2U5%2FKYJdda%2F43%2FPwKXNnHV13y4hVg4bYRBWRb6Lf67ERV2p%2FHDMYrcuol16wBUgOBXOj9w5xHAjqQXTsPr4fQA46PQlAJWhn2mLodcyyBskklvbtF1osoapp2JQFvoyFbfeRv%2FlNrk4Owil6TIoroV4Ugi8VweARglor9o%2ByENbX42EzNtbCUqovl4o9TY%2BtREYOImPwDmLe%2BMASsg%2BAqreVbIB8KncP7GprWN%2FabWOtF7eyXiJDsgX2dXSWSVGzfmNIa7dyvq9yKms4pFcdvkhF7b7K9tH8QtEz6h5bg%2FSa2WVBA%2BwWHtbFerblKbMLf9QGcTGSxutUyW%2FN%2BigxkY4QKW4g2xuZYjCVafWUgTmz993pHoaLmLc4KWvZMLQ7KEzkt3qrqIswModrSPHsso17v%2B%2BjJRuJt2VQnc21asBb1Cv7AO88Y5QPsgYOTnmSumFyyg02IhNq1CZg%2BbLUINCIiVW86VJSgtcmj%2Fzf6oL4Lg4DkD%2FT4XBmdZq5ceF6eY2MVJVT%2BM%2F0b9t8HdGvsNOBHTHOK6VIfplBf1CqDRfYEOtRpg47G3ATxB7R8UnjNiKRcGLc%2BQoi06NG68QGML3bl8MGOqUBclWhlnPRO%2FJqIa%2FfvFUfK799emza5rbwnxgsyC7AqHJ8m6JvfJWkJwqEVszEAOKKR4xZzJlsXKMXUVZQOmgFIV4jbo1s8GnWA96oPs6Evcaw7yI5T5IFbUQexEZmBnVoYXinr8WYShi0UGqR9jvdhmgyfP%2BjWEXhZa%2F0WR2pRwktrWJ0M5BiQwgpMkeSfzslOn0zFxIGGsBIw3OThSfzQJ6mjBS2&X-Amz-Signature=86cab7c5c1568c6935f449d8eb9ab0088fc4abeed7875084997385febfcc6082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7YCCBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBIFnO10iDVXj%2FOhfkBwyxOMu0LG1QWHtPrcoa8oUPozAiEAylig3Mg8tsl0pKt%2BjaVoAoRV70XyZrv5WPeJb4SrjlMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjXqceFDJTdI7YMaCrcA69hLq4LL3S0xZ6%2FrGjw5KQ6q8ZsUsBFjE%2F9EA4t2U5%2FKYJdda%2F43%2FPwKXNnHV13y4hVg4bYRBWRb6Lf67ERV2p%2FHDMYrcuol16wBUgOBXOj9w5xHAjqQXTsPr4fQA46PQlAJWhn2mLodcyyBskklvbtF1osoapp2JQFvoyFbfeRv%2FlNrk4Owil6TIoroV4Ugi8VweARglor9o%2ByENbX42EzNtbCUqovl4o9TY%2BtREYOImPwDmLe%2BMASsg%2BAqreVbIB8KncP7GprWN%2FabWOtF7eyXiJDsgX2dXSWSVGzfmNIa7dyvq9yKms4pFcdvkhF7b7K9tH8QtEz6h5bg%2FSa2WVBA%2BwWHtbFerblKbMLf9QGcTGSxutUyW%2FN%2BigxkY4QKW4g2xuZYjCVafWUgTmz993pHoaLmLc4KWvZMLQ7KEzkt3qrqIswModrSPHsso17v%2B%2BjJRuJt2VQnc21asBb1Cv7AO88Y5QPsgYOTnmSumFyyg02IhNq1CZg%2BbLUINCIiVW86VJSgtcmj%2Fzf6oL4Lg4DkD%2FT4XBmdZq5ceF6eY2MVJVT%2BM%2F0b9t8HdGvsNOBHTHOK6VIfplBf1CqDRfYEOtRpg47G3ATxB7R8UnjNiKRcGLc%2BQoi06NG68QGML3bl8MGOqUBclWhlnPRO%2FJqIa%2FfvFUfK799emza5rbwnxgsyC7AqHJ8m6JvfJWkJwqEVszEAOKKR4xZzJlsXKMXUVZQOmgFIV4jbo1s8GnWA96oPs6Evcaw7yI5T5IFbUQexEZmBnVoYXinr8WYShi0UGqR9jvdhmgyfP%2BjWEXhZa%2F0WR2pRwktrWJ0M5BiQwgpMkeSfzslOn0zFxIGGsBIw3OThSfzQJ6mjBS2&X-Amz-Signature=57189b5c5926a071ec0cbb9478528d5cd80e0d531e724dd7625f49e0bf4d08f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7YCCBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBIFnO10iDVXj%2FOhfkBwyxOMu0LG1QWHtPrcoa8oUPozAiEAylig3Mg8tsl0pKt%2BjaVoAoRV70XyZrv5WPeJb4SrjlMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjXqceFDJTdI7YMaCrcA69hLq4LL3S0xZ6%2FrGjw5KQ6q8ZsUsBFjE%2F9EA4t2U5%2FKYJdda%2F43%2FPwKXNnHV13y4hVg4bYRBWRb6Lf67ERV2p%2FHDMYrcuol16wBUgOBXOj9w5xHAjqQXTsPr4fQA46PQlAJWhn2mLodcyyBskklvbtF1osoapp2JQFvoyFbfeRv%2FlNrk4Owil6TIoroV4Ugi8VweARglor9o%2ByENbX42EzNtbCUqovl4o9TY%2BtREYOImPwDmLe%2BMASsg%2BAqreVbIB8KncP7GprWN%2FabWOtF7eyXiJDsgX2dXSWSVGzfmNIa7dyvq9yKms4pFcdvkhF7b7K9tH8QtEz6h5bg%2FSa2WVBA%2BwWHtbFerblKbMLf9QGcTGSxutUyW%2FN%2BigxkY4QKW4g2xuZYjCVafWUgTmz993pHoaLmLc4KWvZMLQ7KEzkt3qrqIswModrSPHsso17v%2B%2BjJRuJt2VQnc21asBb1Cv7AO88Y5QPsgYOTnmSumFyyg02IhNq1CZg%2BbLUINCIiVW86VJSgtcmj%2Fzf6oL4Lg4DkD%2FT4XBmdZq5ceF6eY2MVJVT%2BM%2F0b9t8HdGvsNOBHTHOK6VIfplBf1CqDRfYEOtRpg47G3ATxB7R8UnjNiKRcGLc%2BQoi06NG68QGML3bl8MGOqUBclWhlnPRO%2FJqIa%2FfvFUfK799emza5rbwnxgsyC7AqHJ8m6JvfJWkJwqEVszEAOKKR4xZzJlsXKMXUVZQOmgFIV4jbo1s8GnWA96oPs6Evcaw7yI5T5IFbUQexEZmBnVoYXinr8WYShi0UGqR9jvdhmgyfP%2BjWEXhZa%2F0WR2pRwktrWJ0M5BiQwgpMkeSfzslOn0zFxIGGsBIw3OThSfzQJ6mjBS2&X-Amz-Signature=0de217130f9768cb399ce2c91ecdaf1d872ad6db2f607bf433692eedd04e73be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7YCCBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBIFnO10iDVXj%2FOhfkBwyxOMu0LG1QWHtPrcoa8oUPozAiEAylig3Mg8tsl0pKt%2BjaVoAoRV70XyZrv5WPeJb4SrjlMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjXqceFDJTdI7YMaCrcA69hLq4LL3S0xZ6%2FrGjw5KQ6q8ZsUsBFjE%2F9EA4t2U5%2FKYJdda%2F43%2FPwKXNnHV13y4hVg4bYRBWRb6Lf67ERV2p%2FHDMYrcuol16wBUgOBXOj9w5xHAjqQXTsPr4fQA46PQlAJWhn2mLodcyyBskklvbtF1osoapp2JQFvoyFbfeRv%2FlNrk4Owil6TIoroV4Ugi8VweARglor9o%2ByENbX42EzNtbCUqovl4o9TY%2BtREYOImPwDmLe%2BMASsg%2BAqreVbIB8KncP7GprWN%2FabWOtF7eyXiJDsgX2dXSWSVGzfmNIa7dyvq9yKms4pFcdvkhF7b7K9tH8QtEz6h5bg%2FSa2WVBA%2BwWHtbFerblKbMLf9QGcTGSxutUyW%2FN%2BigxkY4QKW4g2xuZYjCVafWUgTmz993pHoaLmLc4KWvZMLQ7KEzkt3qrqIswModrSPHsso17v%2B%2BjJRuJt2VQnc21asBb1Cv7AO88Y5QPsgYOTnmSumFyyg02IhNq1CZg%2BbLUINCIiVW86VJSgtcmj%2Fzf6oL4Lg4DkD%2FT4XBmdZq5ceF6eY2MVJVT%2BM%2F0b9t8HdGvsNOBHTHOK6VIfplBf1CqDRfYEOtRpg47G3ATxB7R8UnjNiKRcGLc%2BQoi06NG68QGML3bl8MGOqUBclWhlnPRO%2FJqIa%2FfvFUfK799emza5rbwnxgsyC7AqHJ8m6JvfJWkJwqEVszEAOKKR4xZzJlsXKMXUVZQOmgFIV4jbo1s8GnWA96oPs6Evcaw7yI5T5IFbUQexEZmBnVoYXinr8WYShi0UGqR9jvdhmgyfP%2BjWEXhZa%2F0WR2pRwktrWJ0M5BiQwgpMkeSfzslOn0zFxIGGsBIw3OThSfzQJ6mjBS2&X-Amz-Signature=9d8d4dbf729f2b52d17a2d8f3e6ef0ec90c85bf65523f19edb521f0fbc0ed907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7YCCBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBIFnO10iDVXj%2FOhfkBwyxOMu0LG1QWHtPrcoa8oUPozAiEAylig3Mg8tsl0pKt%2BjaVoAoRV70XyZrv5WPeJb4SrjlMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjXqceFDJTdI7YMaCrcA69hLq4LL3S0xZ6%2FrGjw5KQ6q8ZsUsBFjE%2F9EA4t2U5%2FKYJdda%2F43%2FPwKXNnHV13y4hVg4bYRBWRb6Lf67ERV2p%2FHDMYrcuol16wBUgOBXOj9w5xHAjqQXTsPr4fQA46PQlAJWhn2mLodcyyBskklvbtF1osoapp2JQFvoyFbfeRv%2FlNrk4Owil6TIoroV4Ugi8VweARglor9o%2ByENbX42EzNtbCUqovl4o9TY%2BtREYOImPwDmLe%2BMASsg%2BAqreVbIB8KncP7GprWN%2FabWOtF7eyXiJDsgX2dXSWSVGzfmNIa7dyvq9yKms4pFcdvkhF7b7K9tH8QtEz6h5bg%2FSa2WVBA%2BwWHtbFerblKbMLf9QGcTGSxutUyW%2FN%2BigxkY4QKW4g2xuZYjCVafWUgTmz993pHoaLmLc4KWvZMLQ7KEzkt3qrqIswModrSPHsso17v%2B%2BjJRuJt2VQnc21asBb1Cv7AO88Y5QPsgYOTnmSumFyyg02IhNq1CZg%2BbLUINCIiVW86VJSgtcmj%2Fzf6oL4Lg4DkD%2FT4XBmdZq5ceF6eY2MVJVT%2BM%2F0b9t8HdGvsNOBHTHOK6VIfplBf1CqDRfYEOtRpg47G3ATxB7R8UnjNiKRcGLc%2BQoi06NG68QGML3bl8MGOqUBclWhlnPRO%2FJqIa%2FfvFUfK799emza5rbwnxgsyC7AqHJ8m6JvfJWkJwqEVszEAOKKR4xZzJlsXKMXUVZQOmgFIV4jbo1s8GnWA96oPs6Evcaw7yI5T5IFbUQexEZmBnVoYXinr8WYShi0UGqR9jvdhmgyfP%2BjWEXhZa%2F0WR2pRwktrWJ0M5BiQwgpMkeSfzslOn0zFxIGGsBIw3OThSfzQJ6mjBS2&X-Amz-Signature=49e472605960b37bc444e0c29c87cede08f92f96206695d6a5a318f32eea275f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7YCCBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBIFnO10iDVXj%2FOhfkBwyxOMu0LG1QWHtPrcoa8oUPozAiEAylig3Mg8tsl0pKt%2BjaVoAoRV70XyZrv5WPeJb4SrjlMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjXqceFDJTdI7YMaCrcA69hLq4LL3S0xZ6%2FrGjw5KQ6q8ZsUsBFjE%2F9EA4t2U5%2FKYJdda%2F43%2FPwKXNnHV13y4hVg4bYRBWRb6Lf67ERV2p%2FHDMYrcuol16wBUgOBXOj9w5xHAjqQXTsPr4fQA46PQlAJWhn2mLodcyyBskklvbtF1osoapp2JQFvoyFbfeRv%2FlNrk4Owil6TIoroV4Ugi8VweARglor9o%2ByENbX42EzNtbCUqovl4o9TY%2BtREYOImPwDmLe%2BMASsg%2BAqreVbIB8KncP7GprWN%2FabWOtF7eyXiJDsgX2dXSWSVGzfmNIa7dyvq9yKms4pFcdvkhF7b7K9tH8QtEz6h5bg%2FSa2WVBA%2BwWHtbFerblKbMLf9QGcTGSxutUyW%2FN%2BigxkY4QKW4g2xuZYjCVafWUgTmz993pHoaLmLc4KWvZMLQ7KEzkt3qrqIswModrSPHsso17v%2B%2BjJRuJt2VQnc21asBb1Cv7AO88Y5QPsgYOTnmSumFyyg02IhNq1CZg%2BbLUINCIiVW86VJSgtcmj%2Fzf6oL4Lg4DkD%2FT4XBmdZq5ceF6eY2MVJVT%2BM%2F0b9t8HdGvsNOBHTHOK6VIfplBf1CqDRfYEOtRpg47G3ATxB7R8UnjNiKRcGLc%2BQoi06NG68QGML3bl8MGOqUBclWhlnPRO%2FJqIa%2FfvFUfK799emza5rbwnxgsyC7AqHJ8m6JvfJWkJwqEVszEAOKKR4xZzJlsXKMXUVZQOmgFIV4jbo1s8GnWA96oPs6Evcaw7yI5T5IFbUQexEZmBnVoYXinr8WYShi0UGqR9jvdhmgyfP%2BjWEXhZa%2F0WR2pRwktrWJ0M5BiQwgpMkeSfzslOn0zFxIGGsBIw3OThSfzQJ6mjBS2&X-Amz-Signature=cc5cc37c0ded5bbab61e372117b292e013368b3bf657cdd710e4e52b7d9b3c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7YCCBR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBIFnO10iDVXj%2FOhfkBwyxOMu0LG1QWHtPrcoa8oUPozAiEAylig3Mg8tsl0pKt%2BjaVoAoRV70XyZrv5WPeJb4SrjlMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjXqceFDJTdI7YMaCrcA69hLq4LL3S0xZ6%2FrGjw5KQ6q8ZsUsBFjE%2F9EA4t2U5%2FKYJdda%2F43%2FPwKXNnHV13y4hVg4bYRBWRb6Lf67ERV2p%2FHDMYrcuol16wBUgOBXOj9w5xHAjqQXTsPr4fQA46PQlAJWhn2mLodcyyBskklvbtF1osoapp2JQFvoyFbfeRv%2FlNrk4Owil6TIoroV4Ugi8VweARglor9o%2ByENbX42EzNtbCUqovl4o9TY%2BtREYOImPwDmLe%2BMASsg%2BAqreVbIB8KncP7GprWN%2FabWOtF7eyXiJDsgX2dXSWSVGzfmNIa7dyvq9yKms4pFcdvkhF7b7K9tH8QtEz6h5bg%2FSa2WVBA%2BwWHtbFerblKbMLf9QGcTGSxutUyW%2FN%2BigxkY4QKW4g2xuZYjCVafWUgTmz993pHoaLmLc4KWvZMLQ7KEzkt3qrqIswModrSPHsso17v%2B%2BjJRuJt2VQnc21asBb1Cv7AO88Y5QPsgYOTnmSumFyyg02IhNq1CZg%2BbLUINCIiVW86VJSgtcmj%2Fzf6oL4Lg4DkD%2FT4XBmdZq5ceF6eY2MVJVT%2BM%2F0b9t8HdGvsNOBHTHOK6VIfplBf1CqDRfYEOtRpg47G3ATxB7R8UnjNiKRcGLc%2BQoi06NG68QGML3bl8MGOqUBclWhlnPRO%2FJqIa%2FfvFUfK799emza5rbwnxgsyC7AqHJ8m6JvfJWkJwqEVszEAOKKR4xZzJlsXKMXUVZQOmgFIV4jbo1s8GnWA96oPs6Evcaw7yI5T5IFbUQexEZmBnVoYXinr8WYShi0UGqR9jvdhmgyfP%2BjWEXhZa%2F0WR2pRwktrWJ0M5BiQwgpMkeSfzslOn0zFxIGGsBIw3OThSfzQJ6mjBS2&X-Amz-Signature=26a7e55f20cbd54bf6a3b4c18722ff4f3fd43ff4ad23f70990fd2230d6312ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
