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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4QZHP7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQntunulnTkBjpLShN%2FYM0QplZtWIxyAuzE0QUp9DFdQIgS7%2F%2BbTpnnD%2FPtOrWXcYxdz2kzyeBHwN7%2FjL2yUQeQsIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOJvtd4aQm3IRDOZSrcA5E9ZLH8T8LuDgFu43tO4warLSAi6K3nLiN0vr7cvgEViTgh%2BUe11sIOCFoSxe7BfE1iqguW3K3sH6csx5inP2wvBz0LNNQ1Kpxwe10%2FRkq9qlMhK3kO0e%2FBCvCEStYOFH3N6zeaDK0XX%2FITDp4OvIahG%2FDPYT8mRNgFTBCOUYMdcqSXiZYfal%2BtfOgjLsbqWdc4IbIMeSfJCHPZzabLP2Zrdi4sYlOUs94IR9o1SfwBrNMoY1LPt6Sp3y%2Boe56BrA0qKWB0wnk6aWm97Y8eVYn%2FkCUP8K9NmJ4nhhDFCaiYM9jMwH9%2BTzmsMiHVnOL22lHleBmtVqmqM71KJUjhU05Fp1Ay4iLRQD6Q88JyW6z2TWWMS0c6iyfl01HnhICJH7RaXEdVR%2FkAKB%2Bv1Drveue9ANMm4K13H%2F6JzU8x51W5aUFDAqjzpTNMBNub2A0VSq7HdY9QRJhZ58IwENjUujIDQ4%2BgYSwvdHTkv6B8hiYjPDdznI4Vw6U4pHHKF3KdjpcYjfNuJpXFZ04eXeWP1x%2BWuujjBAxPN5BhTfrQVCDHll9QQGzGEuILESKmEWOkmZQEJz3WRWwZkn%2FYT1Wa9umXnVgS2Kw5WS2tPM4Kulgrm%2BJGoy%2BdY0cvqtdgMPPdmcIGOqUBdxQUar0Gfq58Zh61djauHnDReKa1qKQgtpNw7R7CHPjOCNx4FfGQBi0Q289lvrTPWmJAOD46ZVJYAN6LQpdwxenm%2FE0tY6ny6ChdF1BoCWRA%2FLWnaVlEMQkJeKj3Yu5XbzRhGRtoColWD3DLkrYixpKqumLIOBdk%2FSUEJ7y%2BEm6H7tyNSgz%2ByzL%2Fdlf5hEK3LM1O%2Bibhh9Tp7xNl96dWbsnX2B8E&X-Amz-Signature=c4f943485f2caf6acea7291804c3865b4cb301e0f0a298333fae8b1d002c6946&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4QZHP7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQntunulnTkBjpLShN%2FYM0QplZtWIxyAuzE0QUp9DFdQIgS7%2F%2BbTpnnD%2FPtOrWXcYxdz2kzyeBHwN7%2FjL2yUQeQsIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOJvtd4aQm3IRDOZSrcA5E9ZLH8T8LuDgFu43tO4warLSAi6K3nLiN0vr7cvgEViTgh%2BUe11sIOCFoSxe7BfE1iqguW3K3sH6csx5inP2wvBz0LNNQ1Kpxwe10%2FRkq9qlMhK3kO0e%2FBCvCEStYOFH3N6zeaDK0XX%2FITDp4OvIahG%2FDPYT8mRNgFTBCOUYMdcqSXiZYfal%2BtfOgjLsbqWdc4IbIMeSfJCHPZzabLP2Zrdi4sYlOUs94IR9o1SfwBrNMoY1LPt6Sp3y%2Boe56BrA0qKWB0wnk6aWm97Y8eVYn%2FkCUP8K9NmJ4nhhDFCaiYM9jMwH9%2BTzmsMiHVnOL22lHleBmtVqmqM71KJUjhU05Fp1Ay4iLRQD6Q88JyW6z2TWWMS0c6iyfl01HnhICJH7RaXEdVR%2FkAKB%2Bv1Drveue9ANMm4K13H%2F6JzU8x51W5aUFDAqjzpTNMBNub2A0VSq7HdY9QRJhZ58IwENjUujIDQ4%2BgYSwvdHTkv6B8hiYjPDdznI4Vw6U4pHHKF3KdjpcYjfNuJpXFZ04eXeWP1x%2BWuujjBAxPN5BhTfrQVCDHll9QQGzGEuILESKmEWOkmZQEJz3WRWwZkn%2FYT1Wa9umXnVgS2Kw5WS2tPM4Kulgrm%2BJGoy%2BdY0cvqtdgMPPdmcIGOqUBdxQUar0Gfq58Zh61djauHnDReKa1qKQgtpNw7R7CHPjOCNx4FfGQBi0Q289lvrTPWmJAOD46ZVJYAN6LQpdwxenm%2FE0tY6ny6ChdF1BoCWRA%2FLWnaVlEMQkJeKj3Yu5XbzRhGRtoColWD3DLkrYixpKqumLIOBdk%2FSUEJ7y%2BEm6H7tyNSgz%2ByzL%2Fdlf5hEK3LM1O%2Bibhh9Tp7xNl96dWbsnX2B8E&X-Amz-Signature=a3a232b7f61bd09fd63038b22dc465a1c063a629286da0c6072ca805ac24b2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4QZHP7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQntunulnTkBjpLShN%2FYM0QplZtWIxyAuzE0QUp9DFdQIgS7%2F%2BbTpnnD%2FPtOrWXcYxdz2kzyeBHwN7%2FjL2yUQeQsIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOJvtd4aQm3IRDOZSrcA5E9ZLH8T8LuDgFu43tO4warLSAi6K3nLiN0vr7cvgEViTgh%2BUe11sIOCFoSxe7BfE1iqguW3K3sH6csx5inP2wvBz0LNNQ1Kpxwe10%2FRkq9qlMhK3kO0e%2FBCvCEStYOFH3N6zeaDK0XX%2FITDp4OvIahG%2FDPYT8mRNgFTBCOUYMdcqSXiZYfal%2BtfOgjLsbqWdc4IbIMeSfJCHPZzabLP2Zrdi4sYlOUs94IR9o1SfwBrNMoY1LPt6Sp3y%2Boe56BrA0qKWB0wnk6aWm97Y8eVYn%2FkCUP8K9NmJ4nhhDFCaiYM9jMwH9%2BTzmsMiHVnOL22lHleBmtVqmqM71KJUjhU05Fp1Ay4iLRQD6Q88JyW6z2TWWMS0c6iyfl01HnhICJH7RaXEdVR%2FkAKB%2Bv1Drveue9ANMm4K13H%2F6JzU8x51W5aUFDAqjzpTNMBNub2A0VSq7HdY9QRJhZ58IwENjUujIDQ4%2BgYSwvdHTkv6B8hiYjPDdznI4Vw6U4pHHKF3KdjpcYjfNuJpXFZ04eXeWP1x%2BWuujjBAxPN5BhTfrQVCDHll9QQGzGEuILESKmEWOkmZQEJz3WRWwZkn%2FYT1Wa9umXnVgS2Kw5WS2tPM4Kulgrm%2BJGoy%2BdY0cvqtdgMPPdmcIGOqUBdxQUar0Gfq58Zh61djauHnDReKa1qKQgtpNw7R7CHPjOCNx4FfGQBi0Q289lvrTPWmJAOD46ZVJYAN6LQpdwxenm%2FE0tY6ny6ChdF1BoCWRA%2FLWnaVlEMQkJeKj3Yu5XbzRhGRtoColWD3DLkrYixpKqumLIOBdk%2FSUEJ7y%2BEm6H7tyNSgz%2ByzL%2Fdlf5hEK3LM1O%2Bibhh9Tp7xNl96dWbsnX2B8E&X-Amz-Signature=f505ba5c54639f50a574464df79f983f68e8b3f65dd1070c4e0cda94865a73ce&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4QZHP7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQntunulnTkBjpLShN%2FYM0QplZtWIxyAuzE0QUp9DFdQIgS7%2F%2BbTpnnD%2FPtOrWXcYxdz2kzyeBHwN7%2FjL2yUQeQsIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOJvtd4aQm3IRDOZSrcA5E9ZLH8T8LuDgFu43tO4warLSAi6K3nLiN0vr7cvgEViTgh%2BUe11sIOCFoSxe7BfE1iqguW3K3sH6csx5inP2wvBz0LNNQ1Kpxwe10%2FRkq9qlMhK3kO0e%2FBCvCEStYOFH3N6zeaDK0XX%2FITDp4OvIahG%2FDPYT8mRNgFTBCOUYMdcqSXiZYfal%2BtfOgjLsbqWdc4IbIMeSfJCHPZzabLP2Zrdi4sYlOUs94IR9o1SfwBrNMoY1LPt6Sp3y%2Boe56BrA0qKWB0wnk6aWm97Y8eVYn%2FkCUP8K9NmJ4nhhDFCaiYM9jMwH9%2BTzmsMiHVnOL22lHleBmtVqmqM71KJUjhU05Fp1Ay4iLRQD6Q88JyW6z2TWWMS0c6iyfl01HnhICJH7RaXEdVR%2FkAKB%2Bv1Drveue9ANMm4K13H%2F6JzU8x51W5aUFDAqjzpTNMBNub2A0VSq7HdY9QRJhZ58IwENjUujIDQ4%2BgYSwvdHTkv6B8hiYjPDdznI4Vw6U4pHHKF3KdjpcYjfNuJpXFZ04eXeWP1x%2BWuujjBAxPN5BhTfrQVCDHll9QQGzGEuILESKmEWOkmZQEJz3WRWwZkn%2FYT1Wa9umXnVgS2Kw5WS2tPM4Kulgrm%2BJGoy%2BdY0cvqtdgMPPdmcIGOqUBdxQUar0Gfq58Zh61djauHnDReKa1qKQgtpNw7R7CHPjOCNx4FfGQBi0Q289lvrTPWmJAOD46ZVJYAN6LQpdwxenm%2FE0tY6ny6ChdF1BoCWRA%2FLWnaVlEMQkJeKj3Yu5XbzRhGRtoColWD3DLkrYixpKqumLIOBdk%2FSUEJ7y%2BEm6H7tyNSgz%2ByzL%2Fdlf5hEK3LM1O%2Bibhh9Tp7xNl96dWbsnX2B8E&X-Amz-Signature=3d22a7189e7a4cbf7cf2f2d305a3757afd6658c5e526dd75f2b29782570c484f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4QZHP7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQntunulnTkBjpLShN%2FYM0QplZtWIxyAuzE0QUp9DFdQIgS7%2F%2BbTpnnD%2FPtOrWXcYxdz2kzyeBHwN7%2FjL2yUQeQsIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOJvtd4aQm3IRDOZSrcA5E9ZLH8T8LuDgFu43tO4warLSAi6K3nLiN0vr7cvgEViTgh%2BUe11sIOCFoSxe7BfE1iqguW3K3sH6csx5inP2wvBz0LNNQ1Kpxwe10%2FRkq9qlMhK3kO0e%2FBCvCEStYOFH3N6zeaDK0XX%2FITDp4OvIahG%2FDPYT8mRNgFTBCOUYMdcqSXiZYfal%2BtfOgjLsbqWdc4IbIMeSfJCHPZzabLP2Zrdi4sYlOUs94IR9o1SfwBrNMoY1LPt6Sp3y%2Boe56BrA0qKWB0wnk6aWm97Y8eVYn%2FkCUP8K9NmJ4nhhDFCaiYM9jMwH9%2BTzmsMiHVnOL22lHleBmtVqmqM71KJUjhU05Fp1Ay4iLRQD6Q88JyW6z2TWWMS0c6iyfl01HnhICJH7RaXEdVR%2FkAKB%2Bv1Drveue9ANMm4K13H%2F6JzU8x51W5aUFDAqjzpTNMBNub2A0VSq7HdY9QRJhZ58IwENjUujIDQ4%2BgYSwvdHTkv6B8hiYjPDdznI4Vw6U4pHHKF3KdjpcYjfNuJpXFZ04eXeWP1x%2BWuujjBAxPN5BhTfrQVCDHll9QQGzGEuILESKmEWOkmZQEJz3WRWwZkn%2FYT1Wa9umXnVgS2Kw5WS2tPM4Kulgrm%2BJGoy%2BdY0cvqtdgMPPdmcIGOqUBdxQUar0Gfq58Zh61djauHnDReKa1qKQgtpNw7R7CHPjOCNx4FfGQBi0Q289lvrTPWmJAOD46ZVJYAN6LQpdwxenm%2FE0tY6ny6ChdF1BoCWRA%2FLWnaVlEMQkJeKj3Yu5XbzRhGRtoColWD3DLkrYixpKqumLIOBdk%2FSUEJ7y%2BEm6H7tyNSgz%2ByzL%2Fdlf5hEK3LM1O%2Bibhh9Tp7xNl96dWbsnX2B8E&X-Amz-Signature=e134c49d39b95f34e77adff19a8da2d8dd06869bcf6ed87fdd6c9a772e7e02cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4QZHP7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQntunulnTkBjpLShN%2FYM0QplZtWIxyAuzE0QUp9DFdQIgS7%2F%2BbTpnnD%2FPtOrWXcYxdz2kzyeBHwN7%2FjL2yUQeQsIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOJvtd4aQm3IRDOZSrcA5E9ZLH8T8LuDgFu43tO4warLSAi6K3nLiN0vr7cvgEViTgh%2BUe11sIOCFoSxe7BfE1iqguW3K3sH6csx5inP2wvBz0LNNQ1Kpxwe10%2FRkq9qlMhK3kO0e%2FBCvCEStYOFH3N6zeaDK0XX%2FITDp4OvIahG%2FDPYT8mRNgFTBCOUYMdcqSXiZYfal%2BtfOgjLsbqWdc4IbIMeSfJCHPZzabLP2Zrdi4sYlOUs94IR9o1SfwBrNMoY1LPt6Sp3y%2Boe56BrA0qKWB0wnk6aWm97Y8eVYn%2FkCUP8K9NmJ4nhhDFCaiYM9jMwH9%2BTzmsMiHVnOL22lHleBmtVqmqM71KJUjhU05Fp1Ay4iLRQD6Q88JyW6z2TWWMS0c6iyfl01HnhICJH7RaXEdVR%2FkAKB%2Bv1Drveue9ANMm4K13H%2F6JzU8x51W5aUFDAqjzpTNMBNub2A0VSq7HdY9QRJhZ58IwENjUujIDQ4%2BgYSwvdHTkv6B8hiYjPDdznI4Vw6U4pHHKF3KdjpcYjfNuJpXFZ04eXeWP1x%2BWuujjBAxPN5BhTfrQVCDHll9QQGzGEuILESKmEWOkmZQEJz3WRWwZkn%2FYT1Wa9umXnVgS2Kw5WS2tPM4Kulgrm%2BJGoy%2BdY0cvqtdgMPPdmcIGOqUBdxQUar0Gfq58Zh61djauHnDReKa1qKQgtpNw7R7CHPjOCNx4FfGQBi0Q289lvrTPWmJAOD46ZVJYAN6LQpdwxenm%2FE0tY6ny6ChdF1BoCWRA%2FLWnaVlEMQkJeKj3Yu5XbzRhGRtoColWD3DLkrYixpKqumLIOBdk%2FSUEJ7y%2BEm6H7tyNSgz%2ByzL%2Fdlf5hEK3LM1O%2Bibhh9Tp7xNl96dWbsnX2B8E&X-Amz-Signature=f5da76c35f7cd7cf00641450c5fc674bf780580d53568312b8f5d191dd2a75bc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4QZHP7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQntunulnTkBjpLShN%2FYM0QplZtWIxyAuzE0QUp9DFdQIgS7%2F%2BbTpnnD%2FPtOrWXcYxdz2kzyeBHwN7%2FjL2yUQeQsIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOJvtd4aQm3IRDOZSrcA5E9ZLH8T8LuDgFu43tO4warLSAi6K3nLiN0vr7cvgEViTgh%2BUe11sIOCFoSxe7BfE1iqguW3K3sH6csx5inP2wvBz0LNNQ1Kpxwe10%2FRkq9qlMhK3kO0e%2FBCvCEStYOFH3N6zeaDK0XX%2FITDp4OvIahG%2FDPYT8mRNgFTBCOUYMdcqSXiZYfal%2BtfOgjLsbqWdc4IbIMeSfJCHPZzabLP2Zrdi4sYlOUs94IR9o1SfwBrNMoY1LPt6Sp3y%2Boe56BrA0qKWB0wnk6aWm97Y8eVYn%2FkCUP8K9NmJ4nhhDFCaiYM9jMwH9%2BTzmsMiHVnOL22lHleBmtVqmqM71KJUjhU05Fp1Ay4iLRQD6Q88JyW6z2TWWMS0c6iyfl01HnhICJH7RaXEdVR%2FkAKB%2Bv1Drveue9ANMm4K13H%2F6JzU8x51W5aUFDAqjzpTNMBNub2A0VSq7HdY9QRJhZ58IwENjUujIDQ4%2BgYSwvdHTkv6B8hiYjPDdznI4Vw6U4pHHKF3KdjpcYjfNuJpXFZ04eXeWP1x%2BWuujjBAxPN5BhTfrQVCDHll9QQGzGEuILESKmEWOkmZQEJz3WRWwZkn%2FYT1Wa9umXnVgS2Kw5WS2tPM4Kulgrm%2BJGoy%2BdY0cvqtdgMPPdmcIGOqUBdxQUar0Gfq58Zh61djauHnDReKa1qKQgtpNw7R7CHPjOCNx4FfGQBi0Q289lvrTPWmJAOD46ZVJYAN6LQpdwxenm%2FE0tY6ny6ChdF1BoCWRA%2FLWnaVlEMQkJeKj3Yu5XbzRhGRtoColWD3DLkrYixpKqumLIOBdk%2FSUEJ7y%2BEm6H7tyNSgz%2ByzL%2Fdlf5hEK3LM1O%2Bibhh9Tp7xNl96dWbsnX2B8E&X-Amz-Signature=745ba73b347f835283477b2d42c760c2f0b32889d7f5d8ed923665fc19f727ae&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
