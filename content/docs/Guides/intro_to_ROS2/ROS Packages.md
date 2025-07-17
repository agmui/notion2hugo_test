---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL6VTLJ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICRfE9UoNlxBPwi7MV6PN1ZjhKs%2Fxe2yLTqMRa0D2qCAAiA6ZSXpDaCVy2YlhbgvWoKMkVb4K7KCNJarfA8SDTz3sCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2r8%2BGj%2BbDLNjbv2zKtwDgneEzNmY0P95JgIdfhjCCXxzKmwpjWRaOjSBuqq4n4y0ts%2BGfyQ420QpWoZ7xTHkn%2Ftpgdc30hx5N2wl5yWtqDrnx2y7Ph2wQMRHxZZ9kFdFHuPmAY2RjQoMqcQhG5l2nLSNc%2FK5ofWI2vS2EwYgdEKiLO2tUOikxgUiYsYfebB86HO45K1N1Bw2vIP6J8%2BAgi04ScdbeJtJC5wtwFWWJe1Ap4jwEIHXlGvKjPOd84nsusdnDBDCHEh%2F8Yh0uS1lWFMWFoMjzYGcCfcEI%2BuBLB2Va4%2F%2BuL84CHkmiT%2BgHZlAYP7aIFxPoBmzTnO3wdNmf%2BVHgjpmbAV0OEtNz6V9QF%2B7a4opc6kCk7yotX8D%2FTJCD4%2F2eELlqQL8WFZhQCGqlgKIURPDqQ145FM6SNmjWNDOUGOzuZi5mswKXXIE5a4emEhi3wFs8pnG%2F11NmWiXuQNP0IvYCErlxCCZB9nwRe5DBw%2BU50b%2Fg4R8r%2BrvDi2TZVE0zwkunE4WzfL01wkZG%2FNP%2FReu4lHoUFagT6qCLXeAztL%2BFHnktx1yAa7vWi58SHjgXoeE7sjuQp49E99gX1KSB0%2FgZ7ib3wn3zQpNv1GnTnNy3%2BRSrbZ6SgWDdEzQNBXSb4zmiTig7yEwhefkwwY6pgE%2BE187OB0QK4TYq3kooLApHpgiw%2BVgF2TwfJ5nKXqMTYv0pyyuaJBMzvCkzOhwIh8feEGV3aD%2FZVAU5M9Pj5BG8KjQ2q%2FN38N0ArIvP1a8Mc8sqmWUKSe6PyKd22Gr8xN0hfoveNV4w%2Fsio1nvhghu5oKkomMQEpGvgPhKKZwUjCl2OhkcvX%2B%2BsqBMSsfTCmvKrUj%2FicprFNyeIHeCDSt2jtwDNhOj&X-Amz-Signature=6edb2e2f03726ffe4a9a9a49784bb174a9f24041e1cf845cafe8e10cc23cf2bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL6VTLJ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICRfE9UoNlxBPwi7MV6PN1ZjhKs%2Fxe2yLTqMRa0D2qCAAiA6ZSXpDaCVy2YlhbgvWoKMkVb4K7KCNJarfA8SDTz3sCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2r8%2BGj%2BbDLNjbv2zKtwDgneEzNmY0P95JgIdfhjCCXxzKmwpjWRaOjSBuqq4n4y0ts%2BGfyQ420QpWoZ7xTHkn%2Ftpgdc30hx5N2wl5yWtqDrnx2y7Ph2wQMRHxZZ9kFdFHuPmAY2RjQoMqcQhG5l2nLSNc%2FK5ofWI2vS2EwYgdEKiLO2tUOikxgUiYsYfebB86HO45K1N1Bw2vIP6J8%2BAgi04ScdbeJtJC5wtwFWWJe1Ap4jwEIHXlGvKjPOd84nsusdnDBDCHEh%2F8Yh0uS1lWFMWFoMjzYGcCfcEI%2BuBLB2Va4%2F%2BuL84CHkmiT%2BgHZlAYP7aIFxPoBmzTnO3wdNmf%2BVHgjpmbAV0OEtNz6V9QF%2B7a4opc6kCk7yotX8D%2FTJCD4%2F2eELlqQL8WFZhQCGqlgKIURPDqQ145FM6SNmjWNDOUGOzuZi5mswKXXIE5a4emEhi3wFs8pnG%2F11NmWiXuQNP0IvYCErlxCCZB9nwRe5DBw%2BU50b%2Fg4R8r%2BrvDi2TZVE0zwkunE4WzfL01wkZG%2FNP%2FReu4lHoUFagT6qCLXeAztL%2BFHnktx1yAa7vWi58SHjgXoeE7sjuQp49E99gX1KSB0%2FgZ7ib3wn3zQpNv1GnTnNy3%2BRSrbZ6SgWDdEzQNBXSb4zmiTig7yEwhefkwwY6pgE%2BE187OB0QK4TYq3kooLApHpgiw%2BVgF2TwfJ5nKXqMTYv0pyyuaJBMzvCkzOhwIh8feEGV3aD%2FZVAU5M9Pj5BG8KjQ2q%2FN38N0ArIvP1a8Mc8sqmWUKSe6PyKd22Gr8xN0hfoveNV4w%2Fsio1nvhghu5oKkomMQEpGvgPhKKZwUjCl2OhkcvX%2B%2BsqBMSsfTCmvKrUj%2FicprFNyeIHeCDSt2jtwDNhOj&X-Amz-Signature=355914b24398d922cd948387d566dc83f2d6139cd18fcb1fdd77981c3a8a9603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL6VTLJ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICRfE9UoNlxBPwi7MV6PN1ZjhKs%2Fxe2yLTqMRa0D2qCAAiA6ZSXpDaCVy2YlhbgvWoKMkVb4K7KCNJarfA8SDTz3sCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2r8%2BGj%2BbDLNjbv2zKtwDgneEzNmY0P95JgIdfhjCCXxzKmwpjWRaOjSBuqq4n4y0ts%2BGfyQ420QpWoZ7xTHkn%2Ftpgdc30hx5N2wl5yWtqDrnx2y7Ph2wQMRHxZZ9kFdFHuPmAY2RjQoMqcQhG5l2nLSNc%2FK5ofWI2vS2EwYgdEKiLO2tUOikxgUiYsYfebB86HO45K1N1Bw2vIP6J8%2BAgi04ScdbeJtJC5wtwFWWJe1Ap4jwEIHXlGvKjPOd84nsusdnDBDCHEh%2F8Yh0uS1lWFMWFoMjzYGcCfcEI%2BuBLB2Va4%2F%2BuL84CHkmiT%2BgHZlAYP7aIFxPoBmzTnO3wdNmf%2BVHgjpmbAV0OEtNz6V9QF%2B7a4opc6kCk7yotX8D%2FTJCD4%2F2eELlqQL8WFZhQCGqlgKIURPDqQ145FM6SNmjWNDOUGOzuZi5mswKXXIE5a4emEhi3wFs8pnG%2F11NmWiXuQNP0IvYCErlxCCZB9nwRe5DBw%2BU50b%2Fg4R8r%2BrvDi2TZVE0zwkunE4WzfL01wkZG%2FNP%2FReu4lHoUFagT6qCLXeAztL%2BFHnktx1yAa7vWi58SHjgXoeE7sjuQp49E99gX1KSB0%2FgZ7ib3wn3zQpNv1GnTnNy3%2BRSrbZ6SgWDdEzQNBXSb4zmiTig7yEwhefkwwY6pgE%2BE187OB0QK4TYq3kooLApHpgiw%2BVgF2TwfJ5nKXqMTYv0pyyuaJBMzvCkzOhwIh8feEGV3aD%2FZVAU5M9Pj5BG8KjQ2q%2FN38N0ArIvP1a8Mc8sqmWUKSe6PyKd22Gr8xN0hfoveNV4w%2Fsio1nvhghu5oKkomMQEpGvgPhKKZwUjCl2OhkcvX%2B%2BsqBMSsfTCmvKrUj%2FicprFNyeIHeCDSt2jtwDNhOj&X-Amz-Signature=90d7b79169b4ac1537b0ec86f5a12adaf7fca174134b783589fd2880d4bc9748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL6VTLJ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICRfE9UoNlxBPwi7MV6PN1ZjhKs%2Fxe2yLTqMRa0D2qCAAiA6ZSXpDaCVy2YlhbgvWoKMkVb4K7KCNJarfA8SDTz3sCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2r8%2BGj%2BbDLNjbv2zKtwDgneEzNmY0P95JgIdfhjCCXxzKmwpjWRaOjSBuqq4n4y0ts%2BGfyQ420QpWoZ7xTHkn%2Ftpgdc30hx5N2wl5yWtqDrnx2y7Ph2wQMRHxZZ9kFdFHuPmAY2RjQoMqcQhG5l2nLSNc%2FK5ofWI2vS2EwYgdEKiLO2tUOikxgUiYsYfebB86HO45K1N1Bw2vIP6J8%2BAgi04ScdbeJtJC5wtwFWWJe1Ap4jwEIHXlGvKjPOd84nsusdnDBDCHEh%2F8Yh0uS1lWFMWFoMjzYGcCfcEI%2BuBLB2Va4%2F%2BuL84CHkmiT%2BgHZlAYP7aIFxPoBmzTnO3wdNmf%2BVHgjpmbAV0OEtNz6V9QF%2B7a4opc6kCk7yotX8D%2FTJCD4%2F2eELlqQL8WFZhQCGqlgKIURPDqQ145FM6SNmjWNDOUGOzuZi5mswKXXIE5a4emEhi3wFs8pnG%2F11NmWiXuQNP0IvYCErlxCCZB9nwRe5DBw%2BU50b%2Fg4R8r%2BrvDi2TZVE0zwkunE4WzfL01wkZG%2FNP%2FReu4lHoUFagT6qCLXeAztL%2BFHnktx1yAa7vWi58SHjgXoeE7sjuQp49E99gX1KSB0%2FgZ7ib3wn3zQpNv1GnTnNy3%2BRSrbZ6SgWDdEzQNBXSb4zmiTig7yEwhefkwwY6pgE%2BE187OB0QK4TYq3kooLApHpgiw%2BVgF2TwfJ5nKXqMTYv0pyyuaJBMzvCkzOhwIh8feEGV3aD%2FZVAU5M9Pj5BG8KjQ2q%2FN38N0ArIvP1a8Mc8sqmWUKSe6PyKd22Gr8xN0hfoveNV4w%2Fsio1nvhghu5oKkomMQEpGvgPhKKZwUjCl2OhkcvX%2B%2BsqBMSsfTCmvKrUj%2FicprFNyeIHeCDSt2jtwDNhOj&X-Amz-Signature=ab5f089fc25d39976a2cc7e3dfebcf6cb743495af14324d176cb7f08cfaf15ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL6VTLJ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICRfE9UoNlxBPwi7MV6PN1ZjhKs%2Fxe2yLTqMRa0D2qCAAiA6ZSXpDaCVy2YlhbgvWoKMkVb4K7KCNJarfA8SDTz3sCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2r8%2BGj%2BbDLNjbv2zKtwDgneEzNmY0P95JgIdfhjCCXxzKmwpjWRaOjSBuqq4n4y0ts%2BGfyQ420QpWoZ7xTHkn%2Ftpgdc30hx5N2wl5yWtqDrnx2y7Ph2wQMRHxZZ9kFdFHuPmAY2RjQoMqcQhG5l2nLSNc%2FK5ofWI2vS2EwYgdEKiLO2tUOikxgUiYsYfebB86HO45K1N1Bw2vIP6J8%2BAgi04ScdbeJtJC5wtwFWWJe1Ap4jwEIHXlGvKjPOd84nsusdnDBDCHEh%2F8Yh0uS1lWFMWFoMjzYGcCfcEI%2BuBLB2Va4%2F%2BuL84CHkmiT%2BgHZlAYP7aIFxPoBmzTnO3wdNmf%2BVHgjpmbAV0OEtNz6V9QF%2B7a4opc6kCk7yotX8D%2FTJCD4%2F2eELlqQL8WFZhQCGqlgKIURPDqQ145FM6SNmjWNDOUGOzuZi5mswKXXIE5a4emEhi3wFs8pnG%2F11NmWiXuQNP0IvYCErlxCCZB9nwRe5DBw%2BU50b%2Fg4R8r%2BrvDi2TZVE0zwkunE4WzfL01wkZG%2FNP%2FReu4lHoUFagT6qCLXeAztL%2BFHnktx1yAa7vWi58SHjgXoeE7sjuQp49E99gX1KSB0%2FgZ7ib3wn3zQpNv1GnTnNy3%2BRSrbZ6SgWDdEzQNBXSb4zmiTig7yEwhefkwwY6pgE%2BE187OB0QK4TYq3kooLApHpgiw%2BVgF2TwfJ5nKXqMTYv0pyyuaJBMzvCkzOhwIh8feEGV3aD%2FZVAU5M9Pj5BG8KjQ2q%2FN38N0ArIvP1a8Mc8sqmWUKSe6PyKd22Gr8xN0hfoveNV4w%2Fsio1nvhghu5oKkomMQEpGvgPhKKZwUjCl2OhkcvX%2B%2BsqBMSsfTCmvKrUj%2FicprFNyeIHeCDSt2jtwDNhOj&X-Amz-Signature=17c9010f1c5dcde02d1723a8ca061790def7469abeb3472734f8c2c7e40186e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL6VTLJ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICRfE9UoNlxBPwi7MV6PN1ZjhKs%2Fxe2yLTqMRa0D2qCAAiA6ZSXpDaCVy2YlhbgvWoKMkVb4K7KCNJarfA8SDTz3sCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2r8%2BGj%2BbDLNjbv2zKtwDgneEzNmY0P95JgIdfhjCCXxzKmwpjWRaOjSBuqq4n4y0ts%2BGfyQ420QpWoZ7xTHkn%2Ftpgdc30hx5N2wl5yWtqDrnx2y7Ph2wQMRHxZZ9kFdFHuPmAY2RjQoMqcQhG5l2nLSNc%2FK5ofWI2vS2EwYgdEKiLO2tUOikxgUiYsYfebB86HO45K1N1Bw2vIP6J8%2BAgi04ScdbeJtJC5wtwFWWJe1Ap4jwEIHXlGvKjPOd84nsusdnDBDCHEh%2F8Yh0uS1lWFMWFoMjzYGcCfcEI%2BuBLB2Va4%2F%2BuL84CHkmiT%2BgHZlAYP7aIFxPoBmzTnO3wdNmf%2BVHgjpmbAV0OEtNz6V9QF%2B7a4opc6kCk7yotX8D%2FTJCD4%2F2eELlqQL8WFZhQCGqlgKIURPDqQ145FM6SNmjWNDOUGOzuZi5mswKXXIE5a4emEhi3wFs8pnG%2F11NmWiXuQNP0IvYCErlxCCZB9nwRe5DBw%2BU50b%2Fg4R8r%2BrvDi2TZVE0zwkunE4WzfL01wkZG%2FNP%2FReu4lHoUFagT6qCLXeAztL%2BFHnktx1yAa7vWi58SHjgXoeE7sjuQp49E99gX1KSB0%2FgZ7ib3wn3zQpNv1GnTnNy3%2BRSrbZ6SgWDdEzQNBXSb4zmiTig7yEwhefkwwY6pgE%2BE187OB0QK4TYq3kooLApHpgiw%2BVgF2TwfJ5nKXqMTYv0pyyuaJBMzvCkzOhwIh8feEGV3aD%2FZVAU5M9Pj5BG8KjQ2q%2FN38N0ArIvP1a8Mc8sqmWUKSe6PyKd22Gr8xN0hfoveNV4w%2Fsio1nvhghu5oKkomMQEpGvgPhKKZwUjCl2OhkcvX%2B%2BsqBMSsfTCmvKrUj%2FicprFNyeIHeCDSt2jtwDNhOj&X-Amz-Signature=f8e3028e12fe7574b0a9bb8828326dfb88c9310333a1c57affbacf88df3306ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL6VTLJ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICRfE9UoNlxBPwi7MV6PN1ZjhKs%2Fxe2yLTqMRa0D2qCAAiA6ZSXpDaCVy2YlhbgvWoKMkVb4K7KCNJarfA8SDTz3sCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2r8%2BGj%2BbDLNjbv2zKtwDgneEzNmY0P95JgIdfhjCCXxzKmwpjWRaOjSBuqq4n4y0ts%2BGfyQ420QpWoZ7xTHkn%2Ftpgdc30hx5N2wl5yWtqDrnx2y7Ph2wQMRHxZZ9kFdFHuPmAY2RjQoMqcQhG5l2nLSNc%2FK5ofWI2vS2EwYgdEKiLO2tUOikxgUiYsYfebB86HO45K1N1Bw2vIP6J8%2BAgi04ScdbeJtJC5wtwFWWJe1Ap4jwEIHXlGvKjPOd84nsusdnDBDCHEh%2F8Yh0uS1lWFMWFoMjzYGcCfcEI%2BuBLB2Va4%2F%2BuL84CHkmiT%2BgHZlAYP7aIFxPoBmzTnO3wdNmf%2BVHgjpmbAV0OEtNz6V9QF%2B7a4opc6kCk7yotX8D%2FTJCD4%2F2eELlqQL8WFZhQCGqlgKIURPDqQ145FM6SNmjWNDOUGOzuZi5mswKXXIE5a4emEhi3wFs8pnG%2F11NmWiXuQNP0IvYCErlxCCZB9nwRe5DBw%2BU50b%2Fg4R8r%2BrvDi2TZVE0zwkunE4WzfL01wkZG%2FNP%2FReu4lHoUFagT6qCLXeAztL%2BFHnktx1yAa7vWi58SHjgXoeE7sjuQp49E99gX1KSB0%2FgZ7ib3wn3zQpNv1GnTnNy3%2BRSrbZ6SgWDdEzQNBXSb4zmiTig7yEwhefkwwY6pgE%2BE187OB0QK4TYq3kooLApHpgiw%2BVgF2TwfJ5nKXqMTYv0pyyuaJBMzvCkzOhwIh8feEGV3aD%2FZVAU5M9Pj5BG8KjQ2q%2FN38N0ArIvP1a8Mc8sqmWUKSe6PyKd22Gr8xN0hfoveNV4w%2Fsio1nvhghu5oKkomMQEpGvgPhKKZwUjCl2OhkcvX%2B%2BsqBMSsfTCmvKrUj%2FicprFNyeIHeCDSt2jtwDNhOj&X-Amz-Signature=a917fbdfc7777b743d52a39c5a14b4b56ddb79e95cc104074e6038b01333f655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
