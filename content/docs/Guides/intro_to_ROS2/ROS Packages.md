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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEW7RZ4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCyT%2Br51E72s4Qt30TDLq7q1D0S%2B3gmgYzbr1VxSrDcPQIgHVG2SfdPbeXMX6MTJ9VH4tHZgRN%2FJhSvh5iPxvEyU2cqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRC%2BmtWJ4fe1MLZzCrcA4oddGo3Yhr6NdH3ZxgDEZ3RysIWVArV1gSUBOfPLZSD8nmRqBKnv03OMAhCReUunwCfyPGxX5%2BWQlvAG27iZvECNFdVA1jIUue8BLy0l9cnpLJK%2BfyC%2F%2Bm53Jn6SoKio6Vbwsvd5UqVlWhyQC1jCyXycOVT2GhfQ63B0bzZ5zo6cLbAXrUNnn8SeSXd3hxhz0q3Lc8V8MJ9F3tHI9Z4SDImsxHhcUQO5HOIKKC4h1axekrnO5Yu1R5h4XzfhC03wy%2BBZx6t06r3z4kp7yRuOB6XhXtX3VxIBJ9yQQUYA55LkmaOrh6pH5QCzUdTStV4lcJMzAA52H9Bn6dj%2BcSxk6zBnNp9lwP5ojMr5J5WKh9ol4VyLGz2hAlW2lXGHpxO6tVQLYVCDEPnjdmlXz%2FyHQSdGP0C%2BfZ88S22xvkhuWGKWZWNGR0Tc9g%2BDvFe6sdfIeorXmUqUifgYbvlDnBOzkBcvOuQwaZ%2Bs7L3hZ1rqwhfUZSf%2BqHICmPRDYxGO%2BP0T54gJ3XO7k3P3eQm1SOrM4%2B3YCCyadH8wDN3kYTB8BYdu4G8PO1n8W2bHAJsSldwUjaAYKGiicOOiXPkBgVYGtJya3cL0XEmO35eXbpjpzUyJhVxQAlBQm%2FDuOCXML%2BkxsAGOqUB4Z2QfF41np%2FxYTA9OgNdiMP32AouThZ0RYfKPB37xPq3jr85G2KMrXxzJIbiVfTLn99CDnI6Qv7w5w%2BYdoHTyhBTw%2FQ8%2FkvVAkKVj0jujxy41cZKgEVnUlJTfTsqwnaU4FVwNBFe6N%2BR2mmXvyLOOtjE203Mw%2BbX0BeWJKmoF0KiJUb8AePbk2Wpd9vuaZ4n1tD2xE9uOekGoucri2%2Baivfd4fkk&X-Amz-Signature=a30b21fc327dcbc945bd42a57e81570e3c7cf74780a06bfcfd1634b0d3adcb4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEW7RZ4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCyT%2Br51E72s4Qt30TDLq7q1D0S%2B3gmgYzbr1VxSrDcPQIgHVG2SfdPbeXMX6MTJ9VH4tHZgRN%2FJhSvh5iPxvEyU2cqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRC%2BmtWJ4fe1MLZzCrcA4oddGo3Yhr6NdH3ZxgDEZ3RysIWVArV1gSUBOfPLZSD8nmRqBKnv03OMAhCReUunwCfyPGxX5%2BWQlvAG27iZvECNFdVA1jIUue8BLy0l9cnpLJK%2BfyC%2F%2Bm53Jn6SoKio6Vbwsvd5UqVlWhyQC1jCyXycOVT2GhfQ63B0bzZ5zo6cLbAXrUNnn8SeSXd3hxhz0q3Lc8V8MJ9F3tHI9Z4SDImsxHhcUQO5HOIKKC4h1axekrnO5Yu1R5h4XzfhC03wy%2BBZx6t06r3z4kp7yRuOB6XhXtX3VxIBJ9yQQUYA55LkmaOrh6pH5QCzUdTStV4lcJMzAA52H9Bn6dj%2BcSxk6zBnNp9lwP5ojMr5J5WKh9ol4VyLGz2hAlW2lXGHpxO6tVQLYVCDEPnjdmlXz%2FyHQSdGP0C%2BfZ88S22xvkhuWGKWZWNGR0Tc9g%2BDvFe6sdfIeorXmUqUifgYbvlDnBOzkBcvOuQwaZ%2Bs7L3hZ1rqwhfUZSf%2BqHICmPRDYxGO%2BP0T54gJ3XO7k3P3eQm1SOrM4%2B3YCCyadH8wDN3kYTB8BYdu4G8PO1n8W2bHAJsSldwUjaAYKGiicOOiXPkBgVYGtJya3cL0XEmO35eXbpjpzUyJhVxQAlBQm%2FDuOCXML%2BkxsAGOqUB4Z2QfF41np%2FxYTA9OgNdiMP32AouThZ0RYfKPB37xPq3jr85G2KMrXxzJIbiVfTLn99CDnI6Qv7w5w%2BYdoHTyhBTw%2FQ8%2FkvVAkKVj0jujxy41cZKgEVnUlJTfTsqwnaU4FVwNBFe6N%2BR2mmXvyLOOtjE203Mw%2BbX0BeWJKmoF0KiJUb8AePbk2Wpd9vuaZ4n1tD2xE9uOekGoucri2%2Baivfd4fkk&X-Amz-Signature=7106fc45b637a023087eeeb2c2054bcff3f634d835bbd5abdacb0f30fa932b73&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEW7RZ4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCyT%2Br51E72s4Qt30TDLq7q1D0S%2B3gmgYzbr1VxSrDcPQIgHVG2SfdPbeXMX6MTJ9VH4tHZgRN%2FJhSvh5iPxvEyU2cqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRC%2BmtWJ4fe1MLZzCrcA4oddGo3Yhr6NdH3ZxgDEZ3RysIWVArV1gSUBOfPLZSD8nmRqBKnv03OMAhCReUunwCfyPGxX5%2BWQlvAG27iZvECNFdVA1jIUue8BLy0l9cnpLJK%2BfyC%2F%2Bm53Jn6SoKio6Vbwsvd5UqVlWhyQC1jCyXycOVT2GhfQ63B0bzZ5zo6cLbAXrUNnn8SeSXd3hxhz0q3Lc8V8MJ9F3tHI9Z4SDImsxHhcUQO5HOIKKC4h1axekrnO5Yu1R5h4XzfhC03wy%2BBZx6t06r3z4kp7yRuOB6XhXtX3VxIBJ9yQQUYA55LkmaOrh6pH5QCzUdTStV4lcJMzAA52H9Bn6dj%2BcSxk6zBnNp9lwP5ojMr5J5WKh9ol4VyLGz2hAlW2lXGHpxO6tVQLYVCDEPnjdmlXz%2FyHQSdGP0C%2BfZ88S22xvkhuWGKWZWNGR0Tc9g%2BDvFe6sdfIeorXmUqUifgYbvlDnBOzkBcvOuQwaZ%2Bs7L3hZ1rqwhfUZSf%2BqHICmPRDYxGO%2BP0T54gJ3XO7k3P3eQm1SOrM4%2B3YCCyadH8wDN3kYTB8BYdu4G8PO1n8W2bHAJsSldwUjaAYKGiicOOiXPkBgVYGtJya3cL0XEmO35eXbpjpzUyJhVxQAlBQm%2FDuOCXML%2BkxsAGOqUB4Z2QfF41np%2FxYTA9OgNdiMP32AouThZ0RYfKPB37xPq3jr85G2KMrXxzJIbiVfTLn99CDnI6Qv7w5w%2BYdoHTyhBTw%2FQ8%2FkvVAkKVj0jujxy41cZKgEVnUlJTfTsqwnaU4FVwNBFe6N%2BR2mmXvyLOOtjE203Mw%2BbX0BeWJKmoF0KiJUb8AePbk2Wpd9vuaZ4n1tD2xE9uOekGoucri2%2Baivfd4fkk&X-Amz-Signature=70c972637e146c81ca2968d5730afd060289e41cebab7cca6361711d430300be&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEW7RZ4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCyT%2Br51E72s4Qt30TDLq7q1D0S%2B3gmgYzbr1VxSrDcPQIgHVG2SfdPbeXMX6MTJ9VH4tHZgRN%2FJhSvh5iPxvEyU2cqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRC%2BmtWJ4fe1MLZzCrcA4oddGo3Yhr6NdH3ZxgDEZ3RysIWVArV1gSUBOfPLZSD8nmRqBKnv03OMAhCReUunwCfyPGxX5%2BWQlvAG27iZvECNFdVA1jIUue8BLy0l9cnpLJK%2BfyC%2F%2Bm53Jn6SoKio6Vbwsvd5UqVlWhyQC1jCyXycOVT2GhfQ63B0bzZ5zo6cLbAXrUNnn8SeSXd3hxhz0q3Lc8V8MJ9F3tHI9Z4SDImsxHhcUQO5HOIKKC4h1axekrnO5Yu1R5h4XzfhC03wy%2BBZx6t06r3z4kp7yRuOB6XhXtX3VxIBJ9yQQUYA55LkmaOrh6pH5QCzUdTStV4lcJMzAA52H9Bn6dj%2BcSxk6zBnNp9lwP5ojMr5J5WKh9ol4VyLGz2hAlW2lXGHpxO6tVQLYVCDEPnjdmlXz%2FyHQSdGP0C%2BfZ88S22xvkhuWGKWZWNGR0Tc9g%2BDvFe6sdfIeorXmUqUifgYbvlDnBOzkBcvOuQwaZ%2Bs7L3hZ1rqwhfUZSf%2BqHICmPRDYxGO%2BP0T54gJ3XO7k3P3eQm1SOrM4%2B3YCCyadH8wDN3kYTB8BYdu4G8PO1n8W2bHAJsSldwUjaAYKGiicOOiXPkBgVYGtJya3cL0XEmO35eXbpjpzUyJhVxQAlBQm%2FDuOCXML%2BkxsAGOqUB4Z2QfF41np%2FxYTA9OgNdiMP32AouThZ0RYfKPB37xPq3jr85G2KMrXxzJIbiVfTLn99CDnI6Qv7w5w%2BYdoHTyhBTw%2FQ8%2FkvVAkKVj0jujxy41cZKgEVnUlJTfTsqwnaU4FVwNBFe6N%2BR2mmXvyLOOtjE203Mw%2BbX0BeWJKmoF0KiJUb8AePbk2Wpd9vuaZ4n1tD2xE9uOekGoucri2%2Baivfd4fkk&X-Amz-Signature=9e3d2b8d6da58f266b28dd8c135489548ecb4ff3bbe158e0f768c40532815671&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEW7RZ4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCyT%2Br51E72s4Qt30TDLq7q1D0S%2B3gmgYzbr1VxSrDcPQIgHVG2SfdPbeXMX6MTJ9VH4tHZgRN%2FJhSvh5iPxvEyU2cqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRC%2BmtWJ4fe1MLZzCrcA4oddGo3Yhr6NdH3ZxgDEZ3RysIWVArV1gSUBOfPLZSD8nmRqBKnv03OMAhCReUunwCfyPGxX5%2BWQlvAG27iZvECNFdVA1jIUue8BLy0l9cnpLJK%2BfyC%2F%2Bm53Jn6SoKio6Vbwsvd5UqVlWhyQC1jCyXycOVT2GhfQ63B0bzZ5zo6cLbAXrUNnn8SeSXd3hxhz0q3Lc8V8MJ9F3tHI9Z4SDImsxHhcUQO5HOIKKC4h1axekrnO5Yu1R5h4XzfhC03wy%2BBZx6t06r3z4kp7yRuOB6XhXtX3VxIBJ9yQQUYA55LkmaOrh6pH5QCzUdTStV4lcJMzAA52H9Bn6dj%2BcSxk6zBnNp9lwP5ojMr5J5WKh9ol4VyLGz2hAlW2lXGHpxO6tVQLYVCDEPnjdmlXz%2FyHQSdGP0C%2BfZ88S22xvkhuWGKWZWNGR0Tc9g%2BDvFe6sdfIeorXmUqUifgYbvlDnBOzkBcvOuQwaZ%2Bs7L3hZ1rqwhfUZSf%2BqHICmPRDYxGO%2BP0T54gJ3XO7k3P3eQm1SOrM4%2B3YCCyadH8wDN3kYTB8BYdu4G8PO1n8W2bHAJsSldwUjaAYKGiicOOiXPkBgVYGtJya3cL0XEmO35eXbpjpzUyJhVxQAlBQm%2FDuOCXML%2BkxsAGOqUB4Z2QfF41np%2FxYTA9OgNdiMP32AouThZ0RYfKPB37xPq3jr85G2KMrXxzJIbiVfTLn99CDnI6Qv7w5w%2BYdoHTyhBTw%2FQ8%2FkvVAkKVj0jujxy41cZKgEVnUlJTfTsqwnaU4FVwNBFe6N%2BR2mmXvyLOOtjE203Mw%2BbX0BeWJKmoF0KiJUb8AePbk2Wpd9vuaZ4n1tD2xE9uOekGoucri2%2Baivfd4fkk&X-Amz-Signature=0048dd2e0d8bacc93991fb04874a0025e2703906b273de7313f729876abbea6c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEW7RZ4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCyT%2Br51E72s4Qt30TDLq7q1D0S%2B3gmgYzbr1VxSrDcPQIgHVG2SfdPbeXMX6MTJ9VH4tHZgRN%2FJhSvh5iPxvEyU2cqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRC%2BmtWJ4fe1MLZzCrcA4oddGo3Yhr6NdH3ZxgDEZ3RysIWVArV1gSUBOfPLZSD8nmRqBKnv03OMAhCReUunwCfyPGxX5%2BWQlvAG27iZvECNFdVA1jIUue8BLy0l9cnpLJK%2BfyC%2F%2Bm53Jn6SoKio6Vbwsvd5UqVlWhyQC1jCyXycOVT2GhfQ63B0bzZ5zo6cLbAXrUNnn8SeSXd3hxhz0q3Lc8V8MJ9F3tHI9Z4SDImsxHhcUQO5HOIKKC4h1axekrnO5Yu1R5h4XzfhC03wy%2BBZx6t06r3z4kp7yRuOB6XhXtX3VxIBJ9yQQUYA55LkmaOrh6pH5QCzUdTStV4lcJMzAA52H9Bn6dj%2BcSxk6zBnNp9lwP5ojMr5J5WKh9ol4VyLGz2hAlW2lXGHpxO6tVQLYVCDEPnjdmlXz%2FyHQSdGP0C%2BfZ88S22xvkhuWGKWZWNGR0Tc9g%2BDvFe6sdfIeorXmUqUifgYbvlDnBOzkBcvOuQwaZ%2Bs7L3hZ1rqwhfUZSf%2BqHICmPRDYxGO%2BP0T54gJ3XO7k3P3eQm1SOrM4%2B3YCCyadH8wDN3kYTB8BYdu4G8PO1n8W2bHAJsSldwUjaAYKGiicOOiXPkBgVYGtJya3cL0XEmO35eXbpjpzUyJhVxQAlBQm%2FDuOCXML%2BkxsAGOqUB4Z2QfF41np%2FxYTA9OgNdiMP32AouThZ0RYfKPB37xPq3jr85G2KMrXxzJIbiVfTLn99CDnI6Qv7w5w%2BYdoHTyhBTw%2FQ8%2FkvVAkKVj0jujxy41cZKgEVnUlJTfTsqwnaU4FVwNBFe6N%2BR2mmXvyLOOtjE203Mw%2BbX0BeWJKmoF0KiJUb8AePbk2Wpd9vuaZ4n1tD2xE9uOekGoucri2%2Baivfd4fkk&X-Amz-Signature=9da845e82878e7f7b1df32ba914a5838f69d896c4947a158bf371d975473496f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEW7RZ4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCyT%2Br51E72s4Qt30TDLq7q1D0S%2B3gmgYzbr1VxSrDcPQIgHVG2SfdPbeXMX6MTJ9VH4tHZgRN%2FJhSvh5iPxvEyU2cqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRC%2BmtWJ4fe1MLZzCrcA4oddGo3Yhr6NdH3ZxgDEZ3RysIWVArV1gSUBOfPLZSD8nmRqBKnv03OMAhCReUunwCfyPGxX5%2BWQlvAG27iZvECNFdVA1jIUue8BLy0l9cnpLJK%2BfyC%2F%2Bm53Jn6SoKio6Vbwsvd5UqVlWhyQC1jCyXycOVT2GhfQ63B0bzZ5zo6cLbAXrUNnn8SeSXd3hxhz0q3Lc8V8MJ9F3tHI9Z4SDImsxHhcUQO5HOIKKC4h1axekrnO5Yu1R5h4XzfhC03wy%2BBZx6t06r3z4kp7yRuOB6XhXtX3VxIBJ9yQQUYA55LkmaOrh6pH5QCzUdTStV4lcJMzAA52H9Bn6dj%2BcSxk6zBnNp9lwP5ojMr5J5WKh9ol4VyLGz2hAlW2lXGHpxO6tVQLYVCDEPnjdmlXz%2FyHQSdGP0C%2BfZ88S22xvkhuWGKWZWNGR0Tc9g%2BDvFe6sdfIeorXmUqUifgYbvlDnBOzkBcvOuQwaZ%2Bs7L3hZ1rqwhfUZSf%2BqHICmPRDYxGO%2BP0T54gJ3XO7k3P3eQm1SOrM4%2B3YCCyadH8wDN3kYTB8BYdu4G8PO1n8W2bHAJsSldwUjaAYKGiicOOiXPkBgVYGtJya3cL0XEmO35eXbpjpzUyJhVxQAlBQm%2FDuOCXML%2BkxsAGOqUB4Z2QfF41np%2FxYTA9OgNdiMP32AouThZ0RYfKPB37xPq3jr85G2KMrXxzJIbiVfTLn99CDnI6Qv7w5w%2BYdoHTyhBTw%2FQ8%2FkvVAkKVj0jujxy41cZKgEVnUlJTfTsqwnaU4FVwNBFe6N%2BR2mmXvyLOOtjE203Mw%2BbX0BeWJKmoF0KiJUb8AePbk2Wpd9vuaZ4n1tD2xE9uOekGoucri2%2Baivfd4fkk&X-Amz-Signature=94e22acd1d43f43cdd216cd4ea78581f7d41f9ee972f3926115bf0efe7793c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
