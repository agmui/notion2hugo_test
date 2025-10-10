---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2YUEJU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQClcKcgmEPDs3fmG8sNPCvAtg0wdqHGSlo90lN22lfL%2BwIgCxmrKw0Bw5pJfKyGiPercswIrHFzgHMlIogjaDYr2Y0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1TQD4sXvii2Y%2B8mSrcAykJAZgd8gtz84d5M8VbQ9cl7D0FKrtEeiaQTXpmpO4ZxzZu4TqYEu51DQ7W5mro3AFjL%2BieQbfGdjFibz7nxeJWKnwhjCKxg8IbegWIGCtroS9yj9ugm25AaRW4RnDHahBOVi5PM9fCG%2F7zfIRnOzduciNIIbw8%2FQgfHl6UKnXweDaP6xu6OMcP8D8Vhj0G4ZTj9RGyS%2BhPJqy119ZSiTR2Cvll2Xda4q73FFrQ9dWCsHxUs9U8XyHlFRUFrLUQ3CUq8gPs4uR8R1Wgeldw1KkI8EhQKsPK3BTA7SlEMxsBhm0DqnQUyMTO7X5HtH8RHz2TxOqJvM2p1M%2BxcqBQabnRO0mMlFKQrRsp11JDfVefAedfSo2Q3YVy5gHotnkRlJaXyKvMD4ZGvRg%2Bwk6zRlLeKUTP%2BPTDvHJVo8hO4p57EfZTWqRFc4vVLIh5xSlJWCYqTn4b9EHQPKynjYZ%2BQQWCKGBJ2g78TwkgAcbWRE1MAlafIzO58q8asNu%2FY5%2Faapd9UzEyFtUSL8pt86uI75TJWYCULS%2FZXsZAVGCf5CkI4At4%2BeN46KU8Ia1FgU5UVYI67%2FK1Ll%2FhFS8iQaI%2BqbS1UuH%2FHxhRwH8A%2FLTnm2y8GCwiQpkODo4HLV%2BcMP%2BooccGOqUBKUKVSlphAeA8YuLMAy3%2FgDgDAai%2FdihzwVp8KPpMXDRTYpX21vc78LUKYc5d7juZVOQn5QM6Fat6EpX1%2Fs9EoKlMP0KxEsN2ULcAJH7MLveunKGG7xjFawhHPxWHGVjnnK1DJu11M3KozCpMu%2Bnk445lPWDggvEPX9UQRULjUE0nKN62MNrBW2Elvhcvb%2FxKpEDcaHlvVgmDa8Q9twx8btrpiEe1&X-Amz-Signature=70748328c3191f71d9c69940a98964b43555a9a87f4569fccd8c814223bf5631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2YUEJU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQClcKcgmEPDs3fmG8sNPCvAtg0wdqHGSlo90lN22lfL%2BwIgCxmrKw0Bw5pJfKyGiPercswIrHFzgHMlIogjaDYr2Y0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1TQD4sXvii2Y%2B8mSrcAykJAZgd8gtz84d5M8VbQ9cl7D0FKrtEeiaQTXpmpO4ZxzZu4TqYEu51DQ7W5mro3AFjL%2BieQbfGdjFibz7nxeJWKnwhjCKxg8IbegWIGCtroS9yj9ugm25AaRW4RnDHahBOVi5PM9fCG%2F7zfIRnOzduciNIIbw8%2FQgfHl6UKnXweDaP6xu6OMcP8D8Vhj0G4ZTj9RGyS%2BhPJqy119ZSiTR2Cvll2Xda4q73FFrQ9dWCsHxUs9U8XyHlFRUFrLUQ3CUq8gPs4uR8R1Wgeldw1KkI8EhQKsPK3BTA7SlEMxsBhm0DqnQUyMTO7X5HtH8RHz2TxOqJvM2p1M%2BxcqBQabnRO0mMlFKQrRsp11JDfVefAedfSo2Q3YVy5gHotnkRlJaXyKvMD4ZGvRg%2Bwk6zRlLeKUTP%2BPTDvHJVo8hO4p57EfZTWqRFc4vVLIh5xSlJWCYqTn4b9EHQPKynjYZ%2BQQWCKGBJ2g78TwkgAcbWRE1MAlafIzO58q8asNu%2FY5%2Faapd9UzEyFtUSL8pt86uI75TJWYCULS%2FZXsZAVGCf5CkI4At4%2BeN46KU8Ia1FgU5UVYI67%2FK1Ll%2FhFS8iQaI%2BqbS1UuH%2FHxhRwH8A%2FLTnm2y8GCwiQpkODo4HLV%2BcMP%2BooccGOqUBKUKVSlphAeA8YuLMAy3%2FgDgDAai%2FdihzwVp8KPpMXDRTYpX21vc78LUKYc5d7juZVOQn5QM6Fat6EpX1%2Fs9EoKlMP0KxEsN2ULcAJH7MLveunKGG7xjFawhHPxWHGVjnnK1DJu11M3KozCpMu%2Bnk445lPWDggvEPX9UQRULjUE0nKN62MNrBW2Elvhcvb%2FxKpEDcaHlvVgmDa8Q9twx8btrpiEe1&X-Amz-Signature=1284ac0c03c4963de5efbb46cba42b122378946f41d4fa5f5a38a6f65bc10e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2YUEJU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQClcKcgmEPDs3fmG8sNPCvAtg0wdqHGSlo90lN22lfL%2BwIgCxmrKw0Bw5pJfKyGiPercswIrHFzgHMlIogjaDYr2Y0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1TQD4sXvii2Y%2B8mSrcAykJAZgd8gtz84d5M8VbQ9cl7D0FKrtEeiaQTXpmpO4ZxzZu4TqYEu51DQ7W5mro3AFjL%2BieQbfGdjFibz7nxeJWKnwhjCKxg8IbegWIGCtroS9yj9ugm25AaRW4RnDHahBOVi5PM9fCG%2F7zfIRnOzduciNIIbw8%2FQgfHl6UKnXweDaP6xu6OMcP8D8Vhj0G4ZTj9RGyS%2BhPJqy119ZSiTR2Cvll2Xda4q73FFrQ9dWCsHxUs9U8XyHlFRUFrLUQ3CUq8gPs4uR8R1Wgeldw1KkI8EhQKsPK3BTA7SlEMxsBhm0DqnQUyMTO7X5HtH8RHz2TxOqJvM2p1M%2BxcqBQabnRO0mMlFKQrRsp11JDfVefAedfSo2Q3YVy5gHotnkRlJaXyKvMD4ZGvRg%2Bwk6zRlLeKUTP%2BPTDvHJVo8hO4p57EfZTWqRFc4vVLIh5xSlJWCYqTn4b9EHQPKynjYZ%2BQQWCKGBJ2g78TwkgAcbWRE1MAlafIzO58q8asNu%2FY5%2Faapd9UzEyFtUSL8pt86uI75TJWYCULS%2FZXsZAVGCf5CkI4At4%2BeN46KU8Ia1FgU5UVYI67%2FK1Ll%2FhFS8iQaI%2BqbS1UuH%2FHxhRwH8A%2FLTnm2y8GCwiQpkODo4HLV%2BcMP%2BooccGOqUBKUKVSlphAeA8YuLMAy3%2FgDgDAai%2FdihzwVp8KPpMXDRTYpX21vc78LUKYc5d7juZVOQn5QM6Fat6EpX1%2Fs9EoKlMP0KxEsN2ULcAJH7MLveunKGG7xjFawhHPxWHGVjnnK1DJu11M3KozCpMu%2Bnk445lPWDggvEPX9UQRULjUE0nKN62MNrBW2Elvhcvb%2FxKpEDcaHlvVgmDa8Q9twx8btrpiEe1&X-Amz-Signature=253babf85e0b0f9502fc8c99a4a1568aea523ca430b3dce4636cda31a40789a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2YUEJU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQClcKcgmEPDs3fmG8sNPCvAtg0wdqHGSlo90lN22lfL%2BwIgCxmrKw0Bw5pJfKyGiPercswIrHFzgHMlIogjaDYr2Y0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1TQD4sXvii2Y%2B8mSrcAykJAZgd8gtz84d5M8VbQ9cl7D0FKrtEeiaQTXpmpO4ZxzZu4TqYEu51DQ7W5mro3AFjL%2BieQbfGdjFibz7nxeJWKnwhjCKxg8IbegWIGCtroS9yj9ugm25AaRW4RnDHahBOVi5PM9fCG%2F7zfIRnOzduciNIIbw8%2FQgfHl6UKnXweDaP6xu6OMcP8D8Vhj0G4ZTj9RGyS%2BhPJqy119ZSiTR2Cvll2Xda4q73FFrQ9dWCsHxUs9U8XyHlFRUFrLUQ3CUq8gPs4uR8R1Wgeldw1KkI8EhQKsPK3BTA7SlEMxsBhm0DqnQUyMTO7X5HtH8RHz2TxOqJvM2p1M%2BxcqBQabnRO0mMlFKQrRsp11JDfVefAedfSo2Q3YVy5gHotnkRlJaXyKvMD4ZGvRg%2Bwk6zRlLeKUTP%2BPTDvHJVo8hO4p57EfZTWqRFc4vVLIh5xSlJWCYqTn4b9EHQPKynjYZ%2BQQWCKGBJ2g78TwkgAcbWRE1MAlafIzO58q8asNu%2FY5%2Faapd9UzEyFtUSL8pt86uI75TJWYCULS%2FZXsZAVGCf5CkI4At4%2BeN46KU8Ia1FgU5UVYI67%2FK1Ll%2FhFS8iQaI%2BqbS1UuH%2FHxhRwH8A%2FLTnm2y8GCwiQpkODo4HLV%2BcMP%2BooccGOqUBKUKVSlphAeA8YuLMAy3%2FgDgDAai%2FdihzwVp8KPpMXDRTYpX21vc78LUKYc5d7juZVOQn5QM6Fat6EpX1%2Fs9EoKlMP0KxEsN2ULcAJH7MLveunKGG7xjFawhHPxWHGVjnnK1DJu11M3KozCpMu%2Bnk445lPWDggvEPX9UQRULjUE0nKN62MNrBW2Elvhcvb%2FxKpEDcaHlvVgmDa8Q9twx8btrpiEe1&X-Amz-Signature=15d94c060ef03059231c351e0f5db43340b8bb74204f9c25f10d3fd6636e6232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2YUEJU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQClcKcgmEPDs3fmG8sNPCvAtg0wdqHGSlo90lN22lfL%2BwIgCxmrKw0Bw5pJfKyGiPercswIrHFzgHMlIogjaDYr2Y0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1TQD4sXvii2Y%2B8mSrcAykJAZgd8gtz84d5M8VbQ9cl7D0FKrtEeiaQTXpmpO4ZxzZu4TqYEu51DQ7W5mro3AFjL%2BieQbfGdjFibz7nxeJWKnwhjCKxg8IbegWIGCtroS9yj9ugm25AaRW4RnDHahBOVi5PM9fCG%2F7zfIRnOzduciNIIbw8%2FQgfHl6UKnXweDaP6xu6OMcP8D8Vhj0G4ZTj9RGyS%2BhPJqy119ZSiTR2Cvll2Xda4q73FFrQ9dWCsHxUs9U8XyHlFRUFrLUQ3CUq8gPs4uR8R1Wgeldw1KkI8EhQKsPK3BTA7SlEMxsBhm0DqnQUyMTO7X5HtH8RHz2TxOqJvM2p1M%2BxcqBQabnRO0mMlFKQrRsp11JDfVefAedfSo2Q3YVy5gHotnkRlJaXyKvMD4ZGvRg%2Bwk6zRlLeKUTP%2BPTDvHJVo8hO4p57EfZTWqRFc4vVLIh5xSlJWCYqTn4b9EHQPKynjYZ%2BQQWCKGBJ2g78TwkgAcbWRE1MAlafIzO58q8asNu%2FY5%2Faapd9UzEyFtUSL8pt86uI75TJWYCULS%2FZXsZAVGCf5CkI4At4%2BeN46KU8Ia1FgU5UVYI67%2FK1Ll%2FhFS8iQaI%2BqbS1UuH%2FHxhRwH8A%2FLTnm2y8GCwiQpkODo4HLV%2BcMP%2BooccGOqUBKUKVSlphAeA8YuLMAy3%2FgDgDAai%2FdihzwVp8KPpMXDRTYpX21vc78LUKYc5d7juZVOQn5QM6Fat6EpX1%2Fs9EoKlMP0KxEsN2ULcAJH7MLveunKGG7xjFawhHPxWHGVjnnK1DJu11M3KozCpMu%2Bnk445lPWDggvEPX9UQRULjUE0nKN62MNrBW2Elvhcvb%2FxKpEDcaHlvVgmDa8Q9twx8btrpiEe1&X-Amz-Signature=8ea22bdd04058f5117e69820f98fdba386927a9ac76c5efbc138f7f409cf9272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2YUEJU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQClcKcgmEPDs3fmG8sNPCvAtg0wdqHGSlo90lN22lfL%2BwIgCxmrKw0Bw5pJfKyGiPercswIrHFzgHMlIogjaDYr2Y0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1TQD4sXvii2Y%2B8mSrcAykJAZgd8gtz84d5M8VbQ9cl7D0FKrtEeiaQTXpmpO4ZxzZu4TqYEu51DQ7W5mro3AFjL%2BieQbfGdjFibz7nxeJWKnwhjCKxg8IbegWIGCtroS9yj9ugm25AaRW4RnDHahBOVi5PM9fCG%2F7zfIRnOzduciNIIbw8%2FQgfHl6UKnXweDaP6xu6OMcP8D8Vhj0G4ZTj9RGyS%2BhPJqy119ZSiTR2Cvll2Xda4q73FFrQ9dWCsHxUs9U8XyHlFRUFrLUQ3CUq8gPs4uR8R1Wgeldw1KkI8EhQKsPK3BTA7SlEMxsBhm0DqnQUyMTO7X5HtH8RHz2TxOqJvM2p1M%2BxcqBQabnRO0mMlFKQrRsp11JDfVefAedfSo2Q3YVy5gHotnkRlJaXyKvMD4ZGvRg%2Bwk6zRlLeKUTP%2BPTDvHJVo8hO4p57EfZTWqRFc4vVLIh5xSlJWCYqTn4b9EHQPKynjYZ%2BQQWCKGBJ2g78TwkgAcbWRE1MAlafIzO58q8asNu%2FY5%2Faapd9UzEyFtUSL8pt86uI75TJWYCULS%2FZXsZAVGCf5CkI4At4%2BeN46KU8Ia1FgU5UVYI67%2FK1Ll%2FhFS8iQaI%2BqbS1UuH%2FHxhRwH8A%2FLTnm2y8GCwiQpkODo4HLV%2BcMP%2BooccGOqUBKUKVSlphAeA8YuLMAy3%2FgDgDAai%2FdihzwVp8KPpMXDRTYpX21vc78LUKYc5d7juZVOQn5QM6Fat6EpX1%2Fs9EoKlMP0KxEsN2ULcAJH7MLveunKGG7xjFawhHPxWHGVjnnK1DJu11M3KozCpMu%2Bnk445lPWDggvEPX9UQRULjUE0nKN62MNrBW2Elvhcvb%2FxKpEDcaHlvVgmDa8Q9twx8btrpiEe1&X-Amz-Signature=348eabcad6a0cfb2608f439edadf04d6cda2cfebf481d175732c7571aac33f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2YUEJU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQClcKcgmEPDs3fmG8sNPCvAtg0wdqHGSlo90lN22lfL%2BwIgCxmrKw0Bw5pJfKyGiPercswIrHFzgHMlIogjaDYr2Y0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1TQD4sXvii2Y%2B8mSrcAykJAZgd8gtz84d5M8VbQ9cl7D0FKrtEeiaQTXpmpO4ZxzZu4TqYEu51DQ7W5mro3AFjL%2BieQbfGdjFibz7nxeJWKnwhjCKxg8IbegWIGCtroS9yj9ugm25AaRW4RnDHahBOVi5PM9fCG%2F7zfIRnOzduciNIIbw8%2FQgfHl6UKnXweDaP6xu6OMcP8D8Vhj0G4ZTj9RGyS%2BhPJqy119ZSiTR2Cvll2Xda4q73FFrQ9dWCsHxUs9U8XyHlFRUFrLUQ3CUq8gPs4uR8R1Wgeldw1KkI8EhQKsPK3BTA7SlEMxsBhm0DqnQUyMTO7X5HtH8RHz2TxOqJvM2p1M%2BxcqBQabnRO0mMlFKQrRsp11JDfVefAedfSo2Q3YVy5gHotnkRlJaXyKvMD4ZGvRg%2Bwk6zRlLeKUTP%2BPTDvHJVo8hO4p57EfZTWqRFc4vVLIh5xSlJWCYqTn4b9EHQPKynjYZ%2BQQWCKGBJ2g78TwkgAcbWRE1MAlafIzO58q8asNu%2FY5%2Faapd9UzEyFtUSL8pt86uI75TJWYCULS%2FZXsZAVGCf5CkI4At4%2BeN46KU8Ia1FgU5UVYI67%2FK1Ll%2FhFS8iQaI%2BqbS1UuH%2FHxhRwH8A%2FLTnm2y8GCwiQpkODo4HLV%2BcMP%2BooccGOqUBKUKVSlphAeA8YuLMAy3%2FgDgDAai%2FdihzwVp8KPpMXDRTYpX21vc78LUKYc5d7juZVOQn5QM6Fat6EpX1%2Fs9EoKlMP0KxEsN2ULcAJH7MLveunKGG7xjFawhHPxWHGVjnnK1DJu11M3KozCpMu%2Bnk445lPWDggvEPX9UQRULjUE0nKN62MNrBW2Elvhcvb%2FxKpEDcaHlvVgmDa8Q9twx8btrpiEe1&X-Amz-Signature=7ab6c3f1fe4a578ef34d95e1236696ebfdd9cfb901853e427f6b37e9ec66add2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
