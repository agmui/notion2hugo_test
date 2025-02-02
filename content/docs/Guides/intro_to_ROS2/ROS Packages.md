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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMSWSE7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz35S8%2FQjG2OjtyXm3onmiL18O%2BvF%2FHpJD%2Fn0rVzr1fAiAGvJ%2FGFGFDh9lpxl4fRECU%2Fbn0S24nI%2B9G49lOEtbioiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQWHuCP2H41uggX8tKtwD3JfBJO07e3BTgKKZK6U4ph1xKNQvyxo2qNfxI5oHbn2GVJIP%2BIndFj%2FMEhLEKuw20g5s5gUW%2BXLwLo16gKGsjus0R5INw55jTSHBB51zZkPxi6RTB60185nNHXbjuNDLMelohkXMltsoqpG%2BO4AlCx1Cg7MLDnPg3d%2BFsDEJkjOllc21FmqEqZgtkc5tTLXmYsTzBymndVMlIQE9lxmJuKZndCZ01TDf7DEgZLOh6oxfGwe7RS1byyXmvd5NS1XVv%2B0LxxpPIqGdON9KrECmGvHz%2B7UCnRzbhgNvnIk7tUe034rNboL%2FX0OVAcHinSEB8Q0HL%2FouFSvvTOmCswLR%2FkiSF5a4IfVIu2Vz0XA8%2BSKjEEy1wgDlPTtDmb9xJJ1hxVzCVDXC6YuhtuEft9rFlZES9E7fEU5HtyejmRSQpC0c0K56e8RUPBWq8CxOawSeDKFdLcDSq%2B%2BF71jEuyZYTGn9aQIwyEUQzmvvKYsBX7honOfdYKZG5nl3gZF5I%2BFRvzBBWdXOxSUvqZtf2o6imbv1hDOhtzQYM3dVauGyg53BAyrUXT797t4ey3nPOBgZFmisJYxQeZu2y1Qg4f0OCn%2FoGH7%2FokQ9iuW0kOpSp%2FyAOL9ZI093CICJH3IwgOf%2FvAY6pgGupib2QkVhJVDbjh%2BUGeunGbzD9iy%2BE%2FCmqjbxun976A6PKJM2dVLbiB74p1UanpLOJk1A8o2mC9it3uqW2N2Z9%2FrJPZzjwFAyYECEUamomU6a0DoyZnLZDelNk9rW5XyMFd%2FYR0W7ctSho3Sofieu21ZHlHINuelrzXcusAJHoN0c1R2I61Mus8W3iYJPZCDQ3GiUjj2E8t8FmWA7YoENbEwgHZmE&X-Amz-Signature=2c442bca0aa43076ef19bb9cdb33488908490058b29c0bc63d5b60b2e4bc01ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMSWSE7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz35S8%2FQjG2OjtyXm3onmiL18O%2BvF%2FHpJD%2Fn0rVzr1fAiAGvJ%2FGFGFDh9lpxl4fRECU%2Fbn0S24nI%2B9G49lOEtbioiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQWHuCP2H41uggX8tKtwD3JfBJO07e3BTgKKZK6U4ph1xKNQvyxo2qNfxI5oHbn2GVJIP%2BIndFj%2FMEhLEKuw20g5s5gUW%2BXLwLo16gKGsjus0R5INw55jTSHBB51zZkPxi6RTB60185nNHXbjuNDLMelohkXMltsoqpG%2BO4AlCx1Cg7MLDnPg3d%2BFsDEJkjOllc21FmqEqZgtkc5tTLXmYsTzBymndVMlIQE9lxmJuKZndCZ01TDf7DEgZLOh6oxfGwe7RS1byyXmvd5NS1XVv%2B0LxxpPIqGdON9KrECmGvHz%2B7UCnRzbhgNvnIk7tUe034rNboL%2FX0OVAcHinSEB8Q0HL%2FouFSvvTOmCswLR%2FkiSF5a4IfVIu2Vz0XA8%2BSKjEEy1wgDlPTtDmb9xJJ1hxVzCVDXC6YuhtuEft9rFlZES9E7fEU5HtyejmRSQpC0c0K56e8RUPBWq8CxOawSeDKFdLcDSq%2B%2BF71jEuyZYTGn9aQIwyEUQzmvvKYsBX7honOfdYKZG5nl3gZF5I%2BFRvzBBWdXOxSUvqZtf2o6imbv1hDOhtzQYM3dVauGyg53BAyrUXT797t4ey3nPOBgZFmisJYxQeZu2y1Qg4f0OCn%2FoGH7%2FokQ9iuW0kOpSp%2FyAOL9ZI093CICJH3IwgOf%2FvAY6pgGupib2QkVhJVDbjh%2BUGeunGbzD9iy%2BE%2FCmqjbxun976A6PKJM2dVLbiB74p1UanpLOJk1A8o2mC9it3uqW2N2Z9%2FrJPZzjwFAyYECEUamomU6a0DoyZnLZDelNk9rW5XyMFd%2FYR0W7ctSho3Sofieu21ZHlHINuelrzXcusAJHoN0c1R2I61Mus8W3iYJPZCDQ3GiUjj2E8t8FmWA7YoENbEwgHZmE&X-Amz-Signature=5f75d085c5cc2886eebe662568c94f5eb21fe362c2880d5937f46f02699dc073&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMSWSE7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz35S8%2FQjG2OjtyXm3onmiL18O%2BvF%2FHpJD%2Fn0rVzr1fAiAGvJ%2FGFGFDh9lpxl4fRECU%2Fbn0S24nI%2B9G49lOEtbioiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQWHuCP2H41uggX8tKtwD3JfBJO07e3BTgKKZK6U4ph1xKNQvyxo2qNfxI5oHbn2GVJIP%2BIndFj%2FMEhLEKuw20g5s5gUW%2BXLwLo16gKGsjus0R5INw55jTSHBB51zZkPxi6RTB60185nNHXbjuNDLMelohkXMltsoqpG%2BO4AlCx1Cg7MLDnPg3d%2BFsDEJkjOllc21FmqEqZgtkc5tTLXmYsTzBymndVMlIQE9lxmJuKZndCZ01TDf7DEgZLOh6oxfGwe7RS1byyXmvd5NS1XVv%2B0LxxpPIqGdON9KrECmGvHz%2B7UCnRzbhgNvnIk7tUe034rNboL%2FX0OVAcHinSEB8Q0HL%2FouFSvvTOmCswLR%2FkiSF5a4IfVIu2Vz0XA8%2BSKjEEy1wgDlPTtDmb9xJJ1hxVzCVDXC6YuhtuEft9rFlZES9E7fEU5HtyejmRSQpC0c0K56e8RUPBWq8CxOawSeDKFdLcDSq%2B%2BF71jEuyZYTGn9aQIwyEUQzmvvKYsBX7honOfdYKZG5nl3gZF5I%2BFRvzBBWdXOxSUvqZtf2o6imbv1hDOhtzQYM3dVauGyg53BAyrUXT797t4ey3nPOBgZFmisJYxQeZu2y1Qg4f0OCn%2FoGH7%2FokQ9iuW0kOpSp%2FyAOL9ZI093CICJH3IwgOf%2FvAY6pgGupib2QkVhJVDbjh%2BUGeunGbzD9iy%2BE%2FCmqjbxun976A6PKJM2dVLbiB74p1UanpLOJk1A8o2mC9it3uqW2N2Z9%2FrJPZzjwFAyYECEUamomU6a0DoyZnLZDelNk9rW5XyMFd%2FYR0W7ctSho3Sofieu21ZHlHINuelrzXcusAJHoN0c1R2I61Mus8W3iYJPZCDQ3GiUjj2E8t8FmWA7YoENbEwgHZmE&X-Amz-Signature=2be9b5e4bf7df5aaac3e033d29ee026b313c4959f37e9cd0acb26333a59637ba&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMSWSE7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz35S8%2FQjG2OjtyXm3onmiL18O%2BvF%2FHpJD%2Fn0rVzr1fAiAGvJ%2FGFGFDh9lpxl4fRECU%2Fbn0S24nI%2B9G49lOEtbioiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQWHuCP2H41uggX8tKtwD3JfBJO07e3BTgKKZK6U4ph1xKNQvyxo2qNfxI5oHbn2GVJIP%2BIndFj%2FMEhLEKuw20g5s5gUW%2BXLwLo16gKGsjus0R5INw55jTSHBB51zZkPxi6RTB60185nNHXbjuNDLMelohkXMltsoqpG%2BO4AlCx1Cg7MLDnPg3d%2BFsDEJkjOllc21FmqEqZgtkc5tTLXmYsTzBymndVMlIQE9lxmJuKZndCZ01TDf7DEgZLOh6oxfGwe7RS1byyXmvd5NS1XVv%2B0LxxpPIqGdON9KrECmGvHz%2B7UCnRzbhgNvnIk7tUe034rNboL%2FX0OVAcHinSEB8Q0HL%2FouFSvvTOmCswLR%2FkiSF5a4IfVIu2Vz0XA8%2BSKjEEy1wgDlPTtDmb9xJJ1hxVzCVDXC6YuhtuEft9rFlZES9E7fEU5HtyejmRSQpC0c0K56e8RUPBWq8CxOawSeDKFdLcDSq%2B%2BF71jEuyZYTGn9aQIwyEUQzmvvKYsBX7honOfdYKZG5nl3gZF5I%2BFRvzBBWdXOxSUvqZtf2o6imbv1hDOhtzQYM3dVauGyg53BAyrUXT797t4ey3nPOBgZFmisJYxQeZu2y1Qg4f0OCn%2FoGH7%2FokQ9iuW0kOpSp%2FyAOL9ZI093CICJH3IwgOf%2FvAY6pgGupib2QkVhJVDbjh%2BUGeunGbzD9iy%2BE%2FCmqjbxun976A6PKJM2dVLbiB74p1UanpLOJk1A8o2mC9it3uqW2N2Z9%2FrJPZzjwFAyYECEUamomU6a0DoyZnLZDelNk9rW5XyMFd%2FYR0W7ctSho3Sofieu21ZHlHINuelrzXcusAJHoN0c1R2I61Mus8W3iYJPZCDQ3GiUjj2E8t8FmWA7YoENbEwgHZmE&X-Amz-Signature=8bd9b9acda64e8979ea634b8166b1cf650f69b99ef2a14fe76b2ab6489dcdc1a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMSWSE7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz35S8%2FQjG2OjtyXm3onmiL18O%2BvF%2FHpJD%2Fn0rVzr1fAiAGvJ%2FGFGFDh9lpxl4fRECU%2Fbn0S24nI%2B9G49lOEtbioiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQWHuCP2H41uggX8tKtwD3JfBJO07e3BTgKKZK6U4ph1xKNQvyxo2qNfxI5oHbn2GVJIP%2BIndFj%2FMEhLEKuw20g5s5gUW%2BXLwLo16gKGsjus0R5INw55jTSHBB51zZkPxi6RTB60185nNHXbjuNDLMelohkXMltsoqpG%2BO4AlCx1Cg7MLDnPg3d%2BFsDEJkjOllc21FmqEqZgtkc5tTLXmYsTzBymndVMlIQE9lxmJuKZndCZ01TDf7DEgZLOh6oxfGwe7RS1byyXmvd5NS1XVv%2B0LxxpPIqGdON9KrECmGvHz%2B7UCnRzbhgNvnIk7tUe034rNboL%2FX0OVAcHinSEB8Q0HL%2FouFSvvTOmCswLR%2FkiSF5a4IfVIu2Vz0XA8%2BSKjEEy1wgDlPTtDmb9xJJ1hxVzCVDXC6YuhtuEft9rFlZES9E7fEU5HtyejmRSQpC0c0K56e8RUPBWq8CxOawSeDKFdLcDSq%2B%2BF71jEuyZYTGn9aQIwyEUQzmvvKYsBX7honOfdYKZG5nl3gZF5I%2BFRvzBBWdXOxSUvqZtf2o6imbv1hDOhtzQYM3dVauGyg53BAyrUXT797t4ey3nPOBgZFmisJYxQeZu2y1Qg4f0OCn%2FoGH7%2FokQ9iuW0kOpSp%2FyAOL9ZI093CICJH3IwgOf%2FvAY6pgGupib2QkVhJVDbjh%2BUGeunGbzD9iy%2BE%2FCmqjbxun976A6PKJM2dVLbiB74p1UanpLOJk1A8o2mC9it3uqW2N2Z9%2FrJPZzjwFAyYECEUamomU6a0DoyZnLZDelNk9rW5XyMFd%2FYR0W7ctSho3Sofieu21ZHlHINuelrzXcusAJHoN0c1R2I61Mus8W3iYJPZCDQ3GiUjj2E8t8FmWA7YoENbEwgHZmE&X-Amz-Signature=4493b5d049bbd37e534649ce56a05024ad0b20a929cd1cfa761deda273fa4699&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMSWSE7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz35S8%2FQjG2OjtyXm3onmiL18O%2BvF%2FHpJD%2Fn0rVzr1fAiAGvJ%2FGFGFDh9lpxl4fRECU%2Fbn0S24nI%2B9G49lOEtbioiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQWHuCP2H41uggX8tKtwD3JfBJO07e3BTgKKZK6U4ph1xKNQvyxo2qNfxI5oHbn2GVJIP%2BIndFj%2FMEhLEKuw20g5s5gUW%2BXLwLo16gKGsjus0R5INw55jTSHBB51zZkPxi6RTB60185nNHXbjuNDLMelohkXMltsoqpG%2BO4AlCx1Cg7MLDnPg3d%2BFsDEJkjOllc21FmqEqZgtkc5tTLXmYsTzBymndVMlIQE9lxmJuKZndCZ01TDf7DEgZLOh6oxfGwe7RS1byyXmvd5NS1XVv%2B0LxxpPIqGdON9KrECmGvHz%2B7UCnRzbhgNvnIk7tUe034rNboL%2FX0OVAcHinSEB8Q0HL%2FouFSvvTOmCswLR%2FkiSF5a4IfVIu2Vz0XA8%2BSKjEEy1wgDlPTtDmb9xJJ1hxVzCVDXC6YuhtuEft9rFlZES9E7fEU5HtyejmRSQpC0c0K56e8RUPBWq8CxOawSeDKFdLcDSq%2B%2BF71jEuyZYTGn9aQIwyEUQzmvvKYsBX7honOfdYKZG5nl3gZF5I%2BFRvzBBWdXOxSUvqZtf2o6imbv1hDOhtzQYM3dVauGyg53BAyrUXT797t4ey3nPOBgZFmisJYxQeZu2y1Qg4f0OCn%2FoGH7%2FokQ9iuW0kOpSp%2FyAOL9ZI093CICJH3IwgOf%2FvAY6pgGupib2QkVhJVDbjh%2BUGeunGbzD9iy%2BE%2FCmqjbxun976A6PKJM2dVLbiB74p1UanpLOJk1A8o2mC9it3uqW2N2Z9%2FrJPZzjwFAyYECEUamomU6a0DoyZnLZDelNk9rW5XyMFd%2FYR0W7ctSho3Sofieu21ZHlHINuelrzXcusAJHoN0c1R2I61Mus8W3iYJPZCDQ3GiUjj2E8t8FmWA7YoENbEwgHZmE&X-Amz-Signature=308a3295cfb0f7a65237435358eb8765d09b3cbe612758b703bb4370f5bcdbf6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMSWSE7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEz35S8%2FQjG2OjtyXm3onmiL18O%2BvF%2FHpJD%2Fn0rVzr1fAiAGvJ%2FGFGFDh9lpxl4fRECU%2Fbn0S24nI%2B9G49lOEtbioiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQWHuCP2H41uggX8tKtwD3JfBJO07e3BTgKKZK6U4ph1xKNQvyxo2qNfxI5oHbn2GVJIP%2BIndFj%2FMEhLEKuw20g5s5gUW%2BXLwLo16gKGsjus0R5INw55jTSHBB51zZkPxi6RTB60185nNHXbjuNDLMelohkXMltsoqpG%2BO4AlCx1Cg7MLDnPg3d%2BFsDEJkjOllc21FmqEqZgtkc5tTLXmYsTzBymndVMlIQE9lxmJuKZndCZ01TDf7DEgZLOh6oxfGwe7RS1byyXmvd5NS1XVv%2B0LxxpPIqGdON9KrECmGvHz%2B7UCnRzbhgNvnIk7tUe034rNboL%2FX0OVAcHinSEB8Q0HL%2FouFSvvTOmCswLR%2FkiSF5a4IfVIu2Vz0XA8%2BSKjEEy1wgDlPTtDmb9xJJ1hxVzCVDXC6YuhtuEft9rFlZES9E7fEU5HtyejmRSQpC0c0K56e8RUPBWq8CxOawSeDKFdLcDSq%2B%2BF71jEuyZYTGn9aQIwyEUQzmvvKYsBX7honOfdYKZG5nl3gZF5I%2BFRvzBBWdXOxSUvqZtf2o6imbv1hDOhtzQYM3dVauGyg53BAyrUXT797t4ey3nPOBgZFmisJYxQeZu2y1Qg4f0OCn%2FoGH7%2FokQ9iuW0kOpSp%2FyAOL9ZI093CICJH3IwgOf%2FvAY6pgGupib2QkVhJVDbjh%2BUGeunGbzD9iy%2BE%2FCmqjbxun976A6PKJM2dVLbiB74p1UanpLOJk1A8o2mC9it3uqW2N2Z9%2FrJPZzjwFAyYECEUamomU6a0DoyZnLZDelNk9rW5XyMFd%2FYR0W7ctSho3Sofieu21ZHlHINuelrzXcusAJHoN0c1R2I61Mus8W3iYJPZCDQ3GiUjj2E8t8FmWA7YoENbEwgHZmE&X-Amz-Signature=6e567f01901e6093e5ebfecb630ca4df5e1184de0d15f5066832fd3d98110826&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
