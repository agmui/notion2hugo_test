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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632A62CAW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlqDO0zU82wSnqsev0k6GX2tJF7te8Yg6A2%2BW%2FPUfyCAiEAzbk9DZMMDy4FzGaMFQjx9TXSf9N%2FrVM86tiGfvSKL7cqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCbvg8CHEHhuQCL0CrcA0t8k4fiNgJ9uAdW9cdtcbQdTnvOI9c6dd2rH98WW32u1n2o6tt2u4rvB5gO%2Fi7Ck1PQLB2Rw20bbFNmy94bCjUUXbldEV18nDsI48oniPD5aSP78lERwz3VJGItjPa3Vdz%2FoU36z6sn1oeUtexmylzdzMZ5nLWS%2Bvfqy55qwv4LkssgeyTZAkUEiQ8u9DNYqciNRyykiBq%2FvKeqkSmt%2FdvzVh%2BN65uCZ699nCat5p5O6ySUonJVV%2F0BcieueDfO8e3u3FawjUeP2Al2jIIPtPvgR%2FYHpdoxo5AeZ76DxSZnQ%2B4TAUCYovpHXsZBdkQlNi7gZxLnpEkJfgeMgPYNu6rFZD98QTBAtznP0ERfwnDhwVVm4vVZ2LJV3O%2BpJMIXJFLNdYOQD2aFBF31ug%2FPgDWBzNeYB0hVV9dgqjvbLD%2FrEL8amoFqlWTA6cILiN2ZY7R%2BIowWC%2Fa2njsqCR5nbxD99vu3NMWtYb2U7ob1J8FOw4uJHmbmnnztIzWVulA4%2FrMh38Y8u%2FFmzDB96gmQSj1Zrq%2B8MM%2FVhT5P2O7OgX0J6o%2FPT8cYy%2FKoGPU5jD7ryRm2hKq2x74an25WFFOJIW8MV6CDS8URXyXg82%2BKk0F3A9MQEjRxUA3IWkiLMMLmlMMGOqUBsxfQd3ilKocgeH0bwm5DJz%2BtiYhMAbn2gGgVcKYs3P9PxeeKX5JpSdlSRLDtGzuuvn2cPjCU9jcdWfD88N4%2FHZczZmf57AjFVSm6JV8XuJHaiFhJX31jDHI941OrPQGqkOVp3KWDOe6sOAbY4TAWIavtfI0yDYZJ5Op8dEs%2F4lJkEN8aiLzeFfe1qzDoXdYs8TxQ%2BzI457O7lKij8E3wvO98TusC&X-Amz-Signature=106ddd2aac61d1e70a659c1b306df533863cc8f1c7ae05881d45f190fa9b91af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632A62CAW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlqDO0zU82wSnqsev0k6GX2tJF7te8Yg6A2%2BW%2FPUfyCAiEAzbk9DZMMDy4FzGaMFQjx9TXSf9N%2FrVM86tiGfvSKL7cqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCbvg8CHEHhuQCL0CrcA0t8k4fiNgJ9uAdW9cdtcbQdTnvOI9c6dd2rH98WW32u1n2o6tt2u4rvB5gO%2Fi7Ck1PQLB2Rw20bbFNmy94bCjUUXbldEV18nDsI48oniPD5aSP78lERwz3VJGItjPa3Vdz%2FoU36z6sn1oeUtexmylzdzMZ5nLWS%2Bvfqy55qwv4LkssgeyTZAkUEiQ8u9DNYqciNRyykiBq%2FvKeqkSmt%2FdvzVh%2BN65uCZ699nCat5p5O6ySUonJVV%2F0BcieueDfO8e3u3FawjUeP2Al2jIIPtPvgR%2FYHpdoxo5AeZ76DxSZnQ%2B4TAUCYovpHXsZBdkQlNi7gZxLnpEkJfgeMgPYNu6rFZD98QTBAtznP0ERfwnDhwVVm4vVZ2LJV3O%2BpJMIXJFLNdYOQD2aFBF31ug%2FPgDWBzNeYB0hVV9dgqjvbLD%2FrEL8amoFqlWTA6cILiN2ZY7R%2BIowWC%2Fa2njsqCR5nbxD99vu3NMWtYb2U7ob1J8FOw4uJHmbmnnztIzWVulA4%2FrMh38Y8u%2FFmzDB96gmQSj1Zrq%2B8MM%2FVhT5P2O7OgX0J6o%2FPT8cYy%2FKoGPU5jD7ryRm2hKq2x74an25WFFOJIW8MV6CDS8URXyXg82%2BKk0F3A9MQEjRxUA3IWkiLMMLmlMMGOqUBsxfQd3ilKocgeH0bwm5DJz%2BtiYhMAbn2gGgVcKYs3P9PxeeKX5JpSdlSRLDtGzuuvn2cPjCU9jcdWfD88N4%2FHZczZmf57AjFVSm6JV8XuJHaiFhJX31jDHI941OrPQGqkOVp3KWDOe6sOAbY4TAWIavtfI0yDYZJ5Op8dEs%2F4lJkEN8aiLzeFfe1qzDoXdYs8TxQ%2BzI457O7lKij8E3wvO98TusC&X-Amz-Signature=a430d228c3b2700876218254ff62c9c427f0135cf8884487c0cc61d52261f40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
