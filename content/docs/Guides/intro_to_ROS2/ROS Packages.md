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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTUY4KE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC78RdaURq1eDxIOWK%2B5VR9dnQ%2BZjLeY3VzlTQNAPaAsgIgcNMWtIijuOvOUySTKenbSOj35LvlWF26FYh5Do55%2B7oq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKzMH03O7UiAP6Gv1CrcA0ZcSoHnYOkMQKtq3GnkNFtAGmblPLqZmOPtUa5Bmxsvf0rYgmnfyWBEpK0SIZ6oD6vsb1e2fhP%2BJ6JhPB8u6t%2BtAEBMqWM57JqhHEePnEjgus1xSAwuV8oAjOxFLi4BP4Bdk2j8SjkWPnZt1AQ3%2FV%2FrQ7btC%2BDmEOXgNwBGpF1544Ug1eAnjt6I0jEakpmssUIB4dGlKhi8L6uJAVMGjxOrA0sSEVBe69NkMAlU5Pr4QFhzBWwYrKmShrG3BlPHib8T%2FnQ%2F%2FrozasOkrrryMYbIOsJqFaWBTvVYM0ESUhpGw0MBy5mlBXmOJq8odFUn9iylotWI19hAtjTpACbmOW5US0sbKAqCnQSRFezg8rCXeuXZWbb5sx%2BrPia5kI2AEBiKW55octA%2Fl0nPNTcKEt7nzr%2BL89Jl7AOuelyjOV7td8B5wkyvo9WoX93E4tzK9ivsseIbJcOB3QgMPtkQtjTcOg41b3eZDPpKIbIuEs79GBhkispNbjWA3uX3kUnZQchykniS1nNy2GBNwVn8t50BJLaw8YBmnnsb7EGAaI4fdd%2FiJGRZTgcPotM%2BJEAWhr357pSpprUgNPKi%2FPnaWodBJwcy6EjzSB5nHGPlMZ0DdNs7Oe2c4h2yaA3LMNSI7MAGOqUB0948HbQEA6q58xSGZm6o6nn55PLTW%2FrrwV43tzOFGsgzc56lG3sOQ7N3E5GnsZTF2xKce1bZAgXzVqw180Ls%2BoQ3UVoxRt9fo3ciALcngw7T5n4L8uIxfEJy%2FmQu9Xdz5rEu9Bi6aJ%2FcWhPhVlKQi69A8DaynXP%2B4tWgYskycsheD0qOOyqF3kNz%2FuevCSfSwzcByFshztplVwTihYGkCbn5l4Ez&X-Amz-Signature=20334736ecabe88d510c1149bb586fcea43b92836c1e11dd85b9c2ae69c65f94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTUY4KE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC78RdaURq1eDxIOWK%2B5VR9dnQ%2BZjLeY3VzlTQNAPaAsgIgcNMWtIijuOvOUySTKenbSOj35LvlWF26FYh5Do55%2B7oq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKzMH03O7UiAP6Gv1CrcA0ZcSoHnYOkMQKtq3GnkNFtAGmblPLqZmOPtUa5Bmxsvf0rYgmnfyWBEpK0SIZ6oD6vsb1e2fhP%2BJ6JhPB8u6t%2BtAEBMqWM57JqhHEePnEjgus1xSAwuV8oAjOxFLi4BP4Bdk2j8SjkWPnZt1AQ3%2FV%2FrQ7btC%2BDmEOXgNwBGpF1544Ug1eAnjt6I0jEakpmssUIB4dGlKhi8L6uJAVMGjxOrA0sSEVBe69NkMAlU5Pr4QFhzBWwYrKmShrG3BlPHib8T%2FnQ%2F%2FrozasOkrrryMYbIOsJqFaWBTvVYM0ESUhpGw0MBy5mlBXmOJq8odFUn9iylotWI19hAtjTpACbmOW5US0sbKAqCnQSRFezg8rCXeuXZWbb5sx%2BrPia5kI2AEBiKW55octA%2Fl0nPNTcKEt7nzr%2BL89Jl7AOuelyjOV7td8B5wkyvo9WoX93E4tzK9ivsseIbJcOB3QgMPtkQtjTcOg41b3eZDPpKIbIuEs79GBhkispNbjWA3uX3kUnZQchykniS1nNy2GBNwVn8t50BJLaw8YBmnnsb7EGAaI4fdd%2FiJGRZTgcPotM%2BJEAWhr357pSpprUgNPKi%2FPnaWodBJwcy6EjzSB5nHGPlMZ0DdNs7Oe2c4h2yaA3LMNSI7MAGOqUB0948HbQEA6q58xSGZm6o6nn55PLTW%2FrrwV43tzOFGsgzc56lG3sOQ7N3E5GnsZTF2xKce1bZAgXzVqw180Ls%2BoQ3UVoxRt9fo3ciALcngw7T5n4L8uIxfEJy%2FmQu9Xdz5rEu9Bi6aJ%2FcWhPhVlKQi69A8DaynXP%2B4tWgYskycsheD0qOOyqF3kNz%2FuevCSfSwzcByFshztplVwTihYGkCbn5l4Ez&X-Amz-Signature=b2de674dfa07c1830a252a41e31ca24f6d3ecc32c53840f355d12f0cea0445aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTUY4KE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC78RdaURq1eDxIOWK%2B5VR9dnQ%2BZjLeY3VzlTQNAPaAsgIgcNMWtIijuOvOUySTKenbSOj35LvlWF26FYh5Do55%2B7oq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKzMH03O7UiAP6Gv1CrcA0ZcSoHnYOkMQKtq3GnkNFtAGmblPLqZmOPtUa5Bmxsvf0rYgmnfyWBEpK0SIZ6oD6vsb1e2fhP%2BJ6JhPB8u6t%2BtAEBMqWM57JqhHEePnEjgus1xSAwuV8oAjOxFLi4BP4Bdk2j8SjkWPnZt1AQ3%2FV%2FrQ7btC%2BDmEOXgNwBGpF1544Ug1eAnjt6I0jEakpmssUIB4dGlKhi8L6uJAVMGjxOrA0sSEVBe69NkMAlU5Pr4QFhzBWwYrKmShrG3BlPHib8T%2FnQ%2F%2FrozasOkrrryMYbIOsJqFaWBTvVYM0ESUhpGw0MBy5mlBXmOJq8odFUn9iylotWI19hAtjTpACbmOW5US0sbKAqCnQSRFezg8rCXeuXZWbb5sx%2BrPia5kI2AEBiKW55octA%2Fl0nPNTcKEt7nzr%2BL89Jl7AOuelyjOV7td8B5wkyvo9WoX93E4tzK9ivsseIbJcOB3QgMPtkQtjTcOg41b3eZDPpKIbIuEs79GBhkispNbjWA3uX3kUnZQchykniS1nNy2GBNwVn8t50BJLaw8YBmnnsb7EGAaI4fdd%2FiJGRZTgcPotM%2BJEAWhr357pSpprUgNPKi%2FPnaWodBJwcy6EjzSB5nHGPlMZ0DdNs7Oe2c4h2yaA3LMNSI7MAGOqUB0948HbQEA6q58xSGZm6o6nn55PLTW%2FrrwV43tzOFGsgzc56lG3sOQ7N3E5GnsZTF2xKce1bZAgXzVqw180Ls%2BoQ3UVoxRt9fo3ciALcngw7T5n4L8uIxfEJy%2FmQu9Xdz5rEu9Bi6aJ%2FcWhPhVlKQi69A8DaynXP%2B4tWgYskycsheD0qOOyqF3kNz%2FuevCSfSwzcByFshztplVwTihYGkCbn5l4Ez&X-Amz-Signature=362349b8cb9cd9a966de6fed236afca730f69f195b46011e7df8ec0e6ce383c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTUY4KE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC78RdaURq1eDxIOWK%2B5VR9dnQ%2BZjLeY3VzlTQNAPaAsgIgcNMWtIijuOvOUySTKenbSOj35LvlWF26FYh5Do55%2B7oq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKzMH03O7UiAP6Gv1CrcA0ZcSoHnYOkMQKtq3GnkNFtAGmblPLqZmOPtUa5Bmxsvf0rYgmnfyWBEpK0SIZ6oD6vsb1e2fhP%2BJ6JhPB8u6t%2BtAEBMqWM57JqhHEePnEjgus1xSAwuV8oAjOxFLi4BP4Bdk2j8SjkWPnZt1AQ3%2FV%2FrQ7btC%2BDmEOXgNwBGpF1544Ug1eAnjt6I0jEakpmssUIB4dGlKhi8L6uJAVMGjxOrA0sSEVBe69NkMAlU5Pr4QFhzBWwYrKmShrG3BlPHib8T%2FnQ%2F%2FrozasOkrrryMYbIOsJqFaWBTvVYM0ESUhpGw0MBy5mlBXmOJq8odFUn9iylotWI19hAtjTpACbmOW5US0sbKAqCnQSRFezg8rCXeuXZWbb5sx%2BrPia5kI2AEBiKW55octA%2Fl0nPNTcKEt7nzr%2BL89Jl7AOuelyjOV7td8B5wkyvo9WoX93E4tzK9ivsseIbJcOB3QgMPtkQtjTcOg41b3eZDPpKIbIuEs79GBhkispNbjWA3uX3kUnZQchykniS1nNy2GBNwVn8t50BJLaw8YBmnnsb7EGAaI4fdd%2FiJGRZTgcPotM%2BJEAWhr357pSpprUgNPKi%2FPnaWodBJwcy6EjzSB5nHGPlMZ0DdNs7Oe2c4h2yaA3LMNSI7MAGOqUB0948HbQEA6q58xSGZm6o6nn55PLTW%2FrrwV43tzOFGsgzc56lG3sOQ7N3E5GnsZTF2xKce1bZAgXzVqw180Ls%2BoQ3UVoxRt9fo3ciALcngw7T5n4L8uIxfEJy%2FmQu9Xdz5rEu9Bi6aJ%2FcWhPhVlKQi69A8DaynXP%2B4tWgYskycsheD0qOOyqF3kNz%2FuevCSfSwzcByFshztplVwTihYGkCbn5l4Ez&X-Amz-Signature=385a9d7a50077c4f6a398171a28857952a4ca8d418e686a7e8a83397d2b6d264&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTUY4KE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC78RdaURq1eDxIOWK%2B5VR9dnQ%2BZjLeY3VzlTQNAPaAsgIgcNMWtIijuOvOUySTKenbSOj35LvlWF26FYh5Do55%2B7oq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKzMH03O7UiAP6Gv1CrcA0ZcSoHnYOkMQKtq3GnkNFtAGmblPLqZmOPtUa5Bmxsvf0rYgmnfyWBEpK0SIZ6oD6vsb1e2fhP%2BJ6JhPB8u6t%2BtAEBMqWM57JqhHEePnEjgus1xSAwuV8oAjOxFLi4BP4Bdk2j8SjkWPnZt1AQ3%2FV%2FrQ7btC%2BDmEOXgNwBGpF1544Ug1eAnjt6I0jEakpmssUIB4dGlKhi8L6uJAVMGjxOrA0sSEVBe69NkMAlU5Pr4QFhzBWwYrKmShrG3BlPHib8T%2FnQ%2F%2FrozasOkrrryMYbIOsJqFaWBTvVYM0ESUhpGw0MBy5mlBXmOJq8odFUn9iylotWI19hAtjTpACbmOW5US0sbKAqCnQSRFezg8rCXeuXZWbb5sx%2BrPia5kI2AEBiKW55octA%2Fl0nPNTcKEt7nzr%2BL89Jl7AOuelyjOV7td8B5wkyvo9WoX93E4tzK9ivsseIbJcOB3QgMPtkQtjTcOg41b3eZDPpKIbIuEs79GBhkispNbjWA3uX3kUnZQchykniS1nNy2GBNwVn8t50BJLaw8YBmnnsb7EGAaI4fdd%2FiJGRZTgcPotM%2BJEAWhr357pSpprUgNPKi%2FPnaWodBJwcy6EjzSB5nHGPlMZ0DdNs7Oe2c4h2yaA3LMNSI7MAGOqUB0948HbQEA6q58xSGZm6o6nn55PLTW%2FrrwV43tzOFGsgzc56lG3sOQ7N3E5GnsZTF2xKce1bZAgXzVqw180Ls%2BoQ3UVoxRt9fo3ciALcngw7T5n4L8uIxfEJy%2FmQu9Xdz5rEu9Bi6aJ%2FcWhPhVlKQi69A8DaynXP%2B4tWgYskycsheD0qOOyqF3kNz%2FuevCSfSwzcByFshztplVwTihYGkCbn5l4Ez&X-Amz-Signature=5cec87fb4ebb962c62ed54a185df62574fa7d1ba597a34fa87013f3d3f95be62&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTUY4KE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC78RdaURq1eDxIOWK%2B5VR9dnQ%2BZjLeY3VzlTQNAPaAsgIgcNMWtIijuOvOUySTKenbSOj35LvlWF26FYh5Do55%2B7oq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKzMH03O7UiAP6Gv1CrcA0ZcSoHnYOkMQKtq3GnkNFtAGmblPLqZmOPtUa5Bmxsvf0rYgmnfyWBEpK0SIZ6oD6vsb1e2fhP%2BJ6JhPB8u6t%2BtAEBMqWM57JqhHEePnEjgus1xSAwuV8oAjOxFLi4BP4Bdk2j8SjkWPnZt1AQ3%2FV%2FrQ7btC%2BDmEOXgNwBGpF1544Ug1eAnjt6I0jEakpmssUIB4dGlKhi8L6uJAVMGjxOrA0sSEVBe69NkMAlU5Pr4QFhzBWwYrKmShrG3BlPHib8T%2FnQ%2F%2FrozasOkrrryMYbIOsJqFaWBTvVYM0ESUhpGw0MBy5mlBXmOJq8odFUn9iylotWI19hAtjTpACbmOW5US0sbKAqCnQSRFezg8rCXeuXZWbb5sx%2BrPia5kI2AEBiKW55octA%2Fl0nPNTcKEt7nzr%2BL89Jl7AOuelyjOV7td8B5wkyvo9WoX93E4tzK9ivsseIbJcOB3QgMPtkQtjTcOg41b3eZDPpKIbIuEs79GBhkispNbjWA3uX3kUnZQchykniS1nNy2GBNwVn8t50BJLaw8YBmnnsb7EGAaI4fdd%2FiJGRZTgcPotM%2BJEAWhr357pSpprUgNPKi%2FPnaWodBJwcy6EjzSB5nHGPlMZ0DdNs7Oe2c4h2yaA3LMNSI7MAGOqUB0948HbQEA6q58xSGZm6o6nn55PLTW%2FrrwV43tzOFGsgzc56lG3sOQ7N3E5GnsZTF2xKce1bZAgXzVqw180Ls%2BoQ3UVoxRt9fo3ciALcngw7T5n4L8uIxfEJy%2FmQu9Xdz5rEu9Bi6aJ%2FcWhPhVlKQi69A8DaynXP%2B4tWgYskycsheD0qOOyqF3kNz%2FuevCSfSwzcByFshztplVwTihYGkCbn5l4Ez&X-Amz-Signature=6c85179bcc1403e561dda417387dfc426c0bda2e4d62d921ff0beb3d15904c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTUY4KE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC78RdaURq1eDxIOWK%2B5VR9dnQ%2BZjLeY3VzlTQNAPaAsgIgcNMWtIijuOvOUySTKenbSOj35LvlWF26FYh5Do55%2B7oq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKzMH03O7UiAP6Gv1CrcA0ZcSoHnYOkMQKtq3GnkNFtAGmblPLqZmOPtUa5Bmxsvf0rYgmnfyWBEpK0SIZ6oD6vsb1e2fhP%2BJ6JhPB8u6t%2BtAEBMqWM57JqhHEePnEjgus1xSAwuV8oAjOxFLi4BP4Bdk2j8SjkWPnZt1AQ3%2FV%2FrQ7btC%2BDmEOXgNwBGpF1544Ug1eAnjt6I0jEakpmssUIB4dGlKhi8L6uJAVMGjxOrA0sSEVBe69NkMAlU5Pr4QFhzBWwYrKmShrG3BlPHib8T%2FnQ%2F%2FrozasOkrrryMYbIOsJqFaWBTvVYM0ESUhpGw0MBy5mlBXmOJq8odFUn9iylotWI19hAtjTpACbmOW5US0sbKAqCnQSRFezg8rCXeuXZWbb5sx%2BrPia5kI2AEBiKW55octA%2Fl0nPNTcKEt7nzr%2BL89Jl7AOuelyjOV7td8B5wkyvo9WoX93E4tzK9ivsseIbJcOB3QgMPtkQtjTcOg41b3eZDPpKIbIuEs79GBhkispNbjWA3uX3kUnZQchykniS1nNy2GBNwVn8t50BJLaw8YBmnnsb7EGAaI4fdd%2FiJGRZTgcPotM%2BJEAWhr357pSpprUgNPKi%2FPnaWodBJwcy6EjzSB5nHGPlMZ0DdNs7Oe2c4h2yaA3LMNSI7MAGOqUB0948HbQEA6q58xSGZm6o6nn55PLTW%2FrrwV43tzOFGsgzc56lG3sOQ7N3E5GnsZTF2xKce1bZAgXzVqw180Ls%2BoQ3UVoxRt9fo3ciALcngw7T5n4L8uIxfEJy%2FmQu9Xdz5rEu9Bi6aJ%2FcWhPhVlKQi69A8DaynXP%2B4tWgYskycsheD0qOOyqF3kNz%2FuevCSfSwzcByFshztplVwTihYGkCbn5l4Ez&X-Amz-Signature=5b9a11f145356452e9066121f16bf4264004841b27b910b330c0e6842658ce47&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
