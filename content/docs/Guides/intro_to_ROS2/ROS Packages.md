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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFDGTUR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDKdnXJyk1MFkOX2Vq7OfecRweff5gJ9rB%2FKmkp7LZNAiEApSBZREekR%2FRAjZAuIF2qwpe%2FkGwMu9Tqy02uX%2BD6s3Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOSOtPrXBLJSbpnhFyrcA4g4kdUayayTP3Z3ZTrccU3JtxzwquMppuk6%2FxPbqrcjbqoXVHReL1TbiJcCQxgWv%2B1UwfKBB%2FmdHtp1%2BMJw%2Fw5oU6EONUEKh2zUTMdYC4hwqepzk5XzmczOAaO4GByobzXXmau4gxJ2TnJz4ZSxYgw%2B8JDaqt6uEGvK2TUcuU26mzrs3LkyvpQb3lBK0W7PHCqSrw8dtEbl4MqOyWK8IvPJtmu%2B9QDK89p0%2B7iBI%2FSF8%2BwJSuovAhbHhIRDbP3ob%2FWCwaz2g126%2FE4YN%2Bv3oFP2GE5fJR9M4UCu4EhdzAkOltooS5oe2y5e8cpJ1IHiDm538tVrGFQo6MMwAv4t6iNJXpI3tN24VAKJoOjkkkYSlsbHmrEmViVdCewlwQSGCj1%2BR7i9bn1i9rt3wlDykTnFEgI6B95BMuTjxoIW19scCSKyOR43JG8FtzjLrLC%2BlNMWMbN8TPzOUQG4tbe240W4mjtL%2B3rWeBAcoYFjj1eREx6TAP2y6Kyd9yqzb1eEkc0qdMEJxeKztNp40J%2FX3MNWafI3EcNGUvcFw4VsJCucW2Ic1XztmAUsyxnMH5YIKm%2BLTsmHIF56LHwX9KDaDy1eHg7kAuWGtksJ0%2FMahc67DDnJzVE0kdQNAY7sMNm8078GOqUB3po1uMLYc2L6YG1IeazSYpiRz2agwMze5I9UvnpDIyE%2F1arYf76EiRH3TUQrS1c0tznaPSm6LhSluuUBOUANIgiEUG6CVTeaCEFz%2BwAEH5bbTad3DJnsP3wwfvm9yTI91JLrq3DNyxu9ck1WdiOOyootr6QYr9jgO4%2B3mf7VfBnaUTG7ZNlfDfl%2BwUHSrjBUPLuPMzzfmgx7Ip1UMT44wwdpfBZW&X-Amz-Signature=afae94877c6f01b983835a20c5b7877c5ca7bddb8c9692e2fd98f588604c3c77&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFDGTUR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDKdnXJyk1MFkOX2Vq7OfecRweff5gJ9rB%2FKmkp7LZNAiEApSBZREekR%2FRAjZAuIF2qwpe%2FkGwMu9Tqy02uX%2BD6s3Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOSOtPrXBLJSbpnhFyrcA4g4kdUayayTP3Z3ZTrccU3JtxzwquMppuk6%2FxPbqrcjbqoXVHReL1TbiJcCQxgWv%2B1UwfKBB%2FmdHtp1%2BMJw%2Fw5oU6EONUEKh2zUTMdYC4hwqepzk5XzmczOAaO4GByobzXXmau4gxJ2TnJz4ZSxYgw%2B8JDaqt6uEGvK2TUcuU26mzrs3LkyvpQb3lBK0W7PHCqSrw8dtEbl4MqOyWK8IvPJtmu%2B9QDK89p0%2B7iBI%2FSF8%2BwJSuovAhbHhIRDbP3ob%2FWCwaz2g126%2FE4YN%2Bv3oFP2GE5fJR9M4UCu4EhdzAkOltooS5oe2y5e8cpJ1IHiDm538tVrGFQo6MMwAv4t6iNJXpI3tN24VAKJoOjkkkYSlsbHmrEmViVdCewlwQSGCj1%2BR7i9bn1i9rt3wlDykTnFEgI6B95BMuTjxoIW19scCSKyOR43JG8FtzjLrLC%2BlNMWMbN8TPzOUQG4tbe240W4mjtL%2B3rWeBAcoYFjj1eREx6TAP2y6Kyd9yqzb1eEkc0qdMEJxeKztNp40J%2FX3MNWafI3EcNGUvcFw4VsJCucW2Ic1XztmAUsyxnMH5YIKm%2BLTsmHIF56LHwX9KDaDy1eHg7kAuWGtksJ0%2FMahc67DDnJzVE0kdQNAY7sMNm8078GOqUB3po1uMLYc2L6YG1IeazSYpiRz2agwMze5I9UvnpDIyE%2F1arYf76EiRH3TUQrS1c0tznaPSm6LhSluuUBOUANIgiEUG6CVTeaCEFz%2BwAEH5bbTad3DJnsP3wwfvm9yTI91JLrq3DNyxu9ck1WdiOOyootr6QYr9jgO4%2B3mf7VfBnaUTG7ZNlfDfl%2BwUHSrjBUPLuPMzzfmgx7Ip1UMT44wwdpfBZW&X-Amz-Signature=07c14694e901c65df029971f6edbcd44c20596d74bfad3cea73ab5966f085d99&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFDGTUR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDKdnXJyk1MFkOX2Vq7OfecRweff5gJ9rB%2FKmkp7LZNAiEApSBZREekR%2FRAjZAuIF2qwpe%2FkGwMu9Tqy02uX%2BD6s3Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOSOtPrXBLJSbpnhFyrcA4g4kdUayayTP3Z3ZTrccU3JtxzwquMppuk6%2FxPbqrcjbqoXVHReL1TbiJcCQxgWv%2B1UwfKBB%2FmdHtp1%2BMJw%2Fw5oU6EONUEKh2zUTMdYC4hwqepzk5XzmczOAaO4GByobzXXmau4gxJ2TnJz4ZSxYgw%2B8JDaqt6uEGvK2TUcuU26mzrs3LkyvpQb3lBK0W7PHCqSrw8dtEbl4MqOyWK8IvPJtmu%2B9QDK89p0%2B7iBI%2FSF8%2BwJSuovAhbHhIRDbP3ob%2FWCwaz2g126%2FE4YN%2Bv3oFP2GE5fJR9M4UCu4EhdzAkOltooS5oe2y5e8cpJ1IHiDm538tVrGFQo6MMwAv4t6iNJXpI3tN24VAKJoOjkkkYSlsbHmrEmViVdCewlwQSGCj1%2BR7i9bn1i9rt3wlDykTnFEgI6B95BMuTjxoIW19scCSKyOR43JG8FtzjLrLC%2BlNMWMbN8TPzOUQG4tbe240W4mjtL%2B3rWeBAcoYFjj1eREx6TAP2y6Kyd9yqzb1eEkc0qdMEJxeKztNp40J%2FX3MNWafI3EcNGUvcFw4VsJCucW2Ic1XztmAUsyxnMH5YIKm%2BLTsmHIF56LHwX9KDaDy1eHg7kAuWGtksJ0%2FMahc67DDnJzVE0kdQNAY7sMNm8078GOqUB3po1uMLYc2L6YG1IeazSYpiRz2agwMze5I9UvnpDIyE%2F1arYf76EiRH3TUQrS1c0tznaPSm6LhSluuUBOUANIgiEUG6CVTeaCEFz%2BwAEH5bbTad3DJnsP3wwfvm9yTI91JLrq3DNyxu9ck1WdiOOyootr6QYr9jgO4%2B3mf7VfBnaUTG7ZNlfDfl%2BwUHSrjBUPLuPMzzfmgx7Ip1UMT44wwdpfBZW&X-Amz-Signature=20cc1e5a993c32d6588e6cdbd3e7c0616a8df2fbfaa88842315523f63b45e467&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFDGTUR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDKdnXJyk1MFkOX2Vq7OfecRweff5gJ9rB%2FKmkp7LZNAiEApSBZREekR%2FRAjZAuIF2qwpe%2FkGwMu9Tqy02uX%2BD6s3Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOSOtPrXBLJSbpnhFyrcA4g4kdUayayTP3Z3ZTrccU3JtxzwquMppuk6%2FxPbqrcjbqoXVHReL1TbiJcCQxgWv%2B1UwfKBB%2FmdHtp1%2BMJw%2Fw5oU6EONUEKh2zUTMdYC4hwqepzk5XzmczOAaO4GByobzXXmau4gxJ2TnJz4ZSxYgw%2B8JDaqt6uEGvK2TUcuU26mzrs3LkyvpQb3lBK0W7PHCqSrw8dtEbl4MqOyWK8IvPJtmu%2B9QDK89p0%2B7iBI%2FSF8%2BwJSuovAhbHhIRDbP3ob%2FWCwaz2g126%2FE4YN%2Bv3oFP2GE5fJR9M4UCu4EhdzAkOltooS5oe2y5e8cpJ1IHiDm538tVrGFQo6MMwAv4t6iNJXpI3tN24VAKJoOjkkkYSlsbHmrEmViVdCewlwQSGCj1%2BR7i9bn1i9rt3wlDykTnFEgI6B95BMuTjxoIW19scCSKyOR43JG8FtzjLrLC%2BlNMWMbN8TPzOUQG4tbe240W4mjtL%2B3rWeBAcoYFjj1eREx6TAP2y6Kyd9yqzb1eEkc0qdMEJxeKztNp40J%2FX3MNWafI3EcNGUvcFw4VsJCucW2Ic1XztmAUsyxnMH5YIKm%2BLTsmHIF56LHwX9KDaDy1eHg7kAuWGtksJ0%2FMahc67DDnJzVE0kdQNAY7sMNm8078GOqUB3po1uMLYc2L6YG1IeazSYpiRz2agwMze5I9UvnpDIyE%2F1arYf76EiRH3TUQrS1c0tznaPSm6LhSluuUBOUANIgiEUG6CVTeaCEFz%2BwAEH5bbTad3DJnsP3wwfvm9yTI91JLrq3DNyxu9ck1WdiOOyootr6QYr9jgO4%2B3mf7VfBnaUTG7ZNlfDfl%2BwUHSrjBUPLuPMzzfmgx7Ip1UMT44wwdpfBZW&X-Amz-Signature=7cb12e5194eaf20e150575022edd484e1e39d9ec0845a04446cf3fa1f3055391&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFDGTUR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDKdnXJyk1MFkOX2Vq7OfecRweff5gJ9rB%2FKmkp7LZNAiEApSBZREekR%2FRAjZAuIF2qwpe%2FkGwMu9Tqy02uX%2BD6s3Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOSOtPrXBLJSbpnhFyrcA4g4kdUayayTP3Z3ZTrccU3JtxzwquMppuk6%2FxPbqrcjbqoXVHReL1TbiJcCQxgWv%2B1UwfKBB%2FmdHtp1%2BMJw%2Fw5oU6EONUEKh2zUTMdYC4hwqepzk5XzmczOAaO4GByobzXXmau4gxJ2TnJz4ZSxYgw%2B8JDaqt6uEGvK2TUcuU26mzrs3LkyvpQb3lBK0W7PHCqSrw8dtEbl4MqOyWK8IvPJtmu%2B9QDK89p0%2B7iBI%2FSF8%2BwJSuovAhbHhIRDbP3ob%2FWCwaz2g126%2FE4YN%2Bv3oFP2GE5fJR9M4UCu4EhdzAkOltooS5oe2y5e8cpJ1IHiDm538tVrGFQo6MMwAv4t6iNJXpI3tN24VAKJoOjkkkYSlsbHmrEmViVdCewlwQSGCj1%2BR7i9bn1i9rt3wlDykTnFEgI6B95BMuTjxoIW19scCSKyOR43JG8FtzjLrLC%2BlNMWMbN8TPzOUQG4tbe240W4mjtL%2B3rWeBAcoYFjj1eREx6TAP2y6Kyd9yqzb1eEkc0qdMEJxeKztNp40J%2FX3MNWafI3EcNGUvcFw4VsJCucW2Ic1XztmAUsyxnMH5YIKm%2BLTsmHIF56LHwX9KDaDy1eHg7kAuWGtksJ0%2FMahc67DDnJzVE0kdQNAY7sMNm8078GOqUB3po1uMLYc2L6YG1IeazSYpiRz2agwMze5I9UvnpDIyE%2F1arYf76EiRH3TUQrS1c0tznaPSm6LhSluuUBOUANIgiEUG6CVTeaCEFz%2BwAEH5bbTad3DJnsP3wwfvm9yTI91JLrq3DNyxu9ck1WdiOOyootr6QYr9jgO4%2B3mf7VfBnaUTG7ZNlfDfl%2BwUHSrjBUPLuPMzzfmgx7Ip1UMT44wwdpfBZW&X-Amz-Signature=995766ea07addada956c73217fa6eda5cfedf7ed66a00bcb6cf90fbfee0aa01a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFDGTUR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDKdnXJyk1MFkOX2Vq7OfecRweff5gJ9rB%2FKmkp7LZNAiEApSBZREekR%2FRAjZAuIF2qwpe%2FkGwMu9Tqy02uX%2BD6s3Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOSOtPrXBLJSbpnhFyrcA4g4kdUayayTP3Z3ZTrccU3JtxzwquMppuk6%2FxPbqrcjbqoXVHReL1TbiJcCQxgWv%2B1UwfKBB%2FmdHtp1%2BMJw%2Fw5oU6EONUEKh2zUTMdYC4hwqepzk5XzmczOAaO4GByobzXXmau4gxJ2TnJz4ZSxYgw%2B8JDaqt6uEGvK2TUcuU26mzrs3LkyvpQb3lBK0W7PHCqSrw8dtEbl4MqOyWK8IvPJtmu%2B9QDK89p0%2B7iBI%2FSF8%2BwJSuovAhbHhIRDbP3ob%2FWCwaz2g126%2FE4YN%2Bv3oFP2GE5fJR9M4UCu4EhdzAkOltooS5oe2y5e8cpJ1IHiDm538tVrGFQo6MMwAv4t6iNJXpI3tN24VAKJoOjkkkYSlsbHmrEmViVdCewlwQSGCj1%2BR7i9bn1i9rt3wlDykTnFEgI6B95BMuTjxoIW19scCSKyOR43JG8FtzjLrLC%2BlNMWMbN8TPzOUQG4tbe240W4mjtL%2B3rWeBAcoYFjj1eREx6TAP2y6Kyd9yqzb1eEkc0qdMEJxeKztNp40J%2FX3MNWafI3EcNGUvcFw4VsJCucW2Ic1XztmAUsyxnMH5YIKm%2BLTsmHIF56LHwX9KDaDy1eHg7kAuWGtksJ0%2FMahc67DDnJzVE0kdQNAY7sMNm8078GOqUB3po1uMLYc2L6YG1IeazSYpiRz2agwMze5I9UvnpDIyE%2F1arYf76EiRH3TUQrS1c0tznaPSm6LhSluuUBOUANIgiEUG6CVTeaCEFz%2BwAEH5bbTad3DJnsP3wwfvm9yTI91JLrq3DNyxu9ck1WdiOOyootr6QYr9jgO4%2B3mf7VfBnaUTG7ZNlfDfl%2BwUHSrjBUPLuPMzzfmgx7Ip1UMT44wwdpfBZW&X-Amz-Signature=8ff952accaf1cbcc8f7c2391c3211fa4957185faba134276b123a17affbb568a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFDGTUR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDKdnXJyk1MFkOX2Vq7OfecRweff5gJ9rB%2FKmkp7LZNAiEApSBZREekR%2FRAjZAuIF2qwpe%2FkGwMu9Tqy02uX%2BD6s3Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOSOtPrXBLJSbpnhFyrcA4g4kdUayayTP3Z3ZTrccU3JtxzwquMppuk6%2FxPbqrcjbqoXVHReL1TbiJcCQxgWv%2B1UwfKBB%2FmdHtp1%2BMJw%2Fw5oU6EONUEKh2zUTMdYC4hwqepzk5XzmczOAaO4GByobzXXmau4gxJ2TnJz4ZSxYgw%2B8JDaqt6uEGvK2TUcuU26mzrs3LkyvpQb3lBK0W7PHCqSrw8dtEbl4MqOyWK8IvPJtmu%2B9QDK89p0%2B7iBI%2FSF8%2BwJSuovAhbHhIRDbP3ob%2FWCwaz2g126%2FE4YN%2Bv3oFP2GE5fJR9M4UCu4EhdzAkOltooS5oe2y5e8cpJ1IHiDm538tVrGFQo6MMwAv4t6iNJXpI3tN24VAKJoOjkkkYSlsbHmrEmViVdCewlwQSGCj1%2BR7i9bn1i9rt3wlDykTnFEgI6B95BMuTjxoIW19scCSKyOR43JG8FtzjLrLC%2BlNMWMbN8TPzOUQG4tbe240W4mjtL%2B3rWeBAcoYFjj1eREx6TAP2y6Kyd9yqzb1eEkc0qdMEJxeKztNp40J%2FX3MNWafI3EcNGUvcFw4VsJCucW2Ic1XztmAUsyxnMH5YIKm%2BLTsmHIF56LHwX9KDaDy1eHg7kAuWGtksJ0%2FMahc67DDnJzVE0kdQNAY7sMNm8078GOqUB3po1uMLYc2L6YG1IeazSYpiRz2agwMze5I9UvnpDIyE%2F1arYf76EiRH3TUQrS1c0tznaPSm6LhSluuUBOUANIgiEUG6CVTeaCEFz%2BwAEH5bbTad3DJnsP3wwfvm9yTI91JLrq3DNyxu9ck1WdiOOyootr6QYr9jgO4%2B3mf7VfBnaUTG7ZNlfDfl%2BwUHSrjBUPLuPMzzfmgx7Ip1UMT44wwdpfBZW&X-Amz-Signature=9259afae6a6d86036a61e512f0d6d41355e33572b796fd556a2be8aec9749ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
