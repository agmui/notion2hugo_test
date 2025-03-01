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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPFLTEE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA3rivYrnoUlhVqzsXOz2txlLGyCgcMWmjLoKZfsfFVbAiBHg%2B8KxIMkumAXCws19bRCd%2Bw8nyfMlYE%2FMjZKtB3zVCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKj5Zo6B12mmcXhIBKtwDBGcUJrk7DsqIH5AZXyXExB%2BR%2Fch4Qg7g1JS%2FEJpQDJ4oMgh%2B9BThfm889OVci9FmRG3G6U9Tk9szi%2FcHwUTrM6x9LsZrqk9Q8ubLnjfjO7B4wT1110OsAd2RPbaUqgHvPiiYKlla2IA2YASScr3uht5QD8yS5uRuXnCpLynsV1K1IQzpEyqRFLAx25m7nm9sd2Hva4ebIr7fSHTPMAr4%2BRynqRTu60J0p30NCHZGgXOIPB33BlAqFYEOLbLpfyEFex6gyeRRqhPANOCbFDbeebvLIMplu9m%2B7Ku37H5cn0NhapAhYFuLZNMWnb2z9z7U%2By2NLFJto2ltUD7NhSczsPL9ZRSS3ZyZOenJKdwRWqMfM3JilIn%2BcBSHmM8wJl7mcXlipu0bQ5sQqJY%2BmBn%2BUa5XlSamYjEl4pdPlvZBOeNu%2FEBRDZmjt2aofJD1ChWzsllMEb7Qop%2FrKSMneldP1t8YbzM50Yt5u76Ev0TRLByVsf1i3b4QkCQfDSte9%2F4ymKcL0V9Bi2YvXhkt3WCijExrJdoRD%2FnzDZSdwENAcFY8O1fJfsARCWYcwbeKAPXgpVSBvSnwXme45yw8lHRQYmsxqPHVez9UIb1Qr8TtveydFHnJ51CTBJc4XJIwh%2FKJvgY6pgFvXe08JnNjkSHNgGafKERdR%2FX03sqwXIMLaqA83lUwBf7GMC%2FkIloweuojPlnPeapyX05E04x7XqIcSCzyFgk%2FIMM%2BVU5E58DZVfyQUfq%2FtdMqH4GtvvM1%2BigNWeOPcRN4Ak4q81hxxCGB6p8f2gY6smyzKe9Z%2BOirkTwqqEsDfRqjbAuFXmNBNO6tIkXUm6J9MZPNdMvYcAnRhzuQvg%2BSg8%2FQlqay&X-Amz-Signature=3a10f356ea06f2f82ea831cf8479166616ba6226927732c9dc73a25a5feed537&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPFLTEE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA3rivYrnoUlhVqzsXOz2txlLGyCgcMWmjLoKZfsfFVbAiBHg%2B8KxIMkumAXCws19bRCd%2Bw8nyfMlYE%2FMjZKtB3zVCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKj5Zo6B12mmcXhIBKtwDBGcUJrk7DsqIH5AZXyXExB%2BR%2Fch4Qg7g1JS%2FEJpQDJ4oMgh%2B9BThfm889OVci9FmRG3G6U9Tk9szi%2FcHwUTrM6x9LsZrqk9Q8ubLnjfjO7B4wT1110OsAd2RPbaUqgHvPiiYKlla2IA2YASScr3uht5QD8yS5uRuXnCpLynsV1K1IQzpEyqRFLAx25m7nm9sd2Hva4ebIr7fSHTPMAr4%2BRynqRTu60J0p30NCHZGgXOIPB33BlAqFYEOLbLpfyEFex6gyeRRqhPANOCbFDbeebvLIMplu9m%2B7Ku37H5cn0NhapAhYFuLZNMWnb2z9z7U%2By2NLFJto2ltUD7NhSczsPL9ZRSS3ZyZOenJKdwRWqMfM3JilIn%2BcBSHmM8wJl7mcXlipu0bQ5sQqJY%2BmBn%2BUa5XlSamYjEl4pdPlvZBOeNu%2FEBRDZmjt2aofJD1ChWzsllMEb7Qop%2FrKSMneldP1t8YbzM50Yt5u76Ev0TRLByVsf1i3b4QkCQfDSte9%2F4ymKcL0V9Bi2YvXhkt3WCijExrJdoRD%2FnzDZSdwENAcFY8O1fJfsARCWYcwbeKAPXgpVSBvSnwXme45yw8lHRQYmsxqPHVez9UIb1Qr8TtveydFHnJ51CTBJc4XJIwh%2FKJvgY6pgFvXe08JnNjkSHNgGafKERdR%2FX03sqwXIMLaqA83lUwBf7GMC%2FkIloweuojPlnPeapyX05E04x7XqIcSCzyFgk%2FIMM%2BVU5E58DZVfyQUfq%2FtdMqH4GtvvM1%2BigNWeOPcRN4Ak4q81hxxCGB6p8f2gY6smyzKe9Z%2BOirkTwqqEsDfRqjbAuFXmNBNO6tIkXUm6J9MZPNdMvYcAnRhzuQvg%2BSg8%2FQlqay&X-Amz-Signature=a64d61781ac62c902a0dc5f9c89c9d3e0de34937f69e301019b8123cee38843c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPFLTEE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA3rivYrnoUlhVqzsXOz2txlLGyCgcMWmjLoKZfsfFVbAiBHg%2B8KxIMkumAXCws19bRCd%2Bw8nyfMlYE%2FMjZKtB3zVCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKj5Zo6B12mmcXhIBKtwDBGcUJrk7DsqIH5AZXyXExB%2BR%2Fch4Qg7g1JS%2FEJpQDJ4oMgh%2B9BThfm889OVci9FmRG3G6U9Tk9szi%2FcHwUTrM6x9LsZrqk9Q8ubLnjfjO7B4wT1110OsAd2RPbaUqgHvPiiYKlla2IA2YASScr3uht5QD8yS5uRuXnCpLynsV1K1IQzpEyqRFLAx25m7nm9sd2Hva4ebIr7fSHTPMAr4%2BRynqRTu60J0p30NCHZGgXOIPB33BlAqFYEOLbLpfyEFex6gyeRRqhPANOCbFDbeebvLIMplu9m%2B7Ku37H5cn0NhapAhYFuLZNMWnb2z9z7U%2By2NLFJto2ltUD7NhSczsPL9ZRSS3ZyZOenJKdwRWqMfM3JilIn%2BcBSHmM8wJl7mcXlipu0bQ5sQqJY%2BmBn%2BUa5XlSamYjEl4pdPlvZBOeNu%2FEBRDZmjt2aofJD1ChWzsllMEb7Qop%2FrKSMneldP1t8YbzM50Yt5u76Ev0TRLByVsf1i3b4QkCQfDSte9%2F4ymKcL0V9Bi2YvXhkt3WCijExrJdoRD%2FnzDZSdwENAcFY8O1fJfsARCWYcwbeKAPXgpVSBvSnwXme45yw8lHRQYmsxqPHVez9UIb1Qr8TtveydFHnJ51CTBJc4XJIwh%2FKJvgY6pgFvXe08JnNjkSHNgGafKERdR%2FX03sqwXIMLaqA83lUwBf7GMC%2FkIloweuojPlnPeapyX05E04x7XqIcSCzyFgk%2FIMM%2BVU5E58DZVfyQUfq%2FtdMqH4GtvvM1%2BigNWeOPcRN4Ak4q81hxxCGB6p8f2gY6smyzKe9Z%2BOirkTwqqEsDfRqjbAuFXmNBNO6tIkXUm6J9MZPNdMvYcAnRhzuQvg%2BSg8%2FQlqay&X-Amz-Signature=6903640cfdf5ade882509ebb87d63949d32eef1a02ef061a0a1cf59eeb994089&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPFLTEE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA3rivYrnoUlhVqzsXOz2txlLGyCgcMWmjLoKZfsfFVbAiBHg%2B8KxIMkumAXCws19bRCd%2Bw8nyfMlYE%2FMjZKtB3zVCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKj5Zo6B12mmcXhIBKtwDBGcUJrk7DsqIH5AZXyXExB%2BR%2Fch4Qg7g1JS%2FEJpQDJ4oMgh%2B9BThfm889OVci9FmRG3G6U9Tk9szi%2FcHwUTrM6x9LsZrqk9Q8ubLnjfjO7B4wT1110OsAd2RPbaUqgHvPiiYKlla2IA2YASScr3uht5QD8yS5uRuXnCpLynsV1K1IQzpEyqRFLAx25m7nm9sd2Hva4ebIr7fSHTPMAr4%2BRynqRTu60J0p30NCHZGgXOIPB33BlAqFYEOLbLpfyEFex6gyeRRqhPANOCbFDbeebvLIMplu9m%2B7Ku37H5cn0NhapAhYFuLZNMWnb2z9z7U%2By2NLFJto2ltUD7NhSczsPL9ZRSS3ZyZOenJKdwRWqMfM3JilIn%2BcBSHmM8wJl7mcXlipu0bQ5sQqJY%2BmBn%2BUa5XlSamYjEl4pdPlvZBOeNu%2FEBRDZmjt2aofJD1ChWzsllMEb7Qop%2FrKSMneldP1t8YbzM50Yt5u76Ev0TRLByVsf1i3b4QkCQfDSte9%2F4ymKcL0V9Bi2YvXhkt3WCijExrJdoRD%2FnzDZSdwENAcFY8O1fJfsARCWYcwbeKAPXgpVSBvSnwXme45yw8lHRQYmsxqPHVez9UIb1Qr8TtveydFHnJ51CTBJc4XJIwh%2FKJvgY6pgFvXe08JnNjkSHNgGafKERdR%2FX03sqwXIMLaqA83lUwBf7GMC%2FkIloweuojPlnPeapyX05E04x7XqIcSCzyFgk%2FIMM%2BVU5E58DZVfyQUfq%2FtdMqH4GtvvM1%2BigNWeOPcRN4Ak4q81hxxCGB6p8f2gY6smyzKe9Z%2BOirkTwqqEsDfRqjbAuFXmNBNO6tIkXUm6J9MZPNdMvYcAnRhzuQvg%2BSg8%2FQlqay&X-Amz-Signature=305cea1b48b1b4ad318d4cdf06379d7f5bd8bc99a4b9e93ad5145f156759027a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPFLTEE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA3rivYrnoUlhVqzsXOz2txlLGyCgcMWmjLoKZfsfFVbAiBHg%2B8KxIMkumAXCws19bRCd%2Bw8nyfMlYE%2FMjZKtB3zVCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKj5Zo6B12mmcXhIBKtwDBGcUJrk7DsqIH5AZXyXExB%2BR%2Fch4Qg7g1JS%2FEJpQDJ4oMgh%2B9BThfm889OVci9FmRG3G6U9Tk9szi%2FcHwUTrM6x9LsZrqk9Q8ubLnjfjO7B4wT1110OsAd2RPbaUqgHvPiiYKlla2IA2YASScr3uht5QD8yS5uRuXnCpLynsV1K1IQzpEyqRFLAx25m7nm9sd2Hva4ebIr7fSHTPMAr4%2BRynqRTu60J0p30NCHZGgXOIPB33BlAqFYEOLbLpfyEFex6gyeRRqhPANOCbFDbeebvLIMplu9m%2B7Ku37H5cn0NhapAhYFuLZNMWnb2z9z7U%2By2NLFJto2ltUD7NhSczsPL9ZRSS3ZyZOenJKdwRWqMfM3JilIn%2BcBSHmM8wJl7mcXlipu0bQ5sQqJY%2BmBn%2BUa5XlSamYjEl4pdPlvZBOeNu%2FEBRDZmjt2aofJD1ChWzsllMEb7Qop%2FrKSMneldP1t8YbzM50Yt5u76Ev0TRLByVsf1i3b4QkCQfDSte9%2F4ymKcL0V9Bi2YvXhkt3WCijExrJdoRD%2FnzDZSdwENAcFY8O1fJfsARCWYcwbeKAPXgpVSBvSnwXme45yw8lHRQYmsxqPHVez9UIb1Qr8TtveydFHnJ51CTBJc4XJIwh%2FKJvgY6pgFvXe08JnNjkSHNgGafKERdR%2FX03sqwXIMLaqA83lUwBf7GMC%2FkIloweuojPlnPeapyX05E04x7XqIcSCzyFgk%2FIMM%2BVU5E58DZVfyQUfq%2FtdMqH4GtvvM1%2BigNWeOPcRN4Ak4q81hxxCGB6p8f2gY6smyzKe9Z%2BOirkTwqqEsDfRqjbAuFXmNBNO6tIkXUm6J9MZPNdMvYcAnRhzuQvg%2BSg8%2FQlqay&X-Amz-Signature=161b52d3537ef58fd9497e92576a2e8f679382f2f22e45ff647d5e7eda7a6a76&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPFLTEE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA3rivYrnoUlhVqzsXOz2txlLGyCgcMWmjLoKZfsfFVbAiBHg%2B8KxIMkumAXCws19bRCd%2Bw8nyfMlYE%2FMjZKtB3zVCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKj5Zo6B12mmcXhIBKtwDBGcUJrk7DsqIH5AZXyXExB%2BR%2Fch4Qg7g1JS%2FEJpQDJ4oMgh%2B9BThfm889OVci9FmRG3G6U9Tk9szi%2FcHwUTrM6x9LsZrqk9Q8ubLnjfjO7B4wT1110OsAd2RPbaUqgHvPiiYKlla2IA2YASScr3uht5QD8yS5uRuXnCpLynsV1K1IQzpEyqRFLAx25m7nm9sd2Hva4ebIr7fSHTPMAr4%2BRynqRTu60J0p30NCHZGgXOIPB33BlAqFYEOLbLpfyEFex6gyeRRqhPANOCbFDbeebvLIMplu9m%2B7Ku37H5cn0NhapAhYFuLZNMWnb2z9z7U%2By2NLFJto2ltUD7NhSczsPL9ZRSS3ZyZOenJKdwRWqMfM3JilIn%2BcBSHmM8wJl7mcXlipu0bQ5sQqJY%2BmBn%2BUa5XlSamYjEl4pdPlvZBOeNu%2FEBRDZmjt2aofJD1ChWzsllMEb7Qop%2FrKSMneldP1t8YbzM50Yt5u76Ev0TRLByVsf1i3b4QkCQfDSte9%2F4ymKcL0V9Bi2YvXhkt3WCijExrJdoRD%2FnzDZSdwENAcFY8O1fJfsARCWYcwbeKAPXgpVSBvSnwXme45yw8lHRQYmsxqPHVez9UIb1Qr8TtveydFHnJ51CTBJc4XJIwh%2FKJvgY6pgFvXe08JnNjkSHNgGafKERdR%2FX03sqwXIMLaqA83lUwBf7GMC%2FkIloweuojPlnPeapyX05E04x7XqIcSCzyFgk%2FIMM%2BVU5E58DZVfyQUfq%2FtdMqH4GtvvM1%2BigNWeOPcRN4Ak4q81hxxCGB6p8f2gY6smyzKe9Z%2BOirkTwqqEsDfRqjbAuFXmNBNO6tIkXUm6J9MZPNdMvYcAnRhzuQvg%2BSg8%2FQlqay&X-Amz-Signature=ccb0caf933f024dacdaf63eed4178f08ac3e46ae8be2f8d0d73723bdb7c0490b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPFLTEE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA3rivYrnoUlhVqzsXOz2txlLGyCgcMWmjLoKZfsfFVbAiBHg%2B8KxIMkumAXCws19bRCd%2Bw8nyfMlYE%2FMjZKtB3zVCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKj5Zo6B12mmcXhIBKtwDBGcUJrk7DsqIH5AZXyXExB%2BR%2Fch4Qg7g1JS%2FEJpQDJ4oMgh%2B9BThfm889OVci9FmRG3G6U9Tk9szi%2FcHwUTrM6x9LsZrqk9Q8ubLnjfjO7B4wT1110OsAd2RPbaUqgHvPiiYKlla2IA2YASScr3uht5QD8yS5uRuXnCpLynsV1K1IQzpEyqRFLAx25m7nm9sd2Hva4ebIr7fSHTPMAr4%2BRynqRTu60J0p30NCHZGgXOIPB33BlAqFYEOLbLpfyEFex6gyeRRqhPANOCbFDbeebvLIMplu9m%2B7Ku37H5cn0NhapAhYFuLZNMWnb2z9z7U%2By2NLFJto2ltUD7NhSczsPL9ZRSS3ZyZOenJKdwRWqMfM3JilIn%2BcBSHmM8wJl7mcXlipu0bQ5sQqJY%2BmBn%2BUa5XlSamYjEl4pdPlvZBOeNu%2FEBRDZmjt2aofJD1ChWzsllMEb7Qop%2FrKSMneldP1t8YbzM50Yt5u76Ev0TRLByVsf1i3b4QkCQfDSte9%2F4ymKcL0V9Bi2YvXhkt3WCijExrJdoRD%2FnzDZSdwENAcFY8O1fJfsARCWYcwbeKAPXgpVSBvSnwXme45yw8lHRQYmsxqPHVez9UIb1Qr8TtveydFHnJ51CTBJc4XJIwh%2FKJvgY6pgFvXe08JnNjkSHNgGafKERdR%2FX03sqwXIMLaqA83lUwBf7GMC%2FkIloweuojPlnPeapyX05E04x7XqIcSCzyFgk%2FIMM%2BVU5E58DZVfyQUfq%2FtdMqH4GtvvM1%2BigNWeOPcRN4Ak4q81hxxCGB6p8f2gY6smyzKe9Z%2BOirkTwqqEsDfRqjbAuFXmNBNO6tIkXUm6J9MZPNdMvYcAnRhzuQvg%2BSg8%2FQlqay&X-Amz-Signature=d74640f5567012df7db45295b7ed69a73d08c3679548a2b83013356f6f678125&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
