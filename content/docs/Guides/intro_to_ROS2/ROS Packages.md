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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP74DZRK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCA3OUU%2B464L1C7PlYduK30nG5YiFpZCkKOylJWPoBrkwIgIiTbhjuOC41JXiTQrCZR4WURytsCi5fqYKxufN5e2k4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEx1%2BlFc%2BOMX0F2MGSrcA1xl6kpLGIAH3SnUUFUpfZ9t8DUTfCoTyropcg9L3KCnw0YYxlNqy7XW9XqDXlGjGIn9bJBvltdQ0OLmAqf6G4Ja%2BSQwlgWInbTkhbglErf5iwtzFqhycx05XemOjLUfxdAtG%2F%2FU7Ez%2BjPlfVUpV%2BhWC%2B%2FSVQFOt4S1iONLDaEaZxj87zgEyFwgbJs0AKZuU5UkNJlMUs88mlYq2%2BUfBf%2Bite5wQWFNGFfZp4bfkclH2u9AA0H3fLjNpOhCunCfVzkF9%2FuJqlPBGoiy81LLbCxDS8kKpiNo1gtM5hw%2FNh%2B%2F%2BMAozMYsxdNHp9VBiXv1y3NxoMfpQ8uf1%2Bo1qrXhimVpOJKeLF3NYmQfgrmSK86utBno7I9EHRDP8QIFaMf2PK2ASinTIs4jYRwcDpVxiNtx7a3gG9X1q4h5o2xa1Pfiz1PNgycllqVhDF6sORdu63zTit%2BVC73SP9Mv3%2BO%2Bc1KTgjByZMGQgL4WIfTFniis%2FmPo20wojyVcp3i%2BGbyj1PmCApVH46pZhpgi7slv2GjHTJ8QwoTSOXrVu7DiRAZrIJaalTWZfujNxaXFwb0Nz59xO8VsX%2B8kI7xvNwDttBg%2FBg%2BG568ngowj4QeBKdAzSUVVBVzNKuBM%2FuQVjMJDHmL0GOqUBW4V3Rx1EO9hfqIVg5cPPfQcK3taj0AwBFfR4GNoO2Tf2LFf%2F6PVbMFS6ZPUuYQzym%2F5SQdMBoSy%2Flj7VS8%2BLOuMDA7qk%2BdZJP8NJFoS6ePH7WLfMkWq6I4jbSqhwiFBg%2FzfIMRvqnB75j83NjSLlAmwZLjaUp8nskBcj3RldE871DjN1kQ9f6CY9PA01%2FPPJQiKge%2FIyTXLEcnneWQhJsEHs8cz%2F&X-Amz-Signature=257c27f5a94a4bf73729a0cb2b13164cfe07f88922f443c9644cfceea69e8285&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP74DZRK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCA3OUU%2B464L1C7PlYduK30nG5YiFpZCkKOylJWPoBrkwIgIiTbhjuOC41JXiTQrCZR4WURytsCi5fqYKxufN5e2k4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEx1%2BlFc%2BOMX0F2MGSrcA1xl6kpLGIAH3SnUUFUpfZ9t8DUTfCoTyropcg9L3KCnw0YYxlNqy7XW9XqDXlGjGIn9bJBvltdQ0OLmAqf6G4Ja%2BSQwlgWInbTkhbglErf5iwtzFqhycx05XemOjLUfxdAtG%2F%2FU7Ez%2BjPlfVUpV%2BhWC%2B%2FSVQFOt4S1iONLDaEaZxj87zgEyFwgbJs0AKZuU5UkNJlMUs88mlYq2%2BUfBf%2Bite5wQWFNGFfZp4bfkclH2u9AA0H3fLjNpOhCunCfVzkF9%2FuJqlPBGoiy81LLbCxDS8kKpiNo1gtM5hw%2FNh%2B%2F%2BMAozMYsxdNHp9VBiXv1y3NxoMfpQ8uf1%2Bo1qrXhimVpOJKeLF3NYmQfgrmSK86utBno7I9EHRDP8QIFaMf2PK2ASinTIs4jYRwcDpVxiNtx7a3gG9X1q4h5o2xa1Pfiz1PNgycllqVhDF6sORdu63zTit%2BVC73SP9Mv3%2BO%2Bc1KTgjByZMGQgL4WIfTFniis%2FmPo20wojyVcp3i%2BGbyj1PmCApVH46pZhpgi7slv2GjHTJ8QwoTSOXrVu7DiRAZrIJaalTWZfujNxaXFwb0Nz59xO8VsX%2B8kI7xvNwDttBg%2FBg%2BG568ngowj4QeBKdAzSUVVBVzNKuBM%2FuQVjMJDHmL0GOqUBW4V3Rx1EO9hfqIVg5cPPfQcK3taj0AwBFfR4GNoO2Tf2LFf%2F6PVbMFS6ZPUuYQzym%2F5SQdMBoSy%2Flj7VS8%2BLOuMDA7qk%2BdZJP8NJFoS6ePH7WLfMkWq6I4jbSqhwiFBg%2FzfIMRvqnB75j83NjSLlAmwZLjaUp8nskBcj3RldE871DjN1kQ9f6CY9PA01%2FPPJQiKge%2FIyTXLEcnneWQhJsEHs8cz%2F&X-Amz-Signature=4c20a8ae2553396afd9cc6c771b0ca44c7df923c2f03f5f4698a6ee79d552ced&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP74DZRK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCA3OUU%2B464L1C7PlYduK30nG5YiFpZCkKOylJWPoBrkwIgIiTbhjuOC41JXiTQrCZR4WURytsCi5fqYKxufN5e2k4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEx1%2BlFc%2BOMX0F2MGSrcA1xl6kpLGIAH3SnUUFUpfZ9t8DUTfCoTyropcg9L3KCnw0YYxlNqy7XW9XqDXlGjGIn9bJBvltdQ0OLmAqf6G4Ja%2BSQwlgWInbTkhbglErf5iwtzFqhycx05XemOjLUfxdAtG%2F%2FU7Ez%2BjPlfVUpV%2BhWC%2B%2FSVQFOt4S1iONLDaEaZxj87zgEyFwgbJs0AKZuU5UkNJlMUs88mlYq2%2BUfBf%2Bite5wQWFNGFfZp4bfkclH2u9AA0H3fLjNpOhCunCfVzkF9%2FuJqlPBGoiy81LLbCxDS8kKpiNo1gtM5hw%2FNh%2B%2F%2BMAozMYsxdNHp9VBiXv1y3NxoMfpQ8uf1%2Bo1qrXhimVpOJKeLF3NYmQfgrmSK86utBno7I9EHRDP8QIFaMf2PK2ASinTIs4jYRwcDpVxiNtx7a3gG9X1q4h5o2xa1Pfiz1PNgycllqVhDF6sORdu63zTit%2BVC73SP9Mv3%2BO%2Bc1KTgjByZMGQgL4WIfTFniis%2FmPo20wojyVcp3i%2BGbyj1PmCApVH46pZhpgi7slv2GjHTJ8QwoTSOXrVu7DiRAZrIJaalTWZfujNxaXFwb0Nz59xO8VsX%2B8kI7xvNwDttBg%2FBg%2BG568ngowj4QeBKdAzSUVVBVzNKuBM%2FuQVjMJDHmL0GOqUBW4V3Rx1EO9hfqIVg5cPPfQcK3taj0AwBFfR4GNoO2Tf2LFf%2F6PVbMFS6ZPUuYQzym%2F5SQdMBoSy%2Flj7VS8%2BLOuMDA7qk%2BdZJP8NJFoS6ePH7WLfMkWq6I4jbSqhwiFBg%2FzfIMRvqnB75j83NjSLlAmwZLjaUp8nskBcj3RldE871DjN1kQ9f6CY9PA01%2FPPJQiKge%2FIyTXLEcnneWQhJsEHs8cz%2F&X-Amz-Signature=9aa934bdd0aaefe23a0ae826450daec4236a78dc5c128619fd18dac425afcb5a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP74DZRK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCA3OUU%2B464L1C7PlYduK30nG5YiFpZCkKOylJWPoBrkwIgIiTbhjuOC41JXiTQrCZR4WURytsCi5fqYKxufN5e2k4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEx1%2BlFc%2BOMX0F2MGSrcA1xl6kpLGIAH3SnUUFUpfZ9t8DUTfCoTyropcg9L3KCnw0YYxlNqy7XW9XqDXlGjGIn9bJBvltdQ0OLmAqf6G4Ja%2BSQwlgWInbTkhbglErf5iwtzFqhycx05XemOjLUfxdAtG%2F%2FU7Ez%2BjPlfVUpV%2BhWC%2B%2FSVQFOt4S1iONLDaEaZxj87zgEyFwgbJs0AKZuU5UkNJlMUs88mlYq2%2BUfBf%2Bite5wQWFNGFfZp4bfkclH2u9AA0H3fLjNpOhCunCfVzkF9%2FuJqlPBGoiy81LLbCxDS8kKpiNo1gtM5hw%2FNh%2B%2F%2BMAozMYsxdNHp9VBiXv1y3NxoMfpQ8uf1%2Bo1qrXhimVpOJKeLF3NYmQfgrmSK86utBno7I9EHRDP8QIFaMf2PK2ASinTIs4jYRwcDpVxiNtx7a3gG9X1q4h5o2xa1Pfiz1PNgycllqVhDF6sORdu63zTit%2BVC73SP9Mv3%2BO%2Bc1KTgjByZMGQgL4WIfTFniis%2FmPo20wojyVcp3i%2BGbyj1PmCApVH46pZhpgi7slv2GjHTJ8QwoTSOXrVu7DiRAZrIJaalTWZfujNxaXFwb0Nz59xO8VsX%2B8kI7xvNwDttBg%2FBg%2BG568ngowj4QeBKdAzSUVVBVzNKuBM%2FuQVjMJDHmL0GOqUBW4V3Rx1EO9hfqIVg5cPPfQcK3taj0AwBFfR4GNoO2Tf2LFf%2F6PVbMFS6ZPUuYQzym%2F5SQdMBoSy%2Flj7VS8%2BLOuMDA7qk%2BdZJP8NJFoS6ePH7WLfMkWq6I4jbSqhwiFBg%2FzfIMRvqnB75j83NjSLlAmwZLjaUp8nskBcj3RldE871DjN1kQ9f6CY9PA01%2FPPJQiKge%2FIyTXLEcnneWQhJsEHs8cz%2F&X-Amz-Signature=fe39cc77b66b7b3046e41a2b1a6073acf63d552b7a8e68279068d129044d13f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP74DZRK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCA3OUU%2B464L1C7PlYduK30nG5YiFpZCkKOylJWPoBrkwIgIiTbhjuOC41JXiTQrCZR4WURytsCi5fqYKxufN5e2k4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEx1%2BlFc%2BOMX0F2MGSrcA1xl6kpLGIAH3SnUUFUpfZ9t8DUTfCoTyropcg9L3KCnw0YYxlNqy7XW9XqDXlGjGIn9bJBvltdQ0OLmAqf6G4Ja%2BSQwlgWInbTkhbglErf5iwtzFqhycx05XemOjLUfxdAtG%2F%2FU7Ez%2BjPlfVUpV%2BhWC%2B%2FSVQFOt4S1iONLDaEaZxj87zgEyFwgbJs0AKZuU5UkNJlMUs88mlYq2%2BUfBf%2Bite5wQWFNGFfZp4bfkclH2u9AA0H3fLjNpOhCunCfVzkF9%2FuJqlPBGoiy81LLbCxDS8kKpiNo1gtM5hw%2FNh%2B%2F%2BMAozMYsxdNHp9VBiXv1y3NxoMfpQ8uf1%2Bo1qrXhimVpOJKeLF3NYmQfgrmSK86utBno7I9EHRDP8QIFaMf2PK2ASinTIs4jYRwcDpVxiNtx7a3gG9X1q4h5o2xa1Pfiz1PNgycllqVhDF6sORdu63zTit%2BVC73SP9Mv3%2BO%2Bc1KTgjByZMGQgL4WIfTFniis%2FmPo20wojyVcp3i%2BGbyj1PmCApVH46pZhpgi7slv2GjHTJ8QwoTSOXrVu7DiRAZrIJaalTWZfujNxaXFwb0Nz59xO8VsX%2B8kI7xvNwDttBg%2FBg%2BG568ngowj4QeBKdAzSUVVBVzNKuBM%2FuQVjMJDHmL0GOqUBW4V3Rx1EO9hfqIVg5cPPfQcK3taj0AwBFfR4GNoO2Tf2LFf%2F6PVbMFS6ZPUuYQzym%2F5SQdMBoSy%2Flj7VS8%2BLOuMDA7qk%2BdZJP8NJFoS6ePH7WLfMkWq6I4jbSqhwiFBg%2FzfIMRvqnB75j83NjSLlAmwZLjaUp8nskBcj3RldE871DjN1kQ9f6CY9PA01%2FPPJQiKge%2FIyTXLEcnneWQhJsEHs8cz%2F&X-Amz-Signature=deac691fc58365d2db1a256e1f6243dfcfd82052bf987639d025004b04126bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP74DZRK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCA3OUU%2B464L1C7PlYduK30nG5YiFpZCkKOylJWPoBrkwIgIiTbhjuOC41JXiTQrCZR4WURytsCi5fqYKxufN5e2k4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEx1%2BlFc%2BOMX0F2MGSrcA1xl6kpLGIAH3SnUUFUpfZ9t8DUTfCoTyropcg9L3KCnw0YYxlNqy7XW9XqDXlGjGIn9bJBvltdQ0OLmAqf6G4Ja%2BSQwlgWInbTkhbglErf5iwtzFqhycx05XemOjLUfxdAtG%2F%2FU7Ez%2BjPlfVUpV%2BhWC%2B%2FSVQFOt4S1iONLDaEaZxj87zgEyFwgbJs0AKZuU5UkNJlMUs88mlYq2%2BUfBf%2Bite5wQWFNGFfZp4bfkclH2u9AA0H3fLjNpOhCunCfVzkF9%2FuJqlPBGoiy81LLbCxDS8kKpiNo1gtM5hw%2FNh%2B%2F%2BMAozMYsxdNHp9VBiXv1y3NxoMfpQ8uf1%2Bo1qrXhimVpOJKeLF3NYmQfgrmSK86utBno7I9EHRDP8QIFaMf2PK2ASinTIs4jYRwcDpVxiNtx7a3gG9X1q4h5o2xa1Pfiz1PNgycllqVhDF6sORdu63zTit%2BVC73SP9Mv3%2BO%2Bc1KTgjByZMGQgL4WIfTFniis%2FmPo20wojyVcp3i%2BGbyj1PmCApVH46pZhpgi7slv2GjHTJ8QwoTSOXrVu7DiRAZrIJaalTWZfujNxaXFwb0Nz59xO8VsX%2B8kI7xvNwDttBg%2FBg%2BG568ngowj4QeBKdAzSUVVBVzNKuBM%2FuQVjMJDHmL0GOqUBW4V3Rx1EO9hfqIVg5cPPfQcK3taj0AwBFfR4GNoO2Tf2LFf%2F6PVbMFS6ZPUuYQzym%2F5SQdMBoSy%2Flj7VS8%2BLOuMDA7qk%2BdZJP8NJFoS6ePH7WLfMkWq6I4jbSqhwiFBg%2FzfIMRvqnB75j83NjSLlAmwZLjaUp8nskBcj3RldE871DjN1kQ9f6CY9PA01%2FPPJQiKge%2FIyTXLEcnneWQhJsEHs8cz%2F&X-Amz-Signature=85a44cb24ca21c63134f3214a92a03978b169cf5eb49638cdaa046f89537871b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP74DZRK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCA3OUU%2B464L1C7PlYduK30nG5YiFpZCkKOylJWPoBrkwIgIiTbhjuOC41JXiTQrCZR4WURytsCi5fqYKxufN5e2k4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEx1%2BlFc%2BOMX0F2MGSrcA1xl6kpLGIAH3SnUUFUpfZ9t8DUTfCoTyropcg9L3KCnw0YYxlNqy7XW9XqDXlGjGIn9bJBvltdQ0OLmAqf6G4Ja%2BSQwlgWInbTkhbglErf5iwtzFqhycx05XemOjLUfxdAtG%2F%2FU7Ez%2BjPlfVUpV%2BhWC%2B%2FSVQFOt4S1iONLDaEaZxj87zgEyFwgbJs0AKZuU5UkNJlMUs88mlYq2%2BUfBf%2Bite5wQWFNGFfZp4bfkclH2u9AA0H3fLjNpOhCunCfVzkF9%2FuJqlPBGoiy81LLbCxDS8kKpiNo1gtM5hw%2FNh%2B%2F%2BMAozMYsxdNHp9VBiXv1y3NxoMfpQ8uf1%2Bo1qrXhimVpOJKeLF3NYmQfgrmSK86utBno7I9EHRDP8QIFaMf2PK2ASinTIs4jYRwcDpVxiNtx7a3gG9X1q4h5o2xa1Pfiz1PNgycllqVhDF6sORdu63zTit%2BVC73SP9Mv3%2BO%2Bc1KTgjByZMGQgL4WIfTFniis%2FmPo20wojyVcp3i%2BGbyj1PmCApVH46pZhpgi7slv2GjHTJ8QwoTSOXrVu7DiRAZrIJaalTWZfujNxaXFwb0Nz59xO8VsX%2B8kI7xvNwDttBg%2FBg%2BG568ngowj4QeBKdAzSUVVBVzNKuBM%2FuQVjMJDHmL0GOqUBW4V3Rx1EO9hfqIVg5cPPfQcK3taj0AwBFfR4GNoO2Tf2LFf%2F6PVbMFS6ZPUuYQzym%2F5SQdMBoSy%2Flj7VS8%2BLOuMDA7qk%2BdZJP8NJFoS6ePH7WLfMkWq6I4jbSqhwiFBg%2FzfIMRvqnB75j83NjSLlAmwZLjaUp8nskBcj3RldE871DjN1kQ9f6CY9PA01%2FPPJQiKge%2FIyTXLEcnneWQhJsEHs8cz%2F&X-Amz-Signature=d376565067d21b6665488d7d2f290cd5c080b764f4ef6ce77835eba757c3dbfb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
