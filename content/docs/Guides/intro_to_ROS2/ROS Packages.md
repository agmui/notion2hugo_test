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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZBASKZ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPYYJExcuKpDmwIaPWHFhspXIHOkX%2B5xoZK51v2HTsLAiAVlrqigfUhSrRuJDeeSDp64N5r%2BtDwtqUVVNigpsqs1yr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMxMkOhaTHdoodKNEOKtwDkQcjOx30xv76cEKTfS8qNklfcVm3gx9fsetr3LcPWRj3cVkhS8ebsyGspxEarW3EuvtAuHbW8049W%2BaewqY70Qy9j%2BYYj%2Bbvz0gViWYB%2FDEjQKdXsgv8F4aiy7UImtrGtwnUc4IYDFdlosngs%2BzBWjk2rMo5%2B0Y9h40xZdzXXudVpWzaWN8kC4I9eSnrb0RIYq6Z7GW416%2Be0z1%2B7PKvzjfDQ4CPl7Q0glPlDa%2F%2F8MtM2Rl8V3%2Fwd14mpsVLZiiHlMdpnO6KZIc%2FtCadc3iceH2Mb9tAtfkpKqppjpqc%2Frc%2B4Tgv%2B47VMxwTpsD3AAAokH9YlSO75kuNhT3tUrkkZClbDrn4oWaLnbySzJ3XhKPmF54cE5wRklfR%2Fgx0XKgW5jcG6MOoCV2Bczm09%2FNGuasjZVxV4IbUV5z4RKKWL4jLrVWN9aeW6NA0otJ9WwC4i%2Fdsp581ItiiAvqeSfI4YkhpGlWOvUUGFYPRuUSqgxOryv0qRDh7yfyi9ZdYlHtYSUkq5RcI8seoErTkXPAvvyOYevBpFR2%2FSKurn7DvTQDL2qsVP%2Fz4ny7aAkpEs2bk7R2VsONQn8g%2F3FucPTHwC%2BarJCfOuJb5mVK06gua0viFrzmNfvWFsMMLBxIwy%2FGRvwY6pgEwg8vPx%2F3qBtgwqt5HaeeKbmXQgUwYXg6R5Jl6iS6qry2RwTu5gy0ZXfORNuoDupi9BUOQuuOZihrdDQQIJcH63hkxhYoezbsjQCuKY5a4z%2BodjPQFPya4xS2jFkKp6TD5VydEaK2I2BYDj5Kr7H5ZslYOyZibP3VfhASJ%2F3lUhzLGhJ7aAUF9eiEx1ysMfy2AUD2F5LqpcaSQy3TkOxnnsR4QK1nC&X-Amz-Signature=420a85939210edbb046f13bd72dcfdca7746f972b7d58e13d02e5b7622cf540c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZBASKZ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPYYJExcuKpDmwIaPWHFhspXIHOkX%2B5xoZK51v2HTsLAiAVlrqigfUhSrRuJDeeSDp64N5r%2BtDwtqUVVNigpsqs1yr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMxMkOhaTHdoodKNEOKtwDkQcjOx30xv76cEKTfS8qNklfcVm3gx9fsetr3LcPWRj3cVkhS8ebsyGspxEarW3EuvtAuHbW8049W%2BaewqY70Qy9j%2BYYj%2Bbvz0gViWYB%2FDEjQKdXsgv8F4aiy7UImtrGtwnUc4IYDFdlosngs%2BzBWjk2rMo5%2B0Y9h40xZdzXXudVpWzaWN8kC4I9eSnrb0RIYq6Z7GW416%2Be0z1%2B7PKvzjfDQ4CPl7Q0glPlDa%2F%2F8MtM2Rl8V3%2Fwd14mpsVLZiiHlMdpnO6KZIc%2FtCadc3iceH2Mb9tAtfkpKqppjpqc%2Frc%2B4Tgv%2B47VMxwTpsD3AAAokH9YlSO75kuNhT3tUrkkZClbDrn4oWaLnbySzJ3XhKPmF54cE5wRklfR%2Fgx0XKgW5jcG6MOoCV2Bczm09%2FNGuasjZVxV4IbUV5z4RKKWL4jLrVWN9aeW6NA0otJ9WwC4i%2Fdsp581ItiiAvqeSfI4YkhpGlWOvUUGFYPRuUSqgxOryv0qRDh7yfyi9ZdYlHtYSUkq5RcI8seoErTkXPAvvyOYevBpFR2%2FSKurn7DvTQDL2qsVP%2Fz4ny7aAkpEs2bk7R2VsONQn8g%2F3FucPTHwC%2BarJCfOuJb5mVK06gua0viFrzmNfvWFsMMLBxIwy%2FGRvwY6pgEwg8vPx%2F3qBtgwqt5HaeeKbmXQgUwYXg6R5Jl6iS6qry2RwTu5gy0ZXfORNuoDupi9BUOQuuOZihrdDQQIJcH63hkxhYoezbsjQCuKY5a4z%2BodjPQFPya4xS2jFkKp6TD5VydEaK2I2BYDj5Kr7H5ZslYOyZibP3VfhASJ%2F3lUhzLGhJ7aAUF9eiEx1ysMfy2AUD2F5LqpcaSQy3TkOxnnsR4QK1nC&X-Amz-Signature=1769e64be2853a9aa63ec38340e3e1f39801b8ea099a20de8f424bb53ca62eff&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZBASKZ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPYYJExcuKpDmwIaPWHFhspXIHOkX%2B5xoZK51v2HTsLAiAVlrqigfUhSrRuJDeeSDp64N5r%2BtDwtqUVVNigpsqs1yr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMxMkOhaTHdoodKNEOKtwDkQcjOx30xv76cEKTfS8qNklfcVm3gx9fsetr3LcPWRj3cVkhS8ebsyGspxEarW3EuvtAuHbW8049W%2BaewqY70Qy9j%2BYYj%2Bbvz0gViWYB%2FDEjQKdXsgv8F4aiy7UImtrGtwnUc4IYDFdlosngs%2BzBWjk2rMo5%2B0Y9h40xZdzXXudVpWzaWN8kC4I9eSnrb0RIYq6Z7GW416%2Be0z1%2B7PKvzjfDQ4CPl7Q0glPlDa%2F%2F8MtM2Rl8V3%2Fwd14mpsVLZiiHlMdpnO6KZIc%2FtCadc3iceH2Mb9tAtfkpKqppjpqc%2Frc%2B4Tgv%2B47VMxwTpsD3AAAokH9YlSO75kuNhT3tUrkkZClbDrn4oWaLnbySzJ3XhKPmF54cE5wRklfR%2Fgx0XKgW5jcG6MOoCV2Bczm09%2FNGuasjZVxV4IbUV5z4RKKWL4jLrVWN9aeW6NA0otJ9WwC4i%2Fdsp581ItiiAvqeSfI4YkhpGlWOvUUGFYPRuUSqgxOryv0qRDh7yfyi9ZdYlHtYSUkq5RcI8seoErTkXPAvvyOYevBpFR2%2FSKurn7DvTQDL2qsVP%2Fz4ny7aAkpEs2bk7R2VsONQn8g%2F3FucPTHwC%2BarJCfOuJb5mVK06gua0viFrzmNfvWFsMMLBxIwy%2FGRvwY6pgEwg8vPx%2F3qBtgwqt5HaeeKbmXQgUwYXg6R5Jl6iS6qry2RwTu5gy0ZXfORNuoDupi9BUOQuuOZihrdDQQIJcH63hkxhYoezbsjQCuKY5a4z%2BodjPQFPya4xS2jFkKp6TD5VydEaK2I2BYDj5Kr7H5ZslYOyZibP3VfhASJ%2F3lUhzLGhJ7aAUF9eiEx1ysMfy2AUD2F5LqpcaSQy3TkOxnnsR4QK1nC&X-Amz-Signature=3c4cc24aae94366ad6ed5e7b096dff03e4e89c626cf365d73a0daf5d2c9fcc6c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZBASKZ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPYYJExcuKpDmwIaPWHFhspXIHOkX%2B5xoZK51v2HTsLAiAVlrqigfUhSrRuJDeeSDp64N5r%2BtDwtqUVVNigpsqs1yr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMxMkOhaTHdoodKNEOKtwDkQcjOx30xv76cEKTfS8qNklfcVm3gx9fsetr3LcPWRj3cVkhS8ebsyGspxEarW3EuvtAuHbW8049W%2BaewqY70Qy9j%2BYYj%2Bbvz0gViWYB%2FDEjQKdXsgv8F4aiy7UImtrGtwnUc4IYDFdlosngs%2BzBWjk2rMo5%2B0Y9h40xZdzXXudVpWzaWN8kC4I9eSnrb0RIYq6Z7GW416%2Be0z1%2B7PKvzjfDQ4CPl7Q0glPlDa%2F%2F8MtM2Rl8V3%2Fwd14mpsVLZiiHlMdpnO6KZIc%2FtCadc3iceH2Mb9tAtfkpKqppjpqc%2Frc%2B4Tgv%2B47VMxwTpsD3AAAokH9YlSO75kuNhT3tUrkkZClbDrn4oWaLnbySzJ3XhKPmF54cE5wRklfR%2Fgx0XKgW5jcG6MOoCV2Bczm09%2FNGuasjZVxV4IbUV5z4RKKWL4jLrVWN9aeW6NA0otJ9WwC4i%2Fdsp581ItiiAvqeSfI4YkhpGlWOvUUGFYPRuUSqgxOryv0qRDh7yfyi9ZdYlHtYSUkq5RcI8seoErTkXPAvvyOYevBpFR2%2FSKurn7DvTQDL2qsVP%2Fz4ny7aAkpEs2bk7R2VsONQn8g%2F3FucPTHwC%2BarJCfOuJb5mVK06gua0viFrzmNfvWFsMMLBxIwy%2FGRvwY6pgEwg8vPx%2F3qBtgwqt5HaeeKbmXQgUwYXg6R5Jl6iS6qry2RwTu5gy0ZXfORNuoDupi9BUOQuuOZihrdDQQIJcH63hkxhYoezbsjQCuKY5a4z%2BodjPQFPya4xS2jFkKp6TD5VydEaK2I2BYDj5Kr7H5ZslYOyZibP3VfhASJ%2F3lUhzLGhJ7aAUF9eiEx1ysMfy2AUD2F5LqpcaSQy3TkOxnnsR4QK1nC&X-Amz-Signature=f641dfcbcea67fa5896a4d0ce979bae911a327a046e24f32b0b474407cebc4dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZBASKZ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPYYJExcuKpDmwIaPWHFhspXIHOkX%2B5xoZK51v2HTsLAiAVlrqigfUhSrRuJDeeSDp64N5r%2BtDwtqUVVNigpsqs1yr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMxMkOhaTHdoodKNEOKtwDkQcjOx30xv76cEKTfS8qNklfcVm3gx9fsetr3LcPWRj3cVkhS8ebsyGspxEarW3EuvtAuHbW8049W%2BaewqY70Qy9j%2BYYj%2Bbvz0gViWYB%2FDEjQKdXsgv8F4aiy7UImtrGtwnUc4IYDFdlosngs%2BzBWjk2rMo5%2B0Y9h40xZdzXXudVpWzaWN8kC4I9eSnrb0RIYq6Z7GW416%2Be0z1%2B7PKvzjfDQ4CPl7Q0glPlDa%2F%2F8MtM2Rl8V3%2Fwd14mpsVLZiiHlMdpnO6KZIc%2FtCadc3iceH2Mb9tAtfkpKqppjpqc%2Frc%2B4Tgv%2B47VMxwTpsD3AAAokH9YlSO75kuNhT3tUrkkZClbDrn4oWaLnbySzJ3XhKPmF54cE5wRklfR%2Fgx0XKgW5jcG6MOoCV2Bczm09%2FNGuasjZVxV4IbUV5z4RKKWL4jLrVWN9aeW6NA0otJ9WwC4i%2Fdsp581ItiiAvqeSfI4YkhpGlWOvUUGFYPRuUSqgxOryv0qRDh7yfyi9ZdYlHtYSUkq5RcI8seoErTkXPAvvyOYevBpFR2%2FSKurn7DvTQDL2qsVP%2Fz4ny7aAkpEs2bk7R2VsONQn8g%2F3FucPTHwC%2BarJCfOuJb5mVK06gua0viFrzmNfvWFsMMLBxIwy%2FGRvwY6pgEwg8vPx%2F3qBtgwqt5HaeeKbmXQgUwYXg6R5Jl6iS6qry2RwTu5gy0ZXfORNuoDupi9BUOQuuOZihrdDQQIJcH63hkxhYoezbsjQCuKY5a4z%2BodjPQFPya4xS2jFkKp6TD5VydEaK2I2BYDj5Kr7H5ZslYOyZibP3VfhASJ%2F3lUhzLGhJ7aAUF9eiEx1ysMfy2AUD2F5LqpcaSQy3TkOxnnsR4QK1nC&X-Amz-Signature=4ac0b8387f2b2d6e6c5a861dde7ef31b776fbb3ca0020299c21b79c842204daf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZBASKZ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPYYJExcuKpDmwIaPWHFhspXIHOkX%2B5xoZK51v2HTsLAiAVlrqigfUhSrRuJDeeSDp64N5r%2BtDwtqUVVNigpsqs1yr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMxMkOhaTHdoodKNEOKtwDkQcjOx30xv76cEKTfS8qNklfcVm3gx9fsetr3LcPWRj3cVkhS8ebsyGspxEarW3EuvtAuHbW8049W%2BaewqY70Qy9j%2BYYj%2Bbvz0gViWYB%2FDEjQKdXsgv8F4aiy7UImtrGtwnUc4IYDFdlosngs%2BzBWjk2rMo5%2B0Y9h40xZdzXXudVpWzaWN8kC4I9eSnrb0RIYq6Z7GW416%2Be0z1%2B7PKvzjfDQ4CPl7Q0glPlDa%2F%2F8MtM2Rl8V3%2Fwd14mpsVLZiiHlMdpnO6KZIc%2FtCadc3iceH2Mb9tAtfkpKqppjpqc%2Frc%2B4Tgv%2B47VMxwTpsD3AAAokH9YlSO75kuNhT3tUrkkZClbDrn4oWaLnbySzJ3XhKPmF54cE5wRklfR%2Fgx0XKgW5jcG6MOoCV2Bczm09%2FNGuasjZVxV4IbUV5z4RKKWL4jLrVWN9aeW6NA0otJ9WwC4i%2Fdsp581ItiiAvqeSfI4YkhpGlWOvUUGFYPRuUSqgxOryv0qRDh7yfyi9ZdYlHtYSUkq5RcI8seoErTkXPAvvyOYevBpFR2%2FSKurn7DvTQDL2qsVP%2Fz4ny7aAkpEs2bk7R2VsONQn8g%2F3FucPTHwC%2BarJCfOuJb5mVK06gua0viFrzmNfvWFsMMLBxIwy%2FGRvwY6pgEwg8vPx%2F3qBtgwqt5HaeeKbmXQgUwYXg6R5Jl6iS6qry2RwTu5gy0ZXfORNuoDupi9BUOQuuOZihrdDQQIJcH63hkxhYoezbsjQCuKY5a4z%2BodjPQFPya4xS2jFkKp6TD5VydEaK2I2BYDj5Kr7H5ZslYOyZibP3VfhASJ%2F3lUhzLGhJ7aAUF9eiEx1ysMfy2AUD2F5LqpcaSQy3TkOxnnsR4QK1nC&X-Amz-Signature=576f86639d2703191be558411408e405e41d264c4e7f170e7cf756ff2c75dd9a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZBASKZ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPYYJExcuKpDmwIaPWHFhspXIHOkX%2B5xoZK51v2HTsLAiAVlrqigfUhSrRuJDeeSDp64N5r%2BtDwtqUVVNigpsqs1yr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMxMkOhaTHdoodKNEOKtwDkQcjOx30xv76cEKTfS8qNklfcVm3gx9fsetr3LcPWRj3cVkhS8ebsyGspxEarW3EuvtAuHbW8049W%2BaewqY70Qy9j%2BYYj%2Bbvz0gViWYB%2FDEjQKdXsgv8F4aiy7UImtrGtwnUc4IYDFdlosngs%2BzBWjk2rMo5%2B0Y9h40xZdzXXudVpWzaWN8kC4I9eSnrb0RIYq6Z7GW416%2Be0z1%2B7PKvzjfDQ4CPl7Q0glPlDa%2F%2F8MtM2Rl8V3%2Fwd14mpsVLZiiHlMdpnO6KZIc%2FtCadc3iceH2Mb9tAtfkpKqppjpqc%2Frc%2B4Tgv%2B47VMxwTpsD3AAAokH9YlSO75kuNhT3tUrkkZClbDrn4oWaLnbySzJ3XhKPmF54cE5wRklfR%2Fgx0XKgW5jcG6MOoCV2Bczm09%2FNGuasjZVxV4IbUV5z4RKKWL4jLrVWN9aeW6NA0otJ9WwC4i%2Fdsp581ItiiAvqeSfI4YkhpGlWOvUUGFYPRuUSqgxOryv0qRDh7yfyi9ZdYlHtYSUkq5RcI8seoErTkXPAvvyOYevBpFR2%2FSKurn7DvTQDL2qsVP%2Fz4ny7aAkpEs2bk7R2VsONQn8g%2F3FucPTHwC%2BarJCfOuJb5mVK06gua0viFrzmNfvWFsMMLBxIwy%2FGRvwY6pgEwg8vPx%2F3qBtgwqt5HaeeKbmXQgUwYXg6R5Jl6iS6qry2RwTu5gy0ZXfORNuoDupi9BUOQuuOZihrdDQQIJcH63hkxhYoezbsjQCuKY5a4z%2BodjPQFPya4xS2jFkKp6TD5VydEaK2I2BYDj5Kr7H5ZslYOyZibP3VfhASJ%2F3lUhzLGhJ7aAUF9eiEx1ysMfy2AUD2F5LqpcaSQy3TkOxnnsR4QK1nC&X-Amz-Signature=12fc71ac5c16b5fa0ec8ca9c10de447506af2807ca3027233372ec9020e9166a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
