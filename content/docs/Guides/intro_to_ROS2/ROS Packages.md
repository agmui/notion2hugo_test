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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VBRWNH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD7WMh9G3bT0cf0jX4HyLQPBfrYS6L7357FGbEUOnSYPgIgZQq1I0cZ3QdzDWJXqF2fKVefaj4lw6smsSkgSmoM2qsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSa92eGeI9KeUVTsircA%2BckvzncRkx%2BnZx7kLJ%2F8xJb4F5cR1P%2FR5gJ0Pz12JHnRqr7mOky4ALh5fZLklqR0W9DfZMi949k3%2FNBT74B58TPnqnksPbFKQNnTDMSDg9B1lfGfPqAuXRHqx0tbu%2BtMVWJ16WSxj3GA7t%2FnR2YLeNL853l0wzBLTH%2BtxerGdLiyw%2FtJRRKpxXTmxIejACtcMDTiOd%2BbBsugxGOnBDHv5uHNzdWXLjsp8PziwSzeR9KjSzPCoTo75LSdEu6mU7QU0G%2B4DytsMLstsasq1dBUvh1CN7dt2aLELVwIdYVcR9HNJz1IFjAx%2FEDqk3uBGs11s%2F6F3dyoA4pqEtPqJoDBoFPCok0GSXqNWakDHiznwcHfd52D%2Flr26emNIvDYGAc%2B5nvemJeiHT0UxXONulTCK0j5HRE65%2FQ4dY8hbIWnMIrmkM9Bi5dpM8wMWQea%2B%2FbYwOtMUQPAe27kl0ooPtoRlAZLu5etXPCTLCUnFGRcLDhmB20Ul13Opd7tIqCzveIj%2FEHPZIpr1M%2BpwEqFo31jBNxOGla%2FvIzUFfx869n5jVt5NHMBrzH81EA1dj8f9a3Vad%2BXYbvMlN88Tzmo4xJygRRrR4T4TgBsdoP8%2FxNzuT4iElI7QJlUa%2FHiKCPMN%2Bq2cAGOqUBm9dhOzsfBC4dUCxgeqHuo4kF1gHGm9PqVmTfm6Ih61vqeBu8rpL4rW%2F8zJVJJELPAgiayUoT1fi%2FPacw5fZGYkgOBGiAv3d%2BsaFRPcTtdNC2hGalKtUAfT3eEGVpZunr6sEovSdEc2Id6MATqmkDG29QH825xK4yPcIFgMZlKJ79K3hj5F7HgKRHRCeFznsB14%2FJtiHCXE8Q15PaHfb4NLiqONdi&X-Amz-Signature=03a133a8aa4fdcc20d3eb0f85d6c7e619f58cb87baa34033c955b13f56d79354&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VBRWNH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD7WMh9G3bT0cf0jX4HyLQPBfrYS6L7357FGbEUOnSYPgIgZQq1I0cZ3QdzDWJXqF2fKVefaj4lw6smsSkgSmoM2qsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSa92eGeI9KeUVTsircA%2BckvzncRkx%2BnZx7kLJ%2F8xJb4F5cR1P%2FR5gJ0Pz12JHnRqr7mOky4ALh5fZLklqR0W9DfZMi949k3%2FNBT74B58TPnqnksPbFKQNnTDMSDg9B1lfGfPqAuXRHqx0tbu%2BtMVWJ16WSxj3GA7t%2FnR2YLeNL853l0wzBLTH%2BtxerGdLiyw%2FtJRRKpxXTmxIejACtcMDTiOd%2BbBsugxGOnBDHv5uHNzdWXLjsp8PziwSzeR9KjSzPCoTo75LSdEu6mU7QU0G%2B4DytsMLstsasq1dBUvh1CN7dt2aLELVwIdYVcR9HNJz1IFjAx%2FEDqk3uBGs11s%2F6F3dyoA4pqEtPqJoDBoFPCok0GSXqNWakDHiznwcHfd52D%2Flr26emNIvDYGAc%2B5nvemJeiHT0UxXONulTCK0j5HRE65%2FQ4dY8hbIWnMIrmkM9Bi5dpM8wMWQea%2B%2FbYwOtMUQPAe27kl0ooPtoRlAZLu5etXPCTLCUnFGRcLDhmB20Ul13Opd7tIqCzveIj%2FEHPZIpr1M%2BpwEqFo31jBNxOGla%2FvIzUFfx869n5jVt5NHMBrzH81EA1dj8f9a3Vad%2BXYbvMlN88Tzmo4xJygRRrR4T4TgBsdoP8%2FxNzuT4iElI7QJlUa%2FHiKCPMN%2Bq2cAGOqUBm9dhOzsfBC4dUCxgeqHuo4kF1gHGm9PqVmTfm6Ih61vqeBu8rpL4rW%2F8zJVJJELPAgiayUoT1fi%2FPacw5fZGYkgOBGiAv3d%2BsaFRPcTtdNC2hGalKtUAfT3eEGVpZunr6sEovSdEc2Id6MATqmkDG29QH825xK4yPcIFgMZlKJ79K3hj5F7HgKRHRCeFznsB14%2FJtiHCXE8Q15PaHfb4NLiqONdi&X-Amz-Signature=35d29258800b34053fa35356228f949d7b824495a72f1c0bc1fb19fda809bddb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VBRWNH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD7WMh9G3bT0cf0jX4HyLQPBfrYS6L7357FGbEUOnSYPgIgZQq1I0cZ3QdzDWJXqF2fKVefaj4lw6smsSkgSmoM2qsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSa92eGeI9KeUVTsircA%2BckvzncRkx%2BnZx7kLJ%2F8xJb4F5cR1P%2FR5gJ0Pz12JHnRqr7mOky4ALh5fZLklqR0W9DfZMi949k3%2FNBT74B58TPnqnksPbFKQNnTDMSDg9B1lfGfPqAuXRHqx0tbu%2BtMVWJ16WSxj3GA7t%2FnR2YLeNL853l0wzBLTH%2BtxerGdLiyw%2FtJRRKpxXTmxIejACtcMDTiOd%2BbBsugxGOnBDHv5uHNzdWXLjsp8PziwSzeR9KjSzPCoTo75LSdEu6mU7QU0G%2B4DytsMLstsasq1dBUvh1CN7dt2aLELVwIdYVcR9HNJz1IFjAx%2FEDqk3uBGs11s%2F6F3dyoA4pqEtPqJoDBoFPCok0GSXqNWakDHiznwcHfd52D%2Flr26emNIvDYGAc%2B5nvemJeiHT0UxXONulTCK0j5HRE65%2FQ4dY8hbIWnMIrmkM9Bi5dpM8wMWQea%2B%2FbYwOtMUQPAe27kl0ooPtoRlAZLu5etXPCTLCUnFGRcLDhmB20Ul13Opd7tIqCzveIj%2FEHPZIpr1M%2BpwEqFo31jBNxOGla%2FvIzUFfx869n5jVt5NHMBrzH81EA1dj8f9a3Vad%2BXYbvMlN88Tzmo4xJygRRrR4T4TgBsdoP8%2FxNzuT4iElI7QJlUa%2FHiKCPMN%2Bq2cAGOqUBm9dhOzsfBC4dUCxgeqHuo4kF1gHGm9PqVmTfm6Ih61vqeBu8rpL4rW%2F8zJVJJELPAgiayUoT1fi%2FPacw5fZGYkgOBGiAv3d%2BsaFRPcTtdNC2hGalKtUAfT3eEGVpZunr6sEovSdEc2Id6MATqmkDG29QH825xK4yPcIFgMZlKJ79K3hj5F7HgKRHRCeFznsB14%2FJtiHCXE8Q15PaHfb4NLiqONdi&X-Amz-Signature=28f465d1f85eff8b3f631503096d5e97629588a24b96cc68f92f33affcf197ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VBRWNH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD7WMh9G3bT0cf0jX4HyLQPBfrYS6L7357FGbEUOnSYPgIgZQq1I0cZ3QdzDWJXqF2fKVefaj4lw6smsSkgSmoM2qsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSa92eGeI9KeUVTsircA%2BckvzncRkx%2BnZx7kLJ%2F8xJb4F5cR1P%2FR5gJ0Pz12JHnRqr7mOky4ALh5fZLklqR0W9DfZMi949k3%2FNBT74B58TPnqnksPbFKQNnTDMSDg9B1lfGfPqAuXRHqx0tbu%2BtMVWJ16WSxj3GA7t%2FnR2YLeNL853l0wzBLTH%2BtxerGdLiyw%2FtJRRKpxXTmxIejACtcMDTiOd%2BbBsugxGOnBDHv5uHNzdWXLjsp8PziwSzeR9KjSzPCoTo75LSdEu6mU7QU0G%2B4DytsMLstsasq1dBUvh1CN7dt2aLELVwIdYVcR9HNJz1IFjAx%2FEDqk3uBGs11s%2F6F3dyoA4pqEtPqJoDBoFPCok0GSXqNWakDHiznwcHfd52D%2Flr26emNIvDYGAc%2B5nvemJeiHT0UxXONulTCK0j5HRE65%2FQ4dY8hbIWnMIrmkM9Bi5dpM8wMWQea%2B%2FbYwOtMUQPAe27kl0ooPtoRlAZLu5etXPCTLCUnFGRcLDhmB20Ul13Opd7tIqCzveIj%2FEHPZIpr1M%2BpwEqFo31jBNxOGla%2FvIzUFfx869n5jVt5NHMBrzH81EA1dj8f9a3Vad%2BXYbvMlN88Tzmo4xJygRRrR4T4TgBsdoP8%2FxNzuT4iElI7QJlUa%2FHiKCPMN%2Bq2cAGOqUBm9dhOzsfBC4dUCxgeqHuo4kF1gHGm9PqVmTfm6Ih61vqeBu8rpL4rW%2F8zJVJJELPAgiayUoT1fi%2FPacw5fZGYkgOBGiAv3d%2BsaFRPcTtdNC2hGalKtUAfT3eEGVpZunr6sEovSdEc2Id6MATqmkDG29QH825xK4yPcIFgMZlKJ79K3hj5F7HgKRHRCeFznsB14%2FJtiHCXE8Q15PaHfb4NLiqONdi&X-Amz-Signature=8d7d0e14b3476b0f818634726c9a1e383cc6e593a508aae0894c254aa679306d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VBRWNH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD7WMh9G3bT0cf0jX4HyLQPBfrYS6L7357FGbEUOnSYPgIgZQq1I0cZ3QdzDWJXqF2fKVefaj4lw6smsSkgSmoM2qsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSa92eGeI9KeUVTsircA%2BckvzncRkx%2BnZx7kLJ%2F8xJb4F5cR1P%2FR5gJ0Pz12JHnRqr7mOky4ALh5fZLklqR0W9DfZMi949k3%2FNBT74B58TPnqnksPbFKQNnTDMSDg9B1lfGfPqAuXRHqx0tbu%2BtMVWJ16WSxj3GA7t%2FnR2YLeNL853l0wzBLTH%2BtxerGdLiyw%2FtJRRKpxXTmxIejACtcMDTiOd%2BbBsugxGOnBDHv5uHNzdWXLjsp8PziwSzeR9KjSzPCoTo75LSdEu6mU7QU0G%2B4DytsMLstsasq1dBUvh1CN7dt2aLELVwIdYVcR9HNJz1IFjAx%2FEDqk3uBGs11s%2F6F3dyoA4pqEtPqJoDBoFPCok0GSXqNWakDHiznwcHfd52D%2Flr26emNIvDYGAc%2B5nvemJeiHT0UxXONulTCK0j5HRE65%2FQ4dY8hbIWnMIrmkM9Bi5dpM8wMWQea%2B%2FbYwOtMUQPAe27kl0ooPtoRlAZLu5etXPCTLCUnFGRcLDhmB20Ul13Opd7tIqCzveIj%2FEHPZIpr1M%2BpwEqFo31jBNxOGla%2FvIzUFfx869n5jVt5NHMBrzH81EA1dj8f9a3Vad%2BXYbvMlN88Tzmo4xJygRRrR4T4TgBsdoP8%2FxNzuT4iElI7QJlUa%2FHiKCPMN%2Bq2cAGOqUBm9dhOzsfBC4dUCxgeqHuo4kF1gHGm9PqVmTfm6Ih61vqeBu8rpL4rW%2F8zJVJJELPAgiayUoT1fi%2FPacw5fZGYkgOBGiAv3d%2BsaFRPcTtdNC2hGalKtUAfT3eEGVpZunr6sEovSdEc2Id6MATqmkDG29QH825xK4yPcIFgMZlKJ79K3hj5F7HgKRHRCeFznsB14%2FJtiHCXE8Q15PaHfb4NLiqONdi&X-Amz-Signature=7ea0dd6832a7a2f83edaf782731aa7b24bbee1fc5260f8f051bc648db93aa1cf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VBRWNH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD7WMh9G3bT0cf0jX4HyLQPBfrYS6L7357FGbEUOnSYPgIgZQq1I0cZ3QdzDWJXqF2fKVefaj4lw6smsSkgSmoM2qsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSa92eGeI9KeUVTsircA%2BckvzncRkx%2BnZx7kLJ%2F8xJb4F5cR1P%2FR5gJ0Pz12JHnRqr7mOky4ALh5fZLklqR0W9DfZMi949k3%2FNBT74B58TPnqnksPbFKQNnTDMSDg9B1lfGfPqAuXRHqx0tbu%2BtMVWJ16WSxj3GA7t%2FnR2YLeNL853l0wzBLTH%2BtxerGdLiyw%2FtJRRKpxXTmxIejACtcMDTiOd%2BbBsugxGOnBDHv5uHNzdWXLjsp8PziwSzeR9KjSzPCoTo75LSdEu6mU7QU0G%2B4DytsMLstsasq1dBUvh1CN7dt2aLELVwIdYVcR9HNJz1IFjAx%2FEDqk3uBGs11s%2F6F3dyoA4pqEtPqJoDBoFPCok0GSXqNWakDHiznwcHfd52D%2Flr26emNIvDYGAc%2B5nvemJeiHT0UxXONulTCK0j5HRE65%2FQ4dY8hbIWnMIrmkM9Bi5dpM8wMWQea%2B%2FbYwOtMUQPAe27kl0ooPtoRlAZLu5etXPCTLCUnFGRcLDhmB20Ul13Opd7tIqCzveIj%2FEHPZIpr1M%2BpwEqFo31jBNxOGla%2FvIzUFfx869n5jVt5NHMBrzH81EA1dj8f9a3Vad%2BXYbvMlN88Tzmo4xJygRRrR4T4TgBsdoP8%2FxNzuT4iElI7QJlUa%2FHiKCPMN%2Bq2cAGOqUBm9dhOzsfBC4dUCxgeqHuo4kF1gHGm9PqVmTfm6Ih61vqeBu8rpL4rW%2F8zJVJJELPAgiayUoT1fi%2FPacw5fZGYkgOBGiAv3d%2BsaFRPcTtdNC2hGalKtUAfT3eEGVpZunr6sEovSdEc2Id6MATqmkDG29QH825xK4yPcIFgMZlKJ79K3hj5F7HgKRHRCeFznsB14%2FJtiHCXE8Q15PaHfb4NLiqONdi&X-Amz-Signature=fd42a35b95ceb79537e39b2833d5438097ea3a7e0dfdf0a92b59332982e3dbad&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VBRWNH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD7WMh9G3bT0cf0jX4HyLQPBfrYS6L7357FGbEUOnSYPgIgZQq1I0cZ3QdzDWJXqF2fKVefaj4lw6smsSkgSmoM2qsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSa92eGeI9KeUVTsircA%2BckvzncRkx%2BnZx7kLJ%2F8xJb4F5cR1P%2FR5gJ0Pz12JHnRqr7mOky4ALh5fZLklqR0W9DfZMi949k3%2FNBT74B58TPnqnksPbFKQNnTDMSDg9B1lfGfPqAuXRHqx0tbu%2BtMVWJ16WSxj3GA7t%2FnR2YLeNL853l0wzBLTH%2BtxerGdLiyw%2FtJRRKpxXTmxIejACtcMDTiOd%2BbBsugxGOnBDHv5uHNzdWXLjsp8PziwSzeR9KjSzPCoTo75LSdEu6mU7QU0G%2B4DytsMLstsasq1dBUvh1CN7dt2aLELVwIdYVcR9HNJz1IFjAx%2FEDqk3uBGs11s%2F6F3dyoA4pqEtPqJoDBoFPCok0GSXqNWakDHiznwcHfd52D%2Flr26emNIvDYGAc%2B5nvemJeiHT0UxXONulTCK0j5HRE65%2FQ4dY8hbIWnMIrmkM9Bi5dpM8wMWQea%2B%2FbYwOtMUQPAe27kl0ooPtoRlAZLu5etXPCTLCUnFGRcLDhmB20Ul13Opd7tIqCzveIj%2FEHPZIpr1M%2BpwEqFo31jBNxOGla%2FvIzUFfx869n5jVt5NHMBrzH81EA1dj8f9a3Vad%2BXYbvMlN88Tzmo4xJygRRrR4T4TgBsdoP8%2FxNzuT4iElI7QJlUa%2FHiKCPMN%2Bq2cAGOqUBm9dhOzsfBC4dUCxgeqHuo4kF1gHGm9PqVmTfm6Ih61vqeBu8rpL4rW%2F8zJVJJELPAgiayUoT1fi%2FPacw5fZGYkgOBGiAv3d%2BsaFRPcTtdNC2hGalKtUAfT3eEGVpZunr6sEovSdEc2Id6MATqmkDG29QH825xK4yPcIFgMZlKJ79K3hj5F7HgKRHRCeFznsB14%2FJtiHCXE8Q15PaHfb4NLiqONdi&X-Amz-Signature=e56ebd924aa51b9613ca1e95788f0641eedc2d25357b11ed7ab7c6f194a0078b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
