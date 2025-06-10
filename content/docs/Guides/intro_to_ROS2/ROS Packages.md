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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTAKAXX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtlOTPnXWCp6QOtOqW2ZadU%2Fi7ebf%2BNHFiC%2BhyBclpwAiAzxi3oMHpI%2BYz7%2FyWMf4d9uqbmvEcjnjhpwi7HW%2F0DryqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqX%2BBZxWfkkxQG%2F1XKtwDBbGKrXYfLb28ICukvMnePwTMP%2FH7ROo4hlmbUt97tK9xnFNSEHTEXpisNix2cbFkFjalYhZgKvoCVT1C%2Fhylcyo55TeBNm%2F2FUlXg7yjq9isRAZRyaCNIKSlszc3hBOeopBKEG%2BJaZPjmxibWiZy%2BY%2FyRVdkS3WY2Wb9KXjha0VTJ%2F0AcODZMa2jb06WCDoVj6euDDveWg0p0q8TtrqXuMF6oFVvja6qdraGtzXZxZTrmy5ZwT7hw53QeZgUi3h8AYIMYtOmicuJgzusjy9CNjnQdqRTlvs6e%2Byj6ceqXtKro%2BN%2B0vpIrA0dKJOM9Po3R6LV3T%2BxOQHxxb27xtjg%2Bq2FfbKCx%2FznyGhZ%2BRDsQJz5LBey8NESoL4emXEtte9XoraNS8QyILVEXhb9t1DmWWkR10xxUVYEr%2BQzXhFvhitS1sSIxc1oRyIJmuHxZk0qc%2FagTsvCZlaUaIo5HB4oM9t6wiyJhcpbp2JDu6HX22%2F3USXhY94C1af31U%2BtC3BhGMhtm6%2BlDFUkpVXvUnRWk6UNWIOKgfGA6ROuWEOIJxkcE%2FOHX2zpHGnleHaTGpheCnEP7PY0Ph8veKxmjiNR2ai42syS2HhtqMiL%2FDJGasYcH5CFDnNVmfIwMJgw%2BeSiwgY6pgHhJwsYcjKTYruFFMLNQB0hjAUVRBkwrh6A3tE3Ii58sMvSFxjyShKdYQHrzNiOMplJZu0Vt%2BeU324sLZxF%2Bq6ExA1Aj1%2FflJJKXV2cvHQlVzPoEGSw6qHeTjAw8vw7dBp8fAJJZrulmsDCHFW6hvPdfe9jgKSTA3IDec0QefqngbPV5BkM3jFwdVS5kuP1filuF1jk91jO5ykwgUoJawmTPuLvgmsK&X-Amz-Signature=76427f7e956f09c201b7830b222474e09c6edfd6e2a7e59c6936f050dda8e64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTAKAXX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtlOTPnXWCp6QOtOqW2ZadU%2Fi7ebf%2BNHFiC%2BhyBclpwAiAzxi3oMHpI%2BYz7%2FyWMf4d9uqbmvEcjnjhpwi7HW%2F0DryqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqX%2BBZxWfkkxQG%2F1XKtwDBbGKrXYfLb28ICukvMnePwTMP%2FH7ROo4hlmbUt97tK9xnFNSEHTEXpisNix2cbFkFjalYhZgKvoCVT1C%2Fhylcyo55TeBNm%2F2FUlXg7yjq9isRAZRyaCNIKSlszc3hBOeopBKEG%2BJaZPjmxibWiZy%2BY%2FyRVdkS3WY2Wb9KXjha0VTJ%2F0AcODZMa2jb06WCDoVj6euDDveWg0p0q8TtrqXuMF6oFVvja6qdraGtzXZxZTrmy5ZwT7hw53QeZgUi3h8AYIMYtOmicuJgzusjy9CNjnQdqRTlvs6e%2Byj6ceqXtKro%2BN%2B0vpIrA0dKJOM9Po3R6LV3T%2BxOQHxxb27xtjg%2Bq2FfbKCx%2FznyGhZ%2BRDsQJz5LBey8NESoL4emXEtte9XoraNS8QyILVEXhb9t1DmWWkR10xxUVYEr%2BQzXhFvhitS1sSIxc1oRyIJmuHxZk0qc%2FagTsvCZlaUaIo5HB4oM9t6wiyJhcpbp2JDu6HX22%2F3USXhY94C1af31U%2BtC3BhGMhtm6%2BlDFUkpVXvUnRWk6UNWIOKgfGA6ROuWEOIJxkcE%2FOHX2zpHGnleHaTGpheCnEP7PY0Ph8veKxmjiNR2ai42syS2HhtqMiL%2FDJGasYcH5CFDnNVmfIwMJgw%2BeSiwgY6pgHhJwsYcjKTYruFFMLNQB0hjAUVRBkwrh6A3tE3Ii58sMvSFxjyShKdYQHrzNiOMplJZu0Vt%2BeU324sLZxF%2Bq6ExA1Aj1%2FflJJKXV2cvHQlVzPoEGSw6qHeTjAw8vw7dBp8fAJJZrulmsDCHFW6hvPdfe9jgKSTA3IDec0QefqngbPV5BkM3jFwdVS5kuP1filuF1jk91jO5ykwgUoJawmTPuLvgmsK&X-Amz-Signature=7e4b049646015a4b1ca9789b00165a7fc2f8b2dd82b7e9722cffb9042c8f22a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTAKAXX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtlOTPnXWCp6QOtOqW2ZadU%2Fi7ebf%2BNHFiC%2BhyBclpwAiAzxi3oMHpI%2BYz7%2FyWMf4d9uqbmvEcjnjhpwi7HW%2F0DryqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqX%2BBZxWfkkxQG%2F1XKtwDBbGKrXYfLb28ICukvMnePwTMP%2FH7ROo4hlmbUt97tK9xnFNSEHTEXpisNix2cbFkFjalYhZgKvoCVT1C%2Fhylcyo55TeBNm%2F2FUlXg7yjq9isRAZRyaCNIKSlszc3hBOeopBKEG%2BJaZPjmxibWiZy%2BY%2FyRVdkS3WY2Wb9KXjha0VTJ%2F0AcODZMa2jb06WCDoVj6euDDveWg0p0q8TtrqXuMF6oFVvja6qdraGtzXZxZTrmy5ZwT7hw53QeZgUi3h8AYIMYtOmicuJgzusjy9CNjnQdqRTlvs6e%2Byj6ceqXtKro%2BN%2B0vpIrA0dKJOM9Po3R6LV3T%2BxOQHxxb27xtjg%2Bq2FfbKCx%2FznyGhZ%2BRDsQJz5LBey8NESoL4emXEtte9XoraNS8QyILVEXhb9t1DmWWkR10xxUVYEr%2BQzXhFvhitS1sSIxc1oRyIJmuHxZk0qc%2FagTsvCZlaUaIo5HB4oM9t6wiyJhcpbp2JDu6HX22%2F3USXhY94C1af31U%2BtC3BhGMhtm6%2BlDFUkpVXvUnRWk6UNWIOKgfGA6ROuWEOIJxkcE%2FOHX2zpHGnleHaTGpheCnEP7PY0Ph8veKxmjiNR2ai42syS2HhtqMiL%2FDJGasYcH5CFDnNVmfIwMJgw%2BeSiwgY6pgHhJwsYcjKTYruFFMLNQB0hjAUVRBkwrh6A3tE3Ii58sMvSFxjyShKdYQHrzNiOMplJZu0Vt%2BeU324sLZxF%2Bq6ExA1Aj1%2FflJJKXV2cvHQlVzPoEGSw6qHeTjAw8vw7dBp8fAJJZrulmsDCHFW6hvPdfe9jgKSTA3IDec0QefqngbPV5BkM3jFwdVS5kuP1filuF1jk91jO5ykwgUoJawmTPuLvgmsK&X-Amz-Signature=a5eaf80e1d285edae502372060fcfe5768104e1d91097388297e4ca9539e8c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTAKAXX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtlOTPnXWCp6QOtOqW2ZadU%2Fi7ebf%2BNHFiC%2BhyBclpwAiAzxi3oMHpI%2BYz7%2FyWMf4d9uqbmvEcjnjhpwi7HW%2F0DryqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqX%2BBZxWfkkxQG%2F1XKtwDBbGKrXYfLb28ICukvMnePwTMP%2FH7ROo4hlmbUt97tK9xnFNSEHTEXpisNix2cbFkFjalYhZgKvoCVT1C%2Fhylcyo55TeBNm%2F2FUlXg7yjq9isRAZRyaCNIKSlszc3hBOeopBKEG%2BJaZPjmxibWiZy%2BY%2FyRVdkS3WY2Wb9KXjha0VTJ%2F0AcODZMa2jb06WCDoVj6euDDveWg0p0q8TtrqXuMF6oFVvja6qdraGtzXZxZTrmy5ZwT7hw53QeZgUi3h8AYIMYtOmicuJgzusjy9CNjnQdqRTlvs6e%2Byj6ceqXtKro%2BN%2B0vpIrA0dKJOM9Po3R6LV3T%2BxOQHxxb27xtjg%2Bq2FfbKCx%2FznyGhZ%2BRDsQJz5LBey8NESoL4emXEtte9XoraNS8QyILVEXhb9t1DmWWkR10xxUVYEr%2BQzXhFvhitS1sSIxc1oRyIJmuHxZk0qc%2FagTsvCZlaUaIo5HB4oM9t6wiyJhcpbp2JDu6HX22%2F3USXhY94C1af31U%2BtC3BhGMhtm6%2BlDFUkpVXvUnRWk6UNWIOKgfGA6ROuWEOIJxkcE%2FOHX2zpHGnleHaTGpheCnEP7PY0Ph8veKxmjiNR2ai42syS2HhtqMiL%2FDJGasYcH5CFDnNVmfIwMJgw%2BeSiwgY6pgHhJwsYcjKTYruFFMLNQB0hjAUVRBkwrh6A3tE3Ii58sMvSFxjyShKdYQHrzNiOMplJZu0Vt%2BeU324sLZxF%2Bq6ExA1Aj1%2FflJJKXV2cvHQlVzPoEGSw6qHeTjAw8vw7dBp8fAJJZrulmsDCHFW6hvPdfe9jgKSTA3IDec0QefqngbPV5BkM3jFwdVS5kuP1filuF1jk91jO5ykwgUoJawmTPuLvgmsK&X-Amz-Signature=9806eeee2160dd71ffe36a411925313966be493613c4a18f119d2755f9aa4e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTAKAXX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtlOTPnXWCp6QOtOqW2ZadU%2Fi7ebf%2BNHFiC%2BhyBclpwAiAzxi3oMHpI%2BYz7%2FyWMf4d9uqbmvEcjnjhpwi7HW%2F0DryqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqX%2BBZxWfkkxQG%2F1XKtwDBbGKrXYfLb28ICukvMnePwTMP%2FH7ROo4hlmbUt97tK9xnFNSEHTEXpisNix2cbFkFjalYhZgKvoCVT1C%2Fhylcyo55TeBNm%2F2FUlXg7yjq9isRAZRyaCNIKSlszc3hBOeopBKEG%2BJaZPjmxibWiZy%2BY%2FyRVdkS3WY2Wb9KXjha0VTJ%2F0AcODZMa2jb06WCDoVj6euDDveWg0p0q8TtrqXuMF6oFVvja6qdraGtzXZxZTrmy5ZwT7hw53QeZgUi3h8AYIMYtOmicuJgzusjy9CNjnQdqRTlvs6e%2Byj6ceqXtKro%2BN%2B0vpIrA0dKJOM9Po3R6LV3T%2BxOQHxxb27xtjg%2Bq2FfbKCx%2FznyGhZ%2BRDsQJz5LBey8NESoL4emXEtte9XoraNS8QyILVEXhb9t1DmWWkR10xxUVYEr%2BQzXhFvhitS1sSIxc1oRyIJmuHxZk0qc%2FagTsvCZlaUaIo5HB4oM9t6wiyJhcpbp2JDu6HX22%2F3USXhY94C1af31U%2BtC3BhGMhtm6%2BlDFUkpVXvUnRWk6UNWIOKgfGA6ROuWEOIJxkcE%2FOHX2zpHGnleHaTGpheCnEP7PY0Ph8veKxmjiNR2ai42syS2HhtqMiL%2FDJGasYcH5CFDnNVmfIwMJgw%2BeSiwgY6pgHhJwsYcjKTYruFFMLNQB0hjAUVRBkwrh6A3tE3Ii58sMvSFxjyShKdYQHrzNiOMplJZu0Vt%2BeU324sLZxF%2Bq6ExA1Aj1%2FflJJKXV2cvHQlVzPoEGSw6qHeTjAw8vw7dBp8fAJJZrulmsDCHFW6hvPdfe9jgKSTA3IDec0QefqngbPV5BkM3jFwdVS5kuP1filuF1jk91jO5ykwgUoJawmTPuLvgmsK&X-Amz-Signature=dbaf21c70e8e3c61ecea45ff4bd58ae560162bd77a45dfadbe8027343f4338c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTAKAXX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtlOTPnXWCp6QOtOqW2ZadU%2Fi7ebf%2BNHFiC%2BhyBclpwAiAzxi3oMHpI%2BYz7%2FyWMf4d9uqbmvEcjnjhpwi7HW%2F0DryqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqX%2BBZxWfkkxQG%2F1XKtwDBbGKrXYfLb28ICukvMnePwTMP%2FH7ROo4hlmbUt97tK9xnFNSEHTEXpisNix2cbFkFjalYhZgKvoCVT1C%2Fhylcyo55TeBNm%2F2FUlXg7yjq9isRAZRyaCNIKSlszc3hBOeopBKEG%2BJaZPjmxibWiZy%2BY%2FyRVdkS3WY2Wb9KXjha0VTJ%2F0AcODZMa2jb06WCDoVj6euDDveWg0p0q8TtrqXuMF6oFVvja6qdraGtzXZxZTrmy5ZwT7hw53QeZgUi3h8AYIMYtOmicuJgzusjy9CNjnQdqRTlvs6e%2Byj6ceqXtKro%2BN%2B0vpIrA0dKJOM9Po3R6LV3T%2BxOQHxxb27xtjg%2Bq2FfbKCx%2FznyGhZ%2BRDsQJz5LBey8NESoL4emXEtte9XoraNS8QyILVEXhb9t1DmWWkR10xxUVYEr%2BQzXhFvhitS1sSIxc1oRyIJmuHxZk0qc%2FagTsvCZlaUaIo5HB4oM9t6wiyJhcpbp2JDu6HX22%2F3USXhY94C1af31U%2BtC3BhGMhtm6%2BlDFUkpVXvUnRWk6UNWIOKgfGA6ROuWEOIJxkcE%2FOHX2zpHGnleHaTGpheCnEP7PY0Ph8veKxmjiNR2ai42syS2HhtqMiL%2FDJGasYcH5CFDnNVmfIwMJgw%2BeSiwgY6pgHhJwsYcjKTYruFFMLNQB0hjAUVRBkwrh6A3tE3Ii58sMvSFxjyShKdYQHrzNiOMplJZu0Vt%2BeU324sLZxF%2Bq6ExA1Aj1%2FflJJKXV2cvHQlVzPoEGSw6qHeTjAw8vw7dBp8fAJJZrulmsDCHFW6hvPdfe9jgKSTA3IDec0QefqngbPV5BkM3jFwdVS5kuP1filuF1jk91jO5ykwgUoJawmTPuLvgmsK&X-Amz-Signature=12444525a75bc3dca5503d61b5fa9b0601b408f3f656313357351a1f3fa28ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTAKAXX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtlOTPnXWCp6QOtOqW2ZadU%2Fi7ebf%2BNHFiC%2BhyBclpwAiAzxi3oMHpI%2BYz7%2FyWMf4d9uqbmvEcjnjhpwi7HW%2F0DryqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqX%2BBZxWfkkxQG%2F1XKtwDBbGKrXYfLb28ICukvMnePwTMP%2FH7ROo4hlmbUt97tK9xnFNSEHTEXpisNix2cbFkFjalYhZgKvoCVT1C%2Fhylcyo55TeBNm%2F2FUlXg7yjq9isRAZRyaCNIKSlszc3hBOeopBKEG%2BJaZPjmxibWiZy%2BY%2FyRVdkS3WY2Wb9KXjha0VTJ%2F0AcODZMa2jb06WCDoVj6euDDveWg0p0q8TtrqXuMF6oFVvja6qdraGtzXZxZTrmy5ZwT7hw53QeZgUi3h8AYIMYtOmicuJgzusjy9CNjnQdqRTlvs6e%2Byj6ceqXtKro%2BN%2B0vpIrA0dKJOM9Po3R6LV3T%2BxOQHxxb27xtjg%2Bq2FfbKCx%2FznyGhZ%2BRDsQJz5LBey8NESoL4emXEtte9XoraNS8QyILVEXhb9t1DmWWkR10xxUVYEr%2BQzXhFvhitS1sSIxc1oRyIJmuHxZk0qc%2FagTsvCZlaUaIo5HB4oM9t6wiyJhcpbp2JDu6HX22%2F3USXhY94C1af31U%2BtC3BhGMhtm6%2BlDFUkpVXvUnRWk6UNWIOKgfGA6ROuWEOIJxkcE%2FOHX2zpHGnleHaTGpheCnEP7PY0Ph8veKxmjiNR2ai42syS2HhtqMiL%2FDJGasYcH5CFDnNVmfIwMJgw%2BeSiwgY6pgHhJwsYcjKTYruFFMLNQB0hjAUVRBkwrh6A3tE3Ii58sMvSFxjyShKdYQHrzNiOMplJZu0Vt%2BeU324sLZxF%2Bq6ExA1Aj1%2FflJJKXV2cvHQlVzPoEGSw6qHeTjAw8vw7dBp8fAJJZrulmsDCHFW6hvPdfe9jgKSTA3IDec0QefqngbPV5BkM3jFwdVS5kuP1filuF1jk91jO5ykwgUoJawmTPuLvgmsK&X-Amz-Signature=20503e1928dfba2d9cc43c9b5be0da5c0599e19edd19106eef5949946997b858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
