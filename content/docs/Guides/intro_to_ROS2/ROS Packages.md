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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH6JLZ2%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDKM%2FqoA3fCNfhHEJaON5bKIzY9J066ekc6UW7SStGjfQIhAK4mk3CUZAvMBK6T2tLbZkXDpPNZGIEBhX%2BIF96whsUNKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZSY7npzmfuGu9NREq3AO64Is%2BYdDjgS3NstjGldS1X68szUI63fkb1cP84AXBH11s65%2FS5KeC3kXS6W7IlW5OqfGp2m6iawMsQMiE2s0V5y82ub8X0c2mjamjKY7XudwtZlZ5%2B1yAcI3DRRgX%2FNuZ%2FuIEDWz9P7KAg3R6fEehprnMqv6gOwgBYt9dtHs%2B2mgmSAYLZwB%2FYCDArS33JkxtyPrWh4D5oNrrTc4huHJz6EiF6tRiRJCHki%2FRueYuwCr0N4ty1vi%2BVh%2B3MwFDrLcA9ZtWhcs6FD2z82VmTbg4k52RkRF7ymDQp6Z02X95BK8a6e%2FRNucuvl%2BS8T0MVwsHFGoGCBxCUu%2FSklX96koXKOBmZJU6ue8iT5dEdWQ%2BsLjRXubELLT5TnQR%2BAi322EDr7TSJv2wwr0dXrJ3Gc9PT%2F16GwDmg1YsfPX5ifl7fUGoMS2%2FYr01oMRhO4ngQjaVUtQ9YRG8Mf%2BuzQt4AFW6kLZmhhhy2kGCM%2B1RwzxCaar%2B1mAtq%2Fm31slcWv64cAwuUuq%2FH096E%2FTJwa3Y8t2Tm1qSiUE3Oybak1WdqHGumoaVjtsPz2xgiHBjkkiKJ9OYqjBEYAV%2BAKlc2vr0ux5Oa8ld3rswSBsSA2ev8SrgviLLJdvk33CRusN9XzCC2ojBBjqkAdhRmA3sFbVEOP%2BqEkxP4YoEIeMdkLOZotyvfyNdXGs%2Fdpf%2BFXKCkOTCb1GiTqifi2BNDFjkaVVxqxJUml1qp6K9FqHKlBW2zGciSi%2BupxugM5LCGFvbKkHO53y%2F%2FEPc55In3nNEGTmnsmcg9rC3GJ%2FzMle%2FIv2e7arDsVJtYBL72EkNn3smAb14SAZpkC33hTj5SYIWyuIgEONFnfdUGmBrKaoa&X-Amz-Signature=5daf59528ee935a53b38cd3795df189f63e93f00df5f1ab4d25f7675b85b75ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH6JLZ2%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDKM%2FqoA3fCNfhHEJaON5bKIzY9J066ekc6UW7SStGjfQIhAK4mk3CUZAvMBK6T2tLbZkXDpPNZGIEBhX%2BIF96whsUNKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZSY7npzmfuGu9NREq3AO64Is%2BYdDjgS3NstjGldS1X68szUI63fkb1cP84AXBH11s65%2FS5KeC3kXS6W7IlW5OqfGp2m6iawMsQMiE2s0V5y82ub8X0c2mjamjKY7XudwtZlZ5%2B1yAcI3DRRgX%2FNuZ%2FuIEDWz9P7KAg3R6fEehprnMqv6gOwgBYt9dtHs%2B2mgmSAYLZwB%2FYCDArS33JkxtyPrWh4D5oNrrTc4huHJz6EiF6tRiRJCHki%2FRueYuwCr0N4ty1vi%2BVh%2B3MwFDrLcA9ZtWhcs6FD2z82VmTbg4k52RkRF7ymDQp6Z02X95BK8a6e%2FRNucuvl%2BS8T0MVwsHFGoGCBxCUu%2FSklX96koXKOBmZJU6ue8iT5dEdWQ%2BsLjRXubELLT5TnQR%2BAi322EDr7TSJv2wwr0dXrJ3Gc9PT%2F16GwDmg1YsfPX5ifl7fUGoMS2%2FYr01oMRhO4ngQjaVUtQ9YRG8Mf%2BuzQt4AFW6kLZmhhhy2kGCM%2B1RwzxCaar%2B1mAtq%2Fm31slcWv64cAwuUuq%2FH096E%2FTJwa3Y8t2Tm1qSiUE3Oybak1WdqHGumoaVjtsPz2xgiHBjkkiKJ9OYqjBEYAV%2BAKlc2vr0ux5Oa8ld3rswSBsSA2ev8SrgviLLJdvk33CRusN9XzCC2ojBBjqkAdhRmA3sFbVEOP%2BqEkxP4YoEIeMdkLOZotyvfyNdXGs%2Fdpf%2BFXKCkOTCb1GiTqifi2BNDFjkaVVxqxJUml1qp6K9FqHKlBW2zGciSi%2BupxugM5LCGFvbKkHO53y%2F%2FEPc55In3nNEGTmnsmcg9rC3GJ%2FzMle%2FIv2e7arDsVJtYBL72EkNn3smAb14SAZpkC33hTj5SYIWyuIgEONFnfdUGmBrKaoa&X-Amz-Signature=247ebace12c193cb911213f7d2000e4461eed13659ce6dc580e290bedd93cc51&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH6JLZ2%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDKM%2FqoA3fCNfhHEJaON5bKIzY9J066ekc6UW7SStGjfQIhAK4mk3CUZAvMBK6T2tLbZkXDpPNZGIEBhX%2BIF96whsUNKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZSY7npzmfuGu9NREq3AO64Is%2BYdDjgS3NstjGldS1X68szUI63fkb1cP84AXBH11s65%2FS5KeC3kXS6W7IlW5OqfGp2m6iawMsQMiE2s0V5y82ub8X0c2mjamjKY7XudwtZlZ5%2B1yAcI3DRRgX%2FNuZ%2FuIEDWz9P7KAg3R6fEehprnMqv6gOwgBYt9dtHs%2B2mgmSAYLZwB%2FYCDArS33JkxtyPrWh4D5oNrrTc4huHJz6EiF6tRiRJCHki%2FRueYuwCr0N4ty1vi%2BVh%2B3MwFDrLcA9ZtWhcs6FD2z82VmTbg4k52RkRF7ymDQp6Z02X95BK8a6e%2FRNucuvl%2BS8T0MVwsHFGoGCBxCUu%2FSklX96koXKOBmZJU6ue8iT5dEdWQ%2BsLjRXubELLT5TnQR%2BAi322EDr7TSJv2wwr0dXrJ3Gc9PT%2F16GwDmg1YsfPX5ifl7fUGoMS2%2FYr01oMRhO4ngQjaVUtQ9YRG8Mf%2BuzQt4AFW6kLZmhhhy2kGCM%2B1RwzxCaar%2B1mAtq%2Fm31slcWv64cAwuUuq%2FH096E%2FTJwa3Y8t2Tm1qSiUE3Oybak1WdqHGumoaVjtsPz2xgiHBjkkiKJ9OYqjBEYAV%2BAKlc2vr0ux5Oa8ld3rswSBsSA2ev8SrgviLLJdvk33CRusN9XzCC2ojBBjqkAdhRmA3sFbVEOP%2BqEkxP4YoEIeMdkLOZotyvfyNdXGs%2Fdpf%2BFXKCkOTCb1GiTqifi2BNDFjkaVVxqxJUml1qp6K9FqHKlBW2zGciSi%2BupxugM5LCGFvbKkHO53y%2F%2FEPc55In3nNEGTmnsmcg9rC3GJ%2FzMle%2FIv2e7arDsVJtYBL72EkNn3smAb14SAZpkC33hTj5SYIWyuIgEONFnfdUGmBrKaoa&X-Amz-Signature=650f72009eb3362b175bd4da1ad369e6fa6750ef320711e54398d8a5a0c72d23&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH6JLZ2%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDKM%2FqoA3fCNfhHEJaON5bKIzY9J066ekc6UW7SStGjfQIhAK4mk3CUZAvMBK6T2tLbZkXDpPNZGIEBhX%2BIF96whsUNKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZSY7npzmfuGu9NREq3AO64Is%2BYdDjgS3NstjGldS1X68szUI63fkb1cP84AXBH11s65%2FS5KeC3kXS6W7IlW5OqfGp2m6iawMsQMiE2s0V5y82ub8X0c2mjamjKY7XudwtZlZ5%2B1yAcI3DRRgX%2FNuZ%2FuIEDWz9P7KAg3R6fEehprnMqv6gOwgBYt9dtHs%2B2mgmSAYLZwB%2FYCDArS33JkxtyPrWh4D5oNrrTc4huHJz6EiF6tRiRJCHki%2FRueYuwCr0N4ty1vi%2BVh%2B3MwFDrLcA9ZtWhcs6FD2z82VmTbg4k52RkRF7ymDQp6Z02X95BK8a6e%2FRNucuvl%2BS8T0MVwsHFGoGCBxCUu%2FSklX96koXKOBmZJU6ue8iT5dEdWQ%2BsLjRXubELLT5TnQR%2BAi322EDr7TSJv2wwr0dXrJ3Gc9PT%2F16GwDmg1YsfPX5ifl7fUGoMS2%2FYr01oMRhO4ngQjaVUtQ9YRG8Mf%2BuzQt4AFW6kLZmhhhy2kGCM%2B1RwzxCaar%2B1mAtq%2Fm31slcWv64cAwuUuq%2FH096E%2FTJwa3Y8t2Tm1qSiUE3Oybak1WdqHGumoaVjtsPz2xgiHBjkkiKJ9OYqjBEYAV%2BAKlc2vr0ux5Oa8ld3rswSBsSA2ev8SrgviLLJdvk33CRusN9XzCC2ojBBjqkAdhRmA3sFbVEOP%2BqEkxP4YoEIeMdkLOZotyvfyNdXGs%2Fdpf%2BFXKCkOTCb1GiTqifi2BNDFjkaVVxqxJUml1qp6K9FqHKlBW2zGciSi%2BupxugM5LCGFvbKkHO53y%2F%2FEPc55In3nNEGTmnsmcg9rC3GJ%2FzMle%2FIv2e7arDsVJtYBL72EkNn3smAb14SAZpkC33hTj5SYIWyuIgEONFnfdUGmBrKaoa&X-Amz-Signature=e5d4ecb2b0366a50c57bff5f532fee72819d080bd22d36ad5220a0499581be34&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH6JLZ2%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDKM%2FqoA3fCNfhHEJaON5bKIzY9J066ekc6UW7SStGjfQIhAK4mk3CUZAvMBK6T2tLbZkXDpPNZGIEBhX%2BIF96whsUNKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZSY7npzmfuGu9NREq3AO64Is%2BYdDjgS3NstjGldS1X68szUI63fkb1cP84AXBH11s65%2FS5KeC3kXS6W7IlW5OqfGp2m6iawMsQMiE2s0V5y82ub8X0c2mjamjKY7XudwtZlZ5%2B1yAcI3DRRgX%2FNuZ%2FuIEDWz9P7KAg3R6fEehprnMqv6gOwgBYt9dtHs%2B2mgmSAYLZwB%2FYCDArS33JkxtyPrWh4D5oNrrTc4huHJz6EiF6tRiRJCHki%2FRueYuwCr0N4ty1vi%2BVh%2B3MwFDrLcA9ZtWhcs6FD2z82VmTbg4k52RkRF7ymDQp6Z02X95BK8a6e%2FRNucuvl%2BS8T0MVwsHFGoGCBxCUu%2FSklX96koXKOBmZJU6ue8iT5dEdWQ%2BsLjRXubELLT5TnQR%2BAi322EDr7TSJv2wwr0dXrJ3Gc9PT%2F16GwDmg1YsfPX5ifl7fUGoMS2%2FYr01oMRhO4ngQjaVUtQ9YRG8Mf%2BuzQt4AFW6kLZmhhhy2kGCM%2B1RwzxCaar%2B1mAtq%2Fm31slcWv64cAwuUuq%2FH096E%2FTJwa3Y8t2Tm1qSiUE3Oybak1WdqHGumoaVjtsPz2xgiHBjkkiKJ9OYqjBEYAV%2BAKlc2vr0ux5Oa8ld3rswSBsSA2ev8SrgviLLJdvk33CRusN9XzCC2ojBBjqkAdhRmA3sFbVEOP%2BqEkxP4YoEIeMdkLOZotyvfyNdXGs%2Fdpf%2BFXKCkOTCb1GiTqifi2BNDFjkaVVxqxJUml1qp6K9FqHKlBW2zGciSi%2BupxugM5LCGFvbKkHO53y%2F%2FEPc55In3nNEGTmnsmcg9rC3GJ%2FzMle%2FIv2e7arDsVJtYBL72EkNn3smAb14SAZpkC33hTj5SYIWyuIgEONFnfdUGmBrKaoa&X-Amz-Signature=ec075e2e794a2bba0666c30cd2e3da8f64b27a9ec6a465a01469bfbc6f546119&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH6JLZ2%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDKM%2FqoA3fCNfhHEJaON5bKIzY9J066ekc6UW7SStGjfQIhAK4mk3CUZAvMBK6T2tLbZkXDpPNZGIEBhX%2BIF96whsUNKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZSY7npzmfuGu9NREq3AO64Is%2BYdDjgS3NstjGldS1X68szUI63fkb1cP84AXBH11s65%2FS5KeC3kXS6W7IlW5OqfGp2m6iawMsQMiE2s0V5y82ub8X0c2mjamjKY7XudwtZlZ5%2B1yAcI3DRRgX%2FNuZ%2FuIEDWz9P7KAg3R6fEehprnMqv6gOwgBYt9dtHs%2B2mgmSAYLZwB%2FYCDArS33JkxtyPrWh4D5oNrrTc4huHJz6EiF6tRiRJCHki%2FRueYuwCr0N4ty1vi%2BVh%2B3MwFDrLcA9ZtWhcs6FD2z82VmTbg4k52RkRF7ymDQp6Z02X95BK8a6e%2FRNucuvl%2BS8T0MVwsHFGoGCBxCUu%2FSklX96koXKOBmZJU6ue8iT5dEdWQ%2BsLjRXubELLT5TnQR%2BAi322EDr7TSJv2wwr0dXrJ3Gc9PT%2F16GwDmg1YsfPX5ifl7fUGoMS2%2FYr01oMRhO4ngQjaVUtQ9YRG8Mf%2BuzQt4AFW6kLZmhhhy2kGCM%2B1RwzxCaar%2B1mAtq%2Fm31slcWv64cAwuUuq%2FH096E%2FTJwa3Y8t2Tm1qSiUE3Oybak1WdqHGumoaVjtsPz2xgiHBjkkiKJ9OYqjBEYAV%2BAKlc2vr0ux5Oa8ld3rswSBsSA2ev8SrgviLLJdvk33CRusN9XzCC2ojBBjqkAdhRmA3sFbVEOP%2BqEkxP4YoEIeMdkLOZotyvfyNdXGs%2Fdpf%2BFXKCkOTCb1GiTqifi2BNDFjkaVVxqxJUml1qp6K9FqHKlBW2zGciSi%2BupxugM5LCGFvbKkHO53y%2F%2FEPc55In3nNEGTmnsmcg9rC3GJ%2FzMle%2FIv2e7arDsVJtYBL72EkNn3smAb14SAZpkC33hTj5SYIWyuIgEONFnfdUGmBrKaoa&X-Amz-Signature=7e864e33141c12d28181b8b787e0c62bfb59b5e09da3abcbaa347823f81fadf5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH6JLZ2%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDKM%2FqoA3fCNfhHEJaON5bKIzY9J066ekc6UW7SStGjfQIhAK4mk3CUZAvMBK6T2tLbZkXDpPNZGIEBhX%2BIF96whsUNKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZSY7npzmfuGu9NREq3AO64Is%2BYdDjgS3NstjGldS1X68szUI63fkb1cP84AXBH11s65%2FS5KeC3kXS6W7IlW5OqfGp2m6iawMsQMiE2s0V5y82ub8X0c2mjamjKY7XudwtZlZ5%2B1yAcI3DRRgX%2FNuZ%2FuIEDWz9P7KAg3R6fEehprnMqv6gOwgBYt9dtHs%2B2mgmSAYLZwB%2FYCDArS33JkxtyPrWh4D5oNrrTc4huHJz6EiF6tRiRJCHki%2FRueYuwCr0N4ty1vi%2BVh%2B3MwFDrLcA9ZtWhcs6FD2z82VmTbg4k52RkRF7ymDQp6Z02X95BK8a6e%2FRNucuvl%2BS8T0MVwsHFGoGCBxCUu%2FSklX96koXKOBmZJU6ue8iT5dEdWQ%2BsLjRXubELLT5TnQR%2BAi322EDr7TSJv2wwr0dXrJ3Gc9PT%2F16GwDmg1YsfPX5ifl7fUGoMS2%2FYr01oMRhO4ngQjaVUtQ9YRG8Mf%2BuzQt4AFW6kLZmhhhy2kGCM%2B1RwzxCaar%2B1mAtq%2Fm31slcWv64cAwuUuq%2FH096E%2FTJwa3Y8t2Tm1qSiUE3Oybak1WdqHGumoaVjtsPz2xgiHBjkkiKJ9OYqjBEYAV%2BAKlc2vr0ux5Oa8ld3rswSBsSA2ev8SrgviLLJdvk33CRusN9XzCC2ojBBjqkAdhRmA3sFbVEOP%2BqEkxP4YoEIeMdkLOZotyvfyNdXGs%2Fdpf%2BFXKCkOTCb1GiTqifi2BNDFjkaVVxqxJUml1qp6K9FqHKlBW2zGciSi%2BupxugM5LCGFvbKkHO53y%2F%2FEPc55In3nNEGTmnsmcg9rC3GJ%2FzMle%2FIv2e7arDsVJtYBL72EkNn3smAb14SAZpkC33hTj5SYIWyuIgEONFnfdUGmBrKaoa&X-Amz-Signature=61775eefa27eed271a2e70f7b840d41c99e3403cf5d490670f400fc11b07426a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
