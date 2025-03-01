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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFANIGAI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIC8iDQdpFIcleEQnVjpY4Mwo2X6JYgjBOMsbo6kingfOAiEAmJPBjbZAP7WOspeh6C5DG%2FdfpViFA%2F0ECgNpSV1dAB0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvsOmHJkfTEK5lWeSrcA%2BYTVmVqCzunHeEp48l6vUC8X1fKWnUCGtcy3bGaFT4bq8T9p%2FUrmgd1ay5kMKjlrW3uxoW3%2BhbRCAio6jJsXeA%2FPiMEu7vRh%2FIbQRM9W4QwMKF6hiE0L%2B85XxbAbOwGDUAQDA4TB8hk9ujD%2BKsvb63TSWCTN2YpE9i78FIVQ7wQ84iX7Y3umUW%2BqvuRvLP8qgs1xWT69c23qcDIR98a3yc4nTbpbE%2FFx9ufolYOSwFyVDU75YAR4FB7fJCR%2FVyHlVnBHP%2BWMpFaGy1%2FiukWzZzpQv%2BMhWfADd23aScn70BmhoGzTMIFbg3VIuRnPwO4wo0Y6JDi0l2qQZGIL6ogNWAjAJIH3vczKt3YmfAGFJa9Vl66kkE%2Bfz0m%2BeF8KE5G0J43X%2FwEyE3qkJw4USeBV6SM0HoaSpg%2B4rJU2fZEiAnW7Z0X53ox4qui9ZvPkPbYrDwlY3%2F04N334wmdtEMoZDirSja1SWQ9%2Fh6xBST1jz01KuzOa57081u48dxSvvDa5VKF0O%2FkVkNSY7VSNcuFLGusHGv5BkbaaKV8hoTOnweq0tNO3qIDISIbT1wbIzjBQE6lAaFbknKTi5rhg5dm9m%2BvNINWrdyqMSEgDrDX5LlriruTUmPKDDPVysXNMOm0i74GOqUBcL8Ps8TTZQKep%2B7H%2BfDXYfoRZqlyQLKmYUXAWjL9FNx5LwgSdWhId6zEte3scdVpsLezx%2F9tj%2FTcGH%2FH3AmeB9gOoLfc%2BY7P8a2iry9PYtukv%2Fku7ZIa8Q64idj3HgcFWsOetNeah803T7edEQJLTfComyFuB100ABYXIhUMJwF9Wmis6kjHDGy3f40UkMs1tdCVFiDTVZ%2B3uuoKGVYkkBB2p8FP&X-Amz-Signature=f6bb9aa00b75bbc853510a0f7beb152ee5ebb80e1b133fd83cf7aea791e6ba24&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFANIGAI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIC8iDQdpFIcleEQnVjpY4Mwo2X6JYgjBOMsbo6kingfOAiEAmJPBjbZAP7WOspeh6C5DG%2FdfpViFA%2F0ECgNpSV1dAB0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvsOmHJkfTEK5lWeSrcA%2BYTVmVqCzunHeEp48l6vUC8X1fKWnUCGtcy3bGaFT4bq8T9p%2FUrmgd1ay5kMKjlrW3uxoW3%2BhbRCAio6jJsXeA%2FPiMEu7vRh%2FIbQRM9W4QwMKF6hiE0L%2B85XxbAbOwGDUAQDA4TB8hk9ujD%2BKsvb63TSWCTN2YpE9i78FIVQ7wQ84iX7Y3umUW%2BqvuRvLP8qgs1xWT69c23qcDIR98a3yc4nTbpbE%2FFx9ufolYOSwFyVDU75YAR4FB7fJCR%2FVyHlVnBHP%2BWMpFaGy1%2FiukWzZzpQv%2BMhWfADd23aScn70BmhoGzTMIFbg3VIuRnPwO4wo0Y6JDi0l2qQZGIL6ogNWAjAJIH3vczKt3YmfAGFJa9Vl66kkE%2Bfz0m%2BeF8KE5G0J43X%2FwEyE3qkJw4USeBV6SM0HoaSpg%2B4rJU2fZEiAnW7Z0X53ox4qui9ZvPkPbYrDwlY3%2F04N334wmdtEMoZDirSja1SWQ9%2Fh6xBST1jz01KuzOa57081u48dxSvvDa5VKF0O%2FkVkNSY7VSNcuFLGusHGv5BkbaaKV8hoTOnweq0tNO3qIDISIbT1wbIzjBQE6lAaFbknKTi5rhg5dm9m%2BvNINWrdyqMSEgDrDX5LlriruTUmPKDDPVysXNMOm0i74GOqUBcL8Ps8TTZQKep%2B7H%2BfDXYfoRZqlyQLKmYUXAWjL9FNx5LwgSdWhId6zEte3scdVpsLezx%2F9tj%2FTcGH%2FH3AmeB9gOoLfc%2BY7P8a2iry9PYtukv%2Fku7ZIa8Q64idj3HgcFWsOetNeah803T7edEQJLTfComyFuB100ABYXIhUMJwF9Wmis6kjHDGy3f40UkMs1tdCVFiDTVZ%2B3uuoKGVYkkBB2p8FP&X-Amz-Signature=81a02bd7d880c4125528115295ca5fa641e92608655faf7ac70d140fbc8d7b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
