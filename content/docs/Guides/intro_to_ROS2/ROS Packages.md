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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKHEFNO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLKMnNGu%2BoBAQVcZzTq9JoTbg2o1Ur17rY9u%2BQA%2BH%2FgIhALKzQE6ZrEUL4kcpzvx6KWJj1RjSUN%2FrqXGpvt5r%2FztdKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6amCnuYXiRvJgmXsq3AOr%2FzKUVbrqwR%2BArHVjxkbVlf%2FPJMLOHnGVd5dzf%2Bv2ZB%2BM8xo5KxXAu9HQ43Swo1nrIzLFH%2B3PNqe2aevTFljUhMWfj4m%2FK0gSOPaPYHcZFF9%2FSH%2Bgr%2B5iJ%2Fay7%2FXwsIoLYdz6fb7ZUbQjtj9llkvbupXLQxYjctdbzL4P4q4baPp2X5urCeZE1a6ONx8jp1vss%2F5VbRI6THqR13%2F8bnvk2ICzMAl8drFgaz6a2NEMG1NAAgfio4DBTLUf6xAkznxoAXuH61vHh%2BHwfvuIwIOxzycdmgHOPGsbLz%2FXH2y4X1ZN85m6lBCZ7ypsDvbmfCWgKhipnPOH%2F4VkOUCGE92sVZ4ayUh27f1YZSzEwqo4O1wmBWq57eBjOcszKXtXbXoYwBfhUvotCEMXOSLjDXuy8bZ5JYlt12%2Fp1%2FtUM6udwRBTbQVVYES0kv2tK7zIn3v80sAdCS0xw%2FU8iMBdd1n8BqO9YyAnrQuyJS8NputGv9ZH8gvlgdXFZVGzJjHtT%2BFpNQRn9yxPdP96Kkz4cunOTJ0upZqwsPc2xnHV244XGYryud%2FfHtLPENb091l3IkAjGKlNzsZBvDBbxngT20IpPwq1UGUYR%2FS5I%2Bl%2FlESKkV3T5ismSSJ5POaMjTDSot7CBjqkAegty%2BXFTUqWPOXpgFJS%2BgZkIOHSL8AzMYx3eU%2FNjyPtyIzPgBBONEDwO081G%2FP%2Fz%2FLHVVDPQnrVAjNssL8yGrbvBz4n%2BDne2c0KW0hjfA%2BU1JMmljFbYloTtWtcdSHtlwIKphOoM9iJSLuxRlq%2Fn3rPOHu8s%2F7GIf626nc86enfREmQfeiFiu0zoqP9GhWhSEONd1%2FTCYN6Tp4RJz%2FMX7EWEe3y&X-Amz-Signature=9bfd941e9a4ad22750462916091f079b8d485c02bb6477b5e8626ede544132e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKHEFNO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLKMnNGu%2BoBAQVcZzTq9JoTbg2o1Ur17rY9u%2BQA%2BH%2FgIhALKzQE6ZrEUL4kcpzvx6KWJj1RjSUN%2FrqXGpvt5r%2FztdKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6amCnuYXiRvJgmXsq3AOr%2FzKUVbrqwR%2BArHVjxkbVlf%2FPJMLOHnGVd5dzf%2Bv2ZB%2BM8xo5KxXAu9HQ43Swo1nrIzLFH%2B3PNqe2aevTFljUhMWfj4m%2FK0gSOPaPYHcZFF9%2FSH%2Bgr%2B5iJ%2Fay7%2FXwsIoLYdz6fb7ZUbQjtj9llkvbupXLQxYjctdbzL4P4q4baPp2X5urCeZE1a6ONx8jp1vss%2F5VbRI6THqR13%2F8bnvk2ICzMAl8drFgaz6a2NEMG1NAAgfio4DBTLUf6xAkznxoAXuH61vHh%2BHwfvuIwIOxzycdmgHOPGsbLz%2FXH2y4X1ZN85m6lBCZ7ypsDvbmfCWgKhipnPOH%2F4VkOUCGE92sVZ4ayUh27f1YZSzEwqo4O1wmBWq57eBjOcszKXtXbXoYwBfhUvotCEMXOSLjDXuy8bZ5JYlt12%2Fp1%2FtUM6udwRBTbQVVYES0kv2tK7zIn3v80sAdCS0xw%2FU8iMBdd1n8BqO9YyAnrQuyJS8NputGv9ZH8gvlgdXFZVGzJjHtT%2BFpNQRn9yxPdP96Kkz4cunOTJ0upZqwsPc2xnHV244XGYryud%2FfHtLPENb091l3IkAjGKlNzsZBvDBbxngT20IpPwq1UGUYR%2FS5I%2Bl%2FlESKkV3T5ismSSJ5POaMjTDSot7CBjqkAegty%2BXFTUqWPOXpgFJS%2BgZkIOHSL8AzMYx3eU%2FNjyPtyIzPgBBONEDwO081G%2FP%2Fz%2FLHVVDPQnrVAjNssL8yGrbvBz4n%2BDne2c0KW0hjfA%2BU1JMmljFbYloTtWtcdSHtlwIKphOoM9iJSLuxRlq%2Fn3rPOHu8s%2F7GIf626nc86enfREmQfeiFiu0zoqP9GhWhSEONd1%2FTCYN6Tp4RJz%2FMX7EWEe3y&X-Amz-Signature=f029d8644c6a766304b0bcafa26f5a8e007b880a97829759f1cbb0df3ed87165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKHEFNO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLKMnNGu%2BoBAQVcZzTq9JoTbg2o1Ur17rY9u%2BQA%2BH%2FgIhALKzQE6ZrEUL4kcpzvx6KWJj1RjSUN%2FrqXGpvt5r%2FztdKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6amCnuYXiRvJgmXsq3AOr%2FzKUVbrqwR%2BArHVjxkbVlf%2FPJMLOHnGVd5dzf%2Bv2ZB%2BM8xo5KxXAu9HQ43Swo1nrIzLFH%2B3PNqe2aevTFljUhMWfj4m%2FK0gSOPaPYHcZFF9%2FSH%2Bgr%2B5iJ%2Fay7%2FXwsIoLYdz6fb7ZUbQjtj9llkvbupXLQxYjctdbzL4P4q4baPp2X5urCeZE1a6ONx8jp1vss%2F5VbRI6THqR13%2F8bnvk2ICzMAl8drFgaz6a2NEMG1NAAgfio4DBTLUf6xAkznxoAXuH61vHh%2BHwfvuIwIOxzycdmgHOPGsbLz%2FXH2y4X1ZN85m6lBCZ7ypsDvbmfCWgKhipnPOH%2F4VkOUCGE92sVZ4ayUh27f1YZSzEwqo4O1wmBWq57eBjOcszKXtXbXoYwBfhUvotCEMXOSLjDXuy8bZ5JYlt12%2Fp1%2FtUM6udwRBTbQVVYES0kv2tK7zIn3v80sAdCS0xw%2FU8iMBdd1n8BqO9YyAnrQuyJS8NputGv9ZH8gvlgdXFZVGzJjHtT%2BFpNQRn9yxPdP96Kkz4cunOTJ0upZqwsPc2xnHV244XGYryud%2FfHtLPENb091l3IkAjGKlNzsZBvDBbxngT20IpPwq1UGUYR%2FS5I%2Bl%2FlESKkV3T5ismSSJ5POaMjTDSot7CBjqkAegty%2BXFTUqWPOXpgFJS%2BgZkIOHSL8AzMYx3eU%2FNjyPtyIzPgBBONEDwO081G%2FP%2Fz%2FLHVVDPQnrVAjNssL8yGrbvBz4n%2BDne2c0KW0hjfA%2BU1JMmljFbYloTtWtcdSHtlwIKphOoM9iJSLuxRlq%2Fn3rPOHu8s%2F7GIf626nc86enfREmQfeiFiu0zoqP9GhWhSEONd1%2FTCYN6Tp4RJz%2FMX7EWEe3y&X-Amz-Signature=724b62f082f9d1819ccfe50ddff889221d0382e8bdcac273dfa571890fc9704e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKHEFNO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLKMnNGu%2BoBAQVcZzTq9JoTbg2o1Ur17rY9u%2BQA%2BH%2FgIhALKzQE6ZrEUL4kcpzvx6KWJj1RjSUN%2FrqXGpvt5r%2FztdKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6amCnuYXiRvJgmXsq3AOr%2FzKUVbrqwR%2BArHVjxkbVlf%2FPJMLOHnGVd5dzf%2Bv2ZB%2BM8xo5KxXAu9HQ43Swo1nrIzLFH%2B3PNqe2aevTFljUhMWfj4m%2FK0gSOPaPYHcZFF9%2FSH%2Bgr%2B5iJ%2Fay7%2FXwsIoLYdz6fb7ZUbQjtj9llkvbupXLQxYjctdbzL4P4q4baPp2X5urCeZE1a6ONx8jp1vss%2F5VbRI6THqR13%2F8bnvk2ICzMAl8drFgaz6a2NEMG1NAAgfio4DBTLUf6xAkznxoAXuH61vHh%2BHwfvuIwIOxzycdmgHOPGsbLz%2FXH2y4X1ZN85m6lBCZ7ypsDvbmfCWgKhipnPOH%2F4VkOUCGE92sVZ4ayUh27f1YZSzEwqo4O1wmBWq57eBjOcszKXtXbXoYwBfhUvotCEMXOSLjDXuy8bZ5JYlt12%2Fp1%2FtUM6udwRBTbQVVYES0kv2tK7zIn3v80sAdCS0xw%2FU8iMBdd1n8BqO9YyAnrQuyJS8NputGv9ZH8gvlgdXFZVGzJjHtT%2BFpNQRn9yxPdP96Kkz4cunOTJ0upZqwsPc2xnHV244XGYryud%2FfHtLPENb091l3IkAjGKlNzsZBvDBbxngT20IpPwq1UGUYR%2FS5I%2Bl%2FlESKkV3T5ismSSJ5POaMjTDSot7CBjqkAegty%2BXFTUqWPOXpgFJS%2BgZkIOHSL8AzMYx3eU%2FNjyPtyIzPgBBONEDwO081G%2FP%2Fz%2FLHVVDPQnrVAjNssL8yGrbvBz4n%2BDne2c0KW0hjfA%2BU1JMmljFbYloTtWtcdSHtlwIKphOoM9iJSLuxRlq%2Fn3rPOHu8s%2F7GIf626nc86enfREmQfeiFiu0zoqP9GhWhSEONd1%2FTCYN6Tp4RJz%2FMX7EWEe3y&X-Amz-Signature=fbfcd9f2aa81c659833acea3bc4993bb2d077d4deec2abd860f0707babe31ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKHEFNO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLKMnNGu%2BoBAQVcZzTq9JoTbg2o1Ur17rY9u%2BQA%2BH%2FgIhALKzQE6ZrEUL4kcpzvx6KWJj1RjSUN%2FrqXGpvt5r%2FztdKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6amCnuYXiRvJgmXsq3AOr%2FzKUVbrqwR%2BArHVjxkbVlf%2FPJMLOHnGVd5dzf%2Bv2ZB%2BM8xo5KxXAu9HQ43Swo1nrIzLFH%2B3PNqe2aevTFljUhMWfj4m%2FK0gSOPaPYHcZFF9%2FSH%2Bgr%2B5iJ%2Fay7%2FXwsIoLYdz6fb7ZUbQjtj9llkvbupXLQxYjctdbzL4P4q4baPp2X5urCeZE1a6ONx8jp1vss%2F5VbRI6THqR13%2F8bnvk2ICzMAl8drFgaz6a2NEMG1NAAgfio4DBTLUf6xAkznxoAXuH61vHh%2BHwfvuIwIOxzycdmgHOPGsbLz%2FXH2y4X1ZN85m6lBCZ7ypsDvbmfCWgKhipnPOH%2F4VkOUCGE92sVZ4ayUh27f1YZSzEwqo4O1wmBWq57eBjOcszKXtXbXoYwBfhUvotCEMXOSLjDXuy8bZ5JYlt12%2Fp1%2FtUM6udwRBTbQVVYES0kv2tK7zIn3v80sAdCS0xw%2FU8iMBdd1n8BqO9YyAnrQuyJS8NputGv9ZH8gvlgdXFZVGzJjHtT%2BFpNQRn9yxPdP96Kkz4cunOTJ0upZqwsPc2xnHV244XGYryud%2FfHtLPENb091l3IkAjGKlNzsZBvDBbxngT20IpPwq1UGUYR%2FS5I%2Bl%2FlESKkV3T5ismSSJ5POaMjTDSot7CBjqkAegty%2BXFTUqWPOXpgFJS%2BgZkIOHSL8AzMYx3eU%2FNjyPtyIzPgBBONEDwO081G%2FP%2Fz%2FLHVVDPQnrVAjNssL8yGrbvBz4n%2BDne2c0KW0hjfA%2BU1JMmljFbYloTtWtcdSHtlwIKphOoM9iJSLuxRlq%2Fn3rPOHu8s%2F7GIf626nc86enfREmQfeiFiu0zoqP9GhWhSEONd1%2FTCYN6Tp4RJz%2FMX7EWEe3y&X-Amz-Signature=406f57ef052f1a807f05e9cedd7f3802d57795ee72a33a30aadfeb8eb0d9e2e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKHEFNO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLKMnNGu%2BoBAQVcZzTq9JoTbg2o1Ur17rY9u%2BQA%2BH%2FgIhALKzQE6ZrEUL4kcpzvx6KWJj1RjSUN%2FrqXGpvt5r%2FztdKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6amCnuYXiRvJgmXsq3AOr%2FzKUVbrqwR%2BArHVjxkbVlf%2FPJMLOHnGVd5dzf%2Bv2ZB%2BM8xo5KxXAu9HQ43Swo1nrIzLFH%2B3PNqe2aevTFljUhMWfj4m%2FK0gSOPaPYHcZFF9%2FSH%2Bgr%2B5iJ%2Fay7%2FXwsIoLYdz6fb7ZUbQjtj9llkvbupXLQxYjctdbzL4P4q4baPp2X5urCeZE1a6ONx8jp1vss%2F5VbRI6THqR13%2F8bnvk2ICzMAl8drFgaz6a2NEMG1NAAgfio4DBTLUf6xAkznxoAXuH61vHh%2BHwfvuIwIOxzycdmgHOPGsbLz%2FXH2y4X1ZN85m6lBCZ7ypsDvbmfCWgKhipnPOH%2F4VkOUCGE92sVZ4ayUh27f1YZSzEwqo4O1wmBWq57eBjOcszKXtXbXoYwBfhUvotCEMXOSLjDXuy8bZ5JYlt12%2Fp1%2FtUM6udwRBTbQVVYES0kv2tK7zIn3v80sAdCS0xw%2FU8iMBdd1n8BqO9YyAnrQuyJS8NputGv9ZH8gvlgdXFZVGzJjHtT%2BFpNQRn9yxPdP96Kkz4cunOTJ0upZqwsPc2xnHV244XGYryud%2FfHtLPENb091l3IkAjGKlNzsZBvDBbxngT20IpPwq1UGUYR%2FS5I%2Bl%2FlESKkV3T5ismSSJ5POaMjTDSot7CBjqkAegty%2BXFTUqWPOXpgFJS%2BgZkIOHSL8AzMYx3eU%2FNjyPtyIzPgBBONEDwO081G%2FP%2Fz%2FLHVVDPQnrVAjNssL8yGrbvBz4n%2BDne2c0KW0hjfA%2BU1JMmljFbYloTtWtcdSHtlwIKphOoM9iJSLuxRlq%2Fn3rPOHu8s%2F7GIf626nc86enfREmQfeiFiu0zoqP9GhWhSEONd1%2FTCYN6Tp4RJz%2FMX7EWEe3y&X-Amz-Signature=9117a3b058ffe50197472323233dd66e9724138160fa7049f46ff1bb87d81e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKHEFNO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLKMnNGu%2BoBAQVcZzTq9JoTbg2o1Ur17rY9u%2BQA%2BH%2FgIhALKzQE6ZrEUL4kcpzvx6KWJj1RjSUN%2FrqXGpvt5r%2FztdKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6amCnuYXiRvJgmXsq3AOr%2FzKUVbrqwR%2BArHVjxkbVlf%2FPJMLOHnGVd5dzf%2Bv2ZB%2BM8xo5KxXAu9HQ43Swo1nrIzLFH%2B3PNqe2aevTFljUhMWfj4m%2FK0gSOPaPYHcZFF9%2FSH%2Bgr%2B5iJ%2Fay7%2FXwsIoLYdz6fb7ZUbQjtj9llkvbupXLQxYjctdbzL4P4q4baPp2X5urCeZE1a6ONx8jp1vss%2F5VbRI6THqR13%2F8bnvk2ICzMAl8drFgaz6a2NEMG1NAAgfio4DBTLUf6xAkznxoAXuH61vHh%2BHwfvuIwIOxzycdmgHOPGsbLz%2FXH2y4X1ZN85m6lBCZ7ypsDvbmfCWgKhipnPOH%2F4VkOUCGE92sVZ4ayUh27f1YZSzEwqo4O1wmBWq57eBjOcszKXtXbXoYwBfhUvotCEMXOSLjDXuy8bZ5JYlt12%2Fp1%2FtUM6udwRBTbQVVYES0kv2tK7zIn3v80sAdCS0xw%2FU8iMBdd1n8BqO9YyAnrQuyJS8NputGv9ZH8gvlgdXFZVGzJjHtT%2BFpNQRn9yxPdP96Kkz4cunOTJ0upZqwsPc2xnHV244XGYryud%2FfHtLPENb091l3IkAjGKlNzsZBvDBbxngT20IpPwq1UGUYR%2FS5I%2Bl%2FlESKkV3T5ismSSJ5POaMjTDSot7CBjqkAegty%2BXFTUqWPOXpgFJS%2BgZkIOHSL8AzMYx3eU%2FNjyPtyIzPgBBONEDwO081G%2FP%2Fz%2FLHVVDPQnrVAjNssL8yGrbvBz4n%2BDne2c0KW0hjfA%2BU1JMmljFbYloTtWtcdSHtlwIKphOoM9iJSLuxRlq%2Fn3rPOHu8s%2F7GIf626nc86enfREmQfeiFiu0zoqP9GhWhSEONd1%2FTCYN6Tp4RJz%2FMX7EWEe3y&X-Amz-Signature=9ba1672fa986b5a5cf88ae3a0f606dadfa6fe6ec01f6e85157f237a638b82d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
