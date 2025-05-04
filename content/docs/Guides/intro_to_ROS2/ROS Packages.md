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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUIX6BS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEvxHH89RQoqFpMXgelExU5SRDVpKvMwfdXRDuGa2lugAiB9XZSImG%2BbVyi7sv1aCFoChTgHH4XWuj2SsAm2SKB1vCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk8a3BLffj8QAPYU%2FKtwDG9FpcZAfOG0HYEvgCnPbIerBJZE3Bd9Sj3HCvJXx7WFwP6ymR5VNN%2FlIWgmf%2Bxh3EOeuFJjh6kk1uwblMVKXrVaZ%2FgjAlVan1AWAhfxYi%2FlskxIfnRdOuvtPCWGF%2FHL2VBhV6roANJroK2zIhRCNm54UkevZop2YFqfFqbmxZ8r1%2BJhc2Ok22l4PKP5wXc6GZrTXyfPf36XvpIA9dSxYy4Jni8RTS7xo%2BQU1GSNvMU7haGma%2FEEMzmO9VPZDFQBA%2F2HYsbDu8bvAV2a%2BgNCce2BmPr0VE6%2FqF6gKyZq%2B%2Bqx%2B0ZoBmp7yQUcT91VlOVEbvcF94%2F4ZdG2nbzM%2BQarO5DQg0C0IFwtAYbnQQUEzYmFcIOi%2FvtPoxfbnBkxFl%2FLxwmfnH4H6rBFzuAVO51Z9zkg9L87OvgYG7m2anNI2m%2FHd7to7PWcdWn4dlHuPXuBM%2FAYzanGwZs8leGZEW7sl%2Bz%2BcgXj6SprLAu5ulpSS5oq%2FdWebbGyGsOlDtrkhvkkPKv%2BvOIJ3IKPINVf5DdrL2xN%2FOjKLyZ8ndqjXH7KTzIAHsbe1AzYPalcYAM2Pb6uS%2BC8IUD2G4JFpZGYj4QGLjq97EbAbvl4rBNlbi%2FD72TVqjY4F2x4MMbIxVpEw%2B9jawAY6pgGw7fdbjZaoNoqzYyVj07L50YttngnCSWDFgET%2F8UZpYBPgE%2FrTjm6YmHVNF6sI%2FkF7EdZWnBMcIaJERv%2F9Dj427mZmUXqzmcFJFHy571x0MLWQv%2F5mqJqd8qxaiqQBCD8f7qlTS9d1XC2XQMtEIjrq9lF8Wu%2Fexq4RuGtlXGAOYF%2BjRJlkr7G7tiabLdK0xrFWcayNATN7jfE%2F0dhYqgCx07Z5zIO4&X-Amz-Signature=ebaa95ee95a2872286a6ef90f26f1879ad50c6545b3a21b8ba09b6ade9690154&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUIX6BS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEvxHH89RQoqFpMXgelExU5SRDVpKvMwfdXRDuGa2lugAiB9XZSImG%2BbVyi7sv1aCFoChTgHH4XWuj2SsAm2SKB1vCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk8a3BLffj8QAPYU%2FKtwDG9FpcZAfOG0HYEvgCnPbIerBJZE3Bd9Sj3HCvJXx7WFwP6ymR5VNN%2FlIWgmf%2Bxh3EOeuFJjh6kk1uwblMVKXrVaZ%2FgjAlVan1AWAhfxYi%2FlskxIfnRdOuvtPCWGF%2FHL2VBhV6roANJroK2zIhRCNm54UkevZop2YFqfFqbmxZ8r1%2BJhc2Ok22l4PKP5wXc6GZrTXyfPf36XvpIA9dSxYy4Jni8RTS7xo%2BQU1GSNvMU7haGma%2FEEMzmO9VPZDFQBA%2F2HYsbDu8bvAV2a%2BgNCce2BmPr0VE6%2FqF6gKyZq%2B%2Bqx%2B0ZoBmp7yQUcT91VlOVEbvcF94%2F4ZdG2nbzM%2BQarO5DQg0C0IFwtAYbnQQUEzYmFcIOi%2FvtPoxfbnBkxFl%2FLxwmfnH4H6rBFzuAVO51Z9zkg9L87OvgYG7m2anNI2m%2FHd7to7PWcdWn4dlHuPXuBM%2FAYzanGwZs8leGZEW7sl%2Bz%2BcgXj6SprLAu5ulpSS5oq%2FdWebbGyGsOlDtrkhvkkPKv%2BvOIJ3IKPINVf5DdrL2xN%2FOjKLyZ8ndqjXH7KTzIAHsbe1AzYPalcYAM2Pb6uS%2BC8IUD2G4JFpZGYj4QGLjq97EbAbvl4rBNlbi%2FD72TVqjY4F2x4MMbIxVpEw%2B9jawAY6pgGw7fdbjZaoNoqzYyVj07L50YttngnCSWDFgET%2F8UZpYBPgE%2FrTjm6YmHVNF6sI%2FkF7EdZWnBMcIaJERv%2F9Dj427mZmUXqzmcFJFHy571x0MLWQv%2F5mqJqd8qxaiqQBCD8f7qlTS9d1XC2XQMtEIjrq9lF8Wu%2Fexq4RuGtlXGAOYF%2BjRJlkr7G7tiabLdK0xrFWcayNATN7jfE%2F0dhYqgCx07Z5zIO4&X-Amz-Signature=14da2169a387158ef526d13e3c842d4d9dfb8059af6ba0bf1b93955a3654ddfb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUIX6BS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEvxHH89RQoqFpMXgelExU5SRDVpKvMwfdXRDuGa2lugAiB9XZSImG%2BbVyi7sv1aCFoChTgHH4XWuj2SsAm2SKB1vCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk8a3BLffj8QAPYU%2FKtwDG9FpcZAfOG0HYEvgCnPbIerBJZE3Bd9Sj3HCvJXx7WFwP6ymR5VNN%2FlIWgmf%2Bxh3EOeuFJjh6kk1uwblMVKXrVaZ%2FgjAlVan1AWAhfxYi%2FlskxIfnRdOuvtPCWGF%2FHL2VBhV6roANJroK2zIhRCNm54UkevZop2YFqfFqbmxZ8r1%2BJhc2Ok22l4PKP5wXc6GZrTXyfPf36XvpIA9dSxYy4Jni8RTS7xo%2BQU1GSNvMU7haGma%2FEEMzmO9VPZDFQBA%2F2HYsbDu8bvAV2a%2BgNCce2BmPr0VE6%2FqF6gKyZq%2B%2Bqx%2B0ZoBmp7yQUcT91VlOVEbvcF94%2F4ZdG2nbzM%2BQarO5DQg0C0IFwtAYbnQQUEzYmFcIOi%2FvtPoxfbnBkxFl%2FLxwmfnH4H6rBFzuAVO51Z9zkg9L87OvgYG7m2anNI2m%2FHd7to7PWcdWn4dlHuPXuBM%2FAYzanGwZs8leGZEW7sl%2Bz%2BcgXj6SprLAu5ulpSS5oq%2FdWebbGyGsOlDtrkhvkkPKv%2BvOIJ3IKPINVf5DdrL2xN%2FOjKLyZ8ndqjXH7KTzIAHsbe1AzYPalcYAM2Pb6uS%2BC8IUD2G4JFpZGYj4QGLjq97EbAbvl4rBNlbi%2FD72TVqjY4F2x4MMbIxVpEw%2B9jawAY6pgGw7fdbjZaoNoqzYyVj07L50YttngnCSWDFgET%2F8UZpYBPgE%2FrTjm6YmHVNF6sI%2FkF7EdZWnBMcIaJERv%2F9Dj427mZmUXqzmcFJFHy571x0MLWQv%2F5mqJqd8qxaiqQBCD8f7qlTS9d1XC2XQMtEIjrq9lF8Wu%2Fexq4RuGtlXGAOYF%2BjRJlkr7G7tiabLdK0xrFWcayNATN7jfE%2F0dhYqgCx07Z5zIO4&X-Amz-Signature=a37b30354516b159209c93c251eee0c2282e5f56599573847ce1975fae4746a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUIX6BS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEvxHH89RQoqFpMXgelExU5SRDVpKvMwfdXRDuGa2lugAiB9XZSImG%2BbVyi7sv1aCFoChTgHH4XWuj2SsAm2SKB1vCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk8a3BLffj8QAPYU%2FKtwDG9FpcZAfOG0HYEvgCnPbIerBJZE3Bd9Sj3HCvJXx7WFwP6ymR5VNN%2FlIWgmf%2Bxh3EOeuFJjh6kk1uwblMVKXrVaZ%2FgjAlVan1AWAhfxYi%2FlskxIfnRdOuvtPCWGF%2FHL2VBhV6roANJroK2zIhRCNm54UkevZop2YFqfFqbmxZ8r1%2BJhc2Ok22l4PKP5wXc6GZrTXyfPf36XvpIA9dSxYy4Jni8RTS7xo%2BQU1GSNvMU7haGma%2FEEMzmO9VPZDFQBA%2F2HYsbDu8bvAV2a%2BgNCce2BmPr0VE6%2FqF6gKyZq%2B%2Bqx%2B0ZoBmp7yQUcT91VlOVEbvcF94%2F4ZdG2nbzM%2BQarO5DQg0C0IFwtAYbnQQUEzYmFcIOi%2FvtPoxfbnBkxFl%2FLxwmfnH4H6rBFzuAVO51Z9zkg9L87OvgYG7m2anNI2m%2FHd7to7PWcdWn4dlHuPXuBM%2FAYzanGwZs8leGZEW7sl%2Bz%2BcgXj6SprLAu5ulpSS5oq%2FdWebbGyGsOlDtrkhvkkPKv%2BvOIJ3IKPINVf5DdrL2xN%2FOjKLyZ8ndqjXH7KTzIAHsbe1AzYPalcYAM2Pb6uS%2BC8IUD2G4JFpZGYj4QGLjq97EbAbvl4rBNlbi%2FD72TVqjY4F2x4MMbIxVpEw%2B9jawAY6pgGw7fdbjZaoNoqzYyVj07L50YttngnCSWDFgET%2F8UZpYBPgE%2FrTjm6YmHVNF6sI%2FkF7EdZWnBMcIaJERv%2F9Dj427mZmUXqzmcFJFHy571x0MLWQv%2F5mqJqd8qxaiqQBCD8f7qlTS9d1XC2XQMtEIjrq9lF8Wu%2Fexq4RuGtlXGAOYF%2BjRJlkr7G7tiabLdK0xrFWcayNATN7jfE%2F0dhYqgCx07Z5zIO4&X-Amz-Signature=376737d675fa9c6a2b4a586fd96a0222fceaefd5e28016bb67de286d0e9e5a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUIX6BS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEvxHH89RQoqFpMXgelExU5SRDVpKvMwfdXRDuGa2lugAiB9XZSImG%2BbVyi7sv1aCFoChTgHH4XWuj2SsAm2SKB1vCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk8a3BLffj8QAPYU%2FKtwDG9FpcZAfOG0HYEvgCnPbIerBJZE3Bd9Sj3HCvJXx7WFwP6ymR5VNN%2FlIWgmf%2Bxh3EOeuFJjh6kk1uwblMVKXrVaZ%2FgjAlVan1AWAhfxYi%2FlskxIfnRdOuvtPCWGF%2FHL2VBhV6roANJroK2zIhRCNm54UkevZop2YFqfFqbmxZ8r1%2BJhc2Ok22l4PKP5wXc6GZrTXyfPf36XvpIA9dSxYy4Jni8RTS7xo%2BQU1GSNvMU7haGma%2FEEMzmO9VPZDFQBA%2F2HYsbDu8bvAV2a%2BgNCce2BmPr0VE6%2FqF6gKyZq%2B%2Bqx%2B0ZoBmp7yQUcT91VlOVEbvcF94%2F4ZdG2nbzM%2BQarO5DQg0C0IFwtAYbnQQUEzYmFcIOi%2FvtPoxfbnBkxFl%2FLxwmfnH4H6rBFzuAVO51Z9zkg9L87OvgYG7m2anNI2m%2FHd7to7PWcdWn4dlHuPXuBM%2FAYzanGwZs8leGZEW7sl%2Bz%2BcgXj6SprLAu5ulpSS5oq%2FdWebbGyGsOlDtrkhvkkPKv%2BvOIJ3IKPINVf5DdrL2xN%2FOjKLyZ8ndqjXH7KTzIAHsbe1AzYPalcYAM2Pb6uS%2BC8IUD2G4JFpZGYj4QGLjq97EbAbvl4rBNlbi%2FD72TVqjY4F2x4MMbIxVpEw%2B9jawAY6pgGw7fdbjZaoNoqzYyVj07L50YttngnCSWDFgET%2F8UZpYBPgE%2FrTjm6YmHVNF6sI%2FkF7EdZWnBMcIaJERv%2F9Dj427mZmUXqzmcFJFHy571x0MLWQv%2F5mqJqd8qxaiqQBCD8f7qlTS9d1XC2XQMtEIjrq9lF8Wu%2Fexq4RuGtlXGAOYF%2BjRJlkr7G7tiabLdK0xrFWcayNATN7jfE%2F0dhYqgCx07Z5zIO4&X-Amz-Signature=c058c6895d295a31214574360573af410e8e037d023c727c66974ec3cb3d192d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUIX6BS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEvxHH89RQoqFpMXgelExU5SRDVpKvMwfdXRDuGa2lugAiB9XZSImG%2BbVyi7sv1aCFoChTgHH4XWuj2SsAm2SKB1vCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk8a3BLffj8QAPYU%2FKtwDG9FpcZAfOG0HYEvgCnPbIerBJZE3Bd9Sj3HCvJXx7WFwP6ymR5VNN%2FlIWgmf%2Bxh3EOeuFJjh6kk1uwblMVKXrVaZ%2FgjAlVan1AWAhfxYi%2FlskxIfnRdOuvtPCWGF%2FHL2VBhV6roANJroK2zIhRCNm54UkevZop2YFqfFqbmxZ8r1%2BJhc2Ok22l4PKP5wXc6GZrTXyfPf36XvpIA9dSxYy4Jni8RTS7xo%2BQU1GSNvMU7haGma%2FEEMzmO9VPZDFQBA%2F2HYsbDu8bvAV2a%2BgNCce2BmPr0VE6%2FqF6gKyZq%2B%2Bqx%2B0ZoBmp7yQUcT91VlOVEbvcF94%2F4ZdG2nbzM%2BQarO5DQg0C0IFwtAYbnQQUEzYmFcIOi%2FvtPoxfbnBkxFl%2FLxwmfnH4H6rBFzuAVO51Z9zkg9L87OvgYG7m2anNI2m%2FHd7to7PWcdWn4dlHuPXuBM%2FAYzanGwZs8leGZEW7sl%2Bz%2BcgXj6SprLAu5ulpSS5oq%2FdWebbGyGsOlDtrkhvkkPKv%2BvOIJ3IKPINVf5DdrL2xN%2FOjKLyZ8ndqjXH7KTzIAHsbe1AzYPalcYAM2Pb6uS%2BC8IUD2G4JFpZGYj4QGLjq97EbAbvl4rBNlbi%2FD72TVqjY4F2x4MMbIxVpEw%2B9jawAY6pgGw7fdbjZaoNoqzYyVj07L50YttngnCSWDFgET%2F8UZpYBPgE%2FrTjm6YmHVNF6sI%2FkF7EdZWnBMcIaJERv%2F9Dj427mZmUXqzmcFJFHy571x0MLWQv%2F5mqJqd8qxaiqQBCD8f7qlTS9d1XC2XQMtEIjrq9lF8Wu%2Fexq4RuGtlXGAOYF%2BjRJlkr7G7tiabLdK0xrFWcayNATN7jfE%2F0dhYqgCx07Z5zIO4&X-Amz-Signature=a3d40e6bd223b583d4067fdac01aad207acac66c88acdab56ceaacb893d93243&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUIX6BS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEvxHH89RQoqFpMXgelExU5SRDVpKvMwfdXRDuGa2lugAiB9XZSImG%2BbVyi7sv1aCFoChTgHH4XWuj2SsAm2SKB1vCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk8a3BLffj8QAPYU%2FKtwDG9FpcZAfOG0HYEvgCnPbIerBJZE3Bd9Sj3HCvJXx7WFwP6ymR5VNN%2FlIWgmf%2Bxh3EOeuFJjh6kk1uwblMVKXrVaZ%2FgjAlVan1AWAhfxYi%2FlskxIfnRdOuvtPCWGF%2FHL2VBhV6roANJroK2zIhRCNm54UkevZop2YFqfFqbmxZ8r1%2BJhc2Ok22l4PKP5wXc6GZrTXyfPf36XvpIA9dSxYy4Jni8RTS7xo%2BQU1GSNvMU7haGma%2FEEMzmO9VPZDFQBA%2F2HYsbDu8bvAV2a%2BgNCce2BmPr0VE6%2FqF6gKyZq%2B%2Bqx%2B0ZoBmp7yQUcT91VlOVEbvcF94%2F4ZdG2nbzM%2BQarO5DQg0C0IFwtAYbnQQUEzYmFcIOi%2FvtPoxfbnBkxFl%2FLxwmfnH4H6rBFzuAVO51Z9zkg9L87OvgYG7m2anNI2m%2FHd7to7PWcdWn4dlHuPXuBM%2FAYzanGwZs8leGZEW7sl%2Bz%2BcgXj6SprLAu5ulpSS5oq%2FdWebbGyGsOlDtrkhvkkPKv%2BvOIJ3IKPINVf5DdrL2xN%2FOjKLyZ8ndqjXH7KTzIAHsbe1AzYPalcYAM2Pb6uS%2BC8IUD2G4JFpZGYj4QGLjq97EbAbvl4rBNlbi%2FD72TVqjY4F2x4MMbIxVpEw%2B9jawAY6pgGw7fdbjZaoNoqzYyVj07L50YttngnCSWDFgET%2F8UZpYBPgE%2FrTjm6YmHVNF6sI%2FkF7EdZWnBMcIaJERv%2F9Dj427mZmUXqzmcFJFHy571x0MLWQv%2F5mqJqd8qxaiqQBCD8f7qlTS9d1XC2XQMtEIjrq9lF8Wu%2Fexq4RuGtlXGAOYF%2BjRJlkr7G7tiabLdK0xrFWcayNATN7jfE%2F0dhYqgCx07Z5zIO4&X-Amz-Signature=febb17047406d58da16491b9a420432ede79767038b72e00b6ab89dca3f872fc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
