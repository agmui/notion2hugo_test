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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRPJKJG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQPiyAwyfR2ukNCxMC929v5AQiuNPFTRF4XoxA2eHcygIhAK%2F42qvUFQa05Xi5GCVh5sqV7nmREBdCc1hTTN7Y2qS%2BKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx4dQ0rXybVapP6ygq3AMKsJKBIM7KfmN0kGRkJLvUUFjflnBm%2FWL%2BVaYEaGi1j3XnH8GMH7yYn2wFO2w0M1f%2FWtUbcH7XuN%2B4j3mLqdSPWNf%2BLYhnBWVfgM81ayeOWEEIV5QZHCkegHw80X7r%2FHu%2BLZSja0fxxeTLGTT4J%2Ba6iJnEqZ6FMVG50cWRY5LdJ%2FVfSwgcUMAKdDrJoJVgmy%2FZmrQFZSP4vDDdnvDA%2Frjz6AXm27giytx6C06RLlTZ%2FZIaK9x6R9fqEYvF9vIyevx5Q0I3lRvqNvyE9o4PiuKRaPT4P9k0IShJdZpy7QMPThaWsSzn2oQutU53hkJ3GmSJnz%2BpnvhNOcMA6ox5FdC7LA%2FXy8t%2F1PKbNd72h6wnU%2FRGmTDHV7Am7J2cgnuPFQMnw5vmUPacNihPrs3Gju8bS3FAyWvNb8xhtiYJqy6N4G84AM4jceRShSsS5FeEfnzG2uBY6kqjv3TGs7nNQkC413rTPgll355gINz8upGfjNt9cOE1rmqUlmcJHUPKQjsJZBv32I4td0a8vaS2sXd75gdzkMvgDOqMoaiAX4uqM35v2z7SrTtvCZqhivorL5K1dxhGVskHprhJpKGKkX2FgHP3l35cuC%2Bq4Qx0TTh8a3Rc0Vg00dc1T%2FmpijDqvqC9BjqkAVaXUnl1VDqBVS5YiQJMsgv8pOd%2F5ionNoDeFRdEx%2FDcBU2K9JIsGloxpWdaRewRM%2BnH4P%2FypyJpmczCg3yGl8CmaUnVX7DxPfo4IA20nWRcFTMay6ZPfBqYxGmT8RnsOS6qQMUiRbIH0O41jQXH%2BzqRFo2HwrPgyffI2XSNxmAAxHNTX1YsVd3dx2NFEm9bqaOudg8AKbfppdmAeDm1wVnzJhxC&X-Amz-Signature=f39bd568b2ed3b558bb59d0fc3adb47229e36a0b1facb4fd567525368d934bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRPJKJG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQPiyAwyfR2ukNCxMC929v5AQiuNPFTRF4XoxA2eHcygIhAK%2F42qvUFQa05Xi5GCVh5sqV7nmREBdCc1hTTN7Y2qS%2BKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx4dQ0rXybVapP6ygq3AMKsJKBIM7KfmN0kGRkJLvUUFjflnBm%2FWL%2BVaYEaGi1j3XnH8GMH7yYn2wFO2w0M1f%2FWtUbcH7XuN%2B4j3mLqdSPWNf%2BLYhnBWVfgM81ayeOWEEIV5QZHCkegHw80X7r%2FHu%2BLZSja0fxxeTLGTT4J%2Ba6iJnEqZ6FMVG50cWRY5LdJ%2FVfSwgcUMAKdDrJoJVgmy%2FZmrQFZSP4vDDdnvDA%2Frjz6AXm27giytx6C06RLlTZ%2FZIaK9x6R9fqEYvF9vIyevx5Q0I3lRvqNvyE9o4PiuKRaPT4P9k0IShJdZpy7QMPThaWsSzn2oQutU53hkJ3GmSJnz%2BpnvhNOcMA6ox5FdC7LA%2FXy8t%2F1PKbNd72h6wnU%2FRGmTDHV7Am7J2cgnuPFQMnw5vmUPacNihPrs3Gju8bS3FAyWvNb8xhtiYJqy6N4G84AM4jceRShSsS5FeEfnzG2uBY6kqjv3TGs7nNQkC413rTPgll355gINz8upGfjNt9cOE1rmqUlmcJHUPKQjsJZBv32I4td0a8vaS2sXd75gdzkMvgDOqMoaiAX4uqM35v2z7SrTtvCZqhivorL5K1dxhGVskHprhJpKGKkX2FgHP3l35cuC%2Bq4Qx0TTh8a3Rc0Vg00dc1T%2FmpijDqvqC9BjqkAVaXUnl1VDqBVS5YiQJMsgv8pOd%2F5ionNoDeFRdEx%2FDcBU2K9JIsGloxpWdaRewRM%2BnH4P%2FypyJpmczCg3yGl8CmaUnVX7DxPfo4IA20nWRcFTMay6ZPfBqYxGmT8RnsOS6qQMUiRbIH0O41jQXH%2BzqRFo2HwrPgyffI2XSNxmAAxHNTX1YsVd3dx2NFEm9bqaOudg8AKbfppdmAeDm1wVnzJhxC&X-Amz-Signature=2acd99cea03dfacc7b93501d90de54e7c206512ab4c707c6a035682e273becdd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRPJKJG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQPiyAwyfR2ukNCxMC929v5AQiuNPFTRF4XoxA2eHcygIhAK%2F42qvUFQa05Xi5GCVh5sqV7nmREBdCc1hTTN7Y2qS%2BKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx4dQ0rXybVapP6ygq3AMKsJKBIM7KfmN0kGRkJLvUUFjflnBm%2FWL%2BVaYEaGi1j3XnH8GMH7yYn2wFO2w0M1f%2FWtUbcH7XuN%2B4j3mLqdSPWNf%2BLYhnBWVfgM81ayeOWEEIV5QZHCkegHw80X7r%2FHu%2BLZSja0fxxeTLGTT4J%2Ba6iJnEqZ6FMVG50cWRY5LdJ%2FVfSwgcUMAKdDrJoJVgmy%2FZmrQFZSP4vDDdnvDA%2Frjz6AXm27giytx6C06RLlTZ%2FZIaK9x6R9fqEYvF9vIyevx5Q0I3lRvqNvyE9o4PiuKRaPT4P9k0IShJdZpy7QMPThaWsSzn2oQutU53hkJ3GmSJnz%2BpnvhNOcMA6ox5FdC7LA%2FXy8t%2F1PKbNd72h6wnU%2FRGmTDHV7Am7J2cgnuPFQMnw5vmUPacNihPrs3Gju8bS3FAyWvNb8xhtiYJqy6N4G84AM4jceRShSsS5FeEfnzG2uBY6kqjv3TGs7nNQkC413rTPgll355gINz8upGfjNt9cOE1rmqUlmcJHUPKQjsJZBv32I4td0a8vaS2sXd75gdzkMvgDOqMoaiAX4uqM35v2z7SrTtvCZqhivorL5K1dxhGVskHprhJpKGKkX2FgHP3l35cuC%2Bq4Qx0TTh8a3Rc0Vg00dc1T%2FmpijDqvqC9BjqkAVaXUnl1VDqBVS5YiQJMsgv8pOd%2F5ionNoDeFRdEx%2FDcBU2K9JIsGloxpWdaRewRM%2BnH4P%2FypyJpmczCg3yGl8CmaUnVX7DxPfo4IA20nWRcFTMay6ZPfBqYxGmT8RnsOS6qQMUiRbIH0O41jQXH%2BzqRFo2HwrPgyffI2XSNxmAAxHNTX1YsVd3dx2NFEm9bqaOudg8AKbfppdmAeDm1wVnzJhxC&X-Amz-Signature=6b51a3004e85ea9e78dfc83977c2c70cb79af7f1dcbbdbd2e97f930a1413abe3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRPJKJG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQPiyAwyfR2ukNCxMC929v5AQiuNPFTRF4XoxA2eHcygIhAK%2F42qvUFQa05Xi5GCVh5sqV7nmREBdCc1hTTN7Y2qS%2BKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx4dQ0rXybVapP6ygq3AMKsJKBIM7KfmN0kGRkJLvUUFjflnBm%2FWL%2BVaYEaGi1j3XnH8GMH7yYn2wFO2w0M1f%2FWtUbcH7XuN%2B4j3mLqdSPWNf%2BLYhnBWVfgM81ayeOWEEIV5QZHCkegHw80X7r%2FHu%2BLZSja0fxxeTLGTT4J%2Ba6iJnEqZ6FMVG50cWRY5LdJ%2FVfSwgcUMAKdDrJoJVgmy%2FZmrQFZSP4vDDdnvDA%2Frjz6AXm27giytx6C06RLlTZ%2FZIaK9x6R9fqEYvF9vIyevx5Q0I3lRvqNvyE9o4PiuKRaPT4P9k0IShJdZpy7QMPThaWsSzn2oQutU53hkJ3GmSJnz%2BpnvhNOcMA6ox5FdC7LA%2FXy8t%2F1PKbNd72h6wnU%2FRGmTDHV7Am7J2cgnuPFQMnw5vmUPacNihPrs3Gju8bS3FAyWvNb8xhtiYJqy6N4G84AM4jceRShSsS5FeEfnzG2uBY6kqjv3TGs7nNQkC413rTPgll355gINz8upGfjNt9cOE1rmqUlmcJHUPKQjsJZBv32I4td0a8vaS2sXd75gdzkMvgDOqMoaiAX4uqM35v2z7SrTtvCZqhivorL5K1dxhGVskHprhJpKGKkX2FgHP3l35cuC%2Bq4Qx0TTh8a3Rc0Vg00dc1T%2FmpijDqvqC9BjqkAVaXUnl1VDqBVS5YiQJMsgv8pOd%2F5ionNoDeFRdEx%2FDcBU2K9JIsGloxpWdaRewRM%2BnH4P%2FypyJpmczCg3yGl8CmaUnVX7DxPfo4IA20nWRcFTMay6ZPfBqYxGmT8RnsOS6qQMUiRbIH0O41jQXH%2BzqRFo2HwrPgyffI2XSNxmAAxHNTX1YsVd3dx2NFEm9bqaOudg8AKbfppdmAeDm1wVnzJhxC&X-Amz-Signature=9487451ed68dd3dc05e87e5f4fdb7e028c8e886375ef14111335fef9b3e3b8af&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRPJKJG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQPiyAwyfR2ukNCxMC929v5AQiuNPFTRF4XoxA2eHcygIhAK%2F42qvUFQa05Xi5GCVh5sqV7nmREBdCc1hTTN7Y2qS%2BKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx4dQ0rXybVapP6ygq3AMKsJKBIM7KfmN0kGRkJLvUUFjflnBm%2FWL%2BVaYEaGi1j3XnH8GMH7yYn2wFO2w0M1f%2FWtUbcH7XuN%2B4j3mLqdSPWNf%2BLYhnBWVfgM81ayeOWEEIV5QZHCkegHw80X7r%2FHu%2BLZSja0fxxeTLGTT4J%2Ba6iJnEqZ6FMVG50cWRY5LdJ%2FVfSwgcUMAKdDrJoJVgmy%2FZmrQFZSP4vDDdnvDA%2Frjz6AXm27giytx6C06RLlTZ%2FZIaK9x6R9fqEYvF9vIyevx5Q0I3lRvqNvyE9o4PiuKRaPT4P9k0IShJdZpy7QMPThaWsSzn2oQutU53hkJ3GmSJnz%2BpnvhNOcMA6ox5FdC7LA%2FXy8t%2F1PKbNd72h6wnU%2FRGmTDHV7Am7J2cgnuPFQMnw5vmUPacNihPrs3Gju8bS3FAyWvNb8xhtiYJqy6N4G84AM4jceRShSsS5FeEfnzG2uBY6kqjv3TGs7nNQkC413rTPgll355gINz8upGfjNt9cOE1rmqUlmcJHUPKQjsJZBv32I4td0a8vaS2sXd75gdzkMvgDOqMoaiAX4uqM35v2z7SrTtvCZqhivorL5K1dxhGVskHprhJpKGKkX2FgHP3l35cuC%2Bq4Qx0TTh8a3Rc0Vg00dc1T%2FmpijDqvqC9BjqkAVaXUnl1VDqBVS5YiQJMsgv8pOd%2F5ionNoDeFRdEx%2FDcBU2K9JIsGloxpWdaRewRM%2BnH4P%2FypyJpmczCg3yGl8CmaUnVX7DxPfo4IA20nWRcFTMay6ZPfBqYxGmT8RnsOS6qQMUiRbIH0O41jQXH%2BzqRFo2HwrPgyffI2XSNxmAAxHNTX1YsVd3dx2NFEm9bqaOudg8AKbfppdmAeDm1wVnzJhxC&X-Amz-Signature=94ddc0897cf36a9820c9e958809617bc9ee67c1545414789be49d438c666aa97&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRPJKJG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQPiyAwyfR2ukNCxMC929v5AQiuNPFTRF4XoxA2eHcygIhAK%2F42qvUFQa05Xi5GCVh5sqV7nmREBdCc1hTTN7Y2qS%2BKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx4dQ0rXybVapP6ygq3AMKsJKBIM7KfmN0kGRkJLvUUFjflnBm%2FWL%2BVaYEaGi1j3XnH8GMH7yYn2wFO2w0M1f%2FWtUbcH7XuN%2B4j3mLqdSPWNf%2BLYhnBWVfgM81ayeOWEEIV5QZHCkegHw80X7r%2FHu%2BLZSja0fxxeTLGTT4J%2Ba6iJnEqZ6FMVG50cWRY5LdJ%2FVfSwgcUMAKdDrJoJVgmy%2FZmrQFZSP4vDDdnvDA%2Frjz6AXm27giytx6C06RLlTZ%2FZIaK9x6R9fqEYvF9vIyevx5Q0I3lRvqNvyE9o4PiuKRaPT4P9k0IShJdZpy7QMPThaWsSzn2oQutU53hkJ3GmSJnz%2BpnvhNOcMA6ox5FdC7LA%2FXy8t%2F1PKbNd72h6wnU%2FRGmTDHV7Am7J2cgnuPFQMnw5vmUPacNihPrs3Gju8bS3FAyWvNb8xhtiYJqy6N4G84AM4jceRShSsS5FeEfnzG2uBY6kqjv3TGs7nNQkC413rTPgll355gINz8upGfjNt9cOE1rmqUlmcJHUPKQjsJZBv32I4td0a8vaS2sXd75gdzkMvgDOqMoaiAX4uqM35v2z7SrTtvCZqhivorL5K1dxhGVskHprhJpKGKkX2FgHP3l35cuC%2Bq4Qx0TTh8a3Rc0Vg00dc1T%2FmpijDqvqC9BjqkAVaXUnl1VDqBVS5YiQJMsgv8pOd%2F5ionNoDeFRdEx%2FDcBU2K9JIsGloxpWdaRewRM%2BnH4P%2FypyJpmczCg3yGl8CmaUnVX7DxPfo4IA20nWRcFTMay6ZPfBqYxGmT8RnsOS6qQMUiRbIH0O41jQXH%2BzqRFo2HwrPgyffI2XSNxmAAxHNTX1YsVd3dx2NFEm9bqaOudg8AKbfppdmAeDm1wVnzJhxC&X-Amz-Signature=45edaf5b35700d4761286bd016139a859618e0cbd6652e58849f0830eb9f7e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRPJKJG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQPiyAwyfR2ukNCxMC929v5AQiuNPFTRF4XoxA2eHcygIhAK%2F42qvUFQa05Xi5GCVh5sqV7nmREBdCc1hTTN7Y2qS%2BKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx4dQ0rXybVapP6ygq3AMKsJKBIM7KfmN0kGRkJLvUUFjflnBm%2FWL%2BVaYEaGi1j3XnH8GMH7yYn2wFO2w0M1f%2FWtUbcH7XuN%2B4j3mLqdSPWNf%2BLYhnBWVfgM81ayeOWEEIV5QZHCkegHw80X7r%2FHu%2BLZSja0fxxeTLGTT4J%2Ba6iJnEqZ6FMVG50cWRY5LdJ%2FVfSwgcUMAKdDrJoJVgmy%2FZmrQFZSP4vDDdnvDA%2Frjz6AXm27giytx6C06RLlTZ%2FZIaK9x6R9fqEYvF9vIyevx5Q0I3lRvqNvyE9o4PiuKRaPT4P9k0IShJdZpy7QMPThaWsSzn2oQutU53hkJ3GmSJnz%2BpnvhNOcMA6ox5FdC7LA%2FXy8t%2F1PKbNd72h6wnU%2FRGmTDHV7Am7J2cgnuPFQMnw5vmUPacNihPrs3Gju8bS3FAyWvNb8xhtiYJqy6N4G84AM4jceRShSsS5FeEfnzG2uBY6kqjv3TGs7nNQkC413rTPgll355gINz8upGfjNt9cOE1rmqUlmcJHUPKQjsJZBv32I4td0a8vaS2sXd75gdzkMvgDOqMoaiAX4uqM35v2z7SrTtvCZqhivorL5K1dxhGVskHprhJpKGKkX2FgHP3l35cuC%2Bq4Qx0TTh8a3Rc0Vg00dc1T%2FmpijDqvqC9BjqkAVaXUnl1VDqBVS5YiQJMsgv8pOd%2F5ionNoDeFRdEx%2FDcBU2K9JIsGloxpWdaRewRM%2BnH4P%2FypyJpmczCg3yGl8CmaUnVX7DxPfo4IA20nWRcFTMay6ZPfBqYxGmT8RnsOS6qQMUiRbIH0O41jQXH%2BzqRFo2HwrPgyffI2XSNxmAAxHNTX1YsVd3dx2NFEm9bqaOudg8AKbfppdmAeDm1wVnzJhxC&X-Amz-Signature=35e0448cbb942aa621533396def31e7616988bba77d9a7b1d23251062aae8bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
