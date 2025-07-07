---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623V5F7GP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFDmhUW83sI7tvm1DA0t%2FbSwWoPp3%2Bsy916kfiz27StQAiBqYXMmEiec23XrZtH%2FFd8zv57i8irLsSQsWbmQUS443Sr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMacVKsti9CPXlS7TkKtwDARrz2u%2Fk9wNoQL%2By7qo%2FEUWX2WFiCRTij4gRpm7Mf8BdKZndtJLP5mKsH%2FMgOKBlb4hBsttK9Sr5VB4X%2Bd7LZBQ1AcVhzbQtKfw36QNYqNXCHIyraGzjyJvuPZ9bA2%2BXYYGi%2F2yok1p3T6MF1FnKN9ktUmG5hJnwVl8A5K8cVDrBWPNW0zrgWyEARhyRpcV6LnDlXVLlTs477dsfNLUt9uRxtQZkm54cHIRNBWSamlvqK8Tz3VGoVgHEysNs%2BO%2B2a6sgbBsTXTGEBDaVrxOHx8Fc66qyRmXt9X3KdqIGEpydYgDLBwjk8npiIXjBeG4xMKVRoJw%2FBFyDTss7RzYdf%2FiMWL7iPfPMyrbOa7oraaori1hePnflqr6uJNH%2FC%2B8Iy4tX%2FhQO5AMw%2Bp6fQuOHMAsFei3HLO7v94dwq03YDvsGjtYEf8u6UAImL8w7kqUG%2BS5vtKvat60RWaAoGC8OqYof%2FWxdsB%2Frfx6SBa7STi1b2pAwO8cYmh3%2FluC2XZFgIBHf5Q8PIPrcFqAUKypx99dZ2RECupPUmkrePUqZ2gouzprZuYZyu3jF2erMoqnSal%2FHjdVZpS3BixlAMreneJN%2BciTiLyZ7Bo0SLCG0%2B%2BPgLD61tTU25lcMxpYwvY%2BswwY6pgGyLew%2BKXeWfxUJSBdZg%2FWXFqk%2FX6ykCuPHWyxQaMPsqnw%2Fk73fP0e5jaVoH4M1AgUYKhCuD7YWLQGL5%2Fe6ZBBJDDiwgnF1%2B5Ne6t5DikBDJeBlo7kbp%2F6qsYAmxSpzbsjQgmYKIbkfTeOKMsFuq2PO2PLxp7GQ9SSX%2BJ5ttQOlKSyTnKbvYc%2B8xju5uS6UdGUQC7vf555rRXWbBHoGiJxQcxHqxsVr&X-Amz-Signature=2b9b4af49f9a6ada0ddcdc0e2001d7182b1fa52773bddd48da78190204fcd729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623V5F7GP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFDmhUW83sI7tvm1DA0t%2FbSwWoPp3%2Bsy916kfiz27StQAiBqYXMmEiec23XrZtH%2FFd8zv57i8irLsSQsWbmQUS443Sr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMacVKsti9CPXlS7TkKtwDARrz2u%2Fk9wNoQL%2By7qo%2FEUWX2WFiCRTij4gRpm7Mf8BdKZndtJLP5mKsH%2FMgOKBlb4hBsttK9Sr5VB4X%2Bd7LZBQ1AcVhzbQtKfw36QNYqNXCHIyraGzjyJvuPZ9bA2%2BXYYGi%2F2yok1p3T6MF1FnKN9ktUmG5hJnwVl8A5K8cVDrBWPNW0zrgWyEARhyRpcV6LnDlXVLlTs477dsfNLUt9uRxtQZkm54cHIRNBWSamlvqK8Tz3VGoVgHEysNs%2BO%2B2a6sgbBsTXTGEBDaVrxOHx8Fc66qyRmXt9X3KdqIGEpydYgDLBwjk8npiIXjBeG4xMKVRoJw%2FBFyDTss7RzYdf%2FiMWL7iPfPMyrbOa7oraaori1hePnflqr6uJNH%2FC%2B8Iy4tX%2FhQO5AMw%2Bp6fQuOHMAsFei3HLO7v94dwq03YDvsGjtYEf8u6UAImL8w7kqUG%2BS5vtKvat60RWaAoGC8OqYof%2FWxdsB%2Frfx6SBa7STi1b2pAwO8cYmh3%2FluC2XZFgIBHf5Q8PIPrcFqAUKypx99dZ2RECupPUmkrePUqZ2gouzprZuYZyu3jF2erMoqnSal%2FHjdVZpS3BixlAMreneJN%2BciTiLyZ7Bo0SLCG0%2B%2BPgLD61tTU25lcMxpYwvY%2BswwY6pgGyLew%2BKXeWfxUJSBdZg%2FWXFqk%2FX6ykCuPHWyxQaMPsqnw%2Fk73fP0e5jaVoH4M1AgUYKhCuD7YWLQGL5%2Fe6ZBBJDDiwgnF1%2B5Ne6t5DikBDJeBlo7kbp%2F6qsYAmxSpzbsjQgmYKIbkfTeOKMsFuq2PO2PLxp7GQ9SSX%2BJ5ttQOlKSyTnKbvYc%2B8xju5uS6UdGUQC7vf555rRXWbBHoGiJxQcxHqxsVr&X-Amz-Signature=59e5687fc8eafd202d138fa20ee6c875c018b9fd10e33cc5528304bfc0ae0c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
