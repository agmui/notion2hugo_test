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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVLYQZQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHQiqBc7vE8IrCELT5rMkzhLFwygv6tnjaBtfimldtoAiA9DghMo2jeXZyYGOUPT4yFIG2gDxyk8%2FHk7aWFoKV%2FgSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9Pebc6dlr%2BZg%2BWGKtwDWNg6CupK%2BtySbx40vx1viUle%2Fl2jqjzf6nUBzzt5NYGre%2BcMRqK1ETRnD8jCM15UDtMChEy04fjW3h62bf1eFLXnZ2%2BPStXTCW%2F92dL6sYqO6jYSeQDXwFmcoi3dtKUlyRF3bTP%2BCB04pmDFihiIW%2FfQx5vKu%2FwrUODB3Y%2BWKBwINwsYg6L31cyl2XIOYqOIQL5Kj8ML9%2FIIX%2BXAO9IkE%2BEJ6sceU4ZFYC2R9XPSKAQzrh%2Fi5aAbQQKb09kllzis0sPx4t%2Bj70HEqYxmCt7OvPZPsF3AiudSo4VpF1TsDhBWX72LZ1GwU%2FQob9%2Bo4DLFe3PS5kGD7l1s56A%2BBI3RXRmmDnFmhg0S2l75lY462T6uGBuwzIykTUx1gmS5RxZSUYZYqvG1BtuuB131kgM6wmaBogB%2BVjgvWEnaj%2BQHyPZr3b5Ze3mzsfGs114PcmfQjNDovVBx3rjB0xf8M5Pwi9mJOXILDFo37iCCtakmYIFQEzGlC7UL2NxvqLl0XBX%2BliwZnMy47aa5r0qQZJhbUtUfopDq%2BDu7%2FYJDq%2BLRVms%2BHLHy%2BGXGmxRPTLhYPuCC2Cd2w2xLxpC0FkqEBTwJ7iZMQKP8i24XK1Se%2F%2FtwWK%2FXb%2FymFNm3iTFpUtkw%2Bfu4vwY6pgE7XiZnEG7m7gom5Lt%2BxrQHoQXH3FcPhJ6iDtT8uS%2FVL5RcWbY5sqQulG8nCaNjTP8Ly572jYAZ8qzRQBl5roisE7IGH9HB0O2vlW9z%2FAqDZ3cLrJOMqas%2FsaWpxESpvesO71u%2BQl6rFXmhUIY%2Fh3JCi81dCxyFDAipslOy0aKbDV9ScYi4bL%2Fx9zIGLUM23WEtceb7HlZKUYK%2BWKq0TF%2FQh%2F3yEJF3&X-Amz-Signature=13f83d0bf54e439ddda10bd7db72a2964d530fcbc38fa6307c4ce74241d3119a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVLYQZQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHQiqBc7vE8IrCELT5rMkzhLFwygv6tnjaBtfimldtoAiA9DghMo2jeXZyYGOUPT4yFIG2gDxyk8%2FHk7aWFoKV%2FgSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9Pebc6dlr%2BZg%2BWGKtwDWNg6CupK%2BtySbx40vx1viUle%2Fl2jqjzf6nUBzzt5NYGre%2BcMRqK1ETRnD8jCM15UDtMChEy04fjW3h62bf1eFLXnZ2%2BPStXTCW%2F92dL6sYqO6jYSeQDXwFmcoi3dtKUlyRF3bTP%2BCB04pmDFihiIW%2FfQx5vKu%2FwrUODB3Y%2BWKBwINwsYg6L31cyl2XIOYqOIQL5Kj8ML9%2FIIX%2BXAO9IkE%2BEJ6sceU4ZFYC2R9XPSKAQzrh%2Fi5aAbQQKb09kllzis0sPx4t%2Bj70HEqYxmCt7OvPZPsF3AiudSo4VpF1TsDhBWX72LZ1GwU%2FQob9%2Bo4DLFe3PS5kGD7l1s56A%2BBI3RXRmmDnFmhg0S2l75lY462T6uGBuwzIykTUx1gmS5RxZSUYZYqvG1BtuuB131kgM6wmaBogB%2BVjgvWEnaj%2BQHyPZr3b5Ze3mzsfGs114PcmfQjNDovVBx3rjB0xf8M5Pwi9mJOXILDFo37iCCtakmYIFQEzGlC7UL2NxvqLl0XBX%2BliwZnMy47aa5r0qQZJhbUtUfopDq%2BDu7%2FYJDq%2BLRVms%2BHLHy%2BGXGmxRPTLhYPuCC2Cd2w2xLxpC0FkqEBTwJ7iZMQKP8i24XK1Se%2F%2FtwWK%2FXb%2FymFNm3iTFpUtkw%2Bfu4vwY6pgE7XiZnEG7m7gom5Lt%2BxrQHoQXH3FcPhJ6iDtT8uS%2FVL5RcWbY5sqQulG8nCaNjTP8Ly572jYAZ8qzRQBl5roisE7IGH9HB0O2vlW9z%2FAqDZ3cLrJOMqas%2FsaWpxESpvesO71u%2BQl6rFXmhUIY%2Fh3JCi81dCxyFDAipslOy0aKbDV9ScYi4bL%2Fx9zIGLUM23WEtceb7HlZKUYK%2BWKq0TF%2FQh%2F3yEJF3&X-Amz-Signature=ee480bd79492c554f4c88d4a07f272d57f06f7fd3b481b157d45bd0ef3595260&X-Amz-SignedHeaders=host&x-id=GetObject)

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
