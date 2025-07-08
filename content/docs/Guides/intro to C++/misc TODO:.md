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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D6HUM6R%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbcidQXjJc7DDjgOxHEigaHsTJAgD4tFS0BU6Rvr0RWAiBs%2FWbpN0lq5r9H%2FnNagvNxiO%2B1hSi2MaMM0Q2juZ1PoiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMADeSdlfg7%2BT3VjXLKtwDre9d%2FTcR4PeEU0pbln99jggipiMZtf6GHW0AaG5Di4A2bhiSBfZf1jJBMD7ZtWHGrcUIAuMhHw2qsZmFAA6fExbMrAhMQSSX8vcJ5gqzklxAGwOr%2FJmlxA1oznpe7vLM%2F%2B6w9zJdZo9SX%2BV0FF72iOyj68Q2xtwj1aeeA4zjU55l1yeMXRmfC49ay99OTX8KYFP535pExahPZ72qZI%2B2voESoInHBMi7a0OhuzVhQI%2FKQtbMPH1kkiDyQaB9EF3KK%2FvWxg5BNqKP43pQdM2EXLHyw2KYmOcowWGgRfbetKY4QMIpiOHXjSc4u6A%2BgRb%2BKMfzM5a5EIU1oX9tMJjg%2Fvzs17PUqsKDbRGehDHDZkwB6VRDddwk8bQ6Odcn%2BpDZRn2PFXF9fLoWNQo09ZWP%2Bub%2Fv2Kxd1hB%2B3Btu3crvcC1VEYspjG%2B%2Fet0GTEpPPGJlUG1cyCgyf0KKu%2BCZdDsHiMS%2B%2BX9ZcAVGT4kp3LJ289uaqsV0hysS2BKRcSGA3WHjP2TUOhDD74E0%2Bbv1ymZQKT8NI9Img6CXC3wz9LfSXnkrZwVe96nRPj3r9DvmITFJZs29LXstFzHsLx1QpIoRooVSPnMTHBGr75hUPf37rwlEAuQVE%2BgBoqluwwwmaa0wwY6pgF3m5q0sl%2FN5NIzjqWnKC%2BjSH3sdEf%2FKoGDY6q%2FRHG2Jf6yOZ%2FnSHay3W0jjFMHRw8nh0H5MlsnT4NVEtgz02wtLHi6f4tJB0dAc%2FBIlktGBMWUKbO7op6kJFwu%2BiajFq7%2BgbA1oA09z0xfzj3mgQP9Ut3DwyZfoXkozwp5CjI5dSdxjON1p8q2m%2FMC8xHqtFGhB5RVEPg%2BW9%2FKgUwm%2BfkAhQAHhaeh&X-Amz-Signature=0cb22f02ef021fbb8dc36bd1e7a77c79e8f5358464f35cbc66bc70f5dfd910f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D6HUM6R%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbcidQXjJc7DDjgOxHEigaHsTJAgD4tFS0BU6Rvr0RWAiBs%2FWbpN0lq5r9H%2FnNagvNxiO%2B1hSi2MaMM0Q2juZ1PoiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMADeSdlfg7%2BT3VjXLKtwDre9d%2FTcR4PeEU0pbln99jggipiMZtf6GHW0AaG5Di4A2bhiSBfZf1jJBMD7ZtWHGrcUIAuMhHw2qsZmFAA6fExbMrAhMQSSX8vcJ5gqzklxAGwOr%2FJmlxA1oznpe7vLM%2F%2B6w9zJdZo9SX%2BV0FF72iOyj68Q2xtwj1aeeA4zjU55l1yeMXRmfC49ay99OTX8KYFP535pExahPZ72qZI%2B2voESoInHBMi7a0OhuzVhQI%2FKQtbMPH1kkiDyQaB9EF3KK%2FvWxg5BNqKP43pQdM2EXLHyw2KYmOcowWGgRfbetKY4QMIpiOHXjSc4u6A%2BgRb%2BKMfzM5a5EIU1oX9tMJjg%2Fvzs17PUqsKDbRGehDHDZkwB6VRDddwk8bQ6Odcn%2BpDZRn2PFXF9fLoWNQo09ZWP%2Bub%2Fv2Kxd1hB%2B3Btu3crvcC1VEYspjG%2B%2Fet0GTEpPPGJlUG1cyCgyf0KKu%2BCZdDsHiMS%2B%2BX9ZcAVGT4kp3LJ289uaqsV0hysS2BKRcSGA3WHjP2TUOhDD74E0%2Bbv1ymZQKT8NI9Img6CXC3wz9LfSXnkrZwVe96nRPj3r9DvmITFJZs29LXstFzHsLx1QpIoRooVSPnMTHBGr75hUPf37rwlEAuQVE%2BgBoqluwwwmaa0wwY6pgF3m5q0sl%2FN5NIzjqWnKC%2BjSH3sdEf%2FKoGDY6q%2FRHG2Jf6yOZ%2FnSHay3W0jjFMHRw8nh0H5MlsnT4NVEtgz02wtLHi6f4tJB0dAc%2FBIlktGBMWUKbO7op6kJFwu%2BiajFq7%2BgbA1oA09z0xfzj3mgQP9Ut3DwyZfoXkozwp5CjI5dSdxjON1p8q2m%2FMC8xHqtFGhB5RVEPg%2BW9%2FKgUwm%2BfkAhQAHhaeh&X-Amz-Signature=35fb52257040ac78fe3aa00d43f86e2cd168558f5b85197173cbba04d87ff572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
