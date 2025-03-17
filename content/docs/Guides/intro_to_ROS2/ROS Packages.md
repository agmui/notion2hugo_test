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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EJDZOB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVivodNy9WtU%2BKsTK7z2XymB9lBnpxNV2bNrmFKMGgEAiAMn8un9c1uwtplMMhLiSjWE%2FKWTaZPwSyTboBi%2FhjFdir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMI%2F470YeMmaFKHS2gKtwD7i%2BnkHLFAepZoDaCYnMHLdEWxverZih9Oim2kiu2bcAJ2FUg6BPfjEVWNMM0ylNwyFfak85GF75HGcZKpBKZPoFZC52HyBSAsqElBfDbEU2TTR6p5f%2FVq8mY0jnOPDS5lJ3B8tQjhKyuL5xl%2BoiAaDZ6ls%2BUZkfkkTg5OYi3x33Z5fHR%2BWTcoEcbBHizaRQipQt3tHv%2BSIFmN3pHrlgpbus6l3KPhwTikhylbBFrU0KmLM7pnbPUcGOO2GvHToDrO3FlYjOTCB1aJLhrOCApU2C4r8iyNXyq73CAPL5f%2BnXzO8X7mYLqOkPT%2FiKnI9rUiJfbmV8n9h8mdfs7T5o5zjl5ZmP7I5fJPMs1qu94%2Ff1oj9STPLI%2FqpEqv2iKFQyO%2FUw4aJqpt4zo7vgmz6antyzfrJ39YrnMNKMN5%2BeGrhjcUySNfBlhNHNlUZCLESpBs1p6w0q%2FwVs%2BQ4M%2BmHWJCs9%2BXvcEiw2IEarLbrPx%2BGCkh8jo3k13Ln5lzipoyMTt7WjUNCT406FFEMavjKHZBLl26LuuvObqHfvT2h3kLfacXvvkXpK5MfP7UCBY2Vhe9pHxgBkgazqjh7FabOeV1qgyabbdTdwytiWN%2FDm0Fo%2BdeN8m8g8fNixOWm0wiInhvgY6pgHuzucx9Ao7YeoQZaL1aBQRz2sfwumf4iP6pOJDrLWiNJm0t7JqCFzUFQeF5CovSgRDvsIWnKvLvP1lTHlZQkvtbtD9ujtRQBH0NDTQoA4TKI3DQf9KNZKyDWjjPLvE64ISoFzYO1jGOmQv8K1x1s5Tw%2B6FWidgxaWTNmWW%2FhkHHx%2BgFT38Blo8324%2FTBtFBDaAgXoyljPVxcQ60nlO7arv4TsFEO7u&X-Amz-Signature=22a92cd9212049e37b43738779cc5b2a4d453bf9d94606dc26ec3d78725f6573&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EJDZOB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVivodNy9WtU%2BKsTK7z2XymB9lBnpxNV2bNrmFKMGgEAiAMn8un9c1uwtplMMhLiSjWE%2FKWTaZPwSyTboBi%2FhjFdir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMI%2F470YeMmaFKHS2gKtwD7i%2BnkHLFAepZoDaCYnMHLdEWxverZih9Oim2kiu2bcAJ2FUg6BPfjEVWNMM0ylNwyFfak85GF75HGcZKpBKZPoFZC52HyBSAsqElBfDbEU2TTR6p5f%2FVq8mY0jnOPDS5lJ3B8tQjhKyuL5xl%2BoiAaDZ6ls%2BUZkfkkTg5OYi3x33Z5fHR%2BWTcoEcbBHizaRQipQt3tHv%2BSIFmN3pHrlgpbus6l3KPhwTikhylbBFrU0KmLM7pnbPUcGOO2GvHToDrO3FlYjOTCB1aJLhrOCApU2C4r8iyNXyq73CAPL5f%2BnXzO8X7mYLqOkPT%2FiKnI9rUiJfbmV8n9h8mdfs7T5o5zjl5ZmP7I5fJPMs1qu94%2Ff1oj9STPLI%2FqpEqv2iKFQyO%2FUw4aJqpt4zo7vgmz6antyzfrJ39YrnMNKMN5%2BeGrhjcUySNfBlhNHNlUZCLESpBs1p6w0q%2FwVs%2BQ4M%2BmHWJCs9%2BXvcEiw2IEarLbrPx%2BGCkh8jo3k13Ln5lzipoyMTt7WjUNCT406FFEMavjKHZBLl26LuuvObqHfvT2h3kLfacXvvkXpK5MfP7UCBY2Vhe9pHxgBkgazqjh7FabOeV1qgyabbdTdwytiWN%2FDm0Fo%2BdeN8m8g8fNixOWm0wiInhvgY6pgHuzucx9Ao7YeoQZaL1aBQRz2sfwumf4iP6pOJDrLWiNJm0t7JqCFzUFQeF5CovSgRDvsIWnKvLvP1lTHlZQkvtbtD9ujtRQBH0NDTQoA4TKI3DQf9KNZKyDWjjPLvE64ISoFzYO1jGOmQv8K1x1s5Tw%2B6FWidgxaWTNmWW%2FhkHHx%2BgFT38Blo8324%2FTBtFBDaAgXoyljPVxcQ60nlO7arv4TsFEO7u&X-Amz-Signature=7574ed1f755996cef240db85539c62e8504194b28514f60e9299deec83e1da55&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EJDZOB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVivodNy9WtU%2BKsTK7z2XymB9lBnpxNV2bNrmFKMGgEAiAMn8un9c1uwtplMMhLiSjWE%2FKWTaZPwSyTboBi%2FhjFdir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMI%2F470YeMmaFKHS2gKtwD7i%2BnkHLFAepZoDaCYnMHLdEWxverZih9Oim2kiu2bcAJ2FUg6BPfjEVWNMM0ylNwyFfak85GF75HGcZKpBKZPoFZC52HyBSAsqElBfDbEU2TTR6p5f%2FVq8mY0jnOPDS5lJ3B8tQjhKyuL5xl%2BoiAaDZ6ls%2BUZkfkkTg5OYi3x33Z5fHR%2BWTcoEcbBHizaRQipQt3tHv%2BSIFmN3pHrlgpbus6l3KPhwTikhylbBFrU0KmLM7pnbPUcGOO2GvHToDrO3FlYjOTCB1aJLhrOCApU2C4r8iyNXyq73CAPL5f%2BnXzO8X7mYLqOkPT%2FiKnI9rUiJfbmV8n9h8mdfs7T5o5zjl5ZmP7I5fJPMs1qu94%2Ff1oj9STPLI%2FqpEqv2iKFQyO%2FUw4aJqpt4zo7vgmz6antyzfrJ39YrnMNKMN5%2BeGrhjcUySNfBlhNHNlUZCLESpBs1p6w0q%2FwVs%2BQ4M%2BmHWJCs9%2BXvcEiw2IEarLbrPx%2BGCkh8jo3k13Ln5lzipoyMTt7WjUNCT406FFEMavjKHZBLl26LuuvObqHfvT2h3kLfacXvvkXpK5MfP7UCBY2Vhe9pHxgBkgazqjh7FabOeV1qgyabbdTdwytiWN%2FDm0Fo%2BdeN8m8g8fNixOWm0wiInhvgY6pgHuzucx9Ao7YeoQZaL1aBQRz2sfwumf4iP6pOJDrLWiNJm0t7JqCFzUFQeF5CovSgRDvsIWnKvLvP1lTHlZQkvtbtD9ujtRQBH0NDTQoA4TKI3DQf9KNZKyDWjjPLvE64ISoFzYO1jGOmQv8K1x1s5Tw%2B6FWidgxaWTNmWW%2FhkHHx%2BgFT38Blo8324%2FTBtFBDaAgXoyljPVxcQ60nlO7arv4TsFEO7u&X-Amz-Signature=821e9d157750de1c9b967d22b5a93cf8b52bbaacc79c76f8be60258e80663171&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EJDZOB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVivodNy9WtU%2BKsTK7z2XymB9lBnpxNV2bNrmFKMGgEAiAMn8un9c1uwtplMMhLiSjWE%2FKWTaZPwSyTboBi%2FhjFdir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMI%2F470YeMmaFKHS2gKtwD7i%2BnkHLFAepZoDaCYnMHLdEWxverZih9Oim2kiu2bcAJ2FUg6BPfjEVWNMM0ylNwyFfak85GF75HGcZKpBKZPoFZC52HyBSAsqElBfDbEU2TTR6p5f%2FVq8mY0jnOPDS5lJ3B8tQjhKyuL5xl%2BoiAaDZ6ls%2BUZkfkkTg5OYi3x33Z5fHR%2BWTcoEcbBHizaRQipQt3tHv%2BSIFmN3pHrlgpbus6l3KPhwTikhylbBFrU0KmLM7pnbPUcGOO2GvHToDrO3FlYjOTCB1aJLhrOCApU2C4r8iyNXyq73CAPL5f%2BnXzO8X7mYLqOkPT%2FiKnI9rUiJfbmV8n9h8mdfs7T5o5zjl5ZmP7I5fJPMs1qu94%2Ff1oj9STPLI%2FqpEqv2iKFQyO%2FUw4aJqpt4zo7vgmz6antyzfrJ39YrnMNKMN5%2BeGrhjcUySNfBlhNHNlUZCLESpBs1p6w0q%2FwVs%2BQ4M%2BmHWJCs9%2BXvcEiw2IEarLbrPx%2BGCkh8jo3k13Ln5lzipoyMTt7WjUNCT406FFEMavjKHZBLl26LuuvObqHfvT2h3kLfacXvvkXpK5MfP7UCBY2Vhe9pHxgBkgazqjh7FabOeV1qgyabbdTdwytiWN%2FDm0Fo%2BdeN8m8g8fNixOWm0wiInhvgY6pgHuzucx9Ao7YeoQZaL1aBQRz2sfwumf4iP6pOJDrLWiNJm0t7JqCFzUFQeF5CovSgRDvsIWnKvLvP1lTHlZQkvtbtD9ujtRQBH0NDTQoA4TKI3DQf9KNZKyDWjjPLvE64ISoFzYO1jGOmQv8K1x1s5Tw%2B6FWidgxaWTNmWW%2FhkHHx%2BgFT38Blo8324%2FTBtFBDaAgXoyljPVxcQ60nlO7arv4TsFEO7u&X-Amz-Signature=bf418eb17dbfb41433311f7bf4c78a39646081a70957b0e1f117644c154de803&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EJDZOB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVivodNy9WtU%2BKsTK7z2XymB9lBnpxNV2bNrmFKMGgEAiAMn8un9c1uwtplMMhLiSjWE%2FKWTaZPwSyTboBi%2FhjFdir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMI%2F470YeMmaFKHS2gKtwD7i%2BnkHLFAepZoDaCYnMHLdEWxverZih9Oim2kiu2bcAJ2FUg6BPfjEVWNMM0ylNwyFfak85GF75HGcZKpBKZPoFZC52HyBSAsqElBfDbEU2TTR6p5f%2FVq8mY0jnOPDS5lJ3B8tQjhKyuL5xl%2BoiAaDZ6ls%2BUZkfkkTg5OYi3x33Z5fHR%2BWTcoEcbBHizaRQipQt3tHv%2BSIFmN3pHrlgpbus6l3KPhwTikhylbBFrU0KmLM7pnbPUcGOO2GvHToDrO3FlYjOTCB1aJLhrOCApU2C4r8iyNXyq73CAPL5f%2BnXzO8X7mYLqOkPT%2FiKnI9rUiJfbmV8n9h8mdfs7T5o5zjl5ZmP7I5fJPMs1qu94%2Ff1oj9STPLI%2FqpEqv2iKFQyO%2FUw4aJqpt4zo7vgmz6antyzfrJ39YrnMNKMN5%2BeGrhjcUySNfBlhNHNlUZCLESpBs1p6w0q%2FwVs%2BQ4M%2BmHWJCs9%2BXvcEiw2IEarLbrPx%2BGCkh8jo3k13Ln5lzipoyMTt7WjUNCT406FFEMavjKHZBLl26LuuvObqHfvT2h3kLfacXvvkXpK5MfP7UCBY2Vhe9pHxgBkgazqjh7FabOeV1qgyabbdTdwytiWN%2FDm0Fo%2BdeN8m8g8fNixOWm0wiInhvgY6pgHuzucx9Ao7YeoQZaL1aBQRz2sfwumf4iP6pOJDrLWiNJm0t7JqCFzUFQeF5CovSgRDvsIWnKvLvP1lTHlZQkvtbtD9ujtRQBH0NDTQoA4TKI3DQf9KNZKyDWjjPLvE64ISoFzYO1jGOmQv8K1x1s5Tw%2B6FWidgxaWTNmWW%2FhkHHx%2BgFT38Blo8324%2FTBtFBDaAgXoyljPVxcQ60nlO7arv4TsFEO7u&X-Amz-Signature=93d332235b1f98fba2fe96c603091593039bdf0d4219f994e3a0597b916e2095&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EJDZOB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVivodNy9WtU%2BKsTK7z2XymB9lBnpxNV2bNrmFKMGgEAiAMn8un9c1uwtplMMhLiSjWE%2FKWTaZPwSyTboBi%2FhjFdir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMI%2F470YeMmaFKHS2gKtwD7i%2BnkHLFAepZoDaCYnMHLdEWxverZih9Oim2kiu2bcAJ2FUg6BPfjEVWNMM0ylNwyFfak85GF75HGcZKpBKZPoFZC52HyBSAsqElBfDbEU2TTR6p5f%2FVq8mY0jnOPDS5lJ3B8tQjhKyuL5xl%2BoiAaDZ6ls%2BUZkfkkTg5OYi3x33Z5fHR%2BWTcoEcbBHizaRQipQt3tHv%2BSIFmN3pHrlgpbus6l3KPhwTikhylbBFrU0KmLM7pnbPUcGOO2GvHToDrO3FlYjOTCB1aJLhrOCApU2C4r8iyNXyq73CAPL5f%2BnXzO8X7mYLqOkPT%2FiKnI9rUiJfbmV8n9h8mdfs7T5o5zjl5ZmP7I5fJPMs1qu94%2Ff1oj9STPLI%2FqpEqv2iKFQyO%2FUw4aJqpt4zo7vgmz6antyzfrJ39YrnMNKMN5%2BeGrhjcUySNfBlhNHNlUZCLESpBs1p6w0q%2FwVs%2BQ4M%2BmHWJCs9%2BXvcEiw2IEarLbrPx%2BGCkh8jo3k13Ln5lzipoyMTt7WjUNCT406FFEMavjKHZBLl26LuuvObqHfvT2h3kLfacXvvkXpK5MfP7UCBY2Vhe9pHxgBkgazqjh7FabOeV1qgyabbdTdwytiWN%2FDm0Fo%2BdeN8m8g8fNixOWm0wiInhvgY6pgHuzucx9Ao7YeoQZaL1aBQRz2sfwumf4iP6pOJDrLWiNJm0t7JqCFzUFQeF5CovSgRDvsIWnKvLvP1lTHlZQkvtbtD9ujtRQBH0NDTQoA4TKI3DQf9KNZKyDWjjPLvE64ISoFzYO1jGOmQv8K1x1s5Tw%2B6FWidgxaWTNmWW%2FhkHHx%2BgFT38Blo8324%2FTBtFBDaAgXoyljPVxcQ60nlO7arv4TsFEO7u&X-Amz-Signature=6b8852f0950b8531e621a3bcc47d471df9bda6c15adb34e3c3f8656eefcd978e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EJDZOB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVivodNy9WtU%2BKsTK7z2XymB9lBnpxNV2bNrmFKMGgEAiAMn8un9c1uwtplMMhLiSjWE%2FKWTaZPwSyTboBi%2FhjFdir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMI%2F470YeMmaFKHS2gKtwD7i%2BnkHLFAepZoDaCYnMHLdEWxverZih9Oim2kiu2bcAJ2FUg6BPfjEVWNMM0ylNwyFfak85GF75HGcZKpBKZPoFZC52HyBSAsqElBfDbEU2TTR6p5f%2FVq8mY0jnOPDS5lJ3B8tQjhKyuL5xl%2BoiAaDZ6ls%2BUZkfkkTg5OYi3x33Z5fHR%2BWTcoEcbBHizaRQipQt3tHv%2BSIFmN3pHrlgpbus6l3KPhwTikhylbBFrU0KmLM7pnbPUcGOO2GvHToDrO3FlYjOTCB1aJLhrOCApU2C4r8iyNXyq73CAPL5f%2BnXzO8X7mYLqOkPT%2FiKnI9rUiJfbmV8n9h8mdfs7T5o5zjl5ZmP7I5fJPMs1qu94%2Ff1oj9STPLI%2FqpEqv2iKFQyO%2FUw4aJqpt4zo7vgmz6antyzfrJ39YrnMNKMN5%2BeGrhjcUySNfBlhNHNlUZCLESpBs1p6w0q%2FwVs%2BQ4M%2BmHWJCs9%2BXvcEiw2IEarLbrPx%2BGCkh8jo3k13Ln5lzipoyMTt7WjUNCT406FFEMavjKHZBLl26LuuvObqHfvT2h3kLfacXvvkXpK5MfP7UCBY2Vhe9pHxgBkgazqjh7FabOeV1qgyabbdTdwytiWN%2FDm0Fo%2BdeN8m8g8fNixOWm0wiInhvgY6pgHuzucx9Ao7YeoQZaL1aBQRz2sfwumf4iP6pOJDrLWiNJm0t7JqCFzUFQeF5CovSgRDvsIWnKvLvP1lTHlZQkvtbtD9ujtRQBH0NDTQoA4TKI3DQf9KNZKyDWjjPLvE64ISoFzYO1jGOmQv8K1x1s5Tw%2B6FWidgxaWTNmWW%2FhkHHx%2BgFT38Blo8324%2FTBtFBDaAgXoyljPVxcQ60nlO7arv4TsFEO7u&X-Amz-Signature=5b5c81d42b44d9eb5f83d6ecabd57358ba9d7d8652463b56b522bf6c1d9d259f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
