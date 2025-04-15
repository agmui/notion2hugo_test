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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVS6UHP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD9e%2B9ljB6knZbesGVfxkMZlkQ2BaCq1Oxqb9E6fKz3QIhAMXQroPuqKzC3tA9lE5%2BxQAQyy%2F4UvnrjOvasHO0IsMsKv8DCDQQABoMNjM3NDIzMTgzODA1IgyetGbnQxv%2Fhg0bBHUq3APq2WpSMa2O9Gq4sL4bE6%2FytEyeaVogwQ6rTP310yZB%2FQkj7Cl7RUmL5VwmrtNGGDekTiYPhFcGeLJoxKdIKpiNF9XMJgaLbl1IjnrSm7y%2BzSKSIu385MmU9zssJaEuUw1v0ypg22oM4xP09ngR3CqZU2Uct%2F5zf40%2BpJ5cARFTus4T%2F%2Bp4APw10uwl6aM%2F%2FbIZZP6NsFuG4Anri%2FsT%2FxzH8WEee%2FRoJrtttmlm%2BBtiBCvsnqllCcO2il8CIwwP3Bm2%2FeQJw04Af2KD%2B6ylWzoDJmJCsHHrXuM%2BwVynd3O2t%2FG9s7z8sR7zhwhlRrdYHnFSMs%2BULxqxYe8MPkwFADwa%2FpYUvsC5To99bqllCAci2FuXJQ1GJItCRJb6dZBLDHv1G%2B2Q4NohQpwFhGy40z99V3oBHqEIopKJxQwmNhFc%2B%2FyPLIenAnWyEP36a%2Ft0T2DLERGlLwZehxl37gM%2FykRfbGVTJXniCXkr%2Bv8gV8X01OwRX%2B8k0Hgkvg6bOJViSU8KMvdYUhhse5ts4c8c5CBzgnHJ9LKAsD5Sy1ucB%2FNYR9CrzAhHAuJ30ESGVIrRKJRFRyqXI9LykBSlgFAiBtGXrrqpRB6AbrNSYSnQX3dRf%2BMN4rEYc8dnwyLBxDDx1vq%2FBjqkAaCN%2Bs1Qnqa0DDSIGrMlX6iLbYJIcmxbRUzeV7MxnnCo3hkukIVMO6QBNPD%2BGa6iHawnhCvKYn7B9kXYOCfHgS23QqYY%2F8oDi%2FQ%2FEooJ%2Bz73LcOcvFvL%2Ba1XmO0UK2lcw865a7Nlhf2mWc%2BgsK8FVWM8rEWC2YKyIfOtRHbYVbdXpo%2Bw2y%2BNT57lX458YqRTxCERPr0%2F4wjdfgcOTpW%2Bmy4LzlHo&X-Amz-Signature=32ce84a140c5ed422732c118937fec6b8f19f03b3a5ea57d2d7f487f8cbf77e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVS6UHP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD9e%2B9ljB6knZbesGVfxkMZlkQ2BaCq1Oxqb9E6fKz3QIhAMXQroPuqKzC3tA9lE5%2BxQAQyy%2F4UvnrjOvasHO0IsMsKv8DCDQQABoMNjM3NDIzMTgzODA1IgyetGbnQxv%2Fhg0bBHUq3APq2WpSMa2O9Gq4sL4bE6%2FytEyeaVogwQ6rTP310yZB%2FQkj7Cl7RUmL5VwmrtNGGDekTiYPhFcGeLJoxKdIKpiNF9XMJgaLbl1IjnrSm7y%2BzSKSIu385MmU9zssJaEuUw1v0ypg22oM4xP09ngR3CqZU2Uct%2F5zf40%2BpJ5cARFTus4T%2F%2Bp4APw10uwl6aM%2F%2FbIZZP6NsFuG4Anri%2FsT%2FxzH8WEee%2FRoJrtttmlm%2BBtiBCvsnqllCcO2il8CIwwP3Bm2%2FeQJw04Af2KD%2B6ylWzoDJmJCsHHrXuM%2BwVynd3O2t%2FG9s7z8sR7zhwhlRrdYHnFSMs%2BULxqxYe8MPkwFADwa%2FpYUvsC5To99bqllCAci2FuXJQ1GJItCRJb6dZBLDHv1G%2B2Q4NohQpwFhGy40z99V3oBHqEIopKJxQwmNhFc%2B%2FyPLIenAnWyEP36a%2Ft0T2DLERGlLwZehxl37gM%2FykRfbGVTJXniCXkr%2Bv8gV8X01OwRX%2B8k0Hgkvg6bOJViSU8KMvdYUhhse5ts4c8c5CBzgnHJ9LKAsD5Sy1ucB%2FNYR9CrzAhHAuJ30ESGVIrRKJRFRyqXI9LykBSlgFAiBtGXrrqpRB6AbrNSYSnQX3dRf%2BMN4rEYc8dnwyLBxDDx1vq%2FBjqkAaCN%2Bs1Qnqa0DDSIGrMlX6iLbYJIcmxbRUzeV7MxnnCo3hkukIVMO6QBNPD%2BGa6iHawnhCvKYn7B9kXYOCfHgS23QqYY%2F8oDi%2FQ%2FEooJ%2Bz73LcOcvFvL%2Ba1XmO0UK2lcw865a7Nlhf2mWc%2BgsK8FVWM8rEWC2YKyIfOtRHbYVbdXpo%2Bw2y%2BNT57lX458YqRTxCERPr0%2F4wjdfgcOTpW%2Bmy4LzlHo&X-Amz-Signature=bcdaeaf7e3e3c7a24d978337fbf270cc378394c46eccd3694cacc11bbf08c78c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVS6UHP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD9e%2B9ljB6knZbesGVfxkMZlkQ2BaCq1Oxqb9E6fKz3QIhAMXQroPuqKzC3tA9lE5%2BxQAQyy%2F4UvnrjOvasHO0IsMsKv8DCDQQABoMNjM3NDIzMTgzODA1IgyetGbnQxv%2Fhg0bBHUq3APq2WpSMa2O9Gq4sL4bE6%2FytEyeaVogwQ6rTP310yZB%2FQkj7Cl7RUmL5VwmrtNGGDekTiYPhFcGeLJoxKdIKpiNF9XMJgaLbl1IjnrSm7y%2BzSKSIu385MmU9zssJaEuUw1v0ypg22oM4xP09ngR3CqZU2Uct%2F5zf40%2BpJ5cARFTus4T%2F%2Bp4APw10uwl6aM%2F%2FbIZZP6NsFuG4Anri%2FsT%2FxzH8WEee%2FRoJrtttmlm%2BBtiBCvsnqllCcO2il8CIwwP3Bm2%2FeQJw04Af2KD%2B6ylWzoDJmJCsHHrXuM%2BwVynd3O2t%2FG9s7z8sR7zhwhlRrdYHnFSMs%2BULxqxYe8MPkwFADwa%2FpYUvsC5To99bqllCAci2FuXJQ1GJItCRJb6dZBLDHv1G%2B2Q4NohQpwFhGy40z99V3oBHqEIopKJxQwmNhFc%2B%2FyPLIenAnWyEP36a%2Ft0T2DLERGlLwZehxl37gM%2FykRfbGVTJXniCXkr%2Bv8gV8X01OwRX%2B8k0Hgkvg6bOJViSU8KMvdYUhhse5ts4c8c5CBzgnHJ9LKAsD5Sy1ucB%2FNYR9CrzAhHAuJ30ESGVIrRKJRFRyqXI9LykBSlgFAiBtGXrrqpRB6AbrNSYSnQX3dRf%2BMN4rEYc8dnwyLBxDDx1vq%2FBjqkAaCN%2Bs1Qnqa0DDSIGrMlX6iLbYJIcmxbRUzeV7MxnnCo3hkukIVMO6QBNPD%2BGa6iHawnhCvKYn7B9kXYOCfHgS23QqYY%2F8oDi%2FQ%2FEooJ%2Bz73LcOcvFvL%2Ba1XmO0UK2lcw865a7Nlhf2mWc%2BgsK8FVWM8rEWC2YKyIfOtRHbYVbdXpo%2Bw2y%2BNT57lX458YqRTxCERPr0%2F4wjdfgcOTpW%2Bmy4LzlHo&X-Amz-Signature=a46f24c65d170b18fb146c42c40e7667ded9e784835174cfe56312210ce117af&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVS6UHP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD9e%2B9ljB6knZbesGVfxkMZlkQ2BaCq1Oxqb9E6fKz3QIhAMXQroPuqKzC3tA9lE5%2BxQAQyy%2F4UvnrjOvasHO0IsMsKv8DCDQQABoMNjM3NDIzMTgzODA1IgyetGbnQxv%2Fhg0bBHUq3APq2WpSMa2O9Gq4sL4bE6%2FytEyeaVogwQ6rTP310yZB%2FQkj7Cl7RUmL5VwmrtNGGDekTiYPhFcGeLJoxKdIKpiNF9XMJgaLbl1IjnrSm7y%2BzSKSIu385MmU9zssJaEuUw1v0ypg22oM4xP09ngR3CqZU2Uct%2F5zf40%2BpJ5cARFTus4T%2F%2Bp4APw10uwl6aM%2F%2FbIZZP6NsFuG4Anri%2FsT%2FxzH8WEee%2FRoJrtttmlm%2BBtiBCvsnqllCcO2il8CIwwP3Bm2%2FeQJw04Af2KD%2B6ylWzoDJmJCsHHrXuM%2BwVynd3O2t%2FG9s7z8sR7zhwhlRrdYHnFSMs%2BULxqxYe8MPkwFADwa%2FpYUvsC5To99bqllCAci2FuXJQ1GJItCRJb6dZBLDHv1G%2B2Q4NohQpwFhGy40z99V3oBHqEIopKJxQwmNhFc%2B%2FyPLIenAnWyEP36a%2Ft0T2DLERGlLwZehxl37gM%2FykRfbGVTJXniCXkr%2Bv8gV8X01OwRX%2B8k0Hgkvg6bOJViSU8KMvdYUhhse5ts4c8c5CBzgnHJ9LKAsD5Sy1ucB%2FNYR9CrzAhHAuJ30ESGVIrRKJRFRyqXI9LykBSlgFAiBtGXrrqpRB6AbrNSYSnQX3dRf%2BMN4rEYc8dnwyLBxDDx1vq%2FBjqkAaCN%2Bs1Qnqa0DDSIGrMlX6iLbYJIcmxbRUzeV7MxnnCo3hkukIVMO6QBNPD%2BGa6iHawnhCvKYn7B9kXYOCfHgS23QqYY%2F8oDi%2FQ%2FEooJ%2Bz73LcOcvFvL%2Ba1XmO0UK2lcw865a7Nlhf2mWc%2BgsK8FVWM8rEWC2YKyIfOtRHbYVbdXpo%2Bw2y%2BNT57lX458YqRTxCERPr0%2F4wjdfgcOTpW%2Bmy4LzlHo&X-Amz-Signature=7ac10173194df48f37c69b1391536f9f5460418c705e05c3ac48b2d444863221&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVS6UHP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD9e%2B9ljB6knZbesGVfxkMZlkQ2BaCq1Oxqb9E6fKz3QIhAMXQroPuqKzC3tA9lE5%2BxQAQyy%2F4UvnrjOvasHO0IsMsKv8DCDQQABoMNjM3NDIzMTgzODA1IgyetGbnQxv%2Fhg0bBHUq3APq2WpSMa2O9Gq4sL4bE6%2FytEyeaVogwQ6rTP310yZB%2FQkj7Cl7RUmL5VwmrtNGGDekTiYPhFcGeLJoxKdIKpiNF9XMJgaLbl1IjnrSm7y%2BzSKSIu385MmU9zssJaEuUw1v0ypg22oM4xP09ngR3CqZU2Uct%2F5zf40%2BpJ5cARFTus4T%2F%2Bp4APw10uwl6aM%2F%2FbIZZP6NsFuG4Anri%2FsT%2FxzH8WEee%2FRoJrtttmlm%2BBtiBCvsnqllCcO2il8CIwwP3Bm2%2FeQJw04Af2KD%2B6ylWzoDJmJCsHHrXuM%2BwVynd3O2t%2FG9s7z8sR7zhwhlRrdYHnFSMs%2BULxqxYe8MPkwFADwa%2FpYUvsC5To99bqllCAci2FuXJQ1GJItCRJb6dZBLDHv1G%2B2Q4NohQpwFhGy40z99V3oBHqEIopKJxQwmNhFc%2B%2FyPLIenAnWyEP36a%2Ft0T2DLERGlLwZehxl37gM%2FykRfbGVTJXniCXkr%2Bv8gV8X01OwRX%2B8k0Hgkvg6bOJViSU8KMvdYUhhse5ts4c8c5CBzgnHJ9LKAsD5Sy1ucB%2FNYR9CrzAhHAuJ30ESGVIrRKJRFRyqXI9LykBSlgFAiBtGXrrqpRB6AbrNSYSnQX3dRf%2BMN4rEYc8dnwyLBxDDx1vq%2FBjqkAaCN%2Bs1Qnqa0DDSIGrMlX6iLbYJIcmxbRUzeV7MxnnCo3hkukIVMO6QBNPD%2BGa6iHawnhCvKYn7B9kXYOCfHgS23QqYY%2F8oDi%2FQ%2FEooJ%2Bz73LcOcvFvL%2Ba1XmO0UK2lcw865a7Nlhf2mWc%2BgsK8FVWM8rEWC2YKyIfOtRHbYVbdXpo%2Bw2y%2BNT57lX458YqRTxCERPr0%2F4wjdfgcOTpW%2Bmy4LzlHo&X-Amz-Signature=77da6aee9bf117f0080ae27b849c1518f5bb080cd56dc06d0c5102d3ee71e2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVS6UHP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD9e%2B9ljB6knZbesGVfxkMZlkQ2BaCq1Oxqb9E6fKz3QIhAMXQroPuqKzC3tA9lE5%2BxQAQyy%2F4UvnrjOvasHO0IsMsKv8DCDQQABoMNjM3NDIzMTgzODA1IgyetGbnQxv%2Fhg0bBHUq3APq2WpSMa2O9Gq4sL4bE6%2FytEyeaVogwQ6rTP310yZB%2FQkj7Cl7RUmL5VwmrtNGGDekTiYPhFcGeLJoxKdIKpiNF9XMJgaLbl1IjnrSm7y%2BzSKSIu385MmU9zssJaEuUw1v0ypg22oM4xP09ngR3CqZU2Uct%2F5zf40%2BpJ5cARFTus4T%2F%2Bp4APw10uwl6aM%2F%2FbIZZP6NsFuG4Anri%2FsT%2FxzH8WEee%2FRoJrtttmlm%2BBtiBCvsnqllCcO2il8CIwwP3Bm2%2FeQJw04Af2KD%2B6ylWzoDJmJCsHHrXuM%2BwVynd3O2t%2FG9s7z8sR7zhwhlRrdYHnFSMs%2BULxqxYe8MPkwFADwa%2FpYUvsC5To99bqllCAci2FuXJQ1GJItCRJb6dZBLDHv1G%2B2Q4NohQpwFhGy40z99V3oBHqEIopKJxQwmNhFc%2B%2FyPLIenAnWyEP36a%2Ft0T2DLERGlLwZehxl37gM%2FykRfbGVTJXniCXkr%2Bv8gV8X01OwRX%2B8k0Hgkvg6bOJViSU8KMvdYUhhse5ts4c8c5CBzgnHJ9LKAsD5Sy1ucB%2FNYR9CrzAhHAuJ30ESGVIrRKJRFRyqXI9LykBSlgFAiBtGXrrqpRB6AbrNSYSnQX3dRf%2BMN4rEYc8dnwyLBxDDx1vq%2FBjqkAaCN%2Bs1Qnqa0DDSIGrMlX6iLbYJIcmxbRUzeV7MxnnCo3hkukIVMO6QBNPD%2BGa6iHawnhCvKYn7B9kXYOCfHgS23QqYY%2F8oDi%2FQ%2FEooJ%2Bz73LcOcvFvL%2Ba1XmO0UK2lcw865a7Nlhf2mWc%2BgsK8FVWM8rEWC2YKyIfOtRHbYVbdXpo%2Bw2y%2BNT57lX458YqRTxCERPr0%2F4wjdfgcOTpW%2Bmy4LzlHo&X-Amz-Signature=58e56692706f769c285c5f8d0c05a3afca86943c74a23796a7667cb1c0e720c4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVS6UHP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD9e%2B9ljB6knZbesGVfxkMZlkQ2BaCq1Oxqb9E6fKz3QIhAMXQroPuqKzC3tA9lE5%2BxQAQyy%2F4UvnrjOvasHO0IsMsKv8DCDQQABoMNjM3NDIzMTgzODA1IgyetGbnQxv%2Fhg0bBHUq3APq2WpSMa2O9Gq4sL4bE6%2FytEyeaVogwQ6rTP310yZB%2FQkj7Cl7RUmL5VwmrtNGGDekTiYPhFcGeLJoxKdIKpiNF9XMJgaLbl1IjnrSm7y%2BzSKSIu385MmU9zssJaEuUw1v0ypg22oM4xP09ngR3CqZU2Uct%2F5zf40%2BpJ5cARFTus4T%2F%2Bp4APw10uwl6aM%2F%2FbIZZP6NsFuG4Anri%2FsT%2FxzH8WEee%2FRoJrtttmlm%2BBtiBCvsnqllCcO2il8CIwwP3Bm2%2FeQJw04Af2KD%2B6ylWzoDJmJCsHHrXuM%2BwVynd3O2t%2FG9s7z8sR7zhwhlRrdYHnFSMs%2BULxqxYe8MPkwFADwa%2FpYUvsC5To99bqllCAci2FuXJQ1GJItCRJb6dZBLDHv1G%2B2Q4NohQpwFhGy40z99V3oBHqEIopKJxQwmNhFc%2B%2FyPLIenAnWyEP36a%2Ft0T2DLERGlLwZehxl37gM%2FykRfbGVTJXniCXkr%2Bv8gV8X01OwRX%2B8k0Hgkvg6bOJViSU8KMvdYUhhse5ts4c8c5CBzgnHJ9LKAsD5Sy1ucB%2FNYR9CrzAhHAuJ30ESGVIrRKJRFRyqXI9LykBSlgFAiBtGXrrqpRB6AbrNSYSnQX3dRf%2BMN4rEYc8dnwyLBxDDx1vq%2FBjqkAaCN%2Bs1Qnqa0DDSIGrMlX6iLbYJIcmxbRUzeV7MxnnCo3hkukIVMO6QBNPD%2BGa6iHawnhCvKYn7B9kXYOCfHgS23QqYY%2F8oDi%2FQ%2FEooJ%2Bz73LcOcvFvL%2Ba1XmO0UK2lcw865a7Nlhf2mWc%2BgsK8FVWM8rEWC2YKyIfOtRHbYVbdXpo%2Bw2y%2BNT57lX458YqRTxCERPr0%2F4wjdfgcOTpW%2Bmy4LzlHo&X-Amz-Signature=31456f6af949881c762e4835215fd075072f49bb83122e25f173e579d8257e00&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
