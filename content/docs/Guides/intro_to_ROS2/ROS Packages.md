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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJLI444%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9R1WPBI%2Febb1lC2Cag78PS44SxApzs%2Bip55rHKzohyAiACS2ZZBXQnRGuo1PlGUfx0D%2BeIDgAb29XbMUM7oAmJyyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVQ8FnuQoAOLXOQK6KtwD2L2AJuSTh9c9BMSSwEXkhDKGim4Z9jlOeQpaERur%2BeZe9QnXkdneJlIa%2B9FkwTrkZJIlntTJUcHLHkd3LCT%2BFr4uqBKWXoIjNAdWxCOQZNZusYDdT%2BSlU55Ot3aPRbkBfrrn3X7CsKFgYbpA1rlXddsAuaPAYruDQcsU0u9QFlnpDscRtZOCRO0Q9l4JbunknmW8d%2BomfiE5%2FsDC27ikV%2FWmc3zRBCq7H6kobvKVtHyeJ3RDYBwPrzFdYF0R9YQyTO8aAFORV3lFL%2BkndhIGbesxBtcq8%2Fq5Z5Fao%2Bo8nsD%2F1O64HBqb4WYP3UPpNSYlfPOwZlILiQVnaWH%2BDyjqm26fdcWmKTAN77sorM0wSw7q3qpQ6AU2apJl%2BXThLN5H%2ButCQlJO0vLLCs5zkkhjzQCjj0NhabdOEwiAOqsuBsuQM2Fj4hERqGfiSuDqkXWnFgLF7OUmlwM2ecJM2WN7894r6bGhQaiuVxW87VUPyipgPdUHTk0V7GM6oV%2BW7Vu8AtShxj2pGnkNvpPJ2n0iYFDYGK6KyY68ENNfVMHI2UwvWRWkptKFLQqIXzVCcmYTmc0aAv1SN22pmkRdflflbtLg%2FIQlLusrz3jql8mewKaNyazb2241RTVF9mMwna%2FYwgY6pgFq%2BAeuprBHHeZD9Rc%2BmPs46Gz54oNYPiRQbd%2Bt00N8yUAt0dGvwL2cABfwX%2BDCERdhI34Eniq%2FjbiTVkPCxhqoOQpoA3OU1quFWhQNBMwErMte8be1Sg0HEhtIf%2FFgNWtcoSoUg5ndiKKw9rHLnST46RSJVEjXV7i%2BeaDINkDZgY0MIDiSud0C07bdqCHAUOZsMnzKuMygCVffo%2FhSR9RlznSTidKk&X-Amz-Signature=f452fa0b016aa532ec39cab6826b1a61166b78b7ea5fad132595f0b7d7836cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJLI444%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9R1WPBI%2Febb1lC2Cag78PS44SxApzs%2Bip55rHKzohyAiACS2ZZBXQnRGuo1PlGUfx0D%2BeIDgAb29XbMUM7oAmJyyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVQ8FnuQoAOLXOQK6KtwD2L2AJuSTh9c9BMSSwEXkhDKGim4Z9jlOeQpaERur%2BeZe9QnXkdneJlIa%2B9FkwTrkZJIlntTJUcHLHkd3LCT%2BFr4uqBKWXoIjNAdWxCOQZNZusYDdT%2BSlU55Ot3aPRbkBfrrn3X7CsKFgYbpA1rlXddsAuaPAYruDQcsU0u9QFlnpDscRtZOCRO0Q9l4JbunknmW8d%2BomfiE5%2FsDC27ikV%2FWmc3zRBCq7H6kobvKVtHyeJ3RDYBwPrzFdYF0R9YQyTO8aAFORV3lFL%2BkndhIGbesxBtcq8%2Fq5Z5Fao%2Bo8nsD%2F1O64HBqb4WYP3UPpNSYlfPOwZlILiQVnaWH%2BDyjqm26fdcWmKTAN77sorM0wSw7q3qpQ6AU2apJl%2BXThLN5H%2ButCQlJO0vLLCs5zkkhjzQCjj0NhabdOEwiAOqsuBsuQM2Fj4hERqGfiSuDqkXWnFgLF7OUmlwM2ecJM2WN7894r6bGhQaiuVxW87VUPyipgPdUHTk0V7GM6oV%2BW7Vu8AtShxj2pGnkNvpPJ2n0iYFDYGK6KyY68ENNfVMHI2UwvWRWkptKFLQqIXzVCcmYTmc0aAv1SN22pmkRdflflbtLg%2FIQlLusrz3jql8mewKaNyazb2241RTVF9mMwna%2FYwgY6pgFq%2BAeuprBHHeZD9Rc%2BmPs46Gz54oNYPiRQbd%2Bt00N8yUAt0dGvwL2cABfwX%2BDCERdhI34Eniq%2FjbiTVkPCxhqoOQpoA3OU1quFWhQNBMwErMte8be1Sg0HEhtIf%2FFgNWtcoSoUg5ndiKKw9rHLnST46RSJVEjXV7i%2BeaDINkDZgY0MIDiSud0C07bdqCHAUOZsMnzKuMygCVffo%2FhSR9RlznSTidKk&X-Amz-Signature=f8c56d2155a67101e32ef0c8cd6d85a2daf78b30683a8fff7a3db842bc626903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJLI444%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9R1WPBI%2Febb1lC2Cag78PS44SxApzs%2Bip55rHKzohyAiACS2ZZBXQnRGuo1PlGUfx0D%2BeIDgAb29XbMUM7oAmJyyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVQ8FnuQoAOLXOQK6KtwD2L2AJuSTh9c9BMSSwEXkhDKGim4Z9jlOeQpaERur%2BeZe9QnXkdneJlIa%2B9FkwTrkZJIlntTJUcHLHkd3LCT%2BFr4uqBKWXoIjNAdWxCOQZNZusYDdT%2BSlU55Ot3aPRbkBfrrn3X7CsKFgYbpA1rlXddsAuaPAYruDQcsU0u9QFlnpDscRtZOCRO0Q9l4JbunknmW8d%2BomfiE5%2FsDC27ikV%2FWmc3zRBCq7H6kobvKVtHyeJ3RDYBwPrzFdYF0R9YQyTO8aAFORV3lFL%2BkndhIGbesxBtcq8%2Fq5Z5Fao%2Bo8nsD%2F1O64HBqb4WYP3UPpNSYlfPOwZlILiQVnaWH%2BDyjqm26fdcWmKTAN77sorM0wSw7q3qpQ6AU2apJl%2BXThLN5H%2ButCQlJO0vLLCs5zkkhjzQCjj0NhabdOEwiAOqsuBsuQM2Fj4hERqGfiSuDqkXWnFgLF7OUmlwM2ecJM2WN7894r6bGhQaiuVxW87VUPyipgPdUHTk0V7GM6oV%2BW7Vu8AtShxj2pGnkNvpPJ2n0iYFDYGK6KyY68ENNfVMHI2UwvWRWkptKFLQqIXzVCcmYTmc0aAv1SN22pmkRdflflbtLg%2FIQlLusrz3jql8mewKaNyazb2241RTVF9mMwna%2FYwgY6pgFq%2BAeuprBHHeZD9Rc%2BmPs46Gz54oNYPiRQbd%2Bt00N8yUAt0dGvwL2cABfwX%2BDCERdhI34Eniq%2FjbiTVkPCxhqoOQpoA3OU1quFWhQNBMwErMte8be1Sg0HEhtIf%2FFgNWtcoSoUg5ndiKKw9rHLnST46RSJVEjXV7i%2BeaDINkDZgY0MIDiSud0C07bdqCHAUOZsMnzKuMygCVffo%2FhSR9RlznSTidKk&X-Amz-Signature=f2c05571b4d6b7ab62941341802b41873d5d6113012bd413fc0fe7dea2f9663d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJLI444%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9R1WPBI%2Febb1lC2Cag78PS44SxApzs%2Bip55rHKzohyAiACS2ZZBXQnRGuo1PlGUfx0D%2BeIDgAb29XbMUM7oAmJyyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVQ8FnuQoAOLXOQK6KtwD2L2AJuSTh9c9BMSSwEXkhDKGim4Z9jlOeQpaERur%2BeZe9QnXkdneJlIa%2B9FkwTrkZJIlntTJUcHLHkd3LCT%2BFr4uqBKWXoIjNAdWxCOQZNZusYDdT%2BSlU55Ot3aPRbkBfrrn3X7CsKFgYbpA1rlXddsAuaPAYruDQcsU0u9QFlnpDscRtZOCRO0Q9l4JbunknmW8d%2BomfiE5%2FsDC27ikV%2FWmc3zRBCq7H6kobvKVtHyeJ3RDYBwPrzFdYF0R9YQyTO8aAFORV3lFL%2BkndhIGbesxBtcq8%2Fq5Z5Fao%2Bo8nsD%2F1O64HBqb4WYP3UPpNSYlfPOwZlILiQVnaWH%2BDyjqm26fdcWmKTAN77sorM0wSw7q3qpQ6AU2apJl%2BXThLN5H%2ButCQlJO0vLLCs5zkkhjzQCjj0NhabdOEwiAOqsuBsuQM2Fj4hERqGfiSuDqkXWnFgLF7OUmlwM2ecJM2WN7894r6bGhQaiuVxW87VUPyipgPdUHTk0V7GM6oV%2BW7Vu8AtShxj2pGnkNvpPJ2n0iYFDYGK6KyY68ENNfVMHI2UwvWRWkptKFLQqIXzVCcmYTmc0aAv1SN22pmkRdflflbtLg%2FIQlLusrz3jql8mewKaNyazb2241RTVF9mMwna%2FYwgY6pgFq%2BAeuprBHHeZD9Rc%2BmPs46Gz54oNYPiRQbd%2Bt00N8yUAt0dGvwL2cABfwX%2BDCERdhI34Eniq%2FjbiTVkPCxhqoOQpoA3OU1quFWhQNBMwErMte8be1Sg0HEhtIf%2FFgNWtcoSoUg5ndiKKw9rHLnST46RSJVEjXV7i%2BeaDINkDZgY0MIDiSud0C07bdqCHAUOZsMnzKuMygCVffo%2FhSR9RlznSTidKk&X-Amz-Signature=19fab6ccfc4d0cbd9cb1b54c3a4d0cf85a3f3c454561e2877803607b65ff46e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJLI444%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9R1WPBI%2Febb1lC2Cag78PS44SxApzs%2Bip55rHKzohyAiACS2ZZBXQnRGuo1PlGUfx0D%2BeIDgAb29XbMUM7oAmJyyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVQ8FnuQoAOLXOQK6KtwD2L2AJuSTh9c9BMSSwEXkhDKGim4Z9jlOeQpaERur%2BeZe9QnXkdneJlIa%2B9FkwTrkZJIlntTJUcHLHkd3LCT%2BFr4uqBKWXoIjNAdWxCOQZNZusYDdT%2BSlU55Ot3aPRbkBfrrn3X7CsKFgYbpA1rlXddsAuaPAYruDQcsU0u9QFlnpDscRtZOCRO0Q9l4JbunknmW8d%2BomfiE5%2FsDC27ikV%2FWmc3zRBCq7H6kobvKVtHyeJ3RDYBwPrzFdYF0R9YQyTO8aAFORV3lFL%2BkndhIGbesxBtcq8%2Fq5Z5Fao%2Bo8nsD%2F1O64HBqb4WYP3UPpNSYlfPOwZlILiQVnaWH%2BDyjqm26fdcWmKTAN77sorM0wSw7q3qpQ6AU2apJl%2BXThLN5H%2ButCQlJO0vLLCs5zkkhjzQCjj0NhabdOEwiAOqsuBsuQM2Fj4hERqGfiSuDqkXWnFgLF7OUmlwM2ecJM2WN7894r6bGhQaiuVxW87VUPyipgPdUHTk0V7GM6oV%2BW7Vu8AtShxj2pGnkNvpPJ2n0iYFDYGK6KyY68ENNfVMHI2UwvWRWkptKFLQqIXzVCcmYTmc0aAv1SN22pmkRdflflbtLg%2FIQlLusrz3jql8mewKaNyazb2241RTVF9mMwna%2FYwgY6pgFq%2BAeuprBHHeZD9Rc%2BmPs46Gz54oNYPiRQbd%2Bt00N8yUAt0dGvwL2cABfwX%2BDCERdhI34Eniq%2FjbiTVkPCxhqoOQpoA3OU1quFWhQNBMwErMte8be1Sg0HEhtIf%2FFgNWtcoSoUg5ndiKKw9rHLnST46RSJVEjXV7i%2BeaDINkDZgY0MIDiSud0C07bdqCHAUOZsMnzKuMygCVffo%2FhSR9RlznSTidKk&X-Amz-Signature=ecc3738bbc7bd4f267c912e3b32336888223c74c451b00a807e751737cd3a19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJLI444%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9R1WPBI%2Febb1lC2Cag78PS44SxApzs%2Bip55rHKzohyAiACS2ZZBXQnRGuo1PlGUfx0D%2BeIDgAb29XbMUM7oAmJyyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVQ8FnuQoAOLXOQK6KtwD2L2AJuSTh9c9BMSSwEXkhDKGim4Z9jlOeQpaERur%2BeZe9QnXkdneJlIa%2B9FkwTrkZJIlntTJUcHLHkd3LCT%2BFr4uqBKWXoIjNAdWxCOQZNZusYDdT%2BSlU55Ot3aPRbkBfrrn3X7CsKFgYbpA1rlXddsAuaPAYruDQcsU0u9QFlnpDscRtZOCRO0Q9l4JbunknmW8d%2BomfiE5%2FsDC27ikV%2FWmc3zRBCq7H6kobvKVtHyeJ3RDYBwPrzFdYF0R9YQyTO8aAFORV3lFL%2BkndhIGbesxBtcq8%2Fq5Z5Fao%2Bo8nsD%2F1O64HBqb4WYP3UPpNSYlfPOwZlILiQVnaWH%2BDyjqm26fdcWmKTAN77sorM0wSw7q3qpQ6AU2apJl%2BXThLN5H%2ButCQlJO0vLLCs5zkkhjzQCjj0NhabdOEwiAOqsuBsuQM2Fj4hERqGfiSuDqkXWnFgLF7OUmlwM2ecJM2WN7894r6bGhQaiuVxW87VUPyipgPdUHTk0V7GM6oV%2BW7Vu8AtShxj2pGnkNvpPJ2n0iYFDYGK6KyY68ENNfVMHI2UwvWRWkptKFLQqIXzVCcmYTmc0aAv1SN22pmkRdflflbtLg%2FIQlLusrz3jql8mewKaNyazb2241RTVF9mMwna%2FYwgY6pgFq%2BAeuprBHHeZD9Rc%2BmPs46Gz54oNYPiRQbd%2Bt00N8yUAt0dGvwL2cABfwX%2BDCERdhI34Eniq%2FjbiTVkPCxhqoOQpoA3OU1quFWhQNBMwErMte8be1Sg0HEhtIf%2FFgNWtcoSoUg5ndiKKw9rHLnST46RSJVEjXV7i%2BeaDINkDZgY0MIDiSud0C07bdqCHAUOZsMnzKuMygCVffo%2FhSR9RlznSTidKk&X-Amz-Signature=18290361874c503ce50e2dd2bc62247b8c7b6ed9e88ab45967df335e3bed3665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJLI444%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9R1WPBI%2Febb1lC2Cag78PS44SxApzs%2Bip55rHKzohyAiACS2ZZBXQnRGuo1PlGUfx0D%2BeIDgAb29XbMUM7oAmJyyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVQ8FnuQoAOLXOQK6KtwD2L2AJuSTh9c9BMSSwEXkhDKGim4Z9jlOeQpaERur%2BeZe9QnXkdneJlIa%2B9FkwTrkZJIlntTJUcHLHkd3LCT%2BFr4uqBKWXoIjNAdWxCOQZNZusYDdT%2BSlU55Ot3aPRbkBfrrn3X7CsKFgYbpA1rlXddsAuaPAYruDQcsU0u9QFlnpDscRtZOCRO0Q9l4JbunknmW8d%2BomfiE5%2FsDC27ikV%2FWmc3zRBCq7H6kobvKVtHyeJ3RDYBwPrzFdYF0R9YQyTO8aAFORV3lFL%2BkndhIGbesxBtcq8%2Fq5Z5Fao%2Bo8nsD%2F1O64HBqb4WYP3UPpNSYlfPOwZlILiQVnaWH%2BDyjqm26fdcWmKTAN77sorM0wSw7q3qpQ6AU2apJl%2BXThLN5H%2ButCQlJO0vLLCs5zkkhjzQCjj0NhabdOEwiAOqsuBsuQM2Fj4hERqGfiSuDqkXWnFgLF7OUmlwM2ecJM2WN7894r6bGhQaiuVxW87VUPyipgPdUHTk0V7GM6oV%2BW7Vu8AtShxj2pGnkNvpPJ2n0iYFDYGK6KyY68ENNfVMHI2UwvWRWkptKFLQqIXzVCcmYTmc0aAv1SN22pmkRdflflbtLg%2FIQlLusrz3jql8mewKaNyazb2241RTVF9mMwna%2FYwgY6pgFq%2BAeuprBHHeZD9Rc%2BmPs46Gz54oNYPiRQbd%2Bt00N8yUAt0dGvwL2cABfwX%2BDCERdhI34Eniq%2FjbiTVkPCxhqoOQpoA3OU1quFWhQNBMwErMte8be1Sg0HEhtIf%2FFgNWtcoSoUg5ndiKKw9rHLnST46RSJVEjXV7i%2BeaDINkDZgY0MIDiSud0C07bdqCHAUOZsMnzKuMygCVffo%2FhSR9RlznSTidKk&X-Amz-Signature=7f61ce3be6e2bd9609e95d5cbcf7efb02afc25fb70b5977f94739fdea833e9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
