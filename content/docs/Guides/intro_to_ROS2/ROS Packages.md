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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLEJU3MX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICMtqDeBYNapc920j%2F68BYxrqhX6ciLL9kwqKAq2PhBEAiEAoA3%2BC92iDbZ0PLAV%2FkDyhuyDgiHf6mFtQi4f6%2FUD6t8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFJ3JNdow1997PCJ%2FircA0wfI85Ja%2F%2BeTp9M9shCzP6YIvio8KJgM853psihC%2FWXBn29vjy%2BK%2FsyFWliV0yREUcjFIENe2eZGLaYdckJskFB41QO0Tu%2F0BcNI%2FUazAgp%2F69jkqgO3JDJjap0HXUbFIWntVEByzIaXOfTMxVD2szn8GMPdHC3bMmV1RPDwUrZQANsdpAM%2Bmqn258xo9amDDX9%2BZehrP1%2FbA%2Bn79BK3pIASLiHYGhgi0%2BiDLtEEmW1Q2KuMnjllNASuBTVxHpMRmv3%2FrsEmaj0A%2BizAJ7kpHijvEn9FkrOqJ0yH8uGves4KbC1%2BifqQFMkXHNVHRI%2Fuzbz%2FwkH9MxTFZrIJSLDAJQES7EcAr6N2h7uDg7CrtbtR9EqEKmGrOlNP0lYVk1bOH19l68Pj822sn1Z%2BU%2FaaBshZsjFZdiZI8773omRANX%2FIzEsgGBiMnlOImOSCJTfNptXo09Zo9b2LA%2FaaBLIv7NMYZAVi06N1uNQYY7mtqY0p3WSPuqvmycRuNhrpRrWpWmpwy2YEXonYP6Zi0jVqy3wwvkyomdQd%2F9Vqex70qC7HeJEuo1IWb1qdlD853OFwahrfzSAlIXXckufkfe3wVfgIx%2BLfaxoSYfPjJe28P68bq%2B0JVqo50QDqJGHMOTfrL4GOqUBQ5zn3fn5VMrOge4xKNatGPxoBeOBJhtE1%2BG5nnu5ITaKi%2BgkTVvPZfp1VsBKi7cgp%2BUKE93yW5g9ERA7YOrEdIxUCTRPwIggW1fjHvCkZbOixhI8lykhpmv%2Bug8NIYyqbUxj5TrtM4R8sSG2EdTEac40w3H9EuxVqyJulc0KAEZUdswh3rKryTx0%2BBrdtkd6BgblZra2mCOVEGxzh1Mnsk59MZJw&X-Amz-Signature=2f8df89ad6af11a8fa340407b1f08560533ff6ba4b2e67bd0d79764e0e55e6af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLEJU3MX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICMtqDeBYNapc920j%2F68BYxrqhX6ciLL9kwqKAq2PhBEAiEAoA3%2BC92iDbZ0PLAV%2FkDyhuyDgiHf6mFtQi4f6%2FUD6t8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFJ3JNdow1997PCJ%2FircA0wfI85Ja%2F%2BeTp9M9shCzP6YIvio8KJgM853psihC%2FWXBn29vjy%2BK%2FsyFWliV0yREUcjFIENe2eZGLaYdckJskFB41QO0Tu%2F0BcNI%2FUazAgp%2F69jkqgO3JDJjap0HXUbFIWntVEByzIaXOfTMxVD2szn8GMPdHC3bMmV1RPDwUrZQANsdpAM%2Bmqn258xo9amDDX9%2BZehrP1%2FbA%2Bn79BK3pIASLiHYGhgi0%2BiDLtEEmW1Q2KuMnjllNASuBTVxHpMRmv3%2FrsEmaj0A%2BizAJ7kpHijvEn9FkrOqJ0yH8uGves4KbC1%2BifqQFMkXHNVHRI%2Fuzbz%2FwkH9MxTFZrIJSLDAJQES7EcAr6N2h7uDg7CrtbtR9EqEKmGrOlNP0lYVk1bOH19l68Pj822sn1Z%2BU%2FaaBshZsjFZdiZI8773omRANX%2FIzEsgGBiMnlOImOSCJTfNptXo09Zo9b2LA%2FaaBLIv7NMYZAVi06N1uNQYY7mtqY0p3WSPuqvmycRuNhrpRrWpWmpwy2YEXonYP6Zi0jVqy3wwvkyomdQd%2F9Vqex70qC7HeJEuo1IWb1qdlD853OFwahrfzSAlIXXckufkfe3wVfgIx%2BLfaxoSYfPjJe28P68bq%2B0JVqo50QDqJGHMOTfrL4GOqUBQ5zn3fn5VMrOge4xKNatGPxoBeOBJhtE1%2BG5nnu5ITaKi%2BgkTVvPZfp1VsBKi7cgp%2BUKE93yW5g9ERA7YOrEdIxUCTRPwIggW1fjHvCkZbOixhI8lykhpmv%2Bug8NIYyqbUxj5TrtM4R8sSG2EdTEac40w3H9EuxVqyJulc0KAEZUdswh3rKryTx0%2BBrdtkd6BgblZra2mCOVEGxzh1Mnsk59MZJw&X-Amz-Signature=e665dd1fcab4d909c31a01241b509ef5c52107eb89b5e2c8e458433008000225&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLEJU3MX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICMtqDeBYNapc920j%2F68BYxrqhX6ciLL9kwqKAq2PhBEAiEAoA3%2BC92iDbZ0PLAV%2FkDyhuyDgiHf6mFtQi4f6%2FUD6t8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFJ3JNdow1997PCJ%2FircA0wfI85Ja%2F%2BeTp9M9shCzP6YIvio8KJgM853psihC%2FWXBn29vjy%2BK%2FsyFWliV0yREUcjFIENe2eZGLaYdckJskFB41QO0Tu%2F0BcNI%2FUazAgp%2F69jkqgO3JDJjap0HXUbFIWntVEByzIaXOfTMxVD2szn8GMPdHC3bMmV1RPDwUrZQANsdpAM%2Bmqn258xo9amDDX9%2BZehrP1%2FbA%2Bn79BK3pIASLiHYGhgi0%2BiDLtEEmW1Q2KuMnjllNASuBTVxHpMRmv3%2FrsEmaj0A%2BizAJ7kpHijvEn9FkrOqJ0yH8uGves4KbC1%2BifqQFMkXHNVHRI%2Fuzbz%2FwkH9MxTFZrIJSLDAJQES7EcAr6N2h7uDg7CrtbtR9EqEKmGrOlNP0lYVk1bOH19l68Pj822sn1Z%2BU%2FaaBshZsjFZdiZI8773omRANX%2FIzEsgGBiMnlOImOSCJTfNptXo09Zo9b2LA%2FaaBLIv7NMYZAVi06N1uNQYY7mtqY0p3WSPuqvmycRuNhrpRrWpWmpwy2YEXonYP6Zi0jVqy3wwvkyomdQd%2F9Vqex70qC7HeJEuo1IWb1qdlD853OFwahrfzSAlIXXckufkfe3wVfgIx%2BLfaxoSYfPjJe28P68bq%2B0JVqo50QDqJGHMOTfrL4GOqUBQ5zn3fn5VMrOge4xKNatGPxoBeOBJhtE1%2BG5nnu5ITaKi%2BgkTVvPZfp1VsBKi7cgp%2BUKE93yW5g9ERA7YOrEdIxUCTRPwIggW1fjHvCkZbOixhI8lykhpmv%2Bug8NIYyqbUxj5TrtM4R8sSG2EdTEac40w3H9EuxVqyJulc0KAEZUdswh3rKryTx0%2BBrdtkd6BgblZra2mCOVEGxzh1Mnsk59MZJw&X-Amz-Signature=43e6ce4c511942eda5bbba89b6a98aef616fe0bab12f843672cb76fb3d4cd8cc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLEJU3MX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICMtqDeBYNapc920j%2F68BYxrqhX6ciLL9kwqKAq2PhBEAiEAoA3%2BC92iDbZ0PLAV%2FkDyhuyDgiHf6mFtQi4f6%2FUD6t8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFJ3JNdow1997PCJ%2FircA0wfI85Ja%2F%2BeTp9M9shCzP6YIvio8KJgM853psihC%2FWXBn29vjy%2BK%2FsyFWliV0yREUcjFIENe2eZGLaYdckJskFB41QO0Tu%2F0BcNI%2FUazAgp%2F69jkqgO3JDJjap0HXUbFIWntVEByzIaXOfTMxVD2szn8GMPdHC3bMmV1RPDwUrZQANsdpAM%2Bmqn258xo9amDDX9%2BZehrP1%2FbA%2Bn79BK3pIASLiHYGhgi0%2BiDLtEEmW1Q2KuMnjllNASuBTVxHpMRmv3%2FrsEmaj0A%2BizAJ7kpHijvEn9FkrOqJ0yH8uGves4KbC1%2BifqQFMkXHNVHRI%2Fuzbz%2FwkH9MxTFZrIJSLDAJQES7EcAr6N2h7uDg7CrtbtR9EqEKmGrOlNP0lYVk1bOH19l68Pj822sn1Z%2BU%2FaaBshZsjFZdiZI8773omRANX%2FIzEsgGBiMnlOImOSCJTfNptXo09Zo9b2LA%2FaaBLIv7NMYZAVi06N1uNQYY7mtqY0p3WSPuqvmycRuNhrpRrWpWmpwy2YEXonYP6Zi0jVqy3wwvkyomdQd%2F9Vqex70qC7HeJEuo1IWb1qdlD853OFwahrfzSAlIXXckufkfe3wVfgIx%2BLfaxoSYfPjJe28P68bq%2B0JVqo50QDqJGHMOTfrL4GOqUBQ5zn3fn5VMrOge4xKNatGPxoBeOBJhtE1%2BG5nnu5ITaKi%2BgkTVvPZfp1VsBKi7cgp%2BUKE93yW5g9ERA7YOrEdIxUCTRPwIggW1fjHvCkZbOixhI8lykhpmv%2Bug8NIYyqbUxj5TrtM4R8sSG2EdTEac40w3H9EuxVqyJulc0KAEZUdswh3rKryTx0%2BBrdtkd6BgblZra2mCOVEGxzh1Mnsk59MZJw&X-Amz-Signature=72e7854532300bd73358993fdea1cfae12b93be2eb59a166d8b7eb4c190e5846&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLEJU3MX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICMtqDeBYNapc920j%2F68BYxrqhX6ciLL9kwqKAq2PhBEAiEAoA3%2BC92iDbZ0PLAV%2FkDyhuyDgiHf6mFtQi4f6%2FUD6t8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFJ3JNdow1997PCJ%2FircA0wfI85Ja%2F%2BeTp9M9shCzP6YIvio8KJgM853psihC%2FWXBn29vjy%2BK%2FsyFWliV0yREUcjFIENe2eZGLaYdckJskFB41QO0Tu%2F0BcNI%2FUazAgp%2F69jkqgO3JDJjap0HXUbFIWntVEByzIaXOfTMxVD2szn8GMPdHC3bMmV1RPDwUrZQANsdpAM%2Bmqn258xo9amDDX9%2BZehrP1%2FbA%2Bn79BK3pIASLiHYGhgi0%2BiDLtEEmW1Q2KuMnjllNASuBTVxHpMRmv3%2FrsEmaj0A%2BizAJ7kpHijvEn9FkrOqJ0yH8uGves4KbC1%2BifqQFMkXHNVHRI%2Fuzbz%2FwkH9MxTFZrIJSLDAJQES7EcAr6N2h7uDg7CrtbtR9EqEKmGrOlNP0lYVk1bOH19l68Pj822sn1Z%2BU%2FaaBshZsjFZdiZI8773omRANX%2FIzEsgGBiMnlOImOSCJTfNptXo09Zo9b2LA%2FaaBLIv7NMYZAVi06N1uNQYY7mtqY0p3WSPuqvmycRuNhrpRrWpWmpwy2YEXonYP6Zi0jVqy3wwvkyomdQd%2F9Vqex70qC7HeJEuo1IWb1qdlD853OFwahrfzSAlIXXckufkfe3wVfgIx%2BLfaxoSYfPjJe28P68bq%2B0JVqo50QDqJGHMOTfrL4GOqUBQ5zn3fn5VMrOge4xKNatGPxoBeOBJhtE1%2BG5nnu5ITaKi%2BgkTVvPZfp1VsBKi7cgp%2BUKE93yW5g9ERA7YOrEdIxUCTRPwIggW1fjHvCkZbOixhI8lykhpmv%2Bug8NIYyqbUxj5TrtM4R8sSG2EdTEac40w3H9EuxVqyJulc0KAEZUdswh3rKryTx0%2BBrdtkd6BgblZra2mCOVEGxzh1Mnsk59MZJw&X-Amz-Signature=47eeb570aff84ea312906ebda0ff5a1834c15d3857077ab176d8a8a791717013&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLEJU3MX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICMtqDeBYNapc920j%2F68BYxrqhX6ciLL9kwqKAq2PhBEAiEAoA3%2BC92iDbZ0PLAV%2FkDyhuyDgiHf6mFtQi4f6%2FUD6t8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFJ3JNdow1997PCJ%2FircA0wfI85Ja%2F%2BeTp9M9shCzP6YIvio8KJgM853psihC%2FWXBn29vjy%2BK%2FsyFWliV0yREUcjFIENe2eZGLaYdckJskFB41QO0Tu%2F0BcNI%2FUazAgp%2F69jkqgO3JDJjap0HXUbFIWntVEByzIaXOfTMxVD2szn8GMPdHC3bMmV1RPDwUrZQANsdpAM%2Bmqn258xo9amDDX9%2BZehrP1%2FbA%2Bn79BK3pIASLiHYGhgi0%2BiDLtEEmW1Q2KuMnjllNASuBTVxHpMRmv3%2FrsEmaj0A%2BizAJ7kpHijvEn9FkrOqJ0yH8uGves4KbC1%2BifqQFMkXHNVHRI%2Fuzbz%2FwkH9MxTFZrIJSLDAJQES7EcAr6N2h7uDg7CrtbtR9EqEKmGrOlNP0lYVk1bOH19l68Pj822sn1Z%2BU%2FaaBshZsjFZdiZI8773omRANX%2FIzEsgGBiMnlOImOSCJTfNptXo09Zo9b2LA%2FaaBLIv7NMYZAVi06N1uNQYY7mtqY0p3WSPuqvmycRuNhrpRrWpWmpwy2YEXonYP6Zi0jVqy3wwvkyomdQd%2F9Vqex70qC7HeJEuo1IWb1qdlD853OFwahrfzSAlIXXckufkfe3wVfgIx%2BLfaxoSYfPjJe28P68bq%2B0JVqo50QDqJGHMOTfrL4GOqUBQ5zn3fn5VMrOge4xKNatGPxoBeOBJhtE1%2BG5nnu5ITaKi%2BgkTVvPZfp1VsBKi7cgp%2BUKE93yW5g9ERA7YOrEdIxUCTRPwIggW1fjHvCkZbOixhI8lykhpmv%2Bug8NIYyqbUxj5TrtM4R8sSG2EdTEac40w3H9EuxVqyJulc0KAEZUdswh3rKryTx0%2BBrdtkd6BgblZra2mCOVEGxzh1Mnsk59MZJw&X-Amz-Signature=9ebe6f0c23525745276f3471895aeb3b32d6182aef9a2f3a1c7636043a3fcac4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLEJU3MX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICMtqDeBYNapc920j%2F68BYxrqhX6ciLL9kwqKAq2PhBEAiEAoA3%2BC92iDbZ0PLAV%2FkDyhuyDgiHf6mFtQi4f6%2FUD6t8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFJ3JNdow1997PCJ%2FircA0wfI85Ja%2F%2BeTp9M9shCzP6YIvio8KJgM853psihC%2FWXBn29vjy%2BK%2FsyFWliV0yREUcjFIENe2eZGLaYdckJskFB41QO0Tu%2F0BcNI%2FUazAgp%2F69jkqgO3JDJjap0HXUbFIWntVEByzIaXOfTMxVD2szn8GMPdHC3bMmV1RPDwUrZQANsdpAM%2Bmqn258xo9amDDX9%2BZehrP1%2FbA%2Bn79BK3pIASLiHYGhgi0%2BiDLtEEmW1Q2KuMnjllNASuBTVxHpMRmv3%2FrsEmaj0A%2BizAJ7kpHijvEn9FkrOqJ0yH8uGves4KbC1%2BifqQFMkXHNVHRI%2Fuzbz%2FwkH9MxTFZrIJSLDAJQES7EcAr6N2h7uDg7CrtbtR9EqEKmGrOlNP0lYVk1bOH19l68Pj822sn1Z%2BU%2FaaBshZsjFZdiZI8773omRANX%2FIzEsgGBiMnlOImOSCJTfNptXo09Zo9b2LA%2FaaBLIv7NMYZAVi06N1uNQYY7mtqY0p3WSPuqvmycRuNhrpRrWpWmpwy2YEXonYP6Zi0jVqy3wwvkyomdQd%2F9Vqex70qC7HeJEuo1IWb1qdlD853OFwahrfzSAlIXXckufkfe3wVfgIx%2BLfaxoSYfPjJe28P68bq%2B0JVqo50QDqJGHMOTfrL4GOqUBQ5zn3fn5VMrOge4xKNatGPxoBeOBJhtE1%2BG5nnu5ITaKi%2BgkTVvPZfp1VsBKi7cgp%2BUKE93yW5g9ERA7YOrEdIxUCTRPwIggW1fjHvCkZbOixhI8lykhpmv%2Bug8NIYyqbUxj5TrtM4R8sSG2EdTEac40w3H9EuxVqyJulc0KAEZUdswh3rKryTx0%2BBrdtkd6BgblZra2mCOVEGxzh1Mnsk59MZJw&X-Amz-Signature=4f50d4b3cd1365e2bf710f8fa82b91ec3124f89a315f65d6835b6f9b4c7e470b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
