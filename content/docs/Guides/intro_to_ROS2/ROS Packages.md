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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZMZV3CK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUWTHX0tRDCFN2iMLJVNrn4g%2FZpc38CFp2CdJz97OpcAiBXRqTHq3xmcVlVnosCQSrKjSiW9gRAU42PRV%2FHn2W4%2BSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6yCUL5IepF9Gv53%2BKtwDEI7FP1C4RWSYj%2FAV9ISWAuJsqeCUHDCpgaEzO6zfq2mOqnjCCQSSZ7Ea755feY%2Fa5pmYZy0kgYRC1abNdb3sNivxdc11gcFU6NLW7dYcq91um%2BiObPd%2BjxqT8o%2F6%2B50zFPBZG7%2BSK%2B%2FC8%2BnCcpf2%2Bnd0hsYyCliD%2BV1YC5%2BoexWFh7gM4bsQ%2Bp3Ct0GNddftAJ%2Fi5IKdq0oJqXascipfejICYfvHem4xgcNiEeW3uz5VO5zlMudishythvI9s6giQpq5aP3b4sQZvTuQIerKLrQcyxtsG9C8tDPwkjqci4Mf1NAqKxNq5j%2FU7IWlhdqN2DcnbhhaDQlxTcoIzJYHGvkeI6EJPW10mP1u81NwXf9Cz%2F6VMVfcKQaQl7uNosB%2BNdLFvMdQpBlvJ5yaTGK9l7pG0IJD3wSEwnWjh4CG7RSLm298irphsg9hmi7Rp%2BrXIGEnfBVFuDRNGze9Ke4vQZoYuaUT4sJWRhoh611uuQHCPLhfwTTztf5e7KNJhp3scdNZL7r2CSKuLMcGDGU1PaZXIwEX19LtyfT0HOh2CXXmWWndRPpuBtLZcDarcsukQ2HrGbyAtPPWoojujIIgRY0jqLXwASoOMVIG%2Fh1FpgTltgTPaAmfvjdb1I0wi6LSwgY6pgH6TDKUhzXJ4JOBAa4nX%2FhlpVBw5iJyzgP8tJSQGjfhGmdpcGOxO7N%2FJd0istRZcCRBEjPeVdww3ESPkyZtgfcxdu%2FrO3JYrHRpHyKr5%2FHyRl%2BtIFEyj4n7DZ%2FZjkaOYlVucxsqcqE1xgAz3t6rHXMCdancPNPhUkECzDTNi1fn3oFSMMmqy4eUq6tbBN1Izu6z7duz19s3Dp2tVwlk%2FEr27mqYyja1&X-Amz-Signature=aa5dcce055298a4c6ca4864b4a16a0e078591b7a1630679a798e6775ea76e05b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZMZV3CK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUWTHX0tRDCFN2iMLJVNrn4g%2FZpc38CFp2CdJz97OpcAiBXRqTHq3xmcVlVnosCQSrKjSiW9gRAU42PRV%2FHn2W4%2BSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6yCUL5IepF9Gv53%2BKtwDEI7FP1C4RWSYj%2FAV9ISWAuJsqeCUHDCpgaEzO6zfq2mOqnjCCQSSZ7Ea755feY%2Fa5pmYZy0kgYRC1abNdb3sNivxdc11gcFU6NLW7dYcq91um%2BiObPd%2BjxqT8o%2F6%2B50zFPBZG7%2BSK%2B%2FC8%2BnCcpf2%2Bnd0hsYyCliD%2BV1YC5%2BoexWFh7gM4bsQ%2Bp3Ct0GNddftAJ%2Fi5IKdq0oJqXascipfejICYfvHem4xgcNiEeW3uz5VO5zlMudishythvI9s6giQpq5aP3b4sQZvTuQIerKLrQcyxtsG9C8tDPwkjqci4Mf1NAqKxNq5j%2FU7IWlhdqN2DcnbhhaDQlxTcoIzJYHGvkeI6EJPW10mP1u81NwXf9Cz%2F6VMVfcKQaQl7uNosB%2BNdLFvMdQpBlvJ5yaTGK9l7pG0IJD3wSEwnWjh4CG7RSLm298irphsg9hmi7Rp%2BrXIGEnfBVFuDRNGze9Ke4vQZoYuaUT4sJWRhoh611uuQHCPLhfwTTztf5e7KNJhp3scdNZL7r2CSKuLMcGDGU1PaZXIwEX19LtyfT0HOh2CXXmWWndRPpuBtLZcDarcsukQ2HrGbyAtPPWoojujIIgRY0jqLXwASoOMVIG%2Fh1FpgTltgTPaAmfvjdb1I0wi6LSwgY6pgH6TDKUhzXJ4JOBAa4nX%2FhlpVBw5iJyzgP8tJSQGjfhGmdpcGOxO7N%2FJd0istRZcCRBEjPeVdww3ESPkyZtgfcxdu%2FrO3JYrHRpHyKr5%2FHyRl%2BtIFEyj4n7DZ%2FZjkaOYlVucxsqcqE1xgAz3t6rHXMCdancPNPhUkECzDTNi1fn3oFSMMmqy4eUq6tbBN1Izu6z7duz19s3Dp2tVwlk%2FEr27mqYyja1&X-Amz-Signature=2a92daa45ffb85c5b44fbf4c74836128de597d5a08022f4f2288d67fc039eb4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZMZV3CK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUWTHX0tRDCFN2iMLJVNrn4g%2FZpc38CFp2CdJz97OpcAiBXRqTHq3xmcVlVnosCQSrKjSiW9gRAU42PRV%2FHn2W4%2BSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6yCUL5IepF9Gv53%2BKtwDEI7FP1C4RWSYj%2FAV9ISWAuJsqeCUHDCpgaEzO6zfq2mOqnjCCQSSZ7Ea755feY%2Fa5pmYZy0kgYRC1abNdb3sNivxdc11gcFU6NLW7dYcq91um%2BiObPd%2BjxqT8o%2F6%2B50zFPBZG7%2BSK%2B%2FC8%2BnCcpf2%2Bnd0hsYyCliD%2BV1YC5%2BoexWFh7gM4bsQ%2Bp3Ct0GNddftAJ%2Fi5IKdq0oJqXascipfejICYfvHem4xgcNiEeW3uz5VO5zlMudishythvI9s6giQpq5aP3b4sQZvTuQIerKLrQcyxtsG9C8tDPwkjqci4Mf1NAqKxNq5j%2FU7IWlhdqN2DcnbhhaDQlxTcoIzJYHGvkeI6EJPW10mP1u81NwXf9Cz%2F6VMVfcKQaQl7uNosB%2BNdLFvMdQpBlvJ5yaTGK9l7pG0IJD3wSEwnWjh4CG7RSLm298irphsg9hmi7Rp%2BrXIGEnfBVFuDRNGze9Ke4vQZoYuaUT4sJWRhoh611uuQHCPLhfwTTztf5e7KNJhp3scdNZL7r2CSKuLMcGDGU1PaZXIwEX19LtyfT0HOh2CXXmWWndRPpuBtLZcDarcsukQ2HrGbyAtPPWoojujIIgRY0jqLXwASoOMVIG%2Fh1FpgTltgTPaAmfvjdb1I0wi6LSwgY6pgH6TDKUhzXJ4JOBAa4nX%2FhlpVBw5iJyzgP8tJSQGjfhGmdpcGOxO7N%2FJd0istRZcCRBEjPeVdww3ESPkyZtgfcxdu%2FrO3JYrHRpHyKr5%2FHyRl%2BtIFEyj4n7DZ%2FZjkaOYlVucxsqcqE1xgAz3t6rHXMCdancPNPhUkECzDTNi1fn3oFSMMmqy4eUq6tbBN1Izu6z7duz19s3Dp2tVwlk%2FEr27mqYyja1&X-Amz-Signature=7c22b37548a8092010765c6d1732fcab6723d58cad7e4c39fe2e088112146cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZMZV3CK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUWTHX0tRDCFN2iMLJVNrn4g%2FZpc38CFp2CdJz97OpcAiBXRqTHq3xmcVlVnosCQSrKjSiW9gRAU42PRV%2FHn2W4%2BSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6yCUL5IepF9Gv53%2BKtwDEI7FP1C4RWSYj%2FAV9ISWAuJsqeCUHDCpgaEzO6zfq2mOqnjCCQSSZ7Ea755feY%2Fa5pmYZy0kgYRC1abNdb3sNivxdc11gcFU6NLW7dYcq91um%2BiObPd%2BjxqT8o%2F6%2B50zFPBZG7%2BSK%2B%2FC8%2BnCcpf2%2Bnd0hsYyCliD%2BV1YC5%2BoexWFh7gM4bsQ%2Bp3Ct0GNddftAJ%2Fi5IKdq0oJqXascipfejICYfvHem4xgcNiEeW3uz5VO5zlMudishythvI9s6giQpq5aP3b4sQZvTuQIerKLrQcyxtsG9C8tDPwkjqci4Mf1NAqKxNq5j%2FU7IWlhdqN2DcnbhhaDQlxTcoIzJYHGvkeI6EJPW10mP1u81NwXf9Cz%2F6VMVfcKQaQl7uNosB%2BNdLFvMdQpBlvJ5yaTGK9l7pG0IJD3wSEwnWjh4CG7RSLm298irphsg9hmi7Rp%2BrXIGEnfBVFuDRNGze9Ke4vQZoYuaUT4sJWRhoh611uuQHCPLhfwTTztf5e7KNJhp3scdNZL7r2CSKuLMcGDGU1PaZXIwEX19LtyfT0HOh2CXXmWWndRPpuBtLZcDarcsukQ2HrGbyAtPPWoojujIIgRY0jqLXwASoOMVIG%2Fh1FpgTltgTPaAmfvjdb1I0wi6LSwgY6pgH6TDKUhzXJ4JOBAa4nX%2FhlpVBw5iJyzgP8tJSQGjfhGmdpcGOxO7N%2FJd0istRZcCRBEjPeVdww3ESPkyZtgfcxdu%2FrO3JYrHRpHyKr5%2FHyRl%2BtIFEyj4n7DZ%2FZjkaOYlVucxsqcqE1xgAz3t6rHXMCdancPNPhUkECzDTNi1fn3oFSMMmqy4eUq6tbBN1Izu6z7duz19s3Dp2tVwlk%2FEr27mqYyja1&X-Amz-Signature=99666cf242a26b2701ae9e7d672ffd68e23180e41a3499b34578386ffe8f53fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZMZV3CK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUWTHX0tRDCFN2iMLJVNrn4g%2FZpc38CFp2CdJz97OpcAiBXRqTHq3xmcVlVnosCQSrKjSiW9gRAU42PRV%2FHn2W4%2BSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6yCUL5IepF9Gv53%2BKtwDEI7FP1C4RWSYj%2FAV9ISWAuJsqeCUHDCpgaEzO6zfq2mOqnjCCQSSZ7Ea755feY%2Fa5pmYZy0kgYRC1abNdb3sNivxdc11gcFU6NLW7dYcq91um%2BiObPd%2BjxqT8o%2F6%2B50zFPBZG7%2BSK%2B%2FC8%2BnCcpf2%2Bnd0hsYyCliD%2BV1YC5%2BoexWFh7gM4bsQ%2Bp3Ct0GNddftAJ%2Fi5IKdq0oJqXascipfejICYfvHem4xgcNiEeW3uz5VO5zlMudishythvI9s6giQpq5aP3b4sQZvTuQIerKLrQcyxtsG9C8tDPwkjqci4Mf1NAqKxNq5j%2FU7IWlhdqN2DcnbhhaDQlxTcoIzJYHGvkeI6EJPW10mP1u81NwXf9Cz%2F6VMVfcKQaQl7uNosB%2BNdLFvMdQpBlvJ5yaTGK9l7pG0IJD3wSEwnWjh4CG7RSLm298irphsg9hmi7Rp%2BrXIGEnfBVFuDRNGze9Ke4vQZoYuaUT4sJWRhoh611uuQHCPLhfwTTztf5e7KNJhp3scdNZL7r2CSKuLMcGDGU1PaZXIwEX19LtyfT0HOh2CXXmWWndRPpuBtLZcDarcsukQ2HrGbyAtPPWoojujIIgRY0jqLXwASoOMVIG%2Fh1FpgTltgTPaAmfvjdb1I0wi6LSwgY6pgH6TDKUhzXJ4JOBAa4nX%2FhlpVBw5iJyzgP8tJSQGjfhGmdpcGOxO7N%2FJd0istRZcCRBEjPeVdww3ESPkyZtgfcxdu%2FrO3JYrHRpHyKr5%2FHyRl%2BtIFEyj4n7DZ%2FZjkaOYlVucxsqcqE1xgAz3t6rHXMCdancPNPhUkECzDTNi1fn3oFSMMmqy4eUq6tbBN1Izu6z7duz19s3Dp2tVwlk%2FEr27mqYyja1&X-Amz-Signature=6fce46f34dcb6c379aa5463041e8c53c1de8455307a71d7573cfef06e6872736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZMZV3CK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUWTHX0tRDCFN2iMLJVNrn4g%2FZpc38CFp2CdJz97OpcAiBXRqTHq3xmcVlVnosCQSrKjSiW9gRAU42PRV%2FHn2W4%2BSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6yCUL5IepF9Gv53%2BKtwDEI7FP1C4RWSYj%2FAV9ISWAuJsqeCUHDCpgaEzO6zfq2mOqnjCCQSSZ7Ea755feY%2Fa5pmYZy0kgYRC1abNdb3sNivxdc11gcFU6NLW7dYcq91um%2BiObPd%2BjxqT8o%2F6%2B50zFPBZG7%2BSK%2B%2FC8%2BnCcpf2%2Bnd0hsYyCliD%2BV1YC5%2BoexWFh7gM4bsQ%2Bp3Ct0GNddftAJ%2Fi5IKdq0oJqXascipfejICYfvHem4xgcNiEeW3uz5VO5zlMudishythvI9s6giQpq5aP3b4sQZvTuQIerKLrQcyxtsG9C8tDPwkjqci4Mf1NAqKxNq5j%2FU7IWlhdqN2DcnbhhaDQlxTcoIzJYHGvkeI6EJPW10mP1u81NwXf9Cz%2F6VMVfcKQaQl7uNosB%2BNdLFvMdQpBlvJ5yaTGK9l7pG0IJD3wSEwnWjh4CG7RSLm298irphsg9hmi7Rp%2BrXIGEnfBVFuDRNGze9Ke4vQZoYuaUT4sJWRhoh611uuQHCPLhfwTTztf5e7KNJhp3scdNZL7r2CSKuLMcGDGU1PaZXIwEX19LtyfT0HOh2CXXmWWndRPpuBtLZcDarcsukQ2HrGbyAtPPWoojujIIgRY0jqLXwASoOMVIG%2Fh1FpgTltgTPaAmfvjdb1I0wi6LSwgY6pgH6TDKUhzXJ4JOBAa4nX%2FhlpVBw5iJyzgP8tJSQGjfhGmdpcGOxO7N%2FJd0istRZcCRBEjPeVdww3ESPkyZtgfcxdu%2FrO3JYrHRpHyKr5%2FHyRl%2BtIFEyj4n7DZ%2FZjkaOYlVucxsqcqE1xgAz3t6rHXMCdancPNPhUkECzDTNi1fn3oFSMMmqy4eUq6tbBN1Izu6z7duz19s3Dp2tVwlk%2FEr27mqYyja1&X-Amz-Signature=1ec983147767f21f0ccdbe86c4d87ed7a10a6cf685bd352d93d2620a7c83ed85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZMZV3CK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUWTHX0tRDCFN2iMLJVNrn4g%2FZpc38CFp2CdJz97OpcAiBXRqTHq3xmcVlVnosCQSrKjSiW9gRAU42PRV%2FHn2W4%2BSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6yCUL5IepF9Gv53%2BKtwDEI7FP1C4RWSYj%2FAV9ISWAuJsqeCUHDCpgaEzO6zfq2mOqnjCCQSSZ7Ea755feY%2Fa5pmYZy0kgYRC1abNdb3sNivxdc11gcFU6NLW7dYcq91um%2BiObPd%2BjxqT8o%2F6%2B50zFPBZG7%2BSK%2B%2FC8%2BnCcpf2%2Bnd0hsYyCliD%2BV1YC5%2BoexWFh7gM4bsQ%2Bp3Ct0GNddftAJ%2Fi5IKdq0oJqXascipfejICYfvHem4xgcNiEeW3uz5VO5zlMudishythvI9s6giQpq5aP3b4sQZvTuQIerKLrQcyxtsG9C8tDPwkjqci4Mf1NAqKxNq5j%2FU7IWlhdqN2DcnbhhaDQlxTcoIzJYHGvkeI6EJPW10mP1u81NwXf9Cz%2F6VMVfcKQaQl7uNosB%2BNdLFvMdQpBlvJ5yaTGK9l7pG0IJD3wSEwnWjh4CG7RSLm298irphsg9hmi7Rp%2BrXIGEnfBVFuDRNGze9Ke4vQZoYuaUT4sJWRhoh611uuQHCPLhfwTTztf5e7KNJhp3scdNZL7r2CSKuLMcGDGU1PaZXIwEX19LtyfT0HOh2CXXmWWndRPpuBtLZcDarcsukQ2HrGbyAtPPWoojujIIgRY0jqLXwASoOMVIG%2Fh1FpgTltgTPaAmfvjdb1I0wi6LSwgY6pgH6TDKUhzXJ4JOBAa4nX%2FhlpVBw5iJyzgP8tJSQGjfhGmdpcGOxO7N%2FJd0istRZcCRBEjPeVdww3ESPkyZtgfcxdu%2FrO3JYrHRpHyKr5%2FHyRl%2BtIFEyj4n7DZ%2FZjkaOYlVucxsqcqE1xgAz3t6rHXMCdancPNPhUkECzDTNi1fn3oFSMMmqy4eUq6tbBN1Izu6z7duz19s3Dp2tVwlk%2FEr27mqYyja1&X-Amz-Signature=1dd415b86ed4a4eec4ea8d17c541ff9e0903639c0a3dc20275c586c028871310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
