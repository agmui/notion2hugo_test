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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G7SQZ4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDigSn%2FUg4NUkF2hlu2u7g40mOcAp8lcYZ02jrw%2FrrKvQIhAMxOS41ZoutcnR%2FUyRNg87gEi7u%2B8tLYhBBEVlB9oCFMKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgS26VDN1k3k711B4q3AMAhlM9juZXrqQHzjIRRfFYRAYGyI9GsT91fLSsKuIS7AkRlV0ADNpJLRvrIq%2FOnKobPc5iUslB75NZgH2OlZUiFfbPz%2BKN5J%2FhZsGrV%2Br1NrjK9pBECpXpPip6gJf9DJMA5hBk4F3xgNdXF91%2FfUe4MqkG5xyEr7U2YvPkiwxfd4CCEEV7PYZLx0DRNmqe1visDauqDMDnk1%2BIsYiq3s1NMt5N%2B7SXQR6A2ROlK2BmTVBbXFIiZ%2FNnyGm27YGkFTQnGrc15q6d1d9rtrr3bmlhx%2FTdWAWnV8FjThdzwx6GWonosnyxK5wf9crG9tELImMsUxt9NGgHz7r6yNcPOi5Og2MmmrWLod2IyR9slQetvLgBNdMmAjfm%2BLx0oVl4S2UODuJN63y3yxdSAeGvil55HSF2DRc1qVdLDhwYAIG8mZrB%2BnCGHMo%2B0p8PuWRvTEA0QpjcEHWl%2FbV0ZUlM1MyzTCE9CMYU%2FpMEaTHbMJxAICrhrw27PlddG95oxiYXMwPlQU0bNN6Kxm%2BmvkLxE8W7ROW1jQ74%2FxHZGISO7m9RmeNsktHG%2FXyFue5jRDtBsG5sLgAcOim3Fx3TuWFcIaLqpssEa1nVlXg%2BmetcoB9h1dhqxeTnBwXipazrnzDKwsa%2FBjqkASDT1RmL9wJG1FVcPOlsnlgUVoFcZUomeuovJw0OZt2q6eCoWcfxKKWq2R7DZG27E7tBju6YHNoIeErpFpNpWaUtNS0JzcRSPxsXJKdeONYLggA5tDT7TPs7tjpaR%2FEAiz33n0xXK4XKBn5iEsS47tebn3Ae6ADKAeV8BM%2Bp0OmoOGwc8VA7kI1ZZPjt1OwdL5co8Rtc0gMzyeTJdsyo%2B6TQOV29&X-Amz-Signature=8d24bb1d3a820c2b4639ebe50d960d9b69c1719efaed30f5ddde1aabf8021ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G7SQZ4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDigSn%2FUg4NUkF2hlu2u7g40mOcAp8lcYZ02jrw%2FrrKvQIhAMxOS41ZoutcnR%2FUyRNg87gEi7u%2B8tLYhBBEVlB9oCFMKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgS26VDN1k3k711B4q3AMAhlM9juZXrqQHzjIRRfFYRAYGyI9GsT91fLSsKuIS7AkRlV0ADNpJLRvrIq%2FOnKobPc5iUslB75NZgH2OlZUiFfbPz%2BKN5J%2FhZsGrV%2Br1NrjK9pBECpXpPip6gJf9DJMA5hBk4F3xgNdXF91%2FfUe4MqkG5xyEr7U2YvPkiwxfd4CCEEV7PYZLx0DRNmqe1visDauqDMDnk1%2BIsYiq3s1NMt5N%2B7SXQR6A2ROlK2BmTVBbXFIiZ%2FNnyGm27YGkFTQnGrc15q6d1d9rtrr3bmlhx%2FTdWAWnV8FjThdzwx6GWonosnyxK5wf9crG9tELImMsUxt9NGgHz7r6yNcPOi5Og2MmmrWLod2IyR9slQetvLgBNdMmAjfm%2BLx0oVl4S2UODuJN63y3yxdSAeGvil55HSF2DRc1qVdLDhwYAIG8mZrB%2BnCGHMo%2B0p8PuWRvTEA0QpjcEHWl%2FbV0ZUlM1MyzTCE9CMYU%2FpMEaTHbMJxAICrhrw27PlddG95oxiYXMwPlQU0bNN6Kxm%2BmvkLxE8W7ROW1jQ74%2FxHZGISO7m9RmeNsktHG%2FXyFue5jRDtBsG5sLgAcOim3Fx3TuWFcIaLqpssEa1nVlXg%2BmetcoB9h1dhqxeTnBwXipazrnzDKwsa%2FBjqkASDT1RmL9wJG1FVcPOlsnlgUVoFcZUomeuovJw0OZt2q6eCoWcfxKKWq2R7DZG27E7tBju6YHNoIeErpFpNpWaUtNS0JzcRSPxsXJKdeONYLggA5tDT7TPs7tjpaR%2FEAiz33n0xXK4XKBn5iEsS47tebn3Ae6ADKAeV8BM%2Bp0OmoOGwc8VA7kI1ZZPjt1OwdL5co8Rtc0gMzyeTJdsyo%2B6TQOV29&X-Amz-Signature=5a2b9f2c755bd66896330c25dc767d64d67c1dbf61d8c51d17ef1a90493ae8cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G7SQZ4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDigSn%2FUg4NUkF2hlu2u7g40mOcAp8lcYZ02jrw%2FrrKvQIhAMxOS41ZoutcnR%2FUyRNg87gEi7u%2B8tLYhBBEVlB9oCFMKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgS26VDN1k3k711B4q3AMAhlM9juZXrqQHzjIRRfFYRAYGyI9GsT91fLSsKuIS7AkRlV0ADNpJLRvrIq%2FOnKobPc5iUslB75NZgH2OlZUiFfbPz%2BKN5J%2FhZsGrV%2Br1NrjK9pBECpXpPip6gJf9DJMA5hBk4F3xgNdXF91%2FfUe4MqkG5xyEr7U2YvPkiwxfd4CCEEV7PYZLx0DRNmqe1visDauqDMDnk1%2BIsYiq3s1NMt5N%2B7SXQR6A2ROlK2BmTVBbXFIiZ%2FNnyGm27YGkFTQnGrc15q6d1d9rtrr3bmlhx%2FTdWAWnV8FjThdzwx6GWonosnyxK5wf9crG9tELImMsUxt9NGgHz7r6yNcPOi5Og2MmmrWLod2IyR9slQetvLgBNdMmAjfm%2BLx0oVl4S2UODuJN63y3yxdSAeGvil55HSF2DRc1qVdLDhwYAIG8mZrB%2BnCGHMo%2B0p8PuWRvTEA0QpjcEHWl%2FbV0ZUlM1MyzTCE9CMYU%2FpMEaTHbMJxAICrhrw27PlddG95oxiYXMwPlQU0bNN6Kxm%2BmvkLxE8W7ROW1jQ74%2FxHZGISO7m9RmeNsktHG%2FXyFue5jRDtBsG5sLgAcOim3Fx3TuWFcIaLqpssEa1nVlXg%2BmetcoB9h1dhqxeTnBwXipazrnzDKwsa%2FBjqkASDT1RmL9wJG1FVcPOlsnlgUVoFcZUomeuovJw0OZt2q6eCoWcfxKKWq2R7DZG27E7tBju6YHNoIeErpFpNpWaUtNS0JzcRSPxsXJKdeONYLggA5tDT7TPs7tjpaR%2FEAiz33n0xXK4XKBn5iEsS47tebn3Ae6ADKAeV8BM%2Bp0OmoOGwc8VA7kI1ZZPjt1OwdL5co8Rtc0gMzyeTJdsyo%2B6TQOV29&X-Amz-Signature=bbf2c5c25a4c7d344f7627803fa3a97cbd70b3a1fa65af9ddec115677d653e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G7SQZ4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDigSn%2FUg4NUkF2hlu2u7g40mOcAp8lcYZ02jrw%2FrrKvQIhAMxOS41ZoutcnR%2FUyRNg87gEi7u%2B8tLYhBBEVlB9oCFMKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgS26VDN1k3k711B4q3AMAhlM9juZXrqQHzjIRRfFYRAYGyI9GsT91fLSsKuIS7AkRlV0ADNpJLRvrIq%2FOnKobPc5iUslB75NZgH2OlZUiFfbPz%2BKN5J%2FhZsGrV%2Br1NrjK9pBECpXpPip6gJf9DJMA5hBk4F3xgNdXF91%2FfUe4MqkG5xyEr7U2YvPkiwxfd4CCEEV7PYZLx0DRNmqe1visDauqDMDnk1%2BIsYiq3s1NMt5N%2B7SXQR6A2ROlK2BmTVBbXFIiZ%2FNnyGm27YGkFTQnGrc15q6d1d9rtrr3bmlhx%2FTdWAWnV8FjThdzwx6GWonosnyxK5wf9crG9tELImMsUxt9NGgHz7r6yNcPOi5Og2MmmrWLod2IyR9slQetvLgBNdMmAjfm%2BLx0oVl4S2UODuJN63y3yxdSAeGvil55HSF2DRc1qVdLDhwYAIG8mZrB%2BnCGHMo%2B0p8PuWRvTEA0QpjcEHWl%2FbV0ZUlM1MyzTCE9CMYU%2FpMEaTHbMJxAICrhrw27PlddG95oxiYXMwPlQU0bNN6Kxm%2BmvkLxE8W7ROW1jQ74%2FxHZGISO7m9RmeNsktHG%2FXyFue5jRDtBsG5sLgAcOim3Fx3TuWFcIaLqpssEa1nVlXg%2BmetcoB9h1dhqxeTnBwXipazrnzDKwsa%2FBjqkASDT1RmL9wJG1FVcPOlsnlgUVoFcZUomeuovJw0OZt2q6eCoWcfxKKWq2R7DZG27E7tBju6YHNoIeErpFpNpWaUtNS0JzcRSPxsXJKdeONYLggA5tDT7TPs7tjpaR%2FEAiz33n0xXK4XKBn5iEsS47tebn3Ae6ADKAeV8BM%2Bp0OmoOGwc8VA7kI1ZZPjt1OwdL5co8Rtc0gMzyeTJdsyo%2B6TQOV29&X-Amz-Signature=d9be8793dbbe3400b720a164ce4951cf10ad15aa0f9eb0b4cdffe2b9ef725a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G7SQZ4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDigSn%2FUg4NUkF2hlu2u7g40mOcAp8lcYZ02jrw%2FrrKvQIhAMxOS41ZoutcnR%2FUyRNg87gEi7u%2B8tLYhBBEVlB9oCFMKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgS26VDN1k3k711B4q3AMAhlM9juZXrqQHzjIRRfFYRAYGyI9GsT91fLSsKuIS7AkRlV0ADNpJLRvrIq%2FOnKobPc5iUslB75NZgH2OlZUiFfbPz%2BKN5J%2FhZsGrV%2Br1NrjK9pBECpXpPip6gJf9DJMA5hBk4F3xgNdXF91%2FfUe4MqkG5xyEr7U2YvPkiwxfd4CCEEV7PYZLx0DRNmqe1visDauqDMDnk1%2BIsYiq3s1NMt5N%2B7SXQR6A2ROlK2BmTVBbXFIiZ%2FNnyGm27YGkFTQnGrc15q6d1d9rtrr3bmlhx%2FTdWAWnV8FjThdzwx6GWonosnyxK5wf9crG9tELImMsUxt9NGgHz7r6yNcPOi5Og2MmmrWLod2IyR9slQetvLgBNdMmAjfm%2BLx0oVl4S2UODuJN63y3yxdSAeGvil55HSF2DRc1qVdLDhwYAIG8mZrB%2BnCGHMo%2B0p8PuWRvTEA0QpjcEHWl%2FbV0ZUlM1MyzTCE9CMYU%2FpMEaTHbMJxAICrhrw27PlddG95oxiYXMwPlQU0bNN6Kxm%2BmvkLxE8W7ROW1jQ74%2FxHZGISO7m9RmeNsktHG%2FXyFue5jRDtBsG5sLgAcOim3Fx3TuWFcIaLqpssEa1nVlXg%2BmetcoB9h1dhqxeTnBwXipazrnzDKwsa%2FBjqkASDT1RmL9wJG1FVcPOlsnlgUVoFcZUomeuovJw0OZt2q6eCoWcfxKKWq2R7DZG27E7tBju6YHNoIeErpFpNpWaUtNS0JzcRSPxsXJKdeONYLggA5tDT7TPs7tjpaR%2FEAiz33n0xXK4XKBn5iEsS47tebn3Ae6ADKAeV8BM%2Bp0OmoOGwc8VA7kI1ZZPjt1OwdL5co8Rtc0gMzyeTJdsyo%2B6TQOV29&X-Amz-Signature=3fdbb067d8a14d1bae15302025ca93987ad63512e36d139755f2033ccec59505&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G7SQZ4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDigSn%2FUg4NUkF2hlu2u7g40mOcAp8lcYZ02jrw%2FrrKvQIhAMxOS41ZoutcnR%2FUyRNg87gEi7u%2B8tLYhBBEVlB9oCFMKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgS26VDN1k3k711B4q3AMAhlM9juZXrqQHzjIRRfFYRAYGyI9GsT91fLSsKuIS7AkRlV0ADNpJLRvrIq%2FOnKobPc5iUslB75NZgH2OlZUiFfbPz%2BKN5J%2FhZsGrV%2Br1NrjK9pBECpXpPip6gJf9DJMA5hBk4F3xgNdXF91%2FfUe4MqkG5xyEr7U2YvPkiwxfd4CCEEV7PYZLx0DRNmqe1visDauqDMDnk1%2BIsYiq3s1NMt5N%2B7SXQR6A2ROlK2BmTVBbXFIiZ%2FNnyGm27YGkFTQnGrc15q6d1d9rtrr3bmlhx%2FTdWAWnV8FjThdzwx6GWonosnyxK5wf9crG9tELImMsUxt9NGgHz7r6yNcPOi5Og2MmmrWLod2IyR9slQetvLgBNdMmAjfm%2BLx0oVl4S2UODuJN63y3yxdSAeGvil55HSF2DRc1qVdLDhwYAIG8mZrB%2BnCGHMo%2B0p8PuWRvTEA0QpjcEHWl%2FbV0ZUlM1MyzTCE9CMYU%2FpMEaTHbMJxAICrhrw27PlddG95oxiYXMwPlQU0bNN6Kxm%2BmvkLxE8W7ROW1jQ74%2FxHZGISO7m9RmeNsktHG%2FXyFue5jRDtBsG5sLgAcOim3Fx3TuWFcIaLqpssEa1nVlXg%2BmetcoB9h1dhqxeTnBwXipazrnzDKwsa%2FBjqkASDT1RmL9wJG1FVcPOlsnlgUVoFcZUomeuovJw0OZt2q6eCoWcfxKKWq2R7DZG27E7tBju6YHNoIeErpFpNpWaUtNS0JzcRSPxsXJKdeONYLggA5tDT7TPs7tjpaR%2FEAiz33n0xXK4XKBn5iEsS47tebn3Ae6ADKAeV8BM%2Bp0OmoOGwc8VA7kI1ZZPjt1OwdL5co8Rtc0gMzyeTJdsyo%2B6TQOV29&X-Amz-Signature=c54a0e10985c8f675ea820fce7e42ab1d555a05a5502fbec0f908e74cf35c6d6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G7SQZ4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDigSn%2FUg4NUkF2hlu2u7g40mOcAp8lcYZ02jrw%2FrrKvQIhAMxOS41ZoutcnR%2FUyRNg87gEi7u%2B8tLYhBBEVlB9oCFMKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgS26VDN1k3k711B4q3AMAhlM9juZXrqQHzjIRRfFYRAYGyI9GsT91fLSsKuIS7AkRlV0ADNpJLRvrIq%2FOnKobPc5iUslB75NZgH2OlZUiFfbPz%2BKN5J%2FhZsGrV%2Br1NrjK9pBECpXpPip6gJf9DJMA5hBk4F3xgNdXF91%2FfUe4MqkG5xyEr7U2YvPkiwxfd4CCEEV7PYZLx0DRNmqe1visDauqDMDnk1%2BIsYiq3s1NMt5N%2B7SXQR6A2ROlK2BmTVBbXFIiZ%2FNnyGm27YGkFTQnGrc15q6d1d9rtrr3bmlhx%2FTdWAWnV8FjThdzwx6GWonosnyxK5wf9crG9tELImMsUxt9NGgHz7r6yNcPOi5Og2MmmrWLod2IyR9slQetvLgBNdMmAjfm%2BLx0oVl4S2UODuJN63y3yxdSAeGvil55HSF2DRc1qVdLDhwYAIG8mZrB%2BnCGHMo%2B0p8PuWRvTEA0QpjcEHWl%2FbV0ZUlM1MyzTCE9CMYU%2FpMEaTHbMJxAICrhrw27PlddG95oxiYXMwPlQU0bNN6Kxm%2BmvkLxE8W7ROW1jQ74%2FxHZGISO7m9RmeNsktHG%2FXyFue5jRDtBsG5sLgAcOim3Fx3TuWFcIaLqpssEa1nVlXg%2BmetcoB9h1dhqxeTnBwXipazrnzDKwsa%2FBjqkASDT1RmL9wJG1FVcPOlsnlgUVoFcZUomeuovJw0OZt2q6eCoWcfxKKWq2R7DZG27E7tBju6YHNoIeErpFpNpWaUtNS0JzcRSPxsXJKdeONYLggA5tDT7TPs7tjpaR%2FEAiz33n0xXK4XKBn5iEsS47tebn3Ae6ADKAeV8BM%2Bp0OmoOGwc8VA7kI1ZZPjt1OwdL5co8Rtc0gMzyeTJdsyo%2B6TQOV29&X-Amz-Signature=f9a5da1755bd481eefd8cd82320fb42f1d40fae3a47cf4e257002539717548ed&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
