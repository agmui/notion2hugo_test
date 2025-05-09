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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDVTSUW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwa9BRUKkqq3WMRemaY92i%2BmB2CWBW7poGXyzlO1sDVwIhAOJmK3GEiG%2BILsENe3KXFSWqcCZpWlmy6ReKzDFPcae%2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tfnZ5ESqDbv%2BQXMq3AOkhZh%2FH6MHCO0LjY2NRNa5BIaeLl84qcyGoSHvwT%2FZNOnmmi9I%2Bzlz1CdzjB7xY8zEI8O3mSESz0cz1qXlF7K27aR9hcefmMRWIszCsDvgn3%2BU8%2F314Ba8o%2BS0Gyy%2FD4%2FdQkMkV9d3a0j12B4OElk5LEI%2BOjB5vZFsn5ktpSC%2BVIyumlmkwynvdXmZUlf6swkNRbuc6%2BdJ5sqHWmbtkaj4kXEXfbHjzlTB6vPOHsQxpjLGdXx5UXD%2FZLcn7keIdxE598ts6ww%2FLN5ToxZKmvPTcfDxu6hSpbalzDwQ1BVvHp6RrLJaSenTH1FCaeca8TCXVe6fWXDNswIFHLdoLrexc5HSavB0VYs%2Fi1KdvF0Mkh8wnGtwBbAcXMZdBH6M1QimZwt%2B2rpjbCK6GSCbjEdb6q5IFdokPZejWplaCI7SrzCZV45V%2FieXKElhSP9mCbfElAlohkaauidNCevMt9e1jgwLXoD%2Fernhgof9uViliKg8I%2FkcFy1R5zI%2FjUCduxl9bOVAt32cc8JE2sDuoLbFMtJLAa3pXBTADq1CmAzmSrwMu0OHjpIHBnVviKq66A1ejOmgi6GFBt0oC9DzDed4HAov6e2vT7Z9dpOJNIXjb1ilGV%2BxkJj5iHAdMzCM1%2FjABjqkAdOWQhayaGsuLIBom49ZaEEx9uEsX5dnulJr7Y%2Bv3yOrcIu9F3Bp5%2FrwtmSWFItWrDgyKLQDFW%2Ff2JPB67KYdMQ8rpUY2UF8DPA8lUBjwjqvrmDcuQ%2BzsuehA%2ByokuVB%2FHZSu%2FaOEgAB49HPs5JqJXmbRedSEjq1GZXwVMt6yxoJ%2BB1fflW%2BqUsfaNEt4S2ifRNdKIN4%2FQnJsaCTW2u7C%2F3VgfXk&X-Amz-Signature=1b66c1d8949ca99f1bc17f0f18bc2d4a8ab304c551a9fe5a2a2a72e8dbbd5a28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDVTSUW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwa9BRUKkqq3WMRemaY92i%2BmB2CWBW7poGXyzlO1sDVwIhAOJmK3GEiG%2BILsENe3KXFSWqcCZpWlmy6ReKzDFPcae%2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tfnZ5ESqDbv%2BQXMq3AOkhZh%2FH6MHCO0LjY2NRNa5BIaeLl84qcyGoSHvwT%2FZNOnmmi9I%2Bzlz1CdzjB7xY8zEI8O3mSESz0cz1qXlF7K27aR9hcefmMRWIszCsDvgn3%2BU8%2F314Ba8o%2BS0Gyy%2FD4%2FdQkMkV9d3a0j12B4OElk5LEI%2BOjB5vZFsn5ktpSC%2BVIyumlmkwynvdXmZUlf6swkNRbuc6%2BdJ5sqHWmbtkaj4kXEXfbHjzlTB6vPOHsQxpjLGdXx5UXD%2FZLcn7keIdxE598ts6ww%2FLN5ToxZKmvPTcfDxu6hSpbalzDwQ1BVvHp6RrLJaSenTH1FCaeca8TCXVe6fWXDNswIFHLdoLrexc5HSavB0VYs%2Fi1KdvF0Mkh8wnGtwBbAcXMZdBH6M1QimZwt%2B2rpjbCK6GSCbjEdb6q5IFdokPZejWplaCI7SrzCZV45V%2FieXKElhSP9mCbfElAlohkaauidNCevMt9e1jgwLXoD%2Fernhgof9uViliKg8I%2FkcFy1R5zI%2FjUCduxl9bOVAt32cc8JE2sDuoLbFMtJLAa3pXBTADq1CmAzmSrwMu0OHjpIHBnVviKq66A1ejOmgi6GFBt0oC9DzDed4HAov6e2vT7Z9dpOJNIXjb1ilGV%2BxkJj5iHAdMzCM1%2FjABjqkAdOWQhayaGsuLIBom49ZaEEx9uEsX5dnulJr7Y%2Bv3yOrcIu9F3Bp5%2FrwtmSWFItWrDgyKLQDFW%2Ff2JPB67KYdMQ8rpUY2UF8DPA8lUBjwjqvrmDcuQ%2BzsuehA%2ByokuVB%2FHZSu%2FaOEgAB49HPs5JqJXmbRedSEjq1GZXwVMt6yxoJ%2BB1fflW%2BqUsfaNEt4S2ifRNdKIN4%2FQnJsaCTW2u7C%2F3VgfXk&X-Amz-Signature=553ada6ed4338ba3c2cea6a90f5d65d52fe15fbd5f73ccf41f976845746e1921&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDVTSUW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwa9BRUKkqq3WMRemaY92i%2BmB2CWBW7poGXyzlO1sDVwIhAOJmK3GEiG%2BILsENe3KXFSWqcCZpWlmy6ReKzDFPcae%2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tfnZ5ESqDbv%2BQXMq3AOkhZh%2FH6MHCO0LjY2NRNa5BIaeLl84qcyGoSHvwT%2FZNOnmmi9I%2Bzlz1CdzjB7xY8zEI8O3mSESz0cz1qXlF7K27aR9hcefmMRWIszCsDvgn3%2BU8%2F314Ba8o%2BS0Gyy%2FD4%2FdQkMkV9d3a0j12B4OElk5LEI%2BOjB5vZFsn5ktpSC%2BVIyumlmkwynvdXmZUlf6swkNRbuc6%2BdJ5sqHWmbtkaj4kXEXfbHjzlTB6vPOHsQxpjLGdXx5UXD%2FZLcn7keIdxE598ts6ww%2FLN5ToxZKmvPTcfDxu6hSpbalzDwQ1BVvHp6RrLJaSenTH1FCaeca8TCXVe6fWXDNswIFHLdoLrexc5HSavB0VYs%2Fi1KdvF0Mkh8wnGtwBbAcXMZdBH6M1QimZwt%2B2rpjbCK6GSCbjEdb6q5IFdokPZejWplaCI7SrzCZV45V%2FieXKElhSP9mCbfElAlohkaauidNCevMt9e1jgwLXoD%2Fernhgof9uViliKg8I%2FkcFy1R5zI%2FjUCduxl9bOVAt32cc8JE2sDuoLbFMtJLAa3pXBTADq1CmAzmSrwMu0OHjpIHBnVviKq66A1ejOmgi6GFBt0oC9DzDed4HAov6e2vT7Z9dpOJNIXjb1ilGV%2BxkJj5iHAdMzCM1%2FjABjqkAdOWQhayaGsuLIBom49ZaEEx9uEsX5dnulJr7Y%2Bv3yOrcIu9F3Bp5%2FrwtmSWFItWrDgyKLQDFW%2Ff2JPB67KYdMQ8rpUY2UF8DPA8lUBjwjqvrmDcuQ%2BzsuehA%2ByokuVB%2FHZSu%2FaOEgAB49HPs5JqJXmbRedSEjq1GZXwVMt6yxoJ%2BB1fflW%2BqUsfaNEt4S2ifRNdKIN4%2FQnJsaCTW2u7C%2F3VgfXk&X-Amz-Signature=825bd8cc02eec2a1e41ff3c6f6a7f11b732d5025b06f5c2c919cee2051d67ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDVTSUW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwa9BRUKkqq3WMRemaY92i%2BmB2CWBW7poGXyzlO1sDVwIhAOJmK3GEiG%2BILsENe3KXFSWqcCZpWlmy6ReKzDFPcae%2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tfnZ5ESqDbv%2BQXMq3AOkhZh%2FH6MHCO0LjY2NRNa5BIaeLl84qcyGoSHvwT%2FZNOnmmi9I%2Bzlz1CdzjB7xY8zEI8O3mSESz0cz1qXlF7K27aR9hcefmMRWIszCsDvgn3%2BU8%2F314Ba8o%2BS0Gyy%2FD4%2FdQkMkV9d3a0j12B4OElk5LEI%2BOjB5vZFsn5ktpSC%2BVIyumlmkwynvdXmZUlf6swkNRbuc6%2BdJ5sqHWmbtkaj4kXEXfbHjzlTB6vPOHsQxpjLGdXx5UXD%2FZLcn7keIdxE598ts6ww%2FLN5ToxZKmvPTcfDxu6hSpbalzDwQ1BVvHp6RrLJaSenTH1FCaeca8TCXVe6fWXDNswIFHLdoLrexc5HSavB0VYs%2Fi1KdvF0Mkh8wnGtwBbAcXMZdBH6M1QimZwt%2B2rpjbCK6GSCbjEdb6q5IFdokPZejWplaCI7SrzCZV45V%2FieXKElhSP9mCbfElAlohkaauidNCevMt9e1jgwLXoD%2Fernhgof9uViliKg8I%2FkcFy1R5zI%2FjUCduxl9bOVAt32cc8JE2sDuoLbFMtJLAa3pXBTADq1CmAzmSrwMu0OHjpIHBnVviKq66A1ejOmgi6GFBt0oC9DzDed4HAov6e2vT7Z9dpOJNIXjb1ilGV%2BxkJj5iHAdMzCM1%2FjABjqkAdOWQhayaGsuLIBom49ZaEEx9uEsX5dnulJr7Y%2Bv3yOrcIu9F3Bp5%2FrwtmSWFItWrDgyKLQDFW%2Ff2JPB67KYdMQ8rpUY2UF8DPA8lUBjwjqvrmDcuQ%2BzsuehA%2ByokuVB%2FHZSu%2FaOEgAB49HPs5JqJXmbRedSEjq1GZXwVMt6yxoJ%2BB1fflW%2BqUsfaNEt4S2ifRNdKIN4%2FQnJsaCTW2u7C%2F3VgfXk&X-Amz-Signature=d2d92b7b26deef8e72d05d9139fbb724139c67ac7374f41c1f4cf96856e652b2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDVTSUW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwa9BRUKkqq3WMRemaY92i%2BmB2CWBW7poGXyzlO1sDVwIhAOJmK3GEiG%2BILsENe3KXFSWqcCZpWlmy6ReKzDFPcae%2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tfnZ5ESqDbv%2BQXMq3AOkhZh%2FH6MHCO0LjY2NRNa5BIaeLl84qcyGoSHvwT%2FZNOnmmi9I%2Bzlz1CdzjB7xY8zEI8O3mSESz0cz1qXlF7K27aR9hcefmMRWIszCsDvgn3%2BU8%2F314Ba8o%2BS0Gyy%2FD4%2FdQkMkV9d3a0j12B4OElk5LEI%2BOjB5vZFsn5ktpSC%2BVIyumlmkwynvdXmZUlf6swkNRbuc6%2BdJ5sqHWmbtkaj4kXEXfbHjzlTB6vPOHsQxpjLGdXx5UXD%2FZLcn7keIdxE598ts6ww%2FLN5ToxZKmvPTcfDxu6hSpbalzDwQ1BVvHp6RrLJaSenTH1FCaeca8TCXVe6fWXDNswIFHLdoLrexc5HSavB0VYs%2Fi1KdvF0Mkh8wnGtwBbAcXMZdBH6M1QimZwt%2B2rpjbCK6GSCbjEdb6q5IFdokPZejWplaCI7SrzCZV45V%2FieXKElhSP9mCbfElAlohkaauidNCevMt9e1jgwLXoD%2Fernhgof9uViliKg8I%2FkcFy1R5zI%2FjUCduxl9bOVAt32cc8JE2sDuoLbFMtJLAa3pXBTADq1CmAzmSrwMu0OHjpIHBnVviKq66A1ejOmgi6GFBt0oC9DzDed4HAov6e2vT7Z9dpOJNIXjb1ilGV%2BxkJj5iHAdMzCM1%2FjABjqkAdOWQhayaGsuLIBom49ZaEEx9uEsX5dnulJr7Y%2Bv3yOrcIu9F3Bp5%2FrwtmSWFItWrDgyKLQDFW%2Ff2JPB67KYdMQ8rpUY2UF8DPA8lUBjwjqvrmDcuQ%2BzsuehA%2ByokuVB%2FHZSu%2FaOEgAB49HPs5JqJXmbRedSEjq1GZXwVMt6yxoJ%2BB1fflW%2BqUsfaNEt4S2ifRNdKIN4%2FQnJsaCTW2u7C%2F3VgfXk&X-Amz-Signature=5c9b5078c1dd2391be91c702026df05b82a270e63003963e6c7126e5e041760a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDVTSUW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwa9BRUKkqq3WMRemaY92i%2BmB2CWBW7poGXyzlO1sDVwIhAOJmK3GEiG%2BILsENe3KXFSWqcCZpWlmy6ReKzDFPcae%2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tfnZ5ESqDbv%2BQXMq3AOkhZh%2FH6MHCO0LjY2NRNa5BIaeLl84qcyGoSHvwT%2FZNOnmmi9I%2Bzlz1CdzjB7xY8zEI8O3mSESz0cz1qXlF7K27aR9hcefmMRWIszCsDvgn3%2BU8%2F314Ba8o%2BS0Gyy%2FD4%2FdQkMkV9d3a0j12B4OElk5LEI%2BOjB5vZFsn5ktpSC%2BVIyumlmkwynvdXmZUlf6swkNRbuc6%2BdJ5sqHWmbtkaj4kXEXfbHjzlTB6vPOHsQxpjLGdXx5UXD%2FZLcn7keIdxE598ts6ww%2FLN5ToxZKmvPTcfDxu6hSpbalzDwQ1BVvHp6RrLJaSenTH1FCaeca8TCXVe6fWXDNswIFHLdoLrexc5HSavB0VYs%2Fi1KdvF0Mkh8wnGtwBbAcXMZdBH6M1QimZwt%2B2rpjbCK6GSCbjEdb6q5IFdokPZejWplaCI7SrzCZV45V%2FieXKElhSP9mCbfElAlohkaauidNCevMt9e1jgwLXoD%2Fernhgof9uViliKg8I%2FkcFy1R5zI%2FjUCduxl9bOVAt32cc8JE2sDuoLbFMtJLAa3pXBTADq1CmAzmSrwMu0OHjpIHBnVviKq66A1ejOmgi6GFBt0oC9DzDed4HAov6e2vT7Z9dpOJNIXjb1ilGV%2BxkJj5iHAdMzCM1%2FjABjqkAdOWQhayaGsuLIBom49ZaEEx9uEsX5dnulJr7Y%2Bv3yOrcIu9F3Bp5%2FrwtmSWFItWrDgyKLQDFW%2Ff2JPB67KYdMQ8rpUY2UF8DPA8lUBjwjqvrmDcuQ%2BzsuehA%2ByokuVB%2FHZSu%2FaOEgAB49HPs5JqJXmbRedSEjq1GZXwVMt6yxoJ%2BB1fflW%2BqUsfaNEt4S2ifRNdKIN4%2FQnJsaCTW2u7C%2F3VgfXk&X-Amz-Signature=47c7a64fce2d66ba1c01af4edc83e5aa78cb75bd5cf1f8d2ba6ad7a23933dc29&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDVTSUW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwa9BRUKkqq3WMRemaY92i%2BmB2CWBW7poGXyzlO1sDVwIhAOJmK3GEiG%2BILsENe3KXFSWqcCZpWlmy6ReKzDFPcae%2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tfnZ5ESqDbv%2BQXMq3AOkhZh%2FH6MHCO0LjY2NRNa5BIaeLl84qcyGoSHvwT%2FZNOnmmi9I%2Bzlz1CdzjB7xY8zEI8O3mSESz0cz1qXlF7K27aR9hcefmMRWIszCsDvgn3%2BU8%2F314Ba8o%2BS0Gyy%2FD4%2FdQkMkV9d3a0j12B4OElk5LEI%2BOjB5vZFsn5ktpSC%2BVIyumlmkwynvdXmZUlf6swkNRbuc6%2BdJ5sqHWmbtkaj4kXEXfbHjzlTB6vPOHsQxpjLGdXx5UXD%2FZLcn7keIdxE598ts6ww%2FLN5ToxZKmvPTcfDxu6hSpbalzDwQ1BVvHp6RrLJaSenTH1FCaeca8TCXVe6fWXDNswIFHLdoLrexc5HSavB0VYs%2Fi1KdvF0Mkh8wnGtwBbAcXMZdBH6M1QimZwt%2B2rpjbCK6GSCbjEdb6q5IFdokPZejWplaCI7SrzCZV45V%2FieXKElhSP9mCbfElAlohkaauidNCevMt9e1jgwLXoD%2Fernhgof9uViliKg8I%2FkcFy1R5zI%2FjUCduxl9bOVAt32cc8JE2sDuoLbFMtJLAa3pXBTADq1CmAzmSrwMu0OHjpIHBnVviKq66A1ejOmgi6GFBt0oC9DzDed4HAov6e2vT7Z9dpOJNIXjb1ilGV%2BxkJj5iHAdMzCM1%2FjABjqkAdOWQhayaGsuLIBom49ZaEEx9uEsX5dnulJr7Y%2Bv3yOrcIu9F3Bp5%2FrwtmSWFItWrDgyKLQDFW%2Ff2JPB67KYdMQ8rpUY2UF8DPA8lUBjwjqvrmDcuQ%2BzsuehA%2ByokuVB%2FHZSu%2FaOEgAB49HPs5JqJXmbRedSEjq1GZXwVMt6yxoJ%2BB1fflW%2BqUsfaNEt4S2ifRNdKIN4%2FQnJsaCTW2u7C%2F3VgfXk&X-Amz-Signature=dee500308deccaad8ada3d1ad2a4cd3e678a564da4d9a39ff23809453939315e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
