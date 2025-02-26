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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULV457D5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCQ6gwrbBYClctpzGPzTEjA8CP%2B2e%2F8J2aMPhNcrUcs%2FQIgUeCHW1xi8ELBiFI0OANHAZfloGw1%2BJ5eop%2F2cvW6C%2Fgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEsFO%2B9QBBhrmmfivyrcAxchiw%2B2svmbw78gTqREauLEJI4RjbSyQ4TcgtVQonQLcz%2Fz1psMPJmzwf5dnP7CxLX3by%2FG32EtKII2DGRvhcxd2dkZ%2BYBiCSsNlfCiiwVFuSvjUluctnuC%2BfzySPbrM3TIZNXcA8dsrCTN5dlNJt3Vv7opqWqv46dBCMZJpS6n110p%2FyBDmcm2zcC82PHnMLoew9fhdznv82rJFyQ4FU5x%2FxPk18%2B8Ig9yNb8WARCoPdRGRBZR64tCSGFMTEFhp043CNxzvt5TVCLwFzb5%2FZQYvnYNCCloVpacmUSRev6YR%2Bg6LJVzGQc4BeEJLmDnzwmy7RDzp9m1W%2BnHjNqpsop7Lb36PH7%2Bz3UoyypEL%2B7PIQYGlo7dmyw8qI4jL1GVhmWI%2FBpV195VEG7aXRklnh5N8VzCpGDxv10iaTI%2FZOSkH9cDLO%2Fm3qQUR7Xz0ubqYE3sn6NZvjV%2B6HFgMIsWsDAvr4s6vj7p8t%2F5xgs5wwDUfYBWvpNZp6MjU70Lf%2F3bcibtXX74nyejy9%2BRmZq4SaLTTMjJ%2Ba2Ye80%2BhjC3iq%2Fa8y7hXYEyaGVqu1iow%2FPfyVCJWHJ%2FBOdCzvfrFH%2F3xNAfVmQRpJc2HCABX8fiXI7xuyARdjqRmK5NWucqMMK8%2Bb0GOqUBKlc%2FeUaLvFsdZ4SU4Q5aNNhLLBUhM73DY3iSL0Q40h1OAi4C%2FOn7s9dKgeKmHWtGV2o%2B4jIAEOc2Unu6%2Bmt%2FFzLiQM%2F3tyK9zAiqywmx6bjNSc1HBKMkKpC3tnwIOPyqDDS0v%2FhRYC6cFZYyTS3tlnmSidiP%2F9w91q8ooB8%2BPv0YokgZaoLMGIcDRoDi7qWlcoZvboyEIkCw2rK8KGwgk5OcghL4&X-Amz-Signature=2f8bf6bce6f02231fe179e41e4c641cde3dfc94bf823ba0bb2291f21ecd18110&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULV457D5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCQ6gwrbBYClctpzGPzTEjA8CP%2B2e%2F8J2aMPhNcrUcs%2FQIgUeCHW1xi8ELBiFI0OANHAZfloGw1%2BJ5eop%2F2cvW6C%2Fgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEsFO%2B9QBBhrmmfivyrcAxchiw%2B2svmbw78gTqREauLEJI4RjbSyQ4TcgtVQonQLcz%2Fz1psMPJmzwf5dnP7CxLX3by%2FG32EtKII2DGRvhcxd2dkZ%2BYBiCSsNlfCiiwVFuSvjUluctnuC%2BfzySPbrM3TIZNXcA8dsrCTN5dlNJt3Vv7opqWqv46dBCMZJpS6n110p%2FyBDmcm2zcC82PHnMLoew9fhdznv82rJFyQ4FU5x%2FxPk18%2B8Ig9yNb8WARCoPdRGRBZR64tCSGFMTEFhp043CNxzvt5TVCLwFzb5%2FZQYvnYNCCloVpacmUSRev6YR%2Bg6LJVzGQc4BeEJLmDnzwmy7RDzp9m1W%2BnHjNqpsop7Lb36PH7%2Bz3UoyypEL%2B7PIQYGlo7dmyw8qI4jL1GVhmWI%2FBpV195VEG7aXRklnh5N8VzCpGDxv10iaTI%2FZOSkH9cDLO%2Fm3qQUR7Xz0ubqYE3sn6NZvjV%2B6HFgMIsWsDAvr4s6vj7p8t%2F5xgs5wwDUfYBWvpNZp6MjU70Lf%2F3bcibtXX74nyejy9%2BRmZq4SaLTTMjJ%2Ba2Ye80%2BhjC3iq%2Fa8y7hXYEyaGVqu1iow%2FPfyVCJWHJ%2FBOdCzvfrFH%2F3xNAfVmQRpJc2HCABX8fiXI7xuyARdjqRmK5NWucqMMK8%2Bb0GOqUBKlc%2FeUaLvFsdZ4SU4Q5aNNhLLBUhM73DY3iSL0Q40h1OAi4C%2FOn7s9dKgeKmHWtGV2o%2B4jIAEOc2Unu6%2Bmt%2FFzLiQM%2F3tyK9zAiqywmx6bjNSc1HBKMkKpC3tnwIOPyqDDS0v%2FhRYC6cFZYyTS3tlnmSidiP%2F9w91q8ooB8%2BPv0YokgZaoLMGIcDRoDi7qWlcoZvboyEIkCw2rK8KGwgk5OcghL4&X-Amz-Signature=38cfd1a5b40193060733742933b94fe2cc25630c51d7c9ae5980150650e12cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULV457D5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCQ6gwrbBYClctpzGPzTEjA8CP%2B2e%2F8J2aMPhNcrUcs%2FQIgUeCHW1xi8ELBiFI0OANHAZfloGw1%2BJ5eop%2F2cvW6C%2Fgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEsFO%2B9QBBhrmmfivyrcAxchiw%2B2svmbw78gTqREauLEJI4RjbSyQ4TcgtVQonQLcz%2Fz1psMPJmzwf5dnP7CxLX3by%2FG32EtKII2DGRvhcxd2dkZ%2BYBiCSsNlfCiiwVFuSvjUluctnuC%2BfzySPbrM3TIZNXcA8dsrCTN5dlNJt3Vv7opqWqv46dBCMZJpS6n110p%2FyBDmcm2zcC82PHnMLoew9fhdznv82rJFyQ4FU5x%2FxPk18%2B8Ig9yNb8WARCoPdRGRBZR64tCSGFMTEFhp043CNxzvt5TVCLwFzb5%2FZQYvnYNCCloVpacmUSRev6YR%2Bg6LJVzGQc4BeEJLmDnzwmy7RDzp9m1W%2BnHjNqpsop7Lb36PH7%2Bz3UoyypEL%2B7PIQYGlo7dmyw8qI4jL1GVhmWI%2FBpV195VEG7aXRklnh5N8VzCpGDxv10iaTI%2FZOSkH9cDLO%2Fm3qQUR7Xz0ubqYE3sn6NZvjV%2B6HFgMIsWsDAvr4s6vj7p8t%2F5xgs5wwDUfYBWvpNZp6MjU70Lf%2F3bcibtXX74nyejy9%2BRmZq4SaLTTMjJ%2Ba2Ye80%2BhjC3iq%2Fa8y7hXYEyaGVqu1iow%2FPfyVCJWHJ%2FBOdCzvfrFH%2F3xNAfVmQRpJc2HCABX8fiXI7xuyARdjqRmK5NWucqMMK8%2Bb0GOqUBKlc%2FeUaLvFsdZ4SU4Q5aNNhLLBUhM73DY3iSL0Q40h1OAi4C%2FOn7s9dKgeKmHWtGV2o%2B4jIAEOc2Unu6%2Bmt%2FFzLiQM%2F3tyK9zAiqywmx6bjNSc1HBKMkKpC3tnwIOPyqDDS0v%2FhRYC6cFZYyTS3tlnmSidiP%2F9w91q8ooB8%2BPv0YokgZaoLMGIcDRoDi7qWlcoZvboyEIkCw2rK8KGwgk5OcghL4&X-Amz-Signature=3cfd15d49ab2db95744cecdc75a2859816197f6690881f658084c963aad935d4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULV457D5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCQ6gwrbBYClctpzGPzTEjA8CP%2B2e%2F8J2aMPhNcrUcs%2FQIgUeCHW1xi8ELBiFI0OANHAZfloGw1%2BJ5eop%2F2cvW6C%2Fgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEsFO%2B9QBBhrmmfivyrcAxchiw%2B2svmbw78gTqREauLEJI4RjbSyQ4TcgtVQonQLcz%2Fz1psMPJmzwf5dnP7CxLX3by%2FG32EtKII2DGRvhcxd2dkZ%2BYBiCSsNlfCiiwVFuSvjUluctnuC%2BfzySPbrM3TIZNXcA8dsrCTN5dlNJt3Vv7opqWqv46dBCMZJpS6n110p%2FyBDmcm2zcC82PHnMLoew9fhdznv82rJFyQ4FU5x%2FxPk18%2B8Ig9yNb8WARCoPdRGRBZR64tCSGFMTEFhp043CNxzvt5TVCLwFzb5%2FZQYvnYNCCloVpacmUSRev6YR%2Bg6LJVzGQc4BeEJLmDnzwmy7RDzp9m1W%2BnHjNqpsop7Lb36PH7%2Bz3UoyypEL%2B7PIQYGlo7dmyw8qI4jL1GVhmWI%2FBpV195VEG7aXRklnh5N8VzCpGDxv10iaTI%2FZOSkH9cDLO%2Fm3qQUR7Xz0ubqYE3sn6NZvjV%2B6HFgMIsWsDAvr4s6vj7p8t%2F5xgs5wwDUfYBWvpNZp6MjU70Lf%2F3bcibtXX74nyejy9%2BRmZq4SaLTTMjJ%2Ba2Ye80%2BhjC3iq%2Fa8y7hXYEyaGVqu1iow%2FPfyVCJWHJ%2FBOdCzvfrFH%2F3xNAfVmQRpJc2HCABX8fiXI7xuyARdjqRmK5NWucqMMK8%2Bb0GOqUBKlc%2FeUaLvFsdZ4SU4Q5aNNhLLBUhM73DY3iSL0Q40h1OAi4C%2FOn7s9dKgeKmHWtGV2o%2B4jIAEOc2Unu6%2Bmt%2FFzLiQM%2F3tyK9zAiqywmx6bjNSc1HBKMkKpC3tnwIOPyqDDS0v%2FhRYC6cFZYyTS3tlnmSidiP%2F9w91q8ooB8%2BPv0YokgZaoLMGIcDRoDi7qWlcoZvboyEIkCw2rK8KGwgk5OcghL4&X-Amz-Signature=2840b2b530af3a4c816f7b006bd2751a50effb2a551bc178b182148e31f52b44&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULV457D5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCQ6gwrbBYClctpzGPzTEjA8CP%2B2e%2F8J2aMPhNcrUcs%2FQIgUeCHW1xi8ELBiFI0OANHAZfloGw1%2BJ5eop%2F2cvW6C%2Fgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEsFO%2B9QBBhrmmfivyrcAxchiw%2B2svmbw78gTqREauLEJI4RjbSyQ4TcgtVQonQLcz%2Fz1psMPJmzwf5dnP7CxLX3by%2FG32EtKII2DGRvhcxd2dkZ%2BYBiCSsNlfCiiwVFuSvjUluctnuC%2BfzySPbrM3TIZNXcA8dsrCTN5dlNJt3Vv7opqWqv46dBCMZJpS6n110p%2FyBDmcm2zcC82PHnMLoew9fhdznv82rJFyQ4FU5x%2FxPk18%2B8Ig9yNb8WARCoPdRGRBZR64tCSGFMTEFhp043CNxzvt5TVCLwFzb5%2FZQYvnYNCCloVpacmUSRev6YR%2Bg6LJVzGQc4BeEJLmDnzwmy7RDzp9m1W%2BnHjNqpsop7Lb36PH7%2Bz3UoyypEL%2B7PIQYGlo7dmyw8qI4jL1GVhmWI%2FBpV195VEG7aXRklnh5N8VzCpGDxv10iaTI%2FZOSkH9cDLO%2Fm3qQUR7Xz0ubqYE3sn6NZvjV%2B6HFgMIsWsDAvr4s6vj7p8t%2F5xgs5wwDUfYBWvpNZp6MjU70Lf%2F3bcibtXX74nyejy9%2BRmZq4SaLTTMjJ%2Ba2Ye80%2BhjC3iq%2Fa8y7hXYEyaGVqu1iow%2FPfyVCJWHJ%2FBOdCzvfrFH%2F3xNAfVmQRpJc2HCABX8fiXI7xuyARdjqRmK5NWucqMMK8%2Bb0GOqUBKlc%2FeUaLvFsdZ4SU4Q5aNNhLLBUhM73DY3iSL0Q40h1OAi4C%2FOn7s9dKgeKmHWtGV2o%2B4jIAEOc2Unu6%2Bmt%2FFzLiQM%2F3tyK9zAiqywmx6bjNSc1HBKMkKpC3tnwIOPyqDDS0v%2FhRYC6cFZYyTS3tlnmSidiP%2F9w91q8ooB8%2BPv0YokgZaoLMGIcDRoDi7qWlcoZvboyEIkCw2rK8KGwgk5OcghL4&X-Amz-Signature=132418512e935a9cbc563eddb4b53ca1c9979dca29eff362a1c914ddd0b8c3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULV457D5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCQ6gwrbBYClctpzGPzTEjA8CP%2B2e%2F8J2aMPhNcrUcs%2FQIgUeCHW1xi8ELBiFI0OANHAZfloGw1%2BJ5eop%2F2cvW6C%2Fgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEsFO%2B9QBBhrmmfivyrcAxchiw%2B2svmbw78gTqREauLEJI4RjbSyQ4TcgtVQonQLcz%2Fz1psMPJmzwf5dnP7CxLX3by%2FG32EtKII2DGRvhcxd2dkZ%2BYBiCSsNlfCiiwVFuSvjUluctnuC%2BfzySPbrM3TIZNXcA8dsrCTN5dlNJt3Vv7opqWqv46dBCMZJpS6n110p%2FyBDmcm2zcC82PHnMLoew9fhdznv82rJFyQ4FU5x%2FxPk18%2B8Ig9yNb8WARCoPdRGRBZR64tCSGFMTEFhp043CNxzvt5TVCLwFzb5%2FZQYvnYNCCloVpacmUSRev6YR%2Bg6LJVzGQc4BeEJLmDnzwmy7RDzp9m1W%2BnHjNqpsop7Lb36PH7%2Bz3UoyypEL%2B7PIQYGlo7dmyw8qI4jL1GVhmWI%2FBpV195VEG7aXRklnh5N8VzCpGDxv10iaTI%2FZOSkH9cDLO%2Fm3qQUR7Xz0ubqYE3sn6NZvjV%2B6HFgMIsWsDAvr4s6vj7p8t%2F5xgs5wwDUfYBWvpNZp6MjU70Lf%2F3bcibtXX74nyejy9%2BRmZq4SaLTTMjJ%2Ba2Ye80%2BhjC3iq%2Fa8y7hXYEyaGVqu1iow%2FPfyVCJWHJ%2FBOdCzvfrFH%2F3xNAfVmQRpJc2HCABX8fiXI7xuyARdjqRmK5NWucqMMK8%2Bb0GOqUBKlc%2FeUaLvFsdZ4SU4Q5aNNhLLBUhM73DY3iSL0Q40h1OAi4C%2FOn7s9dKgeKmHWtGV2o%2B4jIAEOc2Unu6%2Bmt%2FFzLiQM%2F3tyK9zAiqywmx6bjNSc1HBKMkKpC3tnwIOPyqDDS0v%2FhRYC6cFZYyTS3tlnmSidiP%2F9w91q8ooB8%2BPv0YokgZaoLMGIcDRoDi7qWlcoZvboyEIkCw2rK8KGwgk5OcghL4&X-Amz-Signature=2cab44b079f150a0609b83ea327da29e3cee600157819a881a62bad817a5bbb9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULV457D5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCQ6gwrbBYClctpzGPzTEjA8CP%2B2e%2F8J2aMPhNcrUcs%2FQIgUeCHW1xi8ELBiFI0OANHAZfloGw1%2BJ5eop%2F2cvW6C%2Fgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEsFO%2B9QBBhrmmfivyrcAxchiw%2B2svmbw78gTqREauLEJI4RjbSyQ4TcgtVQonQLcz%2Fz1psMPJmzwf5dnP7CxLX3by%2FG32EtKII2DGRvhcxd2dkZ%2BYBiCSsNlfCiiwVFuSvjUluctnuC%2BfzySPbrM3TIZNXcA8dsrCTN5dlNJt3Vv7opqWqv46dBCMZJpS6n110p%2FyBDmcm2zcC82PHnMLoew9fhdznv82rJFyQ4FU5x%2FxPk18%2B8Ig9yNb8WARCoPdRGRBZR64tCSGFMTEFhp043CNxzvt5TVCLwFzb5%2FZQYvnYNCCloVpacmUSRev6YR%2Bg6LJVzGQc4BeEJLmDnzwmy7RDzp9m1W%2BnHjNqpsop7Lb36PH7%2Bz3UoyypEL%2B7PIQYGlo7dmyw8qI4jL1GVhmWI%2FBpV195VEG7aXRklnh5N8VzCpGDxv10iaTI%2FZOSkH9cDLO%2Fm3qQUR7Xz0ubqYE3sn6NZvjV%2B6HFgMIsWsDAvr4s6vj7p8t%2F5xgs5wwDUfYBWvpNZp6MjU70Lf%2F3bcibtXX74nyejy9%2BRmZq4SaLTTMjJ%2Ba2Ye80%2BhjC3iq%2Fa8y7hXYEyaGVqu1iow%2FPfyVCJWHJ%2FBOdCzvfrFH%2F3xNAfVmQRpJc2HCABX8fiXI7xuyARdjqRmK5NWucqMMK8%2Bb0GOqUBKlc%2FeUaLvFsdZ4SU4Q5aNNhLLBUhM73DY3iSL0Q40h1OAi4C%2FOn7s9dKgeKmHWtGV2o%2B4jIAEOc2Unu6%2Bmt%2FFzLiQM%2F3tyK9zAiqywmx6bjNSc1HBKMkKpC3tnwIOPyqDDS0v%2FhRYC6cFZYyTS3tlnmSidiP%2F9w91q8ooB8%2BPv0YokgZaoLMGIcDRoDi7qWlcoZvboyEIkCw2rK8KGwgk5OcghL4&X-Amz-Signature=aa2a217f1617bd696c62843e54aa1c6cc22404e91c0008a568fe54c6f57c5e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
