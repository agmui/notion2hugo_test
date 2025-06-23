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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OYSGRFX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCdu6XLIqtsGJ36sCtx3p0zuMpagtn9SgBzv%2BjaMKrFUwIhAMdSayZmZhLolyiH82kBTzpNXngR4ZKLD1bRT%2BsTB80tKv8DCBYQABoMNjM3NDIzMTgzODA1IgwjrbMWDmuQcYHQ%2BZ0q3AMu2i1AMwE4%2BXdFXlmd5g%2FlT2xS9MdELEeFDrfWW5b2gFYDRBv9%2BDdNgtEn%2Fj2DBkfh%2BUY%2F7X%2Bymten8CXjzP5FlSXBNcE6krw9ZR%2FJFZZF9r6XtON2kIqbECfK%2FV9H4noXSpYZluQQHDrJHT6LXU4G%2BJQRnqs18uEE60UfqZ2qfQaTDtKtJUKXGsBecOgcbleLakPK%2FT%2B3hDYnpyygiACel%2Fj16swnTCdNRxhM94LEhhPk3OzksfjFEx8luCUbJdCFpnBfg5n3XafQizh2qzJbDZR5pqspcq1cYNZe5Z0J7d4pd6aKSOGqoJfVMIoax0Da2WnyMZSLL4Jh1RYI5Dvmmum2hyWZlCWNEReYOCqNsn%2B%2Fh5zZrxxRZUsMOLLmP4LR5oqExE31EhIhsw7RUlZJ2uNeAHlUwcq6FKaDJBCrrAzVqDY4grBpqNeiD5zqpm3Wltjb5StP5%2B2UEUHWGXF1kNavFoo%2BJ%2BlpZtLa5WCE8N8Pc0JN59QYVUVFwssw0PDGFkbzAzJ4WBDmccwL7zqyxoXwL%2BjHLq7kbawLry5fvuXkZvCJhGV0AtlgQfc%2Bgoxuzm8vWwqc%2FbvA0F15VgnRDrrnYfbRAXGoN2mYYJj6%2FYuh4xPMZKja1cPWezDnjuXCBjqkATXskCsWjJZKELARFcanajkj8QYwGyLlP9KDpoDaJH3%2FsJY7%2BYcJKwcco85nIedhjSOx%2FdkkAnuSmopKwLDOg96173clCyyxd5NuAYNkCErOp%2BGfgAaMqbuiUBxx191UYPwcZcylT%2BoN7fMspjfo0c%2FngXmnyzQctw3O5eoV%2BdunxxVNuN1fDS1V77%2B80xPIG%2F8AO55oEiswlaj8HUAp9LmvM%2B54&X-Amz-Signature=ca690cbe42598097b0b06a5cfb0762261b0ed58afb527d1553c1f053d8545410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OYSGRFX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCdu6XLIqtsGJ36sCtx3p0zuMpagtn9SgBzv%2BjaMKrFUwIhAMdSayZmZhLolyiH82kBTzpNXngR4ZKLD1bRT%2BsTB80tKv8DCBYQABoMNjM3NDIzMTgzODA1IgwjrbMWDmuQcYHQ%2BZ0q3AMu2i1AMwE4%2BXdFXlmd5g%2FlT2xS9MdELEeFDrfWW5b2gFYDRBv9%2BDdNgtEn%2Fj2DBkfh%2BUY%2F7X%2Bymten8CXjzP5FlSXBNcE6krw9ZR%2FJFZZF9r6XtON2kIqbECfK%2FV9H4noXSpYZluQQHDrJHT6LXU4G%2BJQRnqs18uEE60UfqZ2qfQaTDtKtJUKXGsBecOgcbleLakPK%2FT%2B3hDYnpyygiACel%2Fj16swnTCdNRxhM94LEhhPk3OzksfjFEx8luCUbJdCFpnBfg5n3XafQizh2qzJbDZR5pqspcq1cYNZe5Z0J7d4pd6aKSOGqoJfVMIoax0Da2WnyMZSLL4Jh1RYI5Dvmmum2hyWZlCWNEReYOCqNsn%2B%2Fh5zZrxxRZUsMOLLmP4LR5oqExE31EhIhsw7RUlZJ2uNeAHlUwcq6FKaDJBCrrAzVqDY4grBpqNeiD5zqpm3Wltjb5StP5%2B2UEUHWGXF1kNavFoo%2BJ%2BlpZtLa5WCE8N8Pc0JN59QYVUVFwssw0PDGFkbzAzJ4WBDmccwL7zqyxoXwL%2BjHLq7kbawLry5fvuXkZvCJhGV0AtlgQfc%2Bgoxuzm8vWwqc%2FbvA0F15VgnRDrrnYfbRAXGoN2mYYJj6%2FYuh4xPMZKja1cPWezDnjuXCBjqkATXskCsWjJZKELARFcanajkj8QYwGyLlP9KDpoDaJH3%2FsJY7%2BYcJKwcco85nIedhjSOx%2FdkkAnuSmopKwLDOg96173clCyyxd5NuAYNkCErOp%2BGfgAaMqbuiUBxx191UYPwcZcylT%2BoN7fMspjfo0c%2FngXmnyzQctw3O5eoV%2BdunxxVNuN1fDS1V77%2B80xPIG%2F8AO55oEiswlaj8HUAp9LmvM%2B54&X-Amz-Signature=ab1e987c4bd12e3123e1026a984ea50c6d600ba3395a799f5853fbecc9d33171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OYSGRFX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCdu6XLIqtsGJ36sCtx3p0zuMpagtn9SgBzv%2BjaMKrFUwIhAMdSayZmZhLolyiH82kBTzpNXngR4ZKLD1bRT%2BsTB80tKv8DCBYQABoMNjM3NDIzMTgzODA1IgwjrbMWDmuQcYHQ%2BZ0q3AMu2i1AMwE4%2BXdFXlmd5g%2FlT2xS9MdELEeFDrfWW5b2gFYDRBv9%2BDdNgtEn%2Fj2DBkfh%2BUY%2F7X%2Bymten8CXjzP5FlSXBNcE6krw9ZR%2FJFZZF9r6XtON2kIqbECfK%2FV9H4noXSpYZluQQHDrJHT6LXU4G%2BJQRnqs18uEE60UfqZ2qfQaTDtKtJUKXGsBecOgcbleLakPK%2FT%2B3hDYnpyygiACel%2Fj16swnTCdNRxhM94LEhhPk3OzksfjFEx8luCUbJdCFpnBfg5n3XafQizh2qzJbDZR5pqspcq1cYNZe5Z0J7d4pd6aKSOGqoJfVMIoax0Da2WnyMZSLL4Jh1RYI5Dvmmum2hyWZlCWNEReYOCqNsn%2B%2Fh5zZrxxRZUsMOLLmP4LR5oqExE31EhIhsw7RUlZJ2uNeAHlUwcq6FKaDJBCrrAzVqDY4grBpqNeiD5zqpm3Wltjb5StP5%2B2UEUHWGXF1kNavFoo%2BJ%2BlpZtLa5WCE8N8Pc0JN59QYVUVFwssw0PDGFkbzAzJ4WBDmccwL7zqyxoXwL%2BjHLq7kbawLry5fvuXkZvCJhGV0AtlgQfc%2Bgoxuzm8vWwqc%2FbvA0F15VgnRDrrnYfbRAXGoN2mYYJj6%2FYuh4xPMZKja1cPWezDnjuXCBjqkATXskCsWjJZKELARFcanajkj8QYwGyLlP9KDpoDaJH3%2FsJY7%2BYcJKwcco85nIedhjSOx%2FdkkAnuSmopKwLDOg96173clCyyxd5NuAYNkCErOp%2BGfgAaMqbuiUBxx191UYPwcZcylT%2BoN7fMspjfo0c%2FngXmnyzQctw3O5eoV%2BdunxxVNuN1fDS1V77%2B80xPIG%2F8AO55oEiswlaj8HUAp9LmvM%2B54&X-Amz-Signature=eb337c9c206683a1d31f1b157ad3fdc79d9f7d56ba5121a82111298820ce66ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OYSGRFX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCdu6XLIqtsGJ36sCtx3p0zuMpagtn9SgBzv%2BjaMKrFUwIhAMdSayZmZhLolyiH82kBTzpNXngR4ZKLD1bRT%2BsTB80tKv8DCBYQABoMNjM3NDIzMTgzODA1IgwjrbMWDmuQcYHQ%2BZ0q3AMu2i1AMwE4%2BXdFXlmd5g%2FlT2xS9MdELEeFDrfWW5b2gFYDRBv9%2BDdNgtEn%2Fj2DBkfh%2BUY%2F7X%2Bymten8CXjzP5FlSXBNcE6krw9ZR%2FJFZZF9r6XtON2kIqbECfK%2FV9H4noXSpYZluQQHDrJHT6LXU4G%2BJQRnqs18uEE60UfqZ2qfQaTDtKtJUKXGsBecOgcbleLakPK%2FT%2B3hDYnpyygiACel%2Fj16swnTCdNRxhM94LEhhPk3OzksfjFEx8luCUbJdCFpnBfg5n3XafQizh2qzJbDZR5pqspcq1cYNZe5Z0J7d4pd6aKSOGqoJfVMIoax0Da2WnyMZSLL4Jh1RYI5Dvmmum2hyWZlCWNEReYOCqNsn%2B%2Fh5zZrxxRZUsMOLLmP4LR5oqExE31EhIhsw7RUlZJ2uNeAHlUwcq6FKaDJBCrrAzVqDY4grBpqNeiD5zqpm3Wltjb5StP5%2B2UEUHWGXF1kNavFoo%2BJ%2BlpZtLa5WCE8N8Pc0JN59QYVUVFwssw0PDGFkbzAzJ4WBDmccwL7zqyxoXwL%2BjHLq7kbawLry5fvuXkZvCJhGV0AtlgQfc%2Bgoxuzm8vWwqc%2FbvA0F15VgnRDrrnYfbRAXGoN2mYYJj6%2FYuh4xPMZKja1cPWezDnjuXCBjqkATXskCsWjJZKELARFcanajkj8QYwGyLlP9KDpoDaJH3%2FsJY7%2BYcJKwcco85nIedhjSOx%2FdkkAnuSmopKwLDOg96173clCyyxd5NuAYNkCErOp%2BGfgAaMqbuiUBxx191UYPwcZcylT%2BoN7fMspjfo0c%2FngXmnyzQctw3O5eoV%2BdunxxVNuN1fDS1V77%2B80xPIG%2F8AO55oEiswlaj8HUAp9LmvM%2B54&X-Amz-Signature=516d00663a20140ff186856e39b753027cd675b8334a0acd487bccfa4bfa5902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OYSGRFX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCdu6XLIqtsGJ36sCtx3p0zuMpagtn9SgBzv%2BjaMKrFUwIhAMdSayZmZhLolyiH82kBTzpNXngR4ZKLD1bRT%2BsTB80tKv8DCBYQABoMNjM3NDIzMTgzODA1IgwjrbMWDmuQcYHQ%2BZ0q3AMu2i1AMwE4%2BXdFXlmd5g%2FlT2xS9MdELEeFDrfWW5b2gFYDRBv9%2BDdNgtEn%2Fj2DBkfh%2BUY%2F7X%2Bymten8CXjzP5FlSXBNcE6krw9ZR%2FJFZZF9r6XtON2kIqbECfK%2FV9H4noXSpYZluQQHDrJHT6LXU4G%2BJQRnqs18uEE60UfqZ2qfQaTDtKtJUKXGsBecOgcbleLakPK%2FT%2B3hDYnpyygiACel%2Fj16swnTCdNRxhM94LEhhPk3OzksfjFEx8luCUbJdCFpnBfg5n3XafQizh2qzJbDZR5pqspcq1cYNZe5Z0J7d4pd6aKSOGqoJfVMIoax0Da2WnyMZSLL4Jh1RYI5Dvmmum2hyWZlCWNEReYOCqNsn%2B%2Fh5zZrxxRZUsMOLLmP4LR5oqExE31EhIhsw7RUlZJ2uNeAHlUwcq6FKaDJBCrrAzVqDY4grBpqNeiD5zqpm3Wltjb5StP5%2B2UEUHWGXF1kNavFoo%2BJ%2BlpZtLa5WCE8N8Pc0JN59QYVUVFwssw0PDGFkbzAzJ4WBDmccwL7zqyxoXwL%2BjHLq7kbawLry5fvuXkZvCJhGV0AtlgQfc%2Bgoxuzm8vWwqc%2FbvA0F15VgnRDrrnYfbRAXGoN2mYYJj6%2FYuh4xPMZKja1cPWezDnjuXCBjqkATXskCsWjJZKELARFcanajkj8QYwGyLlP9KDpoDaJH3%2FsJY7%2BYcJKwcco85nIedhjSOx%2FdkkAnuSmopKwLDOg96173clCyyxd5NuAYNkCErOp%2BGfgAaMqbuiUBxx191UYPwcZcylT%2BoN7fMspjfo0c%2FngXmnyzQctw3O5eoV%2BdunxxVNuN1fDS1V77%2B80xPIG%2F8AO55oEiswlaj8HUAp9LmvM%2B54&X-Amz-Signature=c2e8c29226c544ca4bf77da5f884afe01fc453d7e0159dcac60bd36d158f0e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OYSGRFX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCdu6XLIqtsGJ36sCtx3p0zuMpagtn9SgBzv%2BjaMKrFUwIhAMdSayZmZhLolyiH82kBTzpNXngR4ZKLD1bRT%2BsTB80tKv8DCBYQABoMNjM3NDIzMTgzODA1IgwjrbMWDmuQcYHQ%2BZ0q3AMu2i1AMwE4%2BXdFXlmd5g%2FlT2xS9MdELEeFDrfWW5b2gFYDRBv9%2BDdNgtEn%2Fj2DBkfh%2BUY%2F7X%2Bymten8CXjzP5FlSXBNcE6krw9ZR%2FJFZZF9r6XtON2kIqbECfK%2FV9H4noXSpYZluQQHDrJHT6LXU4G%2BJQRnqs18uEE60UfqZ2qfQaTDtKtJUKXGsBecOgcbleLakPK%2FT%2B3hDYnpyygiACel%2Fj16swnTCdNRxhM94LEhhPk3OzksfjFEx8luCUbJdCFpnBfg5n3XafQizh2qzJbDZR5pqspcq1cYNZe5Z0J7d4pd6aKSOGqoJfVMIoax0Da2WnyMZSLL4Jh1RYI5Dvmmum2hyWZlCWNEReYOCqNsn%2B%2Fh5zZrxxRZUsMOLLmP4LR5oqExE31EhIhsw7RUlZJ2uNeAHlUwcq6FKaDJBCrrAzVqDY4grBpqNeiD5zqpm3Wltjb5StP5%2B2UEUHWGXF1kNavFoo%2BJ%2BlpZtLa5WCE8N8Pc0JN59QYVUVFwssw0PDGFkbzAzJ4WBDmccwL7zqyxoXwL%2BjHLq7kbawLry5fvuXkZvCJhGV0AtlgQfc%2Bgoxuzm8vWwqc%2FbvA0F15VgnRDrrnYfbRAXGoN2mYYJj6%2FYuh4xPMZKja1cPWezDnjuXCBjqkATXskCsWjJZKELARFcanajkj8QYwGyLlP9KDpoDaJH3%2FsJY7%2BYcJKwcco85nIedhjSOx%2FdkkAnuSmopKwLDOg96173clCyyxd5NuAYNkCErOp%2BGfgAaMqbuiUBxx191UYPwcZcylT%2BoN7fMspjfo0c%2FngXmnyzQctw3O5eoV%2BdunxxVNuN1fDS1V77%2B80xPIG%2F8AO55oEiswlaj8HUAp9LmvM%2B54&X-Amz-Signature=615d5fac3030fdd3537bb63370f189f43149ce1def2d606f92f263653da7d9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OYSGRFX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCdu6XLIqtsGJ36sCtx3p0zuMpagtn9SgBzv%2BjaMKrFUwIhAMdSayZmZhLolyiH82kBTzpNXngR4ZKLD1bRT%2BsTB80tKv8DCBYQABoMNjM3NDIzMTgzODA1IgwjrbMWDmuQcYHQ%2BZ0q3AMu2i1AMwE4%2BXdFXlmd5g%2FlT2xS9MdELEeFDrfWW5b2gFYDRBv9%2BDdNgtEn%2Fj2DBkfh%2BUY%2F7X%2Bymten8CXjzP5FlSXBNcE6krw9ZR%2FJFZZF9r6XtON2kIqbECfK%2FV9H4noXSpYZluQQHDrJHT6LXU4G%2BJQRnqs18uEE60UfqZ2qfQaTDtKtJUKXGsBecOgcbleLakPK%2FT%2B3hDYnpyygiACel%2Fj16swnTCdNRxhM94LEhhPk3OzksfjFEx8luCUbJdCFpnBfg5n3XafQizh2qzJbDZR5pqspcq1cYNZe5Z0J7d4pd6aKSOGqoJfVMIoax0Da2WnyMZSLL4Jh1RYI5Dvmmum2hyWZlCWNEReYOCqNsn%2B%2Fh5zZrxxRZUsMOLLmP4LR5oqExE31EhIhsw7RUlZJ2uNeAHlUwcq6FKaDJBCrrAzVqDY4grBpqNeiD5zqpm3Wltjb5StP5%2B2UEUHWGXF1kNavFoo%2BJ%2BlpZtLa5WCE8N8Pc0JN59QYVUVFwssw0PDGFkbzAzJ4WBDmccwL7zqyxoXwL%2BjHLq7kbawLry5fvuXkZvCJhGV0AtlgQfc%2Bgoxuzm8vWwqc%2FbvA0F15VgnRDrrnYfbRAXGoN2mYYJj6%2FYuh4xPMZKja1cPWezDnjuXCBjqkATXskCsWjJZKELARFcanajkj8QYwGyLlP9KDpoDaJH3%2FsJY7%2BYcJKwcco85nIedhjSOx%2FdkkAnuSmopKwLDOg96173clCyyxd5NuAYNkCErOp%2BGfgAaMqbuiUBxx191UYPwcZcylT%2BoN7fMspjfo0c%2FngXmnyzQctw3O5eoV%2BdunxxVNuN1fDS1V77%2B80xPIG%2F8AO55oEiswlaj8HUAp9LmvM%2B54&X-Amz-Signature=41150121d6b8632cc2c5551d285028e460d1ad6c548a94bf3c40c18245297cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
