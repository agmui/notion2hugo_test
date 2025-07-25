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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544BDIWS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICdkRLD8uMoZEAW05P9mSegXSrMoeGK3pZzTkDvckLEJAiEAhdBtbEMISVW1QoIE8lHEjbawjikQTfOE17m%2F%2BN5IFIgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD5BqVbTqtZubjc3gCrcA5iiRjyVMWOSQoLMX4qZLjhD7fu0sgj5yWJwDfXeeTqW1uHMp%2BAxIZlxh6S%2BcR%2F2gZtWWwumTlBXWgnaStAkYbfhTghZW3FXaWod9XuAx9ltHV%2BcOQIt%2Bqbmp%2FDuYzb%2BNgoVS5LoT8MEGbRPqOi%2FC4KPr32jZLYfFyUY24B%2Fs%2BI6Sw8sLGBE2U1lQGfSem8rlR7F7Q2NtP%2BY1ancFO969qkyOJUis6PKdHYMHf6tr5c%2BFnKW650EgguqYuofetbvPQrVtdyENd%2Bh5c0uC%2F9eZpmb8VGouYDVIimkp0hNQhA87Z1MN%2BwQlrVF%2BpaEkUG66U3OiLcGXRkQNc2%2FQ8icRs8503aKe6z1j3s%2BZswiwZJm2vSkWj676p%2FEzv3A1L89WE%2FYoqrkJXhWO4iG%2BYB8ap4F4PmHBvAifPBrHEZEtTz2O6eSTLdV23JURs8QVlBiRM0iscdXOAVendzytNaWj5dcgoLzXZLyywsG%2B35M3ctp02COeYZFG%2BdfPEBvqDCdjHT8DBiGJIibSrGlAlffr2OeVPM4TNHRC2O%2Bl%2BX32mE1khZ3oV3%2Bq5ovxiZBXimM9AKtvjilkMl42%2FLGL8JXSDvtq%2FRYEvLCUhtUGDCrp3JQWKwxIVBew0Oxito8MMjnjMQGOqUBDbba4psrLaYMUJBps0QpA0nip1PbqJUBy1Pn4Qhn4bqHuIirHe435ujjBToQIJd733Ha%2FK0BmE8%2FpGo22YMCvsCk19DS3zgDuzv9De19oj6C4halvZhrtR8sGqMUSzMXG2NPw6dKFWpJKSaikt5%2Bn%2BW4MlH9qa2kh2RKD57U59GJ8XV3CEKAU7BxPexEDz5JYP76fvEJs1ETHlg99q2QmysWMHNs&X-Amz-Signature=5a2406b5616ce51156802e9c246ea2daa300ce3bc317ce59ee6cb52c17c1f7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544BDIWS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICdkRLD8uMoZEAW05P9mSegXSrMoeGK3pZzTkDvckLEJAiEAhdBtbEMISVW1QoIE8lHEjbawjikQTfOE17m%2F%2BN5IFIgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD5BqVbTqtZubjc3gCrcA5iiRjyVMWOSQoLMX4qZLjhD7fu0sgj5yWJwDfXeeTqW1uHMp%2BAxIZlxh6S%2BcR%2F2gZtWWwumTlBXWgnaStAkYbfhTghZW3FXaWod9XuAx9ltHV%2BcOQIt%2Bqbmp%2FDuYzb%2BNgoVS5LoT8MEGbRPqOi%2FC4KPr32jZLYfFyUY24B%2Fs%2BI6Sw8sLGBE2U1lQGfSem8rlR7F7Q2NtP%2BY1ancFO969qkyOJUis6PKdHYMHf6tr5c%2BFnKW650EgguqYuofetbvPQrVtdyENd%2Bh5c0uC%2F9eZpmb8VGouYDVIimkp0hNQhA87Z1MN%2BwQlrVF%2BpaEkUG66U3OiLcGXRkQNc2%2FQ8icRs8503aKe6z1j3s%2BZswiwZJm2vSkWj676p%2FEzv3A1L89WE%2FYoqrkJXhWO4iG%2BYB8ap4F4PmHBvAifPBrHEZEtTz2O6eSTLdV23JURs8QVlBiRM0iscdXOAVendzytNaWj5dcgoLzXZLyywsG%2B35M3ctp02COeYZFG%2BdfPEBvqDCdjHT8DBiGJIibSrGlAlffr2OeVPM4TNHRC2O%2Bl%2BX32mE1khZ3oV3%2Bq5ovxiZBXimM9AKtvjilkMl42%2FLGL8JXSDvtq%2FRYEvLCUhtUGDCrp3JQWKwxIVBew0Oxito8MMjnjMQGOqUBDbba4psrLaYMUJBps0QpA0nip1PbqJUBy1Pn4Qhn4bqHuIirHe435ujjBToQIJd733Ha%2FK0BmE8%2FpGo22YMCvsCk19DS3zgDuzv9De19oj6C4halvZhrtR8sGqMUSzMXG2NPw6dKFWpJKSaikt5%2Bn%2BW4MlH9qa2kh2RKD57U59GJ8XV3CEKAU7BxPexEDz5JYP76fvEJs1ETHlg99q2QmysWMHNs&X-Amz-Signature=1cfdc837851f4e9d3263cd3ac0c8b581b1f8beee630ad622c6b6f7841fa660ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544BDIWS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICdkRLD8uMoZEAW05P9mSegXSrMoeGK3pZzTkDvckLEJAiEAhdBtbEMISVW1QoIE8lHEjbawjikQTfOE17m%2F%2BN5IFIgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD5BqVbTqtZubjc3gCrcA5iiRjyVMWOSQoLMX4qZLjhD7fu0sgj5yWJwDfXeeTqW1uHMp%2BAxIZlxh6S%2BcR%2F2gZtWWwumTlBXWgnaStAkYbfhTghZW3FXaWod9XuAx9ltHV%2BcOQIt%2Bqbmp%2FDuYzb%2BNgoVS5LoT8MEGbRPqOi%2FC4KPr32jZLYfFyUY24B%2Fs%2BI6Sw8sLGBE2U1lQGfSem8rlR7F7Q2NtP%2BY1ancFO969qkyOJUis6PKdHYMHf6tr5c%2BFnKW650EgguqYuofetbvPQrVtdyENd%2Bh5c0uC%2F9eZpmb8VGouYDVIimkp0hNQhA87Z1MN%2BwQlrVF%2BpaEkUG66U3OiLcGXRkQNc2%2FQ8icRs8503aKe6z1j3s%2BZswiwZJm2vSkWj676p%2FEzv3A1L89WE%2FYoqrkJXhWO4iG%2BYB8ap4F4PmHBvAifPBrHEZEtTz2O6eSTLdV23JURs8QVlBiRM0iscdXOAVendzytNaWj5dcgoLzXZLyywsG%2B35M3ctp02COeYZFG%2BdfPEBvqDCdjHT8DBiGJIibSrGlAlffr2OeVPM4TNHRC2O%2Bl%2BX32mE1khZ3oV3%2Bq5ovxiZBXimM9AKtvjilkMl42%2FLGL8JXSDvtq%2FRYEvLCUhtUGDCrp3JQWKwxIVBew0Oxito8MMjnjMQGOqUBDbba4psrLaYMUJBps0QpA0nip1PbqJUBy1Pn4Qhn4bqHuIirHe435ujjBToQIJd733Ha%2FK0BmE8%2FpGo22YMCvsCk19DS3zgDuzv9De19oj6C4halvZhrtR8sGqMUSzMXG2NPw6dKFWpJKSaikt5%2Bn%2BW4MlH9qa2kh2RKD57U59GJ8XV3CEKAU7BxPexEDz5JYP76fvEJs1ETHlg99q2QmysWMHNs&X-Amz-Signature=84712beb6846b0479ea6602290082676c7ba05f3af954b7b394cf3458bcfa44a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544BDIWS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICdkRLD8uMoZEAW05P9mSegXSrMoeGK3pZzTkDvckLEJAiEAhdBtbEMISVW1QoIE8lHEjbawjikQTfOE17m%2F%2BN5IFIgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD5BqVbTqtZubjc3gCrcA5iiRjyVMWOSQoLMX4qZLjhD7fu0sgj5yWJwDfXeeTqW1uHMp%2BAxIZlxh6S%2BcR%2F2gZtWWwumTlBXWgnaStAkYbfhTghZW3FXaWod9XuAx9ltHV%2BcOQIt%2Bqbmp%2FDuYzb%2BNgoVS5LoT8MEGbRPqOi%2FC4KPr32jZLYfFyUY24B%2Fs%2BI6Sw8sLGBE2U1lQGfSem8rlR7F7Q2NtP%2BY1ancFO969qkyOJUis6PKdHYMHf6tr5c%2BFnKW650EgguqYuofetbvPQrVtdyENd%2Bh5c0uC%2F9eZpmb8VGouYDVIimkp0hNQhA87Z1MN%2BwQlrVF%2BpaEkUG66U3OiLcGXRkQNc2%2FQ8icRs8503aKe6z1j3s%2BZswiwZJm2vSkWj676p%2FEzv3A1L89WE%2FYoqrkJXhWO4iG%2BYB8ap4F4PmHBvAifPBrHEZEtTz2O6eSTLdV23JURs8QVlBiRM0iscdXOAVendzytNaWj5dcgoLzXZLyywsG%2B35M3ctp02COeYZFG%2BdfPEBvqDCdjHT8DBiGJIibSrGlAlffr2OeVPM4TNHRC2O%2Bl%2BX32mE1khZ3oV3%2Bq5ovxiZBXimM9AKtvjilkMl42%2FLGL8JXSDvtq%2FRYEvLCUhtUGDCrp3JQWKwxIVBew0Oxito8MMjnjMQGOqUBDbba4psrLaYMUJBps0QpA0nip1PbqJUBy1Pn4Qhn4bqHuIirHe435ujjBToQIJd733Ha%2FK0BmE8%2FpGo22YMCvsCk19DS3zgDuzv9De19oj6C4halvZhrtR8sGqMUSzMXG2NPw6dKFWpJKSaikt5%2Bn%2BW4MlH9qa2kh2RKD57U59GJ8XV3CEKAU7BxPexEDz5JYP76fvEJs1ETHlg99q2QmysWMHNs&X-Amz-Signature=38d01c2c209d2721e0ce6c3429fad3e94674ec86ef5b543d9f4237872b3c691a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544BDIWS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICdkRLD8uMoZEAW05P9mSegXSrMoeGK3pZzTkDvckLEJAiEAhdBtbEMISVW1QoIE8lHEjbawjikQTfOE17m%2F%2BN5IFIgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD5BqVbTqtZubjc3gCrcA5iiRjyVMWOSQoLMX4qZLjhD7fu0sgj5yWJwDfXeeTqW1uHMp%2BAxIZlxh6S%2BcR%2F2gZtWWwumTlBXWgnaStAkYbfhTghZW3FXaWod9XuAx9ltHV%2BcOQIt%2Bqbmp%2FDuYzb%2BNgoVS5LoT8MEGbRPqOi%2FC4KPr32jZLYfFyUY24B%2Fs%2BI6Sw8sLGBE2U1lQGfSem8rlR7F7Q2NtP%2BY1ancFO969qkyOJUis6PKdHYMHf6tr5c%2BFnKW650EgguqYuofetbvPQrVtdyENd%2Bh5c0uC%2F9eZpmb8VGouYDVIimkp0hNQhA87Z1MN%2BwQlrVF%2BpaEkUG66U3OiLcGXRkQNc2%2FQ8icRs8503aKe6z1j3s%2BZswiwZJm2vSkWj676p%2FEzv3A1L89WE%2FYoqrkJXhWO4iG%2BYB8ap4F4PmHBvAifPBrHEZEtTz2O6eSTLdV23JURs8QVlBiRM0iscdXOAVendzytNaWj5dcgoLzXZLyywsG%2B35M3ctp02COeYZFG%2BdfPEBvqDCdjHT8DBiGJIibSrGlAlffr2OeVPM4TNHRC2O%2Bl%2BX32mE1khZ3oV3%2Bq5ovxiZBXimM9AKtvjilkMl42%2FLGL8JXSDvtq%2FRYEvLCUhtUGDCrp3JQWKwxIVBew0Oxito8MMjnjMQGOqUBDbba4psrLaYMUJBps0QpA0nip1PbqJUBy1Pn4Qhn4bqHuIirHe435ujjBToQIJd733Ha%2FK0BmE8%2FpGo22YMCvsCk19DS3zgDuzv9De19oj6C4halvZhrtR8sGqMUSzMXG2NPw6dKFWpJKSaikt5%2Bn%2BW4MlH9qa2kh2RKD57U59GJ8XV3CEKAU7BxPexEDz5JYP76fvEJs1ETHlg99q2QmysWMHNs&X-Amz-Signature=ade8e9dc97845b5f213e79f829b7db3e8c98ed34069ae02884e9dfc68035582e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544BDIWS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICdkRLD8uMoZEAW05P9mSegXSrMoeGK3pZzTkDvckLEJAiEAhdBtbEMISVW1QoIE8lHEjbawjikQTfOE17m%2F%2BN5IFIgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD5BqVbTqtZubjc3gCrcA5iiRjyVMWOSQoLMX4qZLjhD7fu0sgj5yWJwDfXeeTqW1uHMp%2BAxIZlxh6S%2BcR%2F2gZtWWwumTlBXWgnaStAkYbfhTghZW3FXaWod9XuAx9ltHV%2BcOQIt%2Bqbmp%2FDuYzb%2BNgoVS5LoT8MEGbRPqOi%2FC4KPr32jZLYfFyUY24B%2Fs%2BI6Sw8sLGBE2U1lQGfSem8rlR7F7Q2NtP%2BY1ancFO969qkyOJUis6PKdHYMHf6tr5c%2BFnKW650EgguqYuofetbvPQrVtdyENd%2Bh5c0uC%2F9eZpmb8VGouYDVIimkp0hNQhA87Z1MN%2BwQlrVF%2BpaEkUG66U3OiLcGXRkQNc2%2FQ8icRs8503aKe6z1j3s%2BZswiwZJm2vSkWj676p%2FEzv3A1L89WE%2FYoqrkJXhWO4iG%2BYB8ap4F4PmHBvAifPBrHEZEtTz2O6eSTLdV23JURs8QVlBiRM0iscdXOAVendzytNaWj5dcgoLzXZLyywsG%2B35M3ctp02COeYZFG%2BdfPEBvqDCdjHT8DBiGJIibSrGlAlffr2OeVPM4TNHRC2O%2Bl%2BX32mE1khZ3oV3%2Bq5ovxiZBXimM9AKtvjilkMl42%2FLGL8JXSDvtq%2FRYEvLCUhtUGDCrp3JQWKwxIVBew0Oxito8MMjnjMQGOqUBDbba4psrLaYMUJBps0QpA0nip1PbqJUBy1Pn4Qhn4bqHuIirHe435ujjBToQIJd733Ha%2FK0BmE8%2FpGo22YMCvsCk19DS3zgDuzv9De19oj6C4halvZhrtR8sGqMUSzMXG2NPw6dKFWpJKSaikt5%2Bn%2BW4MlH9qa2kh2RKD57U59GJ8XV3CEKAU7BxPexEDz5JYP76fvEJs1ETHlg99q2QmysWMHNs&X-Amz-Signature=6e4ecc37707b1699d36b8158885b28cfccab58c4253815a5b42211dccb42d58d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544BDIWS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICdkRLD8uMoZEAW05P9mSegXSrMoeGK3pZzTkDvckLEJAiEAhdBtbEMISVW1QoIE8lHEjbawjikQTfOE17m%2F%2BN5IFIgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD5BqVbTqtZubjc3gCrcA5iiRjyVMWOSQoLMX4qZLjhD7fu0sgj5yWJwDfXeeTqW1uHMp%2BAxIZlxh6S%2BcR%2F2gZtWWwumTlBXWgnaStAkYbfhTghZW3FXaWod9XuAx9ltHV%2BcOQIt%2Bqbmp%2FDuYzb%2BNgoVS5LoT8MEGbRPqOi%2FC4KPr32jZLYfFyUY24B%2Fs%2BI6Sw8sLGBE2U1lQGfSem8rlR7F7Q2NtP%2BY1ancFO969qkyOJUis6PKdHYMHf6tr5c%2BFnKW650EgguqYuofetbvPQrVtdyENd%2Bh5c0uC%2F9eZpmb8VGouYDVIimkp0hNQhA87Z1MN%2BwQlrVF%2BpaEkUG66U3OiLcGXRkQNc2%2FQ8icRs8503aKe6z1j3s%2BZswiwZJm2vSkWj676p%2FEzv3A1L89WE%2FYoqrkJXhWO4iG%2BYB8ap4F4PmHBvAifPBrHEZEtTz2O6eSTLdV23JURs8QVlBiRM0iscdXOAVendzytNaWj5dcgoLzXZLyywsG%2B35M3ctp02COeYZFG%2BdfPEBvqDCdjHT8DBiGJIibSrGlAlffr2OeVPM4TNHRC2O%2Bl%2BX32mE1khZ3oV3%2Bq5ovxiZBXimM9AKtvjilkMl42%2FLGL8JXSDvtq%2FRYEvLCUhtUGDCrp3JQWKwxIVBew0Oxito8MMjnjMQGOqUBDbba4psrLaYMUJBps0QpA0nip1PbqJUBy1Pn4Qhn4bqHuIirHe435ujjBToQIJd733Ha%2FK0BmE8%2FpGo22YMCvsCk19DS3zgDuzv9De19oj6C4halvZhrtR8sGqMUSzMXG2NPw6dKFWpJKSaikt5%2Bn%2BW4MlH9qa2kh2RKD57U59GJ8XV3CEKAU7BxPexEDz5JYP76fvEJs1ETHlg99q2QmysWMHNs&X-Amz-Signature=cf9aff280132e06554e7fca6630b64e076f766c712fca545c8cbb1a8778a1874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
