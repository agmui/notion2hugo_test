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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664J3FM7K%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVwpPHsYbEIcphrwEWRv7vNBv7J6cJYz5eu9sPny5sbAiEAqbHtZeNtoBUNZIjRT0UTiXfzhMA0hkAq88BpuQSov5UqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONPSR64JACHmNbT7CrcA9zVHXXxtBBMd80YgYBeJ7dtXfgL2OoHirSL38HGNRtpt3p5CrLMs7fPFv1Y0G0QJlCGAaQJuu%2B356XPfl4uiblN%2BjsnUk9kUoO2aLTKGlUOwXFSlkU7s7e1dBzSTp3MAe%2B2LW5j8J5Fp2ZcUxRQLcR0W98KElWyrx5np1VP1kHdiaXmOW8lSfXRxvqr0yRHPEzvxJ14db%2BPoWQDa0LF1JR9qx2a3xhjrb%2ByqEuKHZyrcjl1kMGDA0GLS7y2hEXb8NmnXHacFRAhyOu3q7GiIoS9AmplsShFAHG6RgapwR6mQwDiT%2BjKrsAwqZfVQh8sSBT4Aj8FOeMrrG0bhV5hnPWzLaSbk%2B35hGgTxlV%2BFPuvXFwNCguN9IbtmJqoViCVbZasSYLi26lMkrOpTdnvsbcB1djQ2VFc3iF6uzunbWMTkwBsvJ5DMhpT4r3VYNrCwsgwLJADLbobCvmGJZ5D21x62%2BeLDokg%2Bn4nkKFa175Kt7mo6vHmjzGn00AG0JdFFUH3SnPj767UKTMp8q9278xHMBA5vn%2BhJtrbtlaRjkK0x42VihOYJ9gl0zcs7xQaSM5GwzIJ6ktXxC7nwYfgJYWn7mPTZfxsC2KlWPH0mensHoUizOpIwsUpmWX%2BMPi82MIGOqUBfn%2Fp%2BXR729Np1aPqsYoe2g4jswoo%2FiYZTHDdNI9bVSA%2FoPkw3jeFfsf%2Bpqj2kWup1qyEC04PD%2FOt16WiG7BhzEMWUw6qhZGZslQsSAio2C2JUqNX8GgCA48hUqZf0CqSY4NvvHqSEatl9UKd3h2Zl0OS2P5Ou8b2%2B8OntvbszBLlVY0TzX5ecIZinjD1VtWJl%2BxbFgOP0tjkA4j1aNdYLpoB%2FbBt&X-Amz-Signature=8461dad1d65c54e96a29ccf9191df6027de8415557ea6e8e112a31ead1cc5e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664J3FM7K%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVwpPHsYbEIcphrwEWRv7vNBv7J6cJYz5eu9sPny5sbAiEAqbHtZeNtoBUNZIjRT0UTiXfzhMA0hkAq88BpuQSov5UqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONPSR64JACHmNbT7CrcA9zVHXXxtBBMd80YgYBeJ7dtXfgL2OoHirSL38HGNRtpt3p5CrLMs7fPFv1Y0G0QJlCGAaQJuu%2B356XPfl4uiblN%2BjsnUk9kUoO2aLTKGlUOwXFSlkU7s7e1dBzSTp3MAe%2B2LW5j8J5Fp2ZcUxRQLcR0W98KElWyrx5np1VP1kHdiaXmOW8lSfXRxvqr0yRHPEzvxJ14db%2BPoWQDa0LF1JR9qx2a3xhjrb%2ByqEuKHZyrcjl1kMGDA0GLS7y2hEXb8NmnXHacFRAhyOu3q7GiIoS9AmplsShFAHG6RgapwR6mQwDiT%2BjKrsAwqZfVQh8sSBT4Aj8FOeMrrG0bhV5hnPWzLaSbk%2B35hGgTxlV%2BFPuvXFwNCguN9IbtmJqoViCVbZasSYLi26lMkrOpTdnvsbcB1djQ2VFc3iF6uzunbWMTkwBsvJ5DMhpT4r3VYNrCwsgwLJADLbobCvmGJZ5D21x62%2BeLDokg%2Bn4nkKFa175Kt7mo6vHmjzGn00AG0JdFFUH3SnPj767UKTMp8q9278xHMBA5vn%2BhJtrbtlaRjkK0x42VihOYJ9gl0zcs7xQaSM5GwzIJ6ktXxC7nwYfgJYWn7mPTZfxsC2KlWPH0mensHoUizOpIwsUpmWX%2BMPi82MIGOqUBfn%2Fp%2BXR729Np1aPqsYoe2g4jswoo%2FiYZTHDdNI9bVSA%2FoPkw3jeFfsf%2Bpqj2kWup1qyEC04PD%2FOt16WiG7BhzEMWUw6qhZGZslQsSAio2C2JUqNX8GgCA48hUqZf0CqSY4NvvHqSEatl9UKd3h2Zl0OS2P5Ou8b2%2B8OntvbszBLlVY0TzX5ecIZinjD1VtWJl%2BxbFgOP0tjkA4j1aNdYLpoB%2FbBt&X-Amz-Signature=7e4dfb31712868e2ecb8bbb83280af2211dda6bfccb9a2e61dcc085278405edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
