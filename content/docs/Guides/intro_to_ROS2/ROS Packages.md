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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UY6AGH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFhddNhz3meX0%2BQ9Naxvu3a47Tbp%2BqkWZdI9yMDA7VCAIhAKSpwNpStR0rGWPLhc3vlJW%2FR2vF%2BEnfUWF%2FTN1eUuRUKv8DCHEQABoMNjM3NDIzMTgzODA1IgxNvkjTRwfz8Vjxq08q3AMG7%2FEqnePOwSMRQZUAmWLMg%2BgSBP6w3u2UYUt3tKlMwxp2OZFvms9qhSZwBnz8YTOfKlNVXH1VI%2FQu1Hhtgodp5jqa28zI3yXgkLmJGr%2FD%2FiVjlMHoafTiGjsEW2s%2FGOnLduSUfGgfB88v%2FS5LPJD%2BnEXOwGBW2pylirSTIN%2F9wq0qwhU7iYc2WQ2PQEwJ%2BnplcpRMpJT9Jkz8EFBUyGyMua5pIEYUdyP7Pdoe9lJAbZHQC8V%2BOaK2ek%2F4GjlZsUi%2FZznnMQsqCE8Cwyfj%2FFwJ0xiLDxqgRq2najXih4PIm%2BCqgPx9vl%2BjEDRYCNg5aQy49Xv3Myw%2Fffr4MgeAopp6dr%2BBM15AGymF1WyMgLdCgSJPvy989wJuTpIem6ReFo1R1uiSfyHzzD0p84IGn%2BXlNR5mzjdkw8Tt2XIzi1QGRQGQ0i0eYFWPZ9hflm5lY310KlsSrCHg6W3xEc7sOL5r%2FfM5gVFOmJftyJabTIf3sEIzyptCIdJe8sj0KasB9Ve50FQ0IUgxC7AW%2BoKIboYXnc67geIUzJAk062M5lQUx0U7Cbjt6LVU9rGn1wzZN%2FzCaVMZ3ScVOLV15v8QGmD4ENVx33R%2FBviRY4ur%2BsAM2m9Jq%2FoCoN%2FMo9mBtDDrvsTCBjqkAc9Mlvwa5Ct%2FpOknmbfmvnb%2F3ldA09yEi%2FLP%2F7ckgxWpu%2Fxw1D27W%2BZ%2B%2BUMOCChaq1QCSMRof2BjZ1g0DTTXAz04umSX5BdaJN9VXhnoWZG%2BCf08LVIfvsGvCA%2FTNQtYZT%2FBRFTNHKIAMdMczdjoNGoUG6E4oC97G%2BiKA65bqpl2XSEfwYyKLErM82%2FhwDoSQGUhjwkIelyTbdTPzXp7PCXxHwNx&X-Amz-Signature=2b0dcd2208ad15650b6682743a505a179f559c28096ae49a354ade5eeb54a8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UY6AGH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFhddNhz3meX0%2BQ9Naxvu3a47Tbp%2BqkWZdI9yMDA7VCAIhAKSpwNpStR0rGWPLhc3vlJW%2FR2vF%2BEnfUWF%2FTN1eUuRUKv8DCHEQABoMNjM3NDIzMTgzODA1IgxNvkjTRwfz8Vjxq08q3AMG7%2FEqnePOwSMRQZUAmWLMg%2BgSBP6w3u2UYUt3tKlMwxp2OZFvms9qhSZwBnz8YTOfKlNVXH1VI%2FQu1Hhtgodp5jqa28zI3yXgkLmJGr%2FD%2FiVjlMHoafTiGjsEW2s%2FGOnLduSUfGgfB88v%2FS5LPJD%2BnEXOwGBW2pylirSTIN%2F9wq0qwhU7iYc2WQ2PQEwJ%2BnplcpRMpJT9Jkz8EFBUyGyMua5pIEYUdyP7Pdoe9lJAbZHQC8V%2BOaK2ek%2F4GjlZsUi%2FZznnMQsqCE8Cwyfj%2FFwJ0xiLDxqgRq2najXih4PIm%2BCqgPx9vl%2BjEDRYCNg5aQy49Xv3Myw%2Fffr4MgeAopp6dr%2BBM15AGymF1WyMgLdCgSJPvy989wJuTpIem6ReFo1R1uiSfyHzzD0p84IGn%2BXlNR5mzjdkw8Tt2XIzi1QGRQGQ0i0eYFWPZ9hflm5lY310KlsSrCHg6W3xEc7sOL5r%2FfM5gVFOmJftyJabTIf3sEIzyptCIdJe8sj0KasB9Ve50FQ0IUgxC7AW%2BoKIboYXnc67geIUzJAk062M5lQUx0U7Cbjt6LVU9rGn1wzZN%2FzCaVMZ3ScVOLV15v8QGmD4ENVx33R%2FBviRY4ur%2BsAM2m9Jq%2FoCoN%2FMo9mBtDDrvsTCBjqkAc9Mlvwa5Ct%2FpOknmbfmvnb%2F3ldA09yEi%2FLP%2F7ckgxWpu%2Fxw1D27W%2BZ%2B%2BUMOCChaq1QCSMRof2BjZ1g0DTTXAz04umSX5BdaJN9VXhnoWZG%2BCf08LVIfvsGvCA%2FTNQtYZT%2FBRFTNHKIAMdMczdjoNGoUG6E4oC97G%2BiKA65bqpl2XSEfwYyKLErM82%2FhwDoSQGUhjwkIelyTbdTPzXp7PCXxHwNx&X-Amz-Signature=64467527f71d920df27b77184c609f2d9938c7a17223fd04db6ead5a8f5d5dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UY6AGH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFhddNhz3meX0%2BQ9Naxvu3a47Tbp%2BqkWZdI9yMDA7VCAIhAKSpwNpStR0rGWPLhc3vlJW%2FR2vF%2BEnfUWF%2FTN1eUuRUKv8DCHEQABoMNjM3NDIzMTgzODA1IgxNvkjTRwfz8Vjxq08q3AMG7%2FEqnePOwSMRQZUAmWLMg%2BgSBP6w3u2UYUt3tKlMwxp2OZFvms9qhSZwBnz8YTOfKlNVXH1VI%2FQu1Hhtgodp5jqa28zI3yXgkLmJGr%2FD%2FiVjlMHoafTiGjsEW2s%2FGOnLduSUfGgfB88v%2FS5LPJD%2BnEXOwGBW2pylirSTIN%2F9wq0qwhU7iYc2WQ2PQEwJ%2BnplcpRMpJT9Jkz8EFBUyGyMua5pIEYUdyP7Pdoe9lJAbZHQC8V%2BOaK2ek%2F4GjlZsUi%2FZznnMQsqCE8Cwyfj%2FFwJ0xiLDxqgRq2najXih4PIm%2BCqgPx9vl%2BjEDRYCNg5aQy49Xv3Myw%2Fffr4MgeAopp6dr%2BBM15AGymF1WyMgLdCgSJPvy989wJuTpIem6ReFo1R1uiSfyHzzD0p84IGn%2BXlNR5mzjdkw8Tt2XIzi1QGRQGQ0i0eYFWPZ9hflm5lY310KlsSrCHg6W3xEc7sOL5r%2FfM5gVFOmJftyJabTIf3sEIzyptCIdJe8sj0KasB9Ve50FQ0IUgxC7AW%2BoKIboYXnc67geIUzJAk062M5lQUx0U7Cbjt6LVU9rGn1wzZN%2FzCaVMZ3ScVOLV15v8QGmD4ENVx33R%2FBviRY4ur%2BsAM2m9Jq%2FoCoN%2FMo9mBtDDrvsTCBjqkAc9Mlvwa5Ct%2FpOknmbfmvnb%2F3ldA09yEi%2FLP%2F7ckgxWpu%2Fxw1D27W%2BZ%2B%2BUMOCChaq1QCSMRof2BjZ1g0DTTXAz04umSX5BdaJN9VXhnoWZG%2BCf08LVIfvsGvCA%2FTNQtYZT%2FBRFTNHKIAMdMczdjoNGoUG6E4oC97G%2BiKA65bqpl2XSEfwYyKLErM82%2FhwDoSQGUhjwkIelyTbdTPzXp7PCXxHwNx&X-Amz-Signature=0322bb7736d36beb1cbc42e611e439aae1af493a034063dbcca73571430b083b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UY6AGH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFhddNhz3meX0%2BQ9Naxvu3a47Tbp%2BqkWZdI9yMDA7VCAIhAKSpwNpStR0rGWPLhc3vlJW%2FR2vF%2BEnfUWF%2FTN1eUuRUKv8DCHEQABoMNjM3NDIzMTgzODA1IgxNvkjTRwfz8Vjxq08q3AMG7%2FEqnePOwSMRQZUAmWLMg%2BgSBP6w3u2UYUt3tKlMwxp2OZFvms9qhSZwBnz8YTOfKlNVXH1VI%2FQu1Hhtgodp5jqa28zI3yXgkLmJGr%2FD%2FiVjlMHoafTiGjsEW2s%2FGOnLduSUfGgfB88v%2FS5LPJD%2BnEXOwGBW2pylirSTIN%2F9wq0qwhU7iYc2WQ2PQEwJ%2BnplcpRMpJT9Jkz8EFBUyGyMua5pIEYUdyP7Pdoe9lJAbZHQC8V%2BOaK2ek%2F4GjlZsUi%2FZznnMQsqCE8Cwyfj%2FFwJ0xiLDxqgRq2najXih4PIm%2BCqgPx9vl%2BjEDRYCNg5aQy49Xv3Myw%2Fffr4MgeAopp6dr%2BBM15AGymF1WyMgLdCgSJPvy989wJuTpIem6ReFo1R1uiSfyHzzD0p84IGn%2BXlNR5mzjdkw8Tt2XIzi1QGRQGQ0i0eYFWPZ9hflm5lY310KlsSrCHg6W3xEc7sOL5r%2FfM5gVFOmJftyJabTIf3sEIzyptCIdJe8sj0KasB9Ve50FQ0IUgxC7AW%2BoKIboYXnc67geIUzJAk062M5lQUx0U7Cbjt6LVU9rGn1wzZN%2FzCaVMZ3ScVOLV15v8QGmD4ENVx33R%2FBviRY4ur%2BsAM2m9Jq%2FoCoN%2FMo9mBtDDrvsTCBjqkAc9Mlvwa5Ct%2FpOknmbfmvnb%2F3ldA09yEi%2FLP%2F7ckgxWpu%2Fxw1D27W%2BZ%2B%2BUMOCChaq1QCSMRof2BjZ1g0DTTXAz04umSX5BdaJN9VXhnoWZG%2BCf08LVIfvsGvCA%2FTNQtYZT%2FBRFTNHKIAMdMczdjoNGoUG6E4oC97G%2BiKA65bqpl2XSEfwYyKLErM82%2FhwDoSQGUhjwkIelyTbdTPzXp7PCXxHwNx&X-Amz-Signature=43df57a0547868a6c0594680c68ea0ecb9fecfed346bf099c391dfc6ee568f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UY6AGH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFhddNhz3meX0%2BQ9Naxvu3a47Tbp%2BqkWZdI9yMDA7VCAIhAKSpwNpStR0rGWPLhc3vlJW%2FR2vF%2BEnfUWF%2FTN1eUuRUKv8DCHEQABoMNjM3NDIzMTgzODA1IgxNvkjTRwfz8Vjxq08q3AMG7%2FEqnePOwSMRQZUAmWLMg%2BgSBP6w3u2UYUt3tKlMwxp2OZFvms9qhSZwBnz8YTOfKlNVXH1VI%2FQu1Hhtgodp5jqa28zI3yXgkLmJGr%2FD%2FiVjlMHoafTiGjsEW2s%2FGOnLduSUfGgfB88v%2FS5LPJD%2BnEXOwGBW2pylirSTIN%2F9wq0qwhU7iYc2WQ2PQEwJ%2BnplcpRMpJT9Jkz8EFBUyGyMua5pIEYUdyP7Pdoe9lJAbZHQC8V%2BOaK2ek%2F4GjlZsUi%2FZznnMQsqCE8Cwyfj%2FFwJ0xiLDxqgRq2najXih4PIm%2BCqgPx9vl%2BjEDRYCNg5aQy49Xv3Myw%2Fffr4MgeAopp6dr%2BBM15AGymF1WyMgLdCgSJPvy989wJuTpIem6ReFo1R1uiSfyHzzD0p84IGn%2BXlNR5mzjdkw8Tt2XIzi1QGRQGQ0i0eYFWPZ9hflm5lY310KlsSrCHg6W3xEc7sOL5r%2FfM5gVFOmJftyJabTIf3sEIzyptCIdJe8sj0KasB9Ve50FQ0IUgxC7AW%2BoKIboYXnc67geIUzJAk062M5lQUx0U7Cbjt6LVU9rGn1wzZN%2FzCaVMZ3ScVOLV15v8QGmD4ENVx33R%2FBviRY4ur%2BsAM2m9Jq%2FoCoN%2FMo9mBtDDrvsTCBjqkAc9Mlvwa5Ct%2FpOknmbfmvnb%2F3ldA09yEi%2FLP%2F7ckgxWpu%2Fxw1D27W%2BZ%2B%2BUMOCChaq1QCSMRof2BjZ1g0DTTXAz04umSX5BdaJN9VXhnoWZG%2BCf08LVIfvsGvCA%2FTNQtYZT%2FBRFTNHKIAMdMczdjoNGoUG6E4oC97G%2BiKA65bqpl2XSEfwYyKLErM82%2FhwDoSQGUhjwkIelyTbdTPzXp7PCXxHwNx&X-Amz-Signature=2d9017e2539c1ca81b924526b1b9b3c5959a2f17577f81b0594a5c9ef9fe604a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UY6AGH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFhddNhz3meX0%2BQ9Naxvu3a47Tbp%2BqkWZdI9yMDA7VCAIhAKSpwNpStR0rGWPLhc3vlJW%2FR2vF%2BEnfUWF%2FTN1eUuRUKv8DCHEQABoMNjM3NDIzMTgzODA1IgxNvkjTRwfz8Vjxq08q3AMG7%2FEqnePOwSMRQZUAmWLMg%2BgSBP6w3u2UYUt3tKlMwxp2OZFvms9qhSZwBnz8YTOfKlNVXH1VI%2FQu1Hhtgodp5jqa28zI3yXgkLmJGr%2FD%2FiVjlMHoafTiGjsEW2s%2FGOnLduSUfGgfB88v%2FS5LPJD%2BnEXOwGBW2pylirSTIN%2F9wq0qwhU7iYc2WQ2PQEwJ%2BnplcpRMpJT9Jkz8EFBUyGyMua5pIEYUdyP7Pdoe9lJAbZHQC8V%2BOaK2ek%2F4GjlZsUi%2FZznnMQsqCE8Cwyfj%2FFwJ0xiLDxqgRq2najXih4PIm%2BCqgPx9vl%2BjEDRYCNg5aQy49Xv3Myw%2Fffr4MgeAopp6dr%2BBM15AGymF1WyMgLdCgSJPvy989wJuTpIem6ReFo1R1uiSfyHzzD0p84IGn%2BXlNR5mzjdkw8Tt2XIzi1QGRQGQ0i0eYFWPZ9hflm5lY310KlsSrCHg6W3xEc7sOL5r%2FfM5gVFOmJftyJabTIf3sEIzyptCIdJe8sj0KasB9Ve50FQ0IUgxC7AW%2BoKIboYXnc67geIUzJAk062M5lQUx0U7Cbjt6LVU9rGn1wzZN%2FzCaVMZ3ScVOLV15v8QGmD4ENVx33R%2FBviRY4ur%2BsAM2m9Jq%2FoCoN%2FMo9mBtDDrvsTCBjqkAc9Mlvwa5Ct%2FpOknmbfmvnb%2F3ldA09yEi%2FLP%2F7ckgxWpu%2Fxw1D27W%2BZ%2B%2BUMOCChaq1QCSMRof2BjZ1g0DTTXAz04umSX5BdaJN9VXhnoWZG%2BCf08LVIfvsGvCA%2FTNQtYZT%2FBRFTNHKIAMdMczdjoNGoUG6E4oC97G%2BiKA65bqpl2XSEfwYyKLErM82%2FhwDoSQGUhjwkIelyTbdTPzXp7PCXxHwNx&X-Amz-Signature=ffaa457adedac0ffa511e95be4529b4ebf186f3b6ee7db9266391ebd4b028731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UY6AGH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFhddNhz3meX0%2BQ9Naxvu3a47Tbp%2BqkWZdI9yMDA7VCAIhAKSpwNpStR0rGWPLhc3vlJW%2FR2vF%2BEnfUWF%2FTN1eUuRUKv8DCHEQABoMNjM3NDIzMTgzODA1IgxNvkjTRwfz8Vjxq08q3AMG7%2FEqnePOwSMRQZUAmWLMg%2BgSBP6w3u2UYUt3tKlMwxp2OZFvms9qhSZwBnz8YTOfKlNVXH1VI%2FQu1Hhtgodp5jqa28zI3yXgkLmJGr%2FD%2FiVjlMHoafTiGjsEW2s%2FGOnLduSUfGgfB88v%2FS5LPJD%2BnEXOwGBW2pylirSTIN%2F9wq0qwhU7iYc2WQ2PQEwJ%2BnplcpRMpJT9Jkz8EFBUyGyMua5pIEYUdyP7Pdoe9lJAbZHQC8V%2BOaK2ek%2F4GjlZsUi%2FZznnMQsqCE8Cwyfj%2FFwJ0xiLDxqgRq2najXih4PIm%2BCqgPx9vl%2BjEDRYCNg5aQy49Xv3Myw%2Fffr4MgeAopp6dr%2BBM15AGymF1WyMgLdCgSJPvy989wJuTpIem6ReFo1R1uiSfyHzzD0p84IGn%2BXlNR5mzjdkw8Tt2XIzi1QGRQGQ0i0eYFWPZ9hflm5lY310KlsSrCHg6W3xEc7sOL5r%2FfM5gVFOmJftyJabTIf3sEIzyptCIdJe8sj0KasB9Ve50FQ0IUgxC7AW%2BoKIboYXnc67geIUzJAk062M5lQUx0U7Cbjt6LVU9rGn1wzZN%2FzCaVMZ3ScVOLV15v8QGmD4ENVx33R%2FBviRY4ur%2BsAM2m9Jq%2FoCoN%2FMo9mBtDDrvsTCBjqkAc9Mlvwa5Ct%2FpOknmbfmvnb%2F3ldA09yEi%2FLP%2F7ckgxWpu%2Fxw1D27W%2BZ%2B%2BUMOCChaq1QCSMRof2BjZ1g0DTTXAz04umSX5BdaJN9VXhnoWZG%2BCf08LVIfvsGvCA%2FTNQtYZT%2FBRFTNHKIAMdMczdjoNGoUG6E4oC97G%2BiKA65bqpl2XSEfwYyKLErM82%2FhwDoSQGUhjwkIelyTbdTPzXp7PCXxHwNx&X-Amz-Signature=c3e0ebd2e617c433f9eca67bc309bc496672739dc6924ab13923452c93fd8b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
