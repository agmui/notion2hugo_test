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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3FUOYO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLBhBPEIVhgkkkkPGf1bTtwyMBkhdtGOI9KS%2BzhKQ0qQIhANWpTsMxeGC2V3YuC826XczastMvqx7UcGQCXhMDoIT3KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLJ9KIOsxQaSctH5gq3AMeU2Sd7oLqT7jyo0Exl3hPmMTohE7WujnjH7146VwdBCZaISm8LAxkg3lMj42wZ1p8SfOq3Hbsi%2FtMkqOguPsU1uwjnJ0disEh8j1y8sQRzb7iWtEoRLKXKySRdMmihd2iJfFNF5XRyI7ida8LT0derefmM%2FCUAORIasoi6NHDZpeXToh%2FkV5ZsXvEPhAQuY0AqvGEPcnrp3Din7UozNuuNV01KKHmbZCwlSPss7B6xPNZJOkrHQ3MvQYsr4XnqpLa03QPO6J0Ikym0KZNmu2lFfWKaKt0EdHIa6cLoomL%2BKPyJo%2F8hdWB7eFq9cVfU0E4uQfaMCoS9hjjQlqKyEAbhrCB%2FkZ%2F4qKRZimYY2rs%2BChTjBSSK8iTb9Ahrg8hRszWygXHb%2FvvEwp88BRTYicc%2BeIoaQxTRbp6u8T0kro3kTkaWYaA4sphxBBT2%2BKI3BW9fLgw0cMXEPbW40c85pr%2BjXRVcR3Y2QyQUGx%2BYk1B6UO4kF3i85lFz9PbVnBBnrmyYIc7V%2FElEIN4QaFbWn8ZUrQmJ7lrcfhoSzcOvA229w75zF%2BejO5OhO4ojOt%2FQXin1fh9tGE68MRzexAePDFTNTilQ1GikoBhP6HVaykaQKZTNwBKaB52674fUDDvo43DBjqkAYOXhYlgxgOeNHybls%2BM9fB3ChUFcwIxd8BRSvChjzlOE02XgngzoF99rGGTT6hYb3NZqeBT7yxt6bBHHiRdYDQgtsX%2FVQv2yUNaaht8%2FTvIoa7QwpjnORqDYpoJ%2BGPAFaBQOkZjLLRIdcJwpPIOYsMKcY%2FIw52GBFVI7Q28NSFVeDfalaEtOojD8ThM5ktt4KIUuH1INmYBlFmyu%2BTcWBAoEZVx&X-Amz-Signature=cd5a9f3c375d4257e88988812e3ae458aed9453e5e0bad1ca5b3649e5e3422ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3FUOYO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLBhBPEIVhgkkkkPGf1bTtwyMBkhdtGOI9KS%2BzhKQ0qQIhANWpTsMxeGC2V3YuC826XczastMvqx7UcGQCXhMDoIT3KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLJ9KIOsxQaSctH5gq3AMeU2Sd7oLqT7jyo0Exl3hPmMTohE7WujnjH7146VwdBCZaISm8LAxkg3lMj42wZ1p8SfOq3Hbsi%2FtMkqOguPsU1uwjnJ0disEh8j1y8sQRzb7iWtEoRLKXKySRdMmihd2iJfFNF5XRyI7ida8LT0derefmM%2FCUAORIasoi6NHDZpeXToh%2FkV5ZsXvEPhAQuY0AqvGEPcnrp3Din7UozNuuNV01KKHmbZCwlSPss7B6xPNZJOkrHQ3MvQYsr4XnqpLa03QPO6J0Ikym0KZNmu2lFfWKaKt0EdHIa6cLoomL%2BKPyJo%2F8hdWB7eFq9cVfU0E4uQfaMCoS9hjjQlqKyEAbhrCB%2FkZ%2F4qKRZimYY2rs%2BChTjBSSK8iTb9Ahrg8hRszWygXHb%2FvvEwp88BRTYicc%2BeIoaQxTRbp6u8T0kro3kTkaWYaA4sphxBBT2%2BKI3BW9fLgw0cMXEPbW40c85pr%2BjXRVcR3Y2QyQUGx%2BYk1B6UO4kF3i85lFz9PbVnBBnrmyYIc7V%2FElEIN4QaFbWn8ZUrQmJ7lrcfhoSzcOvA229w75zF%2BejO5OhO4ojOt%2FQXin1fh9tGE68MRzexAePDFTNTilQ1GikoBhP6HVaykaQKZTNwBKaB52674fUDDvo43DBjqkAYOXhYlgxgOeNHybls%2BM9fB3ChUFcwIxd8BRSvChjzlOE02XgngzoF99rGGTT6hYb3NZqeBT7yxt6bBHHiRdYDQgtsX%2FVQv2yUNaaht8%2FTvIoa7QwpjnORqDYpoJ%2BGPAFaBQOkZjLLRIdcJwpPIOYsMKcY%2FIw52GBFVI7Q28NSFVeDfalaEtOojD8ThM5ktt4KIUuH1INmYBlFmyu%2BTcWBAoEZVx&X-Amz-Signature=1faf9e0d32464bb6724abc9f6929a37f8456652de952df9fb7be616b6049c79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3FUOYO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLBhBPEIVhgkkkkPGf1bTtwyMBkhdtGOI9KS%2BzhKQ0qQIhANWpTsMxeGC2V3YuC826XczastMvqx7UcGQCXhMDoIT3KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLJ9KIOsxQaSctH5gq3AMeU2Sd7oLqT7jyo0Exl3hPmMTohE7WujnjH7146VwdBCZaISm8LAxkg3lMj42wZ1p8SfOq3Hbsi%2FtMkqOguPsU1uwjnJ0disEh8j1y8sQRzb7iWtEoRLKXKySRdMmihd2iJfFNF5XRyI7ida8LT0derefmM%2FCUAORIasoi6NHDZpeXToh%2FkV5ZsXvEPhAQuY0AqvGEPcnrp3Din7UozNuuNV01KKHmbZCwlSPss7B6xPNZJOkrHQ3MvQYsr4XnqpLa03QPO6J0Ikym0KZNmu2lFfWKaKt0EdHIa6cLoomL%2BKPyJo%2F8hdWB7eFq9cVfU0E4uQfaMCoS9hjjQlqKyEAbhrCB%2FkZ%2F4qKRZimYY2rs%2BChTjBSSK8iTb9Ahrg8hRszWygXHb%2FvvEwp88BRTYicc%2BeIoaQxTRbp6u8T0kro3kTkaWYaA4sphxBBT2%2BKI3BW9fLgw0cMXEPbW40c85pr%2BjXRVcR3Y2QyQUGx%2BYk1B6UO4kF3i85lFz9PbVnBBnrmyYIc7V%2FElEIN4QaFbWn8ZUrQmJ7lrcfhoSzcOvA229w75zF%2BejO5OhO4ojOt%2FQXin1fh9tGE68MRzexAePDFTNTilQ1GikoBhP6HVaykaQKZTNwBKaB52674fUDDvo43DBjqkAYOXhYlgxgOeNHybls%2BM9fB3ChUFcwIxd8BRSvChjzlOE02XgngzoF99rGGTT6hYb3NZqeBT7yxt6bBHHiRdYDQgtsX%2FVQv2yUNaaht8%2FTvIoa7QwpjnORqDYpoJ%2BGPAFaBQOkZjLLRIdcJwpPIOYsMKcY%2FIw52GBFVI7Q28NSFVeDfalaEtOojD8ThM5ktt4KIUuH1INmYBlFmyu%2BTcWBAoEZVx&X-Amz-Signature=d430e9759b4e10969b04d9c17dd244924216bb7342b5d3158788dd8043935747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3FUOYO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLBhBPEIVhgkkkkPGf1bTtwyMBkhdtGOI9KS%2BzhKQ0qQIhANWpTsMxeGC2V3YuC826XczastMvqx7UcGQCXhMDoIT3KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLJ9KIOsxQaSctH5gq3AMeU2Sd7oLqT7jyo0Exl3hPmMTohE7WujnjH7146VwdBCZaISm8LAxkg3lMj42wZ1p8SfOq3Hbsi%2FtMkqOguPsU1uwjnJ0disEh8j1y8sQRzb7iWtEoRLKXKySRdMmihd2iJfFNF5XRyI7ida8LT0derefmM%2FCUAORIasoi6NHDZpeXToh%2FkV5ZsXvEPhAQuY0AqvGEPcnrp3Din7UozNuuNV01KKHmbZCwlSPss7B6xPNZJOkrHQ3MvQYsr4XnqpLa03QPO6J0Ikym0KZNmu2lFfWKaKt0EdHIa6cLoomL%2BKPyJo%2F8hdWB7eFq9cVfU0E4uQfaMCoS9hjjQlqKyEAbhrCB%2FkZ%2F4qKRZimYY2rs%2BChTjBSSK8iTb9Ahrg8hRszWygXHb%2FvvEwp88BRTYicc%2BeIoaQxTRbp6u8T0kro3kTkaWYaA4sphxBBT2%2BKI3BW9fLgw0cMXEPbW40c85pr%2BjXRVcR3Y2QyQUGx%2BYk1B6UO4kF3i85lFz9PbVnBBnrmyYIc7V%2FElEIN4QaFbWn8ZUrQmJ7lrcfhoSzcOvA229w75zF%2BejO5OhO4ojOt%2FQXin1fh9tGE68MRzexAePDFTNTilQ1GikoBhP6HVaykaQKZTNwBKaB52674fUDDvo43DBjqkAYOXhYlgxgOeNHybls%2BM9fB3ChUFcwIxd8BRSvChjzlOE02XgngzoF99rGGTT6hYb3NZqeBT7yxt6bBHHiRdYDQgtsX%2FVQv2yUNaaht8%2FTvIoa7QwpjnORqDYpoJ%2BGPAFaBQOkZjLLRIdcJwpPIOYsMKcY%2FIw52GBFVI7Q28NSFVeDfalaEtOojD8ThM5ktt4KIUuH1INmYBlFmyu%2BTcWBAoEZVx&X-Amz-Signature=fad2163a1bdad44dfd895f56b884b03c5bb5a93cf242d91ea1cea325b4062994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3FUOYO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLBhBPEIVhgkkkkPGf1bTtwyMBkhdtGOI9KS%2BzhKQ0qQIhANWpTsMxeGC2V3YuC826XczastMvqx7UcGQCXhMDoIT3KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLJ9KIOsxQaSctH5gq3AMeU2Sd7oLqT7jyo0Exl3hPmMTohE7WujnjH7146VwdBCZaISm8LAxkg3lMj42wZ1p8SfOq3Hbsi%2FtMkqOguPsU1uwjnJ0disEh8j1y8sQRzb7iWtEoRLKXKySRdMmihd2iJfFNF5XRyI7ida8LT0derefmM%2FCUAORIasoi6NHDZpeXToh%2FkV5ZsXvEPhAQuY0AqvGEPcnrp3Din7UozNuuNV01KKHmbZCwlSPss7B6xPNZJOkrHQ3MvQYsr4XnqpLa03QPO6J0Ikym0KZNmu2lFfWKaKt0EdHIa6cLoomL%2BKPyJo%2F8hdWB7eFq9cVfU0E4uQfaMCoS9hjjQlqKyEAbhrCB%2FkZ%2F4qKRZimYY2rs%2BChTjBSSK8iTb9Ahrg8hRszWygXHb%2FvvEwp88BRTYicc%2BeIoaQxTRbp6u8T0kro3kTkaWYaA4sphxBBT2%2BKI3BW9fLgw0cMXEPbW40c85pr%2BjXRVcR3Y2QyQUGx%2BYk1B6UO4kF3i85lFz9PbVnBBnrmyYIc7V%2FElEIN4QaFbWn8ZUrQmJ7lrcfhoSzcOvA229w75zF%2BejO5OhO4ojOt%2FQXin1fh9tGE68MRzexAePDFTNTilQ1GikoBhP6HVaykaQKZTNwBKaB52674fUDDvo43DBjqkAYOXhYlgxgOeNHybls%2BM9fB3ChUFcwIxd8BRSvChjzlOE02XgngzoF99rGGTT6hYb3NZqeBT7yxt6bBHHiRdYDQgtsX%2FVQv2yUNaaht8%2FTvIoa7QwpjnORqDYpoJ%2BGPAFaBQOkZjLLRIdcJwpPIOYsMKcY%2FIw52GBFVI7Q28NSFVeDfalaEtOojD8ThM5ktt4KIUuH1INmYBlFmyu%2BTcWBAoEZVx&X-Amz-Signature=c1021a71556658b68789b12fa124e2a7c62af24bc09964414fff71309d8a1764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3FUOYO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLBhBPEIVhgkkkkPGf1bTtwyMBkhdtGOI9KS%2BzhKQ0qQIhANWpTsMxeGC2V3YuC826XczastMvqx7UcGQCXhMDoIT3KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLJ9KIOsxQaSctH5gq3AMeU2Sd7oLqT7jyo0Exl3hPmMTohE7WujnjH7146VwdBCZaISm8LAxkg3lMj42wZ1p8SfOq3Hbsi%2FtMkqOguPsU1uwjnJ0disEh8j1y8sQRzb7iWtEoRLKXKySRdMmihd2iJfFNF5XRyI7ida8LT0derefmM%2FCUAORIasoi6NHDZpeXToh%2FkV5ZsXvEPhAQuY0AqvGEPcnrp3Din7UozNuuNV01KKHmbZCwlSPss7B6xPNZJOkrHQ3MvQYsr4XnqpLa03QPO6J0Ikym0KZNmu2lFfWKaKt0EdHIa6cLoomL%2BKPyJo%2F8hdWB7eFq9cVfU0E4uQfaMCoS9hjjQlqKyEAbhrCB%2FkZ%2F4qKRZimYY2rs%2BChTjBSSK8iTb9Ahrg8hRszWygXHb%2FvvEwp88BRTYicc%2BeIoaQxTRbp6u8T0kro3kTkaWYaA4sphxBBT2%2BKI3BW9fLgw0cMXEPbW40c85pr%2BjXRVcR3Y2QyQUGx%2BYk1B6UO4kF3i85lFz9PbVnBBnrmyYIc7V%2FElEIN4QaFbWn8ZUrQmJ7lrcfhoSzcOvA229w75zF%2BejO5OhO4ojOt%2FQXin1fh9tGE68MRzexAePDFTNTilQ1GikoBhP6HVaykaQKZTNwBKaB52674fUDDvo43DBjqkAYOXhYlgxgOeNHybls%2BM9fB3ChUFcwIxd8BRSvChjzlOE02XgngzoF99rGGTT6hYb3NZqeBT7yxt6bBHHiRdYDQgtsX%2FVQv2yUNaaht8%2FTvIoa7QwpjnORqDYpoJ%2BGPAFaBQOkZjLLRIdcJwpPIOYsMKcY%2FIw52GBFVI7Q28NSFVeDfalaEtOojD8ThM5ktt4KIUuH1INmYBlFmyu%2BTcWBAoEZVx&X-Amz-Signature=39b770e9396387f72770c73ce1901917eb12295c9ede4453ceabcfe43dc641f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3FUOYO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLBhBPEIVhgkkkkPGf1bTtwyMBkhdtGOI9KS%2BzhKQ0qQIhANWpTsMxeGC2V3YuC826XczastMvqx7UcGQCXhMDoIT3KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLJ9KIOsxQaSctH5gq3AMeU2Sd7oLqT7jyo0Exl3hPmMTohE7WujnjH7146VwdBCZaISm8LAxkg3lMj42wZ1p8SfOq3Hbsi%2FtMkqOguPsU1uwjnJ0disEh8j1y8sQRzb7iWtEoRLKXKySRdMmihd2iJfFNF5XRyI7ida8LT0derefmM%2FCUAORIasoi6NHDZpeXToh%2FkV5ZsXvEPhAQuY0AqvGEPcnrp3Din7UozNuuNV01KKHmbZCwlSPss7B6xPNZJOkrHQ3MvQYsr4XnqpLa03QPO6J0Ikym0KZNmu2lFfWKaKt0EdHIa6cLoomL%2BKPyJo%2F8hdWB7eFq9cVfU0E4uQfaMCoS9hjjQlqKyEAbhrCB%2FkZ%2F4qKRZimYY2rs%2BChTjBSSK8iTb9Ahrg8hRszWygXHb%2FvvEwp88BRTYicc%2BeIoaQxTRbp6u8T0kro3kTkaWYaA4sphxBBT2%2BKI3BW9fLgw0cMXEPbW40c85pr%2BjXRVcR3Y2QyQUGx%2BYk1B6UO4kF3i85lFz9PbVnBBnrmyYIc7V%2FElEIN4QaFbWn8ZUrQmJ7lrcfhoSzcOvA229w75zF%2BejO5OhO4ojOt%2FQXin1fh9tGE68MRzexAePDFTNTilQ1GikoBhP6HVaykaQKZTNwBKaB52674fUDDvo43DBjqkAYOXhYlgxgOeNHybls%2BM9fB3ChUFcwIxd8BRSvChjzlOE02XgngzoF99rGGTT6hYb3NZqeBT7yxt6bBHHiRdYDQgtsX%2FVQv2yUNaaht8%2FTvIoa7QwpjnORqDYpoJ%2BGPAFaBQOkZjLLRIdcJwpPIOYsMKcY%2FIw52GBFVI7Q28NSFVeDfalaEtOojD8ThM5ktt4KIUuH1INmYBlFmyu%2BTcWBAoEZVx&X-Amz-Signature=7715df41d6e6d1017aebdba5fdb18990ca502e00d8be2370af0343147cfcfe18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
