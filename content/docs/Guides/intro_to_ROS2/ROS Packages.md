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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBZ5Y47%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGVskblwAP5URRdlBHf2H6t4FDJF80JWNoSTZpHQJmCFAiBuHYIi%2BTeoL8Xdx79zlL9FkuMowCDylsMVDzQ2TJqxjSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMMFFRujwhrFBhdSHEKtwDrYHEUwszNGnV2z%2FdO0JxZP%2Bw9%2BZltEPrzjHfrt386TrJ6%2Bnp9ZOGHh4BHlh4idyxF2lBIcCcrpMnXwIi2blSaag3kGzKdPBji2s42H3oRhK7ItcLwiPc4pj4WJprvdwgBHr9YrPEHNqTEqCEubHReVFbkkVdo3ivhQ%2BKyJzJMRdXoNsyZBUfsR96eTb6TJB6iJUrKTxEm3WfGcfvkjluJD9237bW5JAtpC0SOlJMn2f5iLsz6BjIA46lfNPBpqNjfuZbEzMSPmFLGdXleg1DeK6HeVfG3gVfvSVhrrjF6hIDpdAchI5spBiCkcsxGqoMFxn3SAhAYEJwb77Xdk%2F8J0A8Lrv%2BuEkrYFiZ9RMii5xuH7faW4JODGmtHXlhR2%2BgD6eam1G3S2gYqFVeMz4paH75pOqUubfiEBpIhOgv3YixtuiJHSpZCr1XpXIvTZ%2FhczRzOCkAVcBqN5pUjm8uuMVQKyIXwIlEg%2FPounYxQXiF3JToKk70gxjHhjhoeewVyeLVud2trkivXZzJ1NCntzpKcka%2B9%2FfVSkRREKmUBaUZ7W%2F8mmptiztX2ms48ybXUvdb31h%2FFefLIDcZX%2Bawzm%2B81KIg8Hsceip4cRf3hXS93q8xFYD3WrRfC%2B4w%2B4DGwQY6pgH1bevXH6j9qle0IN7%2F9kL%2F3gPt2%2BQAlgscGVuI9GDrfA%2B8qNE1pZI9TWoSLV4q%2F3wBjArNIZkYA4hw1QZP8pbm5rghXvIVc6iCnHR%2FFkkuBdfoD%2FmEOR%2F4iWY6frvMtVRasamSwAA%2B4V%2FstCshyGGtbOZhACeuw%2BWVR47QpedjZ%2BtZvoWIl4Ccw2VuythVwV4zRUsaTwxwrkTh0JVtVToZ5pmrsdIM&X-Amz-Signature=12f57c8fea1ad4668db301aa32d1f29336bfb8625f07203c5c50b9fd6ac0505a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBZ5Y47%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGVskblwAP5URRdlBHf2H6t4FDJF80JWNoSTZpHQJmCFAiBuHYIi%2BTeoL8Xdx79zlL9FkuMowCDylsMVDzQ2TJqxjSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMMFFRujwhrFBhdSHEKtwDrYHEUwszNGnV2z%2FdO0JxZP%2Bw9%2BZltEPrzjHfrt386TrJ6%2Bnp9ZOGHh4BHlh4idyxF2lBIcCcrpMnXwIi2blSaag3kGzKdPBji2s42H3oRhK7ItcLwiPc4pj4WJprvdwgBHr9YrPEHNqTEqCEubHReVFbkkVdo3ivhQ%2BKyJzJMRdXoNsyZBUfsR96eTb6TJB6iJUrKTxEm3WfGcfvkjluJD9237bW5JAtpC0SOlJMn2f5iLsz6BjIA46lfNPBpqNjfuZbEzMSPmFLGdXleg1DeK6HeVfG3gVfvSVhrrjF6hIDpdAchI5spBiCkcsxGqoMFxn3SAhAYEJwb77Xdk%2F8J0A8Lrv%2BuEkrYFiZ9RMii5xuH7faW4JODGmtHXlhR2%2BgD6eam1G3S2gYqFVeMz4paH75pOqUubfiEBpIhOgv3YixtuiJHSpZCr1XpXIvTZ%2FhczRzOCkAVcBqN5pUjm8uuMVQKyIXwIlEg%2FPounYxQXiF3JToKk70gxjHhjhoeewVyeLVud2trkivXZzJ1NCntzpKcka%2B9%2FfVSkRREKmUBaUZ7W%2F8mmptiztX2ms48ybXUvdb31h%2FFefLIDcZX%2Bawzm%2B81KIg8Hsceip4cRf3hXS93q8xFYD3WrRfC%2B4w%2B4DGwQY6pgH1bevXH6j9qle0IN7%2F9kL%2F3gPt2%2BQAlgscGVuI9GDrfA%2B8qNE1pZI9TWoSLV4q%2F3wBjArNIZkYA4hw1QZP8pbm5rghXvIVc6iCnHR%2FFkkuBdfoD%2FmEOR%2F4iWY6frvMtVRasamSwAA%2B4V%2FstCshyGGtbOZhACeuw%2BWVR47QpedjZ%2BtZvoWIl4Ccw2VuythVwV4zRUsaTwxwrkTh0JVtVToZ5pmrsdIM&X-Amz-Signature=5ba239c491f5cbce03e23924e0daf37e04573138842cb8b2fed1ad6d8989806c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBZ5Y47%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGVskblwAP5URRdlBHf2H6t4FDJF80JWNoSTZpHQJmCFAiBuHYIi%2BTeoL8Xdx79zlL9FkuMowCDylsMVDzQ2TJqxjSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMMFFRujwhrFBhdSHEKtwDrYHEUwszNGnV2z%2FdO0JxZP%2Bw9%2BZltEPrzjHfrt386TrJ6%2Bnp9ZOGHh4BHlh4idyxF2lBIcCcrpMnXwIi2blSaag3kGzKdPBji2s42H3oRhK7ItcLwiPc4pj4WJprvdwgBHr9YrPEHNqTEqCEubHReVFbkkVdo3ivhQ%2BKyJzJMRdXoNsyZBUfsR96eTb6TJB6iJUrKTxEm3WfGcfvkjluJD9237bW5JAtpC0SOlJMn2f5iLsz6BjIA46lfNPBpqNjfuZbEzMSPmFLGdXleg1DeK6HeVfG3gVfvSVhrrjF6hIDpdAchI5spBiCkcsxGqoMFxn3SAhAYEJwb77Xdk%2F8J0A8Lrv%2BuEkrYFiZ9RMii5xuH7faW4JODGmtHXlhR2%2BgD6eam1G3S2gYqFVeMz4paH75pOqUubfiEBpIhOgv3YixtuiJHSpZCr1XpXIvTZ%2FhczRzOCkAVcBqN5pUjm8uuMVQKyIXwIlEg%2FPounYxQXiF3JToKk70gxjHhjhoeewVyeLVud2trkivXZzJ1NCntzpKcka%2B9%2FfVSkRREKmUBaUZ7W%2F8mmptiztX2ms48ybXUvdb31h%2FFefLIDcZX%2Bawzm%2B81KIg8Hsceip4cRf3hXS93q8xFYD3WrRfC%2B4w%2B4DGwQY6pgH1bevXH6j9qle0IN7%2F9kL%2F3gPt2%2BQAlgscGVuI9GDrfA%2B8qNE1pZI9TWoSLV4q%2F3wBjArNIZkYA4hw1QZP8pbm5rghXvIVc6iCnHR%2FFkkuBdfoD%2FmEOR%2F4iWY6frvMtVRasamSwAA%2B4V%2FstCshyGGtbOZhACeuw%2BWVR47QpedjZ%2BtZvoWIl4Ccw2VuythVwV4zRUsaTwxwrkTh0JVtVToZ5pmrsdIM&X-Amz-Signature=f8cc766c9341ab93804f7cca1d79052c611529d3981e8375ecd0acf252555d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBZ5Y47%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGVskblwAP5URRdlBHf2H6t4FDJF80JWNoSTZpHQJmCFAiBuHYIi%2BTeoL8Xdx79zlL9FkuMowCDylsMVDzQ2TJqxjSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMMFFRujwhrFBhdSHEKtwDrYHEUwszNGnV2z%2FdO0JxZP%2Bw9%2BZltEPrzjHfrt386TrJ6%2Bnp9ZOGHh4BHlh4idyxF2lBIcCcrpMnXwIi2blSaag3kGzKdPBji2s42H3oRhK7ItcLwiPc4pj4WJprvdwgBHr9YrPEHNqTEqCEubHReVFbkkVdo3ivhQ%2BKyJzJMRdXoNsyZBUfsR96eTb6TJB6iJUrKTxEm3WfGcfvkjluJD9237bW5JAtpC0SOlJMn2f5iLsz6BjIA46lfNPBpqNjfuZbEzMSPmFLGdXleg1DeK6HeVfG3gVfvSVhrrjF6hIDpdAchI5spBiCkcsxGqoMFxn3SAhAYEJwb77Xdk%2F8J0A8Lrv%2BuEkrYFiZ9RMii5xuH7faW4JODGmtHXlhR2%2BgD6eam1G3S2gYqFVeMz4paH75pOqUubfiEBpIhOgv3YixtuiJHSpZCr1XpXIvTZ%2FhczRzOCkAVcBqN5pUjm8uuMVQKyIXwIlEg%2FPounYxQXiF3JToKk70gxjHhjhoeewVyeLVud2trkivXZzJ1NCntzpKcka%2B9%2FfVSkRREKmUBaUZ7W%2F8mmptiztX2ms48ybXUvdb31h%2FFefLIDcZX%2Bawzm%2B81KIg8Hsceip4cRf3hXS93q8xFYD3WrRfC%2B4w%2B4DGwQY6pgH1bevXH6j9qle0IN7%2F9kL%2F3gPt2%2BQAlgscGVuI9GDrfA%2B8qNE1pZI9TWoSLV4q%2F3wBjArNIZkYA4hw1QZP8pbm5rghXvIVc6iCnHR%2FFkkuBdfoD%2FmEOR%2F4iWY6frvMtVRasamSwAA%2B4V%2FstCshyGGtbOZhACeuw%2BWVR47QpedjZ%2BtZvoWIl4Ccw2VuythVwV4zRUsaTwxwrkTh0JVtVToZ5pmrsdIM&X-Amz-Signature=f2bb6e2c0b0249f04b414e5aa02e1ad111383e614aab3954be0cbf075dd5b066&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBZ5Y47%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGVskblwAP5URRdlBHf2H6t4FDJF80JWNoSTZpHQJmCFAiBuHYIi%2BTeoL8Xdx79zlL9FkuMowCDylsMVDzQ2TJqxjSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMMFFRujwhrFBhdSHEKtwDrYHEUwszNGnV2z%2FdO0JxZP%2Bw9%2BZltEPrzjHfrt386TrJ6%2Bnp9ZOGHh4BHlh4idyxF2lBIcCcrpMnXwIi2blSaag3kGzKdPBji2s42H3oRhK7ItcLwiPc4pj4WJprvdwgBHr9YrPEHNqTEqCEubHReVFbkkVdo3ivhQ%2BKyJzJMRdXoNsyZBUfsR96eTb6TJB6iJUrKTxEm3WfGcfvkjluJD9237bW5JAtpC0SOlJMn2f5iLsz6BjIA46lfNPBpqNjfuZbEzMSPmFLGdXleg1DeK6HeVfG3gVfvSVhrrjF6hIDpdAchI5spBiCkcsxGqoMFxn3SAhAYEJwb77Xdk%2F8J0A8Lrv%2BuEkrYFiZ9RMii5xuH7faW4JODGmtHXlhR2%2BgD6eam1G3S2gYqFVeMz4paH75pOqUubfiEBpIhOgv3YixtuiJHSpZCr1XpXIvTZ%2FhczRzOCkAVcBqN5pUjm8uuMVQKyIXwIlEg%2FPounYxQXiF3JToKk70gxjHhjhoeewVyeLVud2trkivXZzJ1NCntzpKcka%2B9%2FfVSkRREKmUBaUZ7W%2F8mmptiztX2ms48ybXUvdb31h%2FFefLIDcZX%2Bawzm%2B81KIg8Hsceip4cRf3hXS93q8xFYD3WrRfC%2B4w%2B4DGwQY6pgH1bevXH6j9qle0IN7%2F9kL%2F3gPt2%2BQAlgscGVuI9GDrfA%2B8qNE1pZI9TWoSLV4q%2F3wBjArNIZkYA4hw1QZP8pbm5rghXvIVc6iCnHR%2FFkkuBdfoD%2FmEOR%2F4iWY6frvMtVRasamSwAA%2B4V%2FstCshyGGtbOZhACeuw%2BWVR47QpedjZ%2BtZvoWIl4Ccw2VuythVwV4zRUsaTwxwrkTh0JVtVToZ5pmrsdIM&X-Amz-Signature=e4a023ddce75885bc73079f2dceb0ace134d5746c588827891f9e4073dfe8780&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBZ5Y47%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGVskblwAP5URRdlBHf2H6t4FDJF80JWNoSTZpHQJmCFAiBuHYIi%2BTeoL8Xdx79zlL9FkuMowCDylsMVDzQ2TJqxjSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMMFFRujwhrFBhdSHEKtwDrYHEUwszNGnV2z%2FdO0JxZP%2Bw9%2BZltEPrzjHfrt386TrJ6%2Bnp9ZOGHh4BHlh4idyxF2lBIcCcrpMnXwIi2blSaag3kGzKdPBji2s42H3oRhK7ItcLwiPc4pj4WJprvdwgBHr9YrPEHNqTEqCEubHReVFbkkVdo3ivhQ%2BKyJzJMRdXoNsyZBUfsR96eTb6TJB6iJUrKTxEm3WfGcfvkjluJD9237bW5JAtpC0SOlJMn2f5iLsz6BjIA46lfNPBpqNjfuZbEzMSPmFLGdXleg1DeK6HeVfG3gVfvSVhrrjF6hIDpdAchI5spBiCkcsxGqoMFxn3SAhAYEJwb77Xdk%2F8J0A8Lrv%2BuEkrYFiZ9RMii5xuH7faW4JODGmtHXlhR2%2BgD6eam1G3S2gYqFVeMz4paH75pOqUubfiEBpIhOgv3YixtuiJHSpZCr1XpXIvTZ%2FhczRzOCkAVcBqN5pUjm8uuMVQKyIXwIlEg%2FPounYxQXiF3JToKk70gxjHhjhoeewVyeLVud2trkivXZzJ1NCntzpKcka%2B9%2FfVSkRREKmUBaUZ7W%2F8mmptiztX2ms48ybXUvdb31h%2FFefLIDcZX%2Bawzm%2B81KIg8Hsceip4cRf3hXS93q8xFYD3WrRfC%2B4w%2B4DGwQY6pgH1bevXH6j9qle0IN7%2F9kL%2F3gPt2%2BQAlgscGVuI9GDrfA%2B8qNE1pZI9TWoSLV4q%2F3wBjArNIZkYA4hw1QZP8pbm5rghXvIVc6iCnHR%2FFkkuBdfoD%2FmEOR%2F4iWY6frvMtVRasamSwAA%2B4V%2FstCshyGGtbOZhACeuw%2BWVR47QpedjZ%2BtZvoWIl4Ccw2VuythVwV4zRUsaTwxwrkTh0JVtVToZ5pmrsdIM&X-Amz-Signature=b21f8bb2c6215abee5e755bec6f9c216de719d444569229dd9be6a19b897a9db&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBZ5Y47%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGVskblwAP5URRdlBHf2H6t4FDJF80JWNoSTZpHQJmCFAiBuHYIi%2BTeoL8Xdx79zlL9FkuMowCDylsMVDzQ2TJqxjSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMMFFRujwhrFBhdSHEKtwDrYHEUwszNGnV2z%2FdO0JxZP%2Bw9%2BZltEPrzjHfrt386TrJ6%2Bnp9ZOGHh4BHlh4idyxF2lBIcCcrpMnXwIi2blSaag3kGzKdPBji2s42H3oRhK7ItcLwiPc4pj4WJprvdwgBHr9YrPEHNqTEqCEubHReVFbkkVdo3ivhQ%2BKyJzJMRdXoNsyZBUfsR96eTb6TJB6iJUrKTxEm3WfGcfvkjluJD9237bW5JAtpC0SOlJMn2f5iLsz6BjIA46lfNPBpqNjfuZbEzMSPmFLGdXleg1DeK6HeVfG3gVfvSVhrrjF6hIDpdAchI5spBiCkcsxGqoMFxn3SAhAYEJwb77Xdk%2F8J0A8Lrv%2BuEkrYFiZ9RMii5xuH7faW4JODGmtHXlhR2%2BgD6eam1G3S2gYqFVeMz4paH75pOqUubfiEBpIhOgv3YixtuiJHSpZCr1XpXIvTZ%2FhczRzOCkAVcBqN5pUjm8uuMVQKyIXwIlEg%2FPounYxQXiF3JToKk70gxjHhjhoeewVyeLVud2trkivXZzJ1NCntzpKcka%2B9%2FfVSkRREKmUBaUZ7W%2F8mmptiztX2ms48ybXUvdb31h%2FFefLIDcZX%2Bawzm%2B81KIg8Hsceip4cRf3hXS93q8xFYD3WrRfC%2B4w%2B4DGwQY6pgH1bevXH6j9qle0IN7%2F9kL%2F3gPt2%2BQAlgscGVuI9GDrfA%2B8qNE1pZI9TWoSLV4q%2F3wBjArNIZkYA4hw1QZP8pbm5rghXvIVc6iCnHR%2FFkkuBdfoD%2FmEOR%2F4iWY6frvMtVRasamSwAA%2B4V%2FstCshyGGtbOZhACeuw%2BWVR47QpedjZ%2BtZvoWIl4Ccw2VuythVwV4zRUsaTwxwrkTh0JVtVToZ5pmrsdIM&X-Amz-Signature=d0302f8162c29e8e791a73bae74012a8eb6a55be40e2d234b17f8969a1451c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
