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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7MKMRS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAp0RSktUCRlPqaB55GooqyEgbyDOXeu%2B23xeHxl36MwIhAMp%2BDGyHqJWtEBSAFMzb0aHH14Q1ZNo%2FXV58j04xsjE9KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHeU%2FFshCMxFGaVhIq3ANV2QlnUpgDtq7mBx5UBl6R8FsooTyJXao9%2FRCKhMr9r1Itzf%2B8%2F9GQI1AKQsQ2yDZs9WePDvTvrp0IvjkS2%2FiPLKzzu50XKfyF7opbPt8t5UgIaG4v2ID%2BlWq%2BbGh4GchPFb03Au2u26XU0u0IRQ3LOG34OS4gpp6vDUPlF3LslSpX2x%2FPBbw2%2FWIT12u7hs3kuoEeuYk80rLJEIcAXT0Q1nQOgyJTsxZOz8F7arlH09CG%2B0hMLsc9cnBp6yG6mvko6YSct1AIx%2FtbOg24E3GnYuQJWsY2PT3NLEQVlIxnr9%2FVwavl1KntTt%2Foe1AIQsIJC9%2F%2F1rA86crYWf2%2FCDIgyYjs%2FhL0xiBLTW07hND9OR%2BLcsgoAAywqwKEcmmkZBoGdNKQZ%2BwGDm1KHNVnlgohdDoFX6KQPCRSe5ku3hD%2BdSwRsCqj2eFdP0PkdDc4QdwOKrxYXJOjG%2Bg1a5MqMkTwhNRDTCYywrf%2FtHB%2B1PTd4SWFFAhZ25quibnUc3IkTuGuL5rqnAahZLSlLTMjOGzEegg0lC3mNJ0%2FDFLwEbHVlCKN1AY5gHnc3gLcwZyV4SfTM0mUuBQZ7VwyIwZ1OgRX1cCovI31zNZgZO6aaBFgQ7uFtTKiAf%2FQs5LYTTC%2Bh93CBjqkAQynSnQLSdOjRxgOFvpUErlYSVIti%2FXBtBrvNWNAgJ%2BYpILdtuLaxfmU5MGNsZbZ4Idlv8hCs0qM%2FlRmwBcCRYBWxEQz9MsLoHuZzKRlzzSgXzolkWRHjl3OPSvzZSxBW8aS%2FhuXRIzy8oG6UN%2FyAiqYjlp%2Bmkltx0Smd%2FLzbwjf8VQYxwEcy1l4kzXZyhZ6GcW6Hu5TfNnsJX6TYkYayZ64Rx3Z&X-Amz-Signature=c4419e9c4b369b96e50022536369502e28f81406001538b1e5f7b278b0359c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7MKMRS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAp0RSktUCRlPqaB55GooqyEgbyDOXeu%2B23xeHxl36MwIhAMp%2BDGyHqJWtEBSAFMzb0aHH14Q1ZNo%2FXV58j04xsjE9KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHeU%2FFshCMxFGaVhIq3ANV2QlnUpgDtq7mBx5UBl6R8FsooTyJXao9%2FRCKhMr9r1Itzf%2B8%2F9GQI1AKQsQ2yDZs9WePDvTvrp0IvjkS2%2FiPLKzzu50XKfyF7opbPt8t5UgIaG4v2ID%2BlWq%2BbGh4GchPFb03Au2u26XU0u0IRQ3LOG34OS4gpp6vDUPlF3LslSpX2x%2FPBbw2%2FWIT12u7hs3kuoEeuYk80rLJEIcAXT0Q1nQOgyJTsxZOz8F7arlH09CG%2B0hMLsc9cnBp6yG6mvko6YSct1AIx%2FtbOg24E3GnYuQJWsY2PT3NLEQVlIxnr9%2FVwavl1KntTt%2Foe1AIQsIJC9%2F%2F1rA86crYWf2%2FCDIgyYjs%2FhL0xiBLTW07hND9OR%2BLcsgoAAywqwKEcmmkZBoGdNKQZ%2BwGDm1KHNVnlgohdDoFX6KQPCRSe5ku3hD%2BdSwRsCqj2eFdP0PkdDc4QdwOKrxYXJOjG%2Bg1a5MqMkTwhNRDTCYywrf%2FtHB%2B1PTd4SWFFAhZ25quibnUc3IkTuGuL5rqnAahZLSlLTMjOGzEegg0lC3mNJ0%2FDFLwEbHVlCKN1AY5gHnc3gLcwZyV4SfTM0mUuBQZ7VwyIwZ1OgRX1cCovI31zNZgZO6aaBFgQ7uFtTKiAf%2FQs5LYTTC%2Bh93CBjqkAQynSnQLSdOjRxgOFvpUErlYSVIti%2FXBtBrvNWNAgJ%2BYpILdtuLaxfmU5MGNsZbZ4Idlv8hCs0qM%2FlRmwBcCRYBWxEQz9MsLoHuZzKRlzzSgXzolkWRHjl3OPSvzZSxBW8aS%2FhuXRIzy8oG6UN%2FyAiqYjlp%2Bmkltx0Smd%2FLzbwjf8VQYxwEcy1l4kzXZyhZ6GcW6Hu5TfNnsJX6TYkYayZ64Rx3Z&X-Amz-Signature=d1885870c499da98f3ff1d28e3bc0679beba9d2646ca7329cf20a54e831179a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7MKMRS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAp0RSktUCRlPqaB55GooqyEgbyDOXeu%2B23xeHxl36MwIhAMp%2BDGyHqJWtEBSAFMzb0aHH14Q1ZNo%2FXV58j04xsjE9KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHeU%2FFshCMxFGaVhIq3ANV2QlnUpgDtq7mBx5UBl6R8FsooTyJXao9%2FRCKhMr9r1Itzf%2B8%2F9GQI1AKQsQ2yDZs9WePDvTvrp0IvjkS2%2FiPLKzzu50XKfyF7opbPt8t5UgIaG4v2ID%2BlWq%2BbGh4GchPFb03Au2u26XU0u0IRQ3LOG34OS4gpp6vDUPlF3LslSpX2x%2FPBbw2%2FWIT12u7hs3kuoEeuYk80rLJEIcAXT0Q1nQOgyJTsxZOz8F7arlH09CG%2B0hMLsc9cnBp6yG6mvko6YSct1AIx%2FtbOg24E3GnYuQJWsY2PT3NLEQVlIxnr9%2FVwavl1KntTt%2Foe1AIQsIJC9%2F%2F1rA86crYWf2%2FCDIgyYjs%2FhL0xiBLTW07hND9OR%2BLcsgoAAywqwKEcmmkZBoGdNKQZ%2BwGDm1KHNVnlgohdDoFX6KQPCRSe5ku3hD%2BdSwRsCqj2eFdP0PkdDc4QdwOKrxYXJOjG%2Bg1a5MqMkTwhNRDTCYywrf%2FtHB%2B1PTd4SWFFAhZ25quibnUc3IkTuGuL5rqnAahZLSlLTMjOGzEegg0lC3mNJ0%2FDFLwEbHVlCKN1AY5gHnc3gLcwZyV4SfTM0mUuBQZ7VwyIwZ1OgRX1cCovI31zNZgZO6aaBFgQ7uFtTKiAf%2FQs5LYTTC%2Bh93CBjqkAQynSnQLSdOjRxgOFvpUErlYSVIti%2FXBtBrvNWNAgJ%2BYpILdtuLaxfmU5MGNsZbZ4Idlv8hCs0qM%2FlRmwBcCRYBWxEQz9MsLoHuZzKRlzzSgXzolkWRHjl3OPSvzZSxBW8aS%2FhuXRIzy8oG6UN%2FyAiqYjlp%2Bmkltx0Smd%2FLzbwjf8VQYxwEcy1l4kzXZyhZ6GcW6Hu5TfNnsJX6TYkYayZ64Rx3Z&X-Amz-Signature=94a984aa1a0fb83c5a158f93cbb5650f29afe63056b94650b60e666d906099ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7MKMRS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAp0RSktUCRlPqaB55GooqyEgbyDOXeu%2B23xeHxl36MwIhAMp%2BDGyHqJWtEBSAFMzb0aHH14Q1ZNo%2FXV58j04xsjE9KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHeU%2FFshCMxFGaVhIq3ANV2QlnUpgDtq7mBx5UBl6R8FsooTyJXao9%2FRCKhMr9r1Itzf%2B8%2F9GQI1AKQsQ2yDZs9WePDvTvrp0IvjkS2%2FiPLKzzu50XKfyF7opbPt8t5UgIaG4v2ID%2BlWq%2BbGh4GchPFb03Au2u26XU0u0IRQ3LOG34OS4gpp6vDUPlF3LslSpX2x%2FPBbw2%2FWIT12u7hs3kuoEeuYk80rLJEIcAXT0Q1nQOgyJTsxZOz8F7arlH09CG%2B0hMLsc9cnBp6yG6mvko6YSct1AIx%2FtbOg24E3GnYuQJWsY2PT3NLEQVlIxnr9%2FVwavl1KntTt%2Foe1AIQsIJC9%2F%2F1rA86crYWf2%2FCDIgyYjs%2FhL0xiBLTW07hND9OR%2BLcsgoAAywqwKEcmmkZBoGdNKQZ%2BwGDm1KHNVnlgohdDoFX6KQPCRSe5ku3hD%2BdSwRsCqj2eFdP0PkdDc4QdwOKrxYXJOjG%2Bg1a5MqMkTwhNRDTCYywrf%2FtHB%2B1PTd4SWFFAhZ25quibnUc3IkTuGuL5rqnAahZLSlLTMjOGzEegg0lC3mNJ0%2FDFLwEbHVlCKN1AY5gHnc3gLcwZyV4SfTM0mUuBQZ7VwyIwZ1OgRX1cCovI31zNZgZO6aaBFgQ7uFtTKiAf%2FQs5LYTTC%2Bh93CBjqkAQynSnQLSdOjRxgOFvpUErlYSVIti%2FXBtBrvNWNAgJ%2BYpILdtuLaxfmU5MGNsZbZ4Idlv8hCs0qM%2FlRmwBcCRYBWxEQz9MsLoHuZzKRlzzSgXzolkWRHjl3OPSvzZSxBW8aS%2FhuXRIzy8oG6UN%2FyAiqYjlp%2Bmkltx0Smd%2FLzbwjf8VQYxwEcy1l4kzXZyhZ6GcW6Hu5TfNnsJX6TYkYayZ64Rx3Z&X-Amz-Signature=9f412016fa3730469f2ae645ab8fdc32a5bde0c341b4bda3854b520061a8a11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7MKMRS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAp0RSktUCRlPqaB55GooqyEgbyDOXeu%2B23xeHxl36MwIhAMp%2BDGyHqJWtEBSAFMzb0aHH14Q1ZNo%2FXV58j04xsjE9KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHeU%2FFshCMxFGaVhIq3ANV2QlnUpgDtq7mBx5UBl6R8FsooTyJXao9%2FRCKhMr9r1Itzf%2B8%2F9GQI1AKQsQ2yDZs9WePDvTvrp0IvjkS2%2FiPLKzzu50XKfyF7opbPt8t5UgIaG4v2ID%2BlWq%2BbGh4GchPFb03Au2u26XU0u0IRQ3LOG34OS4gpp6vDUPlF3LslSpX2x%2FPBbw2%2FWIT12u7hs3kuoEeuYk80rLJEIcAXT0Q1nQOgyJTsxZOz8F7arlH09CG%2B0hMLsc9cnBp6yG6mvko6YSct1AIx%2FtbOg24E3GnYuQJWsY2PT3NLEQVlIxnr9%2FVwavl1KntTt%2Foe1AIQsIJC9%2F%2F1rA86crYWf2%2FCDIgyYjs%2FhL0xiBLTW07hND9OR%2BLcsgoAAywqwKEcmmkZBoGdNKQZ%2BwGDm1KHNVnlgohdDoFX6KQPCRSe5ku3hD%2BdSwRsCqj2eFdP0PkdDc4QdwOKrxYXJOjG%2Bg1a5MqMkTwhNRDTCYywrf%2FtHB%2B1PTd4SWFFAhZ25quibnUc3IkTuGuL5rqnAahZLSlLTMjOGzEegg0lC3mNJ0%2FDFLwEbHVlCKN1AY5gHnc3gLcwZyV4SfTM0mUuBQZ7VwyIwZ1OgRX1cCovI31zNZgZO6aaBFgQ7uFtTKiAf%2FQs5LYTTC%2Bh93CBjqkAQynSnQLSdOjRxgOFvpUErlYSVIti%2FXBtBrvNWNAgJ%2BYpILdtuLaxfmU5MGNsZbZ4Idlv8hCs0qM%2FlRmwBcCRYBWxEQz9MsLoHuZzKRlzzSgXzolkWRHjl3OPSvzZSxBW8aS%2FhuXRIzy8oG6UN%2FyAiqYjlp%2Bmkltx0Smd%2FLzbwjf8VQYxwEcy1l4kzXZyhZ6GcW6Hu5TfNnsJX6TYkYayZ64Rx3Z&X-Amz-Signature=2b83af912b676bbbef3bb423eaa6bd4db53f4bacf17f4dc8b1c00d8e5be94289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7MKMRS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAp0RSktUCRlPqaB55GooqyEgbyDOXeu%2B23xeHxl36MwIhAMp%2BDGyHqJWtEBSAFMzb0aHH14Q1ZNo%2FXV58j04xsjE9KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHeU%2FFshCMxFGaVhIq3ANV2QlnUpgDtq7mBx5UBl6R8FsooTyJXao9%2FRCKhMr9r1Itzf%2B8%2F9GQI1AKQsQ2yDZs9WePDvTvrp0IvjkS2%2FiPLKzzu50XKfyF7opbPt8t5UgIaG4v2ID%2BlWq%2BbGh4GchPFb03Au2u26XU0u0IRQ3LOG34OS4gpp6vDUPlF3LslSpX2x%2FPBbw2%2FWIT12u7hs3kuoEeuYk80rLJEIcAXT0Q1nQOgyJTsxZOz8F7arlH09CG%2B0hMLsc9cnBp6yG6mvko6YSct1AIx%2FtbOg24E3GnYuQJWsY2PT3NLEQVlIxnr9%2FVwavl1KntTt%2Foe1AIQsIJC9%2F%2F1rA86crYWf2%2FCDIgyYjs%2FhL0xiBLTW07hND9OR%2BLcsgoAAywqwKEcmmkZBoGdNKQZ%2BwGDm1KHNVnlgohdDoFX6KQPCRSe5ku3hD%2BdSwRsCqj2eFdP0PkdDc4QdwOKrxYXJOjG%2Bg1a5MqMkTwhNRDTCYywrf%2FtHB%2B1PTd4SWFFAhZ25quibnUc3IkTuGuL5rqnAahZLSlLTMjOGzEegg0lC3mNJ0%2FDFLwEbHVlCKN1AY5gHnc3gLcwZyV4SfTM0mUuBQZ7VwyIwZ1OgRX1cCovI31zNZgZO6aaBFgQ7uFtTKiAf%2FQs5LYTTC%2Bh93CBjqkAQynSnQLSdOjRxgOFvpUErlYSVIti%2FXBtBrvNWNAgJ%2BYpILdtuLaxfmU5MGNsZbZ4Idlv8hCs0qM%2FlRmwBcCRYBWxEQz9MsLoHuZzKRlzzSgXzolkWRHjl3OPSvzZSxBW8aS%2FhuXRIzy8oG6UN%2FyAiqYjlp%2Bmkltx0Smd%2FLzbwjf8VQYxwEcy1l4kzXZyhZ6GcW6Hu5TfNnsJX6TYkYayZ64Rx3Z&X-Amz-Signature=c20140eeec704553b1939ca24239e5bee29518d0bb2540cdc63cc6cb4b129b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7MKMRS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAp0RSktUCRlPqaB55GooqyEgbyDOXeu%2B23xeHxl36MwIhAMp%2BDGyHqJWtEBSAFMzb0aHH14Q1ZNo%2FXV58j04xsjE9KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHeU%2FFshCMxFGaVhIq3ANV2QlnUpgDtq7mBx5UBl6R8FsooTyJXao9%2FRCKhMr9r1Itzf%2B8%2F9GQI1AKQsQ2yDZs9WePDvTvrp0IvjkS2%2FiPLKzzu50XKfyF7opbPt8t5UgIaG4v2ID%2BlWq%2BbGh4GchPFb03Au2u26XU0u0IRQ3LOG34OS4gpp6vDUPlF3LslSpX2x%2FPBbw2%2FWIT12u7hs3kuoEeuYk80rLJEIcAXT0Q1nQOgyJTsxZOz8F7arlH09CG%2B0hMLsc9cnBp6yG6mvko6YSct1AIx%2FtbOg24E3GnYuQJWsY2PT3NLEQVlIxnr9%2FVwavl1KntTt%2Foe1AIQsIJC9%2F%2F1rA86crYWf2%2FCDIgyYjs%2FhL0xiBLTW07hND9OR%2BLcsgoAAywqwKEcmmkZBoGdNKQZ%2BwGDm1KHNVnlgohdDoFX6KQPCRSe5ku3hD%2BdSwRsCqj2eFdP0PkdDc4QdwOKrxYXJOjG%2Bg1a5MqMkTwhNRDTCYywrf%2FtHB%2B1PTd4SWFFAhZ25quibnUc3IkTuGuL5rqnAahZLSlLTMjOGzEegg0lC3mNJ0%2FDFLwEbHVlCKN1AY5gHnc3gLcwZyV4SfTM0mUuBQZ7VwyIwZ1OgRX1cCovI31zNZgZO6aaBFgQ7uFtTKiAf%2FQs5LYTTC%2Bh93CBjqkAQynSnQLSdOjRxgOFvpUErlYSVIti%2FXBtBrvNWNAgJ%2BYpILdtuLaxfmU5MGNsZbZ4Idlv8hCs0qM%2FlRmwBcCRYBWxEQz9MsLoHuZzKRlzzSgXzolkWRHjl3OPSvzZSxBW8aS%2FhuXRIzy8oG6UN%2FyAiqYjlp%2Bmkltx0Smd%2FLzbwjf8VQYxwEcy1l4kzXZyhZ6GcW6Hu5TfNnsJX6TYkYayZ64Rx3Z&X-Amz-Signature=f373ca07fff67475f5c8c76b1955db7bda509f7db83391ae9664aaf21c31eb6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
