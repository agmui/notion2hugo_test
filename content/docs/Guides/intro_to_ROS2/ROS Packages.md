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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVDAED2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDU9Q%2Fma0pzo%2BlBw4LGD%2BYqFiOECj44v8PnMr2Oj%2F0EIgIhAM9xufFzCp4Id23kH7sMd4627slTGFKkqe78UksG1CW2KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FElU7lJQFLNWQUIMq3ANMeGPJnvDtqIbM%2BIucs0q9O40z8F4FEzN4H%2BgtsuzNTa1fhhIz9ir6ovAz2wxw8CkAZ20NiUU4dBr9JPJpSmw6%2BXIdD6h15ARUrrajcYvDBCwNgwkC6i2qXDvF18%2FJc7vU6NLEtKOCq817h5cUue7LI%2FrscqbqeTK2g%2Bj36DBjvcxgPJ0FlvCsb%2FHsp7Y5cCq5256vXXoyexxCOidekxEuOpTAmDGDAhg16lv7mqx8POITzShr%2FVeJMWh71iDNK%2FoM%2BUxwx0N84tQ%2FOIPR1v5UoMcKuQV2%2BSabhPc44azGlGSI4iiWbopNtPTnWivHi9%2Br4nXvU98XZFtM0rhZzTy4jzU6uYOSeeVAAFxC8f%2FzEOP7XtKsgAqcHOsyFi32gFaF00y6U%2BgRgN3XBEuaBdLgo599IqS1nkIefYW5rnXbRrhXWbzWMP2DTocfmrLZs0JiYql6QOCrT2HV9eHnK%2BdEBZxEsPUsDJfbxWGSb7jkwH5WQAHUgNK3KQsBhVTT9UMIiyzaLOx%2BwKoOOpm7m1VfONXeYWvhJLQDvkzbrf0y%2BZmRYvynISoXbV5jFhVqQ5DNg29AVXPmZwOqg1bKgQTrX0bQH0CZsv5CIMNNkEVDsYgsVbvbxniv5vP9yjCUr%2FTBBjqkAcbfRWlsfsK0c1rvO%2F7l4GycOq8%2FHIyZRZURoYtzqC54LLP5Nyd9VfV63nkqBLVSsEylxmWSUZZLfUCKP07%2FLVirrpt9kQAHZ0qo7deu1OHooTWacX45Qg16gC8ZlYIgloPJQX%2BBVTjlQ17ZGhxyUcieJ7J3rY5ytf%2Bi9KnrwA8OFSRhLMDYohFhoDAKFEPEqLHlKOw%2BmoCn%2B0HRXtPEW8NJ75hd&X-Amz-Signature=2ff5f9553b751b0378e9ab1988bfed101737c0de4b17349763a9854618fb8020&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVDAED2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDU9Q%2Fma0pzo%2BlBw4LGD%2BYqFiOECj44v8PnMr2Oj%2F0EIgIhAM9xufFzCp4Id23kH7sMd4627slTGFKkqe78UksG1CW2KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FElU7lJQFLNWQUIMq3ANMeGPJnvDtqIbM%2BIucs0q9O40z8F4FEzN4H%2BgtsuzNTa1fhhIz9ir6ovAz2wxw8CkAZ20NiUU4dBr9JPJpSmw6%2BXIdD6h15ARUrrajcYvDBCwNgwkC6i2qXDvF18%2FJc7vU6NLEtKOCq817h5cUue7LI%2FrscqbqeTK2g%2Bj36DBjvcxgPJ0FlvCsb%2FHsp7Y5cCq5256vXXoyexxCOidekxEuOpTAmDGDAhg16lv7mqx8POITzShr%2FVeJMWh71iDNK%2FoM%2BUxwx0N84tQ%2FOIPR1v5UoMcKuQV2%2BSabhPc44azGlGSI4iiWbopNtPTnWivHi9%2Br4nXvU98XZFtM0rhZzTy4jzU6uYOSeeVAAFxC8f%2FzEOP7XtKsgAqcHOsyFi32gFaF00y6U%2BgRgN3XBEuaBdLgo599IqS1nkIefYW5rnXbRrhXWbzWMP2DTocfmrLZs0JiYql6QOCrT2HV9eHnK%2BdEBZxEsPUsDJfbxWGSb7jkwH5WQAHUgNK3KQsBhVTT9UMIiyzaLOx%2BwKoOOpm7m1VfONXeYWvhJLQDvkzbrf0y%2BZmRYvynISoXbV5jFhVqQ5DNg29AVXPmZwOqg1bKgQTrX0bQH0CZsv5CIMNNkEVDsYgsVbvbxniv5vP9yjCUr%2FTBBjqkAcbfRWlsfsK0c1rvO%2F7l4GycOq8%2FHIyZRZURoYtzqC54LLP5Nyd9VfV63nkqBLVSsEylxmWSUZZLfUCKP07%2FLVirrpt9kQAHZ0qo7deu1OHooTWacX45Qg16gC8ZlYIgloPJQX%2BBVTjlQ17ZGhxyUcieJ7J3rY5ytf%2Bi9KnrwA8OFSRhLMDYohFhoDAKFEPEqLHlKOw%2BmoCn%2B0HRXtPEW8NJ75hd&X-Amz-Signature=b6ae558f982c2e4282101786b211c0dfcf5e9628888a49111a87a93b0a5caf5d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVDAED2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDU9Q%2Fma0pzo%2BlBw4LGD%2BYqFiOECj44v8PnMr2Oj%2F0EIgIhAM9xufFzCp4Id23kH7sMd4627slTGFKkqe78UksG1CW2KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FElU7lJQFLNWQUIMq3ANMeGPJnvDtqIbM%2BIucs0q9O40z8F4FEzN4H%2BgtsuzNTa1fhhIz9ir6ovAz2wxw8CkAZ20NiUU4dBr9JPJpSmw6%2BXIdD6h15ARUrrajcYvDBCwNgwkC6i2qXDvF18%2FJc7vU6NLEtKOCq817h5cUue7LI%2FrscqbqeTK2g%2Bj36DBjvcxgPJ0FlvCsb%2FHsp7Y5cCq5256vXXoyexxCOidekxEuOpTAmDGDAhg16lv7mqx8POITzShr%2FVeJMWh71iDNK%2FoM%2BUxwx0N84tQ%2FOIPR1v5UoMcKuQV2%2BSabhPc44azGlGSI4iiWbopNtPTnWivHi9%2Br4nXvU98XZFtM0rhZzTy4jzU6uYOSeeVAAFxC8f%2FzEOP7XtKsgAqcHOsyFi32gFaF00y6U%2BgRgN3XBEuaBdLgo599IqS1nkIefYW5rnXbRrhXWbzWMP2DTocfmrLZs0JiYql6QOCrT2HV9eHnK%2BdEBZxEsPUsDJfbxWGSb7jkwH5WQAHUgNK3KQsBhVTT9UMIiyzaLOx%2BwKoOOpm7m1VfONXeYWvhJLQDvkzbrf0y%2BZmRYvynISoXbV5jFhVqQ5DNg29AVXPmZwOqg1bKgQTrX0bQH0CZsv5CIMNNkEVDsYgsVbvbxniv5vP9yjCUr%2FTBBjqkAcbfRWlsfsK0c1rvO%2F7l4GycOq8%2FHIyZRZURoYtzqC54LLP5Nyd9VfV63nkqBLVSsEylxmWSUZZLfUCKP07%2FLVirrpt9kQAHZ0qo7deu1OHooTWacX45Qg16gC8ZlYIgloPJQX%2BBVTjlQ17ZGhxyUcieJ7J3rY5ytf%2Bi9KnrwA8OFSRhLMDYohFhoDAKFEPEqLHlKOw%2BmoCn%2B0HRXtPEW8NJ75hd&X-Amz-Signature=9fb4d2fc6418b46b497282072027ca5e13e2e27452faaf165cc8afc1cb7ec26c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVDAED2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDU9Q%2Fma0pzo%2BlBw4LGD%2BYqFiOECj44v8PnMr2Oj%2F0EIgIhAM9xufFzCp4Id23kH7sMd4627slTGFKkqe78UksG1CW2KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FElU7lJQFLNWQUIMq3ANMeGPJnvDtqIbM%2BIucs0q9O40z8F4FEzN4H%2BgtsuzNTa1fhhIz9ir6ovAz2wxw8CkAZ20NiUU4dBr9JPJpSmw6%2BXIdD6h15ARUrrajcYvDBCwNgwkC6i2qXDvF18%2FJc7vU6NLEtKOCq817h5cUue7LI%2FrscqbqeTK2g%2Bj36DBjvcxgPJ0FlvCsb%2FHsp7Y5cCq5256vXXoyexxCOidekxEuOpTAmDGDAhg16lv7mqx8POITzShr%2FVeJMWh71iDNK%2FoM%2BUxwx0N84tQ%2FOIPR1v5UoMcKuQV2%2BSabhPc44azGlGSI4iiWbopNtPTnWivHi9%2Br4nXvU98XZFtM0rhZzTy4jzU6uYOSeeVAAFxC8f%2FzEOP7XtKsgAqcHOsyFi32gFaF00y6U%2BgRgN3XBEuaBdLgo599IqS1nkIefYW5rnXbRrhXWbzWMP2DTocfmrLZs0JiYql6QOCrT2HV9eHnK%2BdEBZxEsPUsDJfbxWGSb7jkwH5WQAHUgNK3KQsBhVTT9UMIiyzaLOx%2BwKoOOpm7m1VfONXeYWvhJLQDvkzbrf0y%2BZmRYvynISoXbV5jFhVqQ5DNg29AVXPmZwOqg1bKgQTrX0bQH0CZsv5CIMNNkEVDsYgsVbvbxniv5vP9yjCUr%2FTBBjqkAcbfRWlsfsK0c1rvO%2F7l4GycOq8%2FHIyZRZURoYtzqC54LLP5Nyd9VfV63nkqBLVSsEylxmWSUZZLfUCKP07%2FLVirrpt9kQAHZ0qo7deu1OHooTWacX45Qg16gC8ZlYIgloPJQX%2BBVTjlQ17ZGhxyUcieJ7J3rY5ytf%2Bi9KnrwA8OFSRhLMDYohFhoDAKFEPEqLHlKOw%2BmoCn%2B0HRXtPEW8NJ75hd&X-Amz-Signature=ce99be74ac9c67c976750d3926abbdd3484019385b9fdfc51e8c0d421f4c848c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVDAED2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDU9Q%2Fma0pzo%2BlBw4LGD%2BYqFiOECj44v8PnMr2Oj%2F0EIgIhAM9xufFzCp4Id23kH7sMd4627slTGFKkqe78UksG1CW2KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FElU7lJQFLNWQUIMq3ANMeGPJnvDtqIbM%2BIucs0q9O40z8F4FEzN4H%2BgtsuzNTa1fhhIz9ir6ovAz2wxw8CkAZ20NiUU4dBr9JPJpSmw6%2BXIdD6h15ARUrrajcYvDBCwNgwkC6i2qXDvF18%2FJc7vU6NLEtKOCq817h5cUue7LI%2FrscqbqeTK2g%2Bj36DBjvcxgPJ0FlvCsb%2FHsp7Y5cCq5256vXXoyexxCOidekxEuOpTAmDGDAhg16lv7mqx8POITzShr%2FVeJMWh71iDNK%2FoM%2BUxwx0N84tQ%2FOIPR1v5UoMcKuQV2%2BSabhPc44azGlGSI4iiWbopNtPTnWivHi9%2Br4nXvU98XZFtM0rhZzTy4jzU6uYOSeeVAAFxC8f%2FzEOP7XtKsgAqcHOsyFi32gFaF00y6U%2BgRgN3XBEuaBdLgo599IqS1nkIefYW5rnXbRrhXWbzWMP2DTocfmrLZs0JiYql6QOCrT2HV9eHnK%2BdEBZxEsPUsDJfbxWGSb7jkwH5WQAHUgNK3KQsBhVTT9UMIiyzaLOx%2BwKoOOpm7m1VfONXeYWvhJLQDvkzbrf0y%2BZmRYvynISoXbV5jFhVqQ5DNg29AVXPmZwOqg1bKgQTrX0bQH0CZsv5CIMNNkEVDsYgsVbvbxniv5vP9yjCUr%2FTBBjqkAcbfRWlsfsK0c1rvO%2F7l4GycOq8%2FHIyZRZURoYtzqC54LLP5Nyd9VfV63nkqBLVSsEylxmWSUZZLfUCKP07%2FLVirrpt9kQAHZ0qo7deu1OHooTWacX45Qg16gC8ZlYIgloPJQX%2BBVTjlQ17ZGhxyUcieJ7J3rY5ytf%2Bi9KnrwA8OFSRhLMDYohFhoDAKFEPEqLHlKOw%2BmoCn%2B0HRXtPEW8NJ75hd&X-Amz-Signature=2a4382d1f88c2816117faa7000abe44daf4cfa39140f899b95cd9d2a47c05c66&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVDAED2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDU9Q%2Fma0pzo%2BlBw4LGD%2BYqFiOECj44v8PnMr2Oj%2F0EIgIhAM9xufFzCp4Id23kH7sMd4627slTGFKkqe78UksG1CW2KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FElU7lJQFLNWQUIMq3ANMeGPJnvDtqIbM%2BIucs0q9O40z8F4FEzN4H%2BgtsuzNTa1fhhIz9ir6ovAz2wxw8CkAZ20NiUU4dBr9JPJpSmw6%2BXIdD6h15ARUrrajcYvDBCwNgwkC6i2qXDvF18%2FJc7vU6NLEtKOCq817h5cUue7LI%2FrscqbqeTK2g%2Bj36DBjvcxgPJ0FlvCsb%2FHsp7Y5cCq5256vXXoyexxCOidekxEuOpTAmDGDAhg16lv7mqx8POITzShr%2FVeJMWh71iDNK%2FoM%2BUxwx0N84tQ%2FOIPR1v5UoMcKuQV2%2BSabhPc44azGlGSI4iiWbopNtPTnWivHi9%2Br4nXvU98XZFtM0rhZzTy4jzU6uYOSeeVAAFxC8f%2FzEOP7XtKsgAqcHOsyFi32gFaF00y6U%2BgRgN3XBEuaBdLgo599IqS1nkIefYW5rnXbRrhXWbzWMP2DTocfmrLZs0JiYql6QOCrT2HV9eHnK%2BdEBZxEsPUsDJfbxWGSb7jkwH5WQAHUgNK3KQsBhVTT9UMIiyzaLOx%2BwKoOOpm7m1VfONXeYWvhJLQDvkzbrf0y%2BZmRYvynISoXbV5jFhVqQ5DNg29AVXPmZwOqg1bKgQTrX0bQH0CZsv5CIMNNkEVDsYgsVbvbxniv5vP9yjCUr%2FTBBjqkAcbfRWlsfsK0c1rvO%2F7l4GycOq8%2FHIyZRZURoYtzqC54LLP5Nyd9VfV63nkqBLVSsEylxmWSUZZLfUCKP07%2FLVirrpt9kQAHZ0qo7deu1OHooTWacX45Qg16gC8ZlYIgloPJQX%2BBVTjlQ17ZGhxyUcieJ7J3rY5ytf%2Bi9KnrwA8OFSRhLMDYohFhoDAKFEPEqLHlKOw%2BmoCn%2B0HRXtPEW8NJ75hd&X-Amz-Signature=ba979c3001f304acbd96dbfee0e3e5b100635e4b6f0af35834c9084785010da4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVDAED2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDU9Q%2Fma0pzo%2BlBw4LGD%2BYqFiOECj44v8PnMr2Oj%2F0EIgIhAM9xufFzCp4Id23kH7sMd4627slTGFKkqe78UksG1CW2KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FElU7lJQFLNWQUIMq3ANMeGPJnvDtqIbM%2BIucs0q9O40z8F4FEzN4H%2BgtsuzNTa1fhhIz9ir6ovAz2wxw8CkAZ20NiUU4dBr9JPJpSmw6%2BXIdD6h15ARUrrajcYvDBCwNgwkC6i2qXDvF18%2FJc7vU6NLEtKOCq817h5cUue7LI%2FrscqbqeTK2g%2Bj36DBjvcxgPJ0FlvCsb%2FHsp7Y5cCq5256vXXoyexxCOidekxEuOpTAmDGDAhg16lv7mqx8POITzShr%2FVeJMWh71iDNK%2FoM%2BUxwx0N84tQ%2FOIPR1v5UoMcKuQV2%2BSabhPc44azGlGSI4iiWbopNtPTnWivHi9%2Br4nXvU98XZFtM0rhZzTy4jzU6uYOSeeVAAFxC8f%2FzEOP7XtKsgAqcHOsyFi32gFaF00y6U%2BgRgN3XBEuaBdLgo599IqS1nkIefYW5rnXbRrhXWbzWMP2DTocfmrLZs0JiYql6QOCrT2HV9eHnK%2BdEBZxEsPUsDJfbxWGSb7jkwH5WQAHUgNK3KQsBhVTT9UMIiyzaLOx%2BwKoOOpm7m1VfONXeYWvhJLQDvkzbrf0y%2BZmRYvynISoXbV5jFhVqQ5DNg29AVXPmZwOqg1bKgQTrX0bQH0CZsv5CIMNNkEVDsYgsVbvbxniv5vP9yjCUr%2FTBBjqkAcbfRWlsfsK0c1rvO%2F7l4GycOq8%2FHIyZRZURoYtzqC54LLP5Nyd9VfV63nkqBLVSsEylxmWSUZZLfUCKP07%2FLVirrpt9kQAHZ0qo7deu1OHooTWacX45Qg16gC8ZlYIgloPJQX%2BBVTjlQ17ZGhxyUcieJ7J3rY5ytf%2Bi9KnrwA8OFSRhLMDYohFhoDAKFEPEqLHlKOw%2BmoCn%2B0HRXtPEW8NJ75hd&X-Amz-Signature=53899ac92028e343686c9dc16ce226564c663acc53305c1507346a620805d7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
