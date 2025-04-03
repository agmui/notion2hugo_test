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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGJCVR4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfuZXfRD%2B5EWWFIVynj2%2F3htahED7yqW58peyuwm09FAiBpTpoyq9ohNlLQkLYmL3EGOChSnlRrBPILmDT0YpICGyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzga9K05eDqquWmpfKtwDKQeKpdCHJBimDvU1NHtLHeh5jXWkLdSI8X847ZLznkKdeRM9chpIfsYGE7ffOZNSFCZaXMWdmWMa4UG3bwT9fshHA9crv5EdbsjNfnXoXlLAivWaA9XLTnOPOWQDKGJMPz5wn%2BdjJrZoqKJjnaeyPnC76iFZ9%2FfbdzkyHX%2FiIO71vB0FDAVasxXDKc%2BxsNNTtvmm08ycVbMpwoC3YuBJ1L%2B3%2FyWJzUVLFI8pYMQMeQcjcKVS0AkJ2bUzbqqjXkLs8%2FLXEaG9M2xkszqis9Rpw9jYO5Cg7dzYReUqvo8j1HldWa%2BfrsOPRrkU2Mw0EmuLQRKvrcMGyoNKO0%2BUZCcnhaA15gXuxQ3n%2BFHiMBFDYwDx1cZqxz3ZWfc26X2kVcVit2tOBWwmqYt0clsQhL8gcieHsBjGrH3%2F9YsUuoPS53zI7CO%2FOrkyVuB1OtuxRF32Z6vfFe3JZUm1Y7tw089bQteITUesK8WRlpvWArop8FJFUiQKe8HV9dbZUuKQQS36imoy0qiXk4bdeny0rc4gcIqH6iNSOMmsC3VeVMjkq5k4M2j%2FNukiJ%2B6YyYLfu2MHPRGdQZeleseI6p34If8VBEL1zzMBUNNQ%2FQlLl%2F%2Bz3gAmFah%2FyAkdYSOsBOMwn%2Bu7vwY6pgElsBlQTxUS0nhLbKv0afLiBjKK7SOAO%2FACvztEyI8sDVZkavjCJWiIq6SryrahwRy8YZq2Bns5XGKUMVDomFD4mjkpS%2B1WS9EBMAWYO8BBYqT%2FxjH9RyVWDXERuod%2FQJyaCFBfHSnX8K7S3Y91%2BQ9mnnKilAADgVA3oNZsLwqRielaG%2FTU%2BVaKYar%2FbZ911hr2wOvdUGJ9LFk7o8BBQBmFa8I5U14Z&X-Amz-Signature=bad74d1f9a0d17d12f40b3d7be0165ed2a9df3f1079544499274e1b760d37963&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGJCVR4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfuZXfRD%2B5EWWFIVynj2%2F3htahED7yqW58peyuwm09FAiBpTpoyq9ohNlLQkLYmL3EGOChSnlRrBPILmDT0YpICGyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzga9K05eDqquWmpfKtwDKQeKpdCHJBimDvU1NHtLHeh5jXWkLdSI8X847ZLznkKdeRM9chpIfsYGE7ffOZNSFCZaXMWdmWMa4UG3bwT9fshHA9crv5EdbsjNfnXoXlLAivWaA9XLTnOPOWQDKGJMPz5wn%2BdjJrZoqKJjnaeyPnC76iFZ9%2FfbdzkyHX%2FiIO71vB0FDAVasxXDKc%2BxsNNTtvmm08ycVbMpwoC3YuBJ1L%2B3%2FyWJzUVLFI8pYMQMeQcjcKVS0AkJ2bUzbqqjXkLs8%2FLXEaG9M2xkszqis9Rpw9jYO5Cg7dzYReUqvo8j1HldWa%2BfrsOPRrkU2Mw0EmuLQRKvrcMGyoNKO0%2BUZCcnhaA15gXuxQ3n%2BFHiMBFDYwDx1cZqxz3ZWfc26X2kVcVit2tOBWwmqYt0clsQhL8gcieHsBjGrH3%2F9YsUuoPS53zI7CO%2FOrkyVuB1OtuxRF32Z6vfFe3JZUm1Y7tw089bQteITUesK8WRlpvWArop8FJFUiQKe8HV9dbZUuKQQS36imoy0qiXk4bdeny0rc4gcIqH6iNSOMmsC3VeVMjkq5k4M2j%2FNukiJ%2B6YyYLfu2MHPRGdQZeleseI6p34If8VBEL1zzMBUNNQ%2FQlLl%2F%2Bz3gAmFah%2FyAkdYSOsBOMwn%2Bu7vwY6pgElsBlQTxUS0nhLbKv0afLiBjKK7SOAO%2FACvztEyI8sDVZkavjCJWiIq6SryrahwRy8YZq2Bns5XGKUMVDomFD4mjkpS%2B1WS9EBMAWYO8BBYqT%2FxjH9RyVWDXERuod%2FQJyaCFBfHSnX8K7S3Y91%2BQ9mnnKilAADgVA3oNZsLwqRielaG%2FTU%2BVaKYar%2FbZ911hr2wOvdUGJ9LFk7o8BBQBmFa8I5U14Z&X-Amz-Signature=10cdaa625fe83e8dcf79dee46c243c082cbc93854ef35f0988e7d98a53557dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGJCVR4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfuZXfRD%2B5EWWFIVynj2%2F3htahED7yqW58peyuwm09FAiBpTpoyq9ohNlLQkLYmL3EGOChSnlRrBPILmDT0YpICGyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzga9K05eDqquWmpfKtwDKQeKpdCHJBimDvU1NHtLHeh5jXWkLdSI8X847ZLznkKdeRM9chpIfsYGE7ffOZNSFCZaXMWdmWMa4UG3bwT9fshHA9crv5EdbsjNfnXoXlLAivWaA9XLTnOPOWQDKGJMPz5wn%2BdjJrZoqKJjnaeyPnC76iFZ9%2FfbdzkyHX%2FiIO71vB0FDAVasxXDKc%2BxsNNTtvmm08ycVbMpwoC3YuBJ1L%2B3%2FyWJzUVLFI8pYMQMeQcjcKVS0AkJ2bUzbqqjXkLs8%2FLXEaG9M2xkszqis9Rpw9jYO5Cg7dzYReUqvo8j1HldWa%2BfrsOPRrkU2Mw0EmuLQRKvrcMGyoNKO0%2BUZCcnhaA15gXuxQ3n%2BFHiMBFDYwDx1cZqxz3ZWfc26X2kVcVit2tOBWwmqYt0clsQhL8gcieHsBjGrH3%2F9YsUuoPS53zI7CO%2FOrkyVuB1OtuxRF32Z6vfFe3JZUm1Y7tw089bQteITUesK8WRlpvWArop8FJFUiQKe8HV9dbZUuKQQS36imoy0qiXk4bdeny0rc4gcIqH6iNSOMmsC3VeVMjkq5k4M2j%2FNukiJ%2B6YyYLfu2MHPRGdQZeleseI6p34If8VBEL1zzMBUNNQ%2FQlLl%2F%2Bz3gAmFah%2FyAkdYSOsBOMwn%2Bu7vwY6pgElsBlQTxUS0nhLbKv0afLiBjKK7SOAO%2FACvztEyI8sDVZkavjCJWiIq6SryrahwRy8YZq2Bns5XGKUMVDomFD4mjkpS%2B1WS9EBMAWYO8BBYqT%2FxjH9RyVWDXERuod%2FQJyaCFBfHSnX8K7S3Y91%2BQ9mnnKilAADgVA3oNZsLwqRielaG%2FTU%2BVaKYar%2FbZ911hr2wOvdUGJ9LFk7o8BBQBmFa8I5U14Z&X-Amz-Signature=eb1c84fd87b9e4528d5c535f9216cca06dc796351eb2908782cad69aee8790dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGJCVR4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfuZXfRD%2B5EWWFIVynj2%2F3htahED7yqW58peyuwm09FAiBpTpoyq9ohNlLQkLYmL3EGOChSnlRrBPILmDT0YpICGyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzga9K05eDqquWmpfKtwDKQeKpdCHJBimDvU1NHtLHeh5jXWkLdSI8X847ZLznkKdeRM9chpIfsYGE7ffOZNSFCZaXMWdmWMa4UG3bwT9fshHA9crv5EdbsjNfnXoXlLAivWaA9XLTnOPOWQDKGJMPz5wn%2BdjJrZoqKJjnaeyPnC76iFZ9%2FfbdzkyHX%2FiIO71vB0FDAVasxXDKc%2BxsNNTtvmm08ycVbMpwoC3YuBJ1L%2B3%2FyWJzUVLFI8pYMQMeQcjcKVS0AkJ2bUzbqqjXkLs8%2FLXEaG9M2xkszqis9Rpw9jYO5Cg7dzYReUqvo8j1HldWa%2BfrsOPRrkU2Mw0EmuLQRKvrcMGyoNKO0%2BUZCcnhaA15gXuxQ3n%2BFHiMBFDYwDx1cZqxz3ZWfc26X2kVcVit2tOBWwmqYt0clsQhL8gcieHsBjGrH3%2F9YsUuoPS53zI7CO%2FOrkyVuB1OtuxRF32Z6vfFe3JZUm1Y7tw089bQteITUesK8WRlpvWArop8FJFUiQKe8HV9dbZUuKQQS36imoy0qiXk4bdeny0rc4gcIqH6iNSOMmsC3VeVMjkq5k4M2j%2FNukiJ%2B6YyYLfu2MHPRGdQZeleseI6p34If8VBEL1zzMBUNNQ%2FQlLl%2F%2Bz3gAmFah%2FyAkdYSOsBOMwn%2Bu7vwY6pgElsBlQTxUS0nhLbKv0afLiBjKK7SOAO%2FACvztEyI8sDVZkavjCJWiIq6SryrahwRy8YZq2Bns5XGKUMVDomFD4mjkpS%2B1WS9EBMAWYO8BBYqT%2FxjH9RyVWDXERuod%2FQJyaCFBfHSnX8K7S3Y91%2BQ9mnnKilAADgVA3oNZsLwqRielaG%2FTU%2BVaKYar%2FbZ911hr2wOvdUGJ9LFk7o8BBQBmFa8I5U14Z&X-Amz-Signature=966ed78c589e99dfd52af233445c7e8048639b2d358d14e360bac118bd91d255&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGJCVR4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfuZXfRD%2B5EWWFIVynj2%2F3htahED7yqW58peyuwm09FAiBpTpoyq9ohNlLQkLYmL3EGOChSnlRrBPILmDT0YpICGyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzga9K05eDqquWmpfKtwDKQeKpdCHJBimDvU1NHtLHeh5jXWkLdSI8X847ZLznkKdeRM9chpIfsYGE7ffOZNSFCZaXMWdmWMa4UG3bwT9fshHA9crv5EdbsjNfnXoXlLAivWaA9XLTnOPOWQDKGJMPz5wn%2BdjJrZoqKJjnaeyPnC76iFZ9%2FfbdzkyHX%2FiIO71vB0FDAVasxXDKc%2BxsNNTtvmm08ycVbMpwoC3YuBJ1L%2B3%2FyWJzUVLFI8pYMQMeQcjcKVS0AkJ2bUzbqqjXkLs8%2FLXEaG9M2xkszqis9Rpw9jYO5Cg7dzYReUqvo8j1HldWa%2BfrsOPRrkU2Mw0EmuLQRKvrcMGyoNKO0%2BUZCcnhaA15gXuxQ3n%2BFHiMBFDYwDx1cZqxz3ZWfc26X2kVcVit2tOBWwmqYt0clsQhL8gcieHsBjGrH3%2F9YsUuoPS53zI7CO%2FOrkyVuB1OtuxRF32Z6vfFe3JZUm1Y7tw089bQteITUesK8WRlpvWArop8FJFUiQKe8HV9dbZUuKQQS36imoy0qiXk4bdeny0rc4gcIqH6iNSOMmsC3VeVMjkq5k4M2j%2FNukiJ%2B6YyYLfu2MHPRGdQZeleseI6p34If8VBEL1zzMBUNNQ%2FQlLl%2F%2Bz3gAmFah%2FyAkdYSOsBOMwn%2Bu7vwY6pgElsBlQTxUS0nhLbKv0afLiBjKK7SOAO%2FACvztEyI8sDVZkavjCJWiIq6SryrahwRy8YZq2Bns5XGKUMVDomFD4mjkpS%2B1WS9EBMAWYO8BBYqT%2FxjH9RyVWDXERuod%2FQJyaCFBfHSnX8K7S3Y91%2BQ9mnnKilAADgVA3oNZsLwqRielaG%2FTU%2BVaKYar%2FbZ911hr2wOvdUGJ9LFk7o8BBQBmFa8I5U14Z&X-Amz-Signature=2a323ce41b6171ee7c634d3bd3a14992ea9cdcf488db6c512882107ae1b87a07&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGJCVR4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfuZXfRD%2B5EWWFIVynj2%2F3htahED7yqW58peyuwm09FAiBpTpoyq9ohNlLQkLYmL3EGOChSnlRrBPILmDT0YpICGyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzga9K05eDqquWmpfKtwDKQeKpdCHJBimDvU1NHtLHeh5jXWkLdSI8X847ZLznkKdeRM9chpIfsYGE7ffOZNSFCZaXMWdmWMa4UG3bwT9fshHA9crv5EdbsjNfnXoXlLAivWaA9XLTnOPOWQDKGJMPz5wn%2BdjJrZoqKJjnaeyPnC76iFZ9%2FfbdzkyHX%2FiIO71vB0FDAVasxXDKc%2BxsNNTtvmm08ycVbMpwoC3YuBJ1L%2B3%2FyWJzUVLFI8pYMQMeQcjcKVS0AkJ2bUzbqqjXkLs8%2FLXEaG9M2xkszqis9Rpw9jYO5Cg7dzYReUqvo8j1HldWa%2BfrsOPRrkU2Mw0EmuLQRKvrcMGyoNKO0%2BUZCcnhaA15gXuxQ3n%2BFHiMBFDYwDx1cZqxz3ZWfc26X2kVcVit2tOBWwmqYt0clsQhL8gcieHsBjGrH3%2F9YsUuoPS53zI7CO%2FOrkyVuB1OtuxRF32Z6vfFe3JZUm1Y7tw089bQteITUesK8WRlpvWArop8FJFUiQKe8HV9dbZUuKQQS36imoy0qiXk4bdeny0rc4gcIqH6iNSOMmsC3VeVMjkq5k4M2j%2FNukiJ%2B6YyYLfu2MHPRGdQZeleseI6p34If8VBEL1zzMBUNNQ%2FQlLl%2F%2Bz3gAmFah%2FyAkdYSOsBOMwn%2Bu7vwY6pgElsBlQTxUS0nhLbKv0afLiBjKK7SOAO%2FACvztEyI8sDVZkavjCJWiIq6SryrahwRy8YZq2Bns5XGKUMVDomFD4mjkpS%2B1WS9EBMAWYO8BBYqT%2FxjH9RyVWDXERuod%2FQJyaCFBfHSnX8K7S3Y91%2BQ9mnnKilAADgVA3oNZsLwqRielaG%2FTU%2BVaKYar%2FbZ911hr2wOvdUGJ9LFk7o8BBQBmFa8I5U14Z&X-Amz-Signature=a0e62c0e04d9c85dcb305f3a506c0b472b28f9bd4d3ae38de56598e9dd6bc4f5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGJCVR4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfuZXfRD%2B5EWWFIVynj2%2F3htahED7yqW58peyuwm09FAiBpTpoyq9ohNlLQkLYmL3EGOChSnlRrBPILmDT0YpICGyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzga9K05eDqquWmpfKtwDKQeKpdCHJBimDvU1NHtLHeh5jXWkLdSI8X847ZLznkKdeRM9chpIfsYGE7ffOZNSFCZaXMWdmWMa4UG3bwT9fshHA9crv5EdbsjNfnXoXlLAivWaA9XLTnOPOWQDKGJMPz5wn%2BdjJrZoqKJjnaeyPnC76iFZ9%2FfbdzkyHX%2FiIO71vB0FDAVasxXDKc%2BxsNNTtvmm08ycVbMpwoC3YuBJ1L%2B3%2FyWJzUVLFI8pYMQMeQcjcKVS0AkJ2bUzbqqjXkLs8%2FLXEaG9M2xkszqis9Rpw9jYO5Cg7dzYReUqvo8j1HldWa%2BfrsOPRrkU2Mw0EmuLQRKvrcMGyoNKO0%2BUZCcnhaA15gXuxQ3n%2BFHiMBFDYwDx1cZqxz3ZWfc26X2kVcVit2tOBWwmqYt0clsQhL8gcieHsBjGrH3%2F9YsUuoPS53zI7CO%2FOrkyVuB1OtuxRF32Z6vfFe3JZUm1Y7tw089bQteITUesK8WRlpvWArop8FJFUiQKe8HV9dbZUuKQQS36imoy0qiXk4bdeny0rc4gcIqH6iNSOMmsC3VeVMjkq5k4M2j%2FNukiJ%2B6YyYLfu2MHPRGdQZeleseI6p34If8VBEL1zzMBUNNQ%2FQlLl%2F%2Bz3gAmFah%2FyAkdYSOsBOMwn%2Bu7vwY6pgElsBlQTxUS0nhLbKv0afLiBjKK7SOAO%2FACvztEyI8sDVZkavjCJWiIq6SryrahwRy8YZq2Bns5XGKUMVDomFD4mjkpS%2B1WS9EBMAWYO8BBYqT%2FxjH9RyVWDXERuod%2FQJyaCFBfHSnX8K7S3Y91%2BQ9mnnKilAADgVA3oNZsLwqRielaG%2FTU%2BVaKYar%2FbZ911hr2wOvdUGJ9LFk7o8BBQBmFa8I5U14Z&X-Amz-Signature=ecb1c8f3137da15d9f4940e8f6835b51e85f8ec6397da9c275f2d328a7e5fc13&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
