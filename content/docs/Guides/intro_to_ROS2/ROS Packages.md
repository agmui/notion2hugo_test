---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2W7H72%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHVQjY8NsHSy3rCA2xEZBOuXazGO7ZpDksfrFPR9BSLjAiEAlPIs2cTL2JVofTJT9ujPiREmXJ%2BLUt18S8fzXCWFK6oqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkLi9H33oxTNfRZayrcA1NjplIulIvWGt3gEj%2FT5jtgcDZaQ7R%2FVWQV%2BnBI9EQsmRx1zXk0z2L4JDwrVb%2FPOlyVrfwrd9nPfAXOLFpT8YiP4tN%2BbPDml%2F1GIpfUuaLwFDxiO0In7rFTohgOq43i38fAmbntN32iQr%2BTRoT4Aschkum31UsVb%2BpIaXEGXGoADFl%2BWyOTiUNJQrLXJf42jPXi6SxPHVD9kWrXw5CrJtYjJaSmN0wJHnCXJJPn5S6u%2FYiIVU3vQNdGPA96laRw%2BJZAuMXNqtFNZInEOLWNGynpVmwEXVrWWt0iBHpOYdatjmVhiNT6GLEHI1NykCiB5w7ZDYmvKCrQxi51WbuSSPjgVmVllRYsuaQ6OBC2A4Ho94jdWHDuMIZ1JJeQfYHGZUo023gAzMHMIMepfAqFSLWVXfYQRwJBJDp5UdBYOpCRoMMM1EINZcTx3bnnpVm9gNjmgBk%2BzJtEFbkmTUQXUWfjxWx8ksr0gnKTRo4lhezEqFqLAt5CzcgnbLY8iZtozMcgosedq7R28yz70BAmjSTNZ6nkJwKuwFl8vo7z7CjUpx416kjs5qEX%2Fk%2BnfGpU2%2BSD58HK%2BY9TLwey6aHDwfG3khzva%2BuNtxn7n8GO5M9g0JnO49zDtxHNhD0tML3Q6MMGOqUBM0AiwTNKBFR2VfBB5qv%2FPW7LnvitAqLoHaUZJ9U2UiieUagqlWug%2Bqqog9So1w7faYpefw5AjxgPGeBt54g2Yh64xX2qBVD5Y%2FGo5GJod2atHn3huUJ%2BM%2FIdf3LQrduQeezYiDVrA12uK5sn7ro1l1mUokGgaBJDz0sl7%2BQOiv931py5Nq2mXPQzQMvjORsmbMgVO%2FoBY5eSW6ALnt8An7Fcfwag&X-Amz-Signature=5a006c86ab50cb61ea1a7faa5d6eab6bb47080611f7893af90bdb140cbadef0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2W7H72%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHVQjY8NsHSy3rCA2xEZBOuXazGO7ZpDksfrFPR9BSLjAiEAlPIs2cTL2JVofTJT9ujPiREmXJ%2BLUt18S8fzXCWFK6oqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkLi9H33oxTNfRZayrcA1NjplIulIvWGt3gEj%2FT5jtgcDZaQ7R%2FVWQV%2BnBI9EQsmRx1zXk0z2L4JDwrVb%2FPOlyVrfwrd9nPfAXOLFpT8YiP4tN%2BbPDml%2F1GIpfUuaLwFDxiO0In7rFTohgOq43i38fAmbntN32iQr%2BTRoT4Aschkum31UsVb%2BpIaXEGXGoADFl%2BWyOTiUNJQrLXJf42jPXi6SxPHVD9kWrXw5CrJtYjJaSmN0wJHnCXJJPn5S6u%2FYiIVU3vQNdGPA96laRw%2BJZAuMXNqtFNZInEOLWNGynpVmwEXVrWWt0iBHpOYdatjmVhiNT6GLEHI1NykCiB5w7ZDYmvKCrQxi51WbuSSPjgVmVllRYsuaQ6OBC2A4Ho94jdWHDuMIZ1JJeQfYHGZUo023gAzMHMIMepfAqFSLWVXfYQRwJBJDp5UdBYOpCRoMMM1EINZcTx3bnnpVm9gNjmgBk%2BzJtEFbkmTUQXUWfjxWx8ksr0gnKTRo4lhezEqFqLAt5CzcgnbLY8iZtozMcgosedq7R28yz70BAmjSTNZ6nkJwKuwFl8vo7z7CjUpx416kjs5qEX%2Fk%2BnfGpU2%2BSD58HK%2BY9TLwey6aHDwfG3khzva%2BuNtxn7n8GO5M9g0JnO49zDtxHNhD0tML3Q6MMGOqUBM0AiwTNKBFR2VfBB5qv%2FPW7LnvitAqLoHaUZJ9U2UiieUagqlWug%2Bqqog9So1w7faYpefw5AjxgPGeBt54g2Yh64xX2qBVD5Y%2FGo5GJod2atHn3huUJ%2BM%2FIdf3LQrduQeezYiDVrA12uK5sn7ro1l1mUokGgaBJDz0sl7%2BQOiv931py5Nq2mXPQzQMvjORsmbMgVO%2FoBY5eSW6ALnt8An7Fcfwag&X-Amz-Signature=f090a2dd8235b02d292c5241933851fd6b939a2a9915573ade12337d72c9bf9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2W7H72%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHVQjY8NsHSy3rCA2xEZBOuXazGO7ZpDksfrFPR9BSLjAiEAlPIs2cTL2JVofTJT9ujPiREmXJ%2BLUt18S8fzXCWFK6oqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkLi9H33oxTNfRZayrcA1NjplIulIvWGt3gEj%2FT5jtgcDZaQ7R%2FVWQV%2BnBI9EQsmRx1zXk0z2L4JDwrVb%2FPOlyVrfwrd9nPfAXOLFpT8YiP4tN%2BbPDml%2F1GIpfUuaLwFDxiO0In7rFTohgOq43i38fAmbntN32iQr%2BTRoT4Aschkum31UsVb%2BpIaXEGXGoADFl%2BWyOTiUNJQrLXJf42jPXi6SxPHVD9kWrXw5CrJtYjJaSmN0wJHnCXJJPn5S6u%2FYiIVU3vQNdGPA96laRw%2BJZAuMXNqtFNZInEOLWNGynpVmwEXVrWWt0iBHpOYdatjmVhiNT6GLEHI1NykCiB5w7ZDYmvKCrQxi51WbuSSPjgVmVllRYsuaQ6OBC2A4Ho94jdWHDuMIZ1JJeQfYHGZUo023gAzMHMIMepfAqFSLWVXfYQRwJBJDp5UdBYOpCRoMMM1EINZcTx3bnnpVm9gNjmgBk%2BzJtEFbkmTUQXUWfjxWx8ksr0gnKTRo4lhezEqFqLAt5CzcgnbLY8iZtozMcgosedq7R28yz70BAmjSTNZ6nkJwKuwFl8vo7z7CjUpx416kjs5qEX%2Fk%2BnfGpU2%2BSD58HK%2BY9TLwey6aHDwfG3khzva%2BuNtxn7n8GO5M9g0JnO49zDtxHNhD0tML3Q6MMGOqUBM0AiwTNKBFR2VfBB5qv%2FPW7LnvitAqLoHaUZJ9U2UiieUagqlWug%2Bqqog9So1w7faYpefw5AjxgPGeBt54g2Yh64xX2qBVD5Y%2FGo5GJod2atHn3huUJ%2BM%2FIdf3LQrduQeezYiDVrA12uK5sn7ro1l1mUokGgaBJDz0sl7%2BQOiv931py5Nq2mXPQzQMvjORsmbMgVO%2FoBY5eSW6ALnt8An7Fcfwag&X-Amz-Signature=5ad429a42ef7a070f308c9e7d35b5e808a6c9de260f3d70e5b0386ee2280f655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2W7H72%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHVQjY8NsHSy3rCA2xEZBOuXazGO7ZpDksfrFPR9BSLjAiEAlPIs2cTL2JVofTJT9ujPiREmXJ%2BLUt18S8fzXCWFK6oqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkLi9H33oxTNfRZayrcA1NjplIulIvWGt3gEj%2FT5jtgcDZaQ7R%2FVWQV%2BnBI9EQsmRx1zXk0z2L4JDwrVb%2FPOlyVrfwrd9nPfAXOLFpT8YiP4tN%2BbPDml%2F1GIpfUuaLwFDxiO0In7rFTohgOq43i38fAmbntN32iQr%2BTRoT4Aschkum31UsVb%2BpIaXEGXGoADFl%2BWyOTiUNJQrLXJf42jPXi6SxPHVD9kWrXw5CrJtYjJaSmN0wJHnCXJJPn5S6u%2FYiIVU3vQNdGPA96laRw%2BJZAuMXNqtFNZInEOLWNGynpVmwEXVrWWt0iBHpOYdatjmVhiNT6GLEHI1NykCiB5w7ZDYmvKCrQxi51WbuSSPjgVmVllRYsuaQ6OBC2A4Ho94jdWHDuMIZ1JJeQfYHGZUo023gAzMHMIMepfAqFSLWVXfYQRwJBJDp5UdBYOpCRoMMM1EINZcTx3bnnpVm9gNjmgBk%2BzJtEFbkmTUQXUWfjxWx8ksr0gnKTRo4lhezEqFqLAt5CzcgnbLY8iZtozMcgosedq7R28yz70BAmjSTNZ6nkJwKuwFl8vo7z7CjUpx416kjs5qEX%2Fk%2BnfGpU2%2BSD58HK%2BY9TLwey6aHDwfG3khzva%2BuNtxn7n8GO5M9g0JnO49zDtxHNhD0tML3Q6MMGOqUBM0AiwTNKBFR2VfBB5qv%2FPW7LnvitAqLoHaUZJ9U2UiieUagqlWug%2Bqqog9So1w7faYpefw5AjxgPGeBt54g2Yh64xX2qBVD5Y%2FGo5GJod2atHn3huUJ%2BM%2FIdf3LQrduQeezYiDVrA12uK5sn7ro1l1mUokGgaBJDz0sl7%2BQOiv931py5Nq2mXPQzQMvjORsmbMgVO%2FoBY5eSW6ALnt8An7Fcfwag&X-Amz-Signature=34e1cd2c9b72957dd11d91a0b12783ef9ec7c2190eba3a69aefb36b828eb7895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2W7H72%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHVQjY8NsHSy3rCA2xEZBOuXazGO7ZpDksfrFPR9BSLjAiEAlPIs2cTL2JVofTJT9ujPiREmXJ%2BLUt18S8fzXCWFK6oqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkLi9H33oxTNfRZayrcA1NjplIulIvWGt3gEj%2FT5jtgcDZaQ7R%2FVWQV%2BnBI9EQsmRx1zXk0z2L4JDwrVb%2FPOlyVrfwrd9nPfAXOLFpT8YiP4tN%2BbPDml%2F1GIpfUuaLwFDxiO0In7rFTohgOq43i38fAmbntN32iQr%2BTRoT4Aschkum31UsVb%2BpIaXEGXGoADFl%2BWyOTiUNJQrLXJf42jPXi6SxPHVD9kWrXw5CrJtYjJaSmN0wJHnCXJJPn5S6u%2FYiIVU3vQNdGPA96laRw%2BJZAuMXNqtFNZInEOLWNGynpVmwEXVrWWt0iBHpOYdatjmVhiNT6GLEHI1NykCiB5w7ZDYmvKCrQxi51WbuSSPjgVmVllRYsuaQ6OBC2A4Ho94jdWHDuMIZ1JJeQfYHGZUo023gAzMHMIMepfAqFSLWVXfYQRwJBJDp5UdBYOpCRoMMM1EINZcTx3bnnpVm9gNjmgBk%2BzJtEFbkmTUQXUWfjxWx8ksr0gnKTRo4lhezEqFqLAt5CzcgnbLY8iZtozMcgosedq7R28yz70BAmjSTNZ6nkJwKuwFl8vo7z7CjUpx416kjs5qEX%2Fk%2BnfGpU2%2BSD58HK%2BY9TLwey6aHDwfG3khzva%2BuNtxn7n8GO5M9g0JnO49zDtxHNhD0tML3Q6MMGOqUBM0AiwTNKBFR2VfBB5qv%2FPW7LnvitAqLoHaUZJ9U2UiieUagqlWug%2Bqqog9So1w7faYpefw5AjxgPGeBt54g2Yh64xX2qBVD5Y%2FGo5GJod2atHn3huUJ%2BM%2FIdf3LQrduQeezYiDVrA12uK5sn7ro1l1mUokGgaBJDz0sl7%2BQOiv931py5Nq2mXPQzQMvjORsmbMgVO%2FoBY5eSW6ALnt8An7Fcfwag&X-Amz-Signature=03003a1e805d5b27f95879f5b7a84a1c394b7928be88bae3c41f6bb812d2bab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2W7H72%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHVQjY8NsHSy3rCA2xEZBOuXazGO7ZpDksfrFPR9BSLjAiEAlPIs2cTL2JVofTJT9ujPiREmXJ%2BLUt18S8fzXCWFK6oqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkLi9H33oxTNfRZayrcA1NjplIulIvWGt3gEj%2FT5jtgcDZaQ7R%2FVWQV%2BnBI9EQsmRx1zXk0z2L4JDwrVb%2FPOlyVrfwrd9nPfAXOLFpT8YiP4tN%2BbPDml%2F1GIpfUuaLwFDxiO0In7rFTohgOq43i38fAmbntN32iQr%2BTRoT4Aschkum31UsVb%2BpIaXEGXGoADFl%2BWyOTiUNJQrLXJf42jPXi6SxPHVD9kWrXw5CrJtYjJaSmN0wJHnCXJJPn5S6u%2FYiIVU3vQNdGPA96laRw%2BJZAuMXNqtFNZInEOLWNGynpVmwEXVrWWt0iBHpOYdatjmVhiNT6GLEHI1NykCiB5w7ZDYmvKCrQxi51WbuSSPjgVmVllRYsuaQ6OBC2A4Ho94jdWHDuMIZ1JJeQfYHGZUo023gAzMHMIMepfAqFSLWVXfYQRwJBJDp5UdBYOpCRoMMM1EINZcTx3bnnpVm9gNjmgBk%2BzJtEFbkmTUQXUWfjxWx8ksr0gnKTRo4lhezEqFqLAt5CzcgnbLY8iZtozMcgosedq7R28yz70BAmjSTNZ6nkJwKuwFl8vo7z7CjUpx416kjs5qEX%2Fk%2BnfGpU2%2BSD58HK%2BY9TLwey6aHDwfG3khzva%2BuNtxn7n8GO5M9g0JnO49zDtxHNhD0tML3Q6MMGOqUBM0AiwTNKBFR2VfBB5qv%2FPW7LnvitAqLoHaUZJ9U2UiieUagqlWug%2Bqqog9So1w7faYpefw5AjxgPGeBt54g2Yh64xX2qBVD5Y%2FGo5GJod2atHn3huUJ%2BM%2FIdf3LQrduQeezYiDVrA12uK5sn7ro1l1mUokGgaBJDz0sl7%2BQOiv931py5Nq2mXPQzQMvjORsmbMgVO%2FoBY5eSW6ALnt8An7Fcfwag&X-Amz-Signature=09d0307691cd92cb4d41a5e88bb7636812467e690b8b175be493750dcce81f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2W7H72%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHVQjY8NsHSy3rCA2xEZBOuXazGO7ZpDksfrFPR9BSLjAiEAlPIs2cTL2JVofTJT9ujPiREmXJ%2BLUt18S8fzXCWFK6oqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkLi9H33oxTNfRZayrcA1NjplIulIvWGt3gEj%2FT5jtgcDZaQ7R%2FVWQV%2BnBI9EQsmRx1zXk0z2L4JDwrVb%2FPOlyVrfwrd9nPfAXOLFpT8YiP4tN%2BbPDml%2F1GIpfUuaLwFDxiO0In7rFTohgOq43i38fAmbntN32iQr%2BTRoT4Aschkum31UsVb%2BpIaXEGXGoADFl%2BWyOTiUNJQrLXJf42jPXi6SxPHVD9kWrXw5CrJtYjJaSmN0wJHnCXJJPn5S6u%2FYiIVU3vQNdGPA96laRw%2BJZAuMXNqtFNZInEOLWNGynpVmwEXVrWWt0iBHpOYdatjmVhiNT6GLEHI1NykCiB5w7ZDYmvKCrQxi51WbuSSPjgVmVllRYsuaQ6OBC2A4Ho94jdWHDuMIZ1JJeQfYHGZUo023gAzMHMIMepfAqFSLWVXfYQRwJBJDp5UdBYOpCRoMMM1EINZcTx3bnnpVm9gNjmgBk%2BzJtEFbkmTUQXUWfjxWx8ksr0gnKTRo4lhezEqFqLAt5CzcgnbLY8iZtozMcgosedq7R28yz70BAmjSTNZ6nkJwKuwFl8vo7z7CjUpx416kjs5qEX%2Fk%2BnfGpU2%2BSD58HK%2BY9TLwey6aHDwfG3khzva%2BuNtxn7n8GO5M9g0JnO49zDtxHNhD0tML3Q6MMGOqUBM0AiwTNKBFR2VfBB5qv%2FPW7LnvitAqLoHaUZJ9U2UiieUagqlWug%2Bqqog9So1w7faYpefw5AjxgPGeBt54g2Yh64xX2qBVD5Y%2FGo5GJod2atHn3huUJ%2BM%2FIdf3LQrduQeezYiDVrA12uK5sn7ro1l1mUokGgaBJDz0sl7%2BQOiv931py5Nq2mXPQzQMvjORsmbMgVO%2FoBY5eSW6ALnt8An7Fcfwag&X-Amz-Signature=c0855ec3b4e3bf02cee8a56dc6101dcaaa690eabcbfd19e701ddf543af12f152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
