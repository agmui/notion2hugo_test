---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LOSNZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCPBHtdGJRhqzCqPII55pW28GGRwp%2B%2FlpdtTr%2F%2FLgVNsAIhAJqXn4RFzRc%2FA%2Fr3TX3GuFaX%2BL3cX5okJ1EtKpxdINg7Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyS3DJ%2BsCXNZfjrtokq3AN9dZ8D3lQevZv79KrGx9eCJhbR2XhEpZA8lWARhZPJyz%2Bw0ur9UHu954%2F8GZIuY%2F1dLTKpxXETmaLCEbXOcGlso0%2BJkBfFV%2FUU8xFMIiMsw4pDTdO95BCVksEIjsa%2BQXmk0eLdnveDxT1QSq9QyuPmV6DwNqwhKuO%2BDTqPSbaKzeog4K2aLowIvlSyeUwNL1OzzaMLSMY%2BRrquZkYxNTyzrijPS%2FqOvf8BzIbT2cgkefaOESGrRavusgM6wLBwRT%2FwNDR8yynoTFTGjOB25NcInjY9A36xT4s4Y8ukyy7RMZ10X3S%2FUZmq%2F%2F1Mh4KDq1hJ%2BpKoxDKtpOx98OoYnqtRBqJtC8X8cIkxpcmJqTJD13Fgd5XAhX09JQ9NR3tHAntCq1zuAfX7pn8xqAOnluRBhjVNCbH3q6OpyxgfC6fHFf6cEDr0kva8SLiI4sx8ZmGDi6abSu1Jc4sPhpycvhBbnkqIWBzDBB%2B3KZfi%2BqSEMQ%2Fl4eQeavUiEIucp2EuR0%2BQPKIi5e8N0v1qTkLFfB0BFO%2BkDLWqWcX2avSaBiCNEsr4CdDeVh4DjgOccpFZ541B9tleiZMYXoKMkOqTk8z2Oh2mftFmdayj8yiesLUGsJlriCRUQ8I%2BFhZ9xzCFhtTDBjqkAQTJ7FGNsHbOsTHcWIapHtHwqWdt1TY4kf0efjxysSmeRiI%2FY8Gq%2BRBs3Z4VZNnG0MYB1DD5KMaoE6ovcYACCHGm5myYvuHijoJdnfQoLIpbVB9%2Bz1WbdS%2F0N53n6c2kKLLknZaCSgKP7pd1u4EZIIz3vI2N%2BZ5%2Fx1EgqprId4stsGc2s2D1bArxpakkMT7WDaFzyhSpWPUCj6aEittKl9jzHog6&X-Amz-Signature=5410e8f5573528f108f4ca89c06333bb6127aa07259fe2b4cbf9007812f614b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LOSNZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCPBHtdGJRhqzCqPII55pW28GGRwp%2B%2FlpdtTr%2F%2FLgVNsAIhAJqXn4RFzRc%2FA%2Fr3TX3GuFaX%2BL3cX5okJ1EtKpxdINg7Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyS3DJ%2BsCXNZfjrtokq3AN9dZ8D3lQevZv79KrGx9eCJhbR2XhEpZA8lWARhZPJyz%2Bw0ur9UHu954%2F8GZIuY%2F1dLTKpxXETmaLCEbXOcGlso0%2BJkBfFV%2FUU8xFMIiMsw4pDTdO95BCVksEIjsa%2BQXmk0eLdnveDxT1QSq9QyuPmV6DwNqwhKuO%2BDTqPSbaKzeog4K2aLowIvlSyeUwNL1OzzaMLSMY%2BRrquZkYxNTyzrijPS%2FqOvf8BzIbT2cgkefaOESGrRavusgM6wLBwRT%2FwNDR8yynoTFTGjOB25NcInjY9A36xT4s4Y8ukyy7RMZ10X3S%2FUZmq%2F%2F1Mh4KDq1hJ%2BpKoxDKtpOx98OoYnqtRBqJtC8X8cIkxpcmJqTJD13Fgd5XAhX09JQ9NR3tHAntCq1zuAfX7pn8xqAOnluRBhjVNCbH3q6OpyxgfC6fHFf6cEDr0kva8SLiI4sx8ZmGDi6abSu1Jc4sPhpycvhBbnkqIWBzDBB%2B3KZfi%2BqSEMQ%2Fl4eQeavUiEIucp2EuR0%2BQPKIi5e8N0v1qTkLFfB0BFO%2BkDLWqWcX2avSaBiCNEsr4CdDeVh4DjgOccpFZ541B9tleiZMYXoKMkOqTk8z2Oh2mftFmdayj8yiesLUGsJlriCRUQ8I%2BFhZ9xzCFhtTDBjqkAQTJ7FGNsHbOsTHcWIapHtHwqWdt1TY4kf0efjxysSmeRiI%2FY8Gq%2BRBs3Z4VZNnG0MYB1DD5KMaoE6ovcYACCHGm5myYvuHijoJdnfQoLIpbVB9%2Bz1WbdS%2F0N53n6c2kKLLknZaCSgKP7pd1u4EZIIz3vI2N%2BZ5%2Fx1EgqprId4stsGc2s2D1bArxpakkMT7WDaFzyhSpWPUCj6aEittKl9jzHog6&X-Amz-Signature=50e8e899480a037b10d75460d46e7403c854c58687dd70dadafbb758e1fb9602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LOSNZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCPBHtdGJRhqzCqPII55pW28GGRwp%2B%2FlpdtTr%2F%2FLgVNsAIhAJqXn4RFzRc%2FA%2Fr3TX3GuFaX%2BL3cX5okJ1EtKpxdINg7Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyS3DJ%2BsCXNZfjrtokq3AN9dZ8D3lQevZv79KrGx9eCJhbR2XhEpZA8lWARhZPJyz%2Bw0ur9UHu954%2F8GZIuY%2F1dLTKpxXETmaLCEbXOcGlso0%2BJkBfFV%2FUU8xFMIiMsw4pDTdO95BCVksEIjsa%2BQXmk0eLdnveDxT1QSq9QyuPmV6DwNqwhKuO%2BDTqPSbaKzeog4K2aLowIvlSyeUwNL1OzzaMLSMY%2BRrquZkYxNTyzrijPS%2FqOvf8BzIbT2cgkefaOESGrRavusgM6wLBwRT%2FwNDR8yynoTFTGjOB25NcInjY9A36xT4s4Y8ukyy7RMZ10X3S%2FUZmq%2F%2F1Mh4KDq1hJ%2BpKoxDKtpOx98OoYnqtRBqJtC8X8cIkxpcmJqTJD13Fgd5XAhX09JQ9NR3tHAntCq1zuAfX7pn8xqAOnluRBhjVNCbH3q6OpyxgfC6fHFf6cEDr0kva8SLiI4sx8ZmGDi6abSu1Jc4sPhpycvhBbnkqIWBzDBB%2B3KZfi%2BqSEMQ%2Fl4eQeavUiEIucp2EuR0%2BQPKIi5e8N0v1qTkLFfB0BFO%2BkDLWqWcX2avSaBiCNEsr4CdDeVh4DjgOccpFZ541B9tleiZMYXoKMkOqTk8z2Oh2mftFmdayj8yiesLUGsJlriCRUQ8I%2BFhZ9xzCFhtTDBjqkAQTJ7FGNsHbOsTHcWIapHtHwqWdt1TY4kf0efjxysSmeRiI%2FY8Gq%2BRBs3Z4VZNnG0MYB1DD5KMaoE6ovcYACCHGm5myYvuHijoJdnfQoLIpbVB9%2Bz1WbdS%2F0N53n6c2kKLLknZaCSgKP7pd1u4EZIIz3vI2N%2BZ5%2Fx1EgqprId4stsGc2s2D1bArxpakkMT7WDaFzyhSpWPUCj6aEittKl9jzHog6&X-Amz-Signature=e639938e13152518db86c5a23d767d4d632be2097a5daad26452aadd7f0c8e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LOSNZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCPBHtdGJRhqzCqPII55pW28GGRwp%2B%2FlpdtTr%2F%2FLgVNsAIhAJqXn4RFzRc%2FA%2Fr3TX3GuFaX%2BL3cX5okJ1EtKpxdINg7Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyS3DJ%2BsCXNZfjrtokq3AN9dZ8D3lQevZv79KrGx9eCJhbR2XhEpZA8lWARhZPJyz%2Bw0ur9UHu954%2F8GZIuY%2F1dLTKpxXETmaLCEbXOcGlso0%2BJkBfFV%2FUU8xFMIiMsw4pDTdO95BCVksEIjsa%2BQXmk0eLdnveDxT1QSq9QyuPmV6DwNqwhKuO%2BDTqPSbaKzeog4K2aLowIvlSyeUwNL1OzzaMLSMY%2BRrquZkYxNTyzrijPS%2FqOvf8BzIbT2cgkefaOESGrRavusgM6wLBwRT%2FwNDR8yynoTFTGjOB25NcInjY9A36xT4s4Y8ukyy7RMZ10X3S%2FUZmq%2F%2F1Mh4KDq1hJ%2BpKoxDKtpOx98OoYnqtRBqJtC8X8cIkxpcmJqTJD13Fgd5XAhX09JQ9NR3tHAntCq1zuAfX7pn8xqAOnluRBhjVNCbH3q6OpyxgfC6fHFf6cEDr0kva8SLiI4sx8ZmGDi6abSu1Jc4sPhpycvhBbnkqIWBzDBB%2B3KZfi%2BqSEMQ%2Fl4eQeavUiEIucp2EuR0%2BQPKIi5e8N0v1qTkLFfB0BFO%2BkDLWqWcX2avSaBiCNEsr4CdDeVh4DjgOccpFZ541B9tleiZMYXoKMkOqTk8z2Oh2mftFmdayj8yiesLUGsJlriCRUQ8I%2BFhZ9xzCFhtTDBjqkAQTJ7FGNsHbOsTHcWIapHtHwqWdt1TY4kf0efjxysSmeRiI%2FY8Gq%2BRBs3Z4VZNnG0MYB1DD5KMaoE6ovcYACCHGm5myYvuHijoJdnfQoLIpbVB9%2Bz1WbdS%2F0N53n6c2kKLLknZaCSgKP7pd1u4EZIIz3vI2N%2BZ5%2Fx1EgqprId4stsGc2s2D1bArxpakkMT7WDaFzyhSpWPUCj6aEittKl9jzHog6&X-Amz-Signature=989da1c36ff2155f3b3c82bc32ce29ed343fcb0aecc649a0fc6f08f17c98597d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LOSNZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCPBHtdGJRhqzCqPII55pW28GGRwp%2B%2FlpdtTr%2F%2FLgVNsAIhAJqXn4RFzRc%2FA%2Fr3TX3GuFaX%2BL3cX5okJ1EtKpxdINg7Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyS3DJ%2BsCXNZfjrtokq3AN9dZ8D3lQevZv79KrGx9eCJhbR2XhEpZA8lWARhZPJyz%2Bw0ur9UHu954%2F8GZIuY%2F1dLTKpxXETmaLCEbXOcGlso0%2BJkBfFV%2FUU8xFMIiMsw4pDTdO95BCVksEIjsa%2BQXmk0eLdnveDxT1QSq9QyuPmV6DwNqwhKuO%2BDTqPSbaKzeog4K2aLowIvlSyeUwNL1OzzaMLSMY%2BRrquZkYxNTyzrijPS%2FqOvf8BzIbT2cgkefaOESGrRavusgM6wLBwRT%2FwNDR8yynoTFTGjOB25NcInjY9A36xT4s4Y8ukyy7RMZ10X3S%2FUZmq%2F%2F1Mh4KDq1hJ%2BpKoxDKtpOx98OoYnqtRBqJtC8X8cIkxpcmJqTJD13Fgd5XAhX09JQ9NR3tHAntCq1zuAfX7pn8xqAOnluRBhjVNCbH3q6OpyxgfC6fHFf6cEDr0kva8SLiI4sx8ZmGDi6abSu1Jc4sPhpycvhBbnkqIWBzDBB%2B3KZfi%2BqSEMQ%2Fl4eQeavUiEIucp2EuR0%2BQPKIi5e8N0v1qTkLFfB0BFO%2BkDLWqWcX2avSaBiCNEsr4CdDeVh4DjgOccpFZ541B9tleiZMYXoKMkOqTk8z2Oh2mftFmdayj8yiesLUGsJlriCRUQ8I%2BFhZ9xzCFhtTDBjqkAQTJ7FGNsHbOsTHcWIapHtHwqWdt1TY4kf0efjxysSmeRiI%2FY8Gq%2BRBs3Z4VZNnG0MYB1DD5KMaoE6ovcYACCHGm5myYvuHijoJdnfQoLIpbVB9%2Bz1WbdS%2F0N53n6c2kKLLknZaCSgKP7pd1u4EZIIz3vI2N%2BZ5%2Fx1EgqprId4stsGc2s2D1bArxpakkMT7WDaFzyhSpWPUCj6aEittKl9jzHog6&X-Amz-Signature=c47e033c7a7871505c619e98d7f031205a6ba61841075338bc6faf11e7201603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LOSNZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCPBHtdGJRhqzCqPII55pW28GGRwp%2B%2FlpdtTr%2F%2FLgVNsAIhAJqXn4RFzRc%2FA%2Fr3TX3GuFaX%2BL3cX5okJ1EtKpxdINg7Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyS3DJ%2BsCXNZfjrtokq3AN9dZ8D3lQevZv79KrGx9eCJhbR2XhEpZA8lWARhZPJyz%2Bw0ur9UHu954%2F8GZIuY%2F1dLTKpxXETmaLCEbXOcGlso0%2BJkBfFV%2FUU8xFMIiMsw4pDTdO95BCVksEIjsa%2BQXmk0eLdnveDxT1QSq9QyuPmV6DwNqwhKuO%2BDTqPSbaKzeog4K2aLowIvlSyeUwNL1OzzaMLSMY%2BRrquZkYxNTyzrijPS%2FqOvf8BzIbT2cgkefaOESGrRavusgM6wLBwRT%2FwNDR8yynoTFTGjOB25NcInjY9A36xT4s4Y8ukyy7RMZ10X3S%2FUZmq%2F%2F1Mh4KDq1hJ%2BpKoxDKtpOx98OoYnqtRBqJtC8X8cIkxpcmJqTJD13Fgd5XAhX09JQ9NR3tHAntCq1zuAfX7pn8xqAOnluRBhjVNCbH3q6OpyxgfC6fHFf6cEDr0kva8SLiI4sx8ZmGDi6abSu1Jc4sPhpycvhBbnkqIWBzDBB%2B3KZfi%2BqSEMQ%2Fl4eQeavUiEIucp2EuR0%2BQPKIi5e8N0v1qTkLFfB0BFO%2BkDLWqWcX2avSaBiCNEsr4CdDeVh4DjgOccpFZ541B9tleiZMYXoKMkOqTk8z2Oh2mftFmdayj8yiesLUGsJlriCRUQ8I%2BFhZ9xzCFhtTDBjqkAQTJ7FGNsHbOsTHcWIapHtHwqWdt1TY4kf0efjxysSmeRiI%2FY8Gq%2BRBs3Z4VZNnG0MYB1DD5KMaoE6ovcYACCHGm5myYvuHijoJdnfQoLIpbVB9%2Bz1WbdS%2F0N53n6c2kKLLknZaCSgKP7pd1u4EZIIz3vI2N%2BZ5%2Fx1EgqprId4stsGc2s2D1bArxpakkMT7WDaFzyhSpWPUCj6aEittKl9jzHog6&X-Amz-Signature=353c0de9e4358954d50a67ab1f6d49f72d4249d681bda6064547ec7aef66f01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LOSNZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCPBHtdGJRhqzCqPII55pW28GGRwp%2B%2FlpdtTr%2F%2FLgVNsAIhAJqXn4RFzRc%2FA%2Fr3TX3GuFaX%2BL3cX5okJ1EtKpxdINg7Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyS3DJ%2BsCXNZfjrtokq3AN9dZ8D3lQevZv79KrGx9eCJhbR2XhEpZA8lWARhZPJyz%2Bw0ur9UHu954%2F8GZIuY%2F1dLTKpxXETmaLCEbXOcGlso0%2BJkBfFV%2FUU8xFMIiMsw4pDTdO95BCVksEIjsa%2BQXmk0eLdnveDxT1QSq9QyuPmV6DwNqwhKuO%2BDTqPSbaKzeog4K2aLowIvlSyeUwNL1OzzaMLSMY%2BRrquZkYxNTyzrijPS%2FqOvf8BzIbT2cgkefaOESGrRavusgM6wLBwRT%2FwNDR8yynoTFTGjOB25NcInjY9A36xT4s4Y8ukyy7RMZ10X3S%2FUZmq%2F%2F1Mh4KDq1hJ%2BpKoxDKtpOx98OoYnqtRBqJtC8X8cIkxpcmJqTJD13Fgd5XAhX09JQ9NR3tHAntCq1zuAfX7pn8xqAOnluRBhjVNCbH3q6OpyxgfC6fHFf6cEDr0kva8SLiI4sx8ZmGDi6abSu1Jc4sPhpycvhBbnkqIWBzDBB%2B3KZfi%2BqSEMQ%2Fl4eQeavUiEIucp2EuR0%2BQPKIi5e8N0v1qTkLFfB0BFO%2BkDLWqWcX2avSaBiCNEsr4CdDeVh4DjgOccpFZ541B9tleiZMYXoKMkOqTk8z2Oh2mftFmdayj8yiesLUGsJlriCRUQ8I%2BFhZ9xzCFhtTDBjqkAQTJ7FGNsHbOsTHcWIapHtHwqWdt1TY4kf0efjxysSmeRiI%2FY8Gq%2BRBs3Z4VZNnG0MYB1DD5KMaoE6ovcYACCHGm5myYvuHijoJdnfQoLIpbVB9%2Bz1WbdS%2F0N53n6c2kKLLknZaCSgKP7pd1u4EZIIz3vI2N%2BZ5%2Fx1EgqprId4stsGc2s2D1bArxpakkMT7WDaFzyhSpWPUCj6aEittKl9jzHog6&X-Amz-Signature=3ffef175fd97250347d4252304682bd0f0c6ffd4bee50ba12cec5073a5ea124d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
