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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7UFQGA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD5KoIcdorxrSFct5uJC0B4mmWm8pTWQ%2BBqmsnP9OcTGgIgBpR2%2BpNJu1aWYc6S%2BmwnXgQ36UrNAFMmdDcpuXnLhG0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEU1G3in3tE4Fo%2FomCrcAzDup2wOEW2WjWUV4xs05t4zxGnI6LSEVrUSQmDDEkb20wrV%2Bl%2FZ4fCYhzmJ0SmZm9z%2BaMY08BmDAParb71qE8vwOcyligIy38fIoybShKrbfZFZATsFEZ8l9EtCrlsnqGNC%2BqSmBCNc7qLaqGc6MVfJwusztrNllcJsMmvKyA5d9xdeMD4n%2FEiHmq6vaFsx3nTwXyt5yKj6JYjtEGJpWcHfjrYBSsEH3NWduLLJCAwxAPK0gRLMbC%2BTshTjIV0OmY%2FV4O%2FHWe5w2L73ZEzdDjF9qVbszFoOJcd9yq%2FGcnOzM%2BoBz8xTymbRwzD2IcI9So7C40CiqfJMay4ovWy%2BFq%2Fhw9d1CZIJlOlzCn5bZi69ol0sqJkh7MM1MEsjY9g4w4KMIeXOnU47Do%2B6AJs52dD1lpV3zdUKDpfbIRMsBxYh8%2Bsy285NfP7FJTWKY4ycI5Zeub%2FLUPmsoWDdz1Nl06VqEMC%2BiPAFEeDp6kYG41A%2FWwNHnfDYbsoGSktFGajfTIKLWo5d9bhB2H2W%2B8RbxGRoNTLoTd8XR%2FgQKsCExAV7ti2I6G2Ug%2BN3UhIput1tUtCoCIdqc92KNmeoVCG2tZaio4yW%2FaphkhbfG%2B7AagkswypuvnDKvNmgnCZbMMTWy8EGOqUB%2BCg3G4%2Bi4RRcpteGIWhD6rmmDq9mxNqHXDTm66i5O7CFfOmyTOFcvgOhmXoJ44z4RzpJOc0eplvIM7DpyIgSWnPj6szrlL13c2vYApFoY07rdwYGunrsc9MLpDLUjIjUv9Wh%2BIVwWenMp5stgsKi5Cy0LREkD%2F%2FLEXfEcmBNlOGNhLBCefsD1%2F8QFFZ4cw%2Beghu6MFtii71fZIA2c3cjP6E%2ByvWM&X-Amz-Signature=a982b79f62f0adb94b3a2f9ca122bb2d7758d1618d101d92570167be5782d02d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7UFQGA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD5KoIcdorxrSFct5uJC0B4mmWm8pTWQ%2BBqmsnP9OcTGgIgBpR2%2BpNJu1aWYc6S%2BmwnXgQ36UrNAFMmdDcpuXnLhG0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEU1G3in3tE4Fo%2FomCrcAzDup2wOEW2WjWUV4xs05t4zxGnI6LSEVrUSQmDDEkb20wrV%2Bl%2FZ4fCYhzmJ0SmZm9z%2BaMY08BmDAParb71qE8vwOcyligIy38fIoybShKrbfZFZATsFEZ8l9EtCrlsnqGNC%2BqSmBCNc7qLaqGc6MVfJwusztrNllcJsMmvKyA5d9xdeMD4n%2FEiHmq6vaFsx3nTwXyt5yKj6JYjtEGJpWcHfjrYBSsEH3NWduLLJCAwxAPK0gRLMbC%2BTshTjIV0OmY%2FV4O%2FHWe5w2L73ZEzdDjF9qVbszFoOJcd9yq%2FGcnOzM%2BoBz8xTymbRwzD2IcI9So7C40CiqfJMay4ovWy%2BFq%2Fhw9d1CZIJlOlzCn5bZi69ol0sqJkh7MM1MEsjY9g4w4KMIeXOnU47Do%2B6AJs52dD1lpV3zdUKDpfbIRMsBxYh8%2Bsy285NfP7FJTWKY4ycI5Zeub%2FLUPmsoWDdz1Nl06VqEMC%2BiPAFEeDp6kYG41A%2FWwNHnfDYbsoGSktFGajfTIKLWo5d9bhB2H2W%2B8RbxGRoNTLoTd8XR%2FgQKsCExAV7ti2I6G2Ug%2BN3UhIput1tUtCoCIdqc92KNmeoVCG2tZaio4yW%2FaphkhbfG%2B7AagkswypuvnDKvNmgnCZbMMTWy8EGOqUB%2BCg3G4%2Bi4RRcpteGIWhD6rmmDq9mxNqHXDTm66i5O7CFfOmyTOFcvgOhmXoJ44z4RzpJOc0eplvIM7DpyIgSWnPj6szrlL13c2vYApFoY07rdwYGunrsc9MLpDLUjIjUv9Wh%2BIVwWenMp5stgsKi5Cy0LREkD%2F%2FLEXfEcmBNlOGNhLBCefsD1%2F8QFFZ4cw%2Beghu6MFtii71fZIA2c3cjP6E%2ByvWM&X-Amz-Signature=65eeddc6e97551397a87967733248afa5a27fa64424e17de01962e670afd2663&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7UFQGA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD5KoIcdorxrSFct5uJC0B4mmWm8pTWQ%2BBqmsnP9OcTGgIgBpR2%2BpNJu1aWYc6S%2BmwnXgQ36UrNAFMmdDcpuXnLhG0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEU1G3in3tE4Fo%2FomCrcAzDup2wOEW2WjWUV4xs05t4zxGnI6LSEVrUSQmDDEkb20wrV%2Bl%2FZ4fCYhzmJ0SmZm9z%2BaMY08BmDAParb71qE8vwOcyligIy38fIoybShKrbfZFZATsFEZ8l9EtCrlsnqGNC%2BqSmBCNc7qLaqGc6MVfJwusztrNllcJsMmvKyA5d9xdeMD4n%2FEiHmq6vaFsx3nTwXyt5yKj6JYjtEGJpWcHfjrYBSsEH3NWduLLJCAwxAPK0gRLMbC%2BTshTjIV0OmY%2FV4O%2FHWe5w2L73ZEzdDjF9qVbszFoOJcd9yq%2FGcnOzM%2BoBz8xTymbRwzD2IcI9So7C40CiqfJMay4ovWy%2BFq%2Fhw9d1CZIJlOlzCn5bZi69ol0sqJkh7MM1MEsjY9g4w4KMIeXOnU47Do%2B6AJs52dD1lpV3zdUKDpfbIRMsBxYh8%2Bsy285NfP7FJTWKY4ycI5Zeub%2FLUPmsoWDdz1Nl06VqEMC%2BiPAFEeDp6kYG41A%2FWwNHnfDYbsoGSktFGajfTIKLWo5d9bhB2H2W%2B8RbxGRoNTLoTd8XR%2FgQKsCExAV7ti2I6G2Ug%2BN3UhIput1tUtCoCIdqc92KNmeoVCG2tZaio4yW%2FaphkhbfG%2B7AagkswypuvnDKvNmgnCZbMMTWy8EGOqUB%2BCg3G4%2Bi4RRcpteGIWhD6rmmDq9mxNqHXDTm66i5O7CFfOmyTOFcvgOhmXoJ44z4RzpJOc0eplvIM7DpyIgSWnPj6szrlL13c2vYApFoY07rdwYGunrsc9MLpDLUjIjUv9Wh%2BIVwWenMp5stgsKi5Cy0LREkD%2F%2FLEXfEcmBNlOGNhLBCefsD1%2F8QFFZ4cw%2Beghu6MFtii71fZIA2c3cjP6E%2ByvWM&X-Amz-Signature=c583a09f446047a6075686d17c6f6a33c10f586eec9474ca1ec1c08a2e982d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7UFQGA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD5KoIcdorxrSFct5uJC0B4mmWm8pTWQ%2BBqmsnP9OcTGgIgBpR2%2BpNJu1aWYc6S%2BmwnXgQ36UrNAFMmdDcpuXnLhG0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEU1G3in3tE4Fo%2FomCrcAzDup2wOEW2WjWUV4xs05t4zxGnI6LSEVrUSQmDDEkb20wrV%2Bl%2FZ4fCYhzmJ0SmZm9z%2BaMY08BmDAParb71qE8vwOcyligIy38fIoybShKrbfZFZATsFEZ8l9EtCrlsnqGNC%2BqSmBCNc7qLaqGc6MVfJwusztrNllcJsMmvKyA5d9xdeMD4n%2FEiHmq6vaFsx3nTwXyt5yKj6JYjtEGJpWcHfjrYBSsEH3NWduLLJCAwxAPK0gRLMbC%2BTshTjIV0OmY%2FV4O%2FHWe5w2L73ZEzdDjF9qVbszFoOJcd9yq%2FGcnOzM%2BoBz8xTymbRwzD2IcI9So7C40CiqfJMay4ovWy%2BFq%2Fhw9d1CZIJlOlzCn5bZi69ol0sqJkh7MM1MEsjY9g4w4KMIeXOnU47Do%2B6AJs52dD1lpV3zdUKDpfbIRMsBxYh8%2Bsy285NfP7FJTWKY4ycI5Zeub%2FLUPmsoWDdz1Nl06VqEMC%2BiPAFEeDp6kYG41A%2FWwNHnfDYbsoGSktFGajfTIKLWo5d9bhB2H2W%2B8RbxGRoNTLoTd8XR%2FgQKsCExAV7ti2I6G2Ug%2BN3UhIput1tUtCoCIdqc92KNmeoVCG2tZaio4yW%2FaphkhbfG%2B7AagkswypuvnDKvNmgnCZbMMTWy8EGOqUB%2BCg3G4%2Bi4RRcpteGIWhD6rmmDq9mxNqHXDTm66i5O7CFfOmyTOFcvgOhmXoJ44z4RzpJOc0eplvIM7DpyIgSWnPj6szrlL13c2vYApFoY07rdwYGunrsc9MLpDLUjIjUv9Wh%2BIVwWenMp5stgsKi5Cy0LREkD%2F%2FLEXfEcmBNlOGNhLBCefsD1%2F8QFFZ4cw%2Beghu6MFtii71fZIA2c3cjP6E%2ByvWM&X-Amz-Signature=043083de61bbdae0a994c89be8d98f0944e113bac1b3af6d072d98b5679f989e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7UFQGA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD5KoIcdorxrSFct5uJC0B4mmWm8pTWQ%2BBqmsnP9OcTGgIgBpR2%2BpNJu1aWYc6S%2BmwnXgQ36UrNAFMmdDcpuXnLhG0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEU1G3in3tE4Fo%2FomCrcAzDup2wOEW2WjWUV4xs05t4zxGnI6LSEVrUSQmDDEkb20wrV%2Bl%2FZ4fCYhzmJ0SmZm9z%2BaMY08BmDAParb71qE8vwOcyligIy38fIoybShKrbfZFZATsFEZ8l9EtCrlsnqGNC%2BqSmBCNc7qLaqGc6MVfJwusztrNllcJsMmvKyA5d9xdeMD4n%2FEiHmq6vaFsx3nTwXyt5yKj6JYjtEGJpWcHfjrYBSsEH3NWduLLJCAwxAPK0gRLMbC%2BTshTjIV0OmY%2FV4O%2FHWe5w2L73ZEzdDjF9qVbszFoOJcd9yq%2FGcnOzM%2BoBz8xTymbRwzD2IcI9So7C40CiqfJMay4ovWy%2BFq%2Fhw9d1CZIJlOlzCn5bZi69ol0sqJkh7MM1MEsjY9g4w4KMIeXOnU47Do%2B6AJs52dD1lpV3zdUKDpfbIRMsBxYh8%2Bsy285NfP7FJTWKY4ycI5Zeub%2FLUPmsoWDdz1Nl06VqEMC%2BiPAFEeDp6kYG41A%2FWwNHnfDYbsoGSktFGajfTIKLWo5d9bhB2H2W%2B8RbxGRoNTLoTd8XR%2FgQKsCExAV7ti2I6G2Ug%2BN3UhIput1tUtCoCIdqc92KNmeoVCG2tZaio4yW%2FaphkhbfG%2B7AagkswypuvnDKvNmgnCZbMMTWy8EGOqUB%2BCg3G4%2Bi4RRcpteGIWhD6rmmDq9mxNqHXDTm66i5O7CFfOmyTOFcvgOhmXoJ44z4RzpJOc0eplvIM7DpyIgSWnPj6szrlL13c2vYApFoY07rdwYGunrsc9MLpDLUjIjUv9Wh%2BIVwWenMp5stgsKi5Cy0LREkD%2F%2FLEXfEcmBNlOGNhLBCefsD1%2F8QFFZ4cw%2Beghu6MFtii71fZIA2c3cjP6E%2ByvWM&X-Amz-Signature=d95e51a0ffed0a41aed9f77171660aeca76fb87a812373983f3314115368a3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7UFQGA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD5KoIcdorxrSFct5uJC0B4mmWm8pTWQ%2BBqmsnP9OcTGgIgBpR2%2BpNJu1aWYc6S%2BmwnXgQ36UrNAFMmdDcpuXnLhG0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEU1G3in3tE4Fo%2FomCrcAzDup2wOEW2WjWUV4xs05t4zxGnI6LSEVrUSQmDDEkb20wrV%2Bl%2FZ4fCYhzmJ0SmZm9z%2BaMY08BmDAParb71qE8vwOcyligIy38fIoybShKrbfZFZATsFEZ8l9EtCrlsnqGNC%2BqSmBCNc7qLaqGc6MVfJwusztrNllcJsMmvKyA5d9xdeMD4n%2FEiHmq6vaFsx3nTwXyt5yKj6JYjtEGJpWcHfjrYBSsEH3NWduLLJCAwxAPK0gRLMbC%2BTshTjIV0OmY%2FV4O%2FHWe5w2L73ZEzdDjF9qVbszFoOJcd9yq%2FGcnOzM%2BoBz8xTymbRwzD2IcI9So7C40CiqfJMay4ovWy%2BFq%2Fhw9d1CZIJlOlzCn5bZi69ol0sqJkh7MM1MEsjY9g4w4KMIeXOnU47Do%2B6AJs52dD1lpV3zdUKDpfbIRMsBxYh8%2Bsy285NfP7FJTWKY4ycI5Zeub%2FLUPmsoWDdz1Nl06VqEMC%2BiPAFEeDp6kYG41A%2FWwNHnfDYbsoGSktFGajfTIKLWo5d9bhB2H2W%2B8RbxGRoNTLoTd8XR%2FgQKsCExAV7ti2I6G2Ug%2BN3UhIput1tUtCoCIdqc92KNmeoVCG2tZaio4yW%2FaphkhbfG%2B7AagkswypuvnDKvNmgnCZbMMTWy8EGOqUB%2BCg3G4%2Bi4RRcpteGIWhD6rmmDq9mxNqHXDTm66i5O7CFfOmyTOFcvgOhmXoJ44z4RzpJOc0eplvIM7DpyIgSWnPj6szrlL13c2vYApFoY07rdwYGunrsc9MLpDLUjIjUv9Wh%2BIVwWenMp5stgsKi5Cy0LREkD%2F%2FLEXfEcmBNlOGNhLBCefsD1%2F8QFFZ4cw%2Beghu6MFtii71fZIA2c3cjP6E%2ByvWM&X-Amz-Signature=4a422d8fe58dadbfdc4dcecfe40b33c87a4110ec20909f7df6061af81fcbd2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7UFQGA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD5KoIcdorxrSFct5uJC0B4mmWm8pTWQ%2BBqmsnP9OcTGgIgBpR2%2BpNJu1aWYc6S%2BmwnXgQ36UrNAFMmdDcpuXnLhG0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEU1G3in3tE4Fo%2FomCrcAzDup2wOEW2WjWUV4xs05t4zxGnI6LSEVrUSQmDDEkb20wrV%2Bl%2FZ4fCYhzmJ0SmZm9z%2BaMY08BmDAParb71qE8vwOcyligIy38fIoybShKrbfZFZATsFEZ8l9EtCrlsnqGNC%2BqSmBCNc7qLaqGc6MVfJwusztrNllcJsMmvKyA5d9xdeMD4n%2FEiHmq6vaFsx3nTwXyt5yKj6JYjtEGJpWcHfjrYBSsEH3NWduLLJCAwxAPK0gRLMbC%2BTshTjIV0OmY%2FV4O%2FHWe5w2L73ZEzdDjF9qVbszFoOJcd9yq%2FGcnOzM%2BoBz8xTymbRwzD2IcI9So7C40CiqfJMay4ovWy%2BFq%2Fhw9d1CZIJlOlzCn5bZi69ol0sqJkh7MM1MEsjY9g4w4KMIeXOnU47Do%2B6AJs52dD1lpV3zdUKDpfbIRMsBxYh8%2Bsy285NfP7FJTWKY4ycI5Zeub%2FLUPmsoWDdz1Nl06VqEMC%2BiPAFEeDp6kYG41A%2FWwNHnfDYbsoGSktFGajfTIKLWo5d9bhB2H2W%2B8RbxGRoNTLoTd8XR%2FgQKsCExAV7ti2I6G2Ug%2BN3UhIput1tUtCoCIdqc92KNmeoVCG2tZaio4yW%2FaphkhbfG%2B7AagkswypuvnDKvNmgnCZbMMTWy8EGOqUB%2BCg3G4%2Bi4RRcpteGIWhD6rmmDq9mxNqHXDTm66i5O7CFfOmyTOFcvgOhmXoJ44z4RzpJOc0eplvIM7DpyIgSWnPj6szrlL13c2vYApFoY07rdwYGunrsc9MLpDLUjIjUv9Wh%2BIVwWenMp5stgsKi5Cy0LREkD%2F%2FLEXfEcmBNlOGNhLBCefsD1%2F8QFFZ4cw%2Beghu6MFtii71fZIA2c3cjP6E%2ByvWM&X-Amz-Signature=d4416259dfd5750b8f64d27ad058f937336615153a6b8d782897b39cdd7c1e62&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
