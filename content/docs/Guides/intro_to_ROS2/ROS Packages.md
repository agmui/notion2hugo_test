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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LVGZ3PZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCGOv6FMdeUCYK6FRwyWR%2F9WbWsnmGI9%2FhwTz7mmV%2FFiwIhAJQcoq1YtVYR%2FoLfI3dCvpHNatFBZjN%2Fy35ESK0R01IAKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuo%2F1pYsMyNr9SZW8q3AMdEBl%2FvX2%2BnBn18VABxmSkY43alYSR5vVOAk3EAJGy0xnMEFLLjWVDsZ0Nn52Vz%2FxW67qD%2B%2FSOICwr8kEjSx3tB0l3G0VEMhbUYvwRr3cqsYuAmYgScCvlXNtfUn1r%2BnqXPsO2Mkp7FWtQBowrUuban%2BCLaYvlKnQjvS57qV1%2B%2FN8x4K%2BRMvBS8ZGFx9ryGDj5HEMWq8eXda5qWa%2Fk4z7Kwyo84gKdquZrd7Qabr6yTsY6Pv3q1f9MIlZ2i4K4M2rpKN31Iv2l8bymkXstouNclyMQU3%2FUuDrkGBufmxTPG4j8OVWdHk3%2FzmJuem1B0hGXmIMn2xEYlAlqain8ZZbifIJ53D1XDItjEXc69nxrgGdlmljI0chiWh23SqdMJOjysfA10%2BJuml2N1eI66kpcY1nrWP3SOX26yT6BM7oD7FBhl0WLS4fotb6sbxNAR9GBTafodvnEZ0%2BehAgXbaRSEWyQuq1ZM6py%2FchUUnv1q4IO0Pqpqd6Hd0qZaiBDQbWoNwZwQvT4OCG7xtSQPYJoYRnmx0YuQyqLajKEaZoUj9wVo0EPjNt9LMhLziKualMvRHJMIDxFXHNwiclJ7x5gYNgwIWxFDfv58HsUBJ503C3l%2BQ2YKqDIMJ91djD2vaDABjqkAf%2F3AtEod7brVsY%2FComuTIbjohHjBiNT5sMJDeK0hH7NvH83pbP1R7K0fACsOPL7zJVb6eMpiXH9eqV2WAtDikJDNIDybLSylQKnGK54IYr3a4Sq7t5NgN%2FQhXYdJeKnpWXXVMyu0a0quHSyGvfO36K%2Bev3fN4hHdbvLpGuyA%2F9b57tTmfU9nKv6%2BDfWUuc5x9AWLoQ%2FCjeVyKjAzsXFpq86Ai6y&X-Amz-Signature=62878d561706a0540630e8e0d4d6e7733094c9545e779c27cf5f7091a703b44a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LVGZ3PZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCGOv6FMdeUCYK6FRwyWR%2F9WbWsnmGI9%2FhwTz7mmV%2FFiwIhAJQcoq1YtVYR%2FoLfI3dCvpHNatFBZjN%2Fy35ESK0R01IAKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuo%2F1pYsMyNr9SZW8q3AMdEBl%2FvX2%2BnBn18VABxmSkY43alYSR5vVOAk3EAJGy0xnMEFLLjWVDsZ0Nn52Vz%2FxW67qD%2B%2FSOICwr8kEjSx3tB0l3G0VEMhbUYvwRr3cqsYuAmYgScCvlXNtfUn1r%2BnqXPsO2Mkp7FWtQBowrUuban%2BCLaYvlKnQjvS57qV1%2B%2FN8x4K%2BRMvBS8ZGFx9ryGDj5HEMWq8eXda5qWa%2Fk4z7Kwyo84gKdquZrd7Qabr6yTsY6Pv3q1f9MIlZ2i4K4M2rpKN31Iv2l8bymkXstouNclyMQU3%2FUuDrkGBufmxTPG4j8OVWdHk3%2FzmJuem1B0hGXmIMn2xEYlAlqain8ZZbifIJ53D1XDItjEXc69nxrgGdlmljI0chiWh23SqdMJOjysfA10%2BJuml2N1eI66kpcY1nrWP3SOX26yT6BM7oD7FBhl0WLS4fotb6sbxNAR9GBTafodvnEZ0%2BehAgXbaRSEWyQuq1ZM6py%2FchUUnv1q4IO0Pqpqd6Hd0qZaiBDQbWoNwZwQvT4OCG7xtSQPYJoYRnmx0YuQyqLajKEaZoUj9wVo0EPjNt9LMhLziKualMvRHJMIDxFXHNwiclJ7x5gYNgwIWxFDfv58HsUBJ503C3l%2BQ2YKqDIMJ91djD2vaDABjqkAf%2F3AtEod7brVsY%2FComuTIbjohHjBiNT5sMJDeK0hH7NvH83pbP1R7K0fACsOPL7zJVb6eMpiXH9eqV2WAtDikJDNIDybLSylQKnGK54IYr3a4Sq7t5NgN%2FQhXYdJeKnpWXXVMyu0a0quHSyGvfO36K%2Bev3fN4hHdbvLpGuyA%2F9b57tTmfU9nKv6%2BDfWUuc5x9AWLoQ%2FCjeVyKjAzsXFpq86Ai6y&X-Amz-Signature=45a0cbc6c6e1d797dcbeb1ce58d58ba76ce915586ed4fc8a8926a99bcdad97e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LVGZ3PZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCGOv6FMdeUCYK6FRwyWR%2F9WbWsnmGI9%2FhwTz7mmV%2FFiwIhAJQcoq1YtVYR%2FoLfI3dCvpHNatFBZjN%2Fy35ESK0R01IAKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuo%2F1pYsMyNr9SZW8q3AMdEBl%2FvX2%2BnBn18VABxmSkY43alYSR5vVOAk3EAJGy0xnMEFLLjWVDsZ0Nn52Vz%2FxW67qD%2B%2FSOICwr8kEjSx3tB0l3G0VEMhbUYvwRr3cqsYuAmYgScCvlXNtfUn1r%2BnqXPsO2Mkp7FWtQBowrUuban%2BCLaYvlKnQjvS57qV1%2B%2FN8x4K%2BRMvBS8ZGFx9ryGDj5HEMWq8eXda5qWa%2Fk4z7Kwyo84gKdquZrd7Qabr6yTsY6Pv3q1f9MIlZ2i4K4M2rpKN31Iv2l8bymkXstouNclyMQU3%2FUuDrkGBufmxTPG4j8OVWdHk3%2FzmJuem1B0hGXmIMn2xEYlAlqain8ZZbifIJ53D1XDItjEXc69nxrgGdlmljI0chiWh23SqdMJOjysfA10%2BJuml2N1eI66kpcY1nrWP3SOX26yT6BM7oD7FBhl0WLS4fotb6sbxNAR9GBTafodvnEZ0%2BehAgXbaRSEWyQuq1ZM6py%2FchUUnv1q4IO0Pqpqd6Hd0qZaiBDQbWoNwZwQvT4OCG7xtSQPYJoYRnmx0YuQyqLajKEaZoUj9wVo0EPjNt9LMhLziKualMvRHJMIDxFXHNwiclJ7x5gYNgwIWxFDfv58HsUBJ503C3l%2BQ2YKqDIMJ91djD2vaDABjqkAf%2F3AtEod7brVsY%2FComuTIbjohHjBiNT5sMJDeK0hH7NvH83pbP1R7K0fACsOPL7zJVb6eMpiXH9eqV2WAtDikJDNIDybLSylQKnGK54IYr3a4Sq7t5NgN%2FQhXYdJeKnpWXXVMyu0a0quHSyGvfO36K%2Bev3fN4hHdbvLpGuyA%2F9b57tTmfU9nKv6%2BDfWUuc5x9AWLoQ%2FCjeVyKjAzsXFpq86Ai6y&X-Amz-Signature=2ec92a50a36780ddec546f1022f3c99f4e92786e44f43812418b557bc83f3828&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LVGZ3PZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCGOv6FMdeUCYK6FRwyWR%2F9WbWsnmGI9%2FhwTz7mmV%2FFiwIhAJQcoq1YtVYR%2FoLfI3dCvpHNatFBZjN%2Fy35ESK0R01IAKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuo%2F1pYsMyNr9SZW8q3AMdEBl%2FvX2%2BnBn18VABxmSkY43alYSR5vVOAk3EAJGy0xnMEFLLjWVDsZ0Nn52Vz%2FxW67qD%2B%2FSOICwr8kEjSx3tB0l3G0VEMhbUYvwRr3cqsYuAmYgScCvlXNtfUn1r%2BnqXPsO2Mkp7FWtQBowrUuban%2BCLaYvlKnQjvS57qV1%2B%2FN8x4K%2BRMvBS8ZGFx9ryGDj5HEMWq8eXda5qWa%2Fk4z7Kwyo84gKdquZrd7Qabr6yTsY6Pv3q1f9MIlZ2i4K4M2rpKN31Iv2l8bymkXstouNclyMQU3%2FUuDrkGBufmxTPG4j8OVWdHk3%2FzmJuem1B0hGXmIMn2xEYlAlqain8ZZbifIJ53D1XDItjEXc69nxrgGdlmljI0chiWh23SqdMJOjysfA10%2BJuml2N1eI66kpcY1nrWP3SOX26yT6BM7oD7FBhl0WLS4fotb6sbxNAR9GBTafodvnEZ0%2BehAgXbaRSEWyQuq1ZM6py%2FchUUnv1q4IO0Pqpqd6Hd0qZaiBDQbWoNwZwQvT4OCG7xtSQPYJoYRnmx0YuQyqLajKEaZoUj9wVo0EPjNt9LMhLziKualMvRHJMIDxFXHNwiclJ7x5gYNgwIWxFDfv58HsUBJ503C3l%2BQ2YKqDIMJ91djD2vaDABjqkAf%2F3AtEod7brVsY%2FComuTIbjohHjBiNT5sMJDeK0hH7NvH83pbP1R7K0fACsOPL7zJVb6eMpiXH9eqV2WAtDikJDNIDybLSylQKnGK54IYr3a4Sq7t5NgN%2FQhXYdJeKnpWXXVMyu0a0quHSyGvfO36K%2Bev3fN4hHdbvLpGuyA%2F9b57tTmfU9nKv6%2BDfWUuc5x9AWLoQ%2FCjeVyKjAzsXFpq86Ai6y&X-Amz-Signature=6998768e7bcb313b76c39b7d145facc419180f757eb14549e8c2d5fa51b78e98&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LVGZ3PZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCGOv6FMdeUCYK6FRwyWR%2F9WbWsnmGI9%2FhwTz7mmV%2FFiwIhAJQcoq1YtVYR%2FoLfI3dCvpHNatFBZjN%2Fy35ESK0R01IAKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuo%2F1pYsMyNr9SZW8q3AMdEBl%2FvX2%2BnBn18VABxmSkY43alYSR5vVOAk3EAJGy0xnMEFLLjWVDsZ0Nn52Vz%2FxW67qD%2B%2FSOICwr8kEjSx3tB0l3G0VEMhbUYvwRr3cqsYuAmYgScCvlXNtfUn1r%2BnqXPsO2Mkp7FWtQBowrUuban%2BCLaYvlKnQjvS57qV1%2B%2FN8x4K%2BRMvBS8ZGFx9ryGDj5HEMWq8eXda5qWa%2Fk4z7Kwyo84gKdquZrd7Qabr6yTsY6Pv3q1f9MIlZ2i4K4M2rpKN31Iv2l8bymkXstouNclyMQU3%2FUuDrkGBufmxTPG4j8OVWdHk3%2FzmJuem1B0hGXmIMn2xEYlAlqain8ZZbifIJ53D1XDItjEXc69nxrgGdlmljI0chiWh23SqdMJOjysfA10%2BJuml2N1eI66kpcY1nrWP3SOX26yT6BM7oD7FBhl0WLS4fotb6sbxNAR9GBTafodvnEZ0%2BehAgXbaRSEWyQuq1ZM6py%2FchUUnv1q4IO0Pqpqd6Hd0qZaiBDQbWoNwZwQvT4OCG7xtSQPYJoYRnmx0YuQyqLajKEaZoUj9wVo0EPjNt9LMhLziKualMvRHJMIDxFXHNwiclJ7x5gYNgwIWxFDfv58HsUBJ503C3l%2BQ2YKqDIMJ91djD2vaDABjqkAf%2F3AtEod7brVsY%2FComuTIbjohHjBiNT5sMJDeK0hH7NvH83pbP1R7K0fACsOPL7zJVb6eMpiXH9eqV2WAtDikJDNIDybLSylQKnGK54IYr3a4Sq7t5NgN%2FQhXYdJeKnpWXXVMyu0a0quHSyGvfO36K%2Bev3fN4hHdbvLpGuyA%2F9b57tTmfU9nKv6%2BDfWUuc5x9AWLoQ%2FCjeVyKjAzsXFpq86Ai6y&X-Amz-Signature=bb202b32e1eaff3b623ea8556ffd7110a249e12002acc432bcbe11985ffd362b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LVGZ3PZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCGOv6FMdeUCYK6FRwyWR%2F9WbWsnmGI9%2FhwTz7mmV%2FFiwIhAJQcoq1YtVYR%2FoLfI3dCvpHNatFBZjN%2Fy35ESK0R01IAKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuo%2F1pYsMyNr9SZW8q3AMdEBl%2FvX2%2BnBn18VABxmSkY43alYSR5vVOAk3EAJGy0xnMEFLLjWVDsZ0Nn52Vz%2FxW67qD%2B%2FSOICwr8kEjSx3tB0l3G0VEMhbUYvwRr3cqsYuAmYgScCvlXNtfUn1r%2BnqXPsO2Mkp7FWtQBowrUuban%2BCLaYvlKnQjvS57qV1%2B%2FN8x4K%2BRMvBS8ZGFx9ryGDj5HEMWq8eXda5qWa%2Fk4z7Kwyo84gKdquZrd7Qabr6yTsY6Pv3q1f9MIlZ2i4K4M2rpKN31Iv2l8bymkXstouNclyMQU3%2FUuDrkGBufmxTPG4j8OVWdHk3%2FzmJuem1B0hGXmIMn2xEYlAlqain8ZZbifIJ53D1XDItjEXc69nxrgGdlmljI0chiWh23SqdMJOjysfA10%2BJuml2N1eI66kpcY1nrWP3SOX26yT6BM7oD7FBhl0WLS4fotb6sbxNAR9GBTafodvnEZ0%2BehAgXbaRSEWyQuq1ZM6py%2FchUUnv1q4IO0Pqpqd6Hd0qZaiBDQbWoNwZwQvT4OCG7xtSQPYJoYRnmx0YuQyqLajKEaZoUj9wVo0EPjNt9LMhLziKualMvRHJMIDxFXHNwiclJ7x5gYNgwIWxFDfv58HsUBJ503C3l%2BQ2YKqDIMJ91djD2vaDABjqkAf%2F3AtEod7brVsY%2FComuTIbjohHjBiNT5sMJDeK0hH7NvH83pbP1R7K0fACsOPL7zJVb6eMpiXH9eqV2WAtDikJDNIDybLSylQKnGK54IYr3a4Sq7t5NgN%2FQhXYdJeKnpWXXVMyu0a0quHSyGvfO36K%2Bev3fN4hHdbvLpGuyA%2F9b57tTmfU9nKv6%2BDfWUuc5x9AWLoQ%2FCjeVyKjAzsXFpq86Ai6y&X-Amz-Signature=5708dbcc4cd537430c6269cdf0ef8203e0c13c9c3122cc3a091eac5b3426a9ef&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LVGZ3PZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCGOv6FMdeUCYK6FRwyWR%2F9WbWsnmGI9%2FhwTz7mmV%2FFiwIhAJQcoq1YtVYR%2FoLfI3dCvpHNatFBZjN%2Fy35ESK0R01IAKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuo%2F1pYsMyNr9SZW8q3AMdEBl%2FvX2%2BnBn18VABxmSkY43alYSR5vVOAk3EAJGy0xnMEFLLjWVDsZ0Nn52Vz%2FxW67qD%2B%2FSOICwr8kEjSx3tB0l3G0VEMhbUYvwRr3cqsYuAmYgScCvlXNtfUn1r%2BnqXPsO2Mkp7FWtQBowrUuban%2BCLaYvlKnQjvS57qV1%2B%2FN8x4K%2BRMvBS8ZGFx9ryGDj5HEMWq8eXda5qWa%2Fk4z7Kwyo84gKdquZrd7Qabr6yTsY6Pv3q1f9MIlZ2i4K4M2rpKN31Iv2l8bymkXstouNclyMQU3%2FUuDrkGBufmxTPG4j8OVWdHk3%2FzmJuem1B0hGXmIMn2xEYlAlqain8ZZbifIJ53D1XDItjEXc69nxrgGdlmljI0chiWh23SqdMJOjysfA10%2BJuml2N1eI66kpcY1nrWP3SOX26yT6BM7oD7FBhl0WLS4fotb6sbxNAR9GBTafodvnEZ0%2BehAgXbaRSEWyQuq1ZM6py%2FchUUnv1q4IO0Pqpqd6Hd0qZaiBDQbWoNwZwQvT4OCG7xtSQPYJoYRnmx0YuQyqLajKEaZoUj9wVo0EPjNt9LMhLziKualMvRHJMIDxFXHNwiclJ7x5gYNgwIWxFDfv58HsUBJ503C3l%2BQ2YKqDIMJ91djD2vaDABjqkAf%2F3AtEod7brVsY%2FComuTIbjohHjBiNT5sMJDeK0hH7NvH83pbP1R7K0fACsOPL7zJVb6eMpiXH9eqV2WAtDikJDNIDybLSylQKnGK54IYr3a4Sq7t5NgN%2FQhXYdJeKnpWXXVMyu0a0quHSyGvfO36K%2Bev3fN4hHdbvLpGuyA%2F9b57tTmfU9nKv6%2BDfWUuc5x9AWLoQ%2FCjeVyKjAzsXFpq86Ai6y&X-Amz-Signature=2acc327a5855f1dcbcfe1ce512fd376645b268b84531374b54a6332fb558ade8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
