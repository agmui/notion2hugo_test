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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMVVIBH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ2d5jTFH7H1qQJc%2BE0wEjcyAhAP%2BiViP7ERDtT%2Fd6qAiEAsgHxJBZoEZzjF%2BJTxmwu%2BodNjUISIrI2eDbvhAsrXzYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFYa86nvAqZsWuOibircA%2BTovEXOiPuCE4J10dAacF4S9f%2B%2FzwjaWTxiKvUvFiX4Zde1xZe0xstEMhaWXUR2LU2sFrSVs7UM%2BELV7awVbcNvWIczARLKlZeLAbB0G6hGp485oAbbVVGRIyq1FnAI9EwlD%2BmLM8Fb4l13MfC%2FRZ%2FrmxtPn4zS3PtTGBazAfFIontpxFgHgyJWxqg2IqfOncWBqmuwnE8zUeRMHMGg52GOAycbB6bKhZd5XoU%2FSRJaACoG6GFK0nkKmCAku1nF5Nm7yl1e2Otb3N9coV3IHEICsnQVy00H1vXZLH7KHOxtZwlkHbWhZ0muP%2BD%2B2dWPDepH0a43bdXdmwlKAP9CoSwhXLjbdBktKZR%2FzwpFxSp%2FW8WWHHOrmvcz1GeGtJgrxYiZSR2sRnpRj02uCs776SquxNGP7PbqFNgEVyoD%2BKrZluR89zdECGYIleHdXgjH%2BRGao4y7r2agLrGtPvvAgTAaq8YjMG35p5x6S1336g8hb%2BCuvPlCiLnv9Jw91MwpupJdmbykaiDNxYKNwZVViMDV0KWuQTj9c4Fu7tAVzhjRjbfW0Vm%2BLUFXBll6xQNUQ2WbrAUi668TKuktE9z4k3X8HcybJSR4bsWYoVXytR6Tag7PrvGk0kByPSXRMIDcjskGOqUBRt%2BKInVVl%2B86uFFpSTs1z3%2FRshOGPEPKEX7HlridrqUdrBu4tJxNuGahz%2BU5WROTVMBEpee1IgGCVRQ%2FGnnPwhtxnu46J7MoHIksFNv6yVAVV0WaYWcvqmWJOTn9FanIERx%2FmPkxIt7hJXtRgY73fhG3YYP7z4f9aturuXuq%2BbMEfKlqbXtL05NvLP94dAaB2NGyefHtZxDiHK6yEzmvVrNl9PPn&X-Amz-Signature=7a3a9ac2e14b62a5a1a14457016ede187e06e5b75318f1035af8e20b4ef58fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMVVIBH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ2d5jTFH7H1qQJc%2BE0wEjcyAhAP%2BiViP7ERDtT%2Fd6qAiEAsgHxJBZoEZzjF%2BJTxmwu%2BodNjUISIrI2eDbvhAsrXzYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFYa86nvAqZsWuOibircA%2BTovEXOiPuCE4J10dAacF4S9f%2B%2FzwjaWTxiKvUvFiX4Zde1xZe0xstEMhaWXUR2LU2sFrSVs7UM%2BELV7awVbcNvWIczARLKlZeLAbB0G6hGp485oAbbVVGRIyq1FnAI9EwlD%2BmLM8Fb4l13MfC%2FRZ%2FrmxtPn4zS3PtTGBazAfFIontpxFgHgyJWxqg2IqfOncWBqmuwnE8zUeRMHMGg52GOAycbB6bKhZd5XoU%2FSRJaACoG6GFK0nkKmCAku1nF5Nm7yl1e2Otb3N9coV3IHEICsnQVy00H1vXZLH7KHOxtZwlkHbWhZ0muP%2BD%2B2dWPDepH0a43bdXdmwlKAP9CoSwhXLjbdBktKZR%2FzwpFxSp%2FW8WWHHOrmvcz1GeGtJgrxYiZSR2sRnpRj02uCs776SquxNGP7PbqFNgEVyoD%2BKrZluR89zdECGYIleHdXgjH%2BRGao4y7r2agLrGtPvvAgTAaq8YjMG35p5x6S1336g8hb%2BCuvPlCiLnv9Jw91MwpupJdmbykaiDNxYKNwZVViMDV0KWuQTj9c4Fu7tAVzhjRjbfW0Vm%2BLUFXBll6xQNUQ2WbrAUi668TKuktE9z4k3X8HcybJSR4bsWYoVXytR6Tag7PrvGk0kByPSXRMIDcjskGOqUBRt%2BKInVVl%2B86uFFpSTs1z3%2FRshOGPEPKEX7HlridrqUdrBu4tJxNuGahz%2BU5WROTVMBEpee1IgGCVRQ%2FGnnPwhtxnu46J7MoHIksFNv6yVAVV0WaYWcvqmWJOTn9FanIERx%2FmPkxIt7hJXtRgY73fhG3YYP7z4f9aturuXuq%2BbMEfKlqbXtL05NvLP94dAaB2NGyefHtZxDiHK6yEzmvVrNl9PPn&X-Amz-Signature=93672a86cb08c4122604b28c89ad1991abc83ae31021d9f0f9c19119c51f0cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMVVIBH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ2d5jTFH7H1qQJc%2BE0wEjcyAhAP%2BiViP7ERDtT%2Fd6qAiEAsgHxJBZoEZzjF%2BJTxmwu%2BodNjUISIrI2eDbvhAsrXzYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFYa86nvAqZsWuOibircA%2BTovEXOiPuCE4J10dAacF4S9f%2B%2FzwjaWTxiKvUvFiX4Zde1xZe0xstEMhaWXUR2LU2sFrSVs7UM%2BELV7awVbcNvWIczARLKlZeLAbB0G6hGp485oAbbVVGRIyq1FnAI9EwlD%2BmLM8Fb4l13MfC%2FRZ%2FrmxtPn4zS3PtTGBazAfFIontpxFgHgyJWxqg2IqfOncWBqmuwnE8zUeRMHMGg52GOAycbB6bKhZd5XoU%2FSRJaACoG6GFK0nkKmCAku1nF5Nm7yl1e2Otb3N9coV3IHEICsnQVy00H1vXZLH7KHOxtZwlkHbWhZ0muP%2BD%2B2dWPDepH0a43bdXdmwlKAP9CoSwhXLjbdBktKZR%2FzwpFxSp%2FW8WWHHOrmvcz1GeGtJgrxYiZSR2sRnpRj02uCs776SquxNGP7PbqFNgEVyoD%2BKrZluR89zdECGYIleHdXgjH%2BRGao4y7r2agLrGtPvvAgTAaq8YjMG35p5x6S1336g8hb%2BCuvPlCiLnv9Jw91MwpupJdmbykaiDNxYKNwZVViMDV0KWuQTj9c4Fu7tAVzhjRjbfW0Vm%2BLUFXBll6xQNUQ2WbrAUi668TKuktE9z4k3X8HcybJSR4bsWYoVXytR6Tag7PrvGk0kByPSXRMIDcjskGOqUBRt%2BKInVVl%2B86uFFpSTs1z3%2FRshOGPEPKEX7HlridrqUdrBu4tJxNuGahz%2BU5WROTVMBEpee1IgGCVRQ%2FGnnPwhtxnu46J7MoHIksFNv6yVAVV0WaYWcvqmWJOTn9FanIERx%2FmPkxIt7hJXtRgY73fhG3YYP7z4f9aturuXuq%2BbMEfKlqbXtL05NvLP94dAaB2NGyefHtZxDiHK6yEzmvVrNl9PPn&X-Amz-Signature=06d99021f4fba7a5fc463f49c70aa2c42ff6d0bb5c64a90e06d488fe818f6643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMVVIBH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ2d5jTFH7H1qQJc%2BE0wEjcyAhAP%2BiViP7ERDtT%2Fd6qAiEAsgHxJBZoEZzjF%2BJTxmwu%2BodNjUISIrI2eDbvhAsrXzYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFYa86nvAqZsWuOibircA%2BTovEXOiPuCE4J10dAacF4S9f%2B%2FzwjaWTxiKvUvFiX4Zde1xZe0xstEMhaWXUR2LU2sFrSVs7UM%2BELV7awVbcNvWIczARLKlZeLAbB0G6hGp485oAbbVVGRIyq1FnAI9EwlD%2BmLM8Fb4l13MfC%2FRZ%2FrmxtPn4zS3PtTGBazAfFIontpxFgHgyJWxqg2IqfOncWBqmuwnE8zUeRMHMGg52GOAycbB6bKhZd5XoU%2FSRJaACoG6GFK0nkKmCAku1nF5Nm7yl1e2Otb3N9coV3IHEICsnQVy00H1vXZLH7KHOxtZwlkHbWhZ0muP%2BD%2B2dWPDepH0a43bdXdmwlKAP9CoSwhXLjbdBktKZR%2FzwpFxSp%2FW8WWHHOrmvcz1GeGtJgrxYiZSR2sRnpRj02uCs776SquxNGP7PbqFNgEVyoD%2BKrZluR89zdECGYIleHdXgjH%2BRGao4y7r2agLrGtPvvAgTAaq8YjMG35p5x6S1336g8hb%2BCuvPlCiLnv9Jw91MwpupJdmbykaiDNxYKNwZVViMDV0KWuQTj9c4Fu7tAVzhjRjbfW0Vm%2BLUFXBll6xQNUQ2WbrAUi668TKuktE9z4k3X8HcybJSR4bsWYoVXytR6Tag7PrvGk0kByPSXRMIDcjskGOqUBRt%2BKInVVl%2B86uFFpSTs1z3%2FRshOGPEPKEX7HlridrqUdrBu4tJxNuGahz%2BU5WROTVMBEpee1IgGCVRQ%2FGnnPwhtxnu46J7MoHIksFNv6yVAVV0WaYWcvqmWJOTn9FanIERx%2FmPkxIt7hJXtRgY73fhG3YYP7z4f9aturuXuq%2BbMEfKlqbXtL05NvLP94dAaB2NGyefHtZxDiHK6yEzmvVrNl9PPn&X-Amz-Signature=7a16176ed97e419c243349277a34732f93831e0bea1179a0d08c2276b01afe4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMVVIBH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ2d5jTFH7H1qQJc%2BE0wEjcyAhAP%2BiViP7ERDtT%2Fd6qAiEAsgHxJBZoEZzjF%2BJTxmwu%2BodNjUISIrI2eDbvhAsrXzYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFYa86nvAqZsWuOibircA%2BTovEXOiPuCE4J10dAacF4S9f%2B%2FzwjaWTxiKvUvFiX4Zde1xZe0xstEMhaWXUR2LU2sFrSVs7UM%2BELV7awVbcNvWIczARLKlZeLAbB0G6hGp485oAbbVVGRIyq1FnAI9EwlD%2BmLM8Fb4l13MfC%2FRZ%2FrmxtPn4zS3PtTGBazAfFIontpxFgHgyJWxqg2IqfOncWBqmuwnE8zUeRMHMGg52GOAycbB6bKhZd5XoU%2FSRJaACoG6GFK0nkKmCAku1nF5Nm7yl1e2Otb3N9coV3IHEICsnQVy00H1vXZLH7KHOxtZwlkHbWhZ0muP%2BD%2B2dWPDepH0a43bdXdmwlKAP9CoSwhXLjbdBktKZR%2FzwpFxSp%2FW8WWHHOrmvcz1GeGtJgrxYiZSR2sRnpRj02uCs776SquxNGP7PbqFNgEVyoD%2BKrZluR89zdECGYIleHdXgjH%2BRGao4y7r2agLrGtPvvAgTAaq8YjMG35p5x6S1336g8hb%2BCuvPlCiLnv9Jw91MwpupJdmbykaiDNxYKNwZVViMDV0KWuQTj9c4Fu7tAVzhjRjbfW0Vm%2BLUFXBll6xQNUQ2WbrAUi668TKuktE9z4k3X8HcybJSR4bsWYoVXytR6Tag7PrvGk0kByPSXRMIDcjskGOqUBRt%2BKInVVl%2B86uFFpSTs1z3%2FRshOGPEPKEX7HlridrqUdrBu4tJxNuGahz%2BU5WROTVMBEpee1IgGCVRQ%2FGnnPwhtxnu46J7MoHIksFNv6yVAVV0WaYWcvqmWJOTn9FanIERx%2FmPkxIt7hJXtRgY73fhG3YYP7z4f9aturuXuq%2BbMEfKlqbXtL05NvLP94dAaB2NGyefHtZxDiHK6yEzmvVrNl9PPn&X-Amz-Signature=2cffd0b5891ac6d4c189601dfef7fe64d1a5928390a9f2fd86dc2deb92883e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMVVIBH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ2d5jTFH7H1qQJc%2BE0wEjcyAhAP%2BiViP7ERDtT%2Fd6qAiEAsgHxJBZoEZzjF%2BJTxmwu%2BodNjUISIrI2eDbvhAsrXzYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFYa86nvAqZsWuOibircA%2BTovEXOiPuCE4J10dAacF4S9f%2B%2FzwjaWTxiKvUvFiX4Zde1xZe0xstEMhaWXUR2LU2sFrSVs7UM%2BELV7awVbcNvWIczARLKlZeLAbB0G6hGp485oAbbVVGRIyq1FnAI9EwlD%2BmLM8Fb4l13MfC%2FRZ%2FrmxtPn4zS3PtTGBazAfFIontpxFgHgyJWxqg2IqfOncWBqmuwnE8zUeRMHMGg52GOAycbB6bKhZd5XoU%2FSRJaACoG6GFK0nkKmCAku1nF5Nm7yl1e2Otb3N9coV3IHEICsnQVy00H1vXZLH7KHOxtZwlkHbWhZ0muP%2BD%2B2dWPDepH0a43bdXdmwlKAP9CoSwhXLjbdBktKZR%2FzwpFxSp%2FW8WWHHOrmvcz1GeGtJgrxYiZSR2sRnpRj02uCs776SquxNGP7PbqFNgEVyoD%2BKrZluR89zdECGYIleHdXgjH%2BRGao4y7r2agLrGtPvvAgTAaq8YjMG35p5x6S1336g8hb%2BCuvPlCiLnv9Jw91MwpupJdmbykaiDNxYKNwZVViMDV0KWuQTj9c4Fu7tAVzhjRjbfW0Vm%2BLUFXBll6xQNUQ2WbrAUi668TKuktE9z4k3X8HcybJSR4bsWYoVXytR6Tag7PrvGk0kByPSXRMIDcjskGOqUBRt%2BKInVVl%2B86uFFpSTs1z3%2FRshOGPEPKEX7HlridrqUdrBu4tJxNuGahz%2BU5WROTVMBEpee1IgGCVRQ%2FGnnPwhtxnu46J7MoHIksFNv6yVAVV0WaYWcvqmWJOTn9FanIERx%2FmPkxIt7hJXtRgY73fhG3YYP7z4f9aturuXuq%2BbMEfKlqbXtL05NvLP94dAaB2NGyefHtZxDiHK6yEzmvVrNl9PPn&X-Amz-Signature=751f0c630f39386944a89acd734ac2f1246f6ed48082a74c059d15c9c5f12a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMVVIBH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ2d5jTFH7H1qQJc%2BE0wEjcyAhAP%2BiViP7ERDtT%2Fd6qAiEAsgHxJBZoEZzjF%2BJTxmwu%2BodNjUISIrI2eDbvhAsrXzYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFYa86nvAqZsWuOibircA%2BTovEXOiPuCE4J10dAacF4S9f%2B%2FzwjaWTxiKvUvFiX4Zde1xZe0xstEMhaWXUR2LU2sFrSVs7UM%2BELV7awVbcNvWIczARLKlZeLAbB0G6hGp485oAbbVVGRIyq1FnAI9EwlD%2BmLM8Fb4l13MfC%2FRZ%2FrmxtPn4zS3PtTGBazAfFIontpxFgHgyJWxqg2IqfOncWBqmuwnE8zUeRMHMGg52GOAycbB6bKhZd5XoU%2FSRJaACoG6GFK0nkKmCAku1nF5Nm7yl1e2Otb3N9coV3IHEICsnQVy00H1vXZLH7KHOxtZwlkHbWhZ0muP%2BD%2B2dWPDepH0a43bdXdmwlKAP9CoSwhXLjbdBktKZR%2FzwpFxSp%2FW8WWHHOrmvcz1GeGtJgrxYiZSR2sRnpRj02uCs776SquxNGP7PbqFNgEVyoD%2BKrZluR89zdECGYIleHdXgjH%2BRGao4y7r2agLrGtPvvAgTAaq8YjMG35p5x6S1336g8hb%2BCuvPlCiLnv9Jw91MwpupJdmbykaiDNxYKNwZVViMDV0KWuQTj9c4Fu7tAVzhjRjbfW0Vm%2BLUFXBll6xQNUQ2WbrAUi668TKuktE9z4k3X8HcybJSR4bsWYoVXytR6Tag7PrvGk0kByPSXRMIDcjskGOqUBRt%2BKInVVl%2B86uFFpSTs1z3%2FRshOGPEPKEX7HlridrqUdrBu4tJxNuGahz%2BU5WROTVMBEpee1IgGCVRQ%2FGnnPwhtxnu46J7MoHIksFNv6yVAVV0WaYWcvqmWJOTn9FanIERx%2FmPkxIt7hJXtRgY73fhG3YYP7z4f9aturuXuq%2BbMEfKlqbXtL05NvLP94dAaB2NGyefHtZxDiHK6yEzmvVrNl9PPn&X-Amz-Signature=ba386c007205f66b9dfe0d5f3477b185f16bfd3843b1a2b4c5fe31ff5c51a67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
