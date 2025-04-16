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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXN7WNPV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2F0W0T%2FRwqj%2F1khOq9k6j3O56FiA%2FEDX7tciLYuFkKAiBmYbtS%2FGk8iFw%2FDWIDRlg3%2Bx6%2BK71ZgEvxZJNSZTgvXir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM4o5HOB4hZst%2BBabhKtwDOxcWBzY2D6InG1U2PjRWRK7XFXlKvHLKc63xyzvIcmbofHVb%2Fjy6XL2%2BKpmmLbNIZnFEcIG%2FILZJTqgWY8mpUmdil%2Fr92suM9oH5x7wpkjpQiEh6nMr%2BO3339fXs23ZHPFqWbZpPzPsYd4mfwdGFNKoRDHX4U2UJHS%2Bwl%2BbCqCBO9ZBfd%2BfQldiS46KwCKOnsCrciOPF%2B22whNYvmEh6J3I6hG3jjTaTFtT3BldWGKqCAHrdBfqw6NxurvnVmyEeD0UYNHcE5iKHG9uFZO06MOlZ9XKnJfSssn8PEK8IPyhf6yK8D0c3Tw%2BVeAYnxiCl5EEa4%2B98xVKvk7Bj%2FMKJZJexdu3DbXxHlwVa4ZWdsDAnGKnsyD7MyhcyvL%2Fm%2FTFjhylSbr9roWAWkFw5b5etnr%2FM9kNVcL0AYyUiuANrlUQRjxPSyglIjqr%2BRQhAFiKHOvdw0T6ZQTxB9Ox1aFBNqjbMqiucD2UMD23AmRNGEJrFCwhfVpCBHYugOBE%2B%2B%2FEP%2FoLFLZBWZHzm1mM%2FtMqXxHeThGFZOUEkfT4hdiwP4ThsdsDopS7l5%2Bs8wbYiQP18oGwxYGM0iw%2B7NcD1ThifUWe%2FTaBo2jXqhS0Un%2BVBWpUTyckwNn7%2FOTHjcUgwwrz8vwY6pgGKs%2B7yRQsVNpWUrqbxPb%2BiH9zF3KHSayXxmjYf0j90Nj8c%2BIDpDrpNzyVnc2OSWrENFDh%2BJriViPaxab%2Fj2tRz%2FZjffZCOtdAz9vCaeCprOIqkAXQO0xkQbcefzrpcitwR3auS5vIrtWeebFvXhYqp%2FbDoWc3%2BNbyVv1eybPfDLF7KuN5gKpt6Sv1dIJesfa3f%2FNjRek9gbVLDCDW%2BkQo1fDCa4vHS&X-Amz-Signature=0085d6b7dba70fcffab5e4cb75c8491be22a48a19a54176a90c651323a163195&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXN7WNPV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2F0W0T%2FRwqj%2F1khOq9k6j3O56FiA%2FEDX7tciLYuFkKAiBmYbtS%2FGk8iFw%2FDWIDRlg3%2Bx6%2BK71ZgEvxZJNSZTgvXir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM4o5HOB4hZst%2BBabhKtwDOxcWBzY2D6InG1U2PjRWRK7XFXlKvHLKc63xyzvIcmbofHVb%2Fjy6XL2%2BKpmmLbNIZnFEcIG%2FILZJTqgWY8mpUmdil%2Fr92suM9oH5x7wpkjpQiEh6nMr%2BO3339fXs23ZHPFqWbZpPzPsYd4mfwdGFNKoRDHX4U2UJHS%2Bwl%2BbCqCBO9ZBfd%2BfQldiS46KwCKOnsCrciOPF%2B22whNYvmEh6J3I6hG3jjTaTFtT3BldWGKqCAHrdBfqw6NxurvnVmyEeD0UYNHcE5iKHG9uFZO06MOlZ9XKnJfSssn8PEK8IPyhf6yK8D0c3Tw%2BVeAYnxiCl5EEa4%2B98xVKvk7Bj%2FMKJZJexdu3DbXxHlwVa4ZWdsDAnGKnsyD7MyhcyvL%2Fm%2FTFjhylSbr9roWAWkFw5b5etnr%2FM9kNVcL0AYyUiuANrlUQRjxPSyglIjqr%2BRQhAFiKHOvdw0T6ZQTxB9Ox1aFBNqjbMqiucD2UMD23AmRNGEJrFCwhfVpCBHYugOBE%2B%2B%2FEP%2FoLFLZBWZHzm1mM%2FtMqXxHeThGFZOUEkfT4hdiwP4ThsdsDopS7l5%2Bs8wbYiQP18oGwxYGM0iw%2B7NcD1ThifUWe%2FTaBo2jXqhS0Un%2BVBWpUTyckwNn7%2FOTHjcUgwwrz8vwY6pgGKs%2B7yRQsVNpWUrqbxPb%2BiH9zF3KHSayXxmjYf0j90Nj8c%2BIDpDrpNzyVnc2OSWrENFDh%2BJriViPaxab%2Fj2tRz%2FZjffZCOtdAz9vCaeCprOIqkAXQO0xkQbcefzrpcitwR3auS5vIrtWeebFvXhYqp%2FbDoWc3%2BNbyVv1eybPfDLF7KuN5gKpt6Sv1dIJesfa3f%2FNjRek9gbVLDCDW%2BkQo1fDCa4vHS&X-Amz-Signature=9caaeb178d807b4e9f798a4c46ae65bdd830f1da734fdc1ebd4b25719f9979a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXN7WNPV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2F0W0T%2FRwqj%2F1khOq9k6j3O56FiA%2FEDX7tciLYuFkKAiBmYbtS%2FGk8iFw%2FDWIDRlg3%2Bx6%2BK71ZgEvxZJNSZTgvXir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM4o5HOB4hZst%2BBabhKtwDOxcWBzY2D6InG1U2PjRWRK7XFXlKvHLKc63xyzvIcmbofHVb%2Fjy6XL2%2BKpmmLbNIZnFEcIG%2FILZJTqgWY8mpUmdil%2Fr92suM9oH5x7wpkjpQiEh6nMr%2BO3339fXs23ZHPFqWbZpPzPsYd4mfwdGFNKoRDHX4U2UJHS%2Bwl%2BbCqCBO9ZBfd%2BfQldiS46KwCKOnsCrciOPF%2B22whNYvmEh6J3I6hG3jjTaTFtT3BldWGKqCAHrdBfqw6NxurvnVmyEeD0UYNHcE5iKHG9uFZO06MOlZ9XKnJfSssn8PEK8IPyhf6yK8D0c3Tw%2BVeAYnxiCl5EEa4%2B98xVKvk7Bj%2FMKJZJexdu3DbXxHlwVa4ZWdsDAnGKnsyD7MyhcyvL%2Fm%2FTFjhylSbr9roWAWkFw5b5etnr%2FM9kNVcL0AYyUiuANrlUQRjxPSyglIjqr%2BRQhAFiKHOvdw0T6ZQTxB9Ox1aFBNqjbMqiucD2UMD23AmRNGEJrFCwhfVpCBHYugOBE%2B%2B%2FEP%2FoLFLZBWZHzm1mM%2FtMqXxHeThGFZOUEkfT4hdiwP4ThsdsDopS7l5%2Bs8wbYiQP18oGwxYGM0iw%2B7NcD1ThifUWe%2FTaBo2jXqhS0Un%2BVBWpUTyckwNn7%2FOTHjcUgwwrz8vwY6pgGKs%2B7yRQsVNpWUrqbxPb%2BiH9zF3KHSayXxmjYf0j90Nj8c%2BIDpDrpNzyVnc2OSWrENFDh%2BJriViPaxab%2Fj2tRz%2FZjffZCOtdAz9vCaeCprOIqkAXQO0xkQbcefzrpcitwR3auS5vIrtWeebFvXhYqp%2FbDoWc3%2BNbyVv1eybPfDLF7KuN5gKpt6Sv1dIJesfa3f%2FNjRek9gbVLDCDW%2BkQo1fDCa4vHS&X-Amz-Signature=25232ca9654989002118fbd41ac21ec1cc8aaccdaf3a1995e4708df84c1e055c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXN7WNPV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2F0W0T%2FRwqj%2F1khOq9k6j3O56FiA%2FEDX7tciLYuFkKAiBmYbtS%2FGk8iFw%2FDWIDRlg3%2Bx6%2BK71ZgEvxZJNSZTgvXir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM4o5HOB4hZst%2BBabhKtwDOxcWBzY2D6InG1U2PjRWRK7XFXlKvHLKc63xyzvIcmbofHVb%2Fjy6XL2%2BKpmmLbNIZnFEcIG%2FILZJTqgWY8mpUmdil%2Fr92suM9oH5x7wpkjpQiEh6nMr%2BO3339fXs23ZHPFqWbZpPzPsYd4mfwdGFNKoRDHX4U2UJHS%2Bwl%2BbCqCBO9ZBfd%2BfQldiS46KwCKOnsCrciOPF%2B22whNYvmEh6J3I6hG3jjTaTFtT3BldWGKqCAHrdBfqw6NxurvnVmyEeD0UYNHcE5iKHG9uFZO06MOlZ9XKnJfSssn8PEK8IPyhf6yK8D0c3Tw%2BVeAYnxiCl5EEa4%2B98xVKvk7Bj%2FMKJZJexdu3DbXxHlwVa4ZWdsDAnGKnsyD7MyhcyvL%2Fm%2FTFjhylSbr9roWAWkFw5b5etnr%2FM9kNVcL0AYyUiuANrlUQRjxPSyglIjqr%2BRQhAFiKHOvdw0T6ZQTxB9Ox1aFBNqjbMqiucD2UMD23AmRNGEJrFCwhfVpCBHYugOBE%2B%2B%2FEP%2FoLFLZBWZHzm1mM%2FtMqXxHeThGFZOUEkfT4hdiwP4ThsdsDopS7l5%2Bs8wbYiQP18oGwxYGM0iw%2B7NcD1ThifUWe%2FTaBo2jXqhS0Un%2BVBWpUTyckwNn7%2FOTHjcUgwwrz8vwY6pgGKs%2B7yRQsVNpWUrqbxPb%2BiH9zF3KHSayXxmjYf0j90Nj8c%2BIDpDrpNzyVnc2OSWrENFDh%2BJriViPaxab%2Fj2tRz%2FZjffZCOtdAz9vCaeCprOIqkAXQO0xkQbcefzrpcitwR3auS5vIrtWeebFvXhYqp%2FbDoWc3%2BNbyVv1eybPfDLF7KuN5gKpt6Sv1dIJesfa3f%2FNjRek9gbVLDCDW%2BkQo1fDCa4vHS&X-Amz-Signature=0029d9e06ad9d338abe6c1cd49c20c71554cdb87fccb57075e36cd9651db98dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXN7WNPV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2F0W0T%2FRwqj%2F1khOq9k6j3O56FiA%2FEDX7tciLYuFkKAiBmYbtS%2FGk8iFw%2FDWIDRlg3%2Bx6%2BK71ZgEvxZJNSZTgvXir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM4o5HOB4hZst%2BBabhKtwDOxcWBzY2D6InG1U2PjRWRK7XFXlKvHLKc63xyzvIcmbofHVb%2Fjy6XL2%2BKpmmLbNIZnFEcIG%2FILZJTqgWY8mpUmdil%2Fr92suM9oH5x7wpkjpQiEh6nMr%2BO3339fXs23ZHPFqWbZpPzPsYd4mfwdGFNKoRDHX4U2UJHS%2Bwl%2BbCqCBO9ZBfd%2BfQldiS46KwCKOnsCrciOPF%2B22whNYvmEh6J3I6hG3jjTaTFtT3BldWGKqCAHrdBfqw6NxurvnVmyEeD0UYNHcE5iKHG9uFZO06MOlZ9XKnJfSssn8PEK8IPyhf6yK8D0c3Tw%2BVeAYnxiCl5EEa4%2B98xVKvk7Bj%2FMKJZJexdu3DbXxHlwVa4ZWdsDAnGKnsyD7MyhcyvL%2Fm%2FTFjhylSbr9roWAWkFw5b5etnr%2FM9kNVcL0AYyUiuANrlUQRjxPSyglIjqr%2BRQhAFiKHOvdw0T6ZQTxB9Ox1aFBNqjbMqiucD2UMD23AmRNGEJrFCwhfVpCBHYugOBE%2B%2B%2FEP%2FoLFLZBWZHzm1mM%2FtMqXxHeThGFZOUEkfT4hdiwP4ThsdsDopS7l5%2Bs8wbYiQP18oGwxYGM0iw%2B7NcD1ThifUWe%2FTaBo2jXqhS0Un%2BVBWpUTyckwNn7%2FOTHjcUgwwrz8vwY6pgGKs%2B7yRQsVNpWUrqbxPb%2BiH9zF3KHSayXxmjYf0j90Nj8c%2BIDpDrpNzyVnc2OSWrENFDh%2BJriViPaxab%2Fj2tRz%2FZjffZCOtdAz9vCaeCprOIqkAXQO0xkQbcefzrpcitwR3auS5vIrtWeebFvXhYqp%2FbDoWc3%2BNbyVv1eybPfDLF7KuN5gKpt6Sv1dIJesfa3f%2FNjRek9gbVLDCDW%2BkQo1fDCa4vHS&X-Amz-Signature=1ff3c2f6734e3e50c7350643658d6176b67d2525d81c9ff6ccda8db5e16843f9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXN7WNPV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2F0W0T%2FRwqj%2F1khOq9k6j3O56FiA%2FEDX7tciLYuFkKAiBmYbtS%2FGk8iFw%2FDWIDRlg3%2Bx6%2BK71ZgEvxZJNSZTgvXir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM4o5HOB4hZst%2BBabhKtwDOxcWBzY2D6InG1U2PjRWRK7XFXlKvHLKc63xyzvIcmbofHVb%2Fjy6XL2%2BKpmmLbNIZnFEcIG%2FILZJTqgWY8mpUmdil%2Fr92suM9oH5x7wpkjpQiEh6nMr%2BO3339fXs23ZHPFqWbZpPzPsYd4mfwdGFNKoRDHX4U2UJHS%2Bwl%2BbCqCBO9ZBfd%2BfQldiS46KwCKOnsCrciOPF%2B22whNYvmEh6J3I6hG3jjTaTFtT3BldWGKqCAHrdBfqw6NxurvnVmyEeD0UYNHcE5iKHG9uFZO06MOlZ9XKnJfSssn8PEK8IPyhf6yK8D0c3Tw%2BVeAYnxiCl5EEa4%2B98xVKvk7Bj%2FMKJZJexdu3DbXxHlwVa4ZWdsDAnGKnsyD7MyhcyvL%2Fm%2FTFjhylSbr9roWAWkFw5b5etnr%2FM9kNVcL0AYyUiuANrlUQRjxPSyglIjqr%2BRQhAFiKHOvdw0T6ZQTxB9Ox1aFBNqjbMqiucD2UMD23AmRNGEJrFCwhfVpCBHYugOBE%2B%2B%2FEP%2FoLFLZBWZHzm1mM%2FtMqXxHeThGFZOUEkfT4hdiwP4ThsdsDopS7l5%2Bs8wbYiQP18oGwxYGM0iw%2B7NcD1ThifUWe%2FTaBo2jXqhS0Un%2BVBWpUTyckwNn7%2FOTHjcUgwwrz8vwY6pgGKs%2B7yRQsVNpWUrqbxPb%2BiH9zF3KHSayXxmjYf0j90Nj8c%2BIDpDrpNzyVnc2OSWrENFDh%2BJriViPaxab%2Fj2tRz%2FZjffZCOtdAz9vCaeCprOIqkAXQO0xkQbcefzrpcitwR3auS5vIrtWeebFvXhYqp%2FbDoWc3%2BNbyVv1eybPfDLF7KuN5gKpt6Sv1dIJesfa3f%2FNjRek9gbVLDCDW%2BkQo1fDCa4vHS&X-Amz-Signature=281279879b913615f42de8fffaf6ce82fe45a6119fa34a0edf104acd1b308373&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXN7WNPV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B%2F0W0T%2FRwqj%2F1khOq9k6j3O56FiA%2FEDX7tciLYuFkKAiBmYbtS%2FGk8iFw%2FDWIDRlg3%2Bx6%2BK71ZgEvxZJNSZTgvXir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM4o5HOB4hZst%2BBabhKtwDOxcWBzY2D6InG1U2PjRWRK7XFXlKvHLKc63xyzvIcmbofHVb%2Fjy6XL2%2BKpmmLbNIZnFEcIG%2FILZJTqgWY8mpUmdil%2Fr92suM9oH5x7wpkjpQiEh6nMr%2BO3339fXs23ZHPFqWbZpPzPsYd4mfwdGFNKoRDHX4U2UJHS%2Bwl%2BbCqCBO9ZBfd%2BfQldiS46KwCKOnsCrciOPF%2B22whNYvmEh6J3I6hG3jjTaTFtT3BldWGKqCAHrdBfqw6NxurvnVmyEeD0UYNHcE5iKHG9uFZO06MOlZ9XKnJfSssn8PEK8IPyhf6yK8D0c3Tw%2BVeAYnxiCl5EEa4%2B98xVKvk7Bj%2FMKJZJexdu3DbXxHlwVa4ZWdsDAnGKnsyD7MyhcyvL%2Fm%2FTFjhylSbr9roWAWkFw5b5etnr%2FM9kNVcL0AYyUiuANrlUQRjxPSyglIjqr%2BRQhAFiKHOvdw0T6ZQTxB9Ox1aFBNqjbMqiucD2UMD23AmRNGEJrFCwhfVpCBHYugOBE%2B%2B%2FEP%2FoLFLZBWZHzm1mM%2FtMqXxHeThGFZOUEkfT4hdiwP4ThsdsDopS7l5%2Bs8wbYiQP18oGwxYGM0iw%2B7NcD1ThifUWe%2FTaBo2jXqhS0Un%2BVBWpUTyckwNn7%2FOTHjcUgwwrz8vwY6pgGKs%2B7yRQsVNpWUrqbxPb%2BiH9zF3KHSayXxmjYf0j90Nj8c%2BIDpDrpNzyVnc2OSWrENFDh%2BJriViPaxab%2Fj2tRz%2FZjffZCOtdAz9vCaeCprOIqkAXQO0xkQbcefzrpcitwR3auS5vIrtWeebFvXhYqp%2FbDoWc3%2BNbyVv1eybPfDLF7KuN5gKpt6Sv1dIJesfa3f%2FNjRek9gbVLDCDW%2BkQo1fDCa4vHS&X-Amz-Signature=2daf20ee0bf85fd6477c227deed68c176c243c549e60dd51d3243f473a2982b0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
