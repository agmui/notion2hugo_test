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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627X5U6Z3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCSqRiIqB3EnjiUXvDhFQTyCK4ppsoPW5q%2FQwLpflm4PQIgLvne%2FkH2Jpb0Q%2BLWxrMZZHlMSVFTyuql0B1XMmeroJEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABT5sA%2FdA9z7Ah3PyrcA9JGOitH6YZ5PKe3mg5iIf6pVqOzoxjj5IXUrzrQXyOqf%2FLRUz6viGCCw3MFnjSDhkn4tuKxqof2Yd%2FZPmSCkFC7YT4gVntriUMH5jD2HIMJ%2BMiO%2F0FaKtN4sD2l86stzA8X6l9CE2eGPNivA7iQ3XbUalQdhqywkz2PMXV1Quk1%2B4QeByTRmX7g7E4oc6G2Xx3pgaiz4K2RhXHlJoD08Yl62rgYILcpDo34ndYDb4o190HnrbZB95It9kdKPVIrUUBdyuHc%2Fs13FaZULxhnylLF0ok16vrjFym2agHsv%2B5l8OPq14MbJ2M5BtbTVjk8IGD5oFe0wyQIbQwXf1DpdjnJ3RCnKPUdZyPjpn4TlBKUE5MIZhVoLAmSI2alN9chQvarbgT7MJTX8UoyzLgi3zf4uCtmrbIaUsR6d88DAroeQ7z6WF92EoQNIhRC1uZn%2F3Pu330MARuoQRmop%2FWdh2CaLXz%2FkuA7Z%2BlxKq%2FNmDy2bdnZNjRW3WJiVGVc9Tpr7y9pB9K1GcpGoeWMwez7kzdwXM3U3hgsDrznYDqH564V%2Fr%2FxIT2LhkNyko%2Bnj1phgg%2FpRfc%2FR4bZpr9D0dWb6PyNnI9onYPkF40weRMVGxDuRawYLgygJzX6NJ5RMJHQ6MMGOqUBqyqZwZU73IZy2QImB9%2Bz4B%2FMe%2FnomVrXmk4hRDGgvEKdm601sVWwDUk6QT9JtARC9jANxPuq1NzRpPbLnTbCA1PrgKkQB3Bjocv%2Byq0%2BN%2Fb%2B6U68UbZSAiQOFPPEksCqCWSo%2F7xnGv3luxV0bOs%2BO6o3lRYDln4ivZ9SI2y%2FF4B6tpniv5SE28cRx7BstNt6PxQKiNXc7RjquipMDCapnOp0wx82&X-Amz-Signature=eb7ed4de21714967251e2ae08b3580f141a92b6f55219b87bc59fa2294a60237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627X5U6Z3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCSqRiIqB3EnjiUXvDhFQTyCK4ppsoPW5q%2FQwLpflm4PQIgLvne%2FkH2Jpb0Q%2BLWxrMZZHlMSVFTyuql0B1XMmeroJEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABT5sA%2FdA9z7Ah3PyrcA9JGOitH6YZ5PKe3mg5iIf6pVqOzoxjj5IXUrzrQXyOqf%2FLRUz6viGCCw3MFnjSDhkn4tuKxqof2Yd%2FZPmSCkFC7YT4gVntriUMH5jD2HIMJ%2BMiO%2F0FaKtN4sD2l86stzA8X6l9CE2eGPNivA7iQ3XbUalQdhqywkz2PMXV1Quk1%2B4QeByTRmX7g7E4oc6G2Xx3pgaiz4K2RhXHlJoD08Yl62rgYILcpDo34ndYDb4o190HnrbZB95It9kdKPVIrUUBdyuHc%2Fs13FaZULxhnylLF0ok16vrjFym2agHsv%2B5l8OPq14MbJ2M5BtbTVjk8IGD5oFe0wyQIbQwXf1DpdjnJ3RCnKPUdZyPjpn4TlBKUE5MIZhVoLAmSI2alN9chQvarbgT7MJTX8UoyzLgi3zf4uCtmrbIaUsR6d88DAroeQ7z6WF92EoQNIhRC1uZn%2F3Pu330MARuoQRmop%2FWdh2CaLXz%2FkuA7Z%2BlxKq%2FNmDy2bdnZNjRW3WJiVGVc9Tpr7y9pB9K1GcpGoeWMwez7kzdwXM3U3hgsDrznYDqH564V%2Fr%2FxIT2LhkNyko%2Bnj1phgg%2FpRfc%2FR4bZpr9D0dWb6PyNnI9onYPkF40weRMVGxDuRawYLgygJzX6NJ5RMJHQ6MMGOqUBqyqZwZU73IZy2QImB9%2Bz4B%2FMe%2FnomVrXmk4hRDGgvEKdm601sVWwDUk6QT9JtARC9jANxPuq1NzRpPbLnTbCA1PrgKkQB3Bjocv%2Byq0%2BN%2Fb%2B6U68UbZSAiQOFPPEksCqCWSo%2F7xnGv3luxV0bOs%2BO6o3lRYDln4ivZ9SI2y%2FF4B6tpniv5SE28cRx7BstNt6PxQKiNXc7RjquipMDCapnOp0wx82&X-Amz-Signature=07558b347c6244af8fdfafda2a9c1d0986bb89896c3386f6326b8494553cc490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
