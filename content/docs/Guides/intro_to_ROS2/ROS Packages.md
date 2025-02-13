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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZTFGZF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyBJZ5q8eXPYFwcpMgfGOThQn%2BJ3wzXCCAevtOPPFbrwIhAOIo5Jo9Gf2DYni5MyNIHLdk75xJo4F%2BrCsmgX2KqWrtKv8DCBoQABoMNjM3NDIzMTgzODA1Igwqg7kOgw19IRWZgTYq3ANYOGXf0zx8o4nDaORI%2F3lTqGoymSw8aCF8gOEmPSAuOCm7QPNZvPVB%2BpHzuINjiwmyKeMOC0tlEC1LZ6XQ5M7cFwxrdpA5FuQYHf86wf5t8VASZhdCFQ3MMMVh%2F2DxfdfxvAdcdd8RiUYNaYGKkHoNcZEV1kbpWRaoB%2BeSS%2F%2FMtiV6%2BDypZlxdI8SzU1P7HItYw7GQA8GfbeObF04wf%2FZwPZA8fA72rJbMgfttgqKppEgfdKp20zn%2BBenKUFD200xGuqd%2BOecagXyln4Vs2YIRjGCfUBtMfna%2BaXpw0JdqX%2B5ZOv0R%2BGBbickwlyW43Eg42qzQJRNKYZ2sxSVmt01r5dkIktoCT7muxwRiAFMliRW0fkaTKGpNymYzUvWfWHF7HD2kSA0I%2FM12EAGz2u8RkvDjgJ6Mqp75qB3deNWnYtMRpC%2Fch28uM9Ootnv%2B8z1ep7Vwfgut9zRl8ZHQP9JLzrhJht1OzhXKFn%2BGUVn%2F164%2FmfNQvK9b8DF69h3WXiALxv09K%2Fqm1T9nBREVvp1hiZwxSJUzsU2%2BlUgEkqY7mm%2Fmes%2FiEC6bHCXlz%2FKCe6weYLQisRtyARr5YO7uzgJnDCrTwAaKympUIJsa13dx5ZN29Lv2GDlJWqqgvDCnv7i9BjqkAbLX97xJWYj2X%2B4k%2FalR8oDouWXWT7UUDUNXEr849HPtElA7Lhlo%2B9DN5u%2BeYjwzMO94hYpvWhp4AeGyiSIoezC7DgC%2BGxQlkfVAhga8O3ljttNcKscJPJXZXDr7c1mSgl8JPt1XZa0W3vxLNcH3hJAeXbmUX%2BXnkqli%2FObQ3%2B8S1vxPYWvES0vRhJ1MYChyrUAKMjTzC2UBhztuU4xZwzR7b57d&X-Amz-Signature=e601a23e9eac3027376be55cc843d3ea701bae518ce7a573dedf24f91f1dc2db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZTFGZF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyBJZ5q8eXPYFwcpMgfGOThQn%2BJ3wzXCCAevtOPPFbrwIhAOIo5Jo9Gf2DYni5MyNIHLdk75xJo4F%2BrCsmgX2KqWrtKv8DCBoQABoMNjM3NDIzMTgzODA1Igwqg7kOgw19IRWZgTYq3ANYOGXf0zx8o4nDaORI%2F3lTqGoymSw8aCF8gOEmPSAuOCm7QPNZvPVB%2BpHzuINjiwmyKeMOC0tlEC1LZ6XQ5M7cFwxrdpA5FuQYHf86wf5t8VASZhdCFQ3MMMVh%2F2DxfdfxvAdcdd8RiUYNaYGKkHoNcZEV1kbpWRaoB%2BeSS%2F%2FMtiV6%2BDypZlxdI8SzU1P7HItYw7GQA8GfbeObF04wf%2FZwPZA8fA72rJbMgfttgqKppEgfdKp20zn%2BBenKUFD200xGuqd%2BOecagXyln4Vs2YIRjGCfUBtMfna%2BaXpw0JdqX%2B5ZOv0R%2BGBbickwlyW43Eg42qzQJRNKYZ2sxSVmt01r5dkIktoCT7muxwRiAFMliRW0fkaTKGpNymYzUvWfWHF7HD2kSA0I%2FM12EAGz2u8RkvDjgJ6Mqp75qB3deNWnYtMRpC%2Fch28uM9Ootnv%2B8z1ep7Vwfgut9zRl8ZHQP9JLzrhJht1OzhXKFn%2BGUVn%2F164%2FmfNQvK9b8DF69h3WXiALxv09K%2Fqm1T9nBREVvp1hiZwxSJUzsU2%2BlUgEkqY7mm%2Fmes%2FiEC6bHCXlz%2FKCe6weYLQisRtyARr5YO7uzgJnDCrTwAaKympUIJsa13dx5ZN29Lv2GDlJWqqgvDCnv7i9BjqkAbLX97xJWYj2X%2B4k%2FalR8oDouWXWT7UUDUNXEr849HPtElA7Lhlo%2B9DN5u%2BeYjwzMO94hYpvWhp4AeGyiSIoezC7DgC%2BGxQlkfVAhga8O3ljttNcKscJPJXZXDr7c1mSgl8JPt1XZa0W3vxLNcH3hJAeXbmUX%2BXnkqli%2FObQ3%2B8S1vxPYWvES0vRhJ1MYChyrUAKMjTzC2UBhztuU4xZwzR7b57d&X-Amz-Signature=15a7a01c1a0e81f22bc25ffc4ff633ec79aef8c756da775f2254fc1295a76a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZTFGZF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyBJZ5q8eXPYFwcpMgfGOThQn%2BJ3wzXCCAevtOPPFbrwIhAOIo5Jo9Gf2DYni5MyNIHLdk75xJo4F%2BrCsmgX2KqWrtKv8DCBoQABoMNjM3NDIzMTgzODA1Igwqg7kOgw19IRWZgTYq3ANYOGXf0zx8o4nDaORI%2F3lTqGoymSw8aCF8gOEmPSAuOCm7QPNZvPVB%2BpHzuINjiwmyKeMOC0tlEC1LZ6XQ5M7cFwxrdpA5FuQYHf86wf5t8VASZhdCFQ3MMMVh%2F2DxfdfxvAdcdd8RiUYNaYGKkHoNcZEV1kbpWRaoB%2BeSS%2F%2FMtiV6%2BDypZlxdI8SzU1P7HItYw7GQA8GfbeObF04wf%2FZwPZA8fA72rJbMgfttgqKppEgfdKp20zn%2BBenKUFD200xGuqd%2BOecagXyln4Vs2YIRjGCfUBtMfna%2BaXpw0JdqX%2B5ZOv0R%2BGBbickwlyW43Eg42qzQJRNKYZ2sxSVmt01r5dkIktoCT7muxwRiAFMliRW0fkaTKGpNymYzUvWfWHF7HD2kSA0I%2FM12EAGz2u8RkvDjgJ6Mqp75qB3deNWnYtMRpC%2Fch28uM9Ootnv%2B8z1ep7Vwfgut9zRl8ZHQP9JLzrhJht1OzhXKFn%2BGUVn%2F164%2FmfNQvK9b8DF69h3WXiALxv09K%2Fqm1T9nBREVvp1hiZwxSJUzsU2%2BlUgEkqY7mm%2Fmes%2FiEC6bHCXlz%2FKCe6weYLQisRtyARr5YO7uzgJnDCrTwAaKympUIJsa13dx5ZN29Lv2GDlJWqqgvDCnv7i9BjqkAbLX97xJWYj2X%2B4k%2FalR8oDouWXWT7UUDUNXEr849HPtElA7Lhlo%2B9DN5u%2BeYjwzMO94hYpvWhp4AeGyiSIoezC7DgC%2BGxQlkfVAhga8O3ljttNcKscJPJXZXDr7c1mSgl8JPt1XZa0W3vxLNcH3hJAeXbmUX%2BXnkqli%2FObQ3%2B8S1vxPYWvES0vRhJ1MYChyrUAKMjTzC2UBhztuU4xZwzR7b57d&X-Amz-Signature=fece43782c10794ce1e73759573794159f102ff05061eee450c55f94e621ca32&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZTFGZF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyBJZ5q8eXPYFwcpMgfGOThQn%2BJ3wzXCCAevtOPPFbrwIhAOIo5Jo9Gf2DYni5MyNIHLdk75xJo4F%2BrCsmgX2KqWrtKv8DCBoQABoMNjM3NDIzMTgzODA1Igwqg7kOgw19IRWZgTYq3ANYOGXf0zx8o4nDaORI%2F3lTqGoymSw8aCF8gOEmPSAuOCm7QPNZvPVB%2BpHzuINjiwmyKeMOC0tlEC1LZ6XQ5M7cFwxrdpA5FuQYHf86wf5t8VASZhdCFQ3MMMVh%2F2DxfdfxvAdcdd8RiUYNaYGKkHoNcZEV1kbpWRaoB%2BeSS%2F%2FMtiV6%2BDypZlxdI8SzU1P7HItYw7GQA8GfbeObF04wf%2FZwPZA8fA72rJbMgfttgqKppEgfdKp20zn%2BBenKUFD200xGuqd%2BOecagXyln4Vs2YIRjGCfUBtMfna%2BaXpw0JdqX%2B5ZOv0R%2BGBbickwlyW43Eg42qzQJRNKYZ2sxSVmt01r5dkIktoCT7muxwRiAFMliRW0fkaTKGpNymYzUvWfWHF7HD2kSA0I%2FM12EAGz2u8RkvDjgJ6Mqp75qB3deNWnYtMRpC%2Fch28uM9Ootnv%2B8z1ep7Vwfgut9zRl8ZHQP9JLzrhJht1OzhXKFn%2BGUVn%2F164%2FmfNQvK9b8DF69h3WXiALxv09K%2Fqm1T9nBREVvp1hiZwxSJUzsU2%2BlUgEkqY7mm%2Fmes%2FiEC6bHCXlz%2FKCe6weYLQisRtyARr5YO7uzgJnDCrTwAaKympUIJsa13dx5ZN29Lv2GDlJWqqgvDCnv7i9BjqkAbLX97xJWYj2X%2B4k%2FalR8oDouWXWT7UUDUNXEr849HPtElA7Lhlo%2B9DN5u%2BeYjwzMO94hYpvWhp4AeGyiSIoezC7DgC%2BGxQlkfVAhga8O3ljttNcKscJPJXZXDr7c1mSgl8JPt1XZa0W3vxLNcH3hJAeXbmUX%2BXnkqli%2FObQ3%2B8S1vxPYWvES0vRhJ1MYChyrUAKMjTzC2UBhztuU4xZwzR7b57d&X-Amz-Signature=c685124f899d66af2caf31acbb4496c70d34c7d8df53a965a5ae423320b566cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZTFGZF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyBJZ5q8eXPYFwcpMgfGOThQn%2BJ3wzXCCAevtOPPFbrwIhAOIo5Jo9Gf2DYni5MyNIHLdk75xJo4F%2BrCsmgX2KqWrtKv8DCBoQABoMNjM3NDIzMTgzODA1Igwqg7kOgw19IRWZgTYq3ANYOGXf0zx8o4nDaORI%2F3lTqGoymSw8aCF8gOEmPSAuOCm7QPNZvPVB%2BpHzuINjiwmyKeMOC0tlEC1LZ6XQ5M7cFwxrdpA5FuQYHf86wf5t8VASZhdCFQ3MMMVh%2F2DxfdfxvAdcdd8RiUYNaYGKkHoNcZEV1kbpWRaoB%2BeSS%2F%2FMtiV6%2BDypZlxdI8SzU1P7HItYw7GQA8GfbeObF04wf%2FZwPZA8fA72rJbMgfttgqKppEgfdKp20zn%2BBenKUFD200xGuqd%2BOecagXyln4Vs2YIRjGCfUBtMfna%2BaXpw0JdqX%2B5ZOv0R%2BGBbickwlyW43Eg42qzQJRNKYZ2sxSVmt01r5dkIktoCT7muxwRiAFMliRW0fkaTKGpNymYzUvWfWHF7HD2kSA0I%2FM12EAGz2u8RkvDjgJ6Mqp75qB3deNWnYtMRpC%2Fch28uM9Ootnv%2B8z1ep7Vwfgut9zRl8ZHQP9JLzrhJht1OzhXKFn%2BGUVn%2F164%2FmfNQvK9b8DF69h3WXiALxv09K%2Fqm1T9nBREVvp1hiZwxSJUzsU2%2BlUgEkqY7mm%2Fmes%2FiEC6bHCXlz%2FKCe6weYLQisRtyARr5YO7uzgJnDCrTwAaKympUIJsa13dx5ZN29Lv2GDlJWqqgvDCnv7i9BjqkAbLX97xJWYj2X%2B4k%2FalR8oDouWXWT7UUDUNXEr849HPtElA7Lhlo%2B9DN5u%2BeYjwzMO94hYpvWhp4AeGyiSIoezC7DgC%2BGxQlkfVAhga8O3ljttNcKscJPJXZXDr7c1mSgl8JPt1XZa0W3vxLNcH3hJAeXbmUX%2BXnkqli%2FObQ3%2B8S1vxPYWvES0vRhJ1MYChyrUAKMjTzC2UBhztuU4xZwzR7b57d&X-Amz-Signature=6070d751bc6f0733b1d633009029c2f31fcf66b46d3bfbb6d9daf55259f30cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZTFGZF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyBJZ5q8eXPYFwcpMgfGOThQn%2BJ3wzXCCAevtOPPFbrwIhAOIo5Jo9Gf2DYni5MyNIHLdk75xJo4F%2BrCsmgX2KqWrtKv8DCBoQABoMNjM3NDIzMTgzODA1Igwqg7kOgw19IRWZgTYq3ANYOGXf0zx8o4nDaORI%2F3lTqGoymSw8aCF8gOEmPSAuOCm7QPNZvPVB%2BpHzuINjiwmyKeMOC0tlEC1LZ6XQ5M7cFwxrdpA5FuQYHf86wf5t8VASZhdCFQ3MMMVh%2F2DxfdfxvAdcdd8RiUYNaYGKkHoNcZEV1kbpWRaoB%2BeSS%2F%2FMtiV6%2BDypZlxdI8SzU1P7HItYw7GQA8GfbeObF04wf%2FZwPZA8fA72rJbMgfttgqKppEgfdKp20zn%2BBenKUFD200xGuqd%2BOecagXyln4Vs2YIRjGCfUBtMfna%2BaXpw0JdqX%2B5ZOv0R%2BGBbickwlyW43Eg42qzQJRNKYZ2sxSVmt01r5dkIktoCT7muxwRiAFMliRW0fkaTKGpNymYzUvWfWHF7HD2kSA0I%2FM12EAGz2u8RkvDjgJ6Mqp75qB3deNWnYtMRpC%2Fch28uM9Ootnv%2B8z1ep7Vwfgut9zRl8ZHQP9JLzrhJht1OzhXKFn%2BGUVn%2F164%2FmfNQvK9b8DF69h3WXiALxv09K%2Fqm1T9nBREVvp1hiZwxSJUzsU2%2BlUgEkqY7mm%2Fmes%2FiEC6bHCXlz%2FKCe6weYLQisRtyARr5YO7uzgJnDCrTwAaKympUIJsa13dx5ZN29Lv2GDlJWqqgvDCnv7i9BjqkAbLX97xJWYj2X%2B4k%2FalR8oDouWXWT7UUDUNXEr849HPtElA7Lhlo%2B9DN5u%2BeYjwzMO94hYpvWhp4AeGyiSIoezC7DgC%2BGxQlkfVAhga8O3ljttNcKscJPJXZXDr7c1mSgl8JPt1XZa0W3vxLNcH3hJAeXbmUX%2BXnkqli%2FObQ3%2B8S1vxPYWvES0vRhJ1MYChyrUAKMjTzC2UBhztuU4xZwzR7b57d&X-Amz-Signature=6151918c8620fcd59c53c9039fec1330375e2e23af819e38925c3546bce8b834&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZTFGZF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyBJZ5q8eXPYFwcpMgfGOThQn%2BJ3wzXCCAevtOPPFbrwIhAOIo5Jo9Gf2DYni5MyNIHLdk75xJo4F%2BrCsmgX2KqWrtKv8DCBoQABoMNjM3NDIzMTgzODA1Igwqg7kOgw19IRWZgTYq3ANYOGXf0zx8o4nDaORI%2F3lTqGoymSw8aCF8gOEmPSAuOCm7QPNZvPVB%2BpHzuINjiwmyKeMOC0tlEC1LZ6XQ5M7cFwxrdpA5FuQYHf86wf5t8VASZhdCFQ3MMMVh%2F2DxfdfxvAdcdd8RiUYNaYGKkHoNcZEV1kbpWRaoB%2BeSS%2F%2FMtiV6%2BDypZlxdI8SzU1P7HItYw7GQA8GfbeObF04wf%2FZwPZA8fA72rJbMgfttgqKppEgfdKp20zn%2BBenKUFD200xGuqd%2BOecagXyln4Vs2YIRjGCfUBtMfna%2BaXpw0JdqX%2B5ZOv0R%2BGBbickwlyW43Eg42qzQJRNKYZ2sxSVmt01r5dkIktoCT7muxwRiAFMliRW0fkaTKGpNymYzUvWfWHF7HD2kSA0I%2FM12EAGz2u8RkvDjgJ6Mqp75qB3deNWnYtMRpC%2Fch28uM9Ootnv%2B8z1ep7Vwfgut9zRl8ZHQP9JLzrhJht1OzhXKFn%2BGUVn%2F164%2FmfNQvK9b8DF69h3WXiALxv09K%2Fqm1T9nBREVvp1hiZwxSJUzsU2%2BlUgEkqY7mm%2Fmes%2FiEC6bHCXlz%2FKCe6weYLQisRtyARr5YO7uzgJnDCrTwAaKympUIJsa13dx5ZN29Lv2GDlJWqqgvDCnv7i9BjqkAbLX97xJWYj2X%2B4k%2FalR8oDouWXWT7UUDUNXEr849HPtElA7Lhlo%2B9DN5u%2BeYjwzMO94hYpvWhp4AeGyiSIoezC7DgC%2BGxQlkfVAhga8O3ljttNcKscJPJXZXDr7c1mSgl8JPt1XZa0W3vxLNcH3hJAeXbmUX%2BXnkqli%2FObQ3%2B8S1vxPYWvES0vRhJ1MYChyrUAKMjTzC2UBhztuU4xZwzR7b57d&X-Amz-Signature=9ed237b28530a2d759b66d56fb2523e3908b823531737d737317bb2e291b14c0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
