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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AGV437%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBTBy8hbpdEuDb%2BYZ8KoO1SjA0Nvl7e7ZY3Zips110jOAiEAp0sjt%2BeYTeePLzUK9k%2Bh76fNY8%2BJ4RkoZZFt9cz6oa4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqTGNakYNYHdBAAYyrcA0g8wBNvefhNFs6ix5PMWAffJ1ad8MLJfKd%2FNoV37l9jy65ZCyl2%2FViOsfwatbUWaFY%2F0cS51QURFyIl%2BlqVVVr2aG3r%2BGPIv0aoKNQEYBIES%2BUQiEOiqHo9lfRcgoxepEl2mZHAQKkbZE5%2F1bFrK7DZiCzuTbaTg85t0%2FP8%2FcZ0z64hOC5xNw7E1wu2MGXNIQEachD3f8pGxovrUGLXAR3IAf%2BECConFLMHTxmKNcuI1yGAGOf3pvxd67p3XhqK%2Fiz4Cbx9evOImXvhihUD8xH%2F5LfOwRaodK0bDt6FJlh3ZcSSwvhYGZKHy%2B%2F%2BvYGOG60eqhuPrJtne4ja8ZKCe8k3NsujkDEspATRA70X8eKwZogBLhYUUOr0p%2FfD%2Flny7DN9W82Qc%2F1v7L%2FEwI1GaztZfQd2FZtq0LN%2Fqxi7nvt94X3FsEZpwH1O3XUA0RrhCbleyHOCHWrIaZwcN6XbaOw5WZA52el7kow5MZBeMJa5iptM7AGOEnGRgVnkQ%2By09L975kTasS8sU7Fg69%2F9iKCCE7XGnzD8i8XphhgtyVVoc2jloLTavjIM1yl96V3ADinJFb%2FzWCteHZss66gxlSqE8PWoxaUjFvwxRFh4Ut7OAqu3QzVAMPDplpIiMMn7xL4GOqUBbn820DnmdBZP%2BpbWyXD3bhpPTPOmoUl%2Fi1O7QyoWyMUrxY7epSWdc5ovNzi4mwVhTTTbC2RGWMA75BuCA0io6jj9%2F1QZsjVVXqnhC19AcbnfRA815tml1CpAYo0Y3fUJPplXUZumZ177WSwilHaDWzDQ5lF7oBKFOBAZLeEBz3A%2FRS5Oc%2FoxnSTqonGiFLNAS6LJBCK9oeM765K1iJqGfDpip1lp&X-Amz-Signature=d0f738706221bc0b771eb7be1e428d35886bf5d932e6ae9dd1d24064ff758bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AGV437%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBTBy8hbpdEuDb%2BYZ8KoO1SjA0Nvl7e7ZY3Zips110jOAiEAp0sjt%2BeYTeePLzUK9k%2Bh76fNY8%2BJ4RkoZZFt9cz6oa4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqTGNakYNYHdBAAYyrcA0g8wBNvefhNFs6ix5PMWAffJ1ad8MLJfKd%2FNoV37l9jy65ZCyl2%2FViOsfwatbUWaFY%2F0cS51QURFyIl%2BlqVVVr2aG3r%2BGPIv0aoKNQEYBIES%2BUQiEOiqHo9lfRcgoxepEl2mZHAQKkbZE5%2F1bFrK7DZiCzuTbaTg85t0%2FP8%2FcZ0z64hOC5xNw7E1wu2MGXNIQEachD3f8pGxovrUGLXAR3IAf%2BECConFLMHTxmKNcuI1yGAGOf3pvxd67p3XhqK%2Fiz4Cbx9evOImXvhihUD8xH%2F5LfOwRaodK0bDt6FJlh3ZcSSwvhYGZKHy%2B%2F%2BvYGOG60eqhuPrJtne4ja8ZKCe8k3NsujkDEspATRA70X8eKwZogBLhYUUOr0p%2FfD%2Flny7DN9W82Qc%2F1v7L%2FEwI1GaztZfQd2FZtq0LN%2Fqxi7nvt94X3FsEZpwH1O3XUA0RrhCbleyHOCHWrIaZwcN6XbaOw5WZA52el7kow5MZBeMJa5iptM7AGOEnGRgVnkQ%2By09L975kTasS8sU7Fg69%2F9iKCCE7XGnzD8i8XphhgtyVVoc2jloLTavjIM1yl96V3ADinJFb%2FzWCteHZss66gxlSqE8PWoxaUjFvwxRFh4Ut7OAqu3QzVAMPDplpIiMMn7xL4GOqUBbn820DnmdBZP%2BpbWyXD3bhpPTPOmoUl%2Fi1O7QyoWyMUrxY7epSWdc5ovNzi4mwVhTTTbC2RGWMA75BuCA0io6jj9%2F1QZsjVVXqnhC19AcbnfRA815tml1CpAYo0Y3fUJPplXUZumZ177WSwilHaDWzDQ5lF7oBKFOBAZLeEBz3A%2FRS5Oc%2FoxnSTqonGiFLNAS6LJBCK9oeM765K1iJqGfDpip1lp&X-Amz-Signature=084ae4fe82678308d5b81d63dce017ac95fe1e1b21f83c29ed133672ca3ed9b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AGV437%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBTBy8hbpdEuDb%2BYZ8KoO1SjA0Nvl7e7ZY3Zips110jOAiEAp0sjt%2BeYTeePLzUK9k%2Bh76fNY8%2BJ4RkoZZFt9cz6oa4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqTGNakYNYHdBAAYyrcA0g8wBNvefhNFs6ix5PMWAffJ1ad8MLJfKd%2FNoV37l9jy65ZCyl2%2FViOsfwatbUWaFY%2F0cS51QURFyIl%2BlqVVVr2aG3r%2BGPIv0aoKNQEYBIES%2BUQiEOiqHo9lfRcgoxepEl2mZHAQKkbZE5%2F1bFrK7DZiCzuTbaTg85t0%2FP8%2FcZ0z64hOC5xNw7E1wu2MGXNIQEachD3f8pGxovrUGLXAR3IAf%2BECConFLMHTxmKNcuI1yGAGOf3pvxd67p3XhqK%2Fiz4Cbx9evOImXvhihUD8xH%2F5LfOwRaodK0bDt6FJlh3ZcSSwvhYGZKHy%2B%2F%2BvYGOG60eqhuPrJtne4ja8ZKCe8k3NsujkDEspATRA70X8eKwZogBLhYUUOr0p%2FfD%2Flny7DN9W82Qc%2F1v7L%2FEwI1GaztZfQd2FZtq0LN%2Fqxi7nvt94X3FsEZpwH1O3XUA0RrhCbleyHOCHWrIaZwcN6XbaOw5WZA52el7kow5MZBeMJa5iptM7AGOEnGRgVnkQ%2By09L975kTasS8sU7Fg69%2F9iKCCE7XGnzD8i8XphhgtyVVoc2jloLTavjIM1yl96V3ADinJFb%2FzWCteHZss66gxlSqE8PWoxaUjFvwxRFh4Ut7OAqu3QzVAMPDplpIiMMn7xL4GOqUBbn820DnmdBZP%2BpbWyXD3bhpPTPOmoUl%2Fi1O7QyoWyMUrxY7epSWdc5ovNzi4mwVhTTTbC2RGWMA75BuCA0io6jj9%2F1QZsjVVXqnhC19AcbnfRA815tml1CpAYo0Y3fUJPplXUZumZ177WSwilHaDWzDQ5lF7oBKFOBAZLeEBz3A%2FRS5Oc%2FoxnSTqonGiFLNAS6LJBCK9oeM765K1iJqGfDpip1lp&X-Amz-Signature=9340f70b923dbc0c416d3919db3550b462cfb43b7d3c08b5b28f1461bfb0aa54&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AGV437%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBTBy8hbpdEuDb%2BYZ8KoO1SjA0Nvl7e7ZY3Zips110jOAiEAp0sjt%2BeYTeePLzUK9k%2Bh76fNY8%2BJ4RkoZZFt9cz6oa4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqTGNakYNYHdBAAYyrcA0g8wBNvefhNFs6ix5PMWAffJ1ad8MLJfKd%2FNoV37l9jy65ZCyl2%2FViOsfwatbUWaFY%2F0cS51QURFyIl%2BlqVVVr2aG3r%2BGPIv0aoKNQEYBIES%2BUQiEOiqHo9lfRcgoxepEl2mZHAQKkbZE5%2F1bFrK7DZiCzuTbaTg85t0%2FP8%2FcZ0z64hOC5xNw7E1wu2MGXNIQEachD3f8pGxovrUGLXAR3IAf%2BECConFLMHTxmKNcuI1yGAGOf3pvxd67p3XhqK%2Fiz4Cbx9evOImXvhihUD8xH%2F5LfOwRaodK0bDt6FJlh3ZcSSwvhYGZKHy%2B%2F%2BvYGOG60eqhuPrJtne4ja8ZKCe8k3NsujkDEspATRA70X8eKwZogBLhYUUOr0p%2FfD%2Flny7DN9W82Qc%2F1v7L%2FEwI1GaztZfQd2FZtq0LN%2Fqxi7nvt94X3FsEZpwH1O3XUA0RrhCbleyHOCHWrIaZwcN6XbaOw5WZA52el7kow5MZBeMJa5iptM7AGOEnGRgVnkQ%2By09L975kTasS8sU7Fg69%2F9iKCCE7XGnzD8i8XphhgtyVVoc2jloLTavjIM1yl96V3ADinJFb%2FzWCteHZss66gxlSqE8PWoxaUjFvwxRFh4Ut7OAqu3QzVAMPDplpIiMMn7xL4GOqUBbn820DnmdBZP%2BpbWyXD3bhpPTPOmoUl%2Fi1O7QyoWyMUrxY7epSWdc5ovNzi4mwVhTTTbC2RGWMA75BuCA0io6jj9%2F1QZsjVVXqnhC19AcbnfRA815tml1CpAYo0Y3fUJPplXUZumZ177WSwilHaDWzDQ5lF7oBKFOBAZLeEBz3A%2FRS5Oc%2FoxnSTqonGiFLNAS6LJBCK9oeM765K1iJqGfDpip1lp&X-Amz-Signature=0ad4a229bbdb0fa66edfe7d39920893f15da99ba1c725b9a68301e8f4bcec636&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AGV437%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBTBy8hbpdEuDb%2BYZ8KoO1SjA0Nvl7e7ZY3Zips110jOAiEAp0sjt%2BeYTeePLzUK9k%2Bh76fNY8%2BJ4RkoZZFt9cz6oa4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqTGNakYNYHdBAAYyrcA0g8wBNvefhNFs6ix5PMWAffJ1ad8MLJfKd%2FNoV37l9jy65ZCyl2%2FViOsfwatbUWaFY%2F0cS51QURFyIl%2BlqVVVr2aG3r%2BGPIv0aoKNQEYBIES%2BUQiEOiqHo9lfRcgoxepEl2mZHAQKkbZE5%2F1bFrK7DZiCzuTbaTg85t0%2FP8%2FcZ0z64hOC5xNw7E1wu2MGXNIQEachD3f8pGxovrUGLXAR3IAf%2BECConFLMHTxmKNcuI1yGAGOf3pvxd67p3XhqK%2Fiz4Cbx9evOImXvhihUD8xH%2F5LfOwRaodK0bDt6FJlh3ZcSSwvhYGZKHy%2B%2F%2BvYGOG60eqhuPrJtne4ja8ZKCe8k3NsujkDEspATRA70X8eKwZogBLhYUUOr0p%2FfD%2Flny7DN9W82Qc%2F1v7L%2FEwI1GaztZfQd2FZtq0LN%2Fqxi7nvt94X3FsEZpwH1O3XUA0RrhCbleyHOCHWrIaZwcN6XbaOw5WZA52el7kow5MZBeMJa5iptM7AGOEnGRgVnkQ%2By09L975kTasS8sU7Fg69%2F9iKCCE7XGnzD8i8XphhgtyVVoc2jloLTavjIM1yl96V3ADinJFb%2FzWCteHZss66gxlSqE8PWoxaUjFvwxRFh4Ut7OAqu3QzVAMPDplpIiMMn7xL4GOqUBbn820DnmdBZP%2BpbWyXD3bhpPTPOmoUl%2Fi1O7QyoWyMUrxY7epSWdc5ovNzi4mwVhTTTbC2RGWMA75BuCA0io6jj9%2F1QZsjVVXqnhC19AcbnfRA815tml1CpAYo0Y3fUJPplXUZumZ177WSwilHaDWzDQ5lF7oBKFOBAZLeEBz3A%2FRS5Oc%2FoxnSTqonGiFLNAS6LJBCK9oeM765K1iJqGfDpip1lp&X-Amz-Signature=a3b16e306e6a4f9a7476607fd4f59da02a5d9964bbc792da4db1177aecf2fd10&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AGV437%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBTBy8hbpdEuDb%2BYZ8KoO1SjA0Nvl7e7ZY3Zips110jOAiEAp0sjt%2BeYTeePLzUK9k%2Bh76fNY8%2BJ4RkoZZFt9cz6oa4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqTGNakYNYHdBAAYyrcA0g8wBNvefhNFs6ix5PMWAffJ1ad8MLJfKd%2FNoV37l9jy65ZCyl2%2FViOsfwatbUWaFY%2F0cS51QURFyIl%2BlqVVVr2aG3r%2BGPIv0aoKNQEYBIES%2BUQiEOiqHo9lfRcgoxepEl2mZHAQKkbZE5%2F1bFrK7DZiCzuTbaTg85t0%2FP8%2FcZ0z64hOC5xNw7E1wu2MGXNIQEachD3f8pGxovrUGLXAR3IAf%2BECConFLMHTxmKNcuI1yGAGOf3pvxd67p3XhqK%2Fiz4Cbx9evOImXvhihUD8xH%2F5LfOwRaodK0bDt6FJlh3ZcSSwvhYGZKHy%2B%2F%2BvYGOG60eqhuPrJtne4ja8ZKCe8k3NsujkDEspATRA70X8eKwZogBLhYUUOr0p%2FfD%2Flny7DN9W82Qc%2F1v7L%2FEwI1GaztZfQd2FZtq0LN%2Fqxi7nvt94X3FsEZpwH1O3XUA0RrhCbleyHOCHWrIaZwcN6XbaOw5WZA52el7kow5MZBeMJa5iptM7AGOEnGRgVnkQ%2By09L975kTasS8sU7Fg69%2F9iKCCE7XGnzD8i8XphhgtyVVoc2jloLTavjIM1yl96V3ADinJFb%2FzWCteHZss66gxlSqE8PWoxaUjFvwxRFh4Ut7OAqu3QzVAMPDplpIiMMn7xL4GOqUBbn820DnmdBZP%2BpbWyXD3bhpPTPOmoUl%2Fi1O7QyoWyMUrxY7epSWdc5ovNzi4mwVhTTTbC2RGWMA75BuCA0io6jj9%2F1QZsjVVXqnhC19AcbnfRA815tml1CpAYo0Y3fUJPplXUZumZ177WSwilHaDWzDQ5lF7oBKFOBAZLeEBz3A%2FRS5Oc%2FoxnSTqonGiFLNAS6LJBCK9oeM765K1iJqGfDpip1lp&X-Amz-Signature=2c372bc33db38bcdafb01adfdba0ceb5d8605967e3ea9f4a287a6812f036fb04&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AGV437%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBTBy8hbpdEuDb%2BYZ8KoO1SjA0Nvl7e7ZY3Zips110jOAiEAp0sjt%2BeYTeePLzUK9k%2Bh76fNY8%2BJ4RkoZZFt9cz6oa4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqTGNakYNYHdBAAYyrcA0g8wBNvefhNFs6ix5PMWAffJ1ad8MLJfKd%2FNoV37l9jy65ZCyl2%2FViOsfwatbUWaFY%2F0cS51QURFyIl%2BlqVVVr2aG3r%2BGPIv0aoKNQEYBIES%2BUQiEOiqHo9lfRcgoxepEl2mZHAQKkbZE5%2F1bFrK7DZiCzuTbaTg85t0%2FP8%2FcZ0z64hOC5xNw7E1wu2MGXNIQEachD3f8pGxovrUGLXAR3IAf%2BECConFLMHTxmKNcuI1yGAGOf3pvxd67p3XhqK%2Fiz4Cbx9evOImXvhihUD8xH%2F5LfOwRaodK0bDt6FJlh3ZcSSwvhYGZKHy%2B%2F%2BvYGOG60eqhuPrJtne4ja8ZKCe8k3NsujkDEspATRA70X8eKwZogBLhYUUOr0p%2FfD%2Flny7DN9W82Qc%2F1v7L%2FEwI1GaztZfQd2FZtq0LN%2Fqxi7nvt94X3FsEZpwH1O3XUA0RrhCbleyHOCHWrIaZwcN6XbaOw5WZA52el7kow5MZBeMJa5iptM7AGOEnGRgVnkQ%2By09L975kTasS8sU7Fg69%2F9iKCCE7XGnzD8i8XphhgtyVVoc2jloLTavjIM1yl96V3ADinJFb%2FzWCteHZss66gxlSqE8PWoxaUjFvwxRFh4Ut7OAqu3QzVAMPDplpIiMMn7xL4GOqUBbn820DnmdBZP%2BpbWyXD3bhpPTPOmoUl%2Fi1O7QyoWyMUrxY7epSWdc5ovNzi4mwVhTTTbC2RGWMA75BuCA0io6jj9%2F1QZsjVVXqnhC19AcbnfRA815tml1CpAYo0Y3fUJPplXUZumZ177WSwilHaDWzDQ5lF7oBKFOBAZLeEBz3A%2FRS5Oc%2FoxnSTqonGiFLNAS6LJBCK9oeM765K1iJqGfDpip1lp&X-Amz-Signature=4b7b1fa8d744f77a6b3a5406b8b91d397b11789decad771ca490ad65ec84e3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
