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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJCQWLS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpDBoGHxyO7TyJUgBzYghdQ%2BHpCe62KcNnvyUKDBtewIhAKAeIIMrNNBuMnh8aFyhiFgH%2BAsrSRKeRUZ4sF3Dz0EgKv8DCEMQABoMNjM3NDIzMTgzODA1IgwMpeylZd1YEFEOcLkq3APGM8nfJ5oUeer5Y2RQpqCM68rTdWF29FnFijFZ3ov1SngVrHjo2G4uOMPshQ6%2Bj6nlfLiJI5E5ihspyOmiYl5ir3IbUnGXEJVpuGVI9qVNUkvScgGfjZjpNU2DyPODLx7WOKiEqnThiCDJd3shkW4lBhAYiqX4BkD6iZPn3gj%2BZ1trk2OcNmcKDIVLGKQny7P%2BSZjbqnhwwFtcvkGnltkkaYFLjkRYRTcP82XgCZn8OY0s9ysYLoIfiPf5eIB0%2F3dBWoHu2fivOsAOSOX0YWATO3aeWgaKmjBf99YWVnwqCwDmgCl%2FoLJrQAj35lSSOvAJuRiIjJQ%2B%2FM5dPVkCrYCv9Ck%2FYSeWgZ80Qako9oFjJGeBb7M%2BCPWJH9nTjEoqjEy3PT%2BV%2F3kE8hmC7HX3HlFMRRdNygc2lyeU0BeKhYd4HobMlBHfqge73DQJxVrc7NmIZ9dNYR10ksMoHGLj3rgjtu3JY6SzhNlyxjsWk3hjUYvfODGweqI6qZkf40dhnbneg4e8HaCu%2FG9FNRY4KLeE3I8jJqeGxQz1z%2BZ3xjaLfAZzcVhAetaLrl3MoWan0%2FOgnVGnizptEFae6Bv4K7INjd8Xk67bVLeR3Tns1bGyN04BKdGEZv1rNJLRsDDEh6u%2BBjqkAbpjBAEO6HLPlAFcxy9Q7nAPvwcJZ%2BfOg0ucfNUuKu7DvO0IGe0C5Z6W8XHu6L3NxvqiFsF0yf%2Fj9nKvM3ODRNYkHNgsdJ%2Bi0KJtENhGxcUuKLePolKQ9W8ngnemj2OrKGb7i5D8xgEd0L43CVrorSaw%2BekKpG4MPZM0NzKErRuS0U01s1kWw2dTHpsbiknJ07%2BW9EmGHbJoTqtJ%2Fpfbf%2FtV8Qrq&X-Amz-Signature=75063f9df48ff41e5d7cfc4084160190a0099aad37f38d95bb47cafabff6438f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJCQWLS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpDBoGHxyO7TyJUgBzYghdQ%2BHpCe62KcNnvyUKDBtewIhAKAeIIMrNNBuMnh8aFyhiFgH%2BAsrSRKeRUZ4sF3Dz0EgKv8DCEMQABoMNjM3NDIzMTgzODA1IgwMpeylZd1YEFEOcLkq3APGM8nfJ5oUeer5Y2RQpqCM68rTdWF29FnFijFZ3ov1SngVrHjo2G4uOMPshQ6%2Bj6nlfLiJI5E5ihspyOmiYl5ir3IbUnGXEJVpuGVI9qVNUkvScgGfjZjpNU2DyPODLx7WOKiEqnThiCDJd3shkW4lBhAYiqX4BkD6iZPn3gj%2BZ1trk2OcNmcKDIVLGKQny7P%2BSZjbqnhwwFtcvkGnltkkaYFLjkRYRTcP82XgCZn8OY0s9ysYLoIfiPf5eIB0%2F3dBWoHu2fivOsAOSOX0YWATO3aeWgaKmjBf99YWVnwqCwDmgCl%2FoLJrQAj35lSSOvAJuRiIjJQ%2B%2FM5dPVkCrYCv9Ck%2FYSeWgZ80Qako9oFjJGeBb7M%2BCPWJH9nTjEoqjEy3PT%2BV%2F3kE8hmC7HX3HlFMRRdNygc2lyeU0BeKhYd4HobMlBHfqge73DQJxVrc7NmIZ9dNYR10ksMoHGLj3rgjtu3JY6SzhNlyxjsWk3hjUYvfODGweqI6qZkf40dhnbneg4e8HaCu%2FG9FNRY4KLeE3I8jJqeGxQz1z%2BZ3xjaLfAZzcVhAetaLrl3MoWan0%2FOgnVGnizptEFae6Bv4K7INjd8Xk67bVLeR3Tns1bGyN04BKdGEZv1rNJLRsDDEh6u%2BBjqkAbpjBAEO6HLPlAFcxy9Q7nAPvwcJZ%2BfOg0ucfNUuKu7DvO0IGe0C5Z6W8XHu6L3NxvqiFsF0yf%2Fj9nKvM3ODRNYkHNgsdJ%2Bi0KJtENhGxcUuKLePolKQ9W8ngnemj2OrKGb7i5D8xgEd0L43CVrorSaw%2BekKpG4MPZM0NzKErRuS0U01s1kWw2dTHpsbiknJ07%2BW9EmGHbJoTqtJ%2Fpfbf%2FtV8Qrq&X-Amz-Signature=f9fb1450dc89c7d500cd2c5e1a0d6b6f3db193de6592265370b53a849fbab84c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJCQWLS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpDBoGHxyO7TyJUgBzYghdQ%2BHpCe62KcNnvyUKDBtewIhAKAeIIMrNNBuMnh8aFyhiFgH%2BAsrSRKeRUZ4sF3Dz0EgKv8DCEMQABoMNjM3NDIzMTgzODA1IgwMpeylZd1YEFEOcLkq3APGM8nfJ5oUeer5Y2RQpqCM68rTdWF29FnFijFZ3ov1SngVrHjo2G4uOMPshQ6%2Bj6nlfLiJI5E5ihspyOmiYl5ir3IbUnGXEJVpuGVI9qVNUkvScgGfjZjpNU2DyPODLx7WOKiEqnThiCDJd3shkW4lBhAYiqX4BkD6iZPn3gj%2BZ1trk2OcNmcKDIVLGKQny7P%2BSZjbqnhwwFtcvkGnltkkaYFLjkRYRTcP82XgCZn8OY0s9ysYLoIfiPf5eIB0%2F3dBWoHu2fivOsAOSOX0YWATO3aeWgaKmjBf99YWVnwqCwDmgCl%2FoLJrQAj35lSSOvAJuRiIjJQ%2B%2FM5dPVkCrYCv9Ck%2FYSeWgZ80Qako9oFjJGeBb7M%2BCPWJH9nTjEoqjEy3PT%2BV%2F3kE8hmC7HX3HlFMRRdNygc2lyeU0BeKhYd4HobMlBHfqge73DQJxVrc7NmIZ9dNYR10ksMoHGLj3rgjtu3JY6SzhNlyxjsWk3hjUYvfODGweqI6qZkf40dhnbneg4e8HaCu%2FG9FNRY4KLeE3I8jJqeGxQz1z%2BZ3xjaLfAZzcVhAetaLrl3MoWan0%2FOgnVGnizptEFae6Bv4K7INjd8Xk67bVLeR3Tns1bGyN04BKdGEZv1rNJLRsDDEh6u%2BBjqkAbpjBAEO6HLPlAFcxy9Q7nAPvwcJZ%2BfOg0ucfNUuKu7DvO0IGe0C5Z6W8XHu6L3NxvqiFsF0yf%2Fj9nKvM3ODRNYkHNgsdJ%2Bi0KJtENhGxcUuKLePolKQ9W8ngnemj2OrKGb7i5D8xgEd0L43CVrorSaw%2BekKpG4MPZM0NzKErRuS0U01s1kWw2dTHpsbiknJ07%2BW9EmGHbJoTqtJ%2Fpfbf%2FtV8Qrq&X-Amz-Signature=faf0b79267fc11f5a943c5f9f18e0a299d8b4d2b29abfd4bce109206f243c548&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJCQWLS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpDBoGHxyO7TyJUgBzYghdQ%2BHpCe62KcNnvyUKDBtewIhAKAeIIMrNNBuMnh8aFyhiFgH%2BAsrSRKeRUZ4sF3Dz0EgKv8DCEMQABoMNjM3NDIzMTgzODA1IgwMpeylZd1YEFEOcLkq3APGM8nfJ5oUeer5Y2RQpqCM68rTdWF29FnFijFZ3ov1SngVrHjo2G4uOMPshQ6%2Bj6nlfLiJI5E5ihspyOmiYl5ir3IbUnGXEJVpuGVI9qVNUkvScgGfjZjpNU2DyPODLx7WOKiEqnThiCDJd3shkW4lBhAYiqX4BkD6iZPn3gj%2BZ1trk2OcNmcKDIVLGKQny7P%2BSZjbqnhwwFtcvkGnltkkaYFLjkRYRTcP82XgCZn8OY0s9ysYLoIfiPf5eIB0%2F3dBWoHu2fivOsAOSOX0YWATO3aeWgaKmjBf99YWVnwqCwDmgCl%2FoLJrQAj35lSSOvAJuRiIjJQ%2B%2FM5dPVkCrYCv9Ck%2FYSeWgZ80Qako9oFjJGeBb7M%2BCPWJH9nTjEoqjEy3PT%2BV%2F3kE8hmC7HX3HlFMRRdNygc2lyeU0BeKhYd4HobMlBHfqge73DQJxVrc7NmIZ9dNYR10ksMoHGLj3rgjtu3JY6SzhNlyxjsWk3hjUYvfODGweqI6qZkf40dhnbneg4e8HaCu%2FG9FNRY4KLeE3I8jJqeGxQz1z%2BZ3xjaLfAZzcVhAetaLrl3MoWan0%2FOgnVGnizptEFae6Bv4K7INjd8Xk67bVLeR3Tns1bGyN04BKdGEZv1rNJLRsDDEh6u%2BBjqkAbpjBAEO6HLPlAFcxy9Q7nAPvwcJZ%2BfOg0ucfNUuKu7DvO0IGe0C5Z6W8XHu6L3NxvqiFsF0yf%2Fj9nKvM3ODRNYkHNgsdJ%2Bi0KJtENhGxcUuKLePolKQ9W8ngnemj2OrKGb7i5D8xgEd0L43CVrorSaw%2BekKpG4MPZM0NzKErRuS0U01s1kWw2dTHpsbiknJ07%2BW9EmGHbJoTqtJ%2Fpfbf%2FtV8Qrq&X-Amz-Signature=67e756b22f179e29fed6e47a8404a4427ab7114644fc1809d4c0ac3becfa4ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJCQWLS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpDBoGHxyO7TyJUgBzYghdQ%2BHpCe62KcNnvyUKDBtewIhAKAeIIMrNNBuMnh8aFyhiFgH%2BAsrSRKeRUZ4sF3Dz0EgKv8DCEMQABoMNjM3NDIzMTgzODA1IgwMpeylZd1YEFEOcLkq3APGM8nfJ5oUeer5Y2RQpqCM68rTdWF29FnFijFZ3ov1SngVrHjo2G4uOMPshQ6%2Bj6nlfLiJI5E5ihspyOmiYl5ir3IbUnGXEJVpuGVI9qVNUkvScgGfjZjpNU2DyPODLx7WOKiEqnThiCDJd3shkW4lBhAYiqX4BkD6iZPn3gj%2BZ1trk2OcNmcKDIVLGKQny7P%2BSZjbqnhwwFtcvkGnltkkaYFLjkRYRTcP82XgCZn8OY0s9ysYLoIfiPf5eIB0%2F3dBWoHu2fivOsAOSOX0YWATO3aeWgaKmjBf99YWVnwqCwDmgCl%2FoLJrQAj35lSSOvAJuRiIjJQ%2B%2FM5dPVkCrYCv9Ck%2FYSeWgZ80Qako9oFjJGeBb7M%2BCPWJH9nTjEoqjEy3PT%2BV%2F3kE8hmC7HX3HlFMRRdNygc2lyeU0BeKhYd4HobMlBHfqge73DQJxVrc7NmIZ9dNYR10ksMoHGLj3rgjtu3JY6SzhNlyxjsWk3hjUYvfODGweqI6qZkf40dhnbneg4e8HaCu%2FG9FNRY4KLeE3I8jJqeGxQz1z%2BZ3xjaLfAZzcVhAetaLrl3MoWan0%2FOgnVGnizptEFae6Bv4K7INjd8Xk67bVLeR3Tns1bGyN04BKdGEZv1rNJLRsDDEh6u%2BBjqkAbpjBAEO6HLPlAFcxy9Q7nAPvwcJZ%2BfOg0ucfNUuKu7DvO0IGe0C5Z6W8XHu6L3NxvqiFsF0yf%2Fj9nKvM3ODRNYkHNgsdJ%2Bi0KJtENhGxcUuKLePolKQ9W8ngnemj2OrKGb7i5D8xgEd0L43CVrorSaw%2BekKpG4MPZM0NzKErRuS0U01s1kWw2dTHpsbiknJ07%2BW9EmGHbJoTqtJ%2Fpfbf%2FtV8Qrq&X-Amz-Signature=a6bcb8daa26305ecf2f35703828d21f76413200eb0526d39abfc39315d9bf692&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJCQWLS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpDBoGHxyO7TyJUgBzYghdQ%2BHpCe62KcNnvyUKDBtewIhAKAeIIMrNNBuMnh8aFyhiFgH%2BAsrSRKeRUZ4sF3Dz0EgKv8DCEMQABoMNjM3NDIzMTgzODA1IgwMpeylZd1YEFEOcLkq3APGM8nfJ5oUeer5Y2RQpqCM68rTdWF29FnFijFZ3ov1SngVrHjo2G4uOMPshQ6%2Bj6nlfLiJI5E5ihspyOmiYl5ir3IbUnGXEJVpuGVI9qVNUkvScgGfjZjpNU2DyPODLx7WOKiEqnThiCDJd3shkW4lBhAYiqX4BkD6iZPn3gj%2BZ1trk2OcNmcKDIVLGKQny7P%2BSZjbqnhwwFtcvkGnltkkaYFLjkRYRTcP82XgCZn8OY0s9ysYLoIfiPf5eIB0%2F3dBWoHu2fivOsAOSOX0YWATO3aeWgaKmjBf99YWVnwqCwDmgCl%2FoLJrQAj35lSSOvAJuRiIjJQ%2B%2FM5dPVkCrYCv9Ck%2FYSeWgZ80Qako9oFjJGeBb7M%2BCPWJH9nTjEoqjEy3PT%2BV%2F3kE8hmC7HX3HlFMRRdNygc2lyeU0BeKhYd4HobMlBHfqge73DQJxVrc7NmIZ9dNYR10ksMoHGLj3rgjtu3JY6SzhNlyxjsWk3hjUYvfODGweqI6qZkf40dhnbneg4e8HaCu%2FG9FNRY4KLeE3I8jJqeGxQz1z%2BZ3xjaLfAZzcVhAetaLrl3MoWan0%2FOgnVGnizptEFae6Bv4K7INjd8Xk67bVLeR3Tns1bGyN04BKdGEZv1rNJLRsDDEh6u%2BBjqkAbpjBAEO6HLPlAFcxy9Q7nAPvwcJZ%2BfOg0ucfNUuKu7DvO0IGe0C5Z6W8XHu6L3NxvqiFsF0yf%2Fj9nKvM3ODRNYkHNgsdJ%2Bi0KJtENhGxcUuKLePolKQ9W8ngnemj2OrKGb7i5D8xgEd0L43CVrorSaw%2BekKpG4MPZM0NzKErRuS0U01s1kWw2dTHpsbiknJ07%2BW9EmGHbJoTqtJ%2Fpfbf%2FtV8Qrq&X-Amz-Signature=f59a612979f534fb08f1c48efdd280ff7edbfd88d7a94fc2df6e750dea5613f7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJCQWLS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpDBoGHxyO7TyJUgBzYghdQ%2BHpCe62KcNnvyUKDBtewIhAKAeIIMrNNBuMnh8aFyhiFgH%2BAsrSRKeRUZ4sF3Dz0EgKv8DCEMQABoMNjM3NDIzMTgzODA1IgwMpeylZd1YEFEOcLkq3APGM8nfJ5oUeer5Y2RQpqCM68rTdWF29FnFijFZ3ov1SngVrHjo2G4uOMPshQ6%2Bj6nlfLiJI5E5ihspyOmiYl5ir3IbUnGXEJVpuGVI9qVNUkvScgGfjZjpNU2DyPODLx7WOKiEqnThiCDJd3shkW4lBhAYiqX4BkD6iZPn3gj%2BZ1trk2OcNmcKDIVLGKQny7P%2BSZjbqnhwwFtcvkGnltkkaYFLjkRYRTcP82XgCZn8OY0s9ysYLoIfiPf5eIB0%2F3dBWoHu2fivOsAOSOX0YWATO3aeWgaKmjBf99YWVnwqCwDmgCl%2FoLJrQAj35lSSOvAJuRiIjJQ%2B%2FM5dPVkCrYCv9Ck%2FYSeWgZ80Qako9oFjJGeBb7M%2BCPWJH9nTjEoqjEy3PT%2BV%2F3kE8hmC7HX3HlFMRRdNygc2lyeU0BeKhYd4HobMlBHfqge73DQJxVrc7NmIZ9dNYR10ksMoHGLj3rgjtu3JY6SzhNlyxjsWk3hjUYvfODGweqI6qZkf40dhnbneg4e8HaCu%2FG9FNRY4KLeE3I8jJqeGxQz1z%2BZ3xjaLfAZzcVhAetaLrl3MoWan0%2FOgnVGnizptEFae6Bv4K7INjd8Xk67bVLeR3Tns1bGyN04BKdGEZv1rNJLRsDDEh6u%2BBjqkAbpjBAEO6HLPlAFcxy9Q7nAPvwcJZ%2BfOg0ucfNUuKu7DvO0IGe0C5Z6W8XHu6L3NxvqiFsF0yf%2Fj9nKvM3ODRNYkHNgsdJ%2Bi0KJtENhGxcUuKLePolKQ9W8ngnemj2OrKGb7i5D8xgEd0L43CVrorSaw%2BekKpG4MPZM0NzKErRuS0U01s1kWw2dTHpsbiknJ07%2BW9EmGHbJoTqtJ%2Fpfbf%2FtV8Qrq&X-Amz-Signature=d6c6ab9b3ae0b8f1c0441b1ac53dc87e162b3c2b3ba7518897c52b510a6e72f4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
