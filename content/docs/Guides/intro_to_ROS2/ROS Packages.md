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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAMW55H%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCe%2FT%2FAgbneobvogQe0NSWiVUR5hkLO0L5GVH8IK0dZAQIhAPSG5Skh7p9X8wYb4bsBPNlnLye8IsjAoZIRepI2pLPgKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZpUBG3fw%2BJgzeikkq3AMaAwTTlKj1v1RqmrOT7n1Bfcuaa63Tls8a1wQJzrzn53w1va%2Frh%2FTAHo6VUODn5IQe2JvbNKPRYqo1vcytaLaC3BNfZCqLUqPj9PVufPq8m4e3%2Fyd%2FHAPG9T6FOJUUnzVvklsZduntMjfJF%2BUp6p9147KrjViuICv9H2gNK0hnZInxNxkXn7Ggldo4p07XL85Oc1C6GqB4%2FhdoY%2BQMjsXkQdDTtaXWmsyi%2BFM%2FqG0arTd%2FgvFeF9t%2BH%2FVOWrkPTyPZvME8DbsDtoOgFCcaMszpYTmJrNEA8KrMRSol3ASpyYVdiP58eccDVkM6fRLCv08fhYfqqu7XVYhdu7Dclt5Xymfe0rxMZFapmG4q6Hivph81YFaxe2zdldiU%2Ba%2BndgdutIKkuPFDM6FnSRHCmMlo0EeafxKF7l8Ww6miSkk9VVWRV%2F42zzibrLCk8DuC00GbxQabt9AuKIikFnqZ0ydNhRKiZeay97RnjT1Rg1VqmIk0j1ng7wUqzjPAxZsQhlA%2FR%2BuyBrSbkRCQqifmGmPsFhTsc5Wr3cYbSpDVfULtYfuHXJFkCTiD0nChKyL%2BMAMOnSINhjMZeRW9xxqmNetfwqtAoyUzA6aqdLDWmQwFEqADn3ZYuK5pqpQuWzDl76O%2FBjqkAYZrwATw6DYRl%2F%2B67qwh6KwVGgTyS7YxVUQO2Y1oqaX3jwLp6TB86EhWnvAaHW%2BCuk2mrFUoIn7EB%2BQ8BKt7Md05KumpAuYWTSaJA0deL1tPx8EfxpDTAWy7F4LZ21cctWkvSs%2FyjfEdWnK21a67k6zPx8S%2BYvGsxvuNoIWJl6TCZcHh7a7BDTgaQCAOSGhmASpPfnBYDNEMVLn9d5kJ0fyj2gFQ&X-Amz-Signature=40b1ad6b995d85c7c4c8ca95a0ddb8d6c308e2fc5d388f9f493b4f72a3b407b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAMW55H%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCe%2FT%2FAgbneobvogQe0NSWiVUR5hkLO0L5GVH8IK0dZAQIhAPSG5Skh7p9X8wYb4bsBPNlnLye8IsjAoZIRepI2pLPgKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZpUBG3fw%2BJgzeikkq3AMaAwTTlKj1v1RqmrOT7n1Bfcuaa63Tls8a1wQJzrzn53w1va%2Frh%2FTAHo6VUODn5IQe2JvbNKPRYqo1vcytaLaC3BNfZCqLUqPj9PVufPq8m4e3%2Fyd%2FHAPG9T6FOJUUnzVvklsZduntMjfJF%2BUp6p9147KrjViuICv9H2gNK0hnZInxNxkXn7Ggldo4p07XL85Oc1C6GqB4%2FhdoY%2BQMjsXkQdDTtaXWmsyi%2BFM%2FqG0arTd%2FgvFeF9t%2BH%2FVOWrkPTyPZvME8DbsDtoOgFCcaMszpYTmJrNEA8KrMRSol3ASpyYVdiP58eccDVkM6fRLCv08fhYfqqu7XVYhdu7Dclt5Xymfe0rxMZFapmG4q6Hivph81YFaxe2zdldiU%2Ba%2BndgdutIKkuPFDM6FnSRHCmMlo0EeafxKF7l8Ww6miSkk9VVWRV%2F42zzibrLCk8DuC00GbxQabt9AuKIikFnqZ0ydNhRKiZeay97RnjT1Rg1VqmIk0j1ng7wUqzjPAxZsQhlA%2FR%2BuyBrSbkRCQqifmGmPsFhTsc5Wr3cYbSpDVfULtYfuHXJFkCTiD0nChKyL%2BMAMOnSINhjMZeRW9xxqmNetfwqtAoyUzA6aqdLDWmQwFEqADn3ZYuK5pqpQuWzDl76O%2FBjqkAYZrwATw6DYRl%2F%2B67qwh6KwVGgTyS7YxVUQO2Y1oqaX3jwLp6TB86EhWnvAaHW%2BCuk2mrFUoIn7EB%2BQ8BKt7Md05KumpAuYWTSaJA0deL1tPx8EfxpDTAWy7F4LZ21cctWkvSs%2FyjfEdWnK21a67k6zPx8S%2BYvGsxvuNoIWJl6TCZcHh7a7BDTgaQCAOSGhmASpPfnBYDNEMVLn9d5kJ0fyj2gFQ&X-Amz-Signature=cd76dfb5bd5e44395667db1985ee67238ccf46c2384ff99e472c976fd45f83a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAMW55H%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCe%2FT%2FAgbneobvogQe0NSWiVUR5hkLO0L5GVH8IK0dZAQIhAPSG5Skh7p9X8wYb4bsBPNlnLye8IsjAoZIRepI2pLPgKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZpUBG3fw%2BJgzeikkq3AMaAwTTlKj1v1RqmrOT7n1Bfcuaa63Tls8a1wQJzrzn53w1va%2Frh%2FTAHo6VUODn5IQe2JvbNKPRYqo1vcytaLaC3BNfZCqLUqPj9PVufPq8m4e3%2Fyd%2FHAPG9T6FOJUUnzVvklsZduntMjfJF%2BUp6p9147KrjViuICv9H2gNK0hnZInxNxkXn7Ggldo4p07XL85Oc1C6GqB4%2FhdoY%2BQMjsXkQdDTtaXWmsyi%2BFM%2FqG0arTd%2FgvFeF9t%2BH%2FVOWrkPTyPZvME8DbsDtoOgFCcaMszpYTmJrNEA8KrMRSol3ASpyYVdiP58eccDVkM6fRLCv08fhYfqqu7XVYhdu7Dclt5Xymfe0rxMZFapmG4q6Hivph81YFaxe2zdldiU%2Ba%2BndgdutIKkuPFDM6FnSRHCmMlo0EeafxKF7l8Ww6miSkk9VVWRV%2F42zzibrLCk8DuC00GbxQabt9AuKIikFnqZ0ydNhRKiZeay97RnjT1Rg1VqmIk0j1ng7wUqzjPAxZsQhlA%2FR%2BuyBrSbkRCQqifmGmPsFhTsc5Wr3cYbSpDVfULtYfuHXJFkCTiD0nChKyL%2BMAMOnSINhjMZeRW9xxqmNetfwqtAoyUzA6aqdLDWmQwFEqADn3ZYuK5pqpQuWzDl76O%2FBjqkAYZrwATw6DYRl%2F%2B67qwh6KwVGgTyS7YxVUQO2Y1oqaX3jwLp6TB86EhWnvAaHW%2BCuk2mrFUoIn7EB%2BQ8BKt7Md05KumpAuYWTSaJA0deL1tPx8EfxpDTAWy7F4LZ21cctWkvSs%2FyjfEdWnK21a67k6zPx8S%2BYvGsxvuNoIWJl6TCZcHh7a7BDTgaQCAOSGhmASpPfnBYDNEMVLn9d5kJ0fyj2gFQ&X-Amz-Signature=9a180c0431d655b81ff82f75095d787dd80b3d616c8cc43c51384dcb9eac8961&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAMW55H%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCe%2FT%2FAgbneobvogQe0NSWiVUR5hkLO0L5GVH8IK0dZAQIhAPSG5Skh7p9X8wYb4bsBPNlnLye8IsjAoZIRepI2pLPgKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZpUBG3fw%2BJgzeikkq3AMaAwTTlKj1v1RqmrOT7n1Bfcuaa63Tls8a1wQJzrzn53w1va%2Frh%2FTAHo6VUODn5IQe2JvbNKPRYqo1vcytaLaC3BNfZCqLUqPj9PVufPq8m4e3%2Fyd%2FHAPG9T6FOJUUnzVvklsZduntMjfJF%2BUp6p9147KrjViuICv9H2gNK0hnZInxNxkXn7Ggldo4p07XL85Oc1C6GqB4%2FhdoY%2BQMjsXkQdDTtaXWmsyi%2BFM%2FqG0arTd%2FgvFeF9t%2BH%2FVOWrkPTyPZvME8DbsDtoOgFCcaMszpYTmJrNEA8KrMRSol3ASpyYVdiP58eccDVkM6fRLCv08fhYfqqu7XVYhdu7Dclt5Xymfe0rxMZFapmG4q6Hivph81YFaxe2zdldiU%2Ba%2BndgdutIKkuPFDM6FnSRHCmMlo0EeafxKF7l8Ww6miSkk9VVWRV%2F42zzibrLCk8DuC00GbxQabt9AuKIikFnqZ0ydNhRKiZeay97RnjT1Rg1VqmIk0j1ng7wUqzjPAxZsQhlA%2FR%2BuyBrSbkRCQqifmGmPsFhTsc5Wr3cYbSpDVfULtYfuHXJFkCTiD0nChKyL%2BMAMOnSINhjMZeRW9xxqmNetfwqtAoyUzA6aqdLDWmQwFEqADn3ZYuK5pqpQuWzDl76O%2FBjqkAYZrwATw6DYRl%2F%2B67qwh6KwVGgTyS7YxVUQO2Y1oqaX3jwLp6TB86EhWnvAaHW%2BCuk2mrFUoIn7EB%2BQ8BKt7Md05KumpAuYWTSaJA0deL1tPx8EfxpDTAWy7F4LZ21cctWkvSs%2FyjfEdWnK21a67k6zPx8S%2BYvGsxvuNoIWJl6TCZcHh7a7BDTgaQCAOSGhmASpPfnBYDNEMVLn9d5kJ0fyj2gFQ&X-Amz-Signature=4ebc8c5d0b4b0a68b6426f2566b24e9a420ed0fa4e027632594a11a775b99dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAMW55H%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCe%2FT%2FAgbneobvogQe0NSWiVUR5hkLO0L5GVH8IK0dZAQIhAPSG5Skh7p9X8wYb4bsBPNlnLye8IsjAoZIRepI2pLPgKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZpUBG3fw%2BJgzeikkq3AMaAwTTlKj1v1RqmrOT7n1Bfcuaa63Tls8a1wQJzrzn53w1va%2Frh%2FTAHo6VUODn5IQe2JvbNKPRYqo1vcytaLaC3BNfZCqLUqPj9PVufPq8m4e3%2Fyd%2FHAPG9T6FOJUUnzVvklsZduntMjfJF%2BUp6p9147KrjViuICv9H2gNK0hnZInxNxkXn7Ggldo4p07XL85Oc1C6GqB4%2FhdoY%2BQMjsXkQdDTtaXWmsyi%2BFM%2FqG0arTd%2FgvFeF9t%2BH%2FVOWrkPTyPZvME8DbsDtoOgFCcaMszpYTmJrNEA8KrMRSol3ASpyYVdiP58eccDVkM6fRLCv08fhYfqqu7XVYhdu7Dclt5Xymfe0rxMZFapmG4q6Hivph81YFaxe2zdldiU%2Ba%2BndgdutIKkuPFDM6FnSRHCmMlo0EeafxKF7l8Ww6miSkk9VVWRV%2F42zzibrLCk8DuC00GbxQabt9AuKIikFnqZ0ydNhRKiZeay97RnjT1Rg1VqmIk0j1ng7wUqzjPAxZsQhlA%2FR%2BuyBrSbkRCQqifmGmPsFhTsc5Wr3cYbSpDVfULtYfuHXJFkCTiD0nChKyL%2BMAMOnSINhjMZeRW9xxqmNetfwqtAoyUzA6aqdLDWmQwFEqADn3ZYuK5pqpQuWzDl76O%2FBjqkAYZrwATw6DYRl%2F%2B67qwh6KwVGgTyS7YxVUQO2Y1oqaX3jwLp6TB86EhWnvAaHW%2BCuk2mrFUoIn7EB%2BQ8BKt7Md05KumpAuYWTSaJA0deL1tPx8EfxpDTAWy7F4LZ21cctWkvSs%2FyjfEdWnK21a67k6zPx8S%2BYvGsxvuNoIWJl6TCZcHh7a7BDTgaQCAOSGhmASpPfnBYDNEMVLn9d5kJ0fyj2gFQ&X-Amz-Signature=fc1499f74e234945ea1e132e712a6959ed6e3a8d98d6471d41be5b76b0d4dfd4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAMW55H%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCe%2FT%2FAgbneobvogQe0NSWiVUR5hkLO0L5GVH8IK0dZAQIhAPSG5Skh7p9X8wYb4bsBPNlnLye8IsjAoZIRepI2pLPgKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZpUBG3fw%2BJgzeikkq3AMaAwTTlKj1v1RqmrOT7n1Bfcuaa63Tls8a1wQJzrzn53w1va%2Frh%2FTAHo6VUODn5IQe2JvbNKPRYqo1vcytaLaC3BNfZCqLUqPj9PVufPq8m4e3%2Fyd%2FHAPG9T6FOJUUnzVvklsZduntMjfJF%2BUp6p9147KrjViuICv9H2gNK0hnZInxNxkXn7Ggldo4p07XL85Oc1C6GqB4%2FhdoY%2BQMjsXkQdDTtaXWmsyi%2BFM%2FqG0arTd%2FgvFeF9t%2BH%2FVOWrkPTyPZvME8DbsDtoOgFCcaMszpYTmJrNEA8KrMRSol3ASpyYVdiP58eccDVkM6fRLCv08fhYfqqu7XVYhdu7Dclt5Xymfe0rxMZFapmG4q6Hivph81YFaxe2zdldiU%2Ba%2BndgdutIKkuPFDM6FnSRHCmMlo0EeafxKF7l8Ww6miSkk9VVWRV%2F42zzibrLCk8DuC00GbxQabt9AuKIikFnqZ0ydNhRKiZeay97RnjT1Rg1VqmIk0j1ng7wUqzjPAxZsQhlA%2FR%2BuyBrSbkRCQqifmGmPsFhTsc5Wr3cYbSpDVfULtYfuHXJFkCTiD0nChKyL%2BMAMOnSINhjMZeRW9xxqmNetfwqtAoyUzA6aqdLDWmQwFEqADn3ZYuK5pqpQuWzDl76O%2FBjqkAYZrwATw6DYRl%2F%2B67qwh6KwVGgTyS7YxVUQO2Y1oqaX3jwLp6TB86EhWnvAaHW%2BCuk2mrFUoIn7EB%2BQ8BKt7Md05KumpAuYWTSaJA0deL1tPx8EfxpDTAWy7F4LZ21cctWkvSs%2FyjfEdWnK21a67k6zPx8S%2BYvGsxvuNoIWJl6TCZcHh7a7BDTgaQCAOSGhmASpPfnBYDNEMVLn9d5kJ0fyj2gFQ&X-Amz-Signature=65fae8f0e70f60f6c231a0d0d0a04f7e64d6c2ade9b67a781aa070717fbd087c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAMW55H%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCe%2FT%2FAgbneobvogQe0NSWiVUR5hkLO0L5GVH8IK0dZAQIhAPSG5Skh7p9X8wYb4bsBPNlnLye8IsjAoZIRepI2pLPgKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZpUBG3fw%2BJgzeikkq3AMaAwTTlKj1v1RqmrOT7n1Bfcuaa63Tls8a1wQJzrzn53w1va%2Frh%2FTAHo6VUODn5IQe2JvbNKPRYqo1vcytaLaC3BNfZCqLUqPj9PVufPq8m4e3%2Fyd%2FHAPG9T6FOJUUnzVvklsZduntMjfJF%2BUp6p9147KrjViuICv9H2gNK0hnZInxNxkXn7Ggldo4p07XL85Oc1C6GqB4%2FhdoY%2BQMjsXkQdDTtaXWmsyi%2BFM%2FqG0arTd%2FgvFeF9t%2BH%2FVOWrkPTyPZvME8DbsDtoOgFCcaMszpYTmJrNEA8KrMRSol3ASpyYVdiP58eccDVkM6fRLCv08fhYfqqu7XVYhdu7Dclt5Xymfe0rxMZFapmG4q6Hivph81YFaxe2zdldiU%2Ba%2BndgdutIKkuPFDM6FnSRHCmMlo0EeafxKF7l8Ww6miSkk9VVWRV%2F42zzibrLCk8DuC00GbxQabt9AuKIikFnqZ0ydNhRKiZeay97RnjT1Rg1VqmIk0j1ng7wUqzjPAxZsQhlA%2FR%2BuyBrSbkRCQqifmGmPsFhTsc5Wr3cYbSpDVfULtYfuHXJFkCTiD0nChKyL%2BMAMOnSINhjMZeRW9xxqmNetfwqtAoyUzA6aqdLDWmQwFEqADn3ZYuK5pqpQuWzDl76O%2FBjqkAYZrwATw6DYRl%2F%2B67qwh6KwVGgTyS7YxVUQO2Y1oqaX3jwLp6TB86EhWnvAaHW%2BCuk2mrFUoIn7EB%2BQ8BKt7Md05KumpAuYWTSaJA0deL1tPx8EfxpDTAWy7F4LZ21cctWkvSs%2FyjfEdWnK21a67k6zPx8S%2BYvGsxvuNoIWJl6TCZcHh7a7BDTgaQCAOSGhmASpPfnBYDNEMVLn9d5kJ0fyj2gFQ&X-Amz-Signature=5bb829b5a99c24ef1a90d8b811f9efd42e07f52b4be0a7985c9712ab63631903&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
