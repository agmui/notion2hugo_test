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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKN4J5NU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDMkbzGlh1HyIbJOeJ5LSzJtXb87fpqKxbf2O3HJFj9mQIgW3SY6yGUU07QWVEGgc2a9vuiAN8raLPNhcV%2Ff4CIAuQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwBBKo9Z9PlPWCbFCrcA7utlyAfidrCPpc%2FothU91qCiIIEi7rZSTrChfWKgONA5dIz3kbfo8nh01uzCbFxHAdaO5mIL88n9U15jx1SIxEfN0yR0LSCvTlN5HGTWCZvCO8wdHKuD%2Bma%2BtnWvYD8u2fifbgCtli1nV8yrgCrXMk76UFv0EEIcRajEhPgzfsEuDrLv4A80WU3L0DwzO72EOXVRH5RB3Acy%2BAtwHTHxZTsjO2MXUOdvMntMm1o2svzHws%2BFgMvHlSoVCmz8i9Ib8H6M3xCIu2GAATB5mU%2FraELulDZ1IekwAi%2BQOoLJSRazkglkfesCt7iPK64MCxQVa2HuH2EkMrLnDVaUbUwJplwZFKaM977%2BuC1Y2LtXX2x0SvtNQChOlBhIHysqJZYjJsQ%2B90WnZQvsnHMbd681W986CsoiFvFl3i3e8Y9HH0GY7kZudJ2Pb6sfxLPhuIPXPXVO%2BXBn7YNSEo0g7XyAjXnVS73g6uOBG5N9KHtx7fv%2Bx%2Bhg9UcrbmxF3C2kPcIJs1ZjJTkLiJEScDVfHZ1oBlM%2F58purIE4YiMIO8dJv6TG4Oj3tGyU3jEuSut94XS5hiBrxnEgFMC8qO8DFlce2B4hYWuQ4sNbcfIkuahjxzV%2B68eAQRABwwGJ7tGMK27p78GOqUBCYU%2FWyK4O%2FG1tl475XP9cAZKrEMiLAIAdrJrPDXiit9NaQZ0Dyxo3a6twRS1uc9vUf7JLMfADdSksNJHsuA9hpW5sXpgHNUiuXqlsimx0lkZUm09T2BoL8wkgwFXrkGtJU3K25hNtaeD3Mt26TmjeZCGKWuX7YMgy3whOIwobXIk%2BQ0gXj42hrhhGxGCyOSXzwrCHVSLqqgggkTzgiH2Bf9jp5k4&X-Amz-Signature=f0aac32aeb8bf9f8f6d40d5667582118f1e3373e3ae948eca9d49499a3a9639c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKN4J5NU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDMkbzGlh1HyIbJOeJ5LSzJtXb87fpqKxbf2O3HJFj9mQIgW3SY6yGUU07QWVEGgc2a9vuiAN8raLPNhcV%2Ff4CIAuQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwBBKo9Z9PlPWCbFCrcA7utlyAfidrCPpc%2FothU91qCiIIEi7rZSTrChfWKgONA5dIz3kbfo8nh01uzCbFxHAdaO5mIL88n9U15jx1SIxEfN0yR0LSCvTlN5HGTWCZvCO8wdHKuD%2Bma%2BtnWvYD8u2fifbgCtli1nV8yrgCrXMk76UFv0EEIcRajEhPgzfsEuDrLv4A80WU3L0DwzO72EOXVRH5RB3Acy%2BAtwHTHxZTsjO2MXUOdvMntMm1o2svzHws%2BFgMvHlSoVCmz8i9Ib8H6M3xCIu2GAATB5mU%2FraELulDZ1IekwAi%2BQOoLJSRazkglkfesCt7iPK64MCxQVa2HuH2EkMrLnDVaUbUwJplwZFKaM977%2BuC1Y2LtXX2x0SvtNQChOlBhIHysqJZYjJsQ%2B90WnZQvsnHMbd681W986CsoiFvFl3i3e8Y9HH0GY7kZudJ2Pb6sfxLPhuIPXPXVO%2BXBn7YNSEo0g7XyAjXnVS73g6uOBG5N9KHtx7fv%2Bx%2Bhg9UcrbmxF3C2kPcIJs1ZjJTkLiJEScDVfHZ1oBlM%2F58purIE4YiMIO8dJv6TG4Oj3tGyU3jEuSut94XS5hiBrxnEgFMC8qO8DFlce2B4hYWuQ4sNbcfIkuahjxzV%2B68eAQRABwwGJ7tGMK27p78GOqUBCYU%2FWyK4O%2FG1tl475XP9cAZKrEMiLAIAdrJrPDXiit9NaQZ0Dyxo3a6twRS1uc9vUf7JLMfADdSksNJHsuA9hpW5sXpgHNUiuXqlsimx0lkZUm09T2BoL8wkgwFXrkGtJU3K25hNtaeD3Mt26TmjeZCGKWuX7YMgy3whOIwobXIk%2BQ0gXj42hrhhGxGCyOSXzwrCHVSLqqgggkTzgiH2Bf9jp5k4&X-Amz-Signature=ff381876c1be51c455962f8a0e10db69f0e8b11e939a37f19141d30bfe715616&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKN4J5NU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDMkbzGlh1HyIbJOeJ5LSzJtXb87fpqKxbf2O3HJFj9mQIgW3SY6yGUU07QWVEGgc2a9vuiAN8raLPNhcV%2Ff4CIAuQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwBBKo9Z9PlPWCbFCrcA7utlyAfidrCPpc%2FothU91qCiIIEi7rZSTrChfWKgONA5dIz3kbfo8nh01uzCbFxHAdaO5mIL88n9U15jx1SIxEfN0yR0LSCvTlN5HGTWCZvCO8wdHKuD%2Bma%2BtnWvYD8u2fifbgCtli1nV8yrgCrXMk76UFv0EEIcRajEhPgzfsEuDrLv4A80WU3L0DwzO72EOXVRH5RB3Acy%2BAtwHTHxZTsjO2MXUOdvMntMm1o2svzHws%2BFgMvHlSoVCmz8i9Ib8H6M3xCIu2GAATB5mU%2FraELulDZ1IekwAi%2BQOoLJSRazkglkfesCt7iPK64MCxQVa2HuH2EkMrLnDVaUbUwJplwZFKaM977%2BuC1Y2LtXX2x0SvtNQChOlBhIHysqJZYjJsQ%2B90WnZQvsnHMbd681W986CsoiFvFl3i3e8Y9HH0GY7kZudJ2Pb6sfxLPhuIPXPXVO%2BXBn7YNSEo0g7XyAjXnVS73g6uOBG5N9KHtx7fv%2Bx%2Bhg9UcrbmxF3C2kPcIJs1ZjJTkLiJEScDVfHZ1oBlM%2F58purIE4YiMIO8dJv6TG4Oj3tGyU3jEuSut94XS5hiBrxnEgFMC8qO8DFlce2B4hYWuQ4sNbcfIkuahjxzV%2B68eAQRABwwGJ7tGMK27p78GOqUBCYU%2FWyK4O%2FG1tl475XP9cAZKrEMiLAIAdrJrPDXiit9NaQZ0Dyxo3a6twRS1uc9vUf7JLMfADdSksNJHsuA9hpW5sXpgHNUiuXqlsimx0lkZUm09T2BoL8wkgwFXrkGtJU3K25hNtaeD3Mt26TmjeZCGKWuX7YMgy3whOIwobXIk%2BQ0gXj42hrhhGxGCyOSXzwrCHVSLqqgggkTzgiH2Bf9jp5k4&X-Amz-Signature=23df824b9c57d61711f3773b2e56a32ee853713db330dde4dfb9ccc09da5d773&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKN4J5NU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDMkbzGlh1HyIbJOeJ5LSzJtXb87fpqKxbf2O3HJFj9mQIgW3SY6yGUU07QWVEGgc2a9vuiAN8raLPNhcV%2Ff4CIAuQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwBBKo9Z9PlPWCbFCrcA7utlyAfidrCPpc%2FothU91qCiIIEi7rZSTrChfWKgONA5dIz3kbfo8nh01uzCbFxHAdaO5mIL88n9U15jx1SIxEfN0yR0LSCvTlN5HGTWCZvCO8wdHKuD%2Bma%2BtnWvYD8u2fifbgCtli1nV8yrgCrXMk76UFv0EEIcRajEhPgzfsEuDrLv4A80WU3L0DwzO72EOXVRH5RB3Acy%2BAtwHTHxZTsjO2MXUOdvMntMm1o2svzHws%2BFgMvHlSoVCmz8i9Ib8H6M3xCIu2GAATB5mU%2FraELulDZ1IekwAi%2BQOoLJSRazkglkfesCt7iPK64MCxQVa2HuH2EkMrLnDVaUbUwJplwZFKaM977%2BuC1Y2LtXX2x0SvtNQChOlBhIHysqJZYjJsQ%2B90WnZQvsnHMbd681W986CsoiFvFl3i3e8Y9HH0GY7kZudJ2Pb6sfxLPhuIPXPXVO%2BXBn7YNSEo0g7XyAjXnVS73g6uOBG5N9KHtx7fv%2Bx%2Bhg9UcrbmxF3C2kPcIJs1ZjJTkLiJEScDVfHZ1oBlM%2F58purIE4YiMIO8dJv6TG4Oj3tGyU3jEuSut94XS5hiBrxnEgFMC8qO8DFlce2B4hYWuQ4sNbcfIkuahjxzV%2B68eAQRABwwGJ7tGMK27p78GOqUBCYU%2FWyK4O%2FG1tl475XP9cAZKrEMiLAIAdrJrPDXiit9NaQZ0Dyxo3a6twRS1uc9vUf7JLMfADdSksNJHsuA9hpW5sXpgHNUiuXqlsimx0lkZUm09T2BoL8wkgwFXrkGtJU3K25hNtaeD3Mt26TmjeZCGKWuX7YMgy3whOIwobXIk%2BQ0gXj42hrhhGxGCyOSXzwrCHVSLqqgggkTzgiH2Bf9jp5k4&X-Amz-Signature=3fca518e1b39b065d41eb098ca534b124351cf37ae6a92e6f49dffcf629e1206&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKN4J5NU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDMkbzGlh1HyIbJOeJ5LSzJtXb87fpqKxbf2O3HJFj9mQIgW3SY6yGUU07QWVEGgc2a9vuiAN8raLPNhcV%2Ff4CIAuQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwBBKo9Z9PlPWCbFCrcA7utlyAfidrCPpc%2FothU91qCiIIEi7rZSTrChfWKgONA5dIz3kbfo8nh01uzCbFxHAdaO5mIL88n9U15jx1SIxEfN0yR0LSCvTlN5HGTWCZvCO8wdHKuD%2Bma%2BtnWvYD8u2fifbgCtli1nV8yrgCrXMk76UFv0EEIcRajEhPgzfsEuDrLv4A80WU3L0DwzO72EOXVRH5RB3Acy%2BAtwHTHxZTsjO2MXUOdvMntMm1o2svzHws%2BFgMvHlSoVCmz8i9Ib8H6M3xCIu2GAATB5mU%2FraELulDZ1IekwAi%2BQOoLJSRazkglkfesCt7iPK64MCxQVa2HuH2EkMrLnDVaUbUwJplwZFKaM977%2BuC1Y2LtXX2x0SvtNQChOlBhIHysqJZYjJsQ%2B90WnZQvsnHMbd681W986CsoiFvFl3i3e8Y9HH0GY7kZudJ2Pb6sfxLPhuIPXPXVO%2BXBn7YNSEo0g7XyAjXnVS73g6uOBG5N9KHtx7fv%2Bx%2Bhg9UcrbmxF3C2kPcIJs1ZjJTkLiJEScDVfHZ1oBlM%2F58purIE4YiMIO8dJv6TG4Oj3tGyU3jEuSut94XS5hiBrxnEgFMC8qO8DFlce2B4hYWuQ4sNbcfIkuahjxzV%2B68eAQRABwwGJ7tGMK27p78GOqUBCYU%2FWyK4O%2FG1tl475XP9cAZKrEMiLAIAdrJrPDXiit9NaQZ0Dyxo3a6twRS1uc9vUf7JLMfADdSksNJHsuA9hpW5sXpgHNUiuXqlsimx0lkZUm09T2BoL8wkgwFXrkGtJU3K25hNtaeD3Mt26TmjeZCGKWuX7YMgy3whOIwobXIk%2BQ0gXj42hrhhGxGCyOSXzwrCHVSLqqgggkTzgiH2Bf9jp5k4&X-Amz-Signature=6789eb1047da720caddc31bbcc06e5e7f6481cadabec115a8058ec25b52801e5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKN4J5NU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDMkbzGlh1HyIbJOeJ5LSzJtXb87fpqKxbf2O3HJFj9mQIgW3SY6yGUU07QWVEGgc2a9vuiAN8raLPNhcV%2Ff4CIAuQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwBBKo9Z9PlPWCbFCrcA7utlyAfidrCPpc%2FothU91qCiIIEi7rZSTrChfWKgONA5dIz3kbfo8nh01uzCbFxHAdaO5mIL88n9U15jx1SIxEfN0yR0LSCvTlN5HGTWCZvCO8wdHKuD%2Bma%2BtnWvYD8u2fifbgCtli1nV8yrgCrXMk76UFv0EEIcRajEhPgzfsEuDrLv4A80WU3L0DwzO72EOXVRH5RB3Acy%2BAtwHTHxZTsjO2MXUOdvMntMm1o2svzHws%2BFgMvHlSoVCmz8i9Ib8H6M3xCIu2GAATB5mU%2FraELulDZ1IekwAi%2BQOoLJSRazkglkfesCt7iPK64MCxQVa2HuH2EkMrLnDVaUbUwJplwZFKaM977%2BuC1Y2LtXX2x0SvtNQChOlBhIHysqJZYjJsQ%2B90WnZQvsnHMbd681W986CsoiFvFl3i3e8Y9HH0GY7kZudJ2Pb6sfxLPhuIPXPXVO%2BXBn7YNSEo0g7XyAjXnVS73g6uOBG5N9KHtx7fv%2Bx%2Bhg9UcrbmxF3C2kPcIJs1ZjJTkLiJEScDVfHZ1oBlM%2F58purIE4YiMIO8dJv6TG4Oj3tGyU3jEuSut94XS5hiBrxnEgFMC8qO8DFlce2B4hYWuQ4sNbcfIkuahjxzV%2B68eAQRABwwGJ7tGMK27p78GOqUBCYU%2FWyK4O%2FG1tl475XP9cAZKrEMiLAIAdrJrPDXiit9NaQZ0Dyxo3a6twRS1uc9vUf7JLMfADdSksNJHsuA9hpW5sXpgHNUiuXqlsimx0lkZUm09T2BoL8wkgwFXrkGtJU3K25hNtaeD3Mt26TmjeZCGKWuX7YMgy3whOIwobXIk%2BQ0gXj42hrhhGxGCyOSXzwrCHVSLqqgggkTzgiH2Bf9jp5k4&X-Amz-Signature=d47051f26435bb79087aaadb058e13bc6538d73527a30bb0ee87fb2acba718dd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKN4J5NU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDMkbzGlh1HyIbJOeJ5LSzJtXb87fpqKxbf2O3HJFj9mQIgW3SY6yGUU07QWVEGgc2a9vuiAN8raLPNhcV%2Ff4CIAuQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwBBKo9Z9PlPWCbFCrcA7utlyAfidrCPpc%2FothU91qCiIIEi7rZSTrChfWKgONA5dIz3kbfo8nh01uzCbFxHAdaO5mIL88n9U15jx1SIxEfN0yR0LSCvTlN5HGTWCZvCO8wdHKuD%2Bma%2BtnWvYD8u2fifbgCtli1nV8yrgCrXMk76UFv0EEIcRajEhPgzfsEuDrLv4A80WU3L0DwzO72EOXVRH5RB3Acy%2BAtwHTHxZTsjO2MXUOdvMntMm1o2svzHws%2BFgMvHlSoVCmz8i9Ib8H6M3xCIu2GAATB5mU%2FraELulDZ1IekwAi%2BQOoLJSRazkglkfesCt7iPK64MCxQVa2HuH2EkMrLnDVaUbUwJplwZFKaM977%2BuC1Y2LtXX2x0SvtNQChOlBhIHysqJZYjJsQ%2B90WnZQvsnHMbd681W986CsoiFvFl3i3e8Y9HH0GY7kZudJ2Pb6sfxLPhuIPXPXVO%2BXBn7YNSEo0g7XyAjXnVS73g6uOBG5N9KHtx7fv%2Bx%2Bhg9UcrbmxF3C2kPcIJs1ZjJTkLiJEScDVfHZ1oBlM%2F58purIE4YiMIO8dJv6TG4Oj3tGyU3jEuSut94XS5hiBrxnEgFMC8qO8DFlce2B4hYWuQ4sNbcfIkuahjxzV%2B68eAQRABwwGJ7tGMK27p78GOqUBCYU%2FWyK4O%2FG1tl475XP9cAZKrEMiLAIAdrJrPDXiit9NaQZ0Dyxo3a6twRS1uc9vUf7JLMfADdSksNJHsuA9hpW5sXpgHNUiuXqlsimx0lkZUm09T2BoL8wkgwFXrkGtJU3K25hNtaeD3Mt26TmjeZCGKWuX7YMgy3whOIwobXIk%2BQ0gXj42hrhhGxGCyOSXzwrCHVSLqqgggkTzgiH2Bf9jp5k4&X-Amz-Signature=05bd6202e7380176184577447076a3c11ccb0735f3583005b1b89091548412cd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
