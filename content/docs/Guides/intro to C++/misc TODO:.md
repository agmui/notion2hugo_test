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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJGQEHX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHkqemrhSDqclCxXA7GjBjKtvVxDGuzlc1D5Io00cjg2AiEA61ooF1SNJAnzEub2UcRd5MtkFMh4LakV%2FBeNBsNiQV8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMJalPyqYfdFimArCrcA86HJ4nbAbW%2BEz2xav3%2BE3vohcUu6%2FZ0eeVpJomMprEVQzirSfu1kR%2FZtUlItHM6%2F11mww7p77PNn2LvnFsQK8CiATtYhC%2Bmh%2F6DggKvKQtV7mYqnLqnnXcvjxzhfUdcD8eqqTkr%2Fi9puzqWwOIbDxo3XXOe4A%2FxmP4pn5g6Tapz9ClTdCXP56HlNFdOJ7q0la8KiVsgcoBrjouJHLdHOqEcJiNg5G2NzCidP6sf7fkV0uGuJszRKe5JO6vsNxJsQ0IbgkxyQw2ItTAuZxKW8Q5pmUCr34KsU2kLyejGnQba4S3U4FE%2BP5dGFD6wJXHrygR039%2Bi4dgbWD6YNoPWIC158qpVT6s3Ng%2FoHYvsrsQbOoWVV5zVgoRlmlHgsVJkMqEmKDZ2PFOeLcEzTEc4BSxYVRyxOwIir5tkd5gdmlTgxOufiy4b0Skbuf1CUuZToEtyaN8g8s%2F%2FhFNmDB%2FyJLHW9zrcgKFNZqR8p8VpuLey364TtEWwlh1OdJNQ6b3TlAM4L%2FBmiUt2EbwT6cRJrYfoRZ5mYcRlH2JLgq1IN3g%2BLIMPzwwsXvHEWO47euafNgBVGYewwEtlOzD54dP8QsYJlswD1YjtIKRdcT9A1P0f72f7opH7bicuLUSAMMKz%2BdMGOqUBZq7lMmqTLmRgghCaKOIwz07IIhMHx%2BWoH%2BlF9tv5lWRFHzIZ%2FLLDk6O1NMogmKIqiXVGhwfIKCPtkIyBx7o1FGJRVOlLxDMOAAel%2FoXDk5ndTORufgKZEYgvQYGTCLhP2J4DgV1sxP9w69xW0lux64iJ%2FifwIs0RvCJ152ivS2K%2FVkALZkblk1INRc2WZ8L2uGFjub1wO5iYUpdf9FHPjaergVZk&X-Amz-Signature=ebee46f54e2fb0638678057f0b01166c0bedc9a80f50d753841f590d5e25accd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJGQEHX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHkqemrhSDqclCxXA7GjBjKtvVxDGuzlc1D5Io00cjg2AiEA61ooF1SNJAnzEub2UcRd5MtkFMh4LakV%2FBeNBsNiQV8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMJalPyqYfdFimArCrcA86HJ4nbAbW%2BEz2xav3%2BE3vohcUu6%2FZ0eeVpJomMprEVQzirSfu1kR%2FZtUlItHM6%2F11mww7p77PNn2LvnFsQK8CiATtYhC%2Bmh%2F6DggKvKQtV7mYqnLqnnXcvjxzhfUdcD8eqqTkr%2Fi9puzqWwOIbDxo3XXOe4A%2FxmP4pn5g6Tapz9ClTdCXP56HlNFdOJ7q0la8KiVsgcoBrjouJHLdHOqEcJiNg5G2NzCidP6sf7fkV0uGuJszRKe5JO6vsNxJsQ0IbgkxyQw2ItTAuZxKW8Q5pmUCr34KsU2kLyejGnQba4S3U4FE%2BP5dGFD6wJXHrygR039%2Bi4dgbWD6YNoPWIC158qpVT6s3Ng%2FoHYvsrsQbOoWVV5zVgoRlmlHgsVJkMqEmKDZ2PFOeLcEzTEc4BSxYVRyxOwIir5tkd5gdmlTgxOufiy4b0Skbuf1CUuZToEtyaN8g8s%2F%2FhFNmDB%2FyJLHW9zrcgKFNZqR8p8VpuLey364TtEWwlh1OdJNQ6b3TlAM4L%2FBmiUt2EbwT6cRJrYfoRZ5mYcRlH2JLgq1IN3g%2BLIMPzwwsXvHEWO47euafNgBVGYewwEtlOzD54dP8QsYJlswD1YjtIKRdcT9A1P0f72f7opH7bicuLUSAMMKz%2BdMGOqUBZq7lMmqTLmRgghCaKOIwz07IIhMHx%2BWoH%2BlF9tv5lWRFHzIZ%2FLLDk6O1NMogmKIqiXVGhwfIKCPtkIyBx7o1FGJRVOlLxDMOAAel%2FoXDk5ndTORufgKZEYgvQYGTCLhP2J4DgV1sxP9w69xW0lux64iJ%2FifwIs0RvCJ152ivS2K%2FVkALZkblk1INRc2WZ8L2uGFjub1wO5iYUpdf9FHPjaergVZk&X-Amz-Signature=922aafd6bf5df952a7b32e65738646144d9e1d0a79d88dbea223a04c7c223b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
