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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAJM2XW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7jtg4LP%2BQgX6NyOLX6FNz%2BEHi4DHdh3mP7QyiKxNKMAiEA4VWzUMvkiWK7VdOGkLQ8zJvK1sgS2hPddY3ReSqcppgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMXm9GtzrbW4ZxFUKyrcAzq7gbreoz7wEsIS9fWo6SxV83E%2F8%2B1c5SSwlLTnHMSAnewVk73uEbceIa95GBNGNh0h%2BDFeJb1CbgrTCP4ZqUKVEPgjyx3Jsr7LEF0ZuAGdLMLrefNd%2BsplP5LVITujn0Ae%2Bc47f%2B5vNZ1Kho5nQfPYoVSOLtk4p0cgixUH%2BeAqAnM2ZOb4tcRWxibw1qF7K1es8QVjNqkUL1VpX3MPP5vAedGIB4gkRaKEeg7UuCY7UfCoWwZyWzSlZlvxJDZZegWT2ME8WsFsvRTZuUGlOo1jBGMQhkDzDJ9fpYtFgz2g7gRZapLrd9rx9tk%2B1qvxPUmgh73kodxUfV%2BEQFb2Ozx7YYzPHt0NpwqD27amRRBYgiYFDLELE67WowPyLa8znUFX4YFYVyCl4OJRT1Cy%2F5iQI%2BeJAeklOlaKin9CmkBlzPPDH2JbUgn1jPARMicctNp81OKcQoKecDkT5%2BFHJCZGK8JokUJawEguucEbvjqZV5suMqlbs09yGdyf%2BeFseb%2F2jRVcfDBPyxyGCEIIdc3Hk0uYe%2BmcSVryqveC%2F%2FTm6Za%2BCevxD9k%2BlqKNu6NKeDSrSqX2MVEIxAuYeKgSjwx2F7A%2F06cRxIWuh9dNyb0UwwrCaTF7Ro0X%2Fq78MLuYjL8GOqUBCz%2BWIuaMK06H9EVmRVszsh%2Br8AUMauAXLGnEd2IUhKidKsbbY32LAdZQdSRZ3ctOu%2BoOneq%2Bgu4XBmbiC9a3d4MAr8wj4yZqWzZH6KiKc78mx%2Bx%2BWFKJXnS66y%2BMnsV8KxnAEOmzyGpuChg4NS7OAcNIsNgNe6pvOtJOs6i%2BIr%2BoMeNcbQnX5%2BYuevzbe3jKsgqDY8%2BTk%2F9U5DJ6O9touMcPBYP8&X-Amz-Signature=b6e6a10ab8856eda01fc6b88eef50ed62e009497765a98ba758d84e24aa0270b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAJM2XW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7jtg4LP%2BQgX6NyOLX6FNz%2BEHi4DHdh3mP7QyiKxNKMAiEA4VWzUMvkiWK7VdOGkLQ8zJvK1sgS2hPddY3ReSqcppgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMXm9GtzrbW4ZxFUKyrcAzq7gbreoz7wEsIS9fWo6SxV83E%2F8%2B1c5SSwlLTnHMSAnewVk73uEbceIa95GBNGNh0h%2BDFeJb1CbgrTCP4ZqUKVEPgjyx3Jsr7LEF0ZuAGdLMLrefNd%2BsplP5LVITujn0Ae%2Bc47f%2B5vNZ1Kho5nQfPYoVSOLtk4p0cgixUH%2BeAqAnM2ZOb4tcRWxibw1qF7K1es8QVjNqkUL1VpX3MPP5vAedGIB4gkRaKEeg7UuCY7UfCoWwZyWzSlZlvxJDZZegWT2ME8WsFsvRTZuUGlOo1jBGMQhkDzDJ9fpYtFgz2g7gRZapLrd9rx9tk%2B1qvxPUmgh73kodxUfV%2BEQFb2Ozx7YYzPHt0NpwqD27amRRBYgiYFDLELE67WowPyLa8znUFX4YFYVyCl4OJRT1Cy%2F5iQI%2BeJAeklOlaKin9CmkBlzPPDH2JbUgn1jPARMicctNp81OKcQoKecDkT5%2BFHJCZGK8JokUJawEguucEbvjqZV5suMqlbs09yGdyf%2BeFseb%2F2jRVcfDBPyxyGCEIIdc3Hk0uYe%2BmcSVryqveC%2F%2FTm6Za%2BCevxD9k%2BlqKNu6NKeDSrSqX2MVEIxAuYeKgSjwx2F7A%2F06cRxIWuh9dNyb0UwwrCaTF7Ro0X%2Fq78MLuYjL8GOqUBCz%2BWIuaMK06H9EVmRVszsh%2Br8AUMauAXLGnEd2IUhKidKsbbY32LAdZQdSRZ3ctOu%2BoOneq%2Bgu4XBmbiC9a3d4MAr8wj4yZqWzZH6KiKc78mx%2Bx%2BWFKJXnS66y%2BMnsV8KxnAEOmzyGpuChg4NS7OAcNIsNgNe6pvOtJOs6i%2BIr%2BoMeNcbQnX5%2BYuevzbe3jKsgqDY8%2BTk%2F9U5DJ6O9touMcPBYP8&X-Amz-Signature=b6f5bcf5540af1c54eeecbcfae5a340e16235bf5862becfb5f22a2a43a014f69&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAJM2XW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7jtg4LP%2BQgX6NyOLX6FNz%2BEHi4DHdh3mP7QyiKxNKMAiEA4VWzUMvkiWK7VdOGkLQ8zJvK1sgS2hPddY3ReSqcppgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMXm9GtzrbW4ZxFUKyrcAzq7gbreoz7wEsIS9fWo6SxV83E%2F8%2B1c5SSwlLTnHMSAnewVk73uEbceIa95GBNGNh0h%2BDFeJb1CbgrTCP4ZqUKVEPgjyx3Jsr7LEF0ZuAGdLMLrefNd%2BsplP5LVITujn0Ae%2Bc47f%2B5vNZ1Kho5nQfPYoVSOLtk4p0cgixUH%2BeAqAnM2ZOb4tcRWxibw1qF7K1es8QVjNqkUL1VpX3MPP5vAedGIB4gkRaKEeg7UuCY7UfCoWwZyWzSlZlvxJDZZegWT2ME8WsFsvRTZuUGlOo1jBGMQhkDzDJ9fpYtFgz2g7gRZapLrd9rx9tk%2B1qvxPUmgh73kodxUfV%2BEQFb2Ozx7YYzPHt0NpwqD27amRRBYgiYFDLELE67WowPyLa8znUFX4YFYVyCl4OJRT1Cy%2F5iQI%2BeJAeklOlaKin9CmkBlzPPDH2JbUgn1jPARMicctNp81OKcQoKecDkT5%2BFHJCZGK8JokUJawEguucEbvjqZV5suMqlbs09yGdyf%2BeFseb%2F2jRVcfDBPyxyGCEIIdc3Hk0uYe%2BmcSVryqveC%2F%2FTm6Za%2BCevxD9k%2BlqKNu6NKeDSrSqX2MVEIxAuYeKgSjwx2F7A%2F06cRxIWuh9dNyb0UwwrCaTF7Ro0X%2Fq78MLuYjL8GOqUBCz%2BWIuaMK06H9EVmRVszsh%2Br8AUMauAXLGnEd2IUhKidKsbbY32LAdZQdSRZ3ctOu%2BoOneq%2Bgu4XBmbiC9a3d4MAr8wj4yZqWzZH6KiKc78mx%2Bx%2BWFKJXnS66y%2BMnsV8KxnAEOmzyGpuChg4NS7OAcNIsNgNe6pvOtJOs6i%2BIr%2BoMeNcbQnX5%2BYuevzbe3jKsgqDY8%2BTk%2F9U5DJ6O9touMcPBYP8&X-Amz-Signature=de7ae03331349c7c16641809616f18592e259b4b8e24cb8320ea6bd82fe1e2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAJM2XW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7jtg4LP%2BQgX6NyOLX6FNz%2BEHi4DHdh3mP7QyiKxNKMAiEA4VWzUMvkiWK7VdOGkLQ8zJvK1sgS2hPddY3ReSqcppgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMXm9GtzrbW4ZxFUKyrcAzq7gbreoz7wEsIS9fWo6SxV83E%2F8%2B1c5SSwlLTnHMSAnewVk73uEbceIa95GBNGNh0h%2BDFeJb1CbgrTCP4ZqUKVEPgjyx3Jsr7LEF0ZuAGdLMLrefNd%2BsplP5LVITujn0Ae%2Bc47f%2B5vNZ1Kho5nQfPYoVSOLtk4p0cgixUH%2BeAqAnM2ZOb4tcRWxibw1qF7K1es8QVjNqkUL1VpX3MPP5vAedGIB4gkRaKEeg7UuCY7UfCoWwZyWzSlZlvxJDZZegWT2ME8WsFsvRTZuUGlOo1jBGMQhkDzDJ9fpYtFgz2g7gRZapLrd9rx9tk%2B1qvxPUmgh73kodxUfV%2BEQFb2Ozx7YYzPHt0NpwqD27amRRBYgiYFDLELE67WowPyLa8znUFX4YFYVyCl4OJRT1Cy%2F5iQI%2BeJAeklOlaKin9CmkBlzPPDH2JbUgn1jPARMicctNp81OKcQoKecDkT5%2BFHJCZGK8JokUJawEguucEbvjqZV5suMqlbs09yGdyf%2BeFseb%2F2jRVcfDBPyxyGCEIIdc3Hk0uYe%2BmcSVryqveC%2F%2FTm6Za%2BCevxD9k%2BlqKNu6NKeDSrSqX2MVEIxAuYeKgSjwx2F7A%2F06cRxIWuh9dNyb0UwwrCaTF7Ro0X%2Fq78MLuYjL8GOqUBCz%2BWIuaMK06H9EVmRVszsh%2Br8AUMauAXLGnEd2IUhKidKsbbY32LAdZQdSRZ3ctOu%2BoOneq%2Bgu4XBmbiC9a3d4MAr8wj4yZqWzZH6KiKc78mx%2Bx%2BWFKJXnS66y%2BMnsV8KxnAEOmzyGpuChg4NS7OAcNIsNgNe6pvOtJOs6i%2BIr%2BoMeNcbQnX5%2BYuevzbe3jKsgqDY8%2BTk%2F9U5DJ6O9touMcPBYP8&X-Amz-Signature=95309f86445f673eb24683d50812259e0c9e9fd724c75fa5d4ee68f7c5ccfc79&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAJM2XW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7jtg4LP%2BQgX6NyOLX6FNz%2BEHi4DHdh3mP7QyiKxNKMAiEA4VWzUMvkiWK7VdOGkLQ8zJvK1sgS2hPddY3ReSqcppgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMXm9GtzrbW4ZxFUKyrcAzq7gbreoz7wEsIS9fWo6SxV83E%2F8%2B1c5SSwlLTnHMSAnewVk73uEbceIa95GBNGNh0h%2BDFeJb1CbgrTCP4ZqUKVEPgjyx3Jsr7LEF0ZuAGdLMLrefNd%2BsplP5LVITujn0Ae%2Bc47f%2B5vNZ1Kho5nQfPYoVSOLtk4p0cgixUH%2BeAqAnM2ZOb4tcRWxibw1qF7K1es8QVjNqkUL1VpX3MPP5vAedGIB4gkRaKEeg7UuCY7UfCoWwZyWzSlZlvxJDZZegWT2ME8WsFsvRTZuUGlOo1jBGMQhkDzDJ9fpYtFgz2g7gRZapLrd9rx9tk%2B1qvxPUmgh73kodxUfV%2BEQFb2Ozx7YYzPHt0NpwqD27amRRBYgiYFDLELE67WowPyLa8znUFX4YFYVyCl4OJRT1Cy%2F5iQI%2BeJAeklOlaKin9CmkBlzPPDH2JbUgn1jPARMicctNp81OKcQoKecDkT5%2BFHJCZGK8JokUJawEguucEbvjqZV5suMqlbs09yGdyf%2BeFseb%2F2jRVcfDBPyxyGCEIIdc3Hk0uYe%2BmcSVryqveC%2F%2FTm6Za%2BCevxD9k%2BlqKNu6NKeDSrSqX2MVEIxAuYeKgSjwx2F7A%2F06cRxIWuh9dNyb0UwwrCaTF7Ro0X%2Fq78MLuYjL8GOqUBCz%2BWIuaMK06H9EVmRVszsh%2Br8AUMauAXLGnEd2IUhKidKsbbY32LAdZQdSRZ3ctOu%2BoOneq%2Bgu4XBmbiC9a3d4MAr8wj4yZqWzZH6KiKc78mx%2Bx%2BWFKJXnS66y%2BMnsV8KxnAEOmzyGpuChg4NS7OAcNIsNgNe6pvOtJOs6i%2BIr%2BoMeNcbQnX5%2BYuevzbe3jKsgqDY8%2BTk%2F9U5DJ6O9touMcPBYP8&X-Amz-Signature=91b4e2e81d8ba4447ab9f9d36c9ab4ca75e1cca015c4a1873276d48e90c17320&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAJM2XW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7jtg4LP%2BQgX6NyOLX6FNz%2BEHi4DHdh3mP7QyiKxNKMAiEA4VWzUMvkiWK7VdOGkLQ8zJvK1sgS2hPddY3ReSqcppgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMXm9GtzrbW4ZxFUKyrcAzq7gbreoz7wEsIS9fWo6SxV83E%2F8%2B1c5SSwlLTnHMSAnewVk73uEbceIa95GBNGNh0h%2BDFeJb1CbgrTCP4ZqUKVEPgjyx3Jsr7LEF0ZuAGdLMLrefNd%2BsplP5LVITujn0Ae%2Bc47f%2B5vNZ1Kho5nQfPYoVSOLtk4p0cgixUH%2BeAqAnM2ZOb4tcRWxibw1qF7K1es8QVjNqkUL1VpX3MPP5vAedGIB4gkRaKEeg7UuCY7UfCoWwZyWzSlZlvxJDZZegWT2ME8WsFsvRTZuUGlOo1jBGMQhkDzDJ9fpYtFgz2g7gRZapLrd9rx9tk%2B1qvxPUmgh73kodxUfV%2BEQFb2Ozx7YYzPHt0NpwqD27amRRBYgiYFDLELE67WowPyLa8znUFX4YFYVyCl4OJRT1Cy%2F5iQI%2BeJAeklOlaKin9CmkBlzPPDH2JbUgn1jPARMicctNp81OKcQoKecDkT5%2BFHJCZGK8JokUJawEguucEbvjqZV5suMqlbs09yGdyf%2BeFseb%2F2jRVcfDBPyxyGCEIIdc3Hk0uYe%2BmcSVryqveC%2F%2FTm6Za%2BCevxD9k%2BlqKNu6NKeDSrSqX2MVEIxAuYeKgSjwx2F7A%2F06cRxIWuh9dNyb0UwwrCaTF7Ro0X%2Fq78MLuYjL8GOqUBCz%2BWIuaMK06H9EVmRVszsh%2Br8AUMauAXLGnEd2IUhKidKsbbY32LAdZQdSRZ3ctOu%2BoOneq%2Bgu4XBmbiC9a3d4MAr8wj4yZqWzZH6KiKc78mx%2Bx%2BWFKJXnS66y%2BMnsV8KxnAEOmzyGpuChg4NS7OAcNIsNgNe6pvOtJOs6i%2BIr%2BoMeNcbQnX5%2BYuevzbe3jKsgqDY8%2BTk%2F9U5DJ6O9touMcPBYP8&X-Amz-Signature=3de7ae8881cdc406b9945b6f4a5e82f6699245a01047048b3a851ebc8d59ce04&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAJM2XW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7jtg4LP%2BQgX6NyOLX6FNz%2BEHi4DHdh3mP7QyiKxNKMAiEA4VWzUMvkiWK7VdOGkLQ8zJvK1sgS2hPddY3ReSqcppgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMXm9GtzrbW4ZxFUKyrcAzq7gbreoz7wEsIS9fWo6SxV83E%2F8%2B1c5SSwlLTnHMSAnewVk73uEbceIa95GBNGNh0h%2BDFeJb1CbgrTCP4ZqUKVEPgjyx3Jsr7LEF0ZuAGdLMLrefNd%2BsplP5LVITujn0Ae%2Bc47f%2B5vNZ1Kho5nQfPYoVSOLtk4p0cgixUH%2BeAqAnM2ZOb4tcRWxibw1qF7K1es8QVjNqkUL1VpX3MPP5vAedGIB4gkRaKEeg7UuCY7UfCoWwZyWzSlZlvxJDZZegWT2ME8WsFsvRTZuUGlOo1jBGMQhkDzDJ9fpYtFgz2g7gRZapLrd9rx9tk%2B1qvxPUmgh73kodxUfV%2BEQFb2Ozx7YYzPHt0NpwqD27amRRBYgiYFDLELE67WowPyLa8znUFX4YFYVyCl4OJRT1Cy%2F5iQI%2BeJAeklOlaKin9CmkBlzPPDH2JbUgn1jPARMicctNp81OKcQoKecDkT5%2BFHJCZGK8JokUJawEguucEbvjqZV5suMqlbs09yGdyf%2BeFseb%2F2jRVcfDBPyxyGCEIIdc3Hk0uYe%2BmcSVryqveC%2F%2FTm6Za%2BCevxD9k%2BlqKNu6NKeDSrSqX2MVEIxAuYeKgSjwx2F7A%2F06cRxIWuh9dNyb0UwwrCaTF7Ro0X%2Fq78MLuYjL8GOqUBCz%2BWIuaMK06H9EVmRVszsh%2Br8AUMauAXLGnEd2IUhKidKsbbY32LAdZQdSRZ3ctOu%2BoOneq%2Bgu4XBmbiC9a3d4MAr8wj4yZqWzZH6KiKc78mx%2Bx%2BWFKJXnS66y%2BMnsV8KxnAEOmzyGpuChg4NS7OAcNIsNgNe6pvOtJOs6i%2BIr%2BoMeNcbQnX5%2BYuevzbe3jKsgqDY8%2BTk%2F9U5DJ6O9touMcPBYP8&X-Amz-Signature=813f29b0e53f561b624b533afafe2f7cf26fb5756051976f77a9ef66e4520e45&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
