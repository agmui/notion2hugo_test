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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQNAT7P%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCf%2FmHwwWzIyRGoSBt%2BxKjQ971Ni7PMsEPMCck6Ib9PLQIgXdkj8I5%2FctkOx57R1JpMHWczfisoYA5iuCKBOFT0s%2FsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsyyny73zYPtuQvKyrcA3jTx8a2HmVYRIODHt8KZRJ%2F0B5glJVkLyX7ssH6ZMjqK5VtBHYz154LJnYHZddRqWKiuMZ3zT3t1aQ6xxlHCFNC96RnjtxBZiRlGJxZ9EKiZOVbBty%2F%2BlLjhkl9sVRyKFNEeDeFe3bxUbvpQfiINgFY0jYBAf1rJZCoxo4NulUeer%2Bfk63hCwAbl1RW2gDAljbSh3%2BMwKK20zZf9hqI%2FFPWPdzSOy67xeR%2FwL4fe9Xhy9znrKpZ3Nl2LCj%2ByAcH%2FpdpHanynZRaIz7k2urILIYrrExLZlkF2X8nYv3OEPzpc7QinaJRxBPG0XYMIisgl4wS5dzAnENe0h7u%2FihK4P7mIBl38mR8NaABlwUfejvWx%2FNNMgkQMl3zByKp6h01XBmkTgP1H6usAgWmineYsvOdoc3ax1i9XhfhCH0iM9BkjZxNd9UHL1cOjuIGBlle5gkPplscgUlhpp34gkyC716fn1T2KnO6TCeRMehQZC7AltZIZliRzh%2BDWGzO7o%2FMElxoWMxItj1Anm5AJbAWAd9kxRXPGW8T7hvYdGwxy3bXATNR1zMFRraZ1rZ4qFg6eYD39I0o9m1ckSwqEC60ax2ZhRVJK3LM5kUBxlZtsknCC83RALQzW7h72p7vMN%2FQj8AGOqUBJyvH5h%2FKPaMNe0reEhGYUwCKW8bmyx3G6VCp9kM5GW3DfEBsr7bY2ffOJoELk6BTmw2SHZYRsgdk7kGbADLixG7V0OH9r8cCyRY2VW6SZkrhsP58ASLAjnLBZ4iLCDvrvc%2FOuMreTvf1Iva0XdsKpyKKPA%2Bby5L%2BdvpFT09CCrbJZpXlHtZ7IR3dgG8Ar0GVQ1DZGrDu2sHxBL2V4l9yIUZdaEW6&X-Amz-Signature=e4e95fc89d98a78a3f53449e48cf3a5745bc7c6878959a88012a0d74ead469bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQNAT7P%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCf%2FmHwwWzIyRGoSBt%2BxKjQ971Ni7PMsEPMCck6Ib9PLQIgXdkj8I5%2FctkOx57R1JpMHWczfisoYA5iuCKBOFT0s%2FsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsyyny73zYPtuQvKyrcA3jTx8a2HmVYRIODHt8KZRJ%2F0B5glJVkLyX7ssH6ZMjqK5VtBHYz154LJnYHZddRqWKiuMZ3zT3t1aQ6xxlHCFNC96RnjtxBZiRlGJxZ9EKiZOVbBty%2F%2BlLjhkl9sVRyKFNEeDeFe3bxUbvpQfiINgFY0jYBAf1rJZCoxo4NulUeer%2Bfk63hCwAbl1RW2gDAljbSh3%2BMwKK20zZf9hqI%2FFPWPdzSOy67xeR%2FwL4fe9Xhy9znrKpZ3Nl2LCj%2ByAcH%2FpdpHanynZRaIz7k2urILIYrrExLZlkF2X8nYv3OEPzpc7QinaJRxBPG0XYMIisgl4wS5dzAnENe0h7u%2FihK4P7mIBl38mR8NaABlwUfejvWx%2FNNMgkQMl3zByKp6h01XBmkTgP1H6usAgWmineYsvOdoc3ax1i9XhfhCH0iM9BkjZxNd9UHL1cOjuIGBlle5gkPplscgUlhpp34gkyC716fn1T2KnO6TCeRMehQZC7AltZIZliRzh%2BDWGzO7o%2FMElxoWMxItj1Anm5AJbAWAd9kxRXPGW8T7hvYdGwxy3bXATNR1zMFRraZ1rZ4qFg6eYD39I0o9m1ckSwqEC60ax2ZhRVJK3LM5kUBxlZtsknCC83RALQzW7h72p7vMN%2FQj8AGOqUBJyvH5h%2FKPaMNe0reEhGYUwCKW8bmyx3G6VCp9kM5GW3DfEBsr7bY2ffOJoELk6BTmw2SHZYRsgdk7kGbADLixG7V0OH9r8cCyRY2VW6SZkrhsP58ASLAjnLBZ4iLCDvrvc%2FOuMreTvf1Iva0XdsKpyKKPA%2Bby5L%2BdvpFT09CCrbJZpXlHtZ7IR3dgG8Ar0GVQ1DZGrDu2sHxBL2V4l9yIUZdaEW6&X-Amz-Signature=518e05ee1f7aedacf1ea3a26f6f08c717b6bd7a61da662e8a28a1465eeaf2dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQNAT7P%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCf%2FmHwwWzIyRGoSBt%2BxKjQ971Ni7PMsEPMCck6Ib9PLQIgXdkj8I5%2FctkOx57R1JpMHWczfisoYA5iuCKBOFT0s%2FsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsyyny73zYPtuQvKyrcA3jTx8a2HmVYRIODHt8KZRJ%2F0B5glJVkLyX7ssH6ZMjqK5VtBHYz154LJnYHZddRqWKiuMZ3zT3t1aQ6xxlHCFNC96RnjtxBZiRlGJxZ9EKiZOVbBty%2F%2BlLjhkl9sVRyKFNEeDeFe3bxUbvpQfiINgFY0jYBAf1rJZCoxo4NulUeer%2Bfk63hCwAbl1RW2gDAljbSh3%2BMwKK20zZf9hqI%2FFPWPdzSOy67xeR%2FwL4fe9Xhy9znrKpZ3Nl2LCj%2ByAcH%2FpdpHanynZRaIz7k2urILIYrrExLZlkF2X8nYv3OEPzpc7QinaJRxBPG0XYMIisgl4wS5dzAnENe0h7u%2FihK4P7mIBl38mR8NaABlwUfejvWx%2FNNMgkQMl3zByKp6h01XBmkTgP1H6usAgWmineYsvOdoc3ax1i9XhfhCH0iM9BkjZxNd9UHL1cOjuIGBlle5gkPplscgUlhpp34gkyC716fn1T2KnO6TCeRMehQZC7AltZIZliRzh%2BDWGzO7o%2FMElxoWMxItj1Anm5AJbAWAd9kxRXPGW8T7hvYdGwxy3bXATNR1zMFRraZ1rZ4qFg6eYD39I0o9m1ckSwqEC60ax2ZhRVJK3LM5kUBxlZtsknCC83RALQzW7h72p7vMN%2FQj8AGOqUBJyvH5h%2FKPaMNe0reEhGYUwCKW8bmyx3G6VCp9kM5GW3DfEBsr7bY2ffOJoELk6BTmw2SHZYRsgdk7kGbADLixG7V0OH9r8cCyRY2VW6SZkrhsP58ASLAjnLBZ4iLCDvrvc%2FOuMreTvf1Iva0XdsKpyKKPA%2Bby5L%2BdvpFT09CCrbJZpXlHtZ7IR3dgG8Ar0GVQ1DZGrDu2sHxBL2V4l9yIUZdaEW6&X-Amz-Signature=9e767469a3f3284b9354fc3af014e54ed540da6def92e50bc7f77f95c1b9640e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQNAT7P%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCf%2FmHwwWzIyRGoSBt%2BxKjQ971Ni7PMsEPMCck6Ib9PLQIgXdkj8I5%2FctkOx57R1JpMHWczfisoYA5iuCKBOFT0s%2FsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsyyny73zYPtuQvKyrcA3jTx8a2HmVYRIODHt8KZRJ%2F0B5glJVkLyX7ssH6ZMjqK5VtBHYz154LJnYHZddRqWKiuMZ3zT3t1aQ6xxlHCFNC96RnjtxBZiRlGJxZ9EKiZOVbBty%2F%2BlLjhkl9sVRyKFNEeDeFe3bxUbvpQfiINgFY0jYBAf1rJZCoxo4NulUeer%2Bfk63hCwAbl1RW2gDAljbSh3%2BMwKK20zZf9hqI%2FFPWPdzSOy67xeR%2FwL4fe9Xhy9znrKpZ3Nl2LCj%2ByAcH%2FpdpHanynZRaIz7k2urILIYrrExLZlkF2X8nYv3OEPzpc7QinaJRxBPG0XYMIisgl4wS5dzAnENe0h7u%2FihK4P7mIBl38mR8NaABlwUfejvWx%2FNNMgkQMl3zByKp6h01XBmkTgP1H6usAgWmineYsvOdoc3ax1i9XhfhCH0iM9BkjZxNd9UHL1cOjuIGBlle5gkPplscgUlhpp34gkyC716fn1T2KnO6TCeRMehQZC7AltZIZliRzh%2BDWGzO7o%2FMElxoWMxItj1Anm5AJbAWAd9kxRXPGW8T7hvYdGwxy3bXATNR1zMFRraZ1rZ4qFg6eYD39I0o9m1ckSwqEC60ax2ZhRVJK3LM5kUBxlZtsknCC83RALQzW7h72p7vMN%2FQj8AGOqUBJyvH5h%2FKPaMNe0reEhGYUwCKW8bmyx3G6VCp9kM5GW3DfEBsr7bY2ffOJoELk6BTmw2SHZYRsgdk7kGbADLixG7V0OH9r8cCyRY2VW6SZkrhsP58ASLAjnLBZ4iLCDvrvc%2FOuMreTvf1Iva0XdsKpyKKPA%2Bby5L%2BdvpFT09CCrbJZpXlHtZ7IR3dgG8Ar0GVQ1DZGrDu2sHxBL2V4l9yIUZdaEW6&X-Amz-Signature=420e7f595141187781044325d5bd203156bc40755ba05e44c200e93d7409a42a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQNAT7P%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCf%2FmHwwWzIyRGoSBt%2BxKjQ971Ni7PMsEPMCck6Ib9PLQIgXdkj8I5%2FctkOx57R1JpMHWczfisoYA5iuCKBOFT0s%2FsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsyyny73zYPtuQvKyrcA3jTx8a2HmVYRIODHt8KZRJ%2F0B5glJVkLyX7ssH6ZMjqK5VtBHYz154LJnYHZddRqWKiuMZ3zT3t1aQ6xxlHCFNC96RnjtxBZiRlGJxZ9EKiZOVbBty%2F%2BlLjhkl9sVRyKFNEeDeFe3bxUbvpQfiINgFY0jYBAf1rJZCoxo4NulUeer%2Bfk63hCwAbl1RW2gDAljbSh3%2BMwKK20zZf9hqI%2FFPWPdzSOy67xeR%2FwL4fe9Xhy9znrKpZ3Nl2LCj%2ByAcH%2FpdpHanynZRaIz7k2urILIYrrExLZlkF2X8nYv3OEPzpc7QinaJRxBPG0XYMIisgl4wS5dzAnENe0h7u%2FihK4P7mIBl38mR8NaABlwUfejvWx%2FNNMgkQMl3zByKp6h01XBmkTgP1H6usAgWmineYsvOdoc3ax1i9XhfhCH0iM9BkjZxNd9UHL1cOjuIGBlle5gkPplscgUlhpp34gkyC716fn1T2KnO6TCeRMehQZC7AltZIZliRzh%2BDWGzO7o%2FMElxoWMxItj1Anm5AJbAWAd9kxRXPGW8T7hvYdGwxy3bXATNR1zMFRraZ1rZ4qFg6eYD39I0o9m1ckSwqEC60ax2ZhRVJK3LM5kUBxlZtsknCC83RALQzW7h72p7vMN%2FQj8AGOqUBJyvH5h%2FKPaMNe0reEhGYUwCKW8bmyx3G6VCp9kM5GW3DfEBsr7bY2ffOJoELk6BTmw2SHZYRsgdk7kGbADLixG7V0OH9r8cCyRY2VW6SZkrhsP58ASLAjnLBZ4iLCDvrvc%2FOuMreTvf1Iva0XdsKpyKKPA%2Bby5L%2BdvpFT09CCrbJZpXlHtZ7IR3dgG8Ar0GVQ1DZGrDu2sHxBL2V4l9yIUZdaEW6&X-Amz-Signature=b2cffb2bce0d41b49c14dbdba8a1403e938c8276f477baa9f02e86ac2c61defc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQNAT7P%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCf%2FmHwwWzIyRGoSBt%2BxKjQ971Ni7PMsEPMCck6Ib9PLQIgXdkj8I5%2FctkOx57R1JpMHWczfisoYA5iuCKBOFT0s%2FsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsyyny73zYPtuQvKyrcA3jTx8a2HmVYRIODHt8KZRJ%2F0B5glJVkLyX7ssH6ZMjqK5VtBHYz154LJnYHZddRqWKiuMZ3zT3t1aQ6xxlHCFNC96RnjtxBZiRlGJxZ9EKiZOVbBty%2F%2BlLjhkl9sVRyKFNEeDeFe3bxUbvpQfiINgFY0jYBAf1rJZCoxo4NulUeer%2Bfk63hCwAbl1RW2gDAljbSh3%2BMwKK20zZf9hqI%2FFPWPdzSOy67xeR%2FwL4fe9Xhy9znrKpZ3Nl2LCj%2ByAcH%2FpdpHanynZRaIz7k2urILIYrrExLZlkF2X8nYv3OEPzpc7QinaJRxBPG0XYMIisgl4wS5dzAnENe0h7u%2FihK4P7mIBl38mR8NaABlwUfejvWx%2FNNMgkQMl3zByKp6h01XBmkTgP1H6usAgWmineYsvOdoc3ax1i9XhfhCH0iM9BkjZxNd9UHL1cOjuIGBlle5gkPplscgUlhpp34gkyC716fn1T2KnO6TCeRMehQZC7AltZIZliRzh%2BDWGzO7o%2FMElxoWMxItj1Anm5AJbAWAd9kxRXPGW8T7hvYdGwxy3bXATNR1zMFRraZ1rZ4qFg6eYD39I0o9m1ckSwqEC60ax2ZhRVJK3LM5kUBxlZtsknCC83RALQzW7h72p7vMN%2FQj8AGOqUBJyvH5h%2FKPaMNe0reEhGYUwCKW8bmyx3G6VCp9kM5GW3DfEBsr7bY2ffOJoELk6BTmw2SHZYRsgdk7kGbADLixG7V0OH9r8cCyRY2VW6SZkrhsP58ASLAjnLBZ4iLCDvrvc%2FOuMreTvf1Iva0XdsKpyKKPA%2Bby5L%2BdvpFT09CCrbJZpXlHtZ7IR3dgG8Ar0GVQ1DZGrDu2sHxBL2V4l9yIUZdaEW6&X-Amz-Signature=1ef9e1e199a9690387fe5f483c0ff73bcd5fd9efe688fa7bdd7914749ddeadf0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQNAT7P%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCf%2FmHwwWzIyRGoSBt%2BxKjQ971Ni7PMsEPMCck6Ib9PLQIgXdkj8I5%2FctkOx57R1JpMHWczfisoYA5iuCKBOFT0s%2FsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsyyny73zYPtuQvKyrcA3jTx8a2HmVYRIODHt8KZRJ%2F0B5glJVkLyX7ssH6ZMjqK5VtBHYz154LJnYHZddRqWKiuMZ3zT3t1aQ6xxlHCFNC96RnjtxBZiRlGJxZ9EKiZOVbBty%2F%2BlLjhkl9sVRyKFNEeDeFe3bxUbvpQfiINgFY0jYBAf1rJZCoxo4NulUeer%2Bfk63hCwAbl1RW2gDAljbSh3%2BMwKK20zZf9hqI%2FFPWPdzSOy67xeR%2FwL4fe9Xhy9znrKpZ3Nl2LCj%2ByAcH%2FpdpHanynZRaIz7k2urILIYrrExLZlkF2X8nYv3OEPzpc7QinaJRxBPG0XYMIisgl4wS5dzAnENe0h7u%2FihK4P7mIBl38mR8NaABlwUfejvWx%2FNNMgkQMl3zByKp6h01XBmkTgP1H6usAgWmineYsvOdoc3ax1i9XhfhCH0iM9BkjZxNd9UHL1cOjuIGBlle5gkPplscgUlhpp34gkyC716fn1T2KnO6TCeRMehQZC7AltZIZliRzh%2BDWGzO7o%2FMElxoWMxItj1Anm5AJbAWAd9kxRXPGW8T7hvYdGwxy3bXATNR1zMFRraZ1rZ4qFg6eYD39I0o9m1ckSwqEC60ax2ZhRVJK3LM5kUBxlZtsknCC83RALQzW7h72p7vMN%2FQj8AGOqUBJyvH5h%2FKPaMNe0reEhGYUwCKW8bmyx3G6VCp9kM5GW3DfEBsr7bY2ffOJoELk6BTmw2SHZYRsgdk7kGbADLixG7V0OH9r8cCyRY2VW6SZkrhsP58ASLAjnLBZ4iLCDvrvc%2FOuMreTvf1Iva0XdsKpyKKPA%2Bby5L%2BdvpFT09CCrbJZpXlHtZ7IR3dgG8Ar0GVQ1DZGrDu2sHxBL2V4l9yIUZdaEW6&X-Amz-Signature=5742b9091b58e501e36db9b197dc5664d48c96a4e83127e1e7829aacd9eeddff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
