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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLF423KZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FpKXb1DFp%2FqigmLvY3Mwar9tiJG5JXE%2BPZZ21aAcC2AiEAzPpOa8KtllYb4sfnXa7uKsigoPaV0w5Ek1lT9OnVTBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf%2BU8QGU3xEomTw3ircA9jYYkSFDzYyeJYXwcSo%2BzJAzhvU3WNCOe31EtERiu9boejhzHh%2B%2B4FjZiG933CDeKjknzgWTiJ5mIMSBsMfYiDDe%2FWanOmU8h07eNuEqrAhYI2lsvxZr6MekQhhylDSRPGSTSKWv6DCk6J1erpwLW05zuOV8guocLX8mJvEds6AbHPJrVm3ra2W66YDx91NapmdGSjWUutdT692CWthqj9N2EXcxxph2Klron7RZUWFZ%2F2n7w%2BVUG0jHbc8EqXm7tt2J1Btd6%2FwdemM33h0079wtHF8muvdc9dH0%2FyIO9QeO4ob8LOt6YDuksBPKoaJe1VKVKrhBIQ8FTOycKF4NuQ%2BFRuwu03tGv1EKmaX7ams64hQIAlgHADXMvTchGJCcnGMiBC%2BRmaqVsY2S8FpC9CfqHz8mH4zSTX74K7sj4tt9Mx1Q46ioJAf7QGKe1FOS7VOFU1YwpbzIiYLjfKLgSJ5lNazZRff86kR0SOjsttWhlIVGdU%2B85bVpTzEFZdaeAq%2FxPrqzJYy4%2FSEiuLJxnUhmceFH4XhpMu7lFXHiUbVgKCCmubrdlg%2FB3JnNX0gHs0SnUM1EWV0BeCw3Uq1xDFS2oWcN%2FGAizr6WnZ2EXkM5AFsRET6HCVeCbNeMMiC%2BsEGOqUB92Zm2r3c40QsddNkHrSAo%2FyUv7j07VP9Gaoso56OCgXxLV3cXR%2FzByMRXculf8kbF3jgs6EoylM8nFnNBL2yFDLyg03tWomMrfctI%2BhOMdXcMCPFUPm10aMx56KxRQ%2Fwt5dco4nA8sOdhkBaP7hWbrxxf21EnIRUJSoI9Olt%2Bo2FbQf8%2FSo6IRh5CMpyln8dwXRyaJrh9jZMkk2fZFsViV30cLYW&X-Amz-Signature=c3a705081dfb84b632912de932361ed332f03629f00b2d0545eacb7ad7779428&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLF423KZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FpKXb1DFp%2FqigmLvY3Mwar9tiJG5JXE%2BPZZ21aAcC2AiEAzPpOa8KtllYb4sfnXa7uKsigoPaV0w5Ek1lT9OnVTBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf%2BU8QGU3xEomTw3ircA9jYYkSFDzYyeJYXwcSo%2BzJAzhvU3WNCOe31EtERiu9boejhzHh%2B%2B4FjZiG933CDeKjknzgWTiJ5mIMSBsMfYiDDe%2FWanOmU8h07eNuEqrAhYI2lsvxZr6MekQhhylDSRPGSTSKWv6DCk6J1erpwLW05zuOV8guocLX8mJvEds6AbHPJrVm3ra2W66YDx91NapmdGSjWUutdT692CWthqj9N2EXcxxph2Klron7RZUWFZ%2F2n7w%2BVUG0jHbc8EqXm7tt2J1Btd6%2FwdemM33h0079wtHF8muvdc9dH0%2FyIO9QeO4ob8LOt6YDuksBPKoaJe1VKVKrhBIQ8FTOycKF4NuQ%2BFRuwu03tGv1EKmaX7ams64hQIAlgHADXMvTchGJCcnGMiBC%2BRmaqVsY2S8FpC9CfqHz8mH4zSTX74K7sj4tt9Mx1Q46ioJAf7QGKe1FOS7VOFU1YwpbzIiYLjfKLgSJ5lNazZRff86kR0SOjsttWhlIVGdU%2B85bVpTzEFZdaeAq%2FxPrqzJYy4%2FSEiuLJxnUhmceFH4XhpMu7lFXHiUbVgKCCmubrdlg%2FB3JnNX0gHs0SnUM1EWV0BeCw3Uq1xDFS2oWcN%2FGAizr6WnZ2EXkM5AFsRET6HCVeCbNeMMiC%2BsEGOqUB92Zm2r3c40QsddNkHrSAo%2FyUv7j07VP9Gaoso56OCgXxLV3cXR%2FzByMRXculf8kbF3jgs6EoylM8nFnNBL2yFDLyg03tWomMrfctI%2BhOMdXcMCPFUPm10aMx56KxRQ%2Fwt5dco4nA8sOdhkBaP7hWbrxxf21EnIRUJSoI9Olt%2Bo2FbQf8%2FSo6IRh5CMpyln8dwXRyaJrh9jZMkk2fZFsViV30cLYW&X-Amz-Signature=63377dbac3418f38092b09cd18e86b275fa61ba7d2a835c96c493ad8f7678789&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLF423KZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FpKXb1DFp%2FqigmLvY3Mwar9tiJG5JXE%2BPZZ21aAcC2AiEAzPpOa8KtllYb4sfnXa7uKsigoPaV0w5Ek1lT9OnVTBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf%2BU8QGU3xEomTw3ircA9jYYkSFDzYyeJYXwcSo%2BzJAzhvU3WNCOe31EtERiu9boejhzHh%2B%2B4FjZiG933CDeKjknzgWTiJ5mIMSBsMfYiDDe%2FWanOmU8h07eNuEqrAhYI2lsvxZr6MekQhhylDSRPGSTSKWv6DCk6J1erpwLW05zuOV8guocLX8mJvEds6AbHPJrVm3ra2W66YDx91NapmdGSjWUutdT692CWthqj9N2EXcxxph2Klron7RZUWFZ%2F2n7w%2BVUG0jHbc8EqXm7tt2J1Btd6%2FwdemM33h0079wtHF8muvdc9dH0%2FyIO9QeO4ob8LOt6YDuksBPKoaJe1VKVKrhBIQ8FTOycKF4NuQ%2BFRuwu03tGv1EKmaX7ams64hQIAlgHADXMvTchGJCcnGMiBC%2BRmaqVsY2S8FpC9CfqHz8mH4zSTX74K7sj4tt9Mx1Q46ioJAf7QGKe1FOS7VOFU1YwpbzIiYLjfKLgSJ5lNazZRff86kR0SOjsttWhlIVGdU%2B85bVpTzEFZdaeAq%2FxPrqzJYy4%2FSEiuLJxnUhmceFH4XhpMu7lFXHiUbVgKCCmubrdlg%2FB3JnNX0gHs0SnUM1EWV0BeCw3Uq1xDFS2oWcN%2FGAizr6WnZ2EXkM5AFsRET6HCVeCbNeMMiC%2BsEGOqUB92Zm2r3c40QsddNkHrSAo%2FyUv7j07VP9Gaoso56OCgXxLV3cXR%2FzByMRXculf8kbF3jgs6EoylM8nFnNBL2yFDLyg03tWomMrfctI%2BhOMdXcMCPFUPm10aMx56KxRQ%2Fwt5dco4nA8sOdhkBaP7hWbrxxf21EnIRUJSoI9Olt%2Bo2FbQf8%2FSo6IRh5CMpyln8dwXRyaJrh9jZMkk2fZFsViV30cLYW&X-Amz-Signature=c614310b8795454f58222ec655931dd7b6827e8b9c82e1a09f699fc2d3e17e05&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLF423KZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FpKXb1DFp%2FqigmLvY3Mwar9tiJG5JXE%2BPZZ21aAcC2AiEAzPpOa8KtllYb4sfnXa7uKsigoPaV0w5Ek1lT9OnVTBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf%2BU8QGU3xEomTw3ircA9jYYkSFDzYyeJYXwcSo%2BzJAzhvU3WNCOe31EtERiu9boejhzHh%2B%2B4FjZiG933CDeKjknzgWTiJ5mIMSBsMfYiDDe%2FWanOmU8h07eNuEqrAhYI2lsvxZr6MekQhhylDSRPGSTSKWv6DCk6J1erpwLW05zuOV8guocLX8mJvEds6AbHPJrVm3ra2W66YDx91NapmdGSjWUutdT692CWthqj9N2EXcxxph2Klron7RZUWFZ%2F2n7w%2BVUG0jHbc8EqXm7tt2J1Btd6%2FwdemM33h0079wtHF8muvdc9dH0%2FyIO9QeO4ob8LOt6YDuksBPKoaJe1VKVKrhBIQ8FTOycKF4NuQ%2BFRuwu03tGv1EKmaX7ams64hQIAlgHADXMvTchGJCcnGMiBC%2BRmaqVsY2S8FpC9CfqHz8mH4zSTX74K7sj4tt9Mx1Q46ioJAf7QGKe1FOS7VOFU1YwpbzIiYLjfKLgSJ5lNazZRff86kR0SOjsttWhlIVGdU%2B85bVpTzEFZdaeAq%2FxPrqzJYy4%2FSEiuLJxnUhmceFH4XhpMu7lFXHiUbVgKCCmubrdlg%2FB3JnNX0gHs0SnUM1EWV0BeCw3Uq1xDFS2oWcN%2FGAizr6WnZ2EXkM5AFsRET6HCVeCbNeMMiC%2BsEGOqUB92Zm2r3c40QsddNkHrSAo%2FyUv7j07VP9Gaoso56OCgXxLV3cXR%2FzByMRXculf8kbF3jgs6EoylM8nFnNBL2yFDLyg03tWomMrfctI%2BhOMdXcMCPFUPm10aMx56KxRQ%2Fwt5dco4nA8sOdhkBaP7hWbrxxf21EnIRUJSoI9Olt%2Bo2FbQf8%2FSo6IRh5CMpyln8dwXRyaJrh9jZMkk2fZFsViV30cLYW&X-Amz-Signature=6a515f0215a5af06c80a24c968e775952012954dfc980845e324d49720a40ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLF423KZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FpKXb1DFp%2FqigmLvY3Mwar9tiJG5JXE%2BPZZ21aAcC2AiEAzPpOa8KtllYb4sfnXa7uKsigoPaV0w5Ek1lT9OnVTBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf%2BU8QGU3xEomTw3ircA9jYYkSFDzYyeJYXwcSo%2BzJAzhvU3WNCOe31EtERiu9boejhzHh%2B%2B4FjZiG933CDeKjknzgWTiJ5mIMSBsMfYiDDe%2FWanOmU8h07eNuEqrAhYI2lsvxZr6MekQhhylDSRPGSTSKWv6DCk6J1erpwLW05zuOV8guocLX8mJvEds6AbHPJrVm3ra2W66YDx91NapmdGSjWUutdT692CWthqj9N2EXcxxph2Klron7RZUWFZ%2F2n7w%2BVUG0jHbc8EqXm7tt2J1Btd6%2FwdemM33h0079wtHF8muvdc9dH0%2FyIO9QeO4ob8LOt6YDuksBPKoaJe1VKVKrhBIQ8FTOycKF4NuQ%2BFRuwu03tGv1EKmaX7ams64hQIAlgHADXMvTchGJCcnGMiBC%2BRmaqVsY2S8FpC9CfqHz8mH4zSTX74K7sj4tt9Mx1Q46ioJAf7QGKe1FOS7VOFU1YwpbzIiYLjfKLgSJ5lNazZRff86kR0SOjsttWhlIVGdU%2B85bVpTzEFZdaeAq%2FxPrqzJYy4%2FSEiuLJxnUhmceFH4XhpMu7lFXHiUbVgKCCmubrdlg%2FB3JnNX0gHs0SnUM1EWV0BeCw3Uq1xDFS2oWcN%2FGAizr6WnZ2EXkM5AFsRET6HCVeCbNeMMiC%2BsEGOqUB92Zm2r3c40QsddNkHrSAo%2FyUv7j07VP9Gaoso56OCgXxLV3cXR%2FzByMRXculf8kbF3jgs6EoylM8nFnNBL2yFDLyg03tWomMrfctI%2BhOMdXcMCPFUPm10aMx56KxRQ%2Fwt5dco4nA8sOdhkBaP7hWbrxxf21EnIRUJSoI9Olt%2Bo2FbQf8%2FSo6IRh5CMpyln8dwXRyaJrh9jZMkk2fZFsViV30cLYW&X-Amz-Signature=d4e95928c77c04fc81cccfc4d597eb5a8fa723eb517414cf69378efb406aa439&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLF423KZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FpKXb1DFp%2FqigmLvY3Mwar9tiJG5JXE%2BPZZ21aAcC2AiEAzPpOa8KtllYb4sfnXa7uKsigoPaV0w5Ek1lT9OnVTBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf%2BU8QGU3xEomTw3ircA9jYYkSFDzYyeJYXwcSo%2BzJAzhvU3WNCOe31EtERiu9boejhzHh%2B%2B4FjZiG933CDeKjknzgWTiJ5mIMSBsMfYiDDe%2FWanOmU8h07eNuEqrAhYI2lsvxZr6MekQhhylDSRPGSTSKWv6DCk6J1erpwLW05zuOV8guocLX8mJvEds6AbHPJrVm3ra2W66YDx91NapmdGSjWUutdT692CWthqj9N2EXcxxph2Klron7RZUWFZ%2F2n7w%2BVUG0jHbc8EqXm7tt2J1Btd6%2FwdemM33h0079wtHF8muvdc9dH0%2FyIO9QeO4ob8LOt6YDuksBPKoaJe1VKVKrhBIQ8FTOycKF4NuQ%2BFRuwu03tGv1EKmaX7ams64hQIAlgHADXMvTchGJCcnGMiBC%2BRmaqVsY2S8FpC9CfqHz8mH4zSTX74K7sj4tt9Mx1Q46ioJAf7QGKe1FOS7VOFU1YwpbzIiYLjfKLgSJ5lNazZRff86kR0SOjsttWhlIVGdU%2B85bVpTzEFZdaeAq%2FxPrqzJYy4%2FSEiuLJxnUhmceFH4XhpMu7lFXHiUbVgKCCmubrdlg%2FB3JnNX0gHs0SnUM1EWV0BeCw3Uq1xDFS2oWcN%2FGAizr6WnZ2EXkM5AFsRET6HCVeCbNeMMiC%2BsEGOqUB92Zm2r3c40QsddNkHrSAo%2FyUv7j07VP9Gaoso56OCgXxLV3cXR%2FzByMRXculf8kbF3jgs6EoylM8nFnNBL2yFDLyg03tWomMrfctI%2BhOMdXcMCPFUPm10aMx56KxRQ%2Fwt5dco4nA8sOdhkBaP7hWbrxxf21EnIRUJSoI9Olt%2Bo2FbQf8%2FSo6IRh5CMpyln8dwXRyaJrh9jZMkk2fZFsViV30cLYW&X-Amz-Signature=42f5089282dd9f171f30baea0301d0ff6259328169c7e02ee51a94b17ca49714&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLF423KZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2FpKXb1DFp%2FqigmLvY3Mwar9tiJG5JXE%2BPZZ21aAcC2AiEAzPpOa8KtllYb4sfnXa7uKsigoPaV0w5Ek1lT9OnVTBcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf%2BU8QGU3xEomTw3ircA9jYYkSFDzYyeJYXwcSo%2BzJAzhvU3WNCOe31EtERiu9boejhzHh%2B%2B4FjZiG933CDeKjknzgWTiJ5mIMSBsMfYiDDe%2FWanOmU8h07eNuEqrAhYI2lsvxZr6MekQhhylDSRPGSTSKWv6DCk6J1erpwLW05zuOV8guocLX8mJvEds6AbHPJrVm3ra2W66YDx91NapmdGSjWUutdT692CWthqj9N2EXcxxph2Klron7RZUWFZ%2F2n7w%2BVUG0jHbc8EqXm7tt2J1Btd6%2FwdemM33h0079wtHF8muvdc9dH0%2FyIO9QeO4ob8LOt6YDuksBPKoaJe1VKVKrhBIQ8FTOycKF4NuQ%2BFRuwu03tGv1EKmaX7ams64hQIAlgHADXMvTchGJCcnGMiBC%2BRmaqVsY2S8FpC9CfqHz8mH4zSTX74K7sj4tt9Mx1Q46ioJAf7QGKe1FOS7VOFU1YwpbzIiYLjfKLgSJ5lNazZRff86kR0SOjsttWhlIVGdU%2B85bVpTzEFZdaeAq%2FxPrqzJYy4%2FSEiuLJxnUhmceFH4XhpMu7lFXHiUbVgKCCmubrdlg%2FB3JnNX0gHs0SnUM1EWV0BeCw3Uq1xDFS2oWcN%2FGAizr6WnZ2EXkM5AFsRET6HCVeCbNeMMiC%2BsEGOqUB92Zm2r3c40QsddNkHrSAo%2FyUv7j07VP9Gaoso56OCgXxLV3cXR%2FzByMRXculf8kbF3jgs6EoylM8nFnNBL2yFDLyg03tWomMrfctI%2BhOMdXcMCPFUPm10aMx56KxRQ%2Fwt5dco4nA8sOdhkBaP7hWbrxxf21EnIRUJSoI9Olt%2Bo2FbQf8%2FSo6IRh5CMpyln8dwXRyaJrh9jZMkk2fZFsViV30cLYW&X-Amz-Signature=4f9964167c7b24866057e94b44a992ffdcba6c69e4b20e9b95de36fa71d49336&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
