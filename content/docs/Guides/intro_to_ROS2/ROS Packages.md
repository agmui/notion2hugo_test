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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7N6BP6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdFIG1kUATnVUiFXNyROVyLCTtV4cuxuPFvngNb0J47AIgdWauy8SnQhIqjX0wIUSvyK2gflCr%2BNyKm9a%2FnHPiVcAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFUvBzPsZNVsDQTGtSrcAzzVrQjdOqrEAmUcyfBGDl0U6npZZojoVL8TLQOvzwJOM6FClUPHbwYhLybTXfznEuTNF0MPDyNAKGGqPiRNc9AnI2TI5QhuIMUgVX%2BPZDQraWGDVdXx83C7%2FKpCj4WhgDyYEjfk4YaoQva02oDFj3Ws7WJoCQk5sCqyyz3gHvzUmZy%2BXCuhiKjMHZrTyfW9q%2BRFnUnp7T%2FyVlJi2kBtImooKELo%2FmMXdRFztnW8IXIB06oKzocBcz2yYAC%2F7CpsvHbjF2BYFqL%2FAH9Zqg5Utb%2BOiioaetwhqyp4E3uxZIxCm%2BiI1u%2FEshpaZOzkRQk1Izzu%2BTzydeZs%2BRkPN2oVTEIeIqpPwA%2BiXlPCa3%2BODIvzOj1MgUt%2BeeZfgtQYGQQ%2FxmbVaQlfe0fsckS%2BcGTQY%2FqEESs%2BjYRV0XF8D8lPXEACtJ3C%2BLL4XuTHaSUYH1sf8NKFpA9Mnc8egsFZCvU5glyyhsA9aizdaf5%2BONh24aickd1u64qa%2FRB%2FInzUAokXuoa6KDgmp56uKFvDw3WwHGJ1w6%2FjKEzkRpIlKoVIZqCzIuO%2Bi%2Brv%2B44U%2Box7aHnPB1BdFUa%2BQjxC9oM%2BaLeON9ElmVdXQI1Kh2KY%2B02vaSgn8VSmET3NZzKGTC0GMO7rzb8GOqUBDWExp%2FRt%2Fe6rSywxivOg4BXQv%2B2sTe8VyM1tVRh3e9uaDZBxaFmA3v2OlOauUi%2FTDXyjKZOZBc9QfoUfYEK2%2F%2FMKEZNumEivEDY8ajT6tDVw6n%2FtBmTOJDx%2BM6%2FNpDSStYl33zDUD0sHWcXIpvMEROJxjIqtDdbPuAEqUxjs3xU9motxzx6jiXybVxGkj6ZNhSUEI4g4V4VdY2sPliEwN1XIDD7R&X-Amz-Signature=4a5d0eb3792a750a4247fcfc7b7afc4dbae5af332dae52ce408a20b288df24dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7N6BP6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdFIG1kUATnVUiFXNyROVyLCTtV4cuxuPFvngNb0J47AIgdWauy8SnQhIqjX0wIUSvyK2gflCr%2BNyKm9a%2FnHPiVcAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFUvBzPsZNVsDQTGtSrcAzzVrQjdOqrEAmUcyfBGDl0U6npZZojoVL8TLQOvzwJOM6FClUPHbwYhLybTXfznEuTNF0MPDyNAKGGqPiRNc9AnI2TI5QhuIMUgVX%2BPZDQraWGDVdXx83C7%2FKpCj4WhgDyYEjfk4YaoQva02oDFj3Ws7WJoCQk5sCqyyz3gHvzUmZy%2BXCuhiKjMHZrTyfW9q%2BRFnUnp7T%2FyVlJi2kBtImooKELo%2FmMXdRFztnW8IXIB06oKzocBcz2yYAC%2F7CpsvHbjF2BYFqL%2FAH9Zqg5Utb%2BOiioaetwhqyp4E3uxZIxCm%2BiI1u%2FEshpaZOzkRQk1Izzu%2BTzydeZs%2BRkPN2oVTEIeIqpPwA%2BiXlPCa3%2BODIvzOj1MgUt%2BeeZfgtQYGQQ%2FxmbVaQlfe0fsckS%2BcGTQY%2FqEESs%2BjYRV0XF8D8lPXEACtJ3C%2BLL4XuTHaSUYH1sf8NKFpA9Mnc8egsFZCvU5glyyhsA9aizdaf5%2BONh24aickd1u64qa%2FRB%2FInzUAokXuoa6KDgmp56uKFvDw3WwHGJ1w6%2FjKEzkRpIlKoVIZqCzIuO%2Bi%2Brv%2B44U%2Box7aHnPB1BdFUa%2BQjxC9oM%2BaLeON9ElmVdXQI1Kh2KY%2B02vaSgn8VSmET3NZzKGTC0GMO7rzb8GOqUBDWExp%2FRt%2Fe6rSywxivOg4BXQv%2B2sTe8VyM1tVRh3e9uaDZBxaFmA3v2OlOauUi%2FTDXyjKZOZBc9QfoUfYEK2%2F%2FMKEZNumEivEDY8ajT6tDVw6n%2FtBmTOJDx%2BM6%2FNpDSStYl33zDUD0sHWcXIpvMEROJxjIqtDdbPuAEqUxjs3xU9motxzx6jiXybVxGkj6ZNhSUEI4g4V4VdY2sPliEwN1XIDD7R&X-Amz-Signature=e89c4360f7501ca6c739e0f82c1ee27e4a517b933523b7e33aa68ab2a4bd46e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7N6BP6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdFIG1kUATnVUiFXNyROVyLCTtV4cuxuPFvngNb0J47AIgdWauy8SnQhIqjX0wIUSvyK2gflCr%2BNyKm9a%2FnHPiVcAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFUvBzPsZNVsDQTGtSrcAzzVrQjdOqrEAmUcyfBGDl0U6npZZojoVL8TLQOvzwJOM6FClUPHbwYhLybTXfznEuTNF0MPDyNAKGGqPiRNc9AnI2TI5QhuIMUgVX%2BPZDQraWGDVdXx83C7%2FKpCj4WhgDyYEjfk4YaoQva02oDFj3Ws7WJoCQk5sCqyyz3gHvzUmZy%2BXCuhiKjMHZrTyfW9q%2BRFnUnp7T%2FyVlJi2kBtImooKELo%2FmMXdRFztnW8IXIB06oKzocBcz2yYAC%2F7CpsvHbjF2BYFqL%2FAH9Zqg5Utb%2BOiioaetwhqyp4E3uxZIxCm%2BiI1u%2FEshpaZOzkRQk1Izzu%2BTzydeZs%2BRkPN2oVTEIeIqpPwA%2BiXlPCa3%2BODIvzOj1MgUt%2BeeZfgtQYGQQ%2FxmbVaQlfe0fsckS%2BcGTQY%2FqEESs%2BjYRV0XF8D8lPXEACtJ3C%2BLL4XuTHaSUYH1sf8NKFpA9Mnc8egsFZCvU5glyyhsA9aizdaf5%2BONh24aickd1u64qa%2FRB%2FInzUAokXuoa6KDgmp56uKFvDw3WwHGJ1w6%2FjKEzkRpIlKoVIZqCzIuO%2Bi%2Brv%2B44U%2Box7aHnPB1BdFUa%2BQjxC9oM%2BaLeON9ElmVdXQI1Kh2KY%2B02vaSgn8VSmET3NZzKGTC0GMO7rzb8GOqUBDWExp%2FRt%2Fe6rSywxivOg4BXQv%2B2sTe8VyM1tVRh3e9uaDZBxaFmA3v2OlOauUi%2FTDXyjKZOZBc9QfoUfYEK2%2F%2FMKEZNumEivEDY8ajT6tDVw6n%2FtBmTOJDx%2BM6%2FNpDSStYl33zDUD0sHWcXIpvMEROJxjIqtDdbPuAEqUxjs3xU9motxzx6jiXybVxGkj6ZNhSUEI4g4V4VdY2sPliEwN1XIDD7R&X-Amz-Signature=bba76749ce9e18bab21ea9c79e6fe1aee546a207ade2b5ba59dc8a762cb089ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7N6BP6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdFIG1kUATnVUiFXNyROVyLCTtV4cuxuPFvngNb0J47AIgdWauy8SnQhIqjX0wIUSvyK2gflCr%2BNyKm9a%2FnHPiVcAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFUvBzPsZNVsDQTGtSrcAzzVrQjdOqrEAmUcyfBGDl0U6npZZojoVL8TLQOvzwJOM6FClUPHbwYhLybTXfznEuTNF0MPDyNAKGGqPiRNc9AnI2TI5QhuIMUgVX%2BPZDQraWGDVdXx83C7%2FKpCj4WhgDyYEjfk4YaoQva02oDFj3Ws7WJoCQk5sCqyyz3gHvzUmZy%2BXCuhiKjMHZrTyfW9q%2BRFnUnp7T%2FyVlJi2kBtImooKELo%2FmMXdRFztnW8IXIB06oKzocBcz2yYAC%2F7CpsvHbjF2BYFqL%2FAH9Zqg5Utb%2BOiioaetwhqyp4E3uxZIxCm%2BiI1u%2FEshpaZOzkRQk1Izzu%2BTzydeZs%2BRkPN2oVTEIeIqpPwA%2BiXlPCa3%2BODIvzOj1MgUt%2BeeZfgtQYGQQ%2FxmbVaQlfe0fsckS%2BcGTQY%2FqEESs%2BjYRV0XF8D8lPXEACtJ3C%2BLL4XuTHaSUYH1sf8NKFpA9Mnc8egsFZCvU5glyyhsA9aizdaf5%2BONh24aickd1u64qa%2FRB%2FInzUAokXuoa6KDgmp56uKFvDw3WwHGJ1w6%2FjKEzkRpIlKoVIZqCzIuO%2Bi%2Brv%2B44U%2Box7aHnPB1BdFUa%2BQjxC9oM%2BaLeON9ElmVdXQI1Kh2KY%2B02vaSgn8VSmET3NZzKGTC0GMO7rzb8GOqUBDWExp%2FRt%2Fe6rSywxivOg4BXQv%2B2sTe8VyM1tVRh3e9uaDZBxaFmA3v2OlOauUi%2FTDXyjKZOZBc9QfoUfYEK2%2F%2FMKEZNumEivEDY8ajT6tDVw6n%2FtBmTOJDx%2BM6%2FNpDSStYl33zDUD0sHWcXIpvMEROJxjIqtDdbPuAEqUxjs3xU9motxzx6jiXybVxGkj6ZNhSUEI4g4V4VdY2sPliEwN1XIDD7R&X-Amz-Signature=bd55c12b47075a54d2ce098f3f0f7f8da2999b8eb10af7adb4ac19354315792d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7N6BP6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdFIG1kUATnVUiFXNyROVyLCTtV4cuxuPFvngNb0J47AIgdWauy8SnQhIqjX0wIUSvyK2gflCr%2BNyKm9a%2FnHPiVcAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFUvBzPsZNVsDQTGtSrcAzzVrQjdOqrEAmUcyfBGDl0U6npZZojoVL8TLQOvzwJOM6FClUPHbwYhLybTXfznEuTNF0MPDyNAKGGqPiRNc9AnI2TI5QhuIMUgVX%2BPZDQraWGDVdXx83C7%2FKpCj4WhgDyYEjfk4YaoQva02oDFj3Ws7WJoCQk5sCqyyz3gHvzUmZy%2BXCuhiKjMHZrTyfW9q%2BRFnUnp7T%2FyVlJi2kBtImooKELo%2FmMXdRFztnW8IXIB06oKzocBcz2yYAC%2F7CpsvHbjF2BYFqL%2FAH9Zqg5Utb%2BOiioaetwhqyp4E3uxZIxCm%2BiI1u%2FEshpaZOzkRQk1Izzu%2BTzydeZs%2BRkPN2oVTEIeIqpPwA%2BiXlPCa3%2BODIvzOj1MgUt%2BeeZfgtQYGQQ%2FxmbVaQlfe0fsckS%2BcGTQY%2FqEESs%2BjYRV0XF8D8lPXEACtJ3C%2BLL4XuTHaSUYH1sf8NKFpA9Mnc8egsFZCvU5glyyhsA9aizdaf5%2BONh24aickd1u64qa%2FRB%2FInzUAokXuoa6KDgmp56uKFvDw3WwHGJ1w6%2FjKEzkRpIlKoVIZqCzIuO%2Bi%2Brv%2B44U%2Box7aHnPB1BdFUa%2BQjxC9oM%2BaLeON9ElmVdXQI1Kh2KY%2B02vaSgn8VSmET3NZzKGTC0GMO7rzb8GOqUBDWExp%2FRt%2Fe6rSywxivOg4BXQv%2B2sTe8VyM1tVRh3e9uaDZBxaFmA3v2OlOauUi%2FTDXyjKZOZBc9QfoUfYEK2%2F%2FMKEZNumEivEDY8ajT6tDVw6n%2FtBmTOJDx%2BM6%2FNpDSStYl33zDUD0sHWcXIpvMEROJxjIqtDdbPuAEqUxjs3xU9motxzx6jiXybVxGkj6ZNhSUEI4g4V4VdY2sPliEwN1XIDD7R&X-Amz-Signature=74379e349f1c2575a06f87547286ad512deeb829adf4f00ffc3e0e7a58016446&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7N6BP6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdFIG1kUATnVUiFXNyROVyLCTtV4cuxuPFvngNb0J47AIgdWauy8SnQhIqjX0wIUSvyK2gflCr%2BNyKm9a%2FnHPiVcAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFUvBzPsZNVsDQTGtSrcAzzVrQjdOqrEAmUcyfBGDl0U6npZZojoVL8TLQOvzwJOM6FClUPHbwYhLybTXfznEuTNF0MPDyNAKGGqPiRNc9AnI2TI5QhuIMUgVX%2BPZDQraWGDVdXx83C7%2FKpCj4WhgDyYEjfk4YaoQva02oDFj3Ws7WJoCQk5sCqyyz3gHvzUmZy%2BXCuhiKjMHZrTyfW9q%2BRFnUnp7T%2FyVlJi2kBtImooKELo%2FmMXdRFztnW8IXIB06oKzocBcz2yYAC%2F7CpsvHbjF2BYFqL%2FAH9Zqg5Utb%2BOiioaetwhqyp4E3uxZIxCm%2BiI1u%2FEshpaZOzkRQk1Izzu%2BTzydeZs%2BRkPN2oVTEIeIqpPwA%2BiXlPCa3%2BODIvzOj1MgUt%2BeeZfgtQYGQQ%2FxmbVaQlfe0fsckS%2BcGTQY%2FqEESs%2BjYRV0XF8D8lPXEACtJ3C%2BLL4XuTHaSUYH1sf8NKFpA9Mnc8egsFZCvU5glyyhsA9aizdaf5%2BONh24aickd1u64qa%2FRB%2FInzUAokXuoa6KDgmp56uKFvDw3WwHGJ1w6%2FjKEzkRpIlKoVIZqCzIuO%2Bi%2Brv%2B44U%2Box7aHnPB1BdFUa%2BQjxC9oM%2BaLeON9ElmVdXQI1Kh2KY%2B02vaSgn8VSmET3NZzKGTC0GMO7rzb8GOqUBDWExp%2FRt%2Fe6rSywxivOg4BXQv%2B2sTe8VyM1tVRh3e9uaDZBxaFmA3v2OlOauUi%2FTDXyjKZOZBc9QfoUfYEK2%2F%2FMKEZNumEivEDY8ajT6tDVw6n%2FtBmTOJDx%2BM6%2FNpDSStYl33zDUD0sHWcXIpvMEROJxjIqtDdbPuAEqUxjs3xU9motxzx6jiXybVxGkj6ZNhSUEI4g4V4VdY2sPliEwN1XIDD7R&X-Amz-Signature=711932ef1ef33d856cd6da04b3d00f90db1ce1e4a3c63d37482fc26ef65a2157&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7N6BP6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdFIG1kUATnVUiFXNyROVyLCTtV4cuxuPFvngNb0J47AIgdWauy8SnQhIqjX0wIUSvyK2gflCr%2BNyKm9a%2FnHPiVcAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFUvBzPsZNVsDQTGtSrcAzzVrQjdOqrEAmUcyfBGDl0U6npZZojoVL8TLQOvzwJOM6FClUPHbwYhLybTXfznEuTNF0MPDyNAKGGqPiRNc9AnI2TI5QhuIMUgVX%2BPZDQraWGDVdXx83C7%2FKpCj4WhgDyYEjfk4YaoQva02oDFj3Ws7WJoCQk5sCqyyz3gHvzUmZy%2BXCuhiKjMHZrTyfW9q%2BRFnUnp7T%2FyVlJi2kBtImooKELo%2FmMXdRFztnW8IXIB06oKzocBcz2yYAC%2F7CpsvHbjF2BYFqL%2FAH9Zqg5Utb%2BOiioaetwhqyp4E3uxZIxCm%2BiI1u%2FEshpaZOzkRQk1Izzu%2BTzydeZs%2BRkPN2oVTEIeIqpPwA%2BiXlPCa3%2BODIvzOj1MgUt%2BeeZfgtQYGQQ%2FxmbVaQlfe0fsckS%2BcGTQY%2FqEESs%2BjYRV0XF8D8lPXEACtJ3C%2BLL4XuTHaSUYH1sf8NKFpA9Mnc8egsFZCvU5glyyhsA9aizdaf5%2BONh24aickd1u64qa%2FRB%2FInzUAokXuoa6KDgmp56uKFvDw3WwHGJ1w6%2FjKEzkRpIlKoVIZqCzIuO%2Bi%2Brv%2B44U%2Box7aHnPB1BdFUa%2BQjxC9oM%2BaLeON9ElmVdXQI1Kh2KY%2B02vaSgn8VSmET3NZzKGTC0GMO7rzb8GOqUBDWExp%2FRt%2Fe6rSywxivOg4BXQv%2B2sTe8VyM1tVRh3e9uaDZBxaFmA3v2OlOauUi%2FTDXyjKZOZBc9QfoUfYEK2%2F%2FMKEZNumEivEDY8ajT6tDVw6n%2FtBmTOJDx%2BM6%2FNpDSStYl33zDUD0sHWcXIpvMEROJxjIqtDdbPuAEqUxjs3xU9motxzx6jiXybVxGkj6ZNhSUEI4g4V4VdY2sPliEwN1XIDD7R&X-Amz-Signature=11bb70680fc8fc4b8409931e1f8000706cc1b84e91a1691683061527f3a95b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
