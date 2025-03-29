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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYZD6TW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDezBJlUDHEHnt2N9FfqAxkFcAAvTFwMxOwCHgDCpWSEQIhALH98nk%2FRFdnnk9aAABduJP3gEU0Kh63UpLph5mt8XmTKv8DCH8QABoMNjM3NDIzMTgzODA1IgzD2r5jLMGFX6xTYN8q3AMx%2Bs867yC073ZS%2FV6hcDuN%2BlxDHRSDycTiMLRKcsI9VbyfvCxYBTDDhmJ8oH1BtGyC%2Fp5ioMY1W%2BNwtpmZi8p269OnQFiV5TfbHdyvNeRdGQUfVb0RwWK0mBqGj5UVBBVdcxiCIMsLaGBS9xN9sXRzdTiMAsoIGbBPSXte5A2d9bmSSZUdTyLBtpE8VuYWKvQd4DAIvuIwVrRkiDNFMfefwDjQu%2BNigwQ%2BTERuYAN1s2qFL%2BRe4fhRLFpxAd%2FAdyNhxj3Yziqi7AmW0%2BpUW8xSE2JxR%2B05EKzuFepA47uz02dqctMrPu9ciX%2BBb99gXEm%2FoRRpH%2F6oft9wgQ%2B%2FWP0g3JD7PDAzLinPbWe4iEn%2FDawXiYfQBbnJ8fD8zWsd1UzVAeCo1a1jbWo1UzfOi%2F9HjgSosNirSqp%2FIcSfcrDPO0dRerx667Mr%2FF4pIM8IIRNfCjvYHXb26MrXIZec3HKZnAGr3CqNkCBY4ch55qF5k%2Bkc9gMMGB9RbFs6Ju0%2F0KpaGxATX5GWyP8IKAXnE6dWNlauLPC9ipik6DM6VrhD0Kr3t4oL7wPLQ9DEfAR%2FQfVFKDLW4eMF2CogFv4uhRAcN4CkEjPIAwCfBBmjh3l52Q07if%2BSGIQ0J4Gk0jCN3aG%2FBjqkAV0T948Nmdkz2As7aiUGl0N1KO0P4ipx3jsQmONuzlbNWb7z%2FZS5p560Bn91oFhxC4f0TtbXYhitcV%2B%2FP%2FE3W3m0vGdG%2B1MHake26bUJrDR5MCrvErOkD4pSHe8FT9%2BUSkFX2eNdBUF879j2wdyEzDcyRJ4wpbF%2F5gvGGI3RO9%2Fw9nNOL7XcZPO5tM1pTxXAN%2ByuZUSPZ3porMWFBrG6lPKPyStv&X-Amz-Signature=d50fb6cf072f2dc2e8ea3ca49dedd7f0d586256226b0f34ceaf94f0538032a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYZD6TW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDezBJlUDHEHnt2N9FfqAxkFcAAvTFwMxOwCHgDCpWSEQIhALH98nk%2FRFdnnk9aAABduJP3gEU0Kh63UpLph5mt8XmTKv8DCH8QABoMNjM3NDIzMTgzODA1IgzD2r5jLMGFX6xTYN8q3AMx%2Bs867yC073ZS%2FV6hcDuN%2BlxDHRSDycTiMLRKcsI9VbyfvCxYBTDDhmJ8oH1BtGyC%2Fp5ioMY1W%2BNwtpmZi8p269OnQFiV5TfbHdyvNeRdGQUfVb0RwWK0mBqGj5UVBBVdcxiCIMsLaGBS9xN9sXRzdTiMAsoIGbBPSXte5A2d9bmSSZUdTyLBtpE8VuYWKvQd4DAIvuIwVrRkiDNFMfefwDjQu%2BNigwQ%2BTERuYAN1s2qFL%2BRe4fhRLFpxAd%2FAdyNhxj3Yziqi7AmW0%2BpUW8xSE2JxR%2B05EKzuFepA47uz02dqctMrPu9ciX%2BBb99gXEm%2FoRRpH%2F6oft9wgQ%2B%2FWP0g3JD7PDAzLinPbWe4iEn%2FDawXiYfQBbnJ8fD8zWsd1UzVAeCo1a1jbWo1UzfOi%2F9HjgSosNirSqp%2FIcSfcrDPO0dRerx667Mr%2FF4pIM8IIRNfCjvYHXb26MrXIZec3HKZnAGr3CqNkCBY4ch55qF5k%2Bkc9gMMGB9RbFs6Ju0%2F0KpaGxATX5GWyP8IKAXnE6dWNlauLPC9ipik6DM6VrhD0Kr3t4oL7wPLQ9DEfAR%2FQfVFKDLW4eMF2CogFv4uhRAcN4CkEjPIAwCfBBmjh3l52Q07if%2BSGIQ0J4Gk0jCN3aG%2FBjqkAV0T948Nmdkz2As7aiUGl0N1KO0P4ipx3jsQmONuzlbNWb7z%2FZS5p560Bn91oFhxC4f0TtbXYhitcV%2B%2FP%2FE3W3m0vGdG%2B1MHake26bUJrDR5MCrvErOkD4pSHe8FT9%2BUSkFX2eNdBUF879j2wdyEzDcyRJ4wpbF%2F5gvGGI3RO9%2Fw9nNOL7XcZPO5tM1pTxXAN%2ByuZUSPZ3porMWFBrG6lPKPyStv&X-Amz-Signature=586c8662e3a534547f5c74de5fea2356438cdc2daf2519c020371756c76f8fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYZD6TW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDezBJlUDHEHnt2N9FfqAxkFcAAvTFwMxOwCHgDCpWSEQIhALH98nk%2FRFdnnk9aAABduJP3gEU0Kh63UpLph5mt8XmTKv8DCH8QABoMNjM3NDIzMTgzODA1IgzD2r5jLMGFX6xTYN8q3AMx%2Bs867yC073ZS%2FV6hcDuN%2BlxDHRSDycTiMLRKcsI9VbyfvCxYBTDDhmJ8oH1BtGyC%2Fp5ioMY1W%2BNwtpmZi8p269OnQFiV5TfbHdyvNeRdGQUfVb0RwWK0mBqGj5UVBBVdcxiCIMsLaGBS9xN9sXRzdTiMAsoIGbBPSXte5A2d9bmSSZUdTyLBtpE8VuYWKvQd4DAIvuIwVrRkiDNFMfefwDjQu%2BNigwQ%2BTERuYAN1s2qFL%2BRe4fhRLFpxAd%2FAdyNhxj3Yziqi7AmW0%2BpUW8xSE2JxR%2B05EKzuFepA47uz02dqctMrPu9ciX%2BBb99gXEm%2FoRRpH%2F6oft9wgQ%2B%2FWP0g3JD7PDAzLinPbWe4iEn%2FDawXiYfQBbnJ8fD8zWsd1UzVAeCo1a1jbWo1UzfOi%2F9HjgSosNirSqp%2FIcSfcrDPO0dRerx667Mr%2FF4pIM8IIRNfCjvYHXb26MrXIZec3HKZnAGr3CqNkCBY4ch55qF5k%2Bkc9gMMGB9RbFs6Ju0%2F0KpaGxATX5GWyP8IKAXnE6dWNlauLPC9ipik6DM6VrhD0Kr3t4oL7wPLQ9DEfAR%2FQfVFKDLW4eMF2CogFv4uhRAcN4CkEjPIAwCfBBmjh3l52Q07if%2BSGIQ0J4Gk0jCN3aG%2FBjqkAV0T948Nmdkz2As7aiUGl0N1KO0P4ipx3jsQmONuzlbNWb7z%2FZS5p560Bn91oFhxC4f0TtbXYhitcV%2B%2FP%2FE3W3m0vGdG%2B1MHake26bUJrDR5MCrvErOkD4pSHe8FT9%2BUSkFX2eNdBUF879j2wdyEzDcyRJ4wpbF%2F5gvGGI3RO9%2Fw9nNOL7XcZPO5tM1pTxXAN%2ByuZUSPZ3porMWFBrG6lPKPyStv&X-Amz-Signature=263cf5ead08026a4319544754ffad2b5f4e752be65c36da7d813d4aaadfb9fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYZD6TW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDezBJlUDHEHnt2N9FfqAxkFcAAvTFwMxOwCHgDCpWSEQIhALH98nk%2FRFdnnk9aAABduJP3gEU0Kh63UpLph5mt8XmTKv8DCH8QABoMNjM3NDIzMTgzODA1IgzD2r5jLMGFX6xTYN8q3AMx%2Bs867yC073ZS%2FV6hcDuN%2BlxDHRSDycTiMLRKcsI9VbyfvCxYBTDDhmJ8oH1BtGyC%2Fp5ioMY1W%2BNwtpmZi8p269OnQFiV5TfbHdyvNeRdGQUfVb0RwWK0mBqGj5UVBBVdcxiCIMsLaGBS9xN9sXRzdTiMAsoIGbBPSXte5A2d9bmSSZUdTyLBtpE8VuYWKvQd4DAIvuIwVrRkiDNFMfefwDjQu%2BNigwQ%2BTERuYAN1s2qFL%2BRe4fhRLFpxAd%2FAdyNhxj3Yziqi7AmW0%2BpUW8xSE2JxR%2B05EKzuFepA47uz02dqctMrPu9ciX%2BBb99gXEm%2FoRRpH%2F6oft9wgQ%2B%2FWP0g3JD7PDAzLinPbWe4iEn%2FDawXiYfQBbnJ8fD8zWsd1UzVAeCo1a1jbWo1UzfOi%2F9HjgSosNirSqp%2FIcSfcrDPO0dRerx667Mr%2FF4pIM8IIRNfCjvYHXb26MrXIZec3HKZnAGr3CqNkCBY4ch55qF5k%2Bkc9gMMGB9RbFs6Ju0%2F0KpaGxATX5GWyP8IKAXnE6dWNlauLPC9ipik6DM6VrhD0Kr3t4oL7wPLQ9DEfAR%2FQfVFKDLW4eMF2CogFv4uhRAcN4CkEjPIAwCfBBmjh3l52Q07if%2BSGIQ0J4Gk0jCN3aG%2FBjqkAV0T948Nmdkz2As7aiUGl0N1KO0P4ipx3jsQmONuzlbNWb7z%2FZS5p560Bn91oFhxC4f0TtbXYhitcV%2B%2FP%2FE3W3m0vGdG%2B1MHake26bUJrDR5MCrvErOkD4pSHe8FT9%2BUSkFX2eNdBUF879j2wdyEzDcyRJ4wpbF%2F5gvGGI3RO9%2Fw9nNOL7XcZPO5tM1pTxXAN%2ByuZUSPZ3porMWFBrG6lPKPyStv&X-Amz-Signature=72453760bd099019c2b6f79b3d6e0e922c68aa7b2f0ea909a95fb9877947e87b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYZD6TW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDezBJlUDHEHnt2N9FfqAxkFcAAvTFwMxOwCHgDCpWSEQIhALH98nk%2FRFdnnk9aAABduJP3gEU0Kh63UpLph5mt8XmTKv8DCH8QABoMNjM3NDIzMTgzODA1IgzD2r5jLMGFX6xTYN8q3AMx%2Bs867yC073ZS%2FV6hcDuN%2BlxDHRSDycTiMLRKcsI9VbyfvCxYBTDDhmJ8oH1BtGyC%2Fp5ioMY1W%2BNwtpmZi8p269OnQFiV5TfbHdyvNeRdGQUfVb0RwWK0mBqGj5UVBBVdcxiCIMsLaGBS9xN9sXRzdTiMAsoIGbBPSXte5A2d9bmSSZUdTyLBtpE8VuYWKvQd4DAIvuIwVrRkiDNFMfefwDjQu%2BNigwQ%2BTERuYAN1s2qFL%2BRe4fhRLFpxAd%2FAdyNhxj3Yziqi7AmW0%2BpUW8xSE2JxR%2B05EKzuFepA47uz02dqctMrPu9ciX%2BBb99gXEm%2FoRRpH%2F6oft9wgQ%2B%2FWP0g3JD7PDAzLinPbWe4iEn%2FDawXiYfQBbnJ8fD8zWsd1UzVAeCo1a1jbWo1UzfOi%2F9HjgSosNirSqp%2FIcSfcrDPO0dRerx667Mr%2FF4pIM8IIRNfCjvYHXb26MrXIZec3HKZnAGr3CqNkCBY4ch55qF5k%2Bkc9gMMGB9RbFs6Ju0%2F0KpaGxATX5GWyP8IKAXnE6dWNlauLPC9ipik6DM6VrhD0Kr3t4oL7wPLQ9DEfAR%2FQfVFKDLW4eMF2CogFv4uhRAcN4CkEjPIAwCfBBmjh3l52Q07if%2BSGIQ0J4Gk0jCN3aG%2FBjqkAV0T948Nmdkz2As7aiUGl0N1KO0P4ipx3jsQmONuzlbNWb7z%2FZS5p560Bn91oFhxC4f0TtbXYhitcV%2B%2FP%2FE3W3m0vGdG%2B1MHake26bUJrDR5MCrvErOkD4pSHe8FT9%2BUSkFX2eNdBUF879j2wdyEzDcyRJ4wpbF%2F5gvGGI3RO9%2Fw9nNOL7XcZPO5tM1pTxXAN%2ByuZUSPZ3porMWFBrG6lPKPyStv&X-Amz-Signature=22b856e6d3c3b6faea7cd6c53a8f1a851a1c2089fed6df1115e265d6c7c31a65&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYZD6TW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDezBJlUDHEHnt2N9FfqAxkFcAAvTFwMxOwCHgDCpWSEQIhALH98nk%2FRFdnnk9aAABduJP3gEU0Kh63UpLph5mt8XmTKv8DCH8QABoMNjM3NDIzMTgzODA1IgzD2r5jLMGFX6xTYN8q3AMx%2Bs867yC073ZS%2FV6hcDuN%2BlxDHRSDycTiMLRKcsI9VbyfvCxYBTDDhmJ8oH1BtGyC%2Fp5ioMY1W%2BNwtpmZi8p269OnQFiV5TfbHdyvNeRdGQUfVb0RwWK0mBqGj5UVBBVdcxiCIMsLaGBS9xN9sXRzdTiMAsoIGbBPSXte5A2d9bmSSZUdTyLBtpE8VuYWKvQd4DAIvuIwVrRkiDNFMfefwDjQu%2BNigwQ%2BTERuYAN1s2qFL%2BRe4fhRLFpxAd%2FAdyNhxj3Yziqi7AmW0%2BpUW8xSE2JxR%2B05EKzuFepA47uz02dqctMrPu9ciX%2BBb99gXEm%2FoRRpH%2F6oft9wgQ%2B%2FWP0g3JD7PDAzLinPbWe4iEn%2FDawXiYfQBbnJ8fD8zWsd1UzVAeCo1a1jbWo1UzfOi%2F9HjgSosNirSqp%2FIcSfcrDPO0dRerx667Mr%2FF4pIM8IIRNfCjvYHXb26MrXIZec3HKZnAGr3CqNkCBY4ch55qF5k%2Bkc9gMMGB9RbFs6Ju0%2F0KpaGxATX5GWyP8IKAXnE6dWNlauLPC9ipik6DM6VrhD0Kr3t4oL7wPLQ9DEfAR%2FQfVFKDLW4eMF2CogFv4uhRAcN4CkEjPIAwCfBBmjh3l52Q07if%2BSGIQ0J4Gk0jCN3aG%2FBjqkAV0T948Nmdkz2As7aiUGl0N1KO0P4ipx3jsQmONuzlbNWb7z%2FZS5p560Bn91oFhxC4f0TtbXYhitcV%2B%2FP%2FE3W3m0vGdG%2B1MHake26bUJrDR5MCrvErOkD4pSHe8FT9%2BUSkFX2eNdBUF879j2wdyEzDcyRJ4wpbF%2F5gvGGI3RO9%2Fw9nNOL7XcZPO5tM1pTxXAN%2ByuZUSPZ3porMWFBrG6lPKPyStv&X-Amz-Signature=2b52d3d05e6e48a431ffa685fef160b97828a4a963c5d63dfe5d5ecd27fba653&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYZD6TW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDezBJlUDHEHnt2N9FfqAxkFcAAvTFwMxOwCHgDCpWSEQIhALH98nk%2FRFdnnk9aAABduJP3gEU0Kh63UpLph5mt8XmTKv8DCH8QABoMNjM3NDIzMTgzODA1IgzD2r5jLMGFX6xTYN8q3AMx%2Bs867yC073ZS%2FV6hcDuN%2BlxDHRSDycTiMLRKcsI9VbyfvCxYBTDDhmJ8oH1BtGyC%2Fp5ioMY1W%2BNwtpmZi8p269OnQFiV5TfbHdyvNeRdGQUfVb0RwWK0mBqGj5UVBBVdcxiCIMsLaGBS9xN9sXRzdTiMAsoIGbBPSXte5A2d9bmSSZUdTyLBtpE8VuYWKvQd4DAIvuIwVrRkiDNFMfefwDjQu%2BNigwQ%2BTERuYAN1s2qFL%2BRe4fhRLFpxAd%2FAdyNhxj3Yziqi7AmW0%2BpUW8xSE2JxR%2B05EKzuFepA47uz02dqctMrPu9ciX%2BBb99gXEm%2FoRRpH%2F6oft9wgQ%2B%2FWP0g3JD7PDAzLinPbWe4iEn%2FDawXiYfQBbnJ8fD8zWsd1UzVAeCo1a1jbWo1UzfOi%2F9HjgSosNirSqp%2FIcSfcrDPO0dRerx667Mr%2FF4pIM8IIRNfCjvYHXb26MrXIZec3HKZnAGr3CqNkCBY4ch55qF5k%2Bkc9gMMGB9RbFs6Ju0%2F0KpaGxATX5GWyP8IKAXnE6dWNlauLPC9ipik6DM6VrhD0Kr3t4oL7wPLQ9DEfAR%2FQfVFKDLW4eMF2CogFv4uhRAcN4CkEjPIAwCfBBmjh3l52Q07if%2BSGIQ0J4Gk0jCN3aG%2FBjqkAV0T948Nmdkz2As7aiUGl0N1KO0P4ipx3jsQmONuzlbNWb7z%2FZS5p560Bn91oFhxC4f0TtbXYhitcV%2B%2FP%2FE3W3m0vGdG%2B1MHake26bUJrDR5MCrvErOkD4pSHe8FT9%2BUSkFX2eNdBUF879j2wdyEzDcyRJ4wpbF%2F5gvGGI3RO9%2Fw9nNOL7XcZPO5tM1pTxXAN%2ByuZUSPZ3porMWFBrG6lPKPyStv&X-Amz-Signature=6f03212f1ff0d28932c1ae10aac70ac3f32b6f5bfb2386dd59ae070606669d78&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
