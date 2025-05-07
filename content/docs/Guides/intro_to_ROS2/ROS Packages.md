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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLVMTEZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC396AXYrTAjZIAPIomHVckarg7s0QH6PqXWBvXbpHXhgIgDipDFc6ZuaMYHIoBa6yuWFbM%2Bqxxmr%2BTfHdJFY9yFfsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDA8xnZLrRlefmrCDCircA99Dqmz8iJdY28KvB9qnOPHPpajlryLpp2kCF2t9a3v%2BVAt3ofspVCHXCukVhmWzwH5oetZtXV3X9SAvqu1qgEPeD882Pw0rr5HHmbt9tBLZp1LzzBPMfnKOHzi8B9lbCcOjjMbmfEhplo21JZ8acpisYNxWjtKIcSq7cuerkEk6UyS8tsTA7XzKcr7E7KBQvsp1Mv%2BhFR%2F974tzSSAvN9lWcuJ6f8iKU%2FSCx9ApIvsLJJdpnSRGwQCNzsCmL3B2k4JxNmJo15WZyTh0vU216PJfhD86BA1riY5YXYWvK14QQVpeiW76iGxrkFU%2BXKqbLQRToe8zfjtzEAohuZn4kZs2nwuFxOPPB%2B0o26QOnJgimfCbGEI2GVUn6Brdo%2BHxZu5Te4F2RuBMO%2BqHzWFfbrlgtzOkwWV969FO00NVuIVuwp4SIaZ33ocs3l%2F8OR2bkSMUMWwDN5gft%2BS6c5Urvi%2BkJwSBGAzm6NN6l8RtkbLEegDWyNxQ7JGgoaMB02TeBzKTQQH%2FOuvfrTZ4zf93GyihEjncSrqyHPYj%2F%2B2pOdpPTqBn%2BWrtkp44T7S1sfmx19OpNd51sHW68cg1RS8AWVk3y%2BxRboUNtcJ6%2BPYacMvUxQD33z%2FKTsXBkPp4MLqz7cAGOqUBzhow%2FGO2XrhCzhGNeRDl22KbKKyhvvzWA4EoC5GbsFtLwpac6L2dRpDW1XP%2B1YlrvX37oEgaWjL97HAVrGDxZbBEcFV8C%2FFZB5wHC%2F3xGwRCSYz4B61jP8oxpNknWALvE1zF9U%2B0opXoK0fod2NUQCOb9riVIb5C0qKmip5LVmFFgAB5Egnh6rBtlNEqIv1x43R6PKPHIrRF54Osg%2FklLaxVCuPU&X-Amz-Signature=a975b3e74268e0e1c5f87705516880fce25bfb99ef518f015e819227dba78bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLVMTEZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC396AXYrTAjZIAPIomHVckarg7s0QH6PqXWBvXbpHXhgIgDipDFc6ZuaMYHIoBa6yuWFbM%2Bqxxmr%2BTfHdJFY9yFfsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDA8xnZLrRlefmrCDCircA99Dqmz8iJdY28KvB9qnOPHPpajlryLpp2kCF2t9a3v%2BVAt3ofspVCHXCukVhmWzwH5oetZtXV3X9SAvqu1qgEPeD882Pw0rr5HHmbt9tBLZp1LzzBPMfnKOHzi8B9lbCcOjjMbmfEhplo21JZ8acpisYNxWjtKIcSq7cuerkEk6UyS8tsTA7XzKcr7E7KBQvsp1Mv%2BhFR%2F974tzSSAvN9lWcuJ6f8iKU%2FSCx9ApIvsLJJdpnSRGwQCNzsCmL3B2k4JxNmJo15WZyTh0vU216PJfhD86BA1riY5YXYWvK14QQVpeiW76iGxrkFU%2BXKqbLQRToe8zfjtzEAohuZn4kZs2nwuFxOPPB%2B0o26QOnJgimfCbGEI2GVUn6Brdo%2BHxZu5Te4F2RuBMO%2BqHzWFfbrlgtzOkwWV969FO00NVuIVuwp4SIaZ33ocs3l%2F8OR2bkSMUMWwDN5gft%2BS6c5Urvi%2BkJwSBGAzm6NN6l8RtkbLEegDWyNxQ7JGgoaMB02TeBzKTQQH%2FOuvfrTZ4zf93GyihEjncSrqyHPYj%2F%2B2pOdpPTqBn%2BWrtkp44T7S1sfmx19OpNd51sHW68cg1RS8AWVk3y%2BxRboUNtcJ6%2BPYacMvUxQD33z%2FKTsXBkPp4MLqz7cAGOqUBzhow%2FGO2XrhCzhGNeRDl22KbKKyhvvzWA4EoC5GbsFtLwpac6L2dRpDW1XP%2B1YlrvX37oEgaWjL97HAVrGDxZbBEcFV8C%2FFZB5wHC%2F3xGwRCSYz4B61jP8oxpNknWALvE1zF9U%2B0opXoK0fod2NUQCOb9riVIb5C0qKmip5LVmFFgAB5Egnh6rBtlNEqIv1x43R6PKPHIrRF54Osg%2FklLaxVCuPU&X-Amz-Signature=377d632cb0f954d31903c92939d265527b064be8dbde46aac38269825125ff51&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLVMTEZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC396AXYrTAjZIAPIomHVckarg7s0QH6PqXWBvXbpHXhgIgDipDFc6ZuaMYHIoBa6yuWFbM%2Bqxxmr%2BTfHdJFY9yFfsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDA8xnZLrRlefmrCDCircA99Dqmz8iJdY28KvB9qnOPHPpajlryLpp2kCF2t9a3v%2BVAt3ofspVCHXCukVhmWzwH5oetZtXV3X9SAvqu1qgEPeD882Pw0rr5HHmbt9tBLZp1LzzBPMfnKOHzi8B9lbCcOjjMbmfEhplo21JZ8acpisYNxWjtKIcSq7cuerkEk6UyS8tsTA7XzKcr7E7KBQvsp1Mv%2BhFR%2F974tzSSAvN9lWcuJ6f8iKU%2FSCx9ApIvsLJJdpnSRGwQCNzsCmL3B2k4JxNmJo15WZyTh0vU216PJfhD86BA1riY5YXYWvK14QQVpeiW76iGxrkFU%2BXKqbLQRToe8zfjtzEAohuZn4kZs2nwuFxOPPB%2B0o26QOnJgimfCbGEI2GVUn6Brdo%2BHxZu5Te4F2RuBMO%2BqHzWFfbrlgtzOkwWV969FO00NVuIVuwp4SIaZ33ocs3l%2F8OR2bkSMUMWwDN5gft%2BS6c5Urvi%2BkJwSBGAzm6NN6l8RtkbLEegDWyNxQ7JGgoaMB02TeBzKTQQH%2FOuvfrTZ4zf93GyihEjncSrqyHPYj%2F%2B2pOdpPTqBn%2BWrtkp44T7S1sfmx19OpNd51sHW68cg1RS8AWVk3y%2BxRboUNtcJ6%2BPYacMvUxQD33z%2FKTsXBkPp4MLqz7cAGOqUBzhow%2FGO2XrhCzhGNeRDl22KbKKyhvvzWA4EoC5GbsFtLwpac6L2dRpDW1XP%2B1YlrvX37oEgaWjL97HAVrGDxZbBEcFV8C%2FFZB5wHC%2F3xGwRCSYz4B61jP8oxpNknWALvE1zF9U%2B0opXoK0fod2NUQCOb9riVIb5C0qKmip5LVmFFgAB5Egnh6rBtlNEqIv1x43R6PKPHIrRF54Osg%2FklLaxVCuPU&X-Amz-Signature=3932054644243aceab9a3ffb1aee9d7b689d7c06d5d37cba3528725524a37be0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLVMTEZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC396AXYrTAjZIAPIomHVckarg7s0QH6PqXWBvXbpHXhgIgDipDFc6ZuaMYHIoBa6yuWFbM%2Bqxxmr%2BTfHdJFY9yFfsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDA8xnZLrRlefmrCDCircA99Dqmz8iJdY28KvB9qnOPHPpajlryLpp2kCF2t9a3v%2BVAt3ofspVCHXCukVhmWzwH5oetZtXV3X9SAvqu1qgEPeD882Pw0rr5HHmbt9tBLZp1LzzBPMfnKOHzi8B9lbCcOjjMbmfEhplo21JZ8acpisYNxWjtKIcSq7cuerkEk6UyS8tsTA7XzKcr7E7KBQvsp1Mv%2BhFR%2F974tzSSAvN9lWcuJ6f8iKU%2FSCx9ApIvsLJJdpnSRGwQCNzsCmL3B2k4JxNmJo15WZyTh0vU216PJfhD86BA1riY5YXYWvK14QQVpeiW76iGxrkFU%2BXKqbLQRToe8zfjtzEAohuZn4kZs2nwuFxOPPB%2B0o26QOnJgimfCbGEI2GVUn6Brdo%2BHxZu5Te4F2RuBMO%2BqHzWFfbrlgtzOkwWV969FO00NVuIVuwp4SIaZ33ocs3l%2F8OR2bkSMUMWwDN5gft%2BS6c5Urvi%2BkJwSBGAzm6NN6l8RtkbLEegDWyNxQ7JGgoaMB02TeBzKTQQH%2FOuvfrTZ4zf93GyihEjncSrqyHPYj%2F%2B2pOdpPTqBn%2BWrtkp44T7S1sfmx19OpNd51sHW68cg1RS8AWVk3y%2BxRboUNtcJ6%2BPYacMvUxQD33z%2FKTsXBkPp4MLqz7cAGOqUBzhow%2FGO2XrhCzhGNeRDl22KbKKyhvvzWA4EoC5GbsFtLwpac6L2dRpDW1XP%2B1YlrvX37oEgaWjL97HAVrGDxZbBEcFV8C%2FFZB5wHC%2F3xGwRCSYz4B61jP8oxpNknWALvE1zF9U%2B0opXoK0fod2NUQCOb9riVIb5C0qKmip5LVmFFgAB5Egnh6rBtlNEqIv1x43R6PKPHIrRF54Osg%2FklLaxVCuPU&X-Amz-Signature=253c0cea83f44dc53515933d1766853a9a3d37acd9f6ff6a13ef5a91443b7838&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLVMTEZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC396AXYrTAjZIAPIomHVckarg7s0QH6PqXWBvXbpHXhgIgDipDFc6ZuaMYHIoBa6yuWFbM%2Bqxxmr%2BTfHdJFY9yFfsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDA8xnZLrRlefmrCDCircA99Dqmz8iJdY28KvB9qnOPHPpajlryLpp2kCF2t9a3v%2BVAt3ofspVCHXCukVhmWzwH5oetZtXV3X9SAvqu1qgEPeD882Pw0rr5HHmbt9tBLZp1LzzBPMfnKOHzi8B9lbCcOjjMbmfEhplo21JZ8acpisYNxWjtKIcSq7cuerkEk6UyS8tsTA7XzKcr7E7KBQvsp1Mv%2BhFR%2F974tzSSAvN9lWcuJ6f8iKU%2FSCx9ApIvsLJJdpnSRGwQCNzsCmL3B2k4JxNmJo15WZyTh0vU216PJfhD86BA1riY5YXYWvK14QQVpeiW76iGxrkFU%2BXKqbLQRToe8zfjtzEAohuZn4kZs2nwuFxOPPB%2B0o26QOnJgimfCbGEI2GVUn6Brdo%2BHxZu5Te4F2RuBMO%2BqHzWFfbrlgtzOkwWV969FO00NVuIVuwp4SIaZ33ocs3l%2F8OR2bkSMUMWwDN5gft%2BS6c5Urvi%2BkJwSBGAzm6NN6l8RtkbLEegDWyNxQ7JGgoaMB02TeBzKTQQH%2FOuvfrTZ4zf93GyihEjncSrqyHPYj%2F%2B2pOdpPTqBn%2BWrtkp44T7S1sfmx19OpNd51sHW68cg1RS8AWVk3y%2BxRboUNtcJ6%2BPYacMvUxQD33z%2FKTsXBkPp4MLqz7cAGOqUBzhow%2FGO2XrhCzhGNeRDl22KbKKyhvvzWA4EoC5GbsFtLwpac6L2dRpDW1XP%2B1YlrvX37oEgaWjL97HAVrGDxZbBEcFV8C%2FFZB5wHC%2F3xGwRCSYz4B61jP8oxpNknWALvE1zF9U%2B0opXoK0fod2NUQCOb9riVIb5C0qKmip5LVmFFgAB5Egnh6rBtlNEqIv1x43R6PKPHIrRF54Osg%2FklLaxVCuPU&X-Amz-Signature=6e79cc34f2fc83de313519c5305fb7d81ff0445afffd106c0d7fa8214036b253&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLVMTEZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC396AXYrTAjZIAPIomHVckarg7s0QH6PqXWBvXbpHXhgIgDipDFc6ZuaMYHIoBa6yuWFbM%2Bqxxmr%2BTfHdJFY9yFfsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDA8xnZLrRlefmrCDCircA99Dqmz8iJdY28KvB9qnOPHPpajlryLpp2kCF2t9a3v%2BVAt3ofspVCHXCukVhmWzwH5oetZtXV3X9SAvqu1qgEPeD882Pw0rr5HHmbt9tBLZp1LzzBPMfnKOHzi8B9lbCcOjjMbmfEhplo21JZ8acpisYNxWjtKIcSq7cuerkEk6UyS8tsTA7XzKcr7E7KBQvsp1Mv%2BhFR%2F974tzSSAvN9lWcuJ6f8iKU%2FSCx9ApIvsLJJdpnSRGwQCNzsCmL3B2k4JxNmJo15WZyTh0vU216PJfhD86BA1riY5YXYWvK14QQVpeiW76iGxrkFU%2BXKqbLQRToe8zfjtzEAohuZn4kZs2nwuFxOPPB%2B0o26QOnJgimfCbGEI2GVUn6Brdo%2BHxZu5Te4F2RuBMO%2BqHzWFfbrlgtzOkwWV969FO00NVuIVuwp4SIaZ33ocs3l%2F8OR2bkSMUMWwDN5gft%2BS6c5Urvi%2BkJwSBGAzm6NN6l8RtkbLEegDWyNxQ7JGgoaMB02TeBzKTQQH%2FOuvfrTZ4zf93GyihEjncSrqyHPYj%2F%2B2pOdpPTqBn%2BWrtkp44T7S1sfmx19OpNd51sHW68cg1RS8AWVk3y%2BxRboUNtcJ6%2BPYacMvUxQD33z%2FKTsXBkPp4MLqz7cAGOqUBzhow%2FGO2XrhCzhGNeRDl22KbKKyhvvzWA4EoC5GbsFtLwpac6L2dRpDW1XP%2B1YlrvX37oEgaWjL97HAVrGDxZbBEcFV8C%2FFZB5wHC%2F3xGwRCSYz4B61jP8oxpNknWALvE1zF9U%2B0opXoK0fod2NUQCOb9riVIb5C0qKmip5LVmFFgAB5Egnh6rBtlNEqIv1x43R6PKPHIrRF54Osg%2FklLaxVCuPU&X-Amz-Signature=48f8f2548c9562b9a5ef73cee256f904067b00971ccbee9825281fe5577468af&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLVMTEZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC396AXYrTAjZIAPIomHVckarg7s0QH6PqXWBvXbpHXhgIgDipDFc6ZuaMYHIoBa6yuWFbM%2Bqxxmr%2BTfHdJFY9yFfsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDA8xnZLrRlefmrCDCircA99Dqmz8iJdY28KvB9qnOPHPpajlryLpp2kCF2t9a3v%2BVAt3ofspVCHXCukVhmWzwH5oetZtXV3X9SAvqu1qgEPeD882Pw0rr5HHmbt9tBLZp1LzzBPMfnKOHzi8B9lbCcOjjMbmfEhplo21JZ8acpisYNxWjtKIcSq7cuerkEk6UyS8tsTA7XzKcr7E7KBQvsp1Mv%2BhFR%2F974tzSSAvN9lWcuJ6f8iKU%2FSCx9ApIvsLJJdpnSRGwQCNzsCmL3B2k4JxNmJo15WZyTh0vU216PJfhD86BA1riY5YXYWvK14QQVpeiW76iGxrkFU%2BXKqbLQRToe8zfjtzEAohuZn4kZs2nwuFxOPPB%2B0o26QOnJgimfCbGEI2GVUn6Brdo%2BHxZu5Te4F2RuBMO%2BqHzWFfbrlgtzOkwWV969FO00NVuIVuwp4SIaZ33ocs3l%2F8OR2bkSMUMWwDN5gft%2BS6c5Urvi%2BkJwSBGAzm6NN6l8RtkbLEegDWyNxQ7JGgoaMB02TeBzKTQQH%2FOuvfrTZ4zf93GyihEjncSrqyHPYj%2F%2B2pOdpPTqBn%2BWrtkp44T7S1sfmx19OpNd51sHW68cg1RS8AWVk3y%2BxRboUNtcJ6%2BPYacMvUxQD33z%2FKTsXBkPp4MLqz7cAGOqUBzhow%2FGO2XrhCzhGNeRDl22KbKKyhvvzWA4EoC5GbsFtLwpac6L2dRpDW1XP%2B1YlrvX37oEgaWjL97HAVrGDxZbBEcFV8C%2FFZB5wHC%2F3xGwRCSYz4B61jP8oxpNknWALvE1zF9U%2B0opXoK0fod2NUQCOb9riVIb5C0qKmip5LVmFFgAB5Egnh6rBtlNEqIv1x43R6PKPHIrRF54Osg%2FklLaxVCuPU&X-Amz-Signature=cafdf52c974f125b4e2caa4b1d4e3cecb24547398db30f0e3b6fde91c470a052&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
