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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOSIFLW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBifVn%2BkWQ47rsktJPgjc3sTmm%2FRqyxNRvpLlQ4wyXQWAiEAr6t8KSBLOS8dV0FdHDgbjz2f1%2FD7D42QS%2FnDEOWF6UEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDICXqOUrVEn3E9cd8yrcA69OlxD2GpZ9M768%2B0ZetHw%2BOcSt%2BvtlE8lDyjnaE3i582DAcA2gHB%2B70mNqb77NCPwTunaLAYl7Ci832YGc46cS%2FaW8LKUnnJrpPRpnz6EQpT2YivQ45Md7DQE4qpiPq%2FdLGvnrIyvUyUNoJV2cXrCd%2BZQABGCbx1dW4deO0tntIxKqu4PzXsoVR2KyZrlyuTiwWEU2YDpceXBqQGjf3gGR2iPwY4RvXVLcTP0gNzRcLoMa%2FhFtZiO1epb8BE%2BX6DKIGHc5HdaBBzkD285JePO%2FIbzX%2FeINEmqB2XvMODnVi7NFktv4mf2jY%2BuXnYzs3JC7QJmZNxOeCH8EWG2XMmoZLKXtwRpKJWMQYW%2Bc1Zt9nUBeFCLHWDJ8xWCXWGgGJdCw40IUQYmPXk4%2FrctazfYoUR06qhojfAmJodsSqXT7vNNgGi5GcjZMifcsBFKAKdXoXVQAz40pABOjW5KCAvHFZdTsInNAIOTv1OF9feR5FaaumcbrRiZT96JDc29Wo7zcUhtV3%2Bpvl%2F0uRTMa3vJHlRWa8eqJTWg2JmSdYeFaO3dQzMcETUeIKGjwJNa3QNDB2jnJgcEgxr%2BeLsunE4gwvVhg3ct%2BMp%2BzOm6s3IOd7Vjnt0Zpg2fMP%2BFzMMLN6MIGOqUBLp%2FmiTCV104T%2FgFJa06cvg5l45kdLfUe3BZD76CkAd2y2kE5KnfPsbA083fpXqC5NUf%2Bz8ZBANPUSEMdfdPhZSzg%2Fbswq3sXGSL50MZ3sOJt55t%2Fc6lyLy2JS2BuRdiED7bY6rfYn9FtrHOuyE32XUkRtVWdiHwu8UzWLMhj%2BprBPynehTDrIl1%2BQ%2B%2BiumggEhU6XDTfohrgCbRRl%2FHvUsWldk%2FA&X-Amz-Signature=1bea078b1dbf820137270f1529b7bfd13e339e326b26f234cea34cbd0ab9714d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOSIFLW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBifVn%2BkWQ47rsktJPgjc3sTmm%2FRqyxNRvpLlQ4wyXQWAiEAr6t8KSBLOS8dV0FdHDgbjz2f1%2FD7D42QS%2FnDEOWF6UEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDICXqOUrVEn3E9cd8yrcA69OlxD2GpZ9M768%2B0ZetHw%2BOcSt%2BvtlE8lDyjnaE3i582DAcA2gHB%2B70mNqb77NCPwTunaLAYl7Ci832YGc46cS%2FaW8LKUnnJrpPRpnz6EQpT2YivQ45Md7DQE4qpiPq%2FdLGvnrIyvUyUNoJV2cXrCd%2BZQABGCbx1dW4deO0tntIxKqu4PzXsoVR2KyZrlyuTiwWEU2YDpceXBqQGjf3gGR2iPwY4RvXVLcTP0gNzRcLoMa%2FhFtZiO1epb8BE%2BX6DKIGHc5HdaBBzkD285JePO%2FIbzX%2FeINEmqB2XvMODnVi7NFktv4mf2jY%2BuXnYzs3JC7QJmZNxOeCH8EWG2XMmoZLKXtwRpKJWMQYW%2Bc1Zt9nUBeFCLHWDJ8xWCXWGgGJdCw40IUQYmPXk4%2FrctazfYoUR06qhojfAmJodsSqXT7vNNgGi5GcjZMifcsBFKAKdXoXVQAz40pABOjW5KCAvHFZdTsInNAIOTv1OF9feR5FaaumcbrRiZT96JDc29Wo7zcUhtV3%2Bpvl%2F0uRTMa3vJHlRWa8eqJTWg2JmSdYeFaO3dQzMcETUeIKGjwJNa3QNDB2jnJgcEgxr%2BeLsunE4gwvVhg3ct%2BMp%2BzOm6s3IOd7Vjnt0Zpg2fMP%2BFzMMLN6MIGOqUBLp%2FmiTCV104T%2FgFJa06cvg5l45kdLfUe3BZD76CkAd2y2kE5KnfPsbA083fpXqC5NUf%2Bz8ZBANPUSEMdfdPhZSzg%2Fbswq3sXGSL50MZ3sOJt55t%2Fc6lyLy2JS2BuRdiED7bY6rfYn9FtrHOuyE32XUkRtVWdiHwu8UzWLMhj%2BprBPynehTDrIl1%2BQ%2B%2BiumggEhU6XDTfohrgCbRRl%2FHvUsWldk%2FA&X-Amz-Signature=625db81a83dc7e2e3ef3dc424c9bf49aa87deb0dbf884799595034b4bf782cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOSIFLW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBifVn%2BkWQ47rsktJPgjc3sTmm%2FRqyxNRvpLlQ4wyXQWAiEAr6t8KSBLOS8dV0FdHDgbjz2f1%2FD7D42QS%2FnDEOWF6UEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDICXqOUrVEn3E9cd8yrcA69OlxD2GpZ9M768%2B0ZetHw%2BOcSt%2BvtlE8lDyjnaE3i582DAcA2gHB%2B70mNqb77NCPwTunaLAYl7Ci832YGc46cS%2FaW8LKUnnJrpPRpnz6EQpT2YivQ45Md7DQE4qpiPq%2FdLGvnrIyvUyUNoJV2cXrCd%2BZQABGCbx1dW4deO0tntIxKqu4PzXsoVR2KyZrlyuTiwWEU2YDpceXBqQGjf3gGR2iPwY4RvXVLcTP0gNzRcLoMa%2FhFtZiO1epb8BE%2BX6DKIGHc5HdaBBzkD285JePO%2FIbzX%2FeINEmqB2XvMODnVi7NFktv4mf2jY%2BuXnYzs3JC7QJmZNxOeCH8EWG2XMmoZLKXtwRpKJWMQYW%2Bc1Zt9nUBeFCLHWDJ8xWCXWGgGJdCw40IUQYmPXk4%2FrctazfYoUR06qhojfAmJodsSqXT7vNNgGi5GcjZMifcsBFKAKdXoXVQAz40pABOjW5KCAvHFZdTsInNAIOTv1OF9feR5FaaumcbrRiZT96JDc29Wo7zcUhtV3%2Bpvl%2F0uRTMa3vJHlRWa8eqJTWg2JmSdYeFaO3dQzMcETUeIKGjwJNa3QNDB2jnJgcEgxr%2BeLsunE4gwvVhg3ct%2BMp%2BzOm6s3IOd7Vjnt0Zpg2fMP%2BFzMMLN6MIGOqUBLp%2FmiTCV104T%2FgFJa06cvg5l45kdLfUe3BZD76CkAd2y2kE5KnfPsbA083fpXqC5NUf%2Bz8ZBANPUSEMdfdPhZSzg%2Fbswq3sXGSL50MZ3sOJt55t%2Fc6lyLy2JS2BuRdiED7bY6rfYn9FtrHOuyE32XUkRtVWdiHwu8UzWLMhj%2BprBPynehTDrIl1%2BQ%2B%2BiumggEhU6XDTfohrgCbRRl%2FHvUsWldk%2FA&X-Amz-Signature=f201b3fc62316dcdd13cf9e389ccda684da8a8437a5bf91abd35e37a3ea0ffb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOSIFLW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBifVn%2BkWQ47rsktJPgjc3sTmm%2FRqyxNRvpLlQ4wyXQWAiEAr6t8KSBLOS8dV0FdHDgbjz2f1%2FD7D42QS%2FnDEOWF6UEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDICXqOUrVEn3E9cd8yrcA69OlxD2GpZ9M768%2B0ZetHw%2BOcSt%2BvtlE8lDyjnaE3i582DAcA2gHB%2B70mNqb77NCPwTunaLAYl7Ci832YGc46cS%2FaW8LKUnnJrpPRpnz6EQpT2YivQ45Md7DQE4qpiPq%2FdLGvnrIyvUyUNoJV2cXrCd%2BZQABGCbx1dW4deO0tntIxKqu4PzXsoVR2KyZrlyuTiwWEU2YDpceXBqQGjf3gGR2iPwY4RvXVLcTP0gNzRcLoMa%2FhFtZiO1epb8BE%2BX6DKIGHc5HdaBBzkD285JePO%2FIbzX%2FeINEmqB2XvMODnVi7NFktv4mf2jY%2BuXnYzs3JC7QJmZNxOeCH8EWG2XMmoZLKXtwRpKJWMQYW%2Bc1Zt9nUBeFCLHWDJ8xWCXWGgGJdCw40IUQYmPXk4%2FrctazfYoUR06qhojfAmJodsSqXT7vNNgGi5GcjZMifcsBFKAKdXoXVQAz40pABOjW5KCAvHFZdTsInNAIOTv1OF9feR5FaaumcbrRiZT96JDc29Wo7zcUhtV3%2Bpvl%2F0uRTMa3vJHlRWa8eqJTWg2JmSdYeFaO3dQzMcETUeIKGjwJNa3QNDB2jnJgcEgxr%2BeLsunE4gwvVhg3ct%2BMp%2BzOm6s3IOd7Vjnt0Zpg2fMP%2BFzMMLN6MIGOqUBLp%2FmiTCV104T%2FgFJa06cvg5l45kdLfUe3BZD76CkAd2y2kE5KnfPsbA083fpXqC5NUf%2Bz8ZBANPUSEMdfdPhZSzg%2Fbswq3sXGSL50MZ3sOJt55t%2Fc6lyLy2JS2BuRdiED7bY6rfYn9FtrHOuyE32XUkRtVWdiHwu8UzWLMhj%2BprBPynehTDrIl1%2BQ%2B%2BiumggEhU6XDTfohrgCbRRl%2FHvUsWldk%2FA&X-Amz-Signature=954172c7f64ea1a7a1fadd615b74d4e2a8f65473341f6cc77139da0c85d44ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOSIFLW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBifVn%2BkWQ47rsktJPgjc3sTmm%2FRqyxNRvpLlQ4wyXQWAiEAr6t8KSBLOS8dV0FdHDgbjz2f1%2FD7D42QS%2FnDEOWF6UEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDICXqOUrVEn3E9cd8yrcA69OlxD2GpZ9M768%2B0ZetHw%2BOcSt%2BvtlE8lDyjnaE3i582DAcA2gHB%2B70mNqb77NCPwTunaLAYl7Ci832YGc46cS%2FaW8LKUnnJrpPRpnz6EQpT2YivQ45Md7DQE4qpiPq%2FdLGvnrIyvUyUNoJV2cXrCd%2BZQABGCbx1dW4deO0tntIxKqu4PzXsoVR2KyZrlyuTiwWEU2YDpceXBqQGjf3gGR2iPwY4RvXVLcTP0gNzRcLoMa%2FhFtZiO1epb8BE%2BX6DKIGHc5HdaBBzkD285JePO%2FIbzX%2FeINEmqB2XvMODnVi7NFktv4mf2jY%2BuXnYzs3JC7QJmZNxOeCH8EWG2XMmoZLKXtwRpKJWMQYW%2Bc1Zt9nUBeFCLHWDJ8xWCXWGgGJdCw40IUQYmPXk4%2FrctazfYoUR06qhojfAmJodsSqXT7vNNgGi5GcjZMifcsBFKAKdXoXVQAz40pABOjW5KCAvHFZdTsInNAIOTv1OF9feR5FaaumcbrRiZT96JDc29Wo7zcUhtV3%2Bpvl%2F0uRTMa3vJHlRWa8eqJTWg2JmSdYeFaO3dQzMcETUeIKGjwJNa3QNDB2jnJgcEgxr%2BeLsunE4gwvVhg3ct%2BMp%2BzOm6s3IOd7Vjnt0Zpg2fMP%2BFzMMLN6MIGOqUBLp%2FmiTCV104T%2FgFJa06cvg5l45kdLfUe3BZD76CkAd2y2kE5KnfPsbA083fpXqC5NUf%2Bz8ZBANPUSEMdfdPhZSzg%2Fbswq3sXGSL50MZ3sOJt55t%2Fc6lyLy2JS2BuRdiED7bY6rfYn9FtrHOuyE32XUkRtVWdiHwu8UzWLMhj%2BprBPynehTDrIl1%2BQ%2B%2BiumggEhU6XDTfohrgCbRRl%2FHvUsWldk%2FA&X-Amz-Signature=4d88bd32d781b3363d9098ed220b285877faeaa5f2d18a97019b937d902f26e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOSIFLW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBifVn%2BkWQ47rsktJPgjc3sTmm%2FRqyxNRvpLlQ4wyXQWAiEAr6t8KSBLOS8dV0FdHDgbjz2f1%2FD7D42QS%2FnDEOWF6UEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDICXqOUrVEn3E9cd8yrcA69OlxD2GpZ9M768%2B0ZetHw%2BOcSt%2BvtlE8lDyjnaE3i582DAcA2gHB%2B70mNqb77NCPwTunaLAYl7Ci832YGc46cS%2FaW8LKUnnJrpPRpnz6EQpT2YivQ45Md7DQE4qpiPq%2FdLGvnrIyvUyUNoJV2cXrCd%2BZQABGCbx1dW4deO0tntIxKqu4PzXsoVR2KyZrlyuTiwWEU2YDpceXBqQGjf3gGR2iPwY4RvXVLcTP0gNzRcLoMa%2FhFtZiO1epb8BE%2BX6DKIGHc5HdaBBzkD285JePO%2FIbzX%2FeINEmqB2XvMODnVi7NFktv4mf2jY%2BuXnYzs3JC7QJmZNxOeCH8EWG2XMmoZLKXtwRpKJWMQYW%2Bc1Zt9nUBeFCLHWDJ8xWCXWGgGJdCw40IUQYmPXk4%2FrctazfYoUR06qhojfAmJodsSqXT7vNNgGi5GcjZMifcsBFKAKdXoXVQAz40pABOjW5KCAvHFZdTsInNAIOTv1OF9feR5FaaumcbrRiZT96JDc29Wo7zcUhtV3%2Bpvl%2F0uRTMa3vJHlRWa8eqJTWg2JmSdYeFaO3dQzMcETUeIKGjwJNa3QNDB2jnJgcEgxr%2BeLsunE4gwvVhg3ct%2BMp%2BzOm6s3IOd7Vjnt0Zpg2fMP%2BFzMMLN6MIGOqUBLp%2FmiTCV104T%2FgFJa06cvg5l45kdLfUe3BZD76CkAd2y2kE5KnfPsbA083fpXqC5NUf%2Bz8ZBANPUSEMdfdPhZSzg%2Fbswq3sXGSL50MZ3sOJt55t%2Fc6lyLy2JS2BuRdiED7bY6rfYn9FtrHOuyE32XUkRtVWdiHwu8UzWLMhj%2BprBPynehTDrIl1%2BQ%2B%2BiumggEhU6XDTfohrgCbRRl%2FHvUsWldk%2FA&X-Amz-Signature=8b0e620eee7d26aa09acbce47074323e27ab1b6080118f0cb5c88357334f75f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOSIFLW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBifVn%2BkWQ47rsktJPgjc3sTmm%2FRqyxNRvpLlQ4wyXQWAiEAr6t8KSBLOS8dV0FdHDgbjz2f1%2FD7D42QS%2FnDEOWF6UEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDICXqOUrVEn3E9cd8yrcA69OlxD2GpZ9M768%2B0ZetHw%2BOcSt%2BvtlE8lDyjnaE3i582DAcA2gHB%2B70mNqb77NCPwTunaLAYl7Ci832YGc46cS%2FaW8LKUnnJrpPRpnz6EQpT2YivQ45Md7DQE4qpiPq%2FdLGvnrIyvUyUNoJV2cXrCd%2BZQABGCbx1dW4deO0tntIxKqu4PzXsoVR2KyZrlyuTiwWEU2YDpceXBqQGjf3gGR2iPwY4RvXVLcTP0gNzRcLoMa%2FhFtZiO1epb8BE%2BX6DKIGHc5HdaBBzkD285JePO%2FIbzX%2FeINEmqB2XvMODnVi7NFktv4mf2jY%2BuXnYzs3JC7QJmZNxOeCH8EWG2XMmoZLKXtwRpKJWMQYW%2Bc1Zt9nUBeFCLHWDJ8xWCXWGgGJdCw40IUQYmPXk4%2FrctazfYoUR06qhojfAmJodsSqXT7vNNgGi5GcjZMifcsBFKAKdXoXVQAz40pABOjW5KCAvHFZdTsInNAIOTv1OF9feR5FaaumcbrRiZT96JDc29Wo7zcUhtV3%2Bpvl%2F0uRTMa3vJHlRWa8eqJTWg2JmSdYeFaO3dQzMcETUeIKGjwJNa3QNDB2jnJgcEgxr%2BeLsunE4gwvVhg3ct%2BMp%2BzOm6s3IOd7Vjnt0Zpg2fMP%2BFzMMLN6MIGOqUBLp%2FmiTCV104T%2FgFJa06cvg5l45kdLfUe3BZD76CkAd2y2kE5KnfPsbA083fpXqC5NUf%2Bz8ZBANPUSEMdfdPhZSzg%2Fbswq3sXGSL50MZ3sOJt55t%2Fc6lyLy2JS2BuRdiED7bY6rfYn9FtrHOuyE32XUkRtVWdiHwu8UzWLMhj%2BprBPynehTDrIl1%2BQ%2B%2BiumggEhU6XDTfohrgCbRRl%2FHvUsWldk%2FA&X-Amz-Signature=aba9de9fbb0b06ada2b7bdc02ef31b5239187014a086833db098ee7e7a45ef08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
