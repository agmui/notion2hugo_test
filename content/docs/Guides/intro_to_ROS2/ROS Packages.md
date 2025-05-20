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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7TC3NE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAYdngx6TtYW1bygJ%2Fw7YNQPs36ui%2Fc7bhfhzn7XJqfgIhAImSS82CQ44YQ04FaV0arGvEt%2Bf70UczSHg61OsmuGr7KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx59kdjpSrius8dq34q3AMiA66YzgqRHI5uDbUlNJxzasnJSQyVy%2FbYqN8wjv7DMJMXZW5Sph1JX85FDc9KilSMKe48aa2WQbo0IG9%2B%2FDdG%2B7dnPOsER79ckm%2BJk72r8m8HfhUm%2F6N1qsWQjuE4XlWAAIz6VdBun%2FtacWmGqHgRrInXK4b8KWC3NeSprr5KK2or3UBiNuAGS23KJlyL8iaksVw84X81GFAfnhF46qu3RCKcoCt2mitdnP%2F0uKgXgx%2Fx2swxuh4SSe2kx5735vJBh29gfJlx8XDVAuV6bUzuxkPxsm6KLmha7OdEu4gDcZgKWYvFvanI2k1K3Kpku6vq43ilDsmhigASYTCGUwXZIc8TkrB4dNhUa53qh0vxi2Po9fL6Krk196RILg0yKYDqJU31eiO%2FmIco9p%2FLc0Ex9ZDTBZsIT757tb9IzLo0wUxSDYIi906ml3FPBG83bdzsXX9Raz93clijJG77cMEs%2F6m1P%2BuQVIqsi0fv5svFxcTw%2B%2FpFSE5iN5oKGLb3qE%2BiwkjIXT9RVq%2B8HSIDG3G%2BbnBaVO7LlNRwPA%2BYipQooYZvaPO706W2e%2F8Eq1vg%2FhLbhL4vP0%2Bna%2Flh5pQyMF%2F%2FjzAQy4anOQp6i%2F7%2Fpds5a2V393mu%2FQ%2FPWekh5TDyxbDBBjqkAVknV9c5bw%2B69VveoCvMbn081NQv4mXjn%2BIQ0g8WwmaagzXjrq0VDabkkV5cjvUz6iO0pYebOzArPw78rJrxa1cdPzy8Rm5oAiVd%2Bm17zINEJ31eYujB57wLtCVo4rElv5KT125ueAI3TJOaS1R6p5CA6dBuni5%2BD4PtGPiswikcUpBWm7uvIzdikbPs5F5LIavs21nj2Q4Y6vtHTj5qfa82NjUF&X-Amz-Signature=08b64a22b179a5111edaf596cb98c9178e4d523f3ad4ae63307c966d770b24c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7TC3NE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAYdngx6TtYW1bygJ%2Fw7YNQPs36ui%2Fc7bhfhzn7XJqfgIhAImSS82CQ44YQ04FaV0arGvEt%2Bf70UczSHg61OsmuGr7KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx59kdjpSrius8dq34q3AMiA66YzgqRHI5uDbUlNJxzasnJSQyVy%2FbYqN8wjv7DMJMXZW5Sph1JX85FDc9KilSMKe48aa2WQbo0IG9%2B%2FDdG%2B7dnPOsER79ckm%2BJk72r8m8HfhUm%2F6N1qsWQjuE4XlWAAIz6VdBun%2FtacWmGqHgRrInXK4b8KWC3NeSprr5KK2or3UBiNuAGS23KJlyL8iaksVw84X81GFAfnhF46qu3RCKcoCt2mitdnP%2F0uKgXgx%2Fx2swxuh4SSe2kx5735vJBh29gfJlx8XDVAuV6bUzuxkPxsm6KLmha7OdEu4gDcZgKWYvFvanI2k1K3Kpku6vq43ilDsmhigASYTCGUwXZIc8TkrB4dNhUa53qh0vxi2Po9fL6Krk196RILg0yKYDqJU31eiO%2FmIco9p%2FLc0Ex9ZDTBZsIT757tb9IzLo0wUxSDYIi906ml3FPBG83bdzsXX9Raz93clijJG77cMEs%2F6m1P%2BuQVIqsi0fv5svFxcTw%2B%2FpFSE5iN5oKGLb3qE%2BiwkjIXT9RVq%2B8HSIDG3G%2BbnBaVO7LlNRwPA%2BYipQooYZvaPO706W2e%2F8Eq1vg%2FhLbhL4vP0%2Bna%2Flh5pQyMF%2F%2FjzAQy4anOQp6i%2F7%2Fpds5a2V393mu%2FQ%2FPWekh5TDyxbDBBjqkAVknV9c5bw%2B69VveoCvMbn081NQv4mXjn%2BIQ0g8WwmaagzXjrq0VDabkkV5cjvUz6iO0pYebOzArPw78rJrxa1cdPzy8Rm5oAiVd%2Bm17zINEJ31eYujB57wLtCVo4rElv5KT125ueAI3TJOaS1R6p5CA6dBuni5%2BD4PtGPiswikcUpBWm7uvIzdikbPs5F5LIavs21nj2Q4Y6vtHTj5qfa82NjUF&X-Amz-Signature=ab8af70af47309110cea2d4070341bba1c99012080a858605ff1065405f2f6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7TC3NE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAYdngx6TtYW1bygJ%2Fw7YNQPs36ui%2Fc7bhfhzn7XJqfgIhAImSS82CQ44YQ04FaV0arGvEt%2Bf70UczSHg61OsmuGr7KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx59kdjpSrius8dq34q3AMiA66YzgqRHI5uDbUlNJxzasnJSQyVy%2FbYqN8wjv7DMJMXZW5Sph1JX85FDc9KilSMKe48aa2WQbo0IG9%2B%2FDdG%2B7dnPOsER79ckm%2BJk72r8m8HfhUm%2F6N1qsWQjuE4XlWAAIz6VdBun%2FtacWmGqHgRrInXK4b8KWC3NeSprr5KK2or3UBiNuAGS23KJlyL8iaksVw84X81GFAfnhF46qu3RCKcoCt2mitdnP%2F0uKgXgx%2Fx2swxuh4SSe2kx5735vJBh29gfJlx8XDVAuV6bUzuxkPxsm6KLmha7OdEu4gDcZgKWYvFvanI2k1K3Kpku6vq43ilDsmhigASYTCGUwXZIc8TkrB4dNhUa53qh0vxi2Po9fL6Krk196RILg0yKYDqJU31eiO%2FmIco9p%2FLc0Ex9ZDTBZsIT757tb9IzLo0wUxSDYIi906ml3FPBG83bdzsXX9Raz93clijJG77cMEs%2F6m1P%2BuQVIqsi0fv5svFxcTw%2B%2FpFSE5iN5oKGLb3qE%2BiwkjIXT9RVq%2B8HSIDG3G%2BbnBaVO7LlNRwPA%2BYipQooYZvaPO706W2e%2F8Eq1vg%2FhLbhL4vP0%2Bna%2Flh5pQyMF%2F%2FjzAQy4anOQp6i%2F7%2Fpds5a2V393mu%2FQ%2FPWekh5TDyxbDBBjqkAVknV9c5bw%2B69VveoCvMbn081NQv4mXjn%2BIQ0g8WwmaagzXjrq0VDabkkV5cjvUz6iO0pYebOzArPw78rJrxa1cdPzy8Rm5oAiVd%2Bm17zINEJ31eYujB57wLtCVo4rElv5KT125ueAI3TJOaS1R6p5CA6dBuni5%2BD4PtGPiswikcUpBWm7uvIzdikbPs5F5LIavs21nj2Q4Y6vtHTj5qfa82NjUF&X-Amz-Signature=0dfc49ad8d2bfc7cb47b685e16d46a1297087807895788ac55a4e7891786a2f7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7TC3NE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAYdngx6TtYW1bygJ%2Fw7YNQPs36ui%2Fc7bhfhzn7XJqfgIhAImSS82CQ44YQ04FaV0arGvEt%2Bf70UczSHg61OsmuGr7KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx59kdjpSrius8dq34q3AMiA66YzgqRHI5uDbUlNJxzasnJSQyVy%2FbYqN8wjv7DMJMXZW5Sph1JX85FDc9KilSMKe48aa2WQbo0IG9%2B%2FDdG%2B7dnPOsER79ckm%2BJk72r8m8HfhUm%2F6N1qsWQjuE4XlWAAIz6VdBun%2FtacWmGqHgRrInXK4b8KWC3NeSprr5KK2or3UBiNuAGS23KJlyL8iaksVw84X81GFAfnhF46qu3RCKcoCt2mitdnP%2F0uKgXgx%2Fx2swxuh4SSe2kx5735vJBh29gfJlx8XDVAuV6bUzuxkPxsm6KLmha7OdEu4gDcZgKWYvFvanI2k1K3Kpku6vq43ilDsmhigASYTCGUwXZIc8TkrB4dNhUa53qh0vxi2Po9fL6Krk196RILg0yKYDqJU31eiO%2FmIco9p%2FLc0Ex9ZDTBZsIT757tb9IzLo0wUxSDYIi906ml3FPBG83bdzsXX9Raz93clijJG77cMEs%2F6m1P%2BuQVIqsi0fv5svFxcTw%2B%2FpFSE5iN5oKGLb3qE%2BiwkjIXT9RVq%2B8HSIDG3G%2BbnBaVO7LlNRwPA%2BYipQooYZvaPO706W2e%2F8Eq1vg%2FhLbhL4vP0%2Bna%2Flh5pQyMF%2F%2FjzAQy4anOQp6i%2F7%2Fpds5a2V393mu%2FQ%2FPWekh5TDyxbDBBjqkAVknV9c5bw%2B69VveoCvMbn081NQv4mXjn%2BIQ0g8WwmaagzXjrq0VDabkkV5cjvUz6iO0pYebOzArPw78rJrxa1cdPzy8Rm5oAiVd%2Bm17zINEJ31eYujB57wLtCVo4rElv5KT125ueAI3TJOaS1R6p5CA6dBuni5%2BD4PtGPiswikcUpBWm7uvIzdikbPs5F5LIavs21nj2Q4Y6vtHTj5qfa82NjUF&X-Amz-Signature=6eecbdf52aa099305a77243e3c33b48f8d9d79dfe917ae24fdaee3ce9a0bc699&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7TC3NE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAYdngx6TtYW1bygJ%2Fw7YNQPs36ui%2Fc7bhfhzn7XJqfgIhAImSS82CQ44YQ04FaV0arGvEt%2Bf70UczSHg61OsmuGr7KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx59kdjpSrius8dq34q3AMiA66YzgqRHI5uDbUlNJxzasnJSQyVy%2FbYqN8wjv7DMJMXZW5Sph1JX85FDc9KilSMKe48aa2WQbo0IG9%2B%2FDdG%2B7dnPOsER79ckm%2BJk72r8m8HfhUm%2F6N1qsWQjuE4XlWAAIz6VdBun%2FtacWmGqHgRrInXK4b8KWC3NeSprr5KK2or3UBiNuAGS23KJlyL8iaksVw84X81GFAfnhF46qu3RCKcoCt2mitdnP%2F0uKgXgx%2Fx2swxuh4SSe2kx5735vJBh29gfJlx8XDVAuV6bUzuxkPxsm6KLmha7OdEu4gDcZgKWYvFvanI2k1K3Kpku6vq43ilDsmhigASYTCGUwXZIc8TkrB4dNhUa53qh0vxi2Po9fL6Krk196RILg0yKYDqJU31eiO%2FmIco9p%2FLc0Ex9ZDTBZsIT757tb9IzLo0wUxSDYIi906ml3FPBG83bdzsXX9Raz93clijJG77cMEs%2F6m1P%2BuQVIqsi0fv5svFxcTw%2B%2FpFSE5iN5oKGLb3qE%2BiwkjIXT9RVq%2B8HSIDG3G%2BbnBaVO7LlNRwPA%2BYipQooYZvaPO706W2e%2F8Eq1vg%2FhLbhL4vP0%2Bna%2Flh5pQyMF%2F%2FjzAQy4anOQp6i%2F7%2Fpds5a2V393mu%2FQ%2FPWekh5TDyxbDBBjqkAVknV9c5bw%2B69VveoCvMbn081NQv4mXjn%2BIQ0g8WwmaagzXjrq0VDabkkV5cjvUz6iO0pYebOzArPw78rJrxa1cdPzy8Rm5oAiVd%2Bm17zINEJ31eYujB57wLtCVo4rElv5KT125ueAI3TJOaS1R6p5CA6dBuni5%2BD4PtGPiswikcUpBWm7uvIzdikbPs5F5LIavs21nj2Q4Y6vtHTj5qfa82NjUF&X-Amz-Signature=8297ab4cb86f34cf025fa787f217ec0656317fbb73b831b4b614406d0d12fb4d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7TC3NE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAYdngx6TtYW1bygJ%2Fw7YNQPs36ui%2Fc7bhfhzn7XJqfgIhAImSS82CQ44YQ04FaV0arGvEt%2Bf70UczSHg61OsmuGr7KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx59kdjpSrius8dq34q3AMiA66YzgqRHI5uDbUlNJxzasnJSQyVy%2FbYqN8wjv7DMJMXZW5Sph1JX85FDc9KilSMKe48aa2WQbo0IG9%2B%2FDdG%2B7dnPOsER79ckm%2BJk72r8m8HfhUm%2F6N1qsWQjuE4XlWAAIz6VdBun%2FtacWmGqHgRrInXK4b8KWC3NeSprr5KK2or3UBiNuAGS23KJlyL8iaksVw84X81GFAfnhF46qu3RCKcoCt2mitdnP%2F0uKgXgx%2Fx2swxuh4SSe2kx5735vJBh29gfJlx8XDVAuV6bUzuxkPxsm6KLmha7OdEu4gDcZgKWYvFvanI2k1K3Kpku6vq43ilDsmhigASYTCGUwXZIc8TkrB4dNhUa53qh0vxi2Po9fL6Krk196RILg0yKYDqJU31eiO%2FmIco9p%2FLc0Ex9ZDTBZsIT757tb9IzLo0wUxSDYIi906ml3FPBG83bdzsXX9Raz93clijJG77cMEs%2F6m1P%2BuQVIqsi0fv5svFxcTw%2B%2FpFSE5iN5oKGLb3qE%2BiwkjIXT9RVq%2B8HSIDG3G%2BbnBaVO7LlNRwPA%2BYipQooYZvaPO706W2e%2F8Eq1vg%2FhLbhL4vP0%2Bna%2Flh5pQyMF%2F%2FjzAQy4anOQp6i%2F7%2Fpds5a2V393mu%2FQ%2FPWekh5TDyxbDBBjqkAVknV9c5bw%2B69VveoCvMbn081NQv4mXjn%2BIQ0g8WwmaagzXjrq0VDabkkV5cjvUz6iO0pYebOzArPw78rJrxa1cdPzy8Rm5oAiVd%2Bm17zINEJ31eYujB57wLtCVo4rElv5KT125ueAI3TJOaS1R6p5CA6dBuni5%2BD4PtGPiswikcUpBWm7uvIzdikbPs5F5LIavs21nj2Q4Y6vtHTj5qfa82NjUF&X-Amz-Signature=059d491488a81711bdff0b839ddd0df84e8579cf89b0c84c20d003dc7e66b8dd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7TC3NE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAYdngx6TtYW1bygJ%2Fw7YNQPs36ui%2Fc7bhfhzn7XJqfgIhAImSS82CQ44YQ04FaV0arGvEt%2Bf70UczSHg61OsmuGr7KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx59kdjpSrius8dq34q3AMiA66YzgqRHI5uDbUlNJxzasnJSQyVy%2FbYqN8wjv7DMJMXZW5Sph1JX85FDc9KilSMKe48aa2WQbo0IG9%2B%2FDdG%2B7dnPOsER79ckm%2BJk72r8m8HfhUm%2F6N1qsWQjuE4XlWAAIz6VdBun%2FtacWmGqHgRrInXK4b8KWC3NeSprr5KK2or3UBiNuAGS23KJlyL8iaksVw84X81GFAfnhF46qu3RCKcoCt2mitdnP%2F0uKgXgx%2Fx2swxuh4SSe2kx5735vJBh29gfJlx8XDVAuV6bUzuxkPxsm6KLmha7OdEu4gDcZgKWYvFvanI2k1K3Kpku6vq43ilDsmhigASYTCGUwXZIc8TkrB4dNhUa53qh0vxi2Po9fL6Krk196RILg0yKYDqJU31eiO%2FmIco9p%2FLc0Ex9ZDTBZsIT757tb9IzLo0wUxSDYIi906ml3FPBG83bdzsXX9Raz93clijJG77cMEs%2F6m1P%2BuQVIqsi0fv5svFxcTw%2B%2FpFSE5iN5oKGLb3qE%2BiwkjIXT9RVq%2B8HSIDG3G%2BbnBaVO7LlNRwPA%2BYipQooYZvaPO706W2e%2F8Eq1vg%2FhLbhL4vP0%2Bna%2Flh5pQyMF%2F%2FjzAQy4anOQp6i%2F7%2Fpds5a2V393mu%2FQ%2FPWekh5TDyxbDBBjqkAVknV9c5bw%2B69VveoCvMbn081NQv4mXjn%2BIQ0g8WwmaagzXjrq0VDabkkV5cjvUz6iO0pYebOzArPw78rJrxa1cdPzy8Rm5oAiVd%2Bm17zINEJ31eYujB57wLtCVo4rElv5KT125ueAI3TJOaS1R6p5CA6dBuni5%2BD4PtGPiswikcUpBWm7uvIzdikbPs5F5LIavs21nj2Q4Y6vtHTj5qfa82NjUF&X-Amz-Signature=558dfcaad252ec7349788d2ed992b6dca6343bb58b4f851c779ad90899751658&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
