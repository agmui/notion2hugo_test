---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDKILTL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCBkLlK9TMDErK3l0yBLmTmB19jeVNjLNDcNNYV4HG%2FrwIhAMzNdoQA%2Bf1wckzKVLSPLF6BZpIhZ9SpH7vGDZo4LyLnKv8DCHMQABoMNjM3NDIzMTgzODA1IgzCbippEIbBh1CZG04q3APnrcdrZJLKsuxpOFni%2Bf67dGBPkC%2FRhsnLZi%2F6nEa9MhliGG%2BKZnqAbvWKyFxRFAAwn4%2B5J4qq0crVnjNK%2BuSEX%2Fc%2Bz6HZDNlmdJHBQpYR0Kj6CQja4YMaDxt%2BcJ%2FxWhYk1%2B%2Fr%2BrShdrY3QgOSl69SGEgKsEp%2BDDHZWxig6Asr3AP2xfbVlKWy39kxy3A5HB1H7%2FdpHJTYeD2lMEH4N0lBtrCkZca%2BwdY2vGkkWf0Otz3VbBmm6oTgFL7BQqVzbWs1PfLlprgueCBFO8dhgJ%2FO67KIqi8Dn7KV43N2NrWO3cidwoE9%2Fj%2BD77oyXjaVXJYbJxyhGUPXKV91W98Ukf2XYnyzlU65y2Cy0gyYbC3fWwbWt%2BWuoVYdsLrxhbBop1u3Id97IG%2BrkGU%2BCbNFRFOYVLe59W3htzisSCLsB9kJL66AA2dg6%2BLMQjCrWg67ydk4Gl0opB9vmufirfSwI%2Fjsz9c5yhsRTCkSryk0JbjIzv2KRMPHh%2B6qQtaVmogkIrScqBTlprjZtXXPxWYJ8h7tqqJZ2VTN2lXRkiaJ%2B6%2B7FogQfXqmwpIUiBkGHQgBgLIKFR%2F2n65kOMkOAT40QzNKFZHHcVFLhppbiJufYWbzY4HvBRR1gPnywddaAjDluK7DBjqkAdxO%2BKzM3rLXyginTv885yl0YM92wZtjJUFmNHDHqOyPIxXFQEJ0qBfu9vxf6R4N3SyaXiIssxpahh5WtbAv3KsD1OIjGRq2Jh3tsQ27jIOYE3FxpAQo4frsi%2F94qe1BhCHctcPOAV52CyGR6kWs219Zp2OLv6Pf82JNbhp1baX3OPSYxaRSRbth3fcV7Cpc25RtF8ugnhiP0iRsu9Jp303SckuA&X-Amz-Signature=509a403548ea4e894274c80727c253f9e9c2e2076aa7b2f3f2255e981f1a1f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDKILTL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCBkLlK9TMDErK3l0yBLmTmB19jeVNjLNDcNNYV4HG%2FrwIhAMzNdoQA%2Bf1wckzKVLSPLF6BZpIhZ9SpH7vGDZo4LyLnKv8DCHMQABoMNjM3NDIzMTgzODA1IgzCbippEIbBh1CZG04q3APnrcdrZJLKsuxpOFni%2Bf67dGBPkC%2FRhsnLZi%2F6nEa9MhliGG%2BKZnqAbvWKyFxRFAAwn4%2B5J4qq0crVnjNK%2BuSEX%2Fc%2Bz6HZDNlmdJHBQpYR0Kj6CQja4YMaDxt%2BcJ%2FxWhYk1%2B%2Fr%2BrShdrY3QgOSl69SGEgKsEp%2BDDHZWxig6Asr3AP2xfbVlKWy39kxy3A5HB1H7%2FdpHJTYeD2lMEH4N0lBtrCkZca%2BwdY2vGkkWf0Otz3VbBmm6oTgFL7BQqVzbWs1PfLlprgueCBFO8dhgJ%2FO67KIqi8Dn7KV43N2NrWO3cidwoE9%2Fj%2BD77oyXjaVXJYbJxyhGUPXKV91W98Ukf2XYnyzlU65y2Cy0gyYbC3fWwbWt%2BWuoVYdsLrxhbBop1u3Id97IG%2BrkGU%2BCbNFRFOYVLe59W3htzisSCLsB9kJL66AA2dg6%2BLMQjCrWg67ydk4Gl0opB9vmufirfSwI%2Fjsz9c5yhsRTCkSryk0JbjIzv2KRMPHh%2B6qQtaVmogkIrScqBTlprjZtXXPxWYJ8h7tqqJZ2VTN2lXRkiaJ%2B6%2B7FogQfXqmwpIUiBkGHQgBgLIKFR%2F2n65kOMkOAT40QzNKFZHHcVFLhppbiJufYWbzY4HvBRR1gPnywddaAjDluK7DBjqkAdxO%2BKzM3rLXyginTv885yl0YM92wZtjJUFmNHDHqOyPIxXFQEJ0qBfu9vxf6R4N3SyaXiIssxpahh5WtbAv3KsD1OIjGRq2Jh3tsQ27jIOYE3FxpAQo4frsi%2F94qe1BhCHctcPOAV52CyGR6kWs219Zp2OLv6Pf82JNbhp1baX3OPSYxaRSRbth3fcV7Cpc25RtF8ugnhiP0iRsu9Jp303SckuA&X-Amz-Signature=ae082f60ee23865ca598b91a9741a9c435fafa0a90e7d823656414ed73cb7799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDKILTL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCBkLlK9TMDErK3l0yBLmTmB19jeVNjLNDcNNYV4HG%2FrwIhAMzNdoQA%2Bf1wckzKVLSPLF6BZpIhZ9SpH7vGDZo4LyLnKv8DCHMQABoMNjM3NDIzMTgzODA1IgzCbippEIbBh1CZG04q3APnrcdrZJLKsuxpOFni%2Bf67dGBPkC%2FRhsnLZi%2F6nEa9MhliGG%2BKZnqAbvWKyFxRFAAwn4%2B5J4qq0crVnjNK%2BuSEX%2Fc%2Bz6HZDNlmdJHBQpYR0Kj6CQja4YMaDxt%2BcJ%2FxWhYk1%2B%2Fr%2BrShdrY3QgOSl69SGEgKsEp%2BDDHZWxig6Asr3AP2xfbVlKWy39kxy3A5HB1H7%2FdpHJTYeD2lMEH4N0lBtrCkZca%2BwdY2vGkkWf0Otz3VbBmm6oTgFL7BQqVzbWs1PfLlprgueCBFO8dhgJ%2FO67KIqi8Dn7KV43N2NrWO3cidwoE9%2Fj%2BD77oyXjaVXJYbJxyhGUPXKV91W98Ukf2XYnyzlU65y2Cy0gyYbC3fWwbWt%2BWuoVYdsLrxhbBop1u3Id97IG%2BrkGU%2BCbNFRFOYVLe59W3htzisSCLsB9kJL66AA2dg6%2BLMQjCrWg67ydk4Gl0opB9vmufirfSwI%2Fjsz9c5yhsRTCkSryk0JbjIzv2KRMPHh%2B6qQtaVmogkIrScqBTlprjZtXXPxWYJ8h7tqqJZ2VTN2lXRkiaJ%2B6%2B7FogQfXqmwpIUiBkGHQgBgLIKFR%2F2n65kOMkOAT40QzNKFZHHcVFLhppbiJufYWbzY4HvBRR1gPnywddaAjDluK7DBjqkAdxO%2BKzM3rLXyginTv885yl0YM92wZtjJUFmNHDHqOyPIxXFQEJ0qBfu9vxf6R4N3SyaXiIssxpahh5WtbAv3KsD1OIjGRq2Jh3tsQ27jIOYE3FxpAQo4frsi%2F94qe1BhCHctcPOAV52CyGR6kWs219Zp2OLv6Pf82JNbhp1baX3OPSYxaRSRbth3fcV7Cpc25RtF8ugnhiP0iRsu9Jp303SckuA&X-Amz-Signature=0812ae2c9b8ae6913bee677919a2fbcdee39d18cfe699f4851803f31603587da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDKILTL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCBkLlK9TMDErK3l0yBLmTmB19jeVNjLNDcNNYV4HG%2FrwIhAMzNdoQA%2Bf1wckzKVLSPLF6BZpIhZ9SpH7vGDZo4LyLnKv8DCHMQABoMNjM3NDIzMTgzODA1IgzCbippEIbBh1CZG04q3APnrcdrZJLKsuxpOFni%2Bf67dGBPkC%2FRhsnLZi%2F6nEa9MhliGG%2BKZnqAbvWKyFxRFAAwn4%2B5J4qq0crVnjNK%2BuSEX%2Fc%2Bz6HZDNlmdJHBQpYR0Kj6CQja4YMaDxt%2BcJ%2FxWhYk1%2B%2Fr%2BrShdrY3QgOSl69SGEgKsEp%2BDDHZWxig6Asr3AP2xfbVlKWy39kxy3A5HB1H7%2FdpHJTYeD2lMEH4N0lBtrCkZca%2BwdY2vGkkWf0Otz3VbBmm6oTgFL7BQqVzbWs1PfLlprgueCBFO8dhgJ%2FO67KIqi8Dn7KV43N2NrWO3cidwoE9%2Fj%2BD77oyXjaVXJYbJxyhGUPXKV91W98Ukf2XYnyzlU65y2Cy0gyYbC3fWwbWt%2BWuoVYdsLrxhbBop1u3Id97IG%2BrkGU%2BCbNFRFOYVLe59W3htzisSCLsB9kJL66AA2dg6%2BLMQjCrWg67ydk4Gl0opB9vmufirfSwI%2Fjsz9c5yhsRTCkSryk0JbjIzv2KRMPHh%2B6qQtaVmogkIrScqBTlprjZtXXPxWYJ8h7tqqJZ2VTN2lXRkiaJ%2B6%2B7FogQfXqmwpIUiBkGHQgBgLIKFR%2F2n65kOMkOAT40QzNKFZHHcVFLhppbiJufYWbzY4HvBRR1gPnywddaAjDluK7DBjqkAdxO%2BKzM3rLXyginTv885yl0YM92wZtjJUFmNHDHqOyPIxXFQEJ0qBfu9vxf6R4N3SyaXiIssxpahh5WtbAv3KsD1OIjGRq2Jh3tsQ27jIOYE3FxpAQo4frsi%2F94qe1BhCHctcPOAV52CyGR6kWs219Zp2OLv6Pf82JNbhp1baX3OPSYxaRSRbth3fcV7Cpc25RtF8ugnhiP0iRsu9Jp303SckuA&X-Amz-Signature=ed727c468a21f1a8a72498cc78d04e05f0b7feb78ddab5a8542aed0b2476df74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDKILTL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCBkLlK9TMDErK3l0yBLmTmB19jeVNjLNDcNNYV4HG%2FrwIhAMzNdoQA%2Bf1wckzKVLSPLF6BZpIhZ9SpH7vGDZo4LyLnKv8DCHMQABoMNjM3NDIzMTgzODA1IgzCbippEIbBh1CZG04q3APnrcdrZJLKsuxpOFni%2Bf67dGBPkC%2FRhsnLZi%2F6nEa9MhliGG%2BKZnqAbvWKyFxRFAAwn4%2B5J4qq0crVnjNK%2BuSEX%2Fc%2Bz6HZDNlmdJHBQpYR0Kj6CQja4YMaDxt%2BcJ%2FxWhYk1%2B%2Fr%2BrShdrY3QgOSl69SGEgKsEp%2BDDHZWxig6Asr3AP2xfbVlKWy39kxy3A5HB1H7%2FdpHJTYeD2lMEH4N0lBtrCkZca%2BwdY2vGkkWf0Otz3VbBmm6oTgFL7BQqVzbWs1PfLlprgueCBFO8dhgJ%2FO67KIqi8Dn7KV43N2NrWO3cidwoE9%2Fj%2BD77oyXjaVXJYbJxyhGUPXKV91W98Ukf2XYnyzlU65y2Cy0gyYbC3fWwbWt%2BWuoVYdsLrxhbBop1u3Id97IG%2BrkGU%2BCbNFRFOYVLe59W3htzisSCLsB9kJL66AA2dg6%2BLMQjCrWg67ydk4Gl0opB9vmufirfSwI%2Fjsz9c5yhsRTCkSryk0JbjIzv2KRMPHh%2B6qQtaVmogkIrScqBTlprjZtXXPxWYJ8h7tqqJZ2VTN2lXRkiaJ%2B6%2B7FogQfXqmwpIUiBkGHQgBgLIKFR%2F2n65kOMkOAT40QzNKFZHHcVFLhppbiJufYWbzY4HvBRR1gPnywddaAjDluK7DBjqkAdxO%2BKzM3rLXyginTv885yl0YM92wZtjJUFmNHDHqOyPIxXFQEJ0qBfu9vxf6R4N3SyaXiIssxpahh5WtbAv3KsD1OIjGRq2Jh3tsQ27jIOYE3FxpAQo4frsi%2F94qe1BhCHctcPOAV52CyGR6kWs219Zp2OLv6Pf82JNbhp1baX3OPSYxaRSRbth3fcV7Cpc25RtF8ugnhiP0iRsu9Jp303SckuA&X-Amz-Signature=657ed7e68d92c0fd00b8d456cd52f3f3d7209334c856f448b9f6562efbfb258c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDKILTL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCBkLlK9TMDErK3l0yBLmTmB19jeVNjLNDcNNYV4HG%2FrwIhAMzNdoQA%2Bf1wckzKVLSPLF6BZpIhZ9SpH7vGDZo4LyLnKv8DCHMQABoMNjM3NDIzMTgzODA1IgzCbippEIbBh1CZG04q3APnrcdrZJLKsuxpOFni%2Bf67dGBPkC%2FRhsnLZi%2F6nEa9MhliGG%2BKZnqAbvWKyFxRFAAwn4%2B5J4qq0crVnjNK%2BuSEX%2Fc%2Bz6HZDNlmdJHBQpYR0Kj6CQja4YMaDxt%2BcJ%2FxWhYk1%2B%2Fr%2BrShdrY3QgOSl69SGEgKsEp%2BDDHZWxig6Asr3AP2xfbVlKWy39kxy3A5HB1H7%2FdpHJTYeD2lMEH4N0lBtrCkZca%2BwdY2vGkkWf0Otz3VbBmm6oTgFL7BQqVzbWs1PfLlprgueCBFO8dhgJ%2FO67KIqi8Dn7KV43N2NrWO3cidwoE9%2Fj%2BD77oyXjaVXJYbJxyhGUPXKV91W98Ukf2XYnyzlU65y2Cy0gyYbC3fWwbWt%2BWuoVYdsLrxhbBop1u3Id97IG%2BrkGU%2BCbNFRFOYVLe59W3htzisSCLsB9kJL66AA2dg6%2BLMQjCrWg67ydk4Gl0opB9vmufirfSwI%2Fjsz9c5yhsRTCkSryk0JbjIzv2KRMPHh%2B6qQtaVmogkIrScqBTlprjZtXXPxWYJ8h7tqqJZ2VTN2lXRkiaJ%2B6%2B7FogQfXqmwpIUiBkGHQgBgLIKFR%2F2n65kOMkOAT40QzNKFZHHcVFLhppbiJufYWbzY4HvBRR1gPnywddaAjDluK7DBjqkAdxO%2BKzM3rLXyginTv885yl0YM92wZtjJUFmNHDHqOyPIxXFQEJ0qBfu9vxf6R4N3SyaXiIssxpahh5WtbAv3KsD1OIjGRq2Jh3tsQ27jIOYE3FxpAQo4frsi%2F94qe1BhCHctcPOAV52CyGR6kWs219Zp2OLv6Pf82JNbhp1baX3OPSYxaRSRbth3fcV7Cpc25RtF8ugnhiP0iRsu9Jp303SckuA&X-Amz-Signature=b7ce991c70d806f4191ba8da0611cca5090b602cc7967506ee2c5163b433c824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDKILTL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCBkLlK9TMDErK3l0yBLmTmB19jeVNjLNDcNNYV4HG%2FrwIhAMzNdoQA%2Bf1wckzKVLSPLF6BZpIhZ9SpH7vGDZo4LyLnKv8DCHMQABoMNjM3NDIzMTgzODA1IgzCbippEIbBh1CZG04q3APnrcdrZJLKsuxpOFni%2Bf67dGBPkC%2FRhsnLZi%2F6nEa9MhliGG%2BKZnqAbvWKyFxRFAAwn4%2B5J4qq0crVnjNK%2BuSEX%2Fc%2Bz6HZDNlmdJHBQpYR0Kj6CQja4YMaDxt%2BcJ%2FxWhYk1%2B%2Fr%2BrShdrY3QgOSl69SGEgKsEp%2BDDHZWxig6Asr3AP2xfbVlKWy39kxy3A5HB1H7%2FdpHJTYeD2lMEH4N0lBtrCkZca%2BwdY2vGkkWf0Otz3VbBmm6oTgFL7BQqVzbWs1PfLlprgueCBFO8dhgJ%2FO67KIqi8Dn7KV43N2NrWO3cidwoE9%2Fj%2BD77oyXjaVXJYbJxyhGUPXKV91W98Ukf2XYnyzlU65y2Cy0gyYbC3fWwbWt%2BWuoVYdsLrxhbBop1u3Id97IG%2BrkGU%2BCbNFRFOYVLe59W3htzisSCLsB9kJL66AA2dg6%2BLMQjCrWg67ydk4Gl0opB9vmufirfSwI%2Fjsz9c5yhsRTCkSryk0JbjIzv2KRMPHh%2B6qQtaVmogkIrScqBTlprjZtXXPxWYJ8h7tqqJZ2VTN2lXRkiaJ%2B6%2B7FogQfXqmwpIUiBkGHQgBgLIKFR%2F2n65kOMkOAT40QzNKFZHHcVFLhppbiJufYWbzY4HvBRR1gPnywddaAjDluK7DBjqkAdxO%2BKzM3rLXyginTv885yl0YM92wZtjJUFmNHDHqOyPIxXFQEJ0qBfu9vxf6R4N3SyaXiIssxpahh5WtbAv3KsD1OIjGRq2Jh3tsQ27jIOYE3FxpAQo4frsi%2F94qe1BhCHctcPOAV52CyGR6kWs219Zp2OLv6Pf82JNbhp1baX3OPSYxaRSRbth3fcV7Cpc25RtF8ugnhiP0iRsu9Jp303SckuA&X-Amz-Signature=51494464bf7de42222e3d767db5ed0b4afa3e810b0a4e8948d6a552000127c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
