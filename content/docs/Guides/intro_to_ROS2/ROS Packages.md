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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOYWECZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8us6Ams3552FE2wdKClXD2tQF1TN2R%2BTs7Zl8N4hzywIhAIH4SXlGxG7I3EqzoxWxFE6s%2FkmfprKyJ3ODbUllS2ATKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyulp%2FODywVmepacncq3AOeoc7OLAXIFiR2EHW1ls5dvZrvGnuuZkyaL%2FDo31p9wmAv30CcrMA1yfWwJ1hcvkscOLYfoQn128mjflZfzY6WcZnIAMhVEomCZEmwfbrRw2VAh3ezJfOtlkzp0EkhuOq%2B%2BaxHKp8cesIQITFbTRcWURtNpGyrLesdpQ%2F4cuminL9AaE6fIxzDclPFgSVeucTeNYO%2BuYqmYDfPdzUuKUEp7M%2FUzpSM%2BjWX0bSF0x9EWbBitC0DSBgIHhNg0R56tflrkhxO74g1LJes91hvPfeaZuhax5mxWHMysZOl38SYHERcmfxCFq%2FuDIRZEfHg156QIrQ9FSgjmt%2Fkov6Z10sRORh%2B6GjBTNuNXnz8xuFEU2x4jyC1JEFiH%2FuK2xjImW9vU02%2FWIOBdpxk3rdpSicMQVNhPdcmw3pLu2u9AGLV5h5LwGrSxw3qs9wvHaKxxM4EQ5EPJMLocVHJffOQ7hDyT1xhFD2lZvs58%2FYypAFUcw%2BKFRagf6F2Vv0aTs8dbQKACGNDvnMFNMHLpeHHE1bdIWHoPklfOj3eu%2B8OtNC6iX1cDQAsKI8Z8CZxTmyZ8E4MYUSTU%2ByKbXHQcc6ISwN0J1xcx7yUfcUFeigsKQdllxoGgRStfoAR89OHbTCOrYG%2FBjqkAeEr%2BHL3OdK1H4HWfhpkamOXyYmpgQ0dxoWQyYC9HNU3BPKnAkdr8BfM6RXwl2GgNXSvOPR%2Bfz4iMdcv%2BM%2FvbcLiX1ho3S%2Bupt8dqcsr7wKRK5sExXOk3apwTVLRP4aUvwbVtZTQrA05%2BGcZuemnYN3qfdWRiisEyzNtRJIZ8DZ%2F8jddpjECxBgm8K0O4p8o%2FhnVz31G3AXIDuDapk7IFZfSUPM3&X-Amz-Signature=ee5a946ec11029a1c17f34379b38f8dd9c9d5f30f59a8911f23b762a530eb3d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOYWECZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8us6Ams3552FE2wdKClXD2tQF1TN2R%2BTs7Zl8N4hzywIhAIH4SXlGxG7I3EqzoxWxFE6s%2FkmfprKyJ3ODbUllS2ATKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyulp%2FODywVmepacncq3AOeoc7OLAXIFiR2EHW1ls5dvZrvGnuuZkyaL%2FDo31p9wmAv30CcrMA1yfWwJ1hcvkscOLYfoQn128mjflZfzY6WcZnIAMhVEomCZEmwfbrRw2VAh3ezJfOtlkzp0EkhuOq%2B%2BaxHKp8cesIQITFbTRcWURtNpGyrLesdpQ%2F4cuminL9AaE6fIxzDclPFgSVeucTeNYO%2BuYqmYDfPdzUuKUEp7M%2FUzpSM%2BjWX0bSF0x9EWbBitC0DSBgIHhNg0R56tflrkhxO74g1LJes91hvPfeaZuhax5mxWHMysZOl38SYHERcmfxCFq%2FuDIRZEfHg156QIrQ9FSgjmt%2Fkov6Z10sRORh%2B6GjBTNuNXnz8xuFEU2x4jyC1JEFiH%2FuK2xjImW9vU02%2FWIOBdpxk3rdpSicMQVNhPdcmw3pLu2u9AGLV5h5LwGrSxw3qs9wvHaKxxM4EQ5EPJMLocVHJffOQ7hDyT1xhFD2lZvs58%2FYypAFUcw%2BKFRagf6F2Vv0aTs8dbQKACGNDvnMFNMHLpeHHE1bdIWHoPklfOj3eu%2B8OtNC6iX1cDQAsKI8Z8CZxTmyZ8E4MYUSTU%2ByKbXHQcc6ISwN0J1xcx7yUfcUFeigsKQdllxoGgRStfoAR89OHbTCOrYG%2FBjqkAeEr%2BHL3OdK1H4HWfhpkamOXyYmpgQ0dxoWQyYC9HNU3BPKnAkdr8BfM6RXwl2GgNXSvOPR%2Bfz4iMdcv%2BM%2FvbcLiX1ho3S%2Bupt8dqcsr7wKRK5sExXOk3apwTVLRP4aUvwbVtZTQrA05%2BGcZuemnYN3qfdWRiisEyzNtRJIZ8DZ%2F8jddpjECxBgm8K0O4p8o%2FhnVz31G3AXIDuDapk7IFZfSUPM3&X-Amz-Signature=30cd6430acd78a98b3643c48cec8f97ae90bc1c46968e3e6602b048ff72929f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOYWECZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8us6Ams3552FE2wdKClXD2tQF1TN2R%2BTs7Zl8N4hzywIhAIH4SXlGxG7I3EqzoxWxFE6s%2FkmfprKyJ3ODbUllS2ATKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyulp%2FODywVmepacncq3AOeoc7OLAXIFiR2EHW1ls5dvZrvGnuuZkyaL%2FDo31p9wmAv30CcrMA1yfWwJ1hcvkscOLYfoQn128mjflZfzY6WcZnIAMhVEomCZEmwfbrRw2VAh3ezJfOtlkzp0EkhuOq%2B%2BaxHKp8cesIQITFbTRcWURtNpGyrLesdpQ%2F4cuminL9AaE6fIxzDclPFgSVeucTeNYO%2BuYqmYDfPdzUuKUEp7M%2FUzpSM%2BjWX0bSF0x9EWbBitC0DSBgIHhNg0R56tflrkhxO74g1LJes91hvPfeaZuhax5mxWHMysZOl38SYHERcmfxCFq%2FuDIRZEfHg156QIrQ9FSgjmt%2Fkov6Z10sRORh%2B6GjBTNuNXnz8xuFEU2x4jyC1JEFiH%2FuK2xjImW9vU02%2FWIOBdpxk3rdpSicMQVNhPdcmw3pLu2u9AGLV5h5LwGrSxw3qs9wvHaKxxM4EQ5EPJMLocVHJffOQ7hDyT1xhFD2lZvs58%2FYypAFUcw%2BKFRagf6F2Vv0aTs8dbQKACGNDvnMFNMHLpeHHE1bdIWHoPklfOj3eu%2B8OtNC6iX1cDQAsKI8Z8CZxTmyZ8E4MYUSTU%2ByKbXHQcc6ISwN0J1xcx7yUfcUFeigsKQdllxoGgRStfoAR89OHbTCOrYG%2FBjqkAeEr%2BHL3OdK1H4HWfhpkamOXyYmpgQ0dxoWQyYC9HNU3BPKnAkdr8BfM6RXwl2GgNXSvOPR%2Bfz4iMdcv%2BM%2FvbcLiX1ho3S%2Bupt8dqcsr7wKRK5sExXOk3apwTVLRP4aUvwbVtZTQrA05%2BGcZuemnYN3qfdWRiisEyzNtRJIZ8DZ%2F8jddpjECxBgm8K0O4p8o%2FhnVz31G3AXIDuDapk7IFZfSUPM3&X-Amz-Signature=2b60d5f55070db68b322b0186e1e4202fe05bdcfa1090e1f15c4866df267f974&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOYWECZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8us6Ams3552FE2wdKClXD2tQF1TN2R%2BTs7Zl8N4hzywIhAIH4SXlGxG7I3EqzoxWxFE6s%2FkmfprKyJ3ODbUllS2ATKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyulp%2FODywVmepacncq3AOeoc7OLAXIFiR2EHW1ls5dvZrvGnuuZkyaL%2FDo31p9wmAv30CcrMA1yfWwJ1hcvkscOLYfoQn128mjflZfzY6WcZnIAMhVEomCZEmwfbrRw2VAh3ezJfOtlkzp0EkhuOq%2B%2BaxHKp8cesIQITFbTRcWURtNpGyrLesdpQ%2F4cuminL9AaE6fIxzDclPFgSVeucTeNYO%2BuYqmYDfPdzUuKUEp7M%2FUzpSM%2BjWX0bSF0x9EWbBitC0DSBgIHhNg0R56tflrkhxO74g1LJes91hvPfeaZuhax5mxWHMysZOl38SYHERcmfxCFq%2FuDIRZEfHg156QIrQ9FSgjmt%2Fkov6Z10sRORh%2B6GjBTNuNXnz8xuFEU2x4jyC1JEFiH%2FuK2xjImW9vU02%2FWIOBdpxk3rdpSicMQVNhPdcmw3pLu2u9AGLV5h5LwGrSxw3qs9wvHaKxxM4EQ5EPJMLocVHJffOQ7hDyT1xhFD2lZvs58%2FYypAFUcw%2BKFRagf6F2Vv0aTs8dbQKACGNDvnMFNMHLpeHHE1bdIWHoPklfOj3eu%2B8OtNC6iX1cDQAsKI8Z8CZxTmyZ8E4MYUSTU%2ByKbXHQcc6ISwN0J1xcx7yUfcUFeigsKQdllxoGgRStfoAR89OHbTCOrYG%2FBjqkAeEr%2BHL3OdK1H4HWfhpkamOXyYmpgQ0dxoWQyYC9HNU3BPKnAkdr8BfM6RXwl2GgNXSvOPR%2Bfz4iMdcv%2BM%2FvbcLiX1ho3S%2Bupt8dqcsr7wKRK5sExXOk3apwTVLRP4aUvwbVtZTQrA05%2BGcZuemnYN3qfdWRiisEyzNtRJIZ8DZ%2F8jddpjECxBgm8K0O4p8o%2FhnVz31G3AXIDuDapk7IFZfSUPM3&X-Amz-Signature=2273621ff19103706bb8085bc9a6d81f747ee53f1280ce23a5fe6eedc4950138&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOYWECZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8us6Ams3552FE2wdKClXD2tQF1TN2R%2BTs7Zl8N4hzywIhAIH4SXlGxG7I3EqzoxWxFE6s%2FkmfprKyJ3ODbUllS2ATKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyulp%2FODywVmepacncq3AOeoc7OLAXIFiR2EHW1ls5dvZrvGnuuZkyaL%2FDo31p9wmAv30CcrMA1yfWwJ1hcvkscOLYfoQn128mjflZfzY6WcZnIAMhVEomCZEmwfbrRw2VAh3ezJfOtlkzp0EkhuOq%2B%2BaxHKp8cesIQITFbTRcWURtNpGyrLesdpQ%2F4cuminL9AaE6fIxzDclPFgSVeucTeNYO%2BuYqmYDfPdzUuKUEp7M%2FUzpSM%2BjWX0bSF0x9EWbBitC0DSBgIHhNg0R56tflrkhxO74g1LJes91hvPfeaZuhax5mxWHMysZOl38SYHERcmfxCFq%2FuDIRZEfHg156QIrQ9FSgjmt%2Fkov6Z10sRORh%2B6GjBTNuNXnz8xuFEU2x4jyC1JEFiH%2FuK2xjImW9vU02%2FWIOBdpxk3rdpSicMQVNhPdcmw3pLu2u9AGLV5h5LwGrSxw3qs9wvHaKxxM4EQ5EPJMLocVHJffOQ7hDyT1xhFD2lZvs58%2FYypAFUcw%2BKFRagf6F2Vv0aTs8dbQKACGNDvnMFNMHLpeHHE1bdIWHoPklfOj3eu%2B8OtNC6iX1cDQAsKI8Z8CZxTmyZ8E4MYUSTU%2ByKbXHQcc6ISwN0J1xcx7yUfcUFeigsKQdllxoGgRStfoAR89OHbTCOrYG%2FBjqkAeEr%2BHL3OdK1H4HWfhpkamOXyYmpgQ0dxoWQyYC9HNU3BPKnAkdr8BfM6RXwl2GgNXSvOPR%2Bfz4iMdcv%2BM%2FvbcLiX1ho3S%2Bupt8dqcsr7wKRK5sExXOk3apwTVLRP4aUvwbVtZTQrA05%2BGcZuemnYN3qfdWRiisEyzNtRJIZ8DZ%2F8jddpjECxBgm8K0O4p8o%2FhnVz31G3AXIDuDapk7IFZfSUPM3&X-Amz-Signature=bdf232d8bf73e1b635e965b72877e9c76d3f8ffe88555dd0bef4cde35dad37bc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOYWECZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8us6Ams3552FE2wdKClXD2tQF1TN2R%2BTs7Zl8N4hzywIhAIH4SXlGxG7I3EqzoxWxFE6s%2FkmfprKyJ3ODbUllS2ATKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyulp%2FODywVmepacncq3AOeoc7OLAXIFiR2EHW1ls5dvZrvGnuuZkyaL%2FDo31p9wmAv30CcrMA1yfWwJ1hcvkscOLYfoQn128mjflZfzY6WcZnIAMhVEomCZEmwfbrRw2VAh3ezJfOtlkzp0EkhuOq%2B%2BaxHKp8cesIQITFbTRcWURtNpGyrLesdpQ%2F4cuminL9AaE6fIxzDclPFgSVeucTeNYO%2BuYqmYDfPdzUuKUEp7M%2FUzpSM%2BjWX0bSF0x9EWbBitC0DSBgIHhNg0R56tflrkhxO74g1LJes91hvPfeaZuhax5mxWHMysZOl38SYHERcmfxCFq%2FuDIRZEfHg156QIrQ9FSgjmt%2Fkov6Z10sRORh%2B6GjBTNuNXnz8xuFEU2x4jyC1JEFiH%2FuK2xjImW9vU02%2FWIOBdpxk3rdpSicMQVNhPdcmw3pLu2u9AGLV5h5LwGrSxw3qs9wvHaKxxM4EQ5EPJMLocVHJffOQ7hDyT1xhFD2lZvs58%2FYypAFUcw%2BKFRagf6F2Vv0aTs8dbQKACGNDvnMFNMHLpeHHE1bdIWHoPklfOj3eu%2B8OtNC6iX1cDQAsKI8Z8CZxTmyZ8E4MYUSTU%2ByKbXHQcc6ISwN0J1xcx7yUfcUFeigsKQdllxoGgRStfoAR89OHbTCOrYG%2FBjqkAeEr%2BHL3OdK1H4HWfhpkamOXyYmpgQ0dxoWQyYC9HNU3BPKnAkdr8BfM6RXwl2GgNXSvOPR%2Bfz4iMdcv%2BM%2FvbcLiX1ho3S%2Bupt8dqcsr7wKRK5sExXOk3apwTVLRP4aUvwbVtZTQrA05%2BGcZuemnYN3qfdWRiisEyzNtRJIZ8DZ%2F8jddpjECxBgm8K0O4p8o%2FhnVz31G3AXIDuDapk7IFZfSUPM3&X-Amz-Signature=10630f093d0c192ee6cbd318dc1cdb5562d1f9f29cd578e0d38b09be6de359d4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOYWECZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8us6Ams3552FE2wdKClXD2tQF1TN2R%2BTs7Zl8N4hzywIhAIH4SXlGxG7I3EqzoxWxFE6s%2FkmfprKyJ3ODbUllS2ATKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyulp%2FODywVmepacncq3AOeoc7OLAXIFiR2EHW1ls5dvZrvGnuuZkyaL%2FDo31p9wmAv30CcrMA1yfWwJ1hcvkscOLYfoQn128mjflZfzY6WcZnIAMhVEomCZEmwfbrRw2VAh3ezJfOtlkzp0EkhuOq%2B%2BaxHKp8cesIQITFbTRcWURtNpGyrLesdpQ%2F4cuminL9AaE6fIxzDclPFgSVeucTeNYO%2BuYqmYDfPdzUuKUEp7M%2FUzpSM%2BjWX0bSF0x9EWbBitC0DSBgIHhNg0R56tflrkhxO74g1LJes91hvPfeaZuhax5mxWHMysZOl38SYHERcmfxCFq%2FuDIRZEfHg156QIrQ9FSgjmt%2Fkov6Z10sRORh%2B6GjBTNuNXnz8xuFEU2x4jyC1JEFiH%2FuK2xjImW9vU02%2FWIOBdpxk3rdpSicMQVNhPdcmw3pLu2u9AGLV5h5LwGrSxw3qs9wvHaKxxM4EQ5EPJMLocVHJffOQ7hDyT1xhFD2lZvs58%2FYypAFUcw%2BKFRagf6F2Vv0aTs8dbQKACGNDvnMFNMHLpeHHE1bdIWHoPklfOj3eu%2B8OtNC6iX1cDQAsKI8Z8CZxTmyZ8E4MYUSTU%2ByKbXHQcc6ISwN0J1xcx7yUfcUFeigsKQdllxoGgRStfoAR89OHbTCOrYG%2FBjqkAeEr%2BHL3OdK1H4HWfhpkamOXyYmpgQ0dxoWQyYC9HNU3BPKnAkdr8BfM6RXwl2GgNXSvOPR%2Bfz4iMdcv%2BM%2FvbcLiX1ho3S%2Bupt8dqcsr7wKRK5sExXOk3apwTVLRP4aUvwbVtZTQrA05%2BGcZuemnYN3qfdWRiisEyzNtRJIZ8DZ%2F8jddpjECxBgm8K0O4p8o%2FhnVz31G3AXIDuDapk7IFZfSUPM3&X-Amz-Signature=584262c3a69719bf9d340c381a7646372e08831ffa49d15ade1a19cadd69eb1d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
