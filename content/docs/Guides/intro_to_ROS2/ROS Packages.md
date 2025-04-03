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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZZKFVC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCGWH%2FAwkUPh7zcOHE7VVcLaxpVqXA3FeqDlDEJ56uQOgIhAPVHQixd%2FGsl9X2dtMLt%2F8q1clvjhKRUzhlwiVGZHFxNKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjpKP8QG8RL5x69gq3APQMExt1ae99BZNlFcDBEpww5wqzjCvAPaspAXLAggDnpjMD7NumR1VTP2o5nutr27hgZa5Um1JlZ42KkUgllYPsCElMK%2BS8jDVDf6LeAkWh1KryuehAX4p5yTkPpB7IpkYSr57GaC%2FcVrgFhcMM9YmhY1CyhCI0KrhhQcdsq3ppT0j1t65EBXygKH3SIm9wM7OInnaZZUzHKzWoXpqYgRqhs8wpP7R8sEwUNA60oVuuRqQBxrQmMPt81vFNwTfLa%2BiD3PccRaRL9pKeiNAqB4E9q6EpwnUyDpdGD93zCtRcx3yA9kqubS324tQnxf6lFV2LmZTsA8G0YrLHgbaj9aE7ZlRWEBpKgVrx6oKyGbEaE9EcLQbn5wHIqXrO5dJvJ5p7xWdz%2FKyslNDlATzS0p3auEbu%2FoRItUFuiNRtXqjzELsS89c1AZmduP6imjeqDNCjTxxVGnNFhwhpOkd%2BMinu6TbFv%2FILYcglngMDMJe2lGO4cZfH%2BcIy402T993s2vKzwVCH46JdYoPXWZsINJy0olI8SNSLdW2DU1xs37e8zOvzBQR3VBSlntPOn0hBaFyQI6TdkLHy7Kgaw8T85w8iljZBSH3vkiNrYMnr6tqC1pmqHBBJKK%2FyzTN2DDyrbi%2FBjqkAf%2FPC6WnfKRbtZMS20%2FzPGR%2F%2F4k75lwQCziGDqZpBAB0Bp9UWCbVAmIfa4IgvIzhbPVkkjJIBI0a71MqC%2BQGpQ1BEICEp1Vx1wI9%2BjWwzg1MYx9QRSSMNesVczvlg4ohp%2FXmu%2FfTx%2Fv%2BpFemngEhkwltCQVGe4gumNV1rUq%2FTiHLvphqPNw3C9id9wRMq7NKKrB%2F4jXtxQMGRVOWZvoY%2FO2m9PA8&X-Amz-Signature=0df53c091890faca8e118e2747af9118ffdfa994acacac256d18645c0f1c4724&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZZKFVC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCGWH%2FAwkUPh7zcOHE7VVcLaxpVqXA3FeqDlDEJ56uQOgIhAPVHQixd%2FGsl9X2dtMLt%2F8q1clvjhKRUzhlwiVGZHFxNKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjpKP8QG8RL5x69gq3APQMExt1ae99BZNlFcDBEpww5wqzjCvAPaspAXLAggDnpjMD7NumR1VTP2o5nutr27hgZa5Um1JlZ42KkUgllYPsCElMK%2BS8jDVDf6LeAkWh1KryuehAX4p5yTkPpB7IpkYSr57GaC%2FcVrgFhcMM9YmhY1CyhCI0KrhhQcdsq3ppT0j1t65EBXygKH3SIm9wM7OInnaZZUzHKzWoXpqYgRqhs8wpP7R8sEwUNA60oVuuRqQBxrQmMPt81vFNwTfLa%2BiD3PccRaRL9pKeiNAqB4E9q6EpwnUyDpdGD93zCtRcx3yA9kqubS324tQnxf6lFV2LmZTsA8G0YrLHgbaj9aE7ZlRWEBpKgVrx6oKyGbEaE9EcLQbn5wHIqXrO5dJvJ5p7xWdz%2FKyslNDlATzS0p3auEbu%2FoRItUFuiNRtXqjzELsS89c1AZmduP6imjeqDNCjTxxVGnNFhwhpOkd%2BMinu6TbFv%2FILYcglngMDMJe2lGO4cZfH%2BcIy402T993s2vKzwVCH46JdYoPXWZsINJy0olI8SNSLdW2DU1xs37e8zOvzBQR3VBSlntPOn0hBaFyQI6TdkLHy7Kgaw8T85w8iljZBSH3vkiNrYMnr6tqC1pmqHBBJKK%2FyzTN2DDyrbi%2FBjqkAf%2FPC6WnfKRbtZMS20%2FzPGR%2F%2F4k75lwQCziGDqZpBAB0Bp9UWCbVAmIfa4IgvIzhbPVkkjJIBI0a71MqC%2BQGpQ1BEICEp1Vx1wI9%2BjWwzg1MYx9QRSSMNesVczvlg4ohp%2FXmu%2FfTx%2Fv%2BpFemngEhkwltCQVGe4gumNV1rUq%2FTiHLvphqPNw3C9id9wRMq7NKKrB%2F4jXtxQMGRVOWZvoY%2FO2m9PA8&X-Amz-Signature=6d8d806c9e2c721927827cf92ff3387f7b75acf143cf19146153ecbac369c52d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZZKFVC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCGWH%2FAwkUPh7zcOHE7VVcLaxpVqXA3FeqDlDEJ56uQOgIhAPVHQixd%2FGsl9X2dtMLt%2F8q1clvjhKRUzhlwiVGZHFxNKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjpKP8QG8RL5x69gq3APQMExt1ae99BZNlFcDBEpww5wqzjCvAPaspAXLAggDnpjMD7NumR1VTP2o5nutr27hgZa5Um1JlZ42KkUgllYPsCElMK%2BS8jDVDf6LeAkWh1KryuehAX4p5yTkPpB7IpkYSr57GaC%2FcVrgFhcMM9YmhY1CyhCI0KrhhQcdsq3ppT0j1t65EBXygKH3SIm9wM7OInnaZZUzHKzWoXpqYgRqhs8wpP7R8sEwUNA60oVuuRqQBxrQmMPt81vFNwTfLa%2BiD3PccRaRL9pKeiNAqB4E9q6EpwnUyDpdGD93zCtRcx3yA9kqubS324tQnxf6lFV2LmZTsA8G0YrLHgbaj9aE7ZlRWEBpKgVrx6oKyGbEaE9EcLQbn5wHIqXrO5dJvJ5p7xWdz%2FKyslNDlATzS0p3auEbu%2FoRItUFuiNRtXqjzELsS89c1AZmduP6imjeqDNCjTxxVGnNFhwhpOkd%2BMinu6TbFv%2FILYcglngMDMJe2lGO4cZfH%2BcIy402T993s2vKzwVCH46JdYoPXWZsINJy0olI8SNSLdW2DU1xs37e8zOvzBQR3VBSlntPOn0hBaFyQI6TdkLHy7Kgaw8T85w8iljZBSH3vkiNrYMnr6tqC1pmqHBBJKK%2FyzTN2DDyrbi%2FBjqkAf%2FPC6WnfKRbtZMS20%2FzPGR%2F%2F4k75lwQCziGDqZpBAB0Bp9UWCbVAmIfa4IgvIzhbPVkkjJIBI0a71MqC%2BQGpQ1BEICEp1Vx1wI9%2BjWwzg1MYx9QRSSMNesVczvlg4ohp%2FXmu%2FfTx%2Fv%2BpFemngEhkwltCQVGe4gumNV1rUq%2FTiHLvphqPNw3C9id9wRMq7NKKrB%2F4jXtxQMGRVOWZvoY%2FO2m9PA8&X-Amz-Signature=4657923ac4952e75c45aa32a9afbefcd3132f19fb500503ef1272d7a92a7c2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZZKFVC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCGWH%2FAwkUPh7zcOHE7VVcLaxpVqXA3FeqDlDEJ56uQOgIhAPVHQixd%2FGsl9X2dtMLt%2F8q1clvjhKRUzhlwiVGZHFxNKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjpKP8QG8RL5x69gq3APQMExt1ae99BZNlFcDBEpww5wqzjCvAPaspAXLAggDnpjMD7NumR1VTP2o5nutr27hgZa5Um1JlZ42KkUgllYPsCElMK%2BS8jDVDf6LeAkWh1KryuehAX4p5yTkPpB7IpkYSr57GaC%2FcVrgFhcMM9YmhY1CyhCI0KrhhQcdsq3ppT0j1t65EBXygKH3SIm9wM7OInnaZZUzHKzWoXpqYgRqhs8wpP7R8sEwUNA60oVuuRqQBxrQmMPt81vFNwTfLa%2BiD3PccRaRL9pKeiNAqB4E9q6EpwnUyDpdGD93zCtRcx3yA9kqubS324tQnxf6lFV2LmZTsA8G0YrLHgbaj9aE7ZlRWEBpKgVrx6oKyGbEaE9EcLQbn5wHIqXrO5dJvJ5p7xWdz%2FKyslNDlATzS0p3auEbu%2FoRItUFuiNRtXqjzELsS89c1AZmduP6imjeqDNCjTxxVGnNFhwhpOkd%2BMinu6TbFv%2FILYcglngMDMJe2lGO4cZfH%2BcIy402T993s2vKzwVCH46JdYoPXWZsINJy0olI8SNSLdW2DU1xs37e8zOvzBQR3VBSlntPOn0hBaFyQI6TdkLHy7Kgaw8T85w8iljZBSH3vkiNrYMnr6tqC1pmqHBBJKK%2FyzTN2DDyrbi%2FBjqkAf%2FPC6WnfKRbtZMS20%2FzPGR%2F%2F4k75lwQCziGDqZpBAB0Bp9UWCbVAmIfa4IgvIzhbPVkkjJIBI0a71MqC%2BQGpQ1BEICEp1Vx1wI9%2BjWwzg1MYx9QRSSMNesVczvlg4ohp%2FXmu%2FfTx%2Fv%2BpFemngEhkwltCQVGe4gumNV1rUq%2FTiHLvphqPNw3C9id9wRMq7NKKrB%2F4jXtxQMGRVOWZvoY%2FO2m9PA8&X-Amz-Signature=0bf6d42c2aed07a7e79d81097a45416117611e3dc601d7453a2fca3eb5fcfadb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZZKFVC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCGWH%2FAwkUPh7zcOHE7VVcLaxpVqXA3FeqDlDEJ56uQOgIhAPVHQixd%2FGsl9X2dtMLt%2F8q1clvjhKRUzhlwiVGZHFxNKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjpKP8QG8RL5x69gq3APQMExt1ae99BZNlFcDBEpww5wqzjCvAPaspAXLAggDnpjMD7NumR1VTP2o5nutr27hgZa5Um1JlZ42KkUgllYPsCElMK%2BS8jDVDf6LeAkWh1KryuehAX4p5yTkPpB7IpkYSr57GaC%2FcVrgFhcMM9YmhY1CyhCI0KrhhQcdsq3ppT0j1t65EBXygKH3SIm9wM7OInnaZZUzHKzWoXpqYgRqhs8wpP7R8sEwUNA60oVuuRqQBxrQmMPt81vFNwTfLa%2BiD3PccRaRL9pKeiNAqB4E9q6EpwnUyDpdGD93zCtRcx3yA9kqubS324tQnxf6lFV2LmZTsA8G0YrLHgbaj9aE7ZlRWEBpKgVrx6oKyGbEaE9EcLQbn5wHIqXrO5dJvJ5p7xWdz%2FKyslNDlATzS0p3auEbu%2FoRItUFuiNRtXqjzELsS89c1AZmduP6imjeqDNCjTxxVGnNFhwhpOkd%2BMinu6TbFv%2FILYcglngMDMJe2lGO4cZfH%2BcIy402T993s2vKzwVCH46JdYoPXWZsINJy0olI8SNSLdW2DU1xs37e8zOvzBQR3VBSlntPOn0hBaFyQI6TdkLHy7Kgaw8T85w8iljZBSH3vkiNrYMnr6tqC1pmqHBBJKK%2FyzTN2DDyrbi%2FBjqkAf%2FPC6WnfKRbtZMS20%2FzPGR%2F%2F4k75lwQCziGDqZpBAB0Bp9UWCbVAmIfa4IgvIzhbPVkkjJIBI0a71MqC%2BQGpQ1BEICEp1Vx1wI9%2BjWwzg1MYx9QRSSMNesVczvlg4ohp%2FXmu%2FfTx%2Fv%2BpFemngEhkwltCQVGe4gumNV1rUq%2FTiHLvphqPNw3C9id9wRMq7NKKrB%2F4jXtxQMGRVOWZvoY%2FO2m9PA8&X-Amz-Signature=035374aa4e3d626aa25a75e0af13a2df5d8fc0ffed07134c53c1d51f3b103ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZZKFVC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCGWH%2FAwkUPh7zcOHE7VVcLaxpVqXA3FeqDlDEJ56uQOgIhAPVHQixd%2FGsl9X2dtMLt%2F8q1clvjhKRUzhlwiVGZHFxNKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjpKP8QG8RL5x69gq3APQMExt1ae99BZNlFcDBEpww5wqzjCvAPaspAXLAggDnpjMD7NumR1VTP2o5nutr27hgZa5Um1JlZ42KkUgllYPsCElMK%2BS8jDVDf6LeAkWh1KryuehAX4p5yTkPpB7IpkYSr57GaC%2FcVrgFhcMM9YmhY1CyhCI0KrhhQcdsq3ppT0j1t65EBXygKH3SIm9wM7OInnaZZUzHKzWoXpqYgRqhs8wpP7R8sEwUNA60oVuuRqQBxrQmMPt81vFNwTfLa%2BiD3PccRaRL9pKeiNAqB4E9q6EpwnUyDpdGD93zCtRcx3yA9kqubS324tQnxf6lFV2LmZTsA8G0YrLHgbaj9aE7ZlRWEBpKgVrx6oKyGbEaE9EcLQbn5wHIqXrO5dJvJ5p7xWdz%2FKyslNDlATzS0p3auEbu%2FoRItUFuiNRtXqjzELsS89c1AZmduP6imjeqDNCjTxxVGnNFhwhpOkd%2BMinu6TbFv%2FILYcglngMDMJe2lGO4cZfH%2BcIy402T993s2vKzwVCH46JdYoPXWZsINJy0olI8SNSLdW2DU1xs37e8zOvzBQR3VBSlntPOn0hBaFyQI6TdkLHy7Kgaw8T85w8iljZBSH3vkiNrYMnr6tqC1pmqHBBJKK%2FyzTN2DDyrbi%2FBjqkAf%2FPC6WnfKRbtZMS20%2FzPGR%2F%2F4k75lwQCziGDqZpBAB0Bp9UWCbVAmIfa4IgvIzhbPVkkjJIBI0a71MqC%2BQGpQ1BEICEp1Vx1wI9%2BjWwzg1MYx9QRSSMNesVczvlg4ohp%2FXmu%2FfTx%2Fv%2BpFemngEhkwltCQVGe4gumNV1rUq%2FTiHLvphqPNw3C9id9wRMq7NKKrB%2F4jXtxQMGRVOWZvoY%2FO2m9PA8&X-Amz-Signature=4cceb6d63027a9a93452ab5912f1df217973ea53c48784e7394d9ce0b78c0362&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZZKFVC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCGWH%2FAwkUPh7zcOHE7VVcLaxpVqXA3FeqDlDEJ56uQOgIhAPVHQixd%2FGsl9X2dtMLt%2F8q1clvjhKRUzhlwiVGZHFxNKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgjpKP8QG8RL5x69gq3APQMExt1ae99BZNlFcDBEpww5wqzjCvAPaspAXLAggDnpjMD7NumR1VTP2o5nutr27hgZa5Um1JlZ42KkUgllYPsCElMK%2BS8jDVDf6LeAkWh1KryuehAX4p5yTkPpB7IpkYSr57GaC%2FcVrgFhcMM9YmhY1CyhCI0KrhhQcdsq3ppT0j1t65EBXygKH3SIm9wM7OInnaZZUzHKzWoXpqYgRqhs8wpP7R8sEwUNA60oVuuRqQBxrQmMPt81vFNwTfLa%2BiD3PccRaRL9pKeiNAqB4E9q6EpwnUyDpdGD93zCtRcx3yA9kqubS324tQnxf6lFV2LmZTsA8G0YrLHgbaj9aE7ZlRWEBpKgVrx6oKyGbEaE9EcLQbn5wHIqXrO5dJvJ5p7xWdz%2FKyslNDlATzS0p3auEbu%2FoRItUFuiNRtXqjzELsS89c1AZmduP6imjeqDNCjTxxVGnNFhwhpOkd%2BMinu6TbFv%2FILYcglngMDMJe2lGO4cZfH%2BcIy402T993s2vKzwVCH46JdYoPXWZsINJy0olI8SNSLdW2DU1xs37e8zOvzBQR3VBSlntPOn0hBaFyQI6TdkLHy7Kgaw8T85w8iljZBSH3vkiNrYMnr6tqC1pmqHBBJKK%2FyzTN2DDyrbi%2FBjqkAf%2FPC6WnfKRbtZMS20%2FzPGR%2F%2F4k75lwQCziGDqZpBAB0Bp9UWCbVAmIfa4IgvIzhbPVkkjJIBI0a71MqC%2BQGpQ1BEICEp1Vx1wI9%2BjWwzg1MYx9QRSSMNesVczvlg4ohp%2FXmu%2FfTx%2Fv%2BpFemngEhkwltCQVGe4gumNV1rUq%2FTiHLvphqPNw3C9id9wRMq7NKKrB%2F4jXtxQMGRVOWZvoY%2FO2m9PA8&X-Amz-Signature=6df621f84e96ce2ae56547520ae5d69ae9d45dae9171864b56cd56c5ca5e6a20&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
