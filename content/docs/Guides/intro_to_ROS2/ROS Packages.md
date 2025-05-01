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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAVXTZM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDFqGJuDNBb1amQ1thRrMwKRpdvzSvim1abyaKXNmaQiAiAnfSHABYYJ%2BlRFgEF%2F3RM5Ued4vxJ%2B%2BYa3BTC%2FRuLoxyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9jLhhAF342V4ub5aKtwDWywOODVrte1j4Ae4UwYV4B2zgSY6JkbbPFsjP3eebNynpMm%2FBCp2fMHad8XIQLpERPt2r1W5dmJ7Oxr5C5kpabbpzybR60kE4G08aP99UwI796lVWUL9LR%2FYJyUNORbuJKVCaZfZjVOZKo%2FvRZuWhkqrYbrVto0zEwXT683%2F65kaA1MZx1cQOD7PzKvTgnBR2eht%2B0MP7AAoQ0i72B0uAeHyCjDRAuV5trf1W34j5cYHUibmX1pN7w%2FWfAYNVZm4%2F2r2CsLy76yueDahpEXoXJgtYCfPCoyubi0SV8AG%2F9QdzZowAyI%2BMipD%2BdwHYuxTGi74%2FEifmd3WbC6MqlzNfVr%2BKsz%2FT71dzHisFXIXYrSvyNBYkJVfo3QJBJ4naguIo443AYCb3Eq1X%2BiikZosSJDqI4Vz5pEcbRDjdR5v2dicK9NJmadOqzrFXyMQorTLRsGP%2ByVADfYqmsdQKaFjmVyPdmHXlhh6RAXY1c9k1ErzN0FBDRJsK2Ud8NJ1zMuL3KHY3AltHyKZ2QM682hf1JmBAHSK7dXM4e%2Fdwvgjx0HSyVg2IyQKBVIgrQunF5JjRIQk%2FYs9XjF0VRha3fewyJFMqfRfcwOimAf4s1asFeAHX7z9rMc2JhuTSIsw2YXOwAY6pgHnEHhxmKQEslC4VyJoeOZ2onohmZEf1vRFl4o1Fv8CbFClit1FvlFaoa1tjBneV%2BQ5DD0QntjQIiOheQX74hrPuPGre2Nhg8KB8IfLlKzTFglHFgms9CeGHVMfzY0hZwaVNLR1Q9Xw9wbRw28T4fcVeAQ2Wkvr%2BSItdloftND2famvrYdTcl0pkuCtBhJzC3lqSs39BdZR7Nh33SMWhMItNrJ%2BPhGj&X-Amz-Signature=1bbe6ba8971c72b2aebd71bcabbd0c67b974ce839b7e24d80325f64b63916bea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAVXTZM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDFqGJuDNBb1amQ1thRrMwKRpdvzSvim1abyaKXNmaQiAiAnfSHABYYJ%2BlRFgEF%2F3RM5Ued4vxJ%2B%2BYa3BTC%2FRuLoxyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9jLhhAF342V4ub5aKtwDWywOODVrte1j4Ae4UwYV4B2zgSY6JkbbPFsjP3eebNynpMm%2FBCp2fMHad8XIQLpERPt2r1W5dmJ7Oxr5C5kpabbpzybR60kE4G08aP99UwI796lVWUL9LR%2FYJyUNORbuJKVCaZfZjVOZKo%2FvRZuWhkqrYbrVto0zEwXT683%2F65kaA1MZx1cQOD7PzKvTgnBR2eht%2B0MP7AAoQ0i72B0uAeHyCjDRAuV5trf1W34j5cYHUibmX1pN7w%2FWfAYNVZm4%2F2r2CsLy76yueDahpEXoXJgtYCfPCoyubi0SV8AG%2F9QdzZowAyI%2BMipD%2BdwHYuxTGi74%2FEifmd3WbC6MqlzNfVr%2BKsz%2FT71dzHisFXIXYrSvyNBYkJVfo3QJBJ4naguIo443AYCb3Eq1X%2BiikZosSJDqI4Vz5pEcbRDjdR5v2dicK9NJmadOqzrFXyMQorTLRsGP%2ByVADfYqmsdQKaFjmVyPdmHXlhh6RAXY1c9k1ErzN0FBDRJsK2Ud8NJ1zMuL3KHY3AltHyKZ2QM682hf1JmBAHSK7dXM4e%2Fdwvgjx0HSyVg2IyQKBVIgrQunF5JjRIQk%2FYs9XjF0VRha3fewyJFMqfRfcwOimAf4s1asFeAHX7z9rMc2JhuTSIsw2YXOwAY6pgHnEHhxmKQEslC4VyJoeOZ2onohmZEf1vRFl4o1Fv8CbFClit1FvlFaoa1tjBneV%2BQ5DD0QntjQIiOheQX74hrPuPGre2Nhg8KB8IfLlKzTFglHFgms9CeGHVMfzY0hZwaVNLR1Q9Xw9wbRw28T4fcVeAQ2Wkvr%2BSItdloftND2famvrYdTcl0pkuCtBhJzC3lqSs39BdZR7Nh33SMWhMItNrJ%2BPhGj&X-Amz-Signature=baad51dc0092bae004711f367cbdb9441ea67696f147735c0f036c19ddbafd5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAVXTZM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDFqGJuDNBb1amQ1thRrMwKRpdvzSvim1abyaKXNmaQiAiAnfSHABYYJ%2BlRFgEF%2F3RM5Ued4vxJ%2B%2BYa3BTC%2FRuLoxyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9jLhhAF342V4ub5aKtwDWywOODVrte1j4Ae4UwYV4B2zgSY6JkbbPFsjP3eebNynpMm%2FBCp2fMHad8XIQLpERPt2r1W5dmJ7Oxr5C5kpabbpzybR60kE4G08aP99UwI796lVWUL9LR%2FYJyUNORbuJKVCaZfZjVOZKo%2FvRZuWhkqrYbrVto0zEwXT683%2F65kaA1MZx1cQOD7PzKvTgnBR2eht%2B0MP7AAoQ0i72B0uAeHyCjDRAuV5trf1W34j5cYHUibmX1pN7w%2FWfAYNVZm4%2F2r2CsLy76yueDahpEXoXJgtYCfPCoyubi0SV8AG%2F9QdzZowAyI%2BMipD%2BdwHYuxTGi74%2FEifmd3WbC6MqlzNfVr%2BKsz%2FT71dzHisFXIXYrSvyNBYkJVfo3QJBJ4naguIo443AYCb3Eq1X%2BiikZosSJDqI4Vz5pEcbRDjdR5v2dicK9NJmadOqzrFXyMQorTLRsGP%2ByVADfYqmsdQKaFjmVyPdmHXlhh6RAXY1c9k1ErzN0FBDRJsK2Ud8NJ1zMuL3KHY3AltHyKZ2QM682hf1JmBAHSK7dXM4e%2Fdwvgjx0HSyVg2IyQKBVIgrQunF5JjRIQk%2FYs9XjF0VRha3fewyJFMqfRfcwOimAf4s1asFeAHX7z9rMc2JhuTSIsw2YXOwAY6pgHnEHhxmKQEslC4VyJoeOZ2onohmZEf1vRFl4o1Fv8CbFClit1FvlFaoa1tjBneV%2BQ5DD0QntjQIiOheQX74hrPuPGre2Nhg8KB8IfLlKzTFglHFgms9CeGHVMfzY0hZwaVNLR1Q9Xw9wbRw28T4fcVeAQ2Wkvr%2BSItdloftND2famvrYdTcl0pkuCtBhJzC3lqSs39BdZR7Nh33SMWhMItNrJ%2BPhGj&X-Amz-Signature=4ff00c70d3df419e770c530a4a056b1963b7d80b4373475e9859e44a604f4558&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAVXTZM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDFqGJuDNBb1amQ1thRrMwKRpdvzSvim1abyaKXNmaQiAiAnfSHABYYJ%2BlRFgEF%2F3RM5Ued4vxJ%2B%2BYa3BTC%2FRuLoxyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9jLhhAF342V4ub5aKtwDWywOODVrte1j4Ae4UwYV4B2zgSY6JkbbPFsjP3eebNynpMm%2FBCp2fMHad8XIQLpERPt2r1W5dmJ7Oxr5C5kpabbpzybR60kE4G08aP99UwI796lVWUL9LR%2FYJyUNORbuJKVCaZfZjVOZKo%2FvRZuWhkqrYbrVto0zEwXT683%2F65kaA1MZx1cQOD7PzKvTgnBR2eht%2B0MP7AAoQ0i72B0uAeHyCjDRAuV5trf1W34j5cYHUibmX1pN7w%2FWfAYNVZm4%2F2r2CsLy76yueDahpEXoXJgtYCfPCoyubi0SV8AG%2F9QdzZowAyI%2BMipD%2BdwHYuxTGi74%2FEifmd3WbC6MqlzNfVr%2BKsz%2FT71dzHisFXIXYrSvyNBYkJVfo3QJBJ4naguIo443AYCb3Eq1X%2BiikZosSJDqI4Vz5pEcbRDjdR5v2dicK9NJmadOqzrFXyMQorTLRsGP%2ByVADfYqmsdQKaFjmVyPdmHXlhh6RAXY1c9k1ErzN0FBDRJsK2Ud8NJ1zMuL3KHY3AltHyKZ2QM682hf1JmBAHSK7dXM4e%2Fdwvgjx0HSyVg2IyQKBVIgrQunF5JjRIQk%2FYs9XjF0VRha3fewyJFMqfRfcwOimAf4s1asFeAHX7z9rMc2JhuTSIsw2YXOwAY6pgHnEHhxmKQEslC4VyJoeOZ2onohmZEf1vRFl4o1Fv8CbFClit1FvlFaoa1tjBneV%2BQ5DD0QntjQIiOheQX74hrPuPGre2Nhg8KB8IfLlKzTFglHFgms9CeGHVMfzY0hZwaVNLR1Q9Xw9wbRw28T4fcVeAQ2Wkvr%2BSItdloftND2famvrYdTcl0pkuCtBhJzC3lqSs39BdZR7Nh33SMWhMItNrJ%2BPhGj&X-Amz-Signature=1d5cc3f835009280dd0c1cea7555558c9a210fd90d7a919486311180f432ae46&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAVXTZM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDFqGJuDNBb1amQ1thRrMwKRpdvzSvim1abyaKXNmaQiAiAnfSHABYYJ%2BlRFgEF%2F3RM5Ued4vxJ%2B%2BYa3BTC%2FRuLoxyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9jLhhAF342V4ub5aKtwDWywOODVrte1j4Ae4UwYV4B2zgSY6JkbbPFsjP3eebNynpMm%2FBCp2fMHad8XIQLpERPt2r1W5dmJ7Oxr5C5kpabbpzybR60kE4G08aP99UwI796lVWUL9LR%2FYJyUNORbuJKVCaZfZjVOZKo%2FvRZuWhkqrYbrVto0zEwXT683%2F65kaA1MZx1cQOD7PzKvTgnBR2eht%2B0MP7AAoQ0i72B0uAeHyCjDRAuV5trf1W34j5cYHUibmX1pN7w%2FWfAYNVZm4%2F2r2CsLy76yueDahpEXoXJgtYCfPCoyubi0SV8AG%2F9QdzZowAyI%2BMipD%2BdwHYuxTGi74%2FEifmd3WbC6MqlzNfVr%2BKsz%2FT71dzHisFXIXYrSvyNBYkJVfo3QJBJ4naguIo443AYCb3Eq1X%2BiikZosSJDqI4Vz5pEcbRDjdR5v2dicK9NJmadOqzrFXyMQorTLRsGP%2ByVADfYqmsdQKaFjmVyPdmHXlhh6RAXY1c9k1ErzN0FBDRJsK2Ud8NJ1zMuL3KHY3AltHyKZ2QM682hf1JmBAHSK7dXM4e%2Fdwvgjx0HSyVg2IyQKBVIgrQunF5JjRIQk%2FYs9XjF0VRha3fewyJFMqfRfcwOimAf4s1asFeAHX7z9rMc2JhuTSIsw2YXOwAY6pgHnEHhxmKQEslC4VyJoeOZ2onohmZEf1vRFl4o1Fv8CbFClit1FvlFaoa1tjBneV%2BQ5DD0QntjQIiOheQX74hrPuPGre2Nhg8KB8IfLlKzTFglHFgms9CeGHVMfzY0hZwaVNLR1Q9Xw9wbRw28T4fcVeAQ2Wkvr%2BSItdloftND2famvrYdTcl0pkuCtBhJzC3lqSs39BdZR7Nh33SMWhMItNrJ%2BPhGj&X-Amz-Signature=3cf5866fe96dd27f026faf07a9c8f9adc19edce413ee62c7d4ef9421fb847d66&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAVXTZM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDFqGJuDNBb1amQ1thRrMwKRpdvzSvim1abyaKXNmaQiAiAnfSHABYYJ%2BlRFgEF%2F3RM5Ued4vxJ%2B%2BYa3BTC%2FRuLoxyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9jLhhAF342V4ub5aKtwDWywOODVrte1j4Ae4UwYV4B2zgSY6JkbbPFsjP3eebNynpMm%2FBCp2fMHad8XIQLpERPt2r1W5dmJ7Oxr5C5kpabbpzybR60kE4G08aP99UwI796lVWUL9LR%2FYJyUNORbuJKVCaZfZjVOZKo%2FvRZuWhkqrYbrVto0zEwXT683%2F65kaA1MZx1cQOD7PzKvTgnBR2eht%2B0MP7AAoQ0i72B0uAeHyCjDRAuV5trf1W34j5cYHUibmX1pN7w%2FWfAYNVZm4%2F2r2CsLy76yueDahpEXoXJgtYCfPCoyubi0SV8AG%2F9QdzZowAyI%2BMipD%2BdwHYuxTGi74%2FEifmd3WbC6MqlzNfVr%2BKsz%2FT71dzHisFXIXYrSvyNBYkJVfo3QJBJ4naguIo443AYCb3Eq1X%2BiikZosSJDqI4Vz5pEcbRDjdR5v2dicK9NJmadOqzrFXyMQorTLRsGP%2ByVADfYqmsdQKaFjmVyPdmHXlhh6RAXY1c9k1ErzN0FBDRJsK2Ud8NJ1zMuL3KHY3AltHyKZ2QM682hf1JmBAHSK7dXM4e%2Fdwvgjx0HSyVg2IyQKBVIgrQunF5JjRIQk%2FYs9XjF0VRha3fewyJFMqfRfcwOimAf4s1asFeAHX7z9rMc2JhuTSIsw2YXOwAY6pgHnEHhxmKQEslC4VyJoeOZ2onohmZEf1vRFl4o1Fv8CbFClit1FvlFaoa1tjBneV%2BQ5DD0QntjQIiOheQX74hrPuPGre2Nhg8KB8IfLlKzTFglHFgms9CeGHVMfzY0hZwaVNLR1Q9Xw9wbRw28T4fcVeAQ2Wkvr%2BSItdloftND2famvrYdTcl0pkuCtBhJzC3lqSs39BdZR7Nh33SMWhMItNrJ%2BPhGj&X-Amz-Signature=5c1edc1b5356fa82505bd1ca9b273c67c0360881922f11480ad64b8450db7972&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAVXTZM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDFqGJuDNBb1amQ1thRrMwKRpdvzSvim1abyaKXNmaQiAiAnfSHABYYJ%2BlRFgEF%2F3RM5Ued4vxJ%2B%2BYa3BTC%2FRuLoxyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9jLhhAF342V4ub5aKtwDWywOODVrte1j4Ae4UwYV4B2zgSY6JkbbPFsjP3eebNynpMm%2FBCp2fMHad8XIQLpERPt2r1W5dmJ7Oxr5C5kpabbpzybR60kE4G08aP99UwI796lVWUL9LR%2FYJyUNORbuJKVCaZfZjVOZKo%2FvRZuWhkqrYbrVto0zEwXT683%2F65kaA1MZx1cQOD7PzKvTgnBR2eht%2B0MP7AAoQ0i72B0uAeHyCjDRAuV5trf1W34j5cYHUibmX1pN7w%2FWfAYNVZm4%2F2r2CsLy76yueDahpEXoXJgtYCfPCoyubi0SV8AG%2F9QdzZowAyI%2BMipD%2BdwHYuxTGi74%2FEifmd3WbC6MqlzNfVr%2BKsz%2FT71dzHisFXIXYrSvyNBYkJVfo3QJBJ4naguIo443AYCb3Eq1X%2BiikZosSJDqI4Vz5pEcbRDjdR5v2dicK9NJmadOqzrFXyMQorTLRsGP%2ByVADfYqmsdQKaFjmVyPdmHXlhh6RAXY1c9k1ErzN0FBDRJsK2Ud8NJ1zMuL3KHY3AltHyKZ2QM682hf1JmBAHSK7dXM4e%2Fdwvgjx0HSyVg2IyQKBVIgrQunF5JjRIQk%2FYs9XjF0VRha3fewyJFMqfRfcwOimAf4s1asFeAHX7z9rMc2JhuTSIsw2YXOwAY6pgHnEHhxmKQEslC4VyJoeOZ2onohmZEf1vRFl4o1Fv8CbFClit1FvlFaoa1tjBneV%2BQ5DD0QntjQIiOheQX74hrPuPGre2Nhg8KB8IfLlKzTFglHFgms9CeGHVMfzY0hZwaVNLR1Q9Xw9wbRw28T4fcVeAQ2Wkvr%2BSItdloftND2famvrYdTcl0pkuCtBhJzC3lqSs39BdZR7Nh33SMWhMItNrJ%2BPhGj&X-Amz-Signature=b3608fb4672495d9b03df70d4dc7b82ce1fbebbaa4116e4591d2563f2699de5f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
