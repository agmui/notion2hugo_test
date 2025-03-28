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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQ4N7N6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBKdolB4HenuT7jbULAA9FgXVtKTNEOQnWWuk9zotqmgIhAP2tTEX5XlI9JD%2FkiEMXbvVCdlZCaxJVN3%2B134Xl4Hv6Kv8DCGEQABoMNjM3NDIzMTgzODA1Igy9By%2F0%2Bjj2Ea%2FvuPQq3AMIymqKaFuFlmYa33zHhoaFGNghzp0qji6bxc%2B7F6ywoAAGgu69%2BhPKCqDHOU34eHGBFyMNZYEct118MAFvAGaFpanzeDqXplsAVoZViqZFh43ylXBtDIv014L5msHSR%2BWvyPhg19Q6fsM7DnsC%2FppZjvUKQHcaedy0D1GQOIKO5oDG%2FASEhjnXH0LLGwMLod%2FlbJ6h%2FGln5mhGLbapeFLv7DKed%2F9r9QpgmL%2FopVa10GxmCsab9hgxgE7rQJG28rEYKPqsd%2Bm28mCl6BKQvUSJ7o7bBbfnp2v0ONZNmByOg%2B5f8ZPH3677hMg2ERXRFscwj8XOqIBe4A1HOlvPNbAwdPrQ7CTw8liNYmcLoBeHxUlSh3U3GrLUqiBf33N471NeyBbcyVgQPYfndcN54szqLDPqDm3y9G1GgZWNVCODJqF0IY4v5Nf8dJuT6ddMUxelzn%2FpTjMHc9fRxgd7qOx%2Bwv1c%2F%2FKWojiJNJSwsj0Q4LtBPPRrILAEnG8ursGp1ONQoEv2QPoTl7h5xJ0DRED8SSNg%2B3WP7K%2BXAtUFhuJ95ewh%2BKos3zIlDYi%2BvMu%2BWBLB2W%2Fl28PvxdP32ayMpFR01K8jr1OFuRsGbEBIL925F5N%2B%2Bkz1j0SHiFOqPTC5iZu%2FBjqkAf%2FuipZ%2FAw7bxmz%2BmvTKuHZOU6zQ1T4erEcf7uEIuy3MwOF3lTqv8ogmYQU4BbVUrftDveTn%2BN9dtAYm64CT00dxXlBbQV18SMFhCTeRsJyiUSLfaAENyuGNqcSraMrNM18M2zIspfqWtcYhVBxcU5OypDuYRca93lh6sI8HSOw0BKHCV2FIqNWAFN8EpD%2FkcLzFUuzeq1DZOzq382RKD45S2lLH&X-Amz-Signature=2f1d56bd7f59d432ebfa28c2879e5a5b9a6047ff5e02036d9a30aee2509c1bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQ4N7N6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBKdolB4HenuT7jbULAA9FgXVtKTNEOQnWWuk9zotqmgIhAP2tTEX5XlI9JD%2FkiEMXbvVCdlZCaxJVN3%2B134Xl4Hv6Kv8DCGEQABoMNjM3NDIzMTgzODA1Igy9By%2F0%2Bjj2Ea%2FvuPQq3AMIymqKaFuFlmYa33zHhoaFGNghzp0qji6bxc%2B7F6ywoAAGgu69%2BhPKCqDHOU34eHGBFyMNZYEct118MAFvAGaFpanzeDqXplsAVoZViqZFh43ylXBtDIv014L5msHSR%2BWvyPhg19Q6fsM7DnsC%2FppZjvUKQHcaedy0D1GQOIKO5oDG%2FASEhjnXH0LLGwMLod%2FlbJ6h%2FGln5mhGLbapeFLv7DKed%2F9r9QpgmL%2FopVa10GxmCsab9hgxgE7rQJG28rEYKPqsd%2Bm28mCl6BKQvUSJ7o7bBbfnp2v0ONZNmByOg%2B5f8ZPH3677hMg2ERXRFscwj8XOqIBe4A1HOlvPNbAwdPrQ7CTw8liNYmcLoBeHxUlSh3U3GrLUqiBf33N471NeyBbcyVgQPYfndcN54szqLDPqDm3y9G1GgZWNVCODJqF0IY4v5Nf8dJuT6ddMUxelzn%2FpTjMHc9fRxgd7qOx%2Bwv1c%2F%2FKWojiJNJSwsj0Q4LtBPPRrILAEnG8ursGp1ONQoEv2QPoTl7h5xJ0DRED8SSNg%2B3WP7K%2BXAtUFhuJ95ewh%2BKos3zIlDYi%2BvMu%2BWBLB2W%2Fl28PvxdP32ayMpFR01K8jr1OFuRsGbEBIL925F5N%2B%2Bkz1j0SHiFOqPTC5iZu%2FBjqkAf%2FuipZ%2FAw7bxmz%2BmvTKuHZOU6zQ1T4erEcf7uEIuy3MwOF3lTqv8ogmYQU4BbVUrftDveTn%2BN9dtAYm64CT00dxXlBbQV18SMFhCTeRsJyiUSLfaAENyuGNqcSraMrNM18M2zIspfqWtcYhVBxcU5OypDuYRca93lh6sI8HSOw0BKHCV2FIqNWAFN8EpD%2FkcLzFUuzeq1DZOzq382RKD45S2lLH&X-Amz-Signature=cd64a630d0c337853a5b694f9562befacceabf22b0a4e30182e3ac9dc14e9509&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQ4N7N6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBKdolB4HenuT7jbULAA9FgXVtKTNEOQnWWuk9zotqmgIhAP2tTEX5XlI9JD%2FkiEMXbvVCdlZCaxJVN3%2B134Xl4Hv6Kv8DCGEQABoMNjM3NDIzMTgzODA1Igy9By%2F0%2Bjj2Ea%2FvuPQq3AMIymqKaFuFlmYa33zHhoaFGNghzp0qji6bxc%2B7F6ywoAAGgu69%2BhPKCqDHOU34eHGBFyMNZYEct118MAFvAGaFpanzeDqXplsAVoZViqZFh43ylXBtDIv014L5msHSR%2BWvyPhg19Q6fsM7DnsC%2FppZjvUKQHcaedy0D1GQOIKO5oDG%2FASEhjnXH0LLGwMLod%2FlbJ6h%2FGln5mhGLbapeFLv7DKed%2F9r9QpgmL%2FopVa10GxmCsab9hgxgE7rQJG28rEYKPqsd%2Bm28mCl6BKQvUSJ7o7bBbfnp2v0ONZNmByOg%2B5f8ZPH3677hMg2ERXRFscwj8XOqIBe4A1HOlvPNbAwdPrQ7CTw8liNYmcLoBeHxUlSh3U3GrLUqiBf33N471NeyBbcyVgQPYfndcN54szqLDPqDm3y9G1GgZWNVCODJqF0IY4v5Nf8dJuT6ddMUxelzn%2FpTjMHc9fRxgd7qOx%2Bwv1c%2F%2FKWojiJNJSwsj0Q4LtBPPRrILAEnG8ursGp1ONQoEv2QPoTl7h5xJ0DRED8SSNg%2B3WP7K%2BXAtUFhuJ95ewh%2BKos3zIlDYi%2BvMu%2BWBLB2W%2Fl28PvxdP32ayMpFR01K8jr1OFuRsGbEBIL925F5N%2B%2Bkz1j0SHiFOqPTC5iZu%2FBjqkAf%2FuipZ%2FAw7bxmz%2BmvTKuHZOU6zQ1T4erEcf7uEIuy3MwOF3lTqv8ogmYQU4BbVUrftDveTn%2BN9dtAYm64CT00dxXlBbQV18SMFhCTeRsJyiUSLfaAENyuGNqcSraMrNM18M2zIspfqWtcYhVBxcU5OypDuYRca93lh6sI8HSOw0BKHCV2FIqNWAFN8EpD%2FkcLzFUuzeq1DZOzq382RKD45S2lLH&X-Amz-Signature=5d55b84d8f2e59a942cd5cb431e8608f0cb928620ea7f011740f5dd933a168cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQ4N7N6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBKdolB4HenuT7jbULAA9FgXVtKTNEOQnWWuk9zotqmgIhAP2tTEX5XlI9JD%2FkiEMXbvVCdlZCaxJVN3%2B134Xl4Hv6Kv8DCGEQABoMNjM3NDIzMTgzODA1Igy9By%2F0%2Bjj2Ea%2FvuPQq3AMIymqKaFuFlmYa33zHhoaFGNghzp0qji6bxc%2B7F6ywoAAGgu69%2BhPKCqDHOU34eHGBFyMNZYEct118MAFvAGaFpanzeDqXplsAVoZViqZFh43ylXBtDIv014L5msHSR%2BWvyPhg19Q6fsM7DnsC%2FppZjvUKQHcaedy0D1GQOIKO5oDG%2FASEhjnXH0LLGwMLod%2FlbJ6h%2FGln5mhGLbapeFLv7DKed%2F9r9QpgmL%2FopVa10GxmCsab9hgxgE7rQJG28rEYKPqsd%2Bm28mCl6BKQvUSJ7o7bBbfnp2v0ONZNmByOg%2B5f8ZPH3677hMg2ERXRFscwj8XOqIBe4A1HOlvPNbAwdPrQ7CTw8liNYmcLoBeHxUlSh3U3GrLUqiBf33N471NeyBbcyVgQPYfndcN54szqLDPqDm3y9G1GgZWNVCODJqF0IY4v5Nf8dJuT6ddMUxelzn%2FpTjMHc9fRxgd7qOx%2Bwv1c%2F%2FKWojiJNJSwsj0Q4LtBPPRrILAEnG8ursGp1ONQoEv2QPoTl7h5xJ0DRED8SSNg%2B3WP7K%2BXAtUFhuJ95ewh%2BKos3zIlDYi%2BvMu%2BWBLB2W%2Fl28PvxdP32ayMpFR01K8jr1OFuRsGbEBIL925F5N%2B%2Bkz1j0SHiFOqPTC5iZu%2FBjqkAf%2FuipZ%2FAw7bxmz%2BmvTKuHZOU6zQ1T4erEcf7uEIuy3MwOF3lTqv8ogmYQU4BbVUrftDveTn%2BN9dtAYm64CT00dxXlBbQV18SMFhCTeRsJyiUSLfaAENyuGNqcSraMrNM18M2zIspfqWtcYhVBxcU5OypDuYRca93lh6sI8HSOw0BKHCV2FIqNWAFN8EpD%2FkcLzFUuzeq1DZOzq382RKD45S2lLH&X-Amz-Signature=0de7fd2a1cff63571b55a90c286bb96448f47f2634f2c0963e96bd95cdcc0b56&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQ4N7N6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBKdolB4HenuT7jbULAA9FgXVtKTNEOQnWWuk9zotqmgIhAP2tTEX5XlI9JD%2FkiEMXbvVCdlZCaxJVN3%2B134Xl4Hv6Kv8DCGEQABoMNjM3NDIzMTgzODA1Igy9By%2F0%2Bjj2Ea%2FvuPQq3AMIymqKaFuFlmYa33zHhoaFGNghzp0qji6bxc%2B7F6ywoAAGgu69%2BhPKCqDHOU34eHGBFyMNZYEct118MAFvAGaFpanzeDqXplsAVoZViqZFh43ylXBtDIv014L5msHSR%2BWvyPhg19Q6fsM7DnsC%2FppZjvUKQHcaedy0D1GQOIKO5oDG%2FASEhjnXH0LLGwMLod%2FlbJ6h%2FGln5mhGLbapeFLv7DKed%2F9r9QpgmL%2FopVa10GxmCsab9hgxgE7rQJG28rEYKPqsd%2Bm28mCl6BKQvUSJ7o7bBbfnp2v0ONZNmByOg%2B5f8ZPH3677hMg2ERXRFscwj8XOqIBe4A1HOlvPNbAwdPrQ7CTw8liNYmcLoBeHxUlSh3U3GrLUqiBf33N471NeyBbcyVgQPYfndcN54szqLDPqDm3y9G1GgZWNVCODJqF0IY4v5Nf8dJuT6ddMUxelzn%2FpTjMHc9fRxgd7qOx%2Bwv1c%2F%2FKWojiJNJSwsj0Q4LtBPPRrILAEnG8ursGp1ONQoEv2QPoTl7h5xJ0DRED8SSNg%2B3WP7K%2BXAtUFhuJ95ewh%2BKos3zIlDYi%2BvMu%2BWBLB2W%2Fl28PvxdP32ayMpFR01K8jr1OFuRsGbEBIL925F5N%2B%2Bkz1j0SHiFOqPTC5iZu%2FBjqkAf%2FuipZ%2FAw7bxmz%2BmvTKuHZOU6zQ1T4erEcf7uEIuy3MwOF3lTqv8ogmYQU4BbVUrftDveTn%2BN9dtAYm64CT00dxXlBbQV18SMFhCTeRsJyiUSLfaAENyuGNqcSraMrNM18M2zIspfqWtcYhVBxcU5OypDuYRca93lh6sI8HSOw0BKHCV2FIqNWAFN8EpD%2FkcLzFUuzeq1DZOzq382RKD45S2lLH&X-Amz-Signature=09d8ac702f98bc90fa18e24311449c3b2192f81fd3897b3e9df3c1f829b8d1ed&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQ4N7N6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBKdolB4HenuT7jbULAA9FgXVtKTNEOQnWWuk9zotqmgIhAP2tTEX5XlI9JD%2FkiEMXbvVCdlZCaxJVN3%2B134Xl4Hv6Kv8DCGEQABoMNjM3NDIzMTgzODA1Igy9By%2F0%2Bjj2Ea%2FvuPQq3AMIymqKaFuFlmYa33zHhoaFGNghzp0qji6bxc%2B7F6ywoAAGgu69%2BhPKCqDHOU34eHGBFyMNZYEct118MAFvAGaFpanzeDqXplsAVoZViqZFh43ylXBtDIv014L5msHSR%2BWvyPhg19Q6fsM7DnsC%2FppZjvUKQHcaedy0D1GQOIKO5oDG%2FASEhjnXH0LLGwMLod%2FlbJ6h%2FGln5mhGLbapeFLv7DKed%2F9r9QpgmL%2FopVa10GxmCsab9hgxgE7rQJG28rEYKPqsd%2Bm28mCl6BKQvUSJ7o7bBbfnp2v0ONZNmByOg%2B5f8ZPH3677hMg2ERXRFscwj8XOqIBe4A1HOlvPNbAwdPrQ7CTw8liNYmcLoBeHxUlSh3U3GrLUqiBf33N471NeyBbcyVgQPYfndcN54szqLDPqDm3y9G1GgZWNVCODJqF0IY4v5Nf8dJuT6ddMUxelzn%2FpTjMHc9fRxgd7qOx%2Bwv1c%2F%2FKWojiJNJSwsj0Q4LtBPPRrILAEnG8ursGp1ONQoEv2QPoTl7h5xJ0DRED8SSNg%2B3WP7K%2BXAtUFhuJ95ewh%2BKos3zIlDYi%2BvMu%2BWBLB2W%2Fl28PvxdP32ayMpFR01K8jr1OFuRsGbEBIL925F5N%2B%2Bkz1j0SHiFOqPTC5iZu%2FBjqkAf%2FuipZ%2FAw7bxmz%2BmvTKuHZOU6zQ1T4erEcf7uEIuy3MwOF3lTqv8ogmYQU4BbVUrftDveTn%2BN9dtAYm64CT00dxXlBbQV18SMFhCTeRsJyiUSLfaAENyuGNqcSraMrNM18M2zIspfqWtcYhVBxcU5OypDuYRca93lh6sI8HSOw0BKHCV2FIqNWAFN8EpD%2FkcLzFUuzeq1DZOzq382RKD45S2lLH&X-Amz-Signature=caaf8d4532ecf8226e7be981166026d688d2174f9967084023f4142173438472&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQ4N7N6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBKdolB4HenuT7jbULAA9FgXVtKTNEOQnWWuk9zotqmgIhAP2tTEX5XlI9JD%2FkiEMXbvVCdlZCaxJVN3%2B134Xl4Hv6Kv8DCGEQABoMNjM3NDIzMTgzODA1Igy9By%2F0%2Bjj2Ea%2FvuPQq3AMIymqKaFuFlmYa33zHhoaFGNghzp0qji6bxc%2B7F6ywoAAGgu69%2BhPKCqDHOU34eHGBFyMNZYEct118MAFvAGaFpanzeDqXplsAVoZViqZFh43ylXBtDIv014L5msHSR%2BWvyPhg19Q6fsM7DnsC%2FppZjvUKQHcaedy0D1GQOIKO5oDG%2FASEhjnXH0LLGwMLod%2FlbJ6h%2FGln5mhGLbapeFLv7DKed%2F9r9QpgmL%2FopVa10GxmCsab9hgxgE7rQJG28rEYKPqsd%2Bm28mCl6BKQvUSJ7o7bBbfnp2v0ONZNmByOg%2B5f8ZPH3677hMg2ERXRFscwj8XOqIBe4A1HOlvPNbAwdPrQ7CTw8liNYmcLoBeHxUlSh3U3GrLUqiBf33N471NeyBbcyVgQPYfndcN54szqLDPqDm3y9G1GgZWNVCODJqF0IY4v5Nf8dJuT6ddMUxelzn%2FpTjMHc9fRxgd7qOx%2Bwv1c%2F%2FKWojiJNJSwsj0Q4LtBPPRrILAEnG8ursGp1ONQoEv2QPoTl7h5xJ0DRED8SSNg%2B3WP7K%2BXAtUFhuJ95ewh%2BKos3zIlDYi%2BvMu%2BWBLB2W%2Fl28PvxdP32ayMpFR01K8jr1OFuRsGbEBIL925F5N%2B%2Bkz1j0SHiFOqPTC5iZu%2FBjqkAf%2FuipZ%2FAw7bxmz%2BmvTKuHZOU6zQ1T4erEcf7uEIuy3MwOF3lTqv8ogmYQU4BbVUrftDveTn%2BN9dtAYm64CT00dxXlBbQV18SMFhCTeRsJyiUSLfaAENyuGNqcSraMrNM18M2zIspfqWtcYhVBxcU5OypDuYRca93lh6sI8HSOw0BKHCV2FIqNWAFN8EpD%2FkcLzFUuzeq1DZOzq382RKD45S2lLH&X-Amz-Signature=943519b7da8e811d43570f46a14add5e47df911a80ab73cfef615a0d97f73900&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
