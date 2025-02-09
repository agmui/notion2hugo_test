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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFAI4FO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXzOYMlfd844jsMprs1VR1Ogmo90pP2Vo8UO3zObBBuAiEA3yFNuKdBLQtaqQfHwYnxqSZo9YhqR9oIpqtg6DQ76DwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfrbdaX0rrnkLIv7SrcAxJC9bTez8%2F18aWhyYzquZw6OusfZV6z6Mg84PUJc%2BdUYm5UoEvqruj0xolYG%2FF2yGoNnwBZZHm6gdAbQQhId9dNNhCeJ34bo43VttQk6hJlmDcAUQg8ZzUCY9QU6N32EftHwzg05iam2GseqNefX5gV2HAeeBQxXjKDoM4w0DvEG1kHtbA3pO9CTFB7hbDpS%2BCCdOoXOKqnVsqF7a%2BlTbr30k%2FmoQE%2Bq6ycA7ASsPB4cKhhsgMoLEgkGOX40H9Ygg33Ijn5RJ4iDzJnuPleXw2A3uvHxPpvIHMFUjvAsvtnUnuNkm0H1L1wrhnff%2Fhyc22HFsXWdD%2BGUB9fcbTJof7D0qRTA6v%2Fl00IG58bcvw9ZLxLiVWtAJP3280c5zoz5306GjSJO%2F3VzmSaGJGh%2FU%2FRG5pJvZVewVLHAhvDabqmeKYpLCUCVX92%2FT%2FS5ifz1uavH7ApRzu7bYHlFMNkSWmWCD%2Bgjj0mx3QU86Ag0zQl0ti%2B8kpPG7mv28xt1jycy2vjT0gRJ5XAJaUK3Qtwqop4pQS7DXbA3XjGe%2F2qutqACap7%2FLdsgSl2v%2FBR%2FBjetAkIe0cRorO%2B%2Fht8FSELvk%2F6VwmH45GRe6m8w7txVvvAJWHgklawrtXvbOdMMILkob0GOqUBRsp3aYGoVbUA%2BsmbuQXyJcwkJ4TqPsVwtYM9OO6qhMQDypjcUJ3Jy1yUkN1TOIcFauTLcSPE1mYxNliOM3cpqRa%2BbvTCp6L3%2FpK1VdeJT%2B767sxSFE0Zbah4cr4tgwRt23D2xmWIGlZ95s2lI1gnBW7SgDLL3fW3cMStoc1pyf0eA9GrI7g%2BOU4C9uwLRNTOIvuwfekf8WKYOhSmvp8rnJQc%2BroZ&X-Amz-Signature=e1599cee045a9fde2e9dd5ee5161aa801d79a4c3df08b62d03f33569f3c9c5fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFAI4FO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXzOYMlfd844jsMprs1VR1Ogmo90pP2Vo8UO3zObBBuAiEA3yFNuKdBLQtaqQfHwYnxqSZo9YhqR9oIpqtg6DQ76DwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfrbdaX0rrnkLIv7SrcAxJC9bTez8%2F18aWhyYzquZw6OusfZV6z6Mg84PUJc%2BdUYm5UoEvqruj0xolYG%2FF2yGoNnwBZZHm6gdAbQQhId9dNNhCeJ34bo43VttQk6hJlmDcAUQg8ZzUCY9QU6N32EftHwzg05iam2GseqNefX5gV2HAeeBQxXjKDoM4w0DvEG1kHtbA3pO9CTFB7hbDpS%2BCCdOoXOKqnVsqF7a%2BlTbr30k%2FmoQE%2Bq6ycA7ASsPB4cKhhsgMoLEgkGOX40H9Ygg33Ijn5RJ4iDzJnuPleXw2A3uvHxPpvIHMFUjvAsvtnUnuNkm0H1L1wrhnff%2Fhyc22HFsXWdD%2BGUB9fcbTJof7D0qRTA6v%2Fl00IG58bcvw9ZLxLiVWtAJP3280c5zoz5306GjSJO%2F3VzmSaGJGh%2FU%2FRG5pJvZVewVLHAhvDabqmeKYpLCUCVX92%2FT%2FS5ifz1uavH7ApRzu7bYHlFMNkSWmWCD%2Bgjj0mx3QU86Ag0zQl0ti%2B8kpPG7mv28xt1jycy2vjT0gRJ5XAJaUK3Qtwqop4pQS7DXbA3XjGe%2F2qutqACap7%2FLdsgSl2v%2FBR%2FBjetAkIe0cRorO%2B%2Fht8FSELvk%2F6VwmH45GRe6m8w7txVvvAJWHgklawrtXvbOdMMILkob0GOqUBRsp3aYGoVbUA%2BsmbuQXyJcwkJ4TqPsVwtYM9OO6qhMQDypjcUJ3Jy1yUkN1TOIcFauTLcSPE1mYxNliOM3cpqRa%2BbvTCp6L3%2FpK1VdeJT%2B767sxSFE0Zbah4cr4tgwRt23D2xmWIGlZ95s2lI1gnBW7SgDLL3fW3cMStoc1pyf0eA9GrI7g%2BOU4C9uwLRNTOIvuwfekf8WKYOhSmvp8rnJQc%2BroZ&X-Amz-Signature=35761e2de9e62c958518bf33ff7ffddeb53b41e069589d06671f51767e8f7255&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFAI4FO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXzOYMlfd844jsMprs1VR1Ogmo90pP2Vo8UO3zObBBuAiEA3yFNuKdBLQtaqQfHwYnxqSZo9YhqR9oIpqtg6DQ76DwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfrbdaX0rrnkLIv7SrcAxJC9bTez8%2F18aWhyYzquZw6OusfZV6z6Mg84PUJc%2BdUYm5UoEvqruj0xolYG%2FF2yGoNnwBZZHm6gdAbQQhId9dNNhCeJ34bo43VttQk6hJlmDcAUQg8ZzUCY9QU6N32EftHwzg05iam2GseqNefX5gV2HAeeBQxXjKDoM4w0DvEG1kHtbA3pO9CTFB7hbDpS%2BCCdOoXOKqnVsqF7a%2BlTbr30k%2FmoQE%2Bq6ycA7ASsPB4cKhhsgMoLEgkGOX40H9Ygg33Ijn5RJ4iDzJnuPleXw2A3uvHxPpvIHMFUjvAsvtnUnuNkm0H1L1wrhnff%2Fhyc22HFsXWdD%2BGUB9fcbTJof7D0qRTA6v%2Fl00IG58bcvw9ZLxLiVWtAJP3280c5zoz5306GjSJO%2F3VzmSaGJGh%2FU%2FRG5pJvZVewVLHAhvDabqmeKYpLCUCVX92%2FT%2FS5ifz1uavH7ApRzu7bYHlFMNkSWmWCD%2Bgjj0mx3QU86Ag0zQl0ti%2B8kpPG7mv28xt1jycy2vjT0gRJ5XAJaUK3Qtwqop4pQS7DXbA3XjGe%2F2qutqACap7%2FLdsgSl2v%2FBR%2FBjetAkIe0cRorO%2B%2Fht8FSELvk%2F6VwmH45GRe6m8w7txVvvAJWHgklawrtXvbOdMMILkob0GOqUBRsp3aYGoVbUA%2BsmbuQXyJcwkJ4TqPsVwtYM9OO6qhMQDypjcUJ3Jy1yUkN1TOIcFauTLcSPE1mYxNliOM3cpqRa%2BbvTCp6L3%2FpK1VdeJT%2B767sxSFE0Zbah4cr4tgwRt23D2xmWIGlZ95s2lI1gnBW7SgDLL3fW3cMStoc1pyf0eA9GrI7g%2BOU4C9uwLRNTOIvuwfekf8WKYOhSmvp8rnJQc%2BroZ&X-Amz-Signature=81c1535d43346333e7e0873ea1f8dbb5df71e34dad20464a7fb133bbd3d113e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFAI4FO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXzOYMlfd844jsMprs1VR1Ogmo90pP2Vo8UO3zObBBuAiEA3yFNuKdBLQtaqQfHwYnxqSZo9YhqR9oIpqtg6DQ76DwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfrbdaX0rrnkLIv7SrcAxJC9bTez8%2F18aWhyYzquZw6OusfZV6z6Mg84PUJc%2BdUYm5UoEvqruj0xolYG%2FF2yGoNnwBZZHm6gdAbQQhId9dNNhCeJ34bo43VttQk6hJlmDcAUQg8ZzUCY9QU6N32EftHwzg05iam2GseqNefX5gV2HAeeBQxXjKDoM4w0DvEG1kHtbA3pO9CTFB7hbDpS%2BCCdOoXOKqnVsqF7a%2BlTbr30k%2FmoQE%2Bq6ycA7ASsPB4cKhhsgMoLEgkGOX40H9Ygg33Ijn5RJ4iDzJnuPleXw2A3uvHxPpvIHMFUjvAsvtnUnuNkm0H1L1wrhnff%2Fhyc22HFsXWdD%2BGUB9fcbTJof7D0qRTA6v%2Fl00IG58bcvw9ZLxLiVWtAJP3280c5zoz5306GjSJO%2F3VzmSaGJGh%2FU%2FRG5pJvZVewVLHAhvDabqmeKYpLCUCVX92%2FT%2FS5ifz1uavH7ApRzu7bYHlFMNkSWmWCD%2Bgjj0mx3QU86Ag0zQl0ti%2B8kpPG7mv28xt1jycy2vjT0gRJ5XAJaUK3Qtwqop4pQS7DXbA3XjGe%2F2qutqACap7%2FLdsgSl2v%2FBR%2FBjetAkIe0cRorO%2B%2Fht8FSELvk%2F6VwmH45GRe6m8w7txVvvAJWHgklawrtXvbOdMMILkob0GOqUBRsp3aYGoVbUA%2BsmbuQXyJcwkJ4TqPsVwtYM9OO6qhMQDypjcUJ3Jy1yUkN1TOIcFauTLcSPE1mYxNliOM3cpqRa%2BbvTCp6L3%2FpK1VdeJT%2B767sxSFE0Zbah4cr4tgwRt23D2xmWIGlZ95s2lI1gnBW7SgDLL3fW3cMStoc1pyf0eA9GrI7g%2BOU4C9uwLRNTOIvuwfekf8WKYOhSmvp8rnJQc%2BroZ&X-Amz-Signature=eb88c61882459de9ff3d5d3c0158d7718e1871f6603f4b19a366c0ffc7c59801&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFAI4FO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXzOYMlfd844jsMprs1VR1Ogmo90pP2Vo8UO3zObBBuAiEA3yFNuKdBLQtaqQfHwYnxqSZo9YhqR9oIpqtg6DQ76DwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfrbdaX0rrnkLIv7SrcAxJC9bTez8%2F18aWhyYzquZw6OusfZV6z6Mg84PUJc%2BdUYm5UoEvqruj0xolYG%2FF2yGoNnwBZZHm6gdAbQQhId9dNNhCeJ34bo43VttQk6hJlmDcAUQg8ZzUCY9QU6N32EftHwzg05iam2GseqNefX5gV2HAeeBQxXjKDoM4w0DvEG1kHtbA3pO9CTFB7hbDpS%2BCCdOoXOKqnVsqF7a%2BlTbr30k%2FmoQE%2Bq6ycA7ASsPB4cKhhsgMoLEgkGOX40H9Ygg33Ijn5RJ4iDzJnuPleXw2A3uvHxPpvIHMFUjvAsvtnUnuNkm0H1L1wrhnff%2Fhyc22HFsXWdD%2BGUB9fcbTJof7D0qRTA6v%2Fl00IG58bcvw9ZLxLiVWtAJP3280c5zoz5306GjSJO%2F3VzmSaGJGh%2FU%2FRG5pJvZVewVLHAhvDabqmeKYpLCUCVX92%2FT%2FS5ifz1uavH7ApRzu7bYHlFMNkSWmWCD%2Bgjj0mx3QU86Ag0zQl0ti%2B8kpPG7mv28xt1jycy2vjT0gRJ5XAJaUK3Qtwqop4pQS7DXbA3XjGe%2F2qutqACap7%2FLdsgSl2v%2FBR%2FBjetAkIe0cRorO%2B%2Fht8FSELvk%2F6VwmH45GRe6m8w7txVvvAJWHgklawrtXvbOdMMILkob0GOqUBRsp3aYGoVbUA%2BsmbuQXyJcwkJ4TqPsVwtYM9OO6qhMQDypjcUJ3Jy1yUkN1TOIcFauTLcSPE1mYxNliOM3cpqRa%2BbvTCp6L3%2FpK1VdeJT%2B767sxSFE0Zbah4cr4tgwRt23D2xmWIGlZ95s2lI1gnBW7SgDLL3fW3cMStoc1pyf0eA9GrI7g%2BOU4C9uwLRNTOIvuwfekf8WKYOhSmvp8rnJQc%2BroZ&X-Amz-Signature=b76938acbffb325900adc5b8151cc39104ab75568c8fa1ca31d1d1e46d883de8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFAI4FO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXzOYMlfd844jsMprs1VR1Ogmo90pP2Vo8UO3zObBBuAiEA3yFNuKdBLQtaqQfHwYnxqSZo9YhqR9oIpqtg6DQ76DwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfrbdaX0rrnkLIv7SrcAxJC9bTez8%2F18aWhyYzquZw6OusfZV6z6Mg84PUJc%2BdUYm5UoEvqruj0xolYG%2FF2yGoNnwBZZHm6gdAbQQhId9dNNhCeJ34bo43VttQk6hJlmDcAUQg8ZzUCY9QU6N32EftHwzg05iam2GseqNefX5gV2HAeeBQxXjKDoM4w0DvEG1kHtbA3pO9CTFB7hbDpS%2BCCdOoXOKqnVsqF7a%2BlTbr30k%2FmoQE%2Bq6ycA7ASsPB4cKhhsgMoLEgkGOX40H9Ygg33Ijn5RJ4iDzJnuPleXw2A3uvHxPpvIHMFUjvAsvtnUnuNkm0H1L1wrhnff%2Fhyc22HFsXWdD%2BGUB9fcbTJof7D0qRTA6v%2Fl00IG58bcvw9ZLxLiVWtAJP3280c5zoz5306GjSJO%2F3VzmSaGJGh%2FU%2FRG5pJvZVewVLHAhvDabqmeKYpLCUCVX92%2FT%2FS5ifz1uavH7ApRzu7bYHlFMNkSWmWCD%2Bgjj0mx3QU86Ag0zQl0ti%2B8kpPG7mv28xt1jycy2vjT0gRJ5XAJaUK3Qtwqop4pQS7DXbA3XjGe%2F2qutqACap7%2FLdsgSl2v%2FBR%2FBjetAkIe0cRorO%2B%2Fht8FSELvk%2F6VwmH45GRe6m8w7txVvvAJWHgklawrtXvbOdMMILkob0GOqUBRsp3aYGoVbUA%2BsmbuQXyJcwkJ4TqPsVwtYM9OO6qhMQDypjcUJ3Jy1yUkN1TOIcFauTLcSPE1mYxNliOM3cpqRa%2BbvTCp6L3%2FpK1VdeJT%2B767sxSFE0Zbah4cr4tgwRt23D2xmWIGlZ95s2lI1gnBW7SgDLL3fW3cMStoc1pyf0eA9GrI7g%2BOU4C9uwLRNTOIvuwfekf8WKYOhSmvp8rnJQc%2BroZ&X-Amz-Signature=1f635f032ce5f85f303ab5045717337f71ea8ca5a8eadd971d2fb235b7d32835&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFAI4FO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXzOYMlfd844jsMprs1VR1Ogmo90pP2Vo8UO3zObBBuAiEA3yFNuKdBLQtaqQfHwYnxqSZo9YhqR9oIpqtg6DQ76DwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfrbdaX0rrnkLIv7SrcAxJC9bTez8%2F18aWhyYzquZw6OusfZV6z6Mg84PUJc%2BdUYm5UoEvqruj0xolYG%2FF2yGoNnwBZZHm6gdAbQQhId9dNNhCeJ34bo43VttQk6hJlmDcAUQg8ZzUCY9QU6N32EftHwzg05iam2GseqNefX5gV2HAeeBQxXjKDoM4w0DvEG1kHtbA3pO9CTFB7hbDpS%2BCCdOoXOKqnVsqF7a%2BlTbr30k%2FmoQE%2Bq6ycA7ASsPB4cKhhsgMoLEgkGOX40H9Ygg33Ijn5RJ4iDzJnuPleXw2A3uvHxPpvIHMFUjvAsvtnUnuNkm0H1L1wrhnff%2Fhyc22HFsXWdD%2BGUB9fcbTJof7D0qRTA6v%2Fl00IG58bcvw9ZLxLiVWtAJP3280c5zoz5306GjSJO%2F3VzmSaGJGh%2FU%2FRG5pJvZVewVLHAhvDabqmeKYpLCUCVX92%2FT%2FS5ifz1uavH7ApRzu7bYHlFMNkSWmWCD%2Bgjj0mx3QU86Ag0zQl0ti%2B8kpPG7mv28xt1jycy2vjT0gRJ5XAJaUK3Qtwqop4pQS7DXbA3XjGe%2F2qutqACap7%2FLdsgSl2v%2FBR%2FBjetAkIe0cRorO%2B%2Fht8FSELvk%2F6VwmH45GRe6m8w7txVvvAJWHgklawrtXvbOdMMILkob0GOqUBRsp3aYGoVbUA%2BsmbuQXyJcwkJ4TqPsVwtYM9OO6qhMQDypjcUJ3Jy1yUkN1TOIcFauTLcSPE1mYxNliOM3cpqRa%2BbvTCp6L3%2FpK1VdeJT%2B767sxSFE0Zbah4cr4tgwRt23D2xmWIGlZ95s2lI1gnBW7SgDLL3fW3cMStoc1pyf0eA9GrI7g%2BOU4C9uwLRNTOIvuwfekf8WKYOhSmvp8rnJQc%2BroZ&X-Amz-Signature=a0cc2d501298d5b30737212e706e0464f06bc5d9dc8255e2a30c34dfd73c95d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
