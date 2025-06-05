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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7U4EMVE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDiTePpOuEXFXOUhfOzBD8y9AvctnaRZxBQwelVFdmkOAIhALz8Jn6RFzGNhvl9mhr08di97M1nkjFGy%2FahXL950mGcKv8DCEAQABoMNjM3NDIzMTgzODA1IgxeQrL%2BkUvU4Bp8fLoq3AMjIw6rFoOM09%2BOU%2BTg3Ei6QmuVRXiod%2FOHlD6pwYsEzeiLDQwD1NIAILWQoB86RtYwbOf9d96v6ayozn7JlwDtjYKdtYE%2BE3ABEme6ISMV4AFQiNbD2Nx1hrhRx76NeexSeMyx9J%2F2ouqop4zrVN8YOSfDB4AAZ3OYlml9xLGf4bBbWjzxWQOZNXDKIfFhEBi7UroRL7RZkaIlKL0Pj3BxN1LGLVZHdK8gNGU0GV5j%2BB3GMbIsnVp9G1H%2FFO6u%2FOvlQCRjgGBMVG7VaC1sfKYDnikBVz3W7cqp18eH5%2FKkiG4IHr49EHCuecrDkOnX0KtgGNeCwFdZL459yaKYRmoeyp8ykW%2FXBQj%2FwqPKoJQsUn6aukHCWOOaKlBJcnZXHEWMaM7FCdKfGq6t%2Bh0v8%2BcRw%2F%2BdWdpnyvs4TkkfhsifBXiJiSXZVM0dgu9R1f1G5ZO4CUb52JvKJvz58mtr1y7nwmSOLtvWem54ONmYSLEvepjY6wLiIzdQQ2CNgm4f3lxV22XFLcRziYMaWMAulbP3Bw1X71D%2F2i0mIbEwBB%2FDDk2KUhyR0N0M1niHVArmKfhbXD4dm8GouWY7tuicnloyNAHImWsVeF9AcTFEhcGR8cyy6PMhuaoT0cKtmzD%2FioXCBjqkAas%2FdRds%2FBvWtSwIrRy5fGPQOBJyIyh02zHVlafO27Wl2GUhwBvARovg4hcqrrd66TSl94Ox7Zi0ymW3MNVWPFUPM0CHha7WEFEaPGFTaU1ebT%2FleyGgQ08aSVgveWH4WZveKg%2B9c%2F8CejmoWgrAJpIjPt03yXrRS4ed7Q%2FKoLfZ76T0B1nDxkEyjiARXTJoINYqKYURaGxld8Der8waDuDxHW0E&X-Amz-Signature=9153ad97967bbe4af6f54693d65aba13b3cdc79ff636bb4ee18fbb4873869b50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7U4EMVE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDiTePpOuEXFXOUhfOzBD8y9AvctnaRZxBQwelVFdmkOAIhALz8Jn6RFzGNhvl9mhr08di97M1nkjFGy%2FahXL950mGcKv8DCEAQABoMNjM3NDIzMTgzODA1IgxeQrL%2BkUvU4Bp8fLoq3AMjIw6rFoOM09%2BOU%2BTg3Ei6QmuVRXiod%2FOHlD6pwYsEzeiLDQwD1NIAILWQoB86RtYwbOf9d96v6ayozn7JlwDtjYKdtYE%2BE3ABEme6ISMV4AFQiNbD2Nx1hrhRx76NeexSeMyx9J%2F2ouqop4zrVN8YOSfDB4AAZ3OYlml9xLGf4bBbWjzxWQOZNXDKIfFhEBi7UroRL7RZkaIlKL0Pj3BxN1LGLVZHdK8gNGU0GV5j%2BB3GMbIsnVp9G1H%2FFO6u%2FOvlQCRjgGBMVG7VaC1sfKYDnikBVz3W7cqp18eH5%2FKkiG4IHr49EHCuecrDkOnX0KtgGNeCwFdZL459yaKYRmoeyp8ykW%2FXBQj%2FwqPKoJQsUn6aukHCWOOaKlBJcnZXHEWMaM7FCdKfGq6t%2Bh0v8%2BcRw%2F%2BdWdpnyvs4TkkfhsifBXiJiSXZVM0dgu9R1f1G5ZO4CUb52JvKJvz58mtr1y7nwmSOLtvWem54ONmYSLEvepjY6wLiIzdQQ2CNgm4f3lxV22XFLcRziYMaWMAulbP3Bw1X71D%2F2i0mIbEwBB%2FDDk2KUhyR0N0M1niHVArmKfhbXD4dm8GouWY7tuicnloyNAHImWsVeF9AcTFEhcGR8cyy6PMhuaoT0cKtmzD%2FioXCBjqkAas%2FdRds%2FBvWtSwIrRy5fGPQOBJyIyh02zHVlafO27Wl2GUhwBvARovg4hcqrrd66TSl94Ox7Zi0ymW3MNVWPFUPM0CHha7WEFEaPGFTaU1ebT%2FleyGgQ08aSVgveWH4WZveKg%2B9c%2F8CejmoWgrAJpIjPt03yXrRS4ed7Q%2FKoLfZ76T0B1nDxkEyjiARXTJoINYqKYURaGxld8Der8waDuDxHW0E&X-Amz-Signature=00128d1cd14602dafcca5ff8839703872d7fb0b9a74ab01ba9959d79523771ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7U4EMVE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDiTePpOuEXFXOUhfOzBD8y9AvctnaRZxBQwelVFdmkOAIhALz8Jn6RFzGNhvl9mhr08di97M1nkjFGy%2FahXL950mGcKv8DCEAQABoMNjM3NDIzMTgzODA1IgxeQrL%2BkUvU4Bp8fLoq3AMjIw6rFoOM09%2BOU%2BTg3Ei6QmuVRXiod%2FOHlD6pwYsEzeiLDQwD1NIAILWQoB86RtYwbOf9d96v6ayozn7JlwDtjYKdtYE%2BE3ABEme6ISMV4AFQiNbD2Nx1hrhRx76NeexSeMyx9J%2F2ouqop4zrVN8YOSfDB4AAZ3OYlml9xLGf4bBbWjzxWQOZNXDKIfFhEBi7UroRL7RZkaIlKL0Pj3BxN1LGLVZHdK8gNGU0GV5j%2BB3GMbIsnVp9G1H%2FFO6u%2FOvlQCRjgGBMVG7VaC1sfKYDnikBVz3W7cqp18eH5%2FKkiG4IHr49EHCuecrDkOnX0KtgGNeCwFdZL459yaKYRmoeyp8ykW%2FXBQj%2FwqPKoJQsUn6aukHCWOOaKlBJcnZXHEWMaM7FCdKfGq6t%2Bh0v8%2BcRw%2F%2BdWdpnyvs4TkkfhsifBXiJiSXZVM0dgu9R1f1G5ZO4CUb52JvKJvz58mtr1y7nwmSOLtvWem54ONmYSLEvepjY6wLiIzdQQ2CNgm4f3lxV22XFLcRziYMaWMAulbP3Bw1X71D%2F2i0mIbEwBB%2FDDk2KUhyR0N0M1niHVArmKfhbXD4dm8GouWY7tuicnloyNAHImWsVeF9AcTFEhcGR8cyy6PMhuaoT0cKtmzD%2FioXCBjqkAas%2FdRds%2FBvWtSwIrRy5fGPQOBJyIyh02zHVlafO27Wl2GUhwBvARovg4hcqrrd66TSl94Ox7Zi0ymW3MNVWPFUPM0CHha7WEFEaPGFTaU1ebT%2FleyGgQ08aSVgveWH4WZveKg%2B9c%2F8CejmoWgrAJpIjPt03yXrRS4ed7Q%2FKoLfZ76T0B1nDxkEyjiARXTJoINYqKYURaGxld8Der8waDuDxHW0E&X-Amz-Signature=0e929fbb360b1bbfcaef607a87dde4ecc429bdec5f685221a73818df0aa4b849&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7U4EMVE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDiTePpOuEXFXOUhfOzBD8y9AvctnaRZxBQwelVFdmkOAIhALz8Jn6RFzGNhvl9mhr08di97M1nkjFGy%2FahXL950mGcKv8DCEAQABoMNjM3NDIzMTgzODA1IgxeQrL%2BkUvU4Bp8fLoq3AMjIw6rFoOM09%2BOU%2BTg3Ei6QmuVRXiod%2FOHlD6pwYsEzeiLDQwD1NIAILWQoB86RtYwbOf9d96v6ayozn7JlwDtjYKdtYE%2BE3ABEme6ISMV4AFQiNbD2Nx1hrhRx76NeexSeMyx9J%2F2ouqop4zrVN8YOSfDB4AAZ3OYlml9xLGf4bBbWjzxWQOZNXDKIfFhEBi7UroRL7RZkaIlKL0Pj3BxN1LGLVZHdK8gNGU0GV5j%2BB3GMbIsnVp9G1H%2FFO6u%2FOvlQCRjgGBMVG7VaC1sfKYDnikBVz3W7cqp18eH5%2FKkiG4IHr49EHCuecrDkOnX0KtgGNeCwFdZL459yaKYRmoeyp8ykW%2FXBQj%2FwqPKoJQsUn6aukHCWOOaKlBJcnZXHEWMaM7FCdKfGq6t%2Bh0v8%2BcRw%2F%2BdWdpnyvs4TkkfhsifBXiJiSXZVM0dgu9R1f1G5ZO4CUb52JvKJvz58mtr1y7nwmSOLtvWem54ONmYSLEvepjY6wLiIzdQQ2CNgm4f3lxV22XFLcRziYMaWMAulbP3Bw1X71D%2F2i0mIbEwBB%2FDDk2KUhyR0N0M1niHVArmKfhbXD4dm8GouWY7tuicnloyNAHImWsVeF9AcTFEhcGR8cyy6PMhuaoT0cKtmzD%2FioXCBjqkAas%2FdRds%2FBvWtSwIrRy5fGPQOBJyIyh02zHVlafO27Wl2GUhwBvARovg4hcqrrd66TSl94Ox7Zi0ymW3MNVWPFUPM0CHha7WEFEaPGFTaU1ebT%2FleyGgQ08aSVgveWH4WZveKg%2B9c%2F8CejmoWgrAJpIjPt03yXrRS4ed7Q%2FKoLfZ76T0B1nDxkEyjiARXTJoINYqKYURaGxld8Der8waDuDxHW0E&X-Amz-Signature=aa794c0180c6297a952f81b0bd82b4d7543ea7ae984d690a8ed4709cafc8b2bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7U4EMVE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDiTePpOuEXFXOUhfOzBD8y9AvctnaRZxBQwelVFdmkOAIhALz8Jn6RFzGNhvl9mhr08di97M1nkjFGy%2FahXL950mGcKv8DCEAQABoMNjM3NDIzMTgzODA1IgxeQrL%2BkUvU4Bp8fLoq3AMjIw6rFoOM09%2BOU%2BTg3Ei6QmuVRXiod%2FOHlD6pwYsEzeiLDQwD1NIAILWQoB86RtYwbOf9d96v6ayozn7JlwDtjYKdtYE%2BE3ABEme6ISMV4AFQiNbD2Nx1hrhRx76NeexSeMyx9J%2F2ouqop4zrVN8YOSfDB4AAZ3OYlml9xLGf4bBbWjzxWQOZNXDKIfFhEBi7UroRL7RZkaIlKL0Pj3BxN1LGLVZHdK8gNGU0GV5j%2BB3GMbIsnVp9G1H%2FFO6u%2FOvlQCRjgGBMVG7VaC1sfKYDnikBVz3W7cqp18eH5%2FKkiG4IHr49EHCuecrDkOnX0KtgGNeCwFdZL459yaKYRmoeyp8ykW%2FXBQj%2FwqPKoJQsUn6aukHCWOOaKlBJcnZXHEWMaM7FCdKfGq6t%2Bh0v8%2BcRw%2F%2BdWdpnyvs4TkkfhsifBXiJiSXZVM0dgu9R1f1G5ZO4CUb52JvKJvz58mtr1y7nwmSOLtvWem54ONmYSLEvepjY6wLiIzdQQ2CNgm4f3lxV22XFLcRziYMaWMAulbP3Bw1X71D%2F2i0mIbEwBB%2FDDk2KUhyR0N0M1niHVArmKfhbXD4dm8GouWY7tuicnloyNAHImWsVeF9AcTFEhcGR8cyy6PMhuaoT0cKtmzD%2FioXCBjqkAas%2FdRds%2FBvWtSwIrRy5fGPQOBJyIyh02zHVlafO27Wl2GUhwBvARovg4hcqrrd66TSl94Ox7Zi0ymW3MNVWPFUPM0CHha7WEFEaPGFTaU1ebT%2FleyGgQ08aSVgveWH4WZveKg%2B9c%2F8CejmoWgrAJpIjPt03yXrRS4ed7Q%2FKoLfZ76T0B1nDxkEyjiARXTJoINYqKYURaGxld8Der8waDuDxHW0E&X-Amz-Signature=5ded6c8a416cd36f4c142264b6a64a21835bdbf9e30713ea758f832e73ff23a6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7U4EMVE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDiTePpOuEXFXOUhfOzBD8y9AvctnaRZxBQwelVFdmkOAIhALz8Jn6RFzGNhvl9mhr08di97M1nkjFGy%2FahXL950mGcKv8DCEAQABoMNjM3NDIzMTgzODA1IgxeQrL%2BkUvU4Bp8fLoq3AMjIw6rFoOM09%2BOU%2BTg3Ei6QmuVRXiod%2FOHlD6pwYsEzeiLDQwD1NIAILWQoB86RtYwbOf9d96v6ayozn7JlwDtjYKdtYE%2BE3ABEme6ISMV4AFQiNbD2Nx1hrhRx76NeexSeMyx9J%2F2ouqop4zrVN8YOSfDB4AAZ3OYlml9xLGf4bBbWjzxWQOZNXDKIfFhEBi7UroRL7RZkaIlKL0Pj3BxN1LGLVZHdK8gNGU0GV5j%2BB3GMbIsnVp9G1H%2FFO6u%2FOvlQCRjgGBMVG7VaC1sfKYDnikBVz3W7cqp18eH5%2FKkiG4IHr49EHCuecrDkOnX0KtgGNeCwFdZL459yaKYRmoeyp8ykW%2FXBQj%2FwqPKoJQsUn6aukHCWOOaKlBJcnZXHEWMaM7FCdKfGq6t%2Bh0v8%2BcRw%2F%2BdWdpnyvs4TkkfhsifBXiJiSXZVM0dgu9R1f1G5ZO4CUb52JvKJvz58mtr1y7nwmSOLtvWem54ONmYSLEvepjY6wLiIzdQQ2CNgm4f3lxV22XFLcRziYMaWMAulbP3Bw1X71D%2F2i0mIbEwBB%2FDDk2KUhyR0N0M1niHVArmKfhbXD4dm8GouWY7tuicnloyNAHImWsVeF9AcTFEhcGR8cyy6PMhuaoT0cKtmzD%2FioXCBjqkAas%2FdRds%2FBvWtSwIrRy5fGPQOBJyIyh02zHVlafO27Wl2GUhwBvARovg4hcqrrd66TSl94Ox7Zi0ymW3MNVWPFUPM0CHha7WEFEaPGFTaU1ebT%2FleyGgQ08aSVgveWH4WZveKg%2B9c%2F8CejmoWgrAJpIjPt03yXrRS4ed7Q%2FKoLfZ76T0B1nDxkEyjiARXTJoINYqKYURaGxld8Der8waDuDxHW0E&X-Amz-Signature=08e8425c2108ce42bee3785f78f077e7b690ee0da27f5a13f2520d7e637aa1e6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7U4EMVE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDiTePpOuEXFXOUhfOzBD8y9AvctnaRZxBQwelVFdmkOAIhALz8Jn6RFzGNhvl9mhr08di97M1nkjFGy%2FahXL950mGcKv8DCEAQABoMNjM3NDIzMTgzODA1IgxeQrL%2BkUvU4Bp8fLoq3AMjIw6rFoOM09%2BOU%2BTg3Ei6QmuVRXiod%2FOHlD6pwYsEzeiLDQwD1NIAILWQoB86RtYwbOf9d96v6ayozn7JlwDtjYKdtYE%2BE3ABEme6ISMV4AFQiNbD2Nx1hrhRx76NeexSeMyx9J%2F2ouqop4zrVN8YOSfDB4AAZ3OYlml9xLGf4bBbWjzxWQOZNXDKIfFhEBi7UroRL7RZkaIlKL0Pj3BxN1LGLVZHdK8gNGU0GV5j%2BB3GMbIsnVp9G1H%2FFO6u%2FOvlQCRjgGBMVG7VaC1sfKYDnikBVz3W7cqp18eH5%2FKkiG4IHr49EHCuecrDkOnX0KtgGNeCwFdZL459yaKYRmoeyp8ykW%2FXBQj%2FwqPKoJQsUn6aukHCWOOaKlBJcnZXHEWMaM7FCdKfGq6t%2Bh0v8%2BcRw%2F%2BdWdpnyvs4TkkfhsifBXiJiSXZVM0dgu9R1f1G5ZO4CUb52JvKJvz58mtr1y7nwmSOLtvWem54ONmYSLEvepjY6wLiIzdQQ2CNgm4f3lxV22XFLcRziYMaWMAulbP3Bw1X71D%2F2i0mIbEwBB%2FDDk2KUhyR0N0M1niHVArmKfhbXD4dm8GouWY7tuicnloyNAHImWsVeF9AcTFEhcGR8cyy6PMhuaoT0cKtmzD%2FioXCBjqkAas%2FdRds%2FBvWtSwIrRy5fGPQOBJyIyh02zHVlafO27Wl2GUhwBvARovg4hcqrrd66TSl94Ox7Zi0ymW3MNVWPFUPM0CHha7WEFEaPGFTaU1ebT%2FleyGgQ08aSVgveWH4WZveKg%2B9c%2F8CejmoWgrAJpIjPt03yXrRS4ed7Q%2FKoLfZ76T0B1nDxkEyjiARXTJoINYqKYURaGxld8Der8waDuDxHW0E&X-Amz-Signature=a687245037b2a7acffc915f5520f493ca3d38568d86d52515d869c685e59595e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
